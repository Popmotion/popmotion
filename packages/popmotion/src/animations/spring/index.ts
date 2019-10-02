import sync, { cancelSync } from 'framesync';
import { number } from 'style-value-types';
import action from '../../action';
import { Action } from '../../action';
import vectorAction, { ActionFactory } from '../../action/vector';
import { velocityPerSecond } from '@popmotion/popcorn';
import { SpringInterface, SpringProps } from './types';
//import { deriveConfigFromDuration } from './duration';

interface PositionConfig {
  to: number;
  initialVelocity: number;
  initialDelta: number;
  dampingRatio: number;
  angularFreq: number;
  dampedAngularFreq: number;
  expoDecay: number;
}

type CalcPosition = (config: PositionConfig) => (t: number) => number;

const calcUnderdampedPosition: CalcPosition = ({
  dampingRatio,
  angularFreq,
  expoDecay,
  to,
  initialVelocity,
  initialDelta
}) => (t: number) => {
  const envelope = Math.exp(-dampingRatio * angularFreq * t);

  return (
    to -
    envelope *
      (((initialVelocity + dampingRatio * angularFreq * initialDelta) /
        expoDecay) *
        Math.sin(expoDecay * t) +
        initialDelta * Math.cos(expoDecay * t))
  );
};

const calcOverdampedPosition: CalcPosition = ({
  dampingRatio,
  angularFreq,
  dampedAngularFreq,
  to,
  initialVelocity,
  initialDelta
}) => t => {
  // TODO We added dampingRatio in this PR - check its effects with and without
  const envelope = Math.exp(-dampingRatio * angularFreq * t);
  return (
    to -
    (envelope *
      // TODO: Also test this (initialDelta + (initialVelocity + angularFreq * initialDelta) * t)
      ((initialVelocity + dampingRatio * angularFreq * initialDelta) *
        Math.sinh(dampedAngularFreq * t) +
        dampedAngularFreq * initialDelta * Math.cosh(dampedAngularFreq * t))) /
      dampedAngularFreq
  );
};

const spring = (props: SpringProps = {}): Action =>
  action(
    ({ update, complete }): SpringInterface => {
      let {
        velocity = 0.0,
        stiffness = 100,
        damping = 10,
        dampingRatio = 1.0
      } = props;
      const {
        from = 0.0,
        to = 0.0,
        mass = 1.0,
        duration,
        restSpeed = 0.01,
        restDelta = 0.01
      } = props;

      const initialVelocity = velocity ? -(velocity / 1000) : 0.0;
      const initialDelta = to - from;

      // If this is a duration-based spring, pre-calculate stiffness and mass
      if (duration !== undefined) {
        // const config = deriveConfigFromDuration({
        //   duration,
        //   mass,
        //   dampingRatio,
        //   initialVelocity
        // });
        // stiffness = config.stiffness;
        // damping = config.damping;
      } else {
        dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
      }

      const angularFreq = Math.sqrt(stiffness / mass) / 1000;
      const dampedAngularFreq =
        angularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      const expoDecay =
        angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);

      let t = 0;
      let position = from;
      let prevPosition = position;

      const positionCalcConfig = {
        dampingRatio,
        angularFreq,
        dampedAngularFreq,
        expoDecay,
        initialVelocity,
        to,
        initialDelta
      };

      const calcPosition =
        dampingRatio < 1
          ? calcUnderdampedPosition(positionCalcConfig)
          : calcOverdampedPosition(positionCalcConfig);

      const process = sync.update(({ delta }) => {
        t += delta;

        prevPosition = position;
        position = calcPosition(t);

        velocity = velocityPerSecond(position - prevPosition, delta);

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
export { spring as springSole };
