import { ValueType } from '../types';
import { isString } from '../utils';

const createUnitType = (unit: string): ValueType => ({
  test: (v: string) =>
    isString(v) && v.endsWith(unit) && v.split(' ').length === 1,
  parse: parseFloat,
  transform: (v: number | string) => `${v}${unit}`,
});

export const degrees = createUnitType('deg');
export const percent = createUnitType('%');
export const px = createUnitType('px');
export const vh = createUnitType('vh');
export const vw = createUnitType('vw');

export const progressPercentage: ValueType = {
  ...percent,
  parse: (v: string) => percent.parse(v) / 100,
  transform: (v: number) => percent.transform(v * 100),
};
