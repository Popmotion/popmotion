import { onFrameUpdate, timeSinceLastFrame } from 'framesync';
import action from '../../action';
import { getProgressFromValue, getValueFromProgress } from '../../inc/calc';
import { easeOut } from '../../inc/easing';
import { clamp } from '../../inc/transformers';
import everyFrame from '../every-frame';

import { Observer, Subscription } from '../../action/types';
import { TweenInterface, TweenProps } from './types';

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
    const isComplete = (playDirection === 1)
      ? elapsed >= duration
      : elapsed <= 0;

    return isComplete;
  };

  const updateTween = () => {
    progress = clampProgress(getProgressFromValue(0, duration, elapsed));
    current = getValueFromProgress(from, to, ease(progress));
    update(current);
  };

  const startTimer = () => tweenTimer = everyFrame().start(() => {
    elapsed += timeSinceLastFrame() * playDirection;
    updateTween();
    if (isTweenComplete() && complete) complete();
  });

  const stopTimer = () => {
    if (tweenTimer) tweenTimer.stop();
  };

  startTimer();

  return {
    getElapsed: () => elapsed,
    getProgress: () => progress,
    stop() {
      stopTimer();
    },
    pause() {
      stopTimer();
      return this;
    },
    resume() {
      startTimer();
      return this;
    },
    seek(newProgress: number) {
      elapsed = getValueFromProgress(0, duration, newProgress);
      onFrameUpdate(updateTween);
      return this;
    },
    reverse() {
      elapsed = duration - elapsed;
      [from, to] = [to, from];
      return this;
    },
    flip() {
      playDirection *= -1;
      return this;
    }
  };
});

export default tween;
