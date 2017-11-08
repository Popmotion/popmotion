import { timeSinceLastFrame } from 'framesync';
import { number } from 'style-value-types';
import action from '../../action';
import { Action } from '../../action';
import vectorAction from '../../action/vector';
import { speedPerFrame } from '../../calc';
import onFrame from '../on-frame';
import { PhysicsInterface, Props } from './types';

const physics = ({
  acceleration = 0,
  friction = 0,
  velocity = 0,
  restSpeed = 0.001,
  from = 0,
  springStrength,
  to
}: Props = {}): Action => action(({ complete, update }): PhysicsInterface => {
  let current = from;

  const timer = onFrame().start(() => {
    const elapsed = timeSinceLastFrame();

    if (acceleration) velocity += speedPerFrame(acceleration, elapsed);
    if (friction) velocity *= (1 - friction) ** (elapsed / 100);

    if (springStrength !== undefined && to !== undefined) {
      const distanceToTarget = to - current;
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
      to = v;
      return this;
    },
    setVelocity(v) {
      velocity = v;
      return this;
    },
    stop: () => timer.stop()
  };
});

export default vectorAction(physics, {
  acceleration: number.test,
  friction: number.test,
  velocity: number.test,
  from: number.test,
  to: number.test,
  springStrength: number.test
});
