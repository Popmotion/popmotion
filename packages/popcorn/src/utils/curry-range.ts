export type RangeFunction = (min: number, max: number, v: number) => any;

export default (func: RangeFunction) => (
  min: number,
  max: number,
  v?: number
) => (v !== undefined ? func(min, max, v) : (cv: number) => func(min, max, cv));
