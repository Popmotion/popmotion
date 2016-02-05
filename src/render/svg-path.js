import build from './svg-path/build';
import stateMap from './svg-path/state-map';
import valueTypeMap from './svg/value-type-map';
import renderSVG from './svg';

const renderSVGPath = (actor) => {
    const props = build(actor.state, actor.pathLength);

    renderSVG(actor);

    for (let key in props) {
        if (props.hasOwnProperty(key)) {
            actor.element.setAttribute(key, props[key]);
        }
    }
};

renderSVGPath.init = (actor) => {
    actor.pathLength = actor.element.getTotalLength();
    renderSVG.init(actor);
};

renderSVGPath.stateMap = stateMap;
renderSVGPath.valueTypeMap = valueTypeMap;

export default renderSVGPath;