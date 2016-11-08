import Action from './';
import { timeSinceLastFrame } from '../framesync';
import { flow, clamp } from '../inc/filters';
import { getProgressFromValue, getValueFromProgress } from '../inc/calc';
import { easeOut } from '../easing';

const clampProgress = clamp(0, 1);

class Tween extends Action {
  static defaultProps = {
    duration: 300,
    ease: easeOut,
    from: 0,
    to: 0
  }

  onStart() {
    const { duration, ease, from, to } = this.props;

    this.elapsed = 0;

    this.onUpdate = flow(
      () => this.elapsed += timeSinceLastFrame(),
      (elapsed) => getProgressFromValue(0, duration, elapsed),
      clampProgress,
      ease,
      (easedProgress) => getValueFromProgress(from, to, easedProgress)
    );
  }

  isActionComplete() {
    return (this.elapsed >= this.props.duration);
  }
}

export default (props) => new Tween(props);
