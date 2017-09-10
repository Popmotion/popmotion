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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJ2IiwiYXBwZW5kVW5pdCIsInVuaXQiLCJhcHBseU9mZnNldCIsImZyb20iLCJ0byIsImdldE9mZnNldCIsInN1YnRyYWN0IiwiYXBwbHlPZmZzZXRUbyIsImFkZCIsImNsYW1wTWF4IiwibWF4IiwiTWF0aCIsIm1pbiIsImNsYW1wTWluIiwiY2xhbXAiLCJfbWluIiwiX21heCIsImNvbmRpdGlvbmFsIiwiY29uZGl0aW9uIiwiaWZUcnVlIiwiaWZGYWxzZSIsImFjdGlvbiIsInBpcGUiLCJ0cmFuc2Zvcm1lcnMiLCJudW1UcmFuc2Zvcm1lcnMiLCJsZW5ndGgiLCJpIiwiYWNjIiwiYXJncyIsImludGVycG9sYXRlIiwiaW5wdXQiLCJvdXRwdXQiLCJyYW5nZUVhc2luZyIsInJhbmdlTGVuZ3RoIiwiZmluYWxJbmRleCIsInByb2dyZXNzSW5SYW5nZSIsImVhc2VkUHJvZ3Jlc3MiLCJvcmlnaW4iLCJkaXZpZGUiLCJtdWx0aXBseSIsImdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmciLCJhbHRlckRpc3BsYWNlbWVudCIsImNvbnN0YW50IiwiZGlzcGxhY2VtZW50Iiwic3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQiLCJhYnMiLCJzcHJpbmciLCJub25saW5lYXJTcHJpbmciLCJzcXJ0Iiwid3JhcCIsInJhbmdlU2l6ZSIsInNtb290aCIsInN0cmVuZ3RoIiwicHJldmlvdXNWYWx1ZSIsImxhc3RVcGRhdGVkIiwiY3VycmVudEZyYW1lc3RhbXAiLCJ0aW1lRGVsdGEiLCJuZXdWYWx1ZSIsInNuYXAiLCJwb2ludHMiLCJyb3VuZCIsIm51bVBvaW50cyIsImxhc3REaXN0YW5jZSIsInBvaW50IiwiZGlzdGFuY2UiLCJzdGVwcyIsImRpcmVjdGlvbiIsInByb2dyZXNzIiwidHJhbnNmb3JtQ2hpbGRWYWx1ZXMiLCJjaGlsZFRyYW5zZm9ybWVycyIsIm11dGFibGVTdGF0ZSIsImtleSIsImNoaWxkVHJhbnNmb3JtZXIiLCJwZXJjZW50IiwiZGVncmVlcyIsInB4IiwicmdiVW5pdCIsInJnYmFUZW1wbGF0ZSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImFscGhhIiwicmdiYSIsImhzbGFUZW1wbGF0ZSIsImh1ZSIsInNhdHVyYXRpb24iLCJsaWdodG5lc3MiLCJoc2xhIiwicGFyc2VJbnQiLCJjb2xvciIsImhhc093blByb3BlcnR5IiwiYmxlbmQiLCJmcm9tRXhwbyIsInRvRXhwbyIsImJsZW5kQ29sb3IiLCJmcm9tQ29sb3IiLCJ0b0NvbG9yIiwiYmxlbmRlZCIsInJlc29sdmUzIiwidCIsInV0IiwicmVzb2x2ZTQiLCJhMSIsImJlemllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxDQUFEO0FBQUEsU0FBT0EsQ0FBUDtBQUFBLENBQWI7O0FBRUE7Ozs7Ozs7QUFPTyxJQUFNQyxrQ0FBYSxTQUFiQSxVQUFhLENBQUNDLElBQUQ7QUFBQSxTQUFVLFVBQUNGLENBQUQ7QUFBQSxnQkFBVUEsQ0FBVixHQUFjRSxJQUFkO0FBQUEsR0FBVjtBQUFBLENBQW5COztBQUVQOzs7Ozs7OztBQVFPLElBQU1DLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFPQyxFQUFQLEVBQWM7QUFDdkMsTUFBTUMsWUFBWUMsU0FBU0gsSUFBVCxDQUFsQjtBQUNBLE1BQU1JLGdCQUFnQkMsSUFBSUosRUFBSixDQUF0QjtBQUNBLFNBQU8sVUFBQ0wsQ0FBRDtBQUFBLFdBQU9RLGNBQWNGLFVBQVVOLENBQVYsQ0FBZCxDQUFQO0FBQUEsR0FBUDtBQUNELENBSk07O0FBTVA7Ozs7Ozs7QUFPTyxJQUFNVSw4QkFBVyxTQUFYQSxRQUFXLENBQUNDLEdBQUQ7QUFBQSxTQUFTLFVBQUNYLENBQUQ7QUFBQSxXQUFPWSxLQUFLQyxHQUFMLENBQVNiLENBQVQsRUFBWVcsR0FBWixDQUFQO0FBQUEsR0FBVDtBQUFBLENB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WXlDLEVBQVosR0FBaUJ6QyxPQUFPLENBQVAsSUFBWXdDLENBQTlCLElBQW1DQyxFQUFuQyxHQUF3Q0UsS0FBS0gsQ0FBOUMsSUFBbURDLEVBQW5ELEdBQXdELENBQUNFLEtBQUtGLEVBQUwsR0FBVSxDQUFDekMsT0FBTyxDQUFQLElBQVl5QyxFQUFaLEdBQWlCekMsT0FBTyxDQUFQLElBQVl3QyxDQUE5QixJQUFtQ0EsQ0FBOUMsSUFBbURBLENBQWxIO0FBQ0QsR0FKZ0I7QUFBQSxDQUFqQjs7QUFNTyxJQUFNSSwwQkFBUyxTQUFUQSxNQUFTLENBQUM1QyxNQUFEO0FBQUEsU0FDbkJBLE9BQU9sQyxNQUFQLEtBQWtCLENBQW5CLEdBQXdCeUUsU0FBU3ZDLE1BQVQsQ0FBeEIsR0FBMkMwQyxTQUFTMUMsTUFBVCxDQUR2QjtBQUFBLENBQWYiLCJmaWxlIjoidHJhbnNmb3JtZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCBzdGVwUHJvZ3Jlc3MsIHNtb290aCBhcyBjYWxjU21vb3RoaW5nIH0gZnJvbSAnLi9jYWxjJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBjb2xvciBhcyBwYXJzZUNvbG9yIH0gZnJvbSAnLi9wYXJzZXJzJztcbmltcG9ydCB7IGN1cnJlbnRGcmFtZVRpbWUgfSBmcm9tICdmcmFtZXN5bmMnO1xuXG5jb25zdCBub29wID0gKHYpID0+IHY7XG5cbi8qKlxuICogQXBwZW5kIFVuaXRcbiAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGVuZFxuICogYXBwZW5kVW5pdCgncHgnLCAyMCkgLT4gJzIwcHgnXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVuaXQpXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBhcHBlbmRVbml0ID0gKHVuaXQpID0+ICh2KSA9PiBgJHt2fSR7dW5pdH1gO1xuXG4vKipcbiAqIEFwcGx5IG9mZnNldFxuICogQSBmdW5jdGlvbiB0aGF0LCBnaXZlbiBhIHZhbHVlLCB3aWxsIGdldCB0aGUgb2Zmc2V0IGZyb20gYGZyb21gXG4gKiBhbmQgYXBwbHkgaXQgdG8gYHRvYFxuICogQHBhcmFtICB7bnVtYmVyfSBmcm9tXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHRvXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGx5T2Zmc2V0ID0gKGZyb20sIHRvKSA9PiB7XG4gIGNvbnN0IGdldE9mZnNldCA9IHN1YnRyYWN0KGZyb20pO1xuICBjb25zdCBhcHBseU9mZnNldFRvID0gYWRkKHRvKTtcbiAgcmV0dXJuICh2KSA9PiBhcHBseU9mZnNldFRvKGdldE9mZnNldCh2KSk7XG59O1xuXG4vKipcbiAqIENsYW1wIHZhbHVlIGJldHdlZW5cbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVzdHJpY3QgYSBnaXZlbiB2YWx1ZSBiZXR3ZWVuIGBtaW5gIGFuZCBgbWF4YFxuICogQHBhcmFtICB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBjbGFtcE1heCA9IChtYXgpID0+ICh2KSA9PiBNYXRoLm1pbih2LCBtYXgpO1xuZXhwb3J0IGNvbnN0IGNsYW1wTWluID0gKG1pbikgPT4gKHYpID0+IE1hdGgubWF4KHYsIG1pbik7XG5leHBvcnQgY29uc3QgY2xhbXAgPSAobWluLCBtYXgpID0+IHtcbiAgY29uc3QgX21pbiA9IGNsYW1wTWluKG1pbik7XG4gIGNvbnN0IF9tYXggPSBjbGFtcE1heChtYXgpO1xuICByZXR1cm4gKHYpID0+IF9taW4oX21heCh2KSk7XG59O1xuXG5leHBvcnQgY29uc3QgY29uZGl0aW9uYWwgPSAoY29uZGl0aW9uLCBpZlRydWUsIGlmRmFsc2UgPSBub29wKSA9PiAodiwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBjb25kaXRpb24odiwgYWN0aW9uKSA/IGlmVHJ1ZSh2LCBhY3Rpb24pIDogaWZGYWxzZSh2LCBhY3Rpb24pO1xufTtcblxuLyoqXG4gKiBQaXBlXG4gKiBDb21wb3NlIG90aGVyIHRyYW5zZm9ybWVycyB0byBydW4gbGluZWFyaWx5XG4gKiBwaXBlKG1pbigyMCksIG1heCg0MCkpXG4gKiBAcGFyYW0gIHsuLi5mdW5jdGlvbnN9IHRyYW5zZm9ybWVyc1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCBwaXBlID0gKC4uLnRyYW5zZm9ybWVycykgPT4ge1xuICBjb25zdCBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAgcmV0dXJuIChhY2MsIC4uLmFyZ3MpID0+IHtcbiAgICBsZXQgdiA9IGFjYztcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0odiwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xuXG4vKipcbiAqIEludGVycG9sYXRlIGZyb20gc2V0IG9mIHZhbHVlcyB0byBhbm90aGVyXG4gKiBAcGFyYW0gIHtBcnJheX0gaW5wdXQgYXJyYXlcbiAqIEBwYXJhbSAge0FycmF5fSBvdXRwdXRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSByYW5nZUVhc2luZ1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCBpbnRlcnBvbGF0ZSA9IChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykgPT4ge1xuICBjb25zdCByYW5nZUxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgY29uc3QgZmluYWxJbmRleCA9IHJhbmdlTGVuZ3RoIC0gMTtcblxuICByZXR1cm4gKHYpID0+IHtcbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1pbmltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPD0gaW5wdXRbMF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbMF07XG4gICAgfVxuXG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtYXhpbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2ID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgIH1cblxuICAgIGxldCBpID0gMTtcblxuICAgIC8vIEZpbmQgaW5kZXggb2YgcmFuZ2Ugc3RhcnRcbiAgICBmb3IgKDsgaSA8IHJhbmdlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpbnB1dFtpXSA+IHYgfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzc0luUmFuZ2UgPSBnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbnB1dFtpIC0gMV0sIGlucHV0W2ldLCB2KTtcbiAgICBjb25zdCBlYXNlZFByb2dyZXNzID0gKHJhbmdlRWFzaW5nKSA/IHJhbmdlRWFzaW5nW2kgLSAxXShwcm9ncmVzc0luUmFuZ2UpIDogcHJvZ3Jlc3NJblJhbmdlO1xuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhvdXRwdXRbaSAtIDFdLCBvdXRwdXRbaV0sIGVhc2VkUHJvZ3Jlc3MpO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHN1YnRyYWN0ID0gKG9yaWdpbikgPT4gKHYpID0+IHYgLSBvcmlnaW47XG5leHBvcnQgY29uc3QgYWRkID0gKG9yaWdpbikgPT4gKHYpID0+IHYgKyBvcmlnaW47XG5leHBvcnQgY29uc3QgZGl2aWRlID0gKG9yaWdpbikgPT4gKHYpID0+IHYgLyBvcmlnaW47XG5leHBvcnQgY29uc3QgbXVsdGlwbHkgPSAob3JpZ2luKSA9PiAodikgPT4gdiAqIG9yaWdpbjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcgPSAoYWx0ZXJEaXNwbGFjZW1lbnQgPSBub29wKSA9PiAoY29uc3RhbnQsIG9yaWdpbikgPT4gKHYpID0+IHtcbiAgY29uc3QgZGlzcGxhY2VtZW50ID0gb3JpZ2luIC0gdjtcbiAgY29uc3Qgc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQgPSAtIGNvbnN0YW50ICogKDAgLSBhbHRlckRpc3BsYWNlbWVudChNYXRoLmFicyhkaXNwbGFjZW1lbnQpKSk7XG4gIHJldHVybiAoZGlzcGxhY2VtZW50IDw9IDApID8gb3JpZ2luICsgc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQgOiBvcmlnaW4gLSBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCBzcHJpbmcgPSBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nKCk7XG5leHBvcnQgY29uc3Qgbm9ubGluZWFyU3ByaW5nID0gZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZyhNYXRoLnNxcnQpO1xuXG5leHBvcnQgY29uc3Qgd3JhcCA9IChtaW4sIG1heCkgPT4gKHYpID0+IHtcbiAgY29uc3QgcmFuZ2VTaXplID0gbWF4IC0gbWluO1xuICByZXR1cm4gKCh2IC0gbWluKSAlIHJhbmdlU2l6ZSArIHJhbmdlU2l6ZSkgJSByYW5nZVNpemUgKyBtaW47XG59O1xuXG5leHBvcnQgY29uc3Qgc21vb3RoID0gKHN0cmVuZ3RoID0gNTApID0+IHtcbiAgbGV0IHByZXZpb3VzVmFsdWUgPSAwO1xuICBsZXQgbGFzdFVwZGF0ZWQgPSAwO1xuXG4gIHJldHVybiAodikgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRGcmFtZXN0YW1wID0gY3VycmVudEZyYW1lVGltZSgpO1xuICAgIGNvbnN0IHRpbWVEZWx0YSA9IChjdXJyZW50RnJhbWVzdGFtcCAhPT0gbGFzdFVwZGF0ZWQpID8gY3VycmVudEZyYW1lc3RhbXAgLSBsYXN0VXBkYXRlZCA6IDA7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aW1lRGVsdGEgPyBjYWxjU21vb3RoaW5nKHYsIHByZXZpb3VzVmFsdWUsIHRpbWVEZWx0YSwgc3RyZW5ndGgpIDogcHJldmlvdXNWYWx1ZTtcbiAgICBsYXN0VXBkYXRlZCA9IGN1cnJlbnRGcmFtZXN0YW1wO1xuICAgIHByZXZpb3VzVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICByZXR1cm4gbmV3VmFsdWU7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc25hcCA9IChwb2ludHMpID0+IHtcbiAgaWYgKHR5cGVvZiBwb2ludHMgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuICh2KSA9PiBNYXRoLnJvdW5kKHYgLyBwb2ludHMpICogcG9pbnRzO1xuICB9IGVsc2Uge1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBudW1Qb2ludHMgPSBwb2ludHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuICh2KSA9PiB7XG4gICAgICBsZXQgbGFzdERpc3RhbmNlID0gTWF0aC5hYnMocG9pbnRzWzBdIC0gdik7XG5cbiAgICAgIGZvciAoaSA9IDE7IGkgPCBudW1Qb2ludHM7IGkrKykge1xuICAgICAgICBjb25zdCBwb2ludCA9IHBvaW50c1tpXTtcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmFicyhwb2ludCAtIHYpO1xuXG4gICAgICAgIGlmIChkaXN0YW5jZSA9PT0gMCkgcmV0dXJuIHBvaW50O1xuXG4gICAgICAgIGlmIChkaXN0YW5jZSA+IGxhc3REaXN0YW5jZSkgcmV0dXJuIHBvaW50c1tpIC0gMV07XG5cbiAgICAgICAgaWYgKGkgPT09IG51bVBvaW50cyAtIDEpIHJldHVybiBwb2ludDtcblxuICAgICAgICBsYXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc3RlcHMgPSAoc3RlcHMsIG1pbiA9IDAsIG1heCA9IDEsIGRpcmVjdGlvbiA9ICdzdGFydCcpID0+ICh2KSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzID0gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUobWluLCBtYXgsIHYpO1xuICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MobWluLCBtYXgsIHN0ZXBQcm9ncmVzcyhzdGVwcywgcHJvZ3Jlc3MsIGRpcmVjdGlvbikpO1xufTtcblxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybUNoaWxkVmFsdWVzID0gKGNoaWxkVHJhbnNmb3JtZXJzKSA9PiB7XG4gIGNvbnN0IG11dGFibGVTdGF0ZSA9IHt9O1xuICByZXR1cm4gKHYpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdikge1xuICAgICAgY29uc3QgY2hpbGRUcmFuc2Zvcm1lciA9IGNoaWxkVHJhbnNmb3JtZXJzW2tleV07XG4gICAgICBpZiAoY2hpbGRUcmFuc2Zvcm1lcikge1xuICAgICAgICBtdXRhYmxlU3RhdGVba2V5XSA9IGNoaWxkVHJhbnNmb3JtZXIodltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbXV0YWJsZVN0YXRlO1xuICB9O1xufTtcblxuLy8gVW5pdCB0cmFuc2Zvcm1lcnNcbmV4cG9ydCBjb25zdCBwZXJjZW50ID0gYXBwZW5kVW5pdCgnJScpO1xuZXhwb3J0IGNvbnN0IGRlZ3JlZXMgPSBhcHBlbmRVbml0KCdkZWcnKTtcbmV4cG9ydCBjb25zdCBweCA9IGFwcGVuZFVuaXQoJ3B4Jyk7XG5cbmV4cG9ydCBjb25zdCByZ2JVbml0ID0gcGlwZShcbiAgY2xhbXAoMCwgMjU1KSxcbiAgTWF0aC5yb3VuZFxuKTtcblxuY29uc3QgcmdiYVRlbXBsYXRlID0gKHsgcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEgPSAxIH0pID0+XG4gIGByZ2JhKCR7cmVkfSwgJHtncmVlbn0sICR7Ymx1ZX0sICR7YWxwaGF9KWA7XG5cbmV4cG9ydCBjb25zdCByZ2JhID0gcGlwZShcbiAgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMoe1xuICAgIHJlZDogcmdiVW5pdCxcbiAgICBncmVlbjogcmdiVW5pdCxcbiAgICBibHVlOiByZ2JVbml0LFxuICAgIGFscGhhXG4gIH0pLFxuICByZ2JhVGVtcGxhdGVcbik7XG5cbmNvbnN0IGhzbGFUZW1wbGF0ZSA9ICh7IGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBhbHBoYSA9IDEgfSkgPT5cbiAgYGhzbGEoJHtodWV9LCAke3NhdHVyYXRpb259LCAke2xpZ2h0bmVzc30sICR7YWxwaGF9KWA7XG5cbmV4cG9ydCBjb25zdCBoc2xhID0gcGlwZShcbiAgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMoe1xuICAgIGh1ZTogcGFyc2VJbnQsXG4gICAgc2F0dXJhdGlvbjogcGVyY2VudCxcbiAgICBsaWdodG5lc3M6IHBlcmNlbnQsXG4gICAgYWxwaGFcbiAgfSksXG4gIGhzbGFUZW1wbGF0ZVxuKTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yID0gKHYpID0+IHtcbiAgaWYgKHYuaGFzT3duUHJvcGVydHkoJ3JlZCcpKSB7XG4gICAgcmV0dXJuIHJnYmEodik7XG4gIH0gZWxzZSBpZiAodi5oYXNPd25Qcm9wZXJ0eSgnaHVlJykpIHtcbiAgICByZXR1cm4gaHNsYSh2KTtcbiAgfVxuICByZXR1cm4gdjtcbn07XG5cbmV4cG9ydCBjb25zdCBhbHBoYSA9IGNsYW1wKDAsIDEpO1xuXG5jb25zdCBibGVuZCA9IChmcm9tLCB0bywgdikgPT4ge1xuICBjb25zdCBmcm9tRXhwbyA9IGZyb20gKiBmcm9tO1xuICBjb25zdCB0b0V4cG8gPSB0byAqIHRvO1xuICByZXR1cm4gTWF0aC5zcXJ0KHYgKiAodG9FeHBvIC0gZnJvbUV4cG8pICsgZnJvbUV4cG8pO1xufTtcbi8vIGh0dHA6Ly9jb2RlcGVuLmlvL29zdWJsYWtlL3Blbi94R1ZWYU5cbmV4cG9ydCBjb25zdCBibGVuZENvbG9yID0gKGZyb20sIHRvKSA9PiB7XG4gIGNvbnN0IGZyb21Db2xvciA9IGlzU3RyaW5nKGZyb20pID8gcGFyc2VDb2xvcihmcm9tKSA6IGZyb207XG4gIGNvbnN0IHRvQ29sb3IgPSBpc1N0cmluZyh0bykgPyBwYXJzZUNvbG9yKHRvKTogdG87XG5cbiAgY29uc3QgYmxlbmRlZCA9IHsgLi4uZnJvbUNvbG9yIH07XG5cbiAgcmV0dXJuICh2KSA9PiB7XG4gICAgZm9yIChsZXQga2V5IGluIGJsZW5kZWQpIHtcbiAgICAgIGJsZW5kZWRba2V5XSA9IGJsZW5kKGZyb21Db2xvcltrZXldLCB0b0NvbG9yW2tleV0sIHYpO1xuICAgIH1cbiAgICBibGVuZGVkLnJlZCA9IGJsZW5kKGZyb21Db2xvci5yZWQsIHRvQ29sb3IucmVkLCB2KTtcbiAgICBibGVuZGVkLmdyZWVuID0gYmxlbmQoZnJvbUNvbG9yLmdyZWVuLCB0b0NvbG9yLmdyZWVuLCB2KTtcbiAgICBibGVuZGVkLmJsdWUgPSBibGVuZChmcm9tQ29sb3IuYmx1ZSwgdG9Db2xvci5ibHVlLCB2KTtcbiAgICBibGVuZGVkLmFscGhhID0gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZnJvbUNvbG9yLmFscGhhLCB0b0NvbG9yLmFscGhhLCB2KTtcbiAgICByZXR1cm4gYmxlbmRlZDtcbiAgfTtcbn07XG5cbi8vIEJlemllciByZXNvbHZlclxuLy8gUmVmYWN0b3JlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9odWdoc2svYmV6aWVyL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4vKipcbiMjIFRoZSBNSVQgTGljZW5zZSAoTUlUKSAjI1xuXG5Db3B5cmlnaHQgKGMpIDIwMTMgSHVnaCBLZW5uZWR5XG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cbiAqL1xuY29uc3QgcmVzb2x2ZTMgPSAocG9pbnRzKSA9PiAodCkgPT4ge1xuICBjb25zdCB1dCA9IDEgLSB0O1xuICByZXR1cm4gKHBvaW50c1swXSAqIHV0ICsgcG9pbnRzWzFdICogdCkgKiB1dCArIChwb2ludHNbMV0gKiB1dCArIHBvaW50c1syXSAqIHQpICogdDtcbn07XG5cbmNvbnN0IHJlc29sdmU0ID0gKHBvaW50cykgPT4gKHQpID0+IHtcbiAgY29uc3QgdXQgPSAxIC0gdDtcbiAgY29uc3QgYTEgPSBwb2ludHNbMV0gKiB1dCArIHBvaW50c1syXSAqIHQ7XG4gIHJldHVybiAoKHBvaW50c1swXSAqIHV0ICsgcG9pbnRzWzFdICogdCkgKiB1dCArIGExICogdCkgKiB1dCArIChhMSAqIHV0ICsgKHBvaW50c1syXSAqIHV0ICsgcG9pbnRzWzNdICogdCkgKiB0KSAqIHQ7XG59O1xuXG5leHBvcnQgY29uc3QgYmV6aWVyID0gKHBvaW50cykgPT5cbiAgKHBvaW50cy5sZW5ndGggPT09IDMpID8gcmVzb2x2ZTMocG9pbnRzKSA6IHJlc29sdmU0KHBvaW50cyk7XG4iXX0=

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _popmotion = __webpack_require__(9);

var popmotion = _interopRequireWildcard(_popmotion);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

window.popmotion = popmotion;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwuanMiXSwibmFtZXMiOlsicG9wbW90aW9uIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBOztJQUFZQSxTOzs7O0FBQ1pDLE9BQU9ELFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBvcG1vdGlvbiBmcm9tICcuL3BvcG1vdGlvbic7XG53aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuIl19

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzIzNTlmNWU4M2ZjNDA0MjkzMGY/ZThmNiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3V0aWxzLmpzP2FiOTUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZyYW1lc3luYy9saWIvaW5kZXguanM/ZDM4NCIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC5qcz84ZjAxIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcz9iODM5Iiwid2VicGFjazovLy8uL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzP2VlMDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy92YWx1ZS10eXBlcy5qcz9lZGE4Iiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuLmpzPzFjMDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9pbmRleC5qcz9jMDVlIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcz9iN2U2Iiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanM/ZGJlYiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2Vhc2luZy5qcz8xZjJmIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qcz8xMDBlIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BhcmFsbGVsLmpzPzY5NjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdmFsdWUuanM/OGU3MyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3BhcnNlcnMuanM/OTQ5NyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jaGFpbi5qcz9lMTAwIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2RlbGF5LmpzPzY4MTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvdmFsdWUtdHlwZXMuanM/YjBkOSIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy9wcmVmaXhlci5qcz8yZjBlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mcmFtZXN5bmMvbGliL29uLW5leHQtZnJhbWUuanM/ZjViMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2xpYi9jcmVhdGUtcmVuZGVyLXN0ZXAuanM/OGIyMiIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb2xvci10d2Vlbi5qcz85ODAxIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanM/ODFiMCIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzP2M4Y2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcG9pbnRlci5qcz9iN2YxIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3RvdWNoZXMuanM/ODYwNyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90cmFjay1vZmZzZXQuanM/M2FjYSIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9zdGFnZ2VyLmpzP2Y5NjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvc3ByaW5nLmpzP2U4MTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvaW5kZXguanM/ZTg2NSIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy9yZW5kZXIuanM/YmQ2OCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy9pbmRleC5qcz8xYTc1Iiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL2J1aWxkLmpzP2VmOGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmcvdmFsdWUtdHlwZXMuanM/YjYzZCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2luZGV4LmpzPzI3ZjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9idWlsZC5qcz9iYTlhIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFB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R0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSwyQ0FBMkMsY0FBYyxtbVQ7Ozs7Ozs7QUNsTXpEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsY0FBYyxtdUY7Ozs7Ozs7QUM5Q3pEOztBQUVBOztBQUVBOztBQUVBLHVDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUTtBQUNBLDJDQUEyQyxjQUFjLG1aIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwubWluLjcuOC4wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDcyMzU5ZjVlODNmYzQwNDI5MzBmIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuc3BsaXRDb2xvclZhbHVlcyA9IHNwbGl0Q29sb3JWYWx1ZXM7XG52YXIgdmFyVHlwZSA9IGZ1bmN0aW9uIHZhclR5cGUodmFyaWFibGUpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xufTtcblxudmFyIENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xudmFyIFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xuXG4vKlxuICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjYW1lbFRvRGFzaCA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSBmdW5jdGlvbiBjYW1lbFRvRGFzaChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBzZXRET01BdHRycyA9IGV4cG9ydHMuc2V0RE9NQXR0cnMgPSBmdW5jdGlvbiBzZXRET01BdHRycyhlbGVtZW50LCBhdHRycykge1xuICBmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG4gIH1cbn07XG4vKlxuICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgXCJmb28sYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdENvbW1hRGVsaW1pdGVkID0gZnVuY3Rpb24gc3BsaXRDb21tYURlbGltaXRlZCh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBhbnkgYXJndW1lbnQgZm9yIGB0ZXJtYFxuICogYGNvbnRhaW5zKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xudmFyIGNvbnRhaW5zID0gZXhwb3J0cy5jb250YWlucyA9IGZ1bmN0aW9uIGNvbnRhaW5zKHRlcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSAhPT0gLTE7XG4gIH07XG59O1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIHRvIHNlZSBpZiBhbiBhcmd1bWVudCBpc1xuICogIHRoZSBmaXJzdCBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBgdGVybWBcbiAqIGBpc0ZpcnN0Q2hhcnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG52YXIgaXNGaXJzdENoYXJzID0gZXhwb3J0cy5pc0ZpcnN0Q2hhcnMgPSBmdW5jdGlvbiBpc0ZpcnN0Q2hhcnModGVybSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pID09PSAwO1xuICB9O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSB1bml0IHZhbHVlIHR5cGVcbiAqL1xudmFyIGNyZWF0ZVVuaXRUeXBlID0gZXhwb3J0cy5jcmVhdGVVbml0VHlwZSA9IGZ1bmN0aW9uIGNyZWF0ZVVuaXRUeXBlKHR5cGUsIHRyYW5zZm9ybSkge1xuICByZXR1cm4ge1xuICAgIHRlc3Q6IGNvbnRhaW5zKHR5cGUpLFxuICAgIHBhcnNlOiBwYXJzZUZsb2F0LFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gIH07XG59O1xuXG4vKlxuICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcbiAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG52YXIgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBzcGxpdCBjb2xvclxuICogdmFsdWVzIGZyb20gc3RyaW5nIGludG8gYW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcbiAqIGBtYXBBcnJheVRvT2JqZWN0KFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXSkoJ3JnYmEoMCwwLDApJylgXG4gKi9cbmZ1bmN0aW9uIHNwbGl0Q29sb3JWYWx1ZXModGVybXMpIHtcbiAgdmFyIG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICB2YXIgdmFsdWVzQXJyYXkgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHYpKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgdmFsdWVzW3Rlcm1zW2ldXSA9IHZhbHVlc0FycmF5W2ldICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KHZhbHVlc0FycmF5W2ldKSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcbn1cblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID9cblxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xudmFyIGlzQXJyYXkgPSBleHBvcnRzLmlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuICByZXR1cm4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gP1xuXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG52YXIgaXNGdW5jID0gZXhwb3J0cy5pc0Z1bmMgPSBmdW5jdGlvbiBpc0Z1bmMob2JqKSB7XG4gIHJldHVybiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG5cbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbnZhciBpc051bSA9IGV4cG9ydHMuaXNOdW0gPSBmdW5jdGlvbiBpc051bShudW0pIHtcbiAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cblxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xudmFyIGlzT2JqID0gZXhwb3J0cy5pc09iaiA9IGZ1bmN0aW9uIGlzT2JqKG9iaikge1xuICByZXR1cm4gKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9iaikpID09PSAnb2JqZWN0Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIHN0cmluZyA/XG5cbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gaXNTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbnZhciBpc0hleCA9IGV4cG9ydHMuaXNIZXggPSBpc0ZpcnN0Q2hhcnMoJyMnKTtcbnZhciBpc1JnYiA9IGV4cG9ydHMuaXNSZ2IgPSBpc0ZpcnN0Q2hhcnMoJ3JnYicpO1xudmFyIGlzSHNsID0gZXhwb3J0cy5pc0hzbCA9IGlzRmlyc3RDaGFycygnaHNsJyk7XG52YXIgaXNDb2xvciA9IGV4cG9ydHMuaXNDb2xvciA9IGZ1bmN0aW9uIGlzQ29sb3Iodikge1xuICByZXR1cm4gaXNIZXgodikgfHwgaXNSZ2IodikgfHwgaXNIc2wodik7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZFhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2xzaWMzQnNhWFJEYjJ4dmNsWmhiSFZsY3lJc0luWmhjbFI1Y0dVaUxDSjJZWEpwWVdKc1pTSXNJazlpYW1WamRDSXNJbkJ5YjNSdmRIbHdaU0lzSW5SdlUzUnlhVzVuSWl3aVkyRnNiQ0lzSW5Oc2FXTmxJaXdpUTBGTlJVeGZRMEZUUlY5UVFWUlVSVkpPSWl3aVVrVlFURUZEUlY5VVJVMVFURUZVUlNJc0ltTmhiV1ZzVkc5RVlYTm9JaXdpYzNSeWFXNW5JaXdpY21Wd2JHRmpaU0lzSW5SdlRHOTNaWEpEWVhObElpd2ljMlYwUkU5TlFYUjBjbk1pTENKbGJHVnRaVzUwSWl3aVlYUjBjbk1pTENKclpYa2lMQ0pvWVhOUGQyNVFjbTl3WlhKMGVTSXNJbk5sZEVGMGRISnBZblYwWlNJc0luTndiR2wwUTI5dGJXRkVaV3hwYldsMFpXUWlMQ0oyWVd4MVpTSXNJbWx6VTNSeWFXNW5JaXdpYzNCc2FYUWlMQ0pqYjI1MFlXbHVjeUlzSW5SbGNtMGlMQ0oySWl3aWFXNWtaWGhQWmlJc0ltbHpSbWx5YzNSRGFHRnljeUlzSW1OeVpXRjBaVlZ1YVhSVWVYQmxJaXdpZEhsd1pTSXNJblJ5WVc1elptOXliU0lzSW5SbGMzUWlMQ0p3WVhKelpTSXNJbkJoY25ObFJteHZZWFFpTENKblpYUldZV3gxWlVaeWIyMUdkVzVqZEdsdmJsTjBjbWx1WnlJc0luTjFZbk4wY21sdVp5SXNJbXhoYzNSSmJtUmxlRTltSWl3aWRHVnliWE1pTENKdWRXMVVaWEp0Y3lJc0lteGxibWQwYUNJc0luWmhiSFZsY3lJc0luWmhiSFZsYzBGeWNtRjVJaXdpYVNJc0luVnVaR1ZtYVc1bFpDSXNJbWx6UVhKeVlYa2lMQ0poY25JaUxDSnBjMFoxYm1NaUxDSnZZbW9pTENKcGMwNTFiU0lzSW01MWJTSXNJbWx6VDJKcUlpd2ljM1J5SWl3aWFYTklaWGdpTENKcGMxSm5ZaUlzSW1selNITnNJaXdpYVhORGIyeHZjaUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzFGQmNVVm5Ra0VzWjBJc1IwRkJRVUVzWjBJN1FVRnlSV2hDTEVsQlFVMURMRlZCUVZVc1UwRkJWa0VzVDBGQlZTeERRVUZEUXl4UlFVRkVPMEZCUVVFc1UwRkJZME1zVDBGQlQwTXNVMEZCVUN4RFFVRnBRa01zVVVGQmFrSXNRMEZCTUVKRExFbEJRVEZDTEVOQlFTdENTaXhSUVVFdlFpeEZRVUY1UTBzc1MwRkJla01zUTBGQkswTXNRMEZCTDBNc1JVRkJhMFFzUTBGQlF5eERRVUZ1UkN4RFFVRmtPMEZCUVVFc1EwRkJhRUk3TzBGQlJVRXNTVUZCVFVNc2NVSkJRWEZDTEdsQ1FVRXpRanRCUVVOQkxFbEJRVTFETEcxQ1FVRnRRaXhQUVVGNlFqczdRVUZGUVRzN096czdPMEZCVFU4c1NVRkJUVU1zYjBOQlFXTXNVMEZCWkVFc1YwRkJZeXhEUVVGRFF5eE5RVUZFTzBGQlFVRXNVMEZCV1VFc1QwRkJUME1zVDBGQlVDeERRVUZsU2l4clFrRkJaaXhGUVVGdFEwTXNaMEpCUVc1RExFVkJRWEZFU1N4WFFVRnlSQ3hGUVVGYU8wRkJRVUVzUTBGQmNFSTdPMEZCUlVFc1NVRkJUVU1zYjBOQlFXTXNVMEZCWkVFc1YwRkJZeXhEUVVGRFF5eFBRVUZFTEVWQlFWVkRMRXRCUVZZc1JVRkJiMEk3UVVGRE4wTXNUMEZCU3l4SlFVRkpReXhIUVVGVUxFbEJRV2RDUkN4TFFVRm9RaXhGUVVGMVFqdEJRVU55UWl4UlFVRkpRU3hOUVVGTlJTeGpRVUZPTEVOQlFYRkNSQ3hIUVVGeVFpeERRVUZLTEVWQlFTdENPMEZCUXpkQ1JpeGpRVUZSU1N4WlFVRlNMRU5CUVhGQ1JpeEhRVUZ5UWl4RlFVRXdRa1FzVFVGQlRVTXNSMEZCVGl4RFFVRXhRanRCUVVORU8wRkJRMFk3UVVGRFJpeERRVTVOTzBGQlQxQTdPenM3T3pzN08wRkJVVThzU1VGQlRVY3NiMFJCUVhOQ0xGTkJRWFJDUVN4dFFrRkJjMElzUTBGQlEwTXNTMEZCUkR0QlFVRkJMRk5CUVZkRExGTkJRVk5FTEV0QlFWUXNTVUZCYTBKQkxFMUJRVTFGTEV0QlFVNHNRMEZCV1N4TlFVRmFMRU5CUVd4Q0xFZEJRWGRETEVOQlFVTkdMRXRCUVVRc1EwRkJia1E3UVVGQlFTeERRVUUxUWpzN1FVRkZVRHM3T3p0QlFVbFBMRWxCUVUxSExEaENRVUZYTEZOQlFWaEJMRkZCUVZjc1EwRkJRME1zU1VGQlJEdEJRVUZCTEZOQlFWVXNWVUZCUTBNc1EwRkJSQ3hGUVVGUE8wRkJRM1pETEZkQlFWRktMRk5CUVZOSExFbEJRVlFzUzBGQmEwSkRMRVZCUVVWRExFOUJRVVlzUTBGQlZVWXNTVUZCVml4TlFVRnZRaXhEUVVGRExFTkJRUzlETzBGQlEwUXNSMEZHZFVJN1FVRkJRU3hEUVVGcVFqczdRVUZKVURzN096czdRVUZMVHl4SlFVRk5SeXh6UTBGQlpTeFRRVUZtUVN4WlFVRmxMRU5CUVVOSUxFbEJRVVE3UVVGQlFTeFRRVUZWTEZWQlFVTkRMRU5CUVVRc1JVRkJUenRCUVVNelF5eFhRVUZSU2l4VFFVRlRSeXhKUVVGVUxFdEJRV3RDUXl4RlFVRkZReXhQUVVGR0xFTkJRVlZHTEVsQlFWWXNUVUZCYjBJc1EwRkJPVU03UVVGRFJDeEhRVVl5UWp0QlFVRkJMRU5CUVhKQ096dEJRVWxRT3pzN1FVRkhUeXhKUVVGTlNTd3dRMEZCYVVJc1UwRkJha0pCTEdOQlFXbENMRU5CUVVORExFbEJRVVFzUlVGQlQwTXNVMEZCVUN4RlFVRnhRanRCUVVOcVJDeFRRVUZQTzBGQlEweERMRlZCUVUxU0xGTkJRVk5OTEVsQlFWUXNRMEZFUkR0QlFVVk1SeXhYUVVGUFF5eFZRVVpHTzBGQlIweElPMEZCU0Vzc1IwRkJVRHRCUVV0RUxFTkJUazA3TzBGQlVWQTdPenM3UVVGSlR5eEpRVUZOU1N4clJVRkJOa0lzVTBGQk4wSkJMREJDUVVFMlFpeERRVUZEWkN4TFFVRkVPMEZCUVVFc1UwRkJWMEVzVFVGQlRXVXNVMEZCVGl4RFFVRm5RbVlzVFVGQlRVMHNUMEZCVGl4RFFVRmpMRWRCUVdRc1NVRkJjVUlzUTBGQmNrTXNSVUZCZDBOT0xFMUJRVTFuUWl4WFFVRk9MRU5CUVd0Q0xFZEJRV3hDTEVOQlFYaERMRU5CUVZnN1FVRkJRU3hEUVVGdVF6czdRVUZGVURzN096czdRVUZMVHl4VFFVRlRja01zWjBKQlFWUXNRMEZCTUVKelF5eExRVUV4UWl4RlFVRnBRenRCUVVOMFF5eE5RVUZOUXl4WFFVRlhSQ3hOUVVGTlJTeE5RVUYyUWpzN1FVRkZRU3hUUVVGUExGVkJRVlZrTEVOQlFWWXNSVUZCWVR0QlFVTnNRaXhSUVVGTlpTeFRRVUZUTEVWQlFXWTdRVUZEUVN4UlFVRk5ReXhqUVVGamRFSXNiMEpCUVc5Q1pTd3lRa0ZCTWtKVUxFTkJRVE5DTEVOQlFYQkNMRU5CUVhCQ096dEJRVVZCTEZOQlFVc3NTVUZCU1dsQ0xFbEJRVWtzUTBGQllpeEZRVUZuUWtFc1NVRkJTVW9zVVVGQmNFSXNSVUZCT0VKSkxFZEJRVGxDTEVWQlFXMURPMEZCUTJwRFJpeGhRVUZQU0N4TlFVRk5TeXhEUVVGT0xFTkJRVkFzU1VGQmIwSkVMRmxCUVZsRExFTkJRVm9zVFVGQmJVSkRMRk5CUVhCQ0xFZEJRV2xEVml4WFFVRlhVU3haUVVGWlF5eERRVUZhTEVOQlFWZ3NRMEZCYWtNc1IwRkJPRVFzUTBGQmFrWTdRVUZEUkRzN1FVRkZSQ3hYUVVGUFJpeE5RVUZRTzBGQlEwUXNSMEZVUkR0QlFWVkVPenRCUVVWRU96czdPenM3UVVGTlR5eEpRVUZOU1N3MFFrRkJWU3hUUVVGV1FTeFBRVUZWTEVOQlFVTkRMRWRCUVVRN1FVRkJRU3hUUVVGVE4wTXNVVUZCVVRaRExFZEJRVklzVFVGQmFVSXNUMEZCTVVJN1FVRkJRU3hEUVVGb1FqczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVU1zTUVKQlFWTXNVMEZCVkVFc1RVRkJVeXhEUVVGRFF5eEhRVUZFTzBGQlFVRXNVMEZCVXk5RExGRkJRVkVyUXl4SFFVRlNMRTFCUVdsQ0xGVkJRVEZDTzBGQlFVRXNRMEZCWmpzN1FVRkZVRHM3T3pzN08wRkJUVThzU1VGQlRVTXNkMEpCUVZFc1UwRkJVa0VzUzBGQlVTeERRVUZEUXl4SFFVRkVPMEZCUVVFc1UwRkJVeXhQUVVGUFFTeEhRVUZRTEV0QlFXVXNVVUZCZUVJN1FVRkJRU3hEUVVGa096dEJRVVZRT3pzN096czdRVUZOVHl4SlFVRk5ReXgzUWtGQlVTeFRRVUZTUVN4TFFVRlJMRU5CUVVOSUxFZEJRVVE3UVVGQlFTeFRRVUZUTEZGQlFVOUJMRWRCUVZBc2VVTkJRVTlCTEVkQlFWQXNUMEZCWlN4UlFVRjRRanRCUVVGQkxFTkJRV1E3TzBGQlJWQTdPenM3T3p0QlFVMVBMRWxCUVUweFFpdzRRa0ZCVnl4VFFVRllRU3hSUVVGWExFTkJRVU00UWl4SFFVRkVPMEZCUVVFc1UwRkJVeXhQUVVGUFFTeEhRVUZRTEV0QlFXVXNVVUZCZUVJN1FVRkJRU3hEUVVGcVFqczdRVUZGUVN4SlFVRk5ReXgzUWtGQlVYcENMR0ZCUVdFc1IwRkJZaXhEUVVGa08wRkJRMEVzU1VGQlRUQkNMSGRDUVVGUk1VSXNZVUZCWVN4TFFVRmlMRU5CUVdRN1FVRkRRU3hKUVVGTk1rSXNkMEpCUVZFelFpeGhRVUZoTEV0QlFXSXNRMEZCWkR0QlFVTkJMRWxCUVUwMFFpdzBRa0ZCVlN4VFFVRldRU3hQUVVGVkxFTkJRVU01UWl4RFFVRkVPMEZCUVVFc1UwRkJVVEpDTEUxQlFVMHpRaXhEUVVGT0xFdEJRVmswUWl4TlFVRk5OVUlzUTBGQlRpeERRVUZhTEVsQlFYZENOa0lzVFVGQlRUZENMRU5CUVU0c1EwRkJhRU03UVVGQlFTeERRVUZvUWlJc0ltWnBiR1VpT2lKMWRHbHNjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbU52Ym5OMElIWmhjbFI1Y0dVZ1BTQW9kbUZ5YVdGaWJHVXBJRDArSUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1ZEc5VGRISnBibWN1WTJGc2JDaDJZWEpwWVdKc1pTa3VjMnhwWTJVb09Dd2dMVEVwTzF4dVhHNWpiMjV6ZENCRFFVMUZURjlEUVZORlgxQkJWRlJGVWs0Z1BTQXZLRnRoTFhwZEtTaGJRUzFhWFNrdlp6dGNibU52Ym5OMElGSkZVRXhCUTBWZlZFVk5VRXhCVkVVZ1BTQW5KREV0SkRJbk8xeHVYRzR2S2x4dUlDQkRiMjUyWlhKMElHTmhiV1ZzUTJGelpTQjBieUJrWVhOb0xXTmhjMlZjYmx4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpZVzFsYkZSdlJHRnphQ0E5SUNoemRISnBibWNwSUQwK0lITjBjbWx1Wnk1eVpYQnNZV05sS0VOQlRVVk1YME5CVTBWZlVFRlVWRVZTVGl3Z1VrVlFURUZEUlY5VVJVMVFURUZVUlNrdWRHOU1iM2RsY2tOaGMyVW9LVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSE5sZEVSUFRVRjBkSEp6SUQwZ0tHVnNaVzFsYm5Rc0lHRjBkSEp6S1NBOVBpQjdYRzRnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJoZEhSeWN5a2dlMXh1SUNBZ0lHbG1JQ2hoZEhSeWN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0JsYkdWdFpXNTBMbk5sZEVGMGRISnBZblYwWlNoclpYa3NJR0YwZEhKelcydGxlVjBwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVmVHRjYmk4cVhHNGdJRk53YkdsMElHTnZiVzFoTFdSbGJHbHRhWFJsWkNCemRISnBibWRjYmx4dUlDQmNJbVp2Ynl4aVlYSmNJaUF0UGlCYlhDSm1iMjljSWl3Z1hDSmlZWEpjSWwxY2JseHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnUUhKbGRIVnliaUJiWVhKeVlYbGRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE53YkdsMFEyOXRiV0ZFWld4cGJXbDBaV1FnUFNBb2RtRnNkV1VwSUQwK0lHbHpVM1J5YVc1bktIWmhiSFZsS1NBL0lIWmhiSFZsTG5Od2JHbDBLQzhzWEZ4ektpOHBJRG9nVzNaaGJIVmxYVHRjYmx4dUx5b3FYRzRnS2lBZ1VtVjBkWEp1Y3lCaElHWjFibU4wYVc5dUlIUm9ZWFFnZDJsc2JDQmphR1ZqYXlCaGJua2dZWEpuZFcxbGJuUWdabTl5SUdCMFpYSnRZRnh1SUNvZ1lHTnZiblJoYVc1ektDZHVaV1ZrYkdVbktTZ25hR0Y1YzNSaFkyc25LV0JjYmlBcUwxeHVaWGh3YjNKMElHTnZibk4wSUdOdmJuUmhhVzV6SUQwZ0tIUmxjbTBwSUQwK0lDaDJLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQW9hWE5UZEhKcGJtY29kR1Z5YlNrZ0ppWWdkaTVwYm1SbGVFOW1LSFJsY20wcElDRTlQU0F0TVNrN1hHNTlPMXh1WEc0dktpcGNiaUFxSUNCU1pYUjFjbTV6SUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ0IzYVd4c0lHTm9aV05ySUhSdklITmxaU0JwWmlCaGJpQmhjbWQxYldWdWRDQnBjMXh1SUNvZ0lIUm9aU0JtYVhKemRDQmphR0Z5WVdOMFpYSnpJR2x1SUhSb1pTQndjbTkyYVdSbFpDQmdkR1Z5YldCY2JpQXFJR0JwYzBacGNuTjBRMmhoY25Nb0oyNWxaV1JzWlNjcEtDZG9ZWGx6ZEdGamF5Y3BZRnh1SUNvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOR2FYSnpkRU5vWVhKeklEMGdLSFJsY20wcElEMCtJQ2gyS1NBOVBpQjdYRzRnSUhKbGRIVnliaUFvYVhOVGRISnBibWNvZEdWeWJTa2dKaVlnZGk1cGJtUmxlRTltS0hSbGNtMHBJRDA5UFNBd0tUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1EzSmxZWFJsSUdFZ2RXNXBkQ0IyWVd4MVpTQjBlWEJsWEc0Z0tpOWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZWYm1sMFZIbHdaU0E5SUNoMGVYQmxMQ0IwY21GdWMyWnZjbTBwSUQwK0lIdGNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQjBaWE4wT2lCamIyNTBZV2x1Y3loMGVYQmxLU3hjYmlBZ0lDQndZWEp6WlRvZ2NHRnljMlZHYkc5aGRDeGNiaUFnSUNCMGNtRnVjMlp2Y20xY2JpQWdmVHRjYm4wN1hHNWNiaThxWEc0Z0lFZGxkQ0IyWVd4MVpTQm1jbTl0SUdaMWJtTjBhVzl1SUhOMGNtbHVaMXh1SUNCY0luUnlZVzV6YkdGMFpWZ29NakJ3ZUNsY0lpQXRQaUJjSWpJd2NIaGNJbHh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSV1lXeDFaVVp5YjIxR2RXNWpkR2x2YmxOMGNtbHVaeUE5SUNoMllXeDFaU2tnUFQ0Z2RtRnNkV1V1YzNWaWMzUnlhVzVuS0haaGJIVmxMbWx1WkdWNFQyWW9KeWduS1NBcklERXNJSFpoYkhWbExteGhjM1JKYm1SbGVFOW1LQ2NwSnlrcE8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpYTWdZU0JtZFc1amRHbHZiaUIwYUdGMElIZHBiR3dnYzNCc2FYUWdZMjlzYjNKY2JpQXFJSFpoYkhWbGN5Qm1jbTl0SUhOMGNtbHVaeUJwYm5SdklHRnVJRzlpYW1WamRDQnZaaUJ3Y205d1pYSjBhV1Z6WEc0Z0tpQmdiV0Z3UVhKeVlYbFViMDlpYW1WamRDaGJKM0psWkNjc0lDZG5jbVZsYmljc0lDZGliSFZsSjEwcEtDZHlaMkpoS0RBc01Dd3dLU2NwWUZ4dUlDb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdjM0JzYVhSRGIyeHZjbFpoYkhWbGN5aDBaWEp0Y3lrZ2UxeHVJQ0JqYjI1emRDQnVkVzFVWlhKdGN5QTlJSFJsY20xekxteGxibWQwYUR0Y2JseHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdLSFlwSUh0Y2JpQWdJQ0JqYjI1emRDQjJZV3gxWlhNZ1BTQjdmVHRjYmlBZ0lDQmpiMjV6ZENCMllXeDFaWE5CY25KaGVTQTlJSE53YkdsMFEyOXRiV0ZFWld4cGJXbDBaV1FvWjJWMFZtRnNkV1ZHY205dFJuVnVZM1JwYjI1VGRISnBibWNvZGlrcE8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFVWlhKdGN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNCMllXeDFaWE5iZEdWeWJYTmJhVjFkSUQwZ0tIWmhiSFZsYzBGeWNtRjVXMmxkSUNFOVBTQjFibVJsWm1sdVpXUXBJRDhnY0dGeWMyVkdiRzloZENoMllXeDFaWE5CY25KaGVWdHBYU2tnT2lBeE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIyWVd4MVpYTTdYRzRnSUgwN1hHNTlYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaGJpQmhjbkpoZVNBL1hHNWNiaUFnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZFhScGJITXVkbUZ5Vkhsd1pTQTlQVDBnSjBGeWNtRjVKMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzBGeWNtRjVJRDBnS0dGeWNpa2dQVDRnZG1GeVZIbHdaU2hoY25JcElEMDlQU0FuUVhKeVlYa25PMXh1WEc0dktseHVJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lTQm1kVzVqZEdsdmJpQS9YRzVjYmlBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RYUnBiSE11ZG1GeVZIbHdaU0E5UFQwZ0owWjFibU4wYVc5dUoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMFoxYm1NZ1BTQW9iMkpxS1NBOVBpQjJZWEpVZVhCbEtHOWlhaWtnUFQwOUlDZEdkVzVqZEdsdmJpYzdYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaElHNTFiV0psY2o5Y2JseHVJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIwZVhCbGIyWWdQVDA5SUNkdWRXMWlaWEluWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselRuVnRJRDBnS0c1MWJTa2dQVDRnZEhsd1pXOW1JRzUxYlNBOVBUMGdKMjUxYldKbGNpYzdYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaGJpQnZZbXBsWTNRL1hHNWNiaUFnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZEhsd1pXOW1JRDA5UFNBbmIySnFaV04wSjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwOWlhaUE5SUNodlltb3BJRDArSUhSNWNHVnZaaUJ2WW1vZ1BUMDlJQ2R2WW1wbFkzUW5PMXh1WEc0dktseHVJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lTQnpkSEpwYm1jZ1AxeHVYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUJ6ZEhJZ1BUMDlJQ2R6ZEhKcGJtY25YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VTNSeWFXNW5JRDBnS0hOMGNpa2dQVDRnZEhsd1pXOW1JSE4wY2lBOVBUMGdKM04wY21sdVp5YzdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnBjMGhsZUNBOUlHbHpSbWx5YzNSRGFHRnljeWduSXljcE8xeHVaWGh3YjNKMElHTnZibk4wSUdselVtZGlJRDBnYVhOR2FYSnpkRU5vWVhKektDZHlaMkluS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzBoemJDQTlJR2x6Um1seWMzUkRhR0Z5Y3lnbmFITnNKeWs3WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5EYjJ4dmNpQTlJQ2gyS1NBOVBpQW9hWE5JWlhnb2Rpa2dmSHdnYVhOU1oySW9kaWtnZkh3Z2FYTkljMndvZGlrcE8xeHVJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgb25fbmV4dF9mcmFtZV8xID0gcmVxdWlyZShcIi4vb24tbmV4dC1mcmFtZVwiKTtcbnZhciBjcmVhdGVfcmVuZGVyX3N0ZXBfMSA9IHJlcXVpcmUoXCIuL2NyZWF0ZS1yZW5kZXItc3RlcFwiKTtcbnZhciBIQVNfUEVSRk9STUFOQ0VfTk9XID0gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KTtcbmV4cG9ydHMuY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7IH0gOiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgfTtcbnZhciB3aWxsUmVuZGVyTmV4dEZyYW1lID0gZmFsc2U7XG52YXIgTUFYX0VMQVBTRUQgPSAyMDtcbnZhciBjdXJyZW50RnJhbWVzdGFtcCA9IGV4cG9ydHMuY3VycmVudFRpbWUoKTtcbnZhciBlbGFwc2VkID0gMDtcbnZhciBkaWxhdGlvbiA9IDE7XG5mdW5jdGlvbiBzdGFydFJlbmRlckxvb3AoKSB7XG4gICAgaWYgKCF3aWxsUmVuZGVyTmV4dEZyYW1lKSB7XG4gICAgICAgIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSB0cnVlO1xuICAgICAgICBvbl9uZXh0X2ZyYW1lXzEuZGVmYXVsdChwcm9jZXNzRnJhbWUpO1xuICAgIH1cbn1cbnZhciBmcmFtZVN0YXJ0ID0gY3JlYXRlX3JlbmRlcl9zdGVwXzEuZGVmYXVsdChzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lVXBkYXRlID0gY3JlYXRlX3JlbmRlcl9zdGVwXzEuZGVmYXVsdChzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lUmVuZGVyID0gY3JlYXRlX3JlbmRlcl9zdGVwXzEuZGVmYXVsdChzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lRW5kID0gY3JlYXRlX3JlbmRlcl9zdGVwXzEuZGVmYXVsdChzdGFydFJlbmRlckxvb3ApO1xuZnVuY3Rpb24gcHJvY2Vzc0ZyYW1lKGZyYW1lc3RhbXApIHtcbiAgICB3aWxsUmVuZGVyTmV4dEZyYW1lID0gZmFsc2U7XG4gICAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50RnJhbWVzdGFtcCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICAgIGN1cnJlbnRGcmFtZXN0YW1wID0gZnJhbWVzdGFtcDtcbiAgICBmcmFtZVN0YXJ0LnByb2Nlc3MoKTtcbiAgICBmcmFtZVVwZGF0ZS5wcm9jZXNzKCk7XG4gICAgZnJhbWVSZW5kZXIucHJvY2VzcygpO1xuICAgIGZyYW1lRW5kLnByb2Nlc3MoKTtcbn1cbmV4cG9ydHMub25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5zY2hlZHVsZTtcbmV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLnNjaGVkdWxlO1xuZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuc2NoZWR1bGU7XG5leHBvcnRzLm9uRnJhbWVFbmQgPSBmcmFtZUVuZC5zY2hlZHVsZTtcbmV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5jYW5jZWw7XG5leHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5jYW5jZWw7XG5leHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5jYW5jZWw7XG5leHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBmcmFtZUVuZC5jYW5jZWw7XG5leHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVsYXBzZWQ7IH07XG5leHBvcnRzLmN1cnJlbnRGcmFtZVRpbWUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjdXJyZW50RnJhbWVzdGFtcDsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZyYW1lc3luYy9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnZnJhbWVzeW5jJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gbGF3c3VpdCAtIHNvcnJ5XG4gIGZ1bmN0aW9uIEFjdGlvbigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgdGhpcy5zY2hlZHVsZWRVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5sYXN0VXBkYXRlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcbiAgICAgIF90aGlzLnByZXYgPSBfdGhpcy5jdXJyZW50O1xuXG4gICAgICB2YXIgX3Byb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25VcGRhdGUgPSBfcHJvcHMub25VcGRhdGUsXG4gICAgICAgICAgcGFzc2l2ZSA9IF9wcm9wcy5wYXNzaXZlO1xuXG5cbiAgICAgIGlmIChfdGhpcy51cGRhdGUpIHtcbiAgICAgICAgX3RoaXMuY3VycmVudCA9IF90aGlzLnVwZGF0ZShfdGhpcy5jdXJyZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uVXBkYXRlKSB7XG4gICAgICAgIGlmIChvblVwZGF0ZS5yZWdpc3RlckFjdGlvbikge1xuICAgICAgICAgIG9uVXBkYXRlLnNldChfdGhpcy5nZXQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb25VcGRhdGUoX3RoaXMuZ2V0KCksIF90aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfdGhpcy5maXJlTGlzdGVuZXJzKCk7XG5cbiAgICAgIGlmICghcGFzc2l2ZSAmJiBfdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkoX3RoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLmlzQWN0aW9uQ29tcGxldGUgJiYgX3RoaXMuaXNBY3Rpb25Db21wbGV0ZSgpKSB7XG4gICAgICAgIF90aGlzLmNvbXBsZXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9O1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyk7XG5cbiAgICB0aGlzLnNldFByb3BzKHByb3BzKTtcblxuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSAwO1xuICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudCA9IHByb3BzLmN1cnJlbnQgfHwgcHJvcHMuZnJvbSB8fCAwO1xuICB9XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25TdGFydCA9IF9wcm9wczIub25TdGFydCxcbiAgICAgICAgX29uU3RhcnQgPSBfcHJvcHMyLl9vblN0YXJ0LFxuICAgICAgICBwYXNzaXZlID0gX3Byb3BzMi5wYXNzaXZlO1xuXG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB0aGlzLm9uU3RhcnQoKTtcbiAgICBpZiAob25TdGFydCkgb25TdGFydCh0aGlzKTtcbiAgICBpZiAoX29uU3RhcnQpIF9vblN0YXJ0KHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uU3RvcCA9IF9wcm9wczMub25TdG9wLFxuICAgICAgICBfb25TdG9wID0gX3Byb3BzMy5fb25TdG9wLFxuICAgICAgICBwYXNzaXZlID0gX3Byb3BzMy5wYXNzaXZlO1xuXG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdG9wKSB0aGlzLm9uU3RvcCgpO1xuICAgIGlmIChvblN0b3ApIG9uU3RvcCh0aGlzKTtcbiAgICBpZiAoX29uU3RvcCkgX29uU3RvcCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uQ29tcGxldGUgPSBfcHJvcHM0Lm9uQ29tcGxldGUsXG4gICAgICAgIF9vbkNvbXBsZXRlID0gX3Byb3BzNC5fb25Db21wbGV0ZTtcblxuXG4gICAgdGhpcy5zdG9wKCk7XG5cbiAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSh0aGlzKTtcbiAgICBpZiAoX29uQ29tcGxldGUpIF9vbkNvbXBsZXRlKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zZXRQcm9wcyA9IGZ1bmN0aW9uIHNldFByb3BzKF9yZWYpIHtcbiAgICB2YXIgb25VcGRhdGUgPSBfcmVmLm9uVXBkYXRlLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ29uVXBkYXRlJ10pO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCBwcm9wcyk7XG5cbiAgICBpZiAob25VcGRhdGUpIHRoaXMub3V0cHV0KG9uVXBkYXRlKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUub3V0cHV0ID0gZnVuY3Rpb24gb3V0cHV0KGZ1bmMpIHtcbiAgICB0aGlzLnByb3BzLm9uVXBkYXRlID0gZnVuYztcbiAgICBpZiAoZnVuYy5yZWdpc3RlckFjdGlvbikgZnVuYy5yZWdpc3RlckFjdGlvbih0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KCkge1xuICAgIHZhciB0cmFuc2Zvcm0gPSB0aGlzLnByb3BzLnRyYW5zZm9ybTtcblxuICAgIHJldHVybiB0cmFuc2Zvcm0gPyB0cmFuc2Zvcm0odGhpcy5jdXJyZW50KSA6IHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldEJlZm9yZVRyYW5zZm9ybSA9IGZ1bmN0aW9uIGdldEJlZm9yZVRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHYpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0UHJvcCA9IGZ1bmN0aW9uIGdldFByb3Aoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHNba2V5XTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5zcGVlZFBlclNlY29uZCkodGhpcy5jdXJyZW50IC0gdGhpcy5wcmV2LCB0aGlzLmxhc3RVcGRhdGVkKTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycyB8fCBbXTtcbiAgICB0aGlzLm51bUxpc3RlbmVycyA9IHRoaXMubnVtTGlzdGVuZXJzIHx8IDA7XG4gICAgaWYgKHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpID09PSAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycysrO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gdW5zdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICB2YXIgbGlzdGVuZXJJbmRleCA9IHRoaXMubGlzdGVuZXJzID8gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgOiAtMTtcbiAgICBpZiAobGlzdGVuZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzLS07XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UobGlzdGVuZXJJbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZmlyZUxpc3RlbmVycyA9IGZ1bmN0aW9uIGZpcmVMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmdldCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1MaXN0ZW5lcnM7IGkrKykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbaV0oY3VycmVudCwgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBBY3Rpb247XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSWtGamRHbHZiaUlzSW5CeWIzQnpJaXdpYzJOb1pXUjFiR1ZrVlhCa1lYUmxJaXdpYkdGemRGVndaR0YwWldRaUxDSndjbVYySWl3aVkzVnljbVZ1ZENJc0ltOXVWWEJrWVhSbElpd2ljR0Z6YzJsMlpTSXNJblZ3WkdGMFpTSXNJbkpsWjJsemRHVnlRV04wYVc5dUlpd2ljMlYwSWl3aVoyVjBJaXdpWm1seVpVeHBjM1JsYm1WeWN5SXNJbDlwYzBGamRHbDJaU0lzSW1selFXTjBhVzl1UTI5dGNHeGxkR1VpTENKamIyMXdiR1YwWlNJc0ltTnZibk4wY25WamRHOXlJaXdpWkdWbVlYVnNkRkJ5YjNCeklpd2ljMlYwVUhKdmNITWlMQ0ptY205dElpd2ljM1JoY25RaUxDSnZibE4wWVhKMElpd2lYMjl1VTNSaGNuUWlMQ0p6ZEc5d0lpd2liMjVUZEc5d0lpd2lYMjl1VTNSdmNDSXNJbTl1UTI5dGNHeGxkR1VpTENKZmIyNURiMjF3YkdWMFpTSXNJbTkxZEhCMWRDSXNJbVoxYm1NaUxDSjBjbUZ1YzJadmNtMGlMQ0puWlhSQ1pXWnZjbVZVY21GdWMyWnZjbTBpTENKMklpd2laMlYwVUhKdmNDSXNJbXRsZVNJc0ltZGxkRlpsYkc5amFYUjVJaXdpYVhOQlkzUnBkbVVpTENKemRXSnpZM0pwWW1VaUxDSnNhWE4wWlc1bGNpSXNJbXhwYzNSbGJtVnljeUlzSW01MWJVeHBjM1JsYm1WeWN5SXNJbWx1WkdWNFQyWWlMQ0p3ZFhOb0lpd2lkVzV6ZFdKelkzSnBZbVVpTENKc2FYTjBaVzVsY2tsdVpHVjRJaXdpYzNCc2FXTmxJaXdpYVNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3TzBGQlEwRTdPenM3T3p0SlFVVk5RU3hOTzBGQlFWTTdRVUZEWWl4dlFrRkJkMEk3UVVGQlFUczdRVUZCUVN4UlFVRmFReXhMUVVGWkxIVkZRVUZLTEVWQlFVazdPMEZCUVVFN08wRkJRVUVzVTBGeFJIaENReXhsUVhKRWQwSXNSMEZ4UkU0c1dVRkJUVHRCUVVOMFFpeFpRVUZMUXl4WFFVRk1MRWRCUVcxQ0xHOURRVUZ1UWp0QlFVTkJMRmxCUVV0RExFbEJRVXdzUjBGQldTeE5RVUZMUXl4UFFVRnFRanM3UVVGR2MwSXNiVUpCU1ZFc1RVRkJTMG9zUzBGS1lqdEJRVUZCTEZWQlNXUkxMRkZCU21Nc1ZVRkpaRUVzVVVGS1l6dEJRVUZCTEZWQlNVcERMRTlCU2trc1ZVRkpTa0VzVDBGS1NUczdPMEZCVFhSQ0xGVkJRVWtzVFVGQlMwTXNUVUZCVkN4RlFVRnBRanRCUVVObUxHTkJRVXRJTEU5QlFVd3NSMEZCWlN4TlFVRkxSeXhOUVVGTUxFTkJRVmtzVFVGQlMwZ3NUMEZCYWtJc1EwRkJaanRCUVVORU96dEJRVVZFTEZWQlFVbERMRkZCUVVvc1JVRkJZenRCUVVOYUxGbEJRVWxCTEZOQlFWTkhMR05CUVdJc1JVRkJOa0k3UVVGRE0wSklMRzFDUVVGVFNTeEhRVUZVTEVOQlFXRXNUVUZCUzBNc1IwRkJUQ3hGUVVGaU8wRkJRMFFzVTBGR1JDeE5RVVZQTzBGQlEweE1MRzFDUVVGVExFMUJRVXRMTEVkQlFVd3NSVUZCVkR0QlFVTkVPMEZCUTBZN08wRkJSVVFzV1VGQlMwTXNZVUZCVERzN1FVRkZRU3hWUVVGSkxFTkJRVU5NTEU5QlFVUXNTVUZCV1N4TlFVRkxUU3hUUVVGeVFpeEZRVUZuUXp0QlFVTTVRaXh6UTBGQll5eE5RVUZMV0N4bFFVRnVRanRCUVVORU96dEJRVVZFTEZWQlFVa3NUVUZCUzFrc1owSkJRVXdzU1VGQmVVSXNUVUZCUzBFc1owSkJRVXdzUlVGQk4wSXNSVUZCYzBRN1FVRkRjRVFzWTBGQlMwTXNVVUZCVER0QlFVTkVPenRCUVVWRU8wRkJRMFFzUzBGc1JuVkNPenRCUVVOMFFpeFRRVUZMWkN4TFFVRk1MR2RDUVVOTExFdEJRVXRsTEZkQlFVd3NRMEZCYVVKRExGbEJSSFJDT3p0QlFVbEJMRk5CUVV0RExGRkJRVXdzUTBGQlkycENMRXRCUVdRN08wRkJSVUVzVTBGQlMwVXNWMEZCVEN4SFFVRnRRaXhEUVVGdVFqdEJRVU5CTEZOQlFVdERMRWxCUVV3c1IwRkJXU3hMUVVGTFF5eFBRVUZNTEVkQlFXVktMRTFCUVUxSkxFOUJRVTRzU1VGQmFVSktMRTFCUVUxclFpeEpRVUYyUWl4SlFVRXJRaXhEUVVFeFJEdEJRVU5FT3p0dFFrRkZSRU1zU3l4dlFrRkJVVHRCUVVGQkxHdENRVU5wUXl4TFFVRkxia0lzUzBGRWRFTTdRVUZCUVN4UlFVTkZiMElzVDBGRVJpeFhRVU5GUVN4UFFVUkdPMEZCUVVFc1VVRkRWME1zVVVGRVdDeFhRVU5YUVN4UlFVUllPMEZCUVVFc1VVRkRjVUptTEU5QlJISkNMRmRCUTNGQ1FTeFBRVVJ5UWpzN08wRkJSMDRzVVVGQlNTeERRVUZEUVN4UFFVRk1MRVZCUVdNN1FVRkRXaXhYUVVGTFRTeFRRVUZNTEVkQlFXbENMRWxCUVdwQ08wRkJRMEVzYjBOQlFXTXNTMEZCUzFnc1pVRkJia0k3UVVGRFJEczdRVUZGUkN4UlFVRkpMRXRCUVV0dFFpeFBRVUZVTEVWQlFXdENMRXRCUVV0QkxFOUJRVXc3UVVGRGJFSXNVVUZCU1VFc1QwRkJTaXhGUVVGaFFTeFJRVUZSTEVsQlFWSTdRVUZEWWl4UlFVRkpReXhSUVVGS0xFVkJRV05CTEZOQlFWTXNTVUZCVkRzN1FVRkZaQ3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJFTXNTU3h0UWtGQlR6dEJRVUZCTEd0Q1FVTm5ReXhMUVVGTGRFSXNTMEZFY2tNN1FVRkJRU3hSUVVOSGRVSXNUVUZFU0N4WFFVTkhRU3hOUVVSSU8wRkJRVUVzVVVGRFYwTXNUMEZFV0N4WFFVTlhRU3hQUVVSWU8wRkJRVUVzVVVGRGIwSnNRaXhQUVVSd1FpeFhRVU52UWtFc1QwRkVjRUk3T3p0QlFVZE1MRkZCUVVrc1EwRkJRMEVzVDBGQlRDeEZRVUZqTzBGQlExb3NWMEZCUzAwc1UwRkJUQ3hIUVVGcFFpeExRVUZxUWp0QlFVTkJMREJEUVVGdlFpeExRVUZMV0N4bFFVRjZRanRCUVVORU96dEJRVVZFTEZGQlFVa3NTMEZCUzNOQ0xFMUJRVlFzUlVGQmFVSXNTMEZCUzBFc1RVRkJURHRCUVVOcVFpeFJRVUZKUVN4TlFVRktMRVZCUVZsQkxFOUJRVThzU1VGQlVEdEJRVU5hTEZGQlFVbERMRTlCUVVvc1JVRkJZVUVzVVVGQlVTeEpRVUZTT3p0QlFVVmlMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMjFDUVVWRVZpeFJMSFZDUVVGWE8wRkJRVUVzYTBKQlF6SkNMRXRCUVV0a0xFdEJSR2hETzBGQlFVRXNVVUZEUkhsQ0xGVkJSRU1zVjBGRFJFRXNWVUZFUXp0QlFVRkJMRkZCUTFkRExGZEJSRmdzVjBGRFYwRXNWMEZFV0RzN08wRkJSMVFzVTBGQlMwb3NTVUZCVERzN1FVRkZRU3hSUVVGSkxFdEJRVXRITEZWQlFWUXNSVUZCY1VJc1MwRkJTMEVzVlVGQlREdEJRVU55UWl4UlFVRkpRU3hWUVVGS0xFVkJRV2RDUVN4WFFVRlhMRWxCUVZnN1FVRkRhRUlzVVVGQlNVTXNWMEZCU2l4RlFVRnBRa0VzV1VGQldTeEpRVUZhT3p0QlFVVnFRaXhYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGcFEwUlVMRkVzTWtKQlFXbERPMEZCUVVFc1VVRkJkRUphTEZGQlFYTkNMRkZCUVhSQ1FTeFJRVUZ6UWp0QlFVRkJMRkZCUVZSTUxFdEJRVk03TzBGQlF5OUNMRk5CUVV0QkxFdEJRVXdzWjBKQlEwc3NTMEZCUzBFc1MwRkVWaXhGUVVWTFFTeExRVVpNT3p0QlFVdEJMRkZCUVVsTExGRkJRVW9zUlVGQll5eExRVUZMYzBJc1RVRkJUQ3hEUVVGWmRFSXNVVUZCV2pzN1FVRkZaQ3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJITkNMRTBzYlVKQlFVOURMRWtzUlVGQlRUdEJRVU5ZTEZOQlFVczFRaXhMUVVGTUxFTkJRVmRMTEZGQlFWZ3NSMEZCYzBKMVFpeEpRVUYwUWp0QlFVTkJMRkZCUVVsQkxFdEJRVXR3UWl4alFVRlVMRVZCUVhsQ2IwSXNTMEZCUzNCQ0xHTkJRVXdzUTBGQmIwSXNTVUZCY0VJN08wRkJSWHBDTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzIxQ1FVVkVSU3hITEd0Q1FVRk5PMEZCUVVFc1VVRkRTVzFDTEZOQlJFb3NSMEZEYTBJc1MwRkJTemRDTEV0QlJIWkNMRU5CUTBrMlFpeFRRVVJLT3p0QlFVVktMRmRCUVU5QkxGbEJRVmxCTEZWQlFWVXNTMEZCUzNwQ0xFOUJRV1lzUTBGQldpeEhRVUZ6UXl4TFFVRkxRU3hQUVVGc1JEdEJRVU5FTEVjN08yMUNRVVZFTUVJc2EwSXNhVU5CUVhGQ08wRkJRMjVDTEZkQlFVOHNTMEZCU3pGQ0xFOUJRVm83UVVGRFJDeEhPenR0UWtGRlJFc3NSeXhuUWtGQlNYTkNMRU1zUlVGQlJ6dEJRVU5NTEZOQlFVc3pRaXhQUVVGTUxFZEJRV1V5UWl4RFFVRm1PMEZCUTBFc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN2JVSkJSVVJETEU4c2IwSkJRVkZETEVjc1JVRkJTenRCUVVOWUxGZEJRVThzUzBGQlMycERMRXRCUVV3c1EwRkJWMmxETEVkQlFWZ3NRMEZCVUR0QlFVTkVMRWM3TzIxQ1FVVkVReXhYTERCQ1FVRmpPMEZCUTFvc1YwRkJUeXd3UWtGQlpTeExRVUZMT1VJc1QwRkJUQ3hIUVVGbExFdEJRVXRFTEVsQlFXNURMRVZCUVhsRExFdEJRVXRFTEZkQlFUbERMRU5CUVZBN1FVRkRSQ3hIT3p0dFFrRkZSR2xETEZFc2RVSkJRVmM3UVVGRFZDeFhRVUZQTEV0QlFVdDJRaXhUUVVGYU8wRkJRMFFzUnpzN2JVSkJSVVIzUWl4VExITkNRVUZWUXl4UkxFVkJRVlU3UVVGRGJFSXNVMEZCUzBNc1UwRkJUQ3hIUVVGcFFpeExRVUZMUVN4VFFVRk1MRWxCUVd0Q0xFVkJRVzVETzBGQlEwRXNVMEZCUzBNc1dVRkJUQ3hIUVVGdlFpeExRVUZMUVN4WlFVRk1MRWxCUVhGQ0xFTkJRWHBETzBGQlEwRXNVVUZCU1N4TFFVRkxSQ3hUUVVGTUxFTkJRV1ZGTEU5QlFXWXNRMEZCZFVKSUxGRkJRWFpDTEUxQlFYRkRMRU5CUVVNc1EwRkJNVU1zUlVGQk5rTTdRVUZETTBNc1YwRkJTME1zVTBGQlRDeERRVUZsUnl4SlFVRm1MRU5CUVc5Q1NpeFJRVUZ3UWp0QlFVTkJMRmRCUVV0RkxGbEJRVXc3UVVGRFJEdEJRVU5FTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzIxQ1FVVkVSeXhYTEhkQ1FVRlpUQ3hSTEVWQlFWVTdRVUZEY0VJc1VVRkJUVTBzWjBKQlFXbENMRXRCUVV0TUxGTkJRVTRzUjBGQmJVSXNTMEZCUzBFc1UwRkJUQ3hEUVVGbFJTeFBRVUZtTEVOQlFYVkNTQ3hSUVVGMlFpeERRVUZ1UWl4SFFVRnpSQ3hEUVVGRExFTkJRVGRGTzBGQlEwRXNVVUZCU1Uwc2EwSkJRV3RDTEVOQlFVTXNRMEZCZGtJc1JVRkJNRUk3UVVGRGVFSXNWMEZCUzBvc1dVRkJURHRCUVVOQkxGZEJRVXRFTEZOQlFVd3NRMEZCWlUwc1RVRkJaaXhEUVVGelFrUXNZVUZCZEVJc1JVRkJjVU1zUTBGQmNrTTdRVUZEUkR0QlFVTkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMjFDUVVWRWFFTXNZU3cwUWtGQlowSTdRVUZEWkN4UlFVRk5VQ3hWUVVGVkxFdEJRVXROTEVkQlFVd3NSVUZCYUVJN1FVRkRRU3hUUVVGTExFbEJRVWx0UXl4SlFVRkpMRU5CUVdJc1JVRkJaMEpCTEVsQlFVa3NTMEZCUzA0c1dVRkJla0lzUlVGQmRVTk5MRWRCUVhaRExFVkJRVFJETzBGQlF6RkRMRmRCUVV0UUxGTkJRVXdzUTBGQlpVOHNRMEZCWml4RlFVRnJRbnBETEU5QlFXeENMRVZCUVRKQ0xFbEJRVE5DTzBGQlEwUTdRVUZEUkN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3pzN096dHJRa0ZIV1V3c1RTSXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUc5dVJuSmhiV1ZWY0dSaGRHVXNJR05oYm1ObGJFOXVSbkpoYldWVmNHUmhkR1VzSUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNCOUlHWnliMjBnSjJaeVlXMWxjM2x1WXljN1hHNXBiWEJ2Y25RZ2V5QnpjR1ZsWkZCbGNsTmxZMjl1WkNCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibHh1WTJ4aGMzTWdRV04wYVc5dUlIc2dMeThnYkdGM2MzVnBkQ0F0SUhOdmNuSjVYRzRnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6SUQwZ2UzMHBJSHRjYmlBZ0lDQjBhR2x6TG5CeWIzQnpJRDBnZTF4dUlDQWdJQ0FnTGk0dWRHaHBjeTVqYjI1emRISjFZM1J2Y2k1a1pXWmhkV3gwVUhKdmNITmNiaUFnSUNCOU8xeHVYRzRnSUNBZ2RHaHBjeTV6WlhSUWNtOXdjeWh3Y205d2N5azdYRzVjYmlBZ0lDQjBhR2x6TG14aGMzUlZjR1JoZEdWa0lEMGdNRHRjYmlBZ0lDQjBhR2x6TG5CeVpYWWdQU0IwYUdsekxtTjFjbkpsYm5RZ1BTQndjbTl3Y3k1amRYSnlaVzUwSUh4OElIQnliM0J6TG1aeWIyMGdmSHdnTUR0Y2JpQWdmVnh1WEc0Z0lITjBZWEowS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYjI1VGRHRnlkQ3dnWDI5dVUzUmhjblFzSUhCaGMzTnBkbVVnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzVjYmlBZ0lDQnBaaUFvSVhCaGMzTnBkbVVwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYMmx6UVdOMGFYWmxJRDBnZEhKMVpUdGNiaUFnSUNBZ0lHOXVSbkpoYldWVmNHUmhkR1VvZEdocGN5NXpZMmhsWkhWc1pXUlZjR1JoZEdVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBhR2x6TG05dVUzUmhjblFwSUhSb2FYTXViMjVUZEdGeWRDZ3BPMXh1SUNBZ0lHbG1JQ2h2YmxOMFlYSjBLU0J2YmxOMFlYSjBLSFJvYVhNcE8xeHVJQ0FnSUdsbUlDaGZiMjVUZEdGeWRDa2dYMjl1VTNSaGNuUW9kR2hwY3lrN1hHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJSE4wYjNBb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCdmJsTjBiM0FzSUY5dmJsTjBiM0FzSUhCaGMzTnBkbVVnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzVjYmlBZ0lDQnBaaUFvSVhCaGMzTnBkbVVwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYMmx6UVdOMGFYWmxJRDBnWm1Gc2MyVTdYRzRnSUNBZ0lDQmpZVzVqWld4UGJrWnlZVzFsVlhCa1lYUmxLSFJvYVhNdWMyTm9aV1IxYkdWa1ZYQmtZWFJsS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2RHaHBjeTV2YmxOMGIzQXBJSFJvYVhNdWIyNVRkRzl3S0NrN1hHNGdJQ0FnYVdZZ0tHOXVVM1J2Y0NrZ2IyNVRkRzl3S0hSb2FYTXBPMXh1SUNBZ0lHbG1JQ2hmYjI1VGRHOXdLU0JmYjI1VGRHOXdLSFJvYVhNcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0JqYjIxd2JHVjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJRzl1UTI5dGNHeGxkR1VzSUY5dmJrTnZiWEJzWlhSbElIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnZEdocGN5NXpkRzl3S0NrN1hHNWNiaUFnSUNCcFppQW9kR2hwY3k1dmJrTnZiWEJzWlhSbEtTQjBhR2x6TG05dVEyOXRjR3hsZEdVb0tUdGNiaUFnSUNCcFppQW9iMjVEYjIxd2JHVjBaU2tnYjI1RGIyMXdiR1YwWlNoMGFHbHpLVHRjYmlBZ0lDQnBaaUFvWDI5dVEyOXRjR3hsZEdVcElGOXZia052YlhCc1pYUmxLSFJvYVhNcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0J6WTJobFpIVnNaV1JWY0dSaGRHVWdQU0FvS1NBOVBpQjdYRzRnSUNBZ2RHaHBjeTVzWVhOMFZYQmtZWFJsWkNBOUlIUnBiV1ZUYVc1alpVeGhjM1JHY21GdFpTZ3BPMXh1SUNBZ0lIUm9hWE11Y0hKbGRpQTlJSFJvYVhNdVkzVnljbVZ1ZER0Y2JseHVJQ0FnSUdOdmJuTjBJSHNnYjI1VmNHUmhkR1VzSUhCaGMzTnBkbVVnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NTFjR1JoZEdVcElIdGNiaUFnSUNBZ0lIUm9hWE11WTNWeWNtVnVkQ0E5SUhSb2FYTXVkWEJrWVhSbEtIUm9hWE11WTNWeWNtVnVkQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0c5dVZYQmtZWFJsS1NCN1hHNGdJQ0FnSUNCcFppQW9iMjVWY0dSaGRHVXVjbVZuYVhOMFpYSkJZM1JwYjI0cElIdGNiaUFnSUNBZ0lDQWdiMjVWY0dSaGRHVXVjMlYwS0hSb2FYTXVaMlYwS0NrcE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2IyNVZjR1JoZEdVb2RHaHBjeTVuWlhRb0tTd2dkR2hwY3lrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnZEdocGN5NW1hWEpsVEdsemRHVnVaWEp6S0NrN1hHNWNiaUFnSUNCcFppQW9JWEJoYzNOcGRtVWdKaVlnZEdocGN5NWZhWE5CWTNScGRtVXBJSHRjYmlBZ0lDQWdJRzl1Um5KaGJXVlZjR1JoZEdVb2RHaHBjeTV6WTJobFpIVnNaV1JWY0dSaGRHVXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtbHpRV04wYVc5dVEyOXRjR3hsZEdVZ0ppWWdkR2hwY3k1cGMwRmpkR2x2YmtOdmJYQnNaWFJsS0NrcElIdGNiaUFnSUNBZ0lIUm9hWE11WTI5dGNHeGxkR1VvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVHRjYmx4dUlDQnpaWFJRY205d2N5aDdJRzl1VlhCa1lYUmxMQ0F1TGk1d2NtOXdjeUI5S1NCN1hHNGdJQ0FnZEdocGN5NXdjbTl3Y3lBOUlIdGNiaUFnSUNBZ0lDNHVMblJvYVhNdWNISnZjSE1zWEc0Z0lDQWdJQ0F1TGk1d2NtOXdjMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQnBaaUFvYjI1VmNHUmhkR1VwSUhSb2FYTXViM1YwY0hWMEtHOXVWWEJrWVhSbEtUdGNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnYjNWMGNIVjBLR1oxYm1NcElIdGNiaUFnSUNCMGFHbHpMbkJ5YjNCekxtOXVWWEJrWVhSbElEMGdablZ1WXp0Y2JpQWdJQ0JwWmlBb1puVnVZeTV5WldkcGMzUmxja0ZqZEdsdmJpa2dablZ1WXk1eVpXZHBjM1JsY2tGamRHbHZiaWgwYUdsektUdGNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnWjJWMEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2RISmhibk5tYjNKdElIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJSEpsZEhWeWJpQjBjbUZ1YzJadmNtMGdQeUIwY21GdWMyWnZjbTBvZEdocGN5NWpkWEp5Wlc1MEtTQTZJSFJvYVhNdVkzVnljbVZ1ZER0Y2JpQWdmVnh1WEc0Z0lHZGxkRUpsWm05eVpWUnlZVzV6Wm05eWJTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVqZFhKeVpXNTBPMXh1SUNCOVhHNWNiaUFnYzJWMEtIWXBJSHRjYmlBZ0lDQjBhR2x6TG1OMWNuSmxiblFnUFNCMk8xeHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdaMlYwVUhKdmNDaHJaWGtwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1d2NtOXdjMXRyWlhsZE8xeHVJQ0I5WEc1Y2JpQWdaMlYwVm1Wc2IyTnBkSGtvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSE53WldWa1VHVnlVMlZqYjI1a0tIUm9hWE11WTNWeWNtVnVkQ0F0SUhSb2FYTXVjSEpsZGl3Z2RHaHBjeTVzWVhOMFZYQmtZWFJsWkNrN1hHNGdJSDFjYmx4dUlDQnBjMEZqZEdsMlpTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmYVhOQlkzUnBkbVU3WEc0Z0lIMWNibHh1SUNCemRXSnpZM0pwWW1Vb2JHbHpkR1Z1WlhJcElIdGNiaUFnSUNCMGFHbHpMbXhwYzNSbGJtVnljeUE5SUhSb2FYTXViR2x6ZEdWdVpYSnpJSHg4SUZ0ZE8xeHVJQ0FnSUhSb2FYTXViblZ0VEdsemRHVnVaWEp6SUQwZ2RHaHBjeTV1ZFcxTWFYTjBaVzVsY25NZ2ZId2dNRHRjYmlBZ0lDQnBaaUFvZEdocGN5NXNhWE4wWlc1bGNuTXVhVzVrWlhoUFppaHNhWE4wWlc1bGNpa2dQVDA5SUMweEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG14cGMzUmxibVZ5Y3k1d2RYTm9LR3hwYzNSbGJtVnlLVHRjYmlBZ0lDQWdJSFJvYVhNdWJuVnRUR2x6ZEdWdVpYSnpLeXM3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnZFc1emRXSnpZM0pwWW1Vb2JHbHpkR1Z1WlhJcElIdGNiaUFnSUNCamIyNXpkQ0JzYVhOMFpXNWxja2x1WkdWNElEMGdLSFJvYVhNdWJHbHpkR1Z1WlhKektTQS9JSFJvYVhNdWJHbHpkR1Z1WlhKekxtbHVaR1Y0VDJZb2JHbHpkR1Z1WlhJcElEb2dMVEU3WEc0Z0lDQWdhV1lnS0d4cGMzUmxibVZ5U1c1a1pYZ2dJVDA5SUMweEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG01MWJVeHBjM1JsYm1WeWN5MHRPMXh1SUNBZ0lDQWdkR2hwY3k1c2FYTjBaVzVsY25NdWMzQnNhV05sS0d4cGMzUmxibVZ5U1c1a1pYZ3NJREVwTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUdacGNtVk1hWE4wWlc1bGNuTW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ1kzVnljbVZ1ZENBOUlIUm9hWE11WjJWMEtDazdYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG01MWJVeHBjM1JsYm1WeWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbXhwYzNSbGJtVnljMXRwWFNoamRYSnlaVzUwTENCMGFHbHpLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdRV04wYVc5dU8xeHVJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWN0aW9ucy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG4vKlxuICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcmV0dXJuIFtudW1iZXJdXG4qL1xudmFyIHRvRGVjaW1hbCA9IGZ1bmN0aW9uIHRvRGVjaW1hbChudW0pIHtcbiAgdmFyIHByZWNpc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMjtcblxuICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG5cbnZhciBaRVJPX1BPSU5UID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB6OiAwXG59O1xuXG52YXIgZGlzdGFuY2UxRCA9IGZ1bmN0aW9uIGRpc3RhbmNlMUQoYSwgYikge1xuICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufTtcblxuLypcbiAgQW5nbGUgYmV0d2VlbiBwb2ludHNcblxuICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgYXJlIGF0IDAsMFxuXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbnZhciBhbmdsZSA9IGV4cG9ydHMuYW5nbGUgPSBmdW5jdGlvbiBhbmdsZShhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBaRVJPX1BPSU5UO1xuICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGIueSAtIGEueSwgYi54IC0gYS54KSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xudmFyIGRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBmdW5jdGlvbiBkZWdyZWVzVG9SYWRpYW5zKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgRGlsYXRlXG5cbiAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuXG4gIGEgLS0tLS0tLS0tIGJcblxuICB0b1xuXG4gIGEgLS0tLSBiXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG52YXIgZGlsYXRlID0gZXhwb3J0cy5kaWxhdGUgPSBmdW5jdGlvbiBkaWxhdGUoYSwgYiwgZGlsYXRpb24pIHtcbiAgcmV0dXJuIGEgKyAoYiAtIGEpICogZGlsYXRpb247XG59O1xuXG4vKlxuICBEaXN0YW5jZVxuXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbnZhciBkaXN0YW5jZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBmdW5jdGlvbiBkaXN0YW5jZShhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBaRVJPX1BPSU5UO1xuXG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICB9IGVsc2Uge1xuICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICB2YXIgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgdmFyIHpEZWx0YSA9ICgwLCBfdXRpbHMuaXNOdW0pKGEueikgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdFxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG52YXIgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoZnJvbSwgdG8sIHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xufTtcblxuLypcbiAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG52YXIgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZnVuY3Rpb24gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZnJvbSwgdG8sIHByb2dyZXNzKSB7XG4gIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuXG4gIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xudmFyIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBmdW5jdGlvbiBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgfTtcbn07XG5cbi8qXG4gIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG52YXIgcmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uIHJhZGlhbnNUb0RlZ3JlZXMocmFkaWFucykge1xuICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKlxuICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xudmFyIHNtb290aCA9IGV4cG9ydHMuc21vb3RoID0gZnVuY3Rpb24gc21vb3RoKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24pIHtcbiAgdmFyIHNtb290aGluZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcbiAgcmV0dXJuIHRvRGVjaW1hbChvbGRWYWx1ZSArIGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpO1xufTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGZ1bmN0aW9uIHNwZWVkUGVyRnJhbWUoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh4cHMpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBmdW5jdGlvbiBzcGVlZFBlclNlY29uZCh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gZnJhbWVEdXJhdGlvbiA/IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xudmFyIHN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gc3RlcFByb2dyZXNzKHN0ZXBzLCBwcm9ncmVzcykge1xuICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgdmFyIHRhcmdldCA9IDEgLSAxIC8gc3RlcHM7XG4gIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WTJGc1l5NXFjeUpkTENKdVlXMWxjeUk2V3lKMGIwUmxZMmx0WVd3aUxDSnVkVzBpTENKd2NtVmphWE5wYjI0aUxDSk5ZWFJvSWl3aWNtOTFibVFpTENKYVJWSlBYMUJQU1U1VUlpd2llQ0lzSW5raUxDSjZJaXdpWkdsemRHRnVZMlV4UkNJc0ltRWlMQ0ppSWl3aVlXSnpJaXdpWVc1bmJHVWlMQ0p5WVdScFlXNXpWRzlFWldkeVpXVnpJaXdpWVhSaGJqSWlMQ0prWldkeVpXVnpWRzlTWVdScFlXNXpJaXdpWkdWbmNtVmxjeUlzSWxCSklpd2laR2xzWVhSbElpd2laR2xzWVhScGIyNGlMQ0prYVhOMFlXNWpaU0lzSW5oRVpXeDBZU0lzSW5sRVpXeDBZU0lzSW5wRVpXeDBZU0lzSW5OeGNuUWlMQ0puWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNJc0ltWnliMjBpTENKMGJ5SXNJblpoYkhWbElpd2laMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01pTENKd2NtOW5jbVZ6Y3lJc0luQnZhVzUwUm5KdmJVRnVaMnhsUVc1a1JHbHpkR0Z1WTJVaUxDSnZjbWxuYVc0aUxDSmpiM01pTENKemFXNGlMQ0p5WVdScFlXNXpJaXdpYzIxdmIzUm9JaXdpYm1WM1ZtRnNkV1VpTENKdmJHUldZV3gxWlNJc0ltUjFjbUYwYVc5dUlpd2ljMjF2YjNSb2FXNW5JaXdpYldGNElpd2ljM0JsWldSUVpYSkdjbUZ0WlNJc0luaHdjeUlzSW1aeVlXMWxSSFZ5WVhScGIyNGlMQ0p6Y0dWbFpGQmxjbE5sWTI5dVpDSXNJblpsYkc5amFYUjVJaXdpYzNSbGNGQnliMmR5WlhOeklpd2ljM1JsY0hNaUxDSnpaV2R0Wlc1MElpd2lkR0Z5WjJWMElpd2ljSEp2WjNKbGMzTlBabFJoY21kbGRDSXNJbTFwYmlJc0ltWnNiMjl5SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJPenRCUVVWQk96czdPenM3TzBGQlQwRXNTVUZCVFVFc1dVRkJXU3hUUVVGYVFTeFRRVUZaTEVOQlFVTkRMRWRCUVVRc1JVRkJkMEk3UVVGQlFTeE5RVUZzUWtNc1UwRkJhMElzZFVWQlFVNHNRMEZCVFRzN1FVRkRlRU5CTEhWQ1FVRlpMRVZCUVZvc1JVRkJhMEpCTEZOQlFXeENPMEZCUTBFc1UwRkJUME1zUzBGQlMwTXNTMEZCVEN4RFFVRlhTQ3hOUVVGTlF5eFRRVUZxUWl4SlFVRTRRa0VzVTBGQmNrTTdRVUZEUkN4RFFVaEVPenRCUVV0QkxFbEJRVTFITEdGQlFXRTdRVUZEYWtKRExFdEJRVWNzUTBGRVl6dEJRVVZxUWtNc1MwRkJSeXhEUVVaak8wRkJSMnBDUXl4TFFVRkhPMEZCU0dNc1EwRkJia0k3TzBGQlRVRXNTVUZCVFVNc1lVRkJZU3hUUVVGaVFTeFZRVUZoTEVOQlFVTkRMRU5CUVVRc1JVRkJTVU1zUTBGQlNqdEJRVUZCTEZOQlFWVlNMRXRCUVV0VExFZEJRVXdzUTBGQlUwWXNTVUZCU1VNc1EwRkJZaXhEUVVGV08wRkJRVUVzUTBGQmJrSTdPMEZCUlVFN096czdPenM3T3pzN1FVRlZUeXhKUVVGTlJTeDNRa0ZCVVN4VFFVRlNRU3hMUVVGUkxFTkJRVU5JTEVOQlFVUTdRVUZCUVN4TlFVRkpReXhEUVVGS0xIVkZRVUZSVGl4VlFVRlNPMEZCUVVFc1UwRkJkVUpUTEdsQ1FVRnBRbGdzUzBGQlMxa3NTMEZCVEN4RFFVRlhTaXhGUVVGRlNpeERRVUZHTEVkQlFVMUhMRVZCUVVWSUxFTkJRVzVDTEVWQlFYTkNTU3hGUVVGRlRDeERRVUZHTEVkQlFVMUpMRVZCUVVWS0xFTkJRVGxDTEVOQlFXcENMRU5CUVhaQ08wRkJRVUVzUTBGQlpEczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVlVzT0VOQlFXMUNMRk5CUVc1Q1FTeG5Ra0ZCYlVJc1EwRkJRME1zVDBGQlJEdEJRVUZCTEZOQlFXRkJMRlZCUVZWa0xFdEJRVXRsTEVWQlFXWXNSMEZCYjBJc1IwRkJha003UVVGQlFTeERRVUY2UWpzN1FVRkZVRHM3T3pzN096czdPenM3T3pzN096czdPMEZCYTBKUExFbEJRVTFETERCQ1FVRlRMRk5CUVZSQkxFMUJRVk1zUTBGQlExUXNRMEZCUkN4RlFVRkpReXhEUVVGS0xFVkJRVTlUTEZGQlFWQTdRVUZCUVN4VFFVRnZRbFlzU1VGQlN5eERRVUZEUXl4SlFVRkpSQ3hEUVVGTUxFbEJRVlZWTEZGQlFXNURPMEZCUVVFc1EwRkJaanM3UVVGRlVEczdPenM3T3pzN08wRkJVMDhzU1VGQlRVTXNPRUpCUVZjc1UwRkJXRUVzVVVGQlZ5eERRVUZEV0N4RFFVRkVMRVZCUVhWQ08wRkJRVUVzVFVGQmJrSkRMRU5CUVcxQ0xIVkZRVUZtVGl4VlFVRmxPenRCUVVNM1F6dEJRVU5CTEUxQlFVa3NhMEpCUVUxTExFTkJRVTRzUTBGQlNpeEZRVUZqTzBGQlExb3NWMEZCVDBRc1YwRkJWME1zUTBGQldDeEZRVUZqUXl4RFFVRmtMRU5CUVZBN08wRkJSVVk3UVVGRFF5eEhRVXBFTEUxQlNVODdRVUZEVEN4UlFVRk5WeXhUUVVGVFlpeFhRVUZYUXl4RlFVRkZTaXhEUVVGaUxFVkJRV2RDU3l4RlFVRkZUQ3hEUVVGc1FpeERRVUZtTzBGQlEwRXNVVUZCVFdsQ0xGTkJRVk5rTEZkQlFWZERMRVZCUVVWSUxFTkJRV0lzUlVGQlowSkpMRVZCUVVWS0xFTkJRV3hDTEVOQlFXWTdRVUZEUVN4UlFVRk5hVUlzVTBGQlZTeHJRa0ZCVFdRc1JVRkJSVVlzUTBGQlVpeERRVUZFTEVkQlFXVkRMRmRCUVZkRExFVkJRVVZHTEVOQlFXSXNSVUZCWjBKSExFVkJRVVZJTEVOQlFXeENMRU5CUVdZc1IwRkJjME1zUTBGQmNrUTdPMEZCUlVFc1YwRkJUMHdzUzBGQlMzTkNMRWxCUVV3c1EwRkJWU3hUUVVGRFNDeE5RVUZFTEVWQlFWY3NRMEZCV0N4aFFVRnBRa01zVFVGQmFrSXNSVUZCTWtJc1EwRkJNMElzWVVGQmFVTkRMRTFCUVdwRExFVkJRVEpETEVOQlFUTkRMRU5CUVZZc1EwRkJVRHRCUVVORU8wRkJRMFlzUTBGaVRUczdRVUZsVURzN096czdPenM3T3pzN08wRkJXVThzU1VGQlRVVXNjMFJCUVhWQ0xGTkJRWFpDUVN4dlFrRkJkVUlzUTBGQlEwTXNTVUZCUkN4RlFVRlBReXhGUVVGUUxFVkJRVmRETEV0QlFWZzdRVUZCUVN4VFFVRnhRaXhEUVVGRFFTeFJRVUZSUml4SlFVRlVMRXRCUVd0Q1F5eExRVUZMUkN4SlFVRjJRaXhEUVVGeVFqdEJRVUZCTEVOQlFUZENPenRCUVVWUU96czdPenM3T3pzN096dEJRVmRQTEVsQlFVMUhMSE5FUVVGMVFpeFRRVUYyUWtFc2IwSkJRWFZDTEVOQlFVTklMRWxCUVVRc1JVRkJUME1zUlVGQlVDeEZRVUZYUnl4UlFVRllPMEZCUVVFc1UwRkJlVUlzUTBGQlJVRXNVVUZCUml4SFFVRmhTaXhKUVVGa0xFZEJRWFZDU1N4WFFVRlhTQ3hGUVVGc1F5eEhRVUYzUTBRc1NVRkJhRVU3UVVGQlFTeERRVUUzUWpzN1FVRkZVRHM3T3pzN096czdRVUZSVHl4SlFVRk5TeXhuUlVGQk5FSXNVMEZCTlVKQkxIbENRVUUwUWl4RFFVRkRReXhOUVVGRUxFVkJRVk53UWl4TFFVRlVMRVZCUVdkQ1VTeFJRVUZvUWl4RlFVRTJRanRCUVVOd1JWSXNWVUZCVVVjc2FVSkJRV2xDU0N4TFFVRnFRaXhEUVVGU096dEJRVVZCTEZOQlFVODdRVUZEVEZBc1QwRkJSMlVzVjBGQlYyeENMRXRCUVVzclFpeEhRVUZNTEVOQlFWTnlRaXhMUVVGVUxFTkJRVmdzUjBGQk5rSnZRaXhQUVVGUE0wSXNRMEZFYkVNN1FVRkZURU1zVDBGQlIyTXNWMEZCVjJ4Q0xFdEJRVXRuUXl4SFFVRk1MRU5CUVZOMFFpeExRVUZVTEVOQlFWZ3NSMEZCTmtKdlFpeFBRVUZQTVVJN1FVRkdiRU1zUjBGQlVEdEJRVWxFTEVOQlVFMDdPMEZCVTFBN096czdPenRCUVUxUExFbEJRVTFQTERoRFFVRnRRaXhUUVVGdVFrRXNaMEpCUVcxQ0xFTkJRVU56UWl4UFFVRkVPMEZCUVVFc1UwRkJZVUVzVlVGQlZTeEhRVUZXTEVkQlFXZENha01zUzBGQlMyVXNSVUZCYkVNN1FVRkJRU3hEUVVGNlFqczdRVUZGVURzN096czdPenM3UVVGUlR5eEpRVUZOYlVJc01FSkJRVk1zVTBGQlZFRXNUVUZCVXl4RFFVRkRReXhSUVVGRUxFVkJRVmRETEZGQlFWZ3NSVUZCY1VKRExGRkJRWEpDTzBGQlFVRXNUVUZCSzBKRExGTkJRUzlDTEhWRlFVRXlReXhEUVVFelF6dEJRVUZCTEZOQlFXbEVla01zVlVGQlZYVkRMRmRCUVZsRExGbEJRVmxHTEZkQlFWZERMRkZCUVhaQ0xFbEJRVzFEY0VNc1MwRkJTM1ZETEVkQlFVd3NRMEZCVTBRc1UwRkJWQ3hGUVVGdlFrUXNVVUZCY0VJc1EwRkJla1FzUTBGQmFrUTdRVUZCUVN4RFFVRm1PenRCUVVWUU96czdPenM3UVVGTlR5eEpRVUZOUnl4M1EwRkJaMElzVTBGQmFFSkJMR0ZCUVdkQ0xFTkJRVU5ETEVkQlFVUXNSVUZCVFVNc1lVRkJUanRCUVVGQkxGTkJRWGxDTEd0Q1FVRk5SQ3hIUVVGT0xFTkJRVVFzUjBGQlpVRXNUMEZCVHl4UFFVRlBReXhoUVVGa0xFTkJRV1lzUjBGQk9FTXNRMEZCZEVVN1FVRkJRU3hEUVVGMFFqczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVU1zTUVOQlFXbENMRk5CUVdwQ1FTeGpRVUZwUWl4RFFVRkRReXhSUVVGRUxFVkJRVmRHTEdGQlFWZzdRVUZCUVN4VFFVRTJRa0VzWjBKQlFXZENSU3haUVVGWkxFOUJRVTlHTEdGQlFXNUNMRU5CUVdoQ0xFZEJRVzlFTEVOQlFXcEdPMEZCUVVFc1EwRkJka0k3TzBGQlJWQTdPenM3T3pzN1FVRlBUeXhKUVVGTlJ5eHpRMEZCWlN4VFFVRm1RU3haUVVGbExFTkJRVU5ETEV0QlFVUXNSVUZCVVd4Q0xGRkJRVklzUlVGQmNVSTdRVUZETDBNc1RVRkJUVzFDTEZWQlFWVXNTMEZCUzBRc1VVRkJVU3hEUVVGaUxFTkJRV2hDTzBGQlEwRXNUVUZCVFVVc1UwRkJVeXhKUVVGTExFbEJRVWxHTEV0QlFYaENPMEZCUTBFc1RVRkJUVWNzYlVKQlFXMUNha1FzUzBGQlMydEVMRWRCUVV3c1EwRkJVM1JDTEZkQlFWZHZRaXhOUVVGd1FpeEZRVUUwUWl4RFFVRTFRaXhEUVVGNlFqczdRVUZGUVN4VFFVRlBhRVFzUzBGQlMyMUVMRXRCUVV3c1EwRkJWMFlzYlVKQlFXMUNSaXhQUVVFNVFpeEpRVUY1UTBFc1QwRkJhRVE3UVVGRFJDeERRVTVOSWl3aVptbHNaU0k2SW1OaGJHTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnBjMDUxYlNCOUlHWnliMjBnSnk0dmRYUnBiSE1uTzF4dVhHNHZLbHh1SUNCRGIyNTJaWEowSUc1MWJXSmxjaUIwYnlCNElHUmxZMmx0WVd3Z2NHeGhZMlZ6WEc1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhWeHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRYRzRxTDF4dVkyOXVjM1FnZEc5RVpXTnBiV0ZzSUQwZ0tHNTFiU3dnY0hKbFkybHphVzl1SUQwZ01pa2dQVDRnZTF4dUlDQndjbVZqYVhOcGIyNGdQU0F4TUNBcUtpQndjbVZqYVhOcGIyNDdYRzRnSUhKbGRIVnliaUJOWVhSb0xuSnZkVzVrS0c1MWJTQXFJSEJ5WldOcGMybHZiaWtnTHlCd2NtVmphWE5wYjI0N1hHNTlPMXh1WEc1amIyNXpkQ0JhUlZKUFgxQlBTVTVVSUQwZ2UxeHVJQ0I0T2lBd0xGeHVJQ0I1T2lBd0xGeHVJQ0I2T2lBd1hHNTlPMXh1WEc1amIyNXpkQ0JrYVhOMFlXNWpaVEZFSUQwZ0tHRXNJR0lwSUQwK0lFMWhkR2d1WVdKektHRWdMU0JpS1R0Y2JseHVMeXBjYmlBZ1FXNW5iR1VnWW1WMGQyVmxiaUJ3YjJsdWRITmNibHh1SUNCVWNtRnVjMnhoZEdWeklIUm9aU0JvZVhCdmRHaGxkR2xqWVd3Z2JHbHVaU0J6YnlCMGFHRjBJSFJvWlNBblpuSnZiU2NnWTI5dmNtUnBibUYwWlhOY2JpQWdZWEpsSUdGMElEQXNNRnh1WEc0Z0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1dDQmhibVFnV1NCamIyOXlaR2x1WVhSbGN5QnZaaUJtY205dElIQnZhVzUwWEc0Z0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1dDQmhibVFnV1NCamIzSmthVzVoZEdWeklHOW1JSFJ2SUhCdmFXNTBYRzRnSUVCeVpYUjFjbTRnVzNKaFpHbGhibDA2SUVGdVoyeGxJR0psZEhkbFpXNGdkR2hsSUhSM2J5QndiMmx1ZEhNZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmhibWRzWlNBOUlDaGhMQ0JpSUQwZ1drVlNUMTlRVDBsT1ZDa2dQVDRnY21Ga2FXRnVjMVJ2UkdWbmNtVmxjeWhOWVhSb0xtRjBZVzR5S0dJdWVTQXRJR0V1ZVN3Z1lpNTRJQzBnWVM1NEtTazdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdaR1ZuY21WbGN5QjBieUJ5WVdScFlXNXpYRzVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCa1pXZHlaV1Z6WEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlISmhaR2xoYm5OY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHVm5jbVZsYzFSdlVtRmthV0Z1Y3lBOUlDaGtaV2R5WldWektTQTlQaUJrWldkeVpXVnpJQ29nVFdGMGFDNVFTU0F2SURFNE1EdGNibHh1THlwY2JpQWdSR2xzWVhSbFhHNWNiaUFnUTJoaGJtZGxJSFJvWlNCd2NtOW5jbVZ6YzJsdmJpQmlaWFIzWldWdUlHRWdZVzVrSUdJZ1lXTmpiM0prYVc1bklIUnZJR1JwYkdGMGFXOXVMbHh1WEc0Z0lGTnZJR1JwYkdGMGFXOXVJRDBnTUM0MUlIZHZkV3hrSUdOb1lXNW5aVnh1WEc0Z0lHRWdMUzB0TFMwdExTMHRJR0pjYmx4dUlDQjBiMXh1WEc0Z0lHRWdMUzB0TFNCaVhHNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJRY21WMmFXOTFjeUIyWVd4MVpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRU4xY25KbGJuUWdkbUZzZFdWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkVhV3hoZEdVZ2NISnZaM0psYzNNZ1lua2dlRnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCUWNtVjJhVzkxY3lCMllXeDFaU0J3YkhWeklIUm9aU0JrYVd4aGRHVmtJR1JwWm1abGNtVnVZMlZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdsc1lYUmxJRDBnS0dFc0lHSXNJR1JwYkdGMGFXOXVLU0E5UGlCaElDc2dLQ2hpSUMwZ1lTa2dLaUJrYVd4aGRHbHZiaWs3WEc1Y2JpOHFYRzRnSUVScGMzUmhibU5sWEc1Y2JpQWdVbVYwZFhKdWN5QjBhR1VnWkdsemRHRnVZMlVnWW1WMGQyVmxiaUIwZDI4Z2JpQmthVzFsYm5OcGIyNWhiQ0J3YjJsdWRITXVYRzVjYmlBZ1FIQmhjbUZ0SUZ0dlltcGxZM1F2Ym5WdFltVnlYVG9nZUNCaGJtUWdlU0J2Y2lCcWRYTjBJSGdnYjJZZ2NHOXBiblFnUVZ4dUlDQkFjR0Z5WVcwZ1cyOWlhbVZqZEM5dWRXMWlaWEpkT2lBb2IzQjBhVzl1WVd3cE9pQjRJR0Z1WkNCNUlHOXlJR3AxYzNRZ2VDQnZaaUJ3YjJsdWRDQkNYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZSb1pTQmthWE4wWVc1alpTQmlaWFIzWldWdUlIUm9aU0IwZDI4Z2NHOXBiblJ6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdScGMzUmhibU5sSUQwZ0tHRXNJR0lnUFNCYVJWSlBYMUJQU1U1VUtTQTlQaUI3WEc0Z0lDOHZJREZFSUdScGJXVnVjMmx2Ym5OY2JpQWdhV1lnS0dselRuVnRLR0VwS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1JwYzNSaGJtTmxNVVFvWVN3Z1lpazdYRzVjYmlBZ0x5OGdUWFZzZEdrdFpHbHRaVzV6YVc5dVlXeGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmpiMjV6ZENCNFJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlQ3dnWWk1NEtUdGNiaUFnSUNCamIyNXpkQ0I1UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVTd2dZaTU1S1R0Y2JpQWdJQ0JqYjI1emRDQjZSR1ZzZEdFZ1BTQW9hWE5PZFcwb1lTNTZLU2tnUHlCa2FYTjBZVzVqWlRGRUtHRXVlaXdnWWk1NktTQTZJREE3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdUV0YwYUM1emNYSjBLQ2g0UkdWc2RHRWdLaW9nTWlrZ0t5QW9lVVJsYkhSaElDb3FJRElwSUNzZ0tIcEVaV3gwWVNBcUtpQXlLU2s3WEc0Z0lIMWNibjA3WEc1Y2JpOHFYRzRnSUZCeWIyZHlaWE56SUhkcGRHaHBiaUJuYVhabGJpQnlZVzVuWlZ4dVhHNGdJRWRwZG1WdUlHRWdiRzkzWlhJZ2JHbHRhWFFnWVc1a0lHRnVJSFZ3Y0dWeUlHeHBiV2wwTENCM1pTQnlaWFIxY200Z2RHaGxJSEJ5YjJkeVpYTnpYRzRnSUNobGVIQnlaWE56WldRZ1lYTWdZU0J1ZFcxaVpYSWdNQzB4S1NCeVpYQnlaWE5sYm5SbFpDQmllU0IwYUdVZ1oybDJaVzRnZG1Gc2RXVXNJR0Z1WkZ4dUlDQnNhVzFwZENCMGFHRjBJSEJ5YjJkeVpYTnpJSFJ2SUhkcGRHaHBiaUF3TFRFdVhHNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNYjNkbGNpQnNhVzFwZEZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVndjR1Z5SUd4cGJXbDBYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdkRzhnWm1sdVpDQndjbTluY21WemN5QjNhWFJvYVc0Z1oybDJaVzRnY21GdVoyVmNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVUhKdlozSmxjM01nYjJZZ2RtRnNkV1VnZDJsMGFHbHVJSEpoYm1kbElHRnpJR1Y0Y0hKbGMzTmxaQ0F3TFRGY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVWdQU0FvWm5KdmJTd2dkRzhzSUhaaGJIVmxLU0E5UGlBb2RtRnNkV1VnTFNCbWNtOXRLU0F2SUNoMGJ5QXRJR1p5YjIwcE8xeHVYRzR2S2x4dUlDQldZV3gxWlNCcGJpQnlZVzVuWlNCbWNtOXRJSEJ5YjJkeVpYTnpYRzVjYmlBZ1IybDJaVzRnWVNCc2IzZGxjaUJzYVcxcGRDQmhibVFnWVc0Z2RYQndaWElnYkdsdGFYUXNJSGRsSUhKbGRIVnliaUIwYUdVZ2RtRnNkV1VnZDJsMGFHbHVYRzRnSUhSb1lYUWdjbUZ1WjJVZ1lYTWdaWGh3Y21WemMyVmtJR0o1SUhCeWIyZHlaWE56SUNoaElHNTFiV0psY2lCbWNtOXRJREF0TVNsY2JseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZYQndaWElnYkdsdGFYUWdiMllnY21GdVoyVmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJVYUdVZ2NISnZaM0psYzNNZ1ltVjBkMlZsYmlCc2IzZGxjaUJoYm1RZ2RYQndaWElnYkdsdGFYUnpJR1Y0Y0hKbGMzTmxaQ0F3TFRGY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ1lYTWdZMkZzWTNWc1lYUmxaQ0JtY205dElIQnliMmR5WlhOeklIZHBkR2hwYmlCeVlXNW5aU0FvYm05MElHeHBiV2wwWldRZ2QybDBhR2x1SUhKaGJtZGxLVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lBOUlDaG1jbTl0TENCMGJ5d2djSEp2WjNKbGMzTXBJRDArSUNndElIQnliMmR5WlhOeklDb2dabkp2YlNrZ0t5QW9jSEp2WjNKbGMzTWdLaUIwYnlrZ0t5Qm1jbTl0TzF4dVhHNHZLbHh1SUNCUWIybHVkQ0JtY205dElHRnVaMnhsSUdGdVpDQmthWE4wWVc1alpWeHVYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nTWtRZ2NHOXBiblFnYjJZZ2IzSnBaMmx1WEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1FXNW5iR1VnWm5KdmJTQnZjbWxuYVc1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkVhWE4wWVc1alpTQm1jbTl0SUc5eWFXZHBibHh1SUNCQWNtVjBkWEp1SUZ0dlltcGxZM1JkT2lCRFlXeGpkV3hoZEdWa0lESkVJSEJ2YVc1MFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElIQnZhVzUwUm5KdmJVRnVaMnhsUVc1a1JHbHpkR0Z1WTJVZ1BTQW9iM0pwWjJsdUxDQmhibWRzWlN3Z1pHbHpkR0Z1WTJVcElEMCtJSHRjYmlBZ1lXNW5iR1VnUFNCa1pXZHlaV1Z6Vkc5U1lXUnBZVzV6S0dGdVoyeGxLVHRjYmx4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUhnNklHUnBjM1JoYm1ObElDb2dUV0YwYUM1amIzTW9ZVzVuYkdVcElDc2diM0pwWjJsdUxuZ3NYRzRnSUNBZ2VUb2daR2x6ZEdGdVkyVWdLaUJOWVhSb0xuTnBiaWhoYm1kc1pTa2dLeUJ2Y21sbmFXNHVlVnh1SUNCOU8xeHVmVHRjYmx4dUx5cGNiaUFnUTI5dWRtVnlkQ0J5WVdScFlXNXpJSFJ2SUdSbFozSmxaWE5jYmx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlISmhaR2xoYm5OY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdaR1ZuY21WbGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnlZV1JwWVc1elZHOUVaV2R5WldWeklEMGdLSEpoWkdsaGJuTXBJRDArSUhKaFpHbGhibk1nS2lBeE9EQWdMeUJOWVhSb0xsQkpPMXh1WEc0dktseHVJQ0JHY21GdFpYSmhkR1V0YVc1a1pYQmxibVJsYm5RZ2MyMXZiM1JvYVc1blhHNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJPWlhjZ2RtRnNkV1ZjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCUGJHUWdkbUZzZFdWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkdjbUZ0WlNCa2RYSmhkR2x2Ymx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dVMjF2YjNSb2FXNW5JQ2d3SUdseklHNXZibVVwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOdGIyOTBhQ0E5SUNodVpYZFdZV3gxWlN3Z2IyeGtWbUZzZFdVc0lHUjFjbUYwYVc5dUxDQnpiVzl2ZEdocGJtY2dQU0F3S1NBOVBpQjBiMFJsWTJsdFlXd29iMnhrVm1Gc2RXVWdLeUFvWkhWeVlYUnBiMjRnS2lBb2JtVjNWbUZzZFdVZ0xTQnZiR1JXWVd4MVpTa2dMeUJOWVhSb0xtMWhlQ2h6Ylc5dmRHaHBibWNzSUdSMWNtRjBhVzl1S1NrcE8xeHVYRzR2S2x4dUlDQkRiMjUyWlhKMElIZ2djR1Z5SUhObFkyOXVaQ0IwYnlCd1pYSWdabkpoYldVZ2RtVnNiMk5wZEhrZ1ltRnpaV1FnYjI0Z1puQnpYRzVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmJtbDBJSEJsY2lCelpXTnZibVJjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCR2NtRnRaU0JrZFhKaGRHbHZiaUJwYmlCdGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR1ZsWkZCbGNrWnlZVzFsSUQwZ0tIaHdjeXdnWm5KaGJXVkVkWEpoZEdsdmJpa2dQVDRnS0dselRuVnRLSGh3Y3lrcElEOGdlSEJ6SUM4Z0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLU0E2SURBN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ2RtVnNiMk5wZEhrZ2FXNTBieUIyWld4cFkybDBlU0J3WlhJZ2MyVmpiMjVrWEc1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZibWwwSUhCbGNpQm1jbUZ0WlZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFWnlZVzFsSUdSMWNtRjBhVzl1SUdsdUlHMXpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE53WldWa1VHVnlVMlZqYjI1a0lEMGdLSFpsYkc5amFYUjVMQ0JtY21GdFpVUjFjbUYwYVc5dUtTQTlQaUJtY21GdFpVUjFjbUYwYVc5dUlEOGdkbVZzYjJOcGRIa2dLaUFvTVRBd01DQXZJR1p5WVcxbFJIVnlZWFJwYjI0cElEb2dNRHRjYmx4dUx5cGNiaUFnUTNKbFlYUmxJSE4wWlhCd1pXUWdkbVZ5YzJsdmJpQnZaaUF3TFRFZ2NISnZaM0psYzNOY2JseHVJQ0JBY0dGeVlXMGdXMmx1ZEYwNklFNTFiV0psY2lCdlppQnpkR1Z3YzF4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFTjFjbkpsYm5RZ2RtRnNkV1ZjYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1UzUmxjSEJsWkNCMllXeDFaVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6ZEdWd1VISnZaM0psYzNNZ1BTQW9jM1JsY0hNc0lIQnliMmR5WlhOektTQTlQaUI3WEc0Z0lHTnZibk4wSUhObFoyMWxiblFnUFNBeElDOGdLSE4wWlhCeklDMGdNU2s3WEc0Z0lHTnZibk4wSUhSaGNtZGxkQ0E5SURFZ0xTQW9NU0F2SUhOMFpYQnpLVHRjYmlBZ1kyOXVjM1FnY0hKdlozSmxjM05QWmxSaGNtZGxkQ0E5SUUxaGRHZ3ViV2x1S0hCeWIyZHlaWE56SUM4Z2RHRnlaMlYwTENBeEtUdGNibHh1SUNCeVpYUjFjbTRnVFdGMGFDNW1iRzl2Y2lod2NtOW5jbVZ6YzA5bVZHRnlaMlYwSUM4Z2MyVm5iV1Z1ZENrZ0tpQnpaV2R0Wlc1ME8xeHVmVHRjYmlKZGZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmMvY2FsYy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuYmV6aWVyID0gZXhwb3J0cy5ibGVuZENvbG9yID0gZXhwb3J0cy5hbHBoYSA9IGV4cG9ydHMuY29sb3IgPSBleHBvcnRzLmhzbGEgPSBleHBvcnRzLnJnYmEgPSBleHBvcnRzLnJnYlVuaXQgPSBleHBvcnRzLnB4ID0gZXhwb3J0cy5kZWdyZWVzID0gZXhwb3J0cy5wZXJjZW50ID0gZXhwb3J0cy50cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IGV4cG9ydHMuc3RlcHMgPSBleHBvcnRzLnNuYXAgPSBleHBvcnRzLnNtb290aCA9IGV4cG9ydHMud3JhcCA9IGV4cG9ydHMubm9ubGluZWFyU3ByaW5nID0gZXhwb3J0cy5zcHJpbmcgPSBleHBvcnRzLmdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcgPSBleHBvcnRzLm11bHRpcGx5ID0gZXhwb3J0cy5kaXZpZGUgPSBleHBvcnRzLmFkZCA9IGV4cG9ydHMuc3VidHJhY3QgPSBleHBvcnRzLmludGVycG9sYXRlID0gZXhwb3J0cy5waXBlID0gZXhwb3J0cy5jb25kaXRpb25hbCA9IGV4cG9ydHMuY2xhbXAgPSBleHBvcnRzLmNsYW1wTWluID0gZXhwb3J0cy5jbGFtcE1heCA9IGV4cG9ydHMuYXBwbHlPZmZzZXQgPSBleHBvcnRzLmFwcGVuZFVuaXQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4vY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3BhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCdmcmFtZXN5bmMnKTtcblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKHYpIHtcbiAgcmV0dXJuIHY7XG59O1xuXG4vKipcbiAqIEFwcGVuZCBVbml0XG4gKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBhcHBlbmRcbiAqIGFwcGVuZFVuaXQoJ3B4JywgMjApIC0+ICcyMHB4J1xuICogQHBhcmFtICB7c3RyaW5nfSB1bml0KVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgYXBwZW5kVW5pdCA9IGV4cG9ydHMuYXBwZW5kVW5pdCA9IGZ1bmN0aW9uIGFwcGVuZFVuaXQodW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gJycgKyB2ICsgdW5pdDtcbiAgfTtcbn07XG5cbi8qKlxuICogQXBwbHkgb2Zmc2V0XG4gKiBBIGZ1bmN0aW9uIHRoYXQsIGdpdmVuIGEgdmFsdWUsIHdpbGwgZ2V0IHRoZSBvZmZzZXQgZnJvbSBgZnJvbWBcbiAqIGFuZCBhcHBseSBpdCB0byBgdG9gXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGZyb21cbiAqIEBwYXJhbSAge251bWJlcn0gdG9cbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG52YXIgYXBwbHlPZmZzZXQgPSBleHBvcnRzLmFwcGx5T2Zmc2V0ID0gZnVuY3Rpb24gYXBwbHlPZmZzZXQoZnJvbSwgdG8pIHtcbiAgdmFyIGdldE9mZnNldCA9IHN1YnRyYWN0KGZyb20pO1xuICB2YXIgYXBwbHlPZmZzZXRUbyA9IGFkZCh0byk7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBhcHBseU9mZnNldFRvKGdldE9mZnNldCh2KSk7XG4gIH07XG59O1xuXG4vKipcbiAqIENsYW1wIHZhbHVlIGJldHdlZW5cbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVzdHJpY3QgYSBnaXZlbiB2YWx1ZSBiZXR3ZWVuIGBtaW5gIGFuZCBgbWF4YFxuICogQHBhcmFtICB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBjbGFtcE1heCA9IGV4cG9ydHMuY2xhbXBNYXggPSBmdW5jdGlvbiBjbGFtcE1heChtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHYsIG1heCk7XG4gIH07XG59O1xudmFyIGNsYW1wTWluID0gZXhwb3J0cy5jbGFtcE1pbiA9IGZ1bmN0aW9uIGNsYW1wTWluKG1pbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgodiwgbWluKTtcbiAgfTtcbn07XG52YXIgY2xhbXAgPSBleHBvcnRzLmNsYW1wID0gZnVuY3Rpb24gY2xhbXAobWluLCBtYXgpIHtcbiAgdmFyIF9taW4gPSBjbGFtcE1pbihtaW4pO1xuICB2YXIgX21heCA9IGNsYW1wTWF4KG1heCk7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBfbWluKF9tYXgodikpO1xuICB9O1xufTtcblxudmFyIGNvbmRpdGlvbmFsID0gZXhwb3J0cy5jb25kaXRpb25hbCA9IGZ1bmN0aW9uIGNvbmRpdGlvbmFsKGNvbmRpdGlvbiwgaWZUcnVlKSB7XG4gIHZhciBpZkZhbHNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBub29wO1xuICByZXR1cm4gZnVuY3Rpb24gKHYsIGFjdGlvbikge1xuICAgIHJldHVybiBjb25kaXRpb24odiwgYWN0aW9uKSA/IGlmVHJ1ZSh2LCBhY3Rpb24pIDogaWZGYWxzZSh2LCBhY3Rpb24pO1xuICB9O1xufTtcblxuLyoqXG4gKiBQaXBlXG4gKiBDb21wb3NlIG90aGVyIHRyYW5zZm9ybWVycyB0byBydW4gbGluZWFyaWx5XG4gKiBwaXBlKG1pbigyMCksIG1heCg0MCkpXG4gKiBAcGFyYW0gIHsuLi5mdW5jdGlvbnN9IHRyYW5zZm9ybWVyc1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbnZhciBwaXBlID0gZXhwb3J0cy5waXBlID0gZnVuY3Rpb24gcGlwZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRyYW5zZm9ybWVycyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHRyYW5zZm9ybWVyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhY2MpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHZhciB2ID0gYWNjO1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXS5hcHBseSh0cmFuc2Zvcm1lcnMsIFt2XS5jb25jYXQoYXJncykpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcblxuLyoqXG4gKiBJbnRlcnBvbGF0ZSBmcm9tIHNldCBvZiB2YWx1ZXMgdG8gYW5vdGhlclxuICogQHBhcmFtICB7QXJyYXl9IGlucHV0IGFycmF5XG4gKiBAcGFyYW0gIHtBcnJheX0gb3V0cHV0XG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gcmFuZ2VFYXNpbmdcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG52YXIgaW50ZXJwb2xhdGUgPSBleHBvcnRzLmludGVycG9sYXRlID0gZnVuY3Rpb24gaW50ZXJwb2xhdGUoaW5wdXQsIG91dHB1dCwgcmFuZ2VFYXNpbmcpIHtcbiAgdmFyIHJhbmdlTGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICB2YXIgZmluYWxJbmRleCA9IHJhbmdlTGVuZ3RoIC0gMTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1pbmltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPD0gaW5wdXRbMF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbMF07XG4gICAgfVxuXG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtYXhpbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2ID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgIH1cblxuICAgIHZhciBpID0gMTtcblxuICAgIC8vIEZpbmQgaW5kZXggb2YgcmFuZ2Ugc3RhcnRcbiAgICBmb3IgKDsgaSA8IHJhbmdlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpbnB1dFtpXSA+IHYgfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJvZ3Jlc3NJblJhbmdlID0gKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbnB1dFtpIC0gMV0sIGlucHV0W2ldLCB2KTtcbiAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IHJhbmdlRWFzaW5nID8gcmFuZ2VFYXNpbmdbaSAtIDFdKHByb2dyZXNzSW5SYW5nZSkgOiBwcm9ncmVzc0luUmFuZ2U7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykob3V0cHV0W2kgLSAxXSwgb3V0cHV0W2ldLCBlYXNlZFByb2dyZXNzKTtcbiAgfTtcbn07XG5cbnZhciBzdWJ0cmFjdCA9IGV4cG9ydHMuc3VidHJhY3QgPSBmdW5jdGlvbiBzdWJ0cmFjdChvcmlnaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYgLSBvcmlnaW47XG4gIH07XG59O1xudmFyIGFkZCA9IGV4cG9ydHMuYWRkID0gZnVuY3Rpb24gYWRkKG9yaWdpbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdiArIG9yaWdpbjtcbiAgfTtcbn07XG52YXIgZGl2aWRlID0gZXhwb3J0cy5kaXZpZGUgPSBmdW5jdGlvbiBkaXZpZGUob3JpZ2luKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2IC8gb3JpZ2luO1xuICB9O1xufTtcbnZhciBtdWx0aXBseSA9IGV4cG9ydHMubXVsdGlwbHkgPSBmdW5jdGlvbiBtdWx0aXBseShvcmlnaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYgKiBvcmlnaW47XG4gIH07XG59O1xuXG52YXIgZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZyA9IGV4cG9ydHMuZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZyA9IGZ1bmN0aW9uIGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcoKSB7XG4gIHZhciBhbHRlckRpc3BsYWNlbWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbm9vcDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb25zdGFudCwgb3JpZ2luKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICB2YXIgZGlzcGxhY2VtZW50ID0gb3JpZ2luIC0gdjtcbiAgICAgIHZhciBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudCA9IC1jb25zdGFudCAqICgwIC0gYWx0ZXJEaXNwbGFjZW1lbnQoTWF0aC5hYnMoZGlzcGxhY2VtZW50KSkpO1xuICAgICAgcmV0dXJuIGRpc3BsYWNlbWVudCA8PSAwID8gb3JpZ2luICsgc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQgOiBvcmlnaW4gLSBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudDtcbiAgICB9O1xuICB9O1xufTtcblxudmFyIHNwcmluZyA9IGV4cG9ydHMuc3ByaW5nID0gZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZygpO1xudmFyIG5vbmxpbmVhclNwcmluZyA9IGV4cG9ydHMubm9ubGluZWFyU3ByaW5nID0gZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZyhNYXRoLnNxcnQpO1xuXG52YXIgd3JhcCA9IGV4cG9ydHMud3JhcCA9IGZ1bmN0aW9uIHdyYXAobWluLCBtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHJhbmdlU2l6ZSA9IG1heCAtIG1pbjtcbiAgICByZXR1cm4gKCh2IC0gbWluKSAlIHJhbmdlU2l6ZSArIHJhbmdlU2l6ZSkgJSByYW5nZVNpemUgKyBtaW47XG4gIH07XG59O1xuXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiBzbW9vdGgoKSB7XG4gIHZhciBzdHJlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogNTA7XG5cbiAgdmFyIHByZXZpb3VzVmFsdWUgPSAwO1xuICB2YXIgbGFzdFVwZGF0ZWQgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciBjdXJyZW50RnJhbWVzdGFtcCA9ICgwLCBfZnJhbWVzeW5jLmN1cnJlbnRGcmFtZVRpbWUpKCk7XG4gICAgdmFyIHRpbWVEZWx0YSA9IGN1cnJlbnRGcmFtZXN0YW1wICE9PSBsYXN0VXBkYXRlZCA/IGN1cnJlbnRGcmFtZXN0YW1wIC0gbGFzdFVwZGF0ZWQgOiAwO1xuICAgIHZhciBuZXdWYWx1ZSA9IHRpbWVEZWx0YSA/ICgwLCBfY2FsYy5zbW9vdGgpKHYsIHByZXZpb3VzVmFsdWUsIHRpbWVEZWx0YSwgc3RyZW5ndGgpIDogcHJldmlvdXNWYWx1ZTtcbiAgICBsYXN0VXBkYXRlZCA9IGN1cnJlbnRGcmFtZXN0YW1wO1xuICAgIHByZXZpb3VzVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICByZXR1cm4gbmV3VmFsdWU7XG4gIH07XG59O1xuXG52YXIgc25hcCA9IGV4cG9ydHMuc25hcCA9IGZ1bmN0aW9uIHNuYXAocG9pbnRzKSB7XG4gIGlmICh0eXBlb2YgcG9pbnRzID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQodiAvIHBvaW50cykgKiBwb2ludHM7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIG51bVBvaW50cyA9IHBvaW50cy5sZW5ndGg7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgIHZhciBsYXN0RGlzdGFuY2UgPSBNYXRoLmFicyhwb2ludHNbMF0gLSB2KTtcblxuICAgICAgZm9yIChpID0gMTsgaSA8IG51bVBvaW50czsgaSsrKSB7XG4gICAgICAgIHZhciBwb2ludCA9IHBvaW50c1tpXTtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5hYnMocG9pbnQgLSB2KTtcblxuICAgICAgICBpZiAoZGlzdGFuY2UgPT09IDApIHJldHVybiBwb2ludDtcblxuICAgICAgICBpZiAoZGlzdGFuY2UgPiBsYXN0RGlzdGFuY2UpIHJldHVybiBwb2ludHNbaSAtIDFdO1xuXG4gICAgICAgIGlmIChpID09PSBudW1Qb2ludHMgLSAxKSByZXR1cm4gcG9pbnQ7XG5cbiAgICAgICAgbGFzdERpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcblxudmFyIHN0ZXBzID0gZXhwb3J0cy5zdGVwcyA9IGZ1bmN0aW9uIHN0ZXBzKF9zdGVwcykge1xuICB2YXIgbWluID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICB2YXIgbWF4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAxO1xuICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAnc3RhcnQnO1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKG1pbiwgbWF4LCB2KTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShtaW4sIG1heCwgKDAsIF9jYWxjLnN0ZXBQcm9ncmVzcykoX3N0ZXBzLCBwcm9ncmVzcywgZGlyZWN0aW9uKSk7XG4gIH07XG59O1xuXG52YXIgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSBleHBvcnRzLnRyYW5zZm9ybUNoaWxkVmFsdWVzID0gZnVuY3Rpb24gdHJhbnNmb3JtQ2hpbGRWYWx1ZXMoY2hpbGRUcmFuc2Zvcm1lcnMpIHtcbiAgdmFyIG11dGFibGVTdGF0ZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdikge1xuICAgICAgdmFyIGNoaWxkVHJhbnNmb3JtZXIgPSBjaGlsZFRyYW5zZm9ybWVyc1trZXldO1xuICAgICAgaWYgKGNoaWxkVHJhbnNmb3JtZXIpIHtcbiAgICAgICAgbXV0YWJsZVN0YXRlW2tleV0gPSBjaGlsZFRyYW5zZm9ybWVyKHZba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG11dGFibGVTdGF0ZTtcbiAgfTtcbn07XG5cbi8vIFVuaXQgdHJhbnNmb3JtZXJzXG52YXIgcGVyY2VudCA9IGV4cG9ydHMucGVyY2VudCA9IGFwcGVuZFVuaXQoJyUnKTtcbnZhciBkZWdyZWVzID0gZXhwb3J0cy5kZWdyZWVzID0gYXBwZW5kVW5pdCgnZGVnJyk7XG52YXIgcHggPSBleHBvcnRzLnB4ID0gYXBwZW5kVW5pdCgncHgnKTtcblxudmFyIHJnYlVuaXQgPSBleHBvcnRzLnJnYlVuaXQgPSBwaXBlKGNsYW1wKDAsIDI1NSksIE1hdGgucm91bmQpO1xuXG52YXIgcmdiYVRlbXBsYXRlID0gZnVuY3Rpb24gcmdiYVRlbXBsYXRlKF9yZWYpIHtcbiAgdmFyIHJlZCA9IF9yZWYucmVkLFxuICAgICAgZ3JlZW4gPSBfcmVmLmdyZWVuLFxuICAgICAgYmx1ZSA9IF9yZWYuYmx1ZSxcbiAgICAgIF9yZWYkYWxwaGEgPSBfcmVmLmFscGhhLFxuICAgICAgYWxwaGEgPSBfcmVmJGFscGhhID09PSB1bmRlZmluZWQgPyAxIDogX3JlZiRhbHBoYTtcbiAgcmV0dXJuICdyZ2JhKCcgKyByZWQgKyAnLCAnICsgZ3JlZW4gKyAnLCAnICsgYmx1ZSArICcsICcgKyBhbHBoYSArICcpJztcbn07XG5cbnZhciByZ2JhID0gZXhwb3J0cy5yZ2JhID0gcGlwZSh0cmFuc2Zvcm1DaGlsZFZhbHVlcyh7XG4gIHJlZDogcmdiVW5pdCxcbiAgZ3JlZW46IHJnYlVuaXQsXG4gIGJsdWU6IHJnYlVuaXQsXG4gIGFscGhhOiBhbHBoYVxufSksIHJnYmFUZW1wbGF0ZSk7XG5cbnZhciBoc2xhVGVtcGxhdGUgPSBmdW5jdGlvbiBoc2xhVGVtcGxhdGUoX3JlZjIpIHtcbiAgdmFyIGh1ZSA9IF9yZWYyLmh1ZSxcbiAgICAgIHNhdHVyYXRpb24gPSBfcmVmMi5zYXR1cmF0aW9uLFxuICAgICAgbGlnaHRuZXNzID0gX3JlZjIubGlnaHRuZXNzLFxuICAgICAgX3JlZjIkYWxwaGEgPSBfcmVmMi5hbHBoYSxcbiAgICAgIGFscGhhID0gX3JlZjIkYWxwaGEgPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmMiRhbHBoYTtcbiAgcmV0dXJuICdoc2xhKCcgKyBodWUgKyAnLCAnICsgc2F0dXJhdGlvbiArICcsICcgKyBsaWdodG5lc3MgKyAnLCAnICsgYWxwaGEgKyAnKSc7XG59O1xuXG52YXIgaHNsYSA9IGV4cG9ydHMuaHNsYSA9IHBpcGUodHJhbnNmb3JtQ2hpbGRWYWx1ZXMoe1xuICBodWU6IHBhcnNlSW50LFxuICBzYXR1cmF0aW9uOiBwZXJjZW50LFxuICBsaWdodG5lc3M6IHBlcmNlbnQsXG4gIGFscGhhOiBhbHBoYVxufSksIGhzbGFUZW1wbGF0ZSk7XG5cbnZhciBjb2xvciA9IGV4cG9ydHMuY29sb3IgPSBmdW5jdGlvbiBjb2xvcih2KSB7XG4gIGlmICh2Lmhhc093blByb3BlcnR5KCdyZWQnKSkge1xuICAgIHJldHVybiByZ2JhKHYpO1xuICB9IGVsc2UgaWYgKHYuaGFzT3duUHJvcGVydHkoJ2h1ZScpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cbiAgcmV0dXJuIHY7XG59O1xuXG52YXIgYWxwaGEgPSBleHBvcnRzLmFscGhhID0gY2xhbXAoMCwgMSk7XG5cbnZhciBibGVuZCA9IGZ1bmN0aW9uIGJsZW5kKGZyb20sIHRvLCB2KSB7XG4gIHZhciBmcm9tRXhwbyA9IGZyb20gKiBmcm9tO1xuICB2YXIgdG9FeHBvID0gdG8gKiB0bztcbiAgcmV0dXJuIE1hdGguc3FydCh2ICogKHRvRXhwbyAtIGZyb21FeHBvKSArIGZyb21FeHBvKTtcbn07XG4vLyBodHRwOi8vY29kZXBlbi5pby9vc3VibGFrZS9wZW4veEdWVmFOXG52YXIgYmxlbmRDb2xvciA9IGV4cG9ydHMuYmxlbmRDb2xvciA9IGZ1bmN0aW9uIGJsZW5kQ29sb3IoZnJvbSwgdG8pIHtcbiAgdmFyIGZyb21Db2xvciA9ICgwLCBfdXRpbHMuaXNTdHJpbmcpKGZyb20pID8gKDAsIF9wYXJzZXJzLmNvbG9yKShmcm9tKSA6IGZyb207XG4gIHZhciB0b0NvbG9yID0gKDAsIF91dGlscy5pc1N0cmluZykodG8pID8gKDAsIF9wYXJzZXJzLmNvbG9yKSh0bykgOiB0bztcblxuICB2YXIgYmxlbmRlZCA9IF9leHRlbmRzKHt9LCBmcm9tQ29sb3IpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGZvciAodmFyIGtleSBpbiBibGVuZGVkKSB7XG4gICAgICBibGVuZGVkW2tleV0gPSBibGVuZChmcm9tQ29sb3Jba2V5XSwgdG9Db2xvcltrZXldLCB2KTtcbiAgICB9XG4gICAgYmxlbmRlZC5yZWQgPSBibGVuZChmcm9tQ29sb3IucmVkLCB0b0NvbG9yLnJlZCwgdik7XG4gICAgYmxlbmRlZC5ncmVlbiA9IGJsZW5kKGZyb21Db2xvci5ncmVlbiwgdG9Db2xvci5ncmVlbiwgdik7XG4gICAgYmxlbmRlZC5ibHVlID0gYmxlbmQoZnJvbUNvbG9yLmJsdWUsIHRvQ29sb3IuYmx1ZSwgdik7XG4gICAgYmxlbmRlZC5hbHBoYSA9ICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZnJvbUNvbG9yLmFscGhhLCB0b0NvbG9yLmFscGhhLCB2KTtcbiAgICByZXR1cm4gYmxlbmRlZDtcbiAgfTtcbn07XG5cbi8vIEJlemllciByZXNvbHZlclxuLy8gUmVmYWN0b3JlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9odWdoc2svYmV6aWVyL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4vKipcbiMjIFRoZSBNSVQgTGljZW5zZSAoTUlUKSAjI1xuXG5Db3B5cmlnaHQgKGMpIDIwMTMgSHVnaCBLZW5uZWR5XG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIHJlc29sdmUzID0gZnVuY3Rpb24gcmVzb2x2ZTMocG9pbnRzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgIHZhciB1dCA9IDEgLSB0O1xuICAgIHJldHVybiAocG9pbnRzWzBdICogdXQgKyBwb2ludHNbMV0gKiB0KSAqIHV0ICsgKHBvaW50c1sxXSAqIHV0ICsgcG9pbnRzWzJdICogdCkgKiB0O1xuICB9O1xufTtcblxudmFyIHJlc29sdmU0ID0gZnVuY3Rpb24gcmVzb2x2ZTQocG9pbnRzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgIHZhciB1dCA9IDEgLSB0O1xuICAgIHZhciBhMSA9IHBvaW50c1sxXSAqIHV0ICsgcG9pbnRzWzJdICogdDtcbiAgICByZXR1cm4gKChwb2ludHNbMF0gKiB1dCArIHBvaW50c1sxXSAqIHQpICogdXQgKyBhMSAqIHQpICogdXQgKyAoYTEgKiB1dCArIChwb2ludHNbMl0gKiB1dCArIHBvaW50c1szXSAqIHQpICogdCkgKiB0O1xuICB9O1xufTtcblxudmFyIGJlemllciA9IGV4cG9ydHMuYmV6aWVyID0gZnVuY3Rpb24gYmV6aWVyKHBvaW50cykge1xuICByZXR1cm4gcG9pbnRzLmxlbmd0aCA9PT0gMyA/IHJlc29sdmUzKHBvaW50cykgOiByZXNvbHZlNChwb2ludHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRISmhibk5tYjNKdFpYSnpMbXB6SWwwc0ltNWhiV1Z6SWpwYkltNXZiM0FpTENKMklpd2lZWEJ3Wlc1a1ZXNXBkQ0lzSW5WdWFYUWlMQ0poY0hCc2VVOW1abk5sZENJc0ltWnliMjBpTENKMGJ5SXNJbWRsZEU5bVpuTmxkQ0lzSW5OMVluUnlZV04wSWl3aVlYQndiSGxQWm1aelpYUlVieUlzSW1Ga1pDSXNJbU5zWVcxd1RXRjRJaXdpYldGNElpd2lUV0YwYUNJc0ltMXBiaUlzSW1Oc1lXMXdUV2x1SWl3aVkyeGhiWEFpTENKZmJXbHVJaXdpWDIxaGVDSXNJbU52Ym1ScGRHbHZibUZzSWl3aVkyOXVaR2wwYVc5dUlpd2lhV1pVY25WbElpd2lhV1pHWVd4elpTSXNJbUZqZEdsdmJpSXNJbkJwY0dVaUxDSjBjbUZ1YzJadmNtMWxjbk1pTENKdWRXMVVjbUZ1YzJadmNtMWxjbk1pTENKc1pXNW5kR2dpTENKcElpd2lZV05qSWl3aVlYSm5jeUlzSW1sdWRHVnljRzlzWVhSbElpd2lhVzV3ZFhRaUxDSnZkWFJ3ZFhRaUxDSnlZVzVuWlVWaGMybHVaeUlzSW5KaGJtZGxUR1Z1WjNSb0lpd2labWx1WVd4SmJtUmxlQ0lzSW5CeWIyZHlaWE56U1c1U1lXNW5aU0lzSW1WaGMyVmtVSEp2WjNKbGMzTWlMQ0p2Y21sbmFXNGlMQ0prYVhacFpHVWlMQ0p0ZFd4MGFYQnNlU0lzSW1kbGJtVnlZWFJsVG05dVNXNTBaWEpuY21GMFpXUlRjSEpwYm1jaUxDSmhiSFJsY2tScGMzQnNZV05sYldWdWRDSXNJbU52Ym5OMFlXNTBJaXdpWkdsemNHeGhZMlZ0Wlc1MElpd2ljM0J5YVc1blRXOWthV1pwWldSRWFYTndiR0ZqWlcxbGJuUWlMQ0poWW5NaUxDSnpjSEpwYm1jaUxDSnViMjVzYVc1bFlYSlRjSEpwYm1jaUxDSnpjWEowSWl3aWQzSmhjQ0lzSW5KaGJtZGxVMmw2WlNJc0luTnRiMjkwYUNJc0luTjBjbVZ1WjNSb0lpd2ljSEpsZG1sdmRYTldZV3gxWlNJc0lteGhjM1JWY0dSaGRHVmtJaXdpWTNWeWNtVnVkRVp5WVcxbGMzUmhiWEFpTENKMGFXMWxSR1ZzZEdFaUxDSnVaWGRXWVd4MVpTSXNJbk51WVhBaUxDSndiMmx1ZEhNaUxDSnliM1Z1WkNJc0ltNTFiVkJ2YVc1MGN5SXNJbXhoYzNSRWFYTjBZVzVqWlNJc0luQnZhVzUwSWl3aVpHbHpkR0Z1WTJVaUxDSnpkR1Z3Y3lJc0ltUnBjbVZqZEdsdmJpSXNJbkJ5YjJkeVpYTnpJaXdpZEhKaGJuTm1iM0p0UTJocGJHUldZV3gxWlhNaUxDSmphR2xzWkZSeVlXNXpabTl5YldWeWN5SXNJbTExZEdGaWJHVlRkR0YwWlNJc0ltdGxlU0lzSW1Ob2FXeGtWSEpoYm5ObWIzSnRaWElpTENKd1pYSmpaVzUwSWl3aVpHVm5jbVZsY3lJc0luQjRJaXdpY21kaVZXNXBkQ0lzSW5KblltRlVaVzF3YkdGMFpTSXNJbkpsWkNJc0ltZHlaV1Z1SWl3aVlteDFaU0lzSW1Gc2NHaGhJaXdpY21kaVlTSXNJbWh6YkdGVVpXMXdiR0YwWlNJc0ltaDFaU0lzSW5OaGRIVnlZWFJwYjI0aUxDSnNhV2RvZEc1bGMzTWlMQ0pvYzJ4aElpd2ljR0Z5YzJWSmJuUWlMQ0pqYjJ4dmNpSXNJbWhoYzA5M2JsQnliM0JsY25SNUlpd2lZbXhsYm1RaUxDSm1jbTl0Ulhod2J5SXNJblJ2Ulhod2J5SXNJbUpzWlc1a1EyOXNiM0lpTENKbWNtOXRRMjlzYjNJaUxDSjBiME52Ykc5eUlpd2lZbXhsYm1SbFpDSXNJbkpsYzI5c2RtVXpJaXdpZENJc0luVjBJaXdpY21WemIyeDJaVFFpTENKaE1TSXNJbUpsZW1sbGNpSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVGQk96dEJRVU5CT3p0QlFVTkJPenRCUVVOQk96dEJRVVZCTEVsQlFVMUJMRTlCUVU4c1UwRkJVRUVzU1VGQlR5eERRVUZEUXl4RFFVRkVPMEZCUVVFc1UwRkJUMEVzUTBGQlVEdEJRVUZCTEVOQlFXSTdPMEZCUlVFN096czdPenM3UVVGUFR5eEpRVUZOUXl4clEwRkJZU3hUUVVGaVFTeFZRVUZoTEVOQlFVTkRMRWxCUVVRN1FVRkJRU3hUUVVGVkxGVkJRVU5HTEVOQlFVUTdRVUZCUVN4blFrRkJWVUVzUTBGQlZpeEhRVUZqUlN4SlFVRmtPMEZCUVVFc1IwRkJWanRCUVVGQkxFTkJRVzVDT3p0QlFVVlFPenM3T3pzN096dEJRVkZQTEVsQlFVMURMRzlEUVVGakxGTkJRV1JCTEZkQlFXTXNRMEZCUTBNc1NVRkJSQ3hGUVVGUFF5eEZRVUZRTEVWQlFXTTdRVUZEZGtNc1RVRkJUVU1zV1VGQldVTXNVMEZCVTBnc1NVRkJWQ3hEUVVGc1FqdEJRVU5CTEUxQlFVMUpMR2RDUVVGblFrTXNTVUZCU1Vvc1JVRkJTaXhEUVVGMFFqdEJRVU5CTEZOQlFVOHNWVUZCUTB3c1EwRkJSRHRCUVVGQkxGZEJRVTlSTEdOQlFXTkdMRlZCUVZWT0xFTkJRVllzUTBGQlpDeERRVUZRTzBGQlFVRXNSMEZCVUR0QlFVTkVMRU5CU2swN08wRkJUVkE3T3pzN096czdRVUZQVHl4SlFVRk5WU3c0UWtGQlZ5eFRRVUZZUVN4UlFVRlhMRU5CUVVORExFZEJRVVE3UVVGQlFTeFRRVUZUTEZWQlFVTllMRU5CUVVRN1FVRkJRU3hYUVVGUFdTeExRVUZMUXl4SFFVRk1MRU5CUVZOaUxFTkJRVlFzUlVGQldWY3NSMEZCV2l4RFFVRlFPMEZCUVVFc1IwRkJWRHRCUVVGQkxFTkJRV3BDTzBGQlEwRXNTVUZCVFVjc09FSkJRVmNzVTBGQldFRXNVVUZCVnl4RFFVRkRSQ3hIUVVGRU8wRkJRVUVzVTBGQlV5eFZRVUZEWWl4RFFVRkVPMEZCUVVFc1YwRkJUMWtzUzBGQlMwUXNSMEZCVEN4RFFVRlRXQ3hEUVVGVUxFVkJRVmxoTEVkQlFWb3NRMEZCVUR0QlFVRkJMRWRCUVZRN1FVRkJRU3hEUVVGcVFqdEJRVU5CTEVsQlFVMUZMSGRDUVVGUkxGTkJRVkpCTEV0QlFWRXNRMEZCUTBZc1IwRkJSQ3hGUVVGTlJpeEhRVUZPTEVWQlFXTTdRVUZEYWtNc1RVRkJUVXNzVDBGQlQwWXNVMEZCVTBRc1IwRkJWQ3hEUVVGaU8wRkJRMEVzVFVGQlRVa3NUMEZCVDFBc1UwRkJVME1zUjBGQlZDeERRVUZpTzBGQlEwRXNVMEZCVHl4VlFVRkRXQ3hEUVVGRU8wRkJRVUVzVjBGQlQyZENMRXRCUVV0RExFdEJRVXRxUWl4RFFVRk1MRU5CUVV3c1EwRkJVRHRCUVVGQkxFZEJRVkE3UVVGRFJDeERRVXBOT3p0QlFVMUJMRWxCUVUxclFpeHZRMEZCWXl4VFFVRmtRU3hYUVVGakxFTkJRVU5ETEZOQlFVUXNSVUZCV1VNc1RVRkJXanRCUVVGQkxFMUJRVzlDUXl4UFFVRndRaXgxUlVGQk9FSjBRaXhKUVVFNVFqdEJRVUZCTEZOQlFYVkRMRlZCUVVORExFTkJRVVFzUlVGQlNYTkNMRTFCUVVvc1JVRkJaVHRCUVVNdlJTeFhRVUZQU0N4VlFVRlZia0lzUTBGQlZpeEZRVUZoYzBJc1RVRkJZaXhKUVVGMVFrWXNUMEZCVDNCQ0xFTkJRVkFzUlVGQlZYTkNMRTFCUVZZc1EwRkJka0lzUjBGQk1rTkVMRkZCUVZGeVFpeERRVUZTTEVWQlFWZHpRaXhOUVVGWUxFTkJRV3hFTzBGQlEwUXNSMEZHTUVJN1FVRkJRU3hEUVVGd1FqczdRVUZKVURzN096czdPenRCUVU5UExFbEJRVTFETEhOQ1FVRlBMRk5CUVZCQkxFbEJRVThzUjBGQmNVSTdRVUZCUVN4dlEwRkJha0pETEZsQlFXbENPMEZCUVdwQ1FTeG5Ra0ZCYVVJN1FVRkJRVHM3UVVGRGRrTXNUVUZCVFVNc2EwSkJRV3RDUkN4aFFVRmhSU3hOUVVGeVF6dEJRVU5CTEUxQlFVbERMRWxCUVVrc1EwRkJVanM3UVVGRlFTeFRRVUZQTEZWQlFVTkRMRWRCUVVRc1JVRkJhMEk3UVVGQlFTeDFRMEZCVkVNc1NVRkJVenRCUVVGVVFTeFZRVUZUTzBGQlFVRTdPMEZCUTNaQ0xGRkJRVWszUWl4SlFVRkpORUlzUjBGQlVqdEJRVU5CTEZOQlFVdEVMRWxCUVVrc1EwRkJWQ3hGUVVGWlFTeEpRVUZKUml4bFFVRm9RaXhGUVVGcFEwVXNSMEZCYWtNc1JVRkJjME03UVVGRGNFTXpRaXhWUVVGSmQwSXNZVUZCWVVjc1EwRkJZaXgxUWtGQlowSXpRaXhEUVVGb1FpeFRRVUZ6UWpaQ0xFbEJRWFJDTEVWQlFVbzdRVUZEUkRzN1FVRkZSQ3hYUVVGUE4wSXNRMEZCVUR0QlFVTkVMRWRCVUVRN1FVRlJSQ3hEUVZwTk96dEJRV05RT3pzN096czdPMEZCVDA4c1NVRkJUVGhDTEc5RFFVRmpMRk5CUVdSQkxGZEJRV01zUTBGQlEwTXNTMEZCUkN4RlFVRlJReXhOUVVGU0xFVkJRV2RDUXl4WFFVRm9RaXhGUVVGblF6dEJRVU42UkN4TlFVRk5ReXhqUVVGalNDeE5RVUZOVEN4TlFVRXhRanRCUVVOQkxFMUJRVTFUTEdGQlFXRkVMR05CUVdNc1EwRkJha003TzBGQlJVRXNVMEZCVHl4VlFVRkRiRU1zUTBGQlJDeEZRVUZQTzBGQlExbzdRVUZEUVN4UlFVRkpRU3hMUVVGTEswSXNUVUZCVFN4RFFVRk9MRU5CUVZRc1JVRkJiVUk3UVVGRGFrSXNZVUZCVDBNc1QwRkJUeXhEUVVGUUxFTkJRVkE3UVVGRFJEczdRVUZGUkR0QlFVTkJMRkZCUVVsb1F5eExRVUZMSzBJc1RVRkJUVWtzVlVGQlRpeERRVUZVTEVWQlFUUkNPMEZCUXpGQ0xHRkJRVTlJTEU5QlFVOUhMRlZCUVZBc1EwRkJVRHRCUVVORU96dEJRVVZFTEZGQlFVbFNMRWxCUVVrc1EwRkJVanM3UVVGRlFUdEJRVU5CTEZkQlFVOUJMRWxCUVVsUExGZEJRVmdzUlVGQmQwSlFMRWRCUVhoQ0xFVkJRVFpDTzBGQlF6TkNMRlZCUVVsSkxFMUJRVTFLTEVOQlFVNHNTVUZCVnpOQ0xFTkJRVmdzU1VGQlowSXlRaXhOUVVGTlVTeFZRVUV4UWl4RlFVRnpRenRCUVVOd1F6dEJRVU5FTzBGQlEwWTdPMEZCUlVRc1VVRkJUVU1zYTBKQlFXdENMR2REUVVGeFFrd3NUVUZCVFVvc1NVRkJTU3hEUVVGV0xFTkJRWEpDTEVWQlFXMURTU3hOUVVGTlNpeERRVUZPTEVOQlFXNURMRVZCUVRaRE0wSXNRMEZCTjBNc1EwRkJlRUk3UVVGRFFTeFJRVUZOY1VNc1owSkJRV2xDU2l4WFFVRkVMRWRCUVdkQ1FTeFpRVUZaVGl4SlFVRkpMRU5CUVdoQ0xFVkJRVzFDVXl4bFFVRnVRaXhEUVVGb1FpeEhRVUZ6UkVFc1pVRkJOVVU3UVVGRFFTeFhRVUZQTEdkRFFVRnhRa29zVDBGQlQwd3NTVUZCU1N4RFFVRllMRU5CUVhKQ0xFVkJRVzlEU3l4UFFVRlBUQ3hEUVVGUUxFTkJRWEJETEVWQlFTdERWU3hoUVVFdlF5eERRVUZRTzBGQlEwUXNSMEYyUWtRN1FVRjNRa1FzUTBFMVFrMDdPMEZCT0VKQkxFbEJRVTA1UWl3NFFrRkJWeXhUUVVGWVFTeFJRVUZYTEVOQlFVTXJRaXhOUVVGRU8wRkJRVUVzVTBGQldTeFZRVUZEZEVNc1EwRkJSRHRCUVVGQkxGZEJRVTlCTEVsQlFVbHpReXhOUVVGWU8wRkJRVUVzUjBGQldqdEJRVUZCTEVOQlFXcENPMEZCUTBFc1NVRkJUVGRDTEc5Q1FVRk5MRk5CUVU1QkxFZEJRVTBzUTBGQlF6WkNMRTFCUVVRN1FVRkJRU3hUUVVGWkxGVkJRVU4wUXl4RFFVRkVPMEZCUVVFc1YwRkJUMEVzU1VGQlNYTkRMRTFCUVZnN1FVRkJRU3hIUVVGYU8wRkJRVUVzUTBGQldqdEJRVU5CTEVsQlFVMURMREJDUVVGVExGTkJRVlJCTEUxQlFWTXNRMEZCUTBRc1RVRkJSRHRCUVVGQkxGTkJRVmtzVlVGQlEzUkRMRU5CUVVRN1FVRkJRU3hYUVVGUFFTeEpRVUZKYzBNc1RVRkJXRHRCUVVGQkxFZEJRVm83UVVGQlFTeERRVUZtTzBGQlEwRXNTVUZCVFVVc09FSkJRVmNzVTBGQldFRXNVVUZCVnl4RFFVRkRSaXhOUVVGRU8wRkJRVUVzVTBGQldTeFZRVUZEZEVNc1EwRkJSRHRCUVVGQkxGZEJRVTlCTEVsQlFVbHpReXhOUVVGWU8wRkJRVUVzUjBGQldqdEJRVUZCTEVOQlFXcENPenRCUVVWQkxFbEJRVTFITEhORlFVRXJRaXhUUVVFdlFrRXNORUpCUVN0Q08wRkJRVUVzVFVGQlEwTXNhVUpCUVVRc2RVVkJRWEZDTTBNc1NVRkJja0k3UVVGQlFTeFRRVUU0UWl4VlFVRkRORU1zVVVGQlJDeEZRVUZYVEN4TlFVRllPMEZCUVVFc1YwRkJjMElzVlVGQlEzUkRMRU5CUVVRc1JVRkJUenRCUVVOeVJ5eFZRVUZOTkVNc1pVRkJaVTRzVTBGQlUzUkRMRU5CUVRsQ08wRkJRMEVzVlVGQlRUWkRMRFpDUVVFMlFpeERRVUZGUml4UlFVRkdMRWxCUVdNc1NVRkJTVVFzYTBKQlFXdENPVUlzUzBGQlMydERMRWRCUVV3c1EwRkJVMFlzV1VGQlZDeERRVUZzUWl4RFFVRnNRaXhEUVVGdVF6dEJRVU5CTEdGQlFWRkJMR2RDUVVGblFpeERRVUZxUWl4SFFVRnpRazRzVTBGQlUwOHNNRUpCUVM5Q0xFZEJRVFJFVUN4VFFVRlRUeXd3UWtGQk5VVTdRVUZEUkN4TFFVcDVSVHRCUVVGQkxFZEJRVGxDTzBGQlFVRXNRMEZCY2tNN08wRkJUVUVzU1VGQlRVVXNNRUpCUVZOT0xEaENRVUZtTzBGQlEwRXNTVUZCVFU4c05FTkJRV3RDVUN3MlFrRkJOa0kzUWl4TFFVRkxjVU1zU1VGQmJFTXNRMEZCZUVJN08wRkJSVUVzU1VGQlRVTXNjMEpCUVU4c1UwRkJVRUVzU1VGQlR5eERRVUZEY2tNc1IwRkJSQ3hGUVVGTlJpeEhRVUZPTzBGQlFVRXNVMEZCWXl4VlFVRkRXQ3hEUVVGRUxFVkJRVTg3UVVGRGRrTXNVVUZCVFcxRUxGbEJRVmw0UXl4TlFVRk5SU3hIUVVGNFFqdEJRVU5CTEZkQlFVOHNRMEZCUXl4RFFVRkRZaXhKUVVGSllTeEhRVUZNTEVsQlFWbHpReXhUUVVGYUxFZEJRWGRDUVN4VFFVRjZRaXhKUVVGelEwRXNVMEZCZEVNc1IwRkJhMFIwUXl4SFFVRjZSRHRCUVVORUxFZEJTRzFDTzBGQlFVRXNRMEZCWWpzN1FVRkxRU3hKUVVGTmRVTXNNRUpCUVZNc1UwRkJWRUVzVFVGQlV5eEhRVUZ0UWp0QlFVRkJMRTFCUVd4Q1F5eFJRVUZyUWl4MVJVRkJVQ3hGUVVGUE96dEJRVU4yUXl4TlFVRkpReXhuUWtGQlowSXNRMEZCY0VJN1FVRkRRU3hOUVVGSlF5eGpRVUZqTEVOQlFXeENPenRCUVVWQkxGTkJRVThzVlVGQlEzWkVMRU5CUVVRc1JVRkJUenRCUVVOYUxGRkJRVTEzUkN4dlFrRkJiMElzYTBOQlFURkNPMEZCUTBFc1VVRkJUVU1zV1VGQllVUXNjMEpCUVhOQ1JDeFhRVUYyUWl4SFFVRnpRME1zYjBKQlFXOUNSQ3hYUVVFeFJDeEhRVUYzUlN4RFFVRXhSanRCUVVOQkxGRkJRVTFITEZkQlFWZEVMRmxCUVZrc2EwSkJRV042UkN4RFFVRmtMRVZCUVdsQ2MwUXNZVUZCYWtJc1JVRkJaME5ITEZOQlFXaERMRVZCUVRKRFNpeFJRVUV6UXl4RFFVRmFMRWRCUVcxRlF5eGhRVUZ3Ump0QlFVTkJReXhyUWtGQlkwTXNhVUpCUVdRN1FVRkRRVVlzYjBKQlFXZENTU3hSUVVGb1FqdEJRVU5CTEZkQlFVOUJMRkZCUVZBN1FVRkRSQ3hIUVZCRU8wRkJVVVFzUTBGYVRUczdRVUZqUVN4SlFVRk5ReXh6UWtGQlR5eFRRVUZRUVN4SlFVRlBMRU5CUVVORExFMUJRVVFzUlVGQldUdEJRVU01UWl4TlFVRkpMRTlCUVU5QkxFMUJRVkFzUzBGQmEwSXNVVUZCZEVJc1JVRkJaME03UVVGRE9VSXNWMEZCVHl4VlFVRkROVVFzUTBGQlJEdEJRVUZCTEdGQlFVOVpMRXRCUVV0cFJDeExRVUZNTEVOQlFWYzNSQ3hKUVVGSk5FUXNUVUZCWml4SlFVRjVRa0VzVFVGQmFFTTdRVUZCUVN4TFFVRlFPMEZCUTBRc1IwRkdSQ3hOUVVWUE8wRkJRMHdzVVVGQlNXcERMRWxCUVVrc1EwRkJVanRCUVVOQkxGRkJRVTF0UXl4WlFVRlpSaXhQUVVGUGJFTXNUVUZCZWtJN08wRkJSVUVzVjBGQlR5eFZRVUZETVVJc1EwRkJSQ3hGUVVGUE8wRkJRMW9zVlVGQlNTdEVMR1ZCUVdWdVJDeExRVUZMYTBNc1IwRkJUQ3hEUVVGVFl5eFBRVUZQTEVOQlFWQXNTVUZCV1RWRUxFTkJRWEpDTEVOQlFXNUNPenRCUVVWQkxGZEJRVXN5UWl4SlFVRkpMRU5CUVZRc1JVRkJXVUVzU1VGQlNXMURMRk5CUVdoQ0xFVkJRVEpDYmtNc1IwRkJNMElzUlVGQlowTTdRVUZET1VJc1dVRkJUWEZETEZGQlFWRktMRTlCUVU5cVF5eERRVUZRTEVOQlFXUTdRVUZEUVN4WlFVRk5jME1zVjBGQlYzSkVMRXRCUVV0clF5eEhRVUZNTEVOQlFWTnJRaXhSUVVGUmFFVXNRMEZCYWtJc1EwRkJha0k3TzBGQlJVRXNXVUZCU1dsRkxHRkJRV0VzUTBGQmFrSXNSVUZCYjBJc1QwRkJUMFFzUzBGQlVEczdRVUZGY0VJc1dVRkJTVU1zVjBGQlYwWXNXVUZCWml4RlFVRTJRaXhQUVVGUFNDeFBRVUZQYWtNc1NVRkJTU3hEUVVGWUxFTkJRVkE3TzBGQlJUZENMRmxCUVVsQkxFMUJRVTF0UXl4WlFVRlpMRU5CUVhSQ0xFVkJRWGxDTEU5QlFVOUZMRXRCUVZBN08wRkJSWHBDUkN4MVFrRkJaVVVzVVVGQlpqdEJRVU5FTzBGQlEwWXNTMEZtUkR0QlFXZENSRHRCUVVOR0xFTkJlRUpOT3p0QlFUQkNRU3hKUVVGTlF5eDNRa0ZCVVN4bFFVRkRRU3hOUVVGRU8wRkJRVUVzVFVGQlVYSkVMRWRCUVZJc2RVVkJRV01zUTBGQlpEdEJRVUZCTEUxQlFXbENSaXhIUVVGcVFpeDFSVUZCZFVJc1EwRkJka0k3UVVGQlFTeE5RVUV3UW5kRUxGTkJRVEZDTEhWRlFVRnpReXhQUVVGMFF6dEJRVUZCTEZOQlFXdEVMRlZCUVVOdVJTeERRVUZFTEVWQlFVODdRVUZETlVVc1VVRkJUVzlGTEZkQlFWY3NaME5CUVhGQ2RrUXNSMEZCY2tJc1JVRkJNRUpHTEVkQlFURkNMRVZCUVN0Q1dDeERRVUV2UWl4RFFVRnFRanRCUVVOQkxGZEJRVThzWjBOQlFYRkNZU3hIUVVGeVFpeEZRVUV3UWtZc1IwRkJNVUlzUlVGQkswSXNkMEpCUVdGMVJDeE5RVUZpTEVWQlFXOUNSU3hSUVVGd1FpeEZRVUU0UWtRc1UwRkJPVUlzUTBGQkwwSXNRMEZCVUR0QlFVTkVMRWRCU0c5Q08wRkJRVUVzUTBGQlpEczdRVUZMUVN4SlFVRk5SU3h6UkVGQmRVSXNVMEZCZGtKQkxHOUNRVUYxUWl4RFFVRkRReXhwUWtGQlJDeEZRVUYxUWp0QlFVTjZSQ3hOUVVGTlF5eGxRVUZsTEVWQlFYSkNPMEZCUTBFc1UwRkJUeXhWUVVGRGRrVXNRMEZCUkN4RlFVRlBPMEZCUTFvc1UwRkJTeXhKUVVGSmQwVXNSMEZCVkN4SlFVRm5RbmhGTEVOQlFXaENMRVZCUVcxQ08wRkJRMnBDTEZWQlFVMTVSU3h0UWtGQmJVSklMR3RDUVVGclFrVXNSMEZCYkVJc1EwRkJla0k3UVVGRFFTeFZRVUZKUXl4blFrRkJTaXhGUVVGelFqdEJRVU53UWtZc2NVSkJRV0ZETEVkQlFXSXNTVUZCYjBKRExHbENRVUZwUW5wRkxFVkJRVVYzUlN4SFFVRkdMRU5CUVdwQ0xFTkJRWEJDTzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3hYUVVGUFJDeFpRVUZRTzBGQlEwUXNSMEZVUkR0QlFWVkVMRU5CV2swN08wRkJZMUE3UVVGRFR5eEpRVUZOUnl3MFFrRkJWWHBGTEZkQlFWY3NSMEZCV0N4RFFVRm9RanRCUVVOQkxFbEJRVTB3UlN3MFFrRkJWVEZGTEZkQlFWY3NTMEZCV0N4RFFVRm9RanRCUVVOQkxFbEJRVTB5UlN4clFrRkJTek5GTEZkQlFWY3NTVUZCV0N4RFFVRllPenRCUVVWQkxFbEJRVTAwUlN3MFFrRkJWWFJFTEV0QlEzSkNVaXhOUVVGTkxFTkJRVTRzUlVGQlV5eEhRVUZVTEVOQlJIRkNMRVZCUlhKQ1NDeExRVUZMYVVRc1MwRkdaMElzUTBGQmFFSTdPMEZCUzFBc1NVRkJUV2xDTEdWQlFXVXNVMEZCWmtFc1dVRkJaVHRCUVVGQkxFMUJRVWRETEVkQlFVZ3NVVUZCUjBFc1IwRkJTRHRCUVVGQkxFMUJRVkZETEV0QlFWSXNVVUZCVVVFc1MwRkJVanRCUVVGQkxFMUJRV1ZETEVsQlFXWXNVVUZCWlVFc1NVRkJaanRCUVVGQkxIZENRVUZ4UWtNc1MwRkJja0k3UVVGQlFTeE5RVUZ4UWtFc1MwRkJja0lzT0VKQlFUWkNMRU5CUVRkQ08wRkJRVUVzYlVKQlExaElMRWRCUkZjc1ZVRkRTRU1zUzBGRVJ5eFZRVU5QUXl4SlFVUlFMRlZCUTJkQ1F5eExRVVJvUWp0QlFVRkJMRU5CUVhKQ096dEJRVWRQTEVsQlFVMURMSE5DUVVGUE5VUXNTMEZEYkVJNFF5eHhRa0ZCY1VJN1FVRkRia0pWTEU5QlFVdEdMRTlCUkdNN1FVRkZia0pITEZOQlFVOUlMRTlCUmxrN1FVRkhia0pKTEZGQlFVMUtMRTlCU0dFN1FVRkpia0pMTzBGQlNtMUNMRU5CUVhKQ0xFTkJSR3RDTEVWQlQyeENTaXhaUVZCclFpeERRVUZpT3p0QlFWVlFMRWxCUVUxTkxHVkJRV1VzVTBGQlprRXNXVUZCWlR0QlFVRkJMRTFCUVVkRExFZEJRVWdzVTBGQlIwRXNSMEZCU0R0QlFVRkJMRTFCUVZGRExGVkJRVklzVTBGQlVVRXNWVUZCVWp0QlFVRkJMRTFCUVc5Q1F5eFRRVUZ3UWl4VFFVRnZRa0VzVTBGQmNFSTdRVUZCUVN3d1FrRkJLMEpNTEV0QlFTOUNPMEZCUVVFc1RVRkJLMEpCTEV0QlFTOUNMQ3RDUVVGMVF5eERRVUYyUXp0QlFVRkJMRzFDUVVOWVJ5eEhRVVJYTEZWQlEwaERMRlZCUkVjc1ZVRkRXVU1zVTBGRVdpeFZRVU13UWt3c1MwRkVNVUk3UVVGQlFTeERRVUZ5UWpzN1FVRkhUeXhKUVVGTlRTeHpRa0ZCVDJwRkxFdEJRMnhDT0VNc2NVSkJRWEZDTzBGQlEyNUNaMElzVDBGQlMwa3NVVUZFWXp0QlFVVnVRa2dzWTBGQldWb3NUMEZHVHp0QlFVZHVRbUVzWVVGQlYySXNUMEZJVVR0QlFVbHVRbEU3UVVGS2JVSXNRMEZCY2tJc1EwRkVhMElzUlVGUGJFSkZMRmxCVUd0Q0xFTkJRV0k3TzBGQlZVRXNTVUZCVFUwc2QwSkJRVkVzVTBGQlVrRXNTMEZCVVN4RFFVRkRNVVlzUTBGQlJDeEZRVUZQTzBGQlF6RkNMRTFCUVVsQkxFVkJRVVV5Uml4alFVRkdMRU5CUVdsQ0xFdEJRV3BDTEVOQlFVb3NSVUZCTmtJN1FVRkRNMElzVjBGQlQxSXNTMEZCUzI1R0xFTkJRVXdzUTBGQlVEdEJRVU5FTEVkQlJrUXNUVUZGVHl4SlFVRkpRU3hGUVVGRk1rWXNZMEZCUml4RFFVRnBRaXhMUVVGcVFpeERRVUZLTEVWQlFUWkNPMEZCUTJ4RExGZEJRVTlJTEV0QlFVdDRSaXhEUVVGTUxFTkJRVkE3UVVGRFJEdEJRVU5FTEZOQlFVOUJMRU5CUVZBN1FVRkRSQ3hEUVZCTk96dEJRVk5CTEVsQlFVMXJSaXgzUWtGQlVXNUZMRTFCUVUwc1EwRkJUaXhGUVVGVExFTkJRVlFzUTBGQlpEczdRVUZGVUN4SlFVRk5Oa1VzVVVGQlVTeFRRVUZTUVN4TFFVRlJMRU5CUVVONFJpeEpRVUZFTEVWQlFVOURMRVZCUVZBc1JVRkJWMHdzUTBGQldDeEZRVUZwUWp0QlFVTTNRaXhOUVVGTk5rWXNWMEZCVjNwR0xFOUJRVTlCTEVsQlFYaENPMEZCUTBFc1RVRkJUVEJHTEZOQlFWTjZSaXhMUVVGTFFTeEZRVUZ3UWp0QlFVTkJMRk5CUVU5UExFdEJRVXR4UXl4SlFVRk1MRU5CUVZWcVJDeExRVUZMT0VZc1UwRkJVMFFzVVVGQlpDeEpRVUV3UWtFc1VVRkJjRU1zUTBGQlVEdEJRVU5FTEVOQlNrUTdRVUZMUVR0QlFVTlBMRWxCUVUxRkxHdERRVUZoTEZOQlFXSkJMRlZCUVdFc1EwRkJRek5HTEVsQlFVUXNSVUZCVDBNc1JVRkJVQ3hGUVVGak8wRkJRM1JETEUxQlFVMHlSaXhaUVVGWkxIRkNRVUZUTlVZc1NVRkJWQ3hKUVVGcFFpeHZRa0ZCVjBFc1NVRkJXQ3hEUVVGcVFpeEhRVUZ2UTBFc1NVRkJkRVE3UVVGRFFTeE5RVUZOTmtZc1ZVRkJWU3h4UWtGQlV6VkdMRVZCUVZRc1NVRkJaU3h2UWtGQlYwRXNSVUZCV0N4RFFVRm1MRWRCUVN0Q1FTeEZRVUV2UXpzN1FVRkZRU3hOUVVGTk5rWXNkVUpCUVdWR0xGTkJRV1lzUTBGQlRqczdRVUZGUVN4VFFVRlBMRlZCUVVOb1J5eERRVUZFTEVWQlFVODdRVUZEV2l4VFFVRkxMRWxCUVVsM1JTeEhRVUZVTEVsQlFXZENNRUlzVDBGQmFFSXNSVUZCZVVJN1FVRkRka0pCTEdOQlFWRXhRaXhIUVVGU0xFbEJRV1Z2UWl4TlFVRk5TU3hWUVVGVmVFSXNSMEZCVml4RFFVRk9MRVZCUVhOQ2VVSXNVVUZCVVhwQ0xFZEJRVklzUTBGQmRFSXNSVUZCYjBONFJTeERRVUZ3UXl4RFFVRm1PMEZCUTBRN1FVRkRSR3RITEZsQlFWRnVRaXhIUVVGU0xFZEJRV05oTEUxQlFVMUpMRlZCUVZWcVFpeEhRVUZvUWl4RlFVRnhRbXRDTEZGQlFWRnNRaXhIUVVFM1FpeEZRVUZyUXk5RkxFTkJRV3hETEVOQlFXUTdRVUZEUVd0SExGbEJRVkZzUWl4TFFVRlNMRWRCUVdkQ1dTeE5RVUZOU1N4VlFVRlZhRUlzUzBGQmFFSXNSVUZCZFVKcFFpeFJRVUZSYWtJc1MwRkJMMElzUlVGQmMwTm9SaXhEUVVGMFF5eERRVUZvUWp0QlFVTkJhMGNzV1VGQlVXcENMRWxCUVZJc1IwRkJaVmNzVFVGQlRVa3NWVUZCVldZc1NVRkJhRUlzUlVGQmMwSm5RaXhSUVVGUmFFSXNTVUZCT1VJc1JVRkJiME5xUml4RFFVRndReXhEUVVGbU8wRkJRMEZyUnl4WlFVRlJhRUlzUzBGQlVpeEhRVUZuUWl4blEwRkJjVUpqTEZWQlFWVmtMRXRCUVM5Q0xFVkJRWE5EWlN4UlFVRlJaaXhMUVVFNVF5eEZRVUZ4Ukd4R0xFTkJRWEpFTEVOQlFXaENPMEZCUTBFc1YwRkJUMnRITEU5QlFWQTdRVUZEUkN4SFFWUkVPMEZCVlVRc1EwRm9RazA3TzBGQmEwSlFPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRjFRa0VzU1VGQlRVTXNWMEZCVnl4VFFVRllRU3hSUVVGWExFTkJRVU4yUXl4TlFVRkVPMEZCUVVFc1UwRkJXU3hWUVVGRGQwTXNRMEZCUkN4RlFVRlBPMEZCUTJ4RExGRkJRVTFETEV0QlFVc3NTVUZCU1VRc1EwRkJaanRCUVVOQkxGZEJRVThzUTBGQlEzaERMRTlCUVU4c1EwRkJVQ3hKUVVGWmVVTXNSVUZCV2l4SFFVRnBRbnBETEU5QlFVOHNRMEZCVUN4SlFVRlpkME1zUTBGQk9VSXNTVUZCYlVORExFVkJRVzVETEVkQlFYZERMRU5CUVVONlF5eFBRVUZQTEVOQlFWQXNTVUZCV1hsRExFVkJRVm9zUjBGQmFVSjZReXhQUVVGUExFTkJRVkFzU1VGQldYZERMRU5CUVRsQ0xFbEJRVzFEUVN4RFFVRnNSanRCUVVORUxFZEJTR2RDTzBGQlFVRXNRMEZCYWtJN08wRkJTMEVzU1VGQlRVVXNWMEZCVnl4VFFVRllRU3hSUVVGWExFTkJRVU14UXl4TlFVRkVPMEZCUVVFc1UwRkJXU3hWUVVGRGQwTXNRMEZCUkN4RlFVRlBPMEZCUTJ4RExGRkJRVTFETEV0QlFVc3NTVUZCU1VRc1EwRkJaanRCUVVOQkxGRkJRVTFITEV0QlFVc3pReXhQUVVGUExFTkJRVkFzU1VGQldYbERMRVZCUVZvc1IwRkJhVUo2UXl4UFFVRlBMRU5CUVZBc1NVRkJXWGRETEVOQlFYaERPMEZCUTBFc1YwRkJUeXhEUVVGRExFTkJRVU40UXl4UFFVRlBMRU5CUVZBc1NVRkJXWGxETEVWQlFWb3NSMEZCYVVKNlF5eFBRVUZQTEVOQlFWQXNTVUZCV1hkRExFTkJRVGxDTEVsQlFXMURReXhGUVVGdVF5eEhRVUYzUTBVc1MwRkJTMGdzUTBGQk9VTXNTVUZCYlVSRExFVkJRVzVFTEVkQlFYZEVMRU5CUVVORkxFdEJRVXRHTEVWQlFVd3NSMEZCVlN4RFFVRkRla01zVDBGQlR5eERRVUZRTEVsQlFWbDVReXhGUVVGYUxFZEJRV2xDZWtNc1QwRkJUeXhEUVVGUUxFbEJRVmwzUXl4RFFVRTVRaXhKUVVGdFEwRXNRMEZCT1VNc1NVRkJiVVJCTEVOQlFXeElPMEZCUTBRc1IwRktaMEk3UVVGQlFTeERRVUZxUWpzN1FVRk5UeXhKUVVGTlNTd3dRa0ZCVXl4VFFVRlVRU3hOUVVGVExFTkJRVU0xUXl4TlFVRkVPMEZCUVVFc1UwRkRia0pCTEU5QlFVOXNReXhOUVVGUUxFdEJRV3RDTEVOQlFXNUNMRWRCUVhkQ2VVVXNVMEZCVTNaRExFMUJRVlFzUTBGQmVFSXNSMEZCTWtNd1F5eFRRVUZUTVVNc1RVRkJWQ3hEUVVSMlFqdEJRVUZCTEVOQlFXWWlMQ0ptYVd4bElqb2lkSEpoYm5ObWIzSnRaWEp6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVc0lHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpMQ0J6ZEdWd1VISnZaM0psYzNNc0lITnRiMjkwYUNCaGN5QmpZV3hqVTIxdmIzUm9hVzVuSUgwZ1puSnZiU0FuTGk5allXeGpKenRjYm1sdGNHOXlkQ0I3SUdselUzUnlhVzVuSUgwZ1puSnZiU0FuTGk5MWRHbHNjeWM3WEc1cGJYQnZjblFnZXlCamIyeHZjaUJoY3lCd1lYSnpaVU52Ykc5eUlIMGdabkp2YlNBbkxpOXdZWEp6WlhKekp6dGNibWx0Y0c5eWRDQjdJR04xY25KbGJuUkdjbUZ0WlZScGJXVWdmU0JtY205dElDZG1jbUZ0WlhONWJtTW5PMXh1WEc1amIyNXpkQ0J1YjI5d0lEMGdLSFlwSUQwK0lIWTdYRzVjYmk4cUtseHVJQ29nUVhCd1pXNWtJRlZ1YVhSY2JpQXFJRUVnWm5WdVkzUnBiMjRnZEdoaGRDQjNhV3hzSUdGd2NHVnVaRnh1SUNvZ1lYQndaVzVrVlc1cGRDZ25jSGduTENBeU1Da2dMVDRnSnpJd2NIZ25YRzRnS2lCQWNHRnlZVzBnSUh0emRISnBibWQ5SUhWdWFYUXBYRzRnS2lCQWNtVjBkWEp1SUh0dWRXMWlaWEo5WEc0Z0tpOWNibVY0Y0c5eWRDQmpiMjV6ZENCaGNIQmxibVJWYm1sMElEMGdLSFZ1YVhRcElEMCtJQ2gyS1NBOVBpQmdKSHQyZlNSN2RXNXBkSDFnTzF4dVhHNHZLaXBjYmlBcUlFRndjR3g1SUc5bVpuTmxkRnh1SUNvZ1FTQm1kVzVqZEdsdmJpQjBhR0YwTENCbmFYWmxiaUJoSUhaaGJIVmxMQ0IzYVd4c0lHZGxkQ0IwYUdVZ2IyWm1jMlYwSUdaeWIyMGdZR1p5YjIxZ1hHNGdLaUJoYm1RZ1lYQndiSGtnYVhRZ2RHOGdZSFJ2WUZ4dUlDb2dRSEJoY21GdElDQjdiblZ0WW1WeWZTQm1jbTl0WEc0Z0tpQkFjR0Z5WVcwZ0lIdHVkVzFpWlhKOUlIUnZYRzRnS2lCQWNtVjBkWEp1SUh0bWRXNWpkR2x2Ym4xY2JpQXFMMXh1Wlhod2IzSjBJR052Ym5OMElHRndjR3g1VDJabWMyVjBJRDBnS0daeWIyMHNJSFJ2S1NBOVBpQjdYRzRnSUdOdmJuTjBJR2RsZEU5bVpuTmxkQ0E5SUhOMVluUnlZV04wS0daeWIyMHBPMXh1SUNCamIyNXpkQ0JoY0hCc2VVOW1abk5sZEZSdklEMGdZV1JrS0hSdktUdGNiaUFnY21WMGRYSnVJQ2gyS1NBOVBpQmhjSEJzZVU5bVpuTmxkRlJ2S0dkbGRFOW1abk5sZENoMktTazdYRzU5TzF4dVhHNHZLaXBjYmlBcUlFTnNZVzF3SUhaaGJIVmxJR0psZEhkbFpXNWNiaUFxSUVOeVpXRjBaWE1nWVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z2NtVnpkSEpwWTNRZ1lTQm5hWFpsYmlCMllXeDFaU0JpWlhSM1pXVnVJR0J0YVc1Z0lHRnVaQ0JnYldGNFlGeHVJQ29nUUhCaGNtRnRJQ0I3Ym5WdFltVnlmU0J0YVc1Y2JpQXFJRUJ3WVhKaGJTQWdlMjUxYldKbGNuMGdiV0Y0WEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOVhHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpiR0Z0Y0UxaGVDQTlJQ2h0WVhncElEMCtJQ2gyS1NBOVBpQk5ZWFJvTG0xcGJpaDJMQ0J0WVhncE8xeHVaWGh3YjNKMElHTnZibk4wSUdOc1lXMXdUV2x1SUQwZ0tHMXBiaWtnUFQ0Z0tIWXBJRDArSUUxaGRHZ3ViV0Y0S0hZc0lHMXBiaWs3WEc1bGVIQnZjblFnWTI5dWMzUWdZMnhoYlhBZ1BTQW9iV2x1TENCdFlYZ3BJRDArSUh0Y2JpQWdZMjl1YzNRZ1gyMXBiaUE5SUdOc1lXMXdUV2x1S0cxcGJpazdYRzRnSUdOdmJuTjBJRjl0WVhnZ1BTQmpiR0Z0Y0UxaGVDaHRZWGdwTzF4dUlDQnlaWFIxY200Z0tIWXBJRDArSUY5dGFXNG9YMjFoZUNoMktTazdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTI5dVpHbDBhVzl1WVd3Z1BTQW9ZMjl1WkdsMGFXOXVMQ0JwWmxSeWRXVXNJR2xtUm1Gc2MyVWdQU0J1YjI5d0tTQTlQaUFvZGl3Z1lXTjBhVzl1S1NBOVBpQjdYRzRnSUhKbGRIVnliaUJqYjI1a2FYUnBiMjRvZGl3Z1lXTjBhVzl1S1NBL0lHbG1WSEoxWlNoMkxDQmhZM1JwYjI0cElEb2dhV1pHWVd4elpTaDJMQ0JoWTNScGIyNHBPMXh1ZlR0Y2JseHVMeW9xWEc0Z0tpQlFhWEJsWEc0Z0tpQkRiMjF3YjNObElHOTBhR1Z5SUhSeVlXNXpabTl5YldWeWN5QjBieUJ5ZFc0Z2JHbHVaV0Z5YVd4NVhHNGdLaUJ3YVhCbEtHMXBiaWd5TUNrc0lHMWhlQ2cwTUNrcFhHNGdLaUJBY0dGeVlXMGdJSHN1TGk1bWRXNWpkR2x2Ym5OOUlIUnlZVzV6Wm05eWJXVnljMXh1SUNvZ1FISmxkSFZ5YmlCN1puVnVZM1JwYjI1OVhHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQndhWEJsSUQwZ0tDNHVMblJ5WVc1elptOXliV1Z5Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0J1ZFcxVWNtRnVjMlp2Y20xbGNuTWdQU0IwY21GdWMyWnZjbTFsY25NdWJHVnVaM1JvTzF4dUlDQnNaWFFnYVNBOUlEQTdYRzVjYmlBZ2NtVjBkWEp1SUNoaFkyTXNJQzR1TG1GeVozTXBJRDArSUh0Y2JpQWdJQ0JzWlhRZ2RpQTlJR0ZqWXp0Y2JpQWdJQ0JtYjNJZ0tHa2dQU0F3T3lCcElEd2diblZ0VkhKaGJuTm1iM0p0WlhKek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUhZZ1BTQjBjbUZ1YzJadmNtMWxjbk5iYVYwb2Rpd2dMaTR1WVhKbmN5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhZN1hHNGdJSDA3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRWx1ZEdWeWNHOXNZWFJsSUdaeWIyMGdjMlYwSUc5bUlIWmhiSFZsY3lCMGJ5QmhibTkwYUdWeVhHNGdLaUJBY0dGeVlXMGdJSHRCY25KaGVYMGdhVzV3ZFhRZ1lYSnlZWGxjYmlBcUlFQndZWEpoYlNBZ2UwRnljbUY1ZlNCdmRYUndkWFJjYmlBcUlFQndZWEpoYlNBZ2UwWjFibU4wYVc5dWZTQnlZVzVuWlVWaGMybHVaMXh1SUNvZ1FISmxkSFZ5YmlCN1JuVnVZM1JwYjI1OVhHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBiblJsY25CdmJHRjBaU0E5SUNocGJuQjFkQ3dnYjNWMGNIVjBMQ0J5WVc1blpVVmhjMmx1WnlrZ1BUNGdlMXh1SUNCamIyNXpkQ0J5WVc1blpVeGxibWQwYUNBOUlHbHVjSFYwTG14bGJtZDBhRHRjYmlBZ1kyOXVjM1FnWm1sdVlXeEpibVJsZUNBOUlISmhibWRsVEdWdVozUm9JQzBnTVR0Y2JseHVJQ0J5WlhSMWNtNGdLSFlwSUQwK0lIdGNiaUFnSUNBdkx5QkpaaUIyWVd4MVpTQnZkWFJ6YVdSbElHMXBibWx0ZFcwZ2NtRnVaMlVzSUhGMWFXTnJiSGtnY21WMGRYSnVYRzRnSUNBZ2FXWWdLSFlnUEQwZ2FXNXdkWFJiTUYwcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCdmRYUndkWFJiTUYwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1NXWWdkbUZzZFdVZ2IzVjBjMmxrWlNCdFlYaHBiWFZ0SUhKaGJtZGxMQ0J4ZFdsamEyeDVJSEpsZEhWeWJseHVJQ0FnSUdsbUlDaDJJRDQ5SUdsdWNIVjBXMlpwYm1Gc1NXNWtaWGhkS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYjNWMGNIVjBXMlpwYm1Gc1NXNWtaWGhkTzF4dUlDQWdJSDFjYmx4dUlDQWdJR3hsZENCcElEMGdNVHRjYmx4dUlDQWdJQzh2SUVacGJtUWdhVzVrWlhnZ2IyWWdjbUZ1WjJVZ2MzUmhjblJjYmlBZ0lDQm1iM0lnS0RzZ2FTQThJSEpoYm1kbFRHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJR2xtSUNocGJuQjFkRnRwWFNBK0lIWWdmSHdnYVNBOVBUMGdabWx1WVd4SmJtUmxlQ2tnZTF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQmpiMjV6ZENCd2NtOW5jbVZ6YzBsdVVtRnVaMlVnUFNCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTaHBibkIxZEZ0cElDMGdNVjBzSUdsdWNIVjBXMmxkTENCMktUdGNiaUFnSUNCamIyNXpkQ0JsWVhObFpGQnliMmR5WlhOeklEMGdLSEpoYm1kbFJXRnphVzVuS1NBL0lISmhibWRsUldGemFXNW5XMmtnTFNBeFhTaHdjbTluY21WemMwbHVVbUZ1WjJVcElEb2djSEp2WjNKbGMzTkpibEpoYm1kbE8xeHVJQ0FnSUhKbGRIVnliaUJuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lodmRYUndkWFJiYVNBdElERmRMQ0J2ZFhSd2RYUmJhVjBzSUdWaGMyVmtVSEp2WjNKbGMzTXBPMXh1SUNCOU8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSE4xWW5SeVlXTjBJRDBnS0c5eWFXZHBiaWtnUFQ0Z0tIWXBJRDArSUhZZ0xTQnZjbWxuYVc0N1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWVdSa0lEMGdLRzl5YVdkcGJpa2dQVDRnS0hZcElEMCtJSFlnS3lCdmNtbG5hVzQ3WEc1bGVIQnZjblFnWTI5dWMzUWdaR2wyYVdSbElEMGdLRzl5YVdkcGJpa2dQVDRnS0hZcElEMCtJSFlnTHlCdmNtbG5hVzQ3WEc1bGVIQnZjblFnWTI5dWMzUWdiWFZzZEdsd2JIa2dQU0FvYjNKcFoybHVLU0E5UGlBb2Rpa2dQVDRnZGlBcUlHOXlhV2RwYmp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdkbGJtVnlZWFJsVG05dVNXNTBaWEpuY21GMFpXUlRjSEpwYm1jZ1BTQW9ZV3gwWlhKRWFYTndiR0ZqWlcxbGJuUWdQU0J1YjI5d0tTQTlQaUFvWTI5dWMzUmhiblFzSUc5eWFXZHBiaWtnUFQ0Z0tIWXBJRDArSUh0Y2JpQWdZMjl1YzNRZ1pHbHpjR3hoWTJWdFpXNTBJRDBnYjNKcFoybHVJQzBnZGp0Y2JpQWdZMjl1YzNRZ2MzQnlhVzVuVFc5a2FXWnBaV1JFYVhOd2JHRmpaVzFsYm5RZ1BTQXRJR052Ym5OMFlXNTBJQ29nS0RBZ0xTQmhiSFJsY2tScGMzQnNZV05sYldWdWRDaE5ZWFJvTG1GaWN5aGthWE53YkdGalpXMWxiblFwS1NrN1hHNGdJSEpsZEhWeWJpQW9aR2x6Y0d4aFkyVnRaVzUwSUR3OUlEQXBJRDhnYjNKcFoybHVJQ3NnYzNCeWFXNW5UVzlrYVdacFpXUkVhWE53YkdGalpXMWxiblFnT2lCdmNtbG5hVzRnTFNCemNISnBibWROYjJScFptbGxaRVJwYzNCc1lXTmxiV1Z1ZER0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnpjSEpwYm1jZ1BTQm5aVzVsY21GMFpVNXZia2x1ZEdWeVozSmhkR1ZrVTNCeWFXNW5LQ2s3WEc1bGVIQnZjblFnWTI5dWMzUWdibTl1YkdsdVpXRnlVM0J5YVc1bklEMGdaMlZ1WlhKaGRHVk9iMjVKYm5SbGNtZHlZWFJsWkZOd2NtbHVaeWhOWVhSb0xuTnhjblFwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnZDNKaGNDQTlJQ2h0YVc0c0lHMWhlQ2tnUFQ0Z0tIWXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2NtRnVaMlZUYVhwbElEMGdiV0Y0SUMwZ2JXbHVPMXh1SUNCeVpYUjFjbTRnS0NoMklDMGdiV2x1S1NBbElISmhibWRsVTJsNlpTQXJJSEpoYm1kbFUybDZaU2tnSlNCeVlXNW5aVk5wZW1VZ0t5QnRhVzQ3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2MyMXZiM1JvSUQwZ0tITjBjbVZ1WjNSb0lEMGdOVEFwSUQwK0lIdGNiaUFnYkdWMElIQnlaWFpwYjNWelZtRnNkV1VnUFNBd08xeHVJQ0JzWlhRZ2JHRnpkRlZ3WkdGMFpXUWdQU0F3TzF4dVhHNGdJSEpsZEhWeWJpQW9kaWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdJRDBnWTNWeWNtVnVkRVp5WVcxbFZHbHRaU2dwTzF4dUlDQWdJR052Ym5OMElIUnBiV1ZFWld4MFlTQTlJQ2hqZFhKeVpXNTBSbkpoYldWemRHRnRjQ0FoUFQwZ2JHRnpkRlZ3WkdGMFpXUXBJRDhnWTNWeWNtVnVkRVp5WVcxbGMzUmhiWEFnTFNCc1lYTjBWWEJrWVhSbFpDQTZJREE3WEc0Z0lDQWdZMjl1YzNRZ2JtVjNWbUZzZFdVZ1BTQjBhVzFsUkdWc2RHRWdQeUJqWVd4alUyMXZiM1JvYVc1bktIWXNJSEJ5WlhacGIzVnpWbUZzZFdVc0lIUnBiV1ZFWld4MFlTd2djM1J5Wlc1bmRHZ3BJRG9nY0hKbGRtbHZkWE5XWVd4MVpUdGNiaUFnSUNCc1lYTjBWWEJrWVhSbFpDQTlJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdPMXh1SUNBZ0lIQnlaWFpwYjNWelZtRnNkV1VnUFNCdVpYZFdZV3gxWlR0Y2JpQWdJQ0J5WlhSMWNtNGdibVYzVm1Gc2RXVTdYRzRnSUgwN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjMjVoY0NBOUlDaHdiMmx1ZEhNcElEMCtJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQndiMmx1ZEhNZ1BUMDlJQ2R1ZFcxaVpYSW5LU0I3WEc0Z0lDQWdjbVYwZFhKdUlDaDJLU0E5UGlCTllYUm9Mbkp2ZFc1a0tIWWdMeUJ3YjJsdWRITXBJQ29nY0c5cGJuUnpPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJR3hsZENCcElEMGdNRHRjYmlBZ0lDQmpiMjV6ZENCdWRXMVFiMmx1ZEhNZ1BTQndiMmx1ZEhNdWJHVnVaM1JvTzF4dVhHNGdJQ0FnY21WMGRYSnVJQ2gyS1NBOVBpQjdYRzRnSUNBZ0lDQnNaWFFnYkdGemRFUnBjM1JoYm1ObElEMGdUV0YwYUM1aFluTW9jRzlwYm5Seld6QmRJQzBnZGlrN1hHNWNiaUFnSUNBZ0lHWnZjaUFvYVNBOUlERTdJR2tnUENCdWRXMVFiMmx1ZEhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J3YjJsdWRDQTlJSEJ2YVc1MGMxdHBYVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdaR2x6ZEdGdVkyVWdQU0JOWVhSb0xtRmljeWh3YjJsdWRDQXRJSFlwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hrYVhOMFlXNWpaU0E5UFQwZ01Da2djbVYwZFhKdUlIQnZhVzUwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hrYVhOMFlXNWpaU0ErSUd4aGMzUkVhWE4wWVc1alpTa2djbVYwZFhKdUlIQnZhVzUwYzF0cElDMGdNVjA3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR2tnUFQwOUlHNTFiVkJ2YVc1MGN5QXRJREVwSUhKbGRIVnliaUJ3YjJsdWREdGNibHh1SUNBZ0lDQWdJQ0JzWVhOMFJHbHpkR0Z1WTJVZ1BTQmthWE4wWVc1alpUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOU8xeHVJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzUmxjSE1nUFNBb2MzUmxjSE1zSUcxcGJpQTlJREFzSUcxaGVDQTlJREVzSUdScGNtVmpkR2x2YmlBOUlDZHpkR0Z5ZENjcElEMCtJQ2gyS1NBOVBpQjdYRzRnSUdOdmJuTjBJSEJ5YjJkeVpYTnpJRDBnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb2JXbHVMQ0J0WVhnc0lIWXBPMXh1SUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb2JXbHVMQ0J0WVhnc0lITjBaWEJRY205bmNtVnpjeWh6ZEdWd2N5d2djSEp2WjNKbGMzTXNJR1JwY21WamRHbHZiaWtwTzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElIUnlZVzV6Wm05eWJVTm9hV3hrVm1Gc2RXVnpJRDBnS0dOb2FXeGtWSEpoYm5ObWIzSnRaWEp6S1NBOVBpQjdYRzRnSUdOdmJuTjBJRzExZEdGaWJHVlRkR0YwWlNBOUlIdDlPMXh1SUNCeVpYUjFjbTRnS0hZcElEMCtJSHRjYmlBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2Rpa2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ1kyaHBiR1JVY21GdWMyWnZjbTFsY2lBOUlHTm9hV3hrVkhKaGJuTm1iM0p0WlhKelcydGxlVjA3WEc0Z0lDQWdJQ0JwWmlBb1kyaHBiR1JVY21GdWMyWnZjbTFsY2lrZ2UxeHVJQ0FnSUNBZ0lDQnRkWFJoWW14bFUzUmhkR1ZiYTJWNVhTQTlJR05vYVd4a1ZISmhibk5tYjNKdFpYSW9kbHRyWlhsZEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnYlhWMFlXSnNaVk4wWVhSbE8xeHVJQ0I5TzF4dWZUdGNibHh1THk4Z1ZXNXBkQ0IwY21GdWMyWnZjbTFsY25OY2JtVjRjRzl5ZENCamIyNXpkQ0J3WlhKalpXNTBJRDBnWVhCd1pXNWtWVzVwZENnbkpTY3BPMXh1Wlhod2IzSjBJR052Ym5OMElHUmxaM0psWlhNZ1BTQmhjSEJsYm1SVmJtbDBLQ2RrWldjbktUdGNibVY0Y0c5eWRDQmpiMjV6ZENCd2VDQTlJR0Z3Y0dWdVpGVnVhWFFvSjNCNEp5azdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnlaMkpWYm1sMElEMGdjR2x3WlNoY2JpQWdZMnhoYlhBb01Dd2dNalUxS1N4Y2JpQWdUV0YwYUM1eWIzVnVaRnh1S1R0Y2JseHVZMjl1YzNRZ2NtZGlZVlJsYlhCc1lYUmxJRDBnS0hzZ2NtVmtMQ0JuY21WbGJpd2dZbXgxWlN3Z1lXeHdhR0VnUFNBeElIMHBJRDArWEc0Z0lHQnlaMkpoS0NSN2NtVmtmU3dnSkh0bmNtVmxibjBzSUNSN1lteDFaWDBzSUNSN1lXeHdhR0Y5S1dBN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCeVoySmhJRDBnY0dsd1pTaGNiaUFnZEhKaGJuTm1iM0p0UTJocGJHUldZV3gxWlhNb2UxeHVJQ0FnSUhKbFpEb2djbWRpVlc1cGRDeGNiaUFnSUNCbmNtVmxiam9nY21kaVZXNXBkQ3hjYmlBZ0lDQmliSFZsT2lCeVoySlZibWwwTEZ4dUlDQWdJR0ZzY0doaFhHNGdJSDBwTEZ4dUlDQnlaMkpoVkdWdGNHeGhkR1ZjYmlrN1hHNWNibU52Ym5OMElHaHpiR0ZVWlcxd2JHRjBaU0E5SUNoN0lHaDFaU3dnYzJGMGRYSmhkR2x2Yml3Z2JHbG5hSFJ1WlhOekxDQmhiSEJvWVNBOUlERWdmU2tnUFQ1Y2JpQWdZR2h6YkdFb0pIdG9kV1Y5TENBa2UzTmhkSFZ5WVhScGIyNTlMQ0FrZTJ4cFoyaDBibVZ6YzMwc0lDUjdZV3h3YUdGOUtXQTdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQm9jMnhoSUQwZ2NHbHdaU2hjYmlBZ2RISmhibk5tYjNKdFEyaHBiR1JXWVd4MVpYTW9lMXh1SUNBZ0lHaDFaVG9nY0dGeWMyVkpiblFzWEc0Z0lDQWdjMkYwZFhKaGRHbHZiam9nY0dWeVkyVnVkQ3hjYmlBZ0lDQnNhV2RvZEc1bGMzTTZJSEJsY21ObGJuUXNYRzRnSUNBZ1lXeHdhR0ZjYmlBZ2ZTa3NYRzRnSUdoemJHRlVaVzF3YkdGMFpWeHVLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR052Ykc5eUlEMGdLSFlwSUQwK0lIdGNiaUFnYVdZZ0tIWXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb0ozSmxaQ2NwS1NCN1hHNGdJQ0FnY21WMGRYSnVJSEpuWW1Fb2RpazdYRzRnSUgwZ1pXeHpaU0JwWmlBb2RpNW9ZWE5QZDI1UWNtOXdaWEowZVNnbmFIVmxKeWtwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdhSE5zWVNoMktUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z2RqdGNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JoYkhCb1lTQTlJR05zWVcxd0tEQXNJREVwTzF4dVhHNWpiMjV6ZENCaWJHVnVaQ0E5SUNobWNtOXRMQ0IwYnl3Z2Rpa2dQVDRnZTF4dUlDQmpiMjV6ZENCbWNtOXRSWGh3YnlBOUlHWnliMjBnS2lCbWNtOXRPMXh1SUNCamIyNXpkQ0IwYjBWNGNHOGdQU0IwYnlBcUlIUnZPMXh1SUNCeVpYUjFjbTRnVFdGMGFDNXpjWEowS0hZZ0tpQW9kRzlGZUhCdklDMGdabkp2YlVWNGNHOHBJQ3NnWm5KdmJVVjRjRzhwTzF4dWZUdGNiaTh2SUdoMGRIQTZMeTlqYjJSbGNHVnVMbWx2TDI5emRXSnNZV3RsTDNCbGJpOTRSMVpXWVU1Y2JtVjRjRzl5ZENCamIyNXpkQ0JpYkdWdVpFTnZiRzl5SUQwZ0tHWnliMjBzSUhSdktTQTlQaUI3WEc0Z0lHTnZibk4wSUdaeWIyMURiMnh2Y2lBOUlHbHpVM1J5YVc1bktHWnliMjBwSUQ4Z2NHRnljMlZEYjJ4dmNpaG1jbTl0S1NBNklHWnliMjA3WEc0Z0lHTnZibk4wSUhSdlEyOXNiM0lnUFNCcGMxTjBjbWx1WnloMGJ5a2dQeUJ3WVhKelpVTnZiRzl5S0hSdktUb2dkRzg3WEc1Y2JpQWdZMjl1YzNRZ1lteGxibVJsWkNBOUlIc2dMaTR1Wm5KdmJVTnZiRzl5SUgwN1hHNWNiaUFnY21WMGRYSnVJQ2gyS1NBOVBpQjdYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUdKc1pXNWtaV1FwSUh0Y2JpQWdJQ0FnSUdKc1pXNWtaV1JiYTJWNVhTQTlJR0pzWlc1a0tHWnliMjFEYjJ4dmNsdHJaWGxkTENCMGIwTnZiRzl5VzJ0bGVWMHNJSFlwTzF4dUlDQWdJSDFjYmlBZ0lDQmliR1Z1WkdWa0xuSmxaQ0E5SUdKc1pXNWtLR1p5YjIxRGIyeHZjaTV5WldRc0lIUnZRMjlzYjNJdWNtVmtMQ0IyS1R0Y2JpQWdJQ0JpYkdWdVpHVmtMbWR5WldWdUlEMGdZbXhsYm1Rb1puSnZiVU52Ykc5eUxtZHlaV1Z1TENCMGIwTnZiRzl5TG1keVpXVnVMQ0IyS1R0Y2JpQWdJQ0JpYkdWdVpHVmtMbUpzZFdVZ1BTQmliR1Z1WkNobWNtOXRRMjlzYjNJdVlteDFaU3dnZEc5RGIyeHZjaTVpYkhWbExDQjJLVHRjYmlBZ0lDQmliR1Z1WkdWa0xtRnNjR2hoSUQwZ1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9abkp2YlVOdmJHOXlMbUZzY0doaExDQjBiME52Ykc5eUxtRnNjR2hoTENCMktUdGNiaUFnSUNCeVpYUjFjbTRnWW14bGJtUmxaRHRjYmlBZ2ZUdGNibjA3WEc1Y2JpOHZJRUpsZW1sbGNpQnlaWE52YkhabGNseHVMeThnVW1WbVlXTjBiM0psWkNCbWNtOXRJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzlvZFdkb2Myc3ZZbVY2YVdWeUwySnNiMkl2YldGemRHVnlMMmx1WkdWNExtcHpYRzR2S2lwY2JpTWpJRlJvWlNCTlNWUWdUR2xqWlc1elpTQW9UVWxVS1NBakkxeHVYRzVEYjNCNWNtbG5hSFFnS0dNcElESXdNVE1nU0hWbmFDQkxaVzV1WldSNVhHNWNibEJsY20xcGMzTnBiMjRnYVhNZ2FHVnlaV0o1SUdkeVlXNTBaV1FzSUdaeVpXVWdiMllnWTJoaGNtZGxMQ0IwYnlCaGJua2djR1Z5YzI5dUlHOWlkR0ZwYm1sdVp5QmhJR052Y0hsY2JtOW1JSFJvYVhNZ2MyOW1kSGRoY21VZ1lXNWtJR0Z6YzI5amFXRjBaV1FnWkc5amRXMWxiblJoZEdsdmJpQm1hV3hsY3lBb2RHaGxJRndpVTI5bWRIZGhjbVZjSWlrc0lIUnZJR1JsWVd4Y2JtbHVJSFJvWlNCVGIyWjBkMkZ5WlNCM2FYUm9iM1YwSUhKbGMzUnlhV04wYVc5dUxDQnBibU5zZFdScGJtY2dkMmwwYUc5MWRDQnNhVzFwZEdGMGFXOXVJSFJvWlNCeWFXZG9kSE5jYm5SdklIVnpaU3dnWTI5d2VTd2diVzlrYVdaNUxDQnRaWEpuWlN3Z2NIVmliR2x6YUN3Z1pHbHpkSEpwWW5WMFpTd2djM1ZpYkdsalpXNXpaU3dnWVc1a0wyOXlJSE5sYkd4Y2JtTnZjR2xsY3lCdlppQjBhR1VnVTI5bWRIZGhjbVVzSUdGdVpDQjBieUJ3WlhKdGFYUWdjR1Z5YzI5dWN5QjBieUIzYUc5dElIUm9aU0JUYjJaMGQyRnlaU0JwYzF4dVpuVnlibWx6YUdWa0lIUnZJR1J2SUhOdkxDQnpkV0pxWldOMElIUnZJSFJvWlNCbWIyeHNiM2RwYm1jZ1kyOXVaR2wwYVc5dWN6cGNibHh1VkdobElHRmliM1psSUdOdmNIbHlhV2RvZENCdWIzUnBZMlVnWVc1a0lIUm9hWE1nY0dWeWJXbHpjMmx2YmlCdWIzUnBZMlVnYzJoaGJHd2dZbVVnYVc1amJIVmtaV1FnYVc1Y2JtRnNiQ0JqYjNCcFpYTWdiM0lnYzNWaWMzUmhiblJwWVd3Z2NHOXlkR2x2Ym5NZ2IyWWdkR2hsSUZOdlpuUjNZWEpsTGx4dVhHNVVTRVVnVTA5R1ZGZEJVa1VnU1ZNZ1VGSlBWa2xFUlVRZ1hDSkJVeUJKVTF3aUxDQlhTVlJJVDFWVUlGZEJVbEpCVGxSWklFOUdJRUZPV1NCTFNVNUVMQ0JGV0ZCU1JWTlRJRTlTWEc1SlRWQk1TVVZFTENCSlRrTk1WVVJKVGtjZ1FsVlVJRTVQVkNCTVNVMUpWRVZFSUZSUElGUklSU0JYUVZKU1FVNVVTVVZUSUU5R0lFMUZVa05JUVU1VVFVSkpURWxVV1N4Y2JrWkpWRTVGVTFNZ1JrOVNJRUVnVUVGU1ZFbERWVXhCVWlCUVZWSlFUMU5GSUVGT1JDQk9UMDVKVGtaU1NVNUhSVTFGVGxRdUlFbE9JRTVQSUVWV1JVNVVJRk5JUVV4TUlGUklSVnh1UVZWVVNFOVNVeUJQVWlCRFQxQlpVa2xIU0ZRZ1NFOU1SRVZTVXlCQ1JTQk1TVUZDVEVVZ1JrOVNJRUZPV1NCRFRFRkpUU3dnUkVGTlFVZEZVeUJQVWlCUFZFaEZVbHh1VEVsQlFrbE1TVlJaTENCWFNFVlVTRVZTSUVsT0lFRk9JRUZEVkVsUFRpQlBSaUJEVDA1VVVrRkRWQ3dnVkU5U1ZDQlBVaUJQVkVoRlVsZEpVMFVzSUVGU1NWTkpUa2NnUmxKUFRTeGNiazlWVkNCUFJpQlBVaUJKVGlCRFQwNU9SVU5VU1U5T0lGZEpWRWdnVkVoRklGTlBSbFJYUVZKRklFOVNJRlJJUlNCVlUwVWdUMUlnVDFSSVJWSWdSRVZCVEVsT1IxTWdTVTVjYmxSSVJTQlRUMFpVVjBGU1JTNWNiaUFxTDF4dVkyOXVjM1FnY21WemIyeDJaVE1nUFNBb2NHOXBiblJ6S1NBOVBpQW9kQ2tnUFQ0Z2UxeHVJQ0JqYjI1emRDQjFkQ0E5SURFZ0xTQjBPMXh1SUNCeVpYUjFjbTRnS0hCdmFXNTBjMXN3WFNBcUlIVjBJQ3NnY0c5cGJuUnpXekZkSUNvZ2RDa2dLaUIxZENBcklDaHdiMmx1ZEhOYk1WMGdLaUIxZENBcklIQnZhVzUwYzFzeVhTQXFJSFFwSUNvZ2REdGNibjA3WEc1Y2JtTnZibk4wSUhKbGMyOXNkbVUwSUQwZ0tIQnZhVzUwY3lrZ1BUNGdLSFFwSUQwK0lIdGNiaUFnWTI5dWMzUWdkWFFnUFNBeElDMGdkRHRjYmlBZ1kyOXVjM1FnWVRFZ1BTQndiMmx1ZEhOYk1WMGdLaUIxZENBcklIQnZhVzUwYzFzeVhTQXFJSFE3WEc0Z0lISmxkSFZ5YmlBb0tIQnZhVzUwYzFzd1hTQXFJSFYwSUNzZ2NHOXBiblJ6V3pGZElDb2dkQ2tnS2lCMWRDQXJJR0V4SUNvZ2RDa2dLaUIxZENBcklDaGhNU0FxSUhWMElDc2dLSEJ2YVc1MGMxc3lYU0FxSUhWMElDc2djRzlwYm5Seld6TmRJQ29nZENrZ0tpQjBLU0FxSUhRN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdZbVY2YVdWeUlEMGdLSEJ2YVc1MGN5a2dQVDVjYmlBZ0tIQnZhVzUwY3k1c1pXNW5kR2dnUFQwOUlETXBJRDhnY21WemIyeDJaVE1vY0c5cGJuUnpLU0E2SUhKbGMyOXNkbVUwS0hCdmFXNTBjeWs3WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb21wbGV4ID0gZXhwb3J0cy5jb2xvciA9IGV4cG9ydHMuaHNsYSA9IGV4cG9ydHMuaGV4ID0gZXhwb3J0cy5yZ2JhID0gZXhwb3J0cy5yZ2JVbml0ID0gZXhwb3J0cy5zY2FsZSA9IGV4cG9ydHMucHggPSBleHBvcnRzLnBlcmNlbnQgPSBleHBvcnRzLmRlZ3JlZXMgPSBleHBvcnRzLmFscGhhID0gZXhwb3J0cy5udW1iZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVmFsdWUgdHlwZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBhbHBoYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogZGVncmVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBoc2xhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBwZXJjZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBweFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmdiVW5pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmdiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzY2FsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3BhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIG51bWJlciA9IGV4cG9ydHMubnVtYmVyID0ge1xuICB0ZXN0OiBfdXRpbHMuaXNOdW0sXG4gIHBhcnNlOiBwYXJzZUZsb2F0XG59O1xuXG4vLyBWYWx1ZSB0eXBlc1xudmFyIGFscGhhID0gZXhwb3J0cy5hbHBoYSA9IF9leHRlbmRzKHt9LCBudW1iZXIsIHtcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLmFscGhhXG59KTtcblxudmFyIGRlZ3JlZXMgPSBleHBvcnRzLmRlZ3JlZXMgPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgnZGVnJywgX3RyYW5zZm9ybWVycy5kZWdyZWVzKTtcbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJyUnLCBfdHJhbnNmb3JtZXJzLnBlcmNlbnQpO1xudmFyIHB4ID0gZXhwb3J0cy5weCA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCdweCcsIF90cmFuc2Zvcm1lcnMucHgpO1xuXG52YXIgc2NhbGUgPSBleHBvcnRzLnNjYWxlID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICBkZWZhdWx0OiAxXG59KTtcblxudmFyIHJnYlVuaXQgPSBleHBvcnRzLnJnYlVuaXQgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5yZ2JVbml0XG59KTtcblxudmFyIHJnYmEgPSBleHBvcnRzLnJnYmEgPSB7XG4gIHRlc3Q6IF91dGlscy5pc1JnYixcbiAgcGFyc2U6IF9wYXJzZXJzLnJnYmEsXG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5yZ2JhXG59O1xuXG52YXIgaGV4ID0gZXhwb3J0cy5oZXggPSBfZXh0ZW5kcyh7fSwgcmdiYSwge1xuICB0ZXN0OiBfdXRpbHMuaXNIZXgsXG4gIHBhcnNlOiBfcGFyc2Vycy5oZXhcbn0pO1xuXG52YXIgaHNsYSA9IGV4cG9ydHMuaHNsYSA9IHtcbiAgdGVzdDogX3V0aWxzLmlzSHNsLFxuICBwYXJzZTogX3BhcnNlcnMuaHNsYSxcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLmhzbGFcbn07XG5cbnZhciBjb2xvciA9IGV4cG9ydHMuY29sb3IgPSB7XG4gIHBhcnNlOiBfcGFyc2Vycy5jb2xvcixcbiAgdGVzdDogX3V0aWxzLmlzQ29sb3IsXG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5jb2xvclxufTtcblxudmFyIEZMT0FUX1JFR0VYID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xudmFyIGdlbmVyYXRlVG9rZW4gPSBmdW5jdGlvbiBnZW5lcmF0ZVRva2VuKHRva2VuKSB7XG4gIHJldHVybiAnJHsnICsgdG9rZW4gKyAnfSc7XG59O1xudmFyIGNvbXBsZXggPSBleHBvcnRzLmNvbXBsZXggPSB7XG4gIHRlc3Q6IGZ1bmN0aW9uIHRlc3Qodikge1xuICAgIHZhciBtYXRjaGVzID0gdi5tYXRjaCAmJiB2Lm1hdGNoKEZMT0FUX1JFR0VYKTtcbiAgICByZXR1cm4gKDAsIF91dGlscy5pc0FycmF5KShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDE7XG4gIH0sXG4gIHBhcnNlOiBmdW5jdGlvbiBwYXJzZSh2KSB7XG4gICAgdmFyIHBhcnNlZFZhbHVlID0ge307XG4gICAgdi5tYXRjaChGTE9BVF9SRUdFWCkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICAgIHJldHVybiBwYXJzZWRWYWx1ZVtpXSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXJzZWRWYWx1ZTtcbiAgfSxcbiAgY3JlYXRlVHJhbnNmb3JtZXI6IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zZm9ybWVyKHByb3ApIHtcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgdmFyIHRlbXBsYXRlID0gcHJvcC5yZXBsYWNlKEZMT0FUX1JFR0VYLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2VuZXJhdGVUb2tlbihjb3VudGVyKyspO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICB2YXIgb3V0cHV0ID0gdGVtcGxhdGU7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdikge1xuICAgICAgICBpZiAodi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoZ2VuZXJhdGVUb2tlbihrZXkpLCB2W2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRtRnNkV1V0ZEhsd1pYTXVhbk1pWFN3aWJtRnRaWE1pT2xzaWJuVnRZbVZ5SWl3aWRHVnpkQ0lzSW5CaGNuTmxJaXdpY0dGeWMyVkdiRzloZENJc0ltRnNjR2hoSWl3aWRISmhibk5tYjNKdElpd2laR1ZuY21WbGN5SXNJbkJsY21ObGJuUWlMQ0p3ZUNJc0luTmpZV3hsSWl3aVpHVm1ZWFZzZENJc0luSm5ZbFZ1YVhRaUxDSnlaMkpoSWl3aWFHVjRJaXdpYUhOc1lTSXNJbU52Ykc5eUlpd2lSa3hQUVZSZlVrVkhSVmdpTENKblpXNWxjbUYwWlZSdmEyVnVJaXdpZEc5clpXNGlMQ0pqYjIxd2JHVjRJaXdpZGlJc0ltMWhkR05vWlhNaUxDSnRZWFJqYUNJc0lteGxibWQwYUNJc0luQmhjbk5sWkZaaGJIVmxJaXdpWm05eVJXRmphQ0lzSW5aaGJIVmxJaXdpYVNJc0ltTnlaV0YwWlZSeVlXNXpabTl5YldWeUlpd2ljSEp2Y0NJc0ltTnZkVzUwWlhJaUxDSjBaVzF3YkdGMFpTSXNJbkpsY0d4aFkyVWlMQ0p2ZFhSd2RYUWlMQ0pyWlhraUxDSm9ZWE5QZDI1UWNtOXdaWEowZVNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN2ExRkJRVUU3T3pzN096czdPenM3T3pzN096dEJRV0ZCT3p0QlFWVkJPenRCUVUxQk96dEJRVlZQTEVsQlFVMUJMREJDUVVGVE8wRkJRM0JDUXl4dlFrRkViMEk3UVVGRmNFSkRMRk5CUVU5RE8wRkJSbUVzUTBGQlpqczdRVUZMVUR0QlFVTlBMRWxCUVUxRExIRkRRVU5TU2l4TlFVUlJPMEZCUlZoTE8wRkJSbGNzUlVGQlRqczdRVUZMUVN4SlFVRk5ReXcwUWtGQlZTd3lRa0ZCWlN4TFFVRm1MSGRDUVVGb1FqdEJRVU5CTEVsQlFVMURMRFJDUVVGVkxESkNRVUZsTEVkQlFXWXNkMEpCUVdoQ08wRkJRMEVzU1VGQlRVTXNhMEpCUVVzc01rSkJRV1VzU1VGQlppeHRRa0ZCV0RzN1FVRkZRU3hKUVVGTlF5eHhRMEZEVWxRc1RVRkVVVHRCUVVWWVZTeFhRVUZUTzBGQlJrVXNSVUZCVGpzN1FVRkxRU3hKUVVGTlF5eDVRMEZEVWxnc1RVRkVVVHRCUVVWWVN6dEJRVVpYTEVWQlFVNDdPMEZCUzBFc1NVRkJUVThzYzBKQlFVODdRVUZEYkVKWUxHOUNRVVJyUWp0QlFVVnNRa01zYzBKQlJtdENPMEZCUjJ4Q1J6dEJRVWhyUWl4RFFVRmlPenRCUVUxQkxFbEJRVTFSTEdsRFFVTlNSQ3hKUVVSUk8wRkJSVmhZTEc5Q1FVWlhPMEZCUjFoRE8wRkJTRmNzUlVGQlRqczdRVUZOUVN4SlFVRk5XU3h6UWtGQlR6dEJRVU5zUW1Jc2IwSkJSR3RDTzBGQlJXeENReXh6UWtGR2EwSTdRVUZIYkVKSE8wRkJTR3RDTEVOQlFXSTdPMEZCVFVFc1NVRkJUVlVzZDBKQlFWRTdRVUZEYmtKaUxIVkNRVVJ0UWp0QlFVVnVRa1FzYzBKQlJtMUNPMEZCUjI1Q1NUdEJRVWh0UWl4RFFVRmtPenRCUVUxUUxFbEJRVTFYTEdOQlFXTXNhMEpCUVhCQ08wRkJRMEVzU1VGQlRVTXNaMEpCUVdkQ0xGTkJRV2hDUVN4aFFVRm5RaXhEUVVGRFF5eExRVUZFTzBGQlFVRXNVMEZCVnl4UFFVRlBRU3hMUVVGUUxFZEJRV1VzUjBGQk1VSTdRVUZCUVN4RFFVRjBRanRCUVVOUExFbEJRVTFETERSQ1FVRlZPMEZCUTNKQ2JFSXNVVUZCVFN4alFVRkRiVUlzUTBGQlJDeEZRVUZQTzBGQlExZ3NVVUZCVFVNc1ZVRkJWVVFzUlVGQlJVVXNTMEZCUml4SlFVRlhSaXhGUVVGRlJTeExRVUZHTEVOQlFWRk9MRmRCUVZJc1EwRkJNMEk3UVVGRFFTeFhRVUZSTEc5Q1FVRlJTeXhQUVVGU0xFdEJRVzlDUVN4UlFVRlJSU3hOUVVGU0xFZEJRV2xDTEVOQlFUZERPMEZCUTBRc1IwRktiMEk3UVVGTGNrSnlRaXhUUVVGUExHVkJRVU5yUWl4RFFVRkVMRVZCUVU4N1FVRkRXaXhSUVVGTlNTeGpRVUZqTEVWQlFYQkNPMEZCUTBGS0xFMUJRVVZGTEV0QlFVWXNRMEZCVVU0c1YwRkJVaXhGUVVGeFFsTXNUMEZCY2tJc1EwRkJOa0lzVlVGQlEwTXNTMEZCUkN4RlFVRlJReXhEUVVGU08wRkJRVUVzWVVGQlkwZ3NXVUZCV1Vjc1EwRkJXaXhKUVVGcFFuaENMRmRCUVZkMVFpeExRVUZZTEVOQlFTOUNPMEZCUVVFc1MwRkJOMEk3UVVGRFFTeFhRVUZQUml4WFFVRlFPMEZCUTBRc1IwRlViMEk3UVVGVmNrSkpMSEZDUVVGdFFpd3lRa0ZCUTBNc1NVRkJSQ3hGUVVGVk8wRkJRek5DTEZGQlFVbERMRlZCUVZVc1EwRkJaRHRCUVVOQkxGRkJRVTFETEZkQlFWZEdMRXRCUVV0SExFOUJRVXdzUTBGQllXaENMRmRCUVdJc1JVRkJNRUk3UVVGQlFTeGhRVUZOUXl4alFVRmpZU3hUUVVGa0xFTkJRVTQ3UVVGQlFTeExRVUV4UWl4RFFVRnFRanM3UVVGRlFTeFhRVUZQTEZWQlFVTldMRU5CUVVRc1JVRkJUenRCUVVOYUxGVkJRVWxoTEZOQlFWTkdMRkZCUVdJN1FVRkRRU3hYUVVGTExFbEJRVWxITEVkQlFWUXNTVUZCWjBKa0xFTkJRV2hDTEVWQlFXMUNPMEZCUTJwQ0xGbEJRVWxCTEVWQlFVVmxMR05CUVVZc1EwRkJhVUpFTEVkQlFXcENMRU5CUVVvc1JVRkJNa0k3UVVGRGVrSkVMRzFDUVVGVFFTeFBRVUZQUkN4UFFVRlFMRU5CUVdWbUxHTkJRV05wUWl4SFFVRmtMRU5CUVdZc1JVRkJiVU5rTEVWQlFVVmpMRWRCUVVZc1EwRkJia01zUTBGQlZEdEJRVU5FTzBGQlEwWTdPMEZCUlVRc1lVRkJUMFFzVFVGQlVEdEJRVU5FTEV0QlZFUTdRVUZWUkR0QlFYaENiMElzUTBGQmFFSWlMQ0ptYVd4bElqb2lkbUZzZFdVdGRIbHdaWE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lwY2JpQXFJRlpoYkhWbElIUjVjR1Z6WEc0Z0tseHVJQ29nWVd4d2FHRmNiaUFxSUdSbFozSmxaWE5jYmlBcUlHaGxlRnh1SUNvZ2FITnNZVnh1SUNvZ2NHVnlZMlZ1ZEZ4dUlDb2djSGhjYmlBcUlISm5ZbFZ1YVhSY2JpQXFJSEpuWWx4dUlDb2djMk5oYkdWY2JpQXFMMXh1YVcxd2IzSjBJSHRjYmlBZ2NtZGlWVzVwZENCaGN5QjBjbUZ1YzJadmNtMVNSMEpWYm1sMExGeHVJQ0J5WjJKaElHRnpJSFJ5WVc1elptOXliVkpuWW1Fc1hHNGdJR0ZzY0doaElHRnpJSFJ5WVc1elptOXliVUZzY0doaExGeHVJQ0JvYzJ4aElHRnpJSFJ5WVc1elptOXliVWh6YkdFc1hHNGdJR052Ykc5eUlHRnpJSFJ5WVc1elptOXliVU52Ykc5eUxGeHVJQ0J3ZUNCaGN5QjBjbUZ1YzJadmNtMVFlQ3hjYmlBZ2NHVnlZMlZ1ZENCaGN5QjBjbUZ1YzJadmNtMVFaWEpqWlc1MExGeHVJQ0JrWldkeVpXVnpJR0Z6SUhSeVlXNXpabTl5YlVSbFozSmxaWE5jYm4wZ1puSnZiU0FuTGk5MGNtRnVjMlp2Y20xbGNuTW5PMXh1YVcxd2IzSjBJSHRjYmlBZ2FHVjRJR0Z6SUhCaGNuTmxTR1Y0TEZ4dUlDQnlaMkpoSUdGeklIQmhjbk5sVW1kaVlTeGNiaUFnYUhOc1lTQmhjeUJ3WVhKelpVaHpiR0VzWEc0Z0lHTnZiRzl5SUdGeklIQmhjbk5sUTI5c2IzSmNibjBnWm5KdmJTQW5MaTl3WVhKelpYSnpKenRjYm1sdGNHOXlkQ0I3WEc0Z0lHTnlaV0YwWlZWdWFYUlVlWEJsTEZ4dUlDQnBjMEZ5Y21GNUxGeHVJQ0JwYzA1MWJTeGNiaUFnYVhOU1oySXNYRzRnSUdselNITnNMRnh1SUNCcGMwaGxlQ3hjYmlBZ2FYTkRiMnh2Y2x4dWZTQm1jbTl0SUNjdUwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUc1MWJXSmxjaUE5SUh0Y2JpQWdkR1Z6ZERvZ2FYTk9kVzBzWEc0Z0lIQmhjbk5sT2lCd1lYSnpaVVpzYjJGMFhHNTlPMXh1WEc0dkx5QldZV3gxWlNCMGVYQmxjMXh1Wlhod2IzSjBJR052Ym5OMElHRnNjR2hoSUQwZ2UxeHVJQ0F1TGk1dWRXMWlaWElzWEc0Z0lIUnlZVzV6Wm05eWJUb2dkSEpoYm5ObWIzSnRRV3h3YUdGY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmtaV2R5WldWeklEMGdZM0psWVhSbFZXNXBkRlI1Y0dVb0oyUmxaeWNzSUhSeVlXNXpabTl5YlVSbFozSmxaWE1wTzF4dVpYaHdiM0owSUdOdmJuTjBJSEJsY21ObGJuUWdQU0JqY21WaGRHVlZibWwwVkhsd1pTZ25KU2NzSUhSeVlXNXpabTl5YlZCbGNtTmxiblFwTzF4dVpYaHdiM0owSUdOdmJuTjBJSEI0SUQwZ1kzSmxZWFJsVlc1cGRGUjVjR1VvSjNCNEp5d2dkSEpoYm5ObWIzSnRVSGdwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzJOaGJHVWdQU0I3WEc0Z0lDNHVMbTUxYldKbGNpeGNiaUFnWkdWbVlYVnNkRG9nTVZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElISm5ZbFZ1YVhRZ1BTQjdYRzRnSUM0dUxtNTFiV0psY2l4Y2JpQWdkSEpoYm5ObWIzSnRPaUIwY21GdWMyWnZjbTFTUjBKVmJtbDBYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21kaVlTQTlJSHRjYmlBZ2RHVnpkRG9nYVhOU1oySXNYRzRnSUhCaGNuTmxPaUJ3WVhKelpWSm5ZbUVzWEc0Z0lIUnlZVzV6Wm05eWJUb2dkSEpoYm5ObWIzSnRVbWRpWVZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHaGxlQ0E5SUh0Y2JpQWdMaTR1Y21kaVlTeGNiaUFnZEdWemREb2dhWE5JWlhnc1hHNGdJSEJoY25ObE9pQndZWEp6WlVobGVGeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR2h6YkdFZ1BTQjdYRzRnSUhSbGMzUTZJR2x6U0hOc0xGeHVJQ0J3WVhKelpUb2djR0Z5YzJWSWMyeGhMRnh1SUNCMGNtRnVjMlp2Y20wNklIUnlZVzV6Wm05eWJVaHpiR0ZjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamIyeHZjaUE5SUh0Y2JpQWdjR0Z5YzJVNklIQmhjbk5sUTI5c2IzSXNYRzRnSUhSbGMzUTZJR2x6UTI5c2IzSXNYRzRnSUhSeVlXNXpabTl5YlRvZ2RISmhibk5tYjNKdFEyOXNiM0pjYm4wN1hHNWNibU52Ym5OMElFWk1UMEZVWDFKRlIwVllJRDBnTHlndEtUOG9YRnhrVzF4Y1pGeGNMbDBxS1M5bk8xeHVZMjl1YzNRZ1oyVnVaWEpoZEdWVWIydGxiaUE5SUNoMGIydGxiaWtnUFQ0Z0p5UjdKeUFySUhSdmEyVnVJQ3NnSjMwbk8xeHVaWGh3YjNKMElHTnZibk4wSUdOdmJYQnNaWGdnUFNCN1hHNGdJSFJsYzNRNklDaDJLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiV0YwWTJobGN5QTlJSFl1YldGMFkyZ2dKaVlnZGk1dFlYUmphQ2hHVEU5QlZGOVNSVWRGV0NrN1hHNGdJQ0FnY21WMGRYSnVJQ2hwYzBGeWNtRjVLRzFoZEdOb1pYTXBJQ1ltSUcxaGRHTm9aWE11YkdWdVozUm9JRDRnTVNrN1hHNGdJSDBzWEc0Z0lIQmhjbk5sT2lBb2Rpa2dQVDRnZTF4dUlDQWdJR052Ym5OMElIQmhjbk5sWkZaaGJIVmxJRDBnZTMwN1hHNGdJQ0FnZGk1dFlYUmphQ2hHVEU5QlZGOVNSVWRGV0NrdVptOXlSV0ZqYUNnb2RtRnNkV1VzSUdrcElEMCtJSEJoY25ObFpGWmhiSFZsVzJsZElEMGdjR0Z5YzJWR2JHOWhkQ2gyWVd4MVpTa3BPMXh1SUNBZ0lISmxkSFZ5YmlCd1lYSnpaV1JXWVd4MVpUdGNiaUFnZlN4Y2JpQWdZM0psWVhSbFZISmhibk5tYjNKdFpYSTZJQ2h3Y205d0tTQTlQaUI3WEc0Z0lDQWdiR1YwSUdOdmRXNTBaWElnUFNBd08xeHVJQ0FnSUdOdmJuTjBJSFJsYlhCc1lYUmxJRDBnY0hKdmNDNXlaWEJzWVdObEtFWk1UMEZVWDFKRlIwVllMQ0FvS1NBOVBpQm5aVzVsY21GMFpWUnZhMlZ1S0dOdmRXNTBaWElyS3lrcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUNoMktTQTlQaUI3WEc0Z0lDQWdJQ0JzWlhRZ2IzVjBjSFYwSUQwZ2RHVnRjR3hoZEdVN1hHNGdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZGlrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZGk1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnYjNWMGNIVjBJRDBnYjNWMGNIVjBMbkpsY0d4aFkyVW9aMlZ1WlhKaGRHVlViMnRsYmloclpYa3BMQ0IyVzJ0bGVWMHBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJ2ZFhSd2RYUTdYRzRnSUNBZ2ZUdGNiaUFnZlZ4dWZUdGNiaUpkZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luYy92YWx1ZS10eXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJ2ZyYW1lc3luYycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF9lYXNpbmcgPSByZXF1aXJlKCcuLi9pbmMvZWFzaW5nJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGNsYW1wUHJvZ3Jlc3MgPSAoMCwgX3RyYW5zZm9ybWVycy5jbGFtcCkoMCwgMSk7XG5cbnZhciBORVhUX1NURVBTID0ge1xuICBsb29wOiBmdW5jdGlvbiBsb29wKHR3ZWVuKSB7XG4gICAgcmV0dXJuIHR3ZWVuLnN0YXJ0KCk7XG4gIH0sXG4gIHlveW86IGZ1bmN0aW9uIHlveW8odHdlZW4pIHtcbiAgICByZXR1cm4gdHdlZW4ucmV2ZXJzZSgpLnN0YXJ0KCk7XG4gIH0sXG4gIGZsaXA6IGZ1bmN0aW9uIGZsaXAodHdlZW4pIHtcbiAgICByZXR1cm4gdHdlZW4uZmxpcCgpLnN0YXJ0KCk7XG4gIH1cbn07XG5cbnZhciBUd2VlbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhUd2VlbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3ZWVuKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVHdlZW4ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBkdXJhdGlvbiA9IF9wcm9wcy5kdXJhdGlvbixcbiAgICAgICAgcGxheURpcmVjdGlvbiA9IF9wcm9wcy5wbGF5RGlyZWN0aW9uO1xuXG5cbiAgICB0aGlzLmVsYXBzZWQgPSBwbGF5RGlyZWN0aW9uID09PSAxID8gMCA6IGR1cmF0aW9uO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBkdXJhdGlvbiA9IF9wcm9wczIuZHVyYXRpb24sXG4gICAgICAgIGVhc2UgPSBfcHJvcHMyLmVhc2UsXG4gICAgICAgIGZyb20gPSBfcHJvcHMyLmZyb20sXG4gICAgICAgIHRvID0gX3Byb3BzMi50byxcbiAgICAgICAgcGxheURpcmVjdGlvbiA9IF9wcm9wczIucGxheURpcmVjdGlvbjtcblxuXG4gICAgaWYgKCF0aGlzLmlzTWFudWFsVXBkYXRlKSB7XG4gICAgICB0aGlzLmVsYXBzZWQgKz0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpICogcGxheURpcmVjdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLmlzTWFudWFsVXBkYXRlID0gZmFsc2U7XG4gICAgdGhpcy5wcm9ncmVzcyA9IGNsYW1wUHJvZ3Jlc3MoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSgwLCBkdXJhdGlvbiwgdGhpcy5lbGFwc2VkKSk7XG5cbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShmcm9tLCB0bywgZWFzZSh0aGlzLnByb2dyZXNzKSk7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMzLmR1cmF0aW9uLFxuICAgICAgICBwbGF5RGlyZWN0aW9uID0gX3Byb3BzMy5wbGF5RGlyZWN0aW9uLFxuICAgICAgICB5b3lvID0gX3Byb3BzMy55b3lvLFxuICAgICAgICBsb29wID0gX3Byb3BzMy5sb29wLFxuICAgICAgICBmbGlwID0gX3Byb3BzMy5mbGlwO1xuXG4gICAgdmFyIGlzQ29tcGxldGUgPSBwbGF5RGlyZWN0aW9uID09PSAxID8gdGhpcy5lbGFwc2VkID49IGR1cmF0aW9uIDogdGhpcy5lbGFwc2VkIDw9IDA7XG5cbiAgICBpZiAoaXNDb21wbGV0ZSAmJiAoeW95byB8fCBsb29wIHx8IGZsaXApKSB7XG4gICAgICB2YXIgaXNTdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIE5FWFRfU1RFUFMpIHtcbiAgICAgICAgdmFyIG5leHRTdGVwID0gTkVYVF9TVEVQU1trZXldO1xuICAgICAgICB2YXIgY291bnRQcm9wID0ga2V5ICsgJ0NvdW50JztcbiAgICAgICAgdmFyIHN0ZXBNYXggPSB0aGlzLmdldFByb3Aoa2V5KTtcbiAgICAgICAgdmFyIHN0ZXBDb3VudCA9IHRoaXMuZ2V0UHJvcChjb3VudFByb3ApO1xuXG4gICAgICAgIGlmIChzdGVwTWF4ID4gc3RlcENvdW50KSB7XG4gICAgICAgICAgdmFyIF9zZXRQcm9wcztcblxuICAgICAgICAgIHRoaXMuc2V0UHJvcHMoKF9zZXRQcm9wcyA9IHt9LCBfc2V0UHJvcHNbY291bnRQcm9wXSA9IHN0ZXBDb3VudCArIDEsIF9zZXRQcm9wcykpO1xuICAgICAgICAgIG5leHRTdGVwKHRoaXMpO1xuICAgICAgICAgIGlzU3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdGVwVGFrZW4pIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNDb21wbGV0ZTtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuZ2V0RWxhcHNlZCA9IGZ1bmN0aW9uIGdldEVsYXBzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZDtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuZmxpcCA9IGZ1bmN0aW9uIGZsaXAoKSB7XG4gICAgdGhpcy5lbGFwc2VkID0gdGhpcy5wcm9wcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcbiAgICB2YXIgX3JlZiA9IFt0aGlzLnByb3BzLnRvLCB0aGlzLnByb3BzLmZyb21dO1xuICAgIHRoaXMucHJvcHMuZnJvbSA9IF9yZWZbMF07XG4gICAgdGhpcy5wcm9wcy50byA9IF9yZWZbMV07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgdGhpcy5wcm9wcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5zZWVrID0gZnVuY3Rpb24gc2Vlayhwcm9ncmVzcykge1xuICAgIHZhciBkdXJhdGlvbiA9IHRoaXMucHJvcHMuZHVyYXRpb247XG5cbiAgICB0aGlzLmVsYXBzZWQgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKDAsIGR1cmF0aW9uLCBwcm9ncmVzcyk7XG4gICAgdGhpcy5pc01hbnVhbFVwZGF0ZSA9IHRydWU7XG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHRoaXMuc2NoZWR1bGVkVXBkYXRlKCk7XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuO1xufShfMi5kZWZhdWx0KTtcblxuVHdlZW4uZGVmYXVsdFByb3BzID0ge1xuICBkdXJhdGlvbjogMzAwLFxuICBlYXNlOiBfZWFzaW5nLmVhc2VPdXQsXG4gIGZyb206IDAsXG4gIHRvOiAxLFxuICBmbGlwOiAwLFxuICBmbGlwQ291bnQ6IDAsXG4gIHlveW86IDAsXG4gIHlveW9Db3VudDogMCxcbiAgbG9vcDogMCxcbiAgbG9vcENvdW50OiAwLFxuICBwbGF5RGlyZWN0aW9uOiAxXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBUd2Vlbihwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJJbU5zWVcxd1VISnZaM0psYzNNaUxDSk9SVmhVWDFOVVJWQlRJaXdpYkc5dmNDSXNJblIzWldWdUlpd2ljM1JoY25RaUxDSjViM2x2SWl3aWNtVjJaWEp6WlNJc0ltWnNhWEFpTENKVWQyVmxiaUlzSW05dVUzUmhjblFpTENKd2NtOXdjeUlzSW1SMWNtRjBhVzl1SWl3aWNHeGhlVVJwY21WamRHbHZiaUlzSW1Wc1lYQnpaV1FpTENKd2NtOW5jbVZ6Y3lJc0luVndaR0YwWlNJc0ltVmhjMlVpTENKbWNtOXRJaXdpZEc4aUxDSnBjMDFoYm5WaGJGVndaR0YwWlNJc0ltbHpRV04wYVc5dVEyOXRjR3hsZEdVaUxDSnBjME52YlhCc1pYUmxJaXdpYVhOVGRHVndWR0ZyWlc0aUxDSnJaWGtpTENKdVpYaDBVM1JsY0NJc0ltTnZkVzUwVUhKdmNDSXNJbk4wWlhCTllYZ2lMQ0puWlhSUWNtOXdJaXdpYzNSbGNFTnZkVzUwSWl3aWMyVjBVSEp2Y0hNaUxDSm5aWFJGYkdGd2MyVmtJaXdpYzJWbGF5SXNJbWx6UVdOMGFYWmxJaXdpYzJOb1pXUjFiR1ZrVlhCa1lYUmxJaXdpWkdWbVlYVnNkRkJ5YjNCeklpd2labXhwY0VOdmRXNTBJaXdpZVc5NWIwTnZkVzUwSWl3aWJHOXZjRU52ZFc1MElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3UVVGRFFUczdRVUZEUVRzN1FVRkRRVHM3T3pzN096czdPenRCUVVWQkxFbEJRVTFCTEdkQ1FVRm5RaXg1UWtGQlRTeERRVUZPTEVWQlFWTXNRMEZCVkN4RFFVRjBRanM3UVVGRlFTeEpRVUZOUXl4aFFVRmhPMEZCUTJwQ1F5eFJRVUZOTEdOQlFVTkRMRXRCUVVRN1FVRkJRU3hYUVVGWFFTeE5RVUZOUXl4TFFVRk9MRVZCUVZnN1FVRkJRU3hIUVVSWE8wRkJSV3BDUXl4UlFVRk5MR05CUVVOR0xFdEJRVVE3UVVGQlFTeFhRVUZYUVN4TlFVRk5SeXhQUVVGT0xFZEJRV2RDUml4TFFVRm9RaXhGUVVGWU8wRkJRVUVzUjBGR1Z6dEJRVWRxUWtjc1VVRkJUU3hqUVVGRFNpeExRVUZFTzBGQlFVRXNWMEZCVjBFc1RVRkJUVWtzU1VGQlRpeEhRVUZoU0N4TFFVRmlMRVZCUVZnN1FVRkJRVHRCUVVoWExFTkJRVzVDT3p0SlFVMU5TU3hMT3pzN096czdPenM3YTBKQlpVcERMRThzYzBKQlFWVTdRVUZCUVN4cFFrRkRORUlzUzBGQlMwTXNTMEZFYWtNN1FVRkJRU3hSUVVOQlF5eFJRVVJCTEZWQlEwRkJMRkZCUkVFN1FVRkJRU3hSUVVOVlF5eGhRVVJXTEZWQlExVkJMR0ZCUkZZN096dEJRVWRTTEZOQlFVdERMRTlCUVV3c1IwRkJaMEpFTEd0Q1FVRnJRaXhEUVVGdVFpeEhRVUYzUWl4RFFVRjRRaXhIUVVFMFFrUXNVVUZCTTBNN1FVRkRRU3hUUVVGTFJ5eFJRVUZNTEVkQlFXZENMRU5CUVdoQ08wRkJRMFFzUnpzN2EwSkJSVVJETEUwc2NVSkJRVk03UVVGQlFTeHJRa0ZETmtNc1MwRkJTMHdzUzBGRWJFUTdRVUZCUVN4UlFVTkRReXhSUVVSRUxGZEJRME5CTEZGQlJFUTdRVUZCUVN4UlFVTlhTeXhKUVVSWUxGZEJRMWRCTEVsQlJGZzdRVUZCUVN4UlFVTnBRa01zU1VGRWFrSXNWMEZEYVVKQkxFbEJSR3BDTzBGQlFVRXNVVUZEZFVKRExFVkJSSFpDTEZkQlEzVkNRU3hGUVVSMlFqdEJRVUZCTEZGQlF6SkNUaXhoUVVRelFpeFhRVU15UWtFc1lVRkVNMEk3T3p0QlFVZFFMRkZCUVVrc1EwRkJReXhMUVVGTFR5eGpRVUZXTEVWQlFUQkNPMEZCUTNoQ0xGZEJRVXRPTEU5QlFVd3NTVUZCWjBJc2RVTkJRWFZDUkN4aFFVRjJRenRCUVVORU96dEJRVVZFTEZOQlFVdFBMR05CUVV3c1IwRkJjMElzUzBGQmRFSTdRVUZEUVN4VFFVRkxUQ3hSUVVGTUxFZEJRV2RDWkN4alFVRmpMR2REUVVGeFFpeERRVUZ5UWl4RlFVRjNRbGNzVVVGQmVFSXNSVUZCYTBNc1MwRkJTMFVzVDBGQmRrTXNRMEZCWkN4RFFVRm9RanM3UVVGRlFTeFhRVUZQTEdkRFFVRnhRa2tzU1VGQmNrSXNSVUZCTWtKRExFVkJRVE5DTEVWQlFTdENSaXhMUVVGTExFdEJRVXRHTEZGQlFWWXNRMEZCTDBJc1EwRkJVRHRCUVVORUxFYzdPMnRDUVVWRVRTeG5RaXdyUWtGQmJVSTdRVUZCUVN4clFrRkRjVU1zUzBGQlMxWXNTMEZFTVVNN1FVRkJRU3hSUVVOVVF5eFJRVVJUTEZkQlExUkJMRkZCUkZNN1FVRkJRU3hSUVVORFF5eGhRVVJFTEZkQlEwTkJMR0ZCUkVRN1FVRkJRU3hSUVVOblFsQXNTVUZFYUVJc1YwRkRaMEpCTEVsQlJHaENPMEZCUVVFc1VVRkRjMEpJTEVsQlJIUkNMRmRCUTNOQ1FTeEpRVVIwUWp0QlFVRkJMRkZCUXpSQ1N5eEpRVVExUWl4WFFVTTBRa0VzU1VGRU5VSTdPMEZCUldwQ0xGRkJRVWxqTEdGQlFXTlVMR3RDUVVGclFpeERRVUZ1UWl4SFFVRjVRaXhMUVVGTFF5eFBRVUZNTEVsQlFXZENSaXhSUVVGNlF5eEhRVUZ6UkN4TFFVRkxSU3hQUVVGTUxFbEJRV2RDTEVOQlFYWkdPenRCUVVWQkxGRkJRVWxSTEdWQlFXVm9RaXhSUVVGUlNDeEpRVUZTTEVsQlFXZENTeXhKUVVFdlFpeERRVUZLTEVWQlFUQkRPMEZCUTNoRExGVkJRVWxsTEdOQlFXTXNTMEZCYkVJN08wRkJSVUVzVjBGQlN5eEpRVUZKUXl4SFFVRlVMRWxCUVdkQ2RFSXNWVUZCYUVJc1JVRkJORUk3UVVGRE1VSXNXVUZCVFhWQ0xGZEJRVmQyUWl4WFFVRlhjMElzUjBGQldDeERRVUZxUWp0QlFVTkJMRmxCUVUxRkxGbEJRVmxHTEUxQlFVMHNUMEZCZUVJN1FVRkRRU3haUVVGTlJ5eFZRVUZWTEV0QlFVdERMRTlCUVV3c1EwRkJZVW9zUjBGQllpeERRVUZvUWp0QlFVTkJMRmxCUVUxTExGbEJRVmtzUzBGQlMwUXNUMEZCVEN4RFFVRmhSaXhUUVVGaUxFTkJRV3hDT3p0QlFVVkJMRmxCUVVsRExGVkJRVlZGTEZOQlFXUXNSVUZCZVVJN1FVRkJRVHM3UVVGRGRrSXNaVUZCUzBNc1VVRkJUQ3cwUWtGRFIwb3NVMEZFU0N4SlFVTmxSeXhaUVVGWkxFTkJSRE5DTzBGQlIwRktMRzFDUVVGVExFbEJRVlE3UVVGRFFVWXNkMEpCUVdNc1NVRkJaRHRCUVVORU8wRkJRMFk3TzBGQlJVUXNWVUZCU1VFc1YwRkJTaXhGUVVGcFFrUXNZVUZCWVN4TFFVRmlPMEZCUTJ4Q096dEJRVVZFTEZkQlFVOUJMRlZCUVZBN1FVRkRSQ3hIT3p0clFrRkZSRk1zVlN4NVFrRkJZVHRCUVVOWUxGZEJRVThzUzBGQlMycENMRTlCUVZvN1FVRkRSQ3hIT3p0clFrRkZSRTRzU1N4dFFrRkJUenRCUVVOTUxGTkJRVXROTEU5QlFVd3NSMEZCWlN4TFFVRkxTQ3hMUVVGTUxFTkJRVmRETEZGQlFWZ3NSMEZCYzBJc1MwRkJTMFVzVDBGQk1VTTdRVUZFU3l4bFFVVTRRaXhEUVVGRExFdEJRVXRJTEV0QlFVd3NRMEZCVjFFc1JVRkJXaXhGUVVGblFpeExRVUZMVWl4TFFVRk1MRU5CUVZkUExFbEJRVE5DTEVOQlJqbENPMEZCUlVvc1UwRkJTMUFzUzBGQlRDeERRVUZYVHl4SlFVWlFPMEZCUldFc1UwRkJTMUFzUzBGQlRDeERRVUZYVVN4RlFVWjRRanM3UVVGSFRDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHJRa0ZGUkZvc1R5eHpRa0ZCVlR0QlFVTlNMRk5CUVV0SkxFdEJRVXdzUTBGQlYwVXNZVUZCV0N4SlFVRTBRaXhEUVVGRExFTkJRVGRDTzBGQlEwRXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdhMEpCUlVSdFFpeEpMR2xDUVVGTGFrSXNVU3hGUVVGVk8wRkJRVUVzVVVGRFRFZ3NVVUZFU3l4SFFVTlJMRXRCUVV0RUxFdEJSR0lzUTBGRFRFTXNVVUZFU3pzN1FVRkZZaXhUUVVGTFJTeFBRVUZNTEVkQlFXVXNaME5CUVhGQ0xFTkJRWEpDTEVWQlFYZENSaXhSUVVGNFFpeEZRVUZyUTBjc1VVRkJiRU1zUTBGQlpqdEJRVU5CTEZOQlFVdExMR05CUVV3c1IwRkJjMElzU1VGQmRFSTdRVUZEUVN4UlFVRkpMRU5CUVVNc1MwRkJTMkVzVVVGQlRDeEZRVUZNTEVWQlFYTkNMRXRCUVV0RExHVkJRVXc3UVVGRGRrSXNSenM3T3pzN1FVRnVSa2Q2UWl4TExFTkJRMGN3UWl4WkxFZEJRV1U3UVVGRGNFSjJRaXhaUVVGVkxFZEJSRlU3UVVGRmNFSkxMSFZDUVVadlFqdEJRVWR3UWtNc1VVRkJUU3hEUVVoak8wRkJTWEJDUXl4TlFVRkpMRU5CU21kQ08wRkJTM0JDV0N4UlFVRk5MRU5CVEdNN1FVRk5jRUkwUWl4aFFVRlhMRU5CVGxNN1FVRlBjRUk1UWl4UlFVRk5MRU5CVUdNN1FVRlJjRUlyUWl4aFFVRlhMRU5CVWxNN1FVRlRjRUpzUXl4UlFVRk5MRU5CVkdNN1FVRlZjRUp0UXl4aFFVRlhMRU5CVmxNN1FVRlhjRUo2UWl4cFFrRkJaVHRCUVZoTExFTTdPMnRDUVhGR1ZDeFZRVUZEUml4TFFVRkVPMEZCUVVFc1UwRkJWeXhKUVVGSlJpeExRVUZLTEVOQlFWVkZMRXRCUVZZc1EwRkJXRHRCUVVGQkxFTWlMQ0ptYVd4bElqb2lkSGRsWlc0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYm1sdGNHOXlkQ0I3SUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNCOUlHWnliMjBnSjJaeVlXMWxjM2x1WXljN1hHNXBiWEJ2Y25RZ2V5QmpiR0Z0Y0NCOUlHWnliMjBnSnk0dUwybHVZeTkwY21GdWMyWnZjbTFsY25Nbk8xeHVhVzF3YjNKMElIc2daMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VzSUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOeklIMGdabkp2YlNBbkxpNHZhVzVqTDJOaGJHTW5PMXh1YVcxd2IzSjBJSHNnWldGelpVOTFkQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OWxZWE5wYm1jbk8xeHVYRzVqYjI1emRDQmpiR0Z0Y0ZCeWIyZHlaWE56SUQwZ1kyeGhiWEFvTUN3Z01TazdYRzVjYm1OdmJuTjBJRTVGV0ZSZlUxUkZVRk1nUFNCN1hHNGdJR3h2YjNBNklDaDBkMlZsYmlrZ1BUNGdkSGRsWlc0dWMzUmhjblFvS1N4Y2JpQWdlVzk1YnpvZ0tIUjNaV1Z1S1NBOVBpQjBkMlZsYmk1eVpYWmxjbk5sS0NrdWMzUmhjblFvS1N4Y2JpQWdabXhwY0RvZ0tIUjNaV1Z1S1NBOVBpQjBkMlZsYmk1bWJHbHdLQ2t1YzNSaGNuUW9LVnh1ZlR0Y2JseHVZMnhoYzNNZ1ZIZGxaVzRnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCemRHRjBhV01nWkdWbVlYVnNkRkJ5YjNCeklEMGdlMXh1SUNBZ0lHUjFjbUYwYVc5dU9pQXpNREFzWEc0Z0lDQWdaV0Z6WlRvZ1pXRnpaVTkxZEN4Y2JpQWdJQ0JtY205dE9pQXdMRnh1SUNBZ0lIUnZPaUF4TEZ4dUlDQWdJR1pzYVhBNklEQXNYRzRnSUNBZ1pteHBjRU52ZFc1ME9pQXdMRnh1SUNBZ0lIbHZlVzg2SURBc1hHNGdJQ0FnZVc5NWIwTnZkVzUwT2lBd0xGeHVJQ0FnSUd4dmIzQTZJREFzWEc0Z0lDQWdiRzl2Y0VOdmRXNTBPaUF3TEZ4dUlDQWdJSEJzWVhsRWFYSmxZM1JwYjI0NklERmNiaUFnZlR0Y2JseHVJQ0J2YmxOMFlYSjBLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2daSFZ5WVhScGIyNHNJSEJzWVhsRWFYSmxZM1JwYjI0Z2ZTQTlJSFJvYVhNdWNISnZjSE03WEc1Y2JpQWdJQ0IwYUdsekxtVnNZWEJ6WldRZ1BTQW9jR3hoZVVScGNtVmpkR2x2YmlBOVBUMGdNU2tnUHlBd0lEb2daSFZ5WVhScGIyNDdYRzRnSUNBZ2RHaHBjeTV3Y205bmNtVnpjeUE5SURBN1hHNGdJSDFjYmx4dUlDQjFjR1JoZEdVb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCa2RYSmhkR2x2Yml3Z1pXRnpaU3dnWm5KdmJTd2dkRzhzSUhCc1lYbEVhWEpsWTNScGIyNGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCcFppQW9JWFJvYVhNdWFYTk5ZVzUxWVd4VmNHUmhkR1VwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQXJQU0IwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VvS1NBcUlIQnNZWGxFYVhKbFkzUnBiMjQ3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkR2hwY3k1cGMwMWhiblZoYkZWd1pHRjBaU0E5SUdaaGJITmxPMXh1SUNBZ0lIUm9hWE11Y0hKdlozSmxjM01nUFNCamJHRnRjRkJ5YjJkeVpYTnpLR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0RBc0lHUjFjbUYwYVc5dUxDQjBhR2x6TG1Wc1lYQnpaV1FwS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lobWNtOXRMQ0IwYnl3Z1pXRnpaU2gwYUdsekxuQnliMmR5WlhOektTazdYRzRnSUgxY2JseHVJQ0JwYzBGamRHbHZia052YlhCc1pYUmxLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2daSFZ5WVhScGIyNHNJSEJzWVhsRWFYSmxZM1JwYjI0c0lIbHZlVzhzSUd4dmIzQXNJR1pzYVhBZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdiR1YwSUdselEyOXRjR3hsZEdVZ1BTQW9jR3hoZVVScGNtVmpkR2x2YmlBOVBUMGdNU2tnUHlBb2RHaHBjeTVsYkdGd2MyVmtJRDQ5SUdSMWNtRjBhVzl1S1NBNklDaDBhR2x6TG1Wc1lYQnpaV1FnUEQwZ01DazdYRzVjYmlBZ0lDQnBaaUFvYVhORGIyMXdiR1YwWlNBbUppQW9lVzk1YnlCOGZDQnNiMjl3SUh4OElHWnNhWEFwS1NCN1hHNGdJQ0FnSUNCc1pYUWdhWE5UZEdWd1ZHRnJaVzRnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJRTVGV0ZSZlUxUkZVRk1wSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYm1WNGRGTjBaWEFnUFNCT1JWaFVYMU5VUlZCVFcydGxlVjA3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR052ZFc1MFVISnZjQ0E5SUd0bGVTQXJJQ2REYjNWdWRDYzdYRzRnSUNBZ0lDQWdJR052Ym5OMElITjBaWEJOWVhnZ1BTQjBhR2x6TG1kbGRGQnliM0FvYTJWNUtUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2MzUmxjRU52ZFc1MElEMGdkR2hwY3k1blpYUlFjbTl3S0dOdmRXNTBVSEp2Y0NrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hOMFpYQk5ZWGdnUGlCemRHVndRMjkxYm5RcElIdGNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxuTmxkRkJ5YjNCektIdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ0amIzVnVkRkJ5YjNCZE9pQnpkR1Z3UTI5MWJuUWdLeUF4WEc0Z0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJQ0FnYm1WNGRGTjBaWEFvZEdocGN5azdYRzRnSUNBZ0lDQWdJQ0FnYVhOVGRHVndWR0ZyWlc0Z1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHbG1JQ2hwYzFOMFpYQlVZV3RsYmlrZ2FYTkRiMjF3YkdWMFpTQTlJR1poYkhObE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJwYzBOdmJYQnNaWFJsTzF4dUlDQjlYRzVjYmlBZ1oyVjBSV3hoY0hObFpDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVsYkdGd2MyVmtPMXh1SUNCOVhHNWNiaUFnWm14cGNDZ3BJSHRjYmlBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNCMGFHbHpMbkJ5YjNCekxtUjFjbUYwYVc5dUlDMGdkR2hwY3k1bGJHRndjMlZrTzF4dUlDQWdJRnQwYUdsekxuQnliM0J6TG1aeWIyMHNJSFJvYVhNdWNISnZjSE11ZEc5ZElEMGdXM1JvYVhNdWNISnZjSE11ZEc4c0lIUm9hWE11Y0hKdmNITXVabkp2YlYwN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnlaWFpsY25ObEtDa2dlMXh1SUNBZ0lIUm9hWE11Y0hKdmNITXVjR3hoZVVScGNtVmpkR2x2YmlBcVBTQXRNVHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUhObFpXc29jSEp2WjNKbGMzTXBJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHUjFjbUYwYVc5dUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJSFJvYVhNdVpXeGhjSE5sWkNBOUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLREFzSUdSMWNtRjBhVzl1TENCd2NtOW5jbVZ6Y3lrN1hHNGdJQ0FnZEdocGN5NXBjMDFoYm5WaGJGVndaR0YwWlNBOUlIUnlkV1U3WEc0Z0lDQWdhV1lnS0NGMGFHbHpMbWx6UVdOMGFYWmxLQ2twSUhSb2FYTXVjMk5vWldSMWJHVmtWWEJrWVhSbEtDazdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSEJ5YjNCektTQTlQaUJ1WlhjZ1ZIZGxaVzRvY0hKdmNITXBPMXh1SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjdGlvbnMvdHdlZW4uanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnZnJhbWVzeW5jJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZW5kZXJlcik7XG5cbiAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzLCBwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge307XG4gICAgdGhpcy5jaGFuZ2VkVmFsdWVzID0gW107XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgc3RhdGUuXG4gICAqIElmIGBrZXlgIGlzIG5vdCBkZWZpbmVkLCByZXR1cm4gZW50aXJlIGNhY2hlZCBzdGF0ZS5cbiAgICogSWYgYGtleWAgaXMgZGVmaW5lZCwgcmV0dXJuIGNhY2hlZCB2YWx1ZSBpZiBwcmVzZW50LlxuICAgKiBJZiBga2V5YCBpcyBkZWZpbmVkIGFuZCBjYWNoZWQgdmFsdWUgaXMgbm90IHByZXNlbnQsIHJlYWQgYW5kIHJldHVybi5cbiAgICogQHBhcmFtICB7c3RyaW5nfSAob3B0aW9uYWwpIGtleSBvZiB2YWx1ZVxuICAgKiBAcmV0dXJuIHt2YWx1ZX1cbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZChrZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlYWQgdmFsdWUgYWNjb3JkaW5nIHRvIGBvblJlYWRgXG4gICAqIEBwYXJhbSAge3N0cmluZ30gTmFtZSBvZiBwcm9wZXJ0eSB0byByZWFkXG4gICAqIEByZXR1cm4ge1t0eXBlXX1cbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uIHJlYWQoa2V5KSB7XG4gICAgaWYgKHRoaXMub25SZWFkKSB7XG4gICAgICByZXR1cm4gdGhpcy5vblJlYWQoa2V5KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBgc3RhdGVgIHdpdGggbmV3IHZhbHVlcyBhbmQgc2NoZWR1bGUgYHJlbmRlcmAuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXNcbiAgICogQHBhcmFtIHt2YWx1ZX0gdmFsdWUgdG9zZXRcbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBhcmdzWzBdO1xuICAgICAgLy8gU2V0IG11bHRpcGxlIHZhbHVlc1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCB2YWx1ZXNba2V5XSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfa2V5MiA9IGFyZ3NbMF0sXG4gICAgICAgICAgdmFsdWUgPSBhcmdzWzFdO1xuXG4gICAgICB0aGlzLnNldFZhbHVlKF9rZXkyLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCkge1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVJlbmRlcikodGhpcy5yZW5kZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vID4gV2lsZXkgLSA2IGluIHRoZSBNb3JuaW5nXG4gIC8qKlxuICAgKiBTZXQgYSBzaW5nbGUgdmFsdWVcbiAgICogSWYgYSBzdHJpbmcgb3IgbnVtYmVyLCBzZXQgZGlyZWN0bHkuXG4gICAqIElmIGFuIG9iamVjdCBvciBhcnJheSwgY3JlYXRlIG5ldyBvYmplY3Qgb3IgYXJyYXlcbiAgICogaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0LiBUaGVuIHNoYWxsb3cgY29tcGFyZVxuICAgKiB0byBzZXQgYW5kIGNvbXBhcmUgaW5kaXZpZHVhbCB2YWx1ZXMuXG4gICAqIE9uZSBvZiB0aGUgY2xlYXJlciBkcmF3YmFja3MgYW5kIGFubm95YW5jZXMgd2l0aFxuICAgKiB1c2luZyBtdXRhYmxlIGluc3RlYWQgb2YgaW1tdXRhYmxlIHN0YXRlcy5cbiAgICogQHBhcmFtIHtbdHlwZV19IGtleVxuICAgKiBAcGFyYW0ge1t0eXBlXX0gdmFsdWVcbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiBzZXRWYWx1ZShrZXksIHZhbHVlKSB7XG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9IHRoaXMuc3RhdGVba2V5XTtcblxuICAgIC8vIElmIG51bWJlciBvciBzdHJpbmcsIHNldCBkaXJlY3RseVxuICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZSkgfHwgKDAsIF91dGlscy5pc1N0cmluZykodmFsdWUpKSB7XG4gICAgICBpZiAoY3VycmVudFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNBcnJheSkodmFsdWUpKSB7XG4gICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgdmFyIG51bVZhbHVlcyA9IHZhbHVlLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVmFsdWVzOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XVtpXSAhPT0gdmFsdWVbaV0pIHtcbiAgICAgICAgICB0aGlzLnN0YXRlW2tleV1baV0gPSB2YWx1ZVtpXTtcbiAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLmlzT2JqKSh2YWx1ZSkpIHtcbiAgICAgIGlmICghY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciB2YWx1ZUtleSBpbiB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZVtrZXldW3ZhbHVlS2V5XSAhPT0gdmFsdWVbdmFsdWVLZXldKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldW3ZhbHVlS2V5XSA9IHZhbHVlW3ZhbHVlS2V5XTtcbiAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCAmJiB0aGlzLmNoYW5nZWRWYWx1ZXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgdGhpcy5jaGFuZ2VkVmFsdWVzLnB1c2goa2V5KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpcmVzIGBvblJlbmRlcmAgaWYgdmFsdWVzIGhhdmUgY2hhbmdlZCBvciBgZm9yY2VSZW5kZXJgXG4gICAqIGlzIHNldCB0byB0cnVlLlxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGZvcmNlUmVuZGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgIGlmICgoZm9yY2VSZW5kZXIgfHwgdGhpcy5oYXNDaGFuZ2VkKSAmJiB0aGlzLm9uUmVuZGVyKSB7XG4gICAgICB0aGlzLm9uUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VkVmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gUmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlcmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHNpVW1WdVpHVnlaWElpTENKd2NtOXdjeUlzSW5KbGJtUmxjaUlzSW1KcGJtUWlMQ0pqYjI1emRISjFZM1J2Y2lJc0ltUmxabUYxYkhSUWNtOXdjeUlzSW5OMFlYUmxJaXdpWTJoaGJtZGxaRlpoYkhWbGN5SXNJbWRsZENJc0ltdGxlU0lzSW5WdVpHVm1hVzVsWkNJc0luSmxZV1FpTENKdmJsSmxZV1FpTENKelpYUWlMQ0poY21keklpd2lkbUZzZFdWeklpd2ljMlYwVm1Gc2RXVWlMQ0oyWVd4MVpTSXNJbWhoYzBOb1lXNW5aV1FpTENKamRYSnlaVzUwVm1Gc2RXVWlMQ0p1ZFcxV1lXeDFaWE1pTENKc1pXNW5kR2dpTENKcElpd2lkbUZzZFdWTFpYa2lMQ0pwYm1SbGVFOW1JaXdpY0hWemFDSXNJbVp2Y21ObFVtVnVaR1Z5SWl3aWIyNVNaVzVrWlhJaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3p0QlFVTkJPenM3TzBsQlJVMUJMRkU3UVVGRFNpeHZRa0ZCV1VNc1MwRkJXaXhGUVVGdFFqdEJRVUZCT3p0QlFVTnFRaXhUUVVGTFF5eE5RVUZNTEVkQlFXTXNTMEZCUzBFc1RVRkJUQ3hEUVVGWlF5eEpRVUZhTEVOQlFXbENMRWxCUVdwQ0xFTkJRV1E3TzBGQlJVRXNVMEZCUzBZc1MwRkJUQ3huUWtGRFN5eExRVUZMUnl4WFFVRk1MRU5CUVdsQ1F5eFpRVVIwUWl4RlFVVkxTaXhMUVVaTU96dEJRVXRCTEZOQlFVdExMRXRCUVV3c1IwRkJZU3hGUVVGaU8wRkJRMEVzVTBGQlMwTXNZVUZCVEN4SFFVRnhRaXhGUVVGeVFqdEJRVU5FT3p0QlFVVkVPenM3T3pzN096czdPM0ZDUVZGQlF5eEhMR2RDUVVGSlF5eEhMRVZCUVVzN1FVRkRVQ3hSUVVGSlFTeEhRVUZLTEVWQlFWTTdRVUZEVUN4VlFVRkpMRXRCUVV0SUxFdEJRVXdzUTBGQlYwY3NSMEZCV0N4TlFVRnZRa01zVTBGQmVFSXNSVUZCYlVNN1FVRkRha01zWlVGQlR5eExRVUZMU2l4TFFVRk1MRU5CUVZkSExFZEJRVmdzUTBGQlVEdEJRVU5FTEU5QlJrUXNUVUZGVHp0QlFVTk1MR1ZCUVU4c1MwRkJTMFVzU1VGQlRDeERRVUZWUml4SFFVRldMRU5CUVZBN1FVRkRSRHRCUVVOR0xFdEJUa1FzVFVGTlR6dEJRVU5NTEdGQlFVOHNTMEZCUzBnc1MwRkJXanRCUVVORU8wRkJRMFlzUnpzN1FVRkZSRHM3T3pzN096dHhRa0ZMUVVzc1NTeHBRa0ZCUzBZc1J5eEZRVUZMTzBGQlExSXNVVUZCU1N4TFFVRkxSeXhOUVVGVUxFVkJRV2xDTzBGQlEyWXNZVUZCVHl4TFFVRkxRU3hOUVVGTUxFTkJRVmxJTEVkQlFWb3NRMEZCVUR0QlFVTkVPMEZCUTBZc1J6czdRVUZGUkRzN096czdPenR4UWtGTFFVa3NSeXhyUWtGQllUdEJRVUZCTEhORFFVRk9ReXhKUVVGTk8wRkJRVTVCTEZWQlFVMDdRVUZCUVRzN1FVRkRXQ3hSUVVGSkxFOUJRVTlCTEV0QlFVc3NRMEZCVEN4RFFVRlFMRXRCUVcxQ0xGZEJRWFpDTEVWQlFXOURPMEZCUVVFc1ZVRkRNVUpETEUxQlJEQkNMRWRCUTJaRUxFbEJSR1U3UVVGRmJFTTdPMEZCUTBFc1YwRkJTeXhKUVVGTlRDeEhRVUZZTEVsQlFXdENUU3hOUVVGc1FpeEZRVUV3UWp0QlFVTjRRaXhoUVVGTFF5eFJRVUZNTEVOQlFXTlFMRWRCUVdRc1JVRkJiVUpOTEU5QlFVOU9MRWRCUVZBc1EwRkJia0k3UVVGRFJEdEJRVU5HTEV0QlRrUXNUVUZOVHp0QlFVRkJMRlZCUTBkQkxFdEJSRWdzUjBGRGEwSkxMRWxCUkd4Q08wRkJRVUVzVlVGRFVVY3NTMEZFVWl4SFFVTnJRa2dzU1VGRWJFSTdPMEZCUlV3c1YwRkJTMFVzVVVGQlRDeERRVUZqVUN4TFFVRmtMRVZCUVcxQ1VTeExRVUZ1UWp0QlFVTkVPenRCUVVWRUxGRkJRVWtzUzBGQlMwTXNWVUZCVkN4RlFVRnhRanRCUVVOdVFpeHZRMEZCWXl4TFFVRkxhRUlzVFVGQmJrSTdRVUZEUkRzN1FVRkZSQ3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenRCUVVWRU8wRkJRMEU3T3pzN096czdPenM3T3pzN2NVSkJWMEZqTEZFc2NVSkJRVk5RTEVjc1JVRkJTMUVzU3l4RlFVRlBPMEZCUTI1Q0xGRkJRVTFGTEdWQlFXVXNTMEZCUzJJc1MwRkJUQ3hEUVVGWFJ5eEhRVUZZTEVOQlFYSkNPenRCUVVWQk8wRkJRMEVzVVVGQlNTeHJRa0ZCVFZFc1MwRkJUaXhMUVVGblFpeHhRa0ZCVTBFc1MwRkJWQ3hEUVVGd1FpeEZRVUZ4UXp0QlFVTnVReXhWUVVGSlJTeHBRa0ZCYVVKR0xFdEJRWEpDTEVWQlFUUkNPMEZCUXpGQ0xHRkJRVXRZTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hKUVVGclFsRXNTMEZCYkVJN1FVRkRRU3hoUVVGTFF5eFZRVUZNTEVkQlFXdENMRWxCUVd4Q08wRkJRMFE3UVVGRFJpeExRVXhFTEUxQlMwOHNTVUZCU1N4dlFrRkJVVVFzUzBGQlVpeERRVUZLTEVWQlFXOUNPMEZCUTNwQ0xGVkJRVWtzUTBGQlEwVXNXVUZCVEN4RlFVRnRRanRCUVVOcVFpeGhRVUZMWWl4TFFVRk1MRU5CUVZkSExFZEJRVmdzU1VGQmEwSXNSVUZCYkVJN1FVRkRSRHM3UVVGRlJDeFZRVUZOVnl4WlFVRlpTQ3hOUVVGTlNTeE5RVUY0UWp0QlFVTkJMRmRCUVVzc1NVRkJTVU1zU1VGQlNTeERRVUZpTEVWQlFXZENRU3hKUVVGSlJpeFRRVUZ3UWl4RlFVRXJRa1VzUjBGQkwwSXNSVUZCYjBNN1FVRkRiRU1zV1VGQlNTeExRVUZMYUVJc1MwRkJUQ3hEUVVGWFJ5eEhRVUZZTEVWQlFXZENZU3hEUVVGb1FpeE5RVUYxUWt3c1RVRkJUVXNzUTBGQlRpeERRVUV6UWl4RlFVRnhRenRCUVVOdVF5eGxRVUZMYUVJc1MwRkJUQ3hEUVVGWFJ5eEhRVUZZTEVWQlFXZENZU3hEUVVGb1FpeEpRVUZ4UWt3c1RVRkJUVXNzUTBGQlRpeERRVUZ5UWp0QlFVTkJMR1ZCUVV0S0xGVkJRVXdzUjBGQmEwSXNTVUZCYkVJN1FVRkRSRHRCUVVOR08wRkJRMFlzUzBGYVRTeE5RVmxCTEVsQlFVa3NhMEpCUVUxRUxFdEJRVTRzUTBGQlNpeEZRVUZyUWp0QlFVTjJRaXhWUVVGSkxFTkJRVU5GTEZsQlFVd3NSVUZCYlVJN1FVRkRha0lzWVVGQlMySXNTMEZCVEN4RFFVRlhSeXhIUVVGWUxFbEJRV3RDTEVWQlFXeENPMEZCUTBRN08wRkJSVVFzVjBGQlN5eEpRVUZKWXl4UlFVRlVMRWxCUVhGQ1RpeExRVUZ5UWl4RlFVRTBRanRCUVVNeFFpeFpRVUZKTEV0QlFVdFlMRXRCUVV3c1EwRkJWMGNzUjBGQldDeEZRVUZuUW1Nc1VVRkJhRUlzVFVGQk9FSk9MRTFCUVUxTkxGRkJRVTRzUTBGQmJFTXNSVUZCYlVRN1FVRkRha1FzWlVGQlMycENMRXRCUVV3c1EwRkJWMGNzUjBGQldDeEZRVUZuUW1Nc1VVRkJhRUlzU1VGQk5FSk9MRTFCUVUxTkxGRkJRVTRzUTBGQk5VSTdRVUZEUVN4bFFVRkxUQ3hWUVVGTUxFZEJRV3RDTEVsQlFXeENPMEZCUTBRN1FVRkRSanRCUVVOR096dEJRVVZFTEZGQlFVa3NTMEZCUzBFc1ZVRkJUQ3hKUVVGdFFpeExRVUZMV0N4aFFVRk1MRU5CUVcxQ2FVSXNUMEZCYmtJc1EwRkJNa0ptTEVkQlFUTkNMRTFCUVc5RExFTkJRVU1zUTBGQk5VUXNSVUZCSzBRN1FVRkROMFFzVjBGQlMwWXNZVUZCVEN4RFFVRnRRbXRDTEVsQlFXNUNMRU5CUVhkQ2FFSXNSMEZCZUVJN1FVRkRSRHRCUVVOR0xFYzdPMEZCUlVRN096czdPenM3Y1VKQlMwRlFMRTBzY1VKQlFUUkNPMEZCUVVFc1VVRkJja0ozUWl4WFFVRnhRaXgxUlVGQlVDeExRVUZQT3p0QlFVTXhRaXhSUVVGSkxFTkJRVU5CTEdWQlFXVXNTMEZCUzFJc1ZVRkJja0lzUzBGQmIwTXNTMEZCUzFNc1VVRkJOME1zUlVGQmRVUTdRVUZEY2tRc1YwRkJTMEVzVVVGQlREdEJRVU5FT3p0QlFVVkVMRk5CUVV0d1FpeGhRVUZNTEVOQlFXMUNZeXhOUVVGdVFpeEhRVUUwUWl4RFFVRTFRanRCUVVOQkxGTkJRVXRJTEZWQlFVd3NSMEZCYTBJc1MwRkJiRUk3TzBGQlJVRXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdPenM3YTBKQlIxbHNRaXhSSWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2diMjVHY21GdFpWSmxibVJsY2lCOUlHWnliMjBnSjJaeVlXMWxjM2x1WXljN1hHNXBiWEJ2Y25RZ2V5QnBjMEZ5Y21GNUxDQnBjMDlpYWl3Z2FYTk9kVzBzSUdselUzUnlhVzVuSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTJ4aGMzTWdVbVZ1WkdWeVpYSWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVjbVZ1WkdWeUlEMGdkR2hwY3k1eVpXNWtaWEl1WW1sdVpDaDBhR2x6S1R0Y2JseHVJQ0FnSUhSb2FYTXVjSEp2Y0hNZ1BTQjdYRzRnSUNBZ0lDQXVMaTUwYUdsekxtTnZibk4wY25WamRHOXlMbVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUM0dUxuQnliM0J6WEc0Z0lDQWdmVHRjYmx4dUlDQWdJSFJvYVhNdWMzUmhkR1VnUFNCN2ZUdGNiaUFnSUNCMGFHbHpMbU5vWVc1blpXUldZV3gxWlhNZ1BTQmJYVHRjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCSFpYUWdZM1Z5Y21WdWRDQnpkR0YwWlM1Y2JpQWdJQ29nU1dZZ1lHdGxlV0FnYVhNZ2JtOTBJR1JsWm1sdVpXUXNJSEpsZEhWeWJpQmxiblJwY21VZ1kyRmphR1ZrSUhOMFlYUmxMbHh1SUNBZ0tpQkpaaUJnYTJWNVlDQnBjeUJrWldacGJtVmtMQ0J5WlhSMWNtNGdZMkZqYUdWa0lIWmhiSFZsSUdsbUlIQnlaWE5sYm5RdVhHNGdJQ0FxSUVsbUlHQnJaWGxnSUdseklHUmxabWx1WldRZ1lXNWtJR05oWTJobFpDQjJZV3gxWlNCcGN5QnViM1FnY0hKbGMyVnVkQ3dnY21WaFpDQmhibVFnY21WMGRYSnVMbHh1SUNBZ0tpQkFjR0Z5WVcwZ0lIdHpkSEpwYm1kOUlDaHZjSFJwYjI1aGJDa2dhMlY1SUc5bUlIWmhiSFZsWEc0Z0lDQXFJRUJ5WlhSMWNtNGdlM1poYkhWbGZWeHVJQ0FnS2k5Y2JpQWdaMlYwS0d0bGVTa2dlMXh1SUNBZ0lHbG1JQ2hyWlhrcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxuTjBZWFJsVzJ0bGVWMGdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV6ZEdGMFpWdHJaWGxkTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWNtVmhaQ2hyWlhrcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1emRHRjBaVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nVW1WaFpDQjJZV3gxWlNCaFkyTnZjbVJwYm1jZ2RHOGdZRzl1VW1WaFpHQmNiaUFnSUNvZ1FIQmhjbUZ0SUNCN2MzUnlhVzVuZlNCT1lXMWxJRzltSUhCeWIzQmxjblI1SUhSdklISmxZV1JjYmlBZ0lDb2dRSEpsZEhWeWJpQjdXM1I1Y0dWZGZWeHVJQ0FnS2k5Y2JpQWdjbVZoWkNoclpYa3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXZibEpsWVdRcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTl1VW1WaFpDaHJaWGtwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCVmNHUmhkR1VnWUhOMFlYUmxZQ0IzYVhSb0lHNWxkeUIyWVd4MVpYTWdZVzVrSUhOamFHVmtkV3hsSUdCeVpXNWtaWEpnTGx4dUlDQWdLaUJBY0dGeVlXMGdlMjlpYW1WamRIMGdkbUZzZFdWelhHNGdJQ0FxSUVCd1lYSmhiU0I3ZG1Gc2RXVjlJSFpoYkhWbElIUnZjMlYwWEc0Z0lDQXFMMXh1SUNCelpYUW9MaTR1WVhKbmN5a2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdZWEpuYzFzeFhTQTlQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBZ0lHTnZibk4wSUZzZ2RtRnNkV1Z6SUYwZ1BTQmhjbWR6TzF4dUlDQWdJQ0FnTHk4Z1UyVjBJRzExYkhScGNHeGxJSFpoYkhWbGMxeHVJQ0FnSUNBZ1ptOXlJQ2hqYjI1emRDQnJaWGtnYVc0Z2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJWMFZtRnNkV1VvYTJWNUxDQjJZV3gxWlhOYmEyVjVYU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHTnZibk4wSUZzZ2EyVjVMQ0IyWVd4MVpTQmRJRDBnWVhKbmN6dGNiaUFnSUNBZ0lIUm9hWE11YzJWMFZtRnNkV1VvYTJWNUxDQjJZV3gxWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YUdGelEyaGhibWRsWkNrZ2UxeHVJQ0FnSUNBZ2IyNUdjbUZ0WlZKbGJtUmxjaWgwYUdsekxuSmxibVJsY2lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQXZMeUErSUZkcGJHVjVJQzBnTmlCcGJpQjBhR1VnVFc5eWJtbHVaMXh1SUNBdktpcGNiaUFnSUNvZ1UyVjBJR0VnYzJsdVoyeGxJSFpoYkhWbFhHNGdJQ0FxSUVsbUlHRWdjM1J5YVc1bklHOXlJRzUxYldKbGNpd2djMlYwSUdScGNtVmpkR3g1TGx4dUlDQWdLaUJKWmlCaGJpQnZZbXBsWTNRZ2IzSWdZWEp5WVhrc0lHTnlaV0YwWlNCdVpYY2diMkpxWldOMElHOXlJR0Z5Y21GNVhHNGdJQ0FxSUdsbUlHbDBJR1J2WlhOdUozUWdZV3h5WldGa2VTQmxlR2x6ZEM0Z1ZHaGxiaUJ6YUdGc2JHOTNJR052YlhCaGNtVmNiaUFnSUNvZ2RHOGdjMlYwSUdGdVpDQmpiMjF3WVhKbElHbHVaR2wyYVdSMVlXd2dkbUZzZFdWekxseHVJQ0FnS2lCUGJtVWdiMllnZEdobElHTnNaV0Z5WlhJZ1pISmhkMkpoWTJ0eklHRnVaQ0JoYm01dmVXRnVZMlZ6SUhkcGRHaGNiaUFnSUNvZ2RYTnBibWNnYlhWMFlXSnNaU0JwYm5OMFpXRmtJRzltSUdsdGJYVjBZV0pzWlNCemRHRjBaWE11WEc0Z0lDQXFJRUJ3WVhKaGJTQjdXM1I1Y0dWZGZTQnJaWGxjYmlBZ0lDb2dRSEJoY21GdElIdGJkSGx3WlYxOUlIWmhiSFZsWEc0Z0lDQXFMMXh1SUNCelpYUldZV3gxWlNoclpYa3NJSFpoYkhWbEtTQjdYRzRnSUNBZ1kyOXVjM1FnWTNWeWNtVnVkRlpoYkhWbElEMGdkR2hwY3k1emRHRjBaVnRyWlhsZE8xeHVYRzRnSUNBZ0x5OGdTV1lnYm5WdFltVnlJRzl5SUhOMGNtbHVaeXdnYzJWMElHUnBjbVZqZEd4NVhHNGdJQ0FnYVdZZ0tHbHpUblZ0S0haaGJIVmxLU0I4ZkNCcGMxTjBjbWx1WnloMllXeDFaU2twSUh0Y2JpQWdJQ0FnSUdsbUlDaGpkWEp5Wlc1MFZtRnNkV1VnSVQwOUlIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFNBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhoYzBOb1lXNW5aV1FnUFNCMGNuVmxPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9hWE5CY25KaGVTaDJZV3gxWlNrcElIdGNiaUFnSUNBZ0lHbG1JQ2doWTNWeWNtVnVkRlpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1ZiYTJWNVhTQTlJRnRkTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCamIyNXpkQ0J1ZFcxV1lXeDFaWE1nUFNCMllXeDFaUzVzWlc1bmRHZzdYRzRnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlZaaGJIVmxjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbk4wWVhSbFcydGxlVjFiYVYwZ0lUMDlJSFpoYkhWbFcybGRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpWdHJaWGxkVzJsZElEMGdkbUZzZFdWYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9hWE5QWW1vb2RtRnNkV1VwS1NCN1hHNGdJQ0FnSUNCcFppQW9JV04xY25KbGJuUldZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYwZ1BTQjdmVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnWm05eUlDaHNaWFFnZG1Gc2RXVkxaWGtnYVc0Z2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWMzUmhkR1ZiYTJWNVhWdDJZV3gxWlV0bGVWMGdJVDA5SUhaaGJIVmxXM1poYkhWbFMyVjVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFZ0MllXeDFaVXRsZVYwZ1BTQjJZV3gxWlZ0MllXeDFaVXRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdkR2hwY3k1b1lYTkRhR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBhR2x6TG1oaGMwTm9ZVzVuWldRZ0ppWWdkR2hwY3k1amFHRnVaMlZrVm1Gc2RXVnpMbWx1WkdWNFQyWW9hMlY1S1NBOVBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZMmhoYm1kbFpGWmhiSFZsY3k1d2RYTm9LR3RsZVNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFWnBjbVZ6SUdCdmJsSmxibVJsY21BZ2FXWWdkbUZzZFdWeklHaGhkbVVnWTJoaGJtZGxaQ0J2Y2lCZ1ptOXlZMlZTWlc1a1pYSmdYRzRnSUNBcUlHbHpJSE5sZENCMGJ5QjBjblZsTGx4dUlDQWdLaUJBY21WMGRYSnVJSHQwYUdsemZWeHVJQ0FnS2k5Y2JpQWdjbVZ1WkdWeUtHWnZjbU5sVW1WdVpHVnlJRDBnWm1Gc2MyVXBJSHRjYmlBZ0lDQnBaaUFvS0dadmNtTmxVbVZ1WkdWeUlIeDhJSFJvYVhNdWFHRnpRMmhoYm1kbFpDa2dKaVlnZEdocGN5NXZibEpsYm1SbGNpa2dlMXh1SUNBZ0lDQWdkR2hwY3k1dmJsSmxibVJsY2lncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhSb2FYTXVZMmhoYm1kbFpGWmhiSFZsY3k1c1pXNW5kR2dnUFNBd08xeHVJQ0FnSUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ0E5SUdaaGJITmxPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVW1WdVpHVnlaWEk3WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yZW5kZXJlcnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgYXhlcyA9IFsnWCcsICdZJywgJ1onXTtcblxudmFyIHRyYW5zZm9ybVByb3BzID0ge1xuICB4OiB0cnVlLFxuICB5OiB0cnVlLFxuICB6OiB0cnVlXG59O1xuXG52YXIgU0NBTEUgPSAnc2NhbGUnO1xudmFyIFJPVEFURSA9ICdyb3RhdGUnO1xudmFyIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSc7XG52YXIgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBheGVzLmZvckVhY2goZnVuY3Rpb24gKGF4aXMpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtUHJvcHNbdGVybSArIGF4aXNdID0gdHJ1ZTtcbiAgfSk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNmb3JtUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM1J5WVc1elptOXliUzF3Y205d2N5NXFjeUpkTENKdVlXMWxjeUk2V3lKaGVHVnpJaXdpZEhKaGJuTm1iM0p0VUhKdmNITWlMQ0o0SWl3aWVTSXNJbm9pTENKVFEwRk1SU0lzSWxKUFZFRlVSU0lzSWxSU1FVNVRSazlTVFY5UVJWSlRVRVZEVkVsV1JTSXNJbFJGVWsxVElpd2labTl5UldGamFDSXNJblJsY20waUxDSmhlR2x6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeEpRVUZOUVN4UFFVRlBMRU5CUVVNc1IwRkJSQ3hGUVVGTkxFZEJRVTRzUlVGQlZ5eEhRVUZZTEVOQlFXSTdPMEZCUlVFc1NVRkJTVU1zYVVKQlFXbENPMEZCUTI1Q1F5eExRVUZITEVsQlJHZENPMEZCUlc1Q1F5eExRVUZITEVsQlJtZENPMEZCUjI1Q1F5eExRVUZITzBGQlNHZENMRU5CUVhKQ096dEJRVTFCTEVsQlFVMURMRkZCUVZFc1QwRkJaRHRCUVVOQkxFbEJRVTFETEZOQlFWTXNVVUZCWmp0QlFVTkJMRWxCUVUxRExIZENRVUYzUWl4elFrRkJPVUk3UVVGRFFTeEpRVUZOUXl4UlFVRlJMRU5CUVVNc1YwRkJSQ3hGUVVGalNDeExRVUZrTEVWQlFYRkNReXhOUVVGeVFpeEZRVUUyUWl4TlFVRTNRaXhGUVVGeFEwTXNjVUpCUVhKRExFTkJRV1E3TzBGQlJVRk9MR1ZCUVdWTExFMUJRV1lzU1VGQmVVSk1MR1ZCUVdWSkxFdEJRV1lzU1VGQmQwSktMR1ZCUVdWTkxIRkNRVUZtTEVsQlFYZERMRWxCUVhwR096dEJRVVZCUXl4TlFVRk5ReXhQUVVGT0xFTkJRV01zVlVGQlEwTXNTVUZCUkR0QlFVRkJMRk5CUVZWV0xFdEJRVXRUTEU5QlFVd3NRMEZCWVN4VlFVRkRSU3hKUVVGRU8wRkJRVUVzVjBGQlZWWXNaVUZCWlZNc1QwRkJUME1zU1VGQmRFSXNTVUZCT0VJc1NVRkJlRU03UVVGQlFTeEhRVUZpTEVOQlFWWTdRVUZCUVN4RFFVRmtPenRyUWtGRlpWWXNZeUlzSW1acGJHVWlPaUowY21GdWMyWnZjbTB0Y0hKdmNITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCaGVHVnpJRDBnV3lkWUp5d2dKMWtuTENBbldpZGRPMXh1WEc1c1pYUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1BTQjdYRzRnSUhnNklIUnlkV1VzWEc0Z0lIazZJSFJ5ZFdVc1hHNGdJSG82SUhSeWRXVmNibjA3WEc1Y2JtTnZibk4wSUZORFFVeEZJRDBnSjNOallXeGxKenRjYm1OdmJuTjBJRkpQVkVGVVJTQTlJQ2R5YjNSaGRHVW5PMXh1WTI5dWMzUWdWRkpCVGxOR1QxSk5YMUJGVWxOUVJVTlVTVlpGSUQwZ0ozUnlZVzV6Wm05eWJWQmxjbk53WldOMGFYWmxKenRjYm1OdmJuTjBJRlJGVWsxVElEMGdXeWQwY21GdWMyeGhkR1VuTENCVFEwRk1SU3dnVWs5VVFWUkZMQ0FuYzJ0bGR5Y3NJRlJTUVU1VFJrOVNUVjlRUlZKVFVFVkRWRWxXUlYwN1hHNWNiblJ5WVc1elptOXliVkJ5YjNCelcxSlBWRUZVUlYwZ1BTQjBjbUZ1YzJadmNtMVFjbTl3YzF0VFEwRk1SVjBnUFNCMGNtRnVjMlp2Y20xUWNtOXdjMXRVVWtGT1UwWlBVazFmVUVWU1UxQkZRMVJKVmtWZElEMGdkSEoxWlR0Y2JseHVWRVZTVFZNdVptOXlSV0ZqYUNnb2RHVnliU2tnUFQ0Z1lYaGxjeTVtYjNKRllXTm9LQ2hoZUdsektTQTlQaUIwY21GdWMyWnZjbTFRY205d2MxdDBaWEp0SUNzZ1lYaHBjMTBnUFNCMGNuVmxLU2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUhSeVlXNXpabTl5YlZCeWIzQnpPeUpkZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JlbmRlcmVycy9jc3MvdHJhbnNmb3JtLXByb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdmdQYXRoID0gZXhwb3J0cy5zdmcgPSBleHBvcnRzLmNzcyA9IGV4cG9ydHMuUmVuZGVyZXIgPSBleHBvcnRzLnZhbHVlID0gZXhwb3J0cy5zcHJpbmcgPSBleHBvcnRzLnN0YWdnZXIgPSBleHBvcnRzLnR3ZWVuID0gZXhwb3J0cy50cmFja09mZnNldCA9IGV4cG9ydHMudG91Y2hlcyA9IGV4cG9ydHMucG9pbnRlciA9IGV4cG9ydHMucGh5c2ljcyA9IGV4cG9ydHMucGFyYWxsZWwgPSBleHBvcnRzLmRlbGF5ID0gZXhwb3J0cy5jcm9zc0ZhZGUgPSBleHBvcnRzLmNvbXBvc2l0ZSA9IGV4cG9ydHMuY29sb3JUd2VlbiA9IGV4cG9ydHMuY2hhaW4gPSBleHBvcnRzLkFjdGlvbiA9IGV4cG9ydHMudmFsdWVUeXBlcyA9IGV4cG9ydHMudHJhbnNmb3JtID0gZXhwb3J0cy5lYXNpbmcgPSBleHBvcnRzLmNhbGMgPSB1bmRlZmluZWQ7XG5cbnZhciBfY2FsYzIgPSByZXF1aXJlKCcuL2luYy9jYWxjJyk7XG5cbnZhciBfY2FsYyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jYWxjMik7XG5cbnZhciBfZWFzaW5nMiA9IHJlcXVpcmUoJy4vaW5jL2Vhc2luZycpO1xuXG52YXIgX2Vhc2luZyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9lYXNpbmcyKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF90cmFuc2Zvcm0gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHJhbnNmb3JtZXJzKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IHJlcXVpcmUoJy4vaW5jL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF92YWx1ZVR5cGVzMik7XG5cbnZhciBfYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucycpO1xuXG52YXIgX2FjdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWN0aW9ucyk7XG5cbnZhciBfY2hhaW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NoYWluJyk7XG5cbnZhciBfY2hhaW4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hhaW4yKTtcblxudmFyIF9jb2xvclR3ZWVuMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jb2xvci10d2VlbicpO1xuXG52YXIgX2NvbG9yVHdlZW4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3JUd2VlbjIpO1xuXG52YXIgX2NvbXBvc2l0ZTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY29tcG9zaXRlJyk7XG5cbnZhciBfY29tcG9zaXRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2l0ZTIpO1xuXG52YXIgX2Nyb3NzRmFkZTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY3Jvc3MtZmFkZScpO1xuXG52YXIgX2Nyb3NzRmFkZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcm9zc0ZhZGUyKTtcblxudmFyIF9kZWxheTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvZGVsYXknKTtcblxudmFyIF9kZWxheTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWxheTIpO1xuXG52YXIgX3BhcmFsbGVsMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9wYXJhbGxlbCcpO1xuXG52YXIgX3BhcmFsbGVsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcmFsbGVsMik7XG5cbnZhciBfcGh5c2ljczIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcGh5c2ljcycpO1xuXG52YXIgX3BoeXNpY3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGh5c2ljczIpO1xuXG52YXIgX3BvaW50ZXIyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BvaW50ZXInKTtcblxudmFyIF9wb2ludGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvaW50ZXIyKTtcblxudmFyIF90b3VjaGVzMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy90b3VjaGVzJyk7XG5cbnZhciBfdG91Y2hlczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b3VjaGVzMik7XG5cbnZhciBfdHJhY2tPZmZzZXQyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3RyYWNrLW9mZnNldCcpO1xuXG52YXIgX3RyYWNrT2Zmc2V0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYWNrT2Zmc2V0Mik7XG5cbnZhciBfdHdlZW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4yKTtcblxudmFyIF9zdGFnZ2VyMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9zdGFnZ2VyJyk7XG5cbnZhciBfc3RhZ2dlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGFnZ2VyMik7XG5cbnZhciBfc3ByaW5nMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9zcHJpbmcnKTtcblxudmFyIF9zcHJpbmczID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ByaW5nMik7XG5cbnZhciBfdmFsdWUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3ZhbHVlJyk7XG5cbnZhciBfdmFsdWUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWUyKTtcblxudmFyIF9yZW5kZXJlcnMgPSByZXF1aXJlKCcuL3JlbmRlcmVycycpO1xuXG52YXIgX3JlbmRlcmVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW5kZXJlcnMpO1xuXG52YXIgX2NzczIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9jc3MnKTtcblxudmFyIF9jc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzMik7XG5cbnZhciBfc3ZnMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL3N2ZycpO1xuXG52YXIgX3N2ZzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmcyKTtcblxudmFyIF9zdmdQYXRoMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL3N2Zy1wYXRoJyk7XG5cbnZhciBfc3ZnUGF0aDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmV4cG9ydHMuY2FsYyA9IF9jYWxjOyAvLyBGcmFtZXN5bmMgc2NoZWR1bGVyc1xuXG5leHBvcnRzLmVhc2luZyA9IF9lYXNpbmc7XG5leHBvcnRzLnRyYW5zZm9ybSA9IF90cmFuc2Zvcm07XG5leHBvcnRzLnZhbHVlVHlwZXMgPSBfdmFsdWVUeXBlcztcblxuLy8gQWN0aW9uc1xuXG5leHBvcnRzLkFjdGlvbiA9IF9hY3Rpb25zMi5kZWZhdWx0O1xuZXhwb3J0cy5jaGFpbiA9IF9jaGFpbjMuZGVmYXVsdDtcbmV4cG9ydHMuY29sb3JUd2VlbiA9IF9jb2xvclR3ZWVuMy5kZWZhdWx0O1xuZXhwb3J0cy5jb21wb3NpdGUgPSBfY29tcG9zaXRlMy5kZWZhdWx0O1xuZXhwb3J0cy5jcm9zc0ZhZGUgPSBfY3Jvc3NGYWRlMy5kZWZhdWx0O1xuZXhwb3J0cy5kZWxheSA9IF9kZWxheTMuZGVmYXVsdDtcbi8vZXhwb3J0IGluZXJ0aWEgZnJvbSAnLi9hY3Rpb25zL2luZXJ0aWEnO1xuXG5leHBvcnRzLnBhcmFsbGVsID0gX3BhcmFsbGVsMy5kZWZhdWx0O1xuZXhwb3J0cy5waHlzaWNzID0gX3BoeXNpY3MzLmRlZmF1bHQ7XG5leHBvcnRzLnBvaW50ZXIgPSBfcG9pbnRlcjMuZGVmYXVsdDtcbmV4cG9ydHMudG91Y2hlcyA9IF90b3VjaGVzMy5kZWZhdWx0O1xuZXhwb3J0cy50cmFja09mZnNldCA9IF90cmFja09mZnNldDMuZGVmYXVsdDtcbmV4cG9ydHMudHdlZW4gPSBfdHdlZW4zLmRlZmF1bHQ7XG5leHBvcnRzLnN0YWdnZXIgPSBfc3RhZ2dlcjMuZGVmYXVsdDtcbmV4cG9ydHMuc3ByaW5nID0gX3NwcmluZzMuZGVmYXVsdDtcbmV4cG9ydHMudmFsdWUgPSBfdmFsdWUzLmRlZmF1bHQ7XG5cbi8vIFJlbmRlcmVyc1xuXG5leHBvcnRzLlJlbmRlcmVyID0gX3JlbmRlcmVyczIuZGVmYXVsdDtcbmV4cG9ydHMuY3NzID0gX2NzczMuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnID0gX3N2ZzMuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnUGF0aCA9IF9zdmdQYXRoMy5kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdiM0J0YjNScGIyNHVhbk1pWFN3aWJtRnRaWE1pT2xzaVkyRnNZeUlzSW1WaGMybHVaeUlzSW5SeVlXNXpabTl5YlNJc0luWmhiSFZsVkhsd1pYTWlMQ0pCWTNScGIyNGlMQ0pqYUdGcGJpSXNJbU52Ykc5eVZIZGxaVzRpTENKamIyMXdiM05wZEdVaUxDSmpjbTl6YzBaaFpHVWlMQ0prWld4aGVTSXNJbkJoY21Gc2JHVnNJaXdpY0doNWMybGpjeUlzSW5CdmFXNTBaWElpTENKMGIzVmphR1Z6SWl3aWRISmhZMnRQWm1aelpYUWlMQ0owZDJWbGJpSXNJbk4wWVdkblpYSWlMQ0p6Y0hKcGJtY2lMQ0oyWVd4MVpTSXNJbEpsYm1SbGNtVnlJaXdpWTNOeklpd2ljM1puSWl3aWMzWm5VR0YwYUNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3VVVGRFdVRXNTU3hWUVVSYU96dFJRVVZaUXl4Tk8xRkJRMEZETEZNN1VVRkRRVU1zVlRzN1FVRkZXanM3VVVGRFQwTXNUVHRSUVVOQlF5eExPMUZCUTBGRExGVTdVVUZEUVVNc1V6dFJRVU5CUXl4VE8xRkJRMEZETEVzN1FVRkRVRHM3VVVGRFQwTXNVVHRSUVVOQlF5eFBPMUZCUTBGRExFODdVVUZEUVVNc1R6dFJRVU5CUXl4WE8xRkJRMEZETEVzN1VVRkRRVU1zVHp0UlFVTkJReXhOTzFGQlEwRkRMRXM3TzBGQlJWQTdPMUZCUTA5RExGRTdVVUZEUVVNc1J6dFJRVU5CUXl4SE8xRkJRMEZETEU4aUxDSm1hV3hsSWpvaWNHOXdiVzkwYVc5dUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5OGdSbkpoYldWemVXNWpJSE5qYUdWa2RXeGxjbk5jYm1WNGNHOXlkQ0FxSUdGeklHTmhiR01nWm5KdmJTQW5MaTlwYm1NdlkyRnNZeWM3WEc1bGVIQnZjblFnS2lCaGN5QmxZWE5wYm1jZ1puSnZiU0FuTGk5cGJtTXZaV0Z6YVc1bkp6dGNibVY0Y0c5eWRDQXFJR0Z6SUhSeVlXNXpabTl5YlNCbWNtOXRJQ2N1TDJsdVl5OTBjbUZ1YzJadmNtMWxjbk1uTzF4dVpYaHdiM0owSUNvZ1lYTWdkbUZzZFdWVWVYQmxjeUJtY205dElDY3VMMmx1WXk5MllXeDFaUzEwZVhCbGN5YzdYRzVjYmk4dklFRmpkR2x2Ym5OY2JtVjRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaTloWTNScGIyNXpKenRjYm1WNGNHOXlkQ0JqYUdGcGJpQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlkyaGhhVzRuTzF4dVpYaHdiM0owSUdOdmJHOXlWSGRsWlc0Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDJOdmJHOXlMWFIzWldWdUp6dGNibVY0Y0c5eWRDQmpiMjF3YjNOcGRHVWdabkp2YlNBbkxpOWhZM1JwYjI1ekwyTnZiWEJ2YzJsMFpTYzdYRzVsZUhCdmNuUWdZM0p2YzNOR1lXUmxJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OWpjbTl6Y3kxbVlXUmxKenRjYm1WNGNHOXlkQ0JrWld4aGVTQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlpHVnNZWGtuTzF4dUx5OWxlSEJ2Y25RZ2FXNWxjblJwWVNCbWNtOXRJQ2N1TDJGamRHbHZibk12YVc1bGNuUnBZU2M3WEc1bGVIQnZjblFnY0dGeVlXeHNaV3dnWm5KdmJTQW5MaTloWTNScGIyNXpMM0JoY21Gc2JHVnNKenRjYm1WNGNHOXlkQ0J3YUhsemFXTnpJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OXdhSGx6YVdOekp6dGNibVY0Y0c5eWRDQndiMmx1ZEdWeUlHWnliMjBnSnk0dllXTjBhVzl1Y3k5d2IybHVkR1Z5Snp0Y2JtVjRjRzl5ZENCMGIzVmphR1Z6SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTkwYjNWamFHVnpKenRjYm1WNGNHOXlkQ0IwY21GamEwOW1abk5sZENCbWNtOXRJQ2N1TDJGamRHbHZibk12ZEhKaFkyc3RiMlptYzJWMEp6dGNibVY0Y0c5eWRDQjBkMlZsYmlCbWNtOXRJQ2N1TDJGamRHbHZibk12ZEhkbFpXNG5PMXh1Wlhod2IzSjBJSE4wWVdkblpYSWdabkp2YlNBbkxpOWhZM1JwYjI1ekwzTjBZV2RuWlhJbk8xeHVaWGh3YjNKMElITndjbWx1WnlCbWNtOXRJQ2N1TDJGamRHbHZibk12YzNCeWFXNW5KenRjYm1WNGNHOXlkQ0IyWVd4MVpTQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdmRtRnNkV1VuTzF4dVhHNHZMeUJTWlc1a1pYSmxjbk5jYm1WNGNHOXlkQ0JTWlc1a1pYSmxjaUJtY205dElDY3VMM0psYm1SbGNtVnljeWM3WEc1bGVIQnZjblFnWTNOeklHWnliMjBnSnk0dmNtVnVaR1Z5WlhKekwyTnpjeWM3WEc1bGVIQnZjblFnYzNabklHWnliMjBnSnk0dmNtVnVaR1Z5WlhKekwzTjJaeWM3WEc1bGVIQnZjblFnYzNablVHRjBhQ0JtY205dElDY3VMM0psYm1SbGNtVnljeTl6ZG1jdGNHRjBhQ2M3WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wb3Btb3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmN1YmljQmV6aWVyID0gZXhwb3J0cy5hbnRpY2lwYXRlID0gZXhwb3J0cy5jcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gZXhwb3J0cy5iYWNrSW5PdXQgPSBleHBvcnRzLmJhY2tPdXQgPSBleHBvcnRzLmJhY2tJbiA9IGV4cG9ydHMuY3JlYXRlQmFja0luID0gZXhwb3J0cy5jaXJjSW5PdXQgPSBleHBvcnRzLmNpcmNPdXQgPSBleHBvcnRzLmNpcmNJbiA9IGV4cG9ydHMuZWFzZUluT3V0ID0gZXhwb3J0cy5lYXNlT3V0ID0gZXhwb3J0cy5lYXNlSW4gPSBleHBvcnRzLmNyZWF0ZUV4cG9JbiA9IGV4cG9ydHMubGluZWFyID0gZXhwb3J0cy5jcmVhdGVNaXJyb3JlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSB1bmRlZmluZWQ7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1lcnMnKTtcblxudmFyIERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIID0gMS41MjU7XG5cbnZhciBjcmVhdGVSZXZlcnNlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSBmdW5jdGlvbiBjcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNpbmcoMSAtIHApO1xuICB9O1xufTtcbnZhciBjcmVhdGVNaXJyb3JlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlTWlycm9yZWRFYXNpbmcgPSBmdW5jdGlvbiBjcmVhdGVNaXJyb3JlZEVhc2luZyhlYXNpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPD0gMC41ID8gZWFzaW5nKDIgKiBwKSAvIDIgOiAoMiAtIGVhc2luZygyICogKDEgLSBwKSkpIC8gMjtcbiAgfTtcbn07XG5cbnZhciBsaW5lYXIgPSBleHBvcnRzLmxpbmVhciA9IGZ1bmN0aW9uIGxpbmVhcihwKSB7XG4gIHJldHVybiBwO1xufTtcblxudmFyIGNyZWF0ZUV4cG9JbiA9IGV4cG9ydHMuY3JlYXRlRXhwb0luID0gZnVuY3Rpb24gY3JlYXRlRXhwb0luKHBvd2VyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBNYXRoLnBvdyhwLCBwb3dlcik7XG4gIH07XG59O1xudmFyIGVhc2VJbiA9IGV4cG9ydHMuZWFzZUluID0gY3JlYXRlRXhwb0luKDIpO1xudmFyIGVhc2VPdXQgPSBleHBvcnRzLmVhc2VPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNlSW4pO1xudmFyIGVhc2VJbk91dCA9IGV4cG9ydHMuZWFzZUluT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoZWFzZUluKTtcblxudmFyIGNpcmNJbiA9IGV4cG9ydHMuY2lyY0luID0gZnVuY3Rpb24gY2lyY0luKHApIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocCkpO1xufTtcbnZhciBjaXJjT3V0ID0gZXhwb3J0cy5jaXJjT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoY2lyY0luKTtcbnZhciBjaXJjSW5PdXQgPSBleHBvcnRzLmNpcmNJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGNpcmNPdXQpO1xuXG52YXIgY3JlYXRlQmFja0luID0gZXhwb3J0cy5jcmVhdGVCYWNrSW4gPSBmdW5jdGlvbiBjcmVhdGVCYWNrSW4ocG93ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgKiBwICogKChwb3dlciArIDEpICogcCAtIHBvd2VyKTtcbiAgfTtcbn07XG52YXIgYmFja0luID0gZXhwb3J0cy5iYWNrSW4gPSBjcmVhdGVCYWNrSW4oREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xudmFyIGJhY2tPdXQgPSBleHBvcnRzLmJhY2tPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhiYWNrSW4pO1xudmFyIGJhY2tJbk91dCA9IGV4cG9ydHMuYmFja0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoYmFja0luKTtcblxudmFyIGNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBmdW5jdGlvbiBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nKHBvd2VyKSB7XG4gIHZhciBiYWNrRWFzaW5nID0gY3JlYXRlQmFja0luKHBvd2VyKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIChwICo9IDIpIDwgMSA/IDAuNSAqIGJhY2tFYXNpbmcocCkgOiAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwIC0gMSkpKTtcbiAgfTtcbn07XG5cbnZhciBhbnRpY2lwYXRlID0gZXhwb3J0cy5hbnRpY2lwYXRlID0gY3JlYXRlQW50aWNpcGF0ZUVhc2luZyhERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG5cbnZhciBjdWJpY0JlemllciA9IGV4cG9ydHMuY3ViaWNCZXppZXIgPSBmdW5jdGlvbiBjdWJpY0Jlemllcih4MSwgeTEsIHgyLCB5Mikge1xuICB2YXIgeEJlemllciA9ICgwLCBfdHJhbnNmb3JtZXJzLmJlemllcikoMCwgeDEsIHgyLCAxKTtcbiAgdmFyIHlCZXppZXIgPSAoMCwgX3RyYW5zZm9ybWVycy5iZXppZXIpKDAsIHkxLCB5MiwgMSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHlCZXppZXIoeEJlemllcih0KSk7XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYklrUkZSa0ZWVEZSZlQxWkZVbE5JVDA5VVgxTlVVa1ZPUjFSSUlpd2lZM0psWVhSbFVtVjJaWEp6WldSRllYTnBibWNpTENKbFlYTnBibWNpTENKd0lpd2lZM0psWVhSbFRXbHljbTl5WldSRllYTnBibWNpTENKc2FXNWxZWElpTENKamNtVmhkR1ZGZUhCdlNXNGlMQ0p3YjNkbGNpSXNJbVZoYzJWSmJpSXNJbVZoYzJWUGRYUWlMQ0psWVhObFNXNVBkWFFpTENKamFYSmpTVzRpTENKTllYUm9JaXdpYzJsdUlpd2lZV052Y3lJc0ltTnBjbU5QZFhRaUxDSmphWEpqU1c1UGRYUWlMQ0pqY21WaGRHVkNZV05yU1c0aUxDSmlZV05yU1c0aUxDSmlZV05yVDNWMElpd2lZbUZqYTBsdVQzVjBJaXdpWTNKbFlYUmxRVzUwYVdOcGNHRjBaVVZoYzJsdVp5SXNJbUpoWTJ0RllYTnBibWNpTENKd2IzY2lMQ0poYm5ScFkybHdZWFJsSWl3aVkzVmlhV05DWlhwcFpYSWlMQ0o0TVNJc0lua3hJaXdpZURJaUxDSjVNaUlzSW5oQ1pYcHBaWElpTENKNVFtVjZhV1Z5SWl3aWRDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdRVUZCUVRzN1FVRkZRU3hKUVVGTlFTdzJRa0ZCTmtJc1MwRkJia003TzBGQlJVOHNTVUZCVFVNc2MwUkJRWFZDTEZOQlFYWkNRU3h2UWtGQmRVSXNRMEZCUTBNc1RVRkJSRHRCUVVGQkxGTkJRVmtzVlVGQlEwTXNRMEZCUkR0QlFVRkJMRmRCUVU4c1NVRkJTVVFzVDBGQlR5eEpRVUZKUXl4RFFVRllMRU5CUVZnN1FVRkJRU3hIUVVGYU8wRkJRVUVzUTBGQk4wSTdRVUZEUVN4SlFVRk5ReXh6UkVGQmRVSXNVMEZCZGtKQkxHOUNRVUYxUWl4RFFVRkRSaXhOUVVGRU8wRkJRVUVzVTBGQldTeFZRVUZEUXl4RFFVRkVPMEZCUVVFc1YwRkJVVUVzUzBGQlN5eEhRVUZPTEVkQlFXRkVMRTlCUVU4c1NVRkJTVU1zUTBGQldDeEpRVUZuUWl4RFFVRTNRaXhIUVVGcFF5eERRVUZETEVsQlFVbEVMRTlCUVU4c1MwRkJTeXhKUVVGSlF5eERRVUZVTEVOQlFWQXNRMEZCVEN4SlFVRTBRaXhEUVVGd1JUdEJRVUZCTEVkQlFWbzdRVUZCUVN4RFFVRTNRanM3UVVGRlFTeEpRVUZOUlN3d1FrRkJVeXhUUVVGVVFTeE5RVUZUTEVOQlFVTkdMRU5CUVVRN1FVRkJRU3hUUVVGUFFTeERRVUZRTzBGQlFVRXNRMEZCWmpzN1FVRkZRU3hKUVVGTlJ5eHpRMEZCWlN4VFFVRm1RU3haUVVGbExFTkJRVU5ETEV0QlFVUTdRVUZCUVN4VFFVRlhMRlZCUVVOS0xFTkJRVVE3UVVGQlFTeHZRa0ZCVDBFc1EwRkJVQ3hGUVVGWlNTeExRVUZhTzBGQlFVRXNSMEZCV0R0QlFVRkJMRU5CUVhKQ08wRkJRMEVzU1VGQlRVTXNNRUpCUVZOR0xHRkJRV0VzUTBGQllpeERRVUZtTzBGQlEwRXNTVUZCVFVjc05FSkJRVlZTTEhGQ1FVRnhRazhzVFVGQmNrSXNRMEZCYUVJN1FVRkRRU3hKUVVGTlJTeG5RMEZCV1U0c2NVSkJRWEZDU1N4TlFVRnlRaXhEUVVGc1FqczdRVUZGUVN4SlFVRk5SeXd3UWtGQlV5eFRRVUZVUVN4TlFVRlRMRU5CUVVOU0xFTkJRVVE3UVVGQlFTeFRRVUZQTEVsQlFVbFRMRXRCUVV0RExFZEJRVXdzUTBGQlUwUXNTMEZCUzBVc1NVRkJUQ3hEUVVGVldDeERRVUZXTEVOQlFWUXNRMEZCV0R0QlFVRkJMRU5CUVdZN1FVRkRRU3hKUVVGTldTdzBRa0ZCVldRc2NVSkJRWEZDVlN4TlFVRnlRaXhEUVVGb1FqdEJRVU5CTEVsQlFVMUxMR2REUVVGWldpeHhRa0ZCY1VKWExFOUJRWEpDTEVOQlFXeENPenRCUVVWQkxFbEJRVTFGTEhORFFVRmxMRk5CUVdaQkxGbEJRV1VzUTBGQlExWXNTMEZCUkR0QlFVRkJMRk5CUVZjc1ZVRkJRMG9zUTBGQlJEdEJRVUZCTEZkQlFWRkJMRWxCUVVsQkxFTkJRVXdzU1VGQlZ5eERRVUZEU1N4UlFVRlJMRU5CUVZRc1NVRkJZMG9zUTBGQlpDeEhRVUZyUWtrc1MwRkJOMElzUTBGQlVEdEJRVUZCTEVkQlFWZzdRVUZCUVN4RFFVRnlRanRCUVVOQkxFbEJRVTFYTERCQ1FVRlRSQ3hoUVVGaGFrSXNNRUpCUVdJc1EwRkJaanRCUVVOQkxFbEJRVTF0UWl3MFFrRkJWV3hDTEhGQ1FVRnhRbWxDTEUxQlFYSkNMRU5CUVdoQ08wRkJRMEVzU1VGQlRVVXNaME5CUVZsb1FpeHhRa0ZCY1VKakxFMUJRWEpDTEVOQlFXeENPenRCUVVWQkxFbEJRVTFITERCRVFVRjVRaXhUUVVGNlFrRXNjMEpCUVhsQ0xFTkJRVU5rTEV0QlFVUXNSVUZCVnp0QlFVTXZReXhOUVVGTlpTeGhRVUZoVEN4aFFVRmhWaXhMUVVGaUxFTkJRVzVDTzBGQlEwRXNVMEZCVHl4VlFVRkRTaXhEUVVGRU8wRkJRVUVzVjBGQlVTeERRVUZEUVN4TFFVRkxMRU5CUVU0c1NVRkJWeXhEUVVGYUxFZEJRV2xDTEUxQlFVMXRRaXhYUVVGWGJrSXNRMEZCV0N4RFFVRjJRaXhIUVVGMVF5eFBRVUZQTEVsQlFVbFRMRXRCUVV0WExFZEJRVXdzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCUXl4RlFVRkVMRWxCUVU5d1FpeEpRVUZKTEVOQlFWZ3NRMEZCV2l4RFFVRllMRU5CUVRsRE8wRkJRVUVzUjBGQlVEdEJRVU5FTEVOQlNFMDdPMEZCUzBFc1NVRkJUWEZDTEd0RFFVRmhTQ3gxUWtGQmRVSnlRaXd3UWtGQmRrSXNRMEZCYmtJN08wRkJSVUVzU1VGQlRYbENMRzlEUVVGakxGTkJRV1JCTEZkQlFXTXNRMEZCUTBNc1JVRkJSQ3hGUVVGTFF5eEZRVUZNTEVWQlFWTkRMRVZCUVZRc1JVRkJZVU1zUlVGQllpeEZRVUZ2UWp0QlFVTTNReXhOUVVGTlF5eFZRVUZWTERCQ1FVRlBMRU5CUVZBc1JVRkJWVW9zUlVGQlZpeEZRVUZqUlN4RlFVRmtMRVZCUVd0Q0xFTkJRV3hDTEVOQlFXaENPMEZCUTBFc1RVRkJUVWNzVlVGQlZTd3dRa0ZCVHl4RFFVRlFMRVZCUVZWS0xFVkJRVllzUlVGQlkwVXNSVUZCWkN4RlFVRnJRaXhEUVVGc1FpeERRVUZvUWpzN1FVRkZRU3hUUVVGUExGVkJRVU5ITEVOQlFVUTdRVUZCUVN4WFFVRlBSQ3hSUVVGUlJDeFJRVUZSUlN4RFFVRlNMRU5CUVZJc1EwRkJVRHRCUVVGQkxFZEJRVkE3UVVGRFJDeERRVXhOSWl3aVptbHNaU0k2SW1WaGMybHVaeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR0psZW1sbGNpQjlJR1p5YjIwZ0p5NHZkSEpoYm5ObWIzSnRaWEp6Snp0Y2JseHVZMjl1YzNRZ1JFVkdRVlZNVkY5UFZrVlNVMGhQVDFSZlUxUlNSVTVIVkVnZ1BTQXhMalV5TlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bklEMGdLR1ZoYzJsdVp5a2dQVDRnS0hBcElEMCtJREVnTFNCbFlYTnBibWNvTVNBdElIQXBPMXh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlUxcGNuSnZjbVZrUldGemFXNW5JRDBnS0dWaGMybHVaeWtnUFQ0Z0tIQXBJRDArSUNod0lEdzlJREF1TlNrZ1B5QmxZWE5wYm1jb01pQXFJSEFwSUM4Z01pQTZJQ2d5SUMwZ1pXRnphVzVuS0RJZ0tpQW9NU0F0SUhBcEtTa2dMeUF5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYkdsdVpXRnlJRDBnS0hBcElEMCtJSEE3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVkZlSEJ2U1c0Z1BTQW9jRzkzWlhJcElEMCtJQ2h3S1NBOVBpQndJQ29xSUhCdmQyVnlPMXh1Wlhod2IzSjBJR052Ym5OMElHVmhjMlZKYmlBOUlHTnlaV0YwWlVWNGNHOUpiaWd5S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JsWVhObFQzVjBJRDBnWTNKbFlYUmxVbVYyWlhKelpXUkZZWE5wYm1jb1pXRnpaVWx1S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JsWVhObFNXNVBkWFFnUFNCamNtVmhkR1ZOYVhKeWIzSmxaRVZoYzJsdVp5aGxZWE5sU1c0cE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kybHlZMGx1SUQwZ0tIQXBJRDArSURFZ0xTQk5ZWFJvTG5OcGJpaE5ZWFJvTG1GamIzTW9jQ2twTzF4dVpYaHdiM0owSUdOdmJuTjBJR05wY21OUGRYUWdQU0JqY21WaGRHVlNaWFpsY25ObFpFVmhjMmx1WnloamFYSmpTVzRwTzF4dVpYaHdiM0owSUdOdmJuTjBJR05wY21OSmJrOTFkQ0E5SUdOeVpXRjBaVTFwY25KdmNtVmtSV0Z6YVc1bktHTnBjbU5QZFhRcE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzSmxZWFJsUW1GamEwbHVJRDBnS0hCdmQyVnlLU0E5UGlBb2NDa2dQVDRnS0hBZ0tpQndLU0FxSUNnb2NHOTNaWElnS3lBeEtTQXFJSEFnTFNCd2IzZGxjaWs3WEc1bGVIQnZjblFnWTI5dWMzUWdZbUZqYTBsdUlEMGdZM0psWVhSbFFtRmphMGx1S0VSRlJrRlZURlJmVDFaRlVsTklUMDlVWDFOVVVrVk9SMVJJS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JpWVdOclQzVjBJRDBnWTNKbFlYUmxVbVYyWlhKelpXUkZZWE5wYm1jb1ltRmphMGx1S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JpWVdOclNXNVBkWFFnUFNCamNtVmhkR1ZOYVhKeWIzSmxaRVZoYzJsdVp5aGlZV05yU1c0cE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzSmxZWFJsUVc1MGFXTnBjR0YwWlVWaGMybHVaeUE5SUNod2IzZGxjaWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQmlZV05yUldGemFXNW5JRDBnWTNKbFlYUmxRbUZqYTBsdUtIQnZkMlZ5S1R0Y2JpQWdjbVYwZFhKdUlDaHdLU0E5UGlBb0tIQWdLajBnTWlrZ1BDQXhLU0EvSURBdU5TQXFJR0poWTJ0RllYTnBibWNvY0NrZ09pQXdMalVnS2lBb01pQXRJRTFoZEdndWNHOTNLRElzSUMweE1DQXFJQ2h3SUMwZ01Ta3BLVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCaGJuUnBZMmx3WVhSbElEMGdZM0psWVhSbFFXNTBhV05wY0dGMFpVVmhjMmx1WnloRVJVWkJWVXhVWDA5V1JWSlRTRTlQVkY5VFZGSkZUa2RVU0NrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamRXSnBZMEpsZW1sbGNpQTlJQ2g0TVN3Z2VURXNJSGd5TENCNU1pa2dQVDRnZTF4dUlDQmpiMjV6ZENCNFFtVjZhV1Z5SUQwZ1ltVjZhV1Z5S0RBc0lIZ3hMQ0I0TWl3Z01TazdYRzRnSUdOdmJuTjBJSGxDWlhwcFpYSWdQU0JpWlhwcFpYSW9NQ3dnZVRFc0lIa3lMQ0F4S1R0Y2JseHVJQ0J5WlhSMWNtNGdLSFFwSUQwK0lIbENaWHBwWlhJb2VFSmxlbWxsY2loMEtTazdYRzU5TzF4dUlsMTlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmMvZWFzaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJ2ZyYW1lc3luYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENvbXBvc2l0ZUFjdGlvbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDb21wb3NpdGVBY3Rpb24sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENvbXBvc2l0ZUFjdGlvbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb3NpdGVBY3Rpb24pO1xuXG4gICAgdmFyIGFjdGlvbnMgPSBwcm9wcy5hY3Rpb25zLFxuICAgICAgICByZW1haW5pbmdQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWydhY3Rpb25zJ10pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHJlbWFpbmluZ1Byb3BzKSk7XG5cbiAgICBfdGhpcy5jdXJyZW50ID0ge307XG4gICAgX3RoaXMuYWN0aW9uS2V5cyA9IFtdO1xuICAgIF90aGlzLmFkZEFjdGlvbnMoYWN0aW9ucyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5hZGRBY3Rpb25zID0gZnVuY3Rpb24gYWRkQWN0aW9ucyhhY3Rpb25zKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChrZXkpIHtcbiAgICAgIGlmIChfdGhpczIuYWN0aW9uS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgIF90aGlzMi5hY3Rpb25LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMyW2tleV0gPSBhY3Rpb25zW2tleV07XG5cbiAgICAgIHZhciBvblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHYpIHtcbiAgICAgICAgX3RoaXMyLmN1cnJlbnRba2V5XSA9IHY7XG4gICAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKF90aGlzMi5zY2hlZHVsZWRVcGRhdGUpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMyW2tleV0uc2V0UHJvcHMoe1xuICAgICAgICBfb25TdG9wOiBmdW5jdGlvbiBfb25TdG9wKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIubnVtQWN0aXZlQWN0aW9ucy0tO1xuICAgICAgICB9XG4gICAgICB9KS5hZGRMaXN0ZW5lcihvblVwZGF0ZSk7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGtleSBpbiBhY3Rpb25zKSB7XG4gICAgICBfbG9vcChrZXkpO1xuICAgIH1cbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gdGhpcy5hY3Rpb25LZXlzLmxlbmd0aDtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXMzW2tleV0uc3RhcnQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczRba2V5XS5zdG9wKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5nZXRWZWxvY2l0eSA9IGZ1bmN0aW9uIGdldFZlbG9jaXR5KCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIHZlbG9jaXR5ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHZlbG9jaXR5W2tleV0gPSBfdGhpczVba2V5XS5nZXRWZWxvY2l0eSgpO1xuICAgIH0pO1xuICAgIHJldHVybiB2ZWxvY2l0eTtcbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDA7XG4gIH07XG5cbiAgcmV0dXJuIENvbXBvc2l0ZUFjdGlvbjtcbn0oXzIuZGVmYXVsdCk7XG5cbkNvbXBvc2l0ZUFjdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhY3Rpb25zLCBwcm9wcykge1xuICByZXR1cm4gbmV3IENvbXBvc2l0ZUFjdGlvbihfZXh0ZW5kcyh7XG4gICAgYWN0aW9uczogYWN0aW9uc1xuICB9LCBwcm9wcykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk52YlhCdmMybDBaUzVxY3lKZExDSnVZVzFsY3lJNld5SkRiMjF3YjNOcGRHVkJZM1JwYjI0aUxDSndjbTl3Y3lJc0ltRmpkR2x2Ym5NaUxDSnlaVzFoYVc1cGJtZFFjbTl3Y3lJc0ltTjFjbkpsYm5RaUxDSmhZM1JwYjI1TFpYbHpJaXdpWVdSa1FXTjBhVzl1Y3lJc0ltdGxlU0lzSW1sdVpHVjRUMllpTENKd2RYTm9JaXdpYjI1VmNHUmhkR1VpTENKMklpd2ljMk5vWldSMWJHVmtWWEJrWVhSbElpd2ljMlYwVUhKdmNITWlMQ0pmYjI1VGRHOXdJaXdpYm5WdFFXTjBhWFpsUVdOMGFXOXVjeUlzSW1Ga1pFeHBjM1JsYm1WeUlpd2liMjVUZEdGeWRDSXNJbXhsYm1kMGFDSXNJbVp2Y2tWaFkyZ2lMQ0p6ZEdGeWRDSXNJbTl1VTNSdmNDSXNJbk4wYjNBaUxDSm5aWFJXWld4dlkybDBlU0lzSW5abGJHOWphWFI1SWl3aWFYTkJZM1JwYjI1RGIyMXdiR1YwWlNJc0ltUmxabUYxYkhSUWNtOXdjeUlzSW5CaGMzTnBkbVVpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3T3pzN096czdPenRKUVVWTlFTeGxPenM3UVVGTFNpd3lRa0ZCV1VNc1MwRkJXaXhGUVVGdFFqdEJRVUZCT3p0QlFVRkJMRkZCUTFSRExFOUJSRk1zUjBGRGMwSkVMRXRCUkhSQ0xFTkJRMVJETEU5QlJGTTdRVUZCUVN4UlFVTkhReXhqUVVSSUxEUkNRVU56UWtZc1MwRkVkRUk3TzBGQlFVRXNhVVJCUldwQ0xHMUNRVUZOUlN4alFVRk9MRU5CUm1sQ096dEJRVWRxUWl4VlFVRkxReXhQUVVGTUxFZEJRV1VzUlVGQlpqdEJRVU5CTEZWQlFVdERMRlZCUVV3c1IwRkJhMElzUlVGQmJFSTdRVUZEUVN4VlFVRkxReXhWUVVGTUxFTkJRV2RDU2l4UFFVRm9RanRCUVV4cFFqdEJRVTFzUWpzN05FSkJSVVJKTEZVc2RVSkJRVmRLTEU4c1JVRkJVenRCUVVGQk96dEJRVUZCTEN0Q1FVTlFTeXhIUVVSUE8wRkJSV2hDTEZWQlFVa3NUMEZCUzBZc1ZVRkJUQ3hEUVVGblFrY3NUMEZCYUVJc1EwRkJkMEpFTEVkQlFYaENMRTFCUVdsRExFTkJRVU1zUTBGQmRFTXNSVUZCZVVNN1FVRkRka01zWlVGQlMwWXNWVUZCVEN4RFFVRm5Ra2tzU1VGQmFFSXNRMEZCY1VKR0xFZEJRWEpDTzBGQlEwUTdPMEZCUlVRc1lVRkJTMEVzUjBGQlRDeEpRVUZaVEN4UlFVRlJTeXhIUVVGU0xFTkJRVm83TzBGQlJVRXNWVUZCVFVjc1YwRkJWeXhUUVVGWVFTeFJRVUZYTEVOQlFVTkRMRU5CUVVRc1JVRkJUenRCUVVOMFFpeGxRVUZMVUN4UFFVRk1MRU5CUVdGSExFZEJRV0lzU1VGQmIwSkpMRU5CUVhCQ08wRkJRMEVzYzBOQlFXTXNUMEZCUzBNc1pVRkJia0k3UVVGRFJDeFBRVWhFT3p0QlFVdEJMR0ZCUVV0TUxFZEJRVXdzUlVGRFIwMHNVVUZFU0N4RFFVTlpPMEZCUTFKRExHbENRVUZUTzBGQlFVRXNhVUpCUVUwc1QwRkJTME1zWjBKQlFVd3NSVUZCVGp0QlFVRkJPMEZCUkVRc1QwRkVXaXhGUVVsSFF5eFhRVXBJTEVOQlNXVk9MRkZCU21ZN1FVRmlaMEk3TzBGQlEyeENMRk5CUVVzc1NVRkJUVWdzUjBGQldDeEpRVUZyUWt3c1QwRkJiRUlzUlVGQk1rSTdRVUZCUVN4WlFVRm9Ra3NzUjBGQlowSTdRVUZwUWpGQ08wRkJRMFlzUnpzN05FSkJSVVJWTEU4c2MwSkJRVlU3UVVGQlFUczdRVUZEVWl4VFFVRkxSaXhuUWtGQlRDeEhRVUYzUWl4TFFVRkxWaXhWUVVGTUxFTkJRV2RDWVN4TlFVRjRRenRCUVVOQkxGTkJRVXRpTEZWQlFVd3NRMEZCWjBKakxFOUJRV2hDTEVOQlFYZENMRlZCUVVOYUxFZEJRVVE3UVVGQlFTeGhRVUZUTEU5QlFVdEJMRWRCUVV3c1JVRkJWV0VzUzBGQlZpeEZRVUZVTzBGQlFVRXNTMEZCZUVJN1FVRkRSQ3hIT3pzMFFrRkZSRU1zVFN4eFFrRkJVenRCUVVGQk96dEJRVU5RTEZOQlFVdG9RaXhWUVVGTUxFTkJRV2RDWXl4UFFVRm9RaXhEUVVGM1FpeFZRVUZEV2l4SFFVRkVPMEZCUVVFc1lVRkJVeXhQUVVGTFFTeEhRVUZNTEVWQlFWVmxMRWxCUVZZc1JVRkJWRHRCUVVGQkxFdEJRWGhDTzBGQlEwUXNSenM3TkVKQlJVUkRMRmNzTUVKQlFXTTdRVUZCUVRzN1FVRkRXaXhSUVVGTlF5eFhRVUZYTEVWQlFXcENPMEZCUTBFc1UwRkJTMjVDTEZWQlFVd3NRMEZCWjBKakxFOUJRV2hDTEVOQlFYZENMRlZCUVVOYUxFZEJRVVE3UVVGQlFTeGhRVUZUYVVJc1UwRkJVMnBDTEVkQlFWUXNTVUZCWjBJc1QwRkJTMEVzUjBGQlRDeEZRVUZWWjBJc1YwRkJWaXhGUVVGNlFqdEJRVUZCTEV0QlFYaENPMEZCUTBFc1YwRkJUME1zVVVGQlVEdEJRVU5FTEVjN096UkNRVVZFUXl4blFpd3JRa0ZCYlVJN1FVRkRha0lzVjBGQlVTeExRVUZMVml4blFrRkJUQ3hMUVVFd1FpeERRVUZzUXp0QlFVTkVMRWM3T3pzN08wRkJia1JIWml4bExFTkJRMGN3UWl4WkxFZEJRV1U3UVVGRGNFSkRMRmRCUVZNN1FVRkVWeXhET3p0clFrRnhSRlFzVlVGQlEzcENMRTlCUVVRc1JVRkJWVVFzUzBGQlZpeEZRVUZ2UWp0QlFVTnFReXhUUVVGUExFbEJRVWxFTEdWQlFVbzdRVUZEVEVVN1FVRkVTeXhMUVVWR1JDeExRVVpGTEVWQlFWQTdRVUZKUkN4RElpd2labWxzWlNJNkltTnZiWEJ2YzJsMFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaThuTzF4dWFXMXdiM0owSUhzZ2IyNUdjbUZ0WlZWd1pHRjBaU0I5SUdaeWIyMGdKMlp5WVcxbGMzbHVZeWM3WEc1Y2JtTnNZWE56SUVOdmJYQnZjMmwwWlVGamRHbHZiaUJsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzRnSUhOMFlYUnBZeUJrWldaaGRXeDBVSEp2Y0hNZ1BTQjdYRzRnSUNBZ2NHRnpjMmwyWlRvZ2RISjFaVnh1SUNCOU8xeHVYRzRnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6S1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJoWTNScGIyNXpMQ0F1TGk1eVpXMWhhVzVwYm1kUWNtOXdjeUI5SUQwZ2NISnZjSE03WEc0Z0lDQWdjM1Z3WlhJb2NtVnRZV2x1YVc1blVISnZjSE1wTzF4dUlDQWdJSFJvYVhNdVkzVnljbVZ1ZENBOUlIdDlPMXh1SUNBZ0lIUm9hWE11WVdOMGFXOXVTMlY1Y3lBOUlGdGRPMXh1SUNBZ0lIUm9hWE11WVdSa1FXTjBhVzl1Y3loaFkzUnBiMjV6S1R0Y2JpQWdmVnh1WEc0Z0lHRmtaRUZqZEdsdmJuTW9ZV04wYVc5dWN5a2dlMXh1SUNBZ0lHWnZjaUFvWTI5dWMzUWdhMlY1SUdsdUlHRmpkR2x2Ym5NcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtRmpkR2x2Ymt0bGVYTXVhVzVrWlhoUFppaHJaWGtwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbUZqZEdsdmJrdGxlWE11Y0hWemFDaHJaWGtwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCMGFHbHpXMnRsZVYwZ1BTQmhZM1JwYjI1elcydGxlVjA3WEc1Y2JpQWdJQ0FnSUdOdmJuTjBJRzl1VlhCa1lYUmxJRDBnS0hZcElEMCtJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWpkWEp5Wlc1MFcydGxlVjBnUFNCMk8xeHVJQ0FnSUNBZ0lDQnZia1p5WVcxbFZYQmtZWFJsS0hSb2FYTXVjMk5vWldSMWJHVmtWWEJrWVhSbEtUdGNiaUFnSUNBZ0lIMDdYRzVjYmlBZ0lDQWdJSFJvYVhOYmEyVjVYVnh1SUNBZ0lDQWdJQ0F1YzJWMFVISnZjSE1vZTF4dUlDQWdJQ0FnSUNBZ0lGOXZibE4wYjNBNklDZ3BJRDArSUhSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5MHRYRzRnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0FnSUM1aFpHUk1hWE4wWlc1bGNpaHZibFZ3WkdGMFpTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQjBhR2x6TG01MWJVRmpkR2wyWlVGamRHbHZibk1nUFNCMGFHbHpMbUZqZEdsdmJrdGxlWE11YkdWdVozUm9PMXh1SUNBZ0lIUm9hWE11WVdOMGFXOXVTMlY1Y3k1bWIzSkZZV05vS0NoclpYa3BJRDArSUhSb2FYTmJhMlY1WFM1emRHRnlkQ2dwS1R0Y2JpQWdmVnh1WEc0Z0lHOXVVM1J2Y0NncElIdGNiaUFnSUNCMGFHbHpMbUZqZEdsdmJrdGxlWE11Wm05eVJXRmphQ2dvYTJWNUtTQTlQaUIwYUdselcydGxlVjB1YzNSdmNDZ3BLVHRjYmlBZ2ZWeHVYRzRnSUdkbGRGWmxiRzlqYVhSNUtDa2dlMXh1SUNBZ0lHTnZibk4wSUhabGJHOWphWFI1SUQwZ2UzMDdYRzRnSUNBZ2RHaHBjeTVoWTNScGIyNUxaWGx6TG1admNrVmhZMmdvS0d0bGVTa2dQVDRnZG1Wc2IyTnBkSGxiYTJWNVhTQTlJSFJvYVhOYmEyVjVYUzVuWlhSV1pXeHZZMmwwZVNncEtUdGNiaUFnSUNCeVpYUjFjbTRnZG1Wc2IyTnBkSGs3WEc0Z0lIMWNibHh1SUNCcGMwRmpkR2x2YmtOdmJYQnNaWFJsS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUFvZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1eklEMDlQU0F3S1R0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1lXTjBhVzl1Y3l3Z2NISnZjSE1wSUQwK0lIdGNiaUFnY21WMGRYSnVJRzVsZHlCRGIyMXdiM05wZEdWQlkzUnBiMjRvZTF4dUlDQWdJR0ZqZEdsdmJuTXNYRzRnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdmU2s3WEc1OU8xeHVJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnZnJhbWVzeW5jJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGFyYWxsZWwgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoUGFyYWxsZWwsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFBhcmFsbGVsKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhcmFsbGVsKTtcblxuICAgIHZhciBhY3Rpb25zID0gcHJvcHMuYWN0aW9ucyxcbiAgICAgICAgcmVtYWluaW5nUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsnYWN0aW9ucyddKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCByZW1haW5pbmdQcm9wcykpO1xuXG4gICAgX3RoaXMuYWN0aW9ucyA9IFtdO1xuICAgIF90aGlzLmN1cnJlbnQgPSBbXTtcbiAgICBfdGhpcy5hZGRBY3Rpb25zKGFjdGlvbnMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5hZGRBY3Rpb24gPSBmdW5jdGlvbiBhZGRBY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5hY3Rpb25zLmluZGV4T2YoYWN0aW9uKSAhPT0gLTEpIHJldHVybjtcblxuICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvbik7XG5cbiAgICB2YXIgaSA9IHRoaXMuYWN0aW9ucy5sZW5ndGggLSAxO1xuICAgIHZhciBvblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHYpIHtcbiAgICAgIF90aGlzMi5jdXJyZW50W2ldID0gdjtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKF90aGlzMi5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH07XG5cbiAgICBvblVwZGF0ZShhY3Rpb24uZ2V0KCkpO1xuXG4gICAgYWN0aW9uLnNldFByb3BzKHtcbiAgICAgIF9vblN0b3A6IGZ1bmN0aW9uIF9vblN0b3AoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIubnVtQWN0aXZlQWN0aW9ucy0tO1xuICAgICAgfVxuICAgIH0pLmFkZExpc3RlbmVyKG9uVXBkYXRlKTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUuYWRkQWN0aW9ucyA9IGZ1bmN0aW9uIGFkZEFjdGlvbnMoYWN0aW9ucykge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIHJldHVybiBfdGhpczMuYWRkQWN0aW9uKGFjdGlvbik7XG4gICAgfSk7XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IHRoaXMuYWN0aW9ucy5sZW5ndGg7XG4gICAgdGhpcy5hY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgcmV0dXJuIGFjdGlvbi5zdGFydCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdGhpcy5hY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgcmV0dXJuIGFjdGlvbi5zdG9wKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5tYXAoZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgcmV0dXJuIGFjdGlvbi5nZXRWZWxvY2l0eSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwO1xuICB9O1xuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5nZXRDaGlsZHJlbiA9IGZ1bmN0aW9uIGdldENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmFjdGlvbnM7XG4gIH07XG5cbiAgcmV0dXJuIFBhcmFsbGVsO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGFyYWxsZWwoX2V4dGVuZHMoeyBhY3Rpb25zOiBhY3Rpb25zIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQmhjbUZzYkdWc0xtcHpJbDBzSW01aGJXVnpJanBiSWxCaGNtRnNiR1ZzSWl3aWNISnZjSE1pTENKaFkzUnBiMjV6SWl3aWNtVnRZV2x1YVc1blVISnZjSE1pTENKamRYSnlaVzUwSWl3aVlXUmtRV04wYVc5dWN5SXNJbUZrWkVGamRHbHZiaUlzSW1GamRHbHZiaUlzSW1sdVpHVjRUMllpTENKd2RYTm9JaXdpYVNJc0lteGxibWQwYUNJc0ltOXVWWEJrWVhSbElpd2lkaUlzSW5OamFHVmtkV3hsWkZWd1pHRjBaU0lzSW1kbGRDSXNJbk5sZEZCeWIzQnpJaXdpWDI5dVUzUnZjQ0lzSW01MWJVRmpkR2wyWlVGamRHbHZibk1pTENKaFpHUk1hWE4wWlc1bGNpSXNJbVp2Y2tWaFkyZ2lMQ0p2YmxOMFlYSjBJaXdpYzNSaGNuUWlMQ0p2YmxOMGIzQWlMQ0p6ZEc5d0lpd2laMlYwVm1Wc2IyTnBkSGtpTENKdFlYQWlMQ0pwYzBGamRHbHZia052YlhCc1pYUmxJaXdpWjJWMFEyaHBiR1J5Wlc0aVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN096czdPenM3T3p0SlFVVk5RU3hST3pzN1FVRkRTaXh2UWtGQldVTXNTMEZCV2l4RlFVRnRRanRCUVVGQk96dEJRVUZCTEZGQlExUkRMRTlCUkZNc1IwRkRjMEpFTEV0QlJIUkNMRU5CUTFSRExFOUJSRk03UVVGQlFTeFJRVU5IUXl4alFVUklMRFJDUVVOelFrWXNTMEZFZEVJN08wRkJRVUVzYVVSQlJXcENMRzFDUVVGTlJTeGpRVUZPTEVOQlJtbENPenRCUVVkcVFpeFZRVUZMUkN4UFFVRk1MRWRCUVdVc1JVRkJaanRCUVVOQkxGVkJRVXRGTEU5QlFVd3NSMEZCWlN4RlFVRm1PMEZCUTBFc1ZVRkJTME1zVlVGQlRDeERRVUZuUWtnc1QwRkJhRUk3UVVGTWFVSTdRVUZOYkVJN08zRkNRVVZFU1N4VExITkNRVUZWUXl4TkxFVkJRVkU3UVVGQlFUczdRVUZEYUVJc1VVRkJTU3hMUVVGTFRDeFBRVUZNTEVOQlFXRk5MRTlCUVdJc1EwRkJjVUpFTEUxQlFYSkNMRTFCUVdsRExFTkJRVU1zUTBGQmRFTXNSVUZCZVVNN08wRkJSWHBETEZOQlFVdE1MRTlCUVV3c1EwRkJZVThzU1VGQllpeERRVUZyUWtZc1RVRkJiRUk3TzBGQlJVRXNVVUZCVFVjc1NVRkJTU3hMUVVGTFVpeFBRVUZNTEVOQlFXRlRMRTFCUVdJc1IwRkJjMElzUTBGQmFFTTdRVUZEUVN4UlFVRk5ReXhYUVVGWExGTkJRVmhCTEZGQlFWY3NRMEZCUTBNc1EwRkJSQ3hGUVVGUE8wRkJRM1JDTEdGQlFVdFVMRTlCUVV3c1EwRkJZVTBzUTBGQllpeEpRVUZyUWtjc1EwRkJiRUk3UVVGRFFTeHZRMEZCWXl4UFFVRkxReXhsUVVGdVFqdEJRVU5FTEV0QlNFUTdPMEZCUzBGR0xHRkJRVk5NTEU5QlFVOVJMRWRCUVZBc1JVRkJWRHM3UVVGRlFWSXNWMEZEUjFNc1VVRkVTQ3hEUVVOWk8wRkJRMUpETEdWQlFWTTdRVUZCUVN4bFFVRk5MRTlCUVV0RExHZENRVUZNTEVWQlFVNDdRVUZCUVR0QlFVUkVMRXRCUkZvc1JVRkpSME1zVjBGS1NDeERRVWxsVUN4UlFVcG1PMEZCUzBRc1J6czdjVUpCUlVSUUxGVXNkVUpCUVZkSUxFOHNSVUZCVXp0QlFVRkJPenRCUVVOc1FrRXNXVUZCVVd0Q0xFOUJRVklzUTBGQlowSXNWVUZCUTJJc1RVRkJSRHRCUVVGQkxHRkJRVmtzVDBGQlMwUXNVMEZCVEN4RFFVRmxReXhOUVVGbUxFTkJRVm83UVVGQlFTeExRVUZvUWp0QlFVTkVMRWM3TzNGQ1FVVkVZeXhQTEhOQ1FVRlZPMEZCUTFJc1UwRkJTMGdzWjBKQlFVd3NSMEZCZDBJc1MwRkJTMmhDTEU5QlFVd3NRMEZCWVZNc1RVRkJja003UVVGRFFTeFRRVUZMVkN4UFFVRk1MRU5CUVdGclFpeFBRVUZpTEVOQlFYRkNMRlZCUVVOaUxFMUJRVVE3UVVGQlFTeGhRVUZaUVN4UFFVRlBaU3hMUVVGUUxFVkJRVm83UVVGQlFTeExRVUZ5UWp0QlFVTkVMRWM3TzNGQ1FVVkVReXhOTEhGQ1FVRlRPMEZCUTFBc1UwRkJTM0pDTEU5QlFVd3NRMEZCWVd0Q0xFOUJRV0lzUTBGQmNVSXNWVUZCUTJJc1RVRkJSRHRCUVVGQkxHRkJRVmxCTEU5QlFVOXBRaXhKUVVGUUxFVkJRVm83UVVGQlFTeExRVUZ5UWp0QlFVTkVMRWM3TzNGQ1FVVkVReXhYTERCQ1FVRmpPMEZCUTFvc1YwRkJUeXhMUVVGTGRrSXNUMEZCVEN4RFFVRmhkMElzUjBGQllpeERRVUZwUWl4VlFVRkRia0lzVFVGQlJEdEJRVUZCTEdGQlFWbEJMRTlCUVU5clFpeFhRVUZRTEVWQlFWbzdRVUZCUVN4TFFVRnFRaXhEUVVGUU8wRkJRMFFzUnpzN2NVSkJSVVJGTEdkQ0xDdENRVUZ0UWp0QlFVTnFRaXhYUVVGUkxFdEJRVXRVTEdkQ1FVRk1MRXRCUVRCQ0xFTkJRV3hETzBGQlEwUXNSenM3Y1VKQlJVUlZMRmNzTUVKQlFXTTdRVUZEV2l4WFFVRlBMRXRCUVVzeFFpeFBRVUZhTzBGQlEwUXNSenM3T3pzN2EwSkJSMWtzVlVGQlEwRXNUMEZCUkN4RlFVRlZSQ3hMUVVGV08wRkJRVUVzVTBGQmIwSXNTVUZCU1VRc1VVRkJTaXhaUVVGbFJTeG5Ra0ZCWml4SlFVRXlRa1FzUzBGQk0wSXNSVUZCY0VJN1FVRkJRU3hESWl3aVptbHNaU0k2SW5CaGNtRnNiR1ZzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVwYlhCdmNuUWdleUJ2YmtaeVlXMWxWWEJrWVhSbElIMGdabkp2YlNBblpuSmhiV1Z6ZVc1akp6dGNibHh1WTJ4aGMzTWdVR0Z5WVd4c1pXd2daWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeWtnZTF4dUlDQWdJR052Ym5OMElIc2dZV04wYVc5dWN5d2dMaTR1Y21WdFlXbHVhVzVuVUhKdmNITWdmU0E5SUhCeWIzQnpPMXh1SUNBZ0lITjFjR1Z5S0hKbGJXRnBibWx1WjFCeWIzQnpLVHRjYmlBZ0lDQjBhR2x6TG1GamRHbHZibk1nUFNCYlhUdGNiaUFnSUNCMGFHbHpMbU4xY25KbGJuUWdQU0JiWFR0Y2JpQWdJQ0IwYUdsekxtRmtaRUZqZEdsdmJuTW9ZV04wYVc5dWN5azdYRzRnSUgxY2JseHVJQ0JoWkdSQlkzUnBiMjRvWVdOMGFXOXVLU0I3WEc0Z0lDQWdhV1lnS0hSb2FYTXVZV04wYVc5dWN5NXBibVJsZUU5bUtHRmpkR2x2YmlrZ0lUMDlJQzB4S1NCeVpYUjFjbTQ3WEc1Y2JpQWdJQ0IwYUdsekxtRmpkR2x2Ym5NdWNIVnphQ2hoWTNScGIyNHBPMXh1WEc0Z0lDQWdZMjl1YzNRZ2FTQTlJSFJvYVhNdVlXTjBhVzl1Y3k1c1pXNW5kR2dnTFNBeE8xeHVJQ0FnSUdOdmJuTjBJRzl1VlhCa1lYUmxJRDBnS0hZcElEMCtJSHRjYmlBZ0lDQWdJSFJvYVhNdVkzVnljbVZ1ZEZ0cFhTQTlJSFk3WEc0Z0lDQWdJQ0J2YmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11YzJOb1pXUjFiR1ZrVlhCa1lYUmxLVHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdiMjVWY0dSaGRHVW9ZV04wYVc5dUxtZGxkQ2dwS1R0Y2JseHVJQ0FnSUdGamRHbHZibHh1SUNBZ0lDQWdMbk5sZEZCeWIzQnpLSHRjYmlBZ0lDQWdJQ0FnWDI5dVUzUnZjRG9nS0NrZ1BUNGdkR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6TFMxY2JpQWdJQ0FnSUgwcFhHNGdJQ0FnSUNBdVlXUmtUR2x6ZEdWdVpYSW9iMjVWY0dSaGRHVXBPMXh1SUNCOVhHNWNiaUFnWVdSa1FXTjBhVzl1Y3loaFkzUnBiMjV6S1NCN1hHNGdJQ0FnWVdOMGFXOXVjeTVtYjNKRllXTm9LQ2hoWTNScGIyNHBJRDArSUhSb2FYTXVZV1JrUVdOMGFXOXVLR0ZqZEdsdmJpa3BPMXh1SUNCOVhHNWNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0IwYUdsekxtNTFiVUZqZEdsMlpVRmpkR2x2Ym5NZ1BTQjBhR2x6TG1GamRHbHZibk11YkdWdVozUm9PMXh1SUNBZ0lIUm9hWE11WVdOMGFXOXVjeTVtYjNKRllXTm9LQ2hoWTNScGIyNHBJRDArSUdGamRHbHZiaTV6ZEdGeWRDZ3BLVHRjYmlBZ2ZWeHVYRzRnSUc5dVUzUnZjQ2dwSUh0Y2JpQWdJQ0IwYUdsekxtRmpkR2x2Ym5NdVptOXlSV0ZqYUNnb1lXTjBhVzl1S1NBOVBpQmhZM1JwYjI0dWMzUnZjQ2dwS1R0Y2JpQWdmVnh1WEc0Z0lHZGxkRlpsYkc5amFYUjVLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1GamRHbHZibk11YldGd0tDaGhZM1JwYjI0cElEMCtJR0ZqZEdsdmJpNW5aWFJXWld4dlkybDBlU2dwS1R0Y2JpQWdmVnh1WEc0Z0lHbHpRV04wYVc5dVEyOXRjR3hsZEdVb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUNoMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTWdQVDA5SURBcE8xeHVJQ0I5WEc1Y2JpQWdaMlYwUTJocGJHUnlaVzRvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVlXTjBhVzl1Y3p0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1lXTjBhVzl1Y3l3Z2NISnZjSE1wSUQwK0lHNWxkeUJRWVhKaGJHeGxiQ2g3SUdGamRHbHZibk1zSUM0dUxuQnliM0J6SUgwcE8xeHVJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWN0aW9ucy9wYXJhbGxlbC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCdmcmFtZXN5bmMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVmFsdWUgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVmFsdWUsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFZhbHVlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWYWx1ZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFZhbHVlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQodikge1xuICAgIHRoaXMudG9VcGRhdGUgPSB2O1xuICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICByZXR1cm4gdjtcbiAgfTtcblxuICBWYWx1ZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnRvVXBkYXRlICE9PSB1bmRlZmluZWQgPyB0aGlzLnRvVXBkYXRlIDogdGhpcy5jdXJyZW50O1xuICB9O1xuXG4gIFZhbHVlLnByb3RvdHlwZS5zdG9wUmVnaXN0ZXJlZEFjdGlvbiA9IGZ1bmN0aW9uIHN0b3BSZWdpc3RlcmVkQWN0aW9uKCkge1xuICAgIGlmICh0aGlzLmFjdGlvbiAmJiB0aGlzLmFjdGlvbi5pc0FjdGl2ZSgpKSB0aGlzLmFjdGlvbi5zdG9wKCk7XG4gICAgdGhpcy5hY3Rpb24gPSB1bmRlZmluZWQ7XG4gIH07XG5cbiAgVmFsdWUucHJvdG90eXBlLnJlZ2lzdGVyQWN0aW9uID0gZnVuY3Rpb24gcmVnaXN0ZXJBY3Rpb24oYWN0aW9uKSB7XG4gICAgdGhpcy5zdG9wUmVnaXN0ZXJlZEFjdGlvbigpO1xuICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFZhbHVlLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdGhpcy5zdG9wUmVnaXN0ZXJlZEFjdGlvbigpO1xuICB9O1xuXG4gIHJldHVybiBWYWx1ZTtcbn0oXzIuZGVmYXVsdCk7XG5cblZhbHVlLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGN1cnJlbnQsIG9uVXBkYXRlKSB7XG4gIHJldHVybiBuZXcgVmFsdWUoeyBjdXJyZW50OiBjdXJyZW50LCBvblVwZGF0ZTogb25VcGRhdGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzWmhiSFZsTG1weklsMHNJbTVoYldWeklqcGJJbFpoYkhWbElpd2ljMlYwSWl3aWRpSXNJblJ2VlhCa1lYUmxJaXdpYzJOb1pXUjFiR1ZrVlhCa1lYUmxJaXdpZFhCa1lYUmxJaXdpZFc1a1pXWnBibVZrSWl3aVkzVnljbVZ1ZENJc0luTjBiM0JTWldkcGMzUmxjbVZrUVdOMGFXOXVJaXdpWVdOMGFXOXVJaXdpYVhOQlkzUnBkbVVpTENKemRHOXdJaXdpY21WbmFYTjBaWEpCWTNScGIyNGlMQ0p2YmxOMGIzQWlMQ0prWldaaGRXeDBVSEp2Y0hNaUxDSndZWE56YVhabElpd2liMjVWY0dSaGRHVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096dEJRVU5CT3pzN096czdPenM3TzBsQlJVMUJMRXM3T3pzN096czdPenRyUWtGTFNrTXNSeXhuUWtGQlNVTXNReXhGUVVGSE8wRkJRMHdzVTBGQlMwTXNVVUZCVEN4SFFVRm5Ra1FzUTBGQmFFSTdRVUZEUVN4clEwRkJZeXhMUVVGTFJTeGxRVUZ1UWp0QlFVTkJMRmRCUVU5R0xFTkJRVkE3UVVGRFJDeEhPenRyUWtGRlJFY3NUU3h4UWtGQlV6dEJRVU5RTEZkQlFWRXNTMEZCUzBZc1VVRkJUQ3hMUVVGclFrY3NVMEZCYmtJc1IwRkJaME1zUzBGQlMwZ3NVVUZCY2tNc1IwRkJaMFFzUzBGQlMwa3NUMEZCTlVRN1FVRkRSQ3hIT3p0clFrRkZSRU1zYjBJc2JVTkJRWFZDTzBGQlEzSkNMRkZCUVVrc1MwRkJTME1zVFVGQlRDeEpRVUZsTEV0QlFVdEJMRTFCUVV3c1EwRkJXVU1zVVVGQldpeEZRVUZ1UWl4RlFVRXlReXhMUVVGTFJDeE5RVUZNTEVOQlFWbEZMRWxCUVZvN1FVRkRNME1zVTBGQlMwWXNUVUZCVEN4SFFVRmpTQ3hUUVVGa08wRkJRMFFzUnpzN2EwSkJSVVJOTEdNc01rSkJRV1ZJTEUwc1JVRkJVVHRCUVVOeVFpeFRRVUZMUkN4dlFrRkJURHRCUVVOQkxGTkJRVXRETEUxQlFVd3NSMEZCWTBFc1RVRkJaRHRCUVVOQkxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08ydENRVVZFU1N4TkxIRkNRVUZUTzBGQlExQXNVMEZCUzB3c2IwSkJRVXc3UVVGRFJDeEhPenM3T3p0QlFUVkNSMUlzU3l4RFFVTkhZeXhaTEVkQlFXVTdRVUZEY0VKRExGZEJRVk03UVVGRVZ5eERPenRyUWtFNFFsUXNWVUZCUTFJc1QwRkJSQ3hGUVVGVlV5eFJRVUZXTzBGQlFVRXNVMEZCZFVJc1NVRkJTV2hDTEV0QlFVb3NRMEZCVlN4RlFVRkZUeXhuUWtGQlJpeEZRVUZYVXl4clFrRkJXQ3hGUVVGV0xFTkJRWFpDTzBGQlFVRXNReUlzSW1acGJHVWlPaUoyWVd4MVpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaThuTzF4dWFXMXdiM0owSUhzZ2IyNUdjbUZ0WlZWd1pHRjBaU0I5SUdaeWIyMGdKMlp5WVcxbGMzbHVZeWM3WEc1Y2JtTnNZWE56SUZaaGJIVmxJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYzNSaGRHbGpJR1JsWm1GMWJIUlFjbTl3Y3lBOUlIdGNiaUFnSUNCd1lYTnphWFpsT2lCMGNuVmxYRzRnSUgwN1hHNWNiaUFnYzJWMEtIWXBJSHRjYmlBZ0lDQjBhR2x6TG5SdlZYQmtZWFJsSUQwZ2RqdGNiaUFnSUNCdmJrWnlZVzFsVlhCa1lYUmxLSFJvYVhNdWMyTm9aV1IxYkdWa1ZYQmtZWFJsS1R0Y2JpQWdJQ0J5WlhSMWNtNGdkanRjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdLSFJvYVhNdWRHOVZjR1JoZEdVZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnUHlCMGFHbHpMblJ2VlhCa1lYUmxJRG9nZEdocGN5NWpkWEp5Wlc1ME8xeHVJQ0I5WEc1Y2JpQWdjM1J2Y0ZKbFoybHpkR1Z5WldSQlkzUnBiMjRvS1NCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11WVdOMGFXOXVJQ1ltSUhSb2FYTXVZV04wYVc5dUxtbHpRV04wYVhabEtDa3BJSFJvYVhNdVlXTjBhVzl1TG5OMGIzQW9LVHRjYmlBZ0lDQjBhR2x6TG1GamRHbHZiaUE5SUhWdVpHVm1hVzVsWkR0Y2JpQWdmVnh1WEc0Z0lISmxaMmx6ZEdWeVFXTjBhVzl1S0dGamRHbHZiaWtnZTF4dUlDQWdJSFJvYVhNdWMzUnZjRkpsWjJsemRHVnlaV1JCWTNScGIyNG9LVHRjYmlBZ0lDQjBhR2x6TG1GamRHbHZiaUE5SUdGamRHbHZianRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUc5dVUzUnZjQ2dwSUh0Y2JpQWdJQ0IwYUdsekxuTjBiM0JTWldkcGMzUmxjbVZrUVdOMGFXOXVLQ2s3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dOMWNuSmxiblFzSUc5dVZYQmtZWFJsS1NBOVBpQnVaWGNnVm1Gc2RXVW9leUJqZFhKeVpXNTBMQ0J2YmxWd1pHRjBaU0I5S1R0Y2JpSmRmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWN0aW9ucy92YWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNvbG9yID0gZXhwb3J0cy5oc2xhID0gZXhwb3J0cy5yZ2JhID0gZXhwb3J0cy5oZXggPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBoZXggPSBleHBvcnRzLmhleCA9IGZ1bmN0aW9uIGhleCh2KSB7XG4gIHZhciByID0gdm9pZCAwLFxuICAgICAgZyA9IHZvaWQgMCxcbiAgICAgIGIgPSB2b2lkIDA7XG5cbiAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgaWYgKHYubGVuZ3RoID4gNCkge1xuICAgIHIgPSB2LnN1YnN0cigxLCAyKTtcbiAgICBnID0gdi5zdWJzdHIoMywgMik7XG4gICAgYiA9IHYuc3Vic3RyKDUsIDIpO1xuXG4gICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgfSBlbHNlIHtcbiAgICByID0gdi5zdWJzdHIoMSwgMSk7XG4gICAgZyA9IHYuc3Vic3RyKDIsIDEpO1xuICAgIGIgPSB2LnN1YnN0cigzLCAxKTtcbiAgICByICs9IHI7XG4gICAgZyArPSBnO1xuICAgIGIgKz0gYjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgZ3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICBibHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgYWxwaGE6IDFcbiAgfTtcbn07XG5cbnZhciByZ2JhID0gZXhwb3J0cy5yZ2JhID0gKDAsIF91dGlscy5zcGxpdENvbG9yVmFsdWVzKShbJ3JlZCcsICdncmVlbicsICdibHVlJywgJ2FscGhhJ10pO1xuXG52YXIgaHNsYSA9IGV4cG9ydHMuaHNsYSA9ICgwLCBfdXRpbHMuc3BsaXRDb2xvclZhbHVlcykoWydodWUnLCAnc2F0dXJhdGlvbicsICdsaWdodG5lc3MnLCAnYWxwaGEnXSk7XG5cbnZhciBjb2xvciA9IGV4cG9ydHMuY29sb3IgPSBmdW5jdGlvbiBjb2xvcih2KSB7XG4gIGlmICgoMCwgX3V0aWxzLmlzUmdiKSh2KSkge1xuICAgIHJldHVybiByZ2JhKHYpO1xuICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNIZXgpKHYpKSB7XG4gICAgcmV0dXJuIGhleCh2KTtcbiAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLmlzSHNsKSh2KSkge1xuICAgIHJldHVybiBoc2xhKHYpO1xuICB9XG5cbiAgcmV0dXJuIHY7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12Y0dGeWMyVnljeTVxY3lKZExDSnVZVzFsY3lJNld5Sm9aWGdpTENKMklpd2ljaUlzSW1jaUxDSmlJaXdpYkdWdVozUm9JaXdpYzNWaWMzUnlJaXdpY21Wa0lpd2ljR0Z5YzJWSmJuUWlMQ0puY21WbGJpSXNJbUpzZFdVaUxDSmhiSEJvWVNJc0luSm5ZbUVpTENKb2MyeGhJaXdpWTI5c2IzSWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN08wRkJSVThzU1VGQlRVRXNiMEpCUVUwc1UwRkJUa0VzUjBGQlRTeERRVUZEUXl4RFFVRkVMRVZCUVU4N1FVRkRlRUlzVFVGQlNVTXNWVUZCU2p0QlFVRkJMRTFCUVU5RExGVkJRVkE3UVVGQlFTeE5RVUZWUXl4VlFVRldPenRCUVVWQk8wRkJRMEVzVFVGQlNVZ3NSVUZCUlVrc1RVRkJSaXhIUVVGWExFTkJRV1lzUlVGQmEwSTdRVUZEYUVKSUxGRkJRVWxFTEVWQlFVVkxMRTFCUVVZc1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQldpeERRVUZLTzBGQlEwRklMRkZCUVVsR0xFVkJRVVZMTEUxQlFVWXNRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhEUVVGS08wRkJRMEZHTEZGQlFVbElMRVZCUVVWTExFMUJRVVlzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCV2l4RFFVRktPenRCUVVWR08wRkJRME1zUjBGT1JDeE5RVTFQTzBGQlEweEtMRkZCUVVsRUxFVkJRVVZMTEUxQlFVWXNRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhEUVVGS08wRkJRMEZJTEZGQlFVbEdMRVZCUVVWTExFMUJRVVlzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCV2l4RFFVRktPMEZCUTBGR0xGRkJRVWxJTEVWQlFVVkxMRTFCUVVZc1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQldpeERRVUZLTzBGQlEwRktMRk5CUVV0QkxFTkJRVXc3UVVGRFFVTXNVMEZCUzBFc1EwRkJURHRCUVVOQlF5eFRRVUZMUVN4RFFVRk1PMEZCUTBRN08wRkJSVVFzVTBGQlR6dEJRVU5NUnl4VFFVRkxReXhUUVVGVFRpeERRVUZVTEVWQlFWa3NSVUZCV2l4RFFVUkJPMEZCUlV4UExGZEJRVTlFTEZOQlFWTk1MRU5CUVZRc1JVRkJXU3hGUVVGYUxFTkJSa1k3UVVGSFRFOHNWVUZCVFVZc1UwRkJVMG9zUTBGQlZDeEZRVUZaTEVWQlFWb3NRMEZJUkR0QlFVbE1UeXhYUVVGUE8wRkJTa1lzUjBGQlVEdEJRVTFFTEVOQmVrSk5PenRCUVRKQ1FTeEpRVUZOUXl4elFrRkJUeXcyUWtGQmFVSXNRMEZCUXl4TFFVRkVMRVZCUVZFc1QwRkJVaXhGUVVGcFFpeE5RVUZxUWl4RlFVRjVRaXhQUVVGNlFpeERRVUZxUWl4RFFVRmlPenRCUVVWQkxFbEJRVTFETEhOQ1FVRlBMRFpDUVVGcFFpeERRVUZETEV0QlFVUXNSVUZCVVN4WlFVRlNMRVZCUVhOQ0xGZEJRWFJDTEVWQlFXMURMRTlCUVc1RExFTkJRV3BDTEVOQlFXSTdPMEZCUlVFc1NVRkJUVU1zZDBKQlFWRXNVMEZCVWtFc1MwRkJVU3hEUVVGRFlpeERRVUZFTEVWQlFVODdRVUZETVVJc1RVRkJTU3hyUWtGQlRVRXNRMEZCVGl4RFFVRktMRVZCUVdNN1FVRkRXaXhYUVVGUFZ5eExRVUZMV0N4RFFVRk1MRU5CUVZBN1FVRkRSQ3hIUVVaRUxFMUJSVThzU1VGQlNTeHJRa0ZCVFVFc1EwRkJUaXhEUVVGS0xFVkJRV003UVVGRGJrSXNWMEZCVDBRc1NVRkJTVU1zUTBGQlNpeERRVUZRTzBGQlEwUXNSMEZHVFN4TlFVVkJMRWxCUVVrc2EwSkJRVTFCTEVOQlFVNHNRMEZCU2l4RlFVRmpPMEZCUTI1Q0xGZEJRVTlaTEV0QlFVdGFMRU5CUVV3c1EwRkJVRHRCUVVORU96dEJRVVZFTEZOQlFVOUJMRU5CUVZBN1FVRkRSQ3hEUVZaTklpd2labWxzWlNJNkluQmhjbk5sY25NdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCemNHeHBkRU52Ykc5eVZtRnNkV1Z6TENCcGMxSm5ZaXdnYVhOSVpYZ3NJR2x6U0hOc0lIMGdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCb1pYZ2dQU0FvZGlrZ1BUNGdlMXh1SUNCc1pYUWdjaXdnWnl3Z1lqdGNibHh1SUNBdkx5QkpaaUIzWlNCb1lYWmxJRFlnWTJoaGNtRmpkR1Z5Y3l3Z2FXVWdJMFpHTURBd01GeHVJQ0JwWmlBb2RpNXNaVzVuZEdnZ1BpQTBLU0I3WEc0Z0lDQWdjaUE5SUhZdWMzVmljM1J5S0RFc0lESXBPMXh1SUNBZ0lHY2dQU0IyTG5OMVluTjBjaWd6TENBeUtUdGNiaUFnSUNCaUlEMGdkaTV6ZFdKemRISW9OU3dnTWlrN1hHNWNiaUFnTHk4Z1QzSWdkMlVnYUdGMlpTQXpJR05vWVhKaFkzUmxjbk1zSUdsbElDTkdNREJjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J5SUQwZ2RpNXpkV0p6ZEhJb01Td2dNU2s3WEc0Z0lDQWdaeUE5SUhZdWMzVmljM1J5S0RJc0lERXBPMXh1SUNBZ0lHSWdQU0IyTG5OMVluTjBjaWd6TENBeEtUdGNiaUFnSUNCeUlDczlJSEk3WEc0Z0lDQWdaeUFyUFNCbk8xeHVJQ0FnSUdJZ0t6MGdZanRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdjbVZrT2lCd1lYSnpaVWx1ZENoeUxDQXhOaWtzWEc0Z0lDQWdaM0psWlc0NklIQmhjbk5sU1c1MEtHY3NJREUyS1N4Y2JpQWdJQ0JpYkhWbE9pQndZWEp6WlVsdWRDaGlMQ0F4Tmlrc1hHNGdJQ0FnWVd4d2FHRTZJREZjYmlBZ2ZUdGNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J5WjJKaElEMGdjM0JzYVhSRGIyeHZjbFpoYkhWbGN5aGJKM0psWkNjc0lDZG5jbVZsYmljc0lDZGliSFZsSnl3Z0oyRnNjR2hoSjEwcE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2FITnNZU0E5SUhOd2JHbDBRMjlzYjNKV1lXeDFaWE1vV3lkb2RXVW5MQ0FuYzJGMGRYSmhkR2x2Ymljc0lDZHNhV2RvZEc1bGMzTW5MQ0FuWVd4d2FHRW5YU2s3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYjJ4dmNpQTlJQ2gyS1NBOVBpQjdYRzRnSUdsbUlDaHBjMUpuWWloMktTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCeVoySmhLSFlwTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLR2x6U0dWNEtIWXBLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHaGxlQ2gyS1R0Y2JpQWdmU0JsYkhObElHbG1JQ2hwYzBoemJDaDJLU2tnZTF4dUlDQWdJSEpsZEhWeWJpQm9jMnhoS0hZcE8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlIWTdYRzU5TzF4dUlsMTlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmMvcGFyc2Vycy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ2hhaW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ2hhaW4sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENoYWluKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhaW4pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwuYXBwbHkoX0FjdGlvbiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnBsYXlOZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgaSA9IF90aGlzJHByb3BzLmksXG4gICAgICAgICAgb3JkZXIgPSBfdGhpcyRwcm9wcy5vcmRlcjtcblxuICAgICAgaWYgKGkgPCBvcmRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgIF90aGlzLnByb3BzLmkrKztcbiAgICAgICAgX3RoaXMucGxheUN1cnJlbnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBDaGFpbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pID0gMDtcbiAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLnBsYXlDdXJyZW50ID0gZnVuY3Rpb24gcGxheUN1cnJlbnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGkgPSBfcHJvcHMuaSxcbiAgICAgICAgb3JkZXIgPSBfcHJvcHMub3JkZXI7XG5cbiAgICBvcmRlcltpXS5wcm9wcy5fb25Db21wbGV0ZSA9IHRoaXMucGxheU5leHQ7XG4gICAgb3JkZXJbaV0uc3RhcnQoKTtcbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaSA9IF9wcm9wczIuaSxcbiAgICAgICAgb3JkZXIgPSBfcHJvcHMyLm9yZGVyO1xuXG4gICAgb3JkZXJbaV0uc3RvcCgpO1xuICB9O1xuXG4gIHJldHVybiBDaGFpbjtcbn0oXzIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcmRlciwgb25Db21wbGV0ZSkge1xuICByZXR1cm4gbmV3IENoYWluKHsgb3JkZXI6IG9yZGVyLCBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk5vWVdsdUxtcHpJbDBzSW01aGJXVnpJanBiSWtOb1lXbHVJaXdpY0d4aGVVNWxlSFFpTENKd2NtOXdjeUlzSW1raUxDSnZjbVJsY2lJc0lteGxibWQwYUNJc0luQnNZWGxEZFhKeVpXNTBJaXdpWTI5dGNHeGxkR1VpTENKdmJsTjBZWEowSWl3aVgyOXVRMjl0Y0d4bGRHVWlMQ0p6ZEdGeWRDSXNJbTl1VTNSdmNDSXNJbk4wYjNBaUxDSnZia052YlhCc1pYUmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdPenM3T3pzN096dEpRVVZOUVN4TE96czdPenM3T3pzN096czdjMGxCVFVwRExGRXNSMEZCVnl4WlFVRk5PMEZCUVVFc2QwSkJRMDBzVFVGQlMwTXNTMEZFV0R0QlFVRkJMRlZCUTFCRExFTkJSRThzWlVGRFVFRXNRMEZFVHp0QlFVRkJMRlZCUTBwRExFdEJSRWtzWlVGRFNrRXNTMEZFU1RzN1FVRkZaaXhWUVVGSlJDeEpRVUZKUXl4TlFVRk5ReXhOUVVGT0xFZEJRV1VzUTBGQmRrSXNSVUZCTUVJN1FVRkRlRUlzWTBGQlMwZ3NTMEZCVEN4RFFVRlhReXhEUVVGWU8wRkJRMEVzWTBGQlMwY3NWMEZCVER0QlFVTkVMRTlCU0VRc1RVRkhUenRCUVVOTUxHTkJRVXRETEZGQlFVdzdRVUZEUkR0QlFVTkdMRXM3T3p0clFrRmlSRU1zVHl4elFrRkJWVHRCUVVOU0xGTkJRVXRPTEV0QlFVd3NRMEZCVjBNc1EwRkJXQ3hIUVVGbExFTkJRV1k3UVVGRFFTeFRRVUZMUnl4WFFVRk1PMEZCUTBRc1J6czdhMEpCV1VSQkxGY3NNRUpCUVdNN1FVRkJRU3hwUWtGRFV5eExRVUZMU2l4TFFVUmtPMEZCUVVFc1VVRkRTa01zUTBGRVNTeFZRVU5LUVN4RFFVUkpPMEZCUVVFc1VVRkRSRU1zUzBGRVF5eFZRVU5FUVN4TFFVUkRPenRCUVVWYVFTeFZRVUZOUkN4RFFVRk9MRVZCUVZORUxFdEJRVlFzUTBGQlpVOHNWMEZCWml4SFFVRTJRaXhMUVVGTFVpeFJRVUZzUXp0QlFVTkJSeXhWUVVGTlJDeERRVUZPTEVWQlFWTlBMRXRCUVZRN1FVRkRSQ3hIT3p0clFrRkZSRU1zVFN4eFFrRkJVenRCUVVGQkxHdENRVU5qTEV0QlFVdFVMRXRCUkc1Q08wRkJRVUVzVVVGRFEwTXNRMEZFUkN4WFFVTkRRU3hEUVVSRU8wRkJRVUVzVVVGRFNVTXNTMEZFU2l4WFFVTkpRU3hMUVVSS096dEJRVVZRUVN4VlFVRk5SQ3hEUVVGT0xFVkJRVk5UTEVsQlFWUTdRVUZEUkN4SE96czdPenRyUWtGSFdTeFZRVUZEVWl4TFFVRkVMRVZCUVZGVExGVkJRVkk3UVVGQlFTeFRRVUYxUWl4SlFVRkpZaXhMUVVGS0xFTkJRVlVzUlVGQlJVa3NXVUZCUml4RlFVRlRVeXh6UWtGQlZDeEZRVUZXTEVOQlFYWkNPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSmphR0ZwYmk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1WEc1amJHRnpjeUJEYUdGcGJpQmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJRzl1VTNSaGNuUW9LU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTVwSUQwZ01EdGNiaUFnSUNCMGFHbHpMbkJzWVhsRGRYSnlaVzUwS0NrN1hHNGdJSDFjYmx4dUlDQndiR0Y1VG1WNGRDQTlJQ2dwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0I3SUdrc0lHOXlaR1Z5SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHbG1JQ2hwSUR3Z2IzSmtaWEl1YkdWdVozUm9JQzBnTVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV3Y205d2N5NXBLeXM3WEc0Z0lDQWdJQ0IwYUdsekxuQnNZWGxEZFhKeVpXNTBLQ2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIUm9hWE11WTI5dGNHeGxkR1VvS1R0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzVjYmlBZ2NHeGhlVU4xY25KbGJuUW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QnBMQ0J2Y21SbGNpQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0J2Y21SbGNsdHBYUzV3Y205d2N5NWZiMjVEYjIxd2JHVjBaU0E5SUhSb2FYTXVjR3hoZVU1bGVIUTdYRzRnSUNBZ2IzSmtaWEpiYVYwdWMzUmhjblFvS1R0Y2JpQWdmVnh1WEc0Z0lHOXVVM1J2Y0NncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdrc0lHOXlaR1Z5SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHOXlaR1Z5VzJsZExuTjBiM0FvS1R0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2IzSmtaWElzSUc5dVEyOXRjR3hsZEdVcElEMCtJRzVsZHlCRGFHRnBiaWg3SUc5eVpHVnlMQ0J2YmtOdmJYQnNaWFJsSUgwcE8xeHVJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWN0aW9ucy9jaGFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZHVyYXRpb24sIG9uQ29tcGxldGUpIHtcbiAgcmV0dXJuICgwLCBfdHdlZW4yLmRlZmF1bHQpKHsgZHVyYXRpb246IGR1cmF0aW9uLCBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlJsYkdGNUxtcHpJbDBzSW01aGJXVnpJanBiSW1SMWNtRjBhVzl1SWl3aWIyNURiMjF3YkdWMFpTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN096czdhMEpCUldVc1ZVRkJRMEVzVVVGQlJDeEZRVUZYUXl4VlFVRllPMEZCUVVFc1UwRkJNRUlzY1VKQlFVMHNSVUZCUlVRc2EwSkJRVVlzUlVGQldVTXNjMEpCUVZvc1JVRkJUaXhEUVVFeFFqdEJRVUZCTEVNaUxDSm1hV3hsSWpvaVpHVnNZWGt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkSGRsWlc0Z1puSnZiU0FuTGk5MGQyVmxiaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoa2RYSmhkR2x2Yml3Z2IyNURiMjF3YkdWMFpTa2dQVDRnZEhkbFpXNG9leUJrZFhKaGRHbHZiaXdnYjI1RGIyMXdiR1YwWlNCOUtUdGNiaUpkZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjdGlvbnMvZGVsYXkuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAvLyBDb2xvciBwcm9wc1xuICBjb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJhY2tncm91bmRDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIG91dGxpbmVDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGZpbGw6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzdHJva2U6IF92YWx1ZVR5cGVzLmNvbG9yLFxuXG4gIC8vIEJvcmRlciBwcm9wc1xuICBib3JkZXJDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlclRvcENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyUmlnaHRDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlckJvdHRvbUNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyTGVmdENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyUmFkaXVzOiBfdmFsdWVUeXBlcy5weCxcblxuICAvLyBQb3NpdGlvbmluZ1xuICB3aWR0aDogX3ZhbHVlVHlwZXMucHgsXG4gIGhlaWdodDogX3ZhbHVlVHlwZXMucHgsXG4gIHRvcDogX3ZhbHVlVHlwZXMucHgsXG4gIGxlZnQ6IF92YWx1ZVR5cGVzLnB4LFxuICBib3R0b206IF92YWx1ZVR5cGVzLnB4LFxuICByaWdodDogX3ZhbHVlVHlwZXMucHgsXG5cbiAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgcm90YXRlOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICByb3RhdGVYOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICByb3RhdGVZOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICByb3RhdGVaOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICBzY2FsZTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWDogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWjogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNrZXdYOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICBza2V3WTogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgZGlzdGFuY2U6IF92YWx1ZVR5cGVzLnB4LFxuICB0cmFuc2xhdGVYOiBfdmFsdWVUeXBlcy5weCxcbiAgdHJhbnNsYXRlWTogX3ZhbHVlVHlwZXMucHgsXG4gIHRyYW5zbGF0ZVo6IF92YWx1ZVR5cGVzLnB4LFxuICBwZXJzcGVjdGl2ZTogX3ZhbHVlVHlwZXMucHgsXG4gIG9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNaaGJIVmxMWFI1Y0dWekxtcHpJbDBzSW01aGJXVnpJanBiSW1OdmJHOXlJaXdpWW1GamEyZHliM1Z1WkVOdmJHOXlJaXdpYjNWMGJHbHVaVU52Ykc5eUlpd2labWxzYkNJc0luTjBjbTlyWlNJc0ltSnZjbVJsY2tOdmJHOXlJaXdpWW05eVpHVnlWRzl3UTI5c2IzSWlMQ0ppYjNKa1pYSlNhV2RvZEVOdmJHOXlJaXdpWW05eVpHVnlRbTkwZEc5dFEyOXNiM0lpTENKaWIzSmtaWEpNWldaMFEyOXNiM0lpTENKaWIzSmtaWEpTWVdScGRYTWlMQ0ozYVdSMGFDSXNJbWhsYVdkb2RDSXNJblJ2Y0NJc0lteGxablFpTENKaWIzUjBiMjBpTENKeWFXZG9kQ0lzSW5KdmRHRjBaU0lzSW5KdmRHRjBaVmdpTENKeWIzUmhkR1ZaSWl3aWNtOTBZWFJsV2lJc0luTmpZV3hsSWl3aWMyTmhiR1ZZSWl3aWMyTmhiR1ZaSWl3aWMyTmhiR1ZhSWl3aWMydGxkMWdpTENKemEyVjNXU0lzSW1ScGMzUmhibU5sSWl3aWRISmhibk5zWVhSbFdDSXNJblJ5WVc1emJHRjBaVmtpTENKMGNtRnVjMnhoZEdWYUlpd2ljR1Z5YzNCbFkzUnBkbVVpTENKdmNHRmphWFI1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPMnRDUVVObE8wRkJRMkk3UVVGRFFVRXNNRUpCUm1FN1FVRkhZa01zYjBOQlNHRTdRVUZKWWtNc2FVTkJTbUU3UVVGTFlrTXNlVUpCVEdFN1FVRk5Za01zTWtKQlRtRTdPMEZCVVdJN1FVRkRRVU1zWjBOQlZHRTdRVUZWWWtNc2JVTkJWbUU3UVVGWFlrTXNjVU5CV0dFN1FVRlpZa01zYzBOQldtRTdRVUZoWWtNc2IwTkJZbUU3UVVGallrTXNPRUpCWkdFN08wRkJaMEppTzBGQlEwRkRMSFZDUVdwQ1lUdEJRV3RDWWtNc2QwSkJiRUpoTzBGQmJVSmlReXh4UWtGdVFtRTdRVUZ2UW1KRExITkNRWEJDWVR0QlFYRkNZa01zZDBKQmNrSmhPMEZCYzBKaVF5eDFRa0YwUW1FN08wRkJkMEppTzBGQlEwRkRMRFpDUVhwQ1lUdEJRVEJDWWtNc09FSkJNVUpoTzBGQk1rSmlReXc0UWtFelFtRTdRVUUwUW1KRExEaENRVFZDWVR0QlFUWkNZa01zTUVKQk4wSmhPMEZCT0VKaVF5d3lRa0U1UW1FN1FVRXJRbUpETERKQ1FTOUNZVHRCUVdkRFlrTXNNa0pCYUVOaE8wRkJhVU5pUXl3MFFrRnFRMkU3UVVGclEySkRMRFJDUVd4RFlUdEJRVzFEWWtNc01FSkJia05oTzBGQmIwTmlReXcwUWtGd1EyRTdRVUZ4UTJKRExEUkNRWEpEWVR0QlFYTkRZa01zTkVKQmRFTmhPMEZCZFVOaVF5dzJRa0YyUTJFN1FVRjNRMkpETzBGQmVFTmhMRU1pTENKbWFXeGxJam9pZG1Gc2RXVXRkSGx3WlhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCaGJIQm9ZU3dnWTI5c2IzSXNJR1JsWjNKbFpYTXNJSE5qWVd4bExDQndlQ0I5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkyWVd4MVpTMTBlWEJsY3ljN0lGeHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0F2THlCRGIyeHZjaUJ3Y205d2MxeHVJQ0JqYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0poWTJ0bmNtOTFibVJEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJRzkxZEd4cGJtVkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHWnBiR3c2SUdOdmJHOXlMRnh1SUNCemRISnZhMlU2SUdOdmJHOXlMRnh1WEc0Z0lDOHZJRUp2Y21SbGNpQndjbTl3YzF4dUlDQmliM0prWlhKRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdKdmNtUmxjbFJ2Y0VOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnWW05eVpHVnlVbWxuYUhSRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdKdmNtUmxja0p2ZEhSdmJVTnZiRzl5T2lCamIyeHZjaXhjYmlBZ1ltOXlaR1Z5VEdWbWRFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ1ltOXlaR1Z5VW1Ga2FYVnpPaUJ3ZUN4Y2JseHVJQ0F2THlCUWIzTnBkR2x2Ym1sdVoxeHVJQ0IzYVdSMGFEb2djSGdzWEc0Z0lHaGxhV2RvZERvZ2NIZ3NJQ0JjYmlBZ2RHOXdPaUJ3ZUN4Y2JpQWdiR1ZtZERvZ2NIZ3NYRzRnSUdKdmRIUnZiVG9nY0hnc1hHNGdJSEpwWjJoME9pQndlQ3hjYmx4dUlDQXZMeUJVY21GdWMyWnZjbTBnY0hKdmNHVnlkR2xsYzF4dUlDQnliM1JoZEdVNklHUmxaM0psWlhNc1hHNGdJSEp2ZEdGMFpWZzZJR1JsWjNKbFpYTXNYRzRnSUhKdmRHRjBaVms2SUdSbFozSmxaWE1zWEc0Z0lISnZkR0YwWlZvNklHUmxaM0psWlhNc1hHNGdJSE5qWVd4bE9pQnpZMkZzWlN4Y2JpQWdjMk5oYkdWWU9pQnpZMkZzWlN4Y2JpQWdjMk5oYkdWWk9pQnpZMkZzWlN4Y2JpQWdjMk5oYkdWYU9pQnpZMkZzWlN4Y2JpQWdjMnRsZDFnNklHUmxaM0psWlhNc1hHNGdJSE5yWlhkWk9pQmtaV2R5WldWekxGeHVJQ0JrYVhOMFlXNWpaVG9nY0hnc1hHNGdJSFJ5WVc1emJHRjBaVmc2SUhCNExGeHVJQ0IwY21GdWMyeGhkR1ZaT2lCd2VDeGNiaUFnZEhKaGJuTnNZWFJsV2pvZ2NIZ3NYRzRnSUhCbGNuTndaV04wYVhabE9pQndlQ3hjYmlBZ2IzQmhZMmwwZVRvZ1lXeHdhR0ZjYm4wN1hHNGlYWDA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVuZGVyZXJzL2Nzcy92YWx1ZS10eXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIGNhbWVsQ2FjaGUgPSB7fTtcbnZhciBkYXNoQ2FjaGUgPSB7fTtcbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJywgJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHRlc3RFbGVtZW50ID0gdm9pZCAwO1xuXG4vKlxuICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gIFxuICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiB0ZXN0UHJlZml4KGtleSkge1xuICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICB2YXIgbm9QcmVmaXggPSBwcmVmaXggPT09ICcnO1xuICAgIHZhciBwcmVmaXhlZFByb3BlcnR5TmFtZSA9IG5vUHJlZml4ID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgaWYgKHByZWZpeGVkUHJvcGVydHlOYW1lIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICBjYW1lbENhY2hlW2tleV0gPSBwcmVmaXhlZFByb3BlcnR5TmFtZTtcbiAgICAgIGRhc2hDYWNoZVtrZXldID0gJycgKyAobm9QcmVmaXggPyAnJyA6ICctJykgKyAoMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShwcmVmaXhlZFByb3BlcnR5TmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoa2V5LCBhc0Rhc2hDYXNlKSB7XG4gIHZhciBjYWNoZSA9IGFzRGFzaENhc2UgPyBkYXNoQ2FjaGUgOiBjYW1lbENhY2hlO1xuXG4gIGlmICghY2FjaGVba2V5XSkge1xuICAgIHRlc3RQcmVmaXgoa2V5KTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZVtrZXldO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzQnlaV1pwZUdWeUxtcHpJbDBzSW01aGJXVnpJanBiSW1OaGJXVnNRMkZqYUdVaUxDSmtZWE5vUTJGamFHVWlMQ0p3Y21WbWFYaGxjeUlzSW01MWJWQnlaV1pwZUdWeklpd2liR1Z1WjNSb0lpd2lkR1Z6ZEVWc1pXMWxiblFpTENKMFpYTjBVSEpsWm1sNElpd2lhMlY1SWl3aVpHOWpkVzFsYm5RaUxDSmpjbVZoZEdWRmJHVnRaVzUwSWl3aWFTSXNJbkJ5WldacGVDSXNJbTV2VUhKbFptbDRJaXdpY0hKbFptbDRaV1JRY205d1pYSjBlVTVoYldVaUxDSmphR0Z5UVhRaUxDSjBiMVZ3Y0dWeVEyRnpaU0lzSW5Oc2FXTmxJaXdpYzNSNWJHVWlMQ0poYzBSaGMyaERZWE5sSWl3aVkyRmphR1VpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdRVUZGUVN4SlFVRk5RU3hoUVVGaExFVkJRVzVDTzBGQlEwRXNTVUZCVFVNc1dVRkJXU3hGUVVGc1FqdEJRVU5CTEVsQlFVMURMRmRCUVZjc1EwRkJReXhSUVVGRUxFVkJRVlVzUzBGQlZpeEZRVUZuUWl4SFFVRm9RaXhGUVVGdlFpeEpRVUZ3UWl4RlFVRXdRaXhGUVVFeFFpeERRVUZxUWp0QlFVTkJMRWxCUVUxRExHTkJRV05FTEZOQlFWTkZMRTFCUVRkQ08wRkJRMEVzU1VGQlNVTXNiMEpCUVVvN08wRkJSVUU3T3pzN096dEJRVTFCTEVsQlFVMURMR0ZCUVdFc1UwRkJZa0VzVlVGQllTeERRVUZEUXl4SFFVRkVMRVZCUVZNN1FVRkRNVUpHTEdkQ1FVRmpRU3hsUVVGbFJ5eFRRVUZUUXl4aFFVRlVMRU5CUVhWQ0xFdEJRWFpDTEVOQlFUZENPenRCUVVWQkxFOUJRVXNzU1VGQlNVTXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKVUN4WFFVRndRaXhGUVVGcFEwOHNSMEZCYWtNc1JVRkJjME03UVVGRGNFTXNVVUZCVFVNc1UwRkJVMVFzVTBGQlUxRXNRMEZCVkN4RFFVRm1PMEZCUTBFc1VVRkJUVVVzVjBGQldVUXNWMEZCVnl4RlFVRTNRanRCUVVOQkxGRkJRVTFGTEhWQ1FVRjFRa1FzVjBGQlYwd3NSMEZCV0N4SFFVRnBRa2tzVTBGQlUwb3NTVUZCU1U4c1RVRkJTaXhEUVVGWExFTkJRVmdzUlVGQlkwTXNWMEZCWkN4RlFVRlVMRWRCUVhWRFVpeEpRVUZKVXl4TFFVRktMRU5CUVZVc1EwRkJWaXhEUVVGeVJqczdRVUZGUVN4UlFVRkpTQ3gzUWtGQmQwSlNMRmxCUVZsWkxFdEJRWGhETEVWQlFTdERPMEZCUXpkRGFrSXNhVUpCUVZkUExFZEJRVmdzU1VGQmEwSk5MRzlDUVVGc1FqdEJRVU5CV2l4blFrRkJWVTBzUjBGQlZpeFZRVUZ4UWtzc1YwRkJWeXhGUVVGWUxFZEJRV2RDTEVkQlFYSkRMRWxCUVRSRExIZENRVUZaUXl4dlFrRkJXaXhEUVVFMVF6dEJRVU5FTzBGQlEwWTdRVUZEUml4RFFXSkVPenRyUWtGbFpTeFZRVUZEVGl4SFFVRkVMRVZCUVUxWExGVkJRVTRzUlVGQmNVSTdRVUZEYkVNc1RVRkJUVU1zVVVGQlVVUXNZVUZCWVdwQ0xGTkJRV0lzUjBGQmVVSkVMRlZCUVhaRE96dEJRVVZCTEUxQlFVa3NRMEZCUTIxQ0xFMUJRVTFhTEVkQlFVNHNRMEZCVEN4RlFVRnBRanRCUVVObVJDeGxRVUZYUXl4SFFVRllPMEZCUTBRN08wRkJSVVFzVTBGQlQxa3NUVUZCVFZvc1IwRkJUaXhEUVVGUU8wRkJRMFFzUXlJc0ltWnBiR1VpT2lKd2NtVm1hWGhsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdOaGJXVnNWRzlFWVhOb0lIMGdabkp2YlNBbkxpNHZMaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ1kyRnRaV3hEWVdOb1pTQTlJSHQ5TzF4dVkyOXVjM1FnWkdGemFFTmhZMmhsSUQwZ2UzMDdYRzVqYjI1emRDQndjbVZtYVhobGN5QTlJRnNuVjJWaWEybDBKeXduVFc5Nkp5d25UeWNzSjIxekp5d2dKeWRkTzF4dVkyOXVjM1FnYm5WdFVISmxabWw0WlhNZ1BTQndjbVZtYVhobGN5NXNaVzVuZEdnN1hHNXNaWFFnZEdWemRFVnNaVzFsYm5RN1hHNWNiaThxWEc0Z0lGUmxjM1FnYzNSNWJHVWdjSEp2Y0dWeWRIa2dabTl5SUhCeVpXWnBlR1ZrSUhabGNuTnBiMjVjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJjM1J5YVc1blhUb2dVM1I1YkdVZ2NISnZjR1Z5ZEhsY2JpQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhUb2dRMkZqYUdWa0lIQnliM0JsY25SNUlHNWhiV1ZjYmlvdlhHNWpiMjV6ZENCMFpYTjBVSEpsWm1sNElEMGdLR3RsZVNrZ1BUNGdlMXh1SUNCMFpYTjBSV3hsYldWdWRDQTlJSFJsYzNSRmJHVnRaVzUwSUh4OElHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjJScGRpY3BPMXh1WEc0Z0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diblZ0VUhKbFptbDRaWE03SUdrckt5a2dlMXh1SUNBZ0lHTnZibk4wSUhCeVpXWnBlQ0E5SUhCeVpXWnBlR1Z6VzJsZE8xeHVJQ0FnSUdOdmJuTjBJRzV2VUhKbFptbDRJRDBnS0hCeVpXWnBlQ0E5UFQwZ0p5Y3BPMXh1SUNBZ0lHTnZibk4wSUhCeVpXWnBlR1ZrVUhKdmNHVnlkSGxPWVcxbElEMGdibTlRY21WbWFYZ2dQeUJyWlhrZ09pQndjbVZtYVhnZ0t5QnJaWGt1WTJoaGNrRjBLREFwTG5SdlZYQndaWEpEWVhObEtDa2dLeUJyWlhrdWMyeHBZMlVvTVNrN1hHNWNiaUFnSUNCcFppQW9jSEpsWm1sNFpXUlFjbTl3WlhKMGVVNWhiV1VnYVc0Z2RHVnpkRVZzWlcxbGJuUXVjM1I1YkdVcElIdGNiaUFnSUNBZ0lHTmhiV1ZzUTJGamFHVmJhMlY1WFNBOUlIQnlaV1pwZUdWa1VISnZjR1Z5ZEhsT1lXMWxPMXh1SUNBZ0lDQWdaR0Z6YUVOaFkyaGxXMnRsZVYwZ1BTQmdKSHNvYm05UWNtVm1hWGdnUHlBbkp5QTZJQ2N0SnlsOUpIdGpZVzFsYkZSdlJHRnphQ2h3Y21WbWFYaGxaRkJ5YjNCbGNuUjVUbUZ0WlNsOVlEdGNiaUFnSUNCOVhHNGdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaHJaWGtzSUdGelJHRnphRU5oYzJVcElEMCtJSHRjYmlBZ1kyOXVjM1FnWTJGamFHVWdQU0JoYzBSaGMyaERZWE5sSUQ4Z1pHRnphRU5oWTJobElEb2dZMkZ0Wld4RFlXTm9aVHRjYmx4dUlDQnBaaUFvSVdOaFkyaGxXMnRsZVYwcElIdGNiaUFnSUNCMFpYTjBVSEpsWm1sNEtHdGxlU2s3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnWTJGamFHVmJhMlY1WFR0Y2JuMDdYRzRpWFgwPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JlbmRlcmVycy9jc3MvcHJlZml4ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaGFzUkFGID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpID8gdHJ1ZSA6IGZhbHNlO1xudmFyIG9uTmV4dEZyYW1lO1xuaWYgKGhhc1JBRikge1xuICAgIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTsgfTtcbn1cbmVsc2Uge1xuICAgIHZhciBsYXN0VGltZV8xID0gMDtcbiAgICBvbk5leHRGcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNi43IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWVfMSkpO1xuICAgICAgICBsYXN0VGltZV8xID0gY3VycmVudFRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrKGxhc3RUaW1lXzEpOyB9LCB0aW1lVG9DYWxsKTtcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gb25OZXh0RnJhbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vbi1uZXh0LWZyYW1lLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZyYW1lc3luYy9saWIvb24tbmV4dC1mcmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKSB7XG4gICAgdmFyIGZ1bmN0aW9uc1RvUnVuID0gW107XG4gICAgdmFyIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gW107XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NoZWR1bGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgc3RhcnRSZW5kZXJMb29wKCk7XG4gICAgICAgICAgICBpZiAoZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXhPZkNhbGxiYWNrID0gZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoaW5kZXhPZkNhbGxiYWNrICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLnNwbGljZShpbmRleE9mQ2FsbGJhY2ssIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfYSA9IFtmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSwgZnVuY3Rpb25zVG9SdW5dLCBmdW5jdGlvbnNUb1J1biA9IF9hWzBdLCBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSA9IF9hWzFdO1xuICAgICAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHZhciBudW1UaGlzRnJhbWUgPSBmdW5jdGlvbnNUb1J1bi5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRoaXNGcmFtZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zVG9SdW5baV0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVSZW5kZXJTdGVwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3JlYXRlLXJlbmRlci1zdGVwLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZyYW1lc3luYy9saWIvY3JlYXRlLXJlbmRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90d2VlbiA9IHJlcXVpcmUoJy4vdHdlZW4nKTtcblxudmFyIF90d2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2Vlbik7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgZnJvbSA9IF9yZWYuZnJvbSxcbiAgICAgIHRvID0gX3JlZi50byxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnZnJvbScsICd0byddKTtcblxuICByZXR1cm4gKDAsIF90d2VlbjIuZGVmYXVsdCkoX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgZnJvbTogMCxcbiAgICB0bzogMSxcbiAgICB0cmFuc2Zvcm06ICgwLCBfdHJhbnNmb3JtZXJzLnBpcGUpKCgwLCBfdHJhbnNmb3JtZXJzLmJsZW5kQ29sb3IpKGZyb20sIHRvKSwgX3ZhbHVlVHlwZXMuY29sb3IudHJhbnNmb3JtKVxuICB9KSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnZiRzl5TFhSM1pXVnVMbXB6SWwwc0ltNWhiV1Z6SWpwYkltWnliMjBpTENKMGJ5SXNJbkJ5YjNCeklpd2lkSEpoYm5ObWIzSnRJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenRCUVVOQk96dEJRVU5CT3pzN096czdhMEpCUldVc1owSkJRVFJDTzBGQlFVRXNUVUZCZWtKQkxFbEJRWGxDTEZGQlFYcENRU3hKUVVGNVFqdEJRVUZCTEUxQlFXNUNReXhGUVVGdFFpeFJRVUZ1UWtFc1JVRkJiVUk3UVVGQlFTeE5RVUZhUXl4TFFVRlpPenRCUVVONlF5eFRRVUZQTEd0RFFVTkdRU3hMUVVSRk8wRkJSVXhHTEZWQlFVMHNRMEZHUkR0QlFVZE1ReXhSUVVGSkxFTkJTRU03UVVGSlRFVXNaVUZCVnl4M1FrRkJTeXc0UWtGQlYwZ3NTVUZCV0N4RlFVRnBRa01zUlVGQmFrSXNRMEZCVEN4RlFVRXlRaXhyUWtGQlRVVXNVMEZCYWtNN1FVRktUaXhMUVVGUU8wRkJUVVFzUXlJc0ltWnBiR1VpT2lKamIyeHZjaTEwZDJWbGJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCMGQyVmxiaUJtY205dElDY3VMM1IzWldWdUp6dGNibWx0Y0c5eWRDQjdJR0pzWlc1a1EyOXNiM0lzSUhCcGNHVWdmU0JtY205dElDY3VMaTlwYm1NdmRISmhibk5tYjNKdFpYSnpKenRjYm1sdGNHOXlkQ0I3SUdOdmJHOXlJSDBnWm5KdmJTQW5MaTR2YVc1akwzWmhiSFZsTFhSNWNHVnpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hzZ1puSnZiU3dnZEc4c0lDNHVMbkJ5YjNCeklIMHBJRDArSUh0Y2JpQWdjbVYwZFhKdUlIUjNaV1Z1S0h0Y2JpQWdJQ0F1TGk1d2NtOXdjeXhjYmlBZ0lDQm1jbTl0T2lBd0xGeHVJQ0FnSUhSdk9pQXhMRnh1SUNBZ0lIUnlZVzV6Wm05eWJUb2djR2x3WlNoaWJHVnVaRU52Ykc5eUtHWnliMjBzSUhSdktTd2dZMjlzYjNJdWRISmhibk5tYjNKdEtWeHVJQ0I5S1R0Y2JuMDdYRzRpWFgwPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjdGlvbnMvY29sb3ItdHdlZW4uanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJy4uL2luYy9lYXNpbmcnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ3Jvc3NGYWRlID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENyb3NzRmFkZSwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ3Jvc3NGYWRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDcm9zc0ZhZGUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDcm9zc0ZhZGUucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBkdXJhdGlvbiA9IF9wcm9wcy5kdXJhdGlvbixcbiAgICAgICAgZWFzZSA9IF9wcm9wcy5lYXNlLFxuICAgICAgICBmYWRlciA9IF9wcm9wcy5mYWRlcjtcblxuXG4gICAgdGhpcy5mYWRlciA9IGZhZGVyIHx8ICgwLCBfdHdlZW4yLmRlZmF1bHQpKHtcbiAgICAgIHRvOiAxLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZWFzZTogZWFzZVxuICAgIH0pLnN0YXJ0KCk7XG4gIH07XG5cbiAgQ3Jvc3NGYWRlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBmcm9tID0gX3Byb3BzMi5mcm9tLFxuICAgICAgICB0byA9IF9wcm9wczIudG87XG5cbiAgICB2YXIgYmFsYW5jZSA9IHRoaXMuZmFkZXIuZ2V0KCk7XG4gICAgdmFyIGxhdGVzdEZyb21WYWx1ZSA9IGZyb20uZ2V0KCk7XG4gICAgdmFyIGxhdGVzdFRvVmFsdWUgPSB0by5nZXQoKTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShsYXRlc3RGcm9tVmFsdWUsIGxhdGVzdFRvVmFsdWUsIGJhbGFuY2UpO1xuICB9O1xuXG4gIHJldHVybiBDcm9zc0ZhZGU7XG59KF8yLmRlZmF1bHQpO1xuXG5Dcm9zc0ZhZGUuZGVmYXVsdFByb3BzID0ge1xuICBlYXNlOiBfZWFzaW5nLmxpbmVhclxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ3Jvc3NGYWRlKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOeWIzTnpMV1poWkdVdWFuTWlYU3dpYm1GdFpYTWlPbHNpUTNKdmMzTkdZV1JsSWl3aWIyNVRkR0Z5ZENJc0luQnliM0J6SWl3aVpIVnlZWFJwYjI0aUxDSmxZWE5sSWl3aVptRmtaWElpTENKMGJ5SXNJbk4wWVhKMElpd2lkWEJrWVhSbElpd2labkp2YlNJc0ltSmhiR0Z1WTJVaUxDSm5aWFFpTENKc1lYUmxjM1JHY205dFZtRnNkV1VpTENKc1lYUmxjM1JVYjFaaGJIVmxJaXdpWkdWbVlYVnNkRkJ5YjNCeklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenRCUVVOQk96czdPenM3T3pzN08wbEJSVTFCTEZNN096czdPenM3T3p0elFrRkxTa01zVHl4elFrRkJWVHRCUVVGQkxHbENRVU13UWl4TFFVRkxReXhMUVVRdlFqdEJRVUZCTEZGQlEwRkRMRkZCUkVFc1ZVRkRRVUVzVVVGRVFUdEJRVUZCTEZGQlExVkRMRWxCUkZZc1ZVRkRWVUVzU1VGRVZqdEJRVUZCTEZGQlEyZENReXhMUVVSb1FpeFZRVU5uUWtFc1MwRkVhRUk3T3p0QlFVZFNMRk5CUVV0QkxFdEJRVXdzUjBGQllVRXNVMEZCVXl4eFFrRkJUVHRCUVVNeFFrTXNWVUZCU1N4RFFVUnpRanRCUVVVeFFrZ3NkMEpCUmpCQ08wRkJSekZDUXp0QlFVZ3dRaXhMUVVGT0xFVkJTVzVDUnl4TFFVcHRRaXhGUVVGMFFqdEJRVXRFTEVjN08zTkNRVVZFUXl4TkxIRkNRVUZUTzBGQlFVRXNhMEpCUTJNc1MwRkJTMDRzUzBGRWJrSTdRVUZCUVN4UlFVTkRUeXhKUVVSRUxGZEJRME5CTEVsQlJFUTdRVUZCUVN4UlFVTlBTQ3hGUVVSUUxGZEJRMDlCTEVWQlJGQTdPMEZCUlZBc1VVRkJUVWtzVlVGQlZTeExRVUZMVEN4TFFVRk1MRU5CUVZkTkxFZEJRVmdzUlVGQmFFSTdRVUZEUVN4UlFVRk5ReXhyUWtGQmEwSklMRXRCUVV0RkxFZEJRVXdzUlVGQmVFSTdRVUZEUVN4UlFVRk5SU3huUWtGQlowSlFMRWRCUVVkTExFZEJRVWdzUlVGQmRFSTdRVUZEUVN4WFFVRlBMR2REUVVGeFFrTXNaVUZCY2tJc1JVRkJjME5ETEdGQlFYUkRMRVZCUVhGRVNDeFBRVUZ5UkN4RFFVRlFPMEZCUTBRc1J6czdPenM3UVVGeVFrZFdMRk1zUTBGRFIyTXNXU3hIUVVGbE8wRkJRM0JDVmp0QlFVUnZRaXhET3p0clFrRjFRbFFzVlVGQlEwWXNTMEZCUkR0QlFVRkJMRk5CUVZjc1NVRkJTVVlzVTBGQlNpeERRVUZqUlN4TFFVRmtMRU5CUVZnN1FVRkJRU3hESWl3aVptbHNaU0k2SW1OeWIzTnpMV1poWkdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYm1sdGNHOXlkQ0IwZDJWbGJpQm1jbTl0SUNjdUwzUjNaV1Z1Snp0Y2JtbHRjRzl5ZENCN0lHeHBibVZoY2lCOUlHWnliMjBnSnk0dUwybHVZeTlsWVhOcGJtY25PMXh1YVcxd2IzSjBJSHNnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVjYm1Oc1lYTnpJRU55YjNOelJtRmtaU0JsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzRnSUhOMFlYUnBZeUJrWldaaGRXeDBVSEp2Y0hNZ1BTQjdYRzRnSUNBZ1pXRnpaVG9nYkdsdVpXRnlYRzRnSUgxY2JseHVJQ0J2YmxOMFlYSjBLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2daSFZ5WVhScGIyNHNJR1ZoYzJVc0lHWmhaR1Z5SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdkR2hwY3k1bVlXUmxjaUE5SUdaaFpHVnlJSHg4SUhSM1pXVnVLSHRjYmlBZ0lDQWdJSFJ2T2lBeExGeHVJQ0FnSUNBZ1pIVnlZWFJwYjI0c1hHNGdJQ0FnSUNCbFlYTmxYRzRnSUNBZ2ZTa3VjM1JoY25Rb0tUdGNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHWnliMjBzSUhSdklIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR052Ym5OMElHSmhiR0Z1WTJVZ1BTQjBhR2x6TG1aaFpHVnlMbWRsZENncE8xeHVJQ0FnSUdOdmJuTjBJR3hoZEdWemRFWnliMjFXWVd4MVpTQTlJR1p5YjIwdVoyVjBLQ2s3WEc0Z0lDQWdZMjl1YzNRZ2JHRjBaWE4wVkc5V1lXeDFaU0E5SUhSdkxtZGxkQ2dwTzF4dUlDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWhzWVhSbGMzUkdjbTl0Vm1Gc2RXVXNJR3hoZEdWemRGUnZWbUZzZFdVc0lHSmhiR0Z1WTJVcE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaHdjbTl3Y3lrZ1BUNGdibVYzSUVOeWIzTnpSbUZrWlNod2NtOXdjeWs3WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnZnJhbWVzeW5jJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBoeXNpY3MgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoUGh5c2ljcywgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGh5c2ljcyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFBoeXNpY3MucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYXV0b1N0b3BTcGVlZCA9IF9wcm9wcy5hdXRvU3RvcFNwZWVkLFxuICAgICAgICBhY2NlbGVyYXRpb24gPSBfcHJvcHMuYWNjZWxlcmF0aW9uLFxuICAgICAgICBmcmljdGlvbiA9IF9wcm9wcy5mcmljdGlvbixcbiAgICAgICAgdmVsb2NpdHkgPSBfcHJvcHMudmVsb2NpdHksXG4gICAgICAgIHNwcmluZyA9IF9wcm9wcy5zcHJpbmcsXG4gICAgICAgIHRvID0gX3Byb3BzLnRvO1xuXG4gICAgdmFyIG5ld1ZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgdmFyIGVsYXBzZWQgPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCk7XG5cbiAgICAvLyBBcHBseSBhY2NlbGVyYXRpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoYWNjZWxlcmF0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkoYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBmcmljdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChmcmljdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKj0gTWF0aC5wb3coMSAtIGZyaWN0aW9uLCBlbGFwc2VkIC8gMTAwKTtcbiAgICB9XG5cbiAgICBpZiAoc3ByaW5nICYmIHRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBkaXN0YW5jZVRvVGFyZ2V0ID0gdG8gLSB0aGlzLmN1cnJlbnQ7XG4gICAgICBuZXdWZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHNwcmluZywgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdmVsb2NpdHlcbiAgICB0aGlzLmN1cnJlbnQgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKG5ld1ZlbG9jaXR5LCBlbGFwc2VkKTtcbiAgICB0aGlzLnByb3BzLnZlbG9jaXR5ID0gbmV3VmVsb2NpdHk7XG5cbiAgICAvLyBDaGVjayBpZiBzaW11bGF0aW9uIGlzIGNvbXBsZXRlXG4gICAgLy8gV2UgZG8gdGhpcyBoZXJlIGluc3RlYWQgb2YgYGlzQWN0aW9uQ29tcGxldGVgIGFzIGl0IGFsbG93cyB1c1xuICAgIC8vIHRvIGNsYW1wIGR1cmluZyB0aGlzIHVwZGF0ZVxuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGF1dG9TdG9wU3BlZWQgIT09IGZhbHNlICYmICghbmV3VmVsb2NpdHkgfHwgTWF0aC5hYnMobmV3VmVsb2NpdHkpIDw9IGF1dG9TdG9wU3BlZWQpO1xuXG4gICAgaWYgKHRoaXMuaXNDb21wbGV0ZSAmJiBzcHJpbmcpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRvO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH07XG5cbiAgUGh5c2ljcy5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgfTtcblxuICByZXR1cm4gUGh5c2ljcztcbn0oXzIuZGVmYXVsdCk7XG5cblBoeXNpY3MuZGVmYXVsdFByb3BzID0ge1xuICBhY2NlbGVyYXRpb246IDAsXG4gIGZyaWN0aW9uOiAwLFxuICB2ZWxvY2l0eTogMCxcbiAgYXV0b1N0b3BTcGVlZDogMC4wMDFcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IFBoeXNpY3MocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0JvZVhOcFkzTXVhbk1pWFN3aWJtRnRaWE1pT2xzaVVHaDVjMmxqY3lJc0luVndaR0YwWlNJc0luQnliM0J6SWl3aVlYVjBiMU4wYjNCVGNHVmxaQ0lzSW1GalkyVnNaWEpoZEdsdmJpSXNJbVp5YVdOMGFXOXVJaXdpZG1Wc2IyTnBkSGtpTENKemNISnBibWNpTENKMGJ5SXNJbTVsZDFabGJHOWphWFI1SWl3aVpXeGhjSE5sWkNJc0luVnVaR1ZtYVc1bFpDSXNJbVJwYzNSaGJtTmxWRzlVWVhKblpYUWlMQ0pqZFhKeVpXNTBJaXdpYVhORGIyMXdiR1YwWlNJc0lrMWhkR2dpTENKaFluTWlMQ0pwYzBGamRHbHZia052YlhCc1pYUmxJaXdpWkdWbVlYVnNkRkJ5YjNCeklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3UVVGRFFUczdPenM3T3pzN096dEpRVVZOUVN4UE96czdPenM3T3pzN2IwSkJVVXBETEUwc2NVSkJRVk03UVVGQlFTeHBRa0ZEYVVVc1MwRkJTME1zUzBGRWRFVTdRVUZCUVN4UlFVTkRReXhoUVVSRUxGVkJRME5CTEdGQlJFUTdRVUZCUVN4UlFVTm5Ra01zV1VGRWFFSXNWVUZEWjBKQkxGbEJSR2hDTzBGQlFVRXNVVUZET0VKRExGRkJSRGxDTEZWQlF6aENRU3hSUVVRNVFqdEJRVUZCTEZGQlEzZERReXhSUVVSNFF5eFZRVU4zUTBFc1VVRkVlRU03UVVGQlFTeFJRVU5yUkVNc1RVRkViRVFzVlVGRGEwUkJMRTFCUkd4RU8wRkJRVUVzVVVGRE1FUkRMRVZCUkRGRUxGVkJRekJFUVN4RlFVUXhSRHM3UVVGRlVDeFJRVUZKUXl4alFVRmpTQ3hSUVVGc1FqdEJRVU5CTEZGQlFVMUpMRlZCUVZVc2IwTkJRV2hDT3p0QlFVVkJPMEZCUTBFc1VVRkJTVTRzV1VGQlNpeEZRVUZyUWp0QlFVTm9Ra3NzY1VKQlFXVXNlVUpCUVdOTUxGbEJRV1FzUlVGQk5FSk5MRTlCUVRWQ0xFTkJRV1k3UVVGRFJEczdRVUZGUkR0QlFVTkJMRkZCUVVsTUxGRkJRVW9zUlVGQll6dEJRVU5hU1N3NFFrRkJaMElzU1VGQlNVb3NVVUZCY0VJc1JVRkJhME5MTEZWQlFWVXNSMEZCTlVNN1FVRkRSRHM3UVVGRlJDeFJRVUZKU0N4VlFVRlZReXhQUVVGUFJ5eFRRVUZ5UWl4RlFVRm5RenRCUVVNNVFpeFZRVUZOUXl4dFFrRkJiVUpLTEV0QlFVc3NTMEZCUzBzc1QwRkJia003UVVGRFFVb3NjVUpCUVdWSExHMUNRVUZ0UWl4NVFrRkJZMHdzVFVGQlpDeEZRVUZ6UWtjc1QwRkJkRUlzUTBGQmJFTTdRVUZEUkRzN1FVRkZSRHRCUVVOQkxGTkJRVXRITEU5QlFVd3NTVUZCWjBJc2VVSkJRV05LTEZkQlFXUXNSVUZCTWtKRExFOUJRVE5DTEVOQlFXaENPMEZCUTBFc1UwRkJTMUlzUzBGQlRDeERRVUZYU1N4UlFVRllMRWRCUVhOQ1J5eFhRVUYwUWpzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZMU3l4VlFVRk1MRWRCUVcxQ1dDeHJRa0ZCYTBJc1MwRkJiRUlzUzBGQk5FSXNRMEZCUTAwc1YwRkJSQ3hKUVVGblFrMHNTMEZCUzBNc1IwRkJUQ3hEUVVGVFVDeFhRVUZVTEV0QlFYbENUaXhoUVVGeVJTeERRVUZ1UWpzN1FVRkZRU3hSUVVGSkxFdEJRVXRYTEZWQlFVd3NTVUZCYlVKUUxFMUJRWFpDTEVWQlFTdENPMEZCUXpkQ0xGZEJRVXROTEU5QlFVd3NSMEZCWlV3c1JVRkJaanRCUVVORU96dEJRVVZFTEZkQlFVOHNTMEZCUzBzc1QwRkJXanRCUVVORUxFYzdPMjlDUVVWRVNTeG5RaXdyUWtGQmJVSTdRVUZEYWtJc1YwRkJUeXhMUVVGTFNDeFZRVUZhTzBGQlEwUXNSenM3T3pzN1FVRTVRMGRrTEU4c1EwRkRSMnRDTEZrc1IwRkJaVHRCUVVOd1FtUXNaMEpCUVdNc1EwRkVUVHRCUVVWd1FrTXNXVUZCVlN4RFFVWlZPMEZCUjNCQ1F5eFpRVUZWTEVOQlNGVTdRVUZKY0VKSUxHbENRVUZsTzBGQlNrc3NRenM3YTBKQlowUlVMRlZCUVVORUxFdEJRVVE3UVVGQlFTeFRRVUZYTEVsQlFVbEdMRTlCUVVvc1EwRkJXVVVzUzBGQldpeERRVUZZTzBGQlFVRXNReUlzSW1acGJHVWlPaUp3YUhsemFXTnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNXBiWEJ2Y25RZ2V5QjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVWdmU0JtY205dElDZG1jbUZ0WlhONWJtTW5PMXh1YVcxd2IzSjBJSHNnYzNCbFpXUlFaWEpHY21GdFpTQjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYmx4dVkyeGhjM01nVUdoNWMybGpjeUJsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzRnSUhOMFlYUnBZeUJrWldaaGRXeDBVSEp2Y0hNZ1BTQjdYRzRnSUNBZ1lXTmpaV3hsY21GMGFXOXVPaUF3TEZ4dUlDQWdJR1p5YVdOMGFXOXVPaUF3TEZ4dUlDQWdJSFpsYkc5amFYUjVPaUF3TEZ4dUlDQWdJR0YxZEc5VGRHOXdVM0JsWldRNklEQXVNREF4WEc0Z0lIMWNibHh1SUNCMWNHUmhkR1VvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJoZFhSdlUzUnZjRk53WldWa0xDQmhZMk5sYkdWeVlYUnBiMjRzSUdaeWFXTjBhVzl1TENCMlpXeHZZMmwwZVN3Z2MzQnlhVzVuTENCMGJ5QjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0JzWlhRZ2JtVjNWbVZzYjJOcGRIa2dQU0IyWld4dlkybDBlVHRjYmlBZ0lDQmpiMjV6ZENCbGJHRndjMlZrSUQwZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbEtDazdYRzVjYmlBZ0lDQXZMeUJCY0hCc2VTQmhZMk5sYkdWeVlYUnBiMjRnZEc4Z2RtVnNiMk5wZEhsY2JpQWdJQ0JwWmlBb1lXTmpaV3hsY21GMGFXOXVLU0I3WEc0Z0lDQWdJQ0J1WlhkV1pXeHZZMmwwZVNBclBTQnpjR1ZsWkZCbGNrWnlZVzFsS0dGalkyVnNaWEpoZEdsdmJpd2daV3hoY0hObFpDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdRWEJ3YkhrZ1puSnBZM1JwYjI0Z2RHOGdkbVZzYjJOcGRIbGNiaUFnSUNCcFppQW9abkpwWTNScGIyNHBJSHRjYmlBZ0lDQWdJRzVsZDFabGJHOWphWFI1SUNvOUlDZ3hJQzBnWm5KcFkzUnBiMjRwSUNvcUlDaGxiR0Z3YzJWa0lDOGdNVEF3S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2MzQnlhVzVuSUNZbUlIUnZJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lHTnZibk4wSUdScGMzUmhibU5sVkc5VVlYSm5aWFFnUFNCMGJ5QXRJSFJvYVhNdVkzVnljbVZ1ZER0Y2JpQWdJQ0FnSUc1bGQxWmxiRzlqYVhSNUlDczlJR1JwYzNSaGJtTmxWRzlVWVhKblpYUWdLaUJ6Y0dWbFpGQmxja1p5WVcxbEtITndjbWx1Wnl3Z1pXeGhjSE5sWkNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1FYQndiSGtnZG1Wc2IyTnBkSGxjYmlBZ0lDQjBhR2x6TG1OMWNuSmxiblFnS3owZ2MzQmxaV1JRWlhKR2NtRnRaU2h1WlhkV1pXeHZZMmwwZVN3Z1pXeGhjSE5sWkNrN1hHNGdJQ0FnZEdocGN5NXdjbTl3Y3k1MlpXeHZZMmwwZVNBOUlHNWxkMVpsYkc5amFYUjVPMXh1WEc0Z0lDQWdMeThnUTJobFkyc2dhV1lnYzJsdGRXeGhkR2x2YmlCcGN5QmpiMjF3YkdWMFpWeHVJQ0FnSUM4dklGZGxJR1J2SUhSb2FYTWdhR1Z5WlNCcGJuTjBaV0ZrSUc5bUlHQnBjMEZqZEdsdmJrTnZiWEJzWlhSbFlDQmhjeUJwZENCaGJHeHZkM01nZFhOY2JpQWdJQ0F2THlCMGJ5QmpiR0Z0Y0NCa2RYSnBibWNnZEdocGN5QjFjR1JoZEdWY2JpQWdJQ0IwYUdsekxtbHpRMjl0Y0d4bGRHVWdQU0FvWVhWMGIxTjBiM0JUY0dWbFpDQWhQVDBnWm1Gc2MyVWdKaVlnS0NGdVpYZFdaV3h2WTJsMGVTQjhmQ0JOWVhSb0xtRmljeWh1WlhkV1pXeHZZMmwwZVNrZ1BEMGdZWFYwYjFOMGIzQlRjR1ZsWkNrcE8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWFYTkRiMjF3YkdWMFpTQW1KaUJ6Y0hKcGJtY3BJSHRjYmlBZ0lDQWdJSFJvYVhNdVkzVnljbVZ1ZENBOUlIUnZPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbU4xY25KbGJuUTdYRzRnSUgxY2JseHVJQ0JwYzBGamRHbHZia052YlhCc1pYUmxLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1selEyOXRjR3hsZEdVN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tIQnliM0J6S1NBOVBpQnVaWGNnVUdoNWMybGpjeWh3Y205d2N5azdYRzRpWFgwPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjdGlvbnMvcGh5c2ljcy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdmFsdWUgPSByZXF1aXJlKCcuL3ZhbHVlJyk7XG5cbnZhciBfdmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWUpO1xuXG52YXIgX2NvbXBvc2l0ZSA9IHJlcXVpcmUoJy4vY29tcG9zaXRlJyk7XG5cbnZhciBfY29tcG9zaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2l0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gY3JlYXRlUG9pbnRlcihfcmVmMiwgX3JlZikge1xuICB2YXIgeCA9IF9yZWYyLngsXG4gICAgICB5ID0gX3JlZjIueTtcblxuICB2YXIgZXZlbnRUb1BvaW50cyA9IF9yZWYuZXZlbnRUb1BvaW50cyxcbiAgICAgIG1vdmVFdmVudCA9IF9yZWYubW92ZUV2ZW50LFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydldmVudFRvUG9pbnRzJywgJ21vdmVFdmVudCddKTtcblxuICB2YXIgcG9pbnRlciA9ICgwLCBfY29tcG9zaXRlMi5kZWZhdWx0KSh7XG4gICAgeDogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeCksXG4gICAgeTogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeSlcbiAgfSwgX2V4dGVuZHMoe1xuICAgIHByZXZlbnREZWZhdWx0OiB0cnVlXG4gIH0sIHByb3BzKSk7XG5cbiAgdmFyIHVwZGF0ZVBvaW50ZXIgPSBmdW5jdGlvbiB1cGRhdGVQb2ludGVyKGUpIHtcbiAgICBpZiAocG9pbnRlci5nZXRQcm9wKCdwcmV2ZW50RGVmYXVsdCcpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyIHBvaW50cyA9IGV2ZW50VG9Qb2ludHMoZSk7XG4gICAgcG9pbnRlci54LnNldChwb2ludHMueCk7XG4gICAgcG9pbnRlci55LnNldChwb2ludHMueSk7XG4gIH07XG5cbiAgcG9pbnRlci5zZXRQcm9wcyh7XG4gICAgX29uU3RhcnQ6IGZ1bmN0aW9uIF9vblN0YXJ0KCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlciwgeyBwYXNzaXZlOiAhcG9pbnRlci5nZXRQcm9wKCdwcmV2ZW50RGVmYXVsdCcpIH0pO1xuICAgIH0sXG4gICAgX29uU3RvcDogZnVuY3Rpb24gX29uU3RvcCgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBvaW50ZXI7XG59XG5cbnZhciBtb3VzZUV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIG1vdXNlRXZlbnRUb1BvaW50KGUpIHtcbiAgcmV0dXJuIHtcbiAgICB4OiBlLmNsaWVudFgsXG4gICAgeTogZS5jbGllbnRZXG4gIH07XG59O1xuXG52YXIgdG91Y2hFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiB0b3VjaEV2ZW50VG9Qb2ludChfcmVmMykge1xuICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBfcmVmMy5jaGFuZ2VkVG91Y2hlcztcbiAgcmV0dXJuIHtcbiAgICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbiAgfTtcbn07XG5cbnZhciBnZXROYXRpdmVFdmVudCA9IGZ1bmN0aW9uIGdldE5hdGl2ZUV2ZW50KGUpIHtcbiAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlLm5hdGl2ZUV2ZW50IHx8IGU7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZSwgcHJvcHMpIHtcbiAgdmFyIG5hdGl2ZUV2ZW50ID0gZ2V0TmF0aXZlRXZlbnQoZSk7XG4gIHJldHVybiBuYXRpdmVFdmVudC50b3VjaGVzID8gY3JlYXRlUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwgX2V4dGVuZHMoe1xuICAgIG1vdmVFdmVudDogJ3RvdWNobW92ZScsXG4gICAgZXZlbnRUb1BvaW50czogdG91Y2hFdmVudFRvUG9pbnRcbiAgfSwgcHJvcHMpKSA6IGNyZWF0ZVBvaW50ZXIobW91c2VFdmVudFRvUG9pbnQoZSksIF9leHRlbmRzKHtcbiAgICBtb3ZlRXZlbnQ6ICdtb3VzZW1vdmUnLFxuICAgIGV2ZW50VG9Qb2ludHM6IG1vdXNlRXZlbnRUb1BvaW50XG4gIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQnZhVzUwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHNpWTNKbFlYUmxVRzlwYm5SbGNpSXNJbmdpTENKNUlpd2laWFpsYm5SVWIxQnZhVzUwY3lJc0ltMXZkbVZGZG1WdWRDSXNJbkJ5YjNCeklpd2ljRzlwYm5SbGNpSXNJbkJ5WlhabGJuUkVaV1poZFd4MElpd2lkWEJrWVhSbFVHOXBiblJsY2lJc0ltVWlMQ0puWlhSUWNtOXdJaXdpY0c5cGJuUnpJaXdpYzJWMElpd2ljMlYwVUhKdmNITWlMQ0pmYjI1VGRHRnlkQ0lzSW1SdlkzVnRaVzUwSWl3aVpHOWpkVzFsYm5SRmJHVnRaVzUwSWl3aVlXUmtSWFpsYm5STWFYTjBaVzVsY2lJc0luQmhjM05wZG1VaUxDSmZiMjVUZEc5d0lpd2ljbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaUlzSW0xdmRYTmxSWFpsYm5SVWIxQnZhVzUwSWl3aVkyeHBaVzUwV0NJc0ltTnNhV1Z1ZEZraUxDSjBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDSXNJbU5vWVc1blpXUlViM1ZqYUdWeklpd2laMlYwVG1GMGFYWmxSWFpsYm5RaUxDSnZjbWxuYVc1aGJFVjJaVzUwSWl3aWJtRjBhWFpsUlhabGJuUWlMQ0owYjNWamFHVnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenRCUVVOQk96czdPenM3T3p0QlFVVkJMRk5CUVZOQkxHRkJRVlFzWTBGQmVVVTdRVUZCUVN4TlFVRm9SRU1zUTBGQlowUXNVMEZCYUVSQkxFTkJRV2RFTzBGQlFVRXNUVUZCTjBORExFTkJRVFpETEZOQlFUZERRU3hEUVVFMlF6czdRVUZCUVN4TlFVRjBRME1zWVVGQmMwTXNVVUZCZEVOQkxHRkJRWE5ETzBGQlFVRXNUVUZCZGtKRExGTkJRWFZDTEZGQlFYWkNRU3hUUVVGMVFqdEJRVUZCTEUxQlFWUkRMRXRCUVZNN08wRkJRM1pGTEUxQlFVMURMRlZCUVZVc2VVSkJRVlU3UVVGRGVFSk1MRTlCUVVjc2NVSkJRVTFCTEVOQlFVNHNRMEZFY1VJN1FVRkZlRUpETEU5QlFVY3NjVUpCUVUxQkxFTkJRVTQ3UVVGR2NVSXNSMEZCVmp0QlFVbGtTeXh2UWtGQlowSTdRVUZLUml4TFFVdFlSaXhMUVV4WExFVkJRV2hDT3p0QlFWRkJMRTFCUVUxSExHZENRVUZuUWl4VFFVRm9Ra0VzWVVGQlowSXNRMEZCUTBNc1EwRkJSQ3hGUVVGUE8wRkJRek5DTEZGQlFVbElMRkZCUVZGSkxFOUJRVklzUTBGQlowSXNaMEpCUVdoQ0xFTkJRVW9zUlVGQmRVTTdRVUZEY2tORUxGRkJRVVZHTEdOQlFVWTdRVUZEUkRzN1FVRkZSQ3hSUVVGTlNTeFRRVUZUVWl4alFVRmpUU3hEUVVGa0xFTkJRV1k3UVVGRFFVZ3NXVUZCVVV3c1EwRkJVaXhEUVVGVlZ5eEhRVUZXTEVOQlFXTkVMRTlCUVU5V0xFTkJRWEpDTzBGQlEwRkxMRmxCUVZGS0xFTkJRVklzUTBGQlZWVXNSMEZCVml4RFFVRmpSQ3hQUVVGUFZDeERRVUZ5UWp0QlFVTkVMRWRCVWtRN08wRkJWVUZKTEZWQlFWRlBMRkZCUVZJc1EwRkJhVUk3UVVGRFprTXNZMEZCVlR0QlFVRkJMR0ZCUVUxRExGTkJRVk5ETEdWQlFWUXNRMEZCZVVKRExHZENRVUY2UWl4RFFVRXdRMklzVTBGQk1VTXNSVUZCY1VSSkxHRkJRWEpFTEVWQlFXOUZMRVZCUVVWVkxGTkJRVk1zUTBGQlExb3NVVUZCVVVrc1QwRkJVaXhEUVVGblFpeG5Ra0ZCYUVJc1EwRkJXaXhGUVVGd1JTeERRVUZPTzBGQlFVRXNTMEZFU3p0QlFVVm1VeXhoUVVGVE8wRkJRVUVzWVVGQlRVb3NVMEZCVTBNc1pVRkJWQ3hEUVVGNVFra3NiVUpCUVhwQ0xFTkJRVFpEYUVJc1UwRkJOME1zUlVGQmQwUkpMR0ZCUVhoRUxFTkJRVTQ3UVVGQlFUdEJRVVpOTEVkQlFXcENPenRCUVV0QkxGTkJRVTlHTEU5QlFWQTdRVUZEUkRzN1FVRkZSQ3hKUVVGTlpTeHZRa0ZCYjBJc1UwRkJjRUpCTEdsQ1FVRnZRaXhEUVVGRFdpeERRVUZFTzBGQlFVRXNVMEZCVVR0QlFVTm9RMUlzVDBGQlIxRXNSVUZCUldFc1QwRkVNa0k3UVVGRmFFTndRaXhQUVVGSFR5eEZRVUZGWXp0QlFVWXlRaXhIUVVGU08wRkJRVUVzUTBGQk1VSTdPMEZCUzBFc1NVRkJUVU1zYjBKQlFXOUNMRk5CUVhCQ1FTeHBRa0ZCYjBJN1FVRkJRU3hOUVVGSFF5eGpRVUZJTEZOQlFVZEJMR05CUVVnN1FVRkJRU3hUUVVGNVFqdEJRVU5xUkhoQ0xFOUJRVWQzUWl4bFFVRmxMRU5CUVdZc1JVRkJhMEpJTEU5QlJEUkNPMEZCUldwRWNFSXNUMEZCUjNWQ0xHVkJRV1VzUTBGQlppeEZRVUZyUWtZN1FVRkdORUlzUjBGQmVrSTdRVUZCUVN4RFFVRXhRanM3UVVGTFFTeEpRVUZOUnl4cFFrRkJhVUlzVTBGQmFrSkJMR05CUVdsQ0xFTkJRVU5xUWl4RFFVRkVPMEZCUVVFc1UwRkJUMEVzUlVGQlJXdENMR0ZCUVVZc1NVRkJiVUpzUWl4RlFVRkZiVUlzVjBGQmNrSXNTVUZCYjBOdVFpeERRVUV6UXp0QlFVRkJMRU5CUVhaQ096dHJRa0ZGWlN4VlFVRkRRU3hEUVVGRUxFVkJRVWxLTEV0QlFVb3NSVUZCWXp0QlFVTXpRaXhOUVVGTmRVSXNZMEZCWTBZc1pVRkJaV3BDTEVOQlFXWXNRMEZCY0VJN1FVRkRRU3hUUVVGUmJVSXNXVUZCV1VNc1QwRkJZaXhIUVVOTU4wSXNZMEZCWTNkQ0xHdENRVUZyUW1Zc1EwRkJiRUlzUTBGQlpEdEJRVU5GVEN4bFFVRlhMRmRCUkdJN1FVRkZSVVFzYlVKQlFXVnhRanRCUVVacVFpeExRVWRMYmtJc1MwRklUQ3hGUVVSTExFZEJUVXhNTEdOQlFXTnhRaXhyUWtGQmEwSmFMRU5CUVd4Q0xFTkJRV1E3UVVGRFJVd3NaVUZCVnl4WFFVUmlPMEZCUlVWRUxHMUNRVUZsYTBJN1FVRkdha0lzUzBGSFMyaENMRXRCU0V3c1JVRk9SanRCUVZkRUxFTWlMQ0ptYVd4bElqb2ljRzlwYm5SbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCMllXeDFaU0JtY205dElDY3VMM1poYkhWbEp6dGNibWx0Y0c5eWRDQmpiMjF3YjNOcGRHVWdabkp2YlNBbkxpOWpiMjF3YjNOcGRHVW5PMXh1WEc1bWRXNWpkR2x2YmlCamNtVmhkR1ZRYjJsdWRHVnlLSHNnZUN3Z2VTQjlMQ0I3SUdWMlpXNTBWRzlRYjJsdWRITXNJRzF2ZG1WRmRtVnVkQ3dnTGk0dWNISnZjSE1nZlNrZ2UxeHVJQ0JqYjI1emRDQndiMmx1ZEdWeUlEMGdZMjl0Y0c5emFYUmxLSHRjYmlBZ0lDQjRPaUIyWVd4MVpTaDRLU3hjYmlBZ0lDQjVPaUIyWVd4MVpTaDVLVnh1SUNCOUxDQjdYRzRnSUNBZ2NISmxkbVZ1ZEVSbFptRjFiSFE2SUhSeWRXVXNYRzRnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdmU2s3WEc1Y2JpQWdZMjl1YzNRZ2RYQmtZWFJsVUc5cGJuUmxjaUE5SUNobEtTQTlQaUI3WEc0Z0lDQWdhV1lnS0hCdmFXNTBaWEl1WjJWMFVISnZjQ2duY0hKbGRtVnVkRVJsWm1GMWJIUW5LU2tnZTF4dUlDQWdJQ0FnWlM1d2NtVjJaVzUwUkdWbVlYVnNkQ2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR052Ym5OMElIQnZhVzUwY3lBOUlHVjJaVzUwVkc5UWIybHVkSE1vWlNrN1hHNGdJQ0FnY0c5cGJuUmxjaTU0TG5ObGRDaHdiMmx1ZEhNdWVDazdYRzRnSUNBZ2NHOXBiblJsY2k1NUxuTmxkQ2h3YjJsdWRITXVlU2s3WEc0Z0lIMDdYRzVjYmlBZ2NHOXBiblJsY2k1elpYUlFjbTl3Y3loN1hHNGdJQ0FnWDI5dVUzUmhjblE2SUNncElEMCtJR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtHMXZkbVZGZG1WdWRDd2dkWEJrWVhSbFVHOXBiblJsY2l3Z2V5QndZWE56YVhabE9pQWhjRzlwYm5SbGNpNW5aWFJRY205d0tDZHdjbVYyWlc1MFJHVm1ZWFZzZENjcElIMHBMRnh1SUNBZ0lGOXZibE4wYjNBNklDZ3BJRDArSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0cxdmRtVkZkbVZ1ZEN3Z2RYQmtZWFJsVUc5cGJuUmxjaWxjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUhCdmFXNTBaWEk3WEc1OVhHNWNibU52Ym5OMElHMXZkWE5sUlhabGJuUlViMUJ2YVc1MElEMGdLR1VwSUQwK0lDaDdYRzRnSUhnNklHVXVZMnhwWlc1MFdDeGNiaUFnZVRvZ1pTNWpiR2xsYm5SWlhHNTlLVHRjYmx4dVkyOXVjM1FnZEc5MVkyaEZkbVZ1ZEZSdlVHOXBiblFnUFNBb2V5QmphR0Z1WjJWa1ZHOTFZMmhsY3lCOUtTQTlQaUFvZTF4dUlDQjRPaUJqYUdGdVoyVmtWRzkxWTJobGMxc3dYUzVqYkdsbGJuUllMRnh1SUNCNU9pQmphR0Z1WjJWa1ZHOTFZMmhsYzFzd1hTNWpiR2xsYm5SWlhHNTlLVHRjYmx4dVkyOXVjM1FnWjJWMFRtRjBhWFpsUlhabGJuUWdQU0FvWlNrZ1BUNGdaUzV2Y21sbmFXNWhiRVYyWlc1MElIeDhJR1V1Ym1GMGFYWmxSWFpsYm5RZ2ZId2daVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dVc0lIQnliM0J6S1NBOVBpQjdYRzRnSUdOdmJuTjBJRzVoZEdsMlpVVjJaVzUwSUQwZ1oyVjBUbUYwYVhabFJYWmxiblFvWlNrN1hHNGdJSEpsZEhWeWJpQW9ibUYwYVhabFJYWmxiblF1ZEc5MVkyaGxjeWtnUDF4dUlDQWdJR055WldGMFpWQnZhVzUwWlhJb2RHOTFZMmhGZG1WdWRGUnZVRzlwYm5Rb1pTa3NJSHRjYmlBZ0lDQWdJRzF2ZG1WRmRtVnVkRG9nSjNSdmRXTm9iVzkyWlNjc1hHNGdJQ0FnSUNCbGRtVnVkRlJ2VUc5cGJuUnpPaUIwYjNWamFFVjJaVzUwVkc5UWIybHVkQ3hjYmlBZ0lDQWdJQzR1TG5CeWIzQnpYRzRnSUNBZ2ZTa2dPbHh1SUNBZ0lHTnlaV0YwWlZCdmFXNTBaWElvYlc5MWMyVkZkbVZ1ZEZSdlVHOXBiblFvWlNrc0lIdGNiaUFnSUNBZ0lHMXZkbVZGZG1WdWREb2dKMjF2ZFhObGJXOTJaU2NzWEc0Z0lDQWdJQ0JsZG1WdWRGUnZVRzlwYm5Sek9pQnRiM1Z6WlVWMlpXNTBWRzlRYjJsdWRDeGNiaUFnSUNBZ0lDNHVMbkJ5YjNCelhHNGdJQ0FnZlNrN1hHNTlPMXh1SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjdGlvbnMvcG9pbnRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdmFsdWUgPSByZXF1aXJlKCcuL3ZhbHVlJyk7XG5cbnZhciBfdmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWUpO1xuXG52YXIgX2NvbXBvc2l0ZSA9IHJlcXVpcmUoJy4vY29tcG9zaXRlJyk7XG5cbnZhciBfY29tcG9zaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2l0ZSk7XG5cbnZhciBfcGFyYWxsZWwgPSByZXF1aXJlKCcuL3BhcmFsbGVsJyk7XG5cbnZhciBfcGFyYWxsZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyYWxsZWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvdWNoZXMoaW5pdGlhbFRvdWNoZXMsIF9yZWYpIHtcbiAgdmFyIGV2ZW50VG9Ub3VjaGVzID0gX3JlZi5ldmVudFRvVG91Y2hlcyxcbiAgICAgIG1vdmVFdmVudCA9IF9yZWYubW92ZUV2ZW50LFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydldmVudFRvVG91Y2hlcycsICdtb3ZlRXZlbnQnXSk7XG5cbiAgdmFyIHRvdWNoZXMgPSAoMCwgX3BhcmFsbGVsMi5kZWZhdWx0KShtYXBDb29yZHNUb0FjdGlvbnMoaW5pdGlhbFRvdWNoZXMpLCBfZXh0ZW5kcyh7XG4gICAgcHJldmVudERlZmF1bHQ6IHRydWVcbiAgfSwgcHJvcHMpKTtcblxuICBmdW5jdGlvbiB1cGRhdGVUb3VjaGVzKGUpIHtcbiAgICBpZiAocHJvcHMucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciBsYXRlc3RUb3VjaGVzID0gZXZlbnRUb1RvdWNoZXMoZSk7XG4gICAgdXBkYXRlQWN0aW9uV2l0aFRvdWNoZXModG91Y2hlcywgbGF0ZXN0VG91Y2hlcyk7XG4gIH1cblxuICB0b3VjaGVzLnNldFByb3BzKHtcbiAgICBfb25TdGFydDogZnVuY3Rpb24gX29uU3RhcnQoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVUb3VjaGVzKTtcbiAgICB9LFxuICAgIF9vblN0b3A6IGZ1bmN0aW9uIF9vblN0b3AoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVUb3VjaGVzKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0b3VjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXBDb29yZHNUb0FjdGlvbnMoY29vcmRzKSB7XG4gIHZhciBhY3Rpb25zID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF9jb29yZHMkaSA9IGNvb3Jkc1tpXSxcbiAgICAgICAgeCA9IF9jb29yZHMkaS54LFxuICAgICAgICB5ID0gX2Nvb3JkcyRpLnk7XG5cbiAgICBhY3Rpb25zW2ldID0gKDAsIF9jb21wb3NpdGUyLmRlZmF1bHQpKHtcbiAgICAgIHg6ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHgpLFxuICAgICAgeTogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeSlcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gYWN0aW9ucztcbn1cblxuZnVuY3Rpb24gdXBkYXRlQWN0aW9uV2l0aFRvdWNoZXModG91Y2hlcywgbmV3VG91Y2hlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld1RvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX25ld1RvdWNoZXMkaSA9IG5ld1RvdWNoZXNbaV0sXG4gICAgICAgIHggPSBfbmV3VG91Y2hlcyRpLngsXG4gICAgICAgIHkgPSBfbmV3VG91Y2hlcyRpLnk7XG5cbiAgICB2YXIgdG91Y2hBY3Rpb25zID0gdG91Y2hlcy5nZXRDaGlsZHJlbigpO1xuICAgIHZhciB0b3VjaEFjdGlvbiA9IHRvdWNoQWN0aW9uc1tpXTtcbiAgICBpZiAodG91Y2hBY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdG91Y2hBY3Rpb24ueC5zZXQoeCk7XG4gICAgICB0b3VjaEFjdGlvbi55LnNldCh5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG91Y2hlcy5hZGRBY3Rpb24oKDAsIF9jb21wb3NpdGUyLmRlZmF1bHQpKHtcbiAgICAgICAgeDogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeCksXG4gICAgICAgIHk6ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHkpXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG59XG5cbnZhciBtb3VzZUV2ZW50VG9Ub3VjaGVzID0gZnVuY3Rpb24gbW91c2VFdmVudFRvVG91Y2hlcyhfcmVmMikge1xuICB2YXIgcGFnZVggPSBfcmVmMi5wYWdlWCxcbiAgICAgIHBhZ2VZID0gX3JlZjIucGFnZVk7XG4gIHJldHVybiBbeyB4OiBwYWdlWCwgeTogcGFnZVkgfV07XG59O1xudmFyIHRvdWNoRXZlbnRUb1RvdWNoZXMgPSBmdW5jdGlvbiB0b3VjaEV2ZW50VG9Ub3VjaGVzKF9yZWYzKSB7XG4gIHZhciB0b3VjaGVzID0gX3JlZjMudG91Y2hlcztcbiAgcmV0dXJuIGV4dHJhY3RDb29yZHModG91Y2hlcyk7XG59O1xuXG5mdW5jdGlvbiBleHRyYWN0Q29vcmRzKHRvdWNoZXMpIHtcbiAgdmFyIGNvb3JkcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX3RvdWNoZXMkaSA9IHRvdWNoZXNbaV0sXG4gICAgICAgIGNsaWVudFggPSBfdG91Y2hlcyRpLmNsaWVudFgsXG4gICAgICAgIGNsaWVudFkgPSBfdG91Y2hlcyRpLmNsaWVudFk7XG5cbiAgICBjb29yZHNbaV0gPSB7XG4gICAgICB4OiBjbGllbnRYLFxuICAgICAgeTogY2xpZW50WVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxudmFyIGdldE5hdGl2ZUV2ZW50ID0gZnVuY3Rpb24gZ2V0TmF0aXZlRXZlbnQoZSkge1xuICByZXR1cm4gZS5vcmlnaW5hbEV2ZW50IHx8IGUubmF0aXZlRXZlbnQgfHwgZTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlLCBwcm9wcykge1xuICB2YXIgbmF0aXZlRXZlbnQgPSBnZXROYXRpdmVFdmVudChlKTtcbiAgcmV0dXJuIG5hdGl2ZUV2ZW50LnRvdWNoZXMgPyBjcmVhdGVUb3VjaGVzKHRvdWNoRXZlbnRUb1RvdWNoZXMoZSksIF9leHRlbmRzKHtcbiAgICBtb3ZlRXZlbnQ6ICd0b3VjaG1vdmUnLFxuICAgIGV2ZW50VG9Ub3VjaGVzOiB0b3VjaEV2ZW50VG9Ub3VjaGVzXG4gIH0sIHByb3BzKSkgOiBjcmVhdGVUb3VjaGVzKG1vdXNlRXZlbnRUb1RvdWNoZXMoZSksIF9leHRlbmRzKHtcbiAgICBtb3ZlRXZlbnQ6ICdtb3VzZW1vdmUnLFxuICAgIGV2ZW50VG9Ub3VjaGVzOiBtb3VzZUV2ZW50VG9Ub3VjaGVzXG4gIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzUnZkV05vWlhNdWFuTWlYU3dpYm1GdFpYTWlPbHNpWTNKbFlYUmxWRzkxWTJobGN5SXNJbWx1YVhScFlXeFViM1ZqYUdWeklpd2laWFpsYm5SVWIxUnZkV05vWlhNaUxDSnRiM1psUlhabGJuUWlMQ0p3Y205d2N5SXNJblJ2ZFdOb1pYTWlMQ0p0WVhCRGIyOXlaSE5VYjBGamRHbHZibk1pTENKd2NtVjJaVzUwUkdWbVlYVnNkQ0lzSW5Wd1pHRjBaVlJ2ZFdOb1pYTWlMQ0psSWl3aWJHRjBaWE4wVkc5MVkyaGxjeUlzSW5Wd1pHRjBaVUZqZEdsdmJsZHBkR2hVYjNWamFHVnpJaXdpYzJWMFVISnZjSE1pTENKZmIyNVRkR0Z5ZENJc0ltUnZZM1Z0Wlc1MElpd2laRzlqZFcxbGJuUkZiR1Z0Wlc1MElpd2lZV1JrUlhabGJuUk1hWE4wWlc1bGNpSXNJbDl2YmxOMGIzQWlMQ0p5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5SWl3aVkyOXZjbVJ6SWl3aVlXTjBhVzl1Y3lJc0lta2lMQ0pzWlc1bmRHZ2lMQ0o0SWl3aWVTSXNJbTVsZDFSdmRXTm9aWE1pTENKMGIzVmphRUZqZEdsdmJuTWlMQ0puWlhSRGFHbHNaSEpsYmlJc0luUnZkV05vUVdOMGFXOXVJaXdpZFc1a1pXWnBibVZrSWl3aWMyVjBJaXdpWVdSa1FXTjBhVzl1SWl3aWJXOTFjMlZGZG1WdWRGUnZWRzkxWTJobGN5SXNJbkJoWjJWWUlpd2ljR0ZuWlZraUxDSjBiM1ZqYUVWMlpXNTBWRzlVYjNWamFHVnpJaXdpWlhoMGNtRmpkRU52YjNKa2N5SXNJbU5zYVdWdWRGZ2lMQ0pqYkdsbGJuUlpJaXdpWjJWMFRtRjBhWFpsUlhabGJuUWlMQ0p2Y21sbmFXNWhiRVYyWlc1MElpd2libUYwYVhabFJYWmxiblFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenM3T3pzN1FVRkZRU3hUUVVGVFFTeGhRVUZVTEVOQlFYVkNReXhqUVVGMlFpeFJRVUZuUmp0QlFVRkJMRTFCUVhaRFF5eGpRVUYxUXl4UlFVRjJRMEVzWTBGQmRVTTdRVUZCUVN4TlFVRjJRa01zVTBGQmRVSXNVVUZCZGtKQkxGTkJRWFZDTzBGQlFVRXNUVUZCVkVNc1MwRkJVenM3UVVGRE9VVXNUVUZCVFVNc1ZVRkJWU3gzUWtGQlUwTXNiVUpCUVcxQ1RDeGpRVUZ1UWl4RFFVRlVPMEZCUTJSTkxHOUNRVUZuUWp0QlFVUkdMRXRCUlZoSUxFdEJSbGNzUlVGQmFFSTdPMEZCUzBFc1YwRkJVMGtzWVVGQlZDeERRVUYxUWtNc1EwRkJka0lzUlVGQk1FSTdRVUZEZUVJc1VVRkJTVXdzVFVGQlRVY3NZMEZCVml4RlFVRXdRa1VzUlVGQlJVWXNZMEZCUmpzN1FVRkZNVUlzVVVGQlRVY3NaMEpCUVdkQ1VpeGxRVUZsVHl4RFFVRm1MRU5CUVhSQ08wRkJRMEZGTERSQ1FVRjNRazRzVDBGQmVFSXNSVUZCYVVOTExHRkJRV3BETzBGQlEwUTdPMEZCUlVSTUxGVkJRVkZQTEZGQlFWSXNRMEZCYVVJN1FVRkRaa01zWTBGQlZUdEJRVUZCTEdGQlFVMURMRk5CUVZORExHVkJRVlFzUTBGQmVVSkRMR2RDUVVGNlFpeERRVUV3UTJJc1UwRkJNVU1zUlVGQmNVUkxMR0ZCUVhKRUxFTkJRVTQ3UVVGQlFTeExRVVJMTzBGQlJXWlRMR0ZCUVZNN1FVRkJRU3hoUVVGTlNDeFRRVUZUUXl4bFFVRlVMRU5CUVhsQ1J5eHRRa0ZCZWtJc1EwRkJOa05tTEZOQlFUZERMRVZCUVhkRVN5eGhRVUY0UkN4RFFVRk9PMEZCUVVFN1FVRkdUU3hIUVVGcVFqczdRVUZMUVN4VFFVRlBTQ3hQUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVTBNc2EwSkJRVlFzUTBGQk5FSmhMRTFCUVRWQ0xFVkJRVzlETzBGQlEyeERMRTFCUVVsRExGVkJRVlVzUlVGQlpEdEJRVU5CTEU5QlFVc3NTVUZCU1VNc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpSaXhQUVVGUFJ5eE5RVUV6UWl4RlFVRnRRMFFzUjBGQmJrTXNSVUZCZDBNN1FVRkJRU3h2UWtGRGNrSkdMRTlCUVU5RkxFTkJRVkFzUTBGRWNVSTdRVUZCUVN4UlFVTTVRa1VzUTBGRU9FSXNZVUZET1VKQkxFTkJSRGhDTzBGQlFVRXNVVUZETTBKRExFTkJSREpDTEdGQlF6TkNRU3hEUVVReVFqczdRVUZGZEVOS0xGbEJRVkZETEVOQlFWSXNTVUZCWVN4NVFrRkJWVHRCUVVOeVFrVXNVMEZCUnl4eFFrRkJUVUVzUTBGQlRpeERRVVJyUWp0QlFVVnlRa01zVTBGQlJ5eHhRa0ZCVFVFc1EwRkJUanRCUVVaclFpeExRVUZXTEVOQlFXSTdRVUZKUkR0QlFVTkVMRk5CUVU5S0xFOUJRVkE3UVVGRFJEczdRVUZGUkN4VFFVRlRWQ3gxUWtGQlZDeERRVUZwUTA0c1QwRkJha01zUlVGQk1FTnZRaXhWUVVFeFF5eEZRVUZ6UkR0QlFVTndSQ3hQUVVGTExFbEJRVWxLTEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNVa3NWMEZCVjBnc1RVRkJMMElzUlVGQmRVTkVMRWRCUVhaRExFVkJRVFJETzBGQlFVRXNkMEpCUTNwQ1NTeFhRVUZYU2l4RFFVRllMRU5CUkhsQ08wRkJRVUVzVVVGRGJFTkZMRU5CUkd0RExHbENRVU5zUTBFc1EwRkVhME03UVVGQlFTeFJRVU12UWtNc1EwRkVLMElzYVVKQlF5OUNRU3hEUVVRclFqczdRVUZGTVVNc1VVRkJUVVVzWlVGQlpYSkNMRkZCUVZGelFpeFhRVUZTTEVWQlFYSkNPMEZCUTBFc1VVRkJUVU1zWTBGQlkwWXNZVUZCWVV3c1EwRkJZaXhEUVVGd1FqdEJRVU5CTEZGQlFVbFBMR2RDUVVGblFrTXNVMEZCY0VJc1JVRkJLMEk3UVVGRE4wSkVMR3RDUVVGWlRDeERRVUZhTEVOQlFXTlBMRWRCUVdRc1EwRkJhMEpRTEVOQlFXeENPMEZCUTBGTExHdENRVUZaU2l4RFFVRmFMRU5CUVdOTkxFZEJRV1FzUTBGQmEwSk9MRU5CUVd4Q08wRkJRMFFzUzBGSVJDeE5RVWRQTzBGQlEweHVRaXhqUVVGUk1FSXNVMEZCVWl4RFFVRnJRaXg1UWtGQlZUdEJRVU14UWxJc1YwRkJSeXh4UWtGQlRVRXNRMEZCVGl4RFFVUjFRanRCUVVVeFFrTXNWMEZCUnl4eFFrRkJUVUVzUTBGQlRqdEJRVVoxUWl4UFFVRldMRU5CUVd4Q08wRkJTVVE3UVVGRFJqdEJRVU5HT3p0QlFVVkVMRWxCUVUxUkxITkNRVUZ6UWl4VFFVRjBRa0VzYlVKQlFYTkNPMEZCUVVFc1RVRkJSME1zUzBGQlNDeFRRVUZIUVN4TFFVRklPMEZCUVVFc1RVRkJWVU1zUzBGQlZpeFRRVUZWUVN4TFFVRldPMEZCUVVFc1UwRkJjMElzUTBGQlF5eEZRVUZGV0N4SFFVRkhWU3hMUVVGTUxFVkJRVmxVTEVkQlFVZFZMRXRCUVdZc1JVRkJSQ3hEUVVGMFFqdEJRVUZCTEVOQlFUVkNPMEZCUTBFc1NVRkJUVU1zYzBKQlFYTkNMRk5CUVhSQ1FTeHRRa0ZCYzBJN1FVRkJRU3hOUVVGSE9VSXNUMEZCU0N4VFFVRkhRU3hQUVVGSU8wRkJRVUVzVTBGQmFVSXJRaXhqUVVGakwwSXNUMEZCWkN4RFFVRnFRanRCUVVGQkxFTkJRVFZDT3p0QlFVVkJMRk5CUVZNclFpeGhRVUZVTEVOQlFYVkNMMElzVDBGQmRrSXNSVUZCWjBNN1FVRkRPVUlzVFVGQlNXTXNVMEZCVXl4RlFVRmlPMEZCUTBFc1QwRkJTeXhKUVVGSlJTeEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWxvUWl4UlFVRlJhVUlzVFVGQk5VSXNSVUZCYjBORUxFZEJRWEJETEVWQlFYbERPMEZCUVVFc2NVSkJRMVpvUWl4UlFVRlJaMElzUTBGQlVpeERRVVJWTzBGQlFVRXNVVUZETDBKblFpeFBRVVFyUWl4alFVTXZRa0VzVDBGRUswSTdRVUZCUVN4UlFVTjBRa01zVDBGRWMwSXNZMEZEZEVKQkxFOUJSSE5DT3p0QlFVVjJRMjVDTEZkQlFVOUZMRU5CUVZBc1NVRkJXVHRCUVVOV1JTeFRRVUZIWXl4UFFVUlBPMEZCUlZaaUxGTkJRVWRqTzBGQlJrOHNTMEZCV2p0QlFVbEVPMEZCUTBRc1UwRkJUMjVDTEUxQlFWQTdRVUZEUkRzN1FVRkZSQ3hKUVVGTmIwSXNhVUpCUVdsQ0xGTkJRV3BDUVN4alFVRnBRaXhEUVVGRE9VSXNRMEZCUkR0QlFVRkJMRk5CUVU5QkxFVkJRVVVyUWl4aFFVRkdMRWxCUVcxQ0wwSXNSVUZCUldkRExGZEJRWEpDTEVsQlFXOURhRU1zUTBGQk0wTTdRVUZCUVN4RFFVRjJRanM3YTBKQlJXVXNWVUZCUTBFc1EwRkJSQ3hGUVVGSlRDeExRVUZLTEVWQlFXTTdRVUZETTBJc1RVRkJUWEZETEdOQlFXTkdMR1ZCUVdVNVFpeERRVUZtTEVOQlFYQkNPMEZCUTBFc1UwRkJVV2RETEZsQlFWbHdReXhQUVVGaUxFZEJRMHhNTEdOQlFXTnRReXh2UWtGQmIwSXhRaXhEUVVGd1FpeERRVUZrTzBGQlEwVk9MR1ZCUVZjc1YwRkVZanRCUVVWRlJDeHZRa0ZCWjBKcFF6dEJRVVpzUWl4TFFVZExMMElzUzBGSVRDeEZRVVJMTEVkQlRVeEtMR05CUVdOblF5eHZRa0ZCYjBKMlFpeERRVUZ3UWl4RFFVRmtPMEZCUTBWT0xHVkJRVmNzVjBGRVlqdEJRVVZGUkN4dlFrRkJaMEk0UWp0QlFVWnNRaXhMUVVkTE5VSXNTMEZJVEN4RlFVNUdPMEZCVjBRc1F5SXNJbVpwYkdVaU9pSjBiM1ZqYUdWekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhaaGJIVmxJR1p5YjIwZ0p5NHZkbUZzZFdVbk8xeHVhVzF3YjNKMElHTnZiWEJ2YzJsMFpTQm1jbTl0SUNjdUwyTnZiWEJ2YzJsMFpTYzdYRzVwYlhCdmNuUWdjR0Z5WVd4c1pXd2dabkp2YlNBbkxpOXdZWEpoYkd4bGJDYzdYRzVjYm1aMWJtTjBhVzl1SUdOeVpXRjBaVlJ2ZFdOb1pYTW9hVzVwZEdsaGJGUnZkV05vWlhNc0lIc2daWFpsYm5SVWIxUnZkV05vWlhNc0lHMXZkbVZGZG1WdWRDd2dMaTR1Y0hKdmNITWdmU2tnZTF4dUlDQmpiMjV6ZENCMGIzVmphR1Z6SUQwZ2NHRnlZV3hzWld3b2JXRndRMjl2Y21SelZHOUJZM1JwYjI1ektHbHVhWFJwWVd4VWIzVmphR1Z6S1N3Z2UxeHVJQ0FnSUhCeVpYWmxiblJFWldaaGRXeDBPaUIwY25WbExGeHVJQ0FnSUM0dUxuQnliM0J6WEc0Z0lIMHBPMXh1WEc0Z0lHWjFibU4wYVc5dUlIVndaR0YwWlZSdmRXTm9aWE1vWlNrZ2UxeHVJQ0FnSUdsbUlDaHdjbTl3Y3k1d2NtVjJaVzUwUkdWbVlYVnNkQ2tnWlM1d2NtVjJaVzUwUkdWbVlYVnNkQ2dwTzF4dVhHNGdJQ0FnWTI5dWMzUWdiR0YwWlhOMFZHOTFZMmhsY3lBOUlHVjJaVzUwVkc5VWIzVmphR1Z6S0dVcE8xeHVJQ0FnSUhWd1pHRjBaVUZqZEdsdmJsZHBkR2hVYjNWamFHVnpLSFJ2ZFdOb1pYTXNJR3hoZEdWemRGUnZkV05vWlhNcE8xeHVJQ0I5WEc1Y2JpQWdkRzkxWTJobGN5NXpaWFJRY205d2N5aDdYRzRnSUNBZ1gyOXVVM1JoY25RNklDZ3BJRDArSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLRzF2ZG1WRmRtVnVkQ3dnZFhCa1lYUmxWRzkxWTJobGN5a3NYRzRnSUNBZ1gyOXVVM1J2Y0RvZ0tDa2dQVDRnWkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbkpsYlc5MlpVVjJaVzUwVEdsemRHVnVaWElvYlc5MlpVVjJaVzUwTENCMWNHUmhkR1ZVYjNWamFHVnpLVnh1SUNCOUtUdGNibHh1SUNCeVpYUjFjbTRnZEc5MVkyaGxjenRjYm4xY2JseHVablZ1WTNScGIyNGdiV0Z3UTI5dmNtUnpWRzlCWTNScGIyNXpLR052YjNKa2N5a2dlMXh1SUNCc1pYUWdZV04wYVc5dWN5QTlJRnRkTzF4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJR052YjNKa2N5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJR052Ym5OMElIc2dlQ3dnZVNCOUlEMGdZMjl2Y21SelcybGRPMXh1SUNBZ0lHRmpkR2x2Ym5OYmFWMGdQU0JqYjIxd2IzTnBkR1VvZTF4dUlDQWdJQ0FnZURvZ2RtRnNkV1VvZUNrc1hHNGdJQ0FnSUNCNU9pQjJZV3gxWlNoNUtWeHVJQ0FnSUgwcE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCaFkzUnBiMjV6TzF4dWZWeHVYRzVtZFc1amRHbHZiaUIxY0dSaGRHVkJZM1JwYjI1WGFYUm9WRzkxWTJobGN5aDBiM1ZqYUdWekxDQnVaWGRVYjNWamFHVnpLU0I3WEc0Z0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dibVYzVkc5MVkyaGxjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnZUN3Z2VTQjlJRDBnYm1WM1ZHOTFZMmhsYzF0cFhUdGNiaUFnSUNCamIyNXpkQ0IwYjNWamFFRmpkR2x2Ym5NZ1BTQjBiM1ZqYUdWekxtZGxkRU5vYVd4a2NtVnVLQ2s3WEc0Z0lDQWdZMjl1YzNRZ2RHOTFZMmhCWTNScGIyNGdQU0IwYjNWamFFRmpkR2x2Ym5OYmFWMDdYRzRnSUNBZ2FXWWdLSFJ2ZFdOb1FXTjBhVzl1SUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJSFJ2ZFdOb1FXTjBhVzl1TG5ndWMyVjBLSGdwTzF4dUlDQWdJQ0FnZEc5MVkyaEJZM1JwYjI0dWVTNXpaWFFvZVNrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSFJ2ZFdOb1pYTXVZV1JrUVdOMGFXOXVLR052YlhCdmMybDBaU2g3WEc0Z0lDQWdJQ0FnSUhnNklIWmhiSFZsS0hncExGeHVJQ0FnSUNBZ0lDQjVPaUIyWVd4MVpTaDVLVnh1SUNBZ0lDQWdmU2twTzF4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc1amIyNXpkQ0J0YjNWelpVVjJaVzUwVkc5VWIzVmphR1Z6SUQwZ0tIc2djR0ZuWlZnc0lIQmhaMlZaSUgwcElEMCtJRnQ3SUhnNklIQmhaMlZZTENCNU9pQndZV2RsV1NCOVhUdGNibU52Ym5OMElIUnZkV05vUlhabGJuUlViMVJ2ZFdOb1pYTWdQU0FvZXlCMGIzVmphR1Z6SUgwcElEMCtJR1Y0ZEhKaFkzUkRiMjl5WkhNb2RHOTFZMmhsY3lrN1hHNWNibVoxYm1OMGFXOXVJR1Y0ZEhKaFkzUkRiMjl5WkhNb2RHOTFZMmhsY3lrZ2UxeHVJQ0JzWlhRZ1kyOXZjbVJ6SUQwZ1cxMDdYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2RHOTFZMmhsY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1kyeHBaVzUwV0N3Z1kyeHBaVzUwV1NCOUlEMGdkRzkxWTJobGMxdHBYVHRjYmlBZ0lDQmpiMjl5WkhOYmFWMGdQU0I3WEc0Z0lDQWdJQ0I0T2lCamJHbGxiblJZTEZ4dUlDQWdJQ0FnZVRvZ1kyeHBaVzUwV1Z4dUlDQWdJSDA3WEc0Z0lIMWNiaUFnY21WMGRYSnVJR052YjNKa2N6dGNibjFjYmx4dVkyOXVjM1FnWjJWMFRtRjBhWFpsUlhabGJuUWdQU0FvWlNrZ1BUNGdaUzV2Y21sbmFXNWhiRVYyWlc1MElIeDhJR1V1Ym1GMGFYWmxSWFpsYm5RZ2ZId2daVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dVc0lIQnliM0J6S1NBOVBpQjdYRzRnSUdOdmJuTjBJRzVoZEdsMlpVVjJaVzUwSUQwZ1oyVjBUbUYwYVhabFJYWmxiblFvWlNrN1hHNGdJSEpsZEhWeWJpQW9ibUYwYVhabFJYWmxiblF1ZEc5MVkyaGxjeWtnUDF4dUlDQWdJR055WldGMFpWUnZkV05vWlhNb2RHOTFZMmhGZG1WdWRGUnZWRzkxWTJobGN5aGxLU3dnZTF4dUlDQWdJQ0FnYlc5MlpVVjJaVzUwT2lBbmRHOTFZMmh0YjNabEp5eGNiaUFnSUNBZ0lHVjJaVzUwVkc5VWIzVmphR1Z6T2lCMGIzVmphRVYyWlc1MFZHOVViM1ZqYUdWekxGeHVJQ0FnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdJQ0I5S1NBNlhHNGdJQ0FnWTNKbFlYUmxWRzkxWTJobGN5aHRiM1Z6WlVWMlpXNTBWRzlVYjNWamFHVnpLR1VwTENCN1hHNGdJQ0FnSUNCdGIzWmxSWFpsYm5RNklDZHRiM1Z6WlcxdmRtVW5MRnh1SUNBZ0lDQWdaWFpsYm5SVWIxUnZkV05vWlhNNklHMXZkWE5sUlhabGJuUlViMVJ2ZFdOb1pYTXNYRzRnSUNBZ0lDQXVMaTV3Y205d2MxeHVJQ0FnSUgwcE8xeHVmVHRjYmlKZGZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL3RvdWNoZXMuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBUcmFja09mZnNldCA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhUcmFja09mZnNldCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVHJhY2tPZmZzZXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrT2Zmc2V0KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVHJhY2tPZmZzZXQucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBhY3Rpb24gPSB0aGlzLnByb3BzLmFjdGlvbjtcblxuICAgIHRoaXMuYXBwbHlPZmZzZXQgPSAoMCwgX3RyYW5zZm9ybWVycy5hcHBseU9mZnNldCkoYWN0aW9uLmdldCgpLCB0aGlzLmN1cnJlbnQpO1xuICB9O1xuXG4gIFRyYWNrT2Zmc2V0LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIGFjdGlvbiA9IHRoaXMucHJvcHMuYWN0aW9uO1xuXG4gICAgcmV0dXJuIHRoaXMuYXBwbHlPZmZzZXQoYWN0aW9uLmdldCgpKTtcbiAgfTtcblxuICByZXR1cm4gVHJhY2tPZmZzZXQ7XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9uLCBwcm9wcykge1xuICByZXR1cm4gbmV3IFRyYWNrT2Zmc2V0KF9leHRlbmRzKHsgYWN0aW9uOiBhY3Rpb24gfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNSeVlXTnJMVzltWm5ObGRDNXFjeUpkTENKdVlXMWxjeUk2V3lKVWNtRmphMDltWm5ObGRDSXNJbTl1VTNSaGNuUWlMQ0poWTNScGIyNGlMQ0p3Y205d2N5SXNJbUZ3Y0d4NVQyWm1jMlYwSWl3aVoyVjBJaXdpWTNWeWNtVnVkQ0lzSW5Wd1pHRjBaU0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenM3T3pzN096dEpRVVZOUVN4WE96czdPenM3T3pzN2QwSkJRMHBETEU4c2MwSkJRVlU3UVVGQlFTeFJRVU5CUXl4TlFVUkJMRWRCUTFjc1MwRkJTME1zUzBGRWFFSXNRMEZEUVVRc1RVRkVRVHM3UVVGRlVpeFRRVUZMUlN4WFFVRk1MRWRCUVcxQ0xDdENRVUZaUml4UFFVRlBSeXhIUVVGUUxFVkJRVm9zUlVGQk1FSXNTMEZCUzBNc1QwRkJMMElzUTBGQmJrSTdRVUZEUkN4SE96dDNRa0ZGUkVNc1RTeHhRa0ZCVXp0QlFVRkJMRkZCUTBOTUxFMUJSRVFzUjBGRFdTeExRVUZMUXl4TFFVUnFRaXhEUVVORFJDeE5RVVJFT3p0QlFVVlFMRmRCUVU4c1MwRkJTMFVzVjBGQlRDeERRVUZwUWtZc1QwRkJUMGNzUjBGQlVDeEZRVUZxUWl4RFFVRlFPMEZCUTBRc1J6czdPenM3YTBKQlIxa3NWVUZCUTBnc1RVRkJSQ3hGUVVGVFF5eExRVUZVTzBGQlFVRXNVMEZCYlVJc1NVRkJTVWdzVjBGQlNpeFpRVUZyUWtVc1kwRkJiRUlzU1VGQk5rSkRMRXRCUVRkQ0xFVkJRVzVDTzBGQlFVRXNReUlzSW1acGJHVWlPaUowY21GamF5MXZabVp6WlhRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYm1sdGNHOXlkQ0I3SUdGd2NHeDVUMlptYzJWMElIMGdabkp2YlNBbkxpNHZhVzVqTDNSeVlXNXpabTl5YldWeWN5YzdYRzVjYm1Oc1lYTnpJRlJ5WVdOclQyWm1jMlYwSUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdGamRHbHZiaUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCMGFHbHpMbUZ3Y0d4NVQyWm1jMlYwSUQwZ1lYQndiSGxQWm1aelpYUW9ZV04wYVc5dUxtZGxkQ2dwTENCMGFHbHpMbU4xY25KbGJuUXBPMXh1SUNCOVhHNWNiaUFnZFhCa1lYUmxLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dZV04wYVc5dUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1Gd2NHeDVUMlptYzJWMEtHRmpkR2x2Ymk1blpYUW9LU2s3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dGamRHbHZiaXdnY0hKdmNITXBJRDArSUc1bGR5QlVjbUZqYTA5bVpuTmxkQ2g3SUdGamRHbHZiaXdnTGk0dWNISnZjSE1nZlNrN1hHNGlYWDA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWN0aW9ucy90cmFjay1vZmZzZXQuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NoYWluID0gcmVxdWlyZSgnLi9jaGFpbicpO1xuXG52YXIgX2NoYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoYWluKTtcblxudmFyIF9wYXJhbGxlbCA9IHJlcXVpcmUoJy4vcGFyYWxsZWwnKTtcblxudmFyIF9wYXJhbGxlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJhbGxlbCk7XG5cbnZhciBfZGVsYXkgPSByZXF1aXJlKCcuL2RlbGF5Jyk7XG5cbnZhciBfZGVsYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVsYXkpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBwYXJhbGxlbCBBY3Rpb24gY29tcG9zZWQgb2YgY2hhaW5lZFxuICogZGVsYXkgYW5kIGFjdGlvbnMuIEludGVydmFsIGNhbiBiZSBlaXRoZXIgYSBudW1iZXJcbiAqIHRvIG11bHRpcGx5IGJ5IGBpYCBvciBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBwcm92aWRlZCBgaWBcbiAqXG4gKiBTdHJhaWdodCBjcmliYmVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9ibG9iLzI0YzcyZjUxM2U0OGYwYmRjNDA4MjBiNDMyNjIzMjhmZTJjMzAxZDQvTGlicmFyaWVzL0FuaW1hdGVkL3NyYy9BbmltYXRlZEltcGxlbWVudGF0aW9uLmpzI0wyMDMxXG4gKiBeIFRoaXMgZnVuY3Rpb24gc29sZCBhIHByZXZpb3VzbHktY29uZmxpY3RlZCBtZSBvbiB0aGUgbWVyaXQgb2YgbW92aW5nIGZyb21cbiAqIGpRdWVyeS1zdHlsZSBtdWx0aS1wcm9wZXJ0eSBhbmltYXRpb25zIHRvIHNpbmdsZS1wcm9wZXJ0eS5cbiAqIEBwYXJhbSAge2FycmF5fSBhY3Rpb25zXG4gKiBAcGFyYW0gIHtmdW5jdGlvbiB8IG51bWJlcn0gaW50ZXJ2YWxcbiAqIEByZXR1cm4ge0FjdGlvbn1cbiAqL1xuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMsIGludGVydmFsLCBvbkNvbXBsZXRlKSB7XG4gIHZhciBpbnRlcnZhbElzRnVuY3Rpb24gPSAoMCwgX3V0aWxzLmlzRnVuYykoaW50ZXJ2YWwpO1xuXG4gIHJldHVybiAoMCwgX3BhcmFsbGVsMi5kZWZhdWx0KShhY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uLCBpKSB7XG4gICAgdmFyIHRpbWVUb0RlbGF5ID0gaW50ZXJ2YWxJc0Z1bmN0aW9uID8gaW50ZXJ2YWwoaSkgOiBpICogaW50ZXJ2YWw7XG4gICAgcmV0dXJuICgwLCBfY2hhaW4yLmRlZmF1bHQpKFsoMCwgX2RlbGF5Mi5kZWZhdWx0KSh0aW1lVG9EZWxheSksIGFjdGlvbl0pO1xuICB9KSwgeyBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM04wWVdkblpYSXVhbk1pWFN3aWJtRnRaWE1pT2xzaVlXTjBhVzl1Y3lJc0ltbHVkR1Z5ZG1Gc0lpd2liMjVEYjIxd2JHVjBaU0lzSW1sdWRHVnlkbUZzU1hOR2RXNWpkR2x2YmlJc0ltMWhjQ0lzSW1GamRHbHZiaUlzSW1raUxDSjBhVzFsVkc5RVpXeGhlU0pkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJSVUU3T3pzN096czdPenM3T3p0clFrRlpaU3hWUVVGRFFTeFBRVUZFTEVWQlFWVkRMRkZCUVZZc1JVRkJiMEpETEZWQlFYQkNMRVZCUVcxRE8wRkJRMmhFTEUxQlFVMURMSEZDUVVGeFFpeHRRa0ZCVDBZc1VVRkJVQ3hEUVVFelFqczdRVUZGUVN4VFFVRlBMSGRDUVVGVFJDeFJRVUZSU1N4SFFVRlNMRU5CUVZrc1ZVRkJRME1zVFVGQlJDeEZRVUZUUXl4RFFVRlVMRVZCUVdVN1FVRkRla01zVVVGQlRVTXNZMEZCWlVvc2EwSkJRVVFzUjBGQmRVSkdMRk5CUVZOTExFTkJRVlFzUTBGQmRrSXNSMEZCY1VOQkxFbEJRVWxNTEZGQlFUZEVPMEZCUTBFc1YwRkJUeXh4UWtGQlRTeERRVU5ZTEhGQ1FVRk5UU3hYUVVGT0xFTkJSRmNzUlVGRldFWXNUVUZHVnl4RFFVRk9MRU5CUVZBN1FVRkpSQ3hIUVU1bExFTkJRVlFzUlVGTlNDeEZRVUZGU0N4elFrRkJSaXhGUVU1SExFTkJRVkE3UVVGUFJDeERJaXdpWm1sc1pTSTZJbk4wWVdkblpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1kyaGhhVzRnWm5KdmJTQW5MaTlqYUdGcGJpYzdYRzVwYlhCdmNuUWdjR0Z5WVd4c1pXd2dabkp2YlNBbkxpOXdZWEpoYkd4bGJDYzdYRzVwYlhCdmNuUWdaR1ZzWVhrZ1puSnZiU0FuTGk5a1pXeGhlU2M3WEc1cGJYQnZjblFnZXlCcGMwWjFibU1nZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpYTWdZU0J1WlhjZ2NHRnlZV3hzWld3Z1FXTjBhVzl1SUdOdmJYQnZjMlZrSUc5bUlHTm9ZV2x1WldSY2JpQXFJR1JsYkdGNUlHRnVaQ0JoWTNScGIyNXpMaUJKYm5SbGNuWmhiQ0JqWVc0Z1ltVWdaV2wwYUdWeUlHRWdiblZ0WW1WeVhHNGdLaUIwYnlCdGRXeDBhWEJzZVNCaWVTQmdhV0FnYjNJZ1lTQm1kVzVqZEdsdmJpQjBhR0YwSUhkcGJHd2dZbVVnY0hKdmRtbGtaV1FnWUdsZ1hHNGdLbHh1SUNvZ1UzUnlZV2xuYUhRZ1kzSnBZbUpsWkNCbWNtOXRJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzltWVdObFltOXZheTl5WldGamRDMXVZWFJwZG1VdllteHZZaTh5TkdNM01tWTFNVE5sTkRobU1HSmtZelF3T0RJd1lqUXpNall5TXpJNFptVXlZek13TVdRMEwweHBZbkpoY21sbGN5OUJibWx0WVhSbFpDOXpjbU12UVc1cGJXRjBaV1JKYlhCc1pXMWxiblJoZEdsdmJpNXFjeU5NTWpBek1WeHVJQ29nWGlCVWFHbHpJR1oxYm1OMGFXOXVJSE52YkdRZ1lTQndjbVYyYVc5MWMyeDVMV052Ym1ac2FXTjBaV1FnYldVZ2IyNGdkR2hsSUcxbGNtbDBJRzltSUcxdmRtbHVaeUJtY205dFhHNGdLaUJxVVhWbGNua3RjM1I1YkdVZ2JYVnNkR2t0Y0hKdmNHVnlkSGtnWVc1cGJXRjBhVzl1Y3lCMGJ5QnphVzVuYkdVdGNISnZjR1Z5ZEhrdVhHNGdLaUJBY0dGeVlXMGdJSHRoY25KaGVYMGdZV04wYVc5dWMxeHVJQ29nUUhCaGNtRnRJQ0I3Wm5WdVkzUnBiMjRnZkNCdWRXMWlaWEo5SUdsdWRHVnlkbUZzWEc0Z0tpQkFjbVYwZFhKdUlIdEJZM1JwYjI1OVhHNGdLaTljYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hoWTNScGIyNXpMQ0JwYm5SbGNuWmhiQ3dnYjI1RGIyMXdiR1YwWlNrZ1BUNGdlMXh1SUNCamIyNXpkQ0JwYm5SbGNuWmhiRWx6Um5WdVkzUnBiMjRnUFNCcGMwWjFibU1vYVc1MFpYSjJZV3dwTzF4dVhHNGdJSEpsZEhWeWJpQndZWEpoYkd4bGJDaGhZM1JwYjI1ekxtMWhjQ2dvWVdOMGFXOXVMQ0JwS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnZEdsdFpWUnZSR1ZzWVhrZ1BTQW9hVzUwWlhKMllXeEpjMFoxYm1OMGFXOXVLU0EvSUdsdWRHVnlkbUZzS0drcElEb2dhU0FxSUdsdWRHVnlkbUZzTzF4dUlDQWdJSEpsZEhWeWJpQmphR0ZwYmloYlhHNGdJQ0FnSUNCa1pXeGhlU2gwYVcxbFZHOUVaV3hoZVNrc1hHNGdJQ0FnSUNCaFkzUnBiMjVjYmlBZ0lDQmRLVHRjYmlBZ2ZTa3NJSHNnYjI1RGIyMXdiR1YwWlNCOUtUdGNibjA3WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL3N0YWdnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnZnJhbWVzeW5jJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGNsb3NlZC1mb3JtIGRhbXBlZCBoYXJtb25pYyBvc2NpbGxhdGluZyBzcHJpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9yLCBzcHJpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBhIGRpcmVjdCBwb3J0IG9mIEFkYW0gTWlza2lld2ljeidzIChAc2tldnkpIFJlYWN0IEFuaW1hdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBSICMxNTMyMiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTUzMjIvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcmluZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzczogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW1waW5nOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGlmZm5lc3M6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkYW0gTWlza2lld2ljejpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHNrZXZ5ICh0d2l0dGVyLmNvbS9za2V2eSwgZ2l0aHViLmNvbS9za2V2eSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5cbnZhciBTcHJpbmcgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoU3ByaW5nLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBTcHJpbmcoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNwcmluZyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFNwcmluZy5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHZlbG9jaXR5ID0gX3Byb3BzLnZlbG9jaXR5LFxuICAgICAgICB0byA9IF9wcm9wcy50byxcbiAgICAgICAgZnJvbSA9IF9wcm9wcy5mcm9tO1xuXG4gICAgdGhpcy50ID0gMDtcbiAgICB0aGlzLmluaXRpYWxWZWxvY2l0eSA9IHZlbG9jaXR5ID8gdmVsb2NpdHkgLyAxMDAwIDogMC4wO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMuZGVsdGEgPSB0byAtIGZyb207XG4gIH07XG5cbiAgU3ByaW5nLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBzdGlmZm5lc3MgPSBfcHJvcHMyLnN0aWZmbmVzcyxcbiAgICAgICAgZGFtcGluZyA9IF9wcm9wczIuZGFtcGluZyxcbiAgICAgICAgbWFzcyA9IF9wcm9wczIubWFzcyxcbiAgICAgICAgZnJvbSA9IF9wcm9wczIuZnJvbSxcbiAgICAgICAgdG8gPSBfcHJvcHMyLnRvLFxuICAgICAgICByZXN0U3BlZWQgPSBfcHJvcHMyLnJlc3RTcGVlZCxcbiAgICAgICAgcmVzdERpc3BsYWNlbWVudCA9IF9wcm9wczIucmVzdERpc3BsYWNlbWVudDtcbiAgICB2YXIgZGVsdGEgPSB0aGlzLmRlbHRhLFxuICAgICAgICBpbml0aWFsVmVsb2NpdHkgPSB0aGlzLmluaXRpYWxWZWxvY2l0eTtcblxuXG4gICAgdmFyIHRpbWVEZWx0YSA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKSAvIDEwMDA7XG4gICAgdmFyIHQgPSB0aGlzLnQgPSB0aGlzLnQgKyB0aW1lRGVsdGE7XG5cbiAgICB2YXIgZGFtcGluZ1JhdGlvID0gZGFtcGluZyAvICgyICogTWF0aC5zcXJ0KHN0aWZmbmVzcyAqIG1hc3MpKTtcbiAgICB2YXIgYW5ndWxhckZyZXEgPSBNYXRoLnNxcnQoc3RpZmZuZXNzIC8gbWFzcyk7XG4gICAgdmFyIGV4cG9EZWNheSA9IGFuZ3VsYXJGcmVxICogTWF0aC5zcXJ0KDEuMCAtIGRhbXBpbmdSYXRpbyAqIGRhbXBpbmdSYXRpbyk7XG5cbiAgICB2YXIgeDAgPSAxO1xuICAgIHZhciBvc2NpbGxhdGlvbiA9IDAuMDtcblxuICAgIC8vIFVuZGVyZGFtcGVkXG4gICAgaWYgKGRhbXBpbmdSYXRpbyA8IDEpIHtcbiAgICAgIHZhciBlbnZlbG9wZSA9IE1hdGguZXhwKC1kYW1waW5nUmF0aW8gKiBhbmd1bGFyRnJlcSAqIHQpO1xuICAgICAgb3NjaWxsYXRpb24gPSBlbnZlbG9wZSAqICgoaW5pdGlhbFZlbG9jaXR5ICsgZGFtcGluZ1JhdGlvICogYW5ndWxhckZyZXEgKiB4MCkgLyBleHBvRGVjYXkgKiBNYXRoLnNpbihleHBvRGVjYXkgKiB0KSArIHgwICogTWF0aC5jb3MoZXhwb0RlY2F5ICogdCkpO1xuICAgICAgdGhpcy52ZWxvY2l0eSA9IGVudmVsb3BlICogKE1hdGguY29zKGV4cG9EZWNheSAqIHQpICogKGluaXRpYWxWZWxvY2l0eSArIGRhbXBpbmdSYXRpbyAqIGFuZ3VsYXJGcmVxICogeDApIC0gZXhwb0RlY2F5ICogeDAgKiBNYXRoLnNpbihleHBvRGVjYXkgKiB0KSkgLSBkYW1waW5nUmF0aW8gKiBhbmd1bGFyRnJlcSAqIGVudmVsb3BlICogKE1hdGguc2luKGV4cG9EZWNheSAqIHQpICogKGluaXRpYWxWZWxvY2l0eSArIGRhbXBpbmdSYXRpbyAqIGFuZ3VsYXJGcmVxICogeDApIC8gZXhwb0RlY2F5ICsgeDAgKiBNYXRoLmNvcyhleHBvRGVjYXkgKiB0KSk7XG5cbiAgICAgIC8vIENyaXRpY2FsbHkgZGFtcGVkXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZW52ZWxvcGUgPSBNYXRoLmV4cCgtYW5ndWxhckZyZXEgKiB0KTtcbiAgICAgIG9zY2lsbGF0aW9uID0gX2VudmVsb3BlICogKHgwICsgKGluaXRpYWxWZWxvY2l0eSArIGFuZ3VsYXJGcmVxICogeDApICogdCk7XG4gICAgICB0aGlzLnZlbG9jaXR5ID0gX2VudmVsb3BlICogKHQgKiBpbml0aWFsVmVsb2NpdHkgKiBhbmd1bGFyRnJlcSAtIHQgKiB4MCAqIChhbmd1bGFyRnJlcSAqIGFuZ3VsYXJGcmVxKSArIGluaXRpYWxWZWxvY2l0eSk7XG4gICAgfVxuXG4gICAgdmFyIGZyYWN0aW9uID0gMSAtIG9zY2lsbGF0aW9uO1xuICAgIHZhciBwb3NpdGlvbiA9IGZyb20gKyBmcmFjdGlvbiAqIGRlbHRhO1xuXG4gICAgLy8gQ2hlY2sgaWYgc2ltdWxhdGlvbiBpcyBjb21wbGV0ZVxuICAgIC8vIFdlIGRvIHRoaXMgaGVyZSBpbnN0ZWFkIG9mIGBpc0FjdGlvbkNvbXBsZXRlYCBhcyBpdCBhbGxvd3MgdXNcbiAgICAvLyB0byBjbGFtcCB0byBlbmQgZHVyaW5nIHVwZGF0ZSlcbiAgICB2YXIgaXNCZWxvd1ZlbG9jaXR5VGhyZXNob2xkID0gTWF0aC5hYnModGhpcy52ZWxvY2l0eSkgPD0gcmVzdFNwZWVkO1xuICAgIHZhciBpc0JlbG93RGlzcGxhY2VtZW50VGhyZXNob2xkID0gTWF0aC5hYnModG8gLSBwb3NpdGlvbikgPD0gcmVzdERpc3BsYWNlbWVudDtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBpc0JlbG93VmVsb2NpdHlUaHJlc2hvbGQgJiYgaXNCZWxvd0Rpc3BsYWNlbWVudFRocmVzaG9sZDtcblxuICAgIGlmICh0aGlzLmlzQ29tcGxldGUpIHtcbiAgICAgIHBvc2l0aW9uID0gdG87XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9O1xuXG4gIFNwcmluZy5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgfTtcblxuICByZXR1cm4gU3ByaW5nO1xufShfMi5kZWZhdWx0KTtcblxuU3ByaW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3RpZmZuZXNzOiAxMDAsXG4gIGRhbXBpbmc6IDEwLFxuICBtYXNzOiAxLjAsXG4gIHZlbG9jaXR5OiAwLjAsXG4gIGZyb206IDAuMCxcbiAgdG86IDAuMCxcbiAgcmVzdFNwZWVkOiAwLjAxLFxuICByZXN0RGlzcGxhY2VtZW50OiAwLjAxXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBTcHJpbmcocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM053Y21sdVp5NXFjeUpkTENKdVlXMWxjeUk2V3lKVGNISnBibWNpTENKdmJsTjBZWEowSWl3aWNISnZjSE1pTENKMlpXeHZZMmwwZVNJc0luUnZJaXdpWm5KdmJTSXNJblFpTENKcGJtbDBhV0ZzVm1Wc2IyTnBkSGtpTENKcGMwTnZiWEJzWlhSbElpd2laR1ZzZEdFaUxDSjFjR1JoZEdVaUxDSnpkR2xtWm01bGMzTWlMQ0prWVcxd2FXNW5JaXdpYldGemN5SXNJbkpsYzNSVGNHVmxaQ0lzSW5KbGMzUkVhWE53YkdGalpXMWxiblFpTENKMGFXMWxSR1ZzZEdFaUxDSmtZVzF3YVc1blVtRjBhVzhpTENKTllYUm9JaXdpYzNGeWRDSXNJbUZ1WjNWc1lYSkdjbVZ4SWl3aVpYaHdiMFJsWTJGNUlpd2llREFpTENKdmMyTnBiR3hoZEdsdmJpSXNJbVZ1ZG1Wc2IzQmxJaXdpWlhod0lpd2ljMmx1SWl3aVkyOXpJaXdpWm5KaFkzUnBiMjRpTENKd2IzTnBkR2x2YmlJc0ltbHpRbVZzYjNkV1pXeHZZMmwwZVZSb2NtVnphRzlzWkNJc0ltRmljeUlzSW1selFtVnNiM2RFYVhOd2JHRmpaVzFsYm5SVWFISmxjMmh2YkdRaUxDSnBjMEZqZEdsdmJrTnZiWEJzWlhSbElpd2laR1ZtWVhWc2RGQnliM0J6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQmJVSkJPenM3TzBGQlEwRTdPenM3T3pzN095dGxRWEJDUVRzN096czdPenM3T3pzN096czdPenM3T3pzN08wbEJjMEpOUVN4Tk96czdPenM3T3pzN2JVSkJXVXBETEU4c2MwSkJRVlU3UVVGQlFTeHBRa0ZEZFVJc1MwRkJTME1zUzBGRU5VSTdRVUZCUVN4UlFVTkJReXhSUVVSQkxGVkJRMEZCTEZGQlJFRTdRVUZCUVN4UlFVTlZReXhGUVVSV0xGVkJRMVZCTEVWQlJGWTdRVUZCUVN4UlFVTmpReXhKUVVSa0xGVkJRMk5CTEVsQlJHUTdPMEZCUlZJc1UwRkJTME1zUTBGQlRDeEhRVUZUTEVOQlFWUTdRVUZEUVN4VFFVRkxReXhsUVVGTUxFZEJRWFZDU2l4WFFVRlhRU3hYUVVGWExFbEJRWFJDTEVkQlFUWkNMRWRCUVhCRU8wRkJRMEVzVTBGQlMwc3NWVUZCVEN4SFFVRnJRaXhMUVVGc1FqdEJRVU5CTEZOQlFVdERMRXRCUVV3c1IwRkJZVXdzUzBGQlMwTXNTVUZCYkVJN1FVRkRSQ3hIT3p0dFFrRkZSRXNzVFN4eFFrRkJVenRCUVVGQkxHdENRVU54UlN4TFFVRkxVaXhMUVVReFJUdEJRVUZCTEZGQlEwTlRMRk5CUkVRc1YwRkRRMEVzVTBGRVJEdEJRVUZCTEZGQlExbERMRTlCUkZvc1YwRkRXVUVzVDBGRVdqdEJRVUZCTEZGQlEzRkNReXhKUVVSeVFpeFhRVU54UWtFc1NVRkVja0k3UVVGQlFTeFJRVU15UWxJc1NVRkVNMElzVjBGRE1rSkJMRWxCUkROQ08wRkJRVUVzVVVGRGFVTkVMRVZCUkdwRExGZEJRMmxEUVN4RlFVUnFRenRCUVVGQkxGRkJRM0ZEVlN4VFFVUnlReXhYUVVOeFEwRXNVMEZFY2tNN1FVRkJRU3hSUVVOblJFTXNaMEpCUkdoRUxGZEJRMmRFUVN4blFrRkVhRVE3UVVGQlFTeFJRVVZEVGl4TFFVWkVMRWRCUlRSQ0xFbEJSalZDTEVOQlJVTkJMRXRCUmtRN1FVRkJRU3hSUVVWUlJpeGxRVVpTTEVkQlJUUkNMRWxCUmpWQ0xFTkJSVkZCTEdWQlJsSTdPenRCUVVsUUxGRkJRVTFUTEZsQlFWa3NkVU5CUVhWQ0xFbEJRWHBETzBGQlEwRXNVVUZCVFZZc1NVRkJTU3hMUVVGTFFTeERRVUZNTEVkQlFWTXNTMEZCUzBFc1EwRkJUQ3hIUVVGVFZTeFRRVUUxUWpzN1FVRkZRU3hSUVVGTlF5eGxRVUZsVEN4WFFVRlhMRWxCUVVsTkxFdEJRVXRETEVsQlFVd3NRMEZCVlZJc1dVRkJXVVVzU1VGQmRFSXNRMEZCWml4RFFVRnlRanRCUVVOQkxGRkJRVTFQTEdOQlFXTkdMRXRCUVV0RExFbEJRVXdzUTBGQlZWSXNXVUZCV1VVc1NVRkJkRUlzUTBGQmNFSTdRVUZEUVN4UlFVRk5VU3haUVVGWlJDeGpRVUZqUml4TFFVRkxReXhKUVVGTUxFTkJRVlVzVFVGQlQwWXNaVUZCWlVFc1dVRkJhRU1zUTBGQmFFTTdPMEZCUlVFc1VVRkJUVXNzUzBGQlN5eERRVUZZTzBGQlEwRXNVVUZCU1VNc1kwRkJZeXhIUVVGc1FqczdRVUZGUVR0QlFVTkJMRkZCUVVsT0xHVkJRV1VzUTBGQmJrSXNSVUZCYzBJN1FVRkRjRUlzVlVGQlRVOHNWMEZCVjA0c1MwRkJTMDhzUjBGQlRDeERRVUZUTEVOQlFVTlNMRmxCUVVRc1IwRkJaMEpITEZkQlFXaENMRWRCUVRoQ1pDeERRVUYyUXl4RFFVRnFRanRCUVVOQmFVSXNiMEpCUVdORExGbEJRV0VzUTBGQlEycENMR3RDUVVGclFsVXNaVUZCWlVjc1YwRkJaaXhIUVVFMlFrVXNSVUZCYUVRc1NVRkJjMFJFTEZOQlFYWkVMRWRCUVc5RlNDeExRVUZMVVN4SFFVRk1MRU5CUVZOTUxGbEJRVmxtTEVOQlFYSkNMRU5CUVhCRkxFZEJRU3RHWjBJc1MwRkJTMG9zUzBGQlMxTXNSMEZCVEN4RFFVRlRUaXhaUVVGWlppeERRVUZ5UWl4RFFVRm9TQ3hEUVVGa08wRkJRMEVzVjBGQlMwZ3NVVUZCVEN4SFFVRnBRbkZDTEZsQlFXRk9MRXRCUVV0VExFZEJRVXdzUTBGQlUwNHNXVUZCV1dZc1EwRkJja0lzUzBGQk1rSkRMR3RDUVVGclFsVXNaVUZCWlVjc1YwRkJaaXhIUVVFMlFrVXNSVUZCTVVVc1EwRkJSQ3hIUVVGdFJrUXNXVUZCV1VNc1JVRkJXaXhIUVVGcFFrb3NTMEZCUzFFc1IwRkJUQ3hEUVVGVFRDeFpRVUZaWml4RFFVRnlRaXhEUVVGb1NDeEpRVU5pVnl4bFFVRmxSeXhYUVVGbUxFZEJRVFpDU1N4UlFVRTVRaXhKUVVFNFEwNHNTMEZCUzFFc1IwRkJUQ3hEUVVGVFRDeFpRVUZaWml4RFFVRnlRaXhMUVVFeVFrTXNhMEpCUVd0Q1ZTeGxRVUZsUnl4WFFVRm1MRWRCUVRaQ1JTeEZRVUV4UlN4RFFVRkdMRWRCUVhGR1JDeFRRVUYwUml4SFFVRnZSME1zUzBGQlMwb3NTMEZCUzFNc1IwRkJUQ3hEUVVGVFRpeFpRVUZaWml4RFFVRnlRaXhEUVVGd1NpeERRVVJJT3p0QlFVZEdPMEZCUTBNc1MwRlFSQ3hOUVU5UE8wRkJRMHdzVlVGQlRXdENMRmxCUVZkT0xFdEJRVXRQTEVkQlFVd3NRMEZCVXl4RFFVRkRUQ3hYUVVGRUxFZEJRV1ZrTEVOQlFYaENMRU5CUVdwQ08wRkJRMEZwUWl4dlFrRkJZME1zWVVGQldVWXNTMEZCU3l4RFFVRkRaaXhyUWtGQmJVSmhMR05CUVdORkxFVkJRV3hETEVsQlFYbERhRUlzUTBGQk1VUXNRMEZCWkR0QlFVTkJMRmRCUVV0SUxGRkJRVXdzUjBGQlowSnhRaXhoUVVGaGJFSXNTVUZCU1VNc1pVRkJTaXhIUVVGelFtRXNWMEZCZGtJc1IwRkJkVU5rTEVsQlFVbG5RaXhGUVVGS0xFbEJRVlZHTEdOQlFXTkJMRmRCUVhoQ0xFTkJRWFpETEVkQlFTdEZZaXhsUVVFelJpeERRVUZvUWp0QlFVTkVPenRCUVVWRUxGRkJRVTF4UWl4WFFVRlhMRWxCUVVsTUxGZEJRWEpDTzBGQlEwRXNVVUZCU1Uwc1YwRkJWM2hDTEU5QlFVOTFRaXhYUVVGWGJrSXNTMEZCYWtNN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVVUZCVFhGQ0xESkNRVUV5UWxvc1MwRkJTMkVzUjBGQlRDeERRVUZUTEV0QlFVczFRaXhSUVVGa0xFdEJRVEpDVnl4VFFVRTFSRHRCUVVOQkxGRkJRVTFyUWl3clFrRkJLMEprTEV0QlFVdGhMRWRCUVV3c1EwRkJVek5DTEV0QlFVdDVRaXhSUVVGa0xFdEJRVEpDWkN4blFrRkJhRVU3UVVGRFFTeFRRVUZMVUN4VlFVRk1MRWRCUVd0Q2MwSXNORUpCUVRSQ1JTdzBRa0ZCT1VNN08wRkJSVUVzVVVGQlNTeExRVUZMZUVJc1ZVRkJWQ3hGUVVGeFFqdEJRVU51UW5GQ0xHbENRVUZYZWtJc1JVRkJXRHRCUVVORU96dEJRVVZFTEZkQlFVOTVRaXhSUVVGUU8wRkJRMFFzUnpzN2JVSkJSVVJKTEdkQ0xDdENRVUZ0UWp0QlFVTnFRaXhYUVVGUExFdEJRVXQ2UWl4VlFVRmFPMEZCUTBRc1J6czdPenM3UVVGdVJVZFNMRTBzUTBGRFIydERMRmtzUjBGQlpUdEJRVU53UW5aQ0xHRkJRVmNzUjBGRVV6dEJRVVZ3UWtNc1YwRkJVeXhGUVVaWE8wRkJSM0JDUXl4UlFVRk5MRWRCU0dNN1FVRkpjRUpXTEZsQlFWVXNSMEZLVlR0QlFVdHdRa1VzVVVGQlRTeEhRVXhqTzBGQlRYQkNSQ3hOUVVGSkxFZEJUbWRDTzBGQlQzQkNWU3hoUVVGWExFbEJVRk03UVVGUmNFSkRMRzlDUVVGclFqdEJRVkpGTEVNN08ydENRWEZGVkN4VlFVRkRZaXhMUVVGRU8wRkJRVUVzVTBGQlZ5eEpRVUZKUml4TlFVRktMRU5CUVZkRkxFdEJRVmdzUTBGQldEdEJRVUZCTEVNaUxDSm1hV3hsSWpvaWMzQnlhVzVuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQWdWR2hsSUdOc2IzTmxaQzFtYjNKdElHUmhiWEJsWkNCb1lYSnRiMjVwWXlCdmMyTnBiR3hoZEdsdVp5QnpjSEpwYm1jdVhHNGdJRTl5TENCemNISnBibWN1WEc1Y2JpQWdWR2hwY3lCcGN5QmhJR1JwY21WamRDQndiM0owSUc5bUlFRmtZVzBnVFdsemEybGxkMmxqZWlkeklDaEFjMnRsZG5rcElGSmxZV04wSUVGdWFXMWhkR1ZrWEc0Z0lGQlNJQ014TlRNeU1pQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZabUZqWldKdmIyc3ZjbVZoWTNRdGJtRjBhWFpsTDNCMWJHd3ZNVFV6TWpJdlhHNWNiaUFnWUdCZ1hHNGdJSE53Y21sdVp5aDdYRzRnSUNBZ2JXRnpjem9nTWl4Y2JpQWdJQ0JrWVcxd2FXNW5PaUF4TUN4Y2JpQWdJQ0J6ZEdsbVptNWxjM002SURFd01DeGNiaUFnSUNCMGJ6b2dNVEF3WEc0Z0lIMHBMbk4wWVhKMEtDazdYRzRnSUdCZ1lGeHVYRzRnSUVGa1lXMGdUV2x6YTJsbGQybGplanBjYmlBZ1FITnJaWFo1SUNoMGQybDBkR1Z5TG1OdmJTOXphMlYyZVN3Z1oybDBhSFZpTG1OdmJTOXphMlYyZVNsY2JpQXFMMXh1YVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVwYlhCdmNuUWdleUIwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VnZlNCbWNtOXRJQ2RtY21GdFpYTjVibU1uTzF4dVhHNWpiR0Z6Y3lCVGNISnBibWNnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCemRHRjBhV01nWkdWbVlYVnNkRkJ5YjNCeklEMGdlMXh1SUNBZ0lITjBhV1ptYm1WemN6b2dNVEF3TEZ4dUlDQWdJR1JoYlhCcGJtYzZJREV3TEZ4dUlDQWdJRzFoYzNNNklERXVNQ3hjYmlBZ0lDQjJaV3h2WTJsMGVUb2dNQzR3TEZ4dUlDQWdJR1p5YjIwNklEQXVNQ3hjYmlBZ0lDQjBiem9nTUM0d0xGeHVJQ0FnSUhKbGMzUlRjR1ZsWkRvZ01DNHdNU3hjYmlBZ0lDQnlaWE4wUkdsemNHeGhZMlZ0Wlc1ME9pQXdMakF4WEc0Z0lIMDdYRzVjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCamIyNXpkQ0I3SUhabGJHOWphWFI1TENCMGJ5d2dabkp2YlNCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQjBhR2x6TG5RZ1BTQXdPMXh1SUNBZ0lIUm9hWE11YVc1cGRHbGhiRlpsYkc5amFYUjVJRDBnZG1Wc2IyTnBkSGtnUHlCMlpXeHZZMmwwZVNBdklERXdNREFnT2lBd0xqQTdYRzRnSUNBZ2RHaHBjeTVwYzBOdmJYQnNaWFJsSUQwZ1ptRnNjMlU3WEc0Z0lDQWdkR2hwY3k1a1pXeDBZU0E5SUhSdklDMGdabkp2YlR0Y2JpQWdmVnh1WEc0Z0lIVndaR0YwWlNncElIdGNiaUFnSUNCamIyNXpkQ0I3SUhOMGFXWm1ibVZ6Y3l3Z1pHRnRjR2x1Wnl3Z2JXRnpjeXdnWm5KdmJTd2dkRzhzSUhKbGMzUlRjR1ZsWkN3Z2NtVnpkRVJwYzNCc1lXTmxiV1Z1ZENCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQmpiMjV6ZENCN0lHUmxiSFJoTENCcGJtbDBhV0ZzVm1Wc2IyTnBkSGtnZlNBOUlIUm9hWE03WEc1Y2JpQWdJQ0JqYjI1emRDQjBhVzFsUkdWc2RHRWdQU0IwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VvS1NBdklERXdNREE3WEc0Z0lDQWdZMjl1YzNRZ2RDQTlJSFJvYVhNdWRDQTlJSFJvYVhNdWRDQXJJSFJwYldWRVpXeDBZVHRjYmx4dUlDQWdJR052Ym5OMElHUmhiWEJwYm1kU1lYUnBieUE5SUdSaGJYQnBibWNnTHlBb01pQXFJRTFoZEdndWMzRnlkQ2h6ZEdsbVptNWxjM01nS2lCdFlYTnpLU2s3WEc0Z0lDQWdZMjl1YzNRZ1lXNW5kV3hoY2taeVpYRWdQU0JOWVhSb0xuTnhjblFvYzNScFptWnVaWE56SUM4Z2JXRnpjeWs3WEc0Z0lDQWdZMjl1YzNRZ1pYaHdiMFJsWTJGNUlEMGdZVzVuZFd4aGNrWnlaWEVnS2lCTllYUm9Mbk54Y25Rb01TNHdJQzBnS0dSaGJYQnBibWRTWVhScGJ5QXFJR1JoYlhCcGJtZFNZWFJwYnlrcE8xeHVYRzRnSUNBZ1kyOXVjM1FnZURBZ1BTQXhPMXh1SUNBZ0lHeGxkQ0J2YzJOcGJHeGhkR2x2YmlBOUlEQXVNRHRjYmx4dUlDQWdJQzh2SUZWdVpHVnlaR0Z0Y0dWa1hHNGdJQ0FnYVdZZ0tHUmhiWEJwYm1kU1lYUnBieUE4SURFcElIdGNiaUFnSUNBZ0lHTnZibk4wSUdWdWRtVnNiM0JsSUQwZ1RXRjBhQzVsZUhBb0xXUmhiWEJwYm1kU1lYUnBieUFxSUdGdVozVnNZWEpHY21WeElDb2dkQ2s3WEc0Z0lDQWdJQ0J2YzJOcGJHeGhkR2x2YmlBOUlHVnVkbVZzYjNCbElDb2dLQ2dvYVc1cGRHbGhiRlpsYkc5amFYUjVJQ3NnWkdGdGNHbHVaMUpoZEdsdklDb2dZVzVuZFd4aGNrWnlaWEVnS2lCNE1Da2dMeUJsZUhCdlJHVmpZWGtwSUNvZ1RXRjBhQzV6YVc0b1pYaHdiMFJsWTJGNUlDb2dkQ2tnS3lBb2VEQWdLaUJOWVhSb0xtTnZjeWhsZUhCdlJHVmpZWGtnS2lCMEtTa3BPMXh1SUNBZ0lDQWdkR2hwY3k1MlpXeHZZMmwwZVNBOUlDaGxiblpsYkc5d1pTQXFJQ2dvVFdGMGFDNWpiM01vWlhod2IwUmxZMkY1SUNvZ2RDa2dLaUFvYVc1cGRHbGhiRlpsYkc5amFYUjVJQ3NnWkdGdGNHbHVaMUpoZEdsdklDb2dZVzVuZFd4aGNrWnlaWEVnS2lCNE1Da3BJQzBnS0dWNGNHOUVaV05oZVNBcUlIZ3dJQ29nVFdGMGFDNXphVzRvWlhod2IwUmxZMkY1SUNvZ2RDa3BLU0F0WEc0Z0lDQWdJQ0FnSUNnb1pHRnRjR2x1WjFKaGRHbHZJQ29nWVc1bmRXeGhja1p5WlhFZ0tpQmxiblpsYkc5d1pTa2dLaUFvS0Nnb1RXRjBhQzV6YVc0b1pYaHdiMFJsWTJGNUlDb2dkQ2tnS2lBb2FXNXBkR2xoYkZabGJHOWphWFI1SUNzZ1pHRnRjR2x1WjFKaGRHbHZJQ29nWVc1bmRXeGhja1p5WlhFZ0tpQjRNQ2twSUNrZ0x5QmxlSEJ2UkdWallYa3BJQ3NnS0hnd0lDb2dUV0YwYUM1amIzTW9aWGh3YjBSbFkyRjVJQ29nZENrcEtTa3BPMXh1WEc0Z0lDQWdMeThnUTNKcGRHbGpZV3hzZVNCa1lXMXdaV1JjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnWlc1MlpXeHZjR1VnUFNCTllYUm9MbVY0Y0NndFlXNW5kV3hoY2taeVpYRWdLaUIwS1R0Y2JpQWdJQ0FnSUc5elkybHNiR0YwYVc5dUlEMGdaVzUyWld4dmNHVWdLaUFvZURBZ0t5QW9hVzVwZEdsaGJGWmxiRzlqYVhSNUlDc2dLR0Z1WjNWc1lYSkdjbVZ4SUNvZ2VEQXBLU0FxSUhRcE8xeHVJQ0FnSUNBZ2RHaHBjeTUyWld4dlkybDBlU0E5SUdWdWRtVnNiM0JsSUNvZ0tDaDBJQ29nYVc1cGRHbGhiRlpsYkc5amFYUjVJQ29nWVc1bmRXeGhja1p5WlhFcElDMGdLSFFnS2lCNE1DQXFJQ2hoYm1kMWJHRnlSbkpsY1NBcUlHRnVaM1ZzWVhKR2NtVnhLU2tnS3lCcGJtbDBhV0ZzVm1Wc2IyTnBkSGtwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR052Ym5OMElHWnlZV04wYVc5dUlEMGdNU0F0SUc5elkybHNiR0YwYVc5dU8xeHVJQ0FnSUd4bGRDQndiM05wZEdsdmJpQTlJR1p5YjIwZ0t5Qm1jbUZqZEdsdmJpQXFJR1JsYkhSaE8xeHVYRzRnSUNBZ0x5OGdRMmhsWTJzZ2FXWWdjMmx0ZFd4aGRHbHZiaUJwY3lCamIyMXdiR1YwWlZ4dUlDQWdJQzh2SUZkbElHUnZJSFJvYVhNZ2FHVnlaU0JwYm5OMFpXRmtJRzltSUdCcGMwRmpkR2x2YmtOdmJYQnNaWFJsWUNCaGN5QnBkQ0JoYkd4dmQzTWdkWE5jYmlBZ0lDQXZMeUIwYnlCamJHRnRjQ0IwYnlCbGJtUWdaSFZ5YVc1bklIVndaR0YwWlNsY2JpQWdJQ0JqYjI1emRDQnBjMEpsYkc5M1ZtVnNiMk5wZEhsVWFISmxjMmh2YkdRZ1BTQk5ZWFJvTG1GaWN5aDBhR2x6TG5abGJHOWphWFI1S1NBOFBTQnlaWE4wVTNCbFpXUTdYRzRnSUNBZ1kyOXVjM1FnYVhOQ1pXeHZkMFJwYzNCc1lXTmxiV1Z1ZEZSb2NtVnphRzlzWkNBOUlFMWhkR2d1WVdKektIUnZJQzBnY0c5emFYUnBiMjRwSUR3OUlISmxjM1JFYVhOd2JHRmpaVzFsYm5RN1hHNGdJQ0FnZEdocGN5NXBjME52YlhCc1pYUmxJRDBnYVhOQ1pXeHZkMVpsYkc5amFYUjVWR2h5WlhOb2IyeGtJQ1ltSUdselFtVnNiM2RFYVhOd2JHRmpaVzFsYm5SVWFISmxjMmh2YkdRN1hHNWNiaUFnSUNCcFppQW9kR2hwY3k1cGMwTnZiWEJzWlhSbEtTQjdYRzRnSUNBZ0lDQndiM05wZEdsdmJpQTlJSFJ2TzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQndiM05wZEdsdmJqdGNiaUFnZlZ4dVhHNGdJR2x6UVdOMGFXOXVRMjl0Y0d4bGRHVW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11YVhORGIyMXdiR1YwWlR0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2NISnZjSE1wSUQwK0lHNWxkeUJUY0hKcGJtY29jSEp2Y0hNcE8xeHVJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWN0aW9ucy9zcHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDU1NSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudCxcbiAgICBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbjogdHJ1ZVxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9yZW5kZXIgPSByZXF1aXJlKCcuL3JlbmRlcicpO1xuXG52YXIgX3JlbmRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW5kZXIpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZXMpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ1NTUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhDU1NSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBDU1NSZW5kZXJlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ1NTUmVuZGVyZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENTU1JlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBlbGVtZW50ID0gX3Byb3BzLmVsZW1lbnQsXG4gICAgICAgIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uID0gX3Byb3BzLmVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uO1xuXG4gICAgKDAsIF9yZW5kZXIyLmRlZmF1bHQpKGVsZW1lbnQsIHRoaXMuc3RhdGUsIHRoaXMuY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pO1xuICB9O1xuXG4gIENTU1JlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgdmFyIHZhbHVlVHlwZSA9IF92YWx1ZVR5cGVzMi5kZWZhdWx0W2tleV07XG5cbiAgICBpZiAoIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgICAgdmFyIGRvbVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClbKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoa2V5KV0gfHwgMDtcbiAgICAgIHJldHVybiB2YWx1ZVR5cGUgJiYgdmFsdWVUeXBlLnBhcnNlID8gdmFsdWVUeXBlLnBhcnNlKGRvbVZhbHVlKSA6IGRvbVZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWVUeXBlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVR5cGUuZGVmYXVsdCB8fCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDU1NSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSW1Wc1pXMWxiblFpTENKd2NtOXdjeUlzSWtOVFUxSmxibVJsY21WeUlpd2laVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNGlMQ0p2YmxKbGJtUmxjaUlzSW5OMFlYUmxJaXdpWTJoaGJtZGxaRlpoYkhWbGN5SXNJbTl1VW1WaFpDSXNJbXRsZVNJc0luWmhiSFZsVkhsd1pTSXNJbVJ2YlZaaGJIVmxJaXdpZDJsdVpHOTNJaXdpWjJWMFEyOXRjSFYwWldSVGRIbHNaU0lzSW5CaGNuTmxJaXdpWkdWbVlYVnNkQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzJ0Q1FUWkNaU3hWUVVGVlFTeFBRVUZXTEVWQlFXMUNReXhMUVVGdVFpeEZRVUV3UWp0QlFVTjJReXhUUVVGUExFbEJRVWxETEZkQlFVbzdRVUZEVEVZc2IwSkJSRXM3UVVGRlRFY3NaME5CUVRSQ08wRkJSblpDTEV0QlIwWkdMRXRCU0VVc1JVRkJVRHRCUVV0RUxFTTdPMEZCYmtORU96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096czdPenM3T3p0SlFVVk5ReXhYT3pzN096czdPenM3ZDBKQlEwcEZMRkVzZFVKQlFWYzdRVUZCUVN4cFFrRkRkVU1zUzBGQlMwZ3NTMEZFTlVNN1FVRkJRU3hSUVVORVJDeFBRVVJETEZWQlEwUkJMRTlCUkVNN1FVRkJRU3hSUVVOUlJ5d3dRa0ZFVWl4VlFVTlJRU3d3UWtGRVVqczdRVUZGVkN3d1FrRkJWVWdzVDBGQlZpeEZRVUZ0UWl4TFFVRkxTeXhMUVVGNFFpeEZRVUVyUWl4TFFVRkxReXhoUVVGd1F5eEZRVUZ0UkVnc01FSkJRVzVFTzBGQlEwUXNSenM3ZDBKQlJVUkpMRTBzYlVKQlFVOURMRWNzUlVGQlN6dEJRVU5XTEZGQlFVMURMRmxCUVZrc2NVSkJRV05FTEVkQlFXUXNRMEZCYkVJN08wRkJSVUVzVVVGQlNTeERRVUZETEhsQ1FVRmxRU3hIUVVGbUxFTkJRVXdzUlVGQk1FSTdRVUZCUVN4VlFVTm9RbElzVDBGRVowSXNSMEZEU2l4TFFVRkxReXhMUVVSRUxFTkJRMmhDUkN4UFFVUm5RanM3UVVGRmVFSXNWVUZCVFZVc1YwRkJWME1zVDBGQlQwTXNaMEpCUVZBc1EwRkJkMEphTEU5QlFYaENMRVZCUVdsRExFbEJRV3BETEVWQlFYVkRMSGRDUVVGVFVTeEhRVUZVTEVOQlFYWkRMRXRCUVhsRUxFTkJRVEZGTzBGQlEwRXNZVUZCVVVNc1lVRkJZVUVzVlVGQlZVa3NTMEZCZUVJc1IwRkJhVU5LTEZWQlFWVkpMRXRCUVZZc1EwRkJaMEpJTEZGQlFXaENMRU5CUVdwRExFZEJRVFpFUVN4UlFVRndSVHRCUVVORUxFdEJTa1FzVFVGSlR6dEJRVU5NTEZWQlFVbEVMRk5CUVVvc1JVRkJaVHRCUVVOaUxHVkJRVTlCTEZWQlFWVkxMRTlCUVZZc1NVRkJjVUlzUTBGQk5VSTdRVUZEUkN4UFFVWkVMRTFCUlU4N1FVRkRUQ3hsUVVGUExFTkJRVkE3UVVGRFJEdEJRVU5HTzBGQlEwWXNSeUlzSW1acGJHVWlPaUpwYm1SbGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCU1pXNWtaWEpsY2lCbWNtOXRJQ2N1TGk4bk8xeHVhVzF3YjNKMElISmxibVJsY2tOVFV5Qm1jbTl0SUNjdUwzSmxibVJsY2ljN1hHNXBiWEJ2Y25RZ2RISmhibk5tYjNKdFVISnZjSE1nWm5KdmJTQW5MaTkwY21GdWMyWnZjbTB0Y0hKdmNITW5PMXh1YVcxd2IzSjBJSFpoYkhWbFZIbHdaWE5OWVhBZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5YzdYRzVwYlhCdmNuUWdjSEpsWm1sNFpYSWdabkp2YlNBbkxpOXdjbVZtYVhobGNpYzdYRzVjYm1Oc1lYTnpJRU5UVTFKbGJtUmxjbVZ5SUdWNGRHVnVaSE1nVW1WdVpHVnlaWElnZTF4dUlDQnZibEpsYm1SbGNpZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHVnNaVzFsYm5Rc0lHVnVZV0pzWlVoaGNtUjNZWEpsUVdOalpXeGxjbUYwYVc5dUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJSEpsYm1SbGNrTlRVeWhsYkdWdFpXNTBMQ0IwYUdsekxuTjBZWFJsTENCMGFHbHpMbU5vWVc1blpXUldZV3gxWlhNc0lHVnVZV0pzWlVoaGNtUjNZWEpsUVdOalpXeGxjbUYwYVc5dUtUdGNiaUFnZlZ4dVhHNGdJRzl1VW1WaFpDaHJaWGtwSUh0Y2JpQWdJQ0JqYjI1emRDQjJZV3gxWlZSNWNHVWdQU0IyWVd4MVpWUjVjR1Z6VFdGd1cydGxlVjA3WEc1Y2JpQWdJQ0JwWmlBb0lYUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJR052Ym5OMElIc2daV3hsYldWdWRDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0FnSUdOdmJuTjBJR1J2YlZaaGJIVmxJRDBnZDJsdVpHOTNMbWRsZEVOdmJYQjFkR1ZrVTNSNWJHVW9aV3hsYldWdWRDd2diblZzYkNsYmNISmxabWw0WlhJb2EyVjVLVjBnZkh3Z01EdGNiaUFnSUNBZ0lISmxkSFZ5YmlBb2RtRnNkV1ZVZVhCbElDWW1JSFpoYkhWbFZIbHdaUzV3WVhKelpTa2dQeUIyWVd4MVpWUjVjR1V1Y0dGeWMyVW9aRzl0Vm1Gc2RXVXBJRG9nWkc5dFZtRnNkV1U3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHbG1JQ2gyWVd4MVpWUjVjR1VwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhaaGJIVmxWSGx3WlM1a1pXWmhkV3gwSUh4OElEQTdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01EdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z0tHVnNaVzFsYm5Rc0lIQnliM0J6S1NCN1hHNGdJSEpsZEhWeWJpQnVaWGNnUTFOVFVtVnVaR1Z5WlhJb2UxeHVJQ0FnSUdWc1pXMWxiblFzWEc0Z0lDQWdaVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNDZJSFJ5ZFdVc1hHNGdJQ0FnTGk0dWNISnZjSE5jYmlBZ2ZTazdYRzU5WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkU3R5bGVQcm9wZXJ0eVN0cmluZztcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVzKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHRyYW5zbGF0ZSA9IF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdC50cmFuc2xhdGUsXG4gICAgdHJhbnNsYXRlWCA9IF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdC50cmFuc2xhdGVYLFxuICAgIHRyYW5zbGF0ZVkgPSBfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHQudHJhbnNsYXRlWSxcbiAgICB0cmFuc2xhdGVaID0gX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0LnRyYW5zbGF0ZVosXG4gICAgc2NhbGUgPSBfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHQuc2NhbGUsXG4gICAgc2NhbGVYID0gX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0LnNjYWxlWCxcbiAgICBzY2FsZVkgPSBfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHQuc2NhbGVZLFxuICAgIHNjYWxlWiA9IF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdC5zY2FsZVosXG4gICAgcm90YXRlID0gX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0LnJvdGF0ZSxcbiAgICByb3RhdGVYID0gX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0LnJvdGF0ZVgsXG4gICAgcm90YXRlWSA9IF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdC5yb3RhdGVZLFxuICAgIHJvdGF0ZVogPSBfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHQucm90YXRlWjtcblxuXG52YXIgdHJhbnNsYXRlTWFwID0ge1xuICB4OiAndHJhbnNsYXRlWCcsXG4gIHk6ICd0cmFuc2xhdGVZJyxcbiAgejogJ3RyYW5zbGF0ZVonXG59O1xuXG52YXIgdHJhbnNmb3JtUHJvcE9yZGVyID0gW3RyYW5zbGF0ZSwgdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgdHJhbnNsYXRlWiwgc2NhbGUsIHNjYWxlWCwgc2NhbGVZLCBzY2FsZVosIHJvdGF0ZSwgcm90YXRlWCwgcm90YXRlWSwgcm90YXRlWl07XG5cbmZ1bmN0aW9uIHNvcnRUcmFuc2Zvcm1Qcm9wcyhhLCBiKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1Qcm9wT3JkZXIuaW5kZXhPZihhKSAtIHRyYW5zZm9ybVByb3BPcmRlci5pbmRleE9mKGIpO1xufVxuXG5mdW5jdGlvbiBidWlsZFN0eWxlUHJvcGVydHlTdHJpbmcoZWxlbWVudCwgc3RhdGUsIGNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gIHZhciBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gIHZhciBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgdmFyIHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAvLyBGaXJzdCBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGNoYW5nZWQgdHJhbnNmb3JtIHZhbHVlc1xuICAvLyBhbmQgaWYgdHJ1ZSBhZGQgYWxsIHRyYW5zZm9ybSB2YWx1ZXNcbiAgdmFyIG51bUNoYW5nZWRWYWx1ZXMgPSBjaGFuZ2VkVmFsdWVzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1DaGFuZ2VkVmFsdWVzOyBpKyspIHtcbiAgICB2YXIga2V5ID0gY2hhbmdlZFZhbHVlc1tpXTtcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0cmFuc2Zvcm0gcHJvcGVydHksIGFkZCBhbGwgb3RoZXIgdHJhbnNmb3JtIHByb3BzXG4gICAgLy8gdG8gY2hhbmdlZFZhbHVlcyBhbmQgdGhlbiBicmVha1xuICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcblxuICAgICAgZm9yICh2YXIgX2tleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W19rZXldICYmIGNoYW5nZWRWYWx1ZXMuaW5kZXhPZihfa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjaGFuZ2VkVmFsdWVzLnB1c2goX2tleSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlZFZhbHVlcy5zb3J0KHNvcnRUcmFuc2Zvcm1Qcm9wcyk7XG5cbiAgLy8gTm93IHJ1biB0aHJvdWdoIGVhY2ggcHJvcGVydHksIGFuZCBkZWNpZGUgd2hpY2ggaXMgYSBwbGFpbiBzdHlsZSBwcm9wcyxcbiAgLy8gYSB0cmFuc2Zvcm0gcHJvcGVydHkgYW5kIENTUyB2YXJzIGFuZCBoYW5kbGUgYWNjb3JkaW5nbHlcbiAgdmFyIHRvdGFsTnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdG90YWxOdW1DaGFuZ2VkVmFsdWVzOyBfaSsrKSB7XG4gICAgdmFyIF9rZXkyID0gY2hhbmdlZFZhbHVlc1tfaV07XG4gICAgdmFyIHZhbHVlID0gc3RhdGVbX2tleTJdO1xuXG4gICAgaWYgKHRyYW5zbGF0ZU1hcFtfa2V5Ml0pIHtcbiAgICAgIF9rZXkyID0gdHJhbnNsYXRlTWFwW19rZXkyXTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgbnVtYmVyIG9yIG9iamVjdCBhbmQgd2UgaGF2ZSBmaWx0ZXIsIGFwcGx5IGZpbHRlclxuICAgIGlmIChfdmFsdWVUeXBlczIuZGVmYXVsdFtfa2V5Ml0gJiYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlKSB8fCAoMCwgX3V0aWxzLmlzT2JqKSh2YWx1ZSkpICYmIF92YWx1ZVR5cGVzMi5kZWZhdWx0W19rZXkyXS50cmFuc2Zvcm0pIHtcbiAgICAgIHZhbHVlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRbX2tleTJdLnRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gSWYgYSB0cmFuc2Zvcm0gcHJvcCwgYWRkIHRvIHRyYW5zZm9ybSBzdHJpbmdcbiAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W19rZXkyXSkge1xuICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IF9rZXkyICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgdHJhbnNmb3JtSGFzWiA9IF9rZXkyID09PSB0cmFuc2xhdGVNYXAueiA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuXG4gICAgICAvLyBPciBpZiBhIHNpbXBsZSBDU1MgcHJvcGVydHksIHNldFxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShfa2V5MiwgdHJ1ZSkgKyAnOicgKyB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSBoYXZlIHRyYW5zZm9ybSBwcm9wcywgYnVpbGQgYSB0cmFuc2Zvcm0gc3RyaW5nXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSB0cmFuc2xhdGVNYXAueiArICcoMCknO1xuICAgIH1cblxuICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKCd0cmFuc2Zvcm0nLCB0cnVlKSArICc6JyArIHRyYW5zZm9ybVN0cmluZztcbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBwcm9wZXJ0eVN0cmluZztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzSmxibVJsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUppZFdsc1pGTjBlV3hsVUhKdmNHVnlkSGxUZEhKcGJtY2lMQ0owY21GdWMyeGhkR1VpTENKMGNtRnVjMnhoZEdWWUlpd2lkSEpoYm5Oc1lYUmxXU0lzSW5SeVlXNXpiR0YwWlZvaUxDSnpZMkZzWlNJc0luTmpZV3hsV0NJc0luTmpZV3hsV1NJc0luTmpZV3hsV2lJc0luSnZkR0YwWlNJc0luSnZkR0YwWlZnaUxDSnliM1JoZEdWWklpd2ljbTkwWVhSbFdpSXNJblJ5WVc1emJHRjBaVTFoY0NJc0luZ2lMQ0o1SWl3aWVpSXNJblJ5WVc1elptOXliVkJ5YjNCUGNtUmxjaUlzSW5OdmNuUlVjbUZ1YzJadmNtMVFjbTl3Y3lJc0ltRWlMQ0ppSWl3aWFXNWtaWGhQWmlJc0ltVnNaVzFsYm5RaUxDSnpkR0YwWlNJc0ltTm9ZVzVuWldSV1lXeDFaWE1pTENKbGJtRmliR1ZJWVhKa2QyRnlaVUZqWTJWc1pYSmhkR2x2YmlJc0luQnliM0JsY25SNVUzUnlhVzVuSWl3aWRISmhibk5tYjNKdFUzUnlhVzVuSWl3aWFHRnpWSEpoYm5ObWIzSnRJaXdpZEhKaGJuTm1iM0p0U0dGeldpSXNJbTUxYlVOb1lXNW5aV1JXWVd4MVpYTWlMQ0pzWlc1bmRHZ2lMQ0pwSWl3aWEyVjVJaXdpY0hWemFDSXNJbk52Y25RaUxDSjBiM1JoYkU1MWJVTm9ZVzVuWldSV1lXeDFaWE1pTENKMllXeDFaU0lzSW5SeVlXNXpabTl5YlNJc0luTjBlV3hsSWl3aVkzTnpWR1Y0ZENKZExDSnRZWEJ3YVc1bmN5STZJanM3TzJ0Q1FUWkRkMEpCTEhkQ096dEJRVGREZUVJN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1NVRkhSVU1zVXl3MFFrRkJRVUVzVXp0SlFVTkJReXhWTERSQ1FVRkJRU3hWTzBsQlEwRkRMRlVzTkVKQlFVRkJMRlU3U1VGRFFVTXNWU3cwUWtGQlFVRXNWVHRKUVVOQlF5eExMRFJDUVVGQlFTeExPMGxCUTBGRExFMHNORUpCUVVGQkxFMDdTVUZEUVVNc1RTdzBRa0ZCUVVFc1RUdEpRVU5CUXl4TkxEUkNRVUZCUVN4Tk8wbEJRMEZETEUwc05FSkJRVUZCTEUwN1NVRkRRVU1zVHl3MFFrRkJRVUVzVHp0SlFVTkJReXhQTERSQ1FVRkJRU3hQTzBsQlEwRkRMRThzTkVKQlFVRkJMRTg3T3p0QlFVZEdMRWxCUVUxRExHVkJRV1U3UVVGRGJrSkRMRXRCUVVjc1dVRkVaMEk3UVVGRmJrSkRMRXRCUVVjc1dVRkdaMEk3UVVGSGJrSkRMRXRCUVVjN1FVRklaMElzUTBGQmNrSTdPMEZCVFVFc1NVRkJUVU1zY1VKQlFYRkNMRU5CUTNwQ2FFSXNVMEZFZVVJc1JVRkZla0pETEZWQlJubENMRVZCUjNwQ1F5eFZRVWg1UWl4RlFVbDZRa01zVlVGS2VVSXNSVUZMZWtKRExFdEJUSGxDTEVWQlRYcENReXhOUVU1NVFpeEZRVTk2UWtNc1RVRlFlVUlzUlVGUmVrSkRMRTFCVW5sQ0xFVkJVM3BDUXl4TlFWUjVRaXhGUVZWNlFrTXNUMEZXZVVJc1JVRlhla0pETEU5QldIbENMRVZCV1hwQ1F5eFBRVnA1UWl4RFFVRXpRanM3UVVGbFFTeFRRVUZUVFN4clFrRkJWQ3hEUVVFMFFrTXNRMEZCTlVJc1JVRkJLMEpETEVOQlFTOUNMRVZCUVd0RE8wRkJRMmhETEZOQlFVOUlMRzFDUVVGdFFra3NUMEZCYmtJc1EwRkJNa0pHTEVOQlFUTkNMRWxCUVdkRFJpeHRRa0ZCYlVKSkxFOUJRVzVDTEVOQlFUSkNSQ3hEUVVFelFpeERRVUYyUXp0QlFVTkVPenRCUVVWakxGTkJRVk53UWl4M1FrRkJWQ3hEUVVGclEzTkNMRTlCUVd4RExFVkJRVEpEUXl4TFFVRXpReXhGUVVGclJFTXNZVUZCYkVRc1JVRkJhVVZETERCQ1FVRnFSU3hGUVVFMlJqdEJRVU14Unl4TlFVRkpReXhwUWtGQmFVSXNSVUZCY2tJN1FVRkRRU3hOUVVGSlF5eHJRa0ZCYTBJc1JVRkJkRUk3UVVGRFFTeE5RVUZKUXl4bFFVRmxMRXRCUVc1Q08wRkJRMEVzVFVGQlNVTXNaMEpCUVdkQ0xFdEJRWEJDT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hOUVVGTlF5eHRRa0ZCYlVKT0xHTkJRV05QTEUxQlFYWkRPMEZCUTBFc1QwRkJTeXhKUVVGSlF5eEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWxHTEdkQ1FVRndRaXhGUVVGelEwVXNSMEZCZEVNc1JVRkJNa003UVVGRGVrTXNVVUZCU1VNc1RVRkJUVlFzWTBGQlkxRXNRMEZCWkN4RFFVRldPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFJRVUZKTEhsQ1FVRmxReXhIUVVGbUxFTkJRVW9zUlVGQmVVSTdRVUZEZGtKTUxIRkNRVUZsTEVsQlFXWTdPMEZCUlVFc1YwRkJTeXhKUVVGSlN5eEpRVUZVTEVsQlFXZENWaXhMUVVGb1FpeEZRVUYxUWp0QlFVTnlRaXhaUVVGSkxIbENRVUZsVlN4SlFVRm1MRXRCUVhWQ1ZDeGpRVUZqU0N4UFFVRmtMRU5CUVhOQ1dTeEpRVUYwUWl4TlFVRXJRaXhEUVVGRExFTkJRVE5FTEVWQlFUaEVPMEZCUXpWRVZDeDNRa0ZCWTFVc1NVRkJaQ3hEUVVGdFFrUXNTVUZCYmtJN1FVRkRSRHRCUVVOR096dEJRVVZFTzBGQlEwUTdRVUZEUmpzN1FVRkZSRlFzWjBKQlFXTlhMRWxCUVdRc1EwRkJiVUpxUWl4clFrRkJia0k3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRTFCUVUxclFpeDNRa0ZCZDBKYUxHTkJRV05QTEUxQlFUVkRPMEZCUTBFc1QwRkJTeXhKUVVGSlF5eExRVUZKTEVOQlFXSXNSVUZCWjBKQkxFdEJRVWxKTEhGQ1FVRndRaXhGUVVFeVEwb3NTVUZCTTBNc1JVRkJaMFE3UVVGRE9VTXNVVUZCU1VNc1VVRkJUVlFzWTBGQlkxRXNSVUZCWkN4RFFVRldPMEZCUTBFc1VVRkJTVXNzVVVGQlVXUXNUVUZCVFZVc1MwRkJUaXhEUVVGYU96dEJRVVZCTEZGQlFVbHdRaXhoUVVGaGIwSXNTMEZCWWl4RFFVRktMRVZCUVhWQ08wRkJRM0pDUVN4alFVRk5jRUlzWVVGQllXOUNMRXRCUVdJc1EwRkJUanRCUVVORU96dEJRVVZFTzBGQlEwRXNVVUZCU1N4eFFrRkJWMEVzUzBGQldDeE5RVUZ2UWl4clFrRkJUVWtzUzBGQlRpeExRVUZuUWl4clFrRkJUVUVzUzBGQlRpeERRVUZ3UXl4TFFVRnhSQ3h4UWtGQlYwb3NTMEZCV0N4RlFVRm5Ra3NzVTBGQmVrVXNSVUZCYjBZN1FVRkRiRVpFTEdOQlFWRXNjVUpCUVZkS0xFdEJRVmdzUlVGQlowSkxMRk5CUVdoQ0xFTkJRVEJDUkN4TFFVRXhRaXhEUVVGU08wRkJRMFE3TzBGQlJVUTdRVUZEUVN4UlFVRkpMSGxDUVVGbFNpeExRVUZtTEVOQlFVb3NSVUZCZVVJN1FVRkRka0pPTEhsQ1FVRnRRazBzVVVGQlRTeEhRVUZPTEVkQlFWbEpMRXRCUVZvc1IwRkJiMElzU1VGQmRrTTdRVUZEUVZJc2MwSkJRV2xDU1N4VlFVRlJjRUlzWVVGQllVY3NRMEZCZEVJc1IwRkJNa0lzU1VGQk0wSXNSMEZCYTBOaExHRkJRV3hFT3p0QlFVVkdPMEZCUTBNc1MwRk1SQ3hOUVV0UE8wRkJRMHhJTEhkQ1FVRnJRaXhOUVVGTkxIZENRVUZUVHl4TFFVRlVMRVZCUVdNc1NVRkJaQ3hEUVVGT0xFZEJRVFJDTEVkQlFUVkNMRWRCUVd0RFNTeExRVUZ3UkR0QlFVTkVPMEZCUTBZN08wRkJSVVE3UVVGRFFTeE5RVUZKVkN4WlFVRktMRVZCUVd0Q08wRkJRMmhDTEZGQlFVa3NRMEZCUTBNc1lVRkJSQ3hKUVVGclFrb3NNRUpCUVhSQ0xFVkJRV3RFTzBGQlEyaEVSU3g1UWtGQmJVSmtMR0ZCUVdGSExFTkJRV0lzUjBGQmFVSXNTMEZCY0VNN1FVRkRSRHM3UVVGRlJGVXNjMEpCUVd0Q0xFMUJRVTBzZDBKQlFWTXNWMEZCVkN4RlFVRnpRaXhKUVVGMFFpeERRVUZPTEVkQlFXOURMRWRCUVhCRExFZEJRVEJEUXl4bFFVRTFSRHRCUVVORU96dEJRVVZFVEN4VlFVRlJhVUlzUzBGQlVpeERRVUZqUXl4UFFVRmtMRWxCUVhsQ1pDeGpRVUY2UWp0QlFVTkVJaXdpWm1sc1pTSTZJbkpsYm1SbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCMGNtRnVjMlp2Y20xUWNtOXdjeUJtY205dElDY3VMM1J5WVc1elptOXliUzF3Y205d2N5YzdYRzVwYlhCdmNuUWdkbUZzZFdWVWVYQmxjeUJtY205dElDY3VMM1poYkhWbExYUjVjR1Z6Snp0Y2JtbHRjRzl5ZENCd2NtVm1hWGhsY2lCbWNtOXRJQ2N1TDNCeVpXWnBlR1Z5Snp0Y2JtbHRjRzl5ZENCN0lHbHpUblZ0TENCcGMwOWlhaUI5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJSHRjYmlBZ2RISmhibk5zWVhSbExGeHVJQ0IwY21GdWMyeGhkR1ZZTEZ4dUlDQjBjbUZ1YzJ4aGRHVlpMRnh1SUNCMGNtRnVjMnhoZEdWYUxGeHVJQ0J6WTJGc1pTeGNiaUFnYzJOaGJHVllMRnh1SUNCelkyRnNaVmtzWEc0Z0lITmpZV3hsV2l4Y2JpQWdjbTkwWVhSbExGeHVJQ0J5YjNSaGRHVllMRnh1SUNCeWIzUmhkR1ZaTEZ4dUlDQnliM1JoZEdWYVhHNTlJRDBnZEhKaGJuTm1iM0p0VUhKdmNITTdYRzVjYm1OdmJuTjBJSFJ5WVc1emJHRjBaVTFoY0NBOUlIdGNiaUFnZURvZ0ozUnlZVzV6YkdGMFpWZ25MRnh1SUNCNU9pQW5kSEpoYm5Oc1lYUmxXU2NzWEc0Z0lIbzZJQ2QwY21GdWMyeGhkR1ZhSjF4dWZUdGNibHh1WTI5dWMzUWdkSEpoYm5ObWIzSnRVSEp2Y0U5eVpHVnlJRDBnVzF4dUlDQjBjbUZ1YzJ4aGRHVXNYRzRnSUhSeVlXNXpiR0YwWlZnc1hHNGdJSFJ5WVc1emJHRjBaVmtzWEc0Z0lIUnlZVzV6YkdGMFpWb3NYRzRnSUhOallXeGxMRnh1SUNCelkyRnNaVmdzWEc0Z0lITmpZV3hsV1N4Y2JpQWdjMk5oYkdWYUxGeHVJQ0J5YjNSaGRHVXNYRzRnSUhKdmRHRjBaVmdzWEc0Z0lISnZkR0YwWlZrc1hHNGdJSEp2ZEdGMFpWcGNibDA3WEc1Y2JtWjFibU4wYVc5dUlITnZjblJVY21GdWMyWnZjbTFRY205d2N5aGhMQ0JpS1NCN1hHNGdJSEpsZEhWeWJpQjBjbUZ1YzJadmNtMVFjbTl3VDNKa1pYSXVhVzVrWlhoUFppaGhLU0F0SUhSeVlXNXpabTl5YlZCeWIzQlBjbVJsY2k1cGJtUmxlRTltS0dJcE8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJpZFdsc1pGTjBlV3hsVUhKdmNHVnlkSGxUZEhKcGJtY29aV3hsYldWdWRDd2djM1JoZEdVc0lHTm9ZVzVuWldSV1lXeDFaWE1zSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1NCN1hHNGdJR3hsZENCd2NtOXdaWEowZVZOMGNtbHVaeUE5SUNjbk8xeHVJQ0JzWlhRZ2RISmhibk5tYjNKdFUzUnlhVzVuSUQwZ0p5YzdYRzRnSUd4bGRDQm9ZWE5VY21GdWMyWnZjbTBnUFNCbVlXeHpaVHRjYmlBZ2JHVjBJSFJ5WVc1elptOXliVWhoYzFvZ1BTQm1ZV3h6WlR0Y2JseHVJQ0F2THlCR2FYSnpkQ0JqYUdWamF5QnBaaUIwYUdWeVpTQmhjbVVnWVc1NUlHTm9ZVzVuWldRZ2RISmhibk5tYjNKdElIWmhiSFZsYzF4dUlDQXZMeUJoYm1RZ2FXWWdkSEoxWlNCaFpHUWdZV3hzSUhSeVlXNXpabTl5YlNCMllXeDFaWE5jYmlBZ1kyOXVjM1FnYm5WdFEyaGhibWRsWkZaaGJIVmxjeUE5SUdOb1lXNW5aV1JXWVd4MVpYTXViR1Z1WjNSb08xeHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJVTm9ZVzVuWldSV1lXeDFaWE03SUdrckt5a2dlMXh1SUNBZ0lHeGxkQ0JyWlhrZ1BTQmphR0Z1WjJWa1ZtRnNkV1Z6VzJsZE8xeHVYRzRnSUNBZ0x5OGdTV1lnZEdocGN5QnBjeUJoSUhSeVlXNXpabTl5YlNCd2NtOXdaWEowZVN3Z1lXUmtJR0ZzYkNCdmRHaGxjaUIwY21GdWMyWnZjbTBnY0hKdmNITmNiaUFnSUNBdkx5QjBieUJqYUdGdVoyVmtWbUZzZFdWeklHRnVaQ0IwYUdWdUlHSnlaV0ZyWEc0Z0lDQWdhV1lnS0hSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElIdGNiaUFnSUNBZ0lHaGhjMVJ5WVc1elptOXliU0E5SUhSeWRXVTdYRzVjYmlBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQnpkR0YwWlNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNBbUppQmphR0Z1WjJWa1ZtRnNkV1Z6TG1sdVpHVjRUMllvYTJWNUtTQTlQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdJQ0JqYUdGdVoyVmtWbUZzZFdWekxuQjFjMmdvYTJWNUtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQmphR0Z1WjJWa1ZtRnNkV1Z6TG5OdmNuUW9jMjl5ZEZSeVlXNXpabTl5YlZCeWIzQnpLVHRjYmx4dUlDQXZMeUJPYjNjZ2NuVnVJSFJvY205MVoyZ2daV0ZqYUNCd2NtOXdaWEowZVN3Z1lXNWtJR1JsWTJsa1pTQjNhR2xqYUNCcGN5QmhJSEJzWVdsdUlITjBlV3hsSUhCeWIzQnpMRnh1SUNBdkx5QmhJSFJ5WVc1elptOXliU0J3Y205d1pYSjBlU0JoYm1RZ1ExTlRJSFpoY25NZ1lXNWtJR2hoYm1Sc1pTQmhZMk52Y21ScGJtZHNlVnh1SUNCamIyNXpkQ0IwYjNSaGJFNTFiVU5vWVc1blpXUldZV3gxWlhNZ1BTQmphR0Z1WjJWa1ZtRnNkV1Z6TG14bGJtZDBhRHRjYmlBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBiM1JoYkU1MWJVTm9ZVzVuWldSV1lXeDFaWE03SUdrckt5a2dlMXh1SUNBZ0lHeGxkQ0JyWlhrZ1BTQmphR0Z1WjJWa1ZtRnNkV1Z6VzJsZE8xeHVJQ0FnSUd4bGRDQjJZV3gxWlNBOUlITjBZWFJsVzJ0bGVWMDdYRzVjYmlBZ0lDQnBaaUFvZEhKaGJuTnNZWFJsVFdGd1cydGxlVjBwSUh0Y2JpQWdJQ0FnSUd0bGVTQTlJSFJ5WVc1emJHRjBaVTFoY0Z0clpYbGRPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRWxtSUhSb2FYTWdhWE1nWVNCdWRXMWlaWElnYjNJZ2IySnFaV04wSUdGdVpDQjNaU0JvWVhabElHWnBiSFJsY2l3Z1lYQndiSGtnWm1sc2RHVnlYRzRnSUNBZ2FXWWdLSFpoYkhWbFZIbHdaWE5iYTJWNVhTQW1KaUFvYVhOT2RXMG9kbUZzZFdVcElIeDhJR2x6VDJKcUtIWmhiSFZsS1NrZ0ppWWdkbUZzZFdWVWVYQmxjMXRyWlhsZExuUnlZVzV6Wm05eWJTa2dlMXh1SUNBZ0lDQWdkbUZzZFdVZ1BTQjJZV3gxWlZSNWNHVnpXMnRsZVYwdWRISmhibk5tYjNKdEtIWmhiSFZsS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCSlppQmhJSFJ5WVc1elptOXliU0J3Y205d0xDQmhaR1FnZEc4Z2RISmhibk5tYjNKdElITjBjbWx1WjF4dUlDQWdJR2xtSUNoMGNtRnVjMlp2Y20xUWNtOXdjMXRyWlhsZEtTQjdYRzRnSUNBZ0lDQjBjbUZ1YzJadmNtMVRkSEpwYm1jZ0t6MGdhMlY1SUNzZ0p5Z25JQ3NnZG1Gc2RXVWdLeUFuS1NBbk8xeHVJQ0FnSUNBZ2RISmhibk5tYjNKdFNHRnpXaUE5SUNoclpYa2dQVDA5SUhSeVlXNXpiR0YwWlUxaGNDNTZLU0EvSUhSeWRXVWdPaUIwY21GdWMyWnZjbTFJWVhOYU8xeHVYRzRnSUNBZ0x5OGdUM0lnYVdZZ1lTQnphVzF3YkdVZ1ExTlRJSEJ5YjNCbGNuUjVMQ0J6WlhSY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdjSEp2Y0dWeWRIbFRkSEpwYm1jZ0t6MGdKenNuSUNzZ2NISmxabWw0WlhJb2EyVjVMQ0IwY25WbEtTQXJJQ2M2SnlBcklIWmhiSFZsTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4dklFbG1JSGRsSUdoaGRtVWdkSEpoYm5ObWIzSnRJSEJ5YjNCekxDQmlkV2xzWkNCaElIUnlZVzV6Wm05eWJTQnpkSEpwYm1kY2JpQWdhV1lnS0doaGMxUnlZVzV6Wm05eWJTa2dlMXh1SUNBZ0lHbG1JQ2doZEhKaGJuTm1iM0p0U0dGeldpQW1KaUJsYm1GaWJHVklZWEprZDJGeVpVRmpZMlZzWlhKaGRHbHZiaWtnZTF4dUlDQWdJQ0FnZEhKaGJuTm1iM0p0VTNSeWFXNW5JQ3M5SUhSeVlXNXpiR0YwWlUxaGNDNTZJQ3NnSnlnd0tTYzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NISnZjR1Z5ZEhsVGRISnBibWNnS3owZ0p6c25JQ3NnY0hKbFptbDRaWElvSjNSeVlXNXpabTl5YlNjc0lIUnlkV1VwSUNzZ0p6b25JQ3NnZEhKaGJuTm1iM0p0VTNSeWFXNW5PMXh1SUNCOVhHNWNiaUFnWld4bGJXVnVkQzV6ZEhsc1pTNWpjM05VWlhoMElDczlJSEJ5YjNCbGNuUjVVM1J5YVc1bk8xeHVmVnh1SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JlbmRlcmVycy9jc3MvcmVuZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgU1ZHUmVuZGVyZXIoX2V4dGVuZHMoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU1ZHUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhTVkdSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBTVkdSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTVkdSZW5kZXJlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVuZGVyZXIuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgdmFyIF9wcm9wcyRlbGVtZW50JGdldEJCbyA9IHByb3BzLmVsZW1lbnQuZ2V0QkJveCgpLFxuICAgICAgICB4ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLngsXG4gICAgICAgIHkgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueSxcbiAgICAgICAgd2lkdGggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby5oZWlnaHQ7XG5cbiAgICBfdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHsgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFNWR1JlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgdmFyIGF0dHJzID0gKDAsIF9idWlsZDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgdGhpcy5lbGVtZW50RGltZW5zaW9ucyk7XG4gICAgKDAsIF91dGlscy5zZXRET01BdHRycykoZWxlbWVudCwgYXR0cnMpO1xuICB9O1xuXG4gIFNWR1JlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cblxuICAgIGlmICghX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmFsdWVUeXBlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRba2V5XTtcbiAgICAgIHJldHVybiB2YWx1ZVR5cGUgPyB2YWx1ZVR5cGUuZGVmYXVsdCA6IDA7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTVkdSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSW1Wc1pXMWxiblFpTENKd2NtOXdjeUlzSWxOV1IxSmxibVJsY21WeUlpd2laMlYwUWtKdmVDSXNJbmdpTENKNUlpd2lkMmxrZEdnaUxDSm9aV2xuYUhRaUxDSmxiR1Z0Wlc1MFJHbHRaVzV6YVc5dWN5SXNJbTl1VW1WdVpHVnlJaXdpWVhSMGNuTWlMQ0p6ZEdGMFpTSXNJbTl1VW1WaFpDSXNJbXRsZVNJc0ltZGxkRUYwZEhKcFluVjBaU0lzSW5aaGJIVmxWSGx3WlNJc0ltUmxabUYxYkhRaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dHJRa0ZuUTJVc1ZVRkJWVUVzVDBGQlZpeEZRVUZ0UWtNc1MwRkJia0lzUlVGQk1FSTdRVUZEZGtNc1UwRkJUeXhKUVVGSlF5eFhRVUZLTzBGQlEweEdPMEZCUkVzc1MwRkZSa01zUzBGR1JTeEZRVUZRTzBGQlNVUXNRenM3UVVGeVEwUTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096czdPenM3T3p0SlFVVk5ReXhYT3pzN1FVRkRTaXgxUWtGQldVUXNTMEZCV2l4RlFVRnRRanRCUVVGQk96dEJRVUZCTEdsRVFVTnFRaXh4UWtGQlRVRXNTMEZCVGl4RFFVUnBRanM3UVVGQlFTeG5RMEZIWlVFc1RVRkJUVVFzVDBGQlRpeERRVUZqUnl4UFFVRmtMRVZCU0dZN1FVRkJRU3hSUVVkVVF5eERRVWhUTEhsQ1FVZFVRU3hEUVVoVE8wRkJRVUVzVVVGSFRrTXNRMEZJVFN4NVFrRkhUa0VzUTBGSVRUdEJRVUZCTEZGQlIwaERMRXRCU0Vjc2VVSkJSMGhCTEV0QlNFYzdRVUZCUVN4UlFVZEpReXhOUVVoS0xIbENRVWRKUVN4TlFVaEtPenRCUVVscVFpeFZRVUZMUXl4cFFrRkJUQ3hIUVVGNVFpeEZRVUZGU2l4SlFVRkdMRVZCUVV0RExFbEJRVXdzUlVGQlVVTXNXVUZCVWl4RlFVRmxReXhqUVVGbUxFVkJRWHBDTzBGQlNtbENPMEZCUzJ4Q096dDNRa0ZGUkVVc1VTeDFRa0ZCVnp0QlFVRkJMRkZCUTBSVUxFOUJSRU1zUjBGRFZ5eExRVUZMUXl4TFFVUm9RaXhEUVVORVJDeFBRVVJET3p0QlFVVlVMRkZCUVUxVkxGRkJRVkVzY1VKQlFVMHNTMEZCUzBNc1MwRkJXQ3hGUVVGclFpeExRVUZMU0N4cFFrRkJka0lzUTBGQlpEdEJRVU5CTERSQ1FVRlpVaXhQUVVGYUxFVkJRWEZDVlN4TFFVRnlRanRCUVVORUxFYzdPM2RDUVVWRVJTeE5MRzFDUVVGUFF5eEhMRVZCUVVzN1FVRkJRU3hSUVVOR1lpeFBRVVJGTEVkQlExVXNTMEZCUzBNc1MwRkVaaXhEUVVOR1JDeFBRVVJGT3pzN1FVRkhWaXhSUVVGSkxFTkJRVU1zZVVKQlFXVmhMRWRCUVdZc1EwRkJUQ3hGUVVFd1FqdEJRVU40UWl4aFFVRlBZaXhSUVVGUll5eFpRVUZTTEVOQlFYRkNSQ3hIUVVGeVFpeERRVUZRTzBGQlEwUXNTMEZHUkN4TlFVVlBPMEZCUTB3c1ZVRkJUVVVzV1VGQldTeHhRa0ZCWVVZc1IwRkJZaXhEUVVGc1FqdEJRVU5CTEdGQlFWRkZMRk5CUVVRc1IwRkJZMEVzVlVGQlZVTXNUMEZCZUVJc1IwRkJhME1zUTBGQmVrTTdRVUZEUkR0QlFVTkdMRWNpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1VtVnVaR1Z5WlhJZ1puSnZiU0FuTGk0dkp6dGNibWx0Y0c5eWRDQmlkV2xzWkNCbWNtOXRJQ2N1TDJKMWFXeGtKenRjYm1sdGNHOXlkQ0IwY21GdWMyWnZjbTFRY205d2N5Qm1jbTl0SUNjdUxpOWpjM012ZEhKaGJuTm1iM0p0TFhCeWIzQnpKenRjYm1sdGNHOXlkQ0IyWVd4MVpWUjVjR1ZOWVhBZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5YzdYRzVwYlhCdmNuUWdleUJ6WlhSRVQwMUJkSFJ5Y3lCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtTnNZWE56SUZOV1IxSmxibVJsY21WeUlHVjRkR1Z1WkhNZ1VtVnVaR1Z5WlhJZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeWtnZTF4dUlDQWdJSE4xY0dWeUtIQnliM0J6S1R0Y2JseHVJQ0FnSUdOdmJuTjBJSHNnZUN3Z2VTd2dkMmxrZEdnc0lHaGxhV2RvZENCOUlEMGdjSEp2Y0hNdVpXeGxiV1Z1ZEM1blpYUkNRbTk0S0NrN1hHNGdJQ0FnZEdocGN5NWxiR1Z0Wlc1MFJHbHRaVzV6YVc5dWN5QTlJSHNnZUN3Z2VTd2dkMmxrZEdnc0lHaGxhV2RvZENCOU8xeHVJQ0I5WEc1Y2JpQWdiMjVTWlc1a1pYSW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmxiR1Z0Wlc1MElIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR052Ym5OMElHRjBkSEp6SUQwZ1luVnBiR1FvZEdocGN5NXpkR0YwWlN3Z2RHaHBjeTVsYkdWdFpXNTBSR2x0Wlc1emFXOXVjeWs3WEc0Z0lDQWdjMlYwUkU5TlFYUjBjbk1vWld4bGJXVnVkQ3dnWVhSMGNuTXBPMXh1SUNCOVhHNWNiaUFnYjI1U1pXRmtLR3RsZVNrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWld4bGJXVnVkQ0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNibHh1SUNBZ0lHbG1JQ2doZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdWc1pXMWxiblF1WjJWMFFYUjBjbWxpZFhSbEtHdGxlU2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHTnZibk4wSUhaaGJIVmxWSGx3WlNBOUlIWmhiSFZsVkhsd1pVMWhjRnRyWlhsZE8xeHVJQ0FnSUNBZ2NtVjBkWEp1SUNoMllXeDFaVlI1Y0dVcElEOGdkbUZzZFdWVWVYQmxMbVJsWm1GMWJIUWdPaUF3TzF4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUFvWld4bGJXVnVkQ3dnY0hKdmNITXBJSHRjYmlBZ2NtVjBkWEp1SUc1bGR5QlRWa2RTWlc1a1pYSmxjaWg3WEc0Z0lDQWdaV3hsYldWdWRDeGNiaUFnSUNBdUxpNXdjbTl3YzF4dUlDQjlLVHRjYm4xY2JpSmRmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVuZGVyZXJzL3N2Zy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBkYXRhKSB7XG4gIHZhciBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDE7XG4gIHZhciBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMTtcbiAgdmFyIHRyYW5zZm9ybU9yaWdpblggPSBkYXRhLndpZHRoICogKChzdGF0ZS5vcmlnaW5YIHx8IDUwKSAvIDEwMCkgKyBkYXRhLng7XG4gIHZhciB0cmFuc2Zvcm1PcmlnaW5ZID0gZGF0YS5oZWlnaHQgKiAoKHN0YXRlLm9yaWdpblkgfHwgNTApIC8gMTAwKSArIGRhdGEueTtcbiAgdmFyIHNjYWxlVHJhbnNmb3JtWCA9IC10cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSk7XG4gIHZhciBzY2FsZVRyYW5zZm9ybVkgPSAtdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKTtcbiAgdmFyIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGU7XG4gIHZhciBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWTtcbiAgdmFyIHRyYW5zZm9ybSA9IHtcbiAgICB0cmFuc2xhdGU6ICd0cmFuc2xhdGUoJyArIHN0YXRlLnRyYW5zbGF0ZVggKyAnLCAnICsgc3RhdGUudHJhbnNsYXRlWSArICcpICcsXG4gICAgc2NhbGU6ICd0cmFuc2xhdGUoJyArIHNjYWxlVHJhbnNmb3JtWCArICcsICcgKyBzY2FsZVRyYW5zZm9ybVkgKyAnKSBzY2FsZSgnICsgc2NhbGUgKyAnLCAnICsgc2NhbGVZICsgJykgdHJhbnNsYXRlKCcgKyBzY2FsZVJlcGxhY2VYICsgJywgJyArIHNjYWxlUmVwbGFjZVkgKyAnKSAnLFxuICAgIHJvdGF0ZTogJ3JvdGF0ZSgnICsgc3RhdGUucm90YXRlICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblggKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWSArICcpICcsXG4gICAgc2tld1g6ICdza2V3WCgnICsgc3RhdGUuc2tld1ggKyAnKSAnLFxuICAgIHNrZXdZOiAnc2tld1koJyArIHN0YXRlLnNrZXdZICsgJykgJ1xuICB9O1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzWygwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICBmb3IgKHZhciBfa2V5IGluIHRyYW5zZm9ybSkge1xuICAgICAgaWYgKHRyYW5zZm9ybS5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gX2tleSA9PT0gJ3NjYWxlJyA/ICcxJyA6ICcwJztcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtfa2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MMkoxYVd4a0xtcHpJbDBzSW01aGJXVnpJanBiSW1KMWFXeGtJaXdpV2tWU1QxOU9UMVJmV2tWU1R5SXNJbk4wWVhSbElpd2laR0YwWVNJc0ltaGhjMVJ5WVc1elptOXliU0lzSW5CeWIzQnpJaXdpYzJOaGJHVWlMQ0oxYm1SbFptbHVaV1FpTENKelkyRnNaVmdpTENKelkyRnNaVmtpTENKMGNtRnVjMlp2Y20xUGNtbG5hVzVZSWl3aWQybGtkR2dpTENKdmNtbG5hVzVZSWl3aWVDSXNJblJ5WVc1elptOXliVTl5YVdkcGJsa2lMQ0pvWldsbmFIUWlMQ0p2Y21sbmFXNVpJaXdpZVNJc0luTmpZV3hsVkhKaGJuTm1iM0p0V0NJc0luTmpZV3hsVkhKaGJuTm1iM0p0V1NJc0luTmpZV3hsVW1Wd2JHRmpaVmdpTENKelkyRnNaVkpsY0d4aFkyVlpJaXdpZEhKaGJuTm1iM0p0SWl3aWRISmhibk5zWVhSbElpd2lkSEpoYm5Oc1lYUmxXQ0lzSW5SeVlXNXpiR0YwWlZraUxDSnliM1JoZEdVaUxDSnphMlYzV0NJc0luTnJaWGRaSWl3aWEyVjVJaXdpYUdGelQzZHVVSEp2Y0dWeWRIa2lMQ0prWldaaGRXeDBWbUZzZFdVaUxDSnlaWEJzWVdObElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJTM2RDUVN4TE96dEJRVXg0UWpzN1FVRkRRVHM3T3pzN08wRkJSVUVzU1VGQlRVTXNaMEpCUVdkQ0xFMUJRWFJDT3p0QlFVVmxMRk5CUVZORUxFdEJRVlFzUTBGQlpVVXNTMEZCWml4RlFVRnpRa01zU1VGQmRFSXNSVUZCTkVJN1FVRkRla01zVFVGQlNVTXNaVUZCWlN4TFFVRnVRanRCUVVOQkxFMUJRVTFETEZGQlFWRXNSVUZCWkR0QlFVTkJMRTFCUVUxRExGRkJRVkZLTEUxQlFVMUpMRXRCUVU0c1MwRkJaMEpETEZOQlFXaENMRWRCUVRSQ1RDeE5RVUZOU1N4TFFVRk9MRWxCUVdWTUxHRkJRVE5ETEVkQlFUSkVReXhOUVVGTlRTeE5RVUZPTEVsQlFXZENMRU5CUVhwR08wRkJRMEVzVFVGQlRVTXNVMEZCVTFBc1RVRkJUVThzVFVGQlRpeExRVUZwUWtZc1UwRkJha0lzUjBGQk5rSk1MRTFCUVUxUExFMUJRVTRzU1VGQlowSlNMR0ZCUVRkRExFZEJRVFpFU3l4VFFVRlRMRU5CUVhKR08wRkJRMEVzVFVGQlRVa3NiVUpCUVcxQ1VDeExRVUZMVVN4TFFVRk1MRWxCUVdNc1EwRkJRMVFzVFVGQlRWVXNUMEZCVGl4SlFVRnBRaXhGUVVGc1FpeEpRVUYzUWl4SFFVRjBReXhKUVVFMlExUXNTMEZCUzFVc1EwRkJNMFU3UVVGRFFTeE5RVUZOUXl4dFFrRkJiVUpZTEV0QlFVdFpMRTFCUVV3c1NVRkJaU3hEUVVGRFlpeE5RVUZOWXl4UFFVRk9MRWxCUVdsQ0xFVkJRV3hDTEVsQlFYZENMRWRCUVhaRExFbEJRVGhEWWl4TFFVRkxZeXhEUVVFMVJUdEJRVU5CTEUxQlFVMURMR3RDUVVGclFpeERRVUZGVWl4blFrRkJSaXhKUVVGelFrb3NVVUZCVVN4RFFVRTVRaXhEUVVGNFFqdEJRVU5CTEUxQlFVMWhMR3RDUVVGclFpeERRVUZGVEN4blFrRkJSaXhKUVVGelFrd3NVMEZCVXl4RFFVRXZRaXhEUVVGNFFqdEJRVU5CTEUxQlFVMVhMR2RDUVVGblFsWXNiVUpCUVcxQ1NpeExRVUY2UXp0QlFVTkJMRTFCUVUxbExHZENRVUZuUWxBc2JVSkJRVzFDVEN4TlFVRjZRenRCUVVOQkxFMUJRVTFoTEZsQlFWazdRVUZEYUVKRExEaENRVUYzUW5KQ0xFMUJRVTF6UWl4VlFVRTVRaXhWUVVFMlEzUkNMRTFCUVUxMVFpeFZRVUZ1UkN4UFFVUm5RanRCUVVWb1FtNUNMREJDUVVGdlFsa3NaVUZCY0VJc1ZVRkJkME5ETEdWQlFYaERMR2RDUVVGclJXSXNTMEZCYkVVc1ZVRkJORVZITEUxQlFUVkZMRzlDUVVGcFIxY3NZVUZCYWtjc1ZVRkJiVWhETEdGQlFXNUlMRTlCUm1kQ08wRkJSMmhDU3l4M1FrRkJhMEo0UWl4TlFVRk5kMElzVFVGQmVFSXNWVUZCYlVOb1FpeG5Ra0ZCYmtNc1ZVRkJkMFJKTEdkQ1FVRjRSQ3hQUVVoblFqdEJRVWxvUW1Fc2MwSkJRV2RDZWtJc1RVRkJUWGxDTEV0QlFYUkNMRTlCU21kQ08wRkJTMmhDUXl4elFrRkJaMEl4UWl4TlFVRk5NRUlzUzBGQmRFSTdRVUZNWjBJc1IwRkJiRUk3TzBGQlVVRXNUMEZCU3l4SlFVRkpReXhIUVVGVUxFbEJRV2RDTTBJc1MwRkJhRUlzUlVGQmRVSTdRVUZEY2tJc1VVRkJTVUVzVFVGQlRUUkNMR05CUVU0c1EwRkJjVUpFTEVkQlFYSkNMRU5CUVVvc1JVRkJLMEk3UVVGRE4wSXNWVUZCU1N4NVFrRkJaVUVzUjBGQlppeERRVUZLTEVWQlFYbENPMEZCUTNaQ2VrSXNkVUpCUVdVc1NVRkJaanRCUVVORUxFOUJSa1FzVFVGRlR6dEJRVU5NUXl4alFVRk5MSGRDUVVGWmQwSXNSMEZCV2l4RFFVRk9MRWxCUVRCQ00wSXNUVUZCVFRKQ0xFZEJRVTRzUTBGQk1VSTdRVUZEUkR0QlFVTkdPMEZCUTBZN08wRkJSVVFzVFVGQlNYcENMRmxCUVVvc1JVRkJhMEk3UVVGRGFFSkRMRlZCUVUxcFFpeFRRVUZPTEVkQlFXdENMRVZCUVd4Q096dEJRVVZCTEZOQlFVc3NTVUZCU1U4c1NVRkJWQ3hKUVVGblFsQXNVMEZCYUVJc1JVRkJNa0k3UVVGRGVrSXNWVUZCU1VFc1ZVRkJWVkVzWTBGQlZpeERRVUY1UWtRc1NVRkJla0lzUTBGQlNpeEZRVUZ0UXp0QlFVTnFReXhaUVVGTlJTeGxRVUZuUWtZc1UwRkJVU3hQUVVGVUxFZEJRVzlDTEVkQlFYQkNMRWRCUVRCQ0xFZEJRUzlETzBGQlEwRjRRaXhqUVVGTmFVSXNVMEZCVGl4SlFVRnRRa0VzVlVGQlZVOHNTVUZCVml4RlFVRmxSeXhQUVVGbUxFTkJRWFZDTEZsQlFYWkNMRVZCUVhGRFJDeFpRVUZ5UXl4RFFVRnVRanRCUVVORU8wRkJRMFk3UVVGRFJqczdRVUZGUkN4VFFVRlBNVUlzUzBGQlVEdEJRVU5FSWl3aVptbHNaU0k2SW1KMWFXeGtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZMkZ0Wld4VWIwUmhjMmdnZlNCbWNtOXRJQ2N1TGk4dUxpOXBibU12ZFhScGJITW5PMXh1YVcxd2IzSjBJSFJ5WVc1elptOXliVkJ5YjNCeklHWnliMjBnSnk0dUwyTnpjeTkwY21GdWMyWnZjbTB0Y0hKdmNITW5PMXh1WEc1amIyNXpkQ0JhUlZKUFgwNVBWRjlhUlZKUElEMGdNQzR3TURBeE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmlkV2xzWkNoemRHRjBaU3dnWkdGMFlTa2dlMXh1SUNCc1pYUWdhR0Z6VkhKaGJuTm1iM0p0SUQwZ1ptRnNjMlU3WEc0Z0lHTnZibk4wSUhCeWIzQnpJRDBnZTMwN1hHNGdJR052Ym5OMElITmpZV3hsSUQwZ2MzUmhkR1V1YzJOaGJHVWdJVDA5SUhWdVpHVm1hVzVsWkNBL0lITjBZWFJsTG5OallXeGxJSHg4SUZwRlVrOWZUazlVWDFwRlVrOGdPaUJ6ZEdGMFpTNXpZMkZzWlZnZ2ZId2dNVHRjYmlBZ1kyOXVjM1FnYzJOaGJHVlpJRDBnYzNSaGRHVXVjMk5oYkdWWklDRTlQU0IxYm1SbFptbHVaV1FnUHlCemRHRjBaUzV6WTJGc1pWa2dmSHdnV2tWU1QxOU9UMVJmV2tWU1R5QTZJSE5qWVd4bElIeDhJREU3WEc0Z0lHTnZibk4wSUhSeVlXNXpabTl5YlU5eWFXZHBibGdnUFNCa1lYUmhMbmRwWkhSb0lDb2dLQ2h6ZEdGMFpTNXZjbWxuYVc1WUlIeDhJRFV3S1NBdklERXdNQ2tnS3lCa1lYUmhMbmc3WEc0Z0lHTnZibk4wSUhSeVlXNXpabTl5YlU5eWFXZHBibGtnUFNCa1lYUmhMbWhsYVdkb2RDQXFJQ2dvYzNSaGRHVXViM0pwWjJsdVdTQjhmQ0ExTUNrZ0x5QXhNREFwSUNzZ1pHRjBZUzU1TzF4dUlDQmpiMjV6ZENCelkyRnNaVlJ5WVc1elptOXliVmdnUFNBdElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ0tpQW9jMk5oYkdVZ0tpQXhLVHRjYmlBZ1kyOXVjM1FnYzJOaGJHVlVjbUZ1YzJadmNtMVpJRDBnTFNCMGNtRnVjMlp2Y20xUGNtbG5hVzVaSUNvZ0tITmpZV3hsV1NBcUlERXBPMXh1SUNCamIyNXpkQ0J6WTJGc1pWSmxjR3hoWTJWWUlEMGdkSEpoYm5ObWIzSnRUM0pwWjJsdVdDQXZJSE5qWVd4bE8xeHVJQ0JqYjI1emRDQnpZMkZzWlZKbGNHeGhZMlZaSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V1NBdklITmpZV3hsV1R0Y2JpQWdZMjl1YzNRZ2RISmhibk5tYjNKdElEMGdlMXh1SUNBZ0lIUnlZVzV6YkdGMFpUb2dZSFJ5WVc1emJHRjBaU2drZTNOMFlYUmxMblJ5WVc1emJHRjBaVmg5TENBa2UzTjBZWFJsTG5SeVlXNXpiR0YwWlZsOUtTQmdMRnh1SUNBZ0lITmpZV3hsT2lCZ2RISmhibk5zWVhSbEtDUjdjMk5oYkdWVWNtRnVjMlp2Y20xWWZTd2dKSHR6WTJGc1pWUnlZVzV6Wm05eWJWbDlLU0J6WTJGc1pTZ2tlM05qWVd4bGZTd2dKSHR6WTJGc1pWbDlLU0IwY21GdWMyeGhkR1VvSkh0elkyRnNaVkpsY0d4aFkyVllmU3dnSkh0elkyRnNaVkpsY0d4aFkyVlpmU2tnWUN4Y2JpQWdJQ0J5YjNSaGRHVTZJR0J5YjNSaGRHVW9KSHR6ZEdGMFpTNXliM1JoZEdWOUxDQWtlM1J5WVc1elptOXliVTl5YVdkcGJsaDlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGw5S1NCZ0xGeHVJQ0FnSUhOclpYZFlPaUJnYzJ0bGQxZ29KSHR6ZEdGMFpTNXphMlYzV0gwcElHQXNYRzRnSUNBZ2MydGxkMWs2SUdCemEyVjNXU2drZTNOMFlYUmxMbk5yWlhkWmZTa2dZRnh1SUNCOU8xeHVYRzRnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ6ZEdGMFpTa2dlMXh1SUNBZ0lHbG1JQ2h6ZEdGMFpTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0JwWmlBb2RISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTa2dlMXh1SUNBZ0lDQWdJQ0JvWVhOVWNtRnVjMlp2Y20wZ1BTQjBjblZsTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnY0hKdmNITmJZMkZ0Wld4VWIwUmhjMmdvYTJWNUtWMGdQU0J6ZEdGMFpWdHJaWGxkTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdsbUlDaG9ZWE5VY21GdWMyWnZjbTBwSUh0Y2JpQWdJQ0J3Y205d2N5NTBjbUZ1YzJadmNtMGdQU0FuSnp0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIwY21GdWMyWnZjbTBwSUh0Y2JpQWdJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMHVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JrWldaaGRXeDBWbUZzZFdVZ1BTQW9hMlY1SUQwOVBTQW5jMk5oYkdVbktTQS9JQ2N4SnlBNklDY3dKenRjYmlBZ0lDQWdJQ0FnY0hKdmNITXVkSEpoYm5ObWIzSnRJQ3M5SUhSeVlXNXpabTl5YlZ0clpYbGRMbkpsY0d4aFkyVW9MM1Z1WkdWbWFXNWxaQzluTENCa1pXWmhkV3gwVm1Gc2RXVXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQndjbTl3Y3p0Y2JuMWNiaUpkZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JlbmRlcmVycy9zdmcvYnVpbGQuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBmaWxsOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgc3Ryb2tlOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgc2NhbGU6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVg6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVk6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBvcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYSxcbiAgZmlsbE9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhLFxuICBzdHJva2VPcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwzWmhiSFZsTFhSNWNHVnpMbXB6SWwwc0ltNWhiV1Z6SWpwYkltWnBiR3dpTENKemRISnZhMlVpTENKelkyRnNaU0lzSW5OallXeGxXQ0lzSW5OallXeGxXU0lzSW05d1lXTnBkSGtpTENKbWFXeHNUM0JoWTJsMGVTSXNJbk4wY205clpVOXdZV05wZEhraVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3YTBKQlJXVTdRVUZEWWtFc2VVSkJSR0U3UVVGRllrTXNNa0pCUm1FN1FVRkhZa01zTUVKQlNHRTdRVUZKWWtNc01rSkJTbUU3UVVGTFlrTXNNa0pCVEdFN1FVRk5Za01zTkVKQlRtRTdRVUZQWWtNc1owTkJVR0U3UVVGUllrTTdRVUZTWVN4RElpd2labWxzWlNJNkluWmhiSFZsTFhSNWNHVnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZV3h3YUdFc0lHTnZiRzl5TENCelkyRnNaU0I5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkyWVd4MVpTMTBlWEJsY3ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnWm1sc2JEb2dZMjlzYjNJc1hHNGdJSE4wY205clpUb2dZMjlzYjNJc1hHNGdJSE5qWVd4bE9pQnpZMkZzWlN4Y2JpQWdjMk5oYkdWWU9pQnpZMkZzWlN4Y2JpQWdjMk5oYkdWWk9pQnpZMkZzWlN4Y2JpQWdiM0JoWTJsMGVUb2dZV3h3YUdFc1hHNGdJR1pwYkd4UGNHRmphWFI1T2lCaGJIQm9ZU3hjYmlBZ2MzUnliMnRsVDNCaFkybDBlVG9nWVd4d2FHRmNibjA3SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JlbmRlcmVycy9zdmcvdmFsdWUtdHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBTVkdQYXRoUmVuZGVyZXIoX2V4dGVuZHMoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFNWR1BhdGhSZW5kZXJlciA9IGZ1bmN0aW9uIChfUmVuZGVyZXIpIHtcbiAgX2luaGVyaXRzKFNWR1BhdGhSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBTVkdQYXRoUmVuZGVyZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU1ZHUGF0aFJlbmRlcmVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICB2YXIgX3Byb3BzJGVsZW1lbnQkZ2V0QkJvID0gcHJvcHMuZWxlbWVudC5nZXRCQm94KCksXG4gICAgICAgIHggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueCxcbiAgICAgICAgeSA9IF9wcm9wcyRlbGVtZW50JGdldEJCby55LFxuICAgICAgICB3aWR0aCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLmhlaWdodDtcblxuICAgIF90aGlzLmVsZW1lbnREaW1lbnNpb25zID0ge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHksXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHBhdGhMZW5ndGg6IHByb3BzLmVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU1ZHUGF0aFJlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBwYXRoTGVuZ3RoID0gdGhpcy5lbGVtZW50RGltZW5zaW9ucy5wYXRoTGVuZ3RoO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgKDAsIF91dGlscy5zZXRET01BdHRycykoZWxlbWVudCwgKDAsIF9idWlsZDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgcGF0aExlbmd0aCkpO1xuICB9O1xuXG4gIFNWR1BhdGhSZW5kZXJlci5wcm90b3R5cGUub25SZWFkID0gZnVuY3Rpb24gb25SZWFkKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gIH07XG5cbiAgcmV0dXJuIFNWR1BhdGhSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MWEJoZEdndmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sc2laV3hsYldWdWRDSXNJbkJ5YjNCeklpd2lVMVpIVUdGMGFGSmxibVJsY21WeUlpd2laMlYwUWtKdmVDSXNJbmdpTENKNUlpd2lkMmxrZEdnaUxDSm9aV2xuYUhRaUxDSmxiR1Z0Wlc1MFJHbHRaVzV6YVc5dWN5SXNJbkJoZEdoTVpXNW5kR2dpTENKblpYUlViM1JoYkV4bGJtZDBhQ0lzSW05dVVtVnVaR1Z5SWl3aWMzUmhkR1VpTENKdmJsSmxZV1FpTENKclpYa2lMQ0puWlhSQmRIUnlhV0oxZEdVaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dHJRa0UyUW1Vc1ZVRkJWVUVzVDBGQlZpeEZRVUZ0UWtNc1MwRkJia0lzUlVGQk1FSTdRVUZEZGtNc1UwRkJUeXhKUVVGSlF5eGxRVUZLTzBGQlEweEdPMEZCUkVzc1MwRkZSa01zUzBGR1JTeEZRVUZRTzBGQlNVUXNRenM3UVVGc1EwUTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3T3pzN08wbEJSVTFETEdVN096dEJRVU5LTERKQ1FVRlpSQ3hMUVVGYUxFVkJRVzFDTzBGQlFVRTdPMEZCUVVFc2FVUkJRMnBDTEhGQ1FVRk5RU3hMUVVGT0xFTkJSR2xDT3p0QlFVRkJMR2REUVVkbFFTeE5RVUZOUkN4UFFVRk9MRU5CUVdOSExFOUJRV1FzUlVGSVpqdEJRVUZCTEZGQlIxUkRMRU5CU0ZNc2VVSkJSMVJCTEVOQlNGTTdRVUZCUVN4UlFVZE9ReXhEUVVoTkxIbENRVWRPUVN4RFFVaE5PMEZCUVVFc1VVRkhTRU1zUzBGSVJ5eDVRa0ZIU0VFc1MwRklSenRCUVVGQkxGRkJSMGxETEUxQlNFb3NlVUpCUjBsQkxFMUJTRW83TzBGQlNXcENMRlZCUVV0RExHbENRVUZNTEVkQlFYbENPMEZCUTNaQ1NpeFZRVVIxUWp0QlFVVjJRa01zVlVGR2RVSTdRVUZIZGtKRExHdENRVWgxUWp0QlFVbDJRa01zYjBKQlNuVkNPMEZCUzNaQ1JTeHJRa0ZCV1ZJc1RVRkJUVVFzVDBGQlRpeERRVUZqVlN4alFVRmtPMEZCVEZjc1MwRkJla0k3UVVGS2FVSTdRVUZYYkVJN096UkNRVVZFUXl4UkxIVkNRVUZYTzBGQlFVRXNVVUZEUkVZc1ZVRkVReXhIUVVOakxFdEJRVXRFTEdsQ1FVUnVRaXhEUVVORVF5eFZRVVJETzBGQlFVRXNVVUZGUkZRc1QwRkdReXhIUVVWWExFdEJRVXRETEV0QlJtaENMRU5CUlVSRUxFOUJSa003TzBGQlIxUXNORUpCUVZsQkxFOUJRVm9zUlVGQmNVSXNjVUpCUVUwc1MwRkJTMWtzUzBGQldDeEZRVUZyUWtnc1ZVRkJiRUlzUTBGQmNrSTdRVUZEUkN4SE96czBRa0ZGUkVrc1RTeHRRa0ZCVDBNc1J5eEZRVUZMTzBGQlExWXNWMEZCVHl4TFFVRkxZaXhMUVVGTUxFTkJRVmRFTEU5QlFWZ3NRMEZCYlVKbExGbEJRVzVDTEVOQlFXZERSQ3hIUVVGb1F5eERRVUZRTzBGQlEwUXNSeUlzSW1acGJHVWlPaUpwYm1SbGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCU1pXNWtaWEpsY2lCbWNtOXRJQ2N1TGk4bk8xeHVhVzF3YjNKMElHSjFhV3hrSUdaeWIyMGdKeTR2WW5WcGJHUW5PMXh1YVcxd2IzSjBJSHNnYzJWMFJFOU5RWFIwY25NZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWpiR0Z6Y3lCVFZrZFFZWFJvVW1WdVpHVnlaWElnWlhoMFpXNWtjeUJTWlc1a1pYSmxjaUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ2MzVndaWElvY0hKdmNITXBPMXh1WEc0Z0lDQWdZMjl1YzNRZ2V5QjRMQ0I1TENCM2FXUjBhQ3dnYUdWcFoyaDBJSDBnUFNCd2NtOXdjeTVsYkdWdFpXNTBMbWRsZEVKQ2IzZ29LVHRjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblJFYVcxbGJuTnBiMjV6SUQwZ2UxeHVJQ0FnSUNBZ2VDeGNiaUFnSUNBZ0lIa3NYRzRnSUNBZ0lDQjNhV1IwYUN4Y2JpQWdJQ0FnSUdobGFXZG9kQ3hjYmlBZ0lDQWdJSEJoZEdoTVpXNW5kR2c2SUhCeWIzQnpMbVZzWlcxbGJuUXVaMlYwVkc5MFlXeE1aVzVuZEdnb0tWeHVJQ0FnSUgwN1hHNGdJSDFjYmx4dUlDQnZibEpsYm1SbGNpZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lIQmhkR2hNWlc1bmRHZ2dmU0E5SUhSb2FYTXVaV3hsYldWdWRFUnBiV1Z1YzJsdmJuTTdYRzRnSUNBZ1kyOXVjM1FnZXlCbGJHVnRaVzUwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lITmxkRVJQVFVGMGRISnpLR1ZzWlcxbGJuUXNJR0oxYVd4a0tIUm9hWE11YzNSaGRHVXNJSEJoZEdoTVpXNW5kR2dwS1R0Y2JpQWdmVnh1WEc0Z0lHOXVVbVZoWkNoclpYa3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV3Y205d2N5NWxiR1Z0Wlc1MExtZGxkRUYwZEhKcFluVjBaU2hyWlhrcE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlDaGxiR1Z0Wlc1MExDQndjbTl3Y3lrZ2UxeHVJQ0J5WlhSMWNtNGdibVYzSUZOV1IxQmhkR2hTWlc1a1pYSmxjaWg3WEc0Z0lDQWdaV3hsYldWdWRDeGNiaUFnSUNBdUxpNXdjbTl3YzF4dUlDQjlLVHRjYm4xY2JpSmRmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcblxuICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIHBlcmNlbnRUb1BpeGVscyhwZXJjZW50LCBsZW5ndGgpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDAgKiBsZW5ndGggKyAncHgnO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBsZW5ndGgpIHtcbiAgdmFyIHN0eWxlcyA9IHt9O1xuICB2YXIgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgIGxlbmd0aDogJzAnLFxuICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgfTtcbiAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkxYQmhkR2d2WW5WcGJHUXVhbk1pWFN3aWJtRnRaWE1pT2xzaWNHVnlZMlZ1ZEZSdlVHbDRaV3h6SWl3aWNHVnlZMlZ1ZENJc0lteGxibWQwYUNJc0luQmhjbk5sUm14dllYUWlMQ0p6ZEdGMFpTSXNJbk4wZVd4bGN5SXNJbVJoYzJoQmNuSmhlVk4wZVd4bGN5SXNJbk53WVdOcGJtY2lMQ0pvWVhORVlYTm9RWEp5WVhraUxDSnJaWGtpTENKb1lYTlBkMjVRY205d1pYSjBlU0lzSW5aaGJIVmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVRzN096czdPMEZCVFVFc1NVRkJUVUVzYTBKQlFXdENMRk5CUVd4Q1FTeGxRVUZyUWl4RFFVRkRReXhQUVVGRUxFVkJRVlZETEUxQlFWWTdRVUZCUVN4VFFVRnpRa01zVjBGQlYwWXNUMEZCV0N4SlFVRnpRaXhIUVVGMlFpeEhRVUU0UWtNc1RVRkJPVUlzUjBGQmRVTXNTVUZCTlVRN1FVRkJRU3hEUVVGNFFqczdhMEpCUldVc1ZVRkJRMFVzUzBGQlJDeEZRVUZSUml4TlFVRlNMRVZCUVcxQ08wRkJRMmhETEUxQlFVMUhMRk5CUVZNc1JVRkJaanRCUVVOQkxFMUJRVTFETEd0Q1FVRnJRanRCUVVOMFFrb3NXVUZCVVN4SFFVUmpPMEZCUlhSQ1N5eGhRVUZUVEN4VFFVRlRPMEZCUmtrc1IwRkJlRUk3UVVGSlFTeE5RVUZKVFN4bFFVRmxMRXRCUVc1Q096dEJRVVZCTEU5QlFVc3NTVUZCU1VNc1IwRkJWQ3hKUVVGblFrd3NTMEZCYUVJc1JVRkJkVUk3UVVGRGNrSXNVVUZCU1VFc1RVRkJUVTBzWTBGQlRpeERRVUZ4UWtRc1IwRkJja0lzUTBGQlNpeEZRVUVyUWp0QlFVTTNRaXhWUVVGTlJTeFJRVUZSVUN4TlFVRk5TeXhIUVVGT0xFTkJRV1E3TzBGQlJVRXNZMEZCVVVFc1IwRkJVanRCUVVOQkxHRkJRVXNzVVVGQlREdEJRVU5CTEdGQlFVc3NVMEZCVER0QlFVTkZSQ3g1UWtGQlpTeEpRVUZtTzBGQlEwRkdMREJDUVVGblFrY3NSMEZCYUVJc1NVRkJkVUpVTEdkQ1FVRm5RbGNzUzBGQmFFSXNSVUZCZFVKVUxFMUJRWFpDTEVOQlFYWkNPMEZCUTBFN1FVRkRSaXhoUVVGTExGRkJRVXc3UVVGRFJVY3NhVUpCUVU4c2JVSkJRVkFzU1VGQk9FSk1MR2RDUVVGblFpeERRVUZEVnl4TFFVRnFRaXhGUVVGM1FsUXNUVUZCZUVJc1EwRkJPVUk3UVVGRFFUdEJRVU5HTzBGQlEwVkhMR2xDUVVGUFNTeEhRVUZRTEVsQlFXTkZMRXRCUVdRN1FVRldSanRCUVZsRU8wRkJRMFk3TzBGQlJVUXNUVUZCU1Vnc1dVRkJTaXhGUVVGclFqdEJRVU5vUWtnc1YwRkJUeXhyUWtGQlVDeEpRVUUyUWtNc1owSkJRV2RDU2l4TlFVRm9RaXhIUVVGNVFpeEhRVUY2UWl4SFFVRXJRa2tzWjBKQlFXZENReXhQUVVFMVJUdEJRVU5FT3p0QlFVVkVMRk5CUVU5R0xFMUJRVkE3UVVGRFJDeERJaXdpWm1sc1pTSTZJbUoxYVd4a0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnUTI5dWRtVnlkQ0J3WlhKalpXNTBZV2RsSUhSdklIQnBlR1ZzYzF4dVhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVR1Z5WTJWdWRHRm5aU0J2WmlCMGIzUmhiQ0JzWlc1bmRHaGNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJVYjNSaGJDQnNaVzVuZEdoY2Jpb3ZYRzVqYjI1emRDQndaWEpqWlc1MFZHOVFhWGhsYkhNZ1BTQW9jR1Z5WTJWdWRDd2diR1Z1WjNSb0tTQTlQaUFvY0dGeWMyVkdiRzloZENod1pYSmpaVzUwS1NBdklERXdNQ2tnS2lCc1pXNW5kR2dnS3lBbmNIZ25PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvYzNSaGRHVXNJR3hsYm1kMGFDa2dQVDRnZTF4dUlDQmpiMjV6ZENCemRIbHNaWE1nUFNCN2ZUdGNiaUFnWTI5dWMzUWdaR0Z6YUVGeWNtRjVVM1I1YkdWeklEMGdlMXh1SUNBZ0lHeGxibWQwYURvZ0p6QW5MRnh1SUNBZ0lITndZV05wYm1jNklHeGxibWQwYUNBcklDZHdlQ2RjYmlBZ2ZUdGNiaUFnYkdWMElHaGhjMFJoYzJoQmNuSmhlU0E5SUdaaGJITmxPMXh1WEc0Z0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJR2xtSUNoemRHRjBaUzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSE4wWVhSbFcydGxlVjA3WEc1Y2JpQWdJQ0FnSUhOM2FYUmphQ0FvYTJWNUtTQjdYRzRnSUNBZ0lDQmpZWE5sSUNkc1pXNW5kR2duT2x4dUlDQWdJQ0FnWTJGelpTQW5jM0JoWTJsdVp5YzZYRzRnSUNBZ0lDQWdJR2hoYzBSaGMyaEJjbkpoZVNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUdSaGMyaEJjbkpoZVZOMGVXeGxjMXRyWlhsZElEMGdjR1Z5WTJWdWRGUnZVR2w0Wld4ektIWmhiSFZsTENCc1pXNW5kR2dwTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJR05oYzJVZ0oyOW1abk5sZENjNlhHNGdJQ0FnSUNBZ0lITjBlV3hsYzFzbmMzUnliMnRsTFdSaGMyaHZabVp6WlhRblhTQTlJSEJsY21ObGJuUlViMUJwZUdWc2N5Z3RkbUZzZFdVc0lHeGxibWQwYUNrN1hHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnWkdWbVlYVnNkRHBjYmlBZ0lDQWdJQ0FnYzNSNWJHVnpXMnRsZVYwZ1BTQjJZV3gxWlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCcFppQW9hR0Z6UkdGemFFRnljbUY1S1NCN1hHNGdJQ0FnYzNSNWJHVnpXeWR6ZEhKdmEyVXRaR0Z6YUdGeWNtRjVKMTBnUFNCa1lYTm9RWEp5WVhsVGRIbHNaWE11YkdWdVozUm9JQ3NnSnlBbklDc2daR0Z6YUVGeWNtRjVVM1I1YkdWekxuTndZV05wYm1jN1hHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2MzUjViR1Z6TzF4dWZUdGNiaUpkZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9idWlsZC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi9wb3Btb3Rpb24nKTtcblxudmFyIHBvcG1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wb3Btb3Rpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG53aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW5iRzlpWVd3dWFuTWlYU3dpYm1GdFpYTWlPbHNpY0c5d2JXOTBhVzl1SWl3aWQybHVaRzkzSWwwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQk96dEpRVUZaUVN4VE96czdPMEZCUTFwRExFOUJRVTlFTEZOQlFWQXNSMEZCYlVKQkxGTkJRVzVDSWl3aVptbHNaU0k2SW1kc2IySmhiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQXFJR0Z6SUhCdmNHMXZkR2x2YmlCbWNtOXRJQ2N1TDNCdmNHMXZkR2x2YmljN1hHNTNhVzVrYjNjdWNHOXdiVzkwYVc5dUlEMGdjRzl3Ylc5MGFXOXVPMXh1SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==