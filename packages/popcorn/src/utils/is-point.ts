import { Point } from '../types';

export default (point: Object): point is Point =>
  point.hasOwnProperty('x') && point.hasOwnProperty('y');
