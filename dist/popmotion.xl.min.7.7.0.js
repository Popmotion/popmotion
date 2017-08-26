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
var HAS_PERFORMANCE_NOW = typeof performance !== 'undefined' && performance.now;

/*
  Convert camelCase to dash-case

  @param [string]
  @return [string]
*/
var camelToDash = exports.camelToDash = function camelToDash(string) {
  return string.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};

/*
  Generate current timestamp
  
  @return [timestamp]: Current UNIX timestamp
*/
var currentTime = exports.currentTime = HAS_PERFORMANCE_NOW ? function () {
  return performance.now();
} : function () {
  return new Date().getTime();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdXRpbHMuanMiXSwibmFtZXMiOlsic3BsaXRDb2xvclZhbHVlcyIsInZhclR5cGUiLCJ2YXJpYWJsZSIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiQ0FNRUxfQ0FTRV9QQVRURVJOIiwiUkVQTEFDRV9URU1QTEFURSIsIkhBU19QRVJGT1JNQU5DRV9OT1ciLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNhbWVsVG9EYXNoIiwic3RyaW5nIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiY3VycmVudFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInNldERPTUF0dHJzIiwiZWxlbWVudCIsImF0dHJzIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJzZXRBdHRyaWJ1dGUiLCJzcGxpdENvbW1hRGVsaW1pdGVkIiwidmFsdWUiLCJpc1N0cmluZyIsInNwbGl0IiwiY29udGFpbnMiLCJ0ZXJtIiwidiIsImluZGV4T2YiLCJpc0ZpcnN0Q2hhcnMiLCJjcmVhdGVVbml0VHlwZSIsInR5cGUiLCJ0cmFuc2Zvcm0iLCJ0ZXN0IiwicGFyc2UiLCJwYXJzZUZsb2F0IiwiZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmciLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsInRlcm1zIiwibnVtVGVybXMiLCJsZW5ndGgiLCJ2YWx1ZXMiLCJ2YWx1ZXNBcnJheSIsImkiLCJ1bmRlZmluZWQiLCJpc0FycmF5IiwiYXJyIiwiaXNGdW5jIiwib2JqIiwiaXNOdW0iLCJudW0iLCJpc09iaiIsInN0ciIsImlzSGV4IiwiaXNSZ2IiLCJpc0hzbCIsImlzQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztRQTZFZ0JBLGdCLEdBQUFBLGdCO0FBN0VoQixJQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsUUFBRDtBQUFBLFNBQWNDLE9BQU9DLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQkosUUFBL0IsRUFBeUNLLEtBQXpDLENB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VUQ7O0FBRUQ7Ozs7OztBQU1PLElBQU1JLDRCQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNuRCxRQUFRbUQsR0FBUixNQUFpQixPQUExQjtBQUFBLENBQWhCOztBQUVQOzs7Ozs7QUFNTyxJQUFNQywwQkFBUyxTQUFUQSxNQUFTLENBQUNDLEdBQUQ7QUFBQSxTQUFTckQsUUFBUXFELEdBQVIsTUFBaUIsVUFBMUI7QUFBQSxDQUFmOztBQUVQOzs7Ozs7QUFNTyxJQUFNQyx3QkFBUSxTQUFSQSxLQUFRLENBQUNDLEdBQUQ7QUFBQSxTQUFTLE9BQU9BLEdBQVAsS0FBZSxRQUF4QjtBQUFBLENBQWQ7O0FBRVA7Ozs7OztBQU1PLElBQU1DLHdCQUFRLFNBQVJBLEtBQVEsQ0FBQ0gsR0FBRDtBQUFBLFNBQVMsUUFBT0EsR0FBUCx5Q0FBT0EsR0FBUCxPQUFlLFFBQXhCO0FBQUEsQ0FBZDs7QUFFUDs7Ozs7O0FBTU8sSUFBTTFCLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQzhCLEdBQUQ7QUFBQSxTQUFTLE9BQU9BLEdBQVAsS0FBZSxRQUF4QjtBQUFBLENBQWpCOztBQUVBLElBQU1DLHdCQUFRekIsYUFBYSxHQUFiLENBQWQ7QUFDQSxJQUFNMEIsd0JBQVExQixhQUFhLEtBQWIsQ0FBZDtBQUNBLElBQU0yQix3QkFBUTNCLGFBQWEsS0FBYixDQUFkO0FBQ0EsSUFBTTRCLDRCQUFVLFNBQVZBLE9BQVUsQ0FBQzlCLENBQUQ7QUFBQSxTQUFRMkIsTUFBTTNCLENBQU4sS0FBWTRCLE1BQU01QixDQUFOLENBQVosSUFBd0I2QixNQUFNN0IsQ0FBTixDQUFoQztBQUFBLENBQWhCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzL2dpdGh1Yi9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2YXJUeXBlID0gKHZhcmlhYmxlKSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcblxuY29uc3QgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG5jb25zdCBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbmNvbnN0IEhBU19QRVJGT1JNQU5DRV9OT1cgPSAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cpO1xuXG4vKlxuICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmV4cG9ydCBjb25zdCBjYW1lbFRvRGFzaCA9IChzdHJpbmcpID0+IHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcblxuLypcbiAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgXG4gIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG5leHBvcnQgY29uc3QgY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gKCkgPT4gcGVyZm9ybWFuY2Uubm93KCkgOiAoKSA9PiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuZXhwb3J0IGNvbnN0IHNldERPTUF0dHJzID0gKGVsZW1lbnQsIGF0dHJzKSA9PiB7XG4gIGZvciAobGV0IGtleSBpbiBhdHRycykge1xuICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuICAgIH1cbiAgfVxufTtcbi8qXG4gIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBhbnkgYXJndW1lbnQgZm9yIGB0ZXJtYFxuICogYGNvbnRhaW5zKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gKHRlcm0pID0+ICh2KSA9PiB7XG4gIHJldHVybiAoaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pICE9PSAtMSk7XG59O1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIHRvIHNlZSBpZiBhbiBhcmd1bWVudCBpc1xuICogIHRoZSBmaXJzdCBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBgdGVybWBcbiAqIGBpc0ZpcnN0Q2hhcnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG5leHBvcnQgY29uc3QgaXNGaXJzdENoYXJzID0gKHRlcm0pID0+ICh2KSA9PiB7XG4gIHJldHVybiAoaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pID09PSAwKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgdW5pdCB2YWx1ZSB0eXBlXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVVbml0VHlwZSA9ICh0eXBlLCB0cmFuc2Zvcm0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZXN0OiBjb250YWlucyh0eXBlKSxcbiAgICBwYXJzZTogcGFyc2VGbG9hdCxcbiAgICB0cmFuc2Zvcm1cbiAgfTtcbn07XG5cbi8qXG4gIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9ICh2YWx1ZSkgPT4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgc3BsaXQgY29sb3JcbiAqIHZhbHVlcyBmcm9tIHN0cmluZyBpbnRvIGFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXG4gKiBgbWFwQXJyYXlUb09iamVjdChbJ3JlZCcsICdncmVlbicsICdibHVlJ10pKCdyZ2JhKDAsMCwwKScpYFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRDb2xvclZhbHVlcyh0ZXJtcykge1xuICBjb25zdCBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcblxuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB7fTtcbiAgICBjb25zdCB2YWx1ZXNBcnJheSA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodikpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICB2YWx1ZXNbdGVybXNbaV1dID0gKHZhbHVlc0FycmF5W2ldICE9PSB1bmRlZmluZWQpID8gcGFyc2VGbG9hdCh2YWx1ZXNBcnJheVtpXSkgOiAxO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH07XG59XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKGFycikgPT4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbmV4cG9ydCBjb25zdCBpc0Z1bmMgPSAob2JqKSA9PiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG5leHBvcnQgY29uc3QgaXNOdW0gPSAobnVtKSA9PiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG5leHBvcnQgY29uc3QgaXNPYmogPSAob2JqKSA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IChzdHIpID0+IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xuXG5leHBvcnQgY29uc3QgaXNIZXggPSBpc0ZpcnN0Q2hhcnMoJyMnKTtcbmV4cG9ydCBjb25zdCBpc1JnYiA9IGlzRmlyc3RDaGFycygncmdiJyk7XG5leHBvcnQgY29uc3QgaXNIc2wgPSBpc0ZpcnN0Q2hhcnMoJ2hzbCcpO1xuZXhwb3J0IGNvbnN0IGlzQ29sb3IgPSAodikgPT4gKGlzSGV4KHYpIHx8IGlzUmdiKHYpIHx8IGlzSHNsKHYpKTtcbiJdfQ==

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;

var _onNextFrame = __webpack_require__(19);

var _onNextFrame2 = _interopRequireDefault(_onNextFrame);

var _createRenderStep = __webpack_require__(20);

var _createRenderStep2 = _interopRequireDefault(_createRenderStep);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var willRenderNextFrame = false;

/**
 * Maximum permitted ms since last frame
 * @type {Number}
 */
var MAX_ELAPSED = 20;

/**
 * Current framestamp
 * @type {Number}
 */
var currentFramestamp = (0, _utils.currentTime)();

var elapsed = 0;

/**
 * Factor to multiply `elapsed` by - 
 * 0.5 would be slow motion, 2 would be fast
 * @type {Number}
 */
var dilation = 1;

function startRenderLoop() {
  if (!willRenderNextFrame) {
    willRenderNextFrame = true;
    (0, _onNextFrame2.default)(processFrame);
  }
}

var frameStart = (0, _createRenderStep2.default)(startRenderLoop);
var frameUpdate = (0, _createRenderStep2.default)(startRenderLoop);
var frameRender = (0, _createRenderStep2.default)(startRenderLoop);
var frameEnd = (0, _createRenderStep2.default)(startRenderLoop);

function processFrame(framestamp) {
  willRenderNextFrame = false;
  elapsed = Math.max(Math.min(framestamp - currentFramestamp, MAX_ELAPSED), 1) * dilation;
  currentFramestamp = framestamp;

  frameStart.process();
  frameUpdate.process();
  frameRender.process();
  frameEnd.process();
}

var onFrameStart = exports.onFrameStart = frameStart.schedule;
var onFrameUpdate = exports.onFrameUpdate = frameUpdate.schedule;
var onFrameRender = exports.onFrameRender = frameRender.schedule;
var onFrameEnd = exports.onFrameEnd = frameEnd.schedule;
var cancelOnFrameStart = exports.cancelOnFrameStart = frameStart.cancel;
var cancelOnFrameUpdate = exports.cancelOnFrameUpdate = frameUpdate.cancel;
var cancelOnFrameRender = exports.cancelOnFrameRender = frameRender.cancel;
var cancelOnFrameEnd = exports.cancelOnFrameEnd = frameEnd.cancel;

var timeSinceLastFrame = exports.timeSinceLastFrame = function timeSinceLastFrame() {
  return elapsed;
};
var currentFrameTimestamp = exports.currentFrameTimestamp = function currentFrameTimestamp() {
  return currentFramestamp;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvaW5kZXguanMiXSwibmFtZXMiOlsid2lsbFJlbmRlck5leHRGcmFtZSIsIk1BWF9FTEFQU0VEIiwiY3VycmVudEZyYW1lc3RhbXAiLCJlbGFwc2VkIiwiZGlsYXRpb24iLCJzdGFydFJlbmRlckxvb3AiLCJwcm9jZXNzRnJhbWUiLCJmcmFtZVN0YXJ0IiwiZnJhbWVVcGRhdGUiLCJmcmFtZVJlbmRlciIsImZyYW1lRW5kIiwiZnJhbWVzdGFtcCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJwcm9jZXNzIiwib25GcmFtZVN0YXJ0Iiwic2NoZWR1bGUiLCJvbkZyYW1lVXBkYXRlIiwib25GcmFtZVJlbmRlciIsIm9uRnJhbWVFbmQiLCJjYW5jZWxPbkZyYW1lU3RhcnQiLCJjYW5jZWwiLCJjYW5jZWxPbkZyYW1lVXBkYXRlIiwiY2FuY2VsT25GcmFtZVJlbmRlciIsImNhbmNlbE9uRnJhbWVFbmQiLCJ0aW1lU2luY2VMYXN0RnJhbWUiLCJjdXJyZW50RnJhbWVUaW1lc3RhbXAiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBSUEsc0JBQXNCLEtBQTFCOztBQUVBOzs7O0FBSUEsSUFBTUMsY0FBYyxFQUFwQjs7QUFFQTs7OztBQUlBLElBQUlDLG9CQUFvQix5QkFBeEI7O0FBRUEsSUFBSUMsVUFBVSxDQUFkOztBQUVBOzs7OztBQUtBLElBQUlDLFdBQVcsQ0FBZjs7QUFFQSxTQUFTQyxlQUFULEdBQTJCO0FBQ3pCLE1BQUksQ0FBQ0wsbUJBQUwsRUFBMEI7QUFDeEJBLDBCQUFzQixJQUF0QjtBQUNBLCtCQUFZTSxZQUFaO0FBQ0Q7QUFDRjs7QUFFRCxJQUFNQyxhQUFhLGdDQUFpQkYsZUFBakIsQ0FBbkI7QUFDQSxJQUFNRyxjQUFjLGdDQUFpQkgsZUFBakIsQ0FBcEI7QUFDQSxJQUFNSSxjQUFjLGdDQUFpQkosZUFBakIsQ0FBcEI7QUFDQSxJQUFNSyxXQUFXLGdDQUFpQkwsZUFBakIsQ0FBakI7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkssVUFBdEIsRUFBa0M7QUFDaENYLHdCQUFzQixLQUF0QjtBQUNBRyxZQUFVUyxLQUFLQyxHQUFMLENBQVNELEtBQUtFLEdBQUwsQ0FBU0gsYUFBYVQsaUJBQXRCLEVBQXlDRCxXQUF6QyxDQUFULEVBQWdFLENBQWhFLElBQXFFRyxRQUEvRTtBQUNBRixzQkFBb0JTLFVBQXBCOztBQUVBSixhQUFXUSxPQUFYO0FBQ0FQLGNBQVlPLE9BQVo7QUFDQU4sY0FBWU0sT0FBWjtBQUNBTCxXQUFTSyxPQUFUO0FBQ0Q7O0FBRU0sSUFBTUMsc0NBQWVULFdBQVdVLFFBQWhDO0FBQ0EsSUFBTUMsd0NBQWdCVixZQUFZUyxRQUFsQztBQUNBLElBQU1FLHdDQUFnQlYsWUFBWVEsUUFBbEM7QUFDQSxJQUFNRyxrQ0FBYVYsU0FBU08sUUFBNUI7QUFDQSxJQUFNSSxrREFBcUJkLFdBQVdlLE1BQXRDO0FBQ0EsSUFBTUMsb0RBQXNCZixZQUFZYyxNQUF4QztBQUNBLElBQU1FLG9EQUFzQmYsWUFBWWEsTUFBeEM7QUFDQSxJQUFNRyw4Q0FBbUJmLFNBQVNZLE1BQWxDOztBQUVBLElBQU1JLGtEQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsU0FBTXZCLE9BQU47QUFBQSxDQUEzQjtBQUNBLElBQU13Qix3REFBd0IsU0FBeEJBLHFCQUF3QjtBQUFBLFNBQU16QixpQkFBTjtBQUFBLENBQTlCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzL2dpdGh1Yi9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb25OZXh0RnJhbWUgZnJvbSAnLi9vbi1uZXh0LWZyYW1lJztcbmltcG9ydCBjcmVhdGVSZW5kZXJTdGVwIGZyb20gJy4vY3JlYXRlLXJlbmRlci1zdGVwJztcbmltcG9ydCB7IGN1cnJlbnRUaW1lIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxubGV0IHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcblxuLyoqXG4gKiBNYXhpbXVtIHBlcm1pdHRlZCBtcyBzaW5jZSBsYXN0IGZyYW1lXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG5jb25zdCBNQVhfRUxBUFNFRCA9IDIwO1xuXG4vKipcbiAqIEN1cnJlbnQgZnJhbWVzdGFtcFxuICogQHR5cGUge051bWJlcn1cbiAqL1xubGV0IGN1cnJlbnRGcmFtZXN0YW1wID0gY3VycmVudFRpbWUoKTtcblxubGV0IGVsYXBzZWQgPSAwO1xuXG4vKipcbiAqIEZhY3RvciB0byBtdWx0aXBseSBgZWxhcHNlZGAgYnkgLSBcbiAqIDAuNSB3b3VsZCBiZSBzbG93IG1vdGlvbiwgMiB3b3VsZCBiZSBmYXN0XG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG5sZXQgZGlsYXRpb24gPSAxO1xuXG5mdW5jdGlvbiBzdGFydFJlbmRlckxvb3AoKSB7XG4gIGlmICghd2lsbFJlbmRlck5leHRGcmFtZSkge1xuICAgIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSB0cnVlO1xuICAgIG9uTmV4dEZyYW1lKHByb2Nlc3NGcmFtZSk7XG4gIH1cbn1cblxuY29uc3QgZnJhbWVTdGFydCA9IGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKTtcbmNvbnN0IGZyYW1lVXBkYXRlID0gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApO1xuY29uc3QgZnJhbWVSZW5kZXIgPSBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCk7XG5jb25zdCBmcmFtZUVuZCA9IGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKTtcblxuZnVuY3Rpb24gcHJvY2Vzc0ZyYW1lKGZyYW1lc3RhbXApIHtcbiAgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnRGcmFtZXN0YW1wLCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gIGN1cnJlbnRGcmFtZXN0YW1wID0gZnJhbWVzdGFtcDtcblxuICBmcmFtZVN0YXJ0LnByb2Nlc3MoKTtcbiAgZnJhbWVVcGRhdGUucHJvY2VzcygpO1xuICBmcmFtZVJlbmRlci5wcm9jZXNzKCk7XG4gIGZyYW1lRW5kLnByb2Nlc3MoKTtcbn1cblxuZXhwb3J0IGNvbnN0IG9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuc2NoZWR1bGU7XG5leHBvcnQgY29uc3Qgb25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLnNjaGVkdWxlO1xuZXhwb3J0IGNvbnN0IG9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5zY2hlZHVsZTtcbmV4cG9ydCBjb25zdCBvbkZyYW1lRW5kID0gZnJhbWVFbmQuc2NoZWR1bGU7XG5leHBvcnQgY29uc3QgY2FuY2VsT25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5jYW5jZWw7XG5leHBvcnQgY29uc3QgY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLmNhbmNlbDtcbmV4cG9ydCBjb25zdCBjYW5jZWxPbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuY2FuY2VsO1xuZXhwb3J0IGNvbnN0IGNhbmNlbE9uRnJhbWVFbmQgPSBmcmFtZUVuZC5jYW5jZWw7XG5cbmV4cG9ydCBjb25zdCB0aW1lU2luY2VMYXN0RnJhbWUgPSAoKSA9PiBlbGFwc2VkO1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9ICgpID0+IGN1cnJlbnRGcmFtZXN0YW1wO1xuIl19

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

  Action.prototype.addListener = function addListener(listener) {
    this.listeners = this.listeners || [];
    this.numListeners = this.numListeners || 0;
    if (this.listeners.indexOf(listener) === -1) {
      this.listeners.push(listener);
      this.numListeners++;
    }
    return this;
  };

  Action.prototype.removeListener = function removeListener(listener) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFjdGlvbiIsInByb3BzIiwic2NoZWR1bGVkVXBkYXRlIiwibGFzdFVwZGF0ZWQiLCJwcmV2IiwiY3VycmVudCIsIm9uVXBkYXRlIiwicGFzc2l2ZSIsInVwZGF0ZSIsInJlZ2lzdGVyQWN0aW9uIiwic2V0IiwiZ2V0IiwiZmlyZUxpc3RlbmVycyIsIl9pc0FjdGl2ZSIsImlzQWN0aW9uQ29tcGxldGUiLCJjb21wbGV0ZSIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdFByb3BzIiwic2V0UHJvcHMiLCJmcm9tIiwic3RhcnQiLCJvblN0YXJ0IiwiX29uU3RhcnQiLCJzdG9wIiwib25TdG9wIiwiX29uU3RvcCIsIm9uQ29tcGxldGUiLCJfb25Db21wbGV0ZSIsIm91dHB1dCIsImZ1bmMiLCJ0cmFuc2Zvcm0iLCJnZXRCZWZvcmVUcmFuc2Zvcm0iLCJ2IiwiZ2V0UHJvcCIsImtleSIsImdldFZlbG9jaXR5IiwiaXNBY3RpdmUiLCJhZGRMaXN0ZW5lciIsImxpc3RlbmVyIiwibGlzdGVuZXJzIiwibnVtTGlzdGVuZXJzIiwiaW5kZXhPZiIsInB1c2giLCJyZW1vdmVMaXN0ZW5lciIsImxpc3RlbmVySW5kZXgiLCJzcGxpY2UiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0lBRU1BLE07QUFBUztBQUNiLG9CQUF3QjtBQUFBOztBQUFBLFFBQVpDLEtBQVksdUVBQUosRUFBSTs7QUFBQTs7QUFBQSxTQXFEeEJDLGVBckR3QixHQXFETixZQUFNO0FBQ3RCLFlBQUtDLFdBQUwsR0FBbUIsb0NBQW5CO0FBQ0EsWUFBS0MsSUFBTCxHQUFZLE1BQUtDLE9BQWpCOztBQUZzQixtQkFJUSxNQUFLSixLQUpiO0FBQUEsVUFJZEssUUFKYyxVQUlkQSxRQUpjO0FBQUEsVUFJSkMsT0FKSSxVQUlKQSxPQUpJOzs7QUFNdEIsVUFBSSxNQUFLQyxNQUFULEVBQWlCO0FBQ2YsY0FBS0gsT0FBTCxHQUFl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SixZQUFMO0FBQ0EsV0FBS0QsU0FBTCxDQUFlTSxNQUFmLENBQXNCRCxhQUF0QixFQUFxQyxDQUFyQztBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0QsRzs7bUJBRURoQyxhLDRCQUFnQjtBQUNkLFFBQU1QLFVBQVUsS0FBS00sR0FBTCxFQUFoQjtBQUNBLFNBQUssSUFBSW1DLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLTixZQUF6QixFQUF1Q00sR0FBdkMsRUFBNEM7QUFDMUMsV0FBS1AsU0FBTCxDQUFlTyxDQUFmLEVBQWtCekMsT0FBbEIsRUFBMkIsSUFBM0I7QUFDRDtBQUNELFdBQU8sSUFBUDtBQUNELEc7Ozs7O2tCQUdZTCxNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzL2dpdGh1Yi9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvbkZyYW1lVXBkYXRlLCBjYW5jZWxPbkZyYW1lVXBkYXRlLCB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuaW1wb3J0IHsgc3BlZWRQZXJTZWNvbmQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNsYXNzIEFjdGlvbiB7IC8vIGxhd3N1aXQgLSBzb3JyeVxuICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzXG4gICAgfTtcblxuICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuXG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9IDA7XG4gICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50ID0gcHJvcHMuY3VycmVudCB8fCBwcm9wcy5mcm9tIHx8IDA7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBjb25zdCB7IG9uU3RhcnQsIF9vblN0YXJ0LCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG4gICAgICBvbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB0aGlzLm9uU3RhcnQoKTtcbiAgICBpZiAob25TdGFydCkgb25TdGFydCh0aGlzKTtcbiAgICBpZiAoX29uU3RhcnQpIF9vblN0YXJ0KHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNvbnN0IHsgb25TdG9wLCBfb25TdG9wLCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgY2FuY2VsT25GcmFtZVVwZGF0ZSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdG9wKSB0aGlzLm9uU3RvcCgpO1xuICAgIGlmIChvblN0b3ApIG9uU3RvcCh0aGlzKTtcbiAgICBpZiAoX29uU3RvcCkgX29uU3RvcCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgY29uc3QgeyBvbkNvbXBsZXRlLCBfb25Db21wbGV0ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgaWYgKHRoaXMub25Db21wbGV0ZSkgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUodGhpcyk7XG4gICAgaWYgKF9vbkNvbXBsZXRlKSBfb25Db21wbGV0ZSh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2NoZWR1bGVkVXBkYXRlID0gKCkgPT4ge1xuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSB0aW1lU2luY2VMYXN0RnJhbWUoKTtcbiAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICBjb25zdCB7IG9uVXBkYXRlLCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHRoaXMudXBkYXRlKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnVwZGF0ZSh0aGlzLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlmIChvblVwZGF0ZSkge1xuICAgICAgaWYgKG9uVXBkYXRlLnJlZ2lzdGVyQWN0aW9uKSB7XG4gICAgICAgIG9uVXBkYXRlLnNldCh0aGlzLmdldCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uVXBkYXRlKHRoaXMuZ2V0KCksIHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZmlyZUxpc3RlbmVycygpO1xuXG4gICAgaWYgKCFwYXNzaXZlICYmIHRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICBvbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0FjdGlvbkNvbXBsZXRlICYmIHRoaXMuaXNBY3Rpb25Db21wbGV0ZSgpKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgc2V0UHJvcHMoeyBvblVwZGF0ZSwgLi4ucHJvcHMgfSkge1xuICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICAuLi50aGlzLnByb3BzLFxuICAgICAgLi4ucHJvcHNcbiAgICB9O1xuXG4gICAgaWYgKG9uVXBkYXRlKSB0aGlzLm91dHB1dChvblVwZGF0ZSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG91dHB1dChmdW5jKSB7XG4gICAgdGhpcy5wcm9wcy5vblVwZGF0ZSA9IGZ1bmM7XG4gICAgaWYgKGZ1bmMucmVnaXN0ZXJBY3Rpb24pIGZ1bmMucmVnaXN0ZXJBY3Rpb24odGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCgpIHtcbiAgICBjb25zdCB7IHRyYW5zZm9ybSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gdHJhbnNmb3JtID8gdHJhbnNmb3JtKHRoaXMuY3VycmVudCkgOiB0aGlzLmN1cnJlbnQ7XG4gIH1cblxuICBnZXRCZWZvcmVUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfVxuXG4gIHNldCh2KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFByb3Aoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHNba2V5XTtcbiAgfVxuXG4gIGdldFZlbG9jaXR5KCkge1xuICAgIHJldHVybiBzcGVlZFBlclNlY29uZCh0aGlzLmN1cnJlbnQgLSB0aGlzLnByZXYsIHRoaXMubGFzdFVwZGF0ZWQpO1xuICB9XG5cbiAgaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9XG5cbiAgYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IFtdO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gdGhpcy5udW1MaXN0ZW5lcnMgfHwgMDtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzKys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBjb25zdCBsaXN0ZW5lckluZGV4ID0gKHRoaXMubGlzdGVuZXJzKSA/IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpIDogLTE7XG4gICAgaWYgKGxpc3RlbmVySW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycy0tO1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZpcmVMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUxpc3RlbmVyczsgaSsrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tpXShjdXJyZW50LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvY2FsYy5qcyJdLCJuYW1lcyI6WyJ0b0RlY2ltYWwiLCJudW0iLCJwcmVjaXNpb24iLCJNYXRoIiwicm91bmQiLCJaRVJPX1BPSU5UIiwieCIsInkiLCJ6IiwiZGlzdGFuY2UxRCIsImEiLCJiIiwiYWJzIiwiYW5nbGUiLCJyYWRpYW5zVG9EZWdyZWVzIiwiYXRhbjIiLCJkZWdyZWVzVG9SYWRpYW5zIiwiZGVncmVlcyIsIlBJIiwiZGlsYXRlIiwiZGlsYXRpb24iLCJkaXN0YW5jZSIsInhEZWx0YSIsInlEZWx0YSIsInpEZWx0YSIsInNxcnQiLCJnZXRQcm9ncmVzc0Zyb21WYWx1ZSIsImZyb20iLCJ0byIsInZhbHVlIiwiZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MiLCJwcm9ncmVzcyIsInBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UiLCJvcmlnaW4iLCJjb3MiLCJzaW4iLCJyYWRpYW5zIiwic21vb3RoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImR1cmF0aW9uIiwic21vb3RoaW5nIiwibWF4Iiwic3BlZWRQZXJGcmFtZSIsInhwcyIsImZyYW1lRHVyYXRpb24iLCJzcGVlZFBlclNlY29uZCIsInZlbG9jaXR5Iiwic3RlcFByb2dyZXNzIiwic3RlcHMiLCJzZWdtZW50IiwidGFyZ2V0IiwicHJvZ3Jlc3NPZlRhcmdldCIsIm1pbiIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOzs7Ozs7O0FBT0EsSUFBTUEsWUFBWSxTQUFaQSxTQUFZLENBQUNDLEdBQUQsRUFBd0I7QUFBQSxNQUFsQkMsU0FBa0IsdUVBQU4sQ0FBTTs7QUFDeENBLHVCQUFZLEVBQVosRUFBa0JBLFNBQWxCO0FBQ0EsU0FBT0MsS0FBS0MsS0FBTCxDQUFXSCxNQUFNQyxTQUFqQixJQUE4QkEsU0FBckM7QUFDRCxDQUhEOztBQUtBLElBQU1HLGFBQWE7QUFDakJDLEtBQUcsQ0FEYztBQUVqQkMsS0FBRyxDQUZjO0FBR2pCQyxLQUFHO0FBSGMsQ0FBbkI7O0FBTUEsSUFBTUMsYUFBYSxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVVSLEtBQUtTLEdBQUwsQ0FBU0YsSUFBSUMsQ0FBYixDQUFWO0FBQUEsQ0FBbkI7O0FBRUE7Ozs7Ozs7Ozs7QUFVTyxJQUFNRSx3QkFBUSxTQUFSQSxLQUFRLENBQUNILENBQUQ7QUFBQSxNQUFJQyxDQUFKLHVFQUFRTixVQUFSO0FBQUEsU0FBdUJTLGlCQUFpQlgsS0FBS1ksS0FBTCxDQUFXSixFQUFFSixDQUFGLEdBQU1HLEVBQUVILENBQW5CLEVBQXNCSSxFQUFFTCxDQUFGLEdBQU1JLEVBQUVKLENBQTlCLENBQWpCLENBQXZCO0FBQUEsQ0FBZDs7QUFFUDs7Ozs7O0FBTU8sSUFBTVUsOENBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsT0FBRDtBQUFBLFNBQWFBLFVBQVVkLEtBQUtlLEVBQWYsR0FBb0IsR0FBakM7QUFBQSxDQUF6Qjs7QUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JPLElBQU1DLDBCQUFTLFNBQVRBLE1BQVMsQ0FBQ1QsQ0FBRCxFQUFJQyxDQUFKLEVBQU9TLFFBQVA7QUFBQSxTQUFvQlYsSUFBSyxDQUFDQyxJQUFJRCxDQUFMLElBQVVVLFFBQW5DO0FBQUEsQ0FBZjs7QUFFUDs7Ozs7Ozs7O0FBU08sSUFBTUMsOEJBQVcsU0FBWEEsUUFBVyxDQUFDWCxDQUFELEVBQXVCO0FBQUEsTUFBbkJDLENBQW1CLHVFQUFmTixVQUFlOztBQUM3QztBQUNBLE1BQUksa0JBQU1LLENBQU4sQ0FBSixFQUFjO0FBQ1osV0FBT0QsV0FBV0MsQ0FBWCxFQUFjQyxDQUFkLENBQVA7O0FBRUY7QUFDQyxHQUpELE1BSU87QUFDTCxRQUFNVyxTQUFTYixXQUFXQyxFQUFFSixDQUFiLEVBQWdCSyxFQUFFTCxDQUFsQixDQUFmO0FBQ0EsUUFBTWlCLFNBQVNkLFdBQVdDLEVBQUVILENBQWIsRUFBZ0JJLEVBQUVKLENBQWxCLENBQWY7QUFDQSxRQUFNaUIsU0FBVSxrQkFBTWQsRUFBRUYsQ0FBUixDQUFELEdBQWVDLFdBQVdDLEVBQUVGLENBQWIsRUFBZ0JHLEVBQUVILENBQWxCLENBQWYsR0FBc0MsQ0FBckQ7O0FBRUEsV0FBT0wsS0FBS3NCLElBQUwsQ0FBVSxTQUFDSCxNQUFELEVBQVcsQ0FBWCxhQUFpQkMsTUFBakIsRUFBMkIsQ0FBM0IsYUFBaUNDLE1BQWpDLEVBQTJDLENBQTNDLENBQVYsQ0FBUDtBQUNEO0FBQ0YsQ0FiTTs7QUFlUDs7Ozs7Ozs7Ozs7O0FBWU8sSUFBTUUsc0RBQXVCLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsSUFBRCxFQUFPQyxFQUFQLEVBQVdDLEtBQVg7QUFBQSxTQUFxQixDQUFDQSxRQUFRRixJQUFULEtBQWtCQyxLQUFLRCxJQUF2QixDQUFyQjtBQUFBLENBQTdCOztBQUVQOzs7Ozs7Ozs7OztBQVdPLElBQU1HLHNEQUF1QixTQUF2QkEsb0JBQXVCLENBQUNILElBQUQsRUFBT0MsRUFBUCxFQUFXRyxRQUFYO0FBQUEsU0FBeUIsQ0FBRUEsUUFBRixHQUFhSixJQUFkLEdBQXVCSSxXQUFXSCxFQUFsQyxHQUF3Q0QsSUFBaEU7QUFBQSxDQUE3Qjs7QUFFUDs7Ozs7Ozs7QUFRTyxJQUFNSyxnRUFBNEIsU0FBNUJBLHlCQUE0QixDQUFDQyxNQUFELEVBQVNwQixLQUFULEVBQWdCUSxRQUFoQixFQUE2QjtBQUNwRVIsVUFBUUcsaUJBQWlCSCxLQUFqQixDQUFSOztBQUVBLFNBQU87QUFDTFAsT0FBR2UsV0FBV2xCLEtBQUsrQixHQUFMLENBQVNyQixLQUFULENBQVgsR0FBNkJvQixPQUFPM0IsQ0FEbEM7QUFFTEMsT0FBR2MsV0FBV2xCLEtBQUtnQyxHQUFMLENBQVN0QixLQUFULENBQVgsR0FBNkJvQixPQUFPMUI7QUFGbEMsR0FBUDtBQUlELENBUE07O0FBU1A7Ozs7OztBQU1PLElBQU1PLDhDQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNzQixPQUFEO0FBQUEsU0FBYUEsVUFBVSxHQUFWLEdBQWdCakMsS0FBS2UsRUFBbEM7QUFBQSxDQUF6Qjs7QUFFUDs7Ozs7Ozs7QUFRTyxJQUFNbUIsMEJBQVMsU0FBVEEsTUFBUyxDQUFDQyxRQUFELEVBQVdDLFFBQVgsRUFBcUJDLFFBQXJCO0FBQUEsTUFBK0JDLFNBQS9CLHVFQUEyQyxDQUEzQztBQUFBLFNBQWlEekMsVUFBVXVDLFdBQVlDLFlBQVlGLFdBQVdDLFFBQXZCLElBQW1DcEMsS0FBS3VDLEdBQUwsQ0FBU0QsU0FBVCxFQUFvQkQsUUFBcEIsQ0FBekQsQ0FBakQ7QUFBQSxDQUFmOztBQUVQOzs7Ozs7QUFNTyxJQUFNRyx3Q0FBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLEdBQUQsRUFBTUMsYUFBTjtBQUFBLFNBQXlCLGtCQUFNRCxHQUFOLENBQUQsR0FBZUEsT0FBTyxPQUFPQyxhQUFkLENBQWYsR0FBOEMsQ0FBdEU7QUFBQSxDQUF0Qjs7QUFFUDs7Ozs7O0FBTU8sSUFBTUMsMENBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxRQUFELEVBQVdGLGFBQVg7QUFBQSxTQUE2QkEsZ0JBQWdCRSxZQUFZLE9BQU9GLGFBQW5CLENBQWhCLEdBQW9ELENBQWpGO0FBQUEsQ0FBdkI7O0FBRVA7Ozs7Ozs7QUFPTyxJQUFNRyxzQ0FBZSxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBUWxCLFFBQVIsRUFBcUI7QUFDL0MsTUFBTW1CLFVBQVUsS0FBS0QsUUFBUSxDQUFiLENBQWhCO0FBQ0EsTUFBTUUsU0FBUyxJQUFLLElBQUlGLEtBQXhCO0FBQ0EsTUFBTUcsbUJBQW1CakQsS0FBS2tELEdBQUwsQ0FBU3RCLFdBQVdvQixNQUFwQixFQUE0QixDQUE1QixDQUF6Qjs7QUFFQSxTQUFPaEQsS0FBS21ELEtBQUwsQ0FBV0YsbUJBQW1CRixPQUE5QixJQUF5Q0EsT0FBaEQ7QUFDRCxDQU5NIiwiZmlsZSI6ImNhbGMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMvZ2l0aHViL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG5jb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gIHByZWNpc2lvbiA9IDEwICoqIHByZWNpc2lvbjtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG5cbmNvbnN0IFpFUk9fUE9JTlQgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHo6IDBcbn07XG5cbmNvbnN0IGRpc3RhbmNlMUQgPSAoYSwgYikgPT4gTWF0aC5hYnMoYSAtIGIpO1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuXG4gIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICBhcmUgYXQgMCwwXG5cbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xuZXhwb3J0IGNvbnN0IGFuZ2xlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYi55IC0gYS55LCBiLnggLSBhLngpKTtcblxuLypcbiAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcblxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBkZWdyZWVzVG9SYWRpYW5zID0gKGRlZ3JlZXMpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuXG4vKlxuICBEaWxhdGVcblxuICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG5cbiAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG5cbiAgYSAtLS0tLS0tLS0gYlxuXG4gIHRvXG5cbiAgYSAtLS0tIGJcblxuICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbmV4cG9ydCBjb25zdCBkaWxhdGUgPSAoYSwgYiwgZGlsYXRpb24pID0+IGEgKyAoKGIgLSBhKSAqIGRpbGF0aW9uKTtcblxuLypcbiAgRGlzdGFuY2VcblxuICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cblxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG5leHBvcnQgY29uc3QgZGlzdGFuY2UgPSAoYSwgYiA9IFpFUk9fUE9JTlQpID0+IHtcbiAgLy8gMUQgZGltZW5zaW9uc1xuICBpZiAoaXNOdW0oYSkpIHtcbiAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHhEZWx0YSA9IGRpc3RhbmNlMUQoYS54LCBiLngpO1xuICAgIGNvbnN0IHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgIGNvbnN0IHpEZWx0YSA9IChpc051bShhLnopKSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoKHhEZWx0YSAqKiAyKSArICh5RGVsdGEgKiogMikgKyAoekRlbHRhICoqIDIpKTtcbiAgfVxufTtcblxuLypcbiAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG5cbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cblxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0XG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbmV4cG9ydCBjb25zdCBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IChmcm9tLCB0bywgdmFsdWUpID0+ICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG5cbi8qXG4gIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcblxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xuZXhwb3J0IGNvbnN0IGdldFZhbHVlRnJvbVByb2dyZXNzID0gKGZyb20sIHRvLCBwcm9ncmVzcykgPT4gKC0gcHJvZ3Jlc3MgKiBmcm9tKSArIChwcm9ncmVzcyAqIHRvKSArIGZyb207XG5cbi8qXG4gIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG5cbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG5leHBvcnQgY29uc3QgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkgPT4ge1xuICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gIHJldHVybiB7XG4gICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gIH07XG59O1xuXG4vKlxuICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xuZXhwb3J0IGNvbnN0IHJhZGlhbnNUb0RlZ3JlZXMgPSAocmFkaWFucykgPT4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG5cbi8qXG4gIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG5leHBvcnQgY29uc3Qgc21vb3RoID0gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24sIHNtb290aGluZyA9IDApID0+IHRvRGVjaW1hbChvbGRWYWx1ZSArIChkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKSk7XG5cbi8qXG4gIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcblxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xuZXhwb3J0IGNvbnN0IHNwZWVkUGVyRnJhbWUgPSAoeHBzLCBmcmFtZUR1cmF0aW9uKSA9PiAoaXNOdW0oeHBzKSkgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcblxuLypcbiAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcblxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IGZyYW1lRHVyYXRpb24gPyB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xuXG4vKlxuICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHN0ZXBQcm9ncmVzcyA9IChzdGVwcywgcHJvZ3Jlc3MpID0+IHtcbiAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgY29uc3QgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpO1xuICBjb25zdCBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuIl19

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.bezier = exports.blendColor = exports.alpha = exports.color = exports.hsla = exports.rgba = exports.rgbUnit = exports.px = exports.degrees = exports.percent = exports.transformChildValues = exports.steps = exports.snap = exports.smooth = exports.wrap = exports.nonlinearSpring = exports.spring = exports.generateNonIntergratedSpring = exports.multiply = exports.divide = exports.add = exports.subtract = exports.interpolate = exports.flow = exports.pipe = exports.conditional = exports.clamp = exports.clampMin = exports.clampMax = exports.applyOffset = exports.appendUnit = undefined;

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

// Deprecated: Remove in 7.1.0
var flow = exports.flow = pipe;

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
    var currentFramestamp = (0, _framesync.currentFrameTimestamp)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJ2IiwiYXBwZW5kVW5pdCIsInVuaXQiLCJhcHBseU9mZnNldCIsImZyb20iLCJ0byIsImdldE9mZnNldCIsInN1YnRyYWN0IiwiYXBwbHlPZmZzZXRUbyIsImFkZCIsImNsYW1wTWF4IiwibWF4IiwiTWF0aCIsIm1pbiIsImNsYW1wTWluIiwiY2xhbXAiLCJfbWluIiwiX21heCIsImNvbmRpdGlvbmFsIiwiY29uZGl0aW9uIiwiaWZUcnVlIiwiaWZGYWxzZSIsImFjdGlvbiIsInBpcGUiLCJ0cmFuc2Zvcm1lcnMiLCJudW1UcmFuc2Zvcm1lcnMiLCJsZW5ndGgiLCJpIiwiYWNjIiwiYXJncyIsImZsb3ciLCJpbnRlcnBvbGF0ZSIsImlucHV0Iiwib3V0cHV0IiwicmFuZ2VFYXNpbmciLCJyYW5nZUxlbmd0aCIsImZpbmFsSW5kZXgiLCJwcm9ncmVzc0luUmFuZ2UiLCJlYXNlZFByb2dyZXNzIiwib3JpZ2luIiwiZGl2aWRlIiwibXVsdGlwbHkiLCJnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nIiwiYWx0ZXJEaXNwbGFjZW1lbnQiLCJjb25zdGFudCIsImRpc3BsYWNlbWVudCIsInNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50IiwiYWJzIiwic3ByaW5nIiwibm9ubGluZWFyU3ByaW5nIiwic3FydCIsIndyYXAiLCJyYW5nZVNpemUiLCJzbW9vdGgiLCJzdHJlbmd0aCIsInByZXZpb3VzVmFsdWUiLCJsYXN0VXBkYXRlZCIsImN1cnJlbnRGcmFtZXN0YW1wIiwidGltZURlbHRhIiwibmV3VmFsdWUiLCJzbmFwIiwicG9pbnRzIiwicm91bmQiLCJudW1Qb2ludHMiLCJsYXN0RGlzdGFuY2UiLCJwb2ludCIsImRpc3RhbmNlIiwic3RlcHMiLCJkaXJlY3Rpb24iLCJwcm9ncmVzcyIsInRyYW5zZm9ybUNoaWxkVmFsdWVzIiwiY2hpbGRUcmFuc2Zvcm1lcnMiLCJtdXRhYmxlU3RhdGUiLCJrZXkiLCJjaGlsZFRyYW5zZm9ybWVyIiwicGVyY2VudCIsImRlZ3JlZXMiLCJweCIsInJnYlVuaXQiLCJyZ2JhVGVtcGxhdGUiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJhbHBoYSIsInJnYmEiLCJoc2xhVGVtcGxhdGUiLCJodWUiLCJzYXR1cmF0aW9uIiwibGlnaHRuZXNzIiwiaHNsYSIsInBhcnNlSW50IiwiY29sb3IiLCJoYXNPd25Qcm9wZXJ0eSIsImJsZW5kIiwiZnJvbUV4cG8iLCJ0b0V4cG8iLCJibGVuZENvbG9yIiwiZnJvbUNvbG9yIiwidG9Db2xvciIsImJsZW5kZWQiLCJyZXNvbHZlMyIsInQiLCJ1dCIsInJlc29sdmU0IiwiYTEiLCJiZXppZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLFNBQVBBLElBQU8sQ0FBQ0MsQ0FBRDtBQUFBLFNBQU9BLENBQVA7QUFBQSxDQUFiOztBQUVBOzs7Ozs7O0FBT08sSUFBTUMsa0NBQWEsU0FBYkEsVUFBYSxDQUFDQyxJQUFEO0FBQUEsU0FBVSxVQUFDRixDQUFEO0FBQUEsZ0JBQVVBLENBQVYsR0FBY0UsSUFBZDtBQUFBLEdBQVY7QUFBQSxDQUFuQjs7QUFFUDs7Ozs7Ozs7QUFRTyxJQUFNQyxvQ0FBYyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBT0MsRUFBUCxFQUFjO0FBQ3ZDLE1BQU1DLFlBQVlDLFNBQVNILElBQVQsQ0FBbEI7QUFDQSxNQUFNSSxnQkFBZ0JDLElBQUlKLEVBQUosQ0FBdEI7QUFDQSxTQUFPLFVBQUNMLENBQUQ7QUFBQSxXQUFPUSxjQUFjRixVQUFVTixDQUFWLENBQWQsQ0FBUDtBQUFBLEdBQVA7QUFDRCxDQUpNOztBQU1QOzs7Ozs7O0FBT08sSUFBTVUsOEJBQVcsU0FBWEEsUUFBVyxDQUFDQyxHQUFEO0FBQUEsU0FBUyxVQUFDWCxDQUFEO0FBQUEsV0FBT1ksS0FBS0MsR0FBTCxDQUFTYixDQUFULEVBQVlXLEdBQVosQ0FBUDtBQUFBLEdBQVQ7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O0FBQ0EsV0FBTyxDQUFDLENBQUN4QyxPQUFPLENBQVAsSUFBWXlDLEVBQVosR0FBaUJ6QyxPQUFPLENBQVAsSUFBWXdDLENBQTlCLElBQW1DQyxFQUFuQyxHQUF3Q0UsS0FBS0gsQ0FBOUMsSUFBbURDLEVBQW5ELEdBQXdELENBQUNFLEtBQUtGLEVBQUwsR0FBVSxDQUFDekMsT0FBTyxDQUFQLElBQVl5QyxFQUFaLEdBQWlCekMsT0FBTyxDQUFQLElBQVl3QyxDQUE5QixJQUFtQ0EsQ0FBOUMsSUFBbURBLENBQWxIO0FBQ0QsR0FKZ0I7QUFBQSxDQUFqQjs7QUFNTyxJQUFNSSwwQkFBUyxTQUFUQSxNQUFTLENBQUM1QyxNQUFEO0FBQUEsU0FDbkJBLE9BQU9uQyxNQUFQLEtBQWtCLENBQW5CLEdBQXdCMEUsU0FBU3ZDLE1BQVQsQ0FBeEIsR0FBMkMwQyxTQUFTMUMsTUFBVCxDQUR2QjtBQUFBLENBQWYiLCJmaWxlIjoidHJhbnNmb3JtZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzL2dpdGh1Yi9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MsIHN0ZXBQcm9ncmVzcywgc21vb3RoIGFzIGNhbGNTbW9vdGhpbmcgfSBmcm9tICcuL2NhbGMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNvbG9yIGFzIHBhcnNlQ29sb3IgfSBmcm9tICcuL3BhcnNlcnMnO1xuaW1wb3J0IHsgY3VycmVudEZyYW1lVGltZXN0YW1wIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcblxuY29uc3Qgbm9vcCA9ICh2KSA9PiB2O1xuXG4vKipcbiAqIEFwcGVuZCBVbml0XG4gKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBhcHBlbmRcbiAqIGFwcGVuZFVuaXQoJ3B4JywgMjApIC0+ICcyMHB4J1xuICogQHBhcmFtICB7c3RyaW5nfSB1bml0KVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgYXBwZW5kVW5pdCA9ICh1bml0KSA9PiAodikgPT4gYCR7dn0ke3VuaXR9YDtcblxuLyoqXG4gKiBBcHBseSBvZmZzZXRcbiAqIEEgZnVuY3Rpb24gdGhhdCwgZ2l2ZW4gYSB2YWx1ZSwgd2lsbCBnZXQgdGhlIG9mZnNldCBmcm9tIGBmcm9tYFxuICogYW5kIGFwcGx5IGl0IHRvIGB0b2BcbiAqIEBwYXJhbSAge251bWJlcn0gZnJvbVxuICogQHBhcmFtICB7bnVtYmVyfSB0b1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCBhcHBseU9mZnNldCA9IChmcm9tLCB0bykgPT4ge1xuICBjb25zdCBnZXRPZmZzZXQgPSBzdWJ0cmFjdChmcm9tKTtcbiAgY29uc3QgYXBwbHlPZmZzZXRUbyA9IGFkZCh0byk7XG4gIHJldHVybiAodikgPT4gYXBwbHlPZmZzZXRUbyhnZXRPZmZzZXQodikpO1xufTtcblxuLyoqXG4gKiBDbGFtcCB2YWx1ZSBiZXR3ZWVuXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlc3RyaWN0IGEgZ2l2ZW4gdmFsdWUgYmV0d2VlbiBgbWluYCBhbmQgYG1heGBcbiAqIEBwYXJhbSAge251bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgY2xhbXBNYXggPSAobWF4KSA9PiAodikgPT4gTWF0aC5taW4odiwgbWF4KTtcbmV4cG9ydCBjb25zdCBjbGFtcE1pbiA9IChtaW4pID0+ICh2KSA9PiBNYXRoLm1heCh2LCBtaW4pO1xuZXhwb3J0IGNvbnN0IGNsYW1wID0gKG1pbiwgbWF4KSA9PiB7XG4gIGNvbnN0IF9taW4gPSBjbGFtcE1pbihtaW4pO1xuICBjb25zdCBfbWF4ID0gY2xhbXBNYXgobWF4KTtcbiAgcmV0dXJuICh2KSA9PiBfbWluKF9tYXgodikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbmRpdGlvbmFsID0gKGNvbmRpdGlvbiwgaWZUcnVlLCBpZkZhbHNlID0gbm9vcCkgPT4gKHYsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gY29uZGl0aW9uKHYsIGFjdGlvbikgPyBpZlRydWUodiwgYWN0aW9uKSA6IGlmRmFsc2UodiwgYWN0aW9uKTtcbn07XG5cbi8qKlxuICogUGlwZVxuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogcGlwZShtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgcGlwZSA9ICguLi50cmFuc2Zvcm1lcnMpID0+IHtcbiAgY29uc3QgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIHJldHVybiAoYWNjLCAuLi5hcmdzKSA9PiB7XG4gICAgbGV0IHYgPSBhY2M7XG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldKHYsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcblxuLy8gRGVwcmVjYXRlZDogUmVtb3ZlIGluIDcuMS4wXG5leHBvcnQgY29uc3QgZmxvdyA9IHBpcGU7XG5cbi8qKlxuICogSW50ZXJwb2xhdGUgZnJvbSBzZXQgb2YgdmFsdWVzIHRvIGFub3RoZXJcbiAqIEBwYXJhbSAge0FycmF5fSBpbnB1dCBhcnJheVxuICogQHBhcmFtICB7QXJyYXl9IG91dHB1dFxuICogQHBhcmFtICB7RnVuY3Rpb259IHJhbmdlRWFzaW5nXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGludGVycG9sYXRlID0gKGlucHV0LCBvdXRwdXQsIHJhbmdlRWFzaW5nKSA9PiB7XG4gIGNvbnN0IHJhbmdlTGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICBjb25zdCBmaW5hbEluZGV4ID0gcmFuZ2VMZW5ndGggLSAxO1xuXG4gIHJldHVybiAodikgPT4ge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgbGV0IGkgPSAxO1xuXG4gICAgLy8gRmluZCBpbmRleCBvZiByYW5nZSBzdGFydFxuICAgIGZvciAoOyBpIDwgcmFuZ2VMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlucHV0W2ldID4gdiB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByb2dyZXNzSW5SYW5nZSA9IGdldFByb2dyZXNzRnJvbVZhbHVlKGlucHV0W2kgLSAxXSwgaW5wdXRbaV0sIHYpO1xuICAgIGNvbnN0IGVhc2VkUHJvZ3Jlc3MgPSAocmFuZ2VFYXNpbmcpID8gcmFuZ2VFYXNpbmdbaSAtIDFdKHByb2dyZXNzSW5SYW5nZSkgOiBwcm9ncmVzc0luUmFuZ2U7XG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKG91dHB1dFtpIC0gMV0sIG91dHB1dFtpXSwgZWFzZWRQcm9ncmVzcyk7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc3VidHJhY3QgPSAob3JpZ2luKSA9PiAodikgPT4gdiAtIG9yaWdpbjtcbmV4cG9ydCBjb25zdCBhZGQgPSAob3JpZ2luKSA9PiAodikgPT4gdiArIG9yaWdpbjtcbmV4cG9ydCBjb25zdCBkaXZpZGUgPSAob3JpZ2luKSA9PiAodikgPT4gdiAvIG9yaWdpbjtcbmV4cG9ydCBjb25zdCBtdWx0aXBseSA9IChvcmlnaW4pID0+ICh2KSA9PiB2ICogb3JpZ2luO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZyA9IChhbHRlckRpc3BsYWNlbWVudCA9IG5vb3ApID0+IChjb25zdGFudCwgb3JpZ2luKSA9PiAodikgPT4ge1xuICBjb25zdCBkaXNwbGFjZW1lbnQgPSBvcmlnaW4gLSB2O1xuICBjb25zdCBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudCA9IC0gY29uc3RhbnQgKiAoMCAtIGFsdGVyRGlzcGxhY2VtZW50KE1hdGguYWJzKGRpc3BsYWNlbWVudCkpKTtcbiAgcmV0dXJuIChkaXNwbGFjZW1lbnQgPD0gMCkgPyBvcmlnaW4gKyBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudCA6IG9yaWdpbiAtIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IHNwcmluZyA9IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcoKTtcbmV4cG9ydCBjb25zdCBub25saW5lYXJTcHJpbmcgPSBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nKE1hdGguc3FydCk7XG5cbmV4cG9ydCBjb25zdCB3cmFwID0gKG1pbiwgbWF4KSA9PiAodikgPT4ge1xuICBjb25zdCByYW5nZVNpemUgPSBtYXggLSBtaW47XG4gIHJldHVybiAoKHYgLSBtaW4pICUgcmFuZ2VTaXplICsgcmFuZ2VTaXplKSAlIHJhbmdlU2l6ZSArIG1pbjtcbn07XG5cbmV4cG9ydCBjb25zdCBzbW9vdGggPSAoc3RyZW5ndGggPSA1MCkgPT4ge1xuICBsZXQgcHJldmlvdXNWYWx1ZSA9IDA7XG4gIGxldCBsYXN0VXBkYXRlZCA9IDA7XG5cbiAgcmV0dXJuICh2KSA9PiB7XG4gICAgY29uc3QgY3VycmVudEZyYW1lc3RhbXAgPSBjdXJyZW50RnJhbWVUaW1lc3RhbXAoKTtcbiAgICBjb25zdCB0aW1lRGVsdGEgPSAoY3VycmVudEZyYW1lc3RhbXAgIT09IGxhc3RVcGRhdGVkKSA/IGN1cnJlbnRGcmFtZXN0YW1wIC0gbGFzdFVwZGF0ZWQgOiAwO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGltZURlbHRhID8gY2FsY1Ntb290aGluZyh2LCBwcmV2aW91c1ZhbHVlLCB0aW1lRGVsdGEsIHN0cmVuZ3RoKSA6IHByZXZpb3VzVmFsdWU7XG4gICAgbGFzdFVwZGF0ZWQgPSBjdXJyZW50RnJhbWVzdGFtcDtcbiAgICBwcmV2aW91c1ZhbHVlID0gbmV3VmFsdWU7XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNuYXAgPSAocG9pbnRzKSA9PiB7XG4gIGlmICh0eXBlb2YgcG9pbnRzID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiAodikgPT4gTWF0aC5yb3VuZCh2IC8gcG9pbnRzKSAqIHBvaW50cztcbiAgfSBlbHNlIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgbnVtUG9pbnRzID0gcG9pbnRzLmxlbmd0aDtcblxuICAgIHJldHVybiAodikgPT4ge1xuICAgICAgbGV0IGxhc3REaXN0YW5jZSA9IE1hdGguYWJzKHBvaW50c1swXSAtIHYpO1xuXG4gICAgICBmb3IgKGkgPSAxOyBpIDwgbnVtUG9pbnRzOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBwb2ludHNbaV07XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5hYnMocG9pbnQgLSB2KTtcblxuICAgICAgICBpZiAoZGlzdGFuY2UgPT09IDApIHJldHVybiBwb2ludDtcblxuICAgICAgICBpZiAoZGlzdGFuY2UgPiBsYXN0RGlzdGFuY2UpIHJldHVybiBwb2ludHNbaSAtIDFdO1xuXG4gICAgICAgIGlmIChpID09PSBudW1Qb2ludHMgLSAxKSByZXR1cm4gcG9pbnQ7XG5cbiAgICAgICAgbGFzdERpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHN0ZXBzID0gKHN0ZXBzLCBtaW4gPSAwLCBtYXggPSAxLCBkaXJlY3Rpb24gPSAnc3RhcnQnKSA9PiAodikgPT4ge1xuICBjb25zdCBwcm9ncmVzcyA9IGdldFByb2dyZXNzRnJvbVZhbHVlKG1pbiwgbWF4LCB2KTtcbiAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKG1pbiwgbWF4LCBzdGVwUHJvZ3Jlc3Moc3RlcHMsIHByb2dyZXNzLCBkaXJlY3Rpb24pKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IChjaGlsZFRyYW5zZm9ybWVycykgPT4ge1xuICBjb25zdCBtdXRhYmxlU3RhdGUgPSB7fTtcbiAgcmV0dXJuICh2KSA9PiB7XG4gICAgZm9yIChsZXQga2V5IGluIHYpIHtcbiAgICAgIGNvbnN0IGNoaWxkVHJhbnNmb3JtZXIgPSBjaGlsZFRyYW5zZm9ybWVyc1trZXldO1xuICAgICAgaWYgKGNoaWxkVHJhbnNmb3JtZXIpIHtcbiAgICAgICAgbXV0YWJsZVN0YXRlW2tleV0gPSBjaGlsZFRyYW5zZm9ybWVyKHZba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG11dGFibGVTdGF0ZTtcbiAgfTtcbn07XG5cbi8vIFVuaXQgdHJhbnNmb3JtZXJzXG5leHBvcnQgY29uc3QgcGVyY2VudCA9IGFwcGVuZFVuaXQoJyUnKTtcbmV4cG9ydCBjb25zdCBkZWdyZWVzID0gYXBwZW5kVW5pdCgnZGVnJyk7XG5leHBvcnQgY29uc3QgcHggPSBhcHBlbmRVbml0KCdweCcpO1xuXG5leHBvcnQgY29uc3QgcmdiVW5pdCA9IHBpcGUoXG4gIGNsYW1wKDAsIDI1NSksXG4gIE1hdGgucm91bmRcbik7XG5cbmNvbnN0IHJnYmFUZW1wbGF0ZSA9ICh7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhID0gMSB9KSA9PlxuICBgcmdiYSgke3JlZH0sICR7Z3JlZW59LCAke2JsdWV9LCAke2FscGhhfSlgO1xuXG5leHBvcnQgY29uc3QgcmdiYSA9IHBpcGUoXG4gIHRyYW5zZm9ybUNoaWxkVmFsdWVzKHtcbiAgICByZWQ6IHJnYlVuaXQsXG4gICAgZ3JlZW46IHJnYlVuaXQsXG4gICAgYmx1ZTogcmdiVW5pdCxcbiAgICBhbHBoYVxuICB9KSxcbiAgcmdiYVRlbXBsYXRlXG4pO1xuXG5jb25zdCBoc2xhVGVtcGxhdGUgPSAoeyBodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYWxwaGEgPSAxIH0pID0+XG4gIGBoc2xhKCR7aHVlfSwgJHtzYXR1cmF0aW9ufSwgJHtsaWdodG5lc3N9LCAke2FscGhhfSlgO1xuXG5leHBvcnQgY29uc3QgaHNsYSA9IHBpcGUoXG4gIHRyYW5zZm9ybUNoaWxkVmFsdWVzKHtcbiAgICBodWU6IHBhcnNlSW50LFxuICAgIHNhdHVyYXRpb246IHBlcmNlbnQsXG4gICAgbGlnaHRuZXNzOiBwZXJjZW50LFxuICAgIGFscGhhXG4gIH0pLFxuICBoc2xhVGVtcGxhdGVcbik7XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9ICh2KSA9PiB7XG4gIGlmICh2Lmhhc093blByb3BlcnR5KCdyZWQnKSkge1xuICAgIHJldHVybiByZ2JhKHYpO1xuICB9IGVsc2UgaWYgKHYuaGFzT3duUHJvcGVydHkoJ2h1ZScpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cbiAgcmV0dXJuIHY7XG59O1xuXG5leHBvcnQgY29uc3QgYWxwaGEgPSBjbGFtcCgwLCAxKTtcblxuY29uc3QgYmxlbmQgPSAoZnJvbSwgdG8sIHYpID0+IHtcbiAgY29uc3QgZnJvbUV4cG8gPSBmcm9tICogZnJvbTtcbiAgY29uc3QgdG9FeHBvID0gdG8gKiB0bztcbiAgcmV0dXJuIE1hdGguc3FydCh2ICogKHRvRXhwbyAtIGZyb21FeHBvKSArIGZyb21FeHBvKTtcbn07XG4vLyBodHRwOi8vY29kZXBlbi5pby9vc3VibGFrZS9wZW4veEdWVmFOXG5leHBvcnQgY29uc3QgYmxlbmRDb2xvciA9IChmcm9tLCB0bykgPT4ge1xuICBjb25zdCBmcm9tQ29sb3IgPSBpc1N0cmluZyhmcm9tKSA/IHBhcnNlQ29sb3IoZnJvbSkgOiBmcm9tO1xuICBjb25zdCB0b0NvbG9yID0gaXNTdHJpbmcodG8pID8gcGFyc2VDb2xvcih0byk6IHRvO1xuXG4gIGNvbnN0IGJsZW5kZWQgPSB7IC4uLmZyb21Db2xvciB9O1xuXG4gIHJldHVybiAodikgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiBibGVuZGVkKSB7XG4gICAgICBibGVuZGVkW2tleV0gPSBibGVuZChmcm9tQ29sb3Jba2V5XSwgdG9Db2xvcltrZXldLCB2KTtcbiAgICB9XG4gICAgYmxlbmRlZC5yZWQgPSBibGVuZChmcm9tQ29sb3IucmVkLCB0b0NvbG9yLnJlZCwgdik7XG4gICAgYmxlbmRlZC5ncmVlbiA9IGJsZW5kKGZyb21Db2xvci5ncmVlbiwgdG9Db2xvci5ncmVlbiwgdik7XG4gICAgYmxlbmRlZC5ibHVlID0gYmxlbmQoZnJvbUNvbG9yLmJsdWUsIHRvQ29sb3IuYmx1ZSwgdik7XG4gICAgYmxlbmRlZC5hbHBoYSA9IGdldFZhbHVlRnJvbVByb2dyZXNzKGZyb21Db2xvci5hbHBoYSwgdG9Db2xvci5hbHBoYSwgdik7XG4gICAgcmV0dXJuIGJsZW5kZWQ7XG4gIH07XG59O1xuXG4vLyBCZXppZXIgcmVzb2x2ZXJcbi8vIFJlZmFjdG9yZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vaHVnaHNrL2Jlemllci9ibG9iL21hc3Rlci9pbmRleC5qc1xuLyoqXG4jIyBUaGUgTUlUIExpY2Vuc2UgKE1JVCkgIyNcblxuQ29weXJpZ2h0IChjKSAyMDEzIEh1Z2ggS2VubmVkeVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG4gKi9cbmNvbnN0IHJlc29sdmUzID0gKHBvaW50cykgPT4gKHQpID0+IHtcbiAgY29uc3QgdXQgPSAxIC0gdDtcbiAgcmV0dXJuIChwb2ludHNbMF0gKiB1dCArIHBvaW50c1sxXSAqIHQpICogdXQgKyAocG9pbnRzWzFdICogdXQgKyBwb2ludHNbMl0gKiB0KSAqIHQ7XG59O1xuXG5jb25zdCByZXNvbHZlNCA9IChwb2ludHMpID0+ICh0KSA9PiB7XG4gIGNvbnN0IHV0ID0gMSAtIHQ7XG4gIGNvbnN0IGExID0gcG9pbnRzWzFdICogdXQgKyBwb2ludHNbMl0gKiB0O1xuICByZXR1cm4gKChwb2ludHNbMF0gKiB1dCArIHBvaW50c1sxXSAqIHQpICogdXQgKyBhMSAqIHQpICogdXQgKyAoYTEgKiB1dCArIChwb2ludHNbMl0gKiB1dCArIHBvaW50c1szXSAqIHQpICogdCkgKiB0O1xufTtcblxuZXhwb3J0IGNvbnN0IGJlemllciA9IChwb2ludHMpID0+XG4gIChwb2ludHMubGVuZ3RoID09PSAzKSA/IHJlc29sdmUzKHBvaW50cykgOiByZXNvbHZlNChwb2ludHMpO1xuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdmFsdWUtdHlwZXMuanMiXSwibmFtZXMiOlsibnVtYmVyIiwidGVzdCIsInBhcnNlIiwicGFyc2VGbG9hdCIsImFscGhhIiwidHJhbnNmb3JtIiwiZGVncmVlcyIsInBlcmNlbnQiLCJweCIsInNjYWxlIiwiZGVmYXVsdCIsInJnYlVuaXQiLCJyZ2JhIiwiaGV4IiwiaHNsYSIsImNvbG9yIiwiRkxPQVRfUkVHRVgiLCJnZW5lcmF0ZVRva2VuIiwidG9rZW4iLCJjb21wbGV4IiwidiIsIm1hdGNoZXMiLCJtYXRjaCIsImxlbmd0aCIsInBhcnNlZFZhbHVlIiwiZm9yRWFjaCIsInZhbHVlIiwiaSIsImNyZWF0ZVRyYW5zZm9ybWVyIiwicHJvcCIsImNvdW50ZXIiLCJ0ZW1wbGF0ZSIsInJlcGxhY2UiLCJvdXRwdXQiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a1FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQWFBOztBQVVBOztBQU1BOztBQVVPLElBQU1BLDBCQUFTO0FBQ3BCQyxvQkFEb0I7QUFFcEJDLFNBQU9DO0FBRmEsQ0FBZjs7QUFLUDtBQUNPLElBQU1DLHFDQUNSSixNQURRO0FBRVhLO0FBRlcsRUFBTjs7QUFLQSxJQUFNQyw0QkFBVSwyQkFBZSxLQUFmLHdCQUFoQjtBQUNBLElBQU1DLDRCQUFVLDJCQUFlLEdBQWYsd0JBQWhCO0FBQ0EsSUFBTUMsa0JBQUssMkJBQWUsSUFBZixtQkFBWDs7QUFFQSxJQUFNQyxxQ0FDUlQsTUFEUTtBQUVYVSxXQUFTO0FBRkUsRUFBTjs7QUFLQSxJQUFNQyx5Q0FDUlgsTUFEUTtBQUVYSztBQUZXLEVBQU47O0FBS0EsSUFBTU8sc0JBQU87QUFDbEJYLG9CQURrQjtBQUVsQkMsc0JBRmtCO0FBR2xCRztBQUhrQixDQUFiOztBQU1BLElBQU1RLGlDQUNSRCxJQURRO0FBRVhYLG9CQUZXO0FBR1hDO0FBSFcsRUFBTjs7QUFNQSxJQUFNWSxzQkFBTztBQUNsQmIsb0JBRGtCO0FBRWxCQyxzQkFGa0I7QUFHbEJHO0FBSGtCLENBQWI7O0FBTUEsSUFBTVUsd0JBQVE7QUFDbkJiLHVCQURtQjtBQUVuQkQsc0JBRm1CO0FBR25CSTtBQUhtQixDQUFkOztBQU1QLElBQU1XLGNBQWMsa0JBQXBCO0FBQ0EsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFEO0FBQUEsU0FBVyxPQUFPQSxLQUFQLEdBQWUsR0FBMUI7QUFBQSxDQUF0QjtBQUNPLElBQU1DLDRCQUFVO0FBQ3JCbEIsUUFBTSxjQUFDbUIsQ0FBRCxFQUFPO0FBQ1gsUUFBTUMsVUFBVUQsRUFBRUUsS0FBRixJQUFXRixFQUFFRSxLQUFGLENBQVFOLFdBQVIsQ0FBM0I7QUFDQSxXQUFRLG9CQUFRSyxPQUFSLEtBQW9CQSxRQUFRRSxNQUFSLEdBQWlCLENBQTdDO0FBQ0QsR0FKb0I7QUFLckJyQixTQUFPLGVBQUNrQixDQUFELEVBQU87QUFDWixRQUFNSSxjQUFjLEVBQXBCO0FBQ0FKLE1BQUVFLEtBQUYsQ0FBUU4sV0FBUixFQUFxQlMsT0FBckIsQ0FBNkIsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSO0FBQUEsYUFBY0gsWUFBWUcsQ0FBWixJQUFpQnhCLFdBQVd1QixLQUFYLENBQS9CO0FBQUEsS0FBN0I7QUFDQSxXQUFPRixXQUFQO0FBQ0QsR0FUb0I7QUFVckJJLHFCQUFtQiwyQkFBQ0MsSUFBRCxFQUFVO0FBQzNCLFFBQUlDLFVBQVUsQ0FBZDtBQUNBLFFBQU1DLFdBQVdGLEtBQUtHLE9BQUwsQ0FBYWhCLFdBQWIsRUFBMEI7QUFBQSxhQUFNQyxjQUFjYSxTQUFkLENBQU47QUFBQSxLQUExQixDQUFqQjs7QUFFQSxXQUFPLFVBQUNWLENBQUQsRUFBTztBQUNaLFVBQUlhLFNBQVNGLFFBQWI7QUFDQSxXQUFLLElBQUlHLEdBQVQsSUFBZ0JkLENBQWhCLEVBQW1CO0FBQ2pCLFlBQUlBLEVBQUVlLGNBQUYsQ0FBaUJELEdBQWpCLENBQUosRUFBMkI7QUFDekJELG1CQUFTQSxPQUFPRCxPQUFQLENBQWVmLGNBQWNpQixHQUFkLENBQWYsRUFBbUNkLEVBQUVjLEdBQUYsQ0FBbkMsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0QsTUFBUDtBQUNELEtBVEQ7QUFVRDtBQXhCb0IsQ0FBaEIiLCJmaWxlIjoidmFsdWUtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMvZ2l0aHViL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVmFsdWUgdHlwZXNcbiAqXG4gKiBhbHBoYVxuICogZGVncmVlc1xuICogaGV4XG4gKiBoc2xhXG4gKiBwZXJjZW50XG4gKiBweFxuICogcmdiVW5pdFxuICogcmdiXG4gKiBzY2FsZVxuICovXG5pbXBvcnQge1xuICByZ2JVbml0IGFzIHRyYW5zZm9ybVJHQlVuaXQsXG4gIHJnYmEgYXMgdHJhbnNmb3JtUmdiYSxcbiAgYWxwaGEgYXMgdHJhbnNmb3JtQWxwaGEsXG4gIGhzbGEgYXMgdHJhbnNmb3JtSHNsYSxcbiAgY29sb3IgYXMgdHJhbnNmb3JtQ29sb3IsXG4gIHB4IGFzIHRyYW5zZm9ybVB4LFxuICBwZXJjZW50IGFzIHRyYW5zZm9ybVBlcmNlbnQsXG4gIGRlZ3JlZXMgYXMgdHJhbnNmb3JtRGVncmVlc1xufSBmcm9tICcuL3RyYW5zZm9ybWVycyc7XG5pbXBvcnQge1xuICBoZXggYXMgcGFyc2VIZXgsXG4gIHJnYmEgYXMgcGFyc2VSZ2JhLFxuICBoc2xhIGFzIHBhcnNlSHNsYSxcbiAgY29sb3IgYXMgcGFyc2VDb2xvclxufSBmcm9tICcuL3BhcnNlcnMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlVW5pdFR5cGUsXG4gIGlzQXJyYXksXG4gIGlzTnVtLFxuICBpc1JnYixcbiAgaXNIc2wsXG4gIGlzSGV4LFxuICBpc0NvbG9yXG59IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgbnVtYmVyID0ge1xuICB0ZXN0OiBpc051bSxcbiAgcGFyc2U6IHBhcnNlRmxvYXRcbn07XG5cbi8vIFZhbHVlIHR5cGVzXG5leHBvcnQgY29uc3QgYWxwaGEgPSB7XG4gIC4uLm51bWJlcixcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1BbHBoYVxufTtcblxuZXhwb3J0IGNvbnN0IGRlZ3JlZXMgPSBjcmVhdGVVbml0VHlwZSgnZGVnJywgdHJhbnNmb3JtRGVncmVlcyk7XG5leHBvcnQgY29uc3QgcGVyY2VudCA9IGNyZWF0ZVVuaXRUeXBlKCclJywgdHJhbnNmb3JtUGVyY2VudCk7XG5leHBvcnQgY29uc3QgcHggPSBjcmVhdGVVbml0VHlwZSgncHgnLCB0cmFuc2Zvcm1QeCk7XG5cbmV4cG9ydCBjb25zdCBzY2FsZSA9IHtcbiAgLi4ubnVtYmVyLFxuICBkZWZhdWx0OiAxXG59O1xuXG5leHBvcnQgY29uc3QgcmdiVW5pdCA9IHtcbiAgLi4ubnVtYmVyLFxuICB0cmFuc2Zvcm06IHRyYW5zZm9ybVJHQlVuaXRcbn07XG5cbmV4cG9ydCBjb25zdCByZ2JhID0ge1xuICB0ZXN0OiBpc1JnYixcbiAgcGFyc2U6IHBhcnNlUmdiYSxcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1SZ2JhXG59O1xuXG5leHBvcnQgY29uc3QgaGV4ID0ge1xuICAuLi5yZ2JhLFxuICB0ZXN0OiBpc0hleCxcbiAgcGFyc2U6IHBhcnNlSGV4XG59O1xuXG5leHBvcnQgY29uc3QgaHNsYSA9IHtcbiAgdGVzdDogaXNIc2wsXG4gIHBhcnNlOiBwYXJzZUhzbGEsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtSHNsYVxufTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yID0ge1xuICBwYXJzZTogcGFyc2VDb2xvcixcbiAgdGVzdDogaXNDb2xvcixcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1Db2xvclxufTtcblxuY29uc3QgRkxPQVRfUkVHRVggPSAvKC0pPyhcXGRbXFxkXFwuXSopL2c7XG5jb25zdCBnZW5lcmF0ZVRva2VuID0gKHRva2VuKSA9PiAnJHsnICsgdG9rZW4gKyAnfSc7XG5leHBvcnQgY29uc3QgY29tcGxleCA9IHtcbiAgdGVzdDogKHYpID0+IHtcbiAgICBjb25zdCBtYXRjaGVzID0gdi5tYXRjaCAmJiB2Lm1hdGNoKEZMT0FUX1JFR0VYKTtcbiAgICByZXR1cm4gKGlzQXJyYXkobWF0Y2hlcykgJiYgbWF0Y2hlcy5sZW5ndGggPiAxKTtcbiAgfSxcbiAgcGFyc2U6ICh2KSA9PiB7XG4gICAgY29uc3QgcGFyc2VkVmFsdWUgPSB7fTtcbiAgICB2Lm1hdGNoKEZMT0FUX1JFR0VYKS5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4gcGFyc2VkVmFsdWVbaV0gPSBwYXJzZUZsb2F0KHZhbHVlKSk7XG4gICAgcmV0dXJuIHBhcnNlZFZhbHVlO1xuICB9LFxuICBjcmVhdGVUcmFuc2Zvcm1lcjogKHByb3ApID0+IHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBwcm9wLnJlcGxhY2UoRkxPQVRfUkVHRVgsICgpID0+IGdlbmVyYXRlVG9rZW4oY291bnRlcisrKSk7XG5cbiAgICByZXR1cm4gKHYpID0+IHtcbiAgICAgIGxldCBvdXRwdXQgPSB0ZW1wbGF0ZTtcbiAgICAgIGZvciAobGV0IGtleSBpbiB2KSB7XG4gICAgICAgIGlmICh2Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuICB9XG59O1xuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3R3ZWVuLmpzIl0sIm5hbWVzIjpbImNsYW1wUHJvZ3Jlc3MiLCJORVhUX1NURVBTIiwibG9vcCIsInR3ZWVuIiwic3RhcnQiLCJ5b3lvIiwicmV2ZXJzZSIsImZsaXAiLCJUd2VlbiIsIm9uU3RhcnQiLCJwcm9wcyIsImR1cmF0aW9uIiwicGxheURpcmVjdGlvbiIsImVsYXBzZWQiLCJwcm9ncmVzcyIsInVwZGF0ZSIsImVhc2UiLCJmcm9tIiwidG8iLCJpc01hbnVhbFVwZGF0ZSIsImlzQWN0aW9uQ29tcGxldGUiLCJpc0NvbXBsZXRlIiwiaXNTdGVwVGFrZW4iLCJrZXkiLCJuZXh0U3RlcCIsImNvdW50UHJvcCIsInN0ZXBNYXgiLCJnZXRQcm9wIiwic3RlcENvdW50Iiwic2V0UHJvcHMiLCJnZXRFbGFwc2VkIiwic2VlayIsImlzQWN0aXZlIiwic2NoZWR1bGVkVXBkYXRlIiwiZGVmYXVsdFByb3BzIiwiZmxpcENvdW50IiwieW95b0NvdW50IiwibG9vcENvdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQix5QkFBTSxDQUFOLEVBQVMsQ0FBVCxDQUF0Qjs7QUFFQSxJQUFNQyxhQUFhO0FBQ2pCQyxRQUFNLGNBQUNDLEtBQUQ7QUFBQSxXQUFXQSxNQUFNQyxLQUFOLEVBQVg7QUFBQSxHQURXO0FBRWpCQyxRQUFNLGNBQUNGLEtBQUQ7QUFBQSxXQUFXQSxNQUFNRyxPQUFOLEdBQWdCRixLQUFoQixFQUFYO0FBQUEsR0FGVztBQUdqQkcsUUFBTSxjQUFDSixLQUFEO0FBQUEsV0FBV0EsTUFBTUksSUFBTixHQUFhSCxLQUFiLEVBQVg7QUFBQTtBQUhXLENBQW5COztJQU1NSSxLOzs7Ozs7Ozs7a0JBZUpDLE8sc0JBQVU7QUFBQSxpQkFDNEIsS0FBS0MsS0FEakM7QUFBQSxRQUNBQyxRQURBLFVBQ0FBLFFBREE7QUFBQSxRQUNVQyxhQURWLFVB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QUtLLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxRQUFJLENBQUMsS0FBS2EsUUFBTCxFQUFMLEVBQXNCLEtBQUtDLGVBQUw7QUFDdkIsRzs7Ozs7QUFuRkd6QixLLENBQ0cwQixZLEdBQWU7QUFDcEJ2QixZQUFVLEdBRFU7QUFFcEJLLHVCQUZvQjtBQUdwQkMsUUFBTSxDQUhjO0FBSXBCQyxNQUFJLENBSmdCO0FBS3BCWCxRQUFNLENBTGM7QUFNcEI0QixhQUFXLENBTlM7QUFPcEI5QixRQUFNLENBUGM7QUFRcEIrQixhQUFXLENBUlM7QUFTcEJsQyxRQUFNLENBVGM7QUFVcEJtQyxhQUFXLENBVlM7QUFXcEJ6QixpQkFBZTtBQVhLLEM7O2tCQXFGVCxVQUFDRixLQUFEO0FBQUEsU0FBVyxJQUFJRixLQUFKLENBQVVFLEtBQVYsQ0FBWDtBQUFBLEMiLCJmaWxlIjoidHdlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMvZ2l0aHViL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgdGltZVNpbmNlTGFzdEZyYW1lIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcbmltcG9ydCB7IGNsYW1wIH0gZnJvbSAnLi4vaW5jL3RyYW5zZm9ybWVycyc7XG5pbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBlYXNlT3V0IH0gZnJvbSAnLi4vaW5jL2Vhc2luZyc7XG5cbmNvbnN0IGNsYW1wUHJvZ3Jlc3MgPSBjbGFtcCgwLCAxKTtcblxuY29uc3QgTkVYVF9TVEVQUyA9IHtcbiAgbG9vcDogKHR3ZWVuKSA9PiB0d2Vlbi5zdGFydCgpLFxuICB5b3lvOiAodHdlZW4pID0+IHR3ZWVuLnJldmVyc2UoKS5zdGFydCgpLFxuICBmbGlwOiAodHdlZW4pID0+IHR3ZWVuLmZsaXAoKS5zdGFydCgpXG59O1xuXG5jbGFzcyBUd2VlbiBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZHVyYXRpb246IDMwMCxcbiAgICBlYXNlOiBlYXNlT3V0LFxuICAgIGZyb206IDAsXG4gICAgdG86IDEsXG4gICAgZmxpcDogMCxcbiAgICBmbGlwQ291bnQ6IDAsXG4gICAgeW95bzogMCxcbiAgICB5b3lvQ291bnQ6IDAsXG4gICAgbG9vcDogMCxcbiAgICBsb29wQ291bnQ6IDAsXG4gICAgcGxheURpcmVjdGlvbjogMVxuICB9O1xuXG4gIG9uU3RhcnQoKSB7XG4gICAgY29uc3QgeyBkdXJhdGlvbiwgcGxheURpcmVjdGlvbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuZWxhcHNlZCA9IChwbGF5RGlyZWN0aW9uID09PSAxKSA/IDAgOiBkdXJhdGlvbjtcbiAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGR1cmF0aW9uLCBlYXNlLCBmcm9tLCB0bywgcGxheURpcmVjdGlvbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghdGhpcy5pc01hbnVhbFVwZGF0ZSkge1xuICAgICAgdGhpcy5lbGFwc2VkICs9IHRpbWVTaW5jZUxhc3RGcmFtZSgpICogcGxheURpcmVjdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLmlzTWFudWFsVXBkYXRlID0gZmFsc2U7XG4gICAgdGhpcy5wcm9ncmVzcyA9IGNsYW1wUHJvZ3Jlc3MoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoMCwgZHVyYXRpb24sIHRoaXMuZWxhcHNlZCkpO1xuXG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGZyb20sIHRvLCBlYXNlKHRoaXMucHJvZ3Jlc3MpKTtcbiAgfVxuXG4gIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgY29uc3QgeyBkdXJhdGlvbiwgcGxheURpcmVjdGlvbiwgeW95bywgbG9vcCwgZmxpcCB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgaXNDb21wbGV0ZSA9IChwbGF5RGlyZWN0aW9uID09PSAxKSA/ICh0aGlzLmVsYXBzZWQgPj0gZHVyYXRpb24pIDogKHRoaXMuZWxhcHNlZCA8PSAwKTtcblxuICAgIGlmIChpc0NvbXBsZXRlICYmICh5b3lvIHx8IGxvb3AgfHwgZmxpcCkpIHtcbiAgICAgIGxldCBpc1N0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBrZXkgaW4gTkVYVF9TVEVQUykge1xuICAgICAgICBjb25zdCBuZXh0U3RlcCA9IE5FWFRfU1RFUFNba2V5XTtcbiAgICAgICAgY29uc3QgY291bnRQcm9wID0ga2V5ICsgJ0NvdW50JztcbiAgICAgICAgY29uc3Qgc3RlcE1heCA9IHRoaXMuZ2V0UHJvcChrZXkpO1xuICAgICAgICBjb25zdCBzdGVwQ291bnQgPSB0aGlzLmdldFByb3AoY291bnRQcm9wKTtcblxuICAgICAgICBpZiAoc3RlcE1heCA+IHN0ZXBDb3VudCkge1xuICAgICAgICAgIHRoaXMuc2V0UHJvcHMoe1xuICAgICAgICAgICAgW2NvdW50UHJvcF06IHN0ZXBDb3VudCArIDFcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBuZXh0U3RlcCh0aGlzKTtcbiAgICAgICAgICBpc1N0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzU3RlcFRha2VuKSBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzQ29tcGxldGU7XG4gIH1cblxuICBnZXRFbGFwc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmVsYXBzZWQ7XG4gIH1cblxuICBmbGlwKCkge1xuICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMucHJvcHMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG4gICAgW3RoaXMucHJvcHMuZnJvbSwgdGhpcy5wcm9wcy50b10gPSBbdGhpcy5wcm9wcy50bywgdGhpcy5wcm9wcy5mcm9tXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldmVyc2UoKSB7XG4gICAgdGhpcy5wcm9wcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2Vlayhwcm9ncmVzcykge1xuICAgIGNvbnN0IHsgZHVyYXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5lbGFwc2VkID0gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoMCwgZHVyYXRpb24sIHByb2dyZXNzKTtcbiAgICB0aGlzLmlzTWFudWFsVXBkYXRlID0gdHJ1ZTtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkgdGhpcy5zY2hlZHVsZWRVcGRhdGUoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IG5ldyBUd2Vlbihwcm9wcyk7XG4iXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiUmVuZGVyZXIiLCJwcm9wcyIsInJlbmRlciIsImJpbmQiLCJjb25zdHJ1Y3RvciIsImRlZmF1bHRQcm9wcyIsInN0YXRlIiwiY2hhbmdlZFZhbHVlcyIsImdldCIsImtleSIsInVuZGVmaW5lZCIsInJlYWQiLCJvblJlYWQiLCJzZXQiLCJhcmdzIiwidmFsdWVzIiwic2V0VmFsdWUiLCJ2YWx1ZSIsImhhc0NoYW5nZWQiLCJjdXJyZW50VmFsdWUiLCJudW1WYWx1ZXMiLCJsZW5ndGgiLCJpIiwidmFsdWVLZXkiLCJpbmRleE9mIiwicHVzaCIsImZvcmNlUmVuZGVyIiwib25SZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0lBRU1BLFE7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQyxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQWQ7O0FBRUEsU0FBS0YsS0FBTCxnQkFDSyxLQUFLRyxXQUFMLENBQWlCQyxZQUR0QixFQUVLSixLQUZMOztBQUtBLFNBQUtLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixFQUFyQjtBQUNEOztBQUVEOzs7Ozs7Ozs7O3FCQVFBQyxHLGdCQUFJQyxHLEVBQUs7QUFDUCxRQUFJQSxHQUFKLEVBQVM7QUFDUCxVQUFJLEtBQUtILEtBQUwsQ0FBV0csR0FBWCxNQUFvQkMsU0FBeEIsRUFBbUM7QUFDakMsZUFBTyxLQUFLSixLQUFMLENBQVdHLEdBQVgsQ0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sS0FBS0UsSUFBTCxDQUFVRixHQUFWLENBQVA7QUFDRDtBQUNGLEtBTkQsTUFNTztBQUNMLGFBQU8sS0FBS0gsS0FBWjtBQUNEO0FBQ0YsRzs7QUFFRDs7Ozs7OztxQkFLQUssSSxpQkFBS0YsRyxFQUFLO0FBQ1IsUUFBSSxLQUFLRyxNQUFULEVBQWlCO0FB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QixHQUE0QixDQUE1QjtBQUNBLFNBQUtILFVBQUwsR0FBa0IsS0FBbEI7O0FBRUEsV0FBTyxJQUFQO0FBQ0QsRzs7Ozs7a0JBR1lsQixRIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzL2dpdGh1Yi9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvbkZyYW1lUmVuZGVyIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcbmltcG9ydCB7IGlzQXJyYXksIGlzT2JqLCBpc051bSwgaXNTdHJpbmcgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jbGFzcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzLFxuICAgICAgLi4ucHJvcHNcbiAgICB9O1xuXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMuY2hhbmdlZFZhbHVlcyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IHN0YXRlLlxuICAgKiBJZiBga2V5YCBpcyBub3QgZGVmaW5lZCwgcmV0dXJuIGVudGlyZSBjYWNoZWQgc3RhdGUuXG4gICAqIElmIGBrZXlgIGlzIGRlZmluZWQsIHJldHVybiBjYWNoZWQgdmFsdWUgaWYgcHJlc2VudC5cbiAgICogSWYgYGtleWAgaXMgZGVmaW5lZCBhbmQgY2FjaGVkIHZhbHVlIGlzIG5vdCBwcmVzZW50LCByZWFkIGFuZCByZXR1cm4uXG4gICAqIEBwYXJhbSAge3N0cmluZ30gKG9wdGlvbmFsKSBrZXkgb2YgdmFsdWVcbiAgICogQHJldHVybiB7dmFsdWV9XG4gICAqL1xuICBnZXQoa2V5KSB7XG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkKGtleSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIHZhbHVlIGFjY29yZGluZyB0byBgb25SZWFkYFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IE5hbWUgb2YgcHJvcGVydHkgdG8gcmVhZFxuICAgKiBAcmV0dXJuIHtbdHlwZV19XG4gICAqL1xuICByZWFkKGtleSkge1xuICAgIGlmICh0aGlzLm9uUmVhZCkge1xuICAgICAgcmV0dXJuIHRoaXMub25SZWFkKGtleSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBgc3RhdGVgIHdpdGggbmV3IHZhbHVlcyBhbmQgc2NoZWR1bGUgYHJlbmRlcmAuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXNcbiAgICogQHBhcmFtIHt2YWx1ZX0gdmFsdWUgdG9zZXRcbiAgICovXG4gIHNldCguLi5hcmdzKSB7XG4gICAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgWyB2YWx1ZXMgXSA9IGFyZ3M7XG4gICAgICAvLyBTZXQgbXVsdGlwbGUgdmFsdWVzXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShrZXksIHZhbHVlc1trZXldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgWyBrZXksIHZhbHVlIF0gPSBhcmdzO1xuICAgICAgdGhpcy5zZXRWYWx1ZShrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKSB7XG4gICAgICBvbkZyYW1lUmVuZGVyKHRoaXMucmVuZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vID4gV2lsZXkgLSA2IGluIHRoZSBNb3JuaW5nXG4gIC8qKlxuICAgKiBTZXQgYSBzaW5nbGUgdmFsdWVcbiAgICogSWYgYSBzdHJpbmcgb3IgbnVtYmVyLCBzZXQgZGlyZWN0bHkuXG4gICAqIElmIGFuIG9iamVjdCBvciBhcnJheSwgY3JlYXRlIG5ldyBvYmplY3Qgb3IgYXJyYXlcbiAgICogaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0LiBUaGVuIHNoYWxsb3cgY29tcGFyZVxuICAgKiB0byBzZXQgYW5kIGNvbXBhcmUgaW5kaXZpZHVhbCB2YWx1ZXMuXG4gICAqIE9uZSBvZiB0aGUgY2xlYXJlciBkcmF3YmFja3MgYW5kIGFubm95YW5jZXMgd2l0aFxuICAgKiB1c2luZyBtdXRhYmxlIGluc3RlYWQgb2YgaW1tdXRhYmxlIHN0YXRlcy5cbiAgICogQHBhcmFtIHtbdHlwZV19IGtleVxuICAgKiBAcGFyYW0ge1t0eXBlXX0gdmFsdWVcbiAgICovXG4gIHNldFZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLnN0YXRlW2tleV07XG5cbiAgICAvLyBJZiBudW1iZXIgb3Igc3RyaW5nLCBzZXQgZGlyZWN0bHlcbiAgICBpZiAoaXNOdW0odmFsdWUpIHx8IGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gW107XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG51bVZhbHVlcyA9IHZhbHVlLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVmFsdWVzOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XVtpXSAhPT0gdmFsdWVbaV0pIHtcbiAgICAgICAgICB0aGlzLnN0YXRlW2tleV1baV0gPSB2YWx1ZVtpXTtcbiAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc09iaih2YWx1ZSkpIHtcbiAgICAgIGlmICghY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCB2YWx1ZUtleSBpbiB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZVtrZXldW3ZhbHVlS2V5XSAhPT0gdmFsdWVbdmFsdWVLZXldKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldW3ZhbHVlS2V5XSA9IHZhbHVlW3ZhbHVlS2V5XTtcbiAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCAmJiB0aGlzLmNoYW5nZWRWYWx1ZXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgdGhpcy5jaGFuZ2VkVmFsdWVzLnB1c2goa2V5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYG9uUmVuZGVyYCBpZiB2YWx1ZXMgaGF2ZSBjaGFuZ2VkIG9yIGBmb3JjZVJlbmRlcmBcbiAgICogaXMgc2V0IHRvIHRydWUuXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuICByZW5kZXIoZm9yY2VSZW5kZXIgPSBmYWxzZSkge1xuICAgIGlmICgoZm9yY2VSZW5kZXIgfHwgdGhpcy5oYXNDaGFuZ2VkKSAmJiB0aGlzLm9uUmVuZGVyKSB7XG4gICAgICB0aGlzLm9uUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VkVmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcbiJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyJdLCJuYW1lcyI6WyJheGVzIiwidHJhbnNmb3JtUHJvcHMiLCJ4IiwieSIsInoiLCJTQ0FMRSIsIlJPVEFURSIsIlRSQU5TRk9STV9QRVJTUEVDVElWRSIsIlRFUk1TIiwiZm9yRWFjaCIsInRlcm0iLCJheGlzIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNQSxPQUFPLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWI7O0FBRUEsSUFBSUMsaUJBQWlCO0FBQ25CQyxLQUFHLElBRGdCO0FBRW5CQyxLQUFHLElBRmdCO0FBR25CQyxLQUFHO0FBSGdCLENBQXJCOztBQU1BLElBQU1DLFFBQVEsT0FBZDtBQUNBLElBQU1DLFNBQVMsUUFBZjtBQUNBLElBQU1DLHdCQUF3QixzQkFBOUI7QUFDQSxJQUFNQyxRQUFRLENBQUMsV0FBRCxFQUFjSCxLQUFkLEVBQXFCQyxNQUFyQixFQUE2QixNQUE3QixFQUFxQ0MscUJBQXJDLENBQWQ7O0FBRUFOLGVBQWVLLE1BQWYsSUFBeUJMLGVBQWVJLEtBQWYsSUFBd0JKLGVBQWVNLHFCQUFmLElBQXdDLElBQXpGOztBQUVBQyxNQUFNQyxPQUFOLENBQWMsVUFBQ0MsSUFBRDtBQUFBLFNBQVVWLEtBQUtTLE9BQUwsQ0FBYSxVQUFDRSxJQUFEO0FBQUEsV0FBVVYsZUFBZVMsT0FBT0MsSUFBdEIsSUFBOEIsSUFBeEM7QUFBQSxHQUFiLENBQVY7QUFBQSxDQUFkOztrQkFFZVYsYyIsImZpbGUiOiJ0cmFuc2Zvcm0tcHJvcHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMvZ2l0aHViL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4ZXMgPSBbJ1gnLCAnWScsICdaJ107XG5cbmxldCB0cmFuc2Zvcm1Qcm9wcyA9IHtcbiAgeDogdHJ1ZSxcbiAgeTogdHJ1ZSxcbiAgejogdHJ1ZVxufTtcblxuY29uc3QgU0NBTEUgPSAnc2NhbGUnO1xuY29uc3QgUk9UQVRFID0gJ3JvdGF0ZSc7XG5jb25zdCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xuY29uc3QgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKCh0ZXJtKSA9PiBheGVzLmZvckVhY2goKGF4aXMpID0+IHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWUpKTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNmb3JtUHJvcHM7Il19

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.svgPath = exports.svg = exports.css = exports.Renderer = exports.value = exports.spring = exports.stagger = exports.tween = exports.trackOffset = exports.touches = exports.pointer = exports.physics = exports.parallel = exports.delay = exports.crossFade = exports.composite = exports.colorTween = exports.chain = exports.Action = exports.valueTypes = exports.transform = exports.easing = exports.calc = exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;

var _framesync = __webpack_require__(1);

Object.defineProperty(exports, 'onFrameStart', {
  enumerable: true,
  get: function get() {
    return _framesync.onFrameStart;
  }
});
Object.defineProperty(exports, 'onFrameUpdate', {
  enumerable: true,
  get: function get() {
    return _framesync.onFrameUpdate;
  }
});
Object.defineProperty(exports, 'onFrameRender', {
  enumerable: true,
  get: function get() {
    return _framesync.onFrameRender;
  }
});
Object.defineProperty(exports, 'onFrameEnd', {
  enumerable: true,
  get: function get() {
    return _framesync.onFrameEnd;
  }
});
Object.defineProperty(exports, 'cancelOnFrameStart', {
  enumerable: true,
  get: function get() {
    return _framesync.cancelOnFrameStart;
  }
});
Object.defineProperty(exports, 'cancelOnFrameUpdate', {
  enumerable: true,
  get: function get() {
    return _framesync.cancelOnFrameUpdate;
  }
});
Object.defineProperty(exports, 'cancelOnFrameRender', {
  enumerable: true,
  get: function get() {
    return _framesync.cancelOnFrameRender;
  }
});
Object.defineProperty(exports, 'cancelOnFrameEnd', {
  enumerable: true,
  get: function get() {
    return _framesync.cancelOnFrameEnd;
  }
});
Object.defineProperty(exports, 'timeSinceLastFrame', {
  enumerable: true,
  get: function get() {
    return _framesync.timeSinceLastFrame;
  }
});
Object.defineProperty(exports, 'currentFrameTimestamp', {
  enumerable: true,
  get: function get() {
    return _framesync.currentFrameTimestamp;
  }
});

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

exports.calc = _calc;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOlsib25GcmFtZVN0YXJ0Iiwib25GcmFtZVVwZGF0ZSIsIm9uRnJhbWVSZW5kZXIiLCJvbkZyYW1lRW5kIiwiY2FuY2VsT25GcmFtZVN0YXJ0IiwiY2FuY2VsT25GcmFtZVVwZGF0ZSIsImNhbmNlbE9uRnJhbWVSZW5kZXIiLCJjYW5jZWxPbkZyYW1lRW5kIiwidGltZVNpbmNlTGFzdEZyYW1lIiwiY3VycmVudEZyYW1lVGltZXN0YW1wIiwiY2FsYyIsImVhc2luZyIsInRyYW5zZm9ybSIsInZhbHVlVHlwZXMiLCJBY3Rpb24iLCJjaGFpbiIsImNvbG9yVHdlZW4iLCJjb21wb3NpdGUiLCJjcm9zc0ZhZGUiLCJkZWxheSIsInBhcmFsbGVsIiwicGh5c2ljcyIsInBvaW50ZXIiLCJ0b3VjaGVzIiwidHJhY2tPZmZzZXQiLCJ0d2VlbiIsInN0YWdnZXIiLCJzcHJpbmciLCJ2YWx1ZSIsIlJlbmRlcmVyIiwiY3NzIiwic3ZnIiwic3ZnUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzQkFFRUEsWTs7Ozs7O3NCQUNBQyxhOzs7Ozs7c0JBQ0FDLGE7Ozs7OztzQkFDQUMsVTs7Ozs7O3NCQUNBQyxrQjs7Ozs7O3NCQUNBQyxtQjs7Ozs7O3NCQUNBQyxtQjs7Ozs7O3NCQUNBQyxnQjs7Ozs7O3NCQUNBQyxrQjs7Ozs7O3NCQUNBQyxxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUdVQyxJO1FBQ0FDLE07UUFDQUMsUztRQUNBQyxVOztBQUVaOztRQUNPQyxNO1FBQ0FDLEs7UUFDQUMsVTtRQUNBQyxTO1FBQ0FDLFM7UUFDQUMsSztBQUNQOztRQUNPQyxRO1FBQ0FDLE87UUFDQUMsTztRQUNBQyxPO1FBQ0FDLFc7UUFDQUMsSztRQUNBQyxPO1FBQ0FDLE07UUFDQUMsSzs7QUFFUDs7UUFDT0MsUTtRQUNBQyxHO1FBQ0FDLEc7UUFDQUMsTyIsImZpbGUiOiJwb3Btb3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMvZ2l0aHViL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZyYW1lc3luYyBzY2hlZHVsZXJzXG5leHBvcnQge1xuICBvbkZyYW1lU3RhcnQsXG4gIG9uRnJhbWVVcGRhdGUsXG4gIG9uRnJhbWVSZW5kZXIsXG4gIG9uRnJhbWVFbmQsXG4gIGNhbmNlbE9uRnJhbWVTdGFydCxcbiAgY2FuY2VsT25GcmFtZVVwZGF0ZSxcbiAgY2FuY2VsT25GcmFtZVJlbmRlcixcbiAgY2FuY2VsT25GcmFtZUVuZCxcbiAgdGltZVNpbmNlTGFzdEZyYW1lLFxuICBjdXJyZW50RnJhbWVUaW1lc3RhbXBcbn0gZnJvbSAnLi9mcmFtZXN5bmMnO1xuXG5leHBvcnQgKiBhcyBjYWxjIGZyb20gJy4vaW5jL2NhbGMnO1xuZXhwb3J0ICogYXMgZWFzaW5nIGZyb20gJy4vaW5jL2Vhc2luZyc7XG5leHBvcnQgKiBhcyB0cmFuc2Zvcm0gZnJvbSAnLi9pbmMvdHJhbnNmb3JtZXJzJztcbmV4cG9ydCAqIGFzIHZhbHVlVHlwZXMgZnJvbSAnLi9pbmMvdmFsdWUtdHlwZXMnO1xuXG4vLyBBY3Rpb25zXG5leHBvcnQgQWN0aW9uIGZyb20gJy4vYWN0aW9ucyc7XG5leHBvcnQgY2hhaW4gZnJvbSAnLi9hY3Rpb25zL2NoYWluJztcbmV4cG9ydCBjb2xvclR3ZWVuIGZyb20gJy4vYWN0aW9ucy9jb2xvci10d2Vlbic7XG5leHBvcnQgY29tcG9zaXRlIGZyb20gJy4vYWN0aW9ucy9jb21wb3NpdGUnO1xuZXhwb3J0IGNyb3NzRmFkZSBmcm9tICcuL2FjdGlvbnMvY3Jvc3MtZmFkZSc7XG5leHBvcnQgZGVsYXkgZnJvbSAnLi9hY3Rpb25zL2RlbGF5Jztcbi8vZXhwb3J0IGluZXJ0aWEgZnJvbSAnLi9hY3Rpb25zL2luZXJ0aWEnO1xuZXhwb3J0IHBhcmFsbGVsIGZyb20gJy4vYWN0aW9ucy9wYXJhbGxlbCc7XG5leHBvcnQgcGh5c2ljcyBmcm9tICcuL2FjdGlvbnMvcGh5c2ljcyc7XG5leHBvcnQgcG9pbnRlciBmcm9tICcuL2FjdGlvbnMvcG9pbnRlcic7XG5leHBvcnQgdG91Y2hlcyBmcm9tICcuL2FjdGlvbnMvdG91Y2hlcyc7XG5leHBvcnQgdHJhY2tPZmZzZXQgZnJvbSAnLi9hY3Rpb25zL3RyYWNrLW9mZnNldCc7XG5leHBvcnQgdHdlZW4gZnJvbSAnLi9hY3Rpb25zL3R3ZWVuJztcbmV4cG9ydCBzdGFnZ2VyIGZyb20gJy4vYWN0aW9ucy9zdGFnZ2VyJztcbmV4cG9ydCBzcHJpbmcgZnJvbSAnLi9hY3Rpb25zL3NwcmluZyc7XG5leHBvcnQgdmFsdWUgZnJvbSAnLi9hY3Rpb25zL3ZhbHVlJztcblxuLy8gUmVuZGVyZXJzXG5leHBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcnMnO1xuZXhwb3J0IGNzcyBmcm9tICcuL3JlbmRlcmVycy9jc3MnO1xuZXhwb3J0IHN2ZyBmcm9tICcuL3JlbmRlcmVycy9zdmcnO1xuZXhwb3J0IHN2Z1BhdGggZnJvbSAnLi9yZW5kZXJlcnMvc3ZnLXBhdGgnO1xuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvZWFzaW5nLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIIiwiY3JlYXRlUmV2ZXJzZWRFYXNpbmciLCJlYXNpbmciLCJwIiwiY3JlYXRlTWlycm9yZWRFYXNpbmciLCJsaW5lYXIiLCJjcmVhdGVFeHBvSW4iLCJwb3dlciIsImVhc2VJbiIsImVhc2VPdXQiLCJlYXNlSW5PdXQiLCJjaXJjSW4iLCJNYXRoIiwic2luIiwiYWNvcyIsImNpcmNPdXQiLCJjaXJjSW5PdXQiLCJjcmVhdGVCYWNrSW4iLCJiYWNrSW4iLCJiYWNrT3V0IiwiYmFja0luT3V0IiwiY3JlYXRlQW50aWNpcGF0ZUVhc2luZyIsImJhY2tFYXNpbmciLCJwb3ciLCJhbnRpY2lwYXRlIiwiY3ViaWNCZXppZXIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInhCZXppZXIiLCJ5QmV6aWVyIiwidCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxJQUFNQSw2QkFBNkIsS0FBbkM7O0FBRU8sSUFBTUMsc0RBQXVCLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsTUFBRDtBQUFBLFNBQVksVUFBQ0MsQ0FBRDtBQUFBLFdBQU8sSUFBSUQsT0FBTyxJQUFJQyxDQUFYLENBQVg7QUFBQSxHQUFaO0FBQUEsQ0FBN0I7QUFDQSxJQUFNQyxzREFBdUIsU0FBdkJBLG9CQUF1QixDQUFDRixNQUFEO0FBQUEsU0FBWSxVQUFDQyxDQUFEO0FBQUEsV0FBUUEsS0FBSyxHQUFOLEdBQWFELE9BQU8sSUFBSUMsQ0FBWCxJQUFnQixDQUE3QixHQUFpQyxDQUFDLElBQUlELE9BQU8sS0FBSyxJQUFJQyxDQUFULENBQVAsQ0FBTCxJQUE0QixDQUFwRTtBQUFBLEdBQVo7QUFBQSxDQUE3Qjs7QUFFQSxJQUFNRSwwQkFBUyxTQUFUQSxNQUFTLENBQUNGLENBQUQ7QUFBQSxTQUFPQSxDQUFQO0FBQUEsQ0FBZjs7QUFFQSxJQUFNRyxzQ0FBZSxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxTQUFXLFVBQUNKLENBQUQ7QUFBQSxvQkFBT0EsQ0FBUCxFQUFZSSxLQUFaO0FBQUEsR0FBWDtBQUFBLENBQXJCO0FBQ0EsSUFBTUMsMEJBQVNGLGFBQWEsQ0FBYixDQUFmO0FBQ0EsSUFBTUcsNEJBQVVSLHFCQUFxQk8sTUFBckIsQ0FBaEI7QUFDQSxJQUFNRSxnQ0FBWU4scUJBQXFCSSxNQUFyQixDQUFsQjs7QUFFQSxJQUFNRywwQkFBUyxTQUFUQSxNQUFTLENBQUNSLENBQUQ7QUFBQSxTQUFPLElBQUlTLEtBQUtDLEdBQUwsQ0FBU0QsS0FBS0UsSUFBTCxDQUFVWCxDQUFWLENBQVQsQ0FBWDtBQUFBLENBQWY7QUFDQSxJQUFNWSw0QkFBVWQscUJBQXFCVSxNQUFyQixDQUFoQjtBQUNBLElBQU1LLGdDQUFZWixxQkFBcUJXLE9BQXJCLENBQWxCOztBQUVBLElBQU1FLHNDQUFlLFNBQWZBLFlBQWUsQ0FBQ1YsS0FBRDtBQUFBLFNBQVcsVUFBQ0osQ0FBRDtBQUFBLFdBQVFBLElBQUlBLENBQUwsSUFBVyxDQUFDSSxRQUFRLENBQVQsSUFBY0osQ0FBZCxHQUFrQkksS0FBN0IsQ0FBUDtBQUFBLEdBQVg7QUFBQSxDQUFyQjtBQUNBLElBQU1XLDBCQUFTRCxhQUFhakIsMEJBQWIsQ0FBZjtBQUNBLElBQU1tQiw0QkFBVWxCLHFCQUFxQmlCLE1BQXJCLENBQWhCO0FBQ0EsSUFBTUUsZ0NBQVloQixxQkFBcUJjLE1BQXJCLENBQWxCOztBQUVBLElBQU1HLDBEQUF5QixTQUF6QkEsc0JBQXlCLENBQUNkLEtBQUQsRUFBVztBQUMvQyxNQUFNZSxhQUFhTCxhQUFhVixLQUFiLENBQW5CO0FBQ0EsU0FBTyxVQUFDSixDQUFEO0FBQUEsV0FBUSxDQUFDQSxLQUFLLENBQU4sSUFBVyxDQUFaLEdBQWlCLE1BQU1tQixXQUFXbkIsQ0FBWCxDQUF2QixHQUF1QyxPQUFPLElBQUlTLEtBQUtXLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELElBQU9wQixJQUFJLENBQVgsQ0FBWixDQUFYLENBQTlDO0FBQUEsR0FBUDtBQUNELENBSE07O0FBS0EsSUFBTXFCLGtDQUFhSCx1QkFBdUJyQiwwQkFBdkIsQ0FBbkI7O0FBRUEsSUFBTXlCLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsRUFBRCxFQUFLQyxFQUFMLEVBQVNDLEVBQVQsRUFBYUMsRUFBYixFQUFvQjtBQUM3QyxNQUFNQyxVQUFVLDBCQUFPLENBQVAsRUFBVUosRUFBVixFQUFjRSxFQUFkLEVBQWtCLENBQWxCLENBQWhCO0FBQ0EsTUFBTUcsVUFBVSwwQkFBTyxDQUFQLEVBQVVKLEVBQVYsRUFBY0UsRUFBZCxFQUFrQixDQUFsQixDQUFoQjs7QUFFQSxTQUFPLFVBQUNHLENBQUQ7QUFBQSxXQUFPRCxRQUFRRCxRQUFRRSxDQUFSLENBQVIsQ0FBUDtBQUFBLEdBQVA7QUFDRCxDQUxNIiwiZmlsZSI6ImVhc2luZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy9naXRodWIvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmV6aWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMnO1xuXG5jb25zdCBERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCA9IDEuNTI1O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSAoZWFzaW5nKSA9PiAocCkgPT4gMSAtIGVhc2luZygxIC0gcCk7XG5leHBvcnQgY29uc3QgY3JlYXRlTWlycm9yZWRFYXNpbmcgPSAoZWFzaW5nKSA9PiAocCkgPT4gKHAgPD0gMC41KSA/IGVhc2luZygyICogcCkgLyAyIDogKDIgLSBlYXNpbmcoMiAqICgxIC0gcCkpKSAvIDI7XG5cbmV4cG9ydCBjb25zdCBsaW5lYXIgPSAocCkgPT4gcDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUV4cG9JbiA9IChwb3dlcikgPT4gKHApID0+IHAgKiogcG93ZXI7XG5leHBvcnQgY29uc3QgZWFzZUluID0gY3JlYXRlRXhwb0luKDIpO1xuZXhwb3J0IGNvbnN0IGVhc2VPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNlSW4pO1xuZXhwb3J0IGNvbnN0IGVhc2VJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGVhc2VJbik7XG5cbmV4cG9ydCBjb25zdCBjaXJjSW4gPSAocCkgPT4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwKSk7XG5leHBvcnQgY29uc3QgY2lyY091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGNpcmNJbik7XG5leHBvcnQgY29uc3QgY2lyY0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoY2lyY091dCk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCYWNrSW4gPSAocG93ZXIpID0+IChwKSA9PiAocCAqIHApICogKChwb3dlciArIDEpICogcCAtIHBvd2VyKTtcbmV4cG9ydCBjb25zdCBiYWNrSW4gPSBjcmVhdGVCYWNrSW4oREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xuZXhwb3J0IGNvbnN0IGJhY2tPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhiYWNrSW4pO1xuZXhwb3J0IGNvbnN0IGJhY2tJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGJhY2tJbik7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gKHBvd2VyKSA9PiB7XG4gIGNvbnN0IGJhY2tFYXNpbmcgPSBjcmVhdGVCYWNrSW4ocG93ZXIpO1xuICByZXR1cm4gKHApID0+ICgocCAqPSAyKSA8IDEpID8gMC41ICogYmFja0Vhc2luZyhwKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHAgLSAxKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFudGljaXBhdGUgPSBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcblxuZXhwb3J0IGNvbnN0IGN1YmljQmV6aWVyID0gKHgxLCB5MSwgeDIsIHkyKSA9PiB7XG4gIGNvbnN0IHhCZXppZXIgPSBiZXppZXIoMCwgeDEsIHgyLCAxKTtcbiAgY29uc3QgeUJlemllciA9IGJlemllcigwLCB5MSwgeTIsIDEpO1xuXG4gIHJldHVybiAodCkgPT4geUJlemllcih4QmV6aWVyKHQpKTtcbn07XG4iXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qcyJdLCJuYW1lcyI6WyJDb21wb3NpdGVBY3Rpb24iLCJwcm9wcyIsImFjdGlvbnMiLCJyZW1haW5pbmdQcm9wcyIsImN1cnJlbnQiLCJhY3Rpb25LZXlzIiwiYWRkQWN0aW9ucyIsImtleSIsImluZGV4T2YiLCJwdXNoIiwib25VcGRhdGUiLCJ2Iiwic2NoZWR1bGVkVXBkYXRlIiwic2V0UHJvcHMiLCJfb25TdG9wIiwibnVtQWN0aXZlQWN0aW9ucyIsImFkZExpc3RlbmVyIiwib25TdGFydCIsImxlbmd0aCIsImZvckVhY2giLCJzdGFydCIsIm9uU3RvcCIsInN0b3AiLCJnZXRWZWxvY2l0eSIsInZlbG9jaXR5IiwiaXNBY3Rpb25Db21wbGV0ZSIsImRlZmF1bHRQcm9wcyIsInBhc3NpdmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxlOzs7QUFLSiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLFFBQ1RDLE9BRFMsR0FDc0JELEtBRHRCLENBQ1RDLE9BRFM7QUFBQSxRQUNHQyxjQURILDRCQUNzQkYsS0FEdEI7O0FBQUEsaURBRWpCLG1CQUFNRSxjQUFOLENBRmlCOztBQUdqQixVQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxVQUFLQyxVQUFMLENBQWdCSixPQUFoQjtBQUxpQjtBQU1sQjs7NEJBRURJLFUsdUJBQVdKLE8sRUFBUztBQUFBOztBQUFBLCtCQUNQSyxHQURPO0FBRWhCLFVBQUksT0FBS0YsVUFBTCxDQUFnQkcsT0FBaEIsQ0FBd0JELEdBQXhCLE1BQWlDLENBQUMsQ0FBdEMsRUFBeUM7QUFDdkMsZUFBS0YsVUFBTCxDQUFnQkksSUFBaEIsQ0FBcUJGLEdBQXJCO0FBQ0Q7O0FBRUQsYUFBS0EsR0FBTCxJQUFZTCxRQUFRSyxHQUFSLENBQVo7O0FBRUEsVUFBTUcsV0FBVyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QixlQUFLUCxPQUFMLENBQWFHLEdBQWIsSUFBb0JJLENBQXBCO0FBQ0Esc0NBQWMsT0FBS0MsZUFBbkI7QUFDRCxPQUhEOztBQUtBLGFBQUtMLEdBQUwsRUFDR00sUUFESCxDQUNZO0FBQ1JDLGlCQUFTO0FBQUEsaUJBQU0sT0FBS0MsZ0JBQUwsRUFBTjtBQUFBO0FBREQsT0FEWixFQUlHQyxXQUpILENBSWVOLFFBSmY7QUFiZ0I7O0FBQ2xCLFNBQUssSUFBTUgsR0FBWCxJQUFrQkwsT0FBbEIsRUFBMkI7QUFBQSxZQUFoQkssR0FBZ0I7QUFpQjFCO0FBQ0YsRzs7NEJBRURVLE8sc0JBQVU7QUFBQTs7QUFDUixTQUFLRixnQkFBTCxHQUF3QixLQUFLVixVQUFMLENBQWdCYSxNQUF4QztBQUNBLFNBQUtiLFVBQUwsQ0FBZ0JjLE9BQWhCLENBQXdCLFVBQUNaLEdBQUQ7QUFBQSxhQUFTLE9BQUtBLEdBQUwsRUFBVWEsS0FBVixFQUFUO0FBQUEsS0FBeEI7QUFDRCxHOzs0QkFFREMsTSxxQkFBUztBQUFBOztBQUNQLFNBQUtoQixVQUFMLENBQWdCYyxPQUFoQixDQUF3QixVQUFDWixHQUFEO0FBQUEsYUFBUyxPQUFLQSxHQUFMLEVBQVVlLElBQVYsRUFBVDtBQUFBLEtBQXhCO0FBQ0QsRzs7NEJBRURDLFcsMEJBQWM7QUFBQTs7QUFDWixRQUFNQyxXQUFXLEVBQWpCO0FBQ0EsU0FBS25CLFVBQUwsQ0FBZ0JjLE9BQWhCLENBQXdCLFVBQUNaLEdBQUQ7QUFBQSxhQUFTaUIsU0FBU2pCLEdBQVQsSUFBZ0IsT0FBS0EsR0FBTCxFQUFVZ0IsV0FBVixFQUF6QjtBQUFBLEtBQXhCO0FBQ0EsV0FBT0MsUUFBUDtBQUNELEc7OzRCQUVEQyxnQiwrQkFBbUI7QUFDakIsV0FBUSxLQUFLVixnQkFBTCxLQUEwQixDQUFsQztBQUNELEc7Ozs7O0FBbkRHZixlLENBQ0cwQixZLEdBQWU7QUFDcEJDLFdBQVM7QUFEVyxDOztrQkFxRFQsVUFBQ3pCLE9BQUQsRUFBVUQsS0FBVixFQUFvQjtBQUNqQyxTQUFPLElBQUlELGVBQUo7QUFDTEU7QUFESyxLQUVGRCxLQUZFLEVBQVA7QUFJRCxDIiwiZmlsZSI6ImNvbXBvc2l0ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy9naXRodWIvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgeyBvbkZyYW1lVXBkYXRlIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcblxuY2xhc3MgQ29tcG9zaXRlQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBjb25zdCB7IGFjdGlvbnMsIC4uLnJlbWFpbmluZ1Byb3BzIH0gPSBwcm9wcztcbiAgICBzdXBlcihyZW1haW5pbmdQcm9wcyk7XG4gICAgdGhpcy5jdXJyZW50ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzID0gW107XG4gICAgdGhpcy5hZGRBY3Rpb25zKGFjdGlvbnMpO1xuICB9XG5cbiAgYWRkQWN0aW9ucyhhY3Rpb25zKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYWN0aW9ucykge1xuICAgICAgaWYgKHRoaXMuYWN0aW9uS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uS2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXNba2V5XSA9IGFjdGlvbnNba2V5XTtcblxuICAgICAgY29uc3Qgb25VcGRhdGUgPSAodikgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRba2V5XSA9IHY7XG4gICAgICAgIG9uRnJhbWVVcGRhdGUodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgICAgfTtcblxuICAgICAgdGhpc1trZXldXG4gICAgICAgIC5zZXRQcm9wcyh7XG4gICAgICAgICAgX29uU3RvcDogKCkgPT4gdGhpcy5udW1BY3RpdmVBY3Rpb25zLS1cbiAgICAgICAgfSlcbiAgICAgICAgLmFkZExpc3RlbmVyKG9uVXBkYXRlKTtcbiAgICB9XG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IHRoaXMuYWN0aW9uS2V5cy5sZW5ndGg7XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goKGtleSkgPT4gdGhpc1trZXldLnN0YXJ0KCkpO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKChrZXkpID0+IHRoaXNba2V5XS5zdG9wKCkpO1xuICB9XG5cbiAgZ2V0VmVsb2NpdHkoKSB7XG4gICAgY29uc3QgdmVsb2NpdHkgPSB7fTtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaCgoa2V5KSA9PiB2ZWxvY2l0eVtrZXldID0gdGhpc1trZXldLmdldFZlbG9jaXR5KCkpO1xuICAgIHJldHVybiB2ZWxvY2l0eTtcbiAgfVxuXG4gIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuICh0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChhY3Rpb25zLCBwcm9wcykgPT4ge1xuICByZXR1cm4gbmV3IENvbXBvc2l0ZUFjdGlvbih7XG4gICAgYWN0aW9ucyxcbiAgICAuLi5wcm9wc1xuICB9KTtcbn07XG4iXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BhcmFsbGVsLmpzIl0sIm5hbWVzIjpbIlBhcmFsbGVsIiwicHJvcHMiLCJhY3Rpb25zIiwicmVtYWluaW5nUHJvcHMiLCJjdXJyZW50IiwiYWRkQWN0aW9ucyIsImFkZEFjdGlvbiIsImFjdGlvbiIsImluZGV4T2YiLCJwdXNoIiwiaSIsImxlbmd0aCIsIm9uVXBkYXRlIiwidiIsInNjaGVkdWxlZFVwZGF0ZSIsImdldCIsInNldFByb3BzIiwiX29uU3RvcCIsIm51bUFjdGl2ZUFjdGlvbnMiLCJhZGRMaXN0ZW5lciIsImZvckVhY2giLCJvblN0YXJ0Iiwic3RhcnQiLCJvblN0b3AiLCJzdG9wIiwiZ2V0VmVsb2NpdHkiLCJtYXAiLCJpc0FjdGlvbkNvbXBsZXRlIiwiZ2V0Q2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLFFBQ1RDLE9BRFMsR0FDc0JELEtBRHRCLENBQ1RDLE9BRFM7QUFBQSxRQUNHQyxjQURILDRCQUNzQkYsS0FEdEI7O0FBQUEsaURBRWpCLG1CQUFNRSxjQUFOLENBRmlCOztBQUdqQixVQUFLRCxPQUFMLEdBQWUsRUFBZjtBQUNBLFVBQUtFLE9BQUwsR0FBZSxFQUFmO0FBQ0EsVUFBS0MsVUFBTCxDQUFnQkgsT0FBaEI7QUFMaUI7QUFNbEI7O3FCQUVESSxTLHNCQUFVQyxNLEVBQVE7QUFBQTs7QUFDaEIsUUFBSSxLQUFLTCxPQUFMLENBQWFNLE9BQWIsQ0FBcUJELE1BQXJCLE1BQWlDLENBQUMsQ0FBdEMsRUFBeUM7O0FBRXpDLFNBQUtMLE9BQUwsQ0FBYU8sSUFBYixDQUFrQkYsTUFBbEI7O0FBRUEsUUFBTUcsSUFBSSxLQUFLUixPQUFMLENBQWFTLE1BQWIsR0FBc0IsQ0FBaEM7QUFDQSxRQUFNQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCLGFBQUtULE9BQUwsQ0FBYU0sQ0FBYixJQUFrQkcsQ0FBbEI7QUFDQSxvQ0FBYyxPQUFLQyxlQUFuQjtBQUNELEtBSEQ7O0FBS0FGLGFBQVNMLE9BQU9RLEdBQVAsRUFBVDs7QUFFQVIsV0FDR1MsUUFESCxDQUNZO0FBQ1JDLGVBQVM7QUFBQSxlQUFNLE9BQUtDLGdCQUFMLEVBQU47QUFBQTtBQURELEtBRFosRUFJR0MsV0FKSCxDQUllUCxRQUpmO0FBS0QsRzs7cUJBRURQLFUsdUJBQVdILE8sRUFBUztBQUFBOztBQUNsQkEsWUFBUWtCLE9BQVIsQ0FBZ0IsVUFBQ2IsTUFBRDtBQUFBLGFBQVksT0FBS0QsU0FBTCxDQUFlQyxNQUFmLENBQVo7QUFBQSxLQUFoQjtBQUNELEc7O3FCQUVEYyxPLHNCQUFVO0FBQ1IsU0FBS0gsZ0JBQUwsR0FBd0IsS0FBS2hCLE9BQUwsQ0FBYVMsTUFBckM7QUFDQSxTQUFLVCxPQUFMLENBQWFrQixPQUFiLENBQXFCLFVBQUNiLE1BQUQ7QUFBQSxhQUFZQSxPQUFPZSxLQUFQLEVBQVo7QUFBQSxLQUFyQjtBQUNELEc7O3FCQUVEQyxNLHFCQUFTO0FBQ1AsU0FBS3JCLE9BQUwsQ0FBYWtCLE9BQWIsQ0FBcUIsVUFBQ2IsTUFBRDtBQUFBLGFBQVlBLE9BQU9pQixJQUFQLEVBQVo7QUFBQSxLQUFyQjtBQUNELEc7O3FCQUVEQyxXLDBCQUFjO0FBQ1osV0FBTyxLQUFLdkIsT0FBTCxDQUFhd0IsR0FBYixDQUFpQixVQUFDbkIsTUFBRDtBQUFBLGFBQVlBLE9BQU9rQixXQUFQLEVBQVo7QUFBQSxLQUFqQixDQUFQO0FBQ0QsRzs7cUJBRURFLGdCLCtCQUFtQjtBQUNqQixXQUFRLEtBQUtULGdCQUFMLEtBQTBCLENBQWxDO0FBQ0QsRzs7cUJBRURVLFcsMEJBQWM7QUFDWixXQUFPLEtBQUsxQixPQUFaO0FBQ0QsRzs7Ozs7a0JBR1ksVUFBQ0EsT0FBRCxFQUFVRCxLQUFWO0FBQUEsU0FBb0IsSUFBSUQsUUFBSixZQUFlRSxnQkFBZixJQUEyQkQsS0FBM0IsRUFBcEI7QUFBQSxDIiwiZmlsZSI6InBhcmFsbGVsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzL2dpdGh1Yi9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IG9uRnJhbWVVcGRhdGUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuXG5jbGFzcyBQYXJhbGxlbCBleHRlbmRzIEFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgY29uc3QgeyBhY3Rpb25zLCAuLi5yZW1haW5pbmdQcm9wcyB9ID0gcHJvcHM7XG4gICAgc3VwZXIocmVtYWluaW5nUHJvcHMpO1xuICAgIHRoaXMuYWN0aW9ucyA9IFtdO1xuICAgIHRoaXMuY3VycmVudCA9IFtdO1xuICAgIHRoaXMuYWRkQWN0aW9ucyhhY3Rpb25zKTtcbiAgfVxuXG4gIGFkZEFjdGlvbihhY3Rpb24pIHtcbiAgICBpZiAodGhpcy5hY3Rpb25zLmluZGV4T2YoYWN0aW9uKSAhPT0gLTEpIHJldHVybjtcblxuICAgIHRoaXMuYWN0aW9ucy5wdXNoKGFjdGlvbik7XG5cbiAgICBjb25zdCBpID0gdGhpcy5hY3Rpb25zLmxlbmd0aCAtIDE7XG4gICAgY29uc3Qgb25VcGRhdGUgPSAodikgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50W2ldID0gdjtcbiAgICAgIG9uRnJhbWVVcGRhdGUodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH07XG5cbiAgICBvblVwZGF0ZShhY3Rpb24uZ2V0KCkpO1xuXG4gICAgYWN0aW9uXG4gICAgICAuc2V0UHJvcHMoe1xuICAgICAgICBfb25TdG9wOiAoKSA9PiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLVxuICAgICAgfSlcbiAgICAgIC5hZGRMaXN0ZW5lcihvblVwZGF0ZSk7XG4gIH1cblxuICBhZGRBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4gdGhpcy5hZGRBY3Rpb24oYWN0aW9uKSk7XG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IHRoaXMuYWN0aW9ucy5sZW5ndGg7XG4gICAgdGhpcy5hY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4gYWN0aW9uLnN0YXJ0KCkpO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIHRoaXMuYWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IGFjdGlvbi5zdG9wKCkpO1xuICB9XG5cbiAgZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5tYXAoKGFjdGlvbikgPT4gYWN0aW9uLmdldFZlbG9jaXR5KCkpO1xuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gKHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMCk7XG4gIH1cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25zO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChhY3Rpb25zLCBwcm9wcykgPT4gbmV3IFBhcmFsbGVsKHsgYWN0aW9ucywgLi4ucHJvcHMgfSk7XG4iXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3ZhbHVlLmpzIl0sIm5hbWVzIjpbIlZhbHVlIiwic2V0IiwidiIsInRvVXBkYXRlIiwic2NoZWR1bGVkVXBkYXRlIiwidXBkYXRlIiwidW5kZWZpbmVkIiwiY3VycmVudCIsInN0b3BSZWdpc3RlcmVkQWN0aW9uIiwiYWN0aW9uIiwiaXNBY3RpdmUiLCJzdG9wIiwicmVnaXN0ZXJBY3Rpb24iLCJvblN0b3AiLCJkZWZhdWx0UHJvcHMiLCJwYXNzaXZlIiwib25VcGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEs7Ozs7Ozs7OztrQkFLSkMsRyxnQkFBSUMsQyxFQUFHO0FBQ0wsU0FBS0MsUUFBTCxHQUFnQkQsQ0FBaEI7QUFDQSxrQ0FBYyxLQUFLRSxlQUFuQjtBQUNBLFdBQU9GLENBQVA7QUFDRCxHOztrQkFFREcsTSxxQkFBUztBQUNQLFdBQVEsS0FBS0YsUUFBTCxLQUFrQkcsU0FBbkIsR0FBZ0MsS0FBS0gsUUFBckMsR0FBZ0QsS0FBS0ksT0FBNUQ7QUFDRCxHOztrQkFFREMsb0IsbUNBQXVCO0FBQ3JCLFFBQUksS0FBS0MsTUFBTCxJQUFlLEtBQUtBLE1BQUwsQ0FBWUMsUUFBWixFQUFuQixFQUEyQyxLQUFLRCxNQUFMLENBQVlFLElBQVo7QUFDM0MsU0FBS0YsTUFBTCxHQUFjSCxTQUFkO0FBQ0QsRzs7a0JBRURNLGMsMkJBQWVILE0sRUFBUTtBQUNyQixTQUFLRCxvQkFBTDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFdBQU8sSUFBUDtBQUNELEc7O2tCQUVESSxNLHFCQUFTO0FBQ1AsU0FBS0wsb0JBQUw7QUFDRCxHOzs7OztBQTVCR1IsSyxDQUNHYyxZLEdBQWU7QUFDcEJDLFdBQVM7QUFEVyxDOztrQkE4QlQsVUFBQ1IsT0FBRCxFQUFVUyxRQUFWO0FBQUEsU0FBdUIsSUFBSWhCLEtBQUosQ0FBVSxFQUFFTyxnQkFBRixFQUFXUyxrQkFBWCxFQUFWLENBQXZCO0FBQUEsQyIsImZpbGUiOiJ2YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy9naXRodWIvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgeyBvbkZyYW1lVXBkYXRlIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcblxuY2xhc3MgVmFsdWUgZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfTtcblxuICBzZXQodikge1xuICAgIHRoaXMudG9VcGRhdGUgPSB2O1xuICAgIG9uRnJhbWVVcGRhdGUodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIHJldHVybiB2O1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHJldHVybiAodGhpcy50b1VwZGF0ZSAhPT0gdW5kZWZpbmVkKSA/IHRoaXMudG9VcGRhdGUgOiB0aGlzLmN1cnJlbnQ7XG4gIH1cblxuICBzdG9wUmVnaXN0ZXJlZEFjdGlvbigpIHtcbiAgICBpZiAodGhpcy5hY3Rpb24gJiYgdGhpcy5hY3Rpb24uaXNBY3RpdmUoKSkgdGhpcy5hY3Rpb24uc3RvcCgpO1xuICAgIHRoaXMuYWN0aW9uID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmVnaXN0ZXJBY3Rpb24oYWN0aW9uKSB7XG4gICAgdGhpcy5zdG9wUmVnaXN0ZXJlZEFjdGlvbigpO1xuICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIHRoaXMuc3RvcFJlZ2lzdGVyZWRBY3Rpb24oKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VycmVudCwgb25VcGRhdGUpID0+IG5ldyBWYWx1ZSh7IGN1cnJlbnQsIG9uVXBkYXRlIH0pO1xuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvcGFyc2Vycy5qcyJdLCJuYW1lcyI6WyJoZXgiLCJ2IiwiciIsImciLCJiIiwibGVuZ3RoIiwic3Vic3RyIiwicmVkIiwicGFyc2VJbnQiLCJncmVlbiIsImJsdWUiLCJhbHBoYSIsInJnYmEiLCJoc2xhIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRU8sSUFBTUEsb0JBQU0sU0FBTkEsR0FBTSxDQUFDQyxDQUFELEVBQU87QUFDeEIsTUFBSUMsVUFBSjtBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFVQyxVQUFWOztBQUVBO0FBQ0EsTUFBSUgsRUFBRUksTUFBRixHQUFXLENBQWYsRUFBa0I7QUFDaEJILFFBQUlELEVBQUVLLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUFKO0FBQ0FILFFBQUlGLEVBQUVLLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUFKO0FBQ0FGLFFBQUlILEVBQUVLLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUFKOztBQUVGO0FBQ0MsR0FORCxNQU1PO0FBQ0xKLFFBQUlELEVBQUVLLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUFKO0FBQ0FILFFBQUlGLEVBQUVLLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUFKO0FBQ0FGLFFBQUlILEVBQUVLLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUFKO0FBQ0FKLFNBQUtBLENBQUw7QUFDQUMsU0FBS0EsQ0FBTDtBQUNBQyxTQUFLQSxDQUFMO0FBQ0Q7O0FBRUQsU0FBTztBQUNMRyxTQUFLQyxTQUFTTixDQUFULEVBQVksRUFBWixDQURBO0FBRUxPLFdBQU9ELFNBQVNMLENBQVQsRUFBWSxFQUFaLENBRkY7QUFHTE8sVUFBTUYsU0FBU0osQ0FBVCxFQUFZLEVBQVosQ0FIRDtBQUlMTyxXQUFPO0FBSkYsR0FBUDtBQU1ELENBekJNOztBQTJCQSxJQUFNQyxzQkFBTyw2QkFBaUIsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixNQUFqQixFQUF5QixPQUF6QixDQUFqQixDQUFiOztBQUVBLElBQU1DLHNCQUFPLDZCQUFpQixDQUFDLEtBQUQsRUFBUSxZQUFSLEVBQXNCLFdBQXRCLEVBQW1DLE9BQW5DLENBQWpCLENBQWI7O0FBRUEsSUFBTUMsd0JBQVEsU0FBUkEsS0FBUSxDQUFDYixDQUFELEVBQU87QUFDMUIsTUFBSSxrQkFBTUEsQ0FBTixDQUFKLEVBQWM7QUFDWixXQUFPVyxLQUFLWCxDQUFMLENBQVA7QUFDRCxHQUZELE1BRU8sSUFBSSxrQkFBTUEsQ0FBTixDQUFKLEVBQWM7QUFDbkIsV0FBT0QsSUFBSUMsQ0FBSixDQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUksa0JBQU1BLENBQU4sQ0FBSixFQUFjO0FBQ25CLFdBQU9ZLEtBQUtaLENBQUwsQ0FBUDtBQUNEOztBQUVELFNBQU9BLENBQVA7QUFDRCxDQVZNIiwiZmlsZSI6InBhcnNlcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMvZ2l0aHViL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNwbGl0Q29sb3JWYWx1ZXMsIGlzUmdiLCBpc0hleCwgaXNIc2wgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IGhleCA9ICh2KSA9PiB7XG4gIGxldCByLCBnLCBiO1xuXG4gIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gIGlmICh2Lmxlbmd0aCA+IDQpIHtcbiAgICByID0gdi5zdWJzdHIoMSwgMik7XG4gICAgZyA9IHYuc3Vic3RyKDMsIDIpO1xuICAgIGIgPSB2LnN1YnN0cig1LCAyKTtcblxuICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICB9IGVsc2Uge1xuICAgIHIgPSB2LnN1YnN0cigxLCAxKTtcbiAgICBnID0gdi5zdWJzdHIoMiwgMSk7XG4gICAgYiA9IHYuc3Vic3RyKDMsIDEpO1xuICAgIHIgKz0gcjtcbiAgICBnICs9IGc7XG4gICAgYiArPSBiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICBncmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgIGJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICBhbHBoYTogMVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHJnYmEgPSBzcGxpdENvbG9yVmFsdWVzKFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAnYWxwaGEnXSk7XG5cbmV4cG9ydCBjb25zdCBoc2xhID0gc3BsaXRDb2xvclZhbHVlcyhbJ2h1ZScsICdzYXR1cmF0aW9uJywgJ2xpZ2h0bmVzcycsICdhbHBoYSddKTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yID0gKHYpID0+IHtcbiAgaWYgKGlzUmdiKHYpKSB7XG4gICAgcmV0dXJuIHJnYmEodik7XG4gIH0gZWxzZSBpZiAoaXNIZXgodikpIHtcbiAgICByZXR1cm4gaGV4KHYpO1xuICB9IGVsc2UgaWYgKGlzSHNsKHYpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cblxuICByZXR1cm4gdjtcbn07XG4iXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NoYWluLmpzIl0sIm5hbWVzIjpbIkNoYWluIiwicGxheU5leHQiLCJwcm9wcyIsImkiLCJvcmRlciIsImxlbmd0aCIsInBsYXlDdXJyZW50IiwiY29tcGxldGUiLCJvblN0YXJ0IiwiX29uQ29tcGxldGUiLCJzdGFydCIsIm9uU3RvcCIsInN0b3AiLCJvbkNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7Ozs7Ozs7Ozs7c0lBTUpDLFEsR0FBVyxZQUFNO0FBQUEsd0JBQ00sTUFBS0MsS0FEWDtBQUFBLFVBQ1BDLENBRE8sZUFDUEEsQ0FETztBQUFBLFVBQ0pDLEtBREksZUFDSkEsS0FESTs7QUFFZixVQUFJRCxJQUFJQyxNQUFNQyxNQUFOLEdBQWUsQ0FBdkIsRUFBMEI7QUFDeEIsY0FBS0gsS0FBTCxDQUFXQyxDQUFYO0FBQ0EsY0FBS0csV0FBTDtBQUNELE9BSEQsTUFHTztBQUNMLGNBQUtDLFFBQUw7QUFDRDtBQUNGLEs7OztrQkFiREMsTyxzQkFBVTtBQUNSLFNBQUtOLEtBQUwsQ0FBV0MsQ0FBWCxHQUFlLENBQWY7QUFDQSxTQUFLRyxXQUFMO0FBQ0QsRzs7a0JBWURBLFcsMEJBQWM7QUFBQSxpQkFDUyxLQUFLSixLQURkO0FBQUEsUUFDSkMsQ0FESSxVQUNKQSxDQURJO0FBQUEsUUFDREMsS0FEQyxVQUNEQSxLQURDOztBQUVaQSxVQUFNRCxDQUFOLEVBQVNELEtBQVQsQ0FBZU8sV0FBZixHQUE2QixLQUFLUixRQUFsQztBQUNBRyxVQUFNRCxDQUFOLEVBQVNPLEtBQVQ7QUFDRCxHOztrQkFFREMsTSxxQkFBUztBQUFBLGtCQUNjLEtBQUtULEtBRG5CO0FBQUEsUUFDQ0MsQ0FERCxXQUNDQSxDQUREO0FBQUEsUUFDSUMsS0FESixXQUNJQSxLQURKOztBQUVQQSxVQUFNRCxDQUFOLEVBQVNTLElBQVQ7QUFDRCxHOzs7OztrQkFHWSxVQUFDUixLQUFELEVBQVFTLFVBQVI7QUFBQSxTQUF1QixJQUFJYixLQUFKLENBQVUsRUFBRUksWUFBRixFQUFTUyxzQkFBVCxFQUFWLENBQXZCO0FBQUEsQyIsImZpbGUiOiJjaGFpbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy9naXRodWIvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5cbmNsYXNzIENoYWluIGV4dGVuZHMgQWN0aW9uIHtcbiAgb25TdGFydCgpIHtcbiAgICB0aGlzLnByb3BzLmkgPSAwO1xuICAgIHRoaXMucGxheUN1cnJlbnQoKTtcbiAgfVxuXG4gIHBsYXlOZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaSwgb3JkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGkgPCBvcmRlci5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnByb3BzLmkrKztcbiAgICAgIHRoaXMucGxheUN1cnJlbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBwbGF5Q3VycmVudCgpIHtcbiAgICBjb25zdCB7IGksIG9yZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIG9yZGVyW2ldLnByb3BzLl9vbkNvbXBsZXRlID0gdGhpcy5wbGF5TmV4dDtcbiAgICBvcmRlcltpXS5zdGFydCgpO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIGNvbnN0IHsgaSwgb3JkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgb3JkZXJbaV0uc3RvcCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChvcmRlciwgb25Db21wbGV0ZSkgPT4gbmV3IENoYWluKHsgb3JkZXIsIG9uQ29tcGxldGUgfSk7XG4iXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2RlbGF5LmpzIl0sIm5hbWVzIjpbImR1cmF0aW9uIiwib25Db21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7a0JBRWUsVUFBQ0EsUUFBRCxFQUFXQyxVQUFYO0FBQUEsU0FBMEIscUJBQU0sRUFBRUQsa0JBQUYsRUFBWUMsc0JBQVosRUFBTixDQUExQjtBQUFBLEMiLCJmaWxlIjoiZGVsYXkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMvZ2l0aHViL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0d2VlbiBmcm9tICcuL3R3ZWVuJztcblxuZXhwb3J0IGRlZmF1bHQgKGR1cmF0aW9uLCBvbkNvbXBsZXRlKSA9PiB0d2Vlbih7IGR1cmF0aW9uLCBvbkNvbXBsZXRlIH0pO1xuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib3V0bGluZUNvbG9yIiwiZmlsbCIsInN0cm9rZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyVG9wQ29sb3IiLCJib3JkZXJSaWdodENvbG9yIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJib3JkZXJMZWZ0Q29sb3IiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsInJvdGF0ZSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsInNjYWxlIiwic2NhbGVYIiwic2NhbGVZIiwic2NhbGVaIiwic2tld1giLCJza2V3WSIsImRpc3RhbmNlIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJ0cmFuc2xhdGVaIiwicGVyc3BlY3RpdmUiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O2tCQUNlO0FBQ2I7QUFDQUEsMEJBRmE7QUFHYkMsb0NBSGE7QUFJYkMsaUNBSmE7QUFLYkMseUJBTGE7QUFNYkMsMkJBTmE7O0FBUWI7QUFDQUMsZ0NBVGE7QUFVYkMsbUNBVmE7QUFXYkMscUNBWGE7QUFZYkMsc0NBWmE7QUFhYkMsb0NBYmE7QUFjYkMsOEJBZGE7O0FBZ0JiO0FBQ0FDLHVCQWpCYTtBQWtCYkMsd0JBbEJhO0FBbUJiQyxxQkFuQmE7QUFvQmJDLHNCQXBCYTtBQXFCYkMsd0JBckJhO0FBc0JiQyx1QkF0QmE7O0FBd0JiO0FBQ0FDLDZCQXpCYTtBQTBCYkMsOEJBMUJhO0FBMkJiQyw4QkEzQmE7QUE0QmJDLDhCQTVCYTtBQTZCYkMsMEJBN0JhO0FBOEJiQywyQkE5QmE7QUErQmJDLDJCQS9CYTtBQWdDYkMsMkJBaENhO0FBaUNiQyw0QkFqQ2E7QUFrQ2JDLDRCQWxDYTtBQW1DYkMsMEJBbkNhO0FBb0NiQyw0QkFwQ2E7QUFxQ2JDLDRCQXJDYTtBQXNDYkMsNEJBdENhO0FBdUNiQyw2QkF2Q2E7QUF3Q2JDO0FBeENhLEMiLCJmaWxlIjoidmFsdWUtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMvZ2l0aHViL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFscGhhLCBjb2xvciwgZGVncmVlcywgc2NhbGUsIHB4IH0gZnJvbSAnLi4vLi4vaW5jL3ZhbHVlLXR5cGVzJzsgXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIENvbG9yIHByb3BzXG4gIGNvbG9yOiBjb2xvcixcbiAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgb3V0bGluZUNvbG9yOiBjb2xvcixcbiAgZmlsbDogY29sb3IsXG4gIHN0cm9rZTogY29sb3IsXG5cbiAgLy8gQm9yZGVyIHByb3BzXG4gIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgYm9yZGVyVG9wQ29sb3I6IGNvbG9yLFxuICBib3JkZXJSaWdodENvbG9yOiBjb2xvcixcbiAgYm9yZGVyQm90dG9tQ29sb3I6IGNvbG9yLFxuICBib3JkZXJMZWZ0Q29sb3I6IGNvbG9yLFxuICBib3JkZXJSYWRpdXM6IHB4LFxuXG4gIC8vIFBvc2l0aW9uaW5nXG4gIHdpZHRoOiBweCxcbiAgaGVpZ2h0OiBweCwgIFxuICB0b3A6IHB4LFxuICBsZWZ0OiBweCxcbiAgYm90dG9tOiBweCxcbiAgcmlnaHQ6IHB4LFxuXG4gIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gIHJvdGF0ZTogZGVncmVlcyxcbiAgcm90YXRlWDogZGVncmVlcyxcbiAgcm90YXRlWTogZGVncmVlcyxcbiAgcm90YXRlWjogZGVncmVlcyxcbiAgc2NhbGU6IHNjYWxlLFxuICBzY2FsZVg6IHNjYWxlLFxuICBzY2FsZVk6IHNjYWxlLFxuICBzY2FsZVo6IHNjYWxlLFxuICBza2V3WDogZGVncmVlcyxcbiAgc2tld1k6IGRlZ3JlZXMsXG4gIGRpc3RhbmNlOiBweCxcbiAgdHJhbnNsYXRlWDogcHgsXG4gIHRyYW5zbGF0ZVk6IHB4LFxuICB0cmFuc2xhdGVaOiBweCxcbiAgcGVyc3BlY3RpdmU6IHB4LFxuICBvcGFjaXR5OiBhbHBoYVxufTtcbiJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3ByZWZpeGVyLmpzIl0sIm5hbWVzIjpbImNhbWVsQ2FjaGUiLCJkYXNoQ2FjaGUiLCJwcmVmaXhlcyIsIm51bVByZWZpeGVzIiwibGVuZ3RoIiwidGVzdEVsZW1lbnQiLCJ0ZXN0UHJlZml4Iiwia2V5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaSIsInByZWZpeCIsIm5vUHJlZml4IiwicHJlZml4ZWRQcm9wZXJ0eU5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwic3R5bGUiLCJhc0Rhc2hDYXNlIiwiY2FjaGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhLEVBQW5CO0FBQ0EsSUFBTUMsWUFBWSxFQUFsQjtBQUNBLElBQU1DLFdBQVcsQ0FBQyxRQUFELEVBQVUsS0FBVixFQUFnQixHQUFoQixFQUFvQixJQUFwQixFQUEwQixFQUExQixDQUFqQjtBQUNBLElBQU1DLGNBQWNELFNBQVNFLE1BQTdCO0FBQ0EsSUFBSUMsb0JBQUo7O0FBRUE7Ozs7OztBQU1BLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxHQUFELEVBQVM7QUFDMUJGLGdCQUFjQSxlQUFlRyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQTdCOztBQUVBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJUCxXQUFwQixFQUFpQ08sR0FBakMsRUFBc0M7QUFDcEMsUUFBTUMsU0FBU1QsU0FBU1EsQ0FBVCxDQUFmO0FBQ0EsUUFBTUUsV0FBWUQsV0FBVyxFQUE3QjtBQUNBLFFBQU1FLHVCQUF1QkQsV0FBV0wsR0FBWCxHQUFpQkksU0FBU0osSUFBSU8sTUFBSixDQUFXLENBQVgsRUFBY0MsV0FBZCxFQUFULEdBQXVDUixJQUFJUyxLQUFKLENBQVUsQ0FBVixDQUFyRjs7QUFFQSxRQUFJSCx3QkFBd0JSLFlBQVlZLEtBQXhDLEVBQStDO0FBQzdDakIsaUJBQVdPLEdBQVgsSUFBa0JNLG9CQUFsQjtBQUNBWixnQkFBVU0sR0FBVixVQUFxQkssV0FBVyxFQUFYLEdBQWdCLEdBQXJDLElBQTRDLHdCQUFZQyxvQkFBWixDQUE1QztBQUNEO0FBQ0Y7QUFDRixDQWJEOztrQkFlZSxVQUFDTixHQUFELEVBQU1XLFVBQU4sRUFBcUI7QUFDbEMsTUFBTUMsUUFBUUQsYUFBYWpCLFNBQWIsR0FBeUJELFVBQXZDOztBQUVBLE1BQUksQ0FBQ21CLE1BQU1aLEdBQU4sQ0FBTCxFQUFpQjtBQUNmRCxlQUFXQyxHQUFYO0FBQ0Q7O0FBRUQsU0FBT1ksTUFBTVosR0FBTixDQUFQO0FBQ0QsQyIsImZpbGUiOiJwcmVmaXhlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy9naXRodWIvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxUb0Rhc2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBjYW1lbENhY2hlID0ge307XG5jb25zdCBkYXNoQ2FjaGUgPSB7fTtcbmNvbnN0IHByZWZpeGVzID0gWydXZWJraXQnLCdNb3onLCdPJywnbXMnLCAnJ107XG5jb25zdCBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbmxldCB0ZXN0RWxlbWVudDtcblxuLypcbiAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbmNvbnN0IHRlc3RQcmVmaXggPSAoa2V5KSA9PiB7XG4gIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgY29uc3QgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgY29uc3Qgbm9QcmVmaXggPSAocHJlZml4ID09PSAnJyk7XG4gICAgY29uc3QgcHJlZml4ZWRQcm9wZXJ0eU5hbWUgPSBub1ByZWZpeCA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgIGlmIChwcmVmaXhlZFByb3BlcnR5TmFtZSBpbiB0ZXN0RWxlbWVudC5zdHlsZSkge1xuICAgICAgY2FtZWxDYWNoZVtrZXldID0gcHJlZml4ZWRQcm9wZXJ0eU5hbWU7XG4gICAgICBkYXNoQ2FjaGVba2V5XSA9IGAkeyhub1ByZWZpeCA/ICcnIDogJy0nKX0ke2NhbWVsVG9EYXNoKHByZWZpeGVkUHJvcGVydHlOYW1lKX1gO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGtleSwgYXNEYXNoQ2FzZSkgPT4ge1xuICBjb25zdCBjYWNoZSA9IGFzRGFzaENhc2UgPyBkYXNoQ2FjaGUgOiBjYW1lbENhY2hlO1xuXG4gIGlmICghY2FjaGVba2V5XSkge1xuICAgIHRlc3RQcmVmaXgoa2V5KTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZVtrZXldO1xufTtcbiJdfQ==

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/*
  Detect and load an appropriate clock setting for the environment
*/
var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame ? true : false;

var onNextFrame = void 0;

if (hasRAF) {
  onNextFrame = function onNextFrame(callback) {
    return window.requestAnimationFrame(callback);
  };
} else {
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

  onNextFrame = function onNextFrame(callback) {
    var currentTime = new Date().getTime();
    var timeToCall = Math.max(0, 16.7 - (currentTime - lastTime));

    lastTime = currentTime + timeToCall;

    setTimeout(function () {
      return callback(lastTime);
    }, timeToCall);
  };
}

exports.default = onNextFrame;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qcyJdLCJuYW1lcyI6WyJoYXNSQUYiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvbk5leHRGcmFtZSIsImNhbGxiYWNrIiwibGFzdFRpbWUiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZVRvQ2FsbCIsIk1hdGgiLCJtYXgiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTs7O0FBR0EsSUFBTUEsU0FBVSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxPQUFPQyxxQkFBekMsR0FBa0UsSUFBbEUsR0FBeUUsS0FBeEY7O0FBRUEsSUFBSUMsb0JBQUo7O0FBRUEsSUFBSUgsTUFBSixFQUFZO0FBQ1ZHLGdCQUFjLHFCQUFDQyxRQUFEO0FBQUEsV0FBY0gsT0FBT0MscUJBQVAsQ0FBNkJFLFFBQTdCLENBQWQ7QUFBQSxHQUFkO0FBRUQsQ0FIRCxNQUdPO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUFjQSxNQUFJQyxXQUFXLENBQWY7O0FBRUFGLGdCQUFjLHFCQUFDQyxRQUFELEVBQWM7QUFDMUIsUUFBTUUsY0FBYyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBcEI7QUFDQSxRQUFNQyxhQUFhQyxLQUFLQyxHQUFMLENBQVMsQ0FBVCxFQUFZLFFBQVFMLGNBQWNELFFBQXRCLENBQVosQ0FBbkI7O0FBRUFBLGVBQVdDLGNBQWNHLFVBQXpCOztBQUVBRyxlQUFXO0FBQUEsYUFBTVIsU0FBU0MsUUFBVCxDQUFOO0FBQUEsS0FBWCxFQUFxQ0ksVUFBckM7QUFDRCxHQVBEO0FBUUQ7O2tCQUVjTixXIiwiZmlsZSI6Im9uLW5leHQtZnJhbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMvZ2l0aHViL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG5jb25zdCBoYXNSQUYgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkgPyB0cnVlIDogZmFsc2U7XG5cbmxldCBvbk5leHRGcmFtZTtcblxuaWYgKGhhc1JBRikge1xuICBvbk5leHRGcmFtZSA9IChjYWxsYmFjaykgPT4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG5cbn0gZWxzZSB7XG4gIC8qXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgXG4gICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuXG4gICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgIFxuICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgIFxuICAgIE1JVCBsaWNlbnNlXG4gICovXG4gIGxldCBsYXN0VGltZSA9IDA7XG5cbiAgb25OZXh0RnJhbWUgPSAoY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNi43IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWUgKyB0aW1lVG9DYWxsO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjayhsYXN0VGltZSksIHRpbWVUb0NhbGwpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBvbk5leHRGcmFtZTsiXX0=

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createRenderStep;
function createRenderStep(startRenderLoop) {
  /**
   * We use two arrays, one for this frame and one to queue for the
   * next frame, reusing each to avoid GC.
   * @type {Array}
   */
  var functionsToRun = [];
  var functionsToRunNextFrame = [];

  return {
    schedule: function schedule(callback) {
      startRenderLoop();
      // If this callback isn't already scheduled to run next frame
      if (functionsToRunNextFrame.indexOf(callback) === -1) {
        functionsToRunNextFrame.push(callback);
      }
    },

    cancel: function cancel(callback) {
      var indexOfCallback = functionsToRunNextFrame.indexOf(callback);
      if (indexOfCallback !== -1) {
        functionsToRunNextFrame.splice(indexOfCallback, 1);
      }
    },

    process: function process() {

      // Clear next frame list
      var _ref = [functionsToRunNextFrame, functionsToRun];
      // Swap this frame and next frame arrays to avoid GC

      functionsToRun = _ref[0];
      functionsToRunNextFrame = _ref[1];
      functionsToRunNextFrame.length = 0;

      // Execute all of this frame's functions
      var numThisFrame = functionsToRun.length;
      for (var i = 0; i < numThisFrame; i++) {
        functionsToRun[i]();
      }
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVJlbmRlclN0ZXAiLCJzdGFydFJlbmRlckxvb3AiLCJmdW5jdGlvbnNUb1J1biIsImZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lIiwic2NoZWR1bGUiLCJjYWxsYmFjayIsImluZGV4T2YiLCJwdXNoIiwiY2FuY2VsIiwiaW5kZXhPZkNhbGxiYWNrIiwic3BsaWNlIiwicHJvY2VzcyIsImxlbmd0aCIsIm51bVRoaXNGcmFtZSIsImkiXSwibWFwcGluZ3MiOiI7OztrQkFBd0JBLGdCO0FBQVQsU0FBU0EsZ0JBQVQsQ0FBMEJDLGVBQTFCLEVBQTJDO0FBQ3hEOzs7OztBQUtBLE1BQUlDLGlCQUFpQixFQUFyQjtBQUNBLE1BQUlDLDBCQUEwQixFQUE5Qjs7QUFFQSxTQUFPO0FBQ0xDLGNBQVUsa0JBQUNDLFFBQUQsRUFBYztBQUN0Qko7QUFDQTtBQUNBLFVBQUlFLHdCQUF3QkcsT0FBeEIsQ0FBZ0NELFFBQWhDLE1BQThDLENBQUMsQ0FBbkQsRUFBc0Q7QUFDcERGLGdDQUF3QkksSUFBeEIsQ0FBNkJGLFFBQTdCO0FBQ0Q7QUFDRixLQVBJOztBQVNMRyxZQUFRLGdCQUFDSCxRQUFELEVBQWM7QUFDcEIsVUFBTUksa0JBQWtCTix3QkFBd0JHLE9BQXhCLENBQWdDRCxRQUFoQyxDQUF4QjtBQUNBLFVBQUlJLG9CQUFvQixDQUFDLENBQXpCLEVBQTRCO0FBQzFCTixnQ0FBd0JPLE1BQXhCLENBQStCRCxlQUEvQixFQUFnRCxDQUFoRDtBQUNEO0FBQ0YsS0FkSTs7QUFnQkxFLGFBQVMsbUJBQU07O0FBSWI7QUFKYSxpQkFFK0IsQ0FBQ1IsdUJBQUQsRUFBMEJELGNBQTFCLENBRi9CO0FBQ2I7O0FBQ0NBLG9CQUZZO0FBRUlDLDZCQUZKO0FBS2JBLDhCQUF3QlMsTUFBeEIsR0FBaUMsQ0FBakM7O0FBRUE7QUFDQSxVQUFNQyxlQUFlWCxlQUFlVSxNQUFwQztBQUNBLFdBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxZQUFwQixFQUFrQ0MsR0FBbEMsRUFBdUM7QUFDckNaLHVCQUFlWSxDQUFmO0FBQ0Q7QUFDRjtBQTVCSSxHQUFQO0FBOEJEIiwiZmlsZSI6ImNyZWF0ZS1yZW5kZXItc3RlcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy9naXRodWIvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApIHtcbiAgLyoqXG4gICAqIFdlIHVzZSB0d28gYXJyYXlzLCBvbmUgZm9yIHRoaXMgZnJhbWUgYW5kIG9uZSB0byBxdWV1ZSBmb3IgdGhlXG4gICAqIG5leHQgZnJhbWUsIHJldXNpbmcgZWFjaCB0byBhdm9pZCBHQy5cbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgbGV0IGZ1bmN0aW9uc1RvUnVuID0gW107XG4gIGxldCBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgc2NoZWR1bGU6IChjYWxsYmFjaykgPT4ge1xuICAgICAgc3RhcnRSZW5kZXJMb29wKCk7XG4gICAgICAvLyBJZiB0aGlzIGNhbGxiYWNrIGlzbid0IGFscmVhZHkgc2NoZWR1bGVkIHRvIHJ1biBuZXh0IGZyYW1lXG4gICAgICBpZiAoZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLnB1c2goY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjYW5jZWw6IChjYWxsYmFjaykgPT4ge1xuICAgICAgY29uc3QgaW5kZXhPZkNhbGxiYWNrID0gZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaW5kZXhPZkNhbGxiYWNrICE9PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXhPZkNhbGxiYWNrLCAxKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvY2VzczogKCkgPT4ge1xuICAgICAgLy8gU3dhcCB0aGlzIGZyYW1lIGFuZCBuZXh0IGZyYW1lIGFycmF5cyB0byBhdm9pZCBHQ1xuICAgICAgW2Z1bmN0aW9uc1RvUnVuLCBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZV0gPSBbZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUsIGZ1bmN0aW9uc1RvUnVuXTtcblxuICAgICAgLy8gQ2xlYXIgbmV4dCBmcmFtZSBsaXN0XG4gICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5sZW5ndGggPSAwO1xuXG4gICAgICAvLyBFeGVjdXRlIGFsbCBvZiB0aGlzIGZyYW1lJ3MgZnVuY3Rpb25zXG4gICAgICBjb25zdCBudW1UaGlzRnJhbWUgPSBmdW5jdGlvbnNUb1J1bi5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVRoaXNGcmFtZTsgaSsrKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuW2ldKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbG9yLXR3ZWVuLmpzIl0sIm5hbWVzIjpbImZyb20iLCJ0byIsInByb3BzIiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7a0JBRWUsZ0JBQTRCO0FBQUEsTUFBekJBLElBQXlCLFFBQXpCQSxJQUF5QjtBQUFBLE1BQW5CQyxFQUFtQixRQUFuQkEsRUFBbUI7QUFBQSxNQUFaQyxLQUFZOztBQUN6QyxTQUFPLGtDQUNGQSxLQURFO0FBRUxGLFVBQU0sQ0FGRDtBQUdMQyxRQUFJLENBSEM7QUFJTEUsZUFBVyx3QkFBSyw4QkFBV0gsSUFBWCxFQUFpQkMsRUFBakIsQ0FBTCxFQUEyQixrQkFBTUUsU0FBakM7QUFKTixLQUFQO0FBTUQsQyIsImZpbGUiOiJjb2xvci10d2Vlbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy9naXRodWIvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR3ZWVuIGZyb20gJy4vdHdlZW4nO1xuaW1wb3J0IHsgYmxlbmRDb2xvciwgcGlwZSB9IGZyb20gJy4uL2luYy90cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi9pbmMvdmFsdWUtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBmcm9tLCB0bywgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gdHdlZW4oe1xuICAgIC4uLnByb3BzLFxuICAgIGZyb206IDAsXG4gICAgdG86IDEsXG4gICAgdHJhbnNmb3JtOiBwaXBlKGJsZW5kQ29sb3IoZnJvbSwgdG8pLCBjb2xvci50cmFuc2Zvcm0pXG4gIH0pO1xufTtcbiJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanMiXSwibmFtZXMiOlsiQ3Jvc3NGYWRlIiwib25TdGFydCIsInByb3BzIiwiZHVyYXRpb24iLCJlYXNlIiwiZmFkZXIiLCJ0byIsInN0YXJ0IiwidXBkYXRlIiwiZnJvbSIsImJhbGFuY2UiLCJnZXQiLCJsYXRlc3RGcm9tVmFsdWUiLCJsYXRlc3RUb1ZhbHVlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLFM7Ozs7Ozs7OztzQkFLSkMsTyxzQkFBVTtBQUFBLGlCQUMwQixLQUFLQyxLQUQvQjtBQUFBLFFBQ0FDLFFBREEsVUFDQUEsUUFEQTtBQUFBLFFBQ1VDLElBRFYsVUFDVUEsSUFEVjtBQUFBLFFBQ2dCQyxLQURoQixVQUNnQkEsS0FEaEI7OztBQUdSLFNBQUtBLEtBQUwsR0FBYUEsU0FBUyxxQkFBTTtBQUMxQkMsVUFBSSxDQURzQjtBQUUxQkgsd0JBRjBCO0FBRzFCQztBQUgwQixLQUFOLEVBSW5CRyxLQUptQixFQUF0QjtBQUtELEc7O3NCQUVEQyxNLHFCQUFTO0FBQUEsa0JBQ2MsS0FBS04sS0FEbkI7QUFBQSxRQUNDTyxJQURELFdBQ0NBLElBREQ7QUFBQSxRQUNPSCxFQURQLFdBQ09BLEVBRFA7O0FBRVAsUUFBTUksVUFBVSxLQUFLTCxLQUFMLENBQVdNLEdBQVgsRUFBaEI7QUFDQSxRQUFNQyxrQkFBa0JILEtBQUtFLEdBQUwsRUFBeEI7QUFDQSxRQUFNRSxnQkFBZ0JQLEdBQUdLLEdBQUgsRUFBdEI7QUFDQSxXQUFPLGdDQUFxQkMsZUFBckIsRUFBc0NDLGFBQXRDLEVBQXFESCxPQUFyRCxDQUFQO0FBQ0QsRzs7Ozs7QUFyQkdWLFMsQ0FDR2MsWSxHQUFlO0FBQ3BCVjtBQURvQixDOztrQkF1QlQsVUFBQ0YsS0FBRDtBQUFBLFNBQVcsSUFBSUYsU0FBSixDQUFjRSxLQUFkLENBQVg7QUFBQSxDIiwiZmlsZSI6ImNyb3NzLWZhZGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMvZ2l0aHViL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHR3ZWVuIGZyb20gJy4vdHdlZW4nO1xuaW1wb3J0IHsgbGluZWFyIH0gZnJvbSAnLi4vaW5jL2Vhc2luZyc7XG5pbXBvcnQgeyBnZXRWYWx1ZUZyb21Qcm9ncmVzcyB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuY2xhc3MgQ3Jvc3NGYWRlIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBlYXNlOiBsaW5lYXJcbiAgfVxuXG4gIG9uU3RhcnQoKSB7XG4gICAgY29uc3QgeyBkdXJhdGlvbiwgZWFzZSwgZmFkZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLmZhZGVyID0gZmFkZXIgfHwgdHdlZW4oe1xuICAgICAgdG86IDEsXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGVhc2VcbiAgICB9KS5zdGFydCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHsgZnJvbSwgdG8gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYmFsYW5jZSA9IHRoaXMuZmFkZXIuZ2V0KCk7XG4gICAgY29uc3QgbGF0ZXN0RnJvbVZhbHVlID0gZnJvbS5nZXQoKTtcbiAgICBjb25zdCBsYXRlc3RUb1ZhbHVlID0gdG8uZ2V0KCk7XG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGxhdGVzdEZyb21WYWx1ZSwgbGF0ZXN0VG9WYWx1ZSwgYmFsYW5jZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgQ3Jvc3NGYWRlKHByb3BzKTtcbiJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BoeXNpY3MuanMiXSwibmFtZXMiOlsiUGh5c2ljcyIsInVwZGF0ZSIsInByb3BzIiwiYXV0b1N0b3BTcGVlZCIsImFjY2VsZXJhdGlvbiIsImZyaWN0aW9uIiwidmVsb2NpdHkiLCJzcHJpbmciLCJ0byIsIm5ld1ZlbG9jaXR5IiwiZWxhcHNlZCIsInVuZGVmaW5lZCIsImRpc3RhbmNlVG9UYXJnZXQiLCJjdXJyZW50IiwiaXNDb21wbGV0ZSIsIk1hdGgiLCJhYnMiLCJpc0FjdGlvbkNvbXBsZXRlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7b0JBUUpDLE0scUJBQVM7QUFBQSxpQkFDaUUsS0FBS0MsS0FEdEU7QUFBQSxRQUNDQyxhQURELFVBQ0NBLGFBREQ7QUFBQSxRQUNnQkMsWUFEaEIsVUFDZ0JBLFlBRGhCO0FBQUEsUUFDOEJDLFFBRDlCLFVBQzhCQSxRQUQ5QjtBQUFBLFFBQ3dDQyxRQUR4QyxVQUN3Q0EsUUFEeEM7QUFBQSxRQUNrREMsTUFEbEQsVUFDa0RBLE1BRGxEO0FBQUEsUUFDMERDLEVBRDFELFVBQzBEQSxFQUQxRDs7QUFFUCxRQUFJQyxjQUFjSCxRQUFsQjtBQUNBLFFBQU1JLFVBQVUsb0NBQWhCOztBQUVBO0FBQ0EsUUFBSU4sWUFBSixFQUFrQjtBQUNoQksscUJBQWUseUJBQWNMLFlBQWQsRUFBNEJNLE9BQTVCLENBQWY7QUFDRDs7QUFFRDtBQUNBLFFBQUlMLFFBQUosRUFBYztBQUNaSSw4QkFBZ0IsSUFBSUosUUFBcEIsRUFBa0NLLFVBQVUsR0FBNUM7QUFDRDs7QUFFRCxRQUFJSCxVQUFVQyxPQUFPRyxTQUFyQixFQUFnQztBQUM5QixVQUFNQyxtQkFBbUJKLEtBQUssS0FBS0ssT0FBbkM7QUFDQUoscUJBQWVHLG1CQUFtQix5QkFBY0wsTUFBZCxFQUFzQkcsT0FBdEIsQ0FBbEM7QUFDRDs7QUFFRDtBQUNBLFNBQUtHLE9BQUwsSUFBZ0IseUJBQWNKLFdBQWQsRUFBMkJDLE9BQTNCLENBQWhCO0FBQ0EsU0FBS1IsS0FBTCxDQUFXSSxRQUFYLEdBQXNCRyxXQUF0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFLSyxVQUFMLEdBQW1CWCxrQkFBa0IsS0FBbEIsS0FBNEIsQ0FBQ00sV0FBRCxJQUFnQk0sS0FBS0MsR0FBTCxDQUFTUCxXQUFULEtBQXlCTixhQUFyRSxDQUFuQjs7QUFFQSxRQUFJLEtBQUtXLFVBQUwsSUFBbUJQLE1BQXZCLEVBQStCO0FBQzdCLFdBQUtNLE9BQUwsR0FBZUwsRUFBZjtBQUNEOztBQUVELFdBQU8sS0FBS0ssT0FBWjtBQUNELEc7O29CQUVESSxnQiwrQkFBbUI7QUFDakIsV0FBTyxLQUFLSCxVQUFaO0FBQ0QsRzs7Ozs7QUE5Q0dkLE8sQ0FDR2tCLFksR0FBZTtBQUNwQmQsZ0JBQWMsQ0FETTtBQUVwQkMsWUFBVSxDQUZVO0FBR3BCQyxZQUFVLENBSFU7QUFJcEJILGlCQUFlO0FBSkssQzs7a0JBZ0RULFVBQUNELEtBQUQ7QUFBQSxTQUFXLElBQUlGLE9BQUosQ0FBWUUsS0FBWixDQUFYO0FBQUEsQyIsImZpbGUiOiJwaHlzaWNzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzL2dpdGh1Yi9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IHRpbWVTaW5jZUxhc3RGcmFtZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBzcGVlZFBlckZyYW1lIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jbGFzcyBQaHlzaWNzIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhY2NlbGVyYXRpb246IDAsXG4gICAgZnJpY3Rpb246IDAsXG4gICAgdmVsb2NpdHk6IDAsXG4gICAgYXV0b1N0b3BTcGVlZDogMC4wMDFcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGF1dG9TdG9wU3BlZWQsIGFjY2VsZXJhdGlvbiwgZnJpY3Rpb24sIHZlbG9jaXR5LCBzcHJpbmcsIHRvIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBuZXdWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgIGNvbnN0IGVsYXBzZWQgPSB0aW1lU2luY2VMYXN0RnJhbWUoKTtcblxuICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChhY2NlbGVyYXRpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9IHNwZWVkUGVyRnJhbWUoYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBmcmljdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChmcmljdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKj0gKDEgLSBmcmljdGlvbikgKiogKGVsYXBzZWQgLyAxMDApO1xuICAgIH1cblxuICAgIGlmIChzcHJpbmcgJiYgdG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZGlzdGFuY2VUb1RhcmdldCA9IHRvIC0gdGhpcy5jdXJyZW50O1xuICAgICAgbmV3VmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqIHNwZWVkUGVyRnJhbWUoc3ByaW5nLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB2ZWxvY2l0eVxuICAgIHRoaXMuY3VycmVudCArPSBzcGVlZFBlckZyYW1lKG5ld1ZlbG9jaXR5LCBlbGFwc2VkKTtcbiAgICB0aGlzLnByb3BzLnZlbG9jaXR5ID0gbmV3VmVsb2NpdHk7XG5cbiAgICAvLyBDaGVjayBpZiBzaW11bGF0aW9uIGlzIGNvbXBsZXRlXG4gICAgLy8gV2UgZG8gdGhpcyBoZXJlIGluc3RlYWQgb2YgYGlzQWN0aW9uQ29tcGxldGVgIGFzIGl0IGFsbG93cyB1c1xuICAgIC8vIHRvIGNsYW1wIGR1cmluZyB0aGlzIHVwZGF0ZVxuICAgIHRoaXMuaXNDb21wbGV0ZSA9IChhdXRvU3RvcFNwZWVkICE9PSBmYWxzZSAmJiAoIW5ld1ZlbG9jaXR5IHx8IE1hdGguYWJzKG5ld1ZlbG9jaXR5KSA8PSBhdXRvU3RvcFNwZWVkKSk7XG5cbiAgICBpZiAodGhpcy5pc0NvbXBsZXRlICYmIHNwcmluZykge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdG87XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfVxuXG4gIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IG5ldyBQaHlzaWNzKHByb3BzKTsiXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BvaW50ZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlUG9pbnRlciIsIngiLCJ5IiwiZXZlbnRUb1BvaW50cyIsIm1vdmVFdmVudCIsInByb3BzIiwicG9pbnRlciIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlUG9pbnRlciIsImUiLCJnZXRQcm9wIiwicG9pbnRzIiwic2V0Iiwic2V0UHJvcHMiLCJfb25TdGFydCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJfb25TdG9wIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1vdXNlRXZlbnRUb1BvaW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJ0b3VjaEV2ZW50VG9Qb2ludCIsImNoYW5nZWRUb3VjaGVzIiwiZ2V0TmF0aXZlRXZlbnQiLCJvcmlnaW5hbEV2ZW50IiwibmF0aXZlRXZlbnQiLCJ0b3VjaGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztBQUVBLFNBQVNBLGFBQVQsY0FBeUU7QUFBQSxNQUFoREMsQ0FBZ0QsU0FBaERBLENBQWdEO0FBQUEsTUFBN0NDLENBQTZDLFNBQTdDQSxDQUE2Qzs7QUFBQSxNQUF0Q0MsYUFBc0MsUUFBdENBLGFBQXNDO0FBQUEsTUFBdkJDLFNBQXVCLFFBQXZCQSxTQUF1QjtBQUFBLE1BQVRDLEtBQVM7O0FBQ3ZFLE1BQU1DLFVBQVUseUJBQVU7QUFDeEJMLE9BQUcscUJBQU1BLENBQU4sQ0FEcUI7QUFFeEJDLE9BQUcscUJBQU1BLENBQU47QUFGcUIsR0FBVjtBQUlkSyxvQkFBZ0I7QUFKRixLQUtYRixLQUxXLEVBQWhCOztBQVFBLE1BQU1HLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzNCLFFBQUlILFFBQVFJLE9BQVIsQ0FBZ0IsZ0JBQWhCLENBQUosRUFBdUM7QUFDckNELFFBQUVGLGNBQUY7QUFDRDs7QUFFRCxRQUFNSSxTQUFTUixjQUFjTSxDQUFkLENBQWY7QUFDQUgsWUFBUUwsQ0FBUixDQUFVVyxHQUFWLENBQWNELE9BQU9WLENBQXJCO0FBQ0FLLFlBQVFKLENBQVIsQ0FBVVUsR0FBVixDQUFjRCxPQUFPVCxDQUFyQjtBQUNELEdBUkQ7O0FBVUFJLFVBQVFPLFFBQVIsQ0FBaUI7QUFDZkMsY0FBVTtBQUFBLGFBQU1DLFNBQVNDLGVBQVQsQ0FBeUJDLGdCQUF6QixDQUEwQ2IsU0FBMUMsRUFBcURJLGFBQXJELEVBQW9FLEVBQUVVLFNBQVMsQ0FBQ1osUUFBUUksT0FBUixDQUFnQixnQkFBaEIsQ0FBWixFQUFwRSxDQUFOO0FBQUEsS0FESztBQUVmUyxhQUFTO0FBQUEsYUFBTUosU0FBU0MsZUFBVCxDQUF5QkksbUJBQXpCLENBQTZDaEIsU0FBN0MsRUFBd0RJLGFBQXhELENBQU47QUFBQTtBQUZNLEdBQWpCOztBQUtBLFNBQU9GLE9BQVA7QUFDRDs7QUFFRCxJQUFNZSxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFDWixDQUFEO0FBQUEsU0FBUTtBQUNoQ1IsT0FBR1EsRUFBRWEsT0FEMkI7QUFFaENwQixPQUFHTyxFQUFFYztBQUYyQixHQUFSO0FBQUEsQ0FBMUI7O0FBS0EsSUFBTUMsb0JBQW9CLFNBQXBCQSxpQkFBb0I7QUFBQSxNQUFHQyxjQUFILFNBQUdBLGNBQUg7QUFBQSxTQUF5QjtBQUNqRHhCLE9BQUd3QixlQUFlLENBQWYsRUFBa0JILE9BRDRCO0FBRWpEcEIsT0FBR3VCLGVBQWUsQ0FBZixFQUFrQkY7QUFGNEIsR0FBekI7QUFBQSxDQUExQjs7QUFLQSxJQUFNRyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNqQixDQUFEO0FBQUEsU0FBT0EsRUFBRWtCLGFBQUYsSUFBbUJsQixFQUFFbUIsV0FBckIsSUFBb0NuQixDQUEzQztBQUFBLENBQXZCOztrQkFFZSxVQUFDQSxDQUFELEVBQUlKLEtBQUosRUFBYztBQUMzQixNQUFNdUIsY0FBY0YsZUFBZWpCLENBQWYsQ0FBcEI7QUFDQSxTQUFRbUIsWUFBWUMsT0FBYixHQUNMN0IsY0FBY3dCLGtCQUFrQmYsQ0FBbEIsQ0FBZDtBQUNFTCxlQUFXLFdBRGI7QUFFRUQsbUJBQWVxQjtBQUZqQixLQUdLbkIsS0FITCxFQURLLEdBTUxMLGNBQWNxQixrQkFBa0JaLENBQWxCLENBQWQ7QUFDRUwsZUFBVyxXQURiO0FBRUVELG1CQUFla0I7QUFGakIsS0FHS2hCLEtBSEwsRUFORjtBQVdELEMiLCJmaWxlIjoicG9pbnRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy9naXRodWIvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZhbHVlIGZyb20gJy4vdmFsdWUnO1xuaW1wb3J0IGNvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvaW50ZXIoeyB4LCB5IH0sIHsgZXZlbnRUb1BvaW50cywgbW92ZUV2ZW50LCAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHBvaW50ZXIgPSBjb21wb3NpdGUoe1xuICAgIHg6IHZhbHVlKHgpLFxuICAgIHk6IHZhbHVlKHkpXG4gIH0sIHtcbiAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZSxcbiAgICAuLi5wcm9wc1xuICB9KTtcblxuICBjb25zdCB1cGRhdGVQb2ludGVyID0gKGUpID0+IHtcbiAgICBpZiAocG9pbnRlci5nZXRQcm9wKCdwcmV2ZW50RGVmYXVsdCcpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRzID0gZXZlbnRUb1BvaW50cyhlKTtcbiAgICBwb2ludGVyLnguc2V0KHBvaW50cy54KTtcbiAgICBwb2ludGVyLnkuc2V0KHBvaW50cy55KTtcbiAgfTtcblxuICBwb2ludGVyLnNldFByb3BzKHtcbiAgICBfb25TdGFydDogKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVQb2ludGVyLCB7IHBhc3NpdmU6ICFwb2ludGVyLmdldFByb3AoJ3ByZXZlbnREZWZhdWx0JykgfSksXG4gICAgX29uU3RvcDogKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVQb2ludGVyKVxuICB9KTtcblxuICByZXR1cm4gcG9pbnRlcjtcbn1cblxuY29uc3QgbW91c2VFdmVudFRvUG9pbnQgPSAoZSkgPT4gKHtcbiAgeDogZS5jbGllbnRYLFxuICB5OiBlLmNsaWVudFlcbn0pO1xuXG5jb25zdCB0b3VjaEV2ZW50VG9Qb2ludCA9ICh7IGNoYW5nZWRUb3VjaGVzIH0pID0+ICh7XG4gIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbn0pO1xuXG5jb25zdCBnZXROYXRpdmVFdmVudCA9IChlKSA9PiBlLm9yaWdpbmFsRXZlbnQgfHwgZS5uYXRpdmVFdmVudCB8fCBlO1xuXG5leHBvcnQgZGVmYXVsdCAoZSwgcHJvcHMpID0+IHtcbiAgY29uc3QgbmF0aXZlRXZlbnQgPSBnZXROYXRpdmVFdmVudChlKTtcbiAgcmV0dXJuIChuYXRpdmVFdmVudC50b3VjaGVzKSA/XG4gICAgY3JlYXRlUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwge1xuICAgICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICAgIGV2ZW50VG9Qb2ludHM6IHRvdWNoRXZlbnRUb1BvaW50LFxuICAgICAgLi4ucHJvcHNcbiAgICB9KSA6XG4gICAgY3JlYXRlUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwge1xuICAgICAgbW92ZUV2ZW50OiAnbW91c2Vtb3ZlJyxcbiAgICAgIGV2ZW50VG9Qb2ludHM6IG1vdXNlRXZlbnRUb1BvaW50LFxuICAgICAgLi4ucHJvcHNcbiAgICB9KTtcbn07XG4iXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3RvdWNoZXMuanMiXSwibmFtZXMiOlsiY3JlYXRlVG91Y2hlcyIsImluaXRpYWxUb3VjaGVzIiwiZXZlbnRUb1RvdWNoZXMiLCJtb3ZlRXZlbnQiLCJwcm9wcyIsInRvdWNoZXMiLCJtYXBDb29yZHNUb0FjdGlvbnMiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZVRvdWNoZXMiLCJlIiwibGF0ZXN0VG91Y2hlcyIsInVwZGF0ZUFjdGlvbldpdGhUb3VjaGVzIiwic2V0UHJvcHMiLCJfb25TdGFydCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9vblN0b3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29vcmRzIiwiYWN0aW9ucyIsImkiLCJsZW5ndGgiLCJ4IiwieSIsIm5ld1RvdWNoZXMiLCJ0b3VjaEFjdGlvbnMiLCJnZXRDaGlsZHJlbiIsInRvdWNoQWN0aW9uIiwidW5kZWZpbmVkIiwic2V0IiwiYWRkQWN0aW9uIiwibW91c2VFdmVudFRvVG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJ0b3VjaEV2ZW50VG9Ub3VjaGVzIiwiZXh0cmFjdENvb3JkcyIsImNsaWVudFgiLCJjbGllbnRZIiwiZ2V0TmF0aXZlRXZlbnQiLCJvcmlnaW5hbEV2ZW50IiwibmF0aXZlRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFTQSxhQUFULENBQXVCQyxjQUF2QixRQUFnRjtBQUFBLE1BQXZDQyxjQUF1QyxRQUF2Q0EsY0FBdUM7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQUEsTUFBVEMsS0FBUzs7QUFDOUUsTUFBTUMsVUFBVSx3QkFBU0MsbUJBQW1CTCxjQUFuQixDQUFUO0FBQ2RNLG9CQUFnQjtBQURGLEtBRVhILEtBRlcsRUFBaEI7O0FBS0EsV0FBU0ksYUFBVCxDQUF1QkMsQ0FBdkIsRUFBMEI7QUFDeEIsUUFBSUwsTUFB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b0IsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDOUIsQ0FBRDtBQUFBLFNBQU9BLEVBQUUrQixhQUFGLElBQW1CL0IsRUFBRWdDLFdBQXJCLElBQW9DaEMsQ0FBM0M7QUFBQSxDQUF2Qjs7a0JBRWUsVUFBQ0EsQ0FBRCxFQUFJTCxLQUFKLEVBQWM7QUFDM0IsTUFBTXFDLGNBQWNGLGVBQWU5QixDQUFmLENBQXBCO0FBQ0EsU0FBUWdDLFlBQVlwQyxPQUFiLEdBQ0xMLGNBQWNtQyxvQkFBb0IxQixDQUFwQixDQUFkO0FBQ0VOLGVBQVcsV0FEYjtBQUVFRCxvQkFBZ0JpQztBQUZsQixLQUdLL0IsS0FITCxFQURLLEdBTUxKLGNBQWNnQyxvQkFBb0J2QixDQUFwQixDQUFkO0FBQ0VOLGVBQVcsV0FEYjtBQUVFRCxvQkFBZ0I4QjtBQUZsQixLQUdLNUIsS0FITCxFQU5GO0FBV0QsQyIsImZpbGUiOiJ0b3VjaGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzL2dpdGh1Yi9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFsdWUgZnJvbSAnLi92YWx1ZSc7XG5pbXBvcnQgY29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcbmltcG9ydCBwYXJhbGxlbCBmcm9tICcuL3BhcmFsbGVsJztcblxuZnVuY3Rpb24gY3JlYXRlVG91Y2hlcyhpbml0aWFsVG91Y2hlcywgeyBldmVudFRvVG91Y2hlcywgbW92ZUV2ZW50LCAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHRvdWNoZXMgPSBwYXJhbGxlbChtYXBDb29yZHNUb0FjdGlvbnMoaW5pdGlhbFRvdWNoZXMpLCB7XG4gICAgcHJldmVudERlZmF1bHQ6IHRydWUsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlVG91Y2hlcyhlKSB7XG4gICAgaWYgKHByb3BzLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBsYXRlc3RUb3VjaGVzID0gZXZlbnRUb1RvdWNoZXMoZSk7XG4gICAgdXBkYXRlQWN0aW9uV2l0aFRvdWNoZXModG91Y2hlcywgbGF0ZXN0VG91Y2hlcyk7XG4gIH1cblxuICB0b3VjaGVzLnNldFByb3BzKHtcbiAgICBfb25TdGFydDogKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVUb3VjaGVzKSxcbiAgICBfb25TdG9wOiAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVRvdWNoZXMpXG4gIH0pO1xuXG4gIHJldHVybiB0b3VjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXBDb29yZHNUb0FjdGlvbnMoY29vcmRzKSB7XG4gIGxldCBhY3Rpb25zID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBjb29yZHNbaV07XG4gICAgYWN0aW9uc1tpXSA9IGNvbXBvc2l0ZSh7XG4gICAgICB4OiB2YWx1ZSh4KSxcbiAgICAgIHk6IHZhbHVlKHkpXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGFjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFjdGlvbldpdGhUb3VjaGVzKHRvdWNoZXMsIG5ld1RvdWNoZXMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBuZXdUb3VjaGVzW2ldO1xuICAgIGNvbnN0IHRvdWNoQWN0aW9ucyA9IHRvdWNoZXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICBjb25zdCB0b3VjaEFjdGlvbiA9IHRvdWNoQWN0aW9uc1tpXTtcbiAgICBpZiAodG91Y2hBY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdG91Y2hBY3Rpb24ueC5zZXQoeCk7XG4gICAgICB0b3VjaEFjdGlvbi55LnNldCh5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG91Y2hlcy5hZGRBY3Rpb24oY29tcG9zaXRlKHtcbiAgICAgICAgeDogdmFsdWUoeCksXG4gICAgICAgIHk6IHZhbHVlKHkpXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG1vdXNlRXZlbnRUb1RvdWNoZXMgPSAoeyBwYWdlWCwgcGFnZVkgfSkgPT4gW3sgeDogcGFnZVgsIHk6IHBhZ2VZIH1dO1xuY29uc3QgdG91Y2hFdmVudFRvVG91Y2hlcyA9ICh7IHRvdWNoZXMgfSkgPT4gZXh0cmFjdENvb3Jkcyh0b3VjaGVzKTtcblxuZnVuY3Rpb24gZXh0cmFjdENvb3Jkcyh0b3VjaGVzKSB7XG4gIGxldCBjb29yZHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSB0b3VjaGVzW2ldO1xuICAgIGNvb3Jkc1tpXSA9IHtcbiAgICAgIHg6IGNsaWVudFgsXG4gICAgICB5OiBjbGllbnRZXG4gICAgfTtcbiAgfVxuICByZXR1cm4gY29vcmRzO1xufVxuXG5jb25zdCBnZXROYXRpdmVFdmVudCA9IChlKSA9PiBlLm9yaWdpbmFsRXZlbnQgfHwgZS5uYXRpdmVFdmVudCB8fCBlO1xuXG5leHBvcnQgZGVmYXVsdCAoZSwgcHJvcHMpID0+IHtcbiAgY29uc3QgbmF0aXZlRXZlbnQgPSBnZXROYXRpdmVFdmVudChlKTtcbiAgcmV0dXJuIChuYXRpdmVFdmVudC50b3VjaGVzKSA/XG4gICAgY3JlYXRlVG91Y2hlcyh0b3VjaEV2ZW50VG9Ub3VjaGVzKGUpLCB7XG4gICAgICBtb3ZlRXZlbnQ6ICd0b3VjaG1vdmUnLFxuICAgICAgZXZlbnRUb1RvdWNoZXM6IHRvdWNoRXZlbnRUb1RvdWNoZXMsXG4gICAgICAuLi5wcm9wc1xuICAgIH0pIDpcbiAgICBjcmVhdGVUb3VjaGVzKG1vdXNlRXZlbnRUb1RvdWNoZXMoZSksIHtcbiAgICAgIG1vdmVFdmVudDogJ21vdXNlbW92ZScsXG4gICAgICBldmVudFRvVG91Y2hlczogbW91c2VFdmVudFRvVG91Y2hlcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfSk7XG59O1xuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3RyYWNrLW9mZnNldC5qcyJdLCJuYW1lcyI6WyJUcmFja09mZnNldCIsIm9uU3RhcnQiLCJhY3Rpb24iLCJwcm9wcyIsImFwcGx5T2Zmc2V0IiwiZ2V0IiwiY3VycmVudCIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxXOzs7Ozs7Ozs7d0JBQ0pDLE8sc0JBQVU7QUFBQSxRQUNBQyxNQURBLEdBQ1csS0FBS0MsS0FEaEIsQ0FDQUQsTUFEQTs7QUFFUixTQUFLRSxXQUFMLEdBQW1CLCtCQUFZRixPQUFPRyxHQUFQLEVBQVosRUFBMEIsS0FBS0MsT0FBL0IsQ0FBbkI7QUFDRCxHOzt3QkFFREMsTSxxQkFBUztBQUFBLFFBQ0NMLE1BREQsR0FDWSxLQUFLQyxLQURqQixDQUNDRCxNQUREOztBQUVQLFdBQU8sS0FBS0UsV0FBTCxDQUFpQkYsT0FBT0csR0FBUCxFQUFqQixDQUFQO0FBQ0QsRzs7Ozs7a0JBR1ksVUFBQ0gsTUFBRCxFQUFTQyxLQUFUO0FBQUEsU0FBbUIsSUFBSUgsV0FBSixZQUFrQkUsY0FBbEIsSUFBNkJDLEtBQTdCLEVBQW5CO0FBQUEsQyIsImZpbGUiOiJ0cmFjay1vZmZzZXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMvZ2l0aHViL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgYXBwbHlPZmZzZXQgfSBmcm9tICcuLi9pbmMvdHJhbnNmb3JtZXJzJztcblxuY2xhc3MgVHJhY2tPZmZzZXQgZXh0ZW5kcyBBY3Rpb24ge1xuICBvblN0YXJ0KCkge1xuICAgIGNvbnN0IHsgYWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuYXBwbHlPZmZzZXQgPSBhcHBseU9mZnNldChhY3Rpb24uZ2V0KCksIHRoaXMuY3VycmVudCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeyBhY3Rpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIHRoaXMuYXBwbHlPZmZzZXQoYWN0aW9uLmdldCgpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoYWN0aW9uLCBwcm9wcykgPT4gbmV3IFRyYWNrT2Zmc2V0KHsgYWN0aW9uLCAuLi5wcm9wcyB9KTtcbiJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3N0YWdnZXIuanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsImludGVydmFsIiwib25Db21wbGV0ZSIsImludGVydmFsSXNGdW5jdGlvbiIsIm1hcCIsImFjdGlvbiIsImkiLCJ0aW1lVG9EZWxheSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztrQkFZZSxVQUFDQSxPQUFELEVBQVVDLFFBQVYsRUFBb0JDLFVBQXBCLEVBQW1DO0FBQ2hELE1BQU1DLHFCQUFxQixtQkFBT0YsUUFBUCxDQUEzQjs7QUFFQSxTQUFPLHdCQUFTRCxRQUFRSSxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDekMsUUFBTUMsY0FBZUosa0JBQUQsR0FBdUJGLFNBQVNLLENBQVQsQ0FBdkIsR0FBcUNBLElBQUlMLFFBQTdEO0FBQ0EsV0FBTyxxQkFBTSxDQUNYLHFCQUFNTSxXQUFOLENBRFcsRUFFWEYsTUFGVyxDQUFOLENBQVA7QUFJRCxHQU5lLENBQVQsRUFNSCxFQUFFSCxzQkFBRixFQU5HLENBQVA7QUFPRCxDIiwiZmlsZSI6InN0YWdnZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMvZ2l0aHViL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpbiBmcm9tICcuL2NoYWluJztcbmltcG9ydCBwYXJhbGxlbCBmcm9tICcuL3BhcmFsbGVsJztcbmltcG9ydCBkZWxheSBmcm9tICcuL2RlbGF5JztcbmltcG9ydCB7IGlzRnVuYyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBwYXJhbGxlbCBBY3Rpb24gY29tcG9zZWQgb2YgY2hhaW5lZFxuICogZGVsYXkgYW5kIGFjdGlvbnMuIEludGVydmFsIGNhbiBiZSBlaXRoZXIgYSBudW1iZXJcbiAqIHRvIG11bHRpcGx5IGJ5IGBpYCBvciBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBwcm92aWRlZCBgaWBcbiAqXG4gKiBTdHJhaWdodCBjcmliYmVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9ibG9iLzI0YzcyZjUxM2U0OGYwYmRjNDA4MjBiNDMyNjIzMjhmZTJjMzAxZDQvTGlicmFyaWVzL0FuaW1hdGVkL3NyYy9BbmltYXRlZEltcGxlbWVudGF0aW9uLmpzI0wyMDMxXG4gKiBeIFRoaXMgZnVuY3Rpb24gc29sZCBhIHByZXZpb3VzbHktY29uZmxpY3RlZCBtZSBvbiB0aGUgbWVyaXQgb2YgbW92aW5nIGZyb21cbiAqIGpRdWVyeS1zdHlsZSBtdWx0aS1wcm9wZXJ0eSBhbmltYXRpb25zIHRvIHNpbmdsZS1wcm9wZXJ0eS5cbiAqIEBwYXJhbSAge2FycmF5fSBhY3Rpb25zXG4gKiBAcGFyYW0gIHtmdW5jdGlvbiB8IG51bWJlcn0gaW50ZXJ2YWxcbiAqIEByZXR1cm4ge0FjdGlvbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGFjdGlvbnMsIGludGVydmFsLCBvbkNvbXBsZXRlKSA9PiB7XG4gIGNvbnN0IGludGVydmFsSXNGdW5jdGlvbiA9IGlzRnVuYyhpbnRlcnZhbCk7XG5cbiAgcmV0dXJuIHBhcmFsbGVsKGFjdGlvbnMubWFwKChhY3Rpb24sIGkpID0+IHtcbiAgICBjb25zdCB0aW1lVG9EZWxheSA9IChpbnRlcnZhbElzRnVuY3Rpb24pID8gaW50ZXJ2YWwoaSkgOiBpICogaW50ZXJ2YWw7XG4gICAgcmV0dXJuIGNoYWluKFtcbiAgICAgIGRlbGF5KHRpbWVUb0RlbGF5KSxcbiAgICAgIGFjdGlvblxuICAgIF0pO1xuICB9KSwgeyBvbkNvbXBsZXRlIH0pO1xufTtcbiJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3NwcmluZy5qcyJdLCJuYW1lcyI6WyJTcHJpbmciLCJvblN0YXJ0IiwicHJvcHMiLCJ2ZWxvY2l0eSIsInRvIiwiZnJvbSIsInQiLCJpbml0aWFsVmVsb2NpdHkiLCJpc0NvbXBsZXRlIiwiZGVsdGEiLCJ1cGRhdGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwibWFzcyIsInJlc3RTcGVlZCIsInJlc3REaXNwbGFjZW1lbnQiLCJ0aW1lRGVsdGEiLCJkYW1waW5nUmF0aW8iLCJNYXRoIiwic3FydCIsImFuZ3VsYXJGcmVxIiwiZXhwb0RlY2F5IiwieDAiLCJvc2NpbGxhdGlvbiIsImVudmVsb3BlIiwiZXhwIiwic2luIiwiY29zIiwiZnJhY3Rpb24iLCJwb3NpdGlvbiIsImlzQmVsb3dWZWxvY2l0eVRocmVzaG9sZCIsImFicyIsImlzQmVsb3dEaXNwbGFjZW1lbnRUaHJlc2hvbGQiLCJpc0FjdGlvbkNvbXBsZXRlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBbUJBOzs7O0FBQ0E7Ozs7Ozs7OytlQXBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0JNQSxNOzs7Ozs7Ozs7bUJBWUpDLE8sc0JBQVU7QUFBQSxpQkFDdUIsS0FBS0MsS0FENUI7QUFBQSxRQUNBQyxRQURBLFVBQ0FBLFFBREE7QUFBQSxRQUNVQyxFQURWLFVBQ1VBLEVBRFY7QUFBQSxRQUNjQyxJQURkLFVBQ2NBLElBRGQ7O0FBRVIsU0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLQyxlQUFMLEdBQXVCSixXQUFXQSxXQUFXLElBQXRCLEdBQTZCLEdBQXBEO0FBQ0EsU0FBS0ssVUFBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUtDLEtBQUwsR0FBYUwsS0FBS0MsSUFBbEI7QUFDRCxHOzttQkFFREssTSxxQkFBUztBQUFBLGtCQUNxRSxLQUFLUixLQUQxRTtBQUFBLFFBQ0NTLFNBREQsV0FDQ0EsU0FERDtBQUFBLFFBQ1lDLE9BRFosV0FDWUEsT0FEWjtB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QUt6QixVQUFaO0FBQ0QsRzs7Ozs7QUFuRUdSLE0sQ0FDR2tDLFksR0FBZTtBQUNwQnZCLGFBQVcsR0FEUztBQUVwQkMsV0FBUyxFQUZXO0FBR3BCQyxRQUFNLEdBSGM7QUFJcEJWLFlBQVUsR0FKVTtBQUtwQkUsUUFBTSxHQUxjO0FBTXBCRCxNQUFJLEdBTmdCO0FBT3BCVSxhQUFXLElBUFM7QUFRcEJDLG9CQUFrQjtBQVJFLEM7O2tCQXFFVCxVQUFDYixLQUFEO0FBQUEsU0FBVyxJQUFJRixNQUFKLENBQVdFLEtBQVgsQ0FBWDtBQUFBLEMiLCJmaWxlIjoic3ByaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzL2dpdGh1Yi9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBUaGUgY2xvc2VkLWZvcm0gZGFtcGVkIGhhcm1vbmljIG9zY2lsbGF0aW5nIHNwcmluZy5cbiAgT3IsIHNwcmluZy5cblxuICBUaGlzIGlzIGEgZGlyZWN0IHBvcnQgb2YgQWRhbSBNaXNraWV3aWN6J3MgKEBza2V2eSkgUmVhY3QgQW5pbWF0ZWRcbiAgUFIgIzE1MzIyIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNTMyMi9cblxuICBgYGBcbiAgc3ByaW5nKHtcbiAgICBtYXNzOiAyLFxuICAgIGRhbXBpbmc6IDEwLFxuICAgIHN0aWZmbmVzczogMTAwLFxuICAgIHRvOiAxMDBcbiAgfSkuc3RhcnQoKTtcbiAgYGBgXG5cbiAgQWRhbSBNaXNraWV3aWN6OlxuICBAc2tldnkgKHR3aXR0ZXIuY29tL3NrZXZ5LCBnaXRodWIuY29tL3NrZXZ5KVxuICovXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IHRpbWVTaW5jZUxhc3RGcmFtZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5cbmNsYXNzIFNwcmluZyBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3RpZmZuZXNzOiAxMDAsXG4gICAgZGFtcGluZzogMTAsXG4gICAgbWFzczogMS4wLFxuICAgIHZlbG9jaXR5OiAwLjAsXG4gICAgZnJvbTogMC4wLFxuICAgIHRvOiAwLjAsXG4gICAgcmVzdFNwZWVkOiAwLjAxLFxuICAgIHJlc3REaXNwbGFjZW1lbnQ6IDAuMDFcbiAgfTtcblxuICBvblN0YXJ0KCkge1xuICAgIGNvbnN0IHsgdmVsb2NpdHksIHRvLCBmcm9tIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMudCA9IDA7XG4gICAgdGhpcy5pbml0aWFsVmVsb2NpdHkgPSB2ZWxvY2l0eSA/IHZlbG9jaXR5IC8gMTAwMCA6IDAuMDtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB0aGlzLmRlbHRhID0gdG8gLSBmcm9tO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHsgc3RpZmZuZXNzLCBkYW1waW5nLCBtYXNzLCBmcm9tLCB0bywgcmVzdFNwZWVkLCByZXN0RGlzcGxhY2VtZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZGVsdGEsIGluaXRpYWxWZWxvY2l0eSB9ID0gdGhpcztcblxuICAgIGNvbnN0IHRpbWVEZWx0YSA9IHRpbWVTaW5jZUxhc3RGcmFtZSgpIC8gMTAwMDtcbiAgICBjb25zdCB0ID0gdGhpcy50ID0gdGhpcy50ICsgdGltZURlbHRhO1xuXG4gICAgY29uc3QgZGFtcGluZ1JhdGlvID0gZGFtcGluZyAvICgyICogTWF0aC5zcXJ0KHN0aWZmbmVzcyAqIG1hc3MpKTtcbiAgICBjb25zdCBhbmd1bGFyRnJlcSA9IE1hdGguc3FydChzdGlmZm5lc3MgLyBtYXNzKTtcbiAgICBjb25zdCBleHBvRGVjYXkgPSBhbmd1bGFyRnJlcSAqIE1hdGguc3FydCgxLjAgLSAoZGFtcGluZ1JhdGlvICogZGFtcGluZ1JhdGlvKSk7XG5cbiAgICBjb25zdCB4MCA9IDE7XG4gICAgbGV0IG9zY2lsbGF0aW9uID0gMC4wO1xuXG4gICAgLy8gVW5kZXJkYW1wZWRcbiAgICBpZiAoZGFtcGluZ1JhdGlvIDwgMSkge1xuICAgICAgY29uc3QgZW52ZWxvcGUgPSBNYXRoLmV4cCgtZGFtcGluZ1JhdGlvICogYW5ndWxhckZyZXEgKiB0KTtcbiAgICAgIG9zY2lsbGF0aW9uID0gZW52ZWxvcGUgKiAoKChpbml0aWFsVmVsb2NpdHkgKyBkYW1waW5nUmF0aW8gKiBhbmd1bGFyRnJlcSAqIHgwKSAvIGV4cG9EZWNheSkgKiBNYXRoLnNpbihleHBvRGVjYXkgKiB0KSArICh4MCAqIE1hdGguY29zKGV4cG9EZWNheSAqIHQpKSk7XG4gICAgICB0aGlzLnZlbG9jaXR5ID0gKGVudmVsb3BlICogKChNYXRoLmNvcyhleHBvRGVjYXkgKiB0KSAqIChpbml0aWFsVmVsb2NpdHkgKyBkYW1waW5nUmF0aW8gKiBhbmd1bGFyRnJlcSAqIHgwKSkgLSAoZXhwb0RlY2F5ICogeDAgKiBNYXRoLnNpbihleHBvRGVjYXkgKiB0KSkpIC1cbiAgICAgICAgKChkYW1waW5nUmF0aW8gKiBhbmd1bGFyRnJlcSAqIGVudmVsb3BlKSAqICgoKChNYXRoLnNpbihleHBvRGVjYXkgKiB0KSAqIChpbml0aWFsVmVsb2NpdHkgKyBkYW1waW5nUmF0aW8gKiBhbmd1bGFyRnJlcSAqIHgwKSkgKSAvIGV4cG9EZWNheSkgKyAoeDAgKiBNYXRoLmNvcyhleHBvRGVjYXkgKiB0KSkpKSk7XG5cbiAgICAvLyBDcml0aWNhbGx5IGRhbXBlZFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlbnZlbG9wZSA9IE1hdGguZXhwKC1hbmd1bGFyRnJlcSAqIHQpO1xuICAgICAgb3NjaWxsYXRpb24gPSBlbnZlbG9wZSAqICh4MCArIChpbml0aWFsVmVsb2NpdHkgKyAoYW5ndWxhckZyZXEgKiB4MCkpICogdCk7XG4gICAgICB0aGlzLnZlbG9jaXR5ID0gZW52ZWxvcGUgKiAoKHQgKiBpbml0aWFsVmVsb2NpdHkgKiBhbmd1bGFyRnJlcSkgLSAodCAqIHgwICogKGFuZ3VsYXJGcmVxICogYW5ndWxhckZyZXEpKSArIGluaXRpYWxWZWxvY2l0eSk7XG4gICAgfVxuXG4gICAgY29uc3QgZnJhY3Rpb24gPSAxIC0gb3NjaWxsYXRpb247XG4gICAgbGV0IHBvc2l0aW9uID0gZnJvbSArIGZyYWN0aW9uICogZGVsdGE7XG5cbiAgICAvLyBDaGVjayBpZiBzaW11bGF0aW9uIGlzIGNvbXBsZXRlXG4gICAgLy8gV2UgZG8gdGhpcyBoZXJlIGluc3RlYWQgb2YgYGlzQWN0aW9uQ29tcGxldGVgIGFzIGl0IGFsbG93cyB1c1xuICAgIC8vIHRvIGNsYW1wIHRvIGVuZCBkdXJpbmcgdXBkYXRlKVxuICAgIGNvbnN0IGlzQmVsb3dWZWxvY2l0eVRocmVzaG9sZCA9IE1hdGguYWJzKHRoaXMudmVsb2NpdHkpIDw9IHJlc3RTcGVlZDtcbiAgICBjb25zdCBpc0JlbG93RGlzcGxhY2VtZW50VGhyZXNob2xkID0gTWF0aC5hYnModG8gLSBwb3NpdGlvbikgPD0gcmVzdERpc3BsYWNlbWVudDtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBpc0JlbG93VmVsb2NpdHlUaHJlc2hvbGQgJiYgaXNCZWxvd0Rpc3BsYWNlbWVudFRocmVzaG9sZDtcblxuICAgIGlmICh0aGlzLmlzQ29tcGxldGUpIHtcbiAgICAgIHBvc2l0aW9uID0gdG87XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gbmV3IFNwcmluZyhwcm9wcyk7XG4iXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzIl0sIm5hbWVzIjpbImVsZW1lbnQiLCJwcm9wcyIsIkNTU1JlbmRlcmVyIiwiZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24iLCJvblJlbmRlciIsInN0YXRlIiwiY2hhbmdlZFZhbHVlcyIsIm9uUmVhZCIsImtleSIsInZhbHVlVHlwZSIsImRvbVZhbHVlIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBhcnNlIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQTZCZSxVQUFVQSxPQUFWLEVBQW1CQyxLQUFuQixFQUEwQjtBQUN2QyxTQUFPLElBQUlDLFdBQUo7QUFDTEYsb0JBREs7QUFFTEcsZ0NBQTRCO0FBRnZCLEtBR0ZGLEtBSEUsRUFBUDtBQUtELEM7O0FBbkNEOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQyxXOzs7Ozs7Ozs7d0JBQ0pFLFEsdUJBQVc7QUFBQSxpQkFDdUMsS0FBS0gsS0FENUM7QUFBQSxRQUNERCxPQURDLFVBQ0RBLE9BREM7QUFBQSxRQUNRRywwQkFEUixVQUNRQSwwQkFEUjs7QUFFVCwwQkFBVUgsT0FBVixFQUFtQixLQUFLSyxLQUF4QixFQUErQixLQUFLQyxhQUFwQyxFQUFtREgsMEJBQW5EO0FBQ0QsRzs7d0JBRURJLE0sbUJBQU9DLEcsRUFBSztBQUNWLFFBQU1DLFlBQVkscUJBQWNELEdBQWQsQ0FBbEI7O0FBRUEsUUFBSSxDQUFDLHlCQUFlQSxHQUFmLENBQUwsRUFBMEI7QUFBQSxVQUNoQlIsT0FEZ0IsR0FDSixLQUFLQyxLQURELENBQ2hCRCxPQURnQjs7QUFFeEIsVUFBTVUsV0FBV0MsT0FBT0MsZ0JBQVAsQ0FBd0JaLE9BQXhCLEVBQWlDLElBQWpDLEVBQXVDLHdCQUFTUSxHQUFULENBQXZDLEtBQXlELENBQTFFO0FBQ0EsYUFBUUMsYUFBYUEsVUFBVUksS0FBeEIsR0FBaUNKLFVBQVVJLEtBQVYsQ0FBZ0JILFFBQWhCLENBQWpDLEdBQTZEQSxRQUFwRTtBQUNELEtBSkQsTUFJTztBQUNMLFVBQUlELFNBQUosRUFBZTtBQUNiLGVBQU9BLFVBQVVLLE9BQVYsSUFBcUIsQ0FBNUI7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLENBQVA7QUFDRDtBQUNGO0FBQ0YsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy9naXRodWIvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4uLyc7XG5pbXBvcnQgcmVuZGVyQ1NTIGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL3RyYW5zZm9ybS1wcm9wcyc7XG5pbXBvcnQgdmFsdWVUeXBlc01hcCBmcm9tICcuL3ZhbHVlLXR5cGVzJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcblxuY2xhc3MgQ1NTUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIG9uUmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWxlbWVudCwgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgcmVuZGVyQ1NTKGVsZW1lbnQsIHRoaXMuc3RhdGUsIHRoaXMuY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pO1xuICB9XG5cbiAgb25SZWFkKGtleSkge1xuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlVHlwZXNNYXBba2V5XTtcblxuICAgIGlmICghdHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgZG9tVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVtwcmVmaXhlcihrZXkpXSB8fCAwO1xuICAgICAgcmV0dXJuICh2YWx1ZVR5cGUgJiYgdmFsdWVUeXBlLnBhcnNlKSA/IHZhbHVlVHlwZS5wYXJzZShkb21WYWx1ZSkgOiBkb21WYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbHVlVHlwZSkge1xuICAgICAgICByZXR1cm4gdmFsdWVUeXBlLmRlZmF1bHQgfHwgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDU1NSZW5kZXJlcih7XG4gICAgZWxlbWVudCxcbiAgICBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbjogdHJ1ZSxcbiAgICAuLi5wcm9wc1xuICB9KTtcbn1cbiJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3JlbmRlci5qcyJdLCJuYW1lcyI6WyJidWlsZFN0eWxlUHJvcGVydHlTdHJpbmciLCJ0cmFuc2xhdGUiLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsInRyYW5zbGF0ZVoiLCJzY2FsZSIsInNjYWxlWCIsInNjYWxlWSIsInNjYWxlWiIsInJvdGF0ZSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsInRyYW5zbGF0ZU1hcCIsIngiLCJ5IiwieiIsInRyYW5zZm9ybVByb3BPcmRlciIsInNvcnRUcmFuc2Zvcm1Qcm9wcyIsImEiLCJiIiwiaW5kZXhPZiIsImVsZW1lbnQiLCJzdGF0ZSIsImNoYW5nZWRWYWx1ZXMiLCJlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiIsInByb3BlcnR5U3RyaW5nIiwidHJhbnNmb3JtU3RyaW5nIiwiaGFzVHJhbnNmb3JtIiwidHJhbnNmb3JtSGFzWiIsIm51bUNoYW5nZWRWYWx1ZXMiLCJsZW5ndGgiLCJpIiwia2V5IiwicHVzaCIsInNvcnQiLCJ0b3RhbE51bUNoYW5nZWRWYWx1ZXMiLCJ2YWx1ZSIsInRyYW5zZm9ybSIsInN0eWxlIiwiY3NzVGV4dCJdLCJtYXBwaW5ncyI6Ijs7O2tCQTZDd0JBLHdCOztBQTdDeEI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFHRUMsUyw0QkFBQUEsUztJQUNBQyxVLDRCQUFBQSxVO0lBQ0FDLFUsNEJBQUFBLFU7SUFDQUMsVSw0QkFBQUEsVTtJQUNBQyxLLDRCQUFBQSxLO0lBQ0FDLE0sNEJBQUFBLE07SUFDQUMsTSw0QkFBQUEsTTtJQUNBQyxNLDRCQUFBQSxNO0lBQ0FDLE0sNEJBQUFBLE07SUFDQUMsTyw0QkFBQUEsTztJQUNBQyxPLDRCQUFBQSxPO0lBQ0FDLE8sNEJBQUFBLE87OztBQUdGLElBQU1DLGVBQWU7QUFDbkJDLEtBQUcsWUFEZ0I7QUFFbkJDLEtBQUcsWUFGZ0I7QUFHbkJDLEtBQUc7QUFIZ0IsQ0FBckI7O0FBTUEsSUFB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InJlbmRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy9naXRodWIvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vdHJhbnNmb3JtLXByb3BzJztcbmltcG9ydCB2YWx1ZVR5cGVzIGZyb20gJy4vdmFsdWUtdHlwZXMnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vcHJlZml4ZXInO1xuaW1wb3J0IHsgaXNOdW0sIGlzT2JqIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuY29uc3Qge1xuICB0cmFuc2xhdGUsXG4gIHRyYW5zbGF0ZVgsXG4gIHRyYW5zbGF0ZVksXG4gIHRyYW5zbGF0ZVosXG4gIHNjYWxlLFxuICBzY2FsZVgsXG4gIHNjYWxlWSxcbiAgc2NhbGVaLFxuICByb3RhdGUsXG4gIHJvdGF0ZVgsXG4gIHJvdGF0ZVksXG4gIHJvdGF0ZVpcbn0gPSB0cmFuc2Zvcm1Qcm9wcztcblxuY29uc3QgdHJhbnNsYXRlTWFwID0ge1xuICB4OiAndHJhbnNsYXRlWCcsXG4gIHk6ICd0cmFuc2xhdGVZJyxcbiAgejogJ3RyYW5zbGF0ZVonXG59O1xuXG5jb25zdCB0cmFuc2Zvcm1Qcm9wT3JkZXIgPSBbXG4gIHRyYW5zbGF0ZSxcbiAgdHJhbnNsYXRlWCxcbiAgdHJhbnNsYXRlWSxcbiAgdHJhbnNsYXRlWixcbiAgc2NhbGUsXG4gIHNjYWxlWCxcbiAgc2NhbGVZLFxuICBzY2FsZVosXG4gIHJvdGF0ZSxcbiAgcm90YXRlWCxcbiAgcm90YXRlWSxcbiAgcm90YXRlWlxuXTtcblxuZnVuY3Rpb24gc29ydFRyYW5zZm9ybVByb3BzKGEsIGIpIHtcbiAgcmV0dXJuIHRyYW5zZm9ybVByb3BPcmRlci5pbmRleE9mKGEpIC0gdHJhbnNmb3JtUHJvcE9yZGVyLmluZGV4T2YoYik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkU3R5bGVQcm9wZXJ0eVN0cmluZyhlbGVtZW50LCBzdGF0ZSwgY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgbGV0IHByb3BlcnR5U3RyaW5nID0gJyc7XG4gIGxldCB0cmFuc2Zvcm1TdHJpbmcgPSAnJztcbiAgbGV0IGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICBsZXQgdHJhbnNmb3JtSGFzWiA9IGZhbHNlO1xuXG4gIC8vIEZpcnN0IGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgY2hhbmdlZCB0cmFuc2Zvcm0gdmFsdWVzXG4gIC8vIGFuZCBpZiB0cnVlIGFkZCBhbGwgdHJhbnNmb3JtIHZhbHVlc1xuICBjb25zdCBudW1DaGFuZ2VkVmFsdWVzID0gY2hhbmdlZFZhbHVlcy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ2hhbmdlZFZhbHVlczsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGNoYW5nZWRWYWx1ZXNbaV07XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdHJhbnNmb3JtIHByb3BlcnR5LCBhZGQgYWxsIG90aGVyIHRyYW5zZm9ybSBwcm9wc1xuICAgIC8vIHRvIGNoYW5nZWRWYWx1ZXMgYW5kIHRoZW4gYnJlYWtcbiAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldICYmIGNoYW5nZWRWYWx1ZXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNoYW5nZWRWYWx1ZXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZWRWYWx1ZXMuc29ydChzb3J0VHJhbnNmb3JtUHJvcHMpO1xuXG4gIC8vIE5vdyBydW4gdGhyb3VnaCBlYWNoIHByb3BlcnR5LCBhbmQgZGVjaWRlIHdoaWNoIGlzIGEgcGxhaW4gc3R5bGUgcHJvcHMsXG4gIC8vIGEgdHJhbnNmb3JtIHByb3BlcnR5IGFuZCBDU1MgdmFycyBhbmQgaGFuZGxlIGFjY29yZGluZ2x5XG4gIGNvbnN0IHRvdGFsTnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsTnVtQ2hhbmdlZFZhbHVlczsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGNoYW5nZWRWYWx1ZXNbaV07XG4gICAgbGV0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgIGlmICh0cmFuc2xhdGVNYXBba2V5XSkge1xuICAgICAga2V5ID0gdHJhbnNsYXRlTWFwW2tleV07XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIG51bWJlciBvciBvYmplY3QgYW5kIHdlIGhhdmUgZmlsdGVyLCBhcHBseSBmaWx0ZXJcbiAgICBpZiAodmFsdWVUeXBlc1trZXldICYmIChpc051bSh2YWx1ZSkgfHwgaXNPYmoodmFsdWUpKSAmJiB2YWx1ZVR5cGVzW2tleV0udHJhbnNmb3JtKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlVHlwZXNba2V5XS50cmFuc2Zvcm0odmFsdWUpO1xuICAgIH1cblxuICAgIC8vIElmIGEgdHJhbnNmb3JtIHByb3AsIGFkZCB0byB0cmFuc2Zvcm0gc3RyaW5nXG4gICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBrZXkgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgICB0cmFuc2Zvcm1IYXNaID0gKGtleSA9PT0gdHJhbnNsYXRlTWFwLnopID8gdHJ1ZSA6IHRyYW5zZm9ybUhhc1o7XG5cbiAgICAvLyBPciBpZiBhIHNpbXBsZSBDU1MgcHJvcGVydHksIHNldFxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcihrZXksIHRydWUpICsgJzonICsgdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgd2UgaGF2ZSB0cmFuc2Zvcm0gcHJvcHMsIGJ1aWxkIGEgdHJhbnNmb3JtIHN0cmluZ1xuICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gdHJhbnNsYXRlTWFwLnogKyAnKDApJztcbiAgICB9XG5cbiAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcigndHJhbnNmb3JtJywgdHJ1ZSkgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gIH1cblxuICBlbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gcHJvcGVydHlTdHJpbmc7XG59XG4iXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzIl0sIm5hbWVzIjpbImVsZW1lbnQiLCJwcm9wcyIsIlNWR1JlbmRlcmVyIiwiZ2V0QkJveCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJlbGVtZW50RGltZW5zaW9ucyIsIm9uUmVuZGVyIiwiYXR0cnMiLCJzdGF0ZSIsIm9uUmVhZCIsImtleSIsImdldEF0dHJpYnV0ZSIsInZhbHVlVHlwZSIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFnQ2UsVUFBVUEsT0FBVixFQUFtQkMsS0FBbkIsRUFBMEI7QUFDdkMsU0FBTyxJQUFJQyxXQUFKO0FBQ0xGO0FBREssS0FFRkMsS0FGRSxFQUFQO0FBSUQsQzs7QUFyQ0Q7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQyxXOzs7QUFDSix1QkFBWUQsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixxQkFBTUEsS0FBTixDQURpQjs7QUFBQSxnQ0FHZUEsTUFBTUQsT0FBTixDQUFjRyxPQUFkLEVBSGY7QUFBQSxRQUdUQyxDQUhTLHlCQUdUQSxDQUhTO0FBQUEsUUFHTkMsQ0FITSx5QkFHTkEsQ0FITTtBQUFBLFFBR0hDLEtBSEcseUJBR0hBLEtBSEc7QUFBQSxRQUdJQyxNQUhKLHlCQUdJQSxNQUhKOztBQUlqQixVQUFLQyxpQkFBTCxHQUF5QixFQUFFSixJQUFGLEVBQUtDLElBQUwsRUFBUUMsWUFBUixFQUFlQyxjQUFmLEVBQXpCO0FBSmlCO0FBS2xCOzt3QkFFREUsUSx1QkFBVztBQUFBLFFBQ0RULE9BREMsR0FDVyxLQUFLQyxLQURoQixDQUNERCxPQURDOztBQUVULFFBQU1VLFFBQVEscUJBQU0sS0FBS0MsS0FBWCxFQUFrQixLQUFLSCxpQkFBdkIsQ0FBZDtBQUNBLDRCQUFZUixPQUFaLEVBQXFCVSxLQUFyQjtBQUNELEc7O3dCQUVERSxNLG1CQUFPQyxHLEVBQUs7QUFBQSxRQUNGYixPQURFLEdBQ1UsS0FBS0MsS0FEZixDQUNGRCxPQURFOzs7QUFHVixRQUFJLENBQUMseUJBQWVhLEdBQWYsQ0FBTCxFQUEwQjtBQUN4QixhQUFPYixRQUFRYyxZQUFSLENBQXFCRCxHQUFyQixDQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBTUUsWUFBWSxxQkFBYUYsR0FBYixDQUFsQjtBQUNBLGFBQVFFLFNBQUQsR0FBY0EsVUFBVUMsT0FBeEIsR0FBa0MsQ0FBekM7QUFDRDtBQUNGLEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMvZ2l0aHViL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZW5kZXJlciBmcm9tICcuLi8nO1xuaW1wb3J0IGJ1aWxkIGZyb20gJy4vYnVpbGQnO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL3ZhbHVlLXR5cGVzJztcbmltcG9ydCB7IHNldERPTUF0dHJzIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuY2xhc3MgU1ZHUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKTtcbiAgICB0aGlzLmVsZW1lbnREaW1lbnNpb25zID0geyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH07XG4gIH1cblxuICBvblJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYXR0cnMgPSBidWlsZCh0aGlzLnN0YXRlLCB0aGlzLmVsZW1lbnREaW1lbnNpb25zKTtcbiAgICBzZXRET01BdHRycyhlbGVtZW50LCBhdHRycyk7XG4gIH1cblxuICBvblJlYWQoa2V5KSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCF0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWVUeXBlTWFwW2tleV07XG4gICAgICByZXR1cm4gKHZhbHVlVHlwZSkgPyB2YWx1ZVR5cGUuZGVmYXVsdCA6IDA7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1JlbmRlcmVyKHtcbiAgICBlbGVtZW50LFxuICAgIC4uLnByb3BzXG4gIH0pO1xufVxuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL2J1aWxkLmpzIl0sIm5hbWVzIjpbImJ1aWxkIiwiWkVST19OT1RfWkVSTyIsInN0YXRlIiwiZGF0YSIsImhhc1RyYW5zZm9ybSIsInByb3BzIiwic2NhbGUiLCJ1bmRlZmluZWQiLCJzY2FsZVgiLCJzY2FsZVkiLCJ0cmFuc2Zvcm1PcmlnaW5YIiwid2lkdGgiLCJvcmlnaW5YIiwieCIsInRyYW5zZm9ybU9yaWdpblkiLCJoZWlnaHQiLCJvcmlnaW5ZIiwieSIsInNjYWxlVHJhbnNmb3JtWCIsInNjYWxlVHJhbnNmb3JtWSIsInNjYWxlUmVwbGFjZVgiLCJzY2FsZVJlcGxhY2VZIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJyb3RhdGUiLCJza2V3WCIsInNrZXdZIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJkZWZhdWx0VmFsdWUiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7a0JBS3dCQSxLOztBQUx4Qjs7QUFDQTs7Ozs7O0FBRUEsSUFBTUMsZ0JBQWdCLE1BQXRCOztBQUVlLFNBQVNELEtBQVQsQ0FBZUUsS0FBZixFQUFzQkMsSUFBdEIsRUFBNEI7QUFDekMsTUFBSUMsZUFBZSxLQUFuQjtBQUNBLE1BQU1DLFFBQVEsRUFBZDtBQUNBLE1BQU1DLFFBQVFKLE1BQU1JLEtBQU4sS0FBZ0JDLFNBQWhCLEdBQTRCTCxNQUFNSSxLQUFOLElBQWVMLGFBQTNDLEdBQTJEQyxNQUFNTSxNQUFOLElBQWdCLENBQXpGO0FBQ0EsTUFBTUMsU0FBU1AsTUFBTU8sTUFBTixLQUFpQkYsU0FBakIsR0FBNkJMLE1BQU1PLE1BQU4sSUFBZ0JSLGFBQTdDLEdBQTZESyxTQUFTLENBQXJGO0FBQ0EsTUFBTUksbUJBQW1CUCxLQUFLUSxLQUFMLElBQWMsQ0FBQ1QsTUFBTVUsT0FBTixJQUFpQixFQUFsQixJQUF3QixHQUF0QyxJQUE2Q1QsS0FBS1UsQ0FBM0U7QUFDQSxNQUFNQyxtQkFBbUJYLEtBQUtZLE1BQUwsSUFBZSxDQUFDYixNQUFNYyxPQUFOLElBQWlCLEVBQWxCLElBQXdCLEdBQXZDLElBQThDYixLQUFLYyxDQUE1RTtBQUNBLE1BQU1DLGtCQUFrQixDQUFFUixnQkFBRixJQUFzQkosUUFBUSxDQUE5QixDQUF4QjtBQUNBLE1BQU1hLGtCQUFrQixDQUFFTCxnQkFBRixJQUFzQkwsU0FBUyxDQUEvQixDQUF4QjtBQUNBLE1BQU1XLGdCQUFnQlYsbUJBQW1CSixLQUF6QztBQUNBLE1BQU1lLGdCQUFnQlAsbUJBQW1CTCxNQUF6QztBQUNBLE1BQU1hLFlBQVk7QUFDaEJDLDhCQUF3QnJCLE1BQU1zQixVQUE5QixVQUE2Q3RCLE1BQU11QixVQUFuRCxPQURnQjtBQUVoQm5CLDBCQUFvQlksZUFBcEIsVUFBd0NDLGVBQXhDLGdCQUFrRWIsS0FBbEUsVUFBNEVHLE1BQTVFLG9CQUFpR1csYUFBakcsVUFBbUhDLGFBQW5ILE9BRmdCO0FBR2hCSyx3QkFBa0J4QixNQUFNd0IsTUFBeEIsVUFBbUNoQixnQkFBbkMsVUFBd0RJLGdCQUF4RCxPQUhnQjtBQUloQmEsc0JBQWdCekIsTUFBTXlCLEtBQXRCLE9BSmdCO0FBS2hCQyxzQkFBZ0IxQixNQUFNMEIsS0FBdEI7QUFMZ0IsR0FBbEI7O0FBUUEsT0FBSyxJQUFJQyxHQUFULElBQWdCM0IsS0FBaEIsRUFBdUI7QUFDckIsUUFBSUEsTUFBTTRCLGNBQU4sQ0FBcUJELEdBQXJCLENBQUosRUFBK0I7QUFDN0IsVUFBSSx5QkFBZUEsR0FBZixDQUFKLEVBQXlCO0FBQ3ZCekIsdUJBQWUsSUFBZjtBQUNELE9BRkQsTUFFTztBQUNMQyxjQUFNLHdCQUFZd0IsR0FBWixDQUFOLElBQTBCM0IsTUFBTTJCLEdBQU4sQ0FBMUI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsTUFBSXpCLFlBQUosRUFBa0I7QUFDaEJDLFVBQU1pQixTQUFOLEdBQWtCLEVBQWxCOztBQUVBLFNBQUssSUFBSU8sSUFBVCxJQUFnQlAsU0FBaEIsRUFBMkI7QUFDekIsVUFBSUEsVUFBVVEsY0FBVixDQUF5QkQsSUFBekIsQ0FBSixFQUFtQztBQUNqQyxZQUFNRSxlQUFnQkYsU0FBUSxPQUFULEdBQW9CLEdBQXBCLEdBQTBCLEdBQS9DO0FBQ0F4QixjQUFNaUIsU0FBTixJQUFtQkEsVUFBVU8sSUFBVixFQUFlRyxPQUFmLENBQXVCLFlBQXZCLEVBQXFDRCxZQUFyQyxDQUFuQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPMUIsS0FBUDtBQUNEIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzL2dpdGh1Yi9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW1lbFRvRGFzaCB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcyc7XG5cbmNvbnN0IFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBkYXRhKSB7XG4gIGxldCBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgY29uc3QgcHJvcHMgPSB7fTtcbiAgY29uc3Qgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxO1xuICBjb25zdCBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMTtcbiAgY29uc3QgdHJhbnNmb3JtT3JpZ2luWCA9IGRhdGEud2lkdGggKiAoKHN0YXRlLm9yaWdpblggfHwgNTApIC8gMTAwKSArIGRhdGEueDtcbiAgY29uc3QgdHJhbnNmb3JtT3JpZ2luWSA9IGRhdGEuaGVpZ2h0ICogKChzdGF0ZS5vcmlnaW5ZIHx8IDUwKSAvIDEwMCkgKyBkYXRhLnk7XG4gIGNvbnN0IHNjYWxlVHJhbnNmb3JtWCA9IC0gdHJhbnNmb3JtT3JpZ2luWCAqIChzY2FsZSAqIDEpO1xuICBjb25zdCBzY2FsZVRyYW5zZm9ybVkgPSAtIHRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSk7XG4gIGNvbnN0IHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGU7XG4gIGNvbnN0IHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZO1xuICBjb25zdCB0cmFuc2Zvcm0gPSB7XG4gICAgdHJhbnNsYXRlOiBgdHJhbnNsYXRlKCR7c3RhdGUudHJhbnNsYXRlWH0sICR7c3RhdGUudHJhbnNsYXRlWX0pIGAsXG4gICAgc2NhbGU6IGB0cmFuc2xhdGUoJHtzY2FsZVRyYW5zZm9ybVh9LCAke3NjYWxlVHJhbnNmb3JtWX0pIHNjYWxlKCR7c2NhbGV9LCAke3NjYWxlWX0pIHRyYW5zbGF0ZSgke3NjYWxlUmVwbGFjZVh9LCAke3NjYWxlUmVwbGFjZVl9KSBgLFxuICAgIHJvdGF0ZTogYHJvdGF0ZSgke3N0YXRlLnJvdGF0ZX0sICR7dHJhbnNmb3JtT3JpZ2luWH0sICR7dHJhbnNmb3JtT3JpZ2luWX0pIGAsXG4gICAgc2tld1g6IGBza2V3WCgke3N0YXRlLnNrZXdYfSkgYCxcbiAgICBza2V3WTogYHNrZXdZKCR7c3RhdGUuc2tld1l9KSBgXG4gIH07XG5cbiAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wc1tjYW1lbFRvRGFzaChrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHRyYW5zZm9ybSkge1xuICAgICAgaWYgKHRyYW5zZm9ybS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IChrZXkgPT09ICdzY2FsZScpID8gJzEnIDogJzAnO1xuICAgICAgICBwcm9wcy50cmFuc2Zvcm0gKz0gdHJhbnNmb3JtW2tleV0ucmVwbGFjZSgvdW5kZWZpbmVkL2csIGRlZmF1bHRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzO1xufVxuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbImZpbGwiLCJzdHJva2UiLCJzY2FsZSIsInNjYWxlWCIsInNjYWxlWSIsIm9wYWNpdHkiLCJmaWxsT3BhY2l0eSIsInN0cm9rZU9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7a0JBRWU7QUFDYkEseUJBRGE7QUFFYkMsMkJBRmE7QUFHYkMsMEJBSGE7QUFJYkMsMkJBSmE7QUFLYkMsMkJBTGE7QUFNYkMsNEJBTmE7QUFPYkMsZ0NBUGE7QUFRYkM7QUFSYSxDIiwiZmlsZSI6InZhbHVlLXR5cGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzL2dpdGh1Yi9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbHBoYSwgY29sb3IsIHNjYWxlIH0gZnJvbSAnLi4vLi4vaW5jL3ZhbHVlLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaWxsOiBjb2xvcixcbiAgc3Ryb2tlOiBjb2xvcixcbiAgc2NhbGU6IHNjYWxlLFxuICBzY2FsZVg6IHNjYWxlLFxuICBzY2FsZVk6IHNjYWxlLFxuICBvcGFjaXR5OiBhbHBoYSxcbiAgZmlsbE9wYWNpdHk6IGFscGhhLFxuICBzdHJva2VPcGFjaXR5OiBhbHBoYVxufTsiXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanMiXSwibmFtZXMiOlsiZWxlbWVudCIsInByb3BzIiwiU1ZHUGF0aFJlbmRlcmVyIiwiZ2V0QkJveCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJlbGVtZW50RGltZW5zaW9ucyIsInBhdGhMZW5ndGgiLCJnZXRUb3RhbExlbmd0aCIsIm9uUmVuZGVyIiwic3RhdGUiLCJvblJlYWQiLCJrZXkiLCJnZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkE2QmUsVUFBVUEsT0FBVixFQUFtQkMsS0FBbkIsRUFBMEI7QUFDdkMsU0FBTyxJQUFJQyxlQUFKO0FBQ0xGO0FBREssS0FFRkMsS0FGRSxFQUFQO0FBSUQsQzs7QUFsQ0Q7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1DLGU7OztBQUNKLDJCQUFZRCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLHFCQUFNQSxLQUFOLENBRGlCOztBQUFBLGdDQUdlQSxNQUFNRCxPQUFOLENBQWNHLE9BQWQsRUFIZjtBQUFBLFFBR1RDLENBSFMseUJBR1RBLENBSFM7QUFBQSxRQUdOQyxDQUhNLHlCQUdOQSxDQUhNO0FBQUEsUUFHSEMsS0FIRyx5QkFHSEEsS0FIRztBQUFBLFFBR0lDLE1BSEoseUJBR0lBLE1BSEo7O0FBSWpCLFVBQUtDLGlCQUFMLEdBQXlCO0FBQ3ZCSixVQUR1QjtBQUV2QkMsVUFGdUI7QUFHdkJDLGtCQUh1QjtBQUl2QkMsb0JBSnVCO0FBS3ZCRSxrQkFBWVIsTUFBTUQsT0FBTixDQUFjVSxjQUFkO0FBTFcsS0FBekI7QUFKaUI7QUFXbEI7OzRCQUVEQyxRLHVCQUFXO0FBQUEsUUFDREYsVUFEQyxHQUNjLEtBQUtELGlCQURuQixDQUNEQyxVQURDO0FBQUEsUUFFRFQsT0FGQyxHQUVXLEtBQUtDLEtBRmhCLENBRURELE9BRkM7O0FBR1QsNEJBQVlBLE9BQVosRUFBcUIscUJBQU0sS0FBS1ksS0FBWCxFQUFrQkgsVUFBbEIsQ0FBckI7QUFDRCxHOzs0QkFFREksTSxtQkFBT0MsRyxFQUFLO0FBQ1YsV0FBTyxLQUFLYixLQUFMLENBQVdELE9BQVgsQ0FBbUJlLFlBQW5CLENBQWdDRCxHQUFoQyxDQUFQO0FBQ0QsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy9naXRodWIvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4uLyc7XG5pbXBvcnQgYnVpbGQgZnJvbSAnLi9idWlsZCc7XG5pbXBvcnQgeyBzZXRET01BdHRycyB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5cbmNsYXNzIFNWR1BhdGhSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IHByb3BzLmVsZW1lbnQuZ2V0QkJveCgpO1xuICAgIHRoaXMuZWxlbWVudERpbWVuc2lvbnMgPSB7XG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgcGF0aExlbmd0aDogcHJvcHMuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpXG4gICAgfTtcbiAgfVxuXG4gIG9uUmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGF0aExlbmd0aCB9ID0gdGhpcy5lbGVtZW50RGltZW5zaW9ucztcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgc2V0RE9NQXR0cnMoZWxlbWVudCwgYnVpbGQodGhpcy5zdGF0ZSwgcGF0aExlbmd0aCkpO1xuICB9XG5cbiAgb25SZWFkKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgU1ZHUGF0aFJlbmRlcmVyKHtcbiAgICBlbGVtZW50LFxuICAgIC4uLnByb3BzXG4gIH0pO1xufVxuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvYnVpbGQuanMiXSwibmFtZXMiOlsicGVyY2VudFRvUGl4ZWxzIiwicGVyY2VudCIsImxlbmd0aCIsInBhcnNlRmxvYXQiLCJzdGF0ZSIsInN0eWxlcyIsImRhc2hBcnJheVN0eWxlcyIsInNwYWNpbmciLCJoYXNEYXNoQXJyYXkiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7O0FBTUEsSUFBTUEsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxPQUFELEVBQVVDLE1BQVY7QUFBQSxTQUFzQkMsV0FBV0YsT0FBWCxJQUFzQixHQUF2QixHQUE4QkMsTUFBOUIsR0FBdUMsSUFBNUQ7QUFBQSxDQUF4Qjs7a0JBRWUsVUFBQ0UsS0FBRCxFQUFRRixNQUFSLEVBQW1CO0FBQ2hDLE1BQU1HLFNBQVMsRUFBZjtBQUNBLE1BQU1DLGtCQUFrQjtBQUN0QkosWUFBUSxHQURjO0FBRXRCSyxhQUFTTCxTQUFTO0FBRkksR0FBeEI7QUFJQSxNQUFJTSxlQUFlLEtBQW5COztBQUVBLE9BQUssSUFBSUMsR0FBVCxJQUFnQkwsS0FBaEIsRUFBdUI7QUFDckIsUUFBSUEsTUFBTU0sY0FBTixDQUFxQkQsR0FBckIsQ0FBSixFQUErQjtBQUM3QixVQUFNRSxRQUFRUCxNQUFNSyxHQUFOLENBQWQ7O0FBRUEsY0FBUUEsR0FBUjtBQUNBLGFBQUssUUFBTDtBQUNBLGFBQUssU0FBTDtBQUNFRCx5QkFBZSxJQUFmO0FBQ0FGLDBCQUFnQkcsR0FBaEIsSUFBdUJULGdCQUFnQlcsS0FBaEIsRUFBdUJULE1BQXZCLENBQXZCO0FBQ0E7QUFDRixhQUFLLFFBQUw7QUFDRUcsaUJBQU8sbUJBQVAsSUFBOEJMLGdCQUFnQixDQUFDVyxLQUFqQixFQUF3QlQsTUFBeEIsQ0FBOUI7QUFDQTtBQUNGO0FBQ0VHLGlCQUFPSSxHQUFQLElBQWNFLEtBQWQ7QUFWRjtBQVlEO0FBQ0Y7O0FBRUQsTUFBSUgsWUFBSixFQUFrQjtBQUNoQkgsV0FBTyxrQkFBUCxJQUE2QkMsZ0JBQWdCSixNQUFoQixHQUF5QixHQUF6QixHQUErQkksZ0JBQWdCQyxPQUE1RTtBQUNEOztBQUVELFNBQU9GLE1BQVA7QUFDRCxDIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzL2dpdGh1Yi9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBQZXJjZW50YWdlIG9mIHRvdGFsIGxlbmd0aFxuICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbmNvbnN0IHBlcmNlbnRUb1BpeGVscyA9IChwZXJjZW50LCBsZW5ndGgpID0+IChwYXJzZUZsb2F0KHBlcmNlbnQpIC8gMTAwKSAqIGxlbmd0aCArICdweCc7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgbGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHt9O1xuICBjb25zdCBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgbGVuZ3RoOiAnMCcsXG4gICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICB9O1xuICBsZXQgaGFzRGFzaEFycmF5ID0gZmFsc2U7XG5cbiAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICBzdHlsZXNbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGRhc2hBcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBkYXNoQXJyYXlTdHlsZXMuc3BhY2luZztcbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59O1xuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwteGwuanMiXSwibmFtZXMiOlsicG9wbW90aW9uIiwid2luZG93IiwicG9wbW90aW9uWEwiLCJkcmFnZ2FibGUiLCJpbmVydGlhIiwic2Nyb2xsIiwic3Bpbm5hYmxlIiwidGltZWxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7SUFBWUEsUzs7QUFDWjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBQyxPQUFPQyxXQUFQLGdCQUNLRixTQURMO0FBRUVHLDBCQUZGO0FBR0VDLHdCQUhGO0FBSUVDLHVCQUpGO0FBS0VDLDBCQUxGO0FBTUVDO0FBTkYiLCJmaWxlIjoiZ2xvYmFsLXhsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzL2dpdGh1Yi9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwb3Btb3Rpb24gZnJvbSAnLi9wb3Btb3Rpb24nO1xuaW1wb3J0IGRyYWdnYWJsZSBmcm9tICcuLi9wYWNrYWdlcy9wb3Btb3Rpb24tZHJhZ2dhYmxlL3NyYyc7XG5pbXBvcnQgaW5lcnRpYSBmcm9tICcuLi9wYWNrYWdlcy9wb3Btb3Rpb24taW5lcnRpYS9zcmMnO1xuaW1wb3J0IHNjcm9sbCBmcm9tICcuLi9wYWNrYWdlcy9wb3Btb3Rpb24tc2Nyb2xsL3NyYyc7XG5pbXBvcnQgc3Bpbm5hYmxlIGZyb20gJy4uL3BhY2thZ2VzL3BvcG1vdGlvbi1zcGlubmFibGUvc3JjJztcbmltcG9ydCB0aW1lbGluZSBmcm9tICcuLi9wYWNrYWdlcy9wb3Btb3Rpb24tdGltZWxpbmUvc3JjJztcblxud2luZG93LnBvcG1vdGlvblhMID0ge1xuICAuLi5wb3Btb3Rpb24sXG4gIGRyYWdnYWJsZSxcbiAgaW5lcnRpYSxcbiAgc2Nyb2xsLFxuICBzcGlubmFibGUsXG4gIHRpbWVsaW5lXG59O1xuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BvcG1vdGlvbi1kcmFnZ2FibGUvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRyYWdnYWJsZSIsIm5vZGUiLCJ4IiwieSIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJvbkRyYWciLCJvbkRyYWdTdGFydCIsIm9uRHJhZ1N0b3AiLCJub2RlUmVuZGVyZXIiLCJ2YWx1ZXMiLCJ2Iiwic2V0Iiwibm9kZVhZIiwib25VcGRhdGUiLCJzdGFydFRyYWNraW5nIiwiZSIsInBvaW50ZXJUcmFja2VyIiwic3RhcnQiLCJmcm9tIiwiZ2V0Iiwib25TdG9wIiwic3RvcCIsInN0b3BUcmFja2luZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7OztrQkFFd0JBLFM7O0FBRnhCOztBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLElBQW5CLEVBUVA7QUFBQSxpRkFBSixFQUFJO0FBQUEsb0JBUE5DLENBT007QUFBQSxNQVBOQSxDQU9NLDBCQVBGLElBT0U7QUFBQSxvQkFOTkMsQ0FNTTtBQUFBLE1BTk5BLENBTU0sMEJBTkYsSUFNRTtBQUFBLDJCQUxOQyxRQUtNO0FBQUEsTUFMTkEsUUFLTSxpQ0FMSyxDQUtMO0FBQUEsMkJBSk5DLFFBSU07QUFBQSxNQUpOQSxRQUlNLGlDQUpLLENBSUw7QUFBQSxNQUhOQyxNQUdNLFFBSE5BLE1BR007QUFBQSxNQUZOQyxXQUVNLFFBRk5BLFdBRU07QUFBQSxNQUROQyxVQUNNLFFBRE5BLFVBQ007O0FBQ04sTUFBTUMsZUFBZSxvQkFBSVIsSUFBSixDQUFyQjtBQUNBLE1BQU1TLFNBQVMsRUFBZjtBQUNBLE1BQUlSLENBQUosRUFBT1EsT0FBT1IsQ0FBUCxHQUFXLHNCQUFNRSxRQUFOLEVBQWdCLFVBQUNPLENBQUQ7QUFBQSxXQUFPRixhQUFhRyxHQUFiLENBQWlCLEdBQWpCLEVBQXNCRCxDQUF0QixDQUFQO0FBQUEsR0FBaEIsQ0FBWDtBQUNQLE1BQUlSLENBQUosRUFBT08sT0FBT1AsQ0FBUCxHQUFXLHNCQUFNRSxRQUFOLEVBQWdCLFVBQUNNLENBQUQ7QUFBQSxXQUFPRixhQUFhRyxHQUFiLENBQWlCLEdBQWpCLEVBQXNCRCxDQUF0QixDQUFQO0FBQUEsR0FBaEIsQ0FBWDs7QUFFUCxNQUFNRSxTQUFTLDBCQUFVSCxNQUFWLEVBQWtCO0FBQy9CSSxjQUFVUjtBQURxQixHQUFsQixDQUFmOztBQUlBLFdBQVNTLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBCO0FBQ3hCLFFBQU1DLGlCQUFpQix3QkFBUUQsQ0FBUixFQUFXRSxLQUFYLEVBQXZCOztBQUVBLFFBQUloQixDQUFKLEVBQU87QUFDTCxrQ0FBWWUsZUFBZWYsQ0FBM0IsRUFBOEI7QUFDNUJpQixjQUFNTixPQUFPWCxDQUFQLENBQVNrQixHQUFULEVBRHNCO0FBRTVCTixrQkFBVUQsT0FBT1g7QUFGVyxPQUE5QixFQUdHZ0IsS0FISDtBQUlEOztBQUVELFFBQUlmLENBQUosRUFBTztBQUNMLGtDQUFZYyxlQUFlZCxDQUEzQixFQUE4QjtBQUM1QmdCLGNBQU1OLE9BQU9WLENBQVAsQ0FBU2lCLEdBQVQsRUFEc0I7QUFFNUJOLGtCQUFVRCxPQUFPVixDQUZXO0FBRzVCa0IsZ0JBQVE7QUFBQSxpQkFBTUosZUFBZUssSUFBZixFQUFOO0FBQUE7QUFIb0IsT0FBOUIsRUFJR0osS0FKSDtBQUtEOztBQUVELFFBQUlYLFdBQUosRUFBaUJBLFlBQVlNLE1BQVo7QUFDbEI7O0FBRUQsV0FBU1UsWUFBVCxHQUF3QjtBQUN0QlYsV0FBT1MsSUFBUDs7QUFFQSxRQUFJZCxVQUFKLEVBQWdCQSxXQUFXSyxNQUFYO0FBQ2pCOztBQUVEWixPQUFLdUIsZ0JBQUwsQ0FBc0IsV0FBdEIsRUFBbUNULGFBQW5DO0FBQ0FkLE9BQUt1QixnQkFBTCxDQUFzQixZQUF0QixFQUFvQ1QsYUFBcEMsRUFBbUQsRUFBRVUsU0FBUyxLQUFYLEVBQW5EO0FBQ0FDLFdBQVNGLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDRCxZQUFyQztBQUNBRyxXQUFTRixnQkFBVCxDQUEwQixVQUExQixFQUFzQ0QsWUFBdEM7O0FBRUEsU0FBT1YsTUFBUDtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzL2dpdGh1Yi9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wb3NpdGUsIHZhbHVlLCBjc3MsIHBvaW50ZXIsIHRyYWNrT2Zmc2V0IH0gZnJvbSAncG9wbW90aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhZ2dhYmxlKG5vZGUsIHtcbiAgeCA9IHRydWUsXG4gIHkgPSB0cnVlLFxuICBpbml0aWFsWCA9IDAsXG4gIGluaXRpYWxZID0gMCxcbiAgb25EcmFnLFxuICBvbkRyYWdTdGFydCxcbiAgb25EcmFnU3RvcFxufSA9IHt9KSB7XG4gIGNvbnN0IG5vZGVSZW5kZXJlciA9IGNzcyhub2RlKTtcbiAgY29uc3QgdmFsdWVzID0ge307XG4gIGlmICh4KSB2YWx1ZXMueCA9IHZhbHVlKGluaXRpYWxYLCAodikgPT4gbm9kZVJlbmRlcmVyLnNldCgneCcsIHYpKTtcbiAgaWYgKHkpIHZhbHVlcy55ID0gdmFsdWUoaW5pdGlhbFksICh2KSA9PiBub2RlUmVuZGVyZXIuc2V0KCd5JywgdikpO1xuXG4gIGNvbnN0IG5vZGVYWSA9IGNvbXBvc2l0ZSh2YWx1ZXMsIHtcbiAgICBvblVwZGF0ZTogb25EcmFnXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0VHJhY2tpbmcoZSkge1xuICAgIGNvbnN0IHBvaW50ZXJUcmFja2VyID0gcG9pbnRlcihlKS5zdGFydCgpO1xuXG4gICAgaWYgKHgpIHtcbiAgICAgIHRyYWNrT2Zmc2V0KHBvaW50ZXJUcmFja2VyLngsIHtcbiAgICAgICAgZnJvbTogbm9kZVhZLnguZ2V0KCksXG4gICAgICAgIG9uVXBkYXRlOiBub2RlWFkueFxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBpZiAoeSkge1xuICAgICAgdHJhY2tPZmZzZXQocG9pbnRlclRyYWNrZXIueSwge1xuICAgICAgICBmcm9tOiBub2RlWFkueS5nZXQoKSxcbiAgICAgICAgb25VcGRhdGU6IG5vZGVYWS55LFxuICAgICAgICBvblN0b3A6ICgpID0+IHBvaW50ZXJUcmFja2VyLnN0b3AoKVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBpZiAob25EcmFnU3RhcnQpIG9uRHJhZ1N0YXJ0KG5vZGVYWSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wVHJhY2tpbmcoKSB7XG4gICAgbm9kZVhZLnN0b3AoKTtcblxuICAgIGlmIChvbkRyYWdTdG9wKSBvbkRyYWdTdG9wKG5vZGVYWSk7XG4gIH1cblxuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHN0YXJ0VHJhY2tpbmcpO1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzdGFydFRyYWNraW5nLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcFRyYWNraW5nKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBzdG9wVHJhY2tpbmcpO1xuXG4gIHJldHVybiBub2RlWFk7XG59XG4iXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BvcG1vdGlvbi1pbmVydGlhL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmVydGlhIiwib25TdGFydCIsInByb3BzIiwidmVsb2NpdHkiLCJwb3dlciIsIm1vZGlmeVRhcmdldCIsImFtcGxpdHVkZSIsInRhcmdldCIsIk1hdGgiLCJyb3VuZCIsImN1cnJlbnQiLCJlbGFwc2VkIiwidXBkYXRlIiwiYXV0b1N0b3BEZWx0YSIsInRpbWVDb25zdGFudCIsImRlbHRhIiwiZXhwIiwiaXNNb3ZpbmciLCJpc0NvbXBsZXRlIiwiaXNBY3Rpb25Db21wbGV0ZSIsImRlZmF1bHRQcm9wcyIsImZyb20iXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7Ozs7OytlQURBOzs7SUFHTUEsTzs7Ozs7Ozs7O29CQVNKQyxPLHNCQUFVO0FBQUEsaUJBQ2tDLEtBQUtDLEtBRHZDO0FBQUEsUUFDQUMsUUFEQSxVQUNBQSxRQURBO0FBQUEsUUFDVUMsS0FEVixVQUNVQSxLQURWO0FBQUEsUUFDaUJDLFlBRGpCLFVBQ2lCQSxZQURqQjs7O0FBR1IsU0FBS0MsU0FBTCxHQUFpQkYsUUFBUUQsUUFBekI7QUFDQSxTQUFLSSxNQUFMLEdBQWNDLEtBQUtDLEtBQUwsQ0FBVyxLQUFLQyxPQUFMLEdBQWUsS0FBS0osU0FBL0IsQ0FBZDtBQUNBLFNBQUtLLE9BQUwsR0FBZSxDQUFmOztBQUVBLFFBQUlOLFlBQUosRUFBa0I7QUFDaEIsV0FBS0UsTUFBTCxHQUFjRixhQUFhLEtBQUtFLE1BQWxCLENBQWQ7QUFDRDtBQUNGLEc7O29CQUVESyxNLHFCQUFTO0FBQUEsa0JBQ2lDLEtBQUtWLEtBRHRDO0FBQUEsUUFDQ1csYUFERCxXQUNDQSxhQUREO0FBQUEsUUFDZ0JDLFlBRGhCLFdBQ2dCQSxZQURoQjs7O0FBR1AsU0FBS0gsT0FBTCxJQUFnQixvQ0FBaEI7QUFDQSxRQUFNSSxRQUFRLENBQUMsS0FBS1QsU0FBTixHQUFrQkUsS0FBS1EsR0FBTCxDQUFTLENBQUMsS0FBS0wsT0FBTixHQUFnQkcsWUFBekIsQ0FBaEM7QUFDQSxRQUFNRyxXQUFZRixRQUFRRixhQUFSLElBQXlCRSxRQUFRLENBQUNGLGFBQXBEO0FBQ0EsUUFBSSxDQUFDSSxRQUFMLEVBQWUsS0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNmLFdBQU9ELFdBQVcsS0FBS1YsTUFBTCxHQUFjUSxLQUF6QixHQUFpQyxLQUFLUixNQUE3QztBQUNELEc7O29CQUVEWSxnQiwrQkFBbUI7QUFDakIsV0FBTyxLQUFLRCxVQUFaO0FBQ0QsRzs7Ozs7QUFqQ0dsQixPLENBQ0dvQixZLEdBQWU7QUFDcEJqQixZQUFVLENBRFU7QUFFcEJrQixRQUFNLENBRmM7QUFHcEJqQixTQUFPLEdBSGE7QUFJcEJVLGdCQUFjLEdBSk07QUFLcEJELGlCQUFlO0FBTEssQzs7a0JBbUNULFVBQUNYLEtBQUQ7QUFBQSxTQUFXLElBQUlGLE9BQUosQ0FBWUUsS0FBWixDQUFYO0FBQUEsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy9naXRodWIvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wbGVtZW50YXRpb24gb2YgaHR0cHM6Ly9hcml5YS5pby8yMDEzLzExL2phdmFzY3JpcHQta2luZXRpYy1zY3JvbGxpbmctcGFydC0yXG5pbXBvcnQgeyBBY3Rpb24sIHRpbWVTaW5jZUxhc3RGcmFtZSB9IGZyb20gJ3BvcG1vdGlvbic7XG5cbmNsYXNzIEluZXJ0aWEgZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHZlbG9jaXR5OiAwLFxuICAgIGZyb206IDAsXG4gICAgcG93ZXI6IDAuOCxcbiAgICB0aW1lQ29uc3RhbnQ6IDM1MCxcbiAgICBhdXRvU3RvcERlbHRhOiAwLjVcbiAgfTtcblxuICBvblN0YXJ0KCkge1xuICAgIGNvbnN0IHsgdmVsb2NpdHksIHBvd2VyLCBtb2RpZnlUYXJnZXQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLmFtcGxpdHVkZSA9IHBvd2VyICogdmVsb2NpdHk7XG4gICAgdGhpcy50YXJnZXQgPSBNYXRoLnJvdW5kKHRoaXMuY3VycmVudCArIHRoaXMuYW1wbGl0dWRlKTtcbiAgICB0aGlzLmVsYXBzZWQgPSAwO1xuXG4gICAgaWYgKG1vZGlmeVRhcmdldCkge1xuICAgICAgdGhpcy50YXJnZXQgPSBtb2RpZnlUYXJnZXQodGhpcy50YXJnZXQpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGF1dG9TdG9wRGVsdGEsIHRpbWVDb25zdGFudCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuZWxhcHNlZCArPSB0aW1lU2luY2VMYXN0RnJhbWUoKTtcbiAgICBjb25zdCBkZWx0YSA9IC10aGlzLmFtcGxpdHVkZSAqIE1hdGguZXhwKC10aGlzLmVsYXBzZWQgLyB0aW1lQ29uc3RhbnQpO1xuICAgIGNvbnN0IGlzTW92aW5nID0gKGRlbHRhID4gYXV0b1N0b3BEZWx0YSB8fCBkZWx0YSA8IC1hdXRvU3RvcERlbHRhKTtcbiAgICBpZiAoIWlzTW92aW5nKSB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgIHJldHVybiBpc01vdmluZyA/IHRoaXMudGFyZ2V0ICsgZGVsdGEgOiB0aGlzLnRhcmdldDtcbiAgfVxuXG4gIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IG5ldyBJbmVydGlhKHByb3BzKTtcbiJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BvcG1vdGlvbi1zY3JvbGwvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNjcm9sbFJlbmRlcmVyIiwiZ2V0Iiwia2V5Iiwic3RhdGUiLCJ1bmRlZmluZWQiLCJFbGVtZW50U2Nyb2xsIiwib25SZW5kZXIiLCJlbGVtZW50IiwicHJvcHMiLCJ0b3AiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsIm9uUmVhZCIsIlZpZXdwb3J0U2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsVG8iLCJwYWdlWU9mZnNldCIsInBhZ2VYT2Zmc2V0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7O0lBRU1BLGM7Ozs7Ozs7OzsyQkFDSkMsRyxnQkFBSUMsRyxFQUFLO0FBQ1A7QUFDQSxTQUFLQyxLQUFMLENBQVdELEdBQVgsSUFBa0JFLFNBQWxCO0FBQ0EsV0FBTyxvQkFBTUgsR0FBTixZQUFVQyxHQUFWLENBQVA7QUFDRCxHOzs7OztJQUdHRyxhOzs7Ozs7Ozs7MEJBQ0pDLFEsdUJBQVc7QUFBQSxRQUNEQyxPQURDLEdBQ1csS0FBS0MsS0FEaEIsQ0FDREQsT0FEQztBQUFBLGlCQUVhLEtBQUtKLEtBRmxCO0FBQUEsUUFFRE0sR0FGQyxVQUVEQSxHQUZDO0FBQUEsUUFFSUMsSUFGSixVQUVJQSxJQUZKOztBQUdUSCxZQUFRSSxVQUFSLEdBQXFCRCxJQUFyQjtBQUNBSCxZQUFRSyxTQUFSLEdBQW9CSCxHQUFwQjtBQUNELEc7OzBCQUVESSxNLHFCQUFvQjtBQUFBLFFBQWJYLEdBQWEsdUVBQVAsS0FBTztBQUFBLFFBQ1ZLLE9BRFUsR0FDRSxLQUFLQyxLQURQLENBQ1ZELE9BRFU7O0FBRWxCLFdBQVFMLFFBQVEsS0FBVCxHQUFrQkssUUFBUUssU0FBMUIsR0FBc0NMLFFBQVFJLFVBQXJEO0FBQ0QsRzs7O0VBWHlCWCxjOztJQWN0QmMsYzs7Ozs7Ozs7OzJCQUNKUixRLHVCQUFXO0FBQUEsa0JBQ2EsS0FBS0gsS0FEbEI7QUFBQSxRQUNETSxHQURDLFdBQ0RBLEdBREM7QUFBQSxRQUNJQyxJQURKLFdBQ0lBLElBREo7O0FBRVQsUUFBSSxPQUFPSyxNQUFQLEtBQWtCWCxTQUF0QixFQUFpQ1csT0FBT0MsUUFBUCxDQUFnQk4sSUFBaEIsRUFBc0JELEdBQXRCO0FBQ2xDLEc7OzJCQUVESSxNLG1CQUFPWCxHLEVBQUs7QUFDVixRQUFJLE9BQU9hLE1BQVAsS0FBa0JYLFNBQXRCLEVBQWlDLE9BQU8sQ0FBUDtBQUNqQyxXQUFRRixRQUFRLEtBQVQsR0FBa0JhLE9BQU9FLFdBQXpCLEdBQXVDRixPQUFPRyxXQUFyRDtBQUNELEc7OztFQVQwQmxCLGM7O2tCQVlkLFVBQUNPLE9BQUQ7QUFBQSxTQUFhQSxVQUFVLElBQUlGLGFBQUosQ0FBa0IsRUFBRUUsZ0JBQUYsRUFBbEIsQ0FBVixHQUEyQyxJQUFJTyxjQUFKLEVBQXhEO0FBQUEsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy9naXRodWIvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICdwb3Btb3Rpb24nO1xuXG5jbGFzcyBTY3JvbGxSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0KGtleSkge1xuICAgIC8vIEJyZWFrIHRoZSBjYWNoZSBhcyBzY3JvbGwgY2FuIGJlIHVwZGF0ZWQgYnkgdGhlIHVzZXJcbiAgICB0aGlzLnN0YXRlW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICB9XG59XG5cbmNsYXNzIEVsZW1lbnRTY3JvbGwgZXh0ZW5kcyBTY3JvbGxSZW5kZXJlciB7XG4gIG9uUmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdG9wO1xuICB9XG5cbiAgb25SZWFkKGtleSA9ICd0b3AnKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoa2V5ID09PSAndG9wJykgPyBlbGVtZW50LnNjcm9sbFRvcCA6IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgfVxufVxuXG5jbGFzcyBWaWV3cG9ydFNjcm9sbCBleHRlbmRzIFNjcm9sbFJlbmRlcmVyIHtcbiAgb25SZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZCkgd2luZG93LnNjcm9sbFRvKGxlZnQsIHRvcCk7XG4gIH1cblxuICBvblJlYWQoa2V5KSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IHVuZGVmaW5lZCkgcmV0dXJuIDA7XG4gICAgcmV0dXJuIChrZXkgPT09ICd0b3AnKSA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4gZWxlbWVudCA/IG5ldyBFbGVtZW50U2Nyb2xsKHsgZWxlbWVudCB9KSA6IG5ldyBWaWV3cG9ydFNjcm9sbCgpO1xuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BvcG1vdGlvbi1zcGlubmFibGUvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInNwaW5uYWJsZSIsImFuZ2xlIiwibm9kZSIsImluaXRpYWxSb3RhdGlvbiIsImZyaWN0aW9uIiwidHJhbnNmb3JtU3BpbiIsIm9uU3BpbiIsInJlbmRlcmVyIiwibm9kZVJvdGF0aW9uIiwidiIsImN1cnJlbnQiLCJzZXQiLCJzdGFydFRyYWNraW5nIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9pbnRlckFuZ2xlIiwidHJhbnNmb3JtIiwibm9kZVBvcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm5vZGVDZW50ZXIiLCJ4IiwibGVmdCIsIndpZHRoIiwieSIsInRvcCIsImhlaWdodCIsImFuZ2xlRnJvbUNlbnRlciIsInN0YXJ0IiwiZnJvbSIsImdldCIsIm9uVXBkYXRlIiwib25TdG9wIiwic3RvcCIsInN0b3BUcmFja2luZyIsInZlbG9jaXR5IiwiZ2V0VmVsb2NpdHkiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsImRvY3VtZW50Il0sIm1hcHBpbmdzIjoiOzs7a0JBVXdCQSxTOztBQVZ4Qjs7SUFRUUMsSyxtQkFBQUEsSztBQUVPLFNBQVNELFNBQVQsQ0FBbUJFLElBQW5CLFFBS1o7QUFBQSxrQ0FKREMsZUFJQztBQUFBLE1BSkRBLGVBSUMsd0NBSmlCLENBSWpCO0FBQUEsMkJBSERDLFFBR0M7QUFBQSxNQUhEQSxRQUdDLGlDQUhVLEdBR1Y7QUFBQSxNQUZEQyxhQUVDLFFBRkRBLGFBRUM7QUFBQSxNQUREQyxNQUNDLFFBRERBLE1BQ0M7O0FBQ0QsTUFBTUMsV0FBVyxvQkFBSUwsSUFBSixDQUFqQjtBQUNBLE1BQU1NLGVBQWUsc0JBQU1MLGVBQU4sRUFBdUIsVUFBQ00sQ0FBRCxFQUFPO0FBQ2pELFFBQU1DLFVBQVVMLGdCQUFnQkEsY0FBY0ksQ0FBZCxDQUFoQixHQUFtQ0EsQ0FBbkQ7QUFDQSxRQUFJSCxNQUFKLEVBQVlBLE9BQU9JLE9BQVA7QUFDWkgsYUFBU0ksR0FBVCxDQUFhLFFBQWIsRUFBdUJELE9BQXZCO0FBQ0QsR0FKb0IsQ0FBckI7O0FBTUEsV0FBU0UsYUFBVCxDQUF1QkMsQ0FBdkIsRUFBMEI7QUFDeEJBLE1BQUVDLGNBQUY7QUFDQSxRQUFNQyxlQUFlLHdCQUFRRixDQUFSLEVBQVc7QUFDOUJHLGlCQUFXLG1CQUFDUCxDQUFELEVBQU87QUFDaEIsWUFBTVEsVUFBVWYsS0FBS2dCLHFCQUFMLEVBQWhCO0FBQ0EsWUFBTUMsYUFBYTtBQUNqQkMsYUFBR0gsUUFBUUksSUFBUixHQUFnQkosUUFBUUssS0FBUixHQUFnQixDQURsQjtBQUVqQkMsYUFBR04sUUFBUU8sR0FBUixHQUFlUCxRQUFRUSxNQUFSLEdBQWlCO0FBRmxCLFNBQW5CO0FBSUEsWUFBTUMsa0JBQWtCekIsTUFBTWtCLFVBQU4sRUFBa0JWLENBQWxCLENBQXhCOztBQUVBLGVBQU9pQixlQUFQO0FBQ0Q7QUFWNkIsS0FBWCxFQVdsQkMsS0FYa0IsRUFBckI7O0FBYUEsZ0NBQVlaLFlBQVosRUFBMEI7QUFDeEJhLFlBQU1wQixhQUFhcUIsR0FBYixFQURrQjtBQUV4QkMsZ0JBQVV0QixZQUZjO0FBR3hCdUIsY0FBUTtBQUFBLGVBQU1oQixhQUFhaUIsSUFBYixFQUFOO0FBQUE7QUFIZ0IsS0FBMUIsRUFJR0wsS0FKSDtBQUtEOztBQUVELFdBQVNNLFlBQVQsR0FBd0I7QUFDdEIsNEJBQVE7QUFDTkwsWUFBTXBCLGFBQWFxQixHQUFiLEVBREE7QUFFTkssZ0JBQVUxQixhQUFhMkIsV0FBYixFQUZKO0FBR04vQix3QkFITTtBQUlOMEIsZ0JBQVV0QjtBQUpKLEtBQVIsRUFLR21CLEtBTEg7QUFNRDs7QUFFRHpCLE9BQUtrQyxnQkFBTCxDQUFzQixXQUF0QixFQUFtQ3hCLGFBQW5DO0FBQ0FWLE9BQUtrQyxnQkFBTCxDQUFzQixZQUF0QixFQUFvQ3hCLGFBQXBDLEVBQW1ELEVBQUV5QixTQUFTLEtBQVgsRUFBbkQ7QUFDQUMsV0FBU0YsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNILFlBQXJDO0FBQ0FLLFdBQVNGLGdCQUFULENBQTBCLFVBQTFCLEVBQXNDSCxZQUF0Qzs7QUFFQSxTQUFPekIsWUFBUDtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzL2dpdGh1Yi9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBwb2ludGVyLFxuICBjYWxjLFxuICB2YWx1ZSxcbiAgY3NzLFxuICBwaHlzaWNzLFxuICB0cmFja09mZnNldFxufSBmcm9tICdwb3Btb3Rpb24nO1xuY29uc3QgeyBhbmdsZSB9ID0gY2FsYztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3Bpbm5hYmxlKG5vZGUsIHtcbiAgaW5pdGlhbFJvdGF0aW9uID0gMCxcbiAgZnJpY3Rpb24gPSAwLjQsXG4gIHRyYW5zZm9ybVNwaW4sXG4gIG9uU3BpblxufSkge1xuICBjb25zdCByZW5kZXJlciA9IGNzcyhub2RlKTtcbiAgY29uc3Qgbm9kZVJvdGF0aW9uID0gdmFsdWUoaW5pdGlhbFJvdGF0aW9uLCAodikgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0cmFuc2Zvcm1TcGluID8gdHJhbnNmb3JtU3Bpbih2KSA6IHY7XG4gICAgaWYgKG9uU3Bpbikgb25TcGluKGN1cnJlbnQpO1xuICAgIHJlbmRlcmVyLnNldCgncm90YXRlJywgY3VycmVudCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0VHJhY2tpbmcoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwb2ludGVyQW5nbGUgPSBwb2ludGVyKGUsIHtcbiAgICAgIHRyYW5zZm9ybTogKHYpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZVBvcyA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IG5vZGVDZW50ZXIgPSB7XG4gICAgICAgICAgeDogbm9kZVBvcy5sZWZ0ICsgKG5vZGVQb3Mud2lkdGggLyAyKSxcbiAgICAgICAgICB5OiBub2RlUG9zLnRvcCArIChub2RlUG9zLmhlaWdodCAvIDIpXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGFuZ2xlRnJvbUNlbnRlciA9IGFuZ2xlKG5vZGVDZW50ZXIsIHYpO1xuXG4gICAgICAgIHJldHVybiBhbmdsZUZyb21DZW50ZXI7XG4gICAgICB9XG4gICAgfSkuc3RhcnQoKTtcblxuICAgIHRyYWNrT2Zmc2V0KHBvaW50ZXJBbmdsZSwge1xuICAgICAgZnJvbTogbm9kZVJvdGF0aW9uLmdldCgpLFxuICAgICAgb25VcGRhdGU6IG5vZGVSb3RhdGlvbixcbiAgICAgIG9uU3RvcDogKCkgPT4gcG9pbnRlckFuZ2xlLnN0b3AoKVxuICAgIH0pLnN0YXJ0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wVHJhY2tpbmcoKSB7XG4gICAgcGh5c2ljcyh7XG4gICAgICBmcm9tOiBub2RlUm90YXRpb24uZ2V0KCksXG4gICAgICB2ZWxvY2l0eTogbm9kZVJvdGF0aW9uLmdldFZlbG9jaXR5KCksXG4gICAgICBmcmljdGlvbixcbiAgICAgIG9uVXBkYXRlOiBub2RlUm90YXRpb25cbiAgICB9KS5zdGFydCgpO1xuICB9XG5cbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzdGFydFRyYWNraW5nKTtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc3RhcnRUcmFja2luZywgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN0b3BUcmFja2luZyk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgc3RvcFRyYWNraW5nKTtcblxuICByZXR1cm4gbm9kZVJvdGF0aW9uO1xufVxuIl19

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

  var markers = sequence.reduce(flattenArraysToSequence, [])
  // Convert sequence to relative timings
  .reduce(function (acc, segment) {
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
  }, [])
  // Split tweens by target, and convert absolute markers to progress markers
  .reduce(function (acc, marker) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL3BvcG1vdGlvbi10aW1lbGluZS9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsidGltZWxpbmUiLCJnZXRQcm9ncmVzc0Zyb21WYWx1ZSIsImNsYW1wIiwiY2xhbXBQcm9ncmVzcyIsImZsYXR0ZW5BcnJheXNUb1NlcXVlbmNlIiwic2VxdWVuY2UiLCJzZWdtZW50IiwiY29uc3RydWN0b3IiLCJBcnJheSIsImxhc3RBcmciLCJsZW5ndGgiLCJpc1N0YWdnZXJlZCIsInR3ZWVucyIsInNsaWNlIiwibnVtVHdlZW5zIiwib2Zmc2V0IiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwicHVzaCIsImR1cmF0aW9uIiwiZ2V0UHJvcCIsInByb3BzIiwicGxheWhlYWQiLCJtYXJrZXJzIiwicmVkdWNlIiwiYWNjIiwidHlwZU9mU2VnbWVudCIsInBhcnNlRmxvYXQiLCJ0byIsInR3ZWVuIiwiZnJvbSIsIk1hdGgiLCJtYXgiLCJtYXJrZXIiLCJvdXRwdXQiLCJ0YXJnZXRJbmRleCIsInRhcmdldHMiLCJpbmRleE9mIiwiZnJhZ21lbnRzIiwiZnJhZ21lbnRMaXN0IiwiZ2V0IiwiaW5pdGlhbFZhbHVlcyIsIm51bU1hcmtlcnMiLCJlYXNlIiwibGluZWFyIiwib25VcGRhdGUiLCJ2IiwibnVtRnJhZ21lbnRzIiwiZm91bmRBY3RpdmVGcmFnbWVudCIsInByZXZQcm9ncmVzc0Rpc3RhbmNlIiwiSW5maW5pdHkiLCJjbG9zZXN0SW5kZXgiLCJjbG9zZXN0UHJvZ3Jlc3MiLCJ0d2Vlbkhhc1N0YXJ0ZWQiLCJqIiwiZnJhZ21lbnQiLCJwcm9ncmVzcyIsInNlZWsiLCJkaXN0YW5jZSIsImFicyIsInRhcmdldCIsInNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBa0N3QkEsUTs7QUFsQ3hCOztJQUNRQyxvQixtQkFBQUEsb0I7SUFDQUMsSyx3QkFBQUEsSzs7QUFDUixJQUFNQyxnQkFBZ0JELE1BQU0sQ0FBTixFQUFTLENBQVQsQ0FBdEI7O0FBRUE7Ozs7O0FBS0Es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UixrQ0FBc0IsSUFBdEI7QUFDQU8scUJBQVMxQixLQUFULENBQWU0QixJQUFmLENBQW9CRCxRQUFwQjtBQUNELFdBSEQsTUFHTztBQUNMLGdCQUFJQSxXQUFXLENBQWYsRUFBa0I7QUFDaEJILGdDQUFrQixJQUFsQjs7QUFFQSxrQkFBTUssV0FBWUYsV0FBVyxDQUFaLEdBQWlCekIsS0FBSzRCLEdBQUwsQ0FBU0gsUUFBVCxDQUFqQixHQUFzQ0EsV0FBVyxDQUFsRTs7QUFFQSxrQkFBSUUsV0FBV1Qsb0JBQWYsRUFBcUM7QUFDbkNBLHVDQUF1QlMsUUFBdkI7QUFDQU4sa0NBQWtCbEQsY0FBY3NELFFBQWQsQ0FBbEI7QUFDQUwsK0JBQWVHLENBQWY7QUFDRDtBQUNGO0FBQ0Y7O0FBRURBO0FBQ0Q7O0FBRUQsWUFBSSxDQUFDTixtQkFBTCxFQUEwQjtBQUN4QixjQUFNWSxTQUFTckMsUUFBUWEsT0FBUixDQUFnQm5CLENBQWhCLENBQWY7O0FBRUEsY0FBSW9DLG1CQUFtQixDQUFDTyxPQUFPQyxHQUEvQixFQUFvQztBQUNsQyxnQkFBSXZCLFVBQVVhLFlBQVYsRUFBd0J0QixLQUF4QixDQUE4QjJCLFFBQTlCLEtBQTJDSixlQUEvQyxFQUFnRWQsVUFBVWEsWUFBVixFQUF3QnRCLEtBQXhCLENBQThCNEIsSUFBOUIsQ0FBbUNMLGVBQW5DO0FBQ2pFLFdBRkQsTUFFTyxJQUFJLENBQUNDLGVBQUQsSUFBb0JPLE9BQU9DLEdBQS9CLEVBQW9DO0FBQ3pDLGdCQUFJRCxPQUFPcEIsR0FBUCxPQUFpQmpCLFFBQVFrQixhQUFSLENBQXNCeEIsQ0FBdEIsQ0FBckIsRUFBK0MyQyxPQUFPQyxHQUFQLENBQVd0QyxRQUFRa0IsYUFBUixDQUFzQnhCLENBQXRCLENBQVg7QUFDaEQ7QUFDRjtBQUNGO0FBQ0Y7QUFuREksS0FBUDtBQXFERCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy9naXRodWIvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FsYywgdHdlZW4sIGVhc2luZywgdHJhbnNmb3JtIH0gZnJvbSAncG9wbW90aW9uJztcbmNvbnN0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgfSA9IGNhbGM7XG5jb25zdCB7IGNsYW1wIH0gPSB0cmFuc2Zvcm07XG5jb25zdCBjbGFtcFByb2dyZXNzID0gY2xhbXAoMCwgMSk7XG5cbi8qXG4gIEZsYXR0ZW4gYXJyYXlzLCB3aGljaCBkZW5vdGUgcGFyYWxsZWwgb3Igc3RhZ2dlcmVkIHR3ZWVucyxcbiAgaW50byBhIGZsYXQgc2V0IG9mIGluc3RydWN0aW9ucyB3aGljaCByZXNldCB0aGUgcGxheWhlYWRcbiAgYWZ0ZXIgZWFjaCB0d2Vlbi5cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbkFycmF5c1RvU2VxdWVuY2Uoc2VxdWVuY2UsIHNlZ21lbnQpIHtcbiAgaWYgKHNlZ21lbnQuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgY29uc3QgbGFzdEFyZyA9IHNlZ21lbnRbc2VnbWVudC5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBpc1N0YWdnZXJlZCA9IHR5cGVvZiBsYXN0QXJnID09PSAnbnVtYmVyJztcbiAgICBjb25zdCB0d2VlbnMgPSBpc1N0YWdnZXJlZCA/IHNlZ21lbnQuc2xpY2UoMCwgLTEpIDogc2VnbWVudDtcbiAgICBjb25zdCBudW1Ud2VlbnMgPSB0d2VlbnMubGVuZ3RoO1xuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgdHdlZW5zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgIHNlcXVlbmNlLnB1c2goaXRlbSk7XG5cbiAgICAgIGlmIChpICE9PSBudW1Ud2VlbnMgLSAxKSB7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gaXRlbS5nZXRQcm9wKCdkdXJhdGlvbicpO1xuICAgICAgICBvZmZzZXQgKz0gaXNTdGFnZ2VyZWQgPyBsYXN0QXJnIDogMDtcbiAgICAgICAgc2VxdWVuY2UucHVzaChgLSR7ZHVyYXRpb24gLSBvZmZzZXR9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc2VxdWVuY2UucHVzaChzZWdtZW50KTtcbiAgfVxuXG4gIHJldHVybiBzZXF1ZW5jZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZWxpbmUoc2VxdWVuY2UsIHByb3BzKSB7XG4gIGxldCBwbGF5aGVhZCA9IDA7XG4gIGxldCBkdXJhdGlvbiA9IDA7XG5cbiAgY29uc3QgbWFya2VycyA9IHNlcXVlbmNlXG4gICAgLnJlZHVjZShmbGF0dGVuQXJyYXlzVG9TZXF1ZW5jZSwgW10pXG4gICAgLy8gQ29udmVydCBzZXF1ZW5jZSB0byByZWxhdGl2ZSB0aW1pbmdzXG4gICAgLnJlZHVjZSgoYWNjLCBzZWdtZW50KSA9PiB7XG4gICAgICBjb25zdCB0eXBlT2ZTZWdtZW50ID0gdHlwZW9mIHNlZ21lbnQ7XG5cbiAgICAgIC8vIElmIHJlbGF0aXZlIHRpbWVzdGFtcFxuICAgICAgaWYgKHR5cGVPZlNlZ21lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHBsYXloZWFkICs9IHBhcnNlRmxvYXQoc2VnbWVudCk7XG5cbiAgICAgIC8vIElmIGFic29sdXRlIHRpbWVzdGFtcFxuICAgICAgfSBlbHNlIGlmICh0eXBlT2ZTZWdtZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICBwbGF5aGVhZCA9IHNlZ21lbnQ7XG5cbiAgICAgIC8vIE9yIGlmIHR3ZWVuLCBhZGQgbWFya2VyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0byA9IHBsYXloZWFkICsgc2VnbWVudC5nZXRQcm9wKCdkdXJhdGlvbicpO1xuXG4gICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICB0d2Vlbjogc2VnbWVudCxcbiAgICAgICAgICBmcm9tOiBwbGF5aGVhZCxcbiAgICAgICAgICB0b1xuICAgICAgICB9KTtcblxuICAgICAgICBwbGF5aGVhZCA9IHRvO1xuICAgICAgICBkdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCB0byk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pXG4gICAgLy8gU3BsaXQgdHdlZW5zIGJ5IHRhcmdldCwgYW5kIGNvbnZlcnQgYWJzb2x1dGUgbWFya2VycyB0byBwcm9ncmVzcyBtYXJrZXJzXG4gICAgLnJlZHVjZSgoYWNjLCBtYXJrZXIpID0+IHtcbiAgICAgIGNvbnN0IG91dHB1dCA9IG1hcmtlci50d2Vlbi5nZXRQcm9wKCdvblVwZGF0ZScpO1xuICAgICAgbGV0IHRhcmdldEluZGV4ID0gYWNjLnRhcmdldHMuaW5kZXhPZihvdXRwdXQpO1xuXG4gICAgICBpZiAodGFyZ2V0SW5kZXggPT09IC0xKSB7XG4gICAgICAgIGFjYy50YXJnZXRzLnB1c2gob3V0cHV0KTtcbiAgICAgICAgYWNjLmZyYWdtZW50cy5wdXNoKFtdKTtcbiAgICAgICAgdGFyZ2V0SW5kZXggPSBhY2MuZnJhZ21lbnRzLmxlbmd0aCAtIDE7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZyYWdtZW50TGlzdCA9IGFjYy5mcmFnbWVudHNbdGFyZ2V0SW5kZXhdO1xuXG4gICAgICBmcmFnbWVudExpc3QucHVzaCh7XG4gICAgICAgIHR3ZWVuOiBtYXJrZXIudHdlZW4sXG4gICAgICAgIGZyb206IGdldFByb2dyZXNzRnJvbVZhbHVlKDAsIGR1cmF0aW9uLCBtYXJrZXIuZnJvbSksXG4gICAgICAgIHRvOiBnZXRQcm9ncmVzc0Zyb21WYWx1ZSgwLCBkdXJhdGlvbiwgbWFya2VyLnRvKVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChvdXRwdXQuZ2V0KSB7XG4gICAgICAgIGFjYy5pbml0aWFsVmFsdWVzW3RhcmdldEluZGV4XSA9IG91dHB1dC5nZXQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7IGluaXRpYWxWYWx1ZXM6IFtdLCB0YXJnZXRzOiBbXSwgZnJhZ21lbnRzOiBbXSB9KTtcblxuICBjb25zdCBudW1NYXJrZXJzID0gbWFya2Vycy5mcmFnbWVudHMubGVuZ3RoO1xuXG4gIHJldHVybiB0d2Vlbih7XG4gICAgZHVyYXRpb24sXG4gICAgZWFzZTogZWFzaW5nLmxpbmVhcixcbiAgICAuLi5wcm9wcyxcbiAgICBvblVwZGF0ZTogKHYpID0+IHtcbiAgICAgIC8vIEZpcnN0IGl0ZXJhdGUgb3ZlciBvdXRwdXQgdGFyZ2V0cywgYW5kIHRyeSB0byBmaW5kIGFuIGFjdGl2ZSB0d2VlblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1NYXJrZXJzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZnJhZ21lbnRzID0gbWFya2Vycy5mcmFnbWVudHNbaV07XG4gICAgICAgIGNvbnN0IG51bUZyYWdtZW50cyA9IGZyYWdtZW50cy5sZW5ndGg7XG4gICAgICAgIGxldCBmb3VuZEFjdGl2ZUZyYWdtZW50ID0gZmFsc2U7XG4gICAgICAgIGxldCBwcmV2UHJvZ3Jlc3NEaXN0YW5jZSA9IEluZmluaXR5O1xuICAgICAgICBsZXQgY2xvc2VzdEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGNsb3Nlc3RQcm9ncmVzcyA9IDA7XG4gICAgICAgIGxldCB0d2Vlbkhhc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGogPSAwO1xuXG4gICAgICAgIHdoaWxlICghZm91bmRBY3RpdmVGcmFnbWVudCAmJiBqIDwgbnVtRnJhZ21lbnRzKSB7XG4gICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBmcmFnbWVudHNbal07XG4gICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBnZXRQcm9ncmVzc0Zyb21WYWx1ZShmcmFnbWVudC5mcm9tLCBmcmFnbWVudC50bywgdik7XG5cbiAgICAgICAgICAvLyBGb3VuZCBhbiBhY3RpdmUgZnJhZ21lbnQsIGV4ZWN1dGVcbiAgICAgICAgICBpZiAocHJvZ3Jlc3MgPj0gMCAmJiBwcm9ncmVzcyA8PSAxKSB7XG4gICAgICAgICAgICBmb3VuZEFjdGl2ZUZyYWdtZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZyYWdtZW50LnR3ZWVuLnNlZWsocHJvZ3Jlc3MpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPiAxKSB7XG4gICAgICAgICAgICAgIHR3ZWVuSGFzU3RhcnRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAocHJvZ3Jlc3MgPCAwKSA/IE1hdGguYWJzKHByb2dyZXNzKSA6IHByb2dyZXNzIC0gMTtcblxuICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBwcmV2UHJvZ3Jlc3NEaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHByZXZQcm9ncmVzc0Rpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgY2xvc2VzdFByb2dyZXNzID0gY2xhbXBQcm9ncmVzcyhwcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgY2xvc2VzdEluZGV4ID0gajtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGorKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZm91bmRBY3RpdmVGcmFnbWVudCkge1xuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IG1hcmtlcnMudGFyZ2V0c1tpXTtcblxuICAgICAgICAgIGlmICh0d2Vlbkhhc1N0YXJ0ZWQgfHwgIXRhcmdldC5zZXQpIHtcbiAgICAgICAgICAgIGlmIChmcmFnbWVudHNbY2xvc2VzdEluZGV4XS50d2Vlbi5wcm9ncmVzcyAhPT0gY2xvc2VzdFByb2dyZXNzKSBmcmFnbWVudHNbY2xvc2VzdEluZGV4XS50d2Vlbi5zZWVrKGNsb3Nlc3RQcm9ncmVzcyk7XG4gICAgICAgICAgfSBlbHNlIGlmICghdHdlZW5IYXNTdGFydGVkICYmIHRhcmdldC5zZXQpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQuZ2V0KCkgIT09IG1hcmtlcnMuaW5pdGlhbFZhbHVlc1tpXSkgdGFyZ2V0LnNldChtYXJrZXJzLmluaXRpYWxWYWx1ZXNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXX0=

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWFjY2I1YmFmNzQ5NDU3OWIyYjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvdHJhbnNmb3JtLXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9lYXNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY29tcG9zaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BhcmFsbGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3ZhbHVlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvcGFyc2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy92YWx1ZS10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy9wcmVmaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL29uLW5leHQtZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9jcmVhdGUtcmVuZGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY29sb3ItdHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdG91Y2hlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90cmFjay1vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvc3RhZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9zcHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xvYmFsLXhsLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3BvcG1vdGlvbi1kcmFnZ2FibGUvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3BvcG1vdGlvbi1pbmVydGlhL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9wb3Btb3Rpb24tc2Nyb2xsL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9wb3Btb3Rpb24tc3Bpbm5hYmxlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9wb3Bt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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEJBQTRCOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSwyQ0FBMkMsY0FBYywrbVQ7Ozs7Ozs7QUNsTXpEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxjQUFjLHVnVzs7Ozs7OztBQ2pOekQ7O0FBRUE7QUFDQTs7QUFFQSxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QixZQUFZO0FBQ1o7QUFDQTtBQUNBLHlFQUF5RSxhQUFhO0FBQ3RGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBGQUEwRixlQUFlO0FBQ3pHO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEIsWUFBWSxNQUFNO0FBQ2xCLFlBQVksU0FBUztBQUNyQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFVBQVUsaUJBQWlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FB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Q1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsMkNBQTJDLGNBQWMsK3RYIiwiZmlsZSI6InBvcG1vdGlvbi54bC5taW4uNy43LjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWFjY2I1YmFmNzQ5NDU3OWIyYjUiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5zcGxpdENvbG9yVmFsdWVzID0gc3BsaXRDb2xvclZhbHVlcztcbnZhciB2YXJUeXBlID0gZnVuY3Rpb24gdmFyVHlwZSh2YXJpYWJsZSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG59O1xuXG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjYW1lbFRvRGFzaCA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSBmdW5jdGlvbiBjYW1lbFRvRGFzaChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qXG4gIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gIFxuICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xudmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy5jdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbnZhciBzZXRET01BdHRycyA9IGV4cG9ydHMuc2V0RE9NQXR0cnMgPSBmdW5jdGlvbiBzZXRET01BdHRycyhlbGVtZW50LCBhdHRycykge1xuICBmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG4gIH1cbn07XG4vKlxuICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgXCJmb28sYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdENvbW1hRGVsaW1pdGVkID0gZnVuY3Rpb24gc3BsaXRDb21tYURlbGltaXRlZCh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBhbnkgYXJndW1lbnQgZm9yIGB0ZXJtYFxuICogYGNvbnRhaW5zKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xudmFyIGNvbnRhaW5zID0gZXhwb3J0cy5jb250YWlucyA9IGZ1bmN0aW9uIGNvbnRhaW5zKHRlcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSAhPT0gLTE7XG4gIH07XG59O1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIHRvIHNlZSBpZiBhbiBhcmd1bWVudCBpc1xuICogIHRoZSBmaXJzdCBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBgdGVybWBcbiAqIGBpc0ZpcnN0Q2hhcnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG52YXIgaXNGaXJzdENoYXJzID0gZXhwb3J0cy5pc0ZpcnN0Q2hhcnMgPSBmdW5jdGlvbiBpc0ZpcnN0Q2hhcnModGVybSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pID09PSAwO1xuICB9O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSB1bml0IHZhbHVlIHR5cGVcbiAqL1xudmFyIGNyZWF0ZVVuaXRUeXBlID0gZXhwb3J0cy5jcmVhdGVVbml0VHlwZSA9IGZ1bmN0aW9uIGNyZWF0ZVVuaXRUeXBlKHR5cGUsIHRyYW5zZm9ybSkge1xuICByZXR1cm4ge1xuICAgIHRlc3Q6IGNvbnRhaW5zKHR5cGUpLFxuICAgIHBhcnNlOiBwYXJzZUZsb2F0LFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gIH07XG59O1xuXG4vKlxuICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcbiAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG52YXIgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBzcGxpdCBjb2xvclxuICogdmFsdWVzIGZyb20gc3RyaW5nIGludG8gYW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcbiAqIGBtYXBBcnJheVRvT2JqZWN0KFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXSkoJ3JnYmEoMCwwLDApJylgXG4gKi9cbmZ1bmN0aW9uIHNwbGl0Q29sb3JWYWx1ZXModGVybXMpIHtcbiAgdmFyIG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICB2YXIgdmFsdWVzQXJyYXkgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHYpKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgdmFsdWVzW3Rlcm1zW2ldXSA9IHZhbHVlc0FycmF5W2ldICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KHZhbHVlc0FycmF5W2ldKSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcbn1cblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xudmFyIGlzQXJyYXkgPSBleHBvcnRzLmlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuICByZXR1cm4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG52YXIgaXNGdW5jID0gZXhwb3J0cy5pc0Z1bmMgPSBmdW5jdGlvbiBpc0Z1bmMob2JqKSB7XG4gIHJldHVybiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xudmFyIGlzTnVtID0gZXhwb3J0cy5pc051bSA9IGZ1bmN0aW9uIGlzTnVtKG51bSkge1xuICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbnZhciBpc09iaiA9IGV4cG9ydHMuaXNPYmogPSBmdW5jdGlvbiBpc09iaihvYmopIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvYmopKSA9PT0gJ29iamVjdCc7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xudmFyIGlzU3RyaW5nID0gZXhwb3J0cy5pc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59O1xuXG52YXIgaXNIZXggPSBleHBvcnRzLmlzSGV4ID0gaXNGaXJzdENoYXJzKCcjJyk7XG52YXIgaXNSZ2IgPSBleHBvcnRzLmlzUmdiID0gaXNGaXJzdENoYXJzKCdyZ2InKTtcbnZhciBpc0hzbCA9IGV4cG9ydHMuaXNIc2wgPSBpc0ZpcnN0Q2hhcnMoJ2hzbCcpO1xudmFyIGlzQ29sb3IgPSBleHBvcnRzLmlzQ29sb3IgPSBmdW5jdGlvbiBpc0NvbG9yKHYpIHtcbiAgcmV0dXJuIGlzSGV4KHYpIHx8IGlzUmdiKHYpIHx8IGlzSHNsKHYpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRYUnBiSE11YW5NaVhTd2libUZ0WlhNaU9sc2ljM0JzYVhSRGIyeHZjbFpoYkhWbGN5SXNJblpoY2xSNWNHVWlMQ0oyWVhKcFlXSnNaU0lzSWs5aWFtVmpkQ0lzSW5CeWIzUnZkSGx3WlNJc0luUnZVM1J5YVc1bklpd2lZMkZzYkNJc0luTnNhV05sSWl3aVEwRk5SVXhmUTBGVFJWOVFRVlJVUlZKT0lpd2lVa1ZRVEVGRFJWOVVSVTFRVEVGVVJTSXNJa2hCVTE5UVJWSkdUMUpOUVU1RFJWOU9UMWNpTENKd1pYSm1iM0p0WVc1alpTSXNJbTV2ZHlJc0ltTmhiV1ZzVkc5RVlYTm9JaXdpYzNSeWFXNW5JaXdpY21Wd2JHRmpaU0lzSW5SdlRHOTNaWEpEWVhObElpd2lZM1Z5Y21WdWRGUnBiV1VpTENKRVlYUmxJaXdpWjJWMFZHbHRaU0lzSW5ObGRFUlBUVUYwZEhKeklpd2laV3hsYldWdWRDSXNJbUYwZEhKeklpd2lhMlY1SWl3aWFHRnpUM2R1VUhKdmNHVnlkSGtpTENKelpYUkJkSFJ5YVdKMWRHVWlMQ0p6Y0d4cGRFTnZiVzFoUkdWc2FXMXBkR1ZrSWl3aWRtRnNkV1VpTENKcGMxTjBjbWx1WnlJc0luTndiR2wwSWl3aVkyOXVkR0ZwYm5NaUxDSjBaWEp0SWl3aWRpSXNJbWx1WkdWNFQyWWlMQ0pwYzBacGNuTjBRMmhoY25NaUxDSmpjbVZoZEdWVmJtbDBWSGx3WlNJc0luUjVjR1VpTENKMGNtRnVjMlp2Y20waUxDSjBaWE4wSWl3aWNHRnljMlVpTENKd1lYSnpaVVpzYjJGMElpd2laMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY2lMQ0p6ZFdKemRISnBibWNpTENKc1lYTjBTVzVrWlhoUFppSXNJblJsY20xeklpd2liblZ0VkdWeWJYTWlMQ0pzWlc1bmRHZ2lMQ0oyWVd4MVpYTWlMQ0oyWVd4MVpYTkJjbkpoZVNJc0lta2lMQ0oxYm1SbFptbHVaV1FpTENKcGMwRnljbUY1SWl3aVlYSnlJaXdpYVhOR2RXNWpJaXdpYjJKcUlpd2lhWE5PZFcwaUxDSnVkVzBpTENKcGMwOWlhaUlzSW5OMGNpSXNJbWx6U0dWNElpd2lhWE5TWjJJaUxDSnBjMGh6YkNJc0ltbHpRMjlzYjNJaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dFJRVFpGWjBKQkxHZENMRWRCUVVGQkxHZENPMEZCTjBWb1FpeEpRVUZOUXl4VlFVRlZMRk5CUVZaQkxFOUJRVlVzUTBGQlEwTXNVVUZCUkR0QlFVRkJMRk5CUVdORExFOUJRVTlETEZOQlFWQXNRMEZCYVVKRExGRkJRV3BDTEVOQlFUQkNReXhKUVVFeFFpeERRVUVyUWtvc1VVRkJMMElzUlVGQmVVTkxMRXRCUVhwRExFTkJRU3RETEVOQlFTOURMRVZCUVd0RUxFTkJRVU1zUTBGQmJrUXNRMEZCWkR0QlFVRkJMRU5CUVdoQ096dEJRVVZCTEVsQlFVMURMSEZDUVVGeFFpeHBRa0ZCTTBJN1FVRkRRU3hKUVVGTlF5eHRRa0ZCYlVJc1QwRkJla0k3UVVGRFFTeEpRVUZOUXl4elFrRkJkVUlzVDBGQlQwTXNWMEZCVUN4TFFVRjFRaXhYUVVGMlFpeEpRVUZ6UTBFc1dVRkJXVU1zUjBGQkwwVTdPMEZCUlVFN096czdPenRCUVUxUExFbEJRVTFETEc5RFFVRmpMRk5CUVdSQkxGZEJRV01zUTBGQlEwTXNUVUZCUkR0QlFVRkJMRk5CUVZsQkxFOUJRVTlETEU5QlFWQXNRMEZCWlZBc2EwSkJRV1lzUlVGQmJVTkRMR2RDUVVGdVF5eEZRVUZ4UkU4c1YwRkJja1FzUlVGQldqdEJRVUZCTEVOQlFYQkNPenRCUVVWUU96czdPenRCUVV0UExFbEJRVTFETEc5RFFVRmpVQ3h6UWtGQmMwSTdRVUZCUVN4VFFVRk5ReXhaUVVGWlF5eEhRVUZhTEVWQlFVNDdRVUZCUVN4RFFVRjBRaXhIUVVGblJEdEJRVUZCTEZOQlFVMHNTVUZCU1Uwc1NVRkJTaXhIUVVGWFF5eFBRVUZZTEVWQlFVNDdRVUZCUVN4RFFVRndSVHM3UVVGRlFTeEpRVUZOUXl4dlEwRkJZeXhUUVVGa1FTeFhRVUZqTEVOQlFVTkRMRTlCUVVRc1JVRkJWVU1zUzBGQlZpeEZRVUZ2UWp0QlFVTTNReXhQUVVGTExFbEJRVWxETEVkQlFWUXNTVUZCWjBKRUxFdEJRV2hDTEVWQlFYVkNPMEZCUTNKQ0xGRkJRVWxCTEUxQlFVMUZMR05CUVU0c1EwRkJjVUpFTEVkQlFYSkNMRU5CUVVvc1JVRkJLMEk3UVVGRE4wSkdMR05CUVZGSkxGbEJRVklzUTBGQmNVSkdMRWRCUVhKQ0xFVkJRVEJDUkN4TlFVRk5ReXhIUVVGT0xFTkJRVEZDTzBGQlEwUTdRVUZEUmp0QlFVTkdMRU5CVGswN1FVRlBVRHM3T3pzN096czdRVUZSVHl4SlFVRk5SeXh2UkVGQmMwSXNVMEZCZEVKQkxHMUNRVUZ6UWl4RFFVRkRReXhMUVVGRU8wRkJRVUVzVTBGQlYwTXNVMEZCVTBRc1MwRkJWQ3hKUVVGclFrRXNUVUZCVFVVc1MwRkJUaXhEUVVGWkxFMUJRVm9zUTBGQmJFSXNSMEZCZDBNc1EwRkJRMFlzUzBGQlJDeERRVUZ1UkR0QlFVRkJMRU5CUVRWQ096dEJRVVZRT3pzN08wRkJTVThzU1VGQlRVY3NPRUpCUVZjc1UwRkJXRUVzVVVGQlZ5eERRVUZEUXl4SlFVRkVPMEZCUVVFc1UwRkJWU3hWUVVGRFF5eERRVUZFTEVWQlFVODdRVUZEZGtNc1YwRkJVVW9zVTBGQlUwY3NTVUZCVkN4TFFVRnJRa01zUlVGQlJVTXNUMEZCUml4RFFVRlZSaXhKUVVGV0xFMUJRVzlDTEVOQlFVTXNRMEZCTDBNN1FVRkRSQ3hIUVVaMVFqdEJRVUZCTEVOQlFXcENPenRCUVVsUU96czdPenRCUVV0UExFbEJRVTFITEhORFFVRmxMRk5CUVdaQkxGbEJRV1VzUTBGQlEwZ3NTVUZCUkR0QlFVRkJMRk5CUVZVc1ZVRkJRME1zUTBGQlJDeEZRVUZQTzBGQlF6TkRMRmRCUVZGS0xGTkJRVk5ITEVsQlFWUXNTMEZCYTBKRExFVkJRVVZETEU5QlFVWXNRMEZCVlVZc1NVRkJWaXhOUVVGdlFpeERRVUU1UXp0QlFVTkVMRWRCUmpKQ08wRkJRVUVzUTBGQmNrSTdPMEZCU1ZBN096dEJRVWRQTEVsQlFVMUpMREJEUVVGcFFpeFRRVUZxUWtFc1kwRkJhVUlzUTBGQlEwTXNTVUZCUkN4RlFVRlBReXhUUVVGUUxFVkJRWEZDTzBGQlEycEVMRk5CUVU4N1FVRkRURU1zVlVGQlRWSXNVMEZCVTAwc1NVRkJWQ3hEUVVSRU8wRkJSVXhITEZkQlFVOURMRlZCUmtZN1FVRkhURWc3UVVGSVN5eEhRVUZRTzBGQlMwUXNRMEZPVFRzN1FVRlJVRHM3T3p0QlFVbFBMRWxCUVUxSkxHdEZRVUUyUWl4VFFVRTNRa0VzTUVKQlFUWkNMRU5CUVVOa0xFdEJRVVE3UVVGQlFTeFRRVUZYUVN4TlFVRk5aU3hUUVVGT0xFTkJRV2RDWml4TlFVRk5UU3hQUVVGT0xFTkJRV01zUjBGQlpDeEpRVUZ4UWl4RFFVRnlReXhGUVVGM1EwNHNUVUZCVFdkQ0xGZEJRVTRzUTBGQmEwSXNSMEZCYkVJc1EwRkJlRU1zUTBGQldEdEJRVUZCTEVOQlFXNURPenRCUVVWUU96czdPenRCUVV0UExGTkJRVk16UXl4blFrRkJWQ3hEUVVFd1FqUkRMRXRCUVRGQ0xFVkJRV2xETzBGQlEzUkRMRTFCUVUxRExGZEJRVmRFTEUxQlFVMUZMRTFCUVhaQ096dEJRVVZCTEZOQlFVOHNWVUZCVldRc1EwRkJWaXhGUVVGaE8wRkJRMnhDTEZGQlFVMWxMRk5CUVZNc1JVRkJaanRCUVVOQkxGRkJRVTFETEdOQlFXTjBRaXh2UWtGQmIwSmxMREpDUVVFeVFsUXNRMEZCTTBJc1EwRkJjRUlzUTBGQmNFSTdPMEZCUlVFc1UwRkJTeXhKUVVGSmFVSXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKU2l4UlFVRndRaXhGUVVFNFFra3NSMEZCT1VJc1JVRkJiVU03UVVGRGFrTkdMR0ZCUVU5SUxFMUJRVTFMTEVOQlFVNHNRMEZCVUN4SlFVRnZRa1FzV1VGQldVTXNRMEZCV2l4TlFVRnRRa01zVTBGQmNFSXNSMEZCYVVOV0xGZEJRVmRSTEZsQlFWbERMRU5CUVZvc1EwRkJXQ3hEUVVGcVF5eEhRVUU0UkN4RFFVRnFSanRCUVVORU96dEJRVVZFTEZkQlFVOUdMRTFCUVZBN1FVRkRSQ3hIUVZSRU8wRkJWVVE3TzBGQlJVUTdPenM3T3p0QlFVMVBMRWxCUVUxSkxEUkNRVUZWTEZOQlFWWkJMRTlCUVZVc1EwRkJRME1zUjBGQlJEdEJRVUZCTEZOQlFWTnVSQ3hSUVVGUmJVUXNSMEZCVWl4TlFVRnBRaXhQUVVFeFFqdEJRVUZCTEVOQlFXaENPenRCUVVWUU96czdPenM3UVVGTlR5eEpRVUZOUXl3d1FrRkJVeXhUUVVGVVFTeE5RVUZUTEVOQlFVTkRMRWRCUVVRN1FVRkJRU3hUUVVGVGNrUXNVVUZCVVhGRUxFZEJRVklzVFVGQmFVSXNWVUZCTVVJN1FVRkJRU3hEUVVGbU96dEJRVVZRT3pzN096czdRVUZOVHl4SlFVRk5ReXgzUWtGQlVTeFRRVUZTUVN4TFFVRlJMRU5CUVVORExFZEJRVVE3UVVGQlFTeFRRVUZUTEU5QlFVOUJMRWRCUVZBc1MwRkJaU3hSUVVGNFFqdEJRVUZCTEVOQlFXUTdPMEZCUlZBN096czdPenRCUVUxUExFbEJRVTFETEhkQ1FVRlJMRk5CUVZKQkxFdEJRVkVzUTBGQlEwZ3NSMEZCUkR0QlFVRkJMRk5CUVZNc1VVRkJUMEVzUjBGQlVDeDVRMEZCVDBFc1IwRkJVQ3hQUVVGbExGRkJRWGhDTzBGQlFVRXNRMEZCWkRzN1FVRkZVRHM3T3pzN08wRkJUVThzU1VGQlRURkNMRGhDUVVGWExGTkJRVmhCTEZGQlFWY3NRMEZCUXpoQ0xFZEJRVVE3UVVGQlFTeFRRVUZUTEU5QlFVOUJMRWRCUVZBc1MwRkJaU3hSUVVGNFFqdEJRVUZCTEVOQlFXcENPenRCUVVWQkxFbEJRVTFETEhkQ1FVRlJla0lzWVVGQllTeEhRVUZpTEVOQlFXUTdRVUZEUVN4SlFVRk5NRUlzZDBKQlFWRXhRaXhoUVVGaExFdEJRV0lzUTBGQlpEdEJRVU5CTEVsQlFVMHlRaXgzUWtGQlVUTkNMR0ZCUVdFc1MwRkJZaXhEUVVGa08wRkJRMEVzU1VGQlRUUkNMRFJDUVVGVkxGTkJRVlpCTEU5QlFWVXNRMEZCUXpsQ0xFTkJRVVE3UVVGQlFTeFRRVUZSTWtJc1RVRkJUVE5DTEVOQlFVNHNTMEZCV1RSQ0xFMUJRVTAxUWl4RFFVRk9MRU5CUVZvc1NVRkJkMEkyUWl4TlFVRk5OMElzUTBGQlRpeERRVUZvUXp0QlFVRkJMRU5CUVdoQ0lpd2labWxzWlNJNkluVjBhV3h6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhKekwyZHBkR2gxWWk5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCMllYSlVlWEJsSUQwZ0tIWmhjbWxoWW14bEtTQTlQaUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMblJ2VTNSeWFXNW5MbU5oYkd3b2RtRnlhV0ZpYkdVcExuTnNhV05sS0Rnc0lDMHhLVHRjYmx4dVkyOXVjM1FnUTBGTlJVeGZRMEZUUlY5UVFWUlVSVkpPSUQwZ0x5aGJZUzE2WFNrb1cwRXRXbDBwTDJjN1hHNWpiMjV6ZENCU1JWQk1RVU5GWDFSRlRWQk1RVlJGSUQwZ0p5UXhMU1F5Snp0Y2JtTnZibk4wSUVoQlUxOVFSVkpHVDFKTlFVNURSVjlPVDFjZ1BTQW9kSGx3Wlc5bUlIQmxjbVp2Y20xaGJtTmxJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJ3WlhKbWIzSnRZVzVqWlM1dWIzY3BPMXh1WEc0dktseHVJQ0JEYjI1MlpYSjBJR05oYldWc1EyRnpaU0IwYnlCa1lYTm9MV05oYzJWY2JseHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnUUhKbGRIVnliaUJiYzNSeWFXNW5YVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqWVcxbGJGUnZSR0Z6YUNBOUlDaHpkSEpwYm1jcElEMCtJSE4wY21sdVp5NXlaWEJzWVdObEtFTkJUVVZNWDBOQlUwVmZVRUZVVkVWU1Rpd2dVa1ZRVEVGRFJWOVVSVTFRVEVGVVJTa3VkRzlNYjNkbGNrTmhjMlVvS1R0Y2JseHVMeXBjYmlBZ1IyVnVaWEpoZEdVZ1kzVnljbVZ1ZENCMGFXMWxjM1JoYlhCY2JpQWdYRzRnSUVCeVpYUjFjbTRnVzNScGJXVnpkR0Z0Y0YwNklFTjFjbkpsYm5RZ1ZVNUpXQ0IwYVcxbGMzUmhiWEJjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNWeWNtVnVkRlJwYldVZ1BTQklRVk5mVUVWU1JrOVNUVUZPUTBWZlRrOVhJRDhnS0NrZ1BUNGdjR1Z5Wm05eWJXRnVZMlV1Ym05M0tDa2dPaUFvS1NBOVBpQnVaWGNnUkdGMFpTZ3BMbWRsZEZScGJXVW9LVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSE5sZEVSUFRVRjBkSEp6SUQwZ0tHVnNaVzFsYm5Rc0lHRjBkSEp6S1NBOVBpQjdYRzRnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJoZEhSeWN5a2dlMXh1SUNBZ0lHbG1JQ2hoZEhSeWN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0JsYkdWdFpXNTBMbk5sZEVGMGRISnBZblYwWlNoclpYa3NJR0YwZEhKelcydGxlVjBwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVmVHRjYmk4cVhHNGdJRk53YkdsMElHTnZiVzFoTFdSbGJHbHRhWFJsWkNCemRISnBibWRjYmx4dUlDQmNJbVp2Ynl4aVlYSmNJaUF0UGlCYlhDSm1iMjljSWl3Z1hDSmlZWEpjSWwxY2JseHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnUUhKbGRIVnliaUJiWVhKeVlYbGRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE53YkdsMFEyOXRiV0ZFWld4cGJXbDBaV1FnUFNBb2RtRnNkV1VwSUQwK0lHbHpVM1J5YVc1bktIWmhiSFZsS1NBL0lIWmhiSFZsTG5Od2JHbDBLQzhzWEZ4ektpOHBJRG9nVzNaaGJIVmxYVHRjYmx4dUx5b3FYRzRnS2lBZ1VtVjBkWEp1Y3lCaElHWjFibU4wYVc5dUlIUm9ZWFFnZDJsc2JDQmphR1ZqYXlCaGJua2dZWEpuZFcxbGJuUWdabTl5SUdCMFpYSnRZRnh1SUNvZ1lHTnZiblJoYVc1ektDZHVaV1ZrYkdVbktTZ25hR0Y1YzNSaFkyc25LV0JjYmlBcUwxeHVaWGh3YjNKMElHTnZibk4wSUdOdmJuUmhhVzV6SUQwZ0tIUmxjbTBwSUQwK0lDaDJLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQW9hWE5UZEhKcGJtY29kR1Z5YlNrZ0ppWWdkaTVwYm1SbGVFOW1LSFJsY20wcElDRTlQU0F0TVNrN1hHNTlPMXh1WEc0dktpcGNiaUFxSUNCU1pYUjFjbTV6SUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ0IzYVd4c0lHTm9aV05ySUhSdklITmxaU0JwWmlCaGJpQmhjbWQxYldWdWRDQnBjMXh1SUNvZ0lIUm9aU0JtYVhKemRDQmphR0Z5WVdOMFpYSnpJR2x1SUhSb1pTQndjbTkyYVdSbFpDQmdkR1Z5YldCY2JpQXFJR0JwYzBacGNuTjBRMmhoY25Nb0oyNWxaV1JzWlNjcEtDZG9ZWGx6ZEdGamF5Y3BZRnh1SUNvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOR2FYSnpkRU5vWVhKeklEMGdLSFJsY20wcElEMCtJQ2gyS1NBOVBpQjdYRzRnSUhKbGRIVnliaUFvYVhOVGRISnBibWNvZEdWeWJTa2dKaVlnZGk1cGJtUmxlRTltS0hSbGNtMHBJRDA5UFNBd0tUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1EzSmxZWFJsSUdFZ2RXNXBkQ0IyWVd4MVpTQjBlWEJsWEc0Z0tpOWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZWYm1sMFZIbHdaU0E5SUNoMGVYQmxMQ0IwY21GdWMyWnZjbTBwSUQwK0lIdGNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQjBaWE4wT2lCamIyNTBZV2x1Y3loMGVYQmxLU3hjYmlBZ0lDQndZWEp6WlRvZ2NHRnljMlZHYkc5aGRDeGNiaUFnSUNCMGNtRnVjMlp2Y20xY2JpQWdmVHRjYm4wN1hHNWNiaThxWEc0Z0lFZGxkQ0IyWVd4MVpTQm1jbTl0SUdaMWJtTjBhVzl1SUhOMGNtbHVaMXh1SUNCY0luUnlZVzV6YkdGMFpWZ29NakJ3ZUNsY0lpQXRQaUJjSWpJd2NIaGNJbHh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSV1lXeDFaVVp5YjIxR2RXNWpkR2x2YmxOMGNtbHVaeUE5SUNoMllXeDFaU2tnUFQ0Z2RtRnNkV1V1YzNWaWMzUnlhVzVuS0haaGJIVmxMbWx1WkdWNFQyWW9KeWduS1NBcklERXNJSFpoYkhWbExteGhjM1JKYm1SbGVFOW1LQ2NwSnlrcE8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpYTWdZU0JtZFc1amRHbHZiaUIwYUdGMElIZHBiR3dnYzNCc2FYUWdZMjlzYjNKY2JpQXFJSFpoYkhWbGN5Qm1jbTl0SUhOMGNtbHVaeUJwYm5SdklHRnVJRzlpYW1WamRDQnZaaUJ3Y205d1pYSjBhV1Z6WEc0Z0tpQmdiV0Z3UVhKeVlYbFViMDlpYW1WamRDaGJKM0psWkNjc0lDZG5jbVZsYmljc0lDZGliSFZsSjEwcEtDZHlaMkpoS0RBc01Dd3dLU2NwWUZ4dUlDb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdjM0JzYVhSRGIyeHZjbFpoYkhWbGN5aDBaWEp0Y3lrZ2UxeHVJQ0JqYjI1emRDQnVkVzFVWlhKdGN5QTlJSFJsY20xekxteGxibWQwYUR0Y2JseHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdLSFlwSUh0Y2JpQWdJQ0JqYjI1emRDQjJZV3gxWlhNZ1BTQjdmVHRjYmlBZ0lDQmpiMjV6ZENCMllXeDFaWE5CY25KaGVTQTlJSE53YkdsMFEyOXRiV0ZFWld4cGJXbDBaV1FvWjJWMFZtRnNkV1ZHY205dFJuVnVZM1JwYjI1VGRISnBibWNvZGlrcE8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFVWlhKdGN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNCMllXeDFaWE5iZEdWeWJYTmJhVjFkSUQwZ0tIWmhiSFZsYzBGeWNtRjVXMmxkSUNFOVBTQjFibVJsWm1sdVpXUXBJRDhnY0dGeWMyVkdiRzloZENoMllXeDFaWE5CY25KaGVWdHBYU2tnT2lBeE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIyWVd4MVpYTTdYRzRnSUgwN1hHNTlYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaGJpQmhjbkpoZVNBL0lGeHVJQ0JjYmlBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RYUnBiSE11ZG1GeVZIbHdaU0E5UFQwZ0owRnljbUY1SjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwRnljbUY1SUQwZ0tHRnljaWtnUFQ0Z2RtRnlWSGx3WlNoaGNuSXBJRDA5UFNBblFYSnlZWGtuTzF4dVhHNHZLbHh1SUNCSmN5QjFkR2xzY3lCMllYSWdZU0JtZFc1amRHbHZiaUEvSUZ4dUlDQmNiaUFnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZFhScGJITXVkbUZ5Vkhsd1pTQTlQVDBnSjBaMWJtTjBhVzl1SjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwWjFibU1nUFNBb2IySnFLU0E5UGlCMllYSlVlWEJsS0c5aWFpa2dQVDA5SUNkR2RXNWpkR2x2YmljN1hHNWNiaThxWEc0Z0lFbHpJSFYwYVd4eklIWmhjaUJoSUc1MWJXSmxjajljYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQTlQVDBnSjI1MWJXSmxjaWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOT2RXMGdQU0FvYm5WdEtTQTlQaUIwZVhCbGIyWWdiblZ0SUQwOVBTQW5iblZ0WW1WeUp6dGNibHh1THlwY2JpQWdTWE1nZFhScGJITWdkbUZ5SUdGdUlHOWlhbVZqZEQ5Y2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUE5UFQwZ0oyOWlhbVZqZENkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTlBZbW9nUFNBb2IySnFLU0E5UGlCMGVYQmxiMllnYjJKcUlEMDlQU0FuYjJKcVpXTjBKenRjYmx4dUx5cGNiaUFnU1hNZ2RYUnBiSE1nZG1GeUlHRWdjM1J5YVc1bklEOGdYRzRnSUZ4dUlDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBlWEJsYjJZZ2MzUnlJRDA5UFNBbmMzUnlhVzVuSjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMxTjBjbWx1WnlBOUlDaHpkSElwSUQwK0lIUjVjR1Z2WmlCemRISWdQVDA5SUNkemRISnBibWNuTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOSVpYZ2dQU0JwYzBacGNuTjBRMmhoY25Nb0p5TW5LVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnBjMUpuWWlBOUlHbHpSbWx5YzNSRGFHRnljeWduY21kaUp5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkljMndnUFNCcGMwWnBjbk4wUTJoaGNuTW9KMmh6YkNjcE8xeHVaWGh3YjNKMElHTnZibk4wSUdselEyOXNiM0lnUFNBb2Rpa2dQVDRnS0dselNHVjRLSFlwSUh4OElHbHpVbWRpS0hZcElIeDhJR2x6U0hOc0tIWXBLVHRjYmlKZGZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmMvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lRW5kID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBleHBvcnRzLm9uRnJhbWVFbmQgPSBleHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLm9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLm9uRnJhbWVTdGFydCA9IHVuZGVmaW5lZDtcblxudmFyIF9vbk5leHRGcmFtZSA9IHJlcXVpcmUoJy4vb24tbmV4dC1mcmFtZScpO1xuXG52YXIgX29uTmV4dEZyYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29uTmV4dEZyYW1lKTtcblxudmFyIF9jcmVhdGVSZW5kZXJTdGVwID0gcmVxdWlyZSgnLi9jcmVhdGUtcmVuZGVyLXN0ZXAnKTtcblxudmFyIF9jcmVhdGVSZW5kZXJTdGVwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVJlbmRlclN0ZXApO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB3aWxsUmVuZGVyTmV4dEZyYW1lID0gZmFsc2U7XG5cbi8qKlxuICogTWF4aW11bSBwZXJtaXR0ZWQgbXMgc2luY2UgbGFzdCBmcmFtZVxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIE1BWF9FTEFQU0VEID0gMjA7XG5cbi8qKlxuICogQ3VycmVudCBmcmFtZXN0YW1wXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgY3VycmVudEZyYW1lc3RhbXAgPSAoMCwgX3V0aWxzLmN1cnJlbnRUaW1lKSgpO1xuXG52YXIgZWxhcHNlZCA9IDA7XG5cbi8qKlxuICogRmFjdG9yIHRvIG11bHRpcGx5IGBlbGFwc2VkYCBieSAtIFxuICogMC41IHdvdWxkIGJlIHNsb3cgbW90aW9uLCAyIHdvdWxkIGJlIGZhc3RcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBkaWxhdGlvbiA9IDE7XG5cbmZ1bmN0aW9uIHN0YXJ0UmVuZGVyTG9vcCgpIHtcbiAgaWYgKCF3aWxsUmVuZGVyTmV4dEZyYW1lKSB7XG4gICAgd2lsbFJlbmRlck5leHRGcmFtZSA9IHRydWU7XG4gICAgKDAsIF9vbk5leHRGcmFtZTIuZGVmYXVsdCkocHJvY2Vzc0ZyYW1lKTtcbiAgfVxufVxuXG52YXIgZnJhbWVTdGFydCA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcbnZhciBmcmFtZVVwZGF0ZSA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcbnZhciBmcmFtZVJlbmRlciA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcbnZhciBmcmFtZUVuZCA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcblxuZnVuY3Rpb24gcHJvY2Vzc0ZyYW1lKGZyYW1lc3RhbXApIHtcbiAgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnRGcmFtZXN0YW1wLCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gIGN1cnJlbnRGcmFtZXN0YW1wID0gZnJhbWVzdGFtcDtcblxuICBmcmFtZVN0YXJ0LnByb2Nlc3MoKTtcbiAgZnJhbWVVcGRhdGUucHJvY2VzcygpO1xuICBmcmFtZVJlbmRlci5wcm9jZXNzKCk7XG4gIGZyYW1lRW5kLnByb2Nlc3MoKTtcbn1cblxudmFyIG9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5zY2hlZHVsZTtcbnZhciBvbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZnJhbWVVcGRhdGUuc2NoZWR1bGU7XG52YXIgb25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGZyYW1lUmVuZGVyLnNjaGVkdWxlO1xudmFyIG9uRnJhbWVFbmQgPSBleHBvcnRzLm9uRnJhbWVFbmQgPSBmcmFtZUVuZC5zY2hlZHVsZTtcbnZhciBjYW5jZWxPbkZyYW1lU3RhcnQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGZyYW1lUmVuZGVyLmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lRW5kID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lRW5kID0gZnJhbWVFbmQuY2FuY2VsO1xuXG52YXIgdGltZVNpbmNlTGFzdEZyYW1lID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBmdW5jdGlvbiB0aW1lU2luY2VMYXN0RnJhbWUoKSB7XG4gIHJldHVybiBlbGFwc2VkO1xufTtcbnZhciBjdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLmN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGZ1bmN0aW9uIGN1cnJlbnRGcmFtZVRpbWVzdGFtcCgpIHtcbiAgcmV0dXJuIGN1cnJlbnRGcmFtZXN0YW1wO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2xzaWQybHNiRkpsYm1SbGNrNWxlSFJHY21GdFpTSXNJazFCV0Y5RlRFRlFVMFZFSWl3aVkzVnljbVZ1ZEVaeVlXMWxjM1JoYlhBaUxDSmxiR0Z3YzJWa0lpd2laR2xzWVhScGIyNGlMQ0p6ZEdGeWRGSmxibVJsY2t4dmIzQWlMQ0p3Y205alpYTnpSbkpoYldVaUxDSm1jbUZ0WlZOMFlYSjBJaXdpWm5KaGJXVlZjR1JoZEdVaUxDSm1jbUZ0WlZKbGJtUmxjaUlzSW1aeVlXMWxSVzVrSWl3aVpuSmhiV1Z6ZEdGdGNDSXNJazFoZEdnaUxDSnRZWGdpTENKdGFXNGlMQ0p3Y205alpYTnpJaXdpYjI1R2NtRnRaVk4wWVhKMElpd2ljMk5vWldSMWJHVWlMQ0p2YmtaeVlXMWxWWEJrWVhSbElpd2liMjVHY21GdFpWSmxibVJsY2lJc0ltOXVSbkpoYldWRmJtUWlMQ0pqWVc1alpXeFBia1p5WVcxbFUzUmhjblFpTENKallXNWpaV3dpTENKallXNWpaV3hQYmtaeVlXMWxWWEJrWVhSbElpd2lZMkZ1WTJWc1QyNUdjbUZ0WlZKbGJtUmxjaUlzSW1OaGJtTmxiRTl1Um5KaGJXVkZibVFpTENKMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVaUxDSmpkWEp5Wlc1MFJuSmhiV1ZVYVcxbGMzUmhiWEFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUlVFc1NVRkJTVUVzYzBKQlFYTkNMRXRCUVRGQ096dEJRVVZCT3pzN08wRkJTVUVzU1VGQlRVTXNZMEZCWXl4RlFVRndRanM3UVVGRlFUczdPenRCUVVsQkxFbEJRVWxETEc5Q1FVRnZRaXg1UWtGQmVFSTdPMEZCUlVFc1NVRkJTVU1zVlVGQlZTeERRVUZrT3p0QlFVVkJPenM3T3p0QlFVdEJMRWxCUVVsRExGZEJRVmNzUTBGQlpqczdRVUZGUVN4VFFVRlRReXhsUVVGVUxFZEJRVEpDTzBGQlEzcENMRTFCUVVrc1EwRkJRMHdzYlVKQlFVd3NSVUZCTUVJN1FVRkRlRUpCTERCQ1FVRnpRaXhKUVVGMFFqdEJRVU5CTEN0Q1FVRlpUU3haUVVGYU8wRkJRMFE3UVVGRFJqczdRVUZGUkN4SlFVRk5ReXhoUVVGaExHZERRVUZwUWtZc1pVRkJha0lzUTBGQmJrSTdRVUZEUVN4SlFVRk5SeXhqUVVGakxHZERRVUZwUWtnc1pVRkJha0lzUTBGQmNFSTdRVUZEUVN4SlFVRk5TU3hqUVVGakxHZERRVUZwUWtvc1pVRkJha0lzUTBGQmNFSTdRVUZEUVN4SlFVRk5TeXhYUVVGWExHZERRVUZwUWt3c1pVRkJha0lzUTBGQmFrSTdPMEZCUlVFc1UwRkJVME1zV1VGQlZDeERRVUZ6UWtzc1ZVRkJkRUlzUlVGQmEwTTdRVUZEYUVOWUxIZENRVUZ6UWl4TFFVRjBRanRCUVVOQlJ5eFpRVUZWVXl4TFFVRkxReXhIUVVGTUxFTkJRVk5FTEV0QlFVdEZMRWRCUVV3c1EwRkJVMGdzWVVGQllWUXNhVUpCUVhSQ0xFVkJRWGxEUkN4WFFVRjZReXhEUVVGVUxFVkJRV2RGTEVOQlFXaEZMRWxCUVhGRlJ5eFJRVUV2UlR0QlFVTkJSaXh6UWtGQmIwSlRMRlZCUVhCQ096dEJRVVZCU2l4aFFVRlhVU3hQUVVGWU8wRkJRMEZRTEdOQlFWbFBMRTlCUVZvN1FVRkRRVTRzWTBGQldVMHNUMEZCV2p0QlFVTkJUQ3hYUVVGVFN5eFBRVUZVTzBGQlEwUTdPMEZCUlUwc1NVRkJUVU1zYzBOQlFXVlVMRmRCUVZkVkxGRkJRV2hETzBGQlEwRXNTVUZCVFVNc2QwTkJRV2RDVml4WlFVRlpVeXhSUVVGc1F6dEJRVU5CTEVsQlFVMUZMSGREUVVGblFsWXNXVUZCV1ZFc1VVRkJiRU03UVVGRFFTeEpRVUZOUnl4clEwRkJZVllzVTBGQlUwOHNVVUZCTlVJN1FVRkRRU3hKUVVGTlNTeHJSRUZCY1VKa0xGZEJRVmRsTEUxQlFYUkRPMEZCUTBFc1NVRkJUVU1zYjBSQlFYTkNaaXhaUVVGWll5eE5RVUY0UXp0QlFVTkJMRWxCUVUxRkxHOUVRVUZ6UW1Zc1dVRkJXV0VzVFVGQmVFTTdRVUZEUVN4SlFVRk5SeXc0UTBGQmJVSm1MRk5CUVZOWkxFMUJRV3hET3p0QlFVVkJMRWxCUVUxSkxHdEVRVUZ4UWl4VFFVRnlRa0VzYTBKQlFYRkNPMEZCUVVFc1UwRkJUWFpDTEU5QlFVNDdRVUZCUVN4RFFVRXpRanRCUVVOQkxFbEJRVTEzUWl4M1JFRkJkMElzVTBGQmVFSkJMSEZDUVVGM1FqdEJRVUZCTEZOQlFVMTZRaXhwUWtGQlRqdEJRVUZCTEVOQlFUbENJaXdpWm1sc1pTSTZJbWx1WkdWNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYSnpMMmRwZEdoMVlpOXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdiMjVPWlhoMFJuSmhiV1VnWm5KdmJTQW5MaTl2YmkxdVpYaDBMV1p5WVcxbEp6dGNibWx0Y0c5eWRDQmpjbVZoZEdWU1pXNWtaWEpUZEdWd0lHWnliMjBnSnk0dlkzSmxZWFJsTFhKbGJtUmxjaTF6ZEdWd0p6dGNibWx0Y0c5eWRDQjdJR04xY25KbGJuUlVhVzFsSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1YkdWMElIZHBiR3hTWlc1a1pYSk9aWGgwUm5KaGJXVWdQU0JtWVd4elpUdGNibHh1THlvcVhHNGdLaUJOWVhocGJYVnRJSEJsY20xcGRIUmxaQ0J0Y3lCemFXNWpaU0JzWVhOMElHWnlZVzFsWEc0Z0tpQkFkSGx3WlNCN1RuVnRZbVZ5ZlZ4dUlDb3ZYRzVqYjI1emRDQk5RVmhmUlV4QlVGTkZSQ0E5SURJd08xeHVYRzR2S2lwY2JpQXFJRU4xY25KbGJuUWdabkpoYldWemRHRnRjRnh1SUNvZ1FIUjVjR1VnZTA1MWJXSmxjbjFjYmlBcUwxeHViR1YwSUdOMWNuSmxiblJHY21GdFpYTjBZVzF3SUQwZ1kzVnljbVZ1ZEZScGJXVW9LVHRjYmx4dWJHVjBJR1ZzWVhCelpXUWdQU0F3TzF4dVhHNHZLaXBjYmlBcUlFWmhZM1J2Y2lCMGJ5QnRkV3gwYVhCc2VTQmdaV3hoY0hObFpHQWdZbmtnTFNCY2JpQXFJREF1TlNCM2IzVnNaQ0JpWlNCemJHOTNJRzF2ZEdsdmJpd2dNaUIzYjNWc1pDQmlaU0JtWVhOMFhHNGdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ292WEc1c1pYUWdaR2xzWVhScGIyNGdQU0F4TzF4dVhHNW1kVzVqZEdsdmJpQnpkR0Z5ZEZKbGJtUmxja3h2YjNBb0tTQjdYRzRnSUdsbUlDZ2hkMmxzYkZKbGJtUmxjazVsZUhSR2NtRnRaU2tnZTF4dUlDQWdJSGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VnUFNCMGNuVmxPMXh1SUNBZ0lHOXVUbVY0ZEVaeVlXMWxLSEJ5YjJObGMzTkdjbUZ0WlNrN1hHNGdJSDFjYm4xY2JseHVZMjl1YzNRZ1puSmhiV1ZUZEdGeWRDQTlJR055WldGMFpWSmxibVJsY2xOMFpYQW9jM1JoY25SU1pXNWtaWEpNYjI5d0tUdGNibU52Ym5OMElHWnlZVzFsVlhCa1lYUmxJRDBnWTNKbFlYUmxVbVZ1WkdWeVUzUmxjQ2h6ZEdGeWRGSmxibVJsY2t4dmIzQXBPMXh1WTI5dWMzUWdabkpoYldWU1pXNWtaWElnUFNCamNtVmhkR1ZTWlc1a1pYSlRkR1Z3S0hOMFlYSjBVbVZ1WkdWeVRHOXZjQ2s3WEc1amIyNXpkQ0JtY21GdFpVVnVaQ0E5SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLVHRjYmx4dVpuVnVZM1JwYjI0Z2NISnZZMlZ6YzBaeVlXMWxLR1p5WVcxbGMzUmhiWEFwSUh0Y2JpQWdkMmxzYkZKbGJtUmxjazVsZUhSR2NtRnRaU0E5SUdaaGJITmxPMXh1SUNCbGJHRndjMlZrSUQwZ1RXRjBhQzV0WVhnb1RXRjBhQzV0YVc0b1puSmhiV1Z6ZEdGdGNDQXRJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdMQ0JOUVZoZlJVeEJVRk5GUkNrc0lERXBJQ29nWkdsc1lYUnBiMjQ3WEc0Z0lHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd0lEMGdabkpoYldWemRHRnRjRHRjYmx4dUlDQm1jbUZ0WlZOMFlYSjBMbkJ5YjJObGMzTW9LVHRjYmlBZ1puSmhiV1ZWY0dSaGRHVXVjSEp2WTJWemN5Z3BPMXh1SUNCbWNtRnRaVkpsYm1SbGNpNXdjbTlqWlhOektDazdYRzRnSUdaeVlXMWxSVzVrTG5CeWIyTmxjM01vS1R0Y2JuMWNibHh1Wlhod2IzSjBJR052Ym5OMElHOXVSbkpoYldWVGRHRnlkQ0E5SUdaeVlXMWxVM1JoY25RdWMyTm9aV1IxYkdVN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnYjI1R2NtRnRaVlZ3WkdGMFpTQTlJR1p5WVcxbFZYQmtZWFJsTG5OamFHVmtkV3hsTzF4dVpYaHdiM0owSUdOdmJuTjBJRzl1Um5KaGJXVlNaVzVrWlhJZ1BTQm1jbUZ0WlZKbGJtUmxjaTV6WTJobFpIVnNaVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnZia1p5WVcxbFJXNWtJRDBnWm5KaGJXVkZibVF1YzJOb1pXUjFiR1U3WEc1bGVIQnZjblFnWTI5dWMzUWdZMkZ1WTJWc1QyNUdjbUZ0WlZOMFlYSjBJRDBnWm5KaGJXVlRkR0Z5ZEM1allXNWpaV3c3WEc1bGVIQnZjblFnWTI5dWMzUWdZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU0E5SUdaeVlXMWxWWEJrWVhSbExtTmhibU5sYkR0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqWVc1alpXeFBia1p5WVcxbFVtVnVaR1Z5SUQwZ1puSmhiV1ZTWlc1a1pYSXVZMkZ1WTJWc08xeHVaWGh3YjNKMElHTnZibk4wSUdOaGJtTmxiRTl1Um5KaGJXVkZibVFnUFNCbWNtRnRaVVZ1WkM1allXNWpaV3c3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0IwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VnUFNBb0tTQTlQaUJsYkdGd2MyVmtPMXh1Wlhod2IzSjBJR052Ym5OMElHTjFjbkpsYm5SR2NtRnRaVlJwYldWemRHRnRjQ0E5SUNncElEMCtJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdPMXh1SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ZyYW1lc3luYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAvLyBsYXdzdWl0IC0gc29ycnlcbiAgZnVuY3Rpb24gQWN0aW9uKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbik7XG5cbiAgICB0aGlzLnNjaGVkdWxlZFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmxhc3RVcGRhdGVkID0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpO1xuICAgICAgX3RoaXMucHJldiA9IF90aGlzLmN1cnJlbnQ7XG5cbiAgICAgIHZhciBfcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvblVwZGF0ZSA9IF9wcm9wcy5vblVwZGF0ZSxcbiAgICAgICAgICBwYXNzaXZlID0gX3Byb3BzLnBhc3NpdmU7XG5cblxuICAgICAgaWYgKF90aGlzLnVwZGF0ZSkge1xuICAgICAgICBfdGhpcy5jdXJyZW50ID0gX3RoaXMudXBkYXRlKF90aGlzLmN1cnJlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAob25VcGRhdGUpIHtcbiAgICAgICAgaWYgKG9uVXBkYXRlLnJlZ2lzdGVyQWN0aW9uKSB7XG4gICAgICAgICAgb25VcGRhdGUuc2V0KF90aGlzLmdldCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvblVwZGF0ZShfdGhpcy5nZXQoKSwgX3RoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmZpcmVMaXN0ZW5lcnMoKTtcblxuICAgICAgaWYgKCFwYXNzaXZlICYmIF90aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKShfdGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiBfdGhpcy5pc0FjdGlvbkNvbXBsZXRlKCkpIHtcbiAgICAgICAgX3RoaXMuY29tcGxldGUoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH07XG5cbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzKTtcblxuICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuXG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9IDA7XG4gICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50ID0gcHJvcHMuY3VycmVudCB8fCBwcm9wcy5mcm9tIHx8IDA7XG4gIH1cblxuICBBY3Rpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBvblN0YXJ0ID0gX3Byb3BzMi5vblN0YXJ0LFxuICAgICAgICBfb25TdGFydCA9IF9wcm9wczIuX29uU3RhcnQsXG4gICAgICAgIHBhc3NpdmUgPSBfcHJvcHMyLnBhc3NpdmU7XG5cblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RhcnQpIHRoaXMub25TdGFydCgpO1xuICAgIGlmIChvblN0YXJ0KSBvblN0YXJ0KHRoaXMpO1xuICAgIGlmIChfb25TdGFydCkgX29uU3RhcnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25TdG9wID0gX3Byb3BzMy5vblN0b3AsXG4gICAgICAgIF9vblN0b3AgPSBfcHJvcHMzLl9vblN0b3AsXG4gICAgICAgIHBhc3NpdmUgPSBfcHJvcHMzLnBhc3NpdmU7XG5cblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICgwLCBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVVcGRhdGUpKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0b3ApIHRoaXMub25TdG9wKCk7XG4gICAgaWYgKG9uU3RvcCkgb25TdG9wKHRoaXMpO1xuICAgIGlmIChfb25TdG9wKSBfb25TdG9wKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25Db21wbGV0ZSA9IF9wcm9wczQub25Db21wbGV0ZSxcbiAgICAgICAgX29uQ29tcGxldGUgPSBfcHJvcHM0Ll9vbkNvbXBsZXRlO1xuXG5cbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKHRoaXMpO1xuICAgIGlmIChfb25Db21wbGV0ZSkgX29uQ29tcGxldGUodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24gc2V0UHJvcHMoX3JlZikge1xuICAgIHZhciBvblVwZGF0ZSA9IF9yZWYub25VcGRhdGUsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnb25VcGRhdGUnXSk7XG5cbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHByb3BzKTtcblxuICAgIGlmIChvblVwZGF0ZSkgdGhpcy5vdXRwdXQob25VcGRhdGUpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5vdXRwdXQgPSBmdW5jdGlvbiBvdXRwdXQoZnVuYykge1xuICAgIHRoaXMucHJvcHMub25VcGRhdGUgPSBmdW5jO1xuICAgIGlmIChmdW5jLnJlZ2lzdGVyQWN0aW9uKSBmdW5jLnJlZ2lzdGVyQWN0aW9uKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgdmFyIHRyYW5zZm9ybSA9IHRoaXMucHJvcHMudHJhbnNmb3JtO1xuXG4gICAgcmV0dXJuIHRyYW5zZm9ybSA/IHRyYW5zZm9ybSh0aGlzLmN1cnJlbnQpIDogdGhpcy5jdXJyZW50O1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0QmVmb3JlVHJhbnNmb3JtID0gZnVuY3Rpb24gZ2V0QmVmb3JlVHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQodikge1xuICAgIHRoaXMuY3VycmVudCA9IHY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXRQcm9wID0gZnVuY3Rpb24gZ2V0UHJvcChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wc1trZXldO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gKDAsIF9jYWxjLnNwZWVkUGVyU2Vjb25kKSh0aGlzLmN1cnJlbnQgLSB0aGlzLnByZXYsIHRoaXMubGFzdFVwZGF0ZWQpO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycyB8fCBbXTtcbiAgICB0aGlzLm51bUxpc3RlbmVycyA9IHRoaXMubnVtTGlzdGVuZXJzIHx8IDA7XG4gICAgaWYgKHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpID09PSAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycysrO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB2YXIgbGlzdGVuZXJJbmRleCA9IHRoaXMubGlzdGVuZXJzID8gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgOiAtMTtcbiAgICBpZiAobGlzdGVuZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzLS07XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UobGlzdGVuZXJJbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZmlyZUxpc3RlbmVycyA9IGZ1bmN0aW9uIGZpcmVMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmdldCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1MaXN0ZW5lcnM7IGkrKykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbaV0oY3VycmVudCwgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBBY3Rpb247XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSWtGamRHbHZiaUlzSW5CeWIzQnpJaXdpYzJOb1pXUjFiR1ZrVlhCa1lYUmxJaXdpYkdGemRGVndaR0YwWldRaUxDSndjbVYySWl3aVkzVnljbVZ1ZENJc0ltOXVWWEJrWVhSbElpd2ljR0Z6YzJsMlpTSXNJblZ3WkdGMFpTSXNJbkpsWjJsemRHVnlRV04wYVc5dUlpd2ljMlYwSWl3aVoyVjBJaXdpWm1seVpVeHBjM1JsYm1WeWN5SXNJbDlwYzBGamRHbDJaU0lzSW1selFXTjBhVzl1UTI5dGNHeGxkR1VpTENKamIyMXdiR1YwWlNJc0ltTnZibk4wY25WamRHOXlJaXdpWkdWbVlYVnNkRkJ5YjNCeklpd2ljMlYwVUhKdmNITWlMQ0ptY205dElpd2ljM1JoY25RaUxDSnZibE4wWVhKMElpd2lYMjl1VTNSaGNuUWlMQ0p6ZEc5d0lpd2liMjVUZEc5d0lpd2lYMjl1VTNSdmNDSXNJbTl1UTI5dGNHeGxkR1VpTENKZmIyNURiMjF3YkdWMFpTSXNJbTkxZEhCMWRDSXNJbVoxYm1NaUxDSjBjbUZ1YzJadmNtMGlMQ0puWlhSQ1pXWnZjbVZVY21GdWMyWnZjbTBpTENKMklpd2laMlYwVUhKdmNDSXNJbXRsZVNJc0ltZGxkRlpsYkc5amFYUjVJaXdpYVhOQlkzUnBkbVVpTENKaFpHUk1hWE4wWlc1bGNpSXNJbXhwYzNSbGJtVnlJaXdpYkdsemRHVnVaWEp6SWl3aWJuVnRUR2x6ZEdWdVpYSnpJaXdpYVc1a1pYaFBaaUlzSW5CMWMyZ2lMQ0p5WlcxdmRtVk1hWE4wWlc1bGNpSXNJbXhwYzNSbGJtVnlTVzVrWlhnaUxDSnpjR3hwWTJVaUxDSnBJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdRVUZEUVRzN096czdPMGxCUlUxQkxFMDdRVUZCVXp0QlFVTmlMRzlDUVVGM1FqdEJRVUZCT3p0QlFVRkJMRkZCUVZwRExFdEJRVmtzZFVWQlFVb3NSVUZCU1RzN1FVRkJRVHM3UVVGQlFTeFRRWEZFZUVKRExHVkJja1IzUWl4SFFYRkVUaXhaUVVGTk8wRkJRM1JDTEZsQlFVdERMRmRCUVV3c1IwRkJiVUlzYjBOQlFXNUNPMEZCUTBFc1dVRkJTME1zU1VGQlRDeEhRVUZaTEUxQlFVdERMRTlCUVdwQ096dEJRVVp6UWl4dFFrRkpVU3hOUVVGTFNpeExRVXBpTzBGQlFVRXNWVUZKWkVzc1VVRktZeXhWUVVsa1FTeFJRVXBqTzBGQlFVRXNWVUZKU2tNc1QwRktTU3hWUVVsS1FTeFBRVXBKT3pzN1FVRk5kRUlzVlVGQlNTeE5RVUZMUXl4TlFVRlVMRVZCUVdsQ08wRkJRMllzWTBGQlMwZ3NUMEZCVEN4SFFVRmxMRTFCUVV0SExFMUJRVXdzUTBGQldTeE5RVUZMU0N4UFFVRnFRaXhEUVVGbU8wRkJRMFE3TzBGQlJVUXNWVUZCU1VNc1VVRkJTaXhGUVVGak8wRkJRMW9zV1VGQlNVRXNVMEZCVTBjc1kwRkJZaXhGUVVFMlFqdEJRVU16UWtnc2JVSkJRVk5KTEVkQlFWUXNRMEZCWVN4TlFVRkxReXhIUVVGTUxFVkJRV0k3UVVGRFJDeFRRVVpFTEUxQlJVODdRVUZEVEV3c2JVSkJRVk1zVFVGQlMwc3NSMEZCVEN4RlFVRlVPMEZCUTBRN1FVRkRSanM3UVVGRlJDeFpRVUZMUXl4aFFVRk1PenRCUVVWQkxGVkJRVWtzUTBGQlEwd3NUMEZCUkN4SlFVRlpMRTFCUVV0TkxGTkJRWEpDTEVWQlFXZERPMEZCUXpsQ0xITkRRVUZqTEUxQlFVdFlMR1ZCUVc1Q08wRkJRMFE3TzBGQlJVUXNWVUZCU1N4TlFVRkxXU3huUWtGQlRDeEpRVUY1UWl4TlFVRkxRU3huUWtGQlRDeEZRVUUzUWl4RlFVRnpSRHRCUVVOd1JDeGpRVUZMUXl4UlFVRk1PMEZCUTBRN08wRkJSVVE3UVVGRFJDeExRV3hHZFVJN08wRkJRM1JDTEZOQlFVdGtMRXRCUVV3c1owSkJRMHNzUzBGQlMyVXNWMEZCVEN4RFFVRnBRa01zV1VGRWRFSTdPMEZCU1VFc1UwRkJTME1zVVVGQlRDeERRVUZqYWtJc1MwRkJaRHM3UVVGRlFTeFRRVUZMUlN4WFFVRk1MRWRCUVcxQ0xFTkJRVzVDTzBGQlEwRXNVMEZCUzBNc1NVRkJUQ3hIUVVGWkxFdEJRVXRETEU5QlFVd3NSMEZCWlVvc1RVRkJUVWtzVDBGQlRpeEpRVUZwUWtvc1RVRkJUV3RDTEVsQlFYWkNMRWxCUVN0Q0xFTkJRVEZFTzBGQlEwUTdPMjFDUVVWRVF5eExMRzlDUVVGUk8wRkJRVUVzYTBKQlEybERMRXRCUVV0dVFpeExRVVIwUXp0QlFVRkJMRkZCUTBWdlFpeFBRVVJHTEZkQlEwVkJMRTlCUkVZN1FVRkJRU3hSUVVOWFF5eFJRVVJZTEZkQlExZEJMRkZCUkZnN1FVRkJRU3hSUVVOeFFtWXNUMEZFY2tJc1YwRkRjVUpCTEU5QlJISkNPenM3UVVGSFRpeFJRVUZKTEVOQlFVTkJMRTlCUVV3c1JVRkJZenRCUVVOYUxGZEJRVXROTEZOQlFVd3NSMEZCYVVJc1NVRkJha0k3UVVGRFFTeHZRMEZCWXl4TFFVRkxXQ3hsUVVGdVFqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1MwRkJTMjFDTEU5QlFWUXNSVUZCYTBJc1MwRkJTMEVzVDBGQlREdEJRVU5zUWl4UlFVRkpRU3hQUVVGS0xFVkJRV0ZCTEZGQlFWRXNTVUZCVWp0QlFVTmlMRkZCUVVsRExGRkJRVW9zUlVGQlkwRXNVMEZCVXl4SlFVRlVPenRCUVVWa0xGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08yMUNRVVZFUXl4SkxHMUNRVUZQTzBGQlFVRXNhMEpCUTJkRExFdEJRVXQwUWl4TFFVUnlRenRCUVVGQkxGRkJRMGQxUWl4TlFVUklMRmRCUTBkQkxFMUJSRWc3UVVGQlFTeFJRVU5YUXl4UFFVUllMRmRCUTFkQkxFOUJSRmc3UVVGQlFTeFJRVU52UW14Q0xFOUJSSEJDTEZkQlEyOUNRU3hQUVVSd1FqczdPMEZCUjB3c1VVRkJTU3hEUVVGRFFTeFBRVUZNTEVWQlFXTTdRVUZEV2l4WFFVRkxUU3hUUVVGTUxFZEJRV2xDTEV0QlFXcENPMEZCUTBFc01FTkJRVzlDTEV0QlFVdFlMR1ZCUVhwQ08wRkJRMFE3TzBGQlJVUXNVVUZCU1N4TFFVRkxjMElzVFVGQlZDeEZRVUZwUWl4TFFVRkxRU3hOUVVGTU8wRkJRMnBDTEZGQlFVbEJMRTFCUVVvc1JVRkJXVUVzVDBGQlR5eEpRVUZRTzBGQlExb3NVVUZCU1VNc1QwRkJTaXhGUVVGaFFTeFJRVUZSTEVsQlFWSTdPMEZCUldJc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN2JVSkJSVVJXTEZFc2RVSkJRVmM3UVVGQlFTeHJRa0ZETWtJc1MwRkJTMlFzUzBGRWFFTTdRVUZCUVN4UlFVTkVlVUlzVlVGRVF5eFhRVU5FUVN4VlFVUkRPMEZCUVVFc1VVRkRWME1zVjBGRVdDeFhRVU5YUVN4WFFVUllPenM3UVVGSFZDeFRRVUZMU2l4SlFVRk1PenRCUVVWQkxGRkJRVWtzUzBGQlMwY3NWVUZCVkN4RlFVRnhRaXhMUVVGTFFTeFZRVUZNTzBGQlEzSkNMRkZCUVVsQkxGVkJRVW9zUlVGQlowSkJMRmRCUVZjc1NVRkJXRHRCUVVOb1FpeFJRVUZKUXl4WFFVRktMRVZCUVdsQ1FTeFpRVUZaTEVsQlFWbzdPMEZCUldwQ0xGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08yMUNRV2xEUkZRc1VTd3lRa0ZCYVVNN1FVRkJRU3hSUVVGMFFsb3NVVUZCYzBJc1VVRkJkRUpCTEZGQlFYTkNPMEZCUVVFc1VVRkJWRXdzUzBGQlV6czdRVUZETDBJc1UwRkJTMEVzUzBGQlRDeG5Ra0ZEU3l4TFFVRkxRU3hMUVVSV0xFVkJSVXRCTEV0QlJrdzdPMEZCUzBFc1VVRkJTVXNzVVVGQlNpeEZRVUZqTEV0QlFVdHpRaXhOUVVGTUxFTkJRVmwwUWl4UlFVRmFPenRCUVVWa0xGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08yMUNRVVZFYzBJc1RTeHRRa0ZCVDBNc1NTeEZRVUZOTzBGQlExZ3NVMEZCU3pWQ0xFdEJRVXdzUTBGQlYwc3NVVUZCV0N4SFFVRnpRblZDTEVsQlFYUkNPMEZCUTBFc1VVRkJTVUVzUzBGQlMzQkNMR05CUVZRc1JVRkJlVUp2UWl4TFFVRkxjRUlzWTBGQlRDeERRVUZ2UWl4SlFVRndRanM3UVVGRmVrSXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdiVUpCUlVSRkxFY3NhMEpCUVUwN1FVRkJRU3hSUVVOSmJVSXNVMEZFU2l4SFFVTnJRaXhMUVVGTE4wSXNTMEZFZGtJc1EwRkRTVFpDTEZOQlJFbzdPMEZCUlVvc1YwRkJUMEVzV1VGQldVRXNWVUZCVlN4TFFVRkxla0lzVDBGQlppeERRVUZhTEVkQlFYTkRMRXRCUVV0QkxFOUJRV3hFTzBGQlEwUXNSenM3YlVKQlJVUXdRaXhyUWl4cFEwRkJjVUk3UVVGRGJrSXNWMEZCVHl4TFFVRkxNVUlzVDBGQldqdEJRVU5FTEVjN08yMUNRVVZFU3l4SExHZENRVUZKYzBJc1F5eEZRVUZITzBGQlEwd3NVMEZCU3pOQ0xFOUJRVXdzUjBGQlpUSkNMRU5CUVdZN1FVRkRRU3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJFTXNUeXh2UWtGQlVVTXNSeXhGUVVGTE8wRkJRMWdzVjBGQlR5eExRVUZMYWtNc1MwRkJUQ3hEUVVGWGFVTXNSMEZCV0N4RFFVRlFPMEZCUTBRc1J6czdiVUpCUlVSRExGY3NNRUpCUVdNN1FVRkRXaXhYUVVGUExEQkNRVUZsTEV0QlFVczVRaXhQUVVGTUxFZEJRV1VzUzBGQlMwUXNTVUZCYmtNc1JVRkJlVU1zUzBGQlMwUXNWMEZCT1VNc1EwRkJVRHRCUVVORUxFYzdPMjFDUVVWRWFVTXNVU3gxUWtGQlZ6dEJRVU5VTEZkQlFVOHNTMEZCUzNaQ0xGTkJRVm83UVVGRFJDeEhPenR0UWtGRlJIZENMRmNzZDBKQlFWbERMRkVzUlVGQlZUdEJRVU53UWl4VFFVRkxReXhUUVVGTUxFZEJRV2xDTEV0QlFVdEJMRk5CUVV3c1NVRkJhMElzUlVGQmJrTTdRVUZEUVN4VFFVRkxReXhaUVVGTUxFZEJRVzlDTEV0QlFVdEJMRmxCUVV3c1NVRkJjVUlzUTBGQmVrTTdRVUZEUVN4UlFVRkpMRXRCUVV0RUxGTkJRVXdzUTBGQlpVVXNUMEZCWml4RFFVRjFRa2dzVVVGQmRrSXNUVUZCY1VNc1EwRkJReXhEUVVFeFF5eEZRVUUyUXp0QlFVTXpReXhYUVVGTFF5eFRRVUZNTEVOQlFXVkhMRWxCUVdZc1EwRkJiMEpLTEZGQlFYQkNPMEZCUTBFc1YwRkJTMFVzV1VGQlREdEJRVU5FTzBGQlEwUXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdiVUpCUlVSSExHTXNNa0pCUVdWTUxGRXNSVUZCVlR0QlFVTjJRaXhSUVVGTlRTeG5Ra0ZCYVVJc1MwRkJTMHdzVTBGQlRpeEhRVUZ0UWl4TFFVRkxRU3hUUVVGTUxFTkJRV1ZGTEU5QlFXWXNRMEZCZFVKSUxGRkJRWFpDTEVOQlFXNUNMRWRCUVhORUxFTkJRVU1zUTBGQk4wVTdRVUZEUVN4UlFVRkpUU3hyUWtGQmEwSXNRMEZCUXl4RFFVRjJRaXhGUVVFd1FqdEJRVU40UWl4WFFVRkxTaXhaUVVGTU8wRkJRMEVzVjBGQlMwUXNVMEZCVEN4RFFVRmxUU3hOUVVGbUxFTkJRWE5DUkN4aFFVRjBRaXhGUVVGeFF5eERRVUZ5UXp0QlFVTkVPMEZCUTBRc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN2JVSkJSVVJvUXl4aExEUkNRVUZuUWp0QlFVTmtMRkZCUVUxUUxGVkJRVlVzUzBGQlMwMHNSMEZCVEN4RlFVRm9RanRCUVVOQkxGTkJRVXNzU1VGQlNXMURMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1N4TFFVRkxUaXhaUVVGNlFpeEZRVUYxUTAwc1IwRkJka01zUlVGQk5FTTdRVUZETVVNc1YwRkJTMUFzVTBGQlRDeERRVUZsVHl4RFFVRm1MRVZCUVd0Q2VrTXNUMEZCYkVJc1JVRkJNa0lzU1VGQk0wSTdRVUZEUkR0QlFVTkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPenM3TzJ0Q1FVZFpUQ3hOSWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWEp6TDJkcGRHaDFZaTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCdmJrWnlZVzFsVlhCa1lYUmxMQ0JqWVc1alpXeFBia1p5WVcxbFZYQmtZWFJsTENCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ2ZTQm1jbTl0SUNjdUxpOW1jbUZ0WlhONWJtTW5PMXh1YVcxd2IzSjBJSHNnYzNCbFpXUlFaWEpUWldOdmJtUWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JtTnNZWE56SUVGamRHbHZiaUI3SUM4dklHeGhkM04xYVhRZ0xTQnpiM0p5ZVZ4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5QTlJSHQ5S1NCN1hHNGdJQ0FnZEdocGN5NXdjbTl3Y3lBOUlIdGNiaUFnSUNBZ0lDNHVMblJvYVhNdVkyOXVjM1J5ZFdOMGIzSXVaR1ZtWVhWc2RGQnliM0J6WEc0Z0lDQWdmVHRjYmx4dUlDQWdJSFJvYVhNdWMyVjBVSEp2Y0hNb2NISnZjSE1wTzF4dVhHNGdJQ0FnZEdocGN5NXNZWE4wVlhCa1lYUmxaQ0E5SURBN1hHNGdJQ0FnZEdocGN5NXdjbVYySUQwZ2RHaHBjeTVqZFhKeVpXNTBJRDBnY0hKdmNITXVZM1Z5Y21WdWRDQjhmQ0J3Y205d2N5NW1jbTl0SUh4OElEQTdYRzRnSUgxY2JseHVJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHOXVVM1JoY25Rc0lGOXZibE4wWVhKMExDQndZWE56YVhabElIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tDRndZWE56YVhabEtTQjdYRzRnSUNBZ0lDQjBhR2x6TGw5cGMwRmpkR2wyWlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0J2YmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11YzJOb1pXUjFiR1ZrVlhCa1lYUmxLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NXZibE4wWVhKMEtTQjBhR2x6TG05dVUzUmhjblFvS1R0Y2JpQWdJQ0JwWmlBb2IyNVRkR0Z5ZENrZ2IyNVRkR0Z5ZENoMGFHbHpLVHRjYmlBZ0lDQnBaaUFvWDI5dVUzUmhjblFwSUY5dmJsTjBZWEowS0hSb2FYTXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCemRHOXdLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2diMjVUZEc5d0xDQmZiMjVUZEc5d0xDQndZWE56YVhabElIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tDRndZWE56YVhabEtTQjdYRzRnSUNBZ0lDQjBhR2x6TGw5cGMwRmpkR2wyWlNBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlNoMGFHbHpMbk5qYUdWa2RXeGxaRlZ3WkdGMFpTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWIyNVRkRzl3S1NCMGFHbHpMbTl1VTNSdmNDZ3BPMXh1SUNBZ0lHbG1JQ2h2YmxOMGIzQXBJRzl1VTNSdmNDaDBhR2x6S1R0Y2JpQWdJQ0JwWmlBb1gyOXVVM1J2Y0NrZ1gyOXVVM1J2Y0NoMGFHbHpLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ1kyOXRjR3hsZEdVb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCdmJrTnZiWEJzWlhSbExDQmZiMjVEYjIxd2JHVjBaU0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNibHh1SUNBZ0lIUm9hWE11YzNSdmNDZ3BPMXh1WEc0Z0lDQWdhV1lnS0hSb2FYTXViMjVEYjIxd2JHVjBaU2tnZEdocGN5NXZia052YlhCc1pYUmxLQ2s3WEc0Z0lDQWdhV1lnS0c5dVEyOXRjR3hsZEdVcElHOXVRMjl0Y0d4bGRHVW9kR2hwY3lrN1hHNGdJQ0FnYVdZZ0tGOXZia052YlhCc1pYUmxLU0JmYjI1RGIyMXdiR1YwWlNoMGFHbHpLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2MyTm9aV1IxYkdWa1ZYQmtZWFJsSUQwZ0tDa2dQVDRnZTF4dUlDQWdJSFJvYVhNdWJHRnpkRlZ3WkdGMFpXUWdQU0IwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VvS1R0Y2JpQWdJQ0IwYUdsekxuQnlaWFlnUFNCMGFHbHpMbU4xY25KbGJuUTdYRzVjYmlBZ0lDQmpiMjV6ZENCN0lHOXVWWEJrWVhSbExDQndZWE56YVhabElIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11ZFhCa1lYUmxLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtTjFjbkpsYm5RZ1BTQjBhR2x6TG5Wd1pHRjBaU2gwYUdsekxtTjFjbkpsYm5RcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaHZibFZ3WkdGMFpTa2dlMXh1SUNBZ0lDQWdhV1lnS0c5dVZYQmtZWFJsTG5KbFoybHpkR1Z5UVdOMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUc5dVZYQmtZWFJsTG5ObGRDaDBhR2x6TG1kbGRDZ3BLVHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJRzl1VlhCa1lYUmxLSFJvYVhNdVoyVjBLQ2tzSUhSb2FYTXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lIUm9hWE11Wm1seVpVeHBjM1JsYm1WeWN5Z3BPMXh1WEc0Z0lDQWdhV1lnS0NGd1lYTnphWFpsSUNZbUlIUm9hWE11WDJselFXTjBhWFpsS1NCN1hHNGdJQ0FnSUNCdmJrWnlZVzFsVlhCa1lYUmxLSFJvYVhNdWMyTm9aV1IxYkdWa1ZYQmtZWFJsS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2RHaHBjeTVwYzBGamRHbHZia052YlhCc1pYUmxJQ1ltSUhSb2FYTXVhWE5CWTNScGIyNURiMjF3YkdWMFpTZ3BLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtTnZiWEJzWlhSbEtDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgwN1hHNWNiaUFnYzJWMFVISnZjSE1vZXlCdmJsVndaR0YwWlN3Z0xpNHVjSEp2Y0hNZ2ZTa2dlMXh1SUNBZ0lIUm9hWE11Y0hKdmNITWdQU0I3WEc0Z0lDQWdJQ0F1TGk1MGFHbHpMbkJ5YjNCekxGeHVJQ0FnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnYVdZZ0tHOXVWWEJrWVhSbEtTQjBhR2x6TG05MWRIQjFkQ2h2YmxWd1pHRjBaU2s3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lHOTFkSEIxZENobWRXNWpLU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTV2YmxWd1pHRjBaU0E5SUdaMWJtTTdYRzRnSUNBZ2FXWWdLR1oxYm1NdWNtVm5hWE4wWlhKQlkzUnBiMjRwSUdaMWJtTXVjbVZuYVhOMFpYSkJZM1JwYjI0b2RHaHBjeWs3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lHZGxkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJSFJ5WVc1elptOXliU0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCeVpYUjFjbTRnZEhKaGJuTm1iM0p0SUQ4Z2RISmhibk5tYjNKdEtIUm9hWE11WTNWeWNtVnVkQ2tnT2lCMGFHbHpMbU4xY25KbGJuUTdYRzRnSUgxY2JseHVJQ0JuWlhSQ1pXWnZjbVZVY21GdWMyWnZjbTBvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVkzVnljbVZ1ZER0Y2JpQWdmVnh1WEc0Z0lITmxkQ2gyS1NCN1hHNGdJQ0FnZEdocGN5NWpkWEp5Wlc1MElEMGdkanRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUdkbGRGQnliM0FvYTJWNUtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjSEp2Y0hOYmEyVjVYVHRjYmlBZ2ZWeHVYRzRnSUdkbGRGWmxiRzlqYVhSNUtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCemNHVmxaRkJsY2xObFkyOXVaQ2gwYUdsekxtTjFjbkpsYm5RZ0xTQjBhR2x6TG5CeVpYWXNJSFJvYVhNdWJHRnpkRlZ3WkdGMFpXUXBPMXh1SUNCOVhHNWNiaUFnYVhOQlkzUnBkbVVvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgybHpRV04wYVhabE8xeHVJQ0I5WEc1Y2JpQWdZV1JrVEdsemRHVnVaWElvYkdsemRHVnVaWElwSUh0Y2JpQWdJQ0IwYUdsekxteHBjM1JsYm1WeWN5QTlJSFJvYVhNdWJHbHpkR1Z1WlhKeklIeDhJRnRkTzF4dUlDQWdJSFJvYVhNdWJuVnRUR2x6ZEdWdVpYSnpJRDBnZEdocGN5NXVkVzFNYVhOMFpXNWxjbk1nZkh3Z01EdGNiaUFnSUNCcFppQW9kR2hwY3k1c2FYTjBaVzVsY25NdWFXNWtaWGhQWmloc2FYTjBaVzVsY2lrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbXhwYzNSbGJtVnljeTV3ZFhOb0tHeHBjM1JsYm1WeUtUdGNiaUFnSUNBZ0lIUm9hWE11Ym5WdFRHbHpkR1Z1WlhKekt5czdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdjbVZ0YjNabFRHbHpkR1Z1WlhJb2JHbHpkR1Z1WlhJcElIdGNiaUFnSUNCamIyNXpkQ0JzYVhOMFpXNWxja2x1WkdWNElEMGdLSFJvYVhNdWJHbHpkR1Z1WlhKektTQS9JSFJvYVhNdWJHbHpkR1Z1WlhKekxtbHVaR1Y0VDJZb2JHbHpkR1Z1WlhJcElEb2dMVEU3WEc0Z0lDQWdhV1lnS0d4cGMzUmxibVZ5U1c1a1pYZ2dJVDA5SUMweEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG01MWJVeHBjM1JsYm1WeWN5MHRPMXh1SUNBZ0lDQWdkR2hwY3k1c2FYTjBaVzVsY25NdWMzQnNhV05sS0d4cGMzUmxibVZ5U1c1a1pYZ3NJREVwTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUdacGNtVk1hWE4wWlc1bGNuTW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ1kzVnljbVZ1ZENBOUlIUm9hWE11WjJWMEtDazdYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG01MWJVeHBjM1JsYm1WeWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbXhwYzNSbGJtVnljMXRwWFNoamRYSnlaVzUwTENCMGFHbHpLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdRV04wYVc5dU8xeHVJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWN0aW9ucy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG4vKlxuICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcmV0dXJuIFtudW1iZXJdXG4qL1xudmFyIHRvRGVjaW1hbCA9IGZ1bmN0aW9uIHRvRGVjaW1hbChudW0pIHtcbiAgdmFyIHByZWNpc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMjtcblxuICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG5cbnZhciBaRVJPX1BPSU5UID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB6OiAwXG59O1xuXG52YXIgZGlzdGFuY2UxRCA9IGZ1bmN0aW9uIGRpc3RhbmNlMUQoYSwgYikge1xuICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufTtcblxuLypcbiAgQW5nbGUgYmV0d2VlbiBwb2ludHNcblxuICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgYXJlIGF0IDAsMFxuXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbnZhciBhbmdsZSA9IGV4cG9ydHMuYW5nbGUgPSBmdW5jdGlvbiBhbmdsZShhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBaRVJPX1BPSU5UO1xuICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGIueSAtIGEueSwgYi54IC0gYS54KSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xudmFyIGRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBmdW5jdGlvbiBkZWdyZWVzVG9SYWRpYW5zKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgRGlsYXRlXG5cbiAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuXG4gIGEgLS0tLS0tLS0tIGJcblxuICB0b1xuXG4gIGEgLS0tLSBiXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG52YXIgZGlsYXRlID0gZXhwb3J0cy5kaWxhdGUgPSBmdW5jdGlvbiBkaWxhdGUoYSwgYiwgZGlsYXRpb24pIHtcbiAgcmV0dXJuIGEgKyAoYiAtIGEpICogZGlsYXRpb247XG59O1xuXG4vKlxuICBEaXN0YW5jZVxuXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbnZhciBkaXN0YW5jZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBmdW5jdGlvbiBkaXN0YW5jZShhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBaRVJPX1BPSU5UO1xuXG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICB9IGVsc2Uge1xuICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICB2YXIgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgdmFyIHpEZWx0YSA9ICgwLCBfdXRpbHMuaXNOdW0pKGEueikgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdFxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG52YXIgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoZnJvbSwgdG8sIHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xufTtcblxuLypcbiAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG52YXIgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZnVuY3Rpb24gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZnJvbSwgdG8sIHByb2dyZXNzKSB7XG4gIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuXG4gIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xudmFyIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBmdW5jdGlvbiBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgfTtcbn07XG5cbi8qXG4gIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG52YXIgcmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uIHJhZGlhbnNUb0RlZ3JlZXMocmFkaWFucykge1xuICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKlxuICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xudmFyIHNtb290aCA9IGV4cG9ydHMuc21vb3RoID0gZnVuY3Rpb24gc21vb3RoKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24pIHtcbiAgdmFyIHNtb290aGluZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcbiAgcmV0dXJuIHRvRGVjaW1hbChvbGRWYWx1ZSArIGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpO1xufTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGZ1bmN0aW9uIHNwZWVkUGVyRnJhbWUoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh4cHMpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBmdW5jdGlvbiBzcGVlZFBlclNlY29uZCh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gZnJhbWVEdXJhdGlvbiA/IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xudmFyIHN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gc3RlcFByb2dyZXNzKHN0ZXBzLCBwcm9ncmVzcykge1xuICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgdmFyIHRhcmdldCA9IDEgLSAxIC8gc3RlcHM7XG4gIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WTJGc1l5NXFjeUpkTENKdVlXMWxjeUk2V3lKMGIwUmxZMmx0WVd3aUxDSnVkVzBpTENKd2NtVmphWE5wYjI0aUxDSk5ZWFJvSWl3aWNtOTFibVFpTENKYVJWSlBYMUJQU1U1VUlpd2llQ0lzSW5raUxDSjZJaXdpWkdsemRHRnVZMlV4UkNJc0ltRWlMQ0ppSWl3aVlXSnpJaXdpWVc1bmJHVWlMQ0p5WVdScFlXNXpWRzlFWldkeVpXVnpJaXdpWVhSaGJqSWlMQ0prWldkeVpXVnpWRzlTWVdScFlXNXpJaXdpWkdWbmNtVmxjeUlzSWxCSklpd2laR2xzWVhSbElpd2laR2xzWVhScGIyNGlMQ0prYVhOMFlXNWpaU0lzSW5oRVpXeDBZU0lzSW5sRVpXeDBZU0lzSW5wRVpXeDBZU0lzSW5OeGNuUWlMQ0puWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNJc0ltWnliMjBpTENKMGJ5SXNJblpoYkhWbElpd2laMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01pTENKd2NtOW5jbVZ6Y3lJc0luQnZhVzUwUm5KdmJVRnVaMnhsUVc1a1JHbHpkR0Z1WTJVaUxDSnZjbWxuYVc0aUxDSmpiM01pTENKemFXNGlMQ0p5WVdScFlXNXpJaXdpYzIxdmIzUm9JaXdpYm1WM1ZtRnNkV1VpTENKdmJHUldZV3gxWlNJc0ltUjFjbUYwYVc5dUlpd2ljMjF2YjNSb2FXNW5JaXdpYldGNElpd2ljM0JsWldSUVpYSkdjbUZ0WlNJc0luaHdjeUlzSW1aeVlXMWxSSFZ5WVhScGIyNGlMQ0p6Y0dWbFpGQmxjbE5sWTI5dVpDSXNJblpsYkc5amFYUjVJaXdpYzNSbGNGQnliMmR5WlhOeklpd2ljM1JsY0hNaUxDSnpaV2R0Wlc1MElpd2lkR0Z5WjJWMElpd2ljSEp2WjNKbGMzTlBabFJoY21kbGRDSXNJbTFwYmlJc0ltWnNiMjl5SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJPenRCUVVWQk96czdPenM3TzBGQlQwRXNTVUZCVFVFc1dVRkJXU3hUUVVGYVFTeFRRVUZaTEVOQlFVTkRMRWRCUVVRc1JVRkJkMEk3UVVGQlFTeE5RVUZzUWtNc1UwRkJhMElzZFVWQlFVNHNRMEZCVFRzN1FVRkRlRU5CTEhWQ1FVRlpMRVZCUVZvc1JVRkJhMEpCTEZOQlFXeENPMEZCUTBFc1UwRkJUME1zUzBGQlMwTXNTMEZCVEN4RFFVRlhTQ3hOUVVGTlF5eFRRVUZxUWl4SlFVRTRRa0VzVTBGQmNrTTdRVUZEUkN4RFFVaEVPenRCUVV0QkxFbEJRVTFITEdGQlFXRTdRVUZEYWtKRExFdEJRVWNzUTBGRVl6dEJRVVZxUWtNc1MwRkJSeXhEUVVaak8wRkJSMnBDUXl4TFFVRkhPMEZCU0dNc1EwRkJia0k3TzBGQlRVRXNTVUZCVFVNc1lVRkJZU3hUUVVGaVFTeFZRVUZoTEVOQlFVTkRMRU5CUVVRc1JVRkJTVU1zUTBGQlNqdEJRVUZCTEZOQlFWVlNMRXRCUVV0VExFZEJRVXdzUTBGQlUwWXNTVUZCU1VNc1EwRkJZaXhEUVVGV08wRkJRVUVzUTBGQmJrSTdPMEZCUlVFN096czdPenM3T3pzN1FVRlZUeXhKUVVGTlJTeDNRa0ZCVVN4VFFVRlNRU3hMUVVGUkxFTkJRVU5JTEVOQlFVUTdRVUZCUVN4TlFVRkpReXhEUVVGS0xIVkZRVUZSVGl4VlFVRlNPMEZCUVVFc1UwRkJkVUpUTEdsQ1FVRnBRbGdzUzBGQlMxa3NTMEZCVEN4RFFVRlhTaXhGUVVGRlNpeERRVUZHTEVkQlFVMUhMRVZCUVVWSUxFTkJRVzVDTEVWQlFYTkNTU3hGUVVGRlRDeERRVUZHTEVkQlFVMUpMRVZCUVVWS0xFTkJRVGxDTEVOQlFXcENMRU5CUVhaQ08wRkJRVUVzUTBGQlpEczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVlVzT0VOQlFXMUNMRk5CUVc1Q1FTeG5Ra0ZCYlVJc1EwRkJRME1zVDBGQlJEdEJRVUZCTEZOQlFXRkJMRlZCUVZWa0xFdEJRVXRsTEVWQlFXWXNSMEZCYjBJc1IwRkJha003UVVGQlFTeERRVUY2UWpzN1FVRkZVRHM3T3pzN096czdPenM3T3pzN096czdPMEZCYTBKUExFbEJRVTFETERCQ1FVRlRMRk5CUVZSQkxFMUJRVk1zUTBGQlExUXNRMEZCUkN4RlFVRkpReXhEUVVGS0xFVkJRVTlUTEZGQlFWQTdRVUZCUVN4VFFVRnZRbFlzU1VGQlN5eERRVUZEUXl4SlFVRkpSQ3hEUVVGTUxFbEJRVlZWTEZGQlFXNURPMEZCUVVFc1EwRkJaanM3UVVGRlVEczdPenM3T3pzN08wRkJVMDhzU1VGQlRVTXNPRUpCUVZjc1UwRkJXRUVzVVVGQlZ5eERRVUZEV0N4RFFVRkVMRVZCUVhWQ08wRkJRVUVzVFVGQmJrSkRMRU5CUVcxQ0xIVkZRVUZtVGl4VlFVRmxPenRCUVVNM1F6dEJRVU5CTEUxQlFVa3NhMEpCUVUxTExFTkJRVTRzUTBGQlNpeEZRVUZqTzBGQlExb3NWMEZCVDBRc1YwRkJWME1zUTBGQldDeEZRVUZqUXl4RFFVRmtMRU5CUVZBN08wRkJSVVk3UVVGRFF5eEhRVXBFTEUxQlNVODdRVUZEVEN4UlFVRk5WeXhUUVVGVFlpeFhRVUZYUXl4RlFVRkZTaXhEUVVGaUxFVkJRV2RDU3l4RlFVRkZUQ3hEUVVGc1FpeERRVUZtTzBGQlEwRXNVVUZCVFdsQ0xGTkJRVk5rTEZkQlFWZERMRVZCUVVWSUxFTkJRV0lzUlVGQlowSkpMRVZCUVVWS0xFTkJRV3hDTEVOQlFXWTdRVUZEUVN4UlFVRk5hVUlzVTBGQlZTeHJRa0ZCVFdRc1JVRkJSVVlzUTBGQlVpeERRVUZFTEVkQlFXVkRMRmRCUVZkRExFVkJRVVZHTEVOQlFXSXNSVUZCWjBKSExFVkJRVVZJTEVOQlFXeENMRU5CUVdZc1IwRkJjME1zUTBGQmNrUTdPMEZCUlVFc1YwRkJUMHdzUzBGQlMzTkNMRWxCUVV3c1EwRkJWU3hUUVVGRFNDeE5RVUZFTEVWQlFWY3NRMEZCV0N4aFFVRnBRa01zVFVGQmFrSXNSVUZCTWtJc1EwRkJNMElzWVVGQmFVTkRMRTFCUVdwRExFVkJRVEpETEVOQlFUTkRMRU5CUVZZc1EwRkJVRHRCUVVORU8wRkJRMFlzUTBGaVRUczdRVUZsVURzN096czdPenM3T3pzN08wRkJXVThzU1VGQlRVVXNjMFJCUVhWQ0xGTkJRWFpDUVN4dlFrRkJkVUlzUTBGQlEwTXNTVUZCUkN4RlFVRlBReXhGUVVGUUxFVkJRVmRETEV0QlFWZzdRVUZCUVN4VFFVRnhRaXhEUVVGRFFTeFJRVUZSUml4SlFVRlVMRXRCUVd0Q1F5eExRVUZMUkN4SlFVRjJRaXhEUVVGeVFqdEJRVUZCTEVOQlFUZENPenRCUVVWUU96czdPenM3T3pzN096dEJRVmRQTEVsQlFVMUhMSE5FUVVGMVFpeFRRVUYyUWtFc2IwSkJRWFZDTEVOQlFVTklMRWxCUVVRc1JVRkJUME1zUlVGQlVDeEZRVUZYUnl4UlFVRllPMEZCUVVFc1UwRkJlVUlzUTBGQlJVRXNVVUZCUml4SFFVRmhTaXhKUVVGa0xFZEJRWFZDU1N4WFFVRlhTQ3hGUVVGc1F5eEhRVUYzUTBRc1NVRkJhRVU3UVVGQlFTeERRVUUzUWpzN1FVRkZVRHM3T3pzN096czdRVUZSVHl4SlFVRk5TeXhuUlVGQk5FSXNVMEZCTlVKQkxIbENRVUUwUWl4RFFVRkRReXhOUVVGRUxFVkJRVk53UWl4TFFVRlVMRVZCUVdkQ1VTeFJRVUZvUWl4RlFVRTJRanRCUVVOd1JWSXNWVUZCVVVjc2FVSkJRV2xDU0N4TFFVRnFRaXhEUVVGU096dEJRVVZCTEZOQlFVODdRVUZEVEZBc1QwRkJSMlVzVjBGQlYyeENMRXRCUVVzclFpeEhRVUZNTEVOQlFWTnlRaXhMUVVGVUxFTkJRVmdzUjBGQk5rSnZRaXhQUVVGUE0wSXNRMEZFYkVNN1FVRkZURU1zVDBGQlIyTXNWMEZCVjJ4Q0xFdEJRVXRuUXl4SFFVRk1MRU5CUVZOMFFpeExRVUZVTEVOQlFWZ3NSMEZCTmtKdlFpeFBRVUZQTVVJN1FVRkdiRU1zUjBGQlVEdEJRVWxFTEVOQlVFMDdPMEZCVTFBN096czdPenRCUVUxUExFbEJRVTFQTERoRFFVRnRRaXhUUVVGdVFrRXNaMEpCUVcxQ0xFTkJRVU56UWl4UFFVRkVPMEZCUVVFc1UwRkJZVUVzVlVGQlZTeEhRVUZXTEVkQlFXZENha01zUzBGQlMyVXNSVUZCYkVNN1FVRkJRU3hEUVVGNlFqczdRVUZGVURzN096czdPenM3UVVGUlR5eEpRVUZOYlVJc01FSkJRVk1zVTBGQlZFRXNUVUZCVXl4RFFVRkRReXhSUVVGRUxFVkJRVmRETEZGQlFWZ3NSVUZCY1VKRExGRkJRWEpDTzBGQlFVRXNUVUZCSzBKRExGTkJRUzlDTEhWRlFVRXlReXhEUVVFelF6dEJRVUZCTEZOQlFXbEVla01zVlVGQlZYVkRMRmRCUVZsRExGbEJRVmxHTEZkQlFWZERMRkZCUVhaQ0xFbEJRVzFEY0VNc1MwRkJTM1ZETEVkQlFVd3NRMEZCVTBRc1UwRkJWQ3hGUVVGdlFrUXNVVUZCY0VJc1EwRkJla1FzUTBGQmFrUTdRVUZCUVN4RFFVRm1PenRCUVVWUU96czdPenM3UVVGTlR5eEpRVUZOUnl4M1EwRkJaMElzVTBGQmFFSkJMR0ZCUVdkQ0xFTkJRVU5ETEVkQlFVUXNSVUZCVFVNc1lVRkJUanRCUVVGQkxGTkJRWGxDTEd0Q1FVRk5SQ3hIUVVGT0xFTkJRVVFzUjBGQlpVRXNUMEZCVHl4UFFVRlBReXhoUVVGa0xFTkJRV1lzUjBGQk9FTXNRMEZCZEVVN1FVRkJRU3hEUVVGMFFqczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVU1zTUVOQlFXbENMRk5CUVdwQ1FTeGpRVUZwUWl4RFFVRkRReXhSUVVGRUxFVkJRVmRHTEdGQlFWZzdRVUZCUVN4VFFVRTJRa0VzWjBKQlFXZENSU3haUVVGWkxFOUJRVTlHTEdGQlFXNUNMRU5CUVdoQ0xFZEJRVzlFTEVOQlFXcEdPMEZCUVVFc1EwRkJka0k3TzBGQlJWQTdPenM3T3pzN1FVRlBUeXhKUVVGTlJ5eHpRMEZCWlN4VFFVRm1RU3haUVVGbExFTkJRVU5ETEV0QlFVUXNSVUZCVVd4Q0xGRkJRVklzUlVGQmNVSTdRVUZETDBNc1RVRkJUVzFDTEZWQlFWVXNTMEZCUzBRc1VVRkJVU3hEUVVGaUxFTkJRV2hDTzBGQlEwRXNUVUZCVFVVc1UwRkJVeXhKUVVGTExFbEJRVWxHTEV0QlFYaENPMEZCUTBFc1RVRkJUVWNzYlVKQlFXMUNha1FzUzBGQlMydEVMRWRCUVV3c1EwRkJVM1JDTEZkQlFWZHZRaXhOUVVGd1FpeEZRVUUwUWl4RFFVRTFRaXhEUVVGNlFqczdRVUZGUVN4VFFVRlBhRVFzUzBGQlMyMUVMRXRCUVV3c1EwRkJWMFlzYlVKQlFXMUNSaXhQUVVFNVFpeEpRVUY1UTBFc1QwRkJhRVE3UVVGRFJDeERRVTVOSWl3aVptbHNaU0k2SW1OaGJHTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk12WjJsMGFIVmlMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdselRuVnRJSDBnWm5KdmJTQW5MaTkxZEdsc2N5YzdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdiblZ0WW1WeUlIUnZJSGdnWkdWamFXMWhiQ0J3YkdGalpYTmNibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wxY2Jpb3ZYRzVqYjI1emRDQjBiMFJsWTJsdFlXd2dQU0FvYm5WdExDQndjbVZqYVhOcGIyNGdQU0F5S1NBOVBpQjdYRzRnSUhCeVpXTnBjMmx2YmlBOUlERXdJQ29xSUhCeVpXTnBjMmx2Ymp0Y2JpQWdjbVYwZFhKdUlFMWhkR2d1Y205MWJtUW9iblZ0SUNvZ2NISmxZMmx6YVc5dUtTQXZJSEJ5WldOcGMybHZianRjYm4wN1hHNWNibU52Ym5OMElGcEZVazlmVUU5SlRsUWdQU0I3WEc0Z0lIZzZJREFzWEc0Z0lIazZJREFzWEc0Z0lIbzZJREJjYm4wN1hHNWNibU52Ym5OMElHUnBjM1JoYm1ObE1VUWdQU0FvWVN3Z1lpa2dQVDRnVFdGMGFDNWhZbk1vWVNBdElHSXBPMXh1WEc0dktseHVJQ0JCYm1kc1pTQmlaWFIzWldWdUlIQnZhVzUwYzF4dVhHNGdJRlJ5WVc1emJHRjBaWE1nZEdobElHaDVjRzkwYUdWMGFXTmhiQ0JzYVc1bElITnZJSFJvWVhRZ2RHaGxJQ2RtY205dEp5QmpiMjl5WkdsdVlYUmxjMXh1SUNCaGNtVWdZWFFnTUN3d1hHNWNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUJZSUdGdVpDQlpJR052YjNKa2FXNWhkR1Z6SUc5bUlHWnliMjBnY0c5cGJuUmNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUJZSUdGdVpDQlpJR052Y21ScGJtRjBaWE1nYjJZZ2RHOGdjRzlwYm5SY2JpQWdRSEpsZEhWeWJpQmJjbUZrYVdGdVhUb2dRVzVuYkdVZ1ltVjBkMlZsYmlCMGFHVWdkSGR2SUhCdmFXNTBjeUJwYmlCeVlXUnBZVzV6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdGdVoyeGxJRDBnS0dFc0lHSWdQU0JhUlZKUFgxQlBTVTVVS1NBOVBpQnlZV1JwWVc1elZHOUVaV2R5WldWektFMWhkR2d1WVhSaGJqSW9ZaTU1SUMwZ1lTNTVMQ0JpTG5nZ0xTQmhMbmdwS1R0Y2JseHVMeXBjYmlBZ1EyOXVkbVZ5ZENCa1pXZHlaV1Z6SUhSdklISmhaR2xoYm5OY2JseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJR1JsWjNKbFpYTmNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdhVzRnY21Ga2FXRnVjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrWldkeVpXVnpWRzlTWVdScFlXNXpJRDBnS0dSbFozSmxaWE1wSUQwK0lHUmxaM0psWlhNZ0tpQk5ZWFJvTGxCSklDOGdNVGd3TzF4dVhHNHZLbHh1SUNCRWFXeGhkR1ZjYmx4dUlDQkRhR0Z1WjJVZ2RHaGxJSEJ5YjJkeVpYTnphVzl1SUdKbGRIZGxaVzRnWVNCaGJtUWdZaUJoWTJOdmNtUnBibWNnZEc4Z1pHbHNZWFJwYjI0dVhHNWNiaUFnVTI4Z1pHbHNZWFJwYjI0Z1BTQXdMalVnZDI5MWJHUWdZMmhoYm1kbFhHNWNiaUFnWVNBdExTMHRMUzB0TFMwZ1lseHVYRzRnSUhSdlhHNWNiaUFnWVNBdExTMHRJR0pjYmx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVScGJHRjBaU0J3Y205bmNtVnpjeUJpZVNCNFhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRkJ5WlhacGIzVnpJSFpoYkhWbElIQnNkWE1nZEdobElHUnBiR0YwWldRZ1pHbG1abVZ5Wlc1alpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmthV3hoZEdVZ1BTQW9ZU3dnWWl3Z1pHbHNZWFJwYjI0cElEMCtJR0VnS3lBb0tHSWdMU0JoS1NBcUlHUnBiR0YwYVc5dUtUdGNibHh1THlwY2JpQWdSR2x6ZEdGdVkyVmNibHh1SUNCU1pYUjFjbTV6SUhSb1pTQmthWE4wWVc1alpTQmlaWFIzWldWdUlIUjNieUJ1SUdScGJXVnVjMmx2Ym1Gc0lIQnZhVzUwY3k1Y2JseHVJQ0JBY0dGeVlXMGdXMjlpYW1WamRDOXVkVzFpWlhKZE9pQjRJR0Z1WkNCNUlHOXlJR3AxYzNRZ2VDQnZaaUJ3YjJsdWRDQkJYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBMMjUxYldKbGNsMDZJQ2h2Y0hScGIyNWhiQ2s2SUhnZ1lXNWtJSGtnYjNJZ2FuVnpkQ0I0SUc5bUlIQnZhVzUwSUVKY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWR2hsSUdScGMzUmhibU5sSUdKbGRIZGxaVzRnZEdobElIUjNieUJ3YjJsdWRITmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaR2x6ZEdGdVkyVWdQU0FvWVN3Z1lpQTlJRnBGVWs5ZlVFOUpUbFFwSUQwK0lIdGNiaUFnTHk4Z01VUWdaR2x0Wlc1emFXOXVjMXh1SUNCcFppQW9hWE5PZFcwb1lTa3BJSHRjYmlBZ0lDQnlaWFIxY200Z1pHbHpkR0Z1WTJVeFJDaGhMQ0JpS1R0Y2JseHVJQ0F2THlCTmRXeDBhUzFrYVcxbGJuTnBiMjVoYkZ4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUdOdmJuTjBJSGhFWld4MFlTQTlJR1JwYzNSaGJtTmxNVVFvWVM1NExDQmlMbmdwTzF4dUlDQWdJR052Ym5OMElIbEVaV3gwWVNBOUlHUnBjM1JoYm1ObE1VUW9ZUzU1TENCaUxua3BPMXh1SUNBZ0lHTnZibk4wSUhwRVpXeDBZU0E5SUNocGMwNTFiU2hoTG5vcEtTQS9JR1JwYzNSaGJtTmxNVVFvWVM1NkxDQmlMbm9wSURvZ01EdGNibHh1SUNBZ0lISmxkSFZ5YmlCTllYUm9Mbk54Y25Rb0tIaEVaV3gwWVNBcUtpQXlLU0FySUNoNVJHVnNkR0VnS2lvZ01pa2dLeUFvZWtSbGJIUmhJQ29xSURJcEtUdGNiaUFnZlZ4dWZUdGNibHh1THlwY2JpQWdVSEp2WjNKbGMzTWdkMmwwYUdsdUlHZHBkbVZ1SUhKaGJtZGxYRzVjYmlBZ1IybDJaVzRnWVNCc2IzZGxjaUJzYVcxcGRDQmhibVFnWVc0Z2RYQndaWElnYkdsdGFYUXNJSGRsSUhKbGRIVnliaUIwYUdVZ2NISnZaM0psYzNOY2JpQWdLR1Y0Y0hKbGMzTmxaQ0JoY3lCaElHNTFiV0psY2lBd0xURXBJSEpsY0hKbGMyVnVkR1ZrSUdKNUlIUm9aU0JuYVhabGJpQjJZV3gxWlN3Z1lXNWtYRzRnSUd4cGJXbDBJSFJvWVhRZ2NISnZaM0psYzNNZ2RHOGdkMmwwYUdsdUlEQXRNUzVjYmx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeHZkMlZ5SUd4cGJXbDBYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlhCd1pYSWdiR2x0YVhSY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCMGJ5Qm1hVzVrSUhCeWIyZHlaWE56SUhkcGRHaHBiaUJuYVhabGJpQnlZVzVuWlZ4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlFjbTluY21WemN5QnZaaUIyWVd4MVpTQjNhWFJvYVc0Z2NtRnVaMlVnWVhNZ1pYaHdjbVZ6YzJWa0lEQXRNVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNBOUlDaG1jbTl0TENCMGJ5d2dkbUZzZFdVcElEMCtJQ2gyWVd4MVpTQXRJR1p5YjIwcElDOGdLSFJ2SUMwZ1puSnZiU2s3WEc1Y2JpOHFYRzRnSUZaaGJIVmxJR2x1SUhKaGJtZGxJR1p5YjIwZ2NISnZaM0psYzNOY2JseHVJQ0JIYVhabGJpQmhJR3h2ZDJWeUlHeHBiV2wwSUdGdVpDQmhiaUIxY0hCbGNpQnNhVzFwZEN3Z2QyVWdjbVYwZFhKdUlIUm9aU0IyWVd4MVpTQjNhWFJvYVc1Y2JpQWdkR2hoZENCeVlXNW5aU0JoY3lCbGVIQnlaWE56WldRZ1lua2djSEp2WjNKbGMzTWdLR0VnYm5WdFltVnlJR1p5YjIwZ01DMHhLVnh1WEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RHOTNaWElnYkdsdGFYUWdiMllnY21GdVoyVmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWY0hCbGNpQnNhVzFwZENCdlppQnlZVzVuWlZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGUm9aU0J3Y205bmNtVnpjeUJpWlhSM1pXVnVJR3h2ZDJWeUlHRnVaQ0IxY0hCbGNpQnNhVzFwZEhNZ1pYaHdjbVZ6YzJWa0lEQXRNVnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JoY3lCallXeGpkV3hoZEdWa0lHWnliMjBnY0hKdlozSmxjM01nZDJsMGFHbHVJSEpoYm1kbElDaHViM1FnYkdsdGFYUmxaQ0IzYVhSb2FXNGdjbUZ1WjJVcFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpJRDBnS0daeWIyMHNJSFJ2TENCd2NtOW5jbVZ6Y3lrZ1BUNGdLQzBnY0hKdlozSmxjM01nS2lCbWNtOXRLU0FySUNod2NtOW5jbVZ6Y3lBcUlIUnZLU0FySUdaeWIyMDdYRzVjYmk4cVhHNGdJRkJ2YVc1MElHWnliMjBnWVc1bmJHVWdZVzVrSUdScGMzUmhibU5sWEc1Y2JpQWdRSEJoY21GdElGdHZZbXBsWTNSZE9pQXlSQ0J3YjJsdWRDQnZaaUJ2Y21sbmFXNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJCYm1kc1pTQm1jbTl0SUc5eWFXZHBibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVScGMzUmhibU5sSUdaeWIyMGdiM0pwWjJsdVhHNGdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMDZJRU5oYkdOMWJHRjBaV1FnTWtRZ2NHOXBiblJjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY0c5cGJuUkdjbTl0UVc1bmJHVkJibVJFYVhOMFlXNWpaU0E5SUNodmNtbG5hVzRzSUdGdVoyeGxMQ0JrYVhOMFlXNWpaU2tnUFQ0Z2UxeHVJQ0JoYm1kc1pTQTlJR1JsWjNKbFpYTlViMUpoWkdsaGJuTW9ZVzVuYkdVcE8xeHVYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdlRG9nWkdsemRHRnVZMlVnS2lCTllYUm9MbU52Y3loaGJtZHNaU2tnS3lCdmNtbG5hVzR1ZUN4Y2JpQWdJQ0I1T2lCa2FYTjBZVzVqWlNBcUlFMWhkR2d1YzJsdUtHRnVaMnhsS1NBcklHOXlhV2RwYmk1NVhHNGdJSDA3WEc1OU8xeHVYRzR2S2x4dUlDQkRiMjUyWlhKMElISmhaR2xoYm5NZ2RHOGdaR1ZuY21WbGMxeHVYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdhVzRnY21Ga2FXRnVjMXh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCa1pXZHlaV1Z6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhKaFpHbGhibk5VYjBSbFozSmxaWE1nUFNBb2NtRmthV0Z1Y3lrZ1BUNGdjbUZrYVdGdWN5QXFJREU0TUNBdklFMWhkR2d1VUVrN1hHNWNiaThxWEc0Z0lFWnlZVzFsY21GMFpTMXBibVJsY0dWdVpHVnVkQ0J6Ylc5dmRHaHBibWRjYmx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFNWxkeUIyWVd4MVpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRTlzWkNCMllXeDFaVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVaeVlXMWxJR1IxY21GMGFXOXVYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYU0FvYjNCMGFXOXVZV3dwT2lCVGJXOXZkR2hwYm1jZ0tEQWdhWE1nYm05dVpTbGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjMjF2YjNSb0lEMGdLRzVsZDFaaGJIVmxMQ0J2YkdSV1lXeDFaU3dnWkhWeVlYUnBiMjRzSUhOdGIyOTBhR2x1WnlBOUlEQXBJRDArSUhSdlJHVmphVzFoYkNodmJHUldZV3gxWlNBcklDaGtkWEpoZEdsdmJpQXFJQ2h1WlhkV1lXeDFaU0F0SUc5c1pGWmhiSFZsS1NBdklFMWhkR2d1YldGNEtITnRiMjkwYUdsdVp5d2daSFZ5WVhScGIyNHBLU2s3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnZUNCd1pYSWdjMlZqYjI1a0lIUnZJSEJsY2lCbWNtRnRaU0IyWld4dlkybDBlU0JpWVhObFpDQnZiaUJtY0hOY2JseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ1YVhRZ2NHVnlJSE5sWTI5dVpGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVp5WVcxbElHUjFjbUYwYVc5dUlHbHVJRzF6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOd1pXVmtVR1Z5Um5KaGJXVWdQU0FvZUhCekxDQm1jbUZ0WlVSMWNtRjBhVzl1S1NBOVBpQW9hWE5PZFcwb2VIQnpLU2tnUHlCNGNITWdMeUFvTVRBd01DQXZJR1p5WVcxbFJIVnlZWFJwYjI0cElEb2dNRHRjYmx4dUx5cGNiaUFnUTI5dWRtVnlkQ0IyWld4dlkybDBlU0JwYm5SdklIWmxiR2xqYVhSNUlIQmxjaUJ6WldOdmJtUmNibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWdWFYUWdjR1Z5SUdaeVlXMWxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNGdhVzRnYlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQmxaV1JRWlhKVFpXTnZibVFnUFNBb2RtVnNiMk5wZEhrc0lHWnlZVzFsUkhWeVlYUnBiMjRwSUQwK0lHWnlZVzFsUkhWeVlYUnBiMjRnUHlCMlpXeHZZMmwwZVNBcUlDZ3hNREF3SUM4Z1puSmhiV1ZFZFhKaGRHbHZiaWtnT2lBd08xeHVYRzR2S2x4dUlDQkRjbVZoZEdVZ2MzUmxjSEJsWkNCMlpYSnphVzl1SUc5bUlEQXRNU0J3Y205bmNtVnpjMXh1WEc0Z0lFQndZWEpoYlNCYmFXNTBYVG9nVG5WdFltVnlJRzltSUhOMFpYQnpYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJUZEdWd2NHVmtJSFpoYkhWbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITjBaWEJRY205bmNtVnpjeUE5SUNoemRHVndjeXdnY0hKdlozSmxjM01wSUQwK0lIdGNiaUFnWTI5dWMzUWdjMlZuYldWdWRDQTlJREVnTHlBb2MzUmxjSE1nTFNBeEtUdGNiaUFnWTI5dWMzUWdkR0Z5WjJWMElEMGdNU0F0SUNneElDOGdjM1JsY0hNcE8xeHVJQ0JqYjI1emRDQndjbTluY21WemMwOW1WR0Z5WjJWMElEMGdUV0YwYUM1dGFXNG9jSEp2WjNKbGMzTWdMeUIwWVhKblpYUXNJREVwTzF4dVhHNGdJSEpsZEhWeWJpQk5ZWFJvTG1ac2IyOXlLSEJ5YjJkeVpYTnpUMlpVWVhKblpYUWdMeUJ6WldkdFpXNTBLU0FxSUhObFoyMWxiblE3WEc1OU8xeHVJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jL2NhbGMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmJlemllciA9IGV4cG9ydHMuYmxlbmRDb2xvciA9IGV4cG9ydHMuYWxwaGEgPSBleHBvcnRzLmNvbG9yID0gZXhwb3J0cy5oc2xhID0gZXhwb3J0cy5yZ2JhID0gZXhwb3J0cy5yZ2JVbml0ID0gZXhwb3J0cy5weCA9IGV4cG9ydHMuZGVncmVlcyA9IGV4cG9ydHMucGVyY2VudCA9IGV4cG9ydHMudHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSBleHBvcnRzLnN0ZXBzID0gZXhwb3J0cy5zbmFwID0gZXhwb3J0cy5zbW9vdGggPSBleHBvcnRzLndyYXAgPSBleHBvcnRzLm5vbmxpbmVhclNwcmluZyA9IGV4cG9ydHMuc3ByaW5nID0gZXhwb3J0cy5nZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gZXhwb3J0cy5tdWx0aXBseSA9IGV4cG9ydHMuZGl2aWRlID0gZXhwb3J0cy5hZGQgPSBleHBvcnRzLnN1YnRyYWN0ID0gZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGV4cG9ydHMuZmxvdyA9IGV4cG9ydHMucGlwZSA9IGV4cG9ydHMuY29uZGl0aW9uYWwgPSBleHBvcnRzLmNsYW1wID0gZXhwb3J0cy5jbGFtcE1pbiA9IGV4cG9ydHMuY2xhbXBNYXggPSBleHBvcnRzLmFwcGx5T2Zmc2V0ID0gZXhwb3J0cy5hcHBlbmRVbml0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuL2NhbGMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF9wYXJzZXJzID0gcmVxdWlyZSgnLi9wYXJzZXJzJyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCh2KSB7XG4gIHJldHVybiB2O1xufTtcblxuLyoqXG4gKiBBcHBlbmQgVW5pdFxuICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYXBwZW5kXG4gKiBhcHBlbmRVbml0KCdweCcsIDIwKSAtPiAnMjBweCdcbiAqIEBwYXJhbSAge3N0cmluZ30gdW5pdClcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGFwcGVuZFVuaXQgPSBleHBvcnRzLmFwcGVuZFVuaXQgPSBmdW5jdGlvbiBhcHBlbmRVbml0KHVuaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuICcnICsgdiArIHVuaXQ7XG4gIH07XG59O1xuXG4vKipcbiAqIEFwcGx5IG9mZnNldFxuICogQSBmdW5jdGlvbiB0aGF0LCBnaXZlbiBhIHZhbHVlLCB3aWxsIGdldCB0aGUgb2Zmc2V0IGZyb20gYGZyb21gXG4gKiBhbmQgYXBwbHkgaXQgdG8gYHRvYFxuICogQHBhcmFtICB7bnVtYmVyfSBmcm9tXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHRvXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xudmFyIGFwcGx5T2Zmc2V0ID0gZXhwb3J0cy5hcHBseU9mZnNldCA9IGZ1bmN0aW9uIGFwcGx5T2Zmc2V0KGZyb20sIHRvKSB7XG4gIHZhciBnZXRPZmZzZXQgPSBzdWJ0cmFjdChmcm9tKTtcbiAgdmFyIGFwcGx5T2Zmc2V0VG8gPSBhZGQodG8pO1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gYXBwbHlPZmZzZXRUbyhnZXRPZmZzZXQodikpO1xuICB9O1xufTtcblxuLyoqXG4gKiBDbGFtcCB2YWx1ZSBiZXR3ZWVuXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlc3RyaWN0IGEgZ2l2ZW4gdmFsdWUgYmV0d2VlbiBgbWluYCBhbmQgYG1heGBcbiAqIEBwYXJhbSAge251bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgY2xhbXBNYXggPSBleHBvcnRzLmNsYW1wTWF4ID0gZnVuY3Rpb24gY2xhbXBNYXgobWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBNYXRoLm1pbih2LCBtYXgpO1xuICB9O1xufTtcbnZhciBjbGFtcE1pbiA9IGV4cG9ydHMuY2xhbXBNaW4gPSBmdW5jdGlvbiBjbGFtcE1pbihtaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KHYsIG1pbik7XG4gIH07XG59O1xudmFyIGNsYW1wID0gZXhwb3J0cy5jbGFtcCA9IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4KSB7XG4gIHZhciBfbWluID0gY2xhbXBNaW4obWluKTtcbiAgdmFyIF9tYXggPSBjbGFtcE1heChtYXgpO1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gX21pbihfbWF4KHYpKTtcbiAgfTtcbn07XG5cbnZhciBjb25kaXRpb25hbCA9IGV4cG9ydHMuY29uZGl0aW9uYWwgPSBmdW5jdGlvbiBjb25kaXRpb25hbChjb25kaXRpb24sIGlmVHJ1ZSkge1xuICB2YXIgaWZGYWxzZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbm9vcDtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2LCBhY3Rpb24pIHtcbiAgICByZXR1cm4gY29uZGl0aW9uKHYsIGFjdGlvbikgPyBpZlRydWUodiwgYWN0aW9uKSA6IGlmRmFsc2UodiwgYWN0aW9uKTtcbiAgfTtcbn07XG5cbi8qKlxuICogUGlwZVxuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogcGlwZShtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG52YXIgcGlwZSA9IGV4cG9ydHMucGlwZSA9IGZ1bmN0aW9uIHBpcGUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB0cmFuc2Zvcm1lcnMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB0cmFuc2Zvcm1lcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoYWNjKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgdiA9IGFjYztcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0uYXBwbHkodHJhbnNmb3JtZXJzLCBbdl0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG5cbi8vIERlcHJlY2F0ZWQ6IFJlbW92ZSBpbiA3LjEuMFxudmFyIGZsb3cgPSBleHBvcnRzLmZsb3cgPSBwaXBlO1xuXG4vKipcbiAqIEludGVycG9sYXRlIGZyb20gc2V0IG9mIHZhbHVlcyB0byBhbm90aGVyXG4gKiBAcGFyYW0gIHtBcnJheX0gaW5wdXQgYXJyYXlcbiAqIEBwYXJhbSAge0FycmF5fSBvdXRwdXRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSByYW5nZUVhc2luZ1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbnZhciBpbnRlcnBvbGF0ZSA9IGV4cG9ydHMuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiBpbnRlcnBvbGF0ZShpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykge1xuICB2YXIgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIHZhciBmaW5hbEluZGV4ID0gcmFuZ2VMZW5ndGggLSAxO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgdmFyIGkgPSAxO1xuXG4gICAgLy8gRmluZCBpbmRleCBvZiByYW5nZSBzdGFydFxuICAgIGZvciAoOyBpIDwgcmFuZ2VMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlucHV0W2ldID4gdiB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9ncmVzc0luUmFuZ2UgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGlucHV0W2kgLSAxXSwgaW5wdXRbaV0sIHYpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gcmFuZ2VFYXNpbmcgPyByYW5nZUVhc2luZ1tpIC0gMV0ocHJvZ3Jlc3NJblJhbmdlKSA6IHByb2dyZXNzSW5SYW5nZTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShvdXRwdXRbaSAtIDFdLCBvdXRwdXRbaV0sIGVhc2VkUHJvZ3Jlc3MpO1xuICB9O1xufTtcblxudmFyIHN1YnRyYWN0ID0gZXhwb3J0cy5zdWJ0cmFjdCA9IGZ1bmN0aW9uIHN1YnRyYWN0KG9yaWdpbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdiAtIG9yaWdpbjtcbiAgfTtcbn07XG52YXIgYWRkID0gZXhwb3J0cy5hZGQgPSBmdW5jdGlvbiBhZGQob3JpZ2luKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2ICsgb3JpZ2luO1xuICB9O1xufTtcbnZhciBkaXZpZGUgPSBleHBvcnRzLmRpdmlkZSA9IGZ1bmN0aW9uIGRpdmlkZShvcmlnaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYgLyBvcmlnaW47XG4gIH07XG59O1xudmFyIG11bHRpcGx5ID0gZXhwb3J0cy5tdWx0aXBseSA9IGZ1bmN0aW9uIG11bHRpcGx5KG9yaWdpbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdiAqIG9yaWdpbjtcbiAgfTtcbn07XG5cbnZhciBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gZXhwb3J0cy5nZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gZnVuY3Rpb24gZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZygpIHtcbiAgdmFyIGFsdGVyRGlzcGxhY2VtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBub29wO1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnN0YW50LCBvcmlnaW4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgIHZhciBkaXNwbGFjZW1lbnQgPSBvcmlnaW4gLSB2O1xuICAgICAgdmFyIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50ID0gLWNvbnN0YW50ICogKDAgLSBhbHRlckRpc3BsYWNlbWVudChNYXRoLmFicyhkaXNwbGFjZW1lbnQpKSk7XG4gICAgICByZXR1cm4gZGlzcGxhY2VtZW50IDw9IDAgPyBvcmlnaW4gKyBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudCA6IG9yaWdpbiAtIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50O1xuICAgIH07XG4gIH07XG59O1xuXG52YXIgc3ByaW5nID0gZXhwb3J0cy5zcHJpbmcgPSBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nKCk7XG52YXIgbm9ubGluZWFyU3ByaW5nID0gZXhwb3J0cy5ub25saW5lYXJTcHJpbmcgPSBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nKE1hdGguc3FydCk7XG5cbnZhciB3cmFwID0gZXhwb3J0cy53cmFwID0gZnVuY3Rpb24gd3JhcChtaW4sIG1heCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgcmFuZ2VTaXplID0gbWF4IC0gbWluO1xuICAgIHJldHVybiAoKHYgLSBtaW4pICUgcmFuZ2VTaXplICsgcmFuZ2VTaXplKSAlIHJhbmdlU2l6ZSArIG1pbjtcbiAgfTtcbn07XG5cbnZhciBzbW9vdGggPSBleHBvcnRzLnNtb290aCA9IGZ1bmN0aW9uIHNtb290aCgpIHtcbiAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiA1MDtcblxuICB2YXIgcHJldmlvdXNWYWx1ZSA9IDA7XG4gIHZhciBsYXN0VXBkYXRlZCA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGN1cnJlbnRGcmFtZXN0YW1wID0gKDAsIF9mcmFtZXN5bmMuY3VycmVudEZyYW1lVGltZXN0YW1wKSgpO1xuICAgIHZhciB0aW1lRGVsdGEgPSBjdXJyZW50RnJhbWVzdGFtcCAhPT0gbGFzdFVwZGF0ZWQgPyBjdXJyZW50RnJhbWVzdGFtcCAtIGxhc3RVcGRhdGVkIDogMDtcbiAgICB2YXIgbmV3VmFsdWUgPSB0aW1lRGVsdGEgPyAoMCwgX2NhbGMuc21vb3RoKSh2LCBwcmV2aW91c1ZhbHVlLCB0aW1lRGVsdGEsIHN0cmVuZ3RoKSA6IHByZXZpb3VzVmFsdWU7XG4gICAgbGFzdFVwZGF0ZWQgPSBjdXJyZW50RnJhbWVzdGFtcDtcbiAgICBwcmV2aW91c1ZhbHVlID0gbmV3VmFsdWU7XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xuICB9O1xufTtcblxudmFyIHNuYXAgPSBleHBvcnRzLnNuYXAgPSBmdW5jdGlvbiBzbmFwKHBvaW50cykge1xuICBpZiAodHlwZW9mIHBvaW50cyA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHYgLyBwb2ludHMpICogcG9pbnRzO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBudW1Qb2ludHMgPSBwb2ludHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICB2YXIgbGFzdERpc3RhbmNlID0gTWF0aC5hYnMocG9pbnRzWzBdIC0gdik7XG5cbiAgICAgIGZvciAoaSA9IDE7IGkgPCBudW1Qb2ludHM7IGkrKykge1xuICAgICAgICB2YXIgcG9pbnQgPSBwb2ludHNbaV07XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKHBvaW50IC0gdik7XG5cbiAgICAgICAgaWYgKGRpc3RhbmNlID09PSAwKSByZXR1cm4gcG9pbnQ7XG5cbiAgICAgICAgaWYgKGRpc3RhbmNlID4gbGFzdERpc3RhbmNlKSByZXR1cm4gcG9pbnRzW2kgLSAxXTtcblxuICAgICAgICBpZiAoaSA9PT0gbnVtUG9pbnRzIC0gMSkgcmV0dXJuIHBvaW50O1xuXG4gICAgICAgIGxhc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG5cbnZhciBzdGVwcyA9IGV4cG9ydHMuc3RlcHMgPSBmdW5jdGlvbiBzdGVwcyhfc3RlcHMpIHtcbiAgdmFyIG1pbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgdmFyIG1heCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMTtcbiAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogJ3N0YXJ0JztcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHByb2dyZXNzID0gKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShtaW4sIG1heCwgdik7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykobWluLCBtYXgsICgwLCBfY2FsYy5zdGVwUHJvZ3Jlc3MpKF9zdGVwcywgcHJvZ3Jlc3MsIGRpcmVjdGlvbikpO1xuICB9O1xufTtcblxudmFyIHRyYW5zZm9ybUNoaWxkVmFsdWVzID0gZXhwb3J0cy50cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IGZ1bmN0aW9uIHRyYW5zZm9ybUNoaWxkVmFsdWVzKGNoaWxkVHJhbnNmb3JtZXJzKSB7XG4gIHZhciBtdXRhYmxlU3RhdGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZm9yICh2YXIga2V5IGluIHYpIHtcbiAgICAgIHZhciBjaGlsZFRyYW5zZm9ybWVyID0gY2hpbGRUcmFuc2Zvcm1lcnNba2V5XTtcbiAgICAgIGlmIChjaGlsZFRyYW5zZm9ybWVyKSB7XG4gICAgICAgIG11dGFibGVTdGF0ZVtrZXldID0gY2hpbGRUcmFuc2Zvcm1lcih2W2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtdXRhYmxlU3RhdGU7XG4gIH07XG59O1xuXG4vLyBVbml0IHRyYW5zZm9ybWVyc1xudmFyIHBlcmNlbnQgPSBleHBvcnRzLnBlcmNlbnQgPSBhcHBlbmRVbml0KCclJyk7XG52YXIgZGVncmVlcyA9IGV4cG9ydHMuZGVncmVlcyA9IGFwcGVuZFVuaXQoJ2RlZycpO1xudmFyIHB4ID0gZXhwb3J0cy5weCA9IGFwcGVuZFVuaXQoJ3B4Jyk7XG5cbnZhciByZ2JVbml0ID0gZXhwb3J0cy5yZ2JVbml0ID0gcGlwZShjbGFtcCgwLCAyNTUpLCBNYXRoLnJvdW5kKTtcblxudmFyIHJnYmFUZW1wbGF0ZSA9IGZ1bmN0aW9uIHJnYmFUZW1wbGF0ZShfcmVmKSB7XG4gIHZhciByZWQgPSBfcmVmLnJlZCxcbiAgICAgIGdyZWVuID0gX3JlZi5ncmVlbixcbiAgICAgIGJsdWUgPSBfcmVmLmJsdWUsXG4gICAgICBfcmVmJGFscGhhID0gX3JlZi5hbHBoYSxcbiAgICAgIGFscGhhID0gX3JlZiRhbHBoYSA9PT0gdW5kZWZpbmVkID8gMSA6IF9yZWYkYWxwaGE7XG4gIHJldHVybiAncmdiYSgnICsgcmVkICsgJywgJyArIGdyZWVuICsgJywgJyArIGJsdWUgKyAnLCAnICsgYWxwaGEgKyAnKSc7XG59O1xuXG52YXIgcmdiYSA9IGV4cG9ydHMucmdiYSA9IHBpcGUodHJhbnNmb3JtQ2hpbGRWYWx1ZXMoe1xuICByZWQ6IHJnYlVuaXQsXG4gIGdyZWVuOiByZ2JVbml0LFxuICBibHVlOiByZ2JVbml0LFxuICBhbHBoYTogYWxwaGFcbn0pLCByZ2JhVGVtcGxhdGUpO1xuXG52YXIgaHNsYVRlbXBsYXRlID0gZnVuY3Rpb24gaHNsYVRlbXBsYXRlKF9yZWYyKSB7XG4gIHZhciBodWUgPSBfcmVmMi5odWUsXG4gICAgICBzYXR1cmF0aW9uID0gX3JlZjIuc2F0dXJhdGlvbixcbiAgICAgIGxpZ2h0bmVzcyA9IF9yZWYyLmxpZ2h0bmVzcyxcbiAgICAgIF9yZWYyJGFscGhhID0gX3JlZjIuYWxwaGEsXG4gICAgICBhbHBoYSA9IF9yZWYyJGFscGhhID09PSB1bmRlZmluZWQgPyAxIDogX3JlZjIkYWxwaGE7XG4gIHJldHVybiAnaHNsYSgnICsgaHVlICsgJywgJyArIHNhdHVyYXRpb24gKyAnLCAnICsgbGlnaHRuZXNzICsgJywgJyArIGFscGhhICsgJyknO1xufTtcblxudmFyIGhzbGEgPSBleHBvcnRzLmhzbGEgPSBwaXBlKHRyYW5zZm9ybUNoaWxkVmFsdWVzKHtcbiAgaHVlOiBwYXJzZUludCxcbiAgc2F0dXJhdGlvbjogcGVyY2VudCxcbiAgbGlnaHRuZXNzOiBwZXJjZW50LFxuICBhbHBoYTogYWxwaGFcbn0pLCBoc2xhVGVtcGxhdGUpO1xuXG52YXIgY29sb3IgPSBleHBvcnRzLmNvbG9yID0gZnVuY3Rpb24gY29sb3Iodikge1xuICBpZiAodi5oYXNPd25Qcm9wZXJ0eSgncmVkJykpIHtcbiAgICByZXR1cm4gcmdiYSh2KTtcbiAgfSBlbHNlIGlmICh2Lmhhc093blByb3BlcnR5KCdodWUnKSkge1xuICAgIHJldHVybiBoc2xhKHYpO1xuICB9XG4gIHJldHVybiB2O1xufTtcblxudmFyIGFscGhhID0gZXhwb3J0cy5hbHBoYSA9IGNsYW1wKDAsIDEpO1xuXG52YXIgYmxlbmQgPSBmdW5jdGlvbiBibGVuZChmcm9tLCB0bywgdikge1xuICB2YXIgZnJvbUV4cG8gPSBmcm9tICogZnJvbTtcbiAgdmFyIHRvRXhwbyA9IHRvICogdG87XG4gIHJldHVybiBNYXRoLnNxcnQodiAqICh0b0V4cG8gLSBmcm9tRXhwbykgKyBmcm9tRXhwbyk7XG59O1xuLy8gaHR0cDovL2NvZGVwZW4uaW8vb3N1Ymxha2UvcGVuL3hHVlZhTlxudmFyIGJsZW5kQ29sb3IgPSBleHBvcnRzLmJsZW5kQ29sb3IgPSBmdW5jdGlvbiBibGVuZENvbG9yKGZyb20sIHRvKSB7XG4gIHZhciBmcm9tQ29sb3IgPSAoMCwgX3V0aWxzLmlzU3RyaW5nKShmcm9tKSA/ICgwLCBfcGFyc2Vycy5jb2xvcikoZnJvbSkgOiBmcm9tO1xuICB2YXIgdG9Db2xvciA9ICgwLCBfdXRpbHMuaXNTdHJpbmcpKHRvKSA/ICgwLCBfcGFyc2Vycy5jb2xvcikodG8pIDogdG87XG5cbiAgdmFyIGJsZW5kZWQgPSBfZXh0ZW5kcyh7fSwgZnJvbUNvbG9yKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gYmxlbmRlZCkge1xuICAgICAgYmxlbmRlZFtrZXldID0gYmxlbmQoZnJvbUNvbG9yW2tleV0sIHRvQ29sb3Jba2V5XSwgdik7XG4gICAgfVxuICAgIGJsZW5kZWQucmVkID0gYmxlbmQoZnJvbUNvbG9yLnJlZCwgdG9Db2xvci5yZWQsIHYpO1xuICAgIGJsZW5kZWQuZ3JlZW4gPSBibGVuZChmcm9tQ29sb3IuZ3JlZW4sIHRvQ29sb3IuZ3JlZW4sIHYpO1xuICAgIGJsZW5kZWQuYmx1ZSA9IGJsZW5kKGZyb21Db2xvci5ibHVlLCB0b0NvbG9yLmJsdWUsIHYpO1xuICAgIGJsZW5kZWQuYWxwaGEgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGZyb21Db2xvci5hbHBoYSwgdG9Db2xvci5hbHBoYSwgdik7XG4gICAgcmV0dXJuIGJsZW5kZWQ7XG4gIH07XG59O1xuXG4vLyBCZXppZXIgcmVzb2x2ZXJcbi8vIFJlZmFjdG9yZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vaHVnaHNrL2Jlemllci9ibG9iL21hc3Rlci9pbmRleC5qc1xuLyoqXG4jIyBUaGUgTUlUIExpY2Vuc2UgKE1JVCkgIyNcblxuQ29weXJpZ2h0IChjKSAyMDEzIEh1Z2ggS2VubmVkeVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG4gKi9cbnZhciByZXNvbHZlMyA9IGZ1bmN0aW9uIHJlc29sdmUzKHBvaW50cykge1xuICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgdXQgPSAxIC0gdDtcbiAgICByZXR1cm4gKHBvaW50c1swXSAqIHV0ICsgcG9pbnRzWzFdICogdCkgKiB1dCArIChwb2ludHNbMV0gKiB1dCArIHBvaW50c1syXSAqIHQpICogdDtcbiAgfTtcbn07XG5cbnZhciByZXNvbHZlNCA9IGZ1bmN0aW9uIHJlc29sdmU0KHBvaW50cykge1xuICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgdXQgPSAxIC0gdDtcbiAgICB2YXIgYTEgPSBwb2ludHNbMV0gKiB1dCArIHBvaW50c1syXSAqIHQ7XG4gICAgcmV0dXJuICgocG9pbnRzWzBdICogdXQgKyBwb2ludHNbMV0gKiB0KSAqIHV0ICsgYTEgKiB0KSAqIHV0ICsgKGExICogdXQgKyAocG9pbnRzWzJdICogdXQgKyBwb2ludHNbM10gKiB0KSAqIHQpICogdDtcbiAgfTtcbn07XG5cbnZhciBiZXppZXIgPSBleHBvcnRzLmJlemllciA9IGZ1bmN0aW9uIGJlemllcihwb2ludHMpIHtcbiAgcmV0dXJuIHBvaW50cy5sZW5ndGggPT09IDMgPyByZXNvbHZlMyhwb2ludHMpIDogcmVzb2x2ZTQocG9pbnRzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6TG1weklsMHNJbTVoYldWeklqcGJJbTV2YjNBaUxDSjJJaXdpWVhCd1pXNWtWVzVwZENJc0luVnVhWFFpTENKaGNIQnNlVTltWm5ObGRDSXNJbVp5YjIwaUxDSjBieUlzSW1kbGRFOW1abk5sZENJc0luTjFZblJ5WVdOMElpd2lZWEJ3YkhsUFptWnpaWFJVYnlJc0ltRmtaQ0lzSW1Oc1lXMXdUV0Y0SWl3aWJXRjRJaXdpVFdGMGFDSXNJbTFwYmlJc0ltTnNZVzF3VFdsdUlpd2lZMnhoYlhBaUxDSmZiV2x1SWl3aVgyMWhlQ0lzSW1OdmJtUnBkR2x2Ym1Gc0lpd2lZMjl1WkdsMGFXOXVJaXdpYVdaVWNuVmxJaXdpYVdaR1lXeHpaU0lzSW1GamRHbHZiaUlzSW5CcGNHVWlMQ0owY21GdWMyWnZjbTFsY25NaUxDSnVkVzFVY21GdWMyWnZjbTFsY25NaUxDSnNaVzVuZEdnaUxDSnBJaXdpWVdOaklpd2lZWEpuY3lJc0ltWnNiM2NpTENKcGJuUmxjbkJ2YkdGMFpTSXNJbWx1Y0hWMElpd2liM1YwY0hWMElpd2ljbUZ1WjJWRllYTnBibWNpTENKeVlXNW5aVXhsYm1kMGFDSXNJbVpwYm1Gc1NXNWtaWGdpTENKd2NtOW5jbVZ6YzBsdVVtRnVaMlVpTENKbFlYTmxaRkJ5YjJkeVpYTnpJaXdpYjNKcFoybHVJaXdpWkdsMmFXUmxJaXdpYlhWc2RHbHdiSGtpTENKblpXNWxjbUYwWlU1dmJrbHVkR1Z5WjNKaGRHVmtVM0J5YVc1bklpd2lZV3gwWlhKRWFYTndiR0ZqWlcxbGJuUWlMQ0pqYjI1emRHRnVkQ0lzSW1ScGMzQnNZV05sYldWdWRDSXNJbk53Y21sdVowMXZaR2xtYVdWa1JHbHpjR3hoWTJWdFpXNTBJaXdpWVdKeklpd2ljM0J5YVc1bklpd2libTl1YkdsdVpXRnlVM0J5YVc1bklpd2ljM0Z5ZENJc0luZHlZWEFpTENKeVlXNW5aVk5wZW1VaUxDSnpiVzl2ZEdnaUxDSnpkSEpsYm1kMGFDSXNJbkJ5WlhacGIzVnpWbUZzZFdVaUxDSnNZWE4wVlhCa1lYUmxaQ0lzSW1OMWNuSmxiblJHY21GdFpYTjBZVzF3SWl3aWRHbHRaVVJsYkhSaElpd2libVYzVm1Gc2RXVWlMQ0p6Ym1Gd0lpd2ljRzlwYm5Seklpd2ljbTkxYm1RaUxDSnVkVzFRYjJsdWRITWlMQ0pzWVhOMFJHbHpkR0Z1WTJVaUxDSndiMmx1ZENJc0ltUnBjM1JoYm1ObElpd2ljM1JsY0hNaUxDSmthWEpsWTNScGIyNGlMQ0p3Y205bmNtVnpjeUlzSW5SeVlXNXpabTl5YlVOb2FXeGtWbUZzZFdWeklpd2lZMmhwYkdSVWNtRnVjMlp2Y20xbGNuTWlMQ0p0ZFhSaFlteGxVM1JoZEdVaUxDSnJaWGtpTENKamFHbHNaRlJ5WVc1elptOXliV1Z5SWl3aWNHVnlZMlZ1ZENJc0ltUmxaM0psWlhNaUxDSndlQ0lzSW5KbllsVnVhWFFpTENKeVoySmhWR1Z0Y0d4aGRHVWlMQ0p5WldRaUxDSm5jbVZsYmlJc0ltSnNkV1VpTENKaGJIQm9ZU0lzSW5KblltRWlMQ0pvYzJ4aFZHVnRjR3hoZEdVaUxDSm9kV1VpTENKellYUjFjbUYwYVc5dUlpd2liR2xuYUhSdVpYTnpJaXdpYUhOc1lTSXNJbkJoY25ObFNXNTBJaXdpWTI5c2IzSWlMQ0pvWVhOUGQyNVFjbTl3WlhKMGVTSXNJbUpzWlc1a0lpd2labkp2YlVWNGNHOGlMQ0owYjBWNGNHOGlMQ0ppYkdWdVpFTnZiRzl5SWl3aVpuSnZiVU52Ykc5eUlpd2lkRzlEYjJ4dmNpSXNJbUpzWlc1a1pXUWlMQ0p5WlhOdmJIWmxNeUlzSW5RaUxDSjFkQ0lzSW5KbGMyOXNkbVUwSWl3aVlURWlMQ0ppWlhwcFpYSWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3UVVGQlFUczdRVUZEUVRzN1FVRkRRVHM3UVVGRFFUczdRVUZGUVN4SlFVRk5RU3hQUVVGUExGTkJRVkJCTEVsQlFVOHNRMEZCUTBNc1EwRkJSRHRCUVVGQkxGTkJRVTlCTEVOQlFWQTdRVUZCUVN4RFFVRmlPenRCUVVWQk96czdPenM3TzBGQlQwOHNTVUZCVFVNc2EwTkJRV0VzVTBGQllrRXNWVUZCWVN4RFFVRkRReXhKUVVGRU8wRkJRVUVzVTBGQlZTeFZRVUZEUml4RFFVRkVPMEZCUVVFc1owSkJRVlZCTEVOQlFWWXNSMEZCWTBVc1NVRkJaRHRCUVVGQkxFZEJRVlk3UVVGQlFTeERRVUZ1UWpzN1FVRkZVRHM3T3pzN096czdRVUZSVHl4SlFVRk5ReXh2UTBGQll5eFRRVUZrUVN4WFFVRmpMRU5CUVVORExFbEJRVVFzUlVGQlQwTXNSVUZCVUN4RlFVRmpPMEZCUTNaRExFMUJRVTFETEZsQlFWbERMRk5CUVZOSUxFbEJRVlFzUTBGQmJFSTdRVUZEUVN4TlFVRk5TU3huUWtGQlowSkRMRWxCUVVsS0xFVkJRVW9zUTBGQmRFSTdRVUZEUVN4VFFVRlBMRlZCUVVOTUxFTkJRVVE3UVVGQlFTeFhRVUZQVVN4alFVRmpSaXhWUVVGVlRpeERRVUZXTEVOQlFXUXNRMEZCVUR0QlFVRkJMRWRCUVZBN1FVRkRSQ3hEUVVwTk96dEJRVTFRT3pzN096czdPMEZCVDA4c1NVRkJUVlVzT0VKQlFWY3NVMEZCV0VFc1VVRkJWeXhEUVVGRFF5eEhRVUZFTzBGQlFVRXNVMEZCVXl4VlFVRkRXQ3hEUVVGRU8wRkJRVUVzVjBGQlQxa3NTMEZCUzBNc1IwRkJUQ3hEUVVGVFlpeERRVUZVTEVWQlFWbFhMRWRCUVZvc1EwRkJVRHRCUVVGQkxFZEJRVlE3UVVGQlFTeERRVUZxUWp0QlFVTkJMRWxCUVUxSExEaENRVUZYTEZOQlFWaEJMRkZCUVZjc1EwRkJRMFFzUjBGQlJEdEJRVUZCTEZOQlFWTXNWVUZCUTJJc1EwRkJSRHRCUVVGQkxGZEJRVTlaTEV0QlFVdEVMRWRCUVV3c1EwRkJVMWdzUTBGQlZDeEZRVUZaWVN4SFFVRmFMRU5CUVZBN1FVRkJRU3hIUVVGVU8wRkJRVUVzUTBGQmFrSTdRVUZEUVN4SlFVRk5SU3gzUWtGQlVTeFRRVUZTUVN4TFFVRlJMRU5CUVVOR0xFZEJRVVFzUlVGQlRVWXNSMEZCVGl4RlFVRmpPMEZCUTJwRExFMUJRVTFMTEU5QlFVOUdMRk5CUVZORUxFZEJRVlFzUTBGQllqdEJRVU5CTEUxQlFVMUpMRTlCUVU5UUxGTkJRVk5ETEVkQlFWUXNRMEZCWWp0QlFVTkJMRk5CUVU4c1ZVRkJRMWdzUTBGQlJEdEJRVUZCTEZkQlFVOW5RaXhMUVVGTFF5eExRVUZMYWtJc1EwRkJUQ3hEUVVGTUxFTkJRVkE3UVVGQlFTeEhRVUZRTzBGQlEwUXNRMEZLVFRzN1FVRk5RU3hKUVVGTmEwSXNiME5CUVdNc1UwRkJaRUVzVjBGQll5eERRVUZEUXl4VFFVRkVMRVZCUVZsRExFMUJRVm83UVVGQlFTeE5RVUZ2UWtNc1QwRkJjRUlzZFVWQlFUaENkRUlzU1VGQk9VSTdRVUZCUVN4VFFVRjFReXhWUVVGRFF5eERRVUZFTEVWQlFVbHpRaXhOUVVGS0xFVkJRV1U3UVVGREwwVXNWMEZCVDBnc1ZVRkJWVzVDTEVOQlFWWXNSVUZCWVhOQ0xFMUJRV0lzU1VGQmRVSkdMRTlCUVU5d1FpeERRVUZRTEVWQlFWVnpRaXhOUVVGV0xFTkJRWFpDTEVkQlFUSkRSQ3hSUVVGUmNrSXNRMEZCVWl4RlFVRlhjMElzVFVGQldDeERRVUZzUkR0QlFVTkVMRWRCUmpCQ08wRkJRVUVzUTBGQmNFSTdPMEZCU1ZBN096czdPenM3UVVGUFR5eEpRVUZOUXl4elFrRkJUeXhUUVVGUVFTeEpRVUZQTEVkQlFYRkNPMEZCUVVFc2IwTkJRV3BDUXl4WlFVRnBRanRCUVVGcVFrRXNaMEpCUVdsQ08wRkJRVUU3TzBGQlEzWkRMRTFCUVUxRExHdENRVUZyUWtRc1lVRkJZVVVzVFVGQmNrTTdRVUZEUVN4TlFVRkpReXhKUVVGSkxFTkJRVkk3TzBGQlJVRXNVMEZCVHl4VlFVRkRReXhIUVVGRUxFVkJRV3RDTzBGQlFVRXNkVU5CUVZSRExFbEJRVk03UVVGQlZFRXNWVUZCVXp0QlFVRkJPenRCUVVOMlFpeFJRVUZKTjBJc1NVRkJTVFJDTEVkQlFWSTdRVUZEUVN4VFFVRkxSQ3hKUVVGSkxFTkJRVlFzUlVGQldVRXNTVUZCU1VZc1pVRkJhRUlzUlVGQmFVTkZMRWRCUVdwRExFVkJRWE5ETzBGQlEzQkRNMElzVlVGQlNYZENMR0ZCUVdGSExFTkJRV0lzZFVKQlFXZENNMElzUTBGQmFFSXNVMEZCYzBJMlFpeEpRVUYwUWl4RlFVRktPMEZCUTBRN08wRkJSVVFzVjBGQlR6ZENMRU5CUVZBN1FVRkRSQ3hIUVZCRU8wRkJVVVFzUTBGYVRUczdRVUZqVUR0QlFVTlBMRWxCUVUwNFFpeHpRa0ZCVDFBc1NVRkJZanM3UVVGRlVEczdPenM3T3p0QlFVOVBMRWxCUVUxUkxHOURRVUZqTEZOQlFXUkJMRmRCUVdNc1EwRkJRME1zUzBGQlJDeEZRVUZSUXl4TlFVRlNMRVZCUVdkQ1F5eFhRVUZvUWl4RlFVRm5RenRCUVVONlJDeE5RVUZOUXl4alFVRmpTQ3hOUVVGTlRpeE5RVUV4UWp0QlFVTkJMRTFCUVUxVkxHRkJRV0ZFTEdOQlFXTXNRMEZCYWtNN08wRkJSVUVzVTBGQlR5eFZRVUZEYmtNc1EwRkJSQ3hGUVVGUE8wRkJRMW83UVVGRFFTeFJRVUZKUVN4TFFVRkxaME1zVFVGQlRTeERRVUZPTEVOQlFWUXNSVUZCYlVJN1FVRkRha0lzWVVGQlQwTXNUMEZCVHl4RFFVRlFMRU5CUVZBN1FVRkRSRHM3UVVGRlJEdEJRVU5CTEZGQlFVbHFReXhMUVVGTFowTXNUVUZCVFVrc1ZVRkJUaXhEUVVGVUxFVkJRVFJDTzBGQlF6RkNMR0ZCUVU5SUxFOUJRVTlITEZWQlFWQXNRMEZCVUR0QlFVTkVPenRCUVVWRUxGRkJRVWxVTEVsQlFVa3NRMEZCVWpzN1FVRkZRVHRCUVVOQkxGZEJRVTlCTEVsQlFVbFJMRmRCUVZnc1JVRkJkMEpTTEVkQlFYaENMRVZCUVRaQ08wRkJRek5DTEZWQlFVbExMRTFCUVUxTUxFTkJRVTRzU1VGQlZ6TkNMRU5CUVZnc1NVRkJaMEl5UWl4TlFVRk5VeXhWUVVFeFFpeEZRVUZ6UXp0QlFVTndRenRCUVVORU8wRkJRMFk3TzBGQlJVUXNVVUZCVFVNc2EwSkJRV3RDTEdkRFFVRnhRa3dzVFVGQlRVd3NTVUZCU1N4RFFVRldMRU5CUVhKQ0xFVkJRVzFEU3l4TlFVRk5UQ3hEUVVGT0xFTkJRVzVETEVWQlFUWkRNMElzUTBGQk4wTXNRMEZCZUVJN1FVRkRRU3hSUVVGTmMwTXNaMEpCUVdsQ1NpeFhRVUZFTEVkQlFXZENRU3haUVVGWlVDeEpRVUZKTEVOQlFXaENMRVZCUVcxQ1ZTeGxRVUZ1UWl4RFFVRm9RaXhIUVVGelJFRXNaVUZCTlVVN1FVRkRRU3hYUVVGUExHZERRVUZ4UWtvc1QwRkJUMDRzU1VGQlNTeERRVUZZTEVOQlFYSkNMRVZCUVc5RFRTeFBRVUZQVGl4RFFVRlFMRU5CUVhCRExFVkJRU3REVnl4aFFVRXZReXhEUVVGUU8wRkJRMFFzUjBGMlFrUTdRVUYzUWtRc1EwRTFRazA3TzBGQk9FSkJMRWxCUVUwdlFpdzRRa0ZCVnl4VFFVRllRU3hSUVVGWExFTkJRVU5uUXl4TlFVRkVPMEZCUVVFc1UwRkJXU3hWUVVGRGRrTXNRMEZCUkR0QlFVRkJMRmRCUVU5QkxFbEJRVWwxUXl4TlFVRllPMEZCUVVFc1IwRkJXanRCUVVGQkxFTkJRV3BDTzBGQlEwRXNTVUZCVFRsQ0xHOUNRVUZOTEZOQlFVNUJMRWRCUVUwc1EwRkJRemhDTEUxQlFVUTdRVUZCUVN4VFFVRlpMRlZCUVVOMlF5eERRVUZFTzBGQlFVRXNWMEZCVDBFc1NVRkJTWFZETEUxQlFWZzdRVUZCUVN4SFFVRmFPMEZCUVVFc1EwRkJXanRCUVVOQkxFbEJRVTFETERCQ1FVRlRMRk5CUVZSQkxFMUJRVk1zUTBGQlEwUXNUVUZCUkR0QlFVRkJMRk5CUVZrc1ZVRkJRM1pETEVOQlFVUTdRVUZCUVN4WFFVRlBRU3hKUVVGSmRVTXNUVUZCV0R0QlFVRkJMRWRCUVZvN1FVRkJRU3hEUVVGbU8wRkJRMEVzU1VGQlRVVXNPRUpCUVZjc1UwRkJXRUVzVVVGQlZ5eERRVUZEUml4TlFVRkVPMEZCUVVFc1UwRkJXU3hWUVVGRGRrTXNRMEZCUkR0QlFVRkJMRmRCUVU5QkxFbEJRVWwxUXl4TlFVRllPMEZCUVVFc1IwRkJXanRCUVVGQkxFTkJRV3BDT3p0QlFVVkJMRWxCUVUxSExITkZRVUVyUWl4VFFVRXZRa0VzTkVKQlFTdENPMEZCUVVFc1RVRkJRME1zYVVKQlFVUXNkVVZCUVhGQ05VTXNTVUZCY2tJN1FVRkJRU3hUUVVFNFFpeFZRVUZETmtNc1VVRkJSQ3hGUVVGWFRDeE5RVUZZTzBGQlFVRXNWMEZCYzBJc1ZVRkJRM1pETEVOQlFVUXNSVUZCVHp0QlFVTnlSeXhWUVVGTk5rTXNaVUZCWlU0c1UwRkJVM1pETEVOQlFUbENPMEZCUTBFc1ZVRkJUVGhETERaQ1FVRTJRaXhEUVVGRlJpeFJRVUZHTEVsQlFXTXNTVUZCU1VRc2EwSkJRV3RDTDBJc1MwRkJTMjFETEVkQlFVd3NRMEZCVTBZc1dVRkJWQ3hEUVVGc1FpeERRVUZzUWl4RFFVRnVRenRCUVVOQkxHRkJRVkZCTEdkQ1FVRm5RaXhEUVVGcVFpeEhRVUZ6UWs0c1UwRkJVMDhzTUVKQlFTOUNMRWRCUVRSRVVDeFRRVUZUVHl3d1FrRkJOVVU3UVVGRFJDeExRVXA1UlR0QlFVRkJMRWRCUVRsQ08wRkJRVUVzUTBGQmNrTTdPMEZCVFVFc1NVRkJUVVVzTUVKQlFWTk9MRGhDUVVGbU8wRkJRMEVzU1VGQlRVOHNORU5CUVd0Q1VDdzJRa0ZCTmtJNVFpeExRVUZMYzBNc1NVRkJiRU1zUTBGQmVFSTdPMEZCUlVFc1NVRkJUVU1zYzBKQlFVOHNVMEZCVUVFc1NVRkJUeXhEUVVGRGRFTXNSMEZCUkN4RlFVRk5SaXhIUVVGT08wRkJRVUVzVTBGQll5eFZRVUZEV0N4RFFVRkVMRVZCUVU4N1FVRkRka01zVVVGQlRXOUVMRmxCUVZsNlF5eE5RVUZOUlN4SFFVRjRRanRCUVVOQkxGZEJRVThzUTBGQlF5eERRVUZEWWl4SlFVRkpZU3hIUVVGTUxFbEJRVmwxUXl4VFFVRmFMRWRCUVhkQ1FTeFRRVUY2UWl4SlFVRnpRMEVzVTBGQmRFTXNSMEZCYTBSMlF5eEhRVUY2UkR0QlFVTkVMRWRCU0cxQ08wRkJRVUVzUTBGQllqczdRVUZMUVN4SlFVRk5kME1zTUVKQlFWTXNVMEZCVkVFc1RVRkJVeXhIUVVGdFFqdEJRVUZCTEUxQlFXeENReXhSUVVGclFpeDFSVUZCVUN4RlFVRlBPenRCUVVOMlF5eE5RVUZKUXl4blFrRkJaMElzUTBGQmNFSTdRVUZEUVN4TlFVRkpReXhqUVVGakxFTkJRV3hDT3p0QlFVVkJMRk5CUVU4c1ZVRkJRM2hFTEVOQlFVUXNSVUZCVHp0QlFVTmFMRkZCUVUxNVJDeHZRa0ZCYjBJc2RVTkJRVEZDTzBGQlEwRXNVVUZCVFVNc1dVRkJZVVFzYzBKQlFYTkNSQ3hYUVVGMlFpeEhRVUZ6UTBNc2IwSkJRVzlDUkN4WFFVRXhSQ3hIUVVGM1JTeERRVUV4Ump0QlFVTkJMRkZCUVUxSExGZEJRVmRFTEZsQlFWa3NhMEpCUVdNeFJDeERRVUZrTEVWQlFXbENkVVFzWVVGQmFrSXNSVUZCWjBOSExGTkJRV2hETEVWQlFUSkRTaXhSUVVFelF5eERRVUZhTEVkQlFXMUZReXhoUVVGd1JqdEJRVU5CUXl4clFrRkJZME1zYVVKQlFXUTdRVUZEUVVZc2IwSkJRV2RDU1N4UlFVRm9RanRCUVVOQkxGZEJRVTlCTEZGQlFWQTdRVUZEUkN4SFFWQkVPMEZCVVVRc1EwRmFUVHM3UVVGalFTeEpRVUZOUXl4elFrRkJUeXhUUVVGUVFTeEpRVUZQTEVOQlFVTkRMRTFCUVVRc1JVRkJXVHRCUVVNNVFpeE5RVUZKTEU5QlFVOUJMRTFCUVZBc1MwRkJhMElzVVVGQmRFSXNSVUZCWjBNN1FVRkRPVUlzVjBGQlR5eFZRVUZETjBRc1EwRkJSRHRCUVVGQkxHRkJRVTlaTEV0QlFVdHJSQ3hMUVVGTUxFTkJRVmM1UkN4SlFVRkpOa1FzVFVGQlppeEpRVUY1UWtFc1RVRkJhRU03UVVGQlFTeExRVUZRTzBGQlEwUXNSMEZHUkN4TlFVVlBPMEZCUTB3c1VVRkJTV3hETEVsQlFVa3NRMEZCVWp0QlFVTkJMRkZCUVUxdlF5eFpRVUZaUml4UFFVRlBia01zVFVGQmVrSTdPMEZCUlVFc1YwRkJUeXhWUVVGRE1VSXNRMEZCUkN4RlFVRlBPMEZCUTFvc1ZVRkJTV2RGTEdWQlFXVndSQ3hMUVVGTGJVTXNSMEZCVEN4RFFVRlRZeXhQUVVGUExFTkJRVkFzU1VGQldUZEVMRU5CUVhKQ0xFTkJRVzVDT3p0QlFVVkJMRmRCUVVzeVFpeEpRVUZKTEVOQlFWUXNSVUZCV1VFc1NVRkJTVzlETEZOQlFXaENMRVZCUVRKQ2NFTXNSMEZCTTBJc1JVRkJaME03UVVGRE9VSXNXVUZCVFhORExGRkJRVkZLTEU5QlFVOXNReXhEUVVGUUxFTkJRV1E3UVVGRFFTeFpRVUZOZFVNc1YwRkJWM1JFTEV0QlFVdHRReXhIUVVGTUxFTkJRVk5yUWl4UlFVRlJha1VzUTBGQmFrSXNRMEZCYWtJN08wRkJSVUVzV1VGQlNXdEZMR0ZCUVdFc1EwRkJha0lzUlVGQmIwSXNUMEZCVDBRc1MwRkJVRHM3UVVGRmNFSXNXVUZCU1VNc1YwRkJWMFlzV1VGQlppeEZRVUUyUWl4UFFVRlBTQ3hQUVVGUGJFTXNTVUZCU1N4RFFVRllMRU5CUVZBN08wRkJSVGRDTEZsQlFVbEJMRTFCUVUxdlF5eFpRVUZaTEVOQlFYUkNMRVZCUVhsQ0xFOUJRVTlGTEV0QlFWQTdPMEZCUlhwQ1JDeDFRa0ZCWlVVc1VVRkJaanRCUVVORU8wRkJRMFlzUzBGbVJEdEJRV2RDUkR0QlFVTkdMRU5CZUVKTk96dEJRVEJDUVN4SlFVRk5ReXgzUWtGQlVTeGxRVUZEUVN4TlFVRkVPMEZCUVVFc1RVRkJVWFJFTEVkQlFWSXNkVVZCUVdNc1EwRkJaRHRCUVVGQkxFMUJRV2xDUml4SFFVRnFRaXgxUlVGQmRVSXNRMEZCZGtJN1FVRkJRU3hOUVVFd1FubEVMRk5CUVRGQ0xIVkZRVUZ6UXl4UFFVRjBRenRCUVVGQkxGTkJRV3RFTEZWQlFVTndSU3hEUVVGRUxFVkJRVTg3UVVGRE5VVXNVVUZCVFhGRkxGZEJRVmNzWjBOQlFYRkNlRVFzUjBGQmNrSXNSVUZCTUVKR0xFZEJRVEZDTEVWQlFTdENXQ3hEUVVFdlFpeERRVUZxUWp0QlFVTkJMRmRCUVU4c1owTkJRWEZDWVN4SFFVRnlRaXhGUVVFd1FrWXNSMEZCTVVJc1JVRkJLMElzZDBKQlFXRjNSQ3hOUVVGaUxFVkJRVzlDUlN4UlFVRndRaXhGUVVFNFFrUXNVMEZCT1VJc1EwRkJMMElzUTBGQlVEdEJRVU5FTEVkQlNHOUNPMEZCUVVFc1EwRkJaRHM3UVVGTFFTeEpRVUZOUlN4elJFRkJkVUlzVTBGQmRrSkJMRzlDUVVGMVFpeERRVUZEUXl4cFFrRkJSQ3hGUVVGMVFqdEJRVU42UkN4TlFVRk5ReXhsUVVGbExFVkJRWEpDTzBGQlEwRXNVMEZCVHl4VlFVRkRlRVVzUTBGQlJDeEZRVUZQTzBGQlExb3NVMEZCU3l4SlFVRkplVVVzUjBGQlZDeEpRVUZuUW5wRkxFTkJRV2hDTEVWQlFXMUNPMEZCUTJwQ0xGVkJRVTB3UlN4dFFrRkJiVUpJTEd0Q1FVRnJRa1VzUjBGQmJFSXNRMEZCZWtJN1FVRkRRU3hWUVVGSlF5eG5Ra0ZCU2l4RlFVRnpRanRCUVVOd1FrWXNjVUpCUVdGRExFZEJRV0lzU1VGQmIwSkRMR2xDUVVGcFFqRkZMRVZCUVVWNVJTeEhRVUZHTEVOQlFXcENMRU5CUVhCQ08wRkJRMFE3UVVGRFJqczdRVUZGUkN4WFFVRlBSQ3haUVVGUU8wRkJRMFFzUjBGVVJEdEJRVlZFTEVOQldrMDdPMEZCWTFBN1FVRkRUeXhKUVVGTlJ5dzBRa0ZCVlRGRkxGZEJRVmNzUjBGQldDeERRVUZvUWp0QlFVTkJMRWxCUVUweVJTdzBRa0ZCVlRORkxGZEJRVmNzUzBGQldDeERRVUZvUWp0QlFVTkJMRWxCUVUwMFJTeHJRa0ZCU3pWRkxGZEJRVmNzU1VGQldDeERRVUZZT3p0QlFVVkJMRWxCUVUwMlJTdzBRa0ZCVlhaRUxFdEJRM0pDVWl4TlFVRk5MRU5CUVU0c1JVRkJVeXhIUVVGVUxFTkJSSEZDTEVWQlJYSkNTQ3hMUVVGTGEwUXNTMEZHWjBJc1EwRkJhRUk3TzBGQlMxQXNTVUZCVFdsQ0xHVkJRV1VzVTBGQlprRXNXVUZCWlR0QlFVRkJMRTFCUVVkRExFZEJRVWdzVVVGQlIwRXNSMEZCU0R0QlFVRkJMRTFCUVZGRExFdEJRVklzVVVGQlVVRXNTMEZCVWp0QlFVRkJMRTFCUVdWRExFbEJRV1lzVVVGQlpVRXNTVUZCWmp0QlFVRkJMSGRDUVVGeFFrTXNTMEZCY2tJN1FVRkJRU3hOUVVGeFFrRXNTMEZCY2tJc09FSkJRVFpDTEVOQlFUZENPMEZCUVVFc2JVSkJRMWhJTEVkQlJGY3NWVUZEU0VNc1MwRkVSeXhWUVVOUFF5eEpRVVJRTEZWQlEyZENReXhMUVVSb1FqdEJRVUZCTEVOQlFYSkNPenRCUVVkUExFbEJRVTFETEhOQ1FVRlBOMFFzUzBGRGJFSXJReXh4UWtGQmNVSTdRVUZEYmtKVkxFOUJRVXRHTEU5QlJHTTdRVUZGYmtKSExGTkJRVTlJTEU5QlJsazdRVUZIYmtKSkxGRkJRVTFLTEU5QlNHRTdRVUZKYmtKTE8wRkJTbTFDTEVOQlFYSkNMRU5CUkd0Q0xFVkJUMnhDU2l4WlFWQnJRaXhEUVVGaU96dEJRVlZRTEVsQlFVMU5MR1ZCUVdVc1UwRkJaa0VzV1VGQlpUdEJRVUZCTEUxQlFVZERMRWRCUVVnc1UwRkJSMEVzUjBGQlNEdEJRVUZCTEUxQlFWRkRMRlZCUVZJc1UwRkJVVUVzVlVGQlVqdEJRVUZCTEUxQlFXOUNReXhUUVVGd1FpeFRRVUZ2UWtFc1UwRkJjRUk3UVVGQlFTd3dRa0ZCSzBKTUxFdEJRUzlDTzBGQlFVRXNUVUZCSzBKQkxFdEJRUzlDTEN0Q1FVRjFReXhEUVVGMlF6dEJRVUZCTEcxQ1FVTllSeXhIUVVSWExGVkJRMGhETEZWQlJFY3NWVUZEV1VNc1UwRkVXaXhWUVVNd1Frd3NTMEZFTVVJN1FVRkJRU3hEUVVGeVFqczdRVUZIVHl4SlFVRk5UU3h6UWtGQlQyeEZMRXRCUTJ4Q0swTXNjVUpCUVhGQ08wRkJRMjVDWjBJc1QwRkJTMGtzVVVGRVl6dEJRVVZ1UWtnc1kwRkJXVm9zVDBGR1R6dEJRVWR1UW1Fc1lVRkJWMklzVDBGSVVUdEJRVWx1UWxFN1FVRktiVUlzUTBGQmNrSXNRMEZFYTBJc1JVRlBiRUpGTEZsQlVHdENMRU5CUVdJN08wRkJWVUVzU1VGQlRVMHNkMEpCUVZFc1UwRkJVa0VzUzBGQlVTeERRVUZETTBZc1EwRkJSQ3hGUVVGUE8wRkJRekZDTEUxQlFVbEJMRVZCUVVVMFJpeGpRVUZHTEVOQlFXbENMRXRCUVdwQ0xFTkJRVW9zUlVGQk5rSTdRVUZETTBJc1YwRkJUMUlzUzBGQlMzQkdMRU5CUVV3c1EwRkJVRHRCUVVORUxFZEJSa1FzVFVGRlR5eEpRVUZKUVN4RlFVRkZORVlzWTBGQlJpeERRVUZwUWl4TFFVRnFRaXhEUVVGS0xFVkJRVFpDTzBGQlEyeERMRmRCUVU5SUxFdEJRVXQ2Uml4RFFVRk1MRU5CUVZBN1FVRkRSRHRCUVVORUxGTkJRVTlCTEVOQlFWQTdRVUZEUkN4RFFWQk5PenRCUVZOQkxFbEJRVTF0Uml4M1FrRkJVWEJGTEUxQlFVMHNRMEZCVGl4RlFVRlRMRU5CUVZRc1EwRkJaRHM3UVVGRlVDeEpRVUZOT0VVc1VVRkJVU3hUUVVGU1FTeExRVUZSTEVOQlFVTjZSaXhKUVVGRUxFVkJRVTlETEVWQlFWQXNSVUZCVjB3c1EwRkJXQ3hGUVVGcFFqdEJRVU0zUWl4TlFVRk5PRVlzVjBGQlZ6RkdMRTlCUVU5QkxFbEJRWGhDTzBGQlEwRXNUVUZCVFRKR0xGTkJRVk14Uml4TFFVRkxRU3hGUVVGd1FqdEJRVU5CTEZOQlFVOVBMRXRCUVV0elF5eEpRVUZNTEVOQlFWVnNSQ3hMUVVGTEswWXNVMEZCVTBRc1VVRkJaQ3hKUVVFd1FrRXNVVUZCY0VNc1EwRkJVRHRCUVVORUxFTkJTa1E3UVVGTFFUdEJRVU5QTEVsQlFVMUZMR3REUVVGaExGTkJRV0pCTEZWQlFXRXNRMEZCUXpWR0xFbEJRVVFzUlVGQlQwTXNSVUZCVUN4RlFVRmpPMEZCUTNSRExFMUJRVTAwUml4WlFVRlpMSEZDUVVGVE4wWXNTVUZCVkN4SlFVRnBRaXh2UWtGQlYwRXNTVUZCV0N4RFFVRnFRaXhIUVVGdlEwRXNTVUZCZEVRN1FVRkRRU3hOUVVGTk9FWXNWVUZCVlN4eFFrRkJVemRHTEVWQlFWUXNTVUZCWlN4dlFrRkJWMEVzUlVGQldDeERRVUZtTEVkQlFTdENRU3hGUVVFdlF6czdRVUZGUVN4TlFVRk5PRVlzZFVKQlFXVkdMRk5CUVdZc1EwRkJUanM3UVVGRlFTeFRRVUZQTEZWQlFVTnFSeXhEUVVGRUxFVkJRVTg3UVVGRFdpeFRRVUZMTEVsQlFVbDVSU3hIUVVGVUxFbEJRV2RDTUVJc1QwRkJhRUlzUlVGQmVVSTdRVUZEZGtKQkxHTkJRVkV4UWl4SFFVRlNMRWxCUVdWdlFpeE5RVUZOU1N4VlFVRlZlRUlzUjBGQlZpeERRVUZPTEVWQlFYTkNlVUlzVVVGQlVYcENMRWRCUVZJc1EwRkJkRUlzUlVGQmIwTjZSU3hEUVVGd1F5eERRVUZtTzBGQlEwUTdRVUZEUkcxSExGbEJRVkZ1UWl4SFFVRlNMRWRCUVdOaExFMUJRVTFKTEZWQlFWVnFRaXhIUVVGb1FpeEZRVUZ4UW10Q0xGRkJRVkZzUWl4SFFVRTNRaXhGUVVGclEyaEdMRU5CUVd4RExFTkJRV1E3UVVGRFFXMUhMRmxCUVZGc1FpeExRVUZTTEVkQlFXZENXU3hOUVVGTlNTeFZRVUZWYUVJc1MwRkJhRUlzUlVGQmRVSnBRaXhSUVVGUmFrSXNTMEZCTDBJc1JVRkJjME5xUml4RFFVRjBReXhEUVVGb1FqdEJRVU5CYlVjc1dVRkJVV3BDTEVsQlFWSXNSMEZCWlZjc1RVRkJUVWtzVlVGQlZXWXNTVUZCYUVJc1JVRkJjMEpuUWl4UlFVRlJhRUlzU1VGQk9VSXNSVUZCYjBOc1JpeERRVUZ3UXl4RFFVRm1PMEZCUTBGdFJ5eFpRVUZSYUVJc1MwRkJVaXhIUVVGblFpeG5RMEZCY1VKakxGVkJRVlZrTEV0QlFTOUNMRVZCUVhORFpTeFJRVUZSWml4TFFVRTVReXhGUVVGeFJHNUdMRU5CUVhKRUxFTkJRV2hDTzBGQlEwRXNWMEZCVDIxSExFOUJRVkE3UVVGRFJDeEhRVlJFTzBGQlZVUXNRMEZvUWswN08wRkJhMEpRTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUYxUWtFc1NVRkJUVU1zVjBGQlZ5eFRRVUZZUVN4UlFVRlhMRU5CUVVOMlF5eE5RVUZFTzBGQlFVRXNVMEZCV1N4VlFVRkRkME1zUTBGQlJDeEZRVUZQTzBGQlEyeERMRkZCUVUxRExFdEJRVXNzU1VGQlNVUXNRMEZCWmp0QlFVTkJMRmRCUVU4c1EwRkJRM2hETEU5QlFVOHNRMEZCVUN4SlFVRlplVU1zUlVGQldpeEhRVUZwUW5wRExFOUJRVThzUTBGQlVDeEpRVUZaZDBNc1EwRkJPVUlzU1VGQmJVTkRMRVZCUVc1RExFZEJRWGRETEVOQlFVTjZReXhQUVVGUExFTkJRVkFzU1VGQldYbERMRVZCUVZvc1IwRkJhVUo2UXl4UFFVRlBMRU5CUVZBc1NVRkJXWGRETEVOQlFUbENMRWxCUVcxRFFTeERRVUZzUmp0QlFVTkVMRWRCU0dkQ08wRkJRVUVzUTBGQmFrSTdPMEZCUzBFc1NVRkJUVVVzVjBGQlZ5eFRRVUZZUVN4UlFVRlhMRU5CUVVNeFF5eE5RVUZFTzBGQlFVRXNVMEZCV1N4VlFVRkRkME1zUTBGQlJDeEZRVUZQTzBGQlEyeERMRkZCUVUxRExFdEJRVXNzU1VGQlNVUXNRMEZCWmp0QlFVTkJMRkZCUVUxSExFdEJRVXN6UXl4UFFVRlBMRU5CUVZBc1NVRkJXWGxETEVWQlFWb3NSMEZCYVVKNlF5eFBRVUZQTEVOQlFWQXNTVUZCV1hkRExFTkJRWGhETzBGQlEwRXNWMEZCVHl4RFFVRkRMRU5CUVVONFF5eFBRVUZQTEVOQlFWQXNTVUZCV1hsRExFVkJRVm9zUjBGQmFVSjZReXhQUVVGUExFTkJRVkFzU1VGQldYZERMRU5CUVRsQ0xFbEJRVzFEUXl4RlFVRnVReXhIUVVGM1EwVXNTMEZCUzBnc1EwRkJPVU1zU1VGQmJVUkRMRVZCUVc1RUxFZEJRWGRFTEVOQlFVTkZMRXRCUVV0R0xFVkJRVXdzUjBGQlZTeERRVUZEZWtNc1QwRkJUeXhEUVVGUUxFbEJRVmw1UXl4RlFVRmFMRWRCUVdsQ2VrTXNUMEZCVHl4RFFVRlFMRWxCUVZsM1F5eERRVUU1UWl4SlFVRnRRMEVzUTBGQk9VTXNTVUZCYlVSQkxFTkJRV3hJTzBGQlEwUXNSMEZLWjBJN1FVRkJRU3hEUVVGcVFqczdRVUZOVHl4SlFVRk5TU3d3UWtGQlV5eFRRVUZVUVN4TlFVRlRMRU5CUVVNMVF5eE5RVUZFTzBGQlFVRXNVMEZEYmtKQkxFOUJRVTl1UXl4TlFVRlFMRXRCUVd0Q0xFTkJRVzVDTEVkQlFYZENNRVVzVTBGQlUzWkRMRTFCUVZRc1EwRkJlRUlzUjBGQk1rTXdReXhUUVVGVE1VTXNUVUZCVkN4RFFVUjJRanRCUVVGQkxFTkJRV1lpTENKbWFXeGxJam9pZEhKaGJuTm1iM0p0WlhKekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYSnpMMmRwZEdoMVlpOXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlN3Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTXNJSE4wWlhCUWNtOW5jbVZ6Y3l3Z2MyMXZiM1JvSUdGeklHTmhiR05UYlc5dmRHaHBibWNnZlNCbWNtOXRJQ2N1TDJOaGJHTW5PMXh1YVcxd2IzSjBJSHNnYVhOVGRISnBibWNnZlNCbWNtOXRJQ2N1TDNWMGFXeHpKenRjYm1sdGNHOXlkQ0I3SUdOdmJHOXlJR0Z6SUhCaGNuTmxRMjlzYjNJZ2ZTQm1jbTl0SUNjdUwzQmhjbk5sY25Nbk8xeHVhVzF3YjNKMElIc2dZM1Z5Y21WdWRFWnlZVzFsVkdsdFpYTjBZVzF3SUgwZ1puSnZiU0FuTGk0dlpuSmhiV1Z6ZVc1akp6dGNibHh1WTI5dWMzUWdibTl2Y0NBOUlDaDJLU0E5UGlCMk8xeHVYRzR2S2lwY2JpQXFJRUZ3Y0dWdVpDQlZibWwwWEc0Z0tpQkJJR1oxYm1OMGFXOXVJSFJvWVhRZ2QybHNiQ0JoY0hCbGJtUmNiaUFxSUdGd2NHVnVaRlZ1YVhRb0ozQjRKeXdnTWpBcElDMCtJQ2N5TUhCNEoxeHVJQ29nUUhCaGNtRnRJQ0I3YzNSeWFXNW5mU0IxYm1sMEtWeHVJQ29nUUhKbGRIVnliaUI3Ym5WdFltVnlmVnh1SUNvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWVhCd1pXNWtWVzVwZENBOUlDaDFibWwwS1NBOVBpQW9kaWtnUFQ0Z1lDUjdkbjBrZTNWdWFYUjlZRHRjYmx4dUx5b3FYRzRnS2lCQmNIQnNlU0J2Wm1aelpYUmNiaUFxSUVFZ1puVnVZM1JwYjI0Z2RHaGhkQ3dnWjJsMlpXNGdZU0IyWVd4MVpTd2dkMmxzYkNCblpYUWdkR2hsSUc5bVpuTmxkQ0JtY205dElHQm1jbTl0WUZ4dUlDb2dZVzVrSUdGd2NHeDVJR2wwSUhSdklHQjBiMkJjYmlBcUlFQndZWEpoYlNBZ2UyNTFiV0psY24wZ1puSnZiVnh1SUNvZ1FIQmhjbUZ0SUNCN2JuVnRZbVZ5ZlNCMGIxeHVJQ29nUUhKbGRIVnliaUI3Wm5WdVkzUnBiMjU5WEc0Z0tpOWNibVY0Y0c5eWRDQmpiMjV6ZENCaGNIQnNlVTltWm5ObGRDQTlJQ2htY205dExDQjBieWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQm5aWFJQWm1aelpYUWdQU0J6ZFdKMGNtRmpkQ2htY205dEtUdGNiaUFnWTI5dWMzUWdZWEJ3YkhsUFptWnpaWFJVYnlBOUlHRmtaQ2gwYnlrN1hHNGdJSEpsZEhWeWJpQW9kaWtnUFQ0Z1lYQndiSGxQWm1aelpYUlVieWhuWlhSUFptWnpaWFFvZGlrcE8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCRGJHRnRjQ0IyWVd4MVpTQmlaWFIzWldWdVhHNGdLaUJEY21WaGRHVnpJR0VnWm5WdVkzUnBiMjRnZEdoaGRDQjNhV3hzSUhKbGMzUnlhV04wSUdFZ1oybDJaVzRnZG1Gc2RXVWdZbVYwZDJWbGJpQmdiV2x1WUNCaGJtUWdZRzFoZUdCY2JpQXFJRUJ3WVhKaGJTQWdlMjUxYldKbGNuMGdiV2x1WEc0Z0tpQkFjR0Z5WVcwZ0lIdHVkVzFpWlhKOUlHMWhlRnh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlZ4dUlDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyeGhiWEJOWVhnZ1BTQW9iV0Y0S1NBOVBpQW9kaWtnUFQ0Z1RXRjBhQzV0YVc0b2Rpd2diV0Y0S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYkdGdGNFMXBiaUE5SUNodGFXNHBJRDArSUNoMktTQTlQaUJOWVhSb0xtMWhlQ2gyTENCdGFXNHBPMXh1Wlhod2IzSjBJR052Ym5OMElHTnNZVzF3SUQwZ0tHMXBiaXdnYldGNEtTQTlQaUI3WEc0Z0lHTnZibk4wSUY5dGFXNGdQU0JqYkdGdGNFMXBiaWh0YVc0cE8xeHVJQ0JqYjI1emRDQmZiV0Y0SUQwZ1kyeGhiWEJOWVhnb2JXRjRLVHRjYmlBZ2NtVjBkWEp1SUNoMktTQTlQaUJmYldsdUtGOXRZWGdvZGlrcE8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR052Ym1ScGRHbHZibUZzSUQwZ0tHTnZibVJwZEdsdmJpd2dhV1pVY25WbExDQnBaa1poYkhObElEMGdibTl2Y0NrZ1BUNGdLSFlzSUdGamRHbHZiaWtnUFQ0Z2UxeHVJQ0J5WlhSMWNtNGdZMjl1WkdsMGFXOXVLSFlzSUdGamRHbHZiaWtnUHlCcFpsUnlkV1VvZGl3Z1lXTjBhVzl1S1NBNklHbG1SbUZzYzJVb2Rpd2dZV04wYVc5dUtUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1VHbHdaVnh1SUNvZ1EyOXRjRzl6WlNCdmRHaGxjaUIwY21GdWMyWnZjbTFsY25NZ2RHOGdjblZ1SUd4cGJtVmhjbWxzZVZ4dUlDb2djR2x3WlNodGFXNG9NakFwTENCdFlYZ29OREFwS1Z4dUlDb2dRSEJoY21GdElDQjdMaTR1Wm5WdVkzUnBiMjV6ZlNCMGNtRnVjMlp2Y20xbGNuTmNiaUFxSUVCeVpYUjFjbTRnZTJaMWJtTjBhVzl1ZlZ4dUlDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NHbHdaU0E5SUNndUxpNTBjbUZ1YzJadmNtMWxjbk1wSUQwK0lIdGNiaUFnWTI5dWMzUWdiblZ0VkhKaGJuTm1iM0p0WlhKeklEMGdkSEpoYm5ObWIzSnRaWEp6TG14bGJtZDBhRHRjYmlBZ2JHVjBJR2tnUFNBd08xeHVYRzRnSUhKbGRIVnliaUFvWVdOakxDQXVMaTVoY21kektTQTlQaUI3WEc0Z0lDQWdiR1YwSUhZZ1BTQmhZMk03WEc0Z0lDQWdabTl5SUNocElEMGdNRHNnYVNBOElHNTFiVlJ5WVc1elptOXliV1Z5Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0IySUQwZ2RISmhibk5tYjNKdFpYSnpXMmxkS0hZc0lDNHVMbUZ5WjNNcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIyTzF4dUlDQjlPMXh1ZlR0Y2JseHVMeThnUkdWd2NtVmpZWFJsWkRvZ1VtVnRiM1psSUdsdUlEY3VNUzR3WEc1bGVIQnZjblFnWTI5dWMzUWdabXh2ZHlBOUlIQnBjR1U3WEc1Y2JpOHFLbHh1SUNvZ1NXNTBaWEp3YjJ4aGRHVWdabkp2YlNCelpYUWdiMllnZG1Gc2RXVnpJSFJ2SUdGdWIzUm9aWEpjYmlBcUlFQndZWEpoYlNBZ2UwRnljbUY1ZlNCcGJuQjFkQ0JoY25KaGVWeHVJQ29nUUhCaGNtRnRJQ0I3UVhKeVlYbDlJRzkxZEhCMWRGeHVJQ29nUUhCaGNtRnRJQ0I3Um5WdVkzUnBiMjU5SUhKaGJtZGxSV0Z6YVc1blhHNGdLaUJBY21WMGRYSnVJSHRHZFc1amRHbHZibjFjYmlBcUwxeHVaWGh3YjNKMElHTnZibk4wSUdsdWRHVnljRzlzWVhSbElEMGdLR2x1Y0hWMExDQnZkWFJ3ZFhRc0lISmhibWRsUldGemFXNW5LU0E5UGlCN1hHNGdJR052Ym5OMElISmhibWRsVEdWdVozUm9JRDBnYVc1d2RYUXViR1Z1WjNSb08xeHVJQ0JqYjI1emRDQm1hVzVoYkVsdVpHVjRJRDBnY21GdVoyVk1aVzVuZEdnZ0xTQXhPMXh1WEc0Z0lISmxkSFZ5YmlBb2Rpa2dQVDRnZTF4dUlDQWdJQzh2SUVsbUlIWmhiSFZsSUc5MWRITnBaR1VnYldsdWFXMTFiU0J5WVc1blpTd2djWFZwWTJ0c2VTQnlaWFIxY201Y2JpQWdJQ0JwWmlBb2RpQThQU0JwYm5CMWRGc3dYU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRzkxZEhCMWRGc3dYVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJKWmlCMllXeDFaU0J2ZFhSemFXUmxJRzFoZUdsdGRXMGdjbUZ1WjJVc0lIRjFhV05yYkhrZ2NtVjBkWEp1WEc0Z0lDQWdhV1lnS0hZZ1BqMGdhVzV3ZFhSYlptbHVZV3hKYm1SbGVGMHBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnZkWFJ3ZFhSYlptbHVZV3hKYm1SbGVGMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2JHVjBJR2tnUFNBeE8xeHVYRzRnSUNBZ0x5OGdSbWx1WkNCcGJtUmxlQ0J2WmlCeVlXNW5aU0J6ZEdGeWRGeHVJQ0FnSUdadmNpQW9PeUJwSUR3Z2NtRnVaMlZNWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2FXWWdLR2x1Y0hWMFcybGRJRDRnZGlCOGZDQnBJRDA5UFNCbWFXNWhiRWx1WkdWNEtTQjdYRzRnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdOdmJuTjBJSEJ5YjJkeVpYTnpTVzVTWVc1blpTQTlJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0dsdWNIVjBXMmtnTFNBeFhTd2dhVzV3ZFhSYmFWMHNJSFlwTzF4dUlDQWdJR052Ym5OMElHVmhjMlZrVUhKdlozSmxjM01nUFNBb2NtRnVaMlZGWVhOcGJtY3BJRDhnY21GdVoyVkZZWE5wYm1kYmFTQXRJREZkS0hCeWIyZHlaWE56U1c1U1lXNW5aU2tnT2lCd2NtOW5jbVZ6YzBsdVVtRnVaMlU3WEc0Z0lDQWdjbVYwZFhKdUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLRzkxZEhCMWRGdHBJQzBnTVYwc0lHOTFkSEIxZEZ0cFhTd2daV0Z6WldSUWNtOW5jbVZ6Y3lrN1hHNGdJSDA3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzVmlkSEpoWTNRZ1BTQW9iM0pwWjJsdUtTQTlQaUFvZGlrZ1BUNGdkaUF0SUc5eWFXZHBianRjYm1WNGNHOXlkQ0JqYjI1emRDQmhaR1FnUFNBb2IzSnBaMmx1S1NBOVBpQW9kaWtnUFQ0Z2RpQXJJRzl5YVdkcGJqdGNibVY0Y0c5eWRDQmpiMjV6ZENCa2FYWnBaR1VnUFNBb2IzSnBaMmx1S1NBOVBpQW9kaWtnUFQ0Z2RpQXZJRzl5YVdkcGJqdGNibVY0Y0c5eWRDQmpiMjV6ZENCdGRXeDBhWEJzZVNBOUlDaHZjbWxuYVc0cElEMCtJQ2gyS1NBOVBpQjJJQ29nYjNKcFoybHVPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdaMlZ1WlhKaGRHVk9iMjVKYm5SbGNtZHlZWFJsWkZOd2NtbHVaeUE5SUNoaGJIUmxja1JwYzNCc1lXTmxiV1Z1ZENBOUlHNXZiM0FwSUQwK0lDaGpiMjV6ZEdGdWRDd2diM0pwWjJsdUtTQTlQaUFvZGlrZ1BUNGdlMXh1SUNCamIyNXpkQ0JrYVhOd2JHRmpaVzFsYm5RZ1BTQnZjbWxuYVc0Z0xTQjJPMXh1SUNCamIyNXpkQ0J6Y0hKcGJtZE5iMlJwWm1sbFpFUnBjM0JzWVdObGJXVnVkQ0E5SUMwZ1kyOXVjM1JoYm5RZ0tpQW9NQ0F0SUdGc2RHVnlSR2x6Y0d4aFkyVnRaVzUwS0UxaGRHZ3VZV0p6S0dScGMzQnNZV05sYldWdWRDa3BLVHRjYmlBZ2NtVjBkWEp1SUNoa2FYTndiR0ZqWlcxbGJuUWdQRDBnTUNrZ1B5QnZjbWxuYVc0Z0t5QnpjSEpwYm1kTmIyUnBabWxsWkVScGMzQnNZV05sYldWdWRDQTZJRzl5YVdkcGJpQXRJSE53Y21sdVowMXZaR2xtYVdWa1JHbHpjR3hoWTJWdFpXNTBPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhOd2NtbHVaeUE5SUdkbGJtVnlZWFJsVG05dVNXNTBaWEpuY21GMFpXUlRjSEpwYm1jb0tUdGNibVY0Y0c5eWRDQmpiMjV6ZENCdWIyNXNhVzVsWVhKVGNISnBibWNnUFNCblpXNWxjbUYwWlU1dmJrbHVkR1Z5WjNKaGRHVmtVM0J5YVc1bktFMWhkR2d1YzNGeWRDazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQjNjbUZ3SUQwZ0tHMXBiaXdnYldGNEtTQTlQaUFvZGlrZ1BUNGdlMXh1SUNCamIyNXpkQ0J5WVc1blpWTnBlbVVnUFNCdFlYZ2dMU0J0YVc0N1hHNGdJSEpsZEhWeWJpQW9LSFlnTFNCdGFXNHBJQ1VnY21GdVoyVlRhWHBsSUNzZ2NtRnVaMlZUYVhwbEtTQWxJSEpoYm1kbFUybDZaU0FySUcxcGJqdGNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Ylc5dmRHZ2dQU0FvYzNSeVpXNW5kR2dnUFNBMU1Da2dQVDRnZTF4dUlDQnNaWFFnY0hKbGRtbHZkWE5XWVd4MVpTQTlJREE3WEc0Z0lHeGxkQ0JzWVhOMFZYQmtZWFJsWkNBOUlEQTdYRzVjYmlBZ2NtVjBkWEp1SUNoMktTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1kzVnljbVZ1ZEVaeVlXMWxjM1JoYlhBZ1BTQmpkWEp5Wlc1MFJuSmhiV1ZVYVcxbGMzUmhiWEFvS1R0Y2JpQWdJQ0JqYjI1emRDQjBhVzFsUkdWc2RHRWdQU0FvWTNWeWNtVnVkRVp5WVcxbGMzUmhiWEFnSVQwOUlHeGhjM1JWY0dSaGRHVmtLU0EvSUdOMWNuSmxiblJHY21GdFpYTjBZVzF3SUMwZ2JHRnpkRlZ3WkdGMFpXUWdPaUF3TzF4dUlDQWdJR052Ym5OMElHNWxkMVpoYkhWbElEMGdkR2x0WlVSbGJIUmhJRDhnWTJGc1kxTnRiMjkwYUdsdVp5aDJMQ0J3Y21WMmFXOTFjMVpoYkhWbExDQjBhVzFsUkdWc2RHRXNJSE4wY21WdVozUm9LU0E2SUhCeVpYWnBiM1Z6Vm1Gc2RXVTdYRzRnSUNBZ2JHRnpkRlZ3WkdGMFpXUWdQU0JqZFhKeVpXNTBSbkpoYldWemRHRnRjRHRjYmlBZ0lDQndjbVYyYVc5MWMxWmhiSFZsSUQwZ2JtVjNWbUZzZFdVN1hHNGdJQ0FnY21WMGRYSnVJRzVsZDFaaGJIVmxPMXh1SUNCOU8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSE51WVhBZ1BTQW9jRzlwYm5SektTQTlQaUI3WEc0Z0lHbG1JQ2gwZVhCbGIyWWdjRzlwYm5SeklEMDlQU0FuYm5WdFltVnlKeWtnZTF4dUlDQWdJSEpsZEhWeWJpQW9kaWtnUFQ0Z1RXRjBhQzV5YjNWdVpDaDJJQzhnY0c5cGJuUnpLU0FxSUhCdmFXNTBjenRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0JzWlhRZ2FTQTlJREE3WEc0Z0lDQWdZMjl1YzNRZ2JuVnRVRzlwYm5SeklEMGdjRzlwYm5SekxteGxibWQwYUR0Y2JseHVJQ0FnSUhKbGRIVnliaUFvZGlrZ1BUNGdlMXh1SUNBZ0lDQWdiR1YwSUd4aGMzUkVhWE4wWVc1alpTQTlJRTFoZEdndVlXSnpLSEJ2YVc1MGMxc3dYU0F0SUhZcE8xeHVYRzRnSUNBZ0lDQm1iM0lnS0drZ1BTQXhPeUJwSUR3Z2JuVnRVRzlwYm5Sek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnY0c5cGJuUWdQU0J3YjJsdWRITmJhVjA3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR1JwYzNSaGJtTmxJRDBnVFdGMGFDNWhZbk1vY0c5cGJuUWdMU0IyS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvWkdsemRHRnVZMlVnUFQwOUlEQXBJSEpsZEhWeWJpQndiMmx1ZER0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvWkdsemRHRnVZMlVnUGlCc1lYTjBSR2x6ZEdGdVkyVXBJSEpsZEhWeWJpQndiMmx1ZEhOYmFTQXRJREZkTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hwSUQwOVBTQnVkVzFRYjJsdWRITWdMU0F4S1NCeVpYUjFjbTRnY0c5cGJuUTdYRzVjYmlBZ0lDQWdJQ0FnYkdGemRFUnBjM1JoYm1ObElEMGdaR2x6ZEdGdVkyVTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNiaUFnZlZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElITjBaWEJ6SUQwZ0tITjBaWEJ6TENCdGFXNGdQU0F3TENCdFlYZ2dQU0F4TENCa2FYSmxZM1JwYjI0Z1BTQW5jM1JoY25RbktTQTlQaUFvZGlrZ1BUNGdlMXh1SUNCamIyNXpkQ0J3Y205bmNtVnpjeUE5SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtHMXBiaXdnYldGNExDQjJLVHRjYmlBZ2NtVjBkWEp1SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektHMXBiaXdnYldGNExDQnpkR1Z3VUhKdlozSmxjM01vYzNSbGNITXNJSEJ5YjJkeVpYTnpMQ0JrYVhKbFkzUnBiMjRwS1R0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQjBjbUZ1YzJadmNtMURhR2xzWkZaaGJIVmxjeUE5SUNoamFHbHNaRlJ5WVc1elptOXliV1Z5Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0J0ZFhSaFlteGxVM1JoZEdVZ1BTQjdmVHRjYmlBZ2NtVjBkWEp1SUNoMktTQTlQaUI3WEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIWXBJSHRjYmlBZ0lDQWdJR052Ym5OMElHTm9hV3hrVkhKaGJuTm1iM0p0WlhJZ1BTQmphR2xzWkZSeVlXNXpabTl5YldWeWMxdHJaWGxkTzF4dUlDQWdJQ0FnYVdZZ0tHTm9hV3hrVkhKaGJuTm1iM0p0WlhJcElIdGNiaUFnSUNBZ0lDQWdiWFYwWVdKc1pWTjBZWFJsVzJ0bGVWMGdQU0JqYUdsc1pGUnlZVzV6Wm05eWJXVnlLSFpiYTJWNVhTazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUcxMWRHRmliR1ZUZEdGMFpUdGNiaUFnZlR0Y2JuMDdYRzVjYmk4dklGVnVhWFFnZEhKaGJuTm1iM0p0WlhKelhHNWxlSEJ2Y25RZ1kyOXVjM1FnY0dWeVkyVnVkQ0E5SUdGd2NHVnVaRlZ1YVhRb0p5VW5LVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmtaV2R5WldWeklEMGdZWEJ3Wlc1a1ZXNXBkQ2duWkdWbkp5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NIZ2dQU0JoY0hCbGJtUlZibWwwS0Nkd2VDY3BPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjbWRpVlc1cGRDQTlJSEJwY0dVb1hHNGdJR05zWVcxd0tEQXNJREkxTlNrc1hHNGdJRTFoZEdndWNtOTFibVJjYmlrN1hHNWNibU52Ym5OMElISm5ZbUZVWlcxd2JHRjBaU0E5SUNoN0lISmxaQ3dnWjNKbFpXNHNJR0pzZFdVc0lHRnNjR2hoSUQwZ01TQjlLU0E5UGx4dUlDQmdjbWRpWVNna2UzSmxaSDBzSUNSN1ozSmxaVzU5TENBa2UySnNkV1Y5TENBa2UyRnNjR2hoZlNsZ08xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtZGlZU0E5SUhCcGNHVW9YRzRnSUhSeVlXNXpabTl5YlVOb2FXeGtWbUZzZFdWektIdGNiaUFnSUNCeVpXUTZJSEpuWWxWdWFYUXNYRzRnSUNBZ1ozSmxaVzQ2SUhKbllsVnVhWFFzWEc0Z0lDQWdZbXgxWlRvZ2NtZGlWVzVwZEN4Y2JpQWdJQ0JoYkhCb1lWeHVJQ0I5S1N4Y2JpQWdjbWRpWVZSbGJYQnNZWFJsWEc0cE8xeHVYRzVqYjI1emRDQm9jMnhoVkdWdGNHeGhkR1VnUFNBb2V5Qm9kV1VzSUhOaGRIVnlZWFJwYjI0c0lHeHBaMmgwYm1WemN5d2dZV3h3YUdFZ1BTQXhJSDBwSUQwK1hHNGdJR0JvYzJ4aEtDUjdhSFZsZlN3Z0pIdHpZWFIxY21GMGFXOXVmU3dnSkh0c2FXZG9kRzVsYzNOOUxDQWtlMkZzY0doaGZTbGdPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdhSE5zWVNBOUlIQnBjR1VvWEc0Z0lIUnlZVzV6Wm05eWJVTm9hV3hrVm1Gc2RXVnpLSHRjYmlBZ0lDQm9kV1U2SUhCaGNuTmxTVzUwTEZ4dUlDQWdJSE5oZEhWeVlYUnBiMjQ2SUhCbGNtTmxiblFzWEc0Z0lDQWdiR2xuYUhSdVpYTnpPaUJ3WlhKalpXNTBMRnh1SUNBZ0lHRnNjR2hoWEc0Z0lIMHBMRnh1SUNCb2MyeGhWR1Z0Y0d4aGRHVmNiaWs3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYjJ4dmNpQTlJQ2gyS1NBOVBpQjdYRzRnSUdsbUlDaDJMbWhoYzA5M2JsQnliM0JsY25SNUtDZHlaV1FuS1NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ5WjJKaEtIWXBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tIWXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb0oyaDFaU2NwS1NCN1hHNGdJQ0FnY21WMGRYSnVJR2h6YkdFb2RpazdYRzRnSUgxY2JpQWdjbVYwZFhKdUlIWTdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWVd4d2FHRWdQU0JqYkdGdGNDZ3dMQ0F4S1R0Y2JseHVZMjl1YzNRZ1lteGxibVFnUFNBb1puSnZiU3dnZEc4c0lIWXBJRDArSUh0Y2JpQWdZMjl1YzNRZ1puSnZiVVY0Y0c4Z1BTQm1jbTl0SUNvZ1puSnZiVHRjYmlBZ1kyOXVjM1FnZEc5RmVIQnZJRDBnZEc4Z0tpQjBienRjYmlBZ2NtVjBkWEp1SUUxaGRHZ3VjM0Z5ZENoMklDb2dLSFJ2Ulhod2J5QXRJR1p5YjIxRmVIQnZLU0FySUdaeWIyMUZlSEJ2S1R0Y2JuMDdYRzR2THlCb2RIUndPaTh2WTI5a1pYQmxiaTVwYnk5dmMzVmliR0ZyWlM5d1pXNHZlRWRXVm1GT1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWW14bGJtUkRiMnh2Y2lBOUlDaG1jbTl0TENCMGJ5a2dQVDRnZTF4dUlDQmpiMjV6ZENCbWNtOXRRMjlzYjNJZ1BTQnBjMU4wY21sdVp5aG1jbTl0S1NBL0lIQmhjbk5sUTI5c2IzSW9abkp2YlNrZ09pQm1jbTl0TzF4dUlDQmpiMjV6ZENCMGIwTnZiRzl5SUQwZ2FYTlRkSEpwYm1jb2RHOHBJRDhnY0dGeWMyVkRiMnh2Y2loMGJ5azZJSFJ2TzF4dVhHNGdJR052Ym5OMElHSnNaVzVrWldRZ1BTQjdJQzR1TG1aeWIyMURiMnh2Y2lCOU8xeHVYRzRnSUhKbGRIVnliaUFvZGlrZ1BUNGdlMXh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCaWJHVnVaR1ZrS1NCN1hHNGdJQ0FnSUNCaWJHVnVaR1ZrVzJ0bGVWMGdQU0JpYkdWdVpDaG1jbTl0UTI5c2IzSmJhMlY1WFN3Z2RHOURiMnh2Y2x0clpYbGRMQ0IyS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdZbXhsYm1SbFpDNXlaV1FnUFNCaWJHVnVaQ2htY205dFEyOXNiM0l1Y21Wa0xDQjBiME52Ykc5eUxuSmxaQ3dnZGlrN1hHNGdJQ0FnWW14bGJtUmxaQzVuY21WbGJpQTlJR0pzWlc1a0tHWnliMjFEYjJ4dmNpNW5jbVZsYml3Z2RHOURiMnh2Y2k1bmNtVmxiaXdnZGlrN1hHNGdJQ0FnWW14bGJtUmxaQzVpYkhWbElEMGdZbXhsYm1Rb1puSnZiVU52Ykc5eUxtSnNkV1VzSUhSdlEyOXNiM0l1WW14MVpTd2dkaWs3WEc0Z0lDQWdZbXhsYm1SbFpDNWhiSEJvWVNBOUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLR1p5YjIxRGIyeHZjaTVoYkhCb1lTd2dkRzlEYjJ4dmNpNWhiSEJvWVN3Z2RpazdYRzRnSUNBZ2NtVjBkWEp1SUdKc1pXNWtaV1E3WEc0Z0lIMDdYRzU5TzF4dVhHNHZMeUJDWlhwcFpYSWdjbVZ6YjJ4MlpYSmNiaTh2SUZKbFptRmpkRzl5WldRZ1puSnZiU0JvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2YUhWbmFITnJMMkpsZW1sbGNpOWliRzlpTDIxaGMzUmxjaTlwYm1SbGVDNXFjMXh1THlvcVhHNGpJeUJVYUdVZ1RVbFVJRXhwWTJWdWMyVWdLRTFKVkNrZ0l5TmNibHh1UTI5d2VYSnBaMmgwSUNoaktTQXlNREV6SUVoMVoyZ2dTMlZ1Ym1Wa2VWeHVYRzVRWlhKdGFYTnphVzl1SUdseklHaGxjbVZpZVNCbmNtRnVkR1ZrTENCbWNtVmxJRzltSUdOb1lYSm5aU3dnZEc4Z1lXNTVJSEJsY25OdmJpQnZZblJoYVc1cGJtY2dZU0JqYjNCNVhHNXZaaUIwYUdseklITnZablIzWVhKbElHRnVaQ0JoYzNOdlkybGhkR1ZrSUdSdlkzVnRaVzUwWVhScGIyNGdabWxzWlhNZ0tIUm9aU0JjSWxOdlpuUjNZWEpsWENJcExDQjBieUJrWldGc1hHNXBiaUIwYUdVZ1UyOW1kSGRoY21VZ2QybDBhRzkxZENCeVpYTjBjbWxqZEdsdmJpd2dhVzVqYkhWa2FXNW5JSGRwZEdodmRYUWdiR2x0YVhSaGRHbHZiaUIwYUdVZ2NtbG5hSFJ6WEc1MGJ5QjFjMlVzSUdOdmNIa3NJRzF2WkdsbWVTd2diV1Z5WjJVc0lIQjFZbXhwYzJnc0lHUnBjM1J5YVdKMWRHVXNJSE4xWW14cFkyVnVjMlVzSUdGdVpDOXZjaUJ6Wld4c1hHNWpiM0JwWlhNZ2IyWWdkR2hsSUZOdlpuUjNZWEpsTENCaGJtUWdkRzhnY0dWeWJXbDBJSEJsY25OdmJuTWdkRzhnZDJodmJTQjBhR1VnVTI5bWRIZGhjbVVnYVhOY2JtWjFjbTVwYzJobFpDQjBieUJrYnlCemJ5d2djM1ZpYW1WamRDQjBieUIwYUdVZ1ptOXNiRzkzYVc1bklHTnZibVJwZEdsdmJuTTZYRzVjYmxSb1pTQmhZbTkyWlNCamIzQjVjbWxuYUhRZ2JtOTBhV05sSUdGdVpDQjBhR2x6SUhCbGNtMXBjM05wYjI0Z2JtOTBhV05sSUhOb1lXeHNJR0psSUdsdVkyeDFaR1ZrSUdsdVhHNWhiR3dnWTI5d2FXVnpJRzl5SUhOMVluTjBZVzUwYVdGc0lIQnZjblJwYjI1eklHOW1JSFJvWlNCVGIyWjBkMkZ5WlM1Y2JseHVWRWhGSUZOUFJsUlhRVkpGSUVsVElGQlNUMVpKUkVWRUlGd2lRVk1nU1ZOY0lpd2dWMGxVU0U5VlZDQlhRVkpTUVU1VVdTQlBSaUJCVGxrZ1MwbE9SQ3dnUlZoUVVrVlRVeUJQVWx4dVNVMVFURWxGUkN3Z1NVNURURlZFU1U1SElFSlZWQ0JPVDFRZ1RFbE5TVlJGUkNCVVR5QlVTRVVnVjBGU1VrRk9WRWxGVXlCUFJpQk5SVkpEU0VGT1ZFRkNTVXhKVkZrc1hHNUdTVlJPUlZOVElFWlBVaUJCSUZCQlVsUkpRMVZNUVZJZ1VGVlNVRTlUUlNCQlRrUWdUazlPU1U1R1VrbE9SMFZOUlU1VUxpQkpUaUJPVHlCRlZrVk9WQ0JUU0VGTVRDQlVTRVZjYmtGVlZFaFBVbE1nVDFJZ1EwOVFXVkpKUjBoVUlFaFBURVJGVWxNZ1FrVWdURWxCUWt4RklFWlBVaUJCVGxrZ1EweEJTVTBzSUVSQlRVRkhSVk1nVDFJZ1QxUklSVkpjYmt4SlFVSkpURWxVV1N3Z1YwaEZWRWhGVWlCSlRpQkJUaUJCUTFSSlQwNGdUMFlnUTA5T1ZGSkJRMVFzSUZSUFVsUWdUMUlnVDFSSVJWSlhTVk5GTENCQlVrbFRTVTVISUVaU1QwMHNYRzVQVlZRZ1QwWWdUMUlnU1U0Z1EwOU9Ua1ZEVkVsUFRpQlhTVlJJSUZSSVJTQlRUMFpVVjBGU1JTQlBVaUJVU0VVZ1ZWTkZJRTlTSUU5VVNFVlNJRVJGUVV4SlRrZFRJRWxPWEc1VVNFVWdVMDlHVkZkQlVrVXVYRzRnS2k5Y2JtTnZibk4wSUhKbGMyOXNkbVV6SUQwZ0tIQnZhVzUwY3lrZ1BUNGdLSFFwSUQwK0lIdGNiaUFnWTI5dWMzUWdkWFFnUFNBeElDMGdkRHRjYmlBZ2NtVjBkWEp1SUNod2IybHVkSE5iTUYwZ0tpQjFkQ0FySUhCdmFXNTBjMXN4WFNBcUlIUXBJQ29nZFhRZ0t5QW9jRzlwYm5Seld6RmRJQ29nZFhRZ0t5QndiMmx1ZEhOYk1sMGdLaUIwS1NBcUlIUTdYRzU5TzF4dVhHNWpiMjV6ZENCeVpYTnZiSFpsTkNBOUlDaHdiMmx1ZEhNcElEMCtJQ2gwS1NBOVBpQjdYRzRnSUdOdmJuTjBJSFYwSUQwZ01TQXRJSFE3WEc0Z0lHTnZibk4wSUdFeElEMGdjRzlwYm5Seld6RmRJQ29nZFhRZ0t5QndiMmx1ZEhOYk1sMGdLaUIwTzF4dUlDQnlaWFIxY200Z0tDaHdiMmx1ZEhOYk1GMGdLaUIxZENBcklIQnZhVzUwYzFzeFhTQXFJSFFwSUNvZ2RYUWdLeUJoTVNBcUlIUXBJQ29nZFhRZ0t5QW9ZVEVnS2lCMWRDQXJJQ2h3YjJsdWRITmJNbDBnS2lCMWRDQXJJSEJ2YVc1MGMxc3pYU0FxSUhRcElDb2dkQ2tnS2lCME8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR0psZW1sbGNpQTlJQ2h3YjJsdWRITXBJRDArWEc0Z0lDaHdiMmx1ZEhNdWJHVnVaM1JvSUQwOVBTQXpLU0EvSUhKbGMyOXNkbVV6S0hCdmFXNTBjeWtnT2lCeVpYTnZiSFpsTkNod2IybHVkSE1wTzF4dUlsMTlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb21wbGV4ID0gZXhwb3J0cy5jb2xvciA9IGV4cG9ydHMuaHNsYSA9IGV4cG9ydHMuaGV4ID0gZXhwb3J0cy5yZ2JhID0gZXhwb3J0cy5yZ2JVbml0ID0gZXhwb3J0cy5zY2FsZSA9IGV4cG9ydHMucHggPSBleHBvcnRzLnBlcmNlbnQgPSBleHBvcnRzLmRlZ3JlZXMgPSBleHBvcnRzLmFscGhhID0gZXhwb3J0cy5udW1iZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVmFsdWUgdHlwZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBhbHBoYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogZGVncmVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBoc2xhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBwZXJjZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBweFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmdiVW5pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmdiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzY2FsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3BhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIG51bWJlciA9IGV4cG9ydHMubnVtYmVyID0ge1xuICB0ZXN0OiBfdXRpbHMuaXNOdW0sXG4gIHBhcnNlOiBwYXJzZUZsb2F0XG59O1xuXG4vLyBWYWx1ZSB0eXBlc1xudmFyIGFscGhhID0gZXhwb3J0cy5hbHBoYSA9IF9leHRlbmRzKHt9LCBudW1iZXIsIHtcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLmFscGhhXG59KTtcblxudmFyIGRlZ3JlZXMgPSBleHBvcnRzLmRlZ3JlZXMgPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgnZGVnJywgX3RyYW5zZm9ybWVycy5kZWdyZWVzKTtcbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJyUnLCBfdHJhbnNmb3JtZXJzLnBlcmNlbnQpO1xudmFyIHB4ID0gZXhwb3J0cy5weCA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCdweCcsIF90cmFuc2Zvcm1lcnMucHgpO1xuXG52YXIgc2NhbGUgPSBleHBvcnRzLnNjYWxlID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICBkZWZhdWx0OiAxXG59KTtcblxudmFyIHJnYlVuaXQgPSBleHBvcnRzLnJnYlVuaXQgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5yZ2JVbml0XG59KTtcblxudmFyIHJnYmEgPSBleHBvcnRzLnJnYmEgPSB7XG4gIHRlc3Q6IF91dGlscy5pc1JnYixcbiAgcGFyc2U6IF9wYXJzZXJzLnJnYmEsXG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5yZ2JhXG59O1xuXG52YXIgaGV4ID0gZXhwb3J0cy5oZXggPSBfZXh0ZW5kcyh7fSwgcmdiYSwge1xuICB0ZXN0OiBfdXRpbHMuaXNIZXgsXG4gIHBhcnNlOiBfcGFyc2Vycy5oZXhcbn0pO1xuXG52YXIgaHNsYSA9IGV4cG9ydHMuaHNsYSA9IHtcbiAgdGVzdDogX3V0aWxzLmlzSHNsLFxuICBwYXJzZTogX3BhcnNlcnMuaHNsYSxcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLmhzbGFcbn07XG5cbnZhciBjb2xvciA9IGV4cG9ydHMuY29sb3IgPSB7XG4gIHBhcnNlOiBfcGFyc2Vycy5jb2xvcixcbiAgdGVzdDogX3V0aWxzLmlzQ29sb3IsXG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5jb2xvclxufTtcblxudmFyIEZMT0FUX1JFR0VYID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xudmFyIGdlbmVyYXRlVG9rZW4gPSBmdW5jdGlvbiBnZW5lcmF0ZVRva2VuKHRva2VuKSB7XG4gIHJldHVybiAnJHsnICsgdG9rZW4gKyAnfSc7XG59O1xudmFyIGNvbXBsZXggPSBleHBvcnRzLmNvbXBsZXggPSB7XG4gIHRlc3Q6IGZ1bmN0aW9uIHRlc3Qodikge1xuICAgIHZhciBtYXRjaGVzID0gdi5tYXRjaCAmJiB2Lm1hdGNoKEZMT0FUX1JFR0VYKTtcbiAgICByZXR1cm4gKDAsIF91dGlscy5pc0FycmF5KShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDE7XG4gIH0sXG4gIHBhcnNlOiBmdW5jdGlvbiBwYXJzZSh2KSB7XG4gICAgdmFyIHBhcnNlZFZhbHVlID0ge307XG4gICAgdi5tYXRjaChGTE9BVF9SRUdFWCkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICAgIHJldHVybiBwYXJzZWRWYWx1ZVtpXSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXJzZWRWYWx1ZTtcbiAgfSxcbiAgY3JlYXRlVHJhbnNmb3JtZXI6IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zZm9ybWVyKHByb3ApIHtcbiAgICB2YXIgY291bnRlciA9IDA7XG4gICAgdmFyIHRlbXBsYXRlID0gcHJvcC5yZXBsYWNlKEZMT0FUX1JFR0VYLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2VuZXJhdGVUb2tlbihjb3VudGVyKyspO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICB2YXIgb3V0cHV0ID0gdGVtcGxhdGU7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdikge1xuICAgICAgICBpZiAodi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoZ2VuZXJhdGVUb2tlbihrZXkpLCB2W2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRtRnNkV1V0ZEhsd1pYTXVhbk1pWFN3aWJtRnRaWE1pT2xzaWJuVnRZbVZ5SWl3aWRHVnpkQ0lzSW5CaGNuTmxJaXdpY0dGeWMyVkdiRzloZENJc0ltRnNjR2hoSWl3aWRISmhibk5tYjNKdElpd2laR1ZuY21WbGN5SXNJbkJsY21ObGJuUWlMQ0p3ZUNJc0luTmpZV3hsSWl3aVpHVm1ZWFZzZENJc0luSm5ZbFZ1YVhRaUxDSnlaMkpoSWl3aWFHVjRJaXdpYUhOc1lTSXNJbU52Ykc5eUlpd2lSa3hQUVZSZlVrVkhSVmdpTENKblpXNWxjbUYwWlZSdmEyVnVJaXdpZEc5clpXNGlMQ0pqYjIxd2JHVjRJaXdpZGlJc0ltMWhkR05vWlhNaUxDSnRZWFJqYUNJc0lteGxibWQwYUNJc0luQmhjbk5sWkZaaGJIVmxJaXdpWm05eVJXRmphQ0lzSW5aaGJIVmxJaXdpYVNJc0ltTnlaV0YwWlZSeVlXNXpabTl5YldWeUlpd2ljSEp2Y0NJc0ltTnZkVzUwWlhJaUxDSjBaVzF3YkdGMFpTSXNJbkpsY0d4aFkyVWlMQ0p2ZFhSd2RYUWlMQ0pyWlhraUxDSm9ZWE5QZDI1UWNtOXdaWEowZVNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN2ExRkJRVUU3T3pzN096czdPenM3T3pzN096dEJRV0ZCT3p0QlFWVkJPenRCUVUxQk96dEJRVlZQTEVsQlFVMUJMREJDUVVGVE8wRkJRM0JDUXl4dlFrRkViMEk3UVVGRmNFSkRMRk5CUVU5RE8wRkJSbUVzUTBGQlpqczdRVUZMVUR0QlFVTlBMRWxCUVUxRExIRkRRVU5TU2l4TlFVUlJPMEZCUlZoTE8wRkJSbGNzUlVGQlRqczdRVUZMUVN4SlFVRk5ReXcwUWtGQlZTd3lRa0ZCWlN4TFFVRm1MSGRDUVVGb1FqdEJRVU5CTEVsQlFVMURMRFJDUVVGVkxESkNRVUZsTEVkQlFXWXNkMEpCUVdoQ08wRkJRMEVzU1VGQlRVTXNhMEpCUVVzc01rSkJRV1VzU1VGQlppeHRRa0ZCV0RzN1FVRkZRU3hKUVVGTlF5eHhRMEZEVWxRc1RVRkVVVHRCUVVWWVZTeFhRVUZUTzBGQlJrVXNSVUZCVGpzN1FVRkxRU3hKUVVGTlF5eDVRMEZEVWxnc1RVRkVVVHRCUVVWWVN6dEJRVVpYTEVWQlFVNDdPMEZCUzBFc1NVRkJUVThzYzBKQlFVODdRVUZEYkVKWUxHOUNRVVJyUWp0QlFVVnNRa01zYzBKQlJtdENPMEZCUjJ4Q1J6dEJRVWhyUWl4RFFVRmlPenRCUVUxQkxFbEJRVTFSTEdsRFFVTlNSQ3hKUVVSUk8wRkJSVmhZTEc5Q1FVWlhPMEZCUjFoRE8wRkJTRmNzUlVGQlRqczdRVUZOUVN4SlFVRk5XU3h6UWtGQlR6dEJRVU5zUW1Jc2IwSkJSR3RDTzBGQlJXeENReXh6UWtGR2EwSTdRVUZIYkVKSE8wRkJTR3RDTEVOQlFXSTdPMEZCVFVFc1NVRkJUVlVzZDBKQlFWRTdRVUZEYmtKaUxIVkNRVVJ0UWp0QlFVVnVRa1FzYzBKQlJtMUNPMEZCUjI1Q1NUdEJRVWh0UWl4RFFVRmtPenRCUVUxUUxFbEJRVTFYTEdOQlFXTXNhMEpCUVhCQ08wRkJRMEVzU1VGQlRVTXNaMEpCUVdkQ0xGTkJRV2hDUVN4aFFVRm5RaXhEUVVGRFF5eExRVUZFTzBGQlFVRXNVMEZCVnl4UFFVRlBRU3hMUVVGUUxFZEJRV1VzUjBGQk1VSTdRVUZCUVN4RFFVRjBRanRCUVVOUExFbEJRVTFETERSQ1FVRlZPMEZCUTNKQ2JFSXNVVUZCVFN4alFVRkRiVUlzUTBGQlJDeEZRVUZQTzBGQlExZ3NVVUZCVFVNc1ZVRkJWVVFzUlVGQlJVVXNTMEZCUml4SlFVRlhSaXhGUVVGRlJTeExRVUZHTEVOQlFWRk9MRmRCUVZJc1EwRkJNMEk3UVVGRFFTeFhRVUZSTEc5Q1FVRlJTeXhQUVVGU0xFdEJRVzlDUVN4UlFVRlJSU3hOUVVGU0xFZEJRV2xDTEVOQlFUZERPMEZCUTBRc1IwRktiMEk3UVVGTGNrSnlRaXhUUVVGUExHVkJRVU5yUWl4RFFVRkVMRVZCUVU4N1FVRkRXaXhSUVVGTlNTeGpRVUZqTEVWQlFYQkNPMEZCUTBGS0xFMUJRVVZGTEV0QlFVWXNRMEZCVVU0c1YwRkJVaXhGUVVGeFFsTXNUMEZCY2tJc1EwRkJOa0lzVlVGQlEwTXNTMEZCUkN4RlFVRlJReXhEUVVGU08wRkJRVUVzWVVGQlkwZ3NXVUZCV1Vjc1EwRkJXaXhKUVVGcFFuaENMRmRCUVZkMVFpeExRVUZZTEVOQlFTOUNPMEZCUVVFc1MwRkJOMEk3UVVGRFFTeFhRVUZQUml4WFFVRlFPMEZCUTBRc1IwRlViMEk3UVVGVmNrSkpMSEZDUVVGdFFpd3lRa0ZCUTBNc1NVRkJSQ3hGUVVGVk8wRkJRek5DTEZGQlFVbERMRlZCUVZVc1EwRkJaRHRCUVVOQkxGRkJRVTFETEZkQlFWZEdMRXRCUVV0SExFOUJRVXdzUTBGQllXaENMRmRCUVdJc1JVRkJNRUk3UVVGQlFTeGhRVUZOUXl4alFVRmpZU3hUUVVGa0xFTkJRVTQ3UVVGQlFTeExRVUV4UWl4RFFVRnFRanM3UVVGRlFTeFhRVUZQTEZWQlFVTldMRU5CUVVRc1JVRkJUenRCUVVOYUxGVkJRVWxoTEZOQlFWTkdMRkZCUVdJN1FVRkRRU3hYUVVGTExFbEJRVWxITEVkQlFWUXNTVUZCWjBKa0xFTkJRV2hDTEVWQlFXMUNPMEZCUTJwQ0xGbEJRVWxCTEVWQlFVVmxMR05CUVVZc1EwRkJhVUpFTEVkQlFXcENMRU5CUVVvc1JVRkJNa0k3UVVGRGVrSkVMRzFDUVVGVFFTeFBRVUZQUkN4UFFVRlFMRU5CUVdWbUxHTkJRV05wUWl4SFFVRmtMRU5CUVdZc1JVRkJiVU5rTEVWQlFVVmpMRWRCUVVZc1EwRkJia01zUTBGQlZEdEJRVU5FTzBGQlEwWTdPMEZCUlVRc1lVRkJUMFFzVFVGQlVEdEJRVU5FTEV0QlZFUTdRVUZWUkR0QlFYaENiMElzUTBGQmFFSWlMQ0ptYVd4bElqb2lkbUZzZFdVdGRIbHdaWE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoY25NdloybDBhSFZpTDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLbHh1SUNvZ1ZtRnNkV1VnZEhsd1pYTmNiaUFxWEc0Z0tpQmhiSEJvWVZ4dUlDb2daR1ZuY21WbGMxeHVJQ29nYUdWNFhHNGdLaUJvYzJ4aFhHNGdLaUJ3WlhKalpXNTBYRzRnS2lCd2VGeHVJQ29nY21kaVZXNXBkRnh1SUNvZ2NtZGlYRzRnS2lCelkyRnNaVnh1SUNvdlhHNXBiWEJ2Y25RZ2UxeHVJQ0J5WjJKVmJtbDBJR0Z6SUhSeVlXNXpabTl5YlZKSFFsVnVhWFFzWEc0Z0lISm5ZbUVnWVhNZ2RISmhibk5tYjNKdFVtZGlZU3hjYmlBZ1lXeHdhR0VnWVhNZ2RISmhibk5tYjNKdFFXeHdhR0VzWEc0Z0lHaHpiR0VnWVhNZ2RISmhibk5tYjNKdFNITnNZU3hjYmlBZ1kyOXNiM0lnWVhNZ2RISmhibk5tYjNKdFEyOXNiM0lzWEc0Z0lIQjRJR0Z6SUhSeVlXNXpabTl5YlZCNExGeHVJQ0J3WlhKalpXNTBJR0Z6SUhSeVlXNXpabTl5YlZCbGNtTmxiblFzWEc0Z0lHUmxaM0psWlhNZ1lYTWdkSEpoYm5ObWIzSnRSR1ZuY21WbGMxeHVmU0JtY205dElDY3VMM1J5WVc1elptOXliV1Z5Y3ljN1hHNXBiWEJ2Y25RZ2UxeHVJQ0JvWlhnZ1lYTWdjR0Z5YzJWSVpYZ3NYRzRnSUhKblltRWdZWE1nY0dGeWMyVlNaMkpoTEZ4dUlDQm9jMnhoSUdGeklIQmhjbk5sU0hOc1lTeGNiaUFnWTI5c2IzSWdZWE1nY0dGeWMyVkRiMnh2Y2x4dWZTQm1jbTl0SUNjdUwzQmhjbk5sY25Nbk8xeHVhVzF3YjNKMElIdGNiaUFnWTNKbFlYUmxWVzVwZEZSNWNHVXNYRzRnSUdselFYSnlZWGtzWEc0Z0lHbHpUblZ0TEZ4dUlDQnBjMUpuWWl4Y2JpQWdhWE5JYzJ3c1hHNGdJR2x6U0dWNExGeHVJQ0JwYzBOdmJHOXlYRzU5SUdaeWIyMGdKeTR2ZFhScGJITW5PMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdiblZ0WW1WeUlEMGdlMXh1SUNCMFpYTjBPaUJwYzA1MWJTeGNiaUFnY0dGeWMyVTZJSEJoY25ObFJteHZZWFJjYm4wN1hHNWNiaTh2SUZaaGJIVmxJSFI1Y0dWelhHNWxlSEJ2Y25RZ1kyOXVjM1FnWVd4d2FHRWdQU0I3WEc0Z0lDNHVMbTUxYldKbGNpeGNiaUFnZEhKaGJuTm1iM0p0T2lCMGNtRnVjMlp2Y20xQmJIQm9ZVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdSbFozSmxaWE1nUFNCamNtVmhkR1ZWYm1sMFZIbHdaU2duWkdWbkp5d2dkSEpoYm5ObWIzSnRSR1ZuY21WbGN5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NHVnlZMlZ1ZENBOUlHTnlaV0YwWlZWdWFYUlVlWEJsS0NjbEp5d2dkSEpoYm5ObWIzSnRVR1Z5WTJWdWRDazdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NIZ2dQU0JqY21WaGRHVlZibWwwVkhsd1pTZ25jSGduTENCMGNtRnVjMlp2Y20xUWVDazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnpZMkZzWlNBOUlIdGNiaUFnTGk0dWJuVnRZbVZ5TEZ4dUlDQmtaV1poZFd4ME9pQXhYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21kaVZXNXBkQ0E5SUh0Y2JpQWdMaTR1Ym5WdFltVnlMRnh1SUNCMGNtRnVjMlp2Y20wNklIUnlZVzV6Wm05eWJWSkhRbFZ1YVhSY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnlaMkpoSUQwZ2UxeHVJQ0IwWlhOME9pQnBjMUpuWWl4Y2JpQWdjR0Z5YzJVNklIQmhjbk5sVW1kaVlTeGNiaUFnZEhKaGJuTm1iM0p0T2lCMGNtRnVjMlp2Y20xU1oySmhYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUdWNElEMGdlMXh1SUNBdUxpNXlaMkpoTEZ4dUlDQjBaWE4wT2lCcGMwaGxlQ3hjYmlBZ2NHRnljMlU2SUhCaGNuTmxTR1Y0WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2FITnNZU0E5SUh0Y2JpQWdkR1Z6ZERvZ2FYTkljMndzWEc0Z0lIQmhjbk5sT2lCd1lYSnpaVWh6YkdFc1hHNGdJSFJ5WVc1elptOXliVG9nZEhKaGJuTm1iM0p0U0hOc1lWeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR052Ykc5eUlEMGdlMXh1SUNCd1lYSnpaVG9nY0dGeWMyVkRiMnh2Y2l4Y2JpQWdkR1Z6ZERvZ2FYTkRiMnh2Y2l4Y2JpQWdkSEpoYm5ObWIzSnRPaUIwY21GdWMyWnZjbTFEYjJ4dmNseHVmVHRjYmx4dVkyOXVjM1FnUmt4UFFWUmZVa1ZIUlZnZ1BTQXZLQzBwUHloY1hHUmJYRnhrWEZ3dVhTb3BMMmM3WEc1amIyNXpkQ0JuWlc1bGNtRjBaVlJ2YTJWdUlEMGdLSFJ2YTJWdUtTQTlQaUFuSkhzbklDc2dkRzlyWlc0Z0t5QW5mU2M3WEc1bGVIQnZjblFnWTI5dWMzUWdZMjl0Y0d4bGVDQTlJSHRjYmlBZ2RHVnpkRG9nS0hZcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCdFlYUmphR1Z6SUQwZ2RpNXRZWFJqYUNBbUppQjJMbTFoZEdOb0tFWk1UMEZVWDFKRlIwVllLVHRjYmlBZ0lDQnlaWFIxY200Z0tHbHpRWEp5WVhrb2JXRjBZMmhsY3lrZ0ppWWdiV0YwWTJobGN5NXNaVzVuZEdnZ1BpQXhLVHRjYmlBZ2ZTeGNiaUFnY0dGeWMyVTZJQ2gyS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnY0dGeWMyVmtWbUZzZFdVZ1BTQjdmVHRjYmlBZ0lDQjJMbTFoZEdOb0tFWk1UMEZVWDFKRlIwVllLUzVtYjNKRllXTm9LQ2gyWVd4MVpTd2dhU2tnUFQ0Z2NHRnljMlZrVm1Gc2RXVmJhVjBnUFNCd1lYSnpaVVpzYjJGMEtIWmhiSFZsS1NrN1hHNGdJQ0FnY21WMGRYSnVJSEJoY25ObFpGWmhiSFZsTzF4dUlDQjlMRnh1SUNCamNtVmhkR1ZVY21GdWMyWnZjbTFsY2pvZ0tIQnliM0FwSUQwK0lIdGNiaUFnSUNCc1pYUWdZMjkxYm5SbGNpQTlJREE3WEc0Z0lDQWdZMjl1YzNRZ2RHVnRjR3hoZEdVZ1BTQndjbTl3TG5KbGNHeGhZMlVvUmt4UFFWUmZVa1ZIUlZnc0lDZ3BJRDArSUdkbGJtVnlZWFJsVkc5clpXNG9ZMjkxYm5SbGNpc3JLU2s3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdLSFlwSUQwK0lIdGNiaUFnSUNBZ0lHeGxkQ0J2ZFhSd2RYUWdQU0IwWlcxd2JHRjBaVHRjYmlBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjJLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDJMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQnZkWFJ3ZFhRZ1BTQnZkWFJ3ZFhRdWNtVndiR0ZqWlNoblpXNWxjbUYwWlZSdmEyVnVLR3RsZVNrc0lIWmJhMlY1WFNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdjbVYwZFhKdUlHOTFkSEIxZER0Y2JpQWdJQ0I5TzF4dUlDQjlYRzU5TzF4dUlsMTlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmMvdmFsdWUtdHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfZWFzaW5nID0gcmVxdWlyZSgnLi4vaW5jL2Vhc2luZycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBjbGFtcFByb2dyZXNzID0gKDAsIF90cmFuc2Zvcm1lcnMuY2xhbXApKDAsIDEpO1xuXG52YXIgTkVYVF9TVEVQUyA9IHtcbiAgbG9vcDogZnVuY3Rpb24gbG9vcCh0d2Vlbikge1xuICAgIHJldHVybiB0d2Vlbi5zdGFydCgpO1xuICB9LFxuICB5b3lvOiBmdW5jdGlvbiB5b3lvKHR3ZWVuKSB7XG4gICAgcmV0dXJuIHR3ZWVuLnJldmVyc2UoKS5zdGFydCgpO1xuICB9LFxuICBmbGlwOiBmdW5jdGlvbiBmbGlwKHR3ZWVuKSB7XG4gICAgcmV0dXJuIHR3ZWVuLmZsaXAoKS5zdGFydCgpO1xuICB9XG59O1xuXG52YXIgVHdlZW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFR3ZWVuKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFR3ZWVuLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb24sXG4gICAgICAgIHBsYXlEaXJlY3Rpb24gPSBfcHJvcHMucGxheURpcmVjdGlvbjtcblxuXG4gICAgdGhpcy5lbGFwc2VkID0gcGxheURpcmVjdGlvbiA9PT0gMSA/IDAgOiBkdXJhdGlvbjtcbiAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMyLmR1cmF0aW9uLFxuICAgICAgICBlYXNlID0gX3Byb3BzMi5lYXNlLFxuICAgICAgICBmcm9tID0gX3Byb3BzMi5mcm9tLFxuICAgICAgICB0byA9IF9wcm9wczIudG8sXG4gICAgICAgIHBsYXlEaXJlY3Rpb24gPSBfcHJvcHMyLnBsYXlEaXJlY3Rpb247XG5cblxuICAgIGlmICghdGhpcy5pc01hbnVhbFVwZGF0ZSkge1xuICAgICAgdGhpcy5lbGFwc2VkICs9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKSAqIHBsYXlEaXJlY3Rpb247XG4gICAgfVxuXG4gICAgdGhpcy5pc01hbnVhbFVwZGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBjbGFtcFByb2dyZXNzKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoMCwgZHVyYXRpb24sIHRoaXMuZWxhcHNlZCkpO1xuXG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZnJvbSwgdG8sIGVhc2UodGhpcy5wcm9ncmVzcykpO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uID0gX3Byb3BzMy5kdXJhdGlvbixcbiAgICAgICAgcGxheURpcmVjdGlvbiA9IF9wcm9wczMucGxheURpcmVjdGlvbixcbiAgICAgICAgeW95byA9IF9wcm9wczMueW95byxcbiAgICAgICAgbG9vcCA9IF9wcm9wczMubG9vcCxcbiAgICAgICAgZmxpcCA9IF9wcm9wczMuZmxpcDtcblxuICAgIHZhciBpc0NvbXBsZXRlID0gcGxheURpcmVjdGlvbiA9PT0gMSA/IHRoaXMuZWxhcHNlZCA+PSBkdXJhdGlvbiA6IHRoaXMuZWxhcHNlZCA8PSAwO1xuXG4gICAgaWYgKGlzQ29tcGxldGUgJiYgKHlveW8gfHwgbG9vcCB8fCBmbGlwKSkge1xuICAgICAgdmFyIGlzU3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgIHZhciBuZXh0U3RlcCA9IE5FWFRfU1RFUFNba2V5XTtcbiAgICAgICAgdmFyIGNvdW50UHJvcCA9IGtleSArICdDb3VudCc7XG4gICAgICAgIHZhciBzdGVwTWF4ID0gdGhpcy5nZXRQcm9wKGtleSk7XG4gICAgICAgIHZhciBzdGVwQ291bnQgPSB0aGlzLmdldFByb3AoY291bnRQcm9wKTtcblxuICAgICAgICBpZiAoc3RlcE1heCA+IHN0ZXBDb3VudCkge1xuICAgICAgICAgIHZhciBfc2V0UHJvcHM7XG5cbiAgICAgICAgICB0aGlzLnNldFByb3BzKChfc2V0UHJvcHMgPSB7fSwgX3NldFByb3BzW2NvdW50UHJvcF0gPSBzdGVwQ291bnQgKyAxLCBfc2V0UHJvcHMpKTtcbiAgICAgICAgICBuZXh0U3RlcCh0aGlzKTtcbiAgICAgICAgICBpc1N0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzU3RlcFRha2VuKSBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzQ29tcGxldGU7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLmdldEVsYXBzZWQgPSBmdW5jdGlvbiBnZXRFbGFwc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmVsYXBzZWQ7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLmZsaXAgPSBmdW5jdGlvbiBmbGlwKCkge1xuICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMucHJvcHMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG4gICAgdmFyIF9yZWYgPSBbdGhpcy5wcm9wcy50bywgdGhpcy5wcm9wcy5mcm9tXTtcbiAgICB0aGlzLnByb3BzLmZyb20gPSBfcmVmWzBdO1xuICAgIHRoaXMucHJvcHMudG8gPSBfcmVmWzFdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgIHRoaXMucHJvcHMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuc2VlayA9IGZ1bmN0aW9uIHNlZWsocHJvZ3Jlc3MpIHtcbiAgICB2YXIgZHVyYXRpb24gPSB0aGlzLnByb3BzLmR1cmF0aW9uO1xuXG4gICAgdGhpcy5lbGFwc2VkID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKSgwLCBkdXJhdGlvbiwgcHJvZ3Jlc3MpO1xuICAgIHRoaXMuaXNNYW51YWxVcGRhdGUgPSB0cnVlO1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSB0aGlzLnNjaGVkdWxlZFVwZGF0ZSgpO1xuICB9O1xuXG4gIHJldHVybiBUd2Vlbjtcbn0oXzIuZGVmYXVsdCk7XG5cblR3ZWVuLmRlZmF1bHRQcm9wcyA9IHtcbiAgZHVyYXRpb246IDMwMCxcbiAgZWFzZTogX2Vhc2luZy5lYXNlT3V0LFxuICBmcm9tOiAwLFxuICB0bzogMSxcbiAgZmxpcDogMCxcbiAgZmxpcENvdW50OiAwLFxuICB5b3lvOiAwLFxuICB5b3lvQ291bnQ6IDAsXG4gIGxvb3A6IDAsXG4gIGxvb3BDb3VudDogMCxcbiAgcGxheURpcmVjdGlvbjogMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgVHdlZW4ocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1IzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiSW1Oc1lXMXdVSEp2WjNKbGMzTWlMQ0pPUlZoVVgxTlVSVkJUSWl3aWJHOXZjQ0lzSW5SM1pXVnVJaXdpYzNSaGNuUWlMQ0o1YjNsdklpd2ljbVYyWlhKelpTSXNJbVpzYVhBaUxDSlVkMlZsYmlJc0ltOXVVM1JoY25RaUxDSndjbTl3Y3lJc0ltUjFjbUYwYVc5dUlpd2ljR3hoZVVScGNtVmpkR2x2YmlJc0ltVnNZWEJ6WldRaUxDSndjbTluY21WemN5SXNJblZ3WkdGMFpTSXNJbVZoYzJVaUxDSm1jbTl0SWl3aWRHOGlMQ0pwYzAxaGJuVmhiRlZ3WkdGMFpTSXNJbWx6UVdOMGFXOXVRMjl0Y0d4bGRHVWlMQ0pwYzBOdmJYQnNaWFJsSWl3aWFYTlRkR1Z3VkdGclpXNGlMQ0pyWlhraUxDSnVaWGgwVTNSbGNDSXNJbU52ZFc1MFVISnZjQ0lzSW5OMFpYQk5ZWGdpTENKblpYUlFjbTl3SWl3aWMzUmxjRU52ZFc1MElpd2ljMlYwVUhKdmNITWlMQ0puWlhSRmJHRndjMlZrSWl3aWMyVmxheUlzSW1selFXTjBhWFpsSWl3aWMyTm9aV1IxYkdWa1ZYQmtZWFJsSWl3aVpHVm1ZWFZzZEZCeWIzQnpJaXdpWm14cGNFTnZkVzUwSWl3aWVXOTViME52ZFc1MElpd2liRzl2Y0VOdmRXNTBJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN1FVRkRRVHM3UVVGRFFUczdRVUZEUVRzN096czdPenM3T3p0QlFVVkJMRWxCUVUxQkxHZENRVUZuUWl4NVFrRkJUU3hEUVVGT0xFVkJRVk1zUTBGQlZDeERRVUYwUWpzN1FVRkZRU3hKUVVGTlF5eGhRVUZoTzBGQlEycENReXhSUVVGTkxHTkJRVU5ETEV0QlFVUTdRVUZCUVN4WFFVRlhRU3hOUVVGTlF5eExRVUZPTEVWQlFWZzdRVUZCUVN4SFFVUlhPMEZCUldwQ1F5eFJRVUZOTEdOQlFVTkdMRXRCUVVRN1FVRkJRU3hYUVVGWFFTeE5RVUZOUnl4UFFVRk9MRWRCUVdkQ1JpeExRVUZvUWl4RlFVRllPMEZCUVVFc1IwRkdWenRCUVVkcVFrY3NVVUZCVFN4alFVRkRTaXhMUVVGRU8wRkJRVUVzVjBGQlYwRXNUVUZCVFVrc1NVRkJUaXhIUVVGaFNDeExRVUZpTEVWQlFWZzdRVUZCUVR0QlFVaFhMRU5CUVc1Q096dEpRVTFOU1N4TE96czdPenM3T3pzN2EwSkJaVXBETEU4c2MwSkJRVlU3UVVGQlFTeHBRa0ZETkVJc1MwRkJTME1zUzBGRWFrTTdRVUZCUVN4UlFVTkJReXhSUVVSQkxGVkJRMEZCTEZGQlJFRTdRVUZCUVN4UlFVTlZReXhoUVVSV0xGVkJRMVZCTEdGQlJGWTdPenRCUVVkU0xGTkJRVXRETEU5QlFVd3NSMEZCWjBKRUxHdENRVUZyUWl4RFFVRnVRaXhIUVVGM1FpeERRVUY0UWl4SFFVRTBRa1FzVVVGQk0wTTdRVUZEUVN4VFFVRkxSeXhSUVVGTUxFZEJRV2RDTEVOQlFXaENPMEZCUTBRc1J6czdhMEpCUlVSRExFMHNjVUpCUVZNN1FVRkJRU3hyUWtGRE5rTXNTMEZCUzB3c1MwRkViRVE3UVVGQlFTeFJRVU5EUXl4UlFVUkVMRmRCUTBOQkxGRkJSRVE3UVVGQlFTeFJRVU5YU3l4SlFVUllMRmRCUTFkQkxFbEJSRmc3UVVGQlFTeFJRVU5wUWtNc1NVRkVha0lzVjBGRGFVSkJMRWxCUkdwQ08wRkJRVUVzVVVGRGRVSkRMRVZCUkhaQ0xGZEJRM1ZDUVN4RlFVUjJRanRCUVVGQkxGRkJRekpDVGl4aFFVUXpRaXhYUVVNeVFrRXNZVUZFTTBJN096dEJRVWRRTEZGQlFVa3NRMEZCUXl4TFFVRkxUeXhqUVVGV0xFVkJRVEJDTzBGQlEzaENMRmRCUVV0T0xFOUJRVXdzU1VGQlowSXNkVU5CUVhWQ1JDeGhRVUYyUXp0QlFVTkVPenRCUVVWRUxGTkJRVXRQTEdOQlFVd3NSMEZCYzBJc1MwRkJkRUk3UVVGRFFTeFRRVUZMVEN4UlFVRk1MRWRCUVdkQ1pDeGpRVUZqTEdkRFFVRnhRaXhEUVVGeVFpeEZRVUYzUWxjc1VVRkJlRUlzUlVGQmEwTXNTMEZCUzBVc1QwRkJka01zUTBGQlpDeERRVUZvUWpzN1FVRkZRU3hYUVVGUExHZERRVUZ4UWtrc1NVRkJja0lzUlVGQk1rSkRMRVZCUVROQ0xFVkJRU3RDUml4TFFVRkxMRXRCUVV0R0xGRkJRVllzUTBGQkwwSXNRMEZCVUR0QlFVTkVMRWM3TzJ0Q1FVVkVUU3huUWl3clFrRkJiVUk3UVVGQlFTeHJRa0ZEY1VNc1MwRkJTMVlzUzBGRU1VTTdRVUZCUVN4UlFVTlVReXhSUVVSVExGZEJRMVJCTEZGQlJGTTdRVUZCUVN4UlFVTkRReXhoUVVSRUxGZEJRME5CTEdGQlJFUTdRVUZCUVN4UlFVTm5RbEFzU1VGRWFFSXNWMEZEWjBKQkxFbEJSR2hDTzBGQlFVRXNVVUZEYzBKSUxFbEJSSFJDTEZkQlEzTkNRU3hKUVVSMFFqdEJRVUZCTEZGQlF6UkNTeXhKUVVRMVFpeFhRVU0wUWtFc1NVRkVOVUk3TzBGQlJXcENMRkZCUVVsakxHRkJRV05VTEd0Q1FVRnJRaXhEUVVGdVFpeEhRVUY1UWl4TFFVRkxReXhQUVVGTUxFbEJRV2RDUml4UlFVRjZReXhIUVVGelJDeExRVUZMUlN4UFFVRk1MRWxCUVdkQ0xFTkJRWFpHT3p0QlFVVkJMRkZCUVVsUkxHVkJRV1ZvUWl4UlFVRlJTQ3hKUVVGU0xFbEJRV2RDU3l4SlFVRXZRaXhEUVVGS0xFVkJRVEJETzBGQlEzaERMRlZCUVVsbExHTkJRV01zUzBGQmJFSTdPMEZCUlVFc1YwRkJTeXhKUVVGSlF5eEhRVUZVTEVsQlFXZENkRUlzVlVGQmFFSXNSVUZCTkVJN1FVRkRNVUlzV1VGQlRYVkNMRmRCUVZkMlFpeFhRVUZYYzBJc1IwRkJXQ3hEUVVGcVFqdEJRVU5CTEZsQlFVMUZMRmxCUVZsR0xFMUJRVTBzVDBGQmVFSTdRVUZEUVN4WlFVRk5SeXhWUVVGVkxFdEJRVXRETEU5QlFVd3NRMEZCWVVvc1IwRkJZaXhEUVVGb1FqdEJRVU5CTEZsQlFVMUxMRmxCUVZrc1MwRkJTMFFzVDBGQlRDeERRVUZoUml4VFFVRmlMRU5CUVd4Q096dEJRVVZCTEZsQlFVbERMRlZCUVZWRkxGTkJRV1FzUlVGQmVVSTdRVUZCUVRzN1FVRkRka0lzWlVGQlMwTXNVVUZCVEN3MFFrRkRSMG9zVTBGRVNDeEpRVU5sUnl4WlFVRlpMRU5CUkROQ08wRkJSMEZLTEcxQ1FVRlRMRWxCUVZRN1FVRkRRVVlzZDBKQlFXTXNTVUZCWkR0QlFVTkVPMEZCUTBZN08wRkJSVVFzVlVGQlNVRXNWMEZCU2l4RlFVRnBRa1FzWVVGQllTeExRVUZpTzBGQlEyeENPenRCUVVWRUxGZEJRVTlCTEZWQlFWQTdRVUZEUkN4SE96dHJRa0ZGUkZNc1ZTeDVRa0ZCWVR0QlFVTllMRmRCUVU4c1MwRkJTMnBDTEU5QlFWbzdRVUZEUkN4SE96dHJRa0ZGUkU0c1NTeHRRa0ZCVHp0QlFVTk1MRk5CUVV0TkxFOUJRVXdzUjBGQlpTeExRVUZMU0N4TFFVRk1MRU5CUVZkRExGRkJRVmdzUjBGQmMwSXNTMEZCUzBVc1QwRkJNVU03UVVGRVN5eGxRVVU0UWl4RFFVRkRMRXRCUVV0SUxFdEJRVXdzUTBGQlYxRXNSVUZCV2l4RlFVRm5RaXhMUVVGTFVpeExRVUZNTEVOQlFWZFBMRWxCUVROQ0xFTkJSamxDTzBGQlJVb3NVMEZCUzFBc1MwRkJUQ3hEUVVGWFR5eEpRVVpRTzBGQlJXRXNVMEZCUzFBc1MwRkJUQ3hEUVVGWFVTeEZRVVo0UWpzN1FVRkhUQ3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenRyUWtGRlJGb3NUeXh6UWtGQlZUdEJRVU5TTEZOQlFVdEpMRXRCUVV3c1EwRkJWMFVzWVVGQldDeEpRVUUwUWl4RFFVRkRMRU5CUVRkQ08wRkJRMEVzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YTBKQlJVUnRRaXhKTEdsQ1FVRkxha0lzVVN4RlFVRlZPMEZCUVVFc1VVRkRURWdzVVVGRVN5eEhRVU5STEV0QlFVdEVMRXRCUkdJc1EwRkRURU1zVVVGRVN6czdRVUZGWWl4VFFVRkxSU3hQUVVGTUxFZEJRV1VzWjBOQlFYRkNMRU5CUVhKQ0xFVkJRWGRDUml4UlFVRjRRaXhGUVVGclEwY3NVVUZCYkVNc1EwRkJaanRCUVVOQkxGTkJRVXRMTEdOQlFVd3NSMEZCYzBJc1NVRkJkRUk3UVVGRFFTeFJRVUZKTEVOQlFVTXNTMEZCUzJFc1VVRkJUQ3hGUVVGTUxFVkJRWE5DTEV0QlFVdERMR1ZCUVV3N1FVRkRka0lzUnpzN096czdRVUZ1UmtkNlFpeExMRU5CUTBjd1FpeFpMRWRCUVdVN1FVRkRjRUoyUWl4WlFVRlZMRWRCUkZVN1FVRkZjRUpMTEhWQ1FVWnZRanRCUVVkd1FrTXNVVUZCVFN4RFFVaGpPMEZCU1hCQ1F5eE5RVUZKTEVOQlNtZENPMEZCUzNCQ1dDeFJRVUZOTEVOQlRHTTdRVUZOY0VJMFFpeGhRVUZYTEVOQlRsTTdRVUZQY0VJNVFpeFJRVUZOTEVOQlVHTTdRVUZSY0VJclFpeGhRVUZYTEVOQlVsTTdRVUZUY0VKc1F5eFJRVUZOTEVOQlZHTTdRVUZWY0VKdFF5eGhRVUZYTEVOQlZsTTdRVUZYY0VKNlFpeHBRa0ZCWlR0QlFWaExMRU03TzJ0Q1FYRkdWQ3hWUVVGRFJpeExRVUZFTzBGQlFVRXNVMEZCVnl4SlFVRkpSaXhMUVVGS0xFTkJRVlZGTEV0QlFWWXNRMEZCV0R0QlFVRkJMRU1pTENKbWFXeGxJam9pZEhkbFpXNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk12WjJsMGFIVmlMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1YVcxd2IzSjBJSHNnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsSUgwZ1puSnZiU0FuTGk0dlpuSmhiV1Z6ZVc1akp6dGNibWx0Y0c5eWRDQjdJR05zWVcxd0lIMGdabkp2YlNBbkxpNHZhVzVqTDNSeVlXNXpabTl5YldWeWN5YzdYRzVwYlhCdmNuUWdleUJuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlN3Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1cGJYQnZjblFnZXlCbFlYTmxUM1YwSUgwZ1puSnZiU0FuTGk0dmFXNWpMMlZoYzJsdVp5YzdYRzVjYm1OdmJuTjBJR05zWVcxd1VISnZaM0psYzNNZ1BTQmpiR0Z0Y0Nnd0xDQXhLVHRjYmx4dVkyOXVjM1FnVGtWWVZGOVRWRVZRVXlBOUlIdGNiaUFnYkc5dmNEb2dLSFIzWldWdUtTQTlQaUIwZDJWbGJpNXpkR0Z5ZENncExGeHVJQ0I1YjNsdk9pQW9kSGRsWlc0cElEMCtJSFIzWldWdUxuSmxkbVZ5YzJVb0tTNXpkR0Z5ZENncExGeHVJQ0JtYkdsd09pQW9kSGRsWlc0cElEMCtJSFIzWldWdUxtWnNhWEFvS1M1emRHRnlkQ2dwWEc1OU8xeHVYRzVqYkdGemN5QlVkMlZsYmlCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lITjBZWFJwWXlCa1pXWmhkV3gwVUhKdmNITWdQU0I3WEc0Z0lDQWdaSFZ5WVhScGIyNDZJRE13TUN4Y2JpQWdJQ0JsWVhObE9pQmxZWE5sVDNWMExGeHVJQ0FnSUdaeWIyMDZJREFzWEc0Z0lDQWdkRzg2SURFc1hHNGdJQ0FnWm14cGNEb2dNQ3hjYmlBZ0lDQm1iR2x3UTI5MWJuUTZJREFzWEc0Z0lDQWdlVzk1YnpvZ01DeGNiaUFnSUNCNWIzbHZRMjkxYm5RNklEQXNYRzRnSUNBZ2JHOXZjRG9nTUN4Y2JpQWdJQ0JzYjI5d1EyOTFiblE2SURBc1hHNGdJQ0FnY0d4aGVVUnBjbVZqZEdsdmJqb2dNVnh1SUNCOU8xeHVYRzRnSUc5dVUzUmhjblFvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJrZFhKaGRHbHZiaXdnY0d4aGVVUnBjbVZqZEdsdmJpQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JseHVJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQTlJQ2h3YkdGNVJHbHlaV04wYVc5dUlEMDlQU0F4S1NBL0lEQWdPaUJrZFhKaGRHbHZianRjYmlBZ0lDQjBhR2x6TG5CeWIyZHlaWE56SUQwZ01EdGNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHUjFjbUYwYVc5dUxDQmxZWE5sTENCbWNtOXRMQ0IwYnl3Z2NHeGhlVVJwY21WamRHbHZiaUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNibHh1SUNBZ0lHbG1JQ2doZEdocGN5NXBjMDFoYm5WaGJGVndaR0YwWlNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJQ3M5SUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNncElDb2djR3hoZVVScGNtVmpkR2x2Ymp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IwYUdsekxtbHpUV0Z1ZFdGc1ZYQmtZWFJsSUQwZ1ptRnNjMlU3WEc0Z0lDQWdkR2hwY3k1d2NtOW5jbVZ6Y3lBOUlHTnNZVzF3VUhKdlozSmxjM01vWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb01Dd2daSFZ5WVhScGIyNHNJSFJvYVhNdVpXeGhjSE5sWkNrcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektHWnliMjBzSUhSdkxDQmxZWE5sS0hSb2FYTXVjSEp2WjNKbGMzTXBLVHRjYmlBZ2ZWeHVYRzRnSUdselFXTjBhVzl1UTI5dGNHeGxkR1VvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJrZFhKaGRHbHZiaXdnY0d4aGVVUnBjbVZqZEdsdmJpd2dlVzk1Ynl3Z2JHOXZjQ3dnWm14cGNDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0JzWlhRZ2FYTkRiMjF3YkdWMFpTQTlJQ2h3YkdGNVJHbHlaV04wYVc5dUlEMDlQU0F4S1NBL0lDaDBhR2x6TG1Wc1lYQnpaV1FnUGowZ1pIVnlZWFJwYjI0cElEb2dLSFJvYVhNdVpXeGhjSE5sWkNBOFBTQXdLVHRjYmx4dUlDQWdJR2xtSUNocGMwTnZiWEJzWlhSbElDWW1JQ2g1YjNsdklIeDhJR3h2YjNBZ2ZId2dabXhwY0NrcElIdGNiaUFnSUNBZ0lHeGxkQ0JwYzFOMFpYQlVZV3RsYmlBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnVGtWWVZGOVRWRVZRVXlrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCdVpYaDBVM1JsY0NBOUlFNUZXRlJmVTFSRlVGTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWTI5MWJuUlFjbTl3SUQwZ2EyVjVJQ3NnSjBOdmRXNTBKenRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjM1JsY0UxaGVDQTlJSFJvYVhNdVoyVjBVSEp2Y0NoclpYa3BPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnpkR1Z3UTI5MWJuUWdQU0IwYUdsekxtZGxkRkJ5YjNBb1kyOTFiblJRY205d0tUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2MzUmxjRTFoZUNBK0lITjBaWEJEYjNWdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXVjMlYwVUhKdmNITW9lMXh1SUNBZ0lDQWdJQ0FnSUNBZ1cyTnZkVzUwVUhKdmNGMDZJSE4wWlhCRGIzVnVkQ0FySURGY2JpQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnSUNCdVpYaDBVM1JsY0NoMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnSUNCcGMxTjBaWEJVWVd0bGJpQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lnS0dselUzUmxjRlJoYTJWdUtTQnBjME52YlhCc1pYUmxJRDBnWm1Gc2MyVTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUdselEyOXRjR3hsZEdVN1hHNGdJSDFjYmx4dUlDQm5aWFJGYkdGd2MyVmtLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1Wc1lYQnpaV1E3WEc0Z0lIMWNibHh1SUNCbWJHbHdLQ2tnZTF4dUlDQWdJSFJvYVhNdVpXeGhjSE5sWkNBOUlIUm9hWE11Y0hKdmNITXVaSFZ5WVhScGIyNGdMU0IwYUdsekxtVnNZWEJ6WldRN1hHNGdJQ0FnVzNSb2FYTXVjSEp2Y0hNdVpuSnZiU3dnZEdocGN5NXdjbTl3Y3k1MGIxMGdQU0JiZEdocGN5NXdjbTl3Y3k1MGJ5d2dkR2hwY3k1d2NtOXdjeTVtY205dFhUdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJSEpsZG1WeWMyVW9LU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTV3YkdGNVJHbHlaV04wYVc5dUlDbzlJQzB4TzF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2MyVmxheWh3Y205bmNtVnpjeWtnZTF4dUlDQWdJR052Ym5OMElIc2daSFZ5WVhScGIyNGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lEMGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vTUN3Z1pIVnlZWFJwYjI0c0lIQnliMmR5WlhOektUdGNiaUFnSUNCMGFHbHpMbWx6VFdGdWRXRnNWWEJrWVhSbElEMGdkSEoxWlR0Y2JpQWdJQ0JwWmlBb0lYUm9hWE11YVhOQlkzUnBkbVVvS1NrZ2RHaHBjeTV6WTJobFpIVnNaV1JWY0dSaGRHVW9LVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvY0hKdmNITXBJRDArSUc1bGR5QlVkMlZsYmlod2NtOXdjeWs3WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL3R3ZWVuLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVuZGVyZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuZGVyZXIpO1xuXG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcywgcHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMuY2hhbmdlZFZhbHVlcyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IHN0YXRlLlxuICAgKiBJZiBga2V5YCBpcyBub3QgZGVmaW5lZCwgcmV0dXJuIGVudGlyZSBjYWNoZWQgc3RhdGUuXG4gICAqIElmIGBrZXlgIGlzIGRlZmluZWQsIHJldHVybiBjYWNoZWQgdmFsdWUgaWYgcHJlc2VudC5cbiAgICogSWYgYGtleWAgaXMgZGVmaW5lZCBhbmQgY2FjaGVkIHZhbHVlIGlzIG5vdCBwcmVzZW50LCByZWFkIGFuZCByZXR1cm4uXG4gICAqIEBwYXJhbSAge3N0cmluZ30gKG9wdGlvbmFsKSBrZXkgb2YgdmFsdWVcbiAgICogQHJldHVybiB7dmFsdWV9XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQoa2V5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZWFkIHZhbHVlIGFjY29yZGluZyB0byBgb25SZWFkYFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IE5hbWUgb2YgcHJvcGVydHkgdG8gcmVhZFxuICAgKiBAcmV0dXJuIHtbdHlwZV19XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiByZWFkKGtleSkge1xuICAgIGlmICh0aGlzLm9uUmVhZCkge1xuICAgICAgcmV0dXJuIHRoaXMub25SZWFkKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgYHN0YXRlYCB3aXRoIG5ldyB2YWx1ZXMgYW5kIHNjaGVkdWxlIGByZW5kZXJgLlxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzXG4gICAqIEBwYXJhbSB7dmFsdWV9IHZhbHVlIHRvc2V0XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgdmFsdWVzID0gYXJnc1swXTtcbiAgICAgIC8vIFNldCBtdWx0aXBsZSB2YWx1ZXNcblxuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICB0aGlzLnNldFZhbHVlKGtleSwgdmFsdWVzW2tleV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2tleTIgPSBhcmdzWzBdLFxuICAgICAgICAgIHZhbHVlID0gYXJnc1sxXTtcblxuICAgICAgdGhpcy5zZXRWYWx1ZShfa2V5MiwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVSZW5kZXIpKHRoaXMucmVuZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyA+IFdpbGV5IC0gNiBpbiB0aGUgTW9ybmluZ1xuICAvKipcbiAgICogU2V0IGEgc2luZ2xlIHZhbHVlXG4gICAqIElmIGEgc3RyaW5nIG9yIG51bWJlciwgc2V0IGRpcmVjdGx5LlxuICAgKiBJZiBhbiBvYmplY3Qgb3IgYXJyYXksIGNyZWF0ZSBuZXcgb2JqZWN0IG9yIGFycmF5XG4gICAqIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC4gVGhlbiBzaGFsbG93IGNvbXBhcmVcbiAgICogdG8gc2V0IGFuZCBjb21wYXJlIGluZGl2aWR1YWwgdmFsdWVzLlxuICAgKiBPbmUgb2YgdGhlIGNsZWFyZXIgZHJhd2JhY2tzIGFuZCBhbm5veWFuY2VzIHdpdGhcbiAgICogdXNpbmcgbXV0YWJsZSBpbnN0ZWFkIG9mIGltbXV0YWJsZSBzdGF0ZXMuXG4gICAqIEBwYXJhbSB7W3R5cGVdfSBrZXlcbiAgICogQHBhcmFtIHtbdHlwZV19IHZhbHVlXG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gc2V0VmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSB0aGlzLnN0YXRlW2tleV07XG5cbiAgICAvLyBJZiBudW1iZXIgb3Igc3RyaW5nLCBzZXQgZGlyZWN0bHlcbiAgICBpZiAoKDAsIF91dGlscy5pc051bSkodmFsdWUpIHx8ICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlKSkge1xuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLmlzQXJyYXkpKHZhbHVlKSkge1xuICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gW107XG4gICAgICB9XG5cbiAgICAgIHZhciBudW1WYWx1ZXMgPSB2YWx1ZS5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVZhbHVlczsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV1baV0gIT09IHZhbHVlW2ldKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldW2ldID0gdmFsdWVbaV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc09iaikodmFsdWUpKSB7XG4gICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgdmFsdWVLZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gIT09IHZhbHVlW3ZhbHVlS2V5XSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gPSB2YWx1ZVt2YWx1ZUtleV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQgJiYgdGhpcy5jaGFuZ2VkVmFsdWVzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5wdXNoKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBGaXJlcyBgb25SZW5kZXJgIGlmIHZhbHVlcyBoYXZlIGNoYW5nZWQgb3IgYGZvcmNlUmVuZGVyYFxuICAgKiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBmb3JjZVJlbmRlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICBpZiAoKGZvcmNlUmVuZGVyIHx8IHRoaXMuaGFzQ2hhbmdlZCkgJiYgdGhpcy5vblJlbmRlcikge1xuICAgICAgdGhpcy5vblJlbmRlcigpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIFJlbmRlcmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2xzaVVtVnVaR1Z5WlhJaUxDSndjbTl3Y3lJc0luSmxibVJsY2lJc0ltSnBibVFpTENKamIyNXpkSEoxWTNSdmNpSXNJbVJsWm1GMWJIUlFjbTl3Y3lJc0luTjBZWFJsSWl3aVkyaGhibWRsWkZaaGJIVmxjeUlzSW1kbGRDSXNJbXRsZVNJc0luVnVaR1ZtYVc1bFpDSXNJbkpsWVdRaUxDSnZibEpsWVdRaUxDSnpaWFFpTENKaGNtZHpJaXdpZG1Gc2RXVnpJaXdpYzJWMFZtRnNkV1VpTENKMllXeDFaU0lzSW1oaGMwTm9ZVzVuWldRaUxDSmpkWEp5Wlc1MFZtRnNkV1VpTENKdWRXMVdZV3gxWlhNaUxDSnNaVzVuZEdnaUxDSnBJaXdpZG1Gc2RXVkxaWGtpTENKcGJtUmxlRTltSWl3aWNIVnphQ0lzSW1admNtTmxVbVZ1WkdWeUlpd2liMjVTWlc1a1pYSWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGQk96dEJRVU5CT3pzN08wbEJSVTFCTEZFN1FVRkRTaXh2UWtGQldVTXNTMEZCV2l4RlFVRnRRanRCUVVGQk96dEJRVU5xUWl4VFFVRkxReXhOUVVGTUxFZEJRV01zUzBGQlMwRXNUVUZCVEN4RFFVRlpReXhKUVVGYUxFTkJRV2xDTEVsQlFXcENMRU5CUVdRN08wRkJSVUVzVTBGQlMwWXNTMEZCVEN4blFrRkRTeXhMUVVGTFJ5eFhRVUZNTEVOQlFXbENReXhaUVVSMFFpeEZRVVZMU2l4TFFVWk1PenRCUVV0QkxGTkJRVXRMTEV0QlFVd3NSMEZCWVN4RlFVRmlPMEZCUTBFc1UwRkJTME1zWVVGQlRDeEhRVUZ4UWl4RlFVRnlRanRCUVVORU96dEJRVVZFT3pzN096czdPenM3TzNGQ1FWRkJReXhITEdkQ1FVRkpReXhITEVWQlFVczdRVUZEVUN4UlFVRkpRU3hIUVVGS0xFVkJRVk03UVVGRFVDeFZRVUZKTEV0QlFVdElMRXRCUVV3c1EwRkJWMGNzUjBGQldDeE5RVUZ2UWtNc1UwRkJlRUlzUlVGQmJVTTdRVUZEYWtNc1pVRkJUeXhMUVVGTFNpeExRVUZNTEVOQlFWZEhMRWRCUVZnc1EwRkJVRHRCUVVORUxFOUJSa1FzVFVGRlR6dEJRVU5NTEdWQlFVOHNTMEZCUzBVc1NVRkJUQ3hEUVVGVlJpeEhRVUZXTEVOQlFWQTdRVUZEUkR0QlFVTkdMRXRCVGtRc1RVRk5UenRCUVVOTUxHRkJRVThzUzBGQlMwZ3NTMEZCV2p0QlFVTkVPMEZCUTBZc1J6czdRVUZGUkRzN096czdPenR4UWtGTFFVc3NTU3hwUWtGQlMwWXNSeXhGUVVGTE8wRkJRMUlzVVVGQlNTeExRVUZMUnl4TlFVRlVMRVZCUVdsQ08wRkJRMllzWVVGQlR5eExRVUZMUVN4TlFVRk1MRU5CUVZsSUxFZEJRVm9zUTBGQlVEdEJRVU5FTzBGQlEwWXNSenM3UVVGRlJEczdPenM3T3p0eFFrRkxRVWtzUnl4clFrRkJZVHRCUVVGQkxITkRRVUZPUXl4SlFVRk5PMEZCUVU1QkxGVkJRVTA3UVVGQlFUczdRVUZEV0N4UlFVRkpMRTlCUVU5QkxFdEJRVXNzUTBGQlRDeERRVUZRTEV0QlFXMUNMRmRCUVhaQ0xFVkJRVzlETzBGQlFVRXNWVUZETVVKRExFMUJSREJDTEVkQlEyWkVMRWxCUkdVN1FVRkZiRU03TzBGQlEwRXNWMEZCU3l4SlFVRk5UQ3hIUVVGWUxFbEJRV3RDVFN4TlFVRnNRaXhGUVVFd1FqdEJRVU40UWl4aFFVRkxReXhSUVVGTUxFTkJRV05RTEVkQlFXUXNSVUZCYlVKTkxFOUJRVTlPTEVkQlFWQXNRMEZCYmtJN1FVRkRSRHRCUVVOR0xFdEJUa1FzVFVGTlR6dEJRVUZCTEZWQlEwZEJMRXRCUkVnc1IwRkRhMEpMTEVsQlJHeENPMEZCUVVFc1ZVRkRVVWNzUzBGRVVpeEhRVU5yUWtnc1NVRkViRUk3TzBGQlJVd3NWMEZCUzBVc1VVRkJUQ3hEUVVGalVDeExRVUZrTEVWQlFXMUNVU3hMUVVGdVFqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1MwRkJTME1zVlVGQlZDeEZRVUZ4UWp0QlFVTnVRaXh2UTBGQll5eExRVUZMYUVJc1RVRkJia0k3UVVGRFJEczdRVUZGUkN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0QlFVVkVPMEZCUTBFN096czdPenM3T3pzN096czdjVUpCVjBGakxGRXNjVUpCUVZOUUxFY3NSVUZCUzFFc1N5eEZRVUZQTzBGQlEyNUNMRkZCUVUxRkxHVkJRV1VzUzBGQlMySXNTMEZCVEN4RFFVRlhSeXhIUVVGWUxFTkJRWEpDT3p0QlFVVkJPMEZCUTBFc1VVRkJTU3hyUWtGQlRWRXNTMEZCVGl4TFFVRm5RaXh4UWtGQlUwRXNTMEZCVkN4RFFVRndRaXhGUVVGeFF6dEJRVU51UXl4VlFVRkpSU3hwUWtGQmFVSkdMRXRCUVhKQ0xFVkJRVFJDTzBGQlF6RkNMR0ZCUVV0WUxFdEJRVXdzUTBGQlYwY3NSMEZCV0N4SlFVRnJRbEVzUzBGQmJFSTdRVUZEUVN4aFFVRkxReXhWUVVGTUxFZEJRV3RDTEVsQlFXeENPMEZCUTBRN1FVRkRSaXhMUVV4RUxFMUJTMDhzU1VGQlNTeHZRa0ZCVVVRc1MwRkJVaXhEUVVGS0xFVkJRVzlDTzBGQlEzcENMRlZCUVVrc1EwRkJRMFVzV1VGQlRDeEZRVUZ0UWp0QlFVTnFRaXhoUVVGTFlpeExRVUZNTEVOQlFWZEhMRWRCUVZnc1NVRkJhMElzUlVGQmJFSTdRVUZEUkRzN1FVRkZSQ3hWUVVGTlZ5eFpRVUZaU0N4TlFVRk5TU3hOUVVGNFFqdEJRVU5CTEZkQlFVc3NTVUZCU1VNc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpSaXhUUVVGd1FpeEZRVUVyUWtVc1IwRkJMMElzUlVGQmIwTTdRVUZEYkVNc1dVRkJTU3hMUVVGTGFFSXNTMEZCVEN4RFFVRlhSeXhIUVVGWUxFVkJRV2RDWVN4RFFVRm9RaXhOUVVGMVFrd3NUVUZCVFVzc1EwRkJUaXhEUVVFelFpeEZRVUZ4UXp0QlFVTnVReXhsUVVGTGFFSXNTMEZCVEN4RFFVRlhSeXhIUVVGWUxFVkJRV2RDWVN4RFFVRm9RaXhKUVVGeFFrd3NUVUZCVFVzc1EwRkJUaXhEUVVGeVFqdEJRVU5CTEdWQlFVdEtMRlZCUVV3c1IwRkJhMElzU1VGQmJFSTdRVUZEUkR0QlFVTkdPMEZCUTBZc1MwRmFUU3hOUVZsQkxFbEJRVWtzYTBKQlFVMUVMRXRCUVU0c1EwRkJTaXhGUVVGclFqdEJRVU4yUWl4VlFVRkpMRU5CUVVORkxGbEJRVXdzUlVGQmJVSTdRVUZEYWtJc1lVRkJTMklzUzBGQlRDeERRVUZYUnl4SFFVRllMRWxCUVd0Q0xFVkJRV3hDTzBGQlEwUTdPMEZCUlVRc1YwRkJTeXhKUVVGSll5eFJRVUZVTEVsQlFYRkNUaXhMUVVGeVFpeEZRVUUwUWp0QlFVTXhRaXhaUVVGSkxFdEJRVXRZTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hGUVVGblFtTXNVVUZCYUVJc1RVRkJPRUpPTEUxQlFVMU5MRkZCUVU0c1EwRkJiRU1zUlVGQmJVUTdRVUZEYWtRc1pVRkJTMnBDTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hGUVVGblFtTXNVVUZCYUVJc1NVRkJORUpPTEUxQlFVMU5MRkZCUVU0c1EwRkJOVUk3UVVGRFFTeGxRVUZMVEN4VlFVRk1MRWRCUVd0Q0xFbEJRV3hDTzBGQlEwUTdRVUZEUmp0QlFVTkdPenRCUVVWRUxGRkJRVWtzUzBGQlMwRXNWVUZCVEN4SlFVRnRRaXhMUVVGTFdDeGhRVUZNTEVOQlFXMUNhVUlzVDBGQmJrSXNRMEZCTWtKbUxFZEJRVE5DTEUxQlFXOURMRU5CUVVNc1EwRkJOVVFzUlVGQkswUTdRVUZETjBRc1YwRkJTMFlzWVVGQlRDeERRVUZ0UW10Q0xFbEJRVzVDTEVOQlFYZENhRUlzUjBGQmVFSTdRVUZEUkR0QlFVTkdMRWM3TzBGQlJVUTdPenM3T3pzN2NVSkJTMEZRTEUwc2NVSkJRVFJDTzBGQlFVRXNVVUZCY2tKM1FpeFhRVUZ4UWl4MVJVRkJVQ3hMUVVGUE96dEJRVU14UWl4UlFVRkpMRU5CUVVOQkxHVkJRV1VzUzBGQlMxSXNWVUZCY2tJc1MwRkJiME1zUzBGQlMxTXNVVUZCTjBNc1JVRkJkVVE3UVVGRGNrUXNWMEZCUzBFc1VVRkJURHRCUVVORU96dEJRVVZFTEZOQlFVdHdRaXhoUVVGTUxFTkJRVzFDWXl4TlFVRnVRaXhIUVVFMFFpeERRVUUxUWp0QlFVTkJMRk5CUVV0SUxGVkJRVXdzUjBGQmEwSXNTMEZCYkVJN08wRkJSVUVzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3T3pzN2EwSkJSMWxzUWl4Uklpd2labWxzWlNJNkltbHVaR1Y0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhKekwyZHBkR2gxWWk5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnZia1p5WVcxbFVtVnVaR1Z5SUgwZ1puSnZiU0FuTGk0dlpuSmhiV1Z6ZVc1akp6dGNibWx0Y0c5eWRDQjdJR2x6UVhKeVlYa3NJR2x6VDJKcUxDQnBjMDUxYlN3Z2FYTlRkSEpwYm1jZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1WEc1amJHRnpjeUJTWlc1a1pYSmxjaUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ2RHaHBjeTV5Wlc1a1pYSWdQU0IwYUdsekxuSmxibVJsY2k1aWFXNWtLSFJvYVhNcE8xeHVYRzRnSUNBZ2RHaHBjeTV3Y205d2N5QTlJSHRjYmlBZ0lDQWdJQzR1TG5Sb2FYTXVZMjl1YzNSeWRXTjBiM0l1WkdWbVlYVnNkRkJ5YjNCekxGeHVJQ0FnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnZEdocGN5NXpkR0YwWlNBOUlIdDlPMXh1SUNBZ0lIUm9hWE11WTJoaGJtZGxaRlpoYkhWbGN5QTlJRnRkTzF4dUlDQjlYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFZGxkQ0JqZFhKeVpXNTBJSE4wWVhSbExseHVJQ0FnS2lCSlppQmdhMlY1WUNCcGN5QnViM1FnWkdWbWFXNWxaQ3dnY21WMGRYSnVJR1Z1ZEdseVpTQmpZV05vWldRZ2MzUmhkR1V1WEc0Z0lDQXFJRWxtSUdCclpYbGdJR2x6SUdSbFptbHVaV1FzSUhKbGRIVnliaUJqWVdOb1pXUWdkbUZzZFdVZ2FXWWdjSEpsYzJWdWRDNWNiaUFnSUNvZ1NXWWdZR3RsZVdBZ2FYTWdaR1ZtYVc1bFpDQmhibVFnWTJGamFHVmtJSFpoYkhWbElHbHpJRzV2ZENCd2NtVnpaVzUwTENCeVpXRmtJR0Z1WkNCeVpYUjFjbTR1WEc0Z0lDQXFJRUJ3WVhKaGJTQWdlM04wY21sdVozMGdLRzl3ZEdsdmJtRnNLU0JyWlhrZ2IyWWdkbUZzZFdWY2JpQWdJQ29nUUhKbGRIVnliaUI3ZG1Gc2RXVjlYRzRnSUNBcUwxeHVJQ0JuWlhRb2EyVjVLU0I3WEc0Z0lDQWdhV1lnS0d0bGVTa2dlMXh1SUNBZ0lDQWdhV1lnS0hSb2FYTXVjM1JoZEdWYmEyVjVYU0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG5OMFlYUmxXMnRsZVYwN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXlaV0ZrS0d0bGVTazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuTjBZWFJsTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCU1pXRmtJSFpoYkhWbElHRmpZMjl5WkdsdVp5QjBieUJnYjI1U1pXRmtZRnh1SUNBZ0tpQkFjR0Z5WVcwZ0lIdHpkSEpwYm1kOUlFNWhiV1VnYjJZZ2NISnZjR1Z5ZEhrZ2RHOGdjbVZoWkZ4dUlDQWdLaUJBY21WMGRYSnVJSHRiZEhsd1pWMTlYRzRnSUNBcUwxeHVJQ0J5WldGa0tHdGxlU2tnZTF4dUlDQWdJR2xtSUNoMGFHbHpMbTl1VW1WaFpDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YjI1U1pXRmtLR3RsZVNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGVndaR0YwWlNCZ2MzUmhkR1ZnSUhkcGRHZ2dibVYzSUhaaGJIVmxjeUJoYm1RZ2MyTm9aV1IxYkdVZ1lISmxibVJsY21BdVhHNGdJQ0FxSUVCd1lYSmhiU0I3YjJKcVpXTjBmU0IyWVd4MVpYTmNiaUFnSUNvZ1FIQmhjbUZ0SUh0MllXeDFaWDBnZG1Gc2RXVWdkRzl6WlhSY2JpQWdJQ292WEc0Z0lITmxkQ2d1TGk1aGNtZHpLU0I3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJoY21keld6RmRJRDA5UFNBbmRXNWtaV1pwYm1Wa0p5a2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ1d5QjJZV3gxWlhNZ1hTQTlJR0Z5WjNNN1hHNGdJQ0FnSUNBdkx5QlRaWFFnYlhWc2RHbHdiR1VnZG1Gc2RXVnpYRzRnSUNBZ0lDQm1iM0lnS0dOdmJuTjBJR3RsZVNCcGJpQjJZV3gxWlhNcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1elpYUldZV3gxWlNoclpYa3NJSFpoYkhWbGMxdHJaWGxkS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdZMjl1YzNRZ1d5QnJaWGtzSUhaaGJIVmxJRjBnUFNCaGNtZHpPMXh1SUNBZ0lDQWdkR2hwY3k1elpYUldZV3gxWlNoclpYa3NJSFpoYkhWbEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9kR2hwY3k1b1lYTkRhR0Z1WjJWa0tTQjdYRzRnSUNBZ0lDQnZia1p5WVcxbFVtVnVaR1Z5S0hSb2FYTXVjbVZ1WkdWeUtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJQzh2SUQ0Z1YybHNaWGtnTFNBMklHbHVJSFJvWlNCTmIzSnVhVzVuWEc0Z0lDOHFLbHh1SUNBZ0tpQlRaWFFnWVNCemFXNW5iR1VnZG1Gc2RXVmNiaUFnSUNvZ1NXWWdZU0J6ZEhKcGJtY2diM0lnYm5WdFltVnlMQ0J6WlhRZ1pHbHlaV04wYkhrdVhHNGdJQ0FxSUVsbUlHRnVJRzlpYW1WamRDQnZjaUJoY25KaGVTd2dZM0psWVhSbElHNWxkeUJ2WW1wbFkzUWdiM0lnWVhKeVlYbGNiaUFnSUNvZ2FXWWdhWFFnWkc5bGMyNG5kQ0JoYkhKbFlXUjVJR1Y0YVhOMExpQlVhR1Z1SUhOb1lXeHNiM2NnWTI5dGNHRnlaVnh1SUNBZ0tpQjBieUJ6WlhRZ1lXNWtJR052YlhCaGNtVWdhVzVrYVhacFpIVmhiQ0IyWVd4MVpYTXVYRzRnSUNBcUlFOXVaU0J2WmlCMGFHVWdZMnhsWVhKbGNpQmtjbUYzWW1GamEzTWdZVzVrSUdGdWJtOTVZVzVqWlhNZ2QybDBhRnh1SUNBZ0tpQjFjMmx1WnlCdGRYUmhZbXhsSUdsdWMzUmxZV1FnYjJZZ2FXMXRkWFJoWW14bElITjBZWFJsY3k1Y2JpQWdJQ29nUUhCaGNtRnRJSHRiZEhsd1pWMTlJR3RsZVZ4dUlDQWdLaUJBY0dGeVlXMGdlMXQwZVhCbFhYMGdkbUZzZFdWY2JpQWdJQ292WEc0Z0lITmxkRlpoYkhWbEtHdGxlU3dnZG1Gc2RXVXBJSHRjYmlBZ0lDQmpiMjV6ZENCamRYSnlaVzUwVm1Gc2RXVWdQU0IwYUdsekxuTjBZWFJsVzJ0bGVWMDdYRzVjYmlBZ0lDQXZMeUJKWmlCdWRXMWlaWElnYjNJZ2MzUnlhVzVuTENCelpYUWdaR2x5WldOMGJIbGNiaUFnSUNCcFppQW9hWE5PZFcwb2RtRnNkV1VwSUh4OElHbHpVM1J5YVc1bktIWmhiSFZsS1NrZ2UxeHVJQ0FnSUNBZ2FXWWdLR04xY25KbGJuUldZV3gxWlNBaFBUMGdkbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRjBaVnRyWlhsZElEMGdkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YUdGelEyaGhibWRsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2hwYzBGeWNtRjVLSFpoYkhWbEtTa2dlMXh1SUNBZ0lDQWdhV1lnS0NGamRYSnlaVzUwVm1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlZ0clpYbGRJRDBnVzEwN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHTnZibk4wSUc1MWJWWmhiSFZsY3lBOUlIWmhiSFZsTG14bGJtZDBhRHRjYmlBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYm5WdFZtRnNkV1Z6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YzNSaGRHVmJhMlY1WFZ0cFhTQWhQVDBnZG1Gc2RXVmJhVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYxYmFWMGdQU0IyWVd4MVpWdHBYVHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbWhoYzBOb1lXNW5aV1FnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2hwYzA5aWFpaDJZV3gxWlNrcElIdGNiaUFnSUNBZ0lHbG1JQ2doWTNWeWNtVnVkRlpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1ZiYTJWNVhTQTlJSHQ5TzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCbWIzSWdLR3hsZENCMllXeDFaVXRsZVNCcGJpQjJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXpkR0YwWlZ0clpYbGRXM1poYkhWbFMyVjVYU0FoUFQwZ2RtRnNkV1ZiZG1Gc2RXVkxaWGxkS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRjBaVnRyWlhsZFczWmhiSFZsUzJWNVhTQTlJSFpoYkhWbFczWmhiSFZsUzJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxtaGhjME5vWVc1blpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWFHRnpRMmhoYm1kbFpDQW1KaUIwYUdsekxtTm9ZVzVuWldSV1lXeDFaWE11YVc1a1pYaFBaaWhyWlhrcElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVqYUdGdVoyVmtWbUZzZFdWekxuQjFjMmdvYTJWNUtUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQXZLaXBjYmlBZ0lDb2dSbWx5WlhNZ1lHOXVVbVZ1WkdWeVlDQnBaaUIyWVd4MVpYTWdhR0YyWlNCamFHRnVaMlZrSUc5eUlHQm1iM0pqWlZKbGJtUmxjbUJjYmlBZ0lDb2dhWE1nYzJWMElIUnZJSFJ5ZFdVdVhHNGdJQ0FxSUVCeVpYUjFjbTRnZTNSb2FYTjlYRzRnSUNBcUwxeHVJQ0J5Wlc1a1pYSW9abTl5WTJWU1pXNWtaWElnUFNCbVlXeHpaU2tnZTF4dUlDQWdJR2xtSUNnb1ptOXlZMlZTWlc1a1pYSWdmSHdnZEdocGN5NW9ZWE5EYUdGdVoyVmtLU0FtSmlCMGFHbHpMbTl1VW1WdVpHVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtOXVVbVZ1WkdWeUtDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RHaHBjeTVqYUdGdVoyVmtWbUZzZFdWekxteGxibWQwYUNBOUlEQTdYRzRnSUNBZ2RHaHBjeTVvWVhORGFHRnVaMlZrSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCU1pXNWtaWEpsY2p0Y2JpSmRmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVuZGVyZXJzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGF4ZXMgPSBbJ1gnLCAnWScsICdaJ107XG5cbnZhciB0cmFuc2Zvcm1Qcm9wcyA9IHtcbiAgeDogdHJ1ZSxcbiAgeTogdHJ1ZSxcbiAgejogdHJ1ZVxufTtcblxudmFyIFNDQUxFID0gJ3NjYWxlJztcbnZhciBST1RBVEUgPSAncm90YXRlJztcbnZhciBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xudmFyIFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaChmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gYXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWU7XG4gIH0pO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zZm9ybVByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNSeVlXNXpabTl5YlMxd2NtOXdjeTVxY3lKZExDSnVZVzFsY3lJNld5SmhlR1Z6SWl3aWRISmhibk5tYjNKdFVISnZjSE1pTENKNElpd2llU0lzSW5vaUxDSlRRMEZNUlNJc0lsSlBWRUZVUlNJc0lsUlNRVTVUUms5U1RWOVFSVkpUVUVWRFZFbFdSU0lzSWxSRlVrMVRJaXdpWm05eVJXRmphQ0lzSW5SbGNtMGlMQ0poZUdseklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hKUVVGTlFTeFBRVUZQTEVOQlFVTXNSMEZCUkN4RlFVRk5MRWRCUVU0c1JVRkJWeXhIUVVGWUxFTkJRV0k3TzBGQlJVRXNTVUZCU1VNc2FVSkJRV2xDTzBGQlEyNUNReXhMUVVGSExFbEJSR2RDTzBGQlJXNUNReXhMUVVGSExFbEJSbWRDTzBGQlIyNUNReXhMUVVGSE8wRkJTR2RDTEVOQlFYSkNPenRCUVUxQkxFbEJRVTFETEZGQlFWRXNUMEZCWkR0QlFVTkJMRWxCUVUxRExGTkJRVk1zVVVGQlpqdEJRVU5CTEVsQlFVMURMSGRDUVVGM1FpeHpRa0ZCT1VJN1FVRkRRU3hKUVVGTlF5eFJRVUZSTEVOQlFVTXNWMEZCUkN4RlFVRmpTQ3hMUVVGa0xFVkJRWEZDUXl4TlFVRnlRaXhGUVVFMlFpeE5RVUUzUWl4RlFVRnhRME1zY1VKQlFYSkRMRU5CUVdRN08wRkJSVUZPTEdWQlFXVkxMRTFCUVdZc1NVRkJlVUpNTEdWQlFXVkpMRXRCUVdZc1NVRkJkMEpLTEdWQlFXVk5MSEZDUVVGbUxFbEJRWGRETEVsQlFYcEdPenRCUVVWQlF5eE5RVUZOUXl4UFFVRk9MRU5CUVdNc1ZVRkJRME1zU1VGQlJEdEJRVUZCTEZOQlFWVldMRXRCUVV0VExFOUJRVXdzUTBGQllTeFZRVUZEUlN4SlFVRkVPMEZCUVVFc1YwRkJWVllzWlVGQlpWTXNUMEZCVDBNc1NVRkJkRUlzU1VGQk9FSXNTVUZCZUVNN1FVRkJRU3hIUVVGaUxFTkJRVlk3UVVGQlFTeERRVUZrT3p0clFrRkZaVllzWXlJc0ltWnBiR1VpT2lKMGNtRnVjMlp2Y20wdGNISnZjSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoY25NdloybDBhSFZpTDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltTnZibk4wSUdGNFpYTWdQU0JiSjFnbkxDQW5XU2NzSUNkYUoxMDdYRzVjYm14bGRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lBOUlIdGNiaUFnZURvZ2RISjFaU3hjYmlBZ2VUb2dkSEoxWlN4Y2JpQWdlam9nZEhKMVpWeHVmVHRjYmx4dVkyOXVjM1FnVTBOQlRFVWdQU0FuYzJOaGJHVW5PMXh1WTI5dWMzUWdVazlVUVZSRklEMGdKM0p2ZEdGMFpTYzdYRzVqYjI1emRDQlVVa0ZPVTBaUFVrMWZVRVZTVTFCRlExUkpWa1VnUFNBbmRISmhibk5tYjNKdFVHVnljM0JsWTNScGRtVW5PMXh1WTI5dWMzUWdWRVZTVFZNZ1BTQmJKM1J5WVc1emJHRjBaU2NzSUZORFFVeEZMQ0JTVDFSQlZFVXNJQ2R6YTJWM0p5d2dWRkpCVGxOR1QxSk5YMUJGVWxOUVJVTlVTVlpGWFR0Y2JseHVkSEpoYm5ObWIzSnRVSEp2Y0hOYlVrOVVRVlJGWFNBOUlIUnlZVzV6Wm05eWJWQnliM0J6VzFORFFVeEZYU0E5SUhSeVlXNXpabTl5YlZCeWIzQnpXMVJTUVU1VFJrOVNUVjlRUlZKVFVFVkRWRWxXUlYwZ1BTQjBjblZsTzF4dVhHNVVSVkpOVXk1bWIzSkZZV05vS0NoMFpYSnRLU0E5UGlCaGVHVnpMbVp2Y2tWaFkyZ29LR0Y0YVhNcElEMCtJSFJ5WVc1elptOXliVkJ5YjNCelczUmxjbTBnS3lCaGVHbHpYU0E5SUhSeWRXVXBLVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZEhKaGJuTm1iM0p0VUhKdmNITTdJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVuZGVyZXJzL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN2Z1BhdGggPSBleHBvcnRzLnN2ZyA9IGV4cG9ydHMuY3NzID0gZXhwb3J0cy5SZW5kZXJlciA9IGV4cG9ydHMudmFsdWUgPSBleHBvcnRzLnNwcmluZyA9IGV4cG9ydHMuc3RhZ2dlciA9IGV4cG9ydHMudHdlZW4gPSBleHBvcnRzLnRyYWNrT2Zmc2V0ID0gZXhwb3J0cy50b3VjaGVzID0gZXhwb3J0cy5wb2ludGVyID0gZXhwb3J0cy5waHlzaWNzID0gZXhwb3J0cy5wYXJhbGxlbCA9IGV4cG9ydHMuZGVsYXkgPSBleHBvcnRzLmNyb3NzRmFkZSA9IGV4cG9ydHMuY29tcG9zaXRlID0gZXhwb3J0cy5jb2xvclR3ZWVuID0gZXhwb3J0cy5jaGFpbiA9IGV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy52YWx1ZVR5cGVzID0gZXhwb3J0cy50cmFuc2Zvcm0gPSBleHBvcnRzLmVhc2luZyA9IGV4cG9ydHMuY2FsYyA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4vZnJhbWVzeW5jJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVN0YXJ0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lU3RhcnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lVXBkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVJlbmRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVJlbmRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVFbmQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVFbmQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lU3RhcnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVTdGFydDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVVcGRhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVVcGRhdGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lUmVuZGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lUmVuZGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZUVuZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZUVuZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3RpbWVTaW5jZUxhc3RGcmFtZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3VycmVudEZyYW1lVGltZXN0YW1wJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jdXJyZW50RnJhbWVUaW1lc3RhbXA7XG4gIH1cbn0pO1xuXG52YXIgX2NhbGMyID0gcmVxdWlyZSgnLi9pbmMvY2FsYycpO1xuXG52YXIgX2NhbGMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY2FsYzIpO1xuXG52YXIgX2Vhc2luZzIgPSByZXF1aXJlKCcuL2luYy9lYXNpbmcnKTtcblxudmFyIF9lYXNpbmcgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfZWFzaW5nMik7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdHJhbnNmb3JtID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3RyYW5zZm9ybWVycyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSByZXF1aXJlKCcuL2luYy92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdmFsdWVUeXBlczIpO1xuXG52YXIgX2FjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMnKTtcblxudmFyIF9hY3Rpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FjdGlvbnMpO1xuXG52YXIgX2NoYWluMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jaGFpbicpO1xuXG52YXIgX2NoYWluMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoYWluMik7XG5cbnZhciBfY29sb3JUd2VlbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY29sb3ItdHdlZW4nKTtcblxudmFyIF9jb2xvclR3ZWVuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yVHdlZW4yKTtcblxudmFyIF9jb21wb3NpdGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NvbXBvc2l0ZScpO1xuXG52YXIgX2NvbXBvc2l0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGUyKTtcblxudmFyIF9jcm9zc0ZhZGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Nyb3NzLWZhZGUnKTtcblxudmFyIF9jcm9zc0ZhZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3Jvc3NGYWRlMik7XG5cbnZhciBfZGVsYXkyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2RlbGF5Jyk7XG5cbnZhciBfZGVsYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVsYXkyKTtcblxudmFyIF9wYXJhbGxlbDIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcGFyYWxsZWwnKTtcblxudmFyIF9wYXJhbGxlbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJhbGxlbDIpO1xuXG52YXIgX3BoeXNpY3MyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BoeXNpY3MnKTtcblxudmFyIF9waHlzaWNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BoeXNpY3MyKTtcblxudmFyIF9wb2ludGVyMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9wb2ludGVyJyk7XG5cbnZhciBfcG9pbnRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb2ludGVyMik7XG5cbnZhciBfdG91Y2hlczIgPSByZXF1aXJlKCcuL2FjdGlvbnMvdG91Y2hlcycpO1xuXG52YXIgX3RvdWNoZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG91Y2hlczIpO1xuXG52YXIgX3RyYWNrT2Zmc2V0MiA9IHJlcXVpcmUoJy4vYWN0aW9ucy90cmFjay1vZmZzZXQnKTtcblxudmFyIF90cmFja09mZnNldDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFja09mZnNldDIpO1xuXG52YXIgX3R3ZWVuMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy90d2VlbicpO1xuXG52YXIgX3R3ZWVuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuMik7XG5cbnZhciBfc3RhZ2dlcjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvc3RhZ2dlcicpO1xuXG52YXIgX3N0YWdnZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhZ2dlcjIpO1xuXG52YXIgX3NwcmluZzIgPSByZXF1aXJlKCcuL2FjdGlvbnMvc3ByaW5nJyk7XG5cbnZhciBfc3ByaW5nMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NwcmluZzIpO1xuXG52YXIgX3ZhbHVlMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy92YWx1ZScpO1xuXG52YXIgX3ZhbHVlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlMik7XG5cbnZhciBfcmVuZGVyZXJzID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMnKTtcblxudmFyIF9yZW5kZXJlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVuZGVyZXJzKTtcblxudmFyIF9jc3MyID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMvY3NzJyk7XG5cbnZhciBfY3NzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NzczIpO1xuXG52YXIgX3N2ZzIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9zdmcnKTtcblxudmFyIF9zdmczID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnMik7XG5cbnZhciBfc3ZnUGF0aDIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9zdmctcGF0aCcpO1xuXG52YXIgX3N2Z1BhdGgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnUGF0aDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5leHBvcnRzLmNhbGMgPSBfY2FsYztcbmV4cG9ydHMuZWFzaW5nID0gX2Vhc2luZztcbmV4cG9ydHMudHJhbnNmb3JtID0gX3RyYW5zZm9ybTtcbmV4cG9ydHMudmFsdWVUeXBlcyA9IF92YWx1ZVR5cGVzO1xuXG4vLyBBY3Rpb25zXG5cbmV4cG9ydHMuQWN0aW9uID0gX2FjdGlvbnMyLmRlZmF1bHQ7XG5leHBvcnRzLmNoYWluID0gX2NoYWluMy5kZWZhdWx0O1xuZXhwb3J0cy5jb2xvclR3ZWVuID0gX2NvbG9yVHdlZW4zLmRlZmF1bHQ7XG5leHBvcnRzLmNvbXBvc2l0ZSA9IF9jb21wb3NpdGUzLmRlZmF1bHQ7XG5leHBvcnRzLmNyb3NzRmFkZSA9IF9jcm9zc0ZhZGUzLmRlZmF1bHQ7XG5leHBvcnRzLmRlbGF5ID0gX2RlbGF5My5kZWZhdWx0O1xuLy9leHBvcnQgaW5lcnRpYSBmcm9tICcuL2FjdGlvbnMvaW5lcnRpYSc7XG5cbmV4cG9ydHMucGFyYWxsZWwgPSBfcGFyYWxsZWwzLmRlZmF1bHQ7XG5leHBvcnRzLnBoeXNpY3MgPSBfcGh5c2ljczMuZGVmYXVsdDtcbmV4cG9ydHMucG9pbnRlciA9IF9wb2ludGVyMy5kZWZhdWx0O1xuZXhwb3J0cy50b3VjaGVzID0gX3RvdWNoZXMzLmRlZmF1bHQ7XG5leHBvcnRzLnRyYWNrT2Zmc2V0ID0gX3RyYWNrT2Zmc2V0My5kZWZhdWx0O1xuZXhwb3J0cy50d2VlbiA9IF90d2VlbjMuZGVmYXVsdDtcbmV4cG9ydHMuc3RhZ2dlciA9IF9zdGFnZ2VyMy5kZWZhdWx0O1xuZXhwb3J0cy5zcHJpbmcgPSBfc3ByaW5nMy5kZWZhdWx0O1xuZXhwb3J0cy52YWx1ZSA9IF92YWx1ZTMuZGVmYXVsdDtcblxuLy8gUmVuZGVyZXJzXG5cbmV4cG9ydHMuUmVuZGVyZXIgPSBfcmVuZGVyZXJzMi5kZWZhdWx0O1xuZXhwb3J0cy5jc3MgPSBfY3NzMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmcgPSBfc3ZnMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmdQYXRoID0gX3N2Z1BhdGgzLmRlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2IzQnRiM1JwYjI0dWFuTWlYU3dpYm1GdFpYTWlPbHNpYjI1R2NtRnRaVk4wWVhKMElpd2liMjVHY21GdFpWVndaR0YwWlNJc0ltOXVSbkpoYldWU1pXNWtaWElpTENKdmJrWnlZVzFsUlc1a0lpd2lZMkZ1WTJWc1QyNUdjbUZ0WlZOMFlYSjBJaXdpWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlNJc0ltTmhibU5sYkU5dVJuSmhiV1ZTWlc1a1pYSWlMQ0pqWVc1alpXeFBia1p5WVcxbFJXNWtJaXdpZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsSWl3aVkzVnljbVZ1ZEVaeVlXMWxWR2x0WlhOMFlXMXdJaXdpWTJGc1l5SXNJbVZoYzJsdVp5SXNJblJ5WVc1elptOXliU0lzSW5aaGJIVmxWSGx3WlhNaUxDSkJZM1JwYjI0aUxDSmphR0ZwYmlJc0ltTnZiRzl5VkhkbFpXNGlMQ0pqYjIxd2IzTnBkR1VpTENKamNtOXpjMFpoWkdVaUxDSmtaV3hoZVNJc0luQmhjbUZzYkdWc0lpd2ljR2g1YzJsamN5SXNJbkJ2YVc1MFpYSWlMQ0owYjNWamFHVnpJaXdpZEhKaFkydFBabVp6WlhRaUxDSjBkMlZsYmlJc0luTjBZV2RuWlhJaUxDSnpjSEpwYm1jaUxDSjJZV3gxWlNJc0lsSmxibVJsY21WeUlpd2lZM056SWl3aWMzWm5JaXdpYzNablVHRjBhQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHpRa0ZGUlVFc1dUczdPenM3TzNOQ1FVTkJReXhoT3pzN096czdjMEpCUTBGRExHRTdPenM3T3p0elFrRkRRVU1zVlRzN096czdPM05DUVVOQlF5eHJRanM3T3pzN08zTkNRVU5CUXl4dFFqczdPenM3TzNOQ1FVTkJReXh0UWpzN096czdPM05DUVVOQlF5eG5RanM3T3pzN08zTkNRVU5CUXl4clFqczdPenM3TzNOQ1FVTkJReXh4UWpzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0UlFVZFZReXhKTzFGQlEwRkRMRTA3VVVGRFFVTXNVenRSUVVOQlF5eFZPenRCUVVWYU96dFJRVU5QUXl4Tk8xRkJRMEZETEVzN1VVRkRRVU1zVlR0UlFVTkJReXhUTzFGQlEwRkRMRk03VVVGRFFVTXNTenRCUVVOUU96dFJRVU5QUXl4Uk8xRkJRMEZETEU4N1VVRkRRVU1zVHp0UlFVTkJReXhQTzFGQlEwRkRMRmM3VVVGRFFVTXNTenRSUVVOQlF5eFBPMUZCUTBGRExFMDdVVUZEUVVNc1N6czdRVUZGVURzN1VVRkRUME1zVVR0UlFVTkJReXhITzFGQlEwRkRMRWM3VVVGRFFVTXNUeUlzSW1acGJHVWlPaUp3YjNCdGIzUnBiMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoY25NdloybDBhSFZpTDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHZJRVp5WVcxbGMzbHVZeUJ6WTJobFpIVnNaWEp6WEc1bGVIQnZjblFnZTF4dUlDQnZia1p5WVcxbFUzUmhjblFzWEc0Z0lHOXVSbkpoYldWVmNHUmhkR1VzWEc0Z0lHOXVSbkpoYldWU1pXNWtaWElzWEc0Z0lHOXVSbkpoYldWRmJtUXNYRzRnSUdOaGJtTmxiRTl1Um5KaGJXVlRkR0Z5ZEN4Y2JpQWdZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU3hjYmlBZ1kyRnVZMlZzVDI1R2NtRnRaVkpsYm1SbGNpeGNiaUFnWTJGdVkyVnNUMjVHY21GdFpVVnVaQ3hjYmlBZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbExGeHVJQ0JqZFhKeVpXNTBSbkpoYldWVWFXMWxjM1JoYlhCY2JuMGdabkp2YlNBbkxpOW1jbUZ0WlhONWJtTW5PMXh1WEc1bGVIQnZjblFnS2lCaGN5QmpZV3hqSUdaeWIyMGdKeTR2YVc1akwyTmhiR01uTzF4dVpYaHdiM0owSUNvZ1lYTWdaV0Z6YVc1bklHWnliMjBnSnk0dmFXNWpMMlZoYzJsdVp5YzdYRzVsZUhCdmNuUWdLaUJoY3lCMGNtRnVjMlp2Y20wZ1puSnZiU0FuTGk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6Snp0Y2JtVjRjRzl5ZENBcUlHRnpJSFpoYkhWbFZIbHdaWE1nWm5KdmJTQW5MaTlwYm1NdmRtRnNkV1V0ZEhsd1pYTW5PMXh1WEc0dkx5QkJZM1JwYjI1elhHNWxlSEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeWM3WEc1bGVIQnZjblFnWTJoaGFXNGdabkp2YlNBbkxpOWhZM1JwYjI1ekwyTm9ZV2x1Snp0Y2JtVjRjRzl5ZENCamIyeHZjbFIzWldWdUlHWnliMjBnSnk0dllXTjBhVzl1Y3k5amIyeHZjaTEwZDJWbGJpYzdYRzVsZUhCdmNuUWdZMjl0Y0c5emFYUmxJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OWpiMjF3YjNOcGRHVW5PMXh1Wlhod2IzSjBJR055YjNOelJtRmtaU0JtY205dElDY3VMMkZqZEdsdmJuTXZZM0p2YzNNdFptRmtaU2M3WEc1bGVIQnZjblFnWkdWc1lYa2dabkp2YlNBbkxpOWhZM1JwYjI1ekwyUmxiR0Y1Snp0Y2JpOHZaWGh3YjNKMElHbHVaWEowYVdFZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDJsdVpYSjBhV0VuTzF4dVpYaHdiM0owSUhCaGNtRnNiR1ZzSUdaeWIyMGdKeTR2WVdOMGFXOXVjeTl3WVhKaGJHeGxiQ2M3WEc1bGVIQnZjblFnY0doNWMybGpjeUJtY205dElDY3VMMkZqZEdsdmJuTXZjR2g1YzJsamN5YzdYRzVsZUhCdmNuUWdjRzlwYm5SbGNpQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdmNHOXBiblJsY2ljN1hHNWxlSEJ2Y25RZ2RHOTFZMmhsY3lCbWNtOXRJQ2N1TDJGamRHbHZibk12ZEc5MVkyaGxjeWM3WEc1bGVIQnZjblFnZEhKaFkydFBabVp6WlhRZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDNSeVlXTnJMVzltWm5ObGRDYzdYRzVsZUhCdmNuUWdkSGRsWlc0Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDNSM1pXVnVKenRjYm1WNGNHOXlkQ0J6ZEdGbloyVnlJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OXpkR0ZuWjJWeUp6dGNibVY0Y0c5eWRDQnpjSEpwYm1jZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDNOd2NtbHVaeWM3WEc1bGVIQnZjblFnZG1Gc2RXVWdabkp2YlNBbkxpOWhZM1JwYjI1ekwzWmhiSFZsSnp0Y2JseHVMeThnVW1WdVpHVnlaWEp6WEc1bGVIQnZjblFnVW1WdVpHVnlaWElnWm5KdmJTQW5MaTl5Wlc1a1pYSmxjbk1uTzF4dVpYaHdiM0owSUdOemN5Qm1jbTl0SUNjdUwzSmxibVJsY21WeWN5OWpjM01uTzF4dVpYaHdiM0owSUhOMlp5Qm1jbTl0SUNjdUwzSmxibVJsY21WeWN5OXpkbWNuTzF4dVpYaHdiM0owSUhOMloxQmhkR2dnWm5KdmJTQW5MaTl5Wlc1a1pYSmxjbk12YzNabkxYQmhkR2duTzF4dUlsMTlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wb3Btb3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmN1YmljQmV6aWVyID0gZXhwb3J0cy5hbnRpY2lwYXRlID0gZXhwb3J0cy5jcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gZXhwb3J0cy5iYWNrSW5PdXQgPSBleHBvcnRzLmJhY2tPdXQgPSBleHBvcnRzLmJhY2tJbiA9IGV4cG9ydHMuY3JlYXRlQmFja0luID0gZXhwb3J0cy5jaXJjSW5PdXQgPSBleHBvcnRzLmNpcmNPdXQgPSBleHBvcnRzLmNpcmNJbiA9IGV4cG9ydHMuZWFzZUluT3V0ID0gZXhwb3J0cy5lYXNlT3V0ID0gZXhwb3J0cy5lYXNlSW4gPSBleHBvcnRzLmNyZWF0ZUV4cG9JbiA9IGV4cG9ydHMubGluZWFyID0gZXhwb3J0cy5jcmVhdGVNaXJyb3JlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSB1bmRlZmluZWQ7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1lcnMnKTtcblxudmFyIERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIID0gMS41MjU7XG5cbnZhciBjcmVhdGVSZXZlcnNlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSBmdW5jdGlvbiBjcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNpbmcoMSAtIHApO1xuICB9O1xufTtcbnZhciBjcmVhdGVNaXJyb3JlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlTWlycm9yZWRFYXNpbmcgPSBmdW5jdGlvbiBjcmVhdGVNaXJyb3JlZEVhc2luZyhlYXNpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPD0gMC41ID8gZWFzaW5nKDIgKiBwKSAvIDIgOiAoMiAtIGVhc2luZygyICogKDEgLSBwKSkpIC8gMjtcbiAgfTtcbn07XG5cbnZhciBsaW5lYXIgPSBleHBvcnRzLmxpbmVhciA9IGZ1bmN0aW9uIGxpbmVhcihwKSB7XG4gIHJldHVybiBwO1xufTtcblxudmFyIGNyZWF0ZUV4cG9JbiA9IGV4cG9ydHMuY3JlYXRlRXhwb0luID0gZnVuY3Rpb24gY3JlYXRlRXhwb0luKHBvd2VyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBNYXRoLnBvdyhwLCBwb3dlcik7XG4gIH07XG59O1xudmFyIGVhc2VJbiA9IGV4cG9ydHMuZWFzZUluID0gY3JlYXRlRXhwb0luKDIpO1xudmFyIGVhc2VPdXQgPSBleHBvcnRzLmVhc2VPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNlSW4pO1xudmFyIGVhc2VJbk91dCA9IGV4cG9ydHMuZWFzZUluT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoZWFzZUluKTtcblxudmFyIGNpcmNJbiA9IGV4cG9ydHMuY2lyY0luID0gZnVuY3Rpb24gY2lyY0luKHApIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocCkpO1xufTtcbnZhciBjaXJjT3V0ID0gZXhwb3J0cy5jaXJjT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoY2lyY0luKTtcbnZhciBjaXJjSW5PdXQgPSBleHBvcnRzLmNpcmNJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGNpcmNPdXQpO1xuXG52YXIgY3JlYXRlQmFja0luID0gZXhwb3J0cy5jcmVhdGVCYWNrSW4gPSBmdW5jdGlvbiBjcmVhdGVCYWNrSW4ocG93ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgKiBwICogKChwb3dlciArIDEpICogcCAtIHBvd2VyKTtcbiAgfTtcbn07XG52YXIgYmFja0luID0gZXhwb3J0cy5iYWNrSW4gPSBjcmVhdGVCYWNrSW4oREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xudmFyIGJhY2tPdXQgPSBleHBvcnRzLmJhY2tPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhiYWNrSW4pO1xudmFyIGJhY2tJbk91dCA9IGV4cG9ydHMuYmFja0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoYmFja0luKTtcblxudmFyIGNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBmdW5jdGlvbiBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nKHBvd2VyKSB7XG4gIHZhciBiYWNrRWFzaW5nID0gY3JlYXRlQmFja0luKHBvd2VyKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIChwICo9IDIpIDwgMSA/IDAuNSAqIGJhY2tFYXNpbmcocCkgOiAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwIC0gMSkpKTtcbiAgfTtcbn07XG5cbnZhciBhbnRpY2lwYXRlID0gZXhwb3J0cy5hbnRpY2lwYXRlID0gY3JlYXRlQW50aWNpcGF0ZUVhc2luZyhERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG5cbnZhciBjdWJpY0JlemllciA9IGV4cG9ydHMuY3ViaWNCZXppZXIgPSBmdW5jdGlvbiBjdWJpY0Jlemllcih4MSwgeTEsIHgyLCB5Mikge1xuICB2YXIgeEJlemllciA9ICgwLCBfdHJhbnNmb3JtZXJzLmJlemllcikoMCwgeDEsIHgyLCAxKTtcbiAgdmFyIHlCZXppZXIgPSAoMCwgX3RyYW5zZm9ybWVycy5iZXppZXIpKDAsIHkxLCB5MiwgMSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHlCZXppZXIoeEJlemllcih0KSk7XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYklrUkZSa0ZWVEZSZlQxWkZVbE5JVDA5VVgxTlVVa1ZPUjFSSUlpd2lZM0psWVhSbFVtVjJaWEp6WldSRllYTnBibWNpTENKbFlYTnBibWNpTENKd0lpd2lZM0psWVhSbFRXbHljbTl5WldSRllYTnBibWNpTENKc2FXNWxZWElpTENKamNtVmhkR1ZGZUhCdlNXNGlMQ0p3YjNkbGNpSXNJbVZoYzJWSmJpSXNJbVZoYzJWUGRYUWlMQ0psWVhObFNXNVBkWFFpTENKamFYSmpTVzRpTENKTllYUm9JaXdpYzJsdUlpd2lZV052Y3lJc0ltTnBjbU5QZFhRaUxDSmphWEpqU1c1UGRYUWlMQ0pqY21WaGRHVkNZV05yU1c0aUxDSmlZV05yU1c0aUxDSmlZV05yVDNWMElpd2lZbUZqYTBsdVQzVjBJaXdpWTNKbFlYUmxRVzUwYVdOcGNHRjBaVVZoYzJsdVp5SXNJbUpoWTJ0RllYTnBibWNpTENKd2IzY2lMQ0poYm5ScFkybHdZWFJsSWl3aVkzVmlhV05DWlhwcFpYSWlMQ0o0TVNJc0lua3hJaXdpZURJaUxDSjVNaUlzSW5oQ1pYcHBaWElpTENKNVFtVjZhV1Z5SWl3aWRDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdRVUZCUVRzN1FVRkZRU3hKUVVGTlFTdzJRa0ZCTmtJc1MwRkJia003TzBGQlJVOHNTVUZCVFVNc2MwUkJRWFZDTEZOQlFYWkNRU3h2UWtGQmRVSXNRMEZCUTBNc1RVRkJSRHRCUVVGQkxGTkJRVmtzVlVGQlEwTXNRMEZCUkR0QlFVRkJMRmRCUVU4c1NVRkJTVVFzVDBGQlR5eEpRVUZKUXl4RFFVRllMRU5CUVZnN1FVRkJRU3hIUVVGYU8wRkJRVUVzUTBGQk4wSTdRVUZEUVN4SlFVRk5ReXh6UkVGQmRVSXNVMEZCZGtKQkxHOUNRVUYxUWl4RFFVRkRSaXhOUVVGRU8wRkJRVUVzVTBGQldTeFZRVUZEUXl4RFFVRkVPMEZCUVVFc1YwRkJVVUVzUzBGQlN5eEhRVUZPTEVkQlFXRkVMRTlCUVU4c1NVRkJTVU1zUTBGQldDeEpRVUZuUWl4RFFVRTNRaXhIUVVGcFF5eERRVUZETEVsQlFVbEVMRTlCUVU4c1MwRkJTeXhKUVVGSlF5eERRVUZVTEVOQlFWQXNRMEZCVEN4SlFVRTBRaXhEUVVGd1JUdEJRVUZCTEVkQlFWbzdRVUZCUVN4RFFVRTNRanM3UVVGRlFTeEpRVUZOUlN3d1FrRkJVeXhUUVVGVVFTeE5RVUZUTEVOQlFVTkdMRU5CUVVRN1FVRkJRU3hUUVVGUFFTeERRVUZRTzBGQlFVRXNRMEZCWmpzN1FVRkZRU3hKUVVGTlJ5eHpRMEZCWlN4VFFVRm1RU3haUVVGbExFTkJRVU5ETEV0QlFVUTdRVUZCUVN4VFFVRlhMRlZCUVVOS0xFTkJRVVE3UVVGQlFTeHZRa0ZCVDBFc1EwRkJVQ3hGUVVGWlNTeExRVUZhTzBGQlFVRXNSMEZCV0R0QlFVRkJMRU5CUVhKQ08wRkJRMEVzU1VGQlRVTXNNRUpCUVZOR0xHRkJRV0VzUTBGQllpeERRVUZtTzBGQlEwRXNTVUZCVFVjc05FSkJRVlZTTEhGQ1FVRnhRazhzVFVGQmNrSXNRMEZCYUVJN1FVRkRRU3hKUVVGTlJTeG5RMEZCV1U0c2NVSkJRWEZDU1N4TlFVRnlRaXhEUVVGc1FqczdRVUZGUVN4SlFVRk5SeXd3UWtGQlV5eFRRVUZVUVN4TlFVRlRMRU5CUVVOU0xFTkJRVVE3UVVGQlFTeFRRVUZQTEVsQlFVbFRMRXRCUVV0RExFZEJRVXdzUTBGQlUwUXNTMEZCUzBVc1NVRkJUQ3hEUVVGVldDeERRVUZXTEVOQlFWUXNRMEZCV0R0QlFVRkJMRU5CUVdZN1FVRkRRU3hKUVVGTldTdzBRa0ZCVldRc2NVSkJRWEZDVlN4TlFVRnlRaXhEUVVGb1FqdEJRVU5CTEVsQlFVMUxMR2REUVVGWldpeHhRa0ZCY1VKWExFOUJRWEpDTEVOQlFXeENPenRCUVVWQkxFbEJRVTFGTEhORFFVRmxMRk5CUVdaQkxGbEJRV1VzUTBGQlExWXNTMEZCUkR0QlFVRkJMRk5CUVZjc1ZVRkJRMG9zUTBGQlJEdEJRVUZCTEZkQlFWRkJMRWxCUVVsQkxFTkJRVXdzU1VGQlZ5eERRVUZEU1N4UlFVRlJMRU5CUVZRc1NVRkJZMG9zUTBGQlpDeEhRVUZyUWtrc1MwRkJOMElzUTBGQlVEdEJRVUZCTEVkQlFWZzdRVUZCUVN4RFFVRnlRanRCUVVOQkxFbEJRVTFYTERCQ1FVRlRSQ3hoUVVGaGFrSXNNRUpCUVdJc1EwRkJaanRCUVVOQkxFbEJRVTF0UWl3MFFrRkJWV3hDTEhGQ1FVRnhRbWxDTEUxQlFYSkNMRU5CUVdoQ08wRkJRMEVzU1VGQlRVVXNaME5CUVZsb1FpeHhRa0ZCY1VKakxFMUJRWEpDTEVOQlFXeENPenRCUVVWQkxFbEJRVTFITERCRVFVRjVRaXhUUVVGNlFrRXNjMEpCUVhsQ0xFTkJRVU5rTEV0QlFVUXNSVUZCVnp0QlFVTXZReXhOUVVGTlpTeGhRVUZoVEN4aFFVRmhWaXhMUVVGaUxFTkJRVzVDTzBGQlEwRXNVMEZCVHl4VlFVRkRTaXhEUVVGRU8wRkJRVUVzVjBGQlVTeERRVUZEUVN4TFFVRkxMRU5CUVU0c1NVRkJWeXhEUVVGYUxFZEJRV2xDTEUxQlFVMXRRaXhYUVVGWGJrSXNRMEZCV0N4RFFVRjJRaXhIUVVGMVF5eFBRVUZQTEVsQlFVbFRMRXRCUVV0WExFZEJRVXdzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCUXl4RlFVRkVMRWxCUVU5d1FpeEpRVUZKTEVOQlFWZ3NRMEZCV2l4RFFVRllMRU5CUVRsRE8wRkJRVUVzUjBGQlVEdEJRVU5FTEVOQlNFMDdPMEZCUzBFc1NVRkJUWEZDTEd0RFFVRmhTQ3gxUWtGQmRVSnlRaXd3UWtGQmRrSXNRMEZCYmtJN08wRkJSVUVzU1VGQlRYbENMRzlEUVVGakxGTkJRV1JCTEZkQlFXTXNRMEZCUTBNc1JVRkJSQ3hGUVVGTFF5eEZRVUZNTEVWQlFWTkRMRVZCUVZRc1JVRkJZVU1zUlVGQllpeEZRVUZ2UWp0QlFVTTNReXhOUVVGTlF5eFZRVUZWTERCQ1FVRlBMRU5CUVZBc1JVRkJWVW9zUlVGQlZpeEZRVUZqUlN4RlFVRmtMRVZCUVd0Q0xFTkJRV3hDTEVOQlFXaENPMEZCUTBFc1RVRkJUVWNzVlVGQlZTd3dRa0ZCVHl4RFFVRlFMRVZCUVZWS0xFVkJRVllzUlVGQlkwVXNSVUZCWkN4RlFVRnJRaXhEUVVGc1FpeERRVUZvUWpzN1FVRkZRU3hUUVVGUExGVkJRVU5ITEVOQlFVUTdRVUZCUVN4WFFVRlBSQ3hSUVVGUlJDeFJRVUZSUlN4RFFVRlNMRU5CUVZJc1EwRkJVRHRCUVVGQkxFZEJRVkE3UVVGRFJDeERRVXhOSWl3aVptbHNaU0k2SW1WaGMybHVaeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0Z5Y3k5bmFYUm9kV0l2Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1ltVjZhV1Z5SUgwZ1puSnZiU0FuTGk5MGNtRnVjMlp2Y20xbGNuTW5PMXh1WEc1amIyNXpkQ0JFUlVaQlZVeFVYMDlXUlZKVFNFOVBWRjlUVkZKRlRrZFVTQ0E5SURFdU5USTFPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdZM0psWVhSbFVtVjJaWEp6WldSRllYTnBibWNnUFNBb1pXRnphVzVuS1NBOVBpQW9jQ2tnUFQ0Z01TQXRJR1ZoYzJsdVp5Z3hJQzBnY0NrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxUV2x5Y205eVpXUkZZWE5wYm1jZ1BTQW9aV0Z6YVc1bktTQTlQaUFvY0NrZ1BUNGdLSEFnUEQwZ01DNDFLU0EvSUdWaGMybHVaeWd5SUNvZ2NDa2dMeUF5SURvZ0tESWdMU0JsWVhOcGJtY29NaUFxSUNneElDMGdjQ2twS1NBdklESTdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnNhVzVsWVhJZ1BTQW9jQ2tnUFQ0Z2NEdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVWNGNHOUpiaUE5SUNod2IzZGxjaWtnUFQ0Z0tIQXBJRDArSUhBZ0tpb2djRzkzWlhJN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWldGelpVbHVJRDBnWTNKbFlYUmxSWGh3YjBsdUtESXBPMXh1Wlhod2IzSjBJR052Ym5OMElHVmhjMlZQZFhRZ1BTQmpjbVZoZEdWU1pYWmxjbk5sWkVWaGMybHVaeWhsWVhObFNXNHBPMXh1Wlhod2IzSjBJR052Ym5OMElHVmhjMlZKYms5MWRDQTlJR055WldGMFpVMXBjbkp2Y21Wa1JXRnphVzVuS0dWaGMyVkpiaWs3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYVhKalNXNGdQU0FvY0NrZ1BUNGdNU0F0SUUxaGRHZ3VjMmx1S0UxaGRHZ3VZV052Y3lod0tTazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1kybHlZMDkxZENBOUlHTnlaV0YwWlZKbGRtVnljMlZrUldGemFXNW5LR05wY21OSmJpazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1kybHlZMGx1VDNWMElEMGdZM0psWVhSbFRXbHljbTl5WldSRllYTnBibWNvWTJseVkwOTFkQ2s3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVkNZV05yU1c0Z1BTQW9jRzkzWlhJcElEMCtJQ2h3S1NBOVBpQW9jQ0FxSUhBcElDb2dLQ2h3YjNkbGNpQXJJREVwSUNvZ2NDQXRJSEJ2ZDJWeUtUdGNibVY0Y0c5eWRDQmpiMjV6ZENCaVlXTnJTVzRnUFNCamNtVmhkR1ZDWVdOclNXNG9SRVZHUVZWTVZGOVBWa1ZTVTBoUFQxUmZVMVJTUlU1SFZFZ3BPMXh1Wlhod2IzSjBJR052Ym5OMElHSmhZMnRQZFhRZ1BTQmpjbVZoZEdWU1pYWmxjbk5sWkVWaGMybHVaeWhpWVdOclNXNHBPMXh1Wlhod2IzSjBJR052Ym5OMElHSmhZMnRKYms5MWRDQTlJR055WldGMFpVMXBjbkp2Y21Wa1JXRnphVzVuS0dKaFkydEpiaWs3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVkJiblJwWTJsd1lYUmxSV0Z6YVc1bklEMGdLSEJ2ZDJWeUtTQTlQaUI3WEc0Z0lHTnZibk4wSUdKaFkydEZZWE5wYm1jZ1BTQmpjbVZoZEdWQ1lXTnJTVzRvY0c5M1pYSXBPMXh1SUNCeVpYUjFjbTRnS0hBcElEMCtJQ2dvY0NBcVBTQXlLU0E4SURFcElEOGdNQzQxSUNvZ1ltRmphMFZoYzJsdVp5aHdLU0E2SURBdU5TQXFJQ2d5SUMwZ1RXRjBhQzV3YjNjb01pd2dMVEV3SUNvZ0tIQWdMU0F4S1NrcE8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR0Z1ZEdsamFYQmhkR1VnUFNCamNtVmhkR1ZCYm5ScFkybHdZWFJsUldGemFXNW5LRVJGUmtGVlRGUmZUMVpGVWxOSVQwOVVYMU5VVWtWT1IxUklLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR04xWW1salFtVjZhV1Z5SUQwZ0tIZ3hMQ0I1TVN3Z2VESXNJSGt5S1NBOVBpQjdYRzRnSUdOdmJuTjBJSGhDWlhwcFpYSWdQU0JpWlhwcFpYSW9NQ3dnZURFc0lIZ3lMQ0F4S1R0Y2JpQWdZMjl1YzNRZ2VVSmxlbWxsY2lBOUlHSmxlbWxsY2lnd0xDQjVNU3dnZVRJc0lERXBPMXh1WEc0Z0lISmxkSFZ5YmlBb2RDa2dQVDRnZVVKbGVtbGxjaWg0UW1WNmFXVnlLSFFwS1R0Y2JuMDdYRzRpWFgwPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luYy9lYXNpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ29tcG9zaXRlQWN0aW9uID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENvbXBvc2l0ZUFjdGlvbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ29tcG9zaXRlQWN0aW9uKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvc2l0ZUFjdGlvbik7XG5cbiAgICB2YXIgYWN0aW9ucyA9IHByb3BzLmFjdGlvbnMsXG4gICAgICAgIHJlbWFpbmluZ1Byb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ2FjdGlvbnMnXSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwodGhpcywgcmVtYWluaW5nUHJvcHMpKTtcblxuICAgIF90aGlzLmN1cnJlbnQgPSB7fTtcbiAgICBfdGhpcy5hY3Rpb25LZXlzID0gW107XG4gICAgX3RoaXMuYWRkQWN0aW9ucyhhY3Rpb25zKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmFkZEFjdGlvbnMgPSBmdW5jdGlvbiBhZGRBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGtleSkge1xuICAgICAgaWYgKF90aGlzMi5hY3Rpb25LZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgX3RoaXMyLmFjdGlvbktleXMucHVzaChrZXkpO1xuICAgICAgfVxuXG4gICAgICBfdGhpczJba2V5XSA9IGFjdGlvbnNba2V5XTtcblxuICAgICAgdmFyIG9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUodikge1xuICAgICAgICBfdGhpczIuY3VycmVudFtrZXldID0gdjtcbiAgICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkoX3RoaXMyLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpczJba2V5XS5zZXRQcm9wcyh7XG4gICAgICAgIF9vblN0b3A6IGZ1bmN0aW9uIF9vblN0b3AoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cbiAgICAgIH0pLmFkZExpc3RlbmVyKG9uVXBkYXRlKTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIGFjdGlvbnMpIHtcbiAgICAgIF9sb29wKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSB0aGlzLmFjdGlvbktleXMubGVuZ3RoO1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczNba2V5XS5zdGFydCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzNFtrZXldLnN0b3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gZ2V0VmVsb2NpdHkoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB2YXIgdmVsb2NpdHkgPSB7fTtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gdmVsb2NpdHlba2V5XSA9IF90aGlzNVtrZXldLmdldFZlbG9jaXR5KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZlbG9jaXR5O1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMDtcbiAgfTtcblxuICByZXR1cm4gQ29tcG9zaXRlQWN0aW9uO1xufShfMi5kZWZhdWx0KTtcblxuQ29tcG9zaXRlQWN0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ29tcG9zaXRlQWN0aW9uKF9leHRlbmRzKHtcbiAgICBhY3Rpb25zOiBhY3Rpb25zXG4gIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnZiWEJ2YzJsMFpTNXFjeUpkTENKdVlXMWxjeUk2V3lKRGIyMXdiM05wZEdWQlkzUnBiMjRpTENKd2NtOXdjeUlzSW1GamRHbHZibk1pTENKeVpXMWhhVzVwYm1kUWNtOXdjeUlzSW1OMWNuSmxiblFpTENKaFkzUnBiMjVMWlhseklpd2lZV1JrUVdOMGFXOXVjeUlzSW10bGVTSXNJbWx1WkdWNFQyWWlMQ0p3ZFhOb0lpd2liMjVWY0dSaGRHVWlMQ0oySWl3aWMyTm9aV1IxYkdWa1ZYQmtZWFJsSWl3aWMyVjBVSEp2Y0hNaUxDSmZiMjVUZEc5d0lpd2liblZ0UVdOMGFYWmxRV04wYVc5dWN5SXNJbUZrWkV4cGMzUmxibVZ5SWl3aWIyNVRkR0Z5ZENJc0lteGxibWQwYUNJc0ltWnZja1ZoWTJnaUxDSnpkR0Z5ZENJc0ltOXVVM1J2Y0NJc0luTjBiM0FpTENKblpYUldaV3h2WTJsMGVTSXNJblpsYkc5amFYUjVJaXdpYVhOQlkzUnBiMjVEYjIxd2JHVjBaU0lzSW1SbFptRjFiSFJRY205d2N5SXNJbkJoYzNOcGRtVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGQk96czdPMEZCUTBFN096czdPenM3T3pzN096dEpRVVZOUVN4bE96czdRVUZMU2l3eVFrRkJXVU1zUzBGQldpeEZRVUZ0UWp0QlFVRkJPenRCUVVGQkxGRkJRMVJETEU5QlJGTXNSMEZEYzBKRUxFdEJSSFJDTEVOQlExUkRMRTlCUkZNN1FVRkJRU3hSUVVOSFF5eGpRVVJJTERSQ1FVTnpRa1lzUzBGRWRFSTdPMEZCUVVFc2FVUkJSV3BDTEcxQ1FVRk5SU3hqUVVGT0xFTkJSbWxDT3p0QlFVZHFRaXhWUVVGTFF5eFBRVUZNTEVkQlFXVXNSVUZCWmp0QlFVTkJMRlZCUVV0RExGVkJRVXdzUjBGQmEwSXNSVUZCYkVJN1FVRkRRU3hWUVVGTFF5eFZRVUZNTEVOQlFXZENTaXhQUVVGb1FqdEJRVXhwUWp0QlFVMXNRanM3TkVKQlJVUkpMRlVzZFVKQlFWZEtMRThzUlVGQlV6dEJRVUZCT3p0QlFVRkJMQ3RDUVVOUVN5eEhRVVJQTzBGQlJXaENMRlZCUVVrc1QwRkJTMFlzVlVGQlRDeERRVUZuUWtjc1QwRkJhRUlzUTBGQmQwSkVMRWRCUVhoQ0xFMUJRV2xETEVOQlFVTXNRMEZCZEVNc1JVRkJlVU03UVVGRGRrTXNaVUZCUzBZc1ZVRkJUQ3hEUVVGblFra3NTVUZCYUVJc1EwRkJjVUpHTEVkQlFYSkNPMEZCUTBRN08wRkJSVVFzWVVGQlMwRXNSMEZCVEN4SlFVRlpUQ3hSUVVGUlN5eEhRVUZTTEVOQlFWbzdPMEZCUlVFc1ZVRkJUVWNzVjBGQlZ5eFRRVUZZUVN4UlFVRlhMRU5CUVVORExFTkJRVVFzUlVGQlR6dEJRVU4wUWl4bFFVRkxVQ3hQUVVGTUxFTkJRV0ZITEVkQlFXSXNTVUZCYjBKSkxFTkJRWEJDTzBGQlEwRXNjME5CUVdNc1QwRkJTME1zWlVGQmJrSTdRVUZEUkN4UFFVaEVPenRCUVV0QkxHRkJRVXRNTEVkQlFVd3NSVUZEUjAwc1VVRkVTQ3hEUVVOWk8wRkJRMUpETEdsQ1FVRlRPMEZCUVVFc2FVSkJRVTBzVDBGQlMwTXNaMEpCUVV3c1JVRkJUanRCUVVGQk8wRkJSRVFzVDBGRVdpeEZRVWxIUXl4WFFVcElMRU5CU1dWT0xGRkJTbVk3UVVGaVowSTdPMEZCUTJ4Q0xGTkJRVXNzU1VGQlRVZ3NSMEZCV0N4SlFVRnJRa3dzVDBGQmJFSXNSVUZCTWtJN1FVRkJRU3haUVVGb1Frc3NSMEZCWjBJN1FVRnBRakZDTzBGQlEwWXNSenM3TkVKQlJVUlZMRThzYzBKQlFWVTdRVUZCUVRzN1FVRkRVaXhUUVVGTFJpeG5Ra0ZCVEN4SFFVRjNRaXhMUVVGTFZpeFZRVUZNTEVOQlFXZENZU3hOUVVGNFF6dEJRVU5CTEZOQlFVdGlMRlZCUVV3c1EwRkJaMEpqTEU5QlFXaENMRU5CUVhkQ0xGVkJRVU5hTEVkQlFVUTdRVUZCUVN4aFFVRlRMRTlCUVV0QkxFZEJRVXdzUlVGQlZXRXNTMEZCVml4RlFVRlVPMEZCUVVFc1MwRkJlRUk3UVVGRFJDeEhPenMwUWtGRlJFTXNUU3h4UWtGQlV6dEJRVUZCT3p0QlFVTlFMRk5CUVV0b1FpeFZRVUZNTEVOQlFXZENZeXhQUVVGb1FpeERRVUYzUWl4VlFVRkRXaXhIUVVGRU8wRkJRVUVzWVVGQlV5eFBRVUZMUVN4SFFVRk1MRVZCUVZWbExFbEJRVllzUlVGQlZEdEJRVUZCTEV0QlFYaENPMEZCUTBRc1J6czdORUpCUlVSRExGY3NNRUpCUVdNN1FVRkJRVHM3UVVGRFdpeFJRVUZOUXl4WFFVRlhMRVZCUVdwQ08wRkJRMEVzVTBGQlMyNUNMRlZCUVV3c1EwRkJaMEpqTEU5QlFXaENMRU5CUVhkQ0xGVkJRVU5hTEVkQlFVUTdRVUZCUVN4aFFVRlRhVUlzVTBGQlUycENMRWRCUVZRc1NVRkJaMElzVDBGQlMwRXNSMEZCVEN4RlFVRlZaMElzVjBGQlZpeEZRVUY2UWp0QlFVRkJMRXRCUVhoQ08wRkJRMEVzVjBGQlQwTXNVVUZCVUR0QlFVTkVMRWM3T3pSQ1FVVkVReXhuUWl3clFrRkJiVUk3UVVGRGFrSXNWMEZCVVN4TFFVRkxWaXhuUWtGQlRDeExRVUV3UWl4RFFVRnNRenRCUVVORUxFYzdPenM3TzBGQmJrUkhaaXhsTEVOQlEwY3dRaXhaTEVkQlFXVTdRVUZEY0VKRExGZEJRVk03UVVGRVZ5eERPenRyUWtGeFJGUXNWVUZCUTNwQ0xFOUJRVVFzUlVGQlZVUXNTMEZCVml4RlFVRnZRanRCUVVOcVF5eFRRVUZQTEVsQlFVbEVMR1ZCUVVvN1FVRkRURVU3UVVGRVN5eExRVVZHUkN4TFFVWkZMRVZCUVZBN1FVRkpSQ3hESWl3aVptbHNaU0k2SW1OdmJYQnZjMmwwWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGeWN5OW5hWFJvZFdJdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNXBiWEJ2Y25RZ2V5QnZia1p5WVcxbFZYQmtZWFJsSUgwZ1puSnZiU0FuTGk0dlpuSmhiV1Z6ZVc1akp6dGNibHh1WTJ4aGMzTWdRMjl0Y0c5emFYUmxRV04wYVc5dUlHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0J3WVhOemFYWmxPaUIwY25WbFhHNGdJSDA3WEc1Y2JpQWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITXBJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHRmpkR2x2Ym5Nc0lDNHVMbkpsYldGcGJtbHVaMUJ5YjNCeklIMGdQU0J3Y205d2N6dGNiaUFnSUNCemRYQmxjaWh5WlcxaGFXNXBibWRRY205d2N5azdYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJRDBnZTMwN1hHNGdJQ0FnZEdocGN5NWhZM1JwYjI1TFpYbHpJRDBnVzEwN1hHNGdJQ0FnZEdocGN5NWhaR1JCWTNScGIyNXpLR0ZqZEdsdmJuTXBPMXh1SUNCOVhHNWNiaUFnWVdSa1FXTjBhVzl1Y3loaFkzUnBiMjV6S1NCN1hHNGdJQ0FnWm05eUlDaGpiMjV6ZENCclpYa2dhVzRnWVdOMGFXOXVjeWtnZTF4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11WVdOMGFXOXVTMlY1Y3k1cGJtUmxlRTltS0d0bGVTa2dQVDA5SUMweEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXTjBhVzl1UzJWNWN5NXdkWE5vS0d0bGVTazdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSFJvYVhOYmEyVjVYU0E5SUdGamRHbHZibk5iYTJWNVhUdGNibHh1SUNBZ0lDQWdZMjl1YzNRZ2IyNVZjR1JoZEdVZ1BTQW9kaWtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1OMWNuSmxiblJiYTJWNVhTQTlJSFk3WEc0Z0lDQWdJQ0FnSUc5dVJuSmhiV1ZWY0dSaGRHVW9kR2hwY3k1elkyaGxaSFZzWldSVmNHUmhkR1VwTzF4dUlDQWdJQ0FnZlR0Y2JseHVJQ0FnSUNBZ2RHaHBjMXRyWlhsZFhHNGdJQ0FnSUNBZ0lDNXpaWFJRY205d2N5aDdYRzRnSUNBZ0lDQWdJQ0FnWDI5dVUzUnZjRG9nS0NrZ1BUNGdkR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6TFMxY2JpQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lDQWdMbUZrWkV4cGMzUmxibVZ5S0c5dVZYQmtZWFJsS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCdmJsTjBZWEowS0NrZ2UxeHVJQ0FnSUhSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5QTlJSFJvYVhNdVlXTjBhVzl1UzJWNWN5NXNaVzVuZEdnN1hHNGdJQ0FnZEdocGN5NWhZM1JwYjI1TFpYbHpMbVp2Y2tWaFkyZ29LR3RsZVNrZ1BUNGdkR2hwYzF0clpYbGRMbk4wWVhKMEtDa3BPMXh1SUNCOVhHNWNiaUFnYjI1VGRHOXdLQ2tnZTF4dUlDQWdJSFJvYVhNdVlXTjBhVzl1UzJWNWN5NW1iM0pGWVdOb0tDaHJaWGtwSUQwK0lIUm9hWE5iYTJWNVhTNXpkRzl3S0NrcE8xeHVJQ0I5WEc1Y2JpQWdaMlYwVm1Wc2IyTnBkSGtvS1NCN1hHNGdJQ0FnWTI5dWMzUWdkbVZzYjJOcGRIa2dQU0I3ZlR0Y2JpQWdJQ0IwYUdsekxtRmpkR2x2Ymt0bGVYTXVabTl5UldGamFDZ29hMlY1S1NBOVBpQjJaV3h2WTJsMGVWdHJaWGxkSUQwZ2RHaHBjMXRyWlhsZExtZGxkRlpsYkc5amFYUjVLQ2twTzF4dUlDQWdJSEpsZEhWeWJpQjJaV3h2WTJsMGVUdGNiaUFnZlZ4dVhHNGdJR2x6UVdOMGFXOXVRMjl0Y0d4bGRHVW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlDaDBhR2x6TG01MWJVRmpkR2wyWlVGamRHbHZibk1nUFQwOUlEQXBPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hoWTNScGIyNXpMQ0J3Y205d2N5a2dQVDRnZTF4dUlDQnlaWFIxY200Z2JtVjNJRU52YlhCdmMybDBaVUZqZEdsdmJpaDdYRzRnSUNBZ1lXTjBhVzl1Y3l4Y2JpQWdJQ0F1TGk1d2NtOXdjMXh1SUNCOUtUdGNibjA3WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQYXJhbGxlbCA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQYXJhbGxlbCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGFyYWxsZWwocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFyYWxsZWwpO1xuXG4gICAgdmFyIGFjdGlvbnMgPSBwcm9wcy5hY3Rpb25zLFxuICAgICAgICByZW1haW5pbmdQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWydhY3Rpb25zJ10pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHJlbWFpbmluZ1Byb3BzKSk7XG5cbiAgICBfdGhpcy5hY3Rpb25zID0gW107XG4gICAgX3RoaXMuY3VycmVudCA9IFtdO1xuICAgIF90aGlzLmFkZEFjdGlvbnMoYWN0aW9ucyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLmFkZEFjdGlvbiA9IGZ1bmN0aW9uIGFkZEFjdGlvbihhY3Rpb24pIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICh0aGlzLmFjdGlvbnMuaW5kZXhPZihhY3Rpb24pICE9PSAtMSkgcmV0dXJuO1xuXG4gICAgdGhpcy5hY3Rpb25zLnB1c2goYWN0aW9uKTtcblxuICAgIHZhciBpID0gdGhpcy5hY3Rpb25zLmxlbmd0aCAtIDE7XG4gICAgdmFyIG9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUodikge1xuICAgICAgX3RoaXMyLmN1cnJlbnRbaV0gPSB2O1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkoX3RoaXMyLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfTtcblxuICAgIG9uVXBkYXRlKGFjdGlvbi5nZXQoKSk7XG5cbiAgICBhY3Rpb24uc2V0UHJvcHMoe1xuICAgICAgX29uU3RvcDogZnVuY3Rpb24gX29uU3RvcCgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICB9XG4gICAgfSkuYWRkTGlzdGVuZXIob25VcGRhdGUpO1xuICB9O1xuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5hZGRBY3Rpb25zID0gZnVuY3Rpb24gYWRkQWN0aW9ucyhhY3Rpb25zKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgcmV0dXJuIF90aGlzMy5hZGRBY3Rpb24oYWN0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gdGhpcy5hY3Rpb25zLmxlbmd0aDtcbiAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB0aGlzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLnN0b3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLmdldFZlbG9jaXR5KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDA7XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLmdldENoaWxkcmVuID0gZnVuY3Rpb24gZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9ucztcbiAgfTtcblxuICByZXR1cm4gUGFyYWxsZWw7XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBQYXJhbGxlbChfZXh0ZW5kcyh7IGFjdGlvbnM6IGFjdGlvbnMgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNCaGNtRnNiR1ZzTG1weklsMHNJbTVoYldWeklqcGJJbEJoY21Gc2JHVnNJaXdpY0hKdmNITWlMQ0poWTNScGIyNXpJaXdpY21WdFlXbHVhVzVuVUhKdmNITWlMQ0pqZFhKeVpXNTBJaXdpWVdSa1FXTjBhVzl1Y3lJc0ltRmtaRUZqZEdsdmJpSXNJbUZqZEdsdmJpSXNJbWx1WkdWNFQyWWlMQ0p3ZFhOb0lpd2lhU0lzSW14bGJtZDBhQ0lzSW05dVZYQmtZWFJsSWl3aWRpSXNJbk5qYUdWa2RXeGxaRlZ3WkdGMFpTSXNJbWRsZENJc0luTmxkRkJ5YjNCeklpd2lYMjl1VTNSdmNDSXNJbTUxYlVGamRHbDJaVUZqZEdsdmJuTWlMQ0poWkdSTWFYTjBaVzVsY2lJc0ltWnZja1ZoWTJnaUxDSnZibE4wWVhKMElpd2ljM1JoY25RaUxDSnZibE4wYjNBaUxDSnpkRzl3SWl3aVoyVjBWbVZzYjJOcGRIa2lMQ0p0WVhBaUxDSnBjMEZqZEdsdmJrTnZiWEJzWlhSbElpd2laMlYwUTJocGJHUnlaVzRpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3T3pzN096czdPenRKUVVWTlFTeFJPenM3UVVGRFNpeHZRa0ZCV1VNc1MwRkJXaXhGUVVGdFFqdEJRVUZCT3p0QlFVRkJMRkZCUTFSRExFOUJSRk1zUjBGRGMwSkVMRXRCUkhSQ0xFTkJRMVJETEU5QlJGTTdRVUZCUVN4UlFVTkhReXhqUVVSSUxEUkNRVU56UWtZc1MwRkVkRUk3TzBGQlFVRXNhVVJCUldwQ0xHMUNRVUZOUlN4alFVRk9MRU5CUm1sQ096dEJRVWRxUWl4VlFVRkxSQ3hQUVVGTUxFZEJRV1VzUlVGQlpqdEJRVU5CTEZWQlFVdEZMRTlCUVV3c1IwRkJaU3hGUVVGbU8wRkJRMEVzVlVGQlMwTXNWVUZCVEN4RFFVRm5Ra2dzVDBGQmFFSTdRVUZNYVVJN1FVRk5iRUk3TzNGQ1FVVkVTU3hUTEhOQ1FVRlZReXhOTEVWQlFWRTdRVUZCUVRzN1FVRkRhRUlzVVVGQlNTeExRVUZMVEN4UFFVRk1MRU5CUVdGTkxFOUJRV0lzUTBGQmNVSkVMRTFCUVhKQ0xFMUJRV2xETEVOQlFVTXNRMEZCZEVNc1JVRkJlVU03TzBGQlJYcERMRk5CUVV0TUxFOUJRVXdzUTBGQllVOHNTVUZCWWl4RFFVRnJRa1lzVFVGQmJFSTdPMEZCUlVFc1VVRkJUVWNzU1VGQlNTeExRVUZMVWl4UFFVRk1MRU5CUVdGVExFMUJRV0lzUjBGQmMwSXNRMEZCYUVNN1FVRkRRU3hSUVVGTlF5eFhRVUZYTEZOQlFWaEJMRkZCUVZjc1EwRkJRME1zUTBGQlJDeEZRVUZQTzBGQlEzUkNMR0ZCUVV0VUxFOUJRVXdzUTBGQllVMHNRMEZCWWl4SlFVRnJRa2NzUTBGQmJFSTdRVUZEUVN4dlEwRkJZeXhQUVVGTFF5eGxRVUZ1UWp0QlFVTkVMRXRCU0VRN08wRkJTMEZHTEdGQlFWTk1MRTlCUVU5UkxFZEJRVkFzUlVGQlZEczdRVUZGUVZJc1YwRkRSMU1zVVVGRVNDeERRVU5aTzBGQlExSkRMR1ZCUVZNN1FVRkJRU3hsUVVGTkxFOUJRVXRETEdkQ1FVRk1MRVZCUVU0N1FVRkJRVHRCUVVSRUxFdEJSRm9zUlVGSlIwTXNWMEZLU0N4RFFVbGxVQ3hSUVVwbU8wRkJTMFFzUnpzN2NVSkJSVVJRTEZVc2RVSkJRVmRJTEU4c1JVRkJVenRCUVVGQk96dEJRVU5zUWtFc1dVRkJVV3RDTEU5QlFWSXNRMEZCWjBJc1ZVRkJRMklzVFVGQlJEdEJRVUZCTEdGQlFWa3NUMEZCUzBRc1UwRkJUQ3hEUVVGbFF5eE5RVUZtTEVOQlFWbzdRVUZCUVN4TFFVRm9RanRCUVVORUxFYzdPM0ZDUVVWRVl5eFBMSE5DUVVGVk8wRkJRMUlzVTBGQlMwZ3NaMEpCUVV3c1IwRkJkMElzUzBGQlMyaENMRTlCUVV3c1EwRkJZVk1zVFVGQmNrTTdRVUZEUVN4VFFVRkxWQ3hQUVVGTUxFTkJRV0ZyUWl4UFFVRmlMRU5CUVhGQ0xGVkJRVU5pTEUxQlFVUTdRVUZCUVN4aFFVRlpRU3hQUVVGUFpTeExRVUZRTEVWQlFWbzdRVUZCUVN4TFFVRnlRanRCUVVORUxFYzdPM0ZDUVVWRVF5eE5MSEZDUVVGVE8wRkJRMUFzVTBGQlMzSkNMRTlCUVV3c1EwRkJZV3RDTEU5QlFXSXNRMEZCY1VJc1ZVRkJRMklzVFVGQlJEdEJRVUZCTEdGQlFWbEJMRTlCUVU5cFFpeEpRVUZRTEVWQlFWbzdRVUZCUVN4TFFVRnlRanRCUVVORUxFYzdPM0ZDUVVWRVF5eFhMREJDUVVGak8wRkJRMW9zVjBGQlR5eExRVUZMZGtJc1QwRkJUQ3hEUVVGaGQwSXNSMEZCWWl4RFFVRnBRaXhWUVVGRGJrSXNUVUZCUkR0QlFVRkJMR0ZCUVZsQkxFOUJRVTlyUWl4WFFVRlFMRVZCUVZvN1FVRkJRU3hMUVVGcVFpeERRVUZRTzBGQlEwUXNSenM3Y1VKQlJVUkZMR2RDTEN0Q1FVRnRRanRCUVVOcVFpeFhRVUZSTEV0QlFVdFVMR2RDUVVGTUxFdEJRVEJDTEVOQlFXeERPMEZCUTBRc1J6czdjVUpCUlVSVkxGY3NNRUpCUVdNN1FVRkRXaXhYUVVGUExFdEJRVXN4UWl4UFFVRmFPMEZCUTBRc1J6czdPenM3YTBKQlIxa3NWVUZCUTBFc1QwRkJSQ3hGUVVGVlJDeExRVUZXTzBGQlFVRXNVMEZCYjBJc1NVRkJTVVFzVVVGQlNpeFpRVUZsUlN4blFrRkJaaXhKUVVFeVFrUXNTMEZCTTBJc1JVRkJjRUk3UVVGQlFTeERJaXdpWm1sc1pTSTZJbkJoY21Gc2JHVnNMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWEp6TDJkcGRHaDFZaTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYm1sdGNHOXlkQ0I3SUc5dVJuSmhiV1ZWY0dSaGRHVWdmU0JtY205dElDY3VMaTltY21GdFpYTjVibU1uTzF4dVhHNWpiR0Z6Y3lCUVlYSmhiR3hsYkNCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCaFkzUnBiMjV6TENBdUxpNXlaVzFoYVc1cGJtZFFjbTl3Y3lCOUlEMGdjSEp2Y0hNN1hHNGdJQ0FnYzNWd1pYSW9jbVZ0WVdsdWFXNW5VSEp2Y0hNcE8xeHVJQ0FnSUhSb2FYTXVZV04wYVc5dWN5QTlJRnRkTzF4dUlDQWdJSFJvYVhNdVkzVnljbVZ1ZENBOUlGdGRPMXh1SUNBZ0lIUm9hWE11WVdSa1FXTjBhVzl1Y3loaFkzUnBiMjV6S1R0Y2JpQWdmVnh1WEc0Z0lHRmtaRUZqZEdsdmJpaGhZM1JwYjI0cElIdGNiaUFnSUNCcFppQW9kR2hwY3k1aFkzUnBiMjV6TG1sdVpHVjRUMllvWVdOMGFXOXVLU0FoUFQwZ0xURXBJSEpsZEhWeWJqdGNibHh1SUNBZ0lIUm9hWE11WVdOMGFXOXVjeTV3ZFhOb0tHRmpkR2x2YmlrN1hHNWNiaUFnSUNCamIyNXpkQ0JwSUQwZ2RHaHBjeTVoWTNScGIyNXpMbXhsYm1kMGFDQXRJREU3WEc0Z0lDQWdZMjl1YzNRZ2IyNVZjR1JoZEdVZ1BTQW9kaWtnUFQ0Z2UxeHVJQ0FnSUNBZ2RHaHBjeTVqZFhKeVpXNTBXMmxkSUQwZ2RqdGNiaUFnSUNBZ0lHOXVSbkpoYldWVmNHUmhkR1VvZEdocGN5NXpZMmhsWkhWc1pXUlZjR1JoZEdVcE8xeHVJQ0FnSUgwN1hHNWNiaUFnSUNCdmJsVndaR0YwWlNoaFkzUnBiMjR1WjJWMEtDa3BPMXh1WEc0Z0lDQWdZV04wYVc5dVhHNGdJQ0FnSUNBdWMyVjBVSEp2Y0hNb2UxeHVJQ0FnSUNBZ0lDQmZiMjVUZEc5d09pQW9LU0E5UGlCMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTXRMVnh1SUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQzVoWkdSTWFYTjBaVzVsY2lodmJsVndaR0YwWlNrN1hHNGdJSDFjYmx4dUlDQmhaR1JCWTNScGIyNXpLR0ZqZEdsdmJuTXBJSHRjYmlBZ0lDQmhZM1JwYjI1ekxtWnZja1ZoWTJnb0tHRmpkR2x2YmlrZ1BUNGdkR2hwY3k1aFpHUkJZM1JwYjI0b1lXTjBhVzl1S1NrN1hHNGdJSDFjYmx4dUlDQnZibE4wWVhKMEtDa2dlMXh1SUNBZ0lIUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeUE5SUhSb2FYTXVZV04wYVc5dWN5NXNaVzVuZEdnN1hHNGdJQ0FnZEdocGN5NWhZM1JwYjI1ekxtWnZja1ZoWTJnb0tHRmpkR2x2YmlrZ1BUNGdZV04wYVc5dUxuTjBZWEowS0NrcE8xeHVJQ0I5WEc1Y2JpQWdiMjVUZEc5d0tDa2dlMXh1SUNBZ0lIUm9hWE11WVdOMGFXOXVjeTVtYjNKRllXTm9LQ2hoWTNScGIyNHBJRDArSUdGamRHbHZiaTV6ZEc5d0tDa3BPMXh1SUNCOVhHNWNiaUFnWjJWMFZtVnNiMk5wZEhrb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVZV04wYVc5dWN5NXRZWEFvS0dGamRHbHZiaWtnUFQ0Z1lXTjBhVzl1TG1kbGRGWmxiRzlqYVhSNUtDa3BPMXh1SUNCOVhHNWNiaUFnYVhOQlkzUnBiMjVEYjIxd2JHVjBaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdLSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lBOVBUMGdNQ2s3WEc0Z0lIMWNibHh1SUNCblpYUkRhR2xzWkhKbGJpZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVoWTNScGIyNXpPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hoWTNScGIyNXpMQ0J3Y205d2N5a2dQVDRnYm1WM0lGQmhjbUZzYkdWc0tIc2dZV04wYVc5dWN5d2dMaTR1Y0hKdmNITWdmU2s3WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL3BhcmFsbGVsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBWYWx1ZSA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhWYWx1ZSwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVmFsdWUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZhbHVlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVmFsdWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgdGhpcy50b1VwZGF0ZSA9IHY7XG4gICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIHJldHVybiB2O1xuICB9O1xuXG4gIFZhbHVlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9VcGRhdGUgIT09IHVuZGVmaW5lZCA/IHRoaXMudG9VcGRhdGUgOiB0aGlzLmN1cnJlbnQ7XG4gIH07XG5cbiAgVmFsdWUucHJvdG90eXBlLnN0b3BSZWdpc3RlcmVkQWN0aW9uID0gZnVuY3Rpb24gc3RvcFJlZ2lzdGVyZWRBY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuYWN0aW9uICYmIHRoaXMuYWN0aW9uLmlzQWN0aXZlKCkpIHRoaXMuYWN0aW9uLnN0b3AoKTtcbiAgICB0aGlzLmFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgfTtcblxuICBWYWx1ZS5wcm90b3R5cGUucmVnaXN0ZXJBY3Rpb24gPSBmdW5jdGlvbiByZWdpc3RlckFjdGlvbihhY3Rpb24pIHtcbiAgICB0aGlzLnN0b3BSZWdpc3RlcmVkQWN0aW9uKCk7XG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVmFsdWUucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB0aGlzLnN0b3BSZWdpc3RlcmVkQWN0aW9uKCk7XG4gIH07XG5cbiAgcmV0dXJuIFZhbHVlO1xufShfMi5kZWZhdWx0KTtcblxuVmFsdWUuZGVmYXVsdFByb3BzID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY3VycmVudCwgb25VcGRhdGUpIHtcbiAgcmV0dXJuIG5ldyBWYWx1ZSh7IGN1cnJlbnQ6IGN1cnJlbnQsIG9uVXBkYXRlOiBvblVwZGF0ZSB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNaaGJIVmxMbXB6SWwwc0ltNWhiV1Z6SWpwYklsWmhiSFZsSWl3aWMyVjBJaXdpZGlJc0luUnZWWEJrWVhSbElpd2ljMk5vWldSMWJHVmtWWEJrWVhSbElpd2lkWEJrWVhSbElpd2lkVzVrWldacGJtVmtJaXdpWTNWeWNtVnVkQ0lzSW5OMGIzQlNaV2RwYzNSbGNtVmtRV04wYVc5dUlpd2lZV04wYVc5dUlpd2lhWE5CWTNScGRtVWlMQ0p6ZEc5d0lpd2ljbVZuYVhOMFpYSkJZM1JwYjI0aUxDSnZibE4wYjNBaUxDSmtaV1poZFd4MFVISnZjSE1pTENKd1lYTnphWFpsSWl3aWIyNVZjR1JoZEdVaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3T3pzN096czdPMGxCUlUxQkxFczdPenM3T3pzN096dHJRa0ZMU2tNc1J5eG5Ra0ZCU1VNc1F5eEZRVUZITzBGQlEwd3NVMEZCUzBNc1VVRkJUQ3hIUVVGblFrUXNRMEZCYUVJN1FVRkRRU3hyUTBGQll5eExRVUZMUlN4bFFVRnVRanRCUVVOQkxGZEJRVTlHTEVOQlFWQTdRVUZEUkN4SE96dHJRa0ZGUkVjc1RTeHhRa0ZCVXp0QlFVTlFMRmRCUVZFc1MwRkJTMFlzVVVGQlRDeExRVUZyUWtjc1UwRkJia0lzUjBGQlowTXNTMEZCUzBnc1VVRkJja01zUjBGQlowUXNTMEZCUzBrc1QwRkJOVVE3UVVGRFJDeEhPenRyUWtGRlJFTXNiMElzYlVOQlFYVkNPMEZCUTNKQ0xGRkJRVWtzUzBGQlMwTXNUVUZCVEN4SlFVRmxMRXRCUVV0QkxFMUJRVXdzUTBGQldVTXNVVUZCV2l4RlFVRnVRaXhGUVVFeVF5eExRVUZMUkN4TlFVRk1MRU5CUVZsRkxFbEJRVm83UVVGRE0wTXNVMEZCUzBZc1RVRkJUQ3hIUVVGalNDeFRRVUZrTzBGQlEwUXNSenM3YTBKQlJVUk5MR01zTWtKQlFXVklMRTBzUlVGQlVUdEJRVU55UWl4VFFVRkxSQ3h2UWtGQlREdEJRVU5CTEZOQlFVdERMRTFCUVV3c1IwRkJZMEVzVFVGQlpEdEJRVU5CTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzJ0Q1FVVkVTU3hOTEhGQ1FVRlRPMEZCUTFBc1UwRkJTMHdzYjBKQlFVdzdRVUZEUkN4SE96czdPenRCUVRWQ1IxSXNTeXhEUVVOSFl5eFpMRWRCUVdVN1FVRkRjRUpETEZkQlFWTTdRVUZFVnl4RE96dHJRa0U0UWxRc1ZVRkJRMUlzVDBGQlJDeEZRVUZWVXl4UlFVRldPMEZCUVVFc1UwRkJkVUlzU1VGQlNXaENMRXRCUVVvc1EwRkJWU3hGUVVGRlR5eG5Ra0ZCUml4RlFVRlhVeXhyUWtGQldDeEZRVUZXTEVOQlFYWkNPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSjJZV3gxWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGeWN5OW5hWFJvZFdJdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNXBiWEJ2Y25RZ2V5QnZia1p5WVcxbFZYQmtZWFJsSUgwZ1puSnZiU0FuTGk0dlpuSmhiV1Z6ZVc1akp6dGNibHh1WTJ4aGMzTWdWbUZzZFdVZ1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQnpkR0YwYVdNZ1pHVm1ZWFZzZEZCeWIzQnpJRDBnZTF4dUlDQWdJSEJoYzNOcGRtVTZJSFJ5ZFdWY2JpQWdmVHRjYmx4dUlDQnpaWFFvZGlrZ2UxeHVJQ0FnSUhSb2FYTXVkRzlWY0dSaGRHVWdQU0IyTzF4dUlDQWdJRzl1Um5KaGJXVlZjR1JoZEdVb2RHaHBjeTV6WTJobFpIVnNaV1JWY0dSaGRHVXBPMXh1SUNBZ0lISmxkSFZ5YmlCMk8xeHVJQ0I5WEc1Y2JpQWdkWEJrWVhSbEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlBb2RHaHBjeTUwYjFWd1pHRjBaU0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQS9JSFJvYVhNdWRHOVZjR1JoZEdVZ09pQjBhR2x6TG1OMWNuSmxiblE3WEc0Z0lIMWNibHh1SUNCemRHOXdVbVZuYVhOMFpYSmxaRUZqZEdsdmJpZ3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NWhZM1JwYjI0Z0ppWWdkR2hwY3k1aFkzUnBiMjR1YVhOQlkzUnBkbVVvS1NrZ2RHaHBjeTVoWTNScGIyNHVjM1J2Y0NncE8xeHVJQ0FnSUhSb2FYTXVZV04wYVc5dUlEMGdkVzVrWldacGJtVmtPMXh1SUNCOVhHNWNiaUFnY21WbmFYTjBaWEpCWTNScGIyNG9ZV04wYVc5dUtTQjdYRzRnSUNBZ2RHaHBjeTV6ZEc5d1VtVm5hWE4wWlhKbFpFRmpkR2x2YmlncE8xeHVJQ0FnSUhSb2FYTXVZV04wYVc5dUlEMGdZV04wYVc5dU8xeHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdiMjVUZEc5d0tDa2dlMXh1SUNBZ0lIUm9hWE11YzNSdmNGSmxaMmx6ZEdWeVpXUkJZM1JwYjI0b0tUdGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9ZM1Z5Y21WdWRDd2diMjVWY0dSaGRHVXBJRDArSUc1bGR5QldZV3gxWlNoN0lHTjFjbkpsYm5Rc0lHOXVWWEJrWVhSbElIMHBPMXh1SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjdGlvbnMvdmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb2xvciA9IGV4cG9ydHMuaHNsYSA9IGV4cG9ydHMucmdiYSA9IGV4cG9ydHMuaGV4ID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgaGV4ID0gZXhwb3J0cy5oZXggPSBmdW5jdGlvbiBoZXgodikge1xuICB2YXIgciA9IHZvaWQgMCxcbiAgICAgIGcgPSB2b2lkIDAsXG4gICAgICBiID0gdm9pZCAwO1xuXG4gIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gIGlmICh2Lmxlbmd0aCA+IDQpIHtcbiAgICByID0gdi5zdWJzdHIoMSwgMik7XG4gICAgZyA9IHYuc3Vic3RyKDMsIDIpO1xuICAgIGIgPSB2LnN1YnN0cig1LCAyKTtcblxuICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gIH0gZWxzZSB7XG4gICAgciA9IHYuc3Vic3RyKDEsIDEpO1xuICAgIGcgPSB2LnN1YnN0cigyLCAxKTtcbiAgICBiID0gdi5zdWJzdHIoMywgMSk7XG4gICAgciArPSByO1xuICAgIGcgKz0gZztcbiAgICBiICs9IGI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgIGdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgYmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgIGFscGhhOiAxXG4gIH07XG59O1xuXG52YXIgcmdiYSA9IGV4cG9ydHMucmdiYSA9ICgwLCBfdXRpbHMuc3BsaXRDb2xvclZhbHVlcykoWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZScsICdhbHBoYSddKTtcblxudmFyIGhzbGEgPSBleHBvcnRzLmhzbGEgPSAoMCwgX3V0aWxzLnNwbGl0Q29sb3JWYWx1ZXMpKFsnaHVlJywgJ3NhdHVyYXRpb24nLCAnbGlnaHRuZXNzJywgJ2FscGhhJ10pO1xuXG52YXIgY29sb3IgPSBleHBvcnRzLmNvbG9yID0gZnVuY3Rpb24gY29sb3Iodikge1xuICBpZiAoKDAsIF91dGlscy5pc1JnYikodikpIHtcbiAgICByZXR1cm4gcmdiYSh2KTtcbiAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLmlzSGV4KSh2KSkge1xuICAgIHJldHVybiBoZXgodik7XG4gIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc0hzbCkodikpIHtcbiAgICByZXR1cm4gaHNsYSh2KTtcbiAgfVxuXG4gIHJldHVybiB2O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmNHRnljMlZ5Y3k1cWN5SmRMQ0p1WVcxbGN5STZXeUpvWlhnaUxDSjJJaXdpY2lJc0ltY2lMQ0ppSWl3aWJHVnVaM1JvSWl3aWMzVmljM1J5SWl3aWNtVmtJaXdpY0dGeWMyVkpiblFpTENKbmNtVmxiaUlzSW1Kc2RXVWlMQ0poYkhCb1lTSXNJbkpuWW1FaUxDSm9jMnhoSWl3aVkyOXNiM0lpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRTdPMEZCUlU4c1NVRkJUVUVzYjBKQlFVMHNVMEZCVGtFc1IwRkJUU3hEUVVGRFF5eERRVUZFTEVWQlFVODdRVUZEZUVJc1RVRkJTVU1zVlVGQlNqdEJRVUZCTEUxQlFVOURMRlZCUVZBN1FVRkJRU3hOUVVGVlF5eFZRVUZXT3p0QlFVVkJPMEZCUTBFc1RVRkJTVWdzUlVGQlJVa3NUVUZCUml4SFFVRlhMRU5CUVdZc1JVRkJhMEk3UVVGRGFFSklMRkZCUVVsRUxFVkJRVVZMTEUxQlFVWXNRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhEUVVGS08wRkJRMEZJTEZGQlFVbEdMRVZCUVVWTExFMUJRVVlzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCV2l4RFFVRktPMEZCUTBGR0xGRkJRVWxJTEVWQlFVVkxMRTFCUVVZc1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQldpeERRVUZLT3p0QlFVVkdPMEZCUTBNc1IwRk9SQ3hOUVUxUE8wRkJRMHhLTEZGQlFVbEVMRVZCUVVWTExFMUJRVVlzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCV2l4RFFVRktPMEZCUTBGSUxGRkJRVWxHTEVWQlFVVkxMRTFCUVVZc1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQldpeERRVUZLTzBGQlEwRkdMRkZCUVVsSUxFVkJRVVZMTEUxQlFVWXNRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhEUVVGS08wRkJRMEZLTEZOQlFVdEJMRU5CUVV3N1FVRkRRVU1zVTBGQlMwRXNRMEZCVER0QlFVTkJReXhUUVVGTFFTeERRVUZNTzBGQlEwUTdPMEZCUlVRc1UwRkJUenRCUVVOTVJ5eFRRVUZMUXl4VFFVRlRUaXhEUVVGVUxFVkJRVmtzUlVGQldpeERRVVJCTzBGQlJVeFBMRmRCUVU5RUxGTkJRVk5NTEVOQlFWUXNSVUZCV1N4RlFVRmFMRU5CUmtZN1FVRkhURThzVlVGQlRVWXNVMEZCVTBvc1EwRkJWQ3hGUVVGWkxFVkJRVm9zUTBGSVJEdEJRVWxNVHl4WFFVRlBPMEZCU2tZc1IwRkJVRHRCUVUxRUxFTkJla0pOT3p0QlFUSkNRU3hKUVVGTlF5eHpRa0ZCVHl3MlFrRkJhVUlzUTBGQlF5eExRVUZFTEVWQlFWRXNUMEZCVWl4RlFVRnBRaXhOUVVGcVFpeEZRVUY1UWl4UFFVRjZRaXhEUVVGcVFpeERRVUZpT3p0QlFVVkJMRWxCUVUxRExITkNRVUZQTERaQ1FVRnBRaXhEUVVGRExFdEJRVVFzUlVGQlVTeFpRVUZTTEVWQlFYTkNMRmRCUVhSQ0xFVkJRVzFETEU5QlFXNURMRU5CUVdwQ0xFTkJRV0k3TzBGQlJVRXNTVUZCVFVNc2QwSkJRVkVzVTBGQlVrRXNTMEZCVVN4RFFVRkRZaXhEUVVGRUxFVkJRVTg3UVVGRE1VSXNUVUZCU1N4clFrRkJUVUVzUTBGQlRpeERRVUZLTEVWQlFXTTdRVUZEV2l4WFFVRlBWeXhMUVVGTFdDeERRVUZNTEVOQlFWQTdRVUZEUkN4SFFVWkVMRTFCUlU4c1NVRkJTU3hyUWtGQlRVRXNRMEZCVGl4RFFVRktMRVZCUVdNN1FVRkRia0lzVjBGQlQwUXNTVUZCU1VNc1EwRkJTaXhEUVVGUU8wRkJRMFFzUjBGR1RTeE5RVVZCTEVsQlFVa3NhMEpCUVUxQkxFTkJRVTRzUTBGQlNpeEZRVUZqTzBGQlEyNUNMRmRCUVU5WkxFdEJRVXRhTEVOQlFVd3NRMEZCVUR0QlFVTkVPenRCUVVWRUxGTkJRVTlCTEVOQlFWQTdRVUZEUkN4RFFWWk5JaXdpWm1sc1pTSTZJbkJoY25ObGNuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk12WjJsMGFIVmlMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUhOd2JHbDBRMjlzYjNKV1lXeDFaWE1zSUdselVtZGlMQ0JwYzBobGVDd2dhWE5JYzJ3Z2ZTQm1jbTl0SUNjdUwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdobGVDQTlJQ2gyS1NBOVBpQjdYRzRnSUd4bGRDQnlMQ0JuTENCaU8xeHVYRzRnSUM4dklFbG1JSGRsSUdoaGRtVWdOaUJqYUdGeVlXTjBaWEp6TENCcFpTQWpSa1l3TURBd1hHNGdJR2xtSUNoMkxteGxibWQwYUNBK0lEUXBJSHRjYmlBZ0lDQnlJRDBnZGk1emRXSnpkSElvTVN3Z01pazdYRzRnSUNBZ1p5QTlJSFl1YzNWaWMzUnlLRE1zSURJcE8xeHVJQ0FnSUdJZ1BTQjJMbk4xWW5OMGNpZzFMQ0F5S1R0Y2JseHVJQ0F2THlCUGNpQjNaU0JvWVhabElETWdZMmhoY21GamRHVnljeXdnYVdVZ0kwWXdNRnh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSElnUFNCMkxuTjFZbk4wY2lneExDQXhLVHRjYmlBZ0lDQm5JRDBnZGk1emRXSnpkSElvTWl3Z01TazdYRzRnSUNBZ1lpQTlJSFl1YzNWaWMzUnlLRE1zSURFcE8xeHVJQ0FnSUhJZ0t6MGdjanRjYmlBZ0lDQm5JQ3M5SUdjN1hHNGdJQ0FnWWlBclBTQmlPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQnlaV1E2SUhCaGNuTmxTVzUwS0hJc0lERTJLU3hjYmlBZ0lDQm5jbVZsYmpvZ2NHRnljMlZKYm5Rb1p5d2dNVFlwTEZ4dUlDQWdJR0pzZFdVNklIQmhjbk5sU1c1MEtHSXNJREUyS1N4Y2JpQWdJQ0JoYkhCb1lUb2dNVnh1SUNCOU8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSEpuWW1FZ1BTQnpjR3hwZEVOdmJHOXlWbUZzZFdWektGc25jbVZrSnl3Z0oyZHlaV1Z1Snl3Z0oySnNkV1VuTENBbllXeHdhR0VuWFNrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCb2MyeGhJRDBnYzNCc2FYUkRiMnh2Y2xaaGJIVmxjeWhiSjJoMVpTY3NJQ2R6WVhSMWNtRjBhVzl1Snl3Z0oyeHBaMmgwYm1WemN5Y3NJQ2RoYkhCb1lTZGRLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR052Ykc5eUlEMGdLSFlwSUQwK0lIdGNiaUFnYVdZZ0tHbHpVbWRpS0hZcEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhKblltRW9kaWs3WEc0Z0lIMGdaV3h6WlNCcFppQW9hWE5JWlhnb2Rpa3BJSHRjYmlBZ0lDQnlaWFIxY200Z2FHVjRLSFlwTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLR2x6U0hOc0tIWXBLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHaHpiR0VvZGlrN1hHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2RqdGNibjA3WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmMvcGFyc2Vycy5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ2hhaW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ2hhaW4sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENoYWluKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhaW4pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwuYXBwbHkoX0FjdGlvbiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnBsYXlOZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgaSA9IF90aGlzJHByb3BzLmksXG4gICAgICAgICAgb3JkZXIgPSBfdGhpcyRwcm9wcy5vcmRlcjtcblxuICAgICAgaWYgKGkgPCBvcmRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgIF90aGlzLnByb3BzLmkrKztcbiAgICAgICAgX3RoaXMucGxheUN1cnJlbnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBDaGFpbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pID0gMDtcbiAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLnBsYXlDdXJyZW50ID0gZnVuY3Rpb24gcGxheUN1cnJlbnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGkgPSBfcHJvcHMuaSxcbiAgICAgICAgb3JkZXIgPSBfcHJvcHMub3JkZXI7XG5cbiAgICBvcmRlcltpXS5wcm9wcy5fb25Db21wbGV0ZSA9IHRoaXMucGxheU5leHQ7XG4gICAgb3JkZXJbaV0uc3RhcnQoKTtcbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaSA9IF9wcm9wczIuaSxcbiAgICAgICAgb3JkZXIgPSBfcHJvcHMyLm9yZGVyO1xuXG4gICAgb3JkZXJbaV0uc3RvcCgpO1xuICB9O1xuXG4gIHJldHVybiBDaGFpbjtcbn0oXzIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcmRlciwgb25Db21wbGV0ZSkge1xuICByZXR1cm4gbmV3IENoYWluKHsgb3JkZXI6IG9yZGVyLCBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk5vWVdsdUxtcHpJbDBzSW01aGJXVnpJanBiSWtOb1lXbHVJaXdpY0d4aGVVNWxlSFFpTENKd2NtOXdjeUlzSW1raUxDSnZjbVJsY2lJc0lteGxibWQwYUNJc0luQnNZWGxEZFhKeVpXNTBJaXdpWTI5dGNHeGxkR1VpTENKdmJsTjBZWEowSWl3aVgyOXVRMjl0Y0d4bGRHVWlMQ0p6ZEdGeWRDSXNJbTl1VTNSdmNDSXNJbk4wYjNBaUxDSnZia052YlhCc1pYUmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdPenM3T3pzN096dEpRVVZOUVN4TE96czdPenM3T3pzN096czdjMGxCVFVwRExGRXNSMEZCVnl4WlFVRk5PMEZCUVVFc2QwSkJRMDBzVFVGQlMwTXNTMEZFV0R0QlFVRkJMRlZCUTFCRExFTkJSRThzWlVGRFVFRXNRMEZFVHp0QlFVRkJMRlZCUTBwRExFdEJSRWtzWlVGRFNrRXNTMEZFU1RzN1FVRkZaaXhWUVVGSlJDeEpRVUZKUXl4TlFVRk5ReXhOUVVGT0xFZEJRV1VzUTBGQmRrSXNSVUZCTUVJN1FVRkRlRUlzWTBGQlMwZ3NTMEZCVEN4RFFVRlhReXhEUVVGWU8wRkJRMEVzWTBGQlMwY3NWMEZCVER0QlFVTkVMRTlCU0VRc1RVRkhUenRCUVVOTUxHTkJRVXRETEZGQlFVdzdRVUZEUkR0QlFVTkdMRXM3T3p0clFrRmlSRU1zVHl4elFrRkJWVHRCUVVOU0xGTkJRVXRPTEV0QlFVd3NRMEZCVjBNc1EwRkJXQ3hIUVVGbExFTkJRV1k3UVVGRFFTeFRRVUZMUnl4WFFVRk1PMEZCUTBRc1J6czdhMEpCV1VSQkxGY3NNRUpCUVdNN1FVRkJRU3hwUWtGRFV5eExRVUZMU2l4TFFVUmtPMEZCUVVFc1VVRkRTa01zUTBGRVNTeFZRVU5LUVN4RFFVUkpPMEZCUVVFc1VVRkRSRU1zUzBGRVF5eFZRVU5FUVN4TFFVUkRPenRCUVVWYVFTeFZRVUZOUkN4RFFVRk9MRVZCUVZORUxFdEJRVlFzUTBGQlpVOHNWMEZCWml4SFFVRTJRaXhMUVVGTFVpeFJRVUZzUXp0QlFVTkJSeXhWUVVGTlJDeERRVUZPTEVWQlFWTlBMRXRCUVZRN1FVRkRSQ3hIT3p0clFrRkZSRU1zVFN4eFFrRkJVenRCUVVGQkxHdENRVU5qTEV0QlFVdFVMRXRCUkc1Q08wRkJRVUVzVVVGRFEwTXNRMEZFUkN4WFFVTkRRU3hEUVVSRU8wRkJRVUVzVVVGRFNVTXNTMEZFU2l4WFFVTkpRU3hMUVVSS096dEJRVVZRUVN4VlFVRk5SQ3hEUVVGT0xFVkJRVk5UTEVsQlFWUTdRVUZEUkN4SE96czdPenRyUWtGSFdTeFZRVUZEVWl4TFFVRkVMRVZCUVZGVExGVkJRVkk3UVVGQlFTeFRRVUYxUWl4SlFVRkpZaXhMUVVGS0xFTkJRVlVzUlVGQlJVa3NXVUZCUml4RlFVRlRVeXh6UWtGQlZDeEZRVUZXTEVOQlFYWkNPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSmphR0ZwYmk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGeWN5OW5hWFJvZFdJdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNWNibU5zWVhOeklFTm9ZV2x1SUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCMGFHbHpMbkJ5YjNCekxta2dQU0F3TzF4dUlDQWdJSFJvYVhNdWNHeGhlVU4xY25KbGJuUW9LVHRjYmlBZ2ZWeHVYRzRnSUhCc1lYbE9aWGgwSUQwZ0tDa2dQVDRnZTF4dUlDQWdJR052Ym5OMElIc2dhU3dnYjNKa1pYSWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnYVdZZ0tHa2dQQ0J2Y21SbGNpNXNaVzVuZEdnZ0xTQXhLU0I3WEc0Z0lDQWdJQ0IwYUdsekxuQnliM0J6TG1rckt6dGNiaUFnSUNBZ0lIUm9hWE11Y0d4aGVVTjFjbkpsYm5Rb0tUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnZEdocGN5NWpiMjF3YkdWMFpTZ3BPMXh1SUNBZ0lIMWNiaUFnZlR0Y2JseHVJQ0J3YkdGNVEzVnljbVZ1ZENncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdrc0lHOXlaR1Z5SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHOXlaR1Z5VzJsZExuQnliM0J6TGw5dmJrTnZiWEJzWlhSbElEMGdkR2hwY3k1d2JHRjVUbVY0ZER0Y2JpQWdJQ0J2Y21SbGNsdHBYUzV6ZEdGeWRDZ3BPMXh1SUNCOVhHNWNiaUFnYjI1VGRHOXdLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dhU3dnYjNKa1pYSWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnYjNKa1pYSmJhVjB1YzNSdmNDZ3BPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2h2Y21SbGNpd2diMjVEYjIxd2JHVjBaU2tnUFQ0Z2JtVjNJRU5vWVdsdUtIc2diM0prWlhJc0lHOXVRMjl0Y0d4bGRHVWdmU2s3WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL2NoYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90d2VlbiA9IHJlcXVpcmUoJy4vdHdlZW4nKTtcblxudmFyIF90d2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2Vlbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChkdXJhdGlvbiwgb25Db21wbGV0ZSkge1xuICByZXR1cm4gKDAsIF90d2VlbjIuZGVmYXVsdCkoeyBkdXJhdGlvbjogZHVyYXRpb24sIG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyUmxiR0Y1TG1weklsMHNJbTVoYldWeklqcGJJbVIxY21GMGFXOXVJaXdpYjI1RGIyMXdiR1YwWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3T3pzN2EwSkJSV1VzVlVGQlEwRXNVVUZCUkN4RlFVRlhReXhWUVVGWU8wRkJRVUVzVTBGQk1FSXNjVUpCUVUwc1JVRkJSVVFzYTBKQlFVWXNSVUZCV1VNc2MwSkJRVm9zUlVGQlRpeERRVUV4UWp0QlFVRkJMRU1pTENKbWFXeGxJam9pWkdWc1lYa3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk12WjJsMGFIVmlMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IwZDJWbGJpQm1jbTl0SUNjdUwzUjNaV1Z1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHUjFjbUYwYVc5dUxDQnZia052YlhCc1pYUmxLU0E5UGlCMGQyVmxiaWg3SUdSMWNtRjBhVzl1TENCdmJrTnZiWEJzWlhSbElIMHBPMXh1SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjdGlvbnMvZGVsYXkuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAvLyBDb2xvciBwcm9wc1xuICBjb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJhY2tncm91bmRDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIG91dGxpbmVDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGZpbGw6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzdHJva2U6IF92YWx1ZVR5cGVzLmNvbG9yLFxuXG4gIC8vIEJvcmRlciBwcm9wc1xuICBib3JkZXJDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlclRvcENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyUmlnaHRDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlckJvdHRvbUNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyTGVmdENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyUmFkaXVzOiBfdmFsdWVUeXBlcy5weCxcblxuICAvLyBQb3NpdGlvbmluZ1xuICB3aWR0aDogX3ZhbHVlVHlwZXMucHgsXG4gIGhlaWdodDogX3ZhbHVlVHlwZXMucHgsXG4gIHRvcDogX3ZhbHVlVHlwZXMucHgsXG4gIGxlZnQ6IF92YWx1ZVR5cGVzLnB4LFxuICBib3R0b206IF92YWx1ZVR5cGVzLnB4LFxuICByaWdodDogX3ZhbHVlVHlwZXMucHgsXG5cbiAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgcm90YXRlOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICByb3RhdGVYOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICByb3RhdGVZOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICByb3RhdGVaOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICBzY2FsZTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWDogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWjogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNrZXdYOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICBza2V3WTogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgZGlzdGFuY2U6IF92YWx1ZVR5cGVzLnB4LFxuICB0cmFuc2xhdGVYOiBfdmFsdWVUeXBlcy5weCxcbiAgdHJhbnNsYXRlWTogX3ZhbHVlVHlwZXMucHgsXG4gIHRyYW5zbGF0ZVo6IF92YWx1ZVR5cGVzLnB4LFxuICBwZXJzcGVjdGl2ZTogX3ZhbHVlVHlwZXMucHgsXG4gIG9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNaaGJIVmxMWFI1Y0dWekxtcHpJbDBzSW01aGJXVnpJanBiSW1OdmJHOXlJaXdpWW1GamEyZHliM1Z1WkVOdmJHOXlJaXdpYjNWMGJHbHVaVU52Ykc5eUlpd2labWxzYkNJc0luTjBjbTlyWlNJc0ltSnZjbVJsY2tOdmJHOXlJaXdpWW05eVpHVnlWRzl3UTI5c2IzSWlMQ0ppYjNKa1pYSlNhV2RvZEVOdmJHOXlJaXdpWW05eVpHVnlRbTkwZEc5dFEyOXNiM0lpTENKaWIzSmtaWEpNWldaMFEyOXNiM0lpTENKaWIzSmtaWEpTWVdScGRYTWlMQ0ozYVdSMGFDSXNJbWhsYVdkb2RDSXNJblJ2Y0NJc0lteGxablFpTENKaWIzUjBiMjBpTENKeWFXZG9kQ0lzSW5KdmRHRjBaU0lzSW5KdmRHRjBaVmdpTENKeWIzUmhkR1ZaSWl3aWNtOTBZWFJsV2lJc0luTmpZV3hsSWl3aWMyTmhiR1ZZSWl3aWMyTmhiR1ZaSWl3aWMyTmhiR1ZhSWl3aWMydGxkMWdpTENKemEyVjNXU0lzSW1ScGMzUmhibU5sSWl3aWRISmhibk5zWVhSbFdDSXNJblJ5WVc1emJHRjBaVmtpTENKMGNtRnVjMnhoZEdWYUlpd2ljR1Z5YzNCbFkzUnBkbVVpTENKdmNHRmphWFI1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPMnRDUVVObE8wRkJRMkk3UVVGRFFVRXNNRUpCUm1FN1FVRkhZa01zYjBOQlNHRTdRVUZKWWtNc2FVTkJTbUU3UVVGTFlrTXNlVUpCVEdFN1FVRk5Za01zTWtKQlRtRTdPMEZCVVdJN1FVRkRRVU1zWjBOQlZHRTdRVUZWWWtNc2JVTkJWbUU3UVVGWFlrTXNjVU5CV0dFN1FVRlpZa01zYzBOQldtRTdRVUZoWWtNc2IwTkJZbUU3UVVGallrTXNPRUpCWkdFN08wRkJaMEppTzBGQlEwRkRMSFZDUVdwQ1lUdEJRV3RDWWtNc2QwSkJiRUpoTzBGQmJVSmlReXh4UWtGdVFtRTdRVUZ2UW1KRExITkNRWEJDWVR0QlFYRkNZa01zZDBKQmNrSmhPMEZCYzBKaVF5eDFRa0YwUW1FN08wRkJkMEppTzBGQlEwRkRMRFpDUVhwQ1lUdEJRVEJDWWtNc09FSkJNVUpoTzBGQk1rSmlReXc0UWtFelFtRTdRVUUwUW1KRExEaENRVFZDWVR0QlFUWkNZa01zTUVKQk4wSmhPMEZCT0VKaVF5d3lRa0U1UW1FN1FVRXJRbUpETERKQ1FTOUNZVHRCUVdkRFlrTXNNa0pCYUVOaE8wRkJhVU5pUXl3MFFrRnFRMkU3UVVGclEySkRMRFJDUVd4RFlUdEJRVzFEWWtNc01FSkJia05oTzBGQmIwTmlReXcwUWtGd1EyRTdRVUZ4UTJKRExEUkNRWEpEWVR0QlFYTkRZa01zTkVKQmRFTmhPMEZCZFVOaVF5dzJRa0YyUTJFN1FVRjNRMkpETzBGQmVFTmhMRU1pTENKbWFXeGxJam9pZG1Gc2RXVXRkSGx3WlhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGNuTXZaMmwwYUhWaUwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR0ZzY0doaExDQmpiMnh2Y2l3Z1pHVm5jbVZsY3l3Z2MyTmhiR1VzSUhCNElIMGdabkp2YlNBbkxpNHZMaTR2YVc1akwzWmhiSFZsTFhSNWNHVnpKenNnWEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDOHZJRU52Ykc5eUlIQnliM0J6WEc0Z0lHTnZiRzl5T2lCamIyeHZjaXhjYmlBZ1ltRmphMmR5YjNWdVpFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ2IzVjBiR2x1WlVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnWm1sc2JEb2dZMjlzYjNJc1hHNGdJSE4wY205clpUb2dZMjlzYjNJc1hHNWNiaUFnTHk4Z1FtOXlaR1Z5SUhCeWIzQnpYRzRnSUdKdmNtUmxja052Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdZbTl5WkdWeVZHOXdRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQmliM0prWlhKU2FXZG9kRU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdZbTl5WkdWeVFtOTBkRzl0UTI5c2IzSTZJR052Ykc5eUxGeHVJQ0JpYjNKa1pYSk1aV1owUTI5c2IzSTZJR052Ykc5eUxGeHVJQ0JpYjNKa1pYSlNZV1JwZFhNNklIQjRMRnh1WEc0Z0lDOHZJRkJ2YzJsMGFXOXVhVzVuWEc0Z0lIZHBaSFJvT2lCd2VDeGNiaUFnYUdWcFoyaDBPaUJ3ZUN3Z0lGeHVJQ0IwYjNBNklIQjRMRnh1SUNCc1pXWjBPaUJ3ZUN4Y2JpQWdZbTkwZEc5dE9pQndlQ3hjYmlBZ2NtbG5hSFE2SUhCNExGeHVYRzRnSUM4dklGUnlZVzV6Wm05eWJTQndjbTl3WlhKMGFXVnpYRzRnSUhKdmRHRjBaVG9nWkdWbmNtVmxjeXhjYmlBZ2NtOTBZWFJsV0RvZ1pHVm5jbVZsY3l4Y2JpQWdjbTkwWVhSbFdUb2daR1ZuY21WbGN5eGNiaUFnY205MFlYUmxXam9nWkdWbmNtVmxjeXhjYmlBZ2MyTmhiR1U2SUhOallXeGxMRnh1SUNCelkyRnNaVmc2SUhOallXeGxMRnh1SUNCelkyRnNaVms2SUhOallXeGxMRnh1SUNCelkyRnNaVm82SUhOallXeGxMRnh1SUNCemEyVjNXRG9nWkdWbmNtVmxjeXhjYmlBZ2MydGxkMWs2SUdSbFozSmxaWE1zWEc0Z0lHUnBjM1JoYm1ObE9pQndlQ3hjYmlBZ2RISmhibk5zWVhSbFdEb2djSGdzWEc0Z0lIUnlZVzV6YkdGMFpWazZJSEI0TEZ4dUlDQjBjbUZ1YzJ4aGRHVmFPaUJ3ZUN4Y2JpQWdjR1Z5YzNCbFkzUnBkbVU2SUhCNExGeHVJQ0J2Y0dGamFYUjVPaUJoYkhCb1lWeHVmVHRjYmlKZGZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgY2FtZWxDYWNoZSA9IHt9O1xudmFyIGRhc2hDYWNoZSA9IHt9O1xudmFyIHByZWZpeGVzID0gWydXZWJraXQnLCAnTW96JywgJ08nLCAnbXMnLCAnJ107XG52YXIgbnVtUHJlZml4ZXMgPSBwcmVmaXhlcy5sZW5ndGg7XG52YXIgdGVzdEVsZW1lbnQgPSB2b2lkIDA7XG5cbi8qXG4gIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgXG4gIEBwYXJhbSBbc3RyaW5nXTogU3R5bGUgcHJvcGVydHlcbiAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG52YXIgdGVzdFByZWZpeCA9IGZ1bmN0aW9uIHRlc3RQcmVmaXgoa2V5KSB7XG4gIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIHZhciBub1ByZWZpeCA9IHByZWZpeCA9PT0gJyc7XG4gICAgdmFyIHByZWZpeGVkUHJvcGVydHlOYW1lID0gbm9QcmVmaXggPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICBpZiAocHJlZml4ZWRQcm9wZXJ0eU5hbWUgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgIGNhbWVsQ2FjaGVba2V5XSA9IHByZWZpeGVkUHJvcGVydHlOYW1lO1xuICAgICAgZGFzaENhY2hlW2tleV0gPSAnJyArIChub1ByZWZpeCA/ICcnIDogJy0nKSArICgwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKHByZWZpeGVkUHJvcGVydHlOYW1lKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChrZXksIGFzRGFzaENhc2UpIHtcbiAgdmFyIGNhY2hlID0gYXNEYXNoQ2FzZSA/IGRhc2hDYWNoZSA6IGNhbWVsQ2FjaGU7XG5cbiAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgdGVzdFByZWZpeChrZXkpO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNCeVpXWnBlR1Z5TG1weklsMHNJbTVoYldWeklqcGJJbU5oYldWc1EyRmphR1VpTENKa1lYTm9RMkZqYUdVaUxDSndjbVZtYVhobGN5SXNJbTUxYlZCeVpXWnBlR1Z6SWl3aWJHVnVaM1JvSWl3aWRHVnpkRVZzWlcxbGJuUWlMQ0owWlhOMFVISmxabWw0SWl3aWEyVjVJaXdpWkc5amRXMWxiblFpTENKamNtVmhkR1ZGYkdWdFpXNTBJaXdpYVNJc0luQnlaV1pwZUNJc0ltNXZVSEpsWm1sNElpd2ljSEpsWm1sNFpXUlFjbTl3WlhKMGVVNWhiV1VpTENKamFHRnlRWFFpTENKMGIxVndjR1Z5UTJGelpTSXNJbk5zYVdObElpd2ljM1I1YkdVaUxDSmhjMFJoYzJoRFlYTmxJaXdpWTJGamFHVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN1FVRkZRU3hKUVVGTlFTeGhRVUZoTEVWQlFXNUNPMEZCUTBFc1NVRkJUVU1zV1VGQldTeEZRVUZzUWp0QlFVTkJMRWxCUVUxRExGZEJRVmNzUTBGQlF5eFJRVUZFTEVWQlFWVXNTMEZCVml4RlFVRm5RaXhIUVVGb1FpeEZRVUZ2UWl4SlFVRndRaXhGUVVFd1FpeEZRVUV4UWl4RFFVRnFRanRCUVVOQkxFbEJRVTFETEdOQlFXTkVMRk5CUVZORkxFMUJRVGRDTzBGQlEwRXNTVUZCU1VNc2IwSkJRVW83TzBGQlJVRTdPenM3T3p0QlFVMUJMRWxCUVUxRExHRkJRV0VzVTBGQllrRXNWVUZCWVN4RFFVRkRReXhIUVVGRUxFVkJRVk03UVVGRE1VSkdMR2RDUVVGalFTeGxRVUZsUnl4VFFVRlRReXhoUVVGVUxFTkJRWFZDTEV0QlFYWkNMRU5CUVRkQ096dEJRVVZCTEU5QlFVc3NTVUZCU1VNc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpVQ3hYUVVGd1FpeEZRVUZwUTA4c1IwRkJha01zUlVGQmMwTTdRVUZEY0VNc1VVRkJUVU1zVTBGQlUxUXNVMEZCVTFFc1EwRkJWQ3hEUVVGbU8wRkJRMEVzVVVGQlRVVXNWMEZCV1VRc1YwRkJWeXhGUVVFM1FqdEJRVU5CTEZGQlFVMUZMSFZDUVVGMVFrUXNWMEZCVjB3c1IwRkJXQ3hIUVVGcFFra3NVMEZCVTBvc1NVRkJTVThzVFVGQlNpeERRVUZYTEVOQlFWZ3NSVUZCWTBNc1YwRkJaQ3hGUVVGVUxFZEJRWFZEVWl4SlFVRkpVeXhMUVVGS0xFTkJRVlVzUTBGQlZpeERRVUZ5UmpzN1FVRkZRU3hSUVVGSlNDeDNRa0ZCZDBKU0xGbEJRVmxaTEV0QlFYaERMRVZCUVN0RE8wRkJRemREYWtJc2FVSkJRVmRQTEVkQlFWZ3NTVUZCYTBKTkxHOUNRVUZzUWp0QlFVTkJXaXhuUWtGQlZVMHNSMEZCVml4VlFVRnhRa3NzVjBGQlZ5eEZRVUZZTEVkQlFXZENMRWRCUVhKRExFbEJRVFJETEhkQ1FVRlpReXh2UWtGQldpeERRVUUxUXp0QlFVTkVPMEZCUTBZN1FVRkRSaXhEUVdKRU96dHJRa0ZsWlN4VlFVRkRUaXhIUVVGRUxFVkJRVTFYTEZWQlFVNHNSVUZCY1VJN1FVRkRiRU1zVFVGQlRVTXNVVUZCVVVRc1lVRkJZV3BDTEZOQlFXSXNSMEZCZVVKRUxGVkJRWFpET3p0QlFVVkJMRTFCUVVrc1EwRkJRMjFDTEUxQlFVMWFMRWRCUVU0c1EwRkJUQ3hGUVVGcFFqdEJRVU5tUkN4bFFVRlhReXhIUVVGWU8wRkJRMFE3TzBGQlJVUXNVMEZCVDFrc1RVRkJUVm9zUjBGQlRpeERRVUZRTzBGQlEwUXNReUlzSW1acGJHVWlPaUp3Y21WbWFYaGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0Z5Y3k5bmFYUm9kV0l2Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kyRnRaV3hVYjBSaGMyZ2dmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVqYjI1emRDQmpZVzFsYkVOaFkyaGxJRDBnZTMwN1hHNWpiMjV6ZENCa1lYTm9RMkZqYUdVZ1BTQjdmVHRjYm1OdmJuTjBJSEJ5WldacGVHVnpJRDBnV3lkWFpXSnJhWFFuTENkTmIzb25MQ2RQSnl3bmJYTW5MQ0FuSjEwN1hHNWpiMjV6ZENCdWRXMVFjbVZtYVhobGN5QTlJSEJ5WldacGVHVnpMbXhsYm1kMGFEdGNibXhsZENCMFpYTjBSV3hsYldWdWREdGNibHh1THlwY2JpQWdWR1Z6ZENCemRIbHNaU0J3Y205d1pYSjBlU0JtYjNJZ2NISmxabWw0WldRZ2RtVnljMmx2Ymx4dUlDQmNiaUFnUUhCaGNtRnRJRnR6ZEhKcGJtZGRPaUJUZEhsc1pTQndjbTl3WlhKMGVWeHVJQ0JBY21WMGRYSnVJRnR6ZEhKcGJtZGRPaUJEWVdOb1pXUWdjSEp2Y0dWeWRIa2dibUZ0WlZ4dUtpOWNibU52Ym5OMElIUmxjM1JRY21WbWFYZ2dQU0FvYTJWNUtTQTlQaUI3WEc0Z0lIUmxjM1JGYkdWdFpXNTBJRDBnZEdWemRFVnNaVzFsYm5RZ2ZId2daRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblpHbDJKeWs3WEc1Y2JpQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxUWNtVm1hWGhsY3pzZ2FTc3JLU0I3WEc0Z0lDQWdZMjl1YzNRZ2NISmxabWw0SUQwZ2NISmxabWw0WlhOYmFWMDdYRzRnSUNBZ1kyOXVjM1FnYm05UWNtVm1hWGdnUFNBb2NISmxabWw0SUQwOVBTQW5KeWs3WEc0Z0lDQWdZMjl1YzNRZ2NISmxabWw0WldSUWNtOXdaWEowZVU1aGJXVWdQU0J1YjFCeVpXWnBlQ0EvSUd0bGVTQTZJSEJ5WldacGVDQXJJR3RsZVM1amFHRnlRWFFvTUNrdWRHOVZjSEJsY2tOaGMyVW9LU0FySUd0bGVTNXpiR2xqWlNneEtUdGNibHh1SUNBZ0lHbG1JQ2h3Y21WbWFYaGxaRkJ5YjNCbGNuUjVUbUZ0WlNCcGJpQjBaWE4wUld4bGJXVnVkQzV6ZEhsc1pTa2dlMXh1SUNBZ0lDQWdZMkZ0Wld4RFlXTm9aVnRyWlhsZElEMGdjSEpsWm1sNFpXUlFjbTl3WlhKMGVVNWhiV1U3WEc0Z0lDQWdJQ0JrWVhOb1EyRmphR1ZiYTJWNVhTQTlJR0FrZXlodWIxQnlaV1pwZUNBL0lDY25JRG9nSnkwbktYMGtlMk5oYldWc1ZHOUVZWE5vS0hCeVpXWnBlR1ZrVUhKdmNHVnlkSGxPWVcxbEtYMWdPMXh1SUNBZ0lIMWNiaUFnZlZ4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR3RsZVN3Z1lYTkVZWE5vUTJGelpTa2dQVDRnZTF4dUlDQmpiMjV6ZENCallXTm9aU0E5SUdGelJHRnphRU5oYzJVZ1B5QmtZWE5vUTJGamFHVWdPaUJqWVcxbGJFTmhZMmhsTzF4dVhHNGdJR2xtSUNnaFkyRmphR1ZiYTJWNVhTa2dlMXh1SUNBZ0lIUmxjM1JRY21WbWFYZ29hMlY1S1R0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCallXTm9aVnRyWlhsZE8xeHVmVHRjYmlKZGZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yZW5kZXJlcnMvY3NzL3ByZWZpeGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG52YXIgaGFzUkFGID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRydWUgOiBmYWxzZTtcblxudmFyIG9uTmV4dEZyYW1lID0gdm9pZCAwO1xuXG5pZiAoaGFzUkFGKSB7XG4gIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gb25OZXh0RnJhbWUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gIH07XG59IGVsc2Uge1xuICAvKlxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgIFxuICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcbiAgICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgIFxuICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgIFxuICAgIE1JVCBsaWNlbnNlXG4gICovXG4gIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgb25OZXh0RnJhbWUgPSBmdW5jdGlvbiBvbk5leHRGcmFtZShjYWxsYmFjaykge1xuICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYuNyAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGxhc3RUaW1lKTtcbiAgICB9LCB0aW1lVG9DYWxsKTtcbiAgfTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gb25OZXh0RnJhbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bWNtRnRaWE41Ym1NdmIyNHRibVY0ZEMxbWNtRnRaUzVxY3lKZExDSnVZVzFsY3lJNld5Sm9ZWE5TUVVZaUxDSjNhVzVrYjNjaUxDSnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VpTENKdmJrNWxlSFJHY21GdFpTSXNJbU5oYkd4aVlXTnJJaXdpYkdGemRGUnBiV1VpTENKamRYSnlaVzUwVkdsdFpTSXNJa1JoZEdVaUxDSm5aWFJVYVcxbElpd2lkR2x0WlZSdlEyRnNiQ0lzSWsxaGRHZ2lMQ0p0WVhnaUxDSnpaWFJVYVcxbGIzVjBJbDBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVRzN08wRkJSMEVzU1VGQlRVRXNVMEZCVlN4UFFVRlBReXhOUVVGUUxFdEJRV3RDTEZkQlFXeENMRWxCUVdsRFFTeFBRVUZQUXl4eFFrRkJla01zUjBGQmEwVXNTVUZCYkVVc1IwRkJlVVVzUzBGQmVFWTdPMEZCUlVFc1NVRkJTVU1zYjBKQlFVbzdPMEZCUlVFc1NVRkJTVWdzVFVGQlNpeEZRVUZaTzBGQlExWkhMR2RDUVVGakxIRkNRVUZEUXl4UlFVRkVPMEZCUVVFc1YwRkJZMGdzVDBGQlQwTXNjVUpCUVZBc1EwRkJOa0pGTEZGQlFUZENMRU5CUVdRN1FVRkJRU3hIUVVGa08wRkJSVVFzUTBGSVJDeE5RVWRQTzBGQlEwdzdPenM3T3pzN096czdPenM3UVVGalFTeE5RVUZKUXl4WFFVRlhMRU5CUVdZN08wRkJSVUZHTEdkQ1FVRmpMSEZDUVVGRFF5eFJRVUZFTEVWQlFXTTdRVUZETVVJc1VVRkJUVVVzWTBGQll5eEpRVUZKUXl4SlFVRktMRWRCUVZkRExFOUJRVmdzUlVGQmNFSTdRVUZEUVN4UlFVRk5ReXhoUVVGaFF5eExRVUZMUXl4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxGRkJRVkZNTEdOQlFXTkVMRkZCUVhSQ0xFTkJRVm9zUTBGQmJrSTdPMEZCUlVGQkxHVkJRVmRETEdOQlFXTkhMRlZCUVhwQ096dEJRVVZCUnl4bFFVRlhPMEZCUVVFc1lVRkJUVklzVTBGQlUwTXNVVUZCVkN4RFFVRk9PMEZCUVVFc1MwRkJXQ3hGUVVGeFEwa3NWVUZCY2tNN1FVRkRSQ3hIUVZCRU8wRkJVVVE3TzJ0Q1FVVmpUaXhYSWl3aVptbHNaU0k2SW05dUxXNWxlSFF0Wm5KaGJXVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk12WjJsMGFIVmlMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJRVJsZEdWamRDQmhibVFnYkc5aFpDQmhiaUJoY0hCeWIzQnlhV0YwWlNCamJHOWpheUJ6WlhSMGFXNW5JR1p2Y2lCMGFHVWdaVzUyYVhKdmJtMWxiblJjYmlvdlhHNWpiMjV6ZENCb1lYTlNRVVlnUFNBb2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnZDJsdVpHOTNMbkpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNrZ1B5QjBjblZsSURvZ1ptRnNjMlU3WEc1Y2JteGxkQ0J2Yms1bGVIUkdjbUZ0WlR0Y2JseHVhV1lnS0doaGMxSkJSaWtnZTF4dUlDQnZiazVsZUhSR2NtRnRaU0E5SUNoallXeHNZbUZqYXlrZ1BUNGdkMmx1Wkc5M0xuSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU2hqWVd4c1ltRmpheWs3WEc1Y2JuMGdaV3h6WlNCN1hHNGdJQzhxWEc0Z0lDQWdjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsSUhCdmJIbG1hV3hzWEc0Z0lDQWdYRzRnSUNBZ1JtOXlJRWxGT0M4NUlFWnNhVzV6ZEc5dVpYTWdZVzVrSUc1dmJpMWljbTkzYzJWeUlHVnVkbWx5YjI1dFpXNTBjMXh1WEc0Z0lDQWdWR0ZyWlc0Z1puSnZiU0JRWVhWc0lFbHlhWE5vTGlCWFpTZDJaU0J6ZEhKcGNIQmxaQ0J2ZFhRZ1kyRnVZMlZzUVc1cGJXRjBhVzl1Um5KaGJXVWdZMmhsWTJ0eklHSmxZMkYxYzJVZ2QyVWdaRzl1SjNRZ1ptOTRJSGRwZEdnZ2RHaGhkRnh1SUNBZ0lGeHVJQ0FnSUdoMGRIQTZMeTl3WVhWc2FYSnBjMmd1WTI5dEx6SXdNVEV2Y21WeGRXVnpkR0Z1YVcxaGRHbHZibVp5WVcxbExXWnZjaTF6YldGeWRDMWhibWx0WVhScGJtY3ZYRzRnSUNBZ2FIUjBjRG92TDIxNUxtOXdaWEpoTG1OdmJTOWxiVzlzYkdWeUwySnNiMmN2TWpBeE1TOHhNaTh5TUM5eVpYRjFaWE4wWVc1cGJXRjBhVzl1Wm5KaGJXVXRabTl5TFhOdFlYSjBMV1Z5TFdGdWFXMWhkR2x1WjF4dUlDQWdJQ0JjYmlBZ0lDQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VnY0c5c2VXWnBiR3dnWW5rZ1JYSnBheUJOdzdac2JHVnlMaUJtYVhobGN5Qm1jbTl0SUZCaGRXd2dTWEpwYzJnZ1lXNWtJRlJwYm04Z1dtbHFaR1ZzWEc0Z0lDQWdJRnh1SUNBZ0lFMUpWQ0JzYVdObGJuTmxYRzRnSUNvdlhHNGdJR3hsZENCc1lYTjBWR2x0WlNBOUlEQTdYRzVjYmlBZ2IyNU9aWGgwUm5KaGJXVWdQU0FvWTJGc2JHSmhZMnNwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0JqZFhKeVpXNTBWR2x0WlNBOUlHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BPMXh1SUNBZ0lHTnZibk4wSUhScGJXVlViME5oYkd3Z1BTQk5ZWFJvTG0xaGVDZ3dMQ0F4Tmk0M0lDMGdLR04xY25KbGJuUlVhVzFsSUMwZ2JHRnpkRlJwYldVcEtUdGNibHh1SUNBZ0lHeGhjM1JVYVcxbElEMGdZM1Z5Y21WdWRGUnBiV1VnS3lCMGFXMWxWRzlEWVd4c08xeHVYRzRnSUNBZ2MyVjBWR2x0Wlc5MWRDZ29LU0E5UGlCallXeHNZbUZqYXloc1lYTjBWR2x0WlNrc0lIUnBiV1ZVYjBOaGJHd3BPMXh1SUNCOU8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0J2Yms1bGVIUkdjbUZ0WlRzaVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVJlbmRlclN0ZXA7XG5mdW5jdGlvbiBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCkge1xuICAvKipcbiAgICogV2UgdXNlIHR3byBhcnJheXMsIG9uZSBmb3IgdGhpcyBmcmFtZSBhbmQgb25lIHRvIHF1ZXVlIGZvciB0aGVcbiAgICogbmV4dCBmcmFtZSwgcmV1c2luZyBlYWNoIHRvIGF2b2lkIEdDLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICB2YXIgZnVuY3Rpb25zVG9SdW4gPSBbXTtcbiAgdmFyIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICBzY2hlZHVsZTogZnVuY3Rpb24gc2NoZWR1bGUoY2FsbGJhY2spIHtcbiAgICAgIHN0YXJ0UmVuZGVyTG9vcCgpO1xuICAgICAgLy8gSWYgdGhpcyBjYWxsYmFjayBpc24ndCBhbHJlYWR5IHNjaGVkdWxlZCB0byBydW4gbmV4dCBmcmFtZVxuICAgICAgaWYgKGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spID09PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2FuY2VsOiBmdW5jdGlvbiBjYW5jZWwoY2FsbGJhY2spIHtcbiAgICAgIHZhciBpbmRleE9mQ2FsbGJhY2sgPSBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgIGlmIChpbmRleE9mQ2FsbGJhY2sgIT09IC0xKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLnNwbGljZShpbmRleE9mQ2FsbGJhY2ssIDEpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBwcm9jZXNzOiBmdW5jdGlvbiBwcm9jZXNzKCkge1xuXG4gICAgICAvLyBDbGVhciBuZXh0IGZyYW1lIGxpc3RcbiAgICAgIHZhciBfcmVmID0gW2Z1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLCBmdW5jdGlvbnNUb1J1bl07XG4gICAgICAvLyBTd2FwIHRoaXMgZnJhbWUgYW5kIG5leHQgZnJhbWUgYXJyYXlzIHRvIGF2b2lkIEdDXG5cbiAgICAgIGZ1bmN0aW9uc1RvUnVuID0gX3JlZlswXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gX3JlZlsxXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIEV4ZWN1dGUgYWxsIG9mIHRoaXMgZnJhbWUncyBmdW5jdGlvbnNcbiAgICAgIHZhciBudW1UaGlzRnJhbWUgPSBmdW5jdGlvbnNUb1J1bi5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRoaXNGcmFtZTsgaSsrKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuW2ldKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZZM0psWVhSbExYSmxibVJsY2kxemRHVndMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTnlaV0YwWlZKbGJtUmxjbE4wWlhBaUxDSnpkR0Z5ZEZKbGJtUmxja3h2YjNBaUxDSm1kVzVqZEdsdmJuTlViMUoxYmlJc0ltWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsSWl3aWMyTm9aV1IxYkdVaUxDSmpZV3hzWW1GamF5SXNJbWx1WkdWNFQyWWlMQ0p3ZFhOb0lpd2lZMkZ1WTJWc0lpd2lhVzVrWlhoUFprTmhiR3hpWVdOcklpd2ljM0JzYVdObElpd2ljSEp2WTJWemN5SXNJbXhsYm1kMGFDSXNJbTUxYlZSb2FYTkdjbUZ0WlNJc0lta2lYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZCZDBKQkxHZENPMEZCUVZRc1UwRkJVMEVzWjBKQlFWUXNRMEZCTUVKRExHVkJRVEZDTEVWQlFUSkRPMEZCUTNoRU96czdPenRCUVV0QkxFMUJRVWxETEdsQ1FVRnBRaXhGUVVGeVFqdEJRVU5CTEUxQlFVbERMREJDUVVFd1FpeEZRVUU1UWpzN1FVRkZRU3hUUVVGUE8wRkJRMHhETEdOQlFWVXNhMEpCUVVORExGRkJRVVFzUlVGQll6dEJRVU4wUWtvN1FVRkRRVHRCUVVOQkxGVkJRVWxGTEhkQ1FVRjNRa2NzVDBGQmVFSXNRMEZCWjBORUxGRkJRV2hETEUxQlFUaERMRU5CUVVNc1EwRkJia1FzUlVGQmMwUTdRVUZEY0VSR0xHZERRVUYzUWtrc1NVRkJlRUlzUTBGQk5rSkdMRkZCUVRkQ08wRkJRMFE3UVVGRFJpeExRVkJKT3p0QlFWTk1SeXhaUVVGUkxHZENRVUZEU0N4UlFVRkVMRVZCUVdNN1FVRkRjRUlzVlVGQlRVa3NhMEpCUVd0Q1RpeDNRa0ZCZDBKSExFOUJRWGhDTEVOQlFXZERSQ3hSUVVGb1F5eERRVUY0UWp0QlFVTkJMRlZCUVVsSkxHOUNRVUZ2UWl4RFFVRkRMRU5CUVhwQ0xFVkJRVFJDTzBGQlF6RkNUaXhuUTBGQmQwSlBMRTFCUVhoQ0xFTkJRU3RDUkN4bFFVRXZRaXhGUVVGblJDeERRVUZvUkR0QlFVTkVPMEZCUTBZc1MwRmtTVHM3UVVGblFreEZMR0ZCUVZNc2JVSkJRVTA3TzBGQlNXSTdRVUZLWVN4cFFrRkZLMElzUTBGQlExSXNkVUpCUVVRc1JVRkJNRUpFTEdOQlFURkNMRU5CUmk5Q08wRkJRMkk3TzBGQlEwTkJMRzlDUVVaWk8wRkJSVWxETERaQ1FVWktPMEZCUzJKQkxEaENRVUYzUWxNc1RVRkJlRUlzUjBGQmFVTXNRMEZCYWtNN08wRkJSVUU3UVVGRFFTeFZRVUZOUXl4bFFVRmxXQ3hsUVVGbFZTeE5RVUZ3UXp0QlFVTkJMRmRCUVVzc1NVRkJTVVVzU1VGQlNTeERRVUZpTEVWQlFXZENRU3hKUVVGSlJDeFpRVUZ3UWl4RlFVRnJRME1zUjBGQmJFTXNSVUZCZFVNN1FVRkRja05hTEhWQ1FVRmxXU3hEUVVGbU8wRkJRMFE3UVVGRFJqdEJRVFZDU1N4SFFVRlFPMEZCT0VKRUlpd2labWxzWlNJNkltTnlaV0YwWlMxeVpXNWtaWEl0YzNSbGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRnljeTluYVhSb2RXSXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdZM0psWVhSbFVtVnVaR1Z5VTNSbGNDaHpkR0Z5ZEZKbGJtUmxja3h2YjNBcElIdGNiaUFnTHlvcVhHNGdJQ0FxSUZkbElIVnpaU0IwZDI4Z1lYSnlZWGx6TENCdmJtVWdabTl5SUhSb2FYTWdabkpoYldVZ1lXNWtJRzl1WlNCMGJ5QnhkV1YxWlNCbWIzSWdkR2hsWEc0Z0lDQXFJRzVsZUhRZ1puSmhiV1VzSUhKbGRYTnBibWNnWldGamFDQjBieUJoZG05cFpDQkhReTVjYmlBZ0lDb2dRSFI1Y0dVZ2UwRnljbUY1ZlZ4dUlDQWdLaTljYmlBZ2JHVjBJR1oxYm1OMGFXOXVjMVJ2VW5WdUlEMGdXMTA3WEc0Z0lHeGxkQ0JtZFc1amRHbHZibk5VYjFKMWJrNWxlSFJHY21GdFpTQTlJRnRkTzF4dVhHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2MyTm9aV1IxYkdVNklDaGpZV3hzWW1GamF5a2dQVDRnZTF4dUlDQWdJQ0FnYzNSaGNuUlNaVzVrWlhKTWIyOXdLQ2s3WEc0Z0lDQWdJQ0F2THlCSlppQjBhR2x6SUdOaGJHeGlZV05ySUdsemJpZDBJR0ZzY21WaFpIa2djMk5vWldSMWJHVmtJSFJ2SUhKMWJpQnVaWGgwSUdaeVlXMWxYRzRnSUNBZ0lDQnBaaUFvWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVXVhVzVrWlhoUFppaGpZV3hzWW1GamF5a2dQVDA5SUMweEtTQjdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbExuQjFjMmdvWTJGc2JHSmhZMnNwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JqWVc1alpXdzZJQ2hqWVd4c1ltRmpheWtnUFQ0Z2UxeHVJQ0FnSUNBZ1kyOXVjM1FnYVc1a1pYaFBaa05oYkd4aVlXTnJJRDBnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVXVhVzVrWlhoUFppaGpZV3hzWW1GamF5azdYRzRnSUNBZ0lDQnBaaUFvYVc1a1pYaFBaa05oYkd4aVlXTnJJQ0U5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZibk5VYjFKMWJrNWxlSFJHY21GdFpTNXpjR3hwWTJVb2FXNWtaWGhQWmtOaGJHeGlZV05yTENBeEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzRnSUNBZ2NISnZZMlZ6Y3pvZ0tDa2dQVDRnZTF4dUlDQWdJQ0FnTHk4Z1UzZGhjQ0IwYUdseklHWnlZVzFsSUdGdVpDQnVaWGgwSUdaeVlXMWxJR0Z5Y21GNWN5QjBieUJoZG05cFpDQkhRMXh1SUNBZ0lDQWdXMloxYm1OMGFXOXVjMVJ2VW5WdUxDQm1kVzVqZEdsdmJuTlViMUoxYms1bGVIUkdjbUZ0WlYwZ1BTQmJablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldVc0lHWjFibU4wYVc5dWMxUnZVblZ1WFR0Y2JseHVJQ0FnSUNBZ0x5OGdRMnhsWVhJZ2JtVjRkQ0JtY21GdFpTQnNhWE4wWEc0Z0lDQWdJQ0JtZFc1amRHbHZibk5VYjFKMWJrNWxlSFJHY21GdFpTNXNaVzVuZEdnZ1BTQXdPMXh1WEc0Z0lDQWdJQ0F2THlCRmVHVmpkWFJsSUdGc2JDQnZaaUIwYUdseklHWnlZVzFsSjNNZ1puVnVZM1JwYjI1elhHNGdJQ0FnSUNCamIyNXpkQ0J1ZFcxVWFHbHpSbkpoYldVZ1BTQm1kVzVqZEdsdmJuTlViMUoxYmk1c1pXNW5kR2c3WEc0Z0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJWUm9hWE5HY21GdFpUc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dWMxUnZVblZ1VzJsZEtDazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5TzF4dWZTSmRmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZnJhbWVzeW5jL2NyZWF0ZS1yZW5kZXItc3RlcC5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi4vaW5jL3ZhbHVlLXR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIGZyb20gPSBfcmVmLmZyb20sXG4gICAgICB0byA9IF9yZWYudG8sXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2Zyb20nLCAndG8nXSk7XG5cbiAgcmV0dXJuICgwLCBfdHdlZW4yLmRlZmF1bHQpKF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGZyb206IDAsXG4gICAgdG86IDEsXG4gICAgdHJhbnNmb3JtOiAoMCwgX3RyYW5zZm9ybWVycy5waXBlKSgoMCwgX3RyYW5zZm9ybWVycy5ibGVuZENvbG9yKShmcm9tLCB0byksIF92YWx1ZVR5cGVzLmNvbG9yLnRyYW5zZm9ybSlcbiAgfSkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk52Ykc5eUxYUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJJbVp5YjIwaUxDSjBieUlzSW5CeWIzQnpJaXdpZEhKaGJuTm1iM0p0SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenRCUVVOQk96czdPenM3YTBKQlJXVXNaMEpCUVRSQ08wRkJRVUVzVFVGQmVrSkJMRWxCUVhsQ0xGRkJRWHBDUVN4SlFVRjVRanRCUVVGQkxFMUJRVzVDUXl4RlFVRnRRaXhSUVVGdVFrRXNSVUZCYlVJN1FVRkJRU3hOUVVGYVF5eExRVUZaT3p0QlFVTjZReXhUUVVGUExHdERRVU5HUVN4TFFVUkZPMEZCUlV4R0xGVkJRVTBzUTBGR1JEdEJRVWRNUXl4UlFVRkpMRU5CU0VNN1FVRkpURVVzWlVGQlZ5eDNRa0ZCU3l3NFFrRkJWMGdzU1VGQldDeEZRVUZwUWtNc1JVRkJha0lzUTBGQlRDeEZRVUV5UWl4clFrRkJUVVVzVTBGQmFrTTdRVUZLVGl4TFFVRlFPMEZCVFVRc1F5SXNJbVpwYkdVaU9pSmpiMnh2Y2kxMGQyVmxiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0Z5Y3k5bmFYUm9kV0l2Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhSM1pXVnVJR1p5YjIwZ0p5NHZkSGRsWlc0bk8xeHVhVzF3YjNKMElIc2dZbXhsYm1SRGIyeHZjaXdnY0dsd1pTQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MGNtRnVjMlp2Y20xbGNuTW5PMXh1YVcxd2IzSjBJSHNnWTI5c2IzSWdmU0JtY205dElDY3VMaTlwYm1NdmRtRnNkV1V0ZEhsd1pYTW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvZXlCbWNtOXRMQ0IwYnl3Z0xpNHVjSEp2Y0hNZ2ZTa2dQVDRnZTF4dUlDQnlaWFIxY200Z2RIZGxaVzRvZTF4dUlDQWdJQzR1TG5CeWIzQnpMRnh1SUNBZ0lHWnliMjA2SURBc1hHNGdJQ0FnZEc4NklERXNYRzRnSUNBZ2RISmhibk5tYjNKdE9pQndhWEJsS0dKc1pXNWtRMjlzYjNJb1puSnZiU3dnZEc4cExDQmpiMnh2Y2k1MGNtRnVjMlp2Y20wcFhHNGdJSDBwTzF4dWZUdGNiaUpkZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjdGlvbnMvY29sb3ItdHdlZW4uanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJy4uL2luYy9lYXNpbmcnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ3Jvc3NGYWRlID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENyb3NzRmFkZSwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ3Jvc3NGYWRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDcm9zc0ZhZGUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDcm9zc0ZhZGUucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBkdXJhdGlvbiA9IF9wcm9wcy5kdXJhdGlvbixcbiAgICAgICAgZWFzZSA9IF9wcm9wcy5lYXNlLFxuICAgICAgICBmYWRlciA9IF9wcm9wcy5mYWRlcjtcblxuXG4gICAgdGhpcy5mYWRlciA9IGZhZGVyIHx8ICgwLCBfdHdlZW4yLmRlZmF1bHQpKHtcbiAgICAgIHRvOiAxLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZWFzZTogZWFzZVxuICAgIH0pLnN0YXJ0KCk7XG4gIH07XG5cbiAgQ3Jvc3NGYWRlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBmcm9tID0gX3Byb3BzMi5mcm9tLFxuICAgICAgICB0byA9IF9wcm9wczIudG87XG5cbiAgICB2YXIgYmFsYW5jZSA9IHRoaXMuZmFkZXIuZ2V0KCk7XG4gICAgdmFyIGxhdGVzdEZyb21WYWx1ZSA9IGZyb20uZ2V0KCk7XG4gICAgdmFyIGxhdGVzdFRvVmFsdWUgPSB0by5nZXQoKTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShsYXRlc3RGcm9tVmFsdWUsIGxhdGVzdFRvVmFsdWUsIGJhbGFuY2UpO1xuICB9O1xuXG4gIHJldHVybiBDcm9zc0ZhZGU7XG59KF8yLmRlZmF1bHQpO1xuXG5Dcm9zc0ZhZGUuZGVmYXVsdFByb3BzID0ge1xuICBlYXNlOiBfZWFzaW5nLmxpbmVhclxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ3Jvc3NGYWRlKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOeWIzTnpMV1poWkdVdWFuTWlYU3dpYm1GdFpYTWlPbHNpUTNKdmMzTkdZV1JsSWl3aWIyNVRkR0Z5ZENJc0luQnliM0J6SWl3aVpIVnlZWFJwYjI0aUxDSmxZWE5sSWl3aVptRmtaWElpTENKMGJ5SXNJbk4wWVhKMElpd2lkWEJrWVhSbElpd2labkp2YlNJc0ltSmhiR0Z1WTJVaUxDSm5aWFFpTENKc1lYUmxjM1JHY205dFZtRnNkV1VpTENKc1lYUmxjM1JVYjFaaGJIVmxJaXdpWkdWbVlYVnNkRkJ5YjNCeklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenRCUVVOQk96czdPenM3T3pzN08wbEJSVTFCTEZNN096czdPenM3T3p0elFrRkxTa01zVHl4elFrRkJWVHRCUVVGQkxHbENRVU13UWl4TFFVRkxReXhMUVVRdlFqdEJRVUZCTEZGQlEwRkRMRkZCUkVFc1ZVRkRRVUVzVVVGRVFUdEJRVUZCTEZGQlExVkRMRWxCUkZZc1ZVRkRWVUVzU1VGRVZqdEJRVUZCTEZGQlEyZENReXhMUVVSb1FpeFZRVU5uUWtFc1MwRkVhRUk3T3p0QlFVZFNMRk5CUVV0QkxFdEJRVXdzUjBGQllVRXNVMEZCVXl4eFFrRkJUVHRCUVVNeFFrTXNWVUZCU1N4RFFVUnpRanRCUVVVeFFrZ3NkMEpCUmpCQ08wRkJSekZDUXp0QlFVZ3dRaXhMUVVGT0xFVkJTVzVDUnl4TFFVcHRRaXhGUVVGMFFqdEJRVXRFTEVjN08zTkNRVVZFUXl4TkxIRkNRVUZUTzBGQlFVRXNhMEpCUTJNc1MwRkJTMDRzUzBGRWJrSTdRVUZCUVN4UlFVTkRUeXhKUVVSRUxGZEJRME5CTEVsQlJFUTdRVUZCUVN4UlFVTlBTQ3hGUVVSUUxGZEJRMDlCTEVWQlJGQTdPMEZCUlZBc1VVRkJUVWtzVlVGQlZTeExRVUZMVEN4TFFVRk1MRU5CUVZkTkxFZEJRVmdzUlVGQmFFSTdRVUZEUVN4UlFVRk5ReXhyUWtGQmEwSklMRXRCUVV0RkxFZEJRVXdzUlVGQmVFSTdRVUZEUVN4UlFVRk5SU3huUWtGQlowSlFMRWRCUVVkTExFZEJRVWdzUlVGQmRFSTdRVUZEUVN4WFFVRlBMR2REUVVGeFFrTXNaVUZCY2tJc1JVRkJjME5ETEdGQlFYUkRMRVZCUVhGRVNDeFBRVUZ5UkN4RFFVRlFPMEZCUTBRc1J6czdPenM3UVVGeVFrZFdMRk1zUTBGRFIyTXNXU3hIUVVGbE8wRkJRM0JDVmp0QlFVUnZRaXhET3p0clFrRjFRbFFzVlVGQlEwWXNTMEZCUkR0QlFVRkJMRk5CUVZjc1NVRkJTVVlzVTBGQlNpeERRVUZqUlN4TFFVRmtMRU5CUVZnN1FVRkJRU3hESWl3aVptbHNaU0k2SW1OeWIzTnpMV1poWkdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGNuTXZaMmwwYUhWaUwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk4bk8xeHVhVzF3YjNKMElIUjNaV1Z1SUdaeWIyMGdKeTR2ZEhkbFpXNG5PMXh1YVcxd2IzSjBJSHNnYkdsdVpXRnlJSDBnWm5KdmJTQW5MaTR2YVc1akwyVmhjMmx1WnljN1hHNXBiWEJ2Y25RZ2V5Qm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeUI5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVZMnhoYzNNZ1EzSnZjM05HWVdSbElHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0JsWVhObE9pQnNhVzVsWVhKY2JpQWdmVnh1WEc0Z0lHOXVVM1JoY25Rb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCa2RYSmhkR2x2Yml3Z1pXRnpaU3dnWm1Ga1pYSWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCMGFHbHpMbVpoWkdWeUlEMGdabUZrWlhJZ2ZId2dkSGRsWlc0b2UxeHVJQ0FnSUNBZ2RHODZJREVzWEc0Z0lDQWdJQ0JrZFhKaGRHbHZiaXhjYmlBZ0lDQWdJR1ZoYzJWY2JpQWdJQ0I5S1M1emRHRnlkQ2dwTzF4dUlDQjlYRzVjYmlBZ2RYQmtZWFJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWm5KdmJTd2dkRzhnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ1kyOXVjM1FnWW1Gc1lXNWpaU0E5SUhSb2FYTXVabUZrWlhJdVoyVjBLQ2s3WEc0Z0lDQWdZMjl1YzNRZ2JHRjBaWE4wUm5KdmJWWmhiSFZsSUQwZ1puSnZiUzVuWlhRb0tUdGNiaUFnSUNCamIyNXpkQ0JzWVhSbGMzUlViMVpoYkhWbElEMGdkRzh1WjJWMEtDazdYRzRnSUNBZ2NtVjBkWEp1SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektHeGhkR1Z6ZEVaeWIyMVdZV3gxWlN3Z2JHRjBaWE4wVkc5V1lXeDFaU3dnWW1Gc1lXNWpaU2s3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hCeWIzQnpLU0E5UGlCdVpYY2dRM0p2YzNOR1lXUmxLSEJ5YjNCektUdGNiaUpkZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGh5c2ljcyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQaHlzaWNzLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBQaHlzaWNzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaHlzaWNzKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUGh5c2ljcy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhdXRvU3RvcFNwZWVkID0gX3Byb3BzLmF1dG9TdG9wU3BlZWQsXG4gICAgICAgIGFjY2VsZXJhdGlvbiA9IF9wcm9wcy5hY2NlbGVyYXRpb24sXG4gICAgICAgIGZyaWN0aW9uID0gX3Byb3BzLmZyaWN0aW9uLFxuICAgICAgICB2ZWxvY2l0eSA9IF9wcm9wcy52ZWxvY2l0eSxcbiAgICAgICAgc3ByaW5nID0gX3Byb3BzLnNwcmluZyxcbiAgICAgICAgdG8gPSBfcHJvcHMudG87XG5cbiAgICB2YXIgbmV3VmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICB2YXIgZWxhcHNlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcblxuICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChhY2NlbGVyYXRpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShhY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGZyaWN0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGZyaWN0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSAqPSBNYXRoLnBvdygxIC0gZnJpY3Rpb24sIGVsYXBzZWQgLyAxMDApO1xuICAgIH1cblxuICAgIGlmIChzcHJpbmcgJiYgdG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGRpc3RhbmNlVG9UYXJnZXQgPSB0byAtIHRoaXMuY3VycmVudDtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkoc3ByaW5nLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB2ZWxvY2l0eVxuICAgIHRoaXMuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkobmV3VmVsb2NpdHksIGVsYXBzZWQpO1xuICAgIHRoaXMucHJvcHMudmVsb2NpdHkgPSBuZXdWZWxvY2l0eTtcblxuICAgIC8vIENoZWNrIGlmIHNpbXVsYXRpb24gaXMgY29tcGxldGVcbiAgICAvLyBXZSBkbyB0aGlzIGhlcmUgaW5zdGVhZCBvZiBgaXNBY3Rpb25Db21wbGV0ZWAgYXMgaXQgYWxsb3dzIHVzXG4gICAgLy8gdG8gY2xhbXAgZHVyaW5nIHRoaXMgdXBkYXRlXG4gICAgdGhpcy5pc0NvbXBsZXRlID0gYXV0b1N0b3BTcGVlZCAhPT0gZmFsc2UgJiYgKCFuZXdWZWxvY2l0eSB8fCBNYXRoLmFicyhuZXdWZWxvY2l0eSkgPD0gYXV0b1N0b3BTcGVlZCk7XG5cbiAgICBpZiAodGhpcy5pc0NvbXBsZXRlICYmIHNwcmluZykge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdG87XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBQaHlzaWNzLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICB9O1xuXG4gIHJldHVybiBQaHlzaWNzO1xufShfMi5kZWZhdWx0KTtcblxuUGh5c2ljcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjY2VsZXJhdGlvbjogMCxcbiAgZnJpY3Rpb246IDAsXG4gIHZlbG9jaXR5OiAwLFxuICBhdXRvU3RvcFNwZWVkOiAwLjAwMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGh5c2ljcyhwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQm9lWE5wWTNNdWFuTWlYU3dpYm1GdFpYTWlPbHNpVUdoNWMybGpjeUlzSW5Wd1pHRjBaU0lzSW5CeWIzQnpJaXdpWVhWMGIxTjBiM0JUY0dWbFpDSXNJbUZqWTJWc1pYSmhkR2x2YmlJc0ltWnlhV04wYVc5dUlpd2lkbVZzYjJOcGRIa2lMQ0p6Y0hKcGJtY2lMQ0owYnlJc0ltNWxkMVpsYkc5amFYUjVJaXdpWld4aGNITmxaQ0lzSW5WdVpHVm1hVzVsWkNJc0ltUnBjM1JoYm1ObFZHOVVZWEpuWlhRaUxDSmpkWEp5Wlc1MElpd2lhWE5EYjIxd2JHVjBaU0lzSWsxaGRHZ2lMQ0poWW5NaUxDSnBjMEZqZEdsdmJrTnZiWEJzWlhSbElpd2laR1ZtWVhWc2RGQnliM0J6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3UVVGRFFUczdRVUZEUVRzN096czdPenM3T3p0SlFVVk5RU3hQT3pzN096czdPenM3YjBKQlVVcERMRTBzY1VKQlFWTTdRVUZCUVN4cFFrRkRhVVVzUzBGQlMwTXNTMEZFZEVVN1FVRkJRU3hSUVVORFF5eGhRVVJFTEZWQlEwTkJMR0ZCUkVRN1FVRkJRU3hSUVVOblFrTXNXVUZFYUVJc1ZVRkRaMEpCTEZsQlJHaENPMEZCUVVFc1VVRkRPRUpETEZGQlJEbENMRlZCUXpoQ1FTeFJRVVE1UWp0QlFVRkJMRkZCUTNkRFF5eFJRVVI0UXl4VlFVTjNRMEVzVVVGRWVFTTdRVUZCUVN4UlFVTnJSRU1zVFVGRWJFUXNWVUZEYTBSQkxFMUJSR3hFTzBGQlFVRXNVVUZETUVSRExFVkJSREZFTEZWQlF6QkVRU3hGUVVReFJEczdRVUZGVUN4UlFVRkpReXhqUVVGalNDeFJRVUZzUWp0QlFVTkJMRkZCUVUxSkxGVkJRVlVzYjBOQlFXaENPenRCUVVWQk8wRkJRMEVzVVVGQlNVNHNXVUZCU2l4RlFVRnJRanRCUVVOb1Frc3NjVUpCUVdVc2VVSkJRV05NTEZsQlFXUXNSVUZCTkVKTkxFOUJRVFZDTEVOQlFXWTdRVUZEUkRzN1FVRkZSRHRCUVVOQkxGRkJRVWxNTEZGQlFVb3NSVUZCWXp0QlFVTmFTU3c0UWtGQlowSXNTVUZCU1Vvc1VVRkJjRUlzUlVGQmEwTkxMRlZCUVZVc1IwRkJOVU03UVVGRFJEczdRVUZGUkN4UlFVRkpTQ3hWUVVGVlF5eFBRVUZQUnl4VFFVRnlRaXhGUVVGblF6dEJRVU01UWl4VlFVRk5ReXh0UWtGQmJVSktMRXRCUVVzc1MwRkJTMHNzVDBGQmJrTTdRVUZEUVVvc2NVSkJRV1ZITEcxQ1FVRnRRaXg1UWtGQlkwd3NUVUZCWkN4RlFVRnpRa2NzVDBGQmRFSXNRMEZCYkVNN1FVRkRSRHM3UVVGRlJEdEJRVU5CTEZOQlFVdEhMRTlCUVV3c1NVRkJaMElzZVVKQlFXTktMRmRCUVdRc1JVRkJNa0pETEU5QlFUTkNMRU5CUVdoQ08wRkJRMEVzVTBGQlMxSXNTMEZCVEN4RFFVRlhTU3hSUVVGWUxFZEJRWE5DUnl4WFFVRjBRanM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRkxTeXhWUVVGTUxFZEJRVzFDV0N4clFrRkJhMElzUzBGQmJFSXNTMEZCTkVJc1EwRkJRMDBzVjBGQlJDeEpRVUZuUWswc1MwRkJTME1zUjBGQlRDeERRVUZUVUN4WFFVRlVMRXRCUVhsQ1RpeGhRVUZ5UlN4RFFVRnVRanM3UVVGRlFTeFJRVUZKTEV0QlFVdFhMRlZCUVV3c1NVRkJiVUpRTEUxQlFYWkNMRVZCUVN0Q08wRkJRemRDTEZkQlFVdE5MRTlCUVV3c1IwRkJaVXdzUlVGQlpqdEJRVU5FT3p0QlFVVkVMRmRCUVU4c1MwRkJTMHNzVDBGQldqdEJRVU5FTEVjN08yOUNRVVZFU1N4blFpd3JRa0ZCYlVJN1FVRkRha0lzVjBGQlR5eExRVUZMU0N4VlFVRmFPMEZCUTBRc1J6czdPenM3UVVFNVEwZGtMRThzUTBGRFIydENMRmtzUjBGQlpUdEJRVU53UW1Rc1owSkJRV01zUTBGRVRUdEJRVVZ3UWtNc1dVRkJWU3hEUVVaVk8wRkJSM0JDUXl4WlFVRlZMRU5CU0ZVN1FVRkpjRUpJTEdsQ1FVRmxPMEZCU2tzc1F6czdhMEpCWjBSVUxGVkJRVU5FTEV0QlFVUTdRVUZCUVN4VFFVRlhMRWxCUVVsR0xFOUJRVW9zUTBGQldVVXNTMEZCV2l4RFFVRllPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSndhSGx6YVdOekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYSnpMMmRwZEdoMVlpOXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dkp6dGNibWx0Y0c5eWRDQjdJSFJwYldWVGFXNWpaVXhoYzNSR2NtRnRaU0I5SUdaeWIyMGdKeTR1TDJaeVlXMWxjM2x1WXljN1hHNXBiWEJ2Y25RZ2V5QnpjR1ZsWkZCbGNrWnlZVzFsSUgwZ1puSnZiU0FuTGk0dmFXNWpMMk5oYkdNbk8xeHVYRzVqYkdGemN5QlFhSGx6YVdOeklHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0JoWTJObGJHVnlZWFJwYjI0NklEQXNYRzRnSUNBZ1puSnBZM1JwYjI0NklEQXNYRzRnSUNBZ2RtVnNiMk5wZEhrNklEQXNYRzRnSUNBZ1lYVjBiMU4wYjNCVGNHVmxaRG9nTUM0d01ERmNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHRjFkRzlUZEc5d1UzQmxaV1FzSUdGalkyVnNaWEpoZEdsdmJpd2dabkpwWTNScGIyNHNJSFpsYkc5amFYUjVMQ0J6Y0hKcGJtY3NJSFJ2SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHeGxkQ0J1WlhkV1pXeHZZMmwwZVNBOUlIWmxiRzlqYVhSNU8xeHVJQ0FnSUdOdmJuTjBJR1ZzWVhCelpXUWdQU0IwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VvS1R0Y2JseHVJQ0FnSUM4dklFRndjR3g1SUdGalkyVnNaWEpoZEdsdmJpQjBieUIyWld4dlkybDBlVnh1SUNBZ0lHbG1JQ2hoWTJObGJHVnlZWFJwYjI0cElIdGNiaUFnSUNBZ0lHNWxkMVpsYkc5amFYUjVJQ3M5SUhOd1pXVmtVR1Z5Um5KaGJXVW9ZV05qWld4bGNtRjBhVzl1TENCbGJHRndjMlZrS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCQmNIQnNlU0JtY21samRHbHZiaUIwYnlCMlpXeHZZMmwwZVZ4dUlDQWdJR2xtSUNobWNtbGpkR2x2YmlrZ2UxeHVJQ0FnSUNBZ2JtVjNWbVZzYjJOcGRIa2dLajBnS0RFZ0xTQm1jbWxqZEdsdmJpa2dLaW9nS0dWc1lYQnpaV1FnTHlBeE1EQXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2h6Y0hKcGJtY2dKaVlnZEc4Z0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnWTI5dWMzUWdaR2x6ZEdGdVkyVlViMVJoY21kbGRDQTlJSFJ2SUMwZ2RHaHBjeTVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdibVYzVm1Wc2IyTnBkSGtnS3owZ1pHbHpkR0Z1WTJWVWIxUmhjbWRsZENBcUlITndaV1ZrVUdWeVJuSmhiV1VvYzNCeWFXNW5MQ0JsYkdGd2MyVmtLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJCY0hCc2VTQjJaV3h2WTJsMGVWeHVJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRDQXJQU0J6Y0dWbFpGQmxja1p5WVcxbEtHNWxkMVpsYkc5amFYUjVMQ0JsYkdGd2MyVmtLVHRjYmlBZ0lDQjBhR2x6TG5CeWIzQnpMblpsYkc5amFYUjVJRDBnYm1WM1ZtVnNiMk5wZEhrN1hHNWNiaUFnSUNBdkx5QkRhR1ZqYXlCcFppQnphVzExYkdGMGFXOXVJR2x6SUdOdmJYQnNaWFJsWEc0Z0lDQWdMeThnVjJVZ1pHOGdkR2hwY3lCb1pYSmxJR2x1YzNSbFlXUWdiMllnWUdselFXTjBhVzl1UTI5dGNHeGxkR1ZnSUdGeklHbDBJR0ZzYkc5M2N5QjFjMXh1SUNBZ0lDOHZJSFJ2SUdOc1lXMXdJR1IxY21sdVp5QjBhR2x6SUhWd1pHRjBaVnh1SUNBZ0lIUm9hWE11YVhORGIyMXdiR1YwWlNBOUlDaGhkWFJ2VTNSdmNGTndaV1ZrSUNFOVBTQm1ZV3h6WlNBbUppQW9JVzVsZDFabGJHOWphWFI1SUh4OElFMWhkR2d1WVdKektHNWxkMVpsYkc5amFYUjVLU0E4UFNCaGRYUnZVM1J2Y0ZOd1pXVmtLU2s3WEc1Y2JpQWdJQ0JwWmlBb2RHaHBjeTVwYzBOdmJYQnNaWFJsSUNZbUlITndjbWx1WnlrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJRDBnZEc4N1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVkzVnljbVZ1ZER0Y2JpQWdmVnh1WEc0Z0lHbHpRV04wYVc5dVEyOXRjR3hsZEdVb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVhWE5EYjIxd2JHVjBaVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvY0hKdmNITXBJRDArSUc1bGR5QlFhSGx6YVdOektIQnliM0J6S1RzaVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL3BoeXNpY3MuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3ZhbHVlID0gcmVxdWlyZSgnLi92YWx1ZScpO1xuXG52YXIgX3ZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlKTtcblxudmFyIF9jb21wb3NpdGUgPSByZXF1aXJlKCcuL2NvbXBvc2l0ZScpO1xuXG52YXIgX2NvbXBvc2l0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvaW50ZXIoX3JlZjIsIF9yZWYpIHtcbiAgdmFyIHggPSBfcmVmMi54LFxuICAgICAgeSA9IF9yZWYyLnk7XG5cbiAgdmFyIGV2ZW50VG9Qb2ludHMgPSBfcmVmLmV2ZW50VG9Qb2ludHMsXG4gICAgICBtb3ZlRXZlbnQgPSBfcmVmLm1vdmVFdmVudCxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnZXZlbnRUb1BvaW50cycsICdtb3ZlRXZlbnQnXSk7XG5cbiAgdmFyIHBvaW50ZXIgPSAoMCwgX2NvbXBvc2l0ZTIuZGVmYXVsdCkoe1xuICAgIHg6ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHgpLFxuICAgIHk6ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHkpXG4gIH0sIF9leHRlbmRzKHtcbiAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZVxuICB9LCBwcm9wcykpO1xuXG4gIHZhciB1cGRhdGVQb2ludGVyID0gZnVuY3Rpb24gdXBkYXRlUG9pbnRlcihlKSB7XG4gICAgaWYgKHBvaW50ZXIuZ2V0UHJvcCgncHJldmVudERlZmF1bHQnKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciBwb2ludHMgPSBldmVudFRvUG9pbnRzKGUpO1xuICAgIHBvaW50ZXIueC5zZXQocG9pbnRzLngpO1xuICAgIHBvaW50ZXIueS5zZXQocG9pbnRzLnkpO1xuICB9O1xuXG4gIHBvaW50ZXIuc2V0UHJvcHMoe1xuICAgIF9vblN0YXJ0OiBmdW5jdGlvbiBfb25TdGFydCgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIsIHsgcGFzc2l2ZTogIXBvaW50ZXIuZ2V0UHJvcCgncHJldmVudERlZmF1bHQnKSB9KTtcbiAgICB9LFxuICAgIF9vblN0b3A6IGZ1bmN0aW9uIF9vblN0b3AoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVQb2ludGVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwb2ludGVyO1xufVxuXG52YXIgbW91c2VFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiBtb3VzZUV2ZW50VG9Qb2ludChlKSB7XG4gIHJldHVybiB7XG4gICAgeDogZS5jbGllbnRYLFxuICAgIHk6IGUuY2xpZW50WVxuICB9O1xufTtcblxudmFyIHRvdWNoRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gdG91Y2hFdmVudFRvUG9pbnQoX3JlZjMpIHtcbiAgdmFyIGNoYW5nZWRUb3VjaGVzID0gX3JlZjMuY2hhbmdlZFRvdWNoZXM7XG4gIHJldHVybiB7XG4gICAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG4gIH07XG59O1xuXG52YXIgZ2V0TmF0aXZlRXZlbnQgPSBmdW5jdGlvbiBnZXROYXRpdmVFdmVudChlKSB7XG4gIHJldHVybiBlLm9yaWdpbmFsRXZlbnQgfHwgZS5uYXRpdmVFdmVudCB8fCBlO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGUsIHByb3BzKSB7XG4gIHZhciBuYXRpdmVFdmVudCA9IGdldE5hdGl2ZUV2ZW50KGUpO1xuICByZXR1cm4gbmF0aXZlRXZlbnQudG91Y2hlcyA/IGNyZWF0ZVBvaW50ZXIodG91Y2hFdmVudFRvUG9pbnQoZSksIF9leHRlbmRzKHtcbiAgICBtb3ZlRXZlbnQ6ICd0b3VjaG1vdmUnLFxuICAgIGV2ZW50VG9Qb2ludHM6IHRvdWNoRXZlbnRUb1BvaW50XG4gIH0sIHByb3BzKSkgOiBjcmVhdGVQb2ludGVyKG1vdXNlRXZlbnRUb1BvaW50KGUpLCBfZXh0ZW5kcyh7XG4gICAgbW92ZUV2ZW50OiAnbW91c2Vtb3ZlJyxcbiAgICBldmVudFRvUG9pbnRzOiBtb3VzZUV2ZW50VG9Qb2ludFxuICB9LCBwcm9wcykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0J2YVc1MFpYSXVhbk1pWFN3aWJtRnRaWE1pT2xzaVkzSmxZWFJsVUc5cGJuUmxjaUlzSW5naUxDSjVJaXdpWlhabGJuUlViMUJ2YVc1MGN5SXNJbTF2ZG1WRmRtVnVkQ0lzSW5CeWIzQnpJaXdpY0c5cGJuUmxjaUlzSW5CeVpYWmxiblJFWldaaGRXeDBJaXdpZFhCa1lYUmxVRzlwYm5SbGNpSXNJbVVpTENKblpYUlFjbTl3SWl3aWNHOXBiblJ6SWl3aWMyVjBJaXdpYzJWMFVISnZjSE1pTENKZmIyNVRkR0Z5ZENJc0ltUnZZM1Z0Wlc1MElpd2laRzlqZFcxbGJuUkZiR1Z0Wlc1MElpd2lZV1JrUlhabGJuUk1hWE4wWlc1bGNpSXNJbkJoYzNOcGRtVWlMQ0pmYjI1VGRHOXdJaXdpY21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lJc0ltMXZkWE5sUlhabGJuUlViMUJ2YVc1MElpd2lZMnhwWlc1MFdDSXNJbU5zYVdWdWRGa2lMQ0owYjNWamFFVjJaVzUwVkc5UWIybHVkQ0lzSW1Ob1lXNW5aV1JVYjNWamFHVnpJaXdpWjJWMFRtRjBhWFpsUlhabGJuUWlMQ0p2Y21sbmFXNWhiRVYyWlc1MElpd2libUYwYVhabFJYWmxiblFpTENKMGIzVmphR1Z6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3T3pzN096dEJRVVZCTEZOQlFWTkJMR0ZCUVZRc1kwRkJlVVU3UVVGQlFTeE5RVUZvUkVNc1EwRkJaMFFzVTBGQmFFUkJMRU5CUVdkRU8wRkJRVUVzVFVGQk4wTkRMRU5CUVRaRExGTkJRVGREUVN4RFFVRTJRenM3UVVGQlFTeE5RVUYwUTBNc1lVRkJjME1zVVVGQmRFTkJMR0ZCUVhORE8wRkJRVUVzVFVGQmRrSkRMRk5CUVhWQ0xGRkJRWFpDUVN4VFFVRjFRanRCUVVGQkxFMUJRVlJETEV0QlFWTTdPMEZCUTNaRkxFMUJRVTFETEZWQlFWVXNlVUpCUVZVN1FVRkRlRUpNTEU5QlFVY3NjVUpCUVUxQkxFTkJRVTRzUTBGRWNVSTdRVUZGZUVKRExFOUJRVWNzY1VKQlFVMUJMRU5CUVU0N1FVRkdjVUlzUjBGQlZqdEJRVWxrU3l4dlFrRkJaMEk3UVVGS1JpeExRVXRZUml4TFFVeFhMRVZCUVdoQ096dEJRVkZCTEUxQlFVMUhMR2RDUVVGblFpeFRRVUZvUWtFc1lVRkJaMElzUTBGQlEwTXNRMEZCUkN4RlFVRlBPMEZCUXpOQ0xGRkJRVWxJTEZGQlFWRkpMRTlCUVZJc1EwRkJaMElzWjBKQlFXaENMRU5CUVVvc1JVRkJkVU03UVVGRGNrTkVMRkZCUVVWR0xHTkJRVVk3UVVGRFJEczdRVUZGUkN4UlFVRk5TU3hUUVVGVFVpeGpRVUZqVFN4RFFVRmtMRU5CUVdZN1FVRkRRVWdzV1VGQlVVd3NRMEZCVWl4RFFVRlZWeXhIUVVGV0xFTkJRV05FTEU5QlFVOVdMRU5CUVhKQ08wRkJRMEZMTEZsQlFWRktMRU5CUVZJc1EwRkJWVlVzUjBGQlZpeERRVUZqUkN4UFFVRlBWQ3hEUVVGeVFqdEJRVU5FTEVkQlVrUTdPMEZCVlVGSkxGVkJRVkZQTEZGQlFWSXNRMEZCYVVJN1FVRkRaa01zWTBGQlZUdEJRVUZCTEdGQlFVMURMRk5CUVZORExHVkJRVlFzUTBGQmVVSkRMR2RDUVVGNlFpeERRVUV3UTJJc1UwRkJNVU1zUlVGQmNVUkpMR0ZCUVhKRUxFVkJRVzlGTEVWQlFVVlZMRk5CUVZNc1EwRkJRMW9zVVVGQlVVa3NUMEZCVWl4RFFVRm5RaXhuUWtGQmFFSXNRMEZCV2l4RlFVRndSU3hEUVVGT08wRkJRVUVzUzBGRVN6dEJRVVZtVXl4aFFVRlRPMEZCUVVFc1lVRkJUVW9zVTBGQlUwTXNaVUZCVkN4RFFVRjVRa2tzYlVKQlFYcENMRU5CUVRaRGFFSXNVMEZCTjBNc1JVRkJkMFJKTEdGQlFYaEVMRU5CUVU0N1FVRkJRVHRCUVVaTkxFZEJRV3BDT3p0QlFVdEJMRk5CUVU5R0xFOUJRVkE3UVVGRFJEczdRVUZGUkN4SlFVRk5aU3h2UWtGQmIwSXNVMEZCY0VKQkxHbENRVUZ2UWl4RFFVRkRXaXhEUVVGRU8wRkJRVUVzVTBGQlVUdEJRVU5vUTFJc1QwRkJSMUVzUlVGQlJXRXNUMEZFTWtJN1FVRkZhRU53UWl4UFFVRkhUeXhGUVVGRll6dEJRVVl5UWl4SFFVRlNPMEZCUVVFc1EwRkJNVUk3TzBGQlMwRXNTVUZCVFVNc2IwSkJRVzlDTEZOQlFYQkNRU3hwUWtGQmIwSTdRVUZCUVN4TlFVRkhReXhqUVVGSUxGTkJRVWRCTEdOQlFVZzdRVUZCUVN4VFFVRjVRanRCUVVOcVJIaENMRTlCUVVkM1FpeGxRVUZsTEVOQlFXWXNSVUZCYTBKSUxFOUJSRFJDTzBGQlJXcEVjRUlzVDBGQlIzVkNMR1ZCUVdVc1EwRkJaaXhGUVVGclFrWTdRVUZHTkVJc1IwRkJla0k3UVVGQlFTeERRVUV4UWpzN1FVRkxRU3hKUVVGTlJ5eHBRa0ZCYVVJc1UwRkJha0pCTEdOQlFXbENMRU5CUVVOcVFpeERRVUZFTzBGQlFVRXNVMEZCVDBFc1JVRkJSV3RDTEdGQlFVWXNTVUZCYlVKc1FpeEZRVUZGYlVJc1YwRkJja0lzU1VGQmIwTnVRaXhEUVVFelF6dEJRVUZCTEVOQlFYWkNPenRyUWtGRlpTeFZRVUZEUVN4RFFVRkVMRVZCUVVsS0xFdEJRVW9zUlVGQll6dEJRVU16UWl4TlFVRk5kVUlzWTBGQlkwWXNaVUZCWldwQ0xFTkJRV1lzUTBGQmNFSTdRVUZEUVN4VFFVRlJiVUlzV1VGQldVTXNUMEZCWWl4SFFVTk1OMElzWTBGQlkzZENMR3RDUVVGclFtWXNRMEZCYkVJc1EwRkJaRHRCUVVORlRDeGxRVUZYTEZkQlJHSTdRVUZGUlVRc2JVSkJRV1Z4UWp0QlFVWnFRaXhMUVVkTGJrSXNTMEZJVEN4RlFVUkxMRWRCVFV4TUxHTkJRV054UWl4clFrRkJhMEphTEVOQlFXeENMRU5CUVdRN1FVRkRSVXdzWlVGQlZ5eFhRVVJpTzBGQlJVVkVMRzFDUVVGbGEwSTdRVUZHYWtJc1MwRkhTMmhDTEV0QlNFd3NSVUZPUmp0QlFWZEVMRU1pTENKbWFXeGxJam9pY0c5cGJuUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0Z5Y3k5bmFYUm9kV0l2Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhaaGJIVmxJR1p5YjIwZ0p5NHZkbUZzZFdVbk8xeHVhVzF3YjNKMElHTnZiWEJ2YzJsMFpTQm1jbTl0SUNjdUwyTnZiWEJ2YzJsMFpTYzdYRzVjYm1aMWJtTjBhVzl1SUdOeVpXRjBaVkJ2YVc1MFpYSW9leUI0TENCNUlIMHNJSHNnWlhabGJuUlViMUJ2YVc1MGN5d2diVzkyWlVWMlpXNTBMQ0F1TGk1d2NtOXdjeUI5S1NCN1hHNGdJR052Ym5OMElIQnZhVzUwWlhJZ1BTQmpiMjF3YjNOcGRHVW9lMXh1SUNBZ0lIZzZJSFpoYkhWbEtIZ3BMRnh1SUNBZ0lIazZJSFpoYkhWbEtIa3BYRzRnSUgwc0lIdGNiaUFnSUNCd2NtVjJaVzUwUkdWbVlYVnNkRG9nZEhKMVpTeGNiaUFnSUNBdUxpNXdjbTl3YzF4dUlDQjlLVHRjYmx4dUlDQmpiMjV6ZENCMWNHUmhkR1ZRYjJsdWRHVnlJRDBnS0dVcElEMCtJSHRjYmlBZ0lDQnBaaUFvY0c5cGJuUmxjaTVuWlhSUWNtOXdLQ2R3Y21WMlpXNTBSR1ZtWVhWc2RDY3BLU0I3WEc0Z0lDQWdJQ0JsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZMjl1YzNRZ2NHOXBiblJ6SUQwZ1pYWmxiblJVYjFCdmFXNTBjeWhsS1R0Y2JpQWdJQ0J3YjJsdWRHVnlMbmd1YzJWMEtIQnZhVzUwY3k1NEtUdGNiaUFnSUNCd2IybHVkR1Z5TG5rdWMyVjBLSEJ2YVc1MGN5NTVLVHRjYmlBZ2ZUdGNibHh1SUNCd2IybHVkR1Z5TG5ObGRGQnliM0J6S0h0Y2JpQWdJQ0JmYjI1VGRHRnlkRG9nS0NrZ1BUNGdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb2JXOTJaVVYyWlc1MExDQjFjR1JoZEdWUWIybHVkR1Z5TENCN0lIQmhjM05wZG1VNklDRndiMmx1ZEdWeUxtZGxkRkJ5YjNBb0ozQnlaWFpsYm5SRVpXWmhkV3gwSnlrZ2ZTa3NYRzRnSUNBZ1gyOXVVM1J2Y0RvZ0tDa2dQVDRnWkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbkpsYlc5MlpVVjJaVzUwVEdsemRHVnVaWElvYlc5MlpVVjJaVzUwTENCMWNHUmhkR1ZRYjJsdWRHVnlLVnh1SUNCOUtUdGNibHh1SUNCeVpYUjFjbTRnY0c5cGJuUmxjanRjYm4xY2JseHVZMjl1YzNRZ2JXOTFjMlZGZG1WdWRGUnZVRzlwYm5RZ1BTQW9aU2tnUFQ0Z0tIdGNiaUFnZURvZ1pTNWpiR2xsYm5SWUxGeHVJQ0I1T2lCbExtTnNhV1Z1ZEZsY2JuMHBPMXh1WEc1amIyNXpkQ0IwYjNWamFFVjJaVzUwVkc5UWIybHVkQ0E5SUNoN0lHTm9ZVzVuWldSVWIzVmphR1Z6SUgwcElEMCtJQ2g3WEc0Z0lIZzZJR05vWVc1blpXUlViM1ZqYUdWeld6QmRMbU5zYVdWdWRGZ3NYRzRnSUhrNklHTm9ZVzVuWldSVWIzVmphR1Z6V3pCZExtTnNhV1Z1ZEZsY2JuMHBPMXh1WEc1amIyNXpkQ0JuWlhST1lYUnBkbVZGZG1WdWRDQTlJQ2hsS1NBOVBpQmxMbTl5YVdkcGJtRnNSWFpsYm5RZ2ZId2daUzV1WVhScGRtVkZkbVZ1ZENCOGZDQmxPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWlN3Z2NISnZjSE1wSUQwK0lIdGNiaUFnWTI5dWMzUWdibUYwYVhabFJYWmxiblFnUFNCblpYUk9ZWFJwZG1WRmRtVnVkQ2hsS1R0Y2JpQWdjbVYwZFhKdUlDaHVZWFJwZG1WRmRtVnVkQzUwYjNWamFHVnpLU0EvWEc0Z0lDQWdZM0psWVhSbFVHOXBiblJsY2loMGIzVmphRVYyWlc1MFZHOVFiMmx1ZENobEtTd2dlMXh1SUNBZ0lDQWdiVzkyWlVWMlpXNTBPaUFuZEc5MVkyaHRiM1psSnl4Y2JpQWdJQ0FnSUdWMlpXNTBWRzlRYjJsdWRITTZJSFJ2ZFdOb1JYWmxiblJVYjFCdmFXNTBMRnh1SUNBZ0lDQWdMaTR1Y0hKdmNITmNiaUFnSUNCOUtTQTZYRzRnSUNBZ1kzSmxZWFJsVUc5cGJuUmxjaWh0YjNWelpVVjJaVzUwVkc5UWIybHVkQ2hsS1N3Z2UxeHVJQ0FnSUNBZ2JXOTJaVVYyWlc1ME9pQW5iVzkxYzJWdGIzWmxKeXhjYmlBZ0lDQWdJR1YyWlc1MFZHOVFiMmx1ZEhNNklHMXZkWE5sUlhabGJuUlViMUJ2YVc1MExGeHVJQ0FnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdJQ0I5S1R0Y2JuMDdYRzRpWFgwPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjdGlvbnMvcG9pbnRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdmFsdWUgPSByZXF1aXJlKCcuL3ZhbHVlJyk7XG5cbnZhciBfdmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWUpO1xuXG52YXIgX2NvbXBvc2l0ZSA9IHJlcXVpcmUoJy4vY29tcG9zaXRlJyk7XG5cbnZhciBfY29tcG9zaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2l0ZSk7XG5cbnZhciBfcGFyYWxsZWwgPSByZXF1aXJlKCcuL3BhcmFsbGVsJyk7XG5cbnZhciBfcGFyYWxsZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyYWxsZWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvdWNoZXMoaW5pdGlhbFRvdWNoZXMsIF9yZWYpIHtcbiAgdmFyIGV2ZW50VG9Ub3VjaGVzID0gX3JlZi5ldmVudFRvVG91Y2hlcyxcbiAgICAgIG1vdmVFdmVudCA9IF9yZWYubW92ZUV2ZW50LFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydldmVudFRvVG91Y2hlcycsICdtb3ZlRXZlbnQnXSk7XG5cbiAgdmFyIHRvdWNoZXMgPSAoMCwgX3BhcmFsbGVsMi5kZWZhdWx0KShtYXBDb29yZHNUb0FjdGlvbnMoaW5pdGlhbFRvdWNoZXMpLCBfZXh0ZW5kcyh7XG4gICAgcHJldmVudERlZmF1bHQ6IHRydWVcbiAgfSwgcHJvcHMpKTtcblxuICBmdW5jdGlvbiB1cGRhdGVUb3VjaGVzKGUpIHtcbiAgICBpZiAocHJvcHMucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciBsYXRlc3RUb3VjaGVzID0gZXZlbnRUb1RvdWNoZXMoZSk7XG4gICAgdXBkYXRlQWN0aW9uV2l0aFRvdWNoZXModG91Y2hlcywgbGF0ZXN0VG91Y2hlcyk7XG4gIH1cblxuICB0b3VjaGVzLnNldFByb3BzKHtcbiAgICBfb25TdGFydDogZnVuY3Rpb24gX29uU3RhcnQoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVUb3VjaGVzKTtcbiAgICB9LFxuICAgIF9vblN0b3A6IGZ1bmN0aW9uIF9vblN0b3AoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVUb3VjaGVzKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0b3VjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXBDb29yZHNUb0FjdGlvbnMoY29vcmRzKSB7XG4gIHZhciBhY3Rpb25zID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF9jb29yZHMkaSA9IGNvb3Jkc1tpXSxcbiAgICAgICAgeCA9IF9jb29yZHMkaS54LFxuICAgICAgICB5ID0gX2Nvb3JkcyRpLnk7XG5cbiAgICBhY3Rpb25zW2ldID0gKDAsIF9jb21wb3NpdGUyLmRlZmF1bHQpKHtcbiAgICAgIHg6ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHgpLFxuICAgICAgeTogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeSlcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gYWN0aW9ucztcbn1cblxuZnVuY3Rpb24gdXBkYXRlQWN0aW9uV2l0aFRvdWNoZXModG91Y2hlcywgbmV3VG91Y2hlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld1RvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX25ld1RvdWNoZXMkaSA9IG5ld1RvdWNoZXNbaV0sXG4gICAgICAgIHggPSBfbmV3VG91Y2hlcyRpLngsXG4gICAgICAgIHkgPSBfbmV3VG91Y2hlcyRpLnk7XG5cbiAgICB2YXIgdG91Y2hBY3Rpb25zID0gdG91Y2hlcy5nZXRDaGlsZHJlbigpO1xuICAgIHZhciB0b3VjaEFjdGlvbiA9IHRvdWNoQWN0aW9uc1tpXTtcbiAgICBpZiAodG91Y2hBY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdG91Y2hBY3Rpb24ueC5zZXQoeCk7XG4gICAgICB0b3VjaEFjdGlvbi55LnNldCh5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG91Y2hlcy5hZGRBY3Rpb24oKDAsIF9jb21wb3NpdGUyLmRlZmF1bHQpKHtcbiAgICAgICAgeDogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeCksXG4gICAgICAgIHk6ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHkpXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG59XG5cbnZhciBtb3VzZUV2ZW50VG9Ub3VjaGVzID0gZnVuY3Rpb24gbW91c2VFdmVudFRvVG91Y2hlcyhfcmVmMikge1xuICB2YXIgcGFnZVggPSBfcmVmMi5wYWdlWCxcbiAgICAgIHBhZ2VZID0gX3JlZjIucGFnZVk7XG4gIHJldHVybiBbeyB4OiBwYWdlWCwgeTogcGFnZVkgfV07XG59O1xudmFyIHRvdWNoRXZlbnRUb1RvdWNoZXMgPSBmdW5jdGlvbiB0b3VjaEV2ZW50VG9Ub3VjaGVzKF9yZWYzKSB7XG4gIHZhciB0b3VjaGVzID0gX3JlZjMudG91Y2hlcztcbiAgcmV0dXJuIGV4dHJhY3RDb29yZHModG91Y2hlcyk7XG59O1xuXG5mdW5jdGlvbiBleHRyYWN0Q29vcmRzKHRvdWNoZXMpIHtcbiAgdmFyIGNvb3JkcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX3RvdWNoZXMkaSA9IHRvdWNoZXNbaV0sXG4gICAgICAgIGNsaWVudFggPSBfdG91Y2hlcyRpLmNsaWVudFgsXG4gICAgICAgIGNsaWVudFkgPSBfdG91Y2hlcyRpLmNsaWVudFk7XG5cbiAgICBjb29yZHNbaV0gPSB7XG4gICAgICB4OiBjbGllbnRYLFxuICAgICAgeTogY2xpZW50WVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxudmFyIGdldE5hdGl2ZUV2ZW50ID0gZnVuY3Rpb24gZ2V0TmF0aXZlRXZlbnQoZSkge1xuICByZXR1cm4gZS5vcmlnaW5hbEV2ZW50IHx8IGUubmF0aXZlRXZlbnQgfHwgZTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlLCBwcm9wcykge1xuICB2YXIgbmF0aXZlRXZlbnQgPSBnZXROYXRpdmVFdmVudChlKTtcbiAgcmV0dXJuIG5hdGl2ZUV2ZW50LnRvdWNoZXMgPyBjcmVhdGVUb3VjaGVzKHRvdWNoRXZlbnRUb1RvdWNoZXMoZSksIF9leHRlbmRzKHtcbiAgICBtb3ZlRXZlbnQ6ICd0b3VjaG1vdmUnLFxuICAgIGV2ZW50VG9Ub3VjaGVzOiB0b3VjaEV2ZW50VG9Ub3VjaGVzXG4gIH0sIHByb3BzKSkgOiBjcmVhdGVUb3VjaGVzKG1vdXNlRXZlbnRUb1RvdWNoZXMoZSksIF9leHRlbmRzKHtcbiAgICBtb3ZlRXZlbnQ6ICdtb3VzZW1vdmUnLFxuICAgIGV2ZW50VG9Ub3VjaGVzOiBtb3VzZUV2ZW50VG9Ub3VjaGVzXG4gIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzUnZkV05vWlhNdWFuTWlYU3dpYm1GdFpYTWlPbHNpWTNKbFlYUmxWRzkxWTJobGN5SXNJbWx1YVhScFlXeFViM1ZqYUdWeklpd2laWFpsYm5SVWIxUnZkV05vWlhNaUxDSnRiM1psUlhabGJuUWlMQ0p3Y205d2N5SXNJblJ2ZFdOb1pYTWlMQ0p0WVhCRGIyOXlaSE5VYjBGamRHbHZibk1pTENKd2NtVjJaVzUwUkdWbVlYVnNkQ0lzSW5Wd1pHRjBaVlJ2ZFdOb1pYTWlMQ0psSWl3aWJHRjBaWE4wVkc5MVkyaGxjeUlzSW5Wd1pHRjBaVUZqZEdsdmJsZHBkR2hVYjNWamFHVnpJaXdpYzJWMFVISnZjSE1pTENKZmIyNVRkR0Z5ZENJc0ltUnZZM1Z0Wlc1MElpd2laRzlqZFcxbGJuUkZiR1Z0Wlc1MElpd2lZV1JrUlhabGJuUk1hWE4wWlc1bGNpSXNJbDl2YmxOMGIzQWlMQ0p5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5SWl3aVkyOXZjbVJ6SWl3aVlXTjBhVzl1Y3lJc0lta2lMQ0pzWlc1bmRHZ2lMQ0o0SWl3aWVTSXNJbTVsZDFSdmRXTm9aWE1pTENKMGIzVmphRUZqZEdsdmJuTWlMQ0puWlhSRGFHbHNaSEpsYmlJc0luUnZkV05vUVdOMGFXOXVJaXdpZFc1a1pXWnBibVZrSWl3aWMyVjBJaXdpWVdSa1FXTjBhVzl1SWl3aWJXOTFjMlZGZG1WdWRGUnZWRzkxWTJobGN5SXNJbkJoWjJWWUlpd2ljR0ZuWlZraUxDSjBiM1ZqYUVWMlpXNTBWRzlVYjNWamFHVnpJaXdpWlhoMGNtRmpkRU52YjNKa2N5SXNJbU5zYVdWdWRGZ2lMQ0pqYkdsbGJuUlpJaXdpWjJWMFRtRjBhWFpsUlhabGJuUWlMQ0p2Y21sbmFXNWhiRVYyWlc1MElpd2libUYwYVhabFJYWmxiblFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenM3T3pzN1FVRkZRU3hUUVVGVFFTeGhRVUZVTEVOQlFYVkNReXhqUVVGMlFpeFJRVUZuUmp0QlFVRkJMRTFCUVhaRFF5eGpRVUYxUXl4UlFVRjJRMEVzWTBGQmRVTTdRVUZCUVN4TlFVRjJRa01zVTBGQmRVSXNVVUZCZGtKQkxGTkJRWFZDTzBGQlFVRXNUVUZCVkVNc1MwRkJVenM3UVVGRE9VVXNUVUZCVFVNc1ZVRkJWU3gzUWtGQlUwTXNiVUpCUVcxQ1RDeGpRVUZ1UWl4RFFVRlVPMEZCUTJSTkxHOUNRVUZuUWp0QlFVUkdMRXRCUlZoSUxFdEJSbGNzUlVGQmFFSTdPMEZCUzBFc1YwRkJVMGtzWVVGQlZDeERRVUYxUWtNc1EwRkJka0lzUlVGQk1FSTdRVUZEZUVJc1VVRkJTVXdzVFVGQlRVY3NZMEZCVml4RlFVRXdRa1VzUlVGQlJVWXNZMEZCUmpzN1FVRkZNVUlzVVVGQlRVY3NaMEpCUVdkQ1VpeGxRVUZsVHl4RFFVRm1MRU5CUVhSQ08wRkJRMEZGTERSQ1FVRjNRazRzVDBGQmVFSXNSVUZCYVVOTExHRkJRV3BETzBGQlEwUTdPMEZCUlVSTUxGVkJRVkZQTEZGQlFWSXNRMEZCYVVJN1FVRkRaa01zWTBGQlZUdEJRVUZCTEdGQlFVMURMRk5CUVZORExHVkJRVlFzUTBGQmVVSkRMR2RDUVVGNlFpeERRVUV3UTJJc1UwRkJNVU1zUlVGQmNVUkxMR0ZCUVhKRUxFTkJRVTQ3UVVGQlFTeExRVVJMTzBGQlJXWlRMR0ZCUVZNN1FVRkJRU3hoUVVGTlNDeFRRVUZUUXl4bFFVRlVMRU5CUVhsQ1J5eHRRa0ZCZWtJc1EwRkJOa05tTEZOQlFUZERMRVZCUVhkRVN5eGhRVUY0UkN4RFFVRk9PMEZCUVVFN1FVRkdUU3hIUVVGcVFqczdRVUZMUVN4VFFVRlBTQ3hQUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVTBNc2EwSkJRVlFzUTBGQk5FSmhMRTFCUVRWQ0xFVkJRVzlETzBGQlEyeERMRTFCUVVsRExGVkJRVlVzUlVGQlpEdEJRVU5CTEU5QlFVc3NTVUZCU1VNc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpSaXhQUVVGUFJ5eE5RVUV6UWl4RlFVRnRRMFFzUjBGQmJrTXNSVUZCZDBNN1FVRkJRU3h2UWtGRGNrSkdMRTlCUVU5RkxFTkJRVkFzUTBGRWNVSTdRVUZCUVN4UlFVTTVRa1VzUTBGRU9FSXNZVUZET1VKQkxFTkJSRGhDTzBGQlFVRXNVVUZETTBKRExFTkJSREpDTEdGQlF6TkNRU3hEUVVReVFqczdRVUZGZEVOS0xGbEJRVkZETEVOQlFWSXNTVUZCWVN4NVFrRkJWVHRCUVVOeVFrVXNVMEZCUnl4eFFrRkJUVUVzUTBGQlRpeERRVVJyUWp0QlFVVnlRa01zVTBGQlJ5eHhRa0ZCVFVFc1EwRkJUanRCUVVaclFpeExRVUZXTEVOQlFXSTdRVUZKUkR0QlFVTkVMRk5CUVU5S0xFOUJRVkE3UVVGRFJEczdRVUZGUkN4VFFVRlRWQ3gxUWtGQlZDeERRVUZwUTA0c1QwRkJha01zUlVGQk1FTnZRaXhWUVVFeFF5eEZRVUZ6UkR0QlFVTndSQ3hQUVVGTExFbEJRVWxLTEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNVa3NWMEZCVjBnc1RVRkJMMElzUlVGQmRVTkVMRWRCUVhaRExFVkJRVFJETzBGQlFVRXNkMEpCUTNwQ1NTeFhRVUZYU2l4RFFVRllMRU5CUkhsQ08wRkJRVUVzVVVGRGJFTkZMRU5CUkd0RExHbENRVU5zUTBFc1EwRkVhME03UVVGQlFTeFJRVU12UWtNc1EwRkVLMElzYVVKQlF5OUNRU3hEUVVRclFqczdRVUZGTVVNc1VVRkJUVVVzWlVGQlpYSkNMRkZCUVZGelFpeFhRVUZTTEVWQlFYSkNPMEZCUTBFc1VVRkJUVU1zWTBGQlkwWXNZVUZCWVV3c1EwRkJZaXhEUVVGd1FqdEJRVU5CTEZGQlFVbFBMR2RDUVVGblFrTXNVMEZCY0VJc1JVRkJLMEk3UVVGRE4wSkVMR3RDUVVGWlRDeERRVUZhTEVOQlFXTlBMRWRCUVdRc1EwRkJhMEpRTEVOQlFXeENPMEZCUTBGTExHdENRVUZaU2l4RFFVRmFMRU5CUVdOTkxFZEJRV1FzUTBGQmEwSk9MRU5CUVd4Q08wRkJRMFFzUzBGSVJDeE5RVWRQTzBGQlEweHVRaXhqUVVGUk1FSXNVMEZCVWl4RFFVRnJRaXg1UWtGQlZUdEJRVU14UWxJc1YwRkJSeXh4UWtGQlRVRXNRMEZCVGl4RFFVUjFRanRCUVVVeFFrTXNWMEZCUnl4eFFrRkJUVUVzUTBGQlRqdEJRVVoxUWl4UFFVRldMRU5CUVd4Q08wRkJTVVE3UVVGRFJqdEJRVU5HT3p0QlFVVkVMRWxCUVUxUkxITkNRVUZ6UWl4VFFVRjBRa0VzYlVKQlFYTkNPMEZCUVVFc1RVRkJSME1zUzBGQlNDeFRRVUZIUVN4TFFVRklPMEZCUVVFc1RVRkJWVU1zUzBGQlZpeFRRVUZWUVN4TFFVRldPMEZCUVVFc1UwRkJjMElzUTBGQlF5eEZRVUZGV0N4SFFVRkhWU3hMUVVGTUxFVkJRVmxVTEVkQlFVZFZMRXRCUVdZc1JVRkJSQ3hEUVVGMFFqdEJRVUZCTEVOQlFUVkNPMEZCUTBFc1NVRkJUVU1zYzBKQlFYTkNMRk5CUVhSQ1FTeHRRa0ZCYzBJN1FVRkJRU3hOUVVGSE9VSXNUMEZCU0N4VFFVRkhRU3hQUVVGSU8wRkJRVUVzVTBGQmFVSXJRaXhqUVVGakwwSXNUMEZCWkN4RFFVRnFRanRCUVVGQkxFTkJRVFZDT3p0QlFVVkJMRk5CUVZNclFpeGhRVUZVTEVOQlFYVkNMMElzVDBGQmRrSXNSVUZCWjBNN1FVRkRPVUlzVFVGQlNXTXNVMEZCVXl4RlFVRmlPMEZCUTBFc1QwRkJTeXhKUVVGSlJTeEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWxvUWl4UlFVRlJhVUlzVFVGQk5VSXNSVUZCYjBORUxFZEJRWEJETEVWQlFYbERPMEZCUVVFc2NVSkJRMVpvUWl4UlFVRlJaMElzUTBGQlVpeERRVVJWTzBGQlFVRXNVVUZETDBKblFpeFBRVVFyUWl4alFVTXZRa0VzVDBGRUswSTdRVUZCUVN4UlFVTjBRa01zVDBGRWMwSXNZMEZEZEVKQkxFOUJSSE5DT3p0QlFVVjJRMjVDTEZkQlFVOUZMRU5CUVZBc1NVRkJXVHRCUVVOV1JTeFRRVUZIWXl4UFFVUlBPMEZCUlZaaUxGTkJRVWRqTzBGQlJrOHNTMEZCV2p0QlFVbEVPMEZCUTBRc1UwRkJUMjVDTEUxQlFWQTdRVUZEUkRzN1FVRkZSQ3hKUVVGTmIwSXNhVUpCUVdsQ0xGTkJRV3BDUVN4alFVRnBRaXhEUVVGRE9VSXNRMEZCUkR0QlFVRkJMRk5CUVU5QkxFVkJRVVVyUWl4aFFVRkdMRWxCUVcxQ0wwSXNSVUZCUldkRExGZEJRWEpDTEVsQlFXOURhRU1zUTBGQk0wTTdRVUZCUVN4RFFVRjJRanM3YTBKQlJXVXNWVUZCUTBFc1EwRkJSQ3hGUVVGSlRDeExRVUZLTEVWQlFXTTdRVUZETTBJc1RVRkJUWEZETEdOQlFXTkdMR1ZCUVdVNVFpeERRVUZtTEVOQlFYQkNPMEZCUTBFc1UwRkJVV2RETEZsQlFWbHdReXhQUVVGaUxFZEJRMHhNTEdOQlFXTnRReXh2UWtGQmIwSXhRaXhEUVVGd1FpeERRVUZrTzBGQlEwVk9MR1ZCUVZjc1YwRkVZanRCUVVWRlJDeHZRa0ZCWjBKcFF6dEJRVVpzUWl4TFFVZExMMElzUzBGSVRDeEZRVVJMTEVkQlRVeEtMR05CUVdOblF5eHZRa0ZCYjBKMlFpeERRVUZ3UWl4RFFVRmtPMEZCUTBWT0xHVkJRVmNzVjBGRVlqdEJRVVZGUkN4dlFrRkJaMEk0UWp0QlFVWnNRaXhMUVVkTE5VSXNTMEZJVEN4RlFVNUdPMEZCVjBRc1F5SXNJbVpwYkdVaU9pSjBiM1ZqYUdWekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYSnpMMmRwZEdoMVlpOXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkbUZzZFdVZ1puSnZiU0FuTGk5MllXeDFaU2M3WEc1cGJYQnZjblFnWTI5dGNHOXphWFJsSUdaeWIyMGdKeTR2WTI5dGNHOXphWFJsSnp0Y2JtbHRjRzl5ZENCd1lYSmhiR3hsYkNCbWNtOXRJQ2N1TDNCaGNtRnNiR1ZzSnp0Y2JseHVablZ1WTNScGIyNGdZM0psWVhSbFZHOTFZMmhsY3locGJtbDBhV0ZzVkc5MVkyaGxjeXdnZXlCbGRtVnVkRlJ2Vkc5MVkyaGxjeXdnYlc5MlpVVjJaVzUwTENBdUxpNXdjbTl3Y3lCOUtTQjdYRzRnSUdOdmJuTjBJSFJ2ZFdOb1pYTWdQU0J3WVhKaGJHeGxiQ2h0WVhCRGIyOXlaSE5VYjBGamRHbHZibk1vYVc1cGRHbGhiRlJ2ZFdOb1pYTXBMQ0I3WEc0Z0lDQWdjSEpsZG1WdWRFUmxabUYxYkhRNklIUnlkV1VzWEc0Z0lDQWdMaTR1Y0hKdmNITmNiaUFnZlNrN1hHNWNiaUFnWm5WdVkzUnBiMjRnZFhCa1lYUmxWRzkxWTJobGN5aGxLU0I3WEc0Z0lDQWdhV1lnS0hCeWIzQnpMbkJ5WlhabGJuUkVaV1poZFd4MEtTQmxMbkJ5WlhabGJuUkVaV1poZFd4MEtDazdYRzVjYmlBZ0lDQmpiMjV6ZENCc1lYUmxjM1JVYjNWamFHVnpJRDBnWlhabGJuUlViMVJ2ZFdOb1pYTW9aU2s3WEc0Z0lDQWdkWEJrWVhSbFFXTjBhVzl1VjJsMGFGUnZkV05vWlhNb2RHOTFZMmhsY3l3Z2JHRjBaWE4wVkc5MVkyaGxjeWs3WEc0Z0lIMWNibHh1SUNCMGIzVmphR1Z6TG5ObGRGQnliM0J6S0h0Y2JpQWdJQ0JmYjI1VGRHRnlkRG9nS0NrZ1BUNGdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb2JXOTJaVVYyWlc1MExDQjFjR1JoZEdWVWIzVmphR1Z6S1N4Y2JpQWdJQ0JmYjI1VGRHOXdPaUFvS1NBOVBpQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpaHRiM1psUlhabGJuUXNJSFZ3WkdGMFpWUnZkV05vWlhNcFhHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQjBiM1ZqYUdWek8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCdFlYQkRiMjl5WkhOVWIwRmpkR2x2Ym5Nb1kyOXZjbVJ6S1NCN1hHNGdJR3hsZENCaFkzUnBiMjV6SUQwZ1cxMDdYRzRnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1kyOXZjbVJ6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCNExDQjVJSDBnUFNCamIyOXlaSE5iYVYwN1hHNGdJQ0FnWVdOMGFXOXVjMXRwWFNBOUlHTnZiWEJ2YzJsMFpTaDdYRzRnSUNBZ0lDQjRPaUIyWVd4MVpTaDRLU3hjYmlBZ0lDQWdJSGs2SUhaaGJIVmxLSGtwWEc0Z0lDQWdmU2s3WEc0Z0lIMWNiaUFnY21WMGRYSnVJR0ZqZEdsdmJuTTdYRzU5WEc1Y2JtWjFibU4wYVc5dUlIVndaR0YwWlVGamRHbHZibGRwZEdoVWIzVmphR1Z6S0hSdmRXTm9aWE1zSUc1bGQxUnZkV05vWlhNcElIdGNiaUFnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdVpYZFViM1ZqYUdWekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QjRMQ0I1SUgwZ1BTQnVaWGRVYjNWamFHVnpXMmxkTzF4dUlDQWdJR052Ym5OMElIUnZkV05vUVdOMGFXOXVjeUE5SUhSdmRXTm9aWE11WjJWMFEyaHBiR1J5Wlc0b0tUdGNiaUFnSUNCamIyNXpkQ0IwYjNWamFFRmpkR2x2YmlBOUlIUnZkV05vUVdOMGFXOXVjMXRwWFR0Y2JpQWdJQ0JwWmlBb2RHOTFZMmhCWTNScGIyNGdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ2RHOTFZMmhCWTNScGIyNHVlQzV6WlhRb2VDazdYRzRnSUNBZ0lDQjBiM1ZqYUVGamRHbHZiaTU1TG5ObGRDaDVLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2RHOTFZMmhsY3k1aFpHUkJZM1JwYjI0b1kyOXRjRzl6YVhSbEtIdGNiaUFnSUNBZ0lDQWdlRG9nZG1Gc2RXVW9lQ2tzWEc0Z0lDQWdJQ0FnSUhrNklIWmhiSFZsS0hrcFhHNGdJQ0FnSUNCOUtTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNibU52Ym5OMElHMXZkWE5sUlhabGJuUlViMVJ2ZFdOb1pYTWdQU0FvZXlCd1lXZGxXQ3dnY0dGblpWa2dmU2tnUFQ0Z1czc2dlRG9nY0dGblpWZ3NJSGs2SUhCaFoyVlpJSDFkTzF4dVkyOXVjM1FnZEc5MVkyaEZkbVZ1ZEZSdlZHOTFZMmhsY3lBOUlDaDdJSFJ2ZFdOb1pYTWdmU2tnUFQ0Z1pYaDBjbUZqZEVOdmIzSmtjeWgwYjNWamFHVnpLVHRjYmx4dVpuVnVZM1JwYjI0Z1pYaDBjbUZqZEVOdmIzSmtjeWgwYjNWamFHVnpLU0I3WEc0Z0lHeGxkQ0JqYjI5eVpITWdQU0JiWFR0Y2JpQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0IwYjNWamFHVnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJqYkdsbGJuUllMQ0JqYkdsbGJuUlpJSDBnUFNCMGIzVmphR1Z6VzJsZE8xeHVJQ0FnSUdOdmIzSmtjMXRwWFNBOUlIdGNiaUFnSUNBZ0lIZzZJR05zYVdWdWRGZ3NYRzRnSUNBZ0lDQjVPaUJqYkdsbGJuUlpYRzRnSUNBZ2ZUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z1kyOXZjbVJ6TzF4dWZWeHVYRzVqYjI1emRDQm5aWFJPWVhScGRtVkZkbVZ1ZENBOUlDaGxLU0E5UGlCbExtOXlhV2RwYm1Gc1JYWmxiblFnZkh3Z1pTNXVZWFJwZG1WRmRtVnVkQ0I4ZkNCbE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9aU3dnY0hKdmNITXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2JtRjBhWFpsUlhabGJuUWdQU0JuWlhST1lYUnBkbVZGZG1WdWRDaGxLVHRjYmlBZ2NtVjBkWEp1SUNodVlYUnBkbVZGZG1WdWRDNTBiM1ZqYUdWektTQS9YRzRnSUNBZ1kzSmxZWFJsVkc5MVkyaGxjeWgwYjNWamFFVjJaVzUwVkc5VWIzVmphR1Z6S0dVcExDQjdYRzRnSUNBZ0lDQnRiM1psUlhabGJuUTZJQ2QwYjNWamFHMXZkbVVuTEZ4dUlDQWdJQ0FnWlhabGJuUlViMVJ2ZFdOb1pYTTZJSFJ2ZFdOb1JYWmxiblJVYjFSdmRXTm9aWE1zWEc0Z0lDQWdJQ0F1TGk1d2NtOXdjMXh1SUNBZ0lIMHBJRHBjYmlBZ0lDQmpjbVZoZEdWVWIzVmphR1Z6S0cxdmRYTmxSWFpsYm5SVWIxUnZkV05vWlhNb1pTa3NJSHRjYmlBZ0lDQWdJRzF2ZG1WRmRtVnVkRG9nSjIxdmRYTmxiVzkyWlNjc1hHNGdJQ0FnSUNCbGRtVnVkRlJ2Vkc5MVkyaGxjem9nYlc5MWMyVkZkbVZ1ZEZSdlZHOTFZMmhsY3l4Y2JpQWdJQ0FnSUM0dUxuQnliM0J6WEc0Z0lDQWdmU2s3WEc1OU8xeHVJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWN0aW9ucy90b3VjaGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL2luYy90cmFuc2Zvcm1lcnMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVHJhY2tPZmZzZXQgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVHJhY2tPZmZzZXQsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFRyYWNrT2Zmc2V0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFja09mZnNldCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFRyYWNrT2Zmc2V0LnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgYWN0aW9uID0gdGhpcy5wcm9wcy5hY3Rpb247XG5cbiAgICB0aGlzLmFwcGx5T2Zmc2V0ID0gKDAsIF90cmFuc2Zvcm1lcnMuYXBwbHlPZmZzZXQpKGFjdGlvbi5nZXQoKSwgdGhpcy5jdXJyZW50KTtcbiAgfTtcblxuICBUcmFja09mZnNldC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBhY3Rpb24gPSB0aGlzLnByb3BzLmFjdGlvbjtcblxuICAgIHJldHVybiB0aGlzLmFwcGx5T2Zmc2V0KGFjdGlvbi5nZXQoKSk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYWNrT2Zmc2V0O1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbiwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBUcmFja09mZnNldChfZXh0ZW5kcyh7IGFjdGlvbjogYWN0aW9uIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzUnlZV05yTFc5bVpuTmxkQzVxY3lKZExDSnVZVzFsY3lJNld5SlVjbUZqYTA5bVpuTmxkQ0lzSW05dVUzUmhjblFpTENKaFkzUnBiMjRpTENKd2NtOXdjeUlzSW1Gd2NHeDVUMlptYzJWMElpd2laMlYwSWl3aVkzVnljbVZ1ZENJc0luVndaR0YwWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3pzN096czdPenRKUVVWTlFTeFhPenM3T3pzN096czdkMEpCUTBwRExFOHNjMEpCUVZVN1FVRkJRU3hSUVVOQlF5eE5RVVJCTEVkQlExY3NTMEZCUzBNc1MwRkVhRUlzUTBGRFFVUXNUVUZFUVRzN1FVRkZVaXhUUVVGTFJTeFhRVUZNTEVkQlFXMUNMQ3RDUVVGWlJpeFBRVUZQUnl4SFFVRlFMRVZCUVZvc1JVRkJNRUlzUzBGQlMwTXNUMEZCTDBJc1EwRkJia0k3UVVGRFJDeEhPenQzUWtGRlJFTXNUU3h4UWtGQlV6dEJRVUZCTEZGQlEwTk1MRTFCUkVRc1IwRkRXU3hMUVVGTFF5eExRVVJxUWl4RFFVTkRSQ3hOUVVSRU96dEJRVVZRTEZkQlFVOHNTMEZCUzBVc1YwRkJUQ3hEUVVGcFFrWXNUMEZCVDBjc1IwRkJVQ3hGUVVGcVFpeERRVUZRTzBGQlEwUXNSenM3T3pzN2EwSkJSMWtzVlVGQlEwZ3NUVUZCUkN4RlFVRlRReXhMUVVGVU8wRkJRVUVzVTBGQmJVSXNTVUZCU1Vnc1YwRkJTaXhaUVVGclFrVXNZMEZCYkVJc1NVRkJOa0pETEV0QlFUZENMRVZCUVc1Q08wRkJRVUVzUXlJc0ltWnBiR1VpT2lKMGNtRmpheTF2Wm1aelpYUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk12WjJsMGFIVmlMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1YVcxd2IzSjBJSHNnWVhCd2JIbFBabVp6WlhRZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZEhKaGJuTm1iM0p0WlhKekp6dGNibHh1WTJ4aGMzTWdWSEpoWTJ0UFptWnpaWFFnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCdmJsTjBZWEowS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWVdOMGFXOXVJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUhSb2FYTXVZWEJ3YkhsUFptWnpaWFFnUFNCaGNIQnNlVTltWm5ObGRDaGhZM1JwYjI0dVoyVjBLQ2tzSUhSb2FYTXVZM1Z5Y21WdWRDazdYRzRnSUgxY2JseHVJQ0IxY0dSaGRHVW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmhZM1JwYjI0Z2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WVhCd2JIbFBabVp6WlhRb1lXTjBhVzl1TG1kbGRDZ3BLVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWVdOMGFXOXVMQ0J3Y205d2N5a2dQVDRnYm1WM0lGUnlZV05yVDJabWMyVjBLSHNnWVdOMGFXOXVMQ0F1TGk1d2NtOXdjeUI5S1R0Y2JpSmRmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYWN0aW9ucy90cmFjay1vZmZzZXQuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NoYWluID0gcmVxdWlyZSgnLi9jaGFpbicpO1xuXG52YXIgX2NoYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoYWluKTtcblxudmFyIF9wYXJhbGxlbCA9IHJlcXVpcmUoJy4vcGFyYWxsZWwnKTtcblxudmFyIF9wYXJhbGxlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJhbGxlbCk7XG5cbnZhciBfZGVsYXkgPSByZXF1aXJlKCcuL2RlbGF5Jyk7XG5cbnZhciBfZGVsYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVsYXkpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBwYXJhbGxlbCBBY3Rpb24gY29tcG9zZWQgb2YgY2hhaW5lZFxuICogZGVsYXkgYW5kIGFjdGlvbnMuIEludGVydmFsIGNhbiBiZSBlaXRoZXIgYSBudW1iZXJcbiAqIHRvIG11bHRpcGx5IGJ5IGBpYCBvciBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBwcm92aWRlZCBgaWBcbiAqXG4gKiBTdHJhaWdodCBjcmliYmVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9ibG9iLzI0YzcyZjUxM2U0OGYwYmRjNDA4MjBiNDMyNjIzMjhmZTJjMzAxZDQvTGlicmFyaWVzL0FuaW1hdGVkL3NyYy9BbmltYXRlZEltcGxlbWVudGF0aW9uLmpzI0wyMDMxXG4gKiBeIFRoaXMgZnVuY3Rpb24gc29sZCBhIHByZXZpb3VzbHktY29uZmxpY3RlZCBtZSBvbiB0aGUgbWVyaXQgb2YgbW92aW5nIGZyb21cbiAqIGpRdWVyeS1zdHlsZSBtdWx0aS1wcm9wZXJ0eSBhbmltYXRpb25zIHRvIHNpbmdsZS1wcm9wZXJ0eS5cbiAqIEBwYXJhbSAge2FycmF5fSBhY3Rpb25zXG4gKiBAcGFyYW0gIHtmdW5jdGlvbiB8IG51bWJlcn0gaW50ZXJ2YWxcbiAqIEByZXR1cm4ge0FjdGlvbn1cbiAqL1xuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMsIGludGVydmFsLCBvbkNvbXBsZXRlKSB7XG4gIHZhciBpbnRlcnZhbElzRnVuY3Rpb24gPSAoMCwgX3V0aWxzLmlzRnVuYykoaW50ZXJ2YWwpO1xuXG4gIHJldHVybiAoMCwgX3BhcmFsbGVsMi5kZWZhdWx0KShhY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uLCBpKSB7XG4gICAgdmFyIHRpbWVUb0RlbGF5ID0gaW50ZXJ2YWxJc0Z1bmN0aW9uID8gaW50ZXJ2YWwoaSkgOiBpICogaW50ZXJ2YWw7XG4gICAgcmV0dXJuICgwLCBfY2hhaW4yLmRlZmF1bHQpKFsoMCwgX2RlbGF5Mi5kZWZhdWx0KSh0aW1lVG9EZWxheSksIGFjdGlvbl0pO1xuICB9KSwgeyBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM04wWVdkblpYSXVhbk1pWFN3aWJtRnRaWE1pT2xzaVlXTjBhVzl1Y3lJc0ltbHVkR1Z5ZG1Gc0lpd2liMjVEYjIxd2JHVjBaU0lzSW1sdWRHVnlkbUZzU1hOR2RXNWpkR2x2YmlJc0ltMWhjQ0lzSW1GamRHbHZiaUlzSW1raUxDSjBhVzFsVkc5RVpXeGhlU0pkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJSVUU3T3pzN096czdPenM3T3p0clFrRlpaU3hWUVVGRFFTeFBRVUZFTEVWQlFWVkRMRkZCUVZZc1JVRkJiMEpETEZWQlFYQkNMRVZCUVcxRE8wRkJRMmhFTEUxQlFVMURMSEZDUVVGeFFpeHRRa0ZCVDBZc1VVRkJVQ3hEUVVFelFqczdRVUZGUVN4VFFVRlBMSGRDUVVGVFJDeFJRVUZSU1N4SFFVRlNMRU5CUVZrc1ZVRkJRME1zVFVGQlJDeEZRVUZUUXl4RFFVRlVMRVZCUVdVN1FVRkRla01zVVVGQlRVTXNZMEZCWlVvc2EwSkJRVVFzUjBGQmRVSkdMRk5CUVZOTExFTkJRVlFzUTBGQmRrSXNSMEZCY1VOQkxFbEJRVWxNTEZGQlFUZEVPMEZCUTBFc1YwRkJUeXh4UWtGQlRTeERRVU5ZTEhGQ1FVRk5UU3hYUVVGT0xFTkJSRmNzUlVGRldFWXNUVUZHVnl4RFFVRk9MRU5CUVZBN1FVRkpSQ3hIUVU1bExFTkJRVlFzUlVGTlNDeEZRVUZGU0N4elFrRkJSaXhGUVU1SExFTkJRVkE3UVVGUFJDeERJaXdpWm1sc1pTSTZJbk4wWVdkblpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk12WjJsMGFIVmlMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JqYUdGcGJpQm1jbTl0SUNjdUwyTm9ZV2x1Snp0Y2JtbHRjRzl5ZENCd1lYSmhiR3hsYkNCbWNtOXRJQ2N1TDNCaGNtRnNiR1ZzSnp0Y2JtbHRjRzl5ZENCa1pXeGhlU0JtY205dElDY3VMMlJsYkdGNUp6dGNibWx0Y0c5eWRDQjdJR2x6Um5WdVl5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JpOHFLbHh1SUNvZ1EzSmxZWFJsY3lCaElHNWxkeUJ3WVhKaGJHeGxiQ0JCWTNScGIyNGdZMjl0Y0c5elpXUWdiMllnWTJoaGFXNWxaRnh1SUNvZ1pHVnNZWGtnWVc1a0lHRmpkR2x2Ym5NdUlFbHVkR1Z5ZG1Gc0lHTmhiaUJpWlNCbGFYUm9aWElnWVNCdWRXMWlaWEpjYmlBcUlIUnZJRzExYkhScGNHeDVJR0o1SUdCcFlDQnZjaUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdkMmxzYkNCaVpTQndjbTkyYVdSbFpDQmdhV0JjYmlBcVhHNGdLaUJUZEhKaGFXZG9kQ0JqY21saVltVmtJR1p5YjIwZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyWmhZMlZpYjI5ckwzSmxZV04wTFc1aGRHbDJaUzlpYkc5aUx6STBZemN5WmpVeE0yVTBPR1l3WW1Sak5EQTRNakJpTkRNeU5qSXpNamhtWlRKak16QXhaRFF2VEdsaWNtRnlhV1Z6TDBGdWFXMWhkR1ZrTDNOeVl5OUJibWx0WVhSbFpFbHRjR3hsYldWdWRHRjBhVzl1TG1wekkwd3lNRE14WEc0Z0tpQmVJRlJvYVhNZ1puVnVZM1JwYjI0Z2MyOXNaQ0JoSUhCeVpYWnBiM1Z6YkhrdFkyOXVabXhwWTNSbFpDQnRaU0J2YmlCMGFHVWdiV1Z5YVhRZ2IyWWdiVzkyYVc1bklHWnliMjFjYmlBcUlHcFJkV1Z5ZVMxemRIbHNaU0J0ZFd4MGFTMXdjbTl3WlhKMGVTQmhibWx0WVhScGIyNXpJSFJ2SUhOcGJtZHNaUzF3Y205d1pYSjBlUzVjYmlBcUlFQndZWEpoYlNBZ2UyRnljbUY1ZlNCaFkzUnBiMjV6WEc0Z0tpQkFjR0Z5WVcwZ0lIdG1kVzVqZEdsdmJpQjhJRzUxYldKbGNuMGdhVzUwWlhKMllXeGNiaUFxSUVCeVpYUjFjbTRnZTBGamRHbHZibjFjYmlBcUwxeHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHRmpkR2x2Ym5Nc0lHbHVkR1Z5ZG1Gc0xDQnZia052YlhCc1pYUmxLU0E5UGlCN1hHNGdJR052Ym5OMElHbHVkR1Z5ZG1Gc1NYTkdkVzVqZEdsdmJpQTlJR2x6Um5WdVl5aHBiblJsY25aaGJDazdYRzVjYmlBZ2NtVjBkWEp1SUhCaGNtRnNiR1ZzS0dGamRHbHZibk11YldGd0tDaGhZM1JwYjI0c0lHa3BJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQjBhVzFsVkc5RVpXeGhlU0E5SUNocGJuUmxjblpoYkVselJuVnVZM1JwYjI0cElEOGdhVzUwWlhKMllXd29hU2tnT2lCcElDb2dhVzUwWlhKMllXdzdYRzRnSUNBZ2NtVjBkWEp1SUdOb1lXbHVLRnRjYmlBZ0lDQWdJR1JsYkdGNUtIUnBiV1ZVYjBSbGJHRjVLU3hjYmlBZ0lDQWdJR0ZqZEdsdmJseHVJQ0FnSUYwcE8xeHVJQ0I5S1N3Z2V5QnZia052YlhCc1pYUmxJSDBwTzF4dWZUdGNiaUpkZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FjdGlvbnMvc3RhZ2dlci5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgY2xvc2VkLWZvcm0gZGFtcGVkIGhhcm1vbmljIG9zY2lsbGF0aW5nIHNwcmluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3IsIHNwcmluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIGEgZGlyZWN0IHBvcnQgb2YgQWRhbSBNaXNraWV3aWN6J3MgKEBza2V2eSkgUmVhY3QgQW5pbWF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUFIgIzE1MzIyIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNTMyMi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaW5nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNzOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbXBpbmc6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0aWZmbmVzczogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRhbSBNaXNraWV3aWN6OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAc2tldnkgKHR3aXR0ZXIuY29tL3NrZXZ5LCBnaXRodWIuY29tL3NrZXZ5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblxudmFyIFNwcmluZyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhTcHJpbmcsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFNwcmluZygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3ByaW5nKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgU3ByaW5nLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgdmVsb2NpdHkgPSBfcHJvcHMudmVsb2NpdHksXG4gICAgICAgIHRvID0gX3Byb3BzLnRvLFxuICAgICAgICBmcm9tID0gX3Byb3BzLmZyb207XG5cbiAgICB0aGlzLnQgPSAwO1xuICAgIHRoaXMuaW5pdGlhbFZlbG9jaXR5ID0gdmVsb2NpdHkgPyB2ZWxvY2l0eSAvIDEwMDAgOiAwLjA7XG4gICAgdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgdGhpcy5kZWx0YSA9IHRvIC0gZnJvbTtcbiAgfTtcblxuICBTcHJpbmcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIHN0aWZmbmVzcyA9IF9wcm9wczIuc3RpZmZuZXNzLFxuICAgICAgICBkYW1waW5nID0gX3Byb3BzMi5kYW1waW5nLFxuICAgICAgICBtYXNzID0gX3Byb3BzMi5tYXNzLFxuICAgICAgICBmcm9tID0gX3Byb3BzMi5mcm9tLFxuICAgICAgICB0byA9IF9wcm9wczIudG8sXG4gICAgICAgIHJlc3RTcGVlZCA9IF9wcm9wczIucmVzdFNwZWVkLFxuICAgICAgICByZXN0RGlzcGxhY2VtZW50ID0gX3Byb3BzMi5yZXN0RGlzcGxhY2VtZW50O1xuICAgIHZhciBkZWx0YSA9IHRoaXMuZGVsdGEsXG4gICAgICAgIGluaXRpYWxWZWxvY2l0eSA9IHRoaXMuaW5pdGlhbFZlbG9jaXR5O1xuXG5cbiAgICB2YXIgdGltZURlbHRhID0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpIC8gMTAwMDtcbiAgICB2YXIgdCA9IHRoaXMudCA9IHRoaXMudCArIHRpbWVEZWx0YTtcblxuICAgIHZhciBkYW1waW5nUmF0aW8gPSBkYW1waW5nIC8gKDIgKiBNYXRoLnNxcnQoc3RpZmZuZXNzICogbWFzcykpO1xuICAgIHZhciBhbmd1bGFyRnJlcSA9IE1hdGguc3FydChzdGlmZm5lc3MgLyBtYXNzKTtcbiAgICB2YXIgZXhwb0RlY2F5ID0gYW5ndWxhckZyZXEgKiBNYXRoLnNxcnQoMS4wIC0gZGFtcGluZ1JhdGlvICogZGFtcGluZ1JhdGlvKTtcblxuICAgIHZhciB4MCA9IDE7XG4gICAgdmFyIG9zY2lsbGF0aW9uID0gMC4wO1xuXG4gICAgLy8gVW5kZXJkYW1wZWRcbiAgICBpZiAoZGFtcGluZ1JhdGlvIDwgMSkge1xuICAgICAgdmFyIGVudmVsb3BlID0gTWF0aC5leHAoLWRhbXBpbmdSYXRpbyAqIGFuZ3VsYXJGcmVxICogdCk7XG4gICAgICBvc2NpbGxhdGlvbiA9IGVudmVsb3BlICogKChpbml0aWFsVmVsb2NpdHkgKyBkYW1waW5nUmF0aW8gKiBhbmd1bGFyRnJlcSAqIHgwKSAvIGV4cG9EZWNheSAqIE1hdGguc2luKGV4cG9EZWNheSAqIHQpICsgeDAgKiBNYXRoLmNvcyhleHBvRGVjYXkgKiB0KSk7XG4gICAgICB0aGlzLnZlbG9jaXR5ID0gZW52ZWxvcGUgKiAoTWF0aC5jb3MoZXhwb0RlY2F5ICogdCkgKiAoaW5pdGlhbFZlbG9jaXR5ICsgZGFtcGluZ1JhdGlvICogYW5ndWxhckZyZXEgKiB4MCkgLSBleHBvRGVjYXkgKiB4MCAqIE1hdGguc2luKGV4cG9EZWNheSAqIHQpKSAtIGRhbXBpbmdSYXRpbyAqIGFuZ3VsYXJGcmVxICogZW52ZWxvcGUgKiAoTWF0aC5zaW4oZXhwb0RlY2F5ICogdCkgKiAoaW5pdGlhbFZlbG9jaXR5ICsgZGFtcGluZ1JhdGlvICogYW5ndWxhckZyZXEgKiB4MCkgLyBleHBvRGVjYXkgKyB4MCAqIE1hdGguY29zKGV4cG9EZWNheSAqIHQpKTtcblxuICAgICAgLy8gQ3JpdGljYWxseSBkYW1wZWRcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9lbnZlbG9wZSA9IE1hdGguZXhwKC1hbmd1bGFyRnJlcSAqIHQpO1xuICAgICAgb3NjaWxsYXRpb24gPSBfZW52ZWxvcGUgKiAoeDAgKyAoaW5pdGlhbFZlbG9jaXR5ICsgYW5ndWxhckZyZXEgKiB4MCkgKiB0KTtcbiAgICAgIHRoaXMudmVsb2NpdHkgPSBfZW52ZWxvcGUgKiAodCAqIGluaXRpYWxWZWxvY2l0eSAqIGFuZ3VsYXJGcmVxIC0gdCAqIHgwICogKGFuZ3VsYXJGcmVxICogYW5ndWxhckZyZXEpICsgaW5pdGlhbFZlbG9jaXR5KTtcbiAgICB9XG5cbiAgICB2YXIgZnJhY3Rpb24gPSAxIC0gb3NjaWxsYXRpb247XG4gICAgdmFyIHBvc2l0aW9uID0gZnJvbSArIGZyYWN0aW9uICogZGVsdGE7XG5cbiAgICAvLyBDaGVjayBpZiBzaW11bGF0aW9uIGlzIGNvbXBsZXRlXG4gICAgLy8gV2UgZG8gdGhpcyBoZXJlIGluc3RlYWQgb2YgYGlzQWN0aW9uQ29tcGxldGVgIGFzIGl0IGFsbG93cyB1c1xuICAgIC8vIHRvIGNsYW1wIHRvIGVuZCBkdXJpbmcgdXBkYXRlKVxuICAgIHZhciBpc0JlbG93VmVsb2NpdHlUaHJlc2hvbGQgPSBNYXRoLmFicyh0aGlzLnZlbG9jaXR5KSA8PSByZXN0U3BlZWQ7XG4gICAgdmFyIGlzQmVsb3dEaXNwbGFjZW1lbnRUaHJlc2hvbGQgPSBNYXRoLmFicyh0byAtIHBvc2l0aW9uKSA8PSByZXN0RGlzcGxhY2VtZW50O1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQmVsb3dWZWxvY2l0eVRocmVzaG9sZCAmJiBpc0JlbG93RGlzcGxhY2VtZW50VGhyZXNob2xkO1xuXG4gICAgaWYgKHRoaXMuaXNDb21wbGV0ZSkge1xuICAgICAgcG9zaXRpb24gPSB0bztcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH07XG5cbiAgU3ByaW5nLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICB9O1xuXG4gIHJldHVybiBTcHJpbmc7XG59KF8yLmRlZmF1bHQpO1xuXG5TcHJpbmcuZGVmYXVsdFByb3BzID0ge1xuICBzdGlmZm5lc3M6IDEwMCxcbiAgZGFtcGluZzogMTAsXG4gIG1hc3M6IDEuMCxcbiAgdmVsb2NpdHk6IDAuMCxcbiAgZnJvbTogMC4wLFxuICB0bzogMC4wLFxuICByZXN0U3BlZWQ6IDAuMDEsXG4gIHJlc3REaXNwbGFjZW1lbnQ6IDAuMDFcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IFNwcmluZyhwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzTndjbWx1Wnk1cWN5SmRMQ0p1WVcxbGN5STZXeUpUY0hKcGJtY2lMQ0p2YmxOMFlYSjBJaXdpY0hKdmNITWlMQ0oyWld4dlkybDBlU0lzSW5Sdklpd2labkp2YlNJc0luUWlMQ0pwYm1sMGFXRnNWbVZzYjJOcGRIa2lMQ0pwYzBOdmJYQnNaWFJsSWl3aVpHVnNkR0VpTENKMWNHUmhkR1VpTENKemRHbG1abTVsYzNNaUxDSmtZVzF3YVc1bklpd2liV0Z6Y3lJc0luSmxjM1JUY0dWbFpDSXNJbkpsYzNSRWFYTndiR0ZqWlcxbGJuUWlMQ0owYVcxbFJHVnNkR0VpTENKa1lXMXdhVzVuVW1GMGFXOGlMQ0pOWVhSb0lpd2ljM0Z5ZENJc0ltRnVaM1ZzWVhKR2NtVnhJaXdpWlhod2IwUmxZMkY1SWl3aWVEQWlMQ0p2YzJOcGJHeGhkR2x2YmlJc0ltVnVkbVZzYjNCbElpd2laWGh3SWl3aWMybHVJaXdpWTI5eklpd2labkpoWTNScGIyNGlMQ0p3YjNOcGRHbHZiaUlzSW1selFtVnNiM2RXWld4dlkybDBlVlJvY21WemFHOXNaQ0lzSW1GaWN5SXNJbWx6UW1Wc2IzZEVhWE53YkdGalpXMWxiblJVYUhKbGMyaHZiR1FpTENKcGMwRmpkR2x2YmtOdmJYQnNaWFJsSWl3aVpHVm1ZWFZzZEZCeWIzQnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCYlVKQk96czdPMEZCUTBFN096czdPenM3T3l0bFFYQkNRVHM3T3pzN096czdPenM3T3pzN096czdPenM3TzBsQmMwSk5RU3hOT3pzN096czdPenM3YlVKQldVcERMRThzYzBKQlFWVTdRVUZCUVN4cFFrRkRkVUlzUzBGQlMwTXNTMEZFTlVJN1FVRkJRU3hSUVVOQlF5eFJRVVJCTEZWQlEwRkJMRkZCUkVFN1FVRkJRU3hSUVVOVlF5eEZRVVJXTEZWQlExVkJMRVZCUkZZN1FVRkJRU3hSUVVOalF5eEpRVVJrTEZWQlEyTkJMRWxCUkdRN08wRkJSVklzVTBGQlMwTXNRMEZCVEN4SFFVRlRMRU5CUVZRN1FVRkRRU3hUUVVGTFF5eGxRVUZNTEVkQlFYVkNTaXhYUVVGWFFTeFhRVUZYTEVsQlFYUkNMRWRCUVRaQ0xFZEJRWEJFTzBGQlEwRXNVMEZCUzBzc1ZVRkJUQ3hIUVVGclFpeExRVUZzUWp0QlFVTkJMRk5CUVV0RExFdEJRVXdzUjBGQllVd3NTMEZCUzBNc1NVRkJiRUk3UVVGRFJDeEhPenR0UWtGRlJFc3NUU3h4UWtGQlV6dEJRVUZCTEd0Q1FVTnhSU3hMUVVGTFVpeExRVVF4UlR0QlFVRkJMRkZCUTBOVExGTkJSRVFzVjBGRFEwRXNVMEZFUkR0QlFVRkJMRkZCUTFsRExFOUJSRm9zVjBGRFdVRXNUMEZFV2p0QlFVRkJMRkZCUTNGQ1F5eEpRVVJ5UWl4WFFVTnhRa0VzU1VGRWNrSTdRVUZCUVN4UlFVTXlRbElzU1VGRU0wSXNWMEZETWtKQkxFbEJSRE5DTzBGQlFVRXNVVUZEYVVORUxFVkJSR3BETEZkQlEybERRU3hGUVVScVF6dEJRVUZCTEZGQlEzRkRWU3hUUVVSeVF5eFhRVU54UTBFc1UwRkVja003UVVGQlFTeFJRVU5uUkVNc1owSkJSR2hFTEZkQlEyZEVRU3huUWtGRWFFUTdRVUZCUVN4UlFVVkRUaXhMUVVaRUxFZEJSVFJDTEVsQlJqVkNMRU5CUlVOQkxFdEJSa1E3UVVGQlFTeFJRVVZSUml4bFFVWlNMRWRCUlRSQ0xFbEJSalZDTEVOQlJWRkJMR1ZCUmxJN096dEJRVWxRTEZGQlFVMVRMRmxCUVZrc2RVTkJRWFZDTEVsQlFYcERPMEZCUTBFc1VVRkJUVllzU1VGQlNTeExRVUZMUVN4RFFVRk1MRWRCUVZNc1MwRkJTMEVzUTBGQlRDeEhRVUZUVlN4VFFVRTFRanM3UVVGRlFTeFJRVUZOUXl4bFFVRmxUQ3hYUVVGWExFbEJRVWxOTEV0QlFVdERMRWxCUVV3c1EwRkJWVklzV1VGQldVVXNTVUZCZEVJc1EwRkJaaXhEUVVGeVFqdEJRVU5CTEZGQlFVMVBMR05CUVdOR0xFdEJRVXRETEVsQlFVd3NRMEZCVlZJc1dVRkJXVVVzU1VGQmRFSXNRMEZCY0VJN1FVRkRRU3hSUVVGTlVTeFpRVUZaUkN4alFVRmpSaXhMUVVGTFF5eEpRVUZNTEVOQlFWVXNUVUZCVDBZc1pVRkJaVUVzV1VGQmFFTXNRMEZCYUVNN08wRkJSVUVzVVVGQlRVc3NTMEZCU3l4RFFVRllPMEZCUTBFc1VVRkJTVU1zWTBGQll5eEhRVUZzUWpzN1FVRkZRVHRCUVVOQkxGRkJRVWxPTEdWQlFXVXNRMEZCYmtJc1JVRkJjMEk3UVVGRGNFSXNWVUZCVFU4c1YwRkJWMDRzUzBGQlMwOHNSMEZCVEN4RFFVRlRMRU5CUVVOU0xGbEJRVVFzUjBGQlowSkhMRmRCUVdoQ0xFZEJRVGhDWkN4RFFVRjJReXhEUVVGcVFqdEJRVU5CYVVJc2IwSkJRV05ETEZsQlFXRXNRMEZCUTJwQ0xHdENRVUZyUWxVc1pVRkJaVWNzVjBGQlppeEhRVUUyUWtVc1JVRkJhRVFzU1VGQmMwUkVMRk5CUVhaRUxFZEJRVzlGU0N4TFFVRkxVU3hIUVVGTUxFTkJRVk5NTEZsQlFWbG1MRU5CUVhKQ0xFTkJRWEJGTEVkQlFTdEdaMElzUzBGQlMwb3NTMEZCUzFNc1IwRkJUQ3hEUVVGVFRpeFpRVUZaWml4RFFVRnlRaXhEUVVGb1NDeERRVUZrTzBGQlEwRXNWMEZCUzBnc1VVRkJUQ3hIUVVGcFFuRkNMRmxCUVdGT0xFdEJRVXRUTEVkQlFVd3NRMEZCVTA0c1dVRkJXV1lzUTBGQmNrSXNTMEZCTWtKRExHdENRVUZyUWxVc1pVRkJaVWNzVjBGQlppeEhRVUUyUWtVc1JVRkJNVVVzUTBGQlJDeEhRVUZ0UmtRc1dVRkJXVU1zUlVGQldpeEhRVUZwUWtvc1MwRkJTMUVzUjBGQlRDeERRVUZUVEN4WlFVRlpaaXhEUVVGeVFpeERRVUZvU0N4SlFVTmlWeXhsUVVGbFJ5eFhRVUZtTEVkQlFUWkNTU3hSUVVFNVFpeEpRVUU0UTA0c1MwRkJTMUVzUjBGQlRDeERRVUZUVEN4WlFVRlpaaXhEUVVGeVFpeExRVUV5UWtNc2EwSkJRV3RDVlN4bFFVRmxSeXhYUVVGbUxFZEJRVFpDUlN4RlFVRXhSU3hEUVVGR0xFZEJRWEZHUkN4VFFVRjBSaXhIUVVGdlIwTXNTMEZCUzBvc1MwRkJTMU1zUjBGQlRDeERRVUZUVGl4WlFVRlpaaXhEUVVGeVFpeERRVUZ3U2l4RFFVUklPenRCUVVkR08wRkJRME1zUzBGUVJDeE5RVTlQTzBGQlEwd3NWVUZCVFd0Q0xGbEJRVmRPTEV0QlFVdFBMRWRCUVV3c1EwRkJVeXhEUVVGRFRDeFhRVUZFTEVkQlFXVmtMRU5CUVhoQ0xFTkJRV3BDTzBGQlEwRnBRaXh2UWtGQlkwTXNZVUZCV1VZc1MwRkJTeXhEUVVGRFppeHJRa0ZCYlVKaExHTkJRV05GTEVWQlFXeERMRWxCUVhsRGFFSXNRMEZCTVVRc1EwRkJaRHRCUVVOQkxGZEJRVXRJTEZGQlFVd3NSMEZCWjBKeFFpeGhRVUZoYkVJc1NVRkJTVU1zWlVGQlNpeEhRVUZ6UW1Fc1YwRkJka0lzUjBGQmRVTmtMRWxCUVVsblFpeEZRVUZLTEVsQlFWVkdMR05CUVdOQkxGZEJRWGhDTEVOQlFYWkRMRWRCUVN0RllpeGxRVUV6Uml4RFFVRm9RanRCUVVORU96dEJRVVZFTEZGQlFVMXhRaXhYUVVGWExFbEJRVWxNTEZkQlFYSkNPMEZCUTBFc1VVRkJTVTBzVjBGQlYzaENMRTlCUVU5MVFpeFhRVUZYYmtJc1MwRkJha003TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1VVRkJUWEZDTERKQ1FVRXlRbG9zUzBGQlMyRXNSMEZCVEN4RFFVRlRMRXRCUVVzMVFpeFJRVUZrTEV0QlFUSkNWeXhUUVVFMVJEdEJRVU5CTEZGQlFVMXJRaXdyUWtGQkswSmtMRXRCUVV0aExFZEJRVXdzUTBGQlV6TkNMRXRCUVV0NVFpeFJRVUZrTEV0QlFUSkNaQ3huUWtGQmFFVTdRVUZEUVN4VFFVRkxVQ3hWUVVGTUxFZEJRV3RDYzBJc05FSkJRVFJDUlN3MFFrRkJPVU03TzBGQlJVRXNVVUZCU1N4TFFVRkxlRUlzVlVGQlZDeEZRVUZ4UWp0QlFVTnVRbkZDTEdsQ1FVRlhla0lzUlVGQldEdEJRVU5FT3p0QlFVVkVMRmRCUVU5NVFpeFJRVUZRTzBGQlEwUXNSenM3YlVKQlJVUkpMR2RDTEN0Q1FVRnRRanRCUVVOcVFpeFhRVUZQTEV0QlFVdDZRaXhWUVVGYU8wRkJRMFFzUnpzN096czdRVUZ1UlVkU0xFMHNRMEZEUjJ0RExGa3NSMEZCWlR0QlFVTndRblpDTEdGQlFWY3NSMEZFVXp0QlFVVndRa01zVjBGQlV5eEZRVVpYTzBGQlIzQkNReXhSUVVGTkxFZEJTR003UVVGSmNFSldMRmxCUVZVc1IwRktWVHRCUVV0d1FrVXNVVUZCVFN4SFFVeGpPMEZCVFhCQ1JDeE5RVUZKTEVkQlRtZENPMEZCVDNCQ1ZTeGhRVUZYTEVsQlVGTTdRVUZSY0VKRExHOUNRVUZyUWp0QlFWSkZMRU03TzJ0Q1FYRkZWQ3hWUVVGRFlpeExRVUZFTzBGQlFVRXNVMEZCVnl4SlFVRkpSaXhOUVVGS0xFTkJRVmRGTEV0QlFWZ3NRMEZCV0R0QlFVRkJMRU1pTENKbWFXeGxJam9pYzNCeWFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWEp6TDJkcGRHaDFZaTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0JVYUdVZ1kyeHZjMlZrTFdadmNtMGdaR0Z0Y0dWa0lHaGhjbTF2Ym1saklHOXpZMmxzYkdGMGFXNW5JSE53Y21sdVp5NWNiaUFnVDNJc0lITndjbWx1Wnk1Y2JseHVJQ0JVYUdseklHbHpJR0VnWkdseVpXTjBJSEJ2Y25RZ2IyWWdRV1JoYlNCTmFYTnJhV1YzYVdONkozTWdLRUJ6YTJWMmVTa2dVbVZoWTNRZ1FXNXBiV0YwWldSY2JpQWdVRklnSXpFMU16SXlJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzltWVdObFltOXZheTl5WldGamRDMXVZWFJwZG1VdmNIVnNiQzh4TlRNeU1pOWNibHh1SUNCZ1lHQmNiaUFnYzNCeWFXNW5LSHRjYmlBZ0lDQnRZWE56T2lBeUxGeHVJQ0FnSUdSaGJYQnBibWM2SURFd0xGeHVJQ0FnSUhOMGFXWm1ibVZ6Y3pvZ01UQXdMRnh1SUNBZ0lIUnZPaUF4TURCY2JpQWdmU2t1YzNSaGNuUW9LVHRjYmlBZ1lHQmdYRzVjYmlBZ1FXUmhiU0JOYVhOcmFXVjNhV042T2x4dUlDQkFjMnRsZG5rZ0tIUjNhWFIwWlhJdVkyOXRMM05yWlhaNUxDQm5hWFJvZFdJdVkyOXRMM05yWlhaNUtWeHVJQ292WEc1cGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYm1sdGNHOXlkQ0I3SUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVjYm1Oc1lYTnpJRk53Y21sdVp5QmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJSE4wWVhScFl5QmtaV1poZFd4MFVISnZjSE1nUFNCN1hHNGdJQ0FnYzNScFptWnVaWE56T2lBeE1EQXNYRzRnSUNBZ1pHRnRjR2x1WnpvZ01UQXNYRzRnSUNBZ2JXRnpjem9nTVM0d0xGeHVJQ0FnSUhabGJHOWphWFI1T2lBd0xqQXNYRzRnSUNBZ1puSnZiVG9nTUM0d0xGeHVJQ0FnSUhSdk9pQXdMakFzWEc0Z0lDQWdjbVZ6ZEZOd1pXVmtPaUF3TGpBeExGeHVJQ0FnSUhKbGMzUkVhWE53YkdGalpXMWxiblE2SURBdU1ERmNiaUFnZlR0Y2JseHVJQ0J2YmxOMFlYSjBLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dkbVZzYjJOcGRIa3NJSFJ2TENCbWNtOXRJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUhSb2FYTXVkQ0E5SURBN1hHNGdJQ0FnZEdocGN5NXBibWwwYVdGc1ZtVnNiMk5wZEhrZ1BTQjJaV3h2WTJsMGVTQS9JSFpsYkc5amFYUjVJQzhnTVRBd01DQTZJREF1TUR0Y2JpQWdJQ0IwYUdsekxtbHpRMjl0Y0d4bGRHVWdQU0JtWVd4elpUdGNiaUFnSUNCMGFHbHpMbVJsYkhSaElEMGdkRzhnTFNCbWNtOXRPMXh1SUNCOVhHNWNiaUFnZFhCa1lYUmxLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2djM1JwWm1adVpYTnpMQ0JrWVcxd2FXNW5MQ0J0WVhOekxDQm1jbTl0TENCMGJ5d2djbVZ6ZEZOd1pXVmtMQ0J5WlhOMFJHbHpjR3hoWTJWdFpXNTBJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJSHNnWkdWc2RHRXNJR2x1YVhScFlXeFdaV3h2WTJsMGVTQjlJRDBnZEdocGN6dGNibHh1SUNBZ0lHTnZibk4wSUhScGJXVkVaV3gwWVNBOUlIUnBiV1ZUYVc1alpVeGhjM1JHY21GdFpTZ3BJQzhnTVRBd01EdGNiaUFnSUNCamIyNXpkQ0IwSUQwZ2RHaHBjeTUwSUQwZ2RHaHBjeTUwSUNzZ2RHbHRaVVJsYkhSaE8xeHVYRzRnSUNBZ1kyOXVjM1FnWkdGdGNHbHVaMUpoZEdsdklEMGdaR0Z0Y0dsdVp5QXZJQ2d5SUNvZ1RXRjBhQzV6Y1hKMEtITjBhV1ptYm1WemN5QXFJRzFoYzNNcEtUdGNiaUFnSUNCamIyNXpkQ0JoYm1kMWJHRnlSbkpsY1NBOUlFMWhkR2d1YzNGeWRDaHpkR2xtWm01bGMzTWdMeUJ0WVhOektUdGNiaUFnSUNCamIyNXpkQ0JsZUhCdlJHVmpZWGtnUFNCaGJtZDFiR0Z5Um5KbGNTQXFJRTFoZEdndWMzRnlkQ2d4TGpBZ0xTQW9aR0Z0Y0dsdVoxSmhkR2x2SUNvZ1pHRnRjR2x1WjFKaGRHbHZLU2s3WEc1Y2JpQWdJQ0JqYjI1emRDQjRNQ0E5SURFN1hHNGdJQ0FnYkdWMElHOXpZMmxzYkdGMGFXOXVJRDBnTUM0d08xeHVYRzRnSUNBZ0x5OGdWVzVrWlhKa1lXMXdaV1JjYmlBZ0lDQnBaaUFvWkdGdGNHbHVaMUpoZEdsdklEd2dNU2tnZTF4dUlDQWdJQ0FnWTI5dWMzUWdaVzUyWld4dmNHVWdQU0JOWVhSb0xtVjRjQ2d0WkdGdGNHbHVaMUpoZEdsdklDb2dZVzVuZFd4aGNrWnlaWEVnS2lCMEtUdGNiaUFnSUNBZ0lHOXpZMmxzYkdGMGFXOXVJRDBnWlc1MlpXeHZjR1VnS2lBb0tDaHBibWwwYVdGc1ZtVnNiMk5wZEhrZ0t5QmtZVzF3YVc1blVtRjBhVzhnS2lCaGJtZDFiR0Z5Um5KbGNTQXFJSGd3S1NBdklHVjRjRzlFWldOaGVTa2dLaUJOWVhSb0xuTnBiaWhsZUhCdlJHVmpZWGtnS2lCMEtTQXJJQ2g0TUNBcUlFMWhkR2d1WTI5ektHVjRjRzlFWldOaGVTQXFJSFFwS1NrN1hHNGdJQ0FnSUNCMGFHbHpMblpsYkc5amFYUjVJRDBnS0dWdWRtVnNiM0JsSUNvZ0tDaE5ZWFJvTG1OdmN5aGxlSEJ2UkdWallYa2dLaUIwS1NBcUlDaHBibWwwYVdGc1ZtVnNiMk5wZEhrZ0t5QmtZVzF3YVc1blVtRjBhVzhnS2lCaGJtZDFiR0Z5Um5KbGNTQXFJSGd3S1NrZ0xTQW9aWGh3YjBSbFkyRjVJQ29nZURBZ0tpQk5ZWFJvTG5OcGJpaGxlSEJ2UkdWallYa2dLaUIwS1NrcElDMWNiaUFnSUNBZ0lDQWdLQ2hrWVcxd2FXNW5VbUYwYVc4Z0tpQmhibWQxYkdGeVJuSmxjU0FxSUdWdWRtVnNiM0JsS1NBcUlDZ29LQ2hOWVhSb0xuTnBiaWhsZUhCdlJHVmpZWGtnS2lCMEtTQXFJQ2hwYm1sMGFXRnNWbVZzYjJOcGRIa2dLeUJrWVcxd2FXNW5VbUYwYVc4Z0tpQmhibWQxYkdGeVJuSmxjU0FxSUhnd0tTa2dLU0F2SUdWNGNHOUVaV05oZVNrZ0t5QW9lREFnS2lCTllYUm9MbU52Y3lobGVIQnZSR1ZqWVhrZ0tpQjBLU2twS1NrN1hHNWNiaUFnSUNBdkx5QkRjbWwwYVdOaGJHeDVJR1JoYlhCbFpGeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQmxiblpsYkc5d1pTQTlJRTFoZEdndVpYaHdLQzFoYm1kMWJHRnlSbkpsY1NBcUlIUXBPMXh1SUNBZ0lDQWdiM05qYVd4c1lYUnBiMjRnUFNCbGJuWmxiRzl3WlNBcUlDaDRNQ0FySUNocGJtbDBhV0ZzVm1Wc2IyTnBkSGtnS3lBb1lXNW5kV3hoY2taeVpYRWdLaUI0TUNrcElDb2dkQ2s3WEc0Z0lDQWdJQ0IwYUdsekxuWmxiRzlqYVhSNUlEMGdaVzUyWld4dmNHVWdLaUFvS0hRZ0tpQnBibWwwYVdGc1ZtVnNiMk5wZEhrZ0tpQmhibWQxYkdGeVJuSmxjU2tnTFNBb2RDQXFJSGd3SUNvZ0tHRnVaM1ZzWVhKR2NtVnhJQ29nWVc1bmRXeGhja1p5WlhFcEtTQXJJR2x1YVhScFlXeFdaV3h2WTJsMGVTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1kyOXVjM1FnWm5KaFkzUnBiMjRnUFNBeElDMGdiM05qYVd4c1lYUnBiMjQ3WEc0Z0lDQWdiR1YwSUhCdmMybDBhVzl1SUQwZ1puSnZiU0FySUdaeVlXTjBhVzl1SUNvZ1pHVnNkR0U3WEc1Y2JpQWdJQ0F2THlCRGFHVmpheUJwWmlCemFXMTFiR0YwYVc5dUlHbHpJR052YlhCc1pYUmxYRzRnSUNBZ0x5OGdWMlVnWkc4Z2RHaHBjeUJvWlhKbElHbHVjM1JsWVdRZ2IyWWdZR2x6UVdOMGFXOXVRMjl0Y0d4bGRHVmdJR0Z6SUdsMElHRnNiRzkzY3lCMWMxeHVJQ0FnSUM4dklIUnZJR05zWVcxd0lIUnZJR1Z1WkNCa2RYSnBibWNnZFhCa1lYUmxLVnh1SUNBZ0lHTnZibk4wSUdselFtVnNiM2RXWld4dlkybDBlVlJvY21WemFHOXNaQ0E5SUUxaGRHZ3VZV0p6S0hSb2FYTXVkbVZzYjJOcGRIa3BJRHc5SUhKbGMzUlRjR1ZsWkR0Y2JpQWdJQ0JqYjI1emRDQnBjMEpsYkc5M1JHbHpjR3hoWTJWdFpXNTBWR2h5WlhOb2IyeGtJRDBnVFdGMGFDNWhZbk1vZEc4Z0xTQndiM05wZEdsdmJpa2dQRDBnY21WemRFUnBjM0JzWVdObGJXVnVkRHRjYmlBZ0lDQjBhR2x6TG1selEyOXRjR3hsZEdVZ1BTQnBjMEpsYkc5M1ZtVnNiMk5wZEhsVWFISmxjMmh2YkdRZ0ppWWdhWE5DWld4dmQwUnBjM0JzWVdObGJXVnVkRlJvY21WemFHOXNaRHRjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbWx6UTI5dGNHeGxkR1VwSUh0Y2JpQWdJQ0FnSUhCdmMybDBhVzl1SUQwZ2RHODdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhCdmMybDBhVzl1TzF4dUlDQjlYRzVjYmlBZ2FYTkJZM1JwYjI1RGIyMXdiR1YwWlNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXBjME52YlhCc1pYUmxPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2h3Y205d2N5a2dQVDRnYm1WM0lGTndjbWx1Wnlod2NtOXdjeWs3WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hY3Rpb25zL3NwcmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IENTU1JlbmRlcmVyKF9leHRlbmRzKHtcbiAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uOiB0cnVlXG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX3JlbmRlciA9IHJlcXVpcmUoJy4vcmVuZGVyJyk7XG5cbnZhciBfcmVuZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbmRlcik7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDU1NSZW5kZXJlciA9IGZ1bmN0aW9uIChfUmVuZGVyZXIpIHtcbiAgX2luaGVyaXRzKENTU1JlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIENTU1JlbmRlcmVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDU1NSZW5kZXJlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ1NTUmVuZGVyZXIucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGVsZW1lbnQgPSBfcHJvcHMuZWxlbWVudCxcbiAgICAgICAgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24gPSBfcHJvcHMuZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb247XG5cbiAgICAoMCwgX3JlbmRlcjIuZGVmYXVsdCkoZWxlbWVudCwgdGhpcy5zdGF0ZSwgdGhpcy5jaGFuZ2VkVmFsdWVzLCBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbik7XG4gIH07XG5cbiAgQ1NTUmVuZGVyZXIucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZChrZXkpIHtcbiAgICB2YXIgdmFsdWVUeXBlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRba2V5XTtcblxuICAgIGlmICghX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgICB2YXIgZG9tVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVsoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShrZXkpXSB8fCAwO1xuICAgICAgcmV0dXJuIHZhbHVlVHlwZSAmJiB2YWx1ZVR5cGUucGFyc2UgPyB2YWx1ZVR5cGUucGFyc2UoZG9tVmFsdWUpIDogZG9tVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlVHlwZS5kZWZhdWx0IHx8IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIENTU1JlbmRlcmVyO1xufShfMi5kZWZhdWx0KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJbVZzWlcxbGJuUWlMQ0p3Y205d2N5SXNJa05UVTFKbGJtUmxjbVZ5SWl3aVpXNWhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0aUxDSnZibEpsYm1SbGNpSXNJbk4wWVhSbElpd2lZMmhoYm1kbFpGWmhiSFZsY3lJc0ltOXVVbVZoWkNJc0ltdGxlU0lzSW5aaGJIVmxWSGx3WlNJc0ltUnZiVlpoYkhWbElpd2lkMmx1Wkc5M0lpd2laMlYwUTI5dGNIVjBaV1JUZEhsc1pTSXNJbkJoY25ObElpd2laR1ZtWVhWc2RDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMnRDUVRaQ1pTeFZRVUZWUVN4UFFVRldMRVZCUVcxQ1F5eExRVUZ1UWl4RlFVRXdRanRCUVVOMlF5eFRRVUZQTEVsQlFVbERMRmRCUVVvN1FVRkRURVlzYjBKQlJFczdRVUZGVEVjc1owTkJRVFJDTzBGQlJuWkNMRXRCUjBaR0xFdEJTRVVzUlVGQlVEdEJRVXRFTEVNN08wRkJia05FT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3pzN096czdPenRKUVVWTlF5eFhPenM3T3pzN096czdkMEpCUTBwRkxGRXNkVUpCUVZjN1FVRkJRU3hwUWtGRGRVTXNTMEZCUzBnc1MwRkVOVU03UVVGQlFTeFJRVU5FUkN4UFFVUkRMRlZCUTBSQkxFOUJSRU03UVVGQlFTeFJRVU5SUnl3d1FrRkVVaXhWUVVOUlFTd3dRa0ZFVWpzN1FVRkZWQ3d3UWtGQlZVZ3NUMEZCVml4RlFVRnRRaXhMUVVGTFN5eExRVUY0UWl4RlFVRXJRaXhMUVVGTFF5eGhRVUZ3UXl4RlFVRnRSRWdzTUVKQlFXNUVPMEZCUTBRc1J6czdkMEpCUlVSSkxFMHNiVUpCUVU5RExFY3NSVUZCU3p0QlFVTldMRkZCUVUxRExGbEJRVmtzY1VKQlFXTkVMRWRCUVdRc1EwRkJiRUk3TzBGQlJVRXNVVUZCU1N4RFFVRkRMSGxDUVVGbFFTeEhRVUZtTEVOQlFVd3NSVUZCTUVJN1FVRkJRU3hWUVVOb1FsSXNUMEZFWjBJc1IwRkRTaXhMUVVGTFF5eExRVVJFTEVOQlEyaENSQ3hQUVVSblFqczdRVUZGZUVJc1ZVRkJUVlVzVjBGQlYwTXNUMEZCVDBNc1owSkJRVkFzUTBGQmQwSmFMRTlCUVhoQ0xFVkJRV2xETEVsQlFXcERMRVZCUVhWRExIZENRVUZUVVN4SFFVRlVMRU5CUVhaRExFdEJRWGxFTEVOQlFURkZPMEZCUTBFc1lVRkJVVU1zWVVGQllVRXNWVUZCVlVrc1MwRkJlRUlzUjBGQmFVTktMRlZCUVZWSkxFdEJRVllzUTBGQlowSklMRkZCUVdoQ0xFTkJRV3BETEVkQlFUWkVRU3hSUVVGd1JUdEJRVU5FTEV0QlNrUXNUVUZKVHp0QlFVTk1MRlZCUVVsRUxGTkJRVW9zUlVGQlpUdEJRVU5pTEdWQlFVOUJMRlZCUVZWTExFOUJRVllzU1VGQmNVSXNRMEZCTlVJN1FVRkRSQ3hQUVVaRUxFMUJSVTg3UVVGRFRDeGxRVUZQTEVOQlFWQTdRVUZEUkR0QlFVTkdPMEZCUTBZc1J5SXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGeWN5OW5hWFJvZFdJdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGSmxibVJsY21WeUlHWnliMjBnSnk0dUx5YzdYRzVwYlhCdmNuUWdjbVZ1WkdWeVExTlRJR1p5YjIwZ0p5NHZjbVZ1WkdWeUp6dGNibWx0Y0c5eWRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lCbWNtOXRJQ2N1TDNSeVlXNXpabTl5YlMxd2NtOXdjeWM3WEc1cGJYQnZjblFnZG1Gc2RXVlVlWEJsYzAxaGNDQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpKenRjYm1sdGNHOXlkQ0J3Y21WbWFYaGxjaUJtY205dElDY3VMM0J5WldacGVHVnlKenRjYmx4dVkyeGhjM01nUTFOVFVtVnVaR1Z5WlhJZ1pYaDBaVzVrY3lCU1pXNWtaWEpsY2lCN1hHNGdJRzl1VW1WdVpHVnlLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2daV3hsYldWdWRDd2daVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnY21WdVpHVnlRMU5US0dWc1pXMWxiblFzSUhSb2FYTXVjM1JoZEdVc0lIUm9hWE11WTJoaGJtZGxaRlpoYkhWbGN5d2daVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNHBPMXh1SUNCOVhHNWNiaUFnYjI1U1pXRmtLR3RsZVNrZ2UxeHVJQ0FnSUdOdmJuTjBJSFpoYkhWbFZIbHdaU0E5SUhaaGJIVmxWSGx3WlhOTllYQmJhMlY1WFR0Y2JseHVJQ0FnSUdsbUlDZ2hkSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnWTI5dWMzUWdleUJsYkdWdFpXNTBJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUNBZ1kyOXVjM1FnWkc5dFZtRnNkV1VnUFNCM2FXNWtiM2N1WjJWMFEyOXRjSFYwWldSVGRIbHNaU2hsYkdWdFpXNTBMQ0J1ZFd4c0tWdHdjbVZtYVhobGNpaHJaWGtwWFNCOGZDQXdPMXh1SUNBZ0lDQWdjbVYwZFhKdUlDaDJZV3gxWlZSNWNHVWdKaVlnZG1Gc2RXVlVlWEJsTG5CaGNuTmxLU0EvSUhaaGJIVmxWSGx3WlM1d1lYSnpaU2hrYjIxV1lXeDFaU2tnT2lCa2IyMVdZV3gxWlR0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdhV1lnS0haaGJIVmxWSGx3WlNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RtRnNkV1ZVZVhCbExtUmxabUYxYkhRZ2ZId2dNRHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXdPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQW9aV3hsYldWdWRDd2djSEp2Y0hNcElIdGNiaUFnY21WMGRYSnVJRzVsZHlCRFUxTlNaVzVrWlhKbGNpaDdYRzRnSUNBZ1pXeGxiV1Z1ZEN4Y2JpQWdJQ0JsYm1GaWJHVklZWEprZDJGeVpVRmpZMlZzWlhKaGRHbHZiam9nZEhKMVpTeGNiaUFnSUNBdUxpNXdjbTl3YzF4dUlDQjlLVHRjYm4xY2JpSmRmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVuZGVyZXJzL2Nzcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZFN0eWxlUHJvcGVydHlTdHJpbmc7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB0cmFuc2xhdGUgPSBfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHQudHJhbnNsYXRlLFxuICAgIHRyYW5zbGF0ZVggPSBfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHQudHJhbnNsYXRlWCxcbiAgICB0cmFuc2xhdGVZID0gX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0LnRyYW5zbGF0ZVksXG4gICAgdHJhbnNsYXRlWiA9IF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdC50cmFuc2xhdGVaLFxuICAgIHNjYWxlID0gX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0LnNjYWxlLFxuICAgIHNjYWxlWCA9IF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdC5zY2FsZVgsXG4gICAgc2NhbGVZID0gX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0LnNjYWxlWSxcbiAgICBzY2FsZVogPSBfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHQuc2NhbGVaLFxuICAgIHJvdGF0ZSA9IF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdC5yb3RhdGUsXG4gICAgcm90YXRlWCA9IF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdC5yb3RhdGVYLFxuICAgIHJvdGF0ZVkgPSBfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHQucm90YXRlWSxcbiAgICByb3RhdGVaID0gX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0LnJvdGF0ZVo7XG5cblxudmFyIHRyYW5zbGF0ZU1hcCA9IHtcbiAgeDogJ3RyYW5zbGF0ZVgnLFxuICB5OiAndHJhbnNsYXRlWScsXG4gIHo6ICd0cmFuc2xhdGVaJ1xufTtcblxudmFyIHRyYW5zZm9ybVByb3BPcmRlciA9IFt0cmFuc2xhdGUsIHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIHRyYW5zbGF0ZVosIHNjYWxlLCBzY2FsZVgsIHNjYWxlWSwgc2NhbGVaLCByb3RhdGUsIHJvdGF0ZVgsIHJvdGF0ZVksIHJvdGF0ZVpdO1xuXG5mdW5jdGlvbiBzb3J0VHJhbnNmb3JtUHJvcHMoYSwgYikge1xuICByZXR1cm4gdHJhbnNmb3JtUHJvcE9yZGVyLmluZGV4T2YoYSkgLSB0cmFuc2Zvcm1Qcm9wT3JkZXIuaW5kZXhPZihiKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRTdHlsZVByb3BlcnR5U3RyaW5nKGVsZW1lbnQsIHN0YXRlLCBjaGFuZ2VkVmFsdWVzLCBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICB2YXIgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICB2YXIgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIHZhciB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgLy8gRmlyc3QgY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBjaGFuZ2VkIHRyYW5zZm9ybSB2YWx1ZXNcbiAgLy8gYW5kIGlmIHRydWUgYWRkIGFsbCB0cmFuc2Zvcm0gdmFsdWVzXG4gIHZhciBudW1DaGFuZ2VkVmFsdWVzID0gY2hhbmdlZFZhbHVlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ2hhbmdlZFZhbHVlczsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGNoYW5nZWRWYWx1ZXNbaV07XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdHJhbnNmb3JtIHByb3BlcnR5LCBhZGQgYWxsIG90aGVyIHRyYW5zZm9ybSBwcm9wc1xuICAgIC8vIHRvIGNoYW5nZWRWYWx1ZXMgYW5kIHRoZW4gYnJlYWtcbiAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG5cbiAgICAgIGZvciAodmFyIF9rZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtfa2V5XSAmJiBjaGFuZ2VkVmFsdWVzLmluZGV4T2YoX2tleSkgPT09IC0xKSB7XG4gICAgICAgICAgY2hhbmdlZFZhbHVlcy5wdXNoKF9rZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZWRWYWx1ZXMuc29ydChzb3J0VHJhbnNmb3JtUHJvcHMpO1xuXG4gIC8vIE5vdyBydW4gdGhyb3VnaCBlYWNoIHByb3BlcnR5LCBhbmQgZGVjaWRlIHdoaWNoIGlzIGEgcGxhaW4gc3R5bGUgcHJvcHMsXG4gIC8vIGEgdHJhbnNmb3JtIHByb3BlcnR5IGFuZCBDU1MgdmFycyBhbmQgaGFuZGxlIGFjY29yZGluZ2x5XG4gIHZhciB0b3RhbE51bUNoYW5nZWRWYWx1ZXMgPSBjaGFuZ2VkVmFsdWVzLmxlbmd0aDtcbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRvdGFsTnVtQ2hhbmdlZFZhbHVlczsgX2krKykge1xuICAgIHZhciBfa2V5MiA9IGNoYW5nZWRWYWx1ZXNbX2ldO1xuICAgIHZhciB2YWx1ZSA9IHN0YXRlW19rZXkyXTtcblxuICAgIGlmICh0cmFuc2xhdGVNYXBbX2tleTJdKSB7XG4gICAgICBfa2V5MiA9IHRyYW5zbGF0ZU1hcFtfa2V5Ml07XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIG51bWJlciBvciBvYmplY3QgYW5kIHdlIGhhdmUgZmlsdGVyLCBhcHBseSBmaWx0ZXJcbiAgICBpZiAoX3ZhbHVlVHlwZXMyLmRlZmF1bHRbX2tleTJdICYmICgoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZSkgfHwgKDAsIF91dGlscy5pc09iaikodmFsdWUpKSAmJiBfdmFsdWVUeXBlczIuZGVmYXVsdFtfa2V5Ml0udHJhbnNmb3JtKSB7XG4gICAgICB2YWx1ZSA9IF92YWx1ZVR5cGVzMi5kZWZhdWx0W19rZXkyXS50cmFuc2Zvcm0odmFsdWUpO1xuICAgIH1cblxuICAgIC8vIElmIGEgdHJhbnNmb3JtIHByb3AsIGFkZCB0byB0cmFuc2Zvcm0gc3RyaW5nXG4gICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtfa2V5Ml0pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBfa2V5MiArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgIHRyYW5zZm9ybUhhc1ogPSBfa2V5MiA9PT0gdHJhbnNsYXRlTWFwLnogPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcblxuICAgICAgLy8gT3IgaWYgYSBzaW1wbGUgQ1NTIHByb3BlcnR5LCBzZXRcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoX2tleTIsIHRydWUpICsgJzonICsgdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgd2UgaGF2ZSB0cmFuc2Zvcm0gcHJvcHMsIGJ1aWxkIGEgdHJhbnNmb3JtIHN0cmluZ1xuICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gdHJhbnNsYXRlTWFwLnogKyAnKDApJztcbiAgICB9XG5cbiAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgndHJhbnNmb3JtJywgdHJ1ZSkgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gIH1cblxuICBlbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gcHJvcGVydHlTdHJpbmc7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM0psYm1SbGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKaWRXbHNaRk4wZVd4bFVISnZjR1Z5ZEhsVGRISnBibWNpTENKMGNtRnVjMnhoZEdVaUxDSjBjbUZ1YzJ4aGRHVllJaXdpZEhKaGJuTnNZWFJsV1NJc0luUnlZVzV6YkdGMFpWb2lMQ0p6WTJGc1pTSXNJbk5qWVd4bFdDSXNJbk5qWVd4bFdTSXNJbk5qWVd4bFdpSXNJbkp2ZEdGMFpTSXNJbkp2ZEdGMFpWZ2lMQ0p5YjNSaGRHVlpJaXdpY205MFlYUmxXaUlzSW5SeVlXNXpiR0YwWlUxaGNDSXNJbmdpTENKNUlpd2llaUlzSW5SeVlXNXpabTl5YlZCeWIzQlBjbVJsY2lJc0luTnZjblJVY21GdWMyWnZjbTFRY205d2N5SXNJbUVpTENKaUlpd2lhVzVrWlhoUFppSXNJbVZzWlcxbGJuUWlMQ0p6ZEdGMFpTSXNJbU5vWVc1blpXUldZV3gxWlhNaUxDSmxibUZpYkdWSVlYSmtkMkZ5WlVGalkyVnNaWEpoZEdsdmJpSXNJbkJ5YjNCbGNuUjVVM1J5YVc1bklpd2lkSEpoYm5ObWIzSnRVM1J5YVc1bklpd2lhR0Z6VkhKaGJuTm1iM0p0SWl3aWRISmhibk5tYjNKdFNHRnpXaUlzSW01MWJVTm9ZVzVuWldSV1lXeDFaWE1pTENKc1pXNW5kR2dpTENKcElpd2lhMlY1SWl3aWNIVnphQ0lzSW5OdmNuUWlMQ0owYjNSaGJFNTFiVU5vWVc1blpXUldZV3gxWlhNaUxDSjJZV3gxWlNJc0luUnlZVzV6Wm05eWJTSXNJbk4wZVd4bElpd2lZM056VkdWNGRDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN08ydENRVFpEZDBKQkxIZENPenRCUVRkRGVFSTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdTVUZIUlVNc1V5dzBRa0ZCUVVFc1V6dEpRVU5CUXl4VkxEUkNRVUZCUVN4Vk8wbEJRMEZETEZVc05FSkJRVUZCTEZVN1NVRkRRVU1zVlN3MFFrRkJRVUVzVlR0SlFVTkJReXhMTERSQ1FVRkJRU3hMTzBsQlEwRkRMRTBzTkVKQlFVRkJMRTA3U1VGRFFVTXNUU3cwUWtGQlFVRXNUVHRKUVVOQlF5eE5MRFJDUVVGQlFTeE5PMGxCUTBGRExFMHNORUpCUVVGQkxFMDdTVUZEUVVNc1R5dzBRa0ZCUVVFc1R6dEpRVU5CUXl4UExEUkNRVUZCUVN4UE8wbEJRMEZETEU4c05FSkJRVUZCTEU4N096dEJRVWRHTEVsQlFVMURMR1ZCUVdVN1FVRkRia0pETEV0QlFVY3NXVUZFWjBJN1FVRkZia0pETEV0QlFVY3NXVUZHWjBJN1FVRkhia0pETEV0QlFVYzdRVUZJWjBJc1EwRkJja0k3TzBGQlRVRXNTVUZCVFVNc2NVSkJRWEZDTEVOQlEzcENhRUlzVTBGRWVVSXNSVUZGZWtKRExGVkJSbmxDTEVWQlIzcENReXhWUVVoNVFpeEZRVWw2UWtNc1ZVRktlVUlzUlVGTGVrSkRMRXRCVEhsQ0xFVkJUWHBDUXl4TlFVNTVRaXhGUVU5NlFrTXNUVUZRZVVJc1JVRlJla0pETEUxQlVubENMRVZCVTNwQ1F5eE5RVlI1UWl4RlFWVjZRa01zVDBGV2VVSXNSVUZYZWtKRExFOUJXSGxDTEVWQldYcENReXhQUVZwNVFpeERRVUV6UWpzN1FVRmxRU3hUUVVGVFRTeHJRa0ZCVkN4RFFVRTBRa01zUTBGQk5VSXNSVUZCSzBKRExFTkJRUzlDTEVWQlFXdERPMEZCUTJoRExGTkJRVTlJTEcxQ1FVRnRRa2tzVDBGQmJrSXNRMEZCTWtKR0xFTkJRVE5DTEVsQlFXZERSaXh0UWtGQmJVSkpMRTlCUVc1Q0xFTkJRVEpDUkN4RFFVRXpRaXhEUVVGMlF6dEJRVU5FT3p0QlFVVmpMRk5CUVZOd1FpeDNRa0ZCVkN4RFFVRnJRM05DTEU5QlFXeERMRVZCUVRKRFF5eExRVUV6UXl4RlFVRnJSRU1zWVVGQmJFUXNSVUZCYVVWRExEQkNRVUZxUlN4RlFVRTJSanRCUVVNeFJ5eE5RVUZKUXl4cFFrRkJhVUlzUlVGQmNrSTdRVUZEUVN4TlFVRkpReXhyUWtGQmEwSXNSVUZCZEVJN1FVRkRRU3hOUVVGSlF5eGxRVUZsTEV0QlFXNUNPMEZCUTBFc1RVRkJTVU1zWjBKQlFXZENMRXRCUVhCQ096dEJRVVZCTzBGQlEwRTdRVUZEUVN4TlFVRk5ReXh0UWtGQmJVSk9MR05CUVdOUExFMUJRWFpETzBGQlEwRXNUMEZCU3l4SlFVRkpReXhKUVVGSkxFTkJRV0lzUlVGQlowSkJMRWxCUVVsR0xHZENRVUZ3UWl4RlFVRnpRMFVzUjBGQmRFTXNSVUZCTWtNN1FVRkRla01zVVVGQlNVTXNUVUZCVFZRc1kwRkJZMUVzUTBGQlpDeERRVUZXT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hSUVVGSkxIbENRVUZsUXl4SFFVRm1MRU5CUVVvc1JVRkJlVUk3UVVGRGRrSk1MSEZDUVVGbExFbEJRV1k3TzBGQlJVRXNWMEZCU3l4SlFVRkpTeXhKUVVGVUxFbEJRV2RDVml4TFFVRm9RaXhGUVVGMVFqdEJRVU55UWl4WlFVRkpMSGxDUVVGbFZTeEpRVUZtTEV0QlFYVkNWQ3hqUVVGalNDeFBRVUZrTEVOQlFYTkNXU3hKUVVGMFFpeE5RVUVyUWl4RFFVRkRMRU5CUVRORUxFVkJRVGhFTzBGQlF6VkVWQ3gzUWtGQlkxVXNTVUZCWkN4RFFVRnRRa1FzU1VGQmJrSTdRVUZEUkR0QlFVTkdPenRCUVVWRU8wRkJRMFE3UVVGRFJqczdRVUZGUkZRc1owSkJRV05YTEVsQlFXUXNRMEZCYlVKcVFpeHJRa0ZCYmtJN08wRkJSVUU3UVVGRFFUdEJRVU5CTEUxQlFVMXJRaXgzUWtGQmQwSmFMR05CUVdOUExFMUJRVFZETzBGQlEwRXNUMEZCU3l4SlFVRkpReXhMUVVGSkxFTkJRV0lzUlVGQlowSkJMRXRCUVVsSkxIRkNRVUZ3UWl4RlFVRXlRMG9zU1VGQk0wTXNSVUZCWjBRN1FVRkRPVU1zVVVGQlNVTXNVVUZCVFZRc1kwRkJZMUVzUlVGQlpDeERRVUZXTzBGQlEwRXNVVUZCU1Vzc1VVRkJVV1FzVFVGQlRWVXNTMEZCVGl4RFFVRmFPenRCUVVWQkxGRkJRVWx3UWl4aFFVRmhiMElzUzBGQllpeERRVUZLTEVWQlFYVkNPMEZCUTNKQ1FTeGpRVUZOY0VJc1lVRkJZVzlDTEV0QlFXSXNRMEZCVGp0QlFVTkVPenRCUVVWRU8wRkJRMEVzVVVGQlNTeHhRa0ZCVjBFc1MwRkJXQ3hOUVVGdlFpeHJRa0ZCVFVrc1MwRkJUaXhMUVVGblFpeHJRa0ZCVFVFc1MwRkJUaXhEUVVGd1F5eExRVUZ4UkN4eFFrRkJWMG9zUzBGQldDeEZRVUZuUWtzc1UwRkJla1VzUlVGQmIwWTdRVUZEYkVaRUxHTkJRVkVzY1VKQlFWZEtMRXRCUVZnc1JVRkJaMEpMTEZOQlFXaENMRU5CUVRCQ1JDeExRVUV4UWl4RFFVRlNPMEZCUTBRN08wRkJSVVE3UVVGRFFTeFJRVUZKTEhsQ1FVRmxTaXhMUVVGbUxFTkJRVW9zUlVGQmVVSTdRVUZEZGtKT0xIbENRVUZ0UWswc1VVRkJUU3hIUVVGT0xFZEJRVmxKTEV0QlFWb3NSMEZCYjBJc1NVRkJka003UVVGRFFWSXNjMEpCUVdsQ1NTeFZRVUZSY0VJc1lVRkJZVWNzUTBGQmRFSXNSMEZCTWtJc1NVRkJNMElzUjBGQmEwTmhMR0ZCUVd4RU96dEJRVVZHTzBGQlEwTXNTMEZNUkN4TlFVdFBPMEZCUTB4SUxIZENRVUZyUWl4TlFVRk5MSGRDUVVGVFR5eExRVUZVTEVWQlFXTXNTVUZCWkN4RFFVRk9MRWRCUVRSQ0xFZEJRVFZDTEVkQlFXdERTU3hMUVVGd1JEdEJRVU5FTzBGQlEwWTdPMEZCUlVRN1FVRkRRU3hOUVVGSlZDeFpRVUZLTEVWQlFXdENPMEZCUTJoQ0xGRkJRVWtzUTBGQlEwTXNZVUZCUkN4SlFVRnJRa29zTUVKQlFYUkNMRVZCUVd0RU8wRkJRMmhFUlN4NVFrRkJiVUprTEdGQlFXRkhMRU5CUVdJc1IwRkJhVUlzUzBGQmNFTTdRVUZEUkRzN1FVRkZSRlVzYzBKQlFXdENMRTFCUVUwc2QwSkJRVk1zVjBGQlZDeEZRVUZ6UWl4SlFVRjBRaXhEUVVGT0xFZEJRVzlETEVkQlFYQkRMRWRCUVRCRFF5eGxRVUUxUkR0QlFVTkVPenRCUVVWRVRDeFZRVUZSYVVJc1MwRkJVaXhEUVVGalF5eFBRVUZrTEVsQlFYbENaQ3hqUVVGNlFqdEJRVU5FSWl3aVptbHNaU0k2SW5KbGJtUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0Z5Y3k5bmFYUm9kV0l2Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhSeVlXNXpabTl5YlZCeWIzQnpJR1p5YjIwZ0p5NHZkSEpoYm5ObWIzSnRMWEJ5YjNCekp6dGNibWx0Y0c5eWRDQjJZV3gxWlZSNWNHVnpJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE1uTzF4dWFXMXdiM0owSUhCeVpXWnBlR1Z5SUdaeWIyMGdKeTR2Y0hKbFptbDRaWEluTzF4dWFXMXdiM0owSUhzZ2FYTk9kVzBzSUdselQySnFJSDBnWm5KdmJTQW5MaTR2TGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTI5dWMzUWdlMXh1SUNCMGNtRnVjMnhoZEdVc1hHNGdJSFJ5WVc1emJHRjBaVmdzWEc0Z0lIUnlZVzV6YkdGMFpWa3NYRzRnSUhSeVlXNXpiR0YwWlZvc1hHNGdJSE5qWVd4bExGeHVJQ0J6WTJGc1pWZ3NYRzRnSUhOallXeGxXU3hjYmlBZ2MyTmhiR1ZhTEZ4dUlDQnliM1JoZEdVc1hHNGdJSEp2ZEdGMFpWZ3NYRzRnSUhKdmRHRjBaVmtzWEc0Z0lISnZkR0YwWlZwY2JuMGdQU0IwY21GdWMyWnZjbTFRY205d2N6dGNibHh1WTI5dWMzUWdkSEpoYm5Oc1lYUmxUV0Z3SUQwZ2UxeHVJQ0I0T2lBbmRISmhibk5zWVhSbFdDY3NYRzRnSUhrNklDZDBjbUZ1YzJ4aGRHVlpKeXhjYmlBZ2Vqb2dKM1J5WVc1emJHRjBaVm9uWEc1OU8xeHVYRzVqYjI1emRDQjBjbUZ1YzJadmNtMVFjbTl3VDNKa1pYSWdQU0JiWEc0Z0lIUnlZVzV6YkdGMFpTeGNiaUFnZEhKaGJuTnNZWFJsV0N4Y2JpQWdkSEpoYm5Oc1lYUmxXU3hjYmlBZ2RISmhibk5zWVhSbFdpeGNiaUFnYzJOaGJHVXNYRzRnSUhOallXeGxXQ3hjYmlBZ2MyTmhiR1ZaTEZ4dUlDQnpZMkZzWlZvc1hHNGdJSEp2ZEdGMFpTeGNiaUFnY205MFlYUmxXQ3hjYmlBZ2NtOTBZWFJsV1N4Y2JpQWdjbTkwWVhSbFdseHVYVHRjYmx4dVpuVnVZM1JwYjI0Z2MyOXlkRlJ5WVc1elptOXliVkJ5YjNCektHRXNJR0lwSUh0Y2JpQWdjbVYwZFhKdUlIUnlZVzV6Wm05eWJWQnliM0JQY21SbGNpNXBibVJsZUU5bUtHRXBJQzBnZEhKaGJuTm1iM0p0VUhKdmNFOXlaR1Z5TG1sdVpHVjRUMllvWWlrN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJR0oxYVd4a1UzUjViR1ZRY205d1pYSjBlVk4wY21sdVp5aGxiR1Z0Wlc1MExDQnpkR0YwWlN3Z1kyaGhibWRsWkZaaGJIVmxjeXdnWlc1aFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjRwSUh0Y2JpQWdiR1YwSUhCeWIzQmxjblI1VTNSeWFXNW5JRDBnSnljN1hHNGdJR3hsZENCMGNtRnVjMlp2Y20xVGRISnBibWNnUFNBbkp6dGNiaUFnYkdWMElHaGhjMVJ5WVc1elptOXliU0E5SUdaaGJITmxPMXh1SUNCc1pYUWdkSEpoYm5ObWIzSnRTR0Z6V2lBOUlHWmhiSE5sTzF4dVhHNGdJQzh2SUVacGNuTjBJR05vWldOcklHbG1JSFJvWlhKbElHRnlaU0JoYm5rZ1kyaGhibWRsWkNCMGNtRnVjMlp2Y20wZ2RtRnNkV1Z6WEc0Z0lDOHZJR0Z1WkNCcFppQjBjblZsSUdGa1pDQmhiR3dnZEhKaGJuTm1iM0p0SUhaaGJIVmxjMXh1SUNCamIyNXpkQ0J1ZFcxRGFHRnVaMlZrVm1Gc2RXVnpJRDBnWTJoaGJtZGxaRlpoYkhWbGN5NXNaVzVuZEdnN1hHNGdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYm5WdFEyaGhibWRsWkZaaGJIVmxjenNnYVNzcktTQjdYRzRnSUNBZ2JHVjBJR3RsZVNBOUlHTm9ZVzVuWldSV1lXeDFaWE5iYVYwN1hHNWNiaUFnSUNBdkx5QkpaaUIwYUdseklHbHpJR0VnZEhKaGJuTm1iM0p0SUhCeWIzQmxjblI1TENCaFpHUWdZV3hzSUc5MGFHVnlJSFJ5WVc1elptOXliU0J3Y205d2MxeHVJQ0FnSUM4dklIUnZJR05vWVc1blpXUldZV3gxWlhNZ1lXNWtJSFJvWlc0Z1luSmxZV3RjYmlBZ0lDQnBaaUFvZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ2FHRnpWSEpoYm5ObWIzSnRJRDBnZEhKMVpUdGNibHh1SUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlITjBZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTFRY205d2MxdHJaWGxkSUNZbUlHTm9ZVzVuWldSV1lXeDFaWE11YVc1a1pYaFBaaWhyWlhrcElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR05vWVc1blpXUldZV3gxWlhNdWNIVnphQ2hyWlhrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHTm9ZVzVuWldSV1lXeDFaWE11YzI5eWRDaHpiM0owVkhKaGJuTm1iM0p0VUhKdmNITXBPMXh1WEc0Z0lDOHZJRTV2ZHlCeWRXNGdkR2h5YjNWbmFDQmxZV05vSUhCeWIzQmxjblI1TENCaGJtUWdaR1ZqYVdSbElIZG9hV05vSUdseklHRWdjR3hoYVc0Z2MzUjViR1VnY0hKdmNITXNYRzRnSUM4dklHRWdkSEpoYm5ObWIzSnRJSEJ5YjNCbGNuUjVJR0Z1WkNCRFUxTWdkbUZ5Y3lCaGJtUWdhR0Z1Wkd4bElHRmpZMjl5WkdsdVoyeDVYRzRnSUdOdmJuTjBJSFJ2ZEdGc1RuVnRRMmhoYm1kbFpGWmhiSFZsY3lBOUlHTm9ZVzVuWldSV1lXeDFaWE11YkdWdVozUm9PMXh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUnZkR0ZzVG5WdFEyaGhibWRsWkZaaGJIVmxjenNnYVNzcktTQjdYRzRnSUNBZ2JHVjBJR3RsZVNBOUlHTm9ZVzVuWldSV1lXeDFaWE5iYVYwN1hHNGdJQ0FnYkdWMElIWmhiSFZsSUQwZ2MzUmhkR1ZiYTJWNVhUdGNibHh1SUNBZ0lHbG1JQ2gwY21GdWMyeGhkR1ZOWVhCYmEyVjVYU2tnZTF4dUlDQWdJQ0FnYTJWNUlEMGdkSEpoYm5Oc1lYUmxUV0Z3VzJ0bGVWMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdTV1lnZEdocGN5QnBjeUJoSUc1MWJXSmxjaUJ2Y2lCdlltcGxZM1FnWVc1a0lIZGxJR2hoZG1VZ1ptbHNkR1Z5TENCaGNIQnNlU0JtYVd4MFpYSmNiaUFnSUNCcFppQW9kbUZzZFdWVWVYQmxjMXRyWlhsZElDWW1JQ2hwYzA1MWJTaDJZV3gxWlNrZ2ZId2dhWE5QWW1vb2RtRnNkV1VwS1NBbUppQjJZV3gxWlZSNWNHVnpXMnRsZVYwdWRISmhibk5tYjNKdEtTQjdYRzRnSUNBZ0lDQjJZV3gxWlNBOUlIWmhiSFZsVkhsd1pYTmJhMlY1WFM1MGNtRnVjMlp2Y20wb2RtRnNkV1VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUVsbUlHRWdkSEpoYm5ObWIzSnRJSEJ5YjNBc0lHRmtaQ0IwYnlCMGNtRnVjMlp2Y20wZ2MzUnlhVzVuWEc0Z0lDQWdhV1lnS0hSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElIdGNiaUFnSUNBZ0lIUnlZVzV6Wm05eWJWTjBjbWx1WnlBclBTQnJaWGtnS3lBbktDY2dLeUIyWVd4MVpTQXJJQ2NwSUNjN1hHNGdJQ0FnSUNCMGNtRnVjMlp2Y20xSVlYTmFJRDBnS0d0bGVTQTlQVDBnZEhKaGJuTnNZWFJsVFdGd0xub3BJRDhnZEhKMVpTQTZJSFJ5WVc1elptOXliVWhoYzFvN1hHNWNiaUFnSUNBdkx5QlBjaUJwWmlCaElITnBiWEJzWlNCRFUxTWdjSEp2Y0dWeWRIa3NJSE5sZEZ4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQndjbTl3WlhKMGVWTjBjbWx1WnlBclBTQW5PeWNnS3lCd2NtVm1hWGhsY2loclpYa3NJSFJ5ZFdVcElDc2dKem9uSUNzZ2RtRnNkV1U3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTHk4Z1NXWWdkMlVnYUdGMlpTQjBjbUZ1YzJadmNtMGdjSEp2Y0hNc0lHSjFhV3hrSUdFZ2RISmhibk5tYjNKdElITjBjbWx1WjF4dUlDQnBaaUFvYUdGelZISmhibk5tYjNKdEtTQjdYRzRnSUNBZ2FXWWdLQ0YwY21GdWMyWnZjbTFJWVhOYUlDWW1JR1Z1WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVLU0I3WEc0Z0lDQWdJQ0IwY21GdWMyWnZjbTFUZEhKcGJtY2dLejBnZEhKaGJuTnNZWFJsVFdGd0xub2dLeUFuS0RBcEp6dGNiaUFnSUNCOVhHNWNiaUFnSUNCd2NtOXdaWEowZVZOMGNtbHVaeUFyUFNBbk95Y2dLeUJ3Y21WbWFYaGxjaWduZEhKaGJuTm1iM0p0Snl3Z2RISjFaU2tnS3lBbk9pY2dLeUIwY21GdWMyWnZjbTFUZEhKcGJtYzdYRzRnSUgxY2JseHVJQ0JsYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ0t6MGdjSEp2Y0dWeWRIbFRkSEpwYm1jN1hHNTlYRzRpWFgwPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JlbmRlcmVycy9jc3MvcmVuZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgU1ZHUmVuZGVyZXIoX2V4dGVuZHMoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU1ZHUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhTVkdSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBTVkdSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTVkdSZW5kZXJlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVuZGVyZXIuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgdmFyIF9wcm9wcyRlbGVtZW50JGdldEJCbyA9IHByb3BzLmVsZW1lbnQuZ2V0QkJveCgpLFxuICAgICAgICB4ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLngsXG4gICAgICAgIHkgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueSxcbiAgICAgICAgd2lkdGggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby5oZWlnaHQ7XG5cbiAgICBfdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHsgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFNWR1JlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgdmFyIGF0dHJzID0gKDAsIF9idWlsZDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgdGhpcy5lbGVtZW50RGltZW5zaW9ucyk7XG4gICAgKDAsIF91dGlscy5zZXRET01BdHRycykoZWxlbWVudCwgYXR0cnMpO1xuICB9O1xuXG4gIFNWR1JlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cblxuICAgIGlmICghX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmFsdWVUeXBlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRba2V5XTtcbiAgICAgIHJldHVybiB2YWx1ZVR5cGUgPyB2YWx1ZVR5cGUuZGVmYXVsdCA6IDA7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTVkdSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSW1Wc1pXMWxiblFpTENKd2NtOXdjeUlzSWxOV1IxSmxibVJsY21WeUlpd2laMlYwUWtKdmVDSXNJbmdpTENKNUlpd2lkMmxrZEdnaUxDSm9aV2xuYUhRaUxDSmxiR1Z0Wlc1MFJHbHRaVzV6YVc5dWN5SXNJbTl1VW1WdVpHVnlJaXdpWVhSMGNuTWlMQ0p6ZEdGMFpTSXNJbTl1VW1WaFpDSXNJbXRsZVNJc0ltZGxkRUYwZEhKcFluVjBaU0lzSW5aaGJIVmxWSGx3WlNJc0ltUmxabUYxYkhRaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dHJRa0ZuUTJVc1ZVRkJWVUVzVDBGQlZpeEZRVUZ0UWtNc1MwRkJia0lzUlVGQk1FSTdRVUZEZGtNc1UwRkJUeXhKUVVGSlF5eFhRVUZLTzBGQlEweEdPMEZCUkVzc1MwRkZSa01zUzBGR1JTeEZRVUZRTzBGQlNVUXNRenM3UVVGeVEwUTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096czdPenM3T3p0SlFVVk5ReXhYT3pzN1FVRkRTaXgxUWtGQldVUXNTMEZCV2l4RlFVRnRRanRCUVVGQk96dEJRVUZCTEdsRVFVTnFRaXh4UWtGQlRVRXNTMEZCVGl4RFFVUnBRanM3UVVGQlFTeG5RMEZIWlVFc1RVRkJUVVFzVDBGQlRpeERRVUZqUnl4UFFVRmtMRVZCU0dZN1FVRkJRU3hSUVVkVVF5eERRVWhUTEhsQ1FVZFVRU3hEUVVoVE8wRkJRVUVzVVVGSFRrTXNRMEZJVFN4NVFrRkhUa0VzUTBGSVRUdEJRVUZCTEZGQlIwaERMRXRCU0Vjc2VVSkJSMGhCTEV0QlNFYzdRVUZCUVN4UlFVZEpReXhOUVVoS0xIbENRVWRKUVN4TlFVaEtPenRCUVVscVFpeFZRVUZMUXl4cFFrRkJUQ3hIUVVGNVFpeEZRVUZGU2l4SlFVRkdMRVZCUVV0RExFbEJRVXdzUlVGQlVVTXNXVUZCVWl4RlFVRmxReXhqUVVGbUxFVkJRWHBDTzBGQlNtbENPMEZCUzJ4Q096dDNRa0ZGUkVVc1VTeDFRa0ZCVnp0QlFVRkJMRkZCUTBSVUxFOUJSRU1zUjBGRFZ5eExRVUZMUXl4TFFVUm9RaXhEUVVORVJDeFBRVVJET3p0QlFVVlVMRkZCUVUxVkxGRkJRVkVzY1VKQlFVMHNTMEZCUzBNc1MwRkJXQ3hGUVVGclFpeExRVUZMU0N4cFFrRkJka0lzUTBGQlpEdEJRVU5CTERSQ1FVRlpVaXhQUVVGYUxFVkJRWEZDVlN4TFFVRnlRanRCUVVORUxFYzdPM2RDUVVWRVJTeE5MRzFDUVVGUFF5eEhMRVZCUVVzN1FVRkJRU3hSUVVOR1lpeFBRVVJGTEVkQlExVXNTMEZCUzBNc1MwRkVaaXhEUVVOR1JDeFBRVVJGT3pzN1FVRkhWaXhSUVVGSkxFTkJRVU1zZVVKQlFXVmhMRWRCUVdZc1EwRkJUQ3hGUVVFd1FqdEJRVU40UWl4aFFVRlBZaXhSUVVGUll5eFpRVUZTTEVOQlFYRkNSQ3hIUVVGeVFpeERRVUZRTzBGQlEwUXNTMEZHUkN4TlFVVlBPMEZCUTB3c1ZVRkJUVVVzV1VGQldTeHhRa0ZCWVVZc1IwRkJZaXhEUVVGc1FqdEJRVU5CTEdGQlFWRkZMRk5CUVVRc1IwRkJZMEVzVlVGQlZVTXNUMEZCZUVJc1IwRkJhME1zUTBGQmVrTTdRVUZEUkR0QlFVTkdMRWNpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk12WjJsMGFIVmlMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JTWlc1a1pYSmxjaUJtY205dElDY3VMaThuTzF4dWFXMXdiM0owSUdKMWFXeGtJR1p5YjIwZ0p5NHZZblZwYkdRbk8xeHVhVzF3YjNKMElIUnlZVzV6Wm05eWJWQnliM0J6SUdaeWIyMGdKeTR1TDJOemN5OTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVhVzF3YjNKMElIWmhiSFZsVkhsd1pVMWhjQ0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6Snp0Y2JtbHRjRzl5ZENCN0lITmxkRVJQVFVGMGRISnpJSDBnWm5KdmJTQW5MaTR2TGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTJ4aGMzTWdVMVpIVW1WdVpHVnlaWElnWlhoMFpXNWtjeUJTWlc1a1pYSmxjaUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ2MzVndaWElvY0hKdmNITXBPMXh1WEc0Z0lDQWdZMjl1YzNRZ2V5QjRMQ0I1TENCM2FXUjBhQ3dnYUdWcFoyaDBJSDBnUFNCd2NtOXdjeTVsYkdWdFpXNTBMbWRsZEVKQ2IzZ29LVHRjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblJFYVcxbGJuTnBiMjV6SUQwZ2V5QjRMQ0I1TENCM2FXUjBhQ3dnYUdWcFoyaDBJSDA3WEc0Z0lIMWNibHh1SUNCdmJsSmxibVJsY2lncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdWc1pXMWxiblFnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ1kyOXVjM1FnWVhSMGNuTWdQU0JpZFdsc1pDaDBhR2x6TG5OMFlYUmxMQ0IwYUdsekxtVnNaVzFsYm5SRWFXMWxibk5wYjI1ektUdGNiaUFnSUNCelpYUkVUMDFCZEhSeWN5aGxiR1Z0Wlc1MExDQmhkSFJ5Y3lrN1hHNGdJSDFjYmx4dUlDQnZibEpsWVdRb2EyVjVLU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmxiR1Z0Wlc1MElIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tDRjBjbUZ1YzJadmNtMVFjbTl3YzF0clpYbGRLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdaV3hsYldWdWRDNW5aWFJCZEhSeWFXSjFkR1VvYTJWNUtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnWTI5dWMzUWdkbUZzZFdWVWVYQmxJRDBnZG1Gc2RXVlVlWEJsVFdGd1cydGxlVjA3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdLSFpoYkhWbFZIbHdaU2tnUHlCMllXeDFaVlI1Y0dVdVpHVm1ZWFZzZENBNklEQTdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlDaGxiR1Z0Wlc1MExDQndjbTl3Y3lrZ2UxeHVJQ0J5WlhSMWNtNGdibVYzSUZOV1IxSmxibVJsY21WeUtIdGNiaUFnSUNCbGJHVnRaVzUwTEZ4dUlDQWdJQzR1TG5CeWIzQnpYRzRnSUgwcE8xeHVmVnh1SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JlbmRlcmVycy9zdmcvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgZGF0YSkge1xuICB2YXIgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxO1xuICB2YXIgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDE7XG4gIHZhciB0cmFuc2Zvcm1PcmlnaW5YID0gZGF0YS53aWR0aCAqICgoc3RhdGUub3JpZ2luWCB8fCA1MCkgLyAxMDApICsgZGF0YS54O1xuICB2YXIgdHJhbnNmb3JtT3JpZ2luWSA9IGRhdGEuaGVpZ2h0ICogKChzdGF0ZS5vcmlnaW5ZIHx8IDUwKSAvIDEwMCkgKyBkYXRhLnk7XG4gIHZhciBzY2FsZVRyYW5zZm9ybVggPSAtdHJhbnNmb3JtT3JpZ2luWCAqIChzY2FsZSAqIDEpO1xuICB2YXIgc2NhbGVUcmFuc2Zvcm1ZID0gLXRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSk7XG4gIHZhciBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlO1xuICB2YXIgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVk7XG4gIHZhciB0cmFuc2Zvcm0gPSB7XG4gICAgdHJhbnNsYXRlOiAndHJhbnNsYXRlKCcgKyBzdGF0ZS50cmFuc2xhdGVYICsgJywgJyArIHN0YXRlLnRyYW5zbGF0ZVkgKyAnKSAnLFxuICAgIHNjYWxlOiAndHJhbnNsYXRlKCcgKyBzY2FsZVRyYW5zZm9ybVggKyAnLCAnICsgc2NhbGVUcmFuc2Zvcm1ZICsgJykgc2NhbGUoJyArIHNjYWxlICsgJywgJyArIHNjYWxlWSArICcpIHRyYW5zbGF0ZSgnICsgc2NhbGVSZXBsYWNlWCArICcsICcgKyBzY2FsZVJlcGxhY2VZICsgJykgJyxcbiAgICByb3RhdGU6ICdyb3RhdGUoJyArIHN0YXRlLnJvdGF0ZSArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5YICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblkgKyAnKSAnLFxuICAgIHNrZXdYOiAnc2tld1goJyArIHN0YXRlLnNrZXdYICsgJykgJyxcbiAgICBza2V3WTogJ3NrZXdZKCcgKyBzdGF0ZS5za2V3WSArICcpICdcbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wc1soMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgZm9yICh2YXIgX2tleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IF9rZXkgPT09ICdzY2FsZScgPyAnMScgOiAnMCc7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB0cmFuc2Zvcm1bX2tleV0ucmVwbGFjZSgvdW5kZWZpbmVkL2csIGRlZmF1bHRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDJKMWFXeGtMbXB6SWwwc0ltNWhiV1Z6SWpwYkltSjFhV3hrSWl3aVdrVlNUMTlPVDFSZldrVlNUeUlzSW5OMFlYUmxJaXdpWkdGMFlTSXNJbWhoYzFSeVlXNXpabTl5YlNJc0luQnliM0J6SWl3aWMyTmhiR1VpTENKMWJtUmxabWx1WldRaUxDSnpZMkZzWlZnaUxDSnpZMkZzWlZraUxDSjBjbUZ1YzJadmNtMVBjbWxuYVc1WUlpd2lkMmxrZEdnaUxDSnZjbWxuYVc1WUlpd2llQ0lzSW5SeVlXNXpabTl5YlU5eWFXZHBibGtpTENKb1pXbG5hSFFpTENKdmNtbG5hVzVaSWl3aWVTSXNJbk5qWVd4bFZISmhibk5tYjNKdFdDSXNJbk5qWVd4bFZISmhibk5tYjNKdFdTSXNJbk5qWVd4bFVtVndiR0ZqWlZnaUxDSnpZMkZzWlZKbGNHeGhZMlZaSWl3aWRISmhibk5tYjNKdElpd2lkSEpoYm5Oc1lYUmxJaXdpZEhKaGJuTnNZWFJsV0NJc0luUnlZVzV6YkdGMFpWa2lMQ0p5YjNSaGRHVWlMQ0p6YTJWM1dDSXNJbk5yWlhkWklpd2lhMlY1SWl3aWFHRnpUM2R1VUhKdmNHVnlkSGtpTENKa1pXWmhkV3gwVm1Gc2RXVWlMQ0p5WlhCc1lXTmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUzNkQ1FTeExPenRCUVV4NFFqczdRVUZEUVRzN096czdPMEZCUlVFc1NVRkJUVU1zWjBKQlFXZENMRTFCUVhSQ096dEJRVVZsTEZOQlFWTkVMRXRCUVZRc1EwRkJaVVVzUzBGQlppeEZRVUZ6UWtNc1NVRkJkRUlzUlVGQk5FSTdRVUZEZWtNc1RVRkJTVU1zWlVGQlpTeExRVUZ1UWp0QlFVTkJMRTFCUVUxRExGRkJRVkVzUlVGQlpEdEJRVU5CTEUxQlFVMURMRkZCUVZGS0xFMUJRVTFKTEV0QlFVNHNTMEZCWjBKRExGTkJRV2hDTEVkQlFUUkNUQ3hOUVVGTlNTeExRVUZPTEVsQlFXVk1MR0ZCUVRORExFZEJRVEpFUXl4TlFVRk5UU3hOUVVGT0xFbEJRV2RDTEVOQlFYcEdPMEZCUTBFc1RVRkJUVU1zVTBGQlUxQXNUVUZCVFU4c1RVRkJUaXhMUVVGcFFrWXNVMEZCYWtJc1IwRkJOa0pNTEUxQlFVMVBMRTFCUVU0c1NVRkJaMEpTTEdGQlFUZERMRWRCUVRaRVN5eFRRVUZUTEVOQlFYSkdPMEZCUTBFc1RVRkJUVWtzYlVKQlFXMUNVQ3hMUVVGTFVTeExRVUZNTEVsQlFXTXNRMEZCUTFRc1RVRkJUVlVzVDBGQlRpeEpRVUZwUWl4RlFVRnNRaXhKUVVGM1FpeEhRVUYwUXl4SlFVRTJRMVFzUzBGQlMxVXNRMEZCTTBVN1FVRkRRU3hOUVVGTlF5eHRRa0ZCYlVKWUxFdEJRVXRaTEUxQlFVd3NTVUZCWlN4RFFVRkRZaXhOUVVGTll5eFBRVUZPTEVsQlFXbENMRVZCUVd4Q0xFbEJRWGRDTEVkQlFYWkRMRWxCUVRoRFlpeExRVUZMWXl4RFFVRTFSVHRCUVVOQkxFMUJRVTFETEd0Q1FVRnJRaXhEUVVGRlVpeG5Ra0ZCUml4SlFVRnpRa29zVVVGQlVTeERRVUU1UWl4RFFVRjRRanRCUVVOQkxFMUJRVTFoTEd0Q1FVRnJRaXhEUVVGRlRDeG5Ra0ZCUml4SlFVRnpRa3dzVTBGQlV5eERRVUV2UWl4RFFVRjRRanRCUVVOQkxFMUJRVTFYTEdkQ1FVRm5RbFlzYlVKQlFXMUNTaXhMUVVGNlF6dEJRVU5CTEUxQlFVMWxMR2RDUVVGblFsQXNiVUpCUVcxQ1RDeE5RVUY2UXp0QlFVTkJMRTFCUVUxaExGbEJRVms3UVVGRGFFSkRMRGhDUVVGM1FuSkNMRTFCUVUxelFpeFZRVUU1UWl4VlFVRTJRM1JDTEUxQlFVMTFRaXhWUVVGdVJDeFBRVVJuUWp0QlFVVm9RbTVDTERCQ1FVRnZRbGtzWlVGQmNFSXNWVUZCZDBORExHVkJRWGhETEdkQ1FVRnJSV0lzUzBGQmJFVXNWVUZCTkVWSExFMUJRVFZGTEc5Q1FVRnBSMWNzWVVGQmFrY3NWVUZCYlVoRExHRkJRVzVJTEU5QlJtZENPMEZCUjJoQ1N5eDNRa0ZCYTBKNFFpeE5RVUZOZDBJc1RVRkJlRUlzVlVGQmJVTm9RaXhuUWtGQmJrTXNWVUZCZDBSSkxHZENRVUY0UkN4UFFVaG5RanRCUVVsb1FtRXNjMEpCUVdkQ2VrSXNUVUZCVFhsQ0xFdEJRWFJDTEU5QlNtZENPMEZCUzJoQ1F5eHpRa0ZCWjBJeFFpeE5RVUZOTUVJc1MwRkJkRUk3UVVGTVowSXNSMEZCYkVJN08wRkJVVUVzVDBGQlN5eEpRVUZKUXl4SFFVRlVMRWxCUVdkQ00wSXNTMEZCYUVJc1JVRkJkVUk3UVVGRGNrSXNVVUZCU1VFc1RVRkJUVFJDTEdOQlFVNHNRMEZCY1VKRUxFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkROMElzVlVGQlNTeDVRa0ZCWlVFc1IwRkJaaXhEUVVGS0xFVkJRWGxDTzBGQlEzWkNla0lzZFVKQlFXVXNTVUZCWmp0QlFVTkVMRTlCUmtRc1RVRkZUenRCUVVOTVF5eGpRVUZOTEhkQ1FVRlpkMElzUjBGQldpeERRVUZPTEVsQlFUQkNNMElzVFVGQlRUSkNMRWRCUVU0c1EwRkJNVUk3UVVGRFJEdEJRVU5HTzBGQlEwWTdPMEZCUlVRc1RVRkJTWHBDTEZsQlFVb3NSVUZCYTBJN1FVRkRhRUpETEZWQlFVMXBRaXhUUVVGT0xFZEJRV3RDTEVWQlFXeENPenRCUVVWQkxGTkJRVXNzU1VGQlNVOHNTVUZCVkN4SlFVRm5RbEFzVTBGQmFFSXNSVUZCTWtJN1FVRkRla0lzVlVGQlNVRXNWVUZCVlZFc1kwRkJWaXhEUVVGNVFrUXNTVUZCZWtJc1EwRkJTaXhGUVVGdFF6dEJRVU5xUXl4WlFVRk5SU3hsUVVGblFrWXNVMEZCVVN4UFFVRlVMRWRCUVc5Q0xFZEJRWEJDTEVkQlFUQkNMRWRCUVM5RE8wRkJRMEY0UWl4alFVRk5hVUlzVTBGQlRpeEpRVUZ0UWtFc1ZVRkJWVThzU1VGQlZpeEZRVUZsUnl4UFFVRm1MRU5CUVhWQ0xGbEJRWFpDTEVWQlFYRkRSQ3haUVVGeVF5eERRVUZ1UWp0QlFVTkVPMEZCUTBZN1FVRkRSanM3UVVGRlJDeFRRVUZQTVVJc1MwRkJVRHRCUVVORUlpd2labWxzWlNJNkltSjFhV3hrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhKekwyZHBkR2gxWWk5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmpZVzFsYkZSdlJHRnphQ0I5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1puSnZiU0FuTGk0dlkzTnpMM1J5WVc1elptOXliUzF3Y205d2N5YzdYRzVjYm1OdmJuTjBJRnBGVWs5ZlRrOVVYMXBGVWs4Z1BTQXdMakF3TURFN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlHSjFhV3hrS0hOMFlYUmxMQ0JrWVhSaEtTQjdYRzRnSUd4bGRDQm9ZWE5VY21GdWMyWnZjbTBnUFNCbVlXeHpaVHRjYmlBZ1kyOXVjM1FnY0hKdmNITWdQU0I3ZlR0Y2JpQWdZMjl1YzNRZ2MyTmhiR1VnUFNCemRHRjBaUzV6WTJGc1pTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z2MzUmhkR1V1YzJOaGJHVWdmSHdnV2tWU1QxOU9UMVJmV2tWU1R5QTZJSE4wWVhSbExuTmpZV3hsV0NCOGZDQXhPMXh1SUNCamIyNXpkQ0J6WTJGc1pWa2dQU0J6ZEdGMFpTNXpZMkZzWlZrZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhOMFlYUmxMbk5qWVd4bFdTQjhmQ0JhUlZKUFgwNVBWRjlhUlZKUElEb2djMk5oYkdVZ2ZId2dNVHRjYmlBZ1kyOXVjM1FnZEhKaGJuTm1iM0p0VDNKcFoybHVXQ0E5SUdSaGRHRXVkMmxrZEdnZ0tpQW9LSE4wWVhSbExtOXlhV2RwYmxnZ2ZId2dOVEFwSUM4Z01UQXdLU0FySUdSaGRHRXVlRHRjYmlBZ1kyOXVjM1FnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0E5SUdSaGRHRXVhR1ZwWjJoMElDb2dLQ2h6ZEdGMFpTNXZjbWxuYVc1WklIeDhJRFV3S1NBdklERXdNQ2tnS3lCa1lYUmhMbms3WEc0Z0lHTnZibk4wSUhOallXeGxWSEpoYm5ObWIzSnRXQ0E5SUMwZ2RISmhibk5tYjNKdFQzSnBaMmx1V0NBcUlDaHpZMkZzWlNBcUlERXBPMXh1SUNCamIyNXpkQ0J6WTJGc1pWUnlZVzV6Wm05eWJWa2dQU0F0SUhSeVlXNXpabTl5YlU5eWFXZHBibGtnS2lBb2MyTmhiR1ZaSUNvZ01TazdYRzRnSUdOdmJuTjBJSE5qWVd4bFVtVndiR0ZqWlZnZ1BTQjBjbUZ1YzJadmNtMVBjbWxuYVc1WUlDOGdjMk5oYkdVN1hHNGdJR052Ym5OMElITmpZV3hsVW1Wd2JHRmpaVmtnUFNCMGNtRnVjMlp2Y20xUGNtbG5hVzVaSUM4Z2MyTmhiR1ZaTzF4dUlDQmpiMjV6ZENCMGNtRnVjMlp2Y20wZ1BTQjdYRzRnSUNBZ2RISmhibk5zWVhSbE9pQmdkSEpoYm5Oc1lYUmxLQ1I3YzNSaGRHVXVkSEpoYm5Oc1lYUmxXSDBzSUNSN2MzUmhkR1V1ZEhKaGJuTnNZWFJsV1gwcElHQXNYRzRnSUNBZ2MyTmhiR1U2SUdCMGNtRnVjMnhoZEdVb0pIdHpZMkZzWlZSeVlXNXpabTl5YlZoOUxDQWtlM05qWVd4bFZISmhibk5tYjNKdFdYMHBJSE5qWVd4bEtDUjdjMk5oYkdWOUxDQWtlM05qWVd4bFdYMHBJSFJ5WVc1emJHRjBaU2drZTNOallXeGxVbVZ3YkdGalpWaDlMQ0FrZTNOallXeGxVbVZ3YkdGalpWbDlLU0JnTEZ4dUlDQWdJSEp2ZEdGMFpUb2dZSEp2ZEdGMFpTZ2tlM04wWVhSbExuSnZkR0YwWlgwc0lDUjdkSEpoYm5ObWIzSnRUM0pwWjJsdVdIMHNJQ1I3ZEhKaGJuTm1iM0p0VDNKcFoybHVXWDBwSUdBc1hHNGdJQ0FnYzJ0bGQxZzZJR0J6YTJWM1dDZ2tlM04wWVhSbExuTnJaWGRZZlNrZ1lDeGNiaUFnSUNCemEyVjNXVG9nWUhOclpYZFpLQ1I3YzNSaGRHVXVjMnRsZDFsOUtTQmdYRzRnSUgwN1hHNWNiaUFnWm05eUlDaHNaWFFnYTJWNUlHbHVJSE4wWVhSbEtTQjdYRzRnSUNBZ2FXWWdLSE4wWVhSbExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJR2xtSUNoMGNtRnVjMlp2Y20xUWNtOXdjMXRyWlhsZEtTQjdYRzRnSUNBZ0lDQWdJR2hoYzFSeVlXNXpabTl5YlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0J3Y205d2MxdGpZVzFsYkZSdlJHRnphQ2hyWlhrcFhTQTlJSE4wWVhSbFcydGxlVjA3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYVdZZ0tHaGhjMVJ5WVc1elptOXliU2tnZTF4dUlDQWdJSEJ5YjNCekxuUnlZVzV6Wm05eWJTQTlJQ2NuTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFJ5WVc1elptOXliU2tnZTF4dUlDQWdJQ0FnYVdZZ0tIUnlZVzV6Wm05eWJTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR1JsWm1GMWJIUldZV3gxWlNBOUlDaHJaWGtnUFQwOUlDZHpZMkZzWlNjcElEOGdKekVuSURvZ0p6QW5PMXh1SUNBZ0lDQWdJQ0J3Y205d2N5NTBjbUZ1YzJadmNtMGdLejBnZEhKaGJuTm1iM0p0VzJ0bGVWMHVjbVZ3YkdGalpTZ3ZkVzVrWldacGJtVmtMMmNzSUdSbFptRjFiSFJXWVd4MVpTazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlIQnliM0J6TzF4dWZWeHVJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcmVuZGVyZXJzL3N2Zy9idWlsZC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL2luYy92YWx1ZS10eXBlcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGZpbGw6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzdHJva2U6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzY2FsZTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWDogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIG9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhLFxuICBmaWxsT3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGEsXG4gIHN0cm9rZU9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDNaaGJIVmxMWFI1Y0dWekxtcHpJbDBzSW01aGJXVnpJanBiSW1acGJHd2lMQ0p6ZEhKdmEyVWlMQ0p6WTJGc1pTSXNJbk5qWVd4bFdDSXNJbk5qWVd4bFdTSXNJbTl3WVdOcGRIa2lMQ0ptYVd4c1QzQmhZMmwwZVNJc0luTjBjbTlyWlU5d1lXTnBkSGtpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdhMEpCUldVN1FVRkRZa0VzZVVKQlJHRTdRVUZGWWtNc01rSkJSbUU3UVVGSFlrTXNNRUpCU0dFN1FVRkpZa01zTWtKQlNtRTdRVUZMWWtNc01rSkJUR0U3UVVGTllrTXNORUpCVG1FN1FVRlBZa01zWjBOQlVHRTdRVUZSWWtNN1FVRlNZU3hESWl3aVptbHNaU0k2SW5aaGJIVmxMWFI1Y0dWekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYSnpMMmRwZEdoMVlpOXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJoYkhCb1lTd2dZMjlzYjNJc0lITmpZV3hsSUgwZ1puSnZiU0FuTGk0dkxpNHZhVzVqTDNaaGJIVmxMWFI1Y0dWekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNCbWFXeHNPaUJqYjJ4dmNpeGNiaUFnYzNSeWIydGxPaUJqYjJ4dmNpeGNiaUFnYzJOaGJHVTZJSE5qWVd4bExGeHVJQ0J6WTJGc1pWZzZJSE5qWVd4bExGeHVJQ0J6WTJGc1pWazZJSE5qWVd4bExGeHVJQ0J2Y0dGamFYUjVPaUJoYkhCb1lTeGNiaUFnWm1sc2JFOXdZV05wZEhrNklHRnNjR2hoTEZ4dUlDQnpkSEp2YTJWUGNHRmphWFI1T2lCaGJIQm9ZVnh1ZlRzaVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgU1ZHUGF0aFJlbmRlcmVyKF9leHRlbmRzKHtcbiAgICBlbGVtZW50OiBlbGVtZW50XG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTVkdQYXRoUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhTVkdQYXRoUmVuZGVyZXIsIF9SZW5kZXJlcik7XG5cbiAgZnVuY3Rpb24gU1ZHUGF0aFJlbmRlcmVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNWR1BhdGhSZW5kZXJlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVuZGVyZXIuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgdmFyIF9wcm9wcyRlbGVtZW50JGdldEJCbyA9IHByb3BzLmVsZW1lbnQuZ2V0QkJveCgpLFxuICAgICAgICB4ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLngsXG4gICAgICAgIHkgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueSxcbiAgICAgICAgd2lkdGggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby5oZWlnaHQ7XG5cbiAgICBfdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5LFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBwYXRoTGVuZ3RoOiBwcm9wcy5lbGVtZW50LmdldFRvdGFsTGVuZ3RoKClcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFNWR1BhdGhSZW5kZXJlci5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICB2YXIgcGF0aExlbmd0aCA9IHRoaXMuZWxlbWVudERpbWVuc2lvbnMucGF0aExlbmd0aDtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgICgwLCBfdXRpbHMuc2V0RE9NQXR0cnMpKGVsZW1lbnQsICgwLCBfYnVpbGQyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIHBhdGhMZW5ndGgpKTtcbiAgfTtcblxuICBTVkdQYXRoUmVuZGVyZXIucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5lbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICB9O1xuXG4gIHJldHVybiBTVkdQYXRoUmVuZGVyZXI7XG59KF8yLmRlZmF1bHQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTFhCaGRHZ3ZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHNpWld4bGJXVnVkQ0lzSW5CeWIzQnpJaXdpVTFaSFVHRjBhRkpsYm1SbGNtVnlJaXdpWjJWMFFrSnZlQ0lzSW5naUxDSjVJaXdpZDJsa2RHZ2lMQ0pvWldsbmFIUWlMQ0psYkdWdFpXNTBSR2x0Wlc1emFXOXVjeUlzSW5CaGRHaE1aVzVuZEdnaUxDSm5aWFJVYjNSaGJFeGxibWQwYUNJc0ltOXVVbVZ1WkdWeUlpd2ljM1JoZEdVaUxDSnZibEpsWVdRaUxDSnJaWGtpTENKblpYUkJkSFJ5YVdKMWRHVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRyUWtFMlFtVXNWVUZCVlVFc1QwRkJWaXhGUVVGdFFrTXNTMEZCYmtJc1JVRkJNRUk3UVVGRGRrTXNVMEZCVHl4SlFVRkpReXhsUVVGS08wRkJRMHhHTzBGQlJFc3NTMEZGUmtNc1MwRkdSU3hGUVVGUU8wRkJTVVFzUXpzN1FVRnNRMFE3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN096czdPMGxCUlUxRExHVTdPenRCUVVOS0xESkNRVUZaUkN4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlFVRXNhVVJCUTJwQ0xIRkNRVUZOUVN4TFFVRk9MRU5CUkdsQ096dEJRVUZCTEdkRFFVZGxRU3hOUVVGTlJDeFBRVUZPTEVOQlFXTkhMRTlCUVdRc1JVRklaanRCUVVGQkxGRkJSMVJETEVOQlNGTXNlVUpCUjFSQkxFTkJTRk03UVVGQlFTeFJRVWRPUXl4RFFVaE5MSGxDUVVkT1FTeERRVWhOTzBGQlFVRXNVVUZIU0VNc1MwRklSeXg1UWtGSFNFRXNTMEZJUnp0QlFVRkJMRkZCUjBsRExFMUJTRW9zZVVKQlIwbEJMRTFCU0VvN08wRkJTV3BDTEZWQlFVdERMR2xDUVVGTUxFZEJRWGxDTzBGQlEzWkNTaXhWUVVSMVFqdEJRVVYyUWtNc1ZVRkdkVUk3UVVGSGRrSkRMR3RDUVVoMVFqdEJRVWwyUWtNc2IwSkJTblZDTzBGQlMzWkNSU3hyUWtGQldWSXNUVUZCVFVRc1QwRkJUaXhEUVVGalZTeGpRVUZrTzBGQlRGY3NTMEZCZWtJN1FVRkthVUk3UVVGWGJFSTdPelJDUVVWRVF5eFJMSFZDUVVGWE8wRkJRVUVzVVVGRFJFWXNWVUZFUXl4SFFVTmpMRXRCUVV0RUxHbENRVVJ1UWl4RFFVTkVReXhWUVVSRE8wRkJRVUVzVVVGRlJGUXNUMEZHUXl4SFFVVlhMRXRCUVV0RExFdEJSbWhDTEVOQlJVUkVMRTlCUmtNN08wRkJSMVFzTkVKQlFWbEJMRTlCUVZvc1JVRkJjVUlzY1VKQlFVMHNTMEZCUzFrc1MwRkJXQ3hGUVVGclFrZ3NWVUZCYkVJc1EwRkJja0k3UVVGRFJDeEhPenMwUWtGRlJFa3NUU3h0UWtGQlQwTXNSeXhGUVVGTE8wRkJRMVlzVjBGQlR5eExRVUZMWWl4TFFVRk1MRU5CUVZkRUxFOUJRVmdzUTBGQmJVSmxMRmxCUVc1Q0xFTkJRV2REUkN4SFFVRm9ReXhEUVVGUU8wRkJRMFFzUnlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0Z5Y3k5bmFYUm9kV0l2Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUZKbGJtUmxjbVZ5SUdaeWIyMGdKeTR1THljN1hHNXBiWEJ2Y25RZ1luVnBiR1FnWm5KdmJTQW5MaTlpZFdsc1pDYzdYRzVwYlhCdmNuUWdleUJ6WlhSRVQwMUJkSFJ5Y3lCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtTnNZWE56SUZOV1IxQmhkR2hTWlc1a1pYSmxjaUJsZUhSbGJtUnpJRkpsYm1SbGNtVnlJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNCemRYQmxjaWh3Y205d2N5azdYRzVjYmlBZ0lDQmpiMjV6ZENCN0lIZ3NJSGtzSUhkcFpIUm9MQ0JvWldsbmFIUWdmU0E5SUhCeWIzQnpMbVZzWlcxbGJuUXVaMlYwUWtKdmVDZ3BPMXh1SUNBZ0lIUm9hWE11Wld4bGJXVnVkRVJwYldWdWMybHZibk1nUFNCN1hHNGdJQ0FnSUNCNExGeHVJQ0FnSUNBZ2VTeGNiaUFnSUNBZ0lIZHBaSFJvTEZ4dUlDQWdJQ0FnYUdWcFoyaDBMRnh1SUNBZ0lDQWdjR0YwYUV4bGJtZDBhRG9nY0hKdmNITXVaV3hsYldWdWRDNW5aWFJVYjNSaGJFeGxibWQwYUNncFhHNGdJQ0FnZlR0Y2JpQWdmVnh1WEc0Z0lHOXVVbVZ1WkdWeUtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2NHRjBhRXhsYm1kMGFDQjlJRDBnZEdocGN5NWxiR1Z0Wlc1MFJHbHRaVzV6YVc5dWN6dGNiaUFnSUNCamIyNXpkQ0I3SUdWc1pXMWxiblFnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ2MyVjBSRTlOUVhSMGNuTW9aV3hsYldWdWRDd2dZblZwYkdRb2RHaHBjeTV6ZEdGMFpTd2djR0YwYUV4bGJtZDBhQ2twTzF4dUlDQjlYRzVjYmlBZ2IyNVNaV0ZrS0d0bGVTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkJ5YjNCekxtVnNaVzFsYm5RdVoyVjBRWFIwY21saWRYUmxLR3RsZVNrN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z0tHVnNaVzFsYm5Rc0lIQnliM0J6S1NCN1hHNGdJSEpsZEhWeWJpQnVaWGNnVTFaSFVHRjBhRkpsYm1SbGNtVnlLSHRjYmlBZ0lDQmxiR1Z0Wlc1MExGeHVJQ0FnSUM0dUxuQnliM0J6WEc0Z0lIMHBPMXh1ZlZ4dUlsMTlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gcGVyY2VudFRvUGl4ZWxzKHBlcmNlbnQsIGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCAqIGxlbmd0aCArICdweCc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RhdGUsIGxlbmd0aCkge1xuICB2YXIgc3R5bGVzID0ge307XG4gIHZhciBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgbGVuZ3RoOiAnMCcsXG4gICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICB9O1xuICB2YXIgaGFzRGFzaEFycmF5ID0gZmFsc2U7XG5cbiAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICBzdHlsZXNbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGRhc2hBcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBkYXNoQXJyYXlTdHlsZXMuc3BhY2luZztcbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTFhCaGRHZ3ZZblZwYkdRdWFuTWlYU3dpYm1GdFpYTWlPbHNpY0dWeVkyVnVkRlJ2VUdsNFpXeHpJaXdpY0dWeVkyVnVkQ0lzSW14bGJtZDBhQ0lzSW5CaGNuTmxSbXh2WVhRaUxDSnpkR0YwWlNJc0luTjBlV3hsY3lJc0ltUmhjMmhCY25KaGVWTjBlV3hsY3lJc0luTndZV05wYm1jaUxDSm9ZWE5FWVhOb1FYSnlZWGtpTENKclpYa2lMQ0pvWVhOUGQyNVFjbTl3WlhKMGVTSXNJblpoYkhWbElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRVHM3T3pzN08wRkJUVUVzU1VGQlRVRXNhMEpCUVd0Q0xGTkJRV3hDUVN4bFFVRnJRaXhEUVVGRFF5eFBRVUZFTEVWQlFWVkRMRTFCUVZZN1FVRkJRU3hUUVVGelFrTXNWMEZCVjBZc1QwRkJXQ3hKUVVGelFpeEhRVUYyUWl4SFFVRTRRa01zVFVGQk9VSXNSMEZCZFVNc1NVRkJOVVE3UVVGQlFTeERRVUY0UWpzN2EwSkJSV1VzVlVGQlEwVXNTMEZCUkN4RlFVRlJSaXhOUVVGU0xFVkJRVzFDTzBGQlEyaERMRTFCUVUxSExGTkJRVk1zUlVGQlpqdEJRVU5CTEUxQlFVMURMR3RDUVVGclFqdEJRVU4wUWtvc1dVRkJVU3hIUVVSak8wRkJSWFJDU3l4aFFVRlRUQ3hUUVVGVE8wRkJSa2tzUjBGQmVFSTdRVUZKUVN4TlFVRkpUU3hsUVVGbExFdEJRVzVDT3p0QlFVVkJMRTlCUVVzc1NVRkJTVU1zUjBGQlZDeEpRVUZuUWt3c1MwRkJhRUlzUlVGQmRVSTdRVUZEY2tJc1VVRkJTVUVzVFVGQlRVMHNZMEZCVGl4RFFVRnhRa1FzUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNM1FpeFZRVUZOUlN4UlFVRlJVQ3hOUVVGTlN5eEhRVUZPTEVOQlFXUTdPMEZCUlVFc1kwRkJVVUVzUjBGQlVqdEJRVU5CTEdGQlFVc3NVVUZCVER0QlFVTkJMR0ZCUVVzc1UwRkJURHRCUVVORlJDeDVRa0ZCWlN4SlFVRm1PMEZCUTBGR0xEQkNRVUZuUWtjc1IwRkJhRUlzU1VGQmRVSlVMR2RDUVVGblFsY3NTMEZCYUVJc1JVRkJkVUpVTEUxQlFYWkNMRU5CUVhaQ08wRkJRMEU3UVVGRFJpeGhRVUZMTEZGQlFVdzdRVUZEUlVjc2FVSkJRVThzYlVKQlFWQXNTVUZCT0VKTUxHZENRVUZuUWl4RFFVRkRWeXhMUVVGcVFpeEZRVUYzUWxRc1RVRkJlRUlzUTBGQk9VSTdRVUZEUVR0QlFVTkdPMEZCUTBWSExHbENRVUZQU1N4SFFVRlFMRWxCUVdORkxFdEJRV1E3UVVGV1JqdEJRVmxFTzBGQlEwWTdPMEZCUlVRc1RVRkJTVWdzV1VGQlNpeEZRVUZyUWp0QlFVTm9Ra2dzVjBGQlR5eHJRa0ZCVUN4SlFVRTJRa01zWjBKQlFXZENTaXhOUVVGb1FpeEhRVUY1UWl4SFFVRjZRaXhIUVVFclFra3NaMEpCUVdkQ1F5eFBRVUUxUlR0QlFVTkVPenRCUVVWRUxGTkJRVTlHTEUxQlFWQTdRVUZEUkN4RElpd2labWxzWlNJNkltSjFhV3hrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhKekwyZHBkR2gxWWk5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNCRGIyNTJaWEowSUhCbGNtTmxiblJoWjJVZ2RHOGdjR2w0Wld4elhHNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJRWlhKalpXNTBZV2RsSUc5bUlIUnZkR0ZzSUd4bGJtZDBhRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZSdmRHRnNJR3hsYm1kMGFGeHVLaTljYm1OdmJuTjBJSEJsY21ObGJuUlViMUJwZUdWc2N5QTlJQ2h3WlhKalpXNTBMQ0JzWlc1bmRHZ3BJRDArSUNod1lYSnpaVVpzYjJGMEtIQmxjbU5sYm5RcElDOGdNVEF3S1NBcUlHeGxibWQwYUNBcklDZHdlQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoemRHRjBaU3dnYkdWdVozUm9LU0E5UGlCN1hHNGdJR052Ym5OMElITjBlV3hsY3lBOUlIdDlPMXh1SUNCamIyNXpkQ0JrWVhOb1FYSnlZWGxUZEhsc1pYTWdQU0I3WEc0Z0lDQWdiR1Z1WjNSb09pQW5NQ2NzWEc0Z0lDQWdjM0JoWTJsdVp6b2diR1Z1WjNSb0lDc2dKM0I0SjF4dUlDQjlPMXh1SUNCc1pYUWdhR0Z6UkdGemFFRnljbUY1SUQwZ1ptRnNjMlU3WEc1Y2JpQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlITjBZWFJsS1NCN1hHNGdJQ0FnYVdZZ0tITjBZWFJsTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnYzNSaGRHVmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ2MzZHBkR05vSUNoclpYa3BJSHRjYmlBZ0lDQWdJR05oYzJVZ0oyeGxibWQwYUNjNlhHNGdJQ0FnSUNCallYTmxJQ2R6Y0dGamFXNW5KenBjYmlBZ0lDQWdJQ0FnYUdGelJHRnphRUZ5Y21GNUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ1pHRnphRUZ5Y21GNVUzUjViR1Z6VzJ0bGVWMGdQU0J3WlhKalpXNTBWRzlRYVhobGJITW9kbUZzZFdVc0lHeGxibWQwYUNrN1hHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnWTJGelpTQW5iMlptYzJWMEp6cGNiaUFnSUNBZ0lDQWdjM1I1YkdWeld5ZHpkSEp2YTJVdFpHRnphRzltWm5ObGRDZGRJRDBnY0dWeVkyVnVkRlJ2VUdsNFpXeHpLQzEyWVd4MVpTd2diR1Z1WjNSb0tUdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNCa1pXWmhkV3gwT2x4dUlDQWdJQ0FnSUNCemRIbHNaWE5iYTJWNVhTQTlJSFpoYkhWbE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHbG1JQ2hvWVhORVlYTm9RWEp5WVhrcElIdGNiaUFnSUNCemRIbHNaWE5iSjNOMGNtOXJaUzFrWVhOb1lYSnlZWGtuWFNBOUlHUmhjMmhCY25KaGVWTjBlV3hsY3k1c1pXNW5kR2dnS3lBbklDY2dLeUJrWVhOb1FYSnlZWGxUZEhsc1pYTXVjM0JoWTJsdVp6dGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnpkSGxzWlhNN1hHNTlPMXh1SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9idWlsZC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi9wb3Btb3Rpb24nKTtcblxudmFyIHBvcG1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wb3Btb3Rpb24pO1xuXG52YXIgX3NyYyA9IHJlcXVpcmUoJy4uL3BhY2thZ2VzL3BvcG1vdGlvbi1kcmFnZ2FibGUvc3JjJyk7XG5cbnZhciBfc3JjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NyYyk7XG5cbnZhciBfc3JjMyA9IHJlcXVpcmUoJy4uL3BhY2thZ2VzL3BvcG1vdGlvbi1pbmVydGlhL3NyYycpO1xuXG52YXIgX3NyYzQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcmMzKTtcblxudmFyIF9zcmM1ID0gcmVxdWlyZSgnLi4vcGFja2FnZXMvcG9wbW90aW9uLXNjcm9sbC9zcmMnKTtcblxudmFyIF9zcmM2ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3JjNSk7XG5cbnZhciBfc3JjNyA9IHJlcXVpcmUoJy4uL3BhY2thZ2VzL3BvcG1vdGlvbi1zcGlubmFibGUvc3JjJyk7XG5cbnZhciBfc3JjOCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NyYzcpO1xuXG52YXIgX3NyYzkgPSByZXF1aXJlKCcuLi9wYWNrYWdlcy9wb3Btb3Rpb24tdGltZWxpbmUvc3JjJyk7XG5cbnZhciBfc3JjMTAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcmM5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxud2luZG93LnBvcG1vdGlvblhMID0gX2V4dGVuZHMoe30sIHBvcG1vdGlvbiwge1xuICBkcmFnZ2FibGU6IF9zcmMyLmRlZmF1bHQsXG4gIGluZXJ0aWE6IF9zcmM0LmRlZmF1bHQsXG4gIHNjcm9sbDogX3NyYzYuZGVmYXVsdCxcbiAgc3Bpbm5hYmxlOiBfc3JjOC5kZWZhdWx0LFxuICB0aW1lbGluZTogX3NyYzEwLmRlZmF1bHRcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW5iRzlpWVd3dGVHd3Vhbk1pWFN3aWJtRnRaWE1pT2xzaWNHOXdiVzkwYVc5dUlpd2lkMmx1Wkc5M0lpd2ljRzl3Ylc5MGFXOXVXRXdpTENKa2NtRm5aMkZpYkdVaUxDSnBibVZ5ZEdsaElpd2ljMk55YjJ4c0lpd2ljM0JwYm01aFlteGxJaXdpZEdsdFpXeHBibVVpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdTVUZCV1VFc1V6czdRVUZEV2pzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN096dEJRVVZCUXl4UFFVRlBReXhYUVVGUUxHZENRVU5MUml4VFFVUk1PMEZCUlVWSExEQkNRVVpHTzBGQlIwVkRMSGRDUVVoR08wRkJTVVZETEhWQ1FVcEdPMEZCUzBWRExEQkNRVXhHTzBGQlRVVkRPMEZCVGtZaUxDSm1hV3hsSWpvaVoyeHZZbUZzTFhoc0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYSnpMMmRwZEdoMVlpOXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdLaUJoY3lCd2IzQnRiM1JwYjI0Z1puSnZiU0FuTGk5d2IzQnRiM1JwYjI0bk8xeHVhVzF3YjNKMElHUnlZV2RuWVdKc1pTQm1jbTl0SUNjdUxpOXdZV05yWVdkbGN5OXdiM0J0YjNScGIyNHRaSEpoWjJkaFlteGxMM055WXljN1hHNXBiWEJ2Y25RZ2FXNWxjblJwWVNCbWNtOXRJQ2N1TGk5d1lXTnJZV2RsY3k5d2IzQnRiM1JwYjI0dGFXNWxjblJwWVM5emNtTW5PMXh1YVcxd2IzSjBJSE5qY205c2JDQm1jbTl0SUNjdUxpOXdZV05yWVdkbGN5OXdiM0J0YjNScGIyNHRjMk55YjJ4c0wzTnlZeWM3WEc1cGJYQnZjblFnYzNCcGJtNWhZbXhsSUdaeWIyMGdKeTR1TDNCaFkydGhaMlZ6TDNCdmNHMXZkR2x2YmkxemNHbHVibUZpYkdVdmMzSmpKenRjYm1sdGNHOXlkQ0IwYVcxbGJHbHVaU0JtY205dElDY3VMaTl3WVdOcllXZGxjeTl3YjNCdGIzUnBiMjR0ZEdsdFpXeHBibVV2YzNKakp6dGNibHh1ZDJsdVpHOTNMbkJ2Y0cxdmRHbHZibGhNSUQwZ2UxeHVJQ0F1TGk1d2IzQnRiM1JwYjI0c1hHNGdJR1J5WVdkbllXSnNaU3hjYmlBZ2FXNWxjblJwWVN4Y2JpQWdjMk55YjJ4c0xGeHVJQ0J6Y0dsdWJtRmliR1VzWEc0Z0lIUnBiV1ZzYVc1bFhHNTlPMXh1SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dsb2JhbC14bC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZHJhZ2dhYmxlO1xuXG52YXIgX3BvcG1vdGlvbiA9IHJlcXVpcmUoJ3BvcG1vdGlvbicpO1xuXG5mdW5jdGlvbiBkcmFnZ2FibGUobm9kZSkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge30sXG4gICAgICBfcmVmJHggPSBfcmVmLngsXG4gICAgICB4ID0gX3JlZiR4ID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3JlZiR4LFxuICAgICAgX3JlZiR5ID0gX3JlZi55LFxuICAgICAgeSA9IF9yZWYkeSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYkeSxcbiAgICAgIF9yZWYkaW5pdGlhbFggPSBfcmVmLmluaXRpYWxYLFxuICAgICAgaW5pdGlhbFggPSBfcmVmJGluaXRpYWxYID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRpbml0aWFsWCxcbiAgICAgIF9yZWYkaW5pdGlhbFkgPSBfcmVmLmluaXRpYWxZLFxuICAgICAgaW5pdGlhbFkgPSBfcmVmJGluaXRpYWxZID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRpbml0aWFsWSxcbiAgICAgIG9uRHJhZyA9IF9yZWYub25EcmFnLFxuICAgICAgb25EcmFnU3RhcnQgPSBfcmVmLm9uRHJhZ1N0YXJ0LFxuICAgICAgb25EcmFnU3RvcCA9IF9yZWYub25EcmFnU3RvcDtcblxuICB2YXIgbm9kZVJlbmRlcmVyID0gKDAsIF9wb3Btb3Rpb24uY3NzKShub2RlKTtcbiAgdmFyIHZhbHVlcyA9IHt9O1xuICBpZiAoeCkgdmFsdWVzLnggPSAoMCwgX3BvcG1vdGlvbi52YWx1ZSkoaW5pdGlhbFgsIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIG5vZGVSZW5kZXJlci5zZXQoJ3gnLCB2KTtcbiAgfSk7XG4gIGlmICh5KSB2YWx1ZXMueSA9ICgwLCBfcG9wbW90aW9uLnZhbHVlKShpbml0aWFsWSwgZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gbm9kZVJlbmRlcmVyLnNldCgneScsIHYpO1xuICB9KTtcblxuICB2YXIgbm9kZVhZID0gKDAsIF9wb3Btb3Rpb24uY29tcG9zaXRlKSh2YWx1ZXMsIHtcbiAgICBvblVwZGF0ZTogb25EcmFnXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0VHJhY2tpbmcoZSkge1xuICAgIHZhciBwb2ludGVyVHJhY2tlciA9ICgwLCBfcG9wbW90aW9uLnBvaW50ZXIpKGUpLnN0YXJ0KCk7XG5cbiAgICBpZiAoeCkge1xuICAgICAgKDAsIF9wb3Btb3Rpb24udHJhY2tPZmZzZXQpKHBvaW50ZXJUcmFja2VyLngsIHtcbiAgICAgICAgZnJvbTogbm9kZVhZLnguZ2V0KCksXG4gICAgICAgIG9uVXBkYXRlOiBub2RlWFkueFxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBpZiAoeSkge1xuICAgICAgKDAsIF9wb3Btb3Rpb24udHJhY2tPZmZzZXQpKHBvaW50ZXJUcmFja2VyLnksIHtcbiAgICAgICAgZnJvbTogbm9kZVhZLnkuZ2V0KCksXG4gICAgICAgIG9uVXBkYXRlOiBub2RlWFkueSxcbiAgICAgICAgb25TdG9wOiBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgICAgICAgcmV0dXJuIHBvaW50ZXJUcmFja2VyLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBpZiAob25EcmFnU3RhcnQpIG9uRHJhZ1N0YXJ0KG5vZGVYWSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wVHJhY2tpbmcoKSB7XG4gICAgbm9kZVhZLnN0b3AoKTtcblxuICAgIGlmIChvbkRyYWdTdG9wKSBvbkRyYWdTdG9wKG5vZGVYWSk7XG4gIH1cblxuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHN0YXJ0VHJhY2tpbmcpO1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzdGFydFRyYWNraW5nLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcFRyYWNraW5nKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBzdG9wVHJhY2tpbmcpO1xuXG4gIHJldHVybiBub2RlWFk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbkJoWTJ0aFoyVnpMM0J2Y0cxdmRHbHZiaTFrY21GbloyRmliR1V2YzNKakwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJbVJ5WVdkbllXSnNaU0lzSW01dlpHVWlMQ0o0SWl3aWVTSXNJbWx1YVhScFlXeFlJaXdpYVc1cGRHbGhiRmtpTENKdmJrUnlZV2NpTENKdmJrUnlZV2RUZEdGeWRDSXNJbTl1UkhKaFoxTjBiM0FpTENKdWIyUmxVbVZ1WkdWeVpYSWlMQ0oyWVd4MVpYTWlMQ0oySWl3aWMyVjBJaXdpYm05a1pWaFpJaXdpYjI1VmNHUmhkR1VpTENKemRHRnlkRlJ5WVdOcmFXNW5JaXdpWlNJc0luQnZhVzUwWlhKVWNtRmphMlZ5SWl3aWMzUmhjblFpTENKbWNtOXRJaXdpWjJWMElpd2liMjVUZEc5d0lpd2ljM1J2Y0NJc0luTjBiM0JVY21GamEybHVaeUlzSW1Ga1pFVjJaVzUwVEdsemRHVnVaWElpTENKd1lYTnphWFpsSWl3aVpHOWpkVzFsYm5RaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRkZkMEpCTEZNN08wRkJSbmhDT3p0QlFVVmxMRk5CUVZOQkxGTkJRVlFzUTBGQmJVSkRMRWxCUVc1Q0xFVkJVVkE3UVVGQlFTeHBSa0ZCU2l4RlFVRkpPMEZCUVVFc2IwSkJVRTVETEVOQlQwMDdRVUZCUVN4TlFWQk9RU3hEUVU5TkxEQkNRVkJHTEVsQlQwVTdRVUZCUVN4dlFrRk9Ua01zUTBGTlRUdEJRVUZCTEUxQlRrNUJMRU5CVFUwc01FSkJUa1lzU1VGTlJUdEJRVUZCTERKQ1FVeE9ReXhSUVV0Tk8wRkJRVUVzVFVGTVRrRXNVVUZMVFN4cFEwRk1TeXhEUVV0TU8wRkJRVUVzTWtKQlNrNURMRkZCU1UwN1FVRkJRU3hOUVVwT1FTeFJRVWxOTEdsRFFVcExMRU5CU1V3N1FVRkJRU3hOUVVoT1F5eE5RVWROTEZGQlNFNUJMRTFCUjAwN1FVRkJRU3hOUVVaT1F5eFhRVVZOTEZGQlJrNUJMRmRCUlUwN1FVRkJRU3hOUVVST1F5eFZRVU5OTEZGQlJFNUJMRlZCUTAwN08wRkJRMDRzVFVGQlRVTXNaVUZCWlN4dlFrRkJTVklzU1VGQlNpeERRVUZ5UWp0QlFVTkJMRTFCUVUxVExGTkJRVk1zUlVGQlpqdEJRVU5CTEUxQlFVbFNMRU5CUVVvc1JVRkJUMUVzVDBGQlQxSXNRMEZCVUN4SFFVRlhMSE5DUVVGTlJTeFJRVUZPTEVWQlFXZENMRlZCUVVOUExFTkJRVVE3UVVGQlFTeFhRVUZQUml4aFFVRmhSeXhIUVVGaUxFTkJRV2xDTEVkQlFXcENMRVZCUVhOQ1JDeERRVUYwUWl4RFFVRlFPMEZCUVVFc1IwRkJhRUlzUTBGQldEdEJRVU5RTEUxQlFVbFNMRU5CUVVvc1JVRkJUMDhzVDBGQlQxQXNRMEZCVUN4SFFVRlhMSE5DUVVGTlJTeFJRVUZPTEVWQlFXZENMRlZCUVVOTkxFTkJRVVE3UVVGQlFTeFhRVUZQUml4aFFVRmhSeXhIUVVGaUxFTkJRV2xDTEVkQlFXcENMRVZCUVhOQ1JDeERRVUYwUWl4RFFVRlFPMEZCUVVFc1IwRkJhRUlzUTBGQldEczdRVUZGVUN4TlFVRk5SU3hUUVVGVExEQkNRVUZWU0N4TlFVRldMRVZCUVd0Q08wRkJReTlDU1N4alFVRlZVanRCUVVSeFFpeEhRVUZzUWl4RFFVRm1PenRCUVVsQkxGZEJRVk5UTEdGQlFWUXNRMEZCZFVKRExFTkJRWFpDTEVWQlFUQkNPMEZCUTNoQ0xGRkJRVTFETEdsQ1FVRnBRaXgzUWtGQlVVUXNRMEZCVWl4RlFVRlhSU3hMUVVGWUxFVkJRWFpDT3p0QlFVVkJMRkZCUVVsb1FpeERRVUZLTEVWQlFVODdRVUZEVEN4clEwRkJXV1VzWlVGQlpXWXNRMEZCTTBJc1JVRkJPRUk3UVVGRE5VSnBRaXhqUVVGTlRpeFBRVUZQV0N4RFFVRlFMRU5CUVZOclFpeEhRVUZVTEVWQlJITkNPMEZCUlRWQ1RpeHJRa0ZCVlVRc1QwRkJUMWc3UVVGR1Z5eFBRVUU1UWl4RlFVZEhaMElzUzBGSVNEdEJRVWxFT3p0QlFVVkVMRkZCUVVsbUxFTkJRVW9zUlVGQlR6dEJRVU5NTEd0RFFVRlpZeXhsUVVGbFpDeERRVUV6UWl4RlFVRTRRanRCUVVNMVFtZENMR05CUVUxT0xFOUJRVTlXTEVOQlFWQXNRMEZCVTJsQ0xFZEJRVlFzUlVGRWMwSTdRVUZGTlVKT0xHdENRVUZWUkN4UFFVRlBWaXhEUVVaWE8wRkJSelZDYTBJc1owSkJRVkU3UVVGQlFTeHBRa0ZCVFVvc1pVRkJaVXNzU1VGQlppeEZRVUZPTzBGQlFVRTdRVUZJYjBJc1QwRkJPVUlzUlVGSlIwb3NTMEZLU0R0QlFVdEVPenRCUVVWRUxGRkJRVWxZTEZkQlFVb3NSVUZCYVVKQkxGbEJRVmxOTEUxQlFWbzdRVUZEYkVJN08wRkJSVVFzVjBGQlUxVXNXVUZCVkN4SFFVRjNRanRCUVVOMFFsWXNWMEZCVDFNc1NVRkJVRHM3UVVGRlFTeFJRVUZKWkN4VlFVRktMRVZCUVdkQ1FTeFhRVUZYU3l4TlFVRllPMEZCUTJwQ096dEJRVVZFV2l4UFFVRkxkVUlzWjBKQlFVd3NRMEZCYzBJc1YwRkJkRUlzUlVGQmJVTlVMR0ZCUVc1RE8wRkJRMEZrTEU5QlFVdDFRaXhuUWtGQlRDeERRVUZ6UWl4WlFVRjBRaXhGUVVGdlExUXNZVUZCY0VNc1JVRkJiVVFzUlVGQlJWVXNVMEZCVXl4TFFVRllMRVZCUVc1RU8wRkJRMEZETEZkQlFWTkdMR2RDUVVGVUxFTkJRVEJDTEZOQlFURkNMRVZCUVhGRFJDeFpRVUZ5UXp0QlFVTkJSeXhYUVVGVFJpeG5Ra0ZCVkN4RFFVRXdRaXhWUVVFeFFpeEZRVUZ6UTBRc1dVRkJkRU03TzBGQlJVRXNVMEZCVDFZc1RVRkJVRHRCUVVORUlpd2labWxzWlNJNkltbHVaR1Y0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhKekwyZHBkR2gxWWk5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmpiMjF3YjNOcGRHVXNJSFpoYkhWbExDQmpjM01zSUhCdmFXNTBaWElzSUhSeVlXTnJUMlptYzJWMElIMGdabkp2YlNBbmNHOXdiVzkwYVc5dUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdaSEpoWjJkaFlteGxLRzV2WkdVc0lIdGNiaUFnZUNBOUlIUnlkV1VzWEc0Z0lIa2dQU0IwY25WbExGeHVJQ0JwYm1sMGFXRnNXQ0E5SURBc1hHNGdJR2x1YVhScFlXeFpJRDBnTUN4Y2JpQWdiMjVFY21GbkxGeHVJQ0J2YmtSeVlXZFRkR0Z5ZEN4Y2JpQWdiMjVFY21GblUzUnZjRnh1ZlNBOUlIdDlLU0I3WEc0Z0lHTnZibk4wSUc1dlpHVlNaVzVrWlhKbGNpQTlJR056Y3lodWIyUmxLVHRjYmlBZ1kyOXVjM1FnZG1Gc2RXVnpJRDBnZTMwN1hHNGdJR2xtSUNoNEtTQjJZV3gxWlhNdWVDQTlJSFpoYkhWbEtHbHVhWFJwWVd4WUxDQW9kaWtnUFQ0Z2JtOWtaVkpsYm1SbGNtVnlMbk5sZENnbmVDY3NJSFlwS1R0Y2JpQWdhV1lnS0hrcElIWmhiSFZsY3k1NUlEMGdkbUZzZFdVb2FXNXBkR2xoYkZrc0lDaDJLU0E5UGlCdWIyUmxVbVZ1WkdWeVpYSXVjMlYwS0NkNUp5d2dkaWtwTzF4dVhHNGdJR052Ym5OMElHNXZaR1ZZV1NBOUlHTnZiWEJ2YzJsMFpTaDJZV3gxWlhNc0lIdGNiaUFnSUNCdmJsVndaR0YwWlRvZ2IyNUVjbUZuWEc0Z0lIMHBPMXh1WEc0Z0lHWjFibU4wYVc5dUlITjBZWEowVkhKaFkydHBibWNvWlNrZ2UxeHVJQ0FnSUdOdmJuTjBJSEJ2YVc1MFpYSlVjbUZqYTJWeUlEMGdjRzlwYm5SbGNpaGxLUzV6ZEdGeWRDZ3BPMXh1WEc0Z0lDQWdhV1lnS0hncElIdGNiaUFnSUNBZ0lIUnlZV05yVDJabWMyVjBLSEJ2YVc1MFpYSlVjbUZqYTJWeUxuZ3NJSHRjYmlBZ0lDQWdJQ0FnWm5KdmJUb2dibTlrWlZoWkxuZ3VaMlYwS0Nrc1hHNGdJQ0FnSUNBZ0lHOXVWWEJrWVhSbE9pQnViMlJsV0ZrdWVGeHVJQ0FnSUNBZ2ZTa3VjM1JoY25Rb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9lU2tnZTF4dUlDQWdJQ0FnZEhKaFkydFBabVp6WlhRb2NHOXBiblJsY2xSeVlXTnJaWEl1ZVN3Z2UxeHVJQ0FnSUNBZ0lDQm1jbTl0T2lCdWIyUmxXRmt1ZVM1blpYUW9LU3hjYmlBZ0lDQWdJQ0FnYjI1VmNHUmhkR1U2SUc1dlpHVllXUzU1TEZ4dUlDQWdJQ0FnSUNCdmJsTjBiM0E2SUNncElEMCtJSEJ2YVc1MFpYSlVjbUZqYTJWeUxuTjBiM0FvS1Z4dUlDQWdJQ0FnZlNrdWMzUmhjblFvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2IyNUVjbUZuVTNSaGNuUXBJRzl1UkhKaFoxTjBZWEowS0c1dlpHVllXU2s3WEc0Z0lIMWNibHh1SUNCbWRXNWpkR2x2YmlCemRHOXdWSEpoWTJ0cGJtY29LU0I3WEc0Z0lDQWdibTlrWlZoWkxuTjBiM0FvS1R0Y2JseHVJQ0FnSUdsbUlDaHZia1J5WVdkVGRHOXdLU0J2YmtSeVlXZFRkRzl3S0c1dlpHVllXU2s3WEc0Z0lIMWNibHh1SUNCdWIyUmxMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KMjF2ZFhObFpHOTNiaWNzSUhOMFlYSjBWSEpoWTJ0cGJtY3BPMXh1SUNCdWIyUmxMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KM1J2ZFdOb2MzUmhjblFuTENCemRHRnlkRlJ5WVdOcmFXNW5MQ0I3SUhCaGMzTnBkbVU2SUdaaGJITmxJSDBwTzF4dUlDQmtiMk4xYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZHRiM1Z6WlhWd0p5d2djM1J2Y0ZSeVlXTnJhVzVuS1R0Y2JpQWdaRzlqZFcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25kRzkxWTJobGJtUW5MQ0J6ZEc5d1ZISmhZMnRwYm1jcE8xeHVYRzRnSUhKbGRIVnliaUJ1YjJSbFdGazdYRzU5WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhY2thZ2VzL3BvcG1vdGlvbi1kcmFnZ2FibGUvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgncG9wbW90aW9uJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH0gLy8gSW1wbGVtZW50YXRpb24gb2YgaHR0cHM6Ly9hcml5YS5pby8yMDEzLzExL2phdmFzY3JpcHQta2luZXRpYy1zY3JvbGxpbmctcGFydC0yXG5cblxudmFyIEluZXJ0aWEgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoSW5lcnRpYSwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gSW5lcnRpYSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRpYSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIEluZXJ0aWEucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICB2ZWxvY2l0eSA9IF9wcm9wcy52ZWxvY2l0eSxcbiAgICAgICAgcG93ZXIgPSBfcHJvcHMucG93ZXIsXG4gICAgICAgIG1vZGlmeVRhcmdldCA9IF9wcm9wcy5tb2RpZnlUYXJnZXQ7XG5cblxuICAgIHRoaXMuYW1wbGl0dWRlID0gcG93ZXIgKiB2ZWxvY2l0eTtcbiAgICB0aGlzLnRhcmdldCA9IE1hdGgucm91bmQodGhpcy5jdXJyZW50ICsgdGhpcy5hbXBsaXR1ZGUpO1xuICAgIHRoaXMuZWxhcHNlZCA9IDA7XG5cbiAgICBpZiAobW9kaWZ5VGFyZ2V0KSB7XG4gICAgICB0aGlzLnRhcmdldCA9IG1vZGlmeVRhcmdldCh0aGlzLnRhcmdldCk7XG4gICAgfVxuICB9O1xuXG4gIEluZXJ0aWEucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGF1dG9TdG9wRGVsdGEgPSBfcHJvcHMyLmF1dG9TdG9wRGVsdGEsXG4gICAgICAgIHRpbWVDb25zdGFudCA9IF9wcm9wczIudGltZUNvbnN0YW50O1xuXG5cbiAgICB0aGlzLmVsYXBzZWQgKz0gKDAsIF9wb3Btb3Rpb24udGltZVNpbmNlTGFzdEZyYW1lKSgpO1xuICAgIHZhciBkZWx0YSA9IC10aGlzLmFtcGxpdHVkZSAqIE1hdGguZXhwKC10aGlzLmVsYXBzZWQgLyB0aW1lQ29uc3RhbnQpO1xuICAgIHZhciBpc01vdmluZyA9IGRlbHRhID4gYXV0b1N0b3BEZWx0YSB8fCBkZWx0YSA8IC1hdXRvU3RvcERlbHRhO1xuICAgIGlmICghaXNNb3ZpbmcpIHRoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgcmV0dXJuIGlzTW92aW5nID8gdGhpcy50YXJnZXQgKyBkZWx0YSA6IHRoaXMudGFyZ2V0O1xuICB9O1xuXG4gIEluZXJ0aWEucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGU7XG4gIH07XG5cbiAgcmV0dXJuIEluZXJ0aWE7XG59KF9wb3Btb3Rpb24uQWN0aW9uKTtcblxuSW5lcnRpYS5kZWZhdWx0UHJvcHMgPSB7XG4gIHZlbG9jaXR5OiAwLFxuICBmcm9tOiAwLFxuICBwb3dlcjogMC44LFxuICB0aW1lQ29uc3RhbnQ6IDM1MCxcbiAgYXV0b1N0b3BEZWx0YTogMC41XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBJbmVydGlhKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbkJoWTJ0aFoyVnpMM0J2Y0cxdmRHbHZiaTFwYm1WeWRHbGhMM055WXk5cGJtUmxlQzVxY3lKZExDSnVZVzFsY3lJNld5SkpibVZ5ZEdsaElpd2liMjVUZEdGeWRDSXNJbkJ5YjNCeklpd2lkbVZzYjJOcGRIa2lMQ0p3YjNkbGNpSXNJbTF2WkdsbWVWUmhjbWRsZENJc0ltRnRjR3hwZEhWa1pTSXNJblJoY21kbGRDSXNJazFoZEdnaUxDSnliM1Z1WkNJc0ltTjFjbkpsYm5RaUxDSmxiR0Z3YzJWa0lpd2lkWEJrWVhSbElpd2lZWFYwYjFOMGIzQkVaV3gwWVNJc0luUnBiV1ZEYjI1emRHRnVkQ0lzSW1SbGJIUmhJaXdpWlhod0lpd2lhWE5OYjNacGJtY2lMQ0pwYzBOdmJYQnNaWFJsSWl3aWFYTkJZM1JwYjI1RGIyMXdiR1YwWlNJc0ltUmxabUYxYkhSUWNtOXdjeUlzSW1aeWIyMGlYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZEUVRzN096czdPeXRsUVVSQk96czdTVUZIVFVFc1R6czdPenM3T3pzN08yOUNRVk5LUXl4UExITkNRVUZWTzBGQlFVRXNhVUpCUTJ0RExFdEJRVXRETEV0QlJIWkRPMEZCUVVFc1VVRkRRVU1zVVVGRVFTeFZRVU5CUVN4UlFVUkJPMEZCUVVFc1VVRkRWVU1zUzBGRVZpeFZRVU5WUVN4TFFVUldPMEZCUVVFc1VVRkRhVUpETEZsQlJHcENMRlZCUTJsQ1FTeFpRVVJxUWpzN08wRkJSMUlzVTBGQlMwTXNVMEZCVEN4SFFVRnBRa1lzVVVGQlVVUXNVVUZCZWtJN1FVRkRRU3hUUVVGTFNTeE5RVUZNTEVkQlFXTkRMRXRCUVV0RExFdEJRVXdzUTBGQlZ5eExRVUZMUXl4UFFVRk1MRWRCUVdVc1MwRkJTMG9zVTBGQkwwSXNRMEZCWkR0QlFVTkJMRk5CUVV0TExFOUJRVXdzUjBGQlpTeERRVUZtT3p0QlFVVkJMRkZCUVVsT0xGbEJRVW9zUlVGQmEwSTdRVUZEYUVJc1YwRkJTMFVzVFVGQlRDeEhRVUZqUml4aFFVRmhMRXRCUVV0RkxFMUJRV3hDTEVOQlFXUTdRVUZEUkR0QlFVTkdMRWM3TzI5Q1FVVkVTeXhOTEhGQ1FVRlRPMEZCUVVFc2EwSkJRMmxETEV0QlFVdFdMRXRCUkhSRE8wRkJRVUVzVVVGRFExY3NZVUZFUkN4WFFVTkRRU3hoUVVSRU8wRkJRVUVzVVVGRFowSkRMRmxCUkdoQ0xGZEJRMmRDUVN4WlFVUm9RanM3TzBGQlIxQXNVMEZCUzBnc1QwRkJUQ3hKUVVGblFpeHZRMEZCYUVJN1FVRkRRU3hSUVVGTlNTeFJRVUZSTEVOQlFVTXNTMEZCUzFRc1UwRkJUaXhIUVVGclFrVXNTMEZCUzFFc1IwRkJUQ3hEUVVGVExFTkJRVU1zUzBGQlMwd3NUMEZCVGl4SFFVRm5Ra2NzV1VGQmVrSXNRMEZCYUVNN1FVRkRRU3hSUVVGTlJ5eFhRVUZaUml4UlFVRlJSaXhoUVVGU0xFbEJRWGxDUlN4UlFVRlJMRU5CUVVOR0xHRkJRWEJFTzBGQlEwRXNVVUZCU1N4RFFVRkRTU3hSUVVGTUxFVkJRV1VzUzBGQlMwTXNWVUZCVEN4SFFVRnJRaXhKUVVGc1FqdEJRVU5tTEZkQlFVOUVMRmRCUVZjc1MwRkJTMVlzVFVGQlRDeEhRVUZqVVN4TFFVRjZRaXhIUVVGcFF5eExRVUZMVWl4TlFVRTNRenRCUVVORUxFYzdPMjlDUVVWRVdTeG5RaXdyUWtGQmJVSTdRVUZEYWtJc1YwRkJUeXhMUVVGTFJDeFZRVUZhTzBGQlEwUXNSenM3T3pzN1FVRnFRMGRzUWl4UExFTkJRMGR2UWl4WkxFZEJRV1U3UVVGRGNFSnFRaXhaUVVGVkxFTkJSRlU3UVVGRmNFSnJRaXhSUVVGTkxFTkJSbU03UVVGSGNFSnFRaXhUUVVGUExFZEJTR0U3UVVGSmNFSlZMR2RDUVVGakxFZEJTazA3UVVGTGNFSkVMR2xDUVVGbE8wRkJURXNzUXpzN2EwSkJiVU5VTEZWQlFVTllMRXRCUVVRN1FVRkJRU3hUUVVGWExFbEJRVWxHTEU5QlFVb3NRMEZCV1VVc1MwRkJXaXhEUVVGWU8wRkJRVUVzUXlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0Z5Y3k5bmFYUm9kV0l2Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5OGdTVzF3YkdWdFpXNTBZWFJwYjI0Z2IyWWdhSFIwY0hNNkx5OWhjbWw1WVM1cGJ5OHlNREV6THpFeEwycGhkbUZ6WTNKcGNIUXRhMmx1WlhScFl5MXpZM0p2Ykd4cGJtY3RjR0Z5ZEMweVhHNXBiWEJ2Y25RZ2V5QkJZM1JwYjI0c0lIUnBiV1ZUYVc1alpVeGhjM1JHY21GdFpTQjlJR1p5YjIwZ0ozQnZjRzF2ZEdsdmJpYzdYRzVjYm1Oc1lYTnpJRWx1WlhKMGFXRWdaWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0J6ZEdGMGFXTWdaR1ZtWVhWc2RGQnliM0J6SUQwZ2UxeHVJQ0FnSUhabGJHOWphWFI1T2lBd0xGeHVJQ0FnSUdaeWIyMDZJREFzWEc0Z0lDQWdjRzkzWlhJNklEQXVPQ3hjYmlBZ0lDQjBhVzFsUTI5dWMzUmhiblE2SURNMU1DeGNiaUFnSUNCaGRYUnZVM1J2Y0VSbGJIUmhPaUF3TGpWY2JpQWdmVHRjYmx4dUlDQnZibE4wWVhKMEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2RtVnNiMk5wZEhrc0lIQnZkMlZ5TENCdGIyUnBabmxVWVhKblpYUWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCMGFHbHpMbUZ0Y0d4cGRIVmtaU0E5SUhCdmQyVnlJQ29nZG1Wc2IyTnBkSGs3WEc0Z0lDQWdkR2hwY3k1MFlYSm5aWFFnUFNCTllYUm9Mbkp2ZFc1a0tIUm9hWE11WTNWeWNtVnVkQ0FySUhSb2FYTXVZVzF3YkdsMGRXUmxLVHRjYmlBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNBd08xeHVYRzRnSUNBZ2FXWWdLRzF2WkdsbWVWUmhjbWRsZENrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTUwWVhKblpYUWdQU0J0YjJScFpubFVZWEpuWlhRb2RHaHBjeTUwWVhKblpYUXBPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHRjFkRzlUZEc5d1JHVnNkR0VzSUhScGJXVkRiMjV6ZEdGdWRDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JseHVJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQXJQU0IwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VvS1R0Y2JpQWdJQ0JqYjI1emRDQmtaV3gwWVNBOUlDMTBhR2x6TG1GdGNHeHBkSFZrWlNBcUlFMWhkR2d1Wlhod0tDMTBhR2x6TG1Wc1lYQnpaV1FnTHlCMGFXMWxRMjl1YzNSaGJuUXBPMXh1SUNBZ0lHTnZibk4wSUdselRXOTJhVzVuSUQwZ0tHUmxiSFJoSUQ0Z1lYVjBiMU4wYjNCRVpXeDBZU0I4ZkNCa1pXeDBZU0E4SUMxaGRYUnZVM1J2Y0VSbGJIUmhLVHRjYmlBZ0lDQnBaaUFvSVdselRXOTJhVzVuS1NCMGFHbHpMbWx6UTI5dGNHeGxkR1VnUFNCMGNuVmxPMXh1SUNBZ0lISmxkSFZ5YmlCcGMwMXZkbWx1WnlBL0lIUm9hWE11ZEdGeVoyVjBJQ3NnWkdWc2RHRWdPaUIwYUdsekxuUmhjbWRsZER0Y2JpQWdmVnh1WEc0Z0lHbHpRV04wYVc5dVEyOXRjR3hsZEdVb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVhWE5EYjIxd2JHVjBaVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvY0hKdmNITXBJRDArSUc1bGR5QkpibVZ5ZEdsaEtIQnliM0J6S1R0Y2JpSmRmUT09XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9wb3Btb3Rpb24taW5lcnRpYS9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCdwb3Btb3Rpb24nKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU2Nyb2xsUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhTY3JvbGxSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBTY3JvbGxSZW5kZXJlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2Nyb2xsUmVuZGVyZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFNjcm9sbFJlbmRlcmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgLy8gQnJlYWsgdGhlIGNhY2hlIGFzIHNjcm9sbCBjYW4gYmUgdXBkYXRlZCBieSB0aGUgdXNlclxuICAgIHRoaXMuc3RhdGVba2V5XSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gX1JlbmRlcmVyLnByb3RvdHlwZS5nZXQuY2FsbCh0aGlzLCBrZXkpO1xuICB9O1xuXG4gIHJldHVybiBTY3JvbGxSZW5kZXJlcjtcbn0oX3BvcG1vdGlvbi5SZW5kZXJlcik7XG5cbnZhciBFbGVtZW50U2Nyb2xsID0gZnVuY3Rpb24gKF9TY3JvbGxSZW5kZXJlcikge1xuICBfaW5oZXJpdHMoRWxlbWVudFNjcm9sbCwgX1Njcm9sbFJlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBFbGVtZW50U2Nyb2xsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbGVtZW50U2Nyb2xsKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfU2Nyb2xsUmVuZGVyZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBFbGVtZW50U2Nyb2xsLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICB0b3AgPSBfc3RhdGUudG9wLFxuICAgICAgICBsZWZ0ID0gX3N0YXRlLmxlZnQ7XG5cbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBsZWZ0O1xuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdG9wO1xuICB9O1xuXG4gIEVsZW1lbnRTY3JvbGwucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZCgpIHtcbiAgICB2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAndG9wJztcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgIHJldHVybiBrZXkgPT09ICd0b3AnID8gZWxlbWVudC5zY3JvbGxUb3AgOiBlbGVtZW50LnNjcm9sbExlZnQ7XG4gIH07XG5cbiAgcmV0dXJuIEVsZW1lbnRTY3JvbGw7XG59KFNjcm9sbFJlbmRlcmVyKTtcblxudmFyIFZpZXdwb3J0U2Nyb2xsID0gZnVuY3Rpb24gKF9TY3JvbGxSZW5kZXJlcjIpIHtcbiAgX2luaGVyaXRzKFZpZXdwb3J0U2Nyb2xsLCBfU2Nyb2xsUmVuZGVyZXIyKTtcblxuICBmdW5jdGlvbiBWaWV3cG9ydFNjcm9sbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmlld3BvcnRTY3JvbGwpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9TY3JvbGxSZW5kZXJlcjIuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBWaWV3cG9ydFNjcm9sbC5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICB2YXIgX3N0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgIHRvcCA9IF9zdGF0ZTIudG9wLFxuICAgICAgICBsZWZ0ID0gX3N0YXRlMi5sZWZ0O1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZCkgd2luZG93LnNjcm9sbFRvKGxlZnQsIHRvcCk7XG4gIH07XG5cbiAgVmlld3BvcnRTY3JvbGwucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZChrZXkpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gdW5kZWZpbmVkKSByZXR1cm4gMDtcbiAgICByZXR1cm4ga2V5ID09PSAndG9wJyA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IHdpbmRvdy5wYWdlWE9mZnNldDtcbiAgfTtcblxuICByZXR1cm4gVmlld3BvcnRTY3JvbGw7XG59KFNjcm9sbFJlbmRlcmVyKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyBuZXcgRWxlbWVudFNjcm9sbCh7IGVsZW1lbnQ6IGVsZW1lbnQgfSkgOiBuZXcgVmlld3BvcnRTY3JvbGwoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbkJoWTJ0aFoyVnpMM0J2Y0cxdmRHbHZiaTF6WTNKdmJHd3ZjM0pqTDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYklsTmpjbTlzYkZKbGJtUmxjbVZ5SWl3aVoyVjBJaXdpYTJWNUlpd2ljM1JoZEdVaUxDSjFibVJsWm1sdVpXUWlMQ0pGYkdWdFpXNTBVMk55YjJ4c0lpd2liMjVTWlc1a1pYSWlMQ0psYkdWdFpXNTBJaXdpY0hKdmNITWlMQ0owYjNBaUxDSnNaV1owSWl3aWMyTnliMnhzVEdWbWRDSXNJbk5qY205c2JGUnZjQ0lzSW05dVVtVmhaQ0lzSWxacFpYZHdiM0owVTJOeWIyeHNJaXdpZDJsdVpHOTNJaXdpYzJOeWIyeHNWRzhpTENKd1lXZGxXVTltWm5ObGRDSXNJbkJoWjJWWVQyWm1jMlYwSWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3T3pzN08wbEJSVTFCTEdNN096czdPenM3T3pzeVFrRkRTa01zUnl4blFrRkJTVU1zUnl4RlFVRkxPMEZCUTFBN1FVRkRRU3hUUVVGTFF5eExRVUZNTEVOQlFWZEVMRWRCUVZnc1NVRkJhMEpGTEZOQlFXeENPMEZCUTBFc1YwRkJUeXh2UWtGQlRVZ3NSMEZCVGl4WlFVRlZReXhIUVVGV0xFTkJRVkE3UVVGRFJDeEhPenM3T3p0SlFVZEhSeXhoT3pzN096czdPenM3TUVKQlEwcERMRkVzZFVKQlFWYzdRVUZCUVN4UlFVTkVReXhQUVVSRExFZEJRMWNzUzBGQlMwTXNTMEZFYUVJc1EwRkRSRVFzVDBGRVF6dEJRVUZCTEdsQ1FVVmhMRXRCUVV0S0xFdEJSbXhDTzBGQlFVRXNVVUZGUkUwc1IwRkdReXhWUVVWRVFTeEhRVVpETzBGQlFVRXNVVUZGU1VNc1NVRkdTaXhWUVVWSlFTeEpRVVpLT3p0QlFVZFVTQ3haUVVGUlNTeFZRVUZTTEVkQlFYRkNSQ3hKUVVGeVFqdEJRVU5CU0N4WlFVRlJTeXhUUVVGU0xFZEJRVzlDU0N4SFFVRndRanRCUVVORUxFYzdPekJDUVVWRVNTeE5MSEZDUVVGdlFqdEJRVUZCTEZGQlFXSllMRWRCUVdFc2RVVkJRVkFzUzBGQlR6dEJRVUZCTEZGQlExWkxMRTlCUkZVc1IwRkRSU3hMUVVGTFF5eExRVVJRTEVOQlExWkVMRTlCUkZVN08wRkJSV3hDTEZkQlFWRk1MRkZCUVZFc1MwRkJWQ3hIUVVGclFrc3NVVUZCVVVzc1UwRkJNVUlzUjBGQmMwTk1MRkZCUVZGSkxGVkJRWEpFTzBGQlEwUXNSenM3TzBWQldIbENXQ3hqT3p0SlFXTjBRbU1zWXpzN096czdPenM3T3pKQ1FVTktVaXhSTEhWQ1FVRlhPMEZCUVVFc2EwSkJRMkVzUzBGQlMwZ3NTMEZFYkVJN1FVRkJRU3hSUVVORVRTeEhRVVJETEZkQlEwUkJMRWRCUkVNN1FVRkJRU3hSUVVOSlF5eEpRVVJLTEZkQlEwbEJMRWxCUkVvN08wRkJSVlFzVVVGQlNTeFBRVUZQU3l4TlFVRlFMRXRCUVd0Q1dDeFRRVUYwUWl4RlFVRnBRMWNzVDBGQlQwTXNVVUZCVUN4RFFVRm5RazRzU1VGQmFFSXNSVUZCYzBKRUxFZEJRWFJDTzBGQlEyeERMRWM3T3pKQ1FVVkVTU3hOTEcxQ1FVRlBXQ3hITEVWQlFVczdRVUZEVml4UlFVRkpMRTlCUVU5aExFMUJRVkFzUzBGQmEwSllMRk5CUVhSQ0xFVkJRV2xETEU5QlFVOHNRMEZCVUR0QlFVTnFReXhYUVVGUlJpeFJRVUZSTEV0QlFWUXNSMEZCYTBKaExFOUJRVTlGTEZkQlFYcENMRWRCUVhWRFJpeFBRVUZQUnl4WFFVRnlSRHRCUVVORUxFYzdPenRGUVZRd1FteENMR003TzJ0Q1FWbGtMRlZCUVVOUExFOUJRVVE3UVVGQlFTeFRRVUZoUVN4VlFVRlZMRWxCUVVsR0xHRkJRVW9zUTBGQmEwSXNSVUZCUlVVc1owSkJRVVlzUlVGQmJFSXNRMEZCVml4SFFVRXlReXhKUVVGSlR5eGpRVUZLTEVWQlFYaEVPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGeWN5OW5hWFJvZFdJdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dVbVZ1WkdWeVpYSWdmU0JtY205dElDZHdiM0J0YjNScGIyNG5PMXh1WEc1amJHRnpjeUJUWTNKdmJHeFNaVzVrWlhKbGNpQmxlSFJsYm1SeklGSmxibVJsY21WeUlIdGNiaUFnWjJWMEtHdGxlU2tnZTF4dUlDQWdJQzh2SUVKeVpXRnJJSFJvWlNCallXTm9aU0JoY3lCelkzSnZiR3dnWTJGdUlHSmxJSFZ3WkdGMFpXUWdZbmtnZEdobElIVnpaWEpjYmlBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYwZ1BTQjFibVJsWm1sdVpXUTdYRzRnSUNBZ2NtVjBkWEp1SUhOMWNHVnlMbWRsZENoclpYa3BPMXh1SUNCOVhHNTlYRzVjYm1Oc1lYTnpJRVZzWlcxbGJuUlRZM0p2Ykd3Z1pYaDBaVzVrY3lCVFkzSnZiR3hTWlc1a1pYSmxjaUI3WEc0Z0lHOXVVbVZ1WkdWeUtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1pXeGxiV1Z1ZENCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQmpiMjV6ZENCN0lIUnZjQ3dnYkdWbWRDQjlJRDBnZEdocGN5NXpkR0YwWlR0Y2JpQWdJQ0JsYkdWdFpXNTBMbk5qY205c2JFeGxablFnUFNCc1pXWjBPMXh1SUNBZ0lHVnNaVzFsYm5RdWMyTnliMnhzVkc5d0lEMGdkRzl3TzF4dUlDQjlYRzVjYmlBZ2IyNVNaV0ZrS0d0bGVTQTlJQ2QwYjNBbktTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCbGJHVnRaVzUwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lISmxkSFZ5YmlBb2EyVjVJRDA5UFNBbmRHOXdKeWtnUHlCbGJHVnRaVzUwTG5OamNtOXNiRlJ2Y0NBNklHVnNaVzFsYm5RdWMyTnliMnhzVEdWbWREdGNiaUFnZlZ4dWZWeHVYRzVqYkdGemN5QldhV1YzY0c5eWRGTmpjbTlzYkNCbGVIUmxibVJ6SUZOamNtOXNiRkpsYm1SbGNtVnlJSHRjYmlBZ2IyNVNaVzVrWlhJb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCMGIzQXNJR3hsWm5RZ2ZTQTlJSFJvYVhNdWMzUmhkR1U3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUhWdVpHVm1hVzVsWkNrZ2QybHVaRzkzTG5OamNtOXNiRlJ2S0d4bFpuUXNJSFJ2Y0NrN1hHNGdJSDFjYmx4dUlDQnZibEpsWVdRb2EyVjVLU0I3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUIzYVc1a2IzY2dQVDA5SUhWdVpHVm1hVzVsWkNrZ2NtVjBkWEp1SURBN1hHNGdJQ0FnY21WMGRYSnVJQ2hyWlhrZ1BUMDlJQ2QwYjNBbktTQS9JSGRwYm1SdmR5NXdZV2RsV1U5bVpuTmxkQ0E2SUhkcGJtUnZkeTV3WVdkbFdFOW1abk5sZER0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1pXeGxiV1Z1ZENrZ1BUNGdaV3hsYldWdWRDQS9JRzVsZHlCRmJHVnRaVzUwVTJOeWIyeHNLSHNnWld4bGJXVnVkQ0I5S1NBNklHNWxkeUJXYVdWM2NHOXlkRk5qY205c2JDZ3BPMXh1SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcG9wbW90aW9uLXNjcm9sbC9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNwaW5uYWJsZTtcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCdwb3Btb3Rpb24nKTtcblxudmFyIGFuZ2xlID0gX3BvcG1vdGlvbi5jYWxjLmFuZ2xlO1xuZnVuY3Rpb24gc3Bpbm5hYmxlKG5vZGUsIF9yZWYpIHtcbiAgdmFyIF9yZWYkaW5pdGlhbFJvdGF0aW9uID0gX3JlZi5pbml0aWFsUm90YXRpb24sXG4gICAgICBpbml0aWFsUm90YXRpb24gPSBfcmVmJGluaXRpYWxSb3RhdGlvbiA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYkaW5pdGlhbFJvdGF0aW9uLFxuICAgICAgX3JlZiRmcmljdGlvbiA9IF9yZWYuZnJpY3Rpb24sXG4gICAgICBmcmljdGlvbiA9IF9yZWYkZnJpY3Rpb24gPT09IHVuZGVmaW5lZCA/IDAuNCA6IF9yZWYkZnJpY3Rpb24sXG4gICAgICB0cmFuc2Zvcm1TcGluID0gX3JlZi50cmFuc2Zvcm1TcGluLFxuICAgICAgb25TcGluID0gX3JlZi5vblNwaW47XG5cbiAgdmFyIHJlbmRlcmVyID0gKDAsIF9wb3Btb3Rpb24uY3NzKShub2RlKTtcbiAgdmFyIG5vZGVSb3RhdGlvbiA9ICgwLCBfcG9wbW90aW9uLnZhbHVlKShpbml0aWFsUm90YXRpb24sIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0cmFuc2Zvcm1TcGluID8gdHJhbnNmb3JtU3Bpbih2KSA6IHY7XG4gICAgaWYgKG9uU3Bpbikgb25TcGluKGN1cnJlbnQpO1xuICAgIHJlbmRlcmVyLnNldCgncm90YXRlJywgY3VycmVudCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0VHJhY2tpbmcoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgcG9pbnRlckFuZ2xlID0gKDAsIF9wb3Btb3Rpb24ucG9pbnRlcikoZSwge1xuICAgICAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0cmFuc2Zvcm0odikge1xuICAgICAgICB2YXIgbm9kZVBvcyA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBub2RlQ2VudGVyID0ge1xuICAgICAgICAgIHg6IG5vZGVQb3MubGVmdCArIG5vZGVQb3Mud2lkdGggLyAyLFxuICAgICAgICAgIHk6IG5vZGVQb3MudG9wICsgbm9kZVBvcy5oZWlnaHQgLyAyXG4gICAgICAgIH07XG4gICAgICAgIHZhciBhbmdsZUZyb21DZW50ZXIgPSBhbmdsZShub2RlQ2VudGVyLCB2KTtcblxuICAgICAgICByZXR1cm4gYW5nbGVGcm9tQ2VudGVyO1xuICAgICAgfVxuICAgIH0pLnN0YXJ0KCk7XG5cbiAgICAoMCwgX3BvcG1vdGlvbi50cmFja09mZnNldCkocG9pbnRlckFuZ2xlLCB7XG4gICAgICBmcm9tOiBub2RlUm90YXRpb24uZ2V0KCksXG4gICAgICBvblVwZGF0ZTogbm9kZVJvdGF0aW9uLFxuICAgICAgb25TdG9wOiBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgICAgIHJldHVybiBwb2ludGVyQW5nbGUuc3RvcCgpO1xuICAgICAgfVxuICAgIH0pLnN0YXJ0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wVHJhY2tpbmcoKSB7XG4gICAgKDAsIF9wb3Btb3Rpb24ucGh5c2ljcykoe1xuICAgICAgZnJvbTogbm9kZVJvdGF0aW9uLmdldCgpLFxuICAgICAgdmVsb2NpdHk6IG5vZGVSb3RhdGlvbi5nZXRWZWxvY2l0eSgpLFxuICAgICAgZnJpY3Rpb246IGZyaWN0aW9uLFxuICAgICAgb25VcGRhdGU6IG5vZGVSb3RhdGlvblxuICAgIH0pLnN0YXJ0KCk7XG4gIH1cblxuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHN0YXJ0VHJhY2tpbmcpO1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzdGFydFRyYWNraW5nLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcFRyYWNraW5nKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBzdG9wVHJhY2tpbmcpO1xuXG4gIHJldHVybiBub2RlUm90YXRpb247XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbkJoWTJ0aFoyVnpMM0J2Y0cxdmRHbHZiaTF6Y0dsdWJtRmliR1V2YzNKakwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJbk53YVc1dVlXSnNaU0lzSW1GdVoyeGxJaXdpYm05a1pTSXNJbWx1YVhScFlXeFNiM1JoZEdsdmJpSXNJbVp5YVdOMGFXOXVJaXdpZEhKaGJuTm1iM0p0VTNCcGJpSXNJbTl1VTNCcGJpSXNJbkpsYm1SbGNtVnlJaXdpYm05a1pWSnZkR0YwYVc5dUlpd2lkaUlzSW1OMWNuSmxiblFpTENKelpYUWlMQ0p6ZEdGeWRGUnlZV05yYVc1bklpd2laU0lzSW5CeVpYWmxiblJFWldaaGRXeDBJaXdpY0c5cGJuUmxja0Z1WjJ4bElpd2lkSEpoYm5ObWIzSnRJaXdpYm05a1pWQnZjeUlzSW1kbGRFSnZkVzVrYVc1blEyeHBaVzUwVW1WamRDSXNJbTV2WkdWRFpXNTBaWElpTENKNElpd2liR1ZtZENJc0luZHBaSFJvSWl3aWVTSXNJblJ2Y0NJc0ltaGxhV2RvZENJc0ltRnVaMnhsUm5KdmJVTmxiblJsY2lJc0luTjBZWEowSWl3aVpuSnZiU0lzSW1kbGRDSXNJbTl1VlhCa1lYUmxJaXdpYjI1VGRHOXdJaXdpYzNSdmNDSXNJbk4wYjNCVWNtRmphMmx1WnlJc0luWmxiRzlqYVhSNUlpd2laMlYwVm1Wc2IyTnBkSGtpTENKaFpHUkZkbVZ1ZEV4cGMzUmxibVZ5SWl3aWNHRnpjMmwyWlNJc0ltUnZZM1Z0Wlc1MElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJWWGRDUVN4VE96dEJRVlo0UWpzN1NVRlJVVU1zU3l4dFFrRkJRVUVzU3p0QlFVVlBMRk5CUVZORUxGTkJRVlFzUTBGQmJVSkZMRWxCUVc1Q0xGRkJTMW83UVVGQlFTeHJRMEZLUkVNc1pVRkpRenRCUVVGQkxFMUJTa1JCTEdWQlNVTXNkME5CU21sQ0xFTkJTV3BDTzBGQlFVRXNNa0pCU0VSRExGRkJSME03UVVGQlFTeE5RVWhFUVN4UlFVZERMR2xEUVVoVkxFZEJSMVk3UVVGQlFTeE5RVVpFUXl4aFFVVkRMRkZCUmtSQkxHRkJSVU03UVVGQlFTeE5RVVJFUXl4TlFVTkRMRkZCUkVSQkxFMUJRME03TzBGQlEwUXNUVUZCVFVNc1YwRkJWeXh2UWtGQlNVd3NTVUZCU2l4RFFVRnFRanRCUVVOQkxFMUJRVTFOTEdWQlFXVXNjMEpCUVUxTUxHVkJRVTRzUlVGQmRVSXNWVUZCUTAwc1EwRkJSQ3hGUVVGUE8wRkJRMnBFTEZGQlFVMURMRlZCUVZWTUxHZENRVUZuUWtFc1kwRkJZMGtzUTBGQlpDeERRVUZvUWl4SFFVRnRRMEVzUTBGQmJrUTdRVUZEUVN4UlFVRkpTQ3hOUVVGS0xFVkJRVmxCTEU5QlFVOUpMRTlCUVZBN1FVRkRXa2dzWVVGQlUwa3NSMEZCVkN4RFFVRmhMRkZCUVdJc1JVRkJkVUpFTEU5QlFYWkNPMEZCUTBRc1IwRktiMElzUTBGQmNrSTdPMEZCVFVFc1YwRkJVMFVzWVVGQlZDeERRVUYxUWtNc1EwRkJka0lzUlVGQk1FSTdRVUZEZUVKQkxFMUJRVVZETEdOQlFVWTdRVUZEUVN4UlFVRk5ReXhsUVVGbExIZENRVUZSUml4RFFVRlNMRVZCUVZjN1FVRkRPVUpITEdsQ1FVRlhMRzFDUVVGRFVDeERRVUZFTEVWQlFVODdRVUZEYUVJc1dVRkJUVkVzVlVGQlZXWXNTMEZCUzJkQ0xIRkNRVUZNTEVWQlFXaENPMEZCUTBFc1dVRkJUVU1zWVVGQllUdEJRVU5xUWtNc1lVRkJSMGdzVVVGQlVVa3NTVUZCVWl4SFFVRm5Ra29zVVVGQlVVc3NTMEZCVWl4SFFVRm5RaXhEUVVSc1FqdEJRVVZxUWtNc1lVRkJSMDRzVVVGQlVVOHNSMEZCVWl4SFFVRmxVQ3hSUVVGUlVTeE5RVUZTTEVkQlFXbENPMEZCUm14Q0xGTkJRVzVDTzBGQlNVRXNXVUZCVFVNc2EwSkJRV3RDZWtJc1RVRkJUV3RDTEZWQlFVNHNSVUZCYTBKV0xFTkJRV3hDTEVOQlFYaENPenRCUVVWQkxHVkJRVTlwUWl4bFFVRlFPMEZCUTBRN1FVRldOa0lzUzBGQldDeEZRVmRzUWtNc1MwRllhMElzUlVGQmNrSTdPMEZCWVVFc1owTkJRVmxhTEZsQlFWb3NSVUZCTUVJN1FVRkRlRUpoTEZsQlFVMXdRaXhoUVVGaGNVSXNSMEZCWWl4RlFVUnJRanRCUVVWNFFrTXNaMEpCUVZWMFFpeFpRVVpqTzBGQlIzaENkVUlzWTBGQlVUdEJRVUZCTEdWQlFVMW9RaXhoUVVGaGFVSXNTVUZCWWl4RlFVRk9PMEZCUVVFN1FVRklaMElzUzBGQk1VSXNSVUZKUjB3c1MwRktTRHRCUVV0RU96dEJRVVZFTEZkQlFWTk5MRmxCUVZRc1IwRkJkMEk3UVVGRGRFSXNORUpCUVZFN1FVRkRUa3dzV1VGQlRYQkNMR0ZCUVdGeFFpeEhRVUZpTEVWQlJFRTdRVUZGVGtzc1owSkJRVlV4UWl4aFFVRmhNa0lzVjBGQllpeEZRVVpLTzBGQlIwNHZRaXgzUWtGSVRUdEJRVWxPTUVJc1owSkJRVlYwUWp0QlFVcEtMRXRCUVZJc1JVRkxSMjFDTEV0QlRFZzdRVUZOUkRzN1FVRkZSSHBDTEU5QlFVdHJReXhuUWtGQlRDeERRVUZ6UWl4WFFVRjBRaXhGUVVGdFEzaENMR0ZCUVc1RE8wRkJRMEZXTEU5QlFVdHJReXhuUWtGQlRDeERRVUZ6UWl4WlFVRjBRaXhGUVVGdlEzaENMR0ZCUVhCRExFVkJRVzFFTEVWQlFVVjVRaXhUUVVGVExFdEJRVmdzUlVGQmJrUTdRVUZEUVVNc1YwRkJVMFlzWjBKQlFWUXNRMEZCTUVJc1UwRkJNVUlzUlVGQmNVTklMRmxCUVhKRE8wRkJRMEZMTEZkQlFWTkdMR2RDUVVGVUxFTkJRVEJDTEZWQlFURkNMRVZCUVhORFNDeFpRVUYwUXpzN1FVRkZRU3hUUVVGUGVrSXNXVUZCVUR0QlFVTkVJaXdpWm1sc1pTSTZJbWx1WkdWNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYSnpMMmRwZEdoMVlpOXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdlMXh1SUNCd2IybHVkR1Z5TEZ4dUlDQmpZV3hqTEZ4dUlDQjJZV3gxWlN4Y2JpQWdZM056TEZ4dUlDQndhSGx6YVdOekxGeHVJQ0IwY21GamEwOW1abk5sZEZ4dWZTQm1jbTl0SUNkd2IzQnRiM1JwYjI0bk8xeHVZMjl1YzNRZ2V5QmhibWRzWlNCOUlEMGdZMkZzWXp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z2MzQnBibTVoWW14bEtHNXZaR1VzSUh0Y2JpQWdhVzVwZEdsaGJGSnZkR0YwYVc5dUlEMGdNQ3hjYmlBZ1puSnBZM1JwYjI0Z1BTQXdMalFzWEc0Z0lIUnlZVzV6Wm05eWJWTndhVzRzWEc0Z0lHOXVVM0JwYmx4dWZTa2dlMXh1SUNCamIyNXpkQ0J5Wlc1a1pYSmxjaUE5SUdOemN5aHViMlJsS1R0Y2JpQWdZMjl1YzNRZ2JtOWtaVkp2ZEdGMGFXOXVJRDBnZG1Gc2RXVW9hVzVwZEdsaGJGSnZkR0YwYVc5dUxDQW9kaWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR04xY25KbGJuUWdQU0IwY21GdWMyWnZjbTFUY0dsdUlEOGdkSEpoYm5ObWIzSnRVM0JwYmloMktTQTZJSFk3WEc0Z0lDQWdhV1lnS0c5dVUzQnBiaWtnYjI1VGNHbHVLR04xY25KbGJuUXBPMXh1SUNBZ0lISmxibVJsY21WeUxuTmxkQ2duY205MFlYUmxKeXdnWTNWeWNtVnVkQ2s3WEc0Z0lIMHBPMXh1WEc0Z0lHWjFibU4wYVc5dUlITjBZWEowVkhKaFkydHBibWNvWlNrZ2UxeHVJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2JpQWdJQ0JqYjI1emRDQndiMmx1ZEdWeVFXNW5iR1VnUFNCd2IybHVkR1Z5S0dVc0lIdGNiaUFnSUNBZ0lIUnlZVzV6Wm05eWJUb2dLSFlwSUQwK0lIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2JtOWtaVkJ2Y3lBOUlHNXZaR1V1WjJWMFFtOTFibVJwYm1kRGJHbGxiblJTWldOMEtDazdYRzRnSUNBZ0lDQWdJR052Ym5OMElHNXZaR1ZEWlc1MFpYSWdQU0I3WEc0Z0lDQWdJQ0FnSUNBZ2VEb2dibTlrWlZCdmN5NXNaV1owSUNzZ0tHNXZaR1ZRYjNNdWQybGtkR2dnTHlBeUtTeGNiaUFnSUNBZ0lDQWdJQ0I1T2lCdWIyUmxVRzl6TG5SdmNDQXJJQ2h1YjJSbFVHOXpMbWhsYVdkb2RDQXZJRElwWEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdGdVoyeGxSbkp2YlVObGJuUmxjaUE5SUdGdVoyeGxLRzV2WkdWRFpXNTBaWElzSUhZcE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmhibWRzWlVaeWIyMURaVzUwWlhJN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNrdWMzUmhjblFvS1R0Y2JseHVJQ0FnSUhSeVlXTnJUMlptYzJWMEtIQnZhVzUwWlhKQmJtZHNaU3dnZTF4dUlDQWdJQ0FnWm5KdmJUb2dibTlrWlZKdmRHRjBhVzl1TG1kbGRDZ3BMRnh1SUNBZ0lDQWdiMjVWY0dSaGRHVTZJRzV2WkdWU2IzUmhkR2x2Yml4Y2JpQWdJQ0FnSUc5dVUzUnZjRG9nS0NrZ1BUNGdjRzlwYm5SbGNrRnVaMnhsTG5OMGIzQW9LVnh1SUNBZ0lIMHBMbk4wWVhKMEtDazdYRzRnSUgxY2JseHVJQ0JtZFc1amRHbHZiaUJ6ZEc5d1ZISmhZMnRwYm1jb0tTQjdYRzRnSUNBZ2NHaDVjMmxqY3loN1hHNGdJQ0FnSUNCbWNtOXRPaUJ1YjJSbFVtOTBZWFJwYjI0dVoyVjBLQ2tzWEc0Z0lDQWdJQ0IyWld4dlkybDBlVG9nYm05a1pWSnZkR0YwYVc5dUxtZGxkRlpsYkc5amFYUjVLQ2tzWEc0Z0lDQWdJQ0JtY21samRHbHZiaXhjYmlBZ0lDQWdJRzl1VlhCa1lYUmxPaUJ1YjJSbFVtOTBZWFJwYjI1Y2JpQWdJQ0I5S1M1emRHRnlkQ2dwTzF4dUlDQjlYRzVjYmlBZ2JtOWtaUzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2R0YjNWelpXUnZkMjRuTENCemRHRnlkRlJ5WVdOcmFXNW5LVHRjYmlBZ2JtOWtaUzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2QwYjNWamFITjBZWEowSnl3Z2MzUmhjblJVY21GamEybHVaeXdnZXlCd1lYTnphWFpsT2lCbVlXeHpaU0I5S1R0Y2JpQWdaRzlqZFcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25iVzkxYzJWMWNDY3NJSE4wYjNCVWNtRmphMmx1WnlrN1hHNGdJR1J2WTNWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9KM1J2ZFdOb1pXNWtKeXdnYzNSdmNGUnlZV05yYVc1bktUdGNibHh1SUNCeVpYUjFjbTRnYm05a1pWSnZkR0YwYVc5dU8xeHVmVnh1SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGFja2FnZXMvcG9wbW90aW9uLXNwaW5uYWJsZS9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0aW1lbGluZTtcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCdwb3Btb3Rpb24nKTtcblxudmFyIGdldFByb2dyZXNzRnJvbVZhbHVlID0gX3BvcG1vdGlvbi5jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlO1xudmFyIGNsYW1wID0gX3BvcG1vdGlvbi50cmFuc2Zvcm0uY2xhbXA7XG5cbnZhciBjbGFtcFByb2dyZXNzID0gY2xhbXAoMCwgMSk7XG5cbi8qXG4gIEZsYXR0ZW4gYXJyYXlzLCB3aGljaCBkZW5vdGUgcGFyYWxsZWwgb3Igc3RhZ2dlcmVkIHR3ZWVucyxcbiAgaW50byBhIGZsYXQgc2V0IG9mIGluc3RydWN0aW9ucyB3aGljaCByZXNldCB0aGUgcGxheWhlYWRcbiAgYWZ0ZXIgZWFjaCB0d2Vlbi5cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbkFycmF5c1RvU2VxdWVuY2Uoc2VxdWVuY2UsIHNlZ21lbnQpIHtcbiAgaWYgKHNlZ21lbnQuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgdmFyIGxhc3RBcmcgPSBzZWdtZW50W3NlZ21lbnQubGVuZ3RoIC0gMV07XG4gICAgdmFyIGlzU3RhZ2dlcmVkID0gdHlwZW9mIGxhc3RBcmcgPT09ICdudW1iZXInO1xuICAgIHZhciB0d2VlbnMgPSBpc1N0YWdnZXJlZCA/IHNlZ21lbnQuc2xpY2UoMCwgLTEpIDogc2VnbWVudDtcbiAgICB2YXIgbnVtVHdlZW5zID0gdHdlZW5zLmxlbmd0aDtcbiAgICB2YXIgb2Zmc2V0ID0gMDtcblxuICAgIHR3ZWVucy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICBzZXF1ZW5jZS5wdXNoKGl0ZW0pO1xuXG4gICAgICBpZiAoaSAhPT0gbnVtVHdlZW5zIC0gMSkge1xuICAgICAgICB2YXIgZHVyYXRpb24gPSBpdGVtLmdldFByb3AoJ2R1cmF0aW9uJyk7XG4gICAgICAgIG9mZnNldCArPSBpc1N0YWdnZXJlZCA/IGxhc3RBcmcgOiAwO1xuICAgICAgICBzZXF1ZW5jZS5wdXNoKCctJyArIChkdXJhdGlvbiAtIG9mZnNldCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHNlcXVlbmNlLnB1c2goc2VnbWVudCk7XG4gIH1cblxuICByZXR1cm4gc2VxdWVuY2U7XG59XG5cbmZ1bmN0aW9uIHRpbWVsaW5lKHNlcXVlbmNlLCBwcm9wcykge1xuICB2YXIgcGxheWhlYWQgPSAwO1xuICB2YXIgZHVyYXRpb24gPSAwO1xuXG4gIHZhciBtYXJrZXJzID0gc2VxdWVuY2UucmVkdWNlKGZsYXR0ZW5BcnJheXNUb1NlcXVlbmNlLCBbXSlcbiAgLy8gQ29udmVydCBzZXF1ZW5jZSB0byByZWxhdGl2ZSB0aW1pbmdzXG4gIC5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc2VnbWVudCkge1xuICAgIHZhciB0eXBlT2ZTZWdtZW50ID0gdHlwZW9mIHNlZ21lbnQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHNlZ21lbnQpO1xuXG4gICAgLy8gSWYgcmVsYXRpdmUgdGltZXN0YW1wXG4gICAgaWYgKHR5cGVPZlNlZ21lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwbGF5aGVhZCArPSBwYXJzZUZsb2F0KHNlZ21lbnQpO1xuXG4gICAgICAvLyBJZiBhYnNvbHV0ZSB0aW1lc3RhbXBcbiAgICB9IGVsc2UgaWYgKHR5cGVPZlNlZ21lbnQgPT09ICdudW1iZXInKSB7XG4gICAgICBwbGF5aGVhZCA9IHNlZ21lbnQ7XG5cbiAgICAgIC8vIE9yIGlmIHR3ZWVuLCBhZGQgbWFya2VyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0byA9IHBsYXloZWFkICsgc2VnbWVudC5nZXRQcm9wKCdkdXJhdGlvbicpO1xuXG4gICAgICBhY2MucHVzaCh7XG4gICAgICAgIHR3ZWVuOiBzZWdtZW50LFxuICAgICAgICBmcm9tOiBwbGF5aGVhZCxcbiAgICAgICAgdG86IHRvXG4gICAgICB9KTtcblxuICAgICAgcGxheWhlYWQgPSB0bztcbiAgICAgIGR1cmF0aW9uID0gTWF0aC5tYXgoZHVyYXRpb24sIHRvKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSlcbiAgLy8gU3BsaXQgdHdlZW5zIGJ5IHRhcmdldCwgYW5kIGNvbnZlcnQgYWJzb2x1dGUgbWFya2VycyB0byBwcm9ncmVzcyBtYXJrZXJzXG4gIC5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbWFya2VyKSB7XG4gICAgdmFyIG91dHB1dCA9IG1hcmtlci50d2Vlbi5nZXRQcm9wKCdvblVwZGF0ZScpO1xuICAgIHZhciB0YXJnZXRJbmRleCA9IGFjYy50YXJnZXRzLmluZGV4T2Yob3V0cHV0KTtcblxuICAgIGlmICh0YXJnZXRJbmRleCA9PT0gLTEpIHtcbiAgICAgIGFjYy50YXJnZXRzLnB1c2gob3V0cHV0KTtcbiAgICAgIGFjYy5mcmFnbWVudHMucHVzaChbXSk7XG4gICAgICB0YXJnZXRJbmRleCA9IGFjYy5mcmFnbWVudHMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICB2YXIgZnJhZ21lbnRMaXN0ID0gYWNjLmZyYWdtZW50c1t0YXJnZXRJbmRleF07XG5cbiAgICBmcmFnbWVudExpc3QucHVzaCh7XG4gICAgICB0d2VlbjogbWFya2VyLnR3ZWVuLFxuICAgICAgZnJvbTogZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoMCwgZHVyYXRpb24sIG1hcmtlci5mcm9tKSxcbiAgICAgIHRvOiBnZXRQcm9ncmVzc0Zyb21WYWx1ZSgwLCBkdXJhdGlvbiwgbWFya2VyLnRvKVxuICAgIH0pO1xuXG4gICAgaWYgKG91dHB1dC5nZXQpIHtcbiAgICAgIGFjYy5pbml0aWFsVmFsdWVzW3RhcmdldEluZGV4XSA9IG91dHB1dC5nZXQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7IGluaXRpYWxWYWx1ZXM6IFtdLCB0YXJnZXRzOiBbXSwgZnJhZ21lbnRzOiBbXSB9KTtcblxuICB2YXIgbnVtTWFya2VycyA9IG1hcmtlcnMuZnJhZ21lbnRzLmxlbmd0aDtcblxuICByZXR1cm4gKDAsIF9wb3Btb3Rpb24udHdlZW4pKF9leHRlbmRzKHtcbiAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgZWFzZTogX3BvcG1vdGlvbi5lYXNpbmcubGluZWFyXG4gIH0sIHByb3BzLCB7XG4gICAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKHYpIHtcbiAgICAgIC8vIEZpcnN0IGl0ZXJhdGUgb3ZlciBvdXRwdXQgdGFyZ2V0cywgYW5kIHRyeSB0byBmaW5kIGFuIGFjdGl2ZSB0d2VlblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1NYXJrZXJzOyBpKyspIHtcbiAgICAgICAgdmFyIGZyYWdtZW50cyA9IG1hcmtlcnMuZnJhZ21lbnRzW2ldO1xuICAgICAgICB2YXIgbnVtRnJhZ21lbnRzID0gZnJhZ21lbnRzLmxlbmd0aDtcbiAgICAgICAgdmFyIGZvdW5kQWN0aXZlRnJhZ21lbnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHByZXZQcm9ncmVzc0Rpc3RhbmNlID0gSW5maW5pdHk7XG4gICAgICAgIHZhciBjbG9zZXN0SW5kZXggPSAwO1xuICAgICAgICB2YXIgY2xvc2VzdFByb2dyZXNzID0gMDtcbiAgICAgICAgdmFyIHR3ZWVuSGFzU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgaiA9IDA7XG5cbiAgICAgICAgd2hpbGUgKCFmb3VuZEFjdGl2ZUZyYWdtZW50ICYmIGogPCBudW1GcmFnbWVudHMpIHtcbiAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBmcmFnbWVudHNbal07XG4gICAgICAgICAgdmFyIHByb2dyZXNzID0gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoZnJhZ21lbnQuZnJvbSwgZnJhZ21lbnQudG8sIHYpO1xuXG4gICAgICAgICAgLy8gRm91bmQgYW4gYWN0aXZlIGZyYWdtZW50LCBleGVjdXRlXG4gICAgICAgICAgaWYgKHByb2dyZXNzID49IDAgJiYgcHJvZ3Jlc3MgPD0gMSkge1xuICAgICAgICAgICAgZm91bmRBY3RpdmVGcmFnbWVudCA9IHRydWU7XG4gICAgICAgICAgICBmcmFnbWVudC50d2Vlbi5zZWVrKHByb2dyZXNzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzID4gMSkge1xuICAgICAgICAgICAgICB0d2Vlbkhhc1N0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IHByb2dyZXNzIDwgMCA/IE1hdGguYWJzKHByb2dyZXNzKSA6IHByb2dyZXNzIC0gMTtcblxuICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBwcmV2UHJvZ3Jlc3NEaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIHByZXZQcm9ncmVzc0Rpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgY2xvc2VzdFByb2dyZXNzID0gY2xhbXBQcm9ncmVzcyhwcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgY2xvc2VzdEluZGV4ID0gajtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGorKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZm91bmRBY3RpdmVGcmFnbWVudCkge1xuICAgICAgICAgIHZhciB0YXJnZXQgPSBtYXJrZXJzLnRhcmdldHNbaV07XG5cbiAgICAgICAgICBpZiAodHdlZW5IYXNTdGFydGVkIHx8ICF0YXJnZXQuc2V0KSB7XG4gICAgICAgICAgICBpZiAoZnJhZ21lbnRzW2Nsb3Nlc3RJbmRleF0udHdlZW4ucHJvZ3Jlc3MgIT09IGNsb3Nlc3RQcm9ncmVzcykgZnJhZ21lbnRzW2Nsb3Nlc3RJbmRleF0udHdlZW4uc2VlayhjbG9zZXN0UHJvZ3Jlc3MpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXR3ZWVuSGFzU3RhcnRlZCAmJiB0YXJnZXQuc2V0KSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LmdldCgpICE9PSBtYXJrZXJzLmluaXRpYWxWYWx1ZXNbaV0pIHRhcmdldC5zZXQobWFya2Vycy5pbml0aWFsVmFsdWVzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluQmhZMnRoWjJWekwzQnZjRzF2ZEdsdmJpMTBhVzFsYkdsdVpTOXpjbU12YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2xzaWRHbHRaV3hwYm1VaUxDSm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU0lzSW1Oc1lXMXdJaXdpWTJ4aGJYQlFjbTluY21WemN5SXNJbVpzWVhSMFpXNUJjbkpoZVhOVWIxTmxjWFZsYm1ObElpd2ljMlZ4ZFdWdVkyVWlMQ0p6WldkdFpXNTBJaXdpWTI5dWMzUnlkV04wYjNJaUxDSkJjbkpoZVNJc0lteGhjM1JCY21jaUxDSnNaVzVuZEdnaUxDSnBjMU4wWVdkblpYSmxaQ0lzSW5SM1pXVnVjeUlzSW5Oc2FXTmxJaXdpYm5WdFZIZGxaVzV6SWl3aWIyWm1jMlYwSWl3aVptOXlSV0ZqYUNJc0ltbDBaVzBpTENKcElpd2ljSFZ6YUNJc0ltUjFjbUYwYVc5dUlpd2laMlYwVUhKdmNDSXNJbkJ5YjNCeklpd2ljR3hoZVdobFlXUWlMQ0p0WVhKclpYSnpJaXdpY21Wa2RXTmxJaXdpWVdOaklpd2lkSGx3WlU5bVUyVm5iV1Z1ZENJc0luQmhjbk5sUm14dllYUWlMQ0owYnlJc0luUjNaV1Z1SWl3aVpuSnZiU0lzSWsxaGRHZ2lMQ0p0WVhnaUxDSnRZWEpyWlhJaUxDSnZkWFJ3ZFhRaUxDSjBZWEpuWlhSSmJtUmxlQ0lzSW5SaGNtZGxkSE1pTENKcGJtUmxlRTltSWl3aVpuSmhaMjFsYm5Seklpd2labkpoWjIxbGJuUk1hWE4wSWl3aVoyVjBJaXdpYVc1cGRHbGhiRlpoYkhWbGN5SXNJbTUxYlUxaGNtdGxjbk1pTENKbFlYTmxJaXdpYkdsdVpXRnlJaXdpYjI1VmNHUmhkR1VpTENKMklpd2liblZ0Um5KaFoyMWxiblJ6SWl3aVptOTFibVJCWTNScGRtVkdjbUZuYldWdWRDSXNJbkJ5WlhaUWNtOW5jbVZ6YzBScGMzUmhibU5sSWl3aVNXNW1hVzVwZEhraUxDSmpiRzl6WlhOMFNXNWtaWGdpTENKamJHOXpaWE4wVUhKdlozSmxjM01pTENKMGQyVmxia2hoYzFOMFlYSjBaV1FpTENKcUlpd2labkpoWjIxbGJuUWlMQ0p3Y205bmNtVnpjeUlzSW5ObFpXc2lMQ0prYVhOMFlXNWpaU0lzSW1GaWN5SXNJblJoY21kbGRDSXNJbk5sZENKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdhMEpCYTBOM1FrRXNVVHM3UVVGc1EzaENPenRKUVVOUlF5eHZRaXh0UWtGQlFVRXNiMEk3U1VGRFFVTXNTeXgzUWtGQlFVRXNTenM3UVVGRFVpeEpRVUZOUXl4blFrRkJaMEpFTEUxQlFVMHNRMEZCVGl4RlFVRlRMRU5CUVZRc1EwRkJkRUk3TzBGQlJVRTdPenM3TzBGQlMwRXNVMEZCVTBVc2RVSkJRVlFzUTBGQmFVTkRMRkZCUVdwRExFVkJRVEpEUXl4UFFVRXpReXhGUVVGdlJEdEJRVU5zUkN4TlFVRkpRU3hSUVVGUlF5eFhRVUZTTEV0QlFYZENReXhMUVVFMVFpeEZRVUZ0UXp0QlFVTnFReXhSUVVGTlF5eFZRVUZWU0N4UlFVRlJRU3hSUVVGUlNTeE5RVUZTTEVkQlFXbENMRU5CUVhwQ0xFTkJRV2hDTzBGQlEwRXNVVUZCVFVNc1kwRkJZeXhQUVVGUFJpeFBRVUZRTEV0QlFXMUNMRkZCUVhaRE8wRkJRMEVzVVVGQlRVY3NVMEZCVTBRc1kwRkJZMHdzVVVGQlVVOHNTMEZCVWl4RFFVRmpMRU5CUVdRc1JVRkJhVUlzUTBGQlF5eERRVUZzUWl4RFFVRmtMRWRCUVhGRFVDeFBRVUZ3UkR0QlFVTkJMRkZCUVUxUkxGbEJRVmxHTEU5QlFVOUdMRTFCUVhwQ08wRkJRMEVzVVVGQlNVc3NVMEZCVXl4RFFVRmlPenRCUVVWQlNDeFhRVUZQU1N4UFFVRlFMRU5CUVdVc1ZVRkJRME1zU1VGQlJDeEZRVUZQUXl4RFFVRlFMRVZCUVdFN1FVRkRNVUppTEdWQlFWTmpMRWxCUVZRc1EwRkJZMFlzU1VGQlpEczdRVUZGUVN4VlFVRkpReXhOUVVGTlNpeFpRVUZaTEVOQlFYUkNMRVZCUVhsQ08wRkJRM1pDTEZsQlFVMU5MRmRCUVZkSUxFdEJRVXRKTEU5QlFVd3NRMEZCWVN4VlFVRmlMRU5CUVdwQ08wRkJRMEZPTEd0Q1FVRlZTaXhqUVVGalJpeFBRVUZrTEVkQlFYZENMRU5CUVd4RE8wRkJRMEZLTEdsQ1FVRlRZeXhKUVVGVUxGRkJRV3RDUXl4WFFVRlhUQ3hOUVVFM1FqdEJRVU5FTzBGQlEwWXNTMEZTUkR0QlFWTkVMRWRCYUVKRUxFMUJaMEpQTzBGQlEweFdMR0ZCUVZOakxFbEJRVlFzUTBGQlkySXNUMEZCWkR0QlFVTkVPenRCUVVWRUxGTkJRVTlFTEZGQlFWQTdRVUZEUkRzN1FVRkZZeXhUUVVGVFRDeFJRVUZVTEVOQlFXdENTeXhSUVVGc1FpeEZRVUUwUW1sQ0xFdEJRVFZDTEVWQlFXMURPMEZCUTJoRUxFMUJRVWxETEZkQlFWY3NRMEZCWmp0QlFVTkJMRTFCUVVsSUxGZEJRVmNzUTBGQlpqczdRVUZGUVN4TlFVRk5TU3hWUVVGVmJrSXNVMEZEWW05Q0xFMUJSR0VzUTBGRFRuSkNMSFZDUVVSTkxFVkJRMjFDTEVWQlJHNUNPMEZCUldRN1FVRkdZeXhIUVVkaWNVSXNUVUZJWVN4RFFVZE9MRlZCUVVORExFZEJRVVFzUlVGQlRYQkNMRTlCUVU0c1JVRkJhMEk3UVVGRGVFSXNVVUZCVFhGQ0xIVkNRVUYxUW5KQ0xFOUJRWFpDTEhsRFFVRjFRa0VzVDBGQmRrSXNRMEZCVGpzN1FVRkZRVHRCUVVOQkxGRkJRVWx4UWl4clFrRkJhMElzVVVGQmRFSXNSVUZCWjBNN1FVRkRPVUpLTEd0Q1FVRlpTeXhYUVVGWGRFSXNUMEZCV0N4RFFVRmFPenRCUVVWR08wRkJRME1zUzBGS1JDeE5RVWxQTEVsQlFVbHhRaXhyUWtGQmEwSXNVVUZCZEVJc1JVRkJaME03UVVGRGNrTktMR2xDUVVGWGFrSXNUMEZCV0RzN1FVRkZSanRCUVVORExFdEJTazBzVFVGSlFUdEJRVU5NTEZWQlFVMTFRaXhMUVVGTFRpeFhRVUZYYWtJc1VVRkJVV1VzVDBGQlVpeERRVUZuUWl4VlFVRm9RaXhEUVVGMFFqczdRVUZGUVVzc1ZVRkJTVkFzU1VGQlNpeERRVUZUTzBGQlExQlhMR1ZCUVU5NFFpeFBRVVJCTzBGQlJWQjVRaXhqUVVGTlVpeFJRVVpETzBGQlIxQk5PMEZCU0U4c1QwRkJWRHM3UVVGTlFVNHNhVUpCUVZkTkxFVkJRVmc3UVVGRFFWUXNhVUpCUVZkWkxFdEJRVXRETEVkQlFVd3NRMEZCVTJJc1VVRkJWQ3hGUVVGdFFsTXNSVUZCYmtJc1EwRkJXRHRCUVVORU96dEJRVVZFTEZkQlFVOUlMRWRCUVZBN1FVRkRSQ3hIUVRkQ1lTeEZRVFpDV0N4RlFUZENWenRCUVRoQ1pEdEJRVGxDWXl4SFFTdENZa1FzVFVFdlFtRXNRMEVyUWs0c1ZVRkJRME1zUjBGQlJDeEZRVUZOVVN4TlFVRk9MRVZCUVdsQ08wRkJRM1pDTEZGQlFVMURMRk5CUVZORUxFOUJRVTlLTEV0QlFWQXNRMEZCWVZRc1QwRkJZaXhEUVVGeFFpeFZRVUZ5UWl4RFFVRm1PMEZCUTBFc1VVRkJTV1VzWTBGQlkxWXNTVUZCU1Zjc1QwRkJTaXhEUVVGWlF5eFBRVUZhTEVOQlFXOUNTQ3hOUVVGd1FpeERRVUZzUWpzN1FVRkZRU3hSUVVGSlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGeVFpeEZRVUYzUWp0QlFVTjBRbFlzVlVGQlNWY3NUMEZCU2l4RFFVRlpiRUlzU1VGQldpeERRVUZwUW1kQ0xFMUJRV3BDTzBGQlEwRlVMRlZCUVVsaExGTkJRVW9zUTBGQlkzQkNMRWxCUVdRc1EwRkJiVUlzUlVGQmJrSTdRVUZEUVdsQ0xHOUNRVUZqVml4SlFVRkpZU3hUUVVGS0xFTkJRV00zUWl4TlFVRmtMRWRCUVhWQ0xFTkJRWEpETzBGQlEwUTdPMEZCUlVRc1VVRkJUVGhDTEdWQlFXVmtMRWxCUVVsaExGTkJRVW9zUTBGQlkwZ3NWMEZCWkN4RFFVRnlRanM3UVVGRlFVa3NhVUpCUVdGeVFpeEpRVUZpTEVOQlFXdENPMEZCUTJoQ1Z5eGhRVUZQU1N4UFFVRlBTaXhMUVVSRk8wRkJSV2hDUXl4WlFVRk5PVUlzY1VKQlFYRkNMRU5CUVhKQ0xFVkJRWGRDYlVJc1VVRkJlRUlzUlVGQmEwTmpMRTlCUVU5SUxFbEJRWHBETEVOQlJsVTdRVUZIYUVKR0xGVkJRVWsxUWl4eFFrRkJjVUlzUTBGQmNrSXNSVUZCZDBKdFFpeFJRVUY0UWl4RlFVRnJRMk1zVDBGQlQwd3NSVUZCZWtNN1FVRklXU3hMUVVGc1FqczdRVUZOUVN4UlFVRkpUU3hQUVVGUFRTeEhRVUZZTEVWQlFXZENPMEZCUTJSbUxGVkJRVWxuUWl4aFFVRktMRU5CUVd0Q1RpeFhRVUZzUWl4SlFVRnBRMFFzVDBGQlQwMHNSMEZCVUN4RlFVRnFRenRCUVVORU96dEJRVVZFTEZkQlFVOW1MRWRCUVZBN1FVRkRSQ3hIUVhSRVlTeEZRWE5FV0N4RlFVRkZaMElzWlVGQlpTeEZRVUZxUWl4RlFVRnhRa3dzVTBGQlV5eEZRVUU1UWl4RlFVRnJRMFVzVjBGQlZ5eEZRVUUzUXl4RlFYUkVWeXhEUVVGb1FqczdRVUYzUkVFc1RVRkJUVWtzWVVGQllXNUNMRkZCUVZGbExGTkJRVklzUTBGQmEwSTNRaXhOUVVGeVF6czdRVUZGUVN4VFFVRlBPMEZCUTB4VkxITkNRVVJMTzBGQlJVeDNRaXhWUVVGTkxHdENRVUZQUXp0QlFVWlNMRXRCUjBaMlFpeExRVWhGTzBGQlNVeDNRaXhqUVVGVkxHdENRVUZEUXl4RFFVRkVMRVZCUVU4N1FVRkRaanRCUVVOQkxGZEJRVXNzU1VGQlNUZENMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1hsQ0xGVkJRWEJDTEVWQlFXZERla0lzUjBGQmFFTXNSVUZCY1VNN1FVRkRia01zV1VGQlRYRkNMRmxCUVZsbUxGRkJRVkZsTEZOQlFWSXNRMEZCYTBKeVFpeERRVUZzUWl4RFFVRnNRanRCUVVOQkxGbEJRVTA0UWl4bFFVRmxWQ3hWUVVGVk4wSXNUVUZCTDBJN1FVRkRRU3haUVVGSmRVTXNjMEpCUVhOQ0xFdEJRVEZDTzBGQlEwRXNXVUZCU1VNc2RVSkJRWFZDUXl4UlFVRXpRanRCUVVOQkxGbEJRVWxETEdWQlFXVXNRMEZCYmtJN1FVRkRRU3haUVVGSlF5eHJRa0ZCYTBJc1EwRkJkRUk3UVVGRFFTeFpRVUZKUXl4clFrRkJhMElzUzBGQmRFSTdRVUZEUVN4WlFVRkpReXhKUVVGSkxFTkJRVkk3TzBGQlJVRXNaVUZCVHl4RFFVRkRUaXh0UWtGQlJDeEpRVUYzUWswc1NVRkJTVkFzV1VGQmJrTXNSVUZCYVVRN1FVRkRMME1zWTBGQlRWRXNWMEZCVjJwQ0xGVkJRVlZuUWl4RFFVRldMRU5CUVdwQ08wRkJRMEVzWTBGQlRVVXNWMEZCVjNoRUxIRkNRVUZ4UW5WRUxGTkJRVk42UWl4SlFVRTVRaXhGUVVGdlEzbENMRk5CUVZNelFpeEZRVUUzUXl4RlFVRnBSR3RDTEVOQlFXcEVMRU5CUVdwQ096dEJRVVZCTzBGQlEwRXNZMEZCU1ZVc1dVRkJXU3hEUVVGYUxFbEJRV2xDUVN4WlFVRlpMRU5CUVdwRExFVkJRVzlETzBGQlEyeERVaXhyUTBGQmMwSXNTVUZCZEVJN1FVRkRRVThzY1VKQlFWTXhRaXhMUVVGVUxFTkJRV1UwUWl4SlFVRm1MRU5CUVc5Q1JDeFJRVUZ3UWp0QlFVTkVMRmRCU0VRc1RVRkhUenRCUVVOTUxHZENRVUZKUVN4WFFVRlhMRU5CUVdZc1JVRkJhMEk3UVVGRGFFSklMR2REUVVGclFpeEpRVUZzUWpzN1FVRkZRU3hyUWtGQlRVc3NWMEZCV1VZc1YwRkJWeXhEUVVGYUxFZEJRV2xDZWtJc1MwRkJTelJDTEVkQlFVd3NRMEZCVTBnc1VVRkJWQ3hEUVVGcVFpeEhRVUZ6UTBFc1YwRkJWeXhEUVVGc1JUczdRVUZGUVN4clFrRkJTVVVzVjBGQlYxUXNiMEpCUVdZc1JVRkJjVU03UVVGRGJrTkJMSFZEUVVGMVFsTXNVVUZCZGtJN1FVRkRRVTRzYTBOQlFXdENiRVFzWTBGQlkzTkVMRkZCUVdRc1EwRkJiRUk3UVVGRFFVd3NLMEpCUVdWSExFTkJRV1k3UVVGRFJEdEJRVU5HTzBGQlEwWTdPMEZCUlVSQk8wRkJRMFE3TzBGQlJVUXNXVUZCU1N4RFFVRkRUaXh0UWtGQlRDeEZRVUV3UWp0QlFVTjRRaXhqUVVGTldTeFRRVUZUY2tNc1VVRkJVV0VzVDBGQlVpeERRVUZuUW01Q0xFTkJRV2hDTEVOQlFXWTdPMEZCUlVFc1kwRkJTVzlETEcxQ1FVRnRRaXhEUVVGRFR5eFBRVUZQUXl4SFFVRXZRaXhGUVVGdlF6dEJRVU5zUXl4blFrRkJTWFpDTEZWQlFWVmhMRmxCUVZZc1JVRkJkMEowUWl4TFFVRjRRaXhEUVVFNFFqSkNMRkZCUVRsQ0xFdEJRVEpEU2l4bFFVRXZReXhGUVVGblJXUXNWVUZCVldFc1dVRkJWaXhGUVVGM1FuUkNMRXRCUVhoQ0xFTkJRVGhDTkVJc1NVRkJPVUlzUTBGQmJVTk1MR1ZCUVc1RE8wRkJRMnBGTEZkQlJrUXNUVUZGVHl4SlFVRkpMRU5CUVVORExHVkJRVVFzU1VGQmIwSlBMRTlCUVU5RExFZEJRUzlDTEVWQlFXOURPMEZCUTNwRExHZENRVUZKUkN4UFFVRlBjRUlzUjBGQlVDeFBRVUZwUW1wQ0xGRkJRVkZyUWl4aFFVRlNMRU5CUVhOQ2VFSXNRMEZCZEVJc1EwRkJja0lzUlVGQkswTXlReXhQUVVGUFF5eEhRVUZRTEVOQlFWZDBReXhSUVVGUmEwSXNZVUZCVWl4RFFVRnpRbmhDTEVOQlFYUkNMRU5CUVZnN1FVRkRhRVE3UVVGRFJqdEJRVU5HTzBGQlEwWTdRVUZ1UkVrc1MwRkJVRHRCUVhGRVJDSXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGeWN5OW5hWFJvZFdJdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZMkZzWXl3Z2RIZGxaVzRzSUdWaGMybHVaeXdnZEhKaGJuTm1iM0p0SUgwZ1puSnZiU0FuY0c5d2JXOTBhVzl1Snp0Y2JtTnZibk4wSUhzZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVWdmU0E5SUdOaGJHTTdYRzVqYjI1emRDQjdJR05zWVcxd0lIMGdQU0IwY21GdWMyWnZjbTA3WEc1amIyNXpkQ0JqYkdGdGNGQnliMmR5WlhOeklEMGdZMnhoYlhBb01Dd2dNU2s3WEc1Y2JpOHFYRzRnSUVac1lYUjBaVzRnWVhKeVlYbHpMQ0IzYUdsamFDQmtaVzV2ZEdVZ2NHRnlZV3hzWld3Z2IzSWdjM1JoWjJkbGNtVmtJSFIzWldWdWN5eGNiaUFnYVc1MGJ5QmhJR1pzWVhRZ2MyVjBJRzltSUdsdWMzUnlkV04wYVc5dWN5QjNhR2xqYUNCeVpYTmxkQ0IwYUdVZ2NHeGhlV2hsWVdSY2JpQWdZV1owWlhJZ1pXRmphQ0IwZDJWbGJpNWNiaUFxTDF4dVpuVnVZM1JwYjI0Z1pteGhkSFJsYmtGeWNtRjVjMVJ2VTJWeGRXVnVZMlVvYzJWeGRXVnVZMlVzSUhObFoyMWxiblFwSUh0Y2JpQWdhV1lnS0hObFoyMWxiblF1WTI5dWMzUnlkV04wYjNJZ1BUMDlJRUZ5Y21GNUtTQjdYRzRnSUNBZ1kyOXVjM1FnYkdGemRFRnlaeUE5SUhObFoyMWxiblJiYzJWbmJXVnVkQzVzWlc1bmRHZ2dMU0F4WFR0Y2JpQWdJQ0JqYjI1emRDQnBjMU4wWVdkblpYSmxaQ0E5SUhSNWNHVnZaaUJzWVhOMFFYSm5JRDA5UFNBbmJuVnRZbVZ5Snp0Y2JpQWdJQ0JqYjI1emRDQjBkMlZsYm5NZ1BTQnBjMU4wWVdkblpYSmxaQ0EvSUhObFoyMWxiblF1YzJ4cFkyVW9NQ3dnTFRFcElEb2djMlZuYldWdWREdGNiaUFnSUNCamIyNXpkQ0J1ZFcxVWQyVmxibk1nUFNCMGQyVmxibk11YkdWdVozUm9PMXh1SUNBZ0lHeGxkQ0J2Wm1aelpYUWdQU0F3TzF4dVhHNGdJQ0FnZEhkbFpXNXpMbVp2Y2tWaFkyZ29LR2wwWlcwc0lHa3BJRDArSUh0Y2JpQWdJQ0FnSUhObGNYVmxibU5sTG5CMWMyZ29hWFJsYlNrN1hHNWNiaUFnSUNBZ0lHbG1JQ2hwSUNFOVBTQnVkVzFVZDJWbGJuTWdMU0F4S1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdSMWNtRjBhVzl1SUQwZ2FYUmxiUzVuWlhSUWNtOXdLQ2RrZFhKaGRHbHZiaWNwTzF4dUlDQWdJQ0FnSUNCdlptWnpaWFFnS3owZ2FYTlRkR0ZuWjJWeVpXUWdQeUJzWVhOMFFYSm5JRG9nTUR0Y2JpQWdJQ0FnSUNBZ2MyVnhkV1Z1WTJVdWNIVnphQ2hnTFNSN1pIVnlZWFJwYjI0Z0xTQnZabVp6WlhSOVlDazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTazdYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdjMlZ4ZFdWdVkyVXVjSFZ6YUNoelpXZHRaVzUwS1R0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCelpYRjFaVzVqWlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdkR2x0Wld4cGJtVW9jMlZ4ZFdWdVkyVXNJSEJ5YjNCektTQjdYRzRnSUd4bGRDQndiR0Y1YUdWaFpDQTlJREE3WEc0Z0lHeGxkQ0JrZFhKaGRHbHZiaUE5SURBN1hHNWNiaUFnWTI5dWMzUWdiV0Z5YTJWeWN5QTlJSE5sY1hWbGJtTmxYRzRnSUNBZ0xuSmxaSFZqWlNobWJHRjBkR1Z1UVhKeVlYbHpWRzlUWlhGMVpXNWpaU3dnVzEwcFhHNGdJQ0FnTHk4Z1EyOXVkbVZ5ZENCelpYRjFaVzVqWlNCMGJ5QnlaV3hoZEdsMlpTQjBhVzFwYm1kelhHNGdJQ0FnTG5KbFpIVmpaU2dvWVdOakxDQnpaV2R0Wlc1MEtTQTlQaUI3WEc0Z0lDQWdJQ0JqYjI1emRDQjBlWEJsVDJaVFpXZHRaVzUwSUQwZ2RIbHdaVzltSUhObFoyMWxiblE3WEc1Y2JpQWdJQ0FnSUM4dklFbG1JSEpsYkdGMGFYWmxJSFJwYldWemRHRnRjRnh1SUNBZ0lDQWdhV1lnS0hSNWNHVlBabE5sWjIxbGJuUWdQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNBZ0lIQnNZWGxvWldGa0lDczlJSEJoY25ObFJteHZZWFFvYzJWbmJXVnVkQ2s3WEc1Y2JpQWdJQ0FnSUM4dklFbG1JR0ZpYzI5c2RYUmxJSFJwYldWemRHRnRjRnh1SUNBZ0lDQWdmU0JsYkhObElHbG1JQ2gwZVhCbFQyWlRaV2R0Wlc1MElEMDlQU0FuYm5WdFltVnlKeWtnZTF4dUlDQWdJQ0FnSUNCd2JHRjVhR1ZoWkNBOUlITmxaMjFsYm5RN1hHNWNiaUFnSUNBZ0lDOHZJRTl5SUdsbUlIUjNaV1Z1TENCaFpHUWdiV0Z5YTJWeVhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwYnlBOUlIQnNZWGxvWldGa0lDc2djMlZuYldWdWRDNW5aWFJRY205d0tDZGtkWEpoZEdsdmJpY3BPMXh1WEc0Z0lDQWdJQ0FnSUdGall5NXdkWE5vS0h0Y2JpQWdJQ0FnSUNBZ0lDQjBkMlZsYmpvZ2MyVm5iV1Z1ZEN4Y2JpQWdJQ0FnSUNBZ0lDQm1jbTl0T2lCd2JHRjVhR1ZoWkN4Y2JpQWdJQ0FnSUNBZ0lDQjBiMXh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQndiR0Y1YUdWaFpDQTlJSFJ2TzF4dUlDQWdJQ0FnSUNCa2RYSmhkR2x2YmlBOUlFMWhkR2d1YldGNEtHUjFjbUYwYVc5dUxDQjBieWs3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJoWTJNN1hHNGdJQ0FnZlN3Z1cxMHBYRzRnSUNBZ0x5OGdVM0JzYVhRZ2RIZGxaVzV6SUdKNUlIUmhjbWRsZEN3Z1lXNWtJR052Ym5abGNuUWdZV0p6YjJ4MWRHVWdiV0Z5YTJWeWN5QjBieUJ3Y205bmNtVnpjeUJ0WVhKclpYSnpYRzRnSUNBZ0xuSmxaSFZqWlNnb1lXTmpMQ0J0WVhKclpYSXBJRDArSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJRzkxZEhCMWRDQTlJRzFoY210bGNpNTBkMlZsYmk1blpYUlFjbTl3S0NkdmJsVndaR0YwWlNjcE8xeHVJQ0FnSUNBZ2JHVjBJSFJoY21kbGRFbHVaR1Y0SUQwZ1lXTmpMblJoY21kbGRITXVhVzVrWlhoUFppaHZkWFJ3ZFhRcE8xeHVYRzRnSUNBZ0lDQnBaaUFvZEdGeVoyVjBTVzVrWlhnZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lHRmpZeTUwWVhKblpYUnpMbkIxYzJnb2IzVjBjSFYwS1R0Y2JpQWdJQ0FnSUNBZ1lXTmpMbVp5WVdkdFpXNTBjeTV3ZFhOb0tGdGRLVHRjYmlBZ0lDQWdJQ0FnZEdGeVoyVjBTVzVrWlhnZ1BTQmhZMk11Wm5KaFoyMWxiblJ6TG14bGJtZDBhQ0F0SURFN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHTnZibk4wSUdaeVlXZHRaVzUwVEdsemRDQTlJR0ZqWXk1bWNtRm5iV1Z1ZEhOYmRHRnlaMlYwU1c1a1pYaGRPMXh1WEc0Z0lDQWdJQ0JtY21GbmJXVnVkRXhwYzNRdWNIVnphQ2g3WEc0Z0lDQWdJQ0FnSUhSM1pXVnVPaUJ0WVhKclpYSXVkSGRsWlc0c1hHNGdJQ0FnSUNBZ0lHWnliMjA2SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtEQXNJR1IxY21GMGFXOXVMQ0J0WVhKclpYSXVabkp2YlNrc1hHNGdJQ0FnSUNBZ0lIUnZPaUJuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNnd0xDQmtkWEpoZEdsdmJpd2diV0Z5YTJWeUxuUnZLVnh1SUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUdsbUlDaHZkWFJ3ZFhRdVoyVjBLU0I3WEc0Z0lDQWdJQ0FnSUdGall5NXBibWwwYVdGc1ZtRnNkV1Z6VzNSaGNtZGxkRWx1WkdWNFhTQTlJRzkxZEhCMWRDNW5aWFFvS1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUdGall6dGNiaUFnSUNCOUxDQjdJR2x1YVhScFlXeFdZV3gxWlhNNklGdGRMQ0IwWVhKblpYUnpPaUJiWFN3Z1puSmhaMjFsYm5Sek9pQmJYU0I5S1R0Y2JseHVJQ0JqYjI1emRDQnVkVzFOWVhKclpYSnpJRDBnYldGeWEyVnljeTVtY21GbmJXVnVkSE11YkdWdVozUm9PMXh1WEc0Z0lISmxkSFZ5YmlCMGQyVmxiaWg3WEc0Z0lDQWdaSFZ5WVhScGIyNHNYRzRnSUNBZ1pXRnpaVG9nWldGemFXNW5MbXhwYm1WaGNpeGNiaUFnSUNBdUxpNXdjbTl3Y3l4Y2JpQWdJQ0J2YmxWd1pHRjBaVG9nS0hZcElEMCtJSHRjYmlBZ0lDQWdJQzh2SUVacGNuTjBJR2wwWlhKaGRHVWdiM1psY2lCdmRYUndkWFFnZEdGeVoyVjBjeXdnWVc1a0lIUnllU0IwYnlCbWFXNWtJR0Z1SUdGamRHbDJaU0IwZDJWbGJseHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFOWVhKclpYSnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1puSmhaMjFsYm5SeklEMGdiV0Z5YTJWeWN5NW1jbUZuYldWdWRITmJhVjA3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzUxYlVaeVlXZHRaVzUwY3lBOUlHWnlZV2R0Wlc1MGN5NXNaVzVuZEdnN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JtYjNWdVpFRmpkR2wyWlVaeVlXZHRaVzUwSUQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUd4bGRDQndjbVYyVUhKdlozSmxjM05FYVhOMFlXNWpaU0E5SUVsdVptbHVhWFI1TzF4dUlDQWdJQ0FnSUNCc1pYUWdZMnh2YzJWemRFbHVaR1Y0SUQwZ01EdGNiaUFnSUNBZ0lDQWdiR1YwSUdOc2IzTmxjM1JRY205bmNtVnpjeUE5SURBN1hHNGdJQ0FnSUNBZ0lHeGxkQ0IwZDJWbGJraGhjMU4wWVhKMFpXUWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lDQWdiR1YwSUdvZ1BTQXdPMXh1WEc0Z0lDQWdJQ0FnSUhkb2FXeGxJQ2doWm05MWJtUkJZM1JwZG1WR2NtRm5iV1Z1ZENBbUppQnFJRHdnYm5WdFJuSmhaMjFsYm5SektTQjdYRzRnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdabkpoWjIxbGJuUWdQU0JtY21GbmJXVnVkSE5iYWwwN1hHNGdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2NISnZaM0psYzNNZ1BTQm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2htY21GbmJXVnVkQzVtY205dExDQm1jbUZuYldWdWRDNTBieXdnZGlrN1hHNWNiaUFnSUNBZ0lDQWdJQ0F2THlCR2IzVnVaQ0JoYmlCaFkzUnBkbVVnWm5KaFoyMWxiblFzSUdWNFpXTjFkR1ZjYmlBZ0lDQWdJQ0FnSUNCcFppQW9jSEp2WjNKbGMzTWdQajBnTUNBbUppQndjbTluY21WemN5QThQU0F4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNWdVpFRmpkR2wyWlVaeVlXZHRaVzUwSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnlZV2R0Wlc1MExuUjNaV1Z1TG5ObFpXc29jSEp2WjNKbGMzTXBPMXh1SUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdlozSmxjM01nUGlBeEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIUjNaV1Z1U0dGelUzUmhjblJsWkNBOUlIUnlkV1U3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdaR2x6ZEdGdVkyVWdQU0FvY0hKdlozSmxjM01nUENBd0tTQS9JRTFoZEdndVlXSnpLSEJ5YjJkeVpYTnpLU0E2SUhCeWIyZHlaWE56SUMwZ01UdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWkdsemRHRnVZMlVnUENCd2NtVjJVSEp2WjNKbGMzTkVhWE4wWVc1alpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJ5WlhaUWNtOW5jbVZ6YzBScGMzUmhibU5sSUQwZ1pHbHpkR0Z1WTJVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyeHZjMlZ6ZEZCeWIyZHlaWE56SUQwZ1kyeGhiWEJRY205bmNtVnpjeWh3Y205bmNtVnpjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJ4dmMyVnpkRWx1WkdWNElEMGdhanRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lHb3JLenRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2doWm05MWJtUkJZM1JwZG1WR2NtRm5iV1Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJR052Ym5OMElIUmhjbWRsZENBOUlHMWhjbXRsY25NdWRHRnlaMlYwYzF0cFhUdGNibHh1SUNBZ0lDQWdJQ0FnSUdsbUlDaDBkMlZsYmtoaGMxTjBZWEowWldRZ2ZId2dJWFJoY21kbGRDNXpaWFFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNobWNtRm5iV1Z1ZEhOYlkyeHZjMlZ6ZEVsdVpHVjRYUzUwZDJWbGJpNXdjbTluY21WemN5QWhQVDBnWTJ4dmMyVnpkRkJ5YjJkeVpYTnpLU0JtY21GbmJXVnVkSE5iWTJ4dmMyVnpkRWx1WkdWNFhTNTBkMlZsYmk1elpXVnJLR05zYjNObGMzUlFjbTluY21WemN5azdYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNnaGRIZGxaVzVJWVhOVGRHRnlkR1ZrSUNZbUlIUmhjbWRsZEM1elpYUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwWVhKblpYUXVaMlYwS0NrZ0lUMDlJRzFoY210bGNuTXVhVzVwZEdsaGJGWmhiSFZsYzF0cFhTa2dkR0Z5WjJWMExuTmxkQ2h0WVhKclpYSnpMbWx1YVhScFlXeFdZV3gxWlhOYmFWMHBPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmU2s3WEc1OVhHNGlYWDA9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wYWNrYWdlcy9wb3Btb3Rpb24tdGltZWxpbmUvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9