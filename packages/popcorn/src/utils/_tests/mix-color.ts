import mixColor from '../mix-color';

test('mixColor hex', () => {
  expect(mixColor('#fff', '#000')(0.5)).toBe('rgba(128, 128, 128, 0)');
});

test('mixColor rgba', () => {
  expect(mixColor('rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 1)')(0.5)).toBe(
    'rgba(128, 128, 128, 0.5)'
  );
});

test('mixColor hex', () => {
  expect(mixColor('hsla(120, 0%, 0%, 0)', 'hsla(360, 100%, 50%, 1)')).toBe(
    'hsla(240, 50%, 25%, 0.5)'
  );
});
