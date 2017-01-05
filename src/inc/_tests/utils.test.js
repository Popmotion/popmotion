import {
  isArray,
  isFunc,
  isNum,
  isObj,
  isString,
  camelToDash,
  splitCommaDelimited,
  contains,
  isFirstChars,
  getValueFromFunctionString,
  splitColorValues
} from '../utils';

describe('camelToDash()', () => {
  expect(camelToDash('fooBarBop')).toBe('foo-bar-bop');
});

describe('splitCommaDelimited()', () => {
  it('should split comma delimited string into array', () => {
    expect(splitCommaDelimited('foo,bar')).toEqual(['foo', 'bar']);
  });
});

describe('contains()', () => {
  it('should return true if argument contains', () => {
    const containsPx = contains('px');
    expect(containsPx('face')).toBe(false);
    expect(containsPx('somepx')).toBe(true);
  });
});

describe('isFirstChars()', () => {
  it('should return true if first chars are equal to args', () => {
    const isColor = isFirstChars('rgb');
    expect(isColor('test')).toBe(false);
    expect(isColor('rgba()')).toBe(true);
  });
});

describe('getValueFromFunctionString()', () => {
  it('should return value from function string', () => {
    expect(getValueFromFunctionString('translate(20px)')).toBe('20px');
    expect(getValueFromFunctionString('rgba(255, 0, 255)')).toBe('255, 0, 255');
  });
});

describe('splitColorValues()', () => {
  it('should split an array of values into the named values provided', () => {
    const splitRGBValues = splitColorValues(['red', 'green', 'blue']);
    expect(splitRGBValues('rgba(255,0,255)')).toEqual({
      red: 255,
      green: 0,
      blue: 255
    });
  });
});

describe('isArray()', () => {
  it('should identify arrays', () => {
    expect(isArray([])).toBe(true);
    expect(isArray('')).toBe(false);
    expect(isArray(0)).toBe(false);
  });
});

describe('isFunc()', () => {
  it('should identify functions', () => {
    expect(isFunc(() => {})).toBe(true);
    expect(isFunc('')).toBe(false);
  });
});

describe('isNum()', () => {
  it('should identify numbers', () => {
    expect(isNum(0)).toBe(true);
    expect(isNum('')).toBe(false);
  });
});

describe('isString()', () => {
  it('should identify strings', () => {
    expect(isString('')).toBe(true);
    expect(isString(0)).toBe(false);
  });
});

describe('isObj()', () => {
  it('should identify objects', () => {
    expect(isObj({})).toBe(true);
    expect(isObj('')).toBe(false);
  });
});
