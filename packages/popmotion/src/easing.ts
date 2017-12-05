export type Easing = (v: number) => number;

const DEFAULT_OVERSHOOT_STRENGTH = 1.525;

export const createReversedEasing = (easing: Easing): Easing =>
  (p) => 1 - easing(1 - p);

export const createMirroredEasing = (easing: Easing): Easing =>
  (p) => (p <= 0.5) ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

export const linear: Easing = (p) => p;

export const createExpoIn = (power: number): Easing => (p) => p ** power;
export const easeIn = createExpoIn(2);
export const easeOut = createReversedEasing(easeIn);
export const easeInOut = createMirroredEasing(easeIn);

export const circIn: Easing = (p) => 1 - Math.sin(Math.acos(p));
export const circOut = createReversedEasing(circIn);
export const circInOut = createMirroredEasing(circOut);

export const createBackIn = (power: number): Easing => (p) => (p * p) * ((power + 1) * p - power);
export const backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
export const backOut = createReversedEasing(backIn);
export const backInOut = createMirroredEasing(backIn);

export const createAnticipateEasing = (power: number): Easing => {
  const backEasing = createBackIn(power);
  return (p) => ((p *= 2) < 1) ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};

export const anticipate = createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);

/*
  Bezier function generator
    
  Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/index.js  
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  You're a hero
  
  Use
  
    var easeOut = new Bezier(.17,.67,.83,.67),
      x = easeOut(0.5); // returns 0.627...
*/

// Constants
const NEWTON_ITERATIONS = 8;
const NEWTON_MIN_SLOPE = 0.001;
const SUBDIVISION_PRECISION = 0.0000001;
const SUBDIVISION_MAX_ITERATIONS = 10;
const K_SPLINE_TABLE_SIZE = 11;
const K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
const FLOAT_32_SUPPORTED = (typeof Float32Array !== 'undefined');

// Helper methods
const a = (a1: number, a2: number) => 1.0 - 3.0 * a2 + 3.0 * a1;
const b = (a1: number, a2: number) => 3.0 * a2 - 6.0 * a1;
const c = (a1: number) => 3.0 * a1;

const getSlope = (t: number, a1: number, a2: number) => 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);

const calcBezier = (t: number, a1: number, a2: number) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;

/*
  Create a cubic bezier resolver
*/
export function cubicBezier(mX1: number, mY1: number, mX2: number, mY2: number) {
  const sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
  let _precomputed = false;

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
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

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
    let lastSample = K_SPLINE_TABLE_SIZE - 1;
    let dist = 0.0;
    let guessForT = 0.0;
    let initialSlope = 0.0;
      
    for (; currentSample != lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += K_SAMPLE_STEP_SIZE;
    }
    
    --currentSample;
    
    dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample+1] - sampleValues[currentSample]);
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
      return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
    }
  };

  const precompute = () => {
    _precomputed = true;
    if (mX1 != mY1 || mX2 != mY2) {
      calcSampleValues();
    }
  };

  const resolver = (aX: number) => {
    let returnValue;

    if (!_precomputed) {
      precompute();
    }

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
};