export const clamp = (min: number, max: number) => (v: number) =>
  Math.max(Math.min(v, max), min);

// If this number is a decimal, make it just five decimal places
// to avoid exponents
export const sanitize = (v: number) => (v % 1 ? Number(v.toFixed(5)) : v);

export const floatRegex = /(-)?([\d]*\.?[\d])+/g;
export const colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
export const singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

export function isString(v: any) {
  return typeof v === 'string';
}
