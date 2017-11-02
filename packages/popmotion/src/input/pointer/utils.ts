import { PointerPoint } from './types';

export const defaultPointerPos = (): PointerPoint => ({
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  x: 0,
  y: 0
});

export const eventToPoint = (e: Touch | MouseEvent, point: PointerPoint = defaultPointerPos()): PointerPoint => {
  point.clientX = point.x = e.clientX;
  point.clientY = point.y = e.clientY;
  point.pageX = e.pageX;
  point.pageY = e.pageY;
  return point;
};
