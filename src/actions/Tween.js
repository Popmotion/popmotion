import Action from './';
import { timeSinceLastFrame } from '../framesync';
import { restrictBetween } from '../value/transformers';
import { ease, getProgressFromValue } from '../inc/utils';

const restrictProgress = restrictBetween(0, 1);

class Tween extends Action {
  onStart() {
    this.elapsed = 0;
  }

  onUpdate() {
    const { duration, ease, from, to } = this.props;
    const elapsed = timeSinceLastFrame();
    let progress = getProgressFromValue(elapsed, 0, duration);
    this.current = ease(restrictProgress(progress), from, to, ease);
  }
}

Tween.defaultProps = {
  duration: 300,
  ease: easing.easeOut,
  from: 0,
  to: 0
};

export default (props) => new Tween(props);
