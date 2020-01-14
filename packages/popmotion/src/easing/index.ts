import {
  createExpoIn,
  reversed,
  mirrored,
  createBackIn,
  createAnticipateEasing
} from './utils';
import { Easing } from './types';

const DEFAULT_OVERSHOOT_STRENGTH = 1.525;
const BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
const BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
const BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;

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
