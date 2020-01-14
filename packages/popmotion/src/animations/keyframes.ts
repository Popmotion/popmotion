import { time } from './time';
import { interpolate } from '@popmotion/popcorn';
import { ForT } from '../types';
import { Easing, easeInOut } from '@popmotion/easing';

/**
 * TODO:
 * - Add tests to fix
 */

type Keyframes = number[] | string[];

export interface KeyframesConfig {
  values: Keyframes;
  times?: number[];
  duration?: number;
  ease?: Easing | Easing[];
}

const defaultEasings = (values: Keyframes, easing?: Easing): Easing[] =>
  values.map((): Easing => easing || easeInOut).splice(0, values.length - 1);

const defaultTimings = (values: Keyframes): number[] => {
  const numValues = values.length;

  return values.map((value: number | string, i: number): number =>
    i !== 0 ? i / (numValues - 1) : 0
  );
};

export const keyframes = ({
  values,
  times,
  duration = 0.8,
  ease
}: KeyframesConfig): ForT => {
  // Convert duration from seconds to milliseconds
  duration = duration * 1000;

  const easings = Array.isArray(ease) ? ease : defaultEasings(values, ease);
  times = times || defaultTimings(values);

  // TODO: Fix this
  return interpolate(times, values, { clamp: false, ease: easings });
};
