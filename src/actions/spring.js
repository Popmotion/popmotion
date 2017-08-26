/*
  The closed-form damped harmonic oscillating spring.
  Or, spring.

  This is a direct port of Adam Miskiewicz's (@skevy) React Animated
  PR #15322 https://github.com/facebook/react-native/pull/15322/

  ```
  spring({
    mass: 2,
    damping: 10,
    stiffness: 100,
    to: 100
  }).start();
  ```

  Adam Miskiewicz:
  @skevy (twitter.com/skevy, github.com/skevy)
 */
import Action from './';
import { timeSinceLastFrame } from 'framesync';

class Spring extends Action {
  static defaultProps = {
    stiffness: 100,
    damping: 10,
    mass: 1.0,
    velocity: 0.0,
    from: 0.0,
    to: 0.0,
    restSpeed: 0.01,
    restDisplacement: 0.01
  };

  onStart() {
    const { velocity, to, from } = this.props;
    this.t = 0;
    this.initialVelocity = velocity ? velocity / 1000 : 0.0;
    this.isComplete = false;
    this.delta = to - from;
  }

  update() {
    const { stiffness, damping, mass, from, to, restSpeed, restDisplacement } = this.props;
    const { delta, initialVelocity } = this;

    const timeDelta = timeSinceLastFrame() / 1000;
    const t = this.t = this.t + timeDelta;

    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const angularFreq = Math.sqrt(stiffness / mass);
    const expoDecay = angularFreq * Math.sqrt(1.0 - (dampingRatio * dampingRatio));

    const x0 = 1;
    let oscillation = 0.0;

    // Underdamped
    if (dampingRatio < 1) {
      const envelope = Math.exp(-dampingRatio * angularFreq * t);
      oscillation = envelope * (((initialVelocity + dampingRatio * angularFreq * x0) / expoDecay) * Math.sin(expoDecay * t) + (x0 * Math.cos(expoDecay * t)));
      this.velocity = (envelope * ((Math.cos(expoDecay * t) * (initialVelocity + dampingRatio * angularFreq * x0)) - (expoDecay * x0 * Math.sin(expoDecay * t))) -
        ((dampingRatio * angularFreq * envelope) * ((((Math.sin(expoDecay * t) * (initialVelocity + dampingRatio * angularFreq * x0)) ) / expoDecay) + (x0 * Math.cos(expoDecay * t)))));

    // Critically damped
    } else {
      const envelope = Math.exp(-angularFreq * t);
      oscillation = envelope * (x0 + (initialVelocity + (angularFreq * x0)) * t);
      this.velocity = envelope * ((t * initialVelocity * angularFreq) - (t * x0 * (angularFreq * angularFreq)) + initialVelocity);
    }

    const fraction = 1 - oscillation;
    let position = from + fraction * delta;

    // Check if simulation is complete
    // We do this here instead of `isActionComplete` as it allows us
    // to clamp to end during update)
    const isBelowVelocityThreshold = Math.abs(this.velocity) <= restSpeed;
    const isBelowDisplacementThreshold = Math.abs(to - position) <= restDisplacement;
    this.isComplete = isBelowVelocityThreshold && isBelowDisplacementThreshold;

    if (this.isComplete) {
      position = to;
    }

    return position;
  }

  isActionComplete() {
    return this.isComplete;
  }
}

export default (props) => new Spring(props);
