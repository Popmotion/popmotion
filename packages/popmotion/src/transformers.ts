import { currentFrameTime } from 'framesync';
import { color, Color, hsla, HSLA } from 'style-value-types';
import { getProgressFromValue, getValueFromProgress, smooth as calcSmoothing, stepProgress } from './calc';
import { Easing } from './easing';

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
      return to;
    }
  };
};

const blend = (from: number, to: number, v: number) => {
  const fromExpo = from * from;
  const toExpo = to * to;
  return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
};

// http://codepen.io/osublake/pen/xGVVaN
export const blendColor = (from: Color | string, to: Color | string) => {
  const fromColor = (typeof from === 'string') ? color.parse(from) : from;
  const toColor = (typeof to === 'string') ? color.parse(to) : to;
  let blended = { ...fromColor };

  // Only use the sqrt blending function for rgba and hex
  const blendFunc = (
    (from as HSLA).hue !== undefined ||
    typeof from === 'string' && hsla.test(from as string)
  ) ? getValueFromProgress
    : blend;

  return (v: number) => {
    blended = { ...blended };
    for (const key in blended) {
      if (key !== 'alpha' && blended.hasOwnProperty(key)) {
        blended[key] = blendFunc(fromColor[key], toColor[key], v);
      }
    }

    blended.alpha = getValueFromProgress(fromColor.alpha, toColor.alpha, v);

    return blended;
  };
};

/**
 * Clamp value between
 * Creates a function that will restrict a given value between `min` and `max`
 * @param  {number} min
 * @param  {number} max
 * @return {number}
 */
export const clamp = (min: number, max: number) => (v: number) => Math.min(Math.max(v, min), max);

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
const combineFunctions = (a: Function, b: Function) => (v: any) => b(a(v));
export const pipe = (...transformers: Function[]) => transformers.reduce(combineFunctions);

/**
 * Conditionally apply a transformer using the provided function when `check` returns `true`
 */
export type Check = (v: any) => boolean;
export type Apply = (v: any) => any;
export const conditional = (check: Check, apply: Apply) => (v: any): any => check(v) ? apply(v) : v;

/**
 * Interpolate from set of values to another
 */
const slowInterpolate = (input: number[], output: number[], rangeLength: number, rangeEasing: Easing[]) => {
  const finalIndex = rangeLength - 1;

  // If input runs highest -> lowest, reverse both arrays
  if (input[0] > input[finalIndex]) {
    input.reverse();
    output.reverse();
  }

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

const fastInterpolate = (minA: number, maxA: number, minB: number, maxB: number) => (v: number) =>
  (((v - minA) * (maxB - minB)) / (maxA - minA)) + minB;

export const interpolate = (input: number[], output: number[], rangeEasing?: Easing[]) => {
  const rangeLength = input.length;
  return rangeLength !== 2
    ? slowInterpolate(input, output, rangeLength, rangeEasing)
    : fastInterpolate(input[0], input[1], output[0], output[1])
};

export const generateStaticSpring = (alterDisplacement: Function = noop) => (constant: number, origin: number) => (v: number) => {
  const displacement = origin - v;
  const springModifiedDisplacement = - constant * (0 - alterDisplacement(Math.abs(displacement)));
  return (displacement <= 0) ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
};

export const linearSpring = generateStaticSpring();
export const nonlinearSpring = generateStaticSpring(Math.sqrt);

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
export const steps = (st: number, min = 0, max = 1) => (v: number) => {
  const progress = getProgressFromValue(min, max, v);
  return getValueFromProgress(min, max, stepProgress(st, progress));
};

export const transformMap = (childTransformers: { [key: string]: Function }) => (v: any) => {
  const output: { [key: string]: any } = { ...v };

  for (const key in childTransformers) {
    if (childTransformers.hasOwnProperty(key)) {
      const childTransformer = childTransformers[key];
      output[key] = childTransformer(v[key]);
    }
  }

  return output;
};
