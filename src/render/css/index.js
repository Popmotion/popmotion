import Render from '../';
import renderCSS from './render';

class CSSRender extends Render {
  static defaultProps = {
    enableHardwareAcceleration: true
  };

  onRender() {
    renderCSS(this.props.element, this.state, this.props.enableHardwareAcceleration);
  }
}

export default function (element, enableHardwareAcceleration) {
  return new CSSRender({
    element,
    enableHardwareAcceleration
  });
}
