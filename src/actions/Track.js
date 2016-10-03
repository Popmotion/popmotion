import Action from './';
import { timeSinceLastFrame } from '../framesync';
import { smooth } from '../inc/calc';

class Track extends Action {
  onStart() {
    this.origin = this.get();
    this.inputOrigin = this.input.get();
    this.input.start();
  }

  onStop() {
    this.input.stop();
  }

  onUpdate() {
    const prev = this.current;
    const { direct, input } = this.props;
    const inputValue = input.get();

    if (direct) {
      this.current = inputValue;
    } else {
      const inputOffset = inputValue - this.inputOrigin;
      this.current = this.origin + this.inputOrigin;
    }

    if (smooth) {
      this.current = smooth(this.current, prev, timeSinceLastFrame(), smooth);
    }
  }
}

Track.defaultProps = {
  direct: false,
  smooth: 0
};

export default (props) => new Track(props);

