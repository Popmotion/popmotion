import { Point } from '../types';

export const zeroPoint: Point = {
  x: 0,
  y: 0,
  z: 0
};

export const isNum = (v: any): v is number => typeof v === 'number';
