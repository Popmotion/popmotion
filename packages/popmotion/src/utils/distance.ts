import { Point } from '../types';
import { isPoint } from './is-point';
import { isPoint3D } from './is-point-3d';
import { zeroPoint, isNum } from './inc';

const distance1D = (a: number, b: number) => Math.abs(a - b);

/*
  Distance

  Returns the distance between two n dimensional points.

  @param [object/number]: x and y or just x of point A
  @param [object/number]: (optional): x and y or just x of point B
  @return [number]: The distance between the two points
*/

// couldn't inline this below, because TS emitted declarations with wrong path references
type _Point = Point | number;

export const distance = (a: _Point, b: _Point = zeroPoint): number => {
  // 1D dimensions
  if (isNum(a) && isNum(b)) {
    return distance1D(a, b);

    // Multi-dimensional
  } else if (isPoint(a) && isPoint(b)) {
    const xDelta = distance1D(a.x, b.x);
    const yDelta = distance1D(a.y, b.y);
    const zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;

    return Math.sqrt(xDelta ** 2 + yDelta ** 2 + zDelta ** 2);
  }

  return 0;
};
