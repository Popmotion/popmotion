import Action from './Action';

class Track extends Action {
  onStart() {
    this.inputOrigin = this.input.get();
  }

  onUpdate({ current }) {
    this.offset = this;
    this.current = this.from  + this.inputOrigin;

    if (this.smooth) {
      this.current = smooth(this.current, current, elapsed, this.smooth);
    }
  }
}

Track.defaultProps = {
  from: 0,
  smooth: 0
};

export default function track(props) {
  return new Track(props);
};
