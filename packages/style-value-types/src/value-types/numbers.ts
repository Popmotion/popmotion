import { clamp } from '../utils';
import { ValueType } from '../types';

export const number: ValueType = {
  test: (v): boolean => typeof v === 'number',
  parse: parseFloat,
  transform: (v: number) => v
};

export const alpha: ValueType = {
  ...number,
  transform: clamp(0, 1)
};

export const scale: ValueType = {
  ...number,
  default: 1
};
