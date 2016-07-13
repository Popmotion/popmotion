import Action from './Action';

class Track extends Action {
  onStart() {
    this.inputOrigin = this.input.get();
  }

  onUpdate({ current }) {
    this.offset = this;
    this.current = this.from  + this.inputOrigin;
  }
}

Track.defaultProps = {
  from: 0
};

export default function track(props) {
  return new Track(props);
};
