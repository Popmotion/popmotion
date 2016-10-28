// Framesync schedulers
export {
  onFrameStart,
  onFrameUpdate,
  onFrameRender,
  onFrameEnd,
  cancelOnFrameStart,
  cancelOnFrameUpdate,
  cancelOnFrameRender,
  cancelOnFrameEnd,
  timeSinceLastFrame,
  currentFrameTimestamp
} from './framesync';

export value from './value';
export Action from './actions';
export chain from './actions/chain';
export delay from './actions/delay';
export group from './actions/group';
export physics from './actions/physics';
export stagger from './actions/stagger';
export tween from './actions/tween';
export track from './actions/track';
export pointer from './input/pointer';
export * as easing from './easing';

export { color } from './value/types';


//export cssRender from './render/css';


// export timeline from './inc/timeline';

// // Adapters
// export createAdapter from './adapter/adapter';
// export attr from './adapter/attr-adapter';
// export css from './adapter/css-adapter';
// export object from './adapter/object-adapter';
// export svg from './adapter/svg-adapter';
// export svgPath from './adapter/svg-path-adapter';

// // Value types
// import alpha from './value-types/alpha';
// import angle from './value-types/angle';
// import color from './value-types/color';
// import complex from './value-types/complex';
// import hex from './value-types/hex';
// import hsl from './value-types/hsl';
// import px from './value-types/px';
// import rgb from './value-types/rgb';
// import scale from './value-types/scale';
// import shadow from './value-types/shadow';
// import unit from './value-types/unit';
// export const valueType = { alpha, angle, color, complex, hex, hsl, px, rgb, scale, shadow, unit };

// // Transformers
// export * as transformers from './inc/transformers';

// /*
//   Returns a version of the Action bound to a Flow

//   We're adding `on` here because Flow extends Action,
//   otherwise creating a circular modular dependency. Future
//   refactoring, ie moving to a compositional model will
//   remove the need for us to do this here.
// */
// Action.prototype.on = function (element) {
//   if (!element.connect) {
//     element = getFlow(element);
//   }

//   return element.connect(this);
// };

// export { Action };