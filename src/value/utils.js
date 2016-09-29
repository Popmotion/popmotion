import { splitCommaDelimited, getValueFromFunctionString, isString } from '../../inc/utils';
import appendUnit from '../../transformers/append-unit';

/**
 *  Returns a function that will check any argument for `term`
 * `contains('needle')('haystack')`
 */
export const contains = (term) => (v) => {
  return (isString(term) && v.indexOf(term) !== -1)
};

/**
 *  Returns a function that will check to see if an argument is
 *  the first characters in the provided `term`
 * `isFirstChars('needle')('haystack')`
 */
export const isFirstChars (term) => (v) => {
  return (isString(term) && v.indexOf(term) === 0);
};

/**
 * Create a unit value type
 */
export const createUnitType = (type) => {
  return {
    test: contains(type),
    parse: parseFloat,
    output: appendUnit(type)
  }
});

/**
 * Creates a function that will split color
 * values from string into an object of properties
 * `splitColorValues(['Red', 'Green', 'Blue'])('rgba(0,0,0)')`
 */
export function splitColorValues(terms) {
  const numTerms = terms.length;

  return function (v) {
    const values = {};
    const valuesArray = splitCommaDelimited(getValueFromFunctionString(v));

    for (let i = 0; i < numTerms; i++) {
      values[terms[i]] = (valuesArray[i] !== undefined) ? parseFloat(valuesArray[i]) : 1;
    }

    return values;
  }
}
