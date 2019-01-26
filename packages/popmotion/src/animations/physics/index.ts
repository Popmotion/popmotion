import sync, { cancelSync } from 'framesync';
import { number } from 'style-value-types';
import action from '../../action';
import { Action } from '../../action';
import vectorAction, { ActionFactory } from '../../action/vector';
import { speedPerFrame } from '../../calc';
import { PhysicsInterface, PhysicsProps } from './types';

const physics = (props: PhysicsProps = {}): Action =>
  action(
    ({ complete, update }): PhysicsInterface => {
      let {
        acceleration = 0,
        friction = 0,
        velocity = 0,
        springStrength,
        to
      } = props;
      const { restSpeed = 0.001, from = 0 } = props;
      let current = from;

      const process = sync.update(({ delta }) => {
        // Integration doesn't work well with very low numbers
        const elapsed = Math.max(delta, 16);

        if (acceleration) velocity += speedPerFrame(acceleration, elapsed);
        if (friction) velocity *= (1 - friction) ** (elapsed / 100);

        if (springStrength !== undefined && to !== undefined) {
          const distanceToTarget = to - current;
          velocity += distanceToTarget * speedPerFrame(springStrength, elapsed);
        }

        current += speedPerFrame(velocity, elapsed);

        update(current);

        const isComplete =
          restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed);

        if (isComplete) {
          cancelSync.update(process);
          complete();
        }
      }, true);

      return {
        set(v) {
          current = v;
          return this;
        },
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
        stop: () => cancelSync.update(process)
      };
    }
  );

const vectorPhysics: ActionFactory = vectorAction(physics, {
  acceleration: number.test,
  friction: number.test,
  velocity: number.test,
  from: number.test,
  to: number.test,
  springStrength: number.test
});

export default vectorPhysics;
