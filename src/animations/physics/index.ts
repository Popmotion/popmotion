import { timeSinceLastFrame } from 'framesync';
import action from '../../action';
import { speedPerFrame } from '../../inc/calc';
import everyFrame from '../every-frame';
import { Props } from './types';

const physics = ({
  acceleration = 0,
  friction = 0,
  velocity = 0,
  autoStopSpeed = 0.001,
  from = 0
}: Props = {}) => action(({ complete, update }) => {
  let current = from;

  const timer = everyFrame().start(() => {
    const elapsed = timeSinceLastFrame();

    if (acceleration) velocity += speedPerFrame(acceleration, elapsed);
    if (friction) velocity *= (1 - friction) ** (elapsed / 100);

    current += speedPerFrame(velocity, elapsed);

    update(current);

    const isComplete = (autoStopSpeed !== false && (!velocity || Math.abs(velocity) <= autoStopSpeed));

    if (isComplete) complete();
  });

  return {
    stop: () => timer.stop()
  };
});

export default physics;
