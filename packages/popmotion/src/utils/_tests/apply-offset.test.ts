import applyOffset from '../apply-offset';

test('applyOffset', () => {
  const withInitialOffset = applyOffset(10, 20);
  expect(withInitialOffset(15)).toBe(25);

  const withoutInitialOffset = applyOffset(20);
  expect(withoutInitialOffset(10)).toBe(20);
  expect(withoutInitialOffset(15)).toBe(25);
});
