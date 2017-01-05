import { hex, rgba, hsla, color } from '../parsers';

const red = {
  red: 255,
  green: 0,
  blue: 0,
  alpha: 1
};

const hslaTestColor = {
  hue: 170,
  saturation: 50,
  lightness: 45,
  alpha: 1
};

describe('hex()', () => {
  it('should split a hex value into the correct params', () => {
    expect(hex('#f00')).toEqual(red);
  });
});

describe('rgba()', () => {
  it('should split an rgba value into the correct params', () => {
    expect(rgba('rgba(255, 0, 0, 0.5)')).toEqual({ ...red, alpha: 0.5 });
    expect(rgba('rgb(255,0,0)')).toEqual(red);
  });
});

describe('hsla()', () => {
  it('should split an hsl value into the correct params', () => {
    expect(hsla('hsla(170, 50%, 45%, 1)')).toEqual(hslaTestColor);
    expect(hsla('hsl(170, 50%, 45%)')).toEqual(hslaTestColor);
  });
});

describe('color()', () => {
  it('should split the color with the appropriate parser', () => {
    expect(color('rgba(255, 0, 0, 1)')).toEqual(red);
    expect(color('#f00')).toEqual(red);
    expect(color('hsla(170, 50%, 45%, 1)')).toEqual(hslaTestColor);
  });
});
