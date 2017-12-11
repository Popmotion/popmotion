// Implementation of https://ariya.io/2013/11/javascript-kinetic-scrolling-part-2
import { timeSinceLastFrame } from 'framesync';
import { number } from 'style-value-types';
import action from '../../action';
import { Action } from '../../action';
import vectorAction from '../../action/vector';
import onFrame from '../every-frame';
import { Props } from './types';

const decay = (props: Props = {}): Action => action(({ complete, update }) => {
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
  const target = (typeof modifyTarget === 'undefined')
    ? idealTarget
    : modifyTarget(idealTarget);

  const timer = onFrame().start(() => {
    elapsed += timeSinceLastFrame();
    const delta = -amplitude * Math.exp(-elapsed / timeConstant);
    const isMoving = (delta > restDelta || delta < -restDelta);
    const current = isMoving ? target + delta : target;

    update(current);

    if (!isMoving) {
      timer.stop();
      complete();
    }
  });

  return {
    stop: () => timer.stop()
  };
});

export default vectorAction(decay, {
  from: number.test,
  modifyTarget: (func: any) => typeof func === 'function',
  velocity: number.test
});
