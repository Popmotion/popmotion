import { onNextUpdate } from '../framesync/framesync';

class Action {
  constructor(props) {
    if (this.defaultProps) {
      for (let key in this.defaultProps) {
        this[key] = this.defaultProps[key];
      }
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

  update() {
    const current = this.current;

    if (this.onUpdate) {
      this.onUpdate(this.input);
    }

    onNextUpdate(this.update);
  }

  getCurrent() {
    return this.current;
  }

  getVelocity() {
    return this.velocity;
  }
}

export default Action;
