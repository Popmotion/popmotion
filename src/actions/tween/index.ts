import { onFrameUpdate, timeSinceLastFrame } from 'framesync';
import action from 'actions/action';
import clock from 'actions/clock';
import { getProgressFromValue, getValueFromProgress } from 'inc/calc';
import { easeOut } from 'inc/easing';
import { clamp } from 'inc/transformers';

import { TweenInterface, TweenProps } from './types';
import { Observer, Subscription } from 'actions/action/types';

const clampProgress = clamp(0, 1);

const tween = ({
  from = 0,
  to = 1,
  duration = 300,
  elapsed = 0,
  ease = easeOut,
  playDirection = 1,
  flip = 0,
  flipCount = 0,
  loop = 0,
  loopCount = 0,
  yoyo = 0,
  yoyoCount = 0
}: TweenProps = {}) => action(({ update, complete }: Observer): TweenInterface => {
  let progress = 0;
  let current = from;
  let tweenTimer: Subscription;

  const isTweenComplete = (): boolean => {
    let isComplete = (playDirection === 1)
      ? elapsed >= duration
      : elapsed <= 0;

    return isComplete;
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
