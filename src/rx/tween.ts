import { onFrameUpdate, timeSinceLastFrame } from 'framesync';
import action from './action';
import clock from './clock';
import { easeOut } from '../inc/easing';
import { clamp } from '../inc/transformers';
import { getProgressFromValue, getValueFromProgress } from '../inc/calc';
import { Observer, Subscription } from './types';

const clampProgress = clamp(0, 1);

type Easing = (v: number) => number;

type TweenProps = {
  from: number,
  to: number,
  duration: number,
  ease: Easing,
  elapsed: number,
  playDirection: number
};

type AnimationInterface = {
  get: () => number,
  getVelocity: () => number,
  stop: () => void
};

type TweenInterface = {
  stop: () => void,
  getProgress: () => number,
  getElapsed: () => number,
  pause: () => TweenInterface,
  resume: () => TweenInterface,
  seek: (progress: number) => TweenInterface,
  reverse: () => TweenInterface,
  flip: () => TweenInterface
};

const tween = ({
  from = 0,
  to = 1,
  duration = 300,
  elapsed = 0,
  ease = easeOut,
  playDirection = 1
}: TweenProps) => action(({ update, complete }: Observer): TweenInterface => {
  let progress = 0;
  let current = from;
  let tweenTimer: Subscription;

  const isTweenComplete = () => {
    return false;
  };

  const updateTween = () => {
    progress = clampProgress(getProgressFromValue(0, duration, elapsed));
    current = getValueFromProgress(from, to, ease(progress));
    update(current);
  };

  const startTimer = () => tweenTimer = clock.start(() => {
    elapsed += timeSinceLastFrame() * playDirection;
    updateTween();
    if (isTweenComplete() && complete) complete();
  });

  const stopTimer = () => {
    if (tweenTimer) tweenTimer.stop();
  }

  startTimer();

  return {
    getProgress: () => progress,
    getElapsed: () => elapsed,
    stop: function () {
      stopTimer();
    },
    pause: function () {
      stopTimer();
      return this;
    },
    resume: function () {
      startTimer();
      return this;
    },
    seek: function (progress: number) {
      elapsed = getValueFromProgress(0, duration, progress);
      onFrameUpdate(updateTween);
      return this;
    },
    reverse: function () {
      elapsed = duration - elapsed;
      [from, to] = [to, from];
      return this;
    },
    flip: function () {
      playDirection *= -1;
      return this;
    }
  };
});

export default tween;
