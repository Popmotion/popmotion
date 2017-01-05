import Action from './';
import { onFrameUpdate } from '../framesync';

class Offset extends Action {
  static defaultProps = {
    from: 0,
    passive: true
  };

  onStart() {
    const { input } = this.props;
    this.inputOrigin = input.get();

    this.scheduleUpdate = () => {
      onFrameUpdate(this.scheduledUpdate);
    };

    input.addListener(this.scheduleUpdate);
  }

  onStop() {
    const { input } = this.props;
    input.removeListener(this.scheduleUpdate);
  }

  update() {
    const { input, from } = this.props;
    const offset = input.get() - this.inputOrigin;
    return from + offset;
  }
}

export default (...args) => {
  if (args.length === 1) {
    const [ props ] = args;
    return new Offset(props);
  } else {
    const [ input, onUpdate, props ] = args;
    return new Offset({
      input,
      onUpdate,
      ...props
    });
  }
};
