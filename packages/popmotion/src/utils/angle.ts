import { Point } from '../types';
import { radiansToDegrees } from './radians-to-degrees';
import { zeroPoint } from './inc';

/*
  Angle between points

  @param [object]: X and Y coordinates of from point
  @param [object]: X and Y coordinates of to point
  @return [radian]: Angle between the two points in radians
*/
export const angle = (a: Point, b: Point = zeroPoint) =>
  radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
