import cssStateMap from './css/state-map';
import valueTypeMap from './svg/value-type-map';
import build from './svg/build';
import { getter, setter as attrSetter } from './attr-adapter';
import adapter from './adapter';

export function setter(props) {
    this.attrSetter(build(props, this.origin));
}

export default (element, transformOriginX = 50, transformOriginY = 50) => {
    const svgAdapter = adapter(element);
    svgAdapter.stateMap = cssStateMap;
    svgAdapter.valueTypeMap = valueTypeMap;
    svgAdapter.getter = getter;
    svgAdapter.setter = setter;
    svgAdapter.attrSetter = attrSetter;
    
    const bBox = element.getBBox();

    svgAdapter.origin = {
        x: bBox.width * (transformOriginX / 100) + bBox.x,
        y: bBox.height * (transformOriginY / 100) + bBox.y
    };

    return svgAdapter;
};

