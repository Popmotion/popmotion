import { Action } from '../../chainable/types';
import touch, { getIsTouchDevice } from '../touch';
import mouse from './mouse';
import { Point2D, PointerProps } from './types';

const getFirstTouch = ([firstTouch]: Point2D[]): Point2D => firstTouch;

const pointer = (props: PointerProps): Action => getIsTouchDevice()
  ? touch(props).pipe(getFirstTouch)
  : mouse(props);

export default pointer;
