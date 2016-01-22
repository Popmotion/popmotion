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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBUyxJQUFULEdBQXVCOzs7c0NBQU47O0tBQU07O0FBQ25CLG1DQUFNLFNBQU4sQ0FBZ0IsSUFBaEIsRUFBcUIsSUFBckIsK0JBQTBCLGFBQVMsS0FBbkMsRUFEbUI7O0FBR25CLFFBQUksS0FBSyxNQUFMLElBQWUsS0FBSyxRQUFMLEVBQWU7QUFDOUIsYUFBSyxLQUFMLEdBRDhCO0tBQWxDO0NBSEo7O0FBUUEsSUFBTSxxQkFBcUIsaUJBQXJCO0FBQ04sSUFBTSxtQkFBbUIsT0FBbkI7QUFDTixJQUFNLHNCQUF1QixPQUFPLFdBQVAsS0FBdUIsV0FBdkIsSUFBc0MsWUFBWSxHQUFaOzs7Ozs7OztBQVFuRSxJQUFNLFVBQVU7V0FBWSxPQUFPLFNBQVAsQ0FBaUIsUUFBakIsQ0FBMEIsSUFBMUIsQ0FBK0IsUUFBL0IsRUFBeUMsS0FBekMsQ0FBK0MsQ0FBL0MsRUFBa0QsQ0FBQyxDQUFEO0NBQTlEOzs7Ozs7OztBQVFULElBQU0sb0NBQWMsVUFBQyxNQUFEO1dBQVksT0FBTyxPQUFQLENBQWUsa0JBQWYsRUFBbUMsZ0JBQW5DLEVBQXFELFdBQXJEO0NBQVo7Ozs7Ozs7OztBQVNwQixJQUFNLHNDQUFlLFlBQTZCO1FBQTVCLGdFQUFVLGlCQUFrQjtRQUFmLDhEQUFRLGtCQUFPOztBQUNyRCxVQUFNLElBQU4sR0FBYSxJQUFiLENBRHFEO0FBRXJELFVBQU0sUUFBTixHQUFpQixXQUFXLENBQVgsQ0FGb0M7O0FBSXJELFdBQU8sS0FBUCxDQUpxRDtDQUE3Qjs7QUFPckIsSUFBTSw0Q0FBa0IsVUFBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixTQUFoQixFQUEyQixJQUEzQixFQUFvQztBQUMvRCxRQUFJLFdBQVcsRUFBWCxDQUQyRDs7QUFHL0QsVUFBTSxPQUFOLENBQWMsVUFBQyxJQUFELEVBQVU7QUFDcEIsWUFBSSxPQUFPLGNBQVAsQ0FBc0IsR0FBdEIsQ0FB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QWtCLFVBQUMsS0FBRDtXQUFXLEtBQUMsSUFBUyxNQUFNLE9BQU4sSUFBaUIsTUFBTSxPQUFOLENBQWMsR0FBZCxJQUFxQixDQUFyQixHQUEwQixJQUFyRCxHQUE0RCxLQUE1RDtDQUFYOzs7Ozs7OztBQVF4QixJQUFNLDhCQUFXLFVBQUMsR0FBRDtXQUFTLE9BQU8sR0FBUCxLQUFlLFFBQWY7Q0FBVDs7Ozs7Ozs7OztBQVVqQixJQUFNLG9EQUFzQixVQUFDLEtBQUQ7V0FBVyxTQUFTLEtBQVQsSUFBa0IsTUFBTSxLQUFOLENBQVksTUFBWixDQUFsQixHQUF3QyxDQUFDLEtBQUQsQ0FBeEM7Q0FBWDs7Ozs7Ozs7OztBQVU1QixJQUFNLG9EQUFzQixVQUFDLEtBQUQ7V0FBVyxTQUFTLEtBQVQsSUFBa0IsTUFBTSxLQUFOLENBQVksR0FBWixDQUFsQixHQUFxQyxDQUFDLEtBQUQsQ0FBckM7Q0FBWDs7Ozs7Ozs7OztBQVU1QixJQUFNLDBDQUFpQixVQUFDLEtBQUQsRUFBVztBQUNyQyxRQUFNLFdBQVcsTUFBTSxLQUFOLENBQVksbUJBQVosQ0FBWCxDQUQrQjs7QUFHckMsV0FBTztBQUNILGVBQU8sV0FBVyxTQUFTLENBQVQsQ0FBWCxDQUFQO0FBQ0EsY0FBTyxTQUFTLENBQVQsQ0FBUDtLQUZKLENBSHFDO0NBQVg7Ozs7Ozs7OztBQWdCdkIsSUFBTSxnQ0FBWSxVQUFDLEdBQUQsRUFBd0I7UUFBbEIsa0VBQVksaUJBQU07O0FBQzdDLHlCQUFZLElBQU0sVUFBbEIsQ0FENkM7QUFFN0MsV0FBTyxLQUFLLEtBQUwsQ0FBVyxNQUFNLFNBQU4sQ0FBWCxHQUE4QixTQUE5QixDQUZzQztDQUF4QiIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHB1c2goLi4uYXJncykge1xuICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwodGhpcywgLi4uYXJncyk7XG5cbiAgICBpZiAodGhpcy5sZW5ndGggPj0gdGhpcy5fbWF4U2l6ZSkge1xuICAgICAgICB0aGlzLnNoaWZ0KCk7XG4gICAgfVxufVxuXG5jb25zdCBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbmNvbnN0IFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xuY29uc3QgSEFTX1BFUkZPUk1BTkNFX05PVyA9ICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdyk7XG5cbi8qXG4gICAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiovXG5jb25zdCB2YXJUeXBlID0gdmFyaWFibGUgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG5cbi8qXG4gICAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtzdHJpbmddXG4qL1xuZXhwb3J0IGNvbnN0IGNhbWVsVG9EYXNoID0gKHN0cmluZykgPT4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xuXG4vKlxuICAgIENyZWF0ZSBhbiBhdXRvLWN1bGxpbmcgYnVmZmVyIGFycmF5XG5cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEBwYXJhbSBbaW50XVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVCdWZmZXIgPSAobWF4U2l6ZSA9IDMsIGFycmF5ID0gW10pID0+IHtcbiAgICBhcnJheS5wdXNoID0gcHVzaDtcbiAgICBhcnJheS5fbWF4U2l6ZSA9IG1heFNpemUgfHwgMDtcblxuICAgIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURlbGltaXRlZCA9ICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApID0+IHtcbiAgICBsZXQgY29tYmluZWQgPSAnJztcblxuICAgIHRlcm1zLmZvckVhY2goKHRlcm0pID0+IHtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb21iaW5lZCArPSB2YWx1ZXNba2V5XSArIGRlbGltaXRlcjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBmdW5jdGlvbiBzdHJpbmdcblxuICAgICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG5leHBvcnQgY29uc3QgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSAodmFsdWUsIHByZWZpeCkgPT4gYCR7cHJlZml4fSgke3ZhbHVlfSlgO1xuXG4vKlxuICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgXG4gICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbmV4cG9ydCBjb25zdCBjdXJyZW50VGltZSA9ICgpID0+IEhBU19QRVJGT1JNQU5DRV9OT1cgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4vKlxuICAgIEl0ZXJhdGUgb3ZlciBhbiBvYmplY3QgYW5kIGZpcmUgYSBjYWxsYmFjayBmb3IgZXZlcnkgaXRlbSBpbiBpdFxuXG4gICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gaXRlcmF0ZSBvdmVyXG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIGZpcmVcbiovXG5leHBvcnQgY29uc3QgZWFjaCA9IChvYmplY3QsIGNhbGxiYWNrKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IG9iamVjdCA/IE9iamVjdC5rZXlzKG9iamVjdCkgOiBbXTtcbiAgICBjb25zdCBudW1LZXlzID0ga2V5cy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUtleXM7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBjb25zdCBwcm9wID0gb2JqZWN0W2tleV07XG5cbiAgICAgICAgY2FsbGJhY2socHJvcCwga2V5LCBvYmplY3QpO1xuICAgIH1cbn1cblxuLypcbiAgICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gICAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICAgIHsgUmVkOiAyNTUuLi4gfVxuKi9cbmV4cG9ydCBjb25zdCBnZXRDb2xvclZhbHVlcyA9ICh2YWx1ZSwgY29sb3JUZXJtcykgPT4ge1xuICAgIGNvbnN0IGNvbG9yVmFsdWVzID0ge307XG4gICAgY29uc3QgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2YWx1ZSkpO1xuXG4gICAgY29sb3JUZXJtcy5mb3JFYWNoKCh0ZXJtLCBpKSA9PiBjb2xvclRlcm1zW3Rlcm1dID0gKGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yc1tpXSA6IDEpO1xuXG4gICAgcmV0dXJuIGNvbG9yVmFsdWVzO1xufVxuXG4vKlxuICAgIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSAodmFsdWUpID0+IHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcblxuLypcbiAgICBDaGVjayBpZiB0d28gb2JqZWN0cyBoYXZlIGNoYW5nZWQgZnJvbSBlYWNoIG90aGVyXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4qL1xuZXhwb3J0IGNvbnN0IGhhc0NoYW5nZWQgPSAoYSwgYikgPT4ge1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBlYWNoKGEsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmIChoYXNQcm9wZXJ0eShiLCBrZXkpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IGJba2V5XSkge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjaGFuZ2VkO1xufTtcblxuLypcbiAgICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xuZXhwb3J0IGNvbnN0IGhhc1Byb3BlcnR5ID0gKG9iamVjdCwgcHJvcGVydHlOYW1lKSA9PiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKGFycikgPT4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xuZXhwb3J0IGNvbnN0IGlzRnVuYyA9IChvYmopID0+IHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJztcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xuZXhwb3J0IGNvbnN0IGlzTnVtID0gKG51bSkgPT4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG5leHBvcnQgY29uc3QgaXNPYmogPSAob2JqKSA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcblxuLypcbiAgICBJcyB1dGlscyBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnQ/XG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IElmIHV0aWxzIGxvb2tzIGxpa2UgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50XG4qL1xuZXhwb3J0IGNvbnN0IGlzUmVsYXRpdmVWYWx1ZSA9ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YgJiYgdmFsdWUuaW5kZXhPZignPScpID4gMCkgPyB0cnVlIDogZmFsc2U7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IChzdHIpID0+IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xuXG4vKlxuICAgIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICAgIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcblxuLypcbiAgICBTcGxpdCBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyBiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzcGxpdFNwYWNlRGVsaW1pdGVkID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgnICcpIDogW3ZhbHVlXTtcblxuLypcbiAgICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICAgIFxuICAgICAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgICAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG5leHBvcnQgY29uc3Qgc3BsaXRWYWx1ZVVuaXQgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBzcGxpdFZhbCA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3BsaXRWYWxbMV0pLFxuICAgICAgICB1bml0OiAgc3BsaXRWYWxbMl1cbiAgICB9O1xufTtcblxuLypcbiAgICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcmV0dXJuIFtudW1iZXJdXG4qL1xuZXhwb3J0IGNvbnN0IHRvRGVjaW1hbCA9IChudW0sIHByZWNpc2lvbiA9IDIpID0+IHtcbiAgICBwcmVjaXNpb24gPSAxMCAqKiBwcmVjaXNpb247XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG4iXX0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvY2FsYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBUUEsSUFBTSxhQUFhO0FBQ2YsT0FBRyxDQUFIO0FBQ0EsT0FBRyxDQUFIO0FBQ0EsT0FBRyxDQUFIO0NBSEU7O0FBTU4sSUFBTSxhQUFhLFVBQUMsQ0FBRCxFQUFJLENBQUo7V0FBVSxLQUFLLEdBQUwsQ0FBUyxJQUFJLENBQUo7Q0FBbkI7Ozs7Ozs7Ozs7OztBQVlaLElBQU0sd0JBQVEsVUFBQyxDQUFEO1FBQUksMERBQUk7V0FBZSxpQkFBaUIsS0FBSyxLQUFMLENBQVcsRUFBRSxDQUFGLEdBQU0sRUFBRSxDQUFGLEVBQUssRUFBRSxDQUFGLEdBQU0sRUFBRSxDQUFGLENBQTdDO0NBQXZCOzs7Ozs7OztBQVFkLElBQU0sOENBQW1CLFVBQUMsT0FBRDtXQUFhLFVBQVUsS0FBSyxFQUFMLEdBQVUsR0FBcEI7Q0FBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQnpCLElBQU0sMEJBQVMsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFPLFFBQVA7V0FBb0IsSUFBSyxDQUFDLElBQUksQ0FBSixDQUFELEdBQVUsUUFBVjtDQUF6Qjs7Ozs7Ozs7Ozs7QUFXZixJQUFNLDhCQUFXLFVBQUMsQ0FBRCxFQUF1QjtRQUFuQiwwREFBSSwwQkFBZTs7O0FBRTNDLFFBQUksV0FoRUosTUFnRUksQ0FBTSxDQUFOLENBQUosRUFBYztBQUNWLGVBQU8sV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFQOzs7QUFEVSxLQUFkLE1BSU87QUFDSCxnQkFBTSxTQUFTLFdBQVcsRUFBRSxDQUFGLEVBQUssRUFBRSxDQUFGLENBQXpCLENBREg7QUFFSCxnQkFBTSxTQUFTLFdBQVcsRUFBRSxDQUFGLEVBQUssRUFBRSxDQUFGLENBQXpCLENBRkg7QUFHSCxnQkFBTSxTQUFTLFdBdkVuQixNQXVFb0IsQ0FBTSxFQUFFLENBQUYsQ0FBUCxHQUFlLFdBQVcsRUFBRSxDQUFGLEVBQUssRUFBRSxDQUFGLENB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LENBQVMsS0FBSyxHQUFMLENBQVMsS0FBVCxFQUFnQixHQUFoQixDQUFULEVBQStCLEdBQS9CO0NBQXJCOzs7Ozs7Ozs7O0FBVWpCLElBQU0sMEJBQVMsVUFBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixRQUFyQjtRQUErQixrRUFBWTtXQUFNLFdBbE9uRSxVQWtPbUUsQ0FBVSxXQUFZLFlBQVksV0FBVyxRQUFYLENBQVosR0FBbUMsS0FBSyxHQUFMLENBQVMsU0FBVCxFQUFvQixRQUFwQixDQUFuQztDQUF2RTs7Ozs7Ozs7QUFRZixJQUFNLHdDQUFnQixVQUFDLEdBQUQsRUFBTSxhQUFOO1dBQXdCLFdBNU9qRCxNQTRPa0QsQ0FBTSxHQUFOLENBQUQsR0FBZSxPQUFPLE9BQU8sYUFBUCxDQUFQLEdBQStCLENBQTlDO0NBQXhCOzs7Ozs7OztBQVF0QixJQUFNLDBDQUFpQixVQUFDLFFBQUQsRUFBVyxhQUFYO1dBQTZCLFlBQVksT0FBTyxhQUFQLENBQVo7Q0FBN0I7Ozs7Ozs7OztBQVN2QixJQUFNLHNDQUFlLFVBQUMsUUFBRCxFQUFXLEtBQVgsRUFBcUI7QUFDN0MsUUFBTSxVQUFVLEtBQUssUUFBUSxDQUFSLENBQUwsQ0FENkI7QUFFN0MsUUFBTSxTQUFTLElBQUssSUFBSSxLQUFKLENBRnlCO0FBRzdDLFFBQU0sbUJBQW1CLEtBQUssR0FBTCxDQUFTLFdBQVcsTUFBWCxFQUFtQixDQUE1QixDQUFuQixDQUh1Qzs7QUFLN0MsV0FBTyxLQUFLLEtBQUwsQ0FBVyxtQkFBbUIsT0FBbkIsQ0FBWCxHQUF5QyxPQUF6QyxDQUxzQztDQUFyQiIsImZpbGUiOiJjYWxjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBlYWNoLFxuICAgIGhhc1Byb3BlcnR5LFxuICAgIGlzTnVtLFxuICAgIHNwbGl0VmFsdWVVbml0LFxuICAgIHRvRGVjaW1hbFxufSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgWkVST19QT0lOVCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgejogMFxufTtcblxuY29uc3QgZGlzdGFuY2UxRCA9IChhLCBiKSA9PiBNYXRoLmFicyhhIC0gYik7XG5cbi8qXG4gICAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgICBcbiAgICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgICBhcmUgYXQgMCwwLCB0aGVuIHJldHVybiB0aGUgYW5nbGUgdXNpbmcgLmFuZ2xlRnJvbUNlbnRlcigpXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBhbmdsZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG5cbi8qXG4gICAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xuZXhwb3J0IGNvbnN0IGRlZ3JlZXNUb1JhZGlhbnMgPSAoZGVncmVlcykgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG5cbi8qXG4gICAgRGlsYXRlXG4gICAgXG4gICAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICAgIFxuICAgIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICAgIFxuICAgIGEgLS0tLS0tLS0tIGJcbiAgICBcbiAgICB0b1xuICAgIFxuICAgIGEgLS0tLSBiXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG5leHBvcnQgY29uc3QgZGlsYXRlID0gKGEsIGIsIGRpbGF0aW9uKSA9PiBhICsgKChiIC0gYSkgKiBkaWxhdGlvbik7XG5cbi8qXG4gICAgRGlzdGFuY2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgICBcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IGRpc3RhbmNlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiB7XG4gICAgLy8gMUQgZGltZW5zaW9uc1xuICAgIGlmIChpc051bShhKSkge1xuICAgICAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgICAgIGNvbnN0IHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgICAgICBjb25zdCB6RGVsdGEgPSAoaXNOdW0oYS56KSkgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgoeERlbHRhICoqIDIpICsgKHlEZWx0YSAqKiAyKSArICh6RGVsdGEgKiogMikpO1xuICAgIH1cbn07XG4gXG4vKlxuICAgIEh5cG90ZW51c2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuKi9cbmV4cG9ydCBjb25zdCBoeXBvdGVudXNlID0gKGEsIGIpID0+IE1hdGguc3FydCgoYSAqIGEpICsgKGIgKiBiKSk7XG5cbi8qXG4gICAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IChwcm9ncmVzcywgZnJvbSwgdG8pID0+ICgtIHByb2dyZXNzICogZnJvbSkgKyAocHJvZ3Jlc3MgKiB0bykgKyBmcm9tO1xuXG4vKlxuICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbmV4cG9ydCBjb25zdCBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9ICh2YWx1ZSwgZnJvbSwgdG8pID0+ICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG5cbi8qXG4gICAgT2Zmc2V0IGJldHdlZW4gdHdvIG9iamVjdHMgb2YgbnVtYmVyc1xuXG4gICAgSWYgcHJvcGVydHkgaXMgZm91bmQgaW4gYiBub3QgcHJlc2VudCBpbiBhLCBpdCB3aWxsIHJldHVybiBgMGAgZm9yIHRoYXQgcHJvcC5cbiAgICBcbiAgICBAcGFyYW0gW1BvaW50XTogRmlyc3Qgb2JqZWN0XG4gICAgQHBhcmFtIFtQb2ludF06IFNlY29uZCBvYmplY3RcbiAgICBAcmV0dXJuIFtPZmZzZXRdOiBEaXN0YW5jZSBtZXRyaWNzIGJldHdlZW4gdHdvIHBvaW50c1xuKi9cbmV4cG9ydCBjb25zdCBvZmZzZXQgPSAoYSwgYikgPT4ge1xuICAgIGNvbnN0IG9mZnNldCA9IHt9O1xuXG4gICAgZWFjaChiLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBvZmZzZXRba2V5XSA9IGhhc1Byb3BlcnR5KGEsIGtleSkgPyB2YWx1ZSAtIGFba2V5XSA6IDA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLypcbiAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xuZXhwb3J0IGNvbnN0IHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpID0+IHtcbiAgICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICAgICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbmV4cG9ydCBjb25zdCByYWRpYW5zVG9EZWdyZWVzID0gKHJhZGlhbnMpID0+IHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuXG4vKlxuICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4qL1xuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IChtaW4gPSAwLCBtYXggPSAxKSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG5cbi8qXG4gICAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gICAgXG4gICAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICAgIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiovXG5leHBvcnQgY29uc3QgcmVsYXRpdmVWYWx1ZSA9IChjdXJyZW50LCByZWxhdGl2ZSkgPT4ge1xuICAgIGxldCBuZXdWYWx1ZSA9IGN1cnJlbnQ7XG4gICAgY29uc3QgZXF1YXRpb24gPSByZWxhdGl2ZS5zcGxpdCgnPScpO1xuICAgIGNvbnN0IG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG4gICAgbGV0IHsgdW5pdCwgdmFsdWUgfSA9IHNwbGl0VmFsdWVVbml0KGVxdWF0aW9uWzFdKTtcblxuICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgbmV3VmFsdWUgKz0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICBuZXdWYWx1ZSAtPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlICo9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgbmV3VmFsdWUgLz0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gICAgaWYgKHVuaXQpIHtcbiAgICAgICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3VmFsdWU7XG59O1xuXG4vKlxuICAgIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gICAgXG4gICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8ga2VlcCB3aXRoaW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGxpbWl0ZWQgd2l0aGluIGdpdmVuIHJhbmdlXG4qL1xuZXhwb3J0IGNvbnN0IHJlc3RyaWN0ID0gKHZhbHVlLCBtaW4sIG1heCkgPT4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG5cbi8qXG4gICAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gICAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xuZXhwb3J0IGNvbnN0IHNtb290aCA9IChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uLCBzbW9vdGhpbmcgPSAwKSA9PiB0b0RlY2ltYWwob2xkVmFsdWUgKyAoZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSkpO1xuXG4vKlxuICAgIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJGcmFtZSA9ICh4cHMsIGZyYW1lRHVyYXRpb24pID0+IChpc051bSh4cHMpKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xuXG4vKlxuICAgIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbmV4cG9ydCBjb25zdCBzdGVwUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MsIHN0ZXBzKSA9PiB7XG4gICAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgICBjb25zdCB0YXJnZXQgPSAxIC0gKDEgLyBzdGVwcyk7XG4gICAgY29uc3QgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59OyJdfQ==
return exports;
})();
var __small$_15 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;
exports.setDilation = setDilation;
var hasPerformanceNow = typeof performance !== 'undefined' && performance.now;
var currentTime = function () {
    return hasPerformanceNow ? performance.now() : new Date().getTime();
};

var MAX_ELAPSED = 33;

var base = 0;
var current = 0;
var elapsed = 16.7;
var dilation = 1;
var lostTime = 0;

exports.default = {
    update: function (framestamp) {
        if (base === 0) {
            current = base = framestamp;
        }

        var prev = current;
        var lossAdjusted = framestamp - lostTime;
        var nonDilatedElapsed = Math.min(lossAdjusted - prev, MAX_ELAPSED);
        elapsed = nonDilatedElapsed * dilation;
        current += elapsed;
        lostTime += nonDilatedElapsed - elapsed;
    },

    start: function () {
        return current = currentTime();
    },

    getElapsed: function () {
        return elapsed;
    }
};
function setDilation(newDilation) {
    dilation = newDilation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQThCZ0I7QUE5QmhCLElBQU0sb0JBQXFCLE9BQU8sV0FBUCxLQUF1QixXQUF2QixJQUFzQyxZQUFZLEdBQVo7QUFDakUsSUFBTSxjQUFjO1dBQU0sb0JBQW9CLFlBQVksR0FBWixFQUFwQixHQUF3QyxJQUFJLElBQUosR0FBVyxPQUFYLEVBQXhDO0NBQU47O0FBRXBCLElBQU0sY0FBYyxFQUFkOztBQUVOLElBQUksT0FBTyxDQUFQO0FBQ0osSUFBSSxVQUFVLENBQVY7QUFDSixJQUFJLFVBQVUsSUFBVjtBQUNKLElBQUksV0FBVyxDQUFYO0FBQ0osSUFBSSxXQUFXLENBQVg7O2tCQUVXO0FBQ1gsWUFBUSxVQUFDLFVBQUQsRUFBZ0I7QUFDcEIsWUFBSSxTQUFTLENBQVQsRUFBWTtBQUNaLHNCQUFVLE9BQU8sVUFBUCxDQURFO1NBQWhCOztBQUlBLFlBQU0sT0FBTyxPQUFQLENBTGM7QUFNcEIsWUFBTSxlQUFlLGFBQWEsUUFBYixDQU5EO0FBT3BCLFlBQU0sb0JBQW9CLEtBQUssR0FBTCxDQUFTLGVBQWUsSUFBZixFQUFxQixXQUE5QixDQUFwQixDQVBjO0FBUXBCLGtCQUFVLG9CQUFvQixRQUFwQixDQVJVO0FBU3BCLG1CQUFXLE9BQVgsQ0FUb0I7QUFVcEIsb0JBQVksb0JBQW9CLE9BQXBCLENBVlE7S0FBaEI7O0FBYVIsV0FBTztlQUFNLFVBQVUsYUFBVjtLQUFOOztBQUVQLGdCQUFZO2VBQU07S0FBTjs7QUFHVCxTQUFTLFdBQVQsQ0FBcUIsV0FBckIsRUFBa0M7QUFDckMsZUFBVyxXQUFYLENBRHFDO0NBQWxDIiwiZmlsZSI6InRpbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGFzUGVyZm9ybWFuY2VOb3cgPSAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cpO1xuY29uc3QgY3VycmVudFRpbWUgPSAoKSA9PiBoYXNQZXJmb3JtYW5jZU5vdyA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbmNvbnN0IE1BWF9FTEFQU0VEID0gMzM7XG5cbmxldCBiYXNlID0gMDtcbmxldCBjdXJyZW50ID0gMDtcbmxldCBlbGFwc2VkID0gMTYuNztcbmxldCBkaWxhdGlvbiA9IDE7XG5sZXQgbG9zdFRpbWUgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdXBkYXRlOiAoZnJhbWVzdGFtcCkgPT4ge1xuICAgICAgICBpZiAoYmFzZSA9PT0gMCkge1xuICAgICAgICAgICAgY3VycmVudCA9IGJhc2UgPSBmcmFtZXN0YW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldiA9IGN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGxvc3NBZGp1c3RlZCA9IGZyYW1lc3RhbXAgLSBsb3N0VGltZTtcbiAgICAgICAgY29uc3Qgbm9uRGlsYXRlZEVsYXBzZWQgPSBNYXRoLm1pbihsb3NzQWRqdXN0ZWQgLSBwcmV2LCBNQVhfRUxBUFNFRCk7XG4gICAgICAgIGVsYXBzZWQgPSBub25EaWxhdGVkRWxhcHNlZCAqIGRpbGF0aW9uO1xuICAgICAgICBjdXJyZW50ICs9IGVsYXBzZWQ7XG4gICAgICAgIGxvc3RUaW1lICs9IG5vbkRpbGF0ZWRFbGFwc2VkIC0gZWxhcHNlZDtcbiAgICB9LFxuXG4gICAgc3RhcnQ6ICgpID0+IGN1cnJlbnQgPSBjdXJyZW50VGltZSgpLFxuXG4gICAgZ2V0RWxhcHNlZDogKCkgPT4gZWxhcHNlZFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldERpbGF0aW9uKG5ld0RpbGF0aW9uKSB7XG4gICAgZGlsYXRpb24gPSBuZXdEaWxhdGlvbjtcbn0iXX0=
return exports;
})();
var __small$_18 = (function() {
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
var __small$_30 = (function() {
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
var __small$_33 = (function() {
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
var __small$_16 = (function() {
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

var _timer = __small$_15;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLElBQU0sU0FBUyxPQUFRLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBTyxxQkFBUCxHQUFnQyxJQUFsRSxHQUF5RSxLQUF6RTs7QUFFZixJQUFJLGdCQUFKOztBQUVBLElBQUksTUFBSixFQUFZO0FBQ1IsV0FBTyxPQUFPLHFCQUFQLENBREM7Q0FBWixNQUdPOzs7Ozs7Ozs7Ozs7Ozs7QUFlSCxZQUFJLFdBQVcsQ0FBWDs7QUFFSixlQUFPLFVBQUMsUUFBRCxFQUFjO0FBQ2pCLGdCQUFNLGNBQWMsSUFBSSxJQUFKLEdBQVcsT0FBWCxFQUFkLENBRFc7QUFFakIsZ0JBQU0sYUFBYSxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTSxjQUFjLFFBQWQsQ0FBTixDQUF6QixDQUZXOztBQUlqQix1QkFBVyxjQUFjLFVBQWQsQ0FKTTs7QUFNakIsdUJBQVc7dUJBQU0sU0FBUyxRQUFUO2FBQU4sRUFBMEIsVUFBckMsRUFOaUI7U0FBZDtTQWpCSjtDQUhQOztrQkE4QmUiLCJmaWxlIjoidGljay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxuY29uc3QgaGFzUkFGID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpID8gdHJ1ZSA6IGZhbHNlO1xuXG5sZXQgdGljaztcblxuaWYgKGhhc1JBRikge1xuICAgIHRpY2sgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG59IGVsc2Uge1xuICAgIC8qXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgICBcbiAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuXG4gICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgXG4gICAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgIFxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgICBcbiAgICAgICAgTUlUIGxpY2Vuc2VcbiAgICAqL1xuICAgIGxldCBsYXN0VGltZSA9IDA7XG5cbiAgICB0aWNrID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjayhsYXN0VGltZSksIHRpbWVUb0NhbGwpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdGljazsiXX0=
return exports;
})());

var _tick2 = _interopRequireDefault(_tick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var processOrder = [{ step: 'onFrameStart' }, { step: 'onUpdate' }, { step: 'willRender', decideRender: true }, { step: 'preRender', isRender: true }, { step: 'onRender', isRender: true }, { step: 'postRender', isRender: true }, { step: 'onFrameEnd' }, { step: 'onCleanup' }];
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

function purge() {
    var queueLength = deactivateQueue.length;

    while (queueLength--) {
        var idToDelete = deactivateQueue[queueLength];
        var activeIdIndex = runningIds.indexOf(idToDelete);

        // If process is active, deactivate
        if (activeIdIndex > -1) {
            runningIds.splice(activeIdIndex, 1);

            updateCount(false, runningProcesses[idToDelete].isLazy);

            delete runningProcesses[idToDelete];
        }
    }

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

    purge();

    var numRunning = runningCount;

    for (var i = 0; i < numProcessSteps; i++) {
        method = processOrder[i];
        methodName = method.step;
        isRenderStep = method.isRender ? true : false;

        for (var _i = 0; _i < numRunning; _i++) {
            process = runningProcesses[runningIds[_i]];

            if (process && process[methodName] && (!isRenderStep || isRenderStep && process._render === true)) {
                result = process[methodName].call(process, process, frameStamp, elapsed);
            }

            if (method.decideRender) {
                process._render = process[methodName] && result === false ? false : true;
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

// Stop loop
function stop() {
    isRunning = false;
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
    var queueIndex = deactivateQueue.indexOf(id);
    var isQueued = queueIndex > -1;
    var isRunning = runningIds.indexOf(id) > -1;

    // Remove from deactivateQueue if queued
    if (isQueued) {
        deactivateQueue.splice(queueIndex, 1);
    }

    // Add to running processes array if not there
    if (!isRunning) {
        runningIds.push(id);
        runningProcesses[id] = process;

        updateCount(true, process.isLazy);
        start();
    }
}

/*
    [int]: Process ID to deactivate
*/
function deactivate(id) {
    if (deactivateQueue.indexOf(id) === -1) {
        deactivateQueue.push(id);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBdUlnQjtRQVFBO1FBdUJBOzs7Ozs7Ozs7Ozs7QUFuS2hCLElBQU0sZUFBZSxDQUNqQixFQUFFLE1BQU0sY0FBTixFQURlLEVBRWpCLEVBQUUsTUFBTSxVQUFOLEVBRmUsRUFHakIsRUFBRSxNQUFNLFlBQU4sRUFBb0IsY0FBYyxJQUFkLEVBSEwsRUFJakIsRUFBRSxNQUFNLFdBQU4sRUFBbUIsVUFBVSxJQUFWLEVBSkosRUFLakIsRUFBRSxNQUFNLFVBQU4sRUFBa0IsVUFBVSxJQUFWLEVBTEgsRUFNakIsRUFBRSxNQUFNLFlBQU4sRUFBb0IsVUFBVSxJQUFWLEVBTkwsRUFPakIsRUFBRSxNQUFNLFlBQU4sRUFQZSxFQVFqQixFQUFFLE1BQU0sV0FBTixFQVJlLENBQWY7QUFVTixJQUFNLGtCQUFrQixhQUFhLE1BQWI7OztBQUd4QixJQUFJLG1CQUFtQixDQUFuQjs7O0FBR0osSUFBSSxlQUFlLENBQWY7OztBQUdKLElBQUksY0FBYyxDQUFkOzs7QUFHSixJQUFJLGFBQWEsRUFBYjs7O0FBR0osSUFBSSxtQkFBbUIsRUFBbkI7OztBQUdKLElBQUksa0JBQWtCLEVBQWxCOzs7QUFHSixJQUFJLFlBQVksS0FBWjs7Ozs7Ozs7QUFRSixTQUFTLFdBQVQsQ0FBcUIsR0FBckIsRUFBMEIsTUFBMUIsRUFBa0M7QUFDOUIsUUFBTSxTQUFTLE1BQU0sQ0FBTixHQUFVLENBQUMsQ0FBRCxDQURLOztBQUc5QixvQkFBZ0IsTUFBaEIsQ0FIOEI7O0FBSzlCLFFBQUksQ0FBQyxNQUFELEVBQVM7QUFDVCx1QkFBZSxNQUFmLENBRFM7S0FBYjtDQUxKOztBQVVBLFNBQVMsS0FBVCxHQUFpQjtBQUNiLFFBQUksY0FBYyxnQkFBZ0IsTUFBaEIsQ0FETDs7QUFHYixXQUFPLGFBQVAsRUFBc0I7QUFDbEIsWUFBTSxhQUFhLGdCQUFnQixXQUFoQixDQUFiLENBRFk7QUFFbEIsWUFBTSxnQkFBZ0IsV0FBVyxPQUFYLENBQW1CLFVBQW5CLENBQWhCOzs7QUFGWSxZQUtkLGdCQUFnQixDQUFDLENBQUQsRUFBSTtBQUNwQix1QkFBVyxNQUFYLENBQWtCLGFBQWxCLEVBQWlDLENBQWpDLEVBRG9COztBQUdwQix3QkFBWSxLQUFaLEVBQW1CLGlCQUFpQixVQUFqQixFQUE2QixNQUE3QixDQUFuQixDQUhvQjs7QUFLcEIsbUJBQU8saUJBQWlCLFVBQWpCLENBQVAsQ0FMb0I7U0FBeEI7S0FMSjs7QUFjQSxzQkFBa0IsRUFBbEIsQ0FqQmE7Q0FBakI7Ozs7OztBQXdCQSxTQUFTLE9BQVQsQ0FBaUIsVUFBakIsRUFBNkIsT0FBN0IsRUFBc0M7QUFDbEMsUUFBSSxTQUFTLEVBQVQsQ0FEOEI7QUFFbEMsUUFBSSxhQUFhLEVBQWIsQ0FGOEI7QUFHbEMsUUFBSSxlQUFlLEtBQWYsQ0FIOEI7QUFJbEMsUUFBSSxtQkFBSixDQUprQztBQUtsQyxRQUFJLGtCQUFKLENBTGtDOztBQU9sQyxZQVBrQzs7QUFTbEMsUUFBTSxhQUFhLFlBQWIsQ0FUNEI7O0FBV2xDLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLGVBQUosRUFBcUIsR0FBckMsRUFBMEM7QUFDdEMsaUJBQVMsYUFBYSxDQUFiLENBQVQsQ0FEc0M7QUFFdEMscUJBQWEsT0FBTyxJQUFQLENBRnlCO0FBR3RDLHVCQUFlLE9BQU8sUUFBUCxHQUFrQixJQUFsQixHQUF5QixLQUF6QixDQUh1Qjs7QUFLdEMsYUFBSyxJQUFJLEtBQUksQ0FBSixFQUFPLEtBQUksVUFBSixFQUFnQixJQUFoQyxFQUFxQztBQUNqQyxzQkFBVSxpQkFBaUIsV0FBVyxFQUFYLENBQWpCLENBQVYsQ0FEaUM7O0FBR2pDLGdCQUFJLFdBQVcsUUFBUSxVQUFSLENBQVgsS0FBbUMsQ0FBQyxZQUFELElBQWtCLGdCQUFnQixRQUFRLE9BQVIsS0FBb0IsSUFBcEIsQ0FBckUsRUFBaUc7QUFDakcseUJBQVMsUUFBUSxVQUFSLEVBQW9CLElBQXBCLENBQXlCLE9BQXpCLEVBQWtDLE9BQWxDLEVBQTJDLFVBQTNDLEVBQXVELE9BQXZELENBQVQsQ0FEaUc7YUFBckc7O0FBSUEsZ0JBQUksT0FBTyxZQUFQLEVBQXFCO0FBQ3JCLHdCQUFRLE9BQVIsR0FBa0IsT0FBQyxDQUFRLFVBQVIsS0FBdUIsV0FBVyxLQUFYLEdBQW9CLEtBQTVDLEdBQW9ELElBQXBELENBREc7YUFBekI7U0FQSjtLQUxKOztBQWtCQSxXQUFPLGNBQWMsSUFBZCxHQUFxQixLQUFyQixDQTdCMkI7Q0FBdEM7OztBQWlDQSxTQUFTLEtBQVQsR0FBaUI7QUFDYix3QkFBSyxVQUFDLFVBQUQsRUFBZ0I7QUFDakIsWUFBSSxTQUFKLEVBQWU7QUFDWCxvQkFEVztTQUFmOztBQUlBLHdCQUFNLE1BQU4sQ0FBYSxVQUFiLEVBTGlCO0FBTWpCLG9CQUFZLFFBQVEsVUFBUixFQUFvQixnQkFBTSxVQUFOLEVBQXBCLENBQVosQ0FOaUI7S0FBaEIsQ0FBTCxDQURhO0NBQWpCOzs7QUFZQSxTQUFTLEtBQVQsR0FBaUI7QUFDYixRQUFJLENBQUMsU0FBRCxFQUFZO0FBQ1osd0JBQU0sS0FBTixHQURZO0FBRVosb0JBQVksSUFBWixDQUZZO0FBR1osZ0JBSFk7S0FBaEI7Q0FESjs7O0FBU0EsU0FBUyxJQUFULEdBQWdCO0FBQ1osZ0JBQVksS0FBWixDQURZO0NBQWhCOzs7QUFLTyxTQUFTLFlBQVQsR0FBd0I7QUFDM0IsV0FBTyxrQkFBUCxDQUQyQjtDQUF4Qjs7Ozs7O0FBUUEsU0FBUyxRQUFULENBQWtCLEVBQWxCLEVBQXNCLE9BQXRCLEVBQStCO0FBQ2xDLFFBQU0sYUFBYSxnQkFBZ0IsT0FBaEIsQ0FBd0IsRUFBeEIsQ0FBYixDQUQ0QjtBQUVsQyxRQUFNLFdBQVksYUFBYSxDQUFDLENBQUQsQ0FGRztBQUdsQyxRQUFNLFlBQWEsV0FBVyxPQUFYLENBQW1CLEVBQW5CLElBQXlCLENBQUMsQ0FBRDs7O0FBSFYsUUFNOUIsUUFBSixFQUFjO0FBQ1Ysd0JBQWdCLE1BQWhCLENBQXVCLFVBQXZCLEVBQW1DLENBQW5DLEVBRFU7S0FBZDs7O0FBTmtDLFFBVzlCLENBQUMsU0FBRCxFQUFZO0FBQ1osbUJBQVcsSUFBWCxDQUFnQixFQUFoQixFQURZO0FBRVoseUJBQWlCLEVBQWpCLElBQXVCLE9BQXZCLENBRlk7O0FBSVosb0JBQVksSUFBWixFQUFrQixRQUFRLE1BQVIsQ0FBbEIsQ0FKWTtBQUtaLGdCQUxZO0tBQWhCO0NBWEc7Ozs7O0FBdUJBLFNBQVMsVUFBVCxDQUFvQixFQUFwQixFQUF3QjtBQUMzQixRQUFJLGdCQUFnQixPQUFoQixDQUF3QixFQUF4QixNQUFnQyxDQUFDLENBQUQsRUFBSTtBQUNwQyx3QkFBZ0IsSUFBaEIsQ0FBcUIsRUFBckIsRUFEb0M7S0FBeEM7Q0FERyIsImZpbGUiOiJsb29wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRpbWVyIGZyb20gJy4vdGltZXInO1xuaW1wb3J0IHRpY2sgZnJvbSAnLi90aWNrJztcblxuY29uc3QgcHJvY2Vzc09yZGVyID0gW1xuICAgIHsgc3RlcDogJ29uRnJhbWVTdGFydCcgfSxcbiAgICB7IHN0ZXA6ICdvblVwZGF0ZScgfSxcbiAgICB7IHN0ZXA6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBzdGVwOiAncHJlUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IHN0ZXA6ICdvblJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBzdGVwOiAncG9zdFJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBzdGVwOiAnb25GcmFtZUVuZCcgfSxcbiAgICB7IHN0ZXA6ICdvbkNsZWFudXAnIH1cbl07XG5jb25zdCBudW1Qcm9jZXNzU3RlcHMgPSBwcm9jZXNzT3JkZXIubGVuZ3RoO1xuXG4vLyBbaW50XTogUHJvY2VzcyBJRCwgaW5jcmVtZW50ZWQgZm9yIGVhY2ggbmV3IHByb2Nlc3NcbmxldCBjdXJyZW50UHJvY2Vzc0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBydW5uaW5nIHByb2Nlc3Nlc1xubGV0IHJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyBub24tYmFja2dyb3VuZCBwcm9jZXNzZXNcbmxldCBhY3RpdmVDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIGFjdGl2ZSBwcm9jZXNzIElEc1xubGV0IHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBhY3RpdmUgcHJvY2Vzc2VzXG5sZXQgcnVubmluZ1Byb2Nlc3NlcyA9IHt9O1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGRlYWN0aXZhdGlvblxubGV0IGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbmxldCBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLypcbiAgICBVcGRhdGUgcnVubmluZ1xuXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgdG8gYWRkXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgaWYgbGF6eVxuKi9cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50KGFkZCwgaXNMYXp5KSB7XG4gICAgY29uc3QgbW9kaWZ5ID0gYWRkID8gMSA6IC0xO1xuXG4gICAgcnVubmluZ0NvdW50ICs9IG1vZGlmeTtcblxuICAgIGlmICghaXNMYXp5KSB7XG4gICAgICAgIGFjdGl2ZUNvdW50ICs9IG1vZGlmeTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHB1cmdlKCkge1xuICAgIGxldCBxdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAocXVldWVMZW5ndGgtLSkge1xuICAgICAgICBjb25zdCBpZFRvRGVsZXRlID0gZGVhY3RpdmF0ZVF1ZXVlW3F1ZXVlTGVuZ3RoXTtcbiAgICAgICAgY29uc3QgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZFRvRGVsZXRlKTtcblxuICAgICAgICAvLyBJZiBwcm9jZXNzIGlzIGFjdGl2ZSwgZGVhY3RpdmF0ZVxuICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBydW5uaW5nSWRzLnNwbGljZShhY3RpdmVJZEluZGV4LCAxKTtcblxuICAgICAgICAgICAgdXBkYXRlQ291bnQoZmFsc2UsIHJ1bm5pbmdQcm9jZXNzZXNbaWRUb0RlbGV0ZV0uaXNMYXp5KTtcblxuICAgICAgICAgICAgZGVsZXRlIHJ1bm5pbmdQcm9jZXNzZXNbaWRUb0RlbGV0ZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWFjdGl2YXRlUXVldWUgPSBbXTtcbn1cblxuLypcbiAgICBbdGltZXN0YW1wXTogRnJhbWUgdGltZXN0YW1wXG4gICAgW2ludF06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuKi9cbmZ1bmN0aW9uIGZpcmVBbGwoZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIGxldCBtZXRob2QgPSB7fTtcbiAgICBsZXQgbWV0aG9kTmFtZSA9ICcnO1xuICAgIGxldCBpc1JlbmRlclN0ZXAgPSBmYWxzZTtcbiAgICBsZXQgcHJvY2VzcztcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgcHVyZ2UoKTtcblxuICAgIGNvbnN0IG51bVJ1bm5pbmcgPSBydW5uaW5nQ291bnQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVByb2Nlc3NTdGVwczsgaSsrKSB7XG4gICAgICAgIG1ldGhvZCA9IHByb2Nlc3NPcmRlcltpXTtcbiAgICAgICAgbWV0aG9kTmFtZSA9IG1ldGhvZC5zdGVwO1xuICAgICAgICBpc1JlbmRlclN0ZXAgPSBtZXRob2QuaXNSZW5kZXIgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1SdW5uaW5nOyBpKyspIHtcbiAgICAgICAgICAgIHByb2Nlc3MgPSBydW5uaW5nUHJvY2Vzc2VzW3J1bm5pbmdJZHNbaV1dO1xuXG4gICAgICAgICAgICBpZiAocHJvY2VzcyAmJiBwcm9jZXNzW21ldGhvZE5hbWVdICYmICghaXNSZW5kZXJTdGVwIHx8IChpc1JlbmRlclN0ZXAgJiYgcHJvY2Vzcy5fcmVuZGVyID09PSB0cnVlKSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwcm9jZXNzW21ldGhvZE5hbWVdLmNhbGwocHJvY2VzcywgcHJvY2VzcywgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QuZGVjaWRlUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5fcmVuZGVyID0gKHByb2Nlc3NbbWV0aG9kTmFtZV0gJiYgcmVzdWx0ID09PSBmYWxzZSkgPyBmYWxzZSA6IHRydWU7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGl2ZUNvdW50ID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG4vLyBGdW5jdGlvbiB0byBmaXJlIGV2ZXJ5IGZyYW1lXG5mdW5jdGlvbiBmcmFtZSgpIHtcbiAgICB0aWNrKChmcmFtZVN0YW1wKSA9PiB7XG4gICAgICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIGZyYW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lci51cGRhdGUoZnJhbWVTdGFtcCk7XG4gICAgICAgIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVTdGFtcCwgdGltZXIuZ2V0RWxhcHNlZCgpKTtcbiAgICB9KTtcbn1cblxuLy8gU3RhcnQgbG9vcFxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgdGltZXIuc3RhcnQoKTtcbiAgICAgICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgZnJhbWUoKTtcbiAgICB9XG59XG5cbi8vIFN0b3AgbG9vcFxuZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbn1cblxuLy8gRXhwb3J0c1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2Nlc3NJZCgpIHtcbiAgICByZXR1cm4gY3VycmVudFByb2Nlc3NJZCsrO1xufVxuXG4vKlxuICAgIFtpbnRdOiBQcm9jZXNzIElEIHRvIGFjdGl2YXRlXG4gICAgW1Byb2Nlc3NdOiBQcm9jZXNzIHRvIGFjdGl2YXRlXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlKGlkLCBwcm9jZXNzKSB7XG4gICAgY29uc3QgcXVldWVJbmRleCA9IGRlYWN0aXZhdGVRdWV1ZS5pbmRleE9mKGlkKTtcbiAgICBjb25zdCBpc1F1ZXVlZCA9IChxdWV1ZUluZGV4ID4gLTEpO1xuICAgIGNvbnN0IGlzUnVubmluZyA9IChydW5uaW5nSWRzLmluZGV4T2YoaWQpID4gLTEpO1xuXG4gICAgLy8gUmVtb3ZlIGZyb20gZGVhY3RpdmF0ZVF1ZXVlIGlmIHF1ZXVlZFxuICAgIGlmIChpc1F1ZXVlZCkge1xuICAgICAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKHF1ZXVlSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8vIEFkZCB0byBydW5uaW5nIHByb2Nlc3NlcyBhcnJheSBpZiBub3QgdGhlcmVcbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBydW5uaW5nSWRzLnB1c2goaWQpO1xuICAgICAgICBydW5uaW5nUHJvY2Vzc2VzW2lkXSA9IHByb2Nlc3M7XG5cbiAgICAgICAgdXBkYXRlQ291bnQodHJ1ZSwgcHJvY2Vzcy5pc0xhenkpO1xuICAgICAgICBzdGFydCgpO1xuICAgIH1cbn1cblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBkZWFjdGl2YXRlXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGUoaWQpIHtcbiAgICBpZiAoZGVhY3RpdmF0ZVF1ZXVlLmluZGV4T2YoaWQpID09PSAtMSkge1xuICAgICAgICBkZWFjdGl2YXRlUXVldWUucHVzaChpZCk7XG4gICAgfVxufSJdfQ==
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
        return this;
    };

    Process.prototype.stop = function stop() {
        this.isActive = false;
        loop.deactivate(this.id);
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

    return Process;
}();

exports.default = Process;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFDWTs7Ozs7O0lBRVM7Ozs7OztBQUtqQixhQUxpQixPQUtqQixDQUFZLEtBQVosRUFBbUIsTUFBbkIsRUFBMkI7OEJBTFYsU0FLVTs7QUFDdkIsYUFBSyxHQUFMLENBQVMsS0FBSyxlQUFMLEVBQVQsRUFEdUI7QUFFdkIsYUFBSyxHQUFMLENBQVMsS0FBVCxFQUZ1Qjs7QUFJdkIsYUFBSyxNQUFMLEdBQWMsVUFBVSxLQUFWLENBSlM7QUFLdkIsYUFBSyxFQUFMLEdBQVUsS0FBSyxZQUFMLEVBQVYsQ0FMdUI7QUFNdkIsYUFBSyxRQUFMLEdBQWdCLEtBQWhCLENBTnVCO0tBQTNCOztBQUxpQixzQkFjakIsbUJBQUksT0FBTzs7O0FBQ1AsbUJBbEJDLEtBa0JELENBQUssS0FBTCxFQUFZLFVBQUMsS0FBRCxFQUFRLEdBQVI7bUJBQWdCLE1BQUssR0FBTCxJQUFZLEtBQVo7U0FBaEIsQ0FBWixDQURPO0FBRVAsZUFBTyxJQUFQLENBRk87OztBQWRNLHNCQW1CakIseUJBQVE7QUFDSixhQUFLLFFBQUwsR0FBZ0IsSUFBaEIsQ0FESTtBQUVKLGFBQUssUUFBTCxDQUFjLEtBQUssRUFBTCxFQUFTLElBQXZCLEVBRkk7QUFHSixlQUFPLElBQVAsQ0FISTs7O0FBbkJTLHNCQXlCakIsdUJBQU87QUFDSCxhQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FERztBQUVILGFBQUssVUFBTCxDQUFnQixLQUFLLEVBQUwsQ0FBaEIsQ0FGRztBQUdILGVBQU8sSUFBUCxDQUhHOzs7QUF6QlUsc0JBK0JqQix1QkFBTzs7O0FBQ0gsYUFBSyxTQUFMLEdBQWlCLFlBQU07QUFDbkIsbUJBQUssSUFBTCxHQURtQjtBQUVuQixtQkFBSyxTQUFMLEdBQWlCLFNBQWpCLENBRm1CO1NBQU4sQ0FEZDs7QUFNSCxhQUFLLEtBQUwsR0FORzs7QUFRSCxlQUFPLElBQVAsQ0FSRzs7Ozs7Ozs7QUEvQlUsc0JBK0NqQiw2Q0FBa0I7QUFDZCxlQUFPLEVBQVAsQ0FEYzs7O1dBL0NEOzs7O0FBa0RwQiIsImZpbGUiOiJQcm9jZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgKiBhcyBsb29wIGZyb20gJy4vbG9vcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2Nlc3Mge1xuICAgIC8qXG4gICAgICAgIFtvYmplY3RdOiBQcm9wZXJ0aWVzXG4gICAgICAgIFtib29sZWFuXSAob3B0aW9uYWwpOiBJcyBQcm9jZXNzIGxhenk/XG4gICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgaXNMYXp5KSB7XG4gICAgICAgIHRoaXMuc2V0KHRoaXMuZ2V0RGVmYXVsdFByb3BzKCkpO1xuICAgICAgICB0aGlzLnNldChwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5pc0xhenkgPSBpc0xhenkgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMuaWQgPSBsb29wLmdldFByb2Nlc3NJZCgpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0KHByb3BzKSB7XG4gICAgICAgIGVhY2gocHJvcHMsICh2YWx1ZSwga2V5KSA9PiB0aGlzW2tleV0gPSB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uY2UoKSB7XG4gICAgICAgIHRoaXMub25DbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN0YXJ0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn07XG4iXX0=
return exports;
})();
var __small$_3 = (function() {
var exports = {};
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Process2 = __small$_16;

var _Process3 = _interopRequireDefault(_Process2);

var _utils = __small$_14;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_PROP = 'current';

var Action = function (_Process) {
    _inherits(Action, _Process);

    function Action() {
        _classCallCheck(this, Action);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        // Initalise renderer

        var _this = _possibleConstructorReturn(this, _Process.call.apply(_Process, [this].concat(args)));

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

        // Merge `value` properties with existing
        if (values) {
            (function () {
                var currentValues = _this2.values;
                var defaultValue = _this2.getDefaultValue();
                var defaultValueProp = _this2.getDefaultValueProp();

                // Inherit values from props
                (0, _utils.each)(defaultValue, function (value, key) {
                    if (propsToSet[key] !== undefined) {
                        defaultValue[key] = propsToSet[key];
                    }
                });

                // Overwrite per-value props
                (0, _utils.each)(values, function (value, key) {
                    var existingValue = currentValues[key];
                    var newValue = _extends({}, defaultValue);

                    if ((0, _utils.isObj)(value)) {
                        newValue = _extends({}, newValue, value);
                    } else {
                        newValue[defaultValueProp] = value;
                    }

                    currentValues[key] = existingValue ? _extends({}, existingValue, newValue) : newValue;
                });
            })();
        }

        return this;
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

    /*
        # Extend this Action with new properties
        ## Returns new instance of this Action's `prototype` with existing and new properties
         @param [object] (optional)
        @return [Action]
    */

    Action.prototype.extend = function extend(props) {
        return new this.constructor(_extends({}, this, { props: props }), this.getDefaultValueProp());
    };

    return Action;
}(_Process3.default);

exports.default = Action;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTSxlQUFlLFNBQWY7O0lBRWU7OztBQUNqQixhQURpQixNQUNqQixHQUFxQjs4QkFESixRQUNJOzswQ0FBTjs7U0FBTTs7OztxREFDakIsNENBQVMsS0FBVCxHQURpQjs7QUFJakIsWUFBSSxNQUFLLFFBQUwsSUFBaUIsTUFBSyxRQUFMLENBQWMsSUFBZCxFQUFvQjtBQUNyQyxrQkFBSyxRQUFMLENBQWMsSUFBZCxRQURxQztTQUF6QztxQkFKaUI7S0FBckI7Ozs7Ozs7OztBQURpQixxQkFpQmpCLG1CQUFJLE9BQU87OztZQUNDLFNBQTBCLE1BQTFCLE9BREQ7O1lBQ1ksc0NBQWUsbUJBRDNCOztBQUdQLDJCQUFNLEdBQU4sWUFBVSxVQUFWLEVBSE87O0FBS1AsYUFBSyxNQUFMLEdBQWMsS0FBSyxNQUFMLElBQWUsRUFBZjs7O0FBTFAsWUFRSCxNQUFKLEVBQVk7O0FBQ1Isb0JBQU0sZ0JBQWdCLE9BQUssTUFBTDtBQUN0QixvQkFBTSxlQUFlLE9BQUssZUFBTCxFQUFmO0FBQ04sb0JBQU0sbUJBQW1CLE9BQUssbUJBQUwsRUFBbkI7OztBQUdOLDJCQW5DSCxLQW1DRyxDQUFLLFlBQUwsRUFBbUIsVUFBQyxLQUFELEVBQVEsR0FBUixFQUFnQjtBQUMvQix3QkFBSSxXQUFXLEdBQVgsTUFBb0IsU0FBcEIsRUFBK0I7QUFDL0IscUNBQWEsR0FBYixJQUFvQixXQUFXLEdBQVgsQ0FBcEIsQ0FEK0I7cUJBQW5DO2lCQURlLENBQW5COzs7QUFPQSwyQkExQ0gsS0EwQ0csQ0FBSyxNQUFMLEVBQWEsVUFBQyxLQUFELEVBQVEsR0FBUixFQUFnQjtBQUN6Qix3QkFBTSxnQkFBZ0IsY0FBYyxHQUFkLENBQWhCLENBRG1CO0FBRXpCLHdCQUFJLHdCQUFnQixhQUFoQixDQUZxQjs7QUFJekIsd0JBQUksV0E5Q0wsTUE4Q0ssQ0FBTSxLQUFOLENBQUosRUFBa0I7QUFDZCxnREFBZ0IsVUFBYSxNQUE3QixDQURjO3FCQUFsQixNQUVPO0FBQ0gsaUNBQVMsZ0JBQVQsSUFBNkIsS0FBN0IsQ0FERztxQkFGUDs7QUFNQSxrQ0FBYyxHQUFkLElBQXFCLDZCQUFxQixlQUFrQixTQUF2QyxHQUFvRCxRQUFwRCxDQVZJO2lCQUFoQixDQUFiO2lCQWJRO1NBQVo7O0FBMkJBLGVBQU8sSUFBUCxDQW5DTzs7O0FBakJNLHFCQXVEakIseUJBQVE7QUFDSiwyQkFBTSxJQUFOLFlBREk7QUFFSixlQUFPLElBQVAsQ0FGSTs7O0FBdkRTLHFCQTREakIsMkJBQVM7QUFDTCwyQkFBTSxLQUFOLFlBREs7QUFFTCxlQUFPLElBQVAsQ0FGSzs7Ozs7Ozs7QUE1RFEscUJBc0VqQiw2Q0FBa0I7QUFDZCxlQUFPO0FBQ0gscUJBQVMsQ0FBVDtBQUNBLHNCQUFVLENBQVY7U0FGSixDQURjOzs7Ozs7Ozs7QUF0RUQscUJBbUZqQixxREFBc0I7QUFDbEIsZUFBTyxZQUFQLENBRGtCOzs7Ozs7Ozs7O0FBbkZMLHFCQThGakIseUJBQU8sT0FBTztBQUNWLGVBQU8sSUFBSSxLQUFLLFdBQUwsY0FBc0IsUUFBTSxlQUFoQyxFQUF5QyxLQUFLLG1CQUFMLEVBQXpDLENBQVAsQ0FEVTs7O1dBOUZHOzs7O0FBaUdwQiIsImZpbGUiOiJBY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvY2VzcyBmcm9tICcuLi9wcm9jZXNzL1Byb2Nlc3MnO1xuaW1wb3J0IHsgZWFjaCwgaXNPYmogfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBERUZBVUxUX1BST1AgPSAnY3VycmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIFByb2Nlc3Mge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAgICAgLy8gSW5pdGFsaXNlIHJlbmRlcmVyIFxuICAgICAgICBpZiAodGhpcy5vblJlbmRlciAmJiB0aGlzLm9uUmVuZGVyLmluaXQpIHtcbiAgICAgICAgICAgIHRoaXMub25SZW5kZXIuaW5pdCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuICAgIHNldChwcm9wcykge1xuICAgICAgICBjb25zdCB7IHZhbHVlcywgLi4ucHJvcHNUb1NldCB9ID0gcHJvcHM7XG5cbiAgICAgICAgc3VwZXIuc2V0KHByb3BzVG9TZXQpO1xuXG4gICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMgfHwge307XG5cbiAgICAgICAgLy8gTWVyZ2UgYHZhbHVlYCBwcm9wZXJ0aWVzIHdpdGggZXhpc3RpbmdcbiAgICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gdGhpcy5nZXREZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZVByb3AgPSB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKTtcblxuICAgICAgICAgICAgLy8gSW5oZXJpdCB2YWx1ZXMgZnJvbSBwcm9wc1xuICAgICAgICAgICAgZWFjaChkZWZhdWx0VmFsdWUsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzVG9TZXRba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZVtrZXldID0gcHJvcHNUb1NldFtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBPdmVyd3JpdGUgcGVyLXZhbHVlIHByb3BzXG4gICAgICAgICAgICBlYWNoKHZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1ZhbHVlID0gY3VycmVudFZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IHsgLi4uZGVmYXVsdFZhbHVlIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNPYmoodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0geyAuLi5uZXdWYWx1ZSwgLi4udmFsdWUgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IGV4aXN0aW5nVmFsdWUgPyB7IC4uLmV4aXN0aW5nVmFsdWUsIC4uLm5ld1ZhbHVlIH0gOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzdW1lKCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdGhpcyBgdmFsdWVgIHByb3BlcnR5IHdoZW4gc2V0IGFzIHZhbHVlIGluc3RlYWQgb2Ygb2JqZWN0XG5cbiAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIEFjdGlvbiB3aXRoIG5ldyBwcm9wZXJ0aWVzXG4gICAgICAgICMjIFJldHVybnMgbmV3IGluc3RhbmNlIG9mIHRoaXMgQWN0aW9uJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICAgKi9cbiAgICBleHRlbmQocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHsgLi4udGhpcywgcHJvcHMgfSwgdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCkpO1xuICAgIH1cbn07XG4iXX0=
return exports;
})();
var __small$_7 = (function() {
var exports = {};
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Process2 = __small$_16;

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
var __small$_8 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _Input2 = __small$_7;

var _Input3 = _interopRequireDefault(_Input2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MOUSE_MOVE = 'mousemove';

/*
    Scrape x/y coordinates from provided event

    @param [event]
    @return [object]
*/
var eventToPoint = function (e) {
    return {
        x: e.pageX,
        y: e.pageY
    };
};

var Mouse = function (_Input) {
    _inherits(Mouse, _Input);

    function Mouse(e) {
        _classCallCheck(this, Mouse);

        var _this = _possibleConstructorReturn(this, _Input.call(this));

        _this.state = eventToPoint(e);
        _this.bindEvents();
        return _this;
    }

    Mouse.prototype.latest = function latest(e) {
        _Input.prototype.latest.call(this, eventToPoint(e));
        e.preventDefault();
    };

    Mouse.prototype.start = function start() {
        _Input.prototype.start.call(this);
        document.documentElement.addEventListener(MOUSE_MOVE, this.onMove);
    };

    Mouse.prototype.stop = function stop() {
        _Input.prototype.stop.call(this);
        document.documentElement.removeEventListener(MOUSE_MOVE, this.onMove);
    };

    return Mouse;
}(_Input3.default);

exports.default = Mouse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9Nb3VzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxhQUFhLFdBQWI7Ozs7Ozs7O0FBUU4sSUFBTSxlQUFlLFVBQUMsQ0FBRDtXQUFRO0FBQ3pCLFdBQUcsRUFBRSxLQUFGO0FBQ0gsV0FBRyxFQUFFLEtBQUY7O0NBRmM7O0lBS0E7OztBQUNqQixhQURpQixLQUNqQixDQUFZLENBQVosRUFBZTs4QkFERSxPQUNGOztxREFDWCxtQkFEVzs7QUFFWCxjQUFLLEtBQUwsR0FBYSxhQUFhLENBQWIsQ0FBYixDQUZXO0FBR1gsY0FBSyxVQUFMLEdBSFc7O0tBQWY7O0FBRGlCLG9CQU9qQix5QkFBTyxHQUFHO0FBQ04seUJBQU0sTUFBTixZQUFhLGFBQWEsQ0FBYixDQUFiLEVBRE07QUFFTixVQUFFLGNBQUYsR0FGTTs7O0FBUE8sb0JBWWpCLHlCQUFRO0FBQ0oseUJBQU0sS0FBTixZQURJO0FBRUosaUJBQVMsZUFBVCxDQUF5QixnQkFBekIsQ0FBMEMsVUFBMUMsRUFBc0QsS0FBSyxNQUFMLENBQXRELENBRkk7OztBQVpTLG9CQWlCakIsdUJBQU87QUFDSCx5QkFBTSxJQUFOLFlBREc7QUFFSCxpQkFBUyxlQUFULENBQXlCLG1CQUF6QixDQUE2QyxVQUE3QyxFQUF5RCxLQUFLLE1BQUwsQ0FBekQsQ0FGRzs7O1dBakJVIiwiZmlsZSI6Ik1vdXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuXG5jb25zdCBNT1VTRV9NT1ZFID0gJ21vdXNlbW92ZSc7XG5cbi8qXG4gICAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgICBAcGFyYW0gW2V2ZW50XVxuICAgIEByZXR1cm4gW29iamVjdF1cbiovXG5jb25zdCBldmVudFRvUG9pbnQgPSAoZSkgPT4gKHtcbiAgICB4OiBlLnBhZ2VYLFxuICAgIHk6IGUucGFnZVlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZSBleHRlbmRzIElucHV0IHtcbiAgICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBldmVudFRvUG9pbnQoZSk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGxhdGVzdChlKSB7XG4gICAgICAgIHN1cGVyLmxhdGVzdChldmVudFRvUG9pbnQoZSkpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFX01PVkUsIHRoaXMub25Nb3ZlKTtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKE1PVVNFX01PVkUsIHRoaXMub25Nb3ZlKTtcbiAgICB9XG59Il19
return exports;
})();
var __small$_9 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _Input2 = __small$_7;

var _Input3 = _interopRequireDefault(_Input2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOUCH_MOVE = 'touchmove';

/*
    Scrape x/y coordinates from provided event

    @param [event]
    @return [object]
*/
var eventToPoint = function (_ref) {
    var changedTouches = _ref.changedTouches;
    return {
        x: changedTouches[0].clientX,
        y: changedTouches[0].clientY
    };
};

var Touch = function (_Input) {
    _inherits(Touch, _Input);

    function Touch(e) {
        _classCallCheck(this, Touch);

        var _this = _possibleConstructorReturn(this, _Input.call(this));

        _this.state = eventToPoint(e);
        _this.bindEvents();
        return _this;
    }

    Touch.prototype.latest = function latest(e) {
        _Input.prototype.latest.call(this, eventToPoint(e));
        e.preventDefault();
    };

    Touch.prototype.start = function start() {
        _Input.prototype.start.call(this);
        document.documentElement.addEventListener(TOUCH_MOVE, this.latest);
    };

    Touch.prototype.stop = function stop() {
        _Input.prototype.stop.call(this);
        document.documentElement.removeEventListener(TOUCH_MOVE, this.latest);
    };

    return Touch;
}(_Input3.default);

exports.default = Touch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9Ub3VjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxhQUFhLFdBQWI7Ozs7Ozs7O0FBUU4sSUFBTSxlQUFlO1FBQUc7V0FBc0I7QUFDMUMsV0FBRyxlQUFlLENBQWYsRUFBa0IsT0FBbEI7QUFDSCxXQUFHLGVBQWUsQ0FBZixFQUFrQixPQUFsQjs7Q0FGYzs7SUFLQTs7O0FBQ2pCLGFBRGlCLEtBQ2pCLENBQVksQ0FBWixFQUFlOzhCQURFLE9BQ0Y7O3FEQUNYLG1CQURXOztBQUVYLGNBQUssS0FBTCxHQUFhLGFBQWEsQ0FBYixDQUFiLENBRlc7QUFHWCxjQUFLLFVBQUwsR0FIVzs7S0FBZjs7QUFEaUIsb0JBT2pCLHlCQUFPLEdBQUc7QUFDTix5QkFBTSxNQUFOLFlBQWEsYUFBYSxDQUFiLENBQWIsRUFETTtBQUVOLFVBQUUsY0FBRixHQUZNOzs7QUFQTyxvQkFZakIseUJBQVE7QUFDSix5QkFBTSxLQUFOLFlBREk7QUFFSixpQkFBUyxlQUFULENBQXlCLGdCQUF6QixDQUEwQyxVQUExQyxFQUFzRCxLQUFLLE1BQUwsQ0FBdEQsQ0FGSTs7O0FBWlMsb0JBaUJqQix1QkFBTztBQUNILHlCQUFNLElBQU4sWUFERztBQUVILGlCQUFTLGVBQVQsQ0FBeUIsbUJBQXpCLENBQTZDLFVBQTdDLEVBQXlELEtBQUssTUFBTCxDQUF6RCxDQUZHOzs7V0FqQlUiLCJmaWxlIjoiVG91Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5cbmNvbnN0IFRPVUNIX01PVkUgPSAndG91Y2htb3ZlJztcblxuLypcbiAgICBTY3JhcGUgeC95IGNvb3JkaW5hdGVzIGZyb20gcHJvdmlkZWQgZXZlbnRcblxuICAgIEBwYXJhbSBbZXZlbnRdXG4gICAgQHJldHVybiBbb2JqZWN0XVxuKi9cbmNvbnN0IGV2ZW50VG9Qb2ludCA9ICh7IGNoYW5nZWRUb3VjaGVzIH0pID0+ICh7XG4gICAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2ggZXh0ZW5kcyBJbnB1dCB7XG4gICAgY29uc3RydWN0b3IoZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gZXZlbnRUb1BvaW50KGUpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBsYXRlc3QoZSkge1xuICAgICAgICBzdXBlci5sYXRlc3QoZXZlbnRUb1BvaW50KGUpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihUT1VDSF9NT1ZFLCB0aGlzLmxhdGVzdCk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUT1VDSF9NT1ZFLCB0aGlzLmxhdGVzdCk7XG4gICAgfVxufSJdfQ==
return exports;
})();
var __small$_37 = (function() {
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
var __small$_27 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _defaultProps = __small$_37;

exports.default = {
    defaultProps: _defaultProps.opacity
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWU7QUFDWCxnQ0FISyxPQUdMIiwiZmlsZSI6ImFscGhhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb3BhY2l0eSB9IGZyb20gJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IG9wYWNpdHlcbn07Il19
return exports;
})();
var __small$_38 = (function() {
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
var __small$_28 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _utils = __small$_14;

var _px = __small$_33;

var _px2 = _interopRequireDefault(_px);

var _dictionary = __small$_38;

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
var __small$_34 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _dictionary = __small$_38;

var transformProps = {};

var SCALE = 'scale';
var ROTATE = 'rotate';
var TRANSFORM_PERSPECTIVE = 'transformPerspective';
var TERMS = ['translate', SCALE, ROTATE, 'skew', TRANSFORM_PERSPECTIVE];

transformProps[ROTATE] = transformProps[SCALE] = transformProps[TRANSFORM_PERSPECTIVE] = true;

TERMS.forEach(function (term) {
  return _dictionary.axes.forEach(function (axis) {
    return transformProps[term + position] = true;
  });
});

exports.default = transformProps;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxJQUFJLGlCQUFpQixFQUFqQjs7QUFFSixJQUFNLFFBQVEsT0FBUjtBQUNOLElBQU0sU0FBUyxRQUFUO0FBQ04sSUFBTSx3QkFBd0Isc0JBQXhCO0FBQ04sSUFBTSxRQUFRLENBQUMsV0FBRCxFQUFjLEtBQWQsRUFBcUIsTUFBckIsRUFBNkIsTUFBN0IsRUFBcUMscUJBQXJDLENBQVI7O0FBRU4sZUFBZSxNQUFmLElBQXlCLGVBQWUsS0FBZixJQUF3QixlQUFlLHFCQUFmLElBQXdDLElBQXhDOztBQUVqRCxNQUFNLE9BQU4sQ0FBYyxVQUFDLElBQUQ7U0FBVSxZQVhmLElBV2UsQ0FBSyxPQUFMLENBQWEsVUFBQyxJQUFEO1dBQVUsZUFBZSxPQUFPLFFBQVAsQ0FBZixHQUFrQyxJQUFsQztHQUFWO0NBQXZCLENBQWQ7O2tCQUVlIiwiZmlsZSI6InRyYW5zZm9ybS1wcm9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF4ZXMgfSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcblxubGV0IHRyYW5zZm9ybVByb3BzID0ge307XG5cbmNvbnN0IFNDQUxFID0gJ3NjYWxlJztcbmNvbnN0IFJPVEFURSA9ICdyb3RhdGUnO1xuY29uc3QgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbmNvbnN0IFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaCgodGVybSkgPT4gYXhlcy5mb3JFYWNoKChheGlzKSA9PiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgcG9zaXRpb25dID0gdHJ1ZSkpO1xuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2Zvcm1Qcm9wczsiXX0=
return exports;
})();
var __small$_29 = (function() {
var exports = {};
var __small$_39 = (function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _utils = __small$_14;

var _dictionary = __small$_38;

var _defaultProps = __small$_37;

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

    combine: function (value) {
        return (0, _utils.createFunctionString)((0, _utils.createDelimited)(values, _dictionary.rgb, ', ', 2), 'rgba');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9yZ2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFJZTtBQUNYLGtCQUFjO0FBQ1YsMkJBSkMsR0FJRDtBQUNBLDZCQUxDLEdBS0Q7QUFDQSw0QkFOQyxHQU1EO0FBQ0EsNkJBUG9CLE9BT3BCO0tBSko7O0FBT0EsVUFBTSxVQUFDLEtBQUQ7ZUFBWSxTQUFTLE1BQU0sT0FBTixDQUFjLEtBQWQsSUFBdUIsQ0FBQyxDQUFEO0tBQTVDOztBQUVOLFdBQU8sVUFBQyxLQUFEO2VBQVcsV0FkMEIsZUFjMUIsQ0FBZSxLQUFmLGNBYmIsR0FhYTtLQUFYOztBQUVQLGFBQVMsVUFBQyxLQUFEO2VBQVcsV0FoQkUscUJBZ0JGLENBQXFCLFdBaEJwQyxnQkFnQm9DLENBQWdCLE1BQWhCLGNBZnBDLEdBZW9DLEVBQWtDLElBQWxDLEVBQXdDLENBQXhDLENBQXJCLEVBQWlFLE1BQWpFO0tBQVgiLCJmaWxlIjoicmdiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGVsaW1pdGVkLCBjcmVhdGVGdW5jdGlvblN0cmluZywgZ2V0Q29sb3JWYWx1ZXMgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHsgcmdiIGFzIHJnYlRlcm1zIH0gZnJvbSAnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcbmltcG9ydCB7IHJnYiBhcyBkZWZhdWx0UkdCLCBvcGFjaXR5IGFzIGRlZmF1bHRPcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBSZWQ6IGRlZmF1bHRSR0IsXG4gICAgICAgIEdyZWVuOiBkZWZhdWx0UkdCLFxuICAgICAgICBCbHVlOiBkZWZhdWx0UkdCLFxuICAgICAgICBBbHBoYTogZGVmYXVsdE9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZigncmdiJykgPiAtMSksXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgcmdiVGVybXMpLFxuXG4gICAgY29tYmluZTogKHZhbHVlKSA9PiBjcmVhdGVGdW5jdGlvblN0cmluZyhjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCByZ2JUZXJtcywgJywgJywgMiksICdyZ2JhJylcbn07Il19
return exports;
})();
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _utils = __small$_14;

var _rgb = __small$_39;

var _rgb2 = _interopRequireDefault(_rgb);

var _hsl = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _defaultProps = __small$_37;

var _dictionary = __small$_38;

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
})());

var _hsl2 = _interopRequireDefault(_hsl);

var _hex = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _rgb = __small$_39;

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

    combine: function (value) {
        return _rgb2.default.combine(values);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9oZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFFZTtBQUNYLGtCQUFjLGNBQUksWUFBSjs7QUFFZCxVQUFNLFVBQUMsS0FBRDtlQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsR0FBZCxJQUFxQixDQUFDLENBQUQ7S0FBMUM7O0FBRU4sV0FBTyxVQUFDLEtBQUQsRUFBVztBQUNkLFlBQUksYUFBSjtZQUFPLGFBQVA7WUFBVSxhQUFWOzs7QUFEYyxZQUlWLE1BQU0sTUFBTixHQUFlLENBQWYsRUFBa0I7QUFDbEIsZ0JBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKLENBRGtCO0FBRWxCLGdCQUFJLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSixDQUZrQjtBQUdsQixnQkFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUo7OztBQUhrQixTQUF0QixNQU1PO0FBQ0gsb0JBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKLENBREc7QUFFSCxvQkFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUosQ0FGRztBQUdILG9CQUFJLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSixDQUhHO0FBSUgscUJBQUssQ0FBTCxDQUpHO0FBS0gscUJBQUssQ0FBTCxDQUxHO0FBTUgscUJBQUssQ0FBTCxDQU5HO2FBTlA7O0FBZUEsZUFBTztBQUNILGlCQUFLLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBTDtBQUNBLG1CQUFPLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBUDtBQUNBLGtCQUFNLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBTjtBQUNBLG1CQUFPLENBQVA7U0FKSixDQW5CYztLQUFYOztBQTJCUCxhQUFTLFVBQUMsS0FBRDtlQUFXLGNBQUksT0FBSixDQUFZLE1BQVo7S0FBWCIsImZpbGUiOiJoZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmdiIGZyb20gJy4vcmdiJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogcmdiLmRlZmF1bHRQcm9wcyxcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJyMnKSA+IC0xKSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHIsIGcsIGI7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAxKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDMsIDEpO1xuICAgICAgICAgICAgciArPSByO1xuICAgICAgICAgICAgZyArPSBnO1xuICAgICAgICAgICAgYiArPSBiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgICAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgICAgICAgIEFscGhhOiAxXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZSkgPT4gcmdiLmNvbWJpbmUodmFsdWVzKVxufTsiXX0=
return exports;
})());

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

    combine: function (value) {
        return values.Red !== undefined ? _rgb2.default.combine(values) : _hsl2.default.combine(values);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSxhQUFhLDZDQUFiO0FBQ04sSUFBTSxnQkFBZ0IsV0FBVyxNQUFYOztrQkFFUDtBQUNYLCtCQUFtQixjQUFJLFlBQUosRUFBcUIsY0FBSSxZQUFKLENBQXhDOztBQUVBLFVBQU0sVUFBQyxLQUFEO2VBQVcsY0FBSSxJQUFKLENBQVMsS0FBVCxLQUFtQixjQUFJLElBQUosQ0FBUyxLQUFULENBQW5CLElBQXNDLGNBQUksSUFBSixDQUFTLEtBQVQsQ0FBdEM7S0FBWDs7QUFFTixXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksYUFBSixFQUFtQixHQUFuQyxFQUF3QztBQUNwQyxnQkFBSSxXQUFXLENBQVgsRUFBYyxJQUFkLENBQW1CLEtBQW5CLENBQUosRUFBK0I7QUFDM0IsdUJBQU8sV0FBVyxDQUFYLEVBQWMsS0FBZCxDQUFvQixLQUFwQixDQUFQLENBRDJCO2FBQS9CO1NBREo7S0FERzs7QUFRUCxhQUFTLFVBQUMsS0FBRDtlQUFXLE1BQUMsQ0FBTyxHQUFQLEtBQWUsU0FBZixHQUE0QixjQUFJLE9BQUosQ0FBWSxNQUFaLENBQTdCLEdBQW1ELGNBQUksT0FBSixDQUFZLE1BQVosQ0FBbkQ7S0FBWCIsImZpbGUiOiJjb2xvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHJnYiBmcm9tICcuL3JnYic7XG5pbXBvcnQgaHNsIGZyb20gJy4vaHNsJztcbmltcG9ydCBoZXggZnJvbSAnLi9oZXgnO1xuXG5jb25zdCBjb2xvclR5cGVzID0gW3JnYiwgaHNsLCBoZXhdO1xuY29uc3QgbnVtQ29sb3JUeXBlcyA9IGNvbG9yVHlwZXMubGVuZ3RoO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7IC4uLnJnYi5kZWZhdWx0UHJvcHMsIC4uLmhzbC5kZWZhdWx0UHJvcHMgfSxcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4gcmdiLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2wudGVzdCh2YWx1ZSksXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29sb3JUeXBlczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29sb3JUeXBlc1tpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvclR5cGVzW2ldLnNwbGl0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWUpID0+ICh2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQpID8gcmdiLmNvbWJpbmUodmFsdWVzKSA6IGhzbC5jb21iaW5lKHZhbHVlcylcbn07XG4iXX0=
return exports;
})();
'use strict';

exports.__esModule = true;
exports.setDilation = exports.utils = exports.calc = exports.renderSVG = exports.renderCSS = exports.renderAttr = exports.Touch = exports.Mouse = exports.Input = exports.Track = exports.Physics = exports.Tween = exports.Action = exports.Actor = undefined;

var _Actor2 = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _Action2 = __small$_3;

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Actor = function (_Action) {
    _inherits(Actor, _Action);

    function Actor() {
        _classCallCheck(this, Actor);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _Action.call.apply(_Action, [this].concat(args)));

        _this.once();
        return _this;
    }

    Actor.prototype.do = function _do(action) {
        if (this.reducer) {
            this.start(this.reducer(action, this.values));
        }
    };

    Actor.prototype.start = function start(action) {};

    Actor.prototype.willRender = function willRender() {};

    return Actor;
}(_Action3.default);

exports.default = Actor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci9BY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCOzs7QUFDakIsYUFEaUIsS0FDakIsR0FBcUI7OEJBREosT0FDSTs7MENBQU47O1NBQU07O3FEQUNqQiwwQ0FBUyxLQUFULEdBRGlCOztBQUVqQixjQUFLLElBQUwsR0FGaUI7O0tBQXJCOztBQURpQixvQkFNakIsa0JBQUcsUUFBUTtBQUNQLFlBQUksS0FBSyxPQUFMLEVBQWM7QUFDZCxpQkFBSyxLQUFMLENBQVcsS0FBSyxPQUFMLENBQWEsTUFBYixFQUFxQixLQUFLLE1BQUwsQ0FBaEMsRUFEYztTQUFsQjs7O0FBUGEsb0JBWWpCLHVCQUFNLFFBQVE7O0FBWkcsb0JBZ0JqQixtQ0FBYTs7V0FoQkkiLCJmaWxlIjoiQWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvQWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0b3IgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMub25jZSgpO1xuICAgIH1cblxuICAgIGRvKGFjdGlvbikge1xuICAgICAgICBpZiAodGhpcy5yZWR1Y2VyKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KHRoaXMucmVkdWNlcihhY3Rpb24sIHRoaXMudmFsdWVzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydChhY3Rpb24pIHtcblxuICAgIH1cblxuICAgIHdpbGxSZW5kZXIoKSB7XG5cbiAgICB9XG59Il19
return exports;
})());

var _Actor3 = _interopRequireDefault(_Actor2);

var _Action2 = __small$_3;

var _Action3 = _interopRequireDefault(_Action2);

var _Tween2 = ((function() {
var exports = {};
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Action2 = __small$_3;

var _Action3 = _interopRequireDefault(_Action2);

var _presetEasing = ((function() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL3R3ZWVuL2NyZWF0ZS1lYXNpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tCQWdDd0I7Ozs7Ozs7Ozs7O0FBdEJ4QixJQUFNLGVBQWUsVUFBQyxNQUFEO1dBQVksVUFBQyxRQUFELEVBQVcsUUFBWDtlQUF3QixRQUFDLElBQVksR0FBWixHQUFtQixPQUFPLElBQUksUUFBSixFQUFjLFFBQXJCLElBQWlDLENBQWpDLEdBQXFDLENBQUMsSUFBSSxPQUFPLEtBQUssSUFBSSxRQUFKLENBQUwsRUFBb0IsUUFBM0IsQ0FBSixDQUFELEdBQTZDLENBQTdDO0tBQWpGO0NBQVo7Ozs7Ozs7Ozs7OztBQVlyQixJQUFNLGdCQUFnQixVQUFDLE1BQUQ7V0FBWSxVQUFDLFFBQUQsRUFBVyxRQUFYO2VBQXdCLElBQUksT0FBTyxJQUFJLFFBQUosRUFBYyxRQUFyQixDQUFKO0tBQXhCO0NBQVo7Ozs7Ozs7Ozs7QUFVUCxTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDO0FBQ2pELFFBQUksaUJBQWlCLFVBQUMsUUFBRCxFQUFXLFFBQVg7ZUFBd0IsT0FBTyxRQUFQLEVBQWlCLFFBQWpCO0tBQXhCLENBRDRCOztBQUdqRCxtQkFBZSxFQUFmLEdBQW9CLFVBQUMsUUFBRCxFQUFXLFFBQVg7ZUFBd0IsT0FBTyxRQUFQLEVBQWlCLFFBQWpCO0tBQXhCLENBSDZCO0FBSWpELG1CQUFlLEdBQWYsR0FBcUIsY0FBYyxNQUFkLENBQXJCLENBSmlEO0FBS2pELG1CQUFlLEtBQWYsR0FBdUIsYUFBYSxNQUFiLENBQXZCLENBTGlEOztBQU9qRCxXQUFPLGNBQVAsQ0FQaUQ7Q0FBdEMiLCJmaWxlIjoiY3JlYXRlLWVhc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgTWlycm9yIGVhc2luZ1xuICAgIFxuICAgIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG5jb25zdCBtaXJyb3JFYXNpbmcgPSAobWV0aG9kKSA9PiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiAocHJvZ3Jlc3MgPD0gMC41KSA/IG1ldGhvZCgyICogcHJvZ3Jlc3MsIHN0cmVuZ3RoKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcyksIHN0cmVuZ3RoKSkgLyAyO1xuICAgICAgICBcbi8qXG4gICAgUmV2ZXJzZSBlYXNpbmdcbiAgICBcbiAgICBSZXZlcnNlcyB0aGUgb3V0cHV0IG9mIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgZm9yIGZsaXBwaW5nIGVhc2VJblxuICAgIGN1cnZlIHRvIGFuIGVhc2VPdXQuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHJldmVyc2VcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbmNvbnN0IHJldmVyc2VFYXNpbmcgPSAobWV0aG9kKSA9PiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiAxIC0gbWV0aG9kKDEgLSBwcm9ncmVzcywgc3RyZW5ndGgpO1xuXG4vKlxuICAgIEVhc2luZyBjbGFzc1xuXG4gICAgSWYgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCByZXR1cm5zIGVhc2luZyBmdW5jdGlvbiB3aXRoIFxuICAgIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5cbiAgICBJZiBwcm92aWRlZCBmb3VyIGFyZ3VtZW50cywgcmV0dXJucyBuZXcgQmV6aWVyIGNsYXNzIGluc3RlYWQuXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWFzaW5nRnVuY3Rpb24obWV0aG9kKSB7XG4gICAgbGV0IGVhc2luZ0Z1bmN0aW9uID0gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG5cbiAgICBlYXNpbmdGdW5jdGlvbi5pbiA9IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIGVhc2luZ0Z1bmN0aW9uLm91dCA9IHJldmVyc2VFYXNpbmcobWV0aG9kKTtcbiAgICBlYXNpbmdGdW5jdGlvbi5pbk91dCA9IG1pcnJvckVhc2luZyhtZXRob2QpO1xuXG4gICAgcmV0dXJuIGVhc2luZ0Z1bmN0aW9uO1xufVxuIl19
return exports;
})());

var _createEasing2 = _interopRequireDefault(_createEasing);

var _utils = __small$_14;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Values
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

exports.default = baseEasing;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL3R3ZWVuL3ByZXNldC1lYXNpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLElBQU0sd0JBQXdCLEtBQXhCO0FBQ04sSUFBTSx1QkFBdUIsQ0FBdkI7OztBQUdOLElBQU0sc0JBQXNCO1dBQVksVUFBQyxRQUFELEVBQVcsUUFBWDtlQUF3QixXQUFXLElBQVgsQ0FBZ0IsUUFBaEIsRUFBMEIsUUFBMUI7S0FBeEI7Q0FBWjs7Ozs7Ozs7QUFRNUIsSUFBSSxhQUFhO0FBQ2IsVUFBTSxVQUFDLFFBQUQ7WUFBVyxpRUFBVzt3QkFBeUIsVUFBWTtLQUEzRDtBQUNOLFVBQU07ZUFBWSxJQUFJLEtBQUssR0FBTCxDQUFTLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBVCxDQUFKO0tBQVo7QUFDTixVQUFNLFVBQUMsUUFBRDtZQUFXLGlFQUFXO2VBQTBCLFFBQUMsR0FBVyxRQUFYLElBQXdCLENBQUMsV0FBVyxDQUFYLENBQUQsR0FBaUIsUUFBakIsR0FBNEIsUUFBNUIsQ0FBekI7S0FBaEQ7Q0FITjs7QUFNSixDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLENBQW9DLFVBQUMsVUFBRCxFQUFhLENBQWI7V0FBbUIsV0FBVyxVQUFYLElBQXlCLG9CQUFvQixJQUFJLENBQUosQ0FBN0M7Q0FBbkIsQ0FBcEM7OztBQUdBLFdBeEJTLEtBd0JULENBQUssVUFBTCxFQUFpQixVQUFDLFFBQUQsRUFBVyxHQUFYLEVBQW1CO0FBQ2hDLFFBQUksaUJBQWlCLDRCQUFhLFFBQWIsQ0FBakIsQ0FENEI7QUFFaEMsZUFBYyxVQUFkLElBQXlCLGVBQWUsRUFBZixDQUZPO0FBR2hDLGVBQWMsV0FBZCxJQUEwQixlQUFlLEdBQWYsQ0FITTtBQUloQyxlQUFjLGFBQWQsSUFBNEIsZUFBZSxLQUFmLENBSkk7Q0FBbkIsQ0FBakI7O0FBT0EsV0FBVyxNQUFYLEdBQW9CO1dBQVk7Q0FBWjtBQUNwQixXQUFXLFVBQVgsR0FBd0IsVUFBQyxRQUFEO1FBQVcsaUVBQVc7V0FDMUMsQ0FBRSxZQUFVLENBQVYsQ0FBRCxHQUFnQixDQUFoQixHQUFxQixNQUFNLFdBQVcsTUFBWCxDQUFrQixRQUFsQixFQUE0QixRQUE1QixDQUFOLEdBQStDLE9BQU8sSUFBSSxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELElBQU8sV0FBVyxDQUFYLENBQVAsQ0FBaEIsQ0FBUDtDQURqRDs7a0JBR1QiLCJmaWxlIjoicHJlc2V0LWVhc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcblxuICAgIEFudGljaXBhdGUgZWFzaW5nIGNyZWF0ZWQgYnkgRWxsaW90IEdpbm9cbiAgICBodHRwczovL3R3aXR0ZXIuY29tL0VsbGlvdEdlbm9cbiovXG4vLyBJbXBvcnRzXG5pbXBvcnQgY3JlYXRlRWFzaW5nIGZyb20gJy4vY3JlYXRlLWVhc2luZyc7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuLy8gVmFsdWVzXG5jb25zdCBERUZBVUxUX0JBQ0tfU1RSRU5HVEggPSAxLjUyNTtcbmNvbnN0IERFRkFVTFRfUE9XX1NUUkVOR1RIID0gMjtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbmNvbnN0IGdlbmVyYXRlUG93ZXJFYXNpbmcgPSBzdHJlbmd0aCA9PiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiBiYXNlRWFzaW5nLmVhc2UocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuLypcbiAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgIFxuICAgIE9uIGluaXQsIHdlIHVzZSAubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuKi9cbmxldCBiYXNlRWFzaW5nID0ge1xuICAgIGVhc2U6IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX1BPV19TVFJFTkdUSCkgPT4gcHJvZ3Jlc3MgKiogc3RyZW5ndGgsXG4gICAgY2lyYzogcHJvZ3Jlc3MgPT4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwcm9ncmVzcykpLFxuICAgIGJhY2s6IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX0JBQ0tfU1RSRU5HVEgpID0+IChwcm9ncmVzcyAqIHByb2dyZXNzKSAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpXG59O1xuXG5bJ2N1YmljJywgJ3F1YXJ0JywgJ3F1aW50J10uZm9yRWFjaCgoZWFzaW5nTmFtZSwgaSkgPT4gYmFzZUVhc2luZ1tlYXNpbmdOYW1lXSA9IGdlbmVyYXRlUG93ZXJFYXNpbmcoaSArIDMpKTtcblxuLy8gR2VuZXJhdGUgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcbmVhY2goYmFzZUVhc2luZywgKGJhc2VFYXNlLCBrZXkpID0+IHtcbiAgICBsZXQgZWFzaW5nRnVuY3Rpb24gPSBjcmVhdGVFYXNpbmcoYmFzZUVhc2UpO1xuICAgIGJhc2VFYXNpbmdbYCR7a2V5fUluYF0gPSBlYXNpbmdGdW5jdGlvbi5pbjtcbiAgICBiYXNlRWFzaW5nW2Ake2tleX1PdXRgXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICBiYXNlRWFzaW5nW2Ake2tleX1Jbk91dGBdID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG59KTtcblxuYmFzZUVhc2luZy5saW5lYXIgPSBwcm9ncmVzcyA9PiBwcm9ncmVzcztcbmJhc2VFYXNpbmcuYW50aWNpcGF0ZSA9IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX0JBQ0tfU1RSRU5HVEgpID0+XG4gICAgKChwcm9ncmVzcyo9MikgPCAxKSA/IDAuNSAqIGJhc2VFYXNpbmcuYmFja0luKHByb2dyZXNzLCBzdHJlbmd0aCkgOiAgMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlRWFzaW5nOyJdfQ==
return exports;
})());

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
function ease(progress, from, to, ease) {
    var progressLimited = (0, _calc.restrict)(progress, 0, 1);
    var easingFunction = (0, _utils.isString)(ease) ? _presetEasing2.default[ease] : ease;
    var easedProgress = easingFunction(progressLimited);

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
        var _this2 = this;

        var progressTarget = this.playDirection === 1 ? 1 : 0;

        this.ended = true;
        this.elapsed += elapsed * this.dilate * this.playDirection;

        (0, _utils.each)(this.values, function (value, key) {
            var progress = (0, _calc.restrict)((0, _calc.getProgressFromValue)(_this2.elapsed - value.delay, 0, value.duration), 0, 1);

            // Mark Tween as NOT ended if still in progress
            if (progress !== progressTarget) {
                _this2.ended = false;
            }

            // Step progress if we're stepping
            if (value.steps) {
                progress = (0, _calc.stepProgress)(progress, value.steps);
            }

            // Ease progress
            value.current = ease(progress, value.from, value.to, value.ease);
        });
    };

    Tween.prototype.onFrameEnd = function onFrameEnd() {
        var _this3 = this;

        if (this.ended) {
            var stepTaken = false;

            (0, _utils.each)(NEXT_STEPS, function (method, step) {
                var maxSteps = _this3[step];

                if (maxSteps === true || (0, _utils.isNum)(maxSteps) && maxSteps > _this3[step + COUNT]) {
                    _this3[step + COUNT]++;
                    stepTaken = true;
                    _this3[method]();
                }
            });

            if (!stepTaken) {
                this.stop();
            }
        }
    };

    Tween.prototype.flipValues = function flipValues() {
        this.elapsed = this.duration - this.elapsed;

        (0, _utils.each)(this.values, function (value, key) {
            var _ref = [value.from, value.to];
            value.to = _ref[0];
            value.from = _ref[1];
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
        this.once();
        this.elapsed = this.duration * progress;
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
            ease: 'easeOut',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsSUFBTSxRQUFRLE9BQVI7QUFDTixJQUFNLGFBQWE7QUFDZixVQUFNLFNBQU47QUFDQSxVQUFNLFNBQU47QUFDQSxVQUFNLFlBQU47Q0FIRTs7Ozs7Ozs7Ozs7O0FBZ0JOLFNBQVMsSUFBVCxDQUFjLFFBQWQsRUFBd0IsSUFBeEIsRUFBOEIsRUFBOUIsRUFBa0MsSUFBbEMsRUFBd0M7QUFDcEMsUUFBTSxrQkFBa0IsVUF4QnhCLFNBd0J3QixDQUFTLFFBQVQsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBbEIsQ0FEOEI7QUFFcEMsUUFBTSxpQkFBaUIsV0E1QnZCLFNBNEJ1QixDQUFTLElBQVQsSUFBaUIsdUJBQWEsSUFBYixDQUFqQixHQUFzQyxJQUF0QyxDQUZhO0FBR3BDLFFBQU0sZ0JBQWdCLGVBQWUsZUFBZixDQUFoQixDQUg4Qjs7QUFLcEMsV0FBTyxVQTFCUCxxQkEwQk8sQ0FBcUIsYUFBckIsRUFBb0MsSUFBcEMsRUFBMEMsRUFBMUMsQ0FBUCxDQUxvQztDQUF4Qzs7SUFRcUI7Ozs7Ozs7OztvQkFDakIseUJBQVE7QUFDSiwwQkFBTSxLQUFOLFlBREk7QUFFSixhQUFLLE9BQUwsR0FBZSxDQUFmLENBRkk7QUFHSixhQUFLLFNBQUwsR0FBaUIsS0FBSyxTQUFMLEdBQWlCLEtBQUssU0FBTCxHQUFpQixDQUFqQixDQUg5Qjs7O0FBRFMsb0JBT2pCLDZCQUFTLE9BQU8sWUFBWSxTQUFTOzs7QUFDakMsWUFBTSxpQkFBaUIsSUFBQyxDQUFLLGFBQUwsS0FBdUIsQ0FBdkIsR0FBNEIsQ0FBN0IsR0FBaUMsQ0FBakMsQ0FEVTs7QUFHakMsYUFBSyxLQUFMLEdBQWEsSUFBYixDQUhpQztBQUlqQyxhQUFLLE9BQUwsSUFBZ0IsT0FBQyxHQUFVLEtBQUssTUFBTCxHQUFlLEtBQUssYUFBTCxDQUpUOztBQU1q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Q0Esa0JBQU0sQ0FBTjtBQUNBLGdCQUFJLENBQUo7QUFDQSxtQkFBTyxLQUFQO1VBVkosQ0FEYzs7O0FBeEZELG9CQXVHakIscURBQXNCO0FBQ2xCLGVBQU8sSUFBUCxDQURrQjs7O1dBdkdMIiwiZmlsZSI6IlR3ZWVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgcHJlc2V0RWFzaW5nIGZyb20gJy4vdHdlZW4vcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQge1xuICAgIGN1cnJlbnRUaW1lLFxuICAgIGVhY2gsXG4gICAgaXNOdW0sXG4gICAgaXNTdHJpbmdcbn0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCB7XG4gICAgcmVzdHJpY3QsXG4gICAgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsXG4gICAgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MsXG4gICAgc3RlcFByb2dyZXNzXG59IGZyb20gJy4uL2luYy9jYWxjJztcblxuY29uc3QgQ09VTlQgPSAnQ291bnQnO1xuY29uc3QgTkVYVF9TVEVQUyA9IHtcbiAgICBsb29wOiAncmVzdGFydCcsXG4gICAgeW95bzogJ3JldmVyc2UnLFxuICAgIGZsaXA6ICdmbGlwVmFsdWVzJ1xufTtcblxuLypcbiAgICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgYmV0d2VlbiAwIGFuZCAxXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAxIHByb2dyZXNzXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb25dOiBOYW1lIG9mIHByZXNldCBlYXNpbmdcbiAgICAgICAgdG8gdXNlIG9yIGdlbmVyYXRlZCBlYXNpbmcgZnVuY3Rpb25cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBvZiBlYXNlZCBwcm9ncmVzcyBpbiByYW5nZVxuKi8gXG5mdW5jdGlvbiBlYXNlKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzZSkge1xuICAgIGNvbnN0IHByb2dyZXNzTGltaXRlZCA9IHJlc3RyaWN0KHByb2dyZXNzLCAwLCAxKTtcbiAgICBjb25zdCBlYXNpbmdGdW5jdGlvbiA9IGlzU3RyaW5nKGVhc2UpID8gcHJlc2V0RWFzaW5nW2Vhc2VdIDogZWFzZTtcbiAgICBjb25zdCBlYXNlZFByb2dyZXNzID0gZWFzaW5nRnVuY3Rpb24ocHJvZ3Jlc3NMaW1pdGVkKTtcblxuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VlbiBleHRlbmRzIEFjdGlvbiB7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgICAgIHRoaXMuZmxpcENvdW50ID0gdGhpcy55b3lvQ291bnQgPSB0aGlzLmxvb3BDb3VudCA9IDA7XG4gICAgfVxuXG4gICAgb25VcGRhdGUodHdlZW4sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NUYXJnZXQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDEgOiAwO1xuXG4gICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsYXBzZWQgKz0gKGVsYXBzZWQgKiB0aGlzLmRpbGF0ZSkgKiB0aGlzLnBsYXlEaXJlY3Rpb247XG5cbiAgICAgICAgZWFjaCh0aGlzLnZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBzdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSBwcm9ncmVzc1xuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IGVhc2UocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgICAgICAgIGxldCBzdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgZWFjaChORVhUX1NURVBTLCAobWV0aG9kLCBzdGVwKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF4U3RlcHMgPSB0aGlzW3N0ZXBdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1heFN0ZXBzID09PSB0cnVlIHx8IChpc051bShtYXhTdGVwcykgJiYgbWF4U3RlcHMgPiB0aGlzW3N0ZXAgKyBDT1VOVF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbc3RlcCArIENPVU5UXSsrO1xuICAgICAgICAgICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzW21ldGhvZF0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG5cbiAgICAgICAgZWFjaCh0aGlzLnZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIFt2YWx1ZS50bywgdmFsdWUuZnJvbV0gPSBbdmFsdWUuZnJvbSwgdmFsdWUudG9dO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gY3VycmVudFRpbWUoKTtcbiAgICB9XG5cbiAgICBzZWVrKHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMub25jZSgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uICogcHJvZ3Jlc3M7XG4gICAgfVxuICAgIFxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRQcm9wcygpLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaWxhdGU6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICB5b3lvOiBmYWxzZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgcGxheURpcmVjdGlvbjogMSxcbiAgICAgICAgICAgIGVuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0VmFsdWUoKSxcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2U6ICdlYXNlT3V0JyxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDAsXG4gICAgICAgICAgICBzdGFnZ2VyOiAwLFxuICAgICAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgdG86IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3RvJztcbiAgICB9XG59XG4iXX0=
return exports;
})());

var _Tween3 = _interopRequireDefault(_Tween2);

var _Physics2 = ((function() {
var exports = {};
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Action2 = __small$_3;

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

        (0, _utils.each)(this.values, function (value, key) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1BoeXNpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlxQjs7O0FBRWpCLGFBRmlCLE9BRWpCLEdBQXFCOzhCQUZKLFNBRUk7OzBDQUFOOztTQUFNOztxREFDakIsMENBQVMsS0FBVCxHQURpQjs7QUFFakIsY0FBSyxjQUFMLEdBQXNCLENBQXRCLENBRmlCOztLQUFyQjs7QUFGaUIsc0JBT2pCLDZCQUFTLFNBQVMsWUFBWSxTQUFTOzs7QUFDbkMsYUFBSyxVQUFMLEdBQWtCLEtBQWxCLENBRG1DOztBQUduQyxtQkFaQyxLQVlELENBQUssS0FBSyxNQUFMLEVBQWEsVUFBQyxLQUFELEVBQVEsR0FBUixFQUFnQjtBQUM5QixnQkFBTSxnQkFBZ0IsTUFBTSxPQUFOOzs7QUFEUSxpQkFJOUIsQ0FBTSxRQUFOLElBQWtCLFVBakJyQixjQWlCcUIsQ0FBYyxNQUFNLEtBQU4sRUFBYSxPQUEzQixDQUFsQjs7O0FBSjhCLGlCQU85QixDQUFNLFFBQU4sYUFBbUIsSUFBSSxNQUFNLFFBQU4sRUFBb0IsVUFBVSxFQUFWLENBQTNDOzs7QUFQOEIsZ0JBVTFCLE1BQU0sTUFBTixJQUFnQixXQXRCakIsTUFzQmlCLENBQU0sTUFBTSxFQUFOLENBQXRCLEVBQWlDO0FBQ2pDLG9CQUFNLG1CQUFtQixNQUFNLEVBQU4sR0FBVyxNQUFNLE9BQU4sQ0FESDtBQUVqQyxzQkFBTSxRQUFOLElBQWtCLG1CQUFtQixVQXpCNUMsY0F5QjRDLENBQWMsTUFBTSxNQUFOLEVBQWMsT0FBNUIsQ0FBbkIsQ0FGZTthQUFyQzs7O0FBVjhCLGlCQWdCOUIsQ0FBTSxPQUFOLElBQWlCLFVBN0JwQixjQTZCb0IsQ0FBYyxNQUFNLFFBQU4sRUFBZ0IsT0FBOUIsQ0FBakI7OztBQWhCOEIsZ0JBbUIxQixNQUFNLE9BQU4sS0FBa0IsYUFBbEIsSUFBbUMsS0FBSyxHQUFMLENBQVMsTUFBTSxRQUFOLENBQVQsSUFBNEIsTUFBTSxTQUFOLEVBQWlCO0FBQ2hGLHVCQUFLLFVBQUwsR0FBa0IsSUFBbEIsQ0FEZ0Y7YUFBcEY7U0FuQmMsQ0FBbEIsQ0FIbUM7OztBQVB0QixzQkFtQ2pCLG1DQUFhO0FBQ1QsWUFBSSxLQUFLLE9BQUwsRUFBYztBQUNkLGlCQUFLLGNBQUwsR0FBc0IsS0FBSyxVQUFMLEdBQWtCLENBQWxCLEdBQXNCLEtBQUssY0FBTCxHQUFzQixDQUF0QixDQUQ5Qjs7QUFHZCxnQkFBSSxLQUFLLGNBQUwsSUFBdUIsS0FBSyxpQkFBTCxFQUF3QjtBQUMvQyxxQkFBSyxJQUFMLEdBRCtDO2FBQW5EO1NBSEo7Ozs7Ozs7O0FBcENhLHNCQWtEakIsNkNBQWtCO0FBQ2QsNEJBQ08sa0JBQU0sZUFBTjtBQUNILHFCQUFTLElBQVQ7QUFDQSwrQkFBbUIsQ0FBbkI7VUFISixDQURjOzs7Ozs7OztBQWxERCxzQkErRGpCLDZDQUFrQjtBQUNkLDRCQUNPLGtCQUFNLGVBQU47QUFDSCxtQkFBTyxDQUFQO0FBQ0Esb0JBQVEsQ0FBUjtBQUNBLG9CQUFRLENBQVI7QUFDQSx1QkFBVyxNQUFYO0FBQ0Esc0JBQVUsQ0FBVjtVQU5KLENBRGM7Ozs7Ozs7OztBQS9ERCxzQkFnRmpCLHFEQUFzQjtBQUNsQixlQUFPLFVBQVAsQ0FEa0I7OztXQWhGTCIsImZpbGUiOiJQaHlzaWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgeyBzcGVlZFBlckZyYW1lLCBzcGVlZFBlclNlY29uZCB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGVhY2gsIGlzTnVtIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGh5c2ljcyBleHRlbmRzIEFjdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcbiAgICB9XG5cbiAgICBvblVwZGF0ZShwaHlzaWNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uXG4gICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBzcGVlZFBlckZyYW1lKHZhbHVlLmZvcmNlLCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9ICgxIC0gdmFsdWUuZnJpY3Rpb24pICoqIChlbGFwc2VkIC8gMTApO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBzcHJpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zcHJpbmcgJiYgaXNOdW0odmFsdWUudG8pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VUb1RhcmdldCA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogc3BlZWRQZXJGcmFtZSh2YWx1ZS5zcHJpbmcsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBseSBsYXRlc3QgdmVsb2NpdHlcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgKz0gc3BlZWRQZXJGcmFtZSh2YWx1ZS52ZWxvY2l0eSwgZWxhcHNlZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUuY3VycmVudCAhPT0gcHJldmlvdXNWYWx1ZSB8fCBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b0VuZCkge1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IHRoaXMuaGFzQ2hhbmdlZCA/IDEgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSBwcm9wc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRQcm9wcygpLFxuICAgICAgICAgICAgYXV0b0VuZDogdHJ1ZSxcbiAgICAgICAgICAgIG1heEluYWN0aXZlRnJhbWVzOiAzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSB2YWx1ZSBwcm9wc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRWYWx1ZSgpLFxuICAgICAgICAgICAgZm9yY2U6IDAsIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIGJvdW5jZTogMCwgLy8gW251bWJlcl06IEZhY3RvciB0byBtdWx0aXBseSB2ZWxvY2l0eSBieSBvbiBib3VuY2VcbiAgICAgICAgICAgIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICAgICAgICAgIHN0b3BTcGVlZDogMC4wMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdmFsdWVzIHRvIHRoaXMgd2hlbiBhIGB2YWx1ZWAgaXMgbm90IHByb3ZpZGVkIGFzIGFuIG9iamVjdFxuXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndmVsb2NpdHknO1xuICAgIH1cbn1cbiJdfQ==
return exports;
})());

var _Physics3 = _interopRequireDefault(_Physics2);

var _Track2 = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _Action2 = __small$_3;

var _Action3 = _interopRequireDefault(_Action2);

var _Mouse = __small$_8;

var _Mouse2 = _interopRequireDefault(_Mouse);

var _Touch = __small$_9;

var _Touch2 = _interopRequireDefault(_Touch);

var _calc = __small$_13;

var _utils = __small$_14;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createPointer = function (e) {
    return e.touches ? new _Touch2.default(e) : new _Mouse2.default(e);
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

    Track.prototype.onUpdate = function onUpdate(track, frameDuration, elapsed) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNLGdCQUFnQixVQUFDLENBQUQ7V0FBTyxFQUFFLE9BQUYsR0FBWSxvQkFBVSxDQUFWLENBQVosR0FBMkIsb0JBQVUsQ0FBVixDQUEzQjtDQUFQO0FBQ3RCLElBQU0saUJBQWlCLFVBQUMsQ0FBRDtXQUFPLEVBQUUsYUFBRixJQUFtQixDQUFuQjtDQUFQOztJQUVGOzs7QUFDakIsYUFEaUIsS0FDakIsQ0FBWSxLQUFaLEVBQW1CLEtBQW5CLEVBQTBCOzhCQURULE9BQ1M7O3FEQUN0QixtQkFBTSxLQUFOLEdBRHNCOztBQUV0QixjQUFLLEtBQUwsR0FBYSxNQUFNLEtBQU4sR0FBYyxLQUFkLEdBQXNCLGNBQWMsZUFBZSxLQUFmLENBQWQsQ0FBdEIsQ0FGUzs7S0FBMUI7O0FBRGlCLG9CQU1qQix5QkFBUTtBQUNKLDBCQUFNLEtBQU4sWUFESTtBQUVKLGFBQUssV0FBTCxHQUFtQixFQUFuQixDQUZJOzs7QUFOUyxvQkFXakIsNkJBQVMsT0FBTyxlQUFlLFNBQVM7OztBQUNwQyxhQUFLLFdBQUwsR0FBbUIsVUFsQmxCLE9Ba0JrQixDQUFPLEtBQUssV0FBTCxFQUFrQixLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQTVDLENBRG9DOztBQUdwQyxtQkFuQkMsS0FtQkQsQ0FBSyxLQUFLLE1BQUwsRUFBYSxVQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWdCO0FBQzlCLGdCQUFJLE9BQUssV0FBTCxDQUFpQixjQUFqQixDQUFnQyxHQUFoQyxDQUFKLEVBQTBDO0FBQ3RDLG9CQUFJLE1BQU0sTUFBTixFQUFjO0FBQ2QsMEJBQU0sT0FBTixHQUFnQixPQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLEdBQWpCLENBQWhCLENBRGM7aUJBQWxCLE1BRU87QUFDSCwwQkFBTSxPQUFOLEdBQWdCLE1BQU0sTUFBTixHQUFlLE9BQUssV0FBTCxDQUFpQixHQUFqQixDQUFmLENBRGI7aUJBRlA7YUFESjtTQURjLENBQWxCLENBSG9DOzs7QUFYdkIsb0JBeUJqQiw2Q0FBa0I7QUFDZCxlQUFPO0FBQ0gsaUJBQUssQ0FBTDtBQUNBLHVCQUFXLENBQVg7QUFDQSxvQkFBUSxLQUFSO0FBQ0Esb0JBQVEsQ0FBUjtTQUpKLENBRGM7OztXQXpCRCIsImZpbGUiOiJUcmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IE1vdXNlIGZyb20gJy4uL2lucHV0L01vdXNlJztcbmltcG9ydCBUb3VjaCBmcm9tICcuLi9pbnB1dC9Ub3VjaCc7XG5pbXBvcnQgeyBvZmZzZXQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgY3JlYXRlUG9pbnRlciA9IChlKSA9PiBlLnRvdWNoZXMgPyBuZXcgVG91Y2goZSkgOiBuZXcgTW91c2UoZSk7XG5jb25zdCBnZXRBY3R1YWxFdmVudCA9IChlKSA9PiBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBpbnB1dCkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dC5zdGF0ZSA/IGlucHV0IDogY3JlYXRlUG9pbnRlcihnZXRBY3R1YWxFdmVudChpbnB1dCkpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICB0aGlzLmlucHV0T3JpZ2luID0ge307XG4gICAgfVxuXG4gICAgb25VcGRhdGUodHJhY2ssIGZyYW1lRHVyYXRpb24sIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9IG9mZnNldCh0aGlzLmlucHV0T3JpZ2luLCB0aGlzLmlucHV0LnN0YXRlKTtcblxuICAgICAgICBlYWNoKHRoaXMudmFsdWVzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5kaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHRoaXMuaW5wdXQuc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUub3JpZ2luICsgdGhpcy5pbnB1dE9mZnNldFtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYW1wOiAxLFxuICAgICAgICAgICAgZXNjYXBlQW1wOiAwLFxuICAgICAgICAgICAgZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIHNtb290aDogMFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==
return exports;
})());

var _Track3 = _interopRequireDefault(_Track2);

var _Input2 = __small$_7;

var _Input3 = _interopRequireDefault(_Input2);

var _Mouse2 = __small$_8;

var _Mouse3 = _interopRequireDefault(_Mouse2);

var _Touch2 = __small$_9;

var _Touch3 = _interopRequireDefault(_Touch2);

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

var _css = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _stateMap = __small$_18;

var _stateMap2 = _interopRequireDefault(_stateMap);

var _valueTypeMap = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _angle = ((function() {
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
})());

var _angle2 = _interopRequireDefault(_angle);

var _alpha = __small$_27;

var _alpha2 = _interopRequireDefault(_alpha);

var _axes = __small$_28;

var _axes2 = _interopRequireDefault(_axes);

var _color = __small$_29;

var _color2 = _interopRequireDefault(_color);

var _scale = __small$_30;

var _scale2 = _interopRequireDefault(_scale);

var _shadow = ((function() {
var exports = {};
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _color = __small$_29;

var _color2 = _interopRequireDefault(_color);

var _px = __small$_33;

var _dictionary = __small$_38;

var _utils = __small$_14;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shadowWithoutColorTerms = _dictionary.shadow.split(0, 4);

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
            if (hasReachedColor || _color2.default.test(thisBit)) {
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

    combine: function (value) {
        return createDelimited(values, shadowWithoutColorTerms, ' ') + _color2.default.combine(values);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSwwQkFBMEIsWUFIdkIsTUFHdUIsQ0FBWSxLQUFaLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLENBQTFCOztrQkFFUztBQUNYLCtCQUNPLGdCQUFNLFlBQU47QUFDSCxlQVRDLFlBU0Q7QUFDQSxlQVZDLFlBVUQ7QUFDQSxvQkFYQyxZQVdEO0FBQ0Esb0JBWkMsWUFZRDtNQUxKOztBQVFBLFdBQU8sVUFBQyxLQUFELEVBQVc7QUFDZCxZQUFNLE9BQU8sV0FkWixvQkFjWSxDQUFvQixLQUFwQixDQUFQLENBRFE7QUFFZCxZQUFJLGtCQUFrQixLQUFsQixDQUZVO0FBR2QsWUFBSSxZQUFZLEVBQVosQ0FIVTtBQUlkLFlBQUksYUFBYSxFQUFiLENBSlU7O0FBTWQsYUFBSyxPQUFMLENBQWEsVUFBQyxHQUFELEVBQU0sQ0FBTixFQUFZOztBQUVyQixnQkFBSSxtQkFBbUIsZ0JBQU0sSUFBTixDQUFXLE9BQVgsQ0FBbkIsRUFBd0M7QUFDeEMsa0NBQWtCLElBQWxCLENBRHdDO0FBRXhDLDZCQUFhLEdBQWI7OztBQUZ3QyxhQUE1QyxNQUtPO0FBQ0gsK0JBQVcsWUE1QmxCLE1BNEJrQixDQUFZLENBQVosQ0FBWCxJQUE2QixHQUE3QixDQURHO2lCQUxQO1NBRlMsQ0FBYixDQU5jOztBQWtCZCxZQUFNLGtCQUFrQixnQkFBTSxLQUFOLENBQVksU0FBWixDQUFsQixDQWxCUTs7QUFvQmQsNEJBQVksY0FBWSxtQ0FBeEIsQ0FwQmM7S0FBWDs7QUF1QlAsYUFBUyxVQUFDLEtBQUQ7ZUFBVyxnQkFBZ0IsTUFBaEIsRUFBd0IsdUJBQXhCLEVBQWlELEdBQWpELElBQXdELGdCQUFNLE9BQU4sQ0FBYyxNQUFkLENBQXhEO0tBQVgiLCJmaWxlIjoic2hhZG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9yIGZyb20gJy4vY29sb3InO1xuaW1wb3J0IHsgZGVmYXVsdFByb3BzIGFzIHB4RGVmYXVsdFByb3BzIH0gZnJvbSAnLi9weCc7XG5pbXBvcnQgeyBzaGFkb3cgYXMgc2hhZG93VGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgc3BsaXRTcGFjZURlbGltaXRlZCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNvbnN0IHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zID0gc2hhZG93VGVybXMuc3BsaXQoMCwgNCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgLi4uY29sb3IuZGVmYXVsdFByb3BzLFxuICAgICAgICBYOiBweERlZmF1bHRQcm9wcyxcbiAgICAgICAgWTogcHhEZWZhdWx0UHJvcHMsXG4gICAgICAgIFJhZGl1czogcHhEZWZhdWx0UHJvcHMsXG4gICAgICAgIFNwcmVhZDogcHhEZWZhdWx0UHJvcHNcbiAgICB9LFxuXG4gICAgc3BsaXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBiaXRzID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSk7XG4gICAgICAgIGxldCBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvbG9yUHJvcCA9ICcnO1xuICAgICAgICBsZXQgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGJpdHMuZm9yRWFjaCgoYml0LCBpKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wcywgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBjb2xvci50ZXN0KHRoaXNCaXQpKSB7XG4gICAgICAgICAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb2xvclByb3AgKz0gYml0O1xuXG4gICAgICAgICAgICAvLyBFbHNlIHByb2Nlc3Mgc2hhZG93IHZhbHVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVbc2hhZG93VGVybXNbaV1dID0gYml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzcGxpdENvbG9yUHJvcHMgPSBjb2xvci5zcGxpdChjb2xvclByb3ApO1xuXG4gICAgICAgIHJldHVybiB7IC4uLnNwbGl0VmFsdWUsIHNwbGl0Q29sb3JQcm9wcyB9O1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWUpID0+IGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zLCAnICcpICsgY29sb3IuY29tYmluZSh2YWx1ZXMpXG59O1xuIl19
return exports;
})());

var _shadow2 = _interopRequireDefault(_shadow);

var _positions = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _dictionary = __small$_38;

var _utils = __small$_14;

var _px = __small$_33;

var _px2 = _interopRequireDefault(_px);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    defaultProps: _px2.default.defaultProps,

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
        var splitValue = {};
        var splitPositions = (0, _utils.splitSpaceDelimited)(value);
        var numPositions = splitPositions.length;
        var jumpBack = numDimensions !== 1 ? 2 : 1;
        var j = 0;

        for (var i = 0; i < 4; i++) {
            splitValue[_dictionary.positions[i]] = splitPositions[j];

            // Jump back (to start) counter if we've reached the end of our values
            j++;
            j = j === numDimensions ? j - jumpBack : j;
        }

        return splitValue;
    },

    combine: function (values) {
        return (0, _utils.createDelimited)(values, _dictionary.positions, ' ');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7a0JBSWU7QUFDWCxrQkFBYyxhQUFZLFlBQVo7Ozs7Ozs7Ozs7Ozs7QUFhZCxXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBTSxhQUFhLEVBQWIsQ0FEUTtBQUVkLFlBQU0saUJBQWlCLFdBbkJMLG9CQW1CSyxDQUFvQixLQUFwQixDQUFqQixDQUZRO0FBR2QsWUFBTSxlQUFlLGVBQWUsTUFBZixDQUhQO0FBSWQsWUFBTSxXQUFXLGFBQUMsS0FBa0IsQ0FBbEIsR0FBdUIsQ0FBeEIsR0FBNEIsQ0FBNUIsQ0FKSDtBQUtkLFlBQUksSUFBSSxDQUFKLENBTFU7O0FBT2QsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksQ0FBSixFQUFPLEdBQXZCLEVBQTRCO0FBQ3hCLHVCQUFXLFlBMUJkLFNBMEJjLENBQVUsQ0FBVixDQUFYLElBQTJCLGVBQWUsQ0FBZixDQUEzQjs7O0FBRHdCLGFBSXhCLEdBSndCO0FBS3hCLGdCQUFJLENBQUMsS0FBTSxhQUFOLEdBQXVCLElBQUksUUFBSixHQUFlLENBQXZDLENBTG9CO1NBQTVCOztBQVFBLGVBQU8sVUFBUCxDQWZjO0tBQVg7O0FBa0JQLGFBQVMsVUFBQyxNQUFEO2VBQVksV0FuQ2hCLGdCQW1DZ0IsQ0FBZ0IsTUFBaEIsY0FwQ2hCLFNBb0NnQixFQUFtQyxHQUFuQztLQUFaIiwiZmlsZSI6InBvc2l0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBvc2l0aW9ucyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBjcmVhdGVEZWxpbWl0ZWQsIHNwbGl0U3BhY2VEZWxpbWl0ZWQgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHB4VmFsdWVUeXBlIGZyb20gJy4vcHgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiBweFZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBkaW1lbnNpb25zIGluIGZvcm1hdCBcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IERpbWVuc2lvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHggNDBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCA0MHB4fVxuICAgICAgICAgICAgXCIyMHB4IDAgMzBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4IDBcIiAtPiB7MjBweCwgMCwgMjBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweFwiIC0+IHsyMHB4LCAyMHB4LCAyMHB4LCAyMHB4fVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggVC9SL0IvTCBtZXRyaWNzXG4gICAgKi9cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwbGl0VmFsdWUgPSB7fTtcbiAgICAgICAgY29uc3Qgc3BsaXRQb3NpdGlvbnMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKTtcbiAgICAgICAgY29uc3QgbnVtUG9zaXRpb25zID0gc3BsaXRQb3NpdGlvbnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBqdW1wQmFjayA9IChudW1EaW1lbnNpb25zICE9PSAxKSA/IDIgOiAxO1xuICAgICAgICBsZXQgaiA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbcG9zaXRpb25zW2ldXSA9IHNwbGl0UG9zaXRpb25zW2pdO1xuXG4gICAgICAgICAgICAvLyBKdW1wIGJhY2sgKHRvIHN0YXJ0KSBjb3VudGVyIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiBvdXIgdmFsdWVzXG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBqID0gKGogPT09IG51bURpbWVuc2lvbnMpID8gaiAtIGp1bXBCYWNrIDogajtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBwb3NpdGlvbnMsICcgJylcbn07Il19
return exports;
})());

var _positions2 = _interopRequireDefault(_positions);

var _px = __small$_33;

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

exports.default = prefixer = function (key) {
    return cache[key] || testPrefix(key);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvY3NzL3ByZWZpeGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sUUFBUSxFQUFSO0FBQ04sSUFBTSxXQUFXLENBQUMsUUFBRCxFQUFVLEtBQVYsRUFBZ0IsR0FBaEIsRUFBb0IsSUFBcEIsRUFBMEIsRUFBMUIsQ0FBWDtBQUNOLElBQU0sY0FBYyxTQUFTLE1BQVQ7QUFDcEIsSUFBSSx1QkFBSjs7Ozs7Ozs7QUFRQSxJQUFNLGFBQWEsVUFBQyxHQUFELEVBQVM7QUFDeEIsa0JBQWMsZUFBZSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZixDQURVOztBQUd4QixRQUFJLGtCQUFrQixHQUFsQixNQUEyQixLQUEzQixFQUFrQztBQUNsQyxlQUFPLEtBQVAsQ0FEa0M7S0FBdEMsTUFFTztBQUNILDBCQUFrQixHQUFsQixJQUF5QixLQUF6QixDQURHO0tBRlA7O0FBTUEsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksV0FBSixFQUFpQixHQUFqQyxFQUFzQztBQUNsQyxZQUFJLFNBQVMsU0FBUyxDQUFULENBQVQ7WUFDQSxXQUFXLE1BQUMsS0FBVyxFQUFYLEdBQWlCLEdBQWxCLEdBQXdCLFNBQVMsSUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLFdBQWQsRUFBVCxHQUF1QyxJQUFJLEtBQUosQ0FBVSxDQUFWLENBQXZDLENBRkw7O0FBSWxDLFlBQUksWUFBWSxZQUFZLEtBQVosRUFBbUI7QUFDL0IsOEJBQWtCLEdBQWxCLElBQXlCLFFBQXpCLENBRCtCO1NBQW5DO0tBSko7O0FBU0EsV0FBTyxrQkFBa0IsR0FBbEIsQ0FBUCxDQWxCd0I7Q0FBVDs7a0JBcUJKLFdBQVcsVUFBQyxHQUFEO1dBQVMsTUFBTSxHQUFOLEtBQWMsV0FBVyxHQUFYLENBQWQ7Q0FBVCIsImZpbGUiOiJwcmVmaXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhY2hlID0ge307XG5jb25zdCBwcmVmaXhlcyA9IFsnV2Via2l0JywnTW96JywnTycsJ21zJywgJyddO1xuY29uc3QgbnVtUHJlZml4ZXMgPSBwcmVmaXhlcy5sZW5ndGg7XG5sZXQgdGVzdEVsZW1lbnQ7XG5cbi8qXG4gICAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogU3R5bGUgcHJvcGVydHlcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbmNvbnN0IHRlc3RQcmVmaXggPSAoa2V5KSA9PiB7XG4gICAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGlmIChwcm9wZXJ0eU5hbWVDYWNoZVtrZXldID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHlOYW1lQ2FjaGVba2V5XSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV0sXG4gICAgICAgICAgICBwcmVmaXhlZCA9IChwcmVmaXggPT09ICcnKSA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgICAgICBpZiAocHJlZml4ZWQgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZUNhY2hlW2tleV0gPSBwcmVmaXhlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcHJvcGVydHlOYW1lQ2FjaGVba2V5XTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJlZml4ZXIgPSAoa2V5KSA9PiBjYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTsiXX0=
return exports;
})());

var _prefixer2 = _interopRequireDefault(_prefixer);

var _build = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _utils = __small$_14;

var _transformProps = __small$_34;

var _transformProps2 = _interopRequireDefault(_transformProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TRANSLATE_Z = 'translateZ';

exports.default = buildPropertyString = function (state, disableHardwareAcceleration) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvY3NzL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sY0FBYyxZQUFkOztrQkFFUyxzQkFBc0IsVUFBQyxLQUFELEVBQVEsMkJBQVIsRUFBd0M7QUFDekUsUUFBSSxpQkFBaUIsRUFBakIsQ0FEcUU7QUFFekUsUUFBSSxrQkFBa0IsRUFBbEIsQ0FGcUU7QUFHekUsUUFBSSxnQkFBZ0IsS0FBaEIsQ0FIcUU7O0FBS3pFLGVBVkssS0FVTCxDQUFLLEtBQUwsRUFBWSxVQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWdCO0FBQ3hCLFlBQUkseUJBQWUsR0FBZixDQUFKLEVBQXlCO0FBQ3JCLCtCQUFtQixNQUFNLEdBQU4sR0FBWSxLQUFaLEdBQW9CLElBQXBCLENBREU7QUFFckIsNEJBQWdCLEdBQUMsS0FBUSxXQUFSLEdBQXVCLElBQXhCLEdBQStCLGFBQS9CLENBRks7U0FBekIsTUFJTztBQUNILDhCQUFrQixNQUFNLEdBQU4sR0FBWSxHQUFaLEdBQWtCLEtBQWxCLENBRGY7U0FKUDtLQURRLENBQVosQ0FMeUU7O0FBZXpFLFFBQUksb0JBQW9CLEVBQXBCLEVBQXdCO0FBQ3hCLFlBQUksQ0FBQyxhQUFELElBQWtCLENBQUMsMkJBQUQsRUFBOEI7QUFDaEQsK0JBQW1CLGNBQWMsT0FBZCxDQUQ2QjtTQUFwRDs7QUFJQSwwQkFBa0IsZ0JBQWdCLGVBQWhCLENBTE07S0FBNUI7O0FBUUEsV0FBTyxjQUFQLENBdkJ5RTtDQUF4QyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vdHJhbnNmb3JtLXByb3BzJztcblxuY29uc3QgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkUHJvcGVydHlTdHJpbmcgPSAoc3RhdGUsIGRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikgPT4ge1xuICAgIGxldCBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICAgIGxldCB0cmFuc2Zvcm1TdHJpbmcgPSAnJztcbiAgICBsZXQgdHJhbnNmb3JtSGFzWiA9IGZhbHNlO1xuXG4gICAgZWFjaChzdGF0ZSwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBrZXkgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgICAgICAgICB0cmFuc2Zvcm1IYXNaID0gKGtleSA9PT0gVFJBTlNMQVRFX1opID8gdHJ1ZSA6IHRyYW5zZm9ybUhhc1o7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIGtleSArICc6JyArIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodHJhbnNmb3JtU3RyaW5nICE9PSAnJykge1xuICAgICAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgIWRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IFRSQU5TTEFURV9aICsgJygwcHgpJztcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7dHJhbnNmb3JtOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufSAiXX0=
return exports;
})());

var _build2 = _interopRequireDefault(_build);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Render CSS to provided element

    @param { DOMElement, Object }
*/
function renderCSS(_ref) {
    var element = _ref.element;
    var state = _ref.state;

    element.style.cssText += ';' + (0, _build2.default)(state);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXIvY3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLFNBQVMsU0FBVCxPQUF1QztRQUFsQix1QkFBa0I7UUFBVCxtQkFBUzs7QUFDbkMsWUFBUSxLQUFSLENBQWMsT0FBZCxJQUF5QixNQUFNLHFCQUFvQixLQUFwQixDQUFOLENBRFU7Q0FBdkM7Ozs7Ozs7OztBQVdBLFVBQVUsR0FBVixHQUFnQixVQUFDLE9BQUQsRUFBVSxHQUFWLEVBQWtCO0FBQzlCLFVBQU0sd0JBQVMsR0FBVCxDQUFOLENBRDhCOztBQUc5QixRQUFJLEdBQUosRUFBUztBQUNMLGVBQU8sT0FBTyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxJQUFqQyxFQUF1QyxHQUF2QyxDQUFQLENBREs7S0FBVDtDQUhZOztBQVFoQixVQUFVLFFBQVY7QUFDQSxVQUFVLFlBQVY7O2tCQUVlIiwiZmlsZSI6ImNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL2Nzcy92YWx1ZS10eXBlLW1hcCc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9jc3MvcHJlZml4ZXInO1xuaW1wb3J0IGJ1aWxkUHJvcGVydHlTdHJpbmcgZnJvbSAnLi9jc3MvYnVpbGQnO1xuXG4vKlxuICAgIFJlbmRlciBDU1MgdG8gcHJvdmlkZWQgZWxlbWVudFxuXG4gICAgQHBhcmFtIHsgRE9NRWxlbWVudCwgT2JqZWN0IH1cbiovXG5mdW5jdGlvbiByZW5kZXJDU1MoeyBlbGVtZW50LCBzdGF0ZSB9KSB7XG4gICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9ICc7JyArIGJ1aWxkUHJvcGVydHlTdHJpbmcoc3RhdGUpO1xufTtcblxuLypcbiAgICBHZXQgQ1NTIHByb3BlcnR5IG9mIGVsZW1lbnRcblxuICAgIEBwYXJhbSBbRE9NRWxlbWVudF1cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFt2YXJdXG4qL1xucmVuZGVyQ1NTLmdldCA9IChlbGVtZW50LCBrZXkpID0+IHtcbiAgICBrZXkgPSBwcmVmaXhlcihrZXkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClba2V5XTtcbiAgICB9XG59XG5cbnJlbmRlckNTUy5zdGF0ZU1hcCA9IHN0YXRlTWFwO1xucmVuZGVyQ1NTLnZhbHVlVHlwZU1hcCA9IHZhbHVlVHlwZU1hcDtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ1NTOyJdfQ==
return exports;
})());

var _css2 = _interopRequireDefault(_css);

var _svg = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _utils = __small$_14;

var _stateMap = __small$_18;

var _stateMap2 = _interopRequireDefault(_stateMap);

var _valueTypeMap = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;

var _alpha = __small$_27;

var _alpha2 = _interopRequireDefault(_alpha);

var _axes = __small$_28;

var _axes2 = _interopRequireDefault(_axes);

var _color = __small$_29;

var _color2 = _interopRequireDefault(_color);

var _complex = ((function() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLElBQU0sY0FBYyxrQkFBZDtBQUNOLElBQU0sZ0JBQWdCLFVBQUMsS0FBRDtXQUFXLE9BQU8sS0FBUCxHQUFlLEdBQWY7Q0FBWDs7a0JBRVA7O0FBRVgsVUFBTSxVQUFDLEtBQUQsRUFBVztBQUNiLFlBQU0sVUFBVSxNQUFNLEtBQU4sQ0FBWSxXQUFaLENBQVYsQ0FETztBQUViLGVBQVEsV0FURCxRQVNDLENBQVEsT0FBUixLQUFvQixRQUFRLE1BQVIsR0FBaUIsQ0FBakIsQ0FGZjtLQUFYOztBQUtOLGNBQVUsVUFBQyxLQUFELEVBQVc7QUFDakIsWUFBSSxVQUFVLENBQVYsQ0FEYTtBQUVqQixlQUFPLE1BQU0sT0FBTixDQUFjLFdBQWQsRUFBMkI7bUJBQU0sY0FBYyxTQUFkO1NBQU4sQ0FBbEMsQ0FGaUI7S0FBWDs7QUFLVixXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBTSxhQUFhLEVBQWIsQ0FEUTs7QUFHZCxjQUFNLEtBQU4sQ0FBWSxXQUFaLEVBQXlCLE9BQXpCLENBQWlDLFVBQUMsS0FBRCxFQUFRLENBQVI7bUJBQWMsV0FBVyxDQUFYLElBQWdCLEtBQWhCO1NBQWQsQ0FBakMsQ0FIYzs7QUFLZCxlQUFPLFVBQVAsQ0FMYztLQUFYOztBQVFQLGFBQVMsVUFBQyxNQUFELEVBQVMsUUFBVCxFQUFzQjtBQUMzQixtQkExQkMsS0EwQkQsQ0FBSyxNQUFMLEVBQWEsVUFBQyxLQUFELEVBQVEsR0FBUjttQkFBZ0IsV0FBVyxTQUFTLE9BQVQsQ0FBaUIsY0FBYyxHQUFkLENBQWpCLEVBQXFDLEtBQXJDLENBQVg7U0FBaEIsQ0FBYixDQUQyQjtBQUUzQixlQUFPLFFBQVAsQ0FGMkI7S0FBdEIiLCJmaWxlIjoiY29tcGxleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2gsIGlzQXJyYXkgfSBmcm9tIFwiLi4vaW5jL3V0aWxzXCI7XG5cbmNvbnN0IEZMT0FUX1JFR0VYID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xuY29uc3QgZ2VuZXJhdGVUb2tlbiA9ICh0b2tlbikgPT4gJyR7JyArIHRva2VuICsgJ30nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICB0ZXN0OiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKTtcbiAgICAgICAgcmV0dXJuIChpc0FycmF5KG1hdGNoZXMpICYmIG1hdGNoZXMubGVuZ3RoID4gMSk7XG4gICAgfSxcblxuICAgIHRlbXBsYXRlOiAodmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShGTE9BVF9SRUdFWCwgKCkgPT4gZ2VuZXJhdGVUb2tlbihjb3VudGVyKyspKTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzcGxpdFZhbHVlID0ge307XG4gICAgICAgIFxuICAgICAgICB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCkuZm9yRWFjaCgodmFsdWUsIGkpID0+IHNwbGl0VmFsdWVbaV0gPSB2YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMsIHRlbXBsYXRlKSA9PiB7XG4gICAgICAgIGVhY2godmFsdWVzLCAodmFsdWUsIGtleSkgPT4gdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKGdlbmVyYXRlVG9rZW4oa2V5KSwgdmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cblxufTsiXX0=
return exports;
})());

var _complex2 = _interopRequireDefault(_complex);

var _scale = __small$_30;

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
})());

var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);

var _build = ((function() {
var exports = {};
'use strict';

exports.__esModule = true;
exports.default = build;

var _utils = __small$_14;

var _transformProps = __small$_34;

var _transformProps2 = _interopRequireDefault(_transformProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZERO_NOT_ZERO = 0.0001;

function build(state, origin) {
    var props = {},
        hasTransform = false,
        scale = state.scale !== undefined ? state.scale || zeroNotZero : state.scaleX || 1,
        scaleY = state.scaleY !== undefined ? state.scaleY || zeroNotZero : scale || 1,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXIvc3ZnL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFLd0I7Ozs7Ozs7Ozs7QUFGeEIsSUFBTSxnQkFBZ0IsTUFBaEI7O0FBRVMsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQixNQUF0QixFQUE4QjtBQUN6QyxRQUFJLFFBQVEsRUFBUjtRQUNBLGVBQWUsS0FBZjtRQUNBLFFBQVEsTUFBTSxLQUFOLEtBQWdCLFNBQWhCLEdBQTRCLE1BQU0sS0FBTixJQUFlLFdBQWYsR0FBNkIsTUFBTSxNQUFOLElBQWdCLENBQWhCO1FBQ2pFLFNBQVMsTUFBTSxNQUFOLEtBQWlCLFNBQWpCLEdBQTZCLE1BQU0sTUFBTixJQUFnQixXQUFoQixHQUE4QixTQUFTLENBQVQ7UUFDcEUsbUJBQW1CLE9BQU8sQ0FBUDtRQUNuQixtQkFBbUIsT0FBTyxDQUFQO1FBQ25CLGtCQUFrQixDQUFFLGdCQUFGLElBQXNCLFFBQVEsQ0FBUixDQUF0QjtRQUNsQixrQkFBa0IsQ0FBRSxnQkFBRixJQUFzQixTQUFTLENBQVQsQ0FBdEI7UUFDbEIsZ0JBQWdCLG1CQUFtQixLQUFuQjtRQUNoQixnQkFBZ0IsbUJBQW1CLE1BQW5CO1FBQ2hCLFlBQVk7QUFDUixrQ0FBd0IsTUFBTSxVQUFOLFVBQXFCLE1BQU0sVUFBTixPQUE3QztBQUNBLDhCQUFvQix5QkFBb0IsK0JBQTBCLGVBQVUsMEJBQXFCLHVCQUFrQixvQkFBbkg7QUFDQSw0QkFBa0IsTUFBTSxNQUFOLFVBQWlCLDBCQUFxQix1QkFBeEQ7QUFDQSwwQkFBZ0IsTUFBTSxLQUFOLE9BQWhCO0FBQ0EsMEJBQWdCLE1BQU0sS0FBTixPQUFoQjtLQUxKLENBWHFDOztBQW1CekMsZUF4QkssS0F3QkwsQ0FBSyxLQUFMLEVBQVksVUFBQyxHQUFELEVBQU0sS0FBTixFQUFnQjtBQUN4QixZQUFJLHlCQUFlLEdBQWYsQ0FBSixFQUF5QjtBQUNyQiwyQkFBZSxJQUFmLENBRHFCO1NBQXpCLE1BRU87QUFDSCxrQkFBTSxXQTVCSCxZQTRCRyxDQUFZLEdBQVosQ0FBTixJQUEwQixLQUExQixDQURHO1NBRlA7S0FEUSxDQUFaLENBbkJ5Qzs7QUEyQnpDLFFBQUksWUFBSixFQUFrQjtBQUNkLGNBQU0sU0FBTixHQUFrQixFQUFsQixDQURjOztBQUdkLG1CQW5DQyxLQW1DRCxDQUFLLFNBQUwsRUFBZ0IsVUFBQyxHQUFELEVBQU0sS0FBTixFQUFnQjtBQUM1QixnQkFBSSxlQUFlLEdBQUMsS0FBUSxPQUFSLEdBQW1CLEdBQXBCLEdBQTBCLEdBQTFCLENBRFM7QUFFNUIsa0JBQU0sU0FBTixJQUFtQixNQUFNLE9BQU4sQ0FBYyxZQUFkLEVBQTRCLFlBQTVCLENBQW5CLENBRjRCO1NBQWhCLENBQWhCLENBSGM7S0FBbEI7O0FBU0EsV0FBTyxLQUFQLENBcEN5QztDQUE5QiIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2gsIGNhbWVsVG9EYXNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJztcblxuY29uc3QgWkVST19OT1RfWkVSTyA9IDAuMDAwMTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGQoc3RhdGUsIG9yaWdpbikge1xuICAgIGxldCBwcm9wcyA9IHt9LFxuICAgICAgICBoYXNUcmFuc2Zvcm0gPSBmYWxzZSxcbiAgICAgICAgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgemVyb05vdFplcm8gOiBzdGF0ZS5zY2FsZVggfHwgMSxcbiAgICAgICAgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgemVyb05vdFplcm8gOiBzY2FsZSB8fCAxLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5YID0gb3JpZ2luLngsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblkgPSBvcmlnaW4ueSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1YID0gLSB0cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSksXG4gICAgICAgIHNjYWxlVHJhbnNmb3JtWSA9IC0gdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKSxcbiAgICAgICAgc2NhbGVSZXBsYWNlWCA9IHRyYW5zZm9ybU9yaWdpblggLyBzY2FsZSxcbiAgICAgICAgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVksXG4gICAgICAgIHRyYW5zZm9ybSA9IHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogYHRyYW5zbGF0ZSgke3N0YXRlLnRyYW5zbGF0ZVh9LCAke3N0YXRlLnRyYW5zbGF0ZVl9KSBgLFxuICAgICAgICAgICAgc2NhbGU6IGB0cmFuc2xhdGUoJHtzY2FsZVRyYW5zZm9ybVh9LCAke3NjYWxlVHJhbnNmb3JtWX0pIHNjYWxlKCR7c2NhbGV9LCAke3NjYWxlWX0pIHRyYW5zbGF0ZSgke3NjYWxlUmVwbGFjZVh9LCAke3NjYWxlUmVwbGFjZVl9KSBgLFxuICAgICAgICAgICAgcm90YXRlOiBgcm90YXRlKCR7c3RhdGUucm90YXRlfSwgJHt0cmFuc2Zvcm1PcmlnaW5YfSwgJHt0cmFuc2Zvcm1PcmlnaW5ZfSkgYCxcbiAgICAgICAgICAgIHNrZXdYOiBgc2tld1goJHtzdGF0ZS5za2V3WH0pIGAsXG4gICAgICAgICAgICBza2V3WTogYHNrZXdZKCR7c3RhdGUuc2tld1l9KSBgXG4gICAgICAgIH07XG5cbiAgICBlYWNoKHN0YXRlLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzW2NhbWVsVG9EYXNoKGtleSldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICAgICAgZWFjaCh0cmFuc2Zvcm0sIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gKGtleSA9PT0gJ3NjYWxlJykgPyAnMScgOiAnMCc7XG4gICAgICAgICAgICBwcm9wcy50cmFuc2Zvcm0gKz0gdmFsdWUucmVwbGFjZSgvdW5kZWZpbmVkL2csIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wcztcbn0iXX0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXIvc3ZnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsU0FBUyxTQUFULE9BQWtEO1FBQTdCLG1CQUE2QjtRQUF0Qix1QkFBc0I7UUFBYiwyQkFBYTs7QUFDOUMsZUFOSyxLQU1MLENBQUsscUJBQU0sS0FBTixFQUFhLFNBQWIsQ0FBTCxFQUE4QixVQUFDLEtBQUQsRUFBUSxHQUFSO2VBQWdCLFFBQVEsWUFBUixDQUFxQixHQUFyQixFQUEwQixLQUExQjtLQUFoQixDQUE5QixDQUQ4QztDQUFsRDs7QUFJQSxVQUFVLElBQVYsR0FBaUIsVUFBQyxLQUFELEVBQVc7QUFDeEIsUUFBTSxPQUFPLE1BQU0sT0FBTixDQUFjLE9BQWQsRUFBUCxDQURrQjtBQUV4QixRQUFNLG1CQUFtQixNQUFNLE1BQU4sQ0FBYSxnQkFBYixHQUFnQyxNQUFNLE1BQU4sQ0FBYSxnQkFBYixDQUE4QixPQUE5QixHQUF3QyxFQUF4RSxDQUZEO0FBR3hCLFFBQU0sbUJBQW1CLE1BQU0sTUFBTixDQUFhLGdCQUFiLEdBQWdDLE1BQU0sTUFBTixDQUFhLGdCQUFiLENBQThCLE9BQTlCLEdBQXdDLEVBQXhFLENBSEQ7O0FBS3hCLFVBQU0sU0FBTixHQUFrQjtBQUNkLFdBQUcsS0FBSyxLQUFMLElBQWMsbUJBQW1CLEdBQW5CLENBQWQsR0FBd0MsS0FBSyxDQUFMO0FBQzNDLFdBQUcsS0FBSyxNQUFMLElBQWUsbUJBQW1CLEdBQW5CLENBQWYsR0FBeUMsS0FBSyxDQUFMO0tBRmhELENBTHdCO0NBQVg7O0FBV2pCLFVBQVUsUUFBVjtBQUNBLFVBQVUsWUFBVjs7a0JBRWUiLCJmaWxlIjoic3ZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9zdmcvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IGJ1aWxkIGZyb20gJy4vc3ZnL2J1aWxkJztcblxuZnVuY3Rpb24gcmVuZGVyU1ZHKHsgc3RhdGUsIGVsZW1lbnQsIHN2Z09yaWdpbiB9KSB7XG4gICAgZWFjaChidWlsZChzdGF0ZSwgc3ZnT3JpZ2luKSwgKHZhbHVlLCBrZXkpID0+IGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpKTtcbn1cblxucmVuZGVyU1ZHLmluaXQgPSAoYWN0b3IpID0+IHtcbiAgICBjb25zdCBiQm94ID0gYWN0b3IuZWxlbWVudC5nZXRCQm94KCk7XG4gICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luWCA9IGFjdG9yLnZhbHVlcy50cmFuc2Zvcm1PcmlnaW5YID8gYWN0b3IudmFsdWVzLnRyYW5zZm9ybU9yaWdpblguY3VycmVudCA6IDUwO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpblkgPSBhY3Rvci52YWx1ZXMudHJhbnNmb3JtT3JpZ2luWSA/IGFjdG9yLnZhbHVlcy50cmFuc2Zvcm1PcmlnaW5ZLmN1cnJlbnQgOiA1MDtcblxuICAgIGFjdG9yLnN2Z09yaWdpbiA9IHtcbiAgICAgICAgeDogYkJveC53aWR0aCAqICh0cmFuc2Zvcm1PcmlnaW5YIC8gMTAwKSArIGJCb3gueCxcbiAgICAgICAgeTogYkJveC5oZWlnaHQgKiAodHJhbnNmb3JtT3JpZ2luWSAvIDEwMCkgKyBiQm94LnlcbiAgICB9O1xufVxuXG5yZW5kZXJTVkcuc3RhdGVNYXAgPSBzdGF0ZU1hcDtcbnJlbmRlclNWRy52YWx1ZVR5cGVNYXAgPSB2YWx1ZVR5cGVNYXA7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclNWRzsiXX0=
return exports;
})());

var _svg2 = _interopRequireDefault(_svg);

var _calc2 = __small$_13;

var _calc = _interopRequireWildcard(_calc2);

var _utils2 = __small$_14;

var _utils = _interopRequireWildcard(_utils2);

var _timer = __small$_15;

var _timer2 = _interopRequireDefault(_timer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Actor = _Actor3.default;

// Actions
// Actor

exports.Action = _Action3.default;
exports.Tween = _Tween3.default;
exports.Physics = _Physics3.default;
exports.Track = _Track3.default;

// Input

exports.Input = _Input3.default;
exports.Mouse = _Mouse3.default;
exports.Touch = _Touch3.default;

// Renderers

exports.renderAttr = _attr2.default;
exports.renderCSS = _css2.default;
exports.renderSVG = _svg2.default;

// Utils

exports.calc = _calc;
exports.utils = _utils;
exports.setDilation = _timer2.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFDTzs7Ozs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7OztRQUdBO1FBQ0E7UUFDQTs7OztRQUdBO1FBQ0E7UUFDQTs7OztRQUdLO1FBQ0E7UUFDTCIsImZpbGUiOiJwb3Btb3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBY3RvclxuZXhwb3J0IEFjdG9yIGZyb20gJy4vYWN0b3IvQWN0b3InO1xuXG4vLyBBY3Rpb25zXG5leHBvcnQgQWN0aW9uIGZyb20gJy4vYWN0aW9ucy9BY3Rpb24nO1xuZXhwb3J0IFR3ZWVuIGZyb20gJy4vYWN0aW9ucy9Ud2Vlbic7XG5leHBvcnQgUGh5c2ljcyBmcm9tICcuL2FjdGlvbnMvUGh5c2ljcyc7XG5leHBvcnQgVHJhY2sgZnJvbSAnLi9hY3Rpb25zL1RyYWNrJztcblxuLy8gSW5wdXRcbmV4cG9ydCBJbnB1dCBmcm9tICcuL2lucHV0L0lucHV0JztcbmV4cG9ydCBNb3VzZSBmcm9tICcuL2lucHV0L01vdXNlJztcbmV4cG9ydCBUb3VjaCBmcm9tICcuL2lucHV0L1RvdWNoJztcblxuLy8gUmVuZGVyZXJzXG5leHBvcnQgcmVuZGVyQXR0ciBmcm9tICcuL3JlbmRlci9hdHRyJztcbmV4cG9ydCByZW5kZXJDU1MgZnJvbSAnLi9yZW5kZXIvY3NzJztcbmV4cG9ydCByZW5kZXJTVkcgZnJvbSAnLi9yZW5kZXIvc3ZnJztcblxuLy8gVXRpbHNcbmV4cG9ydCAqIGFzIGNhbGMgZnJvbSAnLi9pbmMvY2FsYyc7XG5leHBvcnQgKiBhcyB1dGlscyBmcm9tICcuL2luYy91dGlscyc7XG5leHBvcnQgc2V0RGlsYXRpb24gZnJvbSAnLi9wcm9jZXNzL3RpbWVyJztcbiJdfQ==
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