import Action from './';

class Chain extends Action {
  onStart() {
    this.props.i = 0;
    this.playCurrent();
  }

  playNext = () => {
    const { i, order } = this.props;
    if (i < order.length - 1) {
      this.props.i++;
      this.playCurrent();
    } else {
      this.complete();
    }
  };

  playCurrent() {
    const { i, order } = this.props;
    order[i].props._onComplete = this.playNext;
    order[i].start();
  }

  onStop() {
    const { i, order } = this.props;
    order[i].stop();
  }
}

export default (order, onComplete) => new Chain({ order, onComplete });
