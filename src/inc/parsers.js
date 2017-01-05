import { splitColorValues, isRgb, isHex, isHsl } from './utils';

export const hex = (v) => {
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
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: 1
  };
};

export const rgba = splitColorValues(['red', 'green', 'blue', 'alpha']);

export const hsla = splitColorValues(['hue', 'saturation', 'lightness', 'alpha']);

export const color = (v) => {
  if (isRgb(v)) {
    return rgba(v);
  } else if (isHex(v)) {
    return hex(v);
  } else if (isHsl(v)) {
    return hsla(v);
  }

  return v;
};
