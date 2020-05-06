/*
  Bezier function generator

  Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  You're a hero

  Use

    const easeOut = new Bezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/

import { linear } from '.';

const a = (a1: number, a2: number) => 1.0 - 3.0 * a2 + 3.0 * a1;
const b = (a1: number, a2: number) => 3.0 * a2 - 6.0 * a1;
const c = (a1: number) => 3.0 * a1;

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t: number, a1: number, a2: number) =>
  ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
const getSlope = (t: number, a1: number, a2: number) =>
  3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);

const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 10;
function binarySubdivide(
  aX: number,
  aA: number,
  aB: number,
  mX1: number,
  mX2: number
) {
  let currentX: number;
  let currentT: number;
  let i: number = 0;

  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (
    Math.abs(currentX) > subdivisionPrecision &&
    ++i < subdivisionMaxIterations
  );

  return currentT;
}

const newtonIterations = 8;
const newtonMinSlope = 0.001;
function newtonRaphsonIterate(
  aX: number,
  aGuessT: number,
  mX1: number,
  mX2: number
) {
  for (let i = 0; i < newtonIterations; ++i) {
    const currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0.0) {
      return aGuessT;
    }
    const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}

const kSplineTableSize = 11;
const kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

export function cubicBezier(
  mX1: number,
  mY1: number,
  mX2: number,
  mY2: number
) {
  // If this is a linear gradient, return linear easing
  if (mX1 === mY1 && mX2 === mY2) return linear;

  // Precompute samples table
  const sampleValues = new Float32Array(kSplineTableSize);

  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX(aX: number) {
    let intervalStart = 0.0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;

    for (
      ;
      currentSample !== lastSample && sampleValues[currentSample] <= aX;
      ++currentSample
    ) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    const dist =
      (aX - sampleValues[currentSample]) /
      (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;

    const initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= newtonMinSlope) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(
        aX,
        intervalStart,
        intervalStart + kSampleStepSize,
        mX1,
        mX2
      );
    }
  }

  // If animation is at start/end, return t without easing
  return (t: number) =>
    t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
