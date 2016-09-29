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
      if (translateMap[key]) {
        key = translateMap[key];
      }
      const value = state[key];

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
      transformString += translateMap.z + '(0px)';
    }

    propertyString += ';' + prefixer('transform',true) + ':' + transformString;
  }

  return propertyString;
}

export default (element, disableHardwareAcceleration) => (values) => {
  const state = values.get();
  const propertyString = buildStylePropertyString(state, disableHardwareAcceleration);
  element.style.cssText += propertyString;
};