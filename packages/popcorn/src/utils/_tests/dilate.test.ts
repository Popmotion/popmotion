import dilate from '../dilate';

test('dilate', () => {
  expect(dilate(10, 20, 0.5)).toBe(15);
  expect(dilate(-10, -20, 0.5)).toBe(-15);
  expect(dilate(0, 80, .5)).toBe(40);
  expect(dilate(100, 200, 2)).toBe(300);
});
