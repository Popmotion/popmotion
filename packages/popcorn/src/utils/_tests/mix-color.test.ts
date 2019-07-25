import mixColor, { mixLinearColor } from '../mix-color';

test('mixColor hex', () => {
  expect(mixColor('#fff', '#000')(0.5)).toBe('rgba(180, 180, 180, 1)');
});

test('mixColor rgba', () => {
  expect(mixColor('rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 1)')(0.5)).toBe(
    'rgba(180, 180, 180, 0.5)'
  );
});

test('mixColor rgba out of bounds', () => {
  expect(mixColor('rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 1)')(2)).toBe(
    'rgba(255, 255, 255, 1)'
  );
  expect(mixColor('rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 1)')(-1)).toBe(
    'rgba(0, 0, 0, 0)'
  );
});

test('mixColor rgb', () => {
  expect(mixColor('rgb(0, 0, 0)', 'rgba(255, 255, 255)')(0.5)).toBe(
    'rgba(180, 180, 180, 1)'
  );
});

test('mixColor rgb out of bounds', () => {
  expect(mixColor('rgb(0, 0, 0)', 'rgba(255, 255, 255)')(2)).toBe(
    'rgba(255, 255, 255, 1)'
  );
  expect(mixColor('rgb(0, 0, 0)', 'rgba(255, 255, 255)')(-1)).toBe(
    'rgba(0, 0, 0, 1)'
  );
});

test('mixColor hsla', () => {
  expect(mixColor('hsla(120, 0%, 0%, 0)', 'hsla(360, 100%, 50%, 1)')(0.5)).toBe(
    'hsla(240, 50%, 25%, 0.5)'
  );
});

test('mixColor hsla out of bounds', () => {
  expect(mixColor('hsla(120, 0%, 0%, 0)', 'hsla(360, 100%, 50%, 1)')(2)).toBe(
    'hsla(360, 100%, 50%, 1)'
  );
  expect(mixColor('hsla(120, 0%, 0%, 0)', 'hsla(360, 100%, 50%, 1)')(-1)).toBe(
    'hsla(120, 0%, 0%, 0)'
  );
});

test('mixColor hsl', () => {
  expect(mixColor('hsl(120, 0%, 0%)', 'hsl(360, 100%, 50%)')(0.5)).toBe(
    'hsla(240, 50%, 25%, 1)'
  );
});

test('mixColor hsl out of bounds', () => {
  expect(mixColor('hsl(120, 0%, 0%)', 'hsl(360, 100%, 50%)')(2)).toBe(
    'hsla(600, 200%, 100%, 1)'
  );
  expect(mixColor('hsl(120, 0%, 0%)', 'hsl(360, 100%, 50%)')(-1)).toBe(
    'hsla(600, 200%, 100%, 1)'
  );
});

test('mixColor rgb to hex', () => {
  expect(mixColor('rgb(255, 255, 255)', '#000')(0.5)).toBe(
    'rgba(180, 180, 180, 1)'
  );
});

test("doesn't return NaN", () => {
  expect(mixLinearColor(255, 0, 2)).not.toBeNaN();
});
