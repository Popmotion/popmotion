import build from './svg-path/build';
import stateMap from './css/state-map';
import { getter, setter } from './svg-adapter';
import createAdapter from './adapter';

export default createAdapter({
    getter,
    setter: (element, props, { pathLength }) => setter(build(props, pathLength)),
    stateMap,
    onBind: (element) => ({ pathLength: element.getTotalLength() })
});
