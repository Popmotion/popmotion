import { appendUnit, steps } from '../transformers';

describe('appendUnit()', () => {
  it('should return a function that appends a unit to provided numbers', () => {
    expect(appendUnit('px')(5)).toBe('5px');
  });
});

describe('steps()', () => {
  it('should return a function that correctly steps the value given to it across its range', () => {
    const threeStep = steps(3, 0, 100);
    expect(threeStep(1)).toBe(0);
    expect(threeStep(49)).toBe(50);
    expect(threeStep(75)).toBe(100);
  });

  it('should handle a range of length 0', () => {
    const threeStep = steps(3, 4, 4);
    expect(threeStep(0)).toBe(4);
    expect(threeStep(4)).toBe(4);
    expect(threeStep(8)).toBe(4);
  });
});
