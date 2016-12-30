import Action from './';

class Offset extends Action {
  static defaultProps = {
    from: 0,
    passive: true
  };

  onStart() {
    const { input } = this.props;
    this.inputOrigin = input.get();
    input.addListener(this.update);
  }

  onStop() {
    const { input } = this.props;
    input.removeListener(this.update);
  }

  update() {
    const { input, from } = this.props;
    const offset = input.get() - this.inputOrigin;
    return from + offset;
  }
}

export default (...args) => {
  if (args.length === 1) {
    const [ props ] = args;
    return new Offset(props);
  } else {
    const [ input, onUpdate, props ] = args;
    return new Offset({
      input,
      onUpdate,
      ...props
    });
  }
};
