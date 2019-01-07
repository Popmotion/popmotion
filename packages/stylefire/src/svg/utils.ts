import { Dimensions } from './types';

export const getDimensions = (
  element: SVGElement | SVGPathElement
): Dimensions =>
  typeof (element as SVGGraphicsElement).getBBox === 'function'
    ? (element as SVGGraphicsElement).getBBox()
    : (element.getBoundingClientRect() as DOMRect);

/**
 * The getBBox call on an unrendered SVG Element crashes Firefox.
 * It throws an "NS_ERROR_FAILURE" error. We want to catch this upfront.
 * Animating Rotation and Scale of these SVG Elements might be broken in such cases.
 */
export const getSVGElementDimensions = (
  element: SVGElement | SVGPathElement
): Dimensions => {
  try {
    return getDimensions(element);
  } catch (e) {
    // most likely trying to measure an unrendered element under Firefox
    return { x: 0, y: 0, width: 0, height: 0 };
  }
};
