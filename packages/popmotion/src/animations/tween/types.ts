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

export type TweenInterface = {
  isActive: () => boolean;
  stop: () => void;
  getProgress: () => number;
  getElapsed: () => number;
  pause: () => TweenInterface;
  resume: () => TweenInterface;
  seek: (progress: number) => TweenInterface;
  reverse: () => TweenInterface;
};
