(function() {
var exports = {};
'use strict';

var _popmotion = ((function() {
var exports = {};
var __small$_14 = (function() {
var exports = {};
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
        if (values.hasOwnProperty(term)) {
            combined += values[term] + delimiter;
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
        var key = keys[i];
        var prop = object[key];

        callback(prop, key, object);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBUyxJQUFULEdBQXVCOzs7c0NBQU47O0tBQU07O0FBQ25CLG1DQUFNLFNBQU4sQ0FBZ0IsSUFBaEIsRUFBcUIsSUFBckIsK0JBQTBCLGFBQVMsS0FBbkMsRUFEbUI7O0FBR25CLFFBQUksS0FBSyxNQUFMLElBQWUsS0FBSyxRQUFMLEVBQWU7QUFDOUIsYUFBSyxLQUFMLEdBRDhCO0tBQWxDO0NBSEo7O0FBUUEsSUFBTSxxQkFBcUIsaUJBQXJCO0FBQ04sSUFBTSxtQkFBbUIsT0FBbkI7QUFDTixJQUFNLHNCQUF1QixPQUFPLFdBQVAsS0FBdUIsV0FBdkIsSUFBc0MsWUFBWSxHQUFaOzs7Ozs7OztBQVFuRSxJQUFNLFVBQVU7V0FBWSxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsSUFBMUIsQ0FBK0IsUUFBL0IsRUFBeUMsS0FBekMsQ0FBK0MsQ0FBL0MsRUFBa0QsQ0FBQyxDQUFEO0NBQTlEOzs7Ozs7OztBQVFULElBQU0sb0NBQWMsVUFBQyxNQUFEO1dBQVksT0FBTyxPQUFQLENBQWUsa0JBQWYsRUFBbUMsZ0JBQW5DLEVBQXFELFdBQXJEO0NBQVo7Ozs7Ozs7OztBQVNwQixJQUFNLHNDQUFlLFlBQTZCO1FBQTVCLGdFQUFVLGlCQUFrQjtRQUFmLDhEQUFRLGtCQUFPOztBQUNyRCxVQUFNLElBQU4sR0FBYSxJQUFiLENBRHFEO0FBRXJELFVBQU0sUUFBTixHQUFpQixXQUFXLENBQVgsQ0FGb0M7O0FBSXJELFdBQU8sS0FBUCxDQUpxRDtDQUE3Qjs7QUFPckIsSUFBTSw0Q0FBa0IsVUFBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixTQUFoQixFQUEyQixJQUEzQixFQUFvQztBQUMvRCxRQUFJLFdBQVcsRUFBWCxDQUQyRDs7QUFHL0QsVUFBTSxPQUFOLENBQWMsVUFBQyxJQUFELEVBQVU7QUFDcEIsWUFBSSxPQUFPLGNBQVAsQ0FBc0IsSUFBdEIsQ0FB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QztBQUU3QyxXQUFPLEtBQUssS0FBTCxDQUFXLE1BQU0sU0FBTixDQUFYLEdBQThCLFNBQTlCLENBRnNDO0NBQXhCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcHVzaCguLi5hcmdzKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLnB1c2guY2FsbCh0aGlzLCAuLi5hcmdzKTtcblxuICAgIGlmICh0aGlzLmxlbmd0aCA+PSB0aGlzLl9tYXhTaXplKSB7XG4gICAgICAgIHRoaXMuc2hpZnQoKTtcbiAgICB9XG59XG5cbmNvbnN0IENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xuY29uc3QgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG5jb25zdCBIQVNfUEVSRk9STUFOQ0VfTk9XID0gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KTtcblxuLypcbiAgICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbmNvbnN0IHZhclR5cGUgPSB2YXJpYWJsZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcblxuLypcbiAgICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG5leHBvcnQgY29uc3QgY2FtZWxUb0Rhc2ggPSAoc3RyaW5nKSA9PiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG5cbi8qXG4gICAgQ3JlYXRlIGFuIGF1dG8tY3VsbGluZyBidWZmZXIgYXJyYXlcblxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHBhcmFtIFtpbnRdXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUJ1ZmZlciA9IChtYXhTaXplID0gMywgYXJyYXkgPSBbXSkgPT4ge1xuICAgIGFycmF5LnB1c2ggPSBwdXNoO1xuICAgIGFycmF5Ll9tYXhTaXplID0gbWF4U2l6ZSB8fCAwO1xuXG4gICAgcmV0dXJuIGFycmF5O1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURlbGltaXRlZCA9ICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApID0+IHtcbiAgICBsZXQgY29tYmluZWQgPSAnJztcblxuICAgIHRlcm1zLmZvckVhY2goKHRlcm0pID0+IHtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgICAgICAgY29tYmluZWQgKz0gdmFsdWVzW3Rlcm1dICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY2hvcCkge1xuICAgICAgICBjb21iaW5lZCA9IGNvbWJpbmVkLnNsaWNlKDAsIC1jaG9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluZWQ7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBhIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgJzIwcHgnLCAndHJhbnNsYXRlJyAtPiAndHJhbnNsYXRlKDIwcHgpJ1xuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVGdW5jdGlvblN0cmluZyA9ICh2YWx1ZSwgcHJlZml4KSA9PiBgJHtwcmVmaXh9KCR7dmFsdWV9KWA7XG5cbi8qXG4gICAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICBcbiAgICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRUaW1lID0gKCkgPT4gSEFTX1BFUkZPUk1BTkNFX05PVyA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbi8qXG4gICAgSXRlcmF0ZSBvdmVyIGFuIG9iamVjdCBhbmQgZmlyZSBhIGNhbGxiYWNrIGZvciBldmVyeSBpdGVtIGluIGl0XG5cbiAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byBpdGVyYXRlIG92ZXJcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgdG8gZmlyZVxuKi9cbmV4cG9ydCBjb25zdCBlYWNoID0gKG9iamVjdCwgY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBrZXlzID0gb2JqZWN0ID8gT2JqZWN0LmtleXMob2JqZWN0KSA6IFtdO1xuICAgIGNvbnN0IG51bUtleXMgPSBrZXlzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtS2V5czsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICAgIGNvbnN0IHByb3AgPSBvYmplY3Rba2V5XTtcblxuICAgICAgICBjYWxsYmFjayhwcm9wLCBrZXksIG9iamVjdCk7XG4gICAgfVxufTtcblxuLypcbiAgICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gICAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICAgIHsgUmVkOiAyNTUuLi4gfVxuKi9cbmV4cG9ydCBjb25zdCBnZXRDb2xvclZhbHVlcyA9ICh2YWx1ZSwgY29sb3JUZXJtcykgPT4ge1xuICAgIGNvbnN0IGNvbG9yVmFsdWVzID0ge307XG4gICAgY29uc3QgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2YWx1ZSkpO1xuXG4gICAgY29sb3JUZXJtcy5mb3JFYWNoKCh0ZXJtLCBpKSA9PiBjb2xvclRlcm1zW3Rlcm1dID0gKGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yc1tpXSA6IDEpO1xuXG4gICAgcmV0dXJuIGNvbG9yVmFsdWVzO1xufTtcblxuLypcbiAgICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcblxuICAgIFwidHJhbnNsYXRlWCgyMHB4KVwiIC0+IFwiMjBweFwiXG4qL1xuZXhwb3J0IGNvbnN0IGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gKHZhbHVlKSA9PiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XG5cbi8qXG4gICAgQ2hlY2sgaWYgdHdvIG9iamVjdHMgaGF2ZSBjaGFuZ2VkIGZyb20gZWFjaCBvdGhlclxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuKi9cbmV4cG9ydCBjb25zdCBoYXNDaGFuZ2VkID0gKGEsIGIpID0+IHtcbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgZWFjaChhLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBpZiAoaGFzUHJvcGVydHkoYiwga2V5KSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2hhbmdlZDtcbn07XG5cbi8qXG4gICAgQ2hlY2sgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eSBhbmQgaXQgaXNuJ3QgdW5kZWZpbmVkXG5cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtib29sZWFuXVxuKi9cbmV4cG9ydCBjb25zdCBoYXNQcm9wZXJ0eSA9IChvYmplY3QsIHByb3BlcnR5TmFtZSkgPT4gb2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkgJiYgb2JqZWN0W3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZDtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IChhcnIpID0+IHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5JztcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbmV4cG9ydCBjb25zdCBpc0Z1bmMgPSAob2JqKSA9PiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbmV4cG9ydCBjb25zdCBpc051bSA9IChudW0pID0+IHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xuZXhwb3J0IGNvbnN0IGlzT2JqID0gKG9iaikgPT4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG5cbi8qXG4gICAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbmV4cG9ydCBjb25zdCBpc1JlbGF0aXZlVmFsdWUgPSAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDApID8gdHJ1ZSA6IGZhbHNlO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAoc3RyKSA9PiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcblxuLypcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBOb2RlTGlzdF06XG4gICAgICAgIElmIHN0cmluZywgdHJlYXRlZCBhcyBzZWxlY3Rvci5cbiAgICAgICAgSWYgbm90LCB0cmVhdGVkIGFzIHByZWV4aXN0aW5nIE5vZGVMaXN0XG5cbiAgICBAcmV0dXJuIFtBcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc2VsZWN0RG9tID0gKHNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3Qgbm9kZXMgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xuICAgIHJldHVybiAobm9kZXMubGVuZ3RoKSA/IFtdLnNsaWNlLmNhbGwobm9kZXMpIDogW10ucHVzaChub2Rlcyk7XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICAgIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcblxuLypcbiAgICBTcGxpdCBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyBiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzcGxpdFNwYWNlRGVsaW1pdGVkID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgnICcpIDogW3ZhbHVlXTtcblxuLypcbiAgICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICAgIFxuICAgICAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgICAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG5leHBvcnQgY29uc3Qgc3BsaXRWYWx1ZVVuaXQgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBzcGxpdFZhbCA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3BsaXRWYWxbMV0pLFxuICAgICAgICB1bml0OiAgc3BsaXRWYWxbMl1cbiAgICB9O1xufTtcblxuLypcbiAgICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcmV0dXJuIFtudW1iZXJdXG4qL1xuZXhwb3J0IGNvbnN0IHRvRGVjaW1hbCA9IChudW0sIHByZWNpc2lvbiA9IDIpID0+IHtcbiAgICBwcmVjaXNpb24gPSAxMCAqKiBwcmVjaXNpb247XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG4iXX0=
return exports;
})();
var __small$_13 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;
exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.restrict = exports.relativeValue = exports.random = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.offset = exports.getProgressFromValue = exports.getValueFromProgress = exports.hypotenuse = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;

var _utils = __small$_14;

var ZERO_POINT = {
    x: 0,
    y: 0,
    z: 0
};

var distance1D = function (a, b) {
    return Math.abs(a - b);
};

/*
    Angle between points
    
    Translates the hypothetical line so that the 'from' coordinates
    are at 0,0, then return the angle using .angleFromCenter()
    
    @param [object]: X and Y coordinates of from point
    @param [object]: X and Y cordinates of to point
    @return [radian]: Angle between the two points in radians
*/
var angle = exports.angle = function (a) {
    var b = arguments.length <= 1 || arguments[1] === undefined ? ZERO_POINT : arguments[1];
    return radiansToDegrees(Math.atan2(a.x - b.x, a.y - b.y));
};

/*
    Convert degrees to radians
    
    @param [number]: Value in degrees
    @return [number]: Value in radians
*/
var degreesToRadians = exports.degreesToRadians = function (degrees) {
    return degrees * Math.PI / 180;
};

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
var dilate = exports.dilate = function (a, b, dilation) {
    return a + (b - a) * dilation;
};

/*
    Distance
    
    Returns the distance between two n dimensional points.
    
    @param [object/number]: x and y or just x of point A
    @param [object/number]: (optional): x and y or just x of point B
    @return [number]: The distance between the two points
*/
var distance = exports.distance = function (a) {
    var b = arguments.length <= 1 || arguments[1] === undefined ? ZERO_POINT : arguments[1];

    // 1D dimensions
    if ((0, _utils.isNum)(a)) {
        return distance1D(a, b);

        // Multi-dimensional
    } else {
            var xDelta = distance1D(a.x, b.x);
            var yDelta = distance1D(a.y, b.y);
            var zDelta = (0, _utils.isNum)(a.z) ? distance1D(a.z, b.z) : 0;

            return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
        }
};

/*
    Hypotenuse
    
    Returns the hypotenuse, side C, given the lengths of sides A and B.
    
    @param [number]: Length of A
    @param [number]: Length of B
    @return [number]: Length of C
*/
var hypotenuse = exports.hypotenuse = function (a, b) {
    return Math.sqrt(a * a + b * b);
};

/*
    Value in range from progress
    
    Given a lower limit and an upper limit, we return the value within
    that range as expressed by progress (a number from 0-1)
    
    @param [number]: The progress between lower and upper limits expressed 0-1
    @param [number]: Lower limit of range
    @param [number]: Upper limit of range
    @return [number]: Value as calculated from progress within range (not limited within range)
*/
var getValueFromProgress = exports.getValueFromProgress = function (progress, from, to) {
    return -progress * from + progress * to + from;
};

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
var getProgressFromValue = exports.getProgressFromValue = function (value, from, to) {
    return (value - from) / (to - from);
};

/*
    Offset between two objects of numbers

    If property is found in b not present in a, it will return `0` for that prop.
    
    @param [Point]: First object
    @param [Point]: Second object
    @return [Offset]: Distance metrics between two points
*/
var offset = exports.offset = function (a, b) {
    var offset = {};

    (0, _utils.each)(b, function (value, key) {
        offset[key] = (0, _utils.hasProperty)(a, key) ? value - a[key] : 0;
    });

    return offset;
};

/*
    Point from angle and distance
    
    @param [object]: 2D point of origin
    @param [number]: Angle from origin
    @param [number]: Distance from origin
    @return [object]: Calculated 2D point
*/
var pointFromAngleAndDistance = exports.pointFromAngleAndDistance = function (origin, angle, distance) {
    angle = degreesToRadians(angle);

    return {
        x: distance * Math.cos(angle) + origin.x,
        y: distance * Math.sin(angle) + origin.y
    };
};

/*
    Convert radians to degrees
    
    @param [number]: Value in radians
    @return [number]: Value in degrees
*/
var radiansToDegrees = exports.radiansToDegrees = function (radians) {
    return radians * 180 / Math.PI;
};

/*
    Return random number between range
    
    @param [number] (optional): Output minimum
    @param [number] (optional): Output maximum
    @return [number]: Random number within range, or 0 and 1 if none provided
*/
var random = exports.random = function () {
    var min = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var max = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
    return Math.random() * (max - min) + min;
};

/*
    Calculate relative value
    
    Takes the operator and value from a string, ie "+=5", and applies
    to the current value to resolve a new target.
    
    @param [number]: Current value
    @param [string]: Relative value
    @return [number]: New value
*/
var relativeValue = exports.relativeValue = function (current, relative) {
    var newValue = current;
    var equation = relative.split('=');
    var operator = equation[0];

    var _splitValueUnit = (0, _utils.splitValueUnit)(equation[1]);

    var unit = _splitValueUnit.unit;
    var value = _splitValueUnit.value;

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
};

/*
    Restrict value to range
    
    Return value within the range of lowerLimit and upperLimit
    
    @param [number]: Value to keep within range
    @param [number]: Lower limit of range
    @param [number]: Upper limit of range
    @return [number]: Value as limited within given range
*/
var restrict = exports.restrict = function (value, min, max) {
    return Math.max(Math.min(value, max), min);
};

/*
    Framerate-independent smoothing

    @param [number]: New value
    @param [number]: Old value
    @param [number]: Frame duration
    @param [number] (optional): Smoothing (0 is none)
*/
var smooth = exports.smooth = function (newValue, oldValue, duration) {
    var smoothing = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
    return (0, _utils.toDecimal)(oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration));
};

/*
    Convert x per second to per frame velocity based on fps
    
    @param [number]: Unit per second
    @param [number]: Frame duration in ms
*/
var speedPerFrame = exports.speedPerFrame = function (xps, frameDuration) {
    return (0, _utils.isNum)(xps) ? xps / (1000 / frameDuration) : 0;
};

/*
    Convert velocity into velicity per second
    
    @param [number]: Unit per frame
    @param [number]: Frame duration in ms
*/
var speedPerSecond = exports.speedPerSecond = function (velocity, frameDuration) {
    return velocity * (1000 / frameDuration);
};

/*
    Create stepped version of 0-1 progress
    
    @param [number]: Current value
    @param [int]: Number of steps
    @return [number]: Stepped value
*/
var stepProgress = exports.stepProgress = function (progress, steps) {
    var segment = 1 / (steps - 1);
    var target = 1 - 1 / steps;
    var progressOfTarget = Math.min(progress / target, 1);

    return Math.floor(progressOfTarget / segment) * segment;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvY2FsYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBUUEsSUFBTSxhQUFhO0FBQ2YsT0FBRyxDQUFIO0FBQ0EsT0FBRyxDQUFIO0FBQ0EsT0FBRyxDQUFIO0NBSEU7O0FBTU4sSUFBTSxhQUFhLFVBQUMsQ0FBRCxFQUFJLENBQUo7V0FBVSxLQUFLLEdBQUwsQ0FBUyxJQUFJLENBQUo7Q0FBbkI7Ozs7Ozs7Ozs7OztBQVlaLElBQU0sd0JBQVEsVUFBQyxDQUFEO1FBQUksMERBQUk7V0FBZSxpQkFBaUIsS0FBSyxLQUFMLENBQVcsRUFBRSxDQUFGLEdBQU0sRUFBRSxDQUFGLEVBQUssRUFBRSxDQUFGLEdBQU0sRUFBRSxDQUFGLENBQTdDO0NBQXZCOzs7Ozs7OztBQVFkLElBQU0sOENBQW1CLFVBQUMsT0FBRDtXQUFhLFVBQVUsS0FBSyxFQUFMLEdBQVUsR0FBcEI7Q0FBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQnpCLElBQU0sMEJBQVMsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFPLFFBQVA7V0FBb0IsSUFBSyxDQUFDLElBQUksQ0FBSixDQUFELEdBQVUsUUFBVjtDQUF6Qjs7Ozs7Ozs7Ozs7QUFXZixJQUFNLDhCQUFXLFVBQUMsQ0FBRCxFQUF1QjtRQUFuQiwwREFBSSwwQkFBZTs7O0FBRTNDLFFBQUksV0FoRUosTUFnRUksQ0FBTSxDQUFOLENBQUosRUFBYztBQUNWLGVBQU8sV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFQOzs7QUFEVSxLQUFkLE1BSU87QUFDSCxnQkFBTSxTQUFTLFdBQVcsRUFBRSxDQUFGLEVBQUssRUFBRSxDQUFGLENBQXpCLENBREg7QUFFSCxnQkFBTSxTQUFTLFdBQVcsRUFBRSxDQUFGLEVBQUssRUFBRSxDQUFGLENBQXpCLENBRkg7QUFHSCxnQkFBTSxTQUFTLFdBdkVuQixNQXVFb0IsQ0FBTSxFQUFFLENBQUYsQ0FBUCxHQUFlLFdBQVcsRUFBRSxDQUFGLEVBQUssRUFBRSxDQUFGLENBQS9CLEdBQXNDLENBQXRDLENBSFo7O0FBS0gsbUJBQU8sS0FBSyxJQUFMLENBQVUsU0FBQyxRQUFVLEVBQVgsWUFBaUIsUUFBVSxFQUEzQixZQUFpQyxRQUFVLEVBQTNDLENBQWpCLENBTEc7U0FKUDtDQUZvQjs7Ozs7Ozs7Ozs7QUF3QmpCLElBQU0sa0NBQWEsVUFBQyxDQUFELEVBQUksQ0FBSjtXQUFVLEtBQUssSUFBTCxDQUFVLENBQUMsR0FBSSxDQUFKLEdBQVUsSUFBSSxDQUFKO0NBQS9COzs7Ozs7Ozs7Ozs7O0FBYW5CLElBQU0sc0RBQXVCLFVBQUMsUUFBRCxFQUFXLElBQVgsRUFBaUIsRUFBakI7V0FBd0IsQ0FBRyxRQUFGLEdBQWEsSUFBYixHQUFzQixXQUFXLEVBQVgsR0FBaUIsSUFBeEM7Q0FBeEI7Ozs7Ozs7Ozs7Ozs7O0FBYzdCLElBQU0sc0RBQXVCLFVBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxFQUFkO1dBQXFCLENBQUMsUUFBUSxJQUFSLENBQUQsSUFBa0IsS0FBSyxJQUFMLENBQWxCO0NBQXJCOzs7Ozs7Ozs7OztBQVc3QixJQUFNLDBCQUFTLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBVTtBQUM1QixRQUFNLFNBQVMsRUFBVCxDQURzQjs7QUFHNUIsZUFqSUEsS0FpSUEsQ0FBSyxDQUFMLEVBQVEsVUFBQyxLQUFELEVBQVEsR0FBUixFQUFnQjtBQUNwQixlQUFPLEdBQVAsSUFBYyxXQWpJbEIsWUFpSWtCLENBQVksQ0FBWixFQUFlLEdBQWYsSUFBc0IsUUFBUSxFQUFFLEdBQUYsQ0FBUixHQUFpQixDQUF2QyxDQURNO0tBQWhCLENBQVIsQ0FINEI7O0FBTzVCLFdBQU8sTUFBUCxDQVA0QjtDQUFWOzs7Ozs7Ozs7O0FBa0JmLElBQU0sZ0VBQTRCLFVBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsUUFBaEIsRUFBNkI7QUFDbEUsWUFBUSxpQkFBaUIsS0FBakIsQ0FBUixDQURrRTs7QUFHbEUsV0FBTztBQUNILFdBQUcsV0FBVyxLQUFLLEdBQUwsQ0FBUyxLQUFULENBQVgsR0FBNkIsT0FBTyxDQUFQO0FBQ2hDLFdBQUcsV0FBVyxLQUFLLEdBQUwsQ0FBUyxLQUFULENBQVgsR0FBNkIsT0FBTyxDQUFQO0tBRnBDLENBSGtFO0NBQTdCOzs7Ozs7OztBQWVsQyxJQUFNLDhDQUFtQixVQUFDLE9BQUQ7V0FBYSxVQUFVLEdBQVYsR0FBZ0IsS0FBSyxFQUFMO0NBQTdCOzs7Ozs7Ozs7QUFTekIsSUFBTSwwQkFBUztRQUFDLDREQUFNO1FBQUcsNERBQU07V0FBTSxLQUFLLE1BQUwsTUFBaUIsTUFBTSxHQUFOLENBQWpCLEdBQThCLEdBQTlCO0NBQXRCOzs7Ozs7Ozs7Ozs7QUFZZixJQUFNLHdDQUFnQixVQUFDLE9BQUQsRUFBVSxRQUFWLEVBQXVCO0FBQ2hELFFBQUksV0FBVyxPQUFYLENBRDRDO0FBRWhELFFBQU0sV0FBVyxTQUFTLEtBQVQsQ0FBZSxHQUFmLENBQVgsQ0FGMEM7QUFHaEQsUUFBTSxXQUFXLFNBQVMsQ0FBVCxDQUFYLENBSDBDOzswQkFJMUIsV0FyTHRCLGVBcUxzQixDQUFlLFNBQVMsQ0FBVCxDQUFmLEVBSjBCOztRQUkxQyw0QkFKMEM7UUFJcEMsOEJBSm9DOztBQU1oRCxZQUFRLFdBQVcsS0FBWCxDQUFSLENBTmdEOztBQVFoRCxZQUFRLFFBQVI7QUFDQSxhQUFLLEdBQUw7QUFDSSx3QkFBWSxLQUFaLENBREo7QUFFSSxrQkFGSjtBQURBLGFBSUssR0FBTDtBQUNJLHdCQUFZLEtBQVosQ0FESjtBQUVJLGtCQUZKO0FBSkEsYUFPSyxHQUFMO0FBQ0ksd0JBQVksS0FBWixDQURKO0FBRUksa0JBRko7QUFQQSxhQVVLLEdBQUw7QUFDSSx3QkFBWSxLQUFaLENBREo7QUFFSSxrQkFGSjtBQVZBLEtBUmdEOztBQXVCaEQsUUFBSSxJQUFKLEVBQVU7QUFDTixvQkFBWSxJQUFaLENBRE07S0FBVjs7QUFJQSxXQUFPLFFBQVAsQ0EzQmdEO0NBQXZCOzs7Ozs7Ozs7Ozs7QUF3Q3RCLElBQU0sOEJBQVcsVUFBQyxLQUFELEVBQVEsR0FBUixFQUFhLEdBQWI7V0FBcUIsS0FBSyxHQUFMLENBQVMsS0FBSyxHQUFMLENBQVMsS0FBVCxFQUFnQixHQUFoQixDQUFULEVBQStCLEdBQS9CO0NBQXJCOzs7Ozs7Ozs7O0FBVWpCLElBQU0sMEJBQVMsVUFBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixRQUFyQjtRQUErQixrRUFBWTtXQUFNLFdBbE9uRSxVQWtPbUUsQ0FBVSxXQUFZLFlBQVksV0FBVyxRQUFYLENBQVosR0FBbUMsS0FBSyxHQUFMLENBQVMsU0FBVCxFQUFvQixRQUFwQixDQUFuQztDQUF2RTs7Ozs7Ozs7QUFRZixJQUFNLHdDQUFnQixVQUFDLEdBQUQsRUFBTSxhQUFOO1dBQXdCLFdBNU9qRCxNQTRPa0QsQ0FBTSxHQUFOLENBQUQsR0FBZSxPQUFPLE9BQU8sYUFBUCxDQUFQLEdBQStCLENBQTlDO0NBQXhCOzs7Ozs7OztBQVF0QixJQUFNLDBDQUFpQixVQUFDLFFBQUQsRUFBVyxhQUFYO1dBQTZCLFlBQVksT0FBTyxhQUFQLENBQVo7Q0FBN0I7Ozs7Ozs7OztBQVN2QixJQUFNLHNDQUFlLFVBQUMsUUFBRCxFQUFXLEtBQVgsRUFBcUI7QUFDN0MsUUFBTSxVQUFVLEtBQUssUUFBUSxDQUFSLENBQUwsQ0FENkI7QUFFN0MsUUFBTSxTQUFTLElBQUssSUFBSSxLQUFKLENBRnlCO0FBRzdDLFFBQU0sbUJBQW1CLEtBQUssR0FBTCxDQUFTLFdBQVcsTUFBWCxFQUFtQixDQUE1QixDQUFuQixDQUh1Qzs7QUFLN0MsV0FBTyxLQUFLLEtBQUwsQ0FBVyxtQkFBbUIsT0FBbkIsQ0FBWCxHQUF5QyxPQUF6QyxDQUxzQztDQUFyQiIsImZpbGUiOiJjYWxjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBlYWNoLFxuICAgIGhhc1Byb3BlcnR5LFxuICAgIGlzTnVtLFxuICAgIHNwbGl0VmFsdWVVbml0LFxuICAgIHRvRGVjaW1hbFxufSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgWkVST19QT0lOVCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgejogMFxufTtcblxuY29uc3QgZGlzdGFuY2UxRCA9IChhLCBiKSA9PiBNYXRoLmFicyhhIC0gYik7XG5cbi8qXG4gICAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgICBcbiAgICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgICBhcmUgYXQgMCwwLCB0aGVuIHJldHVybiB0aGUgYW5nbGUgdXNpbmcgLmFuZ2xlRnJvbUNlbnRlcigpXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBhbmdsZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG5cbi8qXG4gICAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xuZXhwb3J0IGNvbnN0IGRlZ3JlZXNUb1JhZGlhbnMgPSAoZGVncmVlcykgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG5cbi8qXG4gICAgRGlsYXRlXG4gICAgXG4gICAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICAgIFxuICAgIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICAgIFxuICAgIGEgLS0tLS0tLS0tIGJcbiAgICBcbiAgICB0b1xuICAgIFxuICAgIGEgLS0tLSBiXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG5leHBvcnQgY29uc3QgZGlsYXRlID0gKGEsIGIsIGRpbGF0aW9uKSA9PiBhICsgKChiIC0gYSkgKiBkaWxhdGlvbik7XG5cbi8qXG4gICAgRGlzdGFuY2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgICBcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IGRpc3RhbmNlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiB7XG4gICAgLy8gMUQgZGltZW5zaW9uc1xuICAgIGlmIChpc051bShhKSkge1xuICAgICAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgICAgIGNvbnN0IHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgICAgICBjb25zdCB6RGVsdGEgPSAoaXNOdW0oYS56KSkgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgoeERlbHRhICoqIDIpICsgKHlEZWx0YSAqKiAyKSArICh6RGVsdGEgKiogMikpO1xuICAgIH1cbn07XG4gXG4vKlxuICAgIEh5cG90ZW51c2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuKi9cbmV4cG9ydCBjb25zdCBoeXBvdGVudXNlID0gKGEsIGIpID0+IE1hdGguc3FydCgoYSAqIGEpICsgKGIgKiBiKSk7XG5cbi8qXG4gICAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IChwcm9ncmVzcywgZnJvbSwgdG8pID0+ICgtIHByb2dyZXNzICogZnJvbSkgKyAocHJvZ3Jlc3MgKiB0bykgKyBmcm9tO1xuXG4vKlxuICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbmV4cG9ydCBjb25zdCBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9ICh2YWx1ZSwgZnJvbSwgdG8pID0+ICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG5cbi8qXG4gICAgT2Zmc2V0IGJldHdlZW4gdHdvIG9iamVjdHMgb2YgbnVtYmVyc1xuXG4gICAgSWYgcHJvcGVydHkgaXMgZm91bmQgaW4gYiBub3QgcHJlc2VudCBpbiBhLCBpdCB3aWxsIHJldHVybiBgMGAgZm9yIHRoYXQgcHJvcC5cbiAgICBcbiAgICBAcGFyYW0gW1BvaW50XTogRmlyc3Qgb2JqZWN0XG4gICAgQHBhcmFtIFtQb2ludF06IFNlY29uZCBvYmplY3RcbiAgICBAcmV0dXJuIFtPZmZzZXRdOiBEaXN0YW5jZSBtZXRyaWNzIGJldHdlZW4gdHdvIHBvaW50c1xuKi9cbmV4cG9ydCBjb25zdCBvZmZzZXQgPSAoYSwgYikgPT4ge1xuICAgIGNvbnN0IG9mZnNldCA9IHt9O1xuXG4gICAgZWFjaChiLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBvZmZzZXRba2V5XSA9IGhhc1Byb3BlcnR5KGEsIGtleSkgPyB2YWx1ZSAtIGFba2V5XSA6IDA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLypcbiAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xuZXhwb3J0IGNvbnN0IHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpID0+IHtcbiAgICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICAgICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbmV4cG9ydCBjb25zdCByYWRpYW5zVG9EZWdyZWVzID0gKHJhZGlhbnMpID0+IHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuXG4vKlxuICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4qL1xuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IChtaW4gPSAwLCBtYXggPSAxKSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG5cbi8qXG4gICAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gICAgXG4gICAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICAgIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiovXG5leHBvcnQgY29uc3QgcmVsYXRpdmVWYWx1ZSA9IChjdXJyZW50LCByZWxhdGl2ZSkgPT4ge1xuICAgIGxldCBuZXdWYWx1ZSA9IGN1cnJlbnQ7XG4gICAgY29uc3QgZXF1YXRpb24gPSByZWxhdGl2ZS5zcGxpdCgnPScpO1xuICAgIGNvbnN0IG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG4gICAgbGV0IHsgdW5pdCwgdmFsdWUgfSA9IHNwbGl0VmFsdWVVbml0KGVxdWF0aW9uWzFdKTtcblxuICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgY2FzZSAnKyc6XG4gICAgICAgIG5ld1ZhbHVlICs9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICctJzpcbiAgICAgICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyonOlxuICAgICAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLyc6XG4gICAgICAgIG5ld1ZhbHVlIC89IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gICAgaWYgKHVuaXQpIHtcbiAgICAgICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3VmFsdWU7XG59O1xuXG4vKlxuICAgIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gICAgXG4gICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8ga2VlcCB3aXRoaW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGxpbWl0ZWQgd2l0aGluIGdpdmVuIHJhbmdlXG4qL1xuZXhwb3J0IGNvbnN0IHJlc3RyaWN0ID0gKHZhbHVlLCBtaW4sIG1heCkgPT4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG5cbi8qXG4gICAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gICAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xuZXhwb3J0IGNvbnN0IHNtb290aCA9IChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uLCBzbW9vdGhpbmcgPSAwKSA9PiB0b0RlY2ltYWwob2xkVmFsdWUgKyAoZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSkpO1xuXG4vKlxuICAgIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJGcmFtZSA9ICh4cHMsIGZyYW1lRHVyYXRpb24pID0+IChpc051bSh4cHMpKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xuXG4vKlxuICAgIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbmV4cG9ydCBjb25zdCBzdGVwUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MsIHN0ZXBzKSA9PiB7XG4gICAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgICBjb25zdCB0YXJnZXQgPSAxIC0gKDEgLyBzdGVwcyk7XG4gICAgY29uc3QgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59OyJdfQ==
return exports;
})();
var __small$_16 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;
exports.setDilation = undefined;

var _utils = __small$_14;

var MAX_ELAPSED = 33;

var current = 0;
var elapsed = 16.7;
var dilation = 1;

exports.default = {
    update: function (framestamp) {
        elapsed = Math.min(framestamp - current, MAX_ELAPSED) * dilation;
        current = framestamp;
    },

    start: function () {
        return current = (0, _utils.currentTime)();
    },

    getElapsed: function () {
        return elapsed;
    }
};
var setDilation = exports.setDilation = function (newDilation) {
    return dilation = newDilation;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxJQUFNLGNBQWMsRUFBZDs7QUFFTixJQUFJLFVBQVUsQ0FBVjtBQUNKLElBQUksVUFBVSxJQUFWO0FBQ0osSUFBSSxXQUFXLENBQVg7O2tCQUVXO0FBQ1gsWUFBUSxVQUFDLFVBQUQsRUFBZ0I7QUFDcEIsa0JBQVUsS0FBSyxHQUFMLENBQVMsYUFBYSxPQUFiLEVBQXNCLFdBQS9CLElBQThDLFFBQTlDLENBRFU7QUFFcEIsa0JBQVUsVUFBVixDQUZvQjtLQUFoQjs7QUFLUixXQUFPO2VBQU0sVUFBVSxXQWRsQixZQWNrQixFQUFWO0tBQU47O0FBRVAsZ0JBQVk7ZUFBTTtLQUFOOztBQUdULElBQU0sb0NBQWMsVUFBQyxXQUFEO1dBQWlCLFdBQVcsV0FBWDtDQUFqQiIsImZpbGUiOiJ0aW1lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1cnJlbnRUaW1lIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgTUFYX0VMQVBTRUQgPSAzMztcblxubGV0IGN1cnJlbnQgPSAwO1xubGV0IGVsYXBzZWQgPSAxNi43O1xubGV0IGRpbGF0aW9uID0gMTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHVwZGF0ZTogKGZyYW1lc3RhbXApID0+IHtcbiAgICAgICAgZWxhcHNlZCA9IE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50LCBNQVhfRUxBUFNFRCkgKiBkaWxhdGlvbjtcbiAgICAgICAgY3VycmVudCA9IGZyYW1lc3RhbXA7XG4gICAgfSxcblxuICAgIHN0YXJ0OiAoKSA9PiBjdXJyZW50ID0gY3VycmVudFRpbWUoKSxcblxuICAgIGdldEVsYXBzZWQ6ICgpID0+IGVsYXBzZWRcbn07XG5cbmV4cG9ydCBjb25zdCBzZXREaWxhdGlvbiA9IChuZXdEaWxhdGlvbikgPT4gZGlsYXRpb24gPSBuZXdEaWxhdGlvbjsiXX0=
return exports;
})();
var __small$_20 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;
exports.default = {
    defaultProps: {
        unit: 'deg'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDWCxrQkFBYztBQUNWLGNBQU0sS0FBTjtLQURKIiwiZmlsZSI6ImFuZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAnZGVnJ1xuICAgIH1cbn07Il19
return exports;
})();
var __small$_23 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _utils = __small$_14;

var FLOAT_REGEX = /(-)?(\d[\d\.]*)/g;
var generateToken = function (token) {
    return '${' + token + '}';
};

exports.default = {

    test: function (value) {
        var matches = value.match(FLOAT_REGEX);
        return (0, _utils.isArray)(matches) && matches.length > 1;
    },

    template: function (value) {
        var counter = 0;
        return value.replace(FLOAT_REGEX, function () {
            return generateToken(counter++);
        });
    },

    split: function (value) {
        var splitValue = {};

        value.match(FLOAT_REGEX).forEach(function (value, i) {
            return splitValue[i] = value;
        });

        return splitValue;
    },

    combine: function (values, template) {
        (0, _utils.each)(values, function (value, key) {
            return template = template.replace(generateToken(key), value);
        });
        return template;
    }

};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLElBQU0sY0FBYyxrQkFBZDtBQUNOLElBQU0sZ0JBQWdCLFVBQUMsS0FBRDtXQUFXLE9BQU8sS0FBUCxHQUFlLEdBQWY7Q0FBWDs7a0JBRVA7O0FBRVgsVUFBTSxVQUFDLEtBQUQsRUFBVztBQUNiLFlBQU0sVUFBVSxNQUFNLEtBQU4sQ0FBWSxXQUFaLENBQVYsQ0FETztBQUViLGVBQVEsV0FURCxRQVNDLENBQVEsT0FBUixLQUFvQixRQUFRLE1BQVIsR0FBaUIsQ0FBakIsQ0FGZjtLQUFYOztBQUtOLGNBQVUsVUFBQyxLQUFELEVBQVc7QUFDakIsWUFBSSxVQUFVLENBQVYsQ0FEYTtBQUVqQixlQUFPLE1BQU0sT0FBTixDQUFjLFdBQWQsRUFBMkI7bUJBQU0sY0FBYyxTQUFkO1NBQU4sQ0FBbEMsQ0FGaUI7S0FBWDs7QUFLVixXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBTSxhQUFhLEVBQWIsQ0FEUTs7QUFHZCxjQUFNLEtBQU4sQ0FBWSxXQUFaLEVBQXlCLE9BQXpCLENBQWlDLFVBQUMsS0FBRCxFQUFRLENBQVI7bUJBQWMsV0FBVyxDQUFYLElBQWdCLEtBQWhCO1NBQWQsQ0FBakMsQ0FIYzs7QUFLZCxlQUFPLFVBQVAsQ0FMYztLQUFYOztBQVFQLGFBQVMsVUFBQyxNQUFELEVBQVMsUUFBVCxFQUFzQjtBQUMzQixtQkExQkMsS0EwQkQsQ0FBSyxNQUFMLEVBQWEsVUFBQyxLQUFELEVBQVEsR0FBUjttQkFBZ0IsV0FBVyxTQUFTLE9BQVQsQ0FBaUIsY0FBYyxHQUFkLENBQWpCLEVBQXFDLEtBQXJDLENBQVg7U0FBaEIsQ0FBYixDQUQyQjtBQUUzQixlQUFPLFFBQVAsQ0FGMkI7S0FBdEIiLCJmaWxlIjoiY29tcGxleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2gsIGlzQXJyYXkgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBGTE9BVF9SRUdFWCA9IC8oLSk/KFxcZFtcXGRcXC5dKikvZztcbmNvbnN0IGdlbmVyYXRlVG9rZW4gPSAodG9rZW4pID0+ICckeycgKyB0b2tlbiArICd9JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgdGVzdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCk7XG4gICAgICAgIHJldHVybiAoaXNBcnJheShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDEpO1xuICAgIH0sXG5cbiAgICB0ZW1wbGF0ZTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoRkxPQVRfUkVHRVgsICgpID0+IGdlbmVyYXRlVG9rZW4oY291bnRlcisrKSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHt9O1xuICAgICAgICBcbiAgICAgICAgdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpLmZvckVhY2goKHZhbHVlLCBpKSA9PiBzcGxpdFZhbHVlW2ldID0gdmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzLCB0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICBlYWNoKHZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZhbHVlKSk7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbn07Il19
return exports;
})();
var __small$_27 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;
exports.default = {
    defaultProps: {
        unit: 'px'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9weC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDWCxrQkFBYztBQUNWLGNBQU0sSUFBTjtLQURKIiwiZmlsZSI6InB4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAncHgnXG4gICAgfVxufTsiXX0=
return exports;
})();
var __small$_29 = (function() {
var exports = {};
"use strict";

exports.__esModule = true;
exports.default = {
    defaultProps: {
        current: 1
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDWCxrQkFBYztBQUNWLGlCQUFTLENBQVQ7S0FESiIsImZpbGUiOiJzY2FsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY3VycmVudDogMVxuICAgIH1cbn07Il19
return exports;
})();
var __small$_35 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;
var TRANSLATE = 'translate';

exports.default = {
    x: TRANSLATE + 'X',
    y: TRANSLATE + 'Y',
    z: TRANSLATE + 'Z'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvY3NzL3N0YXRlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNLFlBQVksV0FBWjs7a0JBRVM7QUFDWCxPQUFHLFlBQVksR0FBWjtBQUNILE9BQUcsWUFBWSxHQUFaO0FBQ0gsT0FBRyxZQUFZLEdBQVoiLCJmaWxlIjoic3RhdGUtbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVFJBTlNMQVRFID0gJ3RyYW5zbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gICAgeTogVFJBTlNMQVRFICsgJ1knLFxuICAgIHo6IFRSQU5TTEFURSArICdaJ1xufTsiXX0=
return exports;
})();
var __small$_12 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _createEasing = ((function() {
var exports = {};
"use strict";

exports.__esModule = true;
exports.default = createEasingFunction;
/*
    Mirror easing
    
    Mirrors the provided easing function, used here for mirroring an
    easeIn into an easeInOut
    
    @param [number]: Progress, from 0 - 1, of current shift
    @param [function]: The easing function to mirror
    @returns [number]: The easing-adjusted delta
*/
var mirrorEasing = function (method) {
    return function (progress, strength) {
        return progress <= 0.5 ? method(2 * progress, strength) / 2 : (2 - method(2 * (1 - progress), strength)) / 2;
    };
};

/*
    Reverse easing
    
    Reverses the output of the provided easing function, used for flipping easeIn
    curve to an easeOut.
    
    @param [number]: Progress, from 0 - 1, of current shift
    @param [function]: The easing function to reverse
    @returns [number]: The easing-adjusted delta
*/
var reverseEasing = function (method) {
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
function createEasingFunction(method) {
    var easingFunction = function (progress, strength) {
        return method(progress, strength);
    };

    easingFunction.in = function (progress, strength) {
        return method(progress, strength);
    };
    easingFunction.out = reverseEasing(method);
    easingFunction.inOut = mirrorEasing(method);

    return easingFunction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFnQ3dCOzs7Ozs7Ozs7OztBQXRCeEIsSUFBTSxlQUFlLFVBQUMsTUFBRDtXQUFZLFVBQUMsUUFBRCxFQUFXLFFBQVg7ZUFBd0IsUUFBQyxJQUFZLEdBQVosR0FBbUIsT0FBTyxJQUFJLFFBQUosRUFBYyxRQUFyQixJQUFpQyxDQUFqQyxHQUFxQyxDQUFDLElBQUksT0FBTyxLQUFLLElBQUksUUFBSixDQUFMLEVBQW9CLFFBQTNCLENBQUosQ0FBRCxHQUE2QyxDQUE3QztLQUFqRjtDQUFaOzs7Ozs7Ozs7Ozs7QUFZckIsSUFBTSxnQkFBZ0IsVUFBQyxNQUFEO1dBQVksVUFBQyxRQUFELEVBQVcsUUFBWDtlQUF3QixJQUFJLE9BQU8sSUFBSSxRQUFKLEVBQWMsUUFBckIsQ0FBSjtLQUF4QjtDQUFaOzs7Ozs7Ozs7O0FBVVAsU0FBUyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQztBQUNqRCxRQUFJLGlCQUFpQixVQUFDLFFBQUQsRUFBVyxRQUFYO2VBQXdCLE9BQU8sUUFBUCxFQUFpQixRQUFqQjtLQUF4QixDQUQ0Qjs7QUFHakQsbUJBQWUsRUFBZixHQUFvQixVQUFDLFFBQUQsRUFBVyxRQUFYO2VBQXdCLE9BQU8sUUFBUCxFQUFpQixRQUFqQjtLQUF4QixDQUg2QjtBQUlqRCxtQkFBZSxHQUFmLEdBQXFCLGNBQWMsTUFBZCxDQUFyQixDQUppRDtBQUtqRCxtQkFBZSxLQUFmLEdBQXVCLGFBQWEsTUFBYixDQUF2QixDQUxpRDs7QUFPakQsV0FBTyxjQUFQLENBUGlEO0NBQXRDIiwiZmlsZSI6ImNyZWF0ZS1lYXNpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIE1pcnJvciBlYXNpbmdcbiAgICBcbiAgICBNaXJyb3JzIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgaGVyZSBmb3IgbWlycm9yaW5nIGFuXG4gICAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xuY29uc3QgbWlycm9yRWFzaW5nID0gKG1ldGhvZCkgPT4gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gKHByb2dyZXNzIDw9IDAuNSkgPyBtZXRob2QoMiAqIHByb2dyZXNzLCBzdHJlbmd0aCkgLyAyIDogKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpLCBzdHJlbmd0aCkpIC8gMjtcbiAgICAgICAgXG4vKlxuICAgIFJldmVyc2UgZWFzaW5nXG4gICAgXG4gICAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG5jb25zdCByZXZlcnNlRWFzaW5nID0gKG1ldGhvZCkgPT4gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuLypcbiAgICBFYXNpbmcgY2xhc3NcblxuICAgIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gICAgSWYgcHJvdmlkZWQgZm91ciBhcmd1bWVudHMsIHJldHVybnMgbmV3IEJlemllciBjbGFzcyBpbnN0ZWFkLlxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVhc2luZ0Z1bmN0aW9uKG1ldGhvZCkge1xuICAgIGxldCBlYXNpbmdGdW5jdGlvbiA9IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuXG4gICAgZWFzaW5nRnVuY3Rpb24uaW4gPSAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICBlYXNpbmdGdW5jdGlvbi5vdXQgPSByZXZlcnNlRWFzaW5nKG1ldGhvZCk7XG4gICAgZWFzaW5nRnVuY3Rpb24uaW5PdXQgPSBtaXJyb3JFYXNpbmcobWV0aG9kKTtcblxuICAgIHJldHVybiBlYXNpbmdGdW5jdGlvbjtcbn1cbiJdfQ==
return exports;
})());

var _createEasing2 = _interopRequireDefault(_createEasing);

var _createBezier = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;
exports.default = cubicBezier;
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

// Constants
var NEWTON_ITERATIONS = 8;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var K_SPLINE_TABLE_SIZE = 11;
var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
var FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined';

// Helper methods
var a = function (a1, a2) {
    return 1.0 - 3.0 * a2 + 3.0 * a1;
};
var b = function (a1, a2) {
    return 3.0 * a2 - 6.0 * a1;
};
var c = function (a1) {
    return 3.0 * a1;
};

var getSlope = function (t, a1, a2) {
    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
};

var calcBezier = function (t, a1, a2) {
    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};

/*
    Create a cubic bezier resolver
*/
function cubicBezier(mX1, mY1, mX2, mY2) {
    var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
    var _precomputed = false;

    var binarySubdivide = function (aX, aA, aB) {
        var i = 0;
        var currentX = undefined;
        var currentT = undefined;

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
    };

    var newtonRaphsonIterate = function (aX, aGuessT) {
        var i = 0;
        var currentSlope = 0;
        var currentX = undefined;

        for (; i < NEWTON_ITERATIONS; ++i) {
            currentSlope = getSlope(aGuessT, mX1, mX2);

            if (currentSlope === 0.0) {
                return aGuessT;
            }

            currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }

        return aGuessT;
    };

    var calcSampleValues = function () {
        for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
            sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
        }
    };

    var getTForX = function (aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = K_SPLINE_TABLE_SIZE - 1;
        var dist = 0.0;
        var guessForT = 0.0;
        var initialSlope = 0.0;

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
    };

    var precompute = function () {
        _precomputed = true;
        if (mX1 != mY1 || mX2 != mY2) {
            calcSampleValues();
        }
    };

    var resolver = function (aX) {
        var returnValue = undefined;

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

    return resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFtQ3dCOzs7Ozs7Ozs7Ozs7Ozs7O0FBcEJ4QixJQUFNLG9CQUFvQixDQUFwQjtBQUNOLElBQU0sbUJBQW1CLEtBQW5CO0FBQ04sSUFBTSx3QkFBd0IsU0FBeEI7QUFDTixJQUFNLDZCQUE2QixFQUE3QjtBQUNOLElBQU0sc0JBQXNCLEVBQXRCO0FBQ04sSUFBTSxxQkFBcUIsT0FBTyxzQkFBc0IsR0FBdEIsQ0FBUDtBQUMzQixJQUFNLHFCQUFzQixPQUFPLFlBQVAsS0FBd0IsV0FBeEI7OztBQUc1QixJQUFNLElBQUksVUFBQyxFQUFELEVBQUssRUFBTDtXQUFZLE1BQU0sTUFBTSxFQUFOLEdBQVcsTUFBTSxFQUFOO0NBQTdCO0FBQ1YsSUFBTSxJQUFJLFVBQUMsRUFBRCxFQUFLLEVBQUw7V0FBWSxNQUFNLEVBQU4sR0FBVyxNQUFNLEVBQU47Q0FBdkI7QUFDVixJQUFNLElBQUksVUFBQyxFQUFEO1dBQVEsTUFBTSxFQUFOO0NBQVI7O0FBRVYsSUFBTSxXQUFXLFVBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSO1dBQWUsTUFBTSxFQUFFLEVBQUYsRUFBTSxFQUFOLENBQU4sR0FBa0IsQ0FBbEIsR0FBc0IsQ0FBdEIsR0FBMEIsTUFBTSxFQUFFLEVBQUYsRUFBTSxFQUFOLENBQU4sR0FBa0IsQ0FBbEIsR0FBc0IsRUFBRSxFQUFGLENBQWhEO0NBQWY7O0FBRWpCLElBQU0sYUFBYSxVQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUjtXQUFlLENBQUMsQ0FBQyxFQUFFLEVBQUYsRUFBTSxFQUFOLElBQVksQ0FBWixHQUFnQixFQUFFLEVBQUYsRUFBTSxFQUFOLENBQWhCLENBQUQsR0FBOEIsQ0FBOUIsR0FBa0MsRUFBRSxFQUFGLENBQWxDLENBQUQsR0FBNEMsQ0FBNUM7Q0FBZjs7Ozs7QUFLSixTQUFTLFdBQVQsQ0FBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUM7QUFDcEQsUUFBTSxlQUFlLHFCQUFxQixJQUFJLFlBQUosQ0FBaUIsbUJBQWpCLENBQXJCLEdBQTZELElBQUksS0FBSixDQUFVLG1CQUFWLENBQTdELENBRCtCO0FBRXBELFFBQUksZUFBZSxLQUFmLENBRmdEOztBQUlwRCxRQUFNLGtCQUFrQixVQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFnQjtBQUNwQyxZQUFJLElBQUksQ0FBSixDQURnQztBQUVwQyxZQUFJLG9CQUFKLENBRm9DO0FBR3BDLFlBQUksb0JBQUosQ0FIb0M7O0FBS3BDLFdBQUc7QUFDQyx1QkFBVyxLQUFLLENBQUMsS0FBSyxFQUFMLENBQUQsR0FBWSxHQUFaLENBRGpCO0FBRUMsdUJBQVcsV0FBVyxRQUFYLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLElBQWlDLEVBQWpDLENBRlo7QUFHQyxnQkFBSSxXQUFXLEdBQVgsRUFBZ0I7QUFDaEIscUJBQUssUUFBTCxDQURnQjthQUFwQixNQUVPO0FBQ0gscUJBQUssUUFBTCxDQURHO2FBRlA7U0FISixRQVFTLEtBQUssR0FBTCxDQUFTLFFBQVQsSUFBcUIscUJBQXJCLElBQThDLEVBQUUsQ0FBRixHQUFNLDBCQUFOLEVBYm5COztBQWVwQyxlQUFPLFFBQVAsQ0Fmb0M7S0FBaEIsQ0FKNEI7O0FBc0JwRCxRQUFNLHVCQUF1QixVQUFDLEVBQUQsRUFBSyxPQUFMLEVBQWlCO0FBQzFDLFlBQUksSUFBSSxDQUFKLENBRHNDO0FBRTFDLFlBQUksZUFBZSxDQUFmLENBRnNDO0FBRzFDLFlBQUksb0JBQUosQ0FIMEM7O0FBSzFDLGVBQU8sSUFBSSxpQkFBSixFQUF1QixFQUFFLENBQUYsRUFBSztBQUMvQiwyQkFBZSxTQUFTLE9BQVQsRUFBa0IsR0FBbEIsRUFBdUIsR0FBdkIsQ0FBZixDQUQrQjs7QUFHL0IsZ0JBQUksaUJBQWlCLEdBQWpCLEVBQXNCO0FBQ3RCLHVCQUFPLE9BQVAsQ0FEc0I7YUFBMUI7O0FBSUEsdUJBQVcsV0FBVyxPQUFYLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCLElBQWdDLEVBQWhDLENBUG9CO0FBUS9CLHVCQUFXLFdBQVcsWUFBWCxDQVJvQjtTQUFuQzs7QUFXQSxlQUFPLE9BQVAsQ0FoQjBDO0tBQWpCLENBdEJ1Qjs7QUF5Q3BELFFBQU0sbUJBQW1CLFlBQU07QUFDM0IsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksbUJBQUosRUFBeUIsRUFBRSxDQUFGLEVBQUs7QUFDMUMseUJBQWEsQ0FBYixJQUFrQixXQUFXLElBQUksa0JBQUosRUFBd0IsR0FBbkMsRUFBd0MsR0FBeEMsQ0FBbEIsQ0FEMEM7U0FBOUM7S0FEcUIsQ0F6QzJCOztBQStDcEQsUUFBTSxXQUFXLFVBQUMsRUFBRCxFQUFRO0FBQ3JCLFlBQUksZ0JBQWdCLEdBQWhCLENBRGlCO0FBRXJCLFlBQUksZ0JBQWdCLENBQWhCLENBRmlCO0FBR3JCLFlBQUksYUFBYSxzQkFBc0IsQ0FBdEIsQ0FISTtBQUlyQixZQUFJLE9BQU8sR0FBUCxDQUppQjtBQUtyQixZQUFJLFlBQVksR0FBWixDQUxpQjtBQU1yQixZQUFJLGVBQWUsR0FBZixDQU5pQjs7QUFRckIsZUFBTyxpQkFBaUIsVUFBakIsSUFBK0IsYUFBYSxhQUFiLEtBQStCLEVBQS9CLEVBQW1DLEVBQUUsYUFBRixFQUFpQjtBQUN0Riw2QkFBaUIsa0JBQWpCLENBRHNGO1NBQTFGOztBQUlBLFVBQUUsYUFBRixDQVpxQjs7QUFjckIsZUFBTyxDQUFDLEtBQUssYUFBYSxhQUFiLENBQUwsQ0FBRCxJQUFzQyxhQUFhLGdCQUFjLENBQWQsQ0FBYixHQUFnQyxhQUFhLGFBQWIsQ0FBaEMsQ0FBdEMsQ0FkYztBQWVyQixvQkFBWSxnQkFBZ0IsT0FBTyxrQkFBUCxDQWZQOztBQWlCckIsdUJBQWUsU0FBUyxTQUFULEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCLENBQWY7OztBQWpCcUIsWUFvQmpCLGdCQUFnQixnQkFBaEIsRUFBa0M7QUFDbEMsbUJBQU8scUJBQXFCLEVBQXJCLEVBQXlCLFNBQXpCLENBQVA7O0FBRGtDLFNBQXRDLE1BR08sSUFBSSxpQkFBaUIsR0FBakIsRUFBc0I7QUFDN0IsdUJBQU8sU0FBUDs7QUFENkIsYUFBMUIsTUFHQTtBQUNILDJCQUFPLGdCQUFnQixFQUFoQixFQUFvQixhQUFwQixFQUFtQyxnQkFBZ0Isa0JBQWhCLENBQTFDLENBREc7aUJBSEE7S0F2Qk0sQ0EvQ21DOztBQThFcEQsUUFBTSxhQUFhLFlBQU07QUFDckIsdUJBQWUsSUFBZixDQURxQjtBQUVyQixZQUFJLE9BQU8sR0FBUCxJQUFjLE9BQU8sR0FBUCxFQUFZO0FBQzFCLCtCQUQwQjtTQUE5QjtLQUZlLENBOUVpQzs7QUFxRnBELFFBQU0sV0FBVyxVQUFDLEVBQUQsRUFBUTtBQUNyQixZQUFJLHVCQUFKLENBRHFCOztBQUdyQixZQUFJLENBQUMsWUFBRCxFQUFlO0FBQ2YseUJBRGU7U0FBbkI7OztBQUhxQixZQVFqQixRQUFRLEdBQVIsSUFBZSxRQUFRLEdBQVIsRUFBYTtBQUM1QiwwQkFBYyxFQUFkOzs7QUFENEIsU0FBaEMsTUFJTyxJQUFJLE9BQU8sQ0FBUCxFQUFVO0FBQ2pCLDhCQUFjLENBQWQ7OztBQURpQixhQUFkLE1BSUEsSUFBSSxPQUFPLENBQVAsRUFBVTtBQUNqQixrQ0FBYyxDQUFkLENBRGlCO2lCQUFkLE1BR0E7QUFDSCxrQ0FBYyxXQUFXLFNBQVMsRUFBVCxDQUFYLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLENBQWQsQ0FERztpQkFIQTs7QUFPUCxlQUFPLFdBQVAsQ0F2QnFCO0tBQVIsQ0FyRm1DOztBQStHcEQsV0FBTyxRQUFQLENBL0dvRDtDQUF6QyIsImZpbGUiOiJjcmVhdGUtYmV6aWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBCZXppZXIgZnVuY3Rpb24gZ2VuZXJhdG9yXG4gICAgICAgIFxuICAgIEdhw6t0YW4gUmVuYXVkZWF1J3MgQmV6aWVyRWFzaW5nXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAgIFlvdSdyZSBhIGhlcm9cbiAgICBcbiAgICBVc2VcbiAgICBcbiAgICAgICAgdmFyIGVhc2VPdXQgPSBuZXcgQmV6aWVyKC4xNywuNjcsLjgzLC42NyksXG4gICAgICAgICAgICB4ID0gZWFzZU91dCgwLjUpOyAvLyByZXR1cm5zIDAuNjI3Li4uXG4qL1xuXG4vLyBDb25zdGFudHNcbmNvbnN0IE5FV1RPTl9JVEVSQVRJT05TID0gODtcbmNvbnN0IE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMTtcbmNvbnN0IFNVQkRJVklTSU9OX1BSRUNJU0lPTiA9IDAuMDAwMDAwMTtcbmNvbnN0IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TID0gMTA7XG5jb25zdCBLX1NQTElORV9UQUJMRV9TSVpFID0gMTE7XG5jb25zdCBLX1NBTVBMRV9TVEVQX1NJWkUgPSAxLjAgLyAoS19TUExJTkVfVEFCTEVfU0laRSAtIDEuMCk7XG5jb25zdCBGTE9BVF8zMl9TVVBQT1JURUQgPSAodHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcpO1xuXG4vLyBIZWxwZXIgbWV0aG9kc1xuY29uc3QgYSA9IChhMSwgYTIpID0+IDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG5jb25zdCBiID0gKGExLCBhMikgPT4gMy4wICogYTIgLSA2LjAgKiBhMTtcbmNvbnN0IGMgPSAoYTEpID0+IDMuMCAqIGExO1xuXG5jb25zdCBnZXRTbG9wZSA9ICh0LCBhMSwgYTIpID0+IDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xuXG5jb25zdCBjYWxjQmV6aWVyID0gKHQsIGExLCBhMikgPT4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xuXG4vKlxuICAgIENyZWF0ZSBhIGN1YmljIGJlemllciByZXNvbHZlclxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1YmljQmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICAgIGNvbnN0IHNhbXBsZVZhbHVlcyA9IEZMT0FUXzMyX1NVUFBPUlRFRCA/IG5ldyBGbG9hdDMyQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSkgOiBuZXcgQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSk7XG4gICAgbGV0IF9wcmVjb21wdXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYmluYXJ5U3ViZGl2aWRlID0gKGFYLCBhQSwgYUIpID0+IHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBsZXQgY3VycmVudFg7XG4gICAgICAgIGxldCBjdXJyZW50VDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUO1xuICAgIH07XG5cbiAgICBjb25zdCBuZXd0b25SYXBoc29uSXRlcmF0ZSA9IChhWCwgYUd1ZXNzVCkgPT4ge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50U2xvcGUgPSAwO1xuICAgICAgICBsZXQgY3VycmVudFg7XG5cbiAgICAgICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICAgICAgICBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FsY1NhbXBsZVZhbHVlcyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBLX1NQTElORV9UQUJMRV9TSVpFOyArK2kpIHtcbiAgICAgICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIEtfU0FNUExFX1NURVBfU0laRSwgbVgxLCBtWDIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFRGb3JYID0gKGFYKSA9PiB7XG4gICAgICAgIGxldCBpbnRlcnZhbFN0YXJ0ID0gMC4wO1xuICAgICAgICBsZXQgY3VycmVudFNhbXBsZSA9IDE7XG4gICAgICAgIGxldCBsYXN0U2FtcGxlID0gS19TUExJTkVfVEFCTEVfU0laRSAtIDE7XG4gICAgICAgIGxldCBkaXN0ID0gMC4wO1xuICAgICAgICBsZXQgZ3Vlc3NGb3JUID0gMC4wO1xuICAgICAgICBsZXQgaW5pdGlhbFNsb3BlID0gMC4wO1xuICAgICAgICAgICAgXG4gICAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgICAgICAgIGludGVydmFsU3RhcnQgKz0gS19TQU1QTEVfU1RFUF9TSVpFO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAtLWN1cnJlbnRTYW1wbGU7XG4gICAgICAgIFxuICAgICAgICBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSsxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICAgIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICogS19TQU1QTEVfU1RFUF9TSVpFO1xuICAgICAgICBcbiAgICAgICAgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBzbG9wZSBpcyBncmVhdGVyIHRoYW4gbWluXG4gICAgICAgIGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQpO1xuICAgICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICAgICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIEtfU0FNUExFX1NURVBfU0laRSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcHJlY29tcHV0ZSA9ICgpID0+IHtcbiAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKG1YMSAhPSBtWTEgfHwgbVgyICE9IG1ZMikge1xuICAgICAgICAgICAgY2FsY1NhbXBsZVZhbHVlcygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc29sdmVyID0gKGFYKSA9PiB7XG4gICAgICAgIGxldCByZXR1cm5WYWx1ZTtcblxuICAgICAgICBpZiAoIV9wcmVjb21wdXRlZCkge1xuICAgICAgICAgICAgcHJlY29tcHV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGFYO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIElmIGF0IHN0YXJ0LCByZXR1cm4gMFxuICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gSWYgYXQgZW5kLCByZXR1cm4gMVxuICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDE7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gcmVzb2x2ZXI7XG59XG4iXX0=
return exports;
})());

var _createBezier2 = _interopRequireDefault(_createBezier);

var _utils = __small$_14;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Values
var DEFAULT_BACK_STRENGTH = 1.525; /*
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

var DEFAULT_POW_STRENGTH = 2;

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

// Utility functions
var generatePowerEasing = function (strength) {
    return function (progress) {
        return baseEasing.ease(progress, strength);
    };
};

['cubic', 'quart', 'quint'].forEach(function (easingName, i) {
    return baseEasing[easingName] = generatePowerEasing(i + 3);
});

// Generate in/out/inOut variations
(0, _utils.each)(baseEasing, function (baseEase, key) {
    var easingFunction = (0, _createEasing2.default)(baseEase);
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

baseEasing.easingFunction = _createEasing2.default;
baseEasing.cubicBezier = _createBezier2.default;
baseEasing.modifyEase = function (easing) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    return function (progress) {
        return easing.apply(undefined, [progress].concat(args));
    };
};

exports.default = baseEasing;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBLElBQU0sd0JBQXdCLEtBQXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTixJQUFNLHVCQUF1QixDQUF2Qjs7Ozs7Ozs7QUFRTixJQUFJLGFBQWE7QUFDYixVQUFNLFVBQUMsUUFBRDtZQUFXLGlFQUFXO3dCQUF5QixVQUFZO0tBQTNEO0FBQ04sVUFBTTtlQUFZLElBQUksS0FBSyxHQUFMLENBQVMsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFULENBQUo7S0FBWjtBQUNOLFVBQU0sVUFBQyxRQUFEO1lBQVcsaUVBQVc7ZUFBMEIsUUFBQyxHQUFXLFFBQVgsSUFBd0IsQ0FBQyxXQUFXLENBQVgsQ0FBRCxHQUFpQixRQUFqQixHQUE0QixRQUE1QixDQUF6QjtLQUFoRDtDQUhOOzs7QUFPSixJQUFNLHNCQUFzQixVQUFDLFFBQUQ7V0FBYyxVQUFDLFFBQUQ7ZUFBYyxXQUFXLElBQVgsQ0FBZ0IsUUFBaEIsRUFBMEIsUUFBMUI7S0FBZDtDQUFkOztBQUU1QixDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLENBQW9DLFVBQUMsVUFBRCxFQUFhLENBQWI7V0FBbUIsV0FBVyxVQUFYLElBQXlCLG9CQUFvQixJQUFJLENBQUosQ0FBN0M7Q0FBbkIsQ0FBcEM7OztBQUdBLFdBeEJTLEtBd0JULENBQUssVUFBTCxFQUFpQixVQUFDLFFBQUQsRUFBVyxHQUFYLEVBQW1CO0FBQ2hDLFFBQUksaUJBQWlCLDRCQUFxQixRQUFyQixDQUFqQixDQUQ0QjtBQUVoQyxlQUFjLFVBQWQsSUFBeUIsZUFBZSxFQUFmLENBRk87QUFHaEMsZUFBYyxXQUFkLElBQTBCLGVBQWUsR0FBZixDQUhNO0FBSWhDLGVBQWMsYUFBZCxJQUE0QixlQUFlLEtBQWYsQ0FKSTtDQUFuQixDQUFqQjs7QUFPQSxXQUFXLE1BQVgsR0FBb0I7V0FBWTtDQUFaO0FBQ3BCLFdBQVcsVUFBWCxHQUF3QixVQUFDLFFBQUQ7UUFBVyxpRUFBVztXQUMxQyxDQUFFLFlBQVUsQ0FBVixDQUFELEdBQWdCLENBQWhCLEdBQXFCLE1BQU0sV0FBVyxNQUFYLENBQWtCLFFBQWxCLEVBQTRCLFFBQTVCLENBQU4sR0FBK0MsT0FBTyxJQUFJLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFDLEVBQUQsSUFBTyxXQUFXLENBQVgsQ0FBUCxDQUFoQixDQUFQO0NBRGpEOztBQUd4QixXQUFXLGNBQVg7QUFDQSxXQUFXLFdBQVg7QUFDQSxXQUFXLFVBQVgsR0FBd0IsVUFBQyxNQUFEO3NDQUFZOzs7O1dBQVMsVUFBQyxRQUFEO2VBQWMseUJBQU8saUJBQWEsS0FBcEI7S0FBZDtDQUFyQjs7a0JBRVQiLCJmaWxlIjoicHJlc2V0LWVhc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcblxuICAgIEFudGljaXBhdGUgZWFzaW5nIGNyZWF0ZWQgYnkgRWxsaW90IEdpbm9cbiAgICBodHRwczovL3R3aXR0ZXIuY29tL0VsbGlvdEdlbm9cbiovXG4vLyBJbXBvcnRzXG5pbXBvcnQgY3JlYXRlRWFzaW5nRnVuY3Rpb24gZnJvbSAnLi9jcmVhdGUtZWFzaW5nJztcbmltcG9ydCBjdWJpY0JlemllciBmcm9tICcuL2NyZWF0ZS1iZXppZXInO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5cbi8vIFZhbHVlc1xuY29uc3QgREVGQVVMVF9CQUNLX1NUUkVOR1RIID0gMS41MjU7XG5jb25zdCBERUZBVUxUX1BPV19TVFJFTkdUSCA9IDI7XG5cbi8qXG4gICAgRWFjaCBvZiB0aGVzZSBiYXNlIGZ1bmN0aW9ucyBpcyBhbiBlYXNlSW5cbiAgICBcbiAgICBPbiBpbml0LCB3ZSB1c2UgLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICAgIGVhc2VPdXQgZnVuY3Rpb25zIHJlc3BlY3RpdmVseS5cbiovXG5sZXQgYmFzZUVhc2luZyA9IHtcbiAgICBlYXNlOiAocHJvZ3Jlc3MsIHN0cmVuZ3RoID0gREVGQVVMVF9QT1dfU1RSRU5HVEgpID0+IHByb2dyZXNzICoqIHN0cmVuZ3RoLFxuICAgIGNpcmM6IHByb2dyZXNzID0+IDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKSxcbiAgICBiYWNrOiAocHJvZ3Jlc3MsIHN0cmVuZ3RoID0gREVGQVVMVF9CQUNLX1NUUkVOR1RIKSA9PiAocHJvZ3Jlc3MgKiBwcm9ncmVzcykgKiAoKHN0cmVuZ3RoICsgMSkgKiBwcm9ncmVzcyAtIHN0cmVuZ3RoKVxufTtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbmNvbnN0IGdlbmVyYXRlUG93ZXJFYXNpbmcgPSAoc3RyZW5ndGgpID0+IChwcm9ncmVzcykgPT4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKChlYXNpbmdOYW1lLCBpKSA9PiBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMykpO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZWFjaChiYXNlRWFzaW5nLCAoYmFzZUVhc2UsIGtleSkgPT4ge1xuICAgIGxldCBlYXNpbmdGdW5jdGlvbiA9IGNyZWF0ZUVhc2luZ0Z1bmN0aW9uKGJhc2VFYXNlKTtcbiAgICBiYXNlRWFzaW5nW2Ake2tleX1JbmBdID0gZWFzaW5nRnVuY3Rpb24uaW47XG4gICAgYmFzZUVhc2luZ1tgJHtrZXl9T3V0YF0gPSBlYXNpbmdGdW5jdGlvbi5vdXQ7XG4gICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5PdXRgXSA9IGVhc2luZ0Z1bmN0aW9uLmluT3V0O1xufSk7XG5cbmJhc2VFYXNpbmcubGluZWFyID0gcHJvZ3Jlc3MgPT4gcHJvZ3Jlc3M7XG5iYXNlRWFzaW5nLmFudGljaXBhdGUgPSAocHJvZ3Jlc3MsIHN0cmVuZ3RoID0gREVGQVVMVF9CQUNLX1NUUkVOR1RIKSA9PlxuICAgICgocHJvZ3Jlc3MqPTIpIDwgMSkgPyAwLjUgKiBiYXNlRWFzaW5nLmJhY2tJbihwcm9ncmVzcywgc3RyZW5ndGgpIDogIDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHByb2dyZXNzIC0gMSkpKTtcblxuYmFzZUVhc2luZy5lYXNpbmdGdW5jdGlvbiA9IGNyZWF0ZUVhc2luZ0Z1bmN0aW9uO1xuYmFzZUVhc2luZy5jdWJpY0JlemllciA9IGN1YmljQmV6aWVyO1xuYmFzZUVhc2luZy5tb2RpZnlFYXNlID0gKGVhc2luZywgLi4uYXJncykgPT4gKHByb2dyZXNzKSA9PiBlYXNpbmcocHJvZ3Jlc3MsIC4uLmFyZ3MpO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlRWFzaW5nOyJdfQ==
return exports;
})();
var __small$_45 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;
var rgb = exports.rgb = {
    min: 0,
    max: 255,
    round: true
};

var opacity = exports.opacity = {
    min: 0,
    max: 1
};

var percent = exports.percent = {
    min: 0,
    max: 100,
    unit: '%'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU0sb0JBQU07QUFDZixTQUFLLENBQUw7QUFDQSxTQUFLLEdBQUw7QUFDQSxXQUFPLElBQVA7Q0FIUzs7QUFNTixJQUFNLDRCQUFVO0FBQ25CLFNBQUssQ0FBTDtBQUNBLFNBQUssQ0FBTDtDQUZTOztBQUtOLElBQU0sNEJBQVU7QUFDbkIsU0FBSyxDQUFMO0FBQ0EsU0FBSyxHQUFMO0FBQ0EsVUFBTSxHQUFOO0NBSFMiLCJmaWxlIjoiZGVmYXVsdC1wcm9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZ2IgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMjU1LFxuICAgIHJvdW5kOiB0cnVlXG59O1xuXG5leHBvcnQgY29uc3Qgb3BhY2l0eSA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxXG59O1xuXG5leHBvcnQgY29uc3QgcGVyY2VudCA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxMDAsXG4gICAgdW5pdDogJyUnXG59OyJdfQ==
return exports;
})();
var __small$_19 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _defaultProps = __small$_45;

exports.default = {
    defaultProps: _defaultProps.opacity
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWU7QUFDWCxnQ0FISyxPQUdMIiwiZmlsZSI6ImFscGhhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb3BhY2l0eSB9IGZyb20gJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IG9wYWNpdHlcbn07Il19
return exports;
})();
var __small$_46 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;
var X = 'X';
var Y = 'Y';
var ALPHA = 'Alpha';

var axes = exports.axes = [X, Y, 'Z'];
var rgb = exports.rgb = ['Red', 'Green', 'Blue', ALPHA];
var hsl = exports.hsl = ['Hue', 'Saturation', 'Lightness', ALPHA];
var positions = exports.positions = ['Top', 'Right', 'Bottom', 'Left'];
var shadow = exports.shadow = [X, Y, 'Radius', 'Spread', 'Color'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sSUFBSSxHQUFKO0FBQ04sSUFBTSxJQUFJLEdBQUo7QUFDTixJQUFNLFFBQVEsT0FBUjs7QUFFQyxJQUFNLHNCQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxHQUFQLENBQVA7QUFDTixJQUFNLG9CQUFNLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsTUFBakIsRUFBeUIsS0FBekIsQ0FBTjtBQUNOLElBQU0sb0JBQU0sQ0FBQyxLQUFELEVBQVEsWUFBUixFQUFzQixXQUF0QixFQUFtQyxLQUFuQyxDQUFOO0FBQ04sSUFBTSxnQ0FBWSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLFFBQWpCLEVBQTJCLE1BQTNCLENBQVo7QUFDTixJQUFNLDBCQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxRQUFQLEVBQWlCLFFBQWpCLEVBQTJCLE9BQTNCLENBQVQiLCJmaWxlIjoiZGljdGlvbmFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFggPSAnWCc7XG5jb25zdCBZID0gJ1knO1xuY29uc3QgQUxQSEEgPSAnQWxwaGEnO1xuXG5leHBvcnQgY29uc3QgYXhlcyA9IFtYLCBZLCAnWiddO1xuZXhwb3J0IGNvbnN0IHJnYiA9IFsnUmVkJywgJ0dyZWVuJywgJ0JsdWUnLCBBTFBIQV07XG5leHBvcnQgY29uc3QgaHNsID0gWydIdWUnLCAnU2F0dXJhdGlvbicsICdMaWdodG5lc3MnLCBBTFBIQV07XG5leHBvcnQgY29uc3QgcG9zaXRpb25zID0gWydUb3AnLCAnUmlnaHQnLCAnQm90dG9tJywgJ0xlZnQnXTtcbmV4cG9ydCBjb25zdCBzaGFkb3cgPSBbWCwgWSwgJ1JhZGl1cycsICdTcHJlYWQnLCAnQ29sb3InXTsiXX0=
return exports;
})();
var __small$_21 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _utils = __small$_14;

var _px = __small$_27;

var _px2 = _interopRequireDefault(_px);

var _dictionary = __small$_46;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    defaultProps: _px2.default.defaultProps,

    /*
        Split positions in format "X Y Z"
        
        @param [string]: Position values
            "20% 30% 0" -> {20%, 30%, 0}
            "20% 30%" -> {20%, 30%}
            "20%" -> {20%, 20%}
    */
    split: function (value) {
        var splitValues = (0, _utils.splitSpaceDelimited)(value);
        var numAxes = splitValues.length;
        var splitValue = {
            X: splitValues[0],
            Y: numAxes > 1 ? splitValues[1] : splitValues[0]
        };

        if (numAxes > 2) {
            splitValue.Z = splitValues[2];
        }

        return splitValue;
    },

    combine: function (values) {
        return (0, _utils.createDelimited)(values, _dictionary.axes, ' ');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9heGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O2tCQUllO0FBQ1gsa0JBQWMsYUFBWSxZQUFaOzs7Ozs7Ozs7O0FBVWQsV0FBTyxVQUFDLEtBQUQsRUFBVztBQUNkLFlBQU0sY0FBYyxXQWhCRixvQkFnQkUsQ0FBb0IsS0FBcEIsQ0FBZCxDQURRO0FBRWQsWUFBTSxVQUFVLFlBQVksTUFBWixDQUZGO0FBR2QsWUFBTSxhQUFhO0FBQ2YsZUFBRyxZQUFZLENBQVosQ0FBSDtBQUNBLGVBQUcsT0FBQyxHQUFVLENBQVYsR0FBZSxZQUFZLENBQVosQ0FBaEIsR0FBaUMsWUFBWSxDQUFaLENBQWpDO1NBRkQsQ0FIUTs7QUFRZCxZQUFJLFVBQVUsQ0FBVixFQUFhO0FBQ2IsdUJBQVcsQ0FBWCxHQUFlLFlBQVksQ0FBWixDQUFmLENBRGE7U0FBakI7O0FBSUEsZUFBTyxVQUFQLENBWmM7S0FBWDs7QUFlUCxhQUFTLFVBQUMsTUFBRDtlQUFZLFdBOUJoQixnQkE4QmdCLENBQWdCLE1BQWhCLGNBNUJoQixJQTRCZ0IsRUFBOEIsR0FBOUI7S0FBWiIsImZpbGUiOiJheGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGVsaW1pdGVkLCBzcGxpdFNwYWNlRGVsaW1pdGVkIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCBweFZhbHVlVHlwZSBmcm9tICcuL3B4JztcbmltcG9ydCB7IGF4ZXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiBweFZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFxuICAgIC8qXG4gICAgICAgIFNwbGl0IHBvc2l0aW9ucyBpbiBmb3JtYXQgXCJYIFkgWlwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFBvc2l0aW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMCUgMzAlIDBcIiAtPiB7MjAlLCAzMCUsIDB9XG4gICAgICAgICAgICBcIjIwJSAzMCVcIiAtPiB7MjAlLCAzMCV9XG4gICAgICAgICAgICBcIjIwJVwiIC0+IHsyMCUsIDIwJX1cbiAgICAqL1xuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZXMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKTtcbiAgICAgICAgY29uc3QgbnVtQXhlcyA9IHNwbGl0VmFsdWVzLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHtcbiAgICAgICAgICAgIFg6IHNwbGl0VmFsdWVzWzBdLFxuICAgICAgICAgICAgWTogKG51bUF4ZXMgPiAxKSA/IHNwbGl0VmFsdWVzWzFdIDogc3BsaXRWYWx1ZXNbMF1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobnVtQXhlcyA+IDIpIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWUuWiA9IHNwbGl0VmFsdWVzWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+IGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIGF4ZXMsICcgJylcbn07XG4iXX0=
return exports;
})();
var __small$_25 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _defaultProps = __small$_45;

var _dictionary = __small$_46;

var _utils = __small$_14;

exports.default = {
    defaultProps: {
        Hue: {
            min: 0,
            max: 360
        },
        Saturation: _defaultProps.percent,
        Lightness: _defaultProps.percent,
        Alpha: _defaultProps.opacity
    },

    test: function (value) {
        return value && value.indexOf('hsl') > -1;
    },

    split: function (value) {
        return (0, _utils.getColorValues)(value, _dictionary.hsl);
    },

    combine: function (values) {
        return (0, _utils.createFunctionString)((0, _utils.createDelimited)(values, _dictionary.hsl, ', ', 2), 'hsla');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFJZTtBQUNYLGtCQUFjO0FBQ1YsYUFBSztBQUNELGlCQUFLLENBQUw7QUFDQSxpQkFBSyxHQUFMO1NBRko7QUFJQSxrQ0FWQyxPQVVEO0FBQ0EsaUNBWEMsT0FXRDtBQUNBLDZCQVpVLE9BWVY7S0FQSjs7QUFVQSxVQUFNLFVBQUMsS0FBRDtlQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsS0FBZCxJQUF1QixDQUFDLENBQUQ7S0FBNUM7O0FBRU4sV0FBTyxVQUFDLEtBQUQ7ZUFBVyxXQWYwQixlQWUxQixDQUFlLEtBQWYsY0FoQmIsR0FnQmE7S0FBWDs7QUFFUCxhQUFTLFVBQUMsTUFBRDtlQUFZLFdBakJDLHFCQWlCRCxDQUFxQixXQWpCckMsZ0JBaUJxQyxDQUFnQixNQUFoQixjQWxCckMsR0FrQnFDLEVBQWtDLElBQWxDLEVBQXdDLENBQXhDLENBQXJCLEVBQWlFLE1BQWpFO0tBQVoiLCJmaWxlIjoiaHNsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGVyY2VudCwgb3BhY2l0eSB9IGZyb20gJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgeyBoc2wgYXMgaHNsVGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgY3JlYXRlRGVsaW1pdGVkLCBjcmVhdGVGdW5jdGlvblN0cmluZywgZ2V0Q29sb3JWYWx1ZXMgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIEh1ZToge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAzNjBcbiAgICAgICAgfSxcbiAgICAgICAgU2F0dXJhdGlvbjogcGVyY2VudCxcbiAgICAgICAgTGlnaHRuZXNzOiBwZXJjZW50LFxuICAgICAgICBBbHBoYTogb3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xKSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IGdldENvbG9yVmFsdWVzKHZhbHVlLCBoc2xUZXJtcyksXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVGdW5jdGlvblN0cmluZyhjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBoc2xUZXJtcywgJywgJywgMiksICdoc2xhJylcbn07XG4iXX0=
return exports;
})();
var __small$_26 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _dictionary = __small$_46;

var _utils = __small$_14;

var _px = __small$_27;

var _px2 = _interopRequireDefault(_px);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    defaultProps: _px2.default.defaultProps,

    /*
        Split dimensions in format "Top Right Bottom Left"
        
        @param [string]: Position values
            "20px 0 30px 40px" -> {20px, 0, 30px, 40px}
            "20px 0 30px" -> {20px, 0, 30px, 0}
            "20px 0" -> {20px, 0, 20px, 0}
            "20px" -> {20px, 20px, 20px, 20px}
        
        @return [object]: Object with T/R/B/L metrics
    */
    split: function (value) {
        var splitValue = {};
        var splitPositions = (0, _utils.splitSpaceDelimited)(value);
        var numPositions = splitPositions.length;
        var jumpBack = numPositions !== 1 ? 2 : 1;
        var j = 0;

        for (var i = 0; i < 4; i++) {
            splitValue[_dictionary.positions[i]] = splitPositions[j];

            // Jump back (to start) counter if we've reached the end of our values
            j++;
            j = j === numPositions ? j - jumpBack : j;
        }

        return splitValue;
    },

    combine: function (values) {
        return (0, _utils.createDelimited)(values, _dictionary.positions, ' ');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7a0JBSWU7QUFDWCxrQkFBYyxhQUFZLFlBQVo7Ozs7Ozs7Ozs7Ozs7QUFhZCxXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBTSxhQUFhLEVBQWIsQ0FEUTtBQUVkLFlBQU0saUJBQWlCLFdBbkJMLG9CQW1CSyxDQUFvQixLQUFwQixDQUFqQixDQUZRO0FBR2QsWUFBTSxlQUFlLGVBQWUsTUFBZixDQUhQO0FBSWQsWUFBTSxXQUFXLFlBQUMsS0FBaUIsQ0FBakIsR0FBc0IsQ0FBdkIsR0FBMkIsQ0FBM0IsQ0FKSDtBQUtkLFlBQUksSUFBSSxDQUFKLENBTFU7O0FBT2QsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksQ0FBSixFQUFPLEdBQXZCLEVBQTRCO0FBQ3hCLHVCQUFXLFlBMUJkLFNBMEJjLENBQVUsQ0FBVixDQUFYLElBQTJCLGVBQWUsQ0FBZixDQUEzQjs7O0FBRHdCLGFBSXhCLEdBSndCO0FBS3hCLGdCQUFJLENBQUMsS0FBTSxZQUFOLEdBQXNCLElBQUksUUFBSixHQUFlLENBQXRDLENBTG9CO1NBQTVCOztBQVFBLGVBQU8sVUFBUCxDQWZjO0tBQVg7O0FBa0JQLGFBQVMsVUFBQyxNQUFEO2VBQVksV0FuQ2hCLGdCQW1DZ0IsQ0FBZ0IsTUFBaEIsY0FwQ2hCLFNBb0NnQixFQUFtQyxHQUFuQztLQUFaIiwiZmlsZSI6InBvc2l0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBvc2l0aW9ucyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBjcmVhdGVEZWxpbWl0ZWQsIHNwbGl0U3BhY2VEZWxpbWl0ZWQgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHB4VmFsdWVUeXBlIGZyb20gJy4vcHgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiBweFZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBkaW1lbnNpb25zIGluIGZvcm1hdCBcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFBvc2l0aW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMHB4IDAgMzBweCA0MHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDQwcHh9XG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHggMFwiIC0+IHsyMHB4LCAwLCAyMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4XCIgLT4gezIwcHgsIDIwcHgsIDIwcHgsIDIwcHh9XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCBUL1IvQi9MIG1ldHJpY3NcbiAgICAqL1xuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHt9O1xuICAgICAgICBjb25zdCBzcGxpdFBvc2l0aW9ucyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpO1xuICAgICAgICBjb25zdCBudW1Qb3NpdGlvbnMgPSBzcGxpdFBvc2l0aW9ucy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGp1bXBCYWNrID0gKG51bVBvc2l0aW9ucyAhPT0gMSkgPyAyIDogMTtcbiAgICAgICAgbGV0IGogPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlW3Bvc2l0aW9uc1tpXV0gPSBzcGxpdFBvc2l0aW9uc1tqXTtcblxuICAgICAgICAgICAgLy8gSnVtcCBiYWNrICh0byBzdGFydCkgY291bnRlciBpZiB3ZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2Ygb3VyIHZhbHVlc1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgaiA9IChqID09PSBudW1Qb3NpdGlvbnMpID8gaiAtIGp1bXBCYWNrIDogajtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBwb3NpdGlvbnMsICcgJylcbn07Il19
return exports;
})();
var __small$_28 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _utils = __small$_14;

var _dictionary = __small$_46;

var _defaultProps = __small$_45;

exports.default = {
    defaultProps: {
        Red: _defaultProps.rgb,
        Green: _defaultProps.rgb,
        Blue: _defaultProps.rgb,
        Alpha: _defaultProps.opacity
    },

    test: function (value) {
        return value && value.indexOf('rgb') > -1;
    },

    split: function (value) {
        return (0, _utils.getColorValues)(value, _dictionary.rgb);
    },

    combine: function (values) {
        return (0, _utils.createFunctionString)((0, _utils.createDelimited)(values, _dictionary.rgb, ', ', 2), 'rgba');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9yZ2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFJZTtBQUNYLGtCQUFjO0FBQ1YsMkJBSkMsR0FJRDtBQUNBLDZCQUxDLEdBS0Q7QUFDQSw0QkFOQyxHQU1EO0FBQ0EsNkJBUG9CLE9BT3BCO0tBSko7O0FBT0EsVUFBTSxVQUFDLEtBQUQ7ZUFBWSxTQUFTLE1BQU0sT0FBTixDQUFjLEtBQWQsSUFBdUIsQ0FBQyxDQUFEO0tBQTVDOztBQUVOLFdBQU8sVUFBQyxLQUFEO2VBQVcsV0FkMEIsZUFjMUIsQ0FBZSxLQUFmLGNBYmIsR0FhYTtLQUFYOztBQUVQLGFBQVMsVUFBQyxNQUFEO2VBQVksV0FoQkMscUJBZ0JELENBQXFCLFdBaEJyQyxnQkFnQnFDLENBQWdCLE1BQWhCLGNBZnJDLEdBZXFDLEVBQWtDLElBQWxDLEVBQXdDLENBQXhDLENBQXJCLEVBQWlFLE1BQWpFO0tBQVoiLCJmaWxlIjoicmdiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGVsaW1pdGVkLCBjcmVhdGVGdW5jdGlvblN0cmluZywgZ2V0Q29sb3JWYWx1ZXMgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHsgcmdiIGFzIHJnYlRlcm1zIH0gZnJvbSAnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcbmltcG9ydCB7IHJnYiBhcyBkZWZhdWx0UkdCLCBvcGFjaXR5IGFzIGRlZmF1bHRPcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBSZWQ6IGRlZmF1bHRSR0IsXG4gICAgICAgIEdyZWVuOiBkZWZhdWx0UkdCLFxuICAgICAgICBCbHVlOiBkZWZhdWx0UkdCLFxuICAgICAgICBBbHBoYTogZGVmYXVsdE9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZigncmdiJykgPiAtMSksXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgcmdiVGVybXMpLFxuXG4gICAgY29tYmluZTogKHZhbHVlcykgPT4gY3JlYXRlRnVuY3Rpb25TdHJpbmcoY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgcmdiVGVybXMsICcsICcsIDIpLCAncmdiYScpXG59OyJdfQ==
return exports;
})();
var __small$_24 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _rgb = __small$_28;

var _rgb2 = _interopRequireDefault(_rgb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    defaultProps: _rgb2.default.defaultProps,

    test: function (value) {
        return value && value.indexOf('#') > -1;
    },

    split: function (value) {
        var r = undefined,
            g = undefined,
            b = undefined;

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
        return _rgb2.default.combine(values);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9oZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFFZTtBQUNYLGtCQUFjLGNBQUksWUFBSjs7QUFFZCxVQUFNLFVBQUMsS0FBRDtlQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsR0FBZCxJQUFxQixDQUFDLENBQUQ7S0FBMUM7O0FBRU4sV0FBTyxVQUFDLEtBQUQsRUFBVztBQUNkLFlBQUksYUFBSjtZQUFPLGFBQVA7WUFBVSxhQUFWOzs7QUFEYyxZQUlWLE1BQU0sTUFBTixHQUFlLENBQWYsRUFBa0I7QUFDbEIsZ0JBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKLENBRGtCO0FBRWxCLGdCQUFJLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSixDQUZrQjtBQUdsQixnQkFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUo7OztBQUhrQixTQUF0QixNQU1PO0FBQ0gsb0JBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKLENBREc7QUFFSCxvQkFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUosQ0FGRztBQUdILG9CQUFJLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSixDQUhHO0FBSUgscUJBQUssQ0FBTCxDQUpHO0FBS0gscUJBQUssQ0FBTCxDQUxHO0FBTUgscUJBQUssQ0FBTCxDQU5HO2FBTlA7O0FBZUEsZUFBTztBQUNILGlCQUFLLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBTDtBQUNBLG1CQUFPLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBUDtBQUNBLGtCQUFNLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBTjtBQUNBLG1CQUFPLENBQVA7U0FKSixDQW5CYztLQUFYOztBQTJCUCxhQUFTLFVBQUMsTUFBRDtlQUFZLGNBQUksT0FBSixDQUFZLE1BQVo7S0FBWiIsImZpbGUiOiJoZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmdiIGZyb20gJy4vcmdiJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogcmdiLmRlZmF1bHRQcm9wcyxcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJyMnKSA+IC0xKSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHIsIGcsIGI7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAxKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDMsIDEpO1xuICAgICAgICAgICAgciArPSByO1xuICAgICAgICAgICAgZyArPSBnO1xuICAgICAgICAgICAgYiArPSBiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgICAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgICAgICAgIEFscGhhOiAxXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+IHJnYi5jb21iaW5lKHZhbHVlcylcbn07Il19
return exports;
})();
var __small$_22 = (function() {
var exports = {};
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _rgb = __small$_28;

var _rgb2 = _interopRequireDefault(_rgb);

var _hsl = __small$_25;

var _hsl2 = _interopRequireDefault(_hsl);

var _hex = __small$_24;

var _hex2 = _interopRequireDefault(_hex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colorTypes = [_rgb2.default, _hsl2.default, _hex2.default];
var numColorTypes = colorTypes.length;

exports.default = {
    defaultProps: _extends({}, _rgb2.default.defaultProps, _hsl2.default.defaultProps),

    test: function (value) {
        return _rgb2.default.test(value) || _hex2.default.test(value) || _hsl2.default.test(value);
    },

    split: function (value) {
        for (var i = 0; i < numColorTypes; i++) {
            if (colorTypes[i].test(value)) {
                return colorTypes[i].split(value);
            }
        }
    },

    combine: function (values) {
        return values.Red !== undefined ? _rgb2.default.combine(values) : _hsl2.default.combine(values);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQU0sYUFBYSw2Q0FBYjtBQUNOLElBQU0sZ0JBQWdCLFdBQVcsTUFBWDs7a0JBRVA7QUFDWCwrQkFBbUIsY0FBSSxZQUFKLEVBQXFCLGNBQUksWUFBSixDQUF4Qzs7QUFFQSxVQUFNLFVBQUMsS0FBRDtlQUFXLGNBQUksSUFBSixDQUFTLEtBQVQsS0FBbUIsY0FBSSxJQUFKLENBQVMsS0FBVCxDQUFuQixJQUFzQyxjQUFJLElBQUosQ0FBUyxLQUFULENBQXRDO0tBQVg7O0FBRU4sV0FBTyxVQUFDLEtBQUQsRUFBVztBQUNkLGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLGFBQUosRUFBbUIsR0FBbkMsRUFBd0M7QUFDcEMsZ0JBQUksV0FBVyxDQUFYLEVBQWMsSUFBZCxDQUFtQixLQUFuQixDQUFKLEVBQStCO0FBQzNCLHVCQUFPLFdBQVcsQ0FBWCxFQUFjLEtBQWQsQ0FBb0IsS0FBcEIsQ0FBUCxDQUQyQjthQUEvQjtTQURKO0tBREc7O0FBUVAsYUFBUyxVQUFDLE1BQUQ7ZUFBWSxNQUFDLENBQU8sR0FBUCxLQUFlLFNBQWYsR0FBNEIsY0FBSSxPQUFKLENBQVksTUFBWixDQUE3QixHQUFtRCxjQUFJLE9BQUosQ0FBWSxNQUFaLENBQW5EO0tBQVoiLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmdiIGZyb20gJy4vcmdiJztcbmltcG9ydCBoc2wgZnJvbSAnLi9oc2wnO1xuaW1wb3J0IGhleCBmcm9tICcuL2hleCc7XG5cbmNvbnN0IGNvbG9yVHlwZXMgPSBbcmdiLCBoc2wsIGhleF07XG5jb25zdCBudW1Db2xvclR5cGVzID0gY29sb3JUeXBlcy5sZW5ndGg7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHsgLi4ucmdiLmRlZmF1bHRQcm9wcywgLi4uaHNsLmRlZmF1bHRQcm9wcyB9LFxuXG4gICAgdGVzdDogKHZhbHVlKSA9PiByZ2IudGVzdCh2YWx1ZSkgfHwgaGV4LnRlc3QodmFsdWUpIHx8IGhzbC50ZXN0KHZhbHVlKSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db2xvclR5cGVzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb2xvclR5cGVzW2ldLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yVHlwZXNbaV0uc3BsaXQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+ICh2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQpID8gcmdiLmNvbWJpbmUodmFsdWVzKSA6IGhzbC5jb21iaW5lKHZhbHVlcylcbn07XG4iXX0=
return exports;
})();
var __small$_30 = (function() {
var exports = {};
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _color = __small$_22;

var _color2 = _interopRequireDefault(_color);

var _px = __small$_27;

var _dictionary = __small$_46;

var _utils = __small$_14;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shadowWithoutColorTerms = _dictionary.shadow.slice(0, 4);

exports.default = {
    defaultProps: _extends({}, _color2.default.defaultProps, {
        X: _px.defaultProps,
        Y: _px.defaultProps,
        Radius: _px.defaultProps,
        Spread: _px.defaultProps
    }),

    split: function (value) {
        var bits = (0, _utils.splitSpaceDelimited)(value);
        var hasReachedColor = false;
        var colorProp = '';
        var splitValue = {};

        bits.forEach(function (bit, i) {
            // If we've reached the color props, append to color string
            if (hasReachedColor || _color2.default.test(bit)) {
                hasReachedColor = true;
                colorProp += bit;

                // Else process shadow value
            } else {
                    splitValue[_dictionary.shadow[i]] = bit;
                }
        });

        var splitColorProps = _color2.default.split(colorProp);

        return _extends({}, splitValue, { splitColorProps: splitColorProps });
    },

    combine: function (values) {
        return (0, _utils.createDelimited)(values, shadowWithoutColorTerms, ' ') + _color2.default.combine(values);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSwwQkFBMEIsWUFIdkIsTUFHdUIsQ0FBWSxLQUFaLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLENBQTFCOztrQkFFUztBQUNYLCtCQUNPLGdCQUFNLFlBQU47QUFDSCxlQVRDLFlBU0Q7QUFDQSxlQVZDLFlBVUQ7QUFDQSxvQkFYQyxZQVdEO0FBQ0Esb0JBWkMsWUFZRDtNQUxKOztBQVFBLFdBQU8sVUFBQyxLQUFELEVBQVc7QUFDZCxZQUFNLE9BQU8sV0FkWixvQkFjWSxDQUFvQixLQUFwQixDQUFQLENBRFE7QUFFZCxZQUFJLGtCQUFrQixLQUFsQixDQUZVO0FBR2QsWUFBSSxZQUFZLEVBQVosQ0FIVTtBQUlkLFlBQUksYUFBYSxFQUFiLENBSlU7O0FBTWQsYUFBSyxPQUFMLENBQWEsVUFBQyxHQUFELEVBQU0sQ0FBTixFQUFZOztBQUVyQixnQkFBSSxtQkFBbUIsZ0JBQU0sSUFBTixDQUFXLEdBQVgsQ0FBbkIsRUFBb0M7QUFDcEMsa0NBQWtCLElBQWxCLENBRG9DO0FBRXBDLDZCQUFhLEdBQWI7OztBQUZvQyxhQUF4QyxNQUtPO0FBQ0gsK0JBQVcsWUE1QmxCLE1BNEJrQixDQUFZLENBQVosQ0FBWCxJQUE2QixHQUE3QixDQURHO2lCQUxQO1NBRlMsQ0FBYixDQU5jOztBQWtCZCxZQUFNLGtCQUFrQixnQkFBTSxLQUFOLENBQVksU0FBWixDQUFsQixDQWxCUTs7QUFvQmQsNEJBQVksY0FBWSxtQ0FBeEIsQ0FwQmM7S0FBWDs7QUF1QlAsYUFBUyxVQUFDLE1BQUQ7ZUFBWSxXQXBDSyxnQkFvQ0wsQ0FBZ0IsTUFBaEIsRUFBd0IsdUJBQXhCLEVBQWlELEdBQWpELElBQXdELGdCQUFNLE9BQU4sQ0FBYyxNQUFkLENBQXhEO0tBQVoiLCJmaWxlIjoic2hhZG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9yIGZyb20gJy4vY29sb3InO1xuaW1wb3J0IHsgZGVmYXVsdFByb3BzIGFzIHB4RGVmYXVsdFByb3BzIH0gZnJvbSAnLi9weCc7XG5pbXBvcnQgeyBzaGFkb3cgYXMgc2hhZG93VGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgc3BsaXRTcGFjZURlbGltaXRlZCwgY3JlYXRlRGVsaW1pdGVkIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3Qgc2hhZG93V2l0aG91dENvbG9yVGVybXMgPSBzaGFkb3dUZXJtcy5zbGljZSgwLCA0KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICAuLi5jb2xvci5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFg6IHB4RGVmYXVsdFByb3BzLFxuICAgICAgICBZOiBweERlZmF1bHRQcm9wcyxcbiAgICAgICAgUmFkaXVzOiBweERlZmF1bHRQcm9wcyxcbiAgICAgICAgU3ByZWFkOiBweERlZmF1bHRQcm9wc1xuICAgIH0sXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJpdHMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKTtcbiAgICAgICAgbGV0IGhhc1JlYWNoZWRDb2xvciA9IGZhbHNlO1xuICAgICAgICBsZXQgY29sb3JQcm9wID0gJyc7XG4gICAgICAgIGxldCBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgYml0cy5mb3JFYWNoKChiaXQsIGkpID0+IHtcbiAgICAgICAgICAgIC8vIElmIHdlJ3ZlIHJlYWNoZWQgdGhlIGNvbG9yIHByb3BzLCBhcHBlbmQgdG8gY29sb3Igc3RyaW5nXG4gICAgICAgICAgICBpZiAoaGFzUmVhY2hlZENvbG9yIHx8IGNvbG9yLnRlc3QoYml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgICAgICAgLy8gRWxzZSBwcm9jZXNzIHNoYWRvdyB2YWx1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlW3NoYWRvd1Rlcm1zW2ldXSA9IGJpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc3BsaXRDb2xvclByb3BzID0gY29sb3Iuc3BsaXQoY29sb3JQcm9wKTtcblxuICAgICAgICByZXR1cm4geyAuLi5zcGxpdFZhbHVlLCBzcGxpdENvbG9yUHJvcHMgfTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogKHZhbHVlcykgPT4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBjb2xvci5jb21iaW5lKHZhbHVlcylcbn07XG4iXX0=
return exports;
})();
var __small$_40 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _alpha = __small$_19;

var _alpha2 = _interopRequireDefault(_alpha);

var _axes = __small$_21;

var _axes2 = _interopRequireDefault(_axes);

var _color = __small$_22;

var _color2 = _interopRequireDefault(_color);

var _complex = __small$_23;

var _complex2 = _interopRequireDefault(_complex);

var _scale = __small$_29;

var _scale2 = _interopRequireDefault(_scale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    fill: _color2.default,
    stroke: _color2.default,
    scale: _scale2.default,
    scaleX: _scale2.default,
    scaleY: _scale2.default,
    transformOrigin: _axes2.default,
    d: _complex2.default,
    opacity: _alpha2.default,
    fillOpacity: _alpha2.default,
    strokeOpacity: _alpha2.default
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvc3ZnL3ZhbHVlLXR5cGUtbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQU1lO0FBQ1gseUJBRFc7QUFFWCwyQkFGVztBQUdYLDBCQUhXO0FBSVgsMkJBSlc7QUFLWCwyQkFMVztBQU1YLG1DQU5XO0FBT1gsd0JBUFc7QUFRWCw0QkFSVztBQVNYLGdDQVRXO0FBVVgsa0NBVlciLCJmaWxlIjoidmFsdWUtdHlwZS1tYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWxwaGEgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvYWxwaGEnO1xuaW1wb3J0IGF4ZXMgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvYXhlcyc7XG5pbXBvcnQgY29sb3IgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InO1xuaW1wb3J0IGNvbXBsZXggZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvY29tcGxleCc7XG5pbXBvcnQgc2NhbGUgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZmlsbDogY29sb3IsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzY2FsZTogc2NhbGUsXG4gICAgc2NhbGVYOiBzY2FsZSxcbiAgICBzY2FsZVk6IHNjYWxlLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogYXhlcyxcbiAgICBkOiBjb21wbGV4LFxuICAgIG9wYWNpdHk6IGFscGhhLFxuICAgIGZpbGxPcGFjaXR5OiBhbHBoYSxcbiAgICBzdHJva2VPcGFjaXR5OiBhbHBoYVxufTsiXX0=
return exports;
})();
var __small$_6 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _utils = __small$_14;

var _loop = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;
exports.getProcessId = getProcessId;
exports.activate = activate;
exports.deactivate = deactivate;

var _timer = __small$_16;

var _timer2 = _interopRequireDefault(_timer);

var _tick = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;
/*
    Detect and load an appropriate clock setting for the environment
*/

var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame ? true : false;

var tick = undefined;

if (hasRAF) {
    tick = window.requestAnimationFrame;
} else {
    (function () {
        /*
            requestAnimationFrame polyfill
            
            For IE8/9 Flinstones and non-browser environments
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

exports.default = tick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLElBQU0sU0FBUyxPQUFRLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBTyxxQkFBUCxHQUFnQyxJQUFsRSxHQUF5RSxLQUF6RTs7QUFFZixJQUFJLGdCQUFKOztBQUVBLElBQUksTUFBSixFQUFZO0FBQ1IsV0FBTyxPQUFPLHFCQUFQLENBREM7Q0FBWixNQUdPOzs7Ozs7Ozs7Ozs7Ozs7QUFlSCxZQUFJLFdBQVcsQ0FBWDs7QUFFSixlQUFPLFVBQUMsUUFBRCxFQUFjO0FBQ2pCLGdCQUFNLGNBQWMsSUFBSSxJQUFKLEdBQVcsT0FBWCxFQUFkLENBRFc7QUFFakIsZ0JBQU0sYUFBYSxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTSxjQUFjLFFBQWQsQ0FBTixDQUF6QixDQUZXOztBQUlqQix1QkFBVyxjQUFjLFVBQWQsQ0FKTTs7QUFNakIsdUJBQVc7dUJBQU0sU0FBUyxRQUFUO2FBQU4sRUFBMEIsVUFBckMsRUFOaUI7U0FBZDtTQWpCSjtDQUhQOztrQkE4QmUiLCJmaWxlIjoidGljay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxuY29uc3QgaGFzUkFGID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpID8gdHJ1ZSA6IGZhbHNlO1xuXG5sZXQgdGljaztcblxuaWYgKGhhc1JBRikge1xuICAgIHRpY2sgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG59IGVsc2Uge1xuICAgIC8qXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgICBcbiAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuXG4gICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgXG4gICAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgIFxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgICBcbiAgICAgICAgTUlUIGxpY2Vuc2VcbiAgICAqL1xuICAgIGxldCBsYXN0VGltZSA9IDA7XG5cbiAgICB0aWNrID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjayhsYXN0VGltZSksIHRpbWVUb0NhbGwpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpY2s7Il19
return exports;
})());

var _tick2 = _interopRequireDefault(_tick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var processOrder = [{ step: 'onFrameStart' }, { step: 'onUpdate' }, { step: 'willRender', decideRender: true }, { step: 'onPreRender', isRender: true }, { step: 'onRender', isRender: true }, { step: 'onPostRender', isRender: true }, { step: 'onFrameEnd' }, { step: 'onCleanup' }];
var numProcessSteps = processOrder.length;

// [boolean]: Is loop running?
var isRunning = false;

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

// [array]: Array of process IDs queued for activation
var activateQueue = [];

// [array]: Array of process IDs queued for deactivation
var deactivateQueue = [];

/*
    Update lists

    @param [number]
    @param [array]
    @param [array]
*/
function updateLists(id, inList, outList) {
    var inPosition = inList.indexOf(inList);
    var outPosition = outList.indexOf(outList);

    if (inPosition === -1) {
        inList.push(id);
    }

    if (outPosition > -1) {
        outList.splice(outPosition, 1);
    }
}

/*
    Update running

    [boolean]: `true` to add
    [boolean]: `true` if lazy
*/
function updateCount(add, isLazy) {
    var modify = add ? 1 : -1;

    runningCount += modify;

    if (!isLazy) {
        activeCount += modify;
    }
}

function resolveQueues() {
    var activateQueueLength = activateQueue.length;
    var deactivateQueueLength = deactivateQueue.length;

    while (deactivateQueueLength--) {
        var id = deactivateQueue[deactivateQueueLength];
        var activeIdIndex = runningIds.indexOf(id);
        var process = runningProcesses[id];

        if (activeIdIndex > -1) {
            runningIds.splice(activeIdIndex, 1);
            updateCount(false, process.isLazy);
            runningProcesses[id] = undefined;
        }

        if (process.onDeactivate) {
            process.onEnd(process);
        }
    }

    while (activateQueueLength--) {
        var id = activateQueue[activateQueueLength];
        var activeIdIndex = runningIds.indexOf(id);
        var process = runningProcesses[id];

        if (activeIdIndex === -1) {
            runningIds.push(id);
        }

        updateCount(true, process.isLazy);

        if (process.onActivate) {
            process.onStart(process);
        }
    }

    activateQueue = [];
    deactivateQueue = [];
}

/*
    [timestamp]: Frame timestamp
    [int]: Time since last frame
*/
function fireAll(frameStamp, elapsed) {
    var method = {};
    var methodName = '';
    var isRenderStep = false;
    var process = undefined;
    var result = undefined;

    resolveQueues();

    var numRunning = runningCount;

    for (var i = 0; i < numProcessSteps; i++) {
        method = processOrder[i];
        methodName = method.step;
        isRenderStep = method.isRender ? true : false;

        for (var i2 = 0; i2 < numRunning; i2++) {
            process = runningProcesses[runningIds[i2]];

            if (process && process[methodName] && (!isRenderStep || isRenderStep && process._renderThisFrame === true)) {
                result = process[methodName].call(process, process, frameStamp, elapsed);
            }

            if (method.decideRender) {
                process._renderThisFrame = process[methodName] && result !== true ? false : true;
            }
        }
    }

    return activeCount ? true : false;
}

// Function to fire every frame
function frame() {
    (0, _tick2.default)(function (frameStamp) {
        if (isRunning) {
            frame();
        }

        _timer2.default.update(frameStamp);
        isRunning = fireAll(frameStamp, _timer2.default.getElapsed());
    });
}

// Start loop
function start() {
    if (!isRunning) {
        _timer2.default.start();
        isRunning = true;
        frame();
    }
}

// Exports
function getProcessId() {
    return currentProcessId++;
}

/*
    [int]: Process ID to activate
    [Process]: Process to activate
*/
function activate(id, process) {
    updateLists(id, activateQueue, deactivateQueue);

    runningProcesses[id] = process;

    if (!isRunning) {
        start();
    }
}

/*
    [int]: Process ID to deactivate
*/
function deactivate(id) {
    updateLists(id, deactivateQueue, activateQueue);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBNktnQjtRQVFBO1FBYUE7Ozs7Ozs7Ozs7OztBQS9MaEIsSUFBTSxlQUFlLENBQ2pCLEVBQUUsTUFBTSxjQUFOLEVBRGUsRUFFakIsRUFBRSxNQUFNLFVBQU4sRUFGZSxFQUdqQixFQUFFLE1BQU0sWUFBTixFQUFvQixjQUFjLElBQWQsRUFITCxFQUlqQixFQUFFLE1BQU0sYUFBTixFQUFxQixVQUFVLElBQVYsRUFKTixFQUtqQixFQUFFLE1BQU0sVUFBTixFQUFrQixVQUFVLElBQVYsRUFMSCxFQU1qQixFQUFFLE1BQU0sY0FBTixFQUFzQixVQUFVLElBQVYsRUFOUCxFQU9qQixFQUFFLE1BQU0sWUFBTixFQVBlLEVBUWpCLEVBQUUsTUFBTSxXQUFOLEVBUmUsQ0FBZjtBQVVOLElBQU0sa0JBQWtCLGFBQWEsTUFBYjs7O0FBR3hCLElBQUksWUFBWSxLQUFaOzs7QUFHSixJQUFJLG1CQUFtQixDQUFuQjs7O0FBR0osSUFBSSxlQUFlLENBQWY7OztBQUdKLElBQUksY0FBYyxDQUFkOzs7QUFHSixJQUFNLGFBQWEsRUFBYjs7O0FBR04sSUFBTSxtQkFBbUIsRUFBbkI7OztBQUdOLElBQUksZ0JBQWdCLEVBQWhCOzs7QUFHSixJQUFJLGtCQUFrQixFQUFsQjs7Ozs7Ozs7O0FBU0osU0FBUyxXQUFULENBQXFCLEVBQXJCLEVBQXlCLE1BQXpCLEVBQWlDLE9BQWpDLEVBQTBDO0FBQ3RDLFFBQU0sYUFBYSxPQUFPLE9BQVAsQ0FBZSxNQUFmLENBQWIsQ0FEZ0M7QUFFdEMsUUFBTSxjQUFjLFFBQVEsT0FBUixDQUFnQixPQUFoQixDQUFkLENBRmdDOztBQUl0QyxRQUFJLGVBQWUsQ0FBQyxDQUFELEVBQUk7QUFDbkIsZUFBTyxJQUFQLENBQVksRUFBWixFQURtQjtLQUF2Qjs7QUFJQSxRQUFJLGNBQWMsQ0FBQyxDQUFELEVBQUk7QUFDbEIsZ0JBQVEsTUFBUixDQUFl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MEc7YUFBOUc7O0FBSUEsZ0JBQUksT0FBTyxZQUFQLEVBQXFCO0FBQ3JCLHdCQUFRLGdCQUFSLEdBQTJCLE9BQUMsQ0FBUSxVQUFSLEtBQXVCLFdBQVcsSUFBWCxHQUFtQixLQUEzQyxHQUFtRCxJQUFuRCxDQUROO2FBQXpCO1NBUEo7S0FMSjs7QUFrQkEsV0FBTyxjQUFjLElBQWQsR0FBcUIsS0FBckIsQ0E3QjJCO0NBQXRDOzs7QUFpQ0EsU0FBUyxLQUFULEdBQWlCO0FBQ2Isd0JBQUssVUFBQyxVQUFELEVBQWdCO0FBQ2pCLFlBQUksU0FBSixFQUFlO0FBQ1gsb0JBRFc7U0FBZjs7QUFJQSx3QkFBTSxNQUFOLENBQWEsVUFBYixFQUxpQjtBQU1qQixvQkFBWSxRQUFRLFVBQVIsRUFBb0IsZ0JBQU0sVUFBTixFQUFwQixDQUFaLENBTmlCO0tBQWhCLENBQUwsQ0FEYTtDQUFqQjs7O0FBWUEsU0FBUyxLQUFULEdBQWlCO0FBQ2IsUUFBSSxDQUFDLFNBQUQsRUFBWTtBQUNaLHdCQUFNLEtBQU4sR0FEWTtBQUVaLG9CQUFZLElBQVosQ0FGWTtBQUdaLGdCQUhZO0tBQWhCO0NBREo7OztBQVNPLFNBQVMsWUFBVCxHQUF3QjtBQUMzQixXQUFPLGtCQUFQLENBRDJCO0NBQXhCOzs7Ozs7QUFRQSxTQUFTLFFBQVQsQ0FBa0IsRUFBbEIsRUFBc0IsT0FBdEIsRUFBK0I7QUFDbEMsZ0JBQVksRUFBWixFQUFnQixhQUFoQixFQUErQixlQUEvQixFQURrQzs7QUFHbEMscUJBQWlCLEVBQWpCLElBQXVCLE9BQXZCLENBSGtDOztBQUtsQyxRQUFJLENBQUMsU0FBRCxFQUFZO0FBQ1osZ0JBRFk7S0FBaEI7Q0FMRzs7Ozs7QUFhQSxTQUFTLFVBQVQsQ0FBb0IsRUFBcEIsRUFBd0I7QUFDM0IsZ0JBQVksRUFBWixFQUFnQixlQUFoQixFQUFpQyxhQUFqQyxFQUQyQjtDQUF4QiIsImZpbGUiOiJsb29wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRpbWVyIGZyb20gJy4vdGltZXInO1xuaW1wb3J0IHRpY2sgZnJvbSAnLi90aWNrJztcblxuY29uc3QgcHJvY2Vzc09yZGVyID0gW1xuICAgIHsgc3RlcDogJ29uRnJhbWVTdGFydCcgfSxcbiAgICB7IHN0ZXA6ICdvblVwZGF0ZScgfSxcbiAgICB7IHN0ZXA6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBzdGVwOiAnb25QcmVSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICAgIHsgc3RlcDogJ29uUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IHN0ZXA6ICdvblBvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICAgIHsgc3RlcDogJ29uRnJhbWVFbmQnIH0sXG4gICAgeyBzdGVwOiAnb25DbGVhbnVwJyB9XG5dO1xuY29uc3QgbnVtUHJvY2Vzc1N0ZXBzID0gcHJvY2Vzc09yZGVyLmxlbmd0aDtcblxuLy8gW2Jvb2xlYW5dOiBJcyBsb29wIHJ1bm5pbmc/XG5sZXQgaXNSdW5uaW5nID0gZmFsc2U7XG5cbi8vIFtpbnRdOiBQcm9jZXNzIElELCBpbmNyZW1lbnRlZCBmb3IgZWFjaCBuZXcgcHJvY2Vzc1xubGV0IGN1cnJlbnRQcm9jZXNzSWQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgcHJvY2Vzc2VzXG5sZXQgcnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBydW5uaW5nIG5vbi1iYWNrZ3JvdW5kIHByb2Nlc3Nlc1xubGV0IGFjdGl2ZUNvdW50ID0gMDtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgYWN0aXZlIHByb2Nlc3MgSURzXG5jb25zdCBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgYWN0aXZlIHByb2Nlc3Nlc1xuY29uc3QgcnVubmluZ1Byb2Nlc3NlcyA9IHt9O1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGFjdGl2YXRpb25cbmxldCBhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHByb2Nlc3MgSURzIHF1ZXVlZCBmb3IgZGVhY3RpdmF0aW9uXG5sZXQgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8qXG4gICAgVXBkYXRlIGxpc3RzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEBwYXJhbSBbYXJyYXldXG4qL1xuZnVuY3Rpb24gdXBkYXRlTGlzdHMoaWQsIGluTGlzdCwgb3V0TGlzdCkge1xuICAgIGNvbnN0IGluUG9zaXRpb24gPSBpbkxpc3QuaW5kZXhPZihpbkxpc3QpO1xuICAgIGNvbnN0IG91dFBvc2l0aW9uID0gb3V0TGlzdC5pbmRleE9mKG91dExpc3QpO1xuXG4gICAgaWYgKGluUG9zaXRpb24gPT09IC0xKSB7XG4gICAgICAgIGluTGlzdC5wdXNoKGlkKTtcbiAgICB9XG5cbiAgICBpZiAob3V0UG9zaXRpb24gPiAtMSkge1xuICAgICAgICBvdXRMaXN0LnNwbGljZShvdXRQb3NpdGlvbiwgMSk7XG4gICAgfVxufVxuXG4vKlxuICAgIFVwZGF0ZSBydW5uaW5nXG5cbiAgICBbYm9vbGVhbl06IGB0cnVlYCB0byBhZGRcbiAgICBbYm9vbGVhbl06IGB0cnVlYCBpZiBsYXp5XG4qL1xuZnVuY3Rpb24gdXBkYXRlQ291bnQoYWRkLCBpc0xhenkpIHtcbiAgICBjb25zdCBtb2RpZnkgPSBhZGQgPyAxIDogLTE7XG5cbiAgICBydW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gICAgaWYgKCFpc0xhenkpIHtcbiAgICAgICAgYWN0aXZlQ291bnQgKz0gbW9kaWZ5O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVF1ZXVlcygpIHtcbiAgICBsZXQgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuICAgIGxldCBkZWFjdGl2YXRlUXVldWVMZW5ndGggPSBkZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGRlYWN0aXZhdGVRdWV1ZUxlbmd0aC0tKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZGVhY3RpdmF0ZVF1ZXVlW2RlYWN0aXZhdGVRdWV1ZUxlbmd0aF07XG4gICAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICBjb25zdCBwcm9jZXNzID0gcnVubmluZ1Byb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcnVubmluZ0lkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG4gICAgICAgICAgICB1cGRhdGVDb3VudChmYWxzZSwgcHJvY2Vzcy5pc0xhenkpO1xuICAgICAgICAgICAgcnVubmluZ1Byb2Nlc3Nlc1tpZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvY2Vzcy5vbkRlYWN0aXZhdGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3Mub25FbmQocHJvY2Vzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aGlsZSAoYWN0aXZhdGVRdWV1ZUxlbmd0aC0tKSB7XG4gICAgICAgIGNvbnN0IGlkID0gYWN0aXZhdGVRdWV1ZVthY3RpdmF0ZVF1ZXVlTGVuZ3RoXTtcbiAgICAgICAgY29uc3QgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZCk7XG4gICAgICAgIGNvbnN0IHByb2Nlc3MgPSBydW5uaW5nUHJvY2Vzc2VzW2lkXTtcblxuICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJ1bm5pbmdJZHMucHVzaChpZCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudCh0cnVlLCBwcm9jZXNzLmlzTGF6eSk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3Mub25BY3RpdmF0ZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5vblN0YXJ0KHByb2Nlc3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0aXZhdGVRdWV1ZSA9IFtdO1xuICAgIGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xufVxuXG4vKlxuICAgIFt0aW1lc3RhbXBdOiBGcmFtZSB0aW1lc3RhbXBcbiAgICBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4qL1xuZnVuY3Rpb24gZmlyZUFsbChmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgbGV0IG1ldGhvZCA9IHt9O1xuICAgIGxldCBtZXRob2ROYW1lID0gJyc7XG4gICAgbGV0IGlzUmVuZGVyU3RlcCA9IGZhbHNlO1xuICAgIGxldCBwcm9jZXNzO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICByZXNvbHZlUXVldWVzKCk7XG5cbiAgICBjb25zdCBudW1SdW5uaW5nID0gcnVubmluZ0NvdW50O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Qcm9jZXNzU3RlcHM7IGkrKykge1xuICAgICAgICBtZXRob2QgPSBwcm9jZXNzT3JkZXJbaV07XG4gICAgICAgIG1ldGhvZE5hbWUgPSBtZXRob2Quc3RlcDtcbiAgICAgICAgaXNSZW5kZXJTdGVwID0gbWV0aG9kLmlzUmVuZGVyID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGkyID0gMDsgaTIgPCBudW1SdW5uaW5nOyBpMisrKSB7XG4gICAgICAgICAgICBwcm9jZXNzID0gcnVubmluZ1Byb2Nlc3Nlc1tydW5uaW5nSWRzW2kyXV07XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzICYmIHByb2Nlc3NbbWV0aG9kTmFtZV0gJiYgKCFpc1JlbmRlclN0ZXAgfHwgKGlzUmVuZGVyU3RlcCAmJiBwcm9jZXNzLl9yZW5kZXJUaGlzRnJhbWUgPT09IHRydWUpKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHByb2Nlc3NbbWV0aG9kTmFtZV0uY2FsbChwcm9jZXNzLCBwcm9jZXNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1ldGhvZC5kZWNpZGVSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLl9yZW5kZXJUaGlzRnJhbWUgPSAocHJvY2Vzc1ttZXRob2ROYW1lXSAmJiByZXN1bHQgIT09IHRydWUpID8gZmFsc2UgOiB0cnVlOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhY3RpdmVDb3VudCA/IHRydWUgOiBmYWxzZTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZmlyZSBldmVyeSBmcmFtZVxuZnVuY3Rpb24gZnJhbWUoKSB7XG4gICAgdGljaygoZnJhbWVTdGFtcCkgPT4ge1xuICAgICAgICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICBmcmFtZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGltZXIudXBkYXRlKGZyYW1lU3RhbXApO1xuICAgICAgICBpc1J1bm5pbmcgPSBmaXJlQWxsKGZyYW1lU3RhbXAsIHRpbWVyLmdldEVsYXBzZWQoKSk7XG4gICAgfSk7XG59XG5cbi8vIFN0YXJ0IGxvb3BcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgICAgIGZyYW1lKCk7XG4gICAgfVxufVxuXG4vLyBFeHBvcnRzXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvY2Vzc0lkKCkge1xuICAgIHJldHVybiBjdXJyZW50UHJvY2Vzc0lkKys7XG59XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gYWN0aXZhdGVcbiAgICBbUHJvY2Vzc106IFByb2Nlc3MgdG8gYWN0aXZhdGVcbiovXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGUoaWQsIHByb2Nlc3MpIHtcbiAgICB1cGRhdGVMaXN0cyhpZCwgYWN0aXZhdGVRdWV1ZSwgZGVhY3RpdmF0ZVF1ZXVlKTtcbiAgICBcbiAgICBydW5uaW5nUHJvY2Vzc2VzW2lkXSA9IHByb2Nlc3M7XG5cbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBzdGFydCgpO1xuICAgIH1cbn1cblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBkZWFjdGl2YXRlXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGUoaWQpIHtcbiAgICB1cGRhdGVMaXN0cyhpZCwgZGVhY3RpdmF0ZVF1ZXVlLCBhY3RpdmF0ZVF1ZXVlKTtcbn0iXX0=
return exports;
})());

var loop = _interopRequireWildcard(_loop);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Process = function () {
    /*
        [object]: Properties
        [boolean] (optional): Is Process lazy?
    */

    function Process(props, isLazy) {
        _classCallCheck(this, Process);

        this.set(this.getDefaultProps());
        this.set(props);

        this.isLazy = isLazy || false;
        this.id = loop.getProcessId();
        this.isActive = false;
    }

    Process.prototype.set = function set(props) {
        var _this = this;

        (0, _utils.each)(props, function (value, key) {
            return _this[key] = value;
        });
        return this;
    };

    Process.prototype.start = function start() {
        this.isActive = true;
        loop.activate(this.id, this);

        if (this.onStart) {
            this.onStart(this);
        }

        return this;
    };

    Process.prototype.stop = function stop() {
        this.isActive = false;
        loop.deactivate(this.id);

        if (this.onStop) {
            this.onStop(this);
        }

        return this;
    };

    Process.prototype.once = function once() {
        var _this2 = this;

        this.onCleanup = function () {
            _this2.stop();
            _this2.onCleanup = undefined;
        };

        this.start();

        return this;
    };

    /*
        # Get default Action properties
         @return [object]
    */

    Process.prototype.getDefaultProps = function getDefaultProps() {
        return {};
    };

    /*
        # Extend this Process with new properties
        ## Returns new instance of this Process's `prototype` with existing and new properties
         @param [object] (optional)
        @return [Process]
    */

    Process.prototype.inherit = function inherit(props) {
        var newProcess = new this.constructor(this);
        return newProcess.set(props);
    };

    return Process;
}();

exports.default = Process;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFDWTs7Ozs7O0lBRVM7Ozs7OztBQUtqQixhQUxpQixPQUtqQixDQUFZLEtBQVosRUFBbUIsTUFBbkIsRUFBMkI7OEJBTFYsU0FLVTs7QUFDdkIsYUFBSyxHQUFMLENBQVMsS0FBSyxlQUFMLEVBQVQsRUFEdUI7QUFFdkIsYUFBSyxHQUFMLENBQVMsS0FBVCxFQUZ1Qjs7QUFJdkIsYUFBSyxNQUFMLEdBQWMsVUFBVSxLQUFWLENBSlM7QUFLdkIsYUFBSyxFQUFMLEdBQVUsS0FBSyxZQUFMLEVBQVYsQ0FMdUI7QUFNdkIsYUFBSyxRQUFMLEdBQWdCLEtBQWhCLENBTnVCO0tBQTNCOztBQUxpQixzQkFjakIsbUJBQUksT0FBTzs7O0FBQ1AsbUJBbEJDLEtBa0JELENBQUssS0FBTCxFQUFZLFVBQUMsS0FBRCxFQUFRLEdBQVI7bUJBQWdCLE1BQUssR0FBTCxJQUFZLEtBQVo7U0FBaEIsQ0FBWixDQURPO0FBRVAsZUFBTyxJQUFQLENBRk87OztBQWRNLHNCQW1CakIseUJBQVE7QUFDSixhQUFLLFFBQUwsR0FBZ0IsSUFBaEIsQ0FESTtBQUVKLGFBQUssUUFBTCxDQUFjLEtBQUssRUFBTCxFQUFTLElBQXZCLEVBRkk7O0FBSUosWUFBSSxLQUFLLE9BQUwsRUFBYztBQUNkLGlCQUFLLE9BQUwsQ0FBYSxJQUFiLEVBRGM7U0FBbEI7O0FBSUEsZUFBTyxJQUFQLENBUkk7OztBQW5CUyxzQkE4QmpCLHVCQUFPO0FBQ0gsYUFBSyxRQUFMLEdBQWdCLEtBQWhCLENBREc7QUFFSCxhQUFLLFVBQUwsQ0FBZ0IsS0FBSyxFQUFMLENBQWhCLENBRkc7O0FBSUgsWUFBSSxLQUFLLE1BQUwsRUFBYTtBQUNiLGlCQUFLLE1BQUwsQ0FBWSxJQUFaLEVBRGE7U0FBakI7O0FBSUEsZUFBTyxJQUFQLENBUkc7OztBQTlCVSxzQkF5Q2pCLHVCQUFPOzs7QUFDSCxhQUFLLFNBQUwsR0FBaUIsWUFBTTtBQUNuQixtQkFBSyxJQUFMLEdBRG1CO0FBRW5CLG1CQUFLLFNBQUwsR0FBaUIsU0FBakIsQ0FGbUI7U0FBTixDQURkOztBQU1ILGFBQUssS0FBTCxHQU5HOztBQVFILGVBQU8sSUFBUCxDQVJHOzs7Ozs7OztBQXpDVSxzQkF5RGpCLDZDQUFrQjtBQUNkLGVBQU8sRUFBUCxDQURjOzs7Ozs7Ozs7O0FBekRELHNCQW9FakIsMkJBQVEsT0FBTztBQUNYLFlBQU0sYUFBYSxJQUFJLEtBQUssV0FBTCxDQUFpQixJQUFyQixDQUFiLENBREs7QUFFWCxlQUFPLFdBQVcsR0FBWCxDQUFlLEtBQWYsQ0FBUCxDQUZXOzs7V0FwRUUiLCJmaWxlIjoiUHJvY2Vzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0ICogYXMgbG9vcCBmcm9tICcuL2xvb3AnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9jZXNzIHtcbiAgICAvKlxuICAgICAgICBbb2JqZWN0XTogUHJvcGVydGllc1xuICAgICAgICBbYm9vbGVhbl0gKG9wdGlvbmFsKTogSXMgUHJvY2VzcyBsYXp5P1xuICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMsIGlzTGF6eSkge1xuICAgICAgICB0aGlzLnNldCh0aGlzLmdldERlZmF1bHRQcm9wcygpKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuaXNMYXp5ID0gaXNMYXp5IHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRQcm9jZXNzSWQoKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldChwcm9wcykge1xuICAgICAgICBlYWNoKHByb3BzLCAodmFsdWUsIGtleSkgPT4gdGhpc1trZXldID0gdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblN0YXJ0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG5cbiAgICAgICAgaWYgKHRoaXMub25TdG9wKSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RvcCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uY2UoKSB7XG4gICAgICAgIHRoaXMub25DbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN0YXJ0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgRXh0ZW5kIHRoaXMgUHJvY2VzcyB3aXRoIG5ldyBwcm9wZXJ0aWVzXG4gICAgICAgICMjIFJldHVybnMgbmV3IGluc3RhbmNlIG9mIHRoaXMgUHJvY2VzcydzIGBwcm90b3R5cGVgIHdpdGggZXhpc3RpbmcgYW5kIG5ldyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybiBbUHJvY2Vzc11cbiAgICAqL1xuICAgIGluaGVyaXQocHJvcHMpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvY2VzcyA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICByZXR1cm4gbmV3UHJvY2Vzcy5zZXQocHJvcHMpO1xuICAgIH1cbn1cbiJdfQ==
return exports;
})();
var __small$_7 = (function() {
var exports = {};
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Process2 = __small$_6;

var _Process3 = _interopRequireDefault(_Process2);

var _utils = __small$_14;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Process) {
    _inherits(Input, _Process);

    function Input(initialValues, poll) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, _Process.call(this));

        _this.state = {};
        _this.offset = {};

        if ((0, _utils.isFunc)(poll)) {
            _this.onFrameStart = function () {
                return _this.latest(_this.poll());
            };
        }
        return _this;
    }

    /*
        Manually add latest values
         @param [object]
    */

    Input.prototype.latest = function latest(props) {
        this.state = _extends({}, this.state, { props: props });
    };

    return Input;
}(_Process3.default);

exports.default = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQjs7O0FBQ2pCLGFBRGlCLEtBQ2pCLENBQVksYUFBWixFQUEyQixJQUEzQixFQUFpQzs4QkFEaEIsT0FDZ0I7O3FEQUM3QixxQkFENkI7O0FBRTdCLGNBQUssS0FBTCxHQUFhLEVBQWIsQ0FGNkI7QUFHN0IsY0FBSyxNQUFMLEdBQWMsRUFBZCxDQUg2Qjs7QUFLN0IsWUFBSSxXQVJILE9BUUcsQ0FBTyxJQUFQLENBQUosRUFBa0I7QUFDZCxrQkFBSyxZQUFMLEdBQW9CO3VCQUFNLE1BQUssTUFBTCxDQUFZLE1BQUssSUFBTCxFQUFaO2FBQU4sQ0FETjtTQUFsQjtxQkFMNkI7S0FBakM7Ozs7Ozs7QUFEaUIsb0JBZ0JqQix5QkFBTyxPQUFPO0FBQ1YsYUFBSyxLQUFMLGdCQUFrQixLQUFLLEtBQUwsSUFBWSxlQUE5QixDQURVOzs7V0FoQkciLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvY2VzcyBmcm9tICcuLi9wcm9jZXNzL1Byb2Nlc3MnO1xuaW1wb3J0IHsgaXNGdW5jIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBQcm9jZXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzLCBwb2xsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7fTtcblxuICAgICAgICBpZiAoaXNGdW5jKHBvbGwpKSB7XG4gICAgICAgICAgICB0aGlzLm9uRnJhbWVTdGFydCA9ICgpID0+IHRoaXMubGF0ZXN0KHRoaXMucG9sbCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE1hbnVhbGx5IGFkZCBsYXRlc3QgdmFsdWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgKi9cbiAgICBsYXRlc3QocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgcHJvcHMgfTtcbiAgICB9XG59XG4iXX0=
return exports;
})();
var __small$_32 = (function() {
var exports = {};
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Process2 = __small$_6;

var _Process3 = _interopRequireDefault(_Process2);

var _calc = __small$_13;

var _utils = __small$_14;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_PROP = 'current';
var NUMERICAL_VALUES = [DEFAULT_PROP, 'from', 'to', 'min', 'max'];

/*
    Map key given given stateMap

    @param [string]
    @param [Renderer]
    @return [string]
*/
var mapKey = function (key, renderer) {
    return renderer && renderer.stateMap ? renderer.stateMap[key] || key : key;
};

var Action = function (_Process) {
    _inherits(Action, _Process);

    function Action(props) {
        _classCallCheck(this, Action);

        props.state = {};

        // Initalise renderer

        var _this = _possibleConstructorReturn(this, _Process.call(this, props));

        if (_this.onRender && _this.onRender.init) {
            _this.onRender.init(_this);
        }
        return _this;
    }

    /*
        # Set Action properties
        ## Set user-defined Action properties
         @param [object]
        @return [Action]
    */

    Action.prototype.set = function set(props) {
        var _this2 = this;

        var values = props.values;

        var propsToSet = _objectWithoutProperties(props, ['values']);

        _Process.prototype.set.call(this, propsToSet);

        this.values = this.values || {};
        this.valueKeys = this.valueKeys || [];
        this.parentKeys = this.parentKeys || [];

        // Merge new `value` properties with existing
        var currentValues = this.values;
        var defaultValue = this.getDefaultValue();
        var defaultValueProp = this.getDefaultValueProp();
        var renderer = this.onRender;
        var valueTypeMap = renderer && renderer.valueTypeMap ? renderer.valueTypeMap : false;

        // Inherit value properties from `props`
        (0, _utils.each)(defaultValue, function (value, key) {
            if (propsToSet[key] !== undefined) {
                defaultValue[key] = propsToSet[key];
            }
        });

        // Check all values and split into child values as neccessary
        (0, _utils.each)(values, function (value, key) {
            var existingValue = currentValues[key];
            var valueType = {};
            var newValue = {};

            // Convert new value into object if it isn't already
            if ((0, _utils.isObj)(value)) {
                newValue = value;
            } else {
                newValue[defaultValueProp] = value;
            }

            // If value already exists, check for and use existing type
            if (existingValue) {
                newValue = _extends({}, existingValue, newValue);
                valueType = existingValue.type;

                // If this is a new value, check for type
            } else {
                    newValue = _extends({}, defaultValue, newValue);

                    // If one is explicitly assigned, use that
                    if (value.type) {
                        valueType = value.type;

                        // Or if our renderer has a typeMap, use that
                    } else if (valueTypeMap) {
                            valueType = valueTypeMap[mapKey(key, renderer)];
                        }

                    // Maybe run `test` on color here
                }

            // If we've got a valueType then preprocess the value accordingly
            if (valueType) {
                value.type = valueType;

                // If this value should be split, split
                if (valueType.split) {
                    (function () {
                        var childValues = {};

                        // Loop over numerical values and split any present
                        NUMERICAL_VALUES.forEach(function (propName) {
                            if (newValue.hasOwnProperty(propName)) {
                                var splitValues = valueType.split(newValue[propName]);

                                (0, _utils.each)(splitValues, function (splitValue, splitKey) {
                                    // Create new child value if doesn't exist
                                    if (!childValues[splitKey]) {
                                        childValues[splitKey] = _extends({}, newValue);

                                        if (valueType.defaultProps) {
                                            childValues[splitKey] = valueType.defaultProps[splitKey] ? _extends({}, valueType.defaultProps[splitKey], childValues[splitKey]) : _extends({}, valueType.defaultProps, childValues[splitKey]);
                                        }
                                    }

                                    childValues[splitKey][propName] = splitValue;
                                });
                            }
                        });

                        newValue.children = {};

                        // Now loop through all child values and add them as normal values
                        (0, _utils.each)(childValues, function (childValue, childKey) {
                            var combinedKey = key + childKey;

                            newValue.children[key] = childValue.current;
                            currentValues[combinedKey] = childValue;

                            if (_this2.valueKeys.indexOf(combinedKey) === -1) {
                                _this2.valueKeys.push(combinedKey);
                            }
                        });

                        // Save a template for recombination if present
                        if (valueType.template) {
                            newValue.template = newValue.template || valueType.template(newValue.current);
                        }

                        // Or we just have default value props, load those 
                    })();
                } else if (valueType.defaultProps) {
                        newValue = _extends({}, valueType.defaultProps, newValue);
                    }
            }

            // Update appropriate lists with value key
            if (newValue.children) {
                if (_this2.parentKeys.indexOf(key) === -1) {
                    _this2.parentKeys.push(key);
                }
            } else {
                if (_this2.valueKeys.indexOf(key) === -1) {
                    _this2.valueKeys.push(key);
                }
            }

            currentValues[key] = newValue;
        });

        // Precompute value key and parent key length to prevent per-frame measurement
        this.numValueKeys = this.valueKeys.length;
        this.numParentKeys = this.parentKeys.length;

        return this;
    };

    /*
        Decide whether this Action will render on next frame
         @param [Action]
        @param [number]
        @param [number]
        @return [boolean]: Return true to render
    */

    Action.prototype.willRender = function willRender(action, frameStamp, elapsed) {
        var hasChanged = false;

        // Update base values
        for (var i = 0; i < this.numValueKeys; i++) {
            var key = this.valueKeys[i];
            var value = this.values[key];

            var updatedValue = value.current;

            // Run transform function (if present)
            if (value.transform) {
                updatedValue = value.transform(updatedValue, key, this);
            }

            // Smooth value if we have smoothing
            if (value.smooth) {
                updatedValue = (0, _calc.smooth)(updatedValue, value.current, elapsed, value.smooth);
            }

            value.velocity = (0, _calc.speedPerSecond)(updatedValue - value.current, elapsed);

            value.current = updatedValue;

            var valueForState = value.unit ? value.current + value.unit : value.current;

            // Add straight to state if no parent
            if (!value.parent) {
                var mappedKey = mapKey(key, this.onRender);

                if (this.state[mappedKey] !== valueForState) {
                    this.state[mappedKey] = valueForState;
                    hasChanged = true;
                }
                // Or add to parent
            } else {
                    this.values[value.parent].children[key] = valueForState;
                }
        }

        // Update parent values
        for (var i = 0; i < this.numParentKeys; i++) {
            var key = this.parentKeys[i];
            var value = this.values[key];
            var mappedKey = mapKey(key, this.onRender);

            value.current = value.type.combine(value.children, value.template);

            if (this.state[mappedKey] !== value.current) {
                this.state[mappedKey] = value.current;
                hasChanged = true;
            }
        }

        return this.onCleanup ? true : hasChanged;
    };

    Action.prototype.pause = function pause() {
        _Process.prototype.stop.call(this);
        return this;
    };

    Action.prototype.resume = function resume() {
        _Process.prototype.start.call(this);
        return this;
    };

    /*
        # Get default Action value properties
         @return [object]
    */

    Action.prototype.getDefaultValue = function getDefaultValue() {
        return {
            current: 0,
            velocity: 0
        };
    };

    /*
        # Get default Action value property name
        ## Set this `value` property when set as value instead of object
         @return [string]
    */

    Action.prototype.getDefaultValueProp = function getDefaultValueProp() {
        return DEFAULT_PROP;
    };

    return Action;
}(_Process3.default);

exports.default = Action;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNLGVBQWUsU0FBZjtBQUNOLElBQU0sbUJBQW1CLENBQUMsWUFBRCxFQUFlLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsQ0FBbkI7Ozs7Ozs7OztBQVNOLElBQU0sU0FBUyxVQUFDLEdBQUQsRUFBTSxRQUFOO1dBQW1CLFFBQUMsSUFBWSxTQUFTLFFBQVQsR0FBcUIsU0FBUyxRQUFULENBQWtCLEdBQWxCLEtBQTBCLEdBQTFCLEdBQWdDLEdBQWxFO0NBQW5COztJQUVNOzs7QUFDakIsYUFEaUIsTUFDakIsQ0FBWSxLQUFaLEVBQW1COzhCQURGLFFBQ0U7O0FBQ2YsY0FBTSxLQUFOLEdBQWMsRUFBZCxDQURlOzs7O3FEQUVmLG9CQUFNLEtBQU4sR0FGZTs7QUFLZixZQUFJLE1BQUssUUFBTCxJQUFpQixNQUFLLFFBQUwsQ0FBYyxJQUFkLEVBQW9CO0FBQ3JDLGtCQUFLLFFBQUwsQ0FBYyxJQUFkLFFBRHFDO1NBQXpDO3FCQUxlO0tBQW5COzs7Ozs7Ozs7QUFEaUIscUJBa0JqQixtQkFBSSxPQUFPOzs7WUFDQyxTQUEwQixNQUExQixPQUREOztZQUNZLHNDQUFlLG1CQUQzQjs7QUFHUCwyQkFBTSxHQUFOLFlBQVUsVUFBVixFQUhPOztBQUtQLGFBQUssTUFBTCxHQUFjLEtBQUssTUFBTCxJQUFlLEVBQWYsQ0FMUDtBQU1QLGFBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsSUFBa0IsRUFBbEIsQ0FOVjtBQU9QLGFBQUssVUFBTCxHQUFrQixLQUFLLFVBQUwsSUFBbUIsRUFBbkI7OztBQVBYLFlBVUQsZ0JBQWdCLEtBQUssTUFBTCxDQVZmO0FBV1AsWUFBTSxlQUFlLEtBQUssZUFBTCxFQUFmLENBWEM7QUFZUCxZQUFNLG1CQUFtQixLQUFLLG1CQUFMLEVBQW5CLENBWkM7QUFhUCxZ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QUV6QyxnQkFBTSxRQUFRLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBUixDQUZtQztBQUd6QyxnQkFBTSxZQUFZLE9BQU8sR0FBUCxFQUFZLEtBQUssUUFBTCxDQUF4QixDQUhtQzs7QUFLekMsa0JBQU0sT0FBTixHQUFnQixNQUFNLElBQU4sQ0FBVyxPQUFYLENBQW1CLE1BQU0sUUFBTixFQUFnQixNQUFNLFFBQU4sQ0FBbkQsQ0FMeUM7O0FBT3pDLGdCQUFJLEtBQUssS0FBTCxDQUFXLFNBQVgsTUFBMEIsTUFBTSxPQUFOLEVBQWU7QUFDekMscUJBQUssS0FBTCxDQUFXLFNBQVgsSUFBd0IsTUFBTSxPQUFOLENBRGlCO0FBRXpDLDZCQUFhLElBQWIsQ0FGeUM7YUFBN0M7U0FQSjs7QUFhQSxlQUFPLElBQUMsQ0FBSyxTQUFMLEdBQWtCLElBQW5CLEdBQTBCLFVBQTFCLENBdEQ2Qjs7O0FBL0p2QixxQkF3TmpCLHlCQUFRO0FBQ0osMkJBQU0sSUFBTixZQURJO0FBRUosZUFBTyxJQUFQLENBRkk7OztBQXhOUyxxQkE2TmpCLDJCQUFTO0FBQ0wsMkJBQU0sS0FBTixZQURLO0FBRUwsZUFBTyxJQUFQLENBRks7Ozs7Ozs7O0FBN05RLHFCQXVPakIsNkNBQWtCO0FBQ2QsZUFBTztBQUNILHFCQUFTLENBQVQ7QUFDQSxzQkFBVSxDQUFWO1NBRkosQ0FEYzs7Ozs7Ozs7O0FBdk9ELHFCQW9QakIscURBQXNCO0FBQ2xCLGVBQU8sWUFBUCxDQURrQjs7O1dBcFBMIiwiZmlsZSI6IkFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9jZXNzIGZyb20gJy4uL3Byb2Nlc3MvUHJvY2Vzcyc7XG5pbXBvcnQgeyBzbW9vdGgsIHNwZWVkUGVyU2Vjb25kIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgZWFjaCwgaXNPYmogfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBERUZBVUxUX1BST1AgPSAnY3VycmVudCc7XG5jb25zdCBOVU1FUklDQUxfVkFMVUVTID0gW0RFRkFVTFRfUFJPUCwgJ2Zyb20nLCAndG8nLCAnbWluJywgJ21heCddO1xuXG4vKlxuICAgIE1hcCBrZXkgZ2l2ZW4gZ2l2ZW4gc3RhdGVNYXBcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbUmVuZGVyZXJdXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmNvbnN0IG1hcEtleSA9IChrZXksIHJlbmRlcmVyKSA9PiAocmVuZGVyZXIgJiYgcmVuZGVyZXIuc3RhdGVNYXApID8gcmVuZGVyZXIuc3RhdGVNYXBba2V5XSB8fCBrZXkgOiBrZXk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIFByb2Nlc3Mge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvLyBJbml0YWxpc2UgcmVuZGVyZXIgXG4gICAgICAgIGlmICh0aGlzLm9uUmVuZGVyICYmIHRoaXMub25SZW5kZXIuaW5pdCkge1xuICAgICAgICAgICAgdGhpcy5vblJlbmRlci5pbml0KHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMsIC4uLnByb3BzVG9TZXQgfSA9IHByb3BzO1xuXG4gICAgICAgIHN1cGVyLnNldChwcm9wc1RvU2V0KTtcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzIHx8IHt9O1xuICAgICAgICB0aGlzLnZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzIHx8IFtdO1xuICAgICAgICB0aGlzLnBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMgfHwgW107XG5cbiAgICAgICAgLy8gTWVyZ2UgbmV3IGB2YWx1ZWAgcHJvcGVydGllcyB3aXRoIGV4aXN0aW5nXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gdGhpcy5nZXREZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlUHJvcCA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpO1xuICAgICAgICBjb25zdCByZW5kZXJlciA9IHRoaXMub25SZW5kZXI7XG4gICAgICAgIGxldCB2YWx1ZVR5cGVNYXAgPSAocmVuZGVyZXIgJiYgcmVuZGVyZXIudmFsdWVUeXBlTWFwKSA/IHJlbmRlcmVyLnZhbHVlVHlwZU1hcCA6IGZhbHNlO1xuXG4gICAgICAgIC8vIEluaGVyaXQgdmFsdWUgcHJvcGVydGllcyBmcm9tIGBwcm9wc2BcbiAgICAgICAgZWFjaChkZWZhdWx0VmFsdWUsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvcHNUb1NldFtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2hlY2sgYWxsIHZhbHVlcyBhbmQgc3BsaXQgaW50byBjaGlsZCB2YWx1ZXMgYXMgbmVjY2Vzc2FyeVxuICAgICAgICBlYWNoKHZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVmFsdWUgPSBjdXJyZW50VmFsdWVzW2tleV07XG4gICAgICAgICAgICBsZXQgdmFsdWVUeXBlID0ge307XG4gICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSB7fTtcblxuICAgICAgICAgICAgLy8gQ29udmVydCBuZXcgdmFsdWUgaW50byBvYmplY3QgaWYgaXQgaXNuJ3QgYWxyZWFkeVxuICAgICAgICAgICAgaWYgKGlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHZhbHVlIGFscmVhZHkgZXhpc3RzLCBjaGVjayBmb3IgYW5kIHVzZSBleGlzdGluZyB0eXBlXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0geyAuLi5leGlzdGluZ1ZhbHVlLCAuLi5uZXdWYWx1ZSB9O1xuICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IGV4aXN0aW5nVmFsdWUudHlwZTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIG5ldyB2YWx1ZSwgY2hlY2sgZm9yIHR5cGVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLmRlZmF1bHRWYWx1ZSwgLi4ubmV3VmFsdWUgfTtcblxuICAgICAgICAgICAgICAgIC8vIElmIG9uZSBpcyBleHBsaWNpdGx5IGFzc2lnbmVkLCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLnR5cGU7XG5cbiAgICAgICAgICAgICAgICAvLyBPciBpZiBvdXIgcmVuZGVyZXIgaGFzIGEgdHlwZU1hcCwgdXNlIHRoYXRcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZU1hcCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZVR5cGVNYXBbbWFwS2V5KGtleSwgcmVuZGVyZXIpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNYXliZSBydW4gYHRlc3RgIG9uIGNvbG9yIGhlcmVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgd2UndmUgZ290IGEgdmFsdWVUeXBlIHRoZW4gcHJlcHJvY2VzcyB0aGUgdmFsdWUgYWNjb3JkaW5nbHlcbiAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS50eXBlID0gdmFsdWVUeXBlO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBzaG91bGQgYmUgc3BsaXQsIHNwbGl0XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZS5zcGxpdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZFZhbHVlcyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIExvb3Agb3ZlciBudW1lcmljYWwgdmFsdWVzIGFuZCBzcGxpdCBhbnkgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICBOVU1FUklDQUxfVkFMVUVTLmZvckVhY2goKHByb3BOYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZXMgPSB2YWx1ZVR5cGUuc3BsaXQobmV3VmFsdWVbcHJvcE5hbWVdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhY2goc3BsaXRWYWx1ZXMsIChzcGxpdFZhbHVlLCBzcGxpdEtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IGNoaWxkIHZhbHVlIGlmIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZFZhbHVlc1tzcGxpdEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVzW3NwbGl0S2V5XSA9IHsgLi4ubmV3VmFsdWUgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV0gPSAodmFsdWVUeXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi52YWx1ZVR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSwgLi4uY2hpbGRWYWx1ZXNbc3BsaXRLZXldIH0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLnZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsIC4uLmNoaWxkVmFsdWVzW3NwbGl0S2V5XSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZXNbc3BsaXRLZXldW3Byb3BOYW1lXSA9IHNwbGl0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm93IGxvb3AgdGhyb3VnaCBhbGwgY2hpbGQgdmFsdWVzIGFuZCBhZGQgdGhlbSBhcyBub3JtYWwgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIGVhY2goY2hpbGRWYWx1ZXMsIChjaGlsZFZhbHVlLCBjaGlsZEtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tYmluZWRLZXkgPSBrZXkgKyBjaGlsZEtleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW5ba2V5XSA9IGNoaWxkVmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNbY29tYmluZWRLZXldID0gY2hpbGRWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2YoY29tYmluZWRLZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goY29tYmluZWRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIGEgdGVtcGxhdGUgZm9yIHJlY29tYmluYXRpb24gaWYgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50ZW1wbGF0ZSA9IG5ld1ZhbHVlLnRlbXBsYXRlIHx8IHZhbHVlVHlwZS50ZW1wbGF0ZShuZXdWYWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gT3Igd2UganVzdCBoYXZlIGRlZmF1bHQgdmFsdWUgcHJvcHMsIGxvYWQgdGhvc2UgICBcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLnZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsIC4uLm5ld1ZhbHVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgYXBwcm9wcmlhdGUgbGlzdHMgd2l0aCB2YWx1ZSBrZXlcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudFZhbHVlc1trZXldID0gbmV3VmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFByZWNvbXB1dGUgdmFsdWUga2V5IGFuZCBwYXJlbnQga2V5IGxlbmd0aCB0byBwcmV2ZW50IHBlci1mcmFtZSBtZWFzdXJlbWVudFxuICAgICAgICB0aGlzLm51bVZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5udW1QYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzLmxlbmd0aDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybiB0cnVlIHRvIHJlbmRlclxuICAgICovXG4gICAgd2lsbFJlbmRlcihhY3Rpb24sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBVcGRhdGUgYmFzZSB2YWx1ZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgbGV0IHVwZGF0ZWRWYWx1ZSA9IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gdmFsdWUudHJhbnNmb3JtKHVwZGF0ZWRWYWx1ZSwga2V5LCB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc21vb3RoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gc21vb3RoKHVwZGF0ZWRWYWx1ZSwgdmFsdWUuY3VycmVudCwgZWxhcHNlZCwgdmFsdWUuc21vb3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBzcGVlZFBlclNlY29uZCh1cGRhdGVkVmFsdWUgLSB2YWx1ZS5jdXJyZW50LCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHVwZGF0ZWRWYWx1ZTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVGb3JTdGF0ZSA9ICh2YWx1ZS51bml0KSA/IHZhbHVlLmN1cnJlbnQgKyB2YWx1ZS51bml0IDogdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgLy8gQWRkIHN0cmFpZ2h0IHRvIHN0YXRlIGlmIG5vIHBhcmVudFxuICAgICAgICAgICAgaWYgKCF2YWx1ZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRLZXkgPSBtYXBLZXkoa2V5LCB0aGlzLm9uUmVuZGVyKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW21hcHBlZEtleV0gIT09IHZhbHVlRm9yU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVttYXBwZWRLZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1t2YWx1ZS5wYXJlbnRdLmNoaWxkcmVuW2tleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVBhcmVudEtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5wYXJlbnRLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgY29uc3QgbWFwcGVkS2V5ID0gbWFwS2V5KGtleSwgdGhpcy5vblJlbmRlcik7XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50eXBlLmNvbWJpbmUodmFsdWUuY2hpbGRyZW4sIHZhbHVlLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVbbWFwcGVkS2V5XSAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVbbWFwcGVkS2V5XSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHRoaXMub25DbGVhbnVwKSA/IHRydWUgOiBoYXNDaGFuZ2VkO1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eTogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHRoaXMgYHZhbHVlYCBwcm9wZXJ0eSB3aGVuIHNldCBhcyB2YWx1ZSBpbnN0ZWFkIG9mIG9iamVjdFxuXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxufVxuIl19
return exports;
})();
var __small$_2 = (function() {
var exports = {};
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Action2 = __small$_32;

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var boundProps = function (actor, action) {
    return {
        onStart: function () {
            actor.activateAction(action.id, action);
        },
        onStop: function () {
            actor.deactivateAction(action.id);
        },
        onPreRender: function () {
            actor.state = _extends({}, actor.state, action.state);
        }
    };
};

var Actor = function (_Action) {
    _inherits(Actor, _Action);

    function Actor() {
        _classCallCheck(this, Actor);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _Action.call.apply(_Action, [this].concat(args)));

        _this.once();
        _this.activeActions = {};
        _this.numActiveActions = 0;
        return _this;
    }

    /*
        Bind Action to Actor
    */

    Actor.prototype.bind = function bind(action) {
        return action.inherit(boundProps(this, action));
    };

    /*
        Start Actor
         If Action is provided, bind it to this Actor and start
         @param (optional) [Action]
    */

    Actor.prototype.start = function start(action) {
        _Action.prototype.start.call(this);

        if (action) {
            var boundAction = this.bind(action);
            boundAction.start();

            return boundAction;
        } else {
            each(this.activeActions, function (action) {
                if (!action.isActive) {
                    action.start();
                }
            });
        }

        return this;
    };

    Actor.prototype.stop = function stop() {
        _Action.prototype.stop.call(this);
        each(this.activeActions, function (action) {
            return action.stop();
        });
    };

    /*
        Add active actions
         @param [number]
        @param [Action]
    */

    Actor.prototype.activateAction = function activateAction(id, action) {
        this.activeActions[id] = action;
        this.numActiveActions++;
        this.start();
    };

    /*
        Remove active actions
         @param [number]
    */

    Actor.prototype.deactivateAction = function deactivateAction(id) {
        this.activeActions[id] = undefined;
        this.numActiveActions--;

        if (!this.numActiveActions) {
            this.stop();
        }
    };

    return Actor;
}(_Action3.default);

exports.default = Actor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci9BY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLGFBQWEsVUFBQyxLQUFELEVBQVEsTUFBUjtXQUFvQjtBQUNuQyxpQkFBUyxZQUFNO0FBQ1gsa0JBQU0sY0FBTixDQUFxQixPQUFPLEVBQVAsRUFBVyxNQUFoQyxFQURXO1NBQU47QUFHVCxnQkFBUSxZQUFNO0FBQ1Ysa0JBQU0sZ0JBQU4sQ0FBdUIsT0FBTyxFQUFQLENBQXZCLENBRFU7U0FBTjtBQUdSLHFCQUFhLFlBQU07QUFDZixrQkFBTSxLQUFOLGdCQUFtQixNQUFNLEtBQU4sRUFBZ0IsT0FBTyxLQUFQLENBQW5DLENBRGU7U0FBTjs7Q0FQRTs7SUFZRTs7O0FBQ2pCLGFBRGlCLEtBQ2pCLEdBQXFCOzhCQURKLE9BQ0k7OzBDQUFOOztTQUFNOztxREFDakIsMENBQVMsS0FBVCxHQURpQjs7QUFFakIsY0FBSyxJQUFMLEdBRmlCO0FBR2pCLGNBQUssYUFBTCxHQUFxQixFQUFyQixDQUhpQjtBQUlqQixjQUFLLGdCQUFMLEdBQXdCLENBQXhCLENBSmlCOztLQUFyQjs7Ozs7O0FBRGlCLG9CQVdqQixxQkFBSyxRQUFRO0FBQ1QsZUFBTyxPQUFPLE9BQVAsQ0FBZSxXQUFXLElBQVgsRUFBaUIsTUFBakIsQ0FBZixDQUFQLENBRFM7Ozs7Ozs7OztBQVhJLG9CQXNCakIsdUJBQU0sUUFBUTtBQUNWLDBCQUFNLEtBQU4sWUFEVTs7QUFHVixZQUFJLE1BQUosRUFBWTtBQUNSLGdCQUFNLGNBQWMsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFkLENBREU7QUFFUix3QkFBWSxLQUFaLEdBRlE7O0FBSVIsbUJBQU8sV0FBUCxDQUpRO1NBQVosTUFLTztBQUNILGlCQUFLLEtBQUssYUFBTCxFQUFvQixVQUFDLE1BQUQsRUFBWTtBQUNqQyxvQkFBSSxDQUFDLE9BQU8sUUFBUCxFQUFpQjtBQUNsQiwyQkFBTyxLQUFQLEdBRGtCO2lCQUF0QjthQURxQixDQUF6QixDQURHO1NBTFA7O0FBYUEsZUFBTyxJQUFQLENBaEJVOzs7QUF0Qkcsb0JBeUNqQix1QkFBTztBQUNILDBCQUFNLElBQU4sWUFERztBQUVILGFBQUssS0FBSyxhQUFMLEVBQW9CLFVBQUMsTUFBRDttQkFBWSxPQUFPLElBQVA7U0FBWixDQUF6QixDQUZHOzs7Ozs7Ozs7QUF6Q1Usb0JBb0RqQix5Q0FBZSxJQUFJLFFBQVE7QUFDdkIsYUFBSyxhQUFMLENBQW1CLEVBQW5CLElBQXlCLE1BQXpCLENBRHVCO0FBRXZCLGFBQUssZ0JBQUwsR0FGdUI7QUFHdkIsYUFBSyxLQUFMLEdBSHVCOzs7Ozs7OztBQXBEVixvQkErRGpCLDZDQUFpQixJQUFJO0FBQ2pCLGFBQUssYUFBTCxDQUFtQixFQUFuQixJQUF5QixTQUF6QixDQURpQjtBQUVqQixhQUFLLGdCQUFMLEdBRmlCOztBQUlqQixZQUFJLENBQUMsS0FBSyxnQkFBTCxFQUF1QjtBQUN4QixpQkFBSyxJQUFMLEdBRHdCO1NBQTVCOzs7V0FuRWEiLCJmaWxlIjoiQWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvQWN0aW9uJztcblxuY29uc3QgYm91bmRQcm9wcyA9IChhY3RvciwgYWN0aW9uKSA9PiAoe1xuICAgIG9uU3RhcnQ6ICgpID0+IHtcbiAgICAgICAgYWN0b3IuYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkLCBhY3Rpb24pO1xuICAgIH0sXG4gICAgb25TdG9wOiAoKSA9PiB7XG4gICAgICAgIGFjdG9yLmRlYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkKTtcbiAgICB9LFxuICAgIG9uUHJlUmVuZGVyOiAoKSA9PiB7XG4gICAgICAgIGFjdG9yLnN0YXRlID0geyAuLi5hY3Rvci5zdGF0ZSwgLi4uYWN0aW9uLnN0YXRlIH07XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdG9yIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuICAgIGJpbmQoYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb24uaW5oZXJpdChib3VuZFByb3BzKHRoaXMsIGFjdGlvbikpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN0YXJ0IEFjdG9yXG5cbiAgICAgICAgSWYgQWN0aW9uIGlzIHByb3ZpZGVkLCBiaW5kIGl0IHRvIHRoaXMgQWN0b3IgYW5kIHN0YXJ0XG5cbiAgICAgICAgQHBhcmFtIChvcHRpb25hbCkgW0FjdGlvbl1cbiAgICAqL1xuICAgIHN0YXJ0KGFjdGlvbikge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGJvdW5kQWN0aW9uID0gdGhpcy5iaW5kKGFjdGlvbik7XG4gICAgICAgICAgICBib3VuZEFjdGlvbi5zdGFydCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gYm91bmRBY3Rpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlYWNoKHRoaXMuYWN0aXZlQWN0aW9ucywgKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICBlYWNoKHRoaXMuYWN0aXZlQWN0aW9ucywgKGFjdGlvbikgPT4gYWN0aW9uLnN0b3AoKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQWRkIGFjdGl2ZSBhY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICovXG4gICAgYWN0aXZhdGVBY3Rpb24oaWQsIGFjdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gYWN0aW9uO1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMrKztcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJlbW92ZSBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICovXG4gICAgZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLTtcblxuICAgICAgICBpZiAoIXRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19
return exports;
})();
var __small$_3 = (function() {
var exports = {};
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Action2 = __small$_32;

var _Action3 = _interopRequireDefault(_Action2);

var _presetEasing = __small$_12;

var _presetEasing2 = _interopRequireDefault(_presetEasing);

var _utils = __small$_14;

var _calc = __small$_13;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var COUNT = 'Count';
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
var ease = function (progress, from, to, ease) {
    var progressLimited = (0, _calc.restrict)(progress, 0, 1);
    var easedProgress = ease(progressLimited);

    return (0, _calc.getValueFromProgress)(easedProgress, from, to);
};

var Tween = function (_Action) {
    _inherits(Tween, _Action);

    function Tween() {
        _classCallCheck(this, Tween);

        return _possibleConstructorReturn(this, _Action.apply(this, arguments));
    }

    Tween.prototype.start = function start() {
        _Action.prototype.start.call(this);
        this.elapsed = 0;
        this.flipCount = this.yoyoCount = this.loopCount = 0;
    };

    Tween.prototype.onUpdate = function onUpdate(tween, frameStamp, elapsed) {
        var progressTarget = this.playDirection === 1 ? 1 : 0;

        this.ended = true;
        this.elapsed += elapsed * this.dilate * this.playDirection;

        for (var i = 0; i < this.numValueKeys; i++) {
            var key = this.valueKeys[i];
            var value = this.values[key];

            var progress = (0, _calc.restrict)((0, _calc.getProgressFromValue)(this.elapsed - value.delay, 0, value.duration), 0, 1);

            // Mark Tween as NOT ended if still in progress
            if (progress !== progressTarget) {
                this.ended = false;
            }

            // Step progress if we're stepping
            if (value.steps) {
                progress = (0, _calc.stepProgress)(progress, value.steps);
            }

            // Ease progress
            value.current = ease(progress, value.from, value.to, value.ease);
        }
    };

    Tween.prototype.onFrameEnd = function onFrameEnd() {
        var _this2 = this;

        if (this.ended) {
            var stepTaken = false;

            (0, _utils.each)(NEXT_STEPS, function (method, step) {
                var maxSteps = _this2[step];

                if (maxSteps === true || (0, _utils.isNum)(maxSteps) && maxSteps > _this2[step + COUNT]) {
                    _this2[step + COUNT]++;
                    stepTaken = true;
                    _this2[method]();
                }
            });

            if (!stepTaken) {
                this.stop();
            }
        }
    };

    Tween.prototype.flipValues = function flipValues() {
        this.elapsed = this.duration - this.elapsed;

        (0, _utils.each)(this.values, function (value) {
            var _ref;

            return _ref = [value.from, value.to], value.to = _ref[0], value.from = _ref[1], _ref;
        });
    };

    Tween.prototype.reverse = function reverse() {
        this.playDirection *= -1;
    };

    Tween.prototype.restart = function restart() {
        this.elapsed = this.playDirection === 1 ? 0 : this.duration;
        this.started = (0, _utils.currentTime)();
    };

    Tween.prototype.seek = function seek(progress) {
        this.seekTime(this.duration * progress);
    };

    Tween.prototype.seekTime = function seekTime(elapsed) {
        this.once();
        this.elapsed = elapsed;
    };

    Tween.prototype.getDefaultProps = function getDefaultProps() {
        return _extends({}, _Action.prototype.getDefaultProps.call(this), {
            delay: 0,
            dilate: 1,
            duration: 300,
            loop: false,
            yoyo: false,
            flip: false,
            playDirection: 1,
            ended: false,
            elapsed: 0
        });
    };

    Tween.prototype.getDefaultValue = function getDefaultValue() {
        return _extends({}, _Action.prototype.getDefaultValue.call(this), {
            delay: 0,
            duration: 300,
            ease: _presetEasing2.default.easeOut,
            elapsed: 0,
            stagger: 0,
            steps: 0,
            from: 0,
            to: 0,
            round: false
        });
    };

    Tween.prototype.getDefaultValueProp = function getDefaultValueProp() {
        return 'to';
    };

    return Tween;
}(_Action3.default);

exports.default = Tween;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFBTSxRQUFRLE9BQVI7QUFDTixJQUFNLGFBQWE7QUFDZixVQUFNLFNBQU47QUFDQSxVQUFNLFNBQU47QUFDQSxVQUFNLFlBQU47Q0FIRTs7Ozs7Ozs7Ozs7O0FBZ0JOLElBQU0sT0FBTyxVQUFDLFFBQUQsRUFBVyxJQUFYLEVBQWlCLEVBQWpCLEVBQXFCLElBQXJCLEVBQThCO0FBQ3ZDLFFBQU0sa0JBQWtCLFVBeEJ4QixTQXdCd0IsQ0FBUyxRQUFULEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBQWxCLENBRGlDO0FBRXZDLFFBQU0sZ0JBQWdCLEtBQUssZUFBTCxDQUFoQixDQUZpQzs7QUFJdkMsV0FBTyxVQXpCUCxxQkF5Qk8sQ0FBcUIsYUFBckIsRUFBb0MsSUFBcEMsRUFBMEMsRUFBMUMsQ0FBUCxDQUp1QztDQUE5Qjs7SUFPUTs7Ozs7Ozs7O29CQUNqQix5QkFBUTtBQUNKLDBCQUFNLEtBQU4sWUFESTtBQUVKLGFBQUssT0FBTCxHQUFlLENBQWYsQ0FGSTtBQUdKLGFBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsR0FBaUIsS0FBSyxTQUFMLEdBQWlCLENBQWpCLENBSDlCOzs7QUFEUyxvQkFPakIsNkJBQVMsT0FBTyxZQUFZLFNBQVM7QUFDakMsWUFBTSxpQkFBaUIsSUFBQyxDQUFLLGFBQUwsS0FBdUIsQ0FBdkIsR0FBNEIsQ0FBN0IsR0FBaUMsQ0FBakMsQ0FEVTs7QUFHakMsYUFBSyxLQUFMLEdBQWEsSUFBYixDQUhpQztBQUlqQyxhQUFLLE9BQUwsSUFBZ0IsT0FBQyxHQUFVLEtBQUssTUFBTCxHQUFlLEtBQUssYUFBTCxDQUpUOztBQU1qQyxhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLFlBQUwsRUFBbUIsR0FBdkMsRUFBNEM7QUFDeEMsZ0JBQU0sTUFBTSxLQUFLLFNBQUwsQ0FBZSxDQUFmLENBQU4sQ0FEa0M7QUFFeEMsZ0JBQU0sUUFBUSxLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQVIsQ0FGa0M7O0FBSXhDLGdCQUFJLFdBQVcsVUEvQ3ZCLFNBK0N1QixDQUFTLFVBOUNoQyxxQkE4Q2dDLENBQXFCLEtBQUssT0FBTCxHQUFlLE1BQU0sS0FBTixFQUFhLENBQWpELEVBQW9ELE1BQU0sUUFBTixDQUE3RCxFQUE4RSxDQUE5RSxFQUFpRixDQUFqRixDQUFYOzs7QUFKb0MsZ0JBT3BDLGFBQWEsY0FBYixFQUE2QjtBQUM3QixxQkFBSyxLQUFMLEdBQWEsS0FBYixDQUQ2QjthQUFqQzs7O0FBUHdDLGdCQVlwQyxNQUFNLEtBQU4sRUFBYTtBQUNiLDJCQUFXLFVBckR2QixhQXFEdUIsQ0FBYSxRQUFiLEVBQXVCLE1BQU0sS0FBTixDQUFsQyxDQURhO2FBQWpCOzs7QUFad0MsaUJBaUJ4QyxDQUFNLE9BQU4sR0FBZ0IsS0FBSyxRQUFMLEVBQWUsTUFBTSxJQUFOLEVBQVksTUFBTSxFQUFOLEVBQVUsTUFBTSxJQUFOLENBQXJELENBakJ3QztTQUE1Qzs7O0FBYmEsb0JBa0NqQixtQ0FBYTs7O0FBQ1QsWUFBSSxLQUFLLEtBQUwsRUFBWTtBQUNaLGdCQUFJLFlBQVksS0FBWixDQURROztBQUdaLHVCQXhFUixLQXdFUSxDQUFLLFVBQUwsRUFBaUIsVUFBQyxNQUFELEVBQVMsSUFBVCxFQUFrQjtBQUMvQixvQkFBTSxXQUFXLE9BQUssSUFBTCxDQUFYLENBRHlCOztBQUcvQixvQkFBSSxhQUFhLElBQWIsSUFBc0IsV0ExRXRDLE1BMEVzQyxDQUFNLFFBQU4sS0FBbUIsV0FBVyxPQUFLLE9BQU8sS0FBUCxDQUFoQixFQUFnQztBQUN6RSwyQkFBSyxPQUFPLEtBQVAsQ0FBTCxHQUR5RTtBQUV6RSxnQ0FBWSxJQUFaLENBRnlFO0FBR3pFLDJCQUFLLE1BQUwsSUFIeUU7aUJBQTdFO2FBSGEsQ0FBakIsQ0FIWTs7QUFhWixnQkFBSSxDQUFDLFNBQUQsRUFBWTtBQUNaLHFCQUFLLElBQUwsR0FEWTthQUFoQjtTQWJKOzs7QUFuQ2Esb0JBc0RqQixtQ0FBYTtBQUNULGFBQUssT0FBTCxHQUFlLEtBQUssUUFBTCxHQUFnQixLQUFLLE9BQUwsQ0FEdEI7O0FBR1QsbUJBM0ZKLEtBMkZJLENBQUssS0FBSyxNQUFMLEVBQWEsVUFBQyxLQUFEOzs7MEJBQW9DLENBQUMsTUFBTSxJQUFOLEVBQVksTUFBTSxFQUFOLEdBQXJDLE1BQU0sRUFBTixZQUFVLE1BQU0sSUFBTjtTQUF0QixDQUFsQixDQUhTOzs7QUF0REksb0JBNERqQiw2QkFBVTtBQUNOLGFBQUssYUFBTCxJQUFzQixDQUFDLENBQUQsQ0FEaEI7OztBQTVETyxvQkFnRWpCLDZCQUFVO0FBQ04sYUFBSyxPQUFMLEdBQWUsSUFBQyxDQUFLLGFBQUwsS0FBdUIsQ0FBdkIsR0FBNEIsQ0FBN0IsR0FBaUMsS0FBSyxRQUFMLENBRDFDO0FBRU4sYUFBSyxPQUFMLEdBQWUsV0FyR25CLFlBcUdtQixFQUFmLENBRk07OztBQWhFTyxvQkFxRWpCLHFCQUFLLFVBQVU7QUFDWCxhQUFLLFFBQUwsQ0FBYyxLQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FBZCxDQURXOzs7QUFyRUUsb0JBeUVqQiw2QkFBUyxTQUFTO0FBQ2QsYUFBSyxJQUFMLEdBRGM7QUFFZCxhQUFLLE9BQUwsR0FBZSxPQUFmLENBRmM7OztBQXpFRCxvQkE4RWpCLDZDQUFrQjtBQUNkLDRCQUNPLGtCQUFNLGVBQU47QUFDSCxtQkFBTyxDQUFQO0FBQ0Esb0JBQVEsQ0FBUjtBQUNBLHNCQUFVLEdBQVY7QUFDQSxrQkFBTSxLQUFOO0FBQ0Esa0JBQU0sS0FBTjtBQUNBLGtCQUFNLEtBQU47QUFDQSwyQkFBZSxDQUFmO0FBQ0EsbUJBQU8sS0FBUDtBQUNBLHFCQUFTLENBQVQ7VUFWSixDQURjOzs7QUE5RUQsb0JBNkZqQiw2Q0FBa0I7QUFDZCw0QkFDTyxrQkFBTSxlQUFOO0FBQ0gsbUJBQU8sQ0FBUDtBQUNBLHNCQUFVLEdBQVY7QUFDQSxrQkFBTSx1QkFBTyxPQUFQO0FBQ04scUJBQVMsQ0FBVDtBQUNBLHFCQUFTLENBQVQ7QUFDQSxtQkFBTyxDQUFQO0FBQ0Esa0JBQU0sQ0FBTjtBQUNBLGdCQUFJLENBQUo7QUFDQSxtQkFBTyxLQUFQO1VBVkosQ0FEYzs7O0FBN0ZELG9CQTRHakIscURBQXNCO0FBQ2xCLGVBQU8sSUFBUCxDQURrQjs7O1dBNUdMIiwiZmlsZSI6IlR3ZWVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgZWFzaW5nIGZyb20gJy4vZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHtcbiAgICBjdXJyZW50VGltZSxcbiAgICBlYWNoLFxuICAgIGlzTnVtXG59IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQge1xuICAgIHJlc3RyaWN0LFxuICAgIGdldFByb2dyZXNzRnJvbVZhbHVlLFxuICAgIGdldFZhbHVlRnJvbVByb2dyZXNzLFxuICAgIHN0ZXBQcm9ncmVzc1xufSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNvbnN0IENPVU5UID0gJ0NvdW50JztcbmNvbnN0IE5FWFRfU1RFUFMgPSB7XG4gICAgbG9vcDogJ3Jlc3RhcnQnLFxuICAgIHlveW86ICdyZXZlcnNlJyxcbiAgICBmbGlwOiAnZmxpcFZhbHVlcydcbn07XG5cbi8qXG4gICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovIFxuY29uc3QgZWFzZSA9IChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpID0+IHtcbiAgICBjb25zdCBwcm9ncmVzc0xpbWl0ZWQgPSByZXN0cmljdChwcm9ncmVzcywgMCwgMSk7XG4gICAgY29uc3QgZWFzZWRQcm9ncmVzcyA9IGVhc2UocHJvZ3Jlc3NMaW1pdGVkKTtcblxuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VlbiBleHRlbmRzIEFjdGlvbiB7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgICAgIHRoaXMuZmxpcENvdW50ID0gdGhpcy55b3lvQ291bnQgPSB0aGlzLmxvb3BDb3VudCA9IDA7XG4gICAgfVxuXG4gICAgb25VcGRhdGUodHdlZW4sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NUYXJnZXQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDEgOiAwO1xuXG4gICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsYXBzZWQgKz0gKGVsYXBzZWQgKiB0aGlzLmRpbGF0ZSkgKiB0aGlzLnBsYXlEaXJlY3Rpb247XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gcmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUodGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIDAsIHZhbHVlLmR1cmF0aW9uKSwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgVHdlZW4gYXMgTk9UIGVuZGVkIGlmIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgIT09IHByb2dyZXNzVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdGVwIHByb2dyZXNzIGlmIHdlJ3JlIHN0ZXBwaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3RlcHMpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IHN0ZXBQcm9ncmVzcyhwcm9ncmVzcywgdmFsdWUuc3RlcHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFYXNlIHByb2dyZXNzXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gZWFzZShwcm9ncmVzcywgdmFsdWUuZnJvbSwgdmFsdWUudG8sIHZhbHVlLmVhc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgICAgICAgIGxldCBzdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgZWFjaChORVhUX1NURVBTLCAobWV0aG9kLCBzdGVwKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF4U3RlcHMgPSB0aGlzW3N0ZXBdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1heFN0ZXBzID09PSB0cnVlIHx8IChpc051bShtYXhTdGVwcykgJiYgbWF4U3RlcHMgPiB0aGlzW3N0ZXAgKyBDT1VOVF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbc3RlcCArIENPVU5UXSsrO1xuICAgICAgICAgICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzW21ldGhvZF0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG5cbiAgICAgICAgZWFjaCh0aGlzLnZhbHVlcywgKHZhbHVlKSA9PiBbdmFsdWUudG8sIHZhbHVlLmZyb21dID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXSk7XG4gICAgfVxuXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMCA6IHRoaXMuZHVyYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGN1cnJlbnRUaW1lKCk7XG4gICAgfVxuXG4gICAgc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLnNlZWtUaW1lKHRoaXMuZHVyYXRpb24gKiBwcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgc2Vla1RpbWUoZWxhcHNlZCkge1xuICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gZWxhcHNlZDtcbiAgICB9XG4gICAgXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFByb3BzKCksXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpbGF0ZTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIHlveW86IGZhbHNlLFxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICBwbGF5RGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgZW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZWxhcHNlZDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRWYWx1ZSgpLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgZWFzZTogZWFzaW5nLmVhc2VPdXQsXG4gICAgICAgICAgICBlbGFwc2VkOiAwLFxuICAgICAgICAgICAgc3RhZ2dlcjogMCxcbiAgICAgICAgICAgIHN0ZXBzOiAwLFxuICAgICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd0byc7XG4gICAgfVxufVxuIl19
return exports;
})();
var __small$_48 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _dictionary = __small$_46;

var transformProps = {};

var SCALE = 'scale';
var ROTATE = 'rotate';
var TRANSFORM_PERSPECTIVE = 'transformPerspective';
var TERMS = ['translate', SCALE, ROTATE, 'skew', TRANSFORM_PERSPECTIVE];

transformProps[ROTATE] = transformProps[SCALE] = transformProps[TRANSFORM_PERSPECTIVE] = true;

TERMS.forEach(function (term) {
  return _dictionary.axes.forEach(function (axis) {
    return transformProps[term + axis] = true;
  });
});

exports.default = transformProps;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxJQUFJLGlCQUFpQixFQUFqQjs7QUFFSixJQUFNLFFBQVEsT0FBUjtBQUNOLElBQU0sU0FBUyxRQUFUO0FBQ04sSUFBTSx3QkFBd0Isc0JBQXhCO0FBQ04sSUFBTSxRQUFRLENBQUMsV0FBRCxFQUFjLEtBQWQsRUFBcUIsTUFBckIsRUFBNkIsTUFBN0IsRUFBcUMscUJBQXJDLENBQVI7O0FBRU4sZUFBZSxNQUFmLElBQXlCLGVBQWUsS0FBZixJQUF3QixlQUFlLHFCQUFmLElBQXdDLElBQXhDOztBQUVqRCxNQUFNLE9BQU4sQ0FBYyxVQUFDLElBQUQ7U0FBVSxZQVhmLElBV2UsQ0FBSyxPQUFMLENBQWEsVUFBQyxJQUFEO1dBQVUsZUFBZSxPQUFPLElBQVAsQ0FBZixHQUE4QixJQUE5QjtHQUFWO0NBQXZCLENBQWQ7O2tCQUVlIiwiZmlsZSI6InRyYW5zZm9ybS1wcm9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF4ZXMgfSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcblxubGV0IHRyYW5zZm9ybVByb3BzID0ge307XG5cbmNvbnN0IFNDQUxFID0gJ3NjYWxlJztcbmNvbnN0IFJPVEFURSA9ICdyb3RhdGUnO1xuY29uc3QgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbmNvbnN0IFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaCgodGVybSkgPT4gYXhlcy5mb3JFYWNoKChheGlzKSA9PiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zZm9ybVByb3BzOyJdfQ==
return exports;
})();
var __small$_9 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _stateMap = __small$_35;

var _stateMap2 = _interopRequireDefault(_stateMap);

var _valueTypeMap = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _angle = __small$_20;

var _angle2 = _interopRequireDefault(_angle);

var _alpha = __small$_19;

var _alpha2 = _interopRequireDefault(_alpha);

var _axes = __small$_21;

var _axes2 = _interopRequireDefault(_axes);

var _color = __small$_22;

var _color2 = _interopRequireDefault(_color);

var _scale = __small$_29;

var _scale2 = _interopRequireDefault(_scale);

var _shadow = __small$_30;

var _shadow2 = _interopRequireDefault(_shadow);

var _positions = __small$_26;

var _positions2 = _interopRequireDefault(_positions);

var _px = __small$_27;

var _px2 = _interopRequireDefault(_px);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    // Color props
    color: _color2.default,
    backgroundColor: _color2.default,
    outlineColor: _color2.default,
    fill: _color2.default,
    stroke: _color2.default,

    // Border props
    borderColor: _color2.default,
    borderTopColor: _color2.default,
    borderRightColor: _color2.default,
    borderBottomColor: _color2.default,
    borderLeftColor: _color2.default,
    borderRadius: _px2.default,

    // Positioning
    margin: _positions2.default,
    padding: _positions2.default,
    width: _px2.default,
    height: _px2.default,

    // Axes
    backgroundPosition: _axes2.default,
    perspectiveOrigin: _axes2.default,
    transformOrigin: _axes2.default,

    // Shadows
    textShadow: _shadow2.default,
    boxShadow: _shadow2.default,

    // Transform properties
    rotate: _angle2.default,
    rotateX: _angle2.default,
    rotateY: _angle2.default,
    rotateZ: _angle2.default,
    scale: _scale2.default,
    scaleX: _scale2.default,
    scaleY: _scale2.default,
    scaleZ: _scale2.default,
    skewX: _angle2.default,
    skewY: _angle2.default,
    distance: _px2.default,
    translateX: _px2.default,
    translateY: _px2.default,
    translateZ: _px2.default,
    perspective: _px2.default,
    opacity: _alpha2.default
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQVNlOztBQUVYLDBCQUZXO0FBR1gsb0NBSFc7QUFJWCxpQ0FKVztBQUtYLHlCQUxXO0FBTVgsMkJBTlc7OztBQVNYLGdDQVRXO0FBVVgsbUNBVlc7QUFXWCxxQ0FYVztBQVlYLHNDQVpXO0FBYVgsb0NBYlc7QUFjWCw4QkFkVzs7O0FBaUJYLCtCQWpCVztBQWtCWCxnQ0FsQlc7QUFtQlgsdUJBbkJXO0FBb0JYLHdCQXBCVzs7O0FBdUJYLHNDQXZCVztBQXdCWCxxQ0F4Qlc7QUF5QlgsbUNBekJXOzs7QUE0QlgsZ0NBNUJXO0FBNkJYLCtCQTdCVzs7O0FBZ0NYLDJCQWhDVztBQWlDWCw0QkFqQ1c7QUFrQ1gsNEJBbENXO0FBbUNYLDRCQW5DVztBQW9DWCwwQkFwQ1c7QUFxQ1gsMkJBckNXO0FBc0NYLDJCQXRDVztBQXVDWCwyQkF2Q1c7QUF3Q1gsMEJBeENXO0FBeUNYLDBCQXpDVztBQTBDWCwwQkExQ1c7QUEyQ1gsNEJBM0NXO0FBNENYLDRCQTVDVztBQTZDWCw0QkE3Q1c7QUE4Q1gsNkJBOUNXO0FBK0NYLDRCQS9DVyIsImZpbGUiOiJ2YWx1ZS10eXBlLW1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmdsZSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbmdsZSc7XG5pbXBvcnQgYWxwaGEgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvYWxwaGEnO1xuaW1wb3J0IGF4ZXMgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvYXhlcyc7XG5pbXBvcnQgY29sb3IgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InO1xuaW1wb3J0IHNjYWxlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJztcbmltcG9ydCBzaGFkb3cgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2hhZG93JztcbmltcG9ydCBwb3NpdGlvbnMgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJztcbmltcG9ydCBweCBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9weCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAvLyBDb2xvciBwcm9wc1xuICAgIGNvbG9yOiBjb2xvcixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgIG91dGxpbmVDb2xvcjogY29sb3IsXG4gICAgZmlsbDogY29sb3IsXG4gICAgc3Ryb2tlOiBjb2xvcixcblxuICAgIC8vIEJvcmRlciBwcm9wc1xuICAgIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgICBib3JkZXJUb3BDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IGNvbG9yLFxuICAgIGJvcmRlckxlZnRDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyUmFkaXVzOiBweCxcblxuICAgIC8vIFBvc2l0aW9uaW5nXG4gICAgbWFyZ2luOiBwb3NpdGlvbnMsXG4gICAgcGFkZGluZzogcG9zaXRpb25zLFxuICAgIHdpZHRoOiBweCxcbiAgICBoZWlnaHQ6IHB4LFxuXG4gICAgLy8gQXhlc1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogYXhlcyxcbiAgICBwZXJzcGVjdGl2ZU9yaWdpbjogYXhlcyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IGF4ZXMsXG5cbiAgICAvLyBTaGFkb3dzXG4gICAgdGV4dFNoYWRvdzogc2hhZG93LFxuICAgIGJveFNoYWRvdzogc2hhZG93LCAgIFxuXG4gICAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgICByb3RhdGU6IGFuZ2xlLFxuICAgIHJvdGF0ZVg6IGFuZ2xlLFxuICAgIHJvdGF0ZVk6IGFuZ2xlLFxuICAgIHJvdGF0ZVo6IGFuZ2xlLFxuICAgIHNjYWxlOiBzY2FsZSxcbiAgICBzY2FsZVg6IHNjYWxlLFxuICAgIHNjYWxlWTogc2NhbGUsXG4gICAgc2NhbGVaOiBzY2FsZSxcbiAgICBza2V3WDogYW5nbGUsXG4gICAgc2tld1k6IGFuZ2xlLFxuICAgIGRpc3RhbmNlOiBweCxcbiAgICB0cmFuc2xhdGVYOiBweCxcbiAgICB0cmFuc2xhdGVZOiBweCxcbiAgICB0cmFuc2xhdGVaOiBweCxcbiAgICBwZXJzcGVjdGl2ZTogcHgsXG4gICAgb3BhY2l0eTogYWxwaGFcbn07Il19
return exports;
})());

var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);

var _prefixer = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;
var cache = {};
var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
var numPrefixes = prefixes.length;
var testElement = undefined;

/*
    Test style property for prefixed version
    
    @param [string]: Style property
    @return [string]: Cached property name
*/
var testPrefix = function (key) {
    testElement = testElement || document.createElement('div');

    if (cache[key] === false) {
        return false;
    } else {
        cache[key] = false;
    }

    for (var i = 0; i < numPrefixes; i++) {
        var prefix = prefixes[i],
            prefixed = prefix === '' ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);

        if (prefixed in testElement.style) {
            cache[key] = prefixed;
        }
    }

    return cache[key];
};

exports.default = function (key) {
    return cache[key] || testPrefix(key);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvY3NzL3ByZWZpeGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sUUFBUSxFQUFSO0FBQ04sSUFBTSxXQUFXLENBQUMsUUFBRCxFQUFVLEtBQVYsRUFBZ0IsR0FBaEIsRUFBb0IsSUFBcEIsRUFBMEIsRUFBMUIsQ0FBWDtBQUNOLElBQU0sY0FBYyxTQUFTLE1BQVQ7QUFDcEIsSUFBSSx1QkFBSjs7Ozs7Ozs7QUFRQSxJQUFNLGFBQWEsVUFBQyxHQUFELEVBQVM7QUFDeEIsa0JBQWMsZUFBZSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZixDQURVOztBQUd4QixRQUFJLE1BQU0sR0FBTixNQUFlLEtBQWYsRUFBc0I7QUFDdEIsZUFBTyxLQUFQLENBRHNCO0tBQTFCLE1BRU87QUFDSCxjQUFNLEdBQU4sSUFBYSxLQUFiLENBREc7S0FGUDs7QUFNQSxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxXQUFKLEVBQWlCLEdBQWpDLEVBQXNDO0FBQ2xDLFlBQUksU0FBUyxTQUFTLENBQVQsQ0FBVDtZQUNBLFdBQVcsTUFBQyxLQUFXLEVBQVgsR0FBaUIsR0FBbEIsR0FBd0IsU0FBUyxJQUFJLE1BQUosQ0FBVyxDQUFYLEVBQWMsV0FBZCxFQUFULEdBQXVDLElBQUksS0FBSixDQUFVLENBQVYsQ0FBdkMsQ0FGTDs7QUFJbEMsWUFBSSxZQUFZLFlBQVksS0FBWixFQUFtQjtBQUMvQixrQkFBTSxHQUFOLElBQWEsUUFBYixDQUQrQjtTQUFuQztLQUpKOztBQVNBLFdBQU8sTUFBTSxHQUFOLENBQVAsQ0FsQndCO0NBQVQ7O2tCQXFCSixVQUFDLEdBQUQ7V0FBUyxNQUFNLEdBQU4sS0FBYyxXQUFXLEdBQVgsQ0FBZDtDQUFUIiwiZmlsZSI6InByZWZpeGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FjaGUgPSB7fTtcbmNvbnN0IHByZWZpeGVzID0gWydXZWJraXQnLCdNb3onLCdPJywnbXMnLCAnJ107XG5jb25zdCBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbmxldCB0ZXN0RWxlbWVudDtcblxuLypcbiAgICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICAgIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xuY29uc3QgdGVzdFByZWZpeCA9IChrZXkpID0+IHtcbiAgICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaWYgKGNhY2hlW2tleV0gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZVtrZXldID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXSxcbiAgICAgICAgICAgIHByZWZpeGVkID0gKHByZWZpeCA9PT0gJycpID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgICAgIGlmIChwcmVmaXhlZCBpbiB0ZXN0RWxlbWVudC5zdHlsZSkge1xuICAgICAgICAgICAgY2FjaGVba2V5XSA9IHByZWZpeGVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjYWNoZVtrZXldO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKGtleSkgPT4gY2FjaGVba2V5XSB8fCB0ZXN0UHJlZml4KGtleSk7Il19
return exports;
})());

var _prefixer2 = _interopRequireDefault(_prefixer);

var _build = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _utils = __small$_14;

var _transformProps = __small$_48;

var _transformProps2 = _interopRequireDefault(_transformProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TRANSLATE_Z = 'translateZ';

exports.default = function (state, disableHardwareAcceleration) {
    var propertyString = '';
    var transformString = '';
    var transformHasZ = false;

    (0, _utils.each)(state, function (value, key) {
        if (_transformProps2.default[key]) {
            transformString += key + '(' + value + ') ';
            transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;
        } else {
            propertyString += ';' + key + ':' + value;
        }
    });

    if (transformString !== '') {
        if (!transformHasZ && !disableHardwareAcceleration) {
            transformString += TRANSLATE_Z + '(0px)';
        }

        propertyString += ';transform:' + transformString;
    }

    return propertyString;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvY3NzL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sY0FBYyxZQUFkOztrQkFFUyxVQUFDLEtBQUQsRUFBUSwyQkFBUixFQUF3QztBQUNuRCxRQUFJLGlCQUFpQixFQUFqQixDQUQrQztBQUVuRCxRQUFJLGtCQUFrQixFQUFsQixDQUYrQztBQUduRCxRQUFJLGdCQUFnQixLQUFoQixDQUgrQzs7QUFLbkQsZUFWSyxLQVVMLENBQUssS0FBTCxFQUFZLFVBQUMsS0FBRCxFQUFRLEdBQVIsRUFBZ0I7QUFDeEIsWUFBSSx5QkFBZSxHQUFmLENBQUosRUFBeUI7QUFDckIsK0JBQW1CLE1BQU0sR0FBTixHQUFZLEtBQVosR0FBb0IsSUFBcEIsQ0FERTtBQUVyQiw0QkFBZ0IsR0FBQyxLQUFRLFdBQVIsR0FBdUIsSUFBeEIsR0FBK0IsYUFBL0IsQ0FGSztTQUF6QixNQUlPO0FBQ0gsOEJBQWtCLE1BQU0sR0FBTixHQUFZLEdBQVosR0FBa0IsS0FBbEIsQ0FEZjtTQUpQO0tBRFEsQ0FBWixDQUxtRDs7QUFlbkQsUUFBSSxvQkFBb0IsRUFBcEIsRUFBd0I7QUFDeEIsWUFBSSxDQUFDLGFBQUQsSUFBa0IsQ0FBQywyQkFBRCxFQUE4QjtBQUNoRCwrQkFBbUIsY0FBYyxPQUFkLENBRDZCO1NBQXBEOztBQUlBLDBCQUFrQixnQkFBZ0IsZUFBaEIsQ0FMTTtLQUE1Qjs7QUFRQSxXQUFPLGNBQVAsQ0F2Qm1EO0NBQXhDIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi90cmFuc2Zvcm0tcHJvcHMnO1xuXG5jb25zdCBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pID0+IHtcbiAgICBsZXQgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgICBsZXQgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gICAgbGV0IHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAgIGVhY2goc3RhdGUsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IFRSQU5TTEFURV9aKSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBrZXkgKyAnOicgKyB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnO3RyYW5zZm9ybTonICsgdHJhbnNmb3JtU3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVN0cmluZztcbn07Il19
return exports;
})());

var _build2 = _interopRequireDefault(_build);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Render CSS to provided element

    @param { DOMElement, Object }
*/
var renderCSS = function (_ref) {
    var element = _ref.element;
    var state = _ref.state;
    return element.style.cssText += ';' + (0, _build2.default)(state);
};

/*
    Get CSS property of element

    @param [DOMElement]
    @param [string]
    @return [var]
*/
renderCSS.get = function (element, key) {
    key = (0, _prefixer2.default)(key);

    if (key) {
        return window.getComputedStyle(element, null)[key];
    }
};

renderCSS.stateMap = _stateMap2.default;
renderCSS.valueTypeMap = _valueTypeMap2.default;

exports.default = renderCSS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXIvY3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0sWUFBWTtRQUFHO1FBQVM7V0FBWSxRQUFRLEtBQVIsQ0FBYyxPQUFkLElBQXlCLE1BQU0scUJBQW9CLEtBQXBCLENBQU47Q0FBakQ7Ozs7Ozs7OztBQVNsQixVQUFVLEdBQVYsR0FBZ0IsVUFBQyxPQUFELEVBQVUsR0FBVixFQUFrQjtBQUM5QixVQUFNLHdCQUFTLEdBQVQsQ0FBTixDQUQ4Qjs7QUFHOUIsUUFBSSxHQUFKLEVBQVM7QUFDTCxlQUFPLE9BQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsSUFBakMsRUFBdUMsR0FBdkMsQ0FBUCxDQURLO0tBQVQ7Q0FIWTs7QUFRaEIsVUFBVSxRQUFWO0FBQ0EsVUFBVSxZQUFWOztrQkFFZSIsImZpbGUiOiJjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9jc3MvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vY3NzL3ByZWZpeGVyJztcbmltcG9ydCBidWlsZFByb3BlcnR5U3RyaW5nIGZyb20gJy4vY3NzL2J1aWxkJztcblxuLypcbiAgICBSZW5kZXIgQ1NTIHRvIHByb3ZpZGVkIGVsZW1lbnRcblxuICAgIEBwYXJhbSB7IERPTUVsZW1lbnQsIE9iamVjdCB9XG4qL1xuY29uc3QgcmVuZGVyQ1NTID0gKHsgZWxlbWVudCwgc3RhdGUgfSkgPT4gZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9ICc7JyArIGJ1aWxkUHJvcGVydHlTdHJpbmcoc3RhdGUpO1xuXG4vKlxuICAgIEdldCBDU1MgcHJvcGVydHkgb2YgZWxlbWVudFxuXG4gICAgQHBhcmFtIFtET01FbGVtZW50XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3Zhcl1cbiovXG5yZW5kZXJDU1MuZ2V0ID0gKGVsZW1lbnQsIGtleSkgPT4ge1xuICAgIGtleSA9IHByZWZpeGVyKGtleSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVtrZXldO1xuICAgIH1cbn07XG5cbnJlbmRlckNTUy5zdGF0ZU1hcCA9IHN0YXRlTWFwO1xucmVuZGVyQ1NTLnZhbHVlVHlwZU1hcCA9IHZhbHVlVHlwZU1hcDtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ1NTOyJdfQ==
return exports;
})();
var __small$_11 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _utils = __small$_14;

var _stateMap = __small$_35;

var _stateMap2 = _interopRequireDefault(_stateMap);

var _valueTypeMap = __small$_40;

var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);

var _build = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;
exports.default = build;

var _utils = __small$_14;

var _transformProps = __small$_48;

var _transformProps2 = _interopRequireDefault(_transformProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZERO_NOT_ZERO = 0.0001;

function build(state, origin) {
    var props = {},
        hasTransform = false,
        scale = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1,
        scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale || 1,
        transformOriginX = origin.x,
        transformOriginY = origin.y,
        scaleTransformX = -transformOriginX * (scale * 1),
        scaleTransformY = -transformOriginY * (scaleY * 1),
        scaleReplaceX = transformOriginX / scale,
        scaleReplaceY = transformOriginY / scaleY,
        transform = {
        translate: 'translate(' + state.translateX + ', ' + state.translateY + ') ',
        scale: 'translate(' + scaleTransformX + ', ' + scaleTransformY + ') scale(' + scale + ', ' + scaleY + ') translate(' + scaleReplaceX + ', ' + scaleReplaceY + ') ',
        rotate: 'rotate(' + state.rotate + ', ' + transformOriginX + ', ' + transformOriginY + ') ',
        skewX: 'skewX(' + state.skewX + ') ',
        skewY: 'skewY(' + state.skewY + ') '
    };

    (0, _utils.each)(state, function (key, value) {
        if (_transformProps2.default[key]) {
            hasTransform = true;
        } else {
            props[(0, _utils.camelToDash)(key)] = value;
        }
    });

    if (hasTransform) {
        props.transform = '';

        (0, _utils.each)(transform, function (key, value) {
            var defaultValue = key === 'scale' ? '1' : '0';
            props.transform += value.replace(/undefined/g, defaultValue);
        });
    }

    return props;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvc3ZnL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFLd0I7Ozs7Ozs7Ozs7QUFGeEIsSUFBTSxnQkFBZ0IsTUFBaEI7O0FBRVMsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQixNQUF0QixFQUE4QjtBQUN6QyxRQUFJLFFBQVEsRUFBUjtRQUNBLGVBQWUsS0FBZjtRQUNBLFFBQVEsTUFBTSxLQUFOLEtBQWdCLFNBQWhCLEdBQTRCLE1BQU0sS0FBTixJQUFlLGFBQWYsR0FBK0IsTUFBTSxNQUFOLElBQWdCLENBQWhCO1FBQ25FLFNBQVMsTUFBTSxNQUFOLEtBQWlCLFNBQWpCLEdBQTZCLE1BQU0sTUFBTixJQUFnQixhQUFoQixHQUFnQyxTQUFTLENBQVQ7UUFDdEUsbUJBQW1CLE9BQU8sQ0FBUDtRQUNuQixtQkFBbUIsT0FBTyxDQUFQO1FBQ25CLGtCQUFrQixDQUFFLGdCQUFGLElBQXNCLFFBQVEsQ0FBUixDQUF0QjtRQUNsQixrQkFBa0IsQ0FBRSxnQkFBRixJQUFzQixTQUFTLENBQVQsQ0FBdEI7UUFDbEIsZ0JBQWdCLG1CQUFtQixLQUFuQjtRQUNoQixnQkFBZ0IsbUJBQW1CLE1BQW5CO1FBQ2hCLFlBQVk7QUFDUixrQ0FBd0IsTUFBTSxVQUFOLFVBQXFCLE1BQU0sVUFBTixPQUE3QztBQUNBLDhCQUFvQix5QkFBb0IsK0JBQTBCLGVBQVUsMEJBQXFCLHVCQUFrQixvQkFBbkg7QUFDQSw0QkFBa0IsTUFBTSxNQUFOLFVBQWlCLDBCQUFxQix1QkFBeEQ7QUFDQSwwQkFBZ0IsTUFBTSxLQUFOLE9BQWhCO0FBQ0EsMEJBQWdCLE1BQU0sS0FBTixPQUFoQjtLQUxKLENBWHFDOztBQW1CekMsZUF4QkssS0F3QkwsQ0FBSyxLQUFMLEVBQVksVUFBQyxHQUFELEVBQU0sS0FBTixFQUFnQjtBQUN4QixZQUFJLHlCQUFlLEdBQWYsQ0FBSixFQUF5QjtBQUNyQiwyQkFBZSxJQUFmLENBRHFCO1NBQXpCLE1BRU87QUFDSCxrQkFBTSxXQTVCSCxZQTRCRyxDQUFZLEdBQVosQ0FBTixJQUEwQixLQUExQixDQURHO1NBRlA7S0FEUSxDQUFaLENBbkJ5Qzs7QUEyQnpDLFFBQUksWUFBSixFQUFrQjtBQUNkLGNBQU0sU0FBTixHQUFrQixFQUFsQixDQURjOztBQUdkLG1CQW5DQyxLQW1DRCxDQUFLLFNBQUwsRUFBZ0IsVUFBQyxHQUFELEVBQU0sS0FBTixFQUFnQjtBQUM1QixnQkFBSSxlQUFlLEdBQUMsS0FBUSxPQUFSLEdBQW1CLEdBQXBCLEdBQTBCLEdBQTFCLENBRFM7QUFFNUIsa0JBQU0sU0FBTixJQUFtQixNQUFNLE9BQU4sQ0FBYyxZQUFkLEVBQTRCLFlBQTVCLENBQW5CLENBRjRCO1NBQWhCLENBQWhCLENBSGM7S0FBbEI7O0FBU0EsV0FBTyxLQUFQLENBcEN5QztDQUE5QiIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2gsIGNhbWVsVG9EYXNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJztcblxuY29uc3QgWkVST19OT1RfWkVSTyA9IDAuMDAwMTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGQoc3RhdGUsIG9yaWdpbikge1xuICAgIGxldCBwcm9wcyA9IHt9LFxuICAgICAgICBoYXNUcmFuc2Zvcm0gPSBmYWxzZSxcbiAgICAgICAgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxLFxuICAgICAgICBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMSxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luWCA9IG9yaWdpbi54LFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5ZID0gb3JpZ2luLnksXG4gICAgICAgIHNjYWxlVHJhbnNmb3JtWCA9IC0gdHJhbnNmb3JtT3JpZ2luWCAqIChzY2FsZSAqIDEpLFxuICAgICAgICBzY2FsZVRyYW5zZm9ybVkgPSAtIHRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSksXG4gICAgICAgIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGUsXG4gICAgICAgIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZLFxuICAgICAgICB0cmFuc2Zvcm0gPSB7XG4gICAgICAgICAgICB0cmFuc2xhdGU6IGB0cmFuc2xhdGUoJHtzdGF0ZS50cmFuc2xhdGVYfSwgJHtzdGF0ZS50cmFuc2xhdGVZfSkgYCxcbiAgICAgICAgICAgIHNjYWxlOiBgdHJhbnNsYXRlKCR7c2NhbGVUcmFuc2Zvcm1YfSwgJHtzY2FsZVRyYW5zZm9ybVl9KSBzY2FsZSgke3NjYWxlfSwgJHtzY2FsZVl9KSB0cmFuc2xhdGUoJHtzY2FsZVJlcGxhY2VYfSwgJHtzY2FsZVJlcGxhY2VZfSkgYCxcbiAgICAgICAgICAgIHJvdGF0ZTogYHJvdGF0ZSgke3N0YXRlLnJvdGF0ZX0sICR7dHJhbnNmb3JtT3JpZ2luWH0sICR7dHJhbnNmb3JtT3JpZ2luWX0pIGAsXG4gICAgICAgICAgICBza2V3WDogYHNrZXdYKCR7c3RhdGUuc2tld1h9KSBgLFxuICAgICAgICAgICAgc2tld1k6IGBza2V3WSgke3N0YXRlLnNrZXdZfSkgYFxuICAgICAgICB9O1xuXG4gICAgZWFjaChzdGF0ZSwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wc1tjYW1lbFRvRGFzaChrZXkpXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIGVhY2godHJhbnNmb3JtLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IChrZXkgPT09ICdzY2FsZScpID8gJzEnIDogJzAnO1xuICAgICAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHZhbHVlLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG59Il19
return exports;
})());

var _build2 = _interopRequireDefault(_build);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderSVG(_ref) {
    var state = _ref.state;
    var element = _ref.element;
    var svgOrigin = _ref.svgOrigin;

    (0, _utils.each)((0, _build2.default)(state, svgOrigin), function (value, key) {
        return element.setAttribute(key, value);
    });
}

renderSVG.init = function (actor) {
    var bBox = actor.element.getBBox();
    var transformOriginX = actor.values.transformOriginX ? actor.values.transformOriginX.current : 50;
    var transformOriginY = actor.values.transformOriginY ? actor.values.transformOriginY.current : 50;

    actor.svgOrigin = {
        x: bBox.width * (transformOriginX / 100) + bBox.x,
        y: bBox.height * (transformOriginY / 100) + bBox.y
    };
};

renderSVG.stateMap = _stateMap2.default;
renderSVG.valueTypeMap = _valueTypeMap2.default;

exports.default = renderSVG;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXIvc3ZnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsU0FBUyxTQUFULE9BQWtEO1FBQTdCLG1CQUE2QjtRQUF0Qix1QkFBc0I7UUFBYiwyQkFBYTs7QUFDOUMsZUFOSyxLQU1MLENBQUsscUJBQU0sS0FBTixFQUFhLFNBQWIsQ0FBTCxFQUE4QixVQUFDLEtBQUQsRUFBUSxHQUFSO2VBQWdCLFFBQVEsWUFBUixDQUFxQixHQUFyQixFQUEwQixLQUExQjtLQUFoQixDQUE5QixDQUQ4QztDQUFsRDs7QUFJQSxVQUFVLElBQVYsR0FBaUIsVUFBQyxLQUFELEVBQVc7QUFDeEIsUUFBTSxPQUFPLE1BQU0sT0FBTixDQUFjLE9BQWQsRUFBUCxDQURrQjtBQUV4QixRQUFNLG1CQUFtQixNQUFNLE1BQU4sQ0FBYSxnQkFBYixHQUFnQyxNQUFNLE1BQU4sQ0FBYSxnQkFBYixDQUE4QixPQUE5QixHQUF3QyxFQUF4RSxDQUZEO0FBR3hCLFFBQU0sbUJBQW1CLE1BQU0sTUFBTixDQUFhLGdCQUFiLEdBQWdDLE1BQU0sTUFBTixDQUFhLGdCQUFiLENBQThCLE9BQTlCLEdBQXdDLEVBQXhFLENBSEQ7O0FBS3hCLFVBQU0sU0FBTixHQUFrQjtBQUNkLFdBQUcsS0FBSyxLQUFMLElBQWMsbUJBQW1CLEdBQW5CLENBQWQsR0FBd0MsS0FBSyxDQUFMO0FBQzNDLFdBQUcsS0FBSyxNQUFMLElBQWUsbUJBQW1CLEdBQW5CLENBQWYsR0FBeUMsS0FBSyxDQUFMO0tBRmhELENBTHdCO0NBQVg7O0FBV2pCLFVBQVUsUUFBVjtBQUNBLFVBQVUsWUFBVjs7a0JBRWUiLCJmaWxlIjoic3ZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9zdmcvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IGJ1aWxkIGZyb20gJy4vc3ZnL2J1aWxkJztcblxuZnVuY3Rpb24gcmVuZGVyU1ZHKHsgc3RhdGUsIGVsZW1lbnQsIHN2Z09yaWdpbiB9KSB7XG4gICAgZWFjaChidWlsZChzdGF0ZSwgc3ZnT3JpZ2luKSwgKHZhbHVlLCBrZXkpID0+IGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpKTtcbn1cblxucmVuZGVyU1ZHLmluaXQgPSAoYWN0b3IpID0+IHtcbiAgICBjb25zdCBiQm94ID0gYWN0b3IuZWxlbWVudC5nZXRCQm94KCk7XG4gICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luWCA9IGFjdG9yLnZhbHVlcy50cmFuc2Zvcm1PcmlnaW5YID8gYWN0b3IudmFsdWVzLnRyYW5zZm9ybU9yaWdpblguY3VycmVudCA6IDUwO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpblkgPSBhY3Rvci52YWx1ZXMudHJhbnNmb3JtT3JpZ2luWSA/IGFjdG9yLnZhbHVlcy50cmFuc2Zvcm1PcmlnaW5ZLmN1cnJlbnQgOiA1MDtcblxuICAgIGFjdG9yLnN2Z09yaWdpbiA9IHtcbiAgICAgICAgeDogYkJveC53aWR0aCAqICh0cmFuc2Zvcm1PcmlnaW5YIC8gMTAwKSArIGJCb3gueCxcbiAgICAgICAgeTogYkJveC5oZWlnaHQgKiAodHJhbnNmb3JtT3JpZ2luWSAvIDEwMCkgKyBiQm94LnlcbiAgICB9O1xufTtcblxucmVuZGVyU1ZHLnN0YXRlTWFwID0gc3RhdGVNYXA7XG5yZW5kZXJTVkcudmFsdWVUeXBlTWFwID0gdmFsdWVUeXBlTWFwO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJTVkc7Il19
return exports;
})();
var __small$_10 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _build = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;
exports.default = build;

var _utils = __small$_14;

/*
    Convert percentage to pixels
    
    @param [number]: Percentage of total length
    @param [number]: Total length
*/
var percentToPixels = function (percent, length) {
    return parseFloat(percent) / 100 * length + 'px';
};

function build(state, length) {
    var styles = {};
    var dashArrayStyles = {
        length: 0,
        spacing: length + 'px'
    };
    var hasDashArray = false;

    (0, _utils.each)(state, function (value, key) {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvc3ZnLXBhdGgvYnVpbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tCQVV3Qjs7Ozs7Ozs7OztBQUZ4QixJQUFNLGtCQUFrQixVQUFDLE9BQUQsRUFBVSxNQUFWO1dBQXFCLFVBQUMsQ0FBVyxPQUFYLElBQXNCLEdBQXRCLEdBQTZCLE1BQTlCLEdBQXVDLElBQXZDO0NBQXJCOztBQUVULFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0IsTUFBdEIsRUFBOEI7QUFDekMsUUFBTSxTQUFTLEVBQVQsQ0FEbUM7QUFFekMsUUFBTSxrQkFBa0I7QUFDcEIsZ0JBQVEsQ0FBUjtBQUNBLGlCQUFTLFNBQVMsSUFBVDtLQUZQLENBRm1DO0FBTXpDLFFBQUksZUFBZSxLQUFmLENBTnFDOztBQVF6QyxlQWxCSyxLQWtCTCxDQUFLLEtBQUwsRUFBWSxVQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWdCO0FBQ3hCLGdCQUFRLEdBQVI7QUFDQSxpQkFBSyxRQUFMLENBREE7QUFFQSxpQkFBSyxTQUFMO0FBQ0ksK0JBQWUsSUFBZixDQURKO0FBRUksZ0NBQWdCLEdBQWhCLElBQXVCLGdCQUFnQixLQUFoQixFQUF1QixNQUF2QixDQUF2QixDQUZKO0FBR0ksc0JBSEo7QUFGQSxpQkFNSyxRQUFMO0FBQ0ksdUJBQU8sbUJBQVAsSUFBOEIsZ0JBQWdCLENBQUMsS0FBRCxFQUFRLE1BQXhCLENBQTlCLENBREo7QUFFSSxzQkFGSjtBQU5BO0FBVUksdUJBQU8sR0FBUCxJQUFjLEtBQWQsQ0FESjtBQVRBLFNBRHdCO0tBQWhCLENBQVosQ0FSeUM7O0FBdUJ6QyxRQUFJLFlBQUosRUFBa0I7QUFDZCxlQUFPLGtCQUFQLElBQTZCLGdCQUFnQixNQUFoQixHQUF5QixHQUF6QixHQUErQixnQkFBZ0IsT0FBaEIsQ0FEOUM7S0FBbEI7O0FBSUEsV0FBTyxNQUFQLENBM0J5QztDQUE5QiIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuXG4vKlxuICAgIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG5jb25zdCBwZXJjZW50VG9QaXhlbHMgPSAocGVyY2VudCwgbGVuZ3RoKSA9PiAocGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCkgKiBsZW5ndGggKyAncHgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZChzdGF0ZSwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge307XG4gICAgY29uc3QgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgICB9O1xuICAgIGxldCBoYXNEYXNoQXJyYXkgPSBmYWxzZTtcblxuICAgIGVhY2goc3RhdGUsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG59Il19
return exports;
})());

var _build2 = _interopRequireDefault(_build);

var _stateMap = ((function() {
var exports = {};
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _stateMap = __small$_35;

var _stateMap2 = _interopRequireDefault(_stateMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STROKE = 'stroke-';

exports.default = _extends({}, _stateMap2.default, {
    opacity: STROKE + 'opacity',
    width: STROKE + 'width',
    miterlimit: STROKE + 'miterlimit'
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvc3ZnLXBhdGgvc3RhdGUtbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sU0FBUyxTQUFUOzs7QUFJRixhQUFZLGtCQUFaO0FBQ0EsV0FBVSxnQkFBVjtBQUNBLGdCQUFlLHFCQUFmIiwiZmlsZSI6InN0YXRlLW1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3NTdGF0ZU1hcCBmcm9tICcuLi9jc3Mvc3RhdGUtbWFwJztcblxuY29uc3QgU1RST0tFID0gJ3N0cm9rZS0nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLi4uY3NzU3RhdGVNYXAsXG4gICAgb3BhY2l0eTogYCR7U1RST0tFfW9wYWNpdHlgLFxuICAgIHdpZHRoOiBgJHtTVFJPS0V9d2lkdGhgLFxuICAgIG1pdGVybGltaXQ6IGAke1NUUk9LRX1taXRlcmxpbWl0YFxufTsiXX0=
return exports;
})());

var _stateMap2 = _interopRequireDefault(_stateMap);

var _valueTypeMap = __small$_40;

var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);

var _svg = __small$_11;

var _svg2 = _interopRequireDefault(_svg);

var _utils = __small$_14;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderSVGPath = function (actor) {
    (0, _svg2.default)(actor);
    (0, _utils.each)((0, _build2.default)(actor.state, actor.pathLength), function (value, key) {
        return actor.element.setAttribute(key, value);
    });
};

renderSVGPath.init = function (actor) {
    actor.pathLength = actor.element.getTotalLength();
    _svg2.default.init(actor);
};

renderSVGPath.stateMap = _stateMap2.default;
renderSVGPath.valueTypeMap = _valueTypeMap2.default;

exports.default = renderSVGPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXIvc3ZnLXBhdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsSUFBTSxnQkFBZ0IsVUFBQyxLQUFELEVBQVc7QUFDN0IsdUJBQVUsS0FBVixFQUQ2QjtBQUU3QixlQUpLLEtBSUwsQ0FBSyxxQkFBTSxNQUFNLEtBQU4sRUFBYSxNQUFNLFVBQU4sQ0FBeEIsRUFBMkMsVUFBQyxLQUFELEVBQVEsR0FBUjtlQUFnQixNQUFNLE9BQU4sQ0FBYyxZQUFkLENBQTJCLEdBQTNCLEVBQWdDLEtBQWhDO0tBQWhCLENBQTNDLENBRjZCO0NBQVg7O0FBS3RCLGNBQWMsSUFBZCxHQUFxQixVQUFDLEtBQUQsRUFBVztBQUM1QixVQUFNLFVBQU4sR0FBbUIsTUFBTSxPQUFOLENBQWMsY0FBZCxFQUFuQixDQUQ0QjtBQUU1QixrQkFBVSxJQUFWLENBQWUsS0FBZixFQUY0QjtDQUFYOztBQUtyQixjQUFjLFFBQWQ7QUFDQSxjQUFjLFlBQWQ7O2tCQUVlIiwiZmlsZSI6InN2Zy1wYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkIGZyb20gJy4vc3ZnLXBhdGgvYnVpbGQnO1xuaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vc3ZnLXBhdGgvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9zdmcvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IHJlbmRlclNWRyBmcm9tICcuL3N2Zyc7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgcmVuZGVyU1ZHUGF0aCA9IChhY3RvcikgPT4ge1xuICAgIHJlbmRlclNWRyhhY3Rvcik7XG4gICAgZWFjaChidWlsZChhY3Rvci5zdGF0ZSwgYWN0b3IucGF0aExlbmd0aCksICh2YWx1ZSwga2V5KSA9PiBhY3Rvci5lbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSk7XG59O1xuXG5yZW5kZXJTVkdQYXRoLmluaXQgPSAoYWN0b3IpID0+IHtcbiAgICBhY3Rvci5wYXRoTGVuZ3RoID0gYWN0b3IuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuICAgIHJlbmRlclNWRy5pbml0KGFjdG9yKTtcbn07XG5cbnJlbmRlclNWR1BhdGguc3RhdGVNYXAgPSBzdGF0ZU1hcDtcbnJlbmRlclNWR1BhdGgudmFsdWVUeXBlTWFwID0gdmFsdWVUeXBlTWFwO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJTVkdQYXRoOyJdfQ==
return exports;
})();
'use strict';

exports.__esModule = true;
exports.createMapTransform = exports.shadowType = exports.scaleType = exports.rgbType = exports.pxType = exports.positionsType = exports.hslType = exports.hexType = exports.complexType = exports.colorType = exports.axesType = exports.angleType = exports.alphaType = exports.timeline = exports.stagger = exports.setDilation = exports.$ = exports.utils = exports.calc = exports.easing = exports.renderSVGPath = exports.renderSVG = exports.renderCSS = exports.renderAttr = exports.process = exports.input = exports.track = exports.physics = exports.tween = exports.actor = undefined;

var _Actor = __small$_2;

var _Actor2 = _interopRequireDefault(_Actor);

var _Tween = __small$_3;

var _Tween2 = _interopRequireDefault(_Tween);

var _Physics = ((function() {
var exports = {};
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Action2 = __small$_32;

var _Action3 = _interopRequireDefault(_Action2);

var _calc = __small$_13;

var _utils = __small$_14;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Physics = function (_Action) {
    _inherits(Physics, _Action);

    function Physics() {
        _classCallCheck(this, Physics);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _Action.call.apply(_Action, [this].concat(args)));

        _this.inactiveFrames = 0;
        return _this;
    }

    Physics.prototype.onUpdate = function onUpdate(physics, frameStamp, elapsed) {
        var _this2 = this;

        this.hasChanged = false;

        (0, _utils.each)(this.values, function (value) {
            var previousValue = value.current;

            // Apply acceleration
            value.velocity += (0, _calc.speedPerFrame)(value.force, elapsed);

            // Apply friction
            value.velocity *= Math.pow(1 - value.friction, elapsed / 10);

            // Apply spring
            if (value.spring && (0, _utils.isNum)(value.to)) {
                var distanceToTarget = value.to - value.current;
                value.velocity += distanceToTarget * (0, _calc.speedPerFrame)(value.spring, elapsed);
            }

            // Apply latest velocity
            value.current += (0, _calc.speedPerFrame)(value.velocity, elapsed);

            // Check if value has changed
            if (value.current !== previousValue || Math.abs(value.velocity) >= value.stopSpeed) {
                _this2.hasChanged = true;
            }
        });
    };

    Physics.prototype.onFrameEnd = function onFrameEnd() {
        if (this.autoEnd) {
            this.inactiveFrames = this.hasChanged ? 1 : this.inactiveFrames + 1;

            if (this.inactiveFrames >= this.maxInactiveFrames) {
                this.stop();
            }
        }
    };

    /*
        # Get default Simulate props
         @return [object]
    */

    Physics.prototype.getDefaultProps = function getDefaultProps() {
        return _extends({}, _Action.prototype.getDefaultProps.call(this), {
            autoEnd: true,
            maxInactiveFrames: 3
        });
    };

    /*
        # Get default Simulate value props
         @return [object]
    */

    Physics.prototype.getDefaultValue = function getDefaultValue() {
        return _extends({}, _Action.prototype.getDefaultValue.call(this), {
            force: 0, // [number]: Acceleration to apply to value, in units per second
            bounce: 0, // [number]: Factor to multiply velocity by on bounce
            spring: 0, // [number]: Spring strength during 'string'
            stopSpeed: 0.0001, // [number]: Stop simulation under this speed
            friction: 0 // [number]: Friction to apply per frame, 0-1
        });
    };

    /*
        # Get default Simulate value property name
        ## Set values to this when a `value` is not provided as an object
         @return [string]
    */

    Physics.prototype.getDefaultValueProp = function getDefaultValueProp() {
        return 'velocity';
    };

    return Physics;
}(_Action3.default);

exports.default = Physics;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1BoeXNpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlxQjs7O0FBRWpCLGFBRmlCLE9BRWpCLEdBQXFCOzhCQUZKLFNBRUk7OzBDQUFOOztTQUFNOztxREFDakIsMENBQVMsS0FBVCxHQURpQjs7QUFFakIsY0FBSyxjQUFMLEdBQXNCLENBQXRCLENBRmlCOztLQUFyQjs7QUFGaUIsc0JBT2pCLDZCQUFTLFNBQVMsWUFBWSxTQUFTOzs7QUFDbkMsYUFBSyxVQUFMLEdBQWtCLEtBQWxCLENBRG1DOztBQUduQyxtQkFaQyxLQVlELENBQUssS0FBSyxNQUFMLEVBQWEsVUFBQyxLQUFELEVBQVc7QUFDekIsZ0JBQU0sZ0JBQWdCLE1BQU0sT0FBTjs7O0FBREcsaUJBSXpCLENBQU0sUUFBTixJQUFrQixVQWpCckIsY0FpQnFCLENBQWMsTUFBTSxLQUFOLEVBQWEsT0FBM0IsQ0FBbEI7OztBQUp5QixpQkFPekIsQ0FBTSxRQUFOLGFBQW1CLElBQUksTUFBTSxRQUFOLEVBQW9CLFVBQVUsRUFBVixDQUEzQzs7O0FBUHlCLGdCQVVyQixNQUFNLE1BQU4sSUFBZ0IsV0F0QmpCLE1Bc0JpQixDQUFNLE1BQU0sRUFBTixDQUF0QixFQUFpQztBQUNqQyxvQkFBTSxtQkFBbUIsTUFBTSxFQUFOLEdBQVcsTUFBTSxPQUFOLENBREg7QUFFakMsc0JBQU0sUUFBTixJQUFrQixtQkFBbUIsVUF6QjVDLGNBeUI0QyxDQUFjLE1BQU0sTUFBTixFQUFjLE9BQTVCLENBQW5CLENBRmU7YUFBckM7OztBQVZ5QixpQkFnQnpCLENBQU0sT0FBTixJQUFpQixVQTdCcEIsY0E2Qm9CLENBQWMsTUFBTSxRQUFOLEVBQWdCLE9BQTlCLENBQWpCOzs7QUFoQnlCLGdCQW1CckIsTUFBTSxPQUFOLEtBQWtCLGFBQWxCLElBQW1DLEtBQUssR0FBTCxDQUFTLE1BQU0sUUFBTixDQUFULElBQTRCLE1BQU0sU0FBTixFQUFpQjtBQUNoRix1QkFBSyxVQUFMLEdBQWtCLElBQWxCLENBRGdGO2FBQXBGO1NBbkJjLENBQWxCLENBSG1DOzs7QUFQdEIsc0JBbUNqQixtQ0FBYTtBQUNULFlBQUksS0FBSyxPQUFMLEVBQWM7QUFDZCxpQkFBSyxjQUFMLEdBQXNCLEtBQUssVUFBTCxHQUFrQixDQUFsQixHQUFzQixLQUFLLGNBQUwsR0FBc0IsQ0FBdEIsQ0FEOUI7O0FBR2QsZ0JBQUksS0FBSyxjQUFMLElBQXVCLEtBQUssaUJBQUwsRUFBd0I7QUFDL0MscUJBQUssSUFBTCxHQUQrQzthQUFuRDtTQUhKOzs7Ozs7OztBQXBDYSxzQkFrRGpCLDZDQUFrQjtBQUNkLDRCQUNPLGtCQUFNLGVBQU47QUFDSCxxQkFBUyxJQUFUO0FBQ0EsK0JBQW1CLENBQW5CO1VBSEosQ0FEYzs7Ozs7Ozs7QUFsREQsc0JBK0RqQiw2Q0FBa0I7QUFDZCw0QkFDTyxrQkFBTSxlQUFOO0FBQ0gsbUJBQU8sQ0FBUDtBQUNBLG9CQUFRLENBQVI7QUFDQSxvQkFBUSxDQUFSO0FBQ0EsdUJBQVcsTUFBWDtBQUNBLHNCQUFVLENBQVY7VUFOSixDQURjOzs7Ozs7Ozs7QUEvREQsc0JBZ0ZqQixxREFBc0I7QUFDbEIsZUFBTyxVQUFQLENBRGtCOzs7V0FoRkwiLCJmaWxlIjoiUGh5c2ljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHsgc3BlZWRQZXJGcmFtZSB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGVhY2gsIGlzTnVtIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGh5c2ljcyBleHRlbmRzIEFjdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcbiAgICB9XG5cbiAgICBvblVwZGF0ZShwaHlzaWNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gc3BlZWRQZXJGcmFtZSh2YWx1ZS5mb3JjZSwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGZyaWN0aW9uXG4gICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSAqPSAoMSAtIHZhbHVlLmZyaWN0aW9uKSAqKiAoZWxhcHNlZCAvIDEwKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgc3ByaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3ByaW5nICYmIGlzTnVtKHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlVG9UYXJnZXQgPSB2YWx1ZS50byAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqIHNwZWVkUGVyRnJhbWUodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9IHNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHByZXZpb3VzVmFsdWUgfHwgTWF0aC5hYnModmFsdWUudmVsb2NpdHkpID49IHZhbHVlLnN0b3BTcGVlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9FbmQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSB0aGlzLmhhc0NoYW5nZWQgPyAxIDogdGhpcy5pbmFjdGl2ZUZyYW1lcyArIDE7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgcHJvcHNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0UHJvcHMoKSxcbiAgICAgICAgICAgIGF1dG9FbmQ6IHRydWUsXG4gICAgICAgICAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcHNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0VmFsdWUoKSxcbiAgICAgICAgICAgIGZvcmNlOiAwLCAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgICAgICAgICBib3VuY2U6IDAsIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgICAgICAgICBzcHJpbmc6IDAsIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gICAgICAgICAgICBzdG9wU3BlZWQ6IDAuMDAwMSwgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gICAgICAgICAgICBmcmljdGlvbjogMCAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lLCAwLTFcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHZhbHVlcyB0byB0aGlzIHdoZW4gYSBgdmFsdWVgIGlzIG5vdCBwcm92aWRlZCBhcyBhbiBvYmplY3RcblxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3ZlbG9jaXR5JztcbiAgICB9XG59XG4iXX0=
return exports;
})());

var _Physics2 = _interopRequireDefault(_Physics);

var _Track = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _Action2 = __small$_32;

var _Action3 = _interopRequireDefault(_Action2);

var _Pointer = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _Input2 = __small$_7;

var _Input3 = _interopRequireDefault(_Input2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pointer = function (_Input) {
    _inherits(Pointer, _Input);

    function Pointer(initialState, moveEvent, eventToPoint) {
        _classCallCheck(this, Pointer);

        var _this = _possibleConstructorReturn(this, _Input.call(this, initialState));

        _this.eventToPoint = eventToPoint;
        _this.moveEvent = moveEvent;
        return _this;
    }

    Pointer.prototype.latest = function latest(e) {
        _Input.prototype.latest.call(this, this.eventToPoint(e));
        e.preventDefault();
    };

    Pointer.prototype.start = function start() {
        _Input.prototype.start.call(this);
        document.documentElement.addEventListener(this.moveEvent, this.latest);
    };

    Pointer.prototype.stop = function stop() {
        _Input.prototype.stop.call(this);
        document.documentElement.removeEventListener(this.moveEvent, this.latest);
    };

    return Pointer;
}(_Input3.default);

exports.default = Pointer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9Qb2ludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUI7OztBQUNqQixhQURpQixPQUNqQixDQUFZLFlBQVosRUFBMEIsU0FBMUIsRUFBcUMsWUFBckMsRUFBbUQ7OEJBRGxDLFNBQ2tDOztxREFDL0Msa0JBQU0sWUFBTixHQUQrQzs7QUFFL0MsY0FBSyxZQUFMLEdBQW9CLFlBQXBCLENBRitDO0FBRy9DLGNBQUssU0FBTCxHQUFpQixTQUFqQixDQUgrQzs7S0FBbkQ7O0FBRGlCLHNCQU9qQix5QkFBTyxHQUFHO0FBQ04seUJBQU0sTUFBTixZQUFhLEtBQUssWUFBTCxDQUFrQixDQUFsQixDQUFiLEVBRE07QUFFTixVQUFFLGNBQUYsR0FGTTs7O0FBUE8sc0JBWWpCLHlCQUFRO0FBQ0oseUJBQU0sS0FBTixZQURJO0FBRUosaUJBQVMsZUFBVCxDQUF5QixnQkFBekIsQ0FBMEMsS0FBSyxTQUFMLEVBQWdCLEtBQUssTUFBTCxDQUExRCxDQUZJOzs7QUFaUyxzQkFpQmpCLHVCQUFPO0FBQ0gseUJBQU0sSUFBTixZQURHO0FBRUgsaUJBQVMsZUFBVCxDQUF5QixtQkFBekIsQ0FBNkMsS0FBSyxTQUFMLEVBQWdCLEtBQUssTUFBTCxDQUE3RCxDQUZHOzs7V0FqQlUiLCJmaWxlIjoiUG9pbnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnRlciBleHRlbmRzIElucHV0IHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsU3RhdGUsIG1vdmVFdmVudCwgZXZlbnRUb1BvaW50KSB7XG4gICAgICAgIHN1cGVyKGluaXRpYWxTdGF0ZSk7XG4gICAgICAgIHRoaXMuZXZlbnRUb1BvaW50ID0gZXZlbnRUb1BvaW50O1xuICAgICAgICB0aGlzLm1vdmVFdmVudCA9IG1vdmVFdmVudDtcbiAgICB9XG5cbiAgICBsYXRlc3QoZSkge1xuICAgICAgICBzdXBlci5sYXRlc3QodGhpcy5ldmVudFRvUG9pbnQoZSkpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCB0aGlzLmxhdGVzdCk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy5sYXRlc3QpO1xuICAgIH1cbn1cbiJdfQ==
return exports;
})());

var _Pointer2 = _interopRequireDefault(_Pointer);

var _calc = __small$_13;

var _utils = __small$_14;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
    Scrape x/y coordinates from provided event

    @param [event]
    @return [object]
*/
var mouseEventToPoint = function (e) {
    return {
        x: e.pageX,
        y: e.pageY
    };
};

var touchEventToPoint = function (_ref) {
    var changedTouches = _ref.changedTouches;
    return {
        x: changedTouches[0].clientX,
        y: changedTouches[0].clientY
    };
};

var createPointer = function (e) {
    return e.touches ? new _Pointer2.default(mouseEventToPoint(e), 'mousemove', mouseEventToPoint) : new _Pointer2.default(touchEventToPoint(e), 'touchmove', touchEventToPoint);
};

var getActualEvent = function (e) {
    return e.originalEvent || e;
};

var Track = function (_Action) {
    _inherits(Track, _Action);

    function Track(props, input) {
        _classCallCheck(this, Track);

        var _this = _possibleConstructorReturn(this, _Action.call(this, props));

        _this.input = input.state ? input : createPointer(getActualEvent(input));
        return _this;
    }

    Track.prototype.start = function start() {
        _Action.prototype.start.call(this);
        this.inputOrigin = {};
    };

    Track.prototype.onUpdate = function onUpdate() {
        var _this2 = this;

        this.inputOffset = (0, _calc.offset)(this.inputOrigin, this.input.state);

        (0, _utils.each)(this.values, function (value, key) {
            if (_this2.inputOffset.hasOwnProperty(key)) {
                if (value.direct) {
                    value.current = _this2.input.state[key];
                } else {
                    value.current = value.origin + _this2.inputOffset[key];
                }
            }
        });
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
}(_Action3.default);

exports.default = Track;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBLElBQU0sb0JBQW9CLFVBQUMsQ0FBRDtXQUFRO0FBQzlCLFdBQUcsRUFBRSxLQUFGO0FBQ0gsV0FBRyxFQUFFLEtBQUY7O0NBRm1COztBQUsxQixJQUFNLG9CQUFvQjtRQUFHO1dBQXNCO0FBQy9DLFdBQUcsZUFBZSxDQUFmLEVBQWtCLE9BQWxCO0FBQ0gsV0FBRyxlQUFlLENBQWYsRUFBa0IsT0FBbEI7O0NBRm1COztBQUsxQixJQUFNLGdCQUFnQixVQUFDLENBQUQ7V0FBTyxFQUFFLE9BQUYsR0FDekIsc0JBQVksa0JBQWtCLENBQWxCLENBQVosRUFBa0MsV0FBbEMsRUFBK0MsaUJBQS9DLENBRHlCLEdBRXpCLHNCQUFZLGtCQUFrQixDQUFsQixDQUFaLEVBQWtDLFdBQWxDLEVBQStDLGlCQUEvQyxDQUZ5QjtDQUFQOztBQUl0QixJQUFNLGlCQUFpQixVQUFDLENBQUQ7V0FBTyxFQUFFLGFBQUYsSUFBbUIsQ0FBbkI7Q0FBUDs7SUFFRjs7O0FBQ2pCLGFBRGlCLEtBQ2pCLENBQVksS0FBWixFQUFtQixLQUFuQixFQUEwQjs4QkFEVCxPQUNTOztxREFDdEIsbUJBQU0sS0FBTixHQURzQjs7QUFFdEIsY0FBSyxLQUFMLEdBQWEsTUFBTSxLQUFOLEdBQWMsS0FBZCxHQUFzQixjQUFjLGVBQWUsS0FBZixDQUFkLENBQXRCLENBRlM7O0tBQTFCOztBQURpQixvQkFNakIseUJBQVE7QUFDSiwwQkFBTSxLQUFOLFlBREk7QUFFSixhQUFLLFdBQUwsR0FBbUIsRUFBbkIsQ0FGSTs7O0FBTlMsb0JBV2pCLCtCQUFXOzs7QUFDUCxhQUFLLFdBQUwsR0FBbUIsVUFyQ2xCLE9BcUNrQixDQUFPLEtBQUssV0FBTCxFQUFrQixLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQTVDLENBRE87O0FBR1AsbUJBdENDLEtBc0NELENBQUssS0FBSyxNQUFMLEVBQWEsVUFBQyxLQUFELEVBQVEsR0FBUixFQUFnQjtBQUM5QixnQkFBSSxPQUFLLFdBQUwsQ0FBaUIsY0FBakIsQ0FBZ0MsR0FBaEMsQ0FBSixFQUEwQztBQUN0QyxvQkFBSSxNQUFNLE1BQU4sRUFBYztBQUNkLDBCQUFNLE9BQU4sR0FBZ0IsT0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUFqQixDQUFoQixDQURjO2lCQUFsQixNQUVPO0FBQ0gsMEJBQU0sT0FBTixHQUFnQixNQUFNLE1BQU4sR0FBZSxPQUFLLFdBQUwsQ0FBaUIsR0FBakIsQ0FBZixDQURiO2lCQUZQO2FBREo7U0FEYyxDQUFsQixDQUhPOzs7QUFYTSxvQkF5QmpCLDZDQUFrQjtBQUNkLGVBQU87QUFDSCxpQkFBSyxDQUFMO0FBQ0EsdUJBQVcsQ0FBWDtBQUNBLG9CQUFRLEtBQVI7QUFDQSxvQkFBUSxDQUFSO1NBSkosQ0FEYzs7O1dBekJEIiwiZmlsZSI6IlRyYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgUG9pbnRlciBmcm9tICcuLi9pbnB1dC9Qb2ludGVyJztcbmltcG9ydCB7IG9mZnNldCB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG4vKlxuICAgIFNjcmFwZSB4L3kgY29vcmRpbmF0ZXMgZnJvbSBwcm92aWRlZCBldmVudFxuXG4gICAgQHBhcmFtIFtldmVudF1cbiAgICBAcmV0dXJuIFtvYmplY3RdXG4qL1xuY29uc3QgbW91c2VFdmVudFRvUG9pbnQgPSAoZSkgPT4gKHtcbiAgICB4OiBlLnBhZ2VYLFxuICAgIHk6IGUucGFnZVlcbn0pO1xuXG5jb25zdCB0b3VjaEV2ZW50VG9Qb2ludCA9ICh7IGNoYW5nZWRUb3VjaGVzIH0pID0+ICh7XG4gICAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG59KTtcblxuY29uc3QgY3JlYXRlUG9pbnRlciA9IChlKSA9PiBlLnRvdWNoZXMgP1xuICAgIG5ldyBQb2ludGVyKG1vdXNlRXZlbnRUb1BvaW50KGUpLCAnbW91c2Vtb3ZlJywgbW91c2VFdmVudFRvUG9pbnQpIDpcbiAgICBuZXcgUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwgJ3RvdWNobW92ZScsIHRvdWNoRXZlbnRUb1BvaW50KTtcblxuY29uc3QgZ2V0QWN0dWFsRXZlbnQgPSAoZSkgPT4gZS5vcmlnaW5hbEV2ZW50IHx8IGU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgaW5wdXQpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQuc3RhdGUgPyBpbnB1dCA6IGNyZWF0ZVBvaW50ZXIoZ2V0QWN0dWFsRXZlbnQoaW5wdXQpKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IHt9O1xuICAgIH1cblxuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gb2Zmc2V0KHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuc3RhdGUpO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5pbnB1dC5zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5vcmlnaW4gKyB0aGlzLmlucHV0T2Zmc2V0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbXA6IDEsXG4gICAgICAgICAgICBlc2NhcGVBbXA6IDAsXG4gICAgICAgICAgICBkaXJlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgc21vb3RoOiAwXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19
return exports;
})());

var _Track2 = _interopRequireDefault(_Track);

var _Process = __small$_6;

var _Process2 = _interopRequireDefault(_Process);

var _Input = __small$_7;

var _Input2 = _interopRequireDefault(_Input);

var _attr = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _utils = __small$_14;

exports.default = function (_ref) {
  var element = _ref.element;
  var state = _ref.state;
  return (0, _utils.each)(state, function (value, key) {
    return element.setAttribute(key, value);
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXIvYXR0ci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWU7TUFBRztNQUFTO1NBQVksV0FGOUIsS0FFOEIsQ0FBSyxLQUFMLEVBQVksVUFBQyxLQUFELEVBQVEsR0FBUjtXQUFnQixRQUFRLFlBQVIsQ0FBcUIsR0FBckIsRUFBMEIsS0FBMUI7R0FBaEI7Q0FBcEMiLCJmaWxlIjoiYXR0ci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBlbGVtZW50LCBzdGF0ZSB9KSA9PiBlYWNoKHN0YXRlLCAodmFsdWUsIGtleSkgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSkpOyJdfQ==
return exports;
})());

var _attr2 = _interopRequireDefault(_attr);

var _css = __small$_9;

var _css2 = _interopRequireDefault(_css);

var _svg = __small$_11;

var _svg2 = _interopRequireDefault(_svg);

var _svgPath = __small$_10;

var _svgPath2 = _interopRequireDefault(_svgPath);

var _presetEasing = __small$_12;

var _presetEasing2 = _interopRequireDefault(_presetEasing);

var _calc2 = __small$_13;

var _calc = _interopRequireWildcard(_calc2);

var _utils2 = __small$_14;

var _utils = _interopRequireWildcard(_utils2);

var _selectActor = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;
exports.default = selectActor;

var _Actor = __small$_2;

var _Actor2 = _interopRequireDefault(_Actor);

var _utils = __small$_14;

var _css = __small$_9;

var _css2 = _interopRequireDefault(_css);

var _svg = __small$_11;

var _svg2 = _interopRequireDefault(_svg);

var _svgPath = __small$_10;

var _svgPath2 = _interopRequireDefault(_svgPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SAVE_PROP = '__pm_actor_';

var detectRenderer = function (element) {
    // If HTMLElement load renderCSS
    if (element instanceof HTMLElement || element.tagName === 'svg') {
        return _css2.default;

        // Or SVG
    } else if (element instanceof SVGElement) {
            if (element.tagName === 'path') {
                return _svgPath2.default;
            } else {
                return _svg2.default;
            }
        }
};

function selectActor(selector) {
    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var elements = (0, _utils.selectDom)(selector);

    var actors = elements.map(function (element) {
        var actor = element[SAVE_PROP];

        if (!actor) {
            props.element = element;
            props.onRender = detectRenderer(element);
            actor = element[SAVE_PROP] = new _Actor2.default(props);
        }

        return actor;
    });

    return actors.length > 1 ? actors : actors[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvc2VsZWN0LWFjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkF3QndCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakJ4QixJQUFNLFlBQVksYUFBWjs7QUFFTixJQUFNLGlCQUFpQixVQUFDLE9BQUQsRUFBYTs7QUFFaEMsUUFBSSxtQkFBbUIsV0FBbkIsSUFBa0MsUUFBUSxPQUFSLEtBQW9CLEtBQXBCLEVBQTJCO0FBQzdEOzs7QUFENkQsS0FBakUsTUFJTyxJQUFJLG1CQUFtQixVQUFuQixFQUErQjtBQUN0QyxnQkFBSSxRQUFRLE9BQVIsS0FBb0IsTUFBcEIsRUFBNEI7QUFDNUIseUNBRDRCO2FBQWhDLE1BRU87QUFDSCxxQ0FERzthQUZQO1NBREc7Q0FOWTs7QUFlUixTQUFTLFdBQVQsQ0FBcUIsUUFBckIsRUFBMkM7UUFBWiw4REFBUSxrQkFBSTs7QUFDdEQsUUFBTSxXQUFXLFdBeEJaLFVBd0JZLENBQVUsUUFBVixDQUFYLENBRGdEOztBQUd0RCxRQUFNLFNBQVMsU0FBUyxHQUFULENBQWEsVUFBQyxPQUFELEVBQWE7QUFDckMsWUFBSSxRQUFRLFFBQVEsU0FBUixDQUFSLENBRGlDOztBQUdyQyxZQUFJLENBQUMsS0FBRCxFQUFRO0FBQ1Isa0JBQU0sT0FBTixHQUFnQixPQUFoQixDQURRO0FBRVIsa0JBQU0sUUFBTixHQUFpQixlQUFlLE9BQWYsQ0FBakIsQ0FGUTtBQUdSLG9CQUFRLFFBQVEsU0FBUixJQUFxQixvQkFBVSxLQUFWLENBQXJCLENBSEE7U0FBWjs7QUFNQSxlQUFPLEtBQVAsQ0FUcUM7S0FBYixDQUF0QixDQUhnRDs7QUFldEQsV0FBTyxNQUFDLENBQU8sTUFBUCxHQUFnQixDQUFoQixHQUFxQixNQUF0QixHQUErQixPQUFPLENBQVAsQ0FBL0IsQ0FmK0M7Q0FBM0MiLCJmaWxlIjoic2VsZWN0LWFjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdG9yIGZyb20gJy4uL2FjdG9yL0FjdG9yJztcbmltcG9ydCB7IHNlbGVjdERvbSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmltcG9ydCByZW5kZXJDU1MgZnJvbSAnLi4vcmVuZGVyL2Nzcyc7XG5pbXBvcnQgcmVuZGVyU1ZHIGZyb20gJy4uL3JlbmRlci9zdmcnO1xuaW1wb3J0IHJlbmRlclNWR1BhdGggZnJvbSAnLi4vcmVuZGVyL3N2Zy1wYXRoJztcblxuY29uc3QgU0FWRV9QUk9QID0gJ19fcG1fYWN0b3JfJztcblxuY29uc3QgZGV0ZWN0UmVuZGVyZXIgPSAoZWxlbWVudCkgPT4ge1xuICAgIC8vIElmIEhUTUxFbGVtZW50IGxvYWQgcmVuZGVyQ1NTXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdzdmcnKSB7XG4gICAgICAgIHJldHVybiByZW5kZXJDU1M7XG5cbiAgICAvLyBPciBTVkdcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlclNWR1BhdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyU1ZHO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VsZWN0QWN0b3Ioc2VsZWN0b3IsIHByb3BzID0ge30pIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHNlbGVjdERvbShzZWxlY3Rvcik7XG5cbiAgICBjb25zdCBhY3RvcnMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IGFjdG9yID0gZWxlbWVudFtTQVZFX1BST1BdO1xuXG4gICAgICAgIGlmICghYWN0b3IpIHtcbiAgICAgICAgICAgIHByb3BzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgcHJvcHMub25SZW5kZXIgPSBkZXRlY3RSZW5kZXJlcihlbGVtZW50KTtcbiAgICAgICAgICAgIGFjdG9yID0gZWxlbWVudFtTQVZFX1BST1BdID0gbmV3IEFjdG9yKHByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RvcjtcbiAgICB9KTtcblxuICAgIHJldHVybiAoYWN0b3JzLmxlbmd0aCA+IDEpID8gYWN0b3JzIDogYWN0b3JzWzBdO1xufVxuIl19
return exports;
})());

var _selectActor2 = _interopRequireDefault(_selectActor);

var _timer = __small$_16;

var _timer2 = _interopRequireDefault(_timer);

var _stagger2 = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;
exports.default = stagger;

var _Tween = __small$_3;

var _Tween2 = _interopRequireDefault(_Tween);

var _presetEasing = __small$_12;

var _utils = __small$_14;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_INTERVAL = 100;

function stagger(array, props, callback) {
    var arrayLength = array.length;
    var propsIsInterval = (0, _utils.isNum)(props);
    var interval = propsIsInterval ? props : props.interval || DEFAULT_INTERVAL;
    var prevIndex = -1;

    var staggerTween = new _Tween2.default({
        duration: interval * arrayLength,
        values: {
            i: {
                from: 0,
                to: arrayLength - 1,
                round: true,
                ease: propsIsInterval ? _presetEasing.linear : props.ease || _presetEasing.linear
            }
        },
        onRender: function (_ref) {
            var i = _ref.i;

            var gapIndex = prevIndex + 1;

            for (; gapIndex <= i; gapIndex++) {
                callback(array[gapIndex], gapIndex);
            }

            prevIndex = i;
        },
        onComplete: propsIsInterval ? undefined : props.onComplete
    });

    staggerTween.start();

    return staggerTween;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBTXdCOzs7Ozs7Ozs7Ozs7QUFGeEIsSUFBTSxtQkFBbUIsR0FBbkI7O0FBRVMsU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCLEtBQXhCLEVBQStCLFFBQS9CLEVBQXlDO0FBQ3BELFFBQU0sY0FBYyxNQUFNLE1BQU4sQ0FEZ0M7QUFFcEQsUUFBTSxrQkFBa0IsV0FObkIsTUFNbUIsQ0FBTSxLQUFOLENBQWxCLENBRjhDO0FBR3BELFFBQU0sV0FBVyxrQkFBa0IsS0FBbEIsR0FBMEIsTUFBTSxRQUFOLElBQWtCLGdCQUFsQixDQUhTO0FBSXBELFFBQUksWUFBWSxDQUFDLENBQUQsQ0FKb0M7O0FBTXBELFFBQU0sZUFBZSxvQkFBVTtBQUMzQixrQkFBVSxXQUFXLFdBQVg7QUFDVixnQkFBUTtBQUNKLGVBQUc7QUFDQyxzQkFBTSxDQUFOO0FBQ0Esb0JBQUksY0FBYyxDQUFkO0FBQ0osdUJBQU8sSUFBUDtBQUNBLHNCQUFNLGdDQWxCYixNQWtCYSxHQUEyQixNQUFNLElBQU4sa0JBbEJ4QyxNQWtCd0M7YUFKckM7U0FESjtBQVFBLGtCQUFVLGdCQUFXO2dCQUFSLFdBQVE7O0FBQ2pCLGdCQUFJLFdBQVcsWUFBWSxDQUFaLENBREU7O0FBR2pCLG1CQUFPLFlBQVksQ0FBWixFQUFlLFVBQXRCLEVBQWtDO0FBQzlCLHlCQUFTLE1BQU0sUUFBTixDQUFULEVBQTBCLFFBQTFCLEVBRDhCO2FBQWxDOztBQUlBLHdCQUFZLENBQVosQ0FQaUI7U0FBWDtBQVNWLG9CQUFZLGtCQUFrQixTQUFsQixHQUE4QixNQUFNLFVBQU47S0FuQnpCLENBQWYsQ0FOOEM7O0FBNEJwRCxpQkFBYSxLQUFiLEdBNUJvRDs7QUE4QnBELFdBQU8sWUFBUCxDQTlCb0Q7Q0FBekMiLCJmaWxlIjoic3RhZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VlbiBmcm9tICcuLi9hY3Rpb25zL1R3ZWVuJztcbmltcG9ydCB7IGxpbmVhciB9IGZyb20gJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgaXNOdW0gfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgREVGQVVMVF9JTlRFUlZBTCA9IDEwMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhZ2dlcihhcnJheSwgcHJvcHMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgY29uc3QgcHJvcHNJc0ludGVydmFsID0gaXNOdW0ocHJvcHMpO1xuICAgIGNvbnN0IGludGVydmFsID0gcHJvcHNJc0ludGVydmFsID8gcHJvcHMgOiBwcm9wcy5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMO1xuICAgIGxldCBwcmV2SW5kZXggPSAtMTtcblxuICAgIGNvbnN0IHN0YWdnZXJUd2VlbiA9IG5ldyBUd2Vlbih7XG4gICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIGFycmF5TGVuZ3RoLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiBhcnJheUxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzZTogcHJvcHNJc0ludGVydmFsID8gbGluZWFyIDogcHJvcHMuZWFzZSB8fCBsaW5lYXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25SZW5kZXI6ICh7IGkgfSkgPT4ge1xuICAgICAgICAgICAgbGV0IGdhcEluZGV4ID0gcHJldkluZGV4ICsgMTtcblxuICAgICAgICAgICAgZm9yICg7IGdhcEluZGV4IDw9IGk7IGdhcEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhhcnJheVtnYXBJbmRleF0sIGdhcEluZGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJldkluZGV4ID0gaTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTogcHJvcHNJc0ludGVydmFsID8gdW5kZWZpbmVkIDogcHJvcHMub25Db21wbGV0ZVxuICAgIH0pO1xuXG4gICAgc3RhZ2dlclR3ZWVuLnN0YXJ0KCk7XG5cbiAgICByZXR1cm4gc3RhZ2dlclR3ZWVuO1xufSJdfQ==
return exports;
})());

var _stagger3 = _interopRequireDefault(_stagger2);

var _timeline2 = ((function() {
var exports = {};
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;
exports.default = timeline;

var _Tween = __small$_3;

var _Tween2 = _interopRequireDefault(_Tween);

var _presetEasing = __small$_12;

var _calc = __small$_13;

var _utils = __small$_14;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    @param [array]
        Sequential array of tweens, each item can be a tween or definition obj:

        [
            new Tween(),
            stagger(),
            timeline(),
            {
                tween: new Tween(),
                at: 100,
                offset: "+=100"
            }
        ]
*/
var analyze = function (defs) {
    var timeline = [];
    var currentPlayhead = 0;

    defs.forEach(function (def) {
        var defIsObj = def.tween ? true : false;
        var tween = defIsObj ? def.tween : def;

        currentPlayhead += defIsObj && def.offset ? def.at || (0, _calc.relativeValue)(currentPlayhead, def.offset) : 0;

        var duration = 0;
        (0, _utils.each)(tween.values, function (value) {
            return duration = Math.max(duration, value.duration);
        });

        timeline.push({
            from: currentPlayhead,
            duration: duration,
            fire: tween.seekTime
        });

        currentPlayhead += tween.duration;
    });

    return { totalTime: currentPlayhead, timeline: timeline };
};

var setTweens = function (_ref) {
    var timeline = _ref.timeline;
    var timelineLength = _ref.timelineLength;
    var state = _ref.state;

    var playhead = state.p;

    for (var i = 0; i < timelineLength; i++) {
        var tween = timeline[i];
        var tweenTime = playhead - tween.from;

        if (tweenTime > 0 && tweenTime < tween.duration) {
            tween.fire(tweenTime);
        }
    }
};

function timeline(def) {
    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var _analyze = analyze(def);

    var totalTime = _analyze.totalTime;
    var timeline = _analyze.timeline;

    var timelineProps = _extends({}, props, {
        duration: totalTime,
        ease: _presetEasing.linear,
        values: {
            p: 1
        },
        timeline: timeline,
        timelineLength: timeline.length,
        onRender: setTweens
    });

    return new _Tween2.default(timelineProps);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBMkR3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF2Q3hCLElBQU0sVUFBVSxVQUFDLElBQUQsRUFBVTtBQUN0QixRQUFNLFdBQVcsRUFBWCxDQURnQjtBQUV0QixRQUFJLGtCQUFrQixDQUFsQixDQUZrQjs7QUFJdEIsU0FBSyxPQUFMLENBQWEsVUFBQyxHQUFELEVBQVM7QUFDbEIsWUFBTSxXQUFXLElBQUksS0FBSixHQUFZLElBQVosR0FBbUIsS0FBbkIsQ0FEQztBQUVsQixZQUFNLFFBQVEsV0FBYSxJQUFJLEtBQUosR0FBWSxHQUF6QixDQUZJOztBQUlsQiwyQkFBb0IsUUFBQyxJQUFZLElBQUksTUFBSixHQUM3QixJQUFJLEVBQUosSUFBVSxVQTNCYixjQTJCYSxDQUFjLGVBQWQsRUFBK0IsSUFBSSxNQUFKLENBQXpDLEdBQXVELENBRHZDLENBSkY7O0FBT2xCLFlBQUksV0FBVyxDQUFYLENBUGM7QUFRbEIsbUJBN0JDLEtBNkJELENBQUssTUFBTSxNQUFOLEVBQWMsVUFBQyxLQUFEO21CQUFXLFdBQVcsS0FBSyxHQUFMLENBQVMsUUFBVCxFQUFtQixNQUFNLFFBQU4sQ0FBOUI7U0FBWCxDQUFuQixDQVJrQjs7QUFVbEIsaUJBQVMsSUFBVCxDQUFjO0FBQ1Ysa0JBQU0sZUFBTjtBQUNBLHNCQUFVLFFBQVY7QUFDQSxrQkFBTSxNQUFNLFFBQU47U0FIVixFQVZrQjs7QUFnQmxCLDJCQUFtQixNQUFNLFFBQU4sQ0FoQkQ7S0FBVCxDQUFiLENBSnNCOztBQXVCdEIsV0FBTyxFQUFFLFdBQVcsZUFBWCxFQUE0QixrQkFBOUIsRUFBUCxDQXZCc0I7Q0FBVjs7QUEwQmhCLElBQU0sWUFBWSxnQkFBeUM7UUFBdEMseUJBQXNDO1FBQTVCLHFDQUE0QjtRQUFaLG1CQUFZOztBQUN2RCxRQUFNLFdBQVcsTUFBTSxDQUFOLENBRHNDOztBQUd2RCxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxjQUFKLEVBQW9CLEdBQXBDLEVBQXlDO0FBQ3JDLFlBQU0sUUFBUSxTQUFTLENBQVQsQ0FBUixDQUQrQjtBQUVyQyxZQUFNLFlBQVksV0FBVyxNQUFNLElBQU4sQ0FGUTs7QUFJckMsWUFBSSxZQUFZLENBQVosSUFBaUIsWUFBWSxNQUFNLFFBQU4sRUFBZ0I7QUFDN0Msa0JBQU0sSUFBTixDQUFXLFNBQVgsRUFENkM7U0FBakQ7S0FKSjtDQUhjOztBQWFILFNBQVMsUUFBVCxDQUFrQixHQUFsQixFQUFtQztRQUFaLDhEQUFRLGtCQUFJOzttQkFDZCxRQUFRLEdBQVIsRUFEYzs7UUFDdEMsK0JBRHNDO1FBQzNCLDZCQUQyQjs7QUFHOUMsUUFBTSw2QkFDQztBQUNILGtCQUFVLFNBQVY7QUFDQSw0QkFoRUMsTUFnRUQ7QUFDQSxnQkFBUTtBQUNKLGVBQUcsQ0FBSDtTQURKO0FBR0Esa0JBQVUsUUFBVjtBQUNBLHdCQUFnQixTQUFTLE1BQVQ7QUFDaEIsa0JBQVUsU0FBVjtNQVRFLENBSHdDOztBQWU5QyxXQUFPLG9CQUFVLGFBQVYsQ0FBUCxDQWY4QztDQUFuQyIsImZpbGUiOiJ0aW1lbGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VlbiBmcm9tICcuLi9hY3Rpb25zL1R3ZWVuJztcbmltcG9ydCB7IGxpbmVhciB9IGZyb20gJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgcmVsYXRpdmVWYWx1ZSB9IGZyb20gJy4vY2FsYyc7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICAgICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgIHN0YWdnZXIoKSxcbiAgICAgICAgICAgIHRpbWVsaW5lKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgICAgIGF0OiAxMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuKi9cbmNvbnN0IGFuYWx5emUgPSAoZGVmcykgPT4ge1xuICAgIGNvbnN0IHRpbWVsaW5lID0gW107XG4gICAgbGV0IGN1cnJlbnRQbGF5aGVhZCA9IDA7XG5cbiAgICBkZWZzLmZvckVhY2goKGRlZikgPT4ge1xuICAgICAgICBjb25zdCBkZWZJc09iaiA9IGRlZi50d2VlbiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgY29uc3QgdHdlZW4gPSAoZGVmSXNPYmopID8gZGVmLnR3ZWVuIDogZGVmO1xuXG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCArPSAoKGRlZklzT2JqICYmIGRlZi5vZmZzZXQpID9cbiAgICAgICAgICAgIGRlZi5hdCB8fCByZWxhdGl2ZVZhbHVlKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCkgOiAwKTtcblxuICAgICAgICBsZXQgZHVyYXRpb24gPSAwO1xuICAgICAgICBlYWNoKHR3ZWVuLnZhbHVlcywgKHZhbHVlKSA9PiBkdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCB2YWx1ZS5kdXJhdGlvbikpO1xuXG4gICAgICAgIHRpbWVsaW5lLnB1c2goe1xuICAgICAgICAgICAgZnJvbTogY3VycmVudFBsYXloZWFkLFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZmlyZTogdHdlZW4uc2Vla1RpbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IHR3ZWVuLmR1cmF0aW9uO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgdG90YWxUaW1lOiBjdXJyZW50UGxheWhlYWQsIHRpbWVsaW5lIH07XG59O1xuXG5jb25zdCBzZXRUd2VlbnMgPSAoeyB0aW1lbGluZSwgdGltZWxpbmVMZW5ndGgsIHN0YXRlIH0pID0+IHtcbiAgICBjb25zdCBwbGF5aGVhZCA9IHN0YXRlLnA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdHdlZW4gPSB0aW1lbGluZVtpXTtcbiAgICAgICAgY29uc3QgdHdlZW5UaW1lID0gcGxheWhlYWQgLSB0d2Vlbi5mcm9tO1xuXG4gICAgICAgIGlmICh0d2VlblRpbWUgPiAwICYmIHR3ZWVuVGltZSA8IHR3ZWVuLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0d2Vlbi5maXJlKHR3ZWVuVGltZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lbGluZShkZWYsIHByb3BzID0ge30pIHtcbiAgICBjb25zdCB7IHRvdGFsVGltZSwgdGltZWxpbmUgfSA9IGFuYWx5emUoZGVmKTtcblxuICAgIGNvbnN0IHRpbWVsaW5lUHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBkdXJhdGlvbjogdG90YWxUaW1lLFxuICAgICAgICBlYXNlOiBsaW5lYXIsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcDogMVxuICAgICAgICB9LFxuICAgICAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgICAgIHRpbWVsaW5lTGVuZ3RoOiB0aW1lbGluZS5sZW5ndGgsXG4gICAgICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBUd2Vlbih0aW1lbGluZVByb3BzKTtcbn0iXX0=
return exports;
})());

var _timeline3 = _interopRequireDefault(_timeline2);

var _alpha = __small$_19;

var _alpha2 = _interopRequireDefault(_alpha);

var _angle = __small$_20;

var _angle2 = _interopRequireDefault(_angle);

var _axes = __small$_21;

var _axes2 = _interopRequireDefault(_axes);

var _color = __small$_22;

var _color2 = _interopRequireDefault(_color);

var _complex = __small$_23;

var _complex2 = _interopRequireDefault(_complex);

var _hex = __small$_24;

var _hex2 = _interopRequireDefault(_hex);

var _hsl = __small$_25;

var _hsl2 = _interopRequireDefault(_hsl);

var _positions = __small$_26;

var _positions2 = _interopRequireDefault(_positions);

var _px = __small$_27;

var _px2 = _interopRequireDefault(_px);

var _rgb = __small$_28;

var _rgb2 = _interopRequireDefault(_rgb);

var _scale = __small$_29;

var _scale2 = _interopRequireDefault(_scale);

var _shadow = __small$_30;

var _shadow2 = _interopRequireDefault(_shadow);

var _map = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _calc = __small$_13;

exports.default = function (from, to) {
    var mapLength = from.length;

    return function (value) {
        for (var i = 1; i < mapLength; i++) {
            if (value < from[i] || i === mapLength) {
                return (0, _calc.getValueFromProgress)((0, _calc.restrict)((0, _calc.getProgressFromValue)(value, from[i - 1], from[i]), 0, 1), to[i - 1], to[i]);
            }
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm1lcnMvbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFFZSxVQUFDLElBQUQsRUFBTyxFQUFQLEVBQWM7QUFDekIsUUFBTSxZQUFZLEtBQUssTUFBTCxDQURPOztBQUd6QixXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksU0FBSixFQUFlLEdBQS9CLEVBQW9DO0FBQ2hDLGdCQUFJLFFBQVEsS0FBSyxDQUFMLENBQVIsSUFBbUIsTUFBTSxTQUFOLEVBQWlCO0FBQ3BDLHVCQUFPLFVBUlEscUJBUVIsQ0FBcUIsVUFSUyxTQVFULENBQVMsVUFSNUMscUJBUTRDLENBQXFCLEtBQXJCLEVBQTRCLEtBQUssSUFBSSxDQUFKLENBQWpDLEVBQXlDLEtBQUssQ0FBTCxDQUF6QyxDQUFULEVBQTRELENBQTVELEVBQStELENBQS9ELENBQXJCLEVBQXdGLEdBQUcsSUFBSSxDQUFKLENBQTNGLEVBQW1HLEdBQUcsQ0FBSCxDQUFuRyxDQUFQLENBRG9DO2FBQXhDO1NBREo7S0FERyxDQUhrQjtDQUFkIiwiZmlsZSI6Im1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcywgcmVzdHJpY3QgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmV4cG9ydCBkZWZhdWx0IChmcm9tLCB0bykgPT4ge1xuICAgIGNvbnN0IG1hcExlbmd0aCA9IGZyb20ubGVuZ3RoO1xuXG4gICAgcmV0dXJuICh2YWx1ZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBmcm9tW2ldIHx8IGkgPT09IG1hcExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhyZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZSh2YWx1ZSwgZnJvbVtpIC0gMV0sIGZyb21baV0pLCAwLCAxKSwgdG9baSAtIDFdLCB0b1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTsiXX0=
return exports;
})());

var _map2 = _interopRequireDefault(_map);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Process
// Actor
var actor = exports.actor = function (props) {
  return new _Actor2.default(props);
};

// Input

// Actions

var tween = exports.tween = function (props) {
  return new _Tween2.default(props);
};
var physics = exports.physics = function (props) {
  return new _Physics2.default(props);
};
var track = exports.track = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(_Track2.default, [null].concat(args)))();
};
var input = exports.input = function () {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return new (Function.prototype.bind.apply(_Input2.default, [null].concat(args)))();
};
var process = exports.process = function () {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return new (Function.prototype.bind.apply(_Process2.default, [null].concat(args)))();
};

// Renderers
exports.renderAttr = _attr2.default;
exports.renderCSS = _css2.default;
exports.renderSVG = _svg2.default;
exports.renderSVGPath = _svgPath2.default;

// Easing

exports.easing = _presetEasing2.default;

// Utils

exports.calc = _calc;
exports.utils = _utils;
exports.$ = _selectActor2.default;
exports.setDilation = _timer2.default;
exports.stagger = _stagger3.default;
exports.timeline = _timeline3.default;

// Value types

exports.alphaType = _alpha2.default;
exports.angleType = _angle2.default;
exports.axesType = _axes2.default;
exports.colorType = _color2.default;
exports.complexType = _complex2.default;
exports.hexType = _hex2.default;
exports.hslType = _hsl2.default;
exports.positionsType = _positions2.default;
exports.pxType = _px2.default;
exports.rgbType = _rgb2.default;
exports.scaleType = _scale2.default;
exports.shadowType = _shadow2.default;

// Transformers

exports.createMapTransform = _map2.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjTyxJQUFNLHdCQUFRLFVBQUMsS0FBRDtTQUFXLG9CQUFVLEtBQVY7Q0FBWDs7Ozs7O0FBQ2QsSUFBTSx3QkFBUSxVQUFDLEtBQUQ7U0FBVyxvQkFBVSxLQUFWO0NBQVg7QUFDZCxJQUFNLDRCQUFVLFVBQUMsS0FBRDtTQUFXLHNCQUFZLEtBQVo7Q0FBWDtBQUNoQixJQUFNLHdCQUFRO29DQUFJOzs7OzJFQUFzQjtDQUExQjtBQUNkLElBQU0sd0JBQVE7cUNBQUk7Ozs7MkVBQXNCO0NBQTFCO0FBQ2QsSUFBTSw0QkFBVTtxQ0FBSTs7Ozs2RUFBd0I7Q0FBNUI7OztRQUdoQjtRQUNBO1FBQ0E7UUFDQTs7OztRQUdBOzs7O1FBR0s7UUFDQTtRQUNMO1FBQ0E7UUFDQTtRQUNBOzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7O1FBR0EiLCJmaWxlIjoicG9wbW90aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWN0b3JcbmltcG9ydCBBY3RvciBmcm9tICcuL2FjdG9yL0FjdG9yJztcblxuLy8gQWN0aW9uc1xuaW1wb3J0IFR3ZWVuIGZyb20gJy4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgUGh5c2ljcyBmcm9tICcuL2FjdGlvbnMvUGh5c2ljcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9hY3Rpb25zL1RyYWNrJztcblxuLy8gUHJvY2Vzc1xuaW1wb3J0IFByb2Nlc3MgZnJvbSAnLi9wcm9jZXNzL1Byb2Nlc3MnO1xuXG4vLyBJbnB1dFxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQvSW5wdXQnO1xuXG5leHBvcnQgY29uc3QgYWN0b3IgPSAocHJvcHMpID0+IG5ldyBBY3Rvcihwcm9wcyk7XG5leHBvcnQgY29uc3QgdHdlZW4gPSAocHJvcHMpID0+IG5ldyBUd2Vlbihwcm9wcyk7XG5leHBvcnQgY29uc3QgcGh5c2ljcyA9IChwcm9wcykgPT4gbmV3IFBoeXNpY3MocHJvcHMpO1xuZXhwb3J0IGNvbnN0IHRyYWNrID0gKC4uLmFyZ3MpID0+IG5ldyBUcmFjayguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCBpbnB1dCA9ICguLi5hcmdzKSA9PiBuZXcgSW5wdXQoLi4uYXJncyk7XG5leHBvcnQgY29uc3QgcHJvY2VzcyA9ICguLi5hcmdzKSA9PiBuZXcgUHJvY2VzcyguLi5hcmdzKTtcblxuLy8gUmVuZGVyZXJzXG5leHBvcnQgcmVuZGVyQXR0ciBmcm9tICcuL3JlbmRlci9hdHRyJztcbmV4cG9ydCByZW5kZXJDU1MgZnJvbSAnLi9yZW5kZXIvY3NzJztcbmV4cG9ydCByZW5kZXJTVkcgZnJvbSAnLi9yZW5kZXIvc3ZnJztcbmV4cG9ydCByZW5kZXJTVkdQYXRoIGZyb20gJy4vcmVuZGVyL3N2Zy1wYXRoJztcblxuLy8gRWFzaW5nXG5leHBvcnQgZWFzaW5nIGZyb20gJy4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5cbi8vIFV0aWxzXG5leHBvcnQgKiBhcyBjYWxjIGZyb20gJy4vaW5jL2NhbGMnO1xuZXhwb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9pbmMvdXRpbHMnO1xuZXhwb3J0ICQgZnJvbSAnLi9pbmMvc2VsZWN0LWFjdG9yJztcbmV4cG9ydCBzZXREaWxhdGlvbiBmcm9tICcuL3Byb2Nlc3MvdGltZXInO1xuZXhwb3J0IHN0YWdnZXIgZnJvbSAnLi9pbmMvc3RhZ2dlcic7XG5leHBvcnQgdGltZWxpbmUgZnJvbSAnLi9pbmMvdGltZWxpbmUnO1xuXG4vLyBWYWx1ZSB0eXBlc1xuZXhwb3J0IGFscGhhVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2FscGhhJztcbmV4cG9ydCBhbmdsZVR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9hbmdsZSc7XG5leHBvcnQgYXhlc1R5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9heGVzJztcbmV4cG9ydCBjb2xvclR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9jb2xvcic7XG5leHBvcnQgY29tcGxleFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmV4cG9ydCBoZXhUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvaGV4JztcbmV4cG9ydCBoc2xUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvaHNsJztcbmV4cG9ydCBwb3NpdGlvbnNUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJztcbmV4cG9ydCBweFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9weCc7XG5leHBvcnQgcmdiVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3JnYic7XG5leHBvcnQgc2NhbGVUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuZXhwb3J0IHNoYWRvd1R5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9zaGFkb3cnO1xuXG4vLyBUcmFuc2Zvcm1lcnNcbmV4cG9ydCBjcmVhdGVNYXBUcmFuc2Zvcm0gZnJvbSAnLi90cmFuc2Zvcm1lcnMvbWFwJzsiXX0=
return exports;
})());

var popmotion = _interopRequireWildcard(_popmotion);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var UIref = window.motion;

popmotion.noConflict = function () {
    window.motion = UIref;
};

window.motion = window.popmotion = popmotion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2FkL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBQVk7Ozs7QUFFWixJQUFNLFFBQVEsT0FBTyxNQUFQOztBQUVkLFVBQVUsVUFBVixHQUF1QixZQUFZO0FBQy9CLFdBQU8sTUFBUCxHQUFnQixLQUFoQixDQUQrQjtDQUFaOztBQUl2QixPQUFPLE1BQVAsR0FBZ0IsT0FBTyxTQUFQLEdBQW1CLFNBQW5CIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBvcG1vdGlvbiBmcm9tICcuLi9wb3Btb3Rpb24nO1xuXG5jb25zdCBVSXJlZiA9IHdpbmRvdy5tb3Rpb247XG5cbnBvcG1vdGlvbi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5tb3Rpb24gPSBVSXJlZjtcbn07XG5cbndpbmRvdy5tb3Rpb24gPSB3aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uOyJdfQ==
return exports;
})();