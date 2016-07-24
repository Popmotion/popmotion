import Action from './Action';
import actionGroup from './group';

class Sequence extends Action {
  constructor(props) {
    super(props);
    this.playNext = this.playNext.bind(this);
  }

  playNext() {
    if (this.props.i < this.props.order.length - 1) {
      this.props.i += 1;
      this.props.order[this.props.i].onComplete = this.playNext;
      this.props.order[this.props.i].start();
    }
  }

  onStart() {
    this.props.i = 0;

    this.props.order[this.props.i].onComplete = this.playNext;
  }

  onStop() {
    this.props.order[this.props.i].stop();
  }
}

export default function sequence(order) {
  return new Sequence({ order });
}
