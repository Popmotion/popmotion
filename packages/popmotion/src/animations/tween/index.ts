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
        yoyo = 0,
        repeatDelay = 0
      } = props;
      let {
        from = 0,
        to = 1,
        elapsed = 0,
        flipCount = 0,
        yoyoCount = 0,
        loopCount = 0
      } = props;

      let playhead = scrubber({ from, to, ease }).start(update);

      let currentProgress = 0;
      let process: Process;
      let isActive = false;

      const reverseAnimation = (reverseEase: boolean = false) => {
        [from, to] = [to, from];
        playhead = scrubber({ from, to, ease, reverseEase }).start(update);
      };

      const isTweenComplete = () => {
        let isComplete = isActive && elapsed > duration + repeatDelay;

        // If we still have time on the clock, return false early
        if (!isComplete) return false;

        // If we're complete and not repeating, return true early
        if (isComplete && !loop && !flip && !yoyo) return true;

        elapsed = duration - (elapsed - repeatDelay);

        // Otherwise we have to figure out how to repeat the animation
        if (loop && loopCount < loop) {
          loopCount++;
          return false;
        } else if (flip && flipCount < flip) {
          flipCount++;
          reverseAnimation();
          return false;
        } else if (yoyo && yoyoCount < yoyo) {
          yoyoCount++;
          reverseAnimation(yoyoCount % 2 !== 0);
          return false;
        }

        return true;
      };

      const updateTween = () => {
        currentProgress = clampProgress(progress(0, duration, elapsed));
        playhead.seek(currentProgress);
      };

      const startTimer = () => {
        isActive = true;
        process = sync.update(({ delta }) => {
          elapsed += delta;
          updateTween();

          if (isTweenComplete()) {
            cancelSync.update(process);
            complete && sync.update(complete, false, true);
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
          reverseAnimation();
          return this;
        }
      };
    }
  );

export default tween;
