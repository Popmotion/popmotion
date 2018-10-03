import { Easing } from '@popmotion/easing';
import progress from './progress';
import curryRange from './curry-range';
import mix from './mix';
import mixColor from './mix-color';
import { mixComplex } from './mix-complex';
import { color } from 'style-value-types';

type StringMixerFactory = (from: string, to: string) => (v: number) => string;
type NumberMixerFactory = (from: number, to: number) => (v: number) => number;

const mixNumber = curryRange(mix);

const getMixer = (v: number | string) =>
  typeof v === 'number'
    ? (mixNumber as NumberMixerFactory)
    : color.test(v)
      ? (mixColor as StringMixerFactory)
      : (mixComplex as StringMixerFactory);

/**
 * Interpolate from set of values to another
 */
const slowInterpolate = (
  input: number[],
  output: number[] | string[],
  rangeLength: number,
  rangeEasing: Easing[]
) => {
  const finalIndex = rangeLength - 1;

  // If input runs highest -> lowest, reverse both arrays
  if (input[0] > input[finalIndex]) {
    input.reverse();
    output.reverse();
  }

  const mixerFactories = Array(finalIndex).fill(getMixer(output[0]));
  const mixers = mixerFactories.map((factory, i) =>
    factory(output[i], output[i + 1])
  );

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

    const progressInRange = progress(input[i - 1], input[i], v);
    const easedProgress = rangeEasing
      ? rangeEasing[i - 1](progressInRange)
      : progressInRange;

    return mixers[i - 1](easedProgress);
  };
};

// TODO: Probably possible to update this to work with various mixers
const fastInterpolate = (
  minA: number,
  maxA: number,
  minB: number,
  maxB: number
) => (v: number) => ((v - minA) * (maxB - minB)) / (maxA - minA) + minB;

export default (
  input: number[],
  output: number[] | string[],
  rangeEasing?: Easing[]
) => {
  const rangeLength = input.length;

  return rangeLength === 2 && typeof output[0] === 'number'
    ? fastInterpolate(
        input[0],
        input[1],
        output[0] as number,
        output[1] as number
      )
    : slowInterpolate(input, output, rangeLength, rangeEasing);
};
