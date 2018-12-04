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

type Ease = Easing | Easing[];

type Interpolate<T> = (v: number) => T;

type InterpolateOptions = {
  clamp?: boolean;
  ease?: Ease;
};

type StringMixerFactory = (from: string, to: string) => Interpolate<string>;
type NumberMixerFactory = (from: number, to: number) => Interpolate<number>;

const mixNumber = curryRange(mix);

const getMixer = (v: number | string) =>
  typeof v === 'number'
    ? (mixNumber as NumberMixerFactory)
    : color.test(v)
      ? (mixColor as StringMixerFactory)
      : (mixComplex as StringMixerFactory);

const createMixers = (
  output: number[] | string[],
  ease?: Ease
): Interpolate<number>[] | Interpolate<string>[] =>
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

const fastInterpolate = (
  [from, to]: number[],
  [mixer]: Interpolate<number>[] | Interpolate<string>[]
) => {
  return (v: number) => mixer(progress(from, to, v));
};

const slowInterpolate = (
  input: number[],
  mixers: Interpolate<number>[] | Interpolate<string>[]
) => {
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

function interpolate(
  input: number[],
  output: number[],
  options?: InterpolateOptions
): Interpolate<number>;
function interpolate(
  input: number[],
  output: string[],
  options?: InterpolateOptions
): Interpolate<string>;
function interpolate(
  input: number[],
  output: number[] | string[],
  { clamp = true, ease }: InterpolateOptions = {}
): Interpolate<number | string> {
  const inputLength = input.length;

  invariant(
    inputLength === output.length,
    'Both input and output ranges must be the same length'
  );

  invariant(
    !ease || !Array.isArray(ease) || ease.length === inputLength - 1,
    'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.'
  );

  // If input runs highest -> lowest, reverse both arrays
  if (input[0] > input[inputLength - 1]) {
    input = [].concat(input);
    output = [].concat(output);
    input.reverse();
    output.reverse();
  }

  const mixers = createMixers(output, ease);

  const interpolate =
    inputLength === 2
      ? fastInterpolate(input, mixers)
      : slowInterpolate(input, mixers);

  return clamp
    ? (pipe(
        makeInputClamp(input[0], input[inputLength - 1]),
        interpolate
      ) as Interpolate<number | string>)
    : interpolate;
}

export default interpolate;
