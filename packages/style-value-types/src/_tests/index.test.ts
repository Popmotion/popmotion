import {
  alpha,
  hex,
  rgba,
  rgbUnit,
  hsla,
  color,
  px,
  degrees,
  percent,
  progressPercentage,
  complex
} from '../';
import { singleColorRegex, colorRegex } from '../utils';

const PATH = 'M150 0 L75 200 L225 200 Z';
const GREYSCALE = 'greyscale(100%)';
const PATH_VALUES = [150, 0, 75, 200, 225, 200];
const MIXED = '0px 0px 0px rgba(161, 0, 246, 0)';

describe('regex', () => {
  it('should correctly identify values', () => {
    expect(singleColorRegex.test('#fff000')).toBe(true);
    expect(singleColorRegex.test('rgba(161, 0, 246, 0)')).toBe(true);
    expect(singleColorRegex.test('#fff000 #fff000')).toBe(false);
    expect(colorRegex.test('#fff000 #fff000')).toBe(true);
  });
});

describe('complex value type', () => {
  it('test returns correctly', () => {
    expect(complex.test(GREYSCALE)).toBe(true);
    expect(complex.test(PATH)).toBe(true);
    expect(complex.test(3)).toBe(false);
    expect(complex.test('3')).toBe(false);
    expect(complex.test('3px')).toBe(true);
    expect(complex.test(MIXED)).toBe(true);
  });

  it('parse converts string to array', () => {
    expect(complex.parse(PATH)).toEqual(PATH_VALUES);
    expect(complex.parse(GREYSCALE)).toEqual([100]);
    expect(complex.parse(MIXED)).toEqual([
      { red: 161, green: 0, blue: 246, alpha: 0 },
      0,
      0,
      0
    ]);
  });

  it('createTransformer returns a transformer function that correctly inserts values', () => {
    const transform = complex.createTransformer(PATH);
    expect(transform(PATH_VALUES)).toBe(PATH);

    const transformMixedExpo = complex.createTransformer(
      '0px 0px 0px rgba(161, 0, 246, 0)'
    );
    expect(
      transformMixedExpo([
        {
          red: 161,
          green: 0,
          blue: 246,
          alpha: 6.399999974426862e-10
        },
        0,
        1.5999999547489097e-8,
        3.199999909497819e-8
      ])
    ).toBe('0px 0px 0px rgba(161, 0, 246, 0)');

    const transformSingleFunction = complex.createTransformer(GREYSCALE);
    expect(transformSingleFunction([100])).toBe(GREYSCALE);
  });

  it('can create an animatable "none"', () => {
    expect(complex.getAnimatableNone('100% 0px #fff')).toBe(
      '0% 0px rgba(255, 255, 255, 1)'
    );
  });
});

const red = {
  red: 255,
  green: 0,
  blue: 0,
  alpha: 1
};

const redOutOfRange = {
  red: 300,
  green: 0,
  blue: 0,
  alpha: 2
};

const hslaTestColor = {
  hue: 170,
  saturation: 50,
  lightness: 45,
  alpha: 1
};

const hslaOutOfRange = {
  hue: 170,
  saturation: 50,
  lightness: 45,
  alpha: 2
};

describe('hex()', () => {
  it('should correctly test for colors', () => {
    expect(hex.test('#f00')).toEqual(true);
    expect(hex.test('#f00 0px')).toEqual(false);
  });

  it('should split a hex value into the correct params', () => {
    expect(hex.parse('#f00')).toEqual(red);
  });

  it('should correctly combine a hex value', () => {
    expect(hex.transform(red)).toBe('rgba(255, 0, 0, 1)');
  });
});

describe('rgba()', () => {
  it('should correctly test for colors', () => {
    expect(rgba.test('rgba(255, 0, 0, 0.5)')).toEqual(true);
    expect(rgba.test('rgba(255, 0, 0, 0.5) 0px')).toEqual(false);
    expect(rgba.test('45%')).toEqual(false);
  });

  it('should split an rgba value into the correct params', () => {
    expect(rgba.parse('rgba(255, 0, 0, 0.5)')).toEqual({ ...red, alpha: 0.5 });
    expect(rgba.parse('rgb(255,0,0)')).toEqual(red);
    expect(rgba.parse(red)).toEqual(red);
  });

  it('should correctly combine rgba value', () => {
    expect(rgba.transform(red)).toEqual('rgba(255, 0, 0, 1)');
    expect(rgba.transform(redOutOfRange)).toEqual('rgba(255, 0, 0, 1)');
  });
});

describe('hsla()', () => {
  it('should correctly test for colors', () => {
    expect(hsla.test('hsla(170, 50%, 45%, 1)')).toEqual(true);
    expect(hsla.test('hsla(170, 50%, 45%, 1) 0px')).toEqual(false);
  });

  it('should split an hsl value into the correct params', () => {
    expect(hsla.parse('hsla(170, 50%, 45%, 1)')).toEqual(hslaTestColor);
    expect(hsla.parse('hsl(170, 50%, 45%)')).toEqual(hslaTestColor);
    expect(hsla.parse(hslaTestColor)).toEqual(hslaTestColor);
  });

  it('should correctly combine hsla value', () => {
    expect(hsla.transform(hslaTestColor)).toEqual('hsla(170, 50%, 45%, 1)');
    expect(hsla.transform(hslaOutOfRange)).toEqual('hsla(170, 50%, 45%, 1)');
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
    expect(color.test('#e66465')).toBe(true);
    expect(color.test('#fff')).toBe(true);
    expect(color.test('#fff 0px')).toBe(false);
    expect(color.test('#f0f0f0')).toBe(true);
    expect(color.test('rgb(233, 233, 1)')).toBe(true);
    expect(color.test('rgb(0, 0, 0) 5px 5px 50px 0px')).toBe(false);
    expect(color.test('rgba(255, 255, 0, 1)')).toBe(true);
    expect(color.test('rgba(255,255,0,1)')).toBe(true);
    expect(color.test('rgba(255,255, 0,1)')).toBe(true);
    expect(color.test('hsl(0, 0%, 0%)')).toBe(true);
    expect(color.test('hsl(0, 0%,0%)')).toBe(true);
    expect(color.test('hsla(180, 360%, 360%, 0.5)')).toBe(true);
    expect(color.test('hsla(180, 360%, 360%, 0.5) 0px')).toBe(false);
    expect(color.test('greensock')).toBe(false);
    expect(color.test('filter(190deg)')).toBe(false);
  });
});

describe('unit transformers', () => {
  it('should correctly identify units', () => {
    expect(px.test(10)).toBe(false);
    expect(px.test('10px')).toBe(true);
    expect(px.test('blur(10px)')).toBe(false);
    expect(percent.test('10px')).toBe(false);
    expect(percent.test('10%')).toBe(true);
    expect(percent.test('blur(10%)')).toBe(false);
  });

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

describe('combination values', () => {
  it('should test correctly', () => {
    expect(complex.test('20px 20px 10px inset #fff')).toEqual(true);
    expect(
      complex.test('20px 20px 10px inset rgba(255, 255, 255, 1), 20px')
    ).toEqual(true);
    expect(
      complex.test('linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c')
    ).toEqual(true);
  });

  it('should parse into an array', () => {
    expect(complex.parse('20px 20px 10px inset #fff')).toEqual([
      { red: 255, green: 255, blue: 255, alpha: 1 },
      20,
      20,
      10
    ]);
    expect(
      complex.parse('20px 20px 10px inset rgba(255, 255, 255, 1)')
    ).toEqual([{ red: 255, green: 255, blue: 255, alpha: 1 }, 20, 20, 10]);
    expect(
      complex.parse(
        '20px 20px 10px inset #fff, 20px 20px 10px inset rgba(255, 255, 255, 1)'
      )
    ).toEqual([
      { red: 255, green: 255, blue: 255, alpha: 1 },
      { red: 255, green: 255, blue: 255, alpha: 1 },
      20,
      20,
      10,
      20,
      20,
      10
    ]);
    expect(complex.parse('linear-gradient(0.25turn, #fff)')).toEqual([
      {
        red: 255,
        green: 255,
        blue: 255,
        alpha: 1
      },
      0.25
    ]);
    expect(
      complex.parse('linear-gradient(1deg, rgba(255, 255, 255, 1))')
    ).toEqual([
      {
        red: 255,
        green: 255,
        blue: 255,
        alpha: 1
      },
      1
    ]);

    expect(
      complex.parse(
        'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%)'
      )
    ).toEqual([
      {
        red: 255,
        green: 0,
        blue: 0,
        alpha: 0.8
      },
      {
        red: 255,
        green: 0,
        blue: 0,
        alpha: 0
      },
      217,
      70.71
    ]);

    expect(
      complex.parse('radial-gradient(circle at 50% 25%, #e66465, #9198e5)')
    ).toEqual([
      { alpha: 1, blue: 101, green: 100, red: 230 },
      { alpha: 1, blue: 229, green: 152, red: 145 },
      50,
      25
    ]);
  });

  it('should create a transformer', () => {
    const animatable = complex.parse(
      '20px 20px 10px inset rgba(255, 255, 255, 1), 20px 20px 10px inset #fff'
    );
    const transformer = complex.createTransformer(
      '20px 20px 10px inset #fff, 20px 20px 10px inset rgba(255, 255, 255, 1)'
    );

    expect(transformer(animatable)).toBe(
      '20px 20px 10px inset rgba(255, 255, 255, 1), 20px 20px 10px inset rgba(255, 255, 255, 1)'
    );

    const gradient = complex.parse(
      'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%)'
    );
    const gradientTransformer = complex.createTransformer(
      'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%)'
    );
    expect(gradientTransformer(gradient)).toBe(
      'linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%)'
    );
  });
});

describe('progress value type', () => {
  it('should test correctly', () => {
    expect(progressPercentage.test('100%')).toBe(true);
    expect(progressPercentage.test('100px')).toBe(false);
  });
  it('should parse correctly', () => {
    expect(progressPercentage.parse('50%')).toBe(0.5);
    expect(progressPercentage.parse('0%')).toBe(0);
    expect(progressPercentage.parse('-200%')).toBe(-2);
  });
  it('should transform correctly', () => {
    expect(progressPercentage.transform(0.1)).toBe('10%');
    expect(progressPercentage.transform(1.5)).toBe('150%');
  });
});
