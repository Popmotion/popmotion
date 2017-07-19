// Implementation of https://ariya.io/2013/11/javascript-kinetic-scrolling-part-2
import { Action, timeSinceLastFrame } from 'popmotion';

class Inertia extends Action {
  static defaultProps = {
    velocity: 0,
    from: 0,
    power: 0.8,
    timeConstant: 350,
    autoStopDelta: 0.5
  };

  onStart() {
    const { velocity, power, modifyTarget } = this.props;

    this.amplitude = power * velocity;
    this.target = Math.round(this.current + this.amplitude);
    this.elapsed = 0;

    if (modifyTarget) {
      this.target = modifyTarget(this.target);
    }
  }

  update() {
    const { autoStopDelta, timeConstant } = this.props;

    this.elapsed += timeSinceLastFrame();
    const delta = -this.amplitude * Math.exp(-this.elapsed / timeConstant);
    const isMoving = (delta > autoStopDelta || delta < -autoStopDelta);
    if (!isMoving) this.isComplete = true;
    return isMoving ? this.target + delta : this.target;
  }

  isActionComplete() {
    return this.isComplete;
  }
}

export default (props) => new Inertia(props);
