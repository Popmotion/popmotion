import sync, { cancelSync } from 'framesync';
import { number } from 'style-value-types';
import action from '../../action';
import { Action } from '../../action';
import vectorAction, { ActionFactory } from '../../action/vector';
import { speedPerSecond } from '../../calc';
import { SpringInterface, SpringProps } from './types';

const spring = (props: SpringProps = {}): Action =>
  action(
    ({ update, complete }): SpringInterface => {
      let { velocity = 0.0 } = props;
      const {
        from = 0.0,
        to = 0.0,
        stiffness = 100,
        damping = 10,
        mass = 1.0,
        restSpeed = 0.01,
        restDelta = 0.01
      } = props;
      const initialVelocity = velocity ? -(velocity / 1000) : 0.0;
      let t = 0;
      const delta = to - from;
      let position = from;
      let prevPosition = position;

      const process = sync.update(({ delta: timeDelta }) => {
        t += timeDelta;

        const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
        const angularFreq = Math.sqrt(stiffness / mass) / 1000;

        prevPosition = position;

        // Underdamped
        if (dampingRatio < 1) {
          const envelope = Math.exp(-dampingRatio * angularFreq * t);
          const expoDecay =
            angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);

          position =
            to -
            envelope *
              (((initialVelocity + dampingRatio * angularFreq * delta) /
                expoDecay) *
                Math.sin(expoDecay * t) +
                delta * Math.cos(expoDecay * t));
        } else {
          const envelope = Math.exp(-angularFreq * t);
          position =
            to -
            envelope * (delta + (initialVelocity + angularFreq * delta) * t);
        }

        velocity = speedPerSecond(position - prevPosition, timeDelta);

        // Check if simulation is complete
        // We do this here instead of `isActionComplete` as it allows us
        // to clamp to end during update)
        const isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
        const isBelowDisplacementThreshold =
          Math.abs(to - position) <= restDelta;

        if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
          position = to;
          update(position);
          cancelSync.update(process);
          complete();
        } else {
          update(position);
        }
      }, true);

      return {
        stop: () => cancelSync.update(process)
      };
    }
  );

const vectorSpring: ActionFactory = vectorAction(spring, {
  from: number.test,
  to: number.test,
  stiffness: number.test,
  damping: number.test,
  mass: number.test,
  velocity: number.test
});

export default vectorSpring;
