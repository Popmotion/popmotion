import { Easing } from '@popmotion/easing';
import progress from './progress';
import curryRange from './curry-range';
import mix from './mix';
import mixColor from './mix-color';
import { mixComplex } from './mix-complex';
import { color } from 'style-value-types';
import makeInputClamp from './clamp';
import pipe from './pipe';
import { invariant } from 'hey-listen';

type StringMixerFactory = (from: string, to: string) => (v: number) => string;
type NumberMixerFactory = (from: number, to: number) => (v: number) => number;

const mixNumber = curryRange(mix);

const getMixer = (v: number | string) =>
  typeof v === 'number'
    ? (mixNumber as NumberMixerFactory)
    : color.test(v)
      ? (mixColor as StringMixerFactory)
      : (mixComplex as StringMixerFactory);

type Mixer = (v: number) => number | string;

type InterpolateOptions = {
  clamp?: boolean;
  ease?: Easing | Easing[];
};

const createMixers = (output: number[] | string[], ease?: Easing | Easing[]) =>
  Array(output.length - 1)
    .fill(getMixer(output[0]))
    .map((factory, i) => {
      const mixer = factory(output[i], output[i + 1]);

      if (ease) {
        const easingFunction = Array.isArray(ease) ? ease[i] : ease;
        return pipe(
          easingFunction,
          mixer
        );
      } else {
        return mixer;
      }
    });

const fastInterpolate = ([from, to]: number[], [mixer]: Mixer[]) => {
  return (v: number) => mixer(progress(from, to, v));
};

const slowInterpolate = (input: number[], mixers: Mixer[]) => {
  const inputLength = input.length;
  const lastInputIndex = inputLength - 1;

  return (v: number) => {
    let mixerIndex = 0;
    let foundMixerIndex = false;

    if (v <= input[0]) {
      foundMixerIndex = true;
    } else if (v >= input[lastInputIndex]) {
      mixerIndex = lastInputIndex - 1;
      foundMixerIndex = true;
    }

    if (!foundMixerIndex) {
      let i = 1;
      for (; i < inputLength; i++) {
        if (input[i] > v || i === lastInputIndex) {
          break;
        }
      }
      mixerIndex = i - 1;
    }

    const progressInRange = progress(
      input[mixerIndex],
      input[mixerIndex + 1],
      v
    );
    return mixers[mixerIndex](progressInRange);
  };
};

export default (
  input: number[],
  output: number[] | string[],
  { clamp = true, ease }: InterpolateOptions = {}
) => {
  const inputLength = input.length;

  invariant(
    inputLength === output.length,
    'Both input and output ranges must be the same length'
  );

  // If input runs highest -> lowest, reverse both arrays
  if (input[0] > input[inputLength - 1]) {
    input.reverse();
    output.reverse();
  }

  const mixers = createMixers(output, ease);

  const interpolate =
    inputLength === 2
      ? fastInterpolate(input, mixers)
      : slowInterpolate(input, mixers);

  return clamp
    ? pipe(
        makeInputClamp(input[0], input[inputLength - 1]),
        interpolate
      )
    : interpolate;
};
