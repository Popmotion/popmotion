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
  Create a function string

  '20px', 'translate' -> 'translate(20px)'

  @param [string]
  @param [string]
  @return [string]
*/
export const createFunctionString = (value, prefix) => `${prefix}(${value})`;

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
  Is utils a relative value assignment?
  
  @param [string]: Variable to test
  @return [boolean]: If utils looks like a relative value assignment
*/
export const isRelativeValue = (value) => (value && value.indexOf && value.indexOf('=') > 0) ? true : false;

/*
  Is utils var a string ? 
  
  @param: Variable to test
  @return [boolean]: Returns true if typeof str === 'string'
*/
export const isString = (str) => typeof str === 'string';

/*
  Split comma-delimited string

  "foo,bar" -> ["foo", "bar"]

  @param [string]
  @return [array]
*/
export const splitCommaDelimited = (value) => isString(value) ? value.split(/,\s*/) : [value];

/*
  Split space-delimited string

  "foo bar" -> ["foo", "bar"]

  @param [string]
  @return [array]
*/
export const splitSpaceDelimited = (value) => isString(value) ? value.split(' ') : [value];

/*
  Convert number to x decimal places

  @param [number]
  @param [number]
  @return [number]
*/
export const toDecimal = (num, precision = 2) => {
  precision = 10 ** precision;
  return Math.round(num * precision) / precision;
};
