import snap from '../snap';

it('should snap a number to the nearest in the provided array', () => {
  const snapTo = snap([-100, -50, 100, 200]);

  expect(snapTo(-200)).toBe(-100);
  expect(snapTo(-100)).toBe(-100);
  expect(snapTo(-76)).toBe(-100);
  expect(snapTo(-74)).toBe(-50);
  expect(snapTo(0)).toBe(-50);
  expect(snapTo(99)).toBe(100);
  expect(snapTo(150)).toBe(200);
  expect(snapTo(300)).toBe(200);
});

it('should snap a number to a regular interval', () => {
  const snapTo = snap(45);

  expect(snapTo(1)).toBe(0);
  expect(snapTo(44)).toBe(45);
  expect(snapTo(89)).toBe(90);
  expect(snapTo(-44)).toBe(-45);
});
