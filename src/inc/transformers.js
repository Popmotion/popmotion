import { getProgressFromValue, getValueFromProgress, stepProgress } from './calc';
import { isString } from './utils';
import { color as parseColor } from './parsers';

const noop = (v) => v;

/**
 * Append Unit
 * A function that will append
 * appendUnit('px', 20) -> '20px'
 * @param  {string} unit)
 * @return {number}
 */
export const appendUnit = (unit) => (v) => `${v}${unit}`;

/**
 * Clamp value between
 * Creates a function that will restrict a given value between `min` and `max`
 * @param  {number} min
 * @param  {number} max
 * @return {number}
 */
export const clampMax = (max) => (v) => Math.min(v, max);
export const clampMin = (min) => (v) => Math.max(v, min);
export const clamp = (min, max) => {
  const _min = clampMin(min);
  const _max = clampMax(max);
  return (v) => _min(_max(v));
};

export const conditional = (condition, ifTrue, ifFalse = noop) => (v) => {
  return condition(v) ? ifTrue(v) : ifFalse(v);
};

/**
 * Flow
 * Compose other transformers to run linearily
 * flow(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
export const flow = (...transformers) => {
  const numTransformers = transformers.length;
  let i = 0;

  return (acc, ...args) => {
    let v = acc;
    for (i = 0; i < numTransformers; i++) {
      v = transformers[i](v, ...args);
    }

    return v;
  };
};

/**
 * Interpolate from set of values to another
 * @param  {Array} input array
 * @param  {Array} output
 * @param  {Function} rangeEasing
 * @return {Function}
 */
export const interpolate = (input, output, rangeEasing) => {
  const rangeLength = input.length;
  const finalIndex = rangeLength - 1;

  return (v) => {
    // If value outside minimum range, quickly return
    if (v <= input[0]) {
      return output[0];
    }

    // If value outside maximum range, quickly return
    if (v >= input[finalIndex]) {
      return output[finalIndex];
    }

    let i = 1;

    // Find index of range start
    for (; i < rangeLength; i++) {
      if (input[i] > v || i === finalIndex) {
        break;
      }
    }

    const progressInRange = getProgressFromValue(input[i - 1], input[i], v);
    const easedProgress = (rangeEasing) ? rangeEasing[i](progressInRange) : progressInRange;
    return getValueFromProgress(output[i - 1], output[i], easedProgress);
  };
};

export const offset = (origin) => (v) => v - origin;

export const generateNonIntergratedSpring = (alterDisplacement = noop) => (constant, origin) => (v) => {
  const displacement = origin - v;
  const springModifiedDisplacement = - constant * (0 - alterDisplacement(Math.abs(displacement)));
  return (displacement <= 0) ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
};

export const spring = generateNonIntergratedSpring();
export const nonlinearSpring = generateNonIntergratedSpring(Math.sqrt);

export const wrap = (min, max) => (v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

export const steps = (steps, min, max) => (v) => {
  const progress = getProgressFromValue(min, max, v);
  return stepProgress(steps, progress);
};

export const transformChildValues = (childTransformers) => (v) => {
  for (let key in v) {
    const childTransformer = childTransformers[key];
    if (childTransformer) {
      v[key] = childTransformer(v[key]);
    }
  }

  return v;
};

// Unit transformers
export const percent = appendUnit('%');
export const degrees = appendUnit('deg');
export const px = appendUnit('px');

export const rgbUnit = flow(
  clamp(0, 255),
  Math.round
);

const rgbaTemplate = ({ red, green, blue, alpha = 1 }) => 
  `rgba(${red}, ${green}, ${blue}, ${alpha})`;

export const rgba = flow(
  transformChildValues({
    red: rgbUnit,
    green: rgbUnit,
    blue: rgbUnit,
    alpha
  }),
  rgbaTemplate
);

const hslaTemplate = ({ hue, saturation, lightness, alpha = 1 }) => 
  `hsla(${hue}, ${saturation}, ${lightness}, ${alpha})`;

export const hsla = flow(
  transformChildValues({
    hue: parseFloat,
    saturation: percent,
    lightness: percent,
    alpha
  }),
  hslaTemplate
);

export const color = (v) => {
  if (v.hasOwnProperty('red')) {
    return rgba(v);
  } else if (v.hasOwnProperty('hue')) {
    return hsla(v);
  }
  return v;
};

export const alpha = clamp(0, 1);

const blend = (from, to, v) => {
  const fromExpo = from * from;
  const toExpo = to * to;
  return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
};
// http://codepen.io/osublake/pen/xGVVaN
export const blendColor = (from, to) => {
  const fromColor = isString(from) ? parseColor(from) : from;
  const toColor = isString(to) ? parseColor(to): to;

  const blended = { ...fromColor };

  return (v) => {
    for (let key in blended) {
      blended[key] = blend(fromColor[key], toColor[key], v);
    }
    blended.red = blend(fromColor.red, toColor.red, v);
    blended.green = blend(fromColor.green, toColor.green, v);
    blended.blue = blend(fromColor.blue, toColor.blue, v);
    blended.alpha = getValueFromProgress(fromColor.alpha, toColor.alpha, v);
    return blended;
  };
};
