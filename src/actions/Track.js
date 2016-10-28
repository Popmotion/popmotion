import Action from './';

class Track extends Action {
  onStart() {
    const { input } = this.props;
    this.inputOrigin = input.get();
  }

  onUpdate() {
    const { input, from } = this.props;
    const offset = input.get() - this.inputOrigin;
    this.current = from + offset;
  }
}

export default (props) => new Track(props);
