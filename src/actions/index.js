import { onFrameUpdate, cancelOnFrameUpdate, timeSinceLastFrame } from '../framesync';
import { speedPerSecond } from '../inc/calc';

class Action {
  constructor(props) {
    this.current = 0;
    this.velocity = 0;
    this.update = this.update.bind(this);

    this.props = {
      ...this.constructor.defaultProps,
      ...props
    };
  }

  start() {
    this.isActive = true;
    onFrameUpdate(this.update);

    if (this.onStart) {
      this.onStart();
    }

    if (this.props.onStart) {
      this.props.onStart(this);
    }

    return this;
  }

  stop() {
    this.isActive = false;
    cancelOnFrameUpdate(this.update);

    if (this.onStop) {
      this.onStop();
    }

    if (this.props.onStop) {
      this.props.onStop(this);
    }

    return this;
  }

  complete() {
    if (this.onComplete) {
      this.onComplete();
    }

    if (this.props.onComplete) {
      this.props.onComplete(this);
    }

    this.stop();

    return this;
  }

  update() {
    const current = this.current;
    const velocity = this.velocity;

    if (this.onUpdate) {
      this.onUpdate();
    }

    this.velocity = speedPerSecond(this.current - current, timeSinceLastFrame());

    if (this.velocity) {
      if (this.value) {
        this.value.set(this.current);
      }
    }

    if (this.props.onUpdate) {
      this.props.onUpdate(this);
    }

    if (this.isActive) {
      onFrameUpdate(this.update);
    }

    return this;
  }

  set(newValue) {
    this.current = newValue;
  }

  get() {
    return this.current;
  }

  getVelocity() {
    return this.velocity;
  }
}

export default Action;
