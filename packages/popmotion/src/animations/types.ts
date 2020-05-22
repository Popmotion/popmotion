import { Easing } from '../easing/types';

export interface Animator<O, V> {
  options: O;
  update(t: number): V;
  updateOptions(options: O): void;
  isComplete: boolean;
}

export interface PlaybackOptions<V> {
  driver?: Driver;
  elapsed?: number;
  repeat?: number;
  repeatType?: 'loop' | 'reverse';
  repeatDelay?: number;
  onUpdate?: (latest: V) => void;
  onPlay?: () => void;
  onComplete?: () => void;
  onRepeat?: () => void;
}

export type SingleValueKeyframes<V> = V[];

export type Keyframe<V> = {
  [key: string]: V;
};

export type KeyframeMap<V> = {
  [key: string]: SingleValueKeyframes<V>;
};

export interface KeyframeListOptions {
  duration?: number;
}

export interface KeyframeOptions<V = any> {
  from?: V;
  to: V | SingleValueKeyframes<V>;
  duration?: number;
  ease?: Easing | Easing[];
  offsets?: number[];
}

export interface DecayOptions {
  from?: number;
  to?: number;
  velocity?: number;
  power?: number;
  timeConstant?: number;
  modifyTarget?: (target: number) => number;
  restDelta?: number;
}

export interface SpringOptions {
  from?: number;
  to?: number;
  velocity?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
  restSpeed?: number;
  restDelta?: number;
}

export type AnimationOptions<V> = PlaybackOptions<V> &
  (DecayOptions | KeyframeOptions<V> | SpringOptions);

/**
 * TODO: Implement
 */
export interface SpringDurationOptions<V> extends PlaybackOptions<V> {
  ratio?: number;
  duration?: number;
}

export interface PlaybackControls {
  play: () => void;
  pause: () => void;
  resume: () => void;
  reverse: () => void;
  seek: () => void;
  stop: () => void;
}

type Update = (timestamp: number) => void;

export type Driver = (update: Update) => () => void;
