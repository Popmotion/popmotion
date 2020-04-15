import {
  Keyframe,
  KeyframeMap,
  KeyframeListOptions,
  KeyframeMapOptions,
  AnimationOptions,
  PlaybackControls,
  SpringOptions
} from './types';

export function animate(
  keyframes: Keyframe[],
  options?: KeyframeListOptions
): PlaybackControls;
export function animate(
  keyframes: KeyframeMap,
  options?: KeyframeMapOptions
): PlaybackControls;
export function animate(
  keyframes: KeyframeMap,
  options?: SpringOptions
): PlaybackControls;
export function animate(
  values: Keyframe[] | KeyframeMap,
  options: AnimationOptions = {}
): PlaybackControls {
  return {
    play: () => {},
    pause: () => {},
    resume: () => {},
    reverse: () => {},
    seek: () => {},
    stop: () => {}
  };
}
