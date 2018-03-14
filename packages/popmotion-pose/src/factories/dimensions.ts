import { BoundingBox } from '../types';

export default (element: Element) => {
  let hasMeasured = false;
  let current: BoundingBox = { width: 0, height: 0, top: 0, left: 0, bottom: 0, right: 0 };

  return {
    get: () => current,
    measure: () => {
      current = element.getBoundingClientRect();
      hasMeasured = true;
    },
    has: () => hasMeasured
  };
};
