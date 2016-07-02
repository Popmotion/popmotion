import chai from 'chai';
import alpha from '../src/values/alpha';
import degrees from '../src/values/degrees';
import hex from '../src/values/hex';
import percent from '../src/values/percent';
import px from '../src/values/px';
import rgba from '../src/values/rgba';
import rgbColor from '../src/values/rgb-color';

// Utils
import contains from '../src/values/utils/contains';

const { expect } = chai;

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
  it('.test should correctly return `true` for rgb and rgba values', () => {
    expect(rgba.test('rgb(0,0,0)')).to.equal(true);
    expect(rgba.test('rgba(0,0,0,0)')).to.equal(true);
    expect(rgba.test('hsl(0,0,0)')).to.equal(false);
  });
});

describe('rgbColor', () => {
  it('.output should return a rounded value between 0 and 255', () => {
    expect(rgbColor.output(-1)).to.equal(0);
    expect(rgbColor.output(255.1)).to.equal(255);
    expect(rgbColor.output(100.5)).to.equal(101);
  });
});

describe('contains', () => {
  it('should return true if value contains term', () => {
    expect(contains('hsl')('hsla(0,0,0,0)')).to.equal(true);
    expect(contains('rgb')('rgba(0,0,0,0)')).to.equal(true);
  });

  it('should return false if value does not contain term', () => {
    expect(contains('rgb')('a(0,0,0,0)')).to.equal(false);
  });
});
