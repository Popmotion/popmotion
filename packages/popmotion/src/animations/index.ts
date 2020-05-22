import {
  AnimationOptions,
  Driver,
  PlaybackControls,
  KeyframeOptions
} from './types';
import { detectAnimationFromOptions } from './utils/detect-animation-from-options';
import sync, { cancelSync, FrameData } from 'framesync';
import { interpolate } from '../utils/interpolate';

const framesync: Driver = update => {
  const passTimestamp = ({ delta }: FrameData) => update(delta);
  sync.update(passTimestamp, true, true);
  return () => cancelSync.update(passTimestamp);
};

export function animate<V>({
  from,
  to,
  delay,
  driver = framesync,
  elapsed = 0,
  repeat: repeatMax = 0,
  repeatType = 'loop',
  repeatDelay = 0,
  onPlay,
  onComplete,
  onRepeat,
  onUpdate,
  ...options
}: AnimationOptions<V>): PlaybackControls {
  let repeatCount = 0;
  let computedDuration = (options as KeyframeOptions).duration;
  let isForwardPlayback = true;

  let cancelDriver: () => void;
  let interpolateFromNumber: (t: number) => V;

  const Animator = detectAnimationFromOptions(options);

  if (Animator.needsInterpolation) {
    interpolateFromNumber = interpolate([0, 100], [from, to], {
      clamp: false
    }) as (t: number) => V;
    from = 0;
    to = 100;
  }

  const animation = new Animator({ ...options, from, to } as any);

  function repeat() {
    if (repeatCount === 0 && computedDuration === undefined) {
      computedDuration = elapsed;
    }

    repeatCount++;

    const remainder = elapsed - computedDuration;

    if (repeatType === 'loop') {
      elapsed = remainder;
    } else {
      elapsed = computedDuration - remainder;
      isForwardPlayback = repeatCount % 2 === 0;
    }

    onRepeat && onRepeat();
  }

  function complete() {
    cancelDriver();
    onComplete && onComplete();
  }

  function update(delta: number) {
    if (!isForwardPlayback) delta = -delta;

    elapsed += delta;

    let latest = animation.update(elapsed);

    if (interpolateFromNumber) {
      latest = interpolateFromNumber(latest);
    }

    onUpdate(latest);

    const isComplete = isForwardPlayback ? animation.isComplete : elapsed <= 0;

    if (isComplete) {
      repeatCount < repeatMax ? repeat() : complete();
    }
  }

  function play() {
    onPlay && onPlay();
    cancelDriver = driver(update);
  }

  // TODO anime-style autoplay?
  play();

  return {
    play,
    pause: () => {},
    resume: () => {},
    reverse: () => {},
    seek: () => {},
    stop: () => {
      cancelDriver();
    }
  };
}
