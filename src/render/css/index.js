import RenderInterface from '../';
import renderCSS from './render';
import transformProps from './transform-props';
import valueTypesMap from './value-types';
import prefixer from './prefixer';

class CSSInterface extends RenderInterface {
  static defaultProps = {
    enableHardwareAcceleration: true
  };

  onRender() {
    renderCSS(this.props.element, this.state, this.props.enableHardwareAcceleration);
  }

  onRead(key) {
    if (!transformProps[key]) {
      window.getComputedStyle(this.props.element, null)[prefixer(key)];
    } else {
      valueTypesMap[key].default || 0;
    }
  }
}

export default function (element, enableHardwareAcceleration) {
  return new CSSInterface({
    element,
    enableHardwareAcceleration
  });
}
