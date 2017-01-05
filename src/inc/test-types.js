import { isFirstChars } from './utils';

const varType = (variable) => Object.prototype.toString.call(variable).slice(8, -1);

export const isHex = isFirstChars('#');
export const isRgb = isFirstChars('rgb');
export const isHsl = isFirstChars('hsl');

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
