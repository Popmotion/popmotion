/**
 * Popmotion Easing
 *
 * Easing functions for modifying tween animation character.
 * Functions work with any animation library that accept easing functions
 * of the signature (number) => number
 */

/**
 * Types
 */
export type Easing = (v: number) => number;
export type EasingModifier = (easing: Easing) => Easing;

// Default overshoot value for spring-like easings
const DEFAULT_OVERSHOOT_STRENGTH = 1.525;

/**
 * Modifiers
 */

// Accepts an easing function and returns a new one that outputs reversed values.
// For instance, reversed(linear)(1) would return 0
export const reversed: EasingModifier = easing => p => 1 - easing(1 - p);

// Accepts an easing function and returns a new one that outputs mirrored values.
// For instance, mirrored(linear)(0.5) would return 1
export const mirrored: EasingModifier = easing => p =>
  p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

// Deprecated for removal in Popmotion@9.0.0
export const createReversedEasing = reversed;
export const createMirroredEasing = mirrored;

/**
 * Easing factories
 */

// Creates an easing function that is based on the exponent of the provided `power`.
// The higher the `power`, the stronger the easing.
export const createExpoIn = (power: number): Easing => p => p ** power;

// Creates an easing function that has a stronger overshoot the higher the provided `power`.
export const createBackIn = (power: number): Easing => p =>
  p * p * ((power + 1) * p - power);

// Creates an easing function that pulls back a little before moving, and then
// has a `createBackIn`-based overshoot
export const createAnticipateEasing = (power: number): Easing => {
  const backEasing = createBackIn(power);
  return p =>
    (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};

/**
 * Easing functions
 */

export const linear: Easing = p => p;

export const easeIn = createExpoIn(2);
export const easeOut = reversed(easeIn);
export const easeInOut = mirrored(easeIn);

export const circIn: Easing = p => 1 - Math.sin(Math.acos(p));
export const circOut = reversed(circIn);
export const circInOut = mirrored(circOut);

export const backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
export const backOut = reversed(backIn);
export const backInOut = mirrored(backIn);

export const anticipate = createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);

const BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
const BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
const BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;

// helper constants
const ca = 4356.0 / 361.0;
const cb = 35442.0 / 1805.0;
const cc = 16061.0 / 1805.0;

export const bounceOut = (p: number) => {
  const p2 = p * p;

  return p < BOUNCE_FIRST_THRESHOLD
    ? 7.5625 * p2
    : p < BOUNCE_SECOND_THRESHOLD
    ? 9.075 * p2 - 9.9 * p + 3.4
    : p < BOUNCE_THIRD_THRESHOLD
    ? ca * p2 - cb * p + cc
    : 10.8 * p * p - 20.52 * p + 10.72;
};

export const bounceIn = (p: number) => 1.0 - bounceOut(1.0 - p);

export const bounceInOut = (p: number) =>
  p < 0.5
    ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0))
    : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;

/*
  Bezier function generator

  Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  You're a hero

  Use

    const easeOut = new Bezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/

// Constants
const NEWTON_ITERATIONS = 8;
const NEWTON_MIN_SLOPE = 0.001;
const SUBDIVISION_PRECISION = 0.0000001;
const SUBDIVISION_MAX_ITERATIONS = 10;
const K_SPLINE_TABLE_SIZE = 11;
const K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
const FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined';

// Helper methods
const a = (a1: number, a2: number) => 1.0 - 3.0 * a2 + 3.0 * a1;
const b = (a1: number, a2: number) => 3.0 * a2 - 6.0 * a1;
const c = (a1: number) => 3.0 * a1;

const getSlope = (t: number, a1: number, a2: number) =>
  3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);

const calcBezier = (t: number, a1: number, a2: number) =>
  ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;

/*
  Create a cubic bezier resolver
*/
export function cubicBezier(
  mX1: number,
  mY1: number,
  mX2: number,
  mY2: number
) {
  const sampleValues = FLOAT_32_SUPPORTED
    ? new Float32Array(K_SPLINE_TABLE_SIZE)
    : new Array(K_SPLINE_TABLE_SIZE);

  const binarySubdivide = (aX: number, aA: number, aB: number) => {
    let i = 0;
    let currentX;
    let currentT;

    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (
      Math.abs(currentX) > SUBDIVISION_PRECISION &&
      ++i < SUBDIVISION_MAX_ITERATIONS
    );

    return currentT;
  };

  const newtonRaphsonIterate = (aX: number, aGuessT: number) => {
    let i = 0;
    let currentSlope = 0;
    let currentX;

    for (; i < NEWTON_ITERATIONS; ++i) {
      currentSlope = getSlope(aGuessT, mX1, mX2);

      if (currentSlope === 0.0) {
        return aGuessT;
      }

      currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }

    return aGuessT;
  };

  const calcSampleValues = () => {
    for (let i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
      sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
    }
  };

  const getTForX = (aX: number) => {
    let intervalStart = 0.0;
    let currentSample = 1;
    const lastSample = K_SPLINE_TABLE_SIZE - 1;
    let dist = 0.0;
    let guessForT = 0.0;
    let initialSlope = 0.0;

    for (
      ;
      currentSample !== lastSample && sampleValues[currentSample] <= aX;
      ++currentSample
    ) {
      intervalStart += K_SAMPLE_STEP_SIZE;
    }

    --currentSample;

    dist =
      (aX - sampleValues[currentSample]) /
      (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;

    initialSlope = getSlope(guessForT, mX1, mX2);

    // If slope is greater than min
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT);
      // Slope is equal to min
    } else if (initialSlope === 0.0) {
      return guessForT;
      // Slope is less than min
    } else {
      return binarySubdivide(
        aX,
        intervalStart,
        intervalStart + K_SAMPLE_STEP_SIZE
      );
    }
  };

  calcSampleValues();

  const resolver = (aX: number) => {
    let returnValue;

    // If linear gradient, return X as T
    if (mX1 === mY1 && mX2 === mY2) {
      returnValue = aX;

      // If at start, return 0
    } else if (aX === 0) {
      returnValue = 0;

      // If at end, return 1
    } else if (aX === 1) {
      returnValue = 1;
    } else {
      returnValue = calcBezier(getTForX(aX), mY1, mY2);
    }

    return returnValue;
  };

  return resolver;
}
