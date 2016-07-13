import Action from './Action';
import { currentTime } from '../inc/utils';

const MAX_ELAPSED = 33;

class Clock extends Action {
  onStart() {
    this.current = currentTime();
  }

  onUpdate(framestamp) {
    const elapsed = Math.min(framestamp - this.current, MAX_ELAPSED) * this.dilate;
    this.current += elapsed;
  }
}

Clock.defaultProps = {
  dilate: 1
};

export default function clock(props) {
  return new Clock(props);
};

