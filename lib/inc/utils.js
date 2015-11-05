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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQUksbUJBQW1CLEdBQUcsQ0FBQyxPQUFPLEVBQUcsS0FBSyxDQUFDO0lBRXZDLFdBQVcsR0FBRyxVQUFBLEdBQUc7V0FBSyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQUM7Ozs7Ozs7O0FBUTlELE9BQU8sR0FBRyxVQUFBLFFBQVE7V0FBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUFBO0lBRTNFLEtBQUssR0FBRzs7Ozs7O0FBT0osUUFBSSxFQUFFLFVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBSztBQUN2QixZQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ3RDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDOztBQUUxQixhQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzlCLGdCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNiLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXRCLGdCQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO0FBQy9CLHNCQUFNO2FBQ1Q7U0FDSjtLQUNKOzs7Ozs7Ozs7OztBQVdELGNBQVUsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUs7QUFDbEIsWUFBSSxVQUFVLEdBQUcsS0FBSztZQUNsQixHQUFHLEdBQUcsRUFBRSxDQUFDOztBQUViLGFBQUssR0FBRyxJQUFJLENBQUMsRUFBRTtBQUNYLGdCQUFJLENBQUMsQ0FB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LENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUN0RyxDQUFDLENBQUM7U0FDTjs7QUFFRCxlQUFPLFNBQVMsQ0FBQztLQUNwQjs7Ozs7Ozs7OztBQVVELGdCQUFZLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDckIsWUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztBQUVoRCxlQUFPO0FBQ0gsaUJBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLGdCQUFJLEVBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNyQixDQUFDO0tBQ0w7Ozs7Ozs7OztBQVNELGdCQUFZLEVBQUUsVUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFLO0FBQy9CLFlBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFBLEFBQUM7WUFDekIsTUFBTSxHQUFHLENBQUMsR0FBSSxDQUFDLEdBQUcsS0FBSyxBQUFDO1lBQ3hCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFFdEQsZUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQztLQUMzRDs7Ozs7OztBQU9ELGVBQVcsRUFBRTtlQUFNLEFBQUMsT0FBTyxXQUFXLEtBQUssV0FBVyxJQUFJLFdBQVcsQ0FBQyxHQUFHLEdBQUksV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO0tBQUE7Q0FDeEgsQ0FBQzs7QUFFTixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBwcm90ZWN0ZWRQcm9wZXJ0aWVzID0gWydzY29wZScsICAnZG9tJ10sXG4gICAgXG4gICAgaXNQcm90ZWN0ZWQgPSBrZXkgPT4gKHByb3RlY3RlZFByb3BlcnRpZXMuaW5kZXhPZihrZXkpICE9PSAtMSksXG5cbiAgICAvKlxuICAgICAgICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuICAgICovXG4gICAgdmFyVHlwZSA9IHZhcmlhYmxlID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpLFxuXG4gICAgdXRpbHMgPSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBJdGVyYXRlIG92ZXIgYW4gb2JqZWN0IGFuZCBmaXJlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGl0ZW0gaW4gaXRcblxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBQcm9wZXJ0aWVzXG4gICAgICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgdG8gZmlyZVxuICAgICAgICAqL1xuICAgICAgICBlYWNoOiAocHJvcHMsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IHByb3BzID8gT2JqZWN0LmtleXMocHJvcHMpIDogW10sXG4gICAgICAgICAgICAgICAgbnVtS2V5cyA9IGtleXMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUtleXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBrZXlzW2ldLFxuICAgICAgICAgICAgICAgICAgICBwcm9wID0gcHJvcHNba2V5XTtcblxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayhrZXksIHByb3ApID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgSGFzIG9uZSBvYmplY3QgY2hhbmdlZCBmcm9tIHRoZSBvdGhlclxuICAgICAgICAgICAgXG4gICAgICAgICAgICBDb21wYXJlcyB0aGUgdHdvIHByb3ZpZGVkIGlucHV0cyBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZXkgYXJlIGRpZmZlcmVudFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEFcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICAgICAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4gICAgICAgICovXG4gICAgICAgIGhhc0NoYW5nZWQ6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIGtleSA9ICcnO1xuXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gaGFzQ2hhbmdlZDtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuICAgICAgICAqL1xuICAgICAgICBpc0Z1bmM6IG9iaiA9PiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbicsXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuICAgICAgICAqL1xuICAgICAgICBpc051bTogbnVtID0+IHR5cGVvZiBudW0gPT09ICdudW1iZXInLFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4gICAgICAgICovXG4gICAgICAgIGlzT2JqOiBvYmogPT4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcsXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuICAgICAgICAqL1xuICAgICAgICBpc1N0cmluZzogc3RyID0+IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnLFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBJcyB1dGlscyBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnQ/XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IElmIHV0aWxzIGxvb2tzIGxpa2UgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50XG4gICAgICAgICovXG4gICAgICAgIGlzUmVsYXRpdmVWYWx1ZTogdmFsdWUgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YgJiYgdmFsdWUuaW5kZXhPZignPScpID4gMCkgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4gICAgICAgICovXG4gICAgICAgIGlzQXJyYXk6IGFyciA9PiB2YXJUeXBlKGFycikgPT09ICdBcnJheScsXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29weSBvYmplY3Qgb3IgYXJyYXlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQ2hlY2tzIHdoZXRoZXIgYmFzZSBpcyBhbiBhcnJheSBvciBvYmplY3QgYW5kIG1ha2VzXG4gICAgICAgICAgICBhcHByb3ByaWF0ZSBjb3B5XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogQXJyYXkgb3Igb2JqZWN0IHRvIGNvcHlcbiAgICAgICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogTmV3IGNvcHkgb2YgYXJyYXkgb3Igb2JqZWN0XG4gICAgICAgICovXG4gICAgICAgIGNvcHk6IGJhc2UgPT4gdXRpbHMuaXNBcnJheShiYXNlKSA/IHV0aWxzLmNvcHlBcnJheShiYXNlKSA6IHV0aWxzLmNvcHlPYmplY3QoYmFzZSksXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRGVlcCBjb3B5IGFuIG9iamVjdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBJdGVyYXRlcyBvdmVyIGFuIG9iamVjdCBhbmQgY3JlYXRlcyBhIG5ldyBjb3B5IG9mIGV2ZXJ5IGl0ZW0sXG4gICAgICAgICAgICBkZWVwIGNvcHlpbmcgaWYgaXQgZmluZHMgYW55IG9iamVjdHMvYXJyYXlzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIGNvcHlcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogTmV3IGNvcHkgb2Ygb2JqZWN0XG4gICAgICAgICovXG4gICAgICAgIGNvcHlPYmplY3Q6IGJhc2UgPT4ge1xuICAgICAgICAgICAgdmFyIG5ld09iamVjdCA9IHt9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB1dGlscy5lYWNoKGJhc2UsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSAodXRpbHMuaXNPYmoodmFsdWUpICYmICFpc1Byb3RlY3RlZChrZXkpKSA/IHV0aWxzLmNvcHkodmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG5ld09iamVjdDtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEZWVwIGNvcHkgYW4gYXJyYXlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgTG9vcHMgdGhyb3VnaCBhbiBhcnJheSBhbmQgY3JlYXRlcyBhIG5ldyBjb3B5IG9mIGV2ZXJ5IGl0ZW0sXG4gICAgICAgICAgICBkZWVwIGNvcHlpbmcgaWYgaXQgZmluZHMgYW55IG9iamVjdHMvYXJyYXlzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbYXJyYXldOiBBcnJheSB0byBjb3B5XG4gICAgICAgICAgICBAcmV0dXJuIFthcnJheV06IE5ldyBjb3B5IG9mIGFycmF5XG4gICAgICAgICovXG4gICAgICAgIGNvcHlBcnJheTogYmFzZSA9PiBiYXNlLFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIE5vbi1kZXN0cnVjdGl2ZSBtZXJnZSBvZiBvYmplY3Qgb3IgYXJyYXlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBBcnJheSBvciBvYmplY3QgdG8gdXNlIGFzIGJhc2VcbiAgICAgICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogQXJyYXkgb3Igb2JqZWN0IHRvIG92ZXJ3cml0ZSBiYXNlIHdpdGhcbiAgICAgICAgICAgIEByZXR1cm4gW2FycmF5IHx8IG9iamVjdF06IE5ldyBhcnJheSBvciBvYmplY3RcbiAgICAgICAgKi9cbiAgICAgICAgbWVyZ2U6IChiYXNlLCBvdmVyd3JpdGUpID0+ICh1dGlscy5pc0FycmF5KGJhc2UpKSA/IHV0aWxzLmNvcHlBcnJheShvdmVyd3JpdGUpIDogdXRpbHMubWVyZ2VPYmplY3QoYmFzZSwgb3ZlcndyaXRlKSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBOb24tZGVzdHJ1Y3RpdmUgbWVyZ2Ugb2Ygb2JqZWN0XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIHVzZSBhcyBiYXNlXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byBvdmVyd3JpdGUgYmFzZSB3aXRoXG4gICAgICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBOZXcgb2JqZWN0XG4gICAgICAgICovXG4gICAgICAgIG1lcmdlT2JqZWN0OiAoYmFzZSwgb3ZlcndyaXRlKSA9PiB7XG4gICAgICAgICAgICB2YXIgaGFzQmFzZSA9IHV0aWxzLmlzT2JqKGJhc2UpLFxuICAgICAgICAgICAgICAgIG5ld09iamVjdCA9IGhhc0Jhc2UgPyB1dGlscy5jb3B5KGJhc2UpIDogdXRpbHMuY29weShvdmVyd3JpdGUpO1xuXG4gICAgICAgICAgICBpZiAoaGFzQmFzZSkge1xuICAgICAgICAgICAgICAgIHV0aWxzLmVhY2gob3ZlcndyaXRlLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9ICh1dGlscy5pc09iaih2YWx1ZSkgJiYgIWlzUHJvdGVjdGVkKGtleSkpID8gdXRpbHMubWVyZ2UoYmFzZVtrZXldLCB2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ld09iamVjdDtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgICAgICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4gICAgICAgICovXG4gICAgICAgIHNwbGl0VmFsVW5pdDogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3BsaXRWYWwgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogc3BsaXRWYWxbMV0sXG4gICAgICAgICAgICAgICAgdW5pdDogIHNwbGl0VmFsWzJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4gICAgICAgICovXG4gICAgICAgIHN0ZXBQcm9ncmVzczogKHByb2dyZXNzLCBzdGVwcykgPT4ge1xuICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSksXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpLFxuICAgICAgICAgICAgICAgIHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuICAgICAgICAqL1xuICAgICAgICBjdXJyZW50VGltZTogKCkgPT4gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KSA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxzOyJdfQ==