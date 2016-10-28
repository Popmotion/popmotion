import transformProps from './transform-props';
import prefixer from './prefixer';

const TRANSLATE = 'translate';
const translateMap = {
  x: TRANSLATE + 'X',
  y: TRANSLATE + 'Y',
  z: TRANSLATE + 'Z'
};

function buildStylePropertyString(state, disableHardwareAcceleration) {
  let propertyString = '';
  let transformString = '';
  let transformHasZ = false;

  for (let key in state) {
    if (state.hasOwnProperty(key)) {
      const value = state[key];

      if (translateMap[key]) {
        key = translateMap[key];
      }

      if (transformProps[key]) {
        transformString += key + '(' + value + ') ';
        transformHasZ = (key === translateMap.z) ? true : transformHasZ;

      } else {
        propertyString += ';' + prefixer(key, true) + ':' + value;
      }
    }
  }

  if (transformString !== '') {
    if (!transformHasZ && !disableHardwareAcceleration) {
      transformString += translateMap.z + '(0)';
    }

    propertyString += ';' + prefixer('transform', true) + ':' + transformString;
  }

  return propertyString;
}

export default (element, disableHardwareAcceleration) => (values) => {
  const propertyString = buildStylePropertyString(values, disableHardwareAcceleration);
  element.style.cssText += propertyString;
};