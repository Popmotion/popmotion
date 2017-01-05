const CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
const REPLACE_TEMPLATE = '$1-$2';
const HAS_PERFORMANCE_NOW = (typeof performance !== 'undefined' && performance.now);

/*
  Get var type as string
  
  @param: Variable to test
  @return [string]: Returns, for instance 'Object' if [object Object]
*/
const varType = (variable) => Object.prototype.toString.call(variable).slice(8, -1);

/*
  Convert camelCase to dash-case

  @param [string]
  @return [string]
*/
export const camelToDash = (string) => string.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();

/*
  Generate current timestamp
  
  @return [timestamp]: Current UNIX timestamp
*/
export const currentTime = HAS_PERFORMANCE_NOW ? () => performance.now() : () => new Date().getTime();

/*
  Check if object has property and it isn't undefined

  @param [object]
  @param [string]
  @return [boolean]
*/
export const hasProperty = (object, propertyName) => object.hasOwnProperty(propertyName) && object[propertyName] !== undefined;

/*
  Is utils var an array ? 
  
  @param: Variable to test
  @return [boolean]: Returns true if utils.varType === 'Array'
*/
export const isArray = (arr) => varType(arr) === 'Array';

/*
  Is utils var a function ? 
  
  @param: Variable to test
  @return [boolean]: Returns true if utils.varType === 'Function'
*/
export const isFunc = (obj) => varType(obj) === 'Function';

/*
  Is utils var a number?
  
  @param: Variable to test
  @return [boolean]: Returns true if typeof === 'number'
*/
export const isNum = (num) => typeof num === 'number';

/*
  Is utils var an object?
  
  @param: Variable to test
  @return [boolean]: Returns true if typeof === 'object'
*/
export const isObj = (obj) => typeof obj === 'object';

/*
  Is utils var a string ? 
  
  @param: Variable to test
  @return [boolean]: Returns true if typeof str === 'string'
*/
export const isString = (str) => typeof str === 'string';

export const setDOMAttrs = (element, attrs) => {
  for (let key in attrs) {
    if (attrs.hasOwnProperty(key)) {
      element.setAttribute(key, attrs[key]);
    }
  }
};
/*
  Split comma-delimited string

  "foo,bar" -> ["foo", "bar"]

  @param [string]
  @return [array]
*/
export const splitCommaDelimited = (value) => isString(value) ? value.split(/,\s*/) : [value];

/**
 *  Returns a function that will check any argument for `term`
 * `contains('needle')('haystack')`
 */
export const contains = (term) => (v) => {
  return (isString(term) && v.indexOf(term) !== -1);
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
export const createUnitType = (type, transform) => {
  return {
    test: contains(type),
    parse: parseFloat,
    transform
  };
};

/*
  Get value from function string
  "translateX(20px)" -> "20px"
*/
export const getValueFromFunctionString = (value) => value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));

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
  };
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

