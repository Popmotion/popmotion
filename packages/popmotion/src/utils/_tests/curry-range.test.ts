import curryRange from '../curry-range';

test('curryRange', () => {
  const rangeFunc = (min: number, max: number, v: number) => {
    return v + min + max;
  };

  const curriedRangeFunc = curryRange(rangeFunc);

  expect(curriedRangeFunc(1, 2)(3)).toBe(6);
  expect(curriedRangeFunc(1, 2, 3)).toBe(6);
});
