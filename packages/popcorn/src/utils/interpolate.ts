import { Easing } from '@popmotion/easing';
import progressFromValue from './progress';
import valueFromProgress from './mix';

/**
 * Interpolate from set of values to another
 */
const slowInterpolate = (
  input: number[],
  output: number[],
  rangeLength: number,
  rangeEasing: Easing[]
) => {
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

    const progressInRange = progressFromValue(input[i - 1], input[i], v);
    const easedProgress = rangeEasing
      ? rangeEasing[i - 1](progressInRange)
      : progressInRange;
    return valueFromProgress(output[i - 1], output[i], easedProgress);
  };
};

const fastInterpolate = (
  minA: number,
  maxA: number,
  minB: number,
  maxB: number
) => (v: number) => ((v - minA) * (maxB - minB)) / (maxA - minA) + minB;

export default (input: number[], output: number[], rangeEasing?: Easing[]) => {
  const rangeLength = input.length;
  return rangeLength !== 2
    ? slowInterpolate(input, output, rangeLength, rangeEasing)
    : fastInterpolate(input[0], input[1], output[0], output[1]);
};
