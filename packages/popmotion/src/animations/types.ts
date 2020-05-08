import { Easing } from '../easing/types';

export interface PlaybackOptions {
  delay?: number;
  driver?: () => void;
  effect?: AnimationEffect;
  repeat?: number;
  repeatType?: 'loop' | 'reverse';
  repeatDelay?: number;
  onUpdate?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onRepeat?: () => void;
}

export type SingleValueKeyframes = number[] | string[];

export type Keyframe = {
  [key: string]: string | number;
};

export type KeyframeMap = {
  [key: string]: SingleValueKeyframes;
};

export interface KeyframeListOptions {
  duration?: number;
}

export interface KeyframeOptions {
  duration?: number;
  ease?: Easing | Easing[];
  offset?: number[];
}

export interface SpringOptions {
  velocity?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
  restSpeed?: number;
  restDelta?: number;
}

export type AnimationOptions = PlaybackOptions &
  (KeyframeOptions | SpringOptions);

export interface Effect<T> {
  create: (options: T) => (t: number) => number;
  hasFinished: (current: number, velocity: number, options: T) => boolean;
  uniqueOptionKeys: Set<keyof T>;
}

/**
 * TODO: Implement
 */
export interface SpringDurationOptions extends PlaybackOptions {
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
