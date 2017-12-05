import {
  cubicBezier,
  linear
} from '../easing';
const b = require('cubic-bezier')

describe('', () => {
  it('should return a series of correct, functioning easing functions', () => {
    expect(linear(0.5)).toBe(0.5);
    expect(cubicBezier(0, 0, 1, 1)(0)).toBe(0);
    expect(cubicBezier(0, 0, 1, 1)(0.5)).toBe(0.5);
    expect(cubicBezier(.42, 0, .58, 1)(1)).toBe(1);
    console.log(cubicBezier(.06,.64,.72,1.42)(0.5))
    console.log(b(0.06,.64,.72,1.42,100000)(0.5))
    expect(cubicBezier(.22, 1.08, .41, 1.55)(0.5) > 1).toBe(true);
  });
});
