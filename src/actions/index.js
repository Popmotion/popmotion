import { onFrameUpdate, cancelOnFrameUpdate, timeSinceLastFrame } from 'framesync';
import { speedPerSecond } from '../inc/calc';
import { pipe } from '../inc/transformers';

class Action { // lawsuit - sorry
  constructor(props = {}) {
    this.props = {
      ...this.constructor.defaultProps
    };

    this.setProps(props);

    this.lastUpdated = 0;
    this.prev = this.current = props.current || props.from || 0;
  }

  set(v) {
    this.current = v;
    onFrameUpdate(this.scheduledUpdate);
    return v;
  }

  update() {
    return this.current;
  }

  start() {
    const { onStart, _onStart, passive } = this.props;

    if (!passive) {
      this._isActive = true;
      onFrameUpdate(this.scheduledUpdate);
    }

    if (this.onStart) this.onStart();
    if (onStart) onStart(this);
    if (_onStart) _onStart(this);

    if (parent) parent.start();

    return this;
  }

  stop() {
    const { onStop, _onStop, passive, parent } = this.props;

    if (!passive) {
      this._isActive = false;
      cancelOnFrameUpdate(this.scheduledUpdate);
    }

    if (this.onStop) this.onStop();
    if (onStop) onStop(this);
    if (_onStop) _onStop(this);

    if (parent) parent.stop();

    return this;
  }

  complete() {
    const { onComplete, _onComplete } = this.props;

    this.stop();

    if (this.onComplete) this.onComplete();
    if (onComplete) onComplete(this);
    if (_onComplete) _onComplete(this);

    return this;
  }

  scheduledUpdate = () => {
    this.lastUpdated = timeSinceLastFrame();
    this.prev = this.current;

    const { onUpdate, passive } = this.props;

    if (this.update) {
      this.current = this.update(this.current);
    }

    if (onUpdate) {
      if (onUpdate.registerAction) {
        onUpdate.set(this.get());
      } else {
        onUpdate(this.get(), this);
      }
    }

    this.fireListeners();

    if (!passive && this._isActive) {
      onFrameUpdate(this.scheduledUpdate);
    }

    if (this.isActionComplete && this.isActionComplete()) {
      this.complete();
    }

    return this;
  };

  setProps(props) {
    this.props = {
      ...this.props,
      ...props
    };

    return this;
  }

  get() {
    return this.current;
  }

  getProp(key) {
    return this.props[key];
  }

  getVelocity() {
    return speedPerSecond(this.current - this.prev, this.lastUpdated);
  }

  isActive() {
    return this._isActive;
  }

  subscribe(...sequence) {
    const sequenceLength = sequence.length;
    const onUpdate = sequenceLength === 1 ? sequence : pipe(...sequence);
    const child = new Action({
      onUpdate,
      passive: true,
      parent: this
    });

    this.listeners = this.listeners || [];
    this.numListeners = this.numListeners || 0;
    this.listeners.push(child);
    this.numListeners++;

    return child;
  }

  fireListeners() {
    const current = this.get();
    for (let i = 0; i < this.numListeners; i++) {
      this.listeners[i](current);
    }
    return this;
  }
}

export default Action;
