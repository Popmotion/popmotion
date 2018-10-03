/**
 * Conditionally apply a transformer using the provided function when `check` returns `true`
 */
export type Check = (v: any) => boolean;
export type Apply = (v: any) => any;
export default (check: Check, apply: Apply) => (v: any): any =>
  check(v) ? apply(v) : v;
