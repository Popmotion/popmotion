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

test('interpolate - negative', () => {
  const a = interpolate([-500, 500], [0, 1]);
  expect(a(-250)).toBe(0.25);
});

test('interpolate - out of range', () => {
  const a = interpolate([0, 100], [200, 100]);
  expect(a(50)).toBe(150);
  expect(a(150)).toBe(50);
  expect(a(0)).toBe(200);
  expect(a(-100)).toBe(300);
});

test('interpolate - complex', () => {
  const a = interpolate([0, 100, 200], [1000, 500, 1000]);
  expect(a(100)).toBe(500);
});

test('interpolate - reverse', () => {
  const a = interpolate([1000, 0], [500, 600]);
  expect(a(500)).toBe(550);
  expect(a(1000)).toBe(500);
  expect(a(0)).toBe(600);
});

test('interpolate - reverse complex', () => {
  const a = interpolate([0, 100, 200], [1000, 500, 1000]);
  expect(a(100)).toBe(500);
  expect(a(0)).toBe(1000);
  expect(a(200)).toBe(1000);
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
  expect(a(1.5)).toBe('25px, rgba(194, 194, 194, 0.75)');
});

test('interpolate colors', () => {
  const a = interpolate([0, 1], ['#000', '#fff']);
  expect(a(0.5)).toBe('rgba(180, 180, 180, 1)');
});
