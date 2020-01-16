import { clamp } from '../utils';
import { alpha as alphaType, number } from './numbers';
import { percent } from './units';
import { Color, RGBA, HSLA, NumberMap, ValueType } from '../types';
import { sanitize, singleColorRegex } from '../utils';

/*
  Get value from function string
  "translateX(20px)" -> "20px"
*/
export const getValueFromFunctionString = (value: string) =>
  value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));

const clampRgbUnit = clamp(0, 255);

<<<<<<< HEAD
// Prefer speed over completeness
=======
>>>>>>> Replacing missing style-value-types
const isRgba = (v: Color): v is RGBA => (v as RGBA).red !== undefined;
const isHsla = (v: Color): v is HSLA => (v as HSLA).hue !== undefined;

/**
 * Creates a function that will split color
 * values from string into an object of properties
 * `mapArrayToObject(['red', 'green', 'blue'])('rgba(0,0,0)')`
 */
const splitColorValues = (terms: string[]) => {
  return (v: string | RGBA | HSLA) => {
    if (typeof v !== 'string') return v;
    const values: NumberMap = {};
    const valuesArray = getValueFromFunctionString(v).split(/,\s*/); // Split '0,0' into ['0','0']

    // 4 because there are four props in each color type
    for (let i = 0; i < 4; i++) {
      // If this value is undefined return 1 - this is usually undefined alpha
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

function isColorString(color: string, colorType: '#' | 'hsl' | 'rgb') {
  return color.startsWith(colorType) && singleColorRegex.test(color);
}

export const rgba: ValueType = {
  test: v => (typeof v === 'string' ? isColorString(v, 'rgb') : isRgba(v)),
  parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
  // TODO: Look into perhaps a mutative approach that doesn't create new objects
  transform: ({ red, green, blue, alpha = 1 }: RGBA) =>
    rgbaTemplate({
      red: rgbUnit.transform(red),
      green: rgbUnit.transform(green),
      blue: rgbUnit.transform(blue),
      alpha: sanitize(alphaType.transform(alpha))
    })
};

export const hsla: ValueType = {
  test: v => (typeof v === 'string' ? isColorString(v, 'hsl') : isHsla(v)),
  parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
  transform: ({ hue, saturation, lightness, alpha = 1 }: HSLA) =>
    hslaTemplate({
      hue: Math.round(hue),
      saturation: percent.transform(sanitize(saturation)),
      lightness: percent.transform(sanitize(lightness)),
      alpha: sanitize(alphaType.transform(alpha))
    })
};

export const hex: ValueType = {
  ...rgba,
  test: v => typeof v === 'string' && isColorString(v, '#'),
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
    (typeof v === 'string' && singleColorRegex.test(v)) ||
    isRgba(v) ||
    isHsla(v),
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
