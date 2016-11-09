import { onFrameUpdate, cancelOnFrameUpdate, timeSinceLastFrame } from '../framesync';
import { speedPerSecond } from '../inc/calc';

class Action {
  constructor(props) {
    this.update = this.update.bind(this);

    this.props = {
      ...this.constructor.defaultProps,
      ...props
    };

    this.current = props.current || 0;
  }

  start() {
    const { onStart, _onStart } = this.props;

    this.isActive = true;
    onFrameUpdate(this.update);

    if (this.onStart) this.onStart();
    if (onStart) onStart(this);
    if (_onStart) _onStart(this);

    return this;
  }

  stop() {
    const { onStop, _onStop } = this.props;

    this.isActive = false;
    cancelOnFrameUpdate(this.update);

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
    const { filter } = this.props;
    return filter ? filter(this.current) : this.current;
  }

  getVelocity() {
    return speedPerSecond(this.prev - this.current, this.lastUpdated);
  }
}

export default Action;
