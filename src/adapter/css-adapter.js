import stateMap from './css/state-map';
import valueTypeMap from './css/value-type-map';
import buildPropertyString from './css/build';
import prefixer from './css/prefixer';
import transformProps from './css/transform-props';
import adapter from './adapter';

function getter (key) {
    return (!transformProps[key]) ?
        window.getComputedStyle(this.element, null)[prefixer(key)] :
        valueTypeMap[key].defaultProps.current || 0;
}

function setter(props) {
    this.element.style.cssText += buildPropertyString(props);
}

export default (element) => {
    const cssAdapter = adapter(element);
    cssAdapter.stateMap = stateMap;
    cssAdapter.valueTypeMap = valueTypeMap;
    cssAdapter.getter = getter;
    cssAdapter.setter = setter;

    return cssAdapter;
};
