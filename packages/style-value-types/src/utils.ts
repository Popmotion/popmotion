export const clamp = (min: number, max: number) => (v: number) =>
  Math.max(Math.min(v, max), min);

/**
 *  Returns a function that will check any argument for `term`
 * `contains('needle')('haystack')`
 */
export const contains = (term: string) => (v: string) =>
  typeof v === 'string' && v.indexOf(term) !== -1;

/**
 *  Returns a function that will check to see if an argument is
 *  the first characters in the provided `term`
 * `isFirstChars('needle')('haystack')`
 */
export const isFirstChars = (term: string) => (v: string) =>
  typeof v === 'string' && v.indexOf(term) === 0;

/*
  Get value from function string
  "translateX(20px)" -> "20px"
*/
export const getValueFromFunctionString = (value: string) =>
  value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));

/*
  Split comma-delimited string

  "foo,bar" -> ["foo", "bar"]
*/
export const splitCommaDelimited = (value: string) =>
  typeof value === 'string' ? value.split(/,\s*/) : [value];
