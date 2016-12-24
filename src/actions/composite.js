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
      if (this.actionKeys.indexOf(key) === -1) {
        this.actionKeys.push(key);
      }

      this[key] = actions[key];

      const onUpdate = (v, action) => this.current[key] = action.get();

      this[key]
        .setProps({
          _onStop: () => this.numActiveActions--
        })
        .addListener(onUpdate);
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
};
