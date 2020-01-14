/**
 * Apply offset
 * A function that, given a value, will get the offset from `from`
 * and apply it to `to`
 * @param  {number} from
 * @param  {number} to
 * @return {function}
 */
export const applyOffset = (from: number, to?: number) => {
  let hasReceivedFrom = true;
  if (to === undefined) {
    to = from;
    hasReceivedFrom = false;
  }

  return (v: number) => {
    if (hasReceivedFrom) {
      return v - from + to;
    } else {
      from = v;
      hasReceivedFrom = true;
      return to;
    }
  };
};
