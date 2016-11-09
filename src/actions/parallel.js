import Action from './';

class Parallel extends Action {
  onStart() {
    const { actions } = this.props;
    this.numActiveActions = actions.length;

    actions.forEach((action) => {
      action.setProps({
        _onStop: () => this.numActiveActions--
      }).start();
    });
  }

  onStop() {
    this.props.actions.forEach((action) => action.stop());
  }

  addAction(action) {
    const { actions } = this.props;

    if (actions.indexOf(action) === -1) {
      actions.push(action);
    }
  }

  isActionComplete() {
    return (this.numActiveActions === 0);
  }
}

export default (actions) => new Parallel({ actions });
