import { Easing } from '../../easing';

export type KeyframeProps = {
  values: number[],
  times?: number[],
  ease?: Easing[],
  duration?: number,
  loop?: number,
  flip?: number,
  yoyo?: number
};
