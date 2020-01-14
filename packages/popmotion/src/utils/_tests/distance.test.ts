import distance from '../distance';

test('distance', () => {
  expect(distance(-100, 100)).toBe(200);
  expect(distance(100, -100)).toBe(200);
});

test('should return the correct distance between two 2D points', () => {
  expect(
    distance(
      {
        x: 0,
        y: 0
      },
      {
        x: 1,
        y: 1
      }
    )
  ).toBe(1.4142135623730951);
});

test('should return the correct distance between two 3D points', () => {
  expect(distance({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 10 })).toBe(10);
});
