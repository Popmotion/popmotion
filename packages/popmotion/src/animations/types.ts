import { Easing } from '../easing/types';

export interface PlaybackOptions {
  delay?: number;
  driver?: () => void;
  repeat?: number;
  repeatType?: 'loop' | 'reverse';
  repeatDelay?: number;
  onUpdate?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onRepeat?: () => void;
}

export type Keyframe = {
  [key: string]: string | number;
};

export type KeyframeMap = {
  [key: string]: number[] | string[];
};

export interface KeyframeListOptions extends PlaybackOptions {
  duration?: number;
}

export interface KeyframeMapOptions extends PlaybackOptions {
  duration?: number;
  ease?: Easing | Easing[];
  offset?: number[];
}

export interface SpringOptions extends PlaybackOptions {
  velocity?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export interface SpringDurationOptions extends PlaybackOptions {
  ratio?: number;
  duration?: number;
}

export type AnimationOptions =
  | SpringOptions
  | KeyframeListOptions
  | KeyframeMapOptions;

export interface PlaybackControls {
  play: () => void;
  pause: () => void;
  resume: () => void;
  reverse: () => void;
  seek: () => void;
  stop: () => void;
}
