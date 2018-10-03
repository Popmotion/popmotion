import toDecimal from '../to-decimal';

test('toDecimal', () => {
  expect(toDecimal(3.33333)).toBe(3.33);
  expect(toDecimal(3.3)).toBe(3.3);
  expect(toDecimal(6.66666, 3)).toBe(6.667);
});
