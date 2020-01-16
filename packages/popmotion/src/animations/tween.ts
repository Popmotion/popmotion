import { easeOut } from '../easing';
import { interpolate } from '../utils/interpolate';
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
  // TODO: Fix this type
  return interpolate([0, duration], [from, to], { ease }) as ForT;
};
