import { number } from 'style-value-types';
import action, { Action } from '../../action';
import vectorAction, { ActionFactory } from '../../action/vector';
import { mix } from '@popmotion/popcorn';
import { linear, createReversedEasing } from '@popmotion/easing';

export type ScrubberSubscription = {
  seek: (progress: number) => any;
};

const scrubber = ({
  from = 0,
  to = 1,
  ease = linear,
  reverseEase = false
}): Action => {
  if (reverseEase) {
    ease = createReversedEasing(ease);
  }
  return action(
    ({ update }): ScrubberSubscription => ({
      seek: progress => update(progress)
    })
  ).pipe(
    ease,
    (v: number) => mix(from, to, v)
  );
};

const vectorScrubber: ActionFactory = vectorAction(scrubber, {
  ease: (func: any) => typeof func === 'function',
  from: number.test,
  to: number.test
});

export default vectorScrubber;
