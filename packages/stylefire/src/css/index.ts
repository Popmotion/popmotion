import createStyler from '../styler';
import { Styler } from '../styler/types';
import prefixer from './prefixer';
import { isTransformProp } from './transform-props';
import getValueType from './value-types';
import { createStyleBuilder } from './build-styles';
import { SCROLL_LEFT, SCROLL_TOP, scrollKeys } from './scroll-keys';

type Props = {
  enableHardwareAcceleration?: boolean;
  preparseOutput?: boolean;
};

const cssStyler = createStyler({
  onRead: (key, { element, preparseOutput }) => {
    const valueType = getValueType(key);

    if (isTransformProp(key)) {
      return valueType ? valueType.default || 0 : 0;
    } else if (scrollKeys.has(key)) {
      return element[key];
    } else {
      const domValue =
        window
          .getComputedStyle(element, null)
          .getPropertyValue(prefixer(key, true)) || 0;

      return preparseOutput && valueType && valueType.parse
        ? valueType.parse(domValue)
        : domValue;
    }
  },
  onRender: (state, { element, buildStyles }, changedValues) => {
    // Style values
    Object.assign(element.style, buildStyles(state));

    // Scroll values
    if (changedValues.indexOf(SCROLL_LEFT) !== -1)
      element.scrollLeft = state.scrollLeft;
    if (changedValues.indexOf(SCROLL_TOP) !== -1)
      element.scrollTop = state.scrollTop;
  },
  uncachedValues: scrollKeys
});

export default (element: HTMLElement, props?: Props): Styler =>
  cssStyler({
    element,
    buildStyles: createStyleBuilder(),
    preparseOutput: true,
    ...props
  });
