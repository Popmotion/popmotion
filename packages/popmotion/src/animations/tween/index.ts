import sync, { cancelSync } from 'framesync';
import { clamp, progress } from '@popmotion/popcorn';
import action, { Action } from '../../action';
import { mix } from '@popmotion/popcorn';
import { easeOut } from '@popmotion/easing';
import { IObserver } from '../../observer/types';
import scrubber from './scrubber';
import { TweenInterface, TweenProps } from './types';
import { Process } from 'framesync';

const clampProgress = clamp(0, 1);

const tween = (props: TweenProps = {}): Action =>
  action(
    ({ update, complete }: IObserver): TweenInterface => {
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

      let currentProgress = 0;
      let process: Process;
      let isActive = false;
      const reverseTween = () => (playDirection *= -1);

      const isTweenComplete = (): boolean => {
        const isComplete =
          playDirection === 1
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
        currentProgress = clampProgress(progress(0, duration, elapsed));
        playhead.seek(currentProgress);
      };

      const startTimer = () => {
        isActive = true;
        process = sync.update(({ delta }) => {
          elapsed += delta * playDirection;
          updateTween();
          if (isTweenComplete() && complete) {
            cancelSync.update(process);
            sync.update(complete, false, true);
          }
        }, true);
      };

      const stopTimer = () => {
        isActive = false;
        if (process) cancelSync.update(process);
      };

      startTimer();

      return {
        isActive: () => isActive,
        getElapsed: () => clamp(0, duration, elapsed),
        getProgress: () => currentProgress,
        stop() {
          stopTimer();
        },
        pause() {
          stopTimer();
          return this;
        },
        resume() {
          if (!isActive) startTimer();
          return this;
        },
        seek(newProgress: number) {
          elapsed = mix(0, duration, newProgress);
          sync.update(updateTween, false, true);
          return this;
        },
        reverse() {
          reverseTween();
          return this;
        }
      };
    }
  );

export default tween;
