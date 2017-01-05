import { isFirstChars } from './utils';

export const isHex = isFirstChars('#');
export const isRgb = isFirstChars('rgb');
export const isHsl = isFirstChars('hsl');
