import {
  appendUnit,
  applyOffset,
  bezier,
  clamp,
  clampMax,
  clampMin,
  interpolate,
  pipe,
  snap,
  steps,
  wrap
} from '../transformers';

describe('appendUnit()', () => {
  it('should return a function that appends a unit to provided numbers', () => {
    expect(appendUnit('px')(5)).toBe('5px');
  });
});

describe('applyOffset()', () => {
  it('should return a function that applies the offset from `from` and apply it to `to`', () => {
    expect(applyOffset(0, 10)(20)).toBe(30);
  });
  it('should use the first provided argument as a `from` if only one arg is initially provided', () => {
    const t = applyOffset(20);
    t(10);
    expect(t(11)).toBe(21);
  });
});

describe('bezier()', () => {
  it('should return a function that resolves the provided bezier points with either 3 or 4 points', () => {
    const resolveBezier3 = bezier(0, 1, 2);
    expect(resolveBezier3(0)).toBe(0);
    expect(resolveBezier3(0.5)).toBe(1);
    expect(resolveBezier3(1)).toBe(2);

    const resolveBezier4 = bezier(0, 1, 2, 3);
    expect(resolveBezier4(0)).toBe(0);
    expect(resolveBezier4(0.5)).toBe(1.5);
    expect(resolveBezier4(1)).toBe(3);
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

describe('pipe', () => {
  it(
    `should return a function that will pass all arguments to all functions in
    order, with the first argument being replaced with the returned value
    of the previous function`,
    () => {
      const double = (v) => v * 2;
      const divideByTen = (v) => v / 10;

      const func = pipe(double, divideByTen);

      expect(func(10)).toBe(2);
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
      expect(simpleInterpolator(0)).toBe(500);

      const complexInterpolator = interpolate(
        [0, 100, 200],
        [1000, 500, 1000]
      );
      expect(complexInterpolator(100)).toBe(500);

      const simpleInterpolatorR = interpolate([1000, 0], [500, 600]);
      expect(simpleInterpolatorR(500)).toBe(550);
      expect(simpleInterpolatorR(1000)).toBe(500);
      expect(simpleInterpolatorR(0)).toBe(600);

      const complexInterpolatorR = interpolate(
        [0, 100, 200],
        [1000, 500, 1000]
      );
      expect(complexInterpolatorR(100)).toBe(500);
      expect(complexInterpolatorR(0)).toBe(1000);
      expect(complexInterpolatorR(200)).toBe(1000);
    }
  );
});

describe('steps()', () => {
  it('should return a function that correctly steps the value given to it across its range', () => {
    const threeStep = steps(3, 0, 100);
    expect(threeStep(1)).toBe(0);
    expect(threeStep(49)).toBe(50);
    expect(threeStep(75)).toBe(100);
  });
});

describe('snap()', () => {
  it('should snap a number to the nearest in the provided array', () => {
    const snapTo = snap([-100, -50, 100, 200]);

    expect(snapTo(-200)).toBe(-100);
    expect(snapTo(-100)).toBe(-100);
    expect(snapTo(-76)).toBe(-100);
    expect(snapTo(-74)).toBe(-50);
    expect(snapTo(0)).toBe(-50);
    expect(snapTo(99)).toBe(100);
    expect(snapTo(150)).toBe(200);
    expect(snapTo(300)).toBe(200);
  });

  it('should snap a number to a regular interval', () => {
    const snapTo = snap(45);

    expect(snapTo(1)).toBe(0);
    expect(snapTo(44)).toBe(45);
    expect(snapTo(89)).toBe(90);
    expect(snapTo(-44)).toBe(-45);
  });
});

describe('wrap()', () => {
  it('should wrap numbers back around to the start of provided range', () => {
    const wrapAround = wrap(-100, 100);

    expect(wrapAround(-100)).toBe(-100);
    expect(wrapAround(0)).toBe(0);
    expect(wrapAround(-200)).toBe(0);
    expect(wrapAround(101)).toBe(-99);
  });
});
