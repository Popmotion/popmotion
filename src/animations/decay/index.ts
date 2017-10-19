// Implementation of https://ariya.io/2013/11/javascript-kinetic-scrolling-part-2
import { timeSinceLastFrame } from 'framesync';
import action from '../../action';
import everyFrame from '../every-frame';
import { Props } from './types';

const decay = ({
  velocity = 0,
  from = 0,
  power = 0.8,
  timeConstant = 350,
  restDelta = 0.5,
  modifyTarget
}: Props = {}) => action(({ complete, update }) => {
  let elapsed = 0;
  const amplitude = power * velocity;
  const idealTarget = Math.round(from + amplitude);
  const target = (typeof modifyTarget === 'undefined')
    ? idealTarget
    : modifyTarget(idealTarget);

  const timer = everyFrame().start(() => {
    elapsed += timeSinceLastFrame();
    const delta = -amplitude * Math.exp(-elapsed / timeConstant);
    const isMoving = (delta > restDelta || delta < -restDelta);
    const current = isMoving ? target + delta : target;

    update(current);

    if (!isMoving) complete();
  });

  return {
    stop: () => timer.stop()
  };
});

export default decay;
