import chai from 'chai';

// Value types
import alpha from '../src/value/types/alpha';
import degrees from '../src/value/types/degrees';
import hex from '../src/value/types/hex';
import hsla from '../src/value/types/hsla';
import number from '../src/value/types/number';
import percent from '../src/value/types/percent';
import px from '../src/value/types/px';
import rgba from '../src/value/types/rgba';
import rgbColor from '../src/value/types/rgb-color';

// Utils
import contains from '../src/value/utils/contains';
import isFirstChar from '../src/value/utils/is-first-char';

const { expect } = chai;

const RED_RGBA = {
  Red: 255,
  Green: 0,
  Blue: 0,
  Alpha: 1
};
const BLACK_RGBA = {
  Red: 0,
  Green: 0,
  Blue: 0,
  Alpha: 1
};

describe('alpha', () => {
  it('.output should return a value between 0 and 1', () => {
    expect(alpha.output(-1)).to.equal(0);
    expect(alpha.output(0.5)).to.equal(0.5);
    expect(alpha.output(1.5)).to.equal(1);
  });
});

describe('degrees', () => {
  it('.test should correctly return `true` for units in degrees', () => {
    expect(degrees.test('20px')).to.equal(false);
    expect(degrees.test('20deg')).to.equal(true);
  });

  it('.parse should take a degrees value and return a float', () => {
    expect(degrees.parse('20.5deg')).to.equal(20.5);
  });

  it('.output should return a value that ends with "deg"', () => {
    expect(degrees.output(-10)).to.equal('-10deg');
    expect(degrees.output(50)).to.equal('50deg');
  });
});

describe('hex', () => {
  it('.test should correctly return `true` for hex values', () => {
    expect(hex.test('#f00')).to.equal(true);
    expect(hex.test('#000000')).to.equal(true);
    expect(hex.test('rgb(0,0,0)')).to.equal(false);
  });

  it('.parse should correctly split values into rgba values', () => {
    expect(hex.parse('#f00')).to.deep.equal(RED_RGBA);
    expect(hex.parse('#000000')).to.deep.equal(BLACK_RGBA);
  });

  it('.output', () => {
    expect(hex.output(RED_RGBA)).to.equal('rgba(255, 0, 0, 1)');
    expect(hex.output(BLACK_RGBA)).to.equal('rgba(0, 0, 0, 1)')
  });
});

describe('hsla', () => {
  it('.test', () => {
    expect(hsla.test('hsl(360, 100)')).to.equal(true);
    expect(hsla.test('hsla()')).to.equal(true);
    expect(hsla.test('rgb(0,0,0)')).to.equal(false);
  });

  it('.parse', () => {
    expect(hsla.parse('hsla(100, 90%, 0%, 0.5)')).to.deep.equal({
      Hue: 100,
      Saturation: 90,
      Lightness: 0,
      Alpha: 0.5
    });
    expect(hsla.parse('hsl(360, 90%, 0%)')).to.deep.equal({
      Hue: 360,
      Saturation: 90,
      Lightness: 0,
      Alpha: 1
    });
  });

  it('.output', () => {
    expect(hsla.output({
      Hue: 100,
      Saturation: '90%',
      Lightness: '0%',
      Alpha: 1
    })).to.equal('hsla(100, 90%, 0%, 1)');
  });
});

describe('number', () => {
  it('.test should correctly return `true` for raw numbers', () => {
    expect(number.test(0)).to.equal(true);
    expect(number.test(100)).to.equal(true);
    expect(number.test('100')).to.equal(false);
  });
});

describe('percent', () => {
  it('.test should correctly return `true` for units in percent', () => {
    expect(percent.test('20px')).to.equal(false);
    expect(percent.test('20%')).to.equal(true);
  });

  it('.parse should take a percent value and return a float', () => {
    expect(percent.parse('20.5%')).to.equal(20.5);
  });

  it('.output should return a value that ends with "%"', () => {
    expect(percent.output(-10)).to.equal('-10%');
    expect(percent.output(50)).to.equal('50%');
  });
});

describe('px', () => {
  it('.test should correctly return `true` for units in px', () => {
    expect(px.test('20%')).to.equal(false);
    expect(px.test('20px')).to.equal(true);
  });

  it('.parse should take a px value and return a float', () => {
    expect(px.parse('20.5px')).to.equal(20.5);
  });

  it('.output should return a value that ends with "px"', () => {
    expect(px.output(-10)).to.equal('-10px');
    expect(px.output(50)).to.equal('50px');
  });
});

describe('rgba', () => {
  const RED = 'rgba(255, 0, 0, 1)';
  const BLACK = 'rgba(0, 0, 0, 1)';

  it('.test should correctly return `true` for rgb and rgba values', () => {
    expect(rgba.test('rgb(0,0,0)')).to.equal(true);
    expect(rgba.test('rgba(0,0,0,0)')).to.equal(true);
    expect(rgba.test('hsl(0,0,0)')).to.equal(false);
  });

  it('.parse should correctly split values into rgba values', () => {
    expect(rgba.parse(RED)).to.deep.equal(RED_RGBA);
    expect(rgba.parse(BLACK)).to.deep.equal(BLACK_RGBA);
  });

  it('.output', () => {
    expect(rgba.output(RED_RGBA)).to.equal(RED);
    expect(rgba.output(BLACK_RGBA)).to.equal(BLACK);
    expect(rgba.output({Red: 0, Green: 255, Blue: 125, Alpha: .3})).to.deep.equal('rgba(0, 255, 125, 0.3)');
  });
});

describe('rgbColor', () => {
  it('.output should return a rounded value between 0 and 255', () => {
    expect(rgbColor.output(-1)).to.equal(0);
    expect(rgbColor.output(255.1)).to.equal(255);
    expect(rgbColor.output(100.5)).to.equal(101);
  });
});

describe('isFirstChar', () => {
  it('should return true if first chars are x', () => {
    expect(isFirstChar('hsl')('hsla(0,0,0,0)')).to.equal(true);
    expect(isFirstChar('rgb')('rgba(0,0,0,0)')).to.equal(true);
  });

  it('should return false if value if first chars are not', () => {
    expect(isFirstChar('rgb')('a(0,0,0,0)')).to.equal(false);
  });
});

describe('contains', () => {
  it('should return true if value contains x', () => {
    expect(contains('px')('20px')).to.equal(true);
    expect(contains('%')('200%')).to.equal(true);
  });

  it('should return false if value contains are not', () => {
    expect(contains('px')('20')).to.equal(false);
    expect(contains('px')(20)).to.equal(false);
  });
});
