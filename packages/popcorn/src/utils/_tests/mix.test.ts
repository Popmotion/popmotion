import mix from '../mix';

test('mix', () => {
  expect(mix(0, 1, 0.5)).toBe(0.5);
  expect(mix(-100, 100, 2)).toBe(200);
});
