import velocityPerSecond from '../velocity-per-second';

test('velocityPerSecond', () => {
  expect(velocityPerSecond(0.835, 16.7)).toBe(50);
});
