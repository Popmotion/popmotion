import build from './svg-path/build';
import stateMap from './css/state-map';
import { getter, setter, getElementData } from './svg-adapter';
import createAdapter from './adapter';

export default createAdapter({
  getter,
  setter: (element, props, opts) => {
    const pathLength = opts ? opts.pathLength : 0;
    return setter(element, build(props, pathLength), opts);
  },
  stateMap,
  getElementData: (element) => ({ pathLength: element.getTotalLength(), ...getElementData(element) })
});
