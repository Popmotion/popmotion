import { hasChanged } from '../utils';

test('Correctly detects if a pose has changed', () => {
  const a = 'a';
  const b = 'b';
  const aArr = ['a'];
  const aArr2 = ['a'];
  const bArr = ['a', 'b'];
  const bArr2 = ['a', 'b'];
  const cArr = ['a', 'c'];

  // Hasn't changed
  expect(hasChanged(a, a)).toBe(false);
  expect(hasChanged(aArr, aArr)).toBe(false);
  expect(hasChanged(aArr, aArr2)).toBe(false);
  expect(hasChanged(bArr, bArr2)).toBe(false);

  // Has changed
  expect(hasChanged(a, b)).toBe(true);
  expect(hasChanged(aArr, bArr)).toBe(true);
  expect(hasChanged(bArr, cArr)).toBe(true);
});
