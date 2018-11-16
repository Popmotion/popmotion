import { State } from '../styler/types';
import getValueType from './value-types';
import {
  sortTransformProps,
  isTransformProp,
  isTransformOriginProp
} from './transform-props';
import prefixer from './prefixer';
import { aliasMap } from './render';

const blacklist = new Set(['scrollLeft', 'scrollTop']);

const styleRule = (key: string, value: string | number) =>
  `;${prefixer(key, true)}:${value}`;

/**
 * Build style property
 *
 * This function converts a Stylefire-formatted CSS style
 * object, eg:
 *
 * { x: 100, width: 100 }
 *
 * Into an object with default value types applied and default
 * transform order set:
 *
 * { transform: 'translateX(100px) translateZ(0)`, width: '100px' }
 */

const buildStyleProperty = (
  state: State,
  enableHardwareAcceleration: boolean = true,
  styles: State = {},
  transform: State = {},
  transformOrigin: State = {},
  transformKeys: string[] = []
) => {
  let transformIsDefault = true;
  let hasTransformOrigin = false;

  for (const k in state) {
    const key = aliasMap[k] ? aliasMap[k] : k;
    const value = state[k];
    const valueType = getValueType(key);
    const valueAsType =
      typeof value === 'number' && valueType
        ? valueType.transform(value)
        : value;

    if (isTransformProp(key)) {
      transform[key] = valueAsType;
      transformKeys.push(key);

      if (transformIsDefault) {
        if (
          (valueType.default && value !== valueType.default) ||
          (!valueType.default && value !== 0)
        ) {
          transformIsDefault = false;
        }
      }
    } else if (isTransformOriginProp(key)) {
      transformOrigin[key] = valueAsType;
      hasTransformOrigin = true;
    } else if (!blacklist.has(key)) {
      styles[key] = valueAsType;
    }
  }

  // Only process and set transform prop if values aren't defaults
  if (!transformIsDefault) {
    let transformString = '';
    let transformHasZ = false;
    transformKeys.sort(sortTransformProps);

    const numTransformKeys = transformKeys.length;
    for (let i = 0; i < numTransformKeys; i++) {
      const key = transformKeys[i];
      transformString += `${key}(${transform[key]}) `;
      transformHasZ = key === 'z' ? true : transformHasZ;
    }

    if (!transformHasZ && enableHardwareAcceleration) {
      transformString += 'translateZ(0)';
    }

    styles.transform = transformString;
  }

  if (hasTransformOrigin) {
    styles.transformOrigin = `${transformOrigin.transformOriginX ||
      0} ${transformOrigin.transformOriginY ||
      0} ${transformOrigin.transformOriginZ || 0}`;
  }

  return styles;
};

const buildStyleString = (enableHardwareAcceleration: boolean = true) => {
  /**
   * We create our states as ping-pong data structures, rather than creating
   * new ones every frame.
   */
  let next: State = {};
  let prev: State = {};

  /**
   * Because we expect this function to run multiple times a frame
   * we create and hold these data structures as mutative states.
   */
  const transform: State = {};
  const transformOrigin: State = {};
  const transformKeys: string[] = [];

  return (state: State) => {
    let style = '';

    transformKeys.length = 0;
    next = buildStyleProperty(
      state,
      enableHardwareAcceleration,
      next,
      transform,
      transformOrigin,
      transformKeys
    );

    for (const key in next) {
      const value = next[key];

      if (value !== prev[key]) {
        style += styleRule(key, value);
      }
    }

    [next, prev] = [prev, next];

    return style;
  };
};

export { buildStyleProperty, buildStyleString };
