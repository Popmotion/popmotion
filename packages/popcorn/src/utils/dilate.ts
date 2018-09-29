/*
  Dilate

  Change the progression between a and b according to dilation.

  So dilation = 0.5 would change

  a --------- b

  to

  a ---- b

  E.g. a = 10, b = 20, d = 0.5 => 15

  @param [number]: Previous value
  @param [number]: Current value
  @param [number]: Dilate progress by x
  @return [number]: Previous value plus the dilated difference
*/
export default (a: number, b: number, dilation: number) =>
  a + (b - a) * dilation;
