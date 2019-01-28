// Implementation of https://ariya.io/2013/11/javascript-kinetic-scrolling-part-2
import sync, { cancelSync } from 'framesync';
import { number } from 'style-value-types';
import action from '../../action';
import { Action } from '../../action';
import vectorAction, { ActionFactory } from '../../action/vector';
import { DecayProps } from './types';

const decay = (props: DecayProps = {}): Action =>
  action(({ complete, update }) => {
    const {
      velocity = 0,
      from = 0,
      power = 0.8,
      timeConstant = 350,
      restDelta = 0.5,
      modifyTarget
    } = props;
    let elapsed = 0;
    const amplitude = power * velocity;
    const idealTarget = Math.round(from + amplitude);
    const target =
      typeof modifyTarget === 'undefined'
        ? idealTarget
        : modifyTarget(idealTarget);

    const process = sync.update(({ delta: frameDelta }) => {
      elapsed += frameDelta;
      const delta = -amplitude * Math.exp(-elapsed / timeConstant);
      const isMoving = delta > restDelta || delta < -restDelta;
      const current = isMoving ? target + delta : target;

      update(current);

      if (!isMoving) {
        cancelSync.update(process);
        complete();
      }
    }, true);

    return {
      stop: () => cancelSync.update(process)
    };
  });

const vectorDecay: ActionFactory = vectorAction(decay, {
  from: number.test,
  modifyTarget: (func: any) => typeof func === 'function',
  velocity: number.test
});

export default vectorDecay;
