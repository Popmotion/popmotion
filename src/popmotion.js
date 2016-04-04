// Import classes - long term goal to move towards composition
import Flow from './actions/Flow';
import Tween from './actions/Tween';
import Physics from './actions/Physics';
import Track from './actions/Track';
import Task from './task/Task';
import Input from './input/Input';

// Export factory functions
export const flow = (...args) => new Flow(...args);
export const tween = (props) => new Tween(props);
export const physics = (props) => new Physics(props);
export const track = (...args) => new Track(...args);
export const input = (...args) => new Input(...args);
export const task = (...args) => new Task(...args);
export stagger from './inc/stagger';
export timeline from './inc/timeline';

// Adapters
export createAdapter from './adapter/adapter';
export attr from './adapter/attr-adapter';
export css from './adapter/css-adapter';
export object from './adapter/object-adapter';
export svg from './adapter/svg-adapter';
export svgPath from './adapter/svg-path-adapter';

// Easing
export easing from './actions/easing/preset-easing';
import getFlow from './actions/flow/get-flow';
export const detectFlow = getFlow;

// Utils
export * as calc from './inc/calc';
export * as utils from './inc/utils';
export { setGlobalDilation } from './task/timer';

// Value types
import alpha from './value-types/alpha';
import angle from './value-types/angle';
import color from './value-types/color';
import complex from './value-types/complex';
import hex from './value-types/hex';
import hsl from './value-types/hsl';
import px from './value-types/px';
import rgb from './value-types/rgb';
import scale from './value-types/scale';
import shadow from './value-types/shadow';
import unit from './value-types/unit';
export const valueType = { alpha, angle, color, complex, hex, hsl, px, rgb, scale, shadow, unit };

// Transformers
export * as transformers from './inc/transformers';
