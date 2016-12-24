import Action from './';
import { onFrameUpdate } from '../framesync';

class Value extends Action {
  static defaultProps = {
    passive: true
  };

  set(v) {
    this.current = v;
    onFrameUpdate(this.update);
  }
}

export default (current) => new Value({ current });
