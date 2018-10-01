import conditional from '../conditional';

test('conditional', () => {
  const conditionallyDouble = conditional(v => v > 5, v => v * 2);

  expect(conditionallyDouble(4)).toBe(4);
  expect(conditionallyDouble(6)).toBe(12);
});
