import stateMap from './css/state-map';
import valueTypeMap from './css/value-type-map';
import buildPropertyString from './css/build';
import prefixer from './css/prefixer';
import transformProps from './css/transform-props';
import createAdapter from './adapter';

export default createAdapter({
  getter: (element, key) => {
    return (!transformProps[key]) ?
      window.getComputedStyle(element, null)[prefixer(key)] :
      valueTypeMap[key].defaultProps.current || 0;
  },
  setter: (element, props) => element.style.cssText += buildPropertyString(props),
  valueTypeMap,
  stateMap
});

