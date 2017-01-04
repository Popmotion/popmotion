import { getProgressFromValue, getValueFromProgress, stepProgress } from './calc';

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
