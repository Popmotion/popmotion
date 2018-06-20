import { clamp } from '../utils';

export const number = {
  test: (v): boolean => typeof v === 'number',
  parse: parseFloat,
  transform: v => v
};

export const alpha = {
  ...number,
  transform: clamp(0, 1)
};

export const scale = {
  ...number,
  default: 1
};
