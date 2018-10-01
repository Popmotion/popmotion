import interpolate from '../interpolate';

const invert = (v: number) => -v;

test('interpolate numbers', () => {
  const a = interpolate([-100, 100, 200], [0, 100, 0]);

  expect(a(-200)).toBe(0);
  expect(a(0)).toBe(50);
  expect(a(201)).toBe(0);

  const aInverted = interpolate(
    [-100, 100, 200],
    [0, 100, 0],
    [invert, invert]
  );

  expect(aInverted(0)).toBe(-50);
});

test('interpolate complex strings', () => {
  const a = interpolate(
    [0, 1, 2],
    [
      '20px, rgba(0, 0, 0, 0)',
      '10px, rgba(255, 255, 255, 1)',
      '40px, rgba(100, 100, 100, 0.5)'
    ]
  );

  expect(a(0)).toBe('20px, rgba(0, 0, 0, 0)');
  expect(a(1.5)).toBe('');
});

test('interpolate colors', () => {
  const a = interpolate([0, 1], ['#000', '#fff']);
  expect(a(0.5)).toBe('rgba(128, 128, 128, 1)');
});
