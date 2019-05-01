// Utils
import angle from './utils/angle';
import applyOffset from './utils/apply-offset';
import clamp from './utils/clamp';
import conditional from './utils/conditional';
import degreesToRadians from './utils/degrees-to-radians';
import distance from './utils/distance';
import interpolate from './utils/interpolate';
import isPoint from './utils/is-point';
import isPoint3D from './utils/is-point-3d';
import mix from './utils/mix';
import mixColor from './utils/mix-color';
import { mixComplex, mixArray, mixObject } from './utils/mix-complex';
import pipe from './utils/pipe';
import pointFromVector from './utils/point-from-vector';
import progress from './utils/progress';
import radiansToDegrees from './utils/radians-to-degrees';
import smooth from './utils/smooth';
import smoothFrame from './utils/smooth-frame';
import snap from './utils/snap';
import {
  springForce,
  springForceLinear,
  springForceExpo
} from './utils/spring-force';
import velocityPerFrame from './utils/velocity-per-frame';
import velocityPerSecond from './utils/velocity-per-second';
import toDecimal from './utils/to-decimal';
import wrap from './utils/wrap';

// Easing
import steps from './easing/steps';
// TODO: Move easing to Popcorn? Or move steps to easing.
import {
  createAnticipateEasing,
  createBackIn,
  createExpoIn,
  cubicBezier,
  linear,
  easeIn,
  easeOut,
  easeInOut,
  circIn,
  circOut,
  circInOut,
  backIn,
  backOut,
  backInOut,
  anticipate,
  reversed,
  mirrored
} from '@popmotion/easing';

export {
  // Utils
  angle,
  applyOffset,
  clamp,
  conditional,
  degreesToRadians,
  distance,
  interpolate,
  isPoint,
  isPoint3D,
  mix,
  mixArray,
  mixColor,
  mixComplex,
  mixObject,
  pipe,
  pointFromVector,
  progress,
  radiansToDegrees,
  smooth,
  smoothFrame,
  snap,
  springForce,
  springForceExpo,
  springForceLinear,
  steps,
  toDecimal,
  velocityPerFrame,
  velocityPerSecond,
  wrap,
  // Easing
  createAnticipateEasing,
  createBackIn,
  createExpoIn,
  cubicBezier,
  linear,
  easeIn,
  easeOut,
  easeInOut,
  circIn,
  circOut,
  circInOut,
  backIn,
  backOut,
  backInOut,
  anticipate,
  reversed,
  mirrored
};

// Types
export * from './types';
