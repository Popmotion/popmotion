import isPoint from './is-point';
import { Point, Point3D } from '../types';

export default (point: Point): point is Point3D =>
  isPoint(point) && point.hasOwnProperty('z');
