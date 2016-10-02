import { splitCommaDelimited, getValueFromFunctionString, isString } from '../inc/utils';
import { appendUnit } from './transformers';

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
export const isFirstChars = (term) => (v) => {
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
  };
};

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

/*
  Split a value into a value/unit object
  
    "200px" -> { value: 200, unit: "px" }
    
  @param [string]: Value to split
  @return [object]: Object with value and unit props
*/
export const findValueAndUnit = (value) => {
  if (value.match) {
    const splitValue = value.match(/(-?\d*\.?\d*)(.*)/);

    return {
      value: parseFloat(splitValue[1]),
      unit:  splitValue[2]
    };
  } else {
    return { value };
  }
};

/*
  Split color string into map of color properties

  "rgba(255, 255, 255, 0)", ["Red", 'Green", "Blue", "Alpha"]

  { Red: 255... }
*/
export const getColorValues = (value, colorTerms) => {
  const numColorTerms = colorTerms.length;
  const colorValues = {};
  const colors = splitCommaDelimited(getValueFromFunctionString(value));

  for (let i = 0; i < numColorTerms; i++) {
    colorValues[colorTerms[i]] = (colors[i] !== undefined) ? colors[i] : 1;
  }

  return colorValues;
};

/*
  Get value from function string

  "translateX(20px)" -> "20px"
*/
// export const getValueFromFunctionString = (value) => value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));


export const createDelimited = (values, terms, delimiter, chop) => {
  const numTerms = terms.length;
  let combined = '';

  for (let i = 0; i < numTerms; i++) {
    const term = terms[i];
    if (values.hasOwnProperty(term)) {
      combined += values[term] + delimiter;
    }
  }

  if (chop) {
    combined = combined.slice(0, -chop);
  }

  return combined;
};
