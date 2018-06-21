import {
  alpha,
  complex,
  hex,
  rgba,
  rgbUnit,
  hsla,
  color,
  px,
  degrees,
  percent,
  combo
} from '../';

const PATH = 'M150 0 L75 200 L225 200 Z';
const PATH_VALUES = {
  '0': 150,
  '1': 0,
  '2': 75,
  '3': 200,
  '4': 225,
  '5': 200
};

describe('complex value type', () => {
  it('test returns correctly', () => {
    expect(complex.test(PATH)).toBe(true);
    expect(complex.test(3)).toBe(false);
  });

  it('parse converts string to array', () => {
    expect(complex.parse(PATH)).toEqual(PATH_VALUES);
  });

  it('createTransformer returns a transformer function that correctly inserts values', () => {
    const transform = complex.createTransformer(PATH);
    expect(transform(PATH_VALUES)).toBe(PATH);
  });
});

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
    expect(hex.parse('#f00')).toEqual(red);
  });

  it('should correctly combine a hex value', () => {
    expect(hex.transform(red)).toBe('rgba(255, 0, 0, 1)');
  });
});

describe('rgba()', () => {
  it('should split an rgba value into the correct params', () => {
    expect(rgba.parse('rgba(255, 0, 0, 0.5)')).toEqual({ ...red, alpha: 0.5 });
    expect(rgba.parse('rgb(255,0,0)')).toEqual(red);
    expect(rgba.parse(red)).toEqual(red);
  });

  it('should correctly combine rgba value', () => {
    expect(rgba.transform(red)).toEqual('rgba(255, 0, 0, 1)');
  });
});

describe('hsla()', () => {
  it('should split an hsl value into the correct params', () => {
    expect(hsla.parse('hsla(170, 50%, 45%, 1)')).toEqual(hslaTestColor);
    expect(hsla.parse('hsl(170, 50%, 45%)')).toEqual(hslaTestColor);
    expect(hsla.parse(hslaTestColor)).toEqual(hslaTestColor);
  });

  it('should correctly combine hsla value', () => {
    expect(hsla.transform(hslaTestColor)).toEqual('hsla(170, 50%, 45%, 1)');
  });
});

describe('color()', () => {
  it('should split the color with the appropriate parser', () => {
    expect(color.parse('rgba(255, 0, 0, 1)')).toEqual(red);
    expect(color.parse('#f00')).toEqual(red);
    expect(color.parse('hsla(170, 50%, 45%, 1)')).toEqual(hslaTestColor);
    expect(color.parse(red)).toEqual(red);
    expect(color.parse(hslaTestColor)).toEqual(hslaTestColor);
  });

  it('should correctly combine color value', () => {
    expect(color.transform(red)).toEqual('rgba(255, 0, 0, 1)');
    expect(color.transform(hslaTestColor)).toEqual('hsla(170, 50%, 45%, 1)');
  });

  it('should correctly identify color', () => {
    expect(color.test('#fff')).toBe(true);
    expect(color.test('#f0f0f0')).toBe(true);
    expect(color.test('rgb(233, 233, 1)')).toBe(true);
    expect(color.test('rgba(255, 255, 0, 1)')).toBe(true);
    expect(color.test('rgba(255,255,0,1)')).toBe(true);
    expect(color.test('rgba(255,255, 0,1)')).toBe(true);
    expect(color.test('hsl(0, 0%, 0%)')).toBe(true);
    expect(color.test('hsl(0, 0%,0%)')).toBe(true);
    expect(color.test('hsla(180, 360%, 360%, 0.5)')).toBe(true);
    expect(color.test('greensock')).toBe(false);
    expect(color.test('filter(190deg)')).toBe(false);
  });
});

describe('unit transformers', () => {
  it('should append the correct units', () => {
    expect(px.transform(10)).toBe('10px');
    expect(degrees.transform(360)).toBe('360deg');
    expect(percent.transform(100)).toBe('100%');
    expect(rgbUnit.transform(256)).toBe(255);
    expect(rgbUnit.transform(24.5)).toBe(25);
    expect(
      rgba.transform({
        red: 256,
        green: 24.5,
        blue: 0
      })
    ).toBe('rgba(255, 25, 0, 1)');
    expect(
      hsla.transform({
        hue: 100,
        saturation: 50,
        lightness: 50,
        alpha: 1
      })
    ).toBe('hsla(100, 50%, 50%, 1)');
    expect(alpha.transform(2)).toBe(1);
    expect(
      color.transform({
        red: 256,
        green: 24.5,
        blue: 0
      })
    ).toBe('rgba(255, 25, 0, 1)');
    expect(
      color.transform({
        hue: 100,
        saturation: 50,
        lightness: 50,
        alpha: 1
      })
    ).toBe('hsla(100, 50%, 50%, 1)');
  });
});

describe('space delimited', () => {
  it('should test correctly', () => {
    expect(combo.test('20px 20px 10px inset #fff')).toEqual(true);
    expect(combo.test('50px')).toEqual(false);
    expect(
      combo.test('20px 20px 10px inset rgba(255, 255, 255, 1), 20px')
    ).toEqual(true);
  });

  it('should parse into an array', () => {
    expect(combo.parse('20px 20px 10px inset #fff')).toEqual([
      20,
      20,
      10,
      { red: 255, green: 255, blue: 255, alpha: 1 }
    ]);
    expect(combo.parse('20px 20px 10px inset rgba(255, 255, 255, 1)')).toEqual([
      20,
      20,
      10,
      { red: 255, green: 255, blue: 255, alpha: 1 }
    ]);
    expect(
      combo.parse(
        '20px 20px 10px inset #fff, 20px 20px 10px inset rgba(255, 255, 255, 1)'
      )
    ).toEqual([
      20,
      20,
      10,
      { red: 255, green: 255, blue: 255, alpha: 1 },
      20,
      20,
      10,
      { red: 255, green: 255, blue: 255, alpha: 1 }
    ]);
  });

  it('should create a transformer', () => {
    const animatable = combo.parse(
      '20px 20px 10px inset rgba(255, 255, 255, 1), 20px 20px 10px inset #fff'
    );
    const transformer = combo.createTransformer(
      '20px 20px 10px inset #fff, 20px 20px 10px inset rgba(255, 255, 255, 1)'
    );

    expect(transformer(animatable)).toBe(
      '20px 20px 10px inset rgba(255, 255, 255, 1), 20px 20px 10px inset rgba(255, 255, 255, 1)'
    );
  });
});
