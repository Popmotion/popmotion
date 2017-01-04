import Renderer from '../';
import build from './build';
import { setDOMAttrs } from '../../inc/utils';

class SVGPathRenderer extends Renderer {
  constructor(props) {
    super(props);

    const { x, y, width, height } = props.element.getBBox();
    this.elementDimensions = {
      x,
      y,
      width,
      height,
      pathLength: props.element.getTotalLength()
    };
  }

  onRender() {
    const { pathLength } = this.elementDimensions;
    const { element } = this.props;
    setDOMAttrs(element, build(this.state, pathLength));
  }

  onRead(key) {
    return this.props.element.getAttribute(key);
  }
}

export default function (element, props) {
  return new SVGPathRenderer({
    element,
    ...props
  });
}
