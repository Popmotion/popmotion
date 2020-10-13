import { Point } from '../types';

export const isPoint = (point: Object): point is Point =>
  point.hasOwnProperty('x') && point.hasOwnProperty('y');
