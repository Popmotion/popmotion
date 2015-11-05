var protectedProperties = ['scope',  'dom'],
    
    isProtected = key => (protectedProperties.indexOf(key) !== -1),

    /*
        Get var type as string
        
        @param: Variable to test
        @return [string]: Returns, for instance 'Object' if [object Object]
    */
    varType = variable => Object.prototype.toString.call(variable).slice(8, -1),

    utils = {
        /*
            Iterate over an object and fire a callback for every item in it

            @param [object]: Properties
            @param [function]: Callback to fire
        */
        each: (props, callback) => {
            var keys = props ? Object.keys(props) : [],
                numKeys = keys.length;

            for (let i = 0; i < numKeys; i++) {
                let key = keys[i],
                    prop = props[key];

                if (callback(key, prop) === false) {
                    break;
                }
            }
        },
        
        /*
            Has one object changed from the other
            
            Compares the two provided inputs and returns true if they are different
            
            @param [object]: Input A
            @param [object]: Input B
            @return [boolean]: True if different
        */
        hasChanged: (a, b) => {
            var hasChanged = false,
                key = '';

            for (key in b) {
                if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
                    if (a[key] !== b[key]) {
                        hasChanged = true;
                    }
                } else {
                    hasChanged = true;
                }
            }
        
            return hasChanged;
        },
        
        /*
            Is utils var a function ? 
            
            @param: Variable to test
            @return [boolean]: Returns true if utils.varType === 'Function'
        */
        isFunc: obj => varType(obj) === 'Function',
        
        /*
            Is utils var a number?
            
            @param: Variable to test
            @return [boolean]: Returns true if typeof === 'number'
        */
        isNum: num => typeof num === 'number',
        
        /*
            Is utils var an object?
            
            @param: Variable to test
            @return [boolean]: Returns true if typeof === 'object'
        */
        isObj: obj => typeof obj === 'object',
        
        /*
            Is utils var a string ? 
            
            @param: Variable to test
            @return [boolean]: Returns true if typeof str === 'string'
        */
        isString: str => typeof str === 'string',

        /*
            Is utils a relative value assignment?
            
            @param [string]: Variable to test
            @return [boolean]: If utils looks like a relative value assignment
        */
        isRelativeValue: value => (value && value.indexOf && value.indexOf('=') > 0) ? true : false,
        
        /*
            Is utils var an array ? 
            
            @param: Variable to test
            @return [boolean]: Returns true if utils.varType === 'Array'
        */
        isArray: arr => varType(arr) === 'Array',
        
        /*
            Copy object or array
            
            Checks whether base is an array or object and makes
            appropriate copy
            
            @param [array || object]: Array or object to copy
            @param [array || object]: New copy of array or object
        */
        copy: base => utils.isArray(base) ? utils.copyArray(base) : utils.copyObject(base),
        
        /*
            Deep copy an object
            
            Iterates over an object and creates a new copy of every item,
            deep copying if it finds any objects/arrays
            
            @param [object]: Object to copy
            @param [object]: New copy of object
        */
        copyObject: base => {
            var newObject = {};
            
            utils.each(base, (key, value) => {
                newObject[key] = (utils.isObj(value) && !isProtected(key)) ? utils.copy(value) : value;
            });
            
            return newObject;
        },
        
        /*
            Deep copy an array
            
            Loops through an array and creates a new copy of every item,
            deep copying if it finds any objects/arrays
            
            @param [array]: Array to copy
            @return [array]: New copy of array
        */
        copyArray: base => base,
        
        /*
            Non-destructive merge of object or array
            
            @param [array || object]: Array or object to use as base
            @param [array || object]: Array or object to overwrite base with
            @return [array || object]: New array or object
        */
        merge: (base, overwrite) => (utils.isArray(base)) ? utils.copyArray(overwrite) : utils.mergeObject(base, overwrite),
        
        /*
            Non-destructive merge of object
            
            @param [object]: Object to use as base
            @param [object]: Object to overwrite base with
            @return [object]: New object
        */
        mergeObject: (base, overwrite) => {
            var hasBase = utils.isObj(base),
                newObject = hasBase ? utils.copy(base) : utils.copy(overwrite);

            if (hasBase) {
                utils.each(overwrite, (key, value) => {
                    newObject[key] = (utils.isObj(value) && !isProtected(key)) ? utils.merge(base[key], value) : value;
                });
            }

            return newObject;
        },
        
        /*
            Split a value into a value/unit object
            
                "200px" -> { value: 200, unit: "px" }
                
            @param [string]: Value to split
            @return [object]: Object with value and unit props
        */
        splitValUnit: (value) => {
            let splitVal = value.match(/(-?\d*\.?\d*)(.*)/);

            return {
                value: splitVal[1],
                unit:  splitVal[2]
            };
        },

        /*
            Create stepped version of 0-1 progress
            
            @param [number]: Current value
            @param [int]: Number of steps
            @return [number]: Stepped value
        */
        stepProgress: (progress, steps) => {
            var segment = 1 / (steps - 1),
                target = 1 - (1 / steps),
                progressOfTarget = Math.min(progress / target, 1);

            return Math.floor(progressOfTarget / segment) * segment;
        },
        
        /*
            Generate current timestamp
            
            @return [timestamp]: Current UNIX timestamp
        */
        currentTime: () => (typeof performance !== 'undefined' && performance.now) ? performance.now() : new Date().getTime()
    };

module.exports = utils;