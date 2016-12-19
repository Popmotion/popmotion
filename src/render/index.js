import { onFrameStart, onFrameRender } from '../../framesync';

class Render {
  constructor(props) {
    this.immediateRead = this.immediateRead.bind(this);
    this.immediateRender = this.immediateRender.bind(this);

    this.props = {
      ...this.constructor.defaultProps,
      ...props
    };

    this.state = {};
  }

  render() {
    onFrameRender(this.immediateRender);
  }

  immediateRender() {
    if (this.onRender) {
      this.onRender();
    }
  }

  update(v) {
    for (let key in v) {
      if (v.hasOwnProperty(key)) {
        this.state[key] = v[key];
      }
    }

    this.render();
  }

  read(key, callback) {
    onFrameStart(() => callback(this.immediateRead(key)));
  }

  immediateRead(key) {
    if (this.onRead) {
      return this.onRead(key);
    }
  }
}

export default Render;
