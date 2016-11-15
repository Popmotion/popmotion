import Action from './';

class Track extends Action {
  static defaultProps = {
    from: 0,
    passive: true
  };

  onStart() {
    const { input } = this.props;
    this.inputOrigin = input.get();

    input.setProps({
      _onUpdate: this.update
    });
  }

  onUpdate() {
    const { input, from } = this.props;
    const offset = input.get() - this.inputOrigin;
    return from + offset;
  }
}

export default (props) => new Track(props);
