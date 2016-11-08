import { onFrameUpdate, cancelOnFrameUpdate, timeSinceLastFrame } from '../framesync';
import { speedPerSecond } from '../inc/calc';

class Action {
  constructor(props) {
    this.current = 0;
    this.update = this.update.bind(this);

    this.props = {
      ...this.constructor.defaultProps,
      ...props
    };
  }

  start() {
    const { value, onStart, from, velocity } = this.props;

    this.isActive = true;
    onFrameUpdate(this.update);

    if (this.onStart) {
      this.onStart();
    }

    if (onStart) {
      onStart(this);
    }

    return this;
  }

  stop() {
    const { onStop } = this.props;

    this.isActive = false;
    cancelOnFrameUpdate(this.update);

    if (this.onStop) {
      this.onStop();
    }

    if (onStop) {
      onStop(this);
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
    this.lastUpdated = timeSinceLastFrame();
    this.prev = this.current;

    if (this.onUpdate) {
      this.current = this.onUpdate();
    }

    if (this.props.onUpdate) {
      this.props.onUpdate(this.current, this);
    }

    if (this.isActive) {
      onFrameUpdate(this.update);
    }

    if (this.isActionComplete && this.isActionComplete()) {
      this.complete();
    }

    return this;
  }

  setProps(props) {
    this.props = {
      ...this.props,
      ...props
    };
  }

  get() {
    return this.current;
  }

  getVelocity() {
    return speedPerSecond(this.prev - this.current, this.lastUpdated);
  }
}

export default Action;
