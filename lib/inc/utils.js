'use strict';

var protectedProperties = ['scope', 'dom'];
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = '$1-$2';

var isProtected = function (key) {
    return protectedProperties.indexOf(key) !== -1;
};

/*
    Get var type as string
    
    @param: Variable to test
    @return [string]: Returns, for instance 'Object' if [object Object]
*/
var varType = function (variable) {
    return Object.prototype.toString.call(variable).slice(8, -1);
};

var utils = {
    /*
        Convert camelCase to dash-case
         @param [string]
        @return [string]
    */
    camelToDash: function (string) {
        return string.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
    },

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
        return typeof obj === 'object';
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
//# sourceMappingURL=data:application/json;base64,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QztLQUMzRDs7Ozs7OztBQU9ELGVBQVcsRUFBRTtlQUFNLEFBQUMsT0FBTyxXQUFXLEtBQUssV0FBVyxJQUFJLFdBQVcsQ0FBQyxHQUFHLEdBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO0tBQUE7Q0FDeEgsQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByb3RlY3RlZFByb3BlcnRpZXMgPSBbJ3Njb3BlJywgICdkb20nXTtcbmNvbnN0IENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xuY29uc3QgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG4gICAgXG5jb25zdCBpc1Byb3RlY3RlZCA9IGtleSA9PiAocHJvdGVjdGVkUHJvcGVydGllcy5pbmRleE9mKGtleSkgIT09IC0xKTtcblxuLypcbiAgICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbmNvbnN0IHZhclR5cGUgPSB2YXJpYWJsZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcblxuY29uc3QgdXRpbHMgPSB7XG4gICAgLypcbiAgICAgICAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuICAgIGNhbWVsVG9EYXNoOiAoc3RyaW5nKSA9PiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCksXG5cbiAgICAvKlxuICAgICAgICBJdGVyYXRlIG92ZXIgYW4gb2JqZWN0IGFuZCBmaXJlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGl0ZW0gaW4gaXRcblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFByb3BlcnRpZXNcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIGZpcmVcbiAgICAqL1xuICAgIGVhY2g6IChwcm9wcywgY2FsbGJhY2spID0+IHtcbiAgICAgICAgdmFyIGtleXMgPSBwcm9wcyA/IE9iamVjdC5rZXlzKHByb3BzKSA6IFtdLFxuICAgICAgICAgICAgbnVtS2V5cyA9IGtleXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXSxcbiAgICAgICAgICAgICAgICBwcm9wID0gcHJvcHNba2V5XTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGtleSwgcHJvcCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQ2hlY2sgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eSBhbmQgaXQgaXNuJ3QgdW5kZWZpbmVkXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXVxuICAgICovXG4gICAgaGFzOiAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpID0+IG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQsXG4gICAgXG4gICAgLypcbiAgICAgICAgSGFzIG9uZSBvYmplY3QgY2hhbmdlZCBmcm9tIHRoZSBvdGhlclxuICAgICAgICBcbiAgICAgICAgQ29tcGFyZXMgdGhlIHR3byBwcm92aWRlZCBpbnB1dHMgYW5kIHJldHVybnMgdHJ1ZSBpZiB0aGV5IGFyZSBkaWZmZXJlbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEJcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4gICAgKi9cbiAgICBoYXNDaGFuZ2VkOiAoYSwgYikgPT4ge1xuICAgICAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlLFxuICAgICAgICAgICAga2V5ID0gJyc7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gYikge1xuICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gaGFzQ2hhbmdlZDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4gICAgKi9cbiAgICBpc0Z1bmM6IG9iaiA9PiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbicsXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuICAgICovXG4gICAgaXNOdW06IG51bSA9PiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJyxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuICAgICovXG4gICAgaXNPYmo6IG9iaiA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4gICAgKi9cbiAgICBpc1N0cmluZzogc3RyID0+IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnLFxuXG4gICAgLypcbiAgICAgICAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuICAgICovXG4gICAgaXNSZWxhdGl2ZVZhbHVlOiB2YWx1ZSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwKSA/IHRydWUgOiBmYWxzZSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiAgICAqL1xuICAgIGlzQXJyYXk6IGFyciA9PiB2YXJUeXBlKGFycikgPT09ICdBcnJheScsXG4gICAgXG4gICAgLypcbiAgICAgICAgQ29weSBvYmplY3Qgb3IgYXJyYXlcbiAgICAgICAgXG4gICAgICAgIENoZWNrcyB3aGV0aGVyIGJhc2UgaXMgYW4gYXJyYXkgb3Igb2JqZWN0IGFuZCBtYWtlc1xuICAgICAgICBhcHByb3ByaWF0ZSBjb3B5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byBjb3B5XG4gICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogTmV3IGNvcHkgb2YgYXJyYXkgb3Igb2JqZWN0XG4gICAgKi9cbiAgICBjb3B5OiBiYXNlID0+IHV0aWxzLmlzQXJyYXkoYmFzZSkgPyB1dGlscy5jb3B5QXJyYXkoYmFzZSkgOiB1dGlscy5jb3B5T2JqZWN0KGJhc2UpLFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlZXAgY29weSBhbiBvYmplY3RcbiAgICAgICAgXG4gICAgICAgIEl0ZXJhdGVzIG92ZXIgYW4gb2JqZWN0IGFuZCBjcmVhdGVzIGEgbmV3IGNvcHkgb2YgZXZlcnkgaXRlbSxcbiAgICAgICAgZGVlcCBjb3B5aW5nIGlmIGl0IGZpbmRzIGFueSBvYmplY3RzL2FycmF5c1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gY29weVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IE5ldyBjb3B5IG9mIG9iamVjdFxuICAgICovXG4gICAgY29weU9iamVjdDogYmFzZSA9PiB7XG4gICAgICAgIHZhciBuZXdPYmplY3QgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIHV0aWxzLmVhY2goYmFzZSwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gKHV0aWxzLmlzT2JqKHZhbHVlKSAmJiAhaXNQcm90ZWN0ZWQoa2V5KSkgPyB1dGlscy5jb3B5KHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWVwIGNvcHkgYW4gYXJyYXlcbiAgICAgICAgXG4gICAgICAgIExvb3BzIHRocm91Z2ggYW4gYXJyYXkgYW5kIGNyZWF0ZXMgYSBuZXcgY29weSBvZiBldmVyeSBpdGVtLFxuICAgICAgICBkZWVwIGNvcHlpbmcgaWYgaXQgZmluZHMgYW55IG9iamVjdHMvYXJyYXlzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5XTogQXJyYXkgdG8gY29weVxuICAgICAgICBAcmV0dXJuIFthcnJheV06IE5ldyBjb3B5IG9mIGFycmF5XG4gICAgKi9cbiAgICBjb3B5QXJyYXk6IGJhc2UgPT4gYmFzZSxcbiAgICBcbiAgICAvKlxuICAgICAgICBOb24tZGVzdHJ1Y3RpdmUgbWVyZ2Ugb2Ygb2JqZWN0IG9yIGFycmF5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byB1c2UgYXMgYmFzZVxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byBvdmVyd3JpdGUgYmFzZSB3aXRoXG4gICAgICAgIEByZXR1cm4gW2FycmF5IHx8IG9iamVjdF06IE5ldyBhcnJheSBvciBvYmplY3RcbiAgICAqL1xuICAgIG1lcmdlOiAoYmFzZSwgb3ZlcndyaXRlKSA9PiAodXRpbHMuaXNBcnJheShiYXNlKSkgPyB1dGlscy5jb3B5QXJyYXkob3ZlcndyaXRlKSA6IHV0aWxzLm1lcmdlT2JqZWN0KGJhc2UsIG92ZXJ3cml0ZSksXG4gICAgXG4gICAgLypcbiAgICAgICAgTm9uLWRlc3RydWN0aXZlIG1lcmdlIG9mIG9iamVjdFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gdXNlIGFzIGJhc2VcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gb3ZlcndyaXRlIGJhc2Ugd2l0aFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBOZXcgb2JqZWN0XG4gICAgKi9cbiAgICBtZXJnZU9iamVjdDogKGJhc2UsIG92ZXJ3cml0ZSkgPT4ge1xuICAgICAgICB2YXIgaGFzQmFzZSA9IHV0aWxzLmlzT2JqKGJhc2UpLFxuICAgICAgICAgICAgbmV3T2JqZWN0ID0gaGFzQmFzZSA/IHV0aWxzLmNvcHkoYmFzZSkgOiB1dGlscy5jb3B5KG92ZXJ3cml0ZSk7XG5cbiAgICAgICAgaWYgKGhhc0Jhc2UpIHtcbiAgICAgICAgICAgIHV0aWxzLmVhY2gob3ZlcndyaXRlLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gKHV0aWxzLmlzT2JqKHZhbHVlKSAmJiAhaXNQcm90ZWN0ZWQoa2V5KSkgPyB1dGlscy5tZXJnZShiYXNlW2tleV0sIHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgICAgICAgXG4gICAgICAgICAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgICAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiAgICAqL1xuICAgIHNwbGl0VmFsVW5pdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBzcGxpdFZhbCA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogc3BsaXRWYWxbMV0sXG4gICAgICAgICAgICB1bml0OiAgc3BsaXRWYWxbMl1cbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4gICAgKi9cbiAgICBzdGVwUHJvZ3Jlc3M6IChwcm9ncmVzcywgc3RlcHMpID0+IHtcbiAgICAgICAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSksXG4gICAgICAgICAgICB0YXJnZXQgPSAxIC0gKDEgLyBzdGVwcyksXG4gICAgICAgICAgICBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuICAgICovXG4gICAgY3VycmVudFRpbWU6ICgpID0+ICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdykgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxzOyJdfQ==