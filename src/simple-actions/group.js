import Action from './Action';

group();


tween(opts)

function tween(props) {

  return function () {
    
  }
};







export default function actionGroup(actions) {
  return new ActionGroup({ actions });
};

class TransferVelocity extends Action {
  onStart() {
    this.numActions = this.props.actions.length;
  }

  onUpdate(framestamp, elapsed) {
    const { actions } = this.props;
    let velocity = 0;

    for (let i = 0; i < this.numActions; i++) {
      const action = actions[i];

      if (i !== 0) {
        action.velocity = velocity;
      }

      action.onUpdate(framestamp, elapsed);
      velocity = action.getVelocity();
    }

    this.props.action();
  }
}

