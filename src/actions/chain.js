import Action from './';

class Chain extends Action {
  constructor(props) {
    super(props);
    this.playNext = this.playNext.bind(this);
  }

  onStart() {
    this.props.i = 0;
    this.playCurrent();
  }

  playNext() {
    const { i, order } = this.props;
    if (i < order.length - 1) {
      this.props.i++;
      this.playCurrent();
    }
  }

  playCurrent() {
    const { i, order } = this.props;
    order[i].onComplete = this.playNext;
    order[i].start();
  }

  onStop() {
    const { i, order } = this.props;
    order[i].stop();
  }
}

export default (order) => new Chain({ order });
