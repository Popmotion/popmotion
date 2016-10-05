import Action from './';
import { timeSinceLastFrame } from '../framesync';
import { restrictBetween } from '../value/filters';
import { ease, getProgressFromValue, getValueFromProgress } from '../inc/calc';
import { easeOut } from '../easing';

const restrictProgress = restrictBetween(0, 1);

class Tween extends Action {
  static defaultProps = {
    duration: 300,
    ease: easeOut,
    from: 0,
    to: 0
  }

  onStart() {
    this.elapsed = 0;
  }

  onUpdate() {
    const { duration, ease, from, to } = this.props;
    this.elapsed += timeSinceLastFrame();
    const progress = getProgressFromValue(this.elapsed, 0, duration);
    const easedProgress = ease(restrictProgress(progress));
    this.current = getValueFromProgress(easedProgress, from, to);

    if (this.elapsed >= duration) {
      this.complete();
    }
  }
}

export default (props) => new Tween(props);
