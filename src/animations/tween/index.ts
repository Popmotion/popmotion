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
  let isActive = false;
  const reverseTween = () => playDirection *= -1;

  const isTweenComplete = (): boolean => {
    const isComplete = (playDirection === 1)
      ? elapsed >= duration
      : elapsed <= 0;

    if (!isComplete) return false;
    if (isComplete && !loop && !flip && !yoyo) return true;

    let isStepTaken = false;
    if (loop && loopCount < loop) {
      elapsed = 0;
      loopCount++;
      isStepTaken = true;

    } else if (flip && flipCount < flip) {
      elapsed = duration - elapsed;
      [from, to] = [to, from];
      flipCount++;
      isStepTaken = true;

    } else if (yoyo && yoyoCount < yoyo) {
      reverseTween();
      yoyoCount++;
      isStepTaken = true;
    }

    return !isStepTaken;
  };

  const updateTween = () => {
    progress = clampProgress(getProgressFromValue(0, duration, elapsed));
    current = getValueFromProgress(from, to, ease(progress));
    update(current);
  };

  const startTimer = () => {
    isActive = true;
    tweenTimer = everyFrame().start(() => {
      elapsed += timeSinceLastFrame() * playDirection;
      updateTween();
      if (isTweenComplete() && complete) complete();
    });
  };

  const stopTimer = () => {
    isActive = false;
    if (tweenTimer) tweenTimer.stop();
  };

  startTimer();

  return {
    isActive: () => isActive,
    getElapsed: () => clamp(0, duration)(elapsed),
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
      reverseTween();
      return this;
    }
  };
});

export default tween;
