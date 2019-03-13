import { Easing } from '@popmotion/easing';
import progress from './progress';
import mix from './mix';
import mixColor from './mix-color';
import { mixComplex } from './mix-complex';
import { color } from 'style-value-types';
import makeInputClamp from './clamp';
import pipe from './pipe';
import { invariant } from 'hey-listen';

type MixEasing = Easing | Easing[];

type InterpolateOptions<T> = {
  clamp?: boolean;
  ease?: MixEasing;
  mixer?: MixerFactory<T>;
};

type Mix<T> = (v: number) => T;
export type MixerFactory<T> = (from: T, to: T) => Mix<T>;

const mixNumber = (from: number, to: number) => (p: number) => mix(from, to, p);

function detectMixerFactory<T>(v: T): MixerFactory<any> {
  if (typeof v === 'number') {
    return mixNumber;
  }

  if (color.test(v)) {
    return mixColor;
  } else {
    return mixComplex;
  }
}

function createMixers<T>(
  output: T[],
  ease?: MixEasing,
  customMixer?: MixerFactory<T>
) {
  const mixers: Array<Mix<T>> = [];
  const mixerFactory: MixerFactory<T> =
    customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;

  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);

    if (ease) {
      const easingFunction = Array.isArray(ease) ? ease[i] : ease;
      mixer = pipe(
        easingFunction,
        mixer
      ) as Mix<T>;
    }

    mixers.push(mixer);
  }

  return mixers;
}

function fastInterpolate<T>([from, to]: number[], [mixer]: Array<Mix<T>>) {
  return (v: number) => mixer(progress(from, to, v));
}

function slowInterpolate<T>(input: number[], mixers: Array<Mix<T>>) {
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
}

/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * @public
 */
function interpolate<T>(
  input: number[],
  output: T[],
  { clamp = true, ease, mixer }: InterpolateOptions<T> = {}
): Mix<T | string | number> {
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

  const mixers = createMixers(output, ease, mixer);

  const interpolator =
    inputLength === 2
      ? fastInterpolate(input, mixers)
      : slowInterpolate(input, mixers);

  return clamp
    ? (pipe(
        makeInputClamp(input[0], input[inputLength - 1]),
        interpolator
      ) as Mix<number | string | T>)
    : interpolator;
}

export default interpolate;
