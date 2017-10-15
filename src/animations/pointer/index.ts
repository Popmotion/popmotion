import merge from '../../compositors/merge';
import mouse from './mouse';
import touch from './touch';

import { Point2D, PointerProps } from './types';

const getFirstTouch = ([firstTouch]: Point2D[]): Point2D => firstTouch;

const pointer = (props: PointerProps) => merge(
  mouse(props),
  touch(props).pipe(getFirstTouch)
);

export default pointer;