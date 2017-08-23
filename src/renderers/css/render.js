import transformProps from './transform-props';
import valueTypes from './value-types';
import prefixer from './prefixer';
import { isNum, isObj } from '../../inc/utils';

const {
  translate,
  translateX,
  translateY,
  translateZ,
  scale,
  scaleX,
  scaleY,
  scaleZ,
  rotate,
  rotateX,
  rotateY,
  rotateZ
} = transformProps;

const translateMap = {
  x: 'translateX',
  y: 'translateY',
  z: 'translateZ'
};

const transformPropOrder = [
  translate,
  translateX,
  translateY,
  translateZ,
  scale,
  scaleX,
  scaleY,
  scaleZ,
  rotate,
  rotateX,
  rotateY,
  rotateZ
];

function sortTransformProps(a, b) {
  return transformPropOrder.indexOf(a) - transformPropOrder.indexOf(b);
}

export default function buildStylePropertyString(element, state, changedValues, enableHardwareAcceleration) {
  let propertyString = '';
  let transformString = '';
  let hasTransform = false;
  let transformHasZ = false;

  // First check if there are any changed transform values
  // and if true add all transform values
  const numChangedValues = changedValues.length;
  for (let i = 0; i < numChangedValues; i++) {
    let key = changedValues[i];

    // If this is a transform property, add all other transform props
    // to changedValues and then break
    if (transformProps[key]) {
      hasTransform = true;

      for (let key in state) {
        if (transformProps[key] && changedValues.indexOf(key) === -1) {
          changedValues.push(key);
        }
      }

      break;
    }
  }

  changedValues.sort(sortTransformProps);

  // Now run through each property, and decide which is a plain style props,
  // a transform property and CSS vars and handle accordingly
  const totalNumChangedValues = changedValues.length;
  for (let i = 0; i < totalNumChangedValues; i++) {
    let key = changedValues[i];
    let value = state[key];

    if (translateMap[key]) {
      key = translateMap[key];
    }

    // If this is a number or object and we have filter, apply filter
    if (valueTypes[key] && (isNum(value) || isObj(value)) && valueTypes[key].transform) {
      value = valueTypes[key].transform(value);
    }

    // If a transform prop, add to transform string
    if (transformProps[key]) {
      transformString += key + '(' + value + ') ';
      transformHasZ = (key === translateMap.z) ? true : transformHasZ;

    // Or if a simple CSS property, set
    } else {
      propertyString += ';' + prefixer(key, true) + ':' + value;
    }
  }

  // If we have transform props, build a transform string
  if (hasTransform) {
    if (!transformHasZ && enableHardwareAcceleration) {
      transformString += translateMap.z + '(0)';
    }

    propertyString += ';' + prefixer('transform', true) + ':' + transformString;
  }

  element.style.cssText += propertyString;
}
