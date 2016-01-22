import build from './svg-path/build';
import stateMap from './svg-path/state-map';
import valueTypeMap from './svg/value-type-map';
import renderSVG from './svg';
import { each } from '../inc/utils';

const renderSVGPath = (actor) => {
    renderSVG(actor);
    each(build(actor.state, actor.pathLength), (value, key) => actor.element.setAttribute(key, value));
};

renderSVGPath.init = (actor) => {
    actor.pathLength = actor.element.getTotalLength();
    renderSVG.init(actor);
};

renderSVGPath.stateMap = stateMap;
renderSVGPath.valueTypeMap = valueTypeMap;

export default renderSVGPath;