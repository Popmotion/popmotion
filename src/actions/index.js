import { onFrameUpdate, cancelOnFrameUpdate, timeSinceLastFrame } from 'framesync';
import { speedPerSecond } from '../inc/calc';

class Action { // lawsuit - sorry
  constructor(props = {}) {
    this.props = {
      ...this.constructor.defaultProps
    };

    this.setProps(props);

    this.lastUpdated = 0;
    this.prev = this.current = props.current || props.from || 0;
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

    return this;
  }

  stop() {
    const { onStop, _onStop, passive } = this.props;

    if (!passive) {
      this._isActive = false;
      cancelOnFrameUpdate(this.scheduledUpdate);
    }

    if (this.onStop) this.onStop();
    if (onStop) onStop(this);
    if (_onStop) _onStop(this);

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

  setProps({ onUpdate, ...props }) {
    this.props = {
      ...this.props,
      ...props
    };

    if (onUpdate) this.output(onUpdate);

    return this;
  }

  output(func) {
    this.props.onUpdate = func;
    if (func.registerAction) func.registerAction(this);

    return this;
  }

  get() {
    const { transform } = this.props;
    return transform ? transform(this.current) : this.current;
  }

  getBeforeTransform() {
    return this.current;
  }

  set(v) {
    this.current = v;
    return this;
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

  addListener(listener) {
    this.listeners = this.listeners || [];
    this.numListeners = this.numListeners || 0;
    if (this.listeners.indexOf(listener) === -1) {
      this.listeners.push(listener);
      this.numListeners++;
    }
    return this;
  }

  removeListener(listener) {
    const listenerIndex = (this.listeners) ? this.listeners.indexOf(listener) : -1;
    if (listenerIndex !== -1) {
      this.numListeners--;
      this.listeners.splice(listenerIndex, 1);
    }
    return this;
  }

  fireListeners() {
    const current = this.get();
    for (let i = 0; i < this.numListeners; i++) {
      this.listeners[i](current, this);
    }
    return this;
  }
}

export default Action;
