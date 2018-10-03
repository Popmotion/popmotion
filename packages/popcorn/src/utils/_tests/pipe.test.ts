import pipe from '../pipe';

test('pipe', () => {
  const func = pipe(
    (v: number) => v * 2,
    (v: number) => v + 1,
    (v: number) => -v
  );
  expect(func(2)).toBe(-5);
});
