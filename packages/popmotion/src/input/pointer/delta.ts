import { Action } from '../../action';
import { applyOffset } from '../../transformers';
import pointer from './';
import { Point2D } from './types';

const deltaPointer = (x: number, y: number): Action => {
  const applyXOffset = applyOffset(x);
  const applyYOffset = applyOffset(y);
  const delta = { x: 0, y: 0 };

  return pointer().pipe((point: Point2D) => {
    delta.x = applyXOffset(point.x);
    delta.y = applyYOffset(point.y);
    return delta;
  });
};

export default deltaPointer;
