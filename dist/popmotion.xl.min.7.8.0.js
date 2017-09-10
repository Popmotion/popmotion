/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.splitColorValues = splitColorValues;
var varType = function varType(variable) {
  return Object.prototype.toString.call(variable).slice(8, -1);
};

var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = '$1-$2';

/*
  Convert camelCase to dash-case

  @param [string]
  @return [string]
*/
var camelToDash = exports.camelToDash = function camelToDash(string) {
  return string.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};

var setDOMAttrs = exports.setDOMAttrs = function setDOMAttrs(element, attrs) {
  for (var key in attrs) {
    if (attrs.hasOwnProperty(key)) {
      element.setAttribute(key, attrs[key]);
    }
  }
};
/*
  Split comma-delimited string

  "foo,bar" -> ["foo", "bar"]

  @param [string]
  @return [array]
*/
var splitCommaDelimited = exports.splitCommaDelimited = function splitCommaDelimited(value) {
  return isString(value) ? value.split(/,\s*/) : [value];
};

/**
 *  Returns a function that will check any argument for `term`
 * `contains('needle')('haystack')`
 */
var contains = exports.contains = function contains(term) {
  return function (v) {
    return isString(term) && v.indexOf(term) !== -1;
  };
};

/**
 *  Returns a function that will check to see if an argument is
 *  the first characters in the provided `term`
 * `isFirstChars('needle')('haystack')`
 */
var isFirstChars = exports.isFirstChars = function isFirstChars(term) {
  return function (v) {
    return isString(term) && v.indexOf(term) === 0;
  };
};

/**
 * Create a unit value type
 */
var createUnitType = exports.createUnitType = function createUnitType(type, transform) {
  return {
    test: contains(type),
    parse: parseFloat,
    transform: transform
  };
};

/*
  Get value from function string
  "translateX(20px)" -> "20px"
*/
var getValueFromFunctionString = exports.getValueFromFunctionString = function getValueFromFunctionString(value) {
  return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
};

/**
 * Creates a function that will split color
 * values from string into an object of properties
 * `mapArrayToObject(['red', 'green', 'blue'])('rgba(0,0,0)')`
 */
function splitColorValues(terms) {
  var numTerms = terms.length;

  return function (v) {
    var values = {};
    var valuesArray = splitCommaDelimited(getValueFromFunctionString(v));

    for (var i = 0; i < numTerms; i++) {
      values[terms[i]] = valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
    }

    return values;
  };
}

/*
  Is utils var an array ?

  @param: Variable to test
  @return [boolean]: Returns true if utils.varType === 'Array'
*/
var isArray = exports.isArray = function isArray(arr) {
  return varType(arr) === 'Array';
};

/*
  Is utils var a function ?

  @param: Variable to test
  @return [boolean]: Returns true if utils.varType === 'Function'
*/
var isFunc = exports.isFunc = function isFunc(obj) {
  return varType(obj) === 'Function';
};

/*
  Is utils var a number?

  @param: Variable to test
  @return [boolean]: Returns true if typeof === 'number'
*/
var isNum = exports.isNum = function isNum(num) {
  return typeof num === 'number';
};

/*
  Is utils var an object?

  @param: Variable to test
  @return [boolean]: Returns true if typeof === 'object'
*/
var isObj = exports.isObj = function isObj(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
};

/*
  Is utils var a string ?

  @param: Variable to test
  @return [boolean]: Returns true if typeof str === 'string'
*/
var isString = exports.isString = function isString(str) {
  return typeof str === 'string';
};

var isHex = exports.isHex = isFirstChars('#');
var isRgb = exports.isRgb = isFirstChars('rgb');
var isHsl = exports.isHsl = isFirstChars('hsl');
var isColor = exports.isColor = function isColor(v) {
  return isHex(v) || isRgb(v) || isHsl(v);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdXRpbHMuanMiXSwibmFtZXMiOlsic3BsaXRDb2xvclZhbHVlcyIsInZhclR5cGUiLCJ2YXJpYWJsZSIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiQ0FNRUxfQ0FTRV9QQVRURVJOIiwiUkVQTEFDRV9URU1QTEFURSIsImNhbWVsVG9EYXNoIiwic3RyaW5nIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwic2V0RE9NQXR0cnMiLCJlbGVtZW50IiwiYXR0cnMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInNldEF0dHJpYnV0ZSIsInNwbGl0Q29tbWFEZWxpbWl0ZWQiLCJ2YWx1ZSIsImlzU3RyaW5nIiwic3BsaXQiLCJjb250YWlucyIsInRlcm0iLCJ2IiwiaW5kZXhPZiIsImlzRmlyc3RDaGFycyIsImNyZWF0ZVVuaXRUeXBlIiwidHlwZSIsInRyYW5zZm9ybSIsInRlc3QiLCJwYXJzZSIsInBhcnNlRmxvYXQiLCJnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwidGVybXMiLCJudW1UZXJtcyIsImxlbmd0aCIsInZhbHVlcyIsInZhbHVlc0FycmF5IiwiaSIsInVuZGVmaW5lZCIsImlzQXJyYXkiLCJhcnIiLCJpc0Z1bmMiLCJvYmoiLCJpc051bSIsIm51bSIsImlzT2JqIiwic3RyIiwiaXNIZXgiLCJpc1JnYiIsImlzSHNsIiwiaXNDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O1FBcUVnQkEsZ0IsR0FBQUEsZ0I7QUFyRWhCLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxRQUFEO0FBQUEsU0FBY0MsT0FBT0MsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEJDLElBQTFCLENBQStCSixRQUEvQixFQUF5Q0ssS0FBekMsQ0FBK0MsQ0FBL0MsRUFBa0QsQ0FBQyxDQUFuRCxDQUFkO0FBQUEsQ0FBaEI7O0FBRUEsSUFBTUMscUJBQXFCLGlCQUEzQjtBQUNB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QSxHQUFQLEtBQWUsUUFBeEI7QUFBQSxDQUFkOztBQUVQOzs7Ozs7QUFNTyxJQUFNQyx3QkFBUSxTQUFSQSxLQUFRLENBQUNILEdBQUQ7QUFBQSxTQUFTLFFBQU9BLEdBQVAseUNBQU9BLEdBQVAsT0FBZSxRQUF4QjtBQUFBLENBQWQ7O0FBRVA7Ozs7OztBQU1PLElBQU0xQiw4QkFBVyxTQUFYQSxRQUFXLENBQUM4QixHQUFEO0FBQUEsU0FBUyxPQUFPQSxHQUFQLEtBQWUsUUFBeEI7QUFBQSxDQUFqQjs7QUFFQSxJQUFNQyx3QkFBUXpCLGFBQWEsR0FBYixDQUFkO0FBQ0EsSUFBTTBCLHdCQUFRMUIsYUFBYSxLQUFiLENBQWQ7QUFDQSxJQUFNMkIsd0JBQVEzQixhQUFhLEtBQWIsQ0FBZDtBQUNBLElBQU00Qiw0QkFBVSxTQUFWQSxPQUFVLENBQUM5QixDQUFEO0FBQUEsU0FBUTJCLE1BQU0zQixDQUFOLEtBQVk0QixNQUFNNUIsQ0FBTixDQUFaLElBQXdCNkIsTUFBTTdCLENBQU4sQ0FBaEM7QUFBQSxDQUFoQiIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHZhclR5cGUgPSAodmFyaWFibGUpID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xuXG5jb25zdCBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbmNvbnN0IFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xuXG4vKlxuICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmV4cG9ydCBjb25zdCBjYW1lbFRvRGFzaCA9IChzdHJpbmcpID0+IHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcblxuZXhwb3J0IGNvbnN0IHNldERPTUF0dHJzID0gKGVsZW1lbnQsIGF0dHJzKSA9PiB7XG4gIGZvciAobGV0IGtleSBpbiBhdHRycykge1xuICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuICAgIH1cbiAgfVxufTtcbi8qXG4gIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBhbnkgYXJndW1lbnQgZm9yIGB0ZXJtYFxuICogYGNvbnRhaW5zKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gKHRlcm0pID0+ICh2KSA9PiB7XG4gIHJldHVybiAoaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pICE9PSAtMSk7XG59O1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIHRvIHNlZSBpZiBhbiBhcmd1bWVudCBpc1xuICogIHRoZSBmaXJzdCBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBgdGVybWBcbiAqIGBpc0ZpcnN0Q2hhcnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG5leHBvcnQgY29uc3QgaXNGaXJzdENoYXJzID0gKHRlcm0pID0+ICh2KSA9PiB7XG4gIHJldHVybiAoaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pID09PSAwKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgdW5pdCB2YWx1ZSB0eXBlXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVVbml0VHlwZSA9ICh0eXBlLCB0cmFuc2Zvcm0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZXN0OiBjb250YWlucyh0eXBlKSxcbiAgICBwYXJzZTogcGFyc2VGbG9hdCxcbiAgICB0cmFuc2Zvcm1cbiAgfTtcbn07XG5cbi8qXG4gIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9ICh2YWx1ZSkgPT4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgc3BsaXQgY29sb3JcbiAqIHZhbHVlcyBmcm9tIHN0cmluZyBpbnRvIGFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXG4gKiBgbWFwQXJyYXlUb09iamVjdChbJ3JlZCcsICdncmVlbicsICdibHVlJ10pKCdyZ2JhKDAsMCwwKScpYFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRDb2xvclZhbHVlcyh0ZXJtcykge1xuICBjb25zdCBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcblxuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB7fTtcbiAgICBjb25zdCB2YWx1ZXNBcnJheSA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodikpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICB2YWx1ZXNbdGVybXNbaV1dID0gKHZhbHVlc0FycmF5W2ldICE9PSB1bmRlZmluZWQpID8gcGFyc2VGbG9hdCh2YWx1ZXNBcnJheVtpXSkgOiAxO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH07XG59XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBhcnJheSA/XG5cbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKGFycikgPT4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/XG5cbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbmV4cG9ydCBjb25zdCBpc0Z1bmMgPSAob2JqKSA9PiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIG51bWJlcj9cblxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xuZXhwb3J0IGNvbnN0IGlzTnVtID0gKG51bSkgPT4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG5cbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbmV4cG9ydCBjb25zdCBpc09iaiA9IChvYmopID0+IHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgP1xuXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHN0cikgPT4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG5cbmV4cG9ydCBjb25zdCBpc0hleCA9IGlzRmlyc3RDaGFycygnIycpO1xuZXhwb3J0IGNvbnN0IGlzUmdiID0gaXNGaXJzdENoYXJzKCdyZ2InKTtcbmV4cG9ydCBjb25zdCBpc0hzbCA9IGlzRmlyc3RDaGFycygnaHNsJyk7XG5leHBvcnQgY29uc3QgaXNDb2xvciA9ICh2KSA9PiAoaXNIZXgodikgfHwgaXNSZ2IodikgfHwgaXNIc2wodikpO1xuIl19

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var on_next_frame_1 = __webpack_require__(19);
var create_render_step_1 = __webpack_require__(20);
var HAS_PERFORMANCE_NOW = (typeof performance !== 'undefined' && performance.now);
exports.currentTime = HAS_PERFORMANCE_NOW ? function () { return performance.now(); } : function () { return new Date().getTime(); };
var willRenderNextFrame = false;
var MAX_ELAPSED = 20;
var currentFramestamp = exports.currentTime();
var elapsed = 0;
var dilation = 1;
function startRenderLoop() {
    if (!willRenderNextFrame) {
        willRenderNextFrame = true;
        on_next_frame_1.default(processFrame);
    }
}
var frameStart = create_render_step_1.default(startRenderLoop);
var frameUpdate = create_render_step_1.default(startRenderLoop);
var frameRender = create_render_step_1.default(startRenderLoop);
var frameEnd = create_render_step_1.default(startRenderLoop);
function processFrame(framestamp) {
    willRenderNextFrame = false;
    elapsed = Math.max(Math.min(framestamp - currentFramestamp, MAX_ELAPSED), 1) * dilation;
    currentFramestamp = framestamp;
    frameStart.process();
    frameUpdate.process();
    frameRender.process();
    frameEnd.process();
}
exports.onFrameStart = frameStart.schedule;
exports.onFrameUpdate = frameUpdate.schedule;
exports.onFrameRender = frameRender.schedule;
exports.onFrameEnd = frameEnd.schedule;
exports.cancelOnFrameStart = frameStart.cancel;
exports.cancelOnFrameUpdate = frameUpdate.cancel;
exports.cancelOnFrameRender = frameRender.cancel;
exports.cancelOnFrameEnd = frameEnd.cancel;
exports.timeSinceLastFrame = function () { return elapsed; };
exports.currentFrameTime = function () { return currentFramestamp; };
//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _framesync = __webpack_require__(1);

var _calc = __webpack_require__(3);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Action = function () {
  // lawsuit - sorry
  function Action() {
    var _this = this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Action);

    this.scheduledUpdate = function () {
      _this.lastUpdated = (0, _framesync.timeSinceLastFrame)();
      _this.prev = _this.current;

      var _props = _this.props,
          onUpdate = _props.onUpdate,
          passive = _props.passive;


      if (_this.update) {
        _this.current = _this.update(_this.current);
      }

      if (onUpdate) {
        if (onUpdate.registerAction) {
          onUpdate.set(_this.get());
        } else {
          onUpdate(_this.get(), _this);
        }
      }

      _this.fireListeners();

      if (!passive && _this._isActive) {
        (0, _framesync.onFrameUpdate)(_this.scheduledUpdate);
      }

      if (_this.isActionComplete && _this.isActionComplete()) {
        _this.complete();
      }

      return _this;
    };

    this.props = _extends({}, this.constructor.defaultProps);

    this.setProps(props);

    this.lastUpdated = 0;
    this.prev = this.current = props.current || props.from || 0;
  }

  Action.prototype.start = function start() {
    var _props2 = this.props,
        onStart = _props2.onStart,
        _onStart = _props2._onStart,
        passive = _props2.passive;


    if (!passive) {
      this._isActive = true;
      (0, _framesync.onFrameUpdate)(this.scheduledUpdate);
    }

    if (this.onStart) this.onStart();
    if (onStart) onStart(this);
    if (_onStart) _onStart(this);

    return this;
  };

  Action.prototype.stop = function stop() {
    var _props3 = this.props,
        onStop = _props3.onStop,
        _onStop = _props3._onStop,
        passive = _props3.passive;


    if (!passive) {
      this._isActive = false;
      (0, _framesync.cancelOnFrameUpdate)(this.scheduledUpdate);
    }

    if (this.onStop) this.onStop();
    if (onStop) onStop(this);
    if (_onStop) _onStop(this);

    return this;
  };

  Action.prototype.complete = function complete() {
    var _props4 = this.props,
        onComplete = _props4.onComplete,
        _onComplete = _props4._onComplete;


    this.stop();

    if (this.onComplete) this.onComplete();
    if (onComplete) onComplete(this);
    if (_onComplete) _onComplete(this);

    return this;
  };

  Action.prototype.setProps = function setProps(_ref) {
    var onUpdate = _ref.onUpdate,
        props = _objectWithoutProperties(_ref, ['onUpdate']);

    this.props = _extends({}, this.props, props);

    if (onUpdate) this.output(onUpdate);

    return this;
  };

  Action.prototype.output = function output(func) {
    this.props.onUpdate = func;
    if (func.registerAction) func.registerAction(this);

    return this;
  };

  Action.prototype.get = function get() {
    var transform = this.props.transform;

    return transform ? transform(this.current) : this.current;
  };

  Action.prototype.getBeforeTransform = function getBeforeTransform() {
    return this.current;
  };

  Action.prototype.set = function set(v) {
    this.current = v;
    return this;
  };

  Action.prototype.getProp = function getProp(key) {
    return this.props[key];
  };

  Action.prototype.getVelocity = function getVelocity() {
    return (0, _calc.speedPerSecond)(this.current - this.prev, this.lastUpdated);
  };

  Action.prototype.isActive = function isActive() {
    return this._isActive;
  };

  Action.prototype.subscribe = function subscribe(listener) {
    this.listeners = this.listeners || [];
    this.numListeners = this.numListeners || 0;
    if (this.listeners.indexOf(listener) === -1) {
      this.listeners.push(listener);
      this.numListeners++;
    }
    return this;
  };

  Action.prototype.unsubscribe = function unsubscribe(listener) {
    var listenerIndex = this.listeners ? this.listeners.indexOf(listener) : -1;
    if (listenerIndex !== -1) {
      this.numListeners--;
      this.listeners.splice(listenerIndex, 1);
    }
    return this;
  };

  Action.prototype.fireListeners = function fireListeners() {
    var current = this.get();
    for (var i = 0; i < this.numListeners; i++) {
      this.listeners[i](current, this);
    }
    return this;
  };

  return Action;
}();

exports.default = Action;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFjdGlvbiIsInByb3BzIiwic2NoZWR1bGVkVXBkYXRlIiwibGFzdFVwZGF0ZWQiLCJwcmV2IiwiY3VycmVudCIsIm9uVXBkYXRlIiwicGFzc2l2ZSIsInVwZGF0ZSIsInJlZ2lzdGVyQWN0aW9uIiwic2V0IiwiZ2V0IiwiZmlyZUxpc3RlbmVycyIsIl9pc0FjdGl2ZSIsImlzQWN0aW9uQ29tcGxldGUiLCJjb21wbGV0ZSIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdFByb3BzIiwic2V0UHJvcHMiLCJmcm9tIiwic3RhcnQiLCJvblN0YXJ0IiwiX29uU3RhcnQiLCJzdG9wIiwib25TdG9wIiwiX29uU3RvcCIsIm9uQ29tcGxldGUiLCJfb25Db21wbGV0ZSIsIm91dHB1dCIsImZ1bmMiLCJ0cmFuc2Zvcm0iLCJnZXRCZWZvcmVUcmFuc2Zvcm0iLCJ2IiwiZ2V0UHJvcCIsImtleSIsImdldFZlbG9jaXR5IiwiaXNBY3RpdmUiLCJzdWJzY3JpYmUiLCJsaXN0ZW5lciIsImxpc3RlbmVycyIsIm51bUxpc3RlbmVycyIsImluZGV4T2YiLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJsaXN0ZW5lckluZGV4Iiwic3BsaWNlIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztJQUVNQSxNO0FBQVM7QUFDYixvQkFBd0I7QUFBQTs7QUFBQSxRQUFaQyxLQUFZLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUEsU0FxRHhCQyxlQXJEd0IsR0FxRE4sWUFBTTtBQUN0QixZQUFLQyxXQUFMLEdBQW1CLG9DQUFuQjtBQUNBLFlBQUtDLElBQUwsR0FBWSxNQUFLQyxPQUFqQjs7QUFGc0IsbUJBSVEsTUFBS0osS0FKYjtBQUFBLFVBSWRLLFFBSmMsVUFJZEEsUUFKYztBQUFBLFVBSUpDLE9BSkksVUFJSkEsT0FKSTs7O0FBTXRCLFVBQUksTUFBS0MsTUFBVCxFQUFpQjtBQUNmLGNBQUtILE9BQUwsR0FBZSxNQUFL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TDtBQUNBLFdBQUtELFNBQUwsQ0FBZU0sTUFBZixDQUFzQkQsYUFBdEIsRUFBcUMsQ0FBckM7QUFDRDtBQUNELFdBQU8sSUFBUDtBQUNELEc7O21CQUVEaEMsYSw0QkFBZ0I7QUFDZCxRQUFNUCxVQUFVLEtBQUtNLEdBQUwsRUFBaEI7QUFDQSxTQUFLLElBQUltQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS04sWUFBekIsRUFBdUNNLEdBQXZDLEVBQTRDO0FBQzFDLFdBQUtQLFNBQUwsQ0FBZU8sQ0FBZixFQUFrQnpDLE9BQWxCLEVBQTJCLElBQTNCO0FBQ0Q7QUFDRCxXQUFPLElBQVA7QUFDRCxHOzs7OztrQkFHWUwsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9uRnJhbWVVcGRhdGUsIGNhbmNlbE9uRnJhbWVVcGRhdGUsIHRpbWVTaW5jZUxhc3RGcmFtZSB9IGZyb20gJ2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBzcGVlZFBlclNlY29uZCB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuY2xhc3MgQWN0aW9uIHsgLy8gbGF3c3VpdCAtIHNvcnJ5XG4gIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcbiAgICB0aGlzLnByb3BzID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHNcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRQcm9wcyhwcm9wcyk7XG5cbiAgICB0aGlzLmxhc3RVcGRhdGVkID0gMDtcbiAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQgPSBwcm9wcy5jdXJyZW50IHx8IHByb3BzLmZyb20gfHwgMDtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGNvbnN0IHsgb25TdGFydCwgX29uU3RhcnQsIHBhc3NpdmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICAgIG9uRnJhbWVVcGRhdGUodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RhcnQpIHRoaXMub25TdGFydCgpO1xuICAgIGlmIChvblN0YXJ0KSBvblN0YXJ0KHRoaXMpO1xuICAgIGlmIChfb25TdGFydCkgX29uU3RhcnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgY29uc3QgeyBvblN0b3AsIF9vblN0b3AsIHBhc3NpdmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICBjYW5jZWxPbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0b3ApIHRoaXMub25TdG9wKCk7XG4gICAgaWYgKG9uU3RvcCkgb25TdG9wKHRoaXMpO1xuICAgIGlmIChfb25TdG9wKSBfb25TdG9wKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICBjb25zdCB7IG9uQ29tcGxldGUsIF9vbkNvbXBsZXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5zdG9wKCk7XG5cbiAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSh0aGlzKTtcbiAgICBpZiAoX29uQ29tcGxldGUpIF9vbkNvbXBsZXRlKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzY2hlZHVsZWRVcGRhdGUgPSAoKSA9PiB7XG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9IHRpbWVTaW5jZUxhc3RGcmFtZSgpO1xuICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudDtcblxuICAgIGNvbnN0IHsgb25VcGRhdGUsIHBhc3NpdmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodGhpcy51cGRhdGUpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMudXBkYXRlKHRoaXMuY3VycmVudCk7XG4gICAgfVxuXG4gICAgaWYgKG9uVXBkYXRlKSB7XG4gICAgICBpZiAob25VcGRhdGUucmVnaXN0ZXJBY3Rpb24pIHtcbiAgICAgICAgb25VcGRhdGUuc2V0KHRoaXMuZ2V0KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25VcGRhdGUodGhpcy5nZXQoKSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5maXJlTGlzdGVuZXJzKCk7XG5cbiAgICBpZiAoIXBhc3NpdmUgJiYgdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIG9uRnJhbWVVcGRhdGUodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQWN0aW9uQ29tcGxldGUgJiYgdGhpcy5pc0FjdGlvbkNvbXBsZXRlKCkpIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBzZXRQcm9wcyh7IG9uVXBkYXRlLCAuLi5wcm9wcyB9KSB7XG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICAuLi5wcm9wc1xuICAgIH07XG5cbiAgICBpZiAob25VcGRhdGUpIHRoaXMub3V0cHV0KG9uVXBkYXRlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb3V0cHV0KGZ1bmMpIHtcbiAgICB0aGlzLnByb3BzLm9uVXBkYXRlID0gZnVuYztcbiAgICBpZiAoZnVuYy5yZWdpc3RlckFjdGlvbikgZnVuYy5yZWdpc3RlckFjdGlvbih0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0KCkge1xuICAgIGNvbnN0IHsgdHJhbnNmb3JtIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiB0cmFuc2Zvcm0gPyB0cmFuc2Zvcm0odGhpcy5jdXJyZW50KSA6IHRoaXMuY3VycmVudDtcbiAgfVxuXG4gIGdldEJlZm9yZVRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9XG5cbiAgc2V0KHYpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0UHJvcChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wc1trZXldO1xuICB9XG5cbiAgZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuIHNwZWVkUGVyU2Vjb25kKHRoaXMuY3VycmVudCAtIHRoaXMucHJldiwgdGhpcy5sYXN0VXBkYXRlZCk7XG4gIH1cblxuICBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gIH1cblxuICBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IFtdO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gdGhpcy5udW1MaXN0ZW5lcnMgfHwgMDtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzKys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5zdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBjb25zdCBsaXN0ZW5lckluZGV4ID0gKHRoaXMubGlzdGVuZXJzKSA/IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpIDogLTE7XG4gICAgaWYgKGxpc3RlbmVySW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycy0tO1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZpcmVMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUxpc3RlbmVyczsgaSsrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tpXShjdXJyZW50LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuIl19

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.getValueFromProgress = exports.getProgressFromValue = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;

var _utils = __webpack_require__(0);

/*
  Convert number to x decimal places

  @param [number]
  @param [number]
  @return [number]
*/
var toDecimal = function toDecimal(num) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  precision = Math.pow(10, precision);
  return Math.round(num * precision) / precision;
};

var ZERO_POINT = {
  x: 0,
  y: 0,
  z: 0
};

var distance1D = function distance1D(a, b) {
  return Math.abs(a - b);
};

/*
  Angle between points

  Translates the hypothetical line so that the 'from' coordinates
  are at 0,0

  @param [object]: X and Y coordinates of from point
  @param [object]: X and Y cordinates of to point
  @return [radian]: Angle between the two points in radians
*/
var angle = exports.angle = function angle(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ZERO_POINT;
  return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
};

/*
  Convert degrees to radians

  @param [number]: Value in degrees
  @return [number]: Value in radians
*/
var degreesToRadians = exports.degreesToRadians = function degreesToRadians(degrees) {
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
var dilate = exports.dilate = function dilate(a, b, dilation) {
  return a + (b - a) * dilation;
};

/*
  Distance

  Returns the distance between two n dimensional points.

  @param [object/number]: x and y or just x of point A
  @param [object/number]: (optional): x and y or just x of point B
  @return [number]: The distance between the two points
*/
var distance = exports.distance = function distance(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ZERO_POINT;

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
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/
var getProgressFromValue = exports.getProgressFromValue = function getProgressFromValue(from, to, value) {
  return (value - from) / (to - from);
};

/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (a number from 0-1)

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/
var getValueFromProgress = exports.getValueFromProgress = function getValueFromProgress(from, to, progress) {
  return -progress * from + progress * to + from;
};

/*
  Point from angle and distance

  @param [object]: 2D point of origin
  @param [number]: Angle from origin
  @param [number]: Distance from origin
  @return [object]: Calculated 2D point
*/
var pointFromAngleAndDistance = exports.pointFromAngleAndDistance = function pointFromAngleAndDistance(origin, angle, distance) {
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
var radiansToDegrees = exports.radiansToDegrees = function radiansToDegrees(radians) {
  return radians * 180 / Math.PI;
};

/*
  Framerate-independent smoothing

  @param [number]: New value
  @param [number]: Old value
  @param [number]: Frame duration
  @param [number] (optional): Smoothing (0 is none)
*/
var smooth = exports.smooth = function smooth(newValue, oldValue, duration) {
  var smoothing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return toDecimal(oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration));
};

/*
  Convert x per second to per frame velocity based on fps

  @param [number]: Unit per second
  @param [number]: Frame duration in ms
*/
var speedPerFrame = exports.speedPerFrame = function speedPerFrame(xps, frameDuration) {
  return (0, _utils.isNum)(xps) ? xps / (1000 / frameDuration) : 0;
};

/*
  Convert velocity into velicity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
var speedPerSecond = exports.speedPerSecond = function speedPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1000 / frameDuration) : 0;
};

/*
  Create stepped version of 0-1 progress

  @param [int]: Number of steps
  @param [number]: Current value
  @return [number]: Stepped value
*/
var stepProgress = exports.stepProgress = function stepProgress(steps, progress) {
  var segment = 1 / (steps - 1);
  var target = 1 - 1 / steps;
  var progressOfTarget = Math.min(progress / target, 1);

  return Math.floor(progressOfTarget / segment) * segment;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvY2FsYy5qcyJdLCJuYW1lcyI6WyJ0b0RlY2ltYWwiLCJudW0iLCJwcmVjaXNpb24iLCJNYXRoIiwicm91bmQiLCJaRVJPX1BPSU5UIiwieCIsInkiLCJ6IiwiZGlzdGFuY2UxRCIsImEiLCJiIiwiYWJzIiwiYW5nbGUiLCJyYWRpYW5zVG9EZWdyZWVzIiwiYXRhbjIiLCJkZWdyZWVzVG9SYWRpYW5zIiwiZGVncmVlcyIsIlBJIiwiZGlsYXRlIiwiZGlsYXRpb24iLCJkaXN0YW5jZSIsInhEZWx0YSIsInlEZWx0YSIsInpEZWx0YSIsInNxcnQiLCJnZXRQcm9ncmVzc0Zyb21WYWx1ZSIsImZyb20iLCJ0byIsInZhbHVlIiwiZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MiLCJwcm9ncmVzcyIsInBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UiLCJvcmlnaW4iLCJjb3MiLCJzaW4iLCJyYWRpYW5zIiwic21vb3RoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImR1cmF0aW9uIiwic21vb3RoaW5nIiwibWF4Iiwic3BlZWRQZXJGcmFtZSIsInhwcyIsImZyYW1lRHVyYXRpb24iLCJzcGVlZFBlclNlY29uZCIsInZlbG9jaXR5Iiwic3RlcFByb2dyZXNzIiwic3RlcHMiLCJzZWdtZW50IiwidGFyZ2V0IiwicHJvZ3Jlc3NPZlRhcmdldCIsIm1pbiIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOzs7Ozs7O0FBT0EsSUFBTUEsWUFBWSxTQUFaQSxTQUFZLENBQUNDLEdBQUQsRUFBd0I7QUFBQSxNQUFsQkMsU0FBa0IsdUVBQU4sQ0FBTTs7QUFDeENBLHVCQUFZLEVBQVosRUFBa0JBLFNBQWxCO0FBQ0EsU0FBT0MsS0FBS0MsS0FBTCxDQUFXSCxNQUFNQyxTQUFqQixJQUE4QkEsU0FBckM7QUFDRCxDQUhEOztBQUtBLElBQU1HLGFBQWE7QUFDakJDLEtBQUcsQ0FEYztBQUVqQkMsS0FBRyxDQUZjO0FBR2pCQyxLQUFHO0FBSGMsQ0FBbkI7O0FB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MEJBQVMsU0FBVEEsTUFBUyxDQUFDQyxRQUFELEVBQVdDLFFBQVgsRUFBcUJDLFFBQXJCO0FBQUEsTUFBK0JDLFNBQS9CLHVFQUEyQyxDQUEzQztBQUFBLFNBQWlEekMsVUFBVXVDLFdBQVlDLFlBQVlGLFdBQVdDLFFBQXZCLElBQW1DcEMsS0FBS3VDLEdBQUwsQ0FBU0QsU0FBVCxFQUFvQkQsUUFBcEIsQ0FBekQsQ0FBakQ7QUFBQSxDQUFmOztBQUVQOzs7Ozs7QUFNTyxJQUFNRyx3Q0FBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLEdBQUQsRUFBTUMsYUFBTjtBQUFBLFNBQXlCLGtCQUFNRCxHQUFOLENBQUQsR0FBZUEsT0FBTyxPQUFPQyxhQUFkLENBQWYsR0FBOEMsQ0FBdEU7QUFBQSxDQUF0Qjs7QUFFUDs7Ozs7O0FBTU8sSUFBTUMsMENBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxRQUFELEVBQVdGLGFBQVg7QUFBQSxTQUE2QkEsZ0JBQWdCRSxZQUFZLE9BQU9GLGFBQW5CLENBQWhCLEdBQW9ELENBQWpGO0FBQUEsQ0FBdkI7O0FBRVA7Ozs7Ozs7QUFPTyxJQUFNRyxzQ0FBZSxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBUWxCLFFBQVIsRUFBcUI7QUFDL0MsTUFBTW1CLFVBQVUsS0FBS0QsUUFBUSxDQUFiLENBQWhCO0FBQ0EsTUFBTUUsU0FBUyxJQUFLLElBQUlGLEtBQXhCO0FBQ0EsTUFBTUcsbUJBQW1CakQsS0FBS2tELEdBQUwsQ0FBU3RCLFdBQVdvQixNQUFwQixFQUE0QixDQUE1QixDQUF6Qjs7QUFFQSxTQUFPaEQsS0FBS21ELEtBQUwsQ0FBV0YsbUJBQW1CRixPQUE5QixJQUF5Q0EsT0FBaEQ7QUFDRCxDQU5NIiwiZmlsZSI6ImNhbGMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc051bSB9IGZyb20gJy4vdXRpbHMnO1xuXG4vKlxuICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcmV0dXJuIFtudW1iZXJdXG4qL1xuY29uc3QgdG9EZWNpbWFsID0gKG51bSwgcHJlY2lzaW9uID0gMikgPT4ge1xuICBwcmVjaXNpb24gPSAxMCAqKiBwcmVjaXNpb247XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuXG5jb25zdCBaRVJPX1BPSU5UID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB6OiAwXG59O1xuXG5jb25zdCBkaXN0YW5jZTFEID0gKGEsIGIpID0+IE1hdGguYWJzKGEgLSBiKTtcblxuLypcbiAgQW5nbGUgYmV0d2VlbiBwb2ludHNcblxuICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgYXJlIGF0IDAsMFxuXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBhbmdsZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGIueSAtIGEueSwgYi54IC0gYS54KSk7XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgZGVncmVlc1RvUmFkaWFucyA9IChkZWdyZWVzKSA9PiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcblxuLypcbiAgRGlsYXRlXG5cbiAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuXG4gIGEgLS0tLS0tLS0tIGJcblxuICB0b1xuXG4gIGEgLS0tLSBiXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG5leHBvcnQgY29uc3QgZGlsYXRlID0gKGEsIGIsIGRpbGF0aW9uKSA9PiBhICsgKChiIC0gYSkgKiBkaWxhdGlvbik7XG5cbi8qXG4gIERpc3RhbmNlXG5cbiAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG5cbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IGRpc3RhbmNlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiB7XG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKGlzTnVtKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICBjb25zdCB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICBjb25zdCB6RGVsdGEgPSAoaXNOdW0oYS56KSkgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KCh4RGVsdGEgKiogMikgKyAoeURlbHRhICoqIDIpICsgKHpEZWx0YSAqKiAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdFxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG5leHBvcnQgY29uc3QgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSAoZnJvbSwgdG8sIHZhbHVlKSA9PiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xuXG4vKlxuICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG5cbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcblxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IChmcm9tLCB0bywgcHJvZ3Jlc3MpID0+ICgtIHByb2dyZXNzICogZnJvbSkgKyAocHJvZ3Jlc3MgKiB0bykgKyBmcm9tO1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuXG4gIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xuZXhwb3J0IGNvbnN0IHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpID0+IHtcbiAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICByZXR1cm4ge1xuICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICB9O1xufTtcblxuLypcbiAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcblxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbmV4cG9ydCBjb25zdCByYWRpYW5zVG9EZWdyZWVzID0gKHJhZGlhbnMpID0+IHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuXG4vKlxuICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xuZXhwb3J0IGNvbnN0IHNtb290aCA9IChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uLCBzbW9vdGhpbmcgPSAwKSA9PiB0b0RlY2ltYWwob2xkVmFsdWUgKyAoZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSkpO1xuXG4vKlxuICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlckZyYW1lID0gKHhwcywgZnJhbWVEdXJhdGlvbikgPT4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xuZXhwb3J0IGNvbnN0IHNwZWVkUGVyU2Vjb25kID0gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSA9PiBmcmFtZUR1cmF0aW9uID8gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcblxuICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbmV4cG9ydCBjb25zdCBzdGVwUHJvZ3Jlc3MgPSAoc3RlcHMsIHByb2dyZXNzKSA9PiB7XG4gIGNvbnN0IHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gIGNvbnN0IHRhcmdldCA9IDEgLSAoMSAvIHN0ZXBzKTtcbiAgY29uc3QgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTtcbiJdfQ==

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.bezier = exports.blendColor = exports.alpha = exports.color = exports.hsla = exports.rgba = exports.rgbUnit = exports.px = exports.degrees = exports.percent = exports.transformChildValues = exports.steps = exports.snap = exports.smooth = exports.wrap = exports.nonlinearSpring = exports.spring = exports.generateNonIntergratedSpring = exports.multiply = exports.divide = exports.add = exports.subtract = exports.interpolate = exports.pipe = exports.conditional = exports.clamp = exports.clampMin = exports.clampMax = exports.applyOffset = exports.appendUnit = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _calc = __webpack_require__(3);

var _utils = __webpack_require__(0);

var _parsers = __webpack_require__(14);

var _framesync = __webpack_require__(1);

var noop = function noop(v) {
  return v;
};

/**
 * Append Unit
 * A function that will append
 * appendUnit('px', 20) -> '20px'
 * @param  {string} unit)
 * @return {number}
 */
var appendUnit = exports.appendUnit = function appendUnit(unit) {
  return function (v) {
    return '' + v + unit;
  };
};

/**
 * Apply offset
 * A function that, given a value, will get the offset from `from`
 * and apply it to `to`
 * @param  {number} from
 * @param  {number} to
 * @return {function}
 */
var applyOffset = exports.applyOffset = function applyOffset(from, to) {
  var getOffset = subtract(from);
  var applyOffsetTo = add(to);
  return function (v) {
    return applyOffsetTo(getOffset(v));
  };
};

/**
 * Clamp value between
 * Creates a function that will restrict a given value between `min` and `max`
 * @param  {number} min
 * @param  {number} max
 * @return {number}
 */
var clampMax = exports.clampMax = function clampMax(max) {
  return function (v) {
    return Math.min(v, max);
  };
};
var clampMin = exports.clampMin = function clampMin(min) {
  return function (v) {
    return Math.max(v, min);
  };
};
var clamp = exports.clamp = function clamp(min, max) {
  var _min = clampMin(min);
  var _max = clampMax(max);
  return function (v) {
    return _min(_max(v));
  };
};

var conditional = exports.conditional = function conditional(condition, ifTrue) {
  var ifFalse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;
  return function (v, action) {
    return condition(v, action) ? ifTrue(v, action) : ifFalse(v, action);
  };
};

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
var pipe = exports.pipe = function pipe() {
  for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) {
    transformers[_key] = arguments[_key];
  }

  var numTransformers = transformers.length;
  var i = 0;

  return function (acc) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var v = acc;
    for (i = 0; i < numTransformers; i++) {
      v = transformers[i].apply(transformers, [v].concat(args));
    }

    return v;
  };
};

/**
 * Interpolate from set of values to another
 * @param  {Array} input array
 * @param  {Array} output
 * @param  {Function} rangeEasing
 * @return {Function}
 */
var interpolate = exports.interpolate = function interpolate(input, output, rangeEasing) {
  var rangeLength = input.length;
  var finalIndex = rangeLength - 1;

  return function (v) {
    // If value outside minimum range, quickly return
    if (v <= input[0]) {
      return output[0];
    }

    // If value outside maximum range, quickly return
    if (v >= input[finalIndex]) {
      return output[finalIndex];
    }

    var i = 1;

    // Find index of range start
    for (; i < rangeLength; i++) {
      if (input[i] > v || i === finalIndex) {
        break;
      }
    }

    var progressInRange = (0, _calc.getProgressFromValue)(input[i - 1], input[i], v);
    var easedProgress = rangeEasing ? rangeEasing[i - 1](progressInRange) : progressInRange;
    return (0, _calc.getValueFromProgress)(output[i - 1], output[i], easedProgress);
  };
};

var subtract = exports.subtract = function subtract(origin) {
  return function (v) {
    return v - origin;
  };
};
var add = exports.add = function add(origin) {
  return function (v) {
    return v + origin;
  };
};
var divide = exports.divide = function divide(origin) {
  return function (v) {
    return v / origin;
  };
};
var multiply = exports.multiply = function multiply(origin) {
  return function (v) {
    return v * origin;
  };
};

var generateNonIntergratedSpring = exports.generateNonIntergratedSpring = function generateNonIntergratedSpring() {
  var alterDisplacement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
  return function (constant, origin) {
    return function (v) {
      var displacement = origin - v;
      var springModifiedDisplacement = -constant * (0 - alterDisplacement(Math.abs(displacement)));
      return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
    };
  };
};

var spring = exports.spring = generateNonIntergratedSpring();
var nonlinearSpring = exports.nonlinearSpring = generateNonIntergratedSpring(Math.sqrt);

var wrap = exports.wrap = function wrap(min, max) {
  return function (v) {
    var rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
  };
};

var smooth = exports.smooth = function smooth() {
  var strength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;

  var previousValue = 0;
  var lastUpdated = 0;

  return function (v) {
    var currentFramestamp = (0, _framesync.currentFrameTime)();
    var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
    var newValue = timeDelta ? (0, _calc.smooth)(v, previousValue, timeDelta, strength) : previousValue;
    lastUpdated = currentFramestamp;
    previousValue = newValue;
    return newValue;
  };
};

var snap = exports.snap = function snap(points) {
  if (typeof points === 'number') {
    return function (v) {
      return Math.round(v / points) * points;
    };
  } else {
    var i = 0;
    var numPoints = points.length;

    return function (v) {
      var lastDistance = Math.abs(points[0] - v);

      for (i = 1; i < numPoints; i++) {
        var point = points[i];
        var distance = Math.abs(point - v);

        if (distance === 0) return point;

        if (distance > lastDistance) return points[i - 1];

        if (i === numPoints - 1) return point;

        lastDistance = distance;
      }
    };
  }
};

var steps = exports.steps = function steps(_steps) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'start';
  return function (v) {
    var progress = (0, _calc.getProgressFromValue)(min, max, v);
    return (0, _calc.getValueFromProgress)(min, max, (0, _calc.stepProgress)(_steps, progress, direction));
  };
};

var transformChildValues = exports.transformChildValues = function transformChildValues(childTransformers) {
  var mutableState = {};
  return function (v) {
    for (var key in v) {
      var childTransformer = childTransformers[key];
      if (childTransformer) {
        mutableState[key] = childTransformer(v[key]);
      }
    }

    return mutableState;
  };
};

// Unit transformers
var percent = exports.percent = appendUnit('%');
var degrees = exports.degrees = appendUnit('deg');
var px = exports.px = appendUnit('px');

var rgbUnit = exports.rgbUnit = pipe(clamp(0, 255), Math.round);

var rgbaTemplate = function rgbaTemplate(_ref) {
  var red = _ref.red,
      green = _ref.green,
      blue = _ref.blue,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 1 : _ref$alpha;
  return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
};

var rgba = exports.rgba = pipe(transformChildValues({
  red: rgbUnit,
  green: rgbUnit,
  blue: rgbUnit,
  alpha: alpha
}), rgbaTemplate);

var hslaTemplate = function hslaTemplate(_ref2) {
  var hue = _ref2.hue,
      saturation = _ref2.saturation,
      lightness = _ref2.lightness,
      _ref2$alpha = _ref2.alpha,
      alpha = _ref2$alpha === undefined ? 1 : _ref2$alpha;
  return 'hsla(' + hue + ', ' + saturation + ', ' + lightness + ', ' + alpha + ')';
};

var hsla = exports.hsla = pipe(transformChildValues({
  hue: parseInt,
  saturation: percent,
  lightness: percent,
  alpha: alpha
}), hslaTemplate);

var color = exports.color = function color(v) {
  if (v.hasOwnProperty('red')) {
    return rgba(v);
  } else if (v.hasOwnProperty('hue')) {
    return hsla(v);
  }
  return v;
};

var alpha = exports.alpha = clamp(0, 1);

var blend = function blend(from, to, v) {
  var fromExpo = from * from;
  var toExpo = to * to;
  return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
};
// http://codepen.io/osublake/pen/xGVVaN
var blendColor = exports.blendColor = function blendColor(from, to) {
  var fromColor = (0, _utils.isString)(from) ? (0, _parsers.color)(from) : from;
  var toColor = (0, _utils.isString)(to) ? (0, _parsers.color)(to) : to;

  var blended = _extends({}, fromColor);

  return function (v) {
    for (var key in blended) {
      blended[key] = blend(fromColor[key], toColor[key], v);
    }
    blended.red = blend(fromColor.red, toColor.red, v);
    blended.green = blend(fromColor.green, toColor.green, v);
    blended.blue = blend(fromColor.blue, toColor.blue, v);
    blended.alpha = (0, _calc.getValueFromProgress)(fromColor.alpha, toColor.alpha, v);
    return blended;
  };
};

// Bezier resolver
// Refactored from https://github.com/hughsk/bezier/blob/master/index.js
/**
## The MIT License (MIT) ##

Copyright (c) 2013 Hugh Kennedy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */
var resolve3 = function resolve3(points) {
  return function (t) {
    var ut = 1 - t;
    return (points[0] * ut + points[1] * t) * ut + (points[1] * ut + points[2] * t) * t;
  };
};

var resolve4 = function resolve4(points) {
  return function (t) {
    var ut = 1 - t;
    var a1 = points[1] * ut + points[2] * t;
    return ((points[0] * ut + points[1] * t) * ut + a1 * t) * ut + (a1 * ut + (points[2] * ut + points[3] * t) * t) * t;
  };
};

var bezier = exports.bezier = function bezier(points) {
  return points.length === 3 ? resolve3(points) : resolve4(points);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJ2IiwiYXBwZW5kVW5pdCIsInVuaXQiLCJhcHBseU9mZnNldCIsImZyb20iLCJ0byIsImdldE9mZnNldCIsInN1YnRyYWN0IiwiYXBwbHlPZmZzZXRUbyIsImFkZCIsImNsYW1wTWF4IiwibWF4IiwiTWF0aCIsIm1pbiIsImNsYW1wTWluIiwiY2xhbXAiLCJfbWluIiwiX21heCIsImNvbmRpdGlvbmFsIiwiY29uZGl0aW9uIiwiaWZUcnVlIiwiaWZGYWxzZSIsImFjdGlvbiIsInBpcGUiLCJ0cmFuc2Zvcm1lcnMiLCJudW1UcmFuc2Zvcm1lcnMiLCJsZW5ndGgiLCJpIiwiYWNjIiwiYXJncyIsImludGVycG9sYXRlIiwiaW5wdXQiLCJvdXRwdXQiLCJyYW5nZUVhc2luZyIsInJhbmdlTGVuZ3RoIiwiZmluYWxJbmRleCIsInByb2dyZXNzSW5SYW5nZSIsImVhc2VkUHJvZ3Jlc3MiLCJvcmlnaW4iLCJkaXZpZGUiLCJtdWx0aXBseSIsImdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmciLCJhbHRlckRpc3BsYWNlbWVudCIsImNvbnN0YW50IiwiZGlzcGxhY2VtZW50Iiwic3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQiLCJhYnMiLCJzcHJpbmciLCJub25saW5lYXJTcHJpbmciLCJzcXJ0Iiwid3JhcCIsInJhbmdlU2l6ZSIsInNtb290aCIsInN0cmVuZ3RoIiwicHJldmlvdXNWYWx1ZSIsImxhc3RVcGRhdGVkIiwiY3VycmVudEZyYW1lc3RhbXAiLCJ0aW1lRGVsdGEiLCJuZXdWYWx1ZSIsInNuYXAiLCJwb2ludHMiLCJyb3VuZCIsIm51bVBvaW50cyIsImxhc3REaXN0YW5jZSIsInBvaW50IiwiZGlzdGFuY2UiLCJzdGVwcyIsImRpcmVjdGlvbiIsInByb2dyZXNzIiwidHJhbnNmb3JtQ2hpbGRWYWx1ZXMiLCJjaGlsZFRyYW5zZm9ybWVycyIsIm11dGFibGVTdGF0ZSIsImtleSIsImNoaWxkVHJhbnNmb3JtZXIiLCJwZXJjZW50IiwiZGVncmVlcyIsInB4IiwicmdiVW5pdCIsInJnYmFUZW1wbGF0ZSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImFscGhhIiwicmdiYSIsImhzbGFUZW1wbGF0ZSIsImh1ZSIsInNhdHVyYXRpb24iLCJsaWdodG5lc3MiLCJoc2xhIiwicGFyc2VJbnQiLCJjb2xvciIsImhhc093blByb3BlcnR5IiwiYmxlbmQiLCJmcm9tRXhwbyIsInRvRXhwbyIsImJsZW5kQ29sb3IiLCJmcm9tQ29sb3IiLCJ0b0NvbG9yIiwiYmxlbmRlZCIsInJlc29sdmUzIiwidCIsInV0IiwicmVzb2x2ZTQiLCJhMSIsImJlemllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxDQUFEO0FBQUEsU0FBT0EsQ0FBUDtBQUFBLENBQWI7O0FBRUE7Ozs7Ozs7QUFPTyxJQUFNQyxrQ0FBYSxTQUFiQSxVQUFhLENBQUNDLElBQUQ7QUFBQSxTQUFVLFVBQUNGLENBQUQ7QUFBQSxnQkFBVUEsQ0FBVixHQUFjRSxJQUFkO0FBQUEsR0FBVjtBQUFBLENBQW5COztBQUVQOzs7Ozs7OztBQVFPLElBQU1DLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFPQyxFQUFQLEVBQWM7QUFDdkMsTUFBTUMsWUFBWUMsU0FBU0gsSUFBVCxDQUFsQjtBQUNBLE1BQU1JLGdCQUFnQkMsSUFBSUosRUFBSixDQUF0QjtBQUNBLFNBQU8sVUFBQ0wsQ0FBRDtBQUFBLFdBQU9RLGNBQWNGLFVBQVVOLENBQVYsQ0FBZCxDQUFQO0FBQUEsR0FBUDtBQUNELENBSk07O0FBTVA7Ozs7Ozs7QUFPTyxJQUFNVSw4QkFBVyxTQUFYQSxRQUFXLENBQUNDLEdBQUQ7QUFBQSxTQUFTLFVBQUNYLENBQUQ7QUFBQSxXQUFPWSxLQUFLQyxHQUFMLENBQVNiLENBQVQsRUFBWVcsR0FBWixDQUFQO0FBQUEsR0FBVDtBQUFBLENBQWpCO0FBQ0EsSUFBTUcsOEJBQVcsU0FBWEEsUUFBVyxDQUFDRCxHQUFEO0FBQUEsU0FBUyxVQUFDYixDQUFEO0FBQUEsV0FBT1ksS0FBS0QsR0FBTCxDQUFTWCxDQUFULEVBQVlhLEdBQVosQ0FBUDtBQUFBLEdBQVQ7QUFBQSxDQUFqQjtBQUNBLElBQU1FLHdCQUFRLFNBQVJBLEtBQVEsQ0FBQ0YsR0FBRCxFQUFNRixHQUFOLEVBQWM7QUFDakMsTUFBTUssT0FBT0YsU0FBU0QsR0FBVCxDQUFiO0FBQ0EsTUFBTUksT0FBT1AsU0FBU0MsR0FBVCxDQUFiO0FBQ0EsU0FBTyxVQUFDWCxDQUFEO0FBQUEsV0FBT2dCLEtBQUtDLEtBQUtqQixDQUFMLENBQUwsQ0FBUDtBQUFBLEdBQVA7QUFDRCxDQUpNOztBQU1BLElBQU1rQixvQ0FBYyxTQUFkQSxXQUFjLENBQUNDLFNBQUQsRUFBWUMsTUFBWjtBQUFBLE1BQW9CQyxPQUFwQix1RUFBOEJ0QixJQUE5QjtBQUFBLFNBQXVDLFVBQUNDLENBQUQsRUFBSXNCLE1BQUosRUFBZTtBQUMvRSxXQUFPSCxVQUFVbkIsQ0FBVixFQUFhc0IsTUFBYixJQUF1QkYsT0FBT3BCLENBQVAsRUFBVXNCLE1BQVYsQ0FBdkIsR0FBMkNELFFBQVFyQixDQUFSLEVBQVdzQixNQUFYLENBQWxEO0FBQ0QsR0FGMEI7QUFBQSxDQUFwQjs7QUFJUDs7Ozs7OztBQU9PLElBQU1DLHNCQUFPLFNBQVBBLElBQU8sR0FBcUI7QUFBQSxvQ0FBakJDLFlBQWlCO0FBQWpCQSxnQkFBaUI7QUFBQTs7QUFDdkMsTUFBTUMsa0JBQWtCRCxhQUFhRSxNQUFyQztBQUNBLE1BQUlDLElBQUksQ0FBUjs7QUFFQSxTQUFPLFVBQUNDLEdBQUQsRUFBa0I7QUFBQSx1Q0FBVEMsSUFBUztBQUFUQSxVQUFTO0FBQUE7O0FBQ3ZCLFFBQUk3QixJQUFJNEIsR0FBUjtBQUNBLFNBQUtELElBQUksQ0FBVCxFQUFZQSxJQUFJRixlQUFoQixFQUFpQ0UsR0FBakMsRUFBc0M7QUFDcEMzQixVQUFJd0IsYUFBYUcsQ0FBYix1QkFBZ0IzQixDQUFoQixTQUFzQjZCLElBQXRCLEVBQUo7QUFDRDs7QUFFRCxXQUFPN0IsQ0FBUDtBQUNELEdBUEQ7QUFRRCxDQVpNOztBQWNQOzs7Ozs7O0FBT08sSUFBTThCLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQWdCQyxXQUFoQixFQUFnQztBQUN6RCxNQUFNQyxjQUFjSCxNQUFNTCxNQUExQjtBQUNBLE1BQU1TLGFBQWFELGNBQWMsQ0FBakM7O0FBRUEsU0FBTyxVQUFDbEMsQ0FBRCxFQUFPO0FBQ1o7QUFDQSxRQUFJQSxLQUFLK0IsTUFBTSxDQUFOLENBQVQsRUFBbUI7QUFDakIsYUFBT0MsT0FBTyxDQUFQLENBQVA7QUFDRDs7QUFFRDtBQUNBLFFBQUloQyxLQUFLK0IsTUFBTUksVUFBTixDQUFULEVBQTRCO0FBQzFCLGFBQU9ILE9BQU9HLFVBQVAsQ0FBUDtBQUNEOztBQUVELFFBQUlSLElBQUksQ0FBUjs7QUFFQTtBQUNBLFdBQU9BLElBQUlPLFdBQVgsRUFBd0JQLEdBQXhCLEVBQTZCO0FBQzNCLFVBQUlJLE1BQU1KLENBQU4sSUFBVzNCLENBQVgsSUFBZ0IyQixNQUFNUSxVQUExQixFQUFzQztBQUNwQztBQUNEO0FBQ0Y7O0FBRUQsUUFBTUMsa0JBQWtCLGdDQUFxQkwsTUFBTUosSUFBSSxDQUFWLENBQXJCLEVBQW1DSSxNQUFNSixDQUFOLENBQW5DLEVBQTZDM0IsQ0FBN0MsQ0FBeEI7QUFDQSxRQUFNcUMsZ0JBQWlCSixXQUFELEdBQWdCQSxZQUFZTixJQUFJLENBQWhCLEVBQW1CUyxlQUFuQixDQUFoQixHQUFzREEsZUFBNUU7QUFDQSxXQUFPLGdDQUFxQkosT0FBT0wsSUFBSSxDQUFYLENBQXJCLEVBQW9DSyxPQUFPTCxDQUFQLENBQXBDLEVBQStDVSxhQUEvQyxDQUFQO0FBQ0QsR0F2QkQ7QUF3QkQsQ0E1Qk07O0FBOEJBLElBQU05Qiw4QkFBVyxTQUFYQSxRQUFXLENBQUMrQixNQUFEO0FBQUEsU0FBWSxVQUFDdEMsQ0FBRDtBQUFBLFdBQU9BLElBQUlzQyxNQUFYO0FBQUEsR0FBWjtBQUFBLENBQWpCO0FBQ0EsSUFBTTdCLG9CQUFNLFNBQU5BLEdBQU0sQ0FBQzZCLE1BQUQ7QUFBQSxTQUFZLFVBQUN0QyxDQUFEO0FBQUEsV0FBT0EsSUFBSXNDLE1BQVg7QUFBQSxHQUFaO0FBQUEsQ0FBWjtBQUNBLElBQU1DLDBCQUFTLFNBQVRBLE1BQVMsQ0FBQ0QsTUFBRDtBQUFBLFNBQVksVUFBQ3RDLENBQUQ7QUFBQSxXQUFPQSxJQUFJc0MsTUFBWDtBQUFBLEdBQVo7QUFBQSxDQUFmO0FBQ0EsSUFBTUUsOEJBQVcsU0FBWEEsUUFBVyxDQUFDRixNQUFEO0FBQUEsU0FBWSxVQUFDdEMsQ0FBRDtBQUFBLFdBQU9BLElBQUlzQyxNQUFYO0FBQUEsR0FBWjtBQUFBLENBQWpCOztBQUVBLElBQU1HLHNFQUErQixTQUEvQkEsNEJBQStCO0FBQUEsTUFBQ0MsaUJBQUQsdUVBQXFCM0MsSUFBckI7QUFBQSxTQUE4QixVQUFDNEMsUUFBRCxFQUFXTCxNQUFYO0FBQUEsV0FBc0IsVUFBQ3RDLENBQUQsRUFBTztBQUNyRyxVQUFNNEMsZUFBZU4sU0FBU3RDLENBQTlCO0FBQ0EsVUFBTTZDLDZCQUE2QixDQUFFRixRQUFGLElBQWMsSUFBSUQsa0JBQWtCOUIsS0FBS2tDLEdBQUwsQ0FBU0YsWUFBVCxDQUFsQixDQUFsQixDQUFuQztBQUNBLGFBQVFBLGdCQUFnQixDQUFqQixHQUFzQk4sU0FBU08sMEJBQS9CLEdBQTREUCxTQUFTTywwQkFBNUU7QUFDRCxLQUp5RTtBQUFBLEdBQTlCO0FBQUEsQ0FBckM7O0FBTUEsSUFBTUUsMEJBQVNOLDhCQUFmO0FBQ0EsSUFBTU8sNENBQWtCUCw2QkFBNkI3QixLQUFLcUMsSUFBbEMsQ0FBeEI7O0FBRUEsSUFBTUMsc0JBQU8sU0FBUEEsSUFBTyxDQUFDckMsR0FBRCxFQUFNRixHQUFOO0FBQUEsU0FBYyxVQUFDWCxDQUFELEVBQU87QUFDdkMsUUFBTW1ELFlBQVl4QyxNQUFNRSxHQUF4QjtBQUNBLFdBQU8sQ0FBQyxDQUFDYixJQUFJYSxHQUFMLElBQVlzQyxTQUFaLEdBQXdCQSxTQUF6QixJQUFzQ0EsU0FBdEMsR0FBa0R0QyxHQUF6RDtBQUNELEdBSG1CO0FBQUEsQ0FBYjs7QUFLQSxJQUFNdUMsMEJBQVMsU0FBVEEsTUFBUyxHQUFtQjtBQUFBLE1BQWxCQyxRQUFrQix1RUFBUCxFQUFPOztBQUN2QyxNQUFJQyxnQkFBZ0IsQ0FBcEI7QUFDQSxNQUFJQyxjQUFjLENBQWxCOztBQUVBLFNBQU8sVUFBQ3ZELENBQUQsRUFBTztBQUNaLFFBQU13RCxvQkFBb0Isa0NBQTFCO0FBQ0EsUUFBTUMsWUFBYUQsc0JBQXNCRCxXQUF2QixHQUFzQ0Msb0JBQW9CRCxXQUExRCxHQUF3RSxDQUExRjtBQUNBLFFBQU1HLFdBQVdELFlBQVksa0JBQWN6RCxDQUFkLEVBQWlCc0QsYUFBakIsRUFBZ0NHLFNBQWhDLEVBQTJDSixRQUEzQyxDQUFaLEdBQW1FQyxhQUFwRjtBQUNBQyxrQkFBY0MsaUJBQWQ7QUFDQUYsb0JBQWdCSSxRQUFoQjtBQUNBLFdBQU9BLFFBQVA7QUFDRCxHQVBEO0FBUUQsQ0FaTTs7QUFjQSxJQUFNQyxzQkFBTyxTQUFQQSxJQUFPLENBQUNDLE1BQUQsRUFBWTtBQUM5QixNQUFJLE9BQU9BLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0M7QUFDOUIsV0FBTyxVQUFDNUQsQ0FBRDtBQUFBLGFBQU9ZLEtBQUtpRCxLQUFMLENBQVc3RCxJQUFJNEQsTUFBZixJQUF5QkEsTUFBaEM7QUFBQSxLQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBSWpDLElBQUksQ0FBUjtBQUNBLFFBQU1tQyxZQUFZRixPQUFPbEMsTUFBekI7O0FBRUEsV0FBTyxVQUFDMUIsQ0FBRCxFQUFPO0FBQ1osVUFBSStELGVBQWVuRCxLQUFLa0MsR0FBTCxDQUFTYyxPQUFPLENBQVAsSUFBWTVELENBQXJCLENBQW5COztBQUVBLFdBQUsyQixJQUFJLENBQVQsRUFBWUEsSUFBSW1DLFNBQWhCLEVBQTJCbkMsR0FBM0IsRUFBZ0M7QUFDOUIsWUFBTXFDLFFBQVFKLE9BQU9qQyxDQUFQLENBQWQ7QUFDQSxZQUFNc0MsV0FBV3JELEtBQUtrQyxHQUFMLENBQVNrQixRQUFRaEUsQ0FBakIsQ0FBakI7O0FBRUEsWUFBSWlFLGFBQWEsQ0FBakIsRUFBb0IsT0FBT0QsS0FBUDs7QUFFcEIsWUFBSUMsV0FBV0YsWUFBZixFQUE2QixPQUFPSCxPQUFPakMsSUFBSSxDQUFYLENBQVA7O0FBRTdCLFlBQUlBLE1BQU1tQyxZQUFZLENBQXRCLEVBQXlCLE9BQU9FLEtBQVA7O0FBRXpCRCx1QkFBZUUsUUFBZjtBQUNEO0FBQ0YsS0FmRDtBQWdCRDtBQUNGLENBeEJNOztBQTBCQSxJQUFNQyx3QkFBUSxlQUFDQSxNQUFEO0FBQUEsTUFBUXJELEdBQVIsdUVBQWMsQ0FBZDtBQUFBLE1BQWlCRixHQUFqQix1RUFBdUIsQ0FBdkI7QUFBQSxNQUEwQndELFNBQTFCLHVFQUFzQyxPQUF0QztBQUFBLFNBQWtELFVBQUNuRSxDQUFELEVBQU87QUFDNUUsUUFBTW9FLFdBQVcsZ0NBQXFCdkQsR0FBckIsRUFBMEJGLEdBQTFCLEVBQStCWCxDQUEvQixDQUFqQjtBQUNBLFdBQU8sZ0NBQXFCYSxHQUFyQixFQUEwQkYsR0FBMUIsRUFBK0Isd0JBQWF1RCxNQUFiLEVBQW9CRSxRQUFwQixFQUE4QkQsU0FBOUIsQ0FBL0IsQ0FBUDtBQUNELEdBSG9CO0FBQUEsQ0FBZDs7QUFLQSxJQUFNRSxzREFBdUIsU0FBdkJBLG9CQUF1QixDQUFDQyxpQkFBRCxFQUF1QjtBQUN6RCxNQUFNQyxlQUFlLEVBQXJCO0FBQ0EsU0FBTyxVQUFDdkUsQ0FBRCxFQUFPO0FBQ1osU0FBSyxJQUFJd0UsR0FBVCxJQUFnQnhFLENBQWhCLEVBQW1CO0FBQ2pCLFVBQU15RSxtQkFBbUJILGtCQUFrQkUsR0FBbEIsQ0FBekI7QUFDQSxVQUFJQyxnQkFBSixFQUFzQjtBQUNwQkYscUJBQWFDLEdBQWIsSUFBb0JDLGlCQUFpQnpFLEVBQUV3RSxHQUFGLENBQWpCLENBQXBCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPRCxZQUFQO0FBQ0QsR0FURDtBQVVELENBWk07O0FBY1A7QUFDTyxJQUFNRyw0QkFBVXpFLFdBQVcsR0FBWCxDQUFoQjtBQUNBLElBQU0wRSw0QkFBVTFFLFdBQVcsS0FBWCxDQUFoQjtBQUNBLElBQU0yRSxrQkFBSzNFLFdBQVcsSUFBWCxDQUFYOztBQUVBLElBQU00RSw0QkFBVXRELEtBQ3JCUixNQUFNLENBQU4sRUFBUyxHQUFULENBRHFCLEVBRXJCSCxLQUFLaUQsS0FGZ0IsQ0FBaEI7O0FBS1AsSUFBTWlCLGVBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUdDLEdBQUgsUUFBR0EsR0FBSDtBQUFBLE1BQVFDLEtBQVIsUUFBUUEsS0FBUjtBQUFBLE1BQWVDLElBQWYsUUFBZUEsSUFBZjtBQUFBLHdCQUFxQkMsS0FBckI7QUFBQSxNQUFxQkEsS0FBckIsOEJBQTZCLENBQTdCO0FBQUEsbUJBQ1hILEdBRFcsVUFDSEMsS0FERyxVQUNPQyxJQURQLFVBQ2dCQyxLQURoQjtBQUFBLENBQXJCOztBQUdPLElBQU1DLHNCQUFPNUQsS0FDbEI4QyxxQkFBcUI7QUFDbkJVLE9BQUtGLE9BRGM7QUFFbkJHLFNBQU9ILE9BRlk7QUFHbkJJLFFBQU1KLE9BSGE7QUFJbkJLO0FBSm1CLENBQXJCLENBRGtCLEVBT2xCSixZQVBrQixDQUFiOztBQVVQLElBQU1NLGVBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUdDLEdBQUgsU0FBR0EsR0FBSDtBQUFBLE1BQVFDLFVBQVIsU0FBUUEsVUFBUjtBQUFBLE1BQW9CQyxTQUFwQixTQUFvQkEsU0FBcEI7QUFBQSwwQkFBK0JMLEtBQS9CO0FBQUEsTUFBK0JBLEtBQS9CLCtCQUF1QyxDQUF2QztBQUFBLG1CQUNYRyxHQURXLFVBQ0hDLFVBREcsVUFDWUMsU0FEWixVQUMwQkwsS0FEMUI7QUFBQSxDQUFyQjs7QUFHTyxJQUFNTSxzQkFBT2pFLEtBQ2xCOEMscUJBQXFCO0FBQ25CZ0IsT0FBS0ksUUFEYztBQUVuQkgsY0FBWVosT0FGTztBQUduQmEsYUFBV2IsT0FIUTtBQUluQlE7QUFKbUIsQ0FBckIsQ0FEa0IsRUFPbEJFLFlBUGtCLENBQWI7O0FBVUEsSUFBTU0sd0JBQVEsU0FBUkEsS0FBUSxDQUFDMUYsQ0FBRCxFQUFPO0FBQzFCLE1BQUlBLEVBQUUyRixjQUFGLENBQWlCLEtBQWpCLENBQUosRUFBNkI7QUFDM0IsV0FBT1IsS0FBS25GLENBQUwsQ0FBUDtBQUNELEdBRkQsTUFFTyxJQUFJQSxFQUFFMkYsY0FBRixDQUFpQixLQUFqQixDQUFKLEVBQTZCO0FBQ2xDLFdBQU9ILEtBQUt4RixDQUFMLENBQVA7QUFDRDtBQUNELFNBQU9BLENBQVA7QUFDRCxDQVBNOztBQVNBLElBQU1rRix3QkFBUW5FLE1BQU0sQ0FBTixFQUFTLENBQVQsQ0FBZDs7QUFFUCxJQUFNNkUsUUFBUSxTQUFSQSxLQUFRLENBQUN4RixJQUFELEVBQU9DLEVBQVAsRUFBV0wsQ0FBWCxFQUFpQjtBQUM3QixNQUFNNkYsV0FBV3pGLE9BQU9BLElBQXhCO0FBQ0EsTUFBTTBGLFNBQVN6RixLQUFLQSxFQUFwQjtBQUNBLFNBQU9PLEtBQUtxQyxJQUFMLENBQVVqRCxLQUFLOEYsU0FBU0QsUUFBZCxJQUEwQkEsUUFBcEMsQ0FBUDtBQUNELENBSkQ7QUFLQTtBQUNPLElBQU1FLGtDQUFhLFNBQWJBLFVBQWEsQ0FBQzNGLElBQUQsRUFBT0MsRUFBUCxFQUFjO0FBQ3RDLE1BQU0yRixZQUFZLHFCQUFTNUYsSUFBVCxJQUFpQixvQkFBV0EsSUFBWCxDQUFqQixHQUFvQ0EsSUFBdEQ7QUFDQSxNQUFNNkYsVUFBVSxxQkFBUzVGLEVBQVQsSUFBZSxvQkFBV0EsRUFBWCxDQUFmLEdBQStCQSxFQUEvQzs7QUFFQSxNQUFNNkYsdUJBQWVGLFNBQWYsQ0FBTjs7QUFFQSxTQUFPLFVBQUNoRyxDQUFELEVBQU87QUFDWixTQUFLLElBQUl3RSxHQUFULElBQWdCMEIsT0FBaEIsRUFBeUI7QUFDdkJBLGNBQVExQixHQUFSLElBQWVvQixNQUFNSSxVQUFVeEIsR0FBVixDQUFOLEVBQXNCeUIsUUFBUXpCLEdBQVIsQ0FBdEIsRUFBb0N4RSxDQUFwQyxDQUFmO0FBQ0Q7QUFDRGtHLFlBQVFuQixHQUFSLEdBQWNhLE1BQU1JLFVBQVVqQixHQUFoQixFQUFxQmtCLFFBQVFsQixHQUE3QixFQUFrQy9FLENBQWxDLENBQWQ7QUFDQWtHLFlBQVFsQixLQUFSLEdBQWdCWSxNQUFNSSxVQUFVaEIsS0FBaEIsRUFBdUJpQixRQUFRakIsS0FBL0IsRUFBc0NoRixDQUF0QyxDQUFoQjtBQUNBa0csWUFBUWpCLElBQVIsR0FBZVcsTUFBTUksVUFBVWYsSUFBaEIsRUFBc0JnQixRQUFRaEIsSUFBOUIsRUFBb0NqRixDQUFwQyxDQUFmO0FBQ0FrRyxZQUFRaEIsS0FBUixHQUFnQixnQ0FBcUJjLFVBQVVkLEtBQS9CLEVBQXNDZSxRQUFRZixLQUE5QyxFQUFxRGxGLENBQXJELENBQWhCO0FBQ0EsV0FBT2tHLE9BQVA7QUFDRCxHQVREO0FBVUQsQ0FoQk07O0FBa0JQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUN2QyxNQUFEO0FBQUEsU0FBWSxVQUFDd0MsQ0FBRCxFQUFPO0FBQ2xDLFFBQU1DLEtBQUssSUFBSUQsQ0FBZjtBQUNBLFdBQU8sQ0FBQ3hDLE9BQU8sQ0FBUCxJQUFZeUMsRUFBWixHQUFpQnpDLE9BQU8sQ0FBUCxJQUFZd0MsQ0FBOUIsSUFBbUNDLEVBQW5DLEdBQXdDLENBQUN6QyxPQUFPLENBQVAsSUFBWXlDLEVBQVosR0FBaUJ6QyxPQUFPLENBQVAsSUFBWXdDLENBQTlCLElBQW1DQSxDQUFsRjtBQUNELEdBSGdCO0FBQUEsQ0FBakI7O0FBS0EsSUFBTUUsV0FBVyxTQUFYQSxRQUFXLENBQUMxQyxNQUFEO0FBQUEsU0FBWSxVQUFDd0MsQ0FBRCxFQUFPO0FBQ2xDLFFBQU1DLEtBQUssSUFBSUQsQ0FBZjtBQUNBLFFBQU1HLEtBQUszQyxPQUFPLENBQVAsSUFBWXlDLEVBQVosR0FBaUJ6QyxPQUFPLENBQVAsSUFBWXdDLENBQXhDO0FBQ0EsV0FBTyxDQUFDLENBQUN4QyxPQUFPLENBQVAsSUFBWXlDLEVBQVosR0FBaUJ6QyxPQUFPLENBQVAsSUFBWXdDLENBQTlCLElBQW1DQyxFQUFuQyxHQUF3Q0UsS0FBS0gsQ0FBOUMsSUFBbURDLEVBQW5ELEdBQXdELENBQUNFLEtBQUtGLEVBQUwsR0FBVSxDQUFDekMsT0FBTyxDQUFQLElBQVl5QyxFQUFaLEdBQWlCekMsT0FBTyxDQUFQLElBQVl3QyxDQUE5QixJQUFtQ0EsQ0FBOUMsSUFBbURBLENBQWxIO0FBQ0QsR0FKZ0I7QUFBQSxDQUFqQjs7QUFNTyxJQUFNSSwwQkFBUyxTQUFUQSxNQUFTLENBQUM1QyxNQUFEO0FBQUEsU0FDbkJBLE9BQU9sQyxNQUFQLEtBQWtCLENBQW5CLEdBQXdCeUUsU0FBU3ZDLE1BQVQsQ0FBeEIsR0FBMkMwQyxTQUFTMUMsTUFBVCxDQUR2QjtBQUFBLENBQWYiLCJmaWxlIjoidHJhbnNmb3JtZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCBzdGVwUHJvZ3Jlc3MsIHNtb290aCBhcyBjYWxjU21vb3RoaW5nIH0gZnJvbSAnLi9jYWxjJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBjb2xvciBhcyBwYXJzZUNvbG9yIH0gZnJvbSAnLi9wYXJzZXJzJztcbmltcG9ydCB7IGN1cnJlbnRGcmFtZVRpbWUgfSBmcm9tICdmcmFtZXN5bmMnO1xuXG5jb25zdCBub29wID0gKHYpID0+IHY7XG5cbi8qKlxuICogQXBwZW5kIFVuaXRcbiAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGVuZFxuICogYXBwZW5kVW5pdCgncHgnLCAyMCkgLT4gJzIwcHgnXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVuaXQpXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBhcHBlbmRVbml0ID0gKHVuaXQpID0+ICh2KSA9PiBgJHt2fSR7dW5pdH1gO1xuXG4vKipcbiAqIEFwcGx5IG9mZnNldFxuICogQSBmdW5jdGlvbiB0aGF0LCBnaXZlbiBhIHZhbHVlLCB3aWxsIGdldCB0aGUgb2Zmc2V0IGZyb20gYGZyb21gXG4gKiBhbmQgYXBwbHkgaXQgdG8gYHRvYFxuICogQHBhcmFtICB7bnVtYmVyfSBmcm9tXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHRvXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGx5T2Zmc2V0ID0gKGZyb20sIHRvKSA9PiB7XG4gIGNvbnN0IGdldE9mZnNldCA9IHN1YnRyYWN0KGZyb20pO1xuICBjb25zdCBhcHBseU9mZnNldFRvID0gYWRkKHRvKTtcbiAgcmV0dXJuICh2KSA9PiBhcHBseU9mZnNldFRvKGdldE9mZnNldCh2KSk7XG59O1xuXG4vKipcbiAqIENsYW1wIHZhbHVlIGJldHdlZW5cbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVzdHJpY3QgYSBnaXZlbiB2YWx1ZSBiZXR3ZWVuIGBtaW5gIGFuZCBgbWF4YFxuICogQHBhcmFtICB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBjbGFtcE1heCA9IChtYXgpID0+ICh2KSA9PiBNYXRoLm1pbih2LCBtYXgpO1xuZXhwb3J0IGNvbnN0IGNsYW1wTWluID0gKG1pbikgPT4gKHYpID0+IE1hdGgubWF4KHYsIG1pbik7XG5leHBvcnQgY29uc3QgY2xhbXAgPSAobWluLCBtYXgpID0+IHtcbiAgY29uc3QgX21pbiA9IGNsYW1wTWluKG1pbik7XG4gIGNvbnN0IF9tYXggPSBjbGFtcE1heChtYXgpO1xuICByZXR1cm4gKHYpID0+IF9taW4oX21heCh2KSk7XG59O1xuXG5leHBvcnQgY29uc3QgY29uZGl0aW9uYWwgPSAoY29uZGl0aW9uLCBpZlRydWUsIGlmRmFsc2UgPSBub29wKSA9PiAodiwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBjb25kaXRpb24odiwgYWN0aW9uKSA/IGlmVHJ1ZSh2LCBhY3Rpb24pIDogaWZGYWxzZSh2LCBhY3Rpb24pO1xufTtcblxuLyoqXG4gKiBQaXBlXG4gKiBDb21wb3NlIG90aGVyIHRyYW5zZm9ybWVycyB0byBydW4gbGluZWFyaWx5XG4gKiBwaXBlKG1pbigyMCksIG1heCg0MCkpXG4gKiBAcGFyYW0gIHsuLi5mdW5jdGlvbnN9IHRyYW5zZm9ybWVyc1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCBwaXBlID0gKC4uLnRyYW5zZm9ybWVycykgPT4ge1xuICBjb25zdCBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAgcmV0dXJuIChhY2MsIC4uLmFyZ3MpID0+IHtcbiAgICBsZXQgdiA9IGFjYztcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0odiwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xuXG4vKipcbiAqIEludGVycG9sYXRlIGZyb20gc2V0IG9mIHZhbHVlcyB0byBhbm90aGVyXG4gKiBAcGFyYW0gIHtBcnJheX0gaW5wdXQgYXJyYXlcbiAqIEBwYXJhbSAge0FycmF5fSBvdXRwdXRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSByYW5nZUVhc2luZ1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCBpbnRlcnBvbGF0ZSA9IChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykgPT4ge1xuICBjb25zdCByYW5nZUxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgY29uc3QgZmluYWxJbmRleCA9IHJhbmdlTGVuZ3RoIC0gMTtcblxuICByZXR1cm4gKHYpID0+IHtcbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1pbmltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPD0gaW5wdXRbMF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbMF07XG4gICAgfVxuXG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtYXhpbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2ID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgIH1cblxuICAgIGxldCBpID0gMTtcblxuICAgIC8vIEZpbmQgaW5kZXggb2YgcmFuZ2Ugc3RhcnRcbiAgICBmb3IgKDsgaSA8IHJhbmdlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpbnB1dFtpXSA+IHYgfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzc0luUmFuZ2UgPSBnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbnB1dFtpIC0gMV0sIGlucHV0W2ldLCB2KTtcbiAgICBjb25zdCBlYXNlZFByb2dyZXNzID0gKHJhbmdlRWFzaW5nKSA/IHJhbmdlRWFzaW5nW2kgLSAxXShwcm9ncmVzc0luUmFuZ2UpIDogcHJvZ3Jlc3NJblJhbmdlO1xuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhvdXRwdXRbaSAtIDFdLCBvdXRwdXRbaV0sIGVhc2VkUHJvZ3Jlc3MpO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHN1YnRyYWN0ID0gKG9yaWdpbikgPT4gKHYpID0+IHYgLSBvcmlnaW47XG5leHBvcnQgY29uc3QgYWRkID0gKG9yaWdpbikgPT4gKHYpID0+IHYgKyBvcmlnaW47XG5leHBvcnQgY29uc3QgZGl2aWRlID0gKG9yaWdpbikgPT4gKHYpID0+IHYgLyBvcmlnaW47XG5leHBvcnQgY29uc3QgbXVsdGlwbHkgPSAob3JpZ2luKSA9PiAodikgPT4gdiAqIG9yaWdpbjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcgPSAoYWx0ZXJEaXNwbGFjZW1lbnQgPSBub29wKSA9PiAoY29uc3RhbnQsIG9yaWdpbikgPT4gKHYpID0+IHtcbiAgY29uc3QgZGlzcGxhY2VtZW50ID0gb3JpZ2luIC0gdjtcbiAgY29uc3Qgc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQgPSAtIGNvbnN0YW50ICogKDAgLSBhbHRlckRpc3BsYWNlbWVudChNYXRoLmFicyhkaXNwbGFjZW1lbnQpKSk7XG4gIHJldHVybiAoZGlzcGxhY2VtZW50IDw9IDApID8gb3JpZ2luICsgc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQgOiBvcmlnaW4gLSBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBzcHJpbmcgPSBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nKCk7XG5leHBvcnQgY29uc3Qgbm9ubGluZWFyU3ByaW5nID0gZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZyhNYXRoLnNxcnQpO1xuXG5leHBvcnQgY29uc3Qgd3JhcCA9IChtaW4sIG1heCkgPT4gKHYpID0+IHtcbiAgY29uc3QgcmFuZ2VTaXplID0gbWF4IC0gbWluO1xuICByZXR1cm4gKCh2IC0gbWluKSAlIHJhbmdlU2l6ZSArIHJhbmdlU2l6ZSkgJSByYW5nZVNpemUgKyBtaW47XG59O1xuXG5leHBvcnQgY29uc3Qgc21vb3RoID0gKHN0cmVuZ3RoID0gNTApID0+IHtcbiAgbGV0IHByZXZpb3VzVmFsdWUgPSAwO1xuICBsZXQgbGFzdFVwZGF0ZWQgPSAwO1xuXG4gIHJldHVybiAodikgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRGcmFtZXN0YW1wID0gY3VycmVudEZyYW1lVGltZSgpO1xuICAgIGNvbnN0IHRpbWVEZWx0YSA9IChjdXJyZW50RnJhbWVzdGFtcCAhPT0gbGFzdFVwZGF0ZWQpID8gY3VycmVudEZyYW1lc3RhbXAgLSBsYXN0VXBkYXRlZCA6IDA7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aW1lRGVsdGEgPyBjYWxjU21vb3RoaW5nKHYsIHByZXZpb3VzVmFsdWUsIHRpbWVEZWx0YSwgc3RyZW5ndGgpIDogcHJldmlvdXNWYWx1ZTtcbiAgICBsYXN0VXBkYXRlZCA9IGN1cnJlbnRGcmFtZXN0YW1wO1xuICAgIHByZXZpb3VzVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICByZXR1cm4gbmV3VmFsdWU7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc25hcCA9IChwb2ludHMpID0+IHtcbiAgaWYgKHR5cGVvZiBwb2ludHMgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuICh2KSA9PiBNYXRoLnJvdW5kKHYgLyBwb2ludHMpICogcG9pbnRzO1xuICB9IGVsc2Uge1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBudW1Qb2ludHMgPSBwb2ludHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuICh2KSA9PiB7XG4gICAgICBsZXQgbGFzdERpc3RhbmNlID0gTWF0aC5hYnMocG9pbnRzWzBdIC0gdik7XG5cbiAgICAgIGZvciAoaSA9IDE7IGkgPCBudW1Qb2ludHM7IGkrKykge1xuICAgICAgICBjb25zdCBwb2ludCA9IHBvaW50c1tpXTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmFicyhwb2ludCAtIHYpO1xuXG4gICAgICAgIGlmIChkaXN0YW5jZSA9PT0gMCkgcmV0dXJuIHBvaW50O1xuXG4gICAgICAgIGlmIChkaXN0YW5jZSA+IGxhc3REaXN0YW5jZSkgcmV0dXJuIHBvaW50c1tpIC0gMV07XG5cbiAgICAgICAgaWYgKGkgPT09IG51bVBvaW50cyAtIDEpIHJldHVybiBwb2ludDtcblxuICAgICAgICBsYXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc3RlcHMgPSAoc3RlcHMsIG1pbiA9IDAsIG1heCA9IDEsIGRpcmVjdGlvbiA9ICdzdGFydCcpID0+ICh2KSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzID0gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUobWluLCBtYXgsIHYpO1xuICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MobWluLCBtYXgsIHN0ZXBQcm9ncmVzcyhzdGVwcywgcHJvZ3Jlc3MsIGRpcmVjdGlvbikpO1xufTtcblxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybUNoaWxkVmFsdWVzID0gKGNoaWxkVHJhbnNmb3JtZXJzKSA9PiB7XG4gIGNvbnN0IG11dGFibGVTdGF0ZSA9IHt9O1xuICByZXR1cm4gKHYpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdikge1xuICAgICAgY29uc3QgY2hpbGRUcmFuc2Zvcm1lciA9IGNoaWxkVHJhbnNmb3JtZXJzW2tleV07XG4gICAgICBpZiAoY2hpbGRUcmFuc2Zvcm1lcikge1xuICAgICAgICBtdXRhYmxlU3RhdGVba2V5XSA9IGNoaWxkVHJhbnNmb3JtZXIodltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbXV0YWJsZVN0YXRlO1xuICB9O1xufTtcblxuLy8gVW5pdCB0cmFuc2Zvcm1lcnNcbmV4cG9ydCBjb25zdCBwZXJjZW50ID0gYXBwZW5kVW5pdCgnJScpO1xuZXhwb3J0IGNvbnN0IGRlZ3JlZXMgPSBhcHBlbmRVbml0KCdkZWcnKTtcbmV4cG9ydCBjb25zdCBweCA9IGFwcGVuZFVuaXQoJ3B4Jyk7XG5cbmV4cG9ydCBjb25zdCByZ2JVbml0ID0gcGlwZShcbiAgY2xhbXAoMCwgMjU1KSxcbiAgTWF0aC5yb3VuZFxuKTtcblxuY29uc3QgcmdiYVRlbXBsYXRlID0gKHsgcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEgPSAxIH0pID0+XG4gIGByZ2JhKCR7cmVkfSwgJHtncmVlbn0sICR7Ymx1ZX0sICR7YWxwaGF9KWA7XG5cbmV4cG9ydCBjb25zdCByZ2JhID0gcGlwZShcbiAgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMoe1xuICAgIHJlZDogcmdiVW5pdCxcbiAgICBncmVlbjogcmdiVW5pdCxcbiAgICBibHVlOiByZ2JVbml0LFxuICAgIGFscGhhXG4gIH0pLFxuICByZ2JhVGVtcGxhdGVcbik7XG5cbmNvbnN0IGhzbGFUZW1wbGF0ZSA9ICh7IGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBhbHBoYSA9IDEgfSkgPT5cbiAgYGhzbGEoJHtodWV9LCAke3NhdHVyYXRpb259LCAke2xpZ2h0bmVzc30sICR7YWxwaGF9KWA7XG5cbmV4cG9ydCBjb25zdCBoc2xhID0gcGlwZShcbiAgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMoe1xuICAgIGh1ZTogcGFyc2VJbnQsXG4gICAgc2F0dXJhdGlvbjogcGVyY2VudCxcbiAgICBsaWdodG5lc3M6IHBlcmNlbnQsXG4gICAgYWxwaGFcbiAgfSksXG4gIGhzbGFUZW1wbGF0ZVxuKTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yID0gKHYpID0+IHtcbiAgaWYgKHYuaGFzT3duUHJvcGVydHkoJ3JlZCcpKSB7XG4gICAgcmV0dXJuIHJnYmEodik7XG4gIH0gZWxzZSBpZiAodi5oYXNPd25Qcm9wZXJ0eSgnaHVlJykpIHtcbiAgICByZXR1cm4gaHNsYSh2KTtcbiAgfVxuICByZXR1cm4gdjtcbn07XG5cbmV4cG9ydCBjb25zdCBhbHBoYSA9IGNsYW1wKDAsIDEpO1xuXG5jb25zdCBibGVuZCA9IChmcm9tLCB0bywgdikgPT4ge1xuICBjb25zdCBmcm9tRXhwbyA9IGZyb20gKiBmcm9tO1xuICBjb25zdCB0b0V4cG8gPSB0byAqIHRvO1xuICByZXR1cm4gTWF0aC5zcXJ0KHYgKiAodG9FeHBvIC0gZnJvbUV4cG8pICsgZnJvbUV4cG8pO1xufTtcbi8vIGh0dHA6Ly9jb2RlcGVuLmlvL29zdWJsYWtlL3Blbi94R1ZWYU5cbmV4cG9ydCBjb25zdCBibGVuZENvbG9yID0gKGZyb20sIHRvKSA9PiB7XG4gIGNvbnN0IGZyb21Db2xvciA9IGlzU3RyaW5nKGZyb20pID8gcGFyc2VDb2xvcihmcm9tKSA6IGZyb207XG4gIGNvbnN0IHRvQ29sb3IgPSBpc1N0cmluZyh0bykgPyBwYXJzZUNvbG9yKHRvKTogdG87XG5cbiAgY29uc3QgYmxlbmRlZCA9IHsgLi4uZnJvbUNvbG9yIH07XG5cbiAgcmV0dXJuICh2KSA9PiB7XG4gICAgZm9yIChsZXQga2V5IGluIGJsZW5kZWQpIHtcbiAgICAgIGJsZW5kZWRba2V5XSA9IGJsZW5kKGZyb21Db2xvcltrZXldLCB0b0NvbG9yW2tleV0sIHYpO1xuICAgIH1cbiAgICBibGVuZGVkLnJlZCA9IGJsZW5kKGZyb21Db2xvci5yZWQsIHRvQ29sb3IucmVkLCB2KTtcbiAgICBibGVuZGVkLmdyZWVuID0gYmxlbmQoZnJvbUNvbG9yLmdyZWVuLCB0b0NvbG9yLmdyZWVuLCB2KTtcbiAgICBibGVuZGVkLmJsdWUgPSBibGVuZChmcm9tQ29sb3IuYmx1ZSwgdG9Db2xvci5ibHVlLCB2KTtcbiAgICBibGVuZGVkLmFscGhhID0gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZnJvbUNvbG9yLmFscGhhLCB0b0NvbG9yLmFscGhhLCB2KTtcbiAgICByZXR1cm4gYmxlbmRlZDtcbiAgfTtcbn07XG5cbi8vIEJlemllciByZXNvbHZlclxuLy8gUmVmYWN0b3JlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9odWdoc2svYmV6aWVyL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4vKipcbiMjIFRoZSBNSVQgTGljZW5zZSAoTUlUKSAjI1xuXG5Db3B5cmlnaHQgKGMpIDIwMTMgSHVnaCBLZW5uZWR5XG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cbiAqL1xuY29uc3QgcmVzb2x2ZTMgPSAocG9pbnRzKSA9PiAodCkgPT4ge1xuICBjb25zdCB1dCA9IDEgLSB0O1xuICByZXR1cm4gKHBvaW50c1swXSAqIHV0ICsgcG9pbnRzWzFdICogdCkgKiB1dCArIChwb2ludHNbMV0gKiB1dCArIHBvaW50c1syXSAqIHQpICogdDtcbn07XG5cbmNvbnN0IHJlc29sdmU0ID0gKHBvaW50cykgPT4gKHQpID0+IHtcbiAgY29uc3QgdXQgPSAxIC0gdDtcbiAgY29uc3QgYTEgPSBwb2ludHNbMV0gKiB1dCArIHBvaW50c1syXSAqIHQ7XG4gIHJldHVybiAoKHBvaW50c1swXSAqIHV0ICsgcG9pbnRzWzFdICogdCkgKiB1dCArIGExICogdCkgKiB1dCArIChhMSAqIHV0ICsgKHBvaW50c1syXSAqIHV0ICsgcG9pbnRzWzNdICogdCkgKiB0KSAqIHQ7XG59O1xuXG5leHBvcnQgY29uc3QgYmV6aWVyID0gKHBvaW50cykgPT5cbiAgKHBvaW50cy5sZW5ndGggPT09IDMpID8gcmVzb2x2ZTMocG9pbnRzKSA6IHJlc29sdmU0KHBvaW50cyk7XG4iXX0=

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.complex = exports.color = exports.hsla = exports.hex = exports.rgba = exports.rgbUnit = exports.scale = exports.px = exports.percent = exports.degrees = exports.alpha = exports.number = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Value types
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * alpha
                                                                                                                                                                                                                                                                   * degrees
                                                                                                                                                                                                                                                                   * hex
                                                                                                                                                                                                                                                                   * hsla
                                                                                                                                                                                                                                                                   * percent
                                                                                                                                                                                                                                                                   * px
                                                                                                                                                                                                                                                                   * rgbUnit
                                                                                                                                                                                                                                                                   * rgb
                                                                                                                                                                                                                                                                   * scale
                                                                                                                                                                                                                                                                   */


var _transformers = __webpack_require__(4);

var _parsers = __webpack_require__(14);

var _utils = __webpack_require__(0);

var number = exports.number = {
  test: _utils.isNum,
  parse: parseFloat
};

// Value types
var alpha = exports.alpha = _extends({}, number, {
  transform: _transformers.alpha
});

var degrees = exports.degrees = (0, _utils.createUnitType)('deg', _transformers.degrees);
var percent = exports.percent = (0, _utils.createUnitType)('%', _transformers.percent);
var px = exports.px = (0, _utils.createUnitType)('px', _transformers.px);

var scale = exports.scale = _extends({}, number, {
  default: 1
});

var rgbUnit = exports.rgbUnit = _extends({}, number, {
  transform: _transformers.rgbUnit
});

var rgba = exports.rgba = {
  test: _utils.isRgb,
  parse: _parsers.rgba,
  transform: _transformers.rgba
};

var hex = exports.hex = _extends({}, rgba, {
  test: _utils.isHex,
  parse: _parsers.hex
});

var hsla = exports.hsla = {
  test: _utils.isHsl,
  parse: _parsers.hsla,
  transform: _transformers.hsla
};

var color = exports.color = {
  parse: _parsers.color,
  test: _utils.isColor,
  transform: _transformers.color
};

var FLOAT_REGEX = /(-)?(\d[\d\.]*)/g;
var generateToken = function generateToken(token) {
  return '${' + token + '}';
};
var complex = exports.complex = {
  test: function test(v) {
    var matches = v.match && v.match(FLOAT_REGEX);
    return (0, _utils.isArray)(matches) && matches.length > 1;
  },
  parse: function parse(v) {
    var parsedValue = {};
    v.match(FLOAT_REGEX).forEach(function (value, i) {
      return parsedValue[i] = parseFloat(value);
    });
    return parsedValue;
  },
  createTransformer: function createTransformer(prop) {
    var counter = 0;
    var template = prop.replace(FLOAT_REGEX, function () {
      return generateToken(counter++);
    });

    return function (v) {
      var output = template;
      for (var key in v) {
        if (v.hasOwnProperty(key)) {
          output = output.replace(generateToken(key), v[key]);
        }
      }

      return output;
    };
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdmFsdWUtdHlwZXMuanMiXSwibmFtZXMiOlsibnVtYmVyIiwidGVzdCIsInBhcnNlIiwicGFyc2VGbG9hdCIsImFscGhhIiwidHJhbnNmb3JtIiwiZGVncmVlcyIsInBlcmNlbnQiLCJweCIsInNjYWxlIiwiZGVmYXVsdCIsInJnYlVuaXQiLCJyZ2JhIiwiaGV4IiwiaHNsYSIsImNvbG9yIiwiRkxPQVRfUkVHRVgiLCJnZW5lcmF0ZVRva2VuIiwidG9rZW4iLCJjb21wbGV4IiwidiIsIm1hdGNoZXMiLCJtYXRjaCIsImxlbmd0aCIsInBhcnNlZFZhbHVlIiwiZm9yRWFjaCIsInZhbHVlIiwiaSIsImNyZWF0ZVRyYW5zZm9ybWVyIiwicHJvcCIsImNvdW50ZXIiLCJ0ZW1wbGF0ZSIsInJlcGxhY2UiLCJvdXRwdXQiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a1FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQWFBOztBQVVBOztBQU1BOztBQVVPLElBQU1BLDBCQUFTO0FBQ3BCQyxvQkFEb0I7QUFFcEJDLFNBQU9DO0FBRmEsQ0FBZjs7QUFLUDtBQUNPLElBQU1DLHFDQUNSSixNQURRO0FBRVhLO0FBRlcsRUFBTjs7QUFLQSxJQUFNQyw0QkFBVSwyQkFBZSxLQUFmLHdCQUFoQjtBQUNBLElBQU1DLDRCQUFVLDJCQUFlLEdBQWYsd0JBQWhCO0FBQ0EsSUFBTUMsa0JBQUssMkJBQWUsSUFBZixtQkFBWDs7QUFFQSxJQUFNQyxxQ0FDUlQsTUFEUTtBQUVYVSxXQUFTO0FBRkUsRUFBTjs7QUFLQSxJQUFNQyx5Q0FDUlgsTUFEUTtBQUVYSztBQUZXLEVBQU47O0FBS0EsSUFBTU8sc0JBQU87QUFDbEJYLG9CQURrQjtBQUVsQkMsc0JBRmtCO0FBR2xCRztBQUhrQixDQUFiOztBQU1BLElBQU1RLGlDQUNSRCxJQURRO0FBRVhYLG9CQUZXO0FBR1hDO0FBSFcsRUFBTjs7QUFNQSxJQUFNWSxzQkFBTztBQUNsQmIsb0JBRGtCO0FBRWxCQyxzQkFGa0I7QUFHbEJHO0FBSGtCLENBQWI7O0FBTUEsSUFBTVUsd0JBQVE7QUFDbkJiLHVCQURtQjtBQUVuQkQsc0JBRm1CO0FBR25CSTtBQUhtQixDQUFkOztBQU1QLElBQU1XLGNBQWMsa0JBQXBCO0FBQ0EsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFEO0FBQUEsU0FBVyxPQUFPQSxLQUFQLEdBQWUsR0FBMUI7QUFBQSxDQUF0QjtBQUNPLElBQU1DLDRCQUFVO0FBQ3JCbEIsUUFBTSxjQUFDbUIsQ0FBRCxFQUFPO0FBQ1gsUUFBTUMsVUFBVUQsRUFBRUUsS0FBRixJQUFXRixFQUFFRSxLQUFGLENBQVFOLFdBQVIsQ0FBM0I7QUFDQSxXQUFRLG9CQUFRSyxPQUFSLEtBQW9CQSxRQUFRRSxNQUFSLEdBQWlCLENBQTdDO0FBQ0QsR0FKb0I7QUFLckJyQixTQUFPLGVBQUNrQixDQUFELEVBQU87QUFDWixRQUFNSSxjQUFjLEVBQXBCO0FBQ0FKLE1BQUVFLEtBQUYsQ0FBUU4sV0FBUixFQUFxQlMsT0FBckIsQ0FBNkIsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSO0FBQUEsYUFBY0gsWUFBWUcsQ0FBWixJQUFpQnhCLFdBQVd1QixLQUFYLENBQS9CO0FBQUEsS0FBN0I7QUFDQSxXQUFPRixXQUFQO0FBQ0QsR0FUb0I7QUFVckJJLHFCQUFtQiwyQkFBQ0MsSUFBRCxFQUFVO0FBQzNCLFFBQUlDLFVBQVUsQ0FBZDtBQUNBLFFBQU1DLFdBQVdGLEtBQUtHLE9BQUwsQ0FBYWhCLFdBQWIsRUFBMEI7QUFBQSxhQUFNQyxjQUFjYSxTQUFkLENBQU47QUFBQSxLQUExQixDQUFqQjs7QUFFQSxXQUFPLFVBQUNWLENBQUQsRUFBTztBQUNaLFVBQUlhLFNBQVNGLFFBQWI7QUFDQSxXQUFLLElBQUlHLEdBQVQsSUFBZ0JkLENBQWhCLEVBQW1CO0FBQ2pCLFlBQUlBLEVBQUVlLGNBQUYsQ0FBaUJELEdBQWpCLENBQUosRUFBMkI7QUFDekJELG1CQUFTQSxPQUFPRCxPQUFQLENBQWVmLGNBQWNpQixHQUFkLENBQWYsRUFBbUNkLEVBQUVjLEdBQUYsQ0FBbkMsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0QsTUFBUDtBQUNELEtBVEQ7QUFVRDtBQXhCb0IsQ0FBaEIiLCJmaWxlIjoidmFsdWUtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFZhbHVlIHR5cGVzXG4gKlxuICogYWxwaGFcbiAqIGRlZ3JlZXNcbiAqIGhleFxuICogaHNsYVxuICogcGVyY2VudFxuICogcHhcbiAqIHJnYlVuaXRcbiAqIHJnYlxuICogc2NhbGVcbiAqL1xuaW1wb3J0IHtcbiAgcmdiVW5pdCBhcyB0cmFuc2Zvcm1SR0JVbml0LFxuICByZ2JhIGFzIHRyYW5zZm9ybVJnYmEsXG4gIGFscGhhIGFzIHRyYW5zZm9ybUFscGhhLFxuICBoc2xhIGFzIHRyYW5zZm9ybUhzbGEsXG4gIGNvbG9yIGFzIHRyYW5zZm9ybUNvbG9yLFxuICBweCBhcyB0cmFuc2Zvcm1QeCxcbiAgcGVyY2VudCBhcyB0cmFuc2Zvcm1QZXJjZW50LFxuICBkZWdyZWVzIGFzIHRyYW5zZm9ybURlZ3JlZXNcbn0gZnJvbSAnLi90cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHtcbiAgaGV4IGFzIHBhcnNlSGV4LFxuICByZ2JhIGFzIHBhcnNlUmdiYSxcbiAgaHNsYSBhcyBwYXJzZUhzbGEsXG4gIGNvbG9yIGFzIHBhcnNlQ29sb3Jcbn0gZnJvbSAnLi9wYXJzZXJzJztcbmltcG9ydCB7XG4gIGNyZWF0ZVVuaXRUeXBlLFxuICBpc0FycmF5LFxuICBpc051bSxcbiAgaXNSZ2IsXG4gIGlzSHNsLFxuICBpc0hleCxcbiAgaXNDb2xvclxufSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IG51bWJlciA9IHtcbiAgdGVzdDogaXNOdW0sXG4gIHBhcnNlOiBwYXJzZUZsb2F0XG59O1xuXG4vLyBWYWx1ZSB0eXBlc1xuZXhwb3J0IGNvbnN0IGFscGhhID0ge1xuICAuLi5udW1iZXIsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtQWxwaGFcbn07XG5cbmV4cG9ydCBjb25zdCBkZWdyZWVzID0gY3JlYXRlVW5pdFR5cGUoJ2RlZycsIHRyYW5zZm9ybURlZ3JlZXMpO1xuZXhwb3J0IGNvbnN0IHBlcmNlbnQgPSBjcmVhdGVVbml0VHlwZSgnJScsIHRyYW5zZm9ybVBlcmNlbnQpO1xuZXhwb3J0IGNvbnN0IHB4ID0gY3JlYXRlVW5pdFR5cGUoJ3B4JywgdHJhbnNmb3JtUHgpO1xuXG5leHBvcnQgY29uc3Qgc2NhbGUgPSB7XG4gIC4uLm51bWJlcixcbiAgZGVmYXVsdDogMVxufTtcblxuZXhwb3J0IGNvbnN0IHJnYlVuaXQgPSB7XG4gIC4uLm51bWJlcixcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1SR0JVbml0XG59O1xuXG5leHBvcnQgY29uc3QgcmdiYSA9IHtcbiAgdGVzdDogaXNSZ2IsXG4gIHBhcnNlOiBwYXJzZVJnYmEsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtUmdiYVxufTtcblxuZXhwb3J0IGNvbnN0IGhleCA9IHtcbiAgLi4ucmdiYSxcbiAgdGVzdDogaXNIZXgsXG4gIHBhcnNlOiBwYXJzZUhleFxufTtcblxuZXhwb3J0IGNvbnN0IGhzbGEgPSB7XG4gIHRlc3Q6IGlzSHNsLFxuICBwYXJzZTogcGFyc2VIc2xhLFxuICB0cmFuc2Zvcm06IHRyYW5zZm9ybUhzbGFcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9IHtcbiAgcGFyc2U6IHBhcnNlQ29sb3IsXG4gIHRlc3Q6IGlzQ29sb3IsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtQ29sb3Jcbn07XG5cbmNvbnN0IEZMT0FUX1JFR0VYID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xuY29uc3QgZ2VuZXJhdGVUb2tlbiA9ICh0b2tlbikgPT4gJyR7JyArIHRva2VuICsgJ30nO1xuZXhwb3J0IGNvbnN0IGNvbXBsZXggPSB7XG4gIHRlc3Q6ICh2KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IHYubWF0Y2ggJiYgdi5tYXRjaChGTE9BVF9SRUdFWCk7XG4gICAgcmV0dXJuIChpc0FycmF5KG1hdGNoZXMpICYmIG1hdGNoZXMubGVuZ3RoID4gMSk7XG4gIH0sXG4gIHBhcnNlOiAodikgPT4ge1xuICAgIGNvbnN0IHBhcnNlZFZhbHVlID0ge307XG4gICAgdi5tYXRjaChGTE9BVF9SRUdFWCkuZm9yRWFjaCgodmFsdWUsIGkpID0+IHBhcnNlZFZhbHVlW2ldID0gcGFyc2VGbG9hdCh2YWx1ZSkpO1xuICAgIHJldHVybiBwYXJzZWRWYWx1ZTtcbiAgfSxcbiAgY3JlYXRlVHJhbnNmb3JtZXI6IChwcm9wKSA9PiB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gcHJvcC5yZXBsYWNlKEZMT0FUX1JFR0VYLCAoKSA9PiBnZW5lcmF0ZVRva2VuKGNvdW50ZXIrKykpO1xuXG4gICAgcmV0dXJuICh2KSA9PiB7XG4gICAgICBsZXQgb3V0cHV0ID0gdGVtcGxhdGU7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gdikge1xuICAgICAgICBpZiAodi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoZ2VuZXJhdGVUb2tlbihrZXkpLCB2W2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbiAgfVxufTtcbiJdfQ==

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

var _framesync = __webpack_require__(1);

var _transformers = __webpack_require__(4);

var _calc = __webpack_require__(3);

var _easing = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var clampProgress = (0, _transformers.clamp)(0, 1);

var NEXT_STEPS = {
  loop: function loop(tween) {
    return tween.start();
  },
  yoyo: function yoyo(tween) {
    return tween.reverse().start();
  },
  flip: function flip(tween) {
    return tween.flip().start();
  }
};

var Tween = function (_Action) {
  _inherits(Tween, _Action);

  function Tween() {
    _classCallCheck(this, Tween);

    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
  }

  Tween.prototype.onStart = function onStart() {
    var _props = this.props,
        duration = _props.duration,
        playDirection = _props.playDirection;


    this.elapsed = playDirection === 1 ? 0 : duration;
    this.progress = 0;
  };

  Tween.prototype.update = function update() {
    var _props2 = this.props,
        duration = _props2.duration,
        ease = _props2.ease,
        from = _props2.from,
        to = _props2.to,
        playDirection = _props2.playDirection;


    if (!this.isManualUpdate) {
      this.elapsed += (0, _framesync.timeSinceLastFrame)() * playDirection;
    }

    this.isManualUpdate = false;
    this.progress = clampProgress((0, _calc.getProgressFromValue)(0, duration, this.elapsed));

    return (0, _calc.getValueFromProgress)(from, to, ease(this.progress));
  };

  Tween.prototype.isActionComplete = function isActionComplete() {
    var _props3 = this.props,
        duration = _props3.duration,
        playDirection = _props3.playDirection,
        yoyo = _props3.yoyo,
        loop = _props3.loop,
        flip = _props3.flip;

    var isComplete = playDirection === 1 ? this.elapsed >= duration : this.elapsed <= 0;

    if (isComplete && (yoyo || loop || flip)) {
      var isStepTaken = false;

      for (var key in NEXT_STEPS) {
        var nextStep = NEXT_STEPS[key];
        var countProp = key + 'Count';
        var stepMax = this.getProp(key);
        var stepCount = this.getProp(countProp);

        if (stepMax > stepCount) {
          var _setProps;

          this.setProps((_setProps = {}, _setProps[countProp] = stepCount + 1, _setProps));
          nextStep(this);
          isStepTaken = true;
        }
      }

      if (isStepTaken) isComplete = false;
    }

    return isComplete;
  };

  Tween.prototype.getElapsed = function getElapsed() {
    return this.elapsed;
  };

  Tween.prototype.flip = function flip() {
    this.elapsed = this.props.duration - this.elapsed;
    var _ref = [this.props.to, this.props.from];
    this.props.from = _ref[0];
    this.props.to = _ref[1];

    return this;
  };

  Tween.prototype.reverse = function reverse() {
    this.props.playDirection *= -1;
    return this;
  };

  Tween.prototype.seek = function seek(progress) {
    var duration = this.props.duration;

    this.elapsed = (0, _calc.getValueFromProgress)(0, duration, progress);
    this.isManualUpdate = true;
    if (!this.isActive()) this.scheduledUpdate();
  };

  return Tween;
}(_2.default);

Tween.defaultProps = {
  duration: 300,
  ease: _easing.easeOut,
  from: 0,
  to: 1,
  flip: 0,
  flipCount: 0,
  yoyo: 0,
  yoyoCount: 0,
  loop: 0,
  loopCount: 0,
  playDirection: 1
};

exports.default = function (props) {
  return new Tween(props);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3R3ZWVuLmpzIl0sIm5hbWVzIjpbImNsYW1wUHJvZ3Jlc3MiLCJORVhUX1NURVBTIiwibG9vcCIsInR3ZWVuIiwic3RhcnQiLCJ5b3lvIiwicmV2ZXJzZSIsImZsaXAiLCJUd2VlbiIsIm9uU3RhcnQiLCJwcm9wcyIsImR1cmF0aW9uIiwicGxheURpcmVjdGlvbiIsImVsYXBzZWQiLCJwcm9ncmVzcyIsInVwZGF0ZSIsImVhc2UiLCJmcm9tIiwidG8iLCJpc01hbnVhbFVwZGF0ZSIsImlzQWN0aW9uQ29tcGxldGUiLCJpc0NvbXBsZXRlIiwiaXNTdGVwVGFrZW4iLCJrZXkiLCJuZXh0U3RlcCIsImNvdW50UHJvcCIsInN0ZXBNYXgiLCJnZXRQcm9wIiwic3RlcENvdW50Iiwic2V0UHJvcHMiLCJnZXRFbGFwc2VkIiwic2VlayIsImlzQWN0aXZlIiwic2NoZWR1bGVkVXBkYXRlIiwiZGVmYXVsdFByb3BzIiwiZmxpcENvdW50IiwieW95b0NvdW50IiwibG9vcENvdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQix5QkFBTSxDQUFOLEVBQVMsQ0FBVCxDQUF0Qjs7QUFFQSxJQUFNQyxhQUFhO0FBQ2pCQyxRQUFNLGNBQUNDLEtBQUQ7QUFBQSxXQUFXQSxNQUFNQyxLQUFOLEVBQVg7QUFBQSxHQURXO0FBRWpCQyxRQUFNLGNBQUNGLEtBQUQ7QUFBQSxXQUFXQSxNQUFNRyxPQUFOLEdBQWdCRixLQUFoQixFQUFYO0FBQUEsR0FGVztBQUdqQkcsUUFBTSxjQUFDSixLQUFEO0FBQUEsV0FBV0EsTUFBTUksSUFBTixHQUFhSCxLQUFiLEVBQVg7QUFBQTtBQUhXLENBQW5COztJQU1NSSxLOzs7Ozs7Ozs7a0JBZUpDLE8sc0JBQVU7QUFBQSxpQkFDNEIsS0FBS0MsS0FEakM7QUFBQSxRQUNBQyxRQURBLFVBQ0FBLFFBREE7QUFBQSxRQUNVQyxhQURWLFVB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QUtLLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxRQUFJLENBQUMsS0FBS2EsUUFBTCxFQUFMLEVBQXNCLEtBQUtDLGVBQUw7QUFDdkIsRzs7Ozs7QUFuRkd6QixLLENBQ0cwQixZLEdBQWU7QUFDcEJ2QixZQUFVLEdBRFU7QUFFcEJLLHVCQUZvQjtBQUdwQkMsUUFBTSxDQUhjO0FBSXBCQyxNQUFJLENBSmdCO0FBS3BCWCxRQUFNLENBTGM7QUFNcEI0QixhQUFXLENBTlM7QUFPcEI5QixRQUFNLENBUGM7QUFRcEIrQixhQUFXLENBUlM7QUFTcEJsQyxRQUFNLENBVGM7QUFVcEJtQyxhQUFXLENBVlM7QUFXcEJ6QixpQkFBZTtBQVhLLEM7O2tCQXFGVCxVQUFDRixLQUFEO0FBQUEsU0FBVyxJQUFJRixLQUFKLENBQVVFLEtBQVYsQ0FBWDtBQUFBLEMiLCJmaWxlIjoidHdlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IHRpbWVTaW5jZUxhc3RGcmFtZSB9IGZyb20gJ2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gJy4uL2luYy90cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgZWFzZU91dCB9IGZyb20gJy4uL2luYy9lYXNpbmcnO1xuXG5jb25zdCBjbGFtcFByb2dyZXNzID0gY2xhbXAoMCwgMSk7XG5cbmNvbnN0IE5FWFRfU1RFUFMgPSB7XG4gIGxvb3A6ICh0d2VlbikgPT4gdHdlZW4uc3RhcnQoKSxcbiAgeW95bzogKHR3ZWVuKSA9PiB0d2Vlbi5yZXZlcnNlKCkuc3RhcnQoKSxcbiAgZmxpcDogKHR3ZWVuKSA9PiB0d2Vlbi5mbGlwKCkuc3RhcnQoKVxufTtcblxuY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgZWFzZTogZWFzZU91dCxcbiAgICBmcm9tOiAwLFxuICAgIHRvOiAxLFxuICAgIGZsaXA6IDAsXG4gICAgZmxpcENvdW50OiAwLFxuICAgIHlveW86IDAsXG4gICAgeW95b0NvdW50OiAwLFxuICAgIGxvb3A6IDAsXG4gICAgbG9vcENvdW50OiAwLFxuICAgIHBsYXlEaXJlY3Rpb246IDFcbiAgfTtcblxuICBvblN0YXJ0KCkge1xuICAgIGNvbnN0IHsgZHVyYXRpb24sIHBsYXlEaXJlY3Rpb24gfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLmVsYXBzZWQgPSAocGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogZHVyYXRpb247XG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeyBkdXJhdGlvbiwgZWFzZSwgZnJvbSwgdG8sIHBsYXlEaXJlY3Rpb24gfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXRoaXMuaXNNYW51YWxVcGRhdGUpIHtcbiAgICAgIHRoaXMuZWxhcHNlZCArPSB0aW1lU2luY2VMYXN0RnJhbWUoKSAqIHBsYXlEaXJlY3Rpb247XG4gICAgfVxuXG4gICAgdGhpcy5pc01hbnVhbFVwZGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBjbGFtcFByb2dyZXNzKGdldFByb2dyZXNzRnJvbVZhbHVlKDAsIGR1cmF0aW9uLCB0aGlzLmVsYXBzZWQpKTtcblxuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhmcm9tLCB0bywgZWFzZSh0aGlzLnByb2dyZXNzKSk7XG4gIH1cblxuICBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIGNvbnN0IHsgZHVyYXRpb24sIHBsYXlEaXJlY3Rpb24sIHlveW8sIGxvb3AsIGZsaXAgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGlzQ29tcGxldGUgPSAocGxheURpcmVjdGlvbiA9PT0gMSkgPyAodGhpcy5lbGFwc2VkID49IGR1cmF0aW9uKSA6ICh0aGlzLmVsYXBzZWQgPD0gMCk7XG5cbiAgICBpZiAoaXNDb21wbGV0ZSAmJiAoeW95byB8fCBsb29wIHx8IGZsaXApKSB7XG4gICAgICBsZXQgaXNTdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIE5FWFRfU1RFUFMpIHtcbiAgICAgICAgY29uc3QgbmV4dFN0ZXAgPSBORVhUX1NURVBTW2tleV07XG4gICAgICAgIGNvbnN0IGNvdW50UHJvcCA9IGtleSArICdDb3VudCc7XG4gICAgICAgIGNvbnN0IHN0ZXBNYXggPSB0aGlzLmdldFByb3Aoa2V5KTtcbiAgICAgICAgY29uc3Qgc3RlcENvdW50ID0gdGhpcy5nZXRQcm9wKGNvdW50UHJvcCk7XG5cbiAgICAgICAgaWYgKHN0ZXBNYXggPiBzdGVwQ291bnQpIHtcbiAgICAgICAgICB0aGlzLnNldFByb3BzKHtcbiAgICAgICAgICAgIFtjb3VudFByb3BdOiBzdGVwQ291bnQgKyAxXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbmV4dFN0ZXAodGhpcyk7XG4gICAgICAgICAgaXNTdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1N0ZXBUYWtlbikgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0NvbXBsZXRlO1xuICB9XG5cbiAgZ2V0RWxhcHNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGFwc2VkO1xuICB9XG5cbiAgZmxpcCgpIHtcbiAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLnByb3BzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuICAgIFt0aGlzLnByb3BzLmZyb20sIHRoaXMucHJvcHMudG9dID0gW3RoaXMucHJvcHMudG8sIHRoaXMucHJvcHMuZnJvbV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXZlcnNlKCkge1xuICAgIHRoaXMucHJvcHMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNlZWsocHJvZ3Jlc3MpIHtcbiAgICBjb25zdCB7IGR1cmF0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuZWxhcHNlZCA9IGdldFZhbHVlRnJvbVByb2dyZXNzKDAsIGR1cmF0aW9uLCBwcm9ncmVzcyk7XG4gICAgdGhpcy5pc01hbnVhbFVwZGF0ZSA9IHRydWU7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHRoaXMuc2NoZWR1bGVkVXBkYXRlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgVHdlZW4ocHJvcHMpO1xuIl19

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _framesync = __webpack_require__(1);

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
  function Renderer(props) {
    _classCallCheck(this, Renderer);

    this.render = this.render.bind(this);

    this.props = _extends({}, this.constructor.defaultProps, props);

    this.state = {};
    this.changedValues = [];
  }

  /**
   * Get current state.
   * If `key` is not defined, return entire cached state.
   * If `key` is defined, return cached value if present.
   * If `key` is defined and cached value is not present, read and return.
   * @param  {string} (optional) key of value
   * @return {value}
   */


  Renderer.prototype.get = function get(key) {
    if (key) {
      if (this.state[key] !== undefined) {
        return this.state[key];
      } else {
        return this.read(key);
      }
    } else {
      return this.state;
    }
  };

  /**
   * Read value according to `onRead`
   * @param  {string} Name of property to read
   * @return {[type]}
   */


  Renderer.prototype.read = function read(key) {
    if (this.onRead) {
      return this.onRead(key);
    }
  };

  /**
   * Update `state` with new values and schedule `render`.
   * @param {object} values
   * @param {value} value toset
   */


  Renderer.prototype.set = function set() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[1] === 'undefined') {
      var values = args[0];
      // Set multiple values

      for (var key in values) {
        this.setValue(key, values[key]);
      }
    } else {
      var _key2 = args[0],
          value = args[1];

      this.setValue(_key2, value);
    }

    if (this.hasChanged) {
      (0, _framesync.onFrameRender)(this.render);
    }

    return this;
  };

  // > Wiley - 6 in the Morning
  /**
   * Set a single value
   * If a string or number, set directly.
   * If an object or array, create new object or array
   * if it doesn't already exist. Then shallow compare
   * to set and compare individual values.
   * One of the clearer drawbacks and annoyances with
   * using mutable instead of immutable states.
   * @param {[type]} key
   * @param {[type]} value
   */


  Renderer.prototype.setValue = function setValue(key, value) {
    var currentValue = this.state[key];

    // If number or string, set directly
    if ((0, _utils.isNum)(value) || (0, _utils.isString)(value)) {
      if (currentValue !== value) {
        this.state[key] = value;
        this.hasChanged = true;
      }
    } else if ((0, _utils.isArray)(value)) {
      if (!currentValue) {
        this.state[key] = [];
      }

      var numValues = value.length;
      for (var i = 0; i < numValues; i++) {
        if (this.state[key][i] !== value[i]) {
          this.state[key][i] = value[i];
          this.hasChanged = true;
        }
      }
    } else if ((0, _utils.isObj)(value)) {
      if (!currentValue) {
        this.state[key] = {};
      }

      for (var valueKey in value) {
        if (this.state[key][valueKey] !== value[valueKey]) {
          this.state[key][valueKey] = value[valueKey];
          this.hasChanged = true;
        }
      }
    }

    if (this.hasChanged && this.changedValues.indexOf(key) === -1) {
      this.changedValues.push(key);
    }
  };

  /**
   * Fires `onRender` if values have changed or `forceRender`
   * is set to true.
   * @return {this}
   */


  Renderer.prototype.render = function render() {
    var forceRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if ((forceRender || this.hasChanged) && this.onRender) {
      this.onRender();
    }

    this.changedValues.length = 0;
    this.hasChanged = false;

    return this;
  };

  return Renderer;
}();

exports.default = Renderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiUmVuZGVyZXIiLCJwcm9wcyIsInJlbmRlciIsImJpbmQiLCJjb25zdHJ1Y3RvciIsImRlZmF1bHRQcm9wcyIsInN0YXRlIiwiY2hhbmdlZFZhbHVlcyIsImdldCIsImtleSIsInVuZGVmaW5lZCIsInJlYWQiLCJvblJlYWQiLCJzZXQiLCJhcmdzIiwidmFsdWVzIiwic2V0VmFsdWUiLCJ2YWx1ZSIsImhhc0NoYW5nZWQiLCJjdXJyZW50VmFsdWUiLCJudW1WYWx1ZXMiLCJsZW5ndGgiLCJpIiwidmFsdWVLZXkiLCJpbmRleE9mIiwicHVzaCIsImZvcmNlUmVuZGVyIiwib25SZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0lBRU1BLFE7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQyxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQWQ7O0FBRUEsU0FBS0YsS0FBTCxnQkFDSyxLQUFLRyxXQUFMLENBQWlCQyxZQUR0QixFQUVLSixLQUZMOztBQUtBLFNBQUtLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixFQUFyQjtBQUNEOztBQUVEOzs7Ozs7Ozs7O3FCQVFBQyxHLGdCQUFJQyxHLEVBQUs7QUFDUCxRQUFJQSxHQUFKLEVBQVM7QUFDUCxVQUFJLEtBQUtILEtBQUwsQ0FBV0csR0FBWCxNQUFvQkMsU0FBeEIsRUFBbUM7QUFDakMsZUFBTyxLQUFLSixLQUFMLENBQVdHLEdBQVgsQ0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sS0FBS0UsSUFBTCxDQUFVRixHQUFWLENBQVA7QUFDRDtBQUNGLEtBTkQsTUFNTztBQUNMLGFBQU8sS0FBS0gsS0FBWjtBQUNEO0FBQ0YsRzs7QUFFRDs7Ozs7OztxQkFLQUssSSxpQkFBS0YsRyxFQUFLO0FBQ1IsUUFBSSxLQUFLRyxNQUFULEVBQWlCO0FB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QixHQUE0QixDQUE1QjtBQUNBLFNBQUtILFVBQUwsR0FBa0IsS0FBbEI7O0FBRUEsV0FBTyxJQUFQO0FBQ0QsRzs7Ozs7a0JBR1lsQixRIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb25GcmFtZVJlbmRlciB9IGZyb20gJ2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBpc0FycmF5LCBpc09iaiwgaXNOdW0sIGlzU3RyaW5nIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfTtcblxuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLmNoYW5nZWRWYWx1ZXMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBzdGF0ZS5cbiAgICogSWYgYGtleWAgaXMgbm90IGRlZmluZWQsIHJldHVybiBlbnRpcmUgY2FjaGVkIHN0YXRlLlxuICAgKiBJZiBga2V5YCBpcyBkZWZpbmVkLCByZXR1cm4gY2FjaGVkIHZhbHVlIGlmIHByZXNlbnQuXG4gICAqIElmIGBrZXlgIGlzIGRlZmluZWQgYW5kIGNhY2hlZCB2YWx1ZSBpcyBub3QgcHJlc2VudCwgcmVhZCBhbmQgcmV0dXJuLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IChvcHRpb25hbCkga2V5IG9mIHZhbHVlXG4gICAqIEByZXR1cm4ge3ZhbHVlfVxuICAgKi9cbiAgZ2V0KGtleSkge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZChrZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVhZCB2YWx1ZSBhY2NvcmRpbmcgdG8gYG9uUmVhZGBcbiAgICogQHBhcmFtICB7c3RyaW5nfSBOYW1lIG9mIHByb3BlcnR5IHRvIHJlYWRcbiAgICogQHJldHVybiB7W3R5cGVdfVxuICAgKi9cbiAgcmVhZChrZXkpIHtcbiAgICBpZiAodGhpcy5vblJlYWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uUmVhZChrZXkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYHN0YXRlYCB3aXRoIG5ldyB2YWx1ZXMgYW5kIHNjaGVkdWxlIGByZW5kZXJgLlxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzXG4gICAqIEBwYXJhbSB7dmFsdWV9IHZhbHVlIHRvc2V0XG4gICAqL1xuICBzZXQoLi4uYXJncykge1xuICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IFsgdmFsdWVzIF0gPSBhcmdzO1xuICAgICAgLy8gU2V0IG11bHRpcGxlIHZhbHVlc1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCB2YWx1ZXNba2V5XSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFsga2V5LCB2YWx1ZSBdID0gYXJncztcbiAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCkge1xuICAgICAgb25GcmFtZVJlbmRlcih0aGlzLnJlbmRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyA+IFdpbGV5IC0gNiBpbiB0aGUgTW9ybmluZ1xuICAvKipcbiAgICogU2V0IGEgc2luZ2xlIHZhbHVlXG4gICAqIElmIGEgc3RyaW5nIG9yIG51bWJlciwgc2V0IGRpcmVjdGx5LlxuICAgKiBJZiBhbiBvYmplY3Qgb3IgYXJyYXksIGNyZWF0ZSBuZXcgb2JqZWN0IG9yIGFycmF5XG4gICAqIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC4gVGhlbiBzaGFsbG93IGNvbXBhcmVcbiAgICogdG8gc2V0IGFuZCBjb21wYXJlIGluZGl2aWR1YWwgdmFsdWVzLlxuICAgKiBPbmUgb2YgdGhlIGNsZWFyZXIgZHJhd2JhY2tzIGFuZCBhbm5veWFuY2VzIHdpdGhcbiAgICogdXNpbmcgbXV0YWJsZSBpbnN0ZWFkIG9mIGltbXV0YWJsZSBzdGF0ZXMuXG4gICAqIEBwYXJhbSB7W3R5cGVdfSBrZXlcbiAgICogQHBhcmFtIHtbdHlwZV19IHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZShrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5zdGF0ZVtrZXldO1xuXG4gICAgLy8gSWYgbnVtYmVyIG9yIHN0cmluZywgc2V0IGRpcmVjdGx5XG4gICAgaWYgKGlzTnVtKHZhbHVlKSB8fCBpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGlmICghY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBudW1WYWx1ZXMgPSB2YWx1ZS5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVZhbHVlczsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV1baV0gIT09IHZhbHVlW2ldKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldW2ldID0gdmFsdWVbaV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNPYmoodmFsdWUpKSB7XG4gICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgdmFsdWVLZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gIT09IHZhbHVlW3ZhbHVlS2V5XSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gPSB2YWx1ZVt2YWx1ZUtleV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQgJiYgdGhpcy5jaGFuZ2VkVmFsdWVzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5wdXNoKGtleSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGBvblJlbmRlcmAgaWYgdmFsdWVzIGhhdmUgY2hhbmdlZCBvciBgZm9yY2VSZW5kZXJgXG4gICAqIGlzIHNldCB0byB0cnVlLlxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgcmVuZGVyKGZvcmNlUmVuZGVyID0gZmFsc2UpIHtcbiAgICBpZiAoKGZvcmNlUmVuZGVyIHx8IHRoaXMuaGFzQ2hhbmdlZCkgJiYgdGhpcy5vblJlbmRlcikge1xuICAgICAgdGhpcy5vblJlbmRlcigpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XG4iXX0=

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var axes = ['X', 'Y', 'Z'];

var transformProps = {
  x: true,
  y: true,
  z: true
};

var SCALE = 'scale';
var ROTATE = 'rotate';
var TRANSFORM_PERSPECTIVE = 'transformPerspective';
var TERMS = ['translate', SCALE, ROTATE, 'skew', TRANSFORM_PERSPECTIVE];

transformProps[ROTATE] = transformProps[SCALE] = transformProps[TRANSFORM_PERSPECTIVE] = true;

TERMS.forEach(function (term) {
  return axes.forEach(function (axis) {
    return transformProps[term + axis] = true;
  });
});

exports.default = transformProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyJdLCJuYW1lcyI6WyJheGVzIiwidHJhbnNmb3JtUHJvcHMiLCJ4IiwieSIsInoiLCJTQ0FMRSIsIlJPVEFURSIsIlRSQU5TRk9STV9QRVJTUEVDVElWRSIsIlRFUk1TIiwiZm9yRWFjaCIsInRlcm0iLCJheGlzIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNQSxPQUFPLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWI7O0FBRUEsSUFBSUMsaUJBQWlCO0FBQ25CQyxLQUFHLElBRGdCO0FBRW5CQyxLQUFHLElBRmdCO0FBR25CQyxLQUFHO0FBSGdCLENBQXJCOztBQU1BLElBQU1DLFFBQVEsT0FBZDtBQUNBLElBQU1DLFNBQVMsUUFBZjtBQUNBLElBQU1DLHdCQUF3QixzQkFBOUI7QUFDQSxJQUFNQyxRQUFRLENBQUMsV0FBRCxFQUFjSCxLQUFkLEVBQXFCQyxNQUFyQixFQUE2QixNQUE3QixFQUFxQ0MscUJBQXJDLENBQWQ7O0FBRUFOLGVBQWVLLE1BQWYsSUFBeUJMLGVBQWVJLEtBQWYsSUFBd0JKLGVBQWVNLHFCQUFmLElBQXdDLElBQXpGOztBQUVBQyxNQUFNQyxPQUFOLENBQWMsVUFBQ0MsSUFBRDtBQUFBLFNBQVVWLEtBQUtTLE9BQUwsQ0FBYSxVQUFDRSxJQUFEO0FBQUEsV0FBVVYsZUFBZVMsT0FBT0MsSUFBdEIsSUFBOEIsSUFBeEM7QUFBQSxHQUFiLENBQVY7QUFBQSxDQUFkOztrQkFFZVYsYyIsImZpbGUiOiJ0cmFuc2Zvcm0tcHJvcHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBheGVzID0gWydYJywgJ1knLCAnWiddO1xuXG5sZXQgdHJhbnNmb3JtUHJvcHMgPSB7XG4gIHg6IHRydWUsXG4gIHk6IHRydWUsXG4gIHo6IHRydWVcbn07XG5cbmNvbnN0IFNDQUxFID0gJ3NjYWxlJztcbmNvbnN0IFJPVEFURSA9ICdyb3RhdGUnO1xuY29uc3QgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbmNvbnN0IFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaCgodGVybSkgPT4gYXhlcy5mb3JFYWNoKChheGlzKSA9PiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zZm9ybVByb3BzOyJdfQ==

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.svgPath = exports.svg = exports.css = exports.Renderer = exports.value = exports.spring = exports.stagger = exports.tween = exports.trackOffset = exports.touches = exports.pointer = exports.physics = exports.parallel = exports.delay = exports.crossFade = exports.composite = exports.colorTween = exports.chain = exports.Action = exports.valueTypes = exports.transform = exports.easing = exports.calc = undefined;

var _calc2 = __webpack_require__(3);

var _calc = _interopRequireWildcard(_calc2);

var _easing2 = __webpack_require__(10);

var _easing = _interopRequireWildcard(_easing2);

var _transformers = __webpack_require__(4);

var _transform = _interopRequireWildcard(_transformers);

var _valueTypes2 = __webpack_require__(5);

var _valueTypes = _interopRequireWildcard(_valueTypes2);

var _actions = __webpack_require__(2);

var _actions2 = _interopRequireDefault(_actions);

var _chain2 = __webpack_require__(15);

var _chain3 = _interopRequireDefault(_chain2);

var _colorTween2 = __webpack_require__(21);

var _colorTween3 = _interopRequireDefault(_colorTween2);

var _composite2 = __webpack_require__(11);

var _composite3 = _interopRequireDefault(_composite2);

var _crossFade2 = __webpack_require__(22);

var _crossFade3 = _interopRequireDefault(_crossFade2);

var _delay2 = __webpack_require__(16);

var _delay3 = _interopRequireDefault(_delay2);

var _parallel2 = __webpack_require__(12);

var _parallel3 = _interopRequireDefault(_parallel2);

var _physics2 = __webpack_require__(23);

var _physics3 = _interopRequireDefault(_physics2);

var _pointer2 = __webpack_require__(24);

var _pointer3 = _interopRequireDefault(_pointer2);

var _touches2 = __webpack_require__(25);

var _touches3 = _interopRequireDefault(_touches2);

var _trackOffset2 = __webpack_require__(26);

var _trackOffset3 = _interopRequireDefault(_trackOffset2);

var _tween2 = __webpack_require__(6);

var _tween3 = _interopRequireDefault(_tween2);

var _stagger2 = __webpack_require__(27);

var _stagger3 = _interopRequireDefault(_stagger2);

var _spring2 = __webpack_require__(28);

var _spring3 = _interopRequireDefault(_spring2);

var _value2 = __webpack_require__(13);

var _value3 = _interopRequireDefault(_value2);

var _renderers = __webpack_require__(7);

var _renderers2 = _interopRequireDefault(_renderers);

var _css2 = __webpack_require__(29);

var _css3 = _interopRequireDefault(_css2);

var _svg2 = __webpack_require__(31);

var _svg3 = _interopRequireDefault(_svg2);

var _svgPath2 = __webpack_require__(34);

var _svgPath3 = _interopRequireDefault(_svgPath2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.calc = _calc; // Framesync schedulers

exports.easing = _easing;
exports.transform = _transform;
exports.valueTypes = _valueTypes;

// Actions

exports.Action = _actions2.default;
exports.chain = _chain3.default;
exports.colorTween = _colorTween3.default;
exports.composite = _composite3.default;
exports.crossFade = _crossFade3.default;
exports.delay = _delay3.default;
//export inertia from './actions/inertia';

exports.parallel = _parallel3.default;
exports.physics = _physics3.default;
exports.pointer = _pointer3.default;
exports.touches = _touches3.default;
exports.trackOffset = _trackOffset3.default;
exports.tween = _tween3.default;
exports.stagger = _stagger3.default;
exports.spring = _spring3.default;
exports.value = _value3.default;

// Renderers

exports.Renderer = _renderers2.default;
exports.css = _css3.default;
exports.svg = _svg3.default;
exports.svgPath = _svgPath3.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOlsiY2FsYyIsImVhc2luZyIsInRyYW5zZm9ybSIsInZhbHVlVHlwZXMiLCJBY3Rpb24iLCJjaGFpbiIsImNvbG9yVHdlZW4iLCJjb21wb3NpdGUiLCJjcm9zc0ZhZGUiLCJkZWxheSIsInBhcmFsbGVsIiwicGh5c2ljcyIsInBvaW50ZXIiLCJ0b3VjaGVzIiwidHJhY2tPZmZzZXQiLCJ0d2VlbiIsInN0YWdnZXIiLCJzcHJpbmciLCJ2YWx1ZSIsIlJlbmRlcmVyIiwiY3NzIiwic3ZnIiwic3ZnUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFDWUEsSSxVQURaOztRQUVZQyxNO1FBQ0FDLFM7UUFDQUMsVTs7QUFFWjs7UUFDT0MsTTtRQUNBQyxLO1FBQ0FDLFU7UUFDQUMsUztRQUNBQyxTO1FBQ0FDLEs7QUFDUDs7UUFDT0MsUTtRQUNBQyxPO1FBQ0FDLE87UUFDQUMsTztRQUNBQyxXO1FBQ0FDLEs7UUFDQUMsTztRQUNBQyxNO1FBQ0FDLEs7O0FBRVA7O1FBQ09DLFE7UUFDQUMsRztRQUNBQyxHO1FBQ0FDLE8iLCJmaWxlIjoicG9wbW90aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRnJhbWVzeW5jIHNjaGVkdWxlcnNcbmV4cG9ydCAqIGFzIGNhbGMgZnJvbSAnLi9pbmMvY2FsYyc7XG5leHBvcnQgKiBhcyBlYXNpbmcgZnJvbSAnLi9pbmMvZWFzaW5nJztcbmV4cG9ydCAqIGFzIHRyYW5zZm9ybSBmcm9tICcuL2luYy90cmFuc2Zvcm1lcnMnO1xuZXhwb3J0ICogYXMgdmFsdWVUeXBlcyBmcm9tICcuL2luYy92YWx1ZS10eXBlcyc7XG5cbi8vIEFjdGlvbnNcbmV4cG9ydCBBY3Rpb24gZnJvbSAnLi9hY3Rpb25zJztcbmV4cG9ydCBjaGFpbiBmcm9tICcuL2FjdGlvbnMvY2hhaW4nO1xuZXhwb3J0IGNvbG9yVHdlZW4gZnJvbSAnLi9hY3Rpb25zL2NvbG9yLXR3ZWVuJztcbmV4cG9ydCBjb21wb3NpdGUgZnJvbSAnLi9hY3Rpb25zL2NvbXBvc2l0ZSc7XG5leHBvcnQgY3Jvc3NGYWRlIGZyb20gJy4vYWN0aW9ucy9jcm9zcy1mYWRlJztcbmV4cG9ydCBkZWxheSBmcm9tICcuL2FjdGlvbnMvZGVsYXknO1xuLy9leHBvcnQgaW5lcnRpYSBmcm9tICcuL2FjdGlvbnMvaW5lcnRpYSc7XG5leHBvcnQgcGFyYWxsZWwgZnJvbSAnLi9hY3Rpb25zL3BhcmFsbGVsJztcbmV4cG9ydCBwaHlzaWNzIGZyb20gJy4vYWN0aW9ucy9waHlzaWNzJztcbmV4cG9ydCBwb2ludGVyIGZyb20gJy4vYWN0aW9ucy9wb2ludGVyJztcbmV4cG9ydCB0b3VjaGVzIGZyb20gJy4vYWN0aW9ucy90b3VjaGVzJztcbmV4cG9ydCB0cmFja09mZnNldCBmcm9tICcuL2FjdGlvbnMvdHJhY2stb2Zmc2V0JztcbmV4cG9ydCB0d2VlbiBmcm9tICcuL2FjdGlvbnMvdHdlZW4nO1xuZXhwb3J0IHN0YWdnZXIgZnJvbSAnLi9hY3Rpb25zL3N0YWdnZXInO1xuZXhwb3J0IHNwcmluZyBmcm9tICcuL2FjdGlvbnMvc3ByaW5nJztcbmV4cG9ydCB2YWx1ZSBmcm9tICcuL2FjdGlvbnMvdmFsdWUnO1xuXG4vLyBSZW5kZXJlcnNcbmV4cG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVycyc7XG5leHBvcnQgY3NzIGZyb20gJy4vcmVuZGVyZXJzL2Nzcyc7XG5leHBvcnQgc3ZnIGZyb20gJy4vcmVuZGVyZXJzL3N2Zyc7XG5leHBvcnQgc3ZnUGF0aCBmcm9tICcuL3JlbmRlcmVycy9zdmctcGF0aCc7XG4iXX0=

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cubicBezier = exports.anticipate = exports.createAnticipateEasing = exports.backInOut = exports.backOut = exports.backIn = exports.createBackIn = exports.circInOut = exports.circOut = exports.circIn = exports.easeInOut = exports.easeOut = exports.easeIn = exports.createExpoIn = exports.linear = exports.createMirroredEasing = exports.createReversedEasing = undefined;

var _transformers = __webpack_require__(4);

var DEFAULT_OVERSHOOT_STRENGTH = 1.525;

var createReversedEasing = exports.createReversedEasing = function createReversedEasing(easing) {
  return function (p) {
    return 1 - easing(1 - p);
  };
};
var createMirroredEasing = exports.createMirroredEasing = function createMirroredEasing(easing) {
  return function (p) {
    return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
  };
};

var linear = exports.linear = function linear(p) {
  return p;
};

var createExpoIn = exports.createExpoIn = function createExpoIn(power) {
  return function (p) {
    return Math.pow(p, power);
  };
};
var easeIn = exports.easeIn = createExpoIn(2);
var easeOut = exports.easeOut = createReversedEasing(easeIn);
var easeInOut = exports.easeInOut = createMirroredEasing(easeIn);

var circIn = exports.circIn = function circIn(p) {
  return 1 - Math.sin(Math.acos(p));
};
var circOut = exports.circOut = createReversedEasing(circIn);
var circInOut = exports.circInOut = createMirroredEasing(circOut);

var createBackIn = exports.createBackIn = function createBackIn(power) {
  return function (p) {
    return p * p * ((power + 1) * p - power);
  };
};
var backIn = exports.backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = exports.backOut = createReversedEasing(backIn);
var backInOut = exports.backInOut = createMirroredEasing(backIn);

var createAnticipateEasing = exports.createAnticipateEasing = function createAnticipateEasing(power) {
  var backEasing = createBackIn(power);
  return function (p) {
    return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
  };
};

var anticipate = exports.anticipate = createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);

var cubicBezier = exports.cubicBezier = function cubicBezier(x1, y1, x2, y2) {
  var xBezier = (0, _transformers.bezier)(0, x1, x2, 1);
  var yBezier = (0, _transformers.bezier)(0, y1, y2, 1);

  return function (t) {
    return yBezier(xBezier(t));
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvZWFzaW5nLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIIiwiY3JlYXRlUmV2ZXJzZWRFYXNpbmciLCJlYXNpbmciLCJwIiwiY3JlYXRlTWlycm9yZWRFYXNpbmciLCJsaW5lYXIiLCJjcmVhdGVFeHBvSW4iLCJwb3dlciIsImVhc2VJbiIsImVhc2VPdXQiLCJlYXNlSW5PdXQiLCJjaXJjSW4iLCJNYXRoIiwic2luIiwiYWNvcyIsImNpcmNPdXQiLCJjaXJjSW5PdXQiLCJjcmVhdGVCYWNrSW4iLCJiYWNrSW4iLCJiYWNrT3V0IiwiYmFja0luT3V0IiwiY3JlYXRlQW50aWNpcGF0ZUVhc2luZyIsImJhY2tFYXNpbmciLCJwb3ciLCJhbnRpY2lwYXRlIiwiY3ViaWNCZXppZXIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInhCZXppZXIiLCJ5QmV6aWVyIiwidCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxJQUFNQSw2QkFBNkIsS0FBbkM7O0FBRU8sSUFBTUMsc0RBQXVCLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsTUFBRDtBQUFBLFNBQVksVUFBQ0MsQ0FBRDtBQUFBLFdBQU8sSUFBSUQsT0FBTyxJQUFJQyxDQUFYLENBQVg7QUFBQSxHQUFaO0FBQUEsQ0FBN0I7QUFDQSxJQUFNQyxzREFBdUIsU0FBdkJBLG9CQUF1QixDQUFDRixNQUFEO0FBQUEsU0FBWSxVQUFDQyxDQUFEO0FBQUEsV0FBUUEsS0FBSyxHQUFOLEdBQWFELE9BQU8sSUFBSUMsQ0FBWCxJQUFnQixDQUE3QixHQUFpQyxDQUFDLElBQUlELE9BQU8sS0FBSyxJQUFJQyxDQUFULENBQVAsQ0FBTCxJQUE0QixDQUFwRTtBQUFBLEdBQVo7QUFBQSxDQUE3Qjs7QUFFQSxJQUFNRSwwQkFBUyxTQUFUQSxNQUFTLENBQUNGLENBQUQ7QUFBQSxTQUFPQSxDQUFQO0FBQUEsQ0FBZjs7QUFFQSxJQUFNRyxzQ0FBZSxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxTQUFXLFVBQUNKLENBQUQ7QUFBQSxvQkFBT0EsQ0FBUCxFQUFZSSxLQUFaO0FBQUEsR0FBWDtBQUFBLENBQXJCO0FBQ0EsSUFBTUMsMEJBQVNGLGFBQWEsQ0FBYixDQUFmO0FBQ0EsSUFBTUcsNEJBQVVSLHFCQUFxQk8sTUFBckIsQ0FBaEI7QUFDQSxJQUFNRSxnQ0FBWU4scUJBQXFCSSxNQUFyQixDQUFsQjs7QUFFQSxJQUFNRywwQkFBUyxTQUFUQSxNQUFTLENBQUNSLENBQUQ7QUFBQSxTQUFPLElBQUlTLEtBQUtDLEdBQUwsQ0FBU0QsS0FBS0UsSUFBTCxDQUFVWCxDQUFWLENBQVQsQ0FBWDtBQUFBLENBQWY7QUFDQSxJQUFNWSw0QkFBVWQscUJBQXFCVSxNQUFyQixDQUFoQjtBQUNBLElBQU1LLGdDQUFZWixxQkFBcUJXLE9BQXJCLENBQWxCOztBQUVBLElBQU1FLHNDQUFlLFNBQWZBLFlBQWUsQ0FBQ1YsS0FBRDtBQUFBLFNBQVcsVUFBQ0osQ0FBRDtBQUFBLFdBQVFBLElBQUlBLENBQUwsSUFBVyxDQUFDSSxRQUFRLENBQVQsSUFBY0osQ0FBZCxHQUFrQkksS0FBN0IsQ0FBUDtBQUFBLEdBQVg7QUFBQSxDQUFyQjtBQUNBLElBQU1XLDBCQUFTRCxhQUFhakIsMEJBQWIsQ0FBZjtBQUNBLElBQU1tQiw0QkFBVWxCLHFCQUFxQmlCLE1BQXJCLENBQWhCO0FBQ0EsSUFBTUUsZ0NBQVloQixxQkFBcUJjLE1BQXJCLENBQWxCOztBQUVBLElBQU1HLDBEQUF5QixTQUF6QkEsc0JBQXlCLENBQUNkLEtBQUQsRUFBVztBQUMvQyxNQUFNZSxhQUFhTCxhQUFhVixLQUFiLENBQW5CO0FBQ0EsU0FBTyxVQUFDSixDQUFEO0FBQUEsV0FBUSxDQUFDQSxLQUFLLENBQU4sSUFBVyxDQUFaLEdBQWlCLE1BQU1tQixXQUFXbkIsQ0FBWCxDQUF2QixHQUF1QyxPQUFPLElBQUlTLEtBQUtXLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELElBQU9wQixJQUFJLENBQVgsQ0FBWixDQUFYLENBQTlDO0FBQUEsR0FBUDtBQUNELENBSE07O0FBS0EsSUFBTXFCLGtDQUFhSCx1QkFBdUJyQiwwQkFBdkIsQ0FBbkI7O0FBRUEsSUFBTXlCLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsRUFBRCxFQUFLQyxFQUFMLEVBQVNDLEVBQVQsRUFBYUMsRUFBYixFQUFvQjtBQUM3QyxNQUFNQyxVQUFVLDBCQUFPLENBQVAsRUFBVUosRUFBVixFQUFjRSxFQUFkLEVBQWtCLENBQWxCLENBQWhCO0FBQ0EsTUFBTUcsVUFBVSwwQkFBTyxDQUFQLEVBQVVKLEVBQVYsRUFBY0UsRUFBZCxFQUFrQixDQUFsQixDQUFoQjs7QUFFQSxTQUFPLFVBQUNHLENBQUQ7QUFBQSxXQUFPRCxRQUFRRCxRQUFRRSxDQUFSLENBQVIsQ0FBUDtBQUFBLEdBQVA7QUFDRCxDQUxNIiwiZmlsZSI6ImVhc2luZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJlemllciB9IGZyb20gJy4vdHJhbnNmb3JtZXJzJztcblxuY29uc3QgREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEggPSAxLjUyNTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJldmVyc2VkRWFzaW5nID0gKGVhc2luZykgPT4gKHApID0+IDEgLSBlYXNpbmcoMSAtIHApO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gKGVhc2luZykgPT4gKHApID0+IChwIDw9IDAuNSkgPyBlYXNpbmcoMiAqIHApIC8gMiA6ICgyIC0gZWFzaW5nKDIgKiAoMSAtIHApKSkgLyAyO1xuXG5leHBvcnQgY29uc3QgbGluZWFyID0gKHApID0+IHA7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVFeHBvSW4gPSAocG93ZXIpID0+IChwKSA9PiBwICoqIHBvd2VyO1xuZXhwb3J0IGNvbnN0IGVhc2VJbiA9IGNyZWF0ZUV4cG9JbigyKTtcbmV4cG9ydCBjb25zdCBlYXNlT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoZWFzZUluKTtcbmV4cG9ydCBjb25zdCBlYXNlSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhlYXNlSW4pO1xuXG5leHBvcnQgY29uc3QgY2lyY0luID0gKHApID0+IDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocCkpO1xuZXhwb3J0IGNvbnN0IGNpcmNPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhjaXJjSW4pO1xuZXhwb3J0IGNvbnN0IGNpcmNJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGNpcmNPdXQpO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQmFja0luID0gKHBvd2VyKSA9PiAocCkgPT4gKHAgKiBwKSAqICgocG93ZXIgKyAxKSAqIHAgLSBwb3dlcik7XG5leHBvcnQgY29uc3QgYmFja0luID0gY3JlYXRlQmFja0luKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcbmV4cG9ydCBjb25zdCBiYWNrT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoYmFja0luKTtcbmV4cG9ydCBjb25zdCBiYWNrSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhiYWNrSW4pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQW50aWNpcGF0ZUVhc2luZyA9IChwb3dlcikgPT4ge1xuICBjb25zdCBiYWNrRWFzaW5nID0gY3JlYXRlQmFja0luKHBvd2VyKTtcbiAgcmV0dXJuIChwKSA9PiAoKHAgKj0gMikgPCAxKSA/IDAuNSAqIGJhY2tFYXNpbmcocCkgOiAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwIC0gMSkpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhbnRpY2lwYXRlID0gY3JlYXRlQW50aWNpcGF0ZUVhc2luZyhERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG5cbmV4cG9ydCBjb25zdCBjdWJpY0JlemllciA9ICh4MSwgeTEsIHgyLCB5MikgPT4ge1xuICBjb25zdCB4QmV6aWVyID0gYmV6aWVyKDAsIHgxLCB4MiwgMSk7XG4gIGNvbnN0IHlCZXppZXIgPSBiZXppZXIoMCwgeTEsIHkyLCAxKTtcblxuICByZXR1cm4gKHQpID0+IHlCZXppZXIoeEJlemllcih0KSk7XG59O1xuIl19

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

var _framesync = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompositeAction = function (_Action) {
  _inherits(CompositeAction, _Action);

  function CompositeAction(props) {
    _classCallCheck(this, CompositeAction);

    var actions = props.actions,
        remainingProps = _objectWithoutProperties(props, ['actions']);

    var _this = _possibleConstructorReturn(this, _Action.call(this, remainingProps));

    _this.current = {};
    _this.actionKeys = [];
    _this.addActions(actions);
    return _this;
  }

  CompositeAction.prototype.addActions = function addActions(actions) {
    var _this2 = this;

    var _loop = function _loop(key) {
      if (_this2.actionKeys.indexOf(key) === -1) {
        _this2.actionKeys.push(key);
      }

      _this2[key] = actions[key];

      var onUpdate = function onUpdate(v) {
        _this2.current[key] = v;
        (0, _framesync.onFrameUpdate)(_this2.scheduledUpdate);
      };

      _this2[key].setProps({
        _onStop: function _onStop() {
          return _this2.numActiveActions--;
        }
      }).addListener(onUpdate);
    };

    for (var key in actions) {
      _loop(key);
    }
  };

  CompositeAction.prototype.onStart = function onStart() {
    var _this3 = this;

    this.numActiveActions = this.actionKeys.length;
    this.actionKeys.forEach(function (key) {
      return _this3[key].start();
    });
  };

  CompositeAction.prototype.onStop = function onStop() {
    var _this4 = this;

    this.actionKeys.forEach(function (key) {
      return _this4[key].stop();
    });
  };

  CompositeAction.prototype.getVelocity = function getVelocity() {
    var _this5 = this;

    var velocity = {};
    this.actionKeys.forEach(function (key) {
      return velocity[key] = _this5[key].getVelocity();
    });
    return velocity;
  };

  CompositeAction.prototype.isActionComplete = function isActionComplete() {
    return this.numActiveActions === 0;
  };

  return CompositeAction;
}(_2.default);

CompositeAction.defaultProps = {
  passive: true
};

exports.default = function (actions, props) {
  return new CompositeAction(_extends({
    actions: actions
  }, props));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qcyJdLCJuYW1lcyI6WyJDb21wb3NpdGVBY3Rpb24iLCJwcm9wcyIsImFjdGlvbnMiLCJyZW1haW5pbmdQcm9wcyIsImN1cnJlbnQiLCJhY3Rpb25LZXlzIiwiYWRkQWN0aW9ucyIsImtleSIsImluZGV4T2YiLCJwdXNoIiwib25VcGRhdGUiLCJ2Iiwic2NoZWR1bGVkVXBkYXRlIiwic2V0UHJvcHMiLCJfb25TdG9wIiwibnVtQWN0aXZlQWN0aW9ucyIsImFkZExpc3RlbmVyIiwib25TdGFydCIsImxlbmd0aCIsImZvckVhY2giLCJzdGFydCIsIm9uU3RvcCIsInN0b3AiLCJnZXRWZWxvY2l0eSIsInZlbG9jaXR5IiwiaXNBY3Rpb25Db21wbGV0ZSIsImRlZmF1bHRQcm9wcyIsInBhc3NpdmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxlOzs7QUFLSiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLFFBQ1RDLE9BRFMsR0FDc0JELEtBRHRCLENBQ1RDLE9BRFM7QUFBQSxRQUNHQyxjQURILDRCQUNzQkYsS0FEdEI7O0FBQUEsaURBRWpCLG1CQUFNRSxjQUFOLENBRmlCOztBQUdqQixVQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxVQUFLQyxVQUFMLENBQWdCSixPQUFoQjtBQUxpQjtBQU1sQjs7NEJBRURJLFUsdUJBQVdKLE8sRUFBUztBQUFBOztBQUFBLCtCQUNQSyxHQURPO0FBRWhCLFVBQUksT0FBS0YsVUFBTCxDQUFnQkcsT0FBaEIsQ0FBd0JELEdBQXhCLE1BQWlDLENBQUMsQ0FBdEMsRUFBeUM7QUFDdkMsZUFBS0YsVUFBTCxDQUFnQkksSUFBaEIsQ0FBcUJGLEdBQXJCO0FBQ0Q7O0FBRUQsYUFBS0EsR0FBTCxJQUFZTCxRQUFRSyxHQUFSLENBQVo7O0FBRUEsVUFBTUcsV0FBVyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QixlQUFLUCxPQUFMLENBQWFHLEdBQWIsSUFBb0JJLENBQXBCO0FBQ0Esc0NBQWMsT0FBS0MsZUFBbkI7QUFDRCxPQUhEOztBQUtBLGFBQUtMLEdBQUwsRUFDR00sUUFESCxDQUNZO0FBQ1JDLGlCQUFTO0FBQUEsaUJBQU0sT0FBS0MsZ0JBQUwsRUFBTjtBQUFBO0FBREQsT0FEWixFQUlHQyxXQUpILENBSWVOLFFBSmY7QUFiZ0I7O0FBQ2xCLFNBQUssSUFBTUgsR0FBWCxJQUFrQkwsT0FBbEIsRUFBMkI7QUFBQSxZQUFoQkssR0FBZ0I7QUFpQjFCO0FBQ0YsRzs7NEJBRURVLE8sc0JBQVU7QUFBQTs7QUFDUixTQUFLRixnQkFBTCxHQUF3QixLQUFLVixVQUFMLENBQWdCYSxNQUF4QztBQUNBLFNBQUtiLFVBQUwsQ0FBZ0JjLE9BQWhCLENBQXdCLFVBQUNaLEdBQUQ7QUFBQSxhQUFTLE9BQUtBLEdBQUwsRUFBVWEsS0FBVixFQUFUO0FBQUEsS0FBeEI7QUFDRCxHOzs0QkFFREMsTSxxQkFBUztBQUFBOztBQUNQLFNBQUtoQixVQUFMLENBQWdCYyxPQUFoQixDQUF3QixVQUFDWixHQUFEO0FBQUEsYUFBUyxPQUFLQSxHQUFMLEVBQVVlLElBQVYsRUFBVDtBQUFBLEtBQXhCO0FBQ0QsRzs7NEJBRURDLFcsMEJBQWM7QUFBQTs7QUFDWixRQUFNQyxXQUFXLEVBQWpCO0FBQ0EsU0FBS25CLFVBQUwsQ0FBZ0JjLE9BQWhCLENBQXdCLFVBQUNaLEdBQUQ7QUFBQSxhQUFTaUIsU0FBU2pCLEdBQVQsSUFBZ0IsT0FBS0EsR0FBTCxFQUFVZ0IsV0FBVixFQUF6QjtBQUFBLEtBQXhCO0FBQ0EsV0FBT0MsUUFBUDtBQUNELEc7OzRCQUVEQyxnQiwrQkFBbUI7QUFDakIsV0FBUSxLQUFLVixnQkFBTCxLQUEwQixDQUFsQztBQUNELEc7Ozs7O0FBbkRHZixlLENBQ0cwQixZLEdBQWU7QUFDcEJDLFdBQVM7QUFEVyxDOztrQkFxRFQsVUFBQ3pCLE9BQUQsRUFBVUQsS0FBVixFQUFvQjtBQUNqQyxTQUFPLElBQUlELGVBQUo7QUFDTEU7QUFESyxLQUVGRCxLQUZFLEVBQVA7QUFJRCxDIiwiZmlsZSI6ImNvbXBvc2l0ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgb25GcmFtZVVwZGF0ZSB9IGZyb20gJ2ZyYW1lc3luYyc7XG5cbmNsYXNzIENvbXBvc2l0ZUFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgY29uc3QgeyBhY3Rpb25zLCAuLi5yZW1haW5pbmdQcm9wcyB9ID0gcHJvcHM7XG4gICAgc3VwZXIocmVtYWluaW5nUHJvcHMpO1xuICAgIHRoaXMuY3VycmVudCA9IHt9O1xuICAgIHRoaXMuYWN0aW9uS2V5cyA9IFtdO1xuICAgIHRoaXMuYWRkQWN0aW9ucyhhY3Rpb25zKTtcbiAgfVxuXG4gIGFkZEFjdGlvbnMoYWN0aW9ucykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGFjdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLmFjdGlvbktleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICB0aGlzLmFjdGlvbktleXMucHVzaChrZXkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzW2tleV0gPSBhY3Rpb25zW2tleV07XG5cbiAgICAgIGNvbnN0IG9uVXBkYXRlID0gKHYpID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50W2tleV0gPSB2O1xuICAgICAgICBvbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXNba2V5XVxuICAgICAgICAuc2V0UHJvcHMoe1xuICAgICAgICAgIF9vblN0b3A6ICgpID0+IHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tXG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRMaXN0ZW5lcihvblVwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSB0aGlzLmFjdGlvbktleXMubGVuZ3RoO1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKChrZXkpID0+IHRoaXNba2V5XS5zdGFydCgpKTtcbiAgfVxuXG4gIG9uU3RvcCgpIHtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaCgoa2V5KSA9PiB0aGlzW2tleV0uc3RvcCgpKTtcbiAgfVxuXG4gIGdldFZlbG9jaXR5KCkge1xuICAgIGNvbnN0IHZlbG9jaXR5ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goKGtleSkgPT4gdmVsb2NpdHlba2V5XSA9IHRoaXNba2V5XS5nZXRWZWxvY2l0eSgpKTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH1cblxuICBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiAodGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoYWN0aW9ucywgcHJvcHMpID0+IHtcbiAgcmV0dXJuIG5ldyBDb21wb3NpdGVBY3Rpb24oe1xuICAgIGFjdGlvbnMsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG59O1xuIl19

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

var _framesync = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Parallel = function (_Action) {
  _inherits(Parallel, _Action);

  function Parallel(props) {
    _classCallCheck(this, Parallel);

    var actions = props.actions,
        remainingProps = _objectWithoutProperties(props, ['actions']);

    var _this = _possibleConstructorReturn(this, _Action.call(this, remainingProps));

    _this.actions = [];
    _this.current = [];
    _this.addActions(actions);
    return _this;
  }

  Parallel.prototype.addAction = function addAction(action) {
    var _this2 = this;

    if (this.actions.indexOf(action) !== -1) return;

    this.actions.push(action);

    var i = this.actions.length - 1;
    var onUpdate = function onUpdate(v) {
      _this2.current[i] = v;
      (0, _framesync.onFrameUpdate)(_this2.scheduledUpdate);
    };

    onUpdate(action.get());

    action.setProps({
      _onStop: function _onStop() {
        return _this2.numActiveActions--;
      }
    }).addListener(onUpdate);
  };

  Parallel.prototype.addActions = function addActions(actions) {
    var _this3 = this;

    actions.forEach(function (action) {
      return _this3.addAction(action);
    });
  };

  Parallel.prototype.onStart = function onStart() {
    this.numActiveActions = this.actions.length;
    this.actions.forEach(function (action) {
      return action.start();
    });
  };

  Parallel.prototype.onStop = function onStop() {
    this.actions.forEach(function (action) {
      return action.stop();
    });
  };

  Parallel.prototype.getVelocity = function getVelocity() {
    return this.actions.map(function (action) {
      return action.getVelocity();
    });
  };

  Parallel.prototype.isActionComplete = function isActionComplete() {
    return this.numActiveActions === 0;
  };

  Parallel.prototype.getChildren = function getChildren() {
    return this.actions;
  };

  return Parallel;
}(_2.default);

exports.default = function (actions, props) {
  return new Parallel(_extends({ actions: actions }, props));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BhcmFsbGVsLmpzIl0sIm5hbWVzIjpbIlBhcmFsbGVsIiwicHJvcHMiLCJhY3Rpb25zIiwicmVtYWluaW5nUHJvcHMiLCJjdXJyZW50IiwiYWRkQWN0aW9ucyIsImFkZEFjdGlvbiIsImFjdGlvbiIsImluZGV4T2YiLCJwdXNoIiwiaSIsImxlbmd0aCIsIm9uVXBkYXRlIiwidiIsInNjaGVkdWxlZFVwZGF0ZSIsImdldCIsInNldFByb3BzIiwiX29uU3RvcCIsIm51bUFjdGl2ZUFjdGlvbnMiLCJhZGRMaXN0ZW5lciIsImZvckVhY2giLCJvblN0YXJ0Iiwic3RhcnQiLCJvblN0b3AiLCJzdG9wIiwiZ2V0VmVsb2NpdHkiLCJtYXAiLCJpc0FjdGlvbkNvbXBsZXRlIiwiZ2V0Q2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLFFBQ1RDLE9BRFMsR0FDc0JELEtBRHRCLENBQ1RDLE9BRFM7QUFBQSxRQUNHQyxjQURILDRCQUNzQkYsS0FEdEI7O0FBQUEsaURBRWpCLG1CQUFNRSxjQUFOLENBRmlCOztBQUdqQixVQUFLRCxPQUFMLEdBQWUsRUFBZjtBQUNBLFVBQUtFLE9BQUwsR0FBZSxFQUFmO0FBQ0EsVUFBS0MsVUFBTCxDQUFnQkgsT0FBaEI7QUFMaUI7QUFNbEI7O3FCQUVESSxTLHNCQUFVQyxNLEVBQVE7QUFBQTs7QUFDaEIsUUFBSSxLQUFLTCxPQUFMLENBQWFNLE9BQWIsQ0FBcUJELE1BQXJCLE1BQWlDLENBQUMsQ0FBdEMsRUFBeUM7O0FBRXpDLFNBQUtMLE9BQUwsQ0FBYU8sSUFBYixDQUFrQkYsTUFBbEI7O0FBRUEsUUFBTUcsSUFBSSxLQUFLUixPQUFMLENBQWFTLE1BQWIsR0FBc0IsQ0FBaEM7QUFDQSxRQUFNQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCLGFBQUtULE9BQUwsQ0FBYU0sQ0FBYixJQUFrQkcsQ0FBbEI7QUFDQSxvQ0FBYyxPQUFLQyxlQUFuQjtBQUNELEtBSEQ7O0FBS0FGLGFBQVNMLE9BQU9RLEdBQVAsRUFBVDs7QUFFQVIsV0FDR1MsUUFESCxDQUNZO0FBQ1JDLGVBQVM7QUFBQSxlQUFNLE9BQUtDLGdCQUFMLEVBQU47QUFBQTtBQURELEtBRFosRUFJR0MsV0FKSCxDQUllUCxRQUpmO0FBS0QsRzs7cUJBRURQLFUsdUJBQVdILE8sRUFBUztBQUFBOztBQUNsQkEsWUFBUWtCLE9BQVIsQ0FBZ0IsVUFBQ2IsTUFBRDtBQUFBLGFBQVksT0FBS0QsU0FBTCxDQUFlQyxNQUFmLENBQVo7QUFBQSxLQUFoQjtBQUNELEc7O3FCQUVEYyxPLHNCQUFVO0FBQ1IsU0FBS0gsZ0JBQUwsR0FBd0IsS0FBS2hCLE9BQUwsQ0FBYVMsTUFBckM7QUFDQSxTQUFLVCxPQUFMLENBQWFrQixPQUFiLENBQXFCLFVBQUNiLE1BQUQ7QUFBQSxhQUFZQSxPQUFPZSxLQUFQLEVBQVo7QUFBQSxLQUFyQjtBQUNELEc7O3FCQUVEQyxNLHFCQUFTO0FBQ1AsU0FBS3JCLE9BQUwsQ0FBYWtCLE9BQWIsQ0FBcUIsVUFBQ2IsTUFBRDtBQUFBLGFBQVlBLE9BQU9pQixJQUFQLEVBQVo7QUFBQSxLQUFyQjtBQUNELEc7O3FCQUVEQyxXLDBCQUFjO0FBQ1osV0FBTyxLQUFLdkIsT0FBTCxDQUFhd0IsR0FBYixDQUFpQixVQUFDbkIsTUFBRDtBQUFBLGFBQVlBLE9BQU9rQixXQUFQLEVBQVo7QUFBQSxLQUFqQixDQUFQO0FBQ0QsRzs7cUJBRURFLGdCLCtCQUFtQjtBQUNqQixXQUFRLEtBQUtULGdCQUFMLEtBQTBCLENBQWxDO0FBQ0QsRzs7cUJBRURVLFcsMEJBQWM7QUFDWixXQUFPLEtBQUsxQixPQUFaO0FBQ0QsRzs7Ozs7a0JBR1ksVUFBQ0EsT0FBRCxFQUFVRCxLQUFWO0FBQUEsU0FBb0IsSUFBSUQsUUFBSixZQUFlRSxnQkFBZixJQUEyQkQsS0FBM0IsRUFBcEI7QUFBQSxDIiwiZmlsZSI6InBhcmFsbGVsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgeyBvbkZyYW1lVXBkYXRlIH0gZnJvbSAnZnJhbWVzeW5jJztcblxuY2xhc3MgUGFyYWxsZWwgZXh0ZW5kcyBBY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIGNvbnN0IHsgYWN0aW9ucywgLi4ucmVtYWluaW5nUHJvcHMgfSA9IHByb3BzO1xuICAgIHN1cGVyKHJlbWFpbmluZ1Byb3BzKTtcbiAgICB0aGlzLmFjdGlvbnMgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnQgPSBbXTtcbiAgICB0aGlzLmFkZEFjdGlvbnMoYWN0aW9ucyk7XG4gIH1cblxuICBhZGRBY3Rpb24oYWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuYWN0aW9ucy5pbmRleE9mKGFjdGlvbikgIT09IC0xKSByZXR1cm47XG5cbiAgICB0aGlzLmFjdGlvbnMucHVzaChhY3Rpb24pO1xuXG4gICAgY29uc3QgaSA9IHRoaXMuYWN0aW9ucy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG9uVXBkYXRlID0gKHYpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudFtpXSA9IHY7XG4gICAgICBvbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9O1xuXG4gICAgb25VcGRhdGUoYWN0aW9uLmdldCgpKTtcblxuICAgIGFjdGlvblxuICAgICAgLnNldFByb3BzKHtcbiAgICAgICAgX29uU3RvcDogKCkgPT4gdGhpcy5udW1BY3RpdmVBY3Rpb25zLS1cbiAgICAgIH0pXG4gICAgICAuYWRkTGlzdGVuZXIob25VcGRhdGUpO1xuICB9XG5cbiAgYWRkQWN0aW9ucyhhY3Rpb25zKSB7XG4gICAgYWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHRoaXMuYWRkQWN0aW9uKGFjdGlvbikpO1xuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSB0aGlzLmFjdGlvbnMubGVuZ3RoO1xuICAgIHRoaXMuYWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IGFjdGlvbi5zdGFydCgpKTtcbiAgfVxuXG4gIG9uU3RvcCgpIHtcbiAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiBhY3Rpb24uc3RvcCgpKTtcbiAgfVxuXG4gIGdldFZlbG9jaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmFjdGlvbnMubWFwKChhY3Rpb24pID0+IGFjdGlvbi5nZXRWZWxvY2l0eSgpKTtcbiAgfVxuXG4gIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuICh0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDApO1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9ucztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoYWN0aW9ucywgcHJvcHMpID0+IG5ldyBQYXJhbGxlbCh7IGFjdGlvbnMsIC4uLnByb3BzIH0pO1xuIl19

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

var _framesync = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Value = function (_Action) {
  _inherits(Value, _Action);

  function Value() {
    _classCallCheck(this, Value);

    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
  }

  Value.prototype.set = function set(v) {
    this.toUpdate = v;
    (0, _framesync.onFrameUpdate)(this.scheduledUpdate);
    return v;
  };

  Value.prototype.update = function update() {
    return this.toUpdate !== undefined ? this.toUpdate : this.current;
  };

  Value.prototype.stopRegisteredAction = function stopRegisteredAction() {
    if (this.action && this.action.isActive()) this.action.stop();
    this.action = undefined;
  };

  Value.prototype.registerAction = function registerAction(action) {
    this.stopRegisteredAction();
    this.action = action;
    return this;
  };

  Value.prototype.onStop = function onStop() {
    this.stopRegisteredAction();
  };

  return Value;
}(_2.default);

Value.defaultProps = {
  passive: true
};

exports.default = function (current, onUpdate) {
  return new Value({ current: current, onUpdate: onUpdate });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3ZhbHVlLmpzIl0sIm5hbWVzIjpbIlZhbHVlIiwic2V0IiwidiIsInRvVXBkYXRlIiwic2NoZWR1bGVkVXBkYXRlIiwidXBkYXRlIiwidW5kZWZpbmVkIiwiY3VycmVudCIsInN0b3BSZWdpc3RlcmVkQWN0aW9uIiwiYWN0aW9uIiwiaXNBY3RpdmUiLCJzdG9wIiwicmVnaXN0ZXJBY3Rpb24iLCJvblN0b3AiLCJkZWZhdWx0UHJvcHMiLCJwYXNzaXZlIiwib25VcGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEs7Ozs7Ozs7OztrQkFLSkMsRyxnQkFBSUMsQyxFQUFHO0FBQ0wsU0FBS0MsUUFBTCxHQUFnQkQsQ0FBaEI7QUFDQSxrQ0FBYyxLQUFLRSxlQUFuQjtBQUNBLFdBQU9GLENBQVA7QUFDRCxHOztrQkFFREcsTSxxQkFBUztBQUNQLFdBQVEsS0FBS0YsUUFBTCxLQUFrQkcsU0FBbkIsR0FBZ0MsS0FBS0gsUUFBckMsR0FBZ0QsS0FBS0ksT0FBNUQ7QUFDRCxHOztrQkFFREMsb0IsbUNBQXVCO0FBQ3JCLFFBQUksS0FBS0MsTUFBTCxJQUFlLEtBQUtBLE1BQUwsQ0FBWUMsUUFBWixFQUFuQixFQUEyQyxLQUFLRCxNQUFMLENBQVlFLElBQVo7QUFDM0MsU0FBS0YsTUFBTCxHQUFjSCxTQUFkO0FBQ0QsRzs7a0JBRURNLGMsMkJBQWVILE0sRUFBUTtBQUNyQixTQUFLRCxvQkFBTDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFdBQU8sSUFBUDtBQUNELEc7O2tCQUVESSxNLHFCQUFTO0FBQ1AsU0FBS0wsb0JBQUw7QUFDRCxHOzs7OztBQTVCR1IsSyxDQUNHYyxZLEdBQWU7QUFDcEJDLFdBQVM7QUFEVyxDOztrQkE4QlQsVUFBQ1IsT0FBRCxFQUFVUyxRQUFWO0FBQUEsU0FBdUIsSUFBSWhCLEtBQUosQ0FBVSxFQUFFTyxnQkFBRixFQUFXUyxrQkFBWCxFQUFWLENBQXZCO0FBQUEsQyIsImZpbGUiOiJ2YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgb25GcmFtZVVwZGF0ZSB9IGZyb20gJ2ZyYW1lc3luYyc7XG5cbmNsYXNzIFZhbHVlIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH07XG5cbiAgc2V0KHYpIHtcbiAgICB0aGlzLnRvVXBkYXRlID0gdjtcbiAgICBvbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICByZXR1cm4gdjtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gKHRoaXMudG9VcGRhdGUgIT09IHVuZGVmaW5lZCkgPyB0aGlzLnRvVXBkYXRlIDogdGhpcy5jdXJyZW50O1xuICB9XG5cbiAgc3RvcFJlZ2lzdGVyZWRBY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuYWN0aW9uICYmIHRoaXMuYWN0aW9uLmlzQWN0aXZlKCkpIHRoaXMuYWN0aW9uLnN0b3AoKTtcbiAgICB0aGlzLmFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJlZ2lzdGVyQWN0aW9uKGFjdGlvbikge1xuICAgIHRoaXMuc3RvcFJlZ2lzdGVyZWRBY3Rpb24oKTtcbiAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uU3RvcCgpIHtcbiAgICB0aGlzLnN0b3BSZWdpc3RlcmVkQWN0aW9uKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1cnJlbnQsIG9uVXBkYXRlKSA9PiBuZXcgVmFsdWUoeyBjdXJyZW50LCBvblVwZGF0ZSB9KTtcbiJdfQ==

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.color = exports.hsla = exports.rgba = exports.hex = undefined;

var _utils = __webpack_require__(0);

var hex = exports.hex = function hex(v) {
  var r = void 0,
      g = void 0,
      b = void 0;

  // If we have 6 characters, ie #FF0000
  if (v.length > 4) {
    r = v.substr(1, 2);
    g = v.substr(3, 2);
    b = v.substr(5, 2);

    // Or we have 3 characters, ie #F00
  } else {
    r = v.substr(1, 1);
    g = v.substr(2, 1);
    b = v.substr(3, 1);
    r += r;
    g += g;
    b += b;
  }

  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: 1
  };
};

var rgba = exports.rgba = (0, _utils.splitColorValues)(['red', 'green', 'blue', 'alpha']);

var hsla = exports.hsla = (0, _utils.splitColorValues)(['hue', 'saturation', 'lightness', 'alpha']);

var color = exports.color = function color(v) {
  if ((0, _utils.isRgb)(v)) {
    return rgba(v);
  } else if ((0, _utils.isHex)(v)) {
    return hex(v);
  } else if ((0, _utils.isHsl)(v)) {
    return hsla(v);
  }

  return v;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvcGFyc2Vycy5qcyJdLCJuYW1lcyI6WyJoZXgiLCJ2IiwiciIsImciLCJiIiwibGVuZ3RoIiwic3Vic3RyIiwicmVkIiwicGFyc2VJbnQiLCJncmVlbiIsImJsdWUiLCJhbHBoYSIsInJnYmEiLCJoc2xhIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRU8sSUFBTUEsb0JBQU0sU0FBTkEsR0FBTSxDQUFDQyxDQUFELEVBQU87QUFDeEIsTUFBSUMsVUFBSjtBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFVQyxVQUFWOztBQUVBO0FBQ0EsTUFBSUgsRUFBRUksTUFBRixHQUFXLENBQWYsRUFBa0I7QUFDaEJILFFBQUlELEVBQUVLLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUFKO0FBQ0FILFFBQUlGLEVBQUVLLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUFKO0FBQ0FGLFFBQUlILEVBQUVLLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUFKOztBQUVGO0FBQ0MsR0FORCxNQU1PO0FBQ0xKLFFBQUlELEVBQUVLLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUFKO0FBQ0FILFFBQUlGLEVBQUVLLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUFKO0FBQ0FGLFFBQUlILEVBQUVLLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUFKO0FBQ0FKLFNBQUtBLENBQUw7QUFDQUMsU0FBS0EsQ0FBTDtBQUNBQyxTQUFLQSxDQUFMO0FBQ0Q7O0FBRUQsU0FBTztBQUNMRyxTQUFLQyxTQUFTTixDQUFULEVBQVksRUFBWixDQURBO0FBRUxPLFdBQU9ELFNBQVNMLENBQVQsRUFBWSxFQUFaLENBRkY7QUFHTE8sVUFBTUYsU0FBU0osQ0FBVCxFQUFZLEVBQVosQ0FIRDtBQUlMTyxXQUFPO0FBSkYsR0FBUDtBQU1ELENBekJNOztBQTJCQSxJQUFNQyxzQkFBTyw2QkFBaUIsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixNQUFqQixFQUF5QixPQUF6QixDQUFqQixDQUFiOztBQUVBLElBQU1DLHNCQUFPLDZCQUFpQixDQUFDLEtBQUQsRUFBUSxZQUFSLEVBQXNCLFdBQXRCLEVBQW1DLE9BQW5DLENBQWpCLENBQWI7O0FBRUEsSUFBTUMsd0JBQVEsU0FBUkEsS0FBUSxDQUFDYixDQUFELEVBQU87QUFDMUIsTUFBSSxrQkFBTUEsQ0FBTixDQUFKLEVBQWM7QUFDWixXQUFPVyxLQUFLWCxDQUFMLENBQVA7QUFDRCxHQUZELE1BRU8sSUFBSSxrQkFBTUEsQ0FBTixDQUFKLEVBQWM7QUFDbkIsV0FBT0QsSUFBSUMsQ0FBSixDQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUksa0JBQU1BLENBQU4sQ0FBSixFQUFjO0FBQ25CLFdBQU9ZLEtBQUtaLENBQUwsQ0FBUDtBQUNEOztBQUVELFNBQU9BLENBQVA7QUFDRCxDQVZNIiwiZmlsZSI6InBhcnNlcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcGxpdENvbG9yVmFsdWVzLCBpc1JnYiwgaXNIZXgsIGlzSHNsIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBoZXggPSAodikgPT4ge1xuICBsZXQgciwgZywgYjtcblxuICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICBpZiAodi5sZW5ndGggPiA0KSB7XG4gICAgciA9IHYuc3Vic3RyKDEsIDIpO1xuICAgIGcgPSB2LnN1YnN0cigzLCAyKTtcbiAgICBiID0gdi5zdWJzdHIoNSwgMik7XG5cbiAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgfSBlbHNlIHtcbiAgICByID0gdi5zdWJzdHIoMSwgMSk7XG4gICAgZyA9IHYuc3Vic3RyKDIsIDEpO1xuICAgIGIgPSB2LnN1YnN0cigzLCAxKTtcbiAgICByICs9IHI7XG4gICAgZyArPSBnO1xuICAgIGIgKz0gYjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgZ3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICBibHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgYWxwaGE6IDFcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZ2JhID0gc3BsaXRDb2xvclZhbHVlcyhbJ3JlZCcsICdncmVlbicsICdibHVlJywgJ2FscGhhJ10pO1xuXG5leHBvcnQgY29uc3QgaHNsYSA9IHNwbGl0Q29sb3JWYWx1ZXMoWydodWUnLCAnc2F0dXJhdGlvbicsICdsaWdodG5lc3MnLCAnYWxwaGEnXSk7XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9ICh2KSA9PiB7XG4gIGlmIChpc1JnYih2KSkge1xuICAgIHJldHVybiByZ2JhKHYpO1xuICB9IGVsc2UgaWYgKGlzSGV4KHYpKSB7XG4gICAgcmV0dXJuIGhleCh2KTtcbiAgfSBlbHNlIGlmIChpc0hzbCh2KSkge1xuICAgIHJldHVybiBoc2xhKHYpO1xuICB9XG5cbiAgcmV0dXJuIHY7XG59O1xuIl19

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chain = function (_Action) {
  _inherits(Chain, _Action);

  function Chain() {
    var _temp, _this, _ret;

    _classCallCheck(this, Chain);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Action.call.apply(_Action, [this].concat(args))), _this), _this.playNext = function () {
      var _this$props = _this.props,
          i = _this$props.i,
          order = _this$props.order;

      if (i < order.length - 1) {
        _this.props.i++;
        _this.playCurrent();
      } else {
        _this.complete();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Chain.prototype.onStart = function onStart() {
    this.props.i = 0;
    this.playCurrent();
  };

  Chain.prototype.playCurrent = function playCurrent() {
    var _props = this.props,
        i = _props.i,
        order = _props.order;

    order[i].props._onComplete = this.playNext;
    order[i].start();
  };

  Chain.prototype.onStop = function onStop() {
    var _props2 = this.props,
        i = _props2.i,
        order = _props2.order;

    order[i].stop();
  };

  return Chain;
}(_2.default);

exports.default = function (order, onComplete) {
  return new Chain({ order: order, onComplete: onComplete });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NoYWluLmpzIl0sIm5hbWVzIjpbIkNoYWluIiwicGxheU5leHQiLCJwcm9wcyIsImkiLCJvcmRlciIsImxlbmd0aCIsInBsYXlDdXJyZW50IiwiY29tcGxldGUiLCJvblN0YXJ0IiwiX29uQ29tcGxldGUiLCJzdGFydCIsIm9uU3RvcCIsInN0b3AiLCJvbkNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7Ozs7Ozs7Ozs7c0lBTUpDLFEsR0FBVyxZQUFNO0FBQUEsd0JBQ00sTUFBS0MsS0FEWDtBQUFBLFVBQ1BDLENBRE8sZUFDUEEsQ0FETztBQUFBLFVBQ0pDLEtBREksZUFDSkEsS0FESTs7QUFFZixVQUFJRCxJQUFJQyxNQUFNQyxNQUFOLEdBQWUsQ0FBdkIsRUFBMEI7QUFDeEIsY0FBS0gsS0FBTCxDQUFXQyxDQUFYO0FBQ0EsY0FBS0csV0FBTDtBQUNELE9BSEQsTUFHTztBQUNMLGNBQUtDLFFBQUw7QUFDRDtBQUNGLEs7OztrQkFiREMsTyxzQkFBVTtBQUNSLFNBQUtOLEtBQUwsQ0FBV0MsQ0FBWCxHQUFlLENBQWY7QUFDQSxTQUFLRyxXQUFMO0FBQ0QsRzs7a0JBWURBLFcsMEJBQWM7QUFBQSxpQkFDUyxLQUFLSixLQURkO0FBQUEsUUFDSkMsQ0FESSxVQUNKQSxDQURJO0FBQUEsUUFDREMsS0FEQyxVQUNEQSxLQURDOztBQUVaQSxVQUFNRCxDQUFOLEVBQVNELEtBQVQsQ0FBZU8sV0FBZixHQUE2QixLQUFLUixRQUFsQztBQUNBRyxVQUFNRCxDQUFOLEVBQVNPLEtBQVQ7QUFDRCxHOztrQkFFREMsTSxxQkFBUztBQUFBLGtCQUNjLEtBQUtULEtBRG5CO0FBQUEsUUFDQ0MsQ0FERCxXQUNDQSxDQUREO0FBQUEsUUFDSUMsS0FESixXQUNJQSxLQURKOztBQUVQQSxVQUFNRCxDQUFOLEVBQVNTLElBQVQ7QUFDRCxHOzs7OztrQkFHWSxVQUFDUixLQUFELEVBQVFTLFVBQVI7QUFBQSxTQUF1QixJQUFJYixLQUFKLENBQVUsRUFBRUksWUFBRixFQUFTUyxzQkFBVCxFQUFWLENBQXZCO0FBQUEsQyIsImZpbGUiOiJjaGFpbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuXG5jbGFzcyBDaGFpbiBleHRlbmRzIEFjdGlvbiB7XG4gIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pID0gMDtcbiAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gIH1cblxuICBwbGF5TmV4dCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGksIG9yZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpIDwgb3JkZXIubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5wcm9wcy5pKys7XG4gICAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG4gIH07XG5cbiAgcGxheUN1cnJlbnQoKSB7XG4gICAgY29uc3QgeyBpLCBvcmRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBvcmRlcltpXS5wcm9wcy5fb25Db21wbGV0ZSA9IHRoaXMucGxheU5leHQ7XG4gICAgb3JkZXJbaV0uc3RhcnQoKTtcbiAgfVxuXG4gIG9uU3RvcCgpIHtcbiAgICBjb25zdCB7IGksIG9yZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIG9yZGVyW2ldLnN0b3AoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAob3JkZXIsIG9uQ29tcGxldGUpID0+IG5ldyBDaGFpbih7IG9yZGVyLCBvbkNvbXBsZXRlIH0pO1xuIl19

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _tween = __webpack_require__(6);

var _tween2 = _interopRequireDefault(_tween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (duration, onComplete) {
  return (0, _tween2.default)({ duration: duration, onComplete: onComplete });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2RlbGF5LmpzIl0sIm5hbWVzIjpbImR1cmF0aW9uIiwib25Db21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7a0JBRWUsVUFBQ0EsUUFBRCxFQUFXQyxVQUFYO0FBQUEsU0FBMEIscUJBQU0sRUFBRUQsa0JBQUYsRUFBWUMsc0JBQVosRUFBTixDQUExQjtBQUFBLEMiLCJmaWxlIjoiZGVsYXkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHdlZW4gZnJvbSAnLi90d2Vlbic7XG5cbmV4cG9ydCBkZWZhdWx0IChkdXJhdGlvbiwgb25Db21wbGV0ZSkgPT4gdHdlZW4oeyBkdXJhdGlvbiwgb25Db21wbGV0ZSB9KTtcbiJdfQ==

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _valueTypes = __webpack_require__(5);

exports.default = {
  // Color props
  color: _valueTypes.color,
  backgroundColor: _valueTypes.color,
  outlineColor: _valueTypes.color,
  fill: _valueTypes.color,
  stroke: _valueTypes.color,

  // Border props
  borderColor: _valueTypes.color,
  borderTopColor: _valueTypes.color,
  borderRightColor: _valueTypes.color,
  borderBottomColor: _valueTypes.color,
  borderLeftColor: _valueTypes.color,
  borderRadius: _valueTypes.px,

  // Positioning
  width: _valueTypes.px,
  height: _valueTypes.px,
  top: _valueTypes.px,
  left: _valueTypes.px,
  bottom: _valueTypes.px,
  right: _valueTypes.px,

  // Transform properties
  rotate: _valueTypes.degrees,
  rotateX: _valueTypes.degrees,
  rotateY: _valueTypes.degrees,
  rotateZ: _valueTypes.degrees,
  scale: _valueTypes.scale,
  scaleX: _valueTypes.scale,
  scaleY: _valueTypes.scale,
  scaleZ: _valueTypes.scale,
  skewX: _valueTypes.degrees,
  skewY: _valueTypes.degrees,
  distance: _valueTypes.px,
  translateX: _valueTypes.px,
  translateY: _valueTypes.px,
  translateZ: _valueTypes.px,
  perspective: _valueTypes.px,
  opacity: _valueTypes.alpha
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib3V0bGluZUNvbG9yIiwiZmlsbCIsInN0cm9rZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyVG9wQ29sb3IiLCJib3JkZXJSaWdodENvbG9yIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJib3JkZXJMZWZ0Q29sb3IiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsInJvdGF0ZSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsInNjYWxlIiwic2NhbGVYIiwic2NhbGVZIiwic2NhbGVaIiwic2tld1giLCJza2V3WSIsImRpc3RhbmNlIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJ0cmFuc2xhdGVaIiwicGVyc3BlY3RpdmUiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O2tCQUNlO0FBQ2I7QUFDQUEsMEJBRmE7QUFHYkMsb0NBSGE7QUFJYkMsaUNBSmE7QUFLYkMseUJBTGE7QUFNYkMsMkJBTmE7O0FBUWI7QUFDQUMsZ0NBVGE7QUFVYkMsbUNBVmE7QUFXYkMscUNBWGE7QUFZYkMsc0NBWmE7QUFhYkMsb0NBYmE7QUFjYkMsOEJBZGE7O0FBZ0JiO0FBQ0FDLHVCQWpCYTtBQWtCYkMsd0JBbEJhO0FBbUJiQyxxQkFuQmE7QUFvQmJDLHNCQXBCYTtBQXFCYkMsd0JBckJhO0FBc0JiQyx1QkF0QmE7O0FBd0JiO0FBQ0FDLDZCQXpCYTtBQTBCYkMsOEJBMUJhO0FBMkJiQyw4QkEzQmE7QUE0QmJDLDhCQTVCYTtBQTZCYkMsMEJBN0JhO0FBOEJiQywyQkE5QmE7QUErQmJDLDJCQS9CYTtBQWdDYkMsMkJBaENhO0FBaUNiQyw0QkFqQ2E7QUFrQ2JDLDRCQWxDYTtBQW1DYkMsMEJBbkNhO0FBb0NiQyw0QkFwQ2E7QUFxQ2JDLDRCQXJDYTtBQXNDYkMsNEJBdENhO0FBdUNiQyw2QkF2Q2E7QUF3Q2JDO0FBeENhLEMiLCJmaWxlIjoidmFsdWUtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbHBoYSwgY29sb3IsIGRlZ3JlZXMsIHNjYWxlLCBweCB9IGZyb20gJy4uLy4uL2luYy92YWx1ZS10eXBlcyc7IFxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBDb2xvciBwcm9wc1xuICBjb2xvcjogY29sb3IsXG4gIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gIG91dGxpbmVDb2xvcjogY29sb3IsXG4gIGZpbGw6IGNvbG9yLFxuICBzdHJva2U6IGNvbG9yLFxuXG4gIC8vIEJvcmRlciBwcm9wc1xuICBib3JkZXJDb2xvcjogY29sb3IsXG4gIGJvcmRlclRvcENvbG9yOiBjb2xvcixcbiAgYm9yZGVyUmlnaHRDb2xvcjogY29sb3IsXG4gIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvcixcbiAgYm9yZGVyTGVmdENvbG9yOiBjb2xvcixcbiAgYm9yZGVyUmFkaXVzOiBweCxcblxuICAvLyBQb3NpdGlvbmluZ1xuICB3aWR0aDogcHgsXG4gIGhlaWdodDogcHgsICBcbiAgdG9wOiBweCxcbiAgbGVmdDogcHgsXG4gIGJvdHRvbTogcHgsXG4gIHJpZ2h0OiBweCxcblxuICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICByb3RhdGU6IGRlZ3JlZXMsXG4gIHJvdGF0ZVg6IGRlZ3JlZXMsXG4gIHJvdGF0ZVk6IGRlZ3JlZXMsXG4gIHJvdGF0ZVo6IGRlZ3JlZXMsXG4gIHNjYWxlOiBzY2FsZSxcbiAgc2NhbGVYOiBzY2FsZSxcbiAgc2NhbGVZOiBzY2FsZSxcbiAgc2NhbGVaOiBzY2FsZSxcbiAgc2tld1g6IGRlZ3JlZXMsXG4gIHNrZXdZOiBkZWdyZWVzLFxuICBkaXN0YW5jZTogcHgsXG4gIHRyYW5zbGF0ZVg6IHB4LFxuICB0cmFuc2xhdGVZOiBweCxcbiAgdHJhbnNsYXRlWjogcHgsXG4gIHBlcnNwZWN0aXZlOiBweCxcbiAgb3BhY2l0eTogYWxwaGFcbn07XG4iXX0=

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(0);

var camelCache = {};
var dashCache = {};
var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
var numPrefixes = prefixes.length;
var testElement = void 0;

/*
  Test style property for prefixed version
  
  @param [string]: Style property
  @return [string]: Cached property name
*/
var testPrefix = function testPrefix(key) {
  testElement = testElement || document.createElement('div');

  for (var i = 0; i < numPrefixes; i++) {
    var prefix = prefixes[i];
    var noPrefix = prefix === '';
    var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);

    if (prefixedPropertyName in testElement.style) {
      camelCache[key] = prefixedPropertyName;
      dashCache[key] = '' + (noPrefix ? '' : '-') + (0, _utils.camelToDash)(prefixedPropertyName);
    }
  }
};

exports.default = function (key, asDashCase) {
  var cache = asDashCase ? dashCache : camelCache;

  if (!cache[key]) {
    testPrefix(key);
  }

  return cache[key];
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3ByZWZpeGVyLmpzIl0sIm5hbWVzIjpbImNhbWVsQ2FjaGUiLCJkYXNoQ2FjaGUiLCJwcmVmaXhlcyIsIm51bVByZWZpeGVzIiwibGVuZ3RoIiwidGVzdEVsZW1lbnQiLCJ0ZXN0UHJlZml4Iiwia2V5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaSIsInByZWZpeCIsIm5vUHJlZml4IiwicHJlZml4ZWRQcm9wZXJ0eU5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwic3R5bGUiLCJhc0Rhc2hDYXNlIiwiY2FjaGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhLEVBQW5CO0FBQ0EsSUFBTUMsWUFBWSxFQUFsQjtBQUNBLElBQU1DLFdBQVcsQ0FBQyxRQUFELEVBQVUsS0FBVixFQUFnQixHQUFoQixFQUFvQixJQUFwQixFQUEwQixFQUExQixDQUFqQjtBQUNBLElBQU1DLGNBQWNELFNBQVNFLE1BQTdCO0FBQ0EsSUFBSUMsb0JBQUo7O0FBRUE7Ozs7OztBQU1BLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQVM7QUFDMUJGLGdCQUFjQSxlQUFlRyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQTdCOztBQUVBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJUCxXQUFwQixFQUFpQ08sR0FBakMsRUFBc0M7QUFDcEMsUUFBTUMsU0FBU1QsU0FBU1EsQ0FBVCxDQUFmO0FBQ0EsUUFBTUUsV0FBWUQsV0FBVyxFQUE3QjtBQUNBLFFBQU1FLHVCQUF1QkQsV0FBV0wsR0FBWCxHQUFpQkksU0FBU0osSUFBSU8sTUFBSixDQUFXLENBQVgsRUFBY0MsV0FBZCxFQUFULEdBQXVDUixJQUFJUyxLQUFKLENBQVUsQ0FBVixDQUFyRjs7QUFFQSxRQUFJSCx3QkFBd0JSLFlBQVlZLEtBQXhDLEVBQStDO0FBQzdDakIsaUJBQVdPLEdBQVgsSUFBa0JNLG9CQUFsQjtBQUNBWixnQkFBVU0sR0FBVixVQUFxQkssV0FBVyxFQUFYLEdBQWdCLEdBQXJDLElBQTRDLHdCQUFZQyxvQkFBWixDQUE1QztBQUNEO0FBQ0Y7QUFDRixDQWJEOztrQkFlZSxVQUFDTixHQUFELEVBQU1XLFVBQU4sRUFBcUI7QUFDbEMsTUFBTUMsUUFBUUQsYUFBYWpCLFNBQWIsR0FBeUJELFVBQXZDOztBQUVBLE1BQUksQ0FBQ21CLE1BQU1aLEdBQU4sQ0FBTCxFQUFpQjtBQUNmRCxlQUFXQyxHQUFYO0FBQ0Q7O0FBRUQsU0FBT1ksTUFBTVosR0FBTixDQUFQO0FBQ0QsQyIsImZpbGUiOiJwcmVmaXhlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbWVsVG9EYXNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuY29uc3QgY2FtZWxDYWNoZSA9IHt9O1xuY29uc3QgZGFzaENhY2hlID0ge307XG5jb25zdCBwcmVmaXhlcyA9IFsnV2Via2l0JywnTW96JywnTycsJ21zJywgJyddO1xuY29uc3QgbnVtUHJlZml4ZXMgPSBwcmVmaXhlcy5sZW5ndGg7XG5sZXQgdGVzdEVsZW1lbnQ7XG5cbi8qXG4gIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgXG4gIEBwYXJhbSBbc3RyaW5nXTogU3R5bGUgcHJvcGVydHlcbiAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG5jb25zdCB0ZXN0UHJlZml4ID0gKGtleSkgPT4ge1xuICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgIGNvbnN0IHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIGNvbnN0IG5vUHJlZml4ID0gKHByZWZpeCA9PT0gJycpO1xuICAgIGNvbnN0IHByZWZpeGVkUHJvcGVydHlOYW1lID0gbm9QcmVmaXggPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICBpZiAocHJlZml4ZWRQcm9wZXJ0eU5hbWUgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgIGNhbWVsQ2FjaGVba2V5XSA9IHByZWZpeGVkUHJvcGVydHlOYW1lO1xuICAgICAgZGFzaENhY2hlW2tleV0gPSBgJHsobm9QcmVmaXggPyAnJyA6ICctJyl9JHtjYW1lbFRvRGFzaChwcmVmaXhlZFByb3BlcnR5TmFtZSl9YDtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChrZXksIGFzRGFzaENhc2UpID0+IHtcbiAgY29uc3QgY2FjaGUgPSBhc0Rhc2hDYXNlID8gZGFzaENhY2hlIDogY2FtZWxDYWNoZTtcblxuICBpZiAoIWNhY2hlW2tleV0pIHtcbiAgICB0ZXN0UHJlZml4KGtleSk7XG4gIH1cblxuICByZXR1cm4gY2FjaGVba2V5XTtcbn07XG4iXX0=

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hasRAF = (typeof window !== 'undefined' && window.requestAnimationFrame) ? true : false;
var onNextFrame;
if (hasRAF) {
    onNextFrame = function (callback) { return window.requestAnimationFrame(callback); };
}
else {
    var lastTime_1 = 0;
    onNextFrame = function (callback) {
        var currentTime = new Date().getTime();
        var timeToCall = Math.max(0, 16.7 - (currentTime - lastTime_1));
        lastTime_1 = currentTime + timeToCall;
        setTimeout(function () { return callback(lastTime_1); }, timeToCall);
    };
}
exports.default = onNextFrame;
//# sourceMappingURL=on-next-frame.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createRenderStep(startRenderLoop) {
    var functionsToRun = [];
    var functionsToRunNextFrame = [];
    return {
        schedule: function (callback) {
            startRenderLoop();
            if (functionsToRunNextFrame.indexOf(callback) === -1) {
                functionsToRunNextFrame.push(callback);
            }
        },
        cancel: function (callback) {
            var indexOfCallback = functionsToRunNextFrame.indexOf(callback);
            if (indexOfCallback !== -1) {
                functionsToRunNextFrame.splice(indexOfCallback, 1);
            }
        },
        process: function () {
            _a = [functionsToRunNextFrame, functionsToRun], functionsToRun = _a[0], functionsToRunNextFrame = _a[1];
            functionsToRunNextFrame.length = 0;
            var numThisFrame = functionsToRun.length;
            for (var i = 0; i < numThisFrame; i++) {
                functionsToRun[i]();
            }
            var _a;
        }
    };
}
exports.default = createRenderStep;
//# sourceMappingURL=create-render-step.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _tween = __webpack_require__(6);

var _tween2 = _interopRequireDefault(_tween);

var _transformers = __webpack_require__(4);

var _valueTypes = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
  var from = _ref.from,
      to = _ref.to,
      props = _objectWithoutProperties(_ref, ['from', 'to']);

  return (0, _tween2.default)(_extends({}, props, {
    from: 0,
    to: 1,
    transform: (0, _transformers.pipe)((0, _transformers.blendColor)(from, to), _valueTypes.color.transform)
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbG9yLXR3ZWVuLmpzIl0sIm5hbWVzIjpbImZyb20iLCJ0byIsInByb3BzIiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7a0JBRWUsZ0JBQTRCO0FBQUEsTUFBekJBLElBQXlCLFFBQXpCQSxJQUF5QjtBQUFBLE1BQW5CQyxFQUFtQixRQUFuQkEsRUFBbUI7QUFBQSxNQUFaQyxLQUFZOztBQUN6QyxTQUFPLGtDQUNGQSxLQURFO0FBRUxGLFVBQU0sQ0FGRDtBQUdMQyxRQUFJLENBSEM7QUFJTEUsZUFBVyx3QkFBSyw4QkFBV0gsSUFBWCxFQUFpQkMsRUFBakIsQ0FBTCxFQUEyQixrQkFBTUUsU0FBakM7QUFKTixLQUFQO0FBTUQsQyIsImZpbGUiOiJjb2xvci10d2Vlbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0d2VlbiBmcm9tICcuL3R3ZWVuJztcbmltcG9ydCB7IGJsZW5kQ29sb3IsIHBpcGUgfSBmcm9tICcuLi9pbmMvdHJhbnNmb3JtZXJzJztcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vaW5jL3ZhbHVlLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgZnJvbSwgdG8sIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIHR3ZWVuKHtcbiAgICAuLi5wcm9wcyxcbiAgICBmcm9tOiAwLFxuICAgIHRvOiAxLFxuICAgIHRyYW5zZm9ybTogcGlwZShibGVuZENvbG9yKGZyb20sIHRvKSwgY29sb3IudHJhbnNmb3JtKVxuICB9KTtcbn07XG4iXX0=

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

var _tween = __webpack_require__(6);

var _tween2 = _interopRequireDefault(_tween);

var _easing = __webpack_require__(10);

var _calc = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CrossFade = function (_Action) {
  _inherits(CrossFade, _Action);

  function CrossFade() {
    _classCallCheck(this, CrossFade);

    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
  }

  CrossFade.prototype.onStart = function onStart() {
    var _props = this.props,
        duration = _props.duration,
        ease = _props.ease,
        fader = _props.fader;


    this.fader = fader || (0, _tween2.default)({
      to: 1,
      duration: duration,
      ease: ease
    }).start();
  };

  CrossFade.prototype.update = function update() {
    var _props2 = this.props,
        from = _props2.from,
        to = _props2.to;

    var balance = this.fader.get();
    var latestFromValue = from.get();
    var latestToValue = to.get();
    return (0, _calc.getValueFromProgress)(latestFromValue, latestToValue, balance);
  };

  return CrossFade;
}(_2.default);

CrossFade.defaultProps = {
  ease: _easing.linear
};

exports.default = function (props) {
  return new CrossFade(props);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanMiXSwibmFtZXMiOlsiQ3Jvc3NGYWRlIiwib25TdGFydCIsInByb3BzIiwiZHVyYXRpb24iLCJlYXNlIiwiZmFkZXIiLCJ0byIsInN0YXJ0IiwidXBkYXRlIiwiZnJvbSIsImJhbGFuY2UiLCJnZXQiLCJsYXRlc3RGcm9tVmFsdWUiLCJsYXRlc3RUb1ZhbHVlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLFM7Ozs7Ozs7OztzQkFLSkMsTyxzQkFBVTtBQUFBLGlCQUMwQixLQUFLQyxLQUQvQjtBQUFBLFFBQ0FDLFFBREEsVUFDQUEsUUFEQTtBQUFBLFFBQ1VDLElBRFYsVUFDVUEsSUFEVjtBQUFBLFFBQ2dCQyxLQURoQixVQUNnQkEsS0FEaEI7OztBQUdSLFNBQUtBLEtBQUwsR0FBYUEsU0FBUyxxQkFBTTtBQUMxQkMsVUFBSSxDQURzQjtBQUUxQkgsd0JBRjBCO0FBRzFCQztBQUgwQixLQUFOLEVBSW5CRyxLQUptQixFQUF0QjtBQUtELEc7O3NCQUVEQyxNLHFCQUFTO0FBQUEsa0JBQ2MsS0FBS04sS0FEbkI7QUFBQSxRQUNDTyxJQURELFdBQ0NBLElBREQ7QUFBQSxRQUNPSCxFQURQLFdBQ09BLEVBRFA7O0FBRVAsUUFBTUksVUFBVSxLQUFLTCxLQUFMLENBQVdNLEdBQVgsRUFBaEI7QUFDQSxRQUFNQyxrQkFBa0JILEtBQUtFLEdBQUwsRUFBeEI7QUFDQSxRQUFNRSxnQkFBZ0JQLEdBQUdLLEdBQUgsRUFBdEI7QUFDQSxXQUFPLGdDQUFxQkMsZUFBckIsRUFBc0NDLGFBQXRDLEVBQXFESCxPQUFyRCxDQUFQO0FBQ0QsRzs7Ozs7QUFyQkdWLFMsQ0FDR2MsWSxHQUFlO0FBQ3BCVjtBQURvQixDOztrQkF1QlQsVUFBQ0YsS0FBRDtBQUFBLFNBQVcsSUFBSUYsU0FBSixDQUFjRSxLQUFkLENBQVg7QUFBQSxDIiwiZmlsZSI6ImNyb3NzLWZhZGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB0d2VlbiBmcm9tICcuL3R3ZWVuJztcbmltcG9ydCB7IGxpbmVhciB9IGZyb20gJy4uL2luYy9lYXNpbmcnO1xuaW1wb3J0IHsgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNsYXNzIENyb3NzRmFkZSBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZWFzZTogbGluZWFyXG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIGNvbnN0IHsgZHVyYXRpb24sIGVhc2UsIGZhZGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5mYWRlciA9IGZhZGVyIHx8IHR3ZWVuKHtcbiAgICAgIHRvOiAxLFxuICAgICAgZHVyYXRpb24sXG4gICAgICBlYXNlXG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGZyb20sIHRvIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGJhbGFuY2UgPSB0aGlzLmZhZGVyLmdldCgpO1xuICAgIGNvbnN0IGxhdGVzdEZyb21WYWx1ZSA9IGZyb20uZ2V0KCk7XG4gICAgY29uc3QgbGF0ZXN0VG9WYWx1ZSA9IHRvLmdldCgpO1xuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhsYXRlc3RGcm9tVmFsdWUsIGxhdGVzdFRvVmFsdWUsIGJhbGFuY2UpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gbmV3IENyb3NzRmFkZShwcm9wcyk7XG4iXX0=

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

var _framesync = __webpack_require__(1);

var _calc = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Physics = function (_Action) {
  _inherits(Physics, _Action);

  function Physics() {
    _classCallCheck(this, Physics);

    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
  }

  Physics.prototype.update = function update() {
    var _props = this.props,
        autoStopSpeed = _props.autoStopSpeed,
        acceleration = _props.acceleration,
        friction = _props.friction,
        velocity = _props.velocity,
        spring = _props.spring,
        to = _props.to;

    var newVelocity = velocity;
    var elapsed = (0, _framesync.timeSinceLastFrame)();

    // Apply acceleration to velocity
    if (acceleration) {
      newVelocity += (0, _calc.speedPerFrame)(acceleration, elapsed);
    }

    // Apply friction to velocity
    if (friction) {
      newVelocity *= Math.pow(1 - friction, elapsed / 100);
    }

    if (spring && to !== undefined) {
      var distanceToTarget = to - this.current;
      newVelocity += distanceToTarget * (0, _calc.speedPerFrame)(spring, elapsed);
    }

    // Apply velocity
    this.current += (0, _calc.speedPerFrame)(newVelocity, elapsed);
    this.props.velocity = newVelocity;

    // Check if simulation is complete
    // We do this here instead of `isActionComplete` as it allows us
    // to clamp during this update
    this.isComplete = autoStopSpeed !== false && (!newVelocity || Math.abs(newVelocity) <= autoStopSpeed);

    if (this.isComplete && spring) {
      this.current = to;
    }

    return this.current;
  };

  Physics.prototype.isActionComplete = function isActionComplete() {
    return this.isComplete;
  };

  return Physics;
}(_2.default);

Physics.defaultProps = {
  acceleration: 0,
  friction: 0,
  velocity: 0,
  autoStopSpeed: 0.001
};

exports.default = function (props) {
  return new Physics(props);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BoeXNpY3MuanMiXSwibmFtZXMiOlsiUGh5c2ljcyIsInVwZGF0ZSIsInByb3BzIiwiYXV0b1N0b3BTcGVlZCIsImFjY2VsZXJhdGlvbiIsImZyaWN0aW9uIiwidmVsb2NpdHkiLCJzcHJpbmciLCJ0byIsIm5ld1ZlbG9jaXR5IiwiZWxhcHNlZCIsInVuZGVmaW5lZCIsImRpc3RhbmNlVG9UYXJnZXQiLCJjdXJyZW50IiwiaXNDb21wbGV0ZSIsIk1hdGgiLCJhYnMiLCJpc0FjdGlvbkNvbXBsZXRlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7b0JBUUpDLE0scUJBQVM7QUFBQSxpQkFDaUUsS0FBS0MsS0FEdEU7QUFBQSxRQUNDQyxhQURELFVBQ0NBLGFBREQ7QUFBQSxRQUNnQkMsWUFEaEIsVUFDZ0JBLFlBRGhCO0FBQUEsUUFDOEJDLFFBRDlCLFVBQzhCQSxRQUQ5QjtBQUFBLFFBQ3dDQyxRQUR4QyxVQUN3Q0EsUUFEeEM7QUFBQSxRQUNrREMsTUFEbEQsVUFDa0RBLE1BRGxEO0FBQUEsUUFDMERDLEVBRDFELFVBQzBEQSxFQUQxRDs7QUFFUCxRQUFJQyxjQUFjSCxRQUFsQjtBQUNBLFFBQU1JLFVBQVUsb0NBQWhCOztBQUVBO0FBQ0EsUUFBSU4sWUFBSixFQUFrQjtBQUNoQksscUJBQWUseUJBQWNMLFlBQWQsRUFBNEJNLE9BQTVCLENBQWY7QUFDRDs7QUFFRDtBQUNBLFFBQUlMLFFBQUosRUFBYztBQUNaSSw4QkFBZ0IsSUFBSUosUUFBcEIsRUFBa0NLLFVBQVUsR0FBNUM7QUFDRDs7QUFFRCxRQUFJSCxVQUFVQyxPQUFPRyxTQUFyQixFQUFnQztBQUM5QixVQUFNQyxtQkFBbUJKLEtBQUssS0FBS0ssT0FBbkM7QUFDQUoscUJBQWVHLG1CQUFtQix5QkFBY0wsTUFBZCxFQUFzQkcsT0FBdEIsQ0FBbEM7QUFDRDs7QUFFRDtBQUNBLFNBQUtHLE9BQUwsSUFBZ0IseUJBQWNKLFdBQWQsRUFBMkJDLE9BQTNCLENBQWhCO0FBQ0EsU0FBS1IsS0FBTCxDQUFXSSxRQUFYLEdBQXNCRyxXQUF0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFLSyxVQUFMLEdBQW1CWCxrQkFBa0IsS0FBbEIsS0FBNEIsQ0FBQ00sV0FBRCxJQUFnQk0sS0FBS0MsR0FBTCxDQUFTUCxXQUFULEtBQXlCTixhQUFyRSxDQUFuQjs7QUFFQSxRQUFJLEtBQUtXLFVBQUwsSUFBbUJQLE1BQXZCLEVBQStCO0FBQzdCLFdBQUtNLE9BQUwsR0FBZUwsRUFBZjtBQUNEOztBQUVELFdBQU8sS0FBS0ssT0FBWjtBQUNELEc7O29CQUVESSxnQiwrQkFBbUI7QUFDakIsV0FBTyxLQUFLSCxVQUFaO0FBQ0QsRzs7Ozs7QUE5Q0dkLE8sQ0FDR2tCLFksR0FBZTtBQUNwQmQsZ0JBQWMsQ0FETTtBQUVwQkMsWUFBVSxDQUZVO0FBR3BCQyxZQUFVLENBSFU7QUFJcEJILGlCQUFlO0FBSkssQzs7a0JBZ0RULFVBQUNELEtBQUQ7QUFBQSxTQUFXLElBQUlGLE9BQUosQ0FBWUUsS0FBWixDQUFYO0FBQUEsQyIsImZpbGUiOiJwaHlzaWNzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgeyB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICdmcmFtZXN5bmMnO1xuaW1wb3J0IHsgc3BlZWRQZXJGcmFtZSB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuY2xhc3MgUGh5c2ljcyBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWNjZWxlcmF0aW9uOiAwLFxuICAgIGZyaWN0aW9uOiAwLFxuICAgIHZlbG9jaXR5OiAwLFxuICAgIGF1dG9TdG9wU3BlZWQ6IDAuMDAxXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeyBhdXRvU3RvcFNwZWVkLCBhY2NlbGVyYXRpb24sIGZyaWN0aW9uLCB2ZWxvY2l0eSwgc3ByaW5nLCB0byB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgbmV3VmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICBjb25zdCBlbGFwc2VkID0gdGltZVNpbmNlTGFzdEZyYW1lKCk7XG5cbiAgICAvLyBBcHBseSBhY2NlbGVyYXRpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoYWNjZWxlcmF0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSArPSBzcGVlZFBlckZyYW1lKGFjY2VsZXJhdGlvbiwgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgZnJpY3Rpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoZnJpY3Rpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICo9ICgxIC0gZnJpY3Rpb24pICoqIChlbGFwc2VkIC8gMTAwKTtcbiAgICB9XG5cbiAgICBpZiAoc3ByaW5nICYmIHRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlVG9UYXJnZXQgPSB0byAtIHRoaXMuY3VycmVudDtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiBzcGVlZFBlckZyYW1lKHNwcmluZywgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdmVsb2NpdHlcbiAgICB0aGlzLmN1cnJlbnQgKz0gc3BlZWRQZXJGcmFtZShuZXdWZWxvY2l0eSwgZWxhcHNlZCk7XG4gICAgdGhpcy5wcm9wcy52ZWxvY2l0eSA9IG5ld1ZlbG9jaXR5O1xuXG4gICAgLy8gQ2hlY2sgaWYgc2ltdWxhdGlvbiBpcyBjb21wbGV0ZVxuICAgIC8vIFdlIGRvIHRoaXMgaGVyZSBpbnN0ZWFkIG9mIGBpc0FjdGlvbkNvbXBsZXRlYCBhcyBpdCBhbGxvd3MgdXNcbiAgICAvLyB0byBjbGFtcCBkdXJpbmcgdGhpcyB1cGRhdGVcbiAgICB0aGlzLmlzQ29tcGxldGUgPSAoYXV0b1N0b3BTcGVlZCAhPT0gZmFsc2UgJiYgKCFuZXdWZWxvY2l0eSB8fCBNYXRoLmFicyhuZXdWZWxvY2l0eSkgPD0gYXV0b1N0b3BTcGVlZCkpO1xuXG4gICAgaWYgKHRoaXMuaXNDb21wbGV0ZSAmJiBzcHJpbmcpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRvO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH1cblxuICBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgUGh5c2ljcyhwcm9wcyk7XG4iXX0=

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _value = __webpack_require__(13);

var _value2 = _interopRequireDefault(_value);

var _composite = __webpack_require__(11);

var _composite2 = _interopRequireDefault(_composite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function createPointer(_ref2, _ref) {
  var x = _ref2.x,
      y = _ref2.y;

  var eventToPoints = _ref.eventToPoints,
      moveEvent = _ref.moveEvent,
      props = _objectWithoutProperties(_ref, ['eventToPoints', 'moveEvent']);

  var pointer = (0, _composite2.default)({
    x: (0, _value2.default)(x),
    y: (0, _value2.default)(y)
  }, _extends({
    preventDefault: true
  }, props));

  var updatePointer = function updatePointer(e) {
    if (pointer.getProp('preventDefault')) {
      e.preventDefault();
    }

    var points = eventToPoints(e);
    pointer.x.set(points.x);
    pointer.y.set(points.y);
  };

  pointer.setProps({
    _onStart: function _onStart() {
      return document.documentElement.addEventListener(moveEvent, updatePointer, { passive: !pointer.getProp('preventDefault') });
    },
    _onStop: function _onStop() {
      return document.documentElement.removeEventListener(moveEvent, updatePointer);
    }
  });

  return pointer;
}

var mouseEventToPoint = function mouseEventToPoint(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
};

var touchEventToPoint = function touchEventToPoint(_ref3) {
  var changedTouches = _ref3.changedTouches;
  return {
    x: changedTouches[0].clientX,
    y: changedTouches[0].clientY
  };
};

var getNativeEvent = function getNativeEvent(e) {
  return e.originalEvent || e.nativeEvent || e;
};

exports.default = function (e, props) {
  var nativeEvent = getNativeEvent(e);
  return nativeEvent.touches ? createPointer(touchEventToPoint(e), _extends({
    moveEvent: 'touchmove',
    eventToPoints: touchEventToPoint
  }, props)) : createPointer(mouseEventToPoint(e), _extends({
    moveEvent: 'mousemove',
    eventToPoints: mouseEventToPoint
  }, props));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BvaW50ZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlUG9pbnRlciIsIngiLCJ5IiwiZXZlbnRUb1BvaW50cyIsIm1vdmVFdmVudCIsInByb3BzIiwicG9pbnRlciIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlUG9pbnRlciIsImUiLCJnZXRQcm9wIiwicG9pbnRzIiwic2V0Iiwic2V0UHJvcHMiLCJfb25TdGFydCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJfb25TdG9wIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1vdXNlRXZlbnRUb1BvaW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJ0b3VjaEV2ZW50VG9Qb2ludCIsImNoYW5nZWRUb3VjaGVzIiwiZ2V0TmF0aXZlRXZlbnQiLCJvcmlnaW5hbEV2ZW50IiwibmF0aXZlRXZlbnQiLCJ0b3VjaGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztBQUVBLFNBQVNBLGFBQVQsY0FBeUU7QUFBQSxNQUFoREMsQ0FBZ0QsU0FBaERBLENBQWdEO0FBQUEsTUFBN0NDLENBQTZDLFNBQTdDQSxDQUE2Qzs7QUFBQSxNQUF0Q0MsYUFBc0MsUUFBdENBLGFBQXNDO0FBQUEsTUFBdkJDLFNBQXVCLFFBQXZCQSxTQUF1QjtBQUFBLE1BQVRDLEtBQVM7O0FBQ3ZFLE1BQU1DLFVBQVUseUJBQVU7QUFDeEJMLE9BQUcscUJBQU1BLENBQU4sQ0FEcUI7QUFFeEJDLE9BQUcscUJBQU1BLENBQU47QUFGcUIsR0FBVjtBQUlkSyxvQkFBZ0I7QUFKRixLQUtYRixLQUxXLEVBQWhCOztBQVFBLE1BQU1HLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzNCLFFBQUlILFFBQVFJLE9BQVIsQ0FBZ0IsZ0JBQWhCLENBQUosRUFBdUM7QUFDckNELFFBQUVGLGNBQUY7QUFDRDs7QUFFRCxRQUFNSSxTQUFTUixjQUFjTSxDQUFkLENBQWY7QUFDQUgsWUFBUUwsQ0FBUixDQUFVVyxHQUFWLENBQWNELE9BQU9WLENBQXJCO0FBQ0FLLFlBQVFKLENBQVIsQ0FBVVUsR0FBVixDQUFjRCxPQUFPVCxDQUFyQjtBQUNELEdBUkQ7O0FBVUFJLFVBQVFPLFFBQVIsQ0FBaUI7QUFDZkMsY0FBVTtBQUFBLGFBQU1DLFNBQVNDLGVBQVQsQ0FBeUJDLGdCQUF6QixDQUEwQ2IsU0FBMUMsRUFBcURJLGFBQXJELEVBQW9FLEVBQUVVLFNBQVMsQ0FBQ1osUUFBUUksT0FBUixDQUFnQixnQkFBaEIsQ0FBWixFQUFwRSxDQUFOO0FBQUEsS0FESztBQUVmUyxhQUFTO0FBQUEsYUFBTUosU0FBU0MsZUFBVCxDQUF5QkksbUJBQXpCLENBQTZDaEIsU0FBN0MsRUFBd0RJLGFBQXhELENBQU47QUFBQTtBQUZNLEdBQWpCOztBQUtBLFNBQU9GLE9BQVA7QUFDRDs7QUFFRCxJQUFNZSxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFDWixDQUFEO0FBQUEsU0FBUTtBQUNoQ1IsT0FBR1EsRUFBRWEsT0FEMkI7QUFFaENwQixPQUFHTyxFQUFFYztBQUYyQixHQUFSO0FBQUEsQ0FBMUI7O0FBS0EsSUFBTUMsb0JBQW9CLFNBQXBCQSxpQkFBb0I7QUFBQSxNQUFHQyxjQUFILFNBQUdBLGNBQUg7QUFBQSxTQUF5QjtBQUNqRHhCLE9BQUd3QixlQUFlLENBQWYsRUFBa0JILE9BRDRCO0FBRWpEcEIsT0FBR3VCLGVBQWUsQ0FBZixFQUFrQkY7QUFGNEIsR0FBekI7QUFBQSxDQUExQjs7QUFLQSxJQUFNRyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNqQixDQUFEO0FBQUEsU0FBT0EsRUFBRWtCLGFBQUYsSUFBbUJsQixFQUFFbUIsV0FBckIsSUFBb0NuQixDQUEzQztBQUFBLENBQXZCOztrQkFFZSxVQUFDQSxDQUFELEVBQUlKLEtBQUosRUFBYztBQUMzQixNQUFNdUIsY0FBY0YsZUFBZWpCLENBQWYsQ0FBcEI7QUFDQSxTQUFRbUIsWUFBWUMsT0FBYixHQUNMN0IsY0FBY3dCLGtCQUFrQmYsQ0FBbEIsQ0FBZDtBQUNFTCxlQUFXLFdBRGI7QUFFRUQsbUJBQWVxQjtBQUZqQixLQUdLbkIsS0FITCxFQURLLEdBTUxMLGNBQWNxQixrQkFBa0JaLENBQWxCLENBQWQ7QUFDRUwsZUFBVyxXQURiO0FBRUVELG1CQUFla0I7QUFGakIsS0FHS2hCLEtBSEwsRUFORjtBQVdELEMiLCJmaWxlIjoicG9pbnRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2YWx1ZSBmcm9tICcuL3ZhbHVlJztcbmltcG9ydCBjb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuXG5mdW5jdGlvbiBjcmVhdGVQb2ludGVyKHsgeCwgeSB9LCB7IGV2ZW50VG9Qb2ludHMsIG1vdmVFdmVudCwgLi4ucHJvcHMgfSkge1xuICBjb25zdCBwb2ludGVyID0gY29tcG9zaXRlKHtcbiAgICB4OiB2YWx1ZSh4KSxcbiAgICB5OiB2YWx1ZSh5KVxuICB9LCB7XG4gICAgcHJldmVudERlZmF1bHQ6IHRydWUsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG5cbiAgY29uc3QgdXBkYXRlUG9pbnRlciA9IChlKSA9PiB7XG4gICAgaWYgKHBvaW50ZXIuZ2V0UHJvcCgncHJldmVudERlZmF1bHQnKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50cyA9IGV2ZW50VG9Qb2ludHMoZSk7XG4gICAgcG9pbnRlci54LnNldChwb2ludHMueCk7XG4gICAgcG9pbnRlci55LnNldChwb2ludHMueSk7XG4gIH07XG5cbiAgcG9pbnRlci5zZXRQcm9wcyh7XG4gICAgX29uU3RhcnQ6ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlciwgeyBwYXNzaXZlOiAhcG9pbnRlci5nZXRQcm9wKCdwcmV2ZW50RGVmYXVsdCcpIH0pLFxuICAgIF9vblN0b3A6ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlcilcbiAgfSk7XG5cbiAgcmV0dXJuIHBvaW50ZXI7XG59XG5cbmNvbnN0IG1vdXNlRXZlbnRUb1BvaW50ID0gKGUpID0+ICh7XG4gIHg6IGUuY2xpZW50WCxcbiAgeTogZS5jbGllbnRZXG59KTtcblxuY29uc3QgdG91Y2hFdmVudFRvUG9pbnQgPSAoeyBjaGFuZ2VkVG91Y2hlcyB9KSA9PiAoe1xuICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG59KTtcblxuY29uc3QgZ2V0TmF0aXZlRXZlbnQgPSAoZSkgPT4gZS5vcmlnaW5hbEV2ZW50IHx8IGUubmF0aXZlRXZlbnQgfHwgZTtcblxuZXhwb3J0IGRlZmF1bHQgKGUsIHByb3BzKSA9PiB7XG4gIGNvbnN0IG5hdGl2ZUV2ZW50ID0gZ2V0TmF0aXZlRXZlbnQoZSk7XG4gIHJldHVybiAobmF0aXZlRXZlbnQudG91Y2hlcykgP1xuICAgIGNyZWF0ZVBvaW50ZXIodG91Y2hFdmVudFRvUG9pbnQoZSksIHtcbiAgICAgIG1vdmVFdmVudDogJ3RvdWNobW92ZScsXG4gICAgICBldmVudFRvUG9pbnRzOiB0b3VjaEV2ZW50VG9Qb2ludCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSkgOlxuICAgIGNyZWF0ZVBvaW50ZXIobW91c2VFdmVudFRvUG9pbnQoZSksIHtcbiAgICAgIG1vdmVFdmVudDogJ21vdXNlbW92ZScsXG4gICAgICBldmVudFRvUG9pbnRzOiBtb3VzZUV2ZW50VG9Qb2ludCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSk7XG59O1xuIl19

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _value = __webpack_require__(13);

var _value2 = _interopRequireDefault(_value);

var _composite = __webpack_require__(11);

var _composite2 = _interopRequireDefault(_composite);

var _parallel = __webpack_require__(12);

var _parallel2 = _interopRequireDefault(_parallel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function createTouches(initialTouches, _ref) {
  var eventToTouches = _ref.eventToTouches,
      moveEvent = _ref.moveEvent,
      props = _objectWithoutProperties(_ref, ['eventToTouches', 'moveEvent']);

  var touches = (0, _parallel2.default)(mapCoordsToActions(initialTouches), _extends({
    preventDefault: true
  }, props));

  function updateTouches(e) {
    if (props.preventDefault) e.preventDefault();

    var latestTouches = eventToTouches(e);
    updateActionWithTouches(touches, latestTouches);
  }

  touches.setProps({
    _onStart: function _onStart() {
      return document.documentElement.addEventListener(moveEvent, updateTouches);
    },
    _onStop: function _onStop() {
      return document.documentElement.removeEventListener(moveEvent, updateTouches);
    }
  });

  return touches;
}

function mapCoordsToActions(coords) {
  var actions = [];
  for (var i = 0; i < coords.length; i++) {
    var _coords$i = coords[i],
        x = _coords$i.x,
        y = _coords$i.y;

    actions[i] = (0, _composite2.default)({
      x: (0, _value2.default)(x),
      y: (0, _value2.default)(y)
    });
  }
  return actions;
}

function updateActionWithTouches(touches, newTouches) {
  for (var i = 0; i < newTouches.length; i++) {
    var _newTouches$i = newTouches[i],
        x = _newTouches$i.x,
        y = _newTouches$i.y;

    var touchActions = touches.getChildren();
    var touchAction = touchActions[i];
    if (touchAction !== undefined) {
      touchAction.x.set(x);
      touchAction.y.set(y);
    } else {
      touches.addAction((0, _composite2.default)({
        x: (0, _value2.default)(x),
        y: (0, _value2.default)(y)
      }));
    }
  }
}

var mouseEventToTouches = function mouseEventToTouches(_ref2) {
  var pageX = _ref2.pageX,
      pageY = _ref2.pageY;
  return [{ x: pageX, y: pageY }];
};
var touchEventToTouches = function touchEventToTouches(_ref3) {
  var touches = _ref3.touches;
  return extractCoords(touches);
};

function extractCoords(touches) {
  var coords = [];
  for (var i = 0; i < touches.length; i++) {
    var _touches$i = touches[i],
        clientX = _touches$i.clientX,
        clientY = _touches$i.clientY;

    coords[i] = {
      x: clientX,
      y: clientY
    };
  }
  return coords;
}

var getNativeEvent = function getNativeEvent(e) {
  return e.originalEvent || e.nativeEvent || e;
};

exports.default = function (e, props) {
  var nativeEvent = getNativeEvent(e);
  return nativeEvent.touches ? createTouches(touchEventToTouches(e), _extends({
    moveEvent: 'touchmove',
    eventToTouches: touchEventToTouches
  }, props)) : createTouches(mouseEventToTouches(e), _extends({
    moveEvent: 'mousemove',
    eventToTouches: mouseEventToTouches
  }, props));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3RvdWNoZXMuanMiXSwibmFtZXMiOlsiY3JlYXRlVG91Y2hlcyIsImluaXRpYWxUb3VjaGVzIiwiZXZlbnRUb1RvdWNoZXMiLCJtb3ZlRXZlbnQiLCJwcm9wcyIsInRvdWNoZXMiLCJtYXBDb29yZHNUb0FjdGlvbnMiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZVRvdWNoZXMiLCJlIiwibGF0ZXN0VG91Y2hlcyIsInVwZGF0ZUFjdGlvbldpdGhUb3VjaGVzIiwic2V0UHJvcHMiLCJfb25TdGFydCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9vblN0b3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29vcmRzIiwiYWN0aW9ucyIsImkiLCJsZW5ndGgiLCJ4IiwieSIsIm5ld1RvdWNoZXMiLCJ0b3VjaEFjdGlvbnMiLCJnZXRDaGlsZHJlbiIsInRvdWNoQWN0aW9uIiwidW5kZWZpbmVkIiwic2V0IiwiYWRkQWN0aW9uIiwibW91c2VFdmVudFRvVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJ0b3VjaEV2ZW50VG9Ub3VjaGVzIiwiZXh0cmFjdENvb3JkcyIsImNsaWVudFgiLCJjbGllbnRZIiwiZ2V0TmF0aXZlRXZlbnQiLCJvcmlnaW5hbEV2ZW50IiwibmF0aXZlRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxjQUF2QixRQUFnRjtBQUFBLE1BQXZDQyxjQUF1QyxRQUF2Q0EsY0FBdUM7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQUEsTUFBVEMsS0FBUzs7QUFDOUUsTUFBTUMsVUFBVSx3QkFBU0MsbUJBQW1CTCxjQUFuQixDQUFUO0FBQ2RNLG9CQUFnQjtBQURGLEtBRVhILEtBRlcsRUFBaEI7O0FBS0EsV0FBU0ksYUFBVCxDQUF1QkMsQ0FBdkIsRUFBMEI7QUFDeEIsUUFBSUwsTUFB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b0IsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDOUIsQ0FBRDtBQUFBLFNBQU9BLEVBQUUrQixhQUFGLElBQW1CL0IsRUFBRWdDLFdBQXJCLElBQW9DaEMsQ0FBM0M7QUFBQSxDQUF2Qjs7a0JBRWUsVUFBQ0EsQ0FBRCxFQUFJTCxLQUFKLEVBQWM7QUFDM0IsTUFBTXFDLGNBQWNGLGVBQWU5QixDQUFmLENBQXBCO0FBQ0EsU0FBUWdDLFlBQVlwQyxPQUFiLEdBQ0xMLGNBQWNtQyxvQkFBb0IxQixDQUFwQixDQUFkO0FBQ0VOLGVBQVcsV0FEYjtBQUVFRCxvQkFBZ0JpQztBQUZsQixLQUdLL0IsS0FITCxFQURLLEdBTUxKLGNBQWNnQyxvQkFBb0J2QixDQUFwQixDQUFkO0FBQ0VOLGVBQVcsV0FEYjtBQUVFRCxvQkFBZ0I4QjtBQUZsQixLQUdLNUIsS0FITCxFQU5GO0FBV0QsQyIsImZpbGUiOiJ0b3VjaGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZhbHVlIGZyb20gJy4vdmFsdWUnO1xuaW1wb3J0IGNvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5pbXBvcnQgcGFyYWxsZWwgZnJvbSAnLi9wYXJhbGxlbCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvdWNoZXMoaW5pdGlhbFRvdWNoZXMsIHsgZXZlbnRUb1RvdWNoZXMsIG1vdmVFdmVudCwgLi4ucHJvcHMgfSkge1xuICBjb25zdCB0b3VjaGVzID0gcGFyYWxsZWwobWFwQ29vcmRzVG9BY3Rpb25zKGluaXRpYWxUb3VjaGVzKSwge1xuICAgIHByZXZlbnREZWZhdWx0OiB0cnVlLFxuICAgIC4uLnByb3BzXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRvdWNoZXMoZSkge1xuICAgIGlmIChwcm9wcy5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgbGF0ZXN0VG91Y2hlcyA9IGV2ZW50VG9Ub3VjaGVzKGUpO1xuICAgIHVwZGF0ZUFjdGlvbldpdGhUb3VjaGVzKHRvdWNoZXMsIGxhdGVzdFRvdWNoZXMpO1xuICB9XG5cbiAgdG91Y2hlcy5zZXRQcm9wcyh7XG4gICAgX29uU3RhcnQ6ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlVG91Y2hlcyksXG4gICAgX29uU3RvcDogKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVUb3VjaGVzKVxuICB9KTtcblxuICByZXR1cm4gdG91Y2hlcztcbn1cblxuZnVuY3Rpb24gbWFwQ29vcmRzVG9BY3Rpb25zKGNvb3Jkcykge1xuICBsZXQgYWN0aW9ucyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gY29vcmRzW2ldO1xuICAgIGFjdGlvbnNbaV0gPSBjb21wb3NpdGUoe1xuICAgICAgeDogdmFsdWUoeCksXG4gICAgICB5OiB2YWx1ZSh5KVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBhY3Rpb25zO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBY3Rpb25XaXRoVG91Y2hlcyh0b3VjaGVzLCBuZXdUb3VjaGVzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3VG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gbmV3VG91Y2hlc1tpXTtcbiAgICBjb25zdCB0b3VjaEFjdGlvbnMgPSB0b3VjaGVzLmdldENoaWxkcmVuKCk7XG4gICAgY29uc3QgdG91Y2hBY3Rpb24gPSB0b3VjaEFjdGlvbnNbaV07XG4gICAgaWYgKHRvdWNoQWN0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRvdWNoQWN0aW9uLnguc2V0KHgpO1xuICAgICAgdG91Y2hBY3Rpb24ueS5zZXQoeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvdWNoZXMuYWRkQWN0aW9uKGNvbXBvc2l0ZSh7XG4gICAgICAgIHg6IHZhbHVlKHgpLFxuICAgICAgICB5OiB2YWx1ZSh5KVxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBtb3VzZUV2ZW50VG9Ub3VjaGVzID0gKHsgcGFnZVgsIHBhZ2VZIH0pID0+IFt7IHg6IHBhZ2VYLCB5OiBwYWdlWSB9XTtcbmNvbnN0IHRvdWNoRXZlbnRUb1RvdWNoZXMgPSAoeyB0b3VjaGVzIH0pID0+IGV4dHJhY3RDb29yZHModG91Y2hlcyk7XG5cbmZ1bmN0aW9uIGV4dHJhY3RDb29yZHModG91Y2hlcykge1xuICBsZXQgY29vcmRzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gdG91Y2hlc1tpXTtcbiAgICBjb29yZHNbaV0gPSB7XG4gICAgICB4OiBjbGllbnRYLFxuICAgICAgeTogY2xpZW50WVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuY29uc3QgZ2V0TmF0aXZlRXZlbnQgPSAoZSkgPT4gZS5vcmlnaW5hbEV2ZW50IHx8IGUubmF0aXZlRXZlbnQgfHwgZTtcblxuZXhwb3J0IGRlZmF1bHQgKGUsIHByb3BzKSA9PiB7XG4gIGNvbnN0IG5hdGl2ZUV2ZW50ID0gZ2V0TmF0aXZlRXZlbnQoZSk7XG4gIHJldHVybiAobmF0aXZlRXZlbnQudG91Y2hlcykgP1xuICAgIGNyZWF0ZVRvdWNoZXModG91Y2hFdmVudFRvVG91Y2hlcyhlKSwge1xuICAgICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICAgIGV2ZW50VG9Ub3VjaGVzOiB0b3VjaEV2ZW50VG9Ub3VjaGVzLFxuICAgICAgLi4ucHJvcHNcbiAgICB9KSA6XG4gICAgY3JlYXRlVG91Y2hlcyhtb3VzZUV2ZW50VG9Ub3VjaGVzKGUpLCB7XG4gICAgICBtb3ZlRXZlbnQ6ICdtb3VzZW1vdmUnLFxuICAgICAgZXZlbnRUb1RvdWNoZXM6IG1vdXNlRXZlbnRUb1RvdWNoZXMsXG4gICAgICAuLi5wcm9wc1xuICAgIH0pO1xufTtcbiJdfQ==

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

var _transformers = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrackOffset = function (_Action) {
  _inherits(TrackOffset, _Action);

  function TrackOffset() {
    _classCallCheck(this, TrackOffset);

    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
  }

  TrackOffset.prototype.onStart = function onStart() {
    var action = this.props.action;

    this.applyOffset = (0, _transformers.applyOffset)(action.get(), this.current);
  };

  TrackOffset.prototype.update = function update() {
    var action = this.props.action;

    return this.applyOffset(action.get());
  };

  return TrackOffset;
}(_2.default);

exports.default = function (action, props) {
  return new TrackOffset(_extends({ action: action }, props));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3RyYWNrLW9mZnNldC5qcyJdLCJuYW1lcyI6WyJUcmFja09mZnNldCIsIm9uU3RhcnQiLCJhY3Rpb24iLCJwcm9wcyIsImFwcGx5T2Zmc2V0IiwiZ2V0IiwiY3VycmVudCIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxXOzs7Ozs7Ozs7d0JBQ0pDLE8sc0JBQVU7QUFBQSxRQUNBQyxNQURBLEdBQ1csS0FBS0MsS0FEaEIsQ0FDQUQsTUFEQTs7QUFFUixTQUFLRSxXQUFMLEdBQW1CLCtCQUFZRixPQUFPRyxHQUFQLEVBQVosRUFBMEIsS0FBS0MsT0FBL0IsQ0FBbkI7QUFDRCxHOzt3QkFFREMsTSxxQkFBUztBQUFBLFFBQ0NMLE1BREQsR0FDWSxLQUFLQyxLQURqQixDQUNDRCxNQUREOztBQUVQLFdBQU8sS0FBS0UsV0FBTCxDQUFpQkYsT0FBT0csR0FBUCxFQUFqQixDQUFQO0FBQ0QsRzs7Ozs7a0JBR1ksVUFBQ0gsTUFBRCxFQUFTQyxLQUFUO0FBQUEsU0FBbUIsSUFBSUgsV0FBSixZQUFrQkUsY0FBbEIsSUFBNkJDLEtBQTdCLEVBQW5CO0FBQUEsQyIsImZpbGUiOiJ0cmFjay1vZmZzZXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IGFwcGx5T2Zmc2V0IH0gZnJvbSAnLi4vaW5jL3RyYW5zZm9ybWVycyc7XG5cbmNsYXNzIFRyYWNrT2Zmc2V0IGV4dGVuZHMgQWN0aW9uIHtcbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IGFjdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLmFwcGx5T2Zmc2V0ID0gYXBwbHlPZmZzZXQoYWN0aW9uLmdldCgpLCB0aGlzLmN1cnJlbnQpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHsgYWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiB0aGlzLmFwcGx5T2Zmc2V0KGFjdGlvbi5nZXQoKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGFjdGlvbiwgcHJvcHMpID0+IG5ldyBUcmFja09mZnNldCh7IGFjdGlvbiwgLi4ucHJvcHMgfSk7XG4iXX0=

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _chain = __webpack_require__(15);

var _chain2 = _interopRequireDefault(_chain);

var _parallel = __webpack_require__(12);

var _parallel2 = _interopRequireDefault(_parallel);

var _delay = __webpack_require__(16);

var _delay2 = _interopRequireDefault(_delay);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a new parallel Action composed of chained
 * delay and actions. Interval can be either a number
 * to multiply by `i` or a function that will be provided `i`
 *
 * Straight cribbed from https://github.com/facebook/react-native/blob/24c72f513e48f0bdc40820b43262328fe2c301d4/Libraries/Animated/src/AnimatedImplementation.js#L2031
 * ^ This function sold a previously-conflicted me on the merit of moving from
 * jQuery-style multi-property animations to single-property.
 * @param  {array} actions
 * @param  {function | number} interval
 * @return {Action}
 */
exports.default = function (actions, interval, onComplete) {
  var intervalIsFunction = (0, _utils.isFunc)(interval);

  return (0, _parallel2.default)(actions.map(function (action, i) {
    var timeToDelay = intervalIsFunction ? interval(i) : i * interval;
    return (0, _chain2.default)([(0, _delay2.default)(timeToDelay), action]);
  }), { onComplete: onComplete });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3N0YWdnZXIuanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsImludGVydmFsIiwib25Db21wbGV0ZSIsImludGVydmFsSXNGdW5jdGlvbiIsIm1hcCIsImFjdGlvbiIsImkiLCJ0aW1lVG9EZWxheSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztrQkFZZSxVQUFDQSxPQUFELEVBQVVDLFFBQVYsRUFBb0JDLFVBQXBCLEVBQW1DO0FBQ2hELE1BQU1DLHFCQUFxQixtQkFBT0YsUUFBUCxDQUEzQjs7QUFFQSxTQUFPLHdCQUFTRCxRQUFRSSxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDekMsUUFBTUMsY0FBZUosa0JBQUQsR0FBdUJGLFNBQVNLLENBQVQsQ0FBdkIsR0FBcUNBLElBQUlMLFFBQTdEO0FBQ0EsV0FBTyxxQkFBTSxDQUNYLHFCQUFNTSxXQUFOLENBRFcsRUFFWEYsTUFGVyxDQUFOLENBQVA7QUFJRCxHQU5lLENBQVQsRUFNSCxFQUFFSCxzQkFBRixFQU5HLENBQVA7QUFPRCxDIiwiZmlsZSI6InN0YWdnZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaW4gZnJvbSAnLi9jaGFpbic7XG5pbXBvcnQgcGFyYWxsZWwgZnJvbSAnLi9wYXJhbGxlbCc7XG5pbXBvcnQgZGVsYXkgZnJvbSAnLi9kZWxheSc7XG5pbXBvcnQgeyBpc0Z1bmMgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcGFyYWxsZWwgQWN0aW9uIGNvbXBvc2VkIG9mIGNoYWluZWRcbiAqIGRlbGF5IGFuZCBhY3Rpb25zLiBJbnRlcnZhbCBjYW4gYmUgZWl0aGVyIGEgbnVtYmVyXG4gKiB0byBtdWx0aXBseSBieSBgaWAgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgYGlgXG4gKlxuICogU3RyYWlnaHQgY3JpYmJlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi8yNGM3MmY1MTNlNDhmMGJkYzQwODIwYjQzMjYyMzI4ZmUyYzMwMWQ0L0xpYnJhcmllcy9BbmltYXRlZC9zcmMvQW5pbWF0ZWRJbXBsZW1lbnRhdGlvbi5qcyNMMjAzMVxuICogXiBUaGlzIGZ1bmN0aW9uIHNvbGQgYSBwcmV2aW91c2x5LWNvbmZsaWN0ZWQgbWUgb24gdGhlIG1lcml0IG9mIG1vdmluZyBmcm9tXG4gKiBqUXVlcnktc3R5bGUgbXVsdGktcHJvcGVydHkgYW5pbWF0aW9ucyB0byBzaW5nbGUtcHJvcGVydHkuXG4gKiBAcGFyYW0gIHthcnJheX0gYWN0aW9uc1xuICogQHBhcmFtICB7ZnVuY3Rpb24gfCBudW1iZXJ9IGludGVydmFsXG4gKiBAcmV0dXJuIHtBY3Rpb259XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChhY3Rpb25zLCBpbnRlcnZhbCwgb25Db21wbGV0ZSkgPT4ge1xuICBjb25zdCBpbnRlcnZhbElzRnVuY3Rpb24gPSBpc0Z1bmMoaW50ZXJ2YWwpO1xuXG4gIHJldHVybiBwYXJhbGxlbChhY3Rpb25zLm1hcCgoYWN0aW9uLCBpKSA9PiB7XG4gICAgY29uc3QgdGltZVRvRGVsYXkgPSAoaW50ZXJ2YWxJc0Z1bmN0aW9uKSA/IGludGVydmFsKGkpIDogaSAqIGludGVydmFsO1xuICAgIHJldHVybiBjaGFpbihbXG4gICAgICBkZWxheSh0aW1lVG9EZWxheSksXG4gICAgICBhY3Rpb25cbiAgICBdKTtcbiAgfSksIHsgb25Db21wbGV0ZSB9KTtcbn07XG4iXX0=

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

var _framesync = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 The closed-form damped harmonic oscillating spring.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Or, spring.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 This is a direct port of Adam Miskiewicz's (@skevy) React Animated
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 PR #15322 https://github.com/facebook/react-native/pull/15322/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ```
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 spring({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   mass: 2,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   damping: 10,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   stiffness: 100,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   to: 100
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 }).start();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ```
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Adam Miskiewicz:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 @skevy (twitter.com/skevy, github.com/skevy)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Spring = function (_Action) {
  _inherits(Spring, _Action);

  function Spring() {
    _classCallCheck(this, Spring);

    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
  }

  Spring.prototype.onStart = function onStart() {
    var _props = this.props,
        velocity = _props.velocity,
        to = _props.to,
        from = _props.from;

    this.t = 0;
    this.initialVelocity = velocity ? velocity / 1000 : 0.0;
    this.isComplete = false;
    this.delta = to - from;
  };

  Spring.prototype.update = function update() {
    var _props2 = this.props,
        stiffness = _props2.stiffness,
        damping = _props2.damping,
        mass = _props2.mass,
        from = _props2.from,
        to = _props2.to,
        restSpeed = _props2.restSpeed,
        restDisplacement = _props2.restDisplacement;
    var delta = this.delta,
        initialVelocity = this.initialVelocity;


    var timeDelta = (0, _framesync.timeSinceLastFrame)() / 1000;
    var t = this.t = this.t + timeDelta;

    var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    var angularFreq = Math.sqrt(stiffness / mass);
    var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);

    var x0 = 1;
    var oscillation = 0.0;

    // Underdamped
    if (dampingRatio < 1) {
      var envelope = Math.exp(-dampingRatio * angularFreq * t);
      oscillation = envelope * ((initialVelocity + dampingRatio * angularFreq * x0) / expoDecay * Math.sin(expoDecay * t) + x0 * Math.cos(expoDecay * t));
      this.velocity = envelope * (Math.cos(expoDecay * t) * (initialVelocity + dampingRatio * angularFreq * x0) - expoDecay * x0 * Math.sin(expoDecay * t)) - dampingRatio * angularFreq * envelope * (Math.sin(expoDecay * t) * (initialVelocity + dampingRatio * angularFreq * x0) / expoDecay + x0 * Math.cos(expoDecay * t));

      // Critically damped
    } else {
      var _envelope = Math.exp(-angularFreq * t);
      oscillation = _envelope * (x0 + (initialVelocity + angularFreq * x0) * t);
      this.velocity = _envelope * (t * initialVelocity * angularFreq - t * x0 * (angularFreq * angularFreq) + initialVelocity);
    }

    var fraction = 1 - oscillation;
    var position = from + fraction * delta;

    // Check if simulation is complete
    // We do this here instead of `isActionComplete` as it allows us
    // to clamp to end during update)
    var isBelowVelocityThreshold = Math.abs(this.velocity) <= restSpeed;
    var isBelowDisplacementThreshold = Math.abs(to - position) <= restDisplacement;
    this.isComplete = isBelowVelocityThreshold && isBelowDisplacementThreshold;

    if (this.isComplete) {
      position = to;
    }

    return position;
  };

  Spring.prototype.isActionComplete = function isActionComplete() {
    return this.isComplete;
  };

  return Spring;
}(_2.default);

Spring.defaultProps = {
  stiffness: 100,
  damping: 10,
  mass: 1.0,
  velocity: 0.0,
  from: 0.0,
  to: 0.0,
  restSpeed: 0.01,
  restDisplacement: 0.01
};

exports.default = function (props) {
  return new Spring(props);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3NwcmluZy5qcyJdLCJuYW1lcyI6WyJTcHJpbmciLCJvblN0YXJ0IiwicHJvcHMiLCJ2ZWxvY2l0eSIsInRvIiwiZnJvbSIsInQiLCJpbml0aWFsVmVsb2NpdHkiLCJpc0NvbXBsZXRlIiwiZGVsdGEiLCJ1cGRhdGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwibWFzcyIsInJlc3RTcGVlZCIsInJlc3REaXNwbGFjZW1lbnQiLCJ0aW1lRGVsdGEiLCJkYW1waW5nUmF0aW8iLCJNYXRoIiwic3FydCIsImFuZ3VsYXJGcmVxIiwiZXhwb0RlY2F5IiwieDAiLCJvc2NpbGxhdGlvbiIsImVudmVsb3BlIiwiZXhwIiwic2luIiwiY29zIiwiZnJhY3Rpb24iLCJwb3NpdGlvbiIsImlzQmVsb3dWZWxvY2l0eVRocmVzaG9sZCIsImFicyIsImlzQmVsb3dEaXNwbGFjZW1lbnRUaHJlc2hvbGQiLCJpc0FjdGlvbkNvbXBsZXRlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBbUJBOzs7O0FBQ0E7Ozs7Ozs7OytlQXBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0JNQSxNOzs7Ozs7Ozs7bUJBWUpDLE8sc0JBQVU7QUFBQSxpQkFDdUIsS0FBS0MsS0FENUI7QUFBQSxRQUNBQyxRQURBLFVBQ0FBLFFBREE7QUFBQSxRQUNVQyxFQURWLFVBQ1VBLEVBRFY7QUFBQSxRQUNjQyxJQURkLFVBQ2NBLElBRGQ7O0FBRVIsU0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLQyxlQUFMLEdBQXVCSixXQUFXQSxXQUFXLElBQXRCLEdBQTZCLEdBQXBEO0FBQ0EsU0FBS0ssVUFBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUtDLEtBQUwsR0FBYUwsS0FBS0MsSUFBbEI7QUFDRCxHOzttQkFFREssTSxxQkFBUztBQUFBLGtCQUNxRSxLQUFLUixLQUQxRTtBQUFBLFFBQ0NTLFNBREQsV0FDQ0EsU0FERDtBQUFBLFFBQ1lDLE9BRFosV0FDWUEsT0FEWjtB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QUt6QixVQUFaO0FBQ0QsRzs7Ozs7QUFuRUdSLE0sQ0FDR2tDLFksR0FBZTtBQUNwQnZCLGFBQVcsR0FEUztBQUVwQkMsV0FBUyxFQUZXO0FBR3BCQyxRQUFNLEdBSGM7QUFJcEJWLFlBQVUsR0FKVTtBQUtwQkUsUUFBTSxHQUxjO0FBTXBCRCxNQUFJLEdBTmdCO0FBT3BCVSxhQUFXLElBUFM7QUFRcEJDLG9CQUFrQjtBQVJFLEM7O2tCQXFFVCxVQUFDYixLQUFEO0FBQUEsU0FBVyxJQUFJRixNQUFKLENBQVdFLEtBQVgsQ0FBWDtBQUFBLEMiLCJmaWxlIjoic3ByaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgVGhlIGNsb3NlZC1mb3JtIGRhbXBlZCBoYXJtb25pYyBvc2NpbGxhdGluZyBzcHJpbmcuXG4gIE9yLCBzcHJpbmcuXG5cbiAgVGhpcyBpcyBhIGRpcmVjdCBwb3J0IG9mIEFkYW0gTWlza2lld2ljeidzIChAc2tldnkpIFJlYWN0IEFuaW1hdGVkXG4gIFBSICMxNTMyMiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTUzMjIvXG5cbiAgYGBgXG4gIHNwcmluZyh7XG4gICAgbWFzczogMixcbiAgICBkYW1waW5nOiAxMCxcbiAgICBzdGlmZm5lc3M6IDEwMCxcbiAgICB0bzogMTAwXG4gIH0pLnN0YXJ0KCk7XG4gIGBgYFxuXG4gIEFkYW0gTWlza2lld2ljejpcbiAgQHNrZXZ5ICh0d2l0dGVyLmNvbS9za2V2eSwgZ2l0aHViLmNvbS9za2V2eSlcbiAqL1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgeyB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICdmcmFtZXN5bmMnO1xuXG5jbGFzcyBTcHJpbmcgZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHN0aWZmbmVzczogMTAwLFxuICAgIGRhbXBpbmc6IDEwLFxuICAgIG1hc3M6IDEuMCxcbiAgICB2ZWxvY2l0eTogMC4wLFxuICAgIGZyb206IDAuMCxcbiAgICB0bzogMC4wLFxuICAgIHJlc3RTcGVlZDogMC4wMSxcbiAgICByZXN0RGlzcGxhY2VtZW50OiAwLjAxXG4gIH07XG5cbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IHZlbG9jaXR5LCB0bywgZnJvbSB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnQgPSAwO1xuICAgIHRoaXMuaW5pdGlhbFZlbG9jaXR5ID0gdmVsb2NpdHkgPyB2ZWxvY2l0eSAvIDEwMDAgOiAwLjA7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgdGhpcy5kZWx0YSA9IHRvIC0gZnJvbTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IHN0aWZmbmVzcywgZGFtcGluZywgbWFzcywgZnJvbSwgdG8sIHJlc3RTcGVlZCwgcmVzdERpc3BsYWNlbWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRlbHRhLCBpbml0aWFsVmVsb2NpdHkgfSA9IHRoaXM7XG5cbiAgICBjb25zdCB0aW1lRGVsdGEgPSB0aW1lU2luY2VMYXN0RnJhbWUoKSAvIDEwMDA7XG4gICAgY29uc3QgdCA9IHRoaXMudCA9IHRoaXMudCArIHRpbWVEZWx0YTtcblxuICAgIGNvbnN0IGRhbXBpbmdSYXRpbyA9IGRhbXBpbmcgLyAoMiAqIE1hdGguc3FydChzdGlmZm5lc3MgKiBtYXNzKSk7XG4gICAgY29uc3QgYW5ndWxhckZyZXEgPSBNYXRoLnNxcnQoc3RpZmZuZXNzIC8gbWFzcyk7XG4gICAgY29uc3QgZXhwb0RlY2F5ID0gYW5ndWxhckZyZXEgKiBNYXRoLnNxcnQoMS4wIC0gKGRhbXBpbmdSYXRpbyAqIGRhbXBpbmdSYXRpbykpO1xuXG4gICAgY29uc3QgeDAgPSAxO1xuICAgIGxldCBvc2NpbGxhdGlvbiA9IDAuMDtcblxuICAgIC8vIFVuZGVyZGFtcGVkXG4gICAgaWYgKGRhbXBpbmdSYXRpbyA8IDEpIHtcbiAgICAgIGNvbnN0IGVudmVsb3BlID0gTWF0aC5leHAoLWRhbXBpbmdSYXRpbyAqIGFuZ3VsYXJGcmVxICogdCk7XG4gICAgICBvc2NpbGxhdGlvbiA9IGVudmVsb3BlICogKCgoaW5pdGlhbFZlbG9jaXR5ICsgZGFtcGluZ1JhdGlvICogYW5ndWxhckZyZXEgKiB4MCkgLyBleHBvRGVjYXkpICogTWF0aC5zaW4oZXhwb0RlY2F5ICogdCkgKyAoeDAgKiBNYXRoLmNvcyhleHBvRGVjYXkgKiB0KSkpO1xuICAgICAgdGhpcy52ZWxvY2l0eSA9IChlbnZlbG9wZSAqICgoTWF0aC5jb3MoZXhwb0RlY2F5ICogdCkgKiAoaW5pdGlhbFZlbG9jaXR5ICsgZGFtcGluZ1JhdGlvICogYW5ndWxhckZyZXEgKiB4MCkpIC0gKGV4cG9EZWNheSAqIHgwICogTWF0aC5zaW4oZXhwb0RlY2F5ICogdCkpKSAtXG4gICAgICAgICgoZGFtcGluZ1JhdGlvICogYW5ndWxhckZyZXEgKiBlbnZlbG9wZSkgKiAoKCgoTWF0aC5zaW4oZXhwb0RlY2F5ICogdCkgKiAoaW5pdGlhbFZlbG9jaXR5ICsgZGFtcGluZ1JhdGlvICogYW5ndWxhckZyZXEgKiB4MCkpICkgLyBleHBvRGVjYXkpICsgKHgwICogTWF0aC5jb3MoZXhwb0RlY2F5ICogdCkpKSkpO1xuXG4gICAgLy8gQ3JpdGljYWxseSBkYW1wZWRcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZW52ZWxvcGUgPSBNYXRoLmV4cCgtYW5ndWxhckZyZXEgKiB0KTtcbiAgICAgIG9zY2lsbGF0aW9uID0gZW52ZWxvcGUgKiAoeDAgKyAoaW5pdGlhbFZlbG9jaXR5ICsgKGFuZ3VsYXJGcmVxICogeDApKSAqIHQpO1xuICAgICAgdGhpcy52ZWxvY2l0eSA9IGVudmVsb3BlICogKCh0ICogaW5pdGlhbFZlbG9jaXR5ICogYW5ndWxhckZyZXEpIC0gKHQgKiB4MCAqIChhbmd1bGFyRnJlcSAqIGFuZ3VsYXJGcmVxKSkgKyBpbml0aWFsVmVsb2NpdHkpO1xuICAgIH1cblxuICAgIGNvbnN0IGZyYWN0aW9uID0gMSAtIG9zY2lsbGF0aW9uO1xuICAgIGxldCBwb3NpdGlvbiA9IGZyb20gKyBmcmFjdGlvbiAqIGRlbHRhO1xuXG4gICAgLy8gQ2hlY2sgaWYgc2ltdWxhdGlvbiBpcyBjb21wbGV0ZVxuICAgIC8vIFdlIGRvIHRoaXMgaGVyZSBpbnN0ZWFkIG9mIGBpc0FjdGlvbkNvbXBsZXRlYCBhcyBpdCBhbGxvd3MgdXNcbiAgICAvLyB0byBjbGFtcCB0byBlbmQgZHVyaW5nIHVwZGF0ZSlcbiAgICBjb25zdCBpc0JlbG93VmVsb2NpdHlUaHJlc2hvbGQgPSBNYXRoLmFicyh0aGlzLnZlbG9jaXR5KSA8PSByZXN0U3BlZWQ7XG4gICAgY29uc3QgaXNCZWxvd0Rpc3BsYWNlbWVudFRocmVzaG9sZCA9IE1hdGguYWJzKHRvIC0gcG9zaXRpb24pIDw9IHJlc3REaXNwbGFjZW1lbnQ7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gaXNCZWxvd1ZlbG9jaXR5VGhyZXNob2xkICYmIGlzQmVsb3dEaXNwbGFjZW1lbnRUaHJlc2hvbGQ7XG5cbiAgICBpZiAodGhpcy5pc0NvbXBsZXRlKSB7XG4gICAgICBwb3NpdGlvbiA9IHRvO1xuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IG5ldyBTcHJpbmcocHJvcHMpO1xuIl19

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (element, props) {
  return new CSSRenderer(_extends({
    element: element,
    enableHardwareAcceleration: true
  }, props));
};

var _ = __webpack_require__(7);

var _2 = _interopRequireDefault(_);

var _render = __webpack_require__(30);

var _render2 = _interopRequireDefault(_render);

var _transformProps = __webpack_require__(8);

var _transformProps2 = _interopRequireDefault(_transformProps);

var _valueTypes = __webpack_require__(17);

var _valueTypes2 = _interopRequireDefault(_valueTypes);

var _prefixer = __webpack_require__(18);

var _prefixer2 = _interopRequireDefault(_prefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CSSRenderer = function (_Renderer) {
  _inherits(CSSRenderer, _Renderer);

  function CSSRenderer() {
    _classCallCheck(this, CSSRenderer);

    return _possibleConstructorReturn(this, _Renderer.apply(this, arguments));
  }

  CSSRenderer.prototype.onRender = function onRender() {
    var _props = this.props,
        element = _props.element,
        enableHardwareAcceleration = _props.enableHardwareAcceleration;

    (0, _render2.default)(element, this.state, this.changedValues, enableHardwareAcceleration);
  };

  CSSRenderer.prototype.onRead = function onRead(key) {
    var valueType = _valueTypes2.default[key];

    if (!_transformProps2.default[key]) {
      var element = this.props.element;

      var domValue = window.getComputedStyle(element, null)[(0, _prefixer2.default)(key)] || 0;
      return valueType && valueType.parse ? valueType.parse(domValue) : domValue;
    } else {
      if (valueType) {
        return valueType.default || 0;
      } else {
        return 0;
      }
    }
  };

  return CSSRenderer;
}(_2.default);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzIl0sIm5hbWVzIjpbImVsZW1lbnQiLCJwcm9wcyIsIkNTU1JlbmRlcmVyIiwiZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24iLCJvblJlbmRlciIsInN0YXRlIiwiY2hhbmdlZFZhbHVlcyIsIm9uUmVhZCIsImtleSIsInZhbHVlVHlwZSIsImRvbVZhbHVlIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBhcnNlIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQTZCZSxVQUFVQSxPQUFWLEVBQW1CQyxLQUFuQixFQUEwQjtBQUN2QyxTQUFPLElBQUlDLFdBQUo7QUFDTEYsb0JBREs7QUFFTEcsZ0NBQTRCO0FBRnZCLEtBR0ZGLEtBSEUsRUFBUDtBQUtELEM7O0FBbkNEOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQyxXOzs7Ozs7Ozs7d0JBQ0pFLFEsdUJBQVc7QUFBQSxpQkFDdUMsS0FBS0gsS0FENUM7QUFBQSxRQUNERCxPQURDLFVBQ0RBLE9BREM7QUFBQSxRQUNRRywwQkFEUixVQUNRQSwwQkFEUjs7QUFFVCwwQkFBVUgsT0FBVixFQUFtQixLQUFLSyxLQUF4QixFQUErQixLQUFLQyxhQUFwQyxFQUFtREgsMEJBQW5EO0FBQ0QsRzs7d0JBRURJLE0sbUJBQU9DLEcsRUFBSztBQUNWLFFBQU1DLFlBQVkscUJBQWNELEdBQWQsQ0FBbEI7O0FBRUEsUUFBSSxDQUFDLHlCQUFlQSxHQUFmLENBQUwsRUFBMEI7QUFBQSxVQUNoQlIsT0FEZ0IsR0FDSixLQUFLQyxLQURELENBQ2hCRCxPQURnQjs7QUFFeEIsVUFBTVUsV0FBV0MsT0FBT0MsZ0JBQVAsQ0FBd0JaLE9BQXhCLEVBQWlDLElBQWpDLEVBQXVDLHdCQUFTUSxHQUFULENBQXZDLEtBQXlELENBQTFFO0FBQ0EsYUFBUUMsYUFBYUEsVUFBVUksS0FBeEIsR0FBaUNKLFVBQVVJLEtBQVYsQ0FBZ0JILFFBQWhCLENBQWpDLEdBQTZEQSxRQUFwRTtBQUNELEtBSkQsTUFJTztBQUNMLFVBQUlELFNBQUosRUFBZTtBQUNiLGVBQU9BLFVBQVVLLE9BQVYsSUFBcUIsQ0FBNUI7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLENBQVA7QUFDRDtBQUNGO0FBQ0YsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZW5kZXJlciBmcm9tICcuLi8nO1xuaW1wb3J0IHJlbmRlckNTUyBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IHZhbHVlVHlwZXNNYXAgZnJvbSAnLi92YWx1ZS10eXBlcyc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9wcmVmaXhlcic7XG5cbmNsYXNzIENTU1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBvblJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIHJlbmRlckNTUyhlbGVtZW50LCB0aGlzLnN0YXRlLCB0aGlzLmNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKTtcbiAgfVxuXG4gIG9uUmVhZChrZXkpIHtcbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZVR5cGVzTWFwW2tleV07XG5cbiAgICBpZiAoIXRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGRvbVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClbcHJlZml4ZXIoa2V5KV0gfHwgMDtcbiAgICAgIHJldHVybiAodmFsdWVUeXBlICYmIHZhbHVlVHlwZS5wYXJzZSkgPyB2YWx1ZVR5cGUucGFyc2UoZG9tVmFsdWUpIDogZG9tVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlVHlwZS5kZWZhdWx0IHx8IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ1NTUmVuZGVyZXIoe1xuICAgIGVsZW1lbnQsXG4gICAgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb246IHRydWUsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG59XG4iXX0=

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = buildStylePropertyString;

var _transformProps = __webpack_require__(8);

var _transformProps2 = _interopRequireDefault(_transformProps);

var _valueTypes = __webpack_require__(17);

var _valueTypes2 = _interopRequireDefault(_valueTypes);

var _prefixer = __webpack_require__(18);

var _prefixer2 = _interopRequireDefault(_prefixer);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var translate = _transformProps2.default.translate,
    translateX = _transformProps2.default.translateX,
    translateY = _transformProps2.default.translateY,
    translateZ = _transformProps2.default.translateZ,
    scale = _transformProps2.default.scale,
    scaleX = _transformProps2.default.scaleX,
    scaleY = _transformProps2.default.scaleY,
    scaleZ = _transformProps2.default.scaleZ,
    rotate = _transformProps2.default.rotate,
    rotateX = _transformProps2.default.rotateX,
    rotateY = _transformProps2.default.rotateY,
    rotateZ = _transformProps2.default.rotateZ;


var translateMap = {
  x: 'translateX',
  y: 'translateY',
  z: 'translateZ'
};

var transformPropOrder = [translate, translateX, translateY, translateZ, scale, scaleX, scaleY, scaleZ, rotate, rotateX, rotateY, rotateZ];

function sortTransformProps(a, b) {
  return transformPropOrder.indexOf(a) - transformPropOrder.indexOf(b);
}

function buildStylePropertyString(element, state, changedValues, enableHardwareAcceleration) {
  var propertyString = '';
  var transformString = '';
  var hasTransform = false;
  var transformHasZ = false;

  // First check if there are any changed transform values
  // and if true add all transform values
  var numChangedValues = changedValues.length;
  for (var i = 0; i < numChangedValues; i++) {
    var key = changedValues[i];

    // If this is a transform property, add all other transform props
    // to changedValues and then break
    if (_transformProps2.default[key]) {
      hasTransform = true;

      for (var _key in state) {
        if (_transformProps2.default[_key] && changedValues.indexOf(_key) === -1) {
          changedValues.push(_key);
        }
      }

      break;
    }
  }

  changedValues.sort(sortTransformProps);

  // Now run through each property, and decide which is a plain style props,
  // a transform property and CSS vars and handle accordingly
  var totalNumChangedValues = changedValues.length;
  for (var _i = 0; _i < totalNumChangedValues; _i++) {
    var _key2 = changedValues[_i];
    var value = state[_key2];

    if (translateMap[_key2]) {
      _key2 = translateMap[_key2];
    }

    // If this is a number or object and we have filter, apply filter
    if (_valueTypes2.default[_key2] && ((0, _utils.isNum)(value) || (0, _utils.isObj)(value)) && _valueTypes2.default[_key2].transform) {
      value = _valueTypes2.default[_key2].transform(value);
    }

    // If a transform prop, add to transform string
    if (_transformProps2.default[_key2]) {
      transformString += _key2 + '(' + value + ') ';
      transformHasZ = _key2 === translateMap.z ? true : transformHasZ;

      // Or if a simple CSS property, set
    } else {
      propertyString += ';' + (0, _prefixer2.default)(_key2, true) + ':' + value;
    }
  }

  // If we have transform props, build a transform string
  if (hasTransform) {
    if (!transformHasZ && enableHardwareAcceleration) {
      transformString += translateMap.z + '(0)';
    }

    propertyString += ';' + (0, _prefixer2.default)('transform', true) + ':' + transformString;
  }

  element.style.cssText += propertyString;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3JlbmRlci5qcyJdLCJuYW1lcyI6WyJidWlsZFN0eWxlUHJvcGVydHlTdHJpbmciLCJ0cmFuc2xhdGUiLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsInRyYW5zbGF0ZVoiLCJzY2FsZSIsInNjYWxlWCIsInNjYWxlWSIsInNjYWxlWiIsInJvdGF0ZSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsInRyYW5zbGF0ZU1hcCIsIngiLCJ5IiwieiIsInRyYW5zZm9ybVByb3BPcmRlciIsInNvcnRUcmFuc2Zvcm1Qcm9wcyIsImEiLCJiIiwiaW5kZXhPZiIsImVsZW1lbnQiLCJzdGF0ZSIsImNoYW5nZWRWYWx1ZXMiLCJlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiIsInByb3BlcnR5U3RyaW5nIiwidHJhbnNmb3JtU3RyaW5nIiwiaGFzVHJhbnNmb3JtIiwidHJhbnNmb3JtSGFzWiIsIm51bUNoYW5nZWRWYWx1ZXMiLCJsZW5ndGgiLCJpIiwia2V5IiwicHVzaCIsInNvcnQiLCJ0b3RhbE51bUNoYW5nZWRWYWx1ZXMiLCJ2YWx1ZSIsInRyYW5zZm9ybSIsInN0eWxlIiwiY3NzVGV4dCJdLCJtYXBwaW5ncyI6Ijs7O2tCQTZDd0JBLHdCOztBQTdDeEI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFHRUMsUyw0QkFBQUEsUztJQUNBQyxVLDRCQUFBQSxVO0lBQ0FDLFUsNEJBQUFBLFU7SUFDQUMsVSw0QkFBQUEsVTtJQUNBQyxLLDRCQUFBQSxLO0lBQ0FDLE0sNEJBQUFBLE07SUFDQUMsTSw0QkFBQUEsTTtJQUNBQyxNLDRCQUFBQSxNO0lBQ0FDLE0sNEJBQUFBLE07SUFDQUMsTyw0QkFBQUEsTztJQUNBQyxPLDRCQUFBQSxPO0lBQ0FDLE8sNEJBQUFBLE87OztBQUdGLElBQU1DLGVBQWU7QUFDbkJDLEtBQUcsWUFEZ0I7QUFFbkJDLEtBQUcsWUFGZ0I7QUFHbkJDLEtBQUc7QUFIZ0IsQ0FBckI7O0FBTUEsSUFB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InJlbmRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL3RyYW5zZm9ybS1wcm9wcyc7XG5pbXBvcnQgdmFsdWVUeXBlcyBmcm9tICcuL3ZhbHVlLXR5cGVzJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcbmltcG9ydCB7IGlzTnVtLCBpc09iaiB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5cbmNvbnN0IHtcbiAgdHJhbnNsYXRlLFxuICB0cmFuc2xhdGVYLFxuICB0cmFuc2xhdGVZLFxuICB0cmFuc2xhdGVaLFxuICBzY2FsZSxcbiAgc2NhbGVYLFxuICBzY2FsZVksXG4gIHNjYWxlWixcbiAgcm90YXRlLFxuICByb3RhdGVYLFxuICByb3RhdGVZLFxuICByb3RhdGVaXG59ID0gdHJhbnNmb3JtUHJvcHM7XG5cbmNvbnN0IHRyYW5zbGF0ZU1hcCA9IHtcbiAgeDogJ3RyYW5zbGF0ZVgnLFxuICB5OiAndHJhbnNsYXRlWScsXG4gIHo6ICd0cmFuc2xhdGVaJ1xufTtcblxuY29uc3QgdHJhbnNmb3JtUHJvcE9yZGVyID0gW1xuICB0cmFuc2xhdGUsXG4gIHRyYW5zbGF0ZVgsXG4gIHRyYW5zbGF0ZVksXG4gIHRyYW5zbGF0ZVosXG4gIHNjYWxlLFxuICBzY2FsZVgsXG4gIHNjYWxlWSxcbiAgc2NhbGVaLFxuICByb3RhdGUsXG4gIHJvdGF0ZVgsXG4gIHJvdGF0ZVksXG4gIHJvdGF0ZVpcbl07XG5cbmZ1bmN0aW9uIHNvcnRUcmFuc2Zvcm1Qcm9wcyhhLCBiKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1Qcm9wT3JkZXIuaW5kZXhPZihhKSAtIHRyYW5zZm9ybVByb3BPcmRlci5pbmRleE9mKGIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFN0eWxlUHJvcGVydHlTdHJpbmcoZWxlbWVudCwgc3RhdGUsIGNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gIGxldCBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICBsZXQgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gIGxldCBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgbGV0IHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAvLyBGaXJzdCBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGNoYW5nZWQgdHJhbnNmb3JtIHZhbHVlc1xuICAvLyBhbmQgaWYgdHJ1ZSBhZGQgYWxsIHRyYW5zZm9ybSB2YWx1ZXNcbiAgY29uc3QgbnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNoYW5nZWRWYWx1ZXM7IGkrKykge1xuICAgIGxldCBrZXkgPSBjaGFuZ2VkVmFsdWVzW2ldO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBwcm9wZXJ0eSwgYWRkIGFsbCBvdGhlciB0cmFuc2Zvcm0gcHJvcHNcbiAgICAvLyB0byBjaGFuZ2VkVmFsdWVzIGFuZCB0aGVuIGJyZWFrXG4gICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG5cbiAgICAgIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSAmJiBjaGFuZ2VkVmFsdWVzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjaGFuZ2VkVmFsdWVzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VkVmFsdWVzLnNvcnQoc29ydFRyYW5zZm9ybVByb3BzKTtcblxuICAvLyBOb3cgcnVuIHRocm91Z2ggZWFjaCBwcm9wZXJ0eSwgYW5kIGRlY2lkZSB3aGljaCBpcyBhIHBsYWluIHN0eWxlIHByb3BzLFxuICAvLyBhIHRyYW5zZm9ybSBwcm9wZXJ0eSBhbmQgQ1NTIHZhcnMgYW5kIGhhbmRsZSBhY2NvcmRpbmdseVxuICBjb25zdCB0b3RhbE51bUNoYW5nZWRWYWx1ZXMgPSBjaGFuZ2VkVmFsdWVzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbE51bUNoYW5nZWRWYWx1ZXM7IGkrKykge1xuICAgIGxldCBrZXkgPSBjaGFuZ2VkVmFsdWVzW2ldO1xuICAgIGxldCB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICBpZiAodHJhbnNsYXRlTWFwW2tleV0pIHtcbiAgICAgIGtleSA9IHRyYW5zbGF0ZU1hcFtrZXldO1xuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSBudW1iZXIgb3Igb2JqZWN0IGFuZCB3ZSBoYXZlIGZpbHRlciwgYXBwbHkgZmlsdGVyXG4gICAgaWYgKHZhbHVlVHlwZXNba2V5XSAmJiAoaXNOdW0odmFsdWUpIHx8IGlzT2JqKHZhbHVlKSkgJiYgdmFsdWVUeXBlc1trZXldLnRyYW5zZm9ybSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZVR5cGVzW2tleV0udHJhbnNmb3JtKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBJZiBhIHRyYW5zZm9ybSBwcm9wLCBhZGQgdG8gdHJhbnNmb3JtIHN0cmluZ1xuICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IHRyYW5zbGF0ZU1hcC56KSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuXG4gICAgLy8gT3IgaWYgYSBzaW1wbGUgQ1NTIHByb3BlcnR5LCBzZXRcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgcHJlZml4ZXIoa2V5LCB0cnVlKSArICc6JyArIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHdlIGhhdmUgdHJhbnNmb3JtIHByb3BzLCBidWlsZCBhIHRyYW5zZm9ybSBzdHJpbmdcbiAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgIGlmICghdHJhbnNmb3JtSGFzWiAmJiBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IHRyYW5zbGF0ZU1hcC56ICsgJygwKSc7XG4gICAgfVxuXG4gICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgcHJlZml4ZXIoJ3RyYW5zZm9ybScsIHRydWUpICsgJzonICsgdHJhbnNmb3JtU3RyaW5nO1xuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IHByb3BlcnR5U3RyaW5nO1xufVxuIl19

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (element, props) {
  return new SVGRenderer(_extends({
    element: element
  }, props));
};

var _ = __webpack_require__(7);

var _2 = _interopRequireDefault(_);

var _build = __webpack_require__(32);

var _build2 = _interopRequireDefault(_build);

var _transformProps = __webpack_require__(8);

var _transformProps2 = _interopRequireDefault(_transformProps);

var _valueTypes = __webpack_require__(33);

var _valueTypes2 = _interopRequireDefault(_valueTypes);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVGRenderer = function (_Renderer) {
  _inherits(SVGRenderer, _Renderer);

  function SVGRenderer(props) {
    _classCallCheck(this, SVGRenderer);

    var _this = _possibleConstructorReturn(this, _Renderer.call(this, props));

    var _props$element$getBBo = props.element.getBBox(),
        x = _props$element$getBBo.x,
        y = _props$element$getBBo.y,
        width = _props$element$getBBo.width,
        height = _props$element$getBBo.height;

    _this.elementDimensions = { x: x, y: y, width: width, height: height };
    return _this;
  }

  SVGRenderer.prototype.onRender = function onRender() {
    var element = this.props.element;

    var attrs = (0, _build2.default)(this.state, this.elementDimensions);
    (0, _utils.setDOMAttrs)(element, attrs);
  };

  SVGRenderer.prototype.onRead = function onRead(key) {
    var element = this.props.element;


    if (!_transformProps2.default[key]) {
      return element.getAttribute(key);
    } else {
      var valueType = _valueTypes2.default[key];
      return valueType ? valueType.default : 0;
    }
  };

  return SVGRenderer;
}(_2.default);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzIl0sIm5hbWVzIjpbImVsZW1lbnQiLCJwcm9wcyIsIlNWR1JlbmRlcmVyIiwiZ2V0QkJveCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJlbGVtZW50RGltZW5zaW9ucyIsIm9uUmVuZGVyIiwiYXR0cnMiLCJzdGF0ZSIsIm9uUmVhZCIsImtleSIsImdldEF0dHJpYnV0ZSIsInZhbHVlVHlwZSIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFnQ2UsVUFBVUEsT0FBVixFQUFtQkMsS0FBbkIsRUFBMEI7QUFDdkMsU0FBTyxJQUFJQyxXQUFKO0FBQ0xGO0FBREssS0FFRkMsS0FGRSxFQUFQO0FBSUQsQzs7QUFyQ0Q7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQyxXOzs7QUFDSix1QkFBWUQsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixxQkFBTUEsS0FBTixDQURpQjs7QUFBQSxnQ0FHZUEsTUFBTUQsT0FBTixDQUFjRyxPQUFkLEVBSGY7QUFBQSxRQUdUQyxDQUhTLHlCQUdUQSxDQUhTO0FBQUEsUUFHTkMsQ0FITSx5QkFHTkEsQ0FITTtBQUFBLFFBR0hDLEtBSEcseUJBR0hBLEtBSEc7QUFBQSxRQUdJQyxNQUhKLHlCQUdJQSxNQUhKOztBQUlqQixVQUFLQyxpQkFBTCxHQUF5QixFQUFFSixJQUFGLEVBQUtDLElBQUwsRUFBUUMsWUFBUixFQUFlQyxjQUFmLEVBQXpCO0FBSmlCO0FBS2xCOzt3QkFFREUsUSx1QkFBVztBQUFBLFFBQ0RULE9BREMsR0FDVyxLQUFLQyxLQURoQixDQUNERCxPQURDOztBQUVULFFBQU1VLFFBQVEscUJBQU0sS0FBS0MsS0FBWCxFQUFrQixLQUFLSCxpQkFBdkIsQ0FBZDtBQUNBLDRCQUFZUixPQUFaLEVBQXFCVSxLQUFyQjtBQUNELEc7O3dCQUVERSxNLG1CQUFPQyxHLEVBQUs7QUFBQSxRQUNGYixPQURFLEdBQ1UsS0FBS0MsS0FEZixDQUNGRCxPQURFOzs7QUFHVixRQUFJLENBQUMseUJBQWVhLEdBQWYsQ0FBTCxFQUEwQjtBQUN4QixhQUFPYixRQUFRYyxZQUFSLENBQXFCRCxHQUFyQixDQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBTUUsWUFBWSxxQkFBYUYsR0FBYixDQUFsQjtBQUNBLGFBQVFFLFNBQUQsR0FBY0EsVUFBVUMsT0FBeEIsR0FBa0MsQ0FBekM7QUFDRDtBQUNGLEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi4vJztcbmltcG9ydCBidWlsZCBmcm9tICcuL2J1aWxkJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi92YWx1ZS10eXBlcyc7XG5pbXBvcnQgeyBzZXRET01BdHRycyB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5cbmNsYXNzIFNWR1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gcHJvcHMuZWxlbWVudC5nZXRCQm94KCk7XG4gICAgdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9O1xuICB9XG5cbiAgb25SZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGF0dHJzID0gYnVpbGQodGhpcy5zdGF0ZSwgdGhpcy5lbGVtZW50RGltZW5zaW9ucyk7XG4gICAgc2V0RE9NQXR0cnMoZWxlbWVudCwgYXR0cnMpO1xuICB9XG5cbiAgb25SZWFkKGtleSkge1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghdHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlVHlwZU1hcFtrZXldO1xuICAgICAgcmV0dXJuICh2YWx1ZVR5cGUpID8gdmFsdWVUeXBlLmRlZmF1bHQgOiAwO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBTVkdSZW5kZXJlcih7XG4gICAgZWxlbWVudCxcbiAgICAuLi5wcm9wc1xuICB9KTtcbn1cbiJdfQ==

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = build;

var _utils = __webpack_require__(0);

var _transformProps = __webpack_require__(8);

var _transformProps2 = _interopRequireDefault(_transformProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZERO_NOT_ZERO = 0.0001;

function build(state, data) {
  var hasTransform = false;
  var props = {};
  var scale = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
  var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale || 1;
  var transformOriginX = data.width * ((state.originX || 50) / 100) + data.x;
  var transformOriginY = data.height * ((state.originY || 50) / 100) + data.y;
  var scaleTransformX = -transformOriginX * (scale * 1);
  var scaleTransformY = -transformOriginY * (scaleY * 1);
  var scaleReplaceX = transformOriginX / scale;
  var scaleReplaceY = transformOriginY / scaleY;
  var transform = {
    translate: 'translate(' + state.translateX + ', ' + state.translateY + ') ',
    scale: 'translate(' + scaleTransformX + ', ' + scaleTransformY + ') scale(' + scale + ', ' + scaleY + ') translate(' + scaleReplaceX + ', ' + scaleReplaceY + ') ',
    rotate: 'rotate(' + state.rotate + ', ' + transformOriginX + ', ' + transformOriginY + ') ',
    skewX: 'skewX(' + state.skewX + ') ',
    skewY: 'skewY(' + state.skewY + ') '
  };

  for (var key in state) {
    if (state.hasOwnProperty(key)) {
      if (_transformProps2.default[key]) {
        hasTransform = true;
      } else {
        props[(0, _utils.camelToDash)(key)] = state[key];
      }
    }
  }

  if (hasTransform) {
    props.transform = '';

    for (var _key in transform) {
      if (transform.hasOwnProperty(_key)) {
        var defaultValue = _key === 'scale' ? '1' : '0';
        props.transform += transform[_key].replace(/undefined/g, defaultValue);
      }
    }
  }

  return props;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL2J1aWxkLmpzIl0sIm5hbWVzIjpbImJ1aWxkIiwiWkVST19OT1RfWkVSTyIsInN0YXRlIiwiZGF0YSIsImhhc1RyYW5zZm9ybSIsInByb3BzIiwic2NhbGUiLCJ1bmRlZmluZWQiLCJzY2FsZVgiLCJzY2FsZVkiLCJ0cmFuc2Zvcm1PcmlnaW5YIiwid2lkdGgiLCJvcmlnaW5YIiwieCIsInRyYW5zZm9ybU9yaWdpblkiLCJoZWlnaHQiLCJvcmlnaW5ZIiwieSIsInNjYWxlVHJhbnNmb3JtWCIsInNjYWxlVHJhbnNmb3JtWSIsInNjYWxlUmVwbGFjZVgiLCJzY2FsZVJlcGxhY2VZIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJyb3RhdGUiLCJza2V3WCIsInNrZXdZIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJkZWZhdWx0VmFsdWUiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7a0JBS3dCQSxLOztBQUx4Qjs7QUFDQTs7Ozs7O0FBRUEsSUFBTUMsZ0JBQWdCLE1BQXRCOztBQUVlLFNBQVNELEtBQVQsQ0FBZUUsS0FBZixFQUFzQkMsSUFBdEIsRUFBNEI7QUFDekMsTUFBSUMsZUFBZSxLQUFuQjtBQUNBLE1BQU1DLFFBQVEsRUFBZDtBQUNBLE1BQU1DLFFBQVFKLE1BQU1JLEtBQU4sS0FBZ0JDLFNBQWhCLEdBQTRCTCxNQUFNSSxLQUFOLElBQWVMLGFBQTNDLEdBQTJEQyxNQUFNTSxNQUFOLElBQWdCLENBQXpGO0FBQ0EsTUFBTUMsU0FBU1AsTUFBTU8sTUFBTixLQUFpQkYsU0FBakIsR0FBNkJMLE1BQU1PLE1BQU4sSUFBZ0JSLGFBQTdDLEdBQTZESyxTQUFTLENBQXJGO0FBQ0EsTUFBTUksbUJBQW1CUCxLQUFLUSxLQUFMLElBQWMsQ0FBQ1QsTUFBTVUsT0FBTixJQUFpQixFQUFsQixJQUF3QixHQUF0QyxJQUE2Q1QsS0FBS1UsQ0FBM0U7QUFDQSxNQUFNQyxtQkFBbUJYLEtBQUtZLE1BQUwsSUFBZSxDQUFDYixNQUFNYyxPQUFOLElBQWlCLEVBQWxCLElBQXdCLEdBQXZDLElBQThDYixLQUFLYyxDQUE1RTtBQUNBLE1BQU1DLGtCQUFrQixDQUFFUixnQkFBRixJQUFzQkosUUFBUSxDQUE5QixDQUF4QjtBQUNBLE1BQU1hLGtCQUFrQixDQUFFTCxnQkFBRixJQUFzQkwsU0FBUyxDQUEvQixDQUF4QjtBQUNBLE1BQU1XLGdCQUFnQlYsbUJBQW1CSixLQUF6QztBQUNBLE1BQU1lLGdCQUFnQlAsbUJBQW1CTCxNQUF6QztBQUNBLE1BQU1hLFlBQVk7QUFDaEJDLDhCQUF3QnJCLE1BQU1zQixVQUE5QixVQUE2Q3RCLE1BQU11QixVQUFuRCxPQURnQjtBQUVoQm5CLDBCQUFvQlksZUFBcEIsVUFBd0NDLGVBQXhDLGdCQUFrRWIsS0FBbEUsVUFBNEVHLE1BQTVFLG9CQUFpR1csYUFBakcsVUFBbUhDLGFBQW5ILE9BRmdCO0FBR2hCSyx3QkFBa0J4QixNQUFNd0IsTUFBeEIsVUFBbUNoQixnQkFBbkMsVUFBd0RJLGdCQUF4RCxPQUhnQjtBQUloQmEsc0JBQWdCekIsTUFBTXlCLEtBQXRCLE9BSmdCO0FBS2hCQyxzQkFBZ0IxQixNQUFNMEIsS0FBdEI7QUFMZ0IsR0FBbEI7O0FBUUEsT0FBSyxJQUFJQyxHQUFULElBQWdCM0IsS0FBaEIsRUFBdUI7QUFDckIsUUFBSUEsTUFBTTRCLGNBQU4sQ0FBcUJELEdBQXJCLENBQUosRUFBK0I7QUFDN0IsVUFBSSx5QkFBZUEsR0FBZixDQUFKLEVBQXlCO0FBQ3ZCekIsdUJBQWUsSUFBZjtBQUNELE9BRkQsTUFFTztBQUNMQyxjQUFNLHdCQUFZd0IsR0FBWixDQUFOLElBQTBCM0IsTUFBTTJCLEdBQU4sQ0FBMUI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsTUFBSXpCLFlBQUosRUFBa0I7QUFDaEJDLFVBQU1pQixTQUFOLEdBQWtCLEVBQWxCOztBQUVBLFNBQUssSUFBSU8sSUFBVCxJQUFnQlAsU0FBaEIsRUFBMkI7QUFDekIsVUFBSUEsVUFBVVEsY0FBVixDQUF5QkQsSUFBekIsQ0FBSixFQUFtQztBQUNqQyxZQUFNRSxlQUFnQkYsU0FBUSxPQUFULEdBQW9CLEdBQXBCLEdBQTBCLEdBQS9DO0FBQ0F4QixjQUFNaUIsU0FBTixJQUFtQkEsVUFBVU8sSUFBVixFQUFlRyxPQUFmLENBQXVCLFlBQXZCLEVBQXFDRCxZQUFyQyxDQUFuQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPMUIsS0FBUDtBQUNEIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxUb0Rhc2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuXG5jb25zdCBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZChzdGF0ZSwgZGF0YSkge1xuICBsZXQgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIGNvbnN0IHByb3BzID0ge307XG4gIGNvbnN0IHNjYWxlID0gc3RhdGUuc2NhbGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlIHx8IFpFUk9fTk9UX1pFUk8gOiBzdGF0ZS5zY2FsZVggfHwgMTtcbiAgY29uc3Qgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDE7XG4gIGNvbnN0IHRyYW5zZm9ybU9yaWdpblggPSBkYXRhLndpZHRoICogKChzdGF0ZS5vcmlnaW5YIHx8IDUwKSAvIDEwMCkgKyBkYXRhLng7XG4gIGNvbnN0IHRyYW5zZm9ybU9yaWdpblkgPSBkYXRhLmhlaWdodCAqICgoc3RhdGUub3JpZ2luWSB8fCA1MCkgLyAxMDApICsgZGF0YS55O1xuICBjb25zdCBzY2FsZVRyYW5zZm9ybVggPSAtIHRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKTtcbiAgY29uc3Qgc2NhbGVUcmFuc2Zvcm1ZID0gLSB0cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpO1xuICBjb25zdCBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlO1xuICBjb25zdCBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWTtcbiAgY29uc3QgdHJhbnNmb3JtID0ge1xuICAgIHRyYW5zbGF0ZTogYHRyYW5zbGF0ZSgke3N0YXRlLnRyYW5zbGF0ZVh9LCAke3N0YXRlLnRyYW5zbGF0ZVl9KSBgLFxuICAgIHNjYWxlOiBgdHJhbnNsYXRlKCR7c2NhbGVUcmFuc2Zvcm1YfSwgJHtzY2FsZVRyYW5zZm9ybVl9KSBzY2FsZSgke3NjYWxlfSwgJHtzY2FsZVl9KSB0cmFuc2xhdGUoJHtzY2FsZVJlcGxhY2VYfSwgJHtzY2FsZVJlcGxhY2VZfSkgYCxcbiAgICByb3RhdGU6IGByb3RhdGUoJHtzdGF0ZS5yb3RhdGV9LCAke3RyYW5zZm9ybU9yaWdpblh9LCAke3RyYW5zZm9ybU9yaWdpbll9KSBgLFxuICAgIHNrZXdYOiBgc2tld1goJHtzdGF0ZS5za2V3WH0pIGAsXG4gICAgc2tld1k6IGBza2V3WSgke3N0YXRlLnNrZXdZfSkgYFxuICB9O1xuXG4gIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHNbY2FtZWxUb0Rhc2goa2V5KV0gPSBzdGF0ZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgIGZvciAobGV0IGtleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSAoa2V5ID09PSAnc2NhbGUnKSA/ICcxJyA6ICcwJztcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtrZXldLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn1cbiJdfQ==

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _valueTypes = __webpack_require__(5);

exports.default = {
  fill: _valueTypes.color,
  stroke: _valueTypes.color,
  scale: _valueTypes.scale,
  scaleX: _valueTypes.scale,
  scaleY: _valueTypes.scale,
  opacity: _valueTypes.alpha,
  fillOpacity: _valueTypes.alpha,
  strokeOpacity: _valueTypes.alpha
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbImZpbGwiLCJzdHJva2UiLCJzY2FsZSIsInNjYWxlWCIsInNjYWxlWSIsIm9wYWNpdHkiLCJmaWxsT3BhY2l0eSIsInN0cm9rZU9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7a0JBRWU7QUFDYkEseUJBRGE7QUFFYkMsMkJBRmE7QUFHYkMsMEJBSGE7QUFJYkMsMkJBSmE7QUFLYkMsMkJBTGE7QUFNYkMsNEJBTmE7QUFPYkMsZ0NBUGE7QUFRYkM7QUFSYSxDIiwiZmlsZSI6InZhbHVlLXR5cGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxwaGEsIGNvbG9yLCBzY2FsZSB9IGZyb20gJy4uLy4uL2luYy92YWx1ZS10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlsbDogY29sb3IsXG4gIHN0cm9rZTogY29sb3IsXG4gIHNjYWxlOiBzY2FsZSxcbiAgc2NhbGVYOiBzY2FsZSxcbiAgc2NhbGVZOiBzY2FsZSxcbiAgb3BhY2l0eTogYWxwaGEsXG4gIGZpbGxPcGFjaXR5OiBhbHBoYSxcbiAgc3Ryb2tlT3BhY2l0eTogYWxwaGFcbn07Il19

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (element, props) {
  return new SVGPathRenderer(_extends({
    element: element
  }, props));
};

var _ = __webpack_require__(7);

var _2 = _interopRequireDefault(_);

var _build = __webpack_require__(35);

var _build2 = _interopRequireDefault(_build);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVGPathRenderer = function (_Renderer) {
  _inherits(SVGPathRenderer, _Renderer);

  function SVGPathRenderer(props) {
    _classCallCheck(this, SVGPathRenderer);

    var _this = _possibleConstructorReturn(this, _Renderer.call(this, props));

    var _props$element$getBBo = props.element.getBBox(),
        x = _props$element$getBBo.x,
        y = _props$element$getBBo.y,
        width = _props$element$getBBo.width,
        height = _props$element$getBBo.height;

    _this.elementDimensions = {
      x: x,
      y: y,
      width: width,
      height: height,
      pathLength: props.element.getTotalLength()
    };
    return _this;
  }

  SVGPathRenderer.prototype.onRender = function onRender() {
    var pathLength = this.elementDimensions.pathLength;
    var element = this.props.element;

    (0, _utils.setDOMAttrs)(element, (0, _build2.default)(this.state, pathLength));
  };

  SVGPathRenderer.prototype.onRead = function onRead(key) {
    return this.props.element.getAttribute(key);
  };

  return SVGPathRenderer;
}(_2.default);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanMiXSwibmFtZXMiOlsiZWxlbWVudCIsInByb3BzIiwiU1ZHUGF0aFJlbmRlcmVyIiwiZ2V0QkJveCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJlbGVtZW50RGltZW5zaW9ucyIsInBhdGhMZW5ndGgiLCJnZXRUb3RhbExlbmd0aCIsIm9uUmVuZGVyIiwic3RhdGUiLCJvblJlYWQiLCJrZXkiLCJnZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkE2QmUsVUFBVUEsT0FBVixFQUFtQkMsS0FBbkIsRUFBMEI7QUFDdkMsU0FBTyxJQUFJQyxlQUFKO0FBQ0xGO0FBREssS0FFRkMsS0FGRSxFQUFQO0FBSUQsQzs7QUFsQ0Q7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1DLGU7OztBQUNKLDJCQUFZRCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLHFCQUFNQSxLQUFOLENBRGlCOztBQUFBLGdDQUdlQSxNQUFNRCxPQUFOLENBQWNHLE9BQWQsRUFIZjtBQUFBLFFBR1RDLENBSFMseUJBR1RBLENBSFM7QUFBQSxRQUdOQyxDQUhNLHlCQUdOQSxDQUhNO0FBQUEsUUFHSEMsS0FIRyx5QkFHSEEsS0FIRztBQUFBLFFBR0lDLE1BSEoseUJBR0lBLE1BSEo7O0FBSWpCLFVBQUtDLGlCQUFMLEdBQXlCO0FBQ3ZCSixVQUR1QjtBQUV2QkMsVUFGdUI7QUFHdkJDLGtCQUh1QjtBQUl2QkMsb0JBSnVCO0FBS3ZCRSxrQkFBWVIsTUFBTUQsT0FBTixDQUFjVSxjQUFkO0FBTFcsS0FBekI7QUFKaUI7QUFXbEI7OzRCQUVEQyxRLHVCQUFXO0FBQUEsUUFDREYsVUFEQyxHQUNjLEtBQUtELGlCQURuQixDQUNEQyxVQURDO0FBQUEsUUFFRFQsT0FGQyxHQUVXLEtBQUtDLEtBRmhCLENBRURELE9BRkM7O0FBR1QsNEJBQVlBLE9BQVosRUFBcUIscUJBQU0sS0FBS1ksS0FBWCxFQUFrQkgsVUFBbEIsQ0FBckI7QUFDRCxHOzs0QkFFREksTSxtQkFBT0MsRyxFQUFLO0FBQ1YsV0FBTyxLQUFLYixLQUFMLENBQVdELE9BQVgsQ0FBbUJlLFlBQW5CLENBQWdDRCxHQUFoQyxDQUFQO0FBQ0QsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZW5kZXJlciBmcm9tICcuLi8nO1xuaW1wb3J0IGJ1aWxkIGZyb20gJy4vYnVpbGQnO1xuaW1wb3J0IHsgc2V0RE9NQXR0cnMgfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuXG5jbGFzcyBTVkdQYXRoUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKTtcbiAgICB0aGlzLmVsZW1lbnREaW1lbnNpb25zID0ge1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhdGhMZW5ndGg6IHByb3BzLmVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKVxuICAgIH07XG4gIH1cblxuICBvblJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBhdGhMZW5ndGggfSA9IHRoaXMuZWxlbWVudERpbWVuc2lvbnM7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIHNldERPTUF0dHJzKGVsZW1lbnQsIGJ1aWxkKHRoaXMuc3RhdGUsIHBhdGhMZW5ndGgpKTtcbiAgfVxuXG4gIG9uUmVhZChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5lbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1BhdGhSZW5kZXJlcih7XG4gICAgZWxlbWVudCxcbiAgICAuLi5wcm9wc1xuICB9KTtcbn1cbiJdfQ==

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/*
  Convert percentage to pixels

  @param [number]: Percentage of total length
  @param [number]: Total length
*/
var percentToPixels = function percentToPixels(percent, length) {
  return parseFloat(percent) / 100 * length + 'px';
};

exports.default = function (state, length) {
  var styles = {};
  var dashArrayStyles = {
    length: '0',
    spacing: length + 'px'
  };
  var hasDashArray = false;

  for (var key in state) {
    if (state.hasOwnProperty(key)) {
      var value = state[key];

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
    }
  }

  if (hasDashArray) {
    styles['stroke-dasharray'] = dashArrayStyles.length + ' ' + dashArrayStyles.spacing;
  }

  return styles;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvYnVpbGQuanMiXSwibmFtZXMiOlsicGVyY2VudFRvUGl4ZWxzIiwicGVyY2VudCIsImxlbmd0aCIsInBhcnNlRmxvYXQiLCJzdGF0ZSIsInN0eWxlcyIsImRhc2hBcnJheVN0eWxlcyIsInNwYWNpbmciLCJoYXNEYXNoQXJyYXkiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7O0FBTUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxPQUFELEVBQVVDLE1BQVY7QUFBQSxTQUFzQkMsV0FBV0YsT0FBWCxJQUFzQixHQUF2QixHQUE4QkMsTUFBOUIsR0FBdUMsSUFBNUQ7QUFBQSxDQUF4Qjs7a0JBRWUsVUFBQ0UsS0FBRCxFQUFRRixNQUFSLEVBQW1CO0FBQ2hDLE1BQU1HLFNBQVMsRUFBZjtBQUNBLE1BQU1DLGtCQUFrQjtBQUN0QkosWUFBUSxHQURjO0FBRXRCSyxhQUFTTCxTQUFTO0FBRkksR0FBeEI7QUFJQSxNQUFJTSxlQUFlLEtBQW5COztBQUVBLE9BQUssSUFBSUMsR0FBVCxJQUFnQkwsS0FBaEIsRUFBdUI7QUFDckIsUUFBSUEsTUFBTU0sY0FBTixDQUFxQkQsR0FBckIsQ0FBSixFQUErQjtBQUM3QixVQUFNRSxRQUFRUCxNQUFNSyxHQUFOLENBQWQ7O0FBRUEsY0FBUUEsR0FBUjtBQUNBLGFBQUssUUFBTDtBQUNBLGFBQUssU0FBTDtBQUNFRCx5QkFBZSxJQUFmO0FBQ0FGLDBCQUFnQkcsR0FBaEIsSUFBdUJULGdCQUFnQlcsS0FBaEIsRUFBdUJULE1BQXZCLENBQXZCO0FBQ0E7QUFDRixhQUFLLFFBQUw7QUFDRUcsaUJBQU8sbUJBQVAsSUFBOEJMLGdCQUFnQixDQUFDVyxLQUFqQixFQUF3QlQsTUFBeEIsQ0FBOUI7QUFDQTtBQUNGO0FBQ0VHLGlCQUFPSSxHQUFQLElBQWNFLEtBQWQ7QUFWRjtBQVlEO0FBQ0Y7O0FBRUQsTUFBSUgsWUFBSixFQUFrQjtBQUNoQkgsV0FBTyxrQkFBUCxJQUE2QkMsZ0JBQWdCSixNQUFoQixHQUF5QixHQUF6QixHQUErQkksZ0JBQWdCQyxPQUE1RTtBQUNEOztBQUVELFNBQU9GLE1BQVA7QUFDRCxDIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG5jb25zdCBwZXJjZW50VG9QaXhlbHMgPSAocGVyY2VudCwgbGVuZ3RoKSA9PiAocGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCkgKiBsZW5ndGggKyAncHgnO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGxlbmd0aCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB7fTtcbiAgY29uc3QgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgIGxlbmd0aDogJzAnLFxuICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgfTtcbiAgbGV0IGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufTtcbiJdfQ==

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _popmotion = __webpack_require__(9);

var popmotion = _interopRequireWildcard(_popmotion);

var _src = __webpack_require__(38);

var _src2 = _interopRequireDefault(_src);

var _src3 = __webpack_require__(39);

var _src4 = _interopRequireDefault(_src3);

var _src5 = __webpack_require__(40);

var _src6 = _interopRequireDefault(_src5);

var _src7 = __webpack_require__(41);

var _src8 = _interopRequireDefault(_src7);

var _src9 = __webpack_require__(42);

var _src10 = _interopRequireDefault(_src9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

window.popmotionXL = _extends({}, popmotion, {
  draggable: _src2.default,
  inertia: _src4.default,
  scroll: _src6.default,
  spinnable: _src8.default,
  timeline: _src10.default
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwteGwuanMiXSwibmFtZXMiOlsicG9wbW90aW9uIiwid2luZG93IiwicG9wbW90aW9uWEwiLCJkcmFnZ2FibGUiLCJpbmVydGlhIiwic2Nyb2xsIiwic3Bpbm5hYmxlIiwidGltZWxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7SUFBWUEsUzs7QUFDWjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBQyxPQUFPQyxXQUFQLGdCQUNLRixTQURMO0FBRUVHLDBCQUZGO0FBR0VDLHdCQUhGO0FBSUVDLHVCQUpGO0FBS0VDLDBCQUxGO0FBTUVDO0FBTkYiLCJmaWxlIjoiZ2xvYmFsLXhsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcG9wbW90aW9uIGZyb20gJy4vcG9wbW90aW9uJztcbmltcG9ydCBkcmFnZ2FibGUgZnJvbSAnLi4vcGFja2FnZXMvcG9wbW90aW9uLWRyYWdnYWJsZS9zcmMnO1xuaW1wb3J0IGluZXJ0aWEgZnJvbSAnLi4vcGFja2FnZXMvcG9wbW90aW9uLWluZXJ0aWEvc3JjJztcbmltcG9ydCBzY3JvbGwgZnJvbSAnLi4vcGFja2FnZXMvcG9wbW90aW9uLXNjcm9sbC9zcmMnO1xuaW1wb3J0IHNwaW5uYWJsZSBmcm9tICcuLi9wYWNrYWdlcy9wb3Btb3Rpb24tc3Bpbm5hYmxlL3NyYyc7XG5pbXBvcnQgdGltZWxpbmUgZnJvbSAnLi4vcGFja2FnZXMvcG9wbW90aW9uLXRpbWVsaW5lL3NyYyc7XG5cbndpbmRvdy5wb3Btb3Rpb25YTCA9IHtcbiAgLi4ucG9wbW90aW9uLFxuICBkcmFnZ2FibGUsXG4gIGluZXJ0aWEsXG4gIHNjcm9sbCxcbiAgc3Bpbm5hYmxlLFxuICB0aW1lbGluZVxufTtcbiJdfQ==

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = draggable;

var _popmotion = __webpack_require__(9);

function draggable(node) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$x = _ref.x,
      x = _ref$x === undefined ? true : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? true : _ref$y,
      _ref$initialX = _ref.initialX,
      initialX = _ref$initialX === undefined ? 0 : _ref$initialX,
      _ref$initialY = _ref.initialY,
      initialY = _ref$initialY === undefined ? 0 : _ref$initialY,
      onDrag = _ref.onDrag,
      onDragStart = _ref.onDragStart,
      onDragStop = _ref.onDragStop;

  var nodeRenderer = (0, _popmotion.css)(node);
  var values = {};
  if (x) values.x = (0, _popmotion.value)(initialX, function (v) {
    return nodeRenderer.set('x', v);
  });
  if (y) values.y = (0, _popmotion.value)(initialY, function (v) {
    return nodeRenderer.set('y', v);
  });

  var nodeXY = (0, _popmotion.composite)(values, {
    onUpdate: onDrag
  });

  function startTracking(e) {
    var pointerTracker = (0, _popmotion.pointer)(e).start();

    if (x) {
      (0, _popmotion.trackOffset)(pointerTracker.x, {
        from: nodeXY.x.get(),
        onUpdate: nodeXY.x
      }).start();
    }

    if (y) {
      (0, _popmotion.trackOffset)(pointerTracker.y, {
        from: nodeXY.y.get(),
        onUpdate: nodeXY.y,
        onStop: function onStop() {
          return pointerTracker.stop();
        }
      }).start();
    }

    if (onDragStart) onDragStart(nodeXY);
  }

  function stopTracking() {
    nodeXY.stop();

    if (onDragStop) onDragStop(nodeXY);
  }

  node.addEventListener('mousedown', startTracking);
  node.addEventListener('touchstart', startTracking, { passive: false });
  document.addEventListener('mouseup', stopTracking);
  document.addEventListener('touchend', stopTracking);

  return nodeXY;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BvcG1vdGlvbi1kcmFnZ2FibGUvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRyYWdnYWJsZSIsIm5vZGUiLCJ4IiwieSIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJvbkRyYWciLCJvbkRyYWdTdGFydCIsIm9uRHJhZ1N0b3AiLCJub2RlUmVuZGVyZXIiLCJ2YWx1ZXMiLCJ2Iiwic2V0Iiwibm9kZVhZIiwib25VcGRhdGUiLCJzdGFydFRyYWNraW5nIiwiZSIsInBvaW50ZXJUcmFja2VyIiwic3RhcnQiLCJmcm9tIiwiZ2V0Iiwib25TdG9wIiwic3RvcCIsInN0b3BUcmFja2luZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7OztrQkFFd0JBLFM7O0FBRnhCOztBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLElBQW5CLEVBUVA7QUFBQSxpRkFBSixFQUFJO0FBQUEsb0JBUE5DLENBT007QUFBQSxNQVBOQSxDQU9NLDBCQVBGLElBT0U7QUFBQSxvQkFOTkMsQ0FNTTtBQUFBLE1BTk5BLENBTU0sMEJBTkYsSUFNRTtBQUFBLDJCQUxOQyxRQUtNO0FBQUEsTUFMTkEsUUFLTSxpQ0FMSyxDQUtMO0FBQUEsMkJBSk5DLFFBSU07QUFBQSxNQUpOQSxRQUlNLGlDQUpLLENBSUw7QUFBQSxNQUhOQyxNQUdNLFFBSE5BLE1BR007QUFBQSxNQUZOQyxXQUVNLFFBRk5BLFdBRU07QUFBQSxNQUROQyxVQUNNLFFBRE5BLFVBQ007O0FBQ04sTUFBTUMsZUFBZSxvQkFBSVIsSUFBSixDQUFyQjtBQUNBLE1BQU1TLFNBQVMsRUFBZjtBQUNBLE1BQUlSLENBQUosRUFBT1EsT0FBT1IsQ0FBUCxHQUFXLHNCQUFNRSxRQUFOLEVBQWdCLFVBQUNPLENBQUQ7QUFBQSxXQUFPRixhQUFhRyxHQUFiLENBQWlCLEdBQWpCLEVBQXNCRCxDQUF0QixDQUFQO0FBQUEsR0FBaEIsQ0FBWDtBQUNQLE1BQUlSLENBQUosRUFBT08sT0FBT1AsQ0FBUCxHQUFXLHNCQUFNRSxRQUFOLEVBQWdCLFVBQUNNLENBQUQ7QUFBQSxXQUFPRixhQUFhRyxHQUFiLENBQWlCLEdBQWpCLEVBQXNCRCxDQUF0QixDQUFQO0FBQUEsR0FBaEIsQ0FBWDs7QUFFUCxNQUFNRSxTQUFTLDBCQUFVSCxNQUFWLEVBQWtCO0FBQy9CSSxjQUFVUjtBQURxQixHQUFsQixDQUFmOztBQUlBLFdBQVNTLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBCO0FBQ3hCLFFBQU1DLGlCQUFpQix3QkFBUUQsQ0FBUixFQUFXRSxLQUFYLEVBQXZCOztBQUVBLFFBQUloQixDQUFKLEVBQU87QUFDTCxrQ0FBWWUsZUFBZWYsQ0FBM0IsRUFBOEI7QUFDNUJpQixjQUFNTixPQUFPWCxDQUFQLENBQVNrQixHQUFULEVBRHNCO0FBRTVCTixrQkFBVUQsT0FBT1g7QUFGVyxPQUE5QixFQUdHZ0IsS0FISDtBQUlEOztBQUVELFFBQUlmLENBQUosRUFBTztBQUNMLGtDQUFZYyxlQUFlZCxDQUEzQixFQUE4QjtBQUM1QmdCLGNBQU1OLE9BQU9WLENBQVAsQ0FBU2lCLEdBQVQsRUFEc0I7QUFFNUJOLGtCQUFVRCxPQUFPVixDQUZXO0FBRzVCa0IsZ0JBQVE7QUFBQSxpQkFBTUosZUFBZUssSUFBZixFQUFOO0FBQUE7QUFIb0IsT0FBOUIsRUFJR0osS0FKSDtBQUtEOztBQUVELFFBQUlYLFdBQUosRUFBaUJBLFlBQVlNLE1BQVo7QUFDbEI7O0FBRUQsV0FBU1UsWUFBVCxHQUF3QjtBQUN0QlYsV0FBT1MsSUFBUDs7QUFFQSxRQUFJZCxVQUFKLEVBQWdCQSxXQUFXSyxNQUFYO0FBQ2pCOztBQUVEWixPQUFLdUIsZ0JBQUwsQ0FBc0IsV0FBdEIsRUFBbUNULGFBQW5DO0FBQ0FkLE9BQUt1QixnQkFBTCxDQUFzQixZQUF0QixFQUFvQ1QsYUFBcEMsRUFBbUQsRUFBRVUsU0FBUyxLQUFYLEVBQW5EO0FBQ0FDLFdBQVNGLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDRCxZQUFyQztBQUNBRyxXQUFTRixnQkFBVCxDQUEwQixVQUExQixFQUFzQ0QsWUFBdEM7O0FBRUEsU0FBT1YsTUFBUDtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcG9zaXRlLCB2YWx1ZSwgY3NzLCBwb2ludGVyLCB0cmFja09mZnNldCB9IGZyb20gJ3BvcG1vdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYWdnYWJsZShub2RlLCB7XG4gIHggPSB0cnVlLFxuICB5ID0gdHJ1ZSxcbiAgaW5pdGlhbFggPSAwLFxuICBpbml0aWFsWSA9IDAsXG4gIG9uRHJhZyxcbiAgb25EcmFnU3RhcnQsXG4gIG9uRHJhZ1N0b3Bcbn0gPSB7fSkge1xuICBjb25zdCBub2RlUmVuZGVyZXIgPSBjc3Mobm9kZSk7XG4gIGNvbnN0IHZhbHVlcyA9IHt9O1xuICBpZiAoeCkgdmFsdWVzLnggPSB2YWx1ZShpbml0aWFsWCwgKHYpID0+IG5vZGVSZW5kZXJlci5zZXQoJ3gnLCB2KSk7XG4gIGlmICh5KSB2YWx1ZXMueSA9IHZhbHVlKGluaXRpYWxZLCAodikgPT4gbm9kZVJlbmRlcmVyLnNldCgneScsIHYpKTtcblxuICBjb25zdCBub2RlWFkgPSBjb21wb3NpdGUodmFsdWVzLCB7XG4gICAgb25VcGRhdGU6IG9uRHJhZ1xuICB9KTtcblxuICBmdW5jdGlvbiBzdGFydFRyYWNraW5nKGUpIHtcbiAgICBjb25zdCBwb2ludGVyVHJhY2tlciA9IHBvaW50ZXIoZSkuc3RhcnQoKTtcblxuICAgIGlmICh4KSB7XG4gICAgICB0cmFja09mZnNldChwb2ludGVyVHJhY2tlci54LCB7XG4gICAgICAgIGZyb206IG5vZGVYWS54LmdldCgpLFxuICAgICAgICBvblVwZGF0ZTogbm9kZVhZLnhcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgaWYgKHkpIHtcbiAgICAgIHRyYWNrT2Zmc2V0KHBvaW50ZXJUcmFja2VyLnksIHtcbiAgICAgICAgZnJvbTogbm9kZVhZLnkuZ2V0KCksXG4gICAgICAgIG9uVXBkYXRlOiBub2RlWFkueSxcbiAgICAgICAgb25TdG9wOiAoKSA9PiBwb2ludGVyVHJhY2tlci5zdG9wKClcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgaWYgKG9uRHJhZ1N0YXJ0KSBvbkRyYWdTdGFydChub2RlWFkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RvcFRyYWNraW5nKCkge1xuICAgIG5vZGVYWS5zdG9wKCk7XG5cbiAgICBpZiAob25EcmFnU3RvcCkgb25EcmFnU3RvcChub2RlWFkpO1xuICB9XG5cbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzdGFydFRyYWNraW5nKTtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc3RhcnRUcmFja2luZywgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BUcmFja2luZyk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgc3RvcFRyYWNraW5nKTtcblxuICByZXR1cm4gbm9kZVhZO1xufVxuIl19

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _popmotion = __webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Implementation of https://ariya.io/2013/11/javascript-kinetic-scrolling-part-2


var Inertia = function (_Action) {
  _inherits(Inertia, _Action);

  function Inertia() {
    _classCallCheck(this, Inertia);

    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
  }

  Inertia.prototype.onStart = function onStart() {
    var _props = this.props,
        velocity = _props.velocity,
        power = _props.power,
        modifyTarget = _props.modifyTarget;


    this.amplitude = power * velocity;
    this.target = Math.round(this.current + this.amplitude);
    this.elapsed = 0;

    if (modifyTarget) {
      this.target = modifyTarget(this.target);
    }
  };

  Inertia.prototype.update = function update() {
    var _props2 = this.props,
        autoStopDelta = _props2.autoStopDelta,
        timeConstant = _props2.timeConstant;


    this.elapsed += (0, _popmotion.timeSinceLastFrame)();
    var delta = -this.amplitude * Math.exp(-this.elapsed / timeConstant);
    var isMoving = delta > autoStopDelta || delta < -autoStopDelta;
    if (!isMoving) this.isComplete = true;
    return isMoving ? this.target + delta : this.target;
  };

  Inertia.prototype.isActionComplete = function isActionComplete() {
    return this.isComplete;
  };

  return Inertia;
}(_popmotion.Action);

Inertia.defaultProps = {
  velocity: 0,
  from: 0,
  power: 0.8,
  timeConstant: 350,
  autoStopDelta: 0.5
};

exports.default = function (props) {
  return new Inertia(props);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BvcG1vdGlvbi1pbmVydGlhL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmVydGlhIiwib25TdGFydCIsInByb3BzIiwidmVsb2NpdHkiLCJwb3dlciIsIm1vZGlmeVRhcmdldCIsImFtcGxpdHVkZSIsInRhcmdldCIsIk1hdGgiLCJyb3VuZCIsImN1cnJlbnQiLCJlbGFwc2VkIiwidXBkYXRlIiwiYXV0b1N0b3BEZWx0YSIsInRpbWVDb25zdGFudCIsImRlbHRhIiwiZXhwIiwiaXNNb3ZpbmciLCJpc0NvbXBsZXRlIiwiaXNBY3Rpb25Db21wbGV0ZSIsImRlZmF1bHRQcm9wcyIsImZyb20iXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7Ozs7OytlQURBOzs7SUFHTUEsTzs7Ozs7Ozs7O29CQVNKQyxPLHNCQUFVO0FBQUEsaUJBQ2tDLEtBQUtDLEtBRHZDO0FBQUEsUUFDQUMsUUFEQSxVQUNBQSxRQURBO0FBQUEsUUFDVUMsS0FEVixVQUNVQSxLQURWO0FBQUEsUUFDaUJDLFlBRGpCLFVBQ2lCQSxZQURqQjs7O0FBR1IsU0FBS0MsU0FBTCxHQUFpQkYsUUFBUUQsUUFBekI7QUFDQSxTQUFLSSxNQUFMLEdBQWNDLEtBQUtDLEtBQUwsQ0FBVyxLQUFLQyxPQUFMLEdBQWUsS0FBS0osU0FBL0IsQ0FBZDtBQUNBLFNBQUtLLE9BQUwsR0FBZSxDQUFmOztBQUVBLFFBQUlOLFlBQUosRUFBa0I7QUFDaEIsV0FBS0UsTUFBTCxHQUFjRixhQUFhLEtBQUtFLE1BQWxCLENBQWQ7QUFDRDtBQUNGLEc7O29CQUVESyxNLHFCQUFTO0FBQUEsa0JBQ2lDLEtBQUtWLEtBRHRDO0FBQUEsUUFDQ1csYUFERCxXQUNDQSxhQUREO0FBQUEsUUFDZ0JDLFlBRGhCLFdBQ2dCQSxZQURoQjs7O0FBR1AsU0FBS0gsT0FBTCxJQUFnQixvQ0FBaEI7QUFDQSxRQUFNSSxRQUFRLENBQUMsS0FBS1QsU0FBTixHQUFrQkUsS0FBS1EsR0FBTCxDQUFTLENBQUMsS0FBS0wsT0FBTixHQUFnQkcsWUFBekIsQ0FBaEM7QUFDQSxRQUFNRyxXQUFZRixRQUFRRixhQUFSLElBQXlCRSxRQUFRLENBQUNGLGFBQXBEO0FBQ0EsUUFBSSxDQUFDSSxRQUFMLEVBQWUsS0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNmLFdBQU9ELFdBQVcsS0FBS1YsTUFBTCxHQUFjUSxLQUF6QixHQUFpQyxLQUFLUixNQUE3QztBQUNELEc7O29CQUVEWSxnQiwrQkFBbUI7QUFDakIsV0FBTyxLQUFLRCxVQUFaO0FBQ0QsRzs7Ozs7QUFqQ0dsQixPLENBQ0dvQixZLEdBQWU7QUFDcEJqQixZQUFVLENBRFU7QUFFcEJrQixRQUFNLENBRmM7QUFHcEJqQixTQUFPLEdBSGE7QUFJcEJVLGdCQUFjLEdBSk07QUFLcEJELGlCQUFlO0FBTEssQzs7a0JBbUNULFVBQUNYLEtBQUQ7QUFBQSxTQUFXLElBQUlGLE9BQUosQ0FBWUUsS0FBWixDQUFYO0FBQUEsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcGxlbWVudGF0aW9uIG9mIGh0dHBzOi8vYXJpeWEuaW8vMjAxMy8xMS9qYXZhc2NyaXB0LWtpbmV0aWMtc2Nyb2xsaW5nLXBhcnQtMlxuaW1wb3J0IHsgQWN0aW9uLCB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICdwb3Btb3Rpb24nO1xuXG5jbGFzcyBJbmVydGlhIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2ZWxvY2l0eTogMCxcbiAgICBmcm9tOiAwLFxuICAgIHBvd2VyOiAwLjgsXG4gICAgdGltZUNvbnN0YW50OiAzNTAsXG4gICAgYXV0b1N0b3BEZWx0YTogMC41XG4gIH07XG5cbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IHZlbG9jaXR5LCBwb3dlciwgbW9kaWZ5VGFyZ2V0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5hbXBsaXR1ZGUgPSBwb3dlciAqIHZlbG9jaXR5O1xuICAgIHRoaXMudGFyZ2V0ID0gTWF0aC5yb3VuZCh0aGlzLmN1cnJlbnQgKyB0aGlzLmFtcGxpdHVkZSk7XG4gICAgdGhpcy5lbGFwc2VkID0gMDtcblxuICAgIGlmIChtb2RpZnlUYXJnZXQpIHtcbiAgICAgIHRoaXMudGFyZ2V0ID0gbW9kaWZ5VGFyZ2V0KHRoaXMudGFyZ2V0KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeyBhdXRvU3RvcERlbHRhLCB0aW1lQ29uc3RhbnQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLmVsYXBzZWQgKz0gdGltZVNpbmNlTGFzdEZyYW1lKCk7XG4gICAgY29uc3QgZGVsdGEgPSAtdGhpcy5hbXBsaXR1ZGUgKiBNYXRoLmV4cCgtdGhpcy5lbGFwc2VkIC8gdGltZUNvbnN0YW50KTtcbiAgICBjb25zdCBpc01vdmluZyA9IChkZWx0YSA+IGF1dG9TdG9wRGVsdGEgfHwgZGVsdGEgPCAtYXV0b1N0b3BEZWx0YSk7XG4gICAgaWYgKCFpc01vdmluZykgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICByZXR1cm4gaXNNb3ZpbmcgPyB0aGlzLnRhcmdldCArIGRlbHRhIDogdGhpcy50YXJnZXQ7XG4gIH1cblxuICBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgSW5lcnRpYShwcm9wcyk7XG4iXX0=

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _popmotion = __webpack_require__(9);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollRenderer = function (_Renderer) {
  _inherits(ScrollRenderer, _Renderer);

  function ScrollRenderer() {
    _classCallCheck(this, ScrollRenderer);

    return _possibleConstructorReturn(this, _Renderer.apply(this, arguments));
  }

  ScrollRenderer.prototype.get = function get(key) {
    // Break the cache as scroll can be updated by the user
    this.state[key] = undefined;
    return _Renderer.prototype.get.call(this, key);
  };

  return ScrollRenderer;
}(_popmotion.Renderer);

var ElementScroll = function (_ScrollRenderer) {
  _inherits(ElementScroll, _ScrollRenderer);

  function ElementScroll() {
    _classCallCheck(this, ElementScroll);

    return _possibleConstructorReturn(this, _ScrollRenderer.apply(this, arguments));
  }

  ElementScroll.prototype.onRender = function onRender() {
    var element = this.props.element;
    var _state = this.state,
        top = _state.top,
        left = _state.left;

    element.scrollLeft = left;
    element.scrollTop = top;
  };

  ElementScroll.prototype.onRead = function onRead() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'top';
    var element = this.props.element;

    return key === 'top' ? element.scrollTop : element.scrollLeft;
  };

  return ElementScroll;
}(ScrollRenderer);

var ViewportScroll = function (_ScrollRenderer2) {
  _inherits(ViewportScroll, _ScrollRenderer2);

  function ViewportScroll() {
    _classCallCheck(this, ViewportScroll);

    return _possibleConstructorReturn(this, _ScrollRenderer2.apply(this, arguments));
  }

  ViewportScroll.prototype.onRender = function onRender() {
    var _state2 = this.state,
        top = _state2.top,
        left = _state2.left;

    if (typeof window !== undefined) window.scrollTo(left, top);
  };

  ViewportScroll.prototype.onRead = function onRead(key) {
    if (typeof window === undefined) return 0;
    return key === 'top' ? window.pageYOffset : window.pageXOffset;
  };

  return ViewportScroll;
}(ScrollRenderer);

exports.default = function (element) {
  return element ? new ElementScroll({ element: element }) : new ViewportScroll();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BvcG1vdGlvbi1zY3JvbGwvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNjcm9sbFJlbmRlcmVyIiwiZ2V0Iiwia2V5Iiwic3RhdGUiLCJ1bmRlZmluZWQiLCJFbGVtZW50U2Nyb2xsIiwib25SZW5kZXIiLCJlbGVtZW50IiwicHJvcHMiLCJ0b3AiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsIm9uUmVhZCIsIlZpZXdwb3J0U2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsVG8iLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7O0lBRU1BLGM7Ozs7Ozs7OzsyQkFDSkMsRyxnQkFBSUMsRyxFQUFLO0FBQ1A7QUFDQSxTQUFLQyxLQUFMLENBQVdELEdBQVgsSUFBa0JFLFNBQWxCO0FBQ0EsV0FBTyxvQkFBTUgsR0FBTixZQUFVQyxHQUFWLENBQVA7QUFDRCxHOzs7OztJQUdHRyxhOzs7Ozs7Ozs7MEJBQ0pDLFEsdUJBQVc7QUFBQSxRQUNEQyxPQURDLEdBQ1csS0FBS0MsS0FEaEIsQ0FDREQsT0FEQztBQUFBLGlCQUVhLEtBQUtKLEtBRmxCO0FBQUEsUUFFRE0sR0FGQyxVQUVEQSxHQUZDO0FBQUEsUUFFSUMsSUFGSixVQUVJQSxJQUZKOztBQUdUSCxZQUFRSSxVQUFSLEdBQXFCRCxJQUFyQjtBQUNBSCxZQUFRSyxTQUFSLEdBQW9CSCxHQUFwQjtBQUNELEc7OzBCQUVESSxNLHFCQUFvQjtBQUFBLFFBQWJYLEdBQWEsdUVBQVAsS0FBTztBQUFBLFFBQ1ZLLE9BRFUsR0FDRSxLQUFLQyxLQURQLENBQ1ZELE9BRFU7O0FBRWxCLFdBQVFMLFFBQVEsS0FBVCxHQUFrQkssUUFBUUssU0FBMUIsR0FBc0NMLFFBQVFJLFVBQXJEO0FBQ0QsRzs7O0VBWHlCWCxjOztJQWN0QmMsYzs7Ozs7Ozs7OzJCQUNKUixRLHVCQUFXO0FBQUEsa0JBQ2EsS0FBS0gsS0FEbEI7QUFBQSxRQUNETSxHQURDLFdBQ0RBLEdBREM7QUFBQSxRQUNJQyxJQURKLFdBQ0lBLElBREo7O0FBRVQsUUFBSSxPQUFPSyxNQUFQLEtBQWtCWCxTQUF0QixFQUFpQ1csT0FBT0MsUUFBUCxDQUFnQk4sSUFBaEIsRUFBc0JELEdBQXRCO0FBQ2xDLEc7OzJCQUVESSxNLG1CQUFPWCxHLEVBQUs7QUFDVixRQUFJLE9BQU9hLE1BQVAsS0FBa0JYLFNBQXRCLEVBQWlDLE9BQU8sQ0FBUDtBQUNqQyxXQUFRRixRQUFRLEtBQVQsR0FBa0JhLE9BQU9FLFdBQXpCLEdBQXVDRixPQUFPRyxXQUFyRDtBQUNELEc7OztFQVQwQmxCLGM7O2tCQVlkLFVBQUNPLE9BQUQ7QUFBQSxTQUFhQSxVQUFVLElBQUlGLGFBQUosQ0FBa0IsRUFBRUUsZ0JBQUYsRUFBbEIsQ0FBVixHQUEyQyxJQUFJTyxjQUFKLEVBQXhEO0FBQUEsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAncG9wbW90aW9uJztcblxuY2xhc3MgU2Nyb2xsUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldChrZXkpIHtcbiAgICAvLyBCcmVhayB0aGUgY2FjaGUgYXMgc2Nyb2xsIGNhbiBiZSB1cGRhdGVkIGJ5IHRoZSB1c2VyXG4gICAgdGhpcy5zdGF0ZVtrZXldID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdXBlci5nZXQoa2V5KTtcbiAgfVxufVxuXG5jbGFzcyBFbGVtZW50U2Nyb2xsIGV4dGVuZHMgU2Nyb2xsUmVuZGVyZXIge1xuICBvblJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCA9IHRvcDtcbiAgfVxuXG4gIG9uUmVhZChrZXkgPSAndG9wJykge1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKGtleSA9PT0gJ3RvcCcpID8gZWxlbWVudC5zY3JvbGxUb3AgOiBlbGVtZW50LnNjcm9sbExlZnQ7XG4gIH1cbn1cblxuY2xhc3MgVmlld3BvcnRTY3JvbGwgZXh0ZW5kcyBTY3JvbGxSZW5kZXJlciB7XG4gIG9uUmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQpIHdpbmRvdy5zY3JvbGxUbyhsZWZ0LCB0b3ApO1xuICB9XG5cbiAgb25SZWFkKGtleSkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSB1bmRlZmluZWQpIHJldHVybiAwO1xuICAgIHJldHVybiAoa2V5ID09PSAndG9wJykgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IGVsZW1lbnQgPyBuZXcgRWxlbWVudFNjcm9sbCh7IGVsZW1lbnQgfSkgOiBuZXcgVmlld3BvcnRTY3JvbGwoKTtcbiJdfQ==

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = spinnable;

var _popmotion = __webpack_require__(9);

var angle = _popmotion.calc.angle;
function spinnable(node, _ref) {
  var _ref$initialRotation = _ref.initialRotation,
      initialRotation = _ref$initialRotation === undefined ? 0 : _ref$initialRotation,
      _ref$friction = _ref.friction,
      friction = _ref$friction === undefined ? 0.4 : _ref$friction,
      transformSpin = _ref.transformSpin,
      onSpin = _ref.onSpin;

  var renderer = (0, _popmotion.css)(node);
  var nodeRotation = (0, _popmotion.value)(initialRotation, function (v) {
    var current = transformSpin ? transformSpin(v) : v;
    if (onSpin) onSpin(current);
    renderer.set('rotate', current);
  });

  function startTracking(e) {
    e.preventDefault();
    var pointerAngle = (0, _popmotion.pointer)(e, {
      transform: function transform(v) {
        var nodePos = node.getBoundingClientRect();
        var nodeCenter = {
          x: nodePos.left + nodePos.width / 2,
          y: nodePos.top + nodePos.height / 2
        };
        var angleFromCenter = angle(nodeCenter, v);

        return angleFromCenter;
      }
    }).start();

    (0, _popmotion.trackOffset)(pointerAngle, {
      from: nodeRotation.get(),
      onUpdate: nodeRotation,
      onStop: function onStop() {
        return pointerAngle.stop();
      }
    }).start();
  }

  function stopTracking() {
    (0, _popmotion.physics)({
      from: nodeRotation.get(),
      velocity: nodeRotation.getVelocity(),
      friction: friction,
      onUpdate: nodeRotation
    }).start();
  }

  node.addEventListener('mousedown', startTracking);
  node.addEventListener('touchstart', startTracking, { passive: false });
  document.addEventListener('mouseup', stopTracking);
  document.addEventListener('touchend', stopTracking);

  return nodeRotation;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BvcG1vdGlvbi1zcGlubmFibGUvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInNwaW5uYWJsZSIsImFuZ2xlIiwibm9kZSIsImluaXRpYWxSb3RhdGlvbiIsImZyaWN0aW9uIiwidHJhbnNmb3JtU3BpbiIsIm9uU3BpbiIsInJlbmRlcmVyIiwibm9kZVJvdGF0aW9uIiwidiIsImN1cnJlbnQiLCJzZXQiLCJzdGFydFRyYWNraW5nIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9pbnRlckFuZ2xlIiwidHJhbnNmb3JtIiwibm9kZVBvcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm5vZGVDZW50ZXIiLCJ4IiwibGVmdCIsIndpZHRoIiwieSIsInRvcCIsImhlaWdodCIsImFuZ2xlRnJvbUNlbnRlciIsInN0YXJ0IiwiZnJvbSIsImdldCIsIm9uVXBkYXRlIiwib25TdG9wIiwic3RvcCIsInN0b3BUcmFja2luZyIsInZlbG9jaXR5IiwiZ2V0VmVsb2NpdHkiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsImRvY3VtZW50Il0sIm1hcHBpbmdzIjoiOzs7a0JBVXdCQSxTOztBQVZ4Qjs7SUFRUUMsSyxtQkFBQUEsSztBQUVPLFNBQVNELFNBQVQsQ0FBbUJFLElBQW5CLFFBS1o7QUFBQSxrQ0FKREMsZUFJQztBQUFBLE1BSkRBLGVBSUMsd0NBSmlCLENBSWpCO0FBQUEsMkJBSERDLFFBR0M7QUFBQSxNQUhEQSxRQUdDLGlDQUhVLEdBR1Y7QUFBQSxNQUZEQyxhQUVDLFFBRkRBLGFBRUM7QUFBQSxNQUREQyxNQUNDLFFBRERBLE1BQ0M7O0FBQ0QsTUFBTUMsV0FBVyxvQkFBSUwsSUFBSixDQUFqQjtBQUNBLE1BQU1NLGVBQWUsc0JBQU1MLGVBQU4sRUFBdUIsVUFBQ00sQ0FBRCxFQUFPO0FBQ2pELFFBQU1DLFVBQVVMLGdCQUFnQkEsY0FBY0ksQ0FBZCxDQUFoQixHQUFtQ0EsQ0FBbkQ7QUFDQSxRQUFJSCxNQUFKLEVBQVlBLE9BQU9JLE9BQVA7QUFDWkgsYUFBU0ksR0FBVCxDQUFhLFFBQWIsRUFBdUJELE9BQXZCO0FBQ0QsR0FKb0IsQ0FBckI7O0FBTUEsV0FBU0UsYUFBVCxDQUF1QkMsQ0FBdkIsRUFBMEI7QUFDeEJBLE1BQUVDLGNBQUY7QUFDQSxRQUFNQyxlQUFlLHdCQUFRRixDQUFSLEVBQVc7QUFDOUJHLGlCQUFXLG1CQUFDUCxDQUFELEVBQU87QUFDaEIsWUFBTVEsVUFBVWYsS0FBS2dCLHFCQUFMLEVBQWhCO0FBQ0EsWUFBTUMsYUFBYTtBQUNqQkMsYUFBR0gsUUFBUUksSUFBUixHQUFnQkosUUFBUUssS0FBUixHQUFnQixDQURsQjtBQUVqQkMsYUFBR04sUUFBUU8sR0FBUixHQUFlUCxRQUFRUSxNQUFSLEdBQWlCO0FBRmxCLFNBQW5CO0FBSUEsWUFBTUMsa0JBQWtCekIsTUFBTWtCLFVBQU4sRUFBa0JWLENBQWxCLENBQXhCOztBQUVBLGVBQU9pQixlQUFQO0FBQ0Q7QUFWNkIsS0FBWCxFQVdsQkMsS0FYa0IsRUFBckI7O0FBYUEsZ0NBQVlaLFlBQVosRUFBMEI7QUFDeEJhLFlBQU1wQixhQUFhcUIsR0FBYixFQURrQjtBQUV4QkMsZ0JBQVV0QixZQUZjO0FBR3hCdUIsY0FBUTtBQUFBLGVBQU1oQixhQUFhaUIsSUFBYixFQUFOO0FBQUE7QUFIZ0IsS0FBMUIsRUFJR0wsS0FKSDtBQUtEOztBQUVELFdBQVNNLFlBQVQsR0FBd0I7QUFDdEIsNEJBQVE7QUFDTkwsWUFBTXBCLGFBQWFxQixHQUFiLEVBREE7QUFFTkssZ0JBQVUxQixhQUFhMkIsV0FBYixFQUZKO0FBR04vQix3QkFITTtBQUlOMEIsZ0JBQVV0QjtBQUpKLEtBQVIsRUFLR21CLEtBTEg7QUFNRDs7QUFFRHpCLE9BQUtrQyxnQkFBTCxDQUFzQixXQUF0QixFQUFtQ3hCLGFBQW5DO0FBQ0FWLE9BQUtrQyxnQkFBTCxDQUFzQixZQUF0QixFQUFvQ3hCLGFBQXBDLEVBQW1ELEVBQUV5QixTQUFTLEtBQVgsRUFBbkQ7QUFDQUMsV0FBU0YsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNILFlBQXJDO0FBQ0FLLFdBQVNGLGdCQUFULENBQTBCLFVBQTFCLEVBQXNDSCxZQUF0Qzs7QUFFQSxTQUFPekIsWUFBUDtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgcG9pbnRlcixcbiAgY2FsYyxcbiAgdmFsdWUsXG4gIGNzcyxcbiAgcGh5c2ljcyxcbiAgdHJhY2tPZmZzZXRcbn0gZnJvbSAncG9wbW90aW9uJztcbmNvbnN0IHsgYW5nbGUgfSA9IGNhbGM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwaW5uYWJsZShub2RlLCB7XG4gIGluaXRpYWxSb3RhdGlvbiA9IDAsXG4gIGZyaWN0aW9uID0gMC40LFxuICB0cmFuc2Zvcm1TcGluLFxuICBvblNwaW5cbn0pIHtcbiAgY29uc3QgcmVuZGVyZXIgPSBjc3Mobm9kZSk7XG4gIGNvbnN0IG5vZGVSb3RhdGlvbiA9IHZhbHVlKGluaXRpYWxSb3RhdGlvbiwgKHYpID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gdHJhbnNmb3JtU3BpbiA/IHRyYW5zZm9ybVNwaW4odikgOiB2O1xuICAgIGlmIChvblNwaW4pIG9uU3BpbihjdXJyZW50KTtcbiAgICByZW5kZXJlci5zZXQoJ3JvdGF0ZScsIGN1cnJlbnQpO1xuICB9KTtcblxuICBmdW5jdGlvbiBzdGFydFRyYWNraW5nKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcG9pbnRlckFuZ2xlID0gcG9pbnRlcihlLCB7XG4gICAgICB0cmFuc2Zvcm06ICh2KSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGVQb3MgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBub2RlQ2VudGVyID0ge1xuICAgICAgICAgIHg6IG5vZGVQb3MubGVmdCArIChub2RlUG9zLndpZHRoIC8gMiksXG4gICAgICAgICAgeTogbm9kZVBvcy50b3AgKyAobm9kZVBvcy5oZWlnaHQgLyAyKVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBhbmdsZUZyb21DZW50ZXIgPSBhbmdsZShub2RlQ2VudGVyLCB2KTtcblxuICAgICAgICByZXR1cm4gYW5nbGVGcm9tQ2VudGVyO1xuICAgICAgfVxuICAgIH0pLnN0YXJ0KCk7XG5cbiAgICB0cmFja09mZnNldChwb2ludGVyQW5nbGUsIHtcbiAgICAgIGZyb206IG5vZGVSb3RhdGlvbi5nZXQoKSxcbiAgICAgIG9uVXBkYXRlOiBub2RlUm90YXRpb24sXG4gICAgICBvblN0b3A6ICgpID0+IHBvaW50ZXJBbmdsZS5zdG9wKClcbiAgICB9KS5zdGFydCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RvcFRyYWNraW5nKCkge1xuICAgIHBoeXNpY3Moe1xuICAgICAgZnJvbTogbm9kZVJvdGF0aW9uLmdldCgpLFxuICAgICAgdmVsb2NpdHk6IG5vZGVSb3RhdGlvbi5nZXRWZWxvY2l0eSgpLFxuICAgICAgZnJpY3Rpb24sXG4gICAgICBvblVwZGF0ZTogbm9kZVJvdGF0aW9uXG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuXG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3RhcnRUcmFja2luZyk7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHN0YXJ0VHJhY2tpbmcsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzdG9wVHJhY2tpbmcpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHN0b3BUcmFja2luZyk7XG5cbiAgcmV0dXJuIG5vZGVSb3RhdGlvbjtcbn1cbiJdfQ==

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = timeline;

var _popmotion = __webpack_require__(9);

var getProgressFromValue = _popmotion.calc.getProgressFromValue;
var clamp = _popmotion.transform.clamp;

var clampProgress = clamp(0, 1);

/*
  Flatten arrays, which denote parallel or staggered tweens,
  into a flat set of instructions which reset the playhead
  after each tween.
 */
function flattenArraysToSequence(sequence, segment) {
  if (segment.constructor === Array) {
    var lastArg = segment[segment.length - 1];
    var isStaggered = typeof lastArg === 'number';
    var tweens = isStaggered ? segment.slice(0, -1) : segment;
    var numTweens = tweens.length;
    var offset = 0;

    tweens.forEach(function (item, i) {
      sequence.push(item);

      if (i !== numTweens - 1) {
        var duration = item.getProp('duration');
        offset += isStaggered ? lastArg : 0;
        sequence.push('-' + (duration - offset));
      }
    });
  } else {
    sequence.push(segment);
  }

  return sequence;
}

function timeline(sequence, props) {
  var playhead = 0;
  var duration = 0;

  var markers = sequence.reduce(flattenArraysToSequence, []
  // Convert sequence to relative timings
  ).reduce(function (acc, segment) {
    var typeOfSegment = typeof segment === 'undefined' ? 'undefined' : _typeof(segment);

    // If relative timestamp
    if (typeOfSegment === 'string') {
      playhead += parseFloat(segment);

      // If absolute timestamp
    } else if (typeOfSegment === 'number') {
      playhead = segment;

      // Or if tween, add marker
    } else {
      var to = playhead + segment.getProp('duration');

      acc.push({
        tween: segment,
        from: playhead,
        to: to
      });

      playhead = to;
      duration = Math.max(duration, to);
    }

    return acc;
  }, []
  // Split tweens by target, and convert absolute markers to progress markers
  ).reduce(function (acc, marker) {
    var output = marker.tween.getProp('onUpdate');
    var targetIndex = acc.targets.indexOf(output);

    if (targetIndex === -1) {
      acc.targets.push(output);
      acc.fragments.push([]);
      targetIndex = acc.fragments.length - 1;
    }

    var fragmentList = acc.fragments[targetIndex];

    fragmentList.push({
      tween: marker.tween,
      from: getProgressFromValue(0, duration, marker.from),
      to: getProgressFromValue(0, duration, marker.to)
    });

    if (output.get) {
      acc.initialValues[targetIndex] = output.get();
    }

    return acc;
  }, { initialValues: [], targets: [], fragments: [] });

  var numMarkers = markers.fragments.length;

  return (0, _popmotion.tween)(_extends({
    duration: duration,
    ease: _popmotion.easing.linear
  }, props, {
    onUpdate: function onUpdate(v) {
      // First iterate over output targets, and try to find an active tween
      for (var i = 0; i < numMarkers; i++) {
        var fragments = markers.fragments[i];
        var numFragments = fragments.length;
        var foundActiveFragment = false;
        var prevProgressDistance = Infinity;
        var closestIndex = 0;
        var closestProgress = 0;
        var tweenHasStarted = false;
        var j = 0;

        while (!foundActiveFragment && j < numFragments) {
          var fragment = fragments[j];
          var progress = getProgressFromValue(fragment.from, fragment.to, v);

          // Found an active fragment, execute
          if (progress >= 0 && progress <= 1) {
            foundActiveFragment = true;
            fragment.tween.seek(progress);
          } else {
            if (progress > 1) {
              tweenHasStarted = true;

              var distance = progress < 0 ? Math.abs(progress) : progress - 1;

              if (distance < prevProgressDistance) {
                prevProgressDistance = distance;
                closestProgress = clampProgress(progress);
                closestIndex = j;
              }
            }
          }

          j++;
        }

        if (!foundActiveFragment) {
          var target = markers.targets[i];

          if (tweenHasStarted || !target.set) {
            if (fragments[closestIndex].tween.progress !== closestProgress) fragments[closestIndex].tween.seek(closestProgress);
          } else if (!tweenHasStarted && target.set) {
            if (target.get() !== markers.initialValues[i]) target.set(markers.initialValues[i]);
          }
        }
      }
    }
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BvcG1vdGlvbi10aW1lbGluZS9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsidGltZWxpbmUiLCJnZXRQcm9ncmVzc0Zyb21WYWx1ZSIsImNsYW1wIiwiY2xhbXBQcm9ncmVzcyIsImZsYXR0ZW5BcnJheXNUb1NlcXVlbmNlIiwic2VxdWVuY2UiLCJzZWdtZW50IiwiY29uc3RydWN0b3IiLCJBcnJheSIsImxhc3RBcmciLCJsZW5ndGgiLCJpc1N0YWdnZXJlZCIsInR3ZWVucyIsInNsaWNlIiwibnVtVHdlZW5zIiwib2Zmc2V0IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwicHVzaCIsImR1cmF0aW9uIiwiZ2V0UHJvcCIsInByb3BzIiwicGxheWhlYWQiLCJtYXJrZXJzIiwicmVkdWNlIiwiYWNjIiwidHlwZU9mU2VnbWVudCIsInBhcnNlRmxvYXQiLCJ0byIsInR3ZWVuIiwiZnJvbSIsIk1hdGgiLCJtYXgiLCJtYXJrZXIiLCJvdXRwdXQiLCJ0YXJnZXRJbmRleCIsInRhcmdldHMiLCJpbmRleE9mIiwiZnJhZ21lbnRzIiwiZnJhZ21lbnRMaXN0IiwiZ2V0IiwiaW5pdGlhbFZhbHVlcyIsIm51bU1hcmtlcnMiLCJlYXNlIiwibGluZWFyIiwib25VcGRhdGUiLCJ2IiwibnVtRnJhZ21lbnRzIiwiZm91bmRBY3RpdmVGcmFnbWVudCIsInByZXZQcm9ncmVzc0Rpc3RhbmNlIiwiSW5maW5pdHkiLCJjbG9zZXN0SW5kZXgiLCJjbG9zZXN0UHJvZ3Jlc3MiLCJ0d2Vlbkhhc1N0YXJ0ZWQiLCJqIiwiZnJhZ21lbnQiLCJwcm9ncmVzcyIsInNlZWsiLCJkaXN0YW5jZSIsImFicyIsInRhcmdldCIsInNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBa0N3QkEsUTs7QUFsQ3hCOztJQUNRQyxvQixtQkFBQUEsb0I7SUFDQUMsSyx3QkFBQUEsSzs7QUFDUixJQUFNQyxnQkFBZ0JELE1BQU0sQ0FBTixFQUFTLENBQVQsQ0FBdEI7O0FBRUE7Ozs7O0FBS0Es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dEI7QUFDQU8scUJBQVMxQixLQUFULENBQWU0QixJQUFmLENBQW9CRCxRQUFwQjtBQUNELFdBSEQsTUFHTztBQUNMLGdCQUFJQSxXQUFXLENBQWYsRUFBa0I7QUFDaEJILGdDQUFrQixJQUFsQjs7QUFFQSxrQkFBTUssV0FBWUYsV0FBVyxDQUFaLEdBQWlCekIsS0FBSzRCLEdBQUwsQ0FBU0gsUUFBVCxDQUFqQixHQUFzQ0EsV0FBVyxDQUFsRTs7QUFFQSxrQkFBSUUsV0FBV1Qsb0JBQWYsRUFBcUM7QUFDbkNBLHVDQUF1QlMsUUFBdkI7QUFDQU4sa0NBQWtCbEQsY0FBY3NELFFBQWQsQ0FBbEI7QUFDQUwsK0JBQWVHLENBQWY7QUFDRDtBQUNGO0FBQ0Y7O0FBRURBO0FBQ0Q7O0FBRUQsWUFBSSxDQUFDTixtQkFBTCxFQUEwQjtBQUN4QixjQUFNWSxTQUFTckMsUUFBUWEsT0FBUixDQUFnQm5CLENBQWhCLENBQWY7O0FBRUEsY0FBSW9DLG1CQUFtQixDQUFDTyxPQUFPQyxHQUEvQixFQUFvQztBQUNsQyxnQkFBSXZCLFVBQVVhLFlBQVYsRUFBd0J0QixLQUF4QixDQUE4QjJCLFFBQTlCLEtBQTJDSixlQUEvQyxFQUFnRWQsVUFBVWEsWUFBVixFQUF3QnRCLEtBQXhCLENBQThCNEIsSUFBOUIsQ0FBbUNMLGVBQW5DO0FBQ2pFLFdBRkQsTUFFTyxJQUFJLENBQUNDLGVBQUQsSUFBb0JPLE9BQU9DLEdBQS9CLEVBQW9DO0FBQ3pDLGdCQUFJRCxPQUFPcEIsR0FBUCxPQUFpQmpCLFFBQVFrQixhQUFSLENBQXNCeEIsQ0FBdEIsQ0FBckIsRUFBK0MyQyxPQUFPQyxHQUFQLENBQVd0QyxRQUFRa0IsYUFBUixDQUFzQnhCLENBQXRCLENBQVg7QUFDaEQ7QUFDRjtBQUNGO0FBQ0Y7QUFuREksS0FBUDtBQXFERCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbGMsIHR3ZWVuLCBlYXNpbmcsIHRyYW5zZm9ybSB9IGZyb20gJ3BvcG1vdGlvbic7XG5jb25zdCB7IGdldFByb2dyZXNzRnJvbVZhbHVlIH0gPSBjYWxjO1xuY29uc3QgeyBjbGFtcCB9ID0gdHJhbnNmb3JtO1xuY29uc3QgY2xhbXBQcm9ncmVzcyA9IGNsYW1wKDAsIDEpO1xuXG4vKlxuICBGbGF0dGVuIGFycmF5cywgd2hpY2ggZGVub3RlIHBhcmFsbGVsIG9yIHN0YWdnZXJlZCB0d2VlbnMsXG4gIGludG8gYSBmbGF0IHNldCBvZiBpbnN0cnVjdGlvbnMgd2hpY2ggcmVzZXQgdGhlIHBsYXloZWFkXG4gIGFmdGVyIGVhY2ggdHdlZW4uXG4gKi9cbmZ1bmN0aW9uIGZsYXR0ZW5BcnJheXNUb1NlcXVlbmNlKHNlcXVlbmNlLCBzZWdtZW50KSB7XG4gIGlmIChzZWdtZW50LmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgIGNvbnN0IGxhc3RBcmcgPSBzZWdtZW50W3NlZ21lbnQubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgaXNTdGFnZ2VyZWQgPSB0eXBlb2YgbGFzdEFyZyA9PT0gJ251bWJlcic7XG4gICAgY29uc3QgdHdlZW5zID0gaXNTdGFnZ2VyZWQgPyBzZWdtZW50LnNsaWNlKDAsIC0xKSA6IHNlZ21lbnQ7XG4gICAgY29uc3QgbnVtVHdlZW5zID0gdHdlZW5zLmxlbmd0aDtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgIHR3ZWVucy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICBzZXF1ZW5jZS5wdXNoKGl0ZW0pO1xuXG4gICAgICBpZiAoaSAhPT0gbnVtVHdlZW5zIC0gMSkge1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IGl0ZW0uZ2V0UHJvcCgnZHVyYXRpb24nKTtcbiAgICAgICAgb2Zmc2V0ICs9IGlzU3RhZ2dlcmVkID8gbGFzdEFyZyA6IDA7XG4gICAgICAgIHNlcXVlbmNlLnB1c2goYC0ke2R1cmF0aW9uIC0gb2Zmc2V0fWApO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHNlcXVlbmNlLnB1c2goc2VnbWVudCk7XG4gIH1cblxuICByZXR1cm4gc2VxdWVuY2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVsaW5lKHNlcXVlbmNlLCBwcm9wcykge1xuICBsZXQgcGxheWhlYWQgPSAwO1xuICBsZXQgZHVyYXRpb24gPSAwO1xuXG4gIGNvbnN0IG1hcmtlcnMgPSBzZXF1ZW5jZVxuICAgIC5yZWR1Y2UoZmxhdHRlbkFycmF5c1RvU2VxdWVuY2UsIFtdKVxuICAgIC8vIENvbnZlcnQgc2VxdWVuY2UgdG8gcmVsYXRpdmUgdGltaW5nc1xuICAgIC5yZWR1Y2UoKGFjYywgc2VnbWVudCkgPT4ge1xuICAgICAgY29uc3QgdHlwZU9mU2VnbWVudCA9IHR5cGVvZiBzZWdtZW50O1xuXG4gICAgICAvLyBJZiByZWxhdGl2ZSB0aW1lc3RhbXBcbiAgICAgIGlmICh0eXBlT2ZTZWdtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBwbGF5aGVhZCArPSBwYXJzZUZsb2F0KHNlZ21lbnQpO1xuXG4gICAgICAvLyBJZiBhYnNvbHV0ZSB0aW1lc3RhbXBcbiAgICAgIH0gZWxzZSBpZiAodHlwZU9mU2VnbWVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcGxheWhlYWQgPSBzZWdtZW50O1xuXG4gICAgICAvLyBPciBpZiB0d2VlbiwgYWRkIG1hcmtlclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdG8gPSBwbGF5aGVhZCArIHNlZ21lbnQuZ2V0UHJvcCgnZHVyYXRpb24nKTtcblxuICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAgdHdlZW46IHNlZ21lbnQsXG4gICAgICAgICAgZnJvbTogcGxheWhlYWQsXG4gICAgICAgICAgdG9cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGxheWhlYWQgPSB0bztcbiAgICAgICAgZHVyYXRpb24gPSBNYXRoLm1heChkdXJhdGlvbiwgdG8pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKVxuICAgIC8vIFNwbGl0IHR3ZWVucyBieSB0YXJnZXQsIGFuZCBjb252ZXJ0IGFic29sdXRlIG1hcmtlcnMgdG8gcHJvZ3Jlc3MgbWFya2Vyc1xuICAgIC5yZWR1Y2UoKGFjYywgbWFya2VyKSA9PiB7XG4gICAgICBjb25zdCBvdXRwdXQgPSBtYXJrZXIudHdlZW4uZ2V0UHJvcCgnb25VcGRhdGUnKTtcbiAgICAgIGxldCB0YXJnZXRJbmRleCA9IGFjYy50YXJnZXRzLmluZGV4T2Yob3V0cHV0KTtcblxuICAgICAgaWYgKHRhcmdldEluZGV4ID09PSAtMSkge1xuICAgICAgICBhY2MudGFyZ2V0cy5wdXNoKG91dHB1dCk7XG4gICAgICAgIGFjYy5mcmFnbWVudHMucHVzaChbXSk7XG4gICAgICAgIHRhcmdldEluZGV4ID0gYWNjLmZyYWdtZW50cy5sZW5ndGggLSAxO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmcmFnbWVudExpc3QgPSBhY2MuZnJhZ21lbnRzW3RhcmdldEluZGV4XTtcblxuICAgICAgZnJhZ21lbnRMaXN0LnB1c2goe1xuICAgICAgICB0d2VlbjogbWFya2VyLnR3ZWVuLFxuICAgICAgICBmcm9tOiBnZXRQcm9ncmVzc0Zyb21WYWx1ZSgwLCBkdXJhdGlvbiwgbWFya2VyLmZyb20pLFxuICAgICAgICB0bzogZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoMCwgZHVyYXRpb24sIG1hcmtlci50bylcbiAgICAgIH0pO1xuXG4gICAgICBpZiAob3V0cHV0LmdldCkge1xuICAgICAgICBhY2MuaW5pdGlhbFZhbHVlc1t0YXJnZXRJbmRleF0gPSBvdXRwdXQuZ2V0KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgeyBpbml0aWFsVmFsdWVzOiBbXSwgdGFyZ2V0czogW10sIGZyYWdtZW50czogW10gfSk7XG5cbiAgY29uc3QgbnVtTWFya2VycyA9IG1hcmtlcnMuZnJhZ21lbnRzLmxlbmd0aDtcblxuICByZXR1cm4gdHdlZW4oe1xuICAgIGR1cmF0aW9uLFxuICAgIGVhc2U6IGVhc2luZy5saW5lYXIsXG4gICAgLi4ucHJvcHMsXG4gICAgb25VcGRhdGU6ICh2KSA9PiB7XG4gICAgICAvLyBGaXJzdCBpdGVyYXRlIG92ZXIgb3V0cHV0IHRhcmdldHMsIGFuZCB0cnkgdG8gZmluZCBhbiBhY3RpdmUgdHdlZW5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTWFya2VyczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50cyA9IG1hcmtlcnMuZnJhZ21lbnRzW2ldO1xuICAgICAgICBjb25zdCBudW1GcmFnbWVudHMgPSBmcmFnbWVudHMubGVuZ3RoO1xuICAgICAgICBsZXQgZm91bmRBY3RpdmVGcmFnbWVudCA9IGZhbHNlO1xuICAgICAgICBsZXQgcHJldlByb2dyZXNzRGlzdGFuY2UgPSBJbmZpbml0eTtcbiAgICAgICAgbGV0IGNsb3Nlc3RJbmRleCA9IDA7XG4gICAgICAgIGxldCBjbG9zZXN0UHJvZ3Jlc3MgPSAwO1xuICAgICAgICBsZXQgdHdlZW5IYXNTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIGxldCBqID0gMDtcblxuICAgICAgICB3aGlsZSAoIWZvdW5kQWN0aXZlRnJhZ21lbnQgJiYgaiA8IG51bUZyYWdtZW50cykge1xuICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZnJhZ21lbnRzW2pdO1xuICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoZnJhZ21lbnQuZnJvbSwgZnJhZ21lbnQudG8sIHYpO1xuXG4gICAgICAgICAgLy8gRm91bmQgYW4gYWN0aXZlIGZyYWdtZW50LCBleGVjdXRlXG4gICAgICAgICAgaWYgKHByb2dyZXNzID49IDAgJiYgcHJvZ3Jlc3MgPD0gMSkge1xuICAgICAgICAgICAgZm91bmRBY3RpdmVGcmFnbWVudCA9IHRydWU7XG4gICAgICAgICAgICBmcmFnbWVudC50d2Vlbi5zZWVrKHByb2dyZXNzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzID4gMSkge1xuICAgICAgICAgICAgICB0d2Vlbkhhc1N0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gKHByb2dyZXNzIDwgMCkgPyBNYXRoLmFicyhwcm9ncmVzcykgOiBwcm9ncmVzcyAtIDE7XG5cbiAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgcHJldlByb2dyZXNzRGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBwcmV2UHJvZ3Jlc3NEaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgICAgICAgIGNsb3Nlc3RQcm9ncmVzcyA9IGNsYW1wUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgIGNsb3Nlc3RJbmRleCA9IGo7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBqKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZvdW5kQWN0aXZlRnJhZ21lbnQpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBtYXJrZXJzLnRhcmdldHNbaV07XG5cbiAgICAgICAgICBpZiAodHdlZW5IYXNTdGFydGVkIHx8ICF0YXJnZXQuc2V0KSB7XG4gICAgICAgICAgICBpZiAoZnJhZ21lbnRzW2Nsb3Nlc3RJbmRleF0udHdlZW4ucHJvZ3Jlc3MgIT09IGNsb3Nlc3RQcm9ncmVzcykgZnJhZ21lbnRzW2Nsb3Nlc3RJbmRleF0udHdlZW4uc2VlayhjbG9zZXN0UHJvZ3Jlc3MpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXR3ZWVuSGFzU3RhcnRlZCAmJiB0YXJnZXQuc2V0KSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LmdldCgpICE9PSBtYXJrZXJzLmluaXRpYWxWYWx1ZXNbaV0pIHRhcmdldC5zZXQobWFya2Vycy5pbml0aWFsVmFsdWVzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl19

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzIzNTlmNWU4M2ZjNDA0MjkzMGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2NhbGMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90cmFuc2Zvcm1lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy92YWx1ZS10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wYXJhbGxlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3BhcnNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY2hhaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZGVsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvdmFsdWUtdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZyYW1lc3luYy9saWIvb24tbmV4dC1mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2xpYi9jcmVhdGUtcmVuZGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY29sb3ItdHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdG91Y2hlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90cmFjay1vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvc3RhZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9zcHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xvYmFsLXhsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3BvcG1vdGlvbi1kcmFnZ2FibGUvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3BvcG1vdGlvbi1pbmVydGlhL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9wb3Btb3Rpb24tc2Nyb2xsL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9wb3Btb3Rpb24tc3Bpbm5hYmxlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9wb3Btb3Rpb24tdGltZWxpbmUvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7O0FBRUE7O0FBRUEsb0dBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFRO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxjQUFjLCtpUjs7Ozs7OztBQy9KekQ7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsMEJBQTBCLEVBQUUsZ0JBQWdCLDZCQUE2QjtBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGdCQUFnQjtBQUMxRCx3Q0FBd0MsMEJBQTBCO0FBQ2xFLGlDOzs7Ozs7O0FDeENBOztBQUVBOztBQUVBLG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBLDhDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU4saURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRCQUE0Qjs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCOztBQUU1Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0EsMkNBQTJDLGNBQWMsbW1UOzs7Ozs7O0FDbE16RDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLEdBQUcsZ0RBQWdEOztBQUV0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsMkNBQTJDLGNBQWMsbXRYIiwiZmlsZSI6InBvcG1vdGlvbi54bC5taW4uNy44LjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzIzNTlmNWU4M2ZjNDA0MjkzMGYiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5zcGxpdENvbG9yVmFsdWVzID0gc3BsaXRDb2xvclZhbHVlcztcbnZhciB2YXJUeXBlID0gZnVuY3Rpb24gdmFyVHlwZSh2YXJpYWJsZSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG59O1xuXG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG5cbi8qXG4gIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNhbWVsVG9EYXNoID0gZXhwb3J0cy5jYW1lbFRvRGFzaCA9IGZ1bmN0aW9uIGNhbWVsVG9EYXNoKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIHNldERPTUF0dHJzID0gZXhwb3J0cy5zZXRET01BdHRycyA9IGZ1bmN0aW9uIHNldERPTUF0dHJzKGVsZW1lbnQsIGF0dHJzKSB7XG4gIGZvciAodmFyIGtleSBpbiBhdHRycykge1xuICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuICAgIH1cbiAgfVxufTtcbi8qXG4gIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBmdW5jdGlvbiBzcGxpdENvbW1hRGVsaW1pdGVkKHZhbHVlKSB7XG4gIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG59O1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIGFueSBhcmd1bWVudCBmb3IgYHRlcm1gXG4gKiBgY29udGFpbnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG52YXIgY29udGFpbnMgPSBleHBvcnRzLmNvbnRhaW5zID0gZnVuY3Rpb24gY29udGFpbnModGVybSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pICE9PSAtMTtcbiAgfTtcbn07XG5cbi8qKlxuICogIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgdG8gc2VlIGlmIGFuIGFyZ3VtZW50IGlzXG4gKiAgdGhlIGZpcnN0IGNoYXJhY3RlcnMgaW4gdGhlIHByb3ZpZGVkIGB0ZXJtYFxuICogYGlzRmlyc3RDaGFycygnbmVlZGxlJykoJ2hheXN0YWNrJylgXG4gKi9cbnZhciBpc0ZpcnN0Q2hhcnMgPSBleHBvcnRzLmlzRmlyc3RDaGFycyA9IGZ1bmN0aW9uIGlzRmlyc3RDaGFycyh0ZXJtKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBpc1N0cmluZyh0ZXJtKSAmJiB2LmluZGV4T2YodGVybSkgPT09IDA7XG4gIH07XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHVuaXQgdmFsdWUgdHlwZVxuICovXG52YXIgY3JlYXRlVW5pdFR5cGUgPSBleHBvcnRzLmNyZWF0ZVVuaXRUeXBlID0gZnVuY3Rpb24gY3JlYXRlVW5pdFR5cGUodHlwZSwgdHJhbnNmb3JtKSB7XG4gIHJldHVybiB7XG4gICAgdGVzdDogY29udGFpbnModHlwZSksXG4gICAgcGFyc2U6IHBhcnNlRmxvYXQsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgfTtcbn07XG5cbi8qXG4gIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbnZhciBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHNwbGl0IGNvbG9yXG4gKiB2YWx1ZXMgZnJvbSBzdHJpbmcgaW50byBhbiBvYmplY3Qgb2YgcHJvcGVydGllc1xuICogYG1hcEFycmF5VG9PYmplY3QoWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddKSgncmdiYSgwLDAsMCknKWBcbiAqL1xuZnVuY3Rpb24gc3BsaXRDb2xvclZhbHVlcyh0ZXJtcykge1xuICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHZhbHVlcyA9IHt9O1xuICAgIHZhciB2YWx1ZXNBcnJheSA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodikpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICB2YWx1ZXNbdGVybXNbaV1dID0gdmFsdWVzQXJyYXlbaV0gIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQodmFsdWVzQXJyYXlbaV0pIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xufVxuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgP1xuXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkoYXJyKSB7XG4gIHJldHVybiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/XG5cbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbnZhciBpc0Z1bmMgPSBleHBvcnRzLmlzRnVuYyA9IGZ1bmN0aW9uIGlzRnVuYyhvYmopIHtcbiAgcmV0dXJuIHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIG51bWJlcj9cblxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xudmFyIGlzTnVtID0gZXhwb3J0cy5pc051bSA9IGZ1bmN0aW9uIGlzTnVtKG51bSkge1xuICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG52YXIgaXNPYmogPSBleHBvcnRzLmlzT2JqID0gZnVuY3Rpb24gaXNPYmoob2JqKSB7XG4gIHJldHVybiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqKSkgPT09ICdvYmplY3QnO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID9cblxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbnZhciBpc1N0cmluZyA9IGV4cG9ydHMuaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufTtcblxudmFyIGlzSGV4ID0gZXhwb3J0cy5pc0hleCA9IGlzRmlyc3RDaGFycygnIycpO1xudmFyIGlzUmdiID0gZXhwb3J0cy5pc1JnYiA9IGlzRmlyc3RDaGFycygncmdiJyk7XG52YXIgaXNIc2wgPSBleHBvcnRzLmlzSHNsID0gaXNGaXJzdENoYXJzKCdoc2wnKTtcbnZhciBpc0NvbG9yID0gZXhwb3J0cy5pc0NvbG9yID0gZnVuY3Rpb24gaXNDb2xvcih2KSB7XG4gIHJldHVybiBpc0hleCh2KSB8fCBpc1JnYih2KSB8fCBpc0hzbCh2KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkWFJwYkhNdWFuTWlYU3dpYm1GdFpYTWlPbHNpYzNCc2FYUkRiMnh2Y2xaaGJIVmxjeUlzSW5aaGNsUjVjR1VpTENKMllYSnBZV0pzWlNJc0lrOWlhbVZqZENJc0luQnliM1J2ZEhsd1pTSXNJblJ2VTNSeWFXNW5JaXdpWTJGc2JDSXNJbk5zYVdObElpd2lRMEZOUlV4ZlEwRlRSVjlRUVZSVVJWSk9JaXdpVWtWUVRFRkRSVjlVUlUxUVRFRlVSU0lzSW1OaGJXVnNWRzlFWVhOb0lpd2ljM1J5YVc1bklpd2ljbVZ3YkdGalpTSXNJblJ2VEc5M1pYSkRZWE5sSWl3aWMyVjBSRTlOUVhSMGNuTWlMQ0psYkdWdFpXNTBJaXdpWVhSMGNuTWlMQ0pyWlhraUxDSm9ZWE5QZDI1UWNtOXdaWEowZVNJc0luTmxkRUYwZEhKcFluVjBaU0lzSW5Od2JHbDBRMjl0YldGRVpXeHBiV2wwWldRaUxDSjJZV3gxWlNJc0ltbHpVM1J5YVc1bklpd2ljM0JzYVhRaUxDSmpiMjUwWVdsdWN5SXNJblJsY20waUxDSjJJaXdpYVc1a1pYaFBaaUlzSW1selJtbHljM1JEYUdGeWN5SXNJbU55WldGMFpWVnVhWFJVZVhCbElpd2lkSGx3WlNJc0luUnlZVzV6Wm05eWJTSXNJblJsYzNRaUxDSndZWEp6WlNJc0luQmhjbk5sUm14dllYUWlMQ0puWlhSV1lXeDFaVVp5YjIxR2RXNWpkR2x2YmxOMGNtbHVaeUlzSW5OMVluTjBjbWx1WnlJc0lteGhjM1JKYm1SbGVFOW1JaXdpZEdWeWJYTWlMQ0p1ZFcxVVpYSnRjeUlzSW14bGJtZDBhQ0lzSW5aaGJIVmxjeUlzSW5aaGJIVmxjMEZ5Y21GNUlpd2lhU0lzSW5WdVpHVm1hVzVsWkNJc0ltbHpRWEp5WVhraUxDSmhjbklpTENKcGMwWjFibU1pTENKdlltb2lMQ0pwYzA1MWJTSXNJbTUxYlNJc0ltbHpUMkpxSWl3aWMzUnlJaXdpYVhOSVpYZ2lMQ0pwYzFKbllpSXNJbWx6U0hOc0lpd2lhWE5EYjJ4dmNpSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMUZCY1VWblFrRXNaMElzUjBGQlFVRXNaMEk3UVVGeVJXaENMRWxCUVUxRExGVkJRVlVzVTBGQlZrRXNUMEZCVlN4RFFVRkRReXhSUVVGRU8wRkJRVUVzVTBGQlkwTXNUMEZCVDBNc1UwRkJVQ3hEUVVGcFFrTXNVVUZCYWtJc1EwRkJNRUpETEVsQlFURkNMRU5CUVN0Q1NpeFJRVUV2UWl4RlFVRjVRMHNzUzBGQmVrTXNRMEZCSzBNc1EwRkJMME1zUlVGQmEwUXNRMEZCUXl4RFFVRnVSQ3hEUVVGa08wRkJRVUVzUTBGQmFFSTdPMEZCUlVFc1NVRkJUVU1zY1VKQlFYRkNMR2xDUVVFelFqdEJRVU5CTEVsQlFVMURMRzFDUVVGdFFpeFBRVUY2UWpzN1FVRkZRVHM3T3pzN08wRkJUVThzU1VGQlRVTXNiME5CUVdNc1UwRkJaRUVzVjBGQll5eERRVUZEUXl4TlFVRkVPMEZCUVVFc1UwRkJXVUVzVDBGQlQwTXNUMEZCVUN4RFFVRmxTaXhyUWtGQlppeEZRVUZ0UTBNc1owSkJRVzVETEVWQlFYRkVTU3hYUVVGeVJDeEZRVUZhTzBGQlFVRXNRMEZCY0VJN08wRkJSVUVzU1VGQlRVTXNiME5CUVdNc1UwRkJaRUVzVjBGQll5eERRVUZEUXl4UFFVRkVMRVZCUVZWRExFdEJRVllzUlVGQmIwSTdRVUZETjBNc1QwRkJTeXhKUVVGSlF5eEhRVUZVTEVsQlFXZENSQ3hMUVVGb1FpeEZRVUYxUWp0QlFVTnlRaXhSUVVGSlFTeE5RVUZOUlN4alFVRk9MRU5CUVhGQ1JDeEhRVUZ5UWl4RFFVRktMRVZCUVN0Q08wRkJRemRDUml4alFVRlJTU3haUVVGU0xFTkJRWEZDUml4SFFVRnlRaXhGUVVFd1FrUXNUVUZCVFVNc1IwRkJUaXhEUVVFeFFqdEJRVU5FTzBGQlEwWTdRVUZEUml4RFFVNU5PMEZCVDFBN096czdPenM3TzBGQlVVOHNTVUZCVFVjc2IwUkJRWE5DTEZOQlFYUkNRU3h0UWtGQmMwSXNRMEZCUTBNc1MwRkJSRHRCUVVGQkxGTkJRVmRETEZOQlFWTkVMRXRCUVZRc1NVRkJhMEpCTEUxQlFVMUZMRXRCUVU0c1EwRkJXU3hOUVVGYUxFTkJRV3hDTEVkQlFYZERMRU5CUVVOR0xFdEJRVVFzUTBGQmJrUTdRVUZCUVN4RFFVRTFRanM3UVVGRlVEczdPenRCUVVsUExFbEJRVTFITERoQ1FVRlhMRk5CUVZoQkxGRkJRVmNzUTBGQlEwTXNTVUZCUkR0QlFVRkJMRk5CUVZVc1ZVRkJRME1zUTBGQlJDeEZRVUZQTzBGQlEzWkRMRmRCUVZGS0xGTkJRVk5ITEVsQlFWUXNTMEZCYTBKRExFVkJRVVZETEU5QlFVWXNRMEZCVlVZc1NVRkJWaXhOUVVGdlFpeERRVUZETEVOQlFTOURPMEZCUTBRc1IwRkdkVUk3UVVGQlFTeERRVUZxUWpzN1FVRkpVRHM3T3pzN1FVRkxUeXhKUVVGTlJ5eHpRMEZCWlN4VFFVRm1RU3haUVVGbExFTkJRVU5JTEVsQlFVUTdRVUZCUVN4VFFVRlZMRlZCUVVORExFTkJRVVFzUlVGQlR6dEJRVU16UXl4WFFVRlJTaXhUUVVGVFJ5eEpRVUZVTEV0QlFXdENReXhGUVVGRlF5eFBRVUZHTEVOQlFWVkdMRWxCUVZZc1RVRkJiMElzUTBGQk9VTTdRVUZEUkN4SFFVWXlRanRCUVVGQkxFTkJRWEpDT3p0QlFVbFFPenM3UVVGSFR5eEpRVUZOU1N3d1EwRkJhVUlzVTBGQmFrSkJMR05CUVdsQ0xFTkJRVU5ETEVsQlFVUXNSVUZCVDBNc1UwRkJVQ3hGUVVGeFFqdEJRVU5xUkN4VFFVRlBPMEZCUTB4RExGVkJRVTFTTEZOQlFWTk5MRWxCUVZRc1EwRkVSRHRCUVVWTVJ5eFhRVUZQUXl4VlFVWkdPMEZCUjB4SU8wRkJTRXNzUjBGQlVEdEJRVXRFTEVOQlRrMDdPMEZCVVZBN096czdRVUZKVHl4SlFVRk5TU3hyUlVGQk5rSXNVMEZCTjBKQkxEQkNRVUUyUWl4RFFVRkRaQ3hMUVVGRU8wRkJRVUVzVTBGQlYwRXNUVUZCVFdVc1UwRkJUaXhEUVVGblFtWXNUVUZCVFUwc1QwRkJUaXhEUVVGakxFZEJRV1FzU1VGQmNVSXNRMEZCY2tNc1JVRkJkME5PTEUxQlFVMW5RaXhYUVVGT0xFTkJRV3RDTEVkQlFXeENMRU5CUVhoRExFTkJRVmc3UVVGQlFTeERRVUZ1UXpzN1FVRkZVRHM3T3pzN1FVRkxUeXhUUVVGVGNrTXNaMEpCUVZRc1EwRkJNRUp6UXl4TFFVRXhRaXhGUVVGcFF6dEJRVU4wUXl4TlFVRk5ReXhYUVVGWFJDeE5RVUZOUlN4TlFVRjJRanM3UVVGRlFTeFRRVUZQTEZWQlFWVmtMRU5CUVZZc1JVRkJZVHRCUVVOc1FpeFJRVUZOWlN4VFFVRlRMRVZCUVdZN1FVRkRRU3hSUVVGTlF5eGpRVUZqZEVJc2IwSkJRVzlDWlN3eVFrRkJNa0pVTEVOQlFUTkNMRU5CUVhCQ0xFTkJRWEJDT3p0QlFVVkJMRk5CUVVzc1NVRkJTV2xDTEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNVb3NVVUZCY0VJc1JVRkJPRUpKTEVkQlFUbENMRVZCUVcxRE8wRkJRMnBEUml4aFFVRlBTQ3hOUVVGTlN5eERRVUZPTEVOQlFWQXNTVUZCYjBKRUxGbEJRVmxETEVOQlFWb3NUVUZCYlVKRExGTkJRWEJDTEVkQlFXbERWaXhYUVVGWFVTeFpRVUZaUXl4RFFVRmFMRU5CUVZnc1EwRkJha01zUjBGQk9FUXNRMEZCYWtZN1FVRkRSRHM3UVVGRlJDeFhRVUZQUml4TlFVRlFPMEZCUTBRc1IwRlVSRHRCUVZWRU96dEJRVVZFT3pzN096czdRVUZOVHl4SlFVRk5TU3cwUWtGQlZTeFRRVUZXUVN4UFFVRlZMRU5CUVVORExFZEJRVVE3UVVGQlFTeFRRVUZUTjBNc1VVRkJVVFpETEVkQlFWSXNUVUZCYVVJc1QwRkJNVUk3UVVGQlFTeERRVUZvUWpzN1FVRkZVRHM3T3pzN08wRkJUVThzU1VGQlRVTXNNRUpCUVZNc1UwRkJWRUVzVFVGQlV5eERRVUZEUXl4SFFVRkVPMEZCUVVFc1UwRkJVeTlETEZGQlFWRXJReXhIUVVGU0xFMUJRV2xDTEZWQlFURkNPMEZCUVVFc1EwRkJaanM3UVVGRlVEczdPenM3TzBGQlRVOHNTVUZCVFVNc2QwSkJRVkVzVTBGQlVrRXNTMEZCVVN4RFFVRkRReXhIUVVGRU8wRkJRVUVzVTBGQlV5eFBRVUZQUVN4SFFVRlFMRXRCUVdVc1VVRkJlRUk3UVVGQlFTeERRVUZrT3p0QlFVVlFPenM3T3pzN1FVRk5UeXhKUVVGTlF5eDNRa0ZCVVN4VFFVRlNRU3hMUVVGUkxFTkJRVU5JTEVkQlFVUTdRVUZCUVN4VFFVRlRMRkZCUVU5QkxFZEJRVkFzZVVOQlFVOUJMRWRCUVZBc1QwRkJaU3hSUVVGNFFqdEJRVUZCTEVOQlFXUTdPMEZCUlZBN096czdPenRCUVUxUExFbEJRVTB4UWl3NFFrRkJWeXhUUVVGWVFTeFJRVUZYTEVOQlFVTTRRaXhIUVVGRU8wRkJRVUVzVTBGQlV5eFBRVUZQUVN4SFFVRlFMRXRCUVdVc1VVRkJlRUk3UVVGQlFTeERRVUZxUWpzN1FVRkZRU3hKUVVGTlF5eDNRa0ZCVVhwQ0xHRkJRV0VzUjBGQllpeERRVUZrTzBGQlEwRXNTVUZCVFRCQ0xIZENRVUZSTVVJc1lVRkJZU3hMUVVGaUxFTkJRV1E3UVVGRFFTeEpRVUZOTWtJc2QwSkJRVkV6UWl4aFFVRmhMRXRCUVdJc1EwRkJaRHRCUVVOQkxFbEJRVTAwUWl3MFFrRkJWU3hUUVVGV1FTeFBRVUZWTEVOQlFVTTVRaXhEUVVGRU8wRkJRVUVzVTBGQlVUSkNMRTFCUVUwelFpeERRVUZPTEV0QlFWazBRaXhOUVVGTk5VSXNRMEZCVGl4RFFVRmFMRWxCUVhkQ05rSXNUVUZCVFRkQ0xFTkJRVTRzUTBGQmFFTTdRVUZCUVN4RFFVRm9RaUlzSW1acGJHVWlPaUoxZEdsc2N5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltTnZibk4wSUhaaGNsUjVjR1VnUFNBb2RtRnlhV0ZpYkdVcElEMCtJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVkRzlUZEhKcGJtY3VZMkZzYkNoMllYSnBZV0pzWlNrdWMyeHBZMlVvT0N3Z0xURXBPMXh1WEc1amIyNXpkQ0JEUVUxRlRGOURRVk5GWDFCQlZGUkZVazRnUFNBdktGdGhMWHBkS1NoYlFTMWFYU2t2Wnp0Y2JtTnZibk4wSUZKRlVFeEJRMFZmVkVWTlVFeEJWRVVnUFNBbkpERXRKREluTzF4dVhHNHZLbHh1SUNCRGIyNTJaWEowSUdOaGJXVnNRMkZ6WlNCMGJ5QmtZWE5vTFdOaGMyVmNibHh1SUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCallXMWxiRlJ2UkdGemFDQTlJQ2h6ZEhKcGJtY3BJRDArSUhOMGNtbHVaeTV5WlhCc1lXTmxLRU5CVFVWTVgwTkJVMFZmVUVGVVZFVlNUaXdnVWtWUVRFRkRSVjlVUlUxUVRFRlVSU2t1ZEc5TWIzZGxja05oYzJVb0tUdGNibHh1Wlhod2IzSjBJR052Ym5OMElITmxkRVJQVFVGMGRISnpJRDBnS0dWc1pXMWxiblFzSUdGMGRISnpLU0E5UGlCN1hHNGdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQmhkSFJ5Y3lrZ2UxeHVJQ0FnSUdsbUlDaGhkSFJ5Y3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQmxiR1Z0Wlc1MExuTmxkRUYwZEhKcFluVjBaU2hyWlhrc0lHRjBkSEp6VzJ0bGVWMHBPMXh1SUNBZ0lIMWNiaUFnZlZ4dWZUdGNiaThxWEc0Z0lGTndiR2wwSUdOdmJXMWhMV1JsYkdsdGFYUmxaQ0J6ZEhKcGJtZGNibHh1SUNCY0ltWnZieXhpWVhKY0lpQXRQaUJiWENKbWIyOWNJaXdnWENKaVlYSmNJbDFjYmx4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdRSEpsZEhWeWJpQmJZWEp5WVhsZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITndiR2wwUTI5dGJXRkVaV3hwYldsMFpXUWdQU0FvZG1Gc2RXVXBJRDArSUdselUzUnlhVzVuS0haaGJIVmxLU0EvSUhaaGJIVmxMbk53YkdsMEtDOHNYRnh6S2k4cElEb2dXM1poYkhWbFhUdGNibHh1THlvcVhHNGdLaUFnVW1WMGRYSnVjeUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdkMmxzYkNCamFHVmpheUJoYm5rZ1lYSm5kVzFsYm5RZ1ptOXlJR0IwWlhKdFlGeHVJQ29nWUdOdmJuUmhhVzV6S0NkdVpXVmtiR1VuS1NnbmFHRjVjM1JoWTJzbktXQmNiaUFxTDF4dVpYaHdiM0owSUdOdmJuTjBJR052Ym5SaGFXNXpJRDBnS0hSbGNtMHBJRDArSUNoMktTQTlQaUI3WEc0Z0lISmxkSFZ5YmlBb2FYTlRkSEpwYm1jb2RHVnliU2tnSmlZZ2RpNXBibVJsZUU5bUtIUmxjbTBwSUNFOVBTQXRNU2s3WEc1OU8xeHVYRzR2S2lwY2JpQXFJQ0JTWlhSMWNtNXpJR0VnWm5WdVkzUnBiMjRnZEdoaGRDQjNhV3hzSUdOb1pXTnJJSFJ2SUhObFpTQnBaaUJoYmlCaGNtZDFiV1Z1ZENCcGMxeHVJQ29nSUhSb1pTQm1hWEp6ZENCamFHRnlZV04wWlhKeklHbHVJSFJvWlNCd2NtOTJhV1JsWkNCZ2RHVnliV0JjYmlBcUlHQnBjMFpwY25OMFEyaGhjbk1vSjI1bFpXUnNaU2NwS0Nkb1lYbHpkR0ZqYXljcFlGeHVJQ292WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5HYVhKemRFTm9ZWEp6SUQwZ0tIUmxjbTBwSUQwK0lDaDJLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQW9hWE5UZEhKcGJtY29kR1Z5YlNrZ0ppWWdkaTVwYm1SbGVFOW1LSFJsY20wcElEMDlQU0F3S1R0Y2JuMDdYRzVjYmk4cUtseHVJQ29nUTNKbFlYUmxJR0VnZFc1cGRDQjJZV3gxWlNCMGVYQmxYRzRnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVlZibWwwVkhsd1pTQTlJQ2gwZVhCbExDQjBjbUZ1YzJadmNtMHBJRDArSUh0Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNCMFpYTjBPaUJqYjI1MFlXbHVjeWgwZVhCbEtTeGNiaUFnSUNCd1lYSnpaVG9nY0dGeWMyVkdiRzloZEN4Y2JpQWdJQ0IwY21GdWMyWnZjbTFjYmlBZ2ZUdGNibjA3WEc1Y2JpOHFYRzRnSUVkbGRDQjJZV3gxWlNCbWNtOXRJR1oxYm1OMGFXOXVJSE4wY21sdVoxeHVJQ0JjSW5SeVlXNXpiR0YwWlZnb01qQndlQ2xjSWlBdFBpQmNJakl3Y0hoY0lseHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFJXWVd4MVpVWnliMjFHZFc1amRHbHZibE4wY21sdVp5QTlJQ2gyWVd4MVpTa2dQVDRnZG1Gc2RXVXVjM1ZpYzNSeWFXNW5LSFpoYkhWbExtbHVaR1Y0VDJZb0p5Z25LU0FySURFc0lIWmhiSFZsTG14aGMzUkpibVJsZUU5bUtDY3BKeWtwTzF4dVhHNHZLaXBjYmlBcUlFTnlaV0YwWlhNZ1lTQm1kVzVqZEdsdmJpQjBhR0YwSUhkcGJHd2djM0JzYVhRZ1kyOXNiM0pjYmlBcUlIWmhiSFZsY3lCbWNtOXRJSE4wY21sdVp5QnBiblJ2SUdGdUlHOWlhbVZqZENCdlppQndjbTl3WlhKMGFXVnpYRzRnS2lCZ2JXRndRWEp5WVhsVWIwOWlhbVZqZENoYkozSmxaQ2NzSUNkbmNtVmxiaWNzSUNkaWJIVmxKMTBwS0NkeVoySmhLREFzTUN3d0tTY3BZRnh1SUNvdlhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2MzQnNhWFJEYjJ4dmNsWmhiSFZsY3loMFpYSnRjeWtnZTF4dUlDQmpiMjV6ZENCdWRXMVVaWEp0Y3lBOUlIUmxjbTF6TG14bGJtZDBhRHRjYmx4dUlDQnlaWFIxY200Z1puVnVZM1JwYjI0Z0tIWXBJSHRjYmlBZ0lDQmpiMjV6ZENCMllXeDFaWE1nUFNCN2ZUdGNiaUFnSUNCamIyNXpkQ0IyWVd4MVpYTkJjbkpoZVNBOUlITndiR2wwUTI5dGJXRkVaV3hwYldsMFpXUW9aMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY29kaWtwTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMVVaWEp0Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0IyWVd4MVpYTmJkR1Z5YlhOYmFWMWRJRDBnS0haaGJIVmxjMEZ5Y21GNVcybGRJQ0U5UFNCMWJtUmxabWx1WldRcElEOGdjR0Z5YzJWR2JHOWhkQ2gyWVd4MVpYTkJjbkpoZVZ0cFhTa2dPaUF4TzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjJZV3gxWlhNN1hHNGdJSDA3WEc1OVhHNWNiaThxWEc0Z0lFbHpJSFYwYVd4eklIWmhjaUJoYmlCaGNuSmhlU0EvWEc1Y2JpQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkWFJwYkhNdWRtRnlWSGx3WlNBOVBUMGdKMEZ5Y21GNUoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMEZ5Y21GNUlEMGdLR0Z5Y2lrZ1BUNGdkbUZ5Vkhsd1pTaGhjbklwSUQwOVBTQW5RWEp5WVhrbk8xeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVNCbWRXNWpkR2x2YmlBL1hHNWNiaUFnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZFhScGJITXVkbUZ5Vkhsd1pTQTlQVDBnSjBaMWJtTjBhVzl1SjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwWjFibU1nUFNBb2IySnFLU0E5UGlCMllYSlVlWEJsS0c5aWFpa2dQVDA5SUNkR2RXNWpkR2x2YmljN1hHNWNiaThxWEc0Z0lFbHpJSFYwYVd4eklIWmhjaUJoSUc1MWJXSmxjajljYmx4dUlDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBlWEJsYjJZZ1BUMDlJQ2R1ZFcxaVpYSW5YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VG5WdElEMGdLRzUxYlNrZ1BUNGdkSGx3Wlc5bUlHNTFiU0E5UFQwZ0oyNTFiV0psY2ljN1hHNWNiaThxWEc0Z0lFbHpJSFYwYVd4eklIWmhjaUJoYmlCdlltcGxZM1EvWEc1Y2JpQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkSGx3Wlc5bUlEMDlQU0FuYjJKcVpXTjBKMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzA5aWFpQTlJQ2h2WW1vcElEMCtJSFI1Y0dWdlppQnZZbW9nUFQwOUlDZHZZbXBsWTNRbk8xeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVNCemRISnBibWNnUDF4dVhHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQnpkSElnUFQwOUlDZHpkSEpwYm1jblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpVM1J5YVc1bklEMGdLSE4wY2lrZ1BUNGdkSGx3Wlc5bUlITjBjaUE5UFQwZ0ozTjBjbWx1WnljN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwaGxlQ0E5SUdselJtbHljM1JEYUdGeWN5Z25JeWNwTzF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VW1kaUlEMGdhWE5HYVhKemRFTm9ZWEp6S0NkeVoySW5LVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnBjMGh6YkNBOUlHbHpSbWx5YzNSRGFHRnljeWduYUhOc0p5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkRiMnh2Y2lBOUlDaDJLU0E5UGlBb2FYTklaWGdvZGlrZ2ZId2dhWE5TWjJJb2Rpa2dmSHdnYVhOSWMyd29kaWtwTzF4dUlsMTlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmMvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBvbl9uZXh0X2ZyYW1lXzEgPSByZXF1aXJlKFwiLi9vbi1uZXh0LWZyYW1lXCIpO1xudmFyIGNyZWF0ZV9yZW5kZXJfc3RlcF8xID0gcmVxdWlyZShcIi4vY3JlYXRlLXJlbmRlci1zdGVwXCIpO1xudmFyIEhBU19QRVJGT1JNQU5DRV9OT1cgPSAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cpO1xuZXhwb3J0cy5jdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTsgfSA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyB9O1xudmFyIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcbnZhciBNQVhfRUxBUFNFRCA9IDIwO1xudmFyIGN1cnJlbnRGcmFtZXN0YW1wID0gZXhwb3J0cy5jdXJyZW50VGltZSgpO1xudmFyIGVsYXBzZWQgPSAwO1xudmFyIGRpbGF0aW9uID0gMTtcbmZ1bmN0aW9uIHN0YXJ0UmVuZGVyTG9vcCgpIHtcbiAgICBpZiAoIXdpbGxSZW5kZXJOZXh0RnJhbWUpIHtcbiAgICAgICAgd2lsbFJlbmRlck5leHRGcmFtZSA9IHRydWU7XG4gICAgICAgIG9uX25leHRfZnJhbWVfMS5kZWZhdWx0KHByb2Nlc3NGcmFtZSk7XG4gICAgfVxufVxudmFyIGZyYW1lU3RhcnQgPSBjcmVhdGVfcmVuZGVyX3N0ZXBfMS5kZWZhdWx0KHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVVcGRhdGUgPSBjcmVhdGVfcmVuZGVyX3N0ZXBfMS5kZWZhdWx0KHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVSZW5kZXIgPSBjcmVhdGVfcmVuZGVyX3N0ZXBfMS5kZWZhdWx0KHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVFbmQgPSBjcmVhdGVfcmVuZGVyX3N0ZXBfMS5kZWZhdWx0KHN0YXJ0UmVuZGVyTG9vcCk7XG5mdW5jdGlvbiBwcm9jZXNzRnJhbWUoZnJhbWVzdGFtcCkge1xuICAgIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcbiAgICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnRGcmFtZXN0YW1wLCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gICAgY3VycmVudEZyYW1lc3RhbXAgPSBmcmFtZXN0YW1wO1xuICAgIGZyYW1lU3RhcnQucHJvY2VzcygpO1xuICAgIGZyYW1lVXBkYXRlLnByb2Nlc3MoKTtcbiAgICBmcmFtZVJlbmRlci5wcm9jZXNzKCk7XG4gICAgZnJhbWVFbmQucHJvY2VzcygpO1xufVxuZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LnNjaGVkdWxlO1xuZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZnJhbWVVcGRhdGUuc2NoZWR1bGU7XG5leHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5zY2hlZHVsZTtcbmV4cG9ydHMub25GcmFtZUVuZCA9IGZyYW1lRW5kLnNjaGVkdWxlO1xuZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LmNhbmNlbDtcbmV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLmNhbmNlbDtcbmV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGZyYW1lUmVuZGVyLmNhbmNlbDtcbmV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGZyYW1lRW5kLmNhbmNlbDtcbmV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZWxhcHNlZDsgfTtcbmV4cG9ydHMuY3VycmVudEZyYW1lVGltZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGN1cnJlbnRGcmFtZXN0YW1wOyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCdmcmFtZXN5bmMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAvLyBsYXdzdWl0IC0gc29ycnlcbiAgZnVuY3Rpb24gQWN0aW9uKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbik7XG5cbiAgICB0aGlzLnNjaGVkdWxlZFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmxhc3RVcGRhdGVkID0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpO1xuICAgICAgX3RoaXMucHJldiA9IF90aGlzLmN1cnJlbnQ7XG5cbiAgICAgIHZhciBfcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvblVwZGF0ZSA9IF9wcm9wcy5vblVwZGF0ZSxcbiAgICAgICAgICBwYXNzaXZlID0gX3Byb3BzLnBhc3NpdmU7XG5cblxuICAgICAgaWYgKF90aGlzLnVwZGF0ZSkge1xuICAgICAgICBfdGhpcy5jdXJyZW50ID0gX3RoaXMudXBkYXRlKF90aGlzLmN1cnJlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAob25VcGRhdGUpIHtcbiAgICAgICAgaWYgKG9uVXBkYXRlLnJlZ2lzdGVyQWN0aW9uKSB7XG4gICAgICAgICAgb25VcGRhdGUuc2V0KF90aGlzLmdldCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvblVwZGF0ZShfdGhpcy5nZXQoKSwgX3RoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmZpcmVMaXN0ZW5lcnMoKTtcblxuICAgICAgaWYgKCFwYXNzaXZlICYmIF90aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKShfdGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiBfdGhpcy5pc0FjdGlvbkNvbXBsZXRlKCkpIHtcbiAgICAgICAgX3RoaXMuY29tcGxldGUoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH07XG5cbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzKTtcblxuICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuXG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9IDA7XG4gICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50ID0gcHJvcHMuY3VycmVudCB8fCBwcm9wcy5mcm9tIHx8IDA7XG4gIH1cblxuICBBY3Rpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBvblN0YXJ0ID0gX3Byb3BzMi5vblN0YXJ0LFxuICAgICAgICBfb25TdGFydCA9IF9wcm9wczIuX29uU3RhcnQsXG4gICAgICAgIHBhc3NpdmUgPSBfcHJvcHMyLnBhc3NpdmU7XG5cblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RhcnQpIHRoaXMub25TdGFydCgpO1xuICAgIGlmIChvblN0YXJ0KSBvblN0YXJ0KHRoaXMpO1xuICAgIGlmIChfb25TdGFydCkgX29uU3RhcnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25TdG9wID0gX3Byb3BzMy5vblN0b3AsXG4gICAgICAgIF9vblN0b3AgPSBfcHJvcHMzLl9vblN0b3AsXG4gICAgICAgIHBhc3NpdmUgPSBfcHJvcHMzLnBhc3NpdmU7XG5cblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICgwLCBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVVcGRhdGUpKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0b3ApIHRoaXMub25TdG9wKCk7XG4gICAgaWYgKG9uU3RvcCkgb25TdG9wKHRoaXMpO1xuICAgIGlmIChfb25TdG9wKSBfb25TdG9wKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25Db21wbGV0ZSA9IF9wcm9wczQub25Db21wbGV0ZSxcbiAgICAgICAgX29uQ29tcGxldGUgPSBfcHJvcHM0Ll9vbkNvbXBsZXRlO1xuXG5cbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKHRoaXMpO1xuICAgIGlmIChfb25Db21wbGV0ZSkgX29uQ29tcGxldGUodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24gc2V0UHJvcHMoX3JlZikge1xuICAgIHZhciBvblVwZGF0ZSA9IF9yZWYub25VcGRhdGUsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnb25VcGRhdGUnXSk7XG5cbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHByb3BzKTtcblxuICAgIGlmIChvblVwZGF0ZSkgdGhpcy5vdXRwdXQob25VcGRhdGUpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5vdXRwdXQgPSBmdW5jdGlvbiBvdXRwdXQoZnVuYykge1xuICAgIHRoaXMucHJvcHMub25VcGRhdGUgPSBmdW5jO1xuICAgIGlmIChmdW5jLnJlZ2lzdGVyQWN0aW9uKSBmdW5jLnJlZ2lzdGVyQWN0aW9uKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgdmFyIHRyYW5zZm9ybSA9IHRoaXMucHJvcHMudHJhbnNmb3JtO1xuXG4gICAgcmV0dXJuIHRyYW5zZm9ybSA/IHRyYW5zZm9ybSh0aGlzLmN1cnJlbnQpIDogdGhpcy5jdXJyZW50O1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0QmVmb3JlVHJhbnNmb3JtID0gZnVuY3Rpb24gZ2V0QmVmb3JlVHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQodikge1xuICAgIHRoaXMuY3VycmVudCA9IHY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXRQcm9wID0gZnVuY3Rpb24gZ2V0UHJvcChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wc1trZXldO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gKDAsIF9jYWxjLnNwZWVkUGVyU2Vjb25kKSh0aGlzLmN1cnJlbnQgLSB0aGlzLnByZXYsIHRoaXMubGFzdFVwZGF0ZWQpO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IFtdO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gdGhpcy5udW1MaXN0ZW5lcnMgfHwgMDtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzKys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIHZhciBsaXN0ZW5lckluZGV4ID0gdGhpcy5saXN0ZW5lcnMgPyB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA6IC0xO1xuICAgIGlmIChsaXN0ZW5lckluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMtLTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5maXJlTGlzdGVuZXJzID0gZnVuY3Rpb24gZmlyZUxpc3RlbmVycygpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuZ2V0KCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bUxpc3RlbmVyczsgaSsrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tpXShjdXJyZW50LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIEFjdGlvbjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJa0ZqZEdsdmJpSXNJbkJ5YjNCeklpd2ljMk5vWldSMWJHVmtWWEJrWVhSbElpd2liR0Z6ZEZWd1pHRjBaV1FpTENKd2NtVjJJaXdpWTNWeWNtVnVkQ0lzSW05dVZYQmtZWFJsSWl3aWNHRnpjMmwyWlNJc0luVndaR0YwWlNJc0luSmxaMmx6ZEdWeVFXTjBhVzl1SWl3aWMyVjBJaXdpWjJWMElpd2labWx5WlV4cGMzUmxibVZ5Y3lJc0lsOXBjMEZqZEdsMlpTSXNJbWx6UVdOMGFXOXVRMjl0Y0d4bGRHVWlMQ0pqYjIxd2JHVjBaU0lzSW1OdmJuTjBjblZqZEc5eUlpd2laR1ZtWVhWc2RGQnliM0J6SWl3aWMyVjBVSEp2Y0hNaUxDSm1jbTl0SWl3aWMzUmhjblFpTENKdmJsTjBZWEowSWl3aVgyOXVVM1JoY25RaUxDSnpkRzl3SWl3aWIyNVRkRzl3SWl3aVgyOXVVM1J2Y0NJc0ltOXVRMjl0Y0d4bGRHVWlMQ0pmYjI1RGIyMXdiR1YwWlNJc0ltOTFkSEIxZENJc0ltWjFibU1pTENKMGNtRnVjMlp2Y20waUxDSm5aWFJDWldadmNtVlVjbUZ1YzJadmNtMGlMQ0oySWl3aVoyVjBVSEp2Y0NJc0ltdGxlU0lzSW1kbGRGWmxiRzlqYVhSNUlpd2lhWE5CWTNScGRtVWlMQ0p6ZFdKelkzSnBZbVVpTENKc2FYTjBaVzVsY2lJc0lteHBjM1JsYm1WeWN5SXNJbTUxYlV4cGMzUmxibVZ5Y3lJc0ltbHVaR1Y0VDJZaUxDSndkWE5vSWl3aWRXNXpkV0p6WTNKcFltVWlMQ0pzYVhOMFpXNWxja2x1WkdWNElpd2ljM0JzYVdObElpd2lhU0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPMEZCUTBFN096czdPenRKUVVWTlFTeE5PMEZCUVZNN1FVRkRZaXh2UWtGQmQwSTdRVUZCUVRzN1FVRkJRU3hSUVVGYVF5eExRVUZaTEhWRlFVRktMRVZCUVVrN08wRkJRVUU3TzBGQlFVRXNVMEZ4UkhoQ1F5eGxRWEpFZDBJc1IwRnhSRTRzV1VGQlRUdEJRVU4wUWl4WlFVRkxReXhYUVVGTUxFZEJRVzFDTEc5RFFVRnVRanRCUVVOQkxGbEJRVXRETEVsQlFVd3NSMEZCV1N4TlFVRkxReXhQUVVGcVFqczdRVUZHYzBJc2JVSkJTVkVzVFVGQlMwb3NTMEZLWWp0QlFVRkJMRlZCU1dSTExGRkJTbU1zVlVGSlpFRXNVVUZLWXp0QlFVRkJMRlZCU1VwRExFOUJTa2tzVlVGSlNrRXNUMEZLU1RzN08wRkJUWFJDTEZWQlFVa3NUVUZCUzBNc1RVRkJWQ3hGUVVGcFFqdEJRVU5tTEdOQlFVdElMRTlCUVV3c1IwRkJaU3hOUVVGTFJ5eE5RVUZNTEVOQlFWa3NUVUZCUzBnc1QwRkJha0lzUTBGQlpqdEJRVU5FT3p0QlFVVkVMRlZCUVVsRExGRkJRVW9zUlVGQll6dEJRVU5hTEZsQlFVbEJMRk5CUVZOSExHTkJRV0lzUlVGQk5rSTdRVUZETTBKSUxHMUNRVUZUU1N4SFFVRlVMRU5CUVdFc1RVRkJTME1zUjBGQlRDeEZRVUZpTzBGQlEwUXNVMEZHUkN4TlFVVlBPMEZCUTB4TUxHMUNRVUZUTEUxQlFVdExMRWRCUVV3c1JVRkJWRHRCUVVORU8wRkJRMFk3TzBGQlJVUXNXVUZCUzBNc1lVRkJURHM3UVVGRlFTeFZRVUZKTEVOQlFVTk1MRTlCUVVRc1NVRkJXU3hOUVVGTFRTeFRRVUZ5UWl4RlFVRm5RenRCUVVNNVFpeHpRMEZCWXl4TlFVRkxXQ3hsUVVGdVFqdEJRVU5FT3p0QlFVVkVMRlZCUVVrc1RVRkJTMWtzWjBKQlFVd3NTVUZCZVVJc1RVRkJTMEVzWjBKQlFVd3NSVUZCTjBJc1JVRkJjMFE3UVVGRGNFUXNZMEZCUzBNc1VVRkJURHRCUVVORU96dEJRVVZFTzBGQlEwUXNTMEZzUm5WQ096dEJRVU4wUWl4VFFVRkxaQ3hMUVVGTUxHZENRVU5MTEV0QlFVdGxMRmRCUVV3c1EwRkJhVUpETEZsQlJIUkNPenRCUVVsQkxGTkJRVXRETEZGQlFVd3NRMEZCWTJwQ0xFdEJRV1E3TzBGQlJVRXNVMEZCUzBVc1YwRkJUQ3hIUVVGdFFpeERRVUZ1UWp0QlFVTkJMRk5CUVV0RExFbEJRVXdzUjBGQldTeExRVUZMUXl4UFFVRk1MRWRCUVdWS0xFMUJRVTFKTEU5QlFVNHNTVUZCYVVKS0xFMUJRVTFyUWl4SlFVRjJRaXhKUVVFclFpeERRVUV4UkR0QlFVTkVPenR0UWtGRlJFTXNTeXh2UWtGQlVUdEJRVUZCTEd0Q1FVTnBReXhMUVVGTGJrSXNTMEZFZEVNN1FVRkJRU3hSUVVORmIwSXNUMEZFUml4WFFVTkZRU3hQUVVSR08wRkJRVUVzVVVGRFYwTXNVVUZFV0N4WFFVTlhRU3hSUVVSWU8wRkJRVUVzVVVGRGNVSm1MRTlCUkhKQ0xGZEJRM0ZDUVN4UFFVUnlRanM3TzBGQlIwNHNVVUZCU1N4RFFVRkRRU3hQUVVGTUxFVkJRV003UVVGRFdpeFhRVUZMVFN4VFFVRk1MRWRCUVdsQ0xFbEJRV3BDTzBGQlEwRXNiME5CUVdNc1MwRkJTMWdzWlVGQmJrSTdRVUZEUkRzN1FVRkZSQ3hSUVVGSkxFdEJRVXR0UWl4UFFVRlVMRVZCUVd0Q0xFdEJRVXRCTEU5QlFVdzdRVUZEYkVJc1VVRkJTVUVzVDBGQlNpeEZRVUZoUVN4UlFVRlJMRWxCUVZJN1FVRkRZaXhSUVVGSlF5eFJRVUZLTEVWQlFXTkJMRk5CUVZNc1NVRkJWRHM3UVVGRlpDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkVNc1NTeHRRa0ZCVHp0QlFVRkJMR3RDUVVOblF5eExRVUZMZEVJc1MwRkVja003UVVGQlFTeFJRVU5IZFVJc1RVRkVTQ3hYUVVOSFFTeE5RVVJJTzBGQlFVRXNVVUZEVjBNc1QwRkVXQ3hYUVVOWFFTeFBRVVJZTzBGQlFVRXNVVUZEYjBKc1FpeFBRVVJ3UWl4WFFVTnZRa0VzVDBGRWNFSTdPenRCUVVkTUxGRkJRVWtzUTBGQlEwRXNUMEZCVEN4RlFVRmpPMEZCUTFvc1YwRkJTMDBzVTBGQlRDeEhRVUZwUWl4TFFVRnFRanRCUVVOQkxEQkRRVUZ2UWl4TFFVRkxXQ3hsUVVGNlFqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1MwRkJTM05DTEUxQlFWUXNSVUZCYVVJc1MwRkJTMEVzVFVGQlREdEJRVU5xUWl4UlFVRkpRU3hOUVVGS0xFVkJRVmxCTEU5QlFVOHNTVUZCVUR0QlFVTmFMRkZCUVVsRExFOUJRVW9zUlVGQllVRXNVVUZCVVN4SlFVRlNPenRCUVVWaUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08yMUNRVVZFVml4UkxIVkNRVUZYTzBGQlFVRXNhMEpCUXpKQ0xFdEJRVXRrTEV0QlJHaERPMEZCUVVFc1VVRkRSSGxDTEZWQlJFTXNWMEZEUkVFc1ZVRkVRenRCUVVGQkxGRkJRMWRETEZkQlJGZ3NWMEZEVjBFc1YwRkVXRHM3TzBGQlIxUXNVMEZCUzBvc1NVRkJURHM3UVVGRlFTeFJRVUZKTEV0QlFVdEhMRlZCUVZRc1JVRkJjVUlzUzBGQlMwRXNWVUZCVER0QlFVTnlRaXhSUVVGSlFTeFZRVUZLTEVWQlFXZENRU3hYUVVGWExFbEJRVmc3UVVGRGFFSXNVVUZCU1VNc1YwRkJTaXhGUVVGcFFrRXNXVUZCV1N4SlFVRmFPenRCUVVWcVFpeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZwUTBSVUxGRXNNa0pCUVdsRE8wRkJRVUVzVVVGQmRFSmFMRkZCUVhOQ0xGRkJRWFJDUVN4UlFVRnpRanRCUVVGQkxGRkJRVlJNTEV0QlFWTTdPMEZCUXk5Q0xGTkJRVXRCTEV0QlFVd3NaMEpCUTBzc1MwRkJTMEVzUzBGRVZpeEZRVVZMUVN4TFFVWk1PenRCUVV0QkxGRkJRVWxMTEZGQlFVb3NSVUZCWXl4TFFVRkxjMElzVFVGQlRDeERRVUZaZEVJc1VVRkJXanM3UVVGRlpDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkhOQ0xFMHNiVUpCUVU5RExFa3NSVUZCVFR0QlFVTllMRk5CUVVzMVFpeExRVUZNTEVOQlFWZExMRkZCUVZnc1IwRkJjMEoxUWl4SlFVRjBRanRCUVVOQkxGRkJRVWxCTEV0QlFVdHdRaXhqUVVGVUxFVkJRWGxDYjBJc1MwRkJTM0JDTEdOQlFVd3NRMEZCYjBJc1NVRkJjRUk3TzBGQlJYcENMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMjFDUVVWRVJTeEhMR3RDUVVGTk8wRkJRVUVzVVVGRFNXMUNMRk5CUkVvc1IwRkRhMElzUzBGQlN6ZENMRXRCUkhaQ0xFTkJRMGsyUWl4VFFVUktPenRCUVVWS0xGZEJRVTlCTEZsQlFWbEJMRlZCUVZVc1MwRkJTM3BDTEU5QlFXWXNRMEZCV2l4SFFVRnpReXhMUVVGTFFTeFBRVUZzUkR0QlFVTkVMRWM3TzIxQ1FVVkVNRUlzYTBJc2FVTkJRWEZDTzBGQlEyNUNMRmRCUVU4c1MwRkJTekZDTEU5QlFWbzdRVUZEUkN4SE96dHRRa0ZGUkVzc1J5eG5Ra0ZCU1hOQ0xFTXNSVUZCUnp0QlFVTk1MRk5CUVVzelFpeFBRVUZNTEVkQlFXVXlRaXhEUVVGbU8wRkJRMEVzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YlVKQlJVUkRMRThzYjBKQlFWRkRMRWNzUlVGQlN6dEJRVU5ZTEZkQlFVOHNTMEZCUzJwRExFdEJRVXdzUTBGQlYybERMRWRCUVZnc1EwRkJVRHRCUVVORUxFYzdPMjFDUVVWRVF5eFhMREJDUVVGak8wRkJRMW9zVjBGQlR5d3dRa0ZCWlN4TFFVRkxPVUlzVDBGQlRDeEhRVUZsTEV0QlFVdEVMRWxCUVc1RExFVkJRWGxETEV0QlFVdEVMRmRCUVRsRExFTkJRVkE3UVVGRFJDeEhPenR0UWtGRlJHbERMRkVzZFVKQlFWYzdRVUZEVkN4WFFVRlBMRXRCUVV0MlFpeFRRVUZhTzBGQlEwUXNSenM3YlVKQlJVUjNRaXhUTEhOQ1FVRlZReXhSTEVWQlFWVTdRVUZEYkVJc1UwRkJTME1zVTBGQlRDeEhRVUZwUWl4TFFVRkxRU3hUUVVGTUxFbEJRV3RDTEVWQlFXNURPMEZCUTBFc1UwRkJTME1zV1VGQlRDeEhRVUZ2UWl4TFFVRkxRU3haUVVGTUxFbEJRWEZDTEVOQlFYcERPMEZCUTBFc1VVRkJTU3hMUVVGTFJDeFRRVUZNTEVOQlFXVkZMRTlCUVdZc1EwRkJkVUpJTEZGQlFYWkNMRTFCUVhGRExFTkJRVU1zUTBGQk1VTXNSVUZCTmtNN1FVRkRNME1zVjBGQlMwTXNVMEZCVEN4RFFVRmxSeXhKUVVGbUxFTkJRVzlDU2l4UlFVRndRanRCUVVOQkxGZEJRVXRGTEZsQlFVdzdRVUZEUkR0QlFVTkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMjFDUVVWRVJ5eFhMSGRDUVVGWlRDeFJMRVZCUVZVN1FVRkRjRUlzVVVGQlRVMHNaMEpCUVdsQ0xFdEJRVXRNTEZOQlFVNHNSMEZCYlVJc1MwRkJTMEVzVTBGQlRDeERRVUZsUlN4UFFVRm1MRU5CUVhWQ1NDeFJRVUYyUWl4RFFVRnVRaXhIUVVGelJDeERRVUZETEVOQlFUZEZPMEZCUTBFc1VVRkJTVTBzYTBKQlFXdENMRU5CUVVNc1EwRkJka0lzUlVGQk1FSTdRVUZEZUVJc1YwRkJTMG9zV1VGQlREdEJRVU5CTEZkQlFVdEVMRk5CUVV3c1EwRkJaVTBzVFVGQlppeERRVUZ6UWtRc1lVRkJkRUlzUlVGQmNVTXNRMEZCY2tNN1FVRkRSRHRCUVVORUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08yMUNRVVZFYUVNc1lTdzBRa0ZCWjBJN1FVRkRaQ3hSUVVGTlVDeFZRVUZWTEV0QlFVdE5MRWRCUVV3c1JVRkJhRUk3UVVGRFFTeFRRVUZMTEVsQlFVbHRReXhKUVVGSkxFTkJRV0lzUlVGQlowSkJMRWxCUVVrc1MwRkJTMDRzV1VGQmVrSXNSVUZCZFVOTkxFZEJRWFpETEVWQlFUUkRPMEZCUXpGRExGZEJRVXRRTEZOQlFVd3NRMEZCWlU4c1EwRkJaaXhGUVVGclFucERMRTlCUVd4Q0xFVkJRVEpDTEVsQlFUTkNPMEZCUTBRN1FVRkRSQ3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenM3T3p0clFrRkhXVXdzVFNJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJRzl1Um5KaGJXVlZjR1JoZEdVc0lHTmhibU5sYkU5dVJuSmhiV1ZWY0dSaGRHVXNJSFJwYldWVGFXNWpaVXhoYzNSR2NtRnRaU0I5SUdaeWIyMGdKMlp5WVcxbGMzbHVZeWM3WEc1cGJYQnZjblFnZXlCemNHVmxaRkJsY2xObFkyOXVaQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVZMnhoYzNNZ1FXTjBhVzl1SUhzZ0x5OGdiR0YzYzNWcGRDQXRJSE52Y25KNVhHNGdJR052Ym5OMGNuVmpkRzl5S0hCeWIzQnpJRDBnZTMwcElIdGNiaUFnSUNCMGFHbHpMbkJ5YjNCeklEMGdlMXh1SUNBZ0lDQWdMaTR1ZEdocGN5NWpiMjV6ZEhKMVkzUnZjaTVrWldaaGRXeDBVSEp2Y0hOY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnZEdocGN5NXpaWFJRY205d2N5aHdjbTl3Y3lrN1hHNWNiaUFnSUNCMGFHbHpMbXhoYzNSVmNHUmhkR1ZrSUQwZ01EdGNiaUFnSUNCMGFHbHpMbkJ5WlhZZ1BTQjBhR2x6TG1OMWNuSmxiblFnUFNCd2NtOXdjeTVqZFhKeVpXNTBJSHg4SUhCeWIzQnpMbVp5YjIwZ2ZId2dNRHRjYmlBZ2ZWeHVYRzRnSUhOMFlYSjBLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2diMjVUZEdGeWRDd2dYMjl1VTNSaGNuUXNJSEJoYzNOcGRtVWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCcFppQW9JWEJoYzNOcGRtVXBJSHRjYmlBZ0lDQWdJSFJvYVhNdVgybHpRV04wYVhabElEMGdkSEoxWlR0Y2JpQWdJQ0FnSUc5dVJuSmhiV1ZWY0dSaGRHVW9kR2hwY3k1elkyaGxaSFZzWldSVmNHUmhkR1VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbTl1VTNSaGNuUXBJSFJvYVhNdWIyNVRkR0Z5ZENncE8xeHVJQ0FnSUdsbUlDaHZibE4wWVhKMEtTQnZibE4wWVhKMEtIUm9hWE1wTzF4dUlDQWdJR2xtSUNoZmIyNVRkR0Z5ZENrZ1gyOXVVM1JoY25Rb2RHaHBjeWs3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lITjBiM0FvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJ2YmxOMGIzQXNJRjl2YmxOMGIzQXNJSEJoYzNOcGRtVWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCcFppQW9JWEJoYzNOcGRtVXBJSHRjYmlBZ0lDQWdJSFJvYVhNdVgybHpRV04wYVhabElEMGdabUZzYzJVN1hHNGdJQ0FnSUNCallXNWpaV3hQYmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11YzJOb1pXUjFiR1ZrVlhCa1lYUmxLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NXZibE4wYjNBcElIUm9hWE11YjI1VGRHOXdLQ2s3WEc0Z0lDQWdhV1lnS0c5dVUzUnZjQ2tnYjI1VGRHOXdLSFJvYVhNcE8xeHVJQ0FnSUdsbUlDaGZiMjVUZEc5d0tTQmZiMjVUZEc5d0tIUm9hWE1wTzF4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQmpiMjF3YkdWMFpTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHOXVRMjl0Y0d4bGRHVXNJRjl2YmtOdmJYQnNaWFJsSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdkR2hwY3k1emRHOXdLQ2s3WEc1Y2JpQWdJQ0JwWmlBb2RHaHBjeTV2YmtOdmJYQnNaWFJsS1NCMGFHbHpMbTl1UTI5dGNHeGxkR1VvS1R0Y2JpQWdJQ0JwWmlBb2IyNURiMjF3YkdWMFpTa2diMjVEYjIxd2JHVjBaU2gwYUdsektUdGNiaUFnSUNCcFppQW9YMjl1UTI5dGNHeGxkR1VwSUY5dmJrTnZiWEJzWlhSbEtIUm9hWE1wTzF4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnpZMmhsWkhWc1pXUlZjR1JoZEdVZ1BTQW9LU0E5UGlCN1hHNGdJQ0FnZEdocGN5NXNZWE4wVlhCa1lYUmxaQ0E5SUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNncE8xeHVJQ0FnSUhSb2FYTXVjSEpsZGlBOUlIUm9hWE11WTNWeWNtVnVkRHRjYmx4dUlDQWdJR052Ym5OMElIc2diMjVWY0dSaGRHVXNJSEJoYzNOcGRtVWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCcFppQW9kR2hwY3k1MWNHUmhkR1VwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRDQTlJSFJvYVhNdWRYQmtZWFJsS0hSb2FYTXVZM1Z5Y21WdWRDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLRzl1VlhCa1lYUmxLU0I3WEc0Z0lDQWdJQ0JwWmlBb2IyNVZjR1JoZEdVdWNtVm5hWE4wWlhKQlkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ2IyNVZjR1JoZEdVdWMyVjBLSFJvYVhNdVoyVjBLQ2twTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnYjI1VmNHUmhkR1VvZEdocGN5NW5aWFFvS1N3Z2RHaHBjeWs3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkR2hwY3k1bWFYSmxUR2x6ZEdWdVpYSnpLQ2s3WEc1Y2JpQWdJQ0JwWmlBb0lYQmhjM05wZG1VZ0ppWWdkR2hwY3k1ZmFYTkJZM1JwZG1VcElIdGNiaUFnSUNBZ0lHOXVSbkpoYldWVmNHUmhkR1VvZEdocGN5NXpZMmhsWkhWc1pXUlZjR1JoZEdVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBhR2x6TG1selFXTjBhVzl1UTI5dGNHeGxkR1VnSmlZZ2RHaHBjeTVwYzBGamRHbHZia052YlhCc1pYUmxLQ2twSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZMjl0Y0d4bGRHVW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZUdGNibHh1SUNCelpYUlFjbTl3Y3loN0lHOXVWWEJrWVhSbExDQXVMaTV3Y205d2N5QjlLU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeUE5SUh0Y2JpQWdJQ0FnSUM0dUxuUm9hWE11Y0hKdmNITXNYRzRnSUNBZ0lDQXVMaTV3Y205d2MxeHVJQ0FnSUgwN1hHNWNiaUFnSUNCcFppQW9iMjVWY0dSaGRHVXBJSFJvYVhNdWIzVjBjSFYwS0c5dVZYQmtZWFJsS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdiM1YwY0hWMEtHWjFibU1wSUh0Y2JpQWdJQ0IwYUdsekxuQnliM0J6TG05dVZYQmtZWFJsSUQwZ1puVnVZenRjYmlBZ0lDQnBaaUFvWm5WdVl5NXlaV2RwYzNSbGNrRmpkR2x2YmlrZ1puVnVZeTV5WldkcGMzUmxja0ZqZEdsdmJpaDBhR2x6S1R0Y2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdaMlYwS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnZEhKaGJuTm1iM0p0SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lISmxkSFZ5YmlCMGNtRnVjMlp2Y20wZ1B5QjBjbUZ1YzJadmNtMG9kR2hwY3k1amRYSnlaVzUwS1NBNklIUm9hWE11WTNWeWNtVnVkRHRjYmlBZ2ZWeHVYRzRnSUdkbGRFSmxabTl5WlZSeVlXNXpabTl5YlNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWpkWEp5Wlc1ME8xeHVJQ0I5WEc1Y2JpQWdjMlYwS0hZcElIdGNiaUFnSUNCMGFHbHpMbU4xY25KbGJuUWdQU0IyTzF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ1oyVjBVSEp2Y0NoclpYa3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV3Y205d2MxdHJaWGxkTzF4dUlDQjlYRzVjYmlBZ1oyVjBWbVZzYjJOcGRIa29LU0I3WEc0Z0lDQWdjbVYwZFhKdUlITndaV1ZrVUdWeVUyVmpiMjVrS0hSb2FYTXVZM1Z5Y21WdWRDQXRJSFJvYVhNdWNISmxkaXdnZEdocGN5NXNZWE4wVlhCa1lYUmxaQ2s3WEc0Z0lIMWNibHh1SUNCcGMwRmpkR2wyWlNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZhWE5CWTNScGRtVTdYRzRnSUgxY2JseHVJQ0J6ZFdKelkzSnBZbVVvYkdsemRHVnVaWElwSUh0Y2JpQWdJQ0IwYUdsekxteHBjM1JsYm1WeWN5QTlJSFJvYVhNdWJHbHpkR1Z1WlhKeklIeDhJRnRkTzF4dUlDQWdJSFJvYVhNdWJuVnRUR2x6ZEdWdVpYSnpJRDBnZEdocGN5NXVkVzFNYVhOMFpXNWxjbk1nZkh3Z01EdGNiaUFnSUNCcFppQW9kR2hwY3k1c2FYTjBaVzVsY25NdWFXNWtaWGhQWmloc2FYTjBaVzVsY2lrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbXhwYzNSbGJtVnljeTV3ZFhOb0tHeHBjM1JsYm1WeUtUdGNiaUFnSUNBZ0lIUm9hWE11Ym5WdFRHbHpkR1Z1WlhKekt5czdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdkVzV6ZFdKelkzSnBZbVVvYkdsemRHVnVaWElwSUh0Y2JpQWdJQ0JqYjI1emRDQnNhWE4wWlc1bGNrbHVaR1Y0SUQwZ0tIUm9hWE11YkdsemRHVnVaWEp6S1NBL0lIUm9hWE11YkdsemRHVnVaWEp6TG1sdVpHVjRUMllvYkdsemRHVnVaWElwSURvZ0xURTdYRzRnSUNBZ2FXWWdLR3hwYzNSbGJtVnlTVzVrWlhnZ0lUMDlJQzB4S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbTUxYlV4cGMzUmxibVZ5Y3kwdE8xeHVJQ0FnSUNBZ2RHaHBjeTVzYVhOMFpXNWxjbk11YzNCc2FXTmxLR3hwYzNSbGJtVnlTVzVrWlhnc0lERXBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJR1pwY21WTWFYTjBaVzVsY25Nb0tTQjdYRzRnSUNBZ1kyOXVjM1FnWTNWeWNtVnVkQ0E5SUhSb2FYTXVaMlYwS0NrN1hHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbTUxYlV4cGMzUmxibVZ5Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteHBjM1JsYm1WeWMxdHBYU2hqZFhKeVpXNTBMQ0IwYUdsektUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1FXTjBhVzl1TzF4dUlsMTlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zbW9vdGggPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBleHBvcnRzLmRpbGF0ZSA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuYW5nbGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG52YXIgdG9EZWNpbWFsID0gZnVuY3Rpb24gdG9EZWNpbWFsKG51bSkge1xuICB2YXIgcHJlY2lzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAyO1xuXG4gIHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xufTtcblxudmFyIFpFUk9fUE9JTlQgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHo6IDBcbn07XG5cbnZhciBkaXN0YW5jZTFEID0gZnVuY3Rpb24gZGlzdGFuY2UxRChhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuXG4gIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICBhcmUgYXQgMCwwXG5cbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xudmFyIGFuZ2xlID0gZXhwb3J0cy5hbmdsZSA9IGZ1bmN0aW9uIGFuZ2xlKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFpFUk9fUE9JTlQ7XG4gIHJldHVybiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYi55IC0gYS55LCBiLnggLSBhLngpKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIGRlZ3JlZXNUb1JhZGlhbnMoZGVncmVlcykge1xuICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG59O1xuXG4vKlxuICBEaWxhdGVcblxuICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG5cbiAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG5cbiAgYSAtLS0tLS0tLS0gYlxuXG4gIHRvXG5cbiAgYSAtLS0tIGJcblxuICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbnZhciBkaWxhdGUgPSBleHBvcnRzLmRpbGF0ZSA9IGZ1bmN0aW9uIGRpbGF0ZShhLCBiLCBkaWxhdGlvbikge1xuICByZXR1cm4gYSArIChiIC0gYSkgKiBkaWxhdGlvbjtcbn07XG5cbi8qXG4gIERpc3RhbmNlXG5cbiAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG5cbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xudmFyIGRpc3RhbmNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGZ1bmN0aW9uIGRpc3RhbmNlKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFpFUk9fUE9JTlQ7XG5cbiAgLy8gMUQgZGltZW5zaW9uc1xuICBpZiAoKDAsIF91dGlscy5pc051bSkoYSkpIHtcbiAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gIH0gZWxzZSB7XG4gICAgdmFyIHhEZWx0YSA9IGRpc3RhbmNlMUQoYS54LCBiLngpO1xuICAgIHZhciB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICB2YXIgekRlbHRhID0gKDAsIF91dGlscy5pc051bSkoYS56KSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coeERlbHRhLCAyKSArIE1hdGgucG93KHlEZWx0YSwgMikgKyBNYXRoLnBvdyh6RGVsdGEsIDIpKTtcbiAgfVxufTtcblxuLypcbiAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG5cbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cblxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0XG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiBnZXRQcm9ncmVzc0Zyb21WYWx1ZShmcm9tLCB0bywgdmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG59O1xuXG4vKlxuICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG5cbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcblxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbnZhciBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBmdW5jdGlvbiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhmcm9tLCB0bywgcHJvZ3Jlc3MpIHtcbiAgcmV0dXJuIC1wcm9ncmVzcyAqIGZyb20gKyBwcm9ncmVzcyAqIHRvICsgZnJvbTtcbn07XG5cbi8qXG4gIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG5cbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG52YXIgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGZ1bmN0aW9uIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2Uob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICByZXR1cm4ge1xuICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICB9O1xufTtcblxuLypcbiAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcblxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gcmFkaWFuc1RvRGVncmVlcyhyYWRpYW5zKSB7XG4gIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbn07XG5cbi8qXG4gIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiBzbW9vdGgobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbikge1xuICB2YXIgc21vb3RoaW5nID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuICByZXR1cm4gdG9EZWNpbWFsKG9sZFZhbHVlICsgZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZnVuY3Rpb24gc3BlZWRQZXJGcmFtZSh4cHMsIGZyYW1lRHVyYXRpb24pIHtcbiAgcmV0dXJuICgwLCBfdXRpbHMuaXNOdW0pKHhwcykgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcbn07XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGZ1bmN0aW9uIHNwZWVkUGVyU2Vjb25kKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSB7XG4gIHJldHVybiBmcmFtZUR1cmF0aW9uID8gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcbn07XG5cbi8qXG4gIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG5cbiAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG52YXIgc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBmdW5jdGlvbiBzdGVwUHJvZ3Jlc3Moc3RlcHMsIHByb2dyZXNzKSB7XG4gIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICB2YXIgdGFyZ2V0ID0gMSAtIDEgLyBzdGVwcztcbiAgdmFyIHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZZMkZzWXk1cWN5SmRMQ0p1WVcxbGN5STZXeUowYjBSbFkybHRZV3dpTENKdWRXMGlMQ0p3Y21WamFYTnBiMjRpTENKTllYUm9JaXdpY205MWJtUWlMQ0phUlZKUFgxQlBTVTVVSWl3aWVDSXNJbmtpTENKNklpd2laR2x6ZEdGdVkyVXhSQ0lzSW1FaUxDSmlJaXdpWVdKeklpd2lZVzVuYkdVaUxDSnlZV1JwWVc1elZHOUVaV2R5WldWeklpd2lZWFJoYmpJaUxDSmtaV2R5WldWelZHOVNZV1JwWVc1eklpd2laR1ZuY21WbGN5SXNJbEJKSWl3aVpHbHNZWFJsSWl3aVpHbHNZWFJwYjI0aUxDSmthWE4wWVc1alpTSXNJbmhFWld4MFlTSXNJbmxFWld4MFlTSXNJbnBFWld4MFlTSXNJbk54Y25RaUxDSm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU0lzSW1aeWIyMGlMQ0owYnlJc0luWmhiSFZsSWl3aVoyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTWlMQ0p3Y205bmNtVnpjeUlzSW5CdmFXNTBSbkp2YlVGdVoyeGxRVzVrUkdsemRHRnVZMlVpTENKdmNtbG5hVzRpTENKamIzTWlMQ0p6YVc0aUxDSnlZV1JwWVc1eklpd2ljMjF2YjNSb0lpd2libVYzVm1Gc2RXVWlMQ0p2YkdSV1lXeDFaU0lzSW1SMWNtRjBhVzl1SWl3aWMyMXZiM1JvYVc1bklpd2liV0Y0SWl3aWMzQmxaV1JRWlhKR2NtRnRaU0lzSW5od2N5SXNJbVp5WVcxbFJIVnlZWFJwYjI0aUxDSnpjR1ZsWkZCbGNsTmxZMjl1WkNJc0luWmxiRzlqYVhSNUlpd2ljM1JsY0ZCeWIyZHlaWE56SWl3aWMzUmxjSE1pTENKelpXZHRaVzUwSWl3aWRHRnlaMlYwSWl3aWNISnZaM0psYzNOUFpsUmhjbWRsZENJc0ltMXBiaUlzSW1ac2IyOXlJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96dEJRVVZCT3pzN096czdPMEZCVDBFc1NVRkJUVUVzV1VGQldTeFRRVUZhUVN4VFFVRlpMRU5CUVVORExFZEJRVVFzUlVGQmQwSTdRVUZCUVN4TlFVRnNRa01zVTBGQmEwSXNkVVZCUVU0c1EwRkJUVHM3UVVGRGVFTkJMSFZDUVVGWkxFVkJRVm9zUlVGQmEwSkJMRk5CUVd4Q08wRkJRMEVzVTBGQlQwTXNTMEZCUzBNc1MwRkJUQ3hEUVVGWFNDeE5RVUZOUXl4VFFVRnFRaXhKUVVFNFFrRXNVMEZCY2tNN1FVRkRSQ3hEUVVoRU96dEJRVXRCTEVsQlFVMUhMR0ZCUVdFN1FVRkRha0pETEV0QlFVY3NRMEZFWXp0QlFVVnFRa01zUzBGQlJ5eERRVVpqTzBGQlIycENReXhMUVVGSE8wRkJTR01zUTBGQmJrSTdPMEZCVFVFc1NVRkJUVU1zWVVGQllTeFRRVUZpUVN4VlFVRmhMRU5CUVVORExFTkJRVVFzUlVGQlNVTXNRMEZCU2p0QlFVRkJMRk5CUVZWU0xFdEJRVXRUTEVkQlFVd3NRMEZCVTBZc1NVRkJTVU1zUTBGQllpeERRVUZXTzBGQlFVRXNRMEZCYmtJN08wRkJSVUU3T3pzN096czdPenM3UVVGVlR5eEpRVUZOUlN4M1FrRkJVU3hUUVVGU1FTeExRVUZSTEVOQlFVTklMRU5CUVVRN1FVRkJRU3hOUVVGSlF5eERRVUZLTEhWRlFVRlJUaXhWUVVGU08wRkJRVUVzVTBGQmRVSlRMR2xDUVVGcFFsZ3NTMEZCUzFrc1MwRkJUQ3hEUVVGWFNpeEZRVUZGU2l4RFFVRkdMRWRCUVUxSExFVkJRVVZJTEVOQlFXNUNMRVZCUVhOQ1NTeEZRVUZGVEN4RFFVRkdMRWRCUVUxSkxFVkJRVVZLTEVOQlFUbENMRU5CUVdwQ0xFTkJRWFpDTzBGQlFVRXNRMEZCWkRzN1FVRkZVRHM3T3pzN08wRkJUVThzU1VGQlRWVXNPRU5CUVcxQ0xGTkJRVzVDUVN4blFrRkJiVUlzUTBGQlEwTXNUMEZCUkR0QlFVRkJMRk5CUVdGQkxGVkJRVlZrTEV0QlFVdGxMRVZCUVdZc1IwRkJiMElzUjBGQmFrTTdRVUZCUVN4RFFVRjZRanM3UVVGRlVEczdPenM3T3pzN096czdPenM3T3pzN08wRkJhMEpQTEVsQlFVMURMREJDUVVGVExGTkJRVlJCTEUxQlFWTXNRMEZCUTFRc1EwRkJSQ3hGUVVGSlF5eERRVUZLTEVWQlFVOVRMRkZCUVZBN1FVRkJRU3hUUVVGdlFsWXNTVUZCU3l4RFFVRkRReXhKUVVGSlJDeERRVUZNTEVsQlFWVlZMRkZCUVc1RE8wRkJRVUVzUTBGQlpqczdRVUZGVURzN096czdPenM3TzBGQlUwOHNTVUZCVFVNc09FSkJRVmNzVTBGQldFRXNVVUZCVnl4RFFVRkRXQ3hEUVVGRUxFVkJRWFZDTzBGQlFVRXNUVUZCYmtKRExFTkJRVzFDTEhWRlFVRm1UaXhWUVVGbE96dEJRVU0zUXp0QlFVTkJMRTFCUVVrc2EwSkJRVTFMTEVOQlFVNHNRMEZCU2l4RlFVRmpPMEZCUTFvc1YwRkJUMFFzVjBGQlYwTXNRMEZCV0N4RlFVRmpReXhEUVVGa0xFTkJRVkE3TzBGQlJVWTdRVUZEUXl4SFFVcEVMRTFCU1U4N1FVRkRUQ3hSUVVGTlZ5eFRRVUZUWWl4WFFVRlhReXhGUVVGRlNpeERRVUZpTEVWQlFXZENTeXhGUVVGRlRDeERRVUZzUWl4RFFVRm1PMEZCUTBFc1VVRkJUV2xDTEZOQlFWTmtMRmRCUVZkRExFVkJRVVZJTEVOQlFXSXNSVUZCWjBKSkxFVkJRVVZLTEVOQlFXeENMRU5CUVdZN1FVRkRRU3hSUVVGTmFVSXNVMEZCVlN4clFrRkJUV1FzUlVGQlJVWXNRMEZCVWl4RFFVRkVMRWRCUVdWRExGZEJRVmRETEVWQlFVVkdMRU5CUVdJc1JVRkJaMEpITEVWQlFVVklMRU5CUVd4Q0xFTkJRV1lzUjBGQmMwTXNRMEZCY2tRN08wRkJSVUVzVjBGQlQwd3NTMEZCUzNOQ0xFbEJRVXdzUTBGQlZTeFRRVUZEU0N4TlFVRkVMRVZCUVZjc1EwRkJXQ3hoUVVGcFFrTXNUVUZCYWtJc1JVRkJNa0lzUTBGQk0wSXNZVUZCYVVORExFMUJRV3BETEVWQlFUSkRMRU5CUVRORExFTkJRVllzUTBGQlVEdEJRVU5FTzBGQlEwWXNRMEZpVFRzN1FVRmxVRHM3T3pzN096czdPenM3TzBGQldVOHNTVUZCVFVVc2MwUkJRWFZDTEZOQlFYWkNRU3h2UWtGQmRVSXNRMEZCUTBNc1NVRkJSQ3hGUVVGUFF5eEZRVUZRTEVWQlFWZERMRXRCUVZnN1FVRkJRU3hUUVVGeFFpeERRVUZEUVN4UlFVRlJSaXhKUVVGVUxFdEJRV3RDUXl4TFFVRkxSQ3hKUVVGMlFpeERRVUZ5UWp0QlFVRkJMRU5CUVRkQ096dEJRVVZRT3pzN096czdPenM3T3p0QlFWZFBMRWxCUVUxSExITkVRVUYxUWl4VFFVRjJRa0VzYjBKQlFYVkNMRU5CUVVOSUxFbEJRVVFzUlVGQlQwTXNSVUZCVUN4RlFVRlhSeXhSUVVGWU8wRkJRVUVzVTBGQmVVSXNRMEZCUlVFc1VVRkJSaXhIUVVGaFNpeEpRVUZrTEVkQlFYVkNTU3hYUVVGWFNDeEZRVUZzUXl4SFFVRjNRMFFzU1VGQmFFVTdRVUZCUVN4RFFVRTNRanM3UVVGRlVEczdPenM3T3pzN1FVRlJUeXhKUVVGTlN5eG5SVUZCTkVJc1UwRkJOVUpCTEhsQ1FVRTBRaXhEUVVGRFF5eE5RVUZFTEVWQlFWTndRaXhMUVVGVUxFVkJRV2RDVVN4UlFVRm9RaXhGUVVFMlFqdEJRVU53UlZJc1ZVRkJVVWNzYVVKQlFXbENTQ3hMUVVGcVFpeERRVUZTT3p0QlFVVkJMRk5CUVU4N1FVRkRURkFzVDBGQlIyVXNWMEZCVjJ4Q0xFdEJRVXNyUWl4SFFVRk1MRU5CUVZOeVFpeExRVUZVTEVOQlFWZ3NSMEZCTmtKdlFpeFBRVUZQTTBJc1EwRkViRU03UVVGRlRFTXNUMEZCUjJNc1YwRkJWMnhDTEV0QlFVdG5ReXhIUVVGTUxFTkJRVk4wUWl4TFFVRlVMRU5CUVZnc1IwRkJOa0p2UWl4UFFVRlBNVUk3UVVGR2JFTXNSMEZCVUR0QlFVbEVMRU5CVUUwN08wRkJVMUE3T3pzN096dEJRVTFQTEVsQlFVMVBMRGhEUVVGdFFpeFRRVUZ1UWtFc1owSkJRVzFDTEVOQlFVTnpRaXhQUVVGRU8wRkJRVUVzVTBGQllVRXNWVUZCVlN4SFFVRldMRWRCUVdkQ2FrTXNTMEZCUzJVc1JVRkJiRU03UVVGQlFTeERRVUY2UWpzN1FVRkZVRHM3T3pzN096czdRVUZSVHl4SlFVRk5iVUlzTUVKQlFWTXNVMEZCVkVFc1RVRkJVeXhEUVVGRFF5eFJRVUZFTEVWQlFWZERMRkZCUVZnc1JVRkJjVUpETEZGQlFYSkNPMEZCUVVFc1RVRkJLMEpETEZOQlFTOUNMSFZGUVVFeVF5eERRVUV6UXp0QlFVRkJMRk5CUVdsRWVrTXNWVUZCVlhWRExGZEJRVmxETEZsQlFWbEdMRmRCUVZkRExGRkJRWFpDTEVsQlFXMURjRU1zUzBGQlMzVkRMRWRCUVV3c1EwRkJVMFFzVTBGQlZDeEZRVUZ2UWtRc1VVRkJjRUlzUTBGQmVrUXNRMEZCYWtRN1FVRkJRU3hEUVVGbU96dEJRVVZRT3pzN096czdRVUZOVHl4SlFVRk5SeXgzUTBGQlowSXNVMEZCYUVKQkxHRkJRV2RDTEVOQlFVTkRMRWRCUVVRc1JVRkJUVU1zWVVGQlRqdEJRVUZCTEZOQlFYbENMR3RDUVVGTlJDeEhRVUZPTEVOQlFVUXNSMEZCWlVFc1QwRkJUeXhQUVVGUFF5eGhRVUZrTEVOQlFXWXNSMEZCT0VNc1EwRkJkRVU3UVVGQlFTeERRVUYwUWpzN1FVRkZVRHM3T3pzN08wRkJUVThzU1VGQlRVTXNNRU5CUVdsQ0xGTkJRV3BDUVN4alFVRnBRaXhEUVVGRFF5eFJRVUZFTEVWQlFWZEdMR0ZCUVZnN1FVRkJRU3hUUVVFMlFrRXNaMEpCUVdkQ1JTeFpRVUZaTEU5QlFVOUdMR0ZCUVc1Q0xFTkJRV2hDTEVkQlFXOUVMRU5CUVdwR08wRkJRVUVzUTBGQmRrSTdPMEZCUlZBN096czdPenM3UVVGUFR5eEpRVUZOUnl4elEwRkJaU3hUUVVGbVFTeFpRVUZsTEVOQlFVTkRMRXRCUVVRc1JVRkJVV3hDTEZGQlFWSXNSVUZCY1VJN1FVRkRMME1zVFVGQlRXMUNMRlZCUVZVc1MwRkJTMFFzVVVGQlVTeERRVUZpTEVOQlFXaENPMEZCUTBFc1RVRkJUVVVzVTBGQlV5eEpRVUZMTEVsQlFVbEdMRXRCUVhoQ08wRkJRMEVzVFVGQlRVY3NiVUpCUVcxQ2FrUXNTMEZCUzJ0RUxFZEJRVXdzUTBGQlUzUkNMRmRCUVZkdlFpeE5RVUZ3UWl4RlFVRTBRaXhEUVVFMVFpeERRVUY2UWpzN1FVRkZRU3hUUVVGUGFFUXNTMEZCUzIxRUxFdEJRVXdzUTBGQlYwWXNiVUpCUVcxQ1JpeFBRVUU1UWl4SlFVRjVRMEVzVDBGQmFFUTdRVUZEUkN4RFFVNU5JaXdpWm1sc1pTSTZJbU5oYkdNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCcGMwNTFiU0I5SUdaeWIyMGdKeTR2ZFhScGJITW5PMXh1WEc0dktseHVJQ0JEYjI1MlpYSjBJRzUxYldKbGNpQjBieUI0SUdSbFkybHRZV3dnY0d4aFkyVnpYRzVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFZ4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZFhHNHFMMXh1WTI5dWMzUWdkRzlFWldOcGJXRnNJRDBnS0c1MWJTd2djSEpsWTJsemFXOXVJRDBnTWlrZ1BUNGdlMXh1SUNCd2NtVmphWE5wYjI0Z1BTQXhNQ0FxS2lCd2NtVmphWE5wYjI0N1hHNGdJSEpsZEhWeWJpQk5ZWFJvTG5KdmRXNWtLRzUxYlNBcUlIQnlaV05wYzJsdmJpa2dMeUJ3Y21WamFYTnBiMjQ3WEc1OU8xeHVYRzVqYjI1emRDQmFSVkpQWDFCUFNVNVVJRDBnZTF4dUlDQjRPaUF3TEZ4dUlDQjVPaUF3TEZ4dUlDQjZPaUF3WEc1OU8xeHVYRzVqYjI1emRDQmthWE4wWVc1alpURkVJRDBnS0dFc0lHSXBJRDArSUUxaGRHZ3VZV0p6S0dFZ0xTQmlLVHRjYmx4dUx5cGNiaUFnUVc1bmJHVWdZbVYwZDJWbGJpQndiMmx1ZEhOY2JseHVJQ0JVY21GdWMyeGhkR1Z6SUhSb1pTQm9lWEJ2ZEdobGRHbGpZV3dnYkdsdVpTQnpieUIwYUdGMElIUm9aU0FuWm5KdmJTY2dZMjl2Y21ScGJtRjBaWE5jYmlBZ1lYSmxJR0YwSURBc01GeHVYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjI5eVpHbHVZWFJsY3lCdlppQm1jbTl0SUhCdmFXNTBYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjNKa2FXNWhkR1Z6SUc5bUlIUnZJSEJ2YVc1MFhHNGdJRUJ5WlhSMWNtNGdXM0poWkdsaGJsMDZJRUZ1WjJ4bElHSmxkSGRsWlc0Z2RHaGxJSFIzYnlCd2IybHVkSE1nYVc0Z2NtRmthV0Z1YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCaGJtZHNaU0E5SUNoaExDQmlJRDBnV2tWU1QxOVFUMGxPVkNrZ1BUNGdjbUZrYVdGdWMxUnZSR1ZuY21WbGN5aE5ZWFJvTG1GMFlXNHlLR0l1ZVNBdElHRXVlU3dnWWk1NElDMGdZUzU0S1NrN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ1pHVm5jbVZsY3lCMGJ5QnlZV1JwWVc1elhHNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJrWldkeVpXVnpYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUhKaFpHbGhibk5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdWbmNtVmxjMVJ2VW1Ga2FXRnVjeUE5SUNoa1pXZHlaV1Z6S1NBOVBpQmtaV2R5WldWeklDb2dUV0YwYUM1UVNTQXZJREU0TUR0Y2JseHVMeXBjYmlBZ1JHbHNZWFJsWEc1Y2JpQWdRMmhoYm1kbElIUm9aU0J3Y205bmNtVnpjMmx2YmlCaVpYUjNaV1Z1SUdFZ1lXNWtJR0lnWVdOamIzSmthVzVuSUhSdklHUnBiR0YwYVc5dUxseHVYRzRnSUZOdklHUnBiR0YwYVc5dUlEMGdNQzQxSUhkdmRXeGtJR05vWVc1blpWeHVYRzRnSUdFZ0xTMHRMUzB0TFMwdElHSmNibHh1SUNCMGIxeHVYRzRnSUdFZ0xTMHRMU0JpWEc1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlFjbVYyYVc5MWN5QjJZV3gxWlZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFTjFjbkpsYm5RZ2RtRnNkV1ZjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCRWFXeGhkR1VnY0hKdlozSmxjM01nWW5rZ2VGeHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJRY21WMmFXOTFjeUIyWVd4MVpTQndiSFZ6SUhSb1pTQmthV3hoZEdWa0lHUnBabVpsY21WdVkyVmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaR2xzWVhSbElEMGdLR0VzSUdJc0lHUnBiR0YwYVc5dUtTQTlQaUJoSUNzZ0tDaGlJQzBnWVNrZ0tpQmthV3hoZEdsdmJpazdYRzVjYmk4cVhHNGdJRVJwYzNSaGJtTmxYRzVjYmlBZ1VtVjBkWEp1Y3lCMGFHVWdaR2x6ZEdGdVkyVWdZbVYwZDJWbGJpQjBkMjhnYmlCa2FXMWxibk5wYjI1aGJDQndiMmx1ZEhNdVhHNWNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUXZiblZ0WW1WeVhUb2dlQ0JoYm1RZ2VTQnZjaUJxZFhOMElIZ2diMllnY0c5cGJuUWdRVnh1SUNCQWNHRnlZVzBnVzI5aWFtVmpkQzl1ZFcxaVpYSmRPaUFvYjNCMGFXOXVZV3dwT2lCNElHRnVaQ0I1SUc5eUlHcDFjM1FnZUNCdlppQndiMmx1ZENCQ1hHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlJvWlNCa2FYTjBZVzVqWlNCaVpYUjNaV1Z1SUhSb1pTQjBkMjhnY0c5cGJuUnpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1JwYzNSaGJtTmxJRDBnS0dFc0lHSWdQU0JhUlZKUFgxQlBTVTVVS1NBOVBpQjdYRzRnSUM4dklERkVJR1JwYldWdWMybHZibk5jYmlBZ2FXWWdLR2x6VG5WdEtHRXBLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHUnBjM1JoYm1ObE1VUW9ZU3dnWWlrN1hHNWNiaUFnTHk4Z1RYVnNkR2t0WkdsdFpXNXphVzl1WVd4Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCamIyNXpkQ0I0UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVDd2dZaTU0S1R0Y2JpQWdJQ0JqYjI1emRDQjVSR1ZzZEdFZ1BTQmthWE4wWVc1alpURkVLR0V1ZVN3Z1lpNTVLVHRjYmlBZ0lDQmpiMjV6ZENCNlJHVnNkR0VnUFNBb2FYTk9kVzBvWVM1NktTa2dQeUJrYVhOMFlXNWpaVEZFS0dFdWVpd2dZaTU2S1NBNklEQTdYRzVjYmlBZ0lDQnlaWFIxY200Z1RXRjBhQzV6Y1hKMEtDaDRSR1ZzZEdFZ0tpb2dNaWtnS3lBb2VVUmxiSFJoSUNvcUlESXBJQ3NnS0hwRVpXeDBZU0FxS2lBeUtTazdYRzRnSUgxY2JuMDdYRzVjYmk4cVhHNGdJRkJ5YjJkeVpYTnpJSGRwZEdocGJpQm5hWFpsYmlCeVlXNW5aVnh1WEc0Z0lFZHBkbVZ1SUdFZ2JHOTNaWElnYkdsdGFYUWdZVzVrSUdGdUlIVndjR1Z5SUd4cGJXbDBMQ0IzWlNCeVpYUjFjbTRnZEdobElIQnliMmR5WlhOelhHNGdJQ2hsZUhCeVpYTnpaV1FnWVhNZ1lTQnVkVzFpWlhJZ01DMHhLU0J5WlhCeVpYTmxiblJsWkNCaWVTQjBhR1VnWjJsMlpXNGdkbUZzZFdVc0lHRnVaRnh1SUNCc2FXMXBkQ0IwYUdGMElIQnliMmR5WlhOeklIUnZJSGRwZEdocGJpQXdMVEV1WEc1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQk1iM2RsY2lCc2FXMXBkRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWd2NHVnlJR3hwYldsMFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2RHOGdabWx1WkNCd2NtOW5jbVZ6Y3lCM2FYUm9hVzRnWjJsMlpXNGdjbUZ1WjJWY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTWdiMllnZG1Gc2RXVWdkMmwwYUdsdUlISmhibWRsSUdGeklHVjRjSEpsYzNObFpDQXdMVEZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVZ1BTQW9abkp2YlN3Z2RHOHNJSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdMU0JtY205dEtTQXZJQ2gwYnlBdElHWnliMjBwTzF4dVhHNHZLbHh1SUNCV1lXeDFaU0JwYmlCeVlXNW5aU0JtY205dElIQnliMmR5WlhOelhHNWNiaUFnUjJsMlpXNGdZU0JzYjNkbGNpQnNhVzFwZENCaGJtUWdZVzRnZFhCd1pYSWdiR2x0YVhRc0lIZGxJSEpsZEhWeWJpQjBhR1VnZG1Gc2RXVWdkMmwwYUdsdVhHNGdJSFJvWVhRZ2NtRnVaMlVnWVhNZ1pYaHdjbVZ6YzJWa0lHSjVJSEJ5YjJkeVpYTnpJQ2hoSUc1MWJXSmxjaUJtY205dElEQXRNU2xjYmx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeHZkMlZ5SUd4cGJXbDBJRzltSUhKaGJtZGxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlhCd1pYSWdiR2x0YVhRZ2IyWWdjbUZ1WjJWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlVhR1VnY0hKdlozSmxjM01nWW1WMGQyVmxiaUJzYjNkbGNpQmhibVFnZFhCd1pYSWdiR2x0YVhSeklHVjRjSEpsYzNObFpDQXdMVEZjYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnWVhNZ1kyRnNZM1ZzWVhSbFpDQm1jbTl0SUhCeWIyZHlaWE56SUhkcGRHaHBiaUJ5WVc1blpTQW9ibTkwSUd4cGJXbDBaV1FnZDJsMGFHbHVJSEpoYm1kbEtWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeUE5SUNobWNtOXRMQ0IwYnl3Z2NISnZaM0psYzNNcElEMCtJQ2d0SUhCeWIyZHlaWE56SUNvZ1puSnZiU2tnS3lBb2NISnZaM0psYzNNZ0tpQjBieWtnS3lCbWNtOXRPMXh1WEc0dktseHVJQ0JRYjJsdWRDQm1jbTl0SUdGdVoyeGxJR0Z1WkNCa2FYTjBZVzVqWlZ4dVhHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dNa1FnY0c5cGJuUWdiMllnYjNKcFoybHVYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUVc1bmJHVWdabkp2YlNCdmNtbG5hVzVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCRWFYTjBZVzVqWlNCbWNtOXRJRzl5YVdkcGJseHVJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRPaUJEWVd4amRXeGhkR1ZrSURKRUlIQnZhVzUwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhCdmFXNTBSbkp2YlVGdVoyeGxRVzVrUkdsemRHRnVZMlVnUFNBb2IzSnBaMmx1TENCaGJtZHNaU3dnWkdsemRHRnVZMlVwSUQwK0lIdGNiaUFnWVc1bmJHVWdQU0JrWldkeVpXVnpWRzlTWVdScFlXNXpLR0Z1WjJ4bEtUdGNibHh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJSGc2SUdScGMzUmhibU5sSUNvZ1RXRjBhQzVqYjNNb1lXNW5iR1VwSUNzZ2IzSnBaMmx1TG5nc1hHNGdJQ0FnZVRvZ1pHbHpkR0Z1WTJVZ0tpQk5ZWFJvTG5OcGJpaGhibWRzWlNrZ0t5QnZjbWxuYVc0dWVWeHVJQ0I5TzF4dWZUdGNibHh1THlwY2JpQWdRMjl1ZG1WeWRDQnlZV1JwWVc1eklIUnZJR1JsWjNKbFpYTmNibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUhKaFpHbGhibk5jYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z1pHVm5jbVZsYzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCeVlXUnBZVzV6Vkc5RVpXZHlaV1Z6SUQwZ0tISmhaR2xoYm5NcElEMCtJSEpoWkdsaGJuTWdLaUF4T0RBZ0x5Qk5ZWFJvTGxCSk8xeHVYRzR2S2x4dUlDQkdjbUZ0WlhKaGRHVXRhVzVrWlhCbGJtUmxiblFnYzIxdmIzUm9hVzVuWEc1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQk9aWGNnZG1Gc2RXVmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJQYkdRZ2RtRnNkV1ZjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCR2NtRnRaU0JrZFhKaGRHbHZibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDBnS0c5d2RHbHZibUZzS1RvZ1UyMXZiM1JvYVc1bklDZ3dJR2x6SUc1dmJtVXBYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE50YjI5MGFDQTlJQ2h1WlhkV1lXeDFaU3dnYjJ4a1ZtRnNkV1VzSUdSMWNtRjBhVzl1TENCemJXOXZkR2hwYm1jZ1BTQXdLU0E5UGlCMGIwUmxZMmx0WVd3b2IyeGtWbUZzZFdVZ0t5QW9aSFZ5WVhScGIyNGdLaUFvYm1WM1ZtRnNkV1VnTFNCdmJHUldZV3gxWlNrZ0x5Qk5ZWFJvTG0xaGVDaHpiVzl2ZEdocGJtY3NJR1IxY21GMGFXOXVLU2twTzF4dVhHNHZLbHh1SUNCRGIyNTJaWEowSUhnZ2NHVnlJSE5sWTI5dVpDQjBieUJ3WlhJZ1puSmhiV1VnZG1Wc2IyTnBkSGtnWW1GelpXUWdiMjRnWm5CelhHNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWYm1sMElIQmxjaUJ6WldOdmJtUmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJHY21GdFpTQmtkWEpoZEdsdmJpQnBiaUJ0YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemNHVmxaRkJsY2taeVlXMWxJRDBnS0hod2N5d2dabkpoYldWRWRYSmhkR2x2YmlrZ1BUNGdLR2x6VG5WdEtIaHdjeWtwSUQ4Z2VIQnpJQzhnS0RFd01EQWdMeUJtY21GdFpVUjFjbUYwYVc5dUtTQTZJREE3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnZG1Wc2IyTnBkSGtnYVc1MGJ5QjJaV3hwWTJsMGVTQndaWElnYzJWamIyNWtYRzVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmJtbDBJSEJsY2lCbWNtRnRaVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVaeVlXMWxJR1IxY21GMGFXOXVJR2x1SUcxelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITndaV1ZrVUdWeVUyVmpiMjVrSUQwZ0tIWmxiRzlqYVhSNUxDQm1jbUZ0WlVSMWNtRjBhVzl1S1NBOVBpQm1jbUZ0WlVSMWNtRjBhVzl1SUQ4Z2RtVnNiMk5wZEhrZ0tpQW9NVEF3TUNBdklHWnlZVzFsUkhWeVlYUnBiMjRwSURvZ01EdGNibHh1THlwY2JpQWdRM0psWVhSbElITjBaWEJ3WldRZ2RtVnljMmx2YmlCdlppQXdMVEVnY0hKdlozSmxjM05jYmx4dUlDQkFjR0Z5WVcwZ1cybHVkRjA2SUU1MWJXSmxjaUJ2WmlCemRHVndjMXh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVOMWNuSmxiblFnZG1Gc2RXVmNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVTNSbGNIQmxaQ0IyWVd4MVpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpkR1Z3VUhKdlozSmxjM01nUFNBb2MzUmxjSE1zSUhCeWIyZHlaWE56S1NBOVBpQjdYRzRnSUdOdmJuTjBJSE5sWjIxbGJuUWdQU0F4SUM4Z0tITjBaWEJ6SUMwZ01TazdYRzRnSUdOdmJuTjBJSFJoY21kbGRDQTlJREVnTFNBb01TQXZJSE4wWlhCektUdGNiaUFnWTI5dWMzUWdjSEp2WjNKbGMzTlBabFJoY21kbGRDQTlJRTFoZEdndWJXbHVLSEJ5YjJkeVpYTnpJQzhnZEdGeVoyVjBMQ0F4S1R0Y2JseHVJQ0J5WlhSMWNtNGdUV0YwYUM1bWJHOXZjaWh3Y205bmNtVnpjMDltVkdGeVoyVjBJQzhnYzJWbmJXVnVkQ2tnS2lCelpXZHRaVzUwTzF4dWZUdGNiaUpkZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luYy9jYWxjLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5iZXppZXIgPSBleHBvcnRzLmJsZW5kQ29sb3IgPSBleHBvcnRzLmFscGhhID0gZXhwb3J0cy5jb2xvciA9IGV4cG9ydHMuaHNsYSA9IGV4cG9ydHMucmdiYSA9IGV4cG9ydHMucmdiVW5pdCA9IGV4cG9ydHMucHggPSBleHBvcnRzLmRlZ3JlZXMgPSBleHBvcnRzLnBlcmNlbnQgPSBleHBvcnRzLnRyYW5zZm9ybUNoaWxkVmFsdWVzID0gZXhwb3J0cy5zdGVwcyA9IGV4cG9ydHMuc25hcCA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy53cmFwID0gZXhwb3J0cy5ub25saW5lYXJTcHJpbmcgPSBleHBvcnRzLnNwcmluZyA9IGV4cG9ydHMuZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZyA9IGV4cG9ydHMubXVsdGlwbHkgPSBleHBvcnRzLmRpdmlkZSA9IGV4cG9ydHMuYWRkID0gZXhwb3J0cy5zdWJ0cmFjdCA9IGV4cG9ydHMuaW50ZXJwb2xhdGUgPSBleHBvcnRzLnBpcGUgPSBleHBvcnRzLmNvbmRpdGlvbmFsID0gZXhwb3J0cy5jbGFtcCA9IGV4cG9ydHMuY2xhbXBNaW4gPSBleHBvcnRzLmNsYW1wTWF4ID0gZXhwb3J0cy5hcHBseU9mZnNldCA9IGV4cG9ydHMuYXBwZW5kVW5pdCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJ2ZyYW1lc3luYycpO1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3Aodikge1xuICByZXR1cm4gdjtcbn07XG5cbi8qKlxuICogQXBwZW5kIFVuaXRcbiAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGVuZFxuICogYXBwZW5kVW5pdCgncHgnLCAyMCkgLT4gJzIwcHgnXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVuaXQpXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBhcHBlbmRVbml0ID0gZXhwb3J0cy5hcHBlbmRVbml0ID0gZnVuY3Rpb24gYXBwZW5kVW5pdCh1bml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiAnJyArIHYgKyB1bml0O1xuICB9O1xufTtcblxuLyoqXG4gKiBBcHBseSBvZmZzZXRcbiAqIEEgZnVuY3Rpb24gdGhhdCwgZ2l2ZW4gYSB2YWx1ZSwgd2lsbCBnZXQgdGhlIG9mZnNldCBmcm9tIGBmcm9tYFxuICogYW5kIGFwcGx5IGl0IHRvIGB0b2BcbiAqIEBwYXJhbSAge251bWJlcn0gZnJvbVxuICogQHBhcmFtICB7bnVtYmVyfSB0b1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbnZhciBhcHBseU9mZnNldCA9IGV4cG9ydHMuYXBwbHlPZmZzZXQgPSBmdW5jdGlvbiBhcHBseU9mZnNldChmcm9tLCB0bykge1xuICB2YXIgZ2V0T2Zmc2V0ID0gc3VidHJhY3QoZnJvbSk7XG4gIHZhciBhcHBseU9mZnNldFRvID0gYWRkKHRvKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGFwcGx5T2Zmc2V0VG8oZ2V0T2Zmc2V0KHYpKTtcbiAgfTtcbn07XG5cbi8qKlxuICogQ2xhbXAgdmFsdWUgYmV0d2VlblxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXN0cmljdCBhIGdpdmVuIHZhbHVlIGJldHdlZW4gYG1pbmAgYW5kIGBtYXhgXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pblxuICogQHBhcmFtICB7bnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGNsYW1wTWF4ID0gZXhwb3J0cy5jbGFtcE1heCA9IGZ1bmN0aW9uIGNsYW1wTWF4KG1heCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odiwgbWF4KTtcbiAgfTtcbn07XG52YXIgY2xhbXBNaW4gPSBleHBvcnRzLmNsYW1wTWluID0gZnVuY3Rpb24gY2xhbXBNaW4obWluKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBNYXRoLm1heCh2LCBtaW4pO1xuICB9O1xufTtcbnZhciBjbGFtcCA9IGV4cG9ydHMuY2xhbXAgPSBmdW5jdGlvbiBjbGFtcChtaW4sIG1heCkge1xuICB2YXIgX21pbiA9IGNsYW1wTWluKG1pbik7XG4gIHZhciBfbWF4ID0gY2xhbXBNYXgobWF4KTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIF9taW4oX21heCh2KSk7XG4gIH07XG59O1xuXG52YXIgY29uZGl0aW9uYWwgPSBleHBvcnRzLmNvbmRpdGlvbmFsID0gZnVuY3Rpb24gY29uZGl0aW9uYWwoY29uZGl0aW9uLCBpZlRydWUpIHtcbiAgdmFyIGlmRmFsc2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG5vb3A7XG4gIHJldHVybiBmdW5jdGlvbiAodiwgYWN0aW9uKSB7XG4gICAgcmV0dXJuIGNvbmRpdGlvbih2LCBhY3Rpb24pID8gaWZUcnVlKHYsIGFjdGlvbikgOiBpZkZhbHNlKHYsIGFjdGlvbik7XG4gIH07XG59O1xuXG4vKipcbiAqIFBpcGVcbiAqIENvbXBvc2Ugb3RoZXIgdHJhbnNmb3JtZXJzIHRvIHJ1biBsaW5lYXJpbHlcbiAqIHBpcGUobWluKDIwKSwgbWF4KDQwKSlcbiAqIEBwYXJhbSAgey4uLmZ1bmN0aW9uc30gdHJhbnNmb3JtZXJzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xudmFyIHBpcGUgPSBleHBvcnRzLnBpcGUgPSBmdW5jdGlvbiBwaXBlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdHJhbnNmb3JtZXJzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdHJhbnNmb3JtZXJzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gIHZhciBpID0gMDtcblxuICByZXR1cm4gZnVuY3Rpb24gKGFjYykge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIHYgPSBhY2M7XG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldLmFwcGx5KHRyYW5zZm9ybWVycywgW3ZdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xuXG4vKipcbiAqIEludGVycG9sYXRlIGZyb20gc2V0IG9mIHZhbHVlcyB0byBhbm90aGVyXG4gKiBAcGFyYW0gIHtBcnJheX0gaW5wdXQgYXJyYXlcbiAqIEBwYXJhbSAge0FycmF5fSBvdXRwdXRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSByYW5nZUVhc2luZ1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbnZhciBpbnRlcnBvbGF0ZSA9IGV4cG9ydHMuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiBpbnRlcnBvbGF0ZShpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykge1xuICB2YXIgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIHZhciBmaW5hbEluZGV4ID0gcmFuZ2VMZW5ndGggLSAxO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgdmFyIGkgPSAxO1xuXG4gICAgLy8gRmluZCBpbmRleCBvZiByYW5nZSBzdGFydFxuICAgIGZvciAoOyBpIDwgcmFuZ2VMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlucHV0W2ldID4gdiB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9ncmVzc0luUmFuZ2UgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGlucHV0W2kgLSAxXSwgaW5wdXRbaV0sIHYpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gcmFuZ2VFYXNpbmcgPyByYW5nZUVhc2luZ1tpIC0gMV0ocHJvZ3Jlc3NJblJhbmdlKSA6IHByb2dyZXNzSW5SYW5nZTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShvdXRwdXRbaSAtIDFdLCBvdXRwdXRbaV0sIGVhc2VkUHJvZ3Jlc3MpO1xuICB9O1xufTtcblxudmFyIHN1YnRyYWN0ID0gZXhwb3J0cy5zdWJ0cmFjdCA9IGZ1bmN0aW9uIHN1YnRyYWN0KG9yaWdpbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdiAtIG9yaWdpbjtcbiAgfTtcbn07XG52YXIgYWRkID0gZXhwb3J0cy5hZGQgPSBmdW5jdGlvbiBhZGQob3JpZ2luKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2ICsgb3JpZ2luO1xuICB9O1xufTtcbnZhciBkaXZpZGUgPSBleHBvcnRzLmRpdmlkZSA9IGZ1bmN0aW9uIGRpdmlkZShvcmlnaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYgLyBvcmlnaW47XG4gIH07XG59O1xudmFyIG11bHRpcGx5ID0gZXhwb3J0cy5tdWx0aXBseSA9IGZ1bmN0aW9uIG11bHRpcGx5KG9yaWdpbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdiAqIG9yaWdpbjtcbiAgfTtcbn07XG5cbnZhciBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gZXhwb3J0cy5nZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gZnVuY3Rpb24gZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZygpIHtcbiAgdmFyIGFsdGVyRGlzcGxhY2VtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBub29wO1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnN0YW50LCBvcmlnaW4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgIHZhciBkaXNwbGFjZW1lbnQgPSBvcmlnaW4gLSB2O1xuICAgICAgdmFyIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50ID0gLWNvbnN0YW50ICogKDAgLSBhbHRlckRpc3BsYWNlbWVudChNYXRoLmFicyhkaXNwbGFjZW1lbnQpKSk7XG4gICAgICByZXR1cm4gZGlzcGxhY2VtZW50IDw9IDAgPyBvcmlnaW4gKyBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudCA6IG9yaWdpbiAtIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50O1xuICAgIH07XG4gIH07XG59O1xuXG52YXIgc3ByaW5nID0gZXhwb3J0cy5zcHJpbmcgPSBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nKCk7XG52YXIgbm9ubGluZWFyU3ByaW5nID0gZXhwb3J0cy5ub25saW5lYXJTcHJpbmcgPSBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nKE1hdGguc3FydCk7XG5cbnZhciB3cmFwID0gZXhwb3J0cy53cmFwID0gZnVuY3Rpb24gd3JhcChtaW4sIG1heCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgcmFuZ2VTaXplID0gbWF4IC0gbWluO1xuICAgIHJldHVybiAoKHYgLSBtaW4pICUgcmFuZ2VTaXplICsgcmFuZ2VTaXplKSAlIHJhbmdlU2l6ZSArIG1pbjtcbiAgfTtcbn07XG5cbnZhciBzbW9vdGggPSBleHBvcnRzLnNtb290aCA9IGZ1bmN0aW9uIHNtb290aCgpIHtcbiAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiA1MDtcblxuICB2YXIgcHJldmlvdXNWYWx1ZSA9IDA7XG4gIHZhciBsYXN0VXBkYXRlZCA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGN1cnJlbnRGcmFtZXN0YW1wID0gKDAsIF9mcmFtZXN5bmMuY3VycmVudEZyYW1lVGltZSkoKTtcbiAgICB2YXIgdGltZURlbHRhID0gY3VycmVudEZyYW1lc3RhbXAgIT09IGxhc3RVcGRhdGVkID8gY3VycmVudEZyYW1lc3RhbXAgLSBsYXN0VXBkYXRlZCA6IDA7XG4gICAgdmFyIG5ld1ZhbHVlID0gdGltZURlbHRhID8gKDAsIF9jYWxjLnNtb290aCkodiwgcHJldmlvdXNWYWx1ZSwgdGltZURlbHRhLCBzdHJlbmd0aCkgOiBwcmV2aW91c1ZhbHVlO1xuICAgIGxhc3RVcGRhdGVkID0gY3VycmVudEZyYW1lc3RhbXA7XG4gICAgcHJldmlvdXNWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgfTtcbn07XG5cbnZhciBzbmFwID0gZXhwb3J0cy5zbmFwID0gZnVuY3Rpb24gc25hcChwb2ludHMpIHtcbiAgaWYgKHR5cGVvZiBwb2ludHMgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh2IC8gcG9pbnRzKSAqIHBvaW50cztcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbnVtUG9pbnRzID0gcG9pbnRzLmxlbmd0aDtcblxuICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgdmFyIGxhc3REaXN0YW5jZSA9IE1hdGguYWJzKHBvaW50c1swXSAtIHYpO1xuXG4gICAgICBmb3IgKGkgPSAxOyBpIDwgbnVtUG9pbnRzOyBpKyspIHtcbiAgICAgICAgdmFyIHBvaW50ID0gcG9pbnRzW2ldO1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyhwb2ludCAtIHYpO1xuXG4gICAgICAgIGlmIChkaXN0YW5jZSA9PT0gMCkgcmV0dXJuIHBvaW50O1xuXG4gICAgICAgIGlmIChkaXN0YW5jZSA+IGxhc3REaXN0YW5jZSkgcmV0dXJuIHBvaW50c1tpIC0gMV07XG5cbiAgICAgICAgaWYgKGkgPT09IG51bVBvaW50cyAtIDEpIHJldHVybiBwb2ludDtcblxuICAgICAgICBsYXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuXG52YXIgc3RlcHMgPSBleHBvcnRzLnN0ZXBzID0gZnVuY3Rpb24gc3RlcHMoX3N0ZXBzKSB7XG4gIHZhciBtaW4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHZhciBtYXggPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDE7XG4gIHZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6ICdzdGFydCc7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciBwcm9ncmVzcyA9ICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkobWluLCBtYXgsIHYpO1xuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKG1pbiwgbWF4LCAoMCwgX2NhbGMuc3RlcFByb2dyZXNzKShfc3RlcHMsIHByb2dyZXNzLCBkaXJlY3Rpb24pKTtcbiAgfTtcbn07XG5cbnZhciB0cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IGV4cG9ydHMudHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1DaGlsZFZhbHVlcyhjaGlsZFRyYW5zZm9ybWVycykge1xuICB2YXIgbXV0YWJsZVN0YXRlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGZvciAodmFyIGtleSBpbiB2KSB7XG4gICAgICB2YXIgY2hpbGRUcmFuc2Zvcm1lciA9IGNoaWxkVHJhbnNmb3JtZXJzW2tleV07XG4gICAgICBpZiAoY2hpbGRUcmFuc2Zvcm1lcikge1xuICAgICAgICBtdXRhYmxlU3RhdGVba2V5XSA9IGNoaWxkVHJhbnNmb3JtZXIodltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbXV0YWJsZVN0YXRlO1xuICB9O1xufTtcblxuLy8gVW5pdCB0cmFuc2Zvcm1lcnNcbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0gYXBwZW5kVW5pdCgnJScpO1xudmFyIGRlZ3JlZXMgPSBleHBvcnRzLmRlZ3JlZXMgPSBhcHBlbmRVbml0KCdkZWcnKTtcbnZhciBweCA9IGV4cG9ydHMucHggPSBhcHBlbmRVbml0KCdweCcpO1xuXG52YXIgcmdiVW5pdCA9IGV4cG9ydHMucmdiVW5pdCA9IHBpcGUoY2xhbXAoMCwgMjU1KSwgTWF0aC5yb3VuZCk7XG5cbnZhciByZ2JhVGVtcGxhdGUgPSBmdW5jdGlvbiByZ2JhVGVtcGxhdGUoX3JlZikge1xuICB2YXIgcmVkID0gX3JlZi5yZWQsXG4gICAgICBncmVlbiA9IF9yZWYuZ3JlZW4sXG4gICAgICBibHVlID0gX3JlZi5ibHVlLFxuICAgICAgX3JlZiRhbHBoYSA9IF9yZWYuYWxwaGEsXG4gICAgICBhbHBoYSA9IF9yZWYkYWxwaGEgPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmJGFscGhhO1xuICByZXR1cm4gJ3JnYmEoJyArIHJlZCArICcsICcgKyBncmVlbiArICcsICcgKyBibHVlICsgJywgJyArIGFscGhhICsgJyknO1xufTtcblxudmFyIHJnYmEgPSBleHBvcnRzLnJnYmEgPSBwaXBlKHRyYW5zZm9ybUNoaWxkVmFsdWVzKHtcbiAgcmVkOiByZ2JVbml0LFxuICBncmVlbjogcmdiVW5pdCxcbiAgYmx1ZTogcmdiVW5pdCxcbiAgYWxwaGE6IGFscGhhXG59KSwgcmdiYVRlbXBsYXRlKTtcblxudmFyIGhzbGFUZW1wbGF0ZSA9IGZ1bmN0aW9uIGhzbGFUZW1wbGF0ZShfcmVmMikge1xuICB2YXIgaHVlID0gX3JlZjIuaHVlLFxuICAgICAgc2F0dXJhdGlvbiA9IF9yZWYyLnNhdHVyYXRpb24sXG4gICAgICBsaWdodG5lc3MgPSBfcmVmMi5saWdodG5lc3MsXG4gICAgICBfcmVmMiRhbHBoYSA9IF9yZWYyLmFscGhhLFxuICAgICAgYWxwaGEgPSBfcmVmMiRhbHBoYSA9PT0gdW5kZWZpbmVkID8gMSA6IF9yZWYyJGFscGhhO1xuICByZXR1cm4gJ2hzbGEoJyArIGh1ZSArICcsICcgKyBzYXR1cmF0aW9uICsgJywgJyArIGxpZ2h0bmVzcyArICcsICcgKyBhbHBoYSArICcpJztcbn07XG5cbnZhciBoc2xhID0gZXhwb3J0cy5oc2xhID0gcGlwZSh0cmFuc2Zvcm1DaGlsZFZhbHVlcyh7XG4gIGh1ZTogcGFyc2VJbnQsXG4gIHNhdHVyYXRpb246IHBlcmNlbnQsXG4gIGxpZ2h0bmVzczogcGVyY2VudCxcbiAgYWxwaGE6IGFscGhhXG59KSwgaHNsYVRlbXBsYXRlKTtcblxudmFyIGNvbG9yID0gZXhwb3J0cy5jb2xvciA9IGZ1bmN0aW9uIGNvbG9yKHYpIHtcbiAgaWYgKHYuaGFzT3duUHJvcGVydHkoJ3JlZCcpKSB7XG4gICAgcmV0dXJuIHJnYmEodik7XG4gIH0gZWxzZSBpZiAodi5oYXNPd25Qcm9wZXJ0eSgnaHVlJykpIHtcbiAgICByZXR1cm4gaHNsYSh2KTtcbiAgfVxuICByZXR1cm4gdjtcbn07XG5cbnZhciBhbHBoYSA9IGV4cG9ydHMuYWxwaGEgPSBjbGFtcCgwLCAxKTtcblxudmFyIGJsZW5kID0gZnVuY3Rpb24gYmxlbmQoZnJvbSwgdG8sIHYpIHtcbiAgdmFyIGZyb21FeHBvID0gZnJvbSAqIGZyb207XG4gIHZhciB0b0V4cG8gPSB0byAqIHRvO1xuICByZXR1cm4gTWF0aC5zcXJ0KHYgKiAodG9FeHBvIC0gZnJvbUV4cG8pICsgZnJvbUV4cG8pO1xufTtcbi8vIGh0dHA6Ly9jb2RlcGVuLmlvL29zdWJsYWtlL3Blbi94R1ZWYU5cbnZhciBibGVuZENvbG9yID0gZXhwb3J0cy5ibGVuZENvbG9yID0gZnVuY3Rpb24gYmxlbmRDb2xvcihmcm9tLCB0bykge1xuICB2YXIgZnJvbUNvbG9yID0gKDAsIF91dGlscy5pc1N0cmluZykoZnJvbSkgPyAoMCwgX3BhcnNlcnMuY29sb3IpKGZyb20pIDogZnJvbTtcbiAgdmFyIHRvQ29sb3IgPSAoMCwgX3V0aWxzLmlzU3RyaW5nKSh0bykgPyAoMCwgX3BhcnNlcnMuY29sb3IpKHRvKSA6IHRvO1xuXG4gIHZhciBibGVuZGVkID0gX2V4dGVuZHMoe30sIGZyb21Db2xvcik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZm9yICh2YXIga2V5IGluIGJsZW5kZWQpIHtcbiAgICAgIGJsZW5kZWRba2V5XSA9IGJsZW5kKGZyb21Db2xvcltrZXldLCB0b0NvbG9yW2tleV0sIHYpO1xuICAgIH1cbiAgICBibGVuZGVkLnJlZCA9IGJsZW5kKGZyb21Db2xvci5yZWQsIHRvQ29sb3IucmVkLCB2KTtcbiAgICBibGVuZGVkLmdyZWVuID0gYmxlbmQoZnJvbUNvbG9yLmdyZWVuLCB0b0NvbG9yLmdyZWVuLCB2KTtcbiAgICBibGVuZGVkLmJsdWUgPSBibGVuZChmcm9tQ29sb3IuYmx1ZSwgdG9Db2xvci5ibHVlLCB2KTtcbiAgICBibGVuZGVkLmFscGhhID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShmcm9tQ29sb3IuYWxwaGEsIHRvQ29sb3IuYWxwaGEsIHYpO1xuICAgIHJldHVybiBibGVuZGVkO1xuICB9O1xufTtcblxuLy8gQmV6aWVyIHJlc29sdmVyXG4vLyBSZWZhY3RvcmVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2h1Z2hzay9iZXppZXIvYmxvYi9tYXN0ZXIvaW5kZXguanNcbi8qKlxuIyMgVGhlIE1JVCBMaWNlbnNlIChNSVQpICMjXG5cbkNvcHlyaWdodCAoYykgMjAxMyBIdWdoIEtlbm5lZHlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuICovXG52YXIgcmVzb2x2ZTMgPSBmdW5jdGlvbiByZXNvbHZlMyhwb2ludHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIHV0ID0gMSAtIHQ7XG4gICAgcmV0dXJuIChwb2ludHNbMF0gKiB1dCArIHBvaW50c1sxXSAqIHQpICogdXQgKyAocG9pbnRzWzFdICogdXQgKyBwb2ludHNbMl0gKiB0KSAqIHQ7XG4gIH07XG59O1xuXG52YXIgcmVzb2x2ZTQgPSBmdW5jdGlvbiByZXNvbHZlNChwb2ludHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIHV0ID0gMSAtIHQ7XG4gICAgdmFyIGExID0gcG9pbnRzWzFdICogdXQgKyBwb2ludHNbMl0gKiB0O1xuICAgIHJldHVybiAoKHBvaW50c1swXSAqIHV0ICsgcG9pbnRzWzFdICogdCkgKiB1dCArIGExICogdCkgKiB1dCArIChhMSAqIHV0ICsgKHBvaW50c1syXSAqIHV0ICsgcG9pbnRzWzNdICogdCkgKiB0KSAqIHQ7XG4gIH07XG59O1xuXG52YXIgYmV6aWVyID0gZXhwb3J0cy5iZXppZXIgPSBmdW5jdGlvbiBiZXppZXIocG9pbnRzKSB7XG4gIHJldHVybiBwb2ludHMubGVuZ3RoID09PSAzID8gcmVzb2x2ZTMocG9pbnRzKSA6IHJlc29sdmU0KHBvaW50cyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEhKaGJuTm1iM0p0WlhKekxtcHpJbDBzSW01aGJXVnpJanBiSW01dmIzQWlMQ0oySWl3aVlYQndaVzVrVlc1cGRDSXNJblZ1YVhRaUxDSmhjSEJzZVU5bVpuTmxkQ0lzSW1aeWIyMGlMQ0owYnlJc0ltZGxkRTltWm5ObGRDSXNJbk4xWW5SeVlXTjBJaXdpWVhCd2JIbFBabVp6WlhSVWJ5SXNJbUZrWkNJc0ltTnNZVzF3VFdGNElpd2liV0Y0SWl3aVRXRjBhQ0lzSW0xcGJpSXNJbU5zWVcxd1RXbHVJaXdpWTJ4aGJYQWlMQ0pmYldsdUlpd2lYMjFoZUNJc0ltTnZibVJwZEdsdmJtRnNJaXdpWTI5dVpHbDBhVzl1SWl3aWFXWlVjblZsSWl3aWFXWkdZV3h6WlNJc0ltRmpkR2x2YmlJc0luQnBjR1VpTENKMGNtRnVjMlp2Y20xbGNuTWlMQ0p1ZFcxVWNtRnVjMlp2Y20xbGNuTWlMQ0pzWlc1bmRHZ2lMQ0pwSWl3aVlXTmpJaXdpWVhKbmN5SXNJbWx1ZEdWeWNHOXNZWFJsSWl3aWFXNXdkWFFpTENKdmRYUndkWFFpTENKeVlXNW5aVVZoYzJsdVp5SXNJbkpoYm1kbFRHVnVaM1JvSWl3aVptbHVZV3hKYm1SbGVDSXNJbkJ5YjJkeVpYTnpTVzVTWVc1blpTSXNJbVZoYzJWa1VISnZaM0psYzNNaUxDSnZjbWxuYVc0aUxDSmthWFpwWkdVaUxDSnRkV3gwYVhCc2VTSXNJbWRsYm1WeVlYUmxUbTl1U1c1MFpYSm5jbUYwWldSVGNISnBibWNpTENKaGJIUmxja1JwYzNCc1lXTmxiV1Z1ZENJc0ltTnZibk4wWVc1MElpd2laR2x6Y0d4aFkyVnRaVzUwSWl3aWMzQnlhVzVuVFc5a2FXWnBaV1JFYVhOd2JHRmpaVzFsYm5RaUxDSmhZbk1pTENKemNISnBibWNpTENKdWIyNXNhVzVsWVhKVGNISnBibWNpTENKemNYSjBJaXdpZDNKaGNDSXNJbkpoYm1kbFUybDZaU0lzSW5OdGIyOTBhQ0lzSW5OMGNtVnVaM1JvSWl3aWNISmxkbWx2ZFhOV1lXeDFaU0lzSW14aGMzUlZjR1JoZEdWa0lpd2lZM1Z5Y21WdWRFWnlZVzFsYzNSaGJYQWlMQ0owYVcxbFJHVnNkR0VpTENKdVpYZFdZV3gxWlNJc0luTnVZWEFpTENKd2IybHVkSE1pTENKeWIzVnVaQ0lzSW01MWJWQnZhVzUwY3lJc0lteGhjM1JFYVhOMFlXNWpaU0lzSW5CdmFXNTBJaXdpWkdsemRHRnVZMlVpTENKemRHVndjeUlzSW1ScGNtVmpkR2x2YmlJc0luQnliMmR5WlhOeklpd2lkSEpoYm5ObWIzSnRRMmhwYkdSV1lXeDFaWE1pTENKamFHbHNaRlJ5WVc1elptOXliV1Z5Y3lJc0ltMTFkR0ZpYkdWVGRHRjBaU0lzSW10bGVTSXNJbU5vYVd4a1ZISmhibk5tYjNKdFpYSWlMQ0p3WlhKalpXNTBJaXdpWkdWbmNtVmxjeUlzSW5CNElpd2ljbWRpVlc1cGRDSXNJbkpuWW1GVVpXMXdiR0YwWlNJc0luSmxaQ0lzSW1keVpXVnVJaXdpWW14MVpTSXNJbUZzY0doaElpd2ljbWRpWVNJc0ltaHpiR0ZVWlcxd2JHRjBaU0lzSW1oMVpTSXNJbk5oZEhWeVlYUnBiMjRpTENKc2FXZG9kRzVsYzNNaUxDSm9jMnhoSWl3aWNHRnljMlZKYm5RaUxDSmpiMnh2Y2lJc0ltaGhjMDkzYmxCeWIzQmxjblI1SWl3aVlteGxibVFpTENKbWNtOXRSWGh3YnlJc0luUnZSWGh3YnlJc0ltSnNaVzVrUTI5c2IzSWlMQ0ptY205dFEyOXNiM0lpTENKMGIwTnZiRzl5SWl3aVlteGxibVJsWkNJc0luSmxjMjlzZG1Veklpd2lkQ0lzSW5WMElpd2ljbVZ6YjJ4MlpUUWlMQ0poTVNJc0ltSmxlbWxsY2lKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096dEJRVUZCT3p0QlFVTkJPenRCUVVOQk96dEJRVU5CT3p0QlFVVkJMRWxCUVUxQkxFOUJRVThzVTBGQlVFRXNTVUZCVHl4RFFVRkRReXhEUVVGRU8wRkJRVUVzVTBGQlQwRXNRMEZCVUR0QlFVRkJMRU5CUVdJN08wRkJSVUU3T3pzN096czdRVUZQVHl4SlFVRk5ReXhyUTBGQllTeFRRVUZpUVN4VlFVRmhMRU5CUVVORExFbEJRVVE3UVVGQlFTeFRRVUZWTEZWQlFVTkdMRU5CUVVRN1FVRkJRU3huUWtGQlZVRXNRMEZCVml4SFFVRmpSU3hKUVVGa08wRkJRVUVzUjBGQlZqdEJRVUZCTEVOQlFXNUNPenRCUVVWUU96czdPenM3T3p0QlFWRlBMRWxCUVUxRExHOURRVUZqTEZOQlFXUkJMRmRCUVdNc1EwRkJRME1zU1VGQlJDeEZRVUZQUXl4RlFVRlFMRVZCUVdNN1FVRkRka01zVFVGQlRVTXNXVUZCV1VNc1UwRkJVMGdzU1VGQlZDeERRVUZzUWp0QlFVTkJMRTFCUVUxSkxHZENRVUZuUWtNc1NVRkJTVW9zUlVGQlNpeERRVUYwUWp0QlFVTkJMRk5CUVU4c1ZVRkJRMHdzUTBGQlJEdEJRVUZCTEZkQlFVOVJMR05CUVdOR0xGVkJRVlZPTEVOQlFWWXNRMEZCWkN4RFFVRlFPMEZCUVVFc1IwRkJVRHRCUVVORUxFTkJTazA3TzBGQlRWQTdPenM3T3pzN1FVRlBUeXhKUVVGTlZTdzRRa0ZCVnl4VFFVRllRU3hSUVVGWExFTkJRVU5ETEVkQlFVUTdRVUZCUVN4VFFVRlRMRlZCUVVOWUxFTkJRVVE3UVVGQlFTeFhRVUZQV1N4TFFVRkxReXhIUVVGTUxFTkJRVk5pTEVOQlFWUXNSVUZCV1Zjc1IwRkJXaXhEUVVGUU8wRkJRVUVzUjBGQlZEdEJRVUZCTEVOQlFXcENPMEZCUTBFc1NVRkJUVWNzT0VKQlFWY3NVMEZCV0VFc1VVRkJWeXhEUVVGRFJDeEhRVUZFTzBGQlFVRXNVMEZCVXl4VlFVRkRZaXhEUVVGRU8wRkJRVUVzVjBGQlQxa3NTMEZCUzBRc1IwRkJUQ3hEUVVGVFdDeERRVUZVTEVWQlFWbGhMRWRCUVZvc1EwRkJVRHRCUVVGQkxFZEJRVlE3UVVGQlFTeERRVUZxUWp0QlFVTkJMRWxCUVUxRkxIZENRVUZSTEZOQlFWSkJMRXRCUVZFc1EwRkJRMFlzUjBGQlJDeEZRVUZOUml4SFFVRk9MRVZCUVdNN1FVRkRha01zVFVGQlRVc3NUMEZCVDBZc1UwRkJVMFFzUjBGQlZDeERRVUZpTzBGQlEwRXNUVUZCVFVrc1QwRkJUMUFzVTBGQlUwTXNSMEZCVkN4RFFVRmlPMEZCUTBFc1UwRkJUeXhWUVVGRFdDeERRVUZFTzBGQlFVRXNWMEZCVDJkQ0xFdEJRVXRETEV0QlFVdHFRaXhEUVVGTUxFTkJRVXdzUTBGQlVEdEJRVUZCTEVkQlFWQTdRVUZEUkN4RFFVcE5PenRCUVUxQkxFbEJRVTFyUWl4dlEwRkJZeXhUUVVGa1FTeFhRVUZqTEVOQlFVTkRMRk5CUVVRc1JVRkJXVU1zVFVGQldqdEJRVUZCTEUxQlFXOUNReXhQUVVGd1FpeDFSVUZCT0VKMFFpeEpRVUU1UWp0QlFVRkJMRk5CUVhWRExGVkJRVU5ETEVOQlFVUXNSVUZCU1hOQ0xFMUJRVW9zUlVGQlpUdEJRVU12UlN4WFFVRlBTQ3hWUVVGVmJrSXNRMEZCVml4RlFVRmhjMElzVFVGQllpeEpRVUYxUWtZc1QwRkJUM0JDTEVOQlFWQXNSVUZCVlhOQ0xFMUJRVllzUTBGQmRrSXNSMEZCTWtORUxGRkJRVkZ5UWl4RFFVRlNMRVZCUVZkelFpeE5RVUZZTEVOQlFXeEVPMEZCUTBRc1IwRkdNRUk3UVVGQlFTeERRVUZ3UWpzN1FVRkpVRHM3T3pzN096dEJRVTlQTEVsQlFVMURMSE5DUVVGUExGTkJRVkJCTEVsQlFVOHNSMEZCY1VJN1FVRkJRU3h2UTBGQmFrSkRMRmxCUVdsQ08wRkJRV3BDUVN4blFrRkJhVUk3UVVGQlFUczdRVUZEZGtNc1RVRkJUVU1zYTBKQlFXdENSQ3hoUVVGaFJTeE5RVUZ5UXp0QlFVTkJMRTFCUVVsRExFbEJRVWtzUTBGQlVqczdRVUZGUVN4VFFVRlBMRlZCUVVORExFZEJRVVFzUlVGQmEwSTdRVUZCUVN4MVEwRkJWRU1zU1VGQlV6dEJRVUZVUVN4VlFVRlRPMEZCUVVFN08wRkJRM1pDTEZGQlFVazNRaXhKUVVGSk5FSXNSMEZCVWp0QlFVTkJMRk5CUVV0RUxFbEJRVWtzUTBGQlZDeEZRVUZaUVN4SlFVRkpSaXhsUVVGb1FpeEZRVUZwUTBVc1IwRkJha01zUlVGQmMwTTdRVUZEY0VNelFpeFZRVUZKZDBJc1lVRkJZVWNzUTBGQllpeDFRa0ZCWjBJelFpeERRVUZvUWl4VFFVRnpRalpDTEVsQlFYUkNMRVZCUVVvN1FVRkRSRHM3UVVGRlJDeFhRVUZQTjBJc1EwRkJVRHRCUVVORUxFZEJVRVE3UVVGUlJDeERRVnBOT3p0QlFXTlFPenM3T3pzN08wRkJUMDhzU1VGQlRUaENMRzlEUVVGakxGTkJRV1JCTEZkQlFXTXNRMEZCUTBNc1MwRkJSQ3hGUVVGUlF5eE5RVUZTTEVWQlFXZENReXhYUVVGb1FpeEZRVUZuUXp0QlFVTjZSQ3hOUVVGTlF5eGpRVUZqU0N4TlFVRk5UQ3hOUVVFeFFqdEJRVU5CTEUxQlFVMVRMR0ZCUVdGRUxHTkJRV01zUTBGQmFrTTdPMEZCUlVFc1UwRkJUeXhWUVVGRGJFTXNRMEZCUkN4RlFVRlBPMEZCUTFvN1FVRkRRU3hSUVVGSlFTeExRVUZMSzBJc1RVRkJUU3hEUVVGT0xFTkJRVlFzUlVGQmJVSTdRVUZEYWtJc1lVRkJUME1zVDBGQlR5eERRVUZRTEVOQlFWQTdRVUZEUkRzN1FVRkZSRHRCUVVOQkxGRkJRVWxvUXl4TFFVRkxLMElzVFVGQlRVa3NWVUZCVGl4RFFVRlVMRVZCUVRSQ08wRkJRekZDTEdGQlFVOUlMRTlCUVU5SExGVkJRVkFzUTBGQlVEdEJRVU5FT3p0QlFVVkVMRkZCUVVsU0xFbEJRVWtzUTBGQlVqczdRVUZGUVR0QlFVTkJMRmRCUVU5QkxFbEJRVWxQTEZkQlFWZ3NSVUZCZDBKUUxFZEJRWGhDTEVWQlFUWkNPMEZCUXpOQ0xGVkJRVWxKTEUxQlFVMUtMRU5CUVU0c1NVRkJWek5DTEVOQlFWZ3NTVUZCWjBJeVFpeE5RVUZOVVN4VlFVRXhRaXhGUVVGelF6dEJRVU53UXp0QlFVTkVPMEZCUTBZN08wRkJSVVFzVVVGQlRVTXNhMEpCUVd0Q0xHZERRVUZ4UWt3c1RVRkJUVW9zU1VGQlNTeERRVUZXTEVOQlFYSkNMRVZCUVcxRFNTeE5RVUZOU2l4RFFVRk9MRU5CUVc1RExFVkJRVFpETTBJc1EwRkJOME1zUTBGQmVFSTdRVUZEUVN4UlFVRk5jVU1zWjBKQlFXbENTaXhYUVVGRUxFZEJRV2RDUVN4WlFVRlpUaXhKUVVGSkxFTkJRV2hDTEVWQlFXMUNVeXhsUVVGdVFpeERRVUZvUWl4SFFVRnpSRUVzWlVGQk5VVTdRVUZEUVN4WFFVRlBMR2REUVVGeFFrb3NUMEZCVDB3c1NVRkJTU3hEUVVGWUxFTkJRWEpDTEVWQlFXOURTeXhQUVVGUFRDeERRVUZRTEVOQlFYQkRMRVZCUVN0RFZTeGhRVUV2UXl4RFFVRlFPMEZCUTBRc1IwRjJRa1E3UVVGM1FrUXNRMEUxUWswN08wRkJPRUpCTEVsQlFVMDVRaXc0UWtGQlZ5eFRRVUZZUVN4UlFVRlhMRU5CUVVNclFpeE5RVUZFTzBGQlFVRXNVMEZCV1N4VlFVRkRkRU1zUTBGQlJEdEJRVUZCTEZkQlFVOUJMRWxCUVVselF5eE5RVUZZTzBGQlFVRXNSMEZCV2p0QlFVRkJMRU5CUVdwQ08wRkJRMEVzU1VGQlRUZENMRzlDUVVGTkxGTkJRVTVCTEVkQlFVMHNRMEZCUXpaQ0xFMUJRVVE3UVVGQlFTeFRRVUZaTEZWQlFVTjBReXhEUVVGRU8wRkJRVUVzVjBGQlQwRXNTVUZCU1hORExFMUJRVmc3UVVGQlFTeEhRVUZhTzBGQlFVRXNRMEZCV2p0QlFVTkJMRWxCUVUxRExEQkNRVUZUTEZOQlFWUkJMRTFCUVZNc1EwRkJRMFFzVFVGQlJEdEJRVUZCTEZOQlFWa3NWVUZCUTNSRExFTkJRVVE3UVVGQlFTeFhRVUZQUVN4SlFVRkpjME1zVFVGQldEdEJRVUZCTEVkQlFWbzdRVUZCUVN4RFFVRm1PMEZCUTBFc1NVRkJUVVVzT0VKQlFWY3NVMEZCV0VFc1VVRkJWeXhEUVVGRFJpeE5RVUZFTzBGQlFVRXNVMEZCV1N4VlFVRkRkRU1zUTBGQlJEdEJRVUZCTEZkQlFVOUJMRWxCUVVselF5eE5RVUZZTzBGQlFVRXNSMEZCV2p0QlFVRkJMRU5CUVdwQ096dEJRVVZCTEVsQlFVMUhMSE5GUVVFclFpeFRRVUV2UWtFc05FSkJRU3RDTzBGQlFVRXNUVUZCUTBNc2FVSkJRVVFzZFVWQlFYRkNNME1zU1VGQmNrSTdRVUZCUVN4VFFVRTRRaXhWUVVGRE5FTXNVVUZCUkN4RlFVRlhUQ3hOUVVGWU8wRkJRVUVzVjBGQmMwSXNWVUZCUTNSRExFTkJRVVFzUlVGQlR6dEJRVU55Unl4VlFVRk5ORU1zWlVGQlpVNHNVMEZCVTNSRExFTkJRVGxDTzBGQlEwRXNWVUZCVFRaRExEWkNRVUUyUWl4RFFVRkZSaXhSUVVGR0xFbEJRV01zU1VGQlNVUXNhMEpCUVd0Q09VSXNTMEZCUzJ0RExFZEJRVXdzUTBGQlUwWXNXVUZCVkN4RFFVRnNRaXhEUVVGc1FpeERRVUZ1UXp0QlFVTkJMR0ZCUVZGQkxHZENRVUZuUWl4RFFVRnFRaXhIUVVGelFrNHNVMEZCVTA4c01FSkJRUzlDTEVkQlFUUkVVQ3hUUVVGVFR5d3dRa0ZCTlVVN1FVRkRSQ3hMUVVwNVJUdEJRVUZCTEVkQlFUbENPMEZCUVVFc1EwRkJja003TzBGQlRVRXNTVUZCVFVVc01FSkJRVk5PTERoQ1FVRm1PMEZCUTBFc1NVRkJUVThzTkVOQlFXdENVQ3cyUWtGQk5rSTNRaXhMUVVGTGNVTXNTVUZCYkVNc1EwRkJlRUk3TzBGQlJVRXNTVUZCVFVNc2MwSkJRVThzVTBGQlVFRXNTVUZCVHl4RFFVRkRja01zUjBGQlJDeEZRVUZOUml4SFFVRk9PMEZCUVVFc1UwRkJZeXhWUVVGRFdDeERRVUZFTEVWQlFVODdRVUZEZGtNc1VVRkJUVzFFTEZsQlFWbDRReXhOUVVGTlJTeEhRVUY0UWp0QlFVTkJMRmRCUVU4c1EwRkJReXhEUVVGRFlpeEpRVUZKWVN4SFFVRk1MRWxCUVZselF5eFRRVUZhTEVkQlFYZENRU3hUUVVGNlFpeEpRVUZ6UTBFc1UwRkJkRU1zUjBGQmEwUjBReXhIUVVGNlJEdEJRVU5FTEVkQlNHMUNPMEZCUVVFc1EwRkJZanM3UVVGTFFTeEpRVUZOZFVNc01FSkJRVk1zVTBGQlZFRXNUVUZCVXl4SFFVRnRRanRCUVVGQkxFMUJRV3hDUXl4UlFVRnJRaXgxUlVGQlVDeEZRVUZQT3p0QlFVTjJReXhOUVVGSlF5eG5Ra0ZCWjBJc1EwRkJjRUk3UVVGRFFTeE5RVUZKUXl4alFVRmpMRU5CUVd4Q096dEJRVVZCTEZOQlFVOHNWVUZCUTNaRUxFTkJRVVFzUlVGQlR6dEJRVU5hTEZGQlFVMTNSQ3h2UWtGQmIwSXNhME5CUVRGQ08wRkJRMEVzVVVGQlRVTXNXVUZCWVVRc2MwSkJRWE5DUkN4WFFVRjJRaXhIUVVGelEwTXNiMEpCUVc5Q1JDeFhRVUV4UkN4SFFVRjNSU3hEUVVFeFJqdEJRVU5CTEZGQlFVMUhMRmRCUVZkRUxGbEJRVmtzYTBKQlFXTjZSQ3hEUVVGa0xFVkJRV2xDYzBRc1lVRkJha0lzUlVGQlowTkhMRk5CUVdoRExFVkJRVEpEU2l4UlFVRXpReXhEUVVGYUxFZEJRVzFGUXl4aFFVRndSanRCUVVOQlF5eHJRa0ZCWTBNc2FVSkJRV1E3UVVGRFFVWXNiMEpCUVdkQ1NTeFJRVUZvUWp0QlFVTkJMRmRCUVU5QkxGRkJRVkE3UVVGRFJDeEhRVkJFTzBGQlVVUXNRMEZhVFRzN1FVRmpRU3hKUVVGTlF5eHpRa0ZCVHl4VFFVRlFRU3hKUVVGUExFTkJRVU5ETEUxQlFVUXNSVUZCV1R0QlFVTTVRaXhOUVVGSkxFOUJRVTlCTEUxQlFWQXNTMEZCYTBJc1VVRkJkRUlzUlVGQlowTTdRVUZET1VJc1YwRkJUeXhWUVVGRE5VUXNRMEZCUkR0QlFVRkJMR0ZCUVU5WkxFdEJRVXRwUkN4TFFVRk1MRU5CUVZjM1JDeEpRVUZKTkVRc1RVRkJaaXhKUVVGNVFrRXNUVUZCYUVNN1FVRkJRU3hMUVVGUU8wRkJRMFFzUjBGR1JDeE5RVVZQTzBGQlEwd3NVVUZCU1dwRExFbEJRVWtzUTBGQlVqdEJRVU5CTEZGQlFVMXRReXhaUVVGWlJpeFBRVUZQYkVNc1RVRkJla0k3TzBGQlJVRXNWMEZCVHl4VlFVRkRNVUlzUTBGQlJDeEZRVUZQTzBGQlExb3NWVUZCU1N0RUxHVkJRV1Z1UkN4TFFVRkxhME1zUjBGQlRDeERRVUZUWXl4UFFVRlBMRU5CUVZBc1NVRkJXVFZFTEVOQlFYSkNMRU5CUVc1Q096dEJRVVZCTEZkQlFVc3lRaXhKUVVGSkxFTkJRVlFzUlVGQldVRXNTVUZCU1cxRExGTkJRV2hDTEVWQlFUSkNia01zUjBGQk0wSXNSVUZCWjBNN1FVRkRPVUlzV1VGQlRYRkRMRkZCUVZGS0xFOUJRVTlxUXl4RFFVRlFMRU5CUVdRN1FVRkRRU3haUVVGTmMwTXNWMEZCVjNKRUxFdEJRVXRyUXl4SFFVRk1MRU5CUVZOclFpeFJRVUZSYUVVc1EwRkJha0lzUTBGQmFrSTdPMEZCUlVFc1dVRkJTV2xGTEdGQlFXRXNRMEZCYWtJc1JVRkJiMElzVDBGQlQwUXNTMEZCVURzN1FVRkZjRUlzV1VGQlNVTXNWMEZCVjBZc1dVRkJaaXhGUVVFMlFpeFBRVUZQU0N4UFFVRlBha01zU1VGQlNTeERRVUZZTEVOQlFWQTdPMEZCUlRkQ0xGbEJRVWxCTEUxQlFVMXRReXhaUVVGWkxFTkJRWFJDTEVWQlFYbENMRTlCUVU5RkxFdEJRVkE3TzBGQlJYcENSQ3gxUWtGQlpVVXNVVUZCWmp0QlFVTkVPMEZCUTBZc1MwRm1SRHRCUVdkQ1JEdEJRVU5HTEVOQmVFSk5PenRCUVRCQ1FTeEpRVUZOUXl4M1FrRkJVU3hsUVVGRFFTeE5RVUZFTzBGQlFVRXNUVUZCVVhKRUxFZEJRVklzZFVWQlFXTXNRMEZCWkR0QlFVRkJMRTFCUVdsQ1JpeEhRVUZxUWl4MVJVRkJkVUlzUTBGQmRrSTdRVUZCUVN4TlFVRXdRbmRFTEZOQlFURkNMSFZGUVVGelF5eFBRVUYwUXp0QlFVRkJMRk5CUVd0RUxGVkJRVU51UlN4RFFVRkVMRVZCUVU4N1FVRkROVVVzVVVGQlRXOUZMRmRCUVZjc1owTkJRWEZDZGtRc1IwRkJja0lzUlVGQk1FSkdMRWRCUVRGQ0xFVkJRU3RDV0N4RFFVRXZRaXhEUVVGcVFqdEJRVU5CTEZkQlFVOHNaME5CUVhGQ1lTeEhRVUZ5UWl4RlFVRXdRa1lzUjBGQk1VSXNSVUZCSzBJc2QwSkJRV0YxUkN4TlFVRmlMRVZCUVc5Q1JTeFJRVUZ3UWl4RlFVRTRRa1FzVTBGQk9VSXNRMEZCTDBJc1EwRkJVRHRCUVVORUxFZEJTRzlDTzBGQlFVRXNRMEZCWkRzN1FVRkxRU3hKUVVGTlJTeHpSRUZCZFVJc1UwRkJka0pCTEc5Q1FVRjFRaXhEUVVGRFF5eHBRa0ZCUkN4RlFVRjFRanRCUVVONlJDeE5RVUZOUXl4bFFVRmxMRVZCUVhKQ08wRkJRMEVzVTBGQlR5eFZRVUZEZGtVc1EwRkJSQ3hGUVVGUE8wRkJRMW9zVTBGQlN5eEpRVUZKZDBVc1IwRkJWQ3hKUVVGblFuaEZMRU5CUVdoQ0xFVkJRVzFDTzBGQlEycENMRlZCUVUxNVJTeHRRa0ZCYlVKSUxHdENRVUZyUWtVc1IwRkJiRUlzUTBGQmVrSTdRVUZEUVN4VlFVRkpReXhuUWtGQlNpeEZRVUZ6UWp0QlFVTndRa1lzY1VKQlFXRkRMRWRCUVdJc1NVRkJiMEpETEdsQ1FVRnBRbnBGTEVWQlFVVjNSU3hIUVVGR0xFTkJRV3BDTEVOQlFYQkNPMEZCUTBRN1FVRkRSanM3UVVGRlJDeFhRVUZQUkN4WlFVRlFPMEZCUTBRc1IwRlVSRHRCUVZWRUxFTkJXazA3TzBGQlkxQTdRVUZEVHl4SlFVRk5SeXcwUWtGQlZYcEZMRmRCUVZjc1IwRkJXQ3hEUVVGb1FqdEJRVU5CTEVsQlFVMHdSU3cwUWtGQlZURkZMRmRCUVZjc1MwRkJXQ3hEUVVGb1FqdEJRVU5CTEVsQlFVMHlSU3hyUWtGQlN6TkZMRmRCUVZjc1NVRkJXQ3hEUVVGWU96dEJRVVZCTEVsQlFVMDBSU3cwUWtGQlZYUkVMRXRCUTNKQ1VpeE5RVUZOTEVOQlFVNHNSVUZCVXl4SFFVRlVMRU5CUkhGQ0xFVkJSWEpDU0N4TFFVRkxhVVFzUzBGR1owSXNRMEZCYUVJN08wRkJTMUFzU1VGQlRXbENMR1ZCUVdVc1UwRkJaa0VzV1VGQlpUdEJRVUZCTEUxQlFVZERMRWRCUVVnc1VVRkJSMEVzUjBGQlNEdEJRVUZCTEUxQlFWRkRMRXRCUVZJc1VVRkJVVUVzUzBGQlVqdEJRVUZCTEUxQlFXVkRMRWxCUVdZc1VVRkJaVUVzU1VGQlpqdEJRVUZCTEhkQ1FVRnhRa01zUzBGQmNrSTdRVUZCUVN4TlFVRnhRa0VzUzBGQmNrSXNPRUpCUVRaQ0xFTkJRVGRDTzBGQlFVRXNiVUpCUTFoSUxFZEJSRmNzVlVGRFNFTXNTMEZFUnl4VlFVTlBReXhKUVVSUUxGVkJRMmRDUXl4TFFVUm9RanRCUVVGQkxFTkJRWEpDT3p0QlFVZFBMRWxCUVUxRExITkNRVUZQTlVRc1MwRkRiRUk0UXl4eFFrRkJjVUk3UVVGRGJrSlZMRTlCUVV0R0xFOUJSR003UVVGRmJrSkhMRk5CUVU5SUxFOUJSbGs3UVVGSGJrSkpMRkZCUVUxS0xFOUJTR0U3UVVGSmJrSkxPMEZCU20xQ0xFTkJRWEpDTEVOQlJHdENMRVZCVDJ4Q1NpeFpRVkJyUWl4RFFVRmlPenRCUVZWUUxFbEJRVTFOTEdWQlFXVXNVMEZCWmtFc1dVRkJaVHRCUVVGQkxFMUJRVWRETEVkQlFVZ3NVMEZCUjBFc1IwRkJTRHRCUVVGQkxFMUJRVkZETEZWQlFWSXNVMEZCVVVFc1ZVRkJVanRCUVVGQkxFMUJRVzlDUXl4VFFVRndRaXhUUVVGdlFrRXNVMEZCY0VJN1FVRkJRU3d3UWtGQkswSk1MRXRCUVM5Q08wRkJRVUVzVFVGQkswSkJMRXRCUVM5Q0xDdENRVUYxUXl4RFFVRjJRenRCUVVGQkxHMUNRVU5ZUnl4SFFVUlhMRlZCUTBoRExGVkJSRWNzVlVGRFdVTXNVMEZFV2l4VlFVTXdRa3dzUzBGRU1VSTdRVUZCUVN4RFFVRnlRanM3UVVGSFR5eEpRVUZOVFN4elFrRkJUMnBGTEV0QlEyeENPRU1zY1VKQlFYRkNPMEZCUTI1Q1owSXNUMEZCUzBrc1VVRkVZenRCUVVWdVFrZ3NZMEZCV1Zvc1QwRkdUenRCUVVkdVFtRXNZVUZCVjJJc1QwRklVVHRCUVVsdVFsRTdRVUZLYlVJc1EwRkJja0lzUTBGRWEwSXNSVUZQYkVKRkxGbEJVR3RDTEVOQlFXSTdPMEZCVlVFc1NVRkJUVTBzZDBKQlFWRXNVMEZCVWtFc1MwRkJVU3hEUVVGRE1VWXNRMEZCUkN4RlFVRlBPMEZCUXpGQ0xFMUJRVWxCTEVWQlFVVXlSaXhqUVVGR0xFTkJRV2xDTEV0QlFXcENMRU5CUVVvc1JVRkJOa0k3UVVGRE0wSXNWMEZCVDFJc1MwRkJTMjVHTEVOQlFVd3NRMEZCVUR0QlFVTkVMRWRCUmtRc1RVRkZUeXhKUVVGSlFTeEZRVUZGTWtZc1kwRkJSaXhEUVVGcFFpeExRVUZxUWl4RFFVRktMRVZCUVRaQ08wRkJRMnhETEZkQlFVOUlMRXRCUVV0NFJpeERRVUZNTEVOQlFWQTdRVUZEUkR0QlFVTkVMRk5CUVU5QkxFTkJRVkE3UVVGRFJDeERRVkJOT3p0QlFWTkJMRWxCUVUxclJpeDNRa0ZCVVc1RkxFMUJRVTBzUTBGQlRpeEZRVUZUTEVOQlFWUXNRMEZCWkRzN1FVRkZVQ3hKUVVGTk5rVXNVVUZCVVN4VFFVRlNRU3hMUVVGUkxFTkJRVU40Uml4SlFVRkVMRVZCUVU5RExFVkJRVkFzUlVGQlYwd3NRMEZCV0N4RlFVRnBRanRCUVVNM1FpeE5RVUZOTmtZc1YwRkJWM3BHTEU5QlFVOUJMRWxCUVhoQ08wRkJRMEVzVFVGQlRUQkdMRk5CUVZONlJpeExRVUZMUVN4RlFVRndRanRCUVVOQkxGTkJRVTlQTEV0QlFVdHhReXhKUVVGTUxFTkJRVlZxUkN4TFFVRkxPRVlzVTBGQlUwUXNVVUZCWkN4SlFVRXdRa0VzVVVGQmNFTXNRMEZCVUR0QlFVTkVMRU5CU2tRN1FVRkxRVHRCUVVOUExFbEJRVTFGTEd0RFFVRmhMRk5CUVdKQkxGVkJRV0VzUTBGQlF6TkdMRWxCUVVRc1JVRkJUME1zUlVGQlVDeEZRVUZqTzBGQlEzUkRMRTFCUVUweVJpeFpRVUZaTEhGQ1FVRlROVVlzU1VGQlZDeEpRVUZwUWl4dlFrRkJWMEVzU1VGQldDeERRVUZxUWl4SFFVRnZRMEVzU1VGQmRFUTdRVUZEUVN4TlFVRk5Oa1lzVlVGQlZTeHhRa0ZCVXpWR0xFVkJRVlFzU1VGQlpTeHZRa0ZCVjBFc1JVRkJXQ3hEUVVGbUxFZEJRU3RDUVN4RlFVRXZRenM3UVVGRlFTeE5RVUZOTmtZc2RVSkJRV1ZHTEZOQlFXWXNRMEZCVGpzN1FVRkZRU3hUUVVGUExGVkJRVU5vUnl4RFFVRkVMRVZCUVU4N1FVRkRXaXhUUVVGTExFbEJRVWwzUlN4SFFVRlVMRWxCUVdkQ01FSXNUMEZCYUVJc1JVRkJlVUk3UVVGRGRrSkJMR05CUVZFeFFpeEhRVUZTTEVsQlFXVnZRaXhOUVVGTlNTeFZRVUZWZUVJc1IwRkJWaXhEUVVGT0xFVkJRWE5DZVVJc1VVRkJVWHBDTEVkQlFWSXNRMEZCZEVJc1JVRkJiME40UlN4RFFVRndReXhEUVVGbU8wRkJRMFE3UVVGRFJHdEhMRmxCUVZGdVFpeEhRVUZTTEVkQlFXTmhMRTFCUVUxSkxGVkJRVlZxUWl4SFFVRm9RaXhGUVVGeFFtdENMRkZCUVZGc1FpeEhRVUUzUWl4RlFVRnJReTlGTEVOQlFXeERMRU5CUVdRN1FVRkRRV3RITEZsQlFWRnNRaXhMUVVGU0xFZEJRV2RDV1N4TlFVRk5TU3hWUVVGVmFFSXNTMEZCYUVJc1JVRkJkVUpwUWl4UlFVRlJha0lzUzBGQkwwSXNSVUZCYzBOb1JpeERRVUYwUXl4RFFVRm9RanRCUVVOQmEwY3NXVUZCVVdwQ0xFbEJRVklzUjBGQlpWY3NUVUZCVFVrc1ZVRkJWV1lzU1VGQmFFSXNSVUZCYzBKblFpeFJRVUZSYUVJc1NVRkJPVUlzUlVGQmIwTnFSaXhEUVVGd1F5eERRVUZtTzBGQlEwRnJSeXhaUVVGUmFFSXNTMEZCVWl4SFFVRm5RaXhuUTBGQmNVSmpMRlZCUVZWa0xFdEJRUzlDTEVWQlFYTkRaU3hSUVVGUlppeExRVUU1UXl4RlFVRnhSR3hHTEVOQlFYSkVMRU5CUVdoQ08wRkJRMEVzVjBGQlQydEhMRTlCUVZBN1FVRkRSQ3hIUVZSRU8wRkJWVVFzUTBGb1FrMDdPMEZCYTBKUU8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGMVFrRXNTVUZCVFVNc1YwRkJWeXhUUVVGWVFTeFJRVUZYTEVOQlFVTjJReXhOUVVGRU8wRkJRVUVzVTBGQldTeFZRVUZEZDBNc1EwRkJSQ3hGUVVGUE8wRkJRMnhETEZGQlFVMURMRXRCUVVzc1NVRkJTVVFzUTBGQlpqdEJRVU5CTEZkQlFVOHNRMEZCUTNoRExFOUJRVThzUTBGQlVDeEpRVUZaZVVNc1JVRkJXaXhIUVVGcFFucERMRTlCUVU4c1EwRkJVQ3hKUVVGWmQwTXNRMEZCT1VJc1NVRkJiVU5ETEVWQlFXNURMRWRCUVhkRExFTkJRVU42UXl4UFFVRlBMRU5CUVZBc1NVRkJXWGxETEVWQlFWb3NSMEZCYVVKNlF5eFBRVUZQTEVOQlFWQXNTVUZCV1hkRExFTkJRVGxDTEVsQlFXMURRU3hEUVVGc1JqdEJRVU5FTEVkQlNHZENPMEZCUVVFc1EwRkJha0k3TzBGQlMwRXNTVUZCVFVVc1YwRkJWeXhUUVVGWVFTeFJRVUZYTEVOQlFVTXhReXhOUVVGRU8wRkJRVUVzVTBGQldTeFZRVUZEZDBNc1EwRkJSQ3hGUVVGUE8wRkJRMnhETEZGQlFVMURMRXRCUVVzc1NVRkJTVVFzUTBGQlpqdEJRVU5CTEZGQlFVMUhMRXRCUVVzelF5eFBRVUZQTEVOQlFWQXNTVUZCV1hsRExFVkJRVm9zUjBGQmFVSjZReXhQUVVGUExFTkJRVkFzU1VGQldYZERMRU5CUVhoRE8wRkJRMEVzVjBGQlR5eERRVUZETEVOQlFVTjRReXhQUVVGUExFTkJRVkFzU1VGQldYbERMRVZCUVZvc1IwRkJhVUo2UXl4UFFVRlBMRU5CUVZBc1NVRkJXWGRETEVOQlFUbENMRWxCUVcxRFF5eEZRVUZ1UXl4SFFVRjNRMFVzUzBGQlMwZ3NRMEZCT1VNc1NVRkJiVVJETEVWQlFXNUVMRWRCUVhkRUxFTkJRVU5GTEV0QlFVdEdMRVZCUVV3c1IwRkJWU3hEUVVGRGVrTXNUMEZCVHl4RFFVRlFMRWxCUVZsNVF5eEZRVUZhTEVkQlFXbENla01zVDBGQlR5eERRVUZRTEVsQlFWbDNReXhEUVVFNVFpeEpRVUZ0UTBFc1EwRkJPVU1zU1VGQmJVUkJMRU5CUVd4SU8wRkJRMFFzUjBGS1owSTdRVUZCUVN4RFFVRnFRanM3UVVGTlR5eEpRVUZOU1N3d1FrRkJVeXhUUVVGVVFTeE5RVUZUTEVOQlFVTTFReXhOUVVGRU8wRkJRVUVzVTBGRGJrSkJMRTlCUVU5c1F5eE5RVUZRTEV0QlFXdENMRU5CUVc1Q0xFZEJRWGRDZVVVc1UwRkJVM1pETEUxQlFWUXNRMEZCZUVJc1IwRkJNa013UXl4VFFVRlRNVU1zVFVGQlZDeERRVVIyUWp0QlFVRkJMRU5CUVdZaUxDSm1hV3hsSWpvaWRISmhibk5tYjNKdFpYSnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2daMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VzSUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOekxDQnpkR1Z3VUhKdlozSmxjM01zSUhOdGIyOTBhQ0JoY3lCallXeGpVMjF2YjNSb2FXNW5JSDBnWm5KdmJTQW5MaTlqWVd4akp6dGNibWx0Y0c5eWRDQjdJR2x6VTNSeWFXNW5JSDBnWm5KdmJTQW5MaTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdleUJqYjJ4dmNpQmhjeUJ3WVhKelpVTnZiRzl5SUgwZ1puSnZiU0FuTGk5d1lYSnpaWEp6Snp0Y2JtbHRjRzl5ZENCN0lHTjFjbkpsYm5SR2NtRnRaVlJwYldVZ2ZTQm1jbTl0SUNkbWNtRnRaWE41Ym1Nbk8xeHVYRzVqYjI1emRDQnViMjl3SUQwZ0tIWXBJRDArSUhZN1hHNWNiaThxS2x4dUlDb2dRWEJ3Wlc1a0lGVnVhWFJjYmlBcUlFRWdablZ1WTNScGIyNGdkR2hoZENCM2FXeHNJR0Z3Y0dWdVpGeHVJQ29nWVhCd1pXNWtWVzVwZENnbmNIZ25MQ0F5TUNrZ0xUNGdKekl3Y0hnblhHNGdLaUJBY0dGeVlXMGdJSHR6ZEhKcGJtZDlJSFZ1YVhRcFhHNGdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlYRzRnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JoY0hCbGJtUlZibWwwSUQwZ0tIVnVhWFFwSUQwK0lDaDJLU0E5UGlCZ0pIdDJmU1I3ZFc1cGRIMWdPMXh1WEc0dktpcGNiaUFxSUVGd2NHeDVJRzltWm5ObGRGeHVJQ29nUVNCbWRXNWpkR2x2YmlCMGFHRjBMQ0JuYVhabGJpQmhJSFpoYkhWbExDQjNhV3hzSUdkbGRDQjBhR1VnYjJabWMyVjBJR1p5YjIwZ1lHWnliMjFnWEc0Z0tpQmhibVFnWVhCd2JIa2dhWFFnZEc4Z1lIUnZZRnh1SUNvZ1FIQmhjbUZ0SUNCN2JuVnRZbVZ5ZlNCbWNtOXRYRzRnS2lCQWNHRnlZVzBnSUh0dWRXMWlaWEo5SUhSdlhHNGdLaUJBY21WMGRYSnVJSHRtZFc1amRHbHZibjFjYmlBcUwxeHVaWGh3YjNKMElHTnZibk4wSUdGd2NHeDVUMlptYzJWMElEMGdLR1p5YjIwc0lIUnZLU0E5UGlCN1hHNGdJR052Ym5OMElHZGxkRTltWm5ObGRDQTlJSE4xWW5SeVlXTjBLR1p5YjIwcE8xeHVJQ0JqYjI1emRDQmhjSEJzZVU5bVpuTmxkRlJ2SUQwZ1lXUmtLSFJ2S1R0Y2JpQWdjbVYwZFhKdUlDaDJLU0E5UGlCaGNIQnNlVTltWm5ObGRGUnZLR2RsZEU5bVpuTmxkQ2gyS1NrN1hHNTlPMXh1WEc0dktpcGNiaUFxSUVOc1lXMXdJSFpoYkhWbElHSmxkSGRsWlc1Y2JpQXFJRU55WldGMFpYTWdZU0JtZFc1amRHbHZiaUIwYUdGMElIZHBiR3dnY21WemRISnBZM1FnWVNCbmFYWmxiaUIyWVd4MVpTQmlaWFIzWldWdUlHQnRhVzVnSUdGdVpDQmdiV0Y0WUZ4dUlDb2dRSEJoY21GdElDQjdiblZ0WW1WeWZTQnRhVzVjYmlBcUlFQndZWEpoYlNBZ2UyNTFiV0psY24wZ2JXRjRYRzRnS2lCQWNtVjBkWEp1SUh0dWRXMWlaWEo5WEc0Z0tpOWNibVY0Y0c5eWRDQmpiMjV6ZENCamJHRnRjRTFoZUNBOUlDaHRZWGdwSUQwK0lDaDJLU0E5UGlCTllYUm9MbTFwYmloMkxDQnRZWGdwTzF4dVpYaHdiM0owSUdOdmJuTjBJR05zWVcxd1RXbHVJRDBnS0cxcGJpa2dQVDRnS0hZcElEMCtJRTFoZEdndWJXRjRLSFlzSUcxcGJpazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyeGhiWEFnUFNBb2JXbHVMQ0J0WVhncElEMCtJSHRjYmlBZ1kyOXVjM1FnWDIxcGJpQTlJR05zWVcxd1RXbHVLRzFwYmlrN1hHNGdJR052Ym5OMElGOXRZWGdnUFNCamJHRnRjRTFoZUNodFlYZ3BPMXh1SUNCeVpYUjFjbTRnS0hZcElEMCtJRjl0YVc0b1gyMWhlQ2gyS1NrN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdZMjl1WkdsMGFXOXVZV3dnUFNBb1kyOXVaR2wwYVc5dUxDQnBabFJ5ZFdVc0lHbG1SbUZzYzJVZ1BTQnViMjl3S1NBOVBpQW9kaXdnWVdOMGFXOXVLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQmpiMjVrYVhScGIyNG9kaXdnWVdOMGFXOXVLU0EvSUdsbVZISjFaU2gyTENCaFkzUnBiMjRwSURvZ2FXWkdZV3h6WlNoMkxDQmhZM1JwYjI0cE8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCUWFYQmxYRzRnS2lCRGIyMXdiM05sSUc5MGFHVnlJSFJ5WVc1elptOXliV1Z5Y3lCMGJ5QnlkVzRnYkdsdVpXRnlhV3g1WEc0Z0tpQndhWEJsS0cxcGJpZ3lNQ2tzSUcxaGVDZzBNQ2twWEc0Z0tpQkFjR0Z5WVcwZ0lIc3VMaTVtZFc1amRHbHZibk45SUhSeVlXNXpabTl5YldWeWMxeHVJQ29nUUhKbGRIVnliaUI3Wm5WdVkzUnBiMjU5WEc0Z0tpOWNibVY0Y0c5eWRDQmpiMjV6ZENCd2FYQmxJRDBnS0M0dUxuUnlZVzV6Wm05eWJXVnljeWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQnVkVzFVY21GdWMyWnZjbTFsY25NZ1BTQjBjbUZ1YzJadmNtMWxjbk11YkdWdVozUm9PMXh1SUNCc1pYUWdhU0E5SURBN1hHNWNiaUFnY21WMGRYSnVJQ2hoWTJNc0lDNHVMbUZ5WjNNcElEMCtJSHRjYmlBZ0lDQnNaWFFnZGlBOUlHRmpZenRjYmlBZ0lDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z2JuVnRWSEpoYm5ObWIzSnRaWEp6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJSFlnUFNCMGNtRnVjMlp2Y20xbGNuTmJhVjBvZGl3Z0xpNHVZWEpuY3lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFk3WEc0Z0lIMDdYRzU5TzF4dVhHNHZLaXBjYmlBcUlFbHVkR1Z5Y0c5c1lYUmxJR1p5YjIwZ2MyVjBJRzltSUhaaGJIVmxjeUIwYnlCaGJtOTBhR1Z5WEc0Z0tpQkFjR0Z5WVcwZ0lIdEJjbkpoZVgwZ2FXNXdkWFFnWVhKeVlYbGNiaUFxSUVCd1lYSmhiU0FnZTBGeWNtRjVmU0J2ZFhSd2RYUmNiaUFxSUVCd1lYSmhiU0FnZTBaMWJtTjBhVzl1ZlNCeVlXNW5aVVZoYzJsdVoxeHVJQ29nUUhKbGRIVnliaUI3Um5WdVkzUnBiMjU5WEc0Z0tpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGJuUmxjbkJ2YkdGMFpTQTlJQ2hwYm5CMWRDd2diM1YwY0hWMExDQnlZVzVuWlVWaGMybHVaeWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQnlZVzVuWlV4bGJtZDBhQ0E5SUdsdWNIVjBMbXhsYm1kMGFEdGNiaUFnWTI5dWMzUWdabWx1WVd4SmJtUmxlQ0E5SUhKaGJtZGxUR1Z1WjNSb0lDMGdNVHRjYmx4dUlDQnlaWFIxY200Z0tIWXBJRDArSUh0Y2JpQWdJQ0F2THlCSlppQjJZV3gxWlNCdmRYUnphV1JsSUcxcGJtbHRkVzBnY21GdVoyVXNJSEYxYVdOcmJIa2djbVYwZFhKdVhHNGdJQ0FnYVdZZ0tIWWdQRDBnYVc1d2RYUmJNRjBwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ2ZFhSd2RYUmJNRjA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnU1dZZ2RtRnNkV1VnYjNWMGMybGtaU0J0WVhocGJYVnRJSEpoYm1kbExDQnhkV2xqYTJ4NUlISmxkSFZ5Ymx4dUlDQWdJR2xtSUNoMklENDlJR2x1Y0hWMFcyWnBibUZzU1c1a1pYaGRLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdiM1YwY0hWMFcyWnBibUZzU1c1a1pYaGRPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHeGxkQ0JwSUQwZ01UdGNibHh1SUNBZ0lDOHZJRVpwYm1RZ2FXNWtaWGdnYjJZZ2NtRnVaMlVnYzNSaGNuUmNiaUFnSUNCbWIzSWdLRHNnYVNBOElISmhibWRsVEdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lHbG1JQ2hwYm5CMWRGdHBYU0ErSUhZZ2ZId2dhU0E5UFQwZ1ptbHVZV3hKYm1SbGVDa2dlMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCamIyNXpkQ0J3Y205bmNtVnpjMGx1VW1GdVoyVWdQU0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNocGJuQjFkRnRwSUMwZ01WMHNJR2x1Y0hWMFcybGRMQ0IyS1R0Y2JpQWdJQ0JqYjI1emRDQmxZWE5sWkZCeWIyZHlaWE56SUQwZ0tISmhibWRsUldGemFXNW5LU0EvSUhKaGJtZGxSV0Z6YVc1blcya2dMU0F4WFNod2NtOW5jbVZ6YzBsdVVtRnVaMlVwSURvZ2NISnZaM0psYzNOSmJsSmhibWRsTzF4dUlDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWh2ZFhSd2RYUmJhU0F0SURGZExDQnZkWFJ3ZFhSYmFWMHNJR1ZoYzJWa1VISnZaM0psYzNNcE8xeHVJQ0I5TzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElITjFZblJ5WVdOMElEMGdLRzl5YVdkcGJpa2dQVDRnS0hZcElEMCtJSFlnTFNCdmNtbG5hVzQ3WEc1bGVIQnZjblFnWTI5dWMzUWdZV1JrSUQwZ0tHOXlhV2RwYmlrZ1BUNGdLSFlwSUQwK0lIWWdLeUJ2Y21sbmFXNDdYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHbDJhV1JsSUQwZ0tHOXlhV2RwYmlrZ1BUNGdLSFlwSUQwK0lIWWdMeUJ2Y21sbmFXNDdYRzVsZUhCdmNuUWdZMjl1YzNRZ2JYVnNkR2x3YkhrZ1BTQW9iM0pwWjJsdUtTQTlQaUFvZGlrZ1BUNGdkaUFxSUc5eWFXZHBianRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR2RsYm1WeVlYUmxUbTl1U1c1MFpYSm5jbUYwWldSVGNISnBibWNnUFNBb1lXeDBaWEpFYVhOd2JHRmpaVzFsYm5RZ1BTQnViMjl3S1NBOVBpQW9ZMjl1YzNSaGJuUXNJRzl5YVdkcGJpa2dQVDRnS0hZcElEMCtJSHRjYmlBZ1kyOXVjM1FnWkdsemNHeGhZMlZ0Wlc1MElEMGdiM0pwWjJsdUlDMGdkanRjYmlBZ1kyOXVjM1FnYzNCeWFXNW5UVzlrYVdacFpXUkVhWE53YkdGalpXMWxiblFnUFNBdElHTnZibk4wWVc1MElDb2dLREFnTFNCaGJIUmxja1JwYzNCc1lXTmxiV1Z1ZENoTllYUm9MbUZpY3loa2FYTndiR0ZqWlcxbGJuUXBLU2s3WEc0Z0lISmxkSFZ5YmlBb1pHbHpjR3hoWTJWdFpXNTBJRHc5SURBcElEOGdiM0pwWjJsdUlDc2djM0J5YVc1blRXOWthV1pwWldSRWFYTndiR0ZqWlcxbGJuUWdPaUJ2Y21sbmFXNGdMU0J6Y0hKcGJtZE5iMlJwWm1sbFpFUnBjM0JzWVdObGJXVnVkRHRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCemNISnBibWNnUFNCblpXNWxjbUYwWlU1dmJrbHVkR1Z5WjNKaGRHVmtVM0J5YVc1bktDazdYRzVsZUhCdmNuUWdZMjl1YzNRZ2JtOXViR2x1WldGeVUzQnlhVzVuSUQwZ1oyVnVaWEpoZEdWT2IyNUpiblJsY21keVlYUmxaRk53Y21sdVp5aE5ZWFJvTG5OeGNuUXBPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdkM0poY0NBOUlDaHRhVzRzSUcxaGVDa2dQVDRnS0hZcElEMCtJSHRjYmlBZ1kyOXVjM1FnY21GdVoyVlRhWHBsSUQwZ2JXRjRJQzBnYldsdU8xeHVJQ0J5WlhSMWNtNGdLQ2gySUMwZ2JXbHVLU0FsSUhKaGJtZGxVMmw2WlNBcklISmhibWRsVTJsNlpTa2dKU0J5WVc1blpWTnBlbVVnS3lCdGFXNDdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzIxdmIzUm9JRDBnS0hOMGNtVnVaM1JvSUQwZ05UQXBJRDArSUh0Y2JpQWdiR1YwSUhCeVpYWnBiM1Z6Vm1Gc2RXVWdQU0F3TzF4dUlDQnNaWFFnYkdGemRGVndaR0YwWldRZ1BTQXdPMXh1WEc0Z0lISmxkSFZ5YmlBb2Rpa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd0lEMGdZM1Z5Y21WdWRFWnlZVzFsVkdsdFpTZ3BPMXh1SUNBZ0lHTnZibk4wSUhScGJXVkVaV3gwWVNBOUlDaGpkWEp5Wlc1MFJuSmhiV1Z6ZEdGdGNDQWhQVDBnYkdGemRGVndaR0YwWldRcElEOGdZM1Z5Y21WdWRFWnlZVzFsYzNSaGJYQWdMU0JzWVhOMFZYQmtZWFJsWkNBNklEQTdYRzRnSUNBZ1kyOXVjM1FnYm1WM1ZtRnNkV1VnUFNCMGFXMWxSR1ZzZEdFZ1B5QmpZV3hqVTIxdmIzUm9hVzVuS0hZc0lIQnlaWFpwYjNWelZtRnNkV1VzSUhScGJXVkVaV3gwWVN3Z2MzUnlaVzVuZEdncElEb2djSEpsZG1sdmRYTldZV3gxWlR0Y2JpQWdJQ0JzWVhOMFZYQmtZWFJsWkNBOUlHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd08xeHVJQ0FnSUhCeVpYWnBiM1Z6Vm1Gc2RXVWdQU0J1WlhkV1lXeDFaVHRjYmlBZ0lDQnlaWFIxY200Z2JtVjNWbUZzZFdVN1hHNGdJSDA3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2MyNWhjQ0E5SUNod2IybHVkSE1wSUQwK0lIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCd2IybHVkSE1nUFQwOUlDZHVkVzFpWlhJbktTQjdYRzRnSUNBZ2NtVjBkWEp1SUNoMktTQTlQaUJOWVhSb0xuSnZkVzVrS0hZZ0x5QndiMmx1ZEhNcElDb2djRzlwYm5Sek8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lHeGxkQ0JwSUQwZ01EdGNiaUFnSUNCamIyNXpkQ0J1ZFcxUWIybHVkSE1nUFNCd2IybHVkSE11YkdWdVozUm9PMXh1WEc0Z0lDQWdjbVYwZFhKdUlDaDJLU0E5UGlCN1hHNGdJQ0FnSUNCc1pYUWdiR0Z6ZEVScGMzUmhibU5sSUQwZ1RXRjBhQzVoWW5Nb2NHOXBiblJ6V3pCZElDMGdkaWs3WEc1Y2JpQWdJQ0FnSUdadmNpQW9hU0E5SURFN0lHa2dQQ0J1ZFcxUWIybHVkSE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQndiMmx1ZENBOUlIQnZhVzUwYzF0cFhUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pHbHpkR0Z1WTJVZ1BTQk5ZWFJvTG1GaWN5aHdiMmx1ZENBdElIWXBPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaGthWE4wWVc1alpTQTlQVDBnTUNrZ2NtVjBkWEp1SUhCdmFXNTBPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaGthWE4wWVc1alpTQStJR3hoYzNSRWFYTjBZVzVqWlNrZ2NtVjBkWEp1SUhCdmFXNTBjMXRwSUMwZ01WMDdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHa2dQVDA5SUc1MWJWQnZhVzUwY3lBdElERXBJSEpsZEhWeWJpQndiMmx1ZER0Y2JseHVJQ0FnSUNBZ0lDQnNZWE4wUkdsemRHRnVZMlVnUFNCa2FYTjBZVzVqWlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dUlDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNSbGNITWdQU0FvYzNSbGNITXNJRzFwYmlBOUlEQXNJRzFoZUNBOUlERXNJR1JwY21WamRHbHZiaUE5SUNkemRHRnlkQ2NwSUQwK0lDaDJLU0E5UGlCN1hHNGdJR052Ym5OMElIQnliMmR5WlhOeklEMGdaMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvYldsdUxDQnRZWGdzSUhZcE8xeHVJQ0J5WlhSMWNtNGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vYldsdUxDQnRZWGdzSUhOMFpYQlFjbTluY21WemN5aHpkR1Z3Y3l3Z2NISnZaM0psYzNNc0lHUnBjbVZqZEdsdmJpa3BPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhSeVlXNXpabTl5YlVOb2FXeGtWbUZzZFdWeklEMGdLR05vYVd4a1ZISmhibk5tYjNKdFpYSnpLU0E5UGlCN1hHNGdJR052Ym5OMElHMTFkR0ZpYkdWVGRHRjBaU0E5SUh0OU8xeHVJQ0J5WlhSMWNtNGdLSFlwSUQwK0lIdGNiaUFnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZGlrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnWTJocGJHUlVjbUZ1YzJadmNtMWxjaUE5SUdOb2FXeGtWSEpoYm5ObWIzSnRaWEp6VzJ0bGVWMDdYRzRnSUNBZ0lDQnBaaUFvWTJocGJHUlVjbUZ1YzJadmNtMWxjaWtnZTF4dUlDQWdJQ0FnSUNCdGRYUmhZbXhsVTNSaGRHVmJhMlY1WFNBOUlHTm9hV3hrVkhKaGJuTm1iM0p0WlhJb2RsdHJaWGxkS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdiWFYwWVdKc1pWTjBZWFJsTzF4dUlDQjlPMXh1ZlR0Y2JseHVMeThnVlc1cGRDQjBjbUZ1YzJadmNtMWxjbk5jYm1WNGNHOXlkQ0JqYjI1emRDQndaWEpqWlc1MElEMGdZWEJ3Wlc1a1ZXNXBkQ2duSlNjcE8xeHVaWGh3YjNKMElHTnZibk4wSUdSbFozSmxaWE1nUFNCaGNIQmxibVJWYm1sMEtDZGtaV2NuS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0J3ZUNBOUlHRndjR1Z1WkZWdWFYUW9KM0I0SnlrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCeVoySlZibWwwSUQwZ2NHbHdaU2hjYmlBZ1kyeGhiWEFvTUN3Z01qVTFLU3hjYmlBZ1RXRjBhQzV5YjNWdVpGeHVLVHRjYmx4dVkyOXVjM1FnY21kaVlWUmxiWEJzWVhSbElEMGdLSHNnY21Wa0xDQm5jbVZsYml3Z1lteDFaU3dnWVd4d2FHRWdQU0F4SUgwcElEMCtYRzRnSUdCeVoySmhLQ1I3Y21Wa2ZTd2dKSHRuY21WbGJuMHNJQ1I3WW14MVpYMHNJQ1I3WVd4d2FHRjlLV0E3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J5WjJKaElEMGdjR2x3WlNoY2JpQWdkSEpoYm5ObWIzSnRRMmhwYkdSV1lXeDFaWE1vZTF4dUlDQWdJSEpsWkRvZ2NtZGlWVzVwZEN4Y2JpQWdJQ0JuY21WbGJqb2djbWRpVlc1cGRDeGNiaUFnSUNCaWJIVmxPaUJ5WjJKVmJtbDBMRnh1SUNBZ0lHRnNjR2hoWEc0Z0lIMHBMRnh1SUNCeVoySmhWR1Z0Y0d4aGRHVmNiaWs3WEc1Y2JtTnZibk4wSUdoemJHRlVaVzF3YkdGMFpTQTlJQ2g3SUdoMVpTd2djMkYwZFhKaGRHbHZiaXdnYkdsbmFIUnVaWE56TENCaGJIQm9ZU0E5SURFZ2ZTa2dQVDVjYmlBZ1lHaHpiR0VvSkh0b2RXVjlMQ0FrZTNOaGRIVnlZWFJwYjI1OUxDQWtlMnhwWjJoMGJtVnpjMzBzSUNSN1lXeHdhR0Y5S1dBN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCb2MyeGhJRDBnY0dsd1pTaGNiaUFnZEhKaGJuTm1iM0p0UTJocGJHUldZV3gxWlhNb2UxeHVJQ0FnSUdoMVpUb2djR0Z5YzJWSmJuUXNYRzRnSUNBZ2MyRjBkWEpoZEdsdmJqb2djR1Z5WTJWdWRDeGNiaUFnSUNCc2FXZG9kRzVsYzNNNklIQmxjbU5sYm5Rc1hHNGdJQ0FnWVd4d2FHRmNiaUFnZlNrc1hHNGdJR2h6YkdGVVpXMXdiR0YwWlZ4dUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnZiRzl5SUQwZ0tIWXBJRDArSUh0Y2JpQWdhV1lnS0hZdWFHRnpUM2R1VUhKdmNHVnlkSGtvSjNKbFpDY3BLU0I3WEc0Z0lDQWdjbVYwZFhKdUlISm5ZbUVvZGlrN1hHNGdJSDBnWld4elpTQnBaaUFvZGk1b1lYTlBkMjVRY205d1pYSjBlU2duYUhWbEp5a3BJSHRjYmlBZ0lDQnlaWFIxY200Z2FITnNZU2gyS1R0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnZGp0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmhiSEJvWVNBOUlHTnNZVzF3S0RBc0lERXBPMXh1WEc1amIyNXpkQ0JpYkdWdVpDQTlJQ2htY205dExDQjBieXdnZGlrZ1BUNGdlMXh1SUNCamIyNXpkQ0JtY205dFJYaHdieUE5SUdaeWIyMGdLaUJtY205dE8xeHVJQ0JqYjI1emRDQjBiMFY0Y0c4Z1BTQjBieUFxSUhSdk8xeHVJQ0J5WlhSMWNtNGdUV0YwYUM1emNYSjBLSFlnS2lBb2RHOUZlSEJ2SUMwZ1puSnZiVVY0Y0c4cElDc2dabkp2YlVWNGNHOHBPMXh1ZlR0Y2JpOHZJR2gwZEhBNkx5OWpiMlJsY0dWdUxtbHZMMjl6ZFdKc1lXdGxMM0JsYmk5NFIxWldZVTVjYm1WNGNHOXlkQ0JqYjI1emRDQmliR1Z1WkVOdmJHOXlJRDBnS0daeWIyMHNJSFJ2S1NBOVBpQjdYRzRnSUdOdmJuTjBJR1p5YjIxRGIyeHZjaUE5SUdselUzUnlhVzVuS0daeWIyMHBJRDhnY0dGeWMyVkRiMnh2Y2lobWNtOXRLU0E2SUdaeWIyMDdYRzRnSUdOdmJuTjBJSFJ2UTI5c2IzSWdQU0JwYzFOMGNtbHVaeWgwYnlrZ1B5QndZWEp6WlVOdmJHOXlLSFJ2S1RvZ2RHODdYRzVjYmlBZ1kyOXVjM1FnWW14bGJtUmxaQ0E5SUhzZ0xpNHVabkp2YlVOdmJHOXlJSDA3WEc1Y2JpQWdjbVYwZFhKdUlDaDJLU0E5UGlCN1hHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJR0pzWlc1a1pXUXBJSHRjYmlBZ0lDQWdJR0pzWlc1a1pXUmJhMlY1WFNBOUlHSnNaVzVrS0daeWIyMURiMnh2Y2x0clpYbGRMQ0IwYjBOdmJHOXlXMnRsZVYwc0lIWXBPMXh1SUNBZ0lIMWNiaUFnSUNCaWJHVnVaR1ZrTG5KbFpDQTlJR0pzWlc1a0tHWnliMjFEYjJ4dmNpNXlaV1FzSUhSdlEyOXNiM0l1Y21Wa0xDQjJLVHRjYmlBZ0lDQmliR1Z1WkdWa0xtZHlaV1Z1SUQwZ1lteGxibVFvWm5KdmJVTnZiRzl5TG1keVpXVnVMQ0IwYjBOdmJHOXlMbWR5WldWdUxDQjJLVHRjYmlBZ0lDQmliR1Z1WkdWa0xtSnNkV1VnUFNCaWJHVnVaQ2htY205dFEyOXNiM0l1WW14MVpTd2dkRzlEYjJ4dmNpNWliSFZsTENCMktUdGNiaUFnSUNCaWJHVnVaR1ZrTG1Gc2NHaGhJRDBnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb1puSnZiVU52Ykc5eUxtRnNjR2hoTENCMGIwTnZiRzl5TG1Gc2NHaGhMQ0IyS1R0Y2JpQWdJQ0J5WlhSMWNtNGdZbXhsYm1SbFpEdGNiaUFnZlR0Y2JuMDdYRzVjYmk4dklFSmxlbWxsY2lCeVpYTnZiSFpsY2x4dUx5OGdVbVZtWVdOMGIzSmxaQ0JtY205dElHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW9kV2RvYzJzdlltVjZhV1Z5TDJKc2IySXZiV0Z6ZEdWeUwybHVaR1Y0TG1welhHNHZLaXBjYmlNaklGUm9aU0JOU1ZRZ1RHbGpaVzV6WlNBb1RVbFVLU0FqSTF4dVhHNURiM0I1Y21sbmFIUWdLR01wSURJd01UTWdTSFZuYUNCTFpXNXVaV1I1WEc1Y2JsQmxjbTFwYzNOcGIyNGdhWE1nYUdWeVpXSjVJR2R5WVc1MFpXUXNJR1p5WldVZ2IyWWdZMmhoY21kbExDQjBieUJoYm5rZ2NHVnljMjl1SUc5aWRHRnBibWx1WnlCaElHTnZjSGxjYm05bUlIUm9hWE1nYzI5bWRIZGhjbVVnWVc1a0lHRnpjMjlqYVdGMFpXUWdaRzlqZFcxbGJuUmhkR2x2YmlCbWFXeGxjeUFvZEdobElGd2lVMjltZEhkaGNtVmNJaWtzSUhSdklHUmxZV3hjYm1sdUlIUm9aU0JUYjJaMGQyRnlaU0IzYVhSb2IzVjBJSEpsYzNSeWFXTjBhVzl1TENCcGJtTnNkV1JwYm1jZ2QybDBhRzkxZENCc2FXMXBkR0YwYVc5dUlIUm9aU0J5YVdkb2RITmNiblJ2SUhWelpTd2dZMjl3ZVN3Z2JXOWthV1o1TENCdFpYSm5aU3dnY0hWaWJHbHphQ3dnWkdsemRISnBZblYwWlN3Z2MzVmliR2xqWlc1elpTd2dZVzVrTDI5eUlITmxiR3hjYm1OdmNHbGxjeUJ2WmlCMGFHVWdVMjltZEhkaGNtVXNJR0Z1WkNCMGJ5QndaWEp0YVhRZ2NHVnljMjl1Y3lCMGJ5QjNhRzl0SUhSb1pTQlRiMlowZDJGeVpTQnBjMXh1Wm5WeWJtbHphR1ZrSUhSdklHUnZJSE52TENCemRXSnFaV04wSUhSdklIUm9aU0JtYjJ4c2IzZHBibWNnWTI5dVpHbDBhVzl1Y3pwY2JseHVWR2hsSUdGaWIzWmxJR052Y0hseWFXZG9kQ0J1YjNScFkyVWdZVzVrSUhSb2FYTWdjR1Z5YldsemMybHZiaUJ1YjNScFkyVWdjMmhoYkd3Z1ltVWdhVzVqYkhWa1pXUWdhVzVjYm1Gc2JDQmpiM0JwWlhNZ2IzSWdjM1ZpYzNSaGJuUnBZV3dnY0c5eWRHbHZibk1nYjJZZ2RHaGxJRk52Wm5SM1lYSmxMbHh1WEc1VVNFVWdVMDlHVkZkQlVrVWdTVk1nVUZKUFZrbEVSVVFnWENKQlV5QkpVMXdpTENCWFNWUklUMVZVSUZkQlVsSkJUbFJaSUU5R0lFRk9XU0JMU1U1RUxDQkZXRkJTUlZOVElFOVNYRzVKVFZCTVNVVkVMQ0JKVGtOTVZVUkpUa2NnUWxWVUlFNVBWQ0JNU1UxSlZFVkVJRlJQSUZSSVJTQlhRVkpTUVU1VVNVVlRJRTlHSUUxRlVrTklRVTVVUVVKSlRFbFVXU3hjYmtaSlZFNUZVMU1nUms5U0lFRWdVRUZTVkVsRFZVeEJVaUJRVlZKUVQxTkZJRUZPUkNCT1QwNUpUa1pTU1U1SFJVMUZUbFF1SUVsT0lFNVBJRVZXUlU1VUlGTklRVXhNSUZSSVJWeHVRVlZVU0U5U1V5QlBVaUJEVDFCWlVrbEhTRlFnU0U5TVJFVlNVeUJDUlNCTVNVRkNURVVnUms5U0lFRk9XU0JEVEVGSlRTd2dSRUZOUVVkRlV5QlBVaUJQVkVoRlVseHVURWxCUWtsTVNWUlpMQ0JYU0VWVVNFVlNJRWxPSUVGT0lFRkRWRWxQVGlCUFJpQkRUMDVVVWtGRFZDd2dWRTlTVkNCUFVpQlBWRWhGVWxkSlUwVXNJRUZTU1ZOSlRrY2dSbEpQVFN4Y2JrOVZWQ0JQUmlCUFVpQkpUaUJEVDA1T1JVTlVTVTlPSUZkSlZFZ2dWRWhGSUZOUFJsUlhRVkpGSUU5U0lGUklSU0JWVTBVZ1QxSWdUMVJJUlZJZ1JFVkJURWxPUjFNZ1NVNWNibFJJUlNCVFQwWlVWMEZTUlM1Y2JpQXFMMXh1WTI5dWMzUWdjbVZ6YjJ4MlpUTWdQU0FvY0c5cGJuUnpLU0E5UGlBb2RDa2dQVDRnZTF4dUlDQmpiMjV6ZENCMWRDQTlJREVnTFNCME8xeHVJQ0J5WlhSMWNtNGdLSEJ2YVc1MGMxc3dYU0FxSUhWMElDc2djRzlwYm5Seld6RmRJQ29nZENrZ0tpQjFkQ0FySUNod2IybHVkSE5iTVYwZ0tpQjFkQ0FySUhCdmFXNTBjMXN5WFNBcUlIUXBJQ29nZER0Y2JuMDdYRzVjYm1OdmJuTjBJSEpsYzI5c2RtVTBJRDBnS0hCdmFXNTBjeWtnUFQ0Z0tIUXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2RYUWdQU0F4SUMwZ2REdGNiaUFnWTI5dWMzUWdZVEVnUFNCd2IybHVkSE5iTVYwZ0tpQjFkQ0FySUhCdmFXNTBjMXN5WFNBcUlIUTdYRzRnSUhKbGRIVnliaUFvS0hCdmFXNTBjMXN3WFNBcUlIVjBJQ3NnY0c5cGJuUnpXekZkSUNvZ2RDa2dLaUIxZENBcklHRXhJQ29nZENrZ0tpQjFkQ0FySUNoaE1TQXFJSFYwSUNzZ0tIQnZhVzUwYzFzeVhTQXFJSFYwSUNzZ2NHOXBiblJ6V3pOZElDb2dkQ2tnS2lCMEtTQXFJSFE3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1ltVjZhV1Z5SUQwZ0tIQnZhVzUwY3lrZ1BUNWNiaUFnS0hCdmFXNTBjeTVzWlc1bmRHZ2dQVDA5SURNcElEOGdjbVZ6YjJ4MlpUTW9jRzlwYm5SektTQTZJSEpsYzI5c2RtVTBLSEJ2YVc1MGN5azdYRzRpWFgwPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luYy90cmFuc2Zvcm1lcnMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNvbXBsZXggPSBleHBvcnRzLmNvbG9yID0gZXhwb3J0cy5oc2xhID0gZXhwb3J0cy5oZXggPSBleHBvcnRzLnJnYmEgPSBleHBvcnRzLnJnYlVuaXQgPSBleHBvcnRzLnNjYWxlID0gZXhwb3J0cy5weCA9IGV4cG9ydHMucGVyY2VudCA9IGV4cG9ydHMuZGVncmVlcyA9IGV4cG9ydHMuYWxwaGEgPSBleHBvcnRzLm51bWJlciA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBWYWx1ZSB0eXBlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGFscGhhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBkZWdyZWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBoZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGhzbGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHBlcmNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHB4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiByZ2JVbml0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiByZ2JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHNjYWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgbnVtYmVyID0gZXhwb3J0cy5udW1iZXIgPSB7XG4gIHRlc3Q6IF91dGlscy5pc051bSxcbiAgcGFyc2U6IHBhcnNlRmxvYXRcbn07XG5cbi8vIFZhbHVlIHR5cGVzXG52YXIgYWxwaGEgPSBleHBvcnRzLmFscGhhID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICB0cmFuc2Zvcm06IF90cmFuc2Zvcm1lcnMuYWxwaGFcbn0pO1xuXG52YXIgZGVncmVlcyA9IGV4cG9ydHMuZGVncmVlcyA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCdkZWcnLCBfdHJhbnNmb3JtZXJzLmRlZ3JlZXMpO1xudmFyIHBlcmNlbnQgPSBleHBvcnRzLnBlcmNlbnQgPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgnJScsIF90cmFuc2Zvcm1lcnMucGVyY2VudCk7XG52YXIgcHggPSBleHBvcnRzLnB4ID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJ3B4JywgX3RyYW5zZm9ybWVycy5weCk7XG5cbnZhciBzY2FsZSA9IGV4cG9ydHMuc2NhbGUgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIGRlZmF1bHQ6IDFcbn0pO1xuXG52YXIgcmdiVW5pdCA9IGV4cG9ydHMucmdiVW5pdCA9IF9leHRlbmRzKHt9LCBudW1iZXIsIHtcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLnJnYlVuaXRcbn0pO1xuXG52YXIgcmdiYSA9IGV4cG9ydHMucmdiYSA9IHtcbiAgdGVzdDogX3V0aWxzLmlzUmdiLFxuICBwYXJzZTogX3BhcnNlcnMucmdiYSxcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLnJnYmFcbn07XG5cbnZhciBoZXggPSBleHBvcnRzLmhleCA9IF9leHRlbmRzKHt9LCByZ2JhLCB7XG4gIHRlc3Q6IF91dGlscy5pc0hleCxcbiAgcGFyc2U6IF9wYXJzZXJzLmhleFxufSk7XG5cbnZhciBoc2xhID0gZXhwb3J0cy5oc2xhID0ge1xuICB0ZXN0OiBfdXRpbHMuaXNIc2wsXG4gIHBhcnNlOiBfcGFyc2Vycy5oc2xhLFxuICB0cmFuc2Zvcm06IF90cmFuc2Zvcm1lcnMuaHNsYVxufTtcblxudmFyIGNvbG9yID0gZXhwb3J0cy5jb2xvciA9IHtcbiAgcGFyc2U6IF9wYXJzZXJzLmNvbG9yLFxuICB0ZXN0OiBfdXRpbHMuaXNDb2xvcixcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLmNvbG9yXG59O1xuXG52YXIgRkxPQVRfUkVHRVggPSAvKC0pPyhcXGRbXFxkXFwuXSopL2c7XG52YXIgZ2VuZXJhdGVUb2tlbiA9IGZ1bmN0aW9uIGdlbmVyYXRlVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuICckeycgKyB0b2tlbiArICd9Jztcbn07XG52YXIgY29tcGxleCA9IGV4cG9ydHMuY29tcGxleCA9IHtcbiAgdGVzdDogZnVuY3Rpb24gdGVzdCh2KSB7XG4gICAgdmFyIG1hdGNoZXMgPSB2Lm1hdGNoICYmIHYubWF0Y2goRkxPQVRfUkVHRVgpO1xuICAgIHJldHVybiAoMCwgX3V0aWxzLmlzQXJyYXkpKG1hdGNoZXMpICYmIG1hdGNoZXMubGVuZ3RoID4gMTtcbiAgfSxcbiAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKHYpIHtcbiAgICB2YXIgcGFyc2VkVmFsdWUgPSB7fTtcbiAgICB2Lm1hdGNoKEZMT0FUX1JFR0VYKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgcmV0dXJuIHBhcnNlZFZhbHVlW2ldID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnNlZFZhbHVlO1xuICB9LFxuICBjcmVhdGVUcmFuc2Zvcm1lcjogZnVuY3Rpb24gY3JlYXRlVHJhbnNmb3JtZXIocHJvcCkge1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICB2YXIgdGVtcGxhdGUgPSBwcm9wLnJlcGxhY2UoRkxPQVRfUkVHRVgsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZW5lcmF0ZVRva2VuKGNvdW50ZXIrKyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgIHZhciBvdXRwdXQgPSB0ZW1wbGF0ZTtcbiAgICAgIGZvciAodmFyIGtleSBpbiB2KSB7XG4gICAgICAgIGlmICh2Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZG1Gc2RXVXRkSGx3WlhNdWFuTWlYU3dpYm1GdFpYTWlPbHNpYm5WdFltVnlJaXdpZEdWemRDSXNJbkJoY25ObElpd2ljR0Z5YzJWR2JHOWhkQ0lzSW1Gc2NHaGhJaXdpZEhKaGJuTm1iM0p0SWl3aVpHVm5jbVZsY3lJc0luQmxjbU5sYm5RaUxDSndlQ0lzSW5OallXeGxJaXdpWkdWbVlYVnNkQ0lzSW5KbllsVnVhWFFpTENKeVoySmhJaXdpYUdWNElpd2lhSE5zWVNJc0ltTnZiRzl5SWl3aVJreFBRVlJmVWtWSFJWZ2lMQ0puWlc1bGNtRjBaVlJ2YTJWdUlpd2lkRzlyWlc0aUxDSmpiMjF3YkdWNElpd2lkaUlzSW0xaGRHTm9aWE1pTENKdFlYUmphQ0lzSW14bGJtZDBhQ0lzSW5CaGNuTmxaRlpoYkhWbElpd2labTl5UldGamFDSXNJblpoYkhWbElpd2lhU0lzSW1OeVpXRjBaVlJ5WVc1elptOXliV1Z5SWl3aWNISnZjQ0lzSW1OdmRXNTBaWElpTENKMFpXMXdiR0YwWlNJc0luSmxjR3hoWTJVaUxDSnZkWFJ3ZFhRaUxDSnJaWGtpTENKb1lYTlBkMjVRY205d1pYSjBlU0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3YTFGQlFVRTdPenM3T3pzN096czdPenM3T3p0QlFXRkJPenRCUVZWQk96dEJRVTFCT3p0QlFWVlBMRWxCUVUxQkxEQkNRVUZUTzBGQlEzQkNReXh2UWtGRWIwSTdRVUZGY0VKRExGTkJRVTlETzBGQlJtRXNRMEZCWmpzN1FVRkxVRHRCUVVOUExFbEJRVTFETEhGRFFVTlNTaXhOUVVSUk8wRkJSVmhMTzBGQlJsY3NSVUZCVGpzN1FVRkxRU3hKUVVGTlF5dzBRa0ZCVlN3eVFrRkJaU3hMUVVGbUxIZENRVUZvUWp0QlFVTkJMRWxCUVUxRExEUkNRVUZWTERKQ1FVRmxMRWRCUVdZc2QwSkJRV2hDTzBGQlEwRXNTVUZCVFVNc2EwSkJRVXNzTWtKQlFXVXNTVUZCWml4dFFrRkJXRHM3UVVGRlFTeEpRVUZOUXl4eFEwRkRVbFFzVFVGRVVUdEJRVVZZVlN4WFFVRlRPMEZCUmtVc1JVRkJUanM3UVVGTFFTeEpRVUZOUXl4NVEwRkRVbGdzVFVGRVVUdEJRVVZZU3p0QlFVWlhMRVZCUVU0N08wRkJTMEVzU1VGQlRVOHNjMEpCUVU4N1FVRkRiRUpZTEc5Q1FVUnJRanRCUVVWc1FrTXNjMEpCUm10Q08wRkJSMnhDUnp0QlFVaHJRaXhEUVVGaU96dEJRVTFCTEVsQlFVMVJMR2xEUVVOU1JDeEpRVVJSTzBGQlJWaFlMRzlDUVVaWE8wRkJSMWhETzBGQlNGY3NSVUZCVGpzN1FVRk5RU3hKUVVGTldTeHpRa0ZCVHp0QlFVTnNRbUlzYjBKQlJHdENPMEZCUld4Q1F5eHpRa0ZHYTBJN1FVRkhiRUpITzBGQlNHdENMRU5CUVdJN08wRkJUVUVzU1VGQlRWVXNkMEpCUVZFN1FVRkRia0ppTEhWQ1FVUnRRanRCUVVWdVFrUXNjMEpCUm0xQ08wRkJSMjVDU1R0QlFVaHRRaXhEUVVGa096dEJRVTFRTEVsQlFVMVhMR05CUVdNc2EwSkJRWEJDTzBGQlEwRXNTVUZCVFVNc1owSkJRV2RDTEZOQlFXaENRU3hoUVVGblFpeERRVUZEUXl4TFFVRkVPMEZCUVVFc1UwRkJWeXhQUVVGUFFTeExRVUZRTEVkQlFXVXNSMEZCTVVJN1FVRkJRU3hEUVVGMFFqdEJRVU5QTEVsQlFVMURMRFJDUVVGVk8wRkJRM0pDYkVJc1VVRkJUU3hqUVVGRGJVSXNRMEZCUkN4RlFVRlBPMEZCUTFnc1VVRkJUVU1zVlVGQlZVUXNSVUZCUlVVc1MwRkJSaXhKUVVGWFJpeEZRVUZGUlN4TFFVRkdMRU5CUVZGT0xGZEJRVklzUTBGQk0wSTdRVUZEUVN4WFFVRlJMRzlDUVVGUlN5eFBRVUZTTEV0QlFXOUNRU3hSUVVGUlJTeE5RVUZTTEVkQlFXbENMRU5CUVRkRE8wRkJRMFFzUjBGS2IwSTdRVUZMY2tKeVFpeFRRVUZQTEdWQlFVTnJRaXhEUVVGRUxFVkJRVTg3UVVGRFdpeFJRVUZOU1N4alFVRmpMRVZCUVhCQ08wRkJRMEZLTEUxQlFVVkZMRXRCUVVZc1EwRkJVVTRzVjBGQlVpeEZRVUZ4UWxNc1QwRkJja0lzUTBGQk5rSXNWVUZCUTBNc1MwRkJSQ3hGUVVGUlF5eERRVUZTTzBGQlFVRXNZVUZCWTBnc1dVRkJXVWNzUTBGQldpeEpRVUZwUW5oQ0xGZEJRVmQxUWl4TFFVRllMRU5CUVM5Q08wRkJRVUVzUzBGQk4wSTdRVUZEUVN4WFFVRlBSaXhYUVVGUU8wRkJRMFFzUjBGVWIwSTdRVUZWY2tKSkxIRkNRVUZ0UWl3eVFrRkJRME1zU1VGQlJDeEZRVUZWTzBGQlF6TkNMRkZCUVVsRExGVkJRVlVzUTBGQlpEdEJRVU5CTEZGQlFVMURMRmRCUVZkR0xFdEJRVXRITEU5QlFVd3NRMEZCWVdoQ0xGZEJRV0lzUlVGQk1FSTdRVUZCUVN4aFFVRk5ReXhqUVVGallTeFRRVUZrTEVOQlFVNDdRVUZCUVN4TFFVRXhRaXhEUVVGcVFqczdRVUZGUVN4WFFVRlBMRlZCUVVOV0xFTkJRVVFzUlVGQlR6dEJRVU5hTEZWQlFVbGhMRk5CUVZOR0xGRkJRV0k3UVVGRFFTeFhRVUZMTEVsQlFVbEhMRWRCUVZRc1NVRkJaMEprTEVOQlFXaENMRVZCUVcxQ08wRkJRMnBDTEZsQlFVbEJMRVZCUVVWbExHTkJRVVlzUTBGQmFVSkVMRWRCUVdwQ0xFTkJRVW9zUlVGQk1rSTdRVUZEZWtKRUxHMUNRVUZUUVN4UFFVRlBSQ3hQUVVGUUxFTkJRV1ZtTEdOQlFXTnBRaXhIUVVGa0xFTkJRV1lzUlVGQmJVTmtMRVZCUVVWakxFZEJRVVlzUTBGQmJrTXNRMEZCVkR0QlFVTkVPMEZCUTBZN08wRkJSVVFzWVVGQlQwUXNUVUZCVUR0QlFVTkVMRXRCVkVRN1FVRlZSRHRCUVhoQ2IwSXNRMEZCYUVJaUxDSm1hV3hsSWpvaWRtRnNkV1V0ZEhsd1pYTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaXBjYmlBcUlGWmhiSFZsSUhSNWNHVnpYRzRnS2x4dUlDb2dZV3h3YUdGY2JpQXFJR1JsWjNKbFpYTmNiaUFxSUdobGVGeHVJQ29nYUhOc1lWeHVJQ29nY0dWeVkyVnVkRnh1SUNvZ2NIaGNiaUFxSUhKbllsVnVhWFJjYmlBcUlISm5ZbHh1SUNvZ2MyTmhiR1ZjYmlBcUwxeHVhVzF3YjNKMElIdGNiaUFnY21kaVZXNXBkQ0JoY3lCMGNtRnVjMlp2Y20xU1IwSlZibWwwTEZ4dUlDQnlaMkpoSUdGeklIUnlZVzV6Wm05eWJWSm5ZbUVzWEc0Z0lHRnNjR2hoSUdGeklIUnlZVzV6Wm05eWJVRnNjR2hoTEZ4dUlDQm9jMnhoSUdGeklIUnlZVzV6Wm05eWJVaHpiR0VzWEc0Z0lHTnZiRzl5SUdGeklIUnlZVzV6Wm05eWJVTnZiRzl5TEZ4dUlDQndlQ0JoY3lCMGNtRnVjMlp2Y20xUWVDeGNiaUFnY0dWeVkyVnVkQ0JoY3lCMGNtRnVjMlp2Y20xUVpYSmpaVzUwTEZ4dUlDQmtaV2R5WldWeklHRnpJSFJ5WVc1elptOXliVVJsWjNKbFpYTmNibjBnWm5KdmJTQW5MaTkwY21GdWMyWnZjbTFsY25Nbk8xeHVhVzF3YjNKMElIdGNiaUFnYUdWNElHRnpJSEJoY25ObFNHVjRMRnh1SUNCeVoySmhJR0Z6SUhCaGNuTmxVbWRpWVN4Y2JpQWdhSE5zWVNCaGN5QndZWEp6WlVoemJHRXNYRzRnSUdOdmJHOXlJR0Z6SUhCaGNuTmxRMjlzYjNKY2JuMGdabkp2YlNBbkxpOXdZWEp6WlhKekp6dGNibWx0Y0c5eWRDQjdYRzRnSUdOeVpXRjBaVlZ1YVhSVWVYQmxMRnh1SUNCcGMwRnljbUY1TEZ4dUlDQnBjMDUxYlN4Y2JpQWdhWE5TWjJJc1hHNGdJR2x6U0hOc0xGeHVJQ0JwYzBobGVDeGNiaUFnYVhORGIyeHZjbHh1ZlNCbWNtOXRJQ2N1TDNWMGFXeHpKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRzUxYldKbGNpQTlJSHRjYmlBZ2RHVnpkRG9nYVhOT2RXMHNYRzRnSUhCaGNuTmxPaUJ3WVhKelpVWnNiMkYwWEc1OU8xeHVYRzR2THlCV1lXeDFaU0IwZVhCbGMxeHVaWGh3YjNKMElHTnZibk4wSUdGc2NHaGhJRDBnZTF4dUlDQXVMaTV1ZFcxaVpYSXNYRzRnSUhSeVlXNXpabTl5YlRvZ2RISmhibk5tYjNKdFFXeHdhR0ZjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCa1pXZHlaV1Z6SUQwZ1kzSmxZWFJsVlc1cGRGUjVjR1VvSjJSbFp5Y3NJSFJ5WVc1elptOXliVVJsWjNKbFpYTXBPMXh1Wlhod2IzSjBJR052Ym5OMElIQmxjbU5sYm5RZ1BTQmpjbVZoZEdWVmJtbDBWSGx3WlNnbkpTY3NJSFJ5WVc1elptOXliVkJsY21ObGJuUXBPMXh1Wlhod2IzSjBJR052Ym5OMElIQjRJRDBnWTNKbFlYUmxWVzVwZEZSNWNHVW9KM0I0Snl3Z2RISmhibk5tYjNKdFVIZ3BPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjMk5oYkdVZ1BTQjdYRzRnSUM0dUxtNTFiV0psY2l4Y2JpQWdaR1ZtWVhWc2REb2dNVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhKbllsVnVhWFFnUFNCN1hHNGdJQzR1TG01MWJXSmxjaXhjYmlBZ2RISmhibk5tYjNKdE9pQjBjbUZ1YzJadmNtMVNSMEpWYm1sMFhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjbWRpWVNBOUlIdGNiaUFnZEdWemREb2dhWE5TWjJJc1hHNGdJSEJoY25ObE9pQndZWEp6WlZKblltRXNYRzRnSUhSeVlXNXpabTl5YlRvZ2RISmhibk5tYjNKdFVtZGlZVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdobGVDQTlJSHRjYmlBZ0xpNHVjbWRpWVN4Y2JpQWdkR1Z6ZERvZ2FYTklaWGdzWEc0Z0lIQmhjbk5sT2lCd1lYSnpaVWhsZUZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHaHpiR0VnUFNCN1hHNGdJSFJsYzNRNklHbHpTSE5zTEZ4dUlDQndZWEp6WlRvZ2NHRnljMlZJYzJ4aExGeHVJQ0IwY21GdWMyWnZjbTA2SUhSeVlXNXpabTl5YlVoemJHRmNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYjJ4dmNpQTlJSHRjYmlBZ2NHRnljMlU2SUhCaGNuTmxRMjlzYjNJc1hHNGdJSFJsYzNRNklHbHpRMjlzYjNJc1hHNGdJSFJ5WVc1elptOXliVG9nZEhKaGJuTm1iM0p0UTI5c2IzSmNibjA3WEc1Y2JtTnZibk4wSUVaTVQwRlVYMUpGUjBWWUlEMGdMeWd0S1Q4b1hGeGtXMXhjWkZ4Y0xsMHFLUzluTzF4dVkyOXVjM1FnWjJWdVpYSmhkR1ZVYjJ0bGJpQTlJQ2gwYjJ0bGJpa2dQVDRnSnlSN0p5QXJJSFJ2YTJWdUlDc2dKMzBuTzF4dVpYaHdiM0owSUdOdmJuTjBJR052YlhCc1pYZ2dQU0I3WEc0Z0lIUmxjM1E2SUNoMktTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2JXRjBZMmhsY3lBOUlIWXViV0YwWTJnZ0ppWWdkaTV0WVhSamFDaEdURTlCVkY5U1JVZEZXQ2s3WEc0Z0lDQWdjbVYwZFhKdUlDaHBjMEZ5Y21GNUtHMWhkR05vWlhNcElDWW1JRzFoZEdOb1pYTXViR1Z1WjNSb0lENGdNU2s3WEc0Z0lIMHNYRzRnSUhCaGNuTmxPaUFvZGlrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUhCaGNuTmxaRlpoYkhWbElEMGdlMzA3WEc0Z0lDQWdkaTV0WVhSamFDaEdURTlCVkY5U1JVZEZXQ2t1Wm05eVJXRmphQ2dvZG1Gc2RXVXNJR2twSUQwK0lIQmhjbk5sWkZaaGJIVmxXMmxkSUQwZ2NHRnljMlZHYkc5aGRDaDJZV3gxWlNrcE8xeHVJQ0FnSUhKbGRIVnliaUJ3WVhKelpXUldZV3gxWlR0Y2JpQWdmU3hjYmlBZ1kzSmxZWFJsVkhKaGJuTm1iM0p0WlhJNklDaHdjbTl3S1NBOVBpQjdYRzRnSUNBZ2JHVjBJR052ZFc1MFpYSWdQU0F3TzF4dUlDQWdJR052Ym5OMElIUmxiWEJzWVhSbElEMGdjSEp2Y0M1eVpYQnNZV05sS0VaTVQwRlVYMUpGUjBWWUxDQW9LU0E5UGlCblpXNWxjbUYwWlZSdmEyVnVLR052ZFc1MFpYSXJLeWtwTzF4dVhHNGdJQ0FnY21WMGRYSnVJQ2gyS1NBOVBpQjdYRzRnSUNBZ0lDQnNaWFFnYjNWMGNIVjBJRDBnZEdWdGNHeGhkR1U3WEc0Z0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkaWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9kaTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdiM1YwY0hWMElEMGdiM1YwY0hWMExuSmxjR3hoWTJVb1oyVnVaWEpoZEdWVWIydGxiaWhyWlhrcExDQjJXMnRsZVYwcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQnZkWFJ3ZFhRN1hHNGdJQ0FnZlR0Y2JpQWdmVnh1ZlR0Y2JpSmRmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jL3ZhbHVlLXR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnZnJhbWVzeW5jJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJy4uL2luYy9lYXNpbmcnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgY2xhbXBQcm9ncmVzcyA9ICgwLCBfdHJhbnNmb3JtZXJzLmNsYW1wKSgwLCAxKTtcblxudmFyIE5FWFRfU1RFUFMgPSB7XG4gIGxvb3A6IGZ1bmN0aW9uIGxvb3AodHdlZW4pIHtcbiAgICByZXR1cm4gdHdlZW4uc3RhcnQoKTtcbiAgfSxcbiAgeW95bzogZnVuY3Rpb24geW95byh0d2Vlbikge1xuICAgIHJldHVybiB0d2Vlbi5yZXZlcnNlKCkuc3RhcnQoKTtcbiAgfSxcbiAgZmxpcDogZnVuY3Rpb24gZmxpcCh0d2Vlbikge1xuICAgIHJldHVybiB0d2Vlbi5mbGlwKCkuc3RhcnQoKTtcbiAgfVxufTtcblxudmFyIFR3ZWVuID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFR3ZWVuLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBUd2VlbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdlZW4pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBUd2Vlbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uLFxuICAgICAgICBwbGF5RGlyZWN0aW9uID0gX3Byb3BzLnBsYXlEaXJlY3Rpb247XG5cblxuICAgIHRoaXMuZWxhcHNlZCA9IHBsYXlEaXJlY3Rpb24gPT09IDEgPyAwIDogZHVyYXRpb247XG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uID0gX3Byb3BzMi5kdXJhdGlvbixcbiAgICAgICAgZWFzZSA9IF9wcm9wczIuZWFzZSxcbiAgICAgICAgZnJvbSA9IF9wcm9wczIuZnJvbSxcbiAgICAgICAgdG8gPSBfcHJvcHMyLnRvLFxuICAgICAgICBwbGF5RGlyZWN0aW9uID0gX3Byb3BzMi5wbGF5RGlyZWN0aW9uO1xuXG5cbiAgICBpZiAoIXRoaXMuaXNNYW51YWxVcGRhdGUpIHtcbiAgICAgIHRoaXMuZWxhcHNlZCArPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCkgKiBwbGF5RGlyZWN0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuaXNNYW51YWxVcGRhdGUgPSBmYWxzZTtcbiAgICB0aGlzLnByb2dyZXNzID0gY2xhbXBQcm9ncmVzcygoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKDAsIGR1cmF0aW9uLCB0aGlzLmVsYXBzZWQpKTtcblxuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGZyb20sIHRvLCBlYXNlKHRoaXMucHJvZ3Jlc3MpKTtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICBkdXJhdGlvbiA9IF9wcm9wczMuZHVyYXRpb24sXG4gICAgICAgIHBsYXlEaXJlY3Rpb24gPSBfcHJvcHMzLnBsYXlEaXJlY3Rpb24sXG4gICAgICAgIHlveW8gPSBfcHJvcHMzLnlveW8sXG4gICAgICAgIGxvb3AgPSBfcHJvcHMzLmxvb3AsXG4gICAgICAgIGZsaXAgPSBfcHJvcHMzLmZsaXA7XG5cbiAgICB2YXIgaXNDb21wbGV0ZSA9IHBsYXlEaXJlY3Rpb24gPT09IDEgPyB0aGlzLmVsYXBzZWQgPj0gZHVyYXRpb24gOiB0aGlzLmVsYXBzZWQgPD0gMDtcblxuICAgIGlmIChpc0NvbXBsZXRlICYmICh5b3lvIHx8IGxvb3AgfHwgZmxpcCkpIHtcbiAgICAgIHZhciBpc1N0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gTkVYVF9TVEVQUykge1xuICAgICAgICB2YXIgbmV4dFN0ZXAgPSBORVhUX1NURVBTW2tleV07XG4gICAgICAgIHZhciBjb3VudFByb3AgPSBrZXkgKyAnQ291bnQnO1xuICAgICAgICB2YXIgc3RlcE1heCA9IHRoaXMuZ2V0UHJvcChrZXkpO1xuICAgICAgICB2YXIgc3RlcENvdW50ID0gdGhpcy5nZXRQcm9wKGNvdW50UHJvcCk7XG5cbiAgICAgICAgaWYgKHN0ZXBNYXggPiBzdGVwQ291bnQpIHtcbiAgICAgICAgICB2YXIgX3NldFByb3BzO1xuXG4gICAgICAgICAgdGhpcy5zZXRQcm9wcygoX3NldFByb3BzID0ge30sIF9zZXRQcm9wc1tjb3VudFByb3BdID0gc3RlcENvdW50ICsgMSwgX3NldFByb3BzKSk7XG4gICAgICAgICAgbmV4dFN0ZXAodGhpcyk7XG4gICAgICAgICAgaXNTdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1N0ZXBUYWtlbikgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0NvbXBsZXRlO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5nZXRFbGFwc2VkID0gZnVuY3Rpb24gZ2V0RWxhcHNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGFwc2VkO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5mbGlwID0gZnVuY3Rpb24gZmxpcCgpIHtcbiAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLnByb3BzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuICAgIHZhciBfcmVmID0gW3RoaXMucHJvcHMudG8sIHRoaXMucHJvcHMuZnJvbV07XG4gICAgdGhpcy5wcm9wcy5mcm9tID0gX3JlZlswXTtcbiAgICB0aGlzLnByb3BzLnRvID0gX3JlZlsxXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICB0aGlzLnByb3BzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLnNlZWsgPSBmdW5jdGlvbiBzZWVrKHByb2dyZXNzKSB7XG4gICAgdmFyIGR1cmF0aW9uID0gdGhpcy5wcm9wcy5kdXJhdGlvbjtcblxuICAgIHRoaXMuZWxhcHNlZCA9ICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoMCwgZHVyYXRpb24sIHByb2dyZXNzKTtcbiAgICB0aGlzLmlzTWFudWFsVXBkYXRlID0gdHJ1ZTtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkgdGhpcy5zY2hlZHVsZWRVcGRhdGUoKTtcbiAgfTtcblxuICByZXR1cm4gVHdlZW47XG59KF8yLmRlZmF1bHQpO1xuXG5Ud2Vlbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGR1cmF0aW9uOiAzMDAsXG4gIGVhc2U6IF9lYXNpbmcuZWFzZU91dCxcbiAgZnJvbTogMCxcbiAgdG86IDEsXG4gIGZsaXA6IDAsXG4gIGZsaXBDb3VudDogMCxcbiAgeW95bzogMCxcbiAgeW95b0NvdW50OiAwLFxuICBsb29wOiAwLFxuICBsb29wQ291bnQ6IDAsXG4gIHBsYXlEaXJlY3Rpb246IDFcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IFR3ZWVuKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNSM1pXVnVMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTnNZVzF3VUhKdlozSmxjM01pTENKT1JWaFVYMU5VUlZCVElpd2liRzl2Y0NJc0luUjNaV1Z1SWl3aWMzUmhjblFpTENKNWIzbHZJaXdpY21WMlpYSnpaU0lzSW1ac2FYQWlMQ0pVZDJWbGJpSXNJbTl1VTNSaGNuUWlMQ0p3Y205d2N5SXNJbVIxY21GMGFXOXVJaXdpY0d4aGVVUnBjbVZqZEdsdmJpSXNJbVZzWVhCelpXUWlMQ0p3Y205bmNtVnpjeUlzSW5Wd1pHRjBaU0lzSW1WaGMyVWlMQ0ptY205dElpd2lkRzhpTENKcGMwMWhiblZoYkZWd1pHRjBaU0lzSW1selFXTjBhVzl1UTI5dGNHeGxkR1VpTENKcGMwTnZiWEJzWlhSbElpd2lhWE5UZEdWd1ZHRnJaVzRpTENKclpYa2lMQ0p1WlhoMFUzUmxjQ0lzSW1OdmRXNTBVSEp2Y0NJc0luTjBaWEJOWVhnaUxDSm5aWFJRY205d0lpd2ljM1JsY0VOdmRXNTBJaXdpYzJWMFVISnZjSE1pTENKblpYUkZiR0Z3YzJWa0lpd2ljMlZsYXlJc0ltbHpRV04wYVhabElpd2ljMk5vWldSMWJHVmtWWEJrWVhSbElpd2laR1ZtWVhWc2RGQnliM0J6SWl3aVpteHBjRU52ZFc1MElpd2llVzk1YjBOdmRXNTBJaXdpYkc5dmNFTnZkVzUwSWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3UVVGRFFUczdRVUZEUVRzN1FVRkRRVHM3UVVGRFFUczdPenM3T3pzN096dEJRVVZCTEVsQlFVMUJMR2RDUVVGblFpeDVRa0ZCVFN4RFFVRk9MRVZCUVZNc1EwRkJWQ3hEUVVGMFFqczdRVUZGUVN4SlFVRk5ReXhoUVVGaE8wRkJRMnBDUXl4UlFVRk5MR05CUVVORExFdEJRVVE3UVVGQlFTeFhRVUZYUVN4TlFVRk5ReXhMUVVGT0xFVkJRVmc3UVVGQlFTeEhRVVJYTzBGQlJXcENReXhSUVVGTkxHTkJRVU5HTEV0QlFVUTdRVUZCUVN4WFFVRlhRU3hOUVVGTlJ5eFBRVUZPTEVkQlFXZENSaXhMUVVGb1FpeEZRVUZZTzBGQlFVRXNSMEZHVnp0QlFVZHFRa2NzVVVGQlRTeGpRVUZEU2l4TFFVRkVPMEZCUVVFc1YwRkJWMEVzVFVGQlRVa3NTVUZCVGl4SFFVRmhTQ3hMUVVGaUxFVkJRVmc3UVVGQlFUdEJRVWhYTEVOQlFXNUNPenRKUVUxTlNTeExPenM3T3pzN096czdhMEpCWlVwRExFOHNjMEpCUVZVN1FVRkJRU3hwUWtGRE5FSXNTMEZCUzBNc1MwRkVha003UVVGQlFTeFJRVU5CUXl4UlFVUkJMRlZCUTBGQkxGRkJSRUU3UVVGQlFTeFJRVU5WUXl4aFFVUldMRlZCUTFWQkxHRkJSRlk3T3p0QlFVZFNMRk5CUVV0RExFOUJRVXdzUjBGQlowSkVMR3RDUVVGclFpeERRVUZ1UWl4SFFVRjNRaXhEUVVGNFFpeEhRVUUwUWtRc1VVRkJNME03UVVGRFFTeFRRVUZMUnl4UlFVRk1MRWRCUVdkQ0xFTkJRV2hDTzBGQlEwUXNSenM3YTBKQlJVUkRMRTBzY1VKQlFWTTdRVUZCUVN4clFrRkROa01zUzBGQlMwd3NTMEZFYkVRN1FVRkJRU3hSUVVORFF5eFJRVVJFTEZkQlEwTkJMRkZCUkVRN1FVRkJRU3hSUVVOWFN5eEpRVVJZTEZkQlExZEJMRWxCUkZnN1FVRkJRU3hSUVVOcFFrTXNTVUZFYWtJc1YwRkRhVUpCTEVsQlJHcENPMEZCUVVFc1VVRkRkVUpETEVWQlJIWkNMRmRCUTNWQ1FTeEZRVVIyUWp0QlFVRkJMRkZCUXpKQ1RpeGhRVVF6UWl4WFFVTXlRa0VzWVVGRU0wSTdPenRCUVVkUUxGRkJRVWtzUTBGQlF5eExRVUZMVHl4alFVRldMRVZCUVRCQ08wRkJRM2hDTEZkQlFVdE9MRTlCUVV3c1NVRkJaMElzZFVOQlFYVkNSQ3hoUVVGMlF6dEJRVU5FT3p0QlFVVkVMRk5CUVV0UExHTkJRVXdzUjBGQmMwSXNTMEZCZEVJN1FVRkRRU3hUUVVGTFRDeFJRVUZNTEVkQlFXZENaQ3hqUVVGakxHZERRVUZ4UWl4RFFVRnlRaXhGUVVGM1FsY3NVVUZCZUVJc1JVRkJhME1zUzBGQlMwVXNUMEZCZGtNc1EwRkJaQ3hEUVVGb1FqczdRVUZGUVN4WFFVRlBMR2REUVVGeFFra3NTVUZCY2tJc1JVRkJNa0pETEVWQlFUTkNMRVZCUVN0Q1JpeExRVUZMTEV0QlFVdEdMRkZCUVZZc1EwRkJMMElzUTBGQlVEdEJRVU5FTEVjN08ydENRVVZFVFN4blFpd3JRa0ZCYlVJN1FVRkJRU3hyUWtGRGNVTXNTMEZCUzFZc1MwRkVNVU03UVVGQlFTeFJRVU5VUXl4UlFVUlRMRmRCUTFSQkxGRkJSRk03UVVGQlFTeFJRVU5EUXl4aFFVUkVMRmRCUTBOQkxHRkJSRVE3UVVGQlFTeFJRVU5uUWxBc1NVRkVhRUlzVjBGRFowSkJMRWxCUkdoQ08wRkJRVUVzVVVGRGMwSklMRWxCUkhSQ0xGZEJRM05DUVN4SlFVUjBRanRCUVVGQkxGRkJRelJDU3l4SlFVUTFRaXhYUVVNMFFrRXNTVUZFTlVJN08wRkJSV3BDTEZGQlFVbGpMR0ZCUVdOVUxHdENRVUZyUWl4RFFVRnVRaXhIUVVGNVFpeExRVUZMUXl4UFFVRk1MRWxCUVdkQ1JpeFJRVUY2UXl4SFFVRnpSQ3hMUVVGTFJTeFBRVUZNTEVsQlFXZENMRU5CUVhaR096dEJRVVZCTEZGQlFVbFJMR1ZCUVdWb1FpeFJRVUZSU0N4SlFVRlNMRWxCUVdkQ1N5eEpRVUV2UWl4RFFVRktMRVZCUVRCRE8wRkJRM2hETEZWQlFVbGxMR05CUVdNc1MwRkJiRUk3TzBGQlJVRXNWMEZCU3l4SlFVRkpReXhIUVVGVUxFbEJRV2RDZEVJc1ZVRkJhRUlzUlVGQk5FSTdRVUZETVVJc1dVRkJUWFZDTEZkQlFWZDJRaXhYUVVGWGMwSXNSMEZCV0N4RFFVRnFRanRCUVVOQkxGbEJRVTFGTEZsQlFWbEdMRTFCUVUwc1QwRkJlRUk3UVVGRFFTeFpRVUZOUnl4VlFVRlZMRXRCUVV0RExFOUJRVXdzUTBGQllVb3NSMEZCWWl4RFFVRm9RanRCUVVOQkxGbEJRVTFMTEZsQlFWa3NTMEZCUzBRc1QwRkJUQ3hEUVVGaFJpeFRRVUZpTEVOQlFXeENPenRCUVVWQkxGbEJRVWxETEZWQlFWVkZMRk5CUVdRc1JVRkJlVUk3UVVGQlFUczdRVUZEZGtJc1pVRkJTME1zVVVGQlRDdzBRa0ZEUjBvc1UwRkVTQ3hKUVVObFJ5eFpRVUZaTEVOQlJETkNPMEZCUjBGS0xHMUNRVUZUTEVsQlFWUTdRVUZEUVVZc2QwSkJRV01zU1VGQlpEdEJRVU5FTzBGQlEwWTdPMEZCUlVRc1ZVRkJTVUVzVjBGQlNpeEZRVUZwUWtRc1lVRkJZU3hMUVVGaU8wRkJRMnhDT3p0QlFVVkVMRmRCUVU5QkxGVkJRVkE3UVVGRFJDeEhPenRyUWtGRlJGTXNWU3g1UWtGQllUdEJRVU5ZTEZkQlFVOHNTMEZCUzJwQ0xFOUJRVm83UVVGRFJDeEhPenRyUWtGRlJFNHNTU3h0UWtGQlR6dEJRVU5NTEZOQlFVdE5MRTlCUVV3c1IwRkJaU3hMUVVGTFNDeExRVUZNTEVOQlFWZERMRkZCUVZnc1IwRkJjMElzUzBGQlMwVXNUMEZCTVVNN1FVRkVTeXhsUVVVNFFpeERRVUZETEV0QlFVdElMRXRCUVV3c1EwRkJWMUVzUlVGQldpeEZRVUZuUWl4TFFVRkxVaXhMUVVGTUxFTkJRVmRQTEVsQlFUTkNMRU5CUmpsQ08wRkJSVW9zVTBGQlMxQXNTMEZCVEN4RFFVRlhUeXhKUVVaUU8wRkJSV0VzVTBGQlMxQXNTMEZCVEN4RFFVRlhVU3hGUVVaNFFqczdRVUZIVEN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0clFrRkZSRm9zVHl4elFrRkJWVHRCUVVOU0xGTkJRVXRKTEV0QlFVd3NRMEZCVjBVc1lVRkJXQ3hKUVVFMFFpeERRVUZETEVOQlFUZENPMEZCUTBFc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN2EwSkJSVVJ0UWl4SkxHbENRVUZMYWtJc1VTeEZRVUZWTzBGQlFVRXNVVUZEVEVnc1VVRkVTeXhIUVVOUkxFdEJRVXRFTEV0QlJHSXNRMEZEVEVNc1VVRkVTenM3UVVGRllpeFRRVUZMUlN4UFFVRk1MRWRCUVdVc1owTkJRWEZDTEVOQlFYSkNMRVZCUVhkQ1JpeFJRVUY0UWl4RlFVRnJRMGNzVVVGQmJFTXNRMEZCWmp0QlFVTkJMRk5CUVV0TExHTkJRVXdzUjBGQmMwSXNTVUZCZEVJN1FVRkRRU3hSUVVGSkxFTkJRVU1zUzBGQlMyRXNVVUZCVEN4RlFVRk1MRVZCUVhOQ0xFdEJRVXRETEdWQlFVdzdRVUZEZGtJc1J6czdPenM3UVVGdVJrZDZRaXhMTEVOQlEwY3dRaXhaTEVkQlFXVTdRVUZEY0VKMlFpeFpRVUZWTEVkQlJGVTdRVUZGY0VKTExIVkNRVVp2UWp0QlFVZHdRa01zVVVGQlRTeERRVWhqTzBGQlNYQkNReXhOUVVGSkxFTkJTbWRDTzBGQlMzQkNXQ3hSUVVGTkxFTkJUR003UVVGTmNFSTBRaXhoUVVGWExFTkJUbE03UVVGUGNFSTVRaXhSUVVGTkxFTkJVR003UVVGUmNFSXJRaXhoUVVGWExFTkJVbE03UVVGVGNFSnNReXhSUVVGTkxFTkJWR003UVVGVmNFSnRReXhoUVVGWExFTkJWbE03UVVGWGNFSjZRaXhwUWtGQlpUdEJRVmhMTEVNN08ydENRWEZHVkN4VlFVRkRSaXhMUVVGRU8wRkJRVUVzVTBGQlZ5eEpRVUZKUml4TFFVRktMRU5CUVZWRkxFdEJRVllzUTBGQldEdEJRVUZCTEVNaUxDSm1hV3hsSWpvaWRIZGxaVzR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dkp6dGNibWx0Y0c5eWRDQjdJSFJwYldWVGFXNWpaVXhoYzNSR2NtRnRaU0I5SUdaeWIyMGdKMlp5WVcxbGMzbHVZeWM3WEc1cGJYQnZjblFnZXlCamJHRnRjQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OTBjbUZ1YzJadmNtMWxjbk1uTzF4dWFXMXdiM0owSUhzZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVXNJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56SUgwZ1puSnZiU0FuTGk0dmFXNWpMMk5oYkdNbk8xeHVhVzF3YjNKMElIc2daV0Z6WlU5MWRDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5bFlYTnBibWNuTzF4dVhHNWpiMjV6ZENCamJHRnRjRkJ5YjJkeVpYTnpJRDBnWTJ4aGJYQW9NQ3dnTVNrN1hHNWNibU52Ym5OMElFNUZXRlJmVTFSRlVGTWdQU0I3WEc0Z0lHeHZiM0E2SUNoMGQyVmxiaWtnUFQ0Z2RIZGxaVzR1YzNSaGNuUW9LU3hjYmlBZ2VXOTViem9nS0hSM1pXVnVLU0E5UGlCMGQyVmxiaTV5WlhabGNuTmxLQ2t1YzNSaGNuUW9LU3hjYmlBZ1pteHBjRG9nS0hSM1pXVnVLU0E5UGlCMGQyVmxiaTVtYkdsd0tDa3VjM1JoY25Rb0tWeHVmVHRjYmx4dVkyeGhjM01nVkhkbFpXNGdaWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0J6ZEdGMGFXTWdaR1ZtWVhWc2RGQnliM0J6SUQwZ2UxeHVJQ0FnSUdSMWNtRjBhVzl1T2lBek1EQXNYRzRnSUNBZ1pXRnpaVG9nWldGelpVOTFkQ3hjYmlBZ0lDQm1jbTl0T2lBd0xGeHVJQ0FnSUhSdk9pQXhMRnh1SUNBZ0lHWnNhWEE2SURBc1hHNGdJQ0FnWm14cGNFTnZkVzUwT2lBd0xGeHVJQ0FnSUhsdmVXODZJREFzWEc0Z0lDQWdlVzk1YjBOdmRXNTBPaUF3TEZ4dUlDQWdJR3h2YjNBNklEQXNYRzRnSUNBZ2JHOXZjRU52ZFc1ME9pQXdMRnh1SUNBZ0lIQnNZWGxFYVhKbFkzUnBiMjQ2SURGY2JpQWdmVHRjYmx4dUlDQnZibE4wWVhKMEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1pIVnlZWFJwYjI0c0lIQnNZWGxFYVhKbFkzUnBiMjRnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzVjYmlBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNBb2NHeGhlVVJwY21WamRHbHZiaUE5UFQwZ01Ta2dQeUF3SURvZ1pIVnlZWFJwYjI0N1hHNGdJQ0FnZEdocGN5NXdjbTluY21WemN5QTlJREE3WEc0Z0lIMWNibHh1SUNCMWNHUmhkR1VvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJrZFhKaGRHbHZiaXdnWldGelpTd2dabkp2YlN3Z2RHOHNJSEJzWVhsRWFYSmxZM1JwYjI0Z2ZTQTlJSFJvYVhNdWNISnZjSE03WEc1Y2JpQWdJQ0JwWmlBb0lYUm9hWE11YVhOTllXNTFZV3hWY0dSaGRHVXBJSHRjYmlBZ0lDQWdJSFJvYVhNdVpXeGhjSE5sWkNBclBTQjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVW9LU0FxSUhCc1lYbEVhWEpsWTNScGIyNDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RHaHBjeTVwYzAxaGJuVmhiRlZ3WkdGMFpTQTlJR1poYkhObE8xeHVJQ0FnSUhSb2FYTXVjSEp2WjNKbGMzTWdQU0JqYkdGdGNGQnliMmR5WlhOektHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLREFzSUdSMWNtRjBhVzl1TENCMGFHbHpMbVZzWVhCelpXUXBLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWhtY205dExDQjBieXdnWldGelpTaDBhR2x6TG5CeWIyZHlaWE56S1NrN1hHNGdJSDFjYmx4dUlDQnBjMEZqZEdsdmJrTnZiWEJzWlhSbEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1pIVnlZWFJwYjI0c0lIQnNZWGxFYVhKbFkzUnBiMjRzSUhsdmVXOHNJR3h2YjNBc0lHWnNhWEFnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ2JHVjBJR2x6UTI5dGNHeGxkR1VnUFNBb2NHeGhlVVJwY21WamRHbHZiaUE5UFQwZ01Ta2dQeUFvZEdocGN5NWxiR0Z3YzJWa0lENDlJR1IxY21GMGFXOXVLU0E2SUNoMGFHbHpMbVZzWVhCelpXUWdQRDBnTUNrN1hHNWNiaUFnSUNCcFppQW9hWE5EYjIxd2JHVjBaU0FtSmlBb2VXOTVieUI4ZkNCc2IyOXdJSHg4SUdac2FYQXBLU0I3WEc0Z0lDQWdJQ0JzWlhRZ2FYTlRkR1Z3VkdGclpXNGdQU0JtWVd4elpUdGNibHh1SUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlFNUZXRlJmVTFSRlVGTXBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdibVY0ZEZOMFpYQWdQU0JPUlZoVVgxTlVSVkJUVzJ0bGVWMDdYRzRnSUNBZ0lDQWdJR052Ym5OMElHTnZkVzUwVUhKdmNDQTlJR3RsZVNBcklDZERiM1Z1ZENjN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOMFpYQk5ZWGdnUFNCMGFHbHpMbWRsZEZCeWIzQW9hMlY1S1R0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYzNSbGNFTnZkVzUwSUQwZ2RHaHBjeTVuWlhSUWNtOXdLR052ZFc1MFVISnZjQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSE4wWlhCTllYZ2dQaUJ6ZEdWd1EyOTFiblFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG5ObGRGQnliM0J6S0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJRnRqYjNWdWRGQnliM0JkT2lCemRHVndRMjkxYm5RZ0t5QXhYRzRnSUNBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lDQWdibVY0ZEZOMFpYQW9kR2hwY3lrN1hHNGdJQ0FnSUNBZ0lDQWdhWE5UZEdWd1ZHRnJaVzRnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdsbUlDaHBjMU4wWlhCVVlXdGxiaWtnYVhORGIyMXdiR1YwWlNBOUlHWmhiSE5sTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQnBjME52YlhCc1pYUmxPMXh1SUNCOVhHNWNiaUFnWjJWMFJXeGhjSE5sWkNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWxiR0Z3YzJWa08xeHVJQ0I5WEc1Y2JpQWdabXhwY0NncElIdGNiaUFnSUNCMGFHbHpMbVZzWVhCelpXUWdQU0IwYUdsekxuQnliM0J6TG1SMWNtRjBhVzl1SUMwZ2RHaHBjeTVsYkdGd2MyVmtPMXh1SUNBZ0lGdDBhR2x6TG5CeWIzQnpMbVp5YjIwc0lIUm9hWE11Y0hKdmNITXVkRzlkSUQwZ1czUm9hWE11Y0hKdmNITXVkRzhzSUhSb2FYTXVjSEp2Y0hNdVpuSnZiVjA3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCeVpYWmxjbk5sS0NrZ2UxeHVJQ0FnSUhSb2FYTXVjSEp2Y0hNdWNHeGhlVVJwY21WamRHbHZiaUFxUFNBdE1UdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJSE5sWldzb2NISnZaM0psYzNNcElIdGNiaUFnSUNCamIyNXpkQ0I3SUdSMWNtRjBhVzl1SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lIUm9hWE11Wld4aGNITmxaQ0E5SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektEQXNJR1IxY21GMGFXOXVMQ0J3Y205bmNtVnpjeWs3WEc0Z0lDQWdkR2hwY3k1cGMwMWhiblZoYkZWd1pHRjBaU0E5SUhSeWRXVTdYRzRnSUNBZ2FXWWdLQ0YwYUdsekxtbHpRV04wYVhabEtDa3BJSFJvYVhNdWMyTm9aV1IxYkdWa1ZYQmtZWFJsS0NrN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tIQnliM0J6S1NBOVBpQnVaWGNnVkhkbFpXNG9jSEp2Y0hNcE8xeHVJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWN0aW9ucy90d2Vlbi5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCdmcmFtZXN5bmMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJlbmRlcmVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbmRlcmVyKTtcblxuICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMsIHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLmNoYW5nZWRWYWx1ZXMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBzdGF0ZS5cbiAgICogSWYgYGtleWAgaXMgbm90IGRlZmluZWQsIHJldHVybiBlbnRpcmUgY2FjaGVkIHN0YXRlLlxuICAgKiBJZiBga2V5YCBpcyBkZWZpbmVkLCByZXR1cm4gY2FjaGVkIHZhbHVlIGlmIHByZXNlbnQuXG4gICAqIElmIGBrZXlgIGlzIGRlZmluZWQgYW5kIGNhY2hlZCB2YWx1ZSBpcyBub3QgcHJlc2VudCwgcmVhZCBhbmQgcmV0dXJuLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IChvcHRpb25hbCkga2V5IG9mIHZhbHVlXG4gICAqIEByZXR1cm4ge3ZhbHVlfVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkKGtleSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVhZCB2YWx1ZSBhY2NvcmRpbmcgdG8gYG9uUmVhZGBcbiAgICogQHBhcmFtICB7c3RyaW5nfSBOYW1lIG9mIHByb3BlcnR5IHRvIHJlYWRcbiAgICogQHJldHVybiB7W3R5cGVdfVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gcmVhZChrZXkpIHtcbiAgICBpZiAodGhpcy5vblJlYWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uUmVhZChrZXkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIGBzdGF0ZWAgd2l0aCBuZXcgdmFsdWVzIGFuZCBzY2hlZHVsZSBgcmVuZGVyYC5cbiAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlc1xuICAgKiBAcGFyYW0ge3ZhbHVlfSB2YWx1ZSB0b3NldFxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHZhbHVlcyA9IGFyZ3NbMF07XG4gICAgICAvLyBTZXQgbXVsdGlwbGUgdmFsdWVzXG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShrZXksIHZhbHVlc1trZXldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9rZXkyID0gYXJnc1swXSxcbiAgICAgICAgICB2YWx1ZSA9IGFyZ3NbMV07XG5cbiAgICAgIHRoaXMuc2V0VmFsdWUoX2tleTIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKSB7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lUmVuZGVyKSh0aGlzLnJlbmRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gPiBXaWxleSAtIDYgaW4gdGhlIE1vcm5pbmdcbiAgLyoqXG4gICAqIFNldCBhIHNpbmdsZSB2YWx1ZVxuICAgKiBJZiBhIHN0cmluZyBvciBudW1iZXIsIHNldCBkaXJlY3RseS5cbiAgICogSWYgYW4gb2JqZWN0IG9yIGFycmF5LCBjcmVhdGUgbmV3IG9iamVjdCBvciBhcnJheVxuICAgKiBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3QuIFRoZW4gc2hhbGxvdyBjb21wYXJlXG4gICAqIHRvIHNldCBhbmQgY29tcGFyZSBpbmRpdmlkdWFsIHZhbHVlcy5cbiAgICogT25lIG9mIHRoZSBjbGVhcmVyIGRyYXdiYWNrcyBhbmQgYW5ub3lhbmNlcyB3aXRoXG4gICAqIHVzaW5nIG11dGFibGUgaW5zdGVhZCBvZiBpbW11dGFibGUgc3RhdGVzLlxuICAgKiBAcGFyYW0ge1t0eXBlXX0ga2V5XG4gICAqIEBwYXJhbSB7W3R5cGVdfSB2YWx1ZVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uIHNldFZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgY3VycmVudFZhbHVlID0gdGhpcy5zdGF0ZVtrZXldO1xuXG4gICAgLy8gSWYgbnVtYmVyIG9yIHN0cmluZywgc2V0IGRpcmVjdGx5XG4gICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlKSB8fCAoMCwgX3V0aWxzLmlzU3RyaW5nKSh2YWx1ZSkpIHtcbiAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc0FycmF5KSh2YWx1ZSkpIHtcbiAgICAgIGlmICghY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IFtdO1xuICAgICAgfVxuXG4gICAgICB2YXIgbnVtVmFsdWVzID0gdmFsdWUubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1WYWx1ZXM7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZVtrZXldW2ldICE9PSB2YWx1ZVtpXSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVtpXSA9IHZhbHVlW2ldO1xuICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNPYmopKHZhbHVlKSkge1xuICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0ge307XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIHZhbHVlS2V5IGluIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV1bdmFsdWVLZXldICE9PSB2YWx1ZVt2YWx1ZUtleV0pIHtcbiAgICAgICAgICB0aGlzLnN0YXRlW2tleV1bdmFsdWVLZXldID0gdmFsdWVbdmFsdWVLZXldO1xuICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNDaGFuZ2VkICYmIHRoaXMuY2hhbmdlZFZhbHVlcy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICB0aGlzLmNoYW5nZWRWYWx1ZXMucHVzaChrZXkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRmlyZXMgYG9uUmVuZGVyYCBpZiB2YWx1ZXMgaGF2ZSBjaGFuZ2VkIG9yIGBmb3JjZVJlbmRlcmBcbiAgICogaXMgc2V0IHRvIHRydWUuXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgZm9yY2VSZW5kZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgaWYgKChmb3JjZVJlbmRlciB8fCB0aGlzLmhhc0NoYW5nZWQpICYmIHRoaXMub25SZW5kZXIpIHtcbiAgICAgIHRoaXMub25SZW5kZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZWRWYWx1ZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sc2lVbVZ1WkdWeVpYSWlMQ0p3Y205d2N5SXNJbkpsYm1SbGNpSXNJbUpwYm1RaUxDSmpiMjV6ZEhKMVkzUnZjaUlzSW1SbFptRjFiSFJRY205d2N5SXNJbk4wWVhSbElpd2lZMmhoYm1kbFpGWmhiSFZsY3lJc0ltZGxkQ0lzSW10bGVTSXNJblZ1WkdWbWFXNWxaQ0lzSW5KbFlXUWlMQ0p2YmxKbFlXUWlMQ0p6WlhRaUxDSmhjbWR6SWl3aWRtRnNkV1Z6SWl3aWMyVjBWbUZzZFdVaUxDSjJZV3gxWlNJc0ltaGhjME5vWVc1blpXUWlMQ0pqZFhKeVpXNTBWbUZzZFdVaUxDSnVkVzFXWVd4MVpYTWlMQ0pzWlc1bmRHZ2lMQ0pwSWl3aWRtRnNkV1ZMWlhraUxDSnBibVJsZUU5bUlpd2ljSFZ6YUNJc0ltWnZjbU5sVW1WdVpHVnlJaXdpYjI1U1pXNWtaWElpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenRCUVVOQk96czdPMGxCUlUxQkxGRTdRVUZEU2l4dlFrRkJXVU1zUzBGQldpeEZRVUZ0UWp0QlFVRkJPenRCUVVOcVFpeFRRVUZMUXl4TlFVRk1MRWRCUVdNc1MwRkJTMEVzVFVGQlRDeERRVUZaUXl4SlFVRmFMRU5CUVdsQ0xFbEJRV3BDTEVOQlFXUTdPMEZCUlVFc1UwRkJTMFlzUzBGQlRDeG5Ra0ZEU3l4TFFVRkxSeXhYUVVGTUxFTkJRV2xDUXl4WlFVUjBRaXhGUVVWTFNpeExRVVpNT3p0QlFVdEJMRk5CUVV0TExFdEJRVXdzUjBGQllTeEZRVUZpTzBGQlEwRXNVMEZCUzBNc1lVRkJUQ3hIUVVGeFFpeEZRVUZ5UWp0QlFVTkVPenRCUVVWRU96czdPenM3T3pzN08zRkNRVkZCUXl4SExHZENRVUZKUXl4SExFVkJRVXM3UVVGRFVDeFJRVUZKUVN4SFFVRktMRVZCUVZNN1FVRkRVQ3hWUVVGSkxFdEJRVXRJTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hOUVVGdlFrTXNVMEZCZUVJc1JVRkJiVU03UVVGRGFrTXNaVUZCVHl4TFFVRkxTaXhMUVVGTUxFTkJRVmRITEVkQlFWZ3NRMEZCVUR0QlFVTkVMRTlCUmtRc1RVRkZUenRCUVVOTUxHVkJRVThzUzBGQlMwVXNTVUZCVEN4RFFVRlZSaXhIUVVGV0xFTkJRVkE3UVVGRFJEdEJRVU5HTEV0QlRrUXNUVUZOVHp0QlFVTk1MR0ZCUVU4c1MwRkJTMGdzUzBGQldqdEJRVU5FTzBGQlEwWXNSenM3UVVGRlJEczdPenM3T3p0eFFrRkxRVXNzU1N4cFFrRkJTMFlzUnl4RlFVRkxPMEZCUTFJc1VVRkJTU3hMUVVGTFJ5eE5RVUZVTEVWQlFXbENPMEZCUTJZc1lVRkJUeXhMUVVGTFFTeE5RVUZNTEVOQlFWbElMRWRCUVZvc1EwRkJVRHRCUVVORU8wRkJRMFlzUnpzN1FVRkZSRHM3T3pzN096dHhRa0ZMUVVrc1J5eHJRa0ZCWVR0QlFVRkJMSE5EUVVGT1F5eEpRVUZOTzBGQlFVNUJMRlZCUVUwN1FVRkJRVHM3UVVGRFdDeFJRVUZKTEU5QlFVOUJMRXRCUVVzc1EwRkJUQ3hEUVVGUUxFdEJRVzFDTEZkQlFYWkNMRVZCUVc5RE8wRkJRVUVzVlVGRE1VSkRMRTFCUkRCQ0xFZEJRMlpFTEVsQlJHVTdRVUZGYkVNN08wRkJRMEVzVjBGQlN5eEpRVUZOVEN4SFFVRllMRWxCUVd0Q1RTeE5RVUZzUWl4RlFVRXdRanRCUVVONFFpeGhRVUZMUXl4UlFVRk1MRU5CUVdOUUxFZEJRV1FzUlVGQmJVSk5MRTlCUVU5T0xFZEJRVkFzUTBGQmJrSTdRVUZEUkR0QlFVTkdMRXRCVGtRc1RVRk5UenRCUVVGQkxGVkJRMGRCTEV0QlJFZ3NSMEZEYTBKTExFbEJSR3hDTzBGQlFVRXNWVUZEVVVjc1MwRkVVaXhIUVVOclFrZ3NTVUZFYkVJN08wRkJSVXdzVjBGQlMwVXNVVUZCVEN4RFFVRmpVQ3hMUVVGa0xFVkJRVzFDVVN4TFFVRnVRanRCUVVORU96dEJRVVZFTEZGQlFVa3NTMEZCUzBNc1ZVRkJWQ3hGUVVGeFFqdEJRVU51UWl4dlEwRkJZeXhMUVVGTGFFSXNUVUZCYmtJN1FVRkRSRHM3UVVGRlJDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dEJRVVZFTzBGQlEwRTdPenM3T3pzN096czdPenM3Y1VKQlYwRmpMRkVzY1VKQlFWTlFMRWNzUlVGQlMxRXNTeXhGUVVGUE8wRkJRMjVDTEZGQlFVMUZMR1ZCUVdVc1MwRkJTMklzUzBGQlRDeERRVUZYUnl4SFFVRllMRU5CUVhKQ096dEJRVVZCTzBGQlEwRXNVVUZCU1N4clFrRkJUVkVzUzBGQlRpeExRVUZuUWl4eFFrRkJVMEVzUzBGQlZDeERRVUZ3UWl4RlFVRnhRenRCUVVOdVF5eFZRVUZKUlN4cFFrRkJhVUpHTEV0QlFYSkNMRVZCUVRSQ08wRkJRekZDTEdGQlFVdFlMRXRCUVV3c1EwRkJWMGNzUjBGQldDeEpRVUZyUWxFc1MwRkJiRUk3UVVGRFFTeGhRVUZMUXl4VlFVRk1MRWRCUVd0Q0xFbEJRV3hDTzBGQlEwUTdRVUZEUml4TFFVeEVMRTFCUzA4c1NVRkJTU3h2UWtGQlVVUXNTMEZCVWl4RFFVRktMRVZCUVc5Q08wRkJRM3BDTEZWQlFVa3NRMEZCUTBVc1dVRkJUQ3hGUVVGdFFqdEJRVU5xUWl4aFFVRkxZaXhMUVVGTUxFTkJRVmRITEVkQlFWZ3NTVUZCYTBJc1JVRkJiRUk3UVVGRFJEczdRVUZGUkN4VlFVRk5WeXhaUVVGWlNDeE5RVUZOU1N4TlFVRjRRanRCUVVOQkxGZEJRVXNzU1VGQlNVTXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKUml4VFFVRndRaXhGUVVFclFrVXNSMEZCTDBJc1JVRkJiME03UVVGRGJFTXNXVUZCU1N4TFFVRkxhRUlzUzBGQlRDeERRVUZYUnl4SFFVRllMRVZCUVdkQ1lTeERRVUZvUWl4TlFVRjFRa3dzVFVGQlRVc3NRMEZCVGl4RFFVRXpRaXhGUVVGeFF6dEJRVU51UXl4bFFVRkxhRUlzUzBGQlRDeERRVUZYUnl4SFFVRllMRVZCUVdkQ1lTeERRVUZvUWl4SlFVRnhRa3dzVFVGQlRVc3NRMEZCVGl4RFFVRnlRanRCUVVOQkxHVkJRVXRLTEZWQlFVd3NSMEZCYTBJc1NVRkJiRUk3UVVGRFJEdEJRVU5HTzBGQlEwWXNTMEZhVFN4TlFWbEJMRWxCUVVrc2EwSkJRVTFFTEV0QlFVNHNRMEZCU2l4RlFVRnJRanRCUVVOMlFpeFZRVUZKTEVOQlFVTkZMRmxCUVV3c1JVRkJiVUk3UVVGRGFrSXNZVUZCUzJJc1MwRkJUQ3hEUVVGWFJ5eEhRVUZZTEVsQlFXdENMRVZCUVd4Q08wRkJRMFE3TzBGQlJVUXNWMEZCU3l4SlFVRkpZeXhSUVVGVUxFbEJRWEZDVGl4TFFVRnlRaXhGUVVFMFFqdEJRVU14UWl4WlFVRkpMRXRCUVV0WUxFdEJRVXdzUTBGQlYwY3NSMEZCV0N4RlFVRm5RbU1zVVVGQmFFSXNUVUZCT0VKT0xFMUJRVTFOTEZGQlFVNHNRMEZCYkVNc1JVRkJiVVE3UVVGRGFrUXNaVUZCUzJwQ0xFdEJRVXdzUTBGQlYwY3NSMEZCV0N4RlFVRm5RbU1zVVVGQmFFSXNTVUZCTkVKT0xFMUJRVTFOTEZGQlFVNHNRMEZCTlVJN1FVRkRRU3hsUVVGTFRDeFZRVUZNTEVkQlFXdENMRWxCUVd4Q08wRkJRMFE3UVVGRFJqdEJRVU5HT3p0QlFVVkVMRkZCUVVrc1MwRkJTMEVzVlVGQlRDeEpRVUZ0UWl4TFFVRkxXQ3hoUVVGTUxFTkJRVzFDYVVJc1QwRkJia0lzUTBGQk1rSm1MRWRCUVROQ0xFMUJRVzlETEVOQlFVTXNRMEZCTlVRc1JVRkJLMFE3UVVGRE4wUXNWMEZCUzBZc1lVRkJUQ3hEUVVGdFFtdENMRWxCUVc1Q0xFTkJRWGRDYUVJc1IwRkJlRUk3UVVGRFJEdEJRVU5HTEVjN08wRkJSVVE3T3pzN096czdjVUpCUzBGUUxFMHNjVUpCUVRSQ08wRkJRVUVzVVVGQmNrSjNRaXhYUVVGeFFpeDFSVUZCVUN4TFFVRlBPenRCUVVNeFFpeFJRVUZKTEVOQlFVTkJMR1ZCUVdVc1MwRkJTMUlzVlVGQmNrSXNTMEZCYjBNc1MwRkJTMU1zVVVGQk4wTXNSVUZCZFVRN1FVRkRja1FzVjBGQlMwRXNVVUZCVER0QlFVTkVPenRCUVVWRUxGTkJRVXR3UWl4aFFVRk1MRU5CUVcxQ1l5eE5RVUZ1UWl4SFFVRTBRaXhEUVVFMVFqdEJRVU5CTEZOQlFVdElMRlZCUVV3c1IwRkJhMElzUzBGQmJFSTdPMEZCUlVFc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN096czdhMEpCUjFsc1FpeFJJaXdpWm1sc1pTSTZJbWx1WkdWNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2IyNUdjbUZ0WlZKbGJtUmxjaUI5SUdaeWIyMGdKMlp5WVcxbGMzbHVZeWM3WEc1cGJYQnZjblFnZXlCcGMwRnljbUY1TENCcGMwOWlhaXdnYVhOT2RXMHNJR2x6VTNSeWFXNW5JSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMnhoYzNNZ1VtVnVaR1Z5WlhJZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeWtnZTF4dUlDQWdJSFJvYVhNdWNtVnVaR1Z5SUQwZ2RHaHBjeTV5Wlc1a1pYSXVZbWx1WkNoMGFHbHpLVHRjYmx4dUlDQWdJSFJvYVhNdWNISnZjSE1nUFNCN1hHNGdJQ0FnSUNBdUxpNTBhR2x6TG1OdmJuTjBjblZqZEc5eUxtUmxabUYxYkhSUWNtOXdjeXhjYmlBZ0lDQWdJQzR1TG5CeWIzQnpYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lIUm9hWE11YzNSaGRHVWdQU0I3ZlR0Y2JpQWdJQ0IwYUdsekxtTm9ZVzVuWldSV1lXeDFaWE1nUFNCYlhUdGNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJIWlhRZ1kzVnljbVZ1ZENCemRHRjBaUzVjYmlBZ0lDb2dTV1lnWUd0bGVXQWdhWE1nYm05MElHUmxabWx1WldRc0lISmxkSFZ5YmlCbGJuUnBjbVVnWTJGamFHVmtJSE4wWVhSbExseHVJQ0FnS2lCSlppQmdhMlY1WUNCcGN5QmtaV1pwYm1Wa0xDQnlaWFIxY200Z1kyRmphR1ZrSUhaaGJIVmxJR2xtSUhCeVpYTmxiblF1WEc0Z0lDQXFJRWxtSUdCclpYbGdJR2x6SUdSbFptbHVaV1FnWVc1a0lHTmhZMmhsWkNCMllXeDFaU0JwY3lCdWIzUWdjSEpsYzJWdWRDd2djbVZoWkNCaGJtUWdjbVYwZFhKdUxseHVJQ0FnS2lCQWNHRnlZVzBnSUh0emRISnBibWQ5SUNodmNIUnBiMjVoYkNrZ2EyVjVJRzltSUhaaGJIVmxYRzRnSUNBcUlFQnlaWFIxY200Z2UzWmhiSFZsZlZ4dUlDQWdLaTljYmlBZ1oyVjBLR3RsZVNrZ2UxeHVJQ0FnSUdsbUlDaHJaWGtwSUh0Y2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG5OMFlYUmxXMnRsZVYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXpkR0YwWlZ0clpYbGRPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11Y21WaFpDaHJaWGtwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV6ZEdGMFpUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVZoWkNCMllXeDFaU0JoWTJOdmNtUnBibWNnZEc4Z1lHOXVVbVZoWkdCY2JpQWdJQ29nUUhCaGNtRnRJQ0I3YzNSeWFXNW5mU0JPWVcxbElHOW1JSEJ5YjNCbGNuUjVJSFJ2SUhKbFlXUmNiaUFnSUNvZ1FISmxkSFZ5YmlCN1czUjVjR1ZkZlZ4dUlDQWdLaTljYmlBZ2NtVmhaQ2hyWlhrcElIdGNiaUFnSUNCcFppQW9kR2hwY3k1dmJsSmxZV1FwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtOXVVbVZoWkNoclpYa3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJWY0dSaGRHVWdZSE4wWVhSbFlDQjNhWFJvSUc1bGR5QjJZV3gxWlhNZ1lXNWtJSE5qYUdWa2RXeGxJR0J5Wlc1a1pYSmdMbHh1SUNBZ0tpQkFjR0Z5WVcwZ2UyOWlhbVZqZEgwZ2RtRnNkV1Z6WEc0Z0lDQXFJRUJ3WVhKaGJTQjdkbUZzZFdWOUlIWmhiSFZsSUhSdmMyVjBYRzRnSUNBcUwxeHVJQ0J6WlhRb0xpNHVZWEpuY3lrZ2UxeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ1lYSm5jMXN4WFNBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJRnNnZG1Gc2RXVnpJRjBnUFNCaGNtZHpPMXh1SUNBZ0lDQWdMeThnVTJWMElHMTFiSFJwY0d4bElIWmhiSFZsYzF4dUlDQWdJQ0FnWm05eUlDaGpiMjV6ZENCclpYa2dhVzRnZG1Gc2RXVnpLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMlYwVm1Gc2RXVW9hMlY1TENCMllXeDFaWE5iYTJWNVhTazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJRnNnYTJWNUxDQjJZV3gxWlNCZElEMGdZWEpuY3p0Y2JpQWdJQ0FnSUhSb2FYTXVjMlYwVm1Gc2RXVW9hMlY1TENCMllXeDFaU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXVhR0Z6UTJoaGJtZGxaQ2tnZTF4dUlDQWdJQ0FnYjI1R2NtRnRaVkpsYm1SbGNpaDBhR2x6TG5KbGJtUmxjaWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNBdkx5QStJRmRwYkdWNUlDMGdOaUJwYmlCMGFHVWdUVzl5Ym1sdVoxeHVJQ0F2S2lwY2JpQWdJQ29nVTJWMElHRWdjMmx1WjJ4bElIWmhiSFZsWEc0Z0lDQXFJRWxtSUdFZ2MzUnlhVzVuSUc5eUlHNTFiV0psY2l3Z2MyVjBJR1JwY21WamRHeDVMbHh1SUNBZ0tpQkpaaUJoYmlCdlltcGxZM1FnYjNJZ1lYSnlZWGtzSUdOeVpXRjBaU0J1WlhjZ2IySnFaV04wSUc5eUlHRnljbUY1WEc0Z0lDQXFJR2xtSUdsMElHUnZaWE51SjNRZ1lXeHlaV0ZrZVNCbGVHbHpkQzRnVkdobGJpQnphR0ZzYkc5M0lHTnZiWEJoY21WY2JpQWdJQ29nZEc4Z2MyVjBJR0Z1WkNCamIyMXdZWEpsSUdsdVpHbDJhV1IxWVd3Z2RtRnNkV1Z6TGx4dUlDQWdLaUJQYm1VZ2IyWWdkR2hsSUdOc1pXRnlaWElnWkhKaGQySmhZMnR6SUdGdVpDQmhibTV2ZVdGdVkyVnpJSGRwZEdoY2JpQWdJQ29nZFhOcGJtY2diWFYwWVdKc1pTQnBibk4wWldGa0lHOW1JR2x0YlhWMFlXSnNaU0J6ZEdGMFpYTXVYRzRnSUNBcUlFQndZWEpoYlNCN1czUjVjR1ZkZlNCclpYbGNiaUFnSUNvZ1FIQmhjbUZ0SUh0YmRIbHdaVjE5SUhaaGJIVmxYRzRnSUNBcUwxeHVJQ0J6WlhSV1lXeDFaU2hyWlhrc0lIWmhiSFZsS1NCN1hHNGdJQ0FnWTI5dWMzUWdZM1Z5Y21WdWRGWmhiSFZsSUQwZ2RHaHBjeTV6ZEdGMFpWdHJaWGxkTzF4dVhHNGdJQ0FnTHk4Z1NXWWdiblZ0WW1WeUlHOXlJSE4wY21sdVp5d2djMlYwSUdScGNtVmpkR3g1WEc0Z0lDQWdhV1lnS0dselRuVnRLSFpoYkhWbEtTQjhmQ0JwYzFOMGNtbHVaeWgyWVd4MVpTa3BJSHRjYmlBZ0lDQWdJR2xtSUNoamRYSnlaVzUwVm1Gc2RXVWdJVDA5SUhaaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdWYmEyVjVYU0E5SUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaGhjME5vWVc1blpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb2FYTkJjbkpoZVNoMllXeDFaU2twSUh0Y2JpQWdJQ0FnSUdsbUlDZ2hZM1Z5Y21WdWRGWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFNBOUlGdGRPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JqYjI1emRDQnVkVzFXWVd4MVpYTWdQU0IyWVd4MVpTNXNaVzVuZEdnN1hHNGdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVlpoYkhWbGN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuTjBZWFJsVzJ0bGVWMWJhVjBnSVQwOUlIWmhiSFZsVzJsZEtTQjdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlZ0clpYbGRXMmxkSUQwZ2RtRnNkV1ZiYVYwN1hHNGdJQ0FnSUNBZ0lDQWdkR2hwY3k1b1lYTkRhR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb2FYTlBZbW9vZG1Gc2RXVXBLU0I3WEc0Z0lDQWdJQ0JwWmlBb0lXTjFjbkpsYm5SV1lXeDFaU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbFcydGxlVjBnUFNCN2ZUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdabTl5SUNoc1pYUWdkbUZzZFdWTFpYa2dhVzRnZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YzNSaGRHVmJhMlY1WFZ0MllXeDFaVXRsZVYwZ0lUMDlJSFpoYkhWbFczWmhiSFZsUzJWNVhTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdWYmEyVjVYVnQyWVd4MVpVdGxlVjBnUFNCMllXeDFaVnQyWVd4MVpVdGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTVvWVhORGFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbWhoYzBOb1lXNW5aV1FnSmlZZ2RHaHBjeTVqYUdGdVoyVmtWbUZzZFdWekxtbHVaR1Y0VDJZb2EyVjVLU0E5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJSFJvYVhNdVkyaGhibWRsWkZaaGJIVmxjeTV3ZFhOb0tHdGxlU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTHlvcVhHNGdJQ0FxSUVacGNtVnpJR0J2YmxKbGJtUmxjbUFnYVdZZ2RtRnNkV1Z6SUdoaGRtVWdZMmhoYm1kbFpDQnZjaUJnWm05eVkyVlNaVzVrWlhKZ1hHNGdJQ0FxSUdseklITmxkQ0IwYnlCMGNuVmxMbHh1SUNBZ0tpQkFjbVYwZFhKdUlIdDBhR2x6ZlZ4dUlDQWdLaTljYmlBZ2NtVnVaR1Z5S0dadmNtTmxVbVZ1WkdWeUlEMGdabUZzYzJVcElIdGNiaUFnSUNCcFppQW9LR1p2Y21ObFVtVnVaR1Z5SUh4OElIUm9hWE11YUdGelEyaGhibWRsWkNrZ0ppWWdkR2hwY3k1dmJsSmxibVJsY2lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV2YmxKbGJtUmxjaWdwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSFJvYVhNdVkyaGhibWRsWkZaaGJIVmxjeTVzWlc1bmRHZ2dQU0F3TzF4dUlDQWdJSFJvYVhNdWFHRnpRMmhoYm1kbFpDQTlJR1poYkhObE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVbVZ1WkdWeVpYSTdYRzRpWFgwPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JlbmRlcmVycy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBheGVzID0gWydYJywgJ1knLCAnWiddO1xuXG52YXIgdHJhbnNmb3JtUHJvcHMgPSB7XG4gIHg6IHRydWUsXG4gIHk6IHRydWUsXG4gIHo6IHRydWVcbn07XG5cbnZhciBTQ0FMRSA9ICdzY2FsZSc7XG52YXIgUk9UQVRFID0gJ3JvdGF0ZSc7XG52YXIgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbnZhciBURVJNUyA9IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdO1xuXG50cmFuc2Zvcm1Qcm9wc1tST1RBVEVdID0gdHJhbnNmb3JtUHJvcHNbU0NBTEVdID0gdHJhbnNmb3JtUHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG5cblRFUk1TLmZvckVhY2goZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGF4ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXhpcykge1xuICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlO1xuICB9KTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2Zvcm1Qcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzUnlZVzV6Wm05eWJTMXdjbTl3Y3k1cWN5SmRMQ0p1WVcxbGN5STZXeUpoZUdWeklpd2lkSEpoYm5ObWIzSnRVSEp2Y0hNaUxDSjRJaXdpZVNJc0lub2lMQ0pUUTBGTVJTSXNJbEpQVkVGVVJTSXNJbFJTUVU1VFJrOVNUVjlRUlZKVFVFVkRWRWxXUlNJc0lsUkZVazFUSWl3aVptOXlSV0ZqYUNJc0luUmxjbTBpTENKaGVHbHpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4SlFVRk5RU3hQUVVGUExFTkJRVU1zUjBGQlJDeEZRVUZOTEVkQlFVNHNSVUZCVnl4SFFVRllMRU5CUVdJN08wRkJSVUVzU1VGQlNVTXNhVUpCUVdsQ08wRkJRMjVDUXl4TFFVRkhMRWxCUkdkQ08wRkJSVzVDUXl4TFFVRkhMRWxCUm1kQ08wRkJSMjVDUXl4TFFVRkhPMEZCU0dkQ0xFTkJRWEpDT3p0QlFVMUJMRWxCUVUxRExGRkJRVkVzVDBGQlpEdEJRVU5CTEVsQlFVMURMRk5CUVZNc1VVRkJaanRCUVVOQkxFbEJRVTFETEhkQ1FVRjNRaXh6UWtGQk9VSTdRVUZEUVN4SlFVRk5ReXhSUVVGUkxFTkJRVU1zVjBGQlJDeEZRVUZqU0N4TFFVRmtMRVZCUVhGQ1F5eE5RVUZ5UWl4RlFVRTJRaXhOUVVFM1FpeEZRVUZ4UTBNc2NVSkJRWEpETEVOQlFXUTdPMEZCUlVGT0xHVkJRV1ZMTEUxQlFXWXNTVUZCZVVKTUxHVkJRV1ZKTEV0QlFXWXNTVUZCZDBKS0xHVkJRV1ZOTEhGQ1FVRm1MRWxCUVhkRExFbEJRWHBHT3p0QlFVVkJReXhOUVVGTlF5eFBRVUZPTEVOQlFXTXNWVUZCUTBNc1NVRkJSRHRCUVVGQkxGTkJRVlZXTEV0QlFVdFRMRTlCUVV3c1EwRkJZU3hWUVVGRFJTeEpRVUZFTzBGQlFVRXNWMEZCVlZZc1pVRkJaVk1zVDBGQlQwTXNTVUZCZEVJc1NVRkJPRUlzU1VGQmVFTTdRVUZCUVN4SFFVRmlMRU5CUVZZN1FVRkJRU3hEUVVGa096dHJRa0ZGWlZZc1l5SXNJbVpwYkdVaU9pSjBjbUZ1YzJadmNtMHRjSEp2Y0hNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JoZUdWeklEMGdXeWRZSnl3Z0oxa25MQ0FuV2lkZE8xeHVYRzVzWlhRZ2RISmhibk5tYjNKdFVISnZjSE1nUFNCN1hHNGdJSGc2SUhSeWRXVXNYRzRnSUhrNklIUnlkV1VzWEc0Z0lIbzZJSFJ5ZFdWY2JuMDdYRzVjYm1OdmJuTjBJRk5EUVV4RklEMGdKM05qWVd4bEp6dGNibU52Ym5OMElGSlBWRUZVUlNBOUlDZHliM1JoZEdVbk8xeHVZMjl1YzNRZ1ZGSkJUbE5HVDFKTlgxQkZVbE5RUlVOVVNWWkZJRDBnSjNSeVlXNXpabTl5YlZCbGNuTndaV04wYVhabEp6dGNibU52Ym5OMElGUkZVazFUSUQwZ1d5ZDBjbUZ1YzJ4aGRHVW5MQ0JUUTBGTVJTd2dVazlVUVZSRkxDQW5jMnRsZHljc0lGUlNRVTVUUms5U1RWOVFSVkpUVUVWRFZFbFdSVjA3WEc1Y2JuUnlZVzV6Wm05eWJWQnliM0J6VzFKUFZFRlVSVjBnUFNCMGNtRnVjMlp2Y20xUWNtOXdjMXRUUTBGTVJWMGdQU0IwY21GdWMyWnZjbTFRY205d2MxdFVVa0ZPVTBaUFVrMWZVRVZTVTFCRlExUkpWa1ZkSUQwZ2RISjFaVHRjYmx4dVZFVlNUVk11Wm05eVJXRmphQ2dvZEdWeWJTa2dQVDRnWVhobGN5NW1iM0pGWVdOb0tDaGhlR2x6S1NBOVBpQjBjbUZ1YzJadmNtMVFjbTl3YzF0MFpYSnRJQ3NnWVhocGMxMGdQU0IwY25WbEtTazdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSFJ5WVc1elptOXliVkJ5YjNCek95SmRmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVuZGVyZXJzL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN2Z1BhdGggPSBleHBvcnRzLnN2ZyA9IGV4cG9ydHMuY3NzID0gZXhwb3J0cy5SZW5kZXJlciA9IGV4cG9ydHMudmFsdWUgPSBleHBvcnRzLnNwcmluZyA9IGV4cG9ydHMuc3RhZ2dlciA9IGV4cG9ydHMudHdlZW4gPSBleHBvcnRzLnRyYWNrT2Zmc2V0ID0gZXhwb3J0cy50b3VjaGVzID0gZXhwb3J0cy5wb2ludGVyID0gZXhwb3J0cy5waHlzaWNzID0gZXhwb3J0cy5wYXJhbGxlbCA9IGV4cG9ydHMuZGVsYXkgPSBleHBvcnRzLmNyb3NzRmFkZSA9IGV4cG9ydHMuY29tcG9zaXRlID0gZXhwb3J0cy5jb2xvclR3ZWVuID0gZXhwb3J0cy5jaGFpbiA9IGV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy52YWx1ZVR5cGVzID0gZXhwb3J0cy50cmFuc2Zvcm0gPSBleHBvcnRzLmVhc2luZyA9IGV4cG9ydHMuY2FsYyA9IHVuZGVmaW5lZDtcblxudmFyIF9jYWxjMiA9IHJlcXVpcmUoJy4vaW5jL2NhbGMnKTtcblxudmFyIF9jYWxjID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2NhbGMyKTtcblxudmFyIF9lYXNpbmcyID0gcmVxdWlyZSgnLi9pbmMvZWFzaW5nJyk7XG5cbnZhciBfZWFzaW5nID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2Vhc2luZzIpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3RyYW5zZm9ybSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90cmFuc2Zvcm1lcnMpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gcmVxdWlyZSgnLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3ZhbHVlVHlwZXMyKTtcblxudmFyIF9hY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zJyk7XG5cbnZhciBfYWN0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hY3Rpb25zKTtcblxudmFyIF9jaGFpbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY2hhaW4nKTtcblxudmFyIF9jaGFpbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGFpbjIpO1xuXG52YXIgX2NvbG9yVHdlZW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NvbG9yLXR3ZWVuJyk7XG5cbnZhciBfY29sb3JUd2VlbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvclR3ZWVuMik7XG5cbnZhciBfY29tcG9zaXRlMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jb21wb3NpdGUnKTtcblxudmFyIF9jb21wb3NpdGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRlMik7XG5cbnZhciBfY3Jvc3NGYWRlMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jcm9zcy1mYWRlJyk7XG5cbnZhciBfY3Jvc3NGYWRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nyb3NzRmFkZTIpO1xuXG52YXIgX2RlbGF5MiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9kZWxheScpO1xuXG52YXIgX2RlbGF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlbGF5Mik7XG5cbnZhciBfcGFyYWxsZWwyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BhcmFsbGVsJyk7XG5cbnZhciBfcGFyYWxsZWwzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyYWxsZWwyKTtcblxudmFyIF9waHlzaWNzMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9waHlzaWNzJyk7XG5cbnZhciBfcGh5c2ljczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9waHlzaWNzMik7XG5cbnZhciBfcG9pbnRlcjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcG9pbnRlcicpO1xuXG52YXIgX3BvaW50ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9pbnRlcjIpO1xuXG52YXIgX3RvdWNoZXMyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3RvdWNoZXMnKTtcblxudmFyIF90b3VjaGVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvdWNoZXMyKTtcblxudmFyIF90cmFja09mZnNldDIgPSByZXF1aXJlKCcuL2FjdGlvbnMvdHJhY2stb2Zmc2V0Jyk7XG5cbnZhciBfdHJhY2tPZmZzZXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhY2tPZmZzZXQyKTtcblxudmFyIF90d2VlbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvdHdlZW4nKTtcblxudmFyIF90d2VlbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2VlbjIpO1xuXG52YXIgX3N0YWdnZXIyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3N0YWdnZXInKTtcblxudmFyIF9zdGFnZ2VyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YWdnZXIyKTtcblxudmFyIF9zcHJpbmcyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3NwcmluZycpO1xuXG52YXIgX3NwcmluZzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcHJpbmcyKTtcblxudmFyIF92YWx1ZTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvdmFsdWUnKTtcblxudmFyIF92YWx1ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZTIpO1xuXG52YXIgX3JlbmRlcmVycyA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzJyk7XG5cbnZhciBfcmVuZGVyZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbmRlcmVycyk7XG5cbnZhciBfY3NzMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL2NzcycpO1xuXG52YXIgX2NzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3MyKTtcblxudmFyIF9zdmcyID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMvc3ZnJyk7XG5cbnZhciBfc3ZnMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2ZzIpO1xuXG52YXIgX3N2Z1BhdGgyID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMvc3ZnLXBhdGgnKTtcblxudmFyIF9zdmdQYXRoMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z1BhdGgyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZXhwb3J0cy5jYWxjID0gX2NhbGM7IC8vIEZyYW1lc3luYyBzY2hlZHVsZXJzXG5cbmV4cG9ydHMuZWFzaW5nID0gX2Vhc2luZztcbmV4cG9ydHMudHJhbnNmb3JtID0gX3RyYW5zZm9ybTtcbmV4cG9ydHMudmFsdWVUeXBlcyA9IF92YWx1ZVR5cGVzO1xuXG4vLyBBY3Rpb25zXG5cbmV4cG9ydHMuQWN0aW9uID0gX2FjdGlvbnMyLmRlZmF1bHQ7XG5leHBvcnRzLmNoYWluID0gX2NoYWluMy5kZWZhdWx0O1xuZXhwb3J0cy5jb2xvclR3ZWVuID0gX2NvbG9yVHdlZW4zLmRlZmF1bHQ7XG5leHBvcnRzLmNvbXBvc2l0ZSA9IF9jb21wb3NpdGUzLmRlZmF1bHQ7XG5leHBvcnRzLmNyb3NzRmFkZSA9IF9jcm9zc0ZhZGUzLmRlZmF1bHQ7XG5leHBvcnRzLmRlbGF5ID0gX2RlbGF5My5kZWZhdWx0O1xuLy9leHBvcnQgaW5lcnRpYSBmcm9tICcuL2FjdGlvbnMvaW5lcnRpYSc7XG5cbmV4cG9ydHMucGFyYWxsZWwgPSBfcGFyYWxsZWwzLmRlZmF1bHQ7XG5leHBvcnRzLnBoeXNpY3MgPSBfcGh5c2ljczMuZGVmYXVsdDtcbmV4cG9ydHMucG9pbnRlciA9IF9wb2ludGVyMy5kZWZhdWx0O1xuZXhwb3J0cy50b3VjaGVzID0gX3RvdWNoZXMzLmRlZmF1bHQ7XG5leHBvcnRzLnRyYWNrT2Zmc2V0ID0gX3RyYWNrT2Zmc2V0My5kZWZhdWx0O1xuZXhwb3J0cy50d2VlbiA9IF90d2VlbjMuZGVmYXVsdDtcbmV4cG9ydHMuc3RhZ2dlciA9IF9zdGFnZ2VyMy5kZWZhdWx0O1xuZXhwb3J0cy5zcHJpbmcgPSBfc3ByaW5nMy5kZWZhdWx0O1xuZXhwb3J0cy52YWx1ZSA9IF92YWx1ZTMuZGVmYXVsdDtcblxuLy8gUmVuZGVyZXJzXG5cbmV4cG9ydHMuUmVuZGVyZXIgPSBfcmVuZGVyZXJzMi5kZWZhdWx0O1xuZXhwb3J0cy5jc3MgPSBfY3NzMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmcgPSBfc3ZnMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmdQYXRoID0gX3N2Z1BhdGgzLmRlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2IzQnRiM1JwYjI0dWFuTWlYU3dpYm1GdFpYTWlPbHNpWTJGc1l5SXNJbVZoYzJsdVp5SXNJblJ5WVc1elptOXliU0lzSW5aaGJIVmxWSGx3WlhNaUxDSkJZM1JwYjI0aUxDSmphR0ZwYmlJc0ltTnZiRzl5VkhkbFpXNGlMQ0pqYjIxd2IzTnBkR1VpTENKamNtOXpjMFpoWkdVaUxDSmtaV3hoZVNJc0luQmhjbUZzYkdWc0lpd2ljR2g1YzJsamN5SXNJbkJ2YVc1MFpYSWlMQ0owYjNWamFHVnpJaXdpZEhKaFkydFBabVp6WlhRaUxDSjBkMlZsYmlJc0luTjBZV2RuWlhJaUxDSnpjSEpwYm1jaUxDSjJZV3gxWlNJc0lsSmxibVJsY21WeUlpd2lZM056SWl3aWMzWm5JaXdpYzNablVHRjBhQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdVVUZEV1VFc1NTeFZRVVJhT3p0UlFVVlpReXhOTzFGQlEwRkRMRk03VVVGRFFVTXNWVHM3UVVGRldqczdVVUZEVDBNc1RUdFJRVU5CUXl4TE8xRkJRMEZETEZVN1VVRkRRVU1zVXp0UlFVTkJReXhUTzFGQlEwRkRMRXM3UVVGRFVEczdVVUZEVDBNc1VUdFJRVU5CUXl4UE8xRkJRMEZETEU4N1VVRkRRVU1zVHp0UlFVTkJReXhYTzFGQlEwRkRMRXM3VVVGRFFVTXNUenRSUVVOQlF5eE5PMUZCUTBGRExFczdPMEZCUlZBN08xRkJRMDlETEZFN1VVRkRRVU1zUnp0UlFVTkJReXhITzFGQlEwRkRMRThpTENKbWFXeGxJam9pY0c5d2JXOTBhVzl1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1JuSmhiV1Z6ZVc1aklITmphR1ZrZFd4bGNuTmNibVY0Y0c5eWRDQXFJR0Z6SUdOaGJHTWdabkp2YlNBbkxpOXBibU12WTJGc1l5YzdYRzVsZUhCdmNuUWdLaUJoY3lCbFlYTnBibWNnWm5KdmJTQW5MaTlwYm1NdlpXRnphVzVuSnp0Y2JtVjRjRzl5ZENBcUlHRnpJSFJ5WVc1elptOXliU0JtY205dElDY3VMMmx1WXk5MGNtRnVjMlp2Y20xbGNuTW5PMXh1Wlhod2IzSjBJQ29nWVhNZ2RtRnNkV1ZVZVhCbGN5Qm1jbTl0SUNjdUwybHVZeTkyWVd4MVpTMTBlWEJsY3ljN1hHNWNiaTh2SUVGamRHbHZibk5jYm1WNGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOWhZM1JwYjI1ekp6dGNibVY0Y0c5eWRDQmphR0ZwYmlCbWNtOXRJQ2N1TDJGamRHbHZibk12WTJoaGFXNG5PMXh1Wlhod2IzSjBJR052Ykc5eVZIZGxaVzRnWm5KdmJTQW5MaTloWTNScGIyNXpMMk52Ykc5eUxYUjNaV1Z1Snp0Y2JtVjRjRzl5ZENCamIyMXdiM05wZEdVZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDJOdmJYQnZjMmwwWlNjN1hHNWxlSEJ2Y25RZ1kzSnZjM05HWVdSbElHWnliMjBnSnk0dllXTjBhVzl1Y3k5amNtOXpjeTFtWVdSbEp6dGNibVY0Y0c5eWRDQmtaV3hoZVNCbWNtOXRJQ2N1TDJGamRHbHZibk12WkdWc1lYa25PMXh1THk5bGVIQnZjblFnYVc1bGNuUnBZU0JtY205dElDY3VMMkZqZEdsdmJuTXZhVzVsY25ScFlTYzdYRzVsZUhCdmNuUWdjR0Z5WVd4c1pXd2dabkp2YlNBbkxpOWhZM1JwYjI1ekwzQmhjbUZzYkdWc0p6dGNibVY0Y0c5eWRDQndhSGx6YVdOeklHWnliMjBnSnk0dllXTjBhVzl1Y3k5d2FIbHphV056Snp0Y2JtVjRjRzl5ZENCd2IybHVkR1Z5SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTl3YjJsdWRHVnlKenRjYm1WNGNHOXlkQ0IwYjNWamFHVnpJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OTBiM1ZqYUdWekp6dGNibVY0Y0c5eWRDQjBjbUZqYTA5bVpuTmxkQ0JtY205dElDY3VMMkZqZEdsdmJuTXZkSEpoWTJzdGIyWm1jMlYwSnp0Y2JtVjRjRzl5ZENCMGQyVmxiaUJtY205dElDY3VMMkZqZEdsdmJuTXZkSGRsWlc0bk8xeHVaWGh3YjNKMElITjBZV2RuWlhJZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDNOMFlXZG5aWEluTzF4dVpYaHdiM0owSUhOd2NtbHVaeUJtY205dElDY3VMMkZqZEdsdmJuTXZjM0J5YVc1bkp6dGNibVY0Y0c5eWRDQjJZV3gxWlNCbWNtOXRJQ2N1TDJGamRHbHZibk12ZG1Gc2RXVW5PMXh1WEc0dkx5QlNaVzVrWlhKbGNuTmNibVY0Y0c5eWRDQlNaVzVrWlhKbGNpQm1jbTl0SUNjdUwzSmxibVJsY21WeWN5YzdYRzVsZUhCdmNuUWdZM056SUdaeWIyMGdKeTR2Y21WdVpHVnlaWEp6TDJOemN5YzdYRzVsZUhCdmNuUWdjM1puSUdaeWIyMGdKeTR2Y21WdVpHVnlaWEp6TDNOMlp5YzdYRzVsZUhCdmNuUWdjM1puVUdGMGFDQm1jbTl0SUNjdUwzSmxibVJsY21WeWN5OXpkbWN0Y0dGMGFDYzdYRzRpWFgwPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3BvcG1vdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3ViaWNCZXppZXIgPSBleHBvcnRzLmFudGljaXBhdGUgPSBleHBvcnRzLmNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBleHBvcnRzLmJhY2tJbk91dCA9IGV4cG9ydHMuYmFja091dCA9IGV4cG9ydHMuYmFja0luID0gZXhwb3J0cy5jcmVhdGVCYWNrSW4gPSBleHBvcnRzLmNpcmNJbk91dCA9IGV4cG9ydHMuY2lyY091dCA9IGV4cG9ydHMuY2lyY0luID0gZXhwb3J0cy5lYXNlSW5PdXQgPSBleHBvcnRzLmVhc2VPdXQgPSBleHBvcnRzLmVhc2VJbiA9IGV4cG9ydHMuY3JlYXRlRXhwb0luID0gZXhwb3J0cy5saW5lYXIgPSBleHBvcnRzLmNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVSZXZlcnNlZEVhc2luZyA9IHVuZGVmaW5lZDtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybWVycycpO1xuXG52YXIgREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEggPSAxLjUyNTtcblxudmFyIGNyZWF0ZVJldmVyc2VkRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVSZXZlcnNlZEVhc2luZyA9IGZ1bmN0aW9uIGNyZWF0ZVJldmVyc2VkRWFzaW5nKGVhc2luZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2luZygxIC0gcCk7XG4gIH07XG59O1xudmFyIGNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVNaXJyb3JlZEVhc2luZyA9IGZ1bmN0aW9uIGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGVhc2luZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8PSAwLjUgPyBlYXNpbmcoMiAqIHApIC8gMiA6ICgyIC0gZWFzaW5nKDIgKiAoMSAtIHApKSkgLyAyO1xuICB9O1xufTtcblxudmFyIGxpbmVhciA9IGV4cG9ydHMubGluZWFyID0gZnVuY3Rpb24gbGluZWFyKHApIHtcbiAgcmV0dXJuIHA7XG59O1xuXG52YXIgY3JlYXRlRXhwb0luID0gZXhwb3J0cy5jcmVhdGVFeHBvSW4gPSBmdW5jdGlvbiBjcmVhdGVFeHBvSW4ocG93ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHAsIHBvd2VyKTtcbiAgfTtcbn07XG52YXIgZWFzZUluID0gZXhwb3J0cy5lYXNlSW4gPSBjcmVhdGVFeHBvSW4oMik7XG52YXIgZWFzZU91dCA9IGV4cG9ydHMuZWFzZU91dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGVhc2VJbik7XG52YXIgZWFzZUluT3V0ID0gZXhwb3J0cy5lYXNlSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhlYXNlSW4pO1xuXG52YXIgY2lyY0luID0gZXhwb3J0cy5jaXJjSW4gPSBmdW5jdGlvbiBjaXJjSW4ocCkge1xuICByZXR1cm4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwKSk7XG59O1xudmFyIGNpcmNPdXQgPSBleHBvcnRzLmNpcmNPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhjaXJjSW4pO1xudmFyIGNpcmNJbk91dCA9IGV4cG9ydHMuY2lyY0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoY2lyY091dCk7XG5cbnZhciBjcmVhdGVCYWNrSW4gPSBleHBvcnRzLmNyZWF0ZUJhY2tJbiA9IGZ1bmN0aW9uIGNyZWF0ZUJhY2tJbihwb3dlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCAqIHAgKiAoKHBvd2VyICsgMSkgKiBwIC0gcG93ZXIpO1xuICB9O1xufTtcbnZhciBiYWNrSW4gPSBleHBvcnRzLmJhY2tJbiA9IGNyZWF0ZUJhY2tJbihERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG52YXIgYmFja091dCA9IGV4cG9ydHMuYmFja091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGJhY2tJbik7XG52YXIgYmFja0luT3V0ID0gZXhwb3J0cy5iYWNrSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhiYWNrSW4pO1xuXG52YXIgY3JlYXRlQW50aWNpcGF0ZUVhc2luZyA9IGV4cG9ydHMuY3JlYXRlQW50aWNpcGF0ZUVhc2luZyA9IGZ1bmN0aW9uIGNyZWF0ZUFudGljaXBhdGVFYXNpbmcocG93ZXIpIHtcbiAgdmFyIGJhY2tFYXNpbmcgPSBjcmVhdGVCYWNrSW4ocG93ZXIpO1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gKHAgKj0gMikgPCAxID8gMC41ICogYmFja0Vhc2luZyhwKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHAgLSAxKSkpO1xuICB9O1xufTtcblxudmFyIGFudGljaXBhdGUgPSBleHBvcnRzLmFudGljaXBhdGUgPSBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcblxudmFyIGN1YmljQmV6aWVyID0gZXhwb3J0cy5jdWJpY0JlemllciA9IGZ1bmN0aW9uIGN1YmljQmV6aWVyKHgxLCB5MSwgeDIsIHkyKSB7XG4gIHZhciB4QmV6aWVyID0gKDAsIF90cmFuc2Zvcm1lcnMuYmV6aWVyKSgwLCB4MSwgeDIsIDEpO1xuICB2YXIgeUJlemllciA9ICgwLCBfdHJhbnNmb3JtZXJzLmJlemllcikoMCwgeTEsIHkyLCAxKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4geUJlemllcih4QmV6aWVyKHQpKTtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZaV0Z6YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiSWtSRlJrRlZURlJmVDFaRlVsTklUMDlVWDFOVVVrVk9SMVJJSWl3aVkzSmxZWFJsVW1WMlpYSnpaV1JGWVhOcGJtY2lMQ0psWVhOcGJtY2lMQ0p3SWl3aVkzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY2lMQ0pzYVc1bFlYSWlMQ0pqY21WaGRHVkZlSEJ2U1c0aUxDSndiM2RsY2lJc0ltVmhjMlZKYmlJc0ltVmhjMlZQZFhRaUxDSmxZWE5sU1c1UGRYUWlMQ0pqYVhKalNXNGlMQ0pOWVhSb0lpd2ljMmx1SWl3aVlXTnZjeUlzSW1OcGNtTlBkWFFpTENKamFYSmpTVzVQZFhRaUxDSmpjbVZoZEdWQ1lXTnJTVzRpTENKaVlXTnJTVzRpTENKaVlXTnJUM1YwSWl3aVltRmphMGx1VDNWMElpd2lZM0psWVhSbFFXNTBhV05wY0dGMFpVVmhjMmx1WnlJc0ltSmhZMnRGWVhOcGJtY2lMQ0p3YjNjaUxDSmhiblJwWTJsd1lYUmxJaXdpWTNWaWFXTkNaWHBwWlhJaUxDSjRNU0lzSW5reElpd2llRElpTENKNU1pSXNJbmhDWlhwcFpYSWlMQ0o1UW1WNmFXVnlJaXdpZENKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN1FVRkJRVHM3UVVGRlFTeEpRVUZOUVN3MlFrRkJOa0lzUzBGQmJrTTdPMEZCUlU4c1NVRkJUVU1zYzBSQlFYVkNMRk5CUVhaQ1FTeHZRa0ZCZFVJc1EwRkJRME1zVFVGQlJEdEJRVUZCTEZOQlFWa3NWVUZCUTBNc1EwRkJSRHRCUVVGQkxGZEJRVThzU1VGQlNVUXNUMEZCVHl4SlFVRkpReXhEUVVGWUxFTkJRVmc3UVVGQlFTeEhRVUZhTzBGQlFVRXNRMEZCTjBJN1FVRkRRU3hKUVVGTlF5eHpSRUZCZFVJc1UwRkJka0pCTEc5Q1FVRjFRaXhEUVVGRFJpeE5RVUZFTzBGQlFVRXNVMEZCV1N4VlFVRkRReXhEUVVGRU8wRkJRVUVzVjBGQlVVRXNTMEZCU3l4SFFVRk9MRWRCUVdGRUxFOUJRVThzU1VGQlNVTXNRMEZCV0N4SlFVRm5RaXhEUVVFM1FpeEhRVUZwUXl4RFFVRkRMRWxCUVVsRUxFOUJRVThzUzBGQlN5eEpRVUZKUXl4RFFVRlVMRU5CUVZBc1EwRkJUQ3hKUVVFMFFpeERRVUZ3UlR0QlFVRkJMRWRCUVZvN1FVRkJRU3hEUVVFM1FqczdRVUZGUVN4SlFVRk5SU3d3UWtGQlV5eFRRVUZVUVN4TlFVRlRMRU5CUVVOR0xFTkJRVVE3UVVGQlFTeFRRVUZQUVN4RFFVRlFPMEZCUVVFc1EwRkJaanM3UVVGRlFTeEpRVUZOUnl4elEwRkJaU3hUUVVGbVFTeFpRVUZsTEVOQlFVTkRMRXRCUVVRN1FVRkJRU3hUUVVGWExGVkJRVU5LTEVOQlFVUTdRVUZCUVN4dlFrRkJUMEVzUTBGQlVDeEZRVUZaU1N4TFFVRmFPMEZCUVVFc1IwRkJXRHRCUVVGQkxFTkJRWEpDTzBGQlEwRXNTVUZCVFVNc01FSkJRVk5HTEdGQlFXRXNRMEZCWWl4RFFVRm1PMEZCUTBFc1NVRkJUVWNzTkVKQlFWVlNMSEZDUVVGeFFrOHNUVUZCY2tJc1EwRkJhRUk3UVVGRFFTeEpRVUZOUlN4blEwRkJXVTRzY1VKQlFYRkNTU3hOUVVGeVFpeERRVUZzUWpzN1FVRkZRU3hKUVVGTlJ5d3dRa0ZCVXl4VFFVRlVRU3hOUVVGVExFTkJRVU5TTEVOQlFVUTdRVUZCUVN4VFFVRlBMRWxCUVVsVExFdEJRVXRETEVkQlFVd3NRMEZCVTBRc1MwRkJTMFVzU1VGQlRDeERRVUZWV0N4RFFVRldMRU5CUVZRc1EwRkJXRHRCUVVGQkxFTkJRV1k3UVVGRFFTeEpRVUZOV1N3MFFrRkJWV1FzY1VKQlFYRkNWU3hOUVVGeVFpeERRVUZvUWp0QlFVTkJMRWxCUVUxTExHZERRVUZaV2l4eFFrRkJjVUpYTEU5QlFYSkNMRU5CUVd4Q096dEJRVVZCTEVsQlFVMUZMSE5EUVVGbExGTkJRV1pCTEZsQlFXVXNRMEZCUTFZc1MwRkJSRHRCUVVGQkxGTkJRVmNzVlVGQlEwb3NRMEZCUkR0QlFVRkJMRmRCUVZGQkxFbEJRVWxCTEVOQlFVd3NTVUZCVnl4RFFVRkRTU3hSUVVGUkxFTkJRVlFzU1VGQlkwb3NRMEZCWkN4SFFVRnJRa2tzUzBGQk4wSXNRMEZCVUR0QlFVRkJMRWRCUVZnN1FVRkJRU3hEUVVGeVFqdEJRVU5CTEVsQlFVMVhMREJDUVVGVFJDeGhRVUZoYWtJc01FSkJRV0lzUTBGQlpqdEJRVU5CTEVsQlFVMXRRaXcwUWtGQlZXeENMSEZDUVVGeFFtbENMRTFCUVhKQ0xFTkJRV2hDTzBGQlEwRXNTVUZCVFVVc1owTkJRVmxvUWl4eFFrRkJjVUpqTEUxQlFYSkNMRU5CUVd4Q096dEJRVVZCTEVsQlFVMUhMREJFUVVGNVFpeFRRVUY2UWtFc2MwSkJRWGxDTEVOQlFVTmtMRXRCUVVRc1JVRkJWenRCUVVNdlF5eE5RVUZOWlN4aFFVRmhUQ3hoUVVGaFZpeExRVUZpTEVOQlFXNUNPMEZCUTBFc1UwRkJUeXhWUVVGRFNpeERRVUZFTzBGQlFVRXNWMEZCVVN4RFFVRkRRU3hMUVVGTExFTkJRVTRzU1VGQlZ5eERRVUZhTEVkQlFXbENMRTFCUVUxdFFpeFhRVUZYYmtJc1EwRkJXQ3hEUVVGMlFpeEhRVUYxUXl4UFFVRlBMRWxCUVVsVExFdEJRVXRYTEVkQlFVd3NRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJReXhGUVVGRUxFbEJRVTl3UWl4SlFVRkpMRU5CUVZnc1EwRkJXaXhEUVVGWUxFTkJRVGxETzBGQlFVRXNSMEZCVUR0QlFVTkVMRU5CU0UwN08wRkJTMEVzU1VGQlRYRkNMR3REUVVGaFNDeDFRa0ZCZFVKeVFpd3dRa0ZCZGtJc1EwRkJia0k3TzBGQlJVRXNTVUZCVFhsQ0xHOURRVUZqTEZOQlFXUkJMRmRCUVdNc1EwRkJRME1zUlVGQlJDeEZRVUZMUXl4RlFVRk1MRVZCUVZORExFVkJRVlFzUlVGQllVTXNSVUZCWWl4RlFVRnZRanRCUVVNM1F5eE5RVUZOUXl4VlFVRlZMREJDUVVGUExFTkJRVkFzUlVGQlZVb3NSVUZCVml4RlFVRmpSU3hGUVVGa0xFVkJRV3RDTEVOQlFXeENMRU5CUVdoQ08wRkJRMEVzVFVGQlRVY3NWVUZCVlN3d1FrRkJUeXhEUVVGUUxFVkJRVlZLTEVWQlFWWXNSVUZCWTBVc1JVRkJaQ3hGUVVGclFpeERRVUZzUWl4RFFVRm9RanM3UVVGRlFTeFRRVUZQTEZWQlFVTkhMRU5CUVVRN1FVRkJRU3hYUVVGUFJDeFJRVUZSUkN4UlFVRlJSU3hEUVVGU0xFTkJRVklzUTBGQlVEdEJRVUZCTEVkQlFWQTdRVUZEUkN4RFFVeE5JaXdpWm1sc1pTSTZJbVZoYzJsdVp5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHSmxlbWxsY2lCOUlHWnliMjBnSnk0dmRISmhibk5tYjNKdFpYSnpKenRjYmx4dVkyOXVjM1FnUkVWR1FWVk1WRjlQVmtWU1UwaFBUMVJmVTFSU1JVNUhWRWdnUFNBeExqVXlOVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR055WldGMFpWSmxkbVZ5YzJWa1JXRnphVzVuSUQwZ0tHVmhjMmx1WnlrZ1BUNGdLSEFwSUQwK0lERWdMU0JsWVhOcGJtY29NU0F0SUhBcE8xeHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVTFwY25KdmNtVmtSV0Z6YVc1bklEMGdLR1ZoYzJsdVp5a2dQVDRnS0hBcElEMCtJQ2h3SUR3OUlEQXVOU2tnUHlCbFlYTnBibWNvTWlBcUlIQXBJQzhnTWlBNklDZ3lJQzBnWldGemFXNW5LRElnS2lBb01TQXRJSEFwS1NrZ0x5QXlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdiR2x1WldGeUlEMGdLSEFwSUQwK0lIQTdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWRmVIQnZTVzRnUFNBb2NHOTNaWElwSUQwK0lDaHdLU0E5UGlCd0lDb3FJSEJ2ZDJWeU8xeHVaWGh3YjNKMElHTnZibk4wSUdWaGMyVkpiaUE5SUdOeVpXRjBaVVY0Y0c5SmJpZ3lLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmxZWE5sVDNWMElEMGdZM0psWVhSbFVtVjJaWEp6WldSRllYTnBibWNvWldGelpVbHVLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmxZWE5sU1c1UGRYUWdQU0JqY21WaGRHVk5hWEp5YjNKbFpFVmhjMmx1WnlobFlYTmxTVzRwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJseVkwbHVJRDBnS0hBcElEMCtJREVnTFNCTllYUm9Mbk5wYmloTllYUm9MbUZqYjNNb2NDa3BPMXh1Wlhod2IzSjBJR052Ym5OMElHTnBjbU5QZFhRZ1BTQmpjbVZoZEdWU1pYWmxjbk5sWkVWaGMybHVaeWhqYVhKalNXNHBPMXh1Wlhod2IzSjBJR052Ym5OMElHTnBjbU5KYms5MWRDQTlJR055WldGMFpVMXBjbkp2Y21Wa1JXRnphVzVuS0dOcGNtTlBkWFFwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxRbUZqYTBsdUlEMGdLSEJ2ZDJWeUtTQTlQaUFvY0NrZ1BUNGdLSEFnS2lCd0tTQXFJQ2dvY0c5M1pYSWdLeUF4S1NBcUlIQWdMU0J3YjNkbGNpazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1ltRmphMGx1SUQwZ1kzSmxZWFJsUW1GamEwbHVLRVJGUmtGVlRGUmZUMVpGVWxOSVQwOVVYMU5VVWtWT1IxUklLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmlZV05yVDNWMElEMGdZM0psWVhSbFVtVjJaWEp6WldSRllYTnBibWNvWW1GamEwbHVLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmlZV05yU1c1UGRYUWdQU0JqY21WaGRHVk5hWEp5YjNKbFpFVmhjMmx1WnloaVlXTnJTVzRwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxRVzUwYVdOcGNHRjBaVVZoYzJsdVp5QTlJQ2h3YjNkbGNpa2dQVDRnZTF4dUlDQmpiMjV6ZENCaVlXTnJSV0Z6YVc1bklEMGdZM0psWVhSbFFtRmphMGx1S0hCdmQyVnlLVHRjYmlBZ2NtVjBkWEp1SUNod0tTQTlQaUFvS0hBZ0tqMGdNaWtnUENBeEtTQS9JREF1TlNBcUlHSmhZMnRGWVhOcGJtY29jQ2tnT2lBd0xqVWdLaUFvTWlBdElFMWhkR2d1Y0c5M0tESXNJQzB4TUNBcUlDaHdJQzBnTVNrcEtUdGNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JoYm5ScFkybHdZWFJsSUQwZ1kzSmxZWFJsUVc1MGFXTnBjR0YwWlVWaGMybHVaeWhFUlVaQlZVeFVYMDlXUlZKVFNFOVBWRjlUVkZKRlRrZFVTQ2s3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqZFdKcFkwSmxlbWxsY2lBOUlDaDRNU3dnZVRFc0lIZ3lMQ0I1TWlrZ1BUNGdlMXh1SUNCamIyNXpkQ0I0UW1WNmFXVnlJRDBnWW1WNmFXVnlLREFzSUhneExDQjRNaXdnTVNrN1hHNGdJR052Ym5OMElIbENaWHBwWlhJZ1BTQmlaWHBwWlhJb01Dd2dlVEVzSUhreUxDQXhLVHRjYmx4dUlDQnlaWFIxY200Z0tIUXBJRDArSUhsQ1pYcHBaWElvZUVKbGVtbGxjaWgwS1NrN1hHNTlPMXh1SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luYy9lYXNpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnZnJhbWVzeW5jJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ29tcG9zaXRlQWN0aW9uID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENvbXBvc2l0ZUFjdGlvbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ29tcG9zaXRlQWN0aW9uKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvc2l0ZUFjdGlvbik7XG5cbiAgICB2YXIgYWN0aW9ucyA9IHByb3BzLmFjdGlvbnMsXG4gICAgICAgIHJlbWFpbmluZ1Byb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ2FjdGlvbnMnXSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwodGhpcywgcmVtYWluaW5nUHJvcHMpKTtcblxuICAgIF90aGlzLmN1cnJlbnQgPSB7fTtcbiAgICBfdGhpcy5hY3Rpb25LZXlzID0gW107XG4gICAgX3RoaXMuYWRkQWN0aW9ucyhhY3Rpb25zKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmFkZEFjdGlvbnMgPSBmdW5jdGlvbiBhZGRBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGtleSkge1xuICAgICAgaWYgKF90aGlzMi5hY3Rpb25LZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgX3RoaXMyLmFjdGlvbktleXMucHVzaChrZXkpO1xuICAgICAgfVxuXG4gICAgICBfdGhpczJba2V5XSA9IGFjdGlvbnNba2V5XTtcblxuICAgICAgdmFyIG9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUodikge1xuICAgICAgICBfdGhpczIuY3VycmVudFtrZXldID0gdjtcbiAgICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkoX3RoaXMyLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpczJba2V5XS5zZXRQcm9wcyh7XG4gICAgICAgIF9vblN0b3A6IGZ1bmN0aW9uIF9vblN0b3AoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cbiAgICAgIH0pLmFkZExpc3RlbmVyKG9uVXBkYXRlKTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIGFjdGlvbnMpIHtcbiAgICAgIF9sb29wKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSB0aGlzLmFjdGlvbktleXMubGVuZ3RoO1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczNba2V5XS5zdGFydCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzNFtrZXldLnN0b3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gZ2V0VmVsb2NpdHkoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB2YXIgdmVsb2NpdHkgPSB7fTtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gdmVsb2NpdHlba2V5XSA9IF90aGlzNVtrZXldLmdldFZlbG9jaXR5KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZlbG9jaXR5O1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMDtcbiAgfTtcblxuICByZXR1cm4gQ29tcG9zaXRlQWN0aW9uO1xufShfMi5kZWZhdWx0KTtcblxuQ29tcG9zaXRlQWN0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ29tcG9zaXRlQWN0aW9uKF9leHRlbmRzKHtcbiAgICBhY3Rpb25zOiBhY3Rpb25zXG4gIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnZiWEJ2YzJsMFpTNXFjeUpkTENKdVlXMWxjeUk2V3lKRGIyMXdiM05wZEdWQlkzUnBiMjRpTENKd2NtOXdjeUlzSW1GamRHbHZibk1pTENKeVpXMWhhVzVwYm1kUWNtOXdjeUlzSW1OMWNuSmxiblFpTENKaFkzUnBiMjVMWlhseklpd2lZV1JrUVdOMGFXOXVjeUlzSW10bGVTSXNJbWx1WkdWNFQyWWlMQ0p3ZFhOb0lpd2liMjVWY0dSaGRHVWlMQ0oySWl3aWMyTm9aV1IxYkdWa1ZYQmtZWFJsSWl3aWMyVjBVSEp2Y0hNaUxDSmZiMjVUZEc5d0lpd2liblZ0UVdOMGFYWmxRV04wYVc5dWN5SXNJbUZrWkV4cGMzUmxibVZ5SWl3aWIyNVRkR0Z5ZENJc0lteGxibWQwYUNJc0ltWnZja1ZoWTJnaUxDSnpkR0Z5ZENJc0ltOXVVM1J2Y0NJc0luTjBiM0FpTENKblpYUldaV3h2WTJsMGVTSXNJblpsYkc5amFYUjVJaXdpYVhOQlkzUnBiMjVEYjIxd2JHVjBaU0lzSW1SbFptRjFiSFJRY205d2N5SXNJbkJoYzNOcGRtVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGQk96czdPMEZCUTBFN096czdPenM3T3pzN096dEpRVVZOUVN4bE96czdRVUZMU2l3eVFrRkJXVU1zUzBGQldpeEZRVUZ0UWp0QlFVRkJPenRCUVVGQkxGRkJRMVJETEU5QlJGTXNSMEZEYzBKRUxFdEJSSFJDTEVOQlExUkRMRTlCUkZNN1FVRkJRU3hSUVVOSFF5eGpRVVJJTERSQ1FVTnpRa1lzUzBGRWRFSTdPMEZCUVVFc2FVUkJSV3BDTEcxQ1FVRk5SU3hqUVVGT0xFTkJSbWxDT3p0QlFVZHFRaXhWUVVGTFF5eFBRVUZNTEVkQlFXVXNSVUZCWmp0QlFVTkJMRlZCUVV0RExGVkJRVXdzUjBGQmEwSXNSVUZCYkVJN1FVRkRRU3hWUVVGTFF5eFZRVUZNTEVOQlFXZENTaXhQUVVGb1FqdEJRVXhwUWp0QlFVMXNRanM3TkVKQlJVUkpMRlVzZFVKQlFWZEtMRThzUlVGQlV6dEJRVUZCT3p0QlFVRkJMQ3RDUVVOUVN5eEhRVVJQTzBGQlJXaENMRlZCUVVrc1QwRkJTMFlzVlVGQlRDeERRVUZuUWtjc1QwRkJhRUlzUTBGQmQwSkVMRWRCUVhoQ0xFMUJRV2xETEVOQlFVTXNRMEZCZEVNc1JVRkJlVU03UVVGRGRrTXNaVUZCUzBZc1ZVRkJUQ3hEUVVGblFra3NTVUZCYUVJc1EwRkJjVUpHTEVkQlFYSkNPMEZCUTBRN08wRkJSVVFzWVVGQlMwRXNSMEZCVEN4SlFVRlpUQ3hSUVVGUlN5eEhRVUZTTEVOQlFWbzdPMEZCUlVFc1ZVRkJUVWNzVjBGQlZ5eFRRVUZZUVN4UlFVRlhMRU5CUVVORExFTkJRVVFzUlVGQlR6dEJRVU4wUWl4bFFVRkxVQ3hQUVVGTUxFTkJRV0ZITEVkQlFXSXNTVUZCYjBKSkxFTkJRWEJDTzBGQlEwRXNjME5CUVdNc1QwRkJTME1zWlVGQmJrSTdRVUZEUkN4UFFVaEVPenRCUVV0QkxHRkJRVXRNTEVkQlFVd3NSVUZEUjAwc1VVRkVTQ3hEUVVOWk8wRkJRMUpETEdsQ1FVRlRPMEZCUVVFc2FVSkJRVTBzVDBGQlMwTXNaMEpCUVV3c1JVRkJUanRCUVVGQk8wRkJSRVFzVDBGRVdpeEZRVWxIUXl4WFFVcElMRU5CU1dWT0xGRkJTbVk3UVVGaVowSTdPMEZCUTJ4Q0xGTkJRVXNzU1VGQlRVZ3NSMEZCV0N4SlFVRnJRa3dzVDBGQmJFSXNSVUZCTWtJN1FVRkJRU3haUVVGb1Frc3NSMEZCWjBJN1FVRnBRakZDTzBGQlEwWXNSenM3TkVKQlJVUlZMRThzYzBKQlFWVTdRVUZCUVRzN1FVRkRVaXhUUVVGTFJpeG5Ra0ZCVEN4SFFVRjNRaXhMUVVGTFZpeFZRVUZNTEVOQlFXZENZU3hOUVVGNFF6dEJRVU5CTEZOQlFVdGlMRlZCUVV3c1EwRkJaMEpqTEU5QlFXaENMRU5CUVhkQ0xGVkJRVU5hTEVkQlFVUTdRVUZCUVN4aFFVRlRMRTlCUVV0QkxFZEJRVXdzUlVGQlZXRXNTMEZCVml4RlFVRlVPMEZCUVVFc1MwRkJlRUk3UVVGRFJDeEhPenMwUWtGRlJFTXNUU3h4UWtGQlV6dEJRVUZCT3p0QlFVTlFMRk5CUVV0b1FpeFZRVUZNTEVOQlFXZENZeXhQUVVGb1FpeERRVUYzUWl4VlFVRkRXaXhIUVVGRU8wRkJRVUVzWVVGQlV5eFBRVUZMUVN4SFFVRk1MRVZCUVZWbExFbEJRVllzUlVGQlZEdEJRVUZCTEV0QlFYaENPMEZCUTBRc1J6czdORUpCUlVSRExGY3NNRUpCUVdNN1FVRkJRVHM3UVVGRFdpeFJRVUZOUXl4WFFVRlhMRVZCUVdwQ08wRkJRMEVzVTBGQlMyNUNMRlZCUVV3c1EwRkJaMEpqTEU5QlFXaENMRU5CUVhkQ0xGVkJRVU5hTEVkQlFVUTdRVUZCUVN4aFFVRlRhVUlzVTBGQlUycENMRWRCUVZRc1NVRkJaMElzVDBGQlMwRXNSMEZCVEN4RlFVRlZaMElzVjBGQlZpeEZRVUY2UWp0QlFVRkJMRXRCUVhoQ08wRkJRMEVzVjBGQlQwTXNVVUZCVUR0QlFVTkVMRWM3T3pSQ1FVVkVReXhuUWl3clFrRkJiVUk3UVVGRGFrSXNWMEZCVVN4TFFVRkxWaXhuUWtGQlRDeExRVUV3UWl4RFFVRnNRenRCUVVORUxFYzdPenM3TzBGQmJrUkhaaXhsTEVOQlEwY3dRaXhaTEVkQlFXVTdRVUZEY0VKRExGZEJRVk03UVVGRVZ5eERPenRyUWtGeFJGUXNWVUZCUTNwQ0xFOUJRVVFzUlVGQlZVUXNTMEZCVml4RlFVRnZRanRCUVVOcVF5eFRRVUZQTEVsQlFVbEVMR1ZCUVVvN1FVRkRURVU3UVVGRVN5eExRVVZHUkN4TFFVWkZMRVZCUVZBN1FVRkpSQ3hESWl3aVptbHNaU0k2SW1OdmJYQnZjMmwwWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1YVcxd2IzSjBJSHNnYjI1R2NtRnRaVlZ3WkdGMFpTQjlJR1p5YjIwZ0oyWnlZVzFsYzNsdVl5YzdYRzVjYm1Oc1lYTnpJRU52YlhCdmMybDBaVUZqZEdsdmJpQmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJSE4wWVhScFl5QmtaV1poZFd4MFVISnZjSE1nUFNCN1hHNGdJQ0FnY0dGemMybDJaVG9nZEhKMVpWeHVJQ0I5TzF4dVhHNGdJR052Ym5OMGNuVmpkRzl5S0hCeWIzQnpLU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmhZM1JwYjI1ekxDQXVMaTV5WlcxaGFXNXBibWRRY205d2N5QjlJRDBnY0hKdmNITTdYRzRnSUNBZ2MzVndaWElvY21WdFlXbHVhVzVuVUhKdmNITXBPMXh1SUNBZ0lIUm9hWE11WTNWeWNtVnVkQ0E5SUh0OU8xeHVJQ0FnSUhSb2FYTXVZV04wYVc5dVMyVjVjeUE5SUZ0ZE8xeHVJQ0FnSUhSb2FYTXVZV1JrUVdOMGFXOXVjeWhoWTNScGIyNXpLVHRjYmlBZ2ZWeHVYRzRnSUdGa1pFRmpkR2x2Ym5Nb1lXTjBhVzl1Y3lrZ2UxeHVJQ0FnSUdadmNpQW9ZMjl1YzNRZ2EyVjVJR2x1SUdGamRHbHZibk1wSUh0Y2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG1GamRHbHZia3RsZVhNdWFXNWtaWGhQWmloclpYa3BJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtRmpkR2x2Ymt0bGVYTXVjSFZ6YUNoclpYa3BPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0IwYUdselcydGxlVjBnUFNCaFkzUnBiMjV6VzJ0bGVWMDdYRzVjYmlBZ0lDQWdJR052Ym5OMElHOXVWWEJrWVhSbElEMGdLSFlwSUQwK0lIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1amRYSnlaVzUwVzJ0bGVWMGdQU0IyTzF4dUlDQWdJQ0FnSUNCdmJrWnlZVzFsVlhCa1lYUmxLSFJvYVhNdWMyTm9aV1IxYkdWa1ZYQmtZWFJsS1R0Y2JpQWdJQ0FnSUgwN1hHNWNiaUFnSUNBZ0lIUm9hWE5iYTJWNVhWeHVJQ0FnSUNBZ0lDQXVjMlYwVUhKdmNITW9lMXh1SUNBZ0lDQWdJQ0FnSUY5dmJsTjBiM0E2SUNncElEMCtJSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3kwdFhHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQWdJQzVoWkdSTWFYTjBaVzVsY2lodmJsVndaR0YwWlNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTWdQU0IwYUdsekxtRmpkR2x2Ymt0bGVYTXViR1Z1WjNSb08xeHVJQ0FnSUhSb2FYTXVZV04wYVc5dVMyVjVjeTVtYjNKRllXTm9LQ2hyWlhrcElEMCtJSFJvYVhOYmEyVjVYUzV6ZEdGeWRDZ3BLVHRjYmlBZ2ZWeHVYRzRnSUc5dVUzUnZjQ2dwSUh0Y2JpQWdJQ0IwYUdsekxtRmpkR2x2Ymt0bGVYTXVabTl5UldGamFDZ29hMlY1S1NBOVBpQjBhR2x6VzJ0bGVWMHVjM1J2Y0NncEtUdGNiaUFnZlZ4dVhHNGdJR2RsZEZabGJHOWphWFI1S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSFpsYkc5amFYUjVJRDBnZTMwN1hHNGdJQ0FnZEdocGN5NWhZM1JwYjI1TFpYbHpMbVp2Y2tWaFkyZ29LR3RsZVNrZ1BUNGdkbVZzYjJOcGRIbGJhMlY1WFNBOUlIUm9hWE5iYTJWNVhTNW5aWFJXWld4dlkybDBlU2dwS1R0Y2JpQWdJQ0J5WlhSMWNtNGdkbVZzYjJOcGRIazdYRzRnSUgxY2JseHVJQ0JwYzBGamRHbHZia052YlhCc1pYUmxLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQW9kR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6SUQwOVBTQXdLVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWVdOMGFXOXVjeXdnY0hKdmNITXBJRDArSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJEYjIxd2IzTnBkR1ZCWTNScGIyNG9lMXh1SUNBZ0lHRmpkR2x2Ym5Nc1hHNGdJQ0FnTGk0dWNISnZjSE5jYmlBZ2ZTazdYRzU5TzF4dUlsMTlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCdmcmFtZXN5bmMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQYXJhbGxlbCA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQYXJhbGxlbCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGFyYWxsZWwocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFyYWxsZWwpO1xuXG4gICAgdmFyIGFjdGlvbnMgPSBwcm9wcy5hY3Rpb25zLFxuICAgICAgICByZW1haW5pbmdQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWydhY3Rpb25zJ10pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHJlbWFpbmluZ1Byb3BzKSk7XG5cbiAgICBfdGhpcy5hY3Rpb25zID0gW107XG4gICAgX3RoaXMuY3VycmVudCA9IFtdO1xuICAgIF90aGlzLmFkZEFjdGlvbnMoYWN0aW9ucyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLmFkZEFjdGlvbiA9IGZ1bmN0aW9uIGFkZEFjdGlvbihhY3Rpb24pIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICh0aGlzLmFjdGlvbnMuaW5kZXhPZihhY3Rpb24pICE9PSAtMSkgcmV0dXJuO1xuXG4gICAgdGhpcy5hY3Rpb25zLnB1c2goYWN0aW9uKTtcblxuICAgIHZhciBpID0gdGhpcy5hY3Rpb25zLmxlbmd0aCAtIDE7XG4gICAgdmFyIG9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUodikge1xuICAgICAgX3RoaXMyLmN1cnJlbnRbaV0gPSB2O1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkoX3RoaXMyLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfTtcblxuICAgIG9uVXBkYXRlKGFjdGlvbi5nZXQoKSk7XG5cbiAgICBhY3Rpb24uc2V0UHJvcHMoe1xuICAgICAgX29uU3RvcDogZnVuY3Rpb24gX29uU3RvcCgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICB9XG4gICAgfSkuYWRkTGlzdGVuZXIob25VcGRhdGUpO1xuICB9O1xuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5hZGRBY3Rpb25zID0gZnVuY3Rpb24gYWRkQWN0aW9ucyhhY3Rpb25zKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgcmV0dXJuIF90aGlzMy5hZGRBY3Rpb24oYWN0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gdGhpcy5hY3Rpb25zLmxlbmd0aDtcbiAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLnN0b3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLmdldFZlbG9jaXR5KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDA7XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLmdldENoaWxkcmVuID0gZnVuY3Rpb24gZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9ucztcbiAgfTtcblxuICByZXR1cm4gUGFyYWxsZWw7XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBQYXJhbGxlbChfZXh0ZW5kcyh7IGFjdGlvbnM6IGFjdGlvbnMgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNCaGNtRnNiR1ZzTG1weklsMHNJbTVoYldWeklqcGJJbEJoY21Gc2JHVnNJaXdpY0hKdmNITWlMQ0poWTNScGIyNXpJaXdpY21WdFlXbHVhVzVuVUhKdmNITWlMQ0pqZFhKeVpXNTBJaXdpWVdSa1FXTjBhVzl1Y3lJc0ltRmtaRUZqZEdsdmJpSXNJbUZqZEdsdmJpSXNJbWx1WkdWNFQyWWlMQ0p3ZFhOb0lpd2lhU0lzSW14bGJtZDBhQ0lzSW05dVZYQmtZWFJsSWl3aWRpSXNJbk5qYUdWa2RXeGxaRlZ3WkdGMFpTSXNJbWRsZENJc0luTmxkRkJ5YjNCeklpd2lYMjl1VTNSdmNDSXNJbTUxYlVGamRHbDJaVUZqZEdsdmJuTWlMQ0poWkdSTWFYTjBaVzVsY2lJc0ltWnZja1ZoWTJnaUxDSnZibE4wWVhKMElpd2ljM1JoY25RaUxDSnZibE4wYjNBaUxDSnpkRzl3SWl3aVoyVjBWbVZzYjJOcGRIa2lMQ0p0WVhBaUxDSnBjMEZqZEdsdmJrTnZiWEJzWlhSbElpd2laMlYwUTJocGJHUnlaVzRpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3T3pzN096czdPenRKUVVWTlFTeFJPenM3UVVGRFNpeHZRa0ZCV1VNc1MwRkJXaXhGUVVGdFFqdEJRVUZCT3p0QlFVRkJMRkZCUTFSRExFOUJSRk1zUjBGRGMwSkVMRXRCUkhSQ0xFTkJRMVJETEU5QlJGTTdRVUZCUVN4UlFVTkhReXhqUVVSSUxEUkNRVU56UWtZc1MwRkVkRUk3TzBGQlFVRXNhVVJCUldwQ0xHMUNRVUZOUlN4alFVRk9MRU5CUm1sQ096dEJRVWRxUWl4VlFVRkxSQ3hQUVVGTUxFZEJRV1VzUlVGQlpqdEJRVU5CTEZWQlFVdEZMRTlCUVV3c1IwRkJaU3hGUVVGbU8wRkJRMEVzVlVGQlMwTXNWVUZCVEN4RFFVRm5Ra2dzVDBGQmFFSTdRVUZNYVVJN1FVRk5iRUk3TzNGQ1FVVkVTU3hUTEhOQ1FVRlZReXhOTEVWQlFWRTdRVUZCUVRzN1FVRkRhRUlzVVVGQlNTeExRVUZMVEN4UFFVRk1MRU5CUVdGTkxFOUJRV0lzUTBGQmNVSkVMRTFCUVhKQ0xFMUJRV2xETEVOQlFVTXNRMEZCZEVNc1JVRkJlVU03TzBGQlJYcERMRk5CUVV0TUxFOUJRVXdzUTBGQllVOHNTVUZCWWl4RFFVRnJRa1lzVFVGQmJFSTdPMEZCUlVFc1VVRkJUVWNzU1VGQlNTeExRVUZMVWl4UFFVRk1MRU5CUVdGVExFMUJRV0lzUjBGQmMwSXNRMEZCYUVNN1FVRkRRU3hSUVVGTlF5eFhRVUZYTEZOQlFWaEJMRkZCUVZjc1EwRkJRME1zUTBGQlJDeEZRVUZQTzBGQlEzUkNMR0ZCUVV0VUxFOUJRVXdzUTBGQllVMHNRMEZCWWl4SlFVRnJRa2NzUTBGQmJFSTdRVUZEUVN4dlEwRkJZeXhQUVVGTFF5eGxRVUZ1UWp0QlFVTkVMRXRCU0VRN08wRkJTMEZHTEdGQlFWTk1MRTlCUVU5UkxFZEJRVkFzUlVGQlZEczdRVUZGUVZJc1YwRkRSMU1zVVVGRVNDeERRVU5aTzBGQlExSkRMR1ZCUVZNN1FVRkJRU3hsUVVGTkxFOUJRVXRETEdkQ1FVRk1MRVZCUVU0N1FVRkJRVHRCUVVSRUxFdEJSRm9zUlVGSlIwTXNWMEZLU0N4RFFVbGxVQ3hSUVVwbU8wRkJTMFFzUnpzN2NVSkJSVVJRTEZVc2RVSkJRVmRJTEU4c1JVRkJVenRCUVVGQk96dEJRVU5zUWtFc1dVRkJVV3RDTEU5QlFWSXNRMEZCWjBJc1ZVRkJRMklzVFVGQlJEdEJRVUZCTEdGQlFWa3NUMEZCUzBRc1UwRkJUQ3hEUVVGbFF5eE5RVUZtTEVOQlFWbzdRVUZCUVN4TFFVRm9RanRCUVVORUxFYzdPM0ZDUVVWRVl5eFBMSE5DUVVGVk8wRkJRMUlzVTBGQlMwZ3NaMEpCUVV3c1IwRkJkMElzUzBGQlMyaENMRTlCUVV3c1EwRkJZVk1zVFVGQmNrTTdRVUZEUVN4VFFVRkxWQ3hQUVVGTUxFTkJRV0ZyUWl4UFFVRmlMRU5CUVhGQ0xGVkJRVU5pTEUxQlFVUTdRVUZCUVN4aFFVRlpRU3hQUVVGUFpTeExRVUZRTEVWQlFWbzdRVUZCUVN4TFFVRnlRanRCUVVORUxFYzdPM0ZDUVVWRVF5eE5MSEZDUVVGVE8wRkJRMUFzVTBGQlMzSkNMRTlCUVV3c1EwRkJZV3RDTEU5QlFXSXNRMEZCY1VJc1ZVRkJRMklzVFVGQlJEdEJRVUZCTEdGQlFWbEJMRTlCUVU5cFFpeEpRVUZRTEVWQlFWbzdRVUZCUVN4TFFVRnlRanRCUVVORUxFYzdPM0ZDUVVWRVF5eFhMREJDUVVGak8wRkJRMW9zVjBGQlR5eExRVUZMZGtJc1QwRkJUQ3hEUVVGaGQwSXNSMEZCWWl4RFFVRnBRaXhWUVVGRGJrSXNUVUZCUkR0QlFVRkJMR0ZCUVZsQkxFOUJRVTlyUWl4WFFVRlFMRVZCUVZvN1FVRkJRU3hMUVVGcVFpeERRVUZRTzBGQlEwUXNSenM3Y1VKQlJVUkZMR2RDTEN0Q1FVRnRRanRCUVVOcVFpeFhRVUZSTEV0QlFVdFVMR2RDUVVGTUxFdEJRVEJDTEVOQlFXeERPMEZCUTBRc1J6czdjVUpCUlVSVkxGY3NNRUpCUVdNN1FVRkRXaXhYUVVGUExFdEJRVXN4UWl4UFFVRmFPMEZCUTBRc1J6czdPenM3YTBKQlIxa3NWVUZCUTBFc1QwRkJSQ3hGUVVGVlJDeExRVUZXTzBGQlFVRXNVMEZCYjBJc1NVRkJTVVFzVVVGQlNpeFpRVUZsUlN4blFrRkJaaXhKUVVFeVFrUXNTMEZCTTBJc1JVRkJjRUk3UVVGQlFTeERJaXdpWm1sc1pTSTZJbkJoY21Gc2JHVnNMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNXBiWEJ2Y25RZ2V5QnZia1p5WVcxbFZYQmtZWFJsSUgwZ1puSnZiU0FuWm5KaGJXVnplVzVqSnp0Y2JseHVZMnhoYzNNZ1VHRnlZV3hzWld3Z1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1lXTjBhVzl1Y3l3Z0xpNHVjbVZ0WVdsdWFXNW5VSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0FnSUhOMWNHVnlLSEpsYldGcGJtbHVaMUJ5YjNCektUdGNiaUFnSUNCMGFHbHpMbUZqZEdsdmJuTWdQU0JiWFR0Y2JpQWdJQ0IwYUdsekxtTjFjbkpsYm5RZ1BTQmJYVHRjYmlBZ0lDQjBhR2x6TG1Ga1pFRmpkR2x2Ym5Nb1lXTjBhVzl1Y3lrN1hHNGdJSDFjYmx4dUlDQmhaR1JCWTNScGIyNG9ZV04wYVc5dUtTQjdYRzRnSUNBZ2FXWWdLSFJvYVhNdVlXTjBhVzl1Y3k1cGJtUmxlRTltS0dGamRHbHZiaWtnSVQwOUlDMHhLU0J5WlhSMWNtNDdYRzVjYmlBZ0lDQjBhR2x6TG1GamRHbHZibk11Y0hWemFDaGhZM1JwYjI0cE8xeHVYRzRnSUNBZ1kyOXVjM1FnYVNBOUlIUm9hWE11WVdOMGFXOXVjeTVzWlc1bmRHZ2dMU0F4TzF4dUlDQWdJR052Ym5OMElHOXVWWEJrWVhSbElEMGdLSFlwSUQwK0lIdGNiaUFnSUNBZ0lIUm9hWE11WTNWeWNtVnVkRnRwWFNBOUlIWTdYRzRnSUNBZ0lDQnZia1p5WVcxbFZYQmtZWFJsS0hSb2FYTXVjMk5vWldSMWJHVmtWWEJrWVhSbEtUdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ2IyNVZjR1JoZEdVb1lXTjBhVzl1TG1kbGRDZ3BLVHRjYmx4dUlDQWdJR0ZqZEdsdmJseHVJQ0FnSUNBZ0xuTmxkRkJ5YjNCektIdGNiaUFnSUNBZ0lDQWdYMjl1VTNSdmNEb2dLQ2tnUFQ0Z2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpMUzFjYmlBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0F1WVdSa1RHbHpkR1Z1WlhJb2IyNVZjR1JoZEdVcE8xeHVJQ0I5WEc1Y2JpQWdZV1JrUVdOMGFXOXVjeWhoWTNScGIyNXpLU0I3WEc0Z0lDQWdZV04wYVc5dWN5NW1iM0pGWVdOb0tDaGhZM1JwYjI0cElEMCtJSFJvYVhNdVlXUmtRV04wYVc5dUtHRmpkR2x2YmlrcE8xeHVJQ0I5WEc1Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQjBhR2x6TG01MWJVRmpkR2wyWlVGamRHbHZibk1nUFNCMGFHbHpMbUZqZEdsdmJuTXViR1Z1WjNSb08xeHVJQ0FnSUhSb2FYTXVZV04wYVc5dWN5NW1iM0pGWVdOb0tDaGhZM1JwYjI0cElEMCtJR0ZqZEdsdmJpNXpkR0Z5ZENncEtUdGNiaUFnZlZ4dVhHNGdJRzl1VTNSdmNDZ3BJSHRjYmlBZ0lDQjBhR2x6TG1GamRHbHZibk11Wm05eVJXRmphQ2dvWVdOMGFXOXVLU0E5UGlCaFkzUnBiMjR1YzNSdmNDZ3BLVHRjYmlBZ2ZWeHVYRzRnSUdkbGRGWmxiRzlqYVhSNUtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbUZqZEdsdmJuTXViV0Z3S0NoaFkzUnBiMjRwSUQwK0lHRmpkR2x2Ymk1blpYUldaV3h2WTJsMGVTZ3BLVHRjYmlBZ2ZWeHVYRzRnSUdselFXTjBhVzl1UTI5dGNHeGxkR1VvS1NCN1hHNGdJQ0FnY21WMGRYSnVJQ2gwYUdsekxtNTFiVUZqZEdsMlpVRmpkR2x2Ym5NZ1BUMDlJREFwTzF4dUlDQjlYRzVjYmlBZ1oyVjBRMmhwYkdSeVpXNG9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WVdOMGFXOXVjenRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWVdOMGFXOXVjeXdnY0hKdmNITXBJRDArSUc1bGR5QlFZWEpoYkd4bGJDaDdJR0ZqZEdsdmJuTXNJQzR1TG5CeWIzQnpJSDBwTzF4dUlsMTlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL3BhcmFsbGVsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJ2ZyYW1lc3luYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBWYWx1ZSA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhWYWx1ZSwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVmFsdWUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZhbHVlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVmFsdWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgdGhpcy50b1VwZGF0ZSA9IHY7XG4gICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIHJldHVybiB2O1xuICB9O1xuXG4gIFZhbHVlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9VcGRhdGUgIT09IHVuZGVmaW5lZCA/IHRoaXMudG9VcGRhdGUgOiB0aGlzLmN1cnJlbnQ7XG4gIH07XG5cbiAgVmFsdWUucHJvdG90eXBlLnN0b3BSZWdpc3RlcmVkQWN0aW9uID0gZnVuY3Rpb24gc3RvcFJlZ2lzdGVyZWRBY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuYWN0aW9uICYmIHRoaXMuYWN0aW9uLmlzQWN0aXZlKCkpIHRoaXMuYWN0aW9uLnN0b3AoKTtcbiAgICB0aGlzLmFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfTtcblxuICBWYWx1ZS5wcm90b3R5cGUucmVnaXN0ZXJBY3Rpb24gPSBmdW5jdGlvbiByZWdpc3RlckFjdGlvbihhY3Rpb24pIHtcbiAgICB0aGlzLnN0b3BSZWdpc3RlcmVkQWN0aW9uKCk7XG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVmFsdWUucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB0aGlzLnN0b3BSZWdpc3RlcmVkQWN0aW9uKCk7XG4gIH07XG5cbiAgcmV0dXJuIFZhbHVlO1xufShfMi5kZWZhdWx0KTtcblxuVmFsdWUuZGVmYXVsdFByb3BzID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY3VycmVudCwgb25VcGRhdGUpIHtcbiAgcmV0dXJuIG5ldyBWYWx1ZSh7IGN1cnJlbnQ6IGN1cnJlbnQsIG9uVXBkYXRlOiBvblVwZGF0ZSB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNaaGJIVmxMbXB6SWwwc0ltNWhiV1Z6SWpwYklsWmhiSFZsSWl3aWMyVjBJaXdpZGlJc0luUnZWWEJrWVhSbElpd2ljMk5vWldSMWJHVmtWWEJrWVhSbElpd2lkWEJrWVhSbElpd2lkVzVrWldacGJtVmtJaXdpWTNWeWNtVnVkQ0lzSW5OMGIzQlNaV2RwYzNSbGNtVmtRV04wYVc5dUlpd2lZV04wYVc5dUlpd2lhWE5CWTNScGRtVWlMQ0p6ZEc5d0lpd2ljbVZuYVhOMFpYSkJZM1JwYjI0aUxDSnZibE4wYjNBaUxDSmtaV1poZFd4MFVISnZjSE1pTENKd1lYTnphWFpsSWl3aWIyNVZjR1JoZEdVaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3T3pzN096czdPMGxCUlUxQkxFczdPenM3T3pzN096dHJRa0ZMU2tNc1J5eG5Ra0ZCU1VNc1F5eEZRVUZITzBGQlEwd3NVMEZCUzBNc1VVRkJUQ3hIUVVGblFrUXNRMEZCYUVJN1FVRkRRU3hyUTBGQll5eExRVUZMUlN4bFFVRnVRanRCUVVOQkxGZEJRVTlHTEVOQlFWQTdRVUZEUkN4SE96dHJRa0ZGUkVjc1RTeHhRa0ZCVXp0QlFVTlFMRmRCUVZFc1MwRkJTMFlzVVVGQlRDeExRVUZyUWtjc1UwRkJia0lzUjBGQlowTXNTMEZCUzBnc1VVRkJja01zUjBGQlowUXNTMEZCUzBrc1QwRkJOVVE3UVVGRFJDeEhPenRyUWtGRlJFTXNiMElzYlVOQlFYVkNPMEZCUTNKQ0xGRkJRVWtzUzBGQlMwTXNUVUZCVEN4SlFVRmxMRXRCUVV0QkxFMUJRVXdzUTBGQldVTXNVVUZCV2l4RlFVRnVRaXhGUVVFeVF5eExRVUZMUkN4TlFVRk1MRU5CUVZsRkxFbEJRVm83UVVGRE0wTXNVMEZCUzBZc1RVRkJUQ3hIUVVGalNDeFRRVUZrTzBGQlEwUXNSenM3YTBKQlJVUk5MR01zTWtKQlFXVklMRTBzUlVGQlVUdEJRVU55UWl4VFFVRkxSQ3h2UWtGQlREdEJRVU5CTEZOQlFVdERMRTFCUVV3c1IwRkJZMEVzVFVGQlpEdEJRVU5CTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzJ0Q1FVVkVTU3hOTEhGQ1FVRlRPMEZCUTFBc1UwRkJTMHdzYjBKQlFVdzdRVUZEUkN4SE96czdPenRCUVRWQ1IxSXNTeXhEUVVOSFl5eFpMRWRCUVdVN1FVRkRjRUpETEZkQlFWTTdRVUZFVnl4RE96dHJRa0U0UWxRc1ZVRkJRMUlzVDBGQlJDeEZRVUZWVXl4UlFVRldPMEZCUVVFc1UwRkJkVUlzU1VGQlNXaENMRXRCUVVvc1EwRkJWU3hGUVVGRlR5eG5Ra0ZCUml4RlFVRlhVeXhyUWtGQldDeEZRVUZXTEVOQlFYWkNPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSjJZV3gxWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1YVcxd2IzSjBJSHNnYjI1R2NtRnRaVlZ3WkdGMFpTQjlJR1p5YjIwZ0oyWnlZVzFsYzNsdVl5YzdYRzVjYm1Oc1lYTnpJRlpoYkhWbElHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0J3WVhOemFYWmxPaUIwY25WbFhHNGdJSDA3WEc1Y2JpQWdjMlYwS0hZcElIdGNiaUFnSUNCMGFHbHpMblJ2VlhCa1lYUmxJRDBnZGp0Y2JpQWdJQ0J2YmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11YzJOb1pXUjFiR1ZrVlhCa1lYUmxLVHRjYmlBZ0lDQnlaWFIxY200Z2RqdGNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z0tIUm9hWE11ZEc5VmNHUmhkR1VnSVQwOUlIVnVaR1ZtYVc1bFpDa2dQeUIwYUdsekxuUnZWWEJrWVhSbElEb2dkR2hwY3k1amRYSnlaVzUwTzF4dUlDQjlYRzVjYmlBZ2MzUnZjRkpsWjJsemRHVnlaV1JCWTNScGIyNG9LU0I3WEc0Z0lDQWdhV1lnS0hSb2FYTXVZV04wYVc5dUlDWW1JSFJvYVhNdVlXTjBhVzl1TG1selFXTjBhWFpsS0NrcElIUm9hWE11WVdOMGFXOXVMbk4wYjNBb0tUdGNiaUFnSUNCMGFHbHpMbUZqZEdsdmJpQTlJSFZ1WkdWbWFXNWxaRHRjYmlBZ2ZWeHVYRzRnSUhKbFoybHpkR1Z5UVdOMGFXOXVLR0ZqZEdsdmJpa2dlMXh1SUNBZ0lIUm9hWE11YzNSdmNGSmxaMmx6ZEdWeVpXUkJZM1JwYjI0b0tUdGNiaUFnSUNCMGFHbHpMbUZqZEdsdmJpQTlJR0ZqZEdsdmJqdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJRzl1VTNSdmNDZ3BJSHRjYmlBZ0lDQjBhR2x6TG5OMGIzQlNaV2RwYzNSbGNtVmtRV04wYVc5dUtDazdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR04xY25KbGJuUXNJRzl1VlhCa1lYUmxLU0E5UGlCdVpYY2dWbUZzZFdVb2V5QmpkWEp5Wlc1MExDQnZibFZ3WkdGMFpTQjlLVHRjYmlKZGZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL3ZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29sb3IgPSBleHBvcnRzLmhzbGEgPSBleHBvcnRzLnJnYmEgPSBleHBvcnRzLmhleCA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIGhleCA9IGV4cG9ydHMuaGV4ID0gZnVuY3Rpb24gaGV4KHYpIHtcbiAgdmFyIHIgPSB2b2lkIDAsXG4gICAgICBnID0gdm9pZCAwLFxuICAgICAgYiA9IHZvaWQgMDtcblxuICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICBpZiAodi5sZW5ndGggPiA0KSB7XG4gICAgciA9IHYuc3Vic3RyKDEsIDIpO1xuICAgIGcgPSB2LnN1YnN0cigzLCAyKTtcbiAgICBiID0gdi5zdWJzdHIoNSwgMik7XG5cbiAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICB9IGVsc2Uge1xuICAgIHIgPSB2LnN1YnN0cigxLCAxKTtcbiAgICBnID0gdi5zdWJzdHIoMiwgMSk7XG4gICAgYiA9IHYuc3Vic3RyKDMsIDEpO1xuICAgIHIgKz0gcjtcbiAgICBnICs9IGc7XG4gICAgYiArPSBiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICBncmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgIGJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICBhbHBoYTogMVxuICB9O1xufTtcblxudmFyIHJnYmEgPSBleHBvcnRzLnJnYmEgPSAoMCwgX3V0aWxzLnNwbGl0Q29sb3JWYWx1ZXMpKFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAnYWxwaGEnXSk7XG5cbnZhciBoc2xhID0gZXhwb3J0cy5oc2xhID0gKDAsIF91dGlscy5zcGxpdENvbG9yVmFsdWVzKShbJ2h1ZScsICdzYXR1cmF0aW9uJywgJ2xpZ2h0bmVzcycsICdhbHBoYSddKTtcblxudmFyIGNvbG9yID0gZXhwb3J0cy5jb2xvciA9IGZ1bmN0aW9uIGNvbG9yKHYpIHtcbiAgaWYgKCgwLCBfdXRpbHMuaXNSZ2IpKHYpKSB7XG4gICAgcmV0dXJuIHJnYmEodik7XG4gIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc0hleCkodikpIHtcbiAgICByZXR1cm4gaGV4KHYpO1xuICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNIc2wpKHYpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cblxuICByZXR1cm4gdjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZjR0Z5YzJWeWN5NXFjeUpkTENKdVlXMWxjeUk2V3lKb1pYZ2lMQ0oySWl3aWNpSXNJbWNpTENKaUlpd2liR1Z1WjNSb0lpd2ljM1ZpYzNSeUlpd2ljbVZrSWl3aWNHRnljMlZKYm5RaUxDSm5jbVZsYmlJc0ltSnNkV1VpTENKaGJIQm9ZU0lzSW5KblltRWlMQ0pvYzJ4aElpd2lZMjlzYjNJaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN08wRkJRVUU3TzBGQlJVOHNTVUZCVFVFc2IwSkJRVTBzVTBGQlRrRXNSMEZCVFN4RFFVRkRReXhEUVVGRUxFVkJRVTg3UVVGRGVFSXNUVUZCU1VNc1ZVRkJTanRCUVVGQkxFMUJRVTlETEZWQlFWQTdRVUZCUVN4TlFVRlZReXhWUVVGV096dEJRVVZCTzBGQlEwRXNUVUZCU1Vnc1JVRkJSVWtzVFVGQlJpeEhRVUZYTEVOQlFXWXNSVUZCYTBJN1FVRkRhRUpJTEZGQlFVbEVMRVZCUVVWTExFMUJRVVlzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCV2l4RFFVRktPMEZCUTBGSUxGRkJRVWxHTEVWQlFVVkxMRTFCUVVZc1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQldpeERRVUZLTzBGQlEwRkdMRkZCUVVsSUxFVkJRVVZMTEUxQlFVWXNRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhEUVVGS096dEJRVVZHTzBGQlEwTXNSMEZPUkN4TlFVMVBPMEZCUTB4S0xGRkJRVWxFTEVWQlFVVkxMRTFCUVVZc1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQldpeERRVUZLTzBGQlEwRklMRkZCUVVsR0xFVkJRVVZMTEUxQlFVWXNRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhEUVVGS08wRkJRMEZHTEZGQlFVbElMRVZCUVVWTExFMUJRVVlzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCV2l4RFFVRktPMEZCUTBGS0xGTkJRVXRCTEVOQlFVdzdRVUZEUVVNc1UwRkJTMEVzUTBGQlREdEJRVU5CUXl4VFFVRkxRU3hEUVVGTU8wRkJRMFE3TzBGQlJVUXNVMEZCVHp0QlFVTk1SeXhUUVVGTFF5eFRRVUZUVGl4RFFVRlVMRVZCUVZrc1JVRkJXaXhEUVVSQk8wRkJSVXhQTEZkQlFVOUVMRk5CUVZOTUxFTkJRVlFzUlVGQldTeEZRVUZhTEVOQlJrWTdRVUZIVEU4c1ZVRkJUVVlzVTBGQlUwb3NRMEZCVkN4RlFVRlpMRVZCUVZvc1EwRklSRHRCUVVsTVR5eFhRVUZQTzBGQlNrWXNSMEZCVUR0QlFVMUVMRU5CZWtKTk96dEJRVEpDUVN4SlFVRk5ReXh6UWtGQlR5dzJRa0ZCYVVJc1EwRkJReXhMUVVGRUxFVkJRVkVzVDBGQlVpeEZRVUZwUWl4TlFVRnFRaXhGUVVGNVFpeFBRVUY2UWl4RFFVRnFRaXhEUVVGaU96dEJRVVZCTEVsQlFVMURMSE5DUVVGUExEWkNRVUZwUWl4RFFVRkRMRXRCUVVRc1JVRkJVU3haUVVGU0xFVkJRWE5DTEZkQlFYUkNMRVZCUVcxRExFOUJRVzVETEVOQlFXcENMRU5CUVdJN08wRkJSVUVzU1VGQlRVTXNkMEpCUVZFc1UwRkJVa0VzUzBGQlVTeERRVUZEWWl4RFFVRkVMRVZCUVU4N1FVRkRNVUlzVFVGQlNTeHJRa0ZCVFVFc1EwRkJUaXhEUVVGS0xFVkJRV003UVVGRFdpeFhRVUZQVnl4TFFVRkxXQ3hEUVVGTUxFTkJRVkE3UVVGRFJDeEhRVVpFTEUxQlJVOHNTVUZCU1N4clFrRkJUVUVzUTBGQlRpeERRVUZLTEVWQlFXTTdRVUZEYmtJc1YwRkJUMFFzU1VGQlNVTXNRMEZCU2l4RFFVRlFPMEZCUTBRc1IwRkdUU3hOUVVWQkxFbEJRVWtzYTBKQlFVMUJMRU5CUVU0c1EwRkJTaXhGUVVGak8wRkJRMjVDTEZkQlFVOVpMRXRCUVV0YUxFTkJRVXdzUTBGQlVEdEJRVU5FT3p0QlFVVkVMRk5CUVU5QkxFTkJRVkE3UVVGRFJDeERRVlpOSWl3aVptbHNaU0k2SW5CaGNuTmxjbk11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJ6Y0d4cGRFTnZiRzl5Vm1Gc2RXVnpMQ0JwYzFKbllpd2dhWE5JWlhnc0lHbHpTSE5zSUgwZ1puSnZiU0FuTGk5MWRHbHNjeWM3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JvWlhnZ1BTQW9kaWtnUFQ0Z2UxeHVJQ0JzWlhRZ2Npd2daeXdnWWp0Y2JseHVJQ0F2THlCSlppQjNaU0JvWVhabElEWWdZMmhoY21GamRHVnljeXdnYVdVZ0kwWkdNREF3TUZ4dUlDQnBaaUFvZGk1c1pXNW5kR2dnUGlBMEtTQjdYRzRnSUNBZ2NpQTlJSFl1YzNWaWMzUnlLREVzSURJcE8xeHVJQ0FnSUdjZ1BTQjJMbk4xWW5OMGNpZ3pMQ0F5S1R0Y2JpQWdJQ0JpSUQwZ2RpNXpkV0p6ZEhJb05Td2dNaWs3WEc1Y2JpQWdMeThnVDNJZ2QyVWdhR0YyWlNBeklHTm9ZWEpoWTNSbGNuTXNJR2xsSUNOR01EQmNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnlJRDBnZGk1emRXSnpkSElvTVN3Z01TazdYRzRnSUNBZ1p5QTlJSFl1YzNWaWMzUnlLRElzSURFcE8xeHVJQ0FnSUdJZ1BTQjJMbk4xWW5OMGNpZ3pMQ0F4S1R0Y2JpQWdJQ0J5SUNzOUlISTdYRzRnSUNBZ1p5QXJQU0JuTzF4dUlDQWdJR0lnS3owZ1lqdGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2NtVmtPaUJ3WVhKelpVbHVkQ2h5TENBeE5pa3NYRzRnSUNBZ1ozSmxaVzQ2SUhCaGNuTmxTVzUwS0djc0lERTJLU3hjYmlBZ0lDQmliSFZsT2lCd1lYSnpaVWx1ZENoaUxDQXhOaWtzWEc0Z0lDQWdZV3h3YUdFNklERmNiaUFnZlR0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnlaMkpoSUQwZ2MzQnNhWFJEYjJ4dmNsWmhiSFZsY3loYkozSmxaQ2NzSUNkbmNtVmxiaWNzSUNkaWJIVmxKeXdnSjJGc2NHaGhKMTBwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUhOc1lTQTlJSE53YkdsMFEyOXNiM0pXWVd4MVpYTW9XeWRvZFdVbkxDQW5jMkYwZFhKaGRHbHZiaWNzSUNkc2FXZG9kRzVsYzNNbkxDQW5ZV3h3YUdFblhTazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpiMnh2Y2lBOUlDaDJLU0E5UGlCN1hHNGdJR2xtSUNocGMxSm5ZaWgyS1NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ5WjJKaEtIWXBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tHbHpTR1Y0S0hZcEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdobGVDaDJLVHRjYmlBZ2ZTQmxiSE5sSUdsbUlDaHBjMGh6YkNoMktTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCb2MyeGhLSFlwTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhZN1hHNTlPMXh1SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luYy9wYXJzZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDaGFpbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDaGFpbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ2hhaW4oKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaGFpbik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbC5hcHBseShfQWN0aW9uLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMucGxheU5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBpID0gX3RoaXMkcHJvcHMuaSxcbiAgICAgICAgICBvcmRlciA9IF90aGlzJHByb3BzLm9yZGVyO1xuXG4gICAgICBpZiAoaSA8IG9yZGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgX3RoaXMucHJvcHMuaSsrO1xuICAgICAgICBfdGhpcy5wbGF5Q3VycmVudCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIENoYWluLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB0aGlzLnByb3BzLmkgPSAwO1xuICAgIHRoaXMucGxheUN1cnJlbnQoKTtcbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUucGxheUN1cnJlbnQgPSBmdW5jdGlvbiBwbGF5Q3VycmVudCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaSA9IF9wcm9wcy5pLFxuICAgICAgICBvcmRlciA9IF9wcm9wcy5vcmRlcjtcblxuICAgIG9yZGVyW2ldLnByb3BzLl9vbkNvbXBsZXRlID0gdGhpcy5wbGF5TmV4dDtcbiAgICBvcmRlcltpXS5zdGFydCgpO1xuICB9O1xuXG4gIENoYWluLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBpID0gX3Byb3BzMi5pLFxuICAgICAgICBvcmRlciA9IF9wcm9wczIub3JkZXI7XG5cbiAgICBvcmRlcltpXS5zdG9wKCk7XG4gIH07XG5cbiAgcmV0dXJuIENoYWluO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9yZGVyLCBvbkNvbXBsZXRlKSB7XG4gIHJldHVybiBuZXcgQ2hhaW4oeyBvcmRlcjogb3JkZXIsIG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTm9ZV2x1TG1weklsMHNJbTVoYldWeklqcGJJa05vWVdsdUlpd2ljR3hoZVU1bGVIUWlMQ0p3Y205d2N5SXNJbWtpTENKdmNtUmxjaUlzSW14bGJtZDBhQ0lzSW5Cc1lYbERkWEp5Wlc1MElpd2lZMjl0Y0d4bGRHVWlMQ0p2YmxOMFlYSjBJaXdpWDI5dVEyOXRjR3hsZEdVaUxDSnpkR0Z5ZENJc0ltOXVVM1J2Y0NJc0luTjBiM0FpTENKdmJrTnZiWEJzWlhSbElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN096czdPenM3T3p0SlFVVk5RU3hMT3pzN096czdPenM3T3pzN2MwbEJUVXBETEZFc1IwRkJWeXhaUVVGTk8wRkJRVUVzZDBKQlEwMHNUVUZCUzBNc1MwRkVXRHRCUVVGQkxGVkJRMUJETEVOQlJFOHNaVUZEVUVFc1EwRkVUenRCUVVGQkxGVkJRMHBETEV0QlJFa3NaVUZEU2tFc1MwRkVTVHM3UVVGRlppeFZRVUZKUkN4SlFVRkpReXhOUVVGTlF5eE5RVUZPTEVkQlFXVXNRMEZCZGtJc1JVRkJNRUk3UVVGRGVFSXNZMEZCUzBnc1MwRkJUQ3hEUVVGWFF5eERRVUZZTzBGQlEwRXNZMEZCUzBjc1YwRkJURHRCUVVORUxFOUJTRVFzVFVGSFR6dEJRVU5NTEdOQlFVdERMRkZCUVV3N1FVRkRSRHRCUVVOR0xFczdPenRyUWtGaVJFTXNUeXh6UWtGQlZUdEJRVU5TTEZOQlFVdE9MRXRCUVV3c1EwRkJWME1zUTBGQldDeEhRVUZsTEVOQlFXWTdRVUZEUVN4VFFVRkxSeXhYUVVGTU8wRkJRMFFzUnpzN2EwSkJXVVJCTEZjc01FSkJRV003UVVGQlFTeHBRa0ZEVXl4TFFVRkxTaXhMUVVSa08wRkJRVUVzVVVGRFNrTXNRMEZFU1N4VlFVTktRU3hEUVVSSk8wRkJRVUVzVVVGRFJFTXNTMEZFUXl4VlFVTkVRU3hMUVVSRE96dEJRVVZhUVN4VlFVRk5SQ3hEUVVGT0xFVkJRVk5FTEV0QlFWUXNRMEZCWlU4c1YwRkJaaXhIUVVFMlFpeExRVUZMVWl4UlFVRnNRenRCUVVOQlJ5eFZRVUZOUkN4RFFVRk9MRVZCUVZOUExFdEJRVlE3UVVGRFJDeEhPenRyUWtGRlJFTXNUU3h4UWtGQlV6dEJRVUZCTEd0Q1FVTmpMRXRCUVV0VUxFdEJSRzVDTzBGQlFVRXNVVUZEUTBNc1EwRkVSQ3hYUVVORFFTeERRVVJFTzBGQlFVRXNVVUZEU1VNc1MwRkVTaXhYUVVOSlFTeExRVVJLT3p0QlFVVlFRU3hWUVVGTlJDeERRVUZPTEVWQlFWTlRMRWxCUVZRN1FVRkRSQ3hIT3pzN096dHJRa0ZIV1N4VlFVRkRVaXhMUVVGRUxFVkJRVkZUTEZWQlFWSTdRVUZCUVN4VFFVRjFRaXhKUVVGSllpeExRVUZLTEVOQlFWVXNSVUZCUlVrc1dVRkJSaXhGUVVGVFV5eHpRa0ZCVkN4RlFVRldMRU5CUVhaQ08wRkJRVUVzUXlJc0ltWnBiR1VpT2lKamFHRnBiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk4bk8xeHVYRzVqYkdGemN5QkRhR0ZwYmlCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lHOXVVM1JoY25Rb0tTQjdYRzRnSUNBZ2RHaHBjeTV3Y205d2N5NXBJRDBnTUR0Y2JpQWdJQ0IwYUdsekxuQnNZWGxEZFhKeVpXNTBLQ2s3WEc0Z0lIMWNibHh1SUNCd2JHRjVUbVY0ZENBOUlDZ3BJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR2tzSUc5eVpHVnlJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdsbUlDaHBJRHdnYjNKa1pYSXViR1Z1WjNSb0lDMGdNU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXdjbTl3Y3k1cEt5czdYRzRnSUNBZ0lDQjBhR2x6TG5Cc1lYbERkWEp5Wlc1MEtDazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZMjl0Y0d4bGRHVW9LVHRjYmlBZ0lDQjlYRzRnSUgwN1hHNWNiaUFnY0d4aGVVTjFjbkpsYm5Rb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCcExDQnZjbVJsY2lCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQnZjbVJsY2x0cFhTNXdjbTl3Y3k1ZmIyNURiMjF3YkdWMFpTQTlJSFJvYVhNdWNHeGhlVTVsZUhRN1hHNGdJQ0FnYjNKa1pYSmJhVjB1YzNSaGNuUW9LVHRjYmlBZ2ZWeHVYRzRnSUc5dVUzUnZjQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR2tzSUc5eVpHVnlJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUc5eVpHVnlXMmxkTG5OMGIzQW9LVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvYjNKa1pYSXNJRzl1UTI5dGNHeGxkR1VwSUQwK0lHNWxkeUJEYUdGcGJpaDdJRzl5WkdWeUxDQnZia052YlhCc1pYUmxJSDBwTzF4dUlsMTlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL2NoYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90d2VlbiA9IHJlcXVpcmUoJy4vdHdlZW4nKTtcblxudmFyIF90d2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2Vlbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChkdXJhdGlvbiwgb25Db21wbGV0ZSkge1xuICByZXR1cm4gKDAsIF90d2VlbjIuZGVmYXVsdCkoeyBkdXJhdGlvbjogZHVyYXRpb24sIG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyUmxiR0Y1TG1weklsMHNJbTVoYldWeklqcGJJbVIxY21GMGFXOXVJaXdpYjI1RGIyMXdiR1YwWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3T3pzN2EwSkJSV1VzVlVGQlEwRXNVVUZCUkN4RlFVRlhReXhWUVVGWU8wRkJRVUVzVTBGQk1FSXNjVUpCUVUwc1JVRkJSVVFzYTBKQlFVWXNSVUZCV1VNc2MwSkJRVm9zUlVGQlRpeERRVUV4UWp0QlFVRkJMRU1pTENKbWFXeGxJam9pWkdWc1lYa3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RIZGxaVzRnWm5KdmJTQW5MaTkwZDJWbGJpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hrZFhKaGRHbHZiaXdnYjI1RGIyMXdiR1YwWlNrZ1BUNGdkSGRsWlc0b2V5QmtkWEpoZEdsdmJpd2diMjVEYjIxd2JHVjBaU0I5S1R0Y2JpSmRmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWN0aW9ucy9kZWxheS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL2luYy92YWx1ZS10eXBlcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIC8vIENvbG9yIHByb3BzXG4gIGNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYmFja2dyb3VuZENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgb3V0bGluZUNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgZmlsbDogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIHN0cm9rZTogX3ZhbHVlVHlwZXMuY29sb3IsXG5cbiAgLy8gQm9yZGVyIHByb3BzXG4gIGJvcmRlckNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyVG9wQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJSaWdodENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyQm90dG9tQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJMZWZ0Q29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJSYWRpdXM6IF92YWx1ZVR5cGVzLnB4LFxuXG4gIC8vIFBvc2l0aW9uaW5nXG4gIHdpZHRoOiBfdmFsdWVUeXBlcy5weCxcbiAgaGVpZ2h0OiBfdmFsdWVUeXBlcy5weCxcbiAgdG9wOiBfdmFsdWVUeXBlcy5weCxcbiAgbGVmdDogX3ZhbHVlVHlwZXMucHgsXG4gIGJvdHRvbTogX3ZhbHVlVHlwZXMucHgsXG4gIHJpZ2h0OiBfdmFsdWVUeXBlcy5weCxcblxuICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICByb3RhdGU6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVg6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVk6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVo6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHNjYWxlOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVYOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVZOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVaOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2tld1g6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHNrZXdZOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICBkaXN0YW5jZTogX3ZhbHVlVHlwZXMucHgsXG4gIHRyYW5zbGF0ZVg6IF92YWx1ZVR5cGVzLnB4LFxuICB0cmFuc2xhdGVZOiBfdmFsdWVUeXBlcy5weCxcbiAgdHJhbnNsYXRlWjogX3ZhbHVlVHlwZXMucHgsXG4gIHBlcnNwZWN0aXZlOiBfdmFsdWVUeXBlcy5weCxcbiAgb3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGFcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM1poYkhWbExYUjVjR1Z6TG1weklsMHNJbTVoYldWeklqcGJJbU52Ykc5eUlpd2lZbUZqYTJkeWIzVnVaRU52Ykc5eUlpd2liM1YwYkdsdVpVTnZiRzl5SWl3aVptbHNiQ0lzSW5OMGNtOXJaU0lzSW1KdmNtUmxja052Ykc5eUlpd2lZbTl5WkdWeVZHOXdRMjlzYjNJaUxDSmliM0prWlhKU2FXZG9kRU52Ykc5eUlpd2lZbTl5WkdWeVFtOTBkRzl0UTI5c2IzSWlMQ0ppYjNKa1pYSk1aV1owUTI5c2IzSWlMQ0ppYjNKa1pYSlNZV1JwZFhNaUxDSjNhV1IwYUNJc0ltaGxhV2RvZENJc0luUnZjQ0lzSW14bFpuUWlMQ0ppYjNSMGIyMGlMQ0p5YVdkb2RDSXNJbkp2ZEdGMFpTSXNJbkp2ZEdGMFpWZ2lMQ0p5YjNSaGRHVlpJaXdpY205MFlYUmxXaUlzSW5OallXeGxJaXdpYzJOaGJHVllJaXdpYzJOaGJHVlpJaXdpYzJOaGJHVmFJaXdpYzJ0bGQxZ2lMQ0p6YTJWM1dTSXNJbVJwYzNSaGJtTmxJaXdpZEhKaGJuTnNZWFJsV0NJc0luUnlZVzV6YkdGMFpWa2lMQ0owY21GdWMyeGhkR1ZhSWl3aWNHVnljM0JsWTNScGRtVWlMQ0p2Y0dGamFYUjVJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN08ydENRVU5sTzBGQlEySTdRVUZEUVVFc01FSkJSbUU3UVVGSFlrTXNiME5CU0dFN1FVRkpZa01zYVVOQlNtRTdRVUZMWWtNc2VVSkJUR0U3UVVGTllrTXNNa0pCVG1FN08wRkJVV0k3UVVGRFFVTXNaME5CVkdFN1FVRlZZa01zYlVOQlZtRTdRVUZYWWtNc2NVTkJXR0U3UVVGWllrTXNjME5CV21FN1FVRmhZa01zYjBOQlltRTdRVUZqWWtNc09FSkJaR0U3TzBGQlowSmlPMEZCUTBGRExIVkNRV3BDWVR0QlFXdENZa01zZDBKQmJFSmhPMEZCYlVKaVF5eHhRa0Z1UW1FN1FVRnZRbUpETEhOQ1FYQkNZVHRCUVhGQ1lrTXNkMEpCY2tKaE8wRkJjMEppUXl4MVFrRjBRbUU3TzBGQmQwSmlPMEZCUTBGRExEWkNRWHBDWVR0QlFUQkNZa01zT0VKQk1VSmhPMEZCTWtKaVF5dzRRa0V6UW1FN1FVRTBRbUpETERoQ1FUVkNZVHRCUVRaQ1lrTXNNRUpCTjBKaE8wRkJPRUppUXl3eVFrRTVRbUU3UVVFclFtSkRMREpDUVM5Q1lUdEJRV2REWWtNc01rSkJhRU5oTzBGQmFVTmlReXcwUWtGcVEyRTdRVUZyUTJKRExEUkNRV3hEWVR0QlFXMURZa01zTUVKQmJrTmhPMEZCYjBOaVF5dzBRa0Z3UTJFN1FVRnhRMkpETERSQ1FYSkRZVHRCUVhORFlrTXNORUpCZEVOaE8wRkJkVU5pUXl3MlFrRjJRMkU3UVVGM1EySkRPMEZCZUVOaExFTWlMQ0ptYVd4bElqb2lkbUZzZFdVdGRIbHdaWE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJoYkhCb1lTd2dZMjlzYjNJc0lHUmxaM0psWlhNc0lITmpZV3hsTENCd2VDQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTJZV3gxWlMxMGVYQmxjeWM3SUZ4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQXZMeUJEYjJ4dmNpQndjbTl3YzF4dUlDQmpiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHSmhZMnRuY205MWJtUkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHOTFkR3hwYm1WRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdacGJHdzZJR052Ykc5eUxGeHVJQ0J6ZEhKdmEyVTZJR052Ykc5eUxGeHVYRzRnSUM4dklFSnZjbVJsY2lCd2NtOXdjMXh1SUNCaWIzSmtaWEpEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0p2Y21SbGNsUnZjRU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdZbTl5WkdWeVVtbG5hSFJEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0p2Y21SbGNrSnZkSFJ2YlVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnWW05eVpHVnlUR1ZtZEVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnWW05eVpHVnlVbUZrYVhWek9pQndlQ3hjYmx4dUlDQXZMeUJRYjNOcGRHbHZibWx1WjF4dUlDQjNhV1IwYURvZ2NIZ3NYRzRnSUdobGFXZG9kRG9nY0hnc0lDQmNiaUFnZEc5d09pQndlQ3hjYmlBZ2JHVm1kRG9nY0hnc1hHNGdJR0p2ZEhSdmJUb2djSGdzWEc0Z0lISnBaMmgwT2lCd2VDeGNibHh1SUNBdkx5QlVjbUZ1YzJadmNtMGdjSEp2Y0dWeWRHbGxjMXh1SUNCeWIzUmhkR1U2SUdSbFozSmxaWE1zWEc0Z0lISnZkR0YwWlZnNklHUmxaM0psWlhNc1hHNGdJSEp2ZEdGMFpWazZJR1JsWjNKbFpYTXNYRzRnSUhKdmRHRjBaVm82SUdSbFozSmxaWE1zWEc0Z0lITmpZV3hsT2lCelkyRnNaU3hjYmlBZ2MyTmhiR1ZZT2lCelkyRnNaU3hjYmlBZ2MyTmhiR1ZaT2lCelkyRnNaU3hjYmlBZ2MyTmhiR1ZhT2lCelkyRnNaU3hjYmlBZ2MydGxkMWc2SUdSbFozSmxaWE1zWEc0Z0lITnJaWGRaT2lCa1pXZHlaV1Z6TEZ4dUlDQmthWE4wWVc1alpUb2djSGdzWEc0Z0lIUnlZVzV6YkdGMFpWZzZJSEI0TEZ4dUlDQjBjbUZ1YzJ4aGRHVlpPaUJ3ZUN4Y2JpQWdkSEpoYm5Oc1lYUmxXam9nY0hnc1hHNGdJSEJsY25Od1pXTjBhWFpsT2lCd2VDeGNiaUFnYjNCaFkybDBlVG9nWVd4d2FHRmNibjA3WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgY2FtZWxDYWNoZSA9IHt9O1xudmFyIGRhc2hDYWNoZSA9IHt9O1xudmFyIHByZWZpeGVzID0gWydXZWJraXQnLCAnTW96JywgJ08nLCAnbXMnLCAnJ107XG52YXIgbnVtUHJlZml4ZXMgPSBwcmVmaXhlcy5sZW5ndGg7XG52YXIgdGVzdEVsZW1lbnQgPSB2b2lkIDA7XG5cbi8qXG4gIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgXG4gIEBwYXJhbSBbc3RyaW5nXTogU3R5bGUgcHJvcGVydHlcbiAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG52YXIgdGVzdFByZWZpeCA9IGZ1bmN0aW9uIHRlc3RQcmVmaXgoa2V5KSB7XG4gIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIHZhciBub1ByZWZpeCA9IHByZWZpeCA9PT0gJyc7XG4gICAgdmFyIHByZWZpeGVkUHJvcGVydHlOYW1lID0gbm9QcmVmaXggPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICBpZiAocHJlZml4ZWRQcm9wZXJ0eU5hbWUgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgIGNhbWVsQ2FjaGVba2V5XSA9IHByZWZpeGVkUHJvcGVydHlOYW1lO1xuICAgICAgZGFzaENhY2hlW2tleV0gPSAnJyArIChub1ByZWZpeCA/ICcnIDogJy0nKSArICgwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKHByZWZpeGVkUHJvcGVydHlOYW1lKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChrZXksIGFzRGFzaENhc2UpIHtcbiAgdmFyIGNhY2hlID0gYXNEYXNoQ2FzZSA/IGRhc2hDYWNoZSA6IGNhbWVsQ2FjaGU7XG5cbiAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgdGVzdFByZWZpeChrZXkpO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNCeVpXWnBlR1Z5TG1weklsMHNJbTVoYldWeklqcGJJbU5oYldWc1EyRmphR1VpTENKa1lYTm9RMkZqYUdVaUxDSndjbVZtYVhobGN5SXNJbTUxYlZCeVpXWnBlR1Z6SWl3aWJHVnVaM1JvSWl3aWRHVnpkRVZzWlcxbGJuUWlMQ0owWlhOMFVISmxabWw0SWl3aWEyVjVJaXdpWkc5amRXMWxiblFpTENKamNtVmhkR1ZGYkdWdFpXNTBJaXdpYVNJc0luQnlaV1pwZUNJc0ltNXZVSEpsWm1sNElpd2ljSEpsWm1sNFpXUlFjbTl3WlhKMGVVNWhiV1VpTENKamFHRnlRWFFpTENKMGIxVndjR1Z5UTJGelpTSXNJbk5zYVdObElpd2ljM1I1YkdVaUxDSmhjMFJoYzJoRFlYTmxJaXdpWTJGamFHVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN1FVRkZRU3hKUVVGTlFTeGhRVUZoTEVWQlFXNUNPMEZCUTBFc1NVRkJUVU1zV1VGQldTeEZRVUZzUWp0QlFVTkJMRWxCUVUxRExGZEJRVmNzUTBGQlF5eFJRVUZFTEVWQlFWVXNTMEZCVml4RlFVRm5RaXhIUVVGb1FpeEZRVUZ2UWl4SlFVRndRaXhGUVVFd1FpeEZRVUV4UWl4RFFVRnFRanRCUVVOQkxFbEJRVTFETEdOQlFXTkVMRk5CUVZORkxFMUJRVGRDTzBGQlEwRXNTVUZCU1VNc2IwSkJRVW83TzBGQlJVRTdPenM3T3p0QlFVMUJMRWxCUVUxRExHRkJRV0VzVTBGQllrRXNWVUZCWVN4RFFVRkRReXhIUVVGRUxFVkJRVk03UVVGRE1VSkdMR2RDUVVGalFTeGxRVUZsUnl4VFFVRlRReXhoUVVGVUxFTkJRWFZDTEV0QlFYWkNMRU5CUVRkQ096dEJRVVZCTEU5QlFVc3NTVUZCU1VNc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpVQ3hYUVVGd1FpeEZRVUZwUTA4c1IwRkJha01zUlVGQmMwTTdRVUZEY0VNc1VVRkJUVU1zVTBGQlUxUXNVMEZCVTFFc1EwRkJWQ3hEUVVGbU8wRkJRMEVzVVVGQlRVVXNWMEZCV1VRc1YwRkJWeXhGUVVFM1FqdEJRVU5CTEZGQlFVMUZMSFZDUVVGMVFrUXNWMEZCVjB3c1IwRkJXQ3hIUVVGcFFra3NVMEZCVTBvc1NVRkJTVThzVFVGQlNpeERRVUZYTEVOQlFWZ3NSVUZCWTBNc1YwRkJaQ3hGUVVGVUxFZEJRWFZEVWl4SlFVRkpVeXhMUVVGS0xFTkJRVlVzUTBGQlZpeERRVUZ5UmpzN1FVRkZRU3hSUVVGSlNDeDNRa0ZCZDBKU0xGbEJRVmxaTEV0QlFYaERMRVZCUVN0RE8wRkJRemREYWtJc2FVSkJRVmRQTEVkQlFWZ3NTVUZCYTBKTkxHOUNRVUZzUWp0QlFVTkJXaXhuUWtGQlZVMHNSMEZCVml4VlFVRnhRa3NzVjBGQlZ5eEZRVUZZTEVkQlFXZENMRWRCUVhKRExFbEJRVFJETEhkQ1FVRlpReXh2UWtGQldpeERRVUUxUXp0QlFVTkVPMEZCUTBZN1FVRkRSaXhEUVdKRU96dHJRa0ZsWlN4VlFVRkRUaXhIUVVGRUxFVkJRVTFYTEZWQlFVNHNSVUZCY1VJN1FVRkRiRU1zVFVGQlRVTXNVVUZCVVVRc1lVRkJZV3BDTEZOQlFXSXNSMEZCZVVKRUxGVkJRWFpET3p0QlFVVkJMRTFCUVVrc1EwRkJRMjFDTEUxQlFVMWFMRWRCUVU0c1EwRkJUQ3hGUVVGcFFqdEJRVU5tUkN4bFFVRlhReXhIUVVGWU8wRkJRMFE3TzBGQlJVUXNVMEZCVDFrc1RVRkJUVm9zUjBGQlRpeERRVUZRTzBGQlEwUXNReUlzSW1acGJHVWlPaUp3Y21WbWFYaGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR05oYldWc1ZHOUVZWE5vSUgwZ1puSnZiU0FuTGk0dkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnWTJGdFpXeERZV05vWlNBOUlIdDlPMXh1WTI5dWMzUWdaR0Z6YUVOaFkyaGxJRDBnZTMwN1hHNWpiMjV6ZENCd2NtVm1hWGhsY3lBOUlGc25WMlZpYTJsMEp5d25UVzk2Snl3blR5Y3NKMjF6Snl3Z0p5ZGRPMXh1WTI5dWMzUWdiblZ0VUhKbFptbDRaWE1nUFNCd2NtVm1hWGhsY3k1c1pXNW5kR2c3WEc1c1pYUWdkR1Z6ZEVWc1pXMWxiblE3WEc1Y2JpOHFYRzRnSUZSbGMzUWdjM1I1YkdVZ2NISnZjR1Z5ZEhrZ1ptOXlJSEJ5WldacGVHVmtJSFpsY25OcGIyNWNiaUFnWEc0Z0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1UzUjViR1VnY0hKdmNHVnlkSGxjYmlBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFRvZ1EyRmphR1ZrSUhCeWIzQmxjblI1SUc1aGJXVmNiaW92WEc1amIyNXpkQ0IwWlhOMFVISmxabWw0SUQwZ0tHdGxlU2tnUFQ0Z2UxeHVJQ0IwWlhOMFJXeGxiV1Z1ZENBOUlIUmxjM1JGYkdWdFpXNTBJSHg4SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KMlJwZGljcE8xeHVYRzRnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JuVnRVSEpsWm1sNFpYTTdJR2tyS3lrZ2UxeHVJQ0FnSUdOdmJuTjBJSEJ5WldacGVDQTlJSEJ5WldacGVHVnpXMmxkTzF4dUlDQWdJR052Ym5OMElHNXZVSEpsWm1sNElEMGdLSEJ5WldacGVDQTlQVDBnSnljcE8xeHVJQ0FnSUdOdmJuTjBJSEJ5WldacGVHVmtVSEp2Y0dWeWRIbE9ZVzFsSUQwZ2JtOVFjbVZtYVhnZ1B5QnJaWGtnT2lCd2NtVm1hWGdnS3lCclpYa3VZMmhoY2tGMEtEQXBMblJ2VlhCd1pYSkRZWE5sS0NrZ0t5QnJaWGt1YzJ4cFkyVW9NU2s3WEc1Y2JpQWdJQ0JwWmlBb2NISmxabWw0WldSUWNtOXdaWEowZVU1aGJXVWdhVzRnZEdWemRFVnNaVzFsYm5RdWMzUjViR1VwSUh0Y2JpQWdJQ0FnSUdOaGJXVnNRMkZqYUdWYmEyVjVYU0E5SUhCeVpXWnBlR1ZrVUhKdmNHVnlkSGxPWVcxbE8xeHVJQ0FnSUNBZ1pHRnphRU5oWTJobFcydGxlVjBnUFNCZ0pIc29ibTlRY21WbWFYZ2dQeUFuSnlBNklDY3RKeWw5Skh0allXMWxiRlJ2UkdGemFDaHdjbVZtYVhobFpGQnliM0JsY25SNVRtRnRaU2w5WUR0Y2JpQWdJQ0I5WEc0Z0lIMWNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoclpYa3NJR0Z6UkdGemFFTmhjMlVwSUQwK0lIdGNiaUFnWTI5dWMzUWdZMkZqYUdVZ1BTQmhjMFJoYzJoRFlYTmxJRDhnWkdGemFFTmhZMmhsSURvZ1kyRnRaV3hEWVdOb1pUdGNibHh1SUNCcFppQW9JV05oWTJobFcydGxlVjBwSUh0Y2JpQWdJQ0IwWlhOMFVISmxabWw0S0d0bGVTazdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdZMkZqYUdWYmEyVjVYVHRjYm4wN1hHNGlYWDA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVuZGVyZXJzL2Nzcy9wcmVmaXhlci5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBoYXNSQUYgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkgPyB0cnVlIDogZmFsc2U7XG52YXIgb25OZXh0RnJhbWU7XG5pZiAoaGFzUkFGKSB7XG4gICAgb25OZXh0RnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHsgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spOyB9O1xufVxuZWxzZSB7XG4gICAgdmFyIGxhc3RUaW1lXzEgPSAwO1xuICAgIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2LjcgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZV8xKSk7XG4gICAgICAgIGxhc3RUaW1lXzEgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gY2FsbGJhY2sobGFzdFRpbWVfMSk7IH0sIHRpbWVUb0NhbGwpO1xuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBvbk5leHRGcmFtZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9uLW5leHQtZnJhbWUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2xpYi9vbi1uZXh0LWZyYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApIHtcbiAgICB2YXIgZnVuY3Rpb25zVG9SdW4gPSBbXTtcbiAgICB2YXIgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUgPSBbXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzY2hlZHVsZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBzdGFydFJlbmRlckxvb3AoKTtcbiAgICAgICAgICAgIGlmIChmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBpbmRleE9mQ2FsbGJhY2sgPSBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmIChpbmRleE9mQ2FsbGJhY2sgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuc3BsaWNlKGluZGV4T2ZDYWxsYmFjaywgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF9hID0gW2Z1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLCBmdW5jdGlvbnNUb1J1bl0sIGZ1bmN0aW9uc1RvUnVuID0gX2FbMF0sIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gX2FbMV07XG4gICAgICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgdmFyIG51bVRoaXNGcmFtZSA9IGZ1bmN0aW9uc1RvUnVuLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGhpc0ZyYW1lOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnNUb1J1bltpXSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVJlbmRlclN0ZXA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGUtcmVuZGVyLXN0ZXAuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2xpYi9jcmVhdGUtcmVuZGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4uL2luYy92YWx1ZS10eXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBmcm9tID0gX3JlZi5mcm9tLFxuICAgICAgdG8gPSBfcmVmLnRvLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydmcm9tJywgJ3RvJ10pO1xuXG4gIHJldHVybiAoMCwgX3R3ZWVuMi5kZWZhdWx0KShfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBmcm9tOiAwLFxuICAgIHRvOiAxLFxuICAgIHRyYW5zZm9ybTogKDAsIF90cmFuc2Zvcm1lcnMucGlwZSkoKDAsIF90cmFuc2Zvcm1lcnMuYmxlbmRDb2xvcikoZnJvbSwgdG8pLCBfdmFsdWVUeXBlcy5jb2xvci50cmFuc2Zvcm0pXG4gIH0pKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOdmJHOXlMWFIzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiSW1aeWIyMGlMQ0owYnlJc0luQnliM0J6SWl3aWRISmhibk5tYjNKdElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZCUVRzN096dEJRVU5CT3p0QlFVTkJPenM3T3pzN2EwSkJSV1VzWjBKQlFUUkNPMEZCUVVFc1RVRkJla0pCTEVsQlFYbENMRkZCUVhwQ1FTeEpRVUY1UWp0QlFVRkJMRTFCUVc1Q1F5eEZRVUZ0UWl4UlFVRnVRa0VzUlVGQmJVSTdRVUZCUVN4TlFVRmFReXhMUVVGWk96dEJRVU42UXl4VFFVRlBMR3REUVVOR1FTeExRVVJGTzBGQlJVeEdMRlZCUVUwc1EwRkdSRHRCUVVkTVF5eFJRVUZKTEVOQlNFTTdRVUZKVEVVc1pVRkJWeXgzUWtGQlN5dzRRa0ZCVjBnc1NVRkJXQ3hGUVVGcFFrTXNSVUZCYWtJc1EwRkJUQ3hGUVVFeVFpeHJRa0ZCVFVVc1UwRkJha003UVVGS1RpeExRVUZRTzBGQlRVUXNReUlzSW1acGJHVWlPaUpqYjJ4dmNpMTBkMlZsYmk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IwZDJWbGJpQm1jbTl0SUNjdUwzUjNaV1Z1Snp0Y2JtbHRjRzl5ZENCN0lHSnNaVzVrUTI5c2IzSXNJSEJwY0dVZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZEhKaGJuTm1iM0p0WlhKekp6dGNibWx0Y0c5eWRDQjdJR052Ykc5eUlIMGdabkp2YlNBbkxpNHZhVzVqTDNaaGJIVmxMWFI1Y0dWekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSHNnWm5KdmJTd2dkRzhzSUM0dUxuQnliM0J6SUgwcElEMCtJSHRjYmlBZ2NtVjBkWEp1SUhSM1pXVnVLSHRjYmlBZ0lDQXVMaTV3Y205d2N5eGNiaUFnSUNCbWNtOXRPaUF3TEZ4dUlDQWdJSFJ2T2lBeExGeHVJQ0FnSUhSeVlXNXpabTl5YlRvZ2NHbHdaU2hpYkdWdVpFTnZiRzl5S0daeWIyMHNJSFJ2S1N3Z1kyOXNiM0l1ZEhKaGJuTm1iM0p0S1Z4dUlDQjlLVHRjYm4wN1hHNGlYWDA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWN0aW9ucy9jb2xvci10d2Vlbi5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF90d2VlbiA9IHJlcXVpcmUoJy4vdHdlZW4nKTtcblxudmFyIF90d2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2Vlbik7XG5cbnZhciBfZWFzaW5nID0gcmVxdWlyZSgnLi4vaW5jL2Vhc2luZycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDcm9zc0ZhZGUgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ3Jvc3NGYWRlLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBDcm9zc0ZhZGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENyb3NzRmFkZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENyb3NzRmFkZS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uLFxuICAgICAgICBlYXNlID0gX3Byb3BzLmVhc2UsXG4gICAgICAgIGZhZGVyID0gX3Byb3BzLmZhZGVyO1xuXG5cbiAgICB0aGlzLmZhZGVyID0gZmFkZXIgfHwgKDAsIF90d2VlbjIuZGVmYXVsdCkoe1xuICAgICAgdG86IDEsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBlYXNlOiBlYXNlXG4gICAgfSkuc3RhcnQoKTtcbiAgfTtcblxuICBDcm9zc0ZhZGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGZyb20gPSBfcHJvcHMyLmZyb20sXG4gICAgICAgIHRvID0gX3Byb3BzMi50bztcblxuICAgIHZhciBiYWxhbmNlID0gdGhpcy5mYWRlci5nZXQoKTtcbiAgICB2YXIgbGF0ZXN0RnJvbVZhbHVlID0gZnJvbS5nZXQoKTtcbiAgICB2YXIgbGF0ZXN0VG9WYWx1ZSA9IHRvLmdldCgpO1xuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGxhdGVzdEZyb21WYWx1ZSwgbGF0ZXN0VG9WYWx1ZSwgYmFsYW5jZSk7XG4gIH07XG5cbiAgcmV0dXJuIENyb3NzRmFkZTtcbn0oXzIuZGVmYXVsdCk7XG5cbkNyb3NzRmFkZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGVhc2U6IF9lYXNpbmcubGluZWFyXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDcm9zc0ZhZGUocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk55YjNOekxXWmhaR1V1YW5NaVhTd2libUZ0WlhNaU9sc2lRM0p2YzNOR1lXUmxJaXdpYjI1VGRHRnlkQ0lzSW5CeWIzQnpJaXdpWkhWeVlYUnBiMjRpTENKbFlYTmxJaXdpWm1Ga1pYSWlMQ0owYnlJc0luTjBZWEowSWl3aWRYQmtZWFJsSWl3aVpuSnZiU0lzSW1KaGJHRnVZMlVpTENKblpYUWlMQ0pzWVhSbGMzUkdjbTl0Vm1Gc2RXVWlMQ0pzWVhSbGMzUlViMVpoYkhWbElpd2laR1ZtWVhWc2RGQnliM0J6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVOQk96dEJRVU5CT3pzN096czdPenM3TzBsQlJVMUJMRk03T3pzN096czdPenR6UWtGTFNrTXNUeXh6UWtGQlZUdEJRVUZCTEdsQ1FVTXdRaXhMUVVGTFF5eExRVVF2UWp0QlFVRkJMRkZCUTBGRExGRkJSRUVzVlVGRFFVRXNVVUZFUVR0QlFVRkJMRkZCUTFWRExFbEJSRllzVlVGRFZVRXNTVUZFVmp0QlFVRkJMRkZCUTJkQ1F5eExRVVJvUWl4VlFVTm5Ra0VzUzBGRWFFSTdPenRCUVVkU0xGTkJRVXRCTEV0QlFVd3NSMEZCWVVFc1UwRkJVeXh4UWtGQlRUdEJRVU14UWtNc1ZVRkJTU3hEUVVSelFqdEJRVVV4UWtnc2QwSkJSakJDTzBGQlJ6RkNRenRCUVVnd1FpeExRVUZPTEVWQlNXNUNSeXhMUVVwdFFpeEZRVUYwUWp0QlFVdEVMRWM3TzNOQ1FVVkVReXhOTEhGQ1FVRlRPMEZCUVVFc2EwSkJRMk1zUzBGQlMwNHNTMEZFYmtJN1FVRkJRU3hSUVVORFR5eEpRVVJFTEZkQlEwTkJMRWxCUkVRN1FVRkJRU3hSUVVOUFNDeEZRVVJRTEZkQlEwOUJMRVZCUkZBN08wRkJSVkFzVVVGQlRVa3NWVUZCVlN4TFFVRkxUQ3hMUVVGTUxFTkJRVmROTEVkQlFWZ3NSVUZCYUVJN1FVRkRRU3hSUVVGTlF5eHJRa0ZCYTBKSUxFdEJRVXRGTEVkQlFVd3NSVUZCZUVJN1FVRkRRU3hSUVVGTlJTeG5Ra0ZCWjBKUUxFZEJRVWRMTEVkQlFVZ3NSVUZCZEVJN1FVRkRRU3hYUVVGUExHZERRVUZ4UWtNc1pVRkJja0lzUlVGQmMwTkRMR0ZCUVhSRExFVkJRWEZFU0N4UFFVRnlSQ3hEUVVGUU8wRkJRMFFzUnpzN096czdRVUZ5UWtkV0xGTXNRMEZEUjJNc1dTeEhRVUZsTzBGQlEzQkNWanRCUVVSdlFpeERPenRyUWtGMVFsUXNWVUZCUTBZc1MwRkJSRHRCUVVGQkxGTkJRVmNzU1VGQlNVWXNVMEZCU2l4RFFVRmpSU3hMUVVGa0xFTkJRVmc3UVVGQlFTeERJaXdpWm1sc1pTSTZJbU55YjNOekxXWmhaR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dkp6dGNibWx0Y0c5eWRDQjBkMlZsYmlCbWNtOXRJQ2N1TDNSM1pXVnVKenRjYm1sdGNHOXlkQ0I3SUd4cGJtVmhjaUI5SUdaeWIyMGdKeTR1TDJsdVl5OWxZWE5wYm1jbk8xeHVhVzF3YjNKMElIc2daMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01nZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNWNibU5zWVhOeklFTnliM056Um1Ga1pTQmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJSE4wWVhScFl5QmtaV1poZFd4MFVISnZjSE1nUFNCN1hHNGdJQ0FnWldGelpUb2diR2x1WldGeVhHNGdJSDFjYmx4dUlDQnZibE4wWVhKMEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1pIVnlZWFJwYjI0c0lHVmhjMlVzSUdaaFpHVnlJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2RHaHBjeTVtWVdSbGNpQTlJR1poWkdWeUlIeDhJSFIzWldWdUtIdGNiaUFnSUNBZ0lIUnZPaUF4TEZ4dUlDQWdJQ0FnWkhWeVlYUnBiMjRzWEc0Z0lDQWdJQ0JsWVhObFhHNGdJQ0FnZlNrdWMzUmhjblFvS1R0Y2JpQWdmVnh1WEc0Z0lIVndaR0YwWlNncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdaeWIyMHNJSFJ2SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHTnZibk4wSUdKaGJHRnVZMlVnUFNCMGFHbHpMbVpoWkdWeUxtZGxkQ2dwTzF4dUlDQWdJR052Ym5OMElHeGhkR1Z6ZEVaeWIyMVdZV3gxWlNBOUlHWnliMjB1WjJWMEtDazdYRzRnSUNBZ1kyOXVjM1FnYkdGMFpYTjBWRzlXWVd4MVpTQTlJSFJ2TG1kbGRDZ3BPMXh1SUNBZ0lISmxkSFZ5YmlCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aHNZWFJsYzNSR2NtOXRWbUZzZFdVc0lHeGhkR1Z6ZEZSdlZtRnNkV1VzSUdKaGJHRnVZMlVwTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNod2NtOXdjeWtnUFQ0Z2JtVjNJRU55YjNOelJtRmtaU2h3Y205d2N5azdYRzRpWFgwPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCdmcmFtZXN5bmMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGh5c2ljcyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQaHlzaWNzLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBQaHlzaWNzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaHlzaWNzKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUGh5c2ljcy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhdXRvU3RvcFNwZWVkID0gX3Byb3BzLmF1dG9TdG9wU3BlZWQsXG4gICAgICAgIGFjY2VsZXJhdGlvbiA9IF9wcm9wcy5hY2NlbGVyYXRpb24sXG4gICAgICAgIGZyaWN0aW9uID0gX3Byb3BzLmZyaWN0aW9uLFxuICAgICAgICB2ZWxvY2l0eSA9IF9wcm9wcy52ZWxvY2l0eSxcbiAgICAgICAgc3ByaW5nID0gX3Byb3BzLnNwcmluZyxcbiAgICAgICAgdG8gPSBfcHJvcHMudG87XG5cbiAgICB2YXIgbmV3VmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICB2YXIgZWxhcHNlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcblxuICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChhY2NlbGVyYXRpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShhY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGZyaWN0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGZyaWN0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSAqPSBNYXRoLnBvdygxIC0gZnJpY3Rpb24sIGVsYXBzZWQgLyAxMDApO1xuICAgIH1cblxuICAgIGlmIChzcHJpbmcgJiYgdG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGRpc3RhbmNlVG9UYXJnZXQgPSB0byAtIHRoaXMuY3VycmVudDtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkoc3ByaW5nLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB2ZWxvY2l0eVxuICAgIHRoaXMuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkobmV3VmVsb2NpdHksIGVsYXBzZWQpO1xuICAgIHRoaXMucHJvcHMudmVsb2NpdHkgPSBuZXdWZWxvY2l0eTtcblxuICAgIC8vIENoZWNrIGlmIHNpbXVsYXRpb24gaXMgY29tcGxldGVcbiAgICAvLyBXZSBkbyB0aGlzIGhlcmUgaW5zdGVhZCBvZiBgaXNBY3Rpb25Db21wbGV0ZWAgYXMgaXQgYWxsb3dzIHVzXG4gICAgLy8gdG8gY2xhbXAgZHVyaW5nIHRoaXMgdXBkYXRlXG4gICAgdGhpcy5pc0NvbXBsZXRlID0gYXV0b1N0b3BTcGVlZCAhPT0gZmFsc2UgJiYgKCFuZXdWZWxvY2l0eSB8fCBNYXRoLmFicyhuZXdWZWxvY2l0eSkgPD0gYXV0b1N0b3BTcGVlZCk7XG5cbiAgICBpZiAodGhpcy5pc0NvbXBsZXRlICYmIHNwcmluZykge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdG87XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBQaHlzaWNzLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICB9O1xuXG4gIHJldHVybiBQaHlzaWNzO1xufShfMi5kZWZhdWx0KTtcblxuUGh5c2ljcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjY2VsZXJhdGlvbjogMCxcbiAgZnJpY3Rpb246IDAsXG4gIHZlbG9jaXR5OiAwLFxuICBhdXRvU3RvcFNwZWVkOiAwLjAwMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGh5c2ljcyhwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQm9lWE5wWTNNdWFuTWlYU3dpYm1GdFpYTWlPbHNpVUdoNWMybGpjeUlzSW5Wd1pHRjBaU0lzSW5CeWIzQnpJaXdpWVhWMGIxTjBiM0JUY0dWbFpDSXNJbUZqWTJWc1pYSmhkR2x2YmlJc0ltWnlhV04wYVc5dUlpd2lkbVZzYjJOcGRIa2lMQ0p6Y0hKcGJtY2lMQ0owYnlJc0ltNWxkMVpsYkc5amFYUjVJaXdpWld4aGNITmxaQ0lzSW5WdVpHVm1hVzVsWkNJc0ltUnBjM1JoYm1ObFZHOVVZWEpuWlhRaUxDSmpkWEp5Wlc1MElpd2lhWE5EYjIxd2JHVjBaU0lzSWsxaGRHZ2lMQ0poWW5NaUxDSnBjMEZqZEdsdmJrTnZiWEJzWlhSbElpd2laR1ZtWVhWc2RGQnliM0J6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3UVVGRFFUczdRVUZEUVRzN096czdPenM3T3p0SlFVVk5RU3hQT3pzN096czdPenM3YjBKQlVVcERMRTBzY1VKQlFWTTdRVUZCUVN4cFFrRkRhVVVzUzBGQlMwTXNTMEZFZEVVN1FVRkJRU3hSUVVORFF5eGhRVVJFTEZWQlEwTkJMR0ZCUkVRN1FVRkJRU3hSUVVOblFrTXNXVUZFYUVJc1ZVRkRaMEpCTEZsQlJHaENPMEZCUVVFc1VVRkRPRUpETEZGQlJEbENMRlZCUXpoQ1FTeFJRVVE1UWp0QlFVRkJMRkZCUTNkRFF5eFJRVVI0UXl4VlFVTjNRMEVzVVVGRWVFTTdRVUZCUVN4UlFVTnJSRU1zVFVGRWJFUXNWVUZEYTBSQkxFMUJSR3hFTzBGQlFVRXNVVUZETUVSRExFVkJSREZFTEZWQlF6QkVRU3hGUVVReFJEczdRVUZGVUN4UlFVRkpReXhqUVVGalNDeFJRVUZzUWp0QlFVTkJMRkZCUVUxSkxGVkJRVlVzYjBOQlFXaENPenRCUVVWQk8wRkJRMEVzVVVGQlNVNHNXVUZCU2l4RlFVRnJRanRCUVVOb1Frc3NjVUpCUVdVc2VVSkJRV05NTEZsQlFXUXNSVUZCTkVKTkxFOUJRVFZDTEVOQlFXWTdRVUZEUkRzN1FVRkZSRHRCUVVOQkxGRkJRVWxNTEZGQlFVb3NSVUZCWXp0QlFVTmFTU3c0UWtGQlowSXNTVUZCU1Vvc1VVRkJjRUlzUlVGQmEwTkxMRlZCUVZVc1IwRkJOVU03UVVGRFJEczdRVUZGUkN4UlFVRkpTQ3hWUVVGVlF5eFBRVUZQUnl4VFFVRnlRaXhGUVVGblF6dEJRVU01UWl4VlFVRk5ReXh0UWtGQmJVSktMRXRCUVVzc1MwRkJTMHNzVDBGQmJrTTdRVUZEUVVvc2NVSkJRV1ZITEcxQ1FVRnRRaXg1UWtGQlkwd3NUVUZCWkN4RlFVRnpRa2NzVDBGQmRFSXNRMEZCYkVNN1FVRkRSRHM3UVVGRlJEdEJRVU5CTEZOQlFVdEhMRTlCUVV3c1NVRkJaMElzZVVKQlFXTktMRmRCUVdRc1JVRkJNa0pETEU5QlFUTkNMRU5CUVdoQ08wRkJRMEVzVTBGQlMxSXNTMEZCVEN4RFFVRlhTU3hSUVVGWUxFZEJRWE5DUnl4WFFVRjBRanM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRkxTeXhWUVVGTUxFZEJRVzFDV0N4clFrRkJhMElzUzBGQmJFSXNTMEZCTkVJc1EwRkJRMDBzVjBGQlJDeEpRVUZuUWswc1MwRkJTME1zUjBGQlRDeERRVUZUVUN4WFFVRlVMRXRCUVhsQ1RpeGhRVUZ5UlN4RFFVRnVRanM3UVVGRlFTeFJRVUZKTEV0QlFVdFhMRlZCUVV3c1NVRkJiVUpRTEUxQlFYWkNMRVZCUVN0Q08wRkJRemRDTEZkQlFVdE5MRTlCUVV3c1IwRkJaVXdzUlVGQlpqdEJRVU5FT3p0QlFVVkVMRmRCUVU4c1MwRkJTMHNzVDBGQldqdEJRVU5FTEVjN08yOUNRVVZFU1N4blFpd3JRa0ZCYlVJN1FVRkRha0lzVjBGQlR5eExRVUZMU0N4VlFVRmFPMEZCUTBRc1J6czdPenM3UVVFNVEwZGtMRThzUTBGRFIydENMRmtzUjBGQlpUdEJRVU53UW1Rc1owSkJRV01zUTBGRVRUdEJRVVZ3UWtNc1dVRkJWU3hEUVVaVk8wRkJSM0JDUXl4WlFVRlZMRU5CU0ZVN1FVRkpjRUpJTEdsQ1FVRmxPMEZCU2tzc1F6czdhMEpCWjBSVUxGVkJRVU5FTEV0QlFVUTdRVUZCUVN4VFFVRlhMRWxCUVVsR0xFOUJRVW9zUTBGQldVVXNTMEZCV2l4RFFVRllPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSndhSGx6YVdOekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMeWM3WEc1cGJYQnZjblFnZXlCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ2ZTQm1jbTl0SUNkbWNtRnRaWE41Ym1Nbk8xeHVhVzF3YjNKMElIc2djM0JsWldSUVpYSkdjbUZ0WlNCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibHh1WTJ4aGMzTWdVR2g1YzJsamN5QmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJSE4wWVhScFl5QmtaV1poZFd4MFVISnZjSE1nUFNCN1hHNGdJQ0FnWVdOalpXeGxjbUYwYVc5dU9pQXdMRnh1SUNBZ0lHWnlhV04wYVc5dU9pQXdMRnh1SUNBZ0lIWmxiRzlqYVhSNU9pQXdMRnh1SUNBZ0lHRjFkRzlUZEc5d1UzQmxaV1E2SURBdU1EQXhYRzRnSUgxY2JseHVJQ0IxY0dSaGRHVW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmhkWFJ2VTNSdmNGTndaV1ZrTENCaFkyTmxiR1Z5WVhScGIyNHNJR1p5YVdOMGFXOXVMQ0IyWld4dlkybDBlU3dnYzNCeWFXNW5MQ0IwYnlCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQnNaWFFnYm1WM1ZtVnNiMk5wZEhrZ1BTQjJaV3h2WTJsMGVUdGNiaUFnSUNCamIyNXpkQ0JsYkdGd2MyVmtJRDBnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsS0NrN1hHNWNiaUFnSUNBdkx5QkJjSEJzZVNCaFkyTmxiR1Z5WVhScGIyNGdkRzhnZG1Wc2IyTnBkSGxjYmlBZ0lDQnBaaUFvWVdOalpXeGxjbUYwYVc5dUtTQjdYRzRnSUNBZ0lDQnVaWGRXWld4dlkybDBlU0FyUFNCemNHVmxaRkJsY2taeVlXMWxLR0ZqWTJWc1pYSmhkR2x2Yml3Z1pXeGhjSE5sWkNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1FYQndiSGtnWm5KcFkzUnBiMjRnZEc4Z2RtVnNiMk5wZEhsY2JpQWdJQ0JwWmlBb1puSnBZM1JwYjI0cElIdGNiaUFnSUNBZ0lHNWxkMVpsYkc5amFYUjVJQ285SUNneElDMGdabkpwWTNScGIyNHBJQ29xSUNobGJHRndjMlZrSUM4Z01UQXdLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYzNCeWFXNW5JQ1ltSUhSdklDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR1JwYzNSaGJtTmxWRzlVWVhKblpYUWdQU0IwYnlBdElIUm9hWE11WTNWeWNtVnVkRHRjYmlBZ0lDQWdJRzVsZDFabGJHOWphWFI1SUNzOUlHUnBjM1JoYm1ObFZHOVVZWEpuWlhRZ0tpQnpjR1ZsWkZCbGNrWnlZVzFsS0hOd2NtbHVaeXdnWld4aGNITmxaQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnUVhCd2JIa2dkbVZzYjJOcGRIbGNiaUFnSUNCMGFHbHpMbU4xY25KbGJuUWdLejBnYzNCbFpXUlFaWEpHY21GdFpTaHVaWGRXWld4dlkybDBlU3dnWld4aGNITmxaQ2s3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTUyWld4dlkybDBlU0E5SUc1bGQxWmxiRzlqYVhSNU8xeHVYRzRnSUNBZ0x5OGdRMmhsWTJzZ2FXWWdjMmx0ZFd4aGRHbHZiaUJwY3lCamIyMXdiR1YwWlZ4dUlDQWdJQzh2SUZkbElHUnZJSFJvYVhNZ2FHVnlaU0JwYm5OMFpXRmtJRzltSUdCcGMwRmpkR2x2YmtOdmJYQnNaWFJsWUNCaGN5QnBkQ0JoYkd4dmQzTWdkWE5jYmlBZ0lDQXZMeUIwYnlCamJHRnRjQ0JrZFhKcGJtY2dkR2hwY3lCMWNHUmhkR1ZjYmlBZ0lDQjBhR2x6TG1selEyOXRjR3hsZEdVZ1BTQW9ZWFYwYjFOMGIzQlRjR1ZsWkNBaFBUMGdabUZzYzJVZ0ppWWdLQ0Z1WlhkV1pXeHZZMmwwZVNCOGZDQk5ZWFJvTG1GaWN5aHVaWGRXWld4dlkybDBlU2tnUEQwZ1lYVjBiMU4wYjNCVGNHVmxaQ2twTzF4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YVhORGIyMXdiR1YwWlNBbUppQnpjSEpwYm1jcElIdGNiaUFnSUNBZ0lIUm9hWE11WTNWeWNtVnVkQ0E5SUhSdk8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtTjFjbkpsYm5RN1hHNGdJSDFjYmx4dUlDQnBjMEZqZEdsdmJrTnZiWEJzWlhSbEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbWx6UTI5dGNHeGxkR1U3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hCeWIzQnpLU0E5UGlCdVpYY2dVR2g1YzJsamN5aHdjbTl3Y3lrN1hHNGlYWDA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF92YWx1ZSA9IHJlcXVpcmUoJy4vdmFsdWUnKTtcblxudmFyIF92YWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZSk7XG5cbnZhciBfY29tcG9zaXRlID0gcmVxdWlyZSgnLi9jb21wb3NpdGUnKTtcblxudmFyIF9jb21wb3NpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBjcmVhdGVQb2ludGVyKF9yZWYyLCBfcmVmKSB7XG4gIHZhciB4ID0gX3JlZjIueCxcbiAgICAgIHkgPSBfcmVmMi55O1xuXG4gIHZhciBldmVudFRvUG9pbnRzID0gX3JlZi5ldmVudFRvUG9pbnRzLFxuICAgICAgbW92ZUV2ZW50ID0gX3JlZi5tb3ZlRXZlbnQsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2V2ZW50VG9Qb2ludHMnLCAnbW92ZUV2ZW50J10pO1xuXG4gIHZhciBwb2ludGVyID0gKDAsIF9jb21wb3NpdGUyLmRlZmF1bHQpKHtcbiAgICB4OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh4KSxcbiAgICB5OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh5KVxuICB9LCBfZXh0ZW5kcyh7XG4gICAgcHJldmVudERlZmF1bHQ6IHRydWVcbiAgfSwgcHJvcHMpKTtcblxuICB2YXIgdXBkYXRlUG9pbnRlciA9IGZ1bmN0aW9uIHVwZGF0ZVBvaW50ZXIoZSkge1xuICAgIGlmIChwb2ludGVyLmdldFByb3AoJ3ByZXZlbnREZWZhdWx0JykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgcG9pbnRzID0gZXZlbnRUb1BvaW50cyhlKTtcbiAgICBwb2ludGVyLnguc2V0KHBvaW50cy54KTtcbiAgICBwb2ludGVyLnkuc2V0KHBvaW50cy55KTtcbiAgfTtcblxuICBwb2ludGVyLnNldFByb3BzKHtcbiAgICBfb25TdGFydDogZnVuY3Rpb24gX29uU3RhcnQoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVQb2ludGVyLCB7IHBhc3NpdmU6ICFwb2ludGVyLmdldFByb3AoJ3ByZXZlbnREZWZhdWx0JykgfSk7XG4gICAgfSxcbiAgICBfb25TdG9wOiBmdW5jdGlvbiBfb25TdG9wKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcG9pbnRlcjtcbn1cblxudmFyIG1vdXNlRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gbW91c2VFdmVudFRvUG9pbnQoZSkge1xuICByZXR1cm4ge1xuICAgIHg6IGUuY2xpZW50WCxcbiAgICB5OiBlLmNsaWVudFlcbiAgfTtcbn07XG5cbnZhciB0b3VjaEV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIHRvdWNoRXZlbnRUb1BvaW50KF9yZWYzKSB7XG4gIHZhciBjaGFuZ2VkVG91Y2hlcyA9IF9yZWYzLmNoYW5nZWRUb3VjaGVzO1xuICByZXR1cm4ge1xuICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICB9O1xufTtcblxudmFyIGdldE5hdGl2ZUV2ZW50ID0gZnVuY3Rpb24gZ2V0TmF0aXZlRXZlbnQoZSkge1xuICByZXR1cm4gZS5vcmlnaW5hbEV2ZW50IHx8IGUubmF0aXZlRXZlbnQgfHwgZTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlLCBwcm9wcykge1xuICB2YXIgbmF0aXZlRXZlbnQgPSBnZXROYXRpdmVFdmVudChlKTtcbiAgcmV0dXJuIG5hdGl2ZUV2ZW50LnRvdWNoZXMgPyBjcmVhdGVQb2ludGVyKHRvdWNoRXZlbnRUb1BvaW50KGUpLCBfZXh0ZW5kcyh7XG4gICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICBldmVudFRvUG9pbnRzOiB0b3VjaEV2ZW50VG9Qb2ludFxuICB9LCBwcm9wcykpIDogY3JlYXRlUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwgX2V4dGVuZHMoe1xuICAgIG1vdmVFdmVudDogJ21vdXNlbW92ZScsXG4gICAgZXZlbnRUb1BvaW50czogbW91c2VFdmVudFRvUG9pbnRcbiAgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNCdmFXNTBaWEl1YW5NaVhTd2libUZ0WlhNaU9sc2lZM0psWVhSbFVHOXBiblJsY2lJc0luZ2lMQ0o1SWl3aVpYWmxiblJVYjFCdmFXNTBjeUlzSW0xdmRtVkZkbVZ1ZENJc0luQnliM0J6SWl3aWNHOXBiblJsY2lJc0luQnlaWFpsYm5SRVpXWmhkV3gwSWl3aWRYQmtZWFJsVUc5cGJuUmxjaUlzSW1VaUxDSm5aWFJRY205d0lpd2ljRzlwYm5Seklpd2ljMlYwSWl3aWMyVjBVSEp2Y0hNaUxDSmZiMjVUZEdGeWRDSXNJbVJ2WTNWdFpXNTBJaXdpWkc5amRXMWxiblJGYkdWdFpXNTBJaXdpWVdSa1JYWmxiblJNYVhOMFpXNWxjaUlzSW5CaGMzTnBkbVVpTENKZmIyNVRkRzl3SWl3aWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpSXNJbTF2ZFhObFJYWmxiblJVYjFCdmFXNTBJaXdpWTJ4cFpXNTBXQ0lzSW1Oc2FXVnVkRmtpTENKMGIzVmphRVYyWlc1MFZHOVFiMmx1ZENJc0ltTm9ZVzVuWldSVWIzVmphR1Z6SWl3aVoyVjBUbUYwYVhabFJYWmxiblFpTENKdmNtbG5hVzVoYkVWMlpXNTBJaXdpYm1GMGFYWmxSWFpsYm5RaUxDSjBiM1ZqYUdWeklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZCUVRzN096dEJRVU5CT3pzN096czdPenRCUVVWQkxGTkJRVk5CTEdGQlFWUXNZMEZCZVVVN1FVRkJRU3hOUVVGb1JFTXNRMEZCWjBRc1UwRkJhRVJCTEVOQlFXZEVPMEZCUVVFc1RVRkJOME5ETEVOQlFUWkRMRk5CUVRkRFFTeERRVUUyUXpzN1FVRkJRU3hOUVVGMFEwTXNZVUZCYzBNc1VVRkJkRU5CTEdGQlFYTkRPMEZCUVVFc1RVRkJka0pETEZOQlFYVkNMRkZCUVhaQ1FTeFRRVUYxUWp0QlFVRkJMRTFCUVZSRExFdEJRVk03TzBGQlEzWkZMRTFCUVUxRExGVkJRVlVzZVVKQlFWVTdRVUZEZUVKTUxFOUJRVWNzY1VKQlFVMUJMRU5CUVU0c1EwRkVjVUk3UVVGRmVFSkRMRTlCUVVjc2NVSkJRVTFCTEVOQlFVNDdRVUZHY1VJc1IwRkJWanRCUVVsa1N5eHZRa0ZCWjBJN1FVRktSaXhMUVV0WVJpeExRVXhYTEVWQlFXaENPenRCUVZGQkxFMUJRVTFITEdkQ1FVRm5RaXhUUVVGb1FrRXNZVUZCWjBJc1EwRkJRME1zUTBGQlJDeEZRVUZQTzBGQlF6TkNMRkZCUVVsSUxGRkJRVkZKTEU5QlFWSXNRMEZCWjBJc1owSkJRV2hDTEVOQlFVb3NSVUZCZFVNN1FVRkRja05FTEZGQlFVVkdMR05CUVVZN1FVRkRSRHM3UVVGRlJDeFJRVUZOU1N4VFFVRlRVaXhqUVVGalRTeERRVUZrTEVOQlFXWTdRVUZEUVVnc1dVRkJVVXdzUTBGQlVpeERRVUZWVnl4SFFVRldMRU5CUVdORUxFOUJRVTlXTEVOQlFYSkNPMEZCUTBGTExGbEJRVkZLTEVOQlFWSXNRMEZCVlZVc1IwRkJWaXhEUVVGalJDeFBRVUZQVkN4RFFVRnlRanRCUVVORUxFZEJVa1E3TzBGQlZVRkpMRlZCUVZGUExGRkJRVklzUTBGQmFVSTdRVUZEWmtNc1kwRkJWVHRCUVVGQkxHRkJRVTFETEZOQlFWTkRMR1ZCUVZRc1EwRkJlVUpETEdkQ1FVRjZRaXhEUVVFd1EySXNVMEZCTVVNc1JVRkJjVVJKTEdGQlFYSkVMRVZCUVc5RkxFVkJRVVZWTEZOQlFWTXNRMEZCUTFvc1VVRkJVVWtzVDBGQlVpeERRVUZuUWl4blFrRkJhRUlzUTBGQldpeEZRVUZ3UlN4RFFVRk9PMEZCUVVFc1MwRkVTenRCUVVWbVV5eGhRVUZUTzBGQlFVRXNZVUZCVFVvc1UwRkJVME1zWlVGQlZDeERRVUY1UWtrc2JVSkJRWHBDTEVOQlFUWkRhRUlzVTBGQk4wTXNSVUZCZDBSSkxHRkJRWGhFTEVOQlFVNDdRVUZCUVR0QlFVWk5MRWRCUVdwQ096dEJRVXRCTEZOQlFVOUdMRTlCUVZBN1FVRkRSRHM3UVVGRlJDeEpRVUZOWlN4dlFrRkJiMElzVTBGQmNFSkJMR2xDUVVGdlFpeERRVUZEV2l4RFFVRkVPMEZCUVVFc1UwRkJVVHRCUVVOb1ExSXNUMEZCUjFFc1JVRkJSV0VzVDBGRU1rSTdRVUZGYUVOd1FpeFBRVUZIVHl4RlFVRkZZenRCUVVZeVFpeEhRVUZTTzBGQlFVRXNRMEZCTVVJN08wRkJTMEVzU1VGQlRVTXNiMEpCUVc5Q0xGTkJRWEJDUVN4cFFrRkJiMEk3UVVGQlFTeE5RVUZIUXl4alFVRklMRk5CUVVkQkxHTkJRVWc3UVVGQlFTeFRRVUY1UWp0QlFVTnFSSGhDTEU5QlFVZDNRaXhsUVVGbExFTkJRV1lzUlVGQmEwSklMRTlCUkRSQ08wRkJSV3BFY0VJc1QwRkJSM1ZDTEdWQlFXVXNRMEZCWml4RlFVRnJRa1k3UVVGR05FSXNSMEZCZWtJN1FVRkJRU3hEUVVFeFFqczdRVUZMUVN4SlFVRk5SeXhwUWtGQmFVSXNVMEZCYWtKQkxHTkJRV2xDTEVOQlFVTnFRaXhEUVVGRU8wRkJRVUVzVTBGQlQwRXNSVUZCUld0Q0xHRkJRVVlzU1VGQmJVSnNRaXhGUVVGRmJVSXNWMEZCY2tJc1NVRkJiME51UWl4RFFVRXpRenRCUVVGQkxFTkJRWFpDT3p0clFrRkZaU3hWUVVGRFFTeERRVUZFTEVWQlFVbEtMRXRCUVVvc1JVRkJZenRCUVVNelFpeE5RVUZOZFVJc1kwRkJZMFlzWlVGQlpXcENMRU5CUVdZc1EwRkJjRUk3UVVGRFFTeFRRVUZSYlVJc1dVRkJXVU1zVDBGQllpeEhRVU5NTjBJc1kwRkJZM2RDTEd0Q1FVRnJRbVlzUTBGQmJFSXNRMEZCWkR0QlFVTkZUQ3hsUVVGWExGZEJSR0k3UVVGRlJVUXNiVUpCUVdWeFFqdEJRVVpxUWl4TFFVZExia0lzUzBGSVRDeEZRVVJMTEVkQlRVeE1MR05CUVdOeFFpeHJRa0ZCYTBKYUxFTkJRV3hDTEVOQlFXUTdRVUZEUlV3c1pVRkJWeXhYUVVSaU8wRkJSVVZFTEcxQ1FVRmxhMEk3UVVGR2FrSXNTMEZIUzJoQ0xFdEJTRXdzUlVGT1JqdEJRVmRFTEVNaUxDSm1hV3hsSWpvaWNHOXBiblJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IyWVd4MVpTQm1jbTl0SUNjdUwzWmhiSFZsSnp0Y2JtbHRjRzl5ZENCamIyMXdiM05wZEdVZ1puSnZiU0FuTGk5amIyMXdiM05wZEdVbk8xeHVYRzVtZFc1amRHbHZiaUJqY21WaGRHVlFiMmx1ZEdWeUtIc2dlQ3dnZVNCOUxDQjdJR1YyWlc1MFZHOVFiMmx1ZEhNc0lHMXZkbVZGZG1WdWRDd2dMaTR1Y0hKdmNITWdmU2tnZTF4dUlDQmpiMjV6ZENCd2IybHVkR1Z5SUQwZ1kyOXRjRzl6YVhSbEtIdGNiaUFnSUNCNE9pQjJZV3gxWlNoNEtTeGNiaUFnSUNCNU9pQjJZV3gxWlNoNUtWeHVJQ0I5TENCN1hHNGdJQ0FnY0hKbGRtVnVkRVJsWm1GMWJIUTZJSFJ5ZFdVc1hHNGdJQ0FnTGk0dWNISnZjSE5jYmlBZ2ZTazdYRzVjYmlBZ1kyOXVjM1FnZFhCa1lYUmxVRzlwYm5SbGNpQTlJQ2hsS1NBOVBpQjdYRzRnSUNBZ2FXWWdLSEJ2YVc1MFpYSXVaMlYwVUhKdmNDZ25jSEpsZG1WdWRFUmxabUYxYkhRbktTa2dlMXh1SUNBZ0lDQWdaUzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHTnZibk4wSUhCdmFXNTBjeUE5SUdWMlpXNTBWRzlRYjJsdWRITW9aU2s3WEc0Z0lDQWdjRzlwYm5SbGNpNTRMbk5sZENod2IybHVkSE11ZUNrN1hHNGdJQ0FnY0c5cGJuUmxjaTU1TG5ObGRDaHdiMmx1ZEhNdWVTazdYRzRnSUgwN1hHNWNiaUFnY0c5cGJuUmxjaTV6WlhSUWNtOXdjeWg3WEc0Z0lDQWdYMjl1VTNSaGNuUTZJQ2dwSUQwK0lHUnZZM1Z0Wlc1MExtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0cxdmRtVkZkbVZ1ZEN3Z2RYQmtZWFJsVUc5cGJuUmxjaXdnZXlCd1lYTnphWFpsT2lBaGNHOXBiblJsY2k1blpYUlFjbTl3S0Nkd2NtVjJaVzUwUkdWbVlYVnNkQ2NwSUgwcExGeHVJQ0FnSUY5dmJsTjBiM0E2SUNncElEMCtJR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLRzF2ZG1WRmRtVnVkQ3dnZFhCa1lYUmxVRzlwYm5SbGNpbGNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJSEJ2YVc1MFpYSTdYRzU5WEc1Y2JtTnZibk4wSUcxdmRYTmxSWFpsYm5SVWIxQnZhVzUwSUQwZ0tHVXBJRDArSUNoN1hHNGdJSGc2SUdVdVkyeHBaVzUwV0N4Y2JpQWdlVG9nWlM1amJHbGxiblJaWEc1OUtUdGNibHh1WTI5dWMzUWdkRzkxWTJoRmRtVnVkRlJ2VUc5cGJuUWdQU0FvZXlCamFHRnVaMlZrVkc5MVkyaGxjeUI5S1NBOVBpQW9lMXh1SUNCNE9pQmphR0Z1WjJWa1ZHOTFZMmhsYzFzd1hTNWpiR2xsYm5SWUxGeHVJQ0I1T2lCamFHRnVaMlZrVkc5MVkyaGxjMXN3WFM1amJHbGxiblJaWEc1OUtUdGNibHh1WTI5dWMzUWdaMlYwVG1GMGFYWmxSWFpsYm5RZ1BTQW9aU2tnUFQ0Z1pTNXZjbWxuYVc1aGJFVjJaVzUwSUh4OElHVXVibUYwYVhabFJYWmxiblFnZkh3Z1pUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR1VzSUhCeWIzQnpLU0E5UGlCN1hHNGdJR052Ym5OMElHNWhkR2wyWlVWMlpXNTBJRDBnWjJWMFRtRjBhWFpsUlhabGJuUW9aU2s3WEc0Z0lISmxkSFZ5YmlBb2JtRjBhWFpsUlhabGJuUXVkRzkxWTJobGN5a2dQMXh1SUNBZ0lHTnlaV0YwWlZCdmFXNTBaWElvZEc5MVkyaEZkbVZ1ZEZSdlVHOXBiblFvWlNrc0lIdGNiaUFnSUNBZ0lHMXZkbVZGZG1WdWREb2dKM1J2ZFdOb2JXOTJaU2NzWEc0Z0lDQWdJQ0JsZG1WdWRGUnZVRzlwYm5Sek9pQjBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDeGNiaUFnSUNBZ0lDNHVMbkJ5YjNCelhHNGdJQ0FnZlNrZ09seHVJQ0FnSUdOeVpXRjBaVkJ2YVc1MFpYSW9iVzkxYzJWRmRtVnVkRlJ2VUc5cGJuUW9aU2tzSUh0Y2JpQWdJQ0FnSUcxdmRtVkZkbVZ1ZERvZ0oyMXZkWE5sYlc5MlpTY3NYRzRnSUNBZ0lDQmxkbVZ1ZEZSdlVHOXBiblJ6T2lCdGIzVnpaVVYyWlc1MFZHOVFiMmx1ZEN4Y2JpQWdJQ0FnSUM0dUxuQnliM0J6WEc0Z0lDQWdmU2s3WEc1OU8xeHVJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWN0aW9ucy9wb2ludGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF92YWx1ZSA9IHJlcXVpcmUoJy4vdmFsdWUnKTtcblxudmFyIF92YWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZSk7XG5cbnZhciBfY29tcG9zaXRlID0gcmVxdWlyZSgnLi9jb21wb3NpdGUnKTtcblxudmFyIF9jb21wb3NpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRlKTtcblxudmFyIF9wYXJhbGxlbCA9IHJlcXVpcmUoJy4vcGFyYWxsZWwnKTtcblxudmFyIF9wYXJhbGxlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJhbGxlbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gY3JlYXRlVG91Y2hlcyhpbml0aWFsVG91Y2hlcywgX3JlZikge1xuICB2YXIgZXZlbnRUb1RvdWNoZXMgPSBfcmVmLmV2ZW50VG9Ub3VjaGVzLFxuICAgICAgbW92ZUV2ZW50ID0gX3JlZi5tb3ZlRXZlbnQsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2V2ZW50VG9Ub3VjaGVzJywgJ21vdmVFdmVudCddKTtcblxuICB2YXIgdG91Y2hlcyA9ICgwLCBfcGFyYWxsZWwyLmRlZmF1bHQpKG1hcENvb3Jkc1RvQWN0aW9ucyhpbml0aWFsVG91Y2hlcyksIF9leHRlbmRzKHtcbiAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZVxuICB9LCBwcm9wcykpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRvdWNoZXMoZSkge1xuICAgIGlmIChwcm9wcy5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIGxhdGVzdFRvdWNoZXMgPSBldmVudFRvVG91Y2hlcyhlKTtcbiAgICB1cGRhdGVBY3Rpb25XaXRoVG91Y2hlcyh0b3VjaGVzLCBsYXRlc3RUb3VjaGVzKTtcbiAgfVxuXG4gIHRvdWNoZXMuc2V0UHJvcHMoe1xuICAgIF9vblN0YXJ0OiBmdW5jdGlvbiBfb25TdGFydCgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVRvdWNoZXMpO1xuICAgIH0sXG4gICAgX29uU3RvcDogZnVuY3Rpb24gX29uU3RvcCgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVRvdWNoZXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRvdWNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hcENvb3Jkc1RvQWN0aW9ucyhjb29yZHMpIHtcbiAgdmFyIGFjdGlvbnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX2Nvb3JkcyRpID0gY29vcmRzW2ldLFxuICAgICAgICB4ID0gX2Nvb3JkcyRpLngsXG4gICAgICAgIHkgPSBfY29vcmRzJGkueTtcblxuICAgIGFjdGlvbnNbaV0gPSAoMCwgX2NvbXBvc2l0ZTIuZGVmYXVsdCkoe1xuICAgICAgeDogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeCksXG4gICAgICB5OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh5KVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBhY3Rpb25zO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBY3Rpb25XaXRoVG91Y2hlcyh0b3VjaGVzLCBuZXdUb3VjaGVzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3VG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBfbmV3VG91Y2hlcyRpID0gbmV3VG91Y2hlc1tpXSxcbiAgICAgICAgeCA9IF9uZXdUb3VjaGVzJGkueCxcbiAgICAgICAgeSA9IF9uZXdUb3VjaGVzJGkueTtcblxuICAgIHZhciB0b3VjaEFjdGlvbnMgPSB0b3VjaGVzLmdldENoaWxkcmVuKCk7XG4gICAgdmFyIHRvdWNoQWN0aW9uID0gdG91Y2hBY3Rpb25zW2ldO1xuICAgIGlmICh0b3VjaEFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0b3VjaEFjdGlvbi54LnNldCh4KTtcbiAgICAgIHRvdWNoQWN0aW9uLnkuc2V0KHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3VjaGVzLmFkZEFjdGlvbigoMCwgX2NvbXBvc2l0ZTIuZGVmYXVsdCkoe1xuICAgICAgICB4OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh4KSxcbiAgICAgICAgeTogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeSlcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIG1vdXNlRXZlbnRUb1RvdWNoZXMgPSBmdW5jdGlvbiBtb3VzZUV2ZW50VG9Ub3VjaGVzKF9yZWYyKSB7XG4gIHZhciBwYWdlWCA9IF9yZWYyLnBhZ2VYLFxuICAgICAgcGFnZVkgPSBfcmVmMi5wYWdlWTtcbiAgcmV0dXJuIFt7IHg6IHBhZ2VYLCB5OiBwYWdlWSB9XTtcbn07XG52YXIgdG91Y2hFdmVudFRvVG91Y2hlcyA9IGZ1bmN0aW9uIHRvdWNoRXZlbnRUb1RvdWNoZXMoX3JlZjMpIHtcbiAgdmFyIHRvdWNoZXMgPSBfcmVmMy50b3VjaGVzO1xuICByZXR1cm4gZXh0cmFjdENvb3Jkcyh0b3VjaGVzKTtcbn07XG5cbmZ1bmN0aW9uIGV4dHJhY3RDb29yZHModG91Y2hlcykge1xuICB2YXIgY29vcmRzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBfdG91Y2hlcyRpID0gdG91Y2hlc1tpXSxcbiAgICAgICAgY2xpZW50WCA9IF90b3VjaGVzJGkuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WSA9IF90b3VjaGVzJGkuY2xpZW50WTtcblxuICAgIGNvb3Jkc1tpXSA9IHtcbiAgICAgIHg6IGNsaWVudFgsXG4gICAgICB5OiBjbGllbnRZXG4gICAgfTtcbiAgfVxuICByZXR1cm4gY29vcmRzO1xufVxuXG52YXIgZ2V0TmF0aXZlRXZlbnQgPSBmdW5jdGlvbiBnZXROYXRpdmVFdmVudChlKSB7XG4gIHJldHVybiBlLm9yaWdpbmFsRXZlbnQgfHwgZS5uYXRpdmVFdmVudCB8fCBlO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGUsIHByb3BzKSB7XG4gIHZhciBuYXRpdmVFdmVudCA9IGdldE5hdGl2ZUV2ZW50KGUpO1xuICByZXR1cm4gbmF0aXZlRXZlbnQudG91Y2hlcyA/IGNyZWF0ZVRvdWNoZXModG91Y2hFdmVudFRvVG91Y2hlcyhlKSwgX2V4dGVuZHMoe1xuICAgIG1vdmVFdmVudDogJ3RvdWNobW92ZScsXG4gICAgZXZlbnRUb1RvdWNoZXM6IHRvdWNoRXZlbnRUb1RvdWNoZXNcbiAgfSwgcHJvcHMpKSA6IGNyZWF0ZVRvdWNoZXMobW91c2VFdmVudFRvVG91Y2hlcyhlKSwgX2V4dGVuZHMoe1xuICAgIG1vdmVFdmVudDogJ21vdXNlbW92ZScsXG4gICAgZXZlbnRUb1RvdWNoZXM6IG1vdXNlRXZlbnRUb1RvdWNoZXNcbiAgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNSdmRXTm9aWE11YW5NaVhTd2libUZ0WlhNaU9sc2lZM0psWVhSbFZHOTFZMmhsY3lJc0ltbHVhWFJwWVd4VWIzVmphR1Z6SWl3aVpYWmxiblJVYjFSdmRXTm9aWE1pTENKdGIzWmxSWFpsYm5RaUxDSndjbTl3Y3lJc0luUnZkV05vWlhNaUxDSnRZWEJEYjI5eVpITlViMEZqZEdsdmJuTWlMQ0p3Y21WMlpXNTBSR1ZtWVhWc2RDSXNJblZ3WkdGMFpWUnZkV05vWlhNaUxDSmxJaXdpYkdGMFpYTjBWRzkxWTJobGN5SXNJblZ3WkdGMFpVRmpkR2x2YmxkcGRHaFViM1ZqYUdWeklpd2ljMlYwVUhKdmNITWlMQ0pmYjI1VGRHRnlkQ0lzSW1SdlkzVnRaVzUwSWl3aVpHOWpkVzFsYm5SRmJHVnRaVzUwSWl3aVlXUmtSWFpsYm5STWFYTjBaVzVsY2lJc0lsOXZibE4wYjNBaUxDSnlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlJaXdpWTI5dmNtUnpJaXdpWVdOMGFXOXVjeUlzSW1raUxDSnNaVzVuZEdnaUxDSjRJaXdpZVNJc0ltNWxkMVJ2ZFdOb1pYTWlMQ0owYjNWamFFRmpkR2x2Ym5NaUxDSm5aWFJEYUdsc1pISmxiaUlzSW5SdmRXTm9RV04wYVc5dUlpd2lkVzVrWldacGJtVmtJaXdpYzJWMElpd2lZV1JrUVdOMGFXOXVJaXdpYlc5MWMyVkZkbVZ1ZEZSdlZHOTFZMmhsY3lJc0luQmhaMlZZSWl3aWNHRm5aVmtpTENKMGIzVmphRVYyWlc1MFZHOVViM1ZqYUdWeklpd2laWGgwY21GamRFTnZiM0prY3lJc0ltTnNhV1Z1ZEZnaUxDSmpiR2xsYm5SWklpd2laMlYwVG1GMGFYWmxSWFpsYm5RaUxDSnZjbWxuYVc1aGJFVjJaVzUwSWl3aWJtRjBhWFpsUlhabGJuUWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGQk96czdPMEZCUTBFN096czdRVUZEUVRzN096czdPenM3UVVGRlFTeFRRVUZUUVN4aFFVRlVMRU5CUVhWQ1F5eGpRVUYyUWl4UlFVRm5SanRCUVVGQkxFMUJRWFpEUXl4alFVRjFReXhSUVVGMlEwRXNZMEZCZFVNN1FVRkJRU3hOUVVGMlFrTXNVMEZCZFVJc1VVRkJka0pCTEZOQlFYVkNPMEZCUVVFc1RVRkJWRU1zUzBGQlV6czdRVUZET1VVc1RVRkJUVU1zVlVGQlZTeDNRa0ZCVTBNc2JVSkJRVzFDVEN4alFVRnVRaXhEUVVGVU8wRkJRMlJOTEc5Q1FVRm5RanRCUVVSR0xFdEJSVmhJTEV0QlJsY3NSVUZCYUVJN08wRkJTMEVzVjBGQlUwa3NZVUZCVkN4RFFVRjFRa01zUTBGQmRrSXNSVUZCTUVJN1FVRkRlRUlzVVVGQlNVd3NUVUZCVFVjc1kwRkJWaXhGUVVFd1FrVXNSVUZCUlVZc1kwRkJSanM3UVVGRk1VSXNVVUZCVFVjc1owSkJRV2RDVWl4bFFVRmxUeXhEUVVGbUxFTkJRWFJDTzBGQlEwRkZMRFJDUVVGM1FrNHNUMEZCZUVJc1JVRkJhVU5MTEdGQlFXcERPMEZCUTBRN08wRkJSVVJNTEZWQlFWRlBMRkZCUVZJc1EwRkJhVUk3UVVGRFprTXNZMEZCVlR0QlFVRkJMR0ZCUVUxRExGTkJRVk5ETEdWQlFWUXNRMEZCZVVKRExHZENRVUY2UWl4RFFVRXdRMklzVTBGQk1VTXNSVUZCY1VSTExHRkJRWEpFTEVOQlFVNDdRVUZCUVN4TFFVUkxPMEZCUldaVExHRkJRVk03UVVGQlFTeGhRVUZOU0N4VFFVRlRReXhsUVVGVUxFTkJRWGxDUnl4dFFrRkJla0lzUTBGQk5rTm1MRk5CUVRkRExFVkJRWGRFU3l4aFFVRjRSQ3hEUVVGT08wRkJRVUU3UVVGR1RTeEhRVUZxUWpzN1FVRkxRU3hUUVVGUFNDeFBRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVME1zYTBKQlFWUXNRMEZCTkVKaExFMUJRVFZDTEVWQlFXOURPMEZCUTJ4RExFMUJRVWxETEZWQlFWVXNSVUZCWkR0QlFVTkJMRTlCUVVzc1NVRkJTVU1zU1VGQlNTeERRVUZpTEVWQlFXZENRU3hKUVVGSlJpeFBRVUZQUnl4TlFVRXpRaXhGUVVGdFEwUXNSMEZCYmtNc1JVRkJkME03UVVGQlFTeHZRa0ZEY2tKR0xFOUJRVTlGTEVOQlFWQXNRMEZFY1VJN1FVRkJRU3hSUVVNNVFrVXNRMEZFT0VJc1lVRkRPVUpCTEVOQlJEaENPMEZCUVVFc1VVRkRNMEpETEVOQlJESkNMR0ZCUXpOQ1FTeERRVVF5UWpzN1FVRkZkRU5LTEZsQlFWRkRMRU5CUVZJc1NVRkJZU3g1UWtGQlZUdEJRVU55UWtVc1UwRkJSeXh4UWtGQlRVRXNRMEZCVGl4RFFVUnJRanRCUVVWeVFrTXNVMEZCUnl4eFFrRkJUVUVzUTBGQlRqdEJRVVpyUWl4TFFVRldMRU5CUVdJN1FVRkpSRHRCUVVORUxGTkJRVTlLTEU5QlFWQTdRVUZEUkRzN1FVRkZSQ3hUUVVGVFZDeDFRa0ZCVkN4RFFVRnBRMDRzVDBGQmFrTXNSVUZCTUVOdlFpeFZRVUV4UXl4RlFVRnpSRHRCUVVOd1JDeFBRVUZMTEVsQlFVbEtMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1Vrc1YwRkJWMGdzVFVGQkwwSXNSVUZCZFVORUxFZEJRWFpETEVWQlFUUkRPMEZCUVVFc2QwSkJRM3BDU1N4WFFVRlhTaXhEUVVGWUxFTkJSSGxDTzBGQlFVRXNVVUZEYkVORkxFTkJSR3RETEdsQ1FVTnNRMEVzUTBGRWEwTTdRVUZCUVN4UlFVTXZRa01zUTBGRUswSXNhVUpCUXk5Q1FTeERRVVFyUWpzN1FVRkZNVU1zVVVGQlRVVXNaVUZCWlhKQ0xGRkJRVkZ6UWl4WFFVRlNMRVZCUVhKQ08wRkJRMEVzVVVGQlRVTXNZMEZCWTBZc1lVRkJZVXdzUTBGQllpeERRVUZ3UWp0QlFVTkJMRkZCUVVsUExHZENRVUZuUWtNc1UwRkJjRUlzUlVGQkswSTdRVUZETjBKRUxHdENRVUZaVEN4RFFVRmFMRU5CUVdOUExFZEJRV1FzUTBGQmEwSlFMRU5CUVd4Q08wRkJRMEZMTEd0Q1FVRlpTaXhEUVVGYUxFTkJRV05OTEVkQlFXUXNRMEZCYTBKT0xFTkJRV3hDTzBGQlEwUXNTMEZJUkN4TlFVZFBPMEZCUTB4dVFpeGpRVUZSTUVJc1UwRkJVaXhEUVVGclFpeDVRa0ZCVlR0QlFVTXhRbElzVjBGQlJ5eHhRa0ZCVFVFc1EwRkJUaXhEUVVSMVFqdEJRVVV4UWtNc1YwRkJSeXh4UWtGQlRVRXNRMEZCVGp0QlFVWjFRaXhQUVVGV0xFTkJRV3hDTzBGQlNVUTdRVUZEUmp0QlFVTkdPenRCUVVWRUxFbEJRVTFSTEhOQ1FVRnpRaXhUUVVGMFFrRXNiVUpCUVhOQ08wRkJRVUVzVFVGQlIwTXNTMEZCU0N4VFFVRkhRU3hMUVVGSU8wRkJRVUVzVFVGQlZVTXNTMEZCVml4VFFVRlZRU3hMUVVGV08wRkJRVUVzVTBGQmMwSXNRMEZCUXl4RlFVRkZXQ3hIUVVGSFZTeExRVUZNTEVWQlFWbFVMRWRCUVVkVkxFdEJRV1lzUlVGQlJDeERRVUYwUWp0QlFVRkJMRU5CUVRWQ08wRkJRMEVzU1VGQlRVTXNjMEpCUVhOQ0xGTkJRWFJDUVN4dFFrRkJjMEk3UVVGQlFTeE5RVUZIT1VJc1QwRkJTQ3hUUVVGSFFTeFBRVUZJTzBGQlFVRXNVMEZCYVVJclFpeGpRVUZqTDBJc1QwRkJaQ3hEUVVGcVFqdEJRVUZCTEVOQlFUVkNPenRCUVVWQkxGTkJRVk1yUWl4aFFVRlVMRU5CUVhWQ0wwSXNUMEZCZGtJc1JVRkJaME03UVVGRE9VSXNUVUZCU1dNc1UwRkJVeXhGUVVGaU8wRkJRMEVzVDBGQlN5eEpRVUZKUlN4SlFVRkpMRU5CUVdJc1JVRkJaMEpCTEVsQlFVbG9RaXhSUVVGUmFVSXNUVUZCTlVJc1JVRkJiME5FTEVkQlFYQkRMRVZCUVhsRE8wRkJRVUVzY1VKQlExWm9RaXhSUVVGUlowSXNRMEZCVWl4RFFVUlZPMEZCUVVFc1VVRkRMMEpuUWl4UFFVUXJRaXhqUVVNdlFrRXNUMEZFSzBJN1FVRkJRU3hSUVVOMFFrTXNUMEZFYzBJc1kwRkRkRUpCTEU5QlJITkNPenRCUVVWMlEyNUNMRmRCUVU5RkxFTkJRVkFzU1VGQldUdEJRVU5XUlN4VFFVRkhZeXhQUVVSUE8wRkJSVlppTEZOQlFVZGpPMEZCUms4c1MwRkJXanRCUVVsRU8wRkJRMFFzVTBGQlQyNUNMRTFCUVZBN1FVRkRSRHM3UVVGRlJDeEpRVUZOYjBJc2FVSkJRV2xDTEZOQlFXcENRU3hqUVVGcFFpeERRVUZET1VJc1EwRkJSRHRCUVVGQkxGTkJRVTlCTEVWQlFVVXJRaXhoUVVGR0xFbEJRVzFDTDBJc1JVRkJSV2RETEZkQlFYSkNMRWxCUVc5RGFFTXNRMEZCTTBNN1FVRkJRU3hEUVVGMlFqczdhMEpCUldVc1ZVRkJRMEVzUTBGQlJDeEZRVUZKVEN4TFFVRktMRVZCUVdNN1FVRkRNMElzVFVGQlRYRkRMR05CUVdOR0xHVkJRV1U1UWl4RFFVRm1MRU5CUVhCQ08wRkJRMEVzVTBGQlVXZERMRmxCUVZsd1F5eFBRVUZpTEVkQlEweE1MR05CUVdOdFF5eHZRa0ZCYjBJeFFpeERRVUZ3UWl4RFFVRmtPMEZCUTBWT0xHVkJRVmNzVjBGRVlqdEJRVVZGUkN4dlFrRkJaMEpwUXp0QlFVWnNRaXhMUVVkTEwwSXNTMEZJVEN4RlFVUkxMRWRCVFV4S0xHTkJRV05uUXl4dlFrRkJiMEoyUWl4RFFVRndRaXhEUVVGa08wRkJRMFZPTEdWQlFWY3NWMEZFWWp0QlFVVkZSQ3h2UWtGQlowSTRRanRCUVVac1FpeExRVWRMTlVJc1MwRklUQ3hGUVU1R08wRkJWMFFzUXlJc0ltWnBiR1VpT2lKMGIzVmphR1Z6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSFpoYkhWbElHWnliMjBnSnk0dmRtRnNkV1VuTzF4dWFXMXdiM0owSUdOdmJYQnZjMmwwWlNCbWNtOXRJQ2N1TDJOdmJYQnZjMmwwWlNjN1hHNXBiWEJ2Y25RZ2NHRnlZV3hzWld3Z1puSnZiU0FuTGk5d1lYSmhiR3hsYkNjN1hHNWNibVoxYm1OMGFXOXVJR055WldGMFpWUnZkV05vWlhNb2FXNXBkR2xoYkZSdmRXTm9aWE1zSUhzZ1pYWmxiblJVYjFSdmRXTm9aWE1zSUcxdmRtVkZkbVZ1ZEN3Z0xpNHVjSEp2Y0hNZ2ZTa2dlMXh1SUNCamIyNXpkQ0IwYjNWamFHVnpJRDBnY0dGeVlXeHNaV3dvYldGd1EyOXZjbVJ6Vkc5QlkzUnBiMjV6S0dsdWFYUnBZV3hVYjNWamFHVnpLU3dnZTF4dUlDQWdJSEJ5WlhabGJuUkVaV1poZFd4ME9pQjBjblZsTEZ4dUlDQWdJQzR1TG5CeWIzQnpYRzRnSUgwcE8xeHVYRzRnSUdaMWJtTjBhVzl1SUhWd1pHRjBaVlJ2ZFdOb1pYTW9aU2tnZTF4dUlDQWdJR2xtSUNod2NtOXdjeTV3Y21WMlpXNTBSR1ZtWVhWc2RDa2daUzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BPMXh1WEc0Z0lDQWdZMjl1YzNRZ2JHRjBaWE4wVkc5MVkyaGxjeUE5SUdWMlpXNTBWRzlVYjNWamFHVnpLR1VwTzF4dUlDQWdJSFZ3WkdGMFpVRmpkR2x2YmxkcGRHaFViM1ZqYUdWektIUnZkV05vWlhNc0lHeGhkR1Z6ZEZSdmRXTm9aWE1wTzF4dUlDQjlYRzVjYmlBZ2RHOTFZMmhsY3k1elpYUlFjbTl3Y3loN1hHNGdJQ0FnWDI5dVUzUmhjblE2SUNncElEMCtJR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtHMXZkbVZGZG1WdWRDd2dkWEJrWVhSbFZHOTFZMmhsY3lrc1hHNGdJQ0FnWDI5dVUzUnZjRG9nS0NrZ1BUNGdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExuSmxiVzkyWlVWMlpXNTBUR2x6ZEdWdVpYSW9iVzkyWlVWMlpXNTBMQ0IxY0dSaGRHVlViM1ZqYUdWektWeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdkRzkxWTJobGN6dGNibjFjYmx4dVpuVnVZM1JwYjI0Z2JXRndRMjl2Y21SelZHOUJZM1JwYjI1ektHTnZiM0prY3lrZ2UxeHVJQ0JzWlhRZ1lXTjBhVzl1Y3lBOUlGdGRPMXh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHTnZiM0prY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2VDd2dlU0I5SUQwZ1kyOXZjbVJ6VzJsZE8xeHVJQ0FnSUdGamRHbHZibk5iYVYwZ1BTQmpiMjF3YjNOcGRHVW9lMXh1SUNBZ0lDQWdlRG9nZG1Gc2RXVW9lQ2tzWEc0Z0lDQWdJQ0I1T2lCMllXeDFaU2g1S1Z4dUlDQWdJSDBwTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJoWTNScGIyNXpPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQjFjR1JoZEdWQlkzUnBiMjVYYVhSb1ZHOTFZMmhsY3loMGIzVmphR1Z6TENCdVpYZFViM1ZqYUdWektTQjdYRzRnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JtVjNWRzkxWTJobGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJR052Ym5OMElIc2dlQ3dnZVNCOUlEMGdibVYzVkc5MVkyaGxjMXRwWFR0Y2JpQWdJQ0JqYjI1emRDQjBiM1ZqYUVGamRHbHZibk1nUFNCMGIzVmphR1Z6TG1kbGRFTm9hV3hrY21WdUtDazdYRzRnSUNBZ1kyOXVjM1FnZEc5MVkyaEJZM1JwYjI0Z1BTQjBiM1ZqYUVGamRHbHZibk5iYVYwN1hHNGdJQ0FnYVdZZ0tIUnZkV05vUVdOMGFXOXVJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lIUnZkV05vUVdOMGFXOXVMbmd1YzJWMEtIZ3BPMXh1SUNBZ0lDQWdkRzkxWTJoQlkzUnBiMjR1ZVM1elpYUW9lU2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIUnZkV05vWlhNdVlXUmtRV04wYVc5dUtHTnZiWEJ2YzJsMFpTaDdYRzRnSUNBZ0lDQWdJSGc2SUhaaGJIVmxLSGdwTEZ4dUlDQWdJQ0FnSUNCNU9pQjJZV3gxWlNoNUtWeHVJQ0FnSUNBZ2ZTa3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzVqYjI1emRDQnRiM1Z6WlVWMlpXNTBWRzlVYjNWamFHVnpJRDBnS0hzZ2NHRm5aVmdzSUhCaFoyVlpJSDBwSUQwK0lGdDdJSGc2SUhCaFoyVllMQ0I1T2lCd1lXZGxXU0I5WFR0Y2JtTnZibk4wSUhSdmRXTm9SWFpsYm5SVWIxUnZkV05vWlhNZ1BTQW9leUIwYjNWamFHVnpJSDBwSUQwK0lHVjRkSEpoWTNSRGIyOXlaSE1vZEc5MVkyaGxjeWs3WEc1Y2JtWjFibU4wYVc5dUlHVjRkSEpoWTNSRGIyOXlaSE1vZEc5MVkyaGxjeWtnZTF4dUlDQnNaWFFnWTI5dmNtUnpJRDBnVzEwN1hHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnZEc5MVkyaGxjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWTJ4cFpXNTBXQ3dnWTJ4cFpXNTBXU0I5SUQwZ2RHOTFZMmhsYzF0cFhUdGNiaUFnSUNCamIyOXlaSE5iYVYwZ1BTQjdYRzRnSUNBZ0lDQjRPaUJqYkdsbGJuUllMRnh1SUNBZ0lDQWdlVG9nWTJ4cFpXNTBXVnh1SUNBZ0lIMDdYRzRnSUgxY2JpQWdjbVYwZFhKdUlHTnZiM0prY3p0Y2JuMWNibHh1WTI5dWMzUWdaMlYwVG1GMGFYWmxSWFpsYm5RZ1BTQW9aU2tnUFQ0Z1pTNXZjbWxuYVc1aGJFVjJaVzUwSUh4OElHVXVibUYwYVhabFJYWmxiblFnZkh3Z1pUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR1VzSUhCeWIzQnpLU0E5UGlCN1hHNGdJR052Ym5OMElHNWhkR2wyWlVWMlpXNTBJRDBnWjJWMFRtRjBhWFpsUlhabGJuUW9aU2s3WEc0Z0lISmxkSFZ5YmlBb2JtRjBhWFpsUlhabGJuUXVkRzkxWTJobGN5a2dQMXh1SUNBZ0lHTnlaV0YwWlZSdmRXTm9aWE1vZEc5MVkyaEZkbVZ1ZEZSdlZHOTFZMmhsY3lobEtTd2dlMXh1SUNBZ0lDQWdiVzkyWlVWMlpXNTBPaUFuZEc5MVkyaHRiM1psSnl4Y2JpQWdJQ0FnSUdWMlpXNTBWRzlVYjNWamFHVnpPaUIwYjNWamFFVjJaVzUwVkc5VWIzVmphR1Z6TEZ4dUlDQWdJQ0FnTGk0dWNISnZjSE5jYmlBZ0lDQjlLU0E2WEc0Z0lDQWdZM0psWVhSbFZHOTFZMmhsY3lodGIzVnpaVVYyWlc1MFZHOVViM1ZqYUdWektHVXBMQ0I3WEc0Z0lDQWdJQ0J0YjNabFJYWmxiblE2SUNkdGIzVnpaVzF2ZG1VbkxGeHVJQ0FnSUNBZ1pYWmxiblJVYjFSdmRXTm9aWE02SUcxdmRYTmxSWFpsYm5SVWIxUnZkV05vWlhNc1hHNGdJQ0FnSUNBdUxpNXdjbTl3YzF4dUlDQWdJSDBwTzF4dWZUdGNiaUpkZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjdGlvbnMvdG91Y2hlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFRyYWNrT2Zmc2V0ID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFRyYWNrT2Zmc2V0LCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBUcmFja09mZnNldCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2tPZmZzZXQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBUcmFja09mZnNldC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIGFjdGlvbiA9IHRoaXMucHJvcHMuYWN0aW9uO1xuXG4gICAgdGhpcy5hcHBseU9mZnNldCA9ICgwLCBfdHJhbnNmb3JtZXJzLmFwcGx5T2Zmc2V0KShhY3Rpb24uZ2V0KCksIHRoaXMuY3VycmVudCk7XG4gIH07XG5cbiAgVHJhY2tPZmZzZXQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgYWN0aW9uID0gdGhpcy5wcm9wcy5hY3Rpb247XG5cbiAgICByZXR1cm4gdGhpcy5hcHBseU9mZnNldChhY3Rpb24uZ2V0KCkpO1xuICB9O1xuXG4gIHJldHVybiBUcmFja09mZnNldDtcbn0oXzIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhY3Rpb24sIHByb3BzKSB7XG4gIHJldHVybiBuZXcgVHJhY2tPZmZzZXQoX2V4dGVuZHMoeyBhY3Rpb246IGFjdGlvbiB9LCBwcm9wcykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1J5WVdOckxXOW1abk5sZEM1cWN5SmRMQ0p1WVcxbGN5STZXeUpVY21GamEwOW1abk5sZENJc0ltOXVVM1JoY25RaUxDSmhZM1JwYjI0aUxDSndjbTl3Y3lJc0ltRndjR3g1VDJabWMyVjBJaXdpWjJWMElpd2lZM1Z5Y21WdWRDSXNJblZ3WkdGMFpTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVVFN096czdRVUZEUVRzN096czdPenM3T3p0SlFVVk5RU3hYT3pzN096czdPenM3ZDBKQlEwcERMRThzYzBKQlFWVTdRVUZCUVN4UlFVTkJReXhOUVVSQkxFZEJRMWNzUzBGQlMwTXNTMEZFYUVJc1EwRkRRVVFzVFVGRVFUczdRVUZGVWl4VFFVRkxSU3hYUVVGTUxFZEJRVzFDTEN0Q1FVRlpSaXhQUVVGUFJ5eEhRVUZRTEVWQlFWb3NSVUZCTUVJc1MwRkJTME1zVDBGQkwwSXNRMEZCYmtJN1FVRkRSQ3hIT3p0M1FrRkZSRU1zVFN4eFFrRkJVenRCUVVGQkxGRkJRME5NTEUxQlJFUXNSMEZEV1N4TFFVRkxReXhMUVVScVFpeERRVU5EUkN4TlFVUkVPenRCUVVWUUxGZEJRVThzUzBGQlMwVXNWMEZCVEN4RFFVRnBRa1lzVDBGQlQwY3NSMEZCVUN4RlFVRnFRaXhEUVVGUU8wRkJRMFFzUnpzN096czdhMEpCUjFrc1ZVRkJRMGdzVFVGQlJDeEZRVUZUUXl4TFFVRlVPMEZCUVVFc1UwRkJiVUlzU1VGQlNVZ3NWMEZCU2l4WlFVRnJRa1VzWTBGQmJFSXNTVUZCTmtKRExFdEJRVGRDTEVWQlFXNUNPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSjBjbUZqYXkxdlptWnpaWFF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dkp6dGNibWx0Y0c5eWRDQjdJR0Z3Y0d4NVQyWm1jMlYwSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1J5WVc1elptOXliV1Z5Y3ljN1hHNWNibU5zWVhOeklGUnlZV05yVDJabWMyVjBJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR0ZqZEdsdmJpQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0IwYUdsekxtRndjR3g1VDJabWMyVjBJRDBnWVhCd2JIbFBabVp6WlhRb1lXTjBhVzl1TG1kbGRDZ3BMQ0IwYUdsekxtTjFjbkpsYm5RcE8xeHVJQ0I5WEc1Y2JpQWdkWEJrWVhSbEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1lXTjBhVzl1SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbUZ3Y0d4NVQyWm1jMlYwS0dGamRHbHZiaTVuWlhRb0tTazdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR0ZqZEdsdmJpd2djSEp2Y0hNcElEMCtJRzVsZHlCVWNtRmphMDltWm5ObGRDaDdJR0ZqZEdsdmJpd2dMaTR1Y0hKdmNITWdmU2s3WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL3RyYWNrLW9mZnNldC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY2hhaW4gPSByZXF1aXJlKCcuL2NoYWluJyk7XG5cbnZhciBfY2hhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hhaW4pO1xuXG52YXIgX3BhcmFsbGVsID0gcmVxdWlyZSgnLi9wYXJhbGxlbCcpO1xuXG52YXIgX3BhcmFsbGVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcmFsbGVsKTtcblxudmFyIF9kZWxheSA9IHJlcXVpcmUoJy4vZGVsYXknKTtcblxudmFyIF9kZWxheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWxheSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHBhcmFsbGVsIEFjdGlvbiBjb21wb3NlZCBvZiBjaGFpbmVkXG4gKiBkZWxheSBhbmQgYWN0aW9ucy4gSW50ZXJ2YWwgY2FuIGJlIGVpdGhlciBhIG51bWJlclxuICogdG8gbXVsdGlwbHkgYnkgYGlgIG9yIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHByb3ZpZGVkIGBpYFxuICpcbiAqIFN0cmFpZ2h0IGNyaWJiZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL2Jsb2IvMjRjNzJmNTEzZTQ4ZjBiZGM0MDgyMGI0MzI2MjMyOGZlMmMzMDFkNC9MaWJyYXJpZXMvQW5pbWF0ZWQvc3JjL0FuaW1hdGVkSW1wbGVtZW50YXRpb24uanMjTDIwMzFcbiAqIF4gVGhpcyBmdW5jdGlvbiBzb2xkIGEgcHJldmlvdXNseS1jb25mbGljdGVkIG1lIG9uIHRoZSBtZXJpdCBvZiBtb3ZpbmcgZnJvbVxuICogalF1ZXJ5LXN0eWxlIG11bHRpLXByb3BlcnR5IGFuaW1hdGlvbnMgdG8gc2luZ2xlLXByb3BlcnR5LlxuICogQHBhcmFtICB7YXJyYXl9IGFjdGlvbnNcbiAqIEBwYXJhbSAge2Z1bmN0aW9uIHwgbnVtYmVyfSBpbnRlcnZhbFxuICogQHJldHVybiB7QWN0aW9ufVxuICovXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgaW50ZXJ2YWwsIG9uQ29tcGxldGUpIHtcbiAgdmFyIGludGVydmFsSXNGdW5jdGlvbiA9ICgwLCBfdXRpbHMuaXNGdW5jKShpbnRlcnZhbCk7XG5cbiAgcmV0dXJuICgwLCBfcGFyYWxsZWwyLmRlZmF1bHQpKGFjdGlvbnMubWFwKGZ1bmN0aW9uIChhY3Rpb24sIGkpIHtcbiAgICB2YXIgdGltZVRvRGVsYXkgPSBpbnRlcnZhbElzRnVuY3Rpb24gPyBpbnRlcnZhbChpKSA6IGkgKiBpbnRlcnZhbDtcbiAgICByZXR1cm4gKDAsIF9jaGFpbjIuZGVmYXVsdCkoWygwLCBfZGVsYXkyLmRlZmF1bHQpKHRpbWVUb0RlbGF5KSwgYWN0aW9uXSk7XG4gIH0pLCB7IG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzTjBZV2RuWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHNpWVdOMGFXOXVjeUlzSW1sdWRHVnlkbUZzSWl3aWIyNURiMjF3YkdWMFpTSXNJbWx1ZEdWeWRtRnNTWE5HZFc1amRHbHZiaUlzSW0xaGNDSXNJbUZqZEdsdmJpSXNJbWtpTENKMGFXMWxWRzlFWld4aGVTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlJVRTdPenM3T3pzN096czdPenRyUWtGWlpTeFZRVUZEUVN4UFFVRkVMRVZCUVZWRExGRkJRVllzUlVGQmIwSkRMRlZCUVhCQ0xFVkJRVzFETzBGQlEyaEVMRTFCUVUxRExIRkNRVUZ4UWl4dFFrRkJUMFlzVVVGQlVDeERRVUV6UWpzN1FVRkZRU3hUUVVGUExIZENRVUZUUkN4UlFVRlJTU3hIUVVGU0xFTkJRVmtzVlVGQlEwTXNUVUZCUkN4RlFVRlRReXhEUVVGVUxFVkJRV1U3UVVGRGVrTXNVVUZCVFVNc1kwRkJaVW9zYTBKQlFVUXNSMEZCZFVKR0xGTkJRVk5MTEVOQlFWUXNRMEZCZGtJc1IwRkJjVU5CTEVsQlFVbE1MRkZCUVRkRU8wRkJRMEVzVjBGQlR5eHhRa0ZCVFN4RFFVTllMSEZDUVVGTlRTeFhRVUZPTEVOQlJGY3NSVUZGV0VZc1RVRkdWeXhEUVVGT0xFTkJRVkE3UVVGSlJDeEhRVTVsTEVOQlFWUXNSVUZOU0N4RlFVRkZTQ3h6UWtGQlJpeEZRVTVITEVOQlFWQTdRVUZQUkN4RElpd2labWxzWlNJNkluTjBZV2RuWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnWTJoaGFXNGdabkp2YlNBbkxpOWphR0ZwYmljN1hHNXBiWEJ2Y25RZ2NHRnlZV3hzWld3Z1puSnZiU0FuTGk5d1lYSmhiR3hsYkNjN1hHNXBiWEJ2Y25RZ1pHVnNZWGtnWm5KdmJTQW5MaTlrWld4aGVTYzdYRzVwYlhCdmNuUWdleUJwYzBaMWJtTWdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNHZLaXBjYmlBcUlFTnlaV0YwWlhNZ1lTQnVaWGNnY0dGeVlXeHNaV3dnUVdOMGFXOXVJR052YlhCdmMyVmtJRzltSUdOb1lXbHVaV1JjYmlBcUlHUmxiR0Y1SUdGdVpDQmhZM1JwYjI1ekxpQkpiblJsY25aaGJDQmpZVzRnWW1VZ1pXbDBhR1Z5SUdFZ2JuVnRZbVZ5WEc0Z0tpQjBieUJ0ZFd4MGFYQnNlU0JpZVNCZ2FXQWdiM0lnWVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z1ltVWdjSEp2ZG1sa1pXUWdZR2xnWEc0Z0tseHVJQ29nVTNSeVlXbG5hSFFnWTNKcFltSmxaQ0JtY205dElHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW1ZV05sWW05dmF5OXlaV0ZqZEMxdVlYUnBkbVV2WW14dllpOHlOR00zTW1ZMU1UTmxORGhtTUdKa1l6UXdPREl3WWpRek1qWXlNekk0Wm1VeVl6TXdNV1EwTDB4cFluSmhjbWxsY3k5QmJtbHRZWFJsWkM5emNtTXZRVzVwYldGMFpXUkpiWEJzWlcxbGJuUmhkR2x2Ymk1cWN5Tk1NakF6TVZ4dUlDb2dYaUJVYUdseklHWjFibU4wYVc5dUlITnZiR1FnWVNCd2NtVjJhVzkxYzJ4NUxXTnZibVpzYVdOMFpXUWdiV1VnYjI0Z2RHaGxJRzFsY21sMElHOW1JRzF2ZG1sdVp5Qm1jbTl0WEc0Z0tpQnFVWFZsY25rdGMzUjViR1VnYlhWc2RHa3RjSEp2Y0dWeWRIa2dZVzVwYldGMGFXOXVjeUIwYnlCemFXNW5iR1V0Y0hKdmNHVnlkSGt1WEc0Z0tpQkFjR0Z5WVcwZ0lIdGhjbkpoZVgwZ1lXTjBhVzl1YzF4dUlDb2dRSEJoY21GdElDQjdablZ1WTNScGIyNGdmQ0J1ZFcxaVpYSjlJR2x1ZEdWeWRtRnNYRzRnS2lCQWNtVjBkWEp1SUh0QlkzUnBiMjU5WEc0Z0tpOWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaGhZM1JwYjI1ekxDQnBiblJsY25aaGJDd2diMjVEYjIxd2JHVjBaU2tnUFQ0Z2UxeHVJQ0JqYjI1emRDQnBiblJsY25aaGJFbHpSblZ1WTNScGIyNGdQU0JwYzBaMWJtTW9hVzUwWlhKMllXd3BPMXh1WEc0Z0lISmxkSFZ5YmlCd1lYSmhiR3hsYkNoaFkzUnBiMjV6TG0xaGNDZ29ZV04wYVc5dUxDQnBLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdkR2x0WlZSdlJHVnNZWGtnUFNBb2FXNTBaWEoyWVd4SmMwWjFibU4wYVc5dUtTQS9JR2x1ZEdWeWRtRnNLR2twSURvZ2FTQXFJR2x1ZEdWeWRtRnNPMXh1SUNBZ0lISmxkSFZ5YmlCamFHRnBiaWhiWEc0Z0lDQWdJQ0JrWld4aGVTaDBhVzFsVkc5RVpXeGhlU2tzWEc0Z0lDQWdJQ0JoWTNScGIyNWNiaUFnSUNCZEtUdGNiaUFnZlNrc0lIc2diMjVEYjIxd2JHVjBaU0I5S1R0Y2JuMDdYRzRpWFgwPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjdGlvbnMvc3RhZ2dlci5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCdmcmFtZXN5bmMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgY2xvc2VkLWZvcm0gZGFtcGVkIGhhcm1vbmljIG9zY2lsbGF0aW5nIHNwcmluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3IsIHNwcmluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGEgZGlyZWN0IHBvcnQgb2YgQWRhbSBNaXNraWV3aWN6J3MgKEBza2V2eSkgUmVhY3QgQW5pbWF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUFIgIzE1MzIyIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNTMyMi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNzOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbXBpbmc6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0aWZmbmVzczogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRhbSBNaXNraWV3aWN6OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAc2tldnkgKHR3aXR0ZXIuY29tL3NrZXZ5LCBnaXRodWIuY29tL3NrZXZ5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblxudmFyIFNwcmluZyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhTcHJpbmcsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFNwcmluZygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3ByaW5nKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgU3ByaW5nLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgdmVsb2NpdHkgPSBfcHJvcHMudmVsb2NpdHksXG4gICAgICAgIHRvID0gX3Byb3BzLnRvLFxuICAgICAgICBmcm9tID0gX3Byb3BzLmZyb207XG5cbiAgICB0aGlzLnQgPSAwO1xuICAgIHRoaXMuaW5pdGlhbFZlbG9jaXR5ID0gdmVsb2NpdHkgPyB2ZWxvY2l0eSAvIDEwMDAgOiAwLjA7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgdGhpcy5kZWx0YSA9IHRvIC0gZnJvbTtcbiAgfTtcblxuICBTcHJpbmcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIHN0aWZmbmVzcyA9IF9wcm9wczIuc3RpZmZuZXNzLFxuICAgICAgICBkYW1waW5nID0gX3Byb3BzMi5kYW1waW5nLFxuICAgICAgICBtYXNzID0gX3Byb3BzMi5tYXNzLFxuICAgICAgICBmcm9tID0gX3Byb3BzMi5mcm9tLFxuICAgICAgICB0byA9IF9wcm9wczIudG8sXG4gICAgICAgIHJlc3RTcGVlZCA9IF9wcm9wczIucmVzdFNwZWVkLFxuICAgICAgICByZXN0RGlzcGxhY2VtZW50ID0gX3Byb3BzMi5yZXN0RGlzcGxhY2VtZW50O1xuICAgIHZhciBkZWx0YSA9IHRoaXMuZGVsdGEsXG4gICAgICAgIGluaXRpYWxWZWxvY2l0eSA9IHRoaXMuaW5pdGlhbFZlbG9jaXR5O1xuXG5cbiAgICB2YXIgdGltZURlbHRhID0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpIC8gMTAwMDtcbiAgICB2YXIgdCA9IHRoaXMudCA9IHRoaXMudCArIHRpbWVEZWx0YTtcblxuICAgIHZhciBkYW1waW5nUmF0aW8gPSBkYW1waW5nIC8gKDIgKiBNYXRoLnNxcnQoc3RpZmZuZXNzICogbWFzcykpO1xuICAgIHZhciBhbmd1bGFyRnJlcSA9IE1hdGguc3FydChzdGlmZm5lc3MgLyBtYXNzKTtcbiAgICB2YXIgZXhwb0RlY2F5ID0gYW5ndWxhckZyZXEgKiBNYXRoLnNxcnQoMS4wIC0gZGFtcGluZ1JhdGlvICogZGFtcGluZ1JhdGlvKTtcblxuICAgIHZhciB4MCA9IDE7XG4gICAgdmFyIG9zY2lsbGF0aW9uID0gMC4wO1xuXG4gICAgLy8gVW5kZXJkYW1wZWRcbiAgICBpZiAoZGFtcGluZ1JhdGlvIDwgMSkge1xuICAgICAgdmFyIGVudmVsb3BlID0gTWF0aC5leHAoLWRhbXBpbmdSYXRpbyAqIGFuZ3VsYXJGcmVxICogdCk7XG4gICAgICBvc2NpbGxhdGlvbiA9IGVudmVsb3BlICogKChpbml0aWFsVmVsb2NpdHkgKyBkYW1waW5nUmF0aW8gKiBhbmd1bGFyRnJlcSAqIHgwKSAvIGV4cG9EZWNheSAqIE1hdGguc2luKGV4cG9EZWNheSAqIHQpICsgeDAgKiBNYXRoLmNvcyhleHBvRGVjYXkgKiB0KSk7XG4gICAgICB0aGlzLnZlbG9jaXR5ID0gZW52ZWxvcGUgKiAoTWF0aC5jb3MoZXhwb0RlY2F5ICogdCkgKiAoaW5pdGlhbFZlbG9jaXR5ICsgZGFtcGluZ1JhdGlvICogYW5ndWxhckZyZXEgKiB4MCkgLSBleHBvRGVjYXkgKiB4MCAqIE1hdGguc2luKGV4cG9EZWNheSAqIHQpKSAtIGRhbXBpbmdSYXRpbyAqIGFuZ3VsYXJGcmVxICogZW52ZWxvcGUgKiAoTWF0aC5zaW4oZXhwb0RlY2F5ICogdCkgKiAoaW5pdGlhbFZlbG9jaXR5ICsgZGFtcGluZ1JhdGlvICogYW5ndWxhckZyZXEgKiB4MCkgLyBleHBvRGVjYXkgKyB4MCAqIE1hdGguY29zKGV4cG9EZWNheSAqIHQpKTtcblxuICAgICAgLy8gQ3JpdGljYWxseSBkYW1wZWRcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9lbnZlbG9wZSA9IE1hdGguZXhwKC1hbmd1bGFyRnJlcSAqIHQpO1xuICAgICAgb3NjaWxsYXRpb24gPSBfZW52ZWxvcGUgKiAoeDAgKyAoaW5pdGlhbFZlbG9jaXR5ICsgYW5ndWxhckZyZXEgKiB4MCkgKiB0KTtcbiAgICAgIHRoaXMudmVsb2NpdHkgPSBfZW52ZWxvcGUgKiAodCAqIGluaXRpYWxWZWxvY2l0eSAqIGFuZ3VsYXJGcmVxIC0gdCAqIHgwICogKGFuZ3VsYXJGcmVxICogYW5ndWxhckZyZXEpICsgaW5pdGlhbFZlbG9jaXR5KTtcbiAgICB9XG5cbiAgICB2YXIgZnJhY3Rpb24gPSAxIC0gb3NjaWxsYXRpb247XG4gICAgdmFyIHBvc2l0aW9uID0gZnJvbSArIGZyYWN0aW9uICogZGVsdGE7XG5cbiAgICAvLyBDaGVjayBpZiBzaW11bGF0aW9uIGlzIGNvbXBsZXRlXG4gICAgLy8gV2UgZG8gdGhpcyBoZXJlIGluc3RlYWQgb2YgYGlzQWN0aW9uQ29tcGxldGVgIGFzIGl0IGFsbG93cyB1c1xuICAgIC8vIHRvIGNsYW1wIHRvIGVuZCBkdXJpbmcgdXBkYXRlKVxuICAgIHZhciBpc0JlbG93VmVsb2NpdHlUaHJlc2hvbGQgPSBNYXRoLmFicyh0aGlzLnZlbG9jaXR5KSA8PSByZXN0U3BlZWQ7XG4gICAgdmFyIGlzQmVsb3dEaXNwbGFjZW1lbnRUaHJlc2hvbGQgPSBNYXRoLmFicyh0byAtIHBvc2l0aW9uKSA8PSByZXN0RGlzcGxhY2VtZW50O1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQmVsb3dWZWxvY2l0eVRocmVzaG9sZCAmJiBpc0JlbG93RGlzcGxhY2VtZW50VGhyZXNob2xkO1xuXG4gICAgaWYgKHRoaXMuaXNDb21wbGV0ZSkge1xuICAgICAgcG9zaXRpb24gPSB0bztcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH07XG5cbiAgU3ByaW5nLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICB9O1xuXG4gIHJldHVybiBTcHJpbmc7XG59KF8yLmRlZmF1bHQpO1xuXG5TcHJpbmcuZGVmYXVsdFByb3BzID0ge1xuICBzdGlmZm5lc3M6IDEwMCxcbiAgZGFtcGluZzogMTAsXG4gIG1hc3M6IDEuMCxcbiAgdmVsb2NpdHk6IDAuMCxcbiAgZnJvbTogMC4wLFxuICB0bzogMC4wLFxuICByZXN0U3BlZWQ6IDAuMDEsXG4gIHJlc3REaXNwbGFjZW1lbnQ6IDAuMDFcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IFNwcmluZyhwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzTndjbWx1Wnk1cWN5SmRMQ0p1WVcxbGN5STZXeUpUY0hKcGJtY2lMQ0p2YmxOMFlYSjBJaXdpY0hKdmNITWlMQ0oyWld4dlkybDBlU0lzSW5Sdklpd2labkp2YlNJc0luUWlMQ0pwYm1sMGFXRnNWbVZzYjJOcGRIa2lMQ0pwYzBOdmJYQnNaWFJsSWl3aVpHVnNkR0VpTENKMWNHUmhkR1VpTENKemRHbG1abTVsYzNNaUxDSmtZVzF3YVc1bklpd2liV0Z6Y3lJc0luSmxjM1JUY0dWbFpDSXNJbkpsYzNSRWFYTndiR0ZqWlcxbGJuUWlMQ0owYVcxbFJHVnNkR0VpTENKa1lXMXdhVzVuVW1GMGFXOGlMQ0pOWVhSb0lpd2ljM0Z5ZENJc0ltRnVaM1ZzWVhKR2NtVnhJaXdpWlhod2IwUmxZMkY1SWl3aWVEQWlMQ0p2YzJOcGJHeGhkR2x2YmlJc0ltVnVkbVZzYjNCbElpd2laWGh3SWl3aWMybHVJaXdpWTI5eklpd2labkpoWTNScGIyNGlMQ0p3YjNOcGRHbHZiaUlzSW1selFtVnNiM2RXWld4dlkybDBlVlJvY21WemFHOXNaQ0lzSW1GaWN5SXNJbWx6UW1Wc2IzZEVhWE53YkdGalpXMWxiblJVYUhKbGMyaHZiR1FpTENKcGMwRmpkR2x2YmtOdmJYQnNaWFJsSWl3aVpHVm1ZWFZzZEZCeWIzQnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCYlVKQk96czdPMEZCUTBFN096czdPenM3T3l0bFFYQkNRVHM3T3pzN096czdPenM3T3pzN096czdPenM3TzBsQmMwSk5RU3hOT3pzN096czdPenM3YlVKQldVcERMRThzYzBKQlFWVTdRVUZCUVN4cFFrRkRkVUlzUzBGQlMwTXNTMEZFTlVJN1FVRkJRU3hSUVVOQlF5eFJRVVJCTEZWQlEwRkJMRkZCUkVFN1FVRkJRU3hSUVVOVlF5eEZRVVJXTEZWQlExVkJMRVZCUkZZN1FVRkJRU3hSUVVOalF5eEpRVVJrTEZWQlEyTkJMRWxCUkdRN08wRkJSVklzVTBGQlMwTXNRMEZCVEN4SFFVRlRMRU5CUVZRN1FVRkRRU3hUUVVGTFF5eGxRVUZNTEVkQlFYVkNTaXhYUVVGWFFTeFhRVUZYTEVsQlFYUkNMRWRCUVRaQ0xFZEJRWEJFTzBGQlEwRXNVMEZCUzBzc1ZVRkJUQ3hIUVVGclFpeExRVUZzUWp0QlFVTkJMRk5CUVV0RExFdEJRVXdzUjBGQllVd3NTMEZCUzBNc1NVRkJiRUk3UVVGRFJDeEhPenR0UWtGRlJFc3NUU3h4UWtGQlV6dEJRVUZCTEd0Q1FVTnhSU3hMUVVGTFVpeExRVVF4UlR0QlFVRkJMRkZCUTBOVExGTkJSRVFzVjBGRFEwRXNVMEZFUkR0QlFVRkJMRkZCUTFsRExFOUJSRm9zVjBGRFdVRXNUMEZFV2p0QlFVRkJMRkZCUTNGQ1F5eEpRVVJ5UWl4WFFVTnhRa0VzU1VGRWNrSTdRVUZCUVN4UlFVTXlRbElzU1VGRU0wSXNWMEZETWtKQkxFbEJSRE5DTzBGQlFVRXNVVUZEYVVORUxFVkJSR3BETEZkQlEybERRU3hGUVVScVF6dEJRVUZCTEZGQlEzRkRWU3hUUVVSeVF5eFhRVU54UTBFc1UwRkVja003UVVGQlFTeFJRVU5uUkVNc1owSkJSR2hFTEZkQlEyZEVRU3huUWtGRWFFUTdRVUZCUVN4UlFVVkRUaXhMUVVaRUxFZEJSVFJDTEVsQlJqVkNMRU5CUlVOQkxFdEJSa1E3UVVGQlFTeFJRVVZSUml4bFFVWlNMRWRCUlRSQ0xFbEJSalZDTEVOQlJWRkJMR1ZCUmxJN096dEJRVWxRTEZGQlFVMVRMRmxCUVZrc2RVTkJRWFZDTEVsQlFYcERPMEZCUTBFc1VVRkJUVllzU1VGQlNTeExRVUZMUVN4RFFVRk1MRWRCUVZNc1MwRkJTMEVzUTBGQlRDeEhRVUZUVlN4VFFVRTFRanM3UVVGRlFTeFJRVUZOUXl4bFFVRmxUQ3hYUVVGWExFbEJRVWxOTEV0QlFVdERMRWxCUVV3c1EwRkJWVklzV1VGQldVVXNTVUZCZEVJc1EwRkJaaXhEUVVGeVFqdEJRVU5CTEZGQlFVMVBMR05CUVdOR0xFdEJRVXRETEVsQlFVd3NRMEZCVlZJc1dVRkJXVVVzU1VGQmRFSXNRMEZCY0VJN1FVRkRRU3hSUVVGTlVTeFpRVUZaUkN4alFVRmpSaXhMUVVGTFF5eEpRVUZNTEVOQlFWVXNUVUZCVDBZc1pVRkJaVUVzV1VGQmFFTXNRMEZCYUVNN08wRkJSVUVzVVVGQlRVc3NTMEZCU3l4RFFVRllPMEZCUTBFc1VVRkJTVU1zWTBGQll5eEhRVUZzUWpzN1FVRkZRVHRCUVVOQkxGRkJRVWxPTEdWQlFXVXNRMEZCYmtJc1JVRkJjMEk3UVVGRGNFSXNWVUZCVFU4c1YwRkJWMDRzUzBGQlMwOHNSMEZCVEN4RFFVRlRMRU5CUVVOU0xGbEJRVVFzUjBGQlowSkhMRmRCUVdoQ0xFZEJRVGhDWkN4RFFVRjJReXhEUVVGcVFqdEJRVU5CYVVJc2IwSkJRV05ETEZsQlFXRXNRMEZCUTJwQ0xHdENRVUZyUWxVc1pVRkJaVWNzVjBGQlppeEhRVUUyUWtVc1JVRkJhRVFzU1VGQmMwUkVMRk5CUVhaRUxFZEJRVzlGU0N4TFFVRkxVU3hIUVVGTUxFTkJRVk5NTEZsQlFWbG1MRU5CUVhKQ0xFTkJRWEJGTEVkQlFTdEdaMElzUzBGQlMwb3NTMEZCUzFNc1IwRkJUQ3hEUVVGVFRpeFpRVUZaWml4RFFVRnlRaXhEUVVGb1NDeERRVUZrTzBGQlEwRXNWMEZCUzBnc1VVRkJUQ3hIUVVGcFFuRkNMRmxCUVdGT0xFdEJRVXRUTEVkQlFVd3NRMEZCVTA0c1dVRkJXV1lzUTBGQmNrSXNTMEZCTWtKRExHdENRVUZyUWxVc1pVRkJaVWNzVjBGQlppeEhRVUUyUWtVc1JVRkJNVVVzUTBGQlJDeEhRVUZ0UmtRc1dVRkJXVU1zUlVGQldpeEhRVUZwUWtvc1MwRkJTMUVzUjBGQlRDeERRVUZUVEN4WlFVRlpaaXhEUVVGeVFpeERRVUZvU0N4SlFVTmlWeXhsUVVGbFJ5eFhRVUZtTEVkQlFUWkNTU3hSUVVFNVFpeEpRVUU0UTA0c1MwRkJTMUVzUjBGQlRDeERRVUZUVEN4WlFVRlpaaXhEUVVGeVFpeExRVUV5UWtNc2EwSkJRV3RDVlN4bFFVRmxSeXhYUVVGbUxFZEJRVFpDUlN4RlFVRXhSU3hEUVVGR0xFZEJRWEZHUkN4VFFVRjBSaXhIUVVGdlIwTXNTMEZCUzBvc1MwRkJTMU1zUjBGQlRDeERRVUZUVGl4WlFVRlpaaXhEUVVGeVFpeERRVUZ3U2l4RFFVUklPenRCUVVkR08wRkJRME1zUzBGUVJDeE5RVTlQTzBGQlEwd3NWVUZCVFd0Q0xGbEJRVmRPTEV0QlFVdFBMRWRCUVV3c1EwRkJVeXhEUVVGRFRDeFhRVUZFTEVkQlFXVmtMRU5CUVhoQ0xFTkJRV3BDTzBGQlEwRnBRaXh2UWtGQlkwTXNZVUZCV1VZc1MwRkJTeXhEUVVGRFppeHJRa0ZCYlVKaExHTkJRV05GTEVWQlFXeERMRWxCUVhsRGFFSXNRMEZCTVVRc1EwRkJaRHRCUVVOQkxGZEJRVXRJTEZGQlFVd3NSMEZCWjBKeFFpeGhRVUZoYkVJc1NVRkJTVU1zWlVGQlNpeEhRVUZ6UW1Fc1YwRkJka0lzUjBGQmRVTmtMRWxCUVVsblFpeEZRVUZLTEVsQlFWVkdMR05CUVdOQkxGZEJRWGhDTEVOQlFYWkRMRWRCUVN0RllpeGxRVUV6Uml4RFFVRm9RanRCUVVORU96dEJRVVZFTEZGQlFVMXhRaXhYUVVGWExFbEJRVWxNTEZkQlFYSkNPMEZCUTBFc1VVRkJTVTBzVjBGQlYzaENMRTlCUVU5MVFpeFhRVUZYYmtJc1MwRkJha003TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1VVRkJUWEZDTERKQ1FVRXlRbG9zUzBGQlMyRXNSMEZCVEN4RFFVRlRMRXRCUVVzMVFpeFJRVUZrTEV0QlFUSkNWeXhUUVVFMVJEdEJRVU5CTEZGQlFVMXJRaXdyUWtGQkswSmtMRXRCUVV0aExFZEJRVXdzUTBGQlV6TkNMRXRCUVV0NVFpeFJRVUZrTEV0QlFUSkNaQ3huUWtGQmFFVTdRVUZEUVN4VFFVRkxVQ3hWUVVGTUxFZEJRV3RDYzBJc05FSkJRVFJDUlN3MFFrRkJPVU03TzBGQlJVRXNVVUZCU1N4TFFVRkxlRUlzVlVGQlZDeEZRVUZ4UWp0QlFVTnVRbkZDTEdsQ1FVRlhla0lzUlVGQldEdEJRVU5FT3p0QlFVVkVMRmRCUVU5NVFpeFJRVUZRTzBGQlEwUXNSenM3YlVKQlJVUkpMR2RDTEN0Q1FVRnRRanRCUVVOcVFpeFhRVUZQTEV0QlFVdDZRaXhWUVVGYU8wRkJRMFFzUnpzN096czdRVUZ1UlVkU0xFMHNRMEZEUjJ0RExGa3NSMEZCWlR0QlFVTndRblpDTEdGQlFWY3NSMEZFVXp0QlFVVndRa01zVjBGQlV5eEZRVVpYTzBGQlIzQkNReXhSUVVGTkxFZEJTR003UVVGSmNFSldMRmxCUVZVc1IwRktWVHRCUVV0d1FrVXNVVUZCVFN4SFFVeGpPMEZCVFhCQ1JDeE5RVUZKTEVkQlRtZENPMEZCVDNCQ1ZTeGhRVUZYTEVsQlVGTTdRVUZSY0VKRExHOUNRVUZyUWp0QlFWSkZMRU03TzJ0Q1FYRkZWQ3hWUVVGRFlpeExRVUZFTzBGQlFVRXNVMEZCVnl4SlFVRkpSaXhOUVVGS0xFTkJRVmRGTEV0QlFWZ3NRMEZCV0R0QlFVRkJMRU1pTENKbWFXeGxJam9pYzNCeWFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ1ZHaGxJR05zYjNObFpDMW1iM0p0SUdSaGJYQmxaQ0JvWVhKdGIyNXBZeUJ2YzJOcGJHeGhkR2x1WnlCemNISnBibWN1WEc0Z0lFOXlMQ0J6Y0hKcGJtY3VYRzVjYmlBZ1ZHaHBjeUJwY3lCaElHUnBjbVZqZENCd2IzSjBJRzltSUVGa1lXMGdUV2x6YTJsbGQybGplaWR6SUNoQWMydGxkbmtwSUZKbFlXTjBJRUZ1YVcxaGRHVmtYRzRnSUZCU0lDTXhOVE15TWlCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdlptRmpaV0p2YjJzdmNtVmhZM1F0Ym1GMGFYWmxMM0IxYkd3dk1UVXpNakl2WEc1Y2JpQWdZR0JnWEc0Z0lITndjbWx1WnloN1hHNGdJQ0FnYldGemN6b2dNaXhjYmlBZ0lDQmtZVzF3YVc1bk9pQXhNQ3hjYmlBZ0lDQnpkR2xtWm01bGMzTTZJREV3TUN4Y2JpQWdJQ0IwYnpvZ01UQXdYRzRnSUgwcExuTjBZWEowS0NrN1hHNGdJR0JnWUZ4dVhHNGdJRUZrWVcwZ1RXbHphMmxsZDJsamVqcGNiaUFnUUhOclpYWjVJQ2gwZDJsMGRHVnlMbU52YlM5emEyVjJlU3dnWjJsMGFIVmlMbU52YlM5emEyVjJlU2xjYmlBcUwxeHVhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNXBiWEJ2Y25RZ2V5QjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVWdmU0JtY205dElDZG1jbUZ0WlhONWJtTW5PMXh1WEc1amJHRnpjeUJUY0hKcGJtY2daWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0J6ZEdGMGFXTWdaR1ZtWVhWc2RGQnliM0J6SUQwZ2UxeHVJQ0FnSUhOMGFXWm1ibVZ6Y3pvZ01UQXdMRnh1SUNBZ0lHUmhiWEJwYm1jNklERXdMRnh1SUNBZ0lHMWhjM002SURFdU1DeGNiaUFnSUNCMlpXeHZZMmwwZVRvZ01DNHdMRnh1SUNBZ0lHWnliMjA2SURBdU1DeGNiaUFnSUNCMGJ6b2dNQzR3TEZ4dUlDQWdJSEpsYzNSVGNHVmxaRG9nTUM0d01TeGNiaUFnSUNCeVpYTjBSR2x6Y0d4aFkyVnRaVzUwT2lBd0xqQXhYRzRnSUgwN1hHNWNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJSFpsYkc5amFYUjVMQ0IwYnl3Z1puSnZiU0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCMGFHbHpMblFnUFNBd08xeHVJQ0FnSUhSb2FYTXVhVzVwZEdsaGJGWmxiRzlqYVhSNUlEMGdkbVZzYjJOcGRIa2dQeUIyWld4dlkybDBlU0F2SURFd01EQWdPaUF3TGpBN1hHNGdJQ0FnZEdocGN5NXBjME52YlhCc1pYUmxJRDBnWm1Gc2MyVTdYRzRnSUNBZ2RHaHBjeTVrWld4MFlTQTlJSFJ2SUMwZ1puSnZiVHRjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJSE4wYVdabWJtVnpjeXdnWkdGdGNHbHVaeXdnYldGemN5d2dabkp2YlN3Z2RHOHNJSEpsYzNSVGNHVmxaQ3dnY21WemRFUnBjM0JzWVdObGJXVnVkQ0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCamIyNXpkQ0I3SUdSbGJIUmhMQ0JwYm1sMGFXRnNWbVZzYjJOcGRIa2dmU0E5SUhSb2FYTTdYRzVjYmlBZ0lDQmpiMjV6ZENCMGFXMWxSR1ZzZEdFZ1BTQjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVW9LU0F2SURFd01EQTdYRzRnSUNBZ1kyOXVjM1FnZENBOUlIUm9hWE11ZENBOUlIUm9hWE11ZENBcklIUnBiV1ZFWld4MFlUdGNibHh1SUNBZ0lHTnZibk4wSUdSaGJYQnBibWRTWVhScGJ5QTlJR1JoYlhCcGJtY2dMeUFvTWlBcUlFMWhkR2d1YzNGeWRDaHpkR2xtWm01bGMzTWdLaUJ0WVhOektTazdYRzRnSUNBZ1kyOXVjM1FnWVc1bmRXeGhja1p5WlhFZ1BTQk5ZWFJvTG5OeGNuUW9jM1JwWm1adVpYTnpJQzhnYldGemN5azdYRzRnSUNBZ1kyOXVjM1FnWlhod2IwUmxZMkY1SUQwZ1lXNW5kV3hoY2taeVpYRWdLaUJOWVhSb0xuTnhjblFvTVM0d0lDMGdLR1JoYlhCcGJtZFNZWFJwYnlBcUlHUmhiWEJwYm1kU1lYUnBieWtwTzF4dVhHNGdJQ0FnWTI5dWMzUWdlREFnUFNBeE8xeHVJQ0FnSUd4bGRDQnZjMk5wYkd4aGRHbHZiaUE5SURBdU1EdGNibHh1SUNBZ0lDOHZJRlZ1WkdWeVpHRnRjR1ZrWEc0Z0lDQWdhV1lnS0dSaGJYQnBibWRTWVhScGJ5QThJREVwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR1Z1ZG1Wc2IzQmxJRDBnVFdGMGFDNWxlSEFvTFdSaGJYQnBibWRTWVhScGJ5QXFJR0Z1WjNWc1lYSkdjbVZ4SUNvZ2RDazdYRzRnSUNBZ0lDQnZjMk5wYkd4aGRHbHZiaUE5SUdWdWRtVnNiM0JsSUNvZ0tDZ29hVzVwZEdsaGJGWmxiRzlqYVhSNUlDc2daR0Z0Y0dsdVoxSmhkR2x2SUNvZ1lXNW5kV3hoY2taeVpYRWdLaUI0TUNrZ0x5QmxlSEJ2UkdWallYa3BJQ29nVFdGMGFDNXphVzRvWlhod2IwUmxZMkY1SUNvZ2RDa2dLeUFvZURBZ0tpQk5ZWFJvTG1OdmN5aGxlSEJ2UkdWallYa2dLaUIwS1NrcE8xeHVJQ0FnSUNBZ2RHaHBjeTUyWld4dlkybDBlU0E5SUNobGJuWmxiRzl3WlNBcUlDZ29UV0YwYUM1amIzTW9aWGh3YjBSbFkyRjVJQ29nZENrZ0tpQW9hVzVwZEdsaGJGWmxiRzlqYVhSNUlDc2daR0Z0Y0dsdVoxSmhkR2x2SUNvZ1lXNW5kV3hoY2taeVpYRWdLaUI0TUNrcElDMGdLR1Y0Y0c5RVpXTmhlU0FxSUhnd0lDb2dUV0YwYUM1emFXNG9aWGh3YjBSbFkyRjVJQ29nZENrcEtTQXRYRzRnSUNBZ0lDQWdJQ2dvWkdGdGNHbHVaMUpoZEdsdklDb2dZVzVuZFd4aGNrWnlaWEVnS2lCbGJuWmxiRzl3WlNrZ0tpQW9LQ2dvVFdGMGFDNXphVzRvWlhod2IwUmxZMkY1SUNvZ2RDa2dLaUFvYVc1cGRHbGhiRlpsYkc5amFYUjVJQ3NnWkdGdGNHbHVaMUpoZEdsdklDb2dZVzVuZFd4aGNrWnlaWEVnS2lCNE1Da3BJQ2tnTHlCbGVIQnZSR1ZqWVhrcElDc2dLSGd3SUNvZ1RXRjBhQzVqYjNNb1pYaHdiMFJsWTJGNUlDb2dkQ2twS1NrcE8xeHVYRzRnSUNBZ0x5OGdRM0pwZEdsallXeHNlU0JrWVcxd1pXUmNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnWTI5dWMzUWdaVzUyWld4dmNHVWdQU0JOWVhSb0xtVjRjQ2d0WVc1bmRXeGhja1p5WlhFZ0tpQjBLVHRjYmlBZ0lDQWdJRzl6WTJsc2JHRjBhVzl1SUQwZ1pXNTJaV3h2Y0dVZ0tpQW9lREFnS3lBb2FXNXBkR2xoYkZabGJHOWphWFI1SUNzZ0tHRnVaM1ZzWVhKR2NtVnhJQ29nZURBcEtTQXFJSFFwTzF4dUlDQWdJQ0FnZEdocGN5NTJaV3h2WTJsMGVTQTlJR1Z1ZG1Wc2IzQmxJQ29nS0NoMElDb2dhVzVwZEdsaGJGWmxiRzlqYVhSNUlDb2dZVzVuZFd4aGNrWnlaWEVwSUMwZ0tIUWdLaUI0TUNBcUlDaGhibWQxYkdGeVJuSmxjU0FxSUdGdVozVnNZWEpHY21WeEtTa2dLeUJwYm1sMGFXRnNWbVZzYjJOcGRIa3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHTnZibk4wSUdaeVlXTjBhVzl1SUQwZ01TQXRJRzl6WTJsc2JHRjBhVzl1TzF4dUlDQWdJR3hsZENCd2IzTnBkR2x2YmlBOUlHWnliMjBnS3lCbWNtRmpkR2x2YmlBcUlHUmxiSFJoTzF4dVhHNGdJQ0FnTHk4Z1EyaGxZMnNnYVdZZ2MybHRkV3hoZEdsdmJpQnBjeUJqYjIxd2JHVjBaVnh1SUNBZ0lDOHZJRmRsSUdSdklIUm9hWE1nYUdWeVpTQnBibk4wWldGa0lHOW1JR0JwYzBGamRHbHZia052YlhCc1pYUmxZQ0JoY3lCcGRDQmhiR3h2ZDNNZ2RYTmNiaUFnSUNBdkx5QjBieUJqYkdGdGNDQjBieUJsYm1RZ1pIVnlhVzVuSUhWd1pHRjBaU2xjYmlBZ0lDQmpiMjV6ZENCcGMwSmxiRzkzVm1Wc2IyTnBkSGxVYUhKbGMyaHZiR1FnUFNCTllYUm9MbUZpY3loMGFHbHpMblpsYkc5amFYUjVLU0E4UFNCeVpYTjBVM0JsWldRN1hHNGdJQ0FnWTI5dWMzUWdhWE5DWld4dmQwUnBjM0JzWVdObGJXVnVkRlJvY21WemFHOXNaQ0E5SUUxaGRHZ3VZV0p6S0hSdklDMGdjRzl6YVhScGIyNHBJRHc5SUhKbGMzUkVhWE53YkdGalpXMWxiblE3WEc0Z0lDQWdkR2hwY3k1cGMwTnZiWEJzWlhSbElEMGdhWE5DWld4dmQxWmxiRzlqYVhSNVZHaHlaWE5vYjJ4a0lDWW1JR2x6UW1Wc2IzZEVhWE53YkdGalpXMWxiblJVYUhKbGMyaHZiR1E3WEc1Y2JpQWdJQ0JwWmlBb2RHaHBjeTVwYzBOdmJYQnNaWFJsS1NCN1hHNGdJQ0FnSUNCd2IzTnBkR2x2YmlBOUlIUnZPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCd2IzTnBkR2x2Ymp0Y2JpQWdmVnh1WEc0Z0lHbHpRV04wYVc5dVEyOXRjR3hsZEdVb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVhWE5EYjIxd2JHVjBaVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvY0hKdmNITXBJRDArSUc1bGR5QlRjSEpwYm1jb2NISnZjSE1wTzF4dUlsMTlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL3NwcmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IENTU1JlbmRlcmVyKF9leHRlbmRzKHtcbiAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uOiB0cnVlXG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX3JlbmRlciA9IHJlcXVpcmUoJy4vcmVuZGVyJyk7XG5cbnZhciBfcmVuZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbmRlcik7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDU1NSZW5kZXJlciA9IGZ1bmN0aW9uIChfUmVuZGVyZXIpIHtcbiAgX2luaGVyaXRzKENTU1JlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIENTU1JlbmRlcmVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDU1NSZW5kZXJlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ1NTUmVuZGVyZXIucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGVsZW1lbnQgPSBfcHJvcHMuZWxlbWVudCxcbiAgICAgICAgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24gPSBfcHJvcHMuZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb247XG5cbiAgICAoMCwgX3JlbmRlcjIuZGVmYXVsdCkoZWxlbWVudCwgdGhpcy5zdGF0ZSwgdGhpcy5jaGFuZ2VkVmFsdWVzLCBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbik7XG4gIH07XG5cbiAgQ1NTUmVuZGVyZXIucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZChrZXkpIHtcbiAgICB2YXIgdmFsdWVUeXBlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRba2V5XTtcblxuICAgIGlmICghX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgICB2YXIgZG9tVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVsoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShrZXkpXSB8fCAwO1xuICAgICAgcmV0dXJuIHZhbHVlVHlwZSAmJiB2YWx1ZVR5cGUucGFyc2UgPyB2YWx1ZVR5cGUucGFyc2UoZG9tVmFsdWUpIDogZG9tVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlVHlwZS5kZWZhdWx0IHx8IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIENTU1JlbmRlcmVyO1xufShfMi5kZWZhdWx0KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJbVZzWlcxbGJuUWlMQ0p3Y205d2N5SXNJa05UVTFKbGJtUmxjbVZ5SWl3aVpXNWhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0aUxDSnZibEpsYm1SbGNpSXNJbk4wWVhSbElpd2lZMmhoYm1kbFpGWmhiSFZsY3lJc0ltOXVVbVZoWkNJc0ltdGxlU0lzSW5aaGJIVmxWSGx3WlNJc0ltUnZiVlpoYkhWbElpd2lkMmx1Wkc5M0lpd2laMlYwUTI5dGNIVjBaV1JUZEhsc1pTSXNJbkJoY25ObElpd2laR1ZtWVhWc2RDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMnRDUVRaQ1pTeFZRVUZWUVN4UFFVRldMRVZCUVcxQ1F5eExRVUZ1UWl4RlFVRXdRanRCUVVOMlF5eFRRVUZQTEVsQlFVbERMRmRCUVVvN1FVRkRURVlzYjBKQlJFczdRVUZGVEVjc1owTkJRVFJDTzBGQlJuWkNMRXRCUjBaR0xFdEJTRVVzUlVGQlVEdEJRVXRFTEVNN08wRkJia05FT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3pzN096czdPenRKUVVWTlF5eFhPenM3T3pzN096czdkMEpCUTBwRkxGRXNkVUpCUVZjN1FVRkJRU3hwUWtGRGRVTXNTMEZCUzBnc1MwRkVOVU03UVVGQlFTeFJRVU5FUkN4UFFVUkRMRlZCUTBSQkxFOUJSRU03UVVGQlFTeFJRVU5SUnl3d1FrRkVVaXhWUVVOUlFTd3dRa0ZFVWpzN1FVRkZWQ3d3UWtGQlZVZ3NUMEZCVml4RlFVRnRRaXhMUVVGTFN5eExRVUY0UWl4RlFVRXJRaXhMUVVGTFF5eGhRVUZ3UXl4RlFVRnRSRWdzTUVKQlFXNUVPMEZCUTBRc1J6czdkMEpCUlVSSkxFMHNiVUpCUVU5RExFY3NSVUZCU3p0QlFVTldMRkZCUVUxRExGbEJRVmtzY1VKQlFXTkVMRWRCUVdRc1EwRkJiRUk3TzBGQlJVRXNVVUZCU1N4RFFVRkRMSGxDUVVGbFFTeEhRVUZtTEVOQlFVd3NSVUZCTUVJN1FVRkJRU3hWUVVOb1FsSXNUMEZFWjBJc1IwRkRTaXhMUVVGTFF5eExRVVJFTEVOQlEyaENSQ3hQUVVSblFqczdRVUZGZUVJc1ZVRkJUVlVzVjBGQlYwTXNUMEZCVDBNc1owSkJRVkFzUTBGQmQwSmFMRTlCUVhoQ0xFVkJRV2xETEVsQlFXcERMRVZCUVhWRExIZENRVUZUVVN4SFFVRlVMRU5CUVhaRExFdEJRWGxFTEVOQlFURkZPMEZCUTBFc1lVRkJVVU1zWVVGQllVRXNWVUZCVlVrc1MwRkJlRUlzUjBGQmFVTktMRlZCUVZWSkxFdEJRVllzUTBGQlowSklMRkZCUVdoQ0xFTkJRV3BETEVkQlFUWkVRU3hSUVVGd1JUdEJRVU5FTEV0QlNrUXNUVUZKVHp0QlFVTk1MRlZCUVVsRUxGTkJRVW9zUlVGQlpUdEJRVU5pTEdWQlFVOUJMRlZCUVZWTExFOUJRVllzU1VGQmNVSXNRMEZCTlVJN1FVRkRSQ3hQUVVaRUxFMUJSVTg3UVVGRFRDeGxRVUZQTEVOQlFWQTdRVUZEUkR0QlFVTkdPMEZCUTBZc1J5SXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JTWlc1a1pYSmxjaUJtY205dElDY3VMaThuTzF4dWFXMXdiM0owSUhKbGJtUmxja05UVXlCbWNtOXRJQ2N1TDNKbGJtUmxjaWM3WEc1cGJYQnZjblFnZEhKaGJuTm1iM0p0VUhKdmNITWdabkp2YlNBbkxpOTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVhVzF3YjNKMElIWmhiSFZsVkhsd1pYTk5ZWEFnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3ljN1hHNXBiWEJ2Y25RZ2NISmxabWw0WlhJZ1puSnZiU0FuTGk5d2NtVm1hWGhsY2ljN1hHNWNibU5zWVhOeklFTlRVMUpsYm1SbGNtVnlJR1Y0ZEdWdVpITWdVbVZ1WkdWeVpYSWdlMXh1SUNCdmJsSmxibVJsY2lncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdWc1pXMWxiblFzSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lISmxibVJsY2tOVFV5aGxiR1Z0Wlc1MExDQjBhR2x6TG5OMFlYUmxMQ0IwYUdsekxtTm9ZVzVuWldSV1lXeDFaWE1zSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1R0Y2JpQWdmVnh1WEc0Z0lHOXVVbVZoWkNoclpYa3BJSHRjYmlBZ0lDQmpiMjV6ZENCMllXeDFaVlI1Y0dVZ1BTQjJZV3gxWlZSNWNHVnpUV0Z3VzJ0bGVWMDdYRzVjYmlBZ0lDQnBaaUFvSVhSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElIdGNiaUFnSUNBZ0lHTnZibk4wSUhzZ1pXeGxiV1Z1ZENCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQWdJR052Ym5OMElHUnZiVlpoYkhWbElEMGdkMmx1Wkc5M0xtZGxkRU52YlhCMWRHVmtVM1I1YkdVb1pXeGxiV1Z1ZEN3Z2JuVnNiQ2xiY0hKbFptbDRaWElvYTJWNUtWMGdmSHdnTUR0Y2JpQWdJQ0FnSUhKbGRIVnliaUFvZG1Gc2RXVlVlWEJsSUNZbUlIWmhiSFZsVkhsd1pTNXdZWEp6WlNrZ1B5QjJZV3gxWlZSNWNHVXVjR0Z5YzJVb1pHOXRWbUZzZFdVcElEb2daRzl0Vm1Gc2RXVTdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdsbUlDaDJZV3gxWlZSNWNHVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFpoYkhWbFZIbHdaUzVrWldaaGRXeDBJSHg4SURBN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTUR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnS0dWc1pXMWxiblFzSUhCeWIzQnpLU0I3WEc0Z0lISmxkSFZ5YmlCdVpYY2dRMU5UVW1WdVpHVnlaWElvZTF4dUlDQWdJR1ZzWlcxbGJuUXNYRzRnSUNBZ1pXNWhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0NklIUnlkV1VzWEc0Z0lDQWdMaTR1Y0hKdmNITmNiaUFnZlNrN1hHNTlYRzRpWFgwPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JlbmRlcmVycy9jc3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGRTdHlsZVByb3BlcnR5U3RyaW5nO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZXMpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdHJhbnNsYXRlID0gX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0LnRyYW5zbGF0ZSxcbiAgICB0cmFuc2xhdGVYID0gX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0LnRyYW5zbGF0ZVgsXG4gICAgdHJhbnNsYXRlWSA9IF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdC50cmFuc2xhdGVZLFxuICAgIHRyYW5zbGF0ZVogPSBfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHQudHJhbnNsYXRlWixcbiAgICBzY2FsZSA9IF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdC5zY2FsZSxcbiAgICBzY2FsZVggPSBfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHQuc2NhbGVYLFxuICAgIHNjYWxlWSA9IF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdC5zY2FsZVksXG4gICAgc2NhbGVaID0gX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0LnNjYWxlWixcbiAgICByb3RhdGUgPSBfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHQucm90YXRlLFxuICAgIHJvdGF0ZVggPSBfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHQucm90YXRlWCxcbiAgICByb3RhdGVZID0gX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0LnJvdGF0ZVksXG4gICAgcm90YXRlWiA9IF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdC5yb3RhdGVaO1xuXG5cbnZhciB0cmFuc2xhdGVNYXAgPSB7XG4gIHg6ICd0cmFuc2xhdGVYJyxcbiAgeTogJ3RyYW5zbGF0ZVknLFxuICB6OiAndHJhbnNsYXRlWidcbn07XG5cbnZhciB0cmFuc2Zvcm1Qcm9wT3JkZXIgPSBbdHJhbnNsYXRlLCB0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCB0cmFuc2xhdGVaLCBzY2FsZSwgc2NhbGVYLCBzY2FsZVksIHNjYWxlWiwgcm90YXRlLCByb3RhdGVYLCByb3RhdGVZLCByb3RhdGVaXTtcblxuZnVuY3Rpb24gc29ydFRyYW5zZm9ybVByb3BzKGEsIGIpIHtcbiAgcmV0dXJuIHRyYW5zZm9ybVByb3BPcmRlci5pbmRleE9mKGEpIC0gdHJhbnNmb3JtUHJvcE9yZGVyLmluZGV4T2YoYik7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkU3R5bGVQcm9wZXJ0eVN0cmluZyhlbGVtZW50LCBzdGF0ZSwgY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgdmFyIHByb3BlcnR5U3RyaW5nID0gJyc7XG4gIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSAnJztcbiAgdmFyIGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICB2YXIgdHJhbnNmb3JtSGFzWiA9IGZhbHNlO1xuXG4gIC8vIEZpcnN0IGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgY2hhbmdlZCB0cmFuc2Zvcm0gdmFsdWVzXG4gIC8vIGFuZCBpZiB0cnVlIGFkZCBhbGwgdHJhbnNmb3JtIHZhbHVlc1xuICB2YXIgbnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNoYW5nZWRWYWx1ZXM7IGkrKykge1xuICAgIHZhciBrZXkgPSBjaGFuZ2VkVmFsdWVzW2ldO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBwcm9wZXJ0eSwgYWRkIGFsbCBvdGhlciB0cmFuc2Zvcm0gcHJvcHNcbiAgICAvLyB0byBjaGFuZ2VkVmFsdWVzIGFuZCB0aGVuIGJyZWFrXG4gICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuXG4gICAgICBmb3IgKHZhciBfa2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRbX2tleV0gJiYgY2hhbmdlZFZhbHVlcy5pbmRleE9mKF9rZXkpID09PSAtMSkge1xuICAgICAgICAgIGNoYW5nZWRWYWx1ZXMucHVzaChfa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VkVmFsdWVzLnNvcnQoc29ydFRyYW5zZm9ybVByb3BzKTtcblxuICAvLyBOb3cgcnVuIHRocm91Z2ggZWFjaCBwcm9wZXJ0eSwgYW5kIGRlY2lkZSB3aGljaCBpcyBhIHBsYWluIHN0eWxlIHByb3BzLFxuICAvLyBhIHRyYW5zZm9ybSBwcm9wZXJ0eSBhbmQgQ1NTIHZhcnMgYW5kIGhhbmRsZSBhY2NvcmRpbmdseVxuICB2YXIgdG90YWxOdW1DaGFuZ2VkVmFsdWVzID0gY2hhbmdlZFZhbHVlcy5sZW5ndGg7XG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCB0b3RhbE51bUNoYW5nZWRWYWx1ZXM7IF9pKyspIHtcbiAgICB2YXIgX2tleTIgPSBjaGFuZ2VkVmFsdWVzW19pXTtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZVtfa2V5Ml07XG5cbiAgICBpZiAodHJhbnNsYXRlTWFwW19rZXkyXSkge1xuICAgICAgX2tleTIgPSB0cmFuc2xhdGVNYXBbX2tleTJdO1xuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSBudW1iZXIgb3Igb2JqZWN0IGFuZCB3ZSBoYXZlIGZpbHRlciwgYXBwbHkgZmlsdGVyXG4gICAgaWYgKF92YWx1ZVR5cGVzMi5kZWZhdWx0W19rZXkyXSAmJiAoKDAsIF91dGlscy5pc051bSkodmFsdWUpIHx8ICgwLCBfdXRpbHMuaXNPYmopKHZhbHVlKSkgJiYgX3ZhbHVlVHlwZXMyLmRlZmF1bHRbX2tleTJdLnRyYW5zZm9ybSkge1xuICAgICAgdmFsdWUgPSBfdmFsdWVUeXBlczIuZGVmYXVsdFtfa2V5Ml0udHJhbnNmb3JtKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBJZiBhIHRyYW5zZm9ybSBwcm9wLCBhZGQgdG8gdHJhbnNmb3JtIHN0cmluZ1xuICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRbX2tleTJdKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gX2tleTIgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgICB0cmFuc2Zvcm1IYXNaID0gX2tleTIgPT09IHRyYW5zbGF0ZU1hcC56ID8gdHJ1ZSA6IHRyYW5zZm9ybUhhc1o7XG5cbiAgICAgIC8vIE9yIGlmIGEgc2ltcGxlIENTUyBwcm9wZXJ0eSwgc2V0XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKF9rZXkyLCB0cnVlKSArICc6JyArIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHdlIGhhdmUgdHJhbnNmb3JtIHByb3BzLCBidWlsZCBhIHRyYW5zZm9ybSBzdHJpbmdcbiAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgIGlmICghdHJhbnNmb3JtSGFzWiAmJiBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IHRyYW5zbGF0ZU1hcC56ICsgJygwKSc7XG4gICAgfVxuXG4gICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoJ3RyYW5zZm9ybScsIHRydWUpICsgJzonICsgdHJhbnNmb3JtU3RyaW5nO1xuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IHByb3BlcnR5U3RyaW5nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNKbGJtUmxjaTVxY3lKZExDSnVZVzFsY3lJNld5SmlkV2xzWkZOMGVXeGxVSEp2Y0dWeWRIbFRkSEpwYm1jaUxDSjBjbUZ1YzJ4aGRHVWlMQ0owY21GdWMyeGhkR1ZZSWl3aWRISmhibk5zWVhSbFdTSXNJblJ5WVc1emJHRjBaVm9pTENKelkyRnNaU0lzSW5OallXeGxXQ0lzSW5OallXeGxXU0lzSW5OallXeGxXaUlzSW5KdmRHRjBaU0lzSW5KdmRHRjBaVmdpTENKeWIzUmhkR1ZaSWl3aWNtOTBZWFJsV2lJc0luUnlZVzV6YkdGMFpVMWhjQ0lzSW5naUxDSjVJaXdpZWlJc0luUnlZVzV6Wm05eWJWQnliM0JQY21SbGNpSXNJbk52Y25SVWNtRnVjMlp2Y20xUWNtOXdjeUlzSW1FaUxDSmlJaXdpYVc1a1pYaFBaaUlzSW1Wc1pXMWxiblFpTENKemRHRjBaU0lzSW1Ob1lXNW5aV1JXWVd4MVpYTWlMQ0psYm1GaWJHVklZWEprZDJGeVpVRmpZMlZzWlhKaGRHbHZiaUlzSW5CeWIzQmxjblI1VTNSeWFXNW5JaXdpZEhKaGJuTm1iM0p0VTNSeWFXNW5JaXdpYUdGelZISmhibk5tYjNKdElpd2lkSEpoYm5ObWIzSnRTR0Z6V2lJc0ltNTFiVU5vWVc1blpXUldZV3gxWlhNaUxDSnNaVzVuZEdnaUxDSnBJaXdpYTJWNUlpd2ljSFZ6YUNJc0luTnZjblFpTENKMGIzUmhiRTUxYlVOb1lXNW5aV1JXWVd4MVpYTWlMQ0oyWVd4MVpTSXNJblJ5WVc1elptOXliU0lzSW5OMGVXeGxJaXdpWTNOelZHVjRkQ0pkTENKdFlYQndhVzVuY3lJNklqczdPMnRDUVRaRGQwSkJMSGRDT3p0QlFUZERlRUk3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3U1VGSFJVTXNVeXcwUWtGQlFVRXNVenRKUVVOQlF5eFZMRFJDUVVGQlFTeFZPMGxCUTBGRExGVXNORUpCUVVGQkxGVTdTVUZEUVVNc1ZTdzBRa0ZCUVVFc1ZUdEpRVU5CUXl4TExEUkNRVUZCUVN4TE8wbEJRMEZETEUwc05FSkJRVUZCTEUwN1NVRkRRVU1zVFN3MFFrRkJRVUVzVFR0SlFVTkJReXhOTERSQ1FVRkJRU3hOTzBsQlEwRkRMRTBzTkVKQlFVRkJMRTA3U1VGRFFVTXNUeXcwUWtGQlFVRXNUenRKUVVOQlF5eFBMRFJDUVVGQlFTeFBPMGxCUTBGRExFOHNORUpCUVVGQkxFODdPenRCUVVkR0xFbEJRVTFETEdWQlFXVTdRVUZEYmtKRExFdEJRVWNzV1VGRVowSTdRVUZGYmtKRExFdEJRVWNzV1VGR1owSTdRVUZIYmtKRExFdEJRVWM3UVVGSVowSXNRMEZCY2tJN08wRkJUVUVzU1VGQlRVTXNjVUpCUVhGQ0xFTkJRM3BDYUVJc1UwRkVlVUlzUlVGRmVrSkRMRlZCUm5sQ0xFVkJSM3BDUXl4VlFVaDVRaXhGUVVsNlFrTXNWVUZLZVVJc1JVRkxla0pETEV0QlRIbENMRVZCVFhwQ1F5eE5RVTU1UWl4RlFVOTZRa01zVFVGUWVVSXNSVUZSZWtKRExFMUJVbmxDTEVWQlUzcENReXhOUVZSNVFpeEZRVlY2UWtNc1QwRldlVUlzUlVGWGVrSkRMRTlCV0hsQ0xFVkJXWHBDUXl4UFFWcDVRaXhEUVVFelFqczdRVUZsUVN4VFFVRlRUU3hyUWtGQlZDeERRVUUwUWtNc1EwRkJOVUlzUlVGQkswSkRMRU5CUVM5Q0xFVkJRV3RETzBGQlEyaERMRk5CUVU5SUxHMUNRVUZ0UWtrc1QwRkJia0lzUTBGQk1rSkdMRU5CUVROQ0xFbEJRV2REUml4dFFrRkJiVUpKTEU5QlFXNUNMRU5CUVRKQ1JDeERRVUV6UWl4RFFVRjJRenRCUVVORU96dEJRVVZqTEZOQlFWTndRaXgzUWtGQlZDeERRVUZyUTNOQ0xFOUJRV3hETEVWQlFUSkRReXhMUVVFelF5eEZRVUZyUkVNc1lVRkJiRVFzUlVGQmFVVkRMREJDUVVGcVJTeEZRVUUyUmp0QlFVTXhSeXhOUVVGSlF5eHBRa0ZCYVVJc1JVRkJja0k3UVVGRFFTeE5RVUZKUXl4clFrRkJhMElzUlVGQmRFSTdRVUZEUVN4TlFVRkpReXhsUVVGbExFdEJRVzVDTzBGQlEwRXNUVUZCU1VNc1owSkJRV2RDTEV0QlFYQkNPenRCUVVWQk8wRkJRMEU3UVVGRFFTeE5RVUZOUXl4dFFrRkJiVUpPTEdOQlFXTlBMRTFCUVhaRE8wRkJRMEVzVDBGQlN5eEpRVUZKUXl4SlFVRkpMRU5CUVdJc1JVRkJaMEpCTEVsQlFVbEdMR2RDUVVGd1FpeEZRVUZ6UTBVc1IwRkJkRU1zUlVGQk1rTTdRVUZEZWtNc1VVRkJTVU1zVFVGQlRWUXNZMEZCWTFFc1EwRkJaQ3hEUVVGV096dEJRVVZCTzBGQlEwRTdRVUZEUVN4UlFVRkpMSGxDUVVGbFF5eEhRVUZtTEVOQlFVb3NSVUZCZVVJN1FVRkRka0pNTEhGQ1FVRmxMRWxCUVdZN08wRkJSVUVzVjBGQlN5eEpRVUZKU3l4SlFVRlVMRWxCUVdkQ1ZpeExRVUZvUWl4RlFVRjFRanRCUVVOeVFpeFpRVUZKTEhsQ1FVRmxWU3hKUVVGbUxFdEJRWFZDVkN4alFVRmpTQ3hQUVVGa0xFTkJRWE5DV1N4SlFVRjBRaXhOUVVFclFpeERRVUZETEVOQlFUTkVMRVZCUVRoRU8wRkJRelZFVkN4M1FrRkJZMVVzU1VGQlpDeERRVUZ0UWtRc1NVRkJia0k3UVVGRFJEdEJRVU5HT3p0QlFVVkVPMEZCUTBRN1FVRkRSanM3UVVGRlJGUXNaMEpCUVdOWExFbEJRV1FzUTBGQmJVSnFRaXhyUWtGQmJrSTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFMUJRVTFyUWl4M1FrRkJkMEphTEdOQlFXTlBMRTFCUVRWRE8wRkJRMEVzVDBGQlN5eEpRVUZKUXl4TFFVRkpMRU5CUVdJc1JVRkJaMEpCTEV0QlFVbEpMSEZDUVVGd1FpeEZRVUV5UTBvc1NVRkJNME1zUlVGQlowUTdRVUZET1VNc1VVRkJTVU1zVVVGQlRWUXNZMEZCWTFFc1JVRkJaQ3hEUVVGV08wRkJRMEVzVVVGQlNVc3NVVUZCVVdRc1RVRkJUVlVzUzBGQlRpeERRVUZhT3p0QlFVVkJMRkZCUVVsd1FpeGhRVUZoYjBJc1MwRkJZaXhEUVVGS0xFVkJRWFZDTzBGQlEzSkNRU3hqUVVGTmNFSXNZVUZCWVc5Q0xFdEJRV0lzUTBGQlRqdEJRVU5FT3p0QlFVVkVPMEZCUTBFc1VVRkJTU3h4UWtGQlYwRXNTMEZCV0N4TlFVRnZRaXhyUWtGQlRVa3NTMEZCVGl4TFFVRm5RaXhyUWtGQlRVRXNTMEZCVGl4RFFVRndReXhMUVVGeFJDeHhRa0ZCVjBvc1MwRkJXQ3hGUVVGblFrc3NVMEZCZWtVc1JVRkJiMFk3UVVGRGJFWkVMR05CUVZFc2NVSkJRVmRLTEV0QlFWZ3NSVUZCWjBKTExGTkJRV2hDTEVOQlFUQkNSQ3hMUVVFeFFpeERRVUZTTzBGQlEwUTdPMEZCUlVRN1FVRkRRU3hSUVVGSkxIbENRVUZsU2l4TFFVRm1MRU5CUVVvc1JVRkJlVUk3UVVGRGRrSk9MSGxDUVVGdFFrMHNVVUZCVFN4SFFVRk9MRWRCUVZsSkxFdEJRVm9zUjBGQmIwSXNTVUZCZGtNN1FVRkRRVklzYzBKQlFXbENTU3hWUVVGUmNFSXNZVUZCWVVjc1EwRkJkRUlzUjBGQk1rSXNTVUZCTTBJc1IwRkJhME5oTEdGQlFXeEVPenRCUVVWR08wRkJRME1zUzBGTVJDeE5RVXRQTzBGQlEweElMSGRDUVVGclFpeE5RVUZOTEhkQ1FVRlRUeXhMUVVGVUxFVkJRV01zU1VGQlpDeERRVUZPTEVkQlFUUkNMRWRCUVRWQ0xFZEJRV3REU1N4TFFVRndSRHRCUVVORU8wRkJRMFk3TzBGQlJVUTdRVUZEUVN4TlFVRkpWQ3haUVVGS0xFVkJRV3RDTzBGQlEyaENMRkZCUVVrc1EwRkJRME1zWVVGQlJDeEpRVUZyUWtvc01FSkJRWFJDTEVWQlFXdEVPMEZCUTJoRVJTeDVRa0ZCYlVKa0xHRkJRV0ZITEVOQlFXSXNSMEZCYVVJc1MwRkJjRU03UVVGRFJEczdRVUZGUkZVc2MwSkJRV3RDTEUxQlFVMHNkMEpCUVZNc1YwRkJWQ3hGUVVGelFpeEpRVUYwUWl4RFFVRk9MRWRCUVc5RExFZEJRWEJETEVkQlFUQkRReXhsUVVFMVJEdEJRVU5FT3p0QlFVVkVUQ3hWUVVGUmFVSXNTMEZCVWl4RFFVRmpReXhQUVVGa0xFbEJRWGxDWkN4alFVRjZRanRCUVVORUlpd2labWxzWlNJNkluSmxibVJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IwY21GdWMyWnZjbTFRY205d2N5Qm1jbTl0SUNjdUwzUnlZVzV6Wm05eWJTMXdjbTl3Y3ljN1hHNXBiWEJ2Y25RZ2RtRnNkV1ZVZVhCbGN5Qm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpKenRjYm1sdGNHOXlkQ0J3Y21WbWFYaGxjaUJtY205dElDY3VMM0J5WldacGVHVnlKenRjYm1sdGNHOXlkQ0I3SUdselRuVnRMQ0JwYzA5aWFpQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU52Ym5OMElIdGNiaUFnZEhKaGJuTnNZWFJsTEZ4dUlDQjBjbUZ1YzJ4aGRHVllMRnh1SUNCMGNtRnVjMnhoZEdWWkxGeHVJQ0IwY21GdWMyeGhkR1ZhTEZ4dUlDQnpZMkZzWlN4Y2JpQWdjMk5oYkdWWUxGeHVJQ0J6WTJGc1pWa3NYRzRnSUhOallXeGxXaXhjYmlBZ2NtOTBZWFJsTEZ4dUlDQnliM1JoZEdWWUxGeHVJQ0J5YjNSaGRHVlpMRnh1SUNCeWIzUmhkR1ZhWEc1OUlEMGdkSEpoYm5ObWIzSnRVSEp2Y0hNN1hHNWNibU52Ym5OMElIUnlZVzV6YkdGMFpVMWhjQ0E5SUh0Y2JpQWdlRG9nSjNSeVlXNXpiR0YwWlZnbkxGeHVJQ0I1T2lBbmRISmhibk5zWVhSbFdTY3NYRzRnSUhvNklDZDBjbUZ1YzJ4aGRHVmFKMXh1ZlR0Y2JseHVZMjl1YzNRZ2RISmhibk5tYjNKdFVISnZjRTl5WkdWeUlEMGdXMXh1SUNCMGNtRnVjMnhoZEdVc1hHNGdJSFJ5WVc1emJHRjBaVmdzWEc0Z0lIUnlZVzV6YkdGMFpWa3NYRzRnSUhSeVlXNXpiR0YwWlZvc1hHNGdJSE5qWVd4bExGeHVJQ0J6WTJGc1pWZ3NYRzRnSUhOallXeGxXU3hjYmlBZ2MyTmhiR1ZhTEZ4dUlDQnliM1JoZEdVc1hHNGdJSEp2ZEdGMFpWZ3NYRzRnSUhKdmRHRjBaVmtzWEc0Z0lISnZkR0YwWlZwY2JsMDdYRzVjYm1aMWJtTjBhVzl1SUhOdmNuUlVjbUZ1YzJadmNtMVFjbTl3Y3loaExDQmlLU0I3WEc0Z0lISmxkSFZ5YmlCMGNtRnVjMlp2Y20xUWNtOXdUM0prWlhJdWFXNWtaWGhQWmloaEtTQXRJSFJ5WVc1elptOXliVkJ5YjNCUGNtUmxjaTVwYm1SbGVFOW1LR0lwTzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmlkV2xzWkZOMGVXeGxVSEp2Y0dWeWRIbFRkSEpwYm1jb1pXeGxiV1Z1ZEN3Z2MzUmhkR1VzSUdOb1lXNW5aV1JXWVd4MVpYTXNJR1Z1WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVLU0I3WEc0Z0lHeGxkQ0J3Y205d1pYSjBlVk4wY21sdVp5QTlJQ2NuTzF4dUlDQnNaWFFnZEhKaGJuTm1iM0p0VTNSeWFXNW5JRDBnSnljN1hHNGdJR3hsZENCb1lYTlVjbUZ1YzJadmNtMGdQU0JtWVd4elpUdGNiaUFnYkdWMElIUnlZVzV6Wm05eWJVaGhjMW9nUFNCbVlXeHpaVHRjYmx4dUlDQXZMeUJHYVhKemRDQmphR1ZqYXlCcFppQjBhR1Z5WlNCaGNtVWdZVzU1SUdOb1lXNW5aV1FnZEhKaGJuTm1iM0p0SUhaaGJIVmxjMXh1SUNBdkx5QmhibVFnYVdZZ2RISjFaU0JoWkdRZ1lXeHNJSFJ5WVc1elptOXliU0IyWVd4MVpYTmNiaUFnWTI5dWMzUWdiblZ0UTJoaGJtZGxaRlpoYkhWbGN5QTlJR05vWVc1blpXUldZV3gxWlhNdWJHVnVaM1JvTzF4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlVOb1lXNW5aV1JXWVd4MVpYTTdJR2tyS3lrZ2UxeHVJQ0FnSUd4bGRDQnJaWGtnUFNCamFHRnVaMlZrVm1Gc2RXVnpXMmxkTzF4dVhHNGdJQ0FnTHk4Z1NXWWdkR2hwY3lCcGN5QmhJSFJ5WVc1elptOXliU0J3Y205d1pYSjBlU3dnWVdSa0lHRnNiQ0J2ZEdobGNpQjBjbUZ1YzJadmNtMGdjSEp2Y0hOY2JpQWdJQ0F2THlCMGJ5QmphR0Z1WjJWa1ZtRnNkV1Z6SUdGdVpDQjBhR1Z1SUdKeVpXRnJYRzRnSUNBZ2FXWWdLSFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUdoaGMxUnlZVzV6Wm05eWJTQTlJSFJ5ZFdVN1hHNWNiaUFnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9kSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU0FtSmlCamFHRnVaMlZrVm1Gc2RXVnpMbWx1WkdWNFQyWW9hMlY1S1NBOVBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmphR0Z1WjJWa1ZtRnNkV1Z6TG5CMWMyZ29hMlY1S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCamFHRnVaMlZrVm1Gc2RXVnpMbk52Y25Rb2MyOXlkRlJ5WVc1elptOXliVkJ5YjNCektUdGNibHh1SUNBdkx5Qk9iM2NnY25WdUlIUm9jbTkxWjJnZ1pXRmphQ0J3Y205d1pYSjBlU3dnWVc1a0lHUmxZMmxrWlNCM2FHbGphQ0JwY3lCaElIQnNZV2x1SUhOMGVXeGxJSEJ5YjNCekxGeHVJQ0F2THlCaElIUnlZVzV6Wm05eWJTQndjbTl3WlhKMGVTQmhibVFnUTFOVElIWmhjbk1nWVc1a0lHaGhibVJzWlNCaFkyTnZjbVJwYm1kc2VWeHVJQ0JqYjI1emRDQjBiM1JoYkU1MWJVTm9ZVzVuWldSV1lXeDFaWE1nUFNCamFHRnVaMlZrVm1Gc2RXVnpMbXhsYm1kMGFEdGNiaUFnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGIzUmhiRTUxYlVOb1lXNW5aV1JXWVd4MVpYTTdJR2tyS3lrZ2UxeHVJQ0FnSUd4bGRDQnJaWGtnUFNCamFHRnVaMlZrVm1Gc2RXVnpXMmxkTzF4dUlDQWdJR3hsZENCMllXeDFaU0E5SUhOMFlYUmxXMnRsZVYwN1hHNWNiaUFnSUNCcFppQW9kSEpoYm5Oc1lYUmxUV0Z3VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJR3RsZVNBOUlIUnlZVzV6YkdGMFpVMWhjRnRyWlhsZE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFbG1JSFJvYVhNZ2FYTWdZU0J1ZFcxaVpYSWdiM0lnYjJKcVpXTjBJR0Z1WkNCM1pTQm9ZWFpsSUdacGJIUmxjaXdnWVhCd2JIa2dabWxzZEdWeVhHNGdJQ0FnYVdZZ0tIWmhiSFZsVkhsd1pYTmJhMlY1WFNBbUppQW9hWE5PZFcwb2RtRnNkV1VwSUh4OElHbHpUMkpxS0haaGJIVmxLU2tnSmlZZ2RtRnNkV1ZVZVhCbGMxdHJaWGxkTG5SeVlXNXpabTl5YlNrZ2UxeHVJQ0FnSUNBZ2RtRnNkV1VnUFNCMllXeDFaVlI1Y0dWelcydGxlVjB1ZEhKaGJuTm1iM0p0S0haaGJIVmxLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJKWmlCaElIUnlZVzV6Wm05eWJTQndjbTl3TENCaFpHUWdkRzhnZEhKaGJuTm1iM0p0SUhOMGNtbHVaMXh1SUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTFRY205d2MxdHJaWGxkS1NCN1hHNGdJQ0FnSUNCMGNtRnVjMlp2Y20xVGRISnBibWNnS3owZ2EyVjVJQ3NnSnlnbklDc2dkbUZzZFdVZ0t5QW5LU0FuTzF4dUlDQWdJQ0FnZEhKaGJuTm1iM0p0U0dGeldpQTlJQ2hyWlhrZ1BUMDlJSFJ5WVc1emJHRjBaVTFoY0M1NktTQS9JSFJ5ZFdVZ09pQjBjbUZ1YzJadmNtMUlZWE5hTzF4dVhHNGdJQ0FnTHk4Z1QzSWdhV1lnWVNCemFXMXdiR1VnUTFOVElIQnliM0JsY25SNUxDQnpaWFJjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2NISnZjR1Z5ZEhsVGRISnBibWNnS3owZ0p6c25JQ3NnY0hKbFptbDRaWElvYTJWNUxDQjBjblZsS1NBcklDYzZKeUFySUhaaGJIVmxPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzh2SUVsbUlIZGxJR2hoZG1VZ2RISmhibk5tYjNKdElIQnliM0J6TENCaWRXbHNaQ0JoSUhSeVlXNXpabTl5YlNCemRISnBibWRjYmlBZ2FXWWdLR2hoYzFSeVlXNXpabTl5YlNrZ2UxeHVJQ0FnSUdsbUlDZ2hkSEpoYm5ObWIzSnRTR0Z6V2lBbUppQmxibUZpYkdWSVlYSmtkMkZ5WlVGalkyVnNaWEpoZEdsdmJpa2dlMXh1SUNBZ0lDQWdkSEpoYm5ObWIzSnRVM1J5YVc1bklDczlJSFJ5WVc1emJHRjBaVTFoY0M1NklDc2dKeWd3S1NjN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY0hKdmNHVnlkSGxUZEhKcGJtY2dLejBnSnpzbklDc2djSEpsWm1sNFpYSW9KM1J5WVc1elptOXliU2NzSUhSeWRXVXBJQ3NnSnpvbklDc2dkSEpoYm5ObWIzSnRVM1J5YVc1bk8xeHVJQ0I5WEc1Y2JpQWdaV3hsYldWdWRDNXpkSGxzWlM1amMzTlVaWGgwSUNzOUlIQnliM0JsY25SNVUzUnlhVzVuTzF4dWZWeHVJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVuZGVyZXJzL2Nzcy9yZW5kZXIuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBTVkdSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudFxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVzKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTVkdSZW5kZXJlciA9IGZ1bmN0aW9uIChfUmVuZGVyZXIpIHtcbiAgX2luaGVyaXRzKFNWR1JlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIFNWR1JlbmRlcmVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNWR1JlbmRlcmVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICB2YXIgX3Byb3BzJGVsZW1lbnQkZ2V0QkJvID0gcHJvcHMuZWxlbWVudC5nZXRCQm94KCksXG4gICAgICAgIHggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueCxcbiAgICAgICAgeSA9IF9wcm9wcyRlbGVtZW50JGdldEJCby55LFxuICAgICAgICB3aWR0aCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLmhlaWdodDtcblxuICAgIF90aGlzLmVsZW1lbnREaW1lbnNpb25zID0geyB4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU1ZHUmVuZGVyZXIucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICB2YXIgYXR0cnMgPSAoMCwgX2J1aWxkMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCB0aGlzLmVsZW1lbnREaW1lbnNpb25zKTtcbiAgICAoMCwgX3V0aWxzLnNldERPTUF0dHJzKShlbGVtZW50LCBhdHRycyk7XG4gIH07XG5cbiAgU1ZHUmVuZGVyZXIucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZChrZXkpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuXG4gICAgaWYgKCFfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2YWx1ZVR5cGUgPSBfdmFsdWVUeXBlczIuZGVmYXVsdFtrZXldO1xuICAgICAgcmV0dXJuIHZhbHVlVHlwZSA/IHZhbHVlVHlwZS5kZWZhdWx0IDogMDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFNWR1JlbmRlcmVyO1xufShfMi5kZWZhdWx0KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJbVZzWlcxbGJuUWlMQ0p3Y205d2N5SXNJbE5XUjFKbGJtUmxjbVZ5SWl3aVoyVjBRa0p2ZUNJc0luZ2lMQ0o1SWl3aWQybGtkR2dpTENKb1pXbG5hSFFpTENKbGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lJc0ltOXVVbVZ1WkdWeUlpd2lZWFIwY25NaUxDSnpkR0YwWlNJc0ltOXVVbVZoWkNJc0ltdGxlU0lzSW1kbGRFRjBkSEpwWW5WMFpTSXNJblpoYkhWbFZIbHdaU0lzSW1SbFptRjFiSFFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0clFrRm5RMlVzVlVGQlZVRXNUMEZCVml4RlFVRnRRa01zUzBGQmJrSXNSVUZCTUVJN1FVRkRka01zVTBGQlR5eEpRVUZKUXl4WFFVRktPMEZCUTB4R08wRkJSRXNzUzBGRlJrTXNTMEZHUlN4RlFVRlFPMEZCU1VRc1F6czdRVUZ5UTBRN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN096czdPenRKUVVWTlF5eFhPenM3UVVGRFNpeDFRa0ZCV1VRc1MwRkJXaXhGUVVGdFFqdEJRVUZCT3p0QlFVRkJMR2xFUVVOcVFpeHhRa0ZCVFVFc1MwRkJUaXhEUVVScFFqczdRVUZCUVN4blEwRkhaVUVzVFVGQlRVUXNUMEZCVGl4RFFVRmpSeXhQUVVGa0xFVkJTR1k3UVVGQlFTeFJRVWRVUXl4RFFVaFRMSGxDUVVkVVFTeERRVWhUTzBGQlFVRXNVVUZIVGtNc1EwRklUU3g1UWtGSFRrRXNRMEZJVFR0QlFVRkJMRkZCUjBoRExFdEJTRWNzZVVKQlIwaEJMRXRCU0VjN1FVRkJRU3hSUVVkSlF5eE5RVWhLTEhsQ1FVZEpRU3hOUVVoS096dEJRVWxxUWl4VlFVRkxReXhwUWtGQlRDeEhRVUY1UWl4RlFVRkZTaXhKUVVGR0xFVkJRVXRETEVsQlFVd3NSVUZCVVVNc1dVRkJVaXhGUVVGbFF5eGpRVUZtTEVWQlFYcENPMEZCU21sQ08wRkJTMnhDT3p0M1FrRkZSRVVzVVN4MVFrRkJWenRCUVVGQkxGRkJRMFJVTEU5QlJFTXNSMEZEVnl4TFFVRkxReXhMUVVSb1FpeERRVU5FUkN4UFFVUkRPenRCUVVWVUxGRkJRVTFWTEZGQlFWRXNjVUpCUVUwc1MwRkJTME1zUzBGQldDeEZRVUZyUWl4TFFVRkxTQ3hwUWtGQmRrSXNRMEZCWkR0QlFVTkJMRFJDUVVGWlVpeFBRVUZhTEVWQlFYRkNWU3hMUVVGeVFqdEJRVU5FTEVjN08zZENRVVZFUlN4TkxHMUNRVUZQUXl4SExFVkJRVXM3UVVGQlFTeFJRVU5HWWl4UFFVUkZMRWRCUTFVc1MwRkJTME1zUzBGRVppeERRVU5HUkN4UFFVUkZPenM3UVVGSFZpeFJRVUZKTEVOQlFVTXNlVUpCUVdWaExFZEJRV1lzUTBGQlRDeEZRVUV3UWp0QlFVTjRRaXhoUVVGUFlpeFJRVUZSWXl4WlFVRlNMRU5CUVhGQ1JDeEhRVUZ5UWl4RFFVRlFPMEZCUTBRc1MwRkdSQ3hOUVVWUE8wRkJRMHdzVlVGQlRVVXNXVUZCV1N4eFFrRkJZVVlzUjBGQllpeERRVUZzUWp0QlFVTkJMR0ZCUVZGRkxGTkJRVVFzUjBGQlkwRXNWVUZCVlVNc1QwRkJlRUlzUjBGQmEwTXNRMEZCZWtNN1FVRkRSRHRCUVVOR0xFY2lMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVW1WdVpHVnlaWElnWm5KdmJTQW5MaTR2Snp0Y2JtbHRjRzl5ZENCaWRXbHNaQ0JtY205dElDY3VMMkoxYVd4a0p6dGNibWx0Y0c5eWRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lCbWNtOXRJQ2N1TGk5amMzTXZkSEpoYm5ObWIzSnRMWEJ5YjNCekp6dGNibWx0Y0c5eWRDQjJZV3gxWlZSNWNHVk5ZWEFnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3ljN1hHNXBiWEJ2Y25RZ2V5QnpaWFJFVDAxQmRIUnljeUI5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1Oc1lYTnpJRk5XUjFKbGJtUmxjbVZ5SUdWNGRHVnVaSE1nVW1WdVpHVnlaWElnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lITjFjR1Z5S0hCeWIzQnpLVHRjYmx4dUlDQWdJR052Ym5OMElIc2dlQ3dnZVN3Z2QybGtkR2dzSUdobGFXZG9kQ0I5SUQwZ2NISnZjSE11Wld4bGJXVnVkQzVuWlhSQ1FtOTRLQ2s3WEc0Z0lDQWdkR2hwY3k1bGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lBOUlIc2dlQ3dnZVN3Z2QybGtkR2dzSUdobGFXZG9kQ0I5TzF4dUlDQjlYRzVjYmlBZ2IyNVNaVzVrWlhJb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCbGJHVnRaVzUwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHTnZibk4wSUdGMGRISnpJRDBnWW5WcGJHUW9kR2hwY3k1emRHRjBaU3dnZEdocGN5NWxiR1Z0Wlc1MFJHbHRaVzV6YVc5dWN5azdYRzRnSUNBZ2MyVjBSRTlOUVhSMGNuTW9aV3hsYldWdWRDd2dZWFIwY25NcE8xeHVJQ0I5WEc1Y2JpQWdiMjVTWldGa0tHdGxlU2tnZTF4dUlDQWdJR052Ym5OMElIc2daV3hsYldWdWRDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JseHVJQ0FnSUdsbUlDZ2hkSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR1ZzWlcxbGJuUXVaMlYwUVhSMGNtbGlkWFJsS0d0bGVTazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbFZIbHdaU0E5SUhaaGJIVmxWSGx3WlUxaGNGdHJaWGxkTzF4dUlDQWdJQ0FnY21WMGRYSnVJQ2gyWVd4MVpWUjVjR1VwSUQ4Z2RtRnNkV1ZVZVhCbExtUmxabUYxYkhRZ09pQXdPMXh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQW9aV3hsYldWdWRDd2djSEp2Y0hNcElIdGNiaUFnY21WMGRYSnVJRzVsZHlCVFZrZFNaVzVrWlhKbGNpaDdYRzRnSUNBZ1pXeGxiV1Z1ZEN4Y2JpQWdJQ0F1TGk1d2NtOXdjMXh1SUNCOUtUdGNibjFjYmlKZGZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgWkVST19OT1RfWkVSTyA9IDAuMDAwMTtcblxuZnVuY3Rpb24gYnVpbGQoc3RhdGUsIGRhdGEpIHtcbiAgdmFyIGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIHNjYWxlID0gc3RhdGUuc2NhbGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlIHx8IFpFUk9fTk9UX1pFUk8gOiBzdGF0ZS5zY2FsZVggfHwgMTtcbiAgdmFyIHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxO1xuICB2YXIgdHJhbnNmb3JtT3JpZ2luWCA9IGRhdGEud2lkdGggKiAoKHN0YXRlLm9yaWdpblggfHwgNTApIC8gMTAwKSArIGRhdGEueDtcbiAgdmFyIHRyYW5zZm9ybU9yaWdpblkgPSBkYXRhLmhlaWdodCAqICgoc3RhdGUub3JpZ2luWSB8fCA1MCkgLyAxMDApICsgZGF0YS55O1xuICB2YXIgc2NhbGVUcmFuc2Zvcm1YID0gLXRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKTtcbiAgdmFyIHNjYWxlVHJhbnNmb3JtWSA9IC10cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpO1xuICB2YXIgc2NhbGVSZXBsYWNlWCA9IHRyYW5zZm9ybU9yaWdpblggLyBzY2FsZTtcbiAgdmFyIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZO1xuICB2YXIgdHJhbnNmb3JtID0ge1xuICAgIHRyYW5zbGF0ZTogJ3RyYW5zbGF0ZSgnICsgc3RhdGUudHJhbnNsYXRlWCArICcsICcgKyBzdGF0ZS50cmFuc2xhdGVZICsgJykgJyxcbiAgICBzY2FsZTogJ3RyYW5zbGF0ZSgnICsgc2NhbGVUcmFuc2Zvcm1YICsgJywgJyArIHNjYWxlVHJhbnNmb3JtWSArICcpIHNjYWxlKCcgKyBzY2FsZSArICcsICcgKyBzY2FsZVkgKyAnKSB0cmFuc2xhdGUoJyArIHNjYWxlUmVwbGFjZVggKyAnLCAnICsgc2NhbGVSZXBsYWNlWSArICcpICcsXG4gICAgcm90YXRlOiAncm90YXRlKCcgKyBzdGF0ZS5yb3RhdGUgKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWCArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5ZICsgJykgJyxcbiAgICBza2V3WDogJ3NrZXdYKCcgKyBzdGF0ZS5za2V3WCArICcpICcsXG4gICAgc2tld1k6ICdza2V3WSgnICsgc3RhdGUuc2tld1kgKyAnKSAnXG4gIH07XG5cbiAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHNbKDAsIF91dGlscy5jYW1lbFRvRGFzaCkoa2V5KV0gPSBzdGF0ZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgIGZvciAodmFyIF9rZXkgaW4gdHJhbnNmb3JtKSB7XG4gICAgICBpZiAodHJhbnNmb3JtLmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBfa2V5ID09PSAnc2NhbGUnID8gJzEnIDogJzAnO1xuICAgICAgICBwcm9wcy50cmFuc2Zvcm0gKz0gdHJhbnNmb3JtW19rZXldLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwySjFhV3hrTG1weklsMHNJbTVoYldWeklqcGJJbUoxYVd4a0lpd2lXa1ZTVDE5T1QxUmZXa1ZTVHlJc0luTjBZWFJsSWl3aVpHRjBZU0lzSW1oaGMxUnlZVzV6Wm05eWJTSXNJbkJ5YjNCeklpd2ljMk5oYkdVaUxDSjFibVJsWm1sdVpXUWlMQ0p6WTJGc1pWZ2lMQ0p6WTJGc1pWa2lMQ0owY21GdWMyWnZjbTFQY21sbmFXNVlJaXdpZDJsa2RHZ2lMQ0p2Y21sbmFXNVlJaXdpZUNJc0luUnlZVzV6Wm05eWJVOXlhV2RwYmxraUxDSm9aV2xuYUhRaUxDSnZjbWxuYVc1Wklpd2llU0lzSW5OallXeGxWSEpoYm5ObWIzSnRXQ0lzSW5OallXeGxWSEpoYm5ObWIzSnRXU0lzSW5OallXeGxVbVZ3YkdGalpWZ2lMQ0p6WTJGc1pWSmxjR3hoWTJWWklpd2lkSEpoYm5ObWIzSnRJaXdpZEhKaGJuTnNZWFJsSWl3aWRISmhibk5zWVhSbFdDSXNJblJ5WVc1emJHRjBaVmtpTENKeWIzUmhkR1VpTENKemEyVjNXQ0lzSW5OclpYZFpJaXdpYTJWNUlpd2lhR0Z6VDNkdVVISnZjR1Z5ZEhraUxDSmtaV1poZFd4MFZtRnNkV1VpTENKeVpYQnNZV05sSWwwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlMzZENRU3hMT3p0QlFVeDRRanM3UVVGRFFUczdPenM3TzBGQlJVRXNTVUZCVFVNc1owSkJRV2RDTEUxQlFYUkNPenRCUVVWbExGTkJRVk5FTEV0QlFWUXNRMEZCWlVVc1MwRkJaaXhGUVVGelFrTXNTVUZCZEVJc1JVRkJORUk3UVVGRGVrTXNUVUZCU1VNc1pVRkJaU3hMUVVGdVFqdEJRVU5CTEUxQlFVMURMRkZCUVZFc1JVRkJaRHRCUVVOQkxFMUJRVTFETEZGQlFWRktMRTFCUVUxSkxFdEJRVTRzUzBGQlowSkRMRk5CUVdoQ0xFZEJRVFJDVEN4TlFVRk5TU3hMUVVGT0xFbEJRV1ZNTEdGQlFUTkRMRWRCUVRKRVF5eE5RVUZOVFN4TlFVRk9MRWxCUVdkQ0xFTkJRWHBHTzBGQlEwRXNUVUZCVFVNc1UwRkJVMUFzVFVGQlRVOHNUVUZCVGl4TFFVRnBRa1lzVTBGQmFrSXNSMEZCTmtKTUxFMUJRVTFQTEUxQlFVNHNTVUZCWjBKU0xHRkJRVGRETEVkQlFUWkVTeXhUUVVGVExFTkJRWEpHTzBGQlEwRXNUVUZCVFVrc2JVSkJRVzFDVUN4TFFVRkxVU3hMUVVGTUxFbEJRV01zUTBGQlExUXNUVUZCVFZVc1QwRkJUaXhKUVVGcFFpeEZRVUZzUWl4SlFVRjNRaXhIUVVGMFF5eEpRVUUyUTFRc1MwRkJTMVVzUTBGQk0wVTdRVUZEUVN4TlFVRk5ReXh0UWtGQmJVSllMRXRCUVV0WkxFMUJRVXdzU1VGQlpTeERRVUZEWWl4TlFVRk5ZeXhQUVVGT0xFbEJRV2xDTEVWQlFXeENMRWxCUVhkQ0xFZEJRWFpETEVsQlFUaERZaXhMUVVGTFl5eERRVUUxUlR0QlFVTkJMRTFCUVUxRExHdENRVUZyUWl4RFFVRkZVaXhuUWtGQlJpeEpRVUZ6UWtvc1VVRkJVU3hEUVVFNVFpeERRVUY0UWp0QlFVTkJMRTFCUVUxaExHdENRVUZyUWl4RFFVRkZUQ3huUWtGQlJpeEpRVUZ6UWt3c1UwRkJVeXhEUVVFdlFpeERRVUY0UWp0QlFVTkJMRTFCUVUxWExHZENRVUZuUWxZc2JVSkJRVzFDU2l4TFFVRjZRenRCUVVOQkxFMUJRVTFsTEdkQ1FVRm5RbEFzYlVKQlFXMUNUQ3hOUVVGNlF6dEJRVU5CTEUxQlFVMWhMRmxCUVZrN1FVRkRhRUpETERoQ1FVRjNRbkpDTEUxQlFVMXpRaXhWUVVFNVFpeFZRVUUyUTNSQ0xFMUJRVTExUWl4VlFVRnVSQ3hQUVVSblFqdEJRVVZvUW01Q0xEQkNRVUZ2UWxrc1pVRkJjRUlzVlVGQmQwTkRMR1ZCUVhoRExHZENRVUZyUldJc1MwRkJiRVVzVlVGQk5FVkhMRTFCUVRWRkxHOUNRVUZwUjFjc1lVRkJha2NzVlVGQmJVaERMR0ZCUVc1SUxFOUJSbWRDTzBGQlIyaENTeXgzUWtGQmEwSjRRaXhOUVVGTmQwSXNUVUZCZUVJc1ZVRkJiVU5vUWl4blFrRkJia01zVlVGQmQwUkpMR2RDUVVGNFJDeFBRVWhuUWp0QlFVbG9RbUVzYzBKQlFXZENla0lzVFVGQlRYbENMRXRCUVhSQ0xFOUJTbWRDTzBGQlMyaENReXh6UWtGQlowSXhRaXhOUVVGTk1FSXNTMEZCZEVJN1FVRk1aMElzUjBGQmJFSTdPMEZCVVVFc1QwRkJTeXhKUVVGSlF5eEhRVUZVTEVsQlFXZENNMElzUzBGQmFFSXNSVUZCZFVJN1FVRkRja0lzVVVGQlNVRXNUVUZCVFRSQ0xHTkJRVTRzUTBGQmNVSkVMRWRCUVhKQ0xFTkJRVW9zUlVGQkswSTdRVUZETjBJc1ZVRkJTU3g1UWtGQlpVRXNSMEZCWml4RFFVRktMRVZCUVhsQ08wRkJRM1pDZWtJc2RVSkJRV1VzU1VGQlpqdEJRVU5FTEU5QlJrUXNUVUZGVHp0QlFVTk1ReXhqUVVGTkxIZENRVUZaZDBJc1IwRkJXaXhEUVVGT0xFbEJRVEJDTTBJc1RVRkJUVEpDTEVkQlFVNHNRMEZCTVVJN1FVRkRSRHRCUVVOR08wRkJRMFk3TzBGQlJVUXNUVUZCU1hwQ0xGbEJRVW9zUlVGQmEwSTdRVUZEYUVKRExGVkJRVTFwUWl4VFFVRk9MRWRCUVd0Q0xFVkJRV3hDT3p0QlFVVkJMRk5CUVVzc1NVRkJTVThzU1VGQlZDeEpRVUZuUWxBc1UwRkJhRUlzUlVGQk1rSTdRVUZEZWtJc1ZVRkJTVUVzVlVGQlZWRXNZMEZCVml4RFFVRjVRa1FzU1VGQmVrSXNRMEZCU2l4RlFVRnRRenRCUVVOcVF5eFpRVUZOUlN4bFFVRm5Ra1lzVTBGQlVTeFBRVUZVTEVkQlFXOUNMRWRCUVhCQ0xFZEJRVEJDTEVkQlFTOURPMEZCUTBGNFFpeGpRVUZOYVVJc1UwRkJUaXhKUVVGdFFrRXNWVUZCVlU4c1NVRkJWaXhGUVVGbFJ5eFBRVUZtTEVOQlFYVkNMRmxCUVhaQ0xFVkJRWEZEUkN4WlFVRnlReXhEUVVGdVFqdEJRVU5FTzBGQlEwWTdRVUZEUmpzN1FVRkZSQ3hUUVVGUE1VSXNTMEZCVUR0QlFVTkVJaXdpWm1sc1pTSTZJbUoxYVd4a0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kyRnRaV3hVYjBSaGMyZ2dmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElIUnlZVzV6Wm05eWJWQnliM0J6SUdaeWIyMGdKeTR1TDJOemN5OTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVYRzVqYjI1emRDQmFSVkpQWDA1UFZGOWFSVkpQSUQwZ01DNHdNREF4TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCaWRXbHNaQ2h6ZEdGMFpTd2daR0YwWVNrZ2UxeHVJQ0JzWlhRZ2FHRnpWSEpoYm5ObWIzSnRJRDBnWm1Gc2MyVTdYRzRnSUdOdmJuTjBJSEJ5YjNCeklEMGdlMzA3WEc0Z0lHTnZibk4wSUhOallXeGxJRDBnYzNSaGRHVXVjMk5oYkdVZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhOMFlYUmxMbk5qWVd4bElIeDhJRnBGVWs5ZlRrOVVYMXBGVWs4Z09pQnpkR0YwWlM1elkyRnNaVmdnZkh3Z01UdGNiaUFnWTI5dWMzUWdjMk5oYkdWWklEMGdjM1JoZEdVdWMyTmhiR1ZaSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJ6ZEdGMFpTNXpZMkZzWlZrZ2ZId2dXa1ZTVDE5T1QxUmZXa1ZTVHlBNklITmpZV3hsSUh4OElERTdYRzRnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dQU0JrWVhSaExuZHBaSFJvSUNvZ0tDaHpkR0YwWlM1dmNtbG5hVzVZSUh4OElEVXdLU0F2SURFd01Da2dLeUJrWVhSaExuZzdYRzRnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsa2dQU0JrWVhSaExtaGxhV2RvZENBcUlDZ29jM1JoZEdVdWIzSnBaMmx1V1NCOGZDQTFNQ2tnTHlBeE1EQXBJQ3NnWkdGMFlTNTVPMXh1SUNCamIyNXpkQ0J6WTJGc1pWUnlZVzV6Wm05eWJWZ2dQU0F0SUhSeVlXNXpabTl5YlU5eWFXZHBibGdnS2lBb2MyTmhiR1VnS2lBeEtUdGNiaUFnWTI5dWMzUWdjMk5oYkdWVWNtRnVjMlp2Y20xWklEMGdMU0IwY21GdWMyWnZjbTFQY21sbmFXNVpJQ29nS0hOallXeGxXU0FxSURFcE8xeHVJQ0JqYjI1emRDQnpZMkZzWlZKbGNHeGhZMlZZSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V0NBdklITmpZV3hsTzF4dUlDQmpiMjV6ZENCelkyRnNaVkpsY0d4aFkyVlpJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0F2SUhOallXeGxXVHRjYmlBZ1kyOXVjM1FnZEhKaGJuTm1iM0p0SUQwZ2UxeHVJQ0FnSUhSeVlXNXpiR0YwWlRvZ1lIUnlZVzV6YkdGMFpTZ2tlM04wWVhSbExuUnlZVzV6YkdGMFpWaDlMQ0FrZTNOMFlYUmxMblJ5WVc1emJHRjBaVmw5S1NCZ0xGeHVJQ0FnSUhOallXeGxPaUJnZEhKaGJuTnNZWFJsS0NSN2MyTmhiR1ZVY21GdWMyWnZjbTFZZlN3Z0pIdHpZMkZzWlZSeVlXNXpabTl5YlZsOUtTQnpZMkZzWlNna2UzTmpZV3hsZlN3Z0pIdHpZMkZzWlZsOUtTQjBjbUZ1YzJ4aGRHVW9KSHR6WTJGc1pWSmxjR3hoWTJWWWZTd2dKSHR6WTJGc1pWSmxjR3hoWTJWWmZTa2dZQ3hjYmlBZ0lDQnliM1JoZEdVNklHQnliM1JoZEdVb0pIdHpkR0YwWlM1eWIzUmhkR1Y5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxoOUxDQWtlM1J5WVc1elptOXliVTl5YVdkcGJsbDlLU0JnTEZ4dUlDQWdJSE5yWlhkWU9pQmdjMnRsZDFnb0pIdHpkR0YwWlM1emEyVjNXSDBwSUdBc1hHNGdJQ0FnYzJ0bGQxazZJR0J6YTJWM1dTZ2tlM04wWVhSbExuTnJaWGRaZlNrZ1lGeHVJQ0I5TzF4dVhHNGdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQnpkR0YwWlNrZ2UxeHVJQ0FnSUdsbUlDaHpkR0YwWlM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQnBaaUFvZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ0lDQm9ZWE5VY21GdWMyWnZjbTBnUFNCMGNuVmxPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjSEp2Y0hOYlkyRnRaV3hVYjBSaGMyZ29hMlY1S1YwZ1BTQnpkR0YwWlZ0clpYbGRPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR2xtSUNob1lYTlVjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQndjbTl3Y3k1MGNtRnVjMlp2Y20wZ1BTQW5KenRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQWdJR2xtSUNoMGNtRnVjMlp2Y20wdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmtaV1poZFd4MFZtRnNkV1VnUFNBb2EyVjVJRDA5UFNBbmMyTmhiR1VuS1NBL0lDY3hKeUE2SUNjd0p6dGNiaUFnSUNBZ0lDQWdjSEp2Y0hNdWRISmhibk5tYjNKdElDczlJSFJ5WVc1elptOXliVnRyWlhsZExuSmxjR3hoWTJVb0wzVnVaR1ZtYVc1bFpDOW5MQ0JrWldaaGRXeDBWbUZzZFdVcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCd2NtOXdjenRjYm4xY2JpSmRmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVuZGVyZXJzL3N2Zy9idWlsZC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL2luYy92YWx1ZS10eXBlcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGZpbGw6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzdHJva2U6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzY2FsZTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWDogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIG9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhLFxuICBmaWxsT3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGEsXG4gIHN0cm9rZU9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDNaaGJIVmxMWFI1Y0dWekxtcHpJbDBzSW01aGJXVnpJanBiSW1acGJHd2lMQ0p6ZEhKdmEyVWlMQ0p6WTJGc1pTSXNJbk5qWVd4bFdDSXNJbk5qWVd4bFdTSXNJbTl3WVdOcGRIa2lMQ0ptYVd4c1QzQmhZMmwwZVNJc0luTjBjbTlyWlU5d1lXTnBkSGtpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdhMEpCUldVN1FVRkRZa0VzZVVKQlJHRTdRVUZGWWtNc01rSkJSbUU3UVVGSFlrTXNNRUpCU0dFN1FVRkpZa01zTWtKQlNtRTdRVUZMWWtNc01rSkJUR0U3UVVGTllrTXNORUpCVG1FN1FVRlBZa01zWjBOQlVHRTdRVUZSWWtNN1FVRlNZU3hESWl3aVptbHNaU0k2SW5aaGJIVmxMWFI1Y0dWekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1lXeHdhR0VzSUdOdmJHOXlMQ0J6WTJGc1pTQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTJZV3gxWlMxMGVYQmxjeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdabWxzYkRvZ1kyOXNiM0lzWEc0Z0lITjBjbTlyWlRvZ1kyOXNiM0lzWEc0Z0lITmpZV3hsT2lCelkyRnNaU3hjYmlBZ2MyTmhiR1ZZT2lCelkyRnNaU3hjYmlBZ2MyTmhiR1ZaT2lCelkyRnNaU3hjYmlBZ2IzQmhZMmwwZVRvZ1lXeHdhR0VzWEc0Z0lHWnBiR3hQY0dGamFYUjVPaUJoYkhCb1lTeGNiaUFnYzNSeWIydGxUM0JoWTJsMGVUb2dZV3h3YUdGY2JuMDdJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVuZGVyZXJzL3N2Zy92YWx1ZS10eXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1BhdGhSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudFxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU1ZHUGF0aFJlbmRlcmVyID0gZnVuY3Rpb24gKF9SZW5kZXJlcikge1xuICBfaW5oZXJpdHMoU1ZHUGF0aFJlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIFNWR1BhdGhSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTVkdQYXRoUmVuZGVyZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIHZhciBfcHJvcHMkZWxlbWVudCRnZXRCQm8gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKSxcbiAgICAgICAgeCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby54LFxuICAgICAgICB5ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLnksXG4gICAgICAgIHdpZHRoID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8uaGVpZ2h0O1xuXG4gICAgX3RoaXMuZWxlbWVudERpbWVuc2lvbnMgPSB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeSxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgcGF0aExlbmd0aDogcHJvcHMuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBTVkdQYXRoUmVuZGVyZXIucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgdmFyIHBhdGhMZW5ndGggPSB0aGlzLmVsZW1lbnREaW1lbnNpb25zLnBhdGhMZW5ndGg7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICAoMCwgX3V0aWxzLnNldERPTUF0dHJzKShlbGVtZW50LCAoMCwgX2J1aWxkMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCBwYXRoTGVuZ3RoKSk7XG4gIH07XG5cbiAgU1ZHUGF0aFJlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgfTtcblxuICByZXR1cm4gU1ZHUGF0aFJlbmRlcmVyO1xufShfMi5kZWZhdWx0KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkxYQmhkR2d2YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2xzaVpXeGxiV1Z1ZENJc0luQnliM0J6SWl3aVUxWkhVR0YwYUZKbGJtUmxjbVZ5SWl3aVoyVjBRa0p2ZUNJc0luZ2lMQ0o1SWl3aWQybGtkR2dpTENKb1pXbG5hSFFpTENKbGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lJc0luQmhkR2hNWlc1bmRHZ2lMQ0puWlhSVWIzUmhiRXhsYm1kMGFDSXNJbTl1VW1WdVpHVnlJaXdpYzNSaGRHVWlMQ0p2YmxKbFlXUWlMQ0pyWlhraUxDSm5aWFJCZEhSeWFXSjFkR1VpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0clFrRTJRbVVzVlVGQlZVRXNUMEZCVml4RlFVRnRRa01zUzBGQmJrSXNSVUZCTUVJN1FVRkRka01zVTBGQlR5eEpRVUZKUXl4bFFVRktPMEZCUTB4R08wRkJSRXNzUzBGRlJrTXNTMEZHUlN4RlFVRlFPMEZCU1VRc1F6czdRVUZzUTBRN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdPenM3TzBsQlJVMURMR1U3T3p0QlFVTktMREpDUVVGWlJDeExRVUZhTEVWQlFXMUNPMEZCUVVFN08wRkJRVUVzYVVSQlEycENMSEZDUVVGTlFTeExRVUZPTEVOQlJHbENPenRCUVVGQkxHZERRVWRsUVN4TlFVRk5SQ3hQUVVGT0xFTkJRV05ITEU5QlFXUXNSVUZJWmp0QlFVRkJMRkZCUjFSRExFTkJTRk1zZVVKQlIxUkJMRU5CU0ZNN1FVRkJRU3hSUVVkT1F5eERRVWhOTEhsQ1FVZE9RU3hEUVVoTk8wRkJRVUVzVVVGSFNFTXNTMEZJUnl4NVFrRkhTRUVzUzBGSVJ6dEJRVUZCTEZGQlIwbERMRTFCU0Vvc2VVSkJSMGxCTEUxQlNFbzdPMEZCU1dwQ0xGVkJRVXRETEdsQ1FVRk1MRWRCUVhsQ08wRkJRM1pDU2l4VlFVUjFRanRCUVVWMlFrTXNWVUZHZFVJN1FVRkhka0pETEd0Q1FVaDFRanRCUVVsMlFrTXNiMEpCU25WQ08wRkJTM1pDUlN4clFrRkJXVklzVFVGQlRVUXNUMEZCVGl4RFFVRmpWU3hqUVVGa08wRkJURmNzUzBGQmVrSTdRVUZLYVVJN1FVRlhiRUk3T3pSQ1FVVkVReXhSTEhWQ1FVRlhPMEZCUVVFc1VVRkRSRVlzVlVGRVF5eEhRVU5qTEV0QlFVdEVMR2xDUVVSdVFpeERRVU5FUXl4VlFVUkRPMEZCUVVFc1VVRkZSRlFzVDBGR1F5eEhRVVZYTEV0QlFVdERMRXRCUm1oQ0xFTkJSVVJFTEU5QlJrTTdPMEZCUjFRc05FSkJRVmxCTEU5QlFWb3NSVUZCY1VJc2NVSkJRVTBzUzBGQlMxa3NTMEZCV0N4RlFVRnJRa2dzVlVGQmJFSXNRMEZCY2tJN1FVRkRSQ3hIT3pzMFFrRkZSRWtzVFN4dFFrRkJUME1zUnl4RlFVRkxPMEZCUTFZc1YwRkJUeXhMUVVGTFlpeExRVUZNTEVOQlFWZEVMRTlCUVZnc1EwRkJiVUpsTEZsQlFXNUNMRU5CUVdkRFJDeEhRVUZvUXl4RFFVRlFPMEZCUTBRc1J5SXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JTWlc1a1pYSmxjaUJtY205dElDY3VMaThuTzF4dWFXMXdiM0owSUdKMWFXeGtJR1p5YjIwZ0p5NHZZblZwYkdRbk8xeHVhVzF3YjNKMElIc2djMlYwUkU5TlFYUjBjbk1nZlNCbWNtOXRJQ2N1TGk4dUxpOXBibU12ZFhScGJITW5PMXh1WEc1amJHRnpjeUJUVmtkUVlYUm9VbVZ1WkdWeVpYSWdaWGgwWlc1a2N5QlNaVzVrWlhKbGNpQjdYRzRnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6S1NCN1hHNGdJQ0FnYzNWd1pYSW9jSEp2Y0hNcE8xeHVYRzRnSUNBZ1kyOXVjM1FnZXlCNExDQjVMQ0IzYVdSMGFDd2dhR1ZwWjJoMElIMGdQU0J3Y205d2N5NWxiR1Z0Wlc1MExtZGxkRUpDYjNnb0tUdGNiaUFnSUNCMGFHbHpMbVZzWlcxbGJuUkVhVzFsYm5OcGIyNXpJRDBnZTF4dUlDQWdJQ0FnZUN4Y2JpQWdJQ0FnSUhrc1hHNGdJQ0FnSUNCM2FXUjBhQ3hjYmlBZ0lDQWdJR2hsYVdkb2RDeGNiaUFnSUNBZ0lIQmhkR2hNWlc1bmRHZzZJSEJ5YjNCekxtVnNaVzFsYm5RdVoyVjBWRzkwWVd4TVpXNW5kR2dvS1Z4dUlDQWdJSDA3WEc0Z0lIMWNibHh1SUNCdmJsSmxibVJsY2lncElIdGNiaUFnSUNCamIyNXpkQ0I3SUhCaGRHaE1aVzVuZEdnZ2ZTQTlJSFJvYVhNdVpXeGxiV1Z1ZEVScGJXVnVjMmx2Ym5NN1hHNGdJQ0FnWTI5dWMzUWdleUJsYkdWdFpXNTBJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUhObGRFUlBUVUYwZEhKektHVnNaVzFsYm5Rc0lHSjFhV3hrS0hSb2FYTXVjM1JoZEdVc0lIQmhkR2hNWlc1bmRHZ3BLVHRjYmlBZ2ZWeHVYRzRnSUc5dVVtVmhaQ2hyWlhrcElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXdjbTl3Y3k1bGJHVnRaVzUwTG1kbGRFRjBkSEpwWW5WMFpTaHJaWGtwTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUNobGJHVnRaVzUwTENCd2NtOXdjeWtnZTF4dUlDQnlaWFIxY200Z2JtVjNJRk5XUjFCaGRHaFNaVzVrWlhKbGNpaDdYRzRnSUNBZ1pXeGxiV1Z1ZEN4Y2JpQWdJQ0F1TGk1d2NtOXdjMXh1SUNCOUtUdGNibjFjYmlKZGZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gcGVyY2VudFRvUGl4ZWxzKHBlcmNlbnQsIGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCAqIGxlbmd0aCArICdweCc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RhdGUsIGxlbmd0aCkge1xuICB2YXIgc3R5bGVzID0ge307XG4gIHZhciBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgbGVuZ3RoOiAnMCcsXG4gICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICB9O1xuICB2YXIgaGFzRGFzaEFycmF5ID0gZmFsc2U7XG5cbiAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICBzdHlsZXNbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGRhc2hBcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBkYXNoQXJyYXlTdHlsZXMuc3BhY2luZztcbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTFhCaGRHZ3ZZblZwYkdRdWFuTWlYU3dpYm1GdFpYTWlPbHNpY0dWeVkyVnVkRlJ2VUdsNFpXeHpJaXdpY0dWeVkyVnVkQ0lzSW14bGJtZDBhQ0lzSW5CaGNuTmxSbXh2WVhRaUxDSnpkR0YwWlNJc0luTjBlV3hsY3lJc0ltUmhjMmhCY25KaGVWTjBlV3hsY3lJc0luTndZV05wYm1jaUxDSm9ZWE5FWVhOb1FYSnlZWGtpTENKclpYa2lMQ0pvWVhOUGQyNVFjbTl3WlhKMGVTSXNJblpoYkhWbElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRVHM3T3pzN08wRkJUVUVzU1VGQlRVRXNhMEpCUVd0Q0xGTkJRV3hDUVN4bFFVRnJRaXhEUVVGRFF5eFBRVUZFTEVWQlFWVkRMRTFCUVZZN1FVRkJRU3hUUVVGelFrTXNWMEZCVjBZc1QwRkJXQ3hKUVVGelFpeEhRVUYyUWl4SFFVRTRRa01zVFVGQk9VSXNSMEZCZFVNc1NVRkJOVVE3UVVGQlFTeERRVUY0UWpzN2EwSkJSV1VzVlVGQlEwVXNTMEZCUkN4RlFVRlJSaXhOUVVGU0xFVkJRVzFDTzBGQlEyaERMRTFCUVUxSExGTkJRVk1zUlVGQlpqdEJRVU5CTEUxQlFVMURMR3RDUVVGclFqdEJRVU4wUWtvc1dVRkJVU3hIUVVSak8wRkJSWFJDU3l4aFFVRlRUQ3hUUVVGVE8wRkJSa2tzUjBGQmVFSTdRVUZKUVN4TlFVRkpUU3hsUVVGbExFdEJRVzVDT3p0QlFVVkJMRTlCUVVzc1NVRkJTVU1zUjBGQlZDeEpRVUZuUWt3c1MwRkJhRUlzUlVGQmRVSTdRVUZEY2tJc1VVRkJTVUVzVFVGQlRVMHNZMEZCVGl4RFFVRnhRa1FzUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNM1FpeFZRVUZOUlN4UlFVRlJVQ3hOUVVGTlN5eEhRVUZPTEVOQlFXUTdPMEZCUlVFc1kwRkJVVUVzUjBGQlVqdEJRVU5CTEdGQlFVc3NVVUZCVER0QlFVTkJMR0ZCUVVzc1UwRkJURHRCUVVORlJDeDVRa0ZCWlN4SlFVRm1PMEZCUTBGR0xEQkNRVUZuUWtjc1IwRkJhRUlzU1VGQmRVSlVMR2RDUVVGblFsY3NTMEZCYUVJc1JVRkJkVUpVTEUxQlFYWkNMRU5CUVhaQ08wRkJRMEU3UVVGRFJpeGhRVUZMTEZGQlFVdzdRVUZEUlVjc2FVSkJRVThzYlVKQlFWQXNTVUZCT0VKTUxHZENRVUZuUWl4RFFVRkRWeXhMUVVGcVFpeEZRVUYzUWxRc1RVRkJlRUlzUTBGQk9VSTdRVUZEUVR0QlFVTkdPMEZCUTBWSExHbENRVUZQU1N4SFFVRlFMRWxCUVdORkxFdEJRV1E3UVVGV1JqdEJRVmxFTzBGQlEwWTdPMEZCUlVRc1RVRkJTVWdzV1VGQlNpeEZRVUZyUWp0QlFVTm9Ra2dzVjBGQlR5eHJRa0ZCVUN4SlFVRTJRa01zWjBKQlFXZENTaXhOUVVGb1FpeEhRVUY1UWl4SFFVRjZRaXhIUVVFclFra3NaMEpCUVdkQ1F5eFBRVUUxUlR0QlFVTkVPenRCUVVWRUxGTkJRVTlHTEUxQlFWQTdRVUZEUkN4RElpd2labWxzWlNJNkltSjFhV3hrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQWdRMjl1ZG1WeWRDQndaWEpqWlc1MFlXZGxJSFJ2SUhCcGVHVnNjMXh1WEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1VHVnlZMlZ1ZEdGblpTQnZaaUIwYjNSaGJDQnNaVzVuZEdoY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlViM1JoYkNCc1pXNW5kR2hjYmlvdlhHNWpiMjV6ZENCd1pYSmpaVzUwVkc5UWFYaGxiSE1nUFNBb2NHVnlZMlZ1ZEN3Z2JHVnVaM1JvS1NBOVBpQW9jR0Z5YzJWR2JHOWhkQ2h3WlhKalpXNTBLU0F2SURFd01Da2dLaUJzWlc1bmRHZ2dLeUFuY0hnbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9jM1JoZEdVc0lHeGxibWQwYUNrZ1BUNGdlMXh1SUNCamIyNXpkQ0J6ZEhsc1pYTWdQU0I3ZlR0Y2JpQWdZMjl1YzNRZ1pHRnphRUZ5Y21GNVUzUjViR1Z6SUQwZ2UxeHVJQ0FnSUd4bGJtZDBhRG9nSnpBbkxGeHVJQ0FnSUhOd1lXTnBibWM2SUd4bGJtZDBhQ0FySUNkd2VDZGNiaUFnZlR0Y2JpQWdiR1YwSUdoaGMwUmhjMmhCY25KaGVTQTlJR1poYkhObE8xeHVYRzRnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ6ZEdGMFpTa2dlMXh1SUNBZ0lHbG1JQ2h6ZEdGMFpTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlITjBZWFJsVzJ0bGVWMDdYRzVjYmlBZ0lDQWdJSE4zYVhSamFDQW9hMlY1S1NCN1hHNGdJQ0FnSUNCallYTmxJQ2RzWlc1bmRHZ25PbHh1SUNBZ0lDQWdZMkZ6WlNBbmMzQmhZMmx1WnljNlhHNGdJQ0FnSUNBZ0lHaGhjMFJoYzJoQmNuSmhlU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJR1JoYzJoQmNuSmhlVk4wZVd4bGMxdHJaWGxkSUQwZ2NHVnlZMlZ1ZEZSdlVHbDRaV3h6S0haaGJIVmxMQ0JzWlc1bmRHZ3BPMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lHTmhjMlVnSjI5bVpuTmxkQ2M2WEc0Z0lDQWdJQ0FnSUhOMGVXeGxjMXNuYzNSeWIydGxMV1JoYzJodlptWnpaWFFuWFNBOUlIQmxjbU5sYm5SVWIxQnBlR1ZzY3lndGRtRnNkV1VzSUd4bGJtZDBhQ2s3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdaR1ZtWVhWc2REcGNiaUFnSUNBZ0lDQWdjM1I1YkdWelcydGxlVjBnUFNCMllXeDFaVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JwWmlBb2FHRnpSR0Z6YUVGeWNtRjVLU0I3WEc0Z0lDQWdjM1I1YkdWeld5ZHpkSEp2YTJVdFpHRnphR0Z5Y21GNUoxMGdQU0JrWVhOb1FYSnlZWGxUZEhsc1pYTXViR1Z1WjNSb0lDc2dKeUFuSUNzZ1pHRnphRUZ5Y21GNVUzUjViR1Z6TG5Od1lXTnBibWM3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnYzNSNWJHVnpPMXh1ZlR0Y2JpSmRmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2J1aWxkLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCcuL3BvcG1vdGlvbicpO1xuXG52YXIgcG9wbW90aW9uID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3BvcG1vdGlvbik7XG5cbnZhciBfc3JjID0gcmVxdWlyZSgnLi4vcGFja2FnZXMvcG9wbW90aW9uLWRyYWdnYWJsZS9zcmMnKTtcblxudmFyIF9zcmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3JjKTtcblxudmFyIF9zcmMzID0gcmVxdWlyZSgnLi4vcGFja2FnZXMvcG9wbW90aW9uLWluZXJ0aWEvc3JjJyk7XG5cbnZhciBfc3JjNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NyYzMpO1xuXG52YXIgX3NyYzUgPSByZXF1aXJlKCcuLi9wYWNrYWdlcy9wb3Btb3Rpb24tc2Nyb2xsL3NyYycpO1xuXG52YXIgX3NyYzYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcmM1KTtcblxudmFyIF9zcmM3ID0gcmVxdWlyZSgnLi4vcGFja2FnZXMvcG9wbW90aW9uLXNwaW5uYWJsZS9zcmMnKTtcblxudmFyIF9zcmM4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3JjNyk7XG5cbnZhciBfc3JjOSA9IHJlcXVpcmUoJy4uL3BhY2thZ2VzL3BvcG1vdGlvbi10aW1lbGluZS9zcmMnKTtcblxudmFyIF9zcmMxMCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NyYzkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG53aW5kb3cucG9wbW90aW9uWEwgPSBfZXh0ZW5kcyh7fSwgcG9wbW90aW9uLCB7XG4gIGRyYWdnYWJsZTogX3NyYzIuZGVmYXVsdCxcbiAgaW5lcnRpYTogX3NyYzQuZGVmYXVsdCxcbiAgc2Nyb2xsOiBfc3JjNi5kZWZhdWx0LFxuICBzcGlubmFibGU6IF9zcmM4LmRlZmF1bHQsXG4gIHRpbWVsaW5lOiBfc3JjMTAuZGVmYXVsdFxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bmJHOWlZV3d0ZUd3dWFuTWlYU3dpYm1GdFpYTWlPbHNpY0c5d2JXOTBhVzl1SWl3aWQybHVaRzkzSWl3aWNHOXdiVzkwYVc5dVdFd2lMQ0prY21GbloyRmliR1VpTENKcGJtVnlkR2xoSWl3aWMyTnliMnhzSWl3aWMzQnBibTVoWW14bElpd2lkR2x0Wld4cGJtVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN1NVRkJXVUVzVXpzN1FVRkRXanM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3T3p0QlFVVkJReXhQUVVGUFF5eFhRVUZRTEdkQ1FVTkxSaXhUUVVSTU8wRkJSVVZITERCQ1FVWkdPMEZCUjBWRExIZENRVWhHTzBGQlNVVkRMSFZDUVVwR08wRkJTMFZETERCQ1FVeEdPMEZCVFVWRE8wRkJUa1lpTENKbWFXeGxJam9pWjJ4dlltRnNMWGhzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJQ29nWVhNZ2NHOXdiVzkwYVc5dUlHWnliMjBnSnk0dmNHOXdiVzkwYVc5dUp6dGNibWx0Y0c5eWRDQmtjbUZuWjJGaWJHVWdabkp2YlNBbkxpNHZjR0ZqYTJGblpYTXZjRzl3Ylc5MGFXOXVMV1J5WVdkbllXSnNaUzl6Y21Nbk8xeHVhVzF3YjNKMElHbHVaWEowYVdFZ1puSnZiU0FuTGk0dmNHRmphMkZuWlhNdmNHOXdiVzkwYVc5dUxXbHVaWEowYVdFdmMzSmpKenRjYm1sdGNHOXlkQ0J6WTNKdmJHd2dabkp2YlNBbkxpNHZjR0ZqYTJGblpYTXZjRzl3Ylc5MGFXOXVMWE5qY205c2JDOXpjbU1uTzF4dWFXMXdiM0owSUhOd2FXNXVZV0pzWlNCbWNtOXRJQ2N1TGk5d1lXTnJZV2RsY3k5d2IzQnRiM1JwYjI0dGMzQnBibTVoWW14bEwzTnlZeWM3WEc1cGJYQnZjblFnZEdsdFpXeHBibVVnWm5KdmJTQW5MaTR2Y0dGamEyRm5aWE12Y0c5d2JXOTBhVzl1TFhScGJXVnNhVzVsTDNOeVl5YzdYRzVjYm5kcGJtUnZkeTV3YjNCdGIzUnBiMjVZVENBOUlIdGNiaUFnTGk0dWNHOXdiVzkwYVc5dUxGeHVJQ0JrY21GbloyRmliR1VzWEc0Z0lHbHVaWEowYVdFc1hHNGdJSE5qY205c2JDeGNiaUFnYzNCcGJtNWhZbXhsTEZ4dUlDQjBhVzFsYkdsdVpWeHVmVHRjYmlKZGZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nbG9iYWwteGwuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGRyYWdnYWJsZTtcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCdwb3Btb3Rpb24nKTtcblxuZnVuY3Rpb24gZHJhZ2dhYmxlKG5vZGUpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgX3JlZiR4ID0gX3JlZi54LFxuICAgICAgeCA9IF9yZWYkeCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYkeCxcbiAgICAgIF9yZWYkeSA9IF9yZWYueSxcbiAgICAgIHkgPSBfcmVmJHkgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmJHksXG4gICAgICBfcmVmJGluaXRpYWxYID0gX3JlZi5pbml0aWFsWCxcbiAgICAgIGluaXRpYWxYID0gX3JlZiRpbml0aWFsWCA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYkaW5pdGlhbFgsXG4gICAgICBfcmVmJGluaXRpYWxZID0gX3JlZi5pbml0aWFsWSxcbiAgICAgIGluaXRpYWxZID0gX3JlZiRpbml0aWFsWSA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYkaW5pdGlhbFksXG4gICAgICBvbkRyYWcgPSBfcmVmLm9uRHJhZyxcbiAgICAgIG9uRHJhZ1N0YXJ0ID0gX3JlZi5vbkRyYWdTdGFydCxcbiAgICAgIG9uRHJhZ1N0b3AgPSBfcmVmLm9uRHJhZ1N0b3A7XG5cbiAgdmFyIG5vZGVSZW5kZXJlciA9ICgwLCBfcG9wbW90aW9uLmNzcykobm9kZSk7XG4gIHZhciB2YWx1ZXMgPSB7fTtcbiAgaWYgKHgpIHZhbHVlcy54ID0gKDAsIF9wb3Btb3Rpb24udmFsdWUpKGluaXRpYWxYLCBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBub2RlUmVuZGVyZXIuc2V0KCd4Jywgdik7XG4gIH0pO1xuICBpZiAoeSkgdmFsdWVzLnkgPSAoMCwgX3BvcG1vdGlvbi52YWx1ZSkoaW5pdGlhbFksIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIG5vZGVSZW5kZXJlci5zZXQoJ3knLCB2KTtcbiAgfSk7XG5cbiAgdmFyIG5vZGVYWSA9ICgwLCBfcG9wbW90aW9uLmNvbXBvc2l0ZSkodmFsdWVzLCB7XG4gICAgb25VcGRhdGU6IG9uRHJhZ1xuICB9KTtcblxuICBmdW5jdGlvbiBzdGFydFRyYWNraW5nKGUpIHtcbiAgICB2YXIgcG9pbnRlclRyYWNrZXIgPSAoMCwgX3BvcG1vdGlvbi5wb2ludGVyKShlKS5zdGFydCgpO1xuXG4gICAgaWYgKHgpIHtcbiAgICAgICgwLCBfcG9wbW90aW9uLnRyYWNrT2Zmc2V0KShwb2ludGVyVHJhY2tlci54LCB7XG4gICAgICAgIGZyb206IG5vZGVYWS54LmdldCgpLFxuICAgICAgICBvblVwZGF0ZTogbm9kZVhZLnhcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgaWYgKHkpIHtcbiAgICAgICgwLCBfcG9wbW90aW9uLnRyYWNrT2Zmc2V0KShwb2ludGVyVHJhY2tlci55LCB7XG4gICAgICAgIGZyb206IG5vZGVYWS55LmdldCgpLFxuICAgICAgICBvblVwZGF0ZTogbm9kZVhZLnksXG4gICAgICAgIG9uU3RvcDogZnVuY3Rpb24gb25TdG9wKCkge1xuICAgICAgICAgIHJldHVybiBwb2ludGVyVHJhY2tlci5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgaWYgKG9uRHJhZ1N0YXJ0KSBvbkRyYWdTdGFydChub2RlWFkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RvcFRyYWNraW5nKCkge1xuICAgIG5vZGVYWS5zdG9wKCk7XG5cbiAgICBpZiAob25EcmFnU3RvcCkgb25EcmFnU3RvcChub2RlWFkpO1xuICB9XG5cbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzdGFydFRyYWNraW5nKTtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc3RhcnRUcmFja2luZywgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BUcmFja2luZyk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgc3RvcFRyYWNraW5nKTtcblxuICByZXR1cm4gbm9kZVhZO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5CaFkydGhaMlZ6TDNCdmNHMXZkR2x2Ymkxa2NtRm5aMkZpYkdVdmMzSmpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSW1SeVlXZG5ZV0pzWlNJc0ltNXZaR1VpTENKNElpd2llU0lzSW1sdWFYUnBZV3hZSWl3aWFXNXBkR2xoYkZraUxDSnZia1J5WVdjaUxDSnZia1J5WVdkVGRHRnlkQ0lzSW05dVJISmhaMU4wYjNBaUxDSnViMlJsVW1WdVpHVnlaWElpTENKMllXeDFaWE1pTENKMklpd2ljMlYwSWl3aWJtOWtaVmhaSWl3aWIyNVZjR1JoZEdVaUxDSnpkR0Z5ZEZSeVlXTnJhVzVuSWl3aVpTSXNJbkJ2YVc1MFpYSlVjbUZqYTJWeUlpd2ljM1JoY25RaUxDSm1jbTl0SWl3aVoyVjBJaXdpYjI1VGRHOXdJaXdpYzNSdmNDSXNJbk4wYjNCVWNtRmphMmx1WnlJc0ltRmtaRVYyWlc1MFRHbHpkR1Z1WlhJaUxDSndZWE56YVhabElpd2laRzlqZFcxbGJuUWlYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZGZDBKQkxGTTdPMEZCUm5oQ096dEJRVVZsTEZOQlFWTkJMRk5CUVZRc1EwRkJiVUpETEVsQlFXNUNMRVZCVVZBN1FVRkJRU3hwUmtGQlNpeEZRVUZKTzBGQlFVRXNiMEpCVUU1RExFTkJUMDA3UVVGQlFTeE5RVkJPUVN4RFFVOU5MREJDUVZCR0xFbEJUMFU3UVVGQlFTeHZRa0ZPVGtNc1EwRk5UVHRCUVVGQkxFMUJUazVCTEVOQlRVMHNNRUpCVGtZc1NVRk5SVHRCUVVGQkxESkNRVXhPUXl4UlFVdE5PMEZCUVVFc1RVRk1Ua0VzVVVGTFRTeHBRMEZNU3l4RFFVdE1PMEZCUVVFc01rSkJTazVETEZGQlNVMDdRVUZCUVN4TlFVcE9RU3hSUVVsTkxHbERRVXBMTEVOQlNVdzdRVUZCUVN4TlFVaE9ReXhOUVVkTkxGRkJTRTVCTEUxQlIwMDdRVUZCUVN4TlFVWk9ReXhYUVVWTkxGRkJSazVCTEZkQlJVMDdRVUZCUVN4TlFVUk9ReXhWUVVOTkxGRkJSRTVCTEZWQlEwMDdPMEZCUTA0c1RVRkJUVU1zWlVGQlpTeHZRa0ZCU1ZJc1NVRkJTaXhEUVVGeVFqdEJRVU5CTEUxQlFVMVRMRk5CUVZNc1JVRkJaanRCUVVOQkxFMUJRVWxTTEVOQlFVb3NSVUZCVDFFc1QwRkJUMUlzUTBGQlVDeEhRVUZYTEhOQ1FVRk5SU3hSUVVGT0xFVkJRV2RDTEZWQlFVTlBMRU5CUVVRN1FVRkJRU3hYUVVGUFJpeGhRVUZoUnl4SFFVRmlMRU5CUVdsQ0xFZEJRV3BDTEVWQlFYTkNSQ3hEUVVGMFFpeERRVUZRTzBGQlFVRXNSMEZCYUVJc1EwRkJXRHRCUVVOUUxFMUJRVWxTTEVOQlFVb3NSVUZCVDA4c1QwRkJUMUFzUTBGQlVDeEhRVUZYTEhOQ1FVRk5SU3hSUVVGT0xFVkJRV2RDTEZWQlFVTk5MRU5CUVVRN1FVRkJRU3hYUVVGUFJpeGhRVUZoUnl4SFFVRmlMRU5CUVdsQ0xFZEJRV3BDTEVWQlFYTkNSQ3hEUVVGMFFpeERRVUZRTzBGQlFVRXNSMEZCYUVJc1EwRkJXRHM3UVVGRlVDeE5RVUZOUlN4VFFVRlRMREJDUVVGVlNDeE5RVUZXTEVWQlFXdENPMEZCUXk5Q1NTeGpRVUZWVWp0QlFVUnhRaXhIUVVGc1FpeERRVUZtT3p0QlFVbEJMRmRCUVZOVExHRkJRVlFzUTBGQmRVSkRMRU5CUVhaQ0xFVkJRVEJDTzBGQlEzaENMRkZCUVUxRExHbENRVUZwUWl4M1FrRkJVVVFzUTBGQlVpeEZRVUZYUlN4TFFVRllMRVZCUVhaQ096dEJRVVZCTEZGQlFVbG9RaXhEUVVGS0xFVkJRVTg3UVVGRFRDeHJRMEZCV1dVc1pVRkJaV1lzUTBGQk0wSXNSVUZCT0VJN1FVRkROVUpwUWl4alFVRk5UaXhQUVVGUFdDeERRVUZRTEVOQlFWTnJRaXhIUVVGVUxFVkJSSE5DTzBGQlJUVkNUaXhyUWtGQlZVUXNUMEZCVDFnN1FVRkdWeXhQUVVFNVFpeEZRVWRIWjBJc1MwRklTRHRCUVVsRU96dEJRVVZFTEZGQlFVbG1MRU5CUVVvc1JVRkJUenRCUVVOTUxHdERRVUZaWXl4bFFVRmxaQ3hEUVVFelFpeEZRVUU0UWp0QlFVTTFRbWRDTEdOQlFVMU9MRTlCUVU5V0xFTkJRVkFzUTBGQlUybENMRWRCUVZRc1JVRkVjMEk3UVVGRk5VSk9MR3RDUVVGVlJDeFBRVUZQVml4RFFVWlhPMEZCUnpWQ2EwSXNaMEpCUVZFN1FVRkJRU3hwUWtGQlRVb3NaVUZCWlVzc1NVRkJaaXhGUVVGT08wRkJRVUU3UVVGSWIwSXNUMEZCT1VJc1JVRkpSMG9zUzBGS1NEdEJRVXRFT3p0QlFVVkVMRkZCUVVsWUxGZEJRVW9zUlVGQmFVSkJMRmxCUVZsTkxFMUJRVm83UVVGRGJFSTdPMEZCUlVRc1YwRkJVMVVzV1VGQlZDeEhRVUYzUWp0QlFVTjBRbFlzVjBGQlQxTXNTVUZCVURzN1FVRkZRU3hSUVVGSlpDeFZRVUZLTEVWQlFXZENRU3hYUVVGWFN5eE5RVUZZTzBGQlEycENPenRCUVVWRVdpeFBRVUZMZFVJc1owSkJRVXdzUTBGQmMwSXNWMEZCZEVJc1JVRkJiVU5VTEdGQlFXNURPMEZCUTBGa0xFOUJRVXQxUWl4blFrRkJUQ3hEUVVGelFpeFpRVUYwUWl4RlFVRnZRMVFzWVVGQmNFTXNSVUZCYlVRc1JVRkJSVlVzVTBGQlV5eExRVUZZTEVWQlFXNUVPMEZCUTBGRExGZEJRVk5HTEdkQ1FVRlVMRU5CUVRCQ0xGTkJRVEZDTEVWQlFYRkRSQ3haUVVGeVF6dEJRVU5CUnl4WFFVRlRSaXhuUWtGQlZDeERRVUV3UWl4VlFVRXhRaXhGUVVGelEwUXNXVUZCZEVNN08wRkJSVUVzVTBGQlQxWXNUVUZCVUR0QlFVTkVJaXdpWm1sc1pTSTZJbWx1WkdWNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kyOXRjRzl6YVhSbExDQjJZV3gxWlN3Z1kzTnpMQ0J3YjJsdWRHVnlMQ0IwY21GamEwOW1abk5sZENCOUlHWnliMjBnSjNCdmNHMXZkR2x2YmljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlHUnlZV2RuWVdKc1pTaHViMlJsTENCN1hHNGdJSGdnUFNCMGNuVmxMRnh1SUNCNUlEMGdkSEoxWlN4Y2JpQWdhVzVwZEdsaGJGZ2dQU0F3TEZ4dUlDQnBibWwwYVdGc1dTQTlJREFzWEc0Z0lHOXVSSEpoWnl4Y2JpQWdiMjVFY21GblUzUmhjblFzWEc0Z0lHOXVSSEpoWjFOMGIzQmNibjBnUFNCN2ZTa2dlMXh1SUNCamIyNXpkQ0J1YjJSbFVtVnVaR1Z5WlhJZ1BTQmpjM01vYm05a1pTazdYRzRnSUdOdmJuTjBJSFpoYkhWbGN5QTlJSHQ5TzF4dUlDQnBaaUFvZUNrZ2RtRnNkV1Z6TG5nZ1BTQjJZV3gxWlNocGJtbDBhV0ZzV0N3Z0tIWXBJRDArSUc1dlpHVlNaVzVrWlhKbGNpNXpaWFFvSjNnbkxDQjJLU2s3WEc0Z0lHbG1JQ2g1S1NCMllXeDFaWE11ZVNBOUlIWmhiSFZsS0dsdWFYUnBZV3haTENBb2Rpa2dQVDRnYm05a1pWSmxibVJsY21WeUxuTmxkQ2duZVNjc0lIWXBLVHRjYmx4dUlDQmpiMjV6ZENCdWIyUmxXRmtnUFNCamIyMXdiM05wZEdVb2RtRnNkV1Z6TENCN1hHNGdJQ0FnYjI1VmNHUmhkR1U2SUc5dVJISmhaMXh1SUNCOUtUdGNibHh1SUNCbWRXNWpkR2x2YmlCemRHRnlkRlJ5WVdOcmFXNW5LR1VwSUh0Y2JpQWdJQ0JqYjI1emRDQndiMmx1ZEdWeVZISmhZMnRsY2lBOUlIQnZhVzUwWlhJb1pTa3VjM1JoY25Rb0tUdGNibHh1SUNBZ0lHbG1JQ2g0S1NCN1hHNGdJQ0FnSUNCMGNtRmphMDltWm5ObGRDaHdiMmx1ZEdWeVZISmhZMnRsY2k1NExDQjdYRzRnSUNBZ0lDQWdJR1p5YjIwNklHNXZaR1ZZV1M1NExtZGxkQ2dwTEZ4dUlDQWdJQ0FnSUNCdmJsVndaR0YwWlRvZ2JtOWtaVmhaTG5oY2JpQWdJQ0FnSUgwcExuTjBZWEowS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIa3BJSHRjYmlBZ0lDQWdJSFJ5WVdOclQyWm1jMlYwS0hCdmFXNTBaWEpVY21GamEyVnlMbmtzSUh0Y2JpQWdJQ0FnSUNBZ1puSnZiVG9nYm05a1pWaFpMbmt1WjJWMEtDa3NYRzRnSUNBZ0lDQWdJRzl1VlhCa1lYUmxPaUJ1YjJSbFdGa3VlU3hjYmlBZ0lDQWdJQ0FnYjI1VGRHOXdPaUFvS1NBOVBpQndiMmx1ZEdWeVZISmhZMnRsY2k1emRHOXdLQ2xjYmlBZ0lDQWdJSDBwTG5OMFlYSjBLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0c5dVJISmhaMU4wWVhKMEtTQnZia1J5WVdkVGRHRnlkQ2h1YjJSbFdGa3BPMXh1SUNCOVhHNWNiaUFnWm5WdVkzUnBiMjRnYzNSdmNGUnlZV05yYVc1bktDa2dlMXh1SUNBZ0lHNXZaR1ZZV1M1emRHOXdLQ2s3WEc1Y2JpQWdJQ0JwWmlBb2IyNUVjbUZuVTNSdmNDa2diMjVFY21GblUzUnZjQ2h1YjJSbFdGa3BPMXh1SUNCOVhHNWNiaUFnYm05a1pTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHRiM1Z6WldSdmQyNG5MQ0J6ZEdGeWRGUnlZV05yYVc1bktUdGNiaUFnYm05a1pTNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZDBiM1ZqYUhOMFlYSjBKeXdnYzNSaGNuUlVjbUZqYTJsdVp5d2dleUJ3WVhOemFYWmxPaUJtWVd4elpTQjlLVHRjYmlBZ1pHOWpkVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmJXOTFjMlYxY0Njc0lITjBiM0JVY21GamEybHVaeWs3WEc0Z0lHUnZZM1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0ozUnZkV05vWlc1a0p5d2djM1J2Y0ZSeVlXTnJhVzVuS1R0Y2JseHVJQ0J5WlhSMWNtNGdibTlrWlZoWk8xeHVmVnh1SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcG9wbW90aW9uLWRyYWdnYWJsZS9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCdwb3Btb3Rpb24nKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBJbXBsZW1lbnRhdGlvbiBvZiBodHRwczovL2FyaXlhLmlvLzIwMTMvMTEvamF2YXNjcmlwdC1raW5ldGljLXNjcm9sbGluZy1wYXJ0LTJcblxuXG52YXIgSW5lcnRpYSA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhJbmVydGlhLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBJbmVydGlhKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydGlhKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgSW5lcnRpYS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHZlbG9jaXR5ID0gX3Byb3BzLnZlbG9jaXR5LFxuICAgICAgICBwb3dlciA9IF9wcm9wcy5wb3dlcixcbiAgICAgICAgbW9kaWZ5VGFyZ2V0ID0gX3Byb3BzLm1vZGlmeVRhcmdldDtcblxuXG4gICAgdGhpcy5hbXBsaXR1ZGUgPSBwb3dlciAqIHZlbG9jaXR5O1xuICAgIHRoaXMudGFyZ2V0ID0gTWF0aC5yb3VuZCh0aGlzLmN1cnJlbnQgKyB0aGlzLmFtcGxpdHVkZSk7XG4gICAgdGhpcy5lbGFwc2VkID0gMDtcblxuICAgIGlmIChtb2RpZnlUYXJnZXQpIHtcbiAgICAgIHRoaXMudGFyZ2V0ID0gbW9kaWZ5VGFyZ2V0KHRoaXMudGFyZ2V0KTtcbiAgICB9XG4gIH07XG5cbiAgSW5lcnRpYS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYXV0b1N0b3BEZWx0YSA9IF9wcm9wczIuYXV0b1N0b3BEZWx0YSxcbiAgICAgICAgdGltZUNvbnN0YW50ID0gX3Byb3BzMi50aW1lQ29uc3RhbnQ7XG5cblxuICAgIHRoaXMuZWxhcHNlZCArPSAoMCwgX3BvcG1vdGlvbi50aW1lU2luY2VMYXN0RnJhbWUpKCk7XG4gICAgdmFyIGRlbHRhID0gLXRoaXMuYW1wbGl0dWRlICogTWF0aC5leHAoLXRoaXMuZWxhcHNlZCAvIHRpbWVDb25zdGFudCk7XG4gICAgdmFyIGlzTW92aW5nID0gZGVsdGEgPiBhdXRvU3RvcERlbHRhIHx8IGRlbHRhIDwgLWF1dG9TdG9wRGVsdGE7XG4gICAgaWYgKCFpc01vdmluZykgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICByZXR1cm4gaXNNb3ZpbmcgPyB0aGlzLnRhcmdldCArIGRlbHRhIDogdGhpcy50YXJnZXQ7XG4gIH07XG5cbiAgSW5lcnRpYS5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgfTtcblxuICByZXR1cm4gSW5lcnRpYTtcbn0oX3BvcG1vdGlvbi5BY3Rpb24pO1xuXG5JbmVydGlhLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmVsb2NpdHk6IDAsXG4gIGZyb206IDAsXG4gIHBvd2VyOiAwLjgsXG4gIHRpbWVDb25zdGFudDogMzUwLFxuICBhdXRvU3RvcERlbHRhOiAwLjVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IEluZXJ0aWEocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluQmhZMnRoWjJWekwzQnZjRzF2ZEdsdmJpMXBibVZ5ZEdsaEwzTnlZeTlwYm1SbGVDNXFjeUpkTENKdVlXMWxjeUk2V3lKSmJtVnlkR2xoSWl3aWIyNVRkR0Z5ZENJc0luQnliM0J6SWl3aWRtVnNiMk5wZEhraUxDSndiM2RsY2lJc0ltMXZaR2xtZVZSaGNtZGxkQ0lzSW1GdGNHeHBkSFZrWlNJc0luUmhjbWRsZENJc0lrMWhkR2dpTENKeWIzVnVaQ0lzSW1OMWNuSmxiblFpTENKbGJHRndjMlZrSWl3aWRYQmtZWFJsSWl3aVlYVjBiMU4wYjNCRVpXeDBZU0lzSW5ScGJXVkRiMjV6ZEdGdWRDSXNJbVJsYkhSaElpd2laWGh3SWl3aWFYTk5iM1pwYm1jaUxDSnBjME52YlhCc1pYUmxJaXdpYVhOQlkzUnBiMjVEYjIxd2JHVjBaU0lzSW1SbFptRjFiSFJRY205d2N5SXNJbVp5YjIwaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkRRVHM3T3pzN095dGxRVVJCT3pzN1NVRkhUVUVzVHpzN096czdPenM3TzI5Q1FWTktReXhQTEhOQ1FVRlZPMEZCUVVFc2FVSkJRMnRETEV0QlFVdERMRXRCUkhaRE8wRkJRVUVzVVVGRFFVTXNVVUZFUVN4VlFVTkJRU3hSUVVSQk8wRkJRVUVzVVVGRFZVTXNTMEZFVml4VlFVTlZRU3hMUVVSV08wRkJRVUVzVVVGRGFVSkRMRmxCUkdwQ0xGVkJRMmxDUVN4WlFVUnFRanM3TzBGQlIxSXNVMEZCUzBNc1UwRkJUQ3hIUVVGcFFrWXNVVUZCVVVRc1VVRkJla0k3UVVGRFFTeFRRVUZMU1N4TlFVRk1MRWRCUVdORExFdEJRVXRETEV0QlFVd3NRMEZCVnl4TFFVRkxReXhQUVVGTUxFZEJRV1VzUzBGQlMwb3NVMEZCTDBJc1EwRkJaRHRCUVVOQkxGTkJRVXRMTEU5QlFVd3NSMEZCWlN4RFFVRm1PenRCUVVWQkxGRkJRVWxPTEZsQlFVb3NSVUZCYTBJN1FVRkRhRUlzVjBGQlMwVXNUVUZCVEN4SFFVRmpSaXhoUVVGaExFdEJRVXRGTEUxQlFXeENMRU5CUVdRN1FVRkRSRHRCUVVOR0xFYzdPMjlDUVVWRVN5eE5MSEZDUVVGVE8wRkJRVUVzYTBKQlEybERMRXRCUVV0V0xFdEJSSFJETzBGQlFVRXNVVUZEUTFjc1lVRkVSQ3hYUVVORFFTeGhRVVJFTzBGQlFVRXNVVUZEWjBKRExGbEJSR2hDTEZkQlEyZENRU3haUVVSb1FqczdPMEZCUjFBc1UwRkJTMGdzVDBGQlRDeEpRVUZuUWl4dlEwRkJhRUk3UVVGRFFTeFJRVUZOU1N4UlFVRlJMRU5CUVVNc1MwRkJTMVFzVTBGQlRpeEhRVUZyUWtVc1MwRkJTMUVzUjBGQlRDeERRVUZUTEVOQlFVTXNTMEZCUzB3c1QwRkJUaXhIUVVGblFrY3NXVUZCZWtJc1EwRkJhRU03UVVGRFFTeFJRVUZOUnl4WFFVRlpSaXhSUVVGUlJpeGhRVUZTTEVsQlFYbENSU3hSUVVGUkxFTkJRVU5HTEdGQlFYQkVPMEZCUTBFc1VVRkJTU3hEUVVGRFNTeFJRVUZNTEVWQlFXVXNTMEZCUzBNc1ZVRkJUQ3hIUVVGclFpeEpRVUZzUWp0QlFVTm1MRmRCUVU5RUxGZEJRVmNzUzBGQlMxWXNUVUZCVEN4SFFVRmpVU3hMUVVGNlFpeEhRVUZwUXl4TFFVRkxVaXhOUVVFM1F6dEJRVU5FTEVjN08yOUNRVVZFV1N4blFpd3JRa0ZCYlVJN1FVRkRha0lzVjBGQlR5eExRVUZMUkN4VlFVRmFPMEZCUTBRc1J6czdPenM3UVVGcVEwZHNRaXhQTEVOQlEwZHZRaXhaTEVkQlFXVTdRVUZEY0VKcVFpeFpRVUZWTEVOQlJGVTdRVUZGY0VKclFpeFJRVUZOTEVOQlJtTTdRVUZIY0VKcVFpeFRRVUZQTEVkQlNHRTdRVUZKY0VKVkxHZENRVUZqTEVkQlNrMDdRVUZMY0VKRUxHbENRVUZsTzBGQlRFc3NRenM3YTBKQmJVTlVMRlZCUVVOWUxFdEJRVVE3UVVGQlFTeFRRVUZYTEVsQlFVbEdMRTlCUVVvc1EwRkJXVVVzUzBGQldpeERRVUZZTzBGQlFVRXNReUlzSW1acGJHVWlPaUpwYm1SbGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHZJRWx0Y0d4bGJXVnVkR0YwYVc5dUlHOW1JR2gwZEhCek9pOHZZWEpwZVdFdWFXOHZNakF4TXk4eE1TOXFZWFpoYzJOeWFYQjBMV3RwYm1WMGFXTXRjMk55YjJ4c2FXNW5MWEJoY25RdE1seHVhVzF3YjNKMElIc2dRV04wYVc5dUxDQjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVWdmU0JtY205dElDZHdiM0J0YjNScGIyNG5PMXh1WEc1amJHRnpjeUJKYm1WeWRHbGhJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYzNSaGRHbGpJR1JsWm1GMWJIUlFjbTl3Y3lBOUlIdGNiaUFnSUNCMlpXeHZZMmwwZVRvZ01DeGNiaUFnSUNCbWNtOXRPaUF3TEZ4dUlDQWdJSEJ2ZDJWeU9pQXdMamdzWEc0Z0lDQWdkR2x0WlVOdmJuTjBZVzUwT2lBek5UQXNYRzRnSUNBZ1lYVjBiMU4wYjNCRVpXeDBZVG9nTUM0MVhHNGdJSDA3WEc1Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lIWmxiRzlqYVhSNUxDQndiM2RsY2l3Z2JXOWthV1o1VkdGeVoyVjBJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2RHaHBjeTVoYlhCc2FYUjFaR1VnUFNCd2IzZGxjaUFxSUhabGJHOWphWFI1TzF4dUlDQWdJSFJvYVhNdWRHRnlaMlYwSUQwZ1RXRjBhQzV5YjNWdVpDaDBhR2x6TG1OMWNuSmxiblFnS3lCMGFHbHpMbUZ0Y0d4cGRIVmtaU2s3WEc0Z0lDQWdkR2hwY3k1bGJHRndjMlZrSUQwZ01EdGNibHh1SUNBZ0lHbG1JQ2h0YjJScFpubFVZWEpuWlhRcElIdGNiaUFnSUNBZ0lIUm9hWE11ZEdGeVoyVjBJRDBnYlc5a2FXWjVWR0Z5WjJWMEtIUm9hWE11ZEdGeVoyVjBLVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0IxY0dSaGRHVW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmhkWFJ2VTNSdmNFUmxiSFJoTENCMGFXMWxRMjl1YzNSaGJuUWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCMGFHbHpMbVZzWVhCelpXUWdLejBnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsS0NrN1hHNGdJQ0FnWTI5dWMzUWdaR1ZzZEdFZ1BTQXRkR2hwY3k1aGJYQnNhWFIxWkdVZ0tpQk5ZWFJvTG1WNGNDZ3RkR2hwY3k1bGJHRndjMlZrSUM4Z2RHbHRaVU52Ym5OMFlXNTBLVHRjYmlBZ0lDQmpiMjV6ZENCcGMwMXZkbWx1WnlBOUlDaGtaV3gwWVNBK0lHRjFkRzlUZEc5d1JHVnNkR0VnZkh3Z1pHVnNkR0VnUENBdFlYVjBiMU4wYjNCRVpXeDBZU2s3WEc0Z0lDQWdhV1lnS0NGcGMwMXZkbWx1WnlrZ2RHaHBjeTVwYzBOdmJYQnNaWFJsSUQwZ2RISjFaVHRjYmlBZ0lDQnlaWFIxY200Z2FYTk5iM1pwYm1jZ1B5QjBhR2x6TG5SaGNtZGxkQ0FySUdSbGJIUmhJRG9nZEdocGN5NTBZWEpuWlhRN1hHNGdJSDFjYmx4dUlDQnBjMEZqZEdsdmJrTnZiWEJzWlhSbEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbWx6UTI5dGNHeGxkR1U3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hCeWIzQnpLU0E5UGlCdVpYY2dTVzVsY25ScFlTaHdjbTl3Y3lrN1hHNGlYWDA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9wb3Btb3Rpb24taW5lcnRpYS9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCdwb3Btb3Rpb24nKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU2Nyb2xsUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhTY3JvbGxSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBTY3JvbGxSZW5kZXJlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2Nyb2xsUmVuZGVyZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFNjcm9sbFJlbmRlcmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgLy8gQnJlYWsgdGhlIGNhY2hlIGFzIHNjcm9sbCBjYW4gYmUgdXBkYXRlZCBieSB0aGUgdXNlclxuICAgIHRoaXMuc3RhdGVba2V5XSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gX1JlbmRlcmVyLnByb3RvdHlwZS5nZXQuY2FsbCh0aGlzLCBrZXkpO1xuICB9O1xuXG4gIHJldHVybiBTY3JvbGxSZW5kZXJlcjtcbn0oX3BvcG1vdGlvbi5SZW5kZXJlcik7XG5cbnZhciBFbGVtZW50U2Nyb2xsID0gZnVuY3Rpb24gKF9TY3JvbGxSZW5kZXJlcikge1xuICBfaW5oZXJpdHMoRWxlbWVudFNjcm9sbCwgX1Njcm9sbFJlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBFbGVtZW50U2Nyb2xsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbGVtZW50U2Nyb2xsKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfU2Nyb2xsUmVuZGVyZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBFbGVtZW50U2Nyb2xsLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICB0b3AgPSBfc3RhdGUudG9wLFxuICAgICAgICBsZWZ0ID0gX3N0YXRlLmxlZnQ7XG5cbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdG9wO1xuICB9O1xuXG4gIEVsZW1lbnRTY3JvbGwucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZCgpIHtcbiAgICB2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAndG9wJztcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgIHJldHVybiBrZXkgPT09ICd0b3AnID8gZWxlbWVudC5zY3JvbGxUb3AgOiBlbGVtZW50LnNjcm9sbExlZnQ7XG4gIH07XG5cbiAgcmV0dXJuIEVsZW1lbnRTY3JvbGw7XG59KFNjcm9sbFJlbmRlcmVyKTtcblxudmFyIFZpZXdwb3J0U2Nyb2xsID0gZnVuY3Rpb24gKF9TY3JvbGxSZW5kZXJlcjIpIHtcbiAgX2luaGVyaXRzKFZpZXdwb3J0U2Nyb2xsLCBfU2Nyb2xsUmVuZGVyZXIyKTtcblxuICBmdW5jdGlvbiBWaWV3cG9ydFNjcm9sbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmlld3BvcnRTY3JvbGwpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9TY3JvbGxSZW5kZXJlcjIuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBWaWV3cG9ydFNjcm9sbC5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICB2YXIgX3N0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgIHRvcCA9IF9zdGF0ZTIudG9wLFxuICAgICAgICBsZWZ0ID0gX3N0YXRlMi5sZWZ0O1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZCkgd2luZG93LnNjcm9sbFRvKGxlZnQsIHRvcCk7XG4gIH07XG5cbiAgVmlld3BvcnRTY3JvbGwucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZChrZXkpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gMDtcbiAgICByZXR1cm4ga2V5ID09PSAndG9wJyA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgfTtcblxuICByZXR1cm4gVmlld3BvcnRTY3JvbGw7XG59KFNjcm9sbFJlbmRlcmVyKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyBuZXcgRWxlbWVudFNjcm9sbCh7IGVsZW1lbnQ6IGVsZW1lbnQgfSkgOiBuZXcgVmlld3BvcnRTY3JvbGwoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbkJoWTJ0aFoyVnpMM0J2Y0cxdmRHbHZiaTF6WTNKdmJHd3ZjM0pqTDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYklsTmpjbTlzYkZKbGJtUmxjbVZ5SWl3aVoyVjBJaXdpYTJWNUlpd2ljM1JoZEdVaUxDSjFibVJsWm1sdVpXUWlMQ0pGYkdWdFpXNTBVMk55YjJ4c0lpd2liMjVTWlc1a1pYSWlMQ0psYkdWdFpXNTBJaXdpY0hKdmNITWlMQ0owYjNBaUxDSnNaV1owSWl3aWMyTnliMnhzVEdWbWRDSXNJbk5qY205c2JGUnZjQ0lzSW05dVVtVmhaQ0lzSWxacFpYZHdiM0owVTJOeWIyeHNJaXdpZDJsdVpHOTNJaXdpYzJOeWIyeHNWRzhpTENKd1lXZGxXVTltWm5ObGRDSXNJbkJoWjJWWVQyWm1jMlYwSWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3T3pzN08wbEJSVTFCTEdNN096czdPenM3T3pzeVFrRkRTa01zUnl4blFrRkJTVU1zUnl4RlFVRkxPMEZCUTFBN1FVRkRRU3hUUVVGTFF5eExRVUZNTEVOQlFWZEVMRWRCUVZnc1NVRkJhMEpGTEZOQlFXeENPMEZCUTBFc1YwRkJUeXh2UWtGQlRVZ3NSMEZCVGl4WlFVRlZReXhIUVVGV0xFTkJRVkE3UVVGRFJDeEhPenM3T3p0SlFVZEhSeXhoT3pzN096czdPenM3TUVKQlEwcERMRkVzZFVKQlFWYzdRVUZCUVN4UlFVTkVReXhQUVVSRExFZEJRMWNzUzBGQlMwTXNTMEZFYUVJc1EwRkRSRVFzVDBGRVF6dEJRVUZCTEdsQ1FVVmhMRXRCUVV0S0xFdEJSbXhDTzBGQlFVRXNVVUZGUkUwc1IwRkdReXhWUVVWRVFTeEhRVVpETzBGQlFVRXNVVUZGU1VNc1NVRkdTaXhWUVVWSlFTeEpRVVpLT3p0QlFVZFVTQ3haUVVGUlNTeFZRVUZTTEVkQlFYRkNSQ3hKUVVGeVFqdEJRVU5CU0N4WlFVRlJTeXhUUVVGU0xFZEJRVzlDU0N4SFFVRndRanRCUVVORUxFYzdPekJDUVVWRVNTeE5MSEZDUVVGdlFqdEJRVUZCTEZGQlFXSllMRWRCUVdFc2RVVkJRVkFzUzBGQlR6dEJRVUZCTEZGQlExWkxMRTlCUkZVc1IwRkRSU3hMUVVGTFF5eExRVVJRTEVOQlExWkVMRTlCUkZVN08wRkJSV3hDTEZkQlFWRk1MRkZCUVZFc1MwRkJWQ3hIUVVGclFrc3NVVUZCVVVzc1UwRkJNVUlzUjBGQmMwTk1MRkZCUVZGSkxGVkJRWEpFTzBGQlEwUXNSenM3TzBWQldIbENXQ3hqT3p0SlFXTjBRbU1zWXpzN096czdPenM3T3pKQ1FVTktVaXhSTEhWQ1FVRlhPMEZCUVVFc2EwSkJRMkVzUzBGQlMwZ3NTMEZFYkVJN1FVRkJRU3hSUVVORVRTeEhRVVJETEZkQlEwUkJMRWRCUkVNN1FVRkJRU3hSUVVOSlF5eEpRVVJLTEZkQlEwbEJMRWxCUkVvN08wRkJSVlFzVVVGQlNTeFBRVUZQU3l4TlFVRlFMRXRCUVd0Q1dDeFRRVUYwUWl4RlFVRnBRMWNzVDBGQlQwTXNVVUZCVUN4RFFVRm5RazRzU1VGQmFFSXNSVUZCYzBKRUxFZEJRWFJDTzBGQlEyeERMRWM3T3pKQ1FVVkVTU3hOTEcxQ1FVRlBXQ3hITEVWQlFVczdRVUZEVml4UlFVRkpMRTlCUVU5aExFMUJRVkFzUzBGQmEwSllMRk5CUVhSQ0xFVkJRV2xETEU5QlFVOHNRMEZCVUR0QlFVTnFReXhYUVVGUlJpeFJRVUZSTEV0QlFWUXNSMEZCYTBKaExFOUJRVTlGTEZkQlFYcENMRWRCUVhWRFJpeFBRVUZQUnl4WFFVRnlSRHRCUVVORUxFYzdPenRGUVZRd1FteENMR003TzJ0Q1FWbGtMRlZCUVVOUExFOUJRVVE3UVVGQlFTeFRRVUZoUVN4VlFVRlZMRWxCUVVsR0xHRkJRVW9zUTBGQmEwSXNSVUZCUlVVc1owSkJRVVlzUlVGQmJFSXNRMEZCVml4SFFVRXlReXhKUVVGSlR5eGpRVUZLTEVWQlFYaEVPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUZKbGJtUmxjbVZ5SUgwZ1puSnZiU0FuY0c5d2JXOTBhVzl1Snp0Y2JseHVZMnhoYzNNZ1UyTnliMnhzVW1WdVpHVnlaWElnWlhoMFpXNWtjeUJTWlc1a1pYSmxjaUI3WEc0Z0lHZGxkQ2hyWlhrcElIdGNiaUFnSUNBdkx5QkNjbVZoYXlCMGFHVWdZMkZqYUdVZ1lYTWdjMk55YjJ4c0lHTmhiaUJpWlNCMWNHUmhkR1ZrSUdKNUlIUm9aU0IxYzJWeVhHNGdJQ0FnZEdocGN5NXpkR0YwWlZ0clpYbGRJRDBnZFc1a1pXWnBibVZrTzF4dUlDQWdJSEpsZEhWeWJpQnpkWEJsY2k1blpYUW9hMlY1S1R0Y2JpQWdmVnh1ZlZ4dVhHNWpiR0Z6Y3lCRmJHVnRaVzUwVTJOeWIyeHNJR1Y0ZEdWdVpITWdVMk55YjJ4c1VtVnVaR1Z5WlhJZ2UxeHVJQ0J2YmxKbGJtUmxjaWdwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1ZzWlcxbGJuUWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnWTI5dWMzUWdleUIwYjNBc0lHeGxablFnZlNBOUlIUm9hWE11YzNSaGRHVTdYRzRnSUNBZ1pXeGxiV1Z1ZEM1elkzSnZiR3hNWldaMElEMGdiR1ZtZER0Y2JpQWdJQ0JsYkdWdFpXNTBMbk5qY205c2JGUnZjQ0E5SUhSdmNEdGNiaUFnZlZ4dVhHNGdJRzl1VW1WaFpDaHJaWGtnUFNBbmRHOXdKeWtnZTF4dUlDQWdJR052Ym5OMElIc2daV3hsYldWdWRDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0J5WlhSMWNtNGdLR3RsZVNBOVBUMGdKM1J2Y0NjcElEOGdaV3hsYldWdWRDNXpZM0p2Ykd4VWIzQWdPaUJsYkdWdFpXNTBMbk5qY205c2JFeGxablE3WEc0Z0lIMWNibjFjYmx4dVkyeGhjM01nVm1sbGQzQnZjblJUWTNKdmJHd2daWGgwWlc1a2N5QlRZM0p2Ykd4U1pXNWtaWEpsY2lCN1hHNGdJRzl1VW1WdVpHVnlLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dkRzl3TENCc1pXWjBJSDBnUFNCMGFHbHpMbk4wWVhSbE8xeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2QybHVaRzkzSUNFOVBTQjFibVJsWm1sdVpXUXBJSGRwYm1SdmR5NXpZM0p2Ykd4VWJ5aHNaV1owTENCMGIzQXBPMXh1SUNCOVhHNWNiaUFnYjI1U1pXRmtLR3RsZVNrZ2UxeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2QybHVaRzkzSUQwOVBTQjFibVJsWm1sdVpXUXBJSEpsZEhWeWJpQXdPMXh1SUNBZ0lISmxkSFZ5YmlBb2EyVjVJRDA5UFNBbmRHOXdKeWtnUHlCM2FXNWtiM2N1Y0dGblpWbFBabVp6WlhRZ09pQjNhVzVrYjNjdWNHRm5aVmhQWm1aelpYUTdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR1ZzWlcxbGJuUXBJRDArSUdWc1pXMWxiblFnUHlCdVpYY2dSV3hsYldWdWRGTmpjbTlzYkNoN0lHVnNaVzFsYm5RZ2ZTa2dPaUJ1WlhjZ1ZtbGxkM0J2Y25SVFkzSnZiR3dvS1R0Y2JpSmRmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9wb3Btb3Rpb24tc2Nyb2xsL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gc3Bpbm5hYmxlO1xuXG52YXIgX3BvcG1vdGlvbiA9IHJlcXVpcmUoJ3BvcG1vdGlvbicpO1xuXG52YXIgYW5nbGUgPSBfcG9wbW90aW9uLmNhbGMuYW5nbGU7XG5mdW5jdGlvbiBzcGlubmFibGUobm9kZSwgX3JlZikge1xuICB2YXIgX3JlZiRpbml0aWFsUm90YXRpb24gPSBfcmVmLmluaXRpYWxSb3RhdGlvbixcbiAgICAgIGluaXRpYWxSb3RhdGlvbiA9IF9yZWYkaW5pdGlhbFJvdGF0aW9uID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRpbml0aWFsUm90YXRpb24sXG4gICAgICBfcmVmJGZyaWN0aW9uID0gX3JlZi5mcmljdGlvbixcbiAgICAgIGZyaWN0aW9uID0gX3JlZiRmcmljdGlvbiA9PT0gdW5kZWZpbmVkID8gMC40IDogX3JlZiRmcmljdGlvbixcbiAgICAgIHRyYW5zZm9ybVNwaW4gPSBfcmVmLnRyYW5zZm9ybVNwaW4sXG4gICAgICBvblNwaW4gPSBfcmVmLm9uU3BpbjtcblxuICB2YXIgcmVuZGVyZXIgPSAoMCwgX3BvcG1vdGlvbi5jc3MpKG5vZGUpO1xuICB2YXIgbm9kZVJvdGF0aW9uID0gKDAsIF9wb3Btb3Rpb24udmFsdWUpKGluaXRpYWxSb3RhdGlvbiwgZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgY3VycmVudCA9IHRyYW5zZm9ybVNwaW4gPyB0cmFuc2Zvcm1TcGluKHYpIDogdjtcbiAgICBpZiAob25TcGluKSBvblNwaW4oY3VycmVudCk7XG4gICAgcmVuZGVyZXIuc2V0KCdyb3RhdGUnLCBjdXJyZW50KTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gc3RhcnRUcmFja2luZyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBwb2ludGVyQW5nbGUgPSAoMCwgX3BvcG1vdGlvbi5wb2ludGVyKShlLCB7XG4gICAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uIHRyYW5zZm9ybSh2KSB7XG4gICAgICAgIHZhciBub2RlUG9zID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIG5vZGVDZW50ZXIgPSB7XG4gICAgICAgICAgeDogbm9kZVBvcy5sZWZ0ICsgbm9kZVBvcy53aWR0aCAvIDIsXG4gICAgICAgICAgeTogbm9kZVBvcy50b3AgKyBub2RlUG9zLmhlaWdodCAvIDJcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGFuZ2xlRnJvbUNlbnRlciA9IGFuZ2xlKG5vZGVDZW50ZXIsIHYpO1xuXG4gICAgICAgIHJldHVybiBhbmdsZUZyb21DZW50ZXI7XG4gICAgICB9XG4gICAgfSkuc3RhcnQoKTtcblxuICAgICgwLCBfcG9wbW90aW9uLnRyYWNrT2Zmc2V0KShwb2ludGVyQW5nbGUsIHtcbiAgICAgIGZyb206IG5vZGVSb3RhdGlvbi5nZXQoKSxcbiAgICAgIG9uVXBkYXRlOiBub2RlUm90YXRpb24sXG4gICAgICBvblN0b3A6IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICAgICAgcmV0dXJuIHBvaW50ZXJBbmdsZS5zdG9wKCk7XG4gICAgICB9XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3BUcmFja2luZygpIHtcbiAgICAoMCwgX3BvcG1vdGlvbi5waHlzaWNzKSh7XG4gICAgICBmcm9tOiBub2RlUm90YXRpb24uZ2V0KCksXG4gICAgICB2ZWxvY2l0eTogbm9kZVJvdGF0aW9uLmdldFZlbG9jaXR5KCksXG4gICAgICBmcmljdGlvbjogZnJpY3Rpb24sXG4gICAgICBvblVwZGF0ZTogbm9kZVJvdGF0aW9uXG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuXG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3RhcnRUcmFja2luZyk7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHN0YXJ0VHJhY2tpbmcsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBzdG9wVHJhY2tpbmcpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHN0b3BUcmFja2luZyk7XG5cbiAgcmV0dXJuIG5vZGVSb3RhdGlvbjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluQmhZMnRoWjJWekwzQnZjRzF2ZEdsdmJpMXpjR2x1Ym1GaWJHVXZjM0pqTDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYkluTndhVzV1WVdKc1pTSXNJbUZ1WjJ4bElpd2libTlrWlNJc0ltbHVhWFJwWVd4U2IzUmhkR2x2YmlJc0ltWnlhV04wYVc5dUlpd2lkSEpoYm5ObWIzSnRVM0JwYmlJc0ltOXVVM0JwYmlJc0luSmxibVJsY21WeUlpd2libTlrWlZKdmRHRjBhVzl1SWl3aWRpSXNJbU4xY25KbGJuUWlMQ0p6WlhRaUxDSnpkR0Z5ZEZSeVlXTnJhVzVuSWl3aVpTSXNJbkJ5WlhabGJuUkVaV1poZFd4MElpd2ljRzlwYm5SbGNrRnVaMnhsSWl3aWRISmhibk5tYjNKdElpd2libTlrWlZCdmN5SXNJbWRsZEVKdmRXNWthVzVuUTJ4cFpXNTBVbVZqZENJc0ltNXZaR1ZEWlc1MFpYSWlMQ0o0SWl3aWJHVm1kQ0lzSW5kcFpIUm9JaXdpZVNJc0luUnZjQ0lzSW1obGFXZG9kQ0lzSW1GdVoyeGxSbkp2YlVObGJuUmxjaUlzSW5OMFlYSjBJaXdpWm5KdmJTSXNJbWRsZENJc0ltOXVWWEJrWVhSbElpd2liMjVUZEc5d0lpd2ljM1J2Y0NJc0luTjBiM0JVY21GamEybHVaeUlzSW5abGJHOWphWFI1SWl3aVoyVjBWbVZzYjJOcGRIa2lMQ0poWkdSRmRtVnVkRXhwYzNSbGJtVnlJaXdpY0dGemMybDJaU0lzSW1SdlkzVnRaVzUwSWwwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlZYZENRU3hUT3p0QlFWWjRRanM3U1VGUlVVTXNTeXh0UWtGQlFVRXNTenRCUVVWUExGTkJRVk5FTEZOQlFWUXNRMEZCYlVKRkxFbEJRVzVDTEZGQlMxbzdRVUZCUVN4clEwRktSRU1zWlVGSlF6dEJRVUZCTEUxQlNrUkJMR1ZCU1VNc2QwTkJTbWxDTEVOQlNXcENPMEZCUVVFc01rSkJTRVJETEZGQlIwTTdRVUZCUVN4TlFVaEVRU3hSUVVkRExHbERRVWhWTEVkQlIxWTdRVUZCUVN4TlFVWkVReXhoUVVWRExGRkJSa1JCTEdGQlJVTTdRVUZCUVN4TlFVUkVReXhOUVVORExGRkJSRVJCTEUxQlEwTTdPMEZCUTBRc1RVRkJUVU1zVjBGQlZ5eHZRa0ZCU1V3c1NVRkJTaXhEUVVGcVFqdEJRVU5CTEUxQlFVMU5MR1ZCUVdVc2MwSkJRVTFNTEdWQlFVNHNSVUZCZFVJc1ZVRkJRMDBzUTBGQlJDeEZRVUZQTzBGQlEycEVMRkZCUVUxRExGVkJRVlZNTEdkQ1FVRm5Ra0VzWTBGQlkwa3NRMEZCWkN4RFFVRm9RaXhIUVVGdFEwRXNRMEZCYmtRN1FVRkRRU3hSUVVGSlNDeE5RVUZLTEVWQlFWbEJMRTlCUVU5SkxFOUJRVkE3UVVGRFdrZ3NZVUZCVTBrc1IwRkJWQ3hEUVVGaExGRkJRV0lzUlVGQmRVSkVMRTlCUVhaQ08wRkJRMFFzUjBGS2IwSXNRMEZCY2tJN08wRkJUVUVzVjBGQlUwVXNZVUZCVkN4RFFVRjFRa01zUTBGQmRrSXNSVUZCTUVJN1FVRkRlRUpCTEUxQlFVVkRMR05CUVVZN1FVRkRRU3hSUVVGTlF5eGxRVUZsTEhkQ1FVRlJSaXhEUVVGU0xFVkJRVmM3UVVGRE9VSkhMR2xDUVVGWExHMUNRVUZEVUN4RFFVRkVMRVZCUVU4N1FVRkRhRUlzV1VGQlRWRXNWVUZCVldZc1MwRkJTMmRDTEhGQ1FVRk1MRVZCUVdoQ08wRkJRMEVzV1VGQlRVTXNZVUZCWVR0QlFVTnFRa01zWVVGQlIwZ3NVVUZCVVVrc1NVRkJVaXhIUVVGblFrb3NVVUZCVVVzc1MwRkJVaXhIUVVGblFpeERRVVJzUWp0QlFVVnFRa01zWVVGQlIwNHNVVUZCVVU4c1IwRkJVaXhIUVVGbFVDeFJRVUZSVVN4TlFVRlNMRWRCUVdsQ08wRkJSbXhDTEZOQlFXNUNPMEZCU1VFc1dVRkJUVU1zYTBKQlFXdENla0lzVFVGQlRXdENMRlZCUVU0c1JVRkJhMEpXTEVOQlFXeENMRU5CUVhoQ096dEJRVVZCTEdWQlFVOXBRaXhsUVVGUU8wRkJRMFE3UVVGV05rSXNTMEZCV0N4RlFWZHNRa01zUzBGWWEwSXNSVUZCY2tJN08wRkJZVUVzWjBOQlFWbGFMRmxCUVZvc1JVRkJNRUk3UVVGRGVFSmhMRmxCUVUxd1FpeGhRVUZoY1VJc1IwRkJZaXhGUVVSclFqdEJRVVY0UWtNc1owSkJRVlYwUWl4WlFVWmpPMEZCUjNoQ2RVSXNZMEZCVVR0QlFVRkJMR1ZCUVUxb1FpeGhRVUZoYVVJc1NVRkJZaXhGUVVGT08wRkJRVUU3UVVGSVowSXNTMEZCTVVJc1JVRkpSMHdzUzBGS1NEdEJRVXRFT3p0QlFVVkVMRmRCUVZOTkxGbEJRVlFzUjBGQmQwSTdRVUZEZEVJc05FSkJRVkU3UVVGRFRrd3NXVUZCVFhCQ0xHRkJRV0Z4UWl4SFFVRmlMRVZCUkVFN1FVRkZUa3NzWjBKQlFWVXhRaXhoUVVGaE1rSXNWMEZCWWl4RlFVWktPMEZCUjA0dlFpeDNRa0ZJVFR0QlFVbE9NRUlzWjBKQlFWVjBRanRCUVVwS0xFdEJRVklzUlVGTFIyMUNMRXRCVEVnN1FVRk5SRHM3UVVGRlJIcENMRTlCUVV0clF5eG5Ra0ZCVEN4RFFVRnpRaXhYUVVGMFFpeEZRVUZ0UTNoQ0xHRkJRVzVETzBGQlEwRldMRTlCUVV0clF5eG5Ra0ZCVEN4RFFVRnpRaXhaUVVGMFFpeEZRVUZ2UTNoQ0xHRkJRWEJETEVWQlFXMUVMRVZCUVVWNVFpeFRRVUZUTEV0QlFWZ3NSVUZCYmtRN1FVRkRRVU1zVjBGQlUwWXNaMEpCUVZRc1EwRkJNRUlzVTBGQk1VSXNSVUZCY1VOSUxGbEJRWEpETzBGQlEwRkxMRmRCUVZOR0xHZENRVUZVTEVOQlFUQkNMRlZCUVRGQ0xFVkJRWE5EU0N4WlFVRjBRenM3UVVGRlFTeFRRVUZQZWtJc1dVRkJVRHRCUVVORUlpd2labWxzWlNJNkltbHVaR1Y0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHRjYmlBZ2NHOXBiblJsY2l4Y2JpQWdZMkZzWXl4Y2JpQWdkbUZzZFdVc1hHNGdJR056Y3l4Y2JpQWdjR2g1YzJsamN5eGNiaUFnZEhKaFkydFBabVp6WlhSY2JuMGdabkp2YlNBbmNHOXdiVzkwYVc5dUp6dGNibU52Ym5OMElIc2dZVzVuYkdVZ2ZTQTlJR05oYkdNN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlITndhVzV1WVdKc1pTaHViMlJsTENCN1hHNGdJR2x1YVhScFlXeFNiM1JoZEdsdmJpQTlJREFzWEc0Z0lHWnlhV04wYVc5dUlEMGdNQzQwTEZ4dUlDQjBjbUZ1YzJadmNtMVRjR2x1TEZ4dUlDQnZibE53YVc1Y2JuMHBJSHRjYmlBZ1kyOXVjM1FnY21WdVpHVnlaWElnUFNCamMzTW9ibTlrWlNrN1hHNGdJR052Ym5OMElHNXZaR1ZTYjNSaGRHbHZiaUE5SUhaaGJIVmxLR2x1YVhScFlXeFNiM1JoZEdsdmJpd2dLSFlwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0JqZFhKeVpXNTBJRDBnZEhKaGJuTm1iM0p0VTNCcGJpQS9JSFJ5WVc1elptOXliVk53YVc0b2Rpa2dPaUIyTzF4dUlDQWdJR2xtSUNodmJsTndhVzRwSUc5dVUzQnBiaWhqZFhKeVpXNTBLVHRjYmlBZ0lDQnlaVzVrWlhKbGNpNXpaWFFvSjNKdmRHRjBaU2NzSUdOMWNuSmxiblFwTzF4dUlDQjlLVHRjYmx4dUlDQm1kVzVqZEdsdmJpQnpkR0Z5ZEZSeVlXTnJhVzVuS0dVcElIdGNiaUFnSUNCbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hHNGdJQ0FnWTI5dWMzUWdjRzlwYm5SbGNrRnVaMnhsSUQwZ2NHOXBiblJsY2lobExDQjdYRzRnSUNBZ0lDQjBjbUZ1YzJadmNtMDZJQ2gyS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHNXZaR1ZRYjNNZ1BTQnViMlJsTG1kbGRFSnZkVzVrYVc1blEyeHBaVzUwVW1WamRDZ3BPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnViMlJsUTJWdWRHVnlJRDBnZTF4dUlDQWdJQ0FnSUNBZ0lIZzZJRzV2WkdWUWIzTXViR1ZtZENBcklDaHViMlJsVUc5ekxuZHBaSFJvSUM4Z01pa3NYRzRnSUNBZ0lDQWdJQ0FnZVRvZ2JtOWtaVkJ2Y3k1MGIzQWdLeUFvYm05a1pWQnZjeTVvWldsbmFIUWdMeUF5S1Z4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCaGJtZHNaVVp5YjIxRFpXNTBaWElnUFNCaGJtZHNaU2h1YjJSbFEyVnVkR1Z5TENCMktUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZVzVuYkdWR2NtOXRRMlZ1ZEdWeU8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwcExuTjBZWEowS0NrN1hHNWNiaUFnSUNCMGNtRmphMDltWm5ObGRDaHdiMmx1ZEdWeVFXNW5iR1VzSUh0Y2JpQWdJQ0FnSUdaeWIyMDZJRzV2WkdWU2IzUmhkR2x2Ymk1blpYUW9LU3hjYmlBZ0lDQWdJRzl1VlhCa1lYUmxPaUJ1YjJSbFVtOTBZWFJwYjI0c1hHNGdJQ0FnSUNCdmJsTjBiM0E2SUNncElEMCtJSEJ2YVc1MFpYSkJibWRzWlM1emRHOXdLQ2xjYmlBZ0lDQjlLUzV6ZEdGeWRDZ3BPMXh1SUNCOVhHNWNiaUFnWm5WdVkzUnBiMjRnYzNSdmNGUnlZV05yYVc1bktDa2dlMXh1SUNBZ0lIQm9lWE5wWTNNb2UxeHVJQ0FnSUNBZ1puSnZiVG9nYm05a1pWSnZkR0YwYVc5dUxtZGxkQ2dwTEZ4dUlDQWdJQ0FnZG1Wc2IyTnBkSGs2SUc1dlpHVlNiM1JoZEdsdmJpNW5aWFJXWld4dlkybDBlU2dwTEZ4dUlDQWdJQ0FnWm5KcFkzUnBiMjRzWEc0Z0lDQWdJQ0J2YmxWd1pHRjBaVG9nYm05a1pWSnZkR0YwYVc5dVhHNGdJQ0FnZlNrdWMzUmhjblFvS1R0Y2JpQWdmVnh1WEc0Z0lHNXZaR1V1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduYlc5MWMyVmtiM2R1Snl3Z2MzUmhjblJVY21GamEybHVaeWs3WEc0Z0lHNXZaR1V1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWduZEc5MVkyaHpkR0Z5ZENjc0lITjBZWEowVkhKaFkydHBibWNzSUhzZ2NHRnpjMmwyWlRvZ1ptRnNjMlVnZlNrN1hHNGdJR1J2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMjF2ZFhObGRYQW5MQ0J6ZEc5d1ZISmhZMnRwYm1jcE8xeHVJQ0JrYjJOMWJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2QwYjNWamFHVnVaQ2NzSUhOMGIzQlVjbUZqYTJsdVp5azdYRzVjYmlBZ2NtVjBkWEp1SUc1dlpHVlNiM1JoZEdsdmJqdGNibjFjYmlKZGZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3BvcG1vdGlvbi1zcGlubmFibGUvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdGltZWxpbmU7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgncG9wbW90aW9uJyk7XG5cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IF9wb3Btb3Rpb24uY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZTtcbnZhciBjbGFtcCA9IF9wb3Btb3Rpb24udHJhbnNmb3JtLmNsYW1wO1xuXG52YXIgY2xhbXBQcm9ncmVzcyA9IGNsYW1wKDAsIDEpO1xuXG4vKlxuICBGbGF0dGVuIGFycmF5cywgd2hpY2ggZGVub3RlIHBhcmFsbGVsIG9yIHN0YWdnZXJlZCB0d2VlbnMsXG4gIGludG8gYSBmbGF0IHNldCBvZiBpbnN0cnVjdGlvbnMgd2hpY2ggcmVzZXQgdGhlIHBsYXloZWFkXG4gIGFmdGVyIGVhY2ggdHdlZW4uXG4gKi9cbmZ1bmN0aW9uIGZsYXR0ZW5BcnJheXNUb1NlcXVlbmNlKHNlcXVlbmNlLCBzZWdtZW50KSB7XG4gIGlmIChzZWdtZW50LmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgIHZhciBsYXN0QXJnID0gc2VnbWVudFtzZWdtZW50Lmxlbmd0aCAtIDFdO1xuICAgIHZhciBpc1N0YWdnZXJlZCA9IHR5cGVvZiBsYXN0QXJnID09PSAnbnVtYmVyJztcbiAgICB2YXIgdHdlZW5zID0gaXNTdGFnZ2VyZWQgPyBzZWdtZW50LnNsaWNlKDAsIC0xKSA6IHNlZ21lbnQ7XG4gICAgdmFyIG51bVR3ZWVucyA9IHR3ZWVucy5sZW5ndGg7XG4gICAgdmFyIG9mZnNldCA9IDA7XG5cbiAgICB0d2VlbnMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgc2VxdWVuY2UucHVzaChpdGVtKTtcblxuICAgICAgaWYgKGkgIT09IG51bVR3ZWVucyAtIDEpIHtcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gaXRlbS5nZXRQcm9wKCdkdXJhdGlvbicpO1xuICAgICAgICBvZmZzZXQgKz0gaXNTdGFnZ2VyZWQgPyBsYXN0QXJnIDogMDtcbiAgICAgICAgc2VxdWVuY2UucHVzaCgnLScgKyAoZHVyYXRpb24gLSBvZmZzZXQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBzZXF1ZW5jZS5wdXNoKHNlZ21lbnQpO1xuICB9XG5cbiAgcmV0dXJuIHNlcXVlbmNlO1xufVxuXG5mdW5jdGlvbiB0aW1lbGluZShzZXF1ZW5jZSwgcHJvcHMpIHtcbiAgdmFyIHBsYXloZWFkID0gMDtcbiAgdmFyIGR1cmF0aW9uID0gMDtcblxuICB2YXIgbWFya2VycyA9IHNlcXVlbmNlLnJlZHVjZShmbGF0dGVuQXJyYXlzVG9TZXF1ZW5jZSwgW11cbiAgLy8gQ29udmVydCBzZXF1ZW5jZSB0byByZWxhdGl2ZSB0aW1pbmdzXG4gICkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHNlZ21lbnQpIHtcbiAgICB2YXIgdHlwZU9mU2VnbWVudCA9IHR5cGVvZiBzZWdtZW50ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihzZWdtZW50KTtcblxuICAgIC8vIElmIHJlbGF0aXZlIHRpbWVzdGFtcFxuICAgIGlmICh0eXBlT2ZTZWdtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgcGxheWhlYWQgKz0gcGFyc2VGbG9hdChzZWdtZW50KTtcblxuICAgICAgLy8gSWYgYWJzb2x1dGUgdGltZXN0YW1wXG4gICAgfSBlbHNlIGlmICh0eXBlT2ZTZWdtZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgcGxheWhlYWQgPSBzZWdtZW50O1xuXG4gICAgICAvLyBPciBpZiB0d2VlbiwgYWRkIG1hcmtlclxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdG8gPSBwbGF5aGVhZCArIHNlZ21lbnQuZ2V0UHJvcCgnZHVyYXRpb24nKTtcblxuICAgICAgYWNjLnB1c2goe1xuICAgICAgICB0d2Vlbjogc2VnbWVudCxcbiAgICAgICAgZnJvbTogcGxheWhlYWQsXG4gICAgICAgIHRvOiB0b1xuICAgICAgfSk7XG5cbiAgICAgIHBsYXloZWFkID0gdG87XG4gICAgICBkdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCB0byk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW11cbiAgLy8gU3BsaXQgdHdlZW5zIGJ5IHRhcmdldCwgYW5kIGNvbnZlcnQgYWJzb2x1dGUgbWFya2VycyB0byBwcm9ncmVzcyBtYXJrZXJzXG4gICkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG1hcmtlcikge1xuICAgIHZhciBvdXRwdXQgPSBtYXJrZXIudHdlZW4uZ2V0UHJvcCgnb25VcGRhdGUnKTtcbiAgICB2YXIgdGFyZ2V0SW5kZXggPSBhY2MudGFyZ2V0cy5pbmRleE9mKG91dHB1dCk7XG5cbiAgICBpZiAodGFyZ2V0SW5kZXggPT09IC0xKSB7XG4gICAgICBhY2MudGFyZ2V0cy5wdXNoKG91dHB1dCk7XG4gICAgICBhY2MuZnJhZ21lbnRzLnB1c2goW10pO1xuICAgICAgdGFyZ2V0SW5kZXggPSBhY2MuZnJhZ21lbnRzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgdmFyIGZyYWdtZW50TGlzdCA9IGFjYy5mcmFnbWVudHNbdGFyZ2V0SW5kZXhdO1xuXG4gICAgZnJhZ21lbnRMaXN0LnB1c2goe1xuICAgICAgdHdlZW46IG1hcmtlci50d2VlbixcbiAgICAgIGZyb206IGdldFByb2dyZXNzRnJvbVZhbHVlKDAsIGR1cmF0aW9uLCBtYXJrZXIuZnJvbSksXG4gICAgICB0bzogZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoMCwgZHVyYXRpb24sIG1hcmtlci50bylcbiAgICB9KTtcblxuICAgIGlmIChvdXRwdXQuZ2V0KSB7XG4gICAgICBhY2MuaW5pdGlhbFZhbHVlc1t0YXJnZXRJbmRleF0gPSBvdXRwdXQuZ2V0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgeyBpbml0aWFsVmFsdWVzOiBbXSwgdGFyZ2V0czogW10sIGZyYWdtZW50czogW10gfSk7XG5cbiAgdmFyIG51bU1hcmtlcnMgPSBtYXJrZXJzLmZyYWdtZW50cy5sZW5ndGg7XG5cbiAgcmV0dXJuICgwLCBfcG9wbW90aW9uLnR3ZWVuKShfZXh0ZW5kcyh7XG4gICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgIGVhc2U6IF9wb3Btb3Rpb24uZWFzaW5nLmxpbmVhclxuICB9LCBwcm9wcywge1xuICAgIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZSh2KSB7XG4gICAgICAvLyBGaXJzdCBpdGVyYXRlIG92ZXIgb3V0cHV0IHRhcmdldHMsIGFuZCB0cnkgdG8gZmluZCBhbiBhY3RpdmUgdHdlZW5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtTWFya2VyczsgaSsrKSB7XG4gICAgICAgIHZhciBmcmFnbWVudHMgPSBtYXJrZXJzLmZyYWdtZW50c1tpXTtcbiAgICAgICAgdmFyIG51bUZyYWdtZW50cyA9IGZyYWdtZW50cy5sZW5ndGg7XG4gICAgICAgIHZhciBmb3VuZEFjdGl2ZUZyYWdtZW50ID0gZmFsc2U7XG4gICAgICAgIHZhciBwcmV2UHJvZ3Jlc3NEaXN0YW5jZSA9IEluZmluaXR5O1xuICAgICAgICB2YXIgY2xvc2VzdEluZGV4ID0gMDtcbiAgICAgICAgdmFyIGNsb3Nlc3RQcm9ncmVzcyA9IDA7XG4gICAgICAgIHZhciB0d2Vlbkhhc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGogPSAwO1xuXG4gICAgICAgIHdoaWxlICghZm91bmRBY3RpdmVGcmFnbWVudCAmJiBqIDwgbnVtRnJhZ21lbnRzKSB7XG4gICAgICAgICAgdmFyIGZyYWdtZW50ID0gZnJhZ21lbnRzW2pdO1xuICAgICAgICAgIHZhciBwcm9ncmVzcyA9IGdldFByb2dyZXNzRnJvbVZhbHVlKGZyYWdtZW50LmZyb20sIGZyYWdtZW50LnRvLCB2KTtcblxuICAgICAgICAgIC8vIEZvdW5kIGFuIGFjdGl2ZSBmcmFnbWVudCwgZXhlY3V0ZVxuICAgICAgICAgIGlmIChwcm9ncmVzcyA+PSAwICYmIHByb2dyZXNzIDw9IDEpIHtcbiAgICAgICAgICAgIGZvdW5kQWN0aXZlRnJhZ21lbnQgPSB0cnVlO1xuICAgICAgICAgICAgZnJhZ21lbnQudHdlZW4uc2Vlayhwcm9ncmVzcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+IDEpIHtcbiAgICAgICAgICAgICAgdHdlZW5IYXNTdGFydGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBwcm9ncmVzcyA8IDAgPyBNYXRoLmFicyhwcm9ncmVzcykgOiBwcm9ncmVzcyAtIDE7XG5cbiAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgcHJldlByb2dyZXNzRGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBwcmV2UHJvZ3Jlc3NEaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgICAgICAgIGNsb3Nlc3RQcm9ncmVzcyA9IGNsYW1wUHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgIGNsb3Nlc3RJbmRleCA9IGo7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBqKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZvdW5kQWN0aXZlRnJhZ21lbnQpIHtcbiAgICAgICAgICB2YXIgdGFyZ2V0ID0gbWFya2Vycy50YXJnZXRzW2ldO1xuXG4gICAgICAgICAgaWYgKHR3ZWVuSGFzU3RhcnRlZCB8fCAhdGFyZ2V0LnNldCkge1xuICAgICAgICAgICAgaWYgKGZyYWdtZW50c1tjbG9zZXN0SW5kZXhdLnR3ZWVuLnByb2dyZXNzICE9PSBjbG9zZXN0UHJvZ3Jlc3MpIGZyYWdtZW50c1tjbG9zZXN0SW5kZXhdLnR3ZWVuLnNlZWsoY2xvc2VzdFByb2dyZXNzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCF0d2Vlbkhhc1N0YXJ0ZWQgJiYgdGFyZ2V0LnNldCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldC5nZXQoKSAhPT0gbWFya2Vycy5pbml0aWFsVmFsdWVzW2ldKSB0YXJnZXQuc2V0KG1hcmtlcnMuaW5pdGlhbFZhbHVlc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbkJoWTJ0aFoyVnpMM0J2Y0cxdmRHbHZiaTEwYVcxbGJHbHVaUzl6Y21NdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sc2lkR2x0Wld4cGJtVWlMQ0puWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNJc0ltTnNZVzF3SWl3aVkyeGhiWEJRY205bmNtVnpjeUlzSW1ac1lYUjBaVzVCY25KaGVYTlViMU5sY1hWbGJtTmxJaXdpYzJWeGRXVnVZMlVpTENKelpXZHRaVzUwSWl3aVkyOXVjM1J5ZFdOMGIzSWlMQ0pCY25KaGVTSXNJbXhoYzNSQmNtY2lMQ0pzWlc1bmRHZ2lMQ0pwYzFOMFlXZG5aWEpsWkNJc0luUjNaV1Z1Y3lJc0luTnNhV05sSWl3aWJuVnRWSGRsWlc1eklpd2liMlptYzJWMElpd2labTl5UldGamFDSXNJbWwwWlcwaUxDSnBJaXdpY0hWemFDSXNJbVIxY21GMGFXOXVJaXdpWjJWMFVISnZjQ0lzSW5CeWIzQnpJaXdpY0d4aGVXaGxZV1FpTENKdFlYSnJaWEp6SWl3aWNtVmtkV05sSWl3aVlXTmpJaXdpZEhsd1pVOW1VMlZuYldWdWRDSXNJbkJoY25ObFJteHZZWFFpTENKMGJ5SXNJblIzWldWdUlpd2labkp2YlNJc0lrMWhkR2dpTENKdFlYZ2lMQ0p0WVhKclpYSWlMQ0p2ZFhSd2RYUWlMQ0owWVhKblpYUkpibVJsZUNJc0luUmhjbWRsZEhNaUxDSnBibVJsZUU5bUlpd2labkpoWjIxbGJuUnpJaXdpWm5KaFoyMWxiblJNYVhOMElpd2laMlYwSWl3aWFXNXBkR2xoYkZaaGJIVmxjeUlzSW01MWJVMWhjbXRsY25NaUxDSmxZWE5sSWl3aWJHbHVaV0Z5SWl3aWIyNVZjR1JoZEdVaUxDSjJJaXdpYm5WdFJuSmhaMjFsYm5Seklpd2labTkxYm1SQlkzUnBkbVZHY21GbmJXVnVkQ0lzSW5CeVpYWlFjbTluY21WemMwUnBjM1JoYm1ObElpd2lTVzVtYVc1cGRIa2lMQ0pqYkc5elpYTjBTVzVrWlhnaUxDSmpiRzl6WlhOMFVISnZaM0psYzNNaUxDSjBkMlZsYmtoaGMxTjBZWEowWldRaUxDSnFJaXdpWm5KaFoyMWxiblFpTENKd2NtOW5jbVZ6Y3lJc0luTmxaV3NpTENKa2FYTjBZVzVqWlNJc0ltRmljeUlzSW5SaGNtZGxkQ0lzSW5ObGRDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3YTBKQmEwTjNRa0VzVVRzN1FVRnNRM2hDT3p0SlFVTlJReXh2UWl4dFFrRkJRVUVzYjBJN1NVRkRRVU1zU3l4M1FrRkJRVUVzU3pzN1FVRkRVaXhKUVVGTlF5eG5Ra0ZCWjBKRUxFMUJRVTBzUTBGQlRpeEZRVUZUTEVOQlFWUXNRMEZCZEVJN08wRkJSVUU3T3pzN08wRkJTMEVzVTBGQlUwVXNkVUpCUVZRc1EwRkJhVU5ETEZGQlFXcERMRVZCUVRKRFF5eFBRVUV6UXl4RlFVRnZSRHRCUVVOc1JDeE5RVUZKUVN4UlFVRlJReXhYUVVGU0xFdEJRWGRDUXl4TFFVRTFRaXhGUVVGdFF6dEJRVU5xUXl4UlFVRk5ReXhWUVVGVlNDeFJRVUZSUVN4UlFVRlJTU3hOUVVGU0xFZEJRV2xDTEVOQlFYcENMRU5CUVdoQ08wRkJRMEVzVVVGQlRVTXNZMEZCWXl4UFFVRlBSaXhQUVVGUUxFdEJRVzFDTEZGQlFYWkRPMEZCUTBFc1VVRkJUVWNzVTBGQlUwUXNZMEZCWTB3c1VVRkJVVThzUzBGQlVpeERRVUZqTEVOQlFXUXNSVUZCYVVJc1EwRkJReXhEUVVGc1FpeERRVUZrTEVkQlFYRkRVQ3hQUVVGd1JEdEJRVU5CTEZGQlFVMVJMRmxCUVZsR0xFOUJRVTlHTEUxQlFYcENPMEZCUTBFc1VVRkJTVXNzVTBGQlV5eERRVUZpT3p0QlFVVkJTQ3hYUVVGUFNTeFBRVUZRTEVOQlFXVXNWVUZCUTBNc1NVRkJSQ3hGUVVGUFF5eERRVUZRTEVWQlFXRTdRVUZETVVKaUxHVkJRVk5qTEVsQlFWUXNRMEZCWTBZc1NVRkJaRHM3UVVGRlFTeFZRVUZKUXl4TlFVRk5TaXhaUVVGWkxFTkJRWFJDTEVWQlFYbENPMEZCUTNaQ0xGbEJRVTFOTEZkQlFWZElMRXRCUVV0SkxFOUJRVXdzUTBGQllTeFZRVUZpTEVOQlFXcENPMEZCUTBGT0xHdENRVUZWU2l4alFVRmpSaXhQUVVGa0xFZEJRWGRDTEVOQlFXeERPMEZCUTBGS0xHbENRVUZUWXl4SlFVRlVMRkZCUVd0Q1F5eFhRVUZYVEN4TlFVRTNRanRCUVVORU8wRkJRMFlzUzBGU1JEdEJRVk5FTEVkQmFFSkVMRTFCWjBKUE8wRkJRMHhXTEdGQlFWTmpMRWxCUVZRc1EwRkJZMklzVDBGQlpEdEJRVU5FT3p0QlFVVkVMRk5CUVU5RUxGRkJRVkE3UVVGRFJEczdRVUZGWXl4VFFVRlRUQ3hSUVVGVUxFTkJRV3RDU3l4UlFVRnNRaXhGUVVFMFFtbENMRXRCUVRWQ0xFVkJRVzFETzBGQlEyaEVMRTFCUVVsRExGZEJRVmNzUTBGQlpqdEJRVU5CTEUxQlFVbElMRmRCUVZjc1EwRkJaanM3UVVGRlFTeE5RVUZOU1N4VlFVRlZia0lzVTBGRFltOUNMRTFCUkdFc1EwRkRUbkpDTEhWQ1FVUk5MRVZCUTIxQ08wRkJRMnBETzBGQlJtTXNTVUZIWW5GQ0xFMUJTR0VzUTBGSFRpeFZRVUZEUXl4SFFVRkVMRVZCUVUxd1FpeFBRVUZPTEVWQlFXdENPMEZCUTNoQ0xGRkJRVTF4UWl4MVFrRkJkVUp5UWl4UFFVRjJRaXg1UTBGQmRVSkJMRTlCUVhaQ0xFTkJRVTQ3TzBGQlJVRTdRVUZEUVN4UlFVRkpjVUlzYTBKQlFXdENMRkZCUVhSQ0xFVkJRV2RETzBGQlF6bENTaXhyUWtGQldVc3NWMEZCVjNSQ0xFOUJRVmdzUTBGQldqczdRVUZGUmp0QlFVTkRMRXRCU2tRc1RVRkpUeXhKUVVGSmNVSXNhMEpCUVd0Q0xGRkJRWFJDTEVWQlFXZERPMEZCUTNKRFNpeHBRa0ZCVjJwQ0xFOUJRVmc3TzBGQlJVWTdRVUZEUXl4TFFVcE5MRTFCU1VFN1FVRkRUQ3hWUVVGTmRVSXNTMEZCUzA0c1YwRkJWMnBDTEZGQlFWRmxMRTlCUVZJc1EwRkJaMElzVlVGQmFFSXNRMEZCZEVJN08wRkJSVUZMTEZWQlFVbFFMRWxCUVVvc1EwRkJVenRCUVVOUVZ5eGxRVUZQZUVJc1QwRkVRVHRCUVVWUWVVSXNZMEZCVFZJc1VVRkdRenRCUVVkUVRUdEJRVWhQTEU5QlFWUTdPMEZCVFVGT0xHbENRVUZYVFN4RlFVRllPMEZCUTBGVUxHbENRVUZYV1N4TFFVRkxReXhIUVVGTUxFTkJRVk5pTEZGQlFWUXNSVUZCYlVKVExFVkJRVzVDTEVOQlFWZzdRVUZEUkRzN1FVRkZSQ3hYUVVGUFNDeEhRVUZRTzBGQlEwUXNSMEUzUW1Fc1JVRTJRbGc3UVVGRFNEdEJRVGxDWXl4SlFTdENZa1FzVFVFdlFtRXNRMEVyUWs0c1ZVRkJRME1zUjBGQlJDeEZRVUZOVVN4TlFVRk9MRVZCUVdsQ08wRkJRM1pDTEZGQlFVMURMRk5CUVZORUxFOUJRVTlLTEV0QlFWQXNRMEZCWVZRc1QwRkJZaXhEUVVGeFFpeFZRVUZ5UWl4RFFVRm1PMEZCUTBFc1VVRkJTV1VzWTBGQlkxWXNTVUZCU1Zjc1QwRkJTaXhEUVVGWlF5eFBRVUZhTEVOQlFXOUNTQ3hOUVVGd1FpeERRVUZzUWpzN1FVRkZRU3hSUVVGSlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGeVFpeEZRVUYzUWp0QlFVTjBRbFlzVlVGQlNWY3NUMEZCU2l4RFFVRlpiRUlzU1VGQldpeERRVUZwUW1kQ0xFMUJRV3BDTzBGQlEwRlVMRlZCUVVsaExGTkJRVW9zUTBGQlkzQkNMRWxCUVdRc1EwRkJiVUlzUlVGQmJrSTdRVUZEUVdsQ0xHOUNRVUZqVml4SlFVRkpZU3hUUVVGS0xFTkJRV00zUWl4TlFVRmtMRWRCUVhWQ0xFTkJRWEpETzBGQlEwUTdPMEZCUlVRc1VVRkJUVGhDTEdWQlFXVmtMRWxCUVVsaExGTkJRVW9zUTBGQlkwZ3NWMEZCWkN4RFFVRnlRanM3UVVGRlFVa3NhVUpCUVdGeVFpeEpRVUZpTEVOQlFXdENPMEZCUTJoQ1Z5eGhRVUZQU1N4UFFVRlBTaXhMUVVSRk8wRkJSV2hDUXl4WlFVRk5PVUlzY1VKQlFYRkNMRU5CUVhKQ0xFVkJRWGRDYlVJc1VVRkJlRUlzUlVGQmEwTmpMRTlCUVU5SUxFbEJRWHBETEVOQlJsVTdRVUZIYUVKR0xGVkJRVWsxUWl4eFFrRkJjVUlzUTBGQmNrSXNSVUZCZDBKdFFpeFJRVUY0UWl4RlFVRnJRMk1zVDBGQlQwd3NSVUZCZWtNN1FVRklXU3hMUVVGc1FqczdRVUZOUVN4UlFVRkpUU3hQUVVGUFRTeEhRVUZZTEVWQlFXZENPMEZCUTJSbUxGVkJRVWxuUWl4aFFVRktMRU5CUVd0Q1RpeFhRVUZzUWl4SlFVRnBRMFFzVDBGQlQwMHNSMEZCVUN4RlFVRnFRenRCUVVORU96dEJRVVZFTEZkQlFVOW1MRWRCUVZBN1FVRkRSQ3hIUVhSRVlTeEZRWE5FV0N4RlFVRkZaMElzWlVGQlpTeEZRVUZxUWl4RlFVRnhRa3dzVTBGQlV5eEZRVUU1UWl4RlFVRnJRMFVzVjBGQlZ5eEZRVUUzUXl4RlFYUkVWeXhEUVVGb1FqczdRVUYzUkVFc1RVRkJUVWtzWVVGQllXNUNMRkZCUVZGbExGTkJRVklzUTBGQmEwSTNRaXhOUVVGeVF6czdRVUZGUVN4VFFVRlBPMEZCUTB4VkxITkNRVVJMTzBGQlJVeDNRaXhWUVVGTkxHdENRVUZQUXp0QlFVWlNMRXRCUjBaMlFpeExRVWhGTzBGQlNVeDNRaXhqUVVGVkxHdENRVUZEUXl4RFFVRkVMRVZCUVU4N1FVRkRaanRCUVVOQkxGZEJRVXNzU1VGQlNUZENMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1hsQ0xGVkJRWEJDTEVWQlFXZERla0lzUjBGQmFFTXNSVUZCY1VNN1FVRkRia01zV1VGQlRYRkNMRmxCUVZsbUxGRkJRVkZsTEZOQlFWSXNRMEZCYTBKeVFpeERRVUZzUWl4RFFVRnNRanRCUVVOQkxGbEJRVTA0UWl4bFFVRmxWQ3hWUVVGVk4wSXNUVUZCTDBJN1FVRkRRU3haUVVGSmRVTXNjMEpCUVhOQ0xFdEJRVEZDTzBGQlEwRXNXVUZCU1VNc2RVSkJRWFZDUXl4UlFVRXpRanRCUVVOQkxGbEJRVWxETEdWQlFXVXNRMEZCYmtJN1FVRkRRU3haUVVGSlF5eHJRa0ZCYTBJc1EwRkJkRUk3UVVGRFFTeFpRVUZKUXl4clFrRkJhMElzUzBGQmRFSTdRVUZEUVN4WlFVRkpReXhKUVVGSkxFTkJRVkk3TzBGQlJVRXNaVUZCVHl4RFFVRkRUaXh0UWtGQlJDeEpRVUYzUWswc1NVRkJTVkFzV1VGQmJrTXNSVUZCYVVRN1FVRkRMME1zWTBGQlRWRXNWMEZCVjJwQ0xGVkJRVlZuUWl4RFFVRldMRU5CUVdwQ08wRkJRMEVzWTBGQlRVVXNWMEZCVjNoRUxIRkNRVUZ4UW5WRUxGTkJRVk42UWl4SlFVRTVRaXhGUVVGdlEzbENMRk5CUVZNelFpeEZRVUUzUXl4RlFVRnBSR3RDTEVOQlFXcEVMRU5CUVdwQ096dEJRVVZCTzBGQlEwRXNZMEZCU1ZVc1dVRkJXU3hEUVVGYUxFbEJRV2xDUVN4WlFVRlpMRU5CUVdwRExFVkJRVzlETzBGQlEyeERVaXhyUTBGQmMwSXNTVUZCZEVJN1FVRkRRVThzY1VKQlFWTXhRaXhMUVVGVUxFTkJRV1UwUWl4SlFVRm1MRU5CUVc5Q1JDeFJRVUZ3UWp0QlFVTkVMRmRCU0VRc1RVRkhUenRCUVVOTUxHZENRVUZKUVN4WFFVRlhMRU5CUVdZc1JVRkJhMEk3UVVGRGFFSklMR2REUVVGclFpeEpRVUZzUWpzN1FVRkZRU3hyUWtGQlRVc3NWMEZCV1VZc1YwRkJWeXhEUVVGYUxFZEJRV2xDZWtJc1MwRkJTelJDTEVkQlFVd3NRMEZCVTBnc1VVRkJWQ3hEUVVGcVFpeEhRVUZ6UTBFc1YwRkJWeXhEUVVGc1JUczdRVUZGUVN4clFrRkJTVVVzVjBGQlYxUXNiMEpCUVdZc1JVRkJjVU03UVVGRGJrTkJMSFZEUVVGMVFsTXNVVUZCZGtJN1FVRkRRVTRzYTBOQlFXdENiRVFzWTBGQlkzTkVMRkZCUVdRc1EwRkJiRUk3UVVGRFFVd3NLMEpCUVdWSExFTkJRV1k3UVVGRFJEdEJRVU5HTzBGQlEwWTdPMEZCUlVSQk8wRkJRMFE3TzBGQlJVUXNXVUZCU1N4RFFVRkRUaXh0UWtGQlRDeEZRVUV3UWp0QlFVTjRRaXhqUVVGTldTeFRRVUZUY2tNc1VVRkJVV0VzVDBGQlVpeERRVUZuUW01Q0xFTkJRV2hDTEVOQlFXWTdPMEZCUlVFc1kwRkJTVzlETEcxQ1FVRnRRaXhEUVVGRFR5eFBRVUZQUXl4SFFVRXZRaXhGUVVGdlF6dEJRVU5zUXl4blFrRkJTWFpDTEZWQlFWVmhMRmxCUVZZc1JVRkJkMEowUWl4TFFVRjRRaXhEUVVFNFFqSkNMRkZCUVRsQ0xFdEJRVEpEU2l4bFFVRXZReXhGUVVGblJXUXNWVUZCVldFc1dVRkJWaXhGUVVGM1FuUkNMRXRCUVhoQ0xFTkJRVGhDTkVJc1NVRkJPVUlzUTBGQmJVTk1MR1ZCUVc1RE8wRkJRMnBGTEZkQlJrUXNUVUZGVHl4SlFVRkpMRU5CUVVORExHVkJRVVFzU1VGQmIwSlBMRTlCUVU5RExFZEJRUzlDTEVWQlFXOURPMEZCUTNwRExHZENRVUZKUkN4UFFVRlBjRUlzUjBGQlVDeFBRVUZwUW1wQ0xGRkJRVkZyUWl4aFFVRlNMRU5CUVhOQ2VFSXNRMEZCZEVJc1EwRkJja0lzUlVGQkswTXlReXhQUVVGUFF5eEhRVUZRTEVOQlFWZDBReXhSUVVGUmEwSXNZVUZCVWl4RFFVRnpRbmhDTEVOQlFYUkNMRU5CUVZnN1FVRkRhRVE3UVVGRFJqdEJRVU5HTzBGQlEwWTdRVUZ1UkVrc1MwRkJVRHRCUVhGRVJDSXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdOaGJHTXNJSFIzWldWdUxDQmxZWE5wYm1jc0lIUnlZVzV6Wm05eWJTQjlJR1p5YjIwZ0ozQnZjRzF2ZEdsdmJpYzdYRzVqYjI1emRDQjdJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsSUgwZ1BTQmpZV3hqTzF4dVkyOXVjM1FnZXlCamJHRnRjQ0I5SUQwZ2RISmhibk5tYjNKdE8xeHVZMjl1YzNRZ1kyeGhiWEJRY205bmNtVnpjeUE5SUdOc1lXMXdLREFzSURFcE8xeHVYRzR2S2x4dUlDQkdiR0YwZEdWdUlHRnljbUY1Y3l3Z2QyaHBZMmdnWkdWdWIzUmxJSEJoY21Gc2JHVnNJRzl5SUhOMFlXZG5aWEpsWkNCMGQyVmxibk1zWEc0Z0lHbHVkRzhnWVNCbWJHRjBJSE5sZENCdlppQnBibk4wY25WamRHbHZibk1nZDJocFkyZ2djbVZ6WlhRZ2RHaGxJSEJzWVhsb1pXRmtYRzRnSUdGbWRHVnlJR1ZoWTJnZ2RIZGxaVzR1WEc0Z0tpOWNibVoxYm1OMGFXOXVJR1pzWVhSMFpXNUJjbkpoZVhOVWIxTmxjWFZsYm1ObEtITmxjWFZsYm1ObExDQnpaV2R0Wlc1MEtTQjdYRzRnSUdsbUlDaHpaV2R0Wlc1MExtTnZibk4wY25WamRHOXlJRDA5UFNCQmNuSmhlU2tnZTF4dUlDQWdJR052Ym5OMElHeGhjM1JCY21jZ1BTQnpaV2R0Wlc1MFczTmxaMjFsYm5RdWJHVnVaM1JvSUMwZ01WMDdYRzRnSUNBZ1kyOXVjM1FnYVhOVGRHRm5aMlZ5WldRZ1BTQjBlWEJsYjJZZ2JHRnpkRUZ5WnlBOVBUMGdKMjUxYldKbGNpYzdYRzRnSUNBZ1kyOXVjM1FnZEhkbFpXNXpJRDBnYVhOVGRHRm5aMlZ5WldRZ1B5QnpaV2R0Wlc1MExuTnNhV05sS0RBc0lDMHhLU0E2SUhObFoyMWxiblE3WEc0Z0lDQWdZMjl1YzNRZ2JuVnRWSGRsWlc1eklEMGdkSGRsWlc1ekxteGxibWQwYUR0Y2JpQWdJQ0JzWlhRZ2IyWm1jMlYwSUQwZ01EdGNibHh1SUNBZ0lIUjNaV1Z1Y3k1bWIzSkZZV05vS0NocGRHVnRMQ0JwS1NBOVBpQjdYRzRnSUNBZ0lDQnpaWEYxWlc1alpTNXdkWE5vS0dsMFpXMHBPMXh1WEc0Z0lDQWdJQ0JwWmlBb2FTQWhQVDBnYm5WdFZIZGxaVzV6SUMwZ01Ta2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmtkWEpoZEdsdmJpQTlJR2wwWlcwdVoyVjBVSEp2Y0NnblpIVnlZWFJwYjI0bktUdGNiaUFnSUNBZ0lDQWdiMlptYzJWMElDczlJR2x6VTNSaFoyZGxjbVZrSUQ4Z2JHRnpkRUZ5WnlBNklEQTdYRzRnSUNBZ0lDQWdJSE5sY1hWbGJtTmxMbkIxYzJnb1lDMGtlMlIxY21GMGFXOXVJQzBnYjJabWMyVjBmV0FwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBwTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhObGNYVmxibU5sTG5CMWMyZ29jMlZuYldWdWRDazdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdjMlZ4ZFdWdVkyVTdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUhScGJXVnNhVzVsS0hObGNYVmxibU5sTENCd2NtOXdjeWtnZTF4dUlDQnNaWFFnY0d4aGVXaGxZV1FnUFNBd08xeHVJQ0JzWlhRZ1pIVnlZWFJwYjI0Z1BTQXdPMXh1WEc0Z0lHTnZibk4wSUcxaGNtdGxjbk1nUFNCelpYRjFaVzVqWlZ4dUlDQWdJQzV5WldSMVkyVW9abXhoZEhSbGJrRnljbUY1YzFSdlUyVnhkV1Z1WTJVc0lGdGRLVnh1SUNBZ0lDOHZJRU52Ym5abGNuUWdjMlZ4ZFdWdVkyVWdkRzhnY21Wc1lYUnBkbVVnZEdsdGFXNW5jMXh1SUNBZ0lDNXlaV1IxWTJVb0tHRmpZeXdnYzJWbmJXVnVkQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ1kyOXVjM1FnZEhsd1pVOW1VMlZuYldWdWRDQTlJSFI1Y0dWdlppQnpaV2R0Wlc1ME8xeHVYRzRnSUNBZ0lDQXZMeUJKWmlCeVpXeGhkR2wyWlNCMGFXMWxjM1JoYlhCY2JpQWdJQ0FnSUdsbUlDaDBlWEJsVDJaVFpXZHRaVzUwSUQwOVBTQW5jM1J5YVc1bkp5a2dlMXh1SUNBZ0lDQWdJQ0J3YkdGNWFHVmhaQ0FyUFNCd1lYSnpaVVpzYjJGMEtITmxaMjFsYm5RcE8xeHVYRzRnSUNBZ0lDQXZMeUJKWmlCaFluTnZiSFYwWlNCMGFXMWxjM1JoYlhCY2JpQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RIbHdaVTltVTJWbmJXVnVkQ0E5UFQwZ0oyNTFiV0psY2ljcElIdGNiaUFnSUNBZ0lDQWdjR3hoZVdobFlXUWdQU0J6WldkdFpXNTBPMXh1WEc0Z0lDQWdJQ0F2THlCUGNpQnBaaUIwZDJWbGJpd2dZV1JrSUcxaGNtdGxjbHh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RHOGdQU0J3YkdGNWFHVmhaQ0FySUhObFoyMWxiblF1WjJWMFVISnZjQ2duWkhWeVlYUnBiMjRuS1R0Y2JseHVJQ0FnSUNBZ0lDQmhZMk11Y0hWemFDaDdYRzRnSUNBZ0lDQWdJQ0FnZEhkbFpXNDZJSE5sWjIxbGJuUXNYRzRnSUNBZ0lDQWdJQ0FnWm5KdmJUb2djR3hoZVdobFlXUXNYRzRnSUNBZ0lDQWdJQ0FnZEc5Y2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnY0d4aGVXaGxZV1FnUFNCMGJ6dGNiaUFnSUNBZ0lDQWdaSFZ5WVhScGIyNGdQU0JOWVhSb0xtMWhlQ2hrZFhKaGRHbHZiaXdnZEc4cE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnlaWFIxY200Z1lXTmpPMXh1SUNBZ0lIMHNJRnRkS1Z4dUlDQWdJQzh2SUZOd2JHbDBJSFIzWldWdWN5QmllU0IwWVhKblpYUXNJR0Z1WkNCamIyNTJaWEowSUdGaWMyOXNkWFJsSUcxaGNtdGxjbk1nZEc4Z2NISnZaM0psYzNNZ2JXRnlhMlZ5YzF4dUlDQWdJQzV5WldSMVkyVW9LR0ZqWXl3Z2JXRnlhMlZ5S1NBOVBpQjdYRzRnSUNBZ0lDQmpiMjV6ZENCdmRYUndkWFFnUFNCdFlYSnJaWEl1ZEhkbFpXNHVaMlYwVUhKdmNDZ25iMjVWY0dSaGRHVW5LVHRjYmlBZ0lDQWdJR3hsZENCMFlYSm5aWFJKYm1SbGVDQTlJR0ZqWXk1MFlYSm5aWFJ6TG1sdVpHVjRUMllvYjNWMGNIVjBLVHRjYmx4dUlDQWdJQ0FnYVdZZ0tIUmhjbWRsZEVsdVpHVjRJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0JoWTJNdWRHRnlaMlYwY3k1d2RYTm9LRzkxZEhCMWRDazdYRzRnSUNBZ0lDQWdJR0ZqWXk1bWNtRm5iV1Z1ZEhNdWNIVnphQ2hiWFNrN1hHNGdJQ0FnSUNBZ0lIUmhjbWRsZEVsdVpHVjRJRDBnWVdOakxtWnlZV2R0Wlc1MGN5NXNaVzVuZEdnZ0xTQXhPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JqYjI1emRDQm1jbUZuYldWdWRFeHBjM1FnUFNCaFkyTXVabkpoWjIxbGJuUnpXM1JoY21kbGRFbHVaR1Y0WFR0Y2JseHVJQ0FnSUNBZ1puSmhaMjFsYm5STWFYTjBMbkIxYzJnb2UxeHVJQ0FnSUNBZ0lDQjBkMlZsYmpvZ2JXRnlhMlZ5TG5SM1pXVnVMRnh1SUNBZ0lDQWdJQ0JtY205dE9pQm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2d3TENCa2RYSmhkR2x2Yml3Z2JXRnlhMlZ5TG1aeWIyMHBMRnh1SUNBZ0lDQWdJQ0IwYnpvZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9NQ3dnWkhWeVlYUnBiMjRzSUcxaGNtdGxjaTUwYnlsY2JpQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQnBaaUFvYjNWMGNIVjBMbWRsZENrZ2UxeHVJQ0FnSUNBZ0lDQmhZMk11YVc1cGRHbGhiRlpoYkhWbGMxdDBZWEpuWlhSSmJtUmxlRjBnUFNCdmRYUndkWFF1WjJWMEtDazdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQmhZMk03WEc0Z0lDQWdmU3dnZXlCcGJtbDBhV0ZzVm1Gc2RXVnpPaUJiWFN3Z2RHRnlaMlYwY3pvZ1cxMHNJR1p5WVdkdFpXNTBjem9nVzEwZ2ZTazdYRzVjYmlBZ1kyOXVjM1FnYm5WdFRXRnlhMlZ5Y3lBOUlHMWhjbXRsY25NdVpuSmhaMjFsYm5SekxteGxibWQwYUR0Y2JseHVJQ0J5WlhSMWNtNGdkSGRsWlc0b2UxeHVJQ0FnSUdSMWNtRjBhVzl1TEZ4dUlDQWdJR1ZoYzJVNklHVmhjMmx1Wnk1c2FXNWxZWElzWEc0Z0lDQWdMaTR1Y0hKdmNITXNYRzRnSUNBZ2IyNVZjR1JoZEdVNklDaDJLU0E5UGlCN1hHNGdJQ0FnSUNBdkx5QkdhWEp6ZENCcGRHVnlZWFJsSUc5MlpYSWdiM1YwY0hWMElIUmhjbWRsZEhNc0lHRnVaQ0IwY25rZ2RHOGdabWx1WkNCaGJpQmhZM1JwZG1VZ2RIZGxaVzVjYmlBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYm5WdFRXRnlhMlZ5Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR1p5WVdkdFpXNTBjeUE5SUcxaGNtdGxjbk11Wm5KaFoyMWxiblJ6VzJsZE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCdWRXMUdjbUZuYldWdWRITWdQU0JtY21GbmJXVnVkSE11YkdWdVozUm9PMXh1SUNBZ0lDQWdJQ0JzWlhRZ1ptOTFibVJCWTNScGRtVkdjbUZuYldWdWRDQTlJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQnNaWFFnY0hKbGRsQnliMmR5WlhOelJHbHpkR0Z1WTJVZ1BTQkpibVpwYm1sMGVUdGNiaUFnSUNBZ0lDQWdiR1YwSUdOc2IzTmxjM1JKYm1SbGVDQTlJREE3WEc0Z0lDQWdJQ0FnSUd4bGRDQmpiRzl6WlhOMFVISnZaM0psYzNNZ1BTQXdPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2RIZGxaVzVJWVhOVGRHRnlkR1ZrSUQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUd4bGRDQnFJRDBnTUR0Y2JseHVJQ0FnSUNBZ0lDQjNhR2xzWlNBb0lXWnZkVzVrUVdOMGFYWmxSbkpoWjIxbGJuUWdKaVlnYWlBOElHNTFiVVp5WVdkdFpXNTBjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lHTnZibk4wSUdaeVlXZHRaVzUwSUQwZ1puSmhaMjFsYm5SelcycGRPMXh1SUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSEJ5YjJkeVpYTnpJRDBnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb1puSmhaMjFsYm5RdVpuSnZiU3dnWm5KaFoyMWxiblF1ZEc4c0lIWXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0x5OGdSbTkxYm1RZ1lXNGdZV04wYVhabElHWnlZV2R0Wlc1MExDQmxlR1ZqZFhSbFhHNGdJQ0FnSUNBZ0lDQWdhV1lnS0hCeWIyZHlaWE56SUQ0OUlEQWdKaVlnY0hKdlozSmxjM01nUEQwZ01Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOTFibVJCWTNScGRtVkdjbUZuYldWdWRDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtY21GbmJXVnVkQzUwZDJWbGJpNXpaV1ZyS0hCeWIyZHlaWE56S1R0Y2JpQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliMmR5WlhOeklENGdNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IwZDJWbGJraGhjMU4wWVhKMFpXUWdQU0IwY25WbE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdScGMzUmhibU5sSUQwZ0tIQnliMmR5WlhOeklEd2dNQ2tnUHlCTllYUm9MbUZpY3lod2NtOW5jbVZ6Y3lrZ09pQndjbTluY21WemN5QXRJREU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHUnBjM1JoYm1ObElEd2djSEpsZGxCeWIyZHlaWE56UkdsemRHRnVZMlVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NtVjJVSEp2WjNKbGMzTkVhWE4wWVc1alpTQTlJR1JwYzNSaGJtTmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05zYjNObGMzUlFjbTluY21WemN5QTlJR05zWVcxd1VISnZaM0psYzNNb2NISnZaM0psYzNNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnNiM05sYzNSSmJtUmxlQ0E5SUdvN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0JxS3lzN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb0lXWnZkVzVrUVdOMGFYWmxSbkpoWjIxbGJuUXBJSHRjYmlBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IwWVhKblpYUWdQU0J0WVhKclpYSnpMblJoY21kbGRITmJhVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvZEhkbFpXNUlZWE5UZEdGeWRHVmtJSHg4SUNGMFlYSm5aWFF1YzJWMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9abkpoWjIxbGJuUnpXMk5zYjNObGMzUkpibVJsZUYwdWRIZGxaVzR1Y0hKdlozSmxjM01nSVQwOUlHTnNiM05sYzNSUWNtOW5jbVZ6Y3lrZ1puSmhaMjFsYm5SelcyTnNiM05sYzNSSmJtUmxlRjB1ZEhkbFpXNHVjMlZsYXloamJHOXpaWE4wVUhKdlozSmxjM01wTzF4dUlDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9JWFIzWldWdVNHRnpVM1JoY25SbFpDQW1KaUIwWVhKblpYUXVjMlYwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHRnlaMlYwTG1kbGRDZ3BJQ0U5UFNCdFlYSnJaWEp6TG1sdWFYUnBZV3hXWVd4MVpYTmJhVjBwSUhSaGNtZGxkQzV6WlhRb2JXRnlhMlZ5Y3k1cGJtbDBhV0ZzVm1Gc2RXVnpXMmxkS1R0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgwcE8xeHVmVnh1SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcG9wbW90aW9uLXRpbWVsaW5lL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==