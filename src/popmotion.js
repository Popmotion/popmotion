// Import classes - long term goal to move towards composition
import Action from './actions/Action';
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
export adapter from './adapter/adapter';
export attrAdapter from './adapter/attr-adapter';
export cssAdapter from './adapter/css-adapter';
export svgAdapter from './adapter/svg-adapter';
export svgPathAdapter from './adapter/svg-path-adapter';

// Easing
export easing from './actions/easing/preset-easing';
import getFlow from './actions/flow/get-flow';

// Utils
export * as calc from './inc/calc';
export * as utils, { combineTransformers } from './inc/utils';
export { setGlobalDilation } from './task/timer';

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
export unitType from './value-types/unit';

// Transformers
export * as transformers from './inc/transformers';

/*
    Returns a version of the Action bound to a Flow

    We're adding `on` here because Flow extends Action,
    otherwise creating a circular modular dependency. Future
    refactoring, ie moving to a compositional model will
    remove the need for us to do this here.
*/
Action.prototype.on = function (element) {
    if (!element.connect) {
        element = getFlow(element);
    }

    return element.connect(this);
};