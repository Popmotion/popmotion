import Renderer from '../';
import renderCSS from './render';
import transformProps from './transform-props';
import valueTypesMap from './value-types';
import prefixer from './prefixer';

class CSSRenderer extends Renderer {
  onRender() {
    const { element, enableHardwareAcceleration } = this.props;
    renderCSS(element, this.state, this.changedValues, enableHardwareAcceleration);
  }

  onRead(key) {
    const valueType = valueTypesMap[key];

    if (!transformProps[key]) {
      const { element } = this.props;
      const domValue = window.getComputedStyle(element, null)[prefixer(key)] || 0;
      return (valueType && valueType.parse) ? valueType.parse(domValue) : domValue;
    } else {
      if (valueType) {
        return valueType.default || 0;
      } else {
        return 0;
      }
    }
  }
}

export default function (element, props) {
  return new CSSRenderer({
    element,
    enableHardwareAcceleration: true,
    ...props
  });
}
