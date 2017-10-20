import { currentFrameTime } from 'framesync';
import { Easing } from 'inc/easing';
import { getProgressFromValue, getValueFromProgress, smooth as calcSmoothing, stepProgress } from './calc';

const noop = (v: any): any => v;

/**
 * Append Unit
 * A function that will append
 * appendUnit('px', 20) -> '20px'
 * @param  {string} unit)
 * @return {number}
 */
export const appendUnit = (unit: string) => (v: number) => `${v}${unit}`;

/**
 * Apply offset
 * A function that, given a value, will get the offset from `from`
 * and apply it to `to`
 * @param  {number} from
 * @param  {number} to
 * @return {function}
 */
export const applyOffset = (from: number, to?: number) => {
  let hasReceivedFrom = true;
  if (to === undefined) {
    to = from;
    hasReceivedFrom = false;
  }

  const getOffset = (v: number) => v - from;
  const applyOffsetTo = (v: number) => v + to;
  return (v: number) => {
    if (hasReceivedFrom) {
      return applyOffsetTo(getOffset(v));
    } else {
      from = v;
      hasReceivedFrom = true;
      return 0;
    }
  }
};

/**
 * Clamp value between
 * Creates a function that will restrict a given value between `min` and `max`
 * @param  {number} min
 * @param  {number} max
 * @return {number}
 */
export const clampMax = (max: number) => (v: number) => Math.min(v, max);
export const clampMin = (min: number) => (v: number) => Math.max(v, min);
export const clamp = (min: number, max: number) => {
  const _min = clampMin(min);
  const _max = clampMax(max);
  return (v: number) => _min(_max(v));
};

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
export const pipe = (...transformers: Function[]) => {
  const numTransformers = transformers.length;
  let i = 0;

  return (acc: any, ...args: any[]) => {
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
export const interpolate = (input: number[], output: number[], rangeEasing: Easing[]) => {
  const rangeLength = input.length;
  const finalIndex = rangeLength - 1;

  return (v: number) => {
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

export const generateNonIntegratedSpring = (alterDisplacement: Function = noop) => (constant: number, origin: number) => (v: number) => {
  const displacement = origin - v;
  const springModifiedDisplacement = - constant * (0 - alterDisplacement(Math.abs(displacement)));
  return (displacement <= 0) ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
};

export const linearSpring = generateNonIntegratedSpring();
export const nonlinearSpring = generateNonIntegratedSpring(Math.sqrt);

export const wrap = (min: number, max: number) => (v: number) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

export const smooth = (strength: number = 50) => {
  let previousValue = 0;
  let lastUpdated = 0;

  return (v: number) => {
    const currentFramestamp = currentFrameTime();
    const timeDelta = (currentFramestamp !== lastUpdated) ? currentFramestamp - lastUpdated : 0;
    const newValue = timeDelta ? calcSmoothing(v, previousValue, timeDelta, strength) : previousValue;
    lastUpdated = currentFramestamp;
    previousValue = newValue;
    return newValue;
  };
};

export const snap = (points: number | number[]) => {
  if (typeof points === 'number') {
    return (v: number) => Math.round(v / points) * points;
  } else {
    let i = 0;
    const numPoints = points.length;

    return (v: number) => {
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

// TODO: Revist this and add direction
export const steps = (steps: number, min = 0, max = 1) => (v: number) => {
  const progress = getProgressFromValue(min, max, v);
  return getValueFromProgress(min, max, stepProgress(steps, progress));
};

export const transformChildValues = (childTransformers: { [key: string]: Function }) => {
  const mutableState: { [key: string]: any } = {};
  return (v: any) => {
    for (const key in v) {
      const childTransformer = childTransformers[key];
      if (childTransformer) {
        mutableState[key] = childTransformer(v[key]);
      }
    }

    return mutableState;
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
const resolve3 = (points: number[]) => (t: number) => {
  const ut = 1 - t;
  return (points[0] * ut + points[1] * t) * ut + (points[1] * ut + points[2] * t) * t;
};

const resolve4 = (points: number[]) => (t: number) => {
  const ut = 1 - t;
  const a1 = points[1] * ut + points[2] * t;
  return ((points[0] * ut + points[1] * t) * ut + a1 * t) * ut + (a1 * ut + (points[2] * ut + points[3] * t) * t) * t;
};

export const bezier = (...points: number[]) =>
  (points.length === 3) ? resolve3(points) : resolve4(points);
