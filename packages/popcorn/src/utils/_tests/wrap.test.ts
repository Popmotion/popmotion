import wrap from '../wrap';

test('wrap', () => {
  const wrapAround = wrap(-100, 100);

  expect(wrapAround(-100)).toBe(-100);
  expect(wrapAround(0)).toBe(0);
  expect(wrapAround(-200)).toBe(0);
  expect(wrapAround(101)).toBe(-99);
});
