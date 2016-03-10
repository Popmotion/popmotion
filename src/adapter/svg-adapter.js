import cssStateMap from './css/state-map';
import valueTypeMap from './svg/value-type-map';
import transformProps from './css/transform-props';
import build from './svg/build';
import { getter as attrGetter, setter as attrSetter } from './attr-adapter';
import adapter from './adapter';

export function setter(props) {
    this.attrSetter(build(props, this.origin));
}

function getter(key) {
    return (!transformProps[key]) ? this.attrGetter(key) : (valueTypeMap[key] && valueTypeMap[key].defaultProps) ? valueTypeMap[key].defaultProps.current : 0;
}

export default (element, transformOriginX = 50, transformOriginY = 50) => {
    const svgAdapter = adapter(element);
    svgAdapter.stateMap = cssStateMap;
    svgAdapter.valueTypeMap = valueTypeMap;
    svgAdapter.getter = getter;
    svgAdapter.setter = setter;
    svgAdapter.attrGetter = attrGetter;
    svgAdapter.attrSetter = attrSetter;
    
    const bBox = element.getBBox();

    svgAdapter.origin = {
        x: bBox.width * (transformOriginX / 100) + bBox.x,
        y: bBox.height * (transformOriginY / 100) + bBox.y
    };

    return svgAdapter;
};

