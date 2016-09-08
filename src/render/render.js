import { onFrameRender } from '../framesync/render-loop';

class Render {
  constructor(onChange, valueMap) {
    this.values = {...valueMap};
    this.state = {};
    this.onChange = onChange;

    for (let key in valueMap) {
      this.register(valueMap[key]);
    }
  }

  register(value) {
    value.subscribe(this.invalidate);
  }

  invalidate() {
    if (!this.hasChanged) {
      onFrameRender(this.render);
    }

    this.hasChanged = true;
  }

  render() {
    this.hasChanged = false;
    this.onChange(this.values);
  }
}

export default (output, valueMap) => new Render(output, valueMap);
