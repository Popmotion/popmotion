import { Action } from '../../action';
import { applyOffset } from '../../transformers';
import touch, { getIsTouchDevice } from '../touch';
import mouse from './mouse';
import { Point2D, PointerProps } from './types';

const getFirstTouch = ([firstTouch]: Point2D[]): Point2D => firstTouch;

const pointer = (props: PointerProps = {}): Action => getIsTouchDevice()
  ? touch(props).pipe(getFirstTouch)
  : mouse(props);

export default ({ x, y, ...props }: PointerProps = {}): Action => {
  if (x !== undefined || y !== undefined) {
    const applyXOffset = applyOffset(x);
    const applyYOffset = applyOffset(y);
    const delta = { x: 0, y: 0 };

    return pointer(props).pipe((point: Point2D) => {
      delta.x = applyXOffset(point.x);
      delta.y = applyYOffset(point.y);
      return delta;
    });
  } else {
    return pointer(props);
  }
};
