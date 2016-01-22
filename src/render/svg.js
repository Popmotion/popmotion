import { each } from '../inc/utils';
import stateMap from './css/state-map';
import valueTypeMap from './svg/value-type-map';
import build from './svg/build';

function renderSVG({ state, element, svgOrigin }) {
    each(build(state, svgOrigin), (value, key) => element.setAttribute(key, value));
}

renderSVG.init = (actor) => {
    const bBox = actor.element.getBBox();
    const transformOriginX = actor.values.transformOriginX ? actor.values.transformOriginX.current : 50;
    const transformOriginY = actor.values.transformOriginY ? actor.values.transformOriginY.current : 50;

    actor.svgOrigin = {
        x: bBox.width * (transformOriginX / 100) + bBox.x,
        y: bBox.height * (transformOriginY / 100) + bBox.y
    };
}

renderSVG.stateMap = stateMap;
renderSVG.valueTypeMap = valueTypeMap;

export default renderSVG;