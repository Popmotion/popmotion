import isPoint from '../is-point';

test('isPoint', () => {
  expect(isPoint(9)).toBe(false);
  expect(isPoint({ x: 0, y: 0 })).toBe(true);
  expect(isPoint({ x: 0, y: 0, z: 0 })).toBe(true);
  expect(isPoint({ z: 0 })).toBe(false);
});
