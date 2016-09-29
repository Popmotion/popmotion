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
import between from '../transformers/between';
import chain from '../transformers/chain';
import { createUnitType, isFirstChar, splitColorValues } from './utils';
import { isNum } from '../inc/utils';

// String properties
const RED = 'Red';
const GREEN = 'Green';
const BLUE = 'Blue';
const ALPHA = 'Alpha';
const HUE = 'Hue';
const SATURATION = 'Saturation';
const LIGHTNESS = 'Lightness';

// Templates
const rgbaTemplate = (colors) => `rgba(${colors[RED]}, ${colors[GREEN]}, ${colors[BLUE]}, ${colors[ALPHA]})`;
const hslaTemplate = (colors) => `hsla(${colors[HUE]}, ${colors[SATURATION]}, ${colors[LIGHTNESS]}, ${colors[ALPHA]})`;

// Value types
export const alpha = {
  output: between(0, 1)
};

export const degrees = createUnitType('deg');
export const percent = createUnitType('%');
export const px = createUnitType('px');

export const number = { test: isNum };

export const scale = {
  default: 1
};

export const rgbUnit = {
  output: chain(
    between(0, 255),
    Math.round
  )
};

export const rgba = {
  childTypes: {
    [RED]: rgbUnit,
    [GREEN]: rgbUnit,
    [BLUE]: rgbUnit,
    [ALPHA]: alpha
  },

  test: isFirstChar('rgb'),

  parse: splitColorValues([RED, GREEN, BLUE, ALPHA]),

  output: rgbaTemplate
};

export const hex = {
  ...rgba,

  test: isFirstChar('#'),

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
      Red: parseInt(r, 16),
      Green: parseInt(g, 16),
      Blue: parseInt(b, 16),
      Alpha: 1
    };
  }
};

export const hsla = {
  childTypes: {
    [HUE]: number,
    [SATURATION]: percent,
    [LIGHTNESS]: percent,
    [ALPHA]: alpha
  },

  test: isFirstChar('hsl'),

  parse: splitColorValues([HUE, SATURATION, LIGHTNESS, ALPHA]),

  output: hslaTemplate
};
