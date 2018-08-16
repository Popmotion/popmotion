import {
  clamp,
  isFirstChars,
  splitCommaDelimited,
  getValueFromFunctionString
} from '../utils';
import { number } from './numbers';
import { percent } from './units';
import { Color, RGBA, HSLA, NumberMap, ValueType } from '../types';
import { sanitize } from '../utils';

const clampRgbUnit = clamp(0, 255);

// Regex taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e
const onlyColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i;

const isRgba = (v: Color): v is RGBA => (v as RGBA).red !== undefined;
const isHsla = (v: Color): v is HSLA => (v as HSLA).hue !== undefined;

/**
 * Creates a function that will split color
 * values from string into an object of properties
 * `mapArrayToObject(['red', 'green', 'blue'])('rgba(0,0,0)')`
 */
const splitColorValues = (terms: string[]) => {
  const numTerms = terms.length;

  return (v: string | RGBA | HSLA) => {
    if (typeof v !== 'string') return v;
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
export const rgbUnit: ValueType = {
  ...number,
  transform: (v: number) => Math.round(clampRgbUnit(v))
};

const testRgbaString = isFirstChars('rgb');
export const rgba: ValueType = {
  test: v => (typeof v === 'string' ? testRgbaString(v) : isRgba(v)),
  parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
  transform: ({ red, green, blue, alpha }: RGBA) =>
    rgbaTemplate({
      red: rgbUnit.transform(red),
      green: rgbUnit.transform(green),
      blue: rgbUnit.transform(blue),
      alpha: sanitize(alpha)
    })
};

const testHslaString = isFirstChars('hsl');
export const hsla: ValueType = {
  test: v => (typeof v === 'string' ? testHslaString(v) : isHsla(v)),
  parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
  transform: ({ hue, saturation, lightness, alpha }: HSLA) =>
    hslaTemplate({
      hue: Math.round(hue),
      saturation: percent.transform(sanitize(saturation)),
      lightness: percent.transform(sanitize(lightness)),
      alpha: sanitize(alpha)
    })
};

export const hex: ValueType = {
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

export const color: ValueType = {
  test: (v: any) =>
    (typeof v === 'string' && onlyColorRegex.test(v)) ||
    rgba.test(v) ||
    hsla.test(v) ||
    hex.test(v),
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
