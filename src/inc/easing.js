import { bezier } from './transformers';

const DEFAULT_OVERSHOOT_STRENGTH = 1.525;

export const createReversedEasing = (easing) => (p) => 1 - easing(1 - p);
export const createMirroredEasing = (easing) => (p) => (p <= 0.5) ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

export const linear = (p) => p;

export const createExpoIn = (power) => (p) => p ** power;
export const easeIn = createExpoIn(2);
export const easeOut = createReversedEasing(easeIn);
export const easeInOut = createMirroredEasing(easeIn);

export const circIn = (p) => 1 - Math.sin(Math.acos(p));
export const circOut = createReversedEasing(circIn);
export const circInOut = createMirroredEasing(circOut);

export const createBackIn = (power) => (p) => (p * p) * ((power + 1) * p - power);
export const backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
export const backOut = createReversedEasing(backIn);
export const backInOut = createMirroredEasing(backIn);

export const createAnticipateEasing = (power) => {
  const backEasing = createBackIn(power);
  return (p) => ((p *= 2) < 1) ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};

export const anticipate = createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);

export const cubicBezier = (x1, y1, x2, y2) => {
  const xBezier = bezier(0, x1, x2, 1);
  const yBezier = bezier(0, y1, y2, 1);

  return (t) => yBezier(xBezier(t));
};
