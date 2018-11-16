import { State } from '../styler/types';
import getValueType from './value-types';
import { sortTransformProps, isTransformProp } from './transform-props';
import { aliasMap } from './render';

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
 * { transform: 'translateX(100px)`, width: '100px' }
 *
 * TODO: Reconcile with buildStylePropertyString
 */

const buildStyleProperty = (
  state: State,
  enableHardwareAcceleration: boolean = true
) => {
  const styles: State = {};
  const transform: State = {};
  const transformKeys: string[] = [];
  let transformIsDefault = true;

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
    } else {
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

  return styles;
};

export default buildStyleProperty;
