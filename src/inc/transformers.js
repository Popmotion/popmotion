import { getProgressFromValue, getValueFromProgress, stepProgress, smooth as calcSmoothing } from './calc';
import { isString } from './utils';
import { color as parseColor } from './parsers';
import { currentFrameTime } from 'framesync';

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
 * Apply offset
 * A function that, given a value, will get the offset from `from`
 * and apply it to `to`
 * @param  {number} from
 * @param  {number} to
 * @return {function}
 */
export const applyOffset = (from, to) => {
  const getOffset = subtract(from);
  const applyOffsetTo = add(to);
  return (v) => applyOffsetTo(getOffset(v));
};

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

export const conditional = (condition, ifTrue, ifFalse = noop) => (v, action) => {
  return condition(v, action) ? ifTrue(v, action) : ifFalse(v, action);
};

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
export const pipe = (...transformers) => {
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

// Deprecated: Remove in 7.1.0
export const flow = pipe;

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
    const easedProgress = (rangeEasing) ? rangeEasing[i - 1](progressInRange) : progressInRange;
    return getValueFromProgress(output[i - 1], output[i], easedProgress);
  };
};

export const subtract = (origin) => (v) => v - origin;
export const add = (origin) => (v) => v + origin;
export const divide = (origin) => (v) => v / origin;
export const multiply = (origin) => (v) => v * origin;

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

export const smooth = (strength = 50) => {
  let previousValue = 0;
  let lastUpdated = 0;

  return (v) => {
    const currentFramestamp = currentFrameTime();
    const timeDelta = (currentFramestamp !== lastUpdated) ? currentFramestamp - lastUpdated : 0;
    const newValue = timeDelta ? calcSmoothing(v, previousValue, timeDelta, strength) : previousValue;
    lastUpdated = currentFramestamp;
    previousValue = newValue;
    return newValue;
  };
};

export const snap = (points) => {
  if (typeof points === 'number') {
    return (v) => Math.round(v / points) * points;
  } else {
    let i = 0;
    const numPoints = points.length;

    return (v) => {
      let lastDistance = Math.abs(points[0] - v);

      for (i = 1; i < numPoints; i++) {
        const point = points[i];
        const distance = Math.abs(point - v);

        if (distance === 0) return point;

        if (distance > lastDistance) return points[i - 1];

        if (i === numPoints - 1) return point;

        lastDistance = distance;
      }
    };
  }
};

export const steps = (steps, min = 0, max = 1, direction = 'start') => (v) => {
  const progress = getProgressFromValue(min, max, v);
  return getValueFromProgress(min, max, stepProgress(steps, progress, direction));
};

export const transformChildValues = (childTransformers) => {
  const mutableState = {};
  return (v) => {
    for (let key in v) {
      const childTransformer = childTransformers[key];
      if (childTransformer) {
        mutableState[key] = childTransformer(v[key]);
      }
    }

    return mutableState;
  };
};

// Unit transformers
export const percent = appendUnit('%');
export const degrees = appendUnit('deg');
export const px = appendUnit('px');

export const rgbUnit = pipe(
  clamp(0, 255),
  Math.round
);

const rgbaTemplate = ({ red, green, blue, alpha = 1 }) =>
  `rgba(${red}, ${green}, ${blue}, ${alpha})`;

export const rgba = pipe(
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

export const hsla = pipe(
  transformChildValues({
    hue: parseInt,
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

// Bezier resolver
// Refactored from https://github.com/hughsk/bezier/blob/master/index.js
/**
## The MIT License (MIT) ##

Copyright (c) 2013 Hugh Kennedy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */
const resolve3 = (points) => (t) => {
  const ut = 1 - t;
  return (points[0] * ut + points[1] * t) * ut + (points[1] * ut + points[2] * t) * t;
};

const resolve4 = (points) => (t) => {
  const ut = 1 - t;
  const a1 = points[1] * ut + points[2] * t;
  return ((points[0] * ut + points[1] * t) * ut + a1 * t) * ut + (a1 * ut + (points[2] * ut + points[3] * t) * t) * t;
};

export const bezier = (points) =>
  (points.length === 3) ? resolve3(points) : resolve4(points);
