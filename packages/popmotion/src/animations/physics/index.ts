import { timeSinceLastFrame } from 'framesync';
import action from '../../action';
import { speedPerFrame } from '../../calc';
import everyFrame from '../every-frame';
import { PhysicsInterface, Props } from './types';

const physics = ({
  acceleration = 0,
  friction = 0,
  velocity = 0,
  restSpeed = 0.001,
  from = 0,
  springStrength,
  springTarget
}: Props = {}) => action(({ complete, update }): PhysicsInterface => {
  let current = from;

  const timer = everyFrame().start(() => {
    const elapsed = timeSinceLastFrame();

    if (acceleration) velocity += speedPerFrame(acceleration, elapsed);
    if (friction) velocity *= (1 - friction) ** (elapsed / 100);

    if (springStrength !== undefined && springTarget !== undefined) {
      const distanceToTarget = springTarget - current;
      velocity += distanceToTarget * speedPerFrame(springStrength, elapsed);
    }

    current += speedPerFrame(velocity, elapsed);

    update(current);

    const isComplete = (restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed));

    if (isComplete) complete();
  });

  return {
    setAcceleration(v) {
      acceleration = v;
      return this;
    },
    setFriction(v) {
      friction = v;
      return this;
    },
    setSpringStrength(v) {
      springStrength = v;
      return this;
    },
    setSpringTarget(v) {
      springTarget = v;
      return this;
    },
    setVelocity(v) {
      velocity = v;
      return this;
    },
    stop: () => timer.stop()
  };
});

export default physics;
