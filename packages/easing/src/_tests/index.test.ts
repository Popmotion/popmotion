import { cubicBezier, linear } from '..';

describe('', () => {
  it('should return a series of correct, functioning easing functions', () => {
    expect(linear(0.5)).toBe(0.5);
    expect(cubicBezier(0, 0, 1, 1)(0)).toBe(0);
    expect(cubicBezier(0, 0, 1, 1)(0.5)).toBe(0.5);
    expect(cubicBezier(0.42, 0, 0.58, 1)(1)).toBe(1);
    expect(cubicBezier(0.22, 1.08, 0.41, 1.55)(0.5) > 1).toBe(true);
  });
});
