import Action from './';
import { onFrameUpdate } from 'framesync';

class Parallel extends Action {
  constructor(props) {
    const { actions, ...remainingProps } = props;
    super(remainingProps);
    this.actions = [];
    this.current = [];
    this.addActions(actions);
  }

  addAction(action) {
    if (this.actions.indexOf(action) !== -1) return;

    this.actions.push(action);

    const i = this.actions.length - 1;
    const onUpdate = (v) => {
      this.current[i] = v;
      onFrameUpdate(this.scheduledUpdate);
    };

    onUpdate(action.get());

    action
      .setProps({
        _onStop: () => this.numActiveActions--
      })
      .addListener(onUpdate);
  }

  addActions(actions) {
    actions.forEach((action) => this.addAction(action));
  }

  onStart() {
    this.numActiveActions = this.actions.length;
    this.actions.forEach((action) => action.start());
  }

  onStop() {
    this.actions.forEach((action) => action.stop());
  }

  getVelocity() {
    return this.actions.map((action) => action.getVelocity());
  }

  isActionComplete() {
    return (this.numActiveActions === 0);
  }

  getChildren() {
    return this.actions;
  }
}

export default (actions, props) => new Parallel({ actions, ...props });
