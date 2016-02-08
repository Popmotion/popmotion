import build from './svg-path/build';
import stateMap from './svg-path/state-map';
import svgAdapter, { setter as svgSetter } from './svg-adapter';

function setter(props) {
    this.svgSetter(build(props, this.pathLength));
}

export default (element) => {
    const adapter = svgAdapter(element);

    adapter.stateMap = stateMap;
    adapter.setter = setter;
    adapter.svgSetter = svgSetter;

    adapter.pathLength = element.getTotalLength();

    return adapter;
};
