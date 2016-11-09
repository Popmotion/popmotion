import Action from './';
import tween from './tween';
import { linear } from '../easing';
import { getValueFromProgress } from '../inc/calc';

class CrossFade extends Action {
  static defaultProps = {
    ease: linear
  }

  onStart() {
    const { duration, ease, fader } = this.props;

    this.fader = fader || tween({
      to: 1,
      duration,
      ease
    }).start();
  }

  onUpdate() {
    const { from, to } = this.props;
    const balance = this.fader.get();
    const latestFromValue = from.get();
    const latestToValue = to.get();
    return getValueFromProgress(latestFromValue, latestToValue, balance);
  }
}

export default (props) => new CrossFade(props);
