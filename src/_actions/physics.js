import Action from './';
import { timeSinceLastFrame } from 'framesync';
import { speedPerFrame } from '../inc/calc';

class Physics extends Action {
  static defaultProps = {
    acceleration: 0,
    friction: 0,
    velocity: 0,
    autoStopSpeed: 0.001
  }

  update() {
    const { autoStopSpeed, acceleration, friction, velocity, spring, to } = this.props;
    let newVelocity = velocity;
    const elapsed = timeSinceLastFrame();

    // Apply acceleration to velocity
    if (acceleration) {
      newVelocity += speedPerFrame(acceleration, elapsed);
    }

    // Apply friction to velocity
    if (friction) {
      newVelocity *= (1 - friction) ** (elapsed / 100);
    }

    if (spring && to !== undefined) {
      const distanceToTarget = to - this.current;
      newVelocity += distanceToTarget * speedPerFrame(spring, elapsed);
    }

    // Apply velocity
    this.current += speedPerFrame(newVelocity, elapsed);
    this.props.velocity = newVelocity;

    // Check if simulation is complete
    // We do this here instead of `isActionComplete` as it allows us
    // to clamp during this update
    this.isComplete = (autoStopSpeed !== false && (!newVelocity || Math.abs(newVelocity) <= autoStopSpeed));

    if (this.isComplete && spring) {
      this.current = to;
    }

    return this.current;
  }

  isActionComplete() {
    return this.isComplete;
  }
}

export default (props) => new Physics(props);
