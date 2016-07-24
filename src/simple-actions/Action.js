import { onNextUpdate } from '../framesync/loop';

class Action {
  constructor(props) {
    this.props = { ...props };
    this.update = this.update.bind(this);
  }

  start() {
    onNextUpdate(this.update);

    if (this.onStart) {
      this.onStart();
    }

    return this;
  }

  stop() {
    if (this.onStop) {
      this.onStop();
    }

    return this;
  }

  update(framestamp, elapsed) {
    const current = this.props.current;

    this.lastUpdated = framestamp;

    if (this.onUpdate) {
      this.onUpdate(elapsed);
    }

    // set velocity

    onNextUpdate(this.update);

    return this;
  }

  complete() {
    this.stop();

    if (this.onComplete) {
      this.onComplete();
    }

    return this;
  }

  getCurrent() {
    return (this.current === undefined) ? 0 : this.current;
  }

  getVelocity() {
    return (this.velocity === undefined) ? 0 : this.velocity;
  }
}

export default Action;
