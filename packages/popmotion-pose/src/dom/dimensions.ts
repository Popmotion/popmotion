import { BoundingBox, Dimensions } from '../types';
import { percent } from 'style-value-types';

export default (element: Element): Dimensions => {
  let hasMeasured = false;
  let current: BoundingBox = {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  };

  return {
    get: measurement => (measurement ? current[measurement] : current),
    measure: () => {
      current = element.getBoundingClientRect();
      hasMeasured = true;
      return current;
    },
    measurementAsPixels: (measurement, value, type) =>
      type === percent
        ? (typeof value === 'string' ? parseFloat(value) : value) /
          100 *
          current[measurement]
        : (value as number),
    has: () => hasMeasured
  };
};
