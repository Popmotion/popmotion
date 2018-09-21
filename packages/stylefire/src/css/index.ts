import createStyler from '../styler';
import { Styler } from '../styler/types';
import prefixer from './prefixer';
import buildStyles, { aliasMap } from './render';
import { isTransformProp } from './transform-props';
import getValueType from './value-types';

type Props = {
  enableHardwareAcceleration?: boolean;
  preparseOutput?: boolean;
};

const SCROLL_LEFT = 'scrollLeft';
const SCROLL_TOP = 'scrollTop';
const scrollValues = new Set([SCROLL_LEFT, SCROLL_TOP]);

const cssStyler = createStyler({
  onRead: (key, { element, preparseOutput }) => {
    const valueType = getValueType(key);

    if (isTransformProp(key)) {
      return valueType ? valueType.default || 0 : 0;
    } else if (scrollValues.has(key)) {
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
  onRender: (state, { element, enableHardwareAcceleration }, changedValues) => {
    // Style values
    element.style.cssText += buildStyles(
      state,
      changedValues,
      enableHardwareAcceleration,
      scrollValues
    );

    // Scroll values
    if (changedValues.indexOf(SCROLL_LEFT) !== -1)
      element.scrollLeft = state.scrollLeft;
    if (changedValues.indexOf(SCROLL_TOP) !== -1)
      element.scrollTop = state.scrollTop;
  },
  aliasMap,
  uncachedValues: scrollValues
});

export default (element: HTMLElement, props?: Props): Styler =>
  cssStyler({
    element,
    enableHardwareAcceleration: true,
    preparseOutput: true,
    ...props
  });
