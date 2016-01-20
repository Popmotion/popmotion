function push(...args) {
    Array.prototype.push.call(this, ...args);

    if (this.length >= this._maxSize) {
        this.shift();
    }
}

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
    Create an auto-culling buffer array

    @param [array]
    @param [int]
    @return [array]
*/
export const createBuffer = (maxSize = 3, array = []) => {
    array.push = push;
    array._maxSize = maxSize || 0;

    return array;
}

/*
    Generate current timestamp
    
    @return [timestamp]: Current UNIX timestamp
*/
export const currentTime = () => HAS_PERFORMANCE_NOW ? performance.now() : new Date().getTime();

/*
    Iterate over an object and fire a callback for every item in it

    @param [object]: Object to iterate over
    @param [function]: Callback to fire
*/
export const each = (object, callback) => {
    const keys = object ? Object.keys(object) : [];
    const numKeys = keys.length;

    for (let i = 0; i < numKeys; i++) {
        const key = keys[i];
        const prop = object[key];

        callback(prop, key, object);
    }
};

/*
    Check if two objects have changed from each other
    
    @param [object]: Input A
    @param [object]: Input B
    @return [boolean]: True if different
*/
export const hasChanged = (a, b) => {
    let changed = false;

    each(a, (value, key) => {
        if (hasProperty(b, key)) {
            if (value !== b[key]) {
                changed = true;
            }
        } else {
            changed = true;
        }
    });

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
    Split a value into a value/unit object
    
        "200px" -> { value: 200, unit: "px" }
        
    @param [string]: Value to split
    @return [object]: Object with value and unit props
*/
export const splitValueUnit = (value) => {
    const splitVal = value.match(/(-?\d*\.?\d*)(.*)/);

    return {
        value: parseFloat(splitVal[1]),
        unit:  splitVal[2]
    };
};

export const toDecimal = (num, precision = 2) => {
    precision = 10 ** precision;
    return Math.round(num * precision) / precision;
};
