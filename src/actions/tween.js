import Action from './';
import { timeSinceLastFrame } from '../framesync';
import { flow, clamp } from '../inc/transformers';
import { getProgressFromValue, getValueFromProgress } from '../inc/calc';
import { easeOut } from '../inc/easing';

const clampProgress = (v) => clamp(0, 1, v);

class Tween extends Action {
  static defaultProps = {
    duration: 300,
    ease: easeOut,
    from: 0,
    to: 1
  };

  onStart() {
    const { duration, ease, from, to } = this.props;

    this.elapsed = 0;

    this.onUpdate = flow(
      () => this.elapsed += timeSinceLastFrame(),
      (v) => getProgressFromValue(0, duration, v),
      clampProgress,
      ease,
      (v) => getValueFromProgress(from, to, v)
    );
  }

  isActionComplete() {
    return (this.elapsed >= this.props.duration);
  }

  getDuration() {
    return this.props.duration;
  }

  getElapsed() {
    return this.elapsed;
  }
}

export default (props) => new Tween(props);
