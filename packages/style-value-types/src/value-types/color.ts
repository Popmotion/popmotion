import {
  clamp,
  isFirstChars,
  splitCommaDelimited,
  getValueFromFunctionString
} from '../utils';
import { number } from './numbers';
import { percent } from './units';
import { RGBA, HSLA, NumberMap } from '../types';

const clampRgbUnit = clamp(0, 255);

/**
 * Creates a function that will split color
 * values from string into an object of properties
 * `mapArrayToObject(['red', 'green', 'blue'])('rgba(0,0,0)')`
 */
const splitColorValues = (terms: string[]) => {
  const numTerms = terms.length;

  return (v: string) => {
    const values: NumberMap = {};
    const valuesArray = splitCommaDelimited(getValueFromFunctionString(v));

    for (let i = 0; i < numTerms; i++) {
      values[terms[i]] =
        valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
    }

    return values;
  };
};

// Templates
const rgbaTemplate = ({ red, green, blue, alpha = 1 }: RGBA) =>
  `rgba(${red}, ${green}, ${blue}, ${alpha})`;

const hslaTemplate = ({ hue, saturation, lightness, alpha = 1 }: HSLA) =>
  `hsla(${hue}, ${saturation}, ${lightness}, ${alpha})`;

// Value types
export const rgbUnit = {
  ...number,
  transform: (v: number) => Math.round(clampRgbUnit(v))
};

export const rgba = {
  test: isFirstChars('rgb'),
  parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
  transform: ({ red, green, blue, alpha }: RGBA) =>
    rgbaTemplate({
      red: rgbUnit.transform(red),
      green: rgbUnit.transform(green),
      blue: rgbUnit.transform(blue),
      alpha
    })
};

export const hsla = {
  test: isFirstChars('hsl'),
  parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
  transform: ({ hue, saturation, lightness, alpha }: HSLA) =>
    hslaTemplate({
      hue: Math.round(hue),
      saturation: percent.transform(saturation),
      lightness: percent.transform(lightness),
      alpha
    })
};

export const hex = {
  ...rgba,
  test: isFirstChars('#'),
  parse: (v: string): RGBA => {
    let r = '';
    let g = '';
    let b = '';

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
      red: parseInt(r, 16),
      green: parseInt(g, 16),
      blue: parseInt(b, 16),
      alpha: 1
    };
  }
};

const isRgba = (v: Color): v is RGBA => (v as RGBA).red !== undefined;
const isHsla = (v: Color): v is HSLA => (v as HSLA).hue !== undefined;

export const color = {
  test: (v: any) => rgba.test(v) || hsla.test(v) || hex.test(v),
  parse: (v: any) => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else if (hex.test(v)) {
      return hex.parse(v);
    }

    return v;
  },
  transform: (v: Color) => {
    if (isRgba(v)) {
      return rgba.transform(v);
    } else if (isHsla(v)) {
      return hsla.transform(v);
    }

    return v;
  }
};
