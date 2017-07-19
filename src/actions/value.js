import Action from './';
import { onFrameUpdate } from '../framesync';

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
    return this.toUpdate;
  }

  stopRegisteredAction() {
    if (this.action) this.action.stop();
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
