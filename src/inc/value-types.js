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
  rgba as transformRGBA,
  alpha as transformAlpha,
  hsla as transformHSLA,
  color as transformColor,
  px as transformPx,
  percent as transformPercent,
  degrees as transformDegrees
} from './transformers';
import { createUnitType, isFirstChars, splitColorValues, isNum } from './utils';

// String properties
const RED = 'red';
const GREEN = 'green';
const BLUE = 'blue';
const ALPHA = 'alpha';
const HUE = 'hue';
const SATURATION = 'saturation';
const LIGHTNESS = 'lightness';

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
  test: isFirstChars('rgb'),

  parse: splitColorValues([RED, GREEN, BLUE, ALPHA]),

  transform: transformRGBA
};

export const hex = {
  ...rgba,

  test: isFirstChars('#'),

  parse: (v) => {
    let r, g, b;

    // If we have 6 characters, ie #FF0000
    if (v.length > 4) {
      r = v.substr(1, 2);
      g = v.substr(3, 2);
      b = v.substr(5, 2);

    // Or we have 3 characters, ie #F00
    } else {
      r = v.substr(1, 1);
      g = v.substr(2, 1);
      b = v.substr(3, 1);
      r += r;
      g += g;
      b += b;
    }

    return {
      [RED]: parseInt(r, 16),
      [GREEN]: parseInt(g, 16),
      [BLUE]: parseInt(b, 16),
      [ALPHA]: 1
    };
  }
};

export const hsla = {
  test: isFirstChars('hsl'),

  parse: splitColorValues([HUE, SATURATION, LIGHTNESS, ALPHA]),

  transform: transformHSLA
};

export const color = {
  childTypes: {
    ...hsla.childTypes,
    ...rgba.childTypes
  },

  test: (value) => rgba.test(value) || hex.test(value) || hsla.test(value),

  transform: transformColor
};

color.parse = (v) => {
  if (rgba.test(v)) {
    return rgba.parse(v);
  } else if (hex.test(v)) {
    return hex.parse(v);
  } else if (hsla.test(v)) {
    return hsla.parse(v);
  }
};
