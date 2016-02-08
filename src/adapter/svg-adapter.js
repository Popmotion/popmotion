import stateMap from './css/state-map';
import valueTypeMap from './svg/value-type-map';
import build from './svg/build';
import { getter, setter as attrSetter } from './attr-adapter';
import createAdapter from './create-adapter';

export function setter(props) {
    attrSetter(build(props, this.origin));
}

export default (element) => {
    const adapter = createAdapter({ element, stateMap, valueTypeMap, getter, setter });
    const bBox = element.getBBox();
    const transformOriginY = 0;
    const transformOriginX = 0;

    adapter.origin = {
        x: bBox.width * (transformOriginX / 100) + bBox.x,
        y: bBox.height * (transformOriginY / 100) + bBox.y
    };

    return adapter;
};

