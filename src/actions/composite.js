import Action from './';

class CompositeAction extends Action {
  constructor(props) {
    const { actions, ...remainingProps } = props;
    super(remainingProps);
    this.current = {};
    this.actionKeys = [];
    this.addActions(props.actions);
  }

  addActions(actions) {
    for (const key in actions) {
      this.actionKeys.push(key);
      this[key] = actions[key];
      this[key].setProps({
        // Look into private settable functions
        onUpdate: (v, action) => {
          this.current[key] = action.get();
        },
        onStop: () => this.numActiveActions--
      });
    }
  }

  onStart() {
    this.numActiveActions = this.actionKeys.length;
    this.actionKeys.forEach((key) => this[key].start());
  }

  onStop() {
    this.actionKeys.forEach((key) => this[key].stop());
  }

  getVelocity() {
    const velocity = {};
    this.actionKeys.forEach((key) => velocity[key] = this[key].getVelocity());
    return velocity;
  }

  isActionComplete() {
    return (this.numActiveActions === 0);
  }
}

export default (actions, props) => {
  return new CompositeAction({
    actions,
    ...props
  });
}
