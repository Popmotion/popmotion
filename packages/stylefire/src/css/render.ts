import {
  isTransformProp,
  sortTransformProps,
  isTransformOriginProp
} from './transform-props';
import prefixer from './prefixer';
import getValueType from './value-types';
import { State } from '../styler/types';

export type AliasMap = { [key: string]: string };

export const aliasMap: AliasMap = {
  x: 'translateX',
  y: 'translateY',
  z: 'translateZ',
  originX: 'transformOriginX',
  originY: 'transformOriginY',
  originZ: 'transformOriginZ'
};

const NUMBER = 'number';
const OBJECT = 'object';
const COLON = ':';
const SEMI_COLON = ';';
const TRANSFORM_ORIGIN = 'transform-origin';
const TRANSFORM = 'transform';
const TRANSLATE_Z = 'translateZ';
const TRANSFORM_NONE = ';transform: none';

const styleRule = (key: string, value: string | number) =>
  `${SEMI_COLON}${key}${COLON}${value}`;

export default function buildStylePropertyString(
  state: State,
  changedValues: string[] | true = true,
  enableHardwareAcceleration: boolean = true,
  blacklist: Set<string>
) {
  const valuesToChange =
    changedValues === true ? Object.keys(state) : changedValues;
  let propertyString = '';
  let transformString = '';
  let hasTransformOrigin = false;
  let transformIsDefault = true;
  let hasTransform = false;
  let transformHasZ = false;

  // First check if there are any changed transform values
  // and if true add all transform values
  const numChangedValues = valuesToChange.length;
  for (let i = 0; i < numChangedValues; i++) {
    const key = valuesToChange[i];

    // If this is a transform property, add all other transform props
    // to changedValues
    if (isTransformProp(key)) {
      hasTransform = true;

      for (const stateKey in state) {
        if (
          isTransformProp(stateKey) &&
          valuesToChange.indexOf(stateKey) === -1
        ) {
          valuesToChange.push(stateKey);
        }
      }

      break;
    }
  }

  valuesToChange.sort(sortTransformProps);

  // Now run through each property, and decide which is a plain style props,
  // a transform property and CSS vars and handle accordingly
  const totalNumChangedValues = valuesToChange.length;
  for (let i = 0; i < totalNumChangedValues; i++) {
    const key = valuesToChange[i];
    if (blacklist.has(key)) continue;

    const isTransformKey = isTransformProp(key);
    let value: any = state[key];

    // If this is a number or object and we have filter, apply filter
    const valueType = getValueType(key);

    // We want to check if any transform *isn't* its value type's default, so we can unset the transform
    // if every transform *is*
    if (isTransformKey) {
      if (
        (valueType.default && value !== valueType.default) ||
        (!valueType.default && value !== 0)
      ) {
        transformIsDefault = false;
      }
    }

    if (
      valueType &&
      (typeof value === NUMBER || typeof value === OBJECT) &&
      valueType.transform
    ) {
      value = valueType.transform(value);
    }

    // If a transform prop, add to transform string
    if (isTransformKey) {
      transformString += key + '(' + value + ') ';
      transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;
    } else if (isTransformOriginProp(key)) {
      state[key] = value;
      hasTransformOrigin = true;

      // Or if a simple CSS property, set
    } else {
      propertyString += styleRule(prefixer(key, true), value);
    }
  }

  // If we have transform origin, set
  if (hasTransformOrigin) {
    propertyString += styleRule(
      TRANSFORM_ORIGIN,
      `${state.transformOriginX || 0} ${state.transformOriginY ||
        0} ${state.transformOriginZ || 0}`
    );
  }

  // If we have transform props, build a transform string
  if (hasTransform) {
    if (!transformHasZ && enableHardwareAcceleration) {
      transformString += `${TRANSLATE_Z}(0)`;
    }

    propertyString += styleRule(
      TRANSFORM,
      transformIsDefault ? TRANSFORM_NONE : transformString
    );
  }

  return propertyString;
}
