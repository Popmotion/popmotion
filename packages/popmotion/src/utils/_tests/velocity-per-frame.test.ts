import { velocityPerFrame } from '../velocity-per-frame';

test('velocityPerFrame', () => {
  expect(velocityPerFrame(50, 16.7)).toBe(0.835);
});
