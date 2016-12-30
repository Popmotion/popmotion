import Action from './';
import { onFrameUpdate } from '../framesync';

class Value extends Action {
  static defaultProps = {
    passive: true
  };

  set(v) {
    this.current = v;
    onFrameUpdate(this.scheduledUpdate);
  }
}

export default (current, onUpdate) => new Value({ current, onUpdate });
