import mixArray from '../mix-array';

test('mixArray', () => {
  const a = [0, 100, '#fff'];
  const b = [50, 200, '#000'];

  const blender = mixArray(a, b);

  expect(blender(0)).toEqual([
    0,
    100,
    {
      red: 255,
      green: 255,
      blue: 255,
      alpha: 1
    }
  ]);
  expect(blender(1)).toEqual([
    50,
    200,
    {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 1
    }
  ]);
  expect(blender(0.5)).toEqual([
    25,
    150,
    {
      red: 128,
      green: 128,
      blue: 128,
      alpha: 1
    }
  ]);
});
