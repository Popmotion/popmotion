import { onFrameRender } from '../../framesync';

class StateCache {
  constructor(props) {
    this.render = this.render.bind(this);

    this.props = {
      ...this.constructor.defaultProps,
      ...props
    };

    this.clearState();
  }

  get(key) {
    if (key) {
      if (this.state[key] !== undefined) {
        return this.state[key];
      } else {
        return this.read(key);
      }
    } else {
      return this.state;
    }
  }

  read(key) {
    if (this.onRead) {
      return this.onRead(key);
    }
  }

  set(values) {
    for (let key in values) {
      if (values.hasOwnProperty(key)) {
        if (this.state[key] !== values[key]) {
          this.hasChanged = true;
          this.changed.push(key);
          this.state[key] = values[key];
        }
      }
    }

    if (this.hasChanged) {
      onFrameRender(this.render);
    }
  }

  render() {
    if (this.hasChanged && this.onRender) {
      this.onRender();
      this.changed.length = 0;
    }
    this.hasChanged = false;
  }

  clearState() {
    this.state = {};
    this.changed = [];
  }
}

export default StateCache;
