import { timeSinceLastFrame } from 'framesync';
import action from './action';
import clock from './clock';
import { Observer } from './action/types';

type SpringProps = {
  from?: number,
  to?: number,
  stiffness?: number,
  damping?: number,
  mass?: number,
  velocity?: number,
  restSpeed?: number,
  restDisplacement?: number
};

type SpringInterface = {
  stop: () => void
};

const spring = ({
  from = 0.0,
  to = 0.0,
  stiffness = 100,
  damping = 10,
  mass = 1.0,
  velocity = 0.0,
  restSpeed = 0.01,
  restDisplacement = 0.01
}: SpringProps = {}) => action(({ update, complete }: Observer): SpringInterface => {
  const initialVelocity = velocity ? velocity / 1000 : 0.0;
  let t = 0;
  let delta = to - from;

  const springTimer = clock.start(() => {
    const timeDelta = timeSinceLastFrame() / 1000;
    t += timeDelta;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const angularFreq = Math.sqrt(stiffness / mass);
    const expoDecay = angularFreq * Math.sqrt(1.0 - (dampingRatio * dampingRatio));

    const x0 = 1;
    let oscillation = 0.0;

    // Underdamped
    if (dampingRatio < 1) {
      const envelope = Math.exp(-dampingRatio * angularFreq * t);
      oscillation = envelope * (((initialVelocity + dampingRatio * angularFreq * x0) / expoDecay) * Math.sin(expoDecay * t) + (x0 * Math.cos(expoDecay * t)));
      velocity = (envelope * ((Math.cos(expoDecay * t) * (initialVelocity + dampingRatio * angularFreq * x0)) - (expoDecay * x0 * Math.sin(expoDecay * t))) -
        ((dampingRatio * angularFreq * envelope) * ((((Math.sin(expoDecay * t) * (initialVelocity + dampingRatio * angularFreq * x0)) ) / expoDecay) + (x0 * Math.cos(expoDecay * t)))));

    // Critically damped
    } else {
      const envelope = Math.exp(-angularFreq * t);
      oscillation = envelope * (x0 + (initialVelocity + (angularFreq * x0)) * t);
      velocity = envelope * ((t * initialVelocity * angularFreq) - (t * x0 * (angularFreq * angularFreq)) + initialVelocity);
    }

    const fraction = 1 - oscillation;
    let position = from + fraction * delta;

    // Check if simulation is complete
    // We do this here instead of `isActionComplete` as it allows us
    // to clamp to end during update)
    const isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
    const isBelowDisplacementThreshold = Math.abs(to - position) <= restDisplacement;
    
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
  }
});

export default spring;
