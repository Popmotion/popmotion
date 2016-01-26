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