import stateMap from './css/state-map';
import valueTypeMap from './css/value-type-map';
import prefixer from './css/prefixer';
import buildPropertyString from './css/build';

/*
    Render CSS to provided element

    @param { DOMElement, Object }
*/
function renderCSS({ element, state }) {
    element.style.cssText += ';' + buildPropertyString(state);
}

/*
    Get CSS property of element

    @param [DOMElement]
    @param [string]
    @return [var]
*/
renderCSS.get = (element, key) => {
    key = prefixer(key);

    if (key) {
        return window.getComputedStyle(element, null)[key];
    }
};

renderCSS.stateMap = stateMap;
renderCSS.valueTypeMap = valueTypeMap;

export default renderCSS;