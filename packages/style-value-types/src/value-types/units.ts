import { contains } from '../utils';
import { ValueType } from '../types';

const createUnitType = (unit: string): ValueType => {
  const containsUnit = contains(unit);

  return {
    test: (v: string) =>
      typeof v === 'string' && containsUnit(v) && v.split(' ').length === 1,
    parse: parseFloat,
    transform: (v: number | string) => `${v}${unit}`
  };
};

export const degrees = createUnitType('deg');
export const percent = createUnitType('%');
export const px = createUnitType('px');
export const vh = createUnitType('vh');
export const vw = createUnitType('vw');
