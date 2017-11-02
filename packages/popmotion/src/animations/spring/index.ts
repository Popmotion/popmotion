import { timeSinceLastFrame } from 'framesync';
import { number } from 'style-value-types';
import action from '../../action';
import { Action } from '../../action';
import vectorAction from '../../action/vector';
import { speedPerSecond } from '../../calc';
import onFrame from '../on-frame';
import { SpringInterface, SpringProps } from './types';

const spring = ({
  from = 0.0,
  to = 0.0,
  stiffness = 100,
  damping = 10,
  mass = 1.0,
  velocity = 0.0,
  restSpeed = 0.01,
  restDelta = 0.01
}: SpringProps = {}): Action => action(({ update, complete }): SpringInterface => {
  const initialVelocity = velocity ? - (velocity / 1000) : 0.0;
  let t = 0;
  const delta = to - from;
  let position = from;
  let prevPosition = position;

  const springTimer = onFrame().start(() => {
    const timeDelta = timeSinceLastFrame() / 1000;
    t += timeDelta;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const angularFreq = Math.sqrt(stiffness / mass);

    const x0 = 1;
    let oscillation = 0.0;

    // Underdamped
    if (dampingRatio < 1) {
      const envelope = Math.exp(-dampingRatio * angularFreq * t);
      const expoDecay = angularFreq * Math.sqrt(1.0 - (dampingRatio * dampingRatio));
      oscillation = envelope * (((initialVelocity + dampingRatio * angularFreq * x0) / expoDecay) * Math.sin(expoDecay * t) + (x0 * Math.cos(expoDecay * t)));

    } else {
      const envelope = Math.exp(-angularFreq * t);
      oscillation = envelope * (x0 + (initialVelocity + (angularFreq * x0)) * t);
    }

    const fraction = 1 - oscillation;
    prevPosition = position;
    position = from + fraction * delta;

    velocity = speedPerSecond(position - prevPosition, timeDelta * 1000);

    // Check if simulation is complete
    // We do this here instead of `isActionComplete` as it allows us
    // to clamp to end during update)
    const isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
    const isBelowDisplacementThreshold = Math.abs(to - position) <= restDelta;

    if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
      position = to;
      update(position);
      complete();
    } else {
      update(position);
    }
  });

  return {
    stop: () => springTimer.stop()
  };
});

export default vectorAction(spring, {
  from: number.test,
  to: number.test,
  stiffness: number.test,
  damping: number.test,
  mass: number.test,
  velocity: number.test
});
