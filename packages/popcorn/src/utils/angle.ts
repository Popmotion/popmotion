import { Point } from '../types';
import { zeroPoint } from '../inc';
import radiansToDegrees from './radians-to-degrees';

/*
  Angle between points

  @param [object]: X and Y coordinates of from point
  @param [object]: X and Y coordinates of to point
  @return [radian]: Angle between the two points in radians
*/
export default (a: Point, b: Point = zeroPoint) =>
  radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
