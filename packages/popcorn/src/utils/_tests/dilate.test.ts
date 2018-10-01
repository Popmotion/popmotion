import dilate from '../dilate';

test('dilate', () => {
  expect(dilate(10, 20, 0.5)).toBe(15);
  expect(dilate(-10, -20, 0.5)).toBe(-15);
});
