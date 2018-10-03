import degreesToRadians from '../degrees-to-radians';

test('degreesToRadians', () => {
  expect(degreesToRadians(45)).toBe(0.7853981633974483);
});
