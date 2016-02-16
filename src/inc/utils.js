const CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
const REPLACE_TEMPLATE = '$1-$2';
const HAS_PERFORMANCE_NOW = (typeof performance !== 'undefined' && performance.now);

/*
    Get var type as string
    
    @param: Variable to test
    @return [string]: Returns, for instance 'Object' if [object Object]
*/
const varType = variable => Object.prototype.toString.call(variable).slice(8, -1);

/*
    Convert camelCase to dash-case

    @param [string]
    @return [string]
*/
export const camelToDash = (string) => string.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();

/*
    Combine transformers into one function that calls every
    transformer in the array and returns the result

    @param [array]
    @return [function]
*/
export const combineTransformers = (transformers) => {
    const numTransformers = transformers.length;
    let i = 0;

    /*
        @param [number]
        @param [string]
        @param [Action]
        @return [number]
    */
    return (v, key, a) => {
        for (i = 0; i < numTransformers; i++) {
            v = transformers[i](v, key, a);
        }

        return v;
    };
};

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
export const getValueFromFunctionString = (value) => value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));

/*
    Check if two objects have changed from each other
    
    @param [object]: Input A
    @param [object]: Input B
    @return [boolean]: True if different
*/
export const hasChanged = (a, b) => {
    let changed = false;

    for (let key in a) {
        if (a.hasOwnProperty(key)) {
            if (hasProperty(b, key)) {
                if (a[key] !== b[key]) {
                    changed = true;
                }
            } else {
                changed = true;
            }
        }
    }

    return changed;
};

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
    @param [string || NodeList]:
        If string, treated as selector.
        If not, treated as preexisting NodeList

    @return [Array]
*/
export const selectDom = (selector) => {
    const nodes = (typeof selector === 'string') ? document.querySelectorAll(selector) : selector;
    return (nodes.length) ? [].slice.call(nodes) : [].push(nodes);
};

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
