import { RGBA, ValueType } from '../types';
import { rgba } from './rgba';
import { isColorString } from './utils';

function parseHex(v: string): RGBA {
  let r = '';
  let g = '';
  let b = '';
  let a = '';

  // If we have 6 characters, ie #FF0000
  if (v.length > 5) {
    r = v.substr(1, 2);
    g = v.substr(3, 2);
    b = v.substr(5, 2);
    a = v.substr(7, 2);

    // Or we have 3 characters, ie #F00
  } else {
    r = v.substr(1, 1);
    g = v.substr(2, 1);
    b = v.substr(3, 1);
    a = v.substr(4, 1);
    r += r;
    g += g;
    b += b;
    a += a;
  }

  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1,
  };
}

export const hex: ValueType = {
  test: isColorString('#'),
  parse: parseHex,
  transform: rgba.transform,
};
