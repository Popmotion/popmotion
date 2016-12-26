import { onFrameUpdate, cancelOnFrameUpdate, timeSinceLastFrame } from '../framesync';
import { speedPerSecond } from '../inc/calc';

class Action {
  constructor(props) {
    this.update = this.update.bind(this);

    this.props = {
      ...this.constructor.defaultProps
    };

    this.setProps(props);

    this.current = props.current || 0;
  }

  start() {
    const { onStart, _onStart, passive } = this.props;

    if (!passive) {
      this.isActive = true;
      onFrameUpdate(this.update);
    }

    if (this.onStart) this.onStart();
    if (onStart) onStart(this);
    if (_onStart) _onStart(this);

    return this;
  }

  stop() {
    const { onStop, _onStop, passive } = this.props;

    if (!passive) {
      this.isActive = false;
      cancelOnFrameUpdate(this.update);
    }

    if (this.onStop) this.onStop();
    if (onStop) onStop(this);
    if (_onStop) _onStop(this);

    return this;
  }

  complete() {
    const { onComplete, _onComplete } = this.props;

    if (this.onComplete) this.onComplete();
    if (onComplete) onComplete(this);
    if (_onComplete) _onComplete(this);

    this.stop();

    return this;
  }

  update() {
    this.lastUpdated = timeSinceLastFrame();
    this.prev = this.current;

    const { onUpdate, passive } = this.props;

    if (this.onUpdate) {
      this.current = this.onUpdate();
    }

    if (onUpdate) onUpdate(this.current, this);
    this.fireListeners();

    if (!passive && this.isActive) {
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
    return this;
  }

  get() {
    return this.current;
  }

  getProp(key) {
    return this.props[key];
  }

  getVelocity() {
    return speedPerSecond(this.prev - this.current, this.lastUpdated);
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
