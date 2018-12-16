import { isTransformProp } from '../css/transform-props';
import createStyler from '../styler';
import { Styler } from '../styler/types';
import { setDomAttrs } from '../styler/utils';
import buildAttrs from './build';
import getValueType from './value-types';
import { SVGState } from './types';
import { getSVGElementDimensionsSafely } from './utils';

type SVGProps = {
  dimensions: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  element: SVGElement;
  isPath: boolean;
  pathLength?: number;
};

const svgStyler = createStyler({
  onRead: (key, { element }) => {
    if (!isTransformProp(key)) {
      return element.getAttribute(key);
    } else {
      const valueType = getValueType(key);
      return valueType ? valueType.default : 0;
    }
  },
  onRender: (state, { dimensions, element, isPath, pathLength }) => {
    setDomAttrs(
      element,
      buildAttrs(state as SVGState, dimensions, isPath, pathLength)
    );
  }
});

export default (element: SVGElement | SVGPathElement): Styler => {
  const dimensions = getSVGElementDimensionsSafely(element);

  const props: SVGProps = {
    element,
    dimensions,
    isPath: false
  };

  if (element.tagName === 'path') {
    props.isPath = true;
    props.pathLength = (element as SVGPathElement).getTotalLength();
  }

  return svgStyler(props);
};
