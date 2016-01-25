'use strict';

exports.__esModule = true;
function push() {
    var _Array$prototype$push;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [this].concat(args));

    if (this.length >= this._maxSize) {
        this.shift();
    }
}

var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = '$1-$2';
var HAS_PERFORMANCE_NOW = typeof performance !== 'undefined' && performance.now;

/*
    Get var type as string
    
    @param: Variable to test
    @return [string]: Returns, for instance 'Object' if [object Object]
*/
var varType = function (variable) {
    return Object.prototype.toString.call(variable).slice(8, -1);
};

/*
    Convert camelCase to dash-case

    @param [string]
    @return [string]
*/
var camelToDash = exports.camelToDash = function (string) {
    return string.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};

/*
    Create an auto-culling buffer array

    @param [array]
    @param [int]
    @return [array]
*/
var createBuffer = exports.createBuffer = function () {
    var maxSize = arguments.length <= 0 || arguments[0] === undefined ? 3 : arguments[0];
    var array = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

    array.push = push;
    array._maxSize = maxSize || 0;

    return array;
};

var createDelimited = exports.createDelimited = function (values, terms, delimiter, chop) {
    var combined = '';

    terms.forEach(function (term) {
        if (values.hasOwnProperty(key)) {
            combined += values[key] + delimiter;
        }
    });

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
var createFunctionString = exports.createFunctionString = function (value, prefix) {
    return prefix + '(' + value + ')';
};

/*
    Generate current timestamp
    
    @return [timestamp]: Current UNIX timestamp
*/
var currentTime = exports.currentTime = function () {
    return HAS_PERFORMANCE_NOW ? performance.now() : new Date().getTime();
};

/*
    Iterate over an object and fire a callback for every item in it

    @param [object]: Object to iterate over
    @param [function]: Callback to fire
*/
var each = exports.each = function (object, callback) {
    var keys = object ? Object.keys(object) : [];
    var numKeys = keys.length;

    for (var i = 0; i < numKeys; i++) {
        var _key2 = keys[i];
        var prop = object[_key2];

        callback(prop, _key2, object);
    }
};

/*
    Split color string into map of color properties

    "rgba(255, 255, 255, 0)", ["Red", 'Green", "Blue", "Alpha"]

    { Red: 255... }
*/
var getColorValues = exports.getColorValues = function (value, colorTerms) {
    var colorValues = {};
    var colors = splitCommaDelimited(getValueFromFunctionString(value));

    colorTerms.forEach(function (term, i) {
        return colorTerms[term] = colors[i] !== undefined ? colors[i] : 1;
    });

    return colorValues;
};

/*
    Get value from function string

    "translateX(20px)" -> "20px"
*/
var getValueFromFunctionString = exports.getValueFromFunctionString = function (value) {
    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
};

/*
    Check if two objects have changed from each other
    
    @param [object]: Input A
    @param [object]: Input B
    @return [boolean]: True if different
*/
var hasChanged = exports.hasChanged = function (a, b) {
    var changed = false;

    each(a, function (value, key) {
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
var hasProperty = exports.hasProperty = function (object, propertyName) {
    return object.hasOwnProperty(propertyName) && object[propertyName] !== undefined;
};

/*
    Is utils var an array ? 
    
    @param: Variable to test
    @return [boolean]: Returns true if utils.varType === 'Array'
*/
var isArray = exports.isArray = function (arr) {
    return varType(arr) === 'Array';
};

/*
    Is utils var a function ? 
    
    @param: Variable to test
    @return [boolean]: Returns true if utils.varType === 'Function'
*/
var isFunc = exports.isFunc = function (obj) {
    return varType(obj) === 'Function';
};

/*
    Is utils var a number?
    
    @param: Variable to test
    @return [boolean]: Returns true if typeof === 'number'
*/
var isNum = exports.isNum = function (num) {
    return typeof num === 'number';
};

/*
    Is utils var an object?
    
    @param: Variable to test
    @return [boolean]: Returns true if typeof === 'object'
*/
var isObj = exports.isObj = function (obj) {
    return typeof obj === 'object';
};

/*
    Is utils a relative value assignment?
    
    @param [string]: Variable to test
    @return [boolean]: If utils looks like a relative value assignment
*/
var isRelativeValue = exports.isRelativeValue = function (value) {
    return value && value.indexOf && value.indexOf('=') > 0 ? true : false;
};

/*
    Is utils var a string ? 
    
    @param: Variable to test
    @return [boolean]: Returns true if typeof str === 'string'
*/
var isString = exports.isString = function (str) {
    return typeof str === 'string';
};

/*
    @param [string || NodeList]:
        If string, treated as selector.
        If not, treated as preexisting NodeList

    @return [Array]
*/
var selectDom = exports.selectDom = function (selector) {
    var nodes = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;
    return nodes.length ? [].slice.call(nodes) : [].push(nodes);
};

/*
    Split comma-delimited string

    "foo,bar" -> ["foo", "bar"]

    @param [string]
    @return [array]
*/
var splitCommaDelimited = exports.splitCommaDelimited = function (value) {
    return isString(value) ? value.split(/,\s*/) : [value];
};

/*
    Split space-delimited string

    "foo bar" -> ["foo", "bar"]

    @param [string]
    @return [array]
*/
var splitSpaceDelimited = exports.splitSpaceDelimited = function (value) {
    return isString(value) ? value.split(' ') : [value];
};

/*
    Split a value into a value/unit object
    
        "200px" -> { value: 200, unit: "px" }
        
    @param [string]: Value to split
    @return [object]: Object with value and unit props
*/
var splitValueUnit = exports.splitValueUnit = function (value) {
    var splitVal = value.match(/(-?\d*\.?\d*)(.*)/);

    return {
        value: parseFloat(splitVal[1]),
        unit: splitVal[2]
    };
};

/*
    Convert number to x decimal places

    @param [number]
    @param [number]
    @return [number]
*/
var toDecimal = exports.toDecimal = function (num) {
    var precision = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

    precision = Math.pow(10, precision);
    return Math.round(num * precision) / precision;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBUyxJQUFJLEdBQVU7OztzQ0FBTixJQUFJO0FBQUosWUFBSTs7O0FBQ2pCLDZCQUFBLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFDLElBQUksTUFBQSx5QkFBQyxJQUFJLFNBQUssSUFBSSxFQUFDLENBQUM7O0FBRXpDLFFBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQzlCLFlBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNoQjtDQUNKOztBQUVELElBQU0sa0JBQWtCLEdBQUcsaUJBQWlCLENBQUM7QUFDN0MsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7QUFDakMsSUFBTSxtQkFBbUIsR0FBSSxPQUFPLFdBQVcsS0FBSyxXQUFXLElBQUksV0FBVyxDQUFDLEdBQUcsQUFBQzs7Ozs7Ozs7QUFBQyxBQVFwRixJQUFNLE9BQU8sR0FBRyxVQUFBLFFBQVE7V0FBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUFBOzs7Ozs7OztBQUFDLEFBUTNFLElBQU0sV0FBVyxXQUFYLFdBQVcsR0FBRyxVQUFDLE1BQU07V0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUMsV0FBVyxFQUFFO0NBQUE7Ozs7Ozs7OztBQUFDLEFBU25HLElBQU0sWUFBWSxXQUFaLFlBQVksR0FBRyxZQUE2QjtRQUE1QixPQUFPLHlEQUFHLENBQUM7UUFBRSxLQUFLLHlEQUFHLEVBQUU7O0FBQ2hELFNBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLFNBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQzs7QUFFOUIsV0FBTyxLQUFLLENBQUM7Q0FD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U0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDO0NBQ2xELENBQUMiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBwdXNoKC4uLmFyZ3MpIHtcbiAgICBBcnJheS5wcm90b3R5cGUucHVzaC5jYWxsKHRoaXMsIC4uLmFyZ3MpO1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoID49IHRoaXMuX21heFNpemUpIHtcbiAgICAgICAgdGhpcy5zaGlmdCgpO1xuICAgIH1cbn1cblxuY29uc3QgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG5jb25zdCBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbmNvbnN0IEhBU19QRVJGT1JNQU5DRV9OT1cgPSAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cpO1xuXG4vKlxuICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xuY29uc3QgdmFyVHlwZSA9IHZhcmlhYmxlID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xuXG4vKlxuICAgIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmV4cG9ydCBjb25zdCBjYW1lbFRvRGFzaCA9IChzdHJpbmcpID0+IHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcblxuLypcbiAgICBDcmVhdGUgYW4gYXV0by1jdWxsaW5nIGJ1ZmZlciBhcnJheVxuXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcGFyYW0gW2ludF1cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG5leHBvcnQgY29uc3QgY3JlYXRlQnVmZmVyID0gKG1heFNpemUgPSAzLCBhcnJheSA9IFtdKSA9PiB7XG4gICAgYXJyYXkucHVzaCA9IHB1c2g7XG4gICAgYXJyYXkuX21heFNpemUgPSBtYXhTaXplIHx8IDA7XG5cbiAgICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEZWxpbWl0ZWQgPSAodmFsdWVzLCB0ZXJtcywgZGVsaW1pdGVyLCBjaG9wKSA9PiB7XG4gICAgbGV0IGNvbWJpbmVkID0gJyc7XG5cbiAgICB0ZXJtcy5mb3JFYWNoKCh0ZXJtKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY29tYmluZWQgKz0gdmFsdWVzW2tleV0gKyBkZWxpbWl0ZXI7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjaG9wKSB7XG4gICAgICAgIGNvbWJpbmVkID0gY29tYmluZWQuc2xpY2UoMCwgLWNob3ApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5lZDtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgZnVuY3Rpb24gc3RyaW5nXG5cbiAgICAnMjBweCcsICd0cmFuc2xhdGUnIC0+ICd0cmFuc2xhdGUoMjBweCknXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtzdHJpbmddXG4qL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gKHZhbHVlLCBwcmVmaXgpID0+IGAke3ByZWZpeH0oJHt2YWx1ZX0pYDtcblxuLypcbiAgICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICAgIFxuICAgIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG5leHBvcnQgY29uc3QgY3VycmVudFRpbWUgPSAoKSA9PiBIQVNfUEVSRk9STUFOQ0VfTk9XID8gcGVyZm9ybWFuY2Uubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuLypcbiAgICBJdGVyYXRlIG92ZXIgYW4gb2JqZWN0IGFuZCBmaXJlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGl0ZW0gaW4gaXRcblxuICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIGl0ZXJhdGUgb3ZlclxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBmaXJlXG4qL1xuZXhwb3J0IGNvbnN0IGVhY2ggPSAob2JqZWN0LCBjYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBvYmplY3QgPyBPYmplY3Qua2V5cyhvYmplY3QpIDogW107XG4gICAgY29uc3QgbnVtS2V5cyA9IGtleXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1LZXlzOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgY29uc3QgcHJvcCA9IG9iamVjdFtrZXldO1xuXG4gICAgICAgIGNhbGxiYWNrKHByb3AsIGtleSwgb2JqZWN0KTtcbiAgICB9XG59XG5cbi8qXG4gICAgU3BsaXQgY29sb3Igc3RyaW5nIGludG8gbWFwIG9mIGNvbG9yIHByb3BlcnRpZXNcblxuICAgIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLCBbXCJSZWRcIiwgJ0dyZWVuXCIsIFwiQmx1ZVwiLCBcIkFscGhhXCJdXG5cbiAgICB7IFJlZDogMjU1Li4uIH1cbiovXG5leHBvcnQgY29uc3QgZ2V0Q29sb3JWYWx1ZXMgPSAodmFsdWUsIGNvbG9yVGVybXMpID0+IHtcbiAgICBjb25zdCBjb2xvclZhbHVlcyA9IHt9O1xuICAgIGNvbnN0IGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpKTtcblxuICAgIGNvbG9yVGVybXMuZm9yRWFjaCgodGVybSwgaSkgPT4gY29sb3JUZXJtc1t0ZXJtXSA9IChjb2xvcnNbaV0gIT09IHVuZGVmaW5lZCkgPyBjb2xvcnNbaV0gOiAxKTtcblxuICAgIHJldHVybiBjb2xvclZhbHVlcztcbn1cblxuLypcbiAgICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcblxuICAgIFwidHJhbnNsYXRlWCgyMHB4KVwiIC0+IFwiMjBweFwiXG4qL1xuZXhwb3J0IGNvbnN0IGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gKHZhbHVlKSA9PiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XG5cbi8qXG4gICAgQ2hlY2sgaWYgdHdvIG9iamVjdHMgaGF2ZSBjaGFuZ2VkIGZyb20gZWFjaCBvdGhlclxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuKi9cbmV4cG9ydCBjb25zdCBoYXNDaGFuZ2VkID0gKGEsIGIpID0+IHtcbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgZWFjaChhLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBpZiAoaGFzUHJvcGVydHkoYiwga2V5KSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2hhbmdlZDtcbn07XG5cbi8qXG4gICAgQ2hlY2sgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eSBhbmQgaXQgaXNuJ3QgdW5kZWZpbmVkXG5cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtib29sZWFuXVxuKi9cbmV4cG9ydCBjb25zdCBoYXNQcm9wZXJ0eSA9IChvYmplY3QsIHByb3BlcnR5TmFtZSkgPT4gb2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkgJiYgb2JqZWN0W3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZDtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IChhcnIpID0+IHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5JztcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbmV4cG9ydCBjb25zdCBpc0Z1bmMgPSAob2JqKSA9PiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbmV4cG9ydCBjb25zdCBpc051bSA9IChudW0pID0+IHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xuZXhwb3J0IGNvbnN0IGlzT2JqID0gKG9iaikgPT4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG5cbi8qXG4gICAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbmV4cG9ydCBjb25zdCBpc1JlbGF0aXZlVmFsdWUgPSAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDApID8gdHJ1ZSA6IGZhbHNlO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAoc3RyKSA9PiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcblxuLypcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBOb2RlTGlzdF06XG4gICAgICAgIElmIHN0cmluZywgdHJlYXRlZCBhcyBzZWxlY3Rvci5cbiAgICAgICAgSWYgbm90LCB0cmVhdGVkIGFzIHByZWV4aXN0aW5nIE5vZGVMaXN0XG5cbiAgICBAcmV0dXJuIFtBcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc2VsZWN0RG9tID0gKHNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3Qgbm9kZXMgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xuICAgIHJldHVybiAobm9kZXMubGVuZ3RoKSA/IFtdLnNsaWNlLmNhbGwobm9kZXMpIDogW10ucHVzaChub2Rlcyk7XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICAgIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcblxuLypcbiAgICBTcGxpdCBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyBiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzcGxpdFNwYWNlRGVsaW1pdGVkID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgnICcpIDogW3ZhbHVlXTtcblxuLypcbiAgICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICAgIFxuICAgICAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgICAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG5leHBvcnQgY29uc3Qgc3BsaXRWYWx1ZVVuaXQgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBzcGxpdFZhbCA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3BsaXRWYWxbMV0pLFxuICAgICAgICB1bml0OiAgc3BsaXRWYWxbMl1cbiAgICB9O1xufTtcblxuLypcbiAgICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcmV0dXJuIFtudW1iZXJdXG4qL1xuZXhwb3J0IGNvbnN0IHRvRGVjaW1hbCA9IChudW0sIHByZWNpc2lvbiA9IDIpID0+IHtcbiAgICBwcmVjaXNpb24gPSAxMCAqKiBwcmVjaXNpb247XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG4iXX0=