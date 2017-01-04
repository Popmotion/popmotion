import Action from './';
import { onFrameUpdate } from '../framesync';

class Value extends Action {
  static defaultProps = {
    passive: true
  };

  set(v) {
    this.toUpdate = v;
    onFrameUpdate(this.scheduledUpdate);
  }

  update() {
    return this.toUpdate;
  }
}

export default (current, onUpdate) => new Value({ current, onUpdate });
