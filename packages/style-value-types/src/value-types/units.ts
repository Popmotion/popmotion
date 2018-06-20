import { contains } from '../utils';
import { ValueType } from '../types';

const createUnitType = (unit: string): ValueType => ({
  test: contains(unit),
  parse: parseFloat,
  transform: (v: number | string) => `${v}${unit}`
});

export const degrees = createUnitType('deg');
export const percent = createUnitType('%');
export const px = createUnitType('px');
export const vh = createUnitType('vh');
export const vw = createUnitType('vw');
