'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var protectedProperties = ['scope', 'dom'],
    isProtected = function (key) {
    return protectedProperties.indexOf(key) !== -1;
},

/*
    Get var type as string
    
    @param: Variable to test
    @return [string]: Returns, for instance 'Object' if [object Object]
*/
varType = function (variable) {
    return Object.prototype.toString.call(variable).slice(8, -1);
},
    utils = {
    /*
        Iterate over an object and fire a callback for every item in it
         @param [object]: Properties
        @param [function]: Callback to fire
    */
    each: function (props, callback) {
        var keys = props ? Object.keys(props) : [],
            numKeys = keys.length;

        for (var i = 0; i < numKeys; i++) {
            var key = keys[i],
                prop = props[key];

            if (callback(key, prop) === false) {
                break;
            }
        }
    },

    /*
        Check if object has property and it isn't undefined
         @param [object]
        @param [string]
        @return [boolean]
    */
    has: function (object, propertyName) {
        return object.hasOwnProperty(propertyName) && object[propertyName] !== undefined;
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
        Is utils var a function ? 
        
        @param: Variable to test
        @return [boolean]: Returns true if utils.varType === 'Function'
    */
    isFunc: function (obj) {
        return varType(obj) === 'Function';
    },

    /*
        Is utils var a number?
        
        @param: Variable to test
        @return [boolean]: Returns true if typeof === 'number'
    */
    isNum: function (num) {
        return typeof num === 'number';
    },

    /*
        Is utils var an object?
        
        @param: Variable to test
        @return [boolean]: Returns true if typeof === 'object'
    */
    isObj: function (obj) {
        return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
    },

    /*
        Is utils var a string ? 
        
        @param: Variable to test
        @return [boolean]: Returns true if typeof str === 'string'
    */
    isString: function (str) {
        return typeof str === 'string';
    },

    /*
        Is utils a relative value assignment?
        
        @param [string]: Variable to test
        @return [boolean]: If utils looks like a relative value assignment
    */
    isRelativeValue: function (value) {
        return value && value.indexOf && value.indexOf('=') > 0 ? true : false;
    },

    /*
        Is utils var an array ? 
        
        @param: Variable to test
        @return [boolean]: Returns true if utils.varType === 'Array'
    */
    isArray: function (arr) {
        return varType(arr) === 'Array';
    },

    /*
        Copy object or array
        
        Checks whether base is an array or object and makes
        appropriate copy
        
        @param [array || object]: Array or object to copy
        @param [array || object]: New copy of array or object
    */
    copy: function (base) {
        return utils.isArray(base) ? utils.copyArray(base) : utils.copyObject(base);
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

        utils.each(base, function (key, value) {
            newObject[key] = utils.isObj(value) && !isProtected(key) ? utils.copy(value) : value;
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
    copyArray: function (base) {
        return base;
    },

    /*
        Non-destructive merge of object or array
        
        @param [array || object]: Array or object to use as base
        @param [array || object]: Array or object to overwrite base with
        @return [array || object]: New array or object
    */
    merge: function (base, overwrite) {
        return utils.isArray(base) ? utils.copyArray(overwrite) : utils.mergeObject(base, overwrite);
    },

    /*
        Non-destructive merge of object
        
        @param [object]: Object to use as base
        @param [object]: Object to overwrite base with
        @return [object]: New object
    */
    mergeObject: function (base, overwrite) {
        var hasBase = utils.isObj(base),
            newObject = hasBase ? utils.copy(base) : utils.copy(overwrite);

        if (hasBase) {
            utils.each(overwrite, function (key, value) {
                newObject[key] = utils.isObj(value) && !isProtected(key) ? utils.merge(base[key], value) : value;
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
    splitValUnit: function (value) {
        var splitVal = value.match(/(-?\d*\.?\d*)(.*)/);

        return {
            value: splitVal[1],
            unit: splitVal[2]
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
            target = 1 - 1 / steps,
            progressOfTarget = Math.min(progress / target, 1);

        return Math.floor(progressOfTarget / segment) * segment;
    },

    /*
        Generate current timestamp
        
        @return [timestamp]: Current UNIX timestamp
    */
    currentTime: function () {
        return typeof performance !== 'undefined' && performance.now ? performance.now() : new Date().getTime();
    }
};

module.exports = utils;
//# sourceMappingURL=data:application/json;base64,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QUMiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcHJvdGVjdGVkUHJvcGVydGllcyA9IFsnc2NvcGUnLCAgJ2RvbSddLFxuICAgIFxuICAgIGlzUHJvdGVjdGVkID0ga2V5ID0+IChwcm90ZWN0ZWRQcm9wZXJ0aWVzLmluZGV4T2Yoa2V5KSAhPT0gLTEpLFxuXG4gICAgLypcbiAgICAgICAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiAgICAqL1xuICAgIHZhclR5cGUgPSB2YXJpYWJsZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKSxcblxuICAgIHV0aWxzID0ge1xuICAgICAgICAvKlxuICAgICAgICAgICAgSXRlcmF0ZSBvdmVyIGFuIG9iamVjdCBhbmQgZmlyZSBhIGNhbGxiYWNrIGZvciBldmVyeSBpdGVtIGluIGl0XG5cbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUHJvcGVydGllc1xuICAgICAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIGZpcmVcbiAgICAgICAgKi9cbiAgICAgICAgZWFjaDogKHByb3BzLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBwcm9wcyA/IE9iamVjdC5rZXlzKHByb3BzKSA6IFtdLFxuICAgICAgICAgICAgICAgIG51bUtleXMgPSBrZXlzLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1LZXlzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcCA9IHByb3BzW2tleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2soa2V5LCBwcm9wKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ11cbiAgICAgICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dXG4gICAgICAgICovXG4gICAgICAgIGhhczogKG9iamVjdCwgcHJvcGVydHlOYW1lKSA9PiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkLFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEhhcyBvbmUgb2JqZWN0IGNoYW5nZWQgZnJvbSB0aGUgb3RoZXJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQ29tcGFyZXMgdGhlIHR3byBwcm92aWRlZCBpbnB1dHMgYW5kIHJldHVybnMgdHJ1ZSBpZiB0aGV5IGFyZSBkaWZmZXJlbnRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEJcbiAgICAgICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuICAgICAgICAqL1xuICAgICAgICBoYXNDaGFuZ2VkOiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBrZXkgPSAnJztcblxuICAgICAgICAgICAgZm9yIChrZXkgaW4gYikge1xuICAgICAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KGtleSkgJiYgYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGhhc0NoYW5nZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiAgICAgICAgKi9cbiAgICAgICAgaXNGdW5jOiBvYmogPT4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nLFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiAgICAgICAgKi9cbiAgICAgICAgaXNOdW06IG51bSA9PiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJyxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuICAgICAgICAqL1xuICAgICAgICBpc09iajogb2JqID0+IHR5cGVvZiBvYmogPT09ICdvYmplY3QnLFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiAgICAgICAgKi9cbiAgICAgICAgaXNTdHJpbmc6IHN0ciA9PiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuICAgICAgICAqL1xuICAgICAgICBpc1JlbGF0aXZlVmFsdWU6IHZhbHVlID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDApID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuICAgICAgICAqL1xuICAgICAgICBpc0FycmF5OiBhcnIgPT4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknLFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENvcHkgb2JqZWN0IG9yIGFycmF5XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIENoZWNrcyB3aGV0aGVyIGJhc2UgaXMgYW4gYXJyYXkgb3Igb2JqZWN0IGFuZCBtYWtlc1xuICAgICAgICAgICAgYXBwcm9wcmlhdGUgY29weVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byBjb3B5XG4gICAgICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IE5ldyBjb3B5IG9mIGFycmF5IG9yIG9iamVjdFxuICAgICAgICAqL1xuICAgICAgICBjb3B5OiBiYXNlID0+IHV0aWxzLmlzQXJyYXkoYmFzZSkgPyB1dGlscy5jb3B5QXJyYXkoYmFzZSkgOiB1dGlscy5jb3B5T2JqZWN0KGJhc2UpLFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIERlZXAgY29weSBhbiBvYmplY3RcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgSXRlcmF0ZXMgb3ZlciBhbiBvYmplY3QgYW5kIGNyZWF0ZXMgYSBuZXcgY29weSBvZiBldmVyeSBpdGVtLFxuICAgICAgICAgICAgZGVlcCBjb3B5aW5nIGlmIGl0IGZpbmRzIGFueSBvYmplY3RzL2FycmF5c1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byBjb3B5XG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE5ldyBjb3B5IG9mIG9iamVjdFxuICAgICAgICAqL1xuICAgICAgICBjb3B5T2JqZWN0OiBiYXNlID0+IHtcbiAgICAgICAgICAgIHZhciBuZXdPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdXRpbHMuZWFjaChiYXNlLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gKHV0aWxzLmlzT2JqKHZhbHVlKSAmJiAhaXNQcm90ZWN0ZWQoa2V5KSkgPyB1dGlscy5jb3B5KHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRGVlcCBjb3B5IGFuIGFycmF5XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIExvb3BzIHRocm91Z2ggYW4gYXJyYXkgYW5kIGNyZWF0ZXMgYSBuZXcgY29weSBvZiBldmVyeSBpdGVtLFxuICAgICAgICAgICAgZGVlcCBjb3B5aW5nIGlmIGl0IGZpbmRzIGFueSBvYmplY3RzL2FycmF5c1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW2FycmF5XTogQXJyYXkgdG8gY29weVxuICAgICAgICAgICAgQHJldHVybiBbYXJyYXldOiBOZXcgY29weSBvZiBhcnJheVxuICAgICAgICAqL1xuICAgICAgICBjb3B5QXJyYXk6IGJhc2UgPT4gYmFzZSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBOb24tZGVzdHJ1Y3RpdmUgbWVyZ2Ugb2Ygb2JqZWN0IG9yIGFycmF5XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogQXJyYXkgb3Igb2JqZWN0IHRvIHVzZSBhcyBiYXNlXG4gICAgICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byBvdmVyd3JpdGUgYmFzZSB3aXRoXG4gICAgICAgICAgICBAcmV0dXJuIFthcnJheSB8fCBvYmplY3RdOiBOZXcgYXJyYXkgb3Igb2JqZWN0XG4gICAgICAgICovXG4gICAgICAgIG1lcmdlOiAoYmFzZSwgb3ZlcndyaXRlKSA9PiAodXRpbHMuaXNBcnJheShiYXNlKSkgPyB1dGlscy5jb3B5QXJyYXkob3ZlcndyaXRlKSA6IHV0aWxzLm1lcmdlT2JqZWN0KGJhc2UsIG92ZXJ3cml0ZSksXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgTm9uLWRlc3RydWN0aXZlIG1lcmdlIG9mIG9iamVjdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byB1c2UgYXMgYmFzZVxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gb3ZlcndyaXRlIGJhc2Ugd2l0aFxuICAgICAgICAgICAgQHJldHVybiBbb2JqZWN0XTogTmV3IG9iamVjdFxuICAgICAgICAqL1xuICAgICAgICBtZXJnZU9iamVjdDogKGJhc2UsIG92ZXJ3cml0ZSkgPT4ge1xuICAgICAgICAgICAgdmFyIGhhc0Jhc2UgPSB1dGlscy5pc09iaihiYXNlKSxcbiAgICAgICAgICAgICAgICBuZXdPYmplY3QgPSBoYXNCYXNlID8gdXRpbHMuY29weShiYXNlKSA6IHV0aWxzLmNvcHkob3ZlcndyaXRlKTtcblxuICAgICAgICAgICAgaWYgKGhhc0Jhc2UpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5lYWNoKG92ZXJ3cml0ZSwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSAodXRpbHMuaXNPYmoodmFsdWUpICYmICFpc1Byb3RlY3RlZChrZXkpKSA/IHV0aWxzLm1lcmdlKGJhc2Vba2V5XSwgdmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gICAgICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuICAgICAgICAqL1xuICAgICAgICBzcGxpdFZhbFVuaXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHNwbGl0VmFsID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHNwbGl0VmFsWzFdLFxuICAgICAgICAgICAgICAgIHVuaXQ6ICBzcGxpdFZhbFsyXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuICAgICAgICAqL1xuICAgICAgICBzdGVwUHJvZ3Jlc3M6IChwcm9ncmVzcywgc3RlcHMpID0+IHtcbiAgICAgICAgICAgIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpLFxuICAgICAgICAgICAgICAgIHRhcmdldCA9IDEgLSAoMSAvIHN0ZXBzKSxcbiAgICAgICAgICAgICAgICBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiAgICAgICAgKi9cbiAgICAgICAgY3VycmVudFRpbWU6ICgpID0+ICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdykgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsczsiXX0=