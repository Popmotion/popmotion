import {
  AnimationOptions,
  SingleValueKeyframes,
  PlaybackControls
} from './types';
import { getEffectFromConfig } from './utils/get-effect-from-config';
import invariant from 'invariant';
import sync, { cancelSync, FrameData } from 'framesync';

export function animate(
  keyframes: SingleValueKeyframes,
  {
    delay,
    repeat,
    repeatType,
    repeatDelay,
    onPlay,
    onRepeat,
    onPause,
    ...config
  }: AnimationOptions
): PlaybackControls {
  invariant(keyframes.length > 1, 'More than one keyframe must be defined');

  let playbackResolve: () => void;
  let playbackReject: () => void;
  const playbackPromise = new Promise((resolve, reject) => {
    playbackResolve = resolve;
    playbackReject = reject;
  });

  const effect = getEffectFromConfig(config);

  invariant(
    effect,
    'No animation effect could be decided by the provided options'
  );

  const animation = effect.create(config);

  function stop() {
    cancelSync.update(update);
    playbackReject && playbackReject();
  }

  let initialTime: number;
  const update = ({ timestamp }: FrameData) => {
    if (!initialTime) initialTime = timestamp;

    const latest = animation(timestamp - initialTime);
    onUpdate && onUpdate(latest);

    if (effect.hasFinished(latest, 0, config)) {
      cancelSync.update(update);
      playbackResolve && playbackResolve();
    }
  };

  return {
    play: () => {
      onPlay && onPlay();
      sync.update(update, true, true);

      return playbackPromise;
    },
    pause: () => {
      onPause && onPause();
    },
    resume: () => {},
    reverse: () => {},
    seek: () => {},
    stop
  };
}

// export function animate(
//   keyframes: Keyframe[],
//   options?: KeyframeListOptions
// ): PlaybackControls;
// export function animate(
//   keyframes: KeyframeMap,
//   options?: KeyframeMapOptions
// ): PlaybackControls;
// export function animate(
//   keyframes: KeyframeMap,
//   options?: SpringOptions
// ): PlaybackControls;
// export function animate(
//   values: Keyframe[] | KeyframeMap,
//   options: AnimationOptions = {}
// ): PlaybackControls {

// }
