import { Easing, EasingModifier } from './types';

// Accepts an easing function and returns a new one that outputs reversed values.
// For instance, reverse(linear)(1) would return 0
export const reverseEasing: EasingModifier = easing => p => 1 - easing(1 - p);

// Accepts an easing function and returns a new one that outputs mirrored values.
// For instance, mirrorEasing(linear)(0.5) would return 1
export const mirrorEasing: EasingModifier = easing => p =>
  p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

// Creates an easing function that is based on the exponent of the provided `power`.
// The higher the `power`, the stronger the easing.
export const createExpoIn = (power: number): Easing => p => p ** power;

// Creates an easing function that has a stronger overshoot the higher the provided `power`.
export const createBackIn = (power: number): Easing => p =>
  p * p * ((power + 1) * p - power);

// Creates an easing function that pulls back a little before moving, and then
// has a `createBackIn`-based overshoot
export const createAnticipate = (power: number): Easing => {
  const backEasing = createBackIn(power);
  return p =>
    (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};
