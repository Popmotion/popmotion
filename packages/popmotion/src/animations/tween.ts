import { easeOut } from '@popmotion/easing';
import { interpolate } from '@popmotion/popcorn';
import { ForT } from '../types';

/**
 * TODO
 * - Match interpolate types to support colors etc
 * - Add tests for above
 */

export interface TweenConfig {
  from?: number;
  to?: number;
  duration?: number;
  ease?: (t: number) => number;
}

export const tween = ({
  from = 0,
  to = 1,
  duration = 300,
  ease = easeOut
}: TweenConfig = {}): ForT => {
  return interpolate([0, duration], [from, to], { ease });
};
