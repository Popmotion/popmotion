import { onFrameUpdate, timeSinceLastFrame } from 'framesync';
import action, { Action } from '../../action';
import { ColdSubscription } from '../../action/types';
import { getProgressFromValue, getValueFromProgress } from '../../calc';
import { easeOut } from '../../easing';
import { IObserver } from '../../observer/types';
import { clamp } from '../../transformers';
import onFrame from '../every-frame';
import scrubber from './scrubber';
import { TweenInterface, TweenProps } from './types';

const clampProgress = clamp(0, 1);

const tween = (props: TweenProps = {}): Action => action(({ update, complete }: IObserver): TweenInterface => {
  const {
    duration = 300,
    ease = easeOut,
    flip = 0,
    loop = 0,
    yoyo = 0
  } = props;
  let {
    from = 0,
    to = 1,
    elapsed = 0,
    playDirection = 1,
    flipCount = 0,
    yoyoCount = 0,
    loopCount = 0
  } = props;

  let playhead = scrubber({ from, to, ease }).start(update);

  let progress = 0;
  let tweenTimer: ColdSubscription;
  let isActive = false;
  const reverseTween = () => playDirection *= -1;

  const isTweenComplete = (): boolean => {
    const isComplete = (playDirection === 1)
      ? isActive && elapsed >= duration
      : isActive && elapsed <= 0;

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
      playhead = scrubber({ from, to, ease }).start(update);

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
    playhead.seek(progress);
  };

  const startTimer = () => {
    isActive = true;
    tweenTimer = onFrame().start(() => {
      elapsed += timeSinceLastFrame() * playDirection;
      updateTween();
      if (isTweenComplete() && complete) {
        tweenTimer.stop();
        onFrameUpdate(complete, true);
      }
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
      onFrameUpdate(updateTween, true);
      return this;
    },
    reverse() {
      reverseTween();
      return this;
    }
  };
});

export default tween;
