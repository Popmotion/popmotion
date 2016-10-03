import { onFrameUpdate, cancelOnFrameUpdate, timeSinceLastFrame } from '../framesync/render-loop';
import { speedPerSecond } from '../inc/calc';

class Action {
  constructor(props) {
    this.props = { ...props };
    this.current = 0;
    this.velocity = 0;
    this.update = this.update.bind(this);
  }

  addChild(action) {
    this.children.push(action);
  }

  start() {
    onFrameUpdate(this.update);

    if (this.props.from === undefined && this.props.value) {
      this.props.from = this.props.value.getCurrent();
    }

    if (this.onStart) {
      fireOnStart(this);
    }

    return this;
  }

  stop() {
    cancelOnFrameUpdate(this.update);

    if (this.onStart) {
      fireOnStop(this);
    }

    return this;
  }

  complete() {
    if (this.onComplete) {
      this.onComplete(this);
    }

    return this;
  }

  update(framestamp, elapsed) {
    const current = this.getCurrent();
    const velocity = this.getVelocity();

    if (this.onUpdate) {
      this.current = this.onUpdate(framestamp, elapsed);
      this.velocity = speedPerSecond(this.current - current, elapsed);

      if (this.velocity) {
        // tell renderer to render
      }
    }



    // Check if action is complete, if not, fire on the next frame
    if (this.isActionComplete && this.isActionComplete()) {
      this.complete();
    } else {
      onFrameUpdate(this.update);
    }

    this.lastUpdated = framestamp;
  }

  set(props) {
    this.props = { ...this.props, ...props };
    return this;
  }

  get(key) {
    return this.props[key];
  }

  getCurrent() {
    return this.current;
  }

  getVelocity() {
    return this.velocity;
  }
};

export default Action;
