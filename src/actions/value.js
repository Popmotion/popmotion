import Action from './';
import { onFrameUpdate } from 'framesync';

class Value extends Action {
  static defaultProps = {
    passive: true
  };

  set(v) {
    this.toUpdate = v;
    onFrameUpdate(this.scheduledUpdate);
    return v;
  }

  update() {
    return (this.toUpdate !== undefined) ? this.toUpdate : this.current;
  }

  stopRegisteredAction() {
    if (this.action && this.action.isActive()) this.action.stop();
    this.action = undefined;
  }

  registerAction(action) {
    this.stopRegisteredAction();
    this.action = action;
    return this;
  }

  onStop() {
    this.stopRegisteredAction();
  }
}

export default (current, onUpdate) => new Value({ current, onUpdate });
