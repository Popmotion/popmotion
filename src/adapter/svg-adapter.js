import stateMap from './css/state-map';
import valueTypeMap from './svg/value-type-map';
import transformProps from './css/transform-props';
import build from './svg/build';
import { getter as attrGetter, setter as attrSetter } from './attr-adapter';
import createAdapter from './adapter';

export const getter = (element, key) => (!transformProps[key]) ? attrGetter(element, key) : (valueTypeMap[key] && valueTypeMap[key].defaultProps) ? valueTypeMap[key].defaultProps.current : 0;
export const setter = (element, props, data) => attrSetter(element, build(props, data));
export const getElementData = (element) => {
  const bBox = element.getBBox();
  return {
    x: bBox.x,
    y: bBox.y,
    width: bBox.width, 
    height: bBox.height
  };
};

export default createAdapter({ getter, setter, stateMap, valueTypeMap, getElementData });
