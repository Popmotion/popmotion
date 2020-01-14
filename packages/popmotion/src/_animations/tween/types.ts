import { Value } from '../../reactions/value';
import { Easing } from '@popmotion/easing';

export type TweenProps = {
  from?: Value;
  to?: Value;
  duration?: number;
  ease?: Easing | Easing[] | { [key: string]: Easing };
  elapsed?: number;
  playDirection?: number;
  flip?: number;
  flipCount?: number;
  loop?: number;
  loopCount?: number;
  yoyo?: number;
  yoyoCount?: number;
  repeatDelay?: number;
};

export type TweenInterface<V = number> = {
  isActive: () => boolean;
  stop: () => void;
  getProgress: () => V;
  getElapsed: () => V;
  pause: () => TweenInterface<V>;
  resume: () => TweenInterface<V>;
  seek: (progress: number) => TweenInterface<V>;
  reverse: () => TweenInterface<V>;
};