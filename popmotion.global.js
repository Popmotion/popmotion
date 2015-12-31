(function() {
var exports = {};
'use strict';

var popmotion = ((function() {
var exports = {};
var __small$_5 = (function() {
var exports = {};
'use strict';

exports = {
    defaultProps: {
        unit: 'px'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9weC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDYixnQkFBWSxFQUFFO0FBQ1YsWUFBSSxFQUFFLElBQUk7S0FDYjtDQUNKLENBQUMiLCJmaWxlIjoicHguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ3B4J1xuICAgIH1cbn07Il19
return exports;
})();
var __small$_35 = (function() {
var exports = {};
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

exports = utils;
//# sourceMappingURL=data:application/json;base64,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QztLQUMzRDs7Ozs7OztBQU9ELGVBQVcsRUFBRTtlQUFNLEFBQUMsT0FBTyxXQUFXLEtBQUssV0FBVyxJQUFJLFdBQVcsQ0FBQyxHQUFHLEdBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO0tBQUE7Q0FDeEgsQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByb3RlY3RlZFByb3BlcnRpZXMgPSBbJ3Njb3BlJywgICdkb20nXTtcbmNvbnN0IENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xuY29uc3QgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG4gICAgXG5jb25zdCBpc1Byb3RlY3RlZCA9IGtleSA9PiAocHJvdGVjdGVkUHJvcGVydGllcy5pbmRleE9mKGtleSkgIT09IC0xKTtcblxuLypcbiAgICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbmNvbnN0IHZhclR5cGUgPSB2YXJpYWJsZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcblxuY29uc3QgdXRpbHMgPSB7XG4gICAgLypcbiAgICAgICAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuICAgIGNhbWVsVG9EYXNoOiAoc3RyaW5nKSA9PiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCksXG5cbiAgICAvKlxuICAgICAgICBJdGVyYXRlIG92ZXIgYW4gb2JqZWN0IGFuZCBmaXJlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGl0ZW0gaW4gaXRcblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFByb3BlcnRpZXNcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIGZpcmVcbiAgICAqL1xuICAgIGVhY2g6IChwcm9wcywgY2FsbGJhY2spID0+IHtcbiAgICAgICAgdmFyIGtleXMgPSBwcm9wcyA/IE9iamVjdC5rZXlzKHByb3BzKSA6IFtdLFxuICAgICAgICAgICAgbnVtS2V5cyA9IGtleXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXSxcbiAgICAgICAgICAgICAgICBwcm9wID0gcHJvcHNba2V5XTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGtleSwgcHJvcCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQ2hlY2sgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eSBhbmQgaXQgaXNuJ3QgdW5kZWZpbmVkXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXVxuICAgICovXG4gICAgaGFzOiAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpID0+IG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQsXG4gICAgXG4gICAgLypcbiAgICAgICAgSGFzIG9uZSBvYmplY3QgY2hhbmdlZCBmcm9tIHRoZSBvdGhlclxuICAgICAgICBcbiAgICAgICAgQ29tcGFyZXMgdGhlIHR3byBwcm92aWRlZCBpbnB1dHMgYW5kIHJldHVybnMgdHJ1ZSBpZiB0aGV5IGFyZSBkaWZmZXJlbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEJcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4gICAgKi9cbiAgICBoYXNDaGFuZ2VkOiAoYSwgYikgPT4ge1xuICAgICAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlLFxuICAgICAgICAgICAga2V5ID0gJyc7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gYikge1xuICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gaGFzQ2hhbmdlZDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4gICAgKi9cbiAgICBpc0Z1bmM6IG9iaiA9PiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbicsXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuICAgICovXG4gICAgaXNOdW06IG51bSA9PiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJyxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuICAgICovXG4gICAgaXNPYmo6IG9iaiA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4gICAgKi9cbiAgICBpc1N0cmluZzogc3RyID0+IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnLFxuXG4gICAgLypcbiAgICAgICAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuICAgICovXG4gICAgaXNSZWxhdGl2ZVZhbHVlOiB2YWx1ZSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwKSA/IHRydWUgOiBmYWxzZSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiAgICAqL1xuICAgIGlzQXJyYXk6IGFyciA9PiB2YXJUeXBlKGFycikgPT09ICdBcnJheScsXG4gICAgXG4gICAgLypcbiAgICAgICAgQ29weSBvYmplY3Qgb3IgYXJyYXlcbiAgICAgICAgXG4gICAgICAgIENoZWNrcyB3aGV0aGVyIGJhc2UgaXMgYW4gYXJyYXkgb3Igb2JqZWN0IGFuZCBtYWtlc1xuICAgICAgICBhcHByb3ByaWF0ZSBjb3B5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byBjb3B5XG4gICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogTmV3IGNvcHkgb2YgYXJyYXkgb3Igb2JqZWN0XG4gICAgKi9cbiAgICBjb3B5OiBiYXNlID0+IHV0aWxzLmlzQXJyYXkoYmFzZSkgPyB1dGlscy5jb3B5QXJyYXkoYmFzZSkgOiB1dGlscy5jb3B5T2JqZWN0KGJhc2UpLFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlZXAgY29weSBhbiBvYmplY3RcbiAgICAgICAgXG4gICAgICAgIEl0ZXJhdGVzIG92ZXIgYW4gb2JqZWN0IGFuZCBjcmVhdGVzIGEgbmV3IGNvcHkgb2YgZXZlcnkgaXRlbSxcbiAgICAgICAgZGVlcCBjb3B5aW5nIGlmIGl0IGZpbmRzIGFueSBvYmplY3RzL2FycmF5c1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gY29weVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IE5ldyBjb3B5IG9mIG9iamVjdFxuICAgICovXG4gICAgY29weU9iamVjdDogYmFzZSA9PiB7XG4gICAgICAgIHZhciBuZXdPYmplY3QgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIHV0aWxzLmVhY2goYmFzZSwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gKHV0aWxzLmlzT2JqKHZhbHVlKSAmJiAhaXNQcm90ZWN0ZWQoa2V5KSkgPyB1dGlscy5jb3B5KHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWVwIGNvcHkgYW4gYXJyYXlcbiAgICAgICAgXG4gICAgICAgIExvb3BzIHRocm91Z2ggYW4gYXJyYXkgYW5kIGNyZWF0ZXMgYSBuZXcgY29weSBvZiBldmVyeSBpdGVtLFxuICAgICAgICBkZWVwIGNvcHlpbmcgaWYgaXQgZmluZHMgYW55IG9iamVjdHMvYXJyYXlzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5XTogQXJyYXkgdG8gY29weVxuICAgICAgICBAcmV0dXJuIFthcnJheV06IE5ldyBjb3B5IG9mIGFycmF5XG4gICAgKi9cbiAgICBjb3B5QXJyYXk6IGJhc2UgPT4gYmFzZSxcbiAgICBcbiAgICAvKlxuICAgICAgICBOb24tZGVzdHJ1Y3RpdmUgbWVyZ2Ugb2Ygb2JqZWN0IG9yIGFycmF5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byB1c2UgYXMgYmFzZVxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byBvdmVyd3JpdGUgYmFzZSB3aXRoXG4gICAgICAgIEByZXR1cm4gW2FycmF5IHx8IG9iamVjdF06IE5ldyBhcnJheSBvciBvYmplY3RcbiAgICAqL1xuICAgIG1lcmdlOiAoYmFzZSwgb3ZlcndyaXRlKSA9PiAodXRpbHMuaXNBcnJheShiYXNlKSkgPyB1dGlscy5jb3B5QXJyYXkob3ZlcndyaXRlKSA6IHV0aWxzLm1lcmdlT2JqZWN0KGJhc2UsIG92ZXJ3cml0ZSksXG4gICAgXG4gICAgLypcbiAgICAgICAgTm9uLWRlc3RydWN0aXZlIG1lcmdlIG9mIG9iamVjdFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gdXNlIGFzIGJhc2VcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gb3ZlcndyaXRlIGJhc2Ugd2l0aFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBOZXcgb2JqZWN0XG4gICAgKi9cbiAgICBtZXJnZU9iamVjdDogKGJhc2UsIG92ZXJ3cml0ZSkgPT4ge1xuICAgICAgICB2YXIgaGFzQmFzZSA9IHV0aWxzLmlzT2JqKGJhc2UpLFxuICAgICAgICAgICAgbmV3T2JqZWN0ID0gaGFzQmFzZSA/IHV0aWxzLmNvcHkoYmFzZSkgOiB1dGlscy5jb3B5KG92ZXJ3cml0ZSk7XG5cbiAgICAgICAgaWYgKGhhc0Jhc2UpIHtcbiAgICAgICAgICAgIHV0aWxzLmVhY2gob3ZlcndyaXRlLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gKHV0aWxzLmlzT2JqKHZhbHVlKSAmJiAhaXNQcm90ZWN0ZWQoa2V5KSkgPyB1dGlscy5tZXJnZShiYXNlW2tleV0sIHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgICAgICAgXG4gICAgICAgICAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgICAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiAgICAqL1xuICAgIHNwbGl0VmFsVW5pdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBzcGxpdFZhbCA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogc3BsaXRWYWxbMV0sXG4gICAgICAgICAgICB1bml0OiAgc3BsaXRWYWxbMl1cbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4gICAgKi9cbiAgICBzdGVwUHJvZ3Jlc3M6IChwcm9ncmVzcywgc3RlcHMpID0+IHtcbiAgICAgICAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSksXG4gICAgICAgICAgICB0YXJnZXQgPSAxIC0gKDEgLyBzdGVwcyksXG4gICAgICAgICAgICBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuICAgICovXG4gICAgY3VycmVudFRpbWU6ICgpID0+ICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdykgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxzOyJdfQ==
return exports;
})();
var __small$_26 = (function() {
var exports = {};
'use strict';

var utils = __small$_35;
var each = utils.each;

/*
    Role class constructor

    @param [object]: Optional methods and props to add:
        name [string]:      Name of generated getter/setter method on Actor
        _map [object]:      Map Actor values to these values for this Role
        _typeMap [object]:  Map values to value types
        init [function]:    Callback to run when this Role is added to an Actor
        start [function]:   Callback to run when host Actor starts an action
        complete [function]: Callback to run when action completes
        frame [function]:   Callback to fire once per frame
        update [function]:  Callback to fire when values change
        get [function]:     Read value from actual element
        set [function]:     Set value on actual element
*/
var Role = function (methods) {
    var role = function (element, opts, prop) {
        var typeOfOpts = typeof opts;

        // Set single, if this is a string and we have a property
        if (typeOfOpts === 'string' && prop) {
            role.set(element, opts, prop);

            // Set multi, if this is an object
        } else if (typeOfOpts === 'object') {
                each(opts, function (key, value) {
                    role.set(element, key, value);
                });

                // Or this is a get if we have a string and no props
            } else {
                    return role.get(element, opts);
                }

        return role;
    };

    role._map = {};

    each(methods, function (name, method) {
        role[name] = !utils.isObj(method) ? method : utils.copy(method);
    });

    /*
        Map value keys or generate new Role with updated map
         Getter:
            @param [string]: Key to map
            @return [string]: Mapped key, or key if no mapped key found
         Setter: 
            @param [object]: Map of Actor keys -> Role keys
            @return [Role]: New Role with unique map
    */
    role.map = function (values) {
        // If this is a string, get mapped value
        // Otherwise this is a map, duplicated role with updated map
        return utils.isString(values) ? this._map[values] || values : createRole(this, values);
    };

    return role;
};

/*
    Create a new role

    @param [object]: Optional methods and props to add
    @param [valuesToMap]: Override existing map with these values
    @return [Role]: New Role
*/
var createRole = function (methods, values) {
    var newRole = new Role(methods);

    each(values, function (key, value) {
        newRole._map[key] = value;
    });

    return newRole;
};

exports = Role;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb2xlcy9Sb2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFDLEFBaUJ0QixJQUFJLElBQUksR0FBRyxVQUFVLE9BQU8sRUFBRTtBQUMxQixRQUFJLElBQUksR0FBRyxVQUFVLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3RDLFlBQUksVUFBVSxHQUFHLE9BQU8sSUFBSTs7O0FBQUMsQUFHN0IsWUFBSSxVQUFVLEtBQUssUUFBUSxJQUFJLElBQUksRUFBRTtBQUNqQyxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzs7O0FBQUMsU0FHakMsTUFBTSxJQUFJLFVBQVUsS0FBSyxRQUFRLEVBQUU7QUFDaEMsb0JBQUksQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQ3ZCLHdCQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ2pDLENBQUM7OztBQUFDLGFBR04sTUFBTTtBQUNILDJCQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNsQzs7QUFFRCxlQUFPLElBQUksQ0FBQztLQUNmLENBQUM7O0FBRUYsUUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7O0FBRWYsUUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxNQUFNLEVBQUU7QUFDbEMsWUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEFBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3JFLENBQUM7Ozs7Ozs7Ozs7O0FBQUMsQUFjSCxRQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsTUFBTSxFQUFFOzs7QUFHekIsZUFBTyxBQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM1RixDQUFDOztBQUVGLFdBQU8sSUFBSSxDQUFDO0NBQ2Y7Ozs7Ozs7OztBQUFDLEFBU0YsSUFBSSxVQUFVLEdBQUcsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQ3hDLFFBQUksT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVoQyxRQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUMvQixlQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUM3QixDQUFDLENBQUM7O0FBRUgsV0FBTyxPQUFPLENBQUM7Q0FDbEIsQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyIsImZpbGUiOiJSb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG52YXIgZWFjaCA9IHV0aWxzLmVhY2g7XG5cbi8qXG4gICAgUm9sZSBjbGFzcyBjb25zdHJ1Y3RvclxuXG4gICAgQHBhcmFtIFtvYmplY3RdOiBPcHRpb25hbCBtZXRob2RzIGFuZCBwcm9wcyB0byBhZGQ6XG4gICAgICAgIG5hbWUgW3N0cmluZ106ICAgICAgTmFtZSBvZiBnZW5lcmF0ZWQgZ2V0dGVyL3NldHRlciBtZXRob2Qgb24gQWN0b3JcbiAgICAgICAgX21hcCBbb2JqZWN0XTogICAgICBNYXAgQWN0b3IgdmFsdWVzIHRvIHRoZXNlIHZhbHVlcyBmb3IgdGhpcyBSb2xlXG4gICAgICAgIF90eXBlTWFwIFtvYmplY3RdOiAgTWFwIHZhbHVlcyB0byB2YWx1ZSB0eXBlc1xuICAgICAgICBpbml0IFtmdW5jdGlvbl06ICAgIENhbGxiYWNrIHRvIHJ1biB3aGVuIHRoaXMgUm9sZSBpcyBhZGRlZCB0byBhbiBBY3RvclxuICAgICAgICBzdGFydCBbZnVuY3Rpb25dOiAgIENhbGxiYWNrIHRvIHJ1biB3aGVuIGhvc3QgQWN0b3Igc3RhcnRzIGFuIGFjdGlvblxuICAgICAgICBjb21wbGV0ZSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBydW4gd2hlbiBhY3Rpb24gY29tcGxldGVzXG4gICAgICAgIGZyYW1lIFtmdW5jdGlvbl06ICAgQ2FsbGJhY2sgdG8gZmlyZSBvbmNlIHBlciBmcmFtZVxuICAgICAgICB1cGRhdGUgW2Z1bmN0aW9uXTogIENhbGxiYWNrIHRvIGZpcmUgd2hlbiB2YWx1ZXMgY2hhbmdlXG4gICAgICAgIGdldCBbZnVuY3Rpb25dOiAgICAgUmVhZCB2YWx1ZSBmcm9tIGFjdHVhbCBlbGVtZW50XG4gICAgICAgIHNldCBbZnVuY3Rpb25dOiAgICAgU2V0IHZhbHVlIG9uIGFjdHVhbCBlbGVtZW50XG4qL1xudmFyIFJvbGUgPSBmdW5jdGlvbiAobWV0aG9kcykge1xuICAgIHZhciByb2xlID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdHMsIHByb3ApIHtcbiAgICAgICAgdmFyIHR5cGVPZk9wdHMgPSB0eXBlb2Ygb3B0cztcblxuICAgICAgICAvLyBTZXQgc2luZ2xlLCBpZiB0aGlzIGlzIGEgc3RyaW5nIGFuZCB3ZSBoYXZlIGEgcHJvcGVydHlcbiAgICAgICAgaWYgKHR5cGVPZk9wdHMgPT09ICdzdHJpbmcnICYmIHByb3ApIHtcbiAgICAgICAgICAgIHJvbGUuc2V0KGVsZW1lbnQsIG9wdHMsIHByb3ApO1xuICAgICAgICBcbiAgICAgICAgLy8gU2V0IG11bHRpLCBpZiB0aGlzIGlzIGFuIG9iamVjdFxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVPZk9wdHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBlYWNoKG9wdHMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgcm9sZS5zZXQoZWxlbWVudCwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIHRoaXMgaXMgYSBnZXQgaWYgd2UgaGF2ZSBhIHN0cmluZyBhbmQgbm8gcHJvcHNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByb2xlLmdldChlbGVtZW50LCBvcHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByb2xlO1xuICAgIH07XG5cbiAgICByb2xlLl9tYXAgPSB7fTtcblxuICAgIGVhY2gobWV0aG9kcywgZnVuY3Rpb24gKG5hbWUsIG1ldGhvZCkge1xuICAgICAgICByb2xlW25hbWVdID0gKCF1dGlscy5pc09iaihtZXRob2QpKSA/IG1ldGhvZCA6IHV0aWxzLmNvcHkobWV0aG9kKTtcbiAgICB9KTtcblxuXG4gICAgLypcbiAgICAgICAgTWFwIHZhbHVlIGtleXMgb3IgZ2VuZXJhdGUgbmV3IFJvbGUgd2l0aCB1cGRhdGVkIG1hcFxuXG4gICAgICAgIEdldHRlcjpcbiAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIG1hcFxuICAgICAgICAgICAgQHJldHVybiBbc3RyaW5nXTogTWFwcGVkIGtleSwgb3Iga2V5IGlmIG5vIG1hcHBlZCBrZXkgZm91bmRcblxuICAgICAgICBTZXR0ZXI6IFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBNYXAgb2YgQWN0b3Iga2V5cyAtPiBSb2xlIGtleXNcbiAgICAgICAgICAgIEByZXR1cm4gW1JvbGVdOiBOZXcgUm9sZSB3aXRoIHVuaXF1ZSBtYXBcbiAgICAqL1xuICAgIHJvbGUubWFwID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgc3RyaW5nLCBnZXQgbWFwcGVkIHZhbHVlXG4gICAgICAgIC8vIE90aGVyd2lzZSB0aGlzIGlzIGEgbWFwLCBkdXBsaWNhdGVkIHJvbGUgd2l0aCB1cGRhdGVkIG1hcFxuICAgICAgICByZXR1cm4gKHV0aWxzLmlzU3RyaW5nKHZhbHVlcykpID8gdGhpcy5fbWFwW3ZhbHVlc10gfHwgdmFsdWVzIDogY3JlYXRlUm9sZSh0aGlzLCB2YWx1ZXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9sZTtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgbmV3IHJvbGVcblxuICAgIEBwYXJhbSBbb2JqZWN0XTogT3B0aW9uYWwgbWV0aG9kcyBhbmQgcHJvcHMgdG8gYWRkXG4gICAgQHBhcmFtIFt2YWx1ZXNUb01hcF06IE92ZXJyaWRlIGV4aXN0aW5nIG1hcCB3aXRoIHRoZXNlIHZhbHVlc1xuICAgIEByZXR1cm4gW1JvbGVdOiBOZXcgUm9sZVxuKi9cbnZhciBjcmVhdGVSb2xlID0gZnVuY3Rpb24gKG1ldGhvZHMsIHZhbHVlcykge1xuICAgIHZhciBuZXdSb2xlID0gbmV3IFJvbGUobWV0aG9kcyk7XG5cbiAgICBlYWNoKHZhbHVlcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbmV3Um9sZS5fbWFwW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdSb2xlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb2xlOyJdfQ==
return exports;
})();
var __small$_15 = (function() {
var exports = {};
"use strict";

var Role = __small$_26;
var each = __small$_35.each;

var attrRole = new Role({
    update: function (state) {
        var actor = this;

        each(state, function (key, value) {
            attrRole.set(actor.element, key, value);
        });
    },

    get: function (element, key) {
        return element.getAttribute(key);
    },

    set: function (element, key, value) {
        element.setAttribute(key, value);
    }
});

exports = attrRole;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9hdHRyL2F0dHJSb2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDOztBQUUzQyxJQUFJLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQztBQUNwQixVQUFNLEVBQUUsVUFBVSxLQUFLLEVBQUU7QUFDckIsWUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDOztBQUVqQixZQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUM5QixvQkFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzQyxDQUFDLENBQUM7S0FDTjs7QUFFRCxPQUFHLEVBQUUsVUFBVSxPQUFPLEVBQUUsR0FBRyxFQUFFO0FBQ3pCLGVBQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNwQzs7QUFFRCxPQUFHLEVBQUUsVUFBVSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNoQyxlQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNwQztDQUNKLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyIsImZpbGUiOiJhdHRyUm9sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUm9sZSA9IHJlcXVpcmUoJy4uL1JvbGUnKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaDtcblxudmFyIGF0dHJSb2xlID0gbmV3IFJvbGUoe1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBhY3RvciA9IHRoaXM7XG5cbiAgICAgICAgZWFjaChzdGF0ZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGF0dHJSb2xlLnNldChhY3Rvci5lbGVtZW50LCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldDogZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbiAoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhdHRyUm9sZTtcblxuIl19
return exports;
})();
var __small$_36 = (function() {
var exports = {};
'use strict';

exports = function (values, terms, delimiter, chop) {
    var combined = '',
        key = '',
        i = 0,
        numTerms = terms.length;

    for (; i < numTerms; i++) {
        key = terms[i];

        if (values.hasOwnProperty(key)) {
            combined += values[key] + delimiter;
        }
    }

    if (chop) {
        combined = combined.slice(0, -chop);
    }

    return combined;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUs7QUFDakQsUUFBSSxRQUFRLEdBQUcsRUFBRTtRQUNiLEdBQUcsR0FBRyxFQUFFO1FBQ1IsQ0FBQyxHQUFHLENBQUM7UUFDTCxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7QUFFNUIsV0FBTyxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWYsWUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzVCLG9CQUFRLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUN2QztLQUNKOztBQUVELFFBQUksSUFBSSxFQUFFO0FBQ04sZ0JBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZDOztBQUVELFdBQU8sUUFBUSxDQUFDO0NBQ25CLENBQUMiLCJmaWxlIjoiY3JlYXRlLWRlbGltaXRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKHZhbHVlcywgdGVybXMsIGRlbGltaXRlciwgY2hvcCkgPT4ge1xuICAgIHZhciBjb21iaW5lZCA9ICcnLFxuICAgICAgICBrZXkgPSAnJyxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuXG4gICAgZm9yICg7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICAgIGtleSA9IHRlcm1zW2ldO1xuXG4gICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY29tYmluZWQgKz0gdmFsdWVzW2tleV0gKyBkZWxpbWl0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hvcCkge1xuICAgICAgICBjb21iaW5lZCA9IGNvbWJpbmVkLnNsaWNlKDAsIC1jaG9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluZWQ7XG59OyJdfQ==
return exports;
})();
var __small$_38 = (function() {
var exports = {};
"use strict";

exports = function (value, prefix) {
  return prefix + "(" + value + ")";
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFDLEtBQUssRUFBRSxNQUFNO1NBQVEsTUFBTSxTQUFJLEtBQUs7Q0FBRyxDQUFDIiwiZmlsZSI6ImZ1bmN0aW9uLWNyZWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKHZhbHVlLCBwcmVmaXgpID0+IGAke3ByZWZpeH0oJHt2YWx1ZX0pYDsiXX0=
return exports;
})();
var __small$_39 = (function() {
var exports = {};
'use strict';

exports = {
    color: {
        min: 0,
        max: 255,
        round: true
    },
    opacity: {
        min: 0,
        max: 1
    },
    percent: {
        min: 0,
        max: 100,
        unit: '%'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNiLFNBQUssRUFBRTtBQUNILFdBQUcsRUFBRSxDQUFDO0FBQ04sV0FBRyxFQUFFLEdBQUc7QUFDUixhQUFLLEVBQUUsSUFBSTtLQUNkO0FBQ0QsV0FBTyxFQUFFO0FBQ0wsV0FBRyxFQUFFLENBQUM7QUFDTixXQUFHLEVBQUUsQ0FBQztLQUNUO0FBQ0QsV0FBTyxFQUFFO0FBQ0wsV0FBRyxFQUFFLENBQUM7QUFDTixXQUFHLEVBQUUsR0FBRztBQUNSLFlBQUksRUFBRSxHQUFHO0tBQ1o7Q0FDSixDQUFDIiwiZmlsZSI6ImRlZmF1bHQtcHJvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjb2xvcjoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMjU1LFxuICAgICAgICByb3VuZDogdHJ1ZVxuICAgIH0sXG4gICAgb3BhY2l0eToge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMVxuICAgIH0sXG4gICAgcGVyY2VudDoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMTAwLFxuICAgICAgICB1bml0OiAnJSdcbiAgICB9XG59O1xuIl19
return exports;
})();
var __small$_40 = (function() {
var exports = {};
'use strict';

var X = 'X',
    Y = 'Y',
    ALPHA = 'Alpha',
    terms = {
    colors: ['Red', 'Green', 'Blue', ALPHA],
    positions: [X, Y, 'Z'],
    dimensions: ['Top', 'Right', 'Bottom', 'Left'],
    shadow: [X, Y, 'Radius', 'Spread', 'Color'],
    hsl: ['Hue', 'Saturation', 'Lightness', ALPHA]
};

exports = terms;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxDQUFDLEdBQUcsR0FBRztJQUNQLENBQUMsR0FBRyxHQUFHO0lBQ1AsS0FBSyxHQUFHLE9BQU87SUFFZixLQUFLLEdBQUc7QUFDSixVQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUM7QUFDdkMsYUFBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7QUFDdEIsY0FBVSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO0FBQzlDLFVBQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7QUFDM0MsT0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDO0NBQ2pELENBQUM7O0FBRU4sTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMiLCJmaWxlIjoiZGljdGlvbmFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBYID0gJ1gnLFxuICAgIFkgPSAnWScsXG4gICAgQUxQSEEgPSAnQWxwaGEnLFxuXG4gICAgdGVybXMgPSB7XG4gICAgICAgIGNvbG9yczogWydSZWQnLCAnR3JlZW4nLCAnQmx1ZScsIEFMUEhBXSxcbiAgICAgICAgcG9zaXRpb25zOiBbWCwgWSwgJ1onXSxcbiAgICAgICAgZGltZW5zaW9uczogWydUb3AnLCAnUmlnaHQnLCAnQm90dG9tJywgJ0xlZnQnXSxcbiAgICAgICAgc2hhZG93OiBbWCwgWSwgJ1JhZGl1cycsICdTcHJlYWQnLCAnQ29sb3InXSxcbiAgICAgICAgaHNsOiBbJ0h1ZScsICdTYXR1cmF0aW9uJywgJ0xpZ2h0bmVzcycsIEFMUEhBXVxuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gdGVybXM7Il19
return exports;
})();
var __small$_41 = (function() {
var exports = {};
'use strict';

var isString = __small$_35.isString;

exports = function (value) {
  return isString(value) ? value.split(' ') : [value];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsUUFBUSxDQUFDOztBQUVyRCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUEsS0FBSztTQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0NBQUEsQ0FBQyIsImZpbGUiOiJzcGxpdC1zcGFjZS1kZWxpbWl0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpc1N0cmluZyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmlzU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdOyJdfQ==
return exports;
})();
var __small$_43 = (function() {
var exports = {};
'use strict';

var TRANSLATE = 'translate';

exports = {
    x: TRANSLATE + 'X',
    y: TRANSLATE + 'Y',
    z: TRANSLATE + 'Z'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9jc3MvbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxTQUFTLEdBQUcsV0FBVyxDQUFDOztBQUU1QixNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2IsS0FBQyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ2xCLEtBQUMsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUNsQixLQUFDLEVBQUUsU0FBUyxHQUFHLEdBQUc7Q0FDckIsQ0FBQyIsImZpbGUiOiJtYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVFJBTlNMQVRFID0gJ3RyYW5zbGF0ZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHg6IFRSQU5TTEFURSArICdYJyxcbiAgICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gICAgejogVFJBTlNMQVRFICsgJ1onXG59OyJdfQ==
return exports;
})();
var __small$_18 = (function() {
var exports = {};
"use strict";

var Role = __small$_26;
var attrRole = __small$_15;
var each = __small$_35.each;

/*
    Convert percentage to pixels
    
    @param [number]: Percentage of total length
    @param [number]: Total length
*/
var percentToPixels = function (percentage, length) {
    return parseFloat(percentage) / 100 * length + 'px';
};

/*
    Create styles
    
    @param [object]: SVG Path properties
    @param [object]: Length of path
    @returns [object]: Key/value pairs of valid CSS properties
*/
var createStyles = function (props, length) {
    var hasDashArray = false,
        dashArrayStyles = {
        length: 0,
        spacing: length + 'px'
    },
        styles = {};

    each(props, function (key, value) {
        key = SVGDrawPath._map[key] || key;

        switch (key) {
            case 'length':
            case 'spacing':
                hasDashArray = true;
                dashArrayStyles[key] = percentToPixels(value, length);
                break;
            case 'offset':
                styles['stroke-dashoffset'] = percentToPixels(-value, length);
                break;
            default:
                styles[key] = value;
        }
    });

    if (hasDashArray) {
        styles['stroke-dasharray'] = dashArrayStyles.length + ' ' + dashArrayStyles.spacing;
    }

    return styles;
};

/*
    Draw Path role
*/
var SVGDrawPath = new Role({
    _map: ((function() {
var exports = {};
'use strict';

var STROKE = 'stroke';

exports = {
    opacity: STROKE + '-opacity',
    width: STROKE + '-width',
    miterlimit: STROKE + '-miterlimit'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9wYXRoL21hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQzs7QUFFdEIsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNiLFdBQU8sRUFBRSxNQUFNLEdBQUcsVUFBVTtBQUM1QixTQUFLLEVBQUUsTUFBTSxHQUFHLFFBQVE7QUFDeEIsY0FBVSxFQUFFLE1BQU0sR0FBRyxhQUFhO0NBQ3JDLENBQUMiLCJmaWxlIjoibWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNUUk9LRSA9ICdzdHJva2UnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBvcGFjaXR5OiBTVFJPS0UgKyAnLW9wYWNpdHknLFxuICAgIHdpZHRoOiBTVFJPS0UgKyAnLXdpZHRoJyxcbiAgICBtaXRlcmxpbWl0OiBTVFJPS0UgKyAnLW1pdGVybGltaXQnXG59OyJdfQ==
return exports;
})()),

    _typeMap: {
        stroke: 'color',
        d: 'complex'
    },

    init: function () {
        this.pathLength = this.element.getTotalLength();
    },

    /*
        Update `path` styles and if `element` is present, set
        x, y and rotation
    */
    update: function (state) {
        attrRole.update.call(this, createStyles(state, this.pathLength));
    }
});

exports = SVGDrawPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9wYXRoL2RyYXdQYXRoUm9sZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUk7Ozs7Ozs7O0FBQUMsQUFRM0MsSUFBSSxlQUFlLEdBQUcsVUFBVSxVQUFVLEVBQUUsTUFBTSxFQUFFO0FBQ2hELFdBQU8sQUFBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7Q0FDekQ7Ozs7Ozs7OztBQUFDLEFBU0YsSUFBSSxZQUFZLEdBQUcsVUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ3hDLFFBQUksWUFBWSxHQUFHLEtBQUs7UUFDcEIsZUFBZSxHQUFHO0FBQ2QsY0FBTSxFQUFFLENBQUM7QUFDVCxlQUFPLEVBQUUsTUFBTSxHQUFHLElBQUk7S0FDekI7UUFDRCxNQUFNLEdBQUcsRUFBRSxDQUFDOztBQUVoQixRQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUM5QixXQUFHLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7O0FBRW5DLGdCQUFRLEdBQUc7QUFDUCxpQkFBSyxRQUFRLENBQUM7QUFDZCxpQkFBSyxTQUFTO0FBQ1YsNEJBQVksR0FBRyxJQUFJLENBQUM7QUFDcEIsK0JBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3RELHNCQUFNO0FBQUEsQUFDVixpQkFBSyxRQUFRO0FBQ1Qsc0JBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5RCxzQkFBTTtBQUFBLEFBQ1Y7QUFDSSxzQkFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUFBLFNBQzNCO0tBQ0osQ0FBQyxDQUFDOztBQUVILFFBQUksWUFBWSxFQUFFO0FBQ2QsY0FBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQztLQUN2Rjs7QUFFRCxXQUFPLE1BQU0sQ0FBQztDQUNqQjs7Ozs7QUFBQyxBQUtGLElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDO0FBQ3ZCLFFBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDOztBQUV0QixZQUFRLEVBQUU7QUFDTixjQUFNLEVBQUUsT0FBTztBQUNmLFNBQUMsRUFBRSxTQUFTO0tBQ2Y7O0FBRUQsUUFBSSxFQUFFLFlBQVk7QUFDZCxZQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDbkQ7Ozs7OztBQU1ELFVBQU0sRUFBRSxVQUFVLEtBQUssRUFBRTtBQUNyQixnQkFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7S0FDcEU7Q0FDSixDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMiLCJmaWxlIjoiZHJhd1BhdGhSb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSb2xlID0gcmVxdWlyZSgnLi4vUm9sZScpO1xudmFyIGF0dHJSb2xlID0gcmVxdWlyZSgnLi4vYXR0ci9hdHRyUm9sZScpO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoO1xuXG4vKlxuICAgIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnRhZ2UsIGxlbmd0aCkge1xuICAgIHJldHVybiAocGFyc2VGbG9hdChwZXJjZW50YWdlKSAvIDEwMCkgKiBsZW5ndGggKyAncHgnO1xufTtcblxuLypcbiAgICBDcmVhdGUgc3R5bGVzXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBTVkcgUGF0aCBwcm9wZXJ0aWVzXG4gICAgQHBhcmFtIFtvYmplY3RdOiBMZW5ndGggb2YgcGF0aFxuICAgIEByZXR1cm5zIFtvYmplY3RdOiBLZXkvdmFsdWUgcGFpcnMgb2YgdmFsaWQgQ1NTIHByb3BlcnRpZXNcbiovXG52YXIgY3JlYXRlU3R5bGVzID0gZnVuY3Rpb24gKHByb3BzLCBsZW5ndGgpIHtcbiAgICB2YXIgaGFzRGFzaEFycmF5ID0gZmFsc2UsXG4gICAgICAgIGRhc2hBcnJheVN0eWxlcyA9IHtcbiAgICAgICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGVzID0ge307XG5cbiAgICBlYWNoKHByb3BzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBrZXkgPSBTVkdEcmF3UGF0aC5fbWFwW2tleV0gfHwga2V5O1xuXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGRhc2hBcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBkYXNoQXJyYXlTdHlsZXMuc3BhY2luZztcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xufTtcblxuLypcbiAgICBEcmF3IFBhdGggcm9sZVxuKi9cbnZhciBTVkdEcmF3UGF0aCA9IG5ldyBSb2xlKHtcbiAgICBfbWFwOiByZXF1aXJlKCcuL21hcCcpLFxuXG4gICAgX3R5cGVNYXA6IHtcbiAgICAgICAgc3Ryb2tlOiAnY29sb3InLFxuICAgICAgICBkOiAnY29tcGxleCdcbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBhdGhMZW5ndGggPSB0aGlzLmVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIGBwYXRoYCBzdHlsZXMgYW5kIGlmIGBlbGVtZW50YCBpcyBwcmVzZW50LCBzZXRcbiAgICAgICAgeCwgeSBhbmQgcm90YXRpb25cbiAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGF0dHJSb2xlLnVwZGF0ZS5jYWxsKHRoaXMsIGNyZWF0ZVN0eWxlcyhzdGF0ZSwgdGhpcy5wYXRoTGVuZ3RoKSk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU1ZHRHJhd1BhdGg7Il19
return exports;
})();
var __small$_37 = (function() {
var exports = {};
'use strict';

var splitCommaDelimited = ((function() {
var exports = {};
'use strict';

var isString = __small$_35.isString;

exports = function (value) {
  return isString(value) ? value.split(/,\s*/) : [value];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvc3BsaXQtY29tbWEtZGVsaW1pdGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsUUFBUSxDQUFDOztBQUVyRCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUEsS0FBSztTQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0NBQUEsQ0FBQyIsImZpbGUiOiJzcGxpdC1jb21tYS1kZWxpbWl0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpc1N0cmluZyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmlzU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbHVlID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTsiXX0=
return exports;
})()),
    functionBreak = ((function() {
var exports = {};
'use strict';

exports = function (value) {
  return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tYnJlYWsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUEsS0FBSztTQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUFBLENBQUMiLCJmaWxlIjoiZnVuY3Rpb24tYnJlYWsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHZhbHVlID0+IHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTsiXX0=
return exports;
})());

exports = function (value, terms) {
    var splitValue = {},
        numTerms = terms.length,
        colors = splitCommaDelimited(functionBreak(value)),
        i = 0;

    for (; i < numTerms; i++) {
        splitValue[terms[i]] = colors[i] !== undefined ? colors[i] : 1;
    }

    return splitValue;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZ2V0LWNvbG9yLXZhbHVlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksbUJBQW1CLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDO0lBQ3hELGFBQWEsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7QUFFaEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFDLEtBQUssRUFBRSxLQUFLLEVBQUs7QUFDL0IsUUFBSSxVQUFVLEdBQUcsRUFBRTtRQUNmLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTTtRQUN2QixNQUFNLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRVYsV0FBTyxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3RCLGtCQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEU7O0FBRUQsV0FBTyxVQUFVLENBQUM7Q0FDckIsQ0FBQyIsImZpbGUiOiJnZXQtY29sb3ItdmFsdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL3NwbGl0LWNvbW1hLWRlbGltaXRlZCcpLFxuICAgIGZ1bmN0aW9uQnJlYWsgPSByZXF1aXJlKCcuL2Z1bmN0aW9uLWJyZWFrJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKHZhbHVlLCB0ZXJtcykgPT4ge1xuICAgIHZhciBzcGxpdFZhbHVlID0ge30sXG4gICAgICAgIG51bVRlcm1zID0gdGVybXMubGVuZ3RoLFxuICAgICAgICBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGZ1bmN0aW9uQnJlYWsodmFsdWUpKSxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBmb3IgKDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAgc3BsaXRWYWx1ZVt0ZXJtc1tpXV0gPSAoY29sb3JzW2ldICE9PSB1bmRlZmluZWQpID8gY29sb3JzW2ldIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbn07Il19
return exports;
})();
var __small$_6 = (function() {
var exports = {};
'use strict';

var createDelimited = __small$_36,
    getColorValues = __small$_37,
    functionCreate = __small$_38,
    defaultProps = __small$_39,
    terms = __small$_40.hsl;

exports = {

    defaultProps: {
        Hue: {
            min: 0,
            max: 360
        },
        Saturation: defaultProps.percent,
        Lightness: defaultProps.percent,
        Alpha: defaultProps.opacity
    },

    test: function (value) {
        return value && value.indexOf('hsl') > -1;
    },

    split: function (value) {
        return getColorValues(value, terms);
    },

    combine: function (values) {
        return functionCreate(createDelimited(values, terms, ', ', 2), 'hsla');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUM7SUFDNUQsY0FBYyxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztJQUMzRCxjQUFjLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDO0lBQzFELFlBQVksR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUM7SUFDbEQsS0FBSyxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQzs7QUFFakQsTUFBTSxDQUFDLE9BQU8sR0FBRzs7QUFFYixnQkFBWSxFQUFFO0FBQ1YsV0FBRyxFQUFFO0FBQ0QsZUFBRyxFQUFFLENBQUM7QUFDTixlQUFHLEVBQUUsR0FBRztTQUNYO0FBQ0Qsa0JBQVUsRUFBRSxZQUFZLENBQUMsT0FBTztBQUNoQyxpQkFBUyxFQUFFLFlBQVksQ0FBQyxPQUFPO0FBQy9CLGFBQUssRUFBRSxZQUFZLENBQUMsT0FBTztLQUM5Qjs7QUFFRCxRQUFJLEVBQUUsVUFBQSxLQUFLO2VBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQUM7O0FBRW5ELFNBQUssRUFBRSxVQUFBLEtBQUs7ZUFBSSxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztLQUFBOztBQUU1QyxXQUFPLEVBQUUsVUFBQSxNQUFNO2VBQUksY0FBYyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7S0FBQTtDQUNyRixDQUFDIiwiZmlsZSI6ImhzbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgZ2V0Q29sb3JWYWx1ZXMgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzJyksXG4gICAgZnVuY3Rpb25DcmVhdGUgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1jcmVhdGUnKSxcbiAgICBkZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKSxcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLmhzbDtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgSHVlOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDM2MFxuICAgICAgICB9LFxuICAgICAgICBTYXR1cmF0aW9uOiBkZWZhdWx0UHJvcHMucGVyY2VudCxcbiAgICAgICAgTGlnaHRuZXNzOiBkZWZhdWx0UHJvcHMucGVyY2VudCxcbiAgICAgICAgQWxwaGE6IGRlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IHZhbHVlID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xKSxcbiAgICBcbiAgICBzcGxpdDogdmFsdWUgPT4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIHRlcm1zKSxcblxuICAgIGNvbWJpbmU6IHZhbHVlcyA9PiBmdW5jdGlvbkNyZWF0ZShjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJywgJywgMiksICdoc2xhJylcbn07Il19
return exports;
})();
var __small$_7 = (function() {
var exports = {};
'use strict';

var createDelimited = __small$_36,
    getColorValues = __small$_37,
    functionCreate = __small$_38,
    defaultProps = __small$_39,
    colorDefaults = defaultProps.color,
    terms = __small$_40.colors;

exports = {

    defaultProps: {
        Red: colorDefaults,
        Green: colorDefaults,
        Blue: colorDefaults,
        Alpha: defaultProps.opacity
    },

    test: function (value) {
        return value && value.indexOf('rgb') > -1;
    },

    split: function (value) {
        return getColorValues(value, terms);
    },

    combine: function (values) {
        return functionCreate(createDelimited(values, terms, ', ', 2), 'rgba');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9yZ2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUM7SUFDNUQsY0FBYyxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztJQUMzRCxjQUFjLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDO0lBQzFELFlBQVksR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUM7SUFDbEQsYUFBYSxHQUFHLFlBQVksQ0FBQyxLQUFLO0lBQ2xDLEtBQUssR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxNQUFNLENBQUM7O0FBRXBELE1BQU0sQ0FBQyxPQUFPLEdBQUc7O0FBRWIsZ0JBQVksRUFBRTtBQUNWLFdBQUcsRUFBRSxhQUFhO0FBQ2xCLGFBQUssRUFBRSxhQUFhO0FBQ3BCLFlBQUksRUFBRSxhQUFhO0FBQ25CLGFBQUssRUFBRSxZQUFZLENBQUMsT0FBTztLQUM5Qjs7QUFFRCxRQUFJLEVBQUUsVUFBQSxLQUFLO2VBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQUM7O0FBRW5ELFNBQUssRUFBRSxVQUFBLEtBQUs7ZUFBSSxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztLQUFBOztBQUU1QyxXQUFPLEVBQUUsVUFBQSxNQUFNO2VBQUksY0FBYyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7S0FBQTtDQUNyRixDQUFDIiwiZmlsZSI6InJnYi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgZ2V0Q29sb3JWYWx1ZXMgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzJyksXG4gICAgZnVuY3Rpb25DcmVhdGUgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1jcmVhdGUnKSxcbiAgICBkZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKSxcbiAgICBjb2xvckRlZmF1bHRzID0gZGVmYXVsdFByb3BzLmNvbG9yLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykuY29sb3JzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBSZWQ6IGNvbG9yRGVmYXVsdHMsXG4gICAgICAgIEdyZWVuOiBjb2xvckRlZmF1bHRzLFxuICAgICAgICBCbHVlOiBjb2xvckRlZmF1bHRzLFxuICAgICAgICBBbHBoYTogZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogdmFsdWUgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ3JnYicpID4gLTEpLFxuICAgIFxuICAgIHNwbGl0OiB2YWx1ZSA9PiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgdGVybXMpLFxuXG4gICAgY29tYmluZTogdmFsdWVzID0+IGZ1bmN0aW9uQ3JlYXRlKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnLCAnLCAyKSwgJ3JnYmEnKVxufTsiXX0=
return exports;
})();
var __small$_8 = (function() {
var exports = {};
'use strict';

var rgb = __small$_7;

exports = {

    defaultProps: rgb.defaultProps,

    test: function (value) {
        return value && value.indexOf('#') > -1;
    },

    split: function (value) {
        var r, g, b;

        // If we have 6 characters, ie #FF0000
        if (value.length > 4) {
            r = value.substr(1, 2);
            g = value.substr(3, 2);
            b = value.substr(5, 2);

            // Or we have 3 characters, ie #F00
        } else {
                r = value.substr(1, 1);
                g = value.substr(2, 1);
                b = value.substr(3, 1);
                r += r;
                g += g;
                b += b;
            }

        return {
            Red: parseInt(r, 16),
            Green: parseInt(g, 16),
            Blue: parseInt(b, 16),
            Alpha: 1
        };
    },

    combine: function (values) {
        return rgb.combine(values);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9oZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRTNCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7O0FBRWIsZ0JBQVksRUFBRSxHQUFHLENBQUMsWUFBWTs7QUFFOUIsUUFBSSxFQUFFLFVBQUEsS0FBSztlQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUFDOztBQUVqRCxTQUFLLEVBQUUsVUFBQSxLQUFLLEVBQUk7QUFDWixZQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7O0FBQUMsQUFHWixZQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ2xCLGFBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QixhQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkIsYUFBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7O0FBQUMsU0FHMUIsTUFBTTtBQUNILGlCQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkIsaUJBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QixpQkFBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLGlCQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1AsaUJBQUMsSUFBSSxDQUFDLENBQUM7QUFDUCxpQkFBQyxJQUFJLENBQUMsQ0FBQzthQUNWOztBQUVELGVBQU87QUFDSCxlQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDcEIsaUJBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUN0QixnQkFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQ3JCLGlCQUFLLEVBQUUsQ0FBQztTQUNYLENBQUM7S0FDTDs7QUFFRCxXQUFPLEVBQUUsVUFBQSxNQUFNO2VBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7S0FBQTtDQUN6QyxDQUFDIiwiZmlsZSI6ImhleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogcmdiLmRlZmF1bHRQcm9wcyxcblxuICAgIHRlc3Q6IHZhbHVlID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCcjJykgPiAtMSksXG4gICAgXG4gICAgc3BsaXQ6IHZhbHVlID0+IHtcbiAgICAgICAgdmFyIHIsIGcsIGI7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAxKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDMsIDEpO1xuICAgICAgICAgICAgciArPSByO1xuICAgICAgICAgICAgZyArPSBnO1xuICAgICAgICAgICAgYiArPSBiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgICAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgICAgICAgIEFscGhhOiAxXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IHZhbHVlcyA9PiByZ2IuY29tYmluZSh2YWx1ZXMpXG59OyJdfQ==
return exports;
})();
var __small$_9 = (function() {
var exports = {};
'use strict';

var utils = __small$_35,
    rgb = __small$_7,
    hsl = __small$_6,
    hex = __small$_8,
    supported = [rgb, hsl, hex],
    numSupported = 3,
    runSupported = function (method, value) {
    for (var i = 0; i < numSupported; i++) {
        if (supported[i].test(value)) {
            return supported[i][method](value);
        }
    }
};

exports = {
    defaultProps: utils.merge(rgb.defaultProps, hsl.defaultProps),

    test: function (value) {
        return rgb.test(value) || hex.test(value) || hsl.test(value);
    },

    split: function (value) {
        return runSupported('split', value);
    },

    combine: function (values) {
        return values.Red !== undefined ? rgb.combine(values) : hsl.combine(values);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDL0IsR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDdEIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDdEIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDdEIsU0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDM0IsWUFBWSxHQUFHLENBQUM7SUFFaEIsWUFBWSxHQUFHLFVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUNwQyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ25DLFlBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUMxQixtQkFBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEM7S0FDSjtDQUNKLENBQUM7O0FBRU4sTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNiLGdCQUFZLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUM7O0FBRTdELFFBQUksRUFBRSxVQUFBLEtBQUs7ZUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FBQTs7QUFFcEUsU0FBSyxFQUFFLFVBQUEsS0FBSztlQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO0tBQUE7O0FBRTVDLFdBQU8sRUFBRSxVQUFBLE1BQU07ZUFBSSxBQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssU0FBUyxHQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7S0FBQTtDQUM1RixDQUFDIiwiZmlsZSI6ImNvbG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgcmdiID0gcmVxdWlyZSgnLi9yZ2InKSxcbiAgICBoc2wgPSByZXF1aXJlKCcuL2hzbCcpLFxuICAgIGhleCA9IHJlcXVpcmUoJy4vaGV4JyksXG4gICAgc3VwcG9ydGVkID0gW3JnYiwgaHNsLCBoZXhdLFxuICAgIG51bVN1cHBvcnRlZCA9IDMsXG5cbiAgICBydW5TdXBwb3J0ZWQgPSBmdW5jdGlvbiAobWV0aG9kLCB2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVN1cHBvcnRlZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3VwcG9ydGVkW2ldLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRlZFtpXVttZXRob2RdKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRlZmF1bHRQcm9wczogdXRpbHMubWVyZ2UocmdiLmRlZmF1bHRQcm9wcywgaHNsLmRlZmF1bHRQcm9wcyksXG5cbiAgICB0ZXN0OiB2YWx1ZSA9PiByZ2IudGVzdCh2YWx1ZSkgfHwgaGV4LnRlc3QodmFsdWUpIHx8IGhzbC50ZXN0KHZhbHVlKSxcblxuICAgIHNwbGl0OiB2YWx1ZSA9PiBydW5TdXBwb3J0ZWQoJ3NwbGl0JywgdmFsdWUpLFxuXG4gICAgY29tYmluZTogdmFsdWVzID0+ICh2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQpID8gcmdiLmNvbWJpbmUodmFsdWVzKSA6IGhzbC5jb21iaW5lKHZhbHVlcylcbn07Il19
return exports;
})();
var __small$_64 = (function() {
var exports = {};
"use strict";

var positionTerms = __small$_40.positions,
    numPositionTerms = positionTerms.length,
    TRANSFORM_PERSPECTIVE = 'transformPerspective',
    SCALE = 'scale',
    ROTATE = 'rotate',
    terms = {
    funcs: ['translate', SCALE, ROTATE, 'skew', TRANSFORM_PERSPECTIVE],
    props: {} // objects are faster at direct lookups
};

// Create transform terms
(function () {
    var funcs = terms.funcs,
        props = terms.props,
        numFuncs = funcs.length,
        i = 0,
        createProps = function (funcName) {
        var j = 0;

        for (; j < numPositionTerms; j++) {
            props[funcName + positionTerms[j]] = true;
        }
    };

    // Manually add skew and transform perspective 
    props[ROTATE] = props[SCALE] = props[TRANSFORM_PERSPECTIVE] = true;

    // Loop over each function name and create function/property terms
    for (; i < numFuncs; i++) {
        createProps(funcs[i]);
    }
})();

exports = terms;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9jc3MvdHJhbnNmb3JtLWRpY3Rpb25hcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLFNBQVM7SUFDMUUsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLE1BQU07SUFFdkMscUJBQXFCLEdBQUcsc0JBQXNCO0lBQzlDLEtBQUssR0FBRyxPQUFPO0lBQ2YsTUFBTSxHQUFHLFFBQVE7SUFDakIsS0FBSyxHQUFHO0FBQ0osU0FBSyxFQUFFLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLHFCQUFxQixDQUFDO0FBQ2xFLFNBQUssRUFBRSxFQUFFO0FBQUEsQ0FDWjs7O0FBQUMsQUFHTixDQUFDLFlBQVk7QUFDVCxRQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSztRQUNuQixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUs7UUFDbkIsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNO1FBQ3ZCLENBQUMsR0FBRyxDQUFDO1FBRUwsV0FBVyxHQUFHLFVBQVUsUUFBUSxFQUFFO0FBQzlCLFlBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFVixlQUFPLENBQUMsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM5QixpQkFBSyxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDN0M7S0FDSjs7O0FBQUMsQUFHTixTQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLElBQUk7OztBQUFDLEFBR25FLFdBQU8sQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN0QixtQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3pCO0NBQ0osQ0FBQSxFQUFHLENBQUM7O0FBRUwsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMiLCJmaWxlIjoidHJhbnNmb3JtLWRpY3Rpb25hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIHBvc2l0aW9uVGVybXMgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5JykucG9zaXRpb25zLFxuICAgIG51bVBvc2l0aW9uVGVybXMgPSBwb3NpdGlvblRlcm1zLmxlbmd0aCxcblxuICAgIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZScsXG4gICAgU0NBTEUgPSAnc2NhbGUnLFxuICAgIFJPVEFURSA9ICdyb3RhdGUnLFxuICAgIHRlcm1zID0ge1xuICAgICAgICBmdW5jczogWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV0sXG4gICAgICAgIHByb3BzOiB7fSAvLyBvYmplY3RzIGFyZSBmYXN0ZXIgYXQgZGlyZWN0IGxvb2t1cHNcbiAgICB9O1xuXG4vLyBDcmVhdGUgdHJhbnNmb3JtIHRlcm1zXG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciBmdW5jcyA9IHRlcm1zLmZ1bmNzLFxuICAgICAgICBwcm9wcyA9IHRlcm1zLnByb3BzLFxuICAgICAgICBudW1GdW5jcyA9IGZ1bmNzLmxlbmd0aCxcbiAgICAgICAgaSA9IDAsXG5cbiAgICAgICAgY3JlYXRlUHJvcHMgPSBmdW5jdGlvbiAoZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHZhciBqID0gMDtcblxuICAgICAgICAgICAgZm9yICg7IGogPCBudW1Qb3NpdGlvblRlcm1zOyBqKyspIHtcbiAgICAgICAgICAgICAgICBwcm9wc1tmdW5jTmFtZSArIHBvc2l0aW9uVGVybXNbal1dID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICBcbiAgICAvLyBNYW51YWxseSBhZGQgc2tldyBhbmQgdHJhbnNmb3JtIHBlcnNwZWN0aXZlICBcbiAgICBwcm9wc1tST1RBVEVdID0gcHJvcHNbU0NBTEVdID0gcHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG4gICAgXG4gICAgLy8gTG9vcCBvdmVyIGVhY2ggZnVuY3Rpb24gbmFtZSBhbmQgY3JlYXRlIGZ1bmN0aW9uL3Byb3BlcnR5IHRlcm1zXG4gICAgZm9yICg7IGkgPCBudW1GdW5jczsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BzKGZ1bmNzW2ldKTtcbiAgICB9XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRlcm1zOyJdfQ==
return exports;
})();
var __small$_16 = (function() {
var exports = {};
"use strict";

var Role = __small$_26;
var build = ((function() {
var exports = {};
"use strict";

var each = __small$_35.each,
    transformDictionary = __small$_64,
    transformProps = transformDictionary.props,
    TRANSLATE_Z = 'translateZ';

exports = function (output, cache) {
    var css = {},
        transform = '',
        transformHasZ = false;

    // Loop through output, check for transform properties
    each(output, function (key, rule) {
        // If this is a transform property, add to transform string
        if (transformProps[key]) {
            transform += key + '(' + rule + ')';
            transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;

            // Or just assign directly
        } else {
                if (rule !== cache[key]) {
                    cache[key] = css[key] = rule;
                }
            }
    });

    // If we have transform properties, add translateZ
    if (transform !== '') {
        if (!transformHasZ) {
            transform += ' ' + TRANSLATE_Z + '(0px)';
        }

        if (transform !== cache.transform) {
            css.transform = transform;
        }

        cache.transform = transform;
    }

    return css;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9jc3MvYnVpbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUk7SUFDdEMsbUJBQW1CLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZELGNBQWMsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLO0lBRTFDLFdBQVcsR0FBRyxZQUFZLENBQUM7O0FBRS9CLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQ3RDLFFBQUksR0FBRyxHQUFHLEVBQUU7UUFDUixTQUFTLEdBQUcsRUFBRTtRQUNkLGFBQWEsR0FBRyxLQUFLOzs7QUFBQyxBQUcxQixRQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsR0FBRyxFQUFFLElBQUksRUFBRTs7QUFFOUIsWUFBSSxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDckIscUJBQVMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7QUFDcEMseUJBQWEsR0FBRyxBQUFDLEdBQUcsS0FBSyxXQUFXLEdBQUksSUFBSSxHQUFHLGFBQWE7OztBQUFDLFNBR2hFLE1BQU07QUFDSCxvQkFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3JCLHlCQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztpQkFDaEM7YUFDSjtLQUNKLENBQUM7OztBQUFDLEFBR0gsUUFBSSxTQUFTLEtBQUssRUFBRSxFQUFFO0FBQ2xCLFlBQUksQ0FBQyxhQUFhLEVBQUU7QUFDaEIscUJBQVMsSUFBSSxHQUFHLEdBQUcsV0FBVyxHQUFHLE9BQU8sQ0FBQztTQUM1Qzs7QUFFRCxZQUFJLFNBQVMsS0FBSyxLQUFLLENBQUMsU0FBUyxFQUFFO0FBQy9CLGVBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQzdCOztBQUVELGFBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0tBQy9COztBQUVELFdBQU8sR0FBRyxDQUFDO0NBQ2QsQ0FBQyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2gsXG4gICAgdHJhbnNmb3JtRGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLWRpY3Rpb25hcnknKSxcbiAgICB0cmFuc2Zvcm1Qcm9wcyA9IHRyYW5zZm9ybURpY3Rpb25hcnkucHJvcHMsXG5cbiAgICBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3V0cHV0LCBjYWNoZSkge1xuICAgIHZhciBjc3MgPSB7fSxcbiAgICAgICAgdHJhbnNmb3JtID0gJycsXG4gICAgICAgIHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcbiAgICAgICAgXG4gICAgLy8gTG9vcCB0aHJvdWdoIG91dHB1dCwgY2hlY2sgZm9yIHRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgZWFjaChvdXRwdXQsIGZ1bmN0aW9uIChrZXksIHJ1bGUpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBwcm9wZXJ0eSwgYWRkIHRvIHRyYW5zZm9ybSBzdHJpbmdcbiAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybSArPSBrZXkgKyAnKCcgKyBydWxlICsgJyknO1xuICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IFRSQU5TTEFURV9aKSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgICAgICBcbiAgICAgICAgLy8gT3IganVzdCBhc3NpZ24gZGlyZWN0bHlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChydWxlICE9PSBjYWNoZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVba2V5XSA9IGNzc1trZXldID0gcnVsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSB0cmFuc2Zvcm0gcHJvcGVydGllcywgYWRkIHRyYW5zbGF0ZVpcbiAgICBpZiAodHJhbnNmb3JtICE9PSAnJykge1xuICAgICAgICBpZiAoIXRyYW5zZm9ybUhhc1opIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybSArPSAnICcgKyBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNmb3JtICE9PSBjYWNoZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIGNzcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNhY2hlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xufTsiXX0=
return exports;
})());

var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
var numPrefixes = prefixes.length;
var propertyNameCache = {};
var testElement;

/*
    Test style property for prefixed version
    
    @param [string]: Style property
    @return [string]: Cached property name
*/
var testPrefix = function (key) {
    testElement = testElement || document.createElement('div');

    if (propertyNameCache[key] === false) {
        return false;
    } else {
        propertyNameCache[key] = false;
    }

    for (var i = 0; i < numPrefixes; i++) {
        var prefix = prefixes[i],
            prefixed = prefix === '' ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);

        if (prefixed in testElement.style) {
            propertyNameCache[key] = prefixed;
        }
    }

    return propertyNameCache[key];
};

var cssRole = new Role({
    _map: __small$_43,
    _typeMap: ((function() {
var exports = {};
'use strict';

var COLOR = 'color',
    POSITIONS = 'positions',
    DIMENSIONS = 'dimensions',
    SCALE = 'scale',
    SHADOW = 'shadow',
    ANGLE = 'angle',
    ALPHA = 'alpha',
    PX = 'px';

exports = {
    // Color properties
    color: COLOR,
    backgroundColor: COLOR,
    outlineColor: COLOR,
    fill: COLOR,
    stroke: COLOR,
    // Border
    borderColor: COLOR,
    borderTopColor: COLOR,
    borderRightColor: COLOR,
    borderBottomColor: COLOR,
    borderLeftColor: COLOR,
    borderRadius: PX,
    // Dimensions
    margin: DIMENSIONS,
    padding: DIMENSIONS,
    width: PX,
    height: PX,
    // Positions
    backgroundPosition: POSITIONS,
    perspectiveOrigin: POSITIONS,
    transformOrigin: POSITIONS,
    // Shadows
    textShadow: SHADOW,
    boxShadow: SHADOW,
    // Transform properties
    rotate: ANGLE,
    rotateX: ANGLE,
    rotateY: ANGLE,
    rotateZ: ANGLE,
    scale: SCALE,
    scaleX: SCALE,
    scaleY: SCALE,
    scaleZ: SCALE,
    skewX: ANGLE,
    skewY: ANGLE,
    distance: PX,
    translateX: PX,
    translateY: PX,
    translateZ: PX,
    perspective: PX,
    opacity: ALPHA
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9jc3MvdHlwZS1tYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLEtBQUssR0FBRyxPQUFPO0lBQ2YsU0FBUyxHQUFHLFdBQVc7SUFDdkIsVUFBVSxHQUFHLFlBQVk7SUFDekIsS0FBSyxHQUFHLE9BQU87SUFDZixNQUFNLEdBQUcsUUFBUTtJQUNqQixLQUFLLEdBQUcsT0FBTztJQUNmLEtBQUssR0FBRyxPQUFPO0lBQ2YsRUFBRSxHQUFHLElBQUksQ0FBQzs7QUFFZCxNQUFNLENBQUMsT0FBTyxHQUFHOztBQUViLFNBQUssRUFBRSxLQUFLO0FBQ1osbUJBQWUsRUFBRSxLQUFLO0FBQ3RCLGdCQUFZLEVBQUUsS0FBSztBQUNuQixRQUFJLEVBQUUsS0FBSztBQUNYLFVBQU0sRUFBRSxLQUFLOztBQUViLGVBQVcsRUFBRSxLQUFLO0FBQ2xCLGtCQUFjLEVBQUUsS0FBSztBQUNyQixvQkFBZ0IsRUFBRSxLQUFLO0FBQ3ZCLHFCQUFpQixFQUFFLEtBQUs7QUFDeEIsbUJBQWUsRUFBRSxLQUFLO0FBQ3RCLGdCQUFZLEVBQUUsRUFBRTs7QUFFaEIsVUFBTSxFQUFFLFVBQVU7QUFDbEIsV0FBTyxFQUFFLFVBQVU7QUFDbkIsU0FBSyxFQUFFLEVBQUU7QUFDVCxVQUFNLEVBQUUsRUFBRTs7QUFFVixzQkFBa0IsRUFBRSxTQUFTO0FBQzdCLHFCQUFpQixFQUFFLFNBQVM7QUFDNUIsbUJBQWUsRUFBRSxTQUFTOztBQUUxQixjQUFVLEVBQUUsTUFBTTtBQUNsQixhQUFTLEVBQUUsTUFBTTs7QUFFakIsVUFBTSxFQUFFLEtBQUs7QUFDYixXQUFPLEVBQUUsS0FBSztBQUNkLFdBQU8sRUFBRSxLQUFLO0FBQ2QsV0FBTyxFQUFFLEtBQUs7QUFDZCxTQUFLLEVBQUUsS0FBSztBQUNaLFVBQU0sRUFBRSxLQUFLO0FBQ2IsVUFBTSxFQUFFLEtBQUs7QUFDYixVQUFNLEVBQUUsS0FBSztBQUNiLFNBQUssRUFBRSxLQUFLO0FBQ1osU0FBSyxFQUFFLEtBQUs7QUFDWixZQUFRLEVBQUUsRUFBRTtBQUNaLGNBQVUsRUFBRSxFQUFFO0FBQ2QsY0FBVSxFQUFFLEVBQUU7QUFDZCxjQUFVLEVBQUUsRUFBRTtBQUNkLGVBQVcsRUFBRSxFQUFFO0FBQ2YsV0FBTyxFQUFFLEtBQUs7Q0FDakIsQ0FBQyIsImZpbGUiOiJ0eXBlLW1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDT0xPUiA9ICdjb2xvcicsXG4gICAgUE9TSVRJT05TID0gJ3Bvc2l0aW9ucycsXG4gICAgRElNRU5TSU9OUyA9ICdkaW1lbnNpb25zJyxcbiAgICBTQ0FMRSA9ICdzY2FsZScsXG4gICAgU0hBRE9XID0gJ3NoYWRvdycsXG4gICAgQU5HTEUgPSAnYW5nbGUnLFxuICAgIEFMUEhBID0gJ2FscGhhJyxcbiAgICBQWCA9ICdweCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8vIENvbG9yIHByb3BlcnRpZXNcbiAgICBjb2xvcjogQ09MT1IsXG4gICAgYmFja2dyb3VuZENvbG9yOiBDT0xPUixcbiAgICBvdXRsaW5lQ29sb3I6IENPTE9SLFxuICAgIGZpbGw6IENPTE9SLFxuICAgIHN0cm9rZTogQ09MT1IsXG4gICAgLy8gQm9yZGVyXG4gICAgYm9yZGVyQ29sb3I6IENPTE9SLFxuICAgIGJvcmRlclRvcENvbG9yOiBDT0xPUixcbiAgICBib3JkZXJSaWdodENvbG9yOiBDT0xPUixcbiAgICBib3JkZXJCb3R0b21Db2xvcjogQ09MT1IsXG4gICAgYm9yZGVyTGVmdENvbG9yOiBDT0xPUixcbiAgICBib3JkZXJSYWRpdXM6IFBYLFxuICAgIC8vIERpbWVuc2lvbnNcbiAgICBtYXJnaW46IERJTUVOU0lPTlMsXG4gICAgcGFkZGluZzogRElNRU5TSU9OUyxcbiAgICB3aWR0aDogUFgsXG4gICAgaGVpZ2h0OiBQWCwgICAgXG4gICAgLy8gUG9zaXRpb25zXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBQT1NJVElPTlMsXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IFBPU0lUSU9OUyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IFBPU0lUSU9OUyxcbiAgICAvLyBTaGFkb3dzXG4gICAgdGV4dFNoYWRvdzogU0hBRE9XLFxuICAgIGJveFNoYWRvdzogU0hBRE9XLCAgICBcbiAgICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIHJvdGF0ZTogQU5HTEUsXG4gICAgcm90YXRlWDogQU5HTEUsXG4gICAgcm90YXRlWTogQU5HTEUsXG4gICAgcm90YXRlWjogQU5HTEUsXG4gICAgc2NhbGU6IFNDQUxFLFxuICAgIHNjYWxlWDogU0NBTEUsXG4gICAgc2NhbGVZOiBTQ0FMRSxcbiAgICBzY2FsZVo6IFNDQUxFLFxuICAgIHNrZXdYOiBBTkdMRSxcbiAgICBza2V3WTogQU5HTEUsXG4gICAgZGlzdGFuY2U6IFBYLFxuICAgIHRyYW5zbGF0ZVg6IFBYLFxuICAgIHRyYW5zbGF0ZVk6IFBYLFxuICAgIHRyYW5zbGF0ZVo6IFBYLFxuICAgIHBlcnNwZWN0aXZlOiBQWCxcbiAgICBvcGFjaXR5OiBBTFBIQVxufTsiXX0=
return exports;
})()),

    init: function (actor) {
        actor._cssCache = {};
    },

    update: function (state, actor) {
        cssRole(actor.element, build(state, actor._cssCache));
    },

    get: function (element, key) {
        key = propertyNameCache[key] || testPrefix(key);

        if (key) {
            return window.getComputedStyle(element, null)[key];
        }
    },

    set: function (element, key, value) {
        key = propertyNameCache[key] || testPrefix(key);

        if (key) {
            element.style[key] = value;
        }
    }

});

exports = cssRole;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9jc3MvY3NzUm9sZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7QUFFL0IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0MsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUNsQyxJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztBQUMzQixJQUFJLFdBQVc7Ozs7Ozs7O0FBQUMsQUFRaEIsSUFBSSxVQUFVLEdBQUcsVUFBVSxHQUFHLEVBQUU7QUFDNUIsZUFBVyxHQUFHLFdBQVcsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUUzRCxRQUFJLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssRUFBRTtBQUNsQyxlQUFPLEtBQUssQ0FBQztLQUNoQixNQUFNO0FBQ0gseUJBQWlCLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0tBQ2xDOztBQUVELFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDbEMsWUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNwQixRQUFRLEdBQUcsQUFBQyxNQUFNLEtBQUssRUFBRSxHQUFJLEdBQUcsR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUUzRixZQUFJLFFBQVEsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFO0FBQy9CLDZCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUNyQztLQUNKOztBQUVELFdBQU8saUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDakMsQ0FBQzs7QUFFRixJQUFJLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQztBQUNuQixRQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUN0QixZQUFRLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQzs7QUFFL0IsUUFBSSxFQUFFLFVBQVUsS0FBSyxFQUFFO0FBQ25CLGFBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3hCOztBQUVELFVBQU0sRUFBRSxVQUFVLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDNUIsZUFBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztLQUN6RDs7QUFFRCxPQUFHLEVBQUUsVUFBVSxPQUFPLEVBQUUsR0FBRyxFQUFFO0FBQ3pCLFdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRWhELFlBQUksR0FBRyxFQUFFO0FBQ0wsbUJBQU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0RDtLQUNKOztBQUVELE9BQUcsRUFBRSxVQUFVLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ2hDLFdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRWhELFlBQUksR0FBRyxFQUFFO0FBQ0wsbUJBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQzlCO0tBQ0o7O0NBRUosQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDIiwiZmlsZSI6ImNzc1JvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyk7XG52YXIgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG5cbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywnTW96JywnTycsJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHByb3BlcnR5TmFtZUNhY2hlID0ge307XG52YXIgdGVzdEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIFxuLypcbiAgICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICAgIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGlmIChwcm9wZXJ0eU5hbWVDYWNoZVtrZXldID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHlOYW1lQ2FjaGVba2V5XSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV0sXG4gICAgICAgICAgICBwcmVmaXhlZCA9IChwcmVmaXggPT09ICcnKSA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgICAgICBpZiAocHJlZml4ZWQgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZUNhY2hlW2tleV0gPSBwcmVmaXhlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcHJvcGVydHlOYW1lQ2FjaGVba2V5XTtcbn07XG5cbnZhciBjc3NSb2xlID0gbmV3IFJvbGUoe1xuICAgIF9tYXA6IHJlcXVpcmUoJy4vbWFwJyksXG4gICAgX3R5cGVNYXA6IHJlcXVpcmUoJy4vdHlwZS1tYXAnKSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uIChhY3Rvcikge1xuICAgICAgICBhY3Rvci5fY3NzQ2FjaGUgPSB7fTtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUsIGFjdG9yKSB7XG4gICAgICAgIGNzc1JvbGUoYWN0b3IuZWxlbWVudCwgYnVpbGQoc3RhdGUsIGFjdG9yLl9jc3NDYWNoZSkpO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICAgICAga2V5ID0gcHJvcGVydHlOYW1lQ2FjaGVba2V5XSB8fCB0ZXN0UHJlZml4KGtleSk7XG5cbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpW2tleV07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbiAoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBrZXkgPSBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTtcblxuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY3NzUm9sZTsiXX0=
return exports;
})();
var __small$_17 = (function() {
var exports = {};
"use strict";

var Role = __small$_26,
    attrRole = __small$_15,
    build = ((function() {
var exports = {};
'use strict';

var utils = __small$_35;
var transformDictionary = __small$_64;

var each = utils.each;
var camelToDash = utils.camelToDash;
var transformProps = transformDictionary.props;
var zeroNotZero = 0.0001;

exports = function (output, origin) {
    var props = {},
        hasTransform = false,
        scale = output.scale !== undefined ? output.scale || zeroNotZero : output.scaleX || 1,
        scaleY = output.scaleY !== undefined ? output.scaleY || zeroNotZero : scale || 1,
        transformOriginX = origin.x,
        transformOriginY = origin.y,
        scaleTransformX = -transformOriginX * (scale * 1),
        scaleTransformY = -transformOriginY * (scaleY * 1),
        scaleReplaceX = transformOriginX / scale,
        scaleReplaceY = transformOriginY / scaleY,
        transform = {
        translate: 'translate(' + output.translateX + ', ' + output.translateY + ') ',
        scale: 'translate(' + scaleTransformX + ', ' + scaleTransformY + ') scale(' + scale + ', ' + scaleY + ') translate(' + scaleReplaceX + ', ' + scaleReplaceY + ') ',
        rotate: 'rotate(' + output.rotate + ', ' + transformOriginX + ', ' + transformOriginY + ') ',
        skewX: 'skewX(' + output.skewX + ') ',
        skewY: 'skewY(' + output.skewY + ') '
    };

    each(output, function (key, value) {
        if (transformProps[key]) {
            hasTransform = true;
        } else {
            props[camelToDash(key)] = value;
        }
    });

    if (hasTransform) {
        props.transform = '';

        each(transform, function (key, value) {
            var defaultValue = key === 'scale' ? '1' : '0';
            props.transform += value.replace(/undefined/g, defaultValue);
        });
    }

    return props;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9zdmcvYnVpbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxJQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDOztBQUVuRSxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQ3hCLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7QUFDdEMsSUFBTSxjQUFjLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDO0FBQ2pELElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQzs7QUFFM0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDdkMsUUFBSSxLQUFLLEdBQUcsRUFBRTtRQUNWLFlBQVksR0FBRyxLQUFLO1FBQ3BCLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUM7UUFDckYsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksV0FBVyxHQUFHLEtBQUssSUFBSSxDQUFDO1FBQ2hGLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLGVBQWUsR0FBRyxDQUFFLGdCQUFnQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUEsQUFBQztRQUNsRCxlQUFlLEdBQUcsQ0FBRSxnQkFBZ0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFBLEFBQUM7UUFDbkQsYUFBYSxHQUFHLGdCQUFnQixHQUFHLEtBQUs7UUFDeEMsYUFBYSxHQUFHLGdCQUFnQixHQUFHLE1BQU07UUFDekMsU0FBUyxHQUFHO0FBQ1IsaUJBQVMsaUJBQWUsTUFBTSxDQUFDLFVBQVUsVUFBSyxNQUFNLENBQUMsVUFBVSxPQUFJO0FBQ25FLGFBQUssaUJBQWUsZUFBZSxVQUFLLGVBQWUsZ0JBQVcsS0FBSyxVQUFLLE1BQU0sb0JBQWUsYUFBYSxVQUFLLGFBQWEsT0FBSTtBQUNwSSxjQUFNLGNBQVksTUFBTSxDQUFDLE1BQU0sVUFBSyxnQkFBZ0IsVUFBSyxnQkFBZ0IsT0FBSTtBQUM3RSxhQUFLLGFBQVcsTUFBTSxDQUFDLEtBQUssT0FBSTtBQUNoQyxhQUFLLGFBQVcsTUFBTSxDQUFDLEtBQUssT0FBSTtLQUNuQyxDQUFDOztBQUVOLFFBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQy9CLFlBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3JCLHdCQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCLE1BQU07QUFDSCxpQkFBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNuQztLQUNKLENBQUMsQ0FBQzs7QUFFSCxRQUFJLFlBQVksRUFBRTtBQUNkLGFBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztBQUVyQixZQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNsQyxnQkFBSSxZQUFZLEdBQUcsQUFBQyxHQUFHLEtBQUssT0FBTyxHQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDakQsaUJBQUssQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDaEUsQ0FBQyxDQUFDO0tBQ047O0FBRUQsV0FBTyxLQUFLLENBQUM7Q0FDaEIsQ0FBQyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5jb25zdCB0cmFuc2Zvcm1EaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1kaWN0aW9uYXJ5Jyk7XG5cbmNvbnN0IGVhY2ggPSB1dGlscy5lYWNoO1xuY29uc3QgY2FtZWxUb0Rhc2ggPSB1dGlscy5jYW1lbFRvRGFzaDtcbmNvbnN0IHRyYW5zZm9ybVByb3BzID0gdHJhbnNmb3JtRGljdGlvbmFyeS5wcm9wcztcbmNvbnN0IHplcm9Ob3RaZXJvID0gMC4wMDAxO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvdXRwdXQsIG9yaWdpbikge1xuICAgIGxldCBwcm9wcyA9IHt9LFxuICAgICAgICBoYXNUcmFuc2Zvcm0gPSBmYWxzZSxcbiAgICAgICAgc2NhbGUgPSBvdXRwdXQuc2NhbGUgIT09IHVuZGVmaW5lZCA/IG91dHB1dC5zY2FsZSB8fCB6ZXJvTm90WmVybyA6IG91dHB1dC5zY2FsZVggfHwgMSxcbiAgICAgICAgc2NhbGVZID0gb3V0cHV0LnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gb3V0cHV0LnNjYWxlWSB8fCB6ZXJvTm90WmVybyA6IHNjYWxlIHx8IDEsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblggPSBvcmlnaW4ueCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luWSA9IG9yaWdpbi55LFxuICAgICAgICBzY2FsZVRyYW5zZm9ybVggPSAtIHRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1ZID0gLSB0cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpLFxuICAgICAgICBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlLFxuICAgICAgICBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWSxcbiAgICAgICAgdHJhbnNmb3JtID0ge1xuICAgICAgICAgICAgdHJhbnNsYXRlOiBgdHJhbnNsYXRlKCR7b3V0cHV0LnRyYW5zbGF0ZVh9LCAke291dHB1dC50cmFuc2xhdGVZfSkgYCxcbiAgICAgICAgICAgIHNjYWxlOiBgdHJhbnNsYXRlKCR7c2NhbGVUcmFuc2Zvcm1YfSwgJHtzY2FsZVRyYW5zZm9ybVl9KSBzY2FsZSgke3NjYWxlfSwgJHtzY2FsZVl9KSB0cmFuc2xhdGUoJHtzY2FsZVJlcGxhY2VYfSwgJHtzY2FsZVJlcGxhY2VZfSkgYCxcbiAgICAgICAgICAgIHJvdGF0ZTogYHJvdGF0ZSgke291dHB1dC5yb3RhdGV9LCAke3RyYW5zZm9ybU9yaWdpblh9LCAke3RyYW5zZm9ybU9yaWdpbll9KSBgLFxuICAgICAgICAgICAgc2tld1g6IGBza2V3WCgke291dHB1dC5za2V3WH0pIGAsXG4gICAgICAgICAgICBza2V3WTogYHNrZXdZKCR7b3V0cHV0LnNrZXdZfSkgYFxuICAgICAgICB9O1xuXG4gICAgZWFjaChvdXRwdXQsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvcHNbY2FtZWxUb0Rhc2goa2V5KV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgICAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgICAgICBlYWNoKHRyYW5zZm9ybSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSAoa2V5ID09PSAnc2NhbGUnKSA/ICcxJyA6ICcwJztcbiAgICAgICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB2YWx1ZS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzO1xufTsiXX0=
return exports;
})()),
    each = __small$_35.each;

exports = new Role({
    _map: __small$_43,
    _typeMap: ((function() {
var exports = {};
'use strict';

var ALPHA = 'alpha';
var COLOR = 'color';
var SCALE = 'scale';

exports = {
    fill: COLOR,
    stroke: COLOR,
    scale: SCALE,
    scaleX: SCALE,
    scaleY: SCALE,
    transformOrigin: 'positions',
    d: 'complex',
    opacity: ALPHA,
    fillOpacity: ALPHA,
    strokeOpacity: ALPHA
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9zdmcvdHlwZS1tYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUM7QUFDdEIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQzs7QUFFdEIsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNiLFFBQUksRUFBRSxLQUFLO0FBQ1gsVUFBTSxFQUFFLEtBQUs7QUFDYixTQUFLLEVBQUUsS0FBSztBQUNaLFVBQU0sRUFBRSxLQUFLO0FBQ2IsVUFBTSxFQUFFLEtBQUs7QUFDYixtQkFBZSxFQUFFLFdBQVc7QUFDNUIsS0FBQyxFQUFFLFNBQVM7QUFDWixXQUFPLEVBQUUsS0FBSztBQUNkLGVBQVcsRUFBRSxLQUFLO0FBQ2xCLGlCQUFhLEVBQUUsS0FBSztDQUN2QixDQUFDIiwiZmlsZSI6InR5cGUtbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQUxQSEEgPSAnYWxwaGEnO1xuY29uc3QgQ09MT1IgPSAnY29sb3InO1xuY29uc3QgU0NBTEUgPSAnc2NhbGUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmaWxsOiBDT0xPUixcbiAgICBzdHJva2U6IENPTE9SLFxuICAgIHNjYWxlOiBTQ0FMRSxcbiAgICBzY2FsZVg6IFNDQUxFLFxuICAgIHNjYWxlWTogU0NBTEUsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAncG9zaXRpb25zJyxcbiAgICBkOiAnY29tcGxleCcsXG4gICAgb3BhY2l0eTogQUxQSEEsXG4gICAgZmlsbE9wYWNpdHk6IEFMUEhBLFxuICAgIHN0cm9rZU9wYWNpdHk6IEFMUEhBXG59OyJdfQ==
return exports;
})()),

    start: function () {
        var boundingBox = this.element.getBBox(),
            values = this.values,

        // TODO: Support px
        transformOriginX = values.transformOriginX ? values.transformOriginX.current : 50,
            transformOriginY = values.transformOriginY ? values.transformOriginY.current : 50,
            origin = {
            x: boundingBox.width * (transformOriginX / 100) + boundingBox.x,
            y: boundingBox.height * (transformOriginY / 100) + boundingBox.y
        };

        this.svgOrigin = origin;
    },

    update: function (state) {
        var actor = this;
        each(build(state, this.svgOrigin), function (key, value) {
            attrRole.set(actor.element, key, value);
        });
    }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9zdmcvc3ZnUm9sZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUN6QixRQUFRLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDO0lBQ3RDLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQzFCLElBQUksR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUM7O0FBRTNDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUM7QUFDdEIsUUFBSSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDM0IsWUFBUSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUM7O0FBRS9CLFNBQUssRUFBRSxZQUFZO0FBQ2YsWUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDcEMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7QUFFcEIsd0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsRUFBRTtZQUNqRixnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ2pGLE1BQU0sR0FBRztBQUNMLGFBQUMsRUFBRSxXQUFXLENBQUMsS0FBSyxJQUFJLGdCQUFnQixHQUFHLEdBQUcsQ0FBQSxBQUFDLEdBQUcsV0FBVyxDQUFDLENBQUM7QUFDL0QsYUFBQyxFQUFFLFdBQVcsQ0FBQyxNQUFNLElBQUksZ0JBQWdCLEdBQUcsR0FBRyxDQUFBLEFBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztTQUNuRSxDQUFDOztBQUVOLFlBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0tBQzNCOztBQUVELFVBQU0sRUFBRSxVQUFVLEtBQUssRUFBRTtBQUNyQixZQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDakIsWUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNyRCxvQkFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzQyxDQUFDLENBQUM7S0FDTjs7Q0FFSixDQUFDLENBQUMiLCJmaWxlIjoic3ZnUm9sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUm9sZSA9IHJlcXVpcmUoJy4uL1JvbGUnKSxcbiAgICBhdHRyUm9sZSA9IHJlcXVpcmUoJy4uL2F0dHIvYXR0clJvbGUnKSxcbiAgICBidWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKSxcbiAgICBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaDtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgUm9sZSh7XG4gICAgX21hcDogcmVxdWlyZSgnLi4vY3NzL21hcCcpLFxuICAgIF90eXBlTWFwOiByZXF1aXJlKCcuL3R5cGUtbWFwJyksXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYm91bmRpbmdCb3ggPSB0aGlzLmVsZW1lbnQuZ2V0QkJveCgpLFxuICAgICAgICAgICAgdmFsdWVzID0gdGhpcy52YWx1ZXMsXG4gICAgICAgICAgICAvLyBUT0RPOiBTdXBwb3J0IHB4XG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW5YID0gdmFsdWVzLnRyYW5zZm9ybU9yaWdpblggPyB2YWx1ZXMudHJhbnNmb3JtT3JpZ2luWC5jdXJyZW50IDogNTAsXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW5ZID0gdmFsdWVzLnRyYW5zZm9ybU9yaWdpblkgPyB2YWx1ZXMudHJhbnNmb3JtT3JpZ2luWS5jdXJyZW50IDogNTAsXG4gICAgICAgICAgICBvcmlnaW4gPSB7XG4gICAgICAgICAgICAgICAgeDogYm91bmRpbmdCb3gud2lkdGggKiAodHJhbnNmb3JtT3JpZ2luWCAvIDEwMCkgKyBib3VuZGluZ0JveC54LFxuICAgICAgICAgICAgICAgIHk6IGJvdW5kaW5nQm94LmhlaWdodCAqICh0cmFuc2Zvcm1PcmlnaW5ZIC8gMTAwKSArIGJvdW5kaW5nQm94LnlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdmdPcmlnaW4gPSBvcmlnaW47XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBhY3RvciA9IHRoaXM7XG4gICAgICAgIGVhY2goYnVpbGQoc3RhdGUsIHRoaXMuc3ZnT3JpZ2luKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGF0dHJSb2xlLnNldChhY3Rvci5lbGVtZW50LCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTsiXX0=
return exports;
})();
"use strict";

var popmotion = ((function() {
var exports = {};
var __small$_19 = (function() {
var exports = {};
'use strict';

var each = __small$_35.each;

exports = {
    extend: function (types) {
        var _this = this;

        each(types, function (name, type) {
            _this[name] = type;
        });
    },

    defaultProps: function (typeName, key) {
        var valueType = this[typeName],
            defaultProps = valueType.defaultProps ? valueType.defaultProps[key] || valueType.defaultProps : {};

        return defaultProps;
    },

    test: function (value) {
        var type = false;

        each(this, function (key, valueType) {
            if (valueType.test && valueType.test(value)) {
                type = key;
                return false;
            }
        });

        return type;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9tYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7QUFFMUMsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNiLFVBQU0sRUFBRSxVQUFVLEtBQUssRUFBRTs7O0FBQ3JCLFlBQUksQ0FBQyxLQUFLLEVBQUUsVUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFLO0FBQ3hCLGtCQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNyQixDQUFDLENBQUM7S0FDTjs7QUFFRCxnQkFBWSxFQUFFLFVBQVUsUUFBUSxFQUFFLEdBQUcsRUFBRTtBQUNuQyxZQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzFCLFlBQVksR0FBRyxBQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUksU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzs7QUFFekcsZUFBTyxZQUFZLENBQUM7S0FDdkI7O0FBRUQsUUFBSSxFQUFFLFVBQVUsS0FBSyxFQUFFO0FBQ25CLFlBQUksSUFBSSxHQUFHLEtBQUssQ0FBQzs7QUFFakIsWUFBSSxDQUFDLElBQUksRUFBRSxVQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUs7QUFDM0IsZ0JBQUksU0FBUyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3pDLG9CQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ1gsdUJBQU8sS0FBSyxDQUFDO2FBQ2hCO1NBQ0osQ0FBQyxDQUFDOztBQUVILGVBQU8sSUFBSSxDQUFDO0tBQ2Y7Q0FDSixDQUFDIiwiZmlsZSI6Im1hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlYWNoID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJykuZWFjaDtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZXh0ZW5kOiBmdW5jdGlvbiAodHlwZXMpIHtcbiAgICAgICAgZWFjaCh0eXBlcywgKG5hbWUsIHR5cGUpID0+IHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB0eXBlO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZGVmYXVsdFByb3BzOiBmdW5jdGlvbiAodHlwZU5hbWUsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWVUeXBlID0gdGhpc1t0eXBlTmFtZV0sXG4gICAgICAgICAgICBkZWZhdWx0UHJvcHMgPSAodmFsdWVUeXBlLmRlZmF1bHRQcm9wcykgPyB2YWx1ZVR5cGUuZGVmYXVsdFByb3BzW2tleV0gfHwgdmFsdWVUeXBlLmRlZmF1bHRQcm9wcyA6IHt9O1xuXG4gICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGZhbHNlO1xuXG4gICAgICAgIGVhY2godGhpcywgKGtleSwgdmFsdWVUeXBlKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWVUeXBlLnRlc3QgJiYgdmFsdWVUeXBlLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IGtleTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbn07XG4iXX0=
return exports;
})();
var __small$_34 = (function() {
var exports = {};
'use strict';

var utils = __small$_35,
    zeroPoint = {
    x: 0,
    y: 0
},
    calc = {

    /*
        Angle between points
        
        Translates the hypothetical line so that the 'from' coordinates
        are at 0,0, then return the angle using .angleFromCenter()
        
        @param [object]: X and Y coordinates of from point
        @param [object]: X and Y cordinates of to point
        @return [radian]: Angle between the two points in radians
    */
    angle: function (a) {
        var b = arguments.length <= 1 || arguments[1] === undefined ? zeroPoint : arguments[1];
        return calc.angleFromCenter(a.x - b.x, a.y - b.y);
    },

    /*
        Angle from center
        
        Returns the current angle, in radians, of a defined point
        from a center (assumed 0,0)
        
        @param [number]: X coordinate of second point
        @param [number]: Y coordinate of second point
        @return [radian]: Angle between 0, 0 and point in radians
    */
    angleFromCenter: function (x, y) {
        return calc.radiansToDegrees(Math.atan2(y, x));
    },

    /*
        Convert degrees to radians
        
        @param [number]: Value in degrees
        @return [number]: Value in radians
    */
    degreesToRadians: function (degrees) {
        return degrees * Math.PI / 180;
    },

    /*
        Dilate
        
        Change the progression between a and b according to dilation.
        
        So dilation = 0.5 would change
        
        a --------- b
        
        to
        
        a ---- b
        
        @param [number]: Previous value
        @param [number]: Current value
        @param [number]: Dilate progress by x
        @return [number]: Previous value plus the dilated difference
    */
    dilate: function (a, b, dilation) {
        return a + (b - a) * dilation;
    },

    /*
        Distance
        
        Returns the distance between (0,0) and pointA, unless pointB
        is provided, then we return the difference between the two.
        
        @param [object/number]: x and y or just x of point A
        @param [object/number]: (optional): x and y or just x of point B
        @return [number]: The distance between the two points
    */
    distance: function (a, b) {
        return utils.isNum(a) ? calc.distance1D(a, b) : calc.distance2D(a, b);
    },

    /*
        Distance 1D
        
        Returns the distance between point A and point B
        
        @param [number]: Point A
        @param [number]: (optional): Point B
        @return [number]: The distance between the two points
    */
    distance1D: function (a) {
        var b = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
        return Math.abs(a - b);
    },

    /*
        Distance 2D
        
        Returns the distance between (0,0) and point A, unless point B
        is provided, then we return the difference between the two.
        
        @param [object]: x and y of point A
        @param [object]: (optional): x and y of point B
        @return [number]: The distance between the two points
    */
    distance2D: function (a) {
        var b = arguments.length <= 1 || arguments[1] === undefined ? zeroPoint : arguments[1];
        return calc.hypotenuse(Math.abs(a.x - b.x), Math.abs(a.y - b.y));
    },

    /*
        Hypotenuse
        
        Returns the hypotenuse, side C, given the lengths of sides A and B.
        
        @param [number]: Length of A
        @param [number]: Length of B
        @return [number]: Length of C
    */
    hypotenuse: function (a, b) {
        return Math.sqrt(a * a + b * b);
    },

    /*
        Offset between two inputs
        
        Calculate the difference between two different inputs
        
        @param [Point]: First input
        @param [Point]: Second input
        @return [Offset]: Distance metrics between two points
    */
    offset: function (a, b) {
        var offset = {};

        utils.each(b, function (key, value) {
            offset[key] = a.hasOwnProperty(key) ? value - a[key] : 0;
        });

        if (utils.isNum(offset.x) && utils.isNum(offset.y)) {
            offset.angle = calc.angle(a, b);
            offset.distance = calc.distance2D(a, b);
        }

        return offset;
    },

    /*
        Point from angle and distance
        
        @param [object]: 2D point of origin
        @param [number]: Angle from origin
        @param [number]: Distance from origin
        @return [object]: Calculated 2D point
    */
    pointFromAngleAndDistance: function (origin, angle, distance) {
        angle = calc.degreesToRadians(angle);

        return {
            x: distance * Math.cos(angle) + origin.x,
            y: distance * Math.sin(angle) + origin.y
        };
    },

    /*
        Progress within given range
        
        Given a lower limit and an upper limit, we return the progress
        (expressed as a number 0-1) represented by the given value, and
        limit that progress to within 0-1.
        
        @param [number]: Value to find progress within given range
        @param [number]: Lower limit 
        @param [number]: Upper limit
        @return [number]: Progress of value within range as expressed 0-1
    */
    progress: function (value, from, to) {
        return (value - from) / (to - from);
    },

    /*
        Convert radians to degrees
        
        @param [number]: Value in radians
        @return [number]: Value in degrees
    */
    radiansToDegrees: function (radians) {
        return radians * 180 / Math.PI;
    },

    /*
        Return random number between range
        
        @param [number] (optional): Output minimum
        @param [number] (optional): Output maximum
        @return [number]: Random number within range, or 0 and 1 if none provided
    */
    random: function () {
        var min = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
        var max = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
        return Math.random() * (max - min) + min;
    },

    /*
        Calculate relative value
        
        Takes the operator and value from a string, ie "+=5", and applies
        to the current value to resolve a new target.
        
        @param [number]: Current value
        @param [string]: Relative value
        @return [number]: New value
    */
    relativeValue: function (current, rel) {
        var newValue = current;
        var equation = rel.split('=');
        var operator = equation[0];

        var _utils$splitValUnit = utils.splitValUnit(equation[1]);

        var unit = _utils$splitValUnit.unit;
        var value = _utils$splitValUnit.value;

        value = parseFloat(value);

        switch (operator) {
            case '+':
                newValue += value;
                break;
            case '-':
                newValue -= value;
                break;
            case '*':
                newValue *= value;
                break;
            case '/':
                newValue /= value;
                break;
        }

        if (unit) {
            newValue += unit;
        }

        return newValue;
    },

    /*
        Restrict value to range
        
        Return value within the range of lowerLimit and upperLimit
        
        @param [number]: Value to keep within range
        @param [number]: Lower limit of range
        @param [number]: Upper limit of range
        @return [number]: Value as limited within given range
    */
    restricted: function (value, min, max) {
        if (utils.isNum(min)) {
            value = Math.max(value, min);
        }

        if (utils.isNum(max)) {
            value = Math.min(value, max);
        }

        return value;
    },

    /*
        Framerate-independent smoothing
         @param [number]: New value
        @param [number]: Old value
        @param [number]: Frame duration
        @param [number] (optional): Smoothing (0 is none)
    */
    smooth: function (newValue, oldValue, duration) {
        var smoothing = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
        return calc.toDecimal(oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration));
    },

    /*
        Convert x per second to per frame velocity based on fps
        
        @param [number]: Unit per second
        @param [number]: Frame duration in ms
    */
    speedPerFrame: function (xps, frameDuration) {
        return utils.isNum(xps) ? xps / (1000 / frameDuration) : 0;
    },

    /*
        Convert velocity into velicity per second
        
        @param [number]: Unit per frame
        @param [number]: Frame duration in ms
    */
    speedPerSecond: function (velocity, frameDuration) {
        return velocity * (1000 / frameDuration);
    },

    /*
        Convert number to decimal place
    */
    toDecimal: function (num) {
        var precision = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

        precision = Math.pow(10, precision);
        return Math.round(num * precision) / precision;
    },

    /*
        Value in range from progress
        
        Given a lower limit and an upper limit, we return the value within
        that range as expressed by progress (a number from 0-1)
        
        @param [number]: The progress between lower and upper limits expressed 0-1
        @param [number]: Lower limit of range
        @param [number]: Upper limit of range
        @return [number]: Value as calculated from progress within range (not limited within range)
    */
    value: function (progress, from, to) {
        return -progress * from + progress * to + from;
    },

    /*
        Eased value in range from progress
        
        Given a lower limit and an upper limit, we return the value within
        that range as expressed by progress (a number from 0-1)
        
        @param [number]: The progress between lower and upper limits expressed 0-1
        @param [number]: Lower limit of range, or upper if limit2 not provided
        @param [number]: Upper limit of range
        @param [function]: Easing to apply to value
        @return [number]: Value as calculated from progress within range (not limited within range)
    */
    valueEased: function (progress, from, to, easing) {
        return calc.value(easing(progress), from, to);
    }
};

exports = calc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvY2FsYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7SUFFN0IsU0FBUyxHQUFHO0FBQ1IsS0FBQyxFQUFFLENBQUM7QUFDSixLQUFDLEVBQUUsQ0FBQztDQUNQO0lBRUQsSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7QUFZSCxTQUFLLEVBQUUsVUFBQyxDQUFDO1lBQUUsQ0FBQyx5REFBRyxTQUFTO2VBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQUE7Ozs7Ozs7Ozs7OztBQVl2RSxtQkFBZSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUM7ZUFBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FBQTs7Ozs7Ozs7QUFRbEUsb0JBQWdCLEVBQUUsVUFBQSxPQUFPO2VBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRztLQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CcEQsVUFBTSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRO2VBQUssQ0FBQyxHQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQSxHQUFJLFFBQVEsQUFBQztLQUFBOzs7Ozs7Ozs7Ozs7QUFZcEQsWUFBUSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUM7ZUFBSyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUFBOzs7Ozs7Ozs7OztBQVdsRixjQUFVLEVBQUUsVUFBQyxDQUFD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R0FBRyxRQUFRLENBQUEsQUFBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxBQUFDLENBQUM7S0FBQTs7Ozs7Ozs7QUFRdEosaUJBQWEsRUFBRSxVQUFDLEdBQUcsRUFBRSxhQUFhO2VBQUssQUFBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsYUFBYSxDQUFBLEFBQUMsR0FBRyxDQUFDO0tBQUE7Ozs7Ozs7O0FBUTVGLGtCQUFjLEVBQUUsVUFBQyxRQUFRLEVBQUUsYUFBYTtlQUFLLFFBQVEsSUFBSSxJQUFJLEdBQUcsYUFBYSxDQUFBLEFBQUM7S0FBQTs7Ozs7QUFLOUUsYUFBUyxFQUFFLFVBQUMsR0FBRyxFQUFvQjtZQUFsQixTQUFTLHlEQUFHLENBQUM7O0FBQzFCLGlCQUFTLFlBQUcsRUFBRSxFQUFJLFNBQVMsQ0FBQSxDQUFDO0FBQzVCLGVBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDO0tBQ2xEOzs7Ozs7Ozs7Ozs7O0FBYUQsU0FBSyxFQUFFLFVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFO2VBQUssQUFBQyxDQUFFLFFBQVEsR0FBRyxJQUFJLEdBQUssUUFBUSxHQUFHLEVBQUUsQUFBQyxHQUFHLElBQUk7S0FBQTs7Ozs7Ozs7Ozs7Ozs7QUFlM0UsY0FBVSxFQUFFLFVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTTtlQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7S0FBQTtDQUNyRixDQUFDOztBQUVOLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDIiwiZmlsZSI6ImNhbGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyksXG5cbiAgICB6ZXJvUG9pbnQgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICB9LFxuXG4gICAgY2FsYyA9IHtcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGFyZSBhdCAwLDAsIHRoZW4gcmV0dXJuIHRoZSBhbmdsZSB1c2luZyAuYW5nbGVGcm9tQ2VudGVyKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gICAgICAgICAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiAgICAgICAgKi9cbiAgICAgICAgYW5nbGU6IChhLCBiID0gemVyb1BvaW50KSA9PiBjYWxjLmFuZ2xlRnJvbUNlbnRlcihhLnggLSBiLngsIGEueSAtIGIueSksXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIEFuZ2xlIGZyb20gY2VudGVyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGN1cnJlbnQgYW5nbGUsIGluIHJhZGlhbnMsIG9mIGEgZGVmaW5lZCBwb2ludFxuICAgICAgICAgICAgZnJvbSBhIGNlbnRlciAoYXNzdW1lZCAwLDApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogWCBjb29yZGluYXRlIG9mIHNlY29uZCBwb2ludFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBZIGNvb3JkaW5hdGUgb2Ygc2Vjb25kIHBvaW50XG4gICAgICAgICAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIDAsIDAgYW5kIHBvaW50IGluIHJhZGlhbnNcbiAgICAgICAgKi9cbiAgICAgICAgYW5nbGVGcm9tQ2VudGVyOiAoeCwgeSkgPT4gY2FsYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoeSwgeCkpLFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICAgICAgICAqL1xuICAgICAgICBkZWdyZWVzVG9SYWRpYW5zOiBkZWdyZWVzID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaWxhdGVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYSAtLS0tLS0tLS0gYlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBhIC0tLS0gYlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuICAgICAgICAqL1xuICAgICAgICBkaWxhdGU6IChhLCBiLCBkaWxhdGlvbikgPT4gYSArICgoYiAtIGEpICogZGlsYXRpb24pLFxuICAgICAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaXN0YW5jZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuICgwLDApIGFuZCBwb2ludEEsIHVubGVzcyBwb2ludEJcbiAgICAgICAgICAgIGlzIHByb3ZpZGVkLCB0aGVuIHdlIHJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIGRpc3RhbmNlOiAoYSwgYikgPT4gdXRpbHMuaXNOdW0oYSkgPyBjYWxjLmRpc3RhbmNlMUQoYSwgYikgOiBjYWxjLmRpc3RhbmNlMkQoYSwgYiksXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIERpc3RhbmNlIDFEXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gcG9pbnQgQSBhbmQgcG9pbnQgQlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFBvaW50IEFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogKG9wdGlvbmFsKTogUG9pbnQgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgZGlzdGFuY2UxRDogKGEsIGIgPSAwKSA9PiBNYXRoLmFicyhhIC0gYiksXG4gICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIERpc3RhbmNlIDJEXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gKDAsMCkgYW5kIHBvaW50IEEsIHVubGVzcyBwb2ludCBCXG4gICAgICAgICAgICBpcyBwcm92aWRlZCwgdGhlbiB3ZSByZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IHggYW5kIHkgb2YgcG9pbnQgQVxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9mIHBvaW50IEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIGRpc3RhbmNlMkQ6IChhLCBiID0gemVyb1BvaW50KSA9PiBjYWxjLmh5cG90ZW51c2UoTWF0aC5hYnMoYS54IC0gYi54KSwgTWF0aC5hYnMoYS55IC0gYi55KSksXG4gICAgICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEh5cG90ZW51c2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgaHlwb3RlbnVzZSwgc2lkZSBDLCBnaXZlbiB0aGUgbGVuZ3RocyBvZiBzaWRlcyBBIGFuZCBCLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuICAgICAgICAqL1xuICAgICAgICBoeXBvdGVudXNlOiAoYSwgYikgPT4gTWF0aC5zcXJ0KChhICogYSkgKyAoYiAqIGIpKSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBPZmZzZXQgYmV0d2VlbiB0d28gaW5wdXRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIENhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBkaWZmZXJlbnQgaW5wdXRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBpbnB1dFxuICAgICAgICAgICAgQHBhcmFtIFtQb2ludF06IFNlY29uZCBpbnB1dFxuICAgICAgICAgICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0OiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHt9O1xuXG4gICAgICAgICAgICB1dGlscy5lYWNoKGIsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0W2tleV0gPSBhLmhhc093blByb3BlcnR5KGtleSkgPyB2YWx1ZSAtIGFba2V5XSA6IDA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzTnVtKG9mZnNldC54KSAmJiB1dGlscy5pc051bShvZmZzZXQueSkpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQuYW5nbGUgPSBjYWxjLmFuZ2xlKGEsIGIpO1xuICAgICAgICAgICAgICAgIG9mZnNldC5kaXN0YW5jZSA9IGNhbGMuZGlzdGFuY2UyRChhLCBiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICAgICAgICAgICAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuICAgICAgICAqL1xuICAgICAgICBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlOiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpID0+IHtcbiAgICAgICAgICAgIGFuZ2xlID0gY2FsYy5kZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgICAgICAgICAgICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgICAgICAgICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgICAgICAgICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgKi9cbiAgICAgICAgcHJvZ3Jlc3M6ICh2YWx1ZSwgZnJvbSwgdG8pID0+ICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSksXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgICAgICovXG4gICAgICAgIHJhZGlhbnNUb0RlZ3JlZXM6IHJhZGlhbnMgPT4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEksXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiAgICAgICAgKi9cbiAgICAgICAgcmFuZG9tOiAobWluID0gMCwgbWF4ID0gMSkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluLFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgICAgICAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICAgICAgKi9cbiAgICAgICAgcmVsYXRpdmVWYWx1ZTogKGN1cnJlbnQsIHJlbCkgPT4ge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gY3VycmVudCxcbiAgICAgICAgICAgICAgICBlcXVhdGlvbiA9IHJlbC5zcGxpdCgnPScpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yID0gZXF1YXRpb25bMF0sXG4gICAgICAgICAgICAgICAgeyB1bml0LCB2YWx1ZSB9ID0gdXRpbHMuc3BsaXRWYWxVbml0KGVxdWF0aW9uWzFdKTtcblxuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICAgICAgICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlIC09IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgKj0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSAvPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh1bml0KSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybiB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlIG9mIGxvd2VyTGltaXQgYW5kIHVwcGVyTGltaXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgKi9cbiAgICAgICAgcmVzdHJpY3RlZDogKHZhbHVlLCBtaW4sIG1heCkgPT4ge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzTnVtKG1pbikpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KHZhbHVlLCBtaW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNOdW0obWF4KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4odmFsdWUsIG1heCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiAgICAgICAgKi9cbiAgICAgICAgc21vb3RoOiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nID0gMCkgPT4gY2FsYy50b0RlY2ltYWwob2xkVmFsdWUgKyAoZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSkpLFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuICAgICAgICAqL1xuICAgICAgICBzcGVlZFBlckZyYW1lOiAoeHBzLCBmcmFtZUR1cmF0aW9uKSA9PiAodXRpbHMuaXNOdW0oeHBzKSkgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMCxcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiAgICAgICAgKi9cbiAgICAgICAgc3BlZWRQZXJTZWNvbmQ6ICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikgPT4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pLFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IG51bWJlciB0byBkZWNpbWFsIHBsYWNlXG4gICAgICAgICovXG4gICAgICAgIHRvRGVjaW1hbDogKG51bSwgcHJlY2lzaW9uID0gMikgPT4ge1xuICAgICAgICAgICAgcHJlY2lzaW9uID0gMTAgKiogcHJlY2lzaW9uO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbiAgICAgICAgfSxcbiAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICAgICAgICAgICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogKHByb2dyZXNzLCBmcm9tLCB0bykgPT4gKC0gcHJvZ3Jlc3MgKiBmcm9tKSArIChwcm9ncmVzcyAqIHRvKSArIGZyb20sXG4gICAgXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBFYXNlZCB2YWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICAgICAgICAgICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZSwgb3IgdXBwZXIgaWYgbGltaXQyIG5vdCBwcm92aWRlZFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IEVhc2luZyB0byBhcHBseSB0byB2YWx1ZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuICAgICAgICAqL1xuICAgICAgICB2YWx1ZUVhc2VkOiAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNpbmcpID0+IGNhbGMudmFsdWUoZWFzaW5nKHByb2dyZXNzKSwgZnJvbSwgdG8pXG4gICAgfTtcbiAgICBcbm1vZHVsZS5leHBvcnRzID0gY2FsYzsiXX0=
return exports;
})();
var __small$_22 = (function() {
var exports = {};
/*
    Input controller
*/
"use strict";

var calc = __small$_34,
    utils = __small$_35,
    History = ((function() {
var exports = {};
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var maxHistorySize = 3;

var History = (function () {

    /*
        History constructor
        
        @param [var]: Variable to store in first history slot
        @param [int] (optional): Maximum size of history
    */

    function History(obj) {
        var max = arguments.length <= 1 || arguments[1] === undefined ? maxHistorySize : arguments[1];

        _classCallCheck(this, History);

        this.max = max;
        this.entries = [];
        this.add(obj);
    }

    /*
        Push new var to history
        
        Shift out oldest entry if we've reached maximum capacity
        
        @param [var]: Variable to push into history.entries
    */

    History.prototype.add = function add(obj) {
        this.entries.push(obj);

        if (this.getSize() >= this.max) {
            this.entries.shift();
        }
    };

    /*
        Get variable at specified index
         @param [int]: Index
        @return [var]: Var found at specified index
    */

    History.prototype.get = function get() {
        var i = arguments.length <= 0 || arguments[0] === undefined ? this.getSize() - 1 : arguments[0];

        return this.entries[i];
    };

    /*
        Get the second newest history entry
        
        @return [var]: Entry found at index size - 2
    */

    History.prototype.getPrevious = function getPrevious() {
        return this.get(this.getSize() - 2);
    };

    /*
        Get current history size
        
        @return [int]: Current length of entries.length
    */

    History.prototype.getSize = function getSize() {
        return this.entries.length;
    };

    return History;
})();

exports = History;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvSGlzdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDOztJQUVuQixPQUFPOzs7Ozs7Ozs7QUFRVCxhQVJFLE9BQU8sQ0FRRyxHQUFHLEVBQXdCO1lBQXRCLEdBQUcseURBQUcsY0FBYzs7OEJBUm5DLE9BQU87O0FBU0wsWUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixZQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNsQixZQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2pCOzs7Ozs7Ozs7QUFBQTtBQVpDLFdBQU8sV0FxQlQsR0FBRyxnQkFBQyxHQUFHLEVBQUU7QUFDTCxZQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFdkIsWUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtBQUM1QixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjtLQUNKOzs7Ozs7OztBQTNCQyxXQUFPLFdBbUNULEdBQUcsa0JBQXlCO1lBQXhCLENBQUMseURBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7O0FBQ3RCLGVBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMxQjs7Ozs7Ozs7QUFyQ0MsV0FBTyxXQTRDVCxXQUFXLDBCQUFHO0FBQ1YsZUFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN2Qzs7Ozs7Ozs7QUE5Q0MsV0FBTyxXQXFEVCxPQUFPLHNCQUFHO0FBQ04sZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztLQUM5Qjs7V0F2REMsT0FBTzs7O0FBMERiLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDIiwiZmlsZSI6Ikhpc3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYXhIaXN0b3J5U2l6ZSA9IDM7XG5cbmNsYXNzIEhpc3Rvcnkge1xuXG4gICAgLypcbiAgICAgICAgSGlzdG9yeSBjb25zdHJ1Y3RvclxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFt2YXJdOiBWYXJpYWJsZSB0byBzdG9yZSBpbiBmaXJzdCBoaXN0b3J5IHNsb3RcbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbCk6IE1heGltdW0gc2l6ZSBvZiBoaXN0b3J5XG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvYmosIG1heCA9IG1heEhpc3RvcnlTaXplKSB7XG4gICAgICAgIHRoaXMubWF4ID0gbWF4O1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGQob2JqKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBQdXNoIG5ldyB2YXIgdG8gaGlzdG9yeVxuICAgICAgICBcbiAgICAgICAgU2hpZnQgb3V0IG9sZGVzdCBlbnRyeSBpZiB3ZSd2ZSByZWFjaGVkIG1heGltdW0gY2FwYWNpdHlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdmFyXTogVmFyaWFibGUgdG8gcHVzaCBpbnRvIGhpc3RvcnkuZW50cmllc1xuICAgICovXG4gICAgYWRkKG9iaikge1xuICAgICAgICB0aGlzLmVudHJpZXMucHVzaChvYmopO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuZ2V0U2l6ZSgpID49IHRoaXMubWF4KSB7XG4gICAgICAgICAgICB0aGlzLmVudHJpZXMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdmFyaWFibGUgYXQgc3BlY2lmaWVkIGluZGV4XG5cbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleFxuICAgICAgICBAcmV0dXJuIFt2YXJdOiBWYXIgZm91bmQgYXQgc3BlY2lmaWVkIGluZGV4XG4gICAgKi9cbiAgICBnZXQoaSA9IHRoaXMuZ2V0U2l6ZSgpIC0gMSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzW2ldO1xuICAgIH1cbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdGhlIHNlY29uZCBuZXdlc3QgaGlzdG9yeSBlbnRyeVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdmFyXTogRW50cnkgZm91bmQgYXQgaW5kZXggc2l6ZSAtIDJcbiAgICAqL1xuICAgIGdldFByZXZpb3VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5nZXRTaXplKCkgLSAyKTtcbiAgICB9XG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGN1cnJlbnQgaGlzdG9yeSBzaXplXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBDdXJyZW50IGxlbmd0aCBvZiBlbnRyaWVzLmxlbmd0aFxuICAgICovXG4gICAgZ2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcy5sZW5ndGg7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhpc3Rvcnk7Il19
return exports;
})()),

/*
    Input constructor
    
        Syntax
            newInput(name, value[, poll])
                @param [string]: Name of to track
                @param [number]: Initial value
                @param [function] (optional): Function to poll Input data
                
            newInput(props[, poll])
                @param [object]: Object of values
                @param [function] (optional): Function to poll Input data
     @return [Input]
*/
Input = function () {
    var pollPos = arguments.length - 1;

    this.current = {};
    this.offset = {};
    this.velocity = {};
    this.history = new History();
    this.update(arguments[0], arguments[1]);

    if (utils.isFunc(arguments[pollPos])) {
        this.poll = arguments[pollPos];
    }
};

Input.prototype = {

    // [number]: Number of frames of inactivity before velocity is turned to 0
    maxInactiveFrames: 2,

    // [number]: Number of frames input hasn't been updated
    inactiveFrames: 0,

    /*
        Get latest input values
        
        @param [string] (optional): Name of specific property to return
        @return [object || number]: Latest input values or, if specified, single value
    */
    get: function (prop) {
        var latest = this.history.get(),
            val = prop !== undefined ? latest[prop] : latest;
        return val;
    },

    /*
        Update the input values
        
        Syntax
            input.update(name, value)
                @param [string]: Name of to track
                @param [number]: Initial value
                
            input.update(props)
                @param [object]: Object of values
                
        @return [Input]
    */
    update: function (arg0, arg1) {
        var values = {};

        if (utils.isNum(arg1)) {
            values[arg0] = arg1;
        } else {
            values = arg0;
        }

        this.history.add(utils.merge(this.current, values));

        return this;
    },

    /*
        Check for input movement and update pointer object's properties
        
        @param [number]: Timestamp of frame
        @return [Input]
    */
    onFrame: function (timestamp) {
        var latest, hasChanged;

        // Check provided timestamp against lastFrame timestamp and return input has already been updated
        if (timestamp === this.lastFrame) {
            return;
        }

        latest = this.poll ? this.poll() : this.history.get();
        hasChanged = utils.hasChanged(this.current, latest);

        // If input has changed between frames 
        if (hasChanged) {
            this.velocity = calc.offset(this.current, latest);
            this.current = latest;
            this.inactiveFrames = 0;

            // Or it hasn't moved and our frame limit has been reached
        } else if (this.inactiveFrames >= this.maxInactiveFrames) {
                this.velocity = calc.offset(this.current, this.current);

                // Or input hasn't changed
            } else {
                    this.inactiveFrames++;
                }

        this.lastFrame = timestamp;

        return this;
    }
};

exports = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxZQUFZLENBQUM7O0FBRWIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0lBQ2hDLEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCdEMsS0FBSyxHQUFHLFlBQVk7QUFDaEIsUUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O0FBRW5DLFFBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLFFBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ25CLFFBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztBQUM3QixRQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFeEMsUUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFO0FBQ2xDLFlBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2xDO0NBQ0osQ0FBQzs7QUFFTixLQUFLLENBQUMsU0FBUyxHQUFHOzs7QUFHZCxxQkFBaUIsRUFBRSxDQUFDOzs7QUFHcEIsa0JBQWMsRUFBRSxDQUFDOzs7Ozs7OztBQVFqQixPQUFHLEVBQUUsVUFBVSxJQUFJLEVBQUU7QUFDakIsWUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDM0IsR0FBRyxHQUFHLEFBQUMsSUFBSSxLQUFLLFNBQVMsR0FBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQ3ZELGVBQU8sR0FBRyxDQUFDO0tBQ2Q7Ozs7Ozs7Ozs7Ozs7OztBQWVELFVBQU0sRUFBRSxVQUFVLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDMUIsWUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDOztBQUVoQixZQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDbkIsa0JBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDdkIsTUFBTTtBQUNILGtCQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ2pCOztBQUVELFlBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDOztBQUVwRCxlQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7OztBQVFELFdBQU8sRUFBRSxVQUFVLFNBQVMsRUFBRTtBQUMxQixZQUFJLE1BQU0sRUFBRSxVQUFVOzs7QUFBQyxBQUd2QixZQUFJLFNBQVMsS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQzlCLG1CQUFPO1NBQ1Y7O0FBRUQsY0FBTSxHQUFHLEFBQUMsSUFBSSxDQUFDLElBQUksR0FBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN4RCxrQkFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7OztBQUFDLEFBR3BELFlBQUksVUFBVSxFQUFFO0FBQ1osZ0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2xELGdCQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUN0QixnQkFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDOzs7QUFBQyxTQUczQixNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7QUFDdEQsb0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7OztBQUFDLGFBRzNELE1BQU07QUFDSCx3QkFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN6Qjs7QUFFRCxZQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7QUFFM0IsZUFBTyxJQUFJLENBQUM7S0FDZjtDQUNKLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMiLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIElucHV0IGNvbnRyb2xsZXJcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYy5qcycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzLmpzJyksXG4gICAgSGlzdG9yeSA9IHJlcXVpcmUoJy4uL2luYy9IaXN0b3J5LmpzJyksXG5cbiAgICAvKlxuICAgICAgICBJbnB1dCBjb25zdHJ1Y3RvclxuICAgICAgICBcbiAgICAgICAgICAgIFN5bnRheFxuICAgICAgICAgICAgICAgIG5ld0lucHV0KG5hbWUsIHZhbHVlWywgcG9sbF0pXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiB0byB0cmFja1xuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEluaXRpYWwgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl0gKG9wdGlvbmFsKTogRnVuY3Rpb24gdG8gcG9sbCBJbnB1dCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG5ld0lucHV0KHByb3BzWywgcG9sbF0pXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IG9mIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXSAob3B0aW9uYWwpOiBGdW5jdGlvbiB0byBwb2xsIElucHV0IGRhdGFcblxuICAgICAgICBAcmV0dXJuIFtJbnB1dF1cbiAgICAqL1xuICAgIElucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcG9sbFBvcyA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHt9O1xuICAgICAgICB0aGlzLm9mZnNldCA9IHt9O1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge307XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIaXN0b3J5KCk7XG4gICAgICAgIHRoaXMudXBkYXRlKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmMoYXJndW1lbnRzW3BvbGxQb3NdKSkge1xuICAgICAgICAgICAgdGhpcy5wb2xsID0gYXJndW1lbnRzW3BvbGxQb3NdO1xuICAgICAgICB9XG4gICAgfTtcblxuSW5wdXQucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8vIFtudW1iZXJdOiBOdW1iZXIgb2YgZnJhbWVzIG9mIGluYWN0aXZpdHkgYmVmb3JlIHZlbG9jaXR5IGlzIHR1cm5lZCB0byAwXG4gICAgbWF4SW5hY3RpdmVGcmFtZXM6IDIsXG4gICAgXG4gICAgLy8gW251bWJlcl06IE51bWJlciBvZiBmcmFtZXMgaW5wdXQgaGFzbid0IGJlZW4gdXBkYXRlZFxuICAgIGluYWN0aXZlRnJhbWVzOiAwLFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBsYXRlc3QgaW5wdXQgdmFsdWVzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ10gKG9wdGlvbmFsKTogTmFtZSBvZiBzcGVjaWZpYyBwcm9wZXJ0eSB0byByZXR1cm5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0IHx8IG51bWJlcl06IExhdGVzdCBpbnB1dCB2YWx1ZXMgb3IsIGlmIHNwZWNpZmllZCwgc2luZ2xlIHZhbHVlXG4gICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHZhciBsYXRlc3QgPSB0aGlzLmhpc3RvcnkuZ2V0KCksXG4gICAgICAgICAgICB2YWwgPSAocHJvcCAhPT0gdW5kZWZpbmVkKSA/IGxhdGVzdFtwcm9wXSA6IGxhdGVzdDtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIHRoZSBpbnB1dCB2YWx1ZXNcbiAgICAgICAgXG4gICAgICAgIFN5bnRheFxuICAgICAgICAgICAgaW5wdXQudXBkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiB0byB0cmFja1xuICAgICAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogSW5pdGlhbCB2YWx1ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaW5wdXQudXBkYXRlKHByb3BzKVxuICAgICAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IG9mIHZhbHVlc1xuICAgICAgICAgICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtJbnB1dF1cbiAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHt9O1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bShhcmcxKSkge1xuICAgICAgICAgICAgdmFsdWVzW2FyZzBdID0gYXJnMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IGFyZzA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhpc3RvcnkuYWRkKHV0aWxzLm1lcmdlKHRoaXMuY3VycmVudCwgdmFsdWVzKSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIENoZWNrIGZvciBpbnB1dCBtb3ZlbWVudCBhbmQgdXBkYXRlIHBvaW50ZXIgb2JqZWN0J3MgcHJvcGVydGllc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaW1lc3RhbXAgb2YgZnJhbWVcbiAgICAgICAgQHJldHVybiBbSW5wdXRdXG4gICAgKi9cbiAgICBvbkZyYW1lOiBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBsYXRlc3QsIGhhc0NoYW5nZWQ7XG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayBwcm92aWRlZCB0aW1lc3RhbXAgYWdhaW5zdCBsYXN0RnJhbWUgdGltZXN0YW1wIGFuZCByZXR1cm4gaW5wdXQgaGFzIGFscmVhZHkgYmVlbiB1cGRhdGVkXG4gICAgICAgIGlmICh0aW1lc3RhbXAgPT09IHRoaXMubGFzdEZyYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxhdGVzdCA9ICh0aGlzLnBvbGwpID8gdGhpcy5wb2xsKCkgOiB0aGlzLmhpc3RvcnkuZ2V0KCk7XG4gICAgICAgIGhhc0NoYW5nZWQgPSB1dGlscy5oYXNDaGFuZ2VkKHRoaXMuY3VycmVudCwgbGF0ZXN0KTtcblxuICAgICAgICAvLyBJZiBpbnB1dCBoYXMgY2hhbmdlZCBiZXR3ZWVuIGZyYW1lcyAgXG4gICAgICAgIGlmIChoYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gY2FsYy5vZmZzZXQodGhpcy5jdXJyZW50LCBsYXRlc3QpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gbGF0ZXN0O1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG5cbiAgICAgICAgLy8gT3IgaXQgaGFzbid0IG1vdmVkIGFuZCBvdXIgZnJhbWUgbGltaXQgaGFzIGJlZW4gcmVhY2hlZFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IGNhbGMub2Zmc2V0KHRoaXMuY3VycmVudCwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGlucHV0IGhhc24ndCBjaGFuZ2VkXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzKys7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gdGltZXN0YW1wO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDsiXX0=
return exports;
})();
var __small$_50 = (function() {
var exports = {};
'use strict';

/*
    @param [string || NodeList || jQuery object]:
        If string, treated as selector.
        If not, treated as preexisting NodeList || jQuery object.
*/
exports = function (selector) {
    var nodes = typeof selector === 'string' ? document.querySelectorAll(selector) : selector,
        elements = [];

    // If jQuery selection, get array of Elements
    if (nodes.get) {
        elements = nodes.get();

        // Or convert NodeList to array
    } else if (nodes.length) {
            elements = [].slice.call(nodes);

            // Or if it's just an Element, put into array
        } else {
                elements.push(nodes);
            }

    return elements;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvc2VsZWN0LWRvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLFFBQVEsRUFBRTtBQUNqQyxRQUFJLEtBQUssR0FBRyxBQUFDLE9BQU8sUUFBUSxLQUFLLFFBQVEsR0FBSSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsUUFBUTtRQUN2RixRQUFRLEdBQUcsRUFBRTs7O0FBQUMsQUFHbEIsUUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFO0FBQ1gsZ0JBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFOzs7QUFBQyxLQUcxQixNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNyQixvQkFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7O0FBQUMsU0FHbkMsTUFBTTtBQUNILHdCQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCOztBQUVELFdBQU8sUUFBUSxDQUFDO0NBQ25CLENBQUMiLCJmaWxlIjoic2VsZWN0LWRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3QgfHwgalF1ZXJ5IG9iamVjdF06XG4gICAgICAgIElmIHN0cmluZywgdHJlYXRlZCBhcyBzZWxlY3Rvci5cbiAgICAgICAgSWYgbm90LCB0cmVhdGVkIGFzIHByZWV4aXN0aW5nIE5vZGVMaXN0IHx8IGpRdWVyeSBvYmplY3QuXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgbm9kZXMgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yLFxuICAgICAgICBlbGVtZW50cyA9IFtdO1xuXG4gICAgLy8gSWYgalF1ZXJ5IHNlbGVjdGlvbiwgZ2V0IGFycmF5IG9mIEVsZW1lbnRzXG4gICAgaWYgKG5vZGVzLmdldCkge1xuICAgICAgICBlbGVtZW50cyA9IG5vZGVzLmdldCgpO1xuXG4gICAgLy8gT3IgY29udmVydCBOb2RlTGlzdCB0byBhcnJheVxuICAgIH0gZWxzZSBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChub2Rlcyk7XG5cbiAgICAvLyBPciBpZiBpdCdzIGp1c3QgYW4gRWxlbWVudCwgcHV0IGludG8gYXJyYXlcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50cy5wdXNoKG5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG59OyJdfQ==
return exports;
})();
var __small$_51 = (function() {
var exports = {};
'use strict';

var valueTypesManager = __small$_19,
    calc = __small$_34,
    utils = __small$_35,
    isNum = utils.isNum,
    each = utils.each;

var numericalValues = ['current', 'to', 'min', 'max', 'velocity', 'friction', 'spring', 'acceleration'],
    numNumericalValues = numericalValues.length,
    defaultValue = {
    current: 0,
    velocity: 0,
    speed: 0,
    frameChange: 0
};

function checkNumericalValue(name) {
    return numericalValues.indexOf(name) > -1;
}

/*
    Check Role typeMaps to see if this value name has been mapped
    to a specific value type

    @param [string]
    @param [array]
    @returns [string]: Value type
*/
function checkRoles(name, roles) {
    var valueType;

    each(roles, function (key, role) {
        if (role._typeMap) {
            valueType = role._typeMap[role.map(name)] || valueType;
        }
    });

    return valueType;
}

/*
    Check value for special type

    @param [object]
    @param [object]
    @param [object]
    @param [string]
    @returns [string || false]
*/
function checkValueType(existingValue, newValue, scope, valueName) {
    var valueType;

    // Check existing value for type already set
    if (existingValue && existingValue.type) {
        valueType = existingValue.type;
    } else {
        // Or check Role _typeMap properties
        if (scope.roles) {
            valueType = checkRoles(valueName, scope.roles);
        }

        // Finally run tests
        if (!valueType && utils.isString(newValue.current)) {
            valueType = valueTypesManager.test(newValue.current);
        }
    }

    return valueType;
}

/*
    Resolve a property

    @param [string]
    @param [string || function || number]
    @param [object]
    @param [object]
    @returns [number]
*/
function resolve(name, prop, value, scope) {
    var isNumericalValue = checkNumericalValue(name);

    // If function, resolve
    if (utils.isFunc(prop) && isNumericalValue) {
        prop = prop.call(scope, scope);
    }

    // If string, check for relative numbers and units
    if (utils.isString(prop)) {
        // If relative value
        if (prop.indexOf('=') > 0) {
            prop = calc.relativeValue(value.current, prop);
        }

        // If unit
        if (isNumericalValue) {
            splitUnit(prop, value);
        }
    }

    if (isNumericalValue) {
        prop = parseFloat(prop);
    }

    return prop;
}

/*
    Split a value into sub-values

    @param [string]
    @param [object]
    @param [object]
    @param [valueTypeHandler]
    @returns [object]
*/
function split(name, value, scope, valueTypeHandler) {
    var splitValues = {},
        i = 0;

    var _loop = function () {
        var propName = numericalValues[i];
        var splitProp = {};

        if (value.hasOwnProperty(propName)) {
            var valueProp = value[propName];

            // If we need to first resolve this, resolve
            if (utils.isFunc(valueProp)) {
                valueProp = valueProp.call(scope, scope);
            }

            if (!utils.isString(valueProp)) {
                return 'continue';
            }

            splitProp = valueTypeHandler.split(valueProp);

            // Assign split properties to each child value
            each(splitProp, function (key, prop) {
                // Create new value if none exists
                splitValues[key] = splitValues[key] || utils.copy(valueTypesManager.defaultProps(value.type, key));
                splitValues[key][propName] = prop;

                if (utils.isString(splitProp[key])) {
                    splitUnit(splitValues[key][propName], splitValues[key]);
                }
            });
        }
    };

    for (; i < numNumericalValues; i++) {
        var _ret = _loop();

        if (_ret === 'continue') continue;
    }

    return splitValues;
}

/*
    Split value into number and unit, and set unit to value

    @param [string]
    @param [object]
*/
function splitUnit(property, hostValue) {
    if (utils.isNum(property)) {
        return property;
    }
    var returnVal = property;

    var _utils$splitValUnit = utils.splitValUnit(property);

    var value = _utils$splitValUnit.value;
    var unit = _utils$splitValUnit.unit;

    if (!isNaN(value)) {
        returnVal = value;
        if (unit) {
            hostValue.unit = unit;
        }
    }

    return returnVal;
}

/*
    Preprocess incoming values, splitting non-numerical values
    into sub-values ie hex

    @param [object]
    @param [object]
    @param [object]
    @param [string]
*/
function preprocess(existing, incoming, scope, defaultProp) {
    var values = {};

    each(incoming, function (key, value) {
        var existingValue = existing[key],
            newValue = {};

        if (utils.isObj(value)) {
            newValue = value;
        } else {
            newValue[defaultProp] = value;
        }

        // If value doesn't have a special type, check for one
        newValue.type = checkValueType(existingValue, newValue, scope, key);

        values[key] = newValue;

        // If we have a type property, split/assign default props
        if (newValue.type) {
            var typeHandler = valueTypesManager[newValue.type];

            // If valueType handler has a split function, split this value
            if (typeHandler.split) {
                var splitValues = split(key, newValue, scope, typeHandler);
                newValue.children = {};

                each(splitValues, function (childName, childValue) {
                    each(newValue, function (key, value) {
                        // Not great is it
                        if (key !== 'children' && key !== 'action' && childValue[key] === undefined) {
                            childValue[key] = value;
                        }
                    });

                    childValue.parent = childValue.name = key;
                    childValue.propName = childName;

                    delete childValue.type;

                    newValue.children[childName] = values[key + childName] = childValue;
                });

                if (typeHandler.template) {
                    newValue.template = existingValue ? existingValue.template : typeHandler.template(newValue.current);
                }

                // Or just assign default properties for this value
            } else {
                    values[key] = utils.merge(valueTypesManager.defaultProps(newValue.type, key), newValue);
                }
        }
    });

    return values;
}

exports = {

    /*
        Flip value target/origin
    */
    flip: function (value) {
        var target = value.target !== undefined ? value.target : value.current;
        value.target = value.to = value.origin;
        value.origin = target;
    },

    /*
        Merge existing and incoming values, resolving properties
        set as functions and splitting non-numerical values ie hex
         @param [object]
        @param [object]
        @param [object]
        @param [string] (optional)
        @param [object]
        @returns [object]: New values object
    */
    process: function (existing, incoming, inherit, defaultProp, scope) {
        existing = existing || {};
        defaultProp = defaultProp || 'current';
        var preprocessed = preprocess(existing, incoming, scope, defaultProp);

        each(preprocessed, function (key, value) {
            var newValue = existing[key] || utils.copy(defaultValue),
                hasChildren = value.children !== undefined,
                defaultActionValue = inherit.action ? inherit.action.getDefaultValue() : {};

            value.action = inherit.action;

            each(defaultActionValue, function (propName, defaultActionProp) {
                newValue[propName] = inherit.hasOwnProperty(propName) && !value.hasOwnProperty(propName) ? inherit[propName] : defaultActionProp;
            });

            each(value, function (valueName, valueProp) {
                // If property is not undefined or a number, resolve
                if (valueProp !== undefined && !isNum(valueProp) && !hasChildren) {
                    valueProp = resolve(valueName, valueProp, newValue, scope);
                }

                newValue[valueName] = valueProp;

                // Set internal target if this property is 'to'
                if (valueName === 'to') {
                    newValue.target = newValue.to;
                }
            });

            newValue.origin = newValue.current;
            newValue.hasRange = isNum(newValue.min) || isNum(newValue.max) ? true : false;

            existing[key] = newValue;
            scope.updateOrder(key, utils.has(newValue, 'watch'), hasChildren);
        });

        return existing;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci92YWx1ZS1vcGVyYXRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUM7SUFDckQsSUFBSSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDN0IsS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDL0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLO0lBQ25CLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztBQUV0QixJQUFNLGVBQWUsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxjQUFjLENBQUM7SUFDckcsa0JBQWtCLEdBQUcsZUFBZSxDQUFDLE1BQU07SUFDM0MsWUFBWSxHQUFHO0FBQ1gsV0FBTyxFQUFFLENBQUM7QUFDVixZQUFRLEVBQUUsQ0FBQztBQUNYLFNBQUssRUFBRSxDQUFDO0FBQ1IsZUFBVyxFQUFFLENBQUM7Q0FDakIsQ0FBQzs7QUFFTixTQUFTLG1CQUFtQixDQUFDLElBQUksRUFBRTtBQUMvQixXQUFRLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUU7Q0FDL0M7Ozs7Ozs7Ozs7QUFBQSxBQVVELFNBQVMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDN0IsUUFBSSxTQUFTLENBQUM7O0FBRWQsUUFBSSxDQUFDLEtBQUssRUFBRSxVQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUs7QUFDdkIsWUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2YscUJBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUM7U0FDMUQ7S0FDSixDQUFDLENBQUM7O0FBRUgsV0FBTyxTQUFTLENB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S0FBSyxJQUFJLEVBQUU7QUFDcEIsNEJBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztpQkFDakM7YUFDSixDQUFDLENBQUM7O0FBRUgsb0JBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztBQUNuQyxvQkFBUSxDQUFDLFFBQVEsR0FBRyxBQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBSSxJQUFJLEdBQUcsS0FBSyxDQUFDOztBQUVoRixvQkFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUN6QixpQkFBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDckUsQ0FBQyxDQUFDOztBQUVILGVBQU8sUUFBUSxDQUFDO0tBQ25CO0NBQ0osQ0FBQyIsImZpbGUiOiJ2YWx1ZS1vcGVyYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHZhbHVlVHlwZXNNYW5hZ2VyID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvbWFuYWdlcicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgaXNOdW0gPSB1dGlscy5pc051bSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaDtcblxuY29uc3QgbnVtZXJpY2FsVmFsdWVzID0gWydjdXJyZW50JywgJ3RvJywgJ21pbicsICdtYXgnLCAndmVsb2NpdHknLCAnZnJpY3Rpb24nLCAnc3ByaW5nJywgJ2FjY2VsZXJhdGlvbiddLFxuICAgIG51bU51bWVyaWNhbFZhbHVlcyA9IG51bWVyaWNhbFZhbHVlcy5sZW5ndGgsXG4gICAgZGVmYXVsdFZhbHVlID0ge1xuICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICB2ZWxvY2l0eTogMCxcbiAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgIGZyYW1lQ2hhbmdlOiAwXG4gICAgfTtcblxuZnVuY3Rpb24gY2hlY2tOdW1lcmljYWxWYWx1ZShuYW1lKSB7XG4gICAgcmV0dXJuIChudW1lcmljYWxWYWx1ZXMuaW5kZXhPZihuYW1lKSA+IC0xKTtcbn1cblxuLypcbiAgICBDaGVjayBSb2xlIHR5cGVNYXBzIHRvIHNlZSBpZiB0aGlzIHZhbHVlIG5hbWUgaGFzIGJlZW4gbWFwcGVkXG4gICAgdG8gYSBzcGVjaWZpYyB2YWx1ZSB0eXBlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEByZXR1cm5zIFtzdHJpbmddOiBWYWx1ZSB0eXBlXG4qL1xuZnVuY3Rpb24gY2hlY2tSb2xlcyhuYW1lLCByb2xlcykge1xuICAgIHZhciB2YWx1ZVR5cGU7XG5cbiAgICBlYWNoKHJvbGVzLCAoa2V5LCByb2xlKSA9PiB7XG4gICAgICAgIGlmIChyb2xlLl90eXBlTWFwKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGUgPSByb2xlLl90eXBlTWFwW3JvbGUubWFwKG5hbWUpXSB8fCB2YWx1ZVR5cGU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YWx1ZVR5cGU7XG59XG5cbi8qXG4gICAgQ2hlY2sgdmFsdWUgZm9yIHNwZWNpYWwgdHlwZVxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybnMgW3N0cmluZyB8fCBmYWxzZV1cbiovXG5mdW5jdGlvbiBjaGVja1ZhbHVlVHlwZShleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSwgc2NvcGUsIHZhbHVlTmFtZSkge1xuICAgIHZhciB2YWx1ZVR5cGU7XG5cbiAgICAvLyBDaGVjayBleGlzdGluZyB2YWx1ZSBmb3IgdHlwZSBhbHJlYWR5IHNldFxuICAgIGlmIChleGlzdGluZ1ZhbHVlICYmIGV4aXN0aW5nVmFsdWUudHlwZSkge1xuICAgICAgICB2YWx1ZVR5cGUgPSBleGlzdGluZ1ZhbHVlLnR5cGU7XG4gICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3IgY2hlY2sgUm9sZSBfdHlwZU1hcCBwcm9wZXJ0aWVzXG4gICAgICAgIGlmIChzY29wZS5yb2xlcykge1xuICAgICAgICAgICAgdmFsdWVUeXBlID0gY2hlY2tSb2xlcyh2YWx1ZU5hbWUsIHNjb3BlLnJvbGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmFsbHkgcnVuIHRlc3RzXG4gICAgICAgIGlmICghdmFsdWVUeXBlICYmIHV0aWxzLmlzU3RyaW5nKG5ld1ZhbHVlLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZVR5cGVzTWFuYWdlci50ZXN0KG5ld1ZhbHVlLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlVHlwZTtcbn1cblxuLypcbiAgICBSZXNvbHZlIGEgcHJvcGVydHlcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uIHx8IG51bWJlcl1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcmV0dXJucyBbbnVtYmVyXVxuKi9cbmZ1bmN0aW9uIHJlc29sdmUobmFtZSwgcHJvcCwgdmFsdWUsIHNjb3BlKSB7XG4gICAgbGV0IGlzTnVtZXJpY2FsVmFsdWUgPSBjaGVja051bWVyaWNhbFZhbHVlKG5hbWUpO1xuXG4gICAgLy8gSWYgZnVuY3Rpb24sIHJlc29sdmVcbiAgICBpZiAodXRpbHMuaXNGdW5jKHByb3ApICYmIGlzTnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgICAgcHJvcCA9IHByb3AuY2FsbChzY29wZSwgc2NvcGUpO1xuICAgIH1cblxuICAgIC8vIElmIHN0cmluZywgY2hlY2sgZm9yIHJlbGF0aXZlIG51bWJlcnMgYW5kIHVuaXRzXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKHByb3ApKSB7XG4gICAgICAgIC8vIElmIHJlbGF0aXZlIHZhbHVlXG4gICAgICAgIGlmIChwcm9wLmluZGV4T2YoJz0nKSA+IDApIHtcbiAgICAgICAgICAgIHByb3AgPSBjYWxjLnJlbGF0aXZlVmFsdWUodmFsdWUuY3VycmVudCwgcHJvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB1bml0XG4gICAgICAgIGlmIChpc051bWVyaWNhbFZhbHVlKSB7XG4gICAgICAgICAgICBzcGxpdFVuaXQocHJvcCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgICAgcHJvcCA9IHBhcnNlRmxvYXQocHJvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG59XG5cbi8qXG4gICAgU3BsaXQgYSB2YWx1ZSBpbnRvIHN1Yi12YWx1ZXNcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbdmFsdWVUeXBlSGFuZGxlcl1cbiAgICBAcmV0dXJucyBbb2JqZWN0XVxuKi9cbmZ1bmN0aW9uIHNwbGl0KG5hbWUsIHZhbHVlLCBzY29wZSwgdmFsdWVUeXBlSGFuZGxlcikge1xuICAgIHZhciBzcGxpdFZhbHVlcyA9IHt9LFxuICAgICAgICBpID0gMDtcblxuICAgIGZvciAoOyBpIDwgbnVtTnVtZXJpY2FsVmFsdWVzOyBpKyspIHtcbiAgICAgICAgbGV0IHByb3BOYW1lID0gbnVtZXJpY2FsVmFsdWVzW2ldO1xuICAgICAgICBsZXQgc3BsaXRQcm9wID0ge307XG5cbiAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlUHJvcCA9IHZhbHVlW3Byb3BOYW1lXTtcblxuICAgICAgICAgICAgLy8gSWYgd2UgbmVlZCB0byBmaXJzdCByZXNvbHZlIHRoaXMsIHJlc29sdmVcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmModmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlUHJvcCA9IHZhbHVlUHJvcC5jYWxsKHNjb3BlLCBzY29wZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdXRpbHMuaXNTdHJpbmcodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGxpdFByb3AgPSB2YWx1ZVR5cGVIYW5kbGVyLnNwbGl0KHZhbHVlUHJvcCk7XG5cbiAgICAgICAgICAgIC8vIEFzc2lnbiBzcGxpdCBwcm9wZXJ0aWVzIHRvIGVhY2ggY2hpbGQgdmFsdWVcbiAgICAgICAgICAgIGVhY2goc3BsaXRQcm9wLCAoa2V5LCBwcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyB2YWx1ZSBpZiBub25lIGV4aXN0c1xuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzW2tleV0gPSBzcGxpdFZhbHVlc1trZXldIHx8IHV0aWxzLmNvcHkodmFsdWVUeXBlc01hbmFnZXIuZGVmYXVsdFByb3BzKHZhbHVlLnR5cGUsIGtleSkpO1xuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzW2tleV1bcHJvcE5hbWVdID0gcHJvcDtcblxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzcGxpdFByb3Bba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRVbml0KHNwbGl0VmFsdWVzW2tleV1bcHJvcE5hbWVdLCBzcGxpdFZhbHVlc1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzcGxpdFZhbHVlcztcbn1cblxuLypcbiAgICBTcGxpdCB2YWx1ZSBpbnRvIG51bWJlciBhbmQgdW5pdCwgYW5kIHNldCB1bml0IHRvIHZhbHVlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW29iamVjdF1cbiovXG5mdW5jdGlvbiBzcGxpdFVuaXQocHJvcGVydHksIGhvc3RWYWx1ZSkge1xuICAgIGlmICh1dGlscy5pc051bShwcm9wZXJ0eSkpIHsgcmV0dXJuIHByb3BlcnR5OyB9XG4gICAgbGV0IHJldHVyblZhbCA9IHByb3BlcnR5LFxuICAgICAgICB7IHZhbHVlLCB1bml0IH0gPSB1dGlscy5zcGxpdFZhbFVuaXQocHJvcGVydHkpO1xuXG4gICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuVmFsID0gdmFsdWU7XG4gICAgICAgIGlmICh1bml0KSB7XG4gICAgICAgICAgICBob3N0VmFsdWUudW5pdCA9IHVuaXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0dXJuVmFsO1xufVxuXG4vKlxuICAgIFByZXByb2Nlc3MgaW5jb21pbmcgdmFsdWVzLCBzcGxpdHRpbmcgbm9uLW51bWVyaWNhbCB2YWx1ZXNcbiAgICBpbnRvIHN1Yi12YWx1ZXMgaWUgaGV4XG5cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW3N0cmluZ11cbiovXG5mdW5jdGlvbiBwcmVwcm9jZXNzKGV4aXN0aW5nLCBpbmNvbWluZywgc2NvcGUsIGRlZmF1bHRQcm9wKSB7XG4gICAgdmFyIHZhbHVlcyA9IHt9O1xuXG4gICAgZWFjaChpbmNvbWluZywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGV4aXN0aW5nVmFsdWUgPSBleGlzdGluZ1trZXldLFxuICAgICAgICAgICAgbmV3VmFsdWUgPSB7fTtcblxuICAgICAgICBpZiAodXRpbHMuaXNPYmoodmFsdWUpKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VmFsdWVbZGVmYXVsdFByb3BdID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB2YWx1ZSBkb2Vzbid0IGhhdmUgYSBzcGVjaWFsIHR5cGUsIGNoZWNrIGZvciBvbmVcbiAgICAgICAgbmV3VmFsdWUudHlwZSA9IGNoZWNrVmFsdWVUeXBlKGV4aXN0aW5nVmFsdWUsIG5ld1ZhbHVlLCBzY29wZSwga2V5KTtcblxuICAgICAgICB2YWx1ZXNba2V5XSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSB0eXBlIHByb3BlcnR5LCBzcGxpdC9hc3NpZ24gZGVmYXVsdCBwcm9wc1xuICAgICAgICBpZiAobmV3VmFsdWUudHlwZSkge1xuICAgICAgICAgICAgbGV0IHR5cGVIYW5kbGVyID0gdmFsdWVUeXBlc01hbmFnZXJbbmV3VmFsdWUudHlwZV07XG5cbiAgICAgICAgICAgIC8vIElmIHZhbHVlVHlwZSBoYW5kbGVyIGhhcyBhIHNwbGl0IGZ1bmN0aW9uLCBzcGxpdCB0aGlzIHZhbHVlXG4gICAgICAgICAgICBpZiAodHlwZUhhbmRsZXIuc3BsaXQpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRWYWx1ZXMgPSBzcGxpdChrZXksIG5ld1ZhbHVlLCBzY29wZSwgdHlwZUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0ge307XG5cbiAgICAgICAgICAgICAgICBlYWNoKHNwbGl0VmFsdWVzLCAoY2hpbGROYW1lLCBjaGlsZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVhY2gobmV3VmFsdWUsIChrZXkgLHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3QgZ3JlYXQgaXMgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAnYWN0aW9uJyAmJiBjaGlsZFZhbHVlW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLnBhcmVudCA9IGNoaWxkVmFsdWUubmFtZSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZS5wcm9wTmFtZSA9IGNoaWxkTmFtZTtcblxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRWYWx1ZS50eXBlO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuW2NoaWxkTmFtZV0gPSB2YWx1ZXNba2V5ICsgY2hpbGROYW1lXSA9IGNoaWxkVmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZUhhbmRsZXIudGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudGVtcGxhdGUgPSBleGlzdGluZ1ZhbHVlID8gZXhpc3RpbmdWYWx1ZS50ZW1wbGF0ZSA6IHR5cGVIYW5kbGVyLnRlbXBsYXRlKG5ld1ZhbHVlLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3IganVzdCBhc3NpZ24gZGVmYXVsdCBwcm9wZXJ0aWVzIGZvciB0aGlzIHZhbHVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlc1trZXldID0gdXRpbHMubWVyZ2UodmFsdWVUeXBlc01hbmFnZXIuZGVmYXVsdFByb3BzKG5ld1ZhbHVlLnR5cGUsIGtleSksIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICAvKlxuICAgICAgICBGbGlwIHZhbHVlIHRhcmdldC9vcmlnaW5cbiAgICAqL1xuICAgIGZsaXA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gKHZhbHVlLnRhcmdldCAhPT0gdW5kZWZpbmVkKSA/IHZhbHVlLnRhcmdldCA6IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIHZhbHVlLnRhcmdldCA9IHZhbHVlLnRvID0gdmFsdWUub3JpZ2luO1xuICAgICAgICB2YWx1ZS5vcmlnaW4gPSB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIE1lcmdlIGV4aXN0aW5nIGFuZCBpbmNvbWluZyB2YWx1ZXMsIHJlc29sdmluZyBwcm9wZXJ0aWVzXG4gICAgICAgIHNldCBhcyBmdW5jdGlvbnMgYW5kIHNwbGl0dGluZyBub24tbnVtZXJpY2FsIHZhbHVlcyBpZSBoZXhcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcGFyYW0gW3N0cmluZ10gKG9wdGlvbmFsKVxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHJldHVybnMgW29iamVjdF06IE5ldyB2YWx1ZXMgb2JqZWN0XG4gICAgKi9cbiAgICBwcm9jZXNzOiBmdW5jdGlvbiAoZXhpc3RpbmcsIGluY29taW5nLCBpbmhlcml0LCBkZWZhdWx0UHJvcCwgc2NvcGUpIHtcbiAgICAgICAgZXhpc3RpbmcgPSBleGlzdGluZyB8fCB7fTtcbiAgICAgICAgZGVmYXVsdFByb3AgPSBkZWZhdWx0UHJvcCB8fCAnY3VycmVudCc7XG4gICAgICAgIGxldCBwcmVwcm9jZXNzZWQgPSBwcmVwcm9jZXNzKGV4aXN0aW5nLCBpbmNvbWluZywgc2NvcGUsIGRlZmF1bHRQcm9wKTtcblxuICAgICAgICBlYWNoKHByZXByb2Nlc3NlZCwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IGV4aXN0aW5nW2tleV0gfHwgdXRpbHMuY29weShkZWZhdWx0VmFsdWUpLFxuICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gKHZhbHVlLmNoaWxkcmVuICE9PSB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRBY3Rpb25WYWx1ZSA9IGluaGVyaXQuYWN0aW9uID8gaW5oZXJpdC5hY3Rpb24uZ2V0RGVmYXVsdFZhbHVlKCkgOiB7fTtcblxuICAgICAgICAgICAgdmFsdWUuYWN0aW9uID0gaW5oZXJpdC5hY3Rpb247XG5cbiAgICAgICAgICAgIGVhY2goZGVmYXVsdEFjdGlvblZhbHVlLCAocHJvcE5hbWUsIGRlZmF1bHRBY3Rpb25Qcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gKGluaGVyaXQuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICYmICF2YWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpID8gaW5oZXJpdFtwcm9wTmFtZV0gOiBkZWZhdWx0QWN0aW9uUHJvcDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlYWNoKHZhbHVlLCAodmFsdWVOYW1lLCB2YWx1ZVByb3ApID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwcm9wZXJ0eSBpcyBub3QgdW5kZWZpbmVkIG9yIGEgbnVtYmVyLCByZXNvbHZlXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmICFpc051bSh2YWx1ZVByb3ApICYmICFoYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3AgPSByZXNvbHZlKHZhbHVlTmFtZSwgdmFsdWVQcm9wLCBuZXdWYWx1ZSwgc2NvcGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlW3ZhbHVlTmFtZV0gPSB2YWx1ZVByb3A7XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgaW50ZXJuYWwgdGFyZ2V0IGlmIHRoaXMgcHJvcGVydHkgaXMgJ3RvJ1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZU5hbWUgPT09ICd0bycpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudGFyZ2V0ID0gbmV3VmFsdWUudG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG5ld1ZhbHVlLm9yaWdpbiA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICBuZXdWYWx1ZS5oYXNSYW5nZSA9IChpc051bShuZXdWYWx1ZS5taW4pIHx8IGlzTnVtKG5ld1ZhbHVlLm1heCkpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgICAgICBleGlzdGluZ1trZXldID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBzY29wZS51cGRhdGVPcmRlcihrZXksIHV0aWxzLmhhcyhuZXdWYWx1ZSwgJ3dhdGNoJyksIGhhc0NoaWxkcmVuKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgIH1cbn07Il19
return exports;
})();
var __small$_25 = (function() {
var exports = {};
'use strict';

var Bezier = ((function() {
var exports = {};
/*
    Bezier function generator
        
    Gaëtan Renaudeau's BezierEasing
    https://github.com/gre/bezier-easing/blob/master/index.js  
    https://github.com/gre/bezier-easing/blob/master/LICENSE
    You're a hero
    
    Use
    
        var easeOut = new Bezier(.17,.67,.83,.67),
            x = easeOut(0.5); // returns 0.627...
*/
"use strict";

var NEWTON_ITERATIONS = 8,
    NEWTON_MIN_SLOPE = 0.001,
    SUBDIVISION_PRECISION = 0.0000001,
    SUBDIVISION_MAX_ITERATIONS = 10,
    K_SPLINE_TABLE_SIZE = 11,
    K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0),
    FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined',
    a = function (a1, a2) {
    return 1.0 - 3.0 * a2 + 3.0 * a1;
},
    b = function (a1, a2) {
    return 3.0 * a2 - 6.0 * a1;
},
    c = function (a1) {
    return 3.0 * a1;
},
    getSlope = function (t, a1, a2) {
    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
},
    calcBezier = function (t, a1, a2) {
    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
},

/*
    Bezier constructor
*/
Bezier = function (mX1, mY1, mX2, mY2) {
    var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE),
        _precomputed = false,
        binarySubdivide = function (aX, aA, aB) {
        var currentX,
            currentT,
            i = 0;

        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) {
                aB = currentT;
            } else {
                aA = currentT;
            }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

        return currentT;
    },
        newtonRaphsonIterate = function (aX, aGuessT) {
        var i = 0,
            currentSlope = 0.0,
            currentX;

        for (; i < NEWTON_ITERATIONS; ++i) {
            currentSlope = getSlope(aGuessT, mX1, mX2);

            if (currentSlope === 0.0) {
                return aGuessT;
            }

            currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }

        return aGuessT;
    },
        calcSampleValues = function () {
        for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
            sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
        }
    },
        getTForX = function (aX) {
        var intervalStart = 0.0,
            currentSample = 1,
            lastSample = K_SPLINE_TABLE_SIZE - 1,
            dist = 0.0,
            guessForT = 0.0,
            initialSlope = 0.0;

        for (; currentSample != lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += K_SAMPLE_STEP_SIZE;
        }

        --currentSample;

        dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;

        initialSlope = getSlope(guessForT, mX1, mX2);

        // If slope is greater than min
        if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT);
            // Slope is equal to min
        } else if (initialSlope === 0.0) {
                return guessForT;
                // Slope is less than min
            } else {
                    return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
                }
    },
        precompute = function () {
        _precomputed = true;
        if (mX1 != mY1 || mX2 != mY2) {
            calcSampleValues();
        }
    },

    /*
        Generated function
        
        Returns value 0-1 based on X
    */
    f = function (aX) {
        var returnValue;

        if (!_precomputed) {
            precompute();
        }

        // If linear gradient, return X as T
        if (mX1 === mY1 && mX2 === mY2) {
            returnValue = aX;

            // If at start, return 0
        } else if (aX === 0) {
                returnValue = 0;

                // If at end, return 1
            } else if (aX === 1) {
                    returnValue = 1;
                } else {
                    returnValue = calcBezier(getTForX(aX), mY1, mY2);
                }

        return returnValue;
    };

    return f;
};

exports = Bezier;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL3R3ZWVuL0Jlemllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBYUEsWUFBWSxDQUFDOztBQUViLElBQUksaUJBQWlCLEdBQUcsQ0FBQztJQUNyQixnQkFBZ0IsR0FBRyxLQUFLO0lBQ3hCLHFCQUFxQixHQUFHLFNBQVM7SUFDakMsMEJBQTBCLEdBQUcsRUFBRTtJQUMvQixtQkFBbUIsR0FBRyxFQUFFO0lBQ3hCLGtCQUFrQixHQUFHLEdBQUcsSUFBSSxtQkFBbUIsR0FBRyxHQUFHLENBQUEsQUFBQztJQUN0RCxrQkFBa0IsR0FBSSxPQUFPLFlBQVksS0FBSyxXQUFXLEFBQUM7SUFFMUQsQ0FBQyxHQUFHLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNsQixXQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7Q0FDcEM7SUFFRCxDQUFDLEdBQUcsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQ2xCLFdBQU8sR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO0NBQzlCO0lBRUQsQ0FBQyxHQUFHLFVBQVUsRUFBRSxFQUFFO0FBQ2QsV0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDO0NBQ25CO0lBRUQsUUFBUSxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDNUIsV0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDaEU7SUFFRCxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUM5QixXQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFB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RUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDcEQ7O0FBRUQsZUFBTyxXQUFXLENBQUM7S0FDdEIsQ0FBQzs7QUFFRixXQUFPLENBQUMsQ0FBQztDQUNoQixDQUFDOztBQUVOLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6IkJlemllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA4LFxuICAgIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMSxcbiAgICBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDEsXG4gICAgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMCxcbiAgICBLX1NQTElORV9UQUJMRV9TSVpFID0gMTEsXG4gICAgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApLFxuICAgIEZMT0FUXzMyX1NVUFBPUlRFRCA9ICh0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyksXG4gICAgXG4gICAgYSA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG4gICAgfSxcbiAgICBcbiAgICBiID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgICAgICByZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcbiAgICB9LFxuICAgIFxuICAgIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGExO1xuICAgIH0sXG5cbiAgICBnZXRTbG9wZSA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xuICAgIH0sXG5cbiAgICBjYWxjQmV6aWVyID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgICAgICByZXR1cm4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQmV6aWVyIGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBCZXppZXIgPSBmdW5jdGlvbiAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpLFxuICAgICAgICAgICAgX3ByZWNvbXB1dGVkID0gZmFsc2UsXG4gICAgXG4gICAgICAgICAgICBiaW5hcnlTdWJkaXZpZGUgPSBmdW5jdGlvbiAoYVgsIGFBLCBhQikge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAgICAgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBLX1NQTElORV9UQUJMRV9TSVpFOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2FtcGxlID0gMSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLFxuICAgICAgICAgICAgICAgICAgICBkaXN0ID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBndWVzc0ZvclQgPSAwLjAsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbG9wZSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlKzFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgICAgICAgICBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBzbG9wZSBpcyBncmVhdGVyIHRoYW4gbWluXG4gICAgICAgICAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgICAgICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHByZWNvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIEdlbmVyYXRlZCBmdW5jdGlvblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFJldHVybnMgdmFsdWUgMC0xIGJhc2VkIG9uIFhcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBmID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHVyblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlY29tcHV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICAgICAgICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBCZXppZXI7Il19
return exports;
})()),

/*
    Mirror easing
    
    Mirrors the provided easing function, used here for mirroring an
    easeIn into an easeInOut
    
    @param [number]: Progress, from 0 - 1, of current shift
    @param [function]: The easing function to mirror
    @returns [number]: The easing-adjusted delta
*/
mirrorEasing = function (method) {
    return function (progress, strength) {
        return progress <= 0.5 ? method(2 * progress, strength) / 2 : (2 - method(2 * (1 - progress), strength)) / 2;
    };
},

/*
    Reverse easing
    
    Reverses the output of the provided easing function, used for flipping easeIn
    curve to an easeOut.
    
    @param [number]: Progress, from 0 - 1, of current shift
    @param [function]: The easing function to reverse
    @returns [number]: The easing-adjusted delta
*/
reverseEasing = function (method) {
    return function (progress, strength) {
        return 1 - method(1 - progress, strength);
    };
};

/*
    Easing class

    If provided easing function, returns easing function with 
    in/out/inOut variations

    If provided four arguments, returns new Bezier class instead.
*/
var Easing = function (x1, y1, x2, y2) {
    var method = x1,
        easingFunction;

    // If this is a bezier curve, return a bezier function
    if (arguments.length > 1) {
        easingFunction = new Bezier(x1, y1, x2, y2);
    } else {
        easingFunction = function (progress, strength) {
            return method(progress, strength);
        };
        easingFunction.in = function (progress, strength) {
            return method(progress, strength);
        };
        easingFunction.out = reverseEasing(method);
        easingFunction.inOut = mirrorEasing(method);
    }

    return easingFunction;
};

exports = Easing;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL3R3ZWVuL0Vhc2luZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7Ozs7Ozs7Ozs7OztBQVk1QixZQUFZLEdBQUcsVUFBQSxNQUFNO1dBQUksVUFBQyxRQUFRLEVBQUUsUUFBUTtlQUFLLEFBQUMsUUFBUSxJQUFJLEdBQUcsR0FBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFBLEFBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQSxHQUFJLENBQUM7S0FBQTtDQUFBOzs7Ozs7Ozs7Ozs7QUFZeEosYUFBYSxHQUFHLFVBQUEsTUFBTTtXQUFJLFVBQUMsUUFBUSxFQUFFLFFBQVE7ZUFBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsUUFBUSxDQUFDO0tBQUE7Q0FBQTs7Ozs7Ozs7OztBQUFDLEFBVXpGLElBQUksTUFBTSxHQUFHLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQ25DLFFBQUksTUFBTSxHQUFHLEVBQUU7UUFDWCxjQUFjOzs7QUFBQyxBQUduQixRQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLHNCQUFjLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FFL0MsTUFBTTtBQUNILHNCQUFjLEdBQUcsVUFBQyxRQUFRLEVBQUUsUUFBUTttQkFBSyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztTQUFBLENBQUM7QUFDcEUsc0JBQWMsQ0FBQyxFQUFFLEdBQUcsVUFBQyxRQUFRLEVBQUUsUUFBUTttQkFBSyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztTQUFBLENBQUM7QUFDdkUsc0JBQWMsQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLHNCQUFjLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMvQzs7QUFFRCxXQUFPLGNBQWMsQ0FBQztDQUN6QixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6IkVhc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBCZXppZXIgPSByZXF1aXJlKCcuL0JlemllcicpLFxuXG4gICAgLypcbiAgICAgICAgTWlycm9yIGVhc2luZ1xuICAgICAgICBcbiAgICAgICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgICAgICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gICAgICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4gICAgKi9cbiAgICBtaXJyb3JFYXNpbmcgPSBtZXRob2QgPT4gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gKHByb2dyZXNzIDw9IDAuNSkgPyBtZXRob2QoMiAqIHByb2dyZXNzLCBzdHJlbmd0aCkgLyAyIDogKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpLCBzdHJlbmd0aCkpIC8gMixcbiAgICAgICAgICAgIFxuICAgIC8qXG4gICAgICAgIFJldmVyc2UgZWFzaW5nXG4gICAgICAgIFxuICAgICAgICBSZXZlcnNlcyB0aGUgb3V0cHV0IG9mIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgZm9yIGZsaXBwaW5nIGVhc2VJblxuICAgICAgICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gICAgICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4gICAgKi9cbiAgICByZXZlcnNlRWFzaW5nID0gbWV0aG9kID0+IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IDEgLSBtZXRob2QoMSAtIHByb2dyZXNzLCBzdHJlbmd0aCk7XG5cbi8qXG4gICAgRWFzaW5nIGNsYXNzXG5cbiAgICBJZiBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHJldHVybnMgZWFzaW5nIGZ1bmN0aW9uIHdpdGggXG4gICAgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcblxuICAgIElmIHByb3ZpZGVkIGZvdXIgYXJndW1lbnRzLCByZXR1cm5zIG5ldyBCZXppZXIgY2xhc3MgaW5zdGVhZC5cbiovXG52YXIgRWFzaW5nID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgdmFyIG1ldGhvZCA9IHgxLFxuICAgICAgICBlYXNpbmdGdW5jdGlvbjtcblxuICAgIC8vIElmIHRoaXMgaXMgYSBiZXppZXIgY3VydmUsIHJldHVybiBhIGJlemllciBmdW5jdGlvblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IG5ldyBCZXppZXIoeDEsIHkxLCB4MiwgeTIpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24uaW4gPSAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24ub3V0ID0gcmV2ZXJzZUVhc2luZyhtZXRob2QpO1xuICAgICAgICBlYXNpbmdGdW5jdGlvbi5pbk91dCA9IG1pcnJvckVhc2luZyhtZXRob2QpO1xuICAgIH1cblxuICAgIHJldHVybiBlYXNpbmdGdW5jdGlvbjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRWFzaW5nOyJdfQ==
return exports;
})();
var __small$_32 = (function() {
var exports = {};
'use strict';

/*
    Easing functions
    ----------------------------------------
    
    Generates and provides easing functions based on baseFunction definitions
    
    A call to easingFunction.get('functionName') returns a function that can be passed:
        @param [number]: Progress 0-1
        @param [number] (optional): Amp modifier, only accepted in some easing functions
                                    and is used to adjust overall strength
        @return [number]: Eased progress
        
    We can generate new functions by sending an easing function through easingFunction.extend(name, method).
    Which will make nameIn, nameOut and nameInOut functions available to use.
        
    Easing functions from Robert Penner
    http://www.robertpenner.com/easing/
        
    Bezier curve interpretor created from Gaëtan Renaudeau's original BezierEasing  
    https://github.com/gre/bezier-easing/blob/master/index.js  
    https://github.com/gre/bezier-easing/blob/master/LICENSE

    Anticipate easing created by Elliot Gino
    https://twitter.com/ElliotGeno
*/
// Imports
var Easing = __small$_25;
var utils = __small$_35;

// Values
var DEFAULT_BACK_STRENGTH = 1.525;
var DEFAULT_POW_STRENGTH = 2;

// Utility functions
var generatePowerEasing = function (strength) {
    return function (progress, strength) {
        return baseEasing.ease(progress, strength);
    };
};

/*
    Each of these base functions is an easeIn
    
    On init, we use .mirror and .reverse to generate easeInOut and
    easeOut functions respectively.
*/
var baseEasing = {
    ease: function (progress) {
        var strength = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_POW_STRENGTH : arguments[1];
        return Math.pow(progress, strength);
    },
    circ: function (progress) {
        return 1 - Math.sin(Math.acos(progress));
    },
    back: function (progress) {
        var strength = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_BACK_STRENGTH : arguments[1];
        return progress * progress * ((strength + 1) * progress - strength);
    }
};

['cubic', 'quart', 'quint'].forEach(function (easingName, i) {
    baseEasing[easingName] = generatePowerEasing(i + 3);
});

// Generate in/out/inOut variations
utils.each(baseEasing, function (key, baseEase) {
    var easingFunction = new Easing(baseEase);
    baseEasing[key + 'In'] = easingFunction.in;
    baseEasing[key + 'Out'] = easingFunction.out;
    baseEasing[key + 'InOut'] = easingFunction.inOut;
});

baseEasing.linear = function (progress) {
    return progress;
};
baseEasing.anticipate = function (progress) {
    var strength = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_BACK_STRENGTH : arguments[1];
    return (progress *= 2) < 1 ? 0.5 * baseEasing.backIn(progress, strength) : 0.5 * (2 - Math.pow(2, -10 * (progress - 1)));
};

exports = baseEasing;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL3R3ZWVuL3ByZXNldC1lYXNpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDOzs7QUFBQyxBQUd6QyxJQUFNLHFCQUFxQixHQUFHLEtBQUssQ0FBQztBQUNwQyxJQUFNLG9CQUFvQixHQUFHLENBQUM7OztBQUFDLEFBRy9CLElBQU0sbUJBQW1CLEdBQUcsVUFBQSxRQUFRO1dBQUksVUFBQyxRQUFRLEVBQUUsUUFBUTtlQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztLQUFBO0NBQUE7Ozs7Ozs7O0FBQUMsQUFRcEcsSUFBSSxVQUFVLEdBQUc7QUFDYixRQUFJLEVBQUUsVUFBQyxRQUFRO1lBQUUsUUFBUSx5REFBRyxvQkFBb0I7d0JBQUssUUFBUSxFQUFJLFFBQVE7S0FBQTtBQUN6RSxRQUFJLEVBQUUsVUFBQSxRQUFRO2VBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUFBO0FBQ25ELFFBQUksRUFBRSxVQUFDLFFBQVE7WUFBRSxRQUFRLHlEQUFHLHFCQUFxQjtlQUFLLEFBQUMsUUFBUSxHQUFHLFFBQVEsSUFBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUEsR0FBSSxRQUFRLEdBQUcsUUFBUSxDQUFBLEFBQUM7S0FBQTtDQUN2SCxDQUFDOztBQUVGLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxVQUFVLEVBQUUsQ0FBQyxFQUFFO0FBQ3pELGNBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Q0FDdkQsQ0FBQzs7O0FBQUMsQUFHSCxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUs7QUFDdEMsUUFBSSxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUMsY0FBVSxDQUFJLEdBQUcsUUFBSyxHQUFHLGNBQWMsQ0FBQyxFQUFFLENBQUM7QUFDM0MsY0FBVSxDQUFJLEdBQUcsU0FBTSxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUM7QUFDN0MsY0FBVSxDQUFJLEdBQUcsV0FBUSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7Q0FDcEQsQ0FBQyxDQUFDOztBQUVILFVBQVUsQ0FBQyxNQUFNLEdBQUcsVUFBQSxRQUFRO1dBQUksUUFBUTtDQUFBLENBQUM7QUFDekMsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFDLFFBQVE7UUFBRSxRQUFRLHlEQUFHLHFCQUFxQjtXQUMvRCxBQUFDLENBQUMsUUFBUSxJQUFFLENBQUMsQ0FBQSxHQUFJLENBQUMsR0FBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFBLEFBQUMsQ0FBQyxDQUFBLEFBQUM7Q0FBQSxDQUFDOztBQUV2SCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyIsImZpbGUiOiJwcmVzZXQtZWFzaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBFYXNpbmcgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIEdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgZWFzaW5nIGZ1bmN0aW9ucyBiYXNlZCBvbiBiYXNlRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICBcbiAgICBBIGNhbGwgdG8gZWFzaW5nRnVuY3Rpb24uZ2V0KCdmdW5jdGlvbk5hbWUnKSByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcGFzc2VkOlxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogQW1wIG1vZGlmaWVyLCBvbmx5IGFjY2VwdGVkIGluIHNvbWUgZWFzaW5nIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGlzIHVzZWQgdG8gYWRqdXN0IG92ZXJhbGwgc3RyZW5ndGhcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogRWFzZWQgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgV2UgY2FuIGdlbmVyYXRlIG5ldyBmdW5jdGlvbnMgYnkgc2VuZGluZyBhbiBlYXNpbmcgZnVuY3Rpb24gdGhyb3VnaCBlYXNpbmdGdW5jdGlvbi5leHRlbmQobmFtZSwgbWV0aG9kKS5cbiAgICBXaGljaCB3aWxsIG1ha2UgbmFtZUluLCBuYW1lT3V0IGFuZCBuYW1lSW5PdXQgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byB1c2UuXG4gICAgICAgIFxuICAgIEVhc2luZyBmdW5jdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyXG4gICAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICAgICAgXG4gICAgQmV6aWVyIGN1cnZlIGludGVycHJldG9yIGNyZWF0ZWQgZnJvbSBHYcOrdGFuIFJlbmF1ZGVhdSdzIG9yaWdpbmFsIEJlemllckVhc2luZyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuXG4gICAgQW50aWNpcGF0ZSBlYXNpbmcgY3JlYXRlZCBieSBFbGxpb3QgR2lub1xuICAgIGh0dHBzOi8vdHdpdHRlci5jb20vRWxsaW90R2Vub1xuKi9cbi8vIEltcG9ydHNcbmNvbnN0IEVhc2luZyA9IHJlcXVpcmUoJy4vRWFzaW5nJyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG4vLyBWYWx1ZXNcbmNvbnN0IERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xuY29uc3QgREVGQVVMVF9QT1dfU1RSRU5HVEggPSAyO1xuXG4vLyBVdGlsaXR5IGZ1bmN0aW9uc1xuY29uc3QgZ2VuZXJhdGVQb3dlckVhc2luZyA9IHN0cmVuZ3RoID0+IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IGJhc2VFYXNpbmcuZWFzZShwcm9ncmVzcywgc3RyZW5ndGgpO1xuXG4vKlxuICAgIEVhY2ggb2YgdGhlc2UgYmFzZSBmdW5jdGlvbnMgaXMgYW4gZWFzZUluXG4gICAgXG4gICAgT24gaW5pdCwgd2UgdXNlIC5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgICBlYXNlT3V0IGZ1bmN0aW9ucyByZXNwZWN0aXZlbHkuXG4qL1xubGV0IGJhc2VFYXNpbmcgPSB7XG4gICAgZWFzZTogKHByb2dyZXNzLCBzdHJlbmd0aCA9IERFRkFVTFRfUE9XX1NUUkVOR1RIKSA9PiBwcm9ncmVzcyAqKiBzdHJlbmd0aCxcbiAgICBjaXJjOiBwcm9ncmVzcyA9PiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSksXG4gICAgYmFjazogKHByb2dyZXNzLCBzdHJlbmd0aCA9IERFRkFVTFRfQkFDS19TVFJFTkdUSCkgPT4gKHByb2dyZXNzICogcHJvZ3Jlc3MpICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aClcbn07XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNpbmdOYW1lLCBpKSB7XG4gICAgYmFzZUVhc2luZ1tlYXNpbmdOYW1lXSA9IGdlbmVyYXRlUG93ZXJFYXNpbmcoaSArIDMpO1xufSk7XG5cbi8vIEdlbmVyYXRlIGluL291dC9pbk91dCB2YXJpYXRpb25zXG51dGlscy5lYWNoKGJhc2VFYXNpbmcsIChrZXksIGJhc2VFYXNlKSA9PiB7XG4gICAgbGV0IGVhc2luZ0Z1bmN0aW9uID0gbmV3IEVhc2luZyhiYXNlRWFzZSk7XG4gICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5gXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgIGJhc2VFYXNpbmdbYCR7a2V5fU91dGBdID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgIGJhc2VFYXNpbmdbYCR7a2V5fUluT3V0YF0gPSBlYXNpbmdGdW5jdGlvbi5pbk91dDtcbn0pO1xuXG5iYXNlRWFzaW5nLmxpbmVhciA9IHByb2dyZXNzID0+IHByb2dyZXNzO1xuYmFzZUVhc2luZy5hbnRpY2lwYXRlID0gKHByb2dyZXNzLCBzdHJlbmd0aCA9IERFRkFVTFRfQkFDS19TVFJFTkdUSCkgPT5cbiAgICAoKHByb2dyZXNzKj0yKSA8IDEpID8gMC41ICogYmFzZUVhc2luZy5iYWNrSW4ocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA6ICAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwcm9ncmVzcyAtIDEpKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUVhc2luZzsiXX0=
return exports;
})();
var __small$_58 = (function() {
var exports = {};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var each = __small$_35.each;

var Controls = (function () {
    function Controls(actor, action, hasStarted) {
        _classCallCheck(this, Controls);

        this.actor = actor;
        this.action = action;
        this.saveOrigins();

        if (hasStarted) {
            this.id = this.bindAction();
            this.action.activate();
        }
    }

    Controls.prototype.start = function start(input) {
        this.id = this.bindAction();
        this.actor.start(this.id, input);
        this.action.activate();
        return this;
    };

    Controls.prototype.stop = function stop() {
        this.actor.unbindAction(this.id);
        this.action.deactivate();

        return this;
    };

    Controls.prototype.pause = function pause() {
        this.action.deactivate();
        return this;
    };

    Controls.prototype.resume = function resume() {
        this.action.activate();
        return this;
    };

    Controls.prototype.toggle = function toggle() {
        var resume = this.actor.hasAction(this.id) ? this.resume : this.start;
        return this.action.isActive ? this.pause() : resume.call(this);
    };

    Controls.prototype.then = function then() {
        var _actor;

        (_actor = this.actor).then.apply(_actor, arguments);
        return this;
    };

    Controls.prototype.bindAction = function bindAction() {
        return this.actor.bindAction(this.action, this.id);
    };

    Controls.prototype.saveOrigins = function saveOrigins() {
        var _this = this;

        this.origins = {};

        each(this.action.values, function (key, value) {
            var actorValue = _this.actor.values[key];

            _this.origins[key] = actorValue.current;

            if (actorValue.children) {
                each(actorValue.children, function (childKey, childValue) {
                    _this.origins[key + childKey] = _this.actor.values[key + childKey].current;
                });
            }
        });
    };

    Controls.prototype.restoreOrigins = function restoreOrigins() {
        var _this2 = this;

        each(this.origins, function (key, value) {
            _this2.actor.values[key].origin = value;
        });
    };

    return Controls;
})();

exports = Controls;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9scy9Db250cm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7SUFFcEMsUUFBUTtBQUNWLGFBREUsUUFBUSxDQUNFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFOzhCQURyQyxRQUFROztBQUVOLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFlBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7QUFFbkIsWUFBSSxVQUFVLEVBQUU7QUFDWixnQkFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDNUIsZ0JBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDMUI7S0FDSjs7QUFWQyxZQUFRLFdBWVYsS0FBSyxrQkFBQyxLQUFLLEVBQUU7QUFDVCxZQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM1QixZQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLFlBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdkIsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUFqQkMsWUFBUSxXQW1CVixJQUFJLG1CQUFHO0FBQ0gsWUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLFlBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7O0FBRXpCLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBeEJDLFlBQVEsV0EwQlYsS0FBSyxvQkFBRztBQUNKLFlBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDekIsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUE3QkMsWUFBUSxXQStCVixNQUFNLHFCQUFHO0FBQ0wsWUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN2QixlQUFPLElBQUksQ0FBQztLQUNmOztBQWxDQyxZQUFRLFdBb0NWLE1BQU0scUJBQUc7QUFDTCxZQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3RFLGVBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEU7O0FBdkNDLFlBQVEsV0F5Q1YsSUFBSSxtQkFBVTs7O0FBQ1Ysa0JBQUEsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLE1BQUEsbUJBQVMsQ0FBQztBQUN6QixlQUFPLElBQUksQ0FBQztLQUNmOztBQTVDQyxZQUFRLFdBOENWLFVBQVUseUJBQUc7QUFDVCxlQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3REOztBQWhEQyxZQUFRLFdBa0RWLFdBQVcsMEJBQUc7OztBQUNWLFlBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztBQUVsQixZQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQ3JDLGdCQUFJLFVBQVUsR0FBRyxNQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXhDLGtCQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDOztBQUV2QyxnQkFBSSxVQUFVLENBQUMsUUFBUSxFQUFFO0FBQ3JCLG9CQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUs7QUFDaEQsMEJBQUssT0FBTyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxNQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztpQkFDNUUsQ0FBQyxDQUFDO2FBQ047U0FDSixDQUFDLENBQUM7S0FDTjs7QUFoRUMsWUFBUSxXQWtFVixjQUFjLDZCQUFHOzs7QUFDYixZQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUs7QUFDL0IsbUJBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3pDLENBQUMsQ0FBQztLQUNOOztXQXRFQyxRQUFROzs7QUF5RWQsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMiLCJmaWxlIjoiQ29udHJvbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlYWNoID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJykuZWFjaDtcblxuY2xhc3MgQ29udHJvbHMge1xuICAgIGNvbnN0cnVjdG9yKGFjdG9yLCBhY3Rpb24sIGhhc1N0YXJ0ZWQpIHtcbiAgICAgICAgdGhpcy5hY3RvciA9IGFjdG9yO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5zYXZlT3JpZ2lucygpO1xuXG4gICAgICAgIGlmIChoYXNTdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5iaW5kQWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoaW5wdXQpIHtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuYmluZEFjdGlvbigpO1xuICAgICAgICB0aGlzLmFjdG9yLnN0YXJ0KHRoaXMuaWQsIGlucHV0KTtcbiAgICAgICAgdGhpcy5hY3Rpb24uYWN0aXZhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5hY3Rvci51bmJpbmRBY3Rpb24odGhpcy5pZCk7XG4gICAgICAgIHRoaXMuYWN0aW9uLmRlYWN0aXZhdGUoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24uZGVhY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgbGV0IHJlc3VtZSA9IHRoaXMuYWN0b3IuaGFzQWN0aW9uKHRoaXMuaWQpID8gdGhpcy5yZXN1bWUgOiB0aGlzLnN0YXJ0O1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb24uaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiByZXN1bWUuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGVuKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5hY3Rvci50aGVuKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBiaW5kQWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rvci5iaW5kQWN0aW9uKHRoaXMuYWN0aW9uLCB0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBzYXZlT3JpZ2lucygpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5zID0ge307XG5cbiAgICAgICAgZWFjaCh0aGlzLmFjdGlvbi52YWx1ZXMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBsZXQgYWN0b3JWYWx1ZSA9IHRoaXMuYWN0b3IudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHRoaXMub3JpZ2luc1trZXldID0gYWN0b3JWYWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICBpZiAoYWN0b3JWYWx1ZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGVhY2goYWN0b3JWYWx1ZS5jaGlsZHJlbiwgKGNoaWxkS2V5LCBjaGlsZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JpZ2luc1trZXkgKyBjaGlsZEtleV0gPSB0aGlzLmFjdG9yLnZhbHVlc1trZXkgKyBjaGlsZEtleV0uY3VycmVudDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzdG9yZU9yaWdpbnMoKSB7XG4gICAgICAgIGVhY2godGhpcy5vcmlnaW5zLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rvci52YWx1ZXNba2V5XS5vcmlnaW4gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRyb2xzOyJdfQ==
return exports;
})();
var __small$_27 = (function() {
var exports = {};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Imports
var calc = __small$_34;
var utils = __small$_35;
var Controls = __small$_58;
var each = utils.each;

// Values
var DEFAULT_PROP = 'current';
var PRIVATE = ['onStart', 'onFrame', 'onUpdate', 'onComplete'];

var Action = (function () {

    /*
        # Action class constructor
        ## Assign default properties of Action or extended class and set user-defined props
         @param [object]
    */

    function Action(props) {
        var _this = this;

        _classCallCheck(this, Action);

        each(this.getDefaultProps(), function (key, value) {
            _this[key] = value;
        });

        this.values = {};
        this.set(props, this.getDefaultValueProp());
    }

    /*
        # Set Action properties
        ## Set user-defined Action properties
         @param [object]
        @param [string]: Name of default value property (set when `value` is **not** provided as object)
        @return [Action]
    */

    Action.prototype.set = function set() {
        var _this2 = this;

        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var defaultProp = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_PROP : arguments[1];

        // Loop through non-`value` properties and set
        each(props, function (key, value) {
            if (key !== 'values') {
                _this2[key] = value;
            }
        });

        // Merge `value` properties with existing
        if (props.values) {
            (function () {
                var currentValues = _this2.values;

                each(props.values, function (key, value) {
                    var existingValue = currentValues[key];
                    var newValue = {};

                    if (utils.isObj(value)) {
                        newValue = value;
                    } else {
                        newValue[defaultProp] = value;
                    }

                    currentValues[key] = existingValue ? utils.merge(existingValue, newValue) : newValue;
                });
            })();
        }

        return this;
    };

    /*
        # Process latest `current` value
        ## Actions performs existing `current` value
         @param [Actor]
        @param [object]
        @return [number]
    */

    Action.prototype.process = function process(actor, value) {
        return value.current;
    };

    /*
        # Has Action ended?
        ## Returns `true` to end Action (Action only fires once).
        
        @return [boolean]
    */

    Action.prototype.hasEnded = function hasEnded() {
        return true;
    };

    /*
        # Limit value to within set parameters
        ## Return value within min/max, with outlying values multiplied by `escapeAmp`
         @param [number]
        @param [object] { min: number, max: number, escapeAmp: factor }
        @return [number]
    */

    Action.prototype.limit = function limit(output, value) {
        var restricted = calc.restricted(output, value.min, value.max);
        var escapeAmp = value.escapeAmp !== undefined ? value.escapeAmp : 0;

        return restricted + (output - restricted) * escapeAmp;
    };

    /*
        # Get Controls class for this Action
        ## Inherited Actions may return different Controls class
         @return [Controls]
    */

    Action.prototype.getControls = function getControls() {
        return Controls;
    };

    /*
        # Get default Action properties
         @return [object]
    */

    Action.prototype.getDefaultProps = function getDefaultProps() {
        return {};
    };

    /*
        # Get default Action value properties
         @return [object]
    */

    Action.prototype.getDefaultValue = function getDefaultValue() {
        return {};
    };

    /*
        # Get default Action value property name
        ## Set this `value` property when set as value instead of object
         @return [string]
    */

    Action.prototype.getDefaultValueProp = function getDefaultValueProp() {
        return DEFAULT_PROP;
    };

    /*
        # Get set properties
        ## Get user-set properties for this Action
         @return [object]
    */

    Action.prototype.getSet = function getSet() {
        var _this3 = this;

        var set = { values: this.values };

        each(this, function (key, prop) {
            if (_this3.hasOwnProperty(key) && PRIVATE.indexOf(key) === -1) {
                set[key] = prop;
            }
        });

        return set;
    };

    /*
        # Extend this Action with new properties
        ## Returns new instance of this Action's `prototype` with existing and new properties
         @param [object] (optional)
        @return [Action]
    */

    Action.prototype.extend = function extend(props) {
        return new this.constructor(utils.merge(this, props), this.getDefaultValueProp());
    };

    /*
        # Get a new playable version of this Action
         @return [Action]
    */

    Action.prototype.getPlayable = function getPlayable() {
        return this.extend();
    };

    /*
        # Activate this Action
         @return [Action]
    */

    Action.prototype.activate = function activate() {
        this.isActive = true;
        return this;
    };

    /*
        # Deactivate this Action
         @return [Action]
    */

    Action.prototype.deactivate = function deactivate() {
        this.isActive = false;
        return this;
    };

    return Action;
})();

exports = Action;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNwQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdEMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDakQsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUk7OztBQUFDLEFBR3hCLElBQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUMvQixJQUFNLE9BQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDOztJQUUzRCxNQUFNOzs7Ozs7OztBQVFSLGFBUkUsTUFBTSxDQVFJLEtBQUssRUFBRTs7OzhCQVJqQixNQUFNOztBQVNKLFlBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQ3pDLGtCQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNyQixDQUFDLENBQUM7O0FBRUgsWUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDakIsWUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztLQUMvQzs7Ozs7Ozs7O0FBQUE7QUFmQyxVQUFNLFdBeUJSLEdBQUcsa0JBQXlDOzs7WUFBeEMsS0FBSyx5REFBRyxFQUFFO1lBQUUsV0FBVyx5REFBRyxZQUFZOzs7QUFFdEMsWUFBSSxDQUFDLEtBQUssRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUs7QUFDeEIsZ0JBQUksR0FBRyxLQUFLLFFBQVEsRUFBRTtBQUNsQix1QkFBSyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDckI7U0FDSixDQUFDOzs7QUFBQyxBQUdILFlBQUks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QUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7Ozs7QUEvS0MsVUFBTSxXQXNMUixVQUFVLHlCQUFHO0FBQ1QsWUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdEIsZUFBTyxJQUFJLENBQUM7S0FDZjs7V0F6TEMsTUFBTTs7O0FBNExaLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6IkFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmNvbnN0IGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcbmNvbnN0IENvbnRyb2xzID0gcmVxdWlyZSgnLi4vY29udHJvbHMvQ29udHJvbHMnKTtcbmNvbnN0IGVhY2ggPSB1dGlscy5lYWNoO1xuXG4vLyBWYWx1ZXNcbmNvbnN0IERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcbmNvbnN0IFBSSVZBVEUgPSBbJ29uU3RhcnQnLCAnb25GcmFtZScsICdvblVwZGF0ZScsICdvbkNvbXBsZXRlJ107XG5cbmNsYXNzIEFjdGlvbiB7XG5cbiAgICAvKlxuICAgICAgICAjIEFjdGlvbiBjbGFzcyBjb25zdHJ1Y3RvclxuICAgICAgICAjIyBBc3NpZ24gZGVmYXVsdCBwcm9wZXJ0aWVzIG9mIEFjdGlvbiBvciBleHRlbmRlZCBjbGFzcyBhbmQgc2V0IHVzZXItZGVmaW5lZCBwcm9wc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgZWFjaCh0aGlzLmdldERlZmF1bHRQcm9wcygpLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmFsdWVzID0ge307XG4gICAgICAgIHRoaXMuc2V0KHByb3BzLCB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgZGVmYXVsdCB2YWx1ZSBwcm9wZXJ0eSAoc2V0IHdoZW4gYHZhbHVlYCBpcyAqKm5vdCoqIHByb3ZpZGVkIGFzIG9iamVjdClcbiAgICAgICAgQHJldHVybiBbQWN0aW9uXVxuICAgICovXG4gICAgc2V0KHByb3BzID0ge30sIGRlZmF1bHRQcm9wID0gREVGQVVMVF9QUk9QKSB7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBub24tYHZhbHVlYCBwcm9wZXJ0aWVzIGFuZCBzZXRcbiAgICAgICAgZWFjaChwcm9wcywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgIT09ICd2YWx1ZXMnKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1lcmdlIGB2YWx1ZWAgcHJvcGVydGllcyB3aXRoIGV4aXN0aW5nXG4gICAgICAgIGlmIChwcm9wcy52YWx1ZXMpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VmFsdWVzID0gdGhpcy52YWx1ZXM7XG5cbiAgICAgICAgICAgIGVhY2gocHJvcHMudmFsdWVzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVmFsdWUgPSBjdXJyZW50VmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0ge307XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IChleGlzdGluZ1ZhbHVlKSA/IHV0aWxzLm1lcmdlKGV4aXN0aW5nVmFsdWUsIG5ld1ZhbHVlKSA6IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFByb2Nlc3MgbGF0ZXN0IGBjdXJyZW50YCB2YWx1ZVxuICAgICAgICAjIyBBY3Rpb25zIHBlcmZvcm1zIGV4aXN0aW5nIGBjdXJyZW50YCB2YWx1ZVxuXG4gICAgICAgIEBwYXJhbSBbQWN0b3JdXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdXG4gICAgKi9cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuY3VycmVudDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEhhcyBBY3Rpb24gZW5kZWQ/XG4gICAgICAgICMjIFJldHVybnMgYHRydWVgIHRvIGVuZCBBY3Rpb24gKEFjdGlvbiBvbmx5IGZpcmVzIG9uY2UpLlxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl1cbiAgICAqL1xuICAgIGhhc0VuZGVkKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIExpbWl0IHZhbHVlIHRvIHdpdGhpbiBzZXQgcGFyYW1ldGVyc1xuICAgICAgICAjIyBSZXR1cm4gdmFsdWUgd2l0aGluIG1pbi9tYXgsIHdpdGggb3V0bHlpbmcgdmFsdWVzIG11bHRpcGxpZWQgYnkgYGVzY2FwZUFtcGBcblxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdIHsgbWluOiBudW1iZXIsIG1heDogbnVtYmVyLCBlc2NhcGVBbXA6IGZhY3RvciB9XG4gICAgICAgIEByZXR1cm4gW251bWJlcl1cbiAgICAqL1xuICAgIGxpbWl0KG91dHB1dCwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmVzdHJpY3RlZCA9IGNhbGMucmVzdHJpY3RlZChvdXRwdXQsIHZhbHVlLm1pbiwgdmFsdWUubWF4KTtcbiAgICAgICAgY29uc3QgZXNjYXBlQW1wID0gdmFsdWUuZXNjYXBlQW1wICE9PSB1bmRlZmluZWQgPyB2YWx1ZS5lc2NhcGVBbXAgOiAwO1xuXG4gICAgICAgIHJldHVybiByZXN0cmljdGVkICsgKChvdXRwdXQgLSByZXN0cmljdGVkKSAqIGVzY2FwZUFtcCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgQ29udHJvbHMgY2xhc3MgZm9yIHRoaXMgQWN0aW9uXG4gICAgICAgICMjIEluaGVyaXRlZCBBY3Rpb25zIG1heSByZXR1cm4gZGlmZmVyZW50IENvbnRyb2xzIGNsYXNzXG5cbiAgICAgICAgQHJldHVybiBbQ29udHJvbHNdXG4gICAgKi9cbiAgICBnZXRDb250cm9scygpIHtcbiAgICAgICAgcmV0dXJuIENvbnRyb2xzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdGhpcyBgdmFsdWVgIHByb3BlcnR5IHdoZW4gc2V0IGFzIHZhbHVlIGluc3RlYWQgb2Ygb2JqZWN0XG5cbiAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBzZXQgcHJvcGVydGllc1xuICAgICAgICAjIyBHZXQgdXNlci1zZXQgcHJvcGVydGllcyBmb3IgdGhpcyBBY3Rpb25cblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXRTZXQoKSB7XG4gICAgICAgIGxldCBzZXQgPSB7IHZhbHVlczogdGhpcy52YWx1ZXMgfTtcblxuICAgICAgICBlYWNoKHRoaXMsIChrZXksIHByb3ApID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkgJiYgUFJJVkFURS5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc2V0W2tleV0gPSBwcm9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2V0O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgRXh0ZW5kIHRoaXMgQWN0aW9uIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBBY3Rpb24ncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuICAgIGV4dGVuZChwcm9wcykge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodXRpbHMubWVyZ2UodGhpcywgcHJvcHMpLCB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgYSBuZXcgcGxheWFibGUgdmVyc2lvbiBvZiB0aGlzIEFjdGlvblxuXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuICAgIGdldFBsYXlhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHRlbmQoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEFjdGl2YXRlIHRoaXMgQWN0aW9uXG5cbiAgICAgICAgQHJldHVybiBbQWN0aW9uXVxuICAgICovXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIERlYWN0aXZhdGUgdGhpcyBBY3Rpb25cblxuICAgICAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBY3Rpb247Il19
return exports;
})();
var __small$_28 = (function() {
var exports = {};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Action = __small$_27;
var calc = __small$_34;
var utils = __small$_35;
var presetEasing = __small$_32;
var valueOps = __small$_51;
var TweenControls = ((function() {
var exports = {};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controls = __small$_58;

var TweenControls = (function (_Controls) {
    _inherits(TweenControls, _Controls);

    function TweenControls() {
        _classCallCheck(this, TweenControls);

        return _possibleConstructorReturn(this, _Controls.apply(this, arguments));
    }

    TweenControls.prototype.restart = function restart() {
        this.restoreOrigins();
        this.action.restart();
        return this;
    };

    TweenControls.prototype.reverse = function reverse() {
        this.restoreOrigins();
        this.action.reverse();
        return this;
    };

    TweenControls.prototype.seek = function seek(progress) {
        if (!this.actor.hasAction(this.id)) {
            this.start().pause();
        }

        this.action.elapsed = this.action.duration * progress;

        if (!this.action.isActive) {
            this.action.activate();
            this.actor.process.fire();
            this.action.deactivate();
        }

        return this;
    };

    return TweenControls;
})(Controls);

exports = TweenControls;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL3R3ZWVuL1R3ZWVuQ29udHJvbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQzs7SUFFOUMsYUFBYTtjQUFiLGFBQWE7O2FBQWIsYUFBYTs4QkFBYixhQUFhOzs7OztBQUFiLGlCQUFhLFdBQ2YsT0FBTyxzQkFBRztBQUNOLFlBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN0QixZQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBTEMsaUJBQWEsV0FPZixPQUFPLHNCQUFHO0FBQ04sWUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3RCLFlBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdEIsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUFYQyxpQkFBYSxXQWFmLElBQUksaUJBQUMsUUFBUSxFQUFFO0FBQ1gsWUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxnQkFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCOztBQUVELFlBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzs7QUFFdEQsWUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO0FBQ3ZCLGdCQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3ZCLGdCQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMxQixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUM1Qjs7QUFFRCxlQUFPLElBQUksQ0FBQztLQUNmOztXQTNCQyxhQUFhO0dBQVMsUUFBUTs7QUE4QnBDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDIiwiZmlsZSI6IlR3ZWVuQ29udHJvbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb250cm9scyA9IHJlcXVpcmUoJy4uLy4uL2NvbnRyb2xzL0NvbnRyb2xzJyk7XG5cbmNsYXNzIFR3ZWVuQ29udHJvbHMgZXh0ZW5kcyBDb250cm9scyB7XG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5yZXN0b3JlT3JpZ2lucygpO1xuICAgICAgICB0aGlzLmFjdGlvbi5yZXN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldmVyc2UoKSB7XG4gICAgICAgIHRoaXMucmVzdG9yZU9yaWdpbnMoKTtcbiAgICAgICAgdGhpcy5hY3Rpb24ucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZWVrKHByb2dyZXNzKSB7XG4gICAgICAgIGlmICghdGhpcy5hY3Rvci5oYXNBY3Rpb24odGhpcy5pZCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKS5wYXVzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3Rpb24uZWxhcHNlZCA9IHRoaXMuYWN0aW9uLmR1cmF0aW9uICogcHJvZ3Jlc3M7XG5cbiAgICAgICAgaWYgKCF0aGlzLmFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24uYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0b3IucHJvY2Vzcy5maXJlKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5kZWFjdGl2YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW5Db250cm9sczsiXX0=
return exports;
})());
var each = utils.each;

var COUNT = 'count';
var NEXT_STEPS = {
    loop: 'restart',
    yoyo: 'reverse',
    flip: 'flipValues'
};

/*
    Ease value within ranged parameters
    
    @param [number]: Progress between 0 and 1
    @param [number]: Value of 0 progress
    @param [number]: Value of 1 progress
    @param [string || function]: Name of preset easing
        to use or generated easing function
    @return [number]: Value of eased progress in range
*/
function ease(progress, from, to, ease) {
    var progressLimited = calc.restricted(progress, 0, 1);
    var easingFunction = utils.isString(ease) ? presetEasing[ease] : ease;

    return calc.valueEased(progressLimited, from, to, easingFunction);
};

var Tween = (function (_Action) {
    _inherits(Tween, _Action);

    function Tween() {
        _classCallCheck(this, Tween);

        return _possibleConstructorReturn(this, _Action.apply(this, arguments));
    }

    Tween.prototype.getControls = function getControls() {
        return TweenControls;
    };

    Tween.prototype.getDefaultProps = function getDefaultProps() {
        return {
            delay: 0,
            dilate: 1,
            duration: 300,
            loop: false,
            yoyo: false,
            flip: false,
            playDirection: 1,
            ended: false,
            elapsed: 0
        };
    };

    Tween.prototype.getDefaultValue = function getDefaultValue() {
        return {
            delay: 0,
            duration: 300,
            ease: 'easeOut',
            stagger: 0,
            steps: 0,
            to: 0,
            round: false
        };
    };

    Tween.prototype.getDefaultValueProp = function getDefaultValueProp() {
        return 'to';
    };

    /*
        Update Action elapsed time
        
        @param [object]: Action properties
        @param [number]: Timestamp of current frame
    */

    Tween.prototype.onFrameStart = function onFrameStart(actor, frameDuration) {
        this.elapsed = this.elapsed || 0;

        if (frameDuration) {
            this.elapsed += frameDuration * actor.dilate * this.playDirection;
            this.ended = true;
        }
    };

    /*
        Calculate progress of value based on time elapsed,
        value delay/duration/stagger properties
         @param [Actor]
        @param [object]: Value state and properties
        @return [number]: Calculated value
    */

    Tween.prototype.process = function process(actor, value) {
        var target = value.to;
        var progressTarget = this.playDirection === 1 ? 1 : 0;
        var newValue = value.current;

        // If this value has a to property, otherwise we just return current value
        if (target !== undefined) {
            var progress = calc.restricted(calc.progress(this.elapsed - value.delay, 0, value.duration) - value.stagger, 0, 1);

            // Mark Action as NOT ended if still in progress
            if (progress !== progressTarget) {
                this.ended = false;
            }

            // Step progress if we're stepping
            if (value.steps) {
                progress = utils.stepProgress(progress, value.steps);
            }

            // Ease value
            newValue = ease(progress, value.origin, target, value.ease);
        }

        return newValue;
    };

    /*
        If this tween has ended, check if we loop/yoyo/flip
        
        @return [boolean]: Has this tween really really ended?
    */

    Tween.prototype.hasEnded = function hasEnded(actor) {
        var _this2 = this;

        var ended = this.ended;

        if (ended) {
            each(NEXT_STEPS, function (name, methodName) {
                if (_this2.checkNextStep(actor, name, _this2[methodName])) {
                    ended = false;
                    actor.hasChanged = true;
                    return false;
                }
            });
        }

        // Reset `ended`
        this.ended = false;

        return ended;
    };

    Tween.prototype.checkNextStep = function checkNextStep(actor, name, method) {
        var step = this[name];
        var forever = step === true;
        var count = this[name + COUNT] || 0;
        var stepTaken = false;

        if (forever || utils.isNum(step)) {
            ++count;
            this[name + COUNT] = count;

            if (forever || count <= step) {
                method.call(this, actor);
                stepTaken = true;
            }
        }

        return stepTaken;
    };

    Tween.prototype.flipValues = function flipValues(actor) {
        var actorValues = actor.values;
        this.elapsed = this.duration - this.elapsed;

        each(this.values, function (key) {
            var value = actorValues[key];

            if (value.children) {
                each(value.children, function (childKey) {
                    valueOps.flip(actorValues[key + childKey]);
                });
            }

            valueOps.flip(value);
        });
    };

    Tween.prototype.reverse = function reverse() {
        this.playDirection *= -1;
    };

    Tween.prototype.restart = function restart() {
        this.elapsed = this.playDirection === 1 ? 0 : this.duration;
        this.started = utils.currentTime();
    };

    return Tween;
})(Action);

exports = Tween;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25DLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNwQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdEMsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDdEQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDdEQsSUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDdkQsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQzs7QUFFeEIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLElBQU0sVUFBVSxHQUFHO0FBQ2YsUUFBSSxFQUFFLFNBQVM7QUFDZixRQUFJLEVBQUUsU0FBUztBQUNmLFFBQUksRUFBRSxZQUFZO0NBQ3JCOzs7Ozs7Ozs7Ozs7QUFBQyxBQVlGLFNBQVMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRTtBQUNwQyxRQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEQsUUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDOztBQUV4RSxXQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7Q0FDckUsQ0FBQzs7SUFFSSxLQUFLO2NBQUwsS0FBSzs7YUFBTCxLQUFLOzhCQUFMLEtBQUs7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QUFFLFVBQUMsR0FBRyxFQUFLO0FBQ3ZCLGdCQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRS9CLGdCQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7QUFDaEIsb0JBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFVBQUMsUUFBUSxFQUFLO0FBQy9CLDRCQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDOUMsQ0FBQyxDQUFDO2FBQ047O0FBRUQsb0JBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEIsQ0FBQyxDQUFDO0tBQ047O0FBOUlDLFNBQUssV0FnSlAsT0FBTyxzQkFBRztBQUNOLFlBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDNUI7O0FBbEpDLFNBQUssV0FvSlAsT0FBTyxzQkFBRztBQUNOLFlBQUksQ0FBQyxPQUFPLEdBQUcsQUFBQyxJQUFJLENBQUMsYUFBYSxLQUFLLENBQUMsR0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUM5RCxZQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUN0Qzs7V0F2SkMsS0FBSztHQUFTLE1BQU07O0FBMEoxQixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyIsImZpbGUiOiJUd2Vlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFjdGlvbiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5jb25zdCBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5jb25zdCBwcmVzZXRFYXNpbmcgPSByZXF1aXJlKCcuL3R3ZWVuL3ByZXNldC1lYXNpbmcnKTtcbmNvbnN0IHZhbHVlT3BzID0gcmVxdWlyZSgnLi4vYWN0b3IvdmFsdWUtb3BlcmF0aW9ucycpO1xuY29uc3QgVHdlZW5Db250cm9scyA9IHJlcXVpcmUoJy4vdHdlZW4vVHdlZW5Db250cm9scycpO1xuY29uc3QgZWFjaCA9IHV0aWxzLmVhY2g7XG5cbmNvbnN0IENPVU5UID0gJ2NvdW50JztcbmNvbnN0IE5FWFRfU1RFUFMgPSB7XG4gICAgbG9vcDogJ3Jlc3RhcnQnLFxuICAgIHlveW86ICdyZXZlcnNlJyxcbiAgICBmbGlwOiAnZmxpcFZhbHVlcydcbn07XG5cbi8qXG4gICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovIFxuZnVuY3Rpb24gZWFzZShwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgICBjb25zdCBwcm9ncmVzc0xpbWl0ZWQgPSBjYWxjLnJlc3RyaWN0ZWQocHJvZ3Jlc3MsIDAsIDEpO1xuICAgIGNvbnN0IGVhc2luZ0Z1bmN0aW9uID0gdXRpbHMuaXNTdHJpbmcoZWFzZSkgPyBwcmVzZXRFYXNpbmdbZWFzZV0gOiBlYXNlO1xuXG4gICAgcmV0dXJuIGNhbGMudmFsdWVFYXNlZChwcm9ncmVzc0xpbWl0ZWQsIGZyb20sIHRvLCBlYXNpbmdGdW5jdGlvbik7XG59O1xuXG5jbGFzcyBUd2VlbiBleHRlbmRzIEFjdGlvbiB7XG4gICAgZ2V0Q29udHJvbHMoKSB7XG4gICAgICAgIHJldHVybiBUd2VlbkNvbnRyb2xzO1xuICAgIH1cbiAgICBcbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpbGF0ZTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIHlveW86IGZhbHNlLFxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICBwbGF5RGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgZW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZWxhcHNlZDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2U6ICdlYXNlT3V0JyxcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBzdGVwczogMCxcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd0byc7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIEFjdGlvbiBlbGFwc2VkIHRpbWVcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaW1lc3RhbXAgb2YgY3VycmVudCBmcmFtZVxuICAgICovXG4gICAgb25GcmFtZVN0YXJ0KGFjdG9yLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZWxhcHNlZCB8fCAwO1xuXG4gICAgICAgIGlmIChmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmVsYXBzZWQgKz0gKGZyYW1lRHVyYXRpb24gKiBhY3Rvci5kaWxhdGUpICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBDYWxjdWxhdGUgcHJvZ3Jlc3Mgb2YgdmFsdWUgYmFzZWQgb24gdGltZSBlbGFwc2VkLFxuICAgICAgICB2YWx1ZSBkZWxheS9kdXJhdGlvbi9zdGFnZ2VyIHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW0FjdG9yXVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIHN0YXRlIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWVcbiAgICAqL1xuICAgIHByb2Nlc3MoYWN0b3IsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHZhbHVlLnRvO1xuICAgICAgICBjb25zdCBwcm9ncmVzc1RhcmdldCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMSA6IDA7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBoYXMgYSB0byBwcm9wZXJ0eSwgb3RoZXJ3aXNlIHdlIGp1c3QgcmV0dXJuIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgaWYgKHRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBjYWxjLnJlc3RyaWN0ZWQoY2FsYy5wcm9ncmVzcyh0aGlzLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgMCwgdmFsdWUuZHVyYXRpb24pIC0gdmFsdWUuc3RhZ2dlciwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgQWN0aW9uIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSB1dGlscy5zdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSB2YWx1ZVxuICAgICAgICAgICAgbmV3VmFsdWUgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5vcmlnaW4sIHRhcmdldCwgdmFsdWUuZWFzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgSWYgdGhpcyB0d2VlbiBoYXMgZW5kZWQsIGNoZWNrIGlmIHdlIGxvb3AveW95by9mbGlwXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGFzIHRoaXMgdHdlZW4gcmVhbGx5IHJlYWxseSBlbmRlZD9cbiAgICAqL1xuICAgIGhhc0VuZGVkKGFjdG9yKSB7XG4gICAgICAgIGxldCBlbmRlZCA9IHRoaXMuZW5kZWQ7XG5cbiAgICAgICAgaWYgKGVuZGVkKSB7XG4gICAgICAgICAgICBlYWNoKE5FWFRfU1RFUFMsIChuYW1lLCBtZXRob2ROYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tOZXh0U3RlcChhY3RvciwgbmFtZSwgdGhpc1ttZXRob2ROYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYWN0b3IuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc2V0IGBlbmRlZGBcbiAgICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiBlbmRlZDtcbiAgICB9XG5cbiAgICBjaGVja05leHRTdGVwKGFjdG9yLCBuYW1lLCBtZXRob2QpIHtcbiAgICAgICAgY29uc3Qgc3RlcCA9IHRoaXNbbmFtZV07XG4gICAgICAgIGNvbnN0IGZvcmV2ZXIgPSAoc3RlcCA9PT0gdHJ1ZSk7XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXNbbmFtZSArIENPVU5UXSB8fCAwO1xuICAgICAgICBsZXQgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGZvcmV2ZXIgfHwgdXRpbHMuaXNOdW0oc3RlcCkpIHtcbiAgICAgICAgICAgICsrY291bnQ7XG4gICAgICAgICAgICB0aGlzW25hbWUgKyBDT1VOVF0gPSBjb3VudDtcblxuICAgICAgICAgICAgaWYgKGZvcmV2ZXIgfHwgY291bnQgPD0gc3RlcCkge1xuICAgICAgICAgICAgICAgIG1ldGhvZC5jYWxsKHRoaXMsIGFjdG9yKTtcbiAgICAgICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0ZXBUYWtlbjtcbiAgICB9XG5cbiAgICBmbGlwVmFsdWVzKGFjdG9yKSB7XG4gICAgICAgIGNvbnN0IGFjdG9yVmFsdWVzID0gYWN0b3IudmFsdWVzO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsIChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYWN0b3JWYWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgZWFjaCh2YWx1ZS5jaGlsZHJlbiwgKGNoaWxkS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlT3BzLmZsaXAoYWN0b3JWYWx1ZXNba2V5ICsgY2hpbGRLZXldKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWVPcHMuZmxpcCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldmVyc2UoKSB7XG4gICAgICAgIHRoaXMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICB9XG5cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUd2VlbjsiXX0=
return exports;
})();
var __small$_24 = (function() {
var exports = {};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var utils = __small$_35;
var loop = ((function() {
var exports = {};
'use strict';

var timer = ((function() {
var exports = {};
'use strict';

var currentTime = __small$_35.currentTime;
var MAX_ELAPSED = 33;

var current = 0;
var elapsed = 16.7;

var timer = {
    update: function (framestamp) {
        var prev = current;
        current = framestamp;
        elapsed = Math.min(current - prev, MAX_ELAPSED);

        return current;
    },

    start: function () {
        return current = currentTime();
    },

    getElapsed: function () {
        return elapsed;
    }
};

exports = timer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztBQUN4RCxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7O0FBRXZCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNoQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7O0FBRW5CLElBQU0sS0FBSyxHQUFHO0FBQ1YsVUFBTSxFQUFFLFVBQUMsVUFBVSxFQUFLO0FBQ3BCLFlBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUNyQixlQUFPLEdBQUcsVUFBVSxDQUFDO0FBQ3JCLGVBQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7O0FBRWhELGVBQU8sT0FBTyxDQUFDO0tBQ2xCOztBQUVELFNBQUssRUFBRTtlQUFNLE9BQU8sR0FBRyxXQUFXLEVBQUU7S0FBQTs7QUFFcEMsY0FBVSxFQUFFO2VBQU0sT0FBTztLQUFBO0NBQzVCLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMiLCJmaWxlIjoidGltZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjdXJyZW50VGltZSA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLmN1cnJlbnRUaW1lO1xuY29uc3QgTUFYX0VMQVBTRUQgPSAzMztcblxubGV0IGN1cnJlbnQgPSAwO1xubGV0IGVsYXBzZWQgPSAxNi43O1xuXG5jb25zdCB0aW1lciA9IHtcbiAgICB1cGRhdGU6IChmcmFtZXN0YW1wKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXYgPSBjdXJyZW50O1xuICAgICAgICBjdXJyZW50ID0gZnJhbWVzdGFtcDtcbiAgICAgICAgZWxhcHNlZCA9IE1hdGgubWluKGN1cnJlbnQgLSBwcmV2LCBNQVhfRUxBUFNFRCk7XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfSxcblxuICAgIHN0YXJ0OiAoKSA9PiBjdXJyZW50ID0gY3VycmVudFRpbWUoKSxcblxuICAgIGdldEVsYXBzZWQ6ICgpID0+IGVsYXBzZWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdGltZXI7Il19
return exports;
})());
var systemTick = ((function() {
var exports = {};
'use strict';

var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame ? true : false;

var tick = undefined;

if (hasRAF) {
    tick = window.requestAnimationFrame;
} else {
    (function () {
        /*
            requestAnimationFrame polyfill
            
            For IE8/9 Flinstones
             Taken from Paul Irish. We've stripped out cancelAnimationFrame checks because we don't fox with that
            
            http://paulirish.com/2011/requestanimationframe-for-smart-animating/
            http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
             
            requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
             
            MIT license
        */
        var lastTime = 0;

        tick = function (callback) {
            var currentTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currentTime - lastTime));

            lastTime = currentTime + timeToCall;

            setTimeout(function () {
                return callback(lastTime);
            }, timeToCall);
        };
    })();
}

exports = tick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3N5c3RlbS10aWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxNQUFNLEdBQUcsQUFBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLHFCQUFxQixHQUFJLElBQUksR0FBRyxLQUFLLENBQUM7O0FBRTlGLElBQUksSUFBSSxZQUFBLENBQUM7O0FBRVQsSUFBSSxNQUFNLEVBQUU7QUFDUixRQUFJLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDO0NBRXZDLE1BQU07Ozs7Ozs7Ozs7Ozs7OztBQWVILFlBQUksUUFBUSxHQUFHLENBQUMsQ0FBQzs7QUFFakIsWUFBSSxHQUFHLFVBQUMsUUFBUSxFQUFLO0FBQ2pCLGdCQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3pDLGdCQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQSxBQUFDLENBQUMsQ0FBQzs7QUFFOUQsb0JBQVEsR0FBRyxXQUFXLEdBQUcsVUFBVSxDQUFDOztBQUVwQyxzQkFBVSxDQUFDO3VCQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUM7YUFBQSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3BELENBQUE7O0NBQ0o7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMiLCJmaWxlIjoic3lzdGVtLXRpY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoYXNSQUYgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkgPyB0cnVlIDogZmFsc2U7XG5cbmxldCB0aWNrO1xuXG5pZiAoaGFzUkFGKSB7XG4gICAgdGljayA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbn0gZWxzZSB7XG4gICAgLypcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgICAgIFxuICAgICAgICBGb3IgSUU4LzkgRmxpbnN0b25lc1xuXG4gICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgXG4gICAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgIFxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgICBcbiAgICAgICAgTUlUIGxpY2Vuc2VcbiAgICAqL1xuICAgIGxldCBsYXN0VGltZSA9IDA7XG5cbiAgICB0aWNrID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjayhsYXN0VGltZSksIHRpbWVUb0NhbGwpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aWNrOyJdfQ==
return exports;
})());

var processOrder = ['update', 'preRender', 'render', 'postRender', 'cleanup'];
var numProcessSteps = processOrder.length;

// [int]: Process ID, incremented for each new process
var currentProcessId = 0;

// [int]: Number of running processes
var runningCount = 0;

// [int]: Number of running non-background processes
var activeCount = 0;

// [array]: Array of active process IDs
var runningIds = [];

// [object]: Map of active processes
var runningProcesses = {};

// [array]: Array of process IDs queued for deactivation
var deactivateQueue = [];

// [boolean]: Is loop running?
var isRunning = false;

/*
    Update running

    @param [boolean]
    @param [boolean]
*/
var updateCount = function (add, isBackground) {
    var modify = add ? 1 : -1;

    runningCount += modify;

    if (!isBackground) {
        activeCount += modify;
    }
};

/*
    Purge items in the deactivate queue from our runningProcesses
*/
var purge = function () {
    var queueLength = deactivateQueue.length;

    while (queueLength--) {
        var idToDelete = deactivateQueue[queueLength];
        var activeIdIndex = runningIds.indexOf(idToDelete);

        // If process is active, deactivate
        if (activeIdIndex > -1) {
            runningIds.splice(activeIdIndex, 1);

            updateCount(false, runningProcesses[idToDelete].isBackground);

            delete runningProcesses[idToDelete];
        }
    }

    deactivateQueue = [];
};

/*
    Fire all active processes
    
    @param [int]: Timestamp of executing frames
    @param [int]: Time since previous frame
    @return [boolean]: True if active processes found
*/
var fireAll = function (framestamp, elapsed) {
    purge();

    var numRunning = runningCount;
    for (var i = 0; i < numProcessSteps; i++) {
        var method = processOrder[i];

        for (var _i = 0; _i < numRunning; _i++) {
            var process = runningProcesses[runningIds[_i]];

            if (process && process[method]) {
                process[method].call(process.scope, process.scope, framestamp, elapsed);
            }
        }
    }

    purge();

    return activeCount ? true : false;
};

var loop = {
    /*
        Fire all active processes once per frame
    */
    frame: function () {
        systemTick(function (framestamp) {
            if (isRunning) {
                loop.frame();
            }

            timer.update(framestamp);
            isRunning = fireAll(framestamp, timer.getElapsed());
        });
    },

    start: function () {
        if (!isRunning) {
            timer.start();
            isRunning = true;
            loop.frame();
        }
    },

    stop: function () {
        isRunning = false;
    }
};

exports = {
    // Increments and returns the latest process ID
    getProcessId: function () {
        return currentProcessId++;
    },

    /*
        @param [Process]
        @param [int]
    */
    activate: function (process, processId) {
        var queueIndex = deactivateQueue.indexOf(processId);
        var isQueued = queueIndex > -1;
        var isRunning = runningIds.indexOf(processId) > -1;

        // Remove from deactivateQueue if queued
        if (isQueued) {
            deactivateQueue.splice(queueIndex, 1);
        }

        // Add to running processes array if not there
        if (!isRunning) {
            runningIds.push(processId);
            runningProcesses[processId] = process;

            updateCount(true, process.isBackground);
            loop.start();
        }
    },

    /*
        @param [int]
    */
    deactivate: function (processId) {
        if (deactivateQueue.indexOf(processId) === -1) {
            deactivateQueue.push(processId);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDOztBQUU1QyxJQUFNLFlBQVksR0FBRyxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNoRixJQUFNLGVBQWUsR0FBRyxZQUFZLENBQUMsTUFBTTs7O0FBQUMsQUFHNUMsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDOzs7QUFBQyxBQUd6QixJQUFJLFlBQVksR0FBRyxDQUFDOzs7QUFBQyxBQUdyQixJQUFJLFdBQVcsR0FBRyxDQUFDOzs7QUFBQyxBQUdwQixJQUFJLFVBQVUsR0FBRyxFQUFFOzs7QUFBQyxBQUdwQixJQUFJLGdCQUFnQixHQUFHLEVBQUU7OztBQUFDLEFBRzFCLElBQUksZUFBZSxHQUFHLEVBQUU7OztBQUFDLEFBR3pCLElBQUksU0FBUyxHQUFHLEtBQUs7Ozs7Ozs7O0FBQUMsQUFRdEIsSUFBTSxXQUFXLEdBQUcsVUFBQyxHQUFHLEVBQUUsWUFBWSxFQUFLO0FBQ3ZDLFFBQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRTVCLGdCQUFZLElBQUksTUFBTSxDQUFDOztBQUV2QixRQUFJLENBQUMsWUFBWSxFQUFFO0FBQ2YsbUJBQVcsSUFBSSxNQUFNLENBQUM7S0FDekI7Q0FDSjs7Ozs7QUFBQSxBQUtELElBQU0sS0FBSyxHQUFHLFlBQU07QUFDaEIsUUFBSSxXQUFXLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQzs7QUFFekMsV0FBTyxXQUFXLEVBQUUsRUFBRTtBQUNsQixZQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDaEQsWUFBTSxhQUFhLEdBQUcsVUFB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QUM7QUFDM0IsNEJBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDOztBQUV0Qyx1QkFBVyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDeEMsZ0JBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtLQUNKOzs7OztBQUtELGNBQVUsRUFBRSxVQUFDLFNBQVMsRUFBSztBQUN2QixZQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDM0MsMkJBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkM7S0FDSjtDQUNKLENBQUMiLCJmaWxlIjoibG9vcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRpbWVyID0gcmVxdWlyZSgnLi90aW1lcicpO1xuY29uc3Qgc3lzdGVtVGljayA9IHJlcXVpcmUoJy4vc3lzdGVtLXRpY2snKTtcblxuY29uc3QgcHJvY2Vzc09yZGVyID0gWyd1cGRhdGUnLCAncHJlUmVuZGVyJywgJ3JlbmRlcicsICdwb3N0UmVuZGVyJywgJ2NsZWFudXAnXTtcbmNvbnN0IG51bVByb2Nlc3NTdGVwcyA9IHByb2Nlc3NPcmRlci5sZW5ndGg7XG5cbi8vIFtpbnRdOiBQcm9jZXNzIElELCBpbmNyZW1lbnRlZCBmb3IgZWFjaCBuZXcgcHJvY2Vzc1xubGV0IGN1cnJlbnRQcm9jZXNzSWQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgcHJvY2Vzc2VzXG5sZXQgcnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBydW5uaW5nIG5vbi1iYWNrZ3JvdW5kIHByb2Nlc3Nlc1xubGV0IGFjdGl2ZUNvdW50ID0gMDtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgYWN0aXZlIHByb2Nlc3MgSURzXG5sZXQgcnVubmluZ0lkcyA9IFtdO1xuXG4vLyBbb2JqZWN0XTogTWFwIG9mIGFjdGl2ZSBwcm9jZXNzZXNcbmxldCBydW5uaW5nUHJvY2Vzc2VzID0ge307XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHByb2Nlc3MgSURzIHF1ZXVlZCBmb3IgZGVhY3RpdmF0aW9uXG5sZXQgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8vIFtib29sZWFuXTogSXMgbG9vcCBydW5uaW5nP1xubGV0IGlzUnVubmluZyA9IGZhbHNlO1xuXG4vKlxuICAgIFVwZGF0ZSBydW5uaW5nXG5cbiAgICBAcGFyYW0gW2Jvb2xlYW5dXG4gICAgQHBhcmFtIFtib29sZWFuXVxuKi9cbmNvbnN0IHVwZGF0ZUNvdW50ID0gKGFkZCwgaXNCYWNrZ3JvdW5kKSA9PiB7XG4gICAgY29uc3QgbW9kaWZ5ID0gYWRkID8gMSA6IC0xO1xuXG4gICAgcnVubmluZ0NvdW50ICs9IG1vZGlmeTtcblxuICAgIGlmICghaXNCYWNrZ3JvdW5kKSB7XG4gICAgICAgIGFjdGl2ZUNvdW50ICs9IG1vZGlmeTtcbiAgICB9XG59XG5cbi8qXG4gICAgUHVyZ2UgaXRlbXMgaW4gdGhlIGRlYWN0aXZhdGUgcXVldWUgZnJvbSBvdXIgcnVubmluZ1Byb2Nlc3Nlc1xuKi9cbmNvbnN0IHB1cmdlID0gKCkgPT4ge1xuICAgIGxldCBxdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAocXVldWVMZW5ndGgtLSkge1xuICAgICAgICBjb25zdCBpZFRvRGVsZXRlID0gZGVhY3RpdmF0ZVF1ZXVlW3F1ZXVlTGVuZ3RoXTtcbiAgICAgICAgY29uc3QgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZFRvRGVsZXRlKTtcblxuICAgICAgICAvLyBJZiBwcm9jZXNzIGlzIGFjdGl2ZSwgZGVhY3RpdmF0ZVxuICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBydW5uaW5nSWRzLnNwbGljZShhY3RpdmVJZEluZGV4LCAxKTtcblxuICAgICAgICAgICAgdXBkYXRlQ291bnQoZmFsc2UsIHJ1bm5pbmdQcm9jZXNzZXNbaWRUb0RlbGV0ZV0uaXNCYWNrZ3JvdW5kKTtcblxuICAgICAgICAgICAgZGVsZXRlIHJ1bm5pbmdQcm9jZXNzZXNbaWRUb0RlbGV0ZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWFjdGl2YXRlUXVldWUgPSBbXTtcbn1cblxuLypcbiAgICBGaXJlIGFsbCBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgXG4gICAgQHBhcmFtIFtpbnRdOiBUaW1lc3RhbXAgb2YgZXhlY3V0aW5nIGZyYW1lc1xuICAgIEBwYXJhbSBbaW50XTogVGltZSBzaW5jZSBwcmV2aW91cyBmcmFtZVxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGFjdGl2ZSBwcm9jZXNzZXMgZm91bmRcbiovXG5jb25zdCBmaXJlQWxsID0gKGZyYW1lc3RhbXAsIGVsYXBzZWQpID0+IHtcbiAgICBwdXJnZSgpO1xuXG4gICAgY29uc3QgbnVtUnVubmluZyA9IHJ1bm5pbmdDb3VudDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVByb2Nlc3NTdGVwczsgaSsrKSB7XG4gICAgICAgIGxldCBtZXRob2QgPSBwcm9jZXNzT3JkZXJbaV07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1SdW5uaW5nOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwcm9jZXNzID0gcnVubmluZ1Byb2Nlc3Nlc1tydW5uaW5nSWRzW2ldXTtcblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MgJiYgcHJvY2Vzc1ttZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc1ttZXRob2RdLmNhbGwocHJvY2Vzcy5zY29wZSwgcHJvY2Vzcy5zY29wZSwgZnJhbWVzdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdXJnZSgpO1xuXG4gICAgcmV0dXJuIGFjdGl2ZUNvdW50ID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG5jb25zdCBsb29wID0ge1xuICAgIC8qXG4gICAgICAgIEZpcmUgYWxsIGFjdGl2ZSBwcm9jZXNzZXMgb25jZSBwZXIgZnJhbWVcbiAgICAqL1xuICAgIGZyYW1lOiAoKSA9PiB7XG4gICAgICAgIHN5c3RlbVRpY2soKGZyYW1lc3RhbXApID0+IHtcbiAgICAgICAgICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBsb29wLmZyYW1lKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRpbWVyLnVwZGF0ZShmcmFtZXN0YW1wKTtcbiAgICAgICAgICAgIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVzdGFtcCwgdGltZXIuZ2V0RWxhcHNlZCgpKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHN0YXJ0OiAoKSA9PiB7XG4gICAgICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICB0aW1lci5zdGFydCgpO1xuICAgICAgICAgICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGxvb3AuZnJhbWUoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiAoKSA9PiB7XG4gICAgICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8vIEluY3JlbWVudHMgYW5kIHJldHVybnMgdGhlIGxhdGVzdCBwcm9jZXNzIElEXG4gICAgZ2V0UHJvY2Vzc0lkOiAoKSA9PiBjdXJyZW50UHJvY2Vzc0lkKyssXG5cbiAgICAvKlxuICAgICAgICBAcGFyYW0gW1Byb2Nlc3NdXG4gICAgICAgIEBwYXJhbSBbaW50XVxuICAgICovXG4gICAgYWN0aXZhdGU6IChwcm9jZXNzLCBwcm9jZXNzSWQpID0+IHtcbiAgICAgICAgY29uc3QgcXVldWVJbmRleCA9IGRlYWN0aXZhdGVRdWV1ZS5pbmRleE9mKHByb2Nlc3NJZCk7XG4gICAgICAgIGNvbnN0IGlzUXVldWVkID0gKHF1ZXVlSW5kZXggPiAtMSk7XG4gICAgICAgIGNvbnN0IGlzUnVubmluZyA9IChydW5uaW5nSWRzLmluZGV4T2YocHJvY2Vzc0lkKSA+IC0xKTtcblxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBkZWFjdGl2YXRlUXVldWUgaWYgcXVldWVkXG4gICAgICAgIGlmIChpc1F1ZXVlZCkge1xuICAgICAgICAgICAgZGVhY3RpdmF0ZVF1ZXVlLnNwbGljZShxdWV1ZUluZGV4LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0byBydW5uaW5nIHByb2Nlc3NlcyBhcnJheSBpZiBub3QgdGhlcmVcbiAgICAgICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHJ1bm5pbmdJZHMucHVzaChwcm9jZXNzSWQpO1xuICAgICAgICAgICAgcnVubmluZ1Byb2Nlc3Nlc1twcm9jZXNzSWRdID0gcHJvY2VzcztcblxuICAgICAgICAgICAgdXBkYXRlQ291bnQodHJ1ZSwgcHJvY2Vzcy5pc0JhY2tncm91bmQpO1xuICAgICAgICAgICAgbG9vcC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbaW50XVxuICAgICovXG4gICAgZGVhY3RpdmF0ZTogKHByb2Nlc3NJZCkgPT4ge1xuICAgICAgICBpZiAoZGVhY3RpdmF0ZVF1ZXVlLmluZGV4T2YocHJvY2Vzc0lkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5wdXNoKHByb2Nlc3NJZCk7XG4gICAgICAgIH1cbiAgICB9XG59OyJdfQ==
return exports;
})());

var Process = (function () {

    /*
        @param [function || object]
        @param [object] (optional)
    */

    function Process(callback, scope) {
        var _this = this;

        _classCallCheck(this, Process);

        // Set callback
        if (utils.isFunc(callback)) {
            this.render = callback;
        } else if (utils.isObj(callback)) {
            utils.each(callback, function (key, value) {
                _this[key] = value;
            });
        }

        this.scope = utils.isObj(scope) ? scope : this;

        this.setBackground(arguments[arguments.length - 1]);

        this.id = loop.getProcessId();
        this.isActive = false;
    }

    Process.prototype.start = function start() {
        this.activate();
        return this;
    };

    Process.prototype.stop = function stop() {
        this.deactivate();
        return this;
    };

    Process.prototype.activate = function activate() {
        this.isActive = true;
        loop.activate(this, this.id);
    };

    Process.prototype.deactivate = function deactivate() {
        this.isActive = false;
        loop.deactivate(this.id);
    };

    Process.prototype.once = function once() {
        var _this2 = this;

        this.cleanup = function () {
            _this2.stop();
            _this2.cleanup = undefined;
        };

        return this.start();
    };

    Process.prototype.setBackground = function setBackground(runInBackground) {
        this.isBackground = runInBackground === true ? true : false;
        return this;
    };

    return Process;
})();

exports = Process;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN0QyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7O0lBRXpCLE9BQU87Ozs7Ozs7QUFNVCxhQU5FLE9BQU8sQ0FNRyxRQUFRLEVBQUUsS0FBSyxFQUFFOzs7OEJBTjNCLE9BQU87OztBQVFMLFlBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUN4QixnQkFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7U0FFMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDOUIsaUJBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQUssRUFBSztBQUNqQyxzQkFBSyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDckIsQ0FBQyxDQUFDO1NBQ047O0FBRUQsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7O0FBRS9DLFlBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFcEQsWUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDOUIsWUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FDekI7O0FBdkJDLFdBQU8sV0F5QlQsS0FBSyxvQkFBRztBQUNKLFlBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNoQixlQUFPLElBQUksQ0FBQztLQUNmOztBQTVCQyxXQUFPLFdBOEJULElBQUksbUJBQUc7QUFDSCxZQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDbEIsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUFqQ0MsV0FBTyxXQW1DVCxRQUFRLHVCQUFHO0FBQ1AsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsWUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2hDOztBQXRDQyxXQUFPLFdBd0NULFVBQVUseUJBQUc7QUFDVCxZQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUN0QixZQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUM1Qjs7QUEzQ0MsV0FBTyxXQTZDVCxJQUFJLG1CQUFHOzs7QUFDSCxZQUFJLENBQUMsT0FBTyxHQUFHLFlBQU07QUFDakIsbUJBQUssSUFBSSxFQUFFLENBQUM7QUFDWixtQkFBSyxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBQzVCLENBQUE7O0FBRUQsZUFBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDdkI7O0FBcERDLFdBQU8sV0FzRFQsYUFBYSwwQkFBQyxlQUFlLEVBQUU7QUFDM0IsWUFBSSxDQUFDLFlBQVksR0FBRyxBQUFDLGVBQWUsS0FBSyxJQUFJLEdBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztBQUM5RCxlQUFPLElBQUksQ0FBQztLQUNmOztXQXpEQyxPQUFPOzs7QUE0RGIsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMiLCJmaWxlIjoiUHJvY2Vzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5jb25zdCBsb29wID0gcmVxdWlyZSgnLi9sb29wJyk7XG5cbmNsYXNzIFByb2Nlc3Mge1xuXG4gICAgLypcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbiB8fCBvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICAgICAgLy8gU2V0IGNhbGxiYWNrXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlciA9IGNhbGxiYWNrO1xuICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iaihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIHV0aWxzLmVhY2goY2FsbGJhY2ssIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NvcGUgPSB1dGlscy5pc09iaihzY29wZSkgPyBzY29wZSA6IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZXRCYWNrZ3JvdW5kKGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0pO1xuXG4gICAgICAgIHRoaXMuaWQgPSBsb29wLmdldFByb2Nlc3NJZCgpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLCB0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBvbmNlKCkge1xuICAgICAgICB0aGlzLmNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc2V0QmFja2dyb3VuZChydW5JbkJhY2tncm91bmQpIHtcbiAgICAgICAgdGhpcy5pc0JhY2tncm91bmQgPSAocnVuSW5CYWNrZ3JvdW5kID09PSB0cnVlKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2Nlc3M7Il19
return exports;
})();
var __small$_20 = (function() {
var exports = {};
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Process = __small$_24,
    Queue = ((function() {
var exports = {};
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = (function () {
    function Queue() {
        _classCallCheck(this, Queue);

        this.clear();
    }

    /*
        Add a set of arguments to queue
    */

    Queue.prototype.add = function add() {
        this.queue.push([].slice.call(arguments));
    };

    /*
        Get next set of arguments from queue
    */

    Queue.prototype.next = function next() {
        var direction = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

        var queue = this.queue,
            returnVal = false,
            index = this.index;

        // If our index is between 0 and the queue length, return that item
        if (index >= 0 && index < queue.length) {
            returnVal = queue[index];
            this.index = index + direction;

            // Or clear
        } else {
                this.clear();
            }

        return returnVal;
    };

    /*
        Replace queue with empty array
    */

    Queue.prototype.clear = function clear() {
        this.queue = [];
        this.index = 0;
    };

    return Queue;
})();

exports = Queue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvUXVldWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQUFNLEtBQUs7QUFDUCxhQURFLEtBQUssR0FDTzs4QkFEWixLQUFLOztBQUVILFlBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNoQjs7Ozs7QUFBQTtBQUhDLFNBQUssV0FRUCxHQUFHLGtCQUFHO0FBQ0YsWUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztLQUM3Qzs7Ozs7O0FBVkMsU0FBSyxXQWVQLElBQUksbUJBQWdCO1lBQWYsU0FBUyx5REFBRyxDQUFDOztBQUNkLFlBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQ2xCLFNBQVMsR0FBRyxLQUFLO1lBQ2pCLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSzs7O0FBQUMsQUFHdkIsWUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO0FBQ3BDLHFCQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLGdCQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxTQUFTOzs7QUFBQyxTQUdsQyxNQUFNO0FBQ0gsb0JBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNoQjs7QUFFRCxlQUFPLFNBQVMsQ0FBQztLQUNwQjs7Ozs7O0FBL0JDLFNBQUssV0FvQ1AsS0FBSyxvQkFBRztBQUNKLFlBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLFlBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0tBQ2xCOztXQXZDQyxLQUFLOzs7QUEwQ1gsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMiLCJmaWxlIjoiUXVldWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBRdWV1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBZGQgYSBzZXQgb2YgYXJndW1lbnRzIHRvIHF1ZXVlXG4gICAgKi9cbiAgICBhZGQoKSB7XG4gICAgICAgIHRoaXMucXVldWUucHVzaChbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEdldCBuZXh0IHNldCBvZiBhcmd1bWVudHMgZnJvbSBxdWV1ZVxuICAgICovXG4gICAgbmV4dChkaXJlY3Rpb24gPSAxKSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IHRoaXMucXVldWUsXG4gICAgICAgICAgICByZXR1cm5WYWwgPSBmYWxzZSxcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5pbmRleDtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIG91ciBpbmRleCBpcyBiZXR3ZWVuIDAgYW5kIHRoZSBxdWV1ZSBsZW5ndGgsIHJldHVybiB0aGF0IGl0ZW1cbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVyblZhbCA9IHF1ZXVlW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpbmRleCArIGRpcmVjdGlvbjtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGNsZWFyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXR1cm5WYWw7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUmVwbGFjZSBxdWV1ZSB3aXRoIGVtcHR5IGFycmF5XG4gICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUXVldWU7Il19
return exports;
})()),
    utils = __small$_35,
    select = __small$_50,
    valueOps = __small$_51,

/*
    Process methods
*/
update = ((function() {
var exports = {};
'use strict';

var calc = __small$_34;
var utils = __small$_35;
var Action = __small$_27;
var defaultAction = new Action();
var Watch = ((function() {
var exports = {};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Action = __small$_27,
    calc = __small$_34,
    isString = __small$_35.isString,

/*
    Translate our mapLink value into mapTo
    
    @param [number]: Calculated value from linked value
    @param [Value || object]: Linked value or empty object if we're linking to input
    @param [array]: List of numbers relating to linked value
    @param [array]: List of numbers relating to this value
*/
findMappedValue = function (newValue, linkedValue, toValue, mapLink, mapTo) {
    var mapLength = mapLink.length,
        i = 1,
        lastLinkValue,
        thisLinkValue,
        lastToValue,
        thisToValue;

    for (; i < mapLength; i++) {
        // Assign values from array, or if they're strings, look for them in linkedValue
        lastLinkValue = isString(mapLink[i - 1]) ? linkedValue[mapLink[i - 1]] : mapLink[i - 1];
        thisLinkValue = isString(mapLink[i]) ? linkedValue[mapLink[i]] : mapLink[i];
        lastToValue = isString(mapTo[i - 1]) ? toValue[mapTo[i - 1]] : mapTo[i - 1];
        thisToValue = isString(mapTo[i]) ? toValue[mapTo[i]] : mapTo[i];

        // Check if we've gone past our calculated value, or if we're at the end of the array
        if (newValue < thisLinkValue || i === mapLength - 1) {
            newValue = calc.value(calc.restricted(calc.progress(newValue, lastLinkValue, thisLinkValue), 0, 1), lastToValue, thisToValue);
            break;
        }
    }

    return newValue;
};

var Watch = (function (_Action) {
    _inherits(Watch, _Action);

    function Watch() {
        _classCallCheck(this, Watch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _Action.call.apply(_Action, [this].concat(args)));

        _this.isActive = true;
        return _this;
    }

    /*
        Process this value
        
        First check if this value exists as a Value, if not
        check within Input (if we have one)
            
        @param [Actor]
        @param [Value]: Current value
        @param [string]: Key of current value
        @return [number]: Calculated value
    */

    Watch.prototype.process = function process(actor, value, key) {
        var watchedKey = value.watch;
        var watchedValue = 0;
        var values = actor.values;
        var newValue = value.current;
        var inputOffset = value.action ? value.action.inputOffset : false;

        if (isString(watchedKey)) {
            watchedValue = values[watchedKey] ? values[watchedKey] : {};

            // First look at Action and check value isn't linking itself
            if (watchedValue.current !== undefined && key !== watchedKey) {
                newValue = watchedValue.current;

                // Then check values in Input
            } else if (inputOffset && inputOffset.hasOwnProperty(watchedKey)) {
                    newValue = value.action.process(actor, value, watchedKey);
                }
        } else {
            newValue = watchedKey(actor);
        }

        // If we have mapFrom and mapTo properties, translate the new value
        if (value.mapFrom && value.mapTo) {
            newValue = findMappedValue(newValue, watchedValue, value, value.mapFrom, value.mapTo);
        }

        return newValue;
    };

    return Watch;
})(Action);

exports = Watch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1dhdGNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUM1QixJQUFJLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUM3QixRQUFRLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVE7Ozs7Ozs7Ozs7QUFVM0MsZUFBZSxHQUFHLFVBQVUsUUFBUSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN4RSxRQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTTtRQUMxQixDQUFDLEdBQUcsQ0FBQztRQUNMLGFBQWE7UUFDYixhQUFhO1FBQ2IsV0FBVztRQUNYLFdBQVcsQ0FBQzs7QUFFaEIsV0FBTyxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFOztBQUV2QixxQkFBYSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hGLHFCQUFhLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUUsbUJBQVcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1RSxtQkFBVyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O0FBQUMsQUFHaEUsWUFBSSxRQUFRLEdBQUcsYUFBYSxJQUFJLENBQUMsS0FBSyxTQUFTLEdBQUcsQ0FBQyxFQUFFO0FBQ2pELG9CQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzlILGtCQUFNO1NBQ1Q7S0FDSjs7QUFFRCxXQUFPLFFBQVEsQ0FBQztDQUNuQixDQUFDOztJQUVBLEtBQUs7Y0FBTCxLQUFLOztBQUNQLGFBREUsS0FBSyxHQUNjOzhCQURuQixLQUFLOzswQ0FDUSxJQUFJO0FBQUosZ0JBQUk7OztxREFDZiwwQ0FBUyxJQUFJLEVBQUM7O0FBQ2QsY0FBSyxRQUFRLEdBQUcsSUFBSSxDQUFDOztLQUN4Qjs7Ozs7Ozs7Ozs7OztBQUFBO0FBSkMsU0FBSyxXQWlCUCxPQUFPLG9CQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0FBQ3ZCLFlBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDL0IsWUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLFlBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDMUIsWUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUM3QixZQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzs7QUFFbEUsWUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDdEIsd0JBQVksR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7OztBQUFDLEFBRzVELGdCQUFJLFlBQVksQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxVQUFVLEVBQUU7QUFDMUQsd0JBQVEsR0FBRyxZQUFZLENBQUMsT0FBTzs7O0FBQUMsYUFHbkMsTUFBTSxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQzlELDRCQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztpQkFDN0Q7U0FFSixNQUFNO0FBQ0gsb0JBQVEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7OztBQUFBLEFBR0QsWUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDOUIsb0JBQVEsR0FBRyxlQUFlLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekY7O0FBRUQsZUFBTyxRQUFRLENBQUM7S0FDbkI7O1dBOUNDLEtBQUs7R0FBUyxNQUFNOztBQWlEMUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMiLCJmaWxlIjoiV2F0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgQWN0aW9uID0gcmVxdWlyZSgnLi9BY3Rpb24nKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICBpc1N0cmluZyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLmlzU3RyaW5nLFxuXG4gICAgLypcbiAgICAgICAgVHJhbnNsYXRlIG91ciBtYXBMaW5rIHZhbHVlIGludG8gbWFwVG9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZSBmcm9tIGxpbmtlZCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW1ZhbHVlIHx8IG9iamVjdF06IExpbmtlZCB2YWx1ZSBvciBlbXB0eSBvYmplY3QgaWYgd2UncmUgbGlua2luZyB0byBpbnB1dFxuICAgICAgICBAcGFyYW0gW2FycmF5XTogTGlzdCBvZiBudW1iZXJzIHJlbGF0aW5nIHRvIGxpbmtlZCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW2FycmF5XTogTGlzdCBvZiBudW1iZXJzIHJlbGF0aW5nIHRvIHRoaXMgdmFsdWVcbiAgICAqL1xuICAgIGZpbmRNYXBwZWRWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgbGlua2VkVmFsdWUsIHRvVmFsdWUsIG1hcExpbmssIG1hcFRvKSB7XG4gICAgICAgIHZhciBtYXBMZW5ndGggPSBtYXBMaW5rLmxlbmd0aCxcbiAgICAgICAgICAgIGkgPSAxLFxuICAgICAgICAgICAgbGFzdExpbmtWYWx1ZSxcbiAgICAgICAgICAgIHRoaXNMaW5rVmFsdWUsXG4gICAgICAgICAgICBsYXN0VG9WYWx1ZSxcbiAgICAgICAgICAgIHRoaXNUb1ZhbHVlO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbWFwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEFzc2lnbiB2YWx1ZXMgZnJvbSBhcnJheSwgb3IgaWYgdGhleSdyZSBzdHJpbmdzLCBsb29rIGZvciB0aGVtIGluIGxpbmtlZFZhbHVlXG4gICAgICAgICAgICBsYXN0TGlua1ZhbHVlID0gaXNTdHJpbmcobWFwTGlua1tpIC0gMV0pID8gbGlua2VkVmFsdWVbbWFwTGlua1tpIC0gMV1dIDogbWFwTGlua1tpIC0gMV07XG4gICAgICAgICAgICB0aGlzTGlua1ZhbHVlID0gaXNTdHJpbmcobWFwTGlua1tpXSkgPyBsaW5rZWRWYWx1ZVttYXBMaW5rW2ldXSA6IG1hcExpbmtbaV07XG4gICAgICAgICAgICBsYXN0VG9WYWx1ZSA9IGlzU3RyaW5nKG1hcFRvW2kgLSAxXSkgPyB0b1ZhbHVlW21hcFRvW2kgLSAxXV0gOiBtYXBUb1tpIC0gMV07XG4gICAgICAgICAgICB0aGlzVG9WYWx1ZSA9IGlzU3RyaW5nKG1hcFRvW2ldKSA/IHRvVmFsdWVbbWFwVG9baV1dIDogbWFwVG9baV07XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlJ3ZlIGdvbmUgcGFzdCBvdXIgY2FsY3VsYXRlZCB2YWx1ZSwgb3IgaWYgd2UncmUgYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXlcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA8IHRoaXNMaW5rVmFsdWUgfHwgaSA9PT0gbWFwTGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gY2FsYy52YWx1ZShjYWxjLnJlc3RyaWN0ZWQoY2FsYy5wcm9ncmVzcyhuZXdWYWx1ZSwgbGFzdExpbmtWYWx1ZSwgdGhpc0xpbmtWYWx1ZSksIDAsIDEpLCBsYXN0VG9WYWx1ZSwgdGhpc1RvVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfTtcblxuY2xhc3MgV2F0Y2ggZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFByb2Nlc3MgdGhpcyB2YWx1ZVxuICAgICAgICBcbiAgICAgICAgRmlyc3QgY2hlY2sgaWYgdGhpcyB2YWx1ZSBleGlzdHMgYXMgYSBWYWx1ZSwgaWYgbm90XG4gICAgICAgIGNoZWNrIHdpdGhpbiBJbnB1dCAoaWYgd2UgaGF2ZSBvbmUpXG4gICAgICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgIGNvbnN0IHdhdGNoZWRLZXkgPSB2YWx1ZS53YXRjaDtcbiAgICAgICAgbGV0IHdhdGNoZWRWYWx1ZSA9IDA7XG4gICAgICAgIGxldCB2YWx1ZXMgPSBhY3Rvci52YWx1ZXM7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIGxldCBpbnB1dE9mZnNldCA9IHZhbHVlLmFjdGlvbiA/IHZhbHVlLmFjdGlvbi5pbnB1dE9mZnNldCA6IGZhbHNlO1xuXG4gICAgICAgIGlmIChpc1N0cmluZyh3YXRjaGVkS2V5KSkge1xuICAgICAgICAgICAgd2F0Y2hlZFZhbHVlID0gdmFsdWVzW3dhdGNoZWRLZXldID8gdmFsdWVzW3dhdGNoZWRLZXldIDoge307XG5cbiAgICAgICAgICAgIC8vIEZpcnN0IGxvb2sgYXQgQWN0aW9uIGFuZCBjaGVjayB2YWx1ZSBpc24ndCBsaW5raW5nIGl0c2VsZlxuICAgICAgICAgICAgaWYgKHdhdGNoZWRWYWx1ZS5jdXJyZW50ICE9PSB1bmRlZmluZWQgJiYga2V5ICE9PSB3YXRjaGVkS2V5KSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB3YXRjaGVkVmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gVGhlbiBjaGVjayB2YWx1ZXMgaW4gSW5wdXRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXRPZmZzZXQgJiYgaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkod2F0Y2hlZEtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlLmFjdGlvbi5wcm9jZXNzKGFjdG9yLCB2YWx1ZSwgd2F0Y2hlZEtleSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gd2F0Y2hlZEtleShhY3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIG1hcEZyb20gYW5kIG1hcFRvIHByb3BlcnRpZXMsIHRyYW5zbGF0ZSB0aGUgbmV3IHZhbHVlXG4gICAgICAgIGlmICh2YWx1ZS5tYXBGcm9tICYmIHZhbHVlLm1hcFRvKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGZpbmRNYXBwZWRWYWx1ZShuZXdWYWx1ZSwgd2F0Y2hlZFZhbHVlLCB2YWx1ZSwgdmFsdWUubWFwRnJvbSwgdmFsdWUubWFwVG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXYXRjaDsiXX0=
return exports;
})());
var watcher = new Watch();

exports = function (actor, framestamp, frameDuration) {
    var numActiveValues = actor.activeValues.length;
    var state = actor.state;

    actor.hasChanged = false;

    for (var i = 0; i < numActiveValues; i++) {
        // Get value and key
        var key = actor.activeValues[i];
        var value = actor.values[key];
        var action = !value.action || value.action && !value.action.isActive ? defaultAction : value.action;

        // Fire action onFrameStart if not already fired
        if (action.onFrameStart && action.lastUpdate !== framestamp) {
            action.onFrameStart(actor, frameDuration, framestamp);
            action.lastUpdate = framestamp;
        }

        // Calculate new value
        var updatedValue = utils.has(value, 'watch') ? watcher.process(actor, value) : action.process(actor, value, key, frameDuration);

        // User-defined transform function
        if (value.transform) {
            updatedValue = value.transform(updatedValue, key, actor);
        }

        // Limit if actor action does that kind of thing
        if (action.limit && value.hasRange) {
            updatedValue = action.limit(updatedValue, value);
        }

        // Smooth value if we have smoothing
        if (value.smooth) {
            updatedValue = calc.smooth(updatedValue, value.current, frameDuration, value.smooth);
        }

        // Round value if round is true
        if (value.round) {
            updatedValue = Math.round(updatedValue);
        }

        // Update frameChange
        value.frameChange = updatedValue - value.current;

        // Calculate velocity if Action hasn't
        if (!action.calculatesVelocity) {
            value.velocity = calc.speedPerSecond(value.frameChange, frameDuration);
        }

        // Update current speed
        value.speed = Math.abs(value.velocity);

        // Check if value's changed
        if (value.current !== updatedValue || actor.firstFrame) {
            actor.hasChanged = true;
        }

        // Set new current
        value.current = updatedValue;
        var valueState = value.unit ? updatedValue + value.unit : updatedValue;

        // Put value in state if no parent
        if (!value.parent) {
            state.values[key] = valueState;

            // Or, add to parent state to be combined later
        } else {
                state[value.parent] = state[value.parent] || {};
                state[value.parent][value.propName] = valueState;
            }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci91cGRhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDcEMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzVDLElBQU0sYUFBYSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFDbkMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDMUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQzs7QUFFNUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFLO0FBQ25ELFFBQU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO0FBQ2xELFFBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7O0FBRXhCLFNBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDOztBQUV6QixTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZUFBZSxFQUFFLENBQUMsRUFBRSxFQUFFOztBQUV0QyxZQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLFlBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsWUFBSSxNQUFNLEdBQUcsQUFBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTTs7O0FBQUMsQUFHdEcsWUFBSSxNQUFNLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO0FBQ3pELGtCQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDdEQsa0JBQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQ2xDOzs7QUFBQSxBQUdELFlBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsYUFBYSxDQUFDOzs7QUFBQyxBQUdoSSxZQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUU7QUFDakIsd0JBQVksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDNUQ7OztBQUFBLEFBR0QsWUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7QUFDaEMsd0JBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwRDs7O0FBQUEsQUFHRCxZQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDZCx3QkFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4Rjs7O0FBQUEsQUFHRCxZQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDYix3QkFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDM0M7OztBQUFBLEFBR0QsYUFBSyxDQUFDLFdBQVcsR0FBRyxZQUFZLEdBQUcsS0FBSyxDQUFDLE9BQU87OztBQUFDLEFBR2pELFlBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUU7QUFDNUIsaUJBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQzFFOzs7QUFBQSxBQUdELGFBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDOzs7QUFBQyxBQUd2QyxZQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssWUFBWSxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7QUFDcEQsaUJBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQzNCOzs7QUFBQSxBQUdELGFBQUssQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO0FBQzdCLFlBQUksVUFBVSxHQUFHLEFBQUMsS0FBSyxDQUFDLElBQUksR0FBSSxZQUFZLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxZQUFZOzs7QUFBQyxBQUd6RSxZQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNmLGlCQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVU7OztBQUFDLFNBR2xDLE1BQU07QUFDSCxxQkFBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNoRCxxQkFBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsVUFBVSxDQUFDO2FBQ3BEO0tBQ0o7Q0FDSixDQUFBIiwiZmlsZSI6InVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcbmNvbnN0IEFjdGlvbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvQWN0aW9uJyk7XG5jb25zdCBkZWZhdWx0QWN0aW9uID0gbmV3IEFjdGlvbigpO1xuY29uc3QgV2F0Y2ggPSByZXF1aXJlKCcuLi9hY3Rpb25zL1dhdGNoJyk7XG5jb25zdCB3YXRjaGVyID0gbmV3IFdhdGNoKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gKGFjdG9yLCBmcmFtZXN0YW1wLCBmcmFtZUR1cmF0aW9uKSA9PiB7XG4gICAgY29uc3QgbnVtQWN0aXZlVmFsdWVzID0gYWN0b3IuYWN0aXZlVmFsdWVzLmxlbmd0aDtcbiAgICBsZXQgc3RhdGUgPSBhY3Rvci5zdGF0ZTtcblxuICAgIGFjdG9yLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQWN0aXZlVmFsdWVzOyBpKyspIHtcbiAgICAgICAgLy8gR2V0IHZhbHVlIGFuZCBrZXlcbiAgICAgICAgbGV0IGtleSA9IGFjdG9yLmFjdGl2ZVZhbHVlc1tpXTtcbiAgICAgICAgbGV0IHZhbHVlID0gYWN0b3IudmFsdWVzW2tleV07XG4gICAgICAgIGxldCBhY3Rpb24gPSAoIXZhbHVlLmFjdGlvbiB8fCB2YWx1ZS5hY3Rpb24gJiYgIXZhbHVlLmFjdGlvbi5pc0FjdGl2ZSkgPyBkZWZhdWx0QWN0aW9uIDogdmFsdWUuYWN0aW9uO1xuXG4gICAgICAgIC8vIEZpcmUgYWN0aW9uIG9uRnJhbWVTdGFydCBpZiBub3QgYWxyZWFkeSBmaXJlZFxuICAgICAgICBpZiAoYWN0aW9uLm9uRnJhbWVTdGFydCAmJiBhY3Rpb24ubGFzdFVwZGF0ZSAhPT0gZnJhbWVzdGFtcCkge1xuICAgICAgICAgICAgYWN0aW9uLm9uRnJhbWVTdGFydChhY3RvciwgZnJhbWVEdXJhdGlvbiwgZnJhbWVzdGFtcCk7XG4gICAgICAgICAgICBhY3Rpb24ubGFzdFVwZGF0ZSA9IGZyYW1lc3RhbXA7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldyB2YWx1ZVxuICAgICAgICBsZXQgdXBkYXRlZFZhbHVlID0gdXRpbHMuaGFzKHZhbHVlLCAnd2F0Y2gnKSA/IHdhdGNoZXIucHJvY2VzcyhhY3RvciwgdmFsdWUpIDogYWN0aW9uLnByb2Nlc3MoYWN0b3IsIHZhbHVlLCBrZXksIGZyYW1lRHVyYXRpb24pO1xuXG4gICAgICAgIC8vIFVzZXItZGVmaW5lZCB0cmFuc2Zvcm0gZnVuY3Rpb25cbiAgICAgICAgaWYgKHZhbHVlLnRyYW5zZm9ybSkge1xuICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gdmFsdWUudHJhbnNmb3JtKHVwZGF0ZWRWYWx1ZSwga2V5LCBhY3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMaW1pdCBpZiBhY3RvciBhY3Rpb24gZG9lcyB0aGF0IGtpbmQgb2YgdGhpbmdcbiAgICAgICAgaWYgKGFjdGlvbi5saW1pdCAmJiB2YWx1ZS5oYXNSYW5nZSkge1xuICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gYWN0aW9uLmxpbWl0KHVwZGF0ZWRWYWx1ZSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgIGlmICh2YWx1ZS5zbW9vdGgpIHtcbiAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IGNhbGMuc21vb3RoKHVwZGF0ZWRWYWx1ZSwgdmFsdWUuY3VycmVudCwgZnJhbWVEdXJhdGlvbiwgdmFsdWUuc21vb3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJvdW5kIHZhbHVlIGlmIHJvdW5kIGlzIHRydWVcbiAgICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBNYXRoLnJvdW5kKHVwZGF0ZWRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgZnJhbWVDaGFuZ2VcbiAgICAgICAgdmFsdWUuZnJhbWVDaGFuZ2UgPSB1cGRhdGVkVmFsdWUgLSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSB2ZWxvY2l0eSBpZiBBY3Rpb24gaGFzbid0XG4gICAgICAgIGlmICghYWN0aW9uLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBjYWxjLnNwZWVkUGVyU2Vjb25kKHZhbHVlLmZyYW1lQ2hhbmdlLCBmcmFtZUR1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBjdXJyZW50IHNwZWVkXG4gICAgICAgIHZhbHVlLnNwZWVkID0gTWF0aC5hYnModmFsdWUudmVsb2NpdHkpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHZhbHVlJ3MgY2hhbmdlZFxuICAgICAgICBpZiAodmFsdWUuY3VycmVudCAhPT0gdXBkYXRlZFZhbHVlIHx8IGFjdG9yLmZpcnN0RnJhbWUpIHtcbiAgICAgICAgICAgIGFjdG9yLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IG5ldyBjdXJyZW50IFxuICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdXBkYXRlZFZhbHVlO1xuICAgICAgICBsZXQgdmFsdWVTdGF0ZSA9ICh2YWx1ZS51bml0KSA/IHVwZGF0ZWRWYWx1ZSArIHZhbHVlLnVuaXQgOiB1cGRhdGVkVmFsdWU7XG5cbiAgICAgICAgLy8gUHV0IHZhbHVlIGluIHN0YXRlIGlmIG5vIHBhcmVudFxuICAgICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICAgICAgc3RhdGUudmFsdWVzW2tleV0gPSB2YWx1ZVN0YXRlO1xuXG4gICAgICAgIC8vIE9yLCBhZGQgdG8gcGFyZW50IHN0YXRlIHRvIGJlIGNvbWJpbmVkIGxhdGVyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZVt2YWx1ZS5wYXJlbnRdID0gc3RhdGVbdmFsdWUucGFyZW50XSB8fCB7fTtcbiAgICAgICAgICAgIHN0YXRlW3ZhbHVlLnBhcmVudF1bdmFsdWUucHJvcE5hbWVdID0gdmFsdWVTdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=
return exports;
})()),
    render = ((function() {
var exports = {};
'use strict';

var valueTypeManager = __small$_19;
var each = __small$_35.each;

var createMapper = function (role, mappedValues) {
    return function (name, val) {
        return mappedValues[role.map(name)] = val;
    };
};

exports = function (actor) {
    var numActiveParents = actor.activeParents.length;
    var numRoles = actor.roles.length;

    // Update parent values from calculated children
    for (var i = 0; i < numActiveParents; i++) {
        var key = actor.activeParents[i];
        var value = actor.values[key];

        // Update parent value current property
        value.current = valueTypeManager[value.type].combine(actor.state[key], value.template);

        // Update state
        actor.state.values[key] = value.current;
    }

    // Fire `frame` and `update` callbacks on all Roles
    for (var i = 0; i < numRoles; i++) {
        var role = actor.roles[i];
        var mappedValues = {};

        each(actor.state.values, createMapper(role, mappedValues));

        if (role.frame) {
            role.frame.call(actor, mappedValues, actor);
        }

        if (role.update && actor.hasChanged) {
            role.update.call(actor, mappedValues, actor);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci9yZW5kZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQzNELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUM7O0FBRTFDLElBQU0sWUFBWSxHQUFHLFVBQUMsSUFBSSxFQUFFLFlBQVk7V0FBSyxVQUFDLElBQUksRUFBRSxHQUFHO2VBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHO0tBQUE7Q0FBQSxDQUFDOztBQUUvRixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUMsS0FBSyxFQUFLO0FBQ3hCLFFBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7QUFDcEQsUUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7QUFBQyxBQUdwQyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDdkMsWUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQyxZQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzs7O0FBQUMsQUFHOUIsYUFBSyxDQUFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7O0FBQUMsQUFHdkYsYUFBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUMzQzs7O0FBQUEsQUFHRCxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQy9CLFlBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUIsWUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDOztBQUV0QixZQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDOztBQUUzRCxZQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDWixnQkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMvQzs7QUFFRCxZQUFJLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtBQUNqQyxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNoRDtLQUNKO0NBQ0osQ0FBQSIsImZpbGUiOiJyZW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2YWx1ZVR5cGVNYW5hZ2VyID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvbWFuYWdlcicpO1xuY29uc3QgZWFjaCA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLmVhY2g7XG5cbmNvbnN0IGNyZWF0ZU1hcHBlciA9IChyb2xlLCBtYXBwZWRWYWx1ZXMpID0+IChuYW1lLCB2YWwpID0+IG1hcHBlZFZhbHVlc1tyb2xlLm1hcChuYW1lKV0gPSB2YWw7XG5cbm1vZHVsZS5leHBvcnRzID0gKGFjdG9yKSA9PiB7XG4gICAgY29uc3QgbnVtQWN0aXZlUGFyZW50cyA9IGFjdG9yLmFjdGl2ZVBhcmVudHMubGVuZ3RoO1xuICAgIGNvbnN0IG51bVJvbGVzID0gYWN0b3Iucm9sZXMubGVuZ3RoO1xuXG4gICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXMgZnJvbSBjYWxjdWxhdGVkIGNoaWxkcmVuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1BY3RpdmVQYXJlbnRzOyBpKyspIHtcbiAgICAgICAgbGV0IGtleSA9IGFjdG9yLmFjdGl2ZVBhcmVudHNbaV07XG4gICAgICAgIGxldCB2YWx1ZSA9IGFjdG9yLnZhbHVlc1trZXldO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWUgY3VycmVudCBwcm9wZXJ0eVxuICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWVUeXBlTWFuYWdlclt2YWx1ZS50eXBlXS5jb21iaW5lKGFjdG9yLnN0YXRlW2tleV0sIHZhbHVlLnRlbXBsYXRlKTtcblxuICAgICAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICAgICAgYWN0b3Iuc3RhdGUudmFsdWVzW2tleV0gPSB2YWx1ZS5jdXJyZW50O1xuICAgIH1cblxuICAgIC8vIEZpcmUgYGZyYW1lYCBhbmQgYHVwZGF0ZWAgY2FsbGJhY2tzIG9uIGFsbCBSb2xlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUm9sZXM7IGkrKykge1xuICAgICAgICBsZXQgcm9sZSA9IGFjdG9yLnJvbGVzW2ldO1xuICAgICAgICBsZXQgbWFwcGVkVmFsdWVzID0ge307XG5cbiAgICAgICAgZWFjaChhY3Rvci5zdGF0ZS52YWx1ZXMsIGNyZWF0ZU1hcHBlcihyb2xlLCBtYXBwZWRWYWx1ZXMpKTtcblxuICAgICAgICBpZiAocm9sZS5mcmFtZSkge1xuICAgICAgICAgICAgcm9sZS5mcmFtZS5jYWxsKGFjdG9yLCBtYXBwZWRWYWx1ZXMsIGFjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb2xlLnVwZGF0ZSAmJiBhY3Rvci5oYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICByb2xlLnVwZGF0ZS5jYWxsKGFjdG9yLCBtYXBwZWRWYWx1ZXMsIGFjdG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=
return exports;
})()),
    postRender = ((function() {
var exports = {};
'use strict';

var utils = __small$_35;
var each = utils.each;

/*
    Check all Actions for `onEnd`, return true if all are true

    @param [Actor]
    @param [boolean]
    @returns [boolean]
*/
var checkAllActionsHaveEnded = function (actor, hasChanged) {
    var hasEnded = true;
    var values = actor.state.values;

    each(actor.activeActions, function (key, action) {
        // Return if action has been deleted elsewhere
        if (!action) {
            return;
        }

        if (action.onFrame) {
            action.onFrame.call(actor, values, actor, action);
        }

        if (action.onUpdate && hasChanged) {
            action.onUpdate.call(actor, values, actor, action);
        }

        if (action.hasEnded && action.hasEnded(actor) === false) {
            hasEnded = false;
        } else {
            if (action.onComplete) {
                action.onComplete.call(actor, actor, action);
            }
            actor.unbindAction(key);
        }
    });

    return hasEnded;
};

exports = function (actor, framestamp) {
    if (actor.isActive) {
        actor.isActive = false;

        if (checkAllActionsHaveEnded(actor, actor.hasChanged)) {
            var numRoles = actor.roles.length;

            // Fire `complete` callbacks
            for (var i = 0; i < numRoles; i++) {
                var role = actor.roles[i];
                if (role.complete) {
                    role.complete.call(actor, actor);
                }
            }

            if (!actor.isActive) {
                actor.next();
            }
        } else {
            actor.isActive = true;
            actor.firstFrame = false;
        }
    }

    actor.framestamp = framestamp;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci9wb3N0LXJlbmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN0QyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSTs7Ozs7Ozs7O0FBQUMsQUFTeEIsSUFBTSx3QkFBd0IsR0FBRyxVQUFDLEtBQUssRUFBRSxVQUFVLEVBQUs7QUFDcEQsUUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLFFBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDOztBQUVoQyxRQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUs7O0FBRXZDLFlBQUksQ0FBQyxNQUFNLEVBQUU7QUFBRSxtQkFBTztTQUFFOztBQUV4QixZQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7QUFDaEIsa0JBQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3JEOztBQUVELFlBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxVQUFVLEVBQUU7QUFDL0Isa0JBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3REOztBQUVELFlBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRTtBQUNyRCxvQkFBUSxHQUFHLEtBQUssQ0FBQztTQUNwQixNQUFNO0FBQ0gsZ0JBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtBQUNuQixzQkFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNoRDtBQUNELGlCQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO0tBQ0osQ0FBQyxDQUFDOztBQUVILFdBQU8sUUFBUSxDQUFDO0NBQ25CLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFDLEtBQUssRUFBRSxVQUFVLEVBQUs7QUFDcEMsUUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ2hCLGFBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDOztBQUV2QixZQUFJLHdCQUF3QixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDbkQsZ0JBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTTs7O0FBQUMsQUFHcEMsaUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDL0Isb0JBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUIsb0JBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNmLHdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ3BDO2FBQ0o7O0FBRUQsZ0JBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ2pCLHFCQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDaEI7U0FDSixNQUFNO0FBQ0gsaUJBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLGlCQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUM1QjtLQUNKOztBQUVELFNBQUssQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0NBQ2pDLENBQUMiLCJmaWxlIjoicG9zdC1yZW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuY29uc3QgZWFjaCA9IHV0aWxzLmVhY2g7XG5cbi8qXG4gICAgQ2hlY2sgYWxsIEFjdGlvbnMgZm9yIGBvbkVuZGAsIHJldHVybiB0cnVlIGlmIGFsbCBhcmUgdHJ1ZVxuXG4gICAgQHBhcmFtIFtBY3Rvcl1cbiAgICBAcGFyYW0gW2Jvb2xlYW5dXG4gICAgQHJldHVybnMgW2Jvb2xlYW5dXG4qL1xuY29uc3QgY2hlY2tBbGxBY3Rpb25zSGF2ZUVuZGVkID0gKGFjdG9yLCBoYXNDaGFuZ2VkKSA9PiB7XG4gICAgbGV0IGhhc0VuZGVkID0gdHJ1ZTtcbiAgICBsZXQgdmFsdWVzID0gYWN0b3Iuc3RhdGUudmFsdWVzO1xuXG4gICAgZWFjaChhY3Rvci5hY3RpdmVBY3Rpb25zLCAoa2V5LCBhY3Rpb24pID0+IHtcbiAgICAgICAgLy8gUmV0dXJuIGlmIGFjdGlvbiBoYXMgYmVlbiBkZWxldGVkIGVsc2V3aGVyZVxuICAgICAgICBpZiAoIWFjdGlvbikgeyByZXR1cm47IH1cblxuICAgICAgICBpZiAoYWN0aW9uLm9uRnJhbWUpIHtcbiAgICAgICAgICAgIGFjdGlvbi5vbkZyYW1lLmNhbGwoYWN0b3IsIHZhbHVlcywgYWN0b3IsIGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uLm9uVXBkYXRlICYmIGhhc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIGFjdGlvbi5vblVwZGF0ZS5jYWxsKGFjdG9yLCB2YWx1ZXMsIGFjdG9yLCBhY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFjdGlvbi5oYXNFbmRlZCAmJiBhY3Rpb24uaGFzRW5kZWQoYWN0b3IpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaGFzRW5kZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24ub25Db21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi5vbkNvbXBsZXRlLmNhbGwoYWN0b3IsIGFjdG9yLCBhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0b3IudW5iaW5kQWN0aW9uKGtleSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBoYXNFbmRlZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gKGFjdG9yLCBmcmFtZXN0YW1wKSA9PiB7XG4gICAgaWYgKGFjdG9yLmlzQWN0aXZlKSB7XG4gICAgICAgIGFjdG9yLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGNoZWNrQWxsQWN0aW9uc0hhdmVFbmRlZChhY3RvciwgYWN0b3IuaGFzQ2hhbmdlZCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG51bVJvbGVzID0gYWN0b3Iucm9sZXMubGVuZ3RoO1xuXG4gICAgICAgICAgICAvLyBGaXJlIGBjb21wbGV0ZWAgY2FsbGJhY2tzXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IGFjdG9yLnJvbGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChyb2xlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGUuY29tcGxldGUuY2FsbChhY3RvciwgYWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFhY3Rvci5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGFjdG9yLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdG9yLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGFjdG9yLmZpcnN0RnJhbWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgICAgICAgIFxuICAgIGFjdG9yLmZyYW1lc3RhbXAgPSBmcmFtZXN0YW1wO1xufTsiXX0=
return exports;
})()),

/*
    Role imports
*/
defaultRole = ((function() {
var exports = {};
'use strict';

var Role = __small$_26;

exports = new Role({
    init: function (actor) {
        if (actor.init) {
            actor.init(actor);
        }
    },

    start: function (actor) {
        if (actor.onStart) {
            actor.onStart(actor);
        }
    },

    frame: function (state, actor) {
        if (actor.onFrame) {
            actor.onFrame(state, actor);
        }
    },

    update: function (state, actor) {
        if (actor.onUpdate) {
            actor.onUpdate(state, actor);
        }
    },

    complete: function (actor) {
        if (actor.onComplete) {
            actor.onComplete(actor);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb2xlcy9kZWZhdWx0Um9sZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFN0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQztBQUN0QixRQUFJLEVBQUUsVUFBVSxLQUFLLEVBQUU7QUFDbkIsWUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQ1osaUJBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckI7S0FDSjs7QUFFRCxTQUFLLEVBQUUsVUFBVSxLQUFLLEVBQUU7QUFDcEIsWUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO0FBQ2YsaUJBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEI7S0FDSjs7QUFFRCxTQUFLLEVBQUUsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQzNCLFlBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtBQUNmLGlCQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMvQjtLQUNKOztBQUVELFVBQU0sRUFBRSxVQUFVLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDNUIsWUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ2hCLGlCQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNoQztLQUNKOztBQUVELFlBQVEsRUFBRSxVQUFVLEtBQUssRUFBRTtBQUN2QixZQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7QUFDbEIsaUJBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7S0FDSjtDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJkZWZhdWx0Um9sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSb2xlID0gcmVxdWlyZSgnLi9Sb2xlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFJvbGUoe1xuICAgIGluaXQ6IGZ1bmN0aW9uIChhY3Rvcikge1xuICAgICAgICBpZiAoYWN0b3IuaW5pdCkge1xuICAgICAgICAgICAgYWN0b3IuaW5pdChhY3Rvcik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChhY3Rvcikge1xuICAgICAgICBpZiAoYWN0b3Iub25TdGFydCkge1xuICAgICAgICAgICAgYWN0b3Iub25TdGFydChhY3Rvcik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZnJhbWU6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0b3IpIHtcbiAgICAgICAgaWYgKGFjdG9yLm9uRnJhbWUpIHtcbiAgICAgICAgICAgIGFjdG9yLm9uRnJhbWUoc3RhdGUsIGFjdG9yKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0b3IpIHtcbiAgICAgICAgaWYgKGFjdG9yLm9uVXBkYXRlKSB7XG4gICAgICAgICAgICBhY3Rvci5vblVwZGF0ZShzdGF0ZSwgYWN0b3IpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICAgICAgaWYgKGFjdG9yLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIGFjdG9yLm9uQ29tcGxldGUoYWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxufSk7Il19
return exports;
})()),
    cssRole = __small$_16,
    svgRole = __small$_17,
    drawPathRole = __small$_18,
    Action = __small$_27,
    each = utils.each;

var Actor = (function () {

    /*
        @param [object]
    */

    function Actor() {
        var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Actor);

        var props = utils.isString(opts) ? { element: opts } : opts;

        this.values = {};
        this.state = { values: {} };
        this.queue = new Queue();
        this.process = new Process({ update: update, render: render, postRender: postRender }, this);
        this.activeActions = {};
        this.numActive = 0;
        this.actionCounter = 0;
        this.activeValues = [];
        this.activeParents = [];
        this.isActive = false;

        // Get actual elements if this is a selector
        if (utils.isString(props.element)) {
            props.element = select(props.element)[0];
        }

        this.assignRoles(props.element, props.as, true);
        this.set(props);
        this.initRoles();
        this.sync();
    }

    /*
        Set Actor properties and values
         @param [object]
        @returns [Actor]
    */

    Actor.prototype.set = function set(opts) {
        var _this = this;

        each(opts, function (key, value) {
            if (key !== 'values' && key !== 'action') {
                _this[key] = value;
            }
        });

        if (opts && opts.values) {
            this.values = valueOps.process(this.values, opts.values, opts, 'current', this);
        }

        // Check all active actions for any that can be removed
        each(this.activeActions, function (id, action) {
            var actionIsActive = false;

            each(_this.values, function (key, value) {
                actionIsActive = value.action === action ? true : actionIsActive;
            });

            if (!actionIsActive) {
                _this.unbindAction(id);
            }
        });

        return this;
    };

    /*
        Bind Action-specific controls to Actor
         @returns [Controls]
    */

    Actor.prototype.controls = function controls(action) {
        var Controls = action.getControls();
        return new Controls(this, action.getPlayable());
    };

    /*
        Start a new Action
         @param [Action || number]
        @param [Input || event] (optional)
        @param [boolean] (optional): defined `true` if we surpress making new queue
        @returns [Controls]
    */

    Actor.prototype.start = function start(toSet, input) {
        var actionExists = utils.isNum(toSet);
        var action = actionExists ? this.getAction(toSet) : toSet.getPlayable();
        var opts = action.getSet();
        var surpressQueueClear = arguments[arguments.length - 1] === false;

        opts.action = action;

        this.set(opts);

        if (input) {
            action.bindInput(input);
        }

        if (!surpressQueueClear) {
            this.queue.clear();
        }

        // Fire all Role onStarts if not already active
        if (!this.isActive) {
            var numRoles = this.roles.length;
            for (var i = 0; i < numRoles; i++) {
                var role = this.roles[i];
                if (role.start) {
                    role.start.call(this, this);
                }
            }
        }

        // Fire new action onStart
        if (!action.isActive && action.onStart) {
            action.onStart(this, action);
        }

        this.activate();

        if (!actionExists) {
            var Controls = action.getControls();
            return new Controls(this, action, true);
        }
    };

    /*
        Pause all active Actions
         @param [int] (optional)
        @returns [Actor]
    */

    Actor.prototype.pause = function pause() {
        this.isActive = false;
        each(this.activeActions, function (id, action) {
            return action.deactivate();
        });
        this.process.stop();
        return this;
    };

    /*
        Resume all active Actions
         @param [int] (optional)
        @returns [Actor];
    */

    Actor.prototype.resume = function resume() {
        this.isActive = true;
        each(this.activeActions, function (id, action) {
            return action.activate();
        });
        this.process.start();
        return this;
    };

    /*
        Stop all active Actions
         @param [int] (optional)
        @returns [Actor]
    */

    Actor.prototype.stop = function stop() {
        var _this2 = this;

        this.pause();
        each(this.activeActions, function (id) {
            return _this2.unbindAction(id);
        });
        return this;
    };

    /*
        Toggle all active Actions
         @param [int] (optional)
        @returns [Actor]
    */

    Actor.prototype.toggle = function toggle() {
        return this.isActive ? this.pause() : this.resume();
    };

    /*
        Syncs `element` with current properties
         @returns [Actor]
    */

    Actor.prototype.sync = function sync() {
        var currentValues = {};

        utils.each(this.values, function (key, value) {
            currentValues[key] = value.current;
        });

        this.start(new Action({ values: currentValues }));
        return this;
    };

    /*
        Add a new Action to the queue
    */

    Actor.prototype.then = function then() {
        this.queue.add.apply(this.queue, arguments);
        return this;
    };

    /*
        Execute next in queue
    */

    Actor.prototype.next = function next() {
        var next = this.queue.next();

        if (next) {
            if (utils.isFunc(next[0])) {
                next[0]();
                this.next();
                // Or this is an action
            } else {
                    next.push(false);
                    this.start.apply(this, next);
                }
        } else {
            this.stop();
        }

        return this;
    };

    /*
        Assign Roles based on element and manually provided props
         @param [object]: Element
        @param [Role || array]
        @param [boolean] (optional)
    */

    Actor.prototype.assignRoles = function assignRoles(element, manualRoles, surpressInit) {
        // All Actors get a default Role that handles user callbacks
        this.roles = [defaultRole];

        // Auto-assign if no manually-set Roles
        if (!manualRoles && element) {
            this.autoAssignRoles(element);

            // Or manually set if provided
        } else if (manualRoles) {
                if (utils.isArray(manualRoles)) {
                    this.roles.push.apply(this.roles, manualRoles);
                } else {
                    this.roles.push(manualRoles);
                }
            }

        if (!surpressInit) {
            this.initRoles();
        }
    };

    /*
        Automatically assign Roles based on element, designed
        to be extended
         @param [object]: Element
    */

    Actor.prototype.autoAssignRoles = function autoAssignRoles(element) {
        // Add CSS role if HTMLElement
        if (element instanceof HTMLElement || element.tagName === 'svg') {
            this.roles.push(cssRole);

            // Add SVG role if SVG element
        } else if (element instanceof SVGElement) {
                this.roles.push(svgRole);

                // Add Draw Path role if path element
                if (element.tagName === 'path') {
                    this.roles.push(drawPathRole);
                }
            }
    };

    /*
        Fire init callbacks
    */

    Actor.prototype.initRoles = function initRoles() {
        var _this3 = this;

        // Fire init callback
        this.roles.forEach(function (role) {
            if (role.init) {
                role.init.call(_this3, _this3);
            }
        });
    };

    Actor.prototype.activate = function activate() {
        if (!this.isActive) {
            this.isActive = true;
            this.firstFrame = true;
            this.process.start();
        }
    };

    /*
        Bind Action and return its table id
         @param [Action]
        @returns [int]
    */

    Actor.prototype.bindAction = function bindAction(action, id) {
        if (id === undefined) {
            id = this.actionCounter++;
        }

        if (!this.hasAction(id)) {
            this.activeActions[id] = action;
            this.numActive++;
        }

        return id;
    };

    Actor.prototype.unbindAction = function unbindAction(id) {
        if (this.activeActions.hasOwnProperty(id)) {
            var action = this.activeActions[id];
            if (action.input && action.input.autoStop === true) {
                action.input.stop();
            }
            action.deactivate();
            this.numActive--;
            delete this.activeActions[id];
        }

        if (!this.numActive) {
            this.pause();
        }
    };

    Actor.prototype.getAction = function getAction(id) {
        return this.activeActions[id];
    };

    Actor.prototype.hasAction = function hasAction(id) {
        return this.getAction(id) !== undefined;
    };

    /*
        Update processing order
        
        @param [string]
        @param [boolean]
        @param [boolean]
    */

    Actor.prototype.updateOrder = function updateOrder(key, moveToBack, hasChildren) {
        var order = !hasChildren ? this.activeValues : this.activeParents,
            position = order.indexOf(key);

        // If key isn't list or moveToBack is set to true, add key
        if (position === -1 || moveToBack) {
            order.push(key);

            // If key already exists, remove
            if (position > -1) {
                order.splice(position, 1);
            }
        }
    };

    // [boolean]: Is this Actor active?

    _createClass(Actor, [{
        key: 'isActive',
        get: function () {
            return this._isActive;
        }

        // Set hasChanged to true is this is now active
        ,
        set: function (status) {
            if (status === true) {
                this.hasChanged = status;
            }

            this._isActive = status;
        }
    }]);

    return Actor;
})();

exports = Actor;
//# sourceMappingURL=data:application/json;base64,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QUFDO1NBQzNCOzs7V0E3V0MsS0FBSzs7O0FBZ1hYLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIiwiZmlsZSI6IkFjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByb2Nlc3MgPSByZXF1aXJlKCcuLi9wcm9jZXNzL1Byb2Nlc3MnKSxcbiAgICBRdWV1ZSA9IHJlcXVpcmUoJy4uL2luYy9RdWV1ZScpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgc2VsZWN0ID0gcmVxdWlyZSgnLi4vaW5jL3NlbGVjdC1kb20nKSxcbiAgICB2YWx1ZU9wcyA9IHJlcXVpcmUoJy4vdmFsdWUtb3BlcmF0aW9ucycpLFxuXG4gICAgLypcbiAgICAgICAgUHJvY2VzcyBtZXRob2RzXG4gICAgKi9cbiAgICB1cGRhdGUgPSByZXF1aXJlKCcuL3VwZGF0ZScpLFxuICAgIHJlbmRlciA9IHJlcXVpcmUoJy4vcmVuZGVyJyksXG4gICAgcG9zdFJlbmRlciA9IHJlcXVpcmUoJy4vcG9zdC1yZW5kZXInKSxcblxuICAgIC8qXG4gICAgICAgIFJvbGUgaW1wb3J0c1xuICAgICovXG4gICAgZGVmYXVsdFJvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9kZWZhdWx0Um9sZScpLFxuICAgIGNzc1JvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9jc3MvY3NzUm9sZScpLFxuICAgIHN2Z1JvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9zdmcvc3ZnUm9sZScpLFxuICAgIGRyYXdQYXRoUm9sZSA9IHJlcXVpcmUoJy4uL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlJyksXG5cbiAgICBBY3Rpb24gPSByZXF1aXJlKCcuLi9hY3Rpb25zL0FjdGlvbicpLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoO1xuXG5jbGFzcyBBY3RvciB7XG5cbiAgICAvKlxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgICAgICBsZXQgcHJvcHMgPSB1dGlscy5pc1N0cmluZyhvcHRzKSA/IHsgZWxlbWVudDogb3B0cyB9IDogb3B0cztcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlID0geyB2YWx1ZXM6IHt9IH07XG4gICAgICAgIHRoaXMucXVldWUgPSBuZXcgUXVldWUoKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzID0gbmV3IFByb2Nlc3MoeyB1cGRhdGUsIHJlbmRlciwgcG9zdFJlbmRlciB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMubnVtQWN0aXZlID0gMDtcbiAgICAgICAgdGhpcy5hY3Rpb25Db3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5hY3RpdmVWYWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVQYXJlbnRzID0gW107XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyBHZXQgYWN0dWFsIGVsZW1lbnRzIGlmIHRoaXMgaXMgYSBzZWxlY3RvclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocHJvcHMuZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHByb3BzLmVsZW1lbnQgPSBzZWxlY3QocHJvcHMuZWxlbWVudClbMF07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFzc2lnblJvbGVzKHByb3BzLmVsZW1lbnQsIHByb3BzLmFzLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuICAgICAgICB0aGlzLmluaXRSb2xlcygpO1xuICAgICAgICB0aGlzLnN5bmMoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTZXQgQWN0b3IgcHJvcGVydGllcyBhbmQgdmFsdWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHNldChvcHRzKSB7XG4gICAgICAgIGVhY2gob3B0cywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgIT09ICd2YWx1ZXMnICYmIGtleSAhPT0gJ2FjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG9wdHMgJiYgb3B0cy52YWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVPcHMucHJvY2Vzcyh0aGlzLnZhbHVlcywgb3B0cy52YWx1ZXMsIG9wdHMsICdjdXJyZW50JywgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBhbGwgYWN0aXZlIGFjdGlvbnMgZm9yIGFueSB0aGF0IGNhbiBiZSByZW1vdmVkXG4gICAgICAgIGVhY2godGhpcy5hY3RpdmVBY3Rpb25zLCAoaWQsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgbGV0IGFjdGlvbklzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGVhY2godGhpcy52YWx1ZXMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uSXNBY3RpdmUgPSAodmFsdWUuYWN0aW9uID09PSBhY3Rpb24pID8gdHJ1ZSA6IGFjdGlvbklzQWN0aXZlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghYWN0aW9uSXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuYmluZEFjdGlvbihpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEJpbmQgQWN0aW9uLXNwZWNpZmljIGNvbnRyb2xzIHRvIEFjdG9yXG5cbiAgICAgICAgQHJldHVybnMgW0NvbnRyb2xzXVxuICAgICovXG4gICAgY29udHJvbHMoYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IENvbnRyb2xzID0gYWN0aW9uLmdldENvbnRyb2xzKCk7XG4gICAgICAgIHJldHVybiBuZXcgQ29udHJvbHModGhpcywgYWN0aW9uLmdldFBsYXlhYmxlKCkpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN0YXJ0IGEgbmV3IEFjdGlvblxuXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uIHx8IG51bWJlcl1cbiAgICAgICAgQHBhcmFtIFtJbnB1dCB8fCBldmVudF0gKG9wdGlvbmFsKVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dIChvcHRpb25hbCk6IGRlZmluZWQgYHRydWVgIGlmIHdlIHN1cnByZXNzIG1ha2luZyBuZXcgcXVldWVcbiAgICAgICAgQHJldHVybnMgW0NvbnRyb2xzXVxuICAgICovXG4gICAgc3RhcnQodG9TZXQsIGlucHV0KSB7XG4gICAgICAgIGxldCBhY3Rpb25FeGlzdHMgPSB1dGlscy5pc051bSh0b1NldCk7XG4gICAgICAgIGxldCBhY3Rpb24gPSAoYWN0aW9uRXhpc3RzKSA/IHRoaXMuZ2V0QWN0aW9uKHRvU2V0KSA6IHRvU2V0LmdldFBsYXlhYmxlKCk7XG4gICAgICAgIGxldCBvcHRzID0gYWN0aW9uLmdldFNldCgpO1xuICAgICAgICBsZXQgc3VycHJlc3NRdWV1ZUNsZWFyID0gKGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0gPT09IGZhbHNlKTtcblxuICAgICAgICBvcHRzLmFjdGlvbiA9IGFjdGlvbjtcblxuICAgICAgICB0aGlzLnNldChvcHRzKTtcblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIGFjdGlvbi5iaW5kSW5wdXQoaW5wdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdXJwcmVzc1F1ZXVlQ2xlYXIpIHtcbiAgICAgICAgICAgIHRoaXMucXVldWUuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgYWxsIFJvbGUgb25TdGFydHMgaWYgbm90IGFscmVhZHkgYWN0aXZlXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgbGV0IG51bVJvbGVzID0gdGhpcy5yb2xlcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IHRoaXMucm9sZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHJvbGUuc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZS5zdGFydC5jYWxsKHRoaXMsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgbmV3IGFjdGlvbiBvblN0YXJ0XG4gICAgICAgIGlmICghYWN0aW9uLmlzQWN0aXZlICYmIGFjdGlvbi5vblN0YXJ0KSB7XG4gICAgICAgICAgICBhY3Rpb24ub25TdGFydCh0aGlzLCBhY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuXG4gICAgICAgIGlmICghYWN0aW9uRXhpc3RzKSB7XG4gICAgICAgICAgICBsZXQgQ29udHJvbHMgPSBhY3Rpb24uZ2V0Q29udHJvbHMoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29udHJvbHModGhpcywgYWN0aW9uLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFBhdXNlIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGVhY2godGhpcy5hY3RpdmVBY3Rpb25zLCAoaWQsIGFjdGlvbikgPT4gYWN0aW9uLmRlYWN0aXZhdGUoKSk7XG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJlc3VtZSBhbGwgYWN0aXZlIEFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdO1xuICAgICovXG4gICAgcmVzdW1lKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZWFjaCh0aGlzLmFjdGl2ZUFjdGlvbnMsIChpZCwgYWN0aW9uKSA9PiBhY3Rpb24uYWN0aXZhdGUoKSk7XG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdG9wIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgZWFjaCh0aGlzLmFjdGl2ZUFjdGlvbnMsIChpZCkgPT4gdGhpcy51bmJpbmRBY3Rpb24oaWQpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVG9nZ2xlIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiB0aGlzLnJlc3VtZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN5bmNzIGBlbGVtZW50YCB3aXRoIGN1cnJlbnQgcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHN5bmMoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXMgPSB7fTtcblxuICAgICAgICB1dGlscy5lYWNoKHRoaXMudmFsdWVzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFZhbHVlc1trZXldID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGFydChuZXcgQWN0aW9uKHsgdmFsdWVzOiBjdXJyZW50VmFsdWVzIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQWRkIGEgbmV3IEFjdGlvbiB0byB0aGUgcXVldWVcbiAgICAqL1xuICAgIHRoZW4oKSB7XG4gICAgICAgIHRoaXMucXVldWUuYWRkLmFwcGx5KHRoaXMucXVldWUsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEV4ZWN1dGUgbmV4dCBpbiBxdWV1ZVxuICAgICovXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdmFyIG5leHQgPSB0aGlzLnF1ZXVlLm5leHQoKTtcblxuICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuYyhuZXh0WzBdKSkge1xuICAgICAgICAgICAgICAgIG5leHRbMF0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIC8vIE9yIHRoaXMgaXMgYW4gYWN0aW9uXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5leHQucHVzaChmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydC5hcHBseSh0aGlzLCBuZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQXNzaWduIFJvbGVzIGJhc2VkIG9uIGVsZW1lbnQgYW5kIG1hbnVhbGx5IHByb3ZpZGVkIHByb3BzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBFbGVtZW50XG4gICAgICAgIEBwYXJhbSBbUm9sZSB8fCBhcnJheV1cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXSAob3B0aW9uYWwpXG4gICAgKi9cbiAgICBhc3NpZ25Sb2xlcyhlbGVtZW50LCBtYW51YWxSb2xlcywgc3VycHJlc3NJbml0KSB7XG4gICAgICAgIC8vIEFsbCBBY3RvcnMgZ2V0IGEgZGVmYXVsdCBSb2xlIHRoYXQgaGFuZGxlcyB1c2VyIGNhbGxiYWNrc1xuICAgICAgICB0aGlzLnJvbGVzID0gWyBkZWZhdWx0Um9sZSBdO1xuXG4gICAgICAgIC8vIEF1dG8tYXNzaWduIGlmIG5vIG1hbnVhbGx5LXNldCBSb2xlc1xuICAgICAgICBpZiAoIW1hbnVhbFJvbGVzICYmIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b0Fzc2lnblJvbGVzKGVsZW1lbnQpO1xuXG4gICAgICAgIC8vIE9yIG1hbnVhbGx5IHNldCBpZiBwcm92aWRlZFxuICAgICAgICB9IGVsc2UgaWYgKG1hbnVhbFJvbGVzKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNBcnJheShtYW51YWxSb2xlcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2guYXBwbHkodGhpcy5yb2xlcywgbWFudWFsUm9sZXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2gobWFudWFsUm9sZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdXJwcmVzc0luaXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJvbGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBdXRvbWF0aWNhbGx5IGFzc2lnbiBSb2xlcyBiYXNlZCBvbiBlbGVtZW50LCBkZXNpZ25lZFxuICAgICAgICB0byBiZSBleHRlbmRlZFxuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogRWxlbWVudFxuICAgICovXG4gICAgYXV0b0Fzc2lnblJvbGVzKGVsZW1lbnQpIHtcbiAgICAgICAgLy8gQWRkIENTUyByb2xlIGlmIEhUTUxFbGVtZW50XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoKGNzc1JvbGUpO1xuXG4gICAgICAgIC8vIEFkZCBTVkcgcm9sZSBpZiBTVkcgZWxlbWVudFxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2goc3ZnUm9sZSk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBEcmF3IFBhdGggcm9sZSBpZiBwYXRoIGVsZW1lbnRcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaChkcmF3UGF0aFJvbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgRmlyZSBpbml0IGNhbGxiYWNrc1xuICAgICovXG4gICAgaW5pdFJvbGVzKCkge1xuICAgICAgICAvLyBGaXJlIGluaXQgY2FsbGJhY2tcbiAgICAgICAgdGhpcy5yb2xlcy5mb3JFYWNoKChyb2xlKSA9PiB7XG4gICAgICAgICAgICBpZiAocm9sZS5pbml0KSB7XG4gICAgICAgICAgICAgICAgcm9sZS5pbml0LmNhbGwodGhpcywgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maXJzdEZyYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzcy5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gYW5kIHJldHVybiBpdHMgdGFibGUgaWRcblxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHJldHVybnMgW2ludF1cbiAgICAqL1xuICAgIGJpbmRBY3Rpb24oYWN0aW9uLCBpZCkge1xuICAgICAgICBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWQgPSB0aGlzLmFjdGlvbkNvdW50ZXIrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5oYXNBY3Rpb24oaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gYWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5udW1BY3RpdmUrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICB1bmJpbmRBY3Rpb24oaWQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5pbnB1dCAmJiBhY3Rpb24uaW5wdXQuYXV0b1N0b3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24uaW5wdXQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aW9uLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIHRoaXMubnVtQWN0aXZlLS07XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5udW1BY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFjdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICB9XG5cbiAgICBoYXNBY3Rpb24oaWQpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldEFjdGlvbihpZCkgIT09IHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIHByb2Nlc3Npbmcgb3JkZXJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl1cbiAgICAqL1xuICAgIHVwZGF0ZU9yZGVyKGtleSwgbW92ZVRvQmFjaywgaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIG9yZGVyID0gKCFoYXNDaGlsZHJlbikgPyB0aGlzLmFjdGl2ZVZhbHVlcyA6IHRoaXMuYWN0aXZlUGFyZW50cyxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gb3JkZXIuaW5kZXhPZihrZXkpO1xuXG4gICAgICAgIC8vIElmIGtleSBpc24ndCBsaXN0IG9yIG1vdmVUb0JhY2sgaXMgc2V0IHRvIHRydWUsIGFkZCBrZXlcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAtMSB8fCBtb3ZlVG9CYWNrKSB7XG4gICAgICAgICAgICBvcmRlci5wdXNoKGtleSk7XG5cbiAgICAgICAgICAgIC8vIElmIGtleSBhbHJlYWR5IGV4aXN0cywgcmVtb3ZlXG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPiAtMSkge1xuICAgICAgICAgICAgICAgIG9yZGVyLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBbYm9vbGVhbl06IElzIHRoaXMgQWN0b3IgYWN0aXZlP1xuICAgIGdldCBpc0FjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICAgIH1cblxuICAgIC8vIFNldCBoYXNDaGFuZ2VkIHRvIHRydWUgaXMgdGhpcyBpcyBub3cgYWN0aXZlXG4gICAgc2V0IGlzQWN0aXZlKHN0YXR1cykge1xuICAgICAgICBpZiAoc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBzdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc0FjdGl2ZSA9IHN0YXR1cztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQWN0b3I7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ==
return exports;
})();
var __small$_23 = (function() {
var exports = {};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = __small$_20;
var Tween = __small$_28;
var utils = __small$_35;

var DEFAULT_STAGGER_EASE = 'linear';

function generateCallback(method) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    var callback = method;

    if (utils.isString(method)) {
        callback = function (member) {
            return member[method].apply(member, args);
        };
    } else if (!utils.isFunc(method)) {
        callback = function (member) {
            member.start.apply(member, [method].concat(args));
        };
    }

    return callback;
}

var Iterator = (function () {
    function Iterator(members) {
        _classCallCheck(this, Iterator);

        this.clear();

        if (members) {
            this.add(members);
        }

        this._stagger = new Actor();
    }

    Iterator.prototype.add = function add(members) {
        this.members = this.members.concat(members);
        return this;
    };

    Iterator.prototype.clear = function clear() {
        this.members = [];
        return this;
    };

    Iterator.prototype.each = function each(method) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
        }

        var callback = generateCallback.apply(undefined, [method].concat(args));
        this.members.forEach(callback);
        return this;
    };

    Iterator.prototype.eachIntoNew = function eachIntoNew(method) {
        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
        }

        var callback = generateCallback.apply(undefined, [method].concat(args));
        var newIterator = new Iterator();

        this.members.forEach(function (member) {
            return newIterator.add(callback(member));
        });

        return newIterator;
    };

    Iterator.prototype.stagger = function stagger(method, props) {
        var tempMembers = utils.copyArray(this.members);
        var numMembers = tempMembers.length;
        var propsIsInterval = utils.isNum(props);
        var interval = propsIsInterval ? props : props.interval || 100;

        for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
            args[_key4 - 2] = arguments[_key4];
        }

        var callback = generateCallback.apply(undefined, [method].concat(args));

        var i = -1;
        var staggerProps = {};

        staggerProps.values = {
            i: {
                current: -0.6,
                duration: interval * numMembers,
                ease: propsIsInterval ? DEFAULT_STAGGER_EASE : props.ease || DEFAULT_STAGGER_EASE,
                round: true,
                to: numMembers - 0.6
            }
        };

        staggerProps.onComplete = propsIsInterval ? undefined : props.onComplete;

        staggerProps.onUpdate = function (output) {
            var newIndex = output.i;
            var gapIndex = i + 1;

            // If our new index is only one more than the previous index, fire immedietly
            if (newIndex === i + 1) {
                callback(tempMembers[gapIndex], gapIndex);

                // Or loop through the distance to fire all indecies. Increase delay.
            } else {
                    for (; gapIndex <= newIndex; gapIndex++) {
                        callback(tempMembers[gapIndex], gapIndex);
                    }
                }

            i = newIndex;
        };

        this._stagger.start(new Tween(staggerProps));

        return this;
    };

    /*
        Array manipulation
    */

    Iterator.prototype.reverse = function reverse() {
        this.members.reverse();
        return this;
    };

    return Iterator;
})();

exports = Iterator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVyYXRvci9JdGVyYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDeEMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDMUMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztBQUV0QyxJQUFNLG9CQUFvQixHQUFHLFFBQVEsQ0FBQzs7QUFFdEMsU0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQVc7c0NBQU4sSUFBSTtBQUFKLFlBQUk7OztBQUNyQyxRQUFJLFFBQVEsR0FBRyxNQUFNLENBQUM7O0FBRXRCLFFBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUN4QixnQkFBUSxHQUFHLFVBQUMsTUFBTTttQkFBSyxNQUFNLENBQUMsTUFBTSxPQUFDLENBQWQsTUFBTSxFQUFZLElBQUksQ0FBQztTQUFBLENBQUM7S0FDbEQsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUM5QixnQkFBUSxHQUFHLFVBQUMsTUFBTSxFQUFLO0FBQ25CLGtCQUFNLENBQUMsS0FBSyxNQUFBLENBQVosTUFBTSxHQUFPLE1BQU0sU0FBSyxJQUFJLEVBQUMsQ0FBQztTQUNqQyxDQUFBO0tBQ0o7O0FBRUQsV0FBTyxRQUFRLENBQUM7Q0FDbkI7O0lBRUssUUFBUTtBQUNWLGFBREUsUUFBUSxDQUNFLE9BQU8sRUFBRTs4QkFEbkIsUUFBUTs7QUFFTixZQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7O0FBRWIsWUFBSSxPQUFPLEVBQUU7QUFDVCxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjs7QUFFRCxZQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7S0FDL0I7O0FBVEMsWUFBUSxXQVdW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QkFDSjs7QUFFRCxhQUFDLEdBQUcsUUFBUSxDQUFDO1NBQ2hCLENBQUM7O0FBRUYsWUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs7QUFFN0MsZUFBTyxJQUFJLENBQUM7S0FDZjs7Ozs7O0FBL0VDLFlBQVEsV0FvRlYsT0FBTyxzQkFBRztBQUNOLFlBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdkIsZUFBTyxJQUFJLENBQUM7S0FDZjs7V0F2RkMsUUFBUTs7O0FBMEZkLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDIiwiZmlsZSI6Ikl0ZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQWN0b3IgPSByZXF1aXJlKCcuLi9hY3Rvci9BY3RvcicpO1xuY29uc3QgVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5jb25zdCBERUZBVUxUX1NUQUdHRVJfRUFTRSA9ICdsaW5lYXInO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUNhbGxiYWNrKG1ldGhvZCwgLi4uYXJncykge1xuICAgIGxldCBjYWxsYmFjayA9IG1ldGhvZDtcblxuICAgIGlmICh1dGlscy5pc1N0cmluZyhtZXRob2QpKSB7XG4gICAgICAgIGNhbGxiYWNrID0gKG1lbWJlcikgPT4gbWVtYmVyW21ldGhvZF0oLi4uYXJncyk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNGdW5jKG1ldGhvZCkpIHtcbiAgICAgICAgY2FsbGJhY2sgPSAobWVtYmVyKSA9PiB7XG4gICAgICAgICAgICBtZW1iZXIuc3RhcnQobWV0aG9kLCAuLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYWxsYmFjaztcbn1cblxuY2xhc3MgSXRlcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lbWJlcnMpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIGlmIChtZW1iZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChtZW1iZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YWdnZXIgPSBuZXcgQWN0b3IoKTtcbiAgICB9XG5cbiAgICBhZGQobWVtYmVycykge1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSB0aGlzLm1lbWJlcnMuY29uY2F0KG1lbWJlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGVhY2gobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZ2VuZXJhdGVDYWxsYmFjayhtZXRob2QsIC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLm1lbWJlcnMuZm9yRWFjaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGVhY2hJbnRvTmV3KG1ldGhvZCwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKTtcbiAgICAgICAgY29uc3QgbmV3SXRlcmF0b3IgPSBuZXcgSXRlcmF0b3IoKTtcblxuICAgICAgICB0aGlzLm1lbWJlcnMuZm9yRWFjaCgobWVtYmVyKSA9PiBuZXdJdGVyYXRvci5hZGQoY2FsbGJhY2sobWVtYmVyKSkpO1xuXG4gICAgICAgIHJldHVybiBuZXdJdGVyYXRvcjtcbiAgICB9XG5cbiAgICBzdGFnZ2VyKG1ldGhvZCwgcHJvcHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgdGVtcE1lbWJlcnMgPSB1dGlscy5jb3B5QXJyYXkodGhpcy5tZW1iZXJzKTtcbiAgICAgICAgY29uc3QgbnVtTWVtYmVycyA9IHRlbXBNZW1iZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcHJvcHNJc0ludGVydmFsID0gdXRpbHMuaXNOdW0ocHJvcHMpO1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHByb3BzSXNJbnRlcnZhbCA/IHByb3BzIDogcHJvcHMuaW50ZXJ2YWwgfHwgMTAwO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKTtcblxuICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICBsZXQgc3RhZ2dlclByb3BzID0ge307XG5cbiAgICAgICAgc3RhZ2dlclByb3BzLnZhbHVlcyA9IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiAtMC42LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIG51bU1lbWJlcnMsXG4gICAgICAgICAgICAgICAgZWFzZTogcHJvcHNJc0ludGVydmFsID8gREVGQVVMVF9TVEFHR0VSX0VBU0UgOiBwcm9wcy5lYXNlIHx8IERFRkFVTFRfU1RBR0dFUl9FQVNFLFxuICAgICAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvOiBudW1NZW1iZXJzIC0gMC42XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc3RhZ2dlclByb3BzLm9uQ29tcGxldGUgPSBwcm9wc0lzSW50ZXJ2YWwgPyB1bmRlZmluZWQgOiBwcm9wcy5vbkNvbXBsZXRlO1xuXG4gICAgICAgIHN0YWdnZXJQcm9wcy5vblVwZGF0ZSA9IChvdXRwdXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gb3V0cHV0Lmk7XG4gICAgICAgICAgICBsZXQgZ2FwSW5kZXggPSBpICsgMTtcblxuICAgICAgICAgICAgLy8gSWYgb3VyIG5ldyBpbmRleCBpcyBvbmx5IG9uZSBtb3JlIHRoYW4gdGhlIHByZXZpb3VzIGluZGV4LCBmaXJlIGltbWVkaWV0bHlcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA9PT0gaSArIDEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0ZW1wTWVtYmVyc1tnYXBJbmRleF0sIGdhcEluZGV4KTtcblxuICAgICAgICAgICAgLy8gT3IgbG9vcCB0aHJvdWdoIHRoZSBkaXN0YW5jZSB0byBmaXJlIGFsbCBpbmRlY2llcy4gSW5jcmVhc2UgZGVsYXkuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoOyBnYXBJbmRleCA8PSBuZXdJbmRleDsgZ2FwSW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0ZW1wTWVtYmVyc1tnYXBJbmRleF0sIGdhcEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGkgPSBuZXdJbmRleDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9zdGFnZ2VyLnN0YXJ0KG5ldyBUd2VlbihzdGFnZ2VyUHJvcHMpKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBcnJheSBtYW5pcHVsYXRpb25cbiAgICAqL1xuICAgIHJldmVyc2UoKSB7XG4gICAgICAgIHRoaXMubWVtYmVycy5yZXZlcnNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJdGVyYXRvcjsiXX0=
return exports;
})();
'use strict';

var valueTypes = __small$_19,
    Popmotion = {

    Actor: __small$_20,

    Sequence: ((function() {
var exports = {};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Actor = __small$_20;
var Tween = __small$_28;
var utils = __small$_35;
var calcRelative = __small$_34.relativeValue;

var timeline = new Tween({
    ease: 'linear',
    values: {
        playhead: 0
    }
});

var checkActions = function (_ref, sequence) {
    var playhead = _ref.playhead;

    var i = sequence.check.length;

    while (i--) {
        var toCheck = sequence.check[i];

        if (playhead >= toCheck.timestamp) {
            toCheck.callback();
            sequence.check.splice(i, 1);
        }
    }
};

var generateCallback = function (actor, action) {
    var callback = undefined;

    if (actor.each) {
        callback = function () {
            actor.each(action);
        };
    } else {
        callback = function () {
            actor.start(action);
        };
    }

    return callback;
};

var Sequence = (function (_Actor) {
    _inherits(Sequence, _Actor);

    function Sequence() {
        _classCallCheck(this, Sequence);

        return _possibleConstructorReturn(this, _Actor.call(this, {
            check: [],
            sequence: [],
            duration: 0,
            currentTimestamp: 0,
            prevActionEnd: 0,
            onUpdate: checkActions
        }));
    }

    Sequence.prototype.do = function _do(actor, action) {
        var isCallback = utils.isFunc(actor);

        this.sequence.push({
            timestamp: this.currentTimestamp,
            callback: isCallback ? actor : generateCallback(actor, action)
        });

        if (action && action.duration) {
            this.prevActionEnd = this.currentTimestamp + action.duration;
        }

        return this;
    };

    Sequence.prototype.stagger = function stagger(iterator, action, staggerProps) {
        var numItems = iterator.members.length;
        var interval = utils.isNum(staggerProps) ? staggerProps : staggerProps.interval || 100;
        var duration = action.duration ? action.duration : 0;

        this.do(iterator, function () {
            iterator.stagger(action, staggerProps);
        });

        this.prevActionEnd = this.currentTimestamp + duration + interval * numItems;

        return this;
    };

    Sequence.prototype.at = function at(timestamp) {
        if (utils.isString(timestamp)) {
            timestamp = calcRelative(this.currentTimestamp, timestamp);
        }

        this.currentTimestamp = timestamp;
        this.duration = Math.max(this.currentTimestamp, this.duration);
        return this;
    };

    Sequence.prototype.then = function then() {
        var offset = arguments.length <= 0 || arguments[0] === undefined ? "+=0" : arguments[0];

        this.at(calcRelative(this.prevActionEnd, offset));
        return this;
    };

    Sequence.prototype.start = function start() {
        _Actor.prototype.start.call(this, timeline.extend({
            duration: this.duration,
            values: {
                playhead: {
                    current: 0,
                    to: this.duration
                }
            }
        }));

        return this;
    };

    Sequence.prototype.onStart = function onStart() {
        this.check = this.sequence.slice();
    };

    Sequence.prototype.clear = function clear() {
        this.sequence = [];
        this.duration = this.currentTimestamp = this.prevActionEnd = 0;
        return this;
    };

    return Sequence;
})(Actor);

exports = Sequence;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXF1ZW5jZS9TZXF1ZW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3hDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzFDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN0QyxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsYUFBYSxDQUFDOztBQUUxRCxJQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQztBQUN2QixRQUFJLEVBQUUsUUFBUTtBQUNkLFVBQU0sRUFBRTtBQUNKLGdCQUFRLEVBQUUsQ0FBQztLQUNkO0NBQ0osQ0FBQyxDQUFDOztBQUVILElBQU0sWUFBWSxHQUFHLGdCQUFlLFFBQVEsRUFBSztRQUF6QixRQUFRLFFBQVIsUUFBUTs7QUFDNUIsUUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7O0FBRTlCLFdBQU8sQ0FBQyxFQUFFLEVBQUU7QUFDUixZQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVoQyxZQUFJLFFBQVEsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO0FBQy9CLG1CQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDbkIsb0JBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvQjtLQUNKO0NBQ0osQ0FBQTs7QUFFRCxJQUFNLGdCQUFnQixHQUFHLFVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBSztBQUN4QyxRQUFJLFFBQVEsWUFBQSxDQUFDOztBQUViLFFBQUksS0FBSyxDQUFDLElBQUksRUFBRTtBQUNaLGdCQUFRLEdBQUcsWUFBTTtBQUNiLGlCQUFLLENBQUMsSUFBSSxDQUFD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QkFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO0FBQ3ZCLGtCQUFNLEVBQUU7QUFDSix3QkFBUSxFQUFFO0FBQ04sMkJBQU8sRUFBRSxDQUFDO0FBQ1Ysc0JBQUUsRUFBRSxJQUFJLENBQUMsUUFBUTtpQkFDcEI7YUFDSjtTQUNKLENBQUMsQ0FBQyxDQUFDOztBQUVKLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBckVDLFlBQVEsV0F1RVYsT0FBTyxzQkFBRztBQUNOLFlBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUN0Qzs7QUF6RUMsWUFBUSxXQTJFVixLQUFLLG9CQUFHO0FBQ0osWUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbkIsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFDL0QsZUFBTyxJQUFJLENBQUM7S0FDZjs7V0EvRUMsUUFBUTtHQUFTLEtBQUs7O0FBa0Y1QixNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyIsImZpbGUiOiJTZXF1ZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFjdG9yID0gcmVxdWlyZSgnLi4vYWN0b3IvQWN0b3InKTtcbmNvbnN0IFR3ZWVuID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Ud2VlbicpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcbmNvbnN0IGNhbGNSZWxhdGl2ZSA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJykucmVsYXRpdmVWYWx1ZTtcblxuY29uc3QgdGltZWxpbmUgPSBuZXcgVHdlZW4oe1xuICAgIGVhc2U6ICdsaW5lYXInLFxuICAgIHZhbHVlczoge1xuICAgICAgICBwbGF5aGVhZDogMFxuICAgIH1cbn0pO1xuXG5jb25zdCBjaGVja0FjdGlvbnMgPSAoeyBwbGF5aGVhZCB9LCBzZXF1ZW5jZSkgPT4ge1xuICAgIGxldCBpID0gc2VxdWVuY2UuY2hlY2subGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBsZXQgdG9DaGVjayA9IHNlcXVlbmNlLmNoZWNrW2ldO1xuXG4gICAgICAgIGlmIChwbGF5aGVhZCA+PSB0b0NoZWNrLnRpbWVzdGFtcCkge1xuICAgICAgICAgICAgdG9DaGVjay5jYWxsYmFjaygpO1xuICAgICAgICAgICAgc2VxdWVuY2UuY2hlY2suc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBnZW5lcmF0ZUNhbGxiYWNrID0gKGFjdG9yLCBhY3Rpb24pID0+IHtcbiAgICBsZXQgY2FsbGJhY2s7XG5cbiAgICBpZiAoYWN0b3IuZWFjaCkge1xuICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIGFjdG9yLmVhY2goYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIGFjdG9yLnN0YXJ0KGFjdGlvbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGxiYWNrO1xufVxuXG5jbGFzcyBTZXF1ZW5jZSBleHRlbmRzIEFjdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBjaGVjazogW10sXG4gICAgICAgICAgICBzZXF1ZW5jZTogW10sXG4gICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lc3RhbXA6IDAsXG4gICAgICAgICAgICBwcmV2QWN0aW9uRW5kOiAwLFxuICAgICAgICAgICAgb25VcGRhdGU6IGNoZWNrQWN0aW9uc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkbyhhY3RvciwgYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGlzQ2FsbGJhY2sgPSB1dGlscy5pc0Z1bmMoYWN0b3IpO1xuXG4gICAgICAgIHRoaXMuc2VxdWVuY2UucHVzaCh7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRoaXMuY3VycmVudFRpbWVzdGFtcCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBpc0NhbGxiYWNrID8gYWN0b3IgOiBnZW5lcmF0ZUNhbGxiYWNrKGFjdG9yLCBhY3Rpb24pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChhY3Rpb24gJiYgYWN0aW9uLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZBY3Rpb25FbmQgPSB0aGlzLmN1cnJlbnRUaW1lc3RhbXAgKyBhY3Rpb24uZHVyYXRpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFnZ2VyKGl0ZXJhdG9yLCBhY3Rpb24sIHN0YWdnZXJQcm9wcykge1xuICAgICAgICBjb25zdCBudW1JdGVtcyA9IGl0ZXJhdG9yLm1lbWJlcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHV0aWxzLmlzTnVtKHN0YWdnZXJQcm9wcykgPyBzdGFnZ2VyUHJvcHMgOiBzdGFnZ2VyUHJvcHMuaW50ZXJ2YWwgfHwgMTAwO1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IGFjdGlvbi5kdXJhdGlvbiA/IGFjdGlvbi5kdXJhdGlvbiA6IDA7XG5cbiAgICAgICAgdGhpcy5kbyhpdGVyYXRvciwgKCkgPT4ge1xuICAgICAgICAgICAgaXRlcmF0b3Iuc3RhZ2dlcihhY3Rpb24sIHN0YWdnZXJQcm9wcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJldkFjdGlvbkVuZCA9IHRoaXMuY3VycmVudFRpbWVzdGFtcCArIGR1cmF0aW9uICsgKGludGVydmFsICogbnVtSXRlbXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGF0KHRpbWVzdGFtcCkge1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcodGltZXN0YW1wKSkge1xuICAgICAgICAgICAgdGltZXN0YW1wID0gY2FsY1JlbGF0aXZlKHRoaXMuY3VycmVudFRpbWVzdGFtcCwgdGltZXN0YW1wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IE1hdGgubWF4KHRoaXMuY3VycmVudFRpbWVzdGFtcCwgdGhpcy5kdXJhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoZW4ob2Zmc2V0ID0gXCIrPTBcIikge1xuICAgICAgICB0aGlzLmF0KGNhbGNSZWxhdGl2ZSh0aGlzLnByZXZBY3Rpb25FbmQsIG9mZnNldCkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQodGltZWxpbmUuZXh0ZW5kKHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgcGxheWhlYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgICAgICAgICAgdG86IHRoaXMuZHVyYXRpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvblN0YXJ0KCkge1xuICAgICAgICB0aGlzLmNoZWNrID0gdGhpcy5zZXF1ZW5jZS5zbGljZSgpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNlcXVlbmNlID0gW107XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSB0aGlzLmN1cnJlbnRUaW1lc3RhbXAgPSB0aGlzLnByZXZBY3Rpb25FbmQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VxdWVuY2U7Il19
return exports;
})()),

    Input: __small$_22,

    Iterator: __small$_23,

    Process: __small$_24,

    Easing: __small$_25,

    Role: __small$_26,

    Action: __small$_27,
    Tween: __small$_28,
    Simulate: ((function() {
var exports = {};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Imports
var Action = __small$_27;
var calc = __small$_34;
var utils = __small$_35;
var simulations = ((function() {
var exports = {};
"use strict";

var calc = __small$_34,
    utils = __small$_35,
    speedPerFrame = calc.speedPerFrame;

/*
    Add core physics simulations
*/
var simulations = {
    /*
        Velocity
        
        The default .run() simulation.
        
        Applies any set deceleration and acceleration to existing velocity
    */
    velocity: function (value, duration) {
        value.velocity = value.velocity + speedPerFrame(value.acceleration, duration);

        return simulations.friction(value, duration);
    },

    /*
        Glide
        
        Emulates touch device scrolling effects with exponential decay
        http://ariya.ofilabs.com/2013/11/javascript-kinetic-scrolling-part-2.html
    */
    glide: function (value, duration, started) {
        var timeUntilFinished = -utils.currentTime() - started,
            delta = -value.to * Math.exp(timeUntilFinished / value.timeConstant);

        return value.to + delta - value.current;
    },

    /*
        Friction
         Apply friction to the current value
        TODO: Make this framerate-independent
    */
    friction: function (value, duration) {
        var newVelocity = speedPerFrame(value.velocity, duration) * (1 - value.friction);

        return calc.speedPerSecond(newVelocity, duration);
    },

    spring: function (value, duration) {
        var distance = value.to - value.current;

        value.velocity += distance * speedPerFrame(value.spring, duration);

        return simulations.friction(value, duration);
    },

    bounce: function (value) {
        var distance = 0,
            to = value.to,
            current = value.current,
            bounce = value.bounce;

        // If we're using glide simulation we have to flip our target too
        if (value.simulate === 'glide') {
            distance = to - current;
            value.to = current - distance * bounce;
        }

        return value.velocity *= -bounce;
    },

    capture: function (value, target) {
        value.to = target;
        value.simulate = 'spring';
        value.capture = value.min = value.max = undefined;
    }
};

exports = simulations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL3NpbXVsYXRlL3NpbXVsYXRpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7SUFDaEMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztJQUNsQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWE7Ozs7O0FBQUMsQUFLdkMsSUFBSSxXQUFXLEdBQUc7Ozs7Ozs7O0FBUWQsWUFBUSxFQUFFLFVBQVUsS0FBSyxFQUFFLFFBQVEsRUFBRTtBQUNqQyxhQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7O0FBRTlFLGVBQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDaEQ7Ozs7Ozs7O0FBUUQsU0FBSyxFQUFFLFVBQVUsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDdkMsWUFBSSxpQkFBaUIsR0FBRyxDQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxPQUFPO1lBQ25ELEtBQUssR0FBRyxDQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBRTFFLGVBQU8sQUFBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEtBQUssR0FBSSxLQUFLLENBQUMsT0FBTyxDQUFDO0tBQzdDOzs7Ozs7O0FBUUQsWUFBUSxFQUFFLFVBQVUsS0FBSyxFQUFFLFFBQVEsRUFBRTtBQUNqQyxZQUFJLFdBQVcsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQSxBQUFDLENBQUM7O0FBRWpGLGVBQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDckQ7O0FBRUQsVUFBTSxFQUFFLFVBQVUsS0FBSyxFQUFFLFFBQVEsRUFBRTtBQUMvQixZQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7O0FBRXhDLGFBQUssQ0FBQyxRQUFRLElBQUksUUFBUSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztBQUVuRSxlQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2hEOztBQUVELFVBQU0sRUFBRSxVQUFVLEtBQUssRUFBRTtBQUNyQixZQUFJLFFBQVEsR0FBRyxDQUFDO1lBQ1osRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ2IsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPO1lBQ3ZCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTs7O0FBQUMsQUFHMUIsWUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtBQUM1QixvQkFBUSxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUM7QUFDeEIsaUJBQUssQ0FBQyxFQUFFLEdBQUcsT0FBTyxHQUFJLFFBQVEsR0FBRyxNQUFNLEFBQUMsQ0FBQztTQUM1Qzs7QUFFRCxlQUFPLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBRSxNQUFNLENBQUM7S0FDckM7O0FBRUQsV0FBTyxFQUFFLFVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUM5QixhQUFLLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztBQUNsQixhQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUMxQixhQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7S0FDckQ7Q0FDSixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDIiwiZmlsZSI6InNpbXVsYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLFxuICAgIHNwZWVkUGVyRnJhbWUgPSBjYWxjLnNwZWVkUGVyRnJhbWU7XG5cbi8qXG4gICAgQWRkIGNvcmUgcGh5c2ljcyBzaW11bGF0aW9uc1xuKi9cbnZhciBzaW11bGF0aW9ucyA9IHtcbiAgICAvKlxuICAgICAgICBWZWxvY2l0eVxuICAgICAgICBcbiAgICAgICAgVGhlIGRlZmF1bHQgLnJ1bigpIHNpbXVsYXRpb24uXG4gICAgICAgIFxuICAgICAgICBBcHBsaWVzIGFueSBzZXQgZGVjZWxlcmF0aW9uIGFuZCBhY2NlbGVyYXRpb24gdG8gZXhpc3RpbmcgdmVsb2NpdHlcbiAgICAqL1xuICAgIHZlbG9jaXR5OiBmdW5jdGlvbiAodmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHkgKyBzcGVlZFBlckZyYW1lKHZhbHVlLmFjY2VsZXJhdGlvbiwgZHVyYXRpb24pO1xuXG4gICAgICAgIHJldHVybiBzaW11bGF0aW9ucy5mcmljdGlvbih2YWx1ZSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBHbGlkZVxuICAgICAgICBcbiAgICAgICAgRW11bGF0ZXMgdG91Y2ggZGV2aWNlIHNjcm9sbGluZyBlZmZlY3RzIHdpdGggZXhwb25lbnRpYWwgZGVjYXlcbiAgICAgICAgaHR0cDovL2FyaXlhLm9maWxhYnMuY29tLzIwMTMvMTEvamF2YXNjcmlwdC1raW5ldGljLXNjcm9sbGluZy1wYXJ0LTIuaHRtbFxuICAgICovXG4gICAgZ2xpZGU6IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24sIHN0YXJ0ZWQpIHtcbiAgICAgICAgdmFyIHRpbWVVbnRpbEZpbmlzaGVkID0gLSB1dGlscy5jdXJyZW50VGltZSgpIC0gc3RhcnRlZCxcbiAgICAgICAgICAgIGRlbHRhID0gLSB2YWx1ZS50byAqIE1hdGguZXhwKHRpbWVVbnRpbEZpbmlzaGVkIC8gdmFsdWUudGltZUNvbnN0YW50KTtcblxuICAgICAgICByZXR1cm4gKHZhbHVlLnRvICsgZGVsdGEpIC0gdmFsdWUuY3VycmVudDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgRnJpY3Rpb25cblxuICAgICAgICBBcHBseSBmcmljdGlvbiB0byB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICBUT0RPOiBNYWtlIHRoaXMgZnJhbWVyYXRlLWluZGVwZW5kZW50XG4gICAgKi9cbiAgICBmcmljdGlvbjogZnVuY3Rpb24gKHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICB2YXIgbmV3VmVsb2NpdHkgPSBzcGVlZFBlckZyYW1lKHZhbHVlLnZlbG9jaXR5LCBkdXJhdGlvbikgKiAoMSAtIHZhbHVlLmZyaWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gY2FsYy5zcGVlZFBlclNlY29uZChuZXdWZWxvY2l0eSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICBzcHJpbmc6IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IGRpc3RhbmNlICogc3BlZWRQZXJGcmFtZSh2YWx1ZS5zcHJpbmcsIGR1cmF0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBzaW11bGF0aW9ucy5mcmljdGlvbih2YWx1ZSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICBib3VuY2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSAwLFxuICAgICAgICAgICAgdG8gPSB2YWx1ZS50byxcbiAgICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZS5jdXJyZW50LFxuICAgICAgICAgICAgYm91bmNlID0gdmFsdWUuYm91bmNlO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgZ2xpZGUgc2ltdWxhdGlvbiB3ZSBoYXZlIHRvIGZsaXAgb3VyIHRhcmdldCB0b29cbiAgICAgICAgaWYgKHZhbHVlLnNpbXVsYXRlID09PSAnZ2xpZGUnKSB7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IHRvIC0gY3VycmVudDtcbiAgICAgICAgICAgIHZhbHVlLnRvID0gY3VycmVudCAtIChkaXN0YW5jZSAqIGJvdW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2YWx1ZS52ZWxvY2l0eSAqPSAtIGJvdW5jZTtcbiAgICB9LFxuXG4gICAgY2FwdHVyZTogZnVuY3Rpb24gKHZhbHVlLCB0YXJnZXQpIHtcbiAgICAgICAgdmFsdWUudG8gPSB0YXJnZXQ7XG4gICAgICAgIHZhbHVlLnNpbXVsYXRlID0gJ3NwcmluZyc7XG4gICAgICAgIHZhbHVlLmNhcHR1cmUgPSB2YWx1ZS5taW4gPSB2YWx1ZS5tYXggPSB1bmRlZmluZWQ7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaW11bGF0aW9ucztcbiJdfQ==
return exports;
})());

// Values
var DEFAULT_PROP = 'velocity';

var Simulate = (function (_Action) {
    _inherits(Simulate, _Action);

    /*
        # Simulate class constructor
        ## Sets parent Action class and then default Simulate properties
         @param [object]
    */

    function Simulate() {
        _classCallCheck(this, Simulate);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _Action.call.apply(_Action, [this].concat(args)));

        _this.calculatesVelocity = true;
        _this.inactiveFrames = 0;
        return _this;
    }

    /*
        # Get default Simulate props
         @return [object]
    */

    Simulate.prototype.getDefaultProps = function getDefaultProps() {
        return {
            autoEnd: true,
            maxInactiveFrames: 3
        };
    };

    /*
        # Get default Simulate value props
         @return [object]
    */

    Simulate.prototype.getDefaultValue = function getDefaultValue() {
        return {
            // [string]: Simulation to .run
            simulate: DEFAULT_PROP,

            // [number]: Acceleration to apply to value, in units per second
            acceleration: 0,

            // [number]: Factor to multiply velocity by on bounce
            bounce: 0,

            // [number]: Spring strength during 'string'
            spring: 80,

            // [number]: Timeconstant of glide
            timeConstant: 395,

            // [number]: Stop simulation under this speed
            stopSpeed: 0.0001,

            // [boolean]: Capture with spring physics on limit breach
            capture: false,

            // [number]: Friction to apply per frame
            friction: 0,

            to: 0,
            round: false
        };
    };

    /*
        # Get default Simulate value property name
        ## Set values to this when a `value` is not provided as an object
         @return [string]
    */

    Simulate.prototype.getDefaultValueProp = function getDefaultValueProp() {
        return DEFAULT_PROP;
    };

    /*
        # Method to fire when Action starts
        ## Set `started` to current time.
    */

    Simulate.prototype.onStart = function onStart() {
        this.started = utils.currentTime();
    };

    /*
        # Fire at start of every frame
        ## Set `hasChanged` to false
    */

    Simulate.prototype.onFrameStart = function onFrameStart() {
        this.hasChanged = false;
    };

    /*
        # Simulate the `value`s per-frame movement
        
        @param [Actor]
        @param [Value]: Current value
        @param [string]: Key of current value
        @param [number]: Duration of frame in ms
        @return [number]: Calculated value
    */

    Simulate.prototype.process = function process(actor, value, key, timeSinceLastFrame) {
        var current = value.current;
        var simulate = value.simulate;
        var newValue = current;

        // If string, use in-built simulation otherwise treat as function
        var simulation = utils.isString(simulate) ? simulations[simulate] : simulate;

        var newVelocity = simulation ? simulation(value, timeSinceLastFrame, this.started) : 0;

        value.velocity = Math.abs(newVelocity) >= value.stopSpeed ? newVelocity : 0;

        newValue = value.current + calc.speedPerFrame(value.velocity, timeSinceLastFrame);

        if (newValue !== current) {
            this.hasChanged = true;
        }

        return newValue;
    };

    /*
        # Has this action ended?
        ## Use a framecounter to see if Action has changed in the last x frames
        and declare ended if not
        
        @param [Actor]
        @return [boolean]: Has Action ended?
    */

    Simulate.prototype.hasEnded = function hasEnded(actor) {
        var ended = false;

        if (this.autoEnd) {
            this.inactiveFrames = this.hasChanged ? 0 : this.inactiveFrames + 1;
            ended = this.inactiveFrames > actor.maxInactiveFrames;
        }

        return ended;
    };

    /*
        # Limit output to value range, if any
        ## If velocity is at or more than range, and value has a bounce property,
        run the bounce simulation
        
        @param [number]: Calculated output
        @param [Value]: Current Value
        @return [number]: Limit-adjusted output
    */

    Simulate.prototype.limit = function limit(output, value) {
        var isOutsideMax = output >= value.max;
        var isOutsideMin = output <= value.min;
        var isOutsideRange = isOutsideMax || isOutsideMin;

        if (isOutsideRange) {
            output = calc.restricted(output, value.min, value.max);

            if (value.bounce) {
                value.velocity = simulations.bounce(value);
            } else if (value.capture) {
                simulations.capture(value, isOutsideMax ? value.max : value.min);
            }
        }

        return output;
    };

    return Simulate;
})(Action);

exports = Simulate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1NpbXVsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuQyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDcEMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQzs7O0FBQUMsQUFHdEQsSUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDOztJQUUxQixRQUFRO2NBQVIsUUFBUTs7Ozs7Ozs7QUFPVixhQVBFLFFBQVEsR0FPVzs4QkFQbkIsUUFBUTs7MENBT0ssSUFBSTtBQUFKLGdCQUFJOzs7cURBQ2YsMENBQVMsSUFBSSxFQUFDOztBQUNkLGNBQUssa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0FBQy9CLGNBQUssY0FBYyxHQUFHLENBQUMsQ0FBQzs7S0FDM0I7Ozs7OztBQUFBO0FBWEMsWUFBUSxXQWtCVixlQUFlLDhCQUFHO0FBQ2QsZUFBTztBQUNILG1CQUFPLEVBQUUsSUFBSTtBQUNiLDZCQUFpQixFQUFFLENBQUM7U0FDdkIsQ0FBQztLQUNMOzs7Ozs7O0FBdkJDLFlBQVEsV0E4QlYsZUFBZSw4QkFBRztBQUNkLGVBQU87O0FBRUgsb0JBQVEsRUFBRSxZQUFZOzs7QUFHdEIsd0JBQVksRUFBRSxDQUFDOzs7QUFHZixrQkFBTSxFQUFFLENBQUM7OztBQUdULGtCQUFNLEVBQUUsRUFBRTs7O0FBR1Ysd0JBQVksRUFBRSxHQUFHOzs7QUFHakIscUJBQVMsRUFBRSxNQUFNOzs7QUFHakIsbUJBQU8sRUFBRSxLQUFLOzs7QUFHZCxvQkFBUSxFQUFFLENBQUM7O0FBRVgsY0FBRSxFQUFFLENBQUM7QUFDTCxpQkFBSyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0w7Ozs7Ozs7O0FBM0RDLFlBQVEsV0Ft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QUFvSzdCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDIiwiZmlsZSI6IlNpbXVsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuY29uc3QgQWN0aW9uID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcbmNvbnN0IGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcbmNvbnN0IHNpbXVsYXRpb25zID0gcmVxdWlyZSgnLi9zaW11bGF0ZS9zaW11bGF0aW9ucycpO1xuXG4vLyBWYWx1ZXNcbmNvbnN0IERFRkFVTFRfUFJPUCA9ICd2ZWxvY2l0eSc7XG5cbmNsYXNzIFNpbXVsYXRlIGV4dGVuZHMgQWN0aW9uIHtcbiAgICAvKlxuICAgICAgICAjIFNpbXVsYXRlIGNsYXNzIGNvbnN0cnVjdG9yXG4gICAgICAgICMjIFNldHMgcGFyZW50IEFjdGlvbiBjbGFzcyBhbmQgdGhlbiBkZWZhdWx0IFNpbXVsYXRlIHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSBwcm9wc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGF1dG9FbmQ6IHRydWUsXG4gICAgICAgICAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcHNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBbc3RyaW5nXTogU2ltdWxhdGlvbiB0byAucnVuXG4gICAgICAgICAgICBzaW11bGF0ZTogREVGQVVMVF9QUk9QLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgICAgICAgICBhY2NlbGVyYXRpb246IDAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgICAgICAgICBib3VuY2U6IDAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gICAgICAgICAgICBzcHJpbmc6IDgwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogVGltZWNvbnN0YW50IG9mIGdsaWRlXG4gICAgICAgICAgICB0aW1lQ29uc3RhbnQ6IDM5NSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gICAgICAgICAgICBzdG9wU3BlZWQ6IDAuMDAwMSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW2Jvb2xlYW5dOiBDYXB0dXJlIHdpdGggc3ByaW5nIHBoeXNpY3Mgb24gbGltaXQgYnJlYWNoXG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IEZyaWN0aW9uIHRvIGFwcGx5IHBlciBmcmFtZVxuICAgICAgICAgICAgZnJpY3Rpb246IDAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSB2YWx1ZSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICMjIFNldCB2YWx1ZXMgdG8gdGhpcyB3aGVuIGEgYHZhbHVlYCBpcyBub3QgcHJvdmlkZWQgYXMgYW4gb2JqZWN0XG5cbiAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIE1ldGhvZCB0byBmaXJlIHdoZW4gQWN0aW9uIHN0YXJ0c1xuICAgICAgICAjIyBTZXQgYHN0YXJ0ZWRgIHRvIGN1cnJlbnQgdGltZS5cbiAgICAqL1xuICAgIG9uU3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBGaXJlIGF0IHN0YXJ0IG9mIGV2ZXJ5IGZyYW1lXG4gICAgICAgICMjIFNldCBgaGFzQ2hhbmdlZGAgdG8gZmFsc2VcbiAgICAqL1xuICAgIG9uRnJhbWVTdGFydCgpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICAgICMgU2ltdWxhdGUgdGhlIGB2YWx1ZWBzIHBlci1mcmFtZSBtb3ZlbWVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IER1cmF0aW9uIG9mIGZyYW1lIGluIG1zXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWVcbiAgICAqL1xuICAgIHByb2Nlc3MoYWN0b3IsIHZhbHVlLCBrZXksIHRpbWVTaW5jZUxhc3RGcmFtZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgY29uc3Qgc2ltdWxhdGUgPSB2YWx1ZS5zaW11bGF0ZTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gY3VycmVudDtcblxuICAgICAgICAvLyBJZiBzdHJpbmcsIHVzZSBpbi1idWlsdCBzaW11bGF0aW9uIG90aGVyd2lzZSB0cmVhdCBhcyBmdW5jdGlvblxuICAgICAgICBjb25zdCBzaW11bGF0aW9uID0gdXRpbHMuaXNTdHJpbmcoc2ltdWxhdGUpID8gc2ltdWxhdGlvbnNbc2ltdWxhdGVdIDogc2ltdWxhdGU7XG5cbiAgICAgICAgY29uc3QgbmV3VmVsb2NpdHkgPSBzaW11bGF0aW9uID8gc2ltdWxhdGlvbih2YWx1ZSwgdGltZVNpbmNlTGFzdEZyYW1lLCB0aGlzLnN0YXJ0ZWQpIDogMDtcblxuICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IChNYXRoLmFicyhuZXdWZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkKSA/IG5ld1ZlbG9jaXR5IDogMDtcblxuICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlLmN1cnJlbnQgKyBjYWxjLnNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIHRpbWVTaW5jZUxhc3RGcmFtZSk7XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBjdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgIH1cbiAgICBcbiAgICAvKlxuICAgICAgICAjIEhhcyB0aGlzIGFjdGlvbiBlbmRlZD9cbiAgICAgICAgIyMgVXNlIGEgZnJhbWVjb3VudGVyIHRvIHNlZSBpZiBBY3Rpb24gaGFzIGNoYW5nZWQgaW4gdGhlIGxhc3QgeCBmcmFtZXNcbiAgICAgICAgYW5kIGRlY2xhcmUgZW5kZWQgaWYgbm90XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW0FjdG9yXVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGFzIEFjdGlvbiBlbmRlZD9cbiAgICAqL1xuICAgIGhhc0VuZGVkKGFjdG9yKSB7XG4gICAgICAgIGxldCBlbmRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dG9FbmQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSB0aGlzLmhhc0NoYW5nZWQgPyAwIDogdGhpcy5pbmFjdGl2ZUZyYW1lcyArIDE7XG4gICAgICAgICAgICBlbmRlZCA9ICh0aGlzLmluYWN0aXZlRnJhbWVzID4gYWN0b3IubWF4SW5hY3RpdmVGcmFtZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVuZGVkO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgTGltaXQgb3V0cHV0IHRvIHZhbHVlIHJhbmdlLCBpZiBhbnlcbiAgICAgICAgIyMgSWYgdmVsb2NpdHkgaXMgYXQgb3IgbW9yZSB0aGFuIHJhbmdlLCBhbmQgdmFsdWUgaGFzIGEgYm91bmNlIHByb3BlcnR5LFxuICAgICAgICBydW4gdGhlIGJvdW5jZSBzaW11bGF0aW9uXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IENhbGN1bGF0ZWQgb3V0cHV0XG4gICAgICAgIEBwYXJhbSBbVmFsdWVdOiBDdXJyZW50IFZhbHVlXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IExpbWl0LWFkanVzdGVkIG91dHB1dFxuICAgICovXG4gICAgbGltaXQob3V0cHV0LCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBpc091dHNpZGVNYXggPSAob3V0cHV0ID49IHZhbHVlLm1heCk7XG4gICAgICAgIGNvbnN0IGlzT3V0c2lkZU1pbiA9IChvdXRwdXQgPD0gdmFsdWUubWluKTtcbiAgICAgICAgY29uc3QgaXNPdXRzaWRlUmFuZ2UgPSBpc091dHNpZGVNYXggfHwgaXNPdXRzaWRlTWluO1xuICAgICAgICAgICAgXG4gICAgICAgIGlmIChpc091dHNpZGVSYW5nZSkge1xuICAgICAgICAgICAgb3V0cHV0ID0gY2FsYy5yZXN0cmljdGVkKG91dHB1dCwgdmFsdWUubWluLCB2YWx1ZS5tYXgpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUuYm91bmNlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBzaW11bGF0aW9ucy5ib3VuY2UodmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5jYXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgc2ltdWxhdGlvbnMuY2FwdHVyZSh2YWx1ZSwgaXNPdXRzaWRlTWF4ID8gdmFsdWUubWF4IDogdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpbXVsYXRlOyJdfQ==
return exports;
})()),
    Track: ((function() {
var exports = {};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Action = __small$_27,
    Pointer = ((function() {
var exports = {};
"use strict";

var Input = __small$_22,
    currentPointer,
    // Sort this out for multitouch

TOUCHMOVE = 'touchmove',
    MOUSEMOVE = 'mousemove',

/*
    Convert event into point
    
    Scrape the x/y coordinates from the provided event
    
    @param [event]: Original pointer event
    @param [boolean]: True if touch event
    @return [object]: x/y coordinates of event
*/
eventToPoint = function (event, isTouchEvent) {
    var touchChanged = isTouchEvent ? event.changedTouches[0] : false;

    return {
        x: touchChanged ? touchChanged.clientX : event.pageX,
        y: touchChanged ? touchChanged.clientY : event.pageY
    };
},

/*
    Get actual event
    
    Checks for jQuery's .originalEvent if present
    
    @param [event | jQuery event]
    @return [event]: The actual JS event  
*/
getActualEvent = function (event) {
    return event.originalEvent || event;
},

/*
    Pointer constructor
*/
Pointer = function (e) {
    var event = getActualEvent(e),
        // In case of jQuery event
    isTouch = event.touches ? true : false,
        startPoint = eventToPoint(event, isTouch);

    this.update(startPoint);
    this.isTouch = isTouch;
    this.bindEvents();
},
    proto = Pointer.prototype = new Input();

/*
    Bind move event
*/
proto.bindEvents = function () {
    this.moveEvent = this.isTouch ? TOUCHMOVE : MOUSEMOVE;
    this.autoStop = true;

    currentPointer = this;

    document.documentElement.addEventListener(this.moveEvent, this.onMove);
};

/*
    Unbind move event
*/
proto.unbindEvents = function () {
    document.documentElement.removeEventListener(this.moveEvent, this.onMove);
};

/*
    Pointer onMove event handler
    
    @param [event]: Pointer move event
*/
proto.onMove = function (e) {
    var newPoint = eventToPoint(e, currentPointer.isTouch);
    e = getActualEvent(e);
    e.preventDefault();
    currentPointer.update(newPoint);
};

proto.stop = function () {
    this.unbindEvents();
};

exports = Pointer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9Qb2ludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQzdCLGNBQWM7OztBQUVkLFNBQVMsR0FBRyxXQUFXO0lBQ3ZCLFNBQVMsR0FBRyxXQUFXOzs7Ozs7Ozs7OztBQVd2QixZQUFZLEdBQUcsVUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFO0FBQzFDLFFBQUksWUFBWSxHQUFHLFlBQVksR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQzs7QUFFbEUsV0FBTztBQUNILFNBQUMsRUFBRSxZQUFZLEdBQUcsWUFBWSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSztBQUNwRCxTQUFDLEVBQUUsWUFBWSxHQUFHLFlBQVksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUs7S0FDdkQsQ0FBQztDQUNMOzs7Ozs7Ozs7O0FBVUQsY0FBYyxHQUFHLFVBQVUsS0FBSyxFQUFFO0FBQzlCLFdBQU8sS0FBSyxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUM7Q0FDdkM7Ozs7O0FBTUQsT0FBTyxHQUFHLFVBQVUsQ0FBQyxFQUFFO0FBQ25CLFFBQUksS0FBSyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUM7O0FBQ3pCLFdBQU8sR0FBRyxBQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUksSUFBSSxHQUFHLEtBQUs7UUFDeEMsVUFBVSxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7O0FBRTlDLFFBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEIsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsUUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0NBQ3JCO0lBRUQsS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUU7Ozs7O0FBQUMsQUFLNUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxZQUFZO0FBQzNCLFFBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQ3RELFFBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOztBQUVyQixrQkFBYyxHQUFHLElBQUksQ0FBQzs7QUFFdEIsWUFBUSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUMxRTs7Ozs7QUFBQyxBQUtGLEtBQUssQ0FBQyxZQUFZLEdBQUcsWUFBWTtBQUM3QixZQUFRLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQzdFOzs7Ozs7O0FBQUMsQUFPRixLQUFLLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxFQUFFO0FBQ3hCLFFBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZELEtBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsS0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25CLGtCQUFjLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQ25DLENBQUM7O0FBRUYsS0FBSyxDQUFDLElBQUksR0FBRyxZQUFZO0FBQ3JCLFFBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztDQUN2QixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDIiwiZmlsZSI6IlBvaW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIElucHV0ID0gcmVxdWlyZSgnLi9JbnB1dC5qcycpLFxuICAgIGN1cnJlbnRQb2ludGVyLCAvLyBTb3J0IHRoaXMgb3V0IGZvciBtdWx0aXRvdWNoXG4gICAgXG4gICAgVE9VQ0hNT1ZFID0gJ3RvdWNobW92ZScsXG4gICAgTU9VU0VNT1ZFID0gJ21vdXNlbW92ZScsXG5cbiAgICAvKlxuICAgICAgICBDb252ZXJ0IGV2ZW50IGludG8gcG9pbnRcbiAgICAgICAgXG4gICAgICAgIFNjcmFwZSB0aGUgeC95IGNvb3JkaW5hdGVzIGZyb20gdGhlIHByb3ZpZGVkIGV2ZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2V2ZW50XTogT3JpZ2luYWwgcG9pbnRlciBldmVudFxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dOiBUcnVlIGlmIHRvdWNoIGV2ZW50XG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IHgveSBjb29yZGluYXRlcyBvZiBldmVudFxuICAgICovXG4gICAgZXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGV2ZW50LCBpc1RvdWNoRXZlbnQpIHtcbiAgICAgICAgdmFyIHRvdWNoQ2hhbmdlZCA9IGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZmFsc2U7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdG91Y2hDaGFuZ2VkID8gdG91Y2hDaGFuZ2VkLmNsaWVudFggOiBldmVudC5wYWdlWCxcbiAgICAgICAgICAgIHk6IHRvdWNoQ2hhbmdlZCA/IHRvdWNoQ2hhbmdlZC5jbGllbnRZIDogZXZlbnQucGFnZVlcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBhY3R1YWwgZXZlbnRcbiAgICAgICAgXG4gICAgICAgIENoZWNrcyBmb3IgalF1ZXJ5J3MgLm9yaWdpbmFsRXZlbnQgaWYgcHJlc2VudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtldmVudCB8IGpRdWVyeSBldmVudF1cbiAgICAgICAgQHJldHVybiBbZXZlbnRdOiBUaGUgYWN0dWFsIEpTIGV2ZW50ICBcbiAgICAqL1xuICAgIGdldEFjdHVhbEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50O1xuICAgIH0sXG5cbiAgICBcbiAgICAvKlxuICAgICAgICBQb2ludGVyIGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBQb2ludGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZ2V0QWN0dWFsRXZlbnQoZSksIC8vIEluIGNhc2Ugb2YgalF1ZXJ5IGV2ZW50XG4gICAgICAgICAgICBpc1RvdWNoID0gKGV2ZW50LnRvdWNoZXMpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgc3RhcnRQb2ludCA9IGV2ZW50VG9Qb2ludChldmVudCwgaXNUb3VjaCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZShzdGFydFBvaW50KTtcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gaXNUb3VjaDtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfSxcbiAgICBcbiAgICBwcm90byA9IFBvaW50ZXIucHJvdG90eXBlID0gbmV3IElucHV0KCk7XG5cbi8qXG4gICAgQmluZCBtb3ZlIGV2ZW50XG4qL1xucHJvdG8uYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm1vdmVFdmVudCA9IHRoaXMuaXNUb3VjaCA/IFRPVUNITU9WRSA6IE1PVVNFTU9WRTtcbiAgICB0aGlzLmF1dG9TdG9wID0gdHJ1ZTtcbiAgICBcbiAgICBjdXJyZW50UG9pbnRlciA9IHRoaXM7XG4gICAgXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMub25Nb3ZlKTtcbn07XG5cbi8qXG4gICAgVW5iaW5kIG1vdmUgZXZlbnRcbiovXG5wcm90by51bmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMub25Nb3ZlKTtcbn07XG5cbi8qXG4gICAgUG9pbnRlciBvbk1vdmUgZXZlbnQgaGFuZGxlclxuICAgIFxuICAgIEBwYXJhbSBbZXZlbnRdOiBQb2ludGVyIG1vdmUgZXZlbnRcbiovXG5wcm90by5vbk1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBuZXdQb2ludCA9IGV2ZW50VG9Qb2ludChlLCBjdXJyZW50UG9pbnRlci5pc1RvdWNoKTtcbiAgICBlID0gZ2V0QWN0dWFsRXZlbnQoZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGN1cnJlbnRQb2ludGVyLnVwZGF0ZShuZXdQb2ludCk7XG59O1xuXG5wcm90by5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50ZXI7Il19
return exports;
})()),
    calc = __small$_34;

var Track = (function (_Action) {
    _inherits(Track, _Action);

    function Track() {
        _classCallCheck(this, Track);

        return _possibleConstructorReturn(this, _Action.apply(this, arguments));
    }

    /*
        Update input offset
    */

    Track.prototype.onFrameStart = function onFrameStart(actor, frameDuration, framestamp) {
        actor.state.input = this.input.onFrame(framestamp);
        this.inputOffset = calc.offset(this.inputOrigin, this.input.current);
        this.frameDuration = frameDuration;
    };

    /*
        Move Value relative to Input movement
        
        @param [Value]: Current value
        @param [string]: Key of current value
        @return [number]: Calculated value
    */

    Track.prototype.process = function process(actor, value, key) {
        var newValue = value.current;

        if (this.inputOffset.hasOwnProperty(key)) {
            newValue = value.direct ? this.input.current[key] : value.origin + this.inputOffset[key] * value.amp;
        }

        return newValue;
    };

    /*
        Has this Action ended? 
        
        @return [boolean]: False to make user manually finish .track()
    */

    Track.prototype.hasEnded = function hasEnded() {
        return false;
    };

    Track.prototype.deactivate = function deactivate() {
        _Action.prototype.deactivate.call(this);

        if (this.input && this.input.stop) {
            this.input.stop();
        }

        return this;
    };

    Track.prototype.bindInput = function bindInput(input) {
        this.input = !input.current ? new Pointer(input) : input;
        this.inputOrigin = this.input.get();
    };

    Track.prototype.getDefaultValue = function getDefaultValue() {
        return {
            amp: 1,
            escapeAmp: 0,
            direct: false,
            smooth: 0
        };
    };

    return Track;
})(Action);

exports = Track;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUM1QixPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDO0lBQ3JDLElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7O0lBRTVCLEtBQUs7Y0FBTCxLQUFLOzthQUFMLEtBQUs7OEJBQUwsS0FBSzs7Ozs7Ozs7O0FBQUwsU0FBSyxXQUlQLFlBQVkseUJBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUU7QUFDM0MsYUFBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkQsWUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyRSxZQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztLQUN0Qzs7Ozs7Ozs7OztBQVJDLFNBQUssV0FpQlAsT0FBTyxvQkFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtBQUN2QixZQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDOztBQUU3QixZQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3RDLG9CQUFRLEdBQUcsQUFBQyxLQUFLLENBQUMsTUFBTSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxBQUFDLENBQUM7U0FDNUc7O0FBRUQsZUFBTyxRQUFRLENBQUM7S0FDbkI7Ozs7Ozs7O0FBekJDLFNBQUssV0FnQ1AsUUFBUSx1QkFBRztBQUNQLGVBQU8sS0FBSyxDQUFDO0tBQ2hCOztBQWxDQyxTQUFLLFdBb0NQLFVBQVUseUJBQUc7QUFDVCwwQkFBTSxVQUFVLEtBQUEsTUFBRSxDQUFDOztBQUVuQixZQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7QUFDL0IsZ0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7O0FBRUQsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUE1Q0MsU0FBSyxXQThDUCxTQUFTLHNCQUFDLEtBQUssRUFBRTtBQUNiLFlBQUksQ0FBQyxLQUFLLEdBQUcsQUFBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQzNELFlBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUN2Qzs7QUFqREMsU0FBSyxXQW1EUCxlQUFlLDhCQUFHO0FBQ2QsZUFBTztBQUNILGVBQUcsRUFBRSxDQUFDO0FBQ04scUJBQVMsRUFBRSxDQUFDO0FBQ1osa0JBQU0sRUFBRSxLQUFLO0FBQ2Isa0JBQU0sRUFBRSxDQUFDO1NBQ1osQ0FBQztLQUNMOztXQTFEQyxLQUFLO0dBQVMsTUFBTTs7QUE2RDFCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIiwiZmlsZSI6IlRyYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEFjdGlvbiA9IHJlcXVpcmUoJy4vQWN0aW9uJyksXG4gICAgUG9pbnRlciA9IHJlcXVpcmUoJy4uL2lucHV0L1BvaW50ZXInKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuY2xhc3MgVHJhY2sgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIC8qXG4gICAgICAgIFVwZGF0ZSBpbnB1dCBvZmZzZXRcbiAgICAqL1xuICAgIG9uRnJhbWVTdGFydChhY3RvciwgZnJhbWVEdXJhdGlvbiwgZnJhbWVzdGFtcCkge1xuICAgICAgICBhY3Rvci5zdGF0ZS5pbnB1dCA9IHRoaXMuaW5wdXQub25GcmFtZShmcmFtZXN0YW1wKTtcbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9IGNhbGMub2Zmc2V0KHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuY3VycmVudCk7XG4gICAgICAgIHRoaXMuZnJhbWVEdXJhdGlvbiA9IGZyYW1lRHVyYXRpb247XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTW92ZSBWYWx1ZSByZWxhdGl2ZSB0byBJbnB1dCBtb3ZlbWVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSAodmFsdWUuZGlyZWN0KSA/IHRoaXMuaW5wdXQuY3VycmVudFtrZXldIDogdmFsdWUub3JpZ2luICsgKHRoaXMuaW5wdXRPZmZzZXRba2V5XSAqIHZhbHVlLmFtcCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgSGFzIHRoaXMgQWN0aW9uIGVuZGVkPyBcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBGYWxzZSB0byBtYWtlIHVzZXIgbWFudWFsbHkgZmluaXNoIC50cmFjaygpXG4gICAgKi9cbiAgICBoYXNFbmRlZCgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIHN1cGVyLmRlYWN0aXZhdGUoKTtcblxuICAgICAgICBpZiAodGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0LnN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYmluZElucHV0KGlucHV0KSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSAoIWlucHV0LmN1cnJlbnQpID8gbmV3IFBvaW50ZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgICAgIHRoaXMuaW5wdXRPcmlnaW4gPSB0aGlzLmlucHV0LmdldCgpO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFtcDogMSxcbiAgICAgICAgICAgIGVzY2FwZUFtcDogMCxcbiAgICAgICAgICAgIGRpcmVjdDogZmFsc2UsXG4gICAgICAgICAgICBzbW9vdGg6IDBcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhY2s7Il19
return exports;
})()),

    /*
        Create an Iterator of Actors with selected dom elements
    */
    select: ((function() {
var exports = {};
'use strict';

var Actor = __small$_20,
    Iterator = __small$_23,
    selectDom = __small$_50;

var SAVE_PROP = '__pm_actor_';

exports = function (selector) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var dom = selectDom(selector),
        actors = [];

    dom.forEach(function (element) {
        var actor = element[SAVE_PROP];

        if (!actor) {
            opts.element = element;
            actor = element[SAVE_PROP] = new Actor(opts);
        }

        actors.push(actor);
    });

    return actors.length > 1 ? new Iterator(actors) : actors[0];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvc2VsZWN0LWFjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0lBQ2pDLFFBQVEsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUM7SUFDMUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFeEMsSUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDOztBQUVoQyxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsUUFBUSxFQUFhO1FBQVgsSUFBSSx5REFBRyxFQUFFOztBQUMxQyxRQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ3pCLE1BQU0sR0FBRyxFQUFFLENBQUM7O0FBRWhCLE9BQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUs7QUFDckIsWUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUUvQixZQUFJLENBQUMsS0FBSyxFQUFFO0FBQ1IsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGlCQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hEOztBQUVELGNBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEIsQ0FBQyxDQUFDOztBQUVILFdBQU8sQUFBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBSSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDakUsQ0FBQyIsImZpbGUiOiJzZWxlY3QtYWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWN0b3IgPSByZXF1aXJlKCcuLi9hY3Rvci9BY3RvcicpLFxuICAgIEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaXRlcmF0b3IvSXRlcmF0b3InKSxcbiAgICBzZWxlY3REb20gPSByZXF1aXJlKCcuL3NlbGVjdC1kb20nKTtcblxuY29uc3QgU0FWRV9QUk9QID0gJ19fcG1fYWN0b3JfJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIG9wdHMgPSB7fSkge1xuICAgIHZhciBkb20gPSBzZWxlY3REb20oc2VsZWN0b3IpLFxuICAgICAgICBhY3RvcnMgPSBbXTtcblxuICAgIGRvbS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGxldCBhY3RvciA9IGVsZW1lbnRbU0FWRV9QUk9QXTtcblxuICAgICAgICBpZiAoIWFjdG9yKSB7XG4gICAgICAgICAgICBvcHRzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgYWN0b3IgPSBlbGVtZW50W1NBVkVfUFJPUF0gPSBuZXcgQWN0b3Iob3B0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBhY3RvcnMucHVzaChhY3Rvcik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKGFjdG9ycy5sZW5ndGggPiAxKSA/IG5ldyBJdGVyYXRvcihhY3RvcnMpIDogYWN0b3JzWzBdO1xufTtcbiJdfQ==
return exports;
})()),

    ease: __small$_32,

    /*
        Modify properties of inbuilt easing function
    */
    modifyEase: ((function() {
var exports = {};
"use strict";

exports = function (easing) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return function (progress) {
    return easing.apply(undefined, [progress].concat(args));
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL3R3ZWVuL21vZGlmeS1lYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFDLE1BQU07b0NBQUssSUFBSTtBQUFKLFFBQUk7OztTQUFLLFVBQUMsUUFBUTtXQUFLLE1BQU0sbUJBQUMsUUFBUSxTQUFLLElBQUksRUFBQztHQUFBO0NBQUEsQ0FBQyIsImZpbGUiOiJtb2RpZnktZWFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKGVhc2luZywgLi4uYXJncykgPT4gKHByb2dyZXNzKSA9PiBlYXNpbmcocHJvZ3Jlc3MsIC4uLmFyZ3MpOyJdfQ==
return exports;
})()),

    addValueType: function (types) {
        valueTypes.extend(types);
        return Popmotion;
    },

    calc: __small$_34,
    utils: __small$_35
};

exports = Popmotion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUM7SUFFN0MsU0FBUyxHQUFHOztBQUVSLFNBQUssRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDOztBQUUvQixZQUFRLEVBQUUsT0FBTyxDQUFDLHFCQUFxQixDQUFDOztBQUV4QyxTQUFLLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQzs7QUFFL0IsWUFBUSxFQUFFLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQzs7QUFFeEMsV0FBTyxFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQzs7QUFFckMsVUFBTSxFQUFFLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQzs7QUFFekMsUUFBSSxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUM7O0FBRTdCLFVBQU0sRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUM7QUFDbkMsU0FBSyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUNqQyxZQUFRLEVBQUUsT0FBTyxDQUFDLG9CQUFvQixDQUFDO0FBQ3ZDLFNBQUssRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUM7Ozs7O0FBS2pDLFVBQU0sRUFBRSxPQUFPLENBQUMsb0JBQW9CLENBQUM7O0FBRXJDLFFBQUksRUFBRSxPQUFPLENBQUMsK0JBQStCLENBQUM7Ozs7O0FBSzlDLGNBQVUsRUFBRSxPQUFPLENBQUMsNkJBQTZCLENBQUM7O0FBRWxELGdCQUFZLEVBQUUsVUFBQSxLQUFLLEVBQUk7QUFDbkIsa0JBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsZUFBTyxTQUFTLENBQUM7S0FDcEI7O0FBRUQsUUFBSSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDM0IsU0FBSyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUM7Q0FDaEMsQ0FBQzs7QUFFTixNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyIsImZpbGUiOiJwb3Btb3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvbWFuYWdlcicpLFxuXG4gICAgUG9wbW90aW9uID0ge1xuXG4gICAgICAgIEFjdG9yOiByZXF1aXJlKCcuL2FjdG9yL0FjdG9yJyksXG5cbiAgICAgICAgU2VxdWVuY2U6IHJlcXVpcmUoJy4vc2VxdWVuY2UvU2VxdWVuY2UnKSxcblxuICAgICAgICBJbnB1dDogcmVxdWlyZSgnLi9pbnB1dC9JbnB1dCcpLFxuXG4gICAgICAgIEl0ZXJhdG9yOiByZXF1aXJlKCcuL2l0ZXJhdG9yL0l0ZXJhdG9yJyksXG5cbiAgICAgICAgUHJvY2VzczogcmVxdWlyZSgnLi9wcm9jZXNzL1Byb2Nlc3MnKSxcblxuICAgICAgICBFYXNpbmc6IHJlcXVpcmUoJy4vYWN0aW9ucy90d2Vlbi9FYXNpbmcnKSxcblxuICAgICAgICBSb2xlOiByZXF1aXJlKCcuL3JvbGVzL1JvbGUnKSxcblxuICAgICAgICBBY3Rpb246IHJlcXVpcmUoJy4vYWN0aW9ucy9BY3Rpb24nKSxcbiAgICAgICAgVHdlZW46IHJlcXVpcmUoJy4vYWN0aW9ucy9Ud2VlbicpLFxuICAgICAgICBTaW11bGF0ZTogcmVxdWlyZSgnLi9hY3Rpb25zL1NpbXVsYXRlJyksXG4gICAgICAgIFRyYWNrOiByZXF1aXJlKCcuL2FjdGlvbnMvVHJhY2snKSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgQ3JlYXRlIGFuIEl0ZXJhdG9yIG9mIEFjdG9ycyB3aXRoIHNlbGVjdGVkIGRvbSBlbGVtZW50c1xuICAgICAgICAqL1xuICAgICAgICBzZWxlY3Q6IHJlcXVpcmUoJy4vaW5jL3NlbGVjdC1hY3RvcicpLFxuXG4gICAgICAgIGVhc2U6IHJlcXVpcmUoJy4vYWN0aW9ucy90d2Vlbi9wcmVzZXQtZWFzaW5nJyksXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIE1vZGlmeSBwcm9wZXJ0aWVzIG9mIGluYnVpbHQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgICAgICovXG4gICAgICAgIG1vZGlmeUVhc2U6IHJlcXVpcmUoJy4vYWN0aW9ucy90d2Vlbi9tb2RpZnktZWFzZScpLFxuXG4gICAgICAgIGFkZFZhbHVlVHlwZTogdHlwZXMgPT4ge1xuICAgICAgICAgICAgdmFsdWVUeXBlcy5leHRlbmQodHlwZXMpO1xuICAgICAgICAgICAgcmV0dXJuIFBvcG1vdGlvbjtcbiAgICAgICAgfSxcblxuICAgICAgICBjYWxjOiByZXF1aXJlKCcuL2luYy9jYWxjJyksXG4gICAgICAgIHV0aWxzOiByZXF1aXJlKCcuL2luYy91dGlscycpXG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb3Btb3Rpb247Il19
return exports;
})());

/*
    Add optional custom value type support
*/
popmotion.addValueType({
    alpha: ((function() {
var exports = {};
"use strict";

exports = {
    defaultProps: {
        min: 0,
        max: 1
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDYixnQkFBWSxFQUFFO0FBQ1YsV0FBRyxFQUFFLENBQUM7QUFDTixXQUFHLEVBQUUsQ0FBQztLQUNUO0NBQ0osQ0FBQyIsImZpbGUiOiJhbHBoYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMVxuICAgIH1cbn07Il19
return exports;
})()),
    angle: ((function() {
var exports = {};
'use strict';

exports = {
    defaultProps: {
        unit: 'deg'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDYixnQkFBWSxFQUFFO0FBQ1YsWUFBSSxFQUFFLEtBQUs7S0FDZDtDQUNKLENBQUMiLCJmaWxlIjoiYW5nbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ2RlZydcbiAgICB9XG59OyJdfQ==
return exports;
})()),
    px: __small$_5,
    hsl: __small$_6,
    rgb: __small$_7,
    hex: __small$_8,
    color: __small$_9,
    positions: ((function() {
var exports = {};
'use strict';

var createDelimited = __small$_36,
    pxDefaults = __small$_5.defaultProps,
    splitSpaceDelimited = __small$_41,
    terms = __small$_40.positions;

exports = {

    defaultProps: pxDefaults,

    /*
        Split positions in format "X Y Z"
        
        @param [string]: Position values
            "20% 30% 0" -> {20%, 30%, 0}
            "20% 30%" -> {20%, 30%}
            "20%" -> {20%, 20%}
    */
    split: function (value) {
        var positions = splitSpaceDelimited(value),
            numPositions = positions.length,
            splitValue = {
            X: positions[0],
            Y: numPositions > 1 ? positions[1] : positions[0]
        };

        if (numPositions > 2) {
            splitValue.Z = positions[2];
        }

        return splitValue;
    },

    combine: function (values) {
        return createDelimited(values, terms, ' ');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUM7SUFDNUQsVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZO0lBQ3pDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQztJQUNyRSxLQUFLLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsU0FBUyxDQUFDOztBQUV2RCxNQUFNLENBQUMsT0FBTyxHQUFHOztBQUViLGdCQUFZLEVBQUUsVUFBVTs7Ozs7Ozs7OztBQVV4QixTQUFLLEVBQUUsVUFBQSxLQUFLLEVBQUk7QUFDWixZQUFJLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7WUFDdEMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxNQUFNO1lBQy9CLFVBQVUsR0FBRztBQUNULGFBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQ2YsYUFBQyxFQUFFLEFBQUMsWUFBWSxHQUFHLENBQUMsR0FBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN0RCxDQUFDOztBQUVOLFlBQUksWUFBWSxHQUFHLENBQUMsRUFBRTtBQUNsQixzQkFBVSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0I7O0FBRUQsZUFBTyxVQUFVLENBQUM7S0FDckI7O0FBRUQsV0FBTyxFQUFFLFVBQUEsTUFBTTtlQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQztLQUFBO0NBQ3pELENBQUMiLCJmaWxlIjoicG9zaXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBweERlZmF1bHRzID0gcmVxdWlyZSgnLi9weCcpLmRlZmF1bHRQcm9wcyxcbiAgICBzcGxpdFNwYWNlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkJyksXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5wb3NpdGlvbnM7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiBweERlZmF1bHRzLFxuICAgICAgICBcbiAgICAvKlxuICAgICAgICBTcGxpdCBwb3NpdGlvbnMgaW4gZm9ybWF0IFwiWCBZIFpcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQb3NpdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjAlIDMwJSAwXCIgLT4gezIwJSwgMzAlLCAwfVxuICAgICAgICAgICAgXCIyMCUgMzAlXCIgLT4gezIwJSwgMzAlfVxuICAgICAgICAgICAgXCIyMCVcIiAtPiB7MjAlLCAyMCV9XG4gICAgKi9cbiAgICBzcGxpdDogdmFsdWUgPT4ge1xuICAgICAgICB2YXIgcG9zaXRpb25zID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSksXG4gICAgICAgICAgICBudW1Qb3NpdGlvbnMgPSBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IHtcbiAgICAgICAgICAgICAgICBYOiBwb3NpdGlvbnNbMF0sXG4gICAgICAgICAgICAgICAgWTogKG51bVBvc2l0aW9ucyA+IDEpID8gcG9zaXRpb25zWzFdIDogcG9zaXRpb25zWzBdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGlmIChudW1Qb3NpdGlvbnMgPiAyKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlLlogPSBwb3NpdGlvbnNbMl07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogdmFsdWVzID0+IGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnICcpXG59OyJdfQ==
return exports;
})()),
    dimensions: ((function() {
var exports = {};
'use strict';

var terms = __small$_40.dimensions,
    pxDefaults = __small$_5.defaultProps,
    createDelimited = __small$_36,
    splitSpaceDelimited = __small$_41;

exports = {

    defaultProps: pxDefaults,

    /*
        Split dimensions in format "Top Right Bottom Left"
        
        @param [string]: Dimension values
            "20px 0 30px 40px" -> {20px, 0, 30px, 40px}
            "20px 0 30px" -> {20px, 0, 30px, 0}
            "20px 0" -> {20px, 0, 20px, 0}
            "20px" -> {20px, 20px, 20px, 20px}
        
        @return [object]: Object with T/R/B/L metrics
    */
    split: function (value) {
        var dimensions = splitSpaceDelimited(value),
            numDimensions = dimensions.length,
            jumpBack = numDimensions !== 1 ? 2 : 1,
            i = 0,
            j = 0,
            splitValue = {};

        for (; i < 4; i++) {
            splitValue[terms[i]] = dimensions[j];

            // Jump back (to start) counter if we've reached the end of our values
            j++;
            j = j === numDimensions ? j - jumpBack : j;
        }

        return splitValue;
    },

    combine: function (values) {
        return createDelimited(values, terms, ' ');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9kaW1lbnNpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsVUFBVTtJQUNuRCxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVk7SUFDekMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztJQUM1RCxtQkFBbUIsR0FBRyxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQzs7QUFFMUUsTUFBTSxDQUFDLE9BQU8sR0FBRzs7QUFFYixnQkFBWSxFQUFFLFVBQVU7Ozs7Ozs7Ozs7Ozs7QUFheEIsU0FBSyxFQUFFLFVBQUEsS0FBSyxFQUFJO0FBQ1osWUFBSSxVQUFVLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLGFBQWEsR0FBRyxVQUFVLENBQUMsTUFBTTtZQUNqQyxRQUFRLEdBQUcsQUFBQyxhQUFhLEtBQUssQ0FBQyxHQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3hDLENBQUMsR0FBRyxDQUFDO1lBQ0wsQ0FBQyxHQUFHLENBQUM7WUFDTCxVQUFVLEdBQUcsRUFBRSxDQUFDOztBQUVwQixlQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDZixzQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7OztBQUFDLEFBR3JDLGFBQUMsRUFBRSxDQUFDO0FBQ0osYUFBQyxHQUFHLEFBQUMsQ0FBQyxLQUFLLGFBQWEsR0FBSSxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztTQUNoRDs7QUFFRCxlQUFPLFVBQVUsQ0FBQztLQUNyQjs7QUFFRCxXQUFPLEVBQUUsVUFBQSxNQUFNO2VBQUksZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDO0tBQUE7Q0FDekQsQ0FBQyIsImZpbGUiOiJkaW1lbnNpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykuZGltZW5zaW9ucyxcbiAgICBweERlZmF1bHRzID0gcmVxdWlyZSgnLi9weCcpLmRlZmF1bHRQcm9wcyxcbiAgICBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgc3BsaXRTcGFjZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogcHhEZWZhdWx0cyxcbiAgICBcbiAgICAvKlxuICAgICAgICBTcGxpdCBkaW1lbnNpb25zIGluIGZvcm1hdCBcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IERpbWVuc2lvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHggNDBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCA0MHB4fVxuICAgICAgICAgICAgXCIyMHB4IDAgMzBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4IDBcIiAtPiB7MjBweCwgMCwgMjBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweFwiIC0+IHsyMHB4LCAyMHB4LCAyMHB4LCAyMHB4fVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggVC9SL0IvTCBtZXRyaWNzXG4gICAgKi9cbiAgICBzcGxpdDogdmFsdWUgPT4ge1xuICAgICAgICB2YXIgZGltZW5zaW9ucyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpLFxuICAgICAgICAgICAgbnVtRGltZW5zaW9ucyA9IGRpbWVuc2lvbnMubGVuZ3RoLFxuICAgICAgICAgICAganVtcEJhY2sgPSAobnVtRGltZW5zaW9ucyAhPT0gMSkgPyAyIDogMSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgaiA9IDAsXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgZm9yICg7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbdGVybXNbaV1dID0gZGltZW5zaW9uc1tqXTtcblxuICAgICAgICAgICAgLy8gSnVtcCBiYWNrICh0byBzdGFydCkgY291bnRlciBpZiB3ZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2Ygb3VyIHZhbHVlc1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgaiA9IChqID09PSBudW1EaW1lbnNpb25zKSA/IGogLSBqdW1wQmFjayA6IGo7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogdmFsdWVzID0+IGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnICcpXG59OyJdfQ==
return exports;
})()),
    scale: ((function() {
var exports = {};
"use strict";

exports = {
    defaultProps: {
        init: 1
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDYixnQkFBWSxFQUFFO0FBQ1YsWUFBSSxFQUFFLENBQUM7S0FDVjtDQUNKLENBQUMiLCJmaWxlIjoic2NhbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgaW5pdDogMVxuICAgIH1cbn07Il19
return exports;
})()),
    shadow: ((function() {
var exports = {};
'use strict';

var color = __small$_9,
    utils = __small$_35,
    pxDefaults = __small$_5.defaultProps,
    terms = __small$_40.shadow,
    splitSpaceDelimited = __small$_41,
    createDelimited = __small$_36,
    shadowTerms = terms.slice(0, 4);

exports = {

    defaultProps: utils.merge(color.defaultProps, {
        X: pxDefaults,
        Y: pxDefaults,
        Radius: pxDefaults,
        Spread: pxDefaults
    }),

    /*
        Split shadow properties "X Y Radius Spread Color"
        
        @param [string]: Shadow property
        @return [object]
    */
    split: function (value) {
        var bits = splitSpaceDelimited(value),
            numBits = bits.length,
            hasReachedColor = false,
            colorProp = '',
            thisBit,
            i = 0,
            splitValue = {};

        for (; i < numBits; i++) {
            thisBit = bits[i];

            // If we've reached the color property, append to color string
            if (hasReachedColor || color.test(thisBit)) {
                hasReachedColor = true;
                colorProp += thisBit;
            } else {
                splitValue[terms[i]] = thisBit;
            }
        }

        return utils.merge(splitValue, color.split(colorProp));
    },

    combine: function (values) {
        return createDelimited(values, shadowTerms, ' ') + color.combine(values);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQzFCLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDO0lBQy9CLFVBQVUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWTtJQUN6QyxLQUFLLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTTtJQUMvQyxtQkFBbUIsR0FBRyxPQUFPLENBQUMsc0NBQXNDLENBQUM7SUFDckUsZUFBZSxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztJQUM1RCxXQUFXLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRW5DLE1BQU0sQ0FBQyxPQUFPLEdBQUc7O0FBRWIsZ0JBQVksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7QUFDMUMsU0FBQyxFQUFFLFVBQVU7QUFDYixTQUFDLEVBQUUsVUFBVTtBQUNiLGNBQU0sRUFBRSxVQUFVO0FBQ2xCLGNBQU0sRUFBRSxVQUFVO0tBQ3JCLENBQUM7Ozs7Ozs7O0FBUUYsU0FBSyxFQUFFLFVBQUEsS0FBSyxFQUFJO0FBQ1osWUFBSSxJQUFJLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDO1lBQ2pDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTTtZQUNyQixlQUFlLEdBQUcsS0FBSztZQUN2QixTQUFTLEdBQUcsRUFBRTtZQUNkLE9BQU87WUFDUCxDQUFDLEdBQUcsQ0FBQztZQUNMLFVBQVUsR0FBRyxFQUFFLENBQUM7O0FBRXBCLGVBQU8sQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNyQixtQkFBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7OztBQUFDLEFBR2xCLGdCQUFJLGVBQWUsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ3hDLCtCQUFlLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLHlCQUFTLElBQUksT0FBTyxDQUFDO2FBRXhCLE1BQU07QUFDSCwwQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQzthQUNsQztTQUNKOztBQUVELGVBQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBQzFEOztBQUVELFdBQU8sRUFBRSxVQUFBLE1BQU07ZUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztLQUFBO0NBQ3ZGLENBQUMiLCJmaWxlIjoic2hhZG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvbG9yID0gcmVxdWlyZSgnLi9jb2xvcicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgcHhEZWZhdWx0cyA9IHJlcXVpcmUoJy4vcHgnKS5kZWZhdWx0UHJvcHMsXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5zaGFkb3csXG4gICAgc3BsaXRTcGFjZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZCcpLFxuICAgIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBzaGFkb3dUZXJtcyA9IHRlcm1zLnNsaWNlKDAsNCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB1dGlscy5tZXJnZShjb2xvci5kZWZhdWx0UHJvcHMsIHtcbiAgICAgICAgWDogcHhEZWZhdWx0cyxcbiAgICAgICAgWTogcHhEZWZhdWx0cyxcbiAgICAgICAgUmFkaXVzOiBweERlZmF1bHRzLFxuICAgICAgICBTcHJlYWQ6IHB4RGVmYXVsdHNcbiAgICB9KSxcblxuICAgIC8qXG4gICAgICAgIFNwbGl0IHNoYWRvdyBwcm9wZXJ0aWVzIFwiWCBZIFJhZGl1cyBTcHJlYWQgQ29sb3JcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBTaGFkb3cgcHJvcGVydHlcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgc3BsaXQ6IHZhbHVlID0+IHtcbiAgICAgICAgdmFyIGJpdHMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKSxcbiAgICAgICAgICAgIG51bUJpdHMgPSBiaXRzLmxlbmd0aCxcbiAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IGZhbHNlLFxuICAgICAgICAgICAgY29sb3JQcm9wID0gJycsXG4gICAgICAgICAgICB0aGlzQml0LFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1CaXRzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNCaXQgPSBiaXRzW2ldO1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wZXJ0eSwgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBjb2xvci50ZXN0KHRoaXNCaXQpKSB7XG4gICAgICAgICAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb2xvclByb3AgKz0gdGhpc0JpdDtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlW3Rlcm1zW2ldXSA9IHRoaXNCaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB1dGlscy5tZXJnZShzcGxpdFZhbHVlLCBjb2xvci5zcGxpdChjb2xvclByb3ApKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogdmFsdWVzID0+IGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHNoYWRvd1Rlcm1zLCAnICcpICsgY29sb3IuY29tYmluZSh2YWx1ZXMpXG59OyJdfQ==
return exports;
})()),
    complex: ((function() {
var exports = {};
'use strict';

var utils = __small$_35,
    each = utils.each,
    floatRegex = /(-)?(\d[\d\.]*)/g,
    generateToken = function (key) {
    return '${' + key + '}';
};

exports = {
    test: function (value) {
        var matches = value.match(floatRegex);
        return utils.isArray(matches) && matches.length > 1;
    },

    template: function (value) {
        var counter = 0;
        return value.replace(floatRegex, function () {
            return generateToken(counter++);
        });
    },

    split: function (value) {
        var splitValue = {},
            matches = value.match(floatRegex),
            numMatches = matches.length;

        for (var i = 0; i < numMatches; i++) {
            splitValue[i] = matches[i];
        }

        return splitValue;
    },

    combine: function (values, template) {
        var combinedValue = template;

        each(values, function (key, value) {
            combinedValue = combinedValue.replace(generateToken(key), value);
        });

        return combinedValue;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQztJQUMvQixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUk7SUFDakIsVUFBVSxHQUFHLGtCQUFrQjtJQUUvQixhQUFhLEdBQUcsVUFBVSxHQUFHLEVBQUU7QUFDM0IsV0FBTyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztDQUMzQixDQUFDOztBQUVOLE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDYixRQUFJLEVBQUUsVUFBVSxLQUFLLEVBQUU7QUFDbkIsWUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0QyxlQUFRLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUU7S0FDekQ7O0FBRUQsWUFBUSxFQUFFLFVBQVUsS0FBSyxFQUFFO0FBQ3ZCLFlBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNoQixlQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO21CQUFNLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUFBLENBQUMsQ0FBQztLQUNwRTs7QUFFRCxTQUFLLEVBQUUsVUFBVSxLQUFLLEVBQUU7QUFDcEIsWUFBSSxVQUFVLEdBQUcsRUFBRTtZQUNmLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUNqQyxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQzs7QUFFaEMsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNqQyxzQkFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5Qjs7QUFFRCxlQUFPLFVBQVUsQ0FBQztLQUNyQjs7QUFFRCxXQUFPLEVBQUUsVUFBVSxNQUFNLEVBQUUsUUFBUSxFQUFFO0FBQ2pDLFlBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQzs7QUFFN0IsWUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUs7QUFDekIseUJBQWEsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwRSxDQUFDLENBQUM7O0FBRUgsZUFBTyxhQUFhLENBQUM7S0FDeEI7Q0FDSixDQUFDIiwiZmlsZSI6ImNvbXBsZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaCxcbiAgICBmbG9hdFJlZ2V4ID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nLFxuXG4gICAgZ2VuZXJhdGVUb2tlbiA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuICckeycgKyBrZXkgKyAnfSc7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdmFsdWUubWF0Y2goZmxvYXRSZWdleCk7XG4gICAgICAgIHJldHVybiAodXRpbHMuaXNBcnJheShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDEpO1xuICAgIH0sXG5cbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoZmxvYXRSZWdleCwgKCkgPT4gZ2VuZXJhdGVUb2tlbihjb3VudGVyKyspKTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9LFxuICAgICAgICAgICAgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKGZsb2F0UmVnZXgpLFxuICAgICAgICAgICAgbnVtTWF0Y2hlcyA9IG1hdGNoZXMubGVuZ3RoO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1NYXRjaGVzOyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbaV0gPSBtYXRjaGVzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMsIHRlbXBsYXRlKSB7XG4gICAgICAgIHZhciBjb21iaW5lZFZhbHVlID0gdGVtcGxhdGU7XG5cbiAgICAgICAgZWFjaCh2YWx1ZXMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb21iaW5lZFZhbHVlID0gY29tYmluZWRWYWx1ZS5yZXBsYWNlKGdlbmVyYXRlVG9rZW4oa2V5KSwgdmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY29tYmluZWRWYWx1ZTtcbiAgICB9XG59OyJdfQ==
return exports;
})())
});

/*
    Predefined roles
*/
popmotion.attr = __small$_15;
popmotion.css = __small$_16;
popmotion.svg = __small$_17;
popmotion.drawPath = __small$_18;

exports = popmotion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2FkL21vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBRWIsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQzs7Ozs7QUFBQyxBQUt4QyxTQUFTLENBQUMsWUFBWSxDQUFDO0FBQ25CLFNBQUssRUFBRSxPQUFPLENBQUMsc0JBQXNCLENBQUM7QUFDdEMsU0FBSyxFQUFFLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztBQUN0QyxNQUFFLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixDQUFDO0FBQ2hDLE9BQUcsRUFBRSxPQUFPLENBQUMsb0JBQW9CLENBQUM7QUFDbEMsT0FBRyxFQUFFLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQztBQUNsQyxPQUFHLEVBQUUsT0FBTyxDQUFDLG9CQUFvQixDQUFDO0FBQ2xDLFNBQUssRUFBRSxPQUFPLENBQUMsc0JBQXNCLENBQUM7QUFDdEMsYUFBUyxFQUFFLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQztBQUM5QyxjQUFVLEVBQUUsT0FBTyxDQUFDLDJCQUEyQixDQUFDO0FBQ2hELFNBQUssRUFBRSxPQUFPLENBQUMsc0JBQXNCLENBQUM7QUFDdEMsVUFBTSxFQUFFLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztBQUN4QyxXQUFPLEVBQUUsT0FBTyxDQUFDLHdCQUF3QixDQUFDO0NBQzdDLENBQUM7Ozs7O0FBQUMsQUFLSCxTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ25ELFNBQVMsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDaEQsU0FBUyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNoRCxTQUFTLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDOztBQUUzRCxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyIsImZpbGUiOiJtb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIHBvcG1vdGlvbiA9IHJlcXVpcmUoJy4uL3BvcG1vdGlvbicpO1xuXG4vKlxuICAgIEFkZCBvcHRpb25hbCBjdXN0b20gdmFsdWUgdHlwZSBzdXBwb3J0XG4qL1xucG9wbW90aW9uLmFkZFZhbHVlVHlwZSh7XG4gICAgYWxwaGE6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2FscGhhJyksXG4gICAgYW5nbGU6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJyksXG4gICAgcHg6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3B4JyksXG4gICAgaHNsOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9oc2wnKSxcbiAgICByZ2I6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3JnYicpLFxuICAgIGhleDogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvaGV4JyksXG4gICAgY29sb3I6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyksXG4gICAgcG9zaXRpb25zOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnKSxcbiAgICBkaW1lbnNpb25zOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9kaW1lbnNpb25zJyksXG4gICAgc2NhbGU6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3NjYWxlJyksXG4gICAgc2hhZG93OiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9zaGFkb3cnKSxcbiAgICBjb21wbGV4OiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb21wbGV4Jylcbn0pO1xuXG4vKlxuICAgIFByZWRlZmluZWQgcm9sZXNcbiovXG5wb3Btb3Rpb24uYXR0ciA9IHJlcXVpcmUoJy4uL3JvbGVzL2F0dHIvYXR0clJvbGUnKTtcbnBvcG1vdGlvbi5jc3MgPSByZXF1aXJlKCcuLi9yb2xlcy9jc3MvY3NzUm9sZScpO1xucG9wbW90aW9uLnN2ZyA9IHJlcXVpcmUoJy4uL3JvbGVzL3N2Zy9zdmdSb2xlJyk7XG5wb3Btb3Rpb24uZHJhd1BhdGggPSByZXF1aXJlKCcuLi9yb2xlcy9wYXRoL2RyYXdQYXRoUm9sZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBvcG1vdGlvbjsiXX0=
return exports;
})()),
    UIref = window.ui;

popmotion.noConflict = function () {
    window.ui = UIref;
};

window.ui = window.popmotion = popmotion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2FkL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDbEMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7O0FBRXRCLFNBQVMsQ0FBQyxVQUFVLEdBQUcsWUFBWTtBQUMvQixVQUFNLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztDQUNyQixDQUFDOztBQUVGLE1BQU0sQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMiLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHBvcG1vdGlvbiA9IHJlcXVpcmUoJy4vbW9kdWxlLmpzJyksXG4gICAgVUlyZWYgPSB3aW5kb3cudWk7XG5cbnBvcG1vdGlvbi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy51aSA9IFVJcmVmO1xufTtcblxud2luZG93LnVpID0gd2luZG93LnBvcG1vdGlvbiA9IHBvcG1vdGlvbjsiXX0=
return exports;
})();