import { clamp } from '../utils/clamp';
import { Easing } from './types';
/*
  Create stepped version of 0-1 progress

  @param [int]: Number of steps
  @param [number]: Current value
  @return [number]: Stepped value
*/
export type Direction = 'start' | 'end';

const clampProgress = v => clamp(0, 1, v);

export const steps = (steps: number, direction: Direction = 'end') => (
  progress: number
): Easing => {
  progress =
    direction === 'end' ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
  const expanded = progress * steps;
  const rounded =
    direction === 'end' ? Math.floor(expanded) : Math.ceil(expanded);

  return clampProgress(rounded / steps);
};
