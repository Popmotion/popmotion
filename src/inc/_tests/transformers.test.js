import {
  appendUnit,
  clamp,
  clampMax,
  clampMin,
  flow,
  interpolate
} from '../transformers';

describe('appendUnit()', () => {
  it('should return a function that appends a unit to provided numbers', () => {
    expect(appendUnit('px')(5)).toBe('5px');
  });
});

describe('clamp()', () => {
  it('should return a function that clamps numbers to within the provided range', () => {
    const clamper = clamp(0, 1);
    expect(clamper(-1)).toBe(0);
    expect(clamper(0.5)).toBe(0.5);
  });
});

describe('clampMax()', () => {
  it('should return a function that clamps numbers to under the provided value', () => {
    const clamper = clampMax(1);
    expect(clamper(0.5)).toBe(0.5);
    expect(clamper(2)).toBe(1);
  });
});

describe('clampMin()', () => {
  it('should return a function that clamps numbers to over the provided value', () => {
    const clamper = clampMin(0);
    expect(clamper(1)).toBe(1);
    expect(clamper(-1)).toBe(0);
  });
});

describe('flow', () => {
  it(
    `should return a function that will pass all arguments to all functions in
    order, with the first argument being replaced with the returned value
    of the previous function`,
    () => {
      const func = flow(
        (v, a) => v * a,
        (v, a) => v + a
      );

      expect(func(5, 2)).toBe(12);
    }
  );
});

describe('interpolate()', () => {
  it(
    `should create a function that interpolates between one range
    of numbers to another`,
    () => {
      const simpleInterpolator = interpolate([0, 1000], [500, 600]);
      expect(simpleInterpolator(500)).toBe(550);

      const complexInterpolator = interpolate(
        [0, 100, 200],
        [1000, 500, 1000]
      );
      expect(complexInterpolator(100)).toBe(500);
    }
  );

  it('should optionally accept an easing function', () => {

  });
});

describe('steps()', () => {

});
