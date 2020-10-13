import { Point2D } from '../types';
import { degreesToRadians } from './degrees-to-radians';

/*
  Point from angle and distance

  @param [object]: 2D point of origin
  @param [number]: Angle from origin
  @param [number]: Distance from origin
  @return [object]: Calculated 2D point
*/
export const pointFromVector = (
  origin: Point2D,
  angle: number,
  distance: number
) => {
  angle = degreesToRadians(angle);

  return {
    x: distance * Math.cos(angle) + origin.x,
    y: distance * Math.sin(angle) + origin.y
  };
};
