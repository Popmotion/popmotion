import { applyOffset, Point2D } from '@popmotion/popcorn';
import { Action } from '../../action';
import multitouch, { getIsTouchDevice } from '../multitouch';
import mouse from './mouse';
import { PointerProps } from './types';

const getFirstTouch = ([firstTouch]: Point2D[]): Point2D => firstTouch;

const pointer = (props: PointerProps = {}): Action =>
  getIsTouchDevice()
    ? multitouch(props).pipe(
        ({ touches }: any) => touches,
        getFirstTouch
      )
    : mouse(props);

export default ({ x, y, ...props }: PointerProps = {}): Action => {
  if (x !== undefined || y !== undefined) {
    const applyXOffset = applyOffset(x || 0);
    const applyYOffset = applyOffset(y || 0);
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
