/**
 * Value types
 *
 * alpha
 * degrees
 * hex
 * hsla
 * percent
 * px
 * rgbUnit
 * rgb
 * scale
 */
import {
  rgbUnit as transformRGBUnit,
  rgba as transformRgba,
  alpha as transformAlpha,
  hsla as transformHsla,
  color as transformColor,
  px as transformPx,
  percent as transformPercent,
  degrees as transformDegrees
} from './transformers';
import {
  hex as parseHex,
  rgba as parseRgba,
  hsla as parseHsla,
  color as parseColor
} from './parsers';
import {
  createUnitType,
  isNum,
  isRgb,
  isHsl,
  isHex,
  isColor
} from './utils';

export const number = {
  test: isNum,
  parse: parseFloat
};

// Value types
export const alpha = {
  ...number,
  transform: transformAlpha
};

export const degrees = createUnitType('deg', transformDegrees);
export const percent = createUnitType('%', transformPercent);
export const px = createUnitType('px', transformPx);

export const scale = {
  ...number,
  default: 1
};

export const rgbUnit = {
  ...number,
  transform: transformRGBUnit
};

export const rgba = {
  test: isRgb,
  parse: parseRgba,
  transform: transformRgba
};

export const hex = {
  ...rgba,
  test: isHex,
  parse: parseHex
};

export const hsla = {
  test: isHsl,
  parse: parseHsla,
  transform: transformHsla
};

export const color = {
  parse: parseColor,
  test: isColor,
  transform: transformColor
};
