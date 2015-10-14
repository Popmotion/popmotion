/*
    Utility functions
*/
"use strict";

var protectedProperties = ['scope',  'dom'],
    
    isProtected = function (key) {
        return (protectedProperties.indexOf(key) !== -1);
    },

    /*
        Get var type as string
        
        @param: Variable to test
        @return [string]: Returns, for instance 'Object' if [object Object]
    */
    varType = function (variable) {
        return Object.prototype.toString.call(variable).slice(8, -1);
    };

module.exports = {

    /*
        Iterate over an object and fire a callback for every item in it

        @param [object]: Properties
        @param [function]: Callback to fire
    */
    each: function (props, callback) {
        var keys = Object.keys(props),
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
    hasChanged: function (a, b) {
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
        Is this var a number?
        
        @param: Variable to test
        @return [boolean]: Returns true if typeof === 'number'
    */
    isNum: function (num) {
        return (typeof num === 'number');
    },
    
    /*
        Is this var an object?
        
        @param: Variable to test
        @return [boolean]: Returns true if typeof === 'object'
    */
    isObj: function (obj) {
        return (typeof obj === 'object');
    },
    
    /*
        Is this var a function ? 
        
        @param: Variable to test
        @return [boolean]: Returns true if this.varType === 'Function'
    */
    isFunc: function (obj) {
        return (varType(obj) === 'Function'); 
    },
    
    /*
        Is this var a string ? 
        
        @param: Variable to test
        @return [boolean]: Returns true if typeof str === 'string'
    */
    isString: function (str) {
        return (typeof str === 'string'); 
    },


    /*
        Is this a relative value assignment?
        
        @param [string]: Variable to test
        @return [boolean]: If this looks like a relative value assignment
    */
    isRelativeValue: function (value) {
        return (value && value.indexOf && value.indexOf('=') > 0);
    },
    
    /*
        Is this var an array ? 
        
        @param: Variable to test
        @return [boolean]: Returns true if this.varType === 'Array'
    */
    isArray: function (arr) {
        return (varType(arr) === 'Array');
    },
    
    /*
        Copy object or array
        
        Checks whether base is an array or object and makes
        appropriate copy
        
        @param [array || object]: Array or object to copy
        @param [array || object]: New copy of array or object
    */
    copy: function (base) {
        return (this.isArray(base)) ? this.copyArray(base) : this.copyObject(base);
    },
    
    /*
        Deep copy an object
        
        Iterates over an object and creates a new copy of every item,
        deep copying if it finds any objects/arrays
        
        @param [object]: Object to copy
        @param [object]: New copy of object
    */
    copyObject: function (base) {
        var newObject = {};
        
        for (var key in base) {
            if (base.hasOwnProperty(key)) {
                newObject[key] = (this.isObj(base[key]) && !isProtected(key)) ? this.copy(base[key]) : base[key];
            }
        }
        
        return newObject;
    },
    
    /*
        Deep copy an array
        
        Loops through an array and creates a new copy of every item,
        deep copying if it finds any objects/arrays
        
        @param [array]: Array to copy
        @return [array]: New copy of array
    */
    copyArray: function (base) {
        var newArray = [],
            length = base.length,
            i = 0;
        
        for (; i < length; i++) {
            newArray[i] = base[i];
        }
        
        return newArray;
    },
    
    /*
        Non-destructive merge of object or array
        
        @param [array || object]: Array or object to use as base
        @param [array || object]: Array or object to overwrite base with
        @return [array || object]: New array or object
    */
    merge: function (base, overwrite) {
        return (this.isArray(base)) ? this.copyArray(overwrite) : this.mergeObject(base, overwrite);
    },
    
    /*
        Non-destructive merge of object
        
        @param [object]: Object to use as base
        @param [object]: Object to overwrite base with
        @return [object]: New object
    */
    mergeObject: function (base, overwrite) {
        var hasBase = this.isObj(base),
            newObject = hasBase ? this.copy(base) : this.copy(overwrite),
            key = '';

        if (hasBase) {
            for (key in overwrite) {
                if (overwrite.hasOwnProperty(key)) {
                    newObject[key] = (this.isObj(overwrite[key]) && !isProtected(key)) ? this.merge(base[key], overwrite[key]) : overwrite[key];
                }
            }
        }
        return newObject;
    },
    
    /*
        Split a value into a value/unit object
        
            "200px" -> { value: 200, unit: "px" }
            
        @param [string]: Value to split
        @return [object]: Object with value and unit props
    */
    splitValUnit: function (value) {
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
    stepProgress: function (progress, steps) {
        var segment = 1 / (steps - 1),
            target = 1 - (1 / steps),
            progressOfTarget = Math.min(progress / target, 1);

        return Math.floor(progressOfTarget / segment) * segment;
    },
    
    /*
        Generate current timestamp
        
        @return [timestamp]: Current UNIX timestamp
    */
    currentTime: function () {
	    return (typeof performance !== "undefined") ? performance.now() : new Date().getTime();
    }
    
};