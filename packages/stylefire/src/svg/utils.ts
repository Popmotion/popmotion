import { Dimensions } from './types';

/**
 * Feature detection for getBBox call on an unrendered SVG Element.
 * Firefox will throw "NS_ERROR_FAILURE" error.
 * We want to detect this upfront so we do not crash in any future measurement.
 */
export const CAN_MEASURE_NOT_RENDERED_SVG_ELEMENTS = (() => {
  try {
    document.createElementNS('http://www.w3.org/2000/svg', 'rect').getBBox();
  } catch (e) {
    return false;
  }
  return true;
})();

export const getDimensions = (
  element: SVGElement | SVGPathElement
): Dimensions =>
  typeof (element as SVGGraphicsElement).getBBox === 'function'
    ? (element as SVGGraphicsElement).getBBox()
    : (element.getBoundingClientRect() as DOMRect);

export const getSVGElementDimensionsSafely = (
  element: SVGElement | SVGPathElement
): Dimensions => {
  if (CAN_MEASURE_NOT_RENDERED_SVG_ELEMENTS) {
    return getDimensions(element);
  }
  try {
    return getDimensions(element);
  } catch (e) {
    // most likely trying to measure an unrendered element under Firefox
    return { x: 0, y: 0, width: 0, height: 0 };
  }
};
