import { mixComplex } from '../mix-complex';

test('mixComplex', () => {
  expect(mixComplex('20px', '10px')(0.5)).toBe('15px');
  expect(
    mixComplex('20px, rgba(0, 0, 0, 0)', '10px, rgba(255, 255, 255, 1)')(0.5)
  ).toBe('15px, rgba(180, 180, 180, 0.5)');
});
