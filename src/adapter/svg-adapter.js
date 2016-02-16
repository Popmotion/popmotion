import stateMap from './css/state-map';
import valueTypeMap from './svg/value-type-map';
import build from './svg/build';
import { getter, setter as attrSetter } from './attr-adapter';
import adapter from './adapter';

export function setter(props) {
    attrSetter(build(props, this.origin));
}

export default (element) => {
    const svgAdapter = adapter(element);
    svgAdapter.stateMap = stateMap;
    svgAdapter.valueTypeMap = valueTypeMap;
    svgAdapter.getter = getter;
    svgAdapter.setter = setter;

    const bBox = element.getBBox();
    const transformOriginY = 0;
    const transformOriginX = 0;

    svgAdapter.origin = {
        x: bBox.width * (transformOriginX / 100) + bBox.x,
        y: bBox.height * (transformOriginY / 100) + bBox.y
    };

    return svgAdapter;
};

