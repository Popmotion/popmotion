import createStyler from '../styler';
import { Styler, ResolvedState, State, ChangedValues } from '../styler/types';
import prefixer from './prefixer';
import { isTransformProp } from './transform-props';
import getValueType from './value-types';
import { createStyleBuilder } from './build-styles';
import { SCROLL_LEFT, SCROLL_TOP, scrollKeys } from './scroll-keys';
import { customStyleHandlers } from './custom-style-handlers';

type Props = {
  enableHardwareAcceleration?: boolean;
  preparseOutput?: boolean;
};

export type CssStylerOptions = {
  element: HTMLElement;
  preparseOutput: boolean;
  buildStyles: (state: State) => ResolvedState;
};

function onRead(key: string, options: CssStylerOptions): string | number {
  const styleHandler = customStyleHandlers[key];
  if (styleHandler) {
    return styleHandler.get(onRead, options);
  }

  const { element, preparseOutput } = options;
  const defaultValueType = getValueType(key);

  if (isTransformProp(key)) {
    return defaultValueType ? defaultValueType.default || 0 : 0;
  } else if (scrollKeys.has(key)) {
    return (element as any)[key];
  } else {
    const domValue =
      window
        .getComputedStyle(element, null)
        .getPropertyValue(prefixer(key, true)) || 0;

    return preparseOutput &&
      defaultValueType &&
      defaultValueType.test(domValue) &&
      defaultValueType.parse
      ? defaultValueType.parse(domValue)
      : domValue;
  }
}

function onRender(
  state: State,
  { element, buildStyles }: CssStylerOptions,
  changedValues: ChangedValues
) {
  // Style values
  Object.assign(element.style, buildStyles(state));

  // Scroll values
  if (changedValues.indexOf(SCROLL_LEFT) !== -1) {
    element[SCROLL_LEFT] = state[SCROLL_LEFT] as number;
  }
  if (changedValues.indexOf(SCROLL_TOP) !== -1) {
    element[SCROLL_TOP] = state[SCROLL_TOP] as number;
  }
}

const cssStyler = createStyler({
  onRead,
  onRender,
  uncachedValues: scrollKeys
});

export default function createCssStyler(
  element: HTMLElement,
  { enableHardwareAcceleration, ...props }: Props = {}
): Styler {
  return cssStyler({
    element,
    buildStyles: createStyleBuilder(enableHardwareAcceleration),
    preparseOutput: true,
    ...props
  });
}
