import { easeOut } from '@popmotion/easing';
import { interpolate } from '@popmotion/popcorn';
import { ForT } from '../types';

/**
 * TODO
 * - Match interpolate types to support colors etc
 * - Add tests for above
 */

export interface TimeConfig {
  from?: number;
  to?: number;
  duration?: number;
  ease?: (t: number) => number;
}

export const time = ({
  from = 0,
  to = 1,
  duration = 300,
  ease = easeOut
}: TimeConfig = {}): ForT => {
  return interpolate([0, duration], [from, to], { ease });
};
