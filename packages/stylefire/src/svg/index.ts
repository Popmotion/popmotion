import { isTransformProp } from '../css/transform-props';
import createStyler from '../styler';
import { Styler, State } from '../styler/types';
import { createAttrBuilder, SVGAttrs } from './build';
import { getValueType } from '../css/value-types';
import { getSVGElementDimensions } from './utils';

type SVGProps = {
  element: SVGElement;
  buildAttrs: (state: State) => SVGAttrs;
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
  onRender: (state, { element, buildAttrs }: SVGProps) => {
    const attrs = buildAttrs(state);
    for (const key in attrs) {
      if (key === 'style') {
        Object.assign(element.style, attrs.style);
      } else {
        element.setAttribute(key, attrs[key]);
      }
    }
  }
});

export default (element: SVGElement | SVGPathElement): Styler => {
  const dimensions = getSVGElementDimensions(element);

  return svgStyler({
    element,
    buildAttrs: createAttrBuilder(
      dimensions,
      (element as SVGPathElement).getTotalLength()
    )
  });
};
