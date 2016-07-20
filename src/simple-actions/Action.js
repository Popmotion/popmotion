import { onNextUpdate } from '../framesync/loop';

class Action {
  constructor(props) {
    for (let key in props) {
      this[key] = props[key];
    }

    this.update = this.update.bind(this);
  }

  start() {
    this.isActive = true;

    onNextUpdate(this.update);

    if (this.onStart) {
      this.onStart();
    }

    return this;
  }

  stop() {
    this.isActive = false;

    if (this.onStop) {
      this.onStop();
    }

    return this;
  }

  update(framestamp, elapsed) {
    const current = this.current;

    this.lastUpdated = framestamp;

    if (this.onUpdate) {
      this.onUpdate(this.input);
    }

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
