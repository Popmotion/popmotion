import smoothFrame from '../smooth-frame';

test('smoothFrame', () => {
  expect(smoothFrame(0, 100, 16.7, 0)).toBe(100);
  expect(smoothFrame(0, 100, 16.7, 50)).toBe(33.4);
});
