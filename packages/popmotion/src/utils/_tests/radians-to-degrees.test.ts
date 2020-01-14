import radiansToDegrees from '../radians-to-degrees';

test('radiansToDegrees', () => {
  expect(radiansToDegrees(0.7853981633974483)).toBe(45);
});
