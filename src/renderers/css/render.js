import transformProps from './transform-props';
import valueTypes from './value-types';
import prefixer from './prefixer';
import { isNum, isObj } from '../../inc/utils';

const TRANSLATE = 'translate';
const translateMap = {
  x: TRANSLATE + 'X',
  y: TRANSLATE + 'Y',
  z: TRANSLATE + 'Z'
};

export default function buildStylePropertyString(element, state, changedValues, enableHardwareAcceleration) {
  let propertyString = '';
  let transformString = '';
  let hasTransform = false;
  let transformHasZ = false;

  // First check if there are any changed transform values
  // and if true add all transform values
  // const numChangedValues = changedValues.length;
  // for (let i = 0; i < numChangedValues; i++) {
  //   const key = changedValues[i];

  //   // If this is a transform property, add all other transform props
  //   // to changedValues and then break
  //   if (transformProps[key]) {
  //     hasTransform = true;

  //     for (let key in state) {
  //       if (transformProps[key] && changedValues.indexOf(key) === -1) {
  //         changedValues.push(key);
  //       }
  //     }

  //     break;
  //   }
  // }

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

    if (transformProps[key]) {
      transformString += key + '(' + value + ') ';
      transformHasZ = (key === translateMap.z) ? true : transformHasZ;

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
