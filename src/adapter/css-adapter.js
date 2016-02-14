import stateMap from './css/state-map';
import valueTypeMap from './css/value-type-map';
import buildPropertyString from './css/build';
import prefixer from './css/prefixer';
import createAdapter from './adapter';

function getter (key) {
    console.log(this.element)
    return window.getComputedStyle(this.element, null)[prefixer(key)];
}

function setter(props) {
    this.element.style.cssText += buildPropertyString(props);
}

export default (element) => createAdapter({ element, stateMap, valueTypeMap, getter, setter });