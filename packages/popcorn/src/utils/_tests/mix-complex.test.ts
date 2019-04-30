import { mixComplex } from '../mix-complex';

test('mixComplex', () => {
  expect(mixComplex('20px', '10px')(0.5)).toBe('15px');
  expect(
    mixComplex('20px, rgba(0, 0, 0, 0)', '10px, rgba(255, 255, 255, 1)')(0.5)
  ).toBe('15px, rgba(180, 180, 180, 0.5)');
});

test('mixComplex errors', () => {
  expect(() => mixComplex('20%', '10px')).toThrowError();
  expect(() => mixComplex('hsla(100%, 100, 100, 1)', '#fff')).toThrowError();
});

// TODO: Probably best to implement cross-fills in `complex.createTemplate`
// test('mixComplex cross-fills unit types when either has zeros', () => {
//   expect(mixComplex('20px', '0')(0.5)).toBe('10px');
//   expect(mixComplex('0', '20px')(0.5)).toBe('10px');
// });
