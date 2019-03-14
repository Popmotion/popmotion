import tween from '../tween';
import { KeyframesProps } from './types';
import { easeOut, linear, Easing } from '@popmotion/easing';
import { interpolate } from '@popmotion/popcorn';

// Good candidate for memoisation
const createDefaultTiming = (numValues: number) => (
  _value: number,
  i: number
): number => (i !== 0 ? i / (numValues - 1) : 0);

const defaultTimings = (values: any[]): number[] =>
  values.map(createDefaultTiming(values.length));

const defaultEasings = (values: any[], easing?: Easing): Easing[] =>
  values.map((): Easing => easing || easeOut).splice(0, values.length - 1);

export const keyframes = ({
  easings,
  times,
  values,
  ...tweenProps
}: KeyframesProps) => {
  easings = Array.isArray(easings) ? easings : defaultEasings(values);
  times = times || defaultTimings(values);

  return tween({ ease: linear, ...tweenProps }).pipe(
    interpolate(times, values)
  );
};
