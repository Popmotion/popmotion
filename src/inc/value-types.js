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
import { clamp, flow, transformChildValues } from './transformers';
import { createUnitType, isFirstChars, splitColorValues, isNum } from './utils';

// String properties
const RED = 'red';
const GREEN = 'green';
const BLUE = 'blue';
const ALPHA = 'alpha';
const HUE = 'hue';
const SATURATION = 'saturation';
const LIGHTNESS = 'lightness';

// Templates
const rgbaTemplate = ({ red, green, blue, alpha = 1 }) => 
  `rgba(${red}, ${green}, ${blue}, ${alpha})`;

const hslaTemplate = ({ hue, saturation, lightness, alpha = 1 }) => 
  `hsla(${hue}, ${saturation}, ${lightness}, ${alpha})`;

export const number = {
  test: isNum,
  parse: parseFloat
};

// Value types
export const alpha = {
  ...number,
  transform: clamp(0, 1)
};

export const degrees = createUnitType('deg');
export const percent = createUnitType('%');
export const px = createUnitType('px');

export const scale = {
  ...number,
  default: 1
};

export const rgbUnit = {
  ...number,
  transform: flow(
    clamp(0, 255),
    Math.round
  )
};

export const rgba = {
  test: isFirstChars('rgb'),

  parse: splitColorValues([RED, GREEN, BLUE, ALPHA]),

  transform: flow(
    transformChildValues({
      [RED]: rgbUnit.transform,
      [GREEN]: rgbUnit.transform,
      [BLUE]: rgbUnit.transform,
      [ALPHA]: alpha.transform
    }),
    rgbaTemplate
  )
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

  transform: flow(
    transformChildValues({
      [HUE]: number.transform,
      [SATURATION]: percent.transform,
      [LIGHTNESS]: percent.transform,
      [ALPHA]: alpha.transform
    }),
    hslaTemplate
  )
};

export const color = {
  childTypes: {
    ...hsla.childTypes,
    ...rgba.childTypes
  },

  test: (value) => rgba.test(value) || hex.test(value) || hsla.test(value),

  transform: (v) => {
    if (v.hasOwnProperty('red')) {
      return rgba.transform(v);
    } else if (v.hasOwnProperty('hue')) {
      return hsla.transform(v);
    }
    return v;
  }
};
