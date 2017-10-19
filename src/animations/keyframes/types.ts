import { Easing } from '../../inc/easing';

export type KeyframeProps = {
  values: number[],
  times?: number[],
  ease?: Easing[],
  duration?: number,
  loop?: number,
  flip?: number,
  yoyo?: number
};
