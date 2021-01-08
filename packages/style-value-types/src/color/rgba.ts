import { alpha as alphaType, number } from '../numbers';
import { RGBA, ValueType } from '../types';
import { clamp, sanitize } from '../utils';
import { isColorString, splitColor } from './utils';

const clampRgbUnit = clamp(0, 255);
export const rgbUnit: ValueType = {
  ...number,
  transform: (v: number) => Math.round(clampRgbUnit(v)),
};

export const rgba: ValueType = {
  test: isColorString('rgb', 'red'),
  parse: splitColor('red', 'green', 'blue'),
  transform: ({ red, green, blue, alpha = 1 }: RGBA) =>
    'rgba(' +
    rgbUnit.transform(red) +
    ', ' +
    rgbUnit.transform(green) +
    ', ' +
    rgbUnit.transform(blue) +
    ', ' +
    sanitize(alphaType.transform(alpha)) +
    ')',
};
