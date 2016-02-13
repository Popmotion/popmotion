// Actor
import Actor from './actor/Actor';

// Actions
import Tween from './actions/Tween';
import Physics from './actions/Physics';
import Track from './actions/Track';

// Process
import Process from './process/Process';

// Input
import Input from './input/Input';

export const actor = (props) => new Actor(props);
export const tween = (props) => new Tween(props);
export const physics = (props) => new Physics(props);
export const trackInput = (...args) => new Track(...args);
export const input = (...args) => new Input(...args);
export const process = (...args) => new Process(...args);
export stagger from './inc/stagger';
export timeline from './inc/timeline';

// Adapters
export adapter from './adapter/adapter';
export attrAdapter from './adapter/attr-adapter';
export cssAdapter from './adapter/css-adapter';
export svgAdapter from './adapter/svg-adapter';
export svgPathAdapter from './adapter/svg-path-adapter';

// Easing
export easing from './actions/easing/preset-easing';

// Utils
export * as calc from './inc/calc';
export { combineTransformers } from './inc/utils';
export { setGlobalDilation } from './process/timer';

// Value types
export alphaType from './value-types/alpha';
export angleType from './value-types/angle';
export axesType from './value-types/axes';
export colorType from './value-types/color';
export complexType from './value-types/complex';
export hexType from './value-types/hex';
export hslType from './value-types/hsl';
export positionsType from './value-types/positions';
export pxType from './value-types/px';
export rgbType from './value-types/rgb';
export scaleType from './value-types/scale';
export shadowType from './value-types/shadow';

// Transformers
export * as transformers from './inc/transformers';