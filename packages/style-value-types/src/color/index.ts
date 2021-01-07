import { HSLA, RGBA, ValueType } from '../types';
import { hex } from './hex';
import { hsla } from './hsla';
import { rgba } from './rgba';

export const color: ValueType = {
  test: (v: any) => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: (v: any) => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: (v: HSLA | RGBA) =>
    v.hasOwnProperty('red') ? rgba.transform(v) : hsla.transform(v),
};
