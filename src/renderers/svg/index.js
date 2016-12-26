import Renderer from '../';
import build from './build';
import transformProps from '../css/transform-props';
import valueTypeMap from './value-types';
import { setDOMAttrs } from '../../inc/utils';

class SVGRenderer extends Renderer {
  constructor(props) {
    super(props);

    const { x, y, width, height } = props.element.getBBox();
    this.elementDimensions = { x, y, width, height };
  }

  onRender() {
    const { element } = this.props;
    const attrs = build(this.state, this.elementDimensions);
    setDOMAttrs(element, attrs);
  }

  onRead(key) {
    const { element } = this.props;

    if (!transformProps[key]) {
      return element.getAttribute(key);
    } else {
      const valueType = valueTypeMap[key];
      return (valueType) ? valueType.default : 0;
    }
  }
}

export default function (element, props) {
  return new SVGRenderer({
    element,
    ...props
  });
}
