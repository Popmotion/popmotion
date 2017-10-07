import {
  angle,
  degreesToRadians,
  dilate,
  distance,
  getProgressFromValue,
  getValueFromProgress,
  pointFromAngleAndDistance,
  radiansToDegrees,
  smooth,
  stepProgress
} from '../calc';

const a = {
  x: 0,
  y: 0
};

const b = {
  x: 1,
  y: 1
};

describe('angle()', () => {
  it('should return the correct angle between two points', () => {
    expect(angle(a, a)).toBe(0);
    expect(angle(a, b)).toBe(45);
  });

  it('should assume a second point of 0,0', () => {
    expect(angle(b)).toBe(-135);
  });
});

describe('degreesToRadians()', () => {
  it('should correctly convert degrees to radians', () => {
    expect(degreesToRadians(45)).toBe(0.7853981633974483);
  });
});

describe('dilate()', () => {
  it('should return the difference between a and b as factored by dilation', () => {
    expect(dilate(0, 80, .5)).toBe(40);
    expect(dilate(100, 200, 2)).toBe(300);
  });
});

describe('distance()', () => {
  it('should return the correct distance between two 1D points', () => {
    expect(distance(-100, 100)).toBe(200);
  });

  it('should return the correct distance between two 2D points', () => {
    expect(distance(a, b)).toBe(1.4142135623730951);
  });

  it('should return the correct distance between two 3D points', () => {
    expect(distance({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 10 })).toBe(10);
  });
});

describe('getProgressFromValue()', () => {
  it('should return, as a number representing 0 as the lower limit and 1 as the upper limit, a progress of a value between given limits', () => {
    expect(getProgressFromValue(0, 100, 50)).toBe(.5);
    expect(getProgressFromValue(100, 200, 50)).toBe(-0.5);
  });
});

describe('getValueFromProgress()', () => {
  it('should return correct value has calculated from progress 0-1 and range', () => {
    expect(getValueFromProgress(100, 200, 0.5)).toBe(150);
    expect(getValueFromProgress(100, 200, -1)).toBe(0);
  });
});

describe('pointFromAngleAndDistance()', () => {
  it('should return the correct point, as described by the provided origin point, angle in degrees, and distance', () => {
    expect(pointFromAngleAndDistance(a, 45, 100)).toEqual({
      x: 70.71067811865476,
      y: 70.71067811865474
    });
  });
});

describe('radiansToDegrees()', () => {
  it('should correctly convert degrees into radians', () => {
    expect(radiansToDegrees(0.7853981633974483)).toBe(45);
  });
});

describe('smooth()', () => {
  it('should return value if smoothing is equal or less than frame duration', () => {
    expect(smooth(100, 0, 16.7, 0)).toBe(100);
  });
});

describe('stepProgress', () => {
  it('should return a progress 0 - 1 to the fixed number of steps provided', () => {
    expect(stepProgress(3, .5)).toBe(.5);
    expect(stepProgress(3, .4)).toBe(.5);
    expect(stepProgress(3, .9)).toBe(1);
    expect(stepProgress(3, .1)).toBe(0);
  });
});
