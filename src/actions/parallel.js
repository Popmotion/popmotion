import Action from './';

const startAction = (action) => action.stop();
const stopAction = (action) => action.stop();

class Parallel extends Action {
  onStart() {
    this.props.actions.forEach(startAction);
  }

  onStop() {
    this.props.actions.forEach(stopAction);
  }

  addAction(action) {
    const { actions } = this.props;

    if (actions.indexOf(action) === -1) {
      actions.push(action);
    }
  }
}

export default (actions) => new Parallel({ actions });
