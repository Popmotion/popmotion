import Action from './Action';

const startAction = (action) => action.start();
const stopAction = (action) => action.stop();

class ActionGroup extends Action {
  onStart() {
    this.props.actions.forEach(startAction);
  }

  onStop() {
    this.props.actions.forEach(stopAction);
  }
}

export default function actionGroup(actions) {
  return new ActionGroup({ actions });
};

