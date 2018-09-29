import { Point, Point3D } from '../types';

export default (point: Point): point is Point3D => point.hasOwnProperty('z');
