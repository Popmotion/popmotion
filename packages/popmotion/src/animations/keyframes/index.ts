import { Action } from '../../action';
import { easeOut, Easing, linear } from '@popmotion/easing';
import { clamp, progress } from '@popmotion/popcorn';
import { Update } from '../../observer/types';
import tween from '../tween';
import scrubber from '../tween/scrubber';
import { KeyframesProps } from './types';

const clampProgress = clamp(0, 1);

const defaultEasings = (values: number[], easing?: Easing): Easing[] =>
  values.map((): Easing => easing || easeOut).splice(0, values.length - 1);

const defaultTimings = (values: number[]): number[] => {
  const numValues = values.length;

  return values.map(
    (value: number, i: number): number => (i !== 0 ? i / (numValues - 1) : 0)
  );
};

// TODO: Consolidate with `interpolate` transformer and keep this DRY
const interpolateScrubbers = (
  input: number[],
  scrubbers: Action[],
  update: Update
) => {
  const rangeLength = input.length;
  const finalInputIndex = rangeLength - 1;
  const finalScrubberIndex = finalInputIndex - 1;
  const subs = scrubbers.map(scrub => scrub.start(update));

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
    // Note: There's potentially a way of doing this without a loop
    // 1. Try tweening between 0 and numSegments - 1
    // 2. Create array of scrubbers.
    // 3. Take Math.floor(v) as index of scrubber and remainder as progress
    for (; i < rangeLength; i++) {
      if (input[i] > v || i === finalInputIndex) break;
    }

    const progressInRange = progress(input[i - 1], input[i], v);

    subs[i - 1].seek(clampProgress(progressInRange));
  };
};

const keyframes = ({
  easings,
  ease = linear,
  times,
  values,
  ...tweenProps
}: KeyframesProps): Action => {
  easings = Array.isArray(easings)
    ? easings
    : defaultEasings(values as number[], easings);
  times = times || defaultTimings(values as number[]);

  const scrubbers = easings.map((easing, i) =>
    scrubber({
      from: values[i],
      to: values[i + 1],
      ease: easing
    })
  );

  return tween({
    ...tweenProps,
    ease
  }).applyMiddleware(update => interpolateScrubbers(times, scrubbers, update));
};

/**
 * This would be a tighter implementation if we can either make interpolate support
 * arrays and objects or remove that support from keyframes
function keyframes({
  easings,
  ease = linear,
  times,
  values,
  ...tweenProps
}: KeyframesProps): Action {
  easings = Array.isArray(easings)
    ? easings
    : defaultEasings(values as number[], easings);
  times = times || defaultTimings(values as number[]);

  return tween({ ...tweenProps, ease }).pipe(
    interpolate(times, values, { clamp: false })
  );
}
 */

export default keyframes;
