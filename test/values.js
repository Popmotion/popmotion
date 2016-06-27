import chai from 'chai';
import alpha from '../src/values/alpha';
import degrees from '../src/values/degrees';
import percent from '../src/values/percent';
import px from '../src/values/px';
import rgb from '../src/values/rgb';

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

describe('rgb', () => {
  it('.output should return a rounded value between 0 and 255', () => {
    expect(rgb.output(-1)).to.equal(0);
    expect(rgb.output(255.1)).to.equal(255);
    expect(rgb.output(100.5)).to.equal(101);
  });
});
