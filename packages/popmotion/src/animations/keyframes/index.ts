import { Action } from '../../action';
import { getProgressFromValue } from '../../calc';
import { easeOut, Easing, linear } from '../../easing';
import tween from '../tween';
import scrubber from '../tween/scrubber';
import { KeyframeProps } from './types';
import { Update } from '../../observer/types';
import { clamp } from '../../transformers';

const clampProgress = clamp(0, 1);

const defaultEasings = (values: number[], easing?: Easing): Easing[] =>
  values.map((): Easing => easing || easeOut).splice(0, values.length - 1);

const defaultTimings = (values: number[]): number[] => {
  const numValues = values.length;

  return values.map((value: number, i: number): number => (i !== 0) ? i / (numValues - 1) : 0);
};

// TODO: Consolidate with `interpolate` transformer and keep this DRY
const interpolateScrubbers = (input: number[], scrubbers: Action[], update: Update) => {
  const rangeLength = input.length;
  const finalInputIndex = rangeLength - 1;
  const finalScrubberIndex = finalInputIndex - 1;
  const subs = scrubbers.map((scrub) => scrub.start(update));

  return (v: number) => {
    // If value outside minimum range, quickly return
    if (v <= input[0]) {
      subs[0].seek(0);
    }

    // If value outside maximum range, quickly return
    if (v >= input[finalInputIndex]) {
      subs[finalScrubberIndex].seek(1);
    }

    let i = 1;

    // Find index of range start
    for (; i < rangeLength; i++) {
      if (input[i] > v || i === finalInputIndex) break;
    }

    const progressInRange = getProgressFromValue(input[i - 1], input[i], v);

    subs[i - 1].seek(clampProgress(progressInRange));
  };
};

const keyframes = ({ values, loop, yoyo, flip, ...props }: KeyframeProps): Action => {
  const duration = props.duration || 300;
  const ease = Array.isArray(props.ease)
    ? props.ease
    : defaultEasings(values as number[], props.ease);
  const times = props.times || defaultTimings(values as number[]);

  const scrubbers = ease.map((easing, i) => scrubber({
    from: values[i],
    to: values[i + 1],
    ease: easing
  }));

  return tween({ duration, ease: linear, loop, yoyo, flip })
    .applyMiddleware((update) => {
      const seek = interpolateScrubbers(times, scrubbers, update);
      return seek;
    });
};

export default keyframes;
