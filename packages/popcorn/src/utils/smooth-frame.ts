import toDecimal from './to-decimal';

/*
  Framerate-independent smoothing

  @param [number]: New value
  @param [number]: Old value
  @param [number]: Frame duration
  @param [number] (optional): Smoothing (0 is none)
*/
export default (
  newValue: number,
  oldValue: number,
  duration: number,
  smoothing: number = 0
) =>
  toDecimal(
    oldValue +
      (duration * (newValue - oldValue)) / Math.max(smoothing, duration)
  );
