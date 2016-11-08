import Action from './';
import tween from './tween';
import { linear } from '../easing';
import { getValueFromProgress } from '../inc/calc';

class CrossFade extends Action {
  static defaultProps = {
    ease: linear
  }

  onStart() {
    const { duration, ease } = this.props;

    this.transferTween = tween({
      to: 1,
      duration,
      ease
    }).start();
  }

  onUpdate() {
    const { from, to } = this.props;
    const balance = this.transferTween.get();
    const latestFromValue = from.get();
    const latestToValue = to.get();
    return getValueFromProgress(latestFromValue, latestToValue, balance);
  }
}

export default (props) => new CrossFade(props);
