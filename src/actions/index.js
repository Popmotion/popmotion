import { onFrameUpdate, cancelOnFrameUpdate, timeSinceLastFrame } from '../framesync';
import { speedPerSecond } from '../inc/calc';

class Action { // lawsuit - sorry
  constructor(props = {}) {
    this.scheduledUpdate = this.scheduledUpdate.bind(this);

    this.props = {
      ...this.constructor.defaultProps
    };

    this.setProps(props);

    this.current = props.current || props.from || 0;
    this.prevValues = [];
    this.prevTimes = [];

    this.velocityWindow = 0;
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

  scheduledUpdate() {
    const currentTime = this.prev[this.prev.length - 1].time + timeSinceLastFrame();
    this.prevValues.push(this.current);
    this.prevTimes.push(currentTime);

    if (currentTime - this.prevTimes[0] > this.velocityWindow) {
      this.prevValues.shift();
      this.prevTimes.shift();
    }

    const { onUpdate, passive } = this.props;

    if (this.update) {
      this.current = this.update(this.current);
    }

    if (onUpdate) onUpdate(this.get(), this);
    this.fireListeners();

    if (!passive && this._isActive) {
      onFrameUpdate(this.scheduledUpdate);
    }

    if (this.isActionComplete && this.isActionComplete()) {
      this.complete();
    }

    return this;
  }

  setProps({ onUpdate, ...props }) {
    this.props = {
      ...this.props,
      ...props
    };

    if (onUpdate) this.output(onUpdate);

    return this;
  }

  output(func) {
    if (func.registerAction) {
      func.registerAction(this);
      this.props.onUpdate = (v) => func.set(v);
    } else {
      this.props.onUpdate = func;
    }
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

  setVelocityWindow(velocityWindow) {
    this.velocityWindow = velocityWindow;
  }

  getVelocity() {
    return speedPerSecond(
      this.prevValues[this.prevValues.length - 1] - this.prevValues[0],
      this.prevTimes[this.prevTimes.length - 1] - this.prevTimes[0]
    );
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
