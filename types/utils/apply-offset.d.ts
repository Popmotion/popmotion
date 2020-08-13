/**
 * Apply offset
 * A function that, given a value, will get the offset from `from`
 * and apply it to `to`
 * @param  {number} from
 * @param  {number} to
 * @return {function}
 */
export declare const applyOffset: (
  from: number,
  to?: number | undefined
) => (v: number) => number | undefined;
