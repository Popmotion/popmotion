/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _popmotion = __webpack_require__(1);
	
	var popmotion = _interopRequireWildcard(_popmotion);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	window.popmotion = popmotion;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7SUFBWTs7OztBQUNaLE9BQU8sU0FBUCxHQUFtQixTQUFuQiIsImZpbGUiOiJnbG9iYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcG9wbW90aW9uIGZyb20gJy4vcG9wbW90aW9uJztcbndpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG4iXX0=

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.pointer = exports.composite = exports.crossFade = exports.delay = exports.chain = exports.parallel = exports.physics = exports.track = exports.tween = exports.Action = exports.filter = exports.calc = exports.easing = exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
	var _framesync = __webpack_require__(13);
	
	Object.defineProperty(exports, 'onFrameStart', {
	  enumerable: true,
	  get: function () {
	    return _framesync.onFrameStart;
	  }
	});
	Object.defineProperty(exports, 'onFrameUpdate', {
	  enumerable: true,
	  get: function () {
	    return _framesync.onFrameUpdate;
	  }
	});
	Object.defineProperty(exports, 'onFrameRender', {
	  enumerable: true,
	  get: function () {
	    return _framesync.onFrameRender;
	  }
	});
	Object.defineProperty(exports, 'onFrameEnd', {
	  enumerable: true,
	  get: function () {
	    return _framesync.onFrameEnd;
	  }
	});
	Object.defineProperty(exports, 'cancelOnFrameStart', {
	  enumerable: true,
	  get: function () {
	    return _framesync.cancelOnFrameStart;
	  }
	});
	Object.defineProperty(exports, 'cancelOnFrameUpdate', {
	  enumerable: true,
	  get: function () {
	    return _framesync.cancelOnFrameUpdate;
	  }
	});
	Object.defineProperty(exports, 'cancelOnFrameRender', {
	  enumerable: true,
	  get: function () {
	    return _framesync.cancelOnFrameRender;
	  }
	});
	Object.defineProperty(exports, 'cancelOnFrameEnd', {
	  enumerable: true,
	  get: function () {
	    return _framesync.cancelOnFrameEnd;
	  }
	});
	Object.defineProperty(exports, 'timeSinceLastFrame', {
	  enumerable: true,
	  get: function () {
	    return _framesync.timeSinceLastFrame;
	  }
	});
	Object.defineProperty(exports, 'currentFrameTimestamp', {
	  enumerable: true,
	  get: function () {
	    return _framesync.currentFrameTimestamp;
	  }
	});
	
	var _easing2 = __webpack_require__(14);
	
	var _easing = _interopRequireWildcard(_easing2);
	
	var _calc2 = __webpack_require__(2);
	
	var _calc = _interopRequireWildcard(_calc2);
	
	var _filters = __webpack_require__(3);
	
	var _filter = _interopRequireWildcard(_filters);
	
	var _actions = __webpack_require__(15);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _tween2 = __webpack_require__(4);
	
	var _tween3 = _interopRequireDefault(_tween2);
	
	var _track2 = __webpack_require__(5);
	
	var _track3 = _interopRequireDefault(_track2);
	
	var _physics2 = __webpack_require__(6);
	
	var _physics3 = _interopRequireDefault(_physics2);
	
	var _parallel2 = __webpack_require__(7);
	
	var _parallel3 = _interopRequireDefault(_parallel2);
	
	var _chain2 = __webpack_require__(8);
	
	var _chain3 = _interopRequireDefault(_chain2);
	
	var _delay2 = __webpack_require__(9);
	
	var _delay3 = _interopRequireDefault(_delay2);
	
	var _crossFade2 = __webpack_require__(10);
	
	var _crossFade3 = _interopRequireDefault(_crossFade2);
	
	var _composite2 = __webpack_require__(11);
	
	var _composite3 = _interopRequireDefault(_composite2);
	
	var _pointer2 = __webpack_require__(12);
	
	var _pointer3 = _interopRequireDefault(_pointer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.easing = _easing;
	
	// Helpers
	
	exports.calc = _calc;
	exports.filter = _filter;
	
	// Actions
	
	exports.Action = _actions2.default;
	exports.tween = _tween3.default;
	exports.track = _track3.default;
	exports.physics = _physics3.default;
	exports.parallel = _parallel3.default;
	exports.chain = _chain3.default;
	exports.delay = _delay3.default;
	exports.crossFade = _crossFade3.default;
	exports.composite = _composite3.default;
	
	// Input
	
	exports.pointer = _pointer3.default;
	
	// export { color } from './value/types';
	
	//export cssRender from './render/css';
	
	// export timeline from './inc/timeline';
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzQkFFRTs7Ozs7O3NCQUNBOzs7Ozs7c0JBQ0E7Ozs7OztzQkFDQTs7Ozs7O3NCQUNBOzs7Ozs7c0JBQ0E7Ozs7OztzQkFDQTs7Ozs7O3NCQUNBOzs7Ozs7c0JBQ0E7Ozs7OztzQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBSVU7Ozs7UUFDQTtRQUNBOzs7O1FBR0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7O1FBR0EiLCJmaWxlIjoicG9wbW90aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZyYW1lc3luYyBzY2hlZHVsZXJzXG5leHBvcnQge1xuICBvbkZyYW1lU3RhcnQsXG4gIG9uRnJhbWVVcGRhdGUsXG4gIG9uRnJhbWVSZW5kZXIsXG4gIG9uRnJhbWVFbmQsXG4gIGNhbmNlbE9uRnJhbWVTdGFydCxcbiAgY2FuY2VsT25GcmFtZVVwZGF0ZSxcbiAgY2FuY2VsT25GcmFtZVJlbmRlcixcbiAgY2FuY2VsT25GcmFtZUVuZCxcbiAgdGltZVNpbmNlTGFzdEZyYW1lLFxuICBjdXJyZW50RnJhbWVUaW1lc3RhbXBcbn0gZnJvbSAnLi9mcmFtZXN5bmMnO1xuXG4vLyBIZWxwZXJzXG5leHBvcnQgKiBhcyBlYXNpbmcgZnJvbSAnLi9lYXNpbmcnO1xuZXhwb3J0ICogYXMgY2FsYyBmcm9tICcuL2luYy9jYWxjJztcbmV4cG9ydCAqIGFzIGZpbHRlciBmcm9tICcuL2luYy9maWx0ZXJzJztcblxuLy8gQWN0aW9uc1xuZXhwb3J0IEFjdGlvbiBmcm9tICcuL2FjdGlvbnMnO1xuZXhwb3J0IHR3ZWVuIGZyb20gJy4vYWN0aW9ucy90d2Vlbic7XG5leHBvcnQgdHJhY2sgZnJvbSAnLi9hY3Rpb25zL3RyYWNrJztcbmV4cG9ydCBwaHlzaWNzIGZyb20gJy4vYWN0aW9ucy9waHlzaWNzJztcbmV4cG9ydCBwYXJhbGxlbCBmcm9tICcuL2FjdGlvbnMvcGFyYWxsZWwnO1xuZXhwb3J0IGNoYWluIGZyb20gJy4vYWN0aW9ucy9jaGFpbic7XG5leHBvcnQgZGVsYXkgZnJvbSAnLi9hY3Rpb25zL2RlbGF5JztcbmV4cG9ydCBjcm9zc0ZhZGUgZnJvbSAnLi9hY3Rpb25zL2Nyb3NzLWZhZGUnO1xuZXhwb3J0IGNvbXBvc2l0ZSBmcm9tICcuL2FjdGlvbnMvY29tcG9zaXRlJztcblxuLy8gSW5wdXRcbmV4cG9ydCBwb2ludGVyIGZyb20gJy4vaW5wdXQvcG9pbnRlcic7XG5cbi8vIGV4cG9ydCB7IGNvbG9yIH0gZnJvbSAnLi92YWx1ZS90eXBlcyc7XG5cblxuLy9leHBvcnQgY3NzUmVuZGVyIGZyb20gJy4vcmVuZGVyL2Nzcyc7XG5cblxuLy8gZXhwb3J0IHRpbWVsaW5lIGZyb20gJy4vaW5jL3RpbWVsaW5lJztcbiJdfQ==

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.relativeValue = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.getProgressFromValue = exports.getValueFromProgress = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(16);
	
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
	  are at 0,0
	  
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
	  Value in range from progress
	  
	  Given a lower limit and an upper limit, we return the value within
	  that range as expressed by progress (a number from 0-1)
	  
	  @param [number]: Lower limit of range
	  @param [number]: Upper limit of range
	  @param [number]: The progress between lower and upper limits expressed 0-1
	  @return [number]: Value as calculated from progress within range (not limited within range)
	*/
	var getValueFromProgress = exports.getValueFromProgress = function (from, to, progress) {
	  return -progress * from + progress * to + from;
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
	var getProgressFromValue = exports.getProgressFromValue = function (from, to, value) {
	  return (value - from) / (to - from);
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
	
	  var _findValueAndUnit = (0, _utils.findValueAndUnit)(equation[1]);
	
	  var unit = _findValueAndUnit.unit;
	  var value = _findValueAndUnit.value;
	
	
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
	  
	  @param [int]: Number of steps
	  @param [number]: Current value
	  @return [number]: Stepped value
	*/
	var stepProgress = exports.stepProgress = function (steps, progress) {
	  var segment = 1 / (steps - 1);
	  var target = 1 - 1 / steps;
	  var progressOfTarget = Math.min(progress / target, 1);
	
	  return Math.floor(progressOfTarget / segment) * segment;
	};
	//# sourceMappingURL=data:application/json;base64,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QyxDQUx3QztDQUFyQiIsImZpbGUiOiJjYWxjLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGhhc1Byb3BlcnR5LFxuICBpc051bSxcbiAgZmluZFZhbHVlQW5kVW5pdCxcbiAgdG9EZWNpbWFsXG59IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBaRVJPX1BPSU5UID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB6OiAwXG59O1xuXG5jb25zdCBkaXN0YW5jZTFEID0gKGEsIGIpID0+IE1hdGguYWJzKGEgLSBiKTtcblxuLypcbiAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgXG4gIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICBhcmUgYXQgMCwwXG4gIFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgYW5nbGUgPSAoYSwgYiA9IFpFUk9fUE9JTlQpID0+IHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xuXG4vKlxuICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgZGVncmVlc1RvUmFkaWFucyA9IChkZWdyZWVzKSA9PiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcblxuLypcbiAgRGlsYXRlXG4gIFxuICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gIFxuICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgXG4gIGEgLS0tLS0tLS0tIGJcbiAgXG4gIHRvXG4gIFxuICBhIC0tLS0gYlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG5leHBvcnQgY29uc3QgZGlsYXRlID0gKGEsIGIsIGRpbGF0aW9uKSA9PiBhICsgKChiIC0gYSkgKiBkaWxhdGlvbik7XG5cbi8qXG4gIERpc3RhbmNlXG4gIFxuICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbmV4cG9ydCBjb25zdCBkaXN0YW5jZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4ge1xuICAvLyAxRCBkaW1lbnNpb25zXG4gIGlmIChpc051bShhKSkge1xuICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgY29uc3QgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgY29uc3QgekRlbHRhID0gKGlzTnVtKGEueikpID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgcmV0dXJuIE1hdGguc3FydCgoeERlbHRhICoqIDIpICsgKHlEZWx0YSAqKiAyKSArICh6RGVsdGEgKiogMikpO1xuICB9XG59O1xuXG4vKlxuICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSAoZnJvbSwgdG8sIHByb2dyZXNzKSA9PiAoLSBwcm9ncmVzcyAqIGZyb20pICsgKHByb2dyZXNzICogdG8pICsgZnJvbTtcblxuLypcbiAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xuZXhwb3J0IGNvbnN0IGdldFByb2dyZXNzRnJvbVZhbHVlID0gKGZyb20sIHRvLCB2YWx1ZSkgPT4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcblxuLypcbiAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xuZXhwb3J0IGNvbnN0IHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpID0+IHtcbiAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICByZXR1cm4ge1xuICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICB9O1xufTtcblxuLypcbiAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xuZXhwb3J0IGNvbnN0IHJhZGlhbnNUb0RlZ3JlZXMgPSAocmFkaWFucykgPT4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG5cbi8qXG4gIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICBcbiAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gIEByZXR1cm4gW251bWJlcl06IE5ldyB2YWx1ZVxuKi9cbmV4cG9ydCBjb25zdCByZWxhdGl2ZVZhbHVlID0gKGN1cnJlbnQsIHJlbGF0aXZlKSA9PiB7XG4gIGxldCBuZXdWYWx1ZSA9IGN1cnJlbnQ7XG4gIGNvbnN0IGVxdWF0aW9uID0gcmVsYXRpdmUuc3BsaXQoJz0nKTtcbiAgY29uc3Qgb3BlcmF0b3IgPSBlcXVhdGlvblswXTtcbiAgbGV0IHsgdW5pdCwgdmFsdWUgfSA9IGZpbmRWYWx1ZUFuZFVuaXQoZXF1YXRpb25bMV0pO1xuXG4gIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgc3dpdGNoIChvcGVyYXRvcikge1xuICBjYXNlICcrJzpcbiAgICBuZXdWYWx1ZSArPSB2YWx1ZTtcbiAgICBicmVhaztcbiAgY2FzZSAnLSc6XG4gICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgYnJlYWs7XG4gIGNhc2UgJyonOlxuICAgIG5ld1ZhbHVlICo9IHZhbHVlO1xuICAgIGJyZWFrO1xuICBjYXNlICcvJzpcbiAgICBuZXdWYWx1ZSAvPSB2YWx1ZTtcbiAgICBicmVhaztcbiAgfVxuICBcbiAgaWYgKHVuaXQpIHtcbiAgICBuZXdWYWx1ZSArPSB1bml0O1xuICB9XG5cbiAgcmV0dXJuIG5ld1ZhbHVlO1xufTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbmV4cG9ydCBjb25zdCBzbW9vdGggPSAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nID0gMCkgPT4gdG9EZWNpbWFsKG9sZFZhbHVlICsgKGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpKTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlckZyYW1lID0gKHhwcywgZnJhbWVEdXJhdGlvbikgPT4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHN0ZXBQcm9ncmVzcyA9IChzdGVwcywgcHJvZ3Jlc3MpID0+IHtcbiAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgY29uc3QgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpO1xuICBjb25zdCBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuIl19

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.steps = exports.clamp = exports.clampOver = exports.clampUnder = exports.interpolate = exports.flow = exports.appendUnit = undefined;
	
	var _calc = __webpack_require__(2);
	
	/**
	 * Append Unit
	 * Creates a function that will append the unit to a given value
	 * appendUnit('px')(20) -> '20px'
	 * @param  {string} unit)
	 * @return {number}
	 */
	var appendUnit = exports.appendUnit = function (unit) {
	  return function (v) {
	    return '' + v + unit;
	  };
	};
	
	/**
	 * Flow
	 * Compose other transformers to run linearily
	 * flow(min(20), max(40))
	 * @param  {...functions} transformers
	 * @return {function}
	 */
	var flow = exports.flow = function () {
	  for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) {
	    transformers[_key] = arguments[_key];
	  }
	
	  var numTransformers = transformers.length;
	  var i = 0;
	
	  return function (v) {
	    for (i = 0; i < numTransformers; i++) {
	      v = transformers[i](v);
	    }
	
	    return v;
	  };
	};
	
	var interpolate = exports.interpolate = function (input, output, rangeEasing) {
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
	
	    var i = 0;
	
	    // Find index of range start
	    for (; i < rangeLength; i++) {
	      if (input[i] > v || i === finalIndex) {
	        break;
	      }
	    }
	
	    var progressInRange = (0, _calc.getProgressFromValue)(input[i], input[i + 1], v);
	    var easedProgress = rangeEasing ? rangeEasing[i](progressInRange) : progressInRange;
	    return (0, _calc.getValueFromProgress)(output[i], output[i + 1], easedProgress);
	  };
	};
	
	/**
	 * Clamp value between
	 * Creates a function that will restrict a given value between `min` and `max`
	 * @param  {number} min
	 * @param  {number} max
	 * @return {number}
	 */
	var clampUnder = exports.clampUnder = function (max) {
	  return function (v) {
	    return Math.min(v, max);
	  };
	};
	var clampOver = exports.clampOver = function (min) {
	  return function (v) {
	    return Math.max(v, min);
	  };
	};
	var clamp = exports.clamp = function (min, max) {
	  return flow(clampOver(min), clampUnder(max));
	};
	
	var steps = exports.steps = function (steps, min, max) {
	  return function (v) {
	    var progress = (0, _calc.getProgressFromValue)(min, max, v);
	    return (0, _calc.stepProgress)(steps, progress);
	  };
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvZmlsdGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7QUFTTyxJQUFNLGtDQUFhLFVBQUMsSUFBRDtTQUFVLFVBQUMsQ0FBRDtnQkFBVSxJQUFJO0dBQWQ7Q0FBVjs7Ozs7Ozs7O0FBU25CLElBQU0sc0JBQU8sWUFBcUI7b0NBQWpCOztHQUFpQjs7QUFDdkMsTUFBTSxrQkFBa0IsYUFBYSxNQUFiLENBRGU7QUFFdkMsTUFBSSxJQUFJLENBQUosQ0FGbUM7O0FBSXZDLFNBQU8sVUFBQyxDQUFELEVBQU87QUFDWixTQUFLLElBQUksQ0FBSixFQUFPLElBQUksZUFBSixFQUFxQixHQUFqQyxFQUFzQztBQUNwQyxVQUFJLGFBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKLENBRG9DO0tBQXRDOztBQUlBLFdBQU8sQ0FBUCxDQUxZO0dBQVAsQ0FKZ0M7Q0FBckI7O0FBYWIsSUFBTSxvQ0FBYyxVQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLFdBQWhCLEVBQWdDO0FBQ3pELE1BQU0sY0FBYyxNQUFNLE1BQU4sQ0FEcUM7QUFFekQsTUFBTSxhQUFhLGNBQWMsQ0FBZCxDQUZzQzs7QUFJekQsU0FBTyxVQUFDLENBQUQsRUFBTzs7QUFFWixRQUFJLEtBQUssTUFBTSxDQUFOLENBQUwsRUFBZTtBQUNqQixhQUFPLE9BQU8sQ0FBUCxDQUFQLENBRGlCO0tBQW5COzs7QUFGWSxRQU9SLEtBQUssTUFBTSxVQUFOLENBQUwsRUFBd0I7QUFDMUIsYUFBTyxPQUFPLFVBQVAsQ0FBUCxDQUQwQjtLQUE1Qjs7QUFJQSxRQUFJLElBQUksQ0FBSjs7O0FBWFEsV0FjTCxJQUFJLFdBQUosRUFBaUIsR0FBeEIsRUFBNkI7QUFDM0IsVUFBSSxNQUFNLENBQU4sSUFBVyxDQUFYLElBQWdCLE1BQU0sVUFBTixFQUFrQjtBQUNwQyxjQURvQztPQUF0QztLQURGOztBQU1BLFFBQU0sa0JBQWtCLGdDQUFxQixNQUFNLENBQU4sQ0FBckIsRUFBK0IsTUFBTSxJQUFJLENBQUosQ0FBckMsRUFBNkMsQ0FBN0MsQ0FBbEIsQ0FwQk07QUFxQlosUUFBTSxnQkFBZ0IsY0FBZ0IsWUFBWSxDQUFaLEVBQWUsZUFBZixDQUFoQixHQUFrRCxlQUFsRCxDQXJCVjtBQXNCWixXQUFPLGdDQUFxQixPQUFPLENBQVAsQ0FBckIsRUFBZ0MsT0FBTyxJQUFJLENBQUosQ0FBdkMsRUFBK0MsYUFBL0MsQ0FBUCxDQXRCWTtHQUFQLENBSmtEO0NBQWhDOzs7Ozs7Ozs7QUFxQ3BCLElBQU0sa0NBQWEsVUFBQyxHQUFEO1NBQVMsVUFBQyxDQUFEO1dBQU8sS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLEdBQVo7R0FBUDtDQUFUO0FBQ25CLElBQU0sZ0NBQVksVUFBQyxHQUFEO1NBQVMsVUFBQyxDQUFEO1dBQU8sS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLEdBQVo7R0FBUDtDQUFUO0FBQ2xCLElBQU0sd0JBQVEsVUFBQyxHQUFELEVBQU0sR0FBTjtTQUFjLEtBQUssVUFBVSxHQUFWLENBQUwsRUFBcUIsV0FBVyxHQUFYLENBQXJCO0NBQWQ7O0FBRWQsSUFBTSx3QkFBUSxVQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWEsR0FBYjtTQUFxQixVQUFDLENBQUQsRUFBTztBQUMvQyxRQUFNLFdBQVcsZ0NBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLENBQS9CLENBQVgsQ0FEeUM7QUFFL0MsV0FBTyx3QkFBYSxLQUFiLEVBQW9CLFFBQXBCLENBQVAsQ0FGK0M7R0FBUDtDQUFyQiIsImZpbGUiOiJmaWx0ZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcywgc3RlcFByb2dyZXNzIH0gZnJvbSAnLi9jYWxjJztcblxuLyoqXG4gKiBBcHBlbmQgVW5pdFxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBhcHBlbmQgdGhlIHVuaXQgdG8gYSBnaXZlbiB2YWx1ZVxuICogYXBwZW5kVW5pdCgncHgnKSgyMCkgLT4gJzIwcHgnXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVuaXQpXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBhcHBlbmRVbml0ID0gKHVuaXQpID0+ICh2KSA9PiBgJHt2fSR7dW5pdH1gO1xuXG4vKipcbiAqIEZsb3dcbiAqIENvbXBvc2Ugb3RoZXIgdHJhbnNmb3JtZXJzIHRvIHJ1biBsaW5lYXJpbHlcbiAqIGZsb3cobWluKDIwKSwgbWF4KDQwKSlcbiAqIEBwYXJhbSAgey4uLmZ1bmN0aW9uc30gdHJhbnNmb3JtZXJzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGZsb3cgPSAoLi4udHJhbnNmb3JtZXJzKSA9PiB7XG4gIGNvbnN0IG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICByZXR1cm4gKHYpID0+IHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0odik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgaW50ZXJwb2xhdGUgPSAoaW5wdXQsIG91dHB1dCwgcmFuZ2VFYXNpbmcpID0+IHtcbiAgY29uc3QgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIGNvbnN0IGZpbmFsSW5kZXggPSByYW5nZUxlbmd0aCAtIDE7XG5cbiAgcmV0dXJuICh2KSA9PiB7XG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtaW5pbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2IDw9IGlucHV0WzBdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0WzBdO1xuICAgIH1cblxuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA+PSBpbnB1dFtmaW5hbEluZGV4XSkge1xuICAgICAgcmV0dXJuIG91dHB1dFtmaW5hbEluZGV4XTtcbiAgICB9XG5cbiAgICBsZXQgaSA9IDA7XG5cbiAgICAvLyBGaW5kIGluZGV4IG9mIHJhbmdlIHN0YXJ0XG4gICAgZm9yICg7IGkgPCByYW5nZUxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5wdXRbaV0gPiB2IHx8IGkgPT09IGZpbmFsSW5kZXgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJvZ3Jlc3NJblJhbmdlID0gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoaW5wdXRbaV0sIGlucHV0W2kgKyAxXSwgdik7XG4gICAgY29uc3QgZWFzZWRQcm9ncmVzcyA9IChyYW5nZUVhc2luZykgPyByYW5nZUVhc2luZ1tpXShwcm9ncmVzc0luUmFuZ2UpIDogcHJvZ3Jlc3NJblJhbmdlO1xuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhvdXRwdXRbaV0sIG91dHB1dFtpICsgMV0sIGVhc2VkUHJvZ3Jlc3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBDbGFtcCB2YWx1ZSBiZXR3ZWVuXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlc3RyaWN0IGEgZ2l2ZW4gdmFsdWUgYmV0d2VlbiBgbWluYCBhbmQgYG1heGBcbiAqIEBwYXJhbSAge251bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgY2xhbXBVbmRlciA9IChtYXgpID0+ICh2KSA9PiBNYXRoLm1pbih2LCBtYXgpO1xuZXhwb3J0IGNvbnN0IGNsYW1wT3ZlciA9IChtaW4pID0+ICh2KSA9PiBNYXRoLm1heCh2LCBtaW4pO1xuZXhwb3J0IGNvbnN0IGNsYW1wID0gKG1pbiwgbWF4KSA9PiBmbG93KGNsYW1wT3ZlcihtaW4pLCBjbGFtcFVuZGVyKG1heCkpO1xuXG5leHBvcnQgY29uc3Qgc3RlcHMgPSAoc3RlcHMsIG1pbiwgbWF4KSA9PiAodikgPT4ge1xuICBjb25zdCBwcm9ncmVzcyA9IGdldFByb2dyZXNzRnJvbVZhbHVlKG1pbiwgbWF4LCB2KTtcbiAgcmV0dXJuIHN0ZXBQcm9ncmVzcyhzdGVwcywgcHJvZ3Jlc3MpO1xufTtcblxuIl19

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(15);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(13);
	
	var _filters = __webpack_require__(3);
	
	var _calc = __webpack_require__(2);
	
	var _easing = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var clampProgress = (0, _filters.clamp)(0, 1);
	
	var Tween = function (_Action) {
	  _inherits(Tween, _Action);
	
	  function Tween() {
	    _classCallCheck(this, Tween);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Tween.prototype.onStart = function onStart() {
	    var _this2 = this;
	
	    var _props = this.props;
	    var duration = _props.duration;
	    var ease = _props.ease;
	    var from = _props.from;
	    var to = _props.to;
	
	
	    this.elapsed = 0;
	
	    this.onUpdate = (0, _filters.flow)(function () {
	      return _this2.elapsed += (0, _framesync.timeSinceLastFrame)();
	    }, function (elapsed) {
	      return (0, _calc.getProgressFromValue)(0, duration, elapsed);
	    }, clampProgress, ease, function (easedProgress) {
	      return (0, _calc.getValueFromProgress)(from, to, easedProgress);
	    });
	  };
	
	  Tween.prototype.isActionComplete = function isActionComplete() {
	    return this.elapsed >= this.props.duration;
	  };
	
	  return Tween;
	}(_2.default);
	
	Tween.defaultProps = {
	  duration: 300,
	  ease: _easing.easeOut,
	  from: 0,
	  to: 1
	};
	
	exports.default = function (props) {
	  return new Tween(props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxnQkFBZ0Isb0JBQU0sQ0FBTixFQUFTLENBQVQsQ0FBaEI7O0lBRUE7Ozs7Ozs7OztrQkFRSiw2QkFBVTs7O2lCQUM2QixLQUFLLEtBQUwsQ0FEN0I7UUFDQSwyQkFEQTtRQUNVLG1CQURWO1FBQ2dCLG1CQURoQjtRQUNzQixlQUR0Qjs7O0FBR1IsU0FBSyxPQUFMLEdBQWUsQ0FBZixDQUhROztBQUtSLFNBQUssUUFBTCxHQUFnQixtQkFDZDthQUFNLE9BQUssT0FBTCxJQUFnQixvQ0FBaEI7S0FBTixFQUNBLFVBQUMsT0FBRDthQUFhLGdDQUFxQixDQUFyQixFQUF3QixRQUF4QixFQUFrQyxPQUFsQztLQUFiLEVBQ0EsYUFIYyxFQUlkLElBSmMsRUFLZCxVQUFDLGFBQUQ7YUFBbUIsZ0NBQXFCLElBQXJCLEVBQTJCLEVBQTNCLEVBQStCLGFBQS9CO0tBQW5CLENBTEYsQ0FMUTs7O0FBUk4sa0JBc0JKLCtDQUFtQjtBQUNqQixXQUFRLEtBQUssT0FBTCxJQUFnQixLQUFLLEtBQUwsQ0FBVyxRQUFYLENBRFA7OztTQXRCZjs7O01BQ0csZUFBZTtBQUNwQixZQUFVLEdBQVY7QUFDQSx1QkFGb0I7QUFHcEIsUUFBTSxDQUFOO0FBQ0EsTUFBSSxDQUFKOzs7a0JBc0JXLFVBQUMsS0FBRDtTQUFXLElBQUksS0FBSixDQUFVLEtBQVY7Q0FBWCIsImZpbGUiOiJ0d2Vlbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IHRpbWVTaW5jZUxhc3RGcmFtZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBmbG93LCBjbGFtcCB9IGZyb20gJy4uL2luYy9maWx0ZXJzJztcbmltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGVhc2VPdXQgfSBmcm9tICcuLi9lYXNpbmcnO1xuXG5jb25zdCBjbGFtcFByb2dyZXNzID0gY2xhbXAoMCwgMSk7XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIGVhc2U6IGVhc2VPdXQsXG4gICAgZnJvbTogMCxcbiAgICB0bzogMVxuICB9O1xuXG4gIG9uU3RhcnQoKSB7XG4gICAgY29uc3QgeyBkdXJhdGlvbiwgZWFzZSwgZnJvbSwgdG8gfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLmVsYXBzZWQgPSAwO1xuXG4gICAgdGhpcy5vblVwZGF0ZSA9IGZsb3coXG4gICAgICAoKSA9PiB0aGlzLmVsYXBzZWQgKz0gdGltZVNpbmNlTGFzdEZyYW1lKCksXG4gICAgICAoZWxhcHNlZCkgPT4gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoMCwgZHVyYXRpb24sIGVsYXBzZWQpLFxuICAgICAgY2xhbXBQcm9ncmVzcyxcbiAgICAgIGVhc2UsXG4gICAgICAoZWFzZWRQcm9ncmVzcykgPT4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZnJvbSwgdG8sIGVhc2VkUHJvZ3Jlc3MpXG4gICAgKTtcbiAgfVxuXG4gIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuICh0aGlzLmVsYXBzZWQgPj0gdGhpcy5wcm9wcy5kdXJhdGlvbik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgVHdlZW4ocHJvcHMpO1xuIl19

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(15);
	
	var _2 = _interopRequireDefault(_);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Track = function (_Action) {
	  _inherits(Track, _Action);
	
	  function Track() {
	    _classCallCheck(this, Track);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Track.prototype.onStart = function onStart() {
	    var input = this.props.input;
	
	    this.inputOrigin = input.get();
	
	    input.setProps({
	      _onUpdate: this.update
	    });
	  };
	
	  Track.prototype.onUpdate = function onUpdate() {
	    var _props = this.props;
	    var input = _props.input;
	    var from = _props.from;
	
	    var offset = input.get() - this.inputOrigin;
	    return from + offset;
	  };
	
	  return Track;
	}(_2.default);
	
	Track.defaultProps = {
	  from: 0,
	  passive: true
	};
	
	exports.default = function (props) {
	  return new Track(props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU07Ozs7Ozs7OztrQkFNSiw2QkFBVTtRQUNBLFFBQVUsS0FBSyxLQUFMLENBQVYsTUFEQTs7QUFFUixTQUFLLFdBQUwsR0FBbUIsTUFBTSxHQUFOLEVBQW5CLENBRlE7O0FBSVIsVUFBTSxRQUFOLENBQWU7QUFDYixpQkFBVyxLQUFLLE1BQUw7S0FEYixFQUpROzs7QUFOTixrQkFlSiwrQkFBVztpQkFDZSxLQUFLLEtBQUwsQ0FEZjtRQUNELHFCQURDO1FBQ00sbUJBRE47O0FBRVQsUUFBTSxTQUFTLE1BQU0sR0FBTixLQUFjLEtBQUssV0FBTCxDQUZwQjtBQUdULFdBQU8sT0FBTyxNQUFQLENBSEU7OztTQWZQOzs7TUFDRyxlQUFlO0FBQ3BCLFFBQU0sQ0FBTjtBQUNBLFdBQVMsSUFBVDs7O2tCQW1CVyxVQUFDLEtBQUQ7U0FBVyxJQUFJLEtBQUosQ0FBVSxLQUFWO0NBQVgiLCJmaWxlIjoidHJhY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5cbmNsYXNzIFRyYWNrIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBmcm9tOiAwLFxuICAgIHBhc3NpdmU6IHRydWVcbiAgfTtcblxuICBvblN0YXJ0KCkge1xuICAgIGNvbnN0IHsgaW5wdXQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5pbnB1dE9yaWdpbiA9IGlucHV0LmdldCgpO1xuXG4gICAgaW5wdXQuc2V0UHJvcHMoe1xuICAgICAgX29uVXBkYXRlOiB0aGlzLnVwZGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgb25VcGRhdGUoKSB7XG4gICAgY29uc3QgeyBpbnB1dCwgZnJvbSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBvZmZzZXQgPSBpbnB1dC5nZXQoKSAtIHRoaXMuaW5wdXRPcmlnaW47XG4gICAgcmV0dXJuIGZyb20gKyBvZmZzZXQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgVHJhY2socHJvcHMpO1xuIl19

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(15);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(13);
	
	var _calc = __webpack_require__(2);
	
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
	
	  Physics.prototype.onUpdate = function onUpdate() {
	    var _props = this.props;
	    var acceleration = _props.acceleration;
	    var autoStopSpeed = _props.autoStopSpeed;
	    var friction = _props.friction;
	    var velocity = _props.velocity;
	    var spring = _props.spring;
	    var to = _props.to;
	
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
	
	    return this.current;
	  };
	
	  Physics.prototype.isActionComplete = function isActionComplete() {
	    return !this.velocity || Math.abs(this.velocity) <= this.props.autoStopSpeed;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BoeXNpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTTs7Ozs7Ozs7O29CQVFKLCtCQUFXO2lCQUMrRCxLQUFLLEtBQUwsQ0FEL0Q7UUFDRCxtQ0FEQztRQUNhLHFDQURiO1FBQzRCLDJCQUQ1QjtRQUNzQywyQkFEdEM7UUFDZ0QsdUJBRGhEO1FBQ3dELGVBRHhEOztBQUVULFFBQUksY0FBYyxRQUFkLENBRks7QUFHVCxRQUFNLFVBQVUsb0NBQVY7OztBQUhHLFFBTUwsWUFBSixFQUFrQjtBQUNoQixxQkFBZSx5QkFBYyxZQUFkLEVBQTRCLE9BQTVCLENBQWYsQ0FEZ0I7S0FBbEI7OztBQU5TLFFBV0wsUUFBSixFQUFjO0FBQ1osOEJBQWdCLElBQUksUUFBSixFQUFrQixVQUFVLEdBQVYsQ0FBbEMsQ0FEWTtLQUFkOztBQUlBLFFBQUksVUFBVSxPQUFPLFNBQVAsRUFBa0I7QUFDOUIsVUFBTSxtQkFBbUIsS0FBSyxLQUFLLE9BQUwsQ0FEQTtBQUU5QixxQkFBZSxtQkFBbUIseUJBQWMsTUFBZCxFQUFzQixPQUF0QixDQUFuQixDQUZlO0tBQWhDOzs7QUFmUyxRQXFCVCxDQUFLLE9BQUwsSUFBZ0IseUJBQWMsV0FBZCxFQUEyQixPQUEzQixDQUFoQixDQXJCUztBQXNCVCxTQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXNCLFdBQXRCLENBdEJTOztBQXdCVCxXQUFPLEtBQUssT0FBTCxDQXhCRTs7O0FBUlAsb0JBbUNKLCtDQUFtQjtBQUNqQixXQUFRLENBQUMsS0FBSyxRQUFMLElBQWlCLEtBQUssR0FBTCxDQUFTLEtBQUssUUFBTCxDQUFULElBQTJCLEtBQUssS0FBTCxDQUFXLGFBQVgsQ0FEcEM7OztTQW5DZjs7O1FBQ0csZUFBZTtBQUNwQixnQkFBYyxDQUFkO0FBQ0EsWUFBVSxDQUFWO0FBQ0EsWUFBVSxDQUFWO0FBQ0EsaUJBQWUsS0FBZjs7O2tCQW1DVyxVQUFDLEtBQUQ7U0FBVyxJQUFJLE9BQUosQ0FBWSxLQUFaO0NBQVgiLCJmaWxlIjoicGh5c2ljcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IHRpbWVTaW5jZUxhc3RGcmFtZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBzcGVlZFBlckZyYW1lIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jbGFzcyBQaHlzaWNzIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhY2NlbGVyYXRpb246IDAsXG4gICAgZnJpY3Rpb246IDAsXG4gICAgdmVsb2NpdHk6IDAsXG4gICAgYXV0b1N0b3BTcGVlZDogMC4wMDFcbiAgfVxuXG4gIG9uVXBkYXRlKCkge1xuICAgIGNvbnN0IHsgYWNjZWxlcmF0aW9uLCBhdXRvU3RvcFNwZWVkLCBmcmljdGlvbiwgdmVsb2NpdHksIHNwcmluZywgdG8gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG5ld1ZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgY29uc3QgZWxhcHNlZCA9IHRpbWVTaW5jZUxhc3RGcmFtZSgpO1xuXG4gICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGFjY2VsZXJhdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKz0gc3BlZWRQZXJGcmFtZShhY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGZyaWN0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGZyaWN0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSAqPSAoMSAtIGZyaWN0aW9uKSAqKiAoZWxhcHNlZCAvIDEwMCk7XG4gICAgfVxuXG4gICAgaWYgKHNwcmluZyAmJiB0byAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBkaXN0YW5jZVRvVGFyZ2V0ID0gdG8gLSB0aGlzLmN1cnJlbnQ7XG4gICAgICBuZXdWZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogc3BlZWRQZXJGcmFtZShzcHJpbmcsIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHZlbG9jaXR5XG4gICAgdGhpcy5jdXJyZW50ICs9IHNwZWVkUGVyRnJhbWUobmV3VmVsb2NpdHksIGVsYXBzZWQpO1xuICAgIHRoaXMucHJvcHMudmVsb2NpdHkgPSBuZXdWZWxvY2l0eTtcblxuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH1cblxuICBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiAoIXRoaXMudmVsb2NpdHkgfHwgTWF0aC5hYnModGhpcy52ZWxvY2l0eSkgPD0gdGhpcy5wcm9wcy5hdXRvU3RvcFNwZWVkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IG5ldyBQaHlzaWNzKHByb3BzKTsiXX0=

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(15);
	
	var _2 = _interopRequireDefault(_);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Parallel = function (_Action) {
	  _inherits(Parallel, _Action);
	
	  function Parallel() {
	    _classCallCheck(this, Parallel);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Parallel.prototype.onStart = function onStart() {
	    var _this2 = this;
	
	    var actions = this.props.actions;
	
	    this.numActiveActions = actions.length;
	
	    actions.forEach(function (action) {
	      action.setProps({
	        _onStop: function () {
	          return _this2.numActiveActions--;
	        }
	      }).start();
	    });
	  };
	
	  Parallel.prototype.onStop = function onStop() {
	    this.props.actions.forEach(function (action) {
	      return action.stop();
	    });
	  };
	
	  Parallel.prototype.addAction = function addAction(action) {
	    var actions = this.props.actions;
	
	
	    if (actions.indexOf(action) === -1) {
	      actions.push(action);
	    }
	  };
	
	  Parallel.prototype.isActionComplete = function isActionComplete() {
	    return this.numActiveActions === 0;
	  };
	
	  return Parallel;
	}(_2.default);
	
	exports.default = function (actions) {
	  return new Parallel({ actions: actions });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BhcmFsbGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU07Ozs7Ozs7OztxQkFDSiw2QkFBVTs7O1FBQ0EsVUFBWSxLQUFLLEtBQUwsQ0FBWixRQURBOztBQUVSLFNBQUssZ0JBQUwsR0FBd0IsUUFBUSxNQUFSLENBRmhCOztBQUlSLFlBQVEsT0FBUixDQUFnQixVQUFDLE1BQUQsRUFBWTtBQUMxQixhQUFPLFFBQVAsQ0FBZ0I7QUFDZCxpQkFBUztpQkFBTSxPQUFLLGdCQUFMO1NBQU47T0FEWCxFQUVHLEtBRkgsR0FEMEI7S0FBWixDQUFoQixDQUpROzs7QUFETixxQkFZSiwyQkFBUztBQUNQLFNBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsT0FBbkIsQ0FBMkIsVUFBQyxNQUFEO2FBQVksT0FBTyxJQUFQO0tBQVosQ0FBM0IsQ0FETzs7O0FBWkwscUJBZ0JKLCtCQUFVLFFBQVE7UUFDUixVQUFZLEtBQUssS0FBTCxDQUFaLFFBRFE7OztBQUdoQixRQUFJLFFBQVEsT0FBUixDQUFnQixNQUFoQixNQUE0QixDQUFDLENBQUQsRUFBSTtBQUNsQyxjQUFRLElBQVIsQ0FBYSxNQUFiLEVBRGtDO0tBQXBDOzs7QUFuQkUscUJBd0JKLCtDQUFtQjtBQUNqQixXQUFRLEtBQUssZ0JBQUwsS0FBMEIsQ0FBMUIsQ0FEUzs7O1NBeEJmOzs7a0JBNkJTLFVBQUMsT0FBRDtTQUFhLElBQUksUUFBSixDQUFhLEVBQUUsZ0JBQUYsRUFBYjtDQUFiIiwiZmlsZSI6InBhcmFsbGVsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuXG5jbGFzcyBQYXJhbGxlbCBleHRlbmRzIEFjdGlvbiB7XG4gIG9uU3RhcnQoKSB7XG4gICAgY29uc3QgeyBhY3Rpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IGFjdGlvbnMubGVuZ3RoO1xuXG4gICAgYWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHtcbiAgICAgIGFjdGlvbi5zZXRQcm9wcyh7XG4gICAgICAgIF9vblN0b3A6ICgpID0+IHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tXG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0pO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IGFjdGlvbi5zdG9wKCkpO1xuICB9XG5cbiAgYWRkQWN0aW9uKGFjdGlvbikge1xuICAgIGNvbnN0IHsgYWN0aW9ucyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChhY3Rpb25zLmluZGV4T2YoYWN0aW9uKSA9PT0gLTEpIHtcbiAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuICh0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChhY3Rpb25zKSA9PiBuZXcgUGFyYWxsZWwoeyBhY3Rpb25zIH0pO1xuIl19

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(15);
	
	var _2 = _interopRequireDefault(_);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Chain = function (_Action) {
	  _inherits(Chain, _Action);
	
	  function Chain(props) {
	    _classCallCheck(this, Chain);
	
	    var _this = _possibleConstructorReturn(this, _Action.call(this, props));
	
	    _this.playNext = _this.playNext.bind(_this);
	    return _this;
	  }
	
	  Chain.prototype.onStart = function onStart() {
	    this.props.i = 0;
	    this.playCurrent();
	  };
	
	  Chain.prototype.playNext = function playNext() {
	    var _props = this.props;
	    var i = _props.i;
	    var order = _props.order;
	
	    if (i < order.length - 1) {
	      this.props.i++;
	      this.playCurrent();
	    }
	  };
	
	  Chain.prototype.playCurrent = function playCurrent() {
	    var _props2 = this.props;
	    var i = _props2.i;
	    var order = _props2.order;
	
	    order[i].onComplete = this.playNext;
	    order[i].start();
	  };
	
	  Chain.prototype.onStop = function onStop() {
	    var _props3 = this.props;
	    var i = _props3.i;
	    var order = _props3.order;
	
	    order[i].stop();
	  };
	
	  return Chain;
	}(_2.default);
	
	exports.default = function (order) {
	  return new Chain({ order: order });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NoYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU07OztBQUNKLFdBREksS0FDSixDQUFZLEtBQVosRUFBbUI7MEJBRGYsT0FDZTs7aURBQ2pCLG1CQUFNLEtBQU4sR0FEaUI7O0FBRWpCLFVBQUssUUFBTCxHQUFnQixNQUFLLFFBQUwsQ0FBYyxJQUFkLE9BQWhCLENBRmlCOztHQUFuQjs7QUFESSxrQkFNSiw2QkFBVTtBQUNSLFNBQUssS0FBTCxDQUFXLENBQVgsR0FBZSxDQUFmLENBRFE7QUFFUixTQUFLLFdBQUwsR0FGUTs7O0FBTk4sa0JBV0osK0JBQVc7aUJBQ1ksS0FBSyxLQUFMLENBRFo7UUFDRCxhQURDO1FBQ0UscUJBREY7O0FBRVQsUUFBSSxJQUFJLE1BQU0sTUFBTixHQUFlLENBQWYsRUFBa0I7QUFDeEIsV0FBSyxLQUFMLENBQVcsQ0FBWCxHQUR3QjtBQUV4QixXQUFLLFdBQUwsR0FGd0I7S0FBMUI7OztBQWJFLGtCQW1CSixxQ0FBYztrQkFDUyxLQUFLLEtBQUwsQ0FEVDtRQUNKLGNBREk7UUFDRCxzQkFEQzs7QUFFWixVQUFNLENBQU4sRUFBUyxVQUFULEdBQXNCLEtBQUssUUFBTCxDQUZWO0FBR1osVUFBTSxDQUFOLEVBQVMsS0FBVCxHQUhZOzs7QUFuQlYsa0JBeUJKLDJCQUFTO2tCQUNjLEtBQUssS0FBTCxDQURkO1FBQ0MsY0FERDtRQUNJLHNCQURKOztBQUVQLFVBQU0sQ0FBTixFQUFTLElBQVQsR0FGTzs7O1NBekJMOzs7a0JBK0JTLFVBQUMsS0FBRDtTQUFXLElBQUksS0FBSixDQUFVLEVBQUUsWUFBRixFQUFWO0NBQVgiLCJmaWxlIjoiY2hhaW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5cbmNsYXNzIENoYWluIGV4dGVuZHMgQWN0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wbGF5TmV4dCA9IHRoaXMucGxheU5leHQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pID0gMDtcbiAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gIH1cblxuICBwbGF5TmV4dCgpIHtcbiAgICBjb25zdCB7IGksIG9yZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpIDwgb3JkZXIubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5wcm9wcy5pKys7XG4gICAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gICAgfVxuICB9XG5cbiAgcGxheUN1cnJlbnQoKSB7XG4gICAgY29uc3QgeyBpLCBvcmRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBvcmRlcltpXS5vbkNvbXBsZXRlID0gdGhpcy5wbGF5TmV4dDtcbiAgICBvcmRlcltpXS5zdGFydCgpO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIGNvbnN0IHsgaSwgb3JkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgb3JkZXJbaV0uc3RvcCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChvcmRlcikgPT4gbmV3IENoYWluKHsgb3JkZXIgfSk7XG4iXX0=

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _tween = __webpack_require__(4);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (duration) {
	  return (0, _tween2.default)({ duration: duration });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2RlbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O2tCQUVlLFVBQUMsUUFBRDtTQUFjLHFCQUFNLEVBQUUsa0JBQUYsRUFBTjtDQUFkIiwiZmlsZSI6ImRlbGF5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0d2VlbiBmcm9tICcuL3R3ZWVuJztcblxuZXhwb3J0IGRlZmF1bHQgKGR1cmF0aW9uKSA9PiB0d2Vlbih7IGR1cmF0aW9uIH0pO1xuIl19

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(15);
	
	var _2 = _interopRequireDefault(_);
	
	var _tween = __webpack_require__(4);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	var _easing = __webpack_require__(14);
	
	var _calc = __webpack_require__(2);
	
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
	    var _props = this.props;
	    var duration = _props.duration;
	    var ease = _props.ease;
	    var fader = _props.fader;
	
	
	    this.fader = fader || (0, _tween2.default)({
	      to: 1,
	      duration: duration,
	      ease: ease
	    }).start();
	  };
	
	  CrossFade.prototype.onUpdate = function onUpdate() {
	    var _props2 = this.props;
	    var from = _props2.from;
	    var to = _props2.to;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNOzs7Ozs7Ozs7c0JBS0osNkJBQVU7aUJBQzBCLEtBQUssS0FBTCxDQUQxQjtRQUNBLDJCQURBO1FBQ1UsbUJBRFY7UUFDZ0IscUJBRGhCOzs7QUFHUixTQUFLLEtBQUwsR0FBYSxTQUFTLHFCQUFNO0FBQzFCLFVBQUksQ0FBSjtBQUNBLHdCQUYwQjtBQUcxQixnQkFIMEI7S0FBTixFQUluQixLQUptQixFQUFULENBSEw7OztBQUxOLHNCQWVKLCtCQUFXO2tCQUNZLEtBQUssS0FBTCxDQURaO1FBQ0Qsb0JBREM7UUFDSyxnQkFETDs7QUFFVCxRQUFNLFVBQVUsS0FBSyxLQUFMLENBQVcsR0FBWCxFQUFWLENBRkc7QUFHVCxRQUFNLGtCQUFrQixLQUFLLEdBQUwsRUFBbEIsQ0FIRztBQUlULFFBQU0sZ0JBQWdCLEdBQUcsR0FBSCxFQUFoQixDQUpHO0FBS1QsV0FBTyxnQ0FBcUIsZUFBckIsRUFBc0MsYUFBdEMsRUFBcUQsT0FBckQsQ0FBUCxDQUxTOzs7U0FmUDs7O1VBQ0csZUFBZTtBQUNwQixzQkFEb0I7OztrQkF1QlQsVUFBQyxLQUFEO1NBQVcsSUFBSSxTQUFKLENBQWMsS0FBZDtDQUFYIiwiZmlsZSI6ImNyb3NzLWZhZGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgdHdlZW4gZnJvbSAnLi90d2Vlbic7XG5pbXBvcnQgeyBsaW5lYXIgfSBmcm9tICcuLi9lYXNpbmcnO1xuaW1wb3J0IHsgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNsYXNzIENyb3NzRmFkZSBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZWFzZTogbGluZWFyXG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIGNvbnN0IHsgZHVyYXRpb24sIGVhc2UsIGZhZGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5mYWRlciA9IGZhZGVyIHx8IHR3ZWVuKHtcbiAgICAgIHRvOiAxLFxuICAgICAgZHVyYXRpb24sXG4gICAgICBlYXNlXG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuXG4gIG9uVXBkYXRlKCkge1xuICAgIGNvbnN0IHsgZnJvbSwgdG8gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYmFsYW5jZSA9IHRoaXMuZmFkZXIuZ2V0KCk7XG4gICAgY29uc3QgbGF0ZXN0RnJvbVZhbHVlID0gZnJvbS5nZXQoKTtcbiAgICBjb25zdCBsYXRlc3RUb1ZhbHVlID0gdG8uZ2V0KCk7XG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGxhdGVzdEZyb21WYWx1ZSwgbGF0ZXN0VG9WYWx1ZSwgYmFsYW5jZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgQ3Jvc3NGYWRlKHByb3BzKTtcbiJdfQ==

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(15);
	
	var _2 = _interopRequireDefault(_);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CompositeAction = function (_Action) {
	  _inherits(CompositeAction, _Action);
	
	  function CompositeAction(props) {
	    _classCallCheck(this, CompositeAction);
	
	    var actions = props.actions;
	
	    var remainingProps = _objectWithoutProperties(props, ['actions']);
	
	    var _this = _possibleConstructorReturn(this, _Action.call(this, remainingProps));
	
	    _this.current = {};
	    _this.actionKeys = [];
	    _this.addActions(props.actions);
	    return _this;
	  }
	
	  CompositeAction.prototype.addActions = function addActions(actions) {
	    var _this2 = this;
	
	    var _loop = function (key) {
	      if (_this2.actionKeys.indexOf(key) === -1) {
	        _this2.actionKeys.push(key);
	      }
	
	      _this2[key] = actions[key];
	      _this2[key].setProps({
	        // Look into private settable functions
	        _onUpdate: function (v, action) {
	          _this2.current[key] = action.get();
	        },
	        _onStop: function () {
	          return _this2.numActiveActions--;
	        }
	      });
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
	
	exports.default = function (actions, props) {
	  return new CompositeAction(_extends({
	    actions: actions
	  }, props));
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxlQUNKLENBQVksS0FBWixFQUFtQjswQkFEZixpQkFDZTs7UUFDVCxVQUErQixNQUEvQixRQURTOztRQUNHLDBDQUFtQixvQkFEdEI7O2lEQUVqQixtQkFBTSxjQUFOLEdBRmlCOztBQUdqQixVQUFLLE9BQUwsR0FBZSxFQUFmLENBSGlCO0FBSWpCLFVBQUssVUFBTCxHQUFrQixFQUFsQixDQUppQjtBQUtqQixVQUFLLFVBQUwsQ0FBZ0IsTUFBTSxPQUFOLENBQWhCLENBTGlCOztHQUFuQjs7QUFESSw0QkFTSixpQ0FBVyxTQUFTOzs7MEJBQ1A7QUFDVCxVQUFJLE9BQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixHQUF4QixNQUFpQyxDQUFDLENBQUQsRUFBSTtBQUN2QyxlQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsR0FBckIsRUFEdUM7T0FBekM7O0FBSUEsYUFBSyxHQUFMLElBQVksUUFBUSxHQUFSLENBQVo7QUFDQSxhQUFLLEdBQUwsRUFBVSxRQUFWLENBQW1COztBQUVqQixtQkFBVyxVQUFDLENBQUQsRUFBSSxNQUFKLEVBQWU7QUFDeEIsaUJBQUssT0FBTCxDQUFhLEdBQWIsSUFBb0IsT0FBTyxHQUFQLEVBQXBCLENBRHdCO1NBQWY7QUFHWCxpQkFBUztpQkFBTSxPQUFLLGdCQUFMO1NBQU47T0FMWDtNQVBnQjs7QUFDbEIsU0FBSyxJQUFNLEdBQU4sSUFBYSxPQUFsQixFQUEyQjtZQUFoQixLQUFnQjtLQUEzQjs7O0FBVkUsNEJBMEJKLDZCQUFVOzs7QUFDUixTQUFLLGdCQUFMLEdBQXdCLEtBQUssVUFBTCxDQUFnQixNQUFoQixDQURoQjtBQUVSLFNBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixVQUFDLEdBQUQ7YUFBUyxPQUFLLEdBQUwsRUFBVSxLQUFWO0tBQVQsQ0FBeEIsQ0FGUTs7O0FBMUJOLDRCQStCSiwyQkFBUzs7O0FBQ1AsU0FBSyxVQUFMLENBQWdCLE9BQWhCLENBQXdCLFVBQUMsR0FBRDthQUFTLE9BQUssR0FBTCxFQUFVLElBQVY7S0FBVCxDQUF4QixDQURPOzs7QUEvQkwsNEJBbUNKLHFDQUFjOzs7QUFDWixRQUFNLFdBQVcsRUFBWCxDQURNO0FBRVosU0FBSyxVQUFMLENBQWdCLE9BQWhCLENBQXdCLFVBQUMsR0FBRDthQUFTLFNBQVMsR0FBVCxJQUFnQixPQUFLLEdBQUwsRUFBVSxXQUFWLEVBQWhCO0tBQVQsQ0FBeEIsQ0FGWTtBQUdaLFdBQU8sUUFBUCxDQUhZOzs7QUFuQ1YsNEJBeUNKLCtDQUFtQjtBQUNqQixXQUFRLEtBQUssZ0JBQUwsS0FBMEIsQ0FBMUIsQ0FEUzs7O1NBekNmOzs7a0JBOENTLFVBQUMsT0FBRCxFQUFVLEtBQVYsRUFBb0I7QUFDakMsU0FBTyxJQUFJLGVBQUo7QUFDTDtLQUNHLE1BRkUsQ0FBUCxDQURpQztDQUFwQiIsImZpbGUiOiJjb21wb3NpdGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5cbmNsYXNzIENvbXBvc2l0ZUFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgY29uc3QgeyBhY3Rpb25zLCAuLi5yZW1haW5pbmdQcm9wcyB9ID0gcHJvcHM7XG4gICAgc3VwZXIocmVtYWluaW5nUHJvcHMpO1xuICAgIHRoaXMuY3VycmVudCA9IHt9O1xuICAgIHRoaXMuYWN0aW9uS2V5cyA9IFtdO1xuICAgIHRoaXMuYWRkQWN0aW9ucyhwcm9wcy5hY3Rpb25zKTtcbiAgfVxuXG4gIGFkZEFjdGlvbnMoYWN0aW9ucykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGFjdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLmFjdGlvbktleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICB0aGlzLmFjdGlvbktleXMucHVzaChrZXkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzW2tleV0gPSBhY3Rpb25zW2tleV07XG4gICAgICB0aGlzW2tleV0uc2V0UHJvcHMoe1xuICAgICAgICAvLyBMb29rIGludG8gcHJpdmF0ZSBzZXR0YWJsZSBmdW5jdGlvbnNcbiAgICAgICAgX29uVXBkYXRlOiAodiwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50W2tleV0gPSBhY3Rpb24uZ2V0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIF9vblN0b3A6ICgpID0+IHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IHRoaXMuYWN0aW9uS2V5cy5sZW5ndGg7XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goKGtleSkgPT4gdGhpc1trZXldLnN0YXJ0KCkpO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKChrZXkpID0+IHRoaXNba2V5XS5zdG9wKCkpO1xuICB9XG5cbiAgZ2V0VmVsb2NpdHkoKSB7XG4gICAgY29uc3QgdmVsb2NpdHkgPSB7fTtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaCgoa2V5KSA9PiB2ZWxvY2l0eVtrZXldID0gdGhpc1trZXldLmdldFZlbG9jaXR5KCkpO1xuICAgIHJldHVybiB2ZWxvY2l0eTtcbiAgfVxuXG4gIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuICh0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChhY3Rpb25zLCBwcm9wcykgPT4ge1xuICByZXR1cm4gbmV3IENvbXBvc2l0ZUFjdGlvbih7XG4gICAgYWN0aW9ucyxcbiAgICAuLi5wcm9wc1xuICB9KTtcbn07XG4iXX0=

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _composite = __webpack_require__(11);
	
	var _composite2 = _interopRequireDefault(_composite);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function createPointer(_ref, _ref2) {
	  var x = _ref.x;
	  var y = _ref.y;
	  var eventToPoints = _ref2.eventToPoints;
	  var moveEvent = _ref2.moveEvent;
	
	
	  var pointer = (0, _composite2.default)({
	    x: {
	      from: x
	    },
	    y: {
	      from: x
	    }
	  });
	
	  pointer.setProps({
	    _onStart: function () {
	      return document.documentElement.addEventListener(moveEvent, pointer.update);
	    },
	    _onStop: function () {
	      return document.documentElement.removeEventListener(moveEvent, pointer.update);
	    },
	    _onUpdate: function () {}
	  });
	}
	
	var Pointer = function () {
	  function Pointer(_ref3, _ref4) {
	    var x = _ref3.x;
	    var y = _ref3.y;
	    var eventToPoints = _ref4.eventToPoints;
	    var moveEvent = _ref4.moveEvent;
	
	    _classCallCheck(this, Pointer);
	
	    this.x = value(x);
	    this.y = value(y);
	    this.moveEvent = moveEvent;
	    this.eventToPoints = eventToPoints;
	    this.update = this.update.bind(this);
	  }
	
	  Pointer.prototype.update = function update(e) {
	    e.preventDefault();
	
	    var _eventToPoints = this.eventToPoints(e);
	
	    var x = _eventToPoints.x;
	    var y = _eventToPoints.y;
	
	    this.x.update(x);
	    this.y.update(y);
	  };
	
	  return Pointer;
	}();
	
	var mouseEventToPoint = function (e) {
	  return {
	    x: e.pageX,
	    y: e.pageY
	  };
	};
	
	var touchEventToPoint = function (_ref5) {
	  var changedTouches = _ref5.changedTouches;
	  return {
	    x: changedTouches[0].clientX,
	    y: changedTouches[0].clientY
	  };
	};
	
	var getNativeEvent = function (e) {
	  return e.originalEvent || e.nativeEvent || e;
	};
	
	exports.default = function (e) {
	  var nativeEvent = getNativeEvent(e);
	  return nativeEvent.touches ? createPointer(touchEventToPoint(e), {
	    moveEvent: 'touchmove',
	    eventToPoints: touchEventToPoint
	  }) : createPointer(mouseEventToPoint(e), {
	    moveEvent: 'mousemove',
	    eventToPoints: mouseEventToPoint
	  });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9wb2ludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7QUFFQSxTQUFTLGFBQVQsY0FBK0Q7TUFBdEMsV0FBc0M7TUFBbkMsV0FBbUM7TUFBNUIsb0NBQTRCO01BQWIsNEJBQWE7OztBQUU3RCxNQUFNLFVBQVUseUJBQVU7QUFDeEIsT0FBRztBQUNELFlBQU0sQ0FBTjtLQURGO0FBR0EsT0FBRztBQUNELFlBQU0sQ0FBTjtLQURGO0dBSmMsQ0FBVixDQUZ1RDs7QUFXN0QsVUFBUSxRQUFSLENBQWlCO0FBQ2YsY0FBVTthQUFNLFNBQVMsZUFBVCxDQUF5QixnQkFBekIsQ0FBMEMsU0FBMUMsRUFBcUQsUUFBUSxNQUFSO0tBQTNEO0FBQ1YsYUFBUzthQUFNLFNBQVMsZUFBVCxDQUF5QixtQkFBekIsQ0FBNkMsU0FBN0MsRUFBd0QsUUFBUSxNQUFSO0tBQTlEO0FBQ1QsZUFBVyxZQUFNLEVBQU47R0FIYixFQVg2RDtDQUEvRDs7SUFrQk07QUFDSixXQURJLE9BQ0osZUFBb0Q7UUFBdEMsWUFBc0M7UUFBbkMsWUFBbUM7UUFBNUIsb0NBQTRCO1FBQWIsNEJBQWE7OzBCQURoRCxTQUNnRDs7QUFDbEQsU0FBSyxDQUFMLEdBQVMsTUFBTSxDQUFOLENBQVQsQ0FEa0Q7QUFFbEQsU0FBSyxDQUFMLEdBQVMsTUFBTSxDQUFOLENBQVQsQ0FGa0Q7QUFHbEQsU0FBSyxTQUFMLEdBQWlCLFNBQWpCLENBSGtEO0FBSWxELFNBQUssYUFBTCxHQUFxQixhQUFyQixDQUprRDtBQUtsRCxTQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBQWQsQ0FMa0Q7R0FBcEQ7O0FBREksb0JBU0oseUJBQU8sR0FBRztBQUNSLE1BQUUsY0FBRixHQURROzt5QkFFUyxLQUFLLGFBQUwsQ0FBbUIsQ0FBbkIsRUFGVDs7UUFFQSxxQkFGQTtRQUVHLHFCQUZIOztBQUdSLFNBQUssQ0FBTCxDQUFPLE1BQVAsQ0FBYyxDQUFkLEVBSFE7QUFJUixTQUFLLENBQUwsQ0FBTyxNQUFQLENBQWMsQ0FBZCxFQUpROzs7U0FUTjs7O0FBa0JOLElBQU0sb0JBQW9CLFVBQUMsQ0FBRDtTQUFRO0FBQ2hDLE9BQUcsRUFBRSxLQUFGO0FBQ0gsT0FBRyxFQUFFLEtBQUY7O0NBRnFCOztBQUsxQixJQUFNLG9CQUFvQjtNQUFHO1NBQXNCO0FBQ2pELE9BQUcsZUFBZSxDQUFmLEVBQWtCLE9BQWxCO0FBQ0gsT0FBRyxlQUFlLENBQWYsRUFBa0IsT0FBbEI7O0NBRnFCOztBQUsxQixJQUFNLGlCQUFpQixVQUFDLENBQUQ7U0FBTyxFQUFFLGFBQUYsSUFBbUIsRUFBRSxXQUFGLElBQWlCLENBQXBDO0NBQVA7O2tCQUVSLFVBQUMsQ0FBRCxFQUFPO0FBQ3BCLE1BQU0sY0FBYyxlQUFlLENBQWYsQ0FBZCxDQURjO0FBRXBCLFNBQU8sV0FBQyxDQUFZLE9BQVosR0FDTixjQUFjLGtCQUFrQixDQUFsQixDQUFkLEVBQW9DO0FBQ2xDLGVBQVcsV0FBWDtBQUNBLG1CQUFlLGlCQUFmO0dBRkYsQ0FESyxHQUtMLGNBQWMsa0JBQWtCLENBQWxCLENBQWQsRUFBb0M7QUFDbEMsZUFBVyxXQUFYO0FBQ0EsbUJBQWUsaUJBQWY7R0FGRixDQUxLLENBRmE7Q0FBUCIsImZpbGUiOiJwb2ludGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb21wb3NpdGUgZnJvbSAnLi4vYWN0aW9ucy9jb21wb3NpdGUnO1xuXG5mdW5jdGlvbiBjcmVhdGVQb2ludGVyKHsgeCwgeSB9LCB7IGV2ZW50VG9Qb2ludHMsIG1vdmVFdmVudCB9KSB7XG5cbiAgY29uc3QgcG9pbnRlciA9IGNvbXBvc2l0ZSh7XG4gICAgeDoge1xuICAgICAgZnJvbTogeFxuICAgIH0sXG4gICAgeToge1xuICAgICAgZnJvbTogeFxuICAgIH1cbiAgfSk7XG5cbiAgcG9pbnRlci5zZXRQcm9wcyh7XG4gICAgX29uU3RhcnQ6ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgcG9pbnRlci51cGRhdGUpLFxuICAgIF9vblN0b3A6ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgcG9pbnRlci51cGRhdGUpLFxuICAgIF9vblVwZGF0ZTogKCkgPT4ge31cbiAgfSk7XG59XG5cbmNsYXNzIFBvaW50ZXIge1xuICBjb25zdHJ1Y3Rvcih7IHgsIHkgfSwgeyBldmVudFRvUG9pbnRzLCBtb3ZlRXZlbnQgfSkge1xuICAgIHRoaXMueCA9IHZhbHVlKHgpO1xuICAgIHRoaXMueSA9IHZhbHVlKHkpO1xuICAgIHRoaXMubW92ZUV2ZW50ID0gbW92ZUV2ZW50O1xuICAgIHRoaXMuZXZlbnRUb1BvaW50cyA9IGV2ZW50VG9Qb2ludHM7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmV2ZW50VG9Qb2ludHMoZSk7XG4gICAgdGhpcy54LnVwZGF0ZSh4KTtcbiAgICB0aGlzLnkudXBkYXRlKHkpO1xuICB9XG5cbn1cblxuY29uc3QgbW91c2VFdmVudFRvUG9pbnQgPSAoZSkgPT4gKHtcbiAgeDogZS5wYWdlWCxcbiAgeTogZS5wYWdlWVxufSk7XG5cbmNvbnN0IHRvdWNoRXZlbnRUb1BvaW50ID0gKHsgY2hhbmdlZFRvdWNoZXMgfSkgPT4gKHtcbiAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxufSk7XG5cbmNvbnN0IGdldE5hdGl2ZUV2ZW50ID0gKGUpID0+IGUub3JpZ2luYWxFdmVudCB8fCBlLm5hdGl2ZUV2ZW50IHx8IGU7XG5cbmV4cG9ydCBkZWZhdWx0IChlKSA9PiB7XG4gIGNvbnN0IG5hdGl2ZUV2ZW50ID0gZ2V0TmF0aXZlRXZlbnQoZSk7XG4gIHJldHVybiAobmF0aXZlRXZlbnQudG91Y2hlcykgP1xuICAgIGNyZWF0ZVBvaW50ZXIodG91Y2hFdmVudFRvUG9pbnQoZSksIHtcbiAgICAgIG1vdmVFdmVudDogJ3RvdWNobW92ZScsXG4gICAgICBldmVudFRvUG9pbnRzOiB0b3VjaEV2ZW50VG9Qb2ludFxuICAgIH0pIDpcbiAgICBjcmVhdGVQb2ludGVyKG1vdXNlRXZlbnRUb1BvaW50KGUpLCB7XG4gICAgICBtb3ZlRXZlbnQ6ICdtb3VzZW1vdmUnLFxuICAgICAgZXZlbnRUb1BvaW50czogbW91c2VFdmVudFRvUG9pbnRcbiAgICB9KTtcbn1cbiJdfQ==

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
	var _onNextFrame = __webpack_require__(17);
	
	var _onNextFrame2 = _interopRequireDefault(_onNextFrame);
	
	var _createRenderStep = __webpack_require__(18);
	
	var _createRenderStep2 = _interopRequireDefault(_createRenderStep);
	
	var _utils = __webpack_require__(16);
	
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
	
	var timeSinceLastFrame = exports.timeSinceLastFrame = function () {
	  return elapsed;
	};
	var currentFrameTimestamp = exports.currentFrameTimestamp = function () {
	  return currentFramestamp;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFJLHNCQUFzQixLQUF0Qjs7Ozs7O0FBTUosSUFBTSxjQUFjLEVBQWQ7Ozs7OztBQU1OLElBQUksb0JBQW9CLHlCQUFwQjs7QUFFSixJQUFJLFVBQVUsQ0FBVjs7Ozs7OztBQU9KLElBQUksV0FBVyxDQUFYOztBQUVKLFNBQVMsZUFBVCxHQUEyQjtBQUN6QixNQUFJLENBQUMsbUJBQUQsRUFBc0I7QUFDeEIsMEJBQXNCLElBQXRCLENBRHdCO0FBRXhCLCtCQUFZLFlBQVosRUFGd0I7R0FBMUI7Q0FERjs7QUFPQSxJQUFNLGFBQWEsZ0NBQWlCLGVBQWpCLENBQWI7QUFDTixJQUFNLGNBQWMsZ0NBQWlCLGVBQWpCLENBQWQ7QUFDTixJQUFNLGNBQWMsZ0NBQWlCLGVBQWpCLENBQWQ7QUFDTixJQUFNLFdBQVcsZ0NBQWlCLGVBQWpCLENBQVg7O0FBRU4sU0FBUyxZQUFULENBQXNCLFVBQXRCLEVBQWtDO0FBQ2hDLHdCQUFzQixLQUF0QixDQURnQztBQUVoQyxZQUFVLEtBQUssR0FBTCxDQUFTLEtBQUssR0FBTCxDQUFTLGFBQWEsaUJBQWIsRUFBZ0MsV0FBekMsQ0FBVCxFQUFnRSxDQUFoRSxJQUFxRSxRQUFyRSxDQUZzQjtBQUdoQyxzQkFBb0IsVUFBcEIsQ0FIZ0M7O0FBS2hDLGFBQVcsT0FBWCxHQUxnQztBQU1oQyxjQUFZLE9BQVosR0FOZ0M7QUFPaEMsY0FBWSxPQUFaLEdBUGdDO0FBUWhDLFdBQVMsT0FBVCxHQVJnQztDQUFsQzs7QUFXTyxJQUFNLHNDQUFlLFdBQVcsUUFBWDtBQUNyQixJQUFNLHdDQUFnQixZQUFZLFFBQVo7QUFDdEIsSUFBTSx3Q0FBZ0IsWUFBWSxRQUFaO0FBQ3RCLElBQU0sa0NBQWEsU0FBUyxRQUFUO0FBQ25CLElBQU0sa0RBQXFCLFdBQVcsTUFBWDtBQUMzQixJQUFNLG9EQUFzQixZQUFZLE1BQVo7QUFDNUIsSUFBTSxvREFBc0IsWUFBWSxNQUFaO0FBQzVCLElBQU0sOENBQW1CLFNBQVMsTUFBVDs7QUFFekIsSUFBTSxrREFBcUI7U0FBTTtDQUFOO0FBQzNCLElBQU0sd0RBQXdCO1NBQU07Q0FBTiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb25OZXh0RnJhbWUgZnJvbSAnLi9vbi1uZXh0LWZyYW1lJztcbmltcG9ydCBjcmVhdGVSZW5kZXJTdGVwIGZyb20gJy4vY3JlYXRlLXJlbmRlci1zdGVwJztcbmltcG9ydCB7IGN1cnJlbnRUaW1lIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxubGV0IHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcblxuLyoqXG4gKiBNYXhpbXVtIHBlcm1pdHRlZCBtcyBzaW5jZSBsYXN0IGZyYW1lXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG5jb25zdCBNQVhfRUxBUFNFRCA9IDIwO1xuXG4vKipcbiAqIEN1cnJlbnQgZnJhbWVzdGFtcFxuICogQHR5cGUge051bWJlcn1cbiAqL1xubGV0IGN1cnJlbnRGcmFtZXN0YW1wID0gY3VycmVudFRpbWUoKTtcblxubGV0IGVsYXBzZWQgPSAwO1xuXG4vKipcbiAqIEZhY3RvciB0byBtdWx0aXBseSBgZWxhcHNlZGAgYnkgLSBcbiAqIDAuNSB3b3VsZCBiZSBzbG93IG1vdGlvbiwgMiB3b3VsZCBiZSBmYXN0XG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG5sZXQgZGlsYXRpb24gPSAxO1xuXG5mdW5jdGlvbiBzdGFydFJlbmRlckxvb3AoKSB7XG4gIGlmICghd2lsbFJlbmRlck5leHRGcmFtZSkge1xuICAgIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSB0cnVlO1xuICAgIG9uTmV4dEZyYW1lKHByb2Nlc3NGcmFtZSk7XG4gIH1cbn1cblxuY29uc3QgZnJhbWVTdGFydCA9IGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKTtcbmNvbnN0IGZyYW1lVXBkYXRlID0gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApO1xuY29uc3QgZnJhbWVSZW5kZXIgPSBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCk7XG5jb25zdCBmcmFtZUVuZCA9IGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKTtcblxuZnVuY3Rpb24gcHJvY2Vzc0ZyYW1lKGZyYW1lc3RhbXApIHtcbiAgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnRGcmFtZXN0YW1wLCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gIGN1cnJlbnRGcmFtZXN0YW1wID0gZnJhbWVzdGFtcDtcblxuICBmcmFtZVN0YXJ0LnByb2Nlc3MoKTtcbiAgZnJhbWVVcGRhdGUucHJvY2VzcygpO1xuICBmcmFtZVJlbmRlci5wcm9jZXNzKCk7XG4gIGZyYW1lRW5kLnByb2Nlc3MoKTtcbn1cblxuZXhwb3J0IGNvbnN0IG9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuc2NoZWR1bGU7XG5leHBvcnQgY29uc3Qgb25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLnNjaGVkdWxlO1xuZXhwb3J0IGNvbnN0IG9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5zY2hlZHVsZTtcbmV4cG9ydCBjb25zdCBvbkZyYW1lRW5kID0gZnJhbWVFbmQuc2NoZWR1bGU7XG5leHBvcnQgY29uc3QgY2FuY2VsT25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5jYW5jZWw7XG5leHBvcnQgY29uc3QgY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLmNhbmNlbDtcbmV4cG9ydCBjb25zdCBjYW5jZWxPbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuY2FuY2VsO1xuZXhwb3J0IGNvbnN0IGNhbmNlbE9uRnJhbWVFbmQgPSBmcmFtZUVuZC5jYW5jZWw7XG5cbmV4cG9ydCBjb25zdCB0aW1lU2luY2VMYXN0RnJhbWUgPSAoKSA9PiBlbGFwc2VkO1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9ICgpID0+IGN1cnJlbnRGcmFtZXN0YW1wO1xuIl19

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
	
	var createReversedEasing = exports.createReversedEasing = function (easing) {
	  return function (p) {
	    return 1 - easing(1 - p);
	  };
	};
	var createMirroredEasing = exports.createMirroredEasing = function (easing) {
	  return function (p) {
	    return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
	  };
	};;
	
	var linear = exports.linear = function (p) {
	  return p;
	};
	
	var createEaseIn = exports.createEaseIn = function (power) {
	  return function (p) {
	    return Math.pow(p, power);
	  };
	};
	var easeIn = exports.easeIn = createEaseIn(2);
	var easeOut = exports.easeOut = createReversedEasing(easeIn);
	var easeInOut = exports.easeInOut = createMirroredEasing(easeIn);
	
	var circIn = exports.circIn = function (p) {
	  return 1 - Math.sin(Math.acos(p));
	};
	var circOut = exports.circOut = createReversedEasing(circIn);
	var circInOut = exports.circInOut = createMirroredEasing(circOut);
	
	var createBackIn = exports.createBackIn = function (power) {
	  return function (p) {
	    return p * p * ((power + 1) * p - power);
	  };
	};
	var backIn = exports.backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
	var backOut = exports.backOut = createReversedEasing(backIn);
	var backInOut = exports.backInOut = createMirroredEasing(backIn);
	
	var createAnticipateEasing = exports.createAnticipateEasing = function (power) {
	  var backEasing = createBackIn(power);
	  return function (p) {
	    return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
	  };
	};
	var anticipate = exports.anticipate = createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9lYXNpbmcvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSw2QkFBNkIsS0FBN0I7O0FBRUMsSUFBTSxzREFBdUIsVUFBQyxNQUFEO1NBQVksVUFBQyxDQUFEO1dBQU8sSUFBSSxPQUFPLElBQUksQ0FBSixDQUFYO0dBQVA7Q0FBWjtBQUM3QixJQUFNLHNEQUF1QixVQUFDLE1BQUQ7U0FBWSxVQUFDLENBQUQ7V0FBTyxDQUFDLElBQUssR0FBTCxHQUFZLE9BQU8sSUFBSSxDQUFKLENBQVAsR0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBQyxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUosQ0FBTCxDQUFYLENBQUQsR0FBNEIsQ0FBNUI7R0FBeEM7Q0FBWixDQUFrRjs7QUFFL0csSUFBTSwwQkFBUyxVQUFDLENBQUQ7U0FBTztDQUFQOztBQUVmLElBQU0sc0NBQWUsVUFBQyxLQUFEO1NBQVcsVUFBQyxDQUFEO29CQUFPLEdBQUs7R0FBWjtDQUFYO0FBQ3JCLElBQU0sMEJBQVMsYUFBYSxDQUFiLENBQVQ7QUFDTixJQUFNLDRCQUFVLHFCQUFxQixNQUFyQixDQUFWO0FBQ04sSUFBTSxnQ0FBWSxxQkFBcUIsTUFBckIsQ0FBWjs7QUFFTixJQUFNLDBCQUFTLFVBQUMsQ0FBRDtTQUFPLElBQUksS0FBSyxHQUFMLENBQVMsS0FBSyxJQUFMLENBQVUsQ0FBVixDQUFULENBQUo7Q0FBUDtBQUNmLElBQU0sNEJBQVUscUJBQXFCLE1BQXJCLENBQVY7QUFDTixJQUFNLGdDQUFZLHFCQUFxQixPQUFyQixDQUFaOztBQUVOLElBQU0sc0NBQWUsVUFBQyxLQUFEO1NBQVcsVUFBQyxDQUFEO1dBQU8sQ0FBQyxHQUFJLENBQUosSUFBVSxDQUFDLFFBQVEsQ0FBUixDQUFELEdBQWMsQ0FBZCxHQUFrQixLQUFsQixDQUFYO0dBQVA7Q0FBWDtBQUNyQixJQUFNLDBCQUFTLGFBQWEsMEJBQWIsQ0FBVDtBQUNOLElBQU0sNEJBQVUscUJBQXFCLE1BQXJCLENBQVY7QUFDTixJQUFNLGdDQUFZLHFCQUFxQixNQUFyQixDQUFaOztBQUVOLElBQU0sMERBQXlCLFVBQUMsS0FBRCxFQUFXO0FBQy9DLE1BQU0sYUFBYSxhQUFhLEtBQWIsQ0FBYixDQUR5QztBQUUvQyxTQUFPLFVBQUMsQ0FBRDtXQUFPLENBQUUsS0FBSyxDQUFMLENBQUQsR0FBVyxDQUFYLEdBQWdCLE1BQU0sV0FBVyxDQUFYLENBQU4sR0FBc0IsT0FBTyxJQUFJLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFDLEVBQUQsSUFBTyxJQUFJLENBQUosQ0FBUCxDQUFoQixDQUFQO0dBQTlDLENBRndDO0NBQVg7QUFJL0IsSUFBTSxrQ0FBYSx1QkFBdUIsMEJBQXZCLENBQWIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEggPSAxLjUyNTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJldmVyc2VkRWFzaW5nID0gKGVhc2luZykgPT4gKHApID0+IDEgLSBlYXNpbmcoMSAtIHApO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gKGVhc2luZykgPT4gKHApID0+IChwIDw9IDAuNSkgPyBlYXNpbmcoMiAqIHApIC8gMiA6ICgyIC0gZWFzaW5nKDIgKiAoMSAtIHApKSkgLyAyOztcblxuZXhwb3J0IGNvbnN0IGxpbmVhciA9IChwKSA9PiBwO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRWFzZUluID0gKHBvd2VyKSA9PiAocCkgPT4gcCAqKiBwb3dlcjtcbmV4cG9ydCBjb25zdCBlYXNlSW4gPSBjcmVhdGVFYXNlSW4oMik7XG5leHBvcnQgY29uc3QgZWFzZU91dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGVhc2VJbik7XG5leHBvcnQgY29uc3QgZWFzZUluT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoZWFzZUluKTtcblxuZXhwb3J0IGNvbnN0IGNpcmNJbiA9IChwKSA9PiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHApKTtcbmV4cG9ydCBjb25zdCBjaXJjT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoY2lyY0luKTtcbmV4cG9ydCBjb25zdCBjaXJjSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhjaXJjT3V0KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJhY2tJbiA9IChwb3dlcikgPT4gKHApID0+IChwICogcCkgKiAoKHBvd2VyICsgMSkgKiBwIC0gcG93ZXIpO1xuZXhwb3J0IGNvbnN0IGJhY2tJbiA9IGNyZWF0ZUJhY2tJbihERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG5leHBvcnQgY29uc3QgYmFja091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGJhY2tJbik7XG5leHBvcnQgY29uc3QgYmFja0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoYmFja0luKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSAocG93ZXIpID0+IHtcbiAgY29uc3QgYmFja0Vhc2luZyA9IGNyZWF0ZUJhY2tJbihwb3dlcik7XG4gIHJldHVybiAocCkgPT4gKChwICo9IDIpIDwgMSkgPyAwLjUgKiBiYWNrRWFzaW5nKHApIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocCAtIDEpKSk7XG59XG5leHBvcnQgY29uc3QgYW50aWNpcGF0ZSA9IGNyZWF0ZUFudGljaXBhdGVFYXNpbmcoREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xuIl19

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _framesync = __webpack_require__(13);
	
	var _calc = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Action = function () {
	  function Action(props) {
	    _classCallCheck(this, Action);
	
	    this.update = this.update.bind(this);
	
	    this.props = _extends({}, this.constructor.defaultProps);
	
	    this.setProps(props);
	
	    this.current = props.current || 0;
	  }
	
	  Action.prototype.start = function start() {
	    var _props = this.props;
	    var onStart = _props.onStart;
	    var _onStart = _props._onStart;
	    var passive = _props.passive;
	
	
	    if (!passive) {
	      this.isActive = true;
	      (0, _framesync.onFrameUpdate)(this.update);
	    }
	
	    if (this.onStart) this.onStart();
	    if (onStart) onStart(this);
	    if (_onStart) _onStart(this);
	
	    return this;
	  };
	
	  Action.prototype.stop = function stop() {
	    var _props2 = this.props;
	    var onStop = _props2.onStop;
	    var _onStop = _props2._onStop;
	    var passive = _props2.passive;
	
	
	    if (!passive) {
	      this.isActive = false;
	      (0, _framesync.cancelOnFrameUpdate)(this.update);
	    }
	
	    if (this.onStop) this.onStop();
	    if (onStop) onStop(this);
	    if (_onStop) _onStop(this);
	
	    return this;
	  };
	
	  Action.prototype.complete = function complete() {
	    var _props3 = this.props;
	    var onComplete = _props3.onComplete;
	    var _onComplete = _props3._onComplete;
	
	
	    if (this.onComplete) this.onComplete();
	    if (onComplete) onComplete(this);
	    if (_onComplete) _onComplete(this);
	
	    this.stop();
	
	    return this;
	  };
	
	  Action.prototype.update = function update() {
	    this.lastUpdated = (0, _framesync.timeSinceLastFrame)();
	    this.prev = this.current;
	
	    var _props4 = this.props;
	    var onUpdate = _props4.onUpdate;
	    var _onUpdate = _props4._onUpdate;
	    var passive = _props4.passive;
	
	
	    if (this.onUpdate) {
	      this.current = this.onUpdate();
	    }
	
	    var filtered = this.get();
	    if (onUpdate) onUpdate(filtered, this);
	    if (_onUpdate) _onUpdate(filtered, this);
	
	    if (!passive && this.isActive) {
	      (0, _framesync.onFrameUpdate)(this.update);
	    }
	
	    if (this.isActionComplete && this.isActionComplete()) {
	      this.complete();
	    }
	
	    return this;
	  };
	
	  Action.prototype.setProps = function setProps(props) {
	    this.props = _extends({}, this.props, props);
	  };
	
	  Action.prototype.get = function get() {
	    var filter = this.props.filter;
	
	    return filter ? filter(this.current) : this.current;
	  };
	
	  Action.prototype.getVelocity = function getVelocity() {
	    return (0, _calc.speedPerSecond)(this.prev - this.current, this.lastUpdated);
	  };
	
	  return Action;
	}();
	
	exports.default = Action;
	//# sourceMappingURL=data:application/json;base64,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QkF1RkoscUJBQU07UUFDSSxTQUFXLEtBQUssS0FBTCxDQUFYLE9BREo7O0FBRUosV0FBTyxTQUFTLE9BQU8sS0FBSyxPQUFMLENBQWhCLEdBQWdDLEtBQUssT0FBTCxDQUZuQzs7O0FBdkZGLG1CQTRGSixxQ0FBYztBQUNaLFdBQU8sMEJBQWUsS0FBSyxJQUFMLEdBQVksS0FBSyxPQUFMLEVBQWMsS0FBSyxXQUFMLENBQWhELENBRFk7OztTQTVGVjs7O2tCQWlHUyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvbkZyYW1lVXBkYXRlLCBjYW5jZWxPbkZyYW1lVXBkYXRlLCB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuaW1wb3J0IHsgc3BlZWRQZXJTZWNvbmQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNsYXNzIEFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzXG4gICAgfTtcblxuICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuXG4gICAgdGhpcy5jdXJyZW50ID0gcHJvcHMuY3VycmVudCB8fCAwO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgY29uc3QgeyBvblN0YXJ0LCBfb25TdGFydCwgcGFzc2l2ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICBvbkZyYW1lVXBkYXRlKHRoaXMudXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB0aGlzLm9uU3RhcnQoKTtcbiAgICBpZiAob25TdGFydCkgb25TdGFydCh0aGlzKTtcbiAgICBpZiAoX29uU3RhcnQpIF9vblN0YXJ0KHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNvbnN0IHsgb25TdG9wLCBfb25TdG9wLCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICBjYW5jZWxPbkZyYW1lVXBkYXRlKHRoaXMudXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0b3ApIHRoaXMub25TdG9wKCk7XG4gICAgaWYgKG9uU3RvcCkgb25TdG9wKHRoaXMpO1xuICAgIGlmIChfb25TdG9wKSBfb25TdG9wKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICBjb25zdCB7IG9uQ29tcGxldGUsIF9vbkNvbXBsZXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHRoaXMub25Db21wbGV0ZSkgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUodGhpcyk7XG4gICAgaWYgKF9vbkNvbXBsZXRlKSBfb25Db21wbGV0ZSh0aGlzKTtcblxuICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9IHRpbWVTaW5jZUxhc3RGcmFtZSgpO1xuICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudDtcblxuICAgIGNvbnN0IHsgb25VcGRhdGUsIF9vblVwZGF0ZSwgcGFzc2l2ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh0aGlzLm9uVXBkYXRlKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLm9uVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyZWQgPSB0aGlzLmdldCgpO1xuICAgIGlmIChvblVwZGF0ZSkgb25VcGRhdGUoZmlsdGVyZWQsIHRoaXMpO1xuICAgIGlmIChfb25VcGRhdGUpIF9vblVwZGF0ZShmaWx0ZXJlZCwgdGhpcyk7XG5cbiAgICBpZiAoIXBhc3NpdmUgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgb25GcmFtZVVwZGF0ZSh0aGlzLnVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiB0aGlzLmlzQWN0aW9uQ29tcGxldGUoKSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0UHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0ge1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfTtcbiAgfVxuXG4gIGdldCgpIHtcbiAgICBjb25zdCB7IGZpbHRlciB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gZmlsdGVyID8gZmlsdGVyKHRoaXMuY3VycmVudCkgOiB0aGlzLmN1cnJlbnQ7XG4gIH1cblxuICBnZXRWZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gc3BlZWRQZXJTZWNvbmQodGhpcy5wcmV2IC0gdGhpcy5jdXJyZW50LCB0aGlzLmxhc3RVcGRhdGVkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XG4iXX0=

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
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
	var currentTime = exports.currentTime = HAS_PERFORMANCE_NOW ? function () {
	  return performance.now();
	} : function () {
	  return new Date().getTime();
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSxxQkFBcUIsaUJBQXJCO0FBQ04sSUFBTSxtQkFBbUIsT0FBbkI7QUFDTixJQUFNLHNCQUF1QixPQUFPLFdBQVAsS0FBdUIsV0FBdkIsSUFBc0MsWUFBWSxHQUFaOzs7Ozs7OztBQVFuRSxJQUFNLFVBQVUsVUFBQyxRQUFEO1NBQWMsT0FBTyxTQUFQLENBQWlCLFFBQWpCLENBQTBCLElBQTFCLENBQStCLFFBQS9CLEVBQXlDLEtBQXpDLENBQStDLENBQS9DLEVBQWtELENBQUMsQ0FBRDtDQUFoRTs7Ozs7Ozs7QUFRVCxJQUFNLG9DQUFjLFVBQUMsTUFBRDtTQUFZLE9BQU8sT0FBUCxDQUFlLGtCQUFmLEVBQW1DLGdCQUFuQyxFQUFxRCxXQUFyRDtDQUFaOzs7Ozs7Ozs7OztBQVdwQixJQUFNLHNEQUF1QixVQUFDLEtBQUQsRUFBUSxNQUFSO1NBQXNCLGVBQVU7Q0FBaEM7Ozs7Ozs7QUFPN0IsSUFBTSxvQ0FBYyxzQkFBc0I7U0FBTSxZQUFZLEdBQVo7Q0FBTixHQUEwQjtTQUFNLElBQUksSUFBSixHQUFXLE9BQVg7Q0FBTjs7Ozs7Ozs7O0FBU3BFLElBQU0sb0NBQWMsVUFBQyxNQUFELEVBQVMsWUFBVDtTQUEwQixPQUFPLGNBQVAsQ0FBc0IsWUFBdEIsS0FBdUMsT0FBTyxZQUFQLE1BQXlCLFNBQXpCO0NBQWpFOzs7Ozs7OztBQVFwQixJQUFNLDRCQUFVLFVBQUMsR0FBRDtTQUFTLFFBQVEsR0FBUixNQUFpQixPQUFqQjtDQUFUOzs7Ozs7OztBQVFoQixJQUFNLDBCQUFTLFVBQUMsR0FBRDtTQUFTLFFBQVEsR0FBUixNQUFpQixVQUFqQjtDQUFUOzs7Ozs7OztBQVFmLElBQU0sd0JBQVEsVUFBQyxHQUFEO1NBQVMsT0FBTyxHQUFQLEtBQWUsUUFBZjtDQUFUOzs7Ozs7OztBQVFkLElBQU0sd0JBQVEsVUFBQyxHQUFEO1NBQVMsT0FBTyxHQUFQLEtBQWUsUUFBZjtDQUFUOzs7Ozs7OztBQVFkLElBQU0sNENBQWtCLFVBQUMsS0FBRDtTQUFXLEtBQUMsSUFBUyxNQUFNLE9BQU4sSUFBaUIsTUFBTSxPQUFOLENBQWMsR0FBZCxJQUFxQixDQUFyQixHQUEwQixJQUFyRCxHQUE0RCxLQUE1RDtDQUFYOzs7Ozs7OztBQVF4QixJQUFNLDhCQUFXLFVBQUMsR0FBRDtTQUFTLE9BQU8sR0FBUCxLQUFlLFFBQWY7Q0FBVDs7Ozs7Ozs7OztBQVVqQixJQUFNLG9EQUFzQixVQUFDLEtBQUQ7U0FBVyxTQUFTLEtBQVQsSUFBa0IsTUFBTSxLQUFOLENBQVksTUFBWixDQUFsQixHQUF3QyxDQUFDLEtBQUQsQ0FBeEM7Q0FBWDs7Ozs7Ozs7OztBQVU1QixJQUFNLG9EQUFzQixVQUFDLEtBQUQ7U0FBVyxTQUFTLEtBQVQsSUFBa0IsTUFBTSxLQUFOLENBQVksR0FBWixDQUFsQixHQUFxQyxDQUFDLEtBQUQsQ0FBckM7Q0FBWDs7Ozs7Ozs7O0FBUzVCLElBQU0sZ0NBQVksVUFBQyxHQUFELEVBQXdCO01BQWxCLGtFQUFZLGlCQUFNOztBQUMvQyx1QkFBWSxJQUFNLFVBQWxCLENBRCtDO0FBRS9DLFNBQU8sS0FBSyxLQUFMLENBQVcsTUFBTSxTQUFOLENBQVgsR0FBOEIsU0FBOUIsQ0FGd0M7Q0FBeEIiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG5jb25zdCBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbmNvbnN0IEhBU19QRVJGT1JNQU5DRV9OT1cgPSAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cpO1xuXG4vKlxuICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbmNvbnN0IHZhclR5cGUgPSAodmFyaWFibGUpID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xuXG4vKlxuICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmV4cG9ydCBjb25zdCBjYW1lbFRvRGFzaCA9IChzdHJpbmcpID0+IHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcblxuLypcbiAgQ3JlYXRlIGEgZnVuY3Rpb24gc3RyaW5nXG5cbiAgJzIwcHgnLCAndHJhbnNsYXRlJyAtPiAndHJhbnNsYXRlKDIwcHgpJ1xuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVGdW5jdGlvblN0cmluZyA9ICh2YWx1ZSwgcHJlZml4KSA9PiBgJHtwcmVmaXh9KCR7dmFsdWV9KWA7XG5cbi8qXG4gIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gIFxuICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/ICgpID0+IHBlcmZvcm1hbmNlLm5vdygpIDogKCkgPT4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbi8qXG4gIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gIEBwYXJhbSBbb2JqZWN0XVxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYm9vbGVhbl1cbiovXG5leHBvcnQgY29uc3QgaGFzUHJvcGVydHkgPSAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpID0+IG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKGFycikgPT4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbmV4cG9ydCBjb25zdCBpc0Z1bmMgPSAob2JqKSA9PiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG5leHBvcnQgY29uc3QgaXNOdW0gPSAobnVtKSA9PiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG5leHBvcnQgY29uc3QgaXNPYmogPSAob2JqKSA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcblxuLypcbiAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbmV4cG9ydCBjb25zdCBpc1JlbGF0aXZlVmFsdWUgPSAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDApID8gdHJ1ZSA6IGZhbHNlO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHN0cikgPT4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG5cbi8qXG4gIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcblxuLypcbiAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vIGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc3BsaXRTcGFjZURlbGltaXRlZCA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG5leHBvcnQgY29uc3QgdG9EZWNpbWFsID0gKG51bSwgcHJlY2lzaW9uID0gMikgPT4ge1xuICBwcmVjaXNpb24gPSAxMCAqKiBwcmVjaXNpb247XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuIl19

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	/*
	  Detect and load an appropriate clock setting for the environment
	*/
	var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame ? true : false;
	
	var onNextFrame = void 0;
	
	if (hasRAF) {
	  onNextFrame = function (callback) {
	    return window.requestAnimationFrame(callback);
	  };
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
	
	    onNextFrame = function (callback) {
	      var currentTime = new Date().getTime();
	      var timeToCall = Math.max(0, 16.7 - (currentTime - lastTime));
	
	      lastTime = currentTime + timeToCall;
	
	      setTimeout(function () {
	        return callback(lastTime);
	      }, timeToCall);
	    };
	  })();
	}
	
	exports.default = onNextFrame;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxJQUFNLFNBQVMsT0FBUSxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLE9BQU8scUJBQVAsR0FBZ0MsSUFBbEUsR0FBeUUsS0FBekU7O0FBRWYsSUFBSSxvQkFBSjs7QUFFQSxJQUFJLE1BQUosRUFBWTtBQUNWLGdCQUFjLFVBQUMsUUFBRDtXQUFjLE9BQU8scUJBQVAsQ0FBNkIsUUFBN0I7R0FBZCxDQURKO0NBQVosTUFHTzs7Ozs7Ozs7Ozs7Ozs7O0FBZUwsUUFBSSxXQUFXLENBQVg7O0FBRUosa0JBQWMsVUFBQyxRQUFELEVBQWM7QUFDMUIsVUFBTSxjQUFjLElBQUksSUFBSixHQUFXLE9BQVgsRUFBZCxDQURvQjtBQUUxQixVQUFNLGFBQWEsS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLFFBQVEsY0FBYyxRQUFkLENBQVIsQ0FBekIsQ0FGb0I7O0FBSTFCLGlCQUFXLGNBQWMsVUFBZCxDQUplOztBQU0xQixpQkFBVztlQUFNLFNBQVMsUUFBVDtPQUFOLEVBQTBCLFVBQXJDLEVBTjBCO0tBQWQ7T0FqQlQ7Q0FIUDs7a0JBOEJlIiwiZmlsZSI6Im9uLW5leHQtZnJhbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cbmNvbnN0IGhhc1JBRiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSA/IHRydWUgOiBmYWxzZTtcblxubGV0IG9uTmV4dEZyYW1lO1xuXG5pZiAoaGFzUkFGKSB7XG4gIG9uTmV4dEZyYW1lID0gKGNhbGxiYWNrKSA9PiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcblxufSBlbHNlIHtcbiAgLypcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICBcbiAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG5cbiAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgXG4gICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgXG4gICAgTUlUIGxpY2Vuc2VcbiAgKi9cbiAgbGV0IGxhc3RUaW1lID0gMDtcblxuICBvbk5leHRGcmFtZSA9IChjYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2LjcgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKGxhc3RUaW1lKSwgdGltZVRvQ2FsbCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9uTmV4dEZyYW1lOyJdfQ==

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

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
	    schedule: function (callback) {
	      startRenderLoop();
	      // If this callback isn't already scheduled to run next frame
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFBd0I7QUFBVCxTQUFTLGdCQUFULENBQTBCLGVBQTFCLEVBQTJDOzs7Ozs7QUFNeEQsTUFBSSxpQkFBaUIsRUFBakIsQ0FOb0Q7QUFPeEQsTUFBSSwwQkFBMEIsRUFBMUIsQ0FQb0Q7O0FBU3hELFNBQU87QUFDTCxjQUFVLFVBQUMsUUFBRCxFQUFjO0FBQ3RCOztBQURzQixVQUdsQix3QkFBd0IsT0FBeEIsQ0FBZ0MsUUFBaEMsTUFBOEMsQ0FBQyxDQUFELEVBQUk7QUFDcEQsZ0NBQXdCLElBQXhCLENBQTZCLFFBQTdCLEVBRG9EO09BQXREO0tBSFE7O0FBUVYsWUFBUSxVQUFDLFFBQUQsRUFBYztBQUNwQixVQUFNLGtCQUFrQix3QkFBd0IsT0FBeEIsQ0FBZ0MsUUFBaEMsQ0FBbEIsQ0FEYztBQUVwQixVQUFJLG9CQUFvQixDQUFDLENBQUQsRUFBSTtBQUMxQixnQ0FBd0IsTUFBeEIsQ0FBK0IsZUFBL0IsRUFBZ0QsQ0FBaEQsRUFEMEI7T0FBNUI7S0FGTTs7QUFPUixhQUFTLFlBQU07OztpQkFFK0IsQ0FBQyx1QkFBRCxFQUEwQixjQUExQjs7QUFGL0I7QUFFWiwrQkFGWTtBQUVJLHdDQUZKO0FBS2IsOEJBQXdCLE1BQXhCLEdBQWlDLENBQWpDOzs7QUFMYSxVQVFQLGVBQWUsZUFBZSxNQUFmLENBUlI7QUFTYixXQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxZQUFKLEVBQWtCLEdBQWxDLEVBQXVDO0FBQ3JDLHVCQUFlLENBQWYsSUFEcUM7T0FBdkM7S0FUTztHQWhCWCxDQVR3RDtDQUEzQyIsImZpbGUiOiJjcmVhdGUtcmVuZGVyLXN0ZXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApIHtcbiAgLyoqXG4gICAqIFdlIHVzZSB0d28gYXJyYXlzLCBvbmUgZm9yIHRoaXMgZnJhbWUgYW5kIG9uZSB0byBxdWV1ZSBmb3IgdGhlXG4gICAqIG5leHQgZnJhbWUsIHJldXNpbmcgZWFjaCB0byBhdm9pZCBHQy5cbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgbGV0IGZ1bmN0aW9uc1RvUnVuID0gW107XG4gIGxldCBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgc2NoZWR1bGU6IChjYWxsYmFjaykgPT4ge1xuICAgICAgc3RhcnRSZW5kZXJMb29wKCk7XG4gICAgICAvLyBJZiB0aGlzIGNhbGxiYWNrIGlzbid0IGFscmVhZHkgc2NoZWR1bGVkIHRvIHJ1biBuZXh0IGZyYW1lXG4gICAgICBpZiAoZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLnB1c2goY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjYW5jZWw6IChjYWxsYmFjaykgPT4ge1xuICAgICAgY29uc3QgaW5kZXhPZkNhbGxiYWNrID0gZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaW5kZXhPZkNhbGxiYWNrICE9PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXhPZkNhbGxiYWNrLCAxKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvY2VzczogKCkgPT4ge1xuICAgICAgLy8gU3dhcCB0aGlzIGZyYW1lIGFuZCBuZXh0IGZyYW1lIGFycmF5cyB0byBhdm9pZCBHQ1xuICAgICAgW2Z1bmN0aW9uc1RvUnVuLCBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZV0gPSBbZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUsIGZ1bmN0aW9uc1RvUnVuXTtcblxuICAgICAgLy8gQ2xlYXIgbmV4dCBmcmFtZSBsaXN0XG4gICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5sZW5ndGggPSAwO1xuXG4gICAgICAvLyBFeGVjdXRlIGFsbCBvZiB0aGlzIGZyYW1lJ3MgZnVuY3Rpb25zXG4gICAgICBjb25zdCBudW1UaGlzRnJhbWUgPSBmdW5jdGlvbnNUb1J1bi5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVRoaXNGcmFtZTsgaSsrKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuW2ldKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSJdfQ==

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDEwNzUzNDcyYmNlY2UxY2I2ODMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wYXJhbGxlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jcm9zcy1mYWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvcG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lYXNpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL29uLW5leHQtZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9jcmVhdGUtcmVuZGVyLXN0ZXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNRO0FBQ0EsNENBQTJDLDJXOzs7Ozs7QUNUM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNROztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLFlBQVcsUUFBUTs7QUFFbkI7O0FBRUE7QUFDQSw0Q0FBMkMsdXlEOzs7Ozs7QUN4SjNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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ZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGQxMDc1MzQ3MmJjZWNlMWNiNjgzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3BvcG1vdGlvbiA9IHJlcXVpcmUoJy4vcG9wbW90aW9uJyk7XG5cbnZhciBwb3Btb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcG9wbW90aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxud2luZG93LnBvcG1vdGlvbiA9IHBvcG1vdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bmJHOWlZV3d1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRVHM3U1VGQldUczdPenRCUVVOYUxFOUJRVThzVTBGQlVDeEhRVUZ0UWl4VFFVRnVRaUlzSW1acGJHVWlPaUpuYkc5aVlXd3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJQ29nWVhNZ2NHOXdiVzkwYVc5dUlHWnliMjBnSnk0dmNHOXdiVzkwYVc5dUp6dGNibmRwYm1SdmR5NXdiM0J0YjNScGIyNGdQU0J3YjNCdGIzUnBiMjQ3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucG9pbnRlciA9IGV4cG9ydHMuY29tcG9zaXRlID0gZXhwb3J0cy5jcm9zc0ZhZGUgPSBleHBvcnRzLmRlbGF5ID0gZXhwb3J0cy5jaGFpbiA9IGV4cG9ydHMucGFyYWxsZWwgPSBleHBvcnRzLnBoeXNpY3MgPSBleHBvcnRzLnRyYWNrID0gZXhwb3J0cy50d2VlbiA9IGV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy5maWx0ZXIgPSBleHBvcnRzLmNhbGMgPSBleHBvcnRzLmVhc2luZyA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4vZnJhbWVzeW5jJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVN0YXJ0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lU3RhcnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lVXBkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVJlbmRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVJlbmRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVFbmQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVFbmQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lU3RhcnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVTdGFydDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVVcGRhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVVcGRhdGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lUmVuZGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lUmVuZGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZUVuZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZUVuZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3RpbWVTaW5jZUxhc3RGcmFtZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3VycmVudEZyYW1lVGltZXN0YW1wJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jdXJyZW50RnJhbWVUaW1lc3RhbXA7XG4gIH1cbn0pO1xuXG52YXIgX2Vhc2luZzIgPSByZXF1aXJlKCcuL2Vhc2luZycpO1xuXG52YXIgX2Vhc2luZyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9lYXNpbmcyKTtcblxudmFyIF9jYWxjMiA9IHJlcXVpcmUoJy4vaW5jL2NhbGMnKTtcblxudmFyIF9jYWxjID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2NhbGMyKTtcblxudmFyIF9maWx0ZXJzID0gcmVxdWlyZSgnLi9pbmMvZmlsdGVycycpO1xuXG52YXIgX2ZpbHRlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9maWx0ZXJzKTtcblxudmFyIF9hY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zJyk7XG5cbnZhciBfYWN0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hY3Rpb25zKTtcblxudmFyIF90d2VlbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvdHdlZW4nKTtcblxudmFyIF90d2VlbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2VlbjIpO1xuXG52YXIgX3RyYWNrMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy90cmFjaycpO1xuXG52YXIgX3RyYWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYWNrMik7XG5cbnZhciBfcGh5c2ljczIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcGh5c2ljcycpO1xuXG52YXIgX3BoeXNpY3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGh5c2ljczIpO1xuXG52YXIgX3BhcmFsbGVsMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9wYXJhbGxlbCcpO1xuXG52YXIgX3BhcmFsbGVsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcmFsbGVsMik7XG5cbnZhciBfY2hhaW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NoYWluJyk7XG5cbnZhciBfY2hhaW4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hhaW4yKTtcblxudmFyIF9kZWxheTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvZGVsYXknKTtcblxudmFyIF9kZWxheTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWxheTIpO1xuXG52YXIgX2Nyb3NzRmFkZTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY3Jvc3MtZmFkZScpO1xuXG52YXIgX2Nyb3NzRmFkZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcm9zc0ZhZGUyKTtcblxudmFyIF9jb21wb3NpdGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NvbXBvc2l0ZScpO1xuXG52YXIgX2NvbXBvc2l0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGUyKTtcblxudmFyIF9wb2ludGVyMiA9IHJlcXVpcmUoJy4vaW5wdXQvcG9pbnRlcicpO1xuXG52YXIgX3BvaW50ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9pbnRlcjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5leHBvcnRzLmVhc2luZyA9IF9lYXNpbmc7XG5cbi8vIEhlbHBlcnNcblxuZXhwb3J0cy5jYWxjID0gX2NhbGM7XG5leHBvcnRzLmZpbHRlciA9IF9maWx0ZXI7XG5cbi8vIEFjdGlvbnNcblxuZXhwb3J0cy5BY3Rpb24gPSBfYWN0aW9uczIuZGVmYXVsdDtcbmV4cG9ydHMudHdlZW4gPSBfdHdlZW4zLmRlZmF1bHQ7XG5leHBvcnRzLnRyYWNrID0gX3RyYWNrMy5kZWZhdWx0O1xuZXhwb3J0cy5waHlzaWNzID0gX3BoeXNpY3MzLmRlZmF1bHQ7XG5leHBvcnRzLnBhcmFsbGVsID0gX3BhcmFsbGVsMy5kZWZhdWx0O1xuZXhwb3J0cy5jaGFpbiA9IF9jaGFpbjMuZGVmYXVsdDtcbmV4cG9ydHMuZGVsYXkgPSBfZGVsYXkzLmRlZmF1bHQ7XG5leHBvcnRzLmNyb3NzRmFkZSA9IF9jcm9zc0ZhZGUzLmRlZmF1bHQ7XG5leHBvcnRzLmNvbXBvc2l0ZSA9IF9jb21wb3NpdGUzLmRlZmF1bHQ7XG5cbi8vIElucHV0XG5cbmV4cG9ydHMucG9pbnRlciA9IF9wb2ludGVyMy5kZWZhdWx0O1xuXG4vLyBleHBvcnQgeyBjb2xvciB9IGZyb20gJy4vdmFsdWUvdHlwZXMnO1xuXG4vL2V4cG9ydCBjc3NSZW5kZXIgZnJvbSAnLi9yZW5kZXIvY3NzJztcblxuLy8gZXhwb3J0IHRpbWVsaW5lIGZyb20gJy4vaW5jL3RpbWVsaW5lJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2IzQnRiM1JwYjI0dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHpRa0ZGUlRzN096czdPM05DUVVOQk96czdPenM3YzBKQlEwRTdPenM3T3p0elFrRkRRVHM3T3pzN08zTkNRVU5CT3pzN096czdjMEpCUTBFN096czdPenR6UWtGRFFUczdPenM3TzNOQ1FVTkJPenM3T3pzN2MwSkJRMEU3T3pzN096dHpRa0ZEUVRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMUZCU1ZVN096czdVVUZEUVR0UlFVTkJPenM3TzFGQlIwdzdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CT3pzN08xRkJSMEVpTENKbWFXeGxJam9pY0c5d2JXOTBhVzl1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHZJRVp5WVcxbGMzbHVZeUJ6WTJobFpIVnNaWEp6WEc1bGVIQnZjblFnZTF4dUlDQnZia1p5WVcxbFUzUmhjblFzWEc0Z0lHOXVSbkpoYldWVmNHUmhkR1VzWEc0Z0lHOXVSbkpoYldWU1pXNWtaWElzWEc0Z0lHOXVSbkpoYldWRmJtUXNYRzRnSUdOaGJtTmxiRTl1Um5KaGJXVlRkR0Z5ZEN4Y2JpQWdZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU3hjYmlBZ1kyRnVZMlZzVDI1R2NtRnRaVkpsYm1SbGNpeGNiaUFnWTJGdVkyVnNUMjVHY21GdFpVVnVaQ3hjYmlBZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbExGeHVJQ0JqZFhKeVpXNTBSbkpoYldWVWFXMWxjM1JoYlhCY2JuMGdabkp2YlNBbkxpOW1jbUZ0WlhONWJtTW5PMXh1WEc0dkx5QklaV3h3WlhKelhHNWxlSEJ2Y25RZ0tpQmhjeUJsWVhOcGJtY2dabkp2YlNBbkxpOWxZWE5wYm1jbk8xeHVaWGh3YjNKMElDb2dZWE1nWTJGc1l5Qm1jbTl0SUNjdUwybHVZeTlqWVd4akp6dGNibVY0Y0c5eWRDQXFJR0Z6SUdacGJIUmxjaUJtY205dElDY3VMMmx1WXk5bWFXeDBaWEp6Snp0Y2JseHVMeThnUVdOMGFXOXVjMXh1Wlhod2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUwyRmpkR2x2Ym5Nbk8xeHVaWGh3YjNKMElIUjNaV1Z1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTkwZDJWbGJpYzdYRzVsZUhCdmNuUWdkSEpoWTJzZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDNSeVlXTnJKenRjYm1WNGNHOXlkQ0J3YUhsemFXTnpJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OXdhSGx6YVdOekp6dGNibVY0Y0c5eWRDQndZWEpoYkd4bGJDQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdmNHRnlZV3hzWld3bk8xeHVaWGh3YjNKMElHTm9ZV2x1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlqYUdGcGJpYzdYRzVsZUhCdmNuUWdaR1ZzWVhrZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDJSbGJHRjVKenRjYm1WNGNHOXlkQ0JqY205emMwWmhaR1VnWm5KdmJTQW5MaTloWTNScGIyNXpMMk55YjNOekxXWmhaR1VuTzF4dVpYaHdiM0owSUdOdmJYQnZjMmwwWlNCbWNtOXRJQ2N1TDJGamRHbHZibk12WTI5dGNHOXphWFJsSnp0Y2JseHVMeThnU1c1d2RYUmNibVY0Y0c5eWRDQndiMmx1ZEdWeUlHWnliMjBnSnk0dmFXNXdkWFF2Y0c5cGJuUmxjaWM3WEc1Y2JpOHZJR1Y0Y0c5eWRDQjdJR052Ykc5eUlIMGdabkp2YlNBbkxpOTJZV3gxWlM5MGVYQmxjeWM3WEc1Y2JseHVMeTlsZUhCdmNuUWdZM056VW1WdVpHVnlJR1p5YjIwZ0p5NHZjbVZ1WkdWeUwyTnpjeWM3WEc1Y2JseHVMeThnWlhod2IzSjBJSFJwYldWc2FXNWxJR1p5YjIwZ0p5NHZhVzVqTDNScGJXVnNhVzVsSnp0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNtb290aCA9IGV4cG9ydHMucmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5kaXN0YW5jZSA9IGV4cG9ydHMuZGlsYXRlID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5hbmdsZSA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIFpFUk9fUE9JTlQgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHo6IDBcbn07XG5cbnZhciBkaXN0YW5jZTFEID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKTtcbn07XG5cbi8qXG4gIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gIFxuICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgYXJlIGF0IDAsMFxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xudmFyIGFuZ2xlID0gZXhwb3J0cy5hbmdsZSA9IGZ1bmN0aW9uIChhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gWkVST19QT0lOVCA6IGFyZ3VtZW50c1sxXTtcbiAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xufTtcblxuLypcbiAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xudmFyIGRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBmdW5jdGlvbiAoZGVncmVlcykge1xuICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG59O1xuXG4vKlxuICBEaWxhdGVcbiAgXG4gIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICBcbiAgYSAtLS0tLS0tLS0gYlxuICBcbiAgdG9cbiAgXG4gIGEgLS0tLSBiXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbnZhciBkaWxhdGUgPSBleHBvcnRzLmRpbGF0ZSA9IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICByZXR1cm4gYSArIChiIC0gYSkgKiBkaWxhdGlvbjtcbn07XG5cbi8qXG4gIERpc3RhbmNlXG4gIFxuICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbnZhciBkaXN0YW5jZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBmdW5jdGlvbiAoYSkge1xuICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG5cbiAgLy8gMUQgZGltZW5zaW9uc1xuICBpZiAoKDAsIF91dGlscy5pc051bSkoYSkpIHtcbiAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gIH0gZWxzZSB7XG4gICAgICB2YXIgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgICB2YXIgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgICB2YXIgekRlbHRhID0gKDAsIF91dGlscy5pc051bSkoYS56KSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGVsdGEsIDIpICsgTWF0aC5wb3coeURlbHRhLCAyKSArIE1hdGgucG93KHpEZWx0YSwgMikpO1xuICAgIH1cbn07XG5cbi8qXG4gIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbnZhciBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHByb2dyZXNzKSB7XG4gIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG52YXIgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZnVuY3Rpb24gKGZyb20sIHRvLCB2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcbn07XG5cbi8qXG4gIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gIFxuICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbnZhciBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgfTtcbn07XG5cbi8qXG4gIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xufTtcblxuLypcbiAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gIFxuICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4qL1xudmFyIHJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAoY3VycmVudCwgcmVsYXRpdmUpIHtcbiAgdmFyIG5ld1ZhbHVlID0gY3VycmVudDtcbiAgdmFyIGVxdWF0aW9uID0gcmVsYXRpdmUuc3BsaXQoJz0nKTtcbiAgdmFyIG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG5cbiAgdmFyIF9maW5kVmFsdWVBbmRVbml0ID0gKDAsIF91dGlscy5maW5kVmFsdWVBbmRVbml0KShlcXVhdGlvblsxXSk7XG5cbiAgdmFyIHVuaXQgPSBfZmluZFZhbHVlQW5kVW5pdC51bml0O1xuICB2YXIgdmFsdWUgPSBfZmluZFZhbHVlQW5kVW5pdC52YWx1ZTtcblxuXG4gIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgIGNhc2UgJysnOlxuICAgICAgbmV3VmFsdWUgKz0gdmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICctJzpcbiAgICAgIG5ld1ZhbHVlIC09IHZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnKic6XG4gICAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy8nOlxuICAgICAgbmV3VmFsdWUgLz0gdmFsdWU7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGlmICh1bml0KSB7XG4gICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgfVxuXG4gIHJldHVybiBuZXdWYWx1ZTtcbn07XG5cbi8qXG4gIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbikge1xuICB2YXIgc21vb3RoaW5nID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1szXTtcbiAgcmV0dXJuICgwLCBfdXRpbHMudG9EZWNpbWFsKShvbGRWYWx1ZSArIGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpO1xufTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZnVuY3Rpb24gKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gKDAsIF91dGlscy5pc051bSkoeHBzKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xufTtcblxuLypcbiAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgcmV0dXJuIHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcbn07XG5cbi8qXG4gIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gIFxuICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbnZhciBzdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGZ1bmN0aW9uIChzdGVwcywgcHJvZ3Jlc3MpIHtcbiAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gIHZhciB0YXJnZXQgPSAxIC0gMSAvIHN0ZXBzO1xuICB2YXIgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZZMkZzWXk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96dEJRVTlCTEVsQlFVMHNZVUZCWVR0QlFVTnFRaXhMUVVGSExFTkJRVWc3UVVGRFFTeExRVUZITEVOQlFVZzdRVUZEUVN4TFFVRkhMRU5CUVVnN1EwRklTVHM3UVVGTlRpeEpRVUZOTEdGQlFXRXNWVUZCUXl4RFFVRkVMRVZCUVVrc1EwRkJTanRUUVVGVkxFdEJRVXNzUjBGQlRDeERRVUZUTEVsQlFVa3NRMEZCU2p0RFFVRnVRanM3T3pzN096czdPenM3TzBGQldWb3NTVUZCVFN4M1FrRkJVU3hWUVVGRExFTkJRVVE3VFVGQlNTd3dSRUZCU1R0VFFVRmxMR2xDUVVGcFFpeExRVUZMTEV0QlFVd3NRMEZCVnl4RlFVRkZMRU5CUVVZc1IwRkJUU3hGUVVGRkxFTkJRVVlzUlVGQlN5eEZRVUZGTEVOQlFVWXNSMEZCVFN4RlFVRkZMRU5CUVVZc1EwRkJOME03UTBGQmRrSTdPenM3T3pzN08wRkJVV1FzU1VGQlRTdzRRMEZCYlVJc1ZVRkJReXhQUVVGRU8xTkJRV0VzVlVGQlZTeExRVUZMTEVWQlFVd3NSMEZCVlN4SFFVRndRanREUVVGaU96czdPenM3T3pzN096czdPenM3T3pzN096dEJRVzlDZWtJc1NVRkJUU3d3UWtGQlV5eFZRVUZETEVOQlFVUXNSVUZCU1N4RFFVRktMRVZCUVU4c1VVRkJVRHRUUVVGdlFpeEpRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRktMRU5CUVVRc1IwRkJWU3hSUVVGV08wTkJRWHBDT3pzN096czdPenM3T3p0QlFWZG1MRWxCUVUwc09FSkJRVmNzVlVGQlF5eERRVUZFTEVWQlFYVkNPMDFCUVc1Q0xEQkVRVUZKTERCQ1FVRmxPenM3UVVGRk4wTXNUVUZCU1N4clFrRkJUU3hEUVVGT0xFTkJRVW9zUlVGQll6dEJRVU5hTEZkQlFVOHNWMEZCVnl4RFFVRllMRVZCUVdNc1EwRkJaQ3hEUVVGUU96czdRVUZFV1N4SFFVRmtMRTFCU1U4N1FVRkRUQ3hWUVVGTkxGTkJRVk1zVjBGQlZ5eEZRVUZGTEVOQlFVWXNSVUZCU3l4RlFVRkZMRU5CUVVZc1EwRkJla0lzUTBGRVJEdEJRVVZNTEZWQlFVMHNVMEZCVXl4WFFVRlhMRVZCUVVVc1EwRkJSaXhGUVVGTExFVkJRVVVzUTBGQlJpeERRVUY2UWl4RFFVWkVPMEZCUjB3c1ZVRkJUU3hUUVVGVExHbENRVUZETEVOQlFVMHNSVUZCUlN4RFFVRkdMRU5CUVZBc1IwRkJaU3hYUVVGWExFVkJRVVVzUTBGQlJpeEZRVUZMTEVWQlFVVXNRMEZCUml4RFFVRXZRaXhIUVVGelF5eERRVUYwUXl4RFFVaFdPenRCUVV0TUxHRkJRVThzUzBGQlN5eEpRVUZNTEVOQlFWVXNVMEZCUXl4UlFVRlZMRVZCUVZnc1dVRkJhVUlzVVVGQlZTeEZRVUV6UWl4WlFVRnBReXhSUVVGVkxFVkJRVE5ETEVOQlFXcENMRU5CVEVzN1MwRktVRHREUVVaelFqczdPenM3T3pzN096czdPenRCUVRCQ2FrSXNTVUZCVFN4elJFRkJkVUlzVlVGQlF5eEpRVUZFTEVWQlFVOHNSVUZCVUN4RlFVRlhMRkZCUVZnN1UwRkJkMElzUTBGQlJ5eFJRVUZHTEVkQlFXRXNTVUZCWWl4SFFVRnpRaXhYUVVGWExFVkJRVmdzUjBGQmFVSXNTVUZCZUVNN1EwRkJlRUk3T3pzN096czdPenM3T3pzN08wRkJZemRDTEVsQlFVMHNjMFJCUVhWQ0xGVkJRVU1zU1VGQlJDeEZRVUZQTEVWQlFWQXNSVUZCVnl4TFFVRllPMU5CUVhGQ0xFTkJRVU1zVVVGQlVTeEpRVUZTTEVOQlFVUXNTVUZCYTBJc1MwRkJTeXhKUVVGTUxFTkJRV3hDTzBOQlFYSkNPenM3T3pzN096czdPMEZCVlRkQ0xFbEJRVTBzWjBWQlFUUkNMRlZCUVVNc1RVRkJSQ3hGUVVGVExFdEJRVlFzUlVGQlowSXNVVUZCYUVJc1JVRkJOa0k3UVVGRGNFVXNWVUZCVVN4cFFrRkJhVUlzUzBGQmFrSXNRMEZCVWl4RFFVUnZSVHM3UVVGSGNFVXNVMEZCVHp0QlFVTk1MRTlCUVVjc1YwRkJWeXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFWZ3NSMEZCTmtJc1QwRkJUeXhEUVVGUU8wRkJRMmhETEU5QlFVY3NWMEZCVnl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRVmdzUjBGQk5rSXNUMEZCVHl4RFFVRlFPMGRCUm14RExFTkJTRzlGTzBOQlFUZENPenM3T3pzN096dEJRV1ZzUXl4SlFVRk5MRGhEUVVGdFFpeFZRVUZETEU5QlFVUTdVMEZCWVN4VlFVRlZMRWRCUVZZc1IwRkJaMElzUzBGQlN5eEZRVUZNTzBOQlFUZENPenM3T3pzN096czdPenM3UVVGWmVrSXNTVUZCVFN4M1EwRkJaMElzVlVGQlF5eFBRVUZFTEVWQlFWVXNVVUZCVml4RlFVRjFRanRCUVVOc1JDeE5RVUZKTEZkQlFWY3NUMEZCV0N4RFFVUTRRenRCUVVWc1JDeE5RVUZOTEZkQlFWY3NVMEZCVXl4TFFVRlVMRU5CUVdVc1IwRkJaaXhEUVVGWUxFTkJSalJETzBGQlIyeEVMRTFCUVUwc1YwRkJWeXhUUVVGVExFTkJRVlFzUTBGQldDeERRVWcwUXpzN01FSkJTVFZDTERaQ1FVRnBRaXhUUVVGVExFTkJRVlFzUTBGQmFrSXNSVUZLTkVJN08wMUJTVFZETERoQ1FVbzBRenROUVVsMFF5eG5RMEZLYzBNN096dEJRVTFzUkN4VlFVRlJMRmRCUVZjc1MwRkJXQ3hEUVVGU0xFTkJUbXRFT3p0QlFWRnNSQ3hWUVVGUkxGRkJRVkk3UVVGRFFTeFRRVUZMTEVkQlFVdzdRVUZEUlN4clFrRkJXU3hMUVVGYUxFTkJSRVk3UVVGRlJTeFpRVVpHTzBGQlJFRXNVMEZKU3l4SFFVRk1PMEZCUTBVc2EwSkJRVmtzUzBGQldpeERRVVJHTzBGQlJVVXNXVUZHUmp0QlFVcEJMRk5CVDBzc1IwRkJURHRCUVVORkxHdENRVUZaTEV0QlFWb3NRMEZFUmp0QlFVVkZMRmxCUmtZN1FVRlFRU3hUUVZWTExFZEJRVXc3UVVGRFJTeHJRa0ZCV1N4TFFVRmFMRU5CUkVZN1FVRkZSU3haUVVaR08wRkJWa0VzUjBGU2EwUTdPMEZCZFVKc1JDeE5RVUZKTEVsQlFVb3NSVUZCVlR0QlFVTlNMR2RDUVVGWkxFbEJRVm9zUTBGRVVUdEhRVUZXT3p0QlFVbEJMRk5CUVU4c1VVRkJVQ3hEUVROQ2EwUTdRMEZCZGtJN096czdPenM3T3pzN1FVRnpRM1JDTEVsQlFVMHNNRUpCUVZNc1ZVRkJReXhSUVVGRUxFVkJRVmNzVVVGQldDeEZRVUZ4UWl4UlFVRnlRanROUVVFclFpeHJSVUZCV1R0VFFVRk5MSE5DUVVGVkxGZEJRVmtzV1VGQldTeFhRVUZYTEZGQlFWZ3NRMEZCV2l4SFFVRnRReXhMUVVGTExFZEJRVXdzUTBGQlV5eFRRVUZVTEVWQlFXOUNMRkZCUVhCQ0xFTkJRVzVETzBOQlFYWkZPenM3T3pzN096dEJRVkZtTEVsQlFVMHNkME5CUVdkQ0xGVkJRVU1zUjBGQlJDeEZRVUZOTEdGQlFVNDdVMEZCZDBJc2FVSkJRVU1zUTBGQlRTeEhRVUZPTEVOQlFVUXNSMEZCWlN4UFFVRlBMRTlCUVU4c1lVRkJVQ3hEUVVGUUxFZEJRU3RDTEVOQlFUbERPME5CUVhoQ096czdPenM3T3p0QlFWRjBRaXhKUVVGTkxEQkRRVUZwUWl4VlFVRkRMRkZCUVVRc1JVRkJWeXhoUVVGWU8xTkJRVFpDTEZsQlFWa3NUMEZCVHl4aFFVRlFMRU5CUVZvN1EwRkJOMEk3T3pzN096czdPenRCUVZOMlFpeEpRVUZOTEhORFFVRmxMRlZCUVVNc1MwRkJSQ3hGUVVGUkxGRkJRVklzUlVGQmNVSTdRVUZETDBNc1RVRkJUU3hWUVVGVkxFdEJRVXNzVVVGQlVTeERRVUZTTEVOQlFVd3NRMEZFSzBJN1FVRkZMME1zVFVGQlRTeFRRVUZUTEVsQlFVc3NTVUZCU1N4TFFVRktMRU5CUmpKQ08wRkJSeTlETEUxQlFVMHNiVUpCUVcxQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEZkQlFWY3NUVUZCV0N4RlFVRnRRaXhEUVVFMVFpeERRVUZ1UWl4RFFVaDVRenM3UVVGTEwwTXNVMEZCVHl4TFFVRkxMRXRCUVV3c1EwRkJWeXh0UWtGQmJVSXNUMEZCYmtJc1EwRkJXQ3hIUVVGNVF5eFBRVUY2UXl4RFFVeDNRenREUVVGeVFpSXNJbVpwYkdVaU9pSmpZV3hqTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN1hHNGdJR2hoYzFCeWIzQmxjblI1TEZ4dUlDQnBjMDUxYlN4Y2JpQWdabWx1WkZaaGJIVmxRVzVrVlc1cGRDeGNiaUFnZEc5RVpXTnBiV0ZzWEc1OUlHWnliMjBnSnk0dmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCYVJWSlBYMUJQU1U1VUlEMGdlMXh1SUNCNE9pQXdMRnh1SUNCNU9pQXdMRnh1SUNCNk9pQXdYRzU5TzF4dVhHNWpiMjV6ZENCa2FYTjBZVzVqWlRGRUlEMGdLR0VzSUdJcElEMCtJRTFoZEdndVlXSnpLR0VnTFNCaUtUdGNibHh1THlwY2JpQWdRVzVuYkdVZ1ltVjBkMlZsYmlCd2IybHVkSE5jYmlBZ1hHNGdJRlJ5WVc1emJHRjBaWE1nZEdobElHaDVjRzkwYUdWMGFXTmhiQ0JzYVc1bElITnZJSFJvWVhRZ2RHaGxJQ2RtY205dEp5QmpiMjl5WkdsdVlYUmxjMXh1SUNCaGNtVWdZWFFnTUN3d1hHNGdJRnh1SUNCQWNHRnlZVzBnVzI5aWFtVmpkRjA2SUZnZ1lXNWtJRmtnWTI5dmNtUnBibUYwWlhNZ2IyWWdabkp2YlNCd2IybHVkRnh1SUNCQWNHRnlZVzBnVzI5aWFtVmpkRjA2SUZnZ1lXNWtJRmtnWTI5eVpHbHVZWFJsY3lCdlppQjBieUJ3YjJsdWRGeHVJQ0JBY21WMGRYSnVJRnR5WVdScFlXNWRPaUJCYm1kc1pTQmlaWFIzWldWdUlIUm9aU0IwZDI4Z2NHOXBiblJ6SUdsdUlISmhaR2xoYm5OY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1lXNW5iR1VnUFNBb1lTd2dZaUE5SUZwRlVrOWZVRTlKVGxRcElEMCtJSEpoWkdsaGJuTlViMFJsWjNKbFpYTW9UV0YwYUM1aGRHRnVNaWhoTG5nZ0xTQmlMbmdzSUdFdWVTQXRJR0l1ZVNrcE8xeHVYRzR2S2x4dUlDQkRiMjUyWlhKMElHUmxaM0psWlhNZ2RHOGdjbUZrYVdGdWMxeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCa1pXZHlaV1Z6WEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlISmhaR2xoYm5OY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHVm5jbVZsYzFSdlVtRmthV0Z1Y3lBOUlDaGtaV2R5WldWektTQTlQaUJrWldkeVpXVnpJQ29nVFdGMGFDNVFTU0F2SURFNE1EdGNibHh1THlwY2JpQWdSR2xzWVhSbFhHNGdJRnh1SUNCRGFHRnVaMlVnZEdobElIQnliMmR5WlhOemFXOXVJR0psZEhkbFpXNGdZU0JoYm1RZ1lpQmhZMk52Y21ScGJtY2dkRzhnWkdsc1lYUnBiMjR1WEc0Z0lGeHVJQ0JUYnlCa2FXeGhkR2x2YmlBOUlEQXVOU0IzYjNWc1pDQmphR0Z1WjJWY2JpQWdYRzRnSUdFZ0xTMHRMUzB0TFMwdElHSmNiaUFnWEc0Z0lIUnZYRzRnSUZ4dUlDQmhJQzB0TFMwZ1lseHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCUWNtVjJhVzkxY3lCMllXeDFaVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVOMWNuSmxiblFnZG1Gc2RXVmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJFYVd4aGRHVWdjSEp2WjNKbGMzTWdZbmtnZUZ4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlFjbVYyYVc5MWN5QjJZV3gxWlNCd2JIVnpJSFJvWlNCa2FXeGhkR1ZrSUdScFptWmxjbVZ1WTJWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHbHNZWFJsSUQwZ0tHRXNJR0lzSUdScGJHRjBhVzl1S1NBOVBpQmhJQ3NnS0NoaUlDMGdZU2tnS2lCa2FXeGhkR2x2YmlrN1hHNWNiaThxWEc0Z0lFUnBjM1JoYm1ObFhHNGdJRnh1SUNCU1pYUjFjbTV6SUhSb1pTQmthWE4wWVc1alpTQmlaWFIzWldWdUlIUjNieUJ1SUdScGJXVnVjMmx2Ym1Gc0lIQnZhVzUwY3k1Y2JpQWdYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBMMjUxYldKbGNsMDZJSGdnWVc1a0lIa2diM0lnYW5WemRDQjRJRzltSUhCdmFXNTBJRUZjYmlBZ1FIQmhjbUZ0SUZ0dlltcGxZM1F2Ym5WdFltVnlYVG9nS0c5d2RHbHZibUZzS1RvZ2VDQmhibVFnZVNCdmNpQnFkWE4wSUhnZ2IyWWdjRzlwYm5RZ1FseHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJVYUdVZ1pHbHpkR0Z1WTJVZ1ltVjBkMlZsYmlCMGFHVWdkSGR2SUhCdmFXNTBjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrYVhOMFlXNWpaU0E5SUNoaExDQmlJRDBnV2tWU1QxOVFUMGxPVkNrZ1BUNGdlMXh1SUNBdkx5QXhSQ0JrYVcxbGJuTnBiMjV6WEc0Z0lHbG1JQ2hwYzA1MWJTaGhLU2tnZTF4dUlDQWdJSEpsZEhWeWJpQmthWE4wWVc1alpURkVLR0VzSUdJcE8xeHVYRzRnSUM4dklFMTFiSFJwTFdScGJXVnVjMmx2Ym1Gc1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ1kyOXVjM1FnZUVSbGJIUmhJRDBnWkdsemRHRnVZMlV4UkNoaExuZ3NJR0l1ZUNrN1hHNGdJQ0FnWTI5dWMzUWdlVVJsYkhSaElEMGdaR2x6ZEdGdVkyVXhSQ2hoTG5rc0lHSXVlU2s3WEc0Z0lDQWdZMjl1YzNRZ2VrUmxiSFJoSUQwZ0tHbHpUblZ0S0dFdWVpa3BJRDhnWkdsemRHRnVZMlV4UkNoaExub3NJR0l1ZWlrZ09pQXdPMXh1WEc0Z0lDQWdjbVYwZFhKdUlFMWhkR2d1YzNGeWRDZ29lRVJsYkhSaElDb3FJRElwSUNzZ0tIbEVaV3gwWVNBcUtpQXlLU0FySUNoNlJHVnNkR0VnS2lvZ01pa3BPMXh1SUNCOVhHNTlPMXh1WEc0dktseHVJQ0JXWVd4MVpTQnBiaUJ5WVc1blpTQm1jbTl0SUhCeWIyZHlaWE56WEc0Z0lGeHVJQ0JIYVhabGJpQmhJR3h2ZDJWeUlHeHBiV2wwSUdGdVpDQmhiaUIxY0hCbGNpQnNhVzFwZEN3Z2QyVWdjbVYwZFhKdUlIUm9aU0IyWVd4MVpTQjNhWFJvYVc1Y2JpQWdkR2hoZENCeVlXNW5aU0JoY3lCbGVIQnlaWE56WldRZ1lua2djSEp2WjNKbGMzTWdLR0VnYm5WdFltVnlJR1p5YjIwZ01DMHhLVnh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQk1iM2RsY2lCc2FXMXBkQ0J2WmlCeVlXNW5aVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWd2NHVnlJR3hwYldsMElHOW1JSEpoYm1kbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWR2hsSUhCeWIyZHlaWE56SUdKbGRIZGxaVzRnYkc5M1pYSWdZVzVrSUhWd2NHVnlJR3hwYldsMGN5QmxlSEJ5WlhOelpXUWdNQzB4WEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdGeklHTmhiR04xYkdGMFpXUWdabkp2YlNCd2NtOW5jbVZ6Y3lCM2FYUm9hVzRnY21GdVoyVWdLRzV2ZENCc2FXMXBkR1ZrSUhkcGRHaHBiaUJ5WVc1blpTbGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01nUFNBb1puSnZiU3dnZEc4c0lIQnliMmR5WlhOektTQTlQaUFvTFNCd2NtOW5jbVZ6Y3lBcUlHWnliMjBwSUNzZ0tIQnliMmR5WlhOeklDb2dkRzhwSUNzZ1puSnZiVHRjYmx4dUx5cGNiaUFnVUhKdlozSmxjM01nZDJsMGFHbHVJR2RwZG1WdUlISmhibWRsWEc0Z0lGeHVJQ0JIYVhabGJpQmhJR3h2ZDJWeUlHeHBiV2wwSUdGdVpDQmhiaUIxY0hCbGNpQnNhVzFwZEN3Z2QyVWdjbVYwZFhKdUlIUm9aU0J3Y205bmNtVnpjMXh1SUNBb1pYaHdjbVZ6YzJWa0lHRnpJR0VnYm5WdFltVnlJREF0TVNrZ2NtVndjbVZ6Wlc1MFpXUWdZbmtnZEdobElHZHBkbVZ1SUhaaGJIVmxMQ0JoYm1SY2JpQWdiR2x0YVhRZ2RHaGhkQ0J3Y205bmNtVnpjeUIwYnlCM2FYUm9hVzRnTUMweExseHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCTWIzZGxjaUJzYVcxcGRDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWY0hCbGNpQnNhVzFwZEZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUhSdklHWnBibVFnY0hKdlozSmxjM01nZDJsMGFHbHVJR2RwZG1WdUlISmhibWRsWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGQnliMmR5WlhOeklHOW1JSFpoYkhWbElIZHBkR2hwYmlCeVlXNW5aU0JoY3lCbGVIQnlaWE56WldRZ01DMHhYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsSUQwZ0tHWnliMjBzSUhSdkxDQjJZV3gxWlNrZ1BUNGdLSFpoYkhWbElDMGdabkp2YlNrZ0x5QW9kRzhnTFNCbWNtOXRLVHRjYmx4dUx5cGNiaUFnVUc5cGJuUWdabkp2YlNCaGJtZHNaU0JoYm1RZ1pHbHpkR0Z1WTJWY2JpQWdYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nTWtRZ2NHOXBiblFnYjJZZ2IzSnBaMmx1WEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1FXNW5iR1VnWm5KdmJTQnZjbWxuYVc1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkVhWE4wWVc1alpTQm1jbTl0SUc5eWFXZHBibHh1SUNCQWNtVjBkWEp1SUZ0dlltcGxZM1JkT2lCRFlXeGpkV3hoZEdWa0lESkVJSEJ2YVc1MFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElIQnZhVzUwUm5KdmJVRnVaMnhsUVc1a1JHbHpkR0Z1WTJVZ1BTQW9iM0pwWjJsdUxDQmhibWRzWlN3Z1pHbHpkR0Z1WTJVcElEMCtJSHRjYmlBZ1lXNW5iR1VnUFNCa1pXZHlaV1Z6Vkc5U1lXUnBZVzV6S0dGdVoyeGxLVHRjYmx4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUhnNklHUnBjM1JoYm1ObElDb2dUV0YwYUM1amIzTW9ZVzVuYkdVcElDc2diM0pwWjJsdUxuZ3NYRzRnSUNBZ2VUb2daR2x6ZEdGdVkyVWdLaUJOWVhSb0xuTnBiaWhoYm1kc1pTa2dLeUJ2Y21sbmFXNHVlVnh1SUNCOU8xeHVmVHRjYmx4dUx5cGNiaUFnUTI5dWRtVnlkQ0J5WVdScFlXNXpJSFJ2SUdSbFozSmxaWE5jYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdjbUZrYVdGdWMxeHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJrWldkeVpXVnpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSEpoWkdsaGJuTlViMFJsWjNKbFpYTWdQU0FvY21Ga2FXRnVjeWtnUFQ0Z2NtRmthV0Z1Y3lBcUlERTRNQ0F2SUUxaGRHZ3VVRWs3WEc1Y2JpOHFYRzRnSUVOaGJHTjFiR0YwWlNCeVpXeGhkR2wyWlNCMllXeDFaVnh1SUNCY2JpQWdWR0ZyWlhNZ2RHaGxJRzl3WlhKaGRHOXlJR0Z1WkNCMllXeDFaU0JtY205dElHRWdjM1J5YVc1bkxDQnBaU0JjSWlzOU5Wd2lMQ0JoYm1RZ1lYQndiR2xsYzF4dUlDQjBieUIwYUdVZ1kzVnljbVZ1ZENCMllXeDFaU0IwYnlCeVpYTnZiSFpsSUdFZ2JtVjNJSFJoY21kbGRDNWNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUZKbGJHRjBhWFpsSUhaaGJIVmxYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUU1bGR5QjJZV3gxWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCeVpXeGhkR2wyWlZaaGJIVmxJRDBnS0dOMWNuSmxiblFzSUhKbGJHRjBhWFpsS1NBOVBpQjdYRzRnSUd4bGRDQnVaWGRXWVd4MVpTQTlJR04xY25KbGJuUTdYRzRnSUdOdmJuTjBJR1Z4ZFdGMGFXOXVJRDBnY21Wc1lYUnBkbVV1YzNCc2FYUW9KejBuS1R0Y2JpQWdZMjl1YzNRZ2IzQmxjbUYwYjNJZ1BTQmxjWFZoZEdsdmJsc3dYVHRjYmlBZ2JHVjBJSHNnZFc1cGRDd2dkbUZzZFdVZ2ZTQTlJR1pwYm1SV1lXeDFaVUZ1WkZWdWFYUW9aWEYxWVhScGIyNWJNVjBwTzF4dVhHNGdJSFpoYkhWbElEMGdjR0Z5YzJWR2JHOWhkQ2gyWVd4MVpTazdYRzVjYmlBZ2MzZHBkR05vSUNodmNHVnlZWFJ2Y2lrZ2UxeHVJQ0JqWVhObElDY3JKenBjYmlBZ0lDQnVaWGRXWVd4MVpTQXJQU0IyWVd4MVpUdGNiaUFnSUNCaWNtVmhhenRjYmlBZ1kyRnpaU0FuTFNjNlhHNGdJQ0FnYm1WM1ZtRnNkV1VnTFQwZ2RtRnNkV1U3WEc0Z0lDQWdZbkpsWVdzN1hHNGdJR05oYzJVZ0p5b25PbHh1SUNBZ0lHNWxkMVpoYkhWbElDbzlJSFpoYkhWbE8xeHVJQ0FnSUdKeVpXRnJPMXh1SUNCallYTmxJQ2N2SnpwY2JpQWdJQ0J1WlhkV1lXeDFaU0F2UFNCMllXeDFaVHRjYmlBZ0lDQmljbVZoYXp0Y2JpQWdmVnh1SUNCY2JpQWdhV1lnS0hWdWFYUXBJSHRjYmlBZ0lDQnVaWGRXWVd4MVpTQXJQU0IxYm1sME8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlHNWxkMVpoYkhWbE8xeHVmVHRjYmx4dUx5cGNiaUFnUm5KaGJXVnlZWFJsTFdsdVpHVndaVzVrWlc1MElITnRiMjkwYUdsdVoxeHVYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVG1WM0lIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1QyeGtJSFpoYkhWbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZElDaHZjSFJwYjI1aGJDazZJRk50YjI5MGFHbHVaeUFvTUNCcGN5QnViMjVsS1Z4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemJXOXZkR2dnUFNBb2JtVjNWbUZzZFdVc0lHOXNaRlpoYkhWbExDQmtkWEpoZEdsdmJpd2djMjF2YjNSb2FXNW5JRDBnTUNrZ1BUNGdkRzlFWldOcGJXRnNLRzlzWkZaaGJIVmxJQ3NnS0dSMWNtRjBhVzl1SUNvZ0tHNWxkMVpoYkhWbElDMGdiMnhrVm1Gc2RXVXBJQzhnVFdGMGFDNXRZWGdvYzIxdmIzUm9hVzVuTENCa2RYSmhkR2x2YmlrcEtUdGNibHh1THlwY2JpQWdRMjl1ZG1WeWRDQjRJSEJsY2lCelpXTnZibVFnZEc4Z2NHVnlJR1p5WVcxbElIWmxiRzlqYVhSNUlHSmhjMlZrSUc5dUlHWndjMXh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZibWwwSUhCbGNpQnpaV052Ym1SY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkdjbUZ0WlNCa2RYSmhkR2x2YmlCcGJpQnRjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Y0dWbFpGQmxja1p5WVcxbElEMGdLSGh3Y3l3Z1puSmhiV1ZFZFhKaGRHbHZiaWtnUFQ0Z0tHbHpUblZ0S0hod2N5a3BJRDhnZUhCeklDOGdLREV3TURBZ0x5Qm1jbUZ0WlVSMWNtRjBhVzl1S1NBNklEQTdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdkbVZzYjJOcGRIa2dhVzUwYnlCMlpXeHBZMmwwZVNCd1pYSWdjMlZqYjI1a1hHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWdWFYUWdjR1Z5SUdaeVlXMWxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNGdhVzRnYlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQmxaV1JRWlhKVFpXTnZibVFnUFNBb2RtVnNiMk5wZEhrc0lHWnlZVzFsUkhWeVlYUnBiMjRwSUQwK0lIWmxiRzlqYVhSNUlDb2dLREV3TURBZ0x5Qm1jbUZ0WlVSMWNtRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ1EzSmxZWFJsSUhOMFpYQndaV1FnZG1WeWMybHZiaUJ2WmlBd0xURWdjSEp2WjNKbGMzTmNiaUFnWEc0Z0lFQndZWEpoYlNCYmFXNTBYVG9nVG5WdFltVnlJRzltSUhOMFpYQnpYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJUZEdWd2NHVmtJSFpoYkhWbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITjBaWEJRY205bmNtVnpjeUE5SUNoemRHVndjeXdnY0hKdlozSmxjM01wSUQwK0lIdGNiaUFnWTI5dWMzUWdjMlZuYldWdWRDQTlJREVnTHlBb2MzUmxjSE1nTFNBeEtUdGNiaUFnWTI5dWMzUWdkR0Z5WjJWMElEMGdNU0F0SUNneElDOGdjM1JsY0hNcE8xeHVJQ0JqYjI1emRDQndjbTluY21WemMwOW1WR0Z5WjJWMElEMGdUV0YwYUM1dGFXNG9jSEp2WjNKbGMzTWdMeUIwWVhKblpYUXNJREVwTzF4dVhHNGdJSEpsZEhWeWJpQk5ZWFJvTG1ac2IyOXlLSEJ5YjJkeVpYTnpUMlpVWVhKblpYUWdMeUJ6WldkdFpXNTBLU0FxSUhObFoyMWxiblE3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcHMgPSBleHBvcnRzLmNsYW1wID0gZXhwb3J0cy5jbGFtcE92ZXIgPSBleHBvcnRzLmNsYW1wVW5kZXIgPSBleHBvcnRzLmludGVycG9sYXRlID0gZXhwb3J0cy5mbG93ID0gZXhwb3J0cy5hcHBlbmRVbml0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuL2NhbGMnKTtcblxuLyoqXG4gKiBBcHBlbmQgVW5pdFxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBhcHBlbmQgdGhlIHVuaXQgdG8gYSBnaXZlbiB2YWx1ZVxuICogYXBwZW5kVW5pdCgncHgnKSgyMCkgLT4gJzIwcHgnXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVuaXQpXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBhcHBlbmRVbml0ID0gZXhwb3J0cy5hcHBlbmRVbml0ID0gZnVuY3Rpb24gKHVuaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuICcnICsgdiArIHVuaXQ7XG4gIH07XG59O1xuXG4vKipcbiAqIEZsb3dcbiAqIENvbXBvc2Ugb3RoZXIgdHJhbnNmb3JtZXJzIHRvIHJ1biBsaW5lYXJpbHlcbiAqIGZsb3cobWluKDIwKSwgbWF4KDQwKSlcbiAqIEBwYXJhbSAgey4uLmZ1bmN0aW9uc30gdHJhbnNmb3JtZXJzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xudmFyIGZsb3cgPSBleHBvcnRzLmZsb3cgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB0cmFuc2Zvcm1lcnMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB0cmFuc2Zvcm1lcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG5cbnZhciBpbnRlcnBvbGF0ZSA9IGV4cG9ydHMuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiAoaW5wdXQsIG91dHB1dCwgcmFuZ2VFYXNpbmcpIHtcbiAgdmFyIHJhbmdlTGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICB2YXIgZmluYWxJbmRleCA9IHJhbmdlTGVuZ3RoIC0gMTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1pbmltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPD0gaW5wdXRbMF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbMF07XG4gICAgfVxuXG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtYXhpbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2ID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgIH1cblxuICAgIHZhciBpID0gMDtcblxuICAgIC8vIEZpbmQgaW5kZXggb2YgcmFuZ2Ugc3RhcnRcbiAgICBmb3IgKDsgaSA8IHJhbmdlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpbnB1dFtpXSA+IHYgfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJvZ3Jlc3NJblJhbmdlID0gKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbnB1dFtpXSwgaW5wdXRbaSArIDFdLCB2KTtcbiAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IHJhbmdlRWFzaW5nID8gcmFuZ2VFYXNpbmdbaV0ocHJvZ3Jlc3NJblJhbmdlKSA6IHByb2dyZXNzSW5SYW5nZTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShvdXRwdXRbaV0sIG91dHB1dFtpICsgMV0sIGVhc2VkUHJvZ3Jlc3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBDbGFtcCB2YWx1ZSBiZXR3ZWVuXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlc3RyaWN0IGEgZ2l2ZW4gdmFsdWUgYmV0d2VlbiBgbWluYCBhbmQgYG1heGBcbiAqIEBwYXJhbSAge251bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgY2xhbXBVbmRlciA9IGV4cG9ydHMuY2xhbXBVbmRlciA9IGZ1bmN0aW9uIChtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHYsIG1heCk7XG4gIH07XG59O1xudmFyIGNsYW1wT3ZlciA9IGV4cG9ydHMuY2xhbXBPdmVyID0gZnVuY3Rpb24gKG1pbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgodiwgbWluKTtcbiAgfTtcbn07XG52YXIgY2xhbXAgPSBleHBvcnRzLmNsYW1wID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIHJldHVybiBmbG93KGNsYW1wT3ZlcihtaW4pLCBjbGFtcFVuZGVyKG1heCkpO1xufTtcblxudmFyIHN0ZXBzID0gZXhwb3J0cy5zdGVwcyA9IGZ1bmN0aW9uIChzdGVwcywgbWluLCBtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHByb2dyZXNzID0gKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShtaW4sIG1heCwgdik7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5zdGVwUHJvZ3Jlc3MpKHN0ZXBzLCBwcm9ncmVzcyk7XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlptbHNkR1Z5Y3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96czdPenM3T3pzN1FVRlRUeXhKUVVGTkxHdERRVUZoTEZWQlFVTXNTVUZCUkR0VFFVRlZMRlZCUVVNc1EwRkJSRHRuUWtGQlZTeEpRVUZKTzBkQlFXUTdRMEZCVmpzN096czdPenM3TzBGQlUyNUNMRWxCUVUwc2MwSkJRVThzV1VGQmNVSTdiME5CUVdwQ096dEhRVUZwUWpzN1FVRkRka01zVFVGQlRTeHJRa0ZCYTBJc1lVRkJZU3hOUVVGaUxFTkJSR1U3UVVGRmRrTXNUVUZCU1N4SlFVRkpMRU5CUVVvc1EwRkdiVU03TzBGQlNYWkRMRk5CUVU4c1ZVRkJReXhEUVVGRUxFVkJRVTg3UVVGRFdpeFRRVUZMTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1pVRkJTaXhGUVVGeFFpeEhRVUZxUXl4RlFVRnpRenRCUVVOd1F5eFZRVUZKTEdGQlFXRXNRMEZCWWl4RlFVRm5RaXhEUVVGb1FpeERRVUZLTEVOQlJHOURPMHRCUVhSRE96dEJRVWxCTEZkQlFVOHNRMEZCVUN4RFFVeFpPMGRCUVZBc1EwRktaME03UTBGQmNrSTdPMEZCWVdJc1NVRkJUU3h2UTBGQll5eFZRVUZETEV0QlFVUXNSVUZCVVN4TlFVRlNMRVZCUVdkQ0xGZEJRV2hDTEVWQlFXZERPMEZCUTNwRUxFMUJRVTBzWTBGQll5eE5RVUZOTEUxQlFVNHNRMEZFY1VNN1FVRkZla1FzVFVGQlRTeGhRVUZoTEdOQlFXTXNRMEZCWkN4RFFVWnpRenM3UVVGSmVrUXNVMEZCVHl4VlFVRkRMRU5CUVVRc1JVRkJUenM3UVVGRldpeFJRVUZKTEV0QlFVc3NUVUZCVFN4RFFVRk9MRU5CUVV3c1JVRkJaVHRCUVVOcVFpeGhRVUZQTEU5QlFVOHNRMEZCVUN4RFFVRlFMRU5CUkdsQ08wdEJRVzVDT3pzN1FVRkdXU3hSUVU5U0xFdEJRVXNzVFVGQlRTeFZRVUZPTEVOQlFVd3NSVUZCZDBJN1FVRkRNVUlzWVVGQlR5eFBRVUZQTEZWQlFWQXNRMEZCVUN4RFFVUXdRanRMUVVFMVFqczdRVUZKUVN4UlFVRkpMRWxCUVVrc1EwRkJTanM3TzBGQldGRXNWMEZqVEN4SlFVRkpMRmRCUVVvc1JVRkJhVUlzUjBGQmVFSXNSVUZCTmtJN1FVRkRNMElzVlVGQlNTeE5RVUZOTEVOQlFVNHNTVUZCVnl4RFFVRllMRWxCUVdkQ0xFMUJRVTBzVlVGQlRpeEZRVUZyUWp0QlFVTndReXhqUVVSdlF6dFBRVUYwUXp0TFFVUkdPenRCUVUxQkxGRkJRVTBzYTBKQlFXdENMR2REUVVGeFFpeE5RVUZOTEVOQlFVNHNRMEZCY2tJc1JVRkJLMElzVFVGQlRTeEpRVUZKTEVOQlFVb3NRMEZCY2tNc1JVRkJOa01zUTBGQk4wTXNRMEZCYkVJc1EwRndRazA3UVVGeFFsb3NVVUZCVFN4blFrRkJaMElzWTBGQlowSXNXVUZCV1N4RFFVRmFMRVZCUVdVc1pVRkJaaXhEUVVGb1FpeEhRVUZyUkN4bFFVRnNSQ3hEUVhKQ1ZqdEJRWE5DV2l4WFFVRlBMR2REUVVGeFFpeFBRVUZQTEVOQlFWQXNRMEZCY2tJc1JVRkJaME1zVDBGQlR5eEpRVUZKTEVOQlFVb3NRMEZCZGtNc1JVRkJLME1zWVVGQkwwTXNRMEZCVUN4RFFYUkNXVHRIUVVGUUxFTkJTbXRFTzBOQlFXaERPenM3T3pzN096czdRVUZ4UTNCQ0xFbEJRVTBzYTBOQlFXRXNWVUZCUXl4SFFVRkVPMU5CUVZNc1ZVRkJReXhEUVVGRU8xZEJRVThzUzBGQlN5eEhRVUZNTEVOQlFWTXNRMEZCVkN4RlFVRlpMRWRCUVZvN1IwRkJVRHREUVVGVU8wRkJRMjVDTEVsQlFVMHNaME5CUVZrc1ZVRkJReXhIUVVGRU8xTkJRVk1zVlVGQlF5eERRVUZFTzFkQlFVOHNTMEZCU3l4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxFZEJRVm83UjBGQlVEdERRVUZVTzBGQlEyeENMRWxCUVUwc2QwSkJRVkVzVlVGQlF5eEhRVUZFTEVWQlFVMHNSMEZCVGp0VFFVRmpMRXRCUVVzc1ZVRkJWU3hIUVVGV0xFTkJRVXdzUlVGQmNVSXNWMEZCVnl4SFFVRllMRU5CUVhKQ08wTkJRV1E3TzBGQlJXUXNTVUZCVFN4M1FrRkJVU3hWUVVGRExFdEJRVVFzUlVGQlVTeEhRVUZTTEVWQlFXRXNSMEZCWWp0VFFVRnhRaXhWUVVGRExFTkJRVVFzUlVGQlR6dEJRVU12UXl4UlFVRk5MRmRCUVZjc1owTkJRWEZDTEVkQlFYSkNMRVZCUVRCQ0xFZEJRVEZDTEVWQlFTdENMRU5CUVM5Q0xFTkJRVmdzUTBGRWVVTTdRVUZGTDBNc1YwRkJUeXgzUWtGQllTeExRVUZpTEVWQlFXOUNMRkZCUVhCQ0xFTkJRVkFzUTBGR0swTTdSMEZCVUR0RFFVRnlRaUlzSW1acGJHVWlPaUptYVd4MFpYSnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbExDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeXdnYzNSbGNGQnliMmR5WlhOeklIMGdabkp2YlNBbkxpOWpZV3hqSnp0Y2JseHVMeW9xWEc0Z0tpQkJjSEJsYm1RZ1ZXNXBkRnh1SUNvZ1EzSmxZWFJsY3lCaElHWjFibU4wYVc5dUlIUm9ZWFFnZDJsc2JDQmhjSEJsYm1RZ2RHaGxJSFZ1YVhRZ2RHOGdZU0JuYVhabGJpQjJZV3gxWlZ4dUlDb2dZWEJ3Wlc1a1ZXNXBkQ2duY0hnbktTZ3lNQ2tnTFQ0Z0p6SXdjSGduWEc0Z0tpQkFjR0Z5WVcwZ0lIdHpkSEpwYm1kOUlIVnVhWFFwWEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOVhHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmhjSEJsYm1SVmJtbDBJRDBnS0hWdWFYUXBJRDArSUNoMktTQTlQaUJnSkh0MmZTUjdkVzVwZEgxZ08xeHVYRzR2S2lwY2JpQXFJRVpzYjNkY2JpQXFJRU52YlhCdmMyVWdiM1JvWlhJZ2RISmhibk5tYjNKdFpYSnpJSFJ2SUhKMWJpQnNhVzVsWVhKcGJIbGNiaUFxSUdac2IzY29iV2x1S0RJd0tTd2diV0Y0S0RRd0tTbGNiaUFxSUVCd1lYSmhiU0FnZXk0dUxtWjFibU4wYVc5dWMzMGdkSEpoYm5ObWIzSnRaWEp6WEc0Z0tpQkFjbVYwZFhKdUlIdG1kVzVqZEdsdmJuMWNiaUFxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1pzYjNjZ1BTQW9MaTR1ZEhKaGJuTm1iM0p0WlhKektTQTlQaUI3WEc0Z0lHTnZibk4wSUc1MWJWUnlZVzV6Wm05eWJXVnljeUE5SUhSeVlXNXpabTl5YldWeWN5NXNaVzVuZEdnN1hHNGdJR3hsZENCcElEMGdNRHRjYmx4dUlDQnlaWFIxY200Z0tIWXBJRDArSUh0Y2JpQWdJQ0JtYjNJZ0tHa2dQU0F3T3lCcElEd2diblZ0VkhKaGJuTm1iM0p0WlhKek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUhZZ1BTQjBjbUZ1YzJadmNtMWxjbk5iYVYwb2RpazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhZN1hHNGdJSDA3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2FXNTBaWEp3YjJ4aGRHVWdQU0FvYVc1d2RYUXNJRzkxZEhCMWRDd2djbUZ1WjJWRllYTnBibWNwSUQwK0lIdGNiaUFnWTI5dWMzUWdjbUZ1WjJWTVpXNW5kR2dnUFNCcGJuQjFkQzVzWlc1bmRHZzdYRzRnSUdOdmJuTjBJR1pwYm1Gc1NXNWtaWGdnUFNCeVlXNW5aVXhsYm1kMGFDQXRJREU3WEc1Y2JpQWdjbVYwZFhKdUlDaDJLU0E5UGlCN1hHNGdJQ0FnTHk4Z1NXWWdkbUZzZFdVZ2IzVjBjMmxrWlNCdGFXNXBiWFZ0SUhKaGJtZGxMQ0J4ZFdsamEyeDVJSEpsZEhWeWJseHVJQ0FnSUdsbUlDaDJJRHc5SUdsdWNIVjBXekJkS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYjNWMGNIVjBXekJkTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUVsbUlIWmhiSFZsSUc5MWRITnBaR1VnYldGNGFXMTFiU0J5WVc1blpTd2djWFZwWTJ0c2VTQnlaWFIxY201Y2JpQWdJQ0JwWmlBb2RpQStQU0JwYm5CMWRGdG1hVzVoYkVsdVpHVjRYU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRzkxZEhCMWRGdG1hVzVoYkVsdVpHVjRYVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnNaWFFnYVNBOUlEQTdYRzVjYmlBZ0lDQXZMeUJHYVc1a0lHbHVaR1Y0SUc5bUlISmhibWRsSUhOMFlYSjBYRzRnSUNBZ1ptOXlJQ2c3SUdrZ1BDQnlZVzVuWlV4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQnBaaUFvYVc1d2RYUmJhVjBnUGlCMklIeDhJR2tnUFQwOUlHWnBibUZzU1c1a1pYZ3BJSHRjYmlBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1kyOXVjM1FnY0hKdlozSmxjM05KYmxKaGJtZGxJRDBnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb2FXNXdkWFJiYVYwc0lHbHVjSFYwVzJrZ0t5QXhYU3dnZGlrN1hHNGdJQ0FnWTI5dWMzUWdaV0Z6WldSUWNtOW5jbVZ6Y3lBOUlDaHlZVzVuWlVWaGMybHVaeWtnUHlCeVlXNW5aVVZoYzJsdVoxdHBYU2h3Y205bmNtVnpjMGx1VW1GdVoyVXBJRG9nY0hKdlozSmxjM05KYmxKaGJtZGxPMXh1SUNBZ0lISmxkSFZ5YmlCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aHZkWFJ3ZFhSYmFWMHNJRzkxZEhCMWRGdHBJQ3NnTVYwc0lHVmhjMlZrVUhKdlozSmxjM01wTzF4dUlDQjlPMXh1ZlR0Y2JseHVMeW9xWEc0Z0tpQkRiR0Z0Y0NCMllXeDFaU0JpWlhSM1pXVnVYRzRnS2lCRGNtVmhkR1Z6SUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ0IzYVd4c0lISmxjM1J5YVdOMElHRWdaMmwyWlc0Z2RtRnNkV1VnWW1WMGQyVmxiaUJnYldsdVlDQmhibVFnWUcxaGVHQmNiaUFxSUVCd1lYSmhiU0FnZTI1MWJXSmxjbjBnYldsdVhHNGdLaUJBY0dGeVlXMGdJSHR1ZFcxaVpYSjlJRzFoZUZ4dUlDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZWeHVJQ292WEc1bGVIQnZjblFnWTI5dWMzUWdZMnhoYlhCVmJtUmxjaUE5SUNodFlYZ3BJRDArSUNoMktTQTlQaUJOWVhSb0xtMXBiaWgyTENCdFlYZ3BPMXh1Wlhod2IzSjBJR052Ym5OMElHTnNZVzF3VDNabGNpQTlJQ2h0YVc0cElEMCtJQ2gyS1NBOVBpQk5ZWFJvTG0xaGVDaDJMQ0J0YVc0cE8xeHVaWGh3YjNKMElHTnZibk4wSUdOc1lXMXdJRDBnS0cxcGJpd2diV0Y0S1NBOVBpQm1iRzkzS0dOc1lXMXdUM1psY2lodGFXNHBMQ0JqYkdGdGNGVnVaR1Z5S0cxaGVDa3BPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjM1JsY0hNZ1BTQW9jM1JsY0hNc0lHMXBiaXdnYldGNEtTQTlQaUFvZGlrZ1BUNGdlMXh1SUNCamIyNXpkQ0J3Y205bmNtVnpjeUE5SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtHMXBiaXdnYldGNExDQjJLVHRjYmlBZ2NtVjBkWEp1SUhOMFpYQlFjbTluY21WemN5aHpkR1Z3Y3l3Z2NISnZaM0psYzNNcE8xeHVmVHRjYmx4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9maWx0ZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfZmlsdGVycyA9IHJlcXVpcmUoJy4uL2luYy9maWx0ZXJzJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfZWFzaW5nID0gcmVxdWlyZSgnLi4vZWFzaW5nJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGNsYW1wUHJvZ3Jlc3MgPSAoMCwgX2ZpbHRlcnMuY2xhbXApKDAsIDEpO1xuXG52YXIgVHdlZW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFR3ZWVuKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFR3ZWVuLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkdXJhdGlvbiA9IF9wcm9wcy5kdXJhdGlvbjtcbiAgICB2YXIgZWFzZSA9IF9wcm9wcy5lYXNlO1xuICAgIHZhciBmcm9tID0gX3Byb3BzLmZyb207XG4gICAgdmFyIHRvID0gX3Byb3BzLnRvO1xuXG5cbiAgICB0aGlzLmVsYXBzZWQgPSAwO1xuXG4gICAgdGhpcy5vblVwZGF0ZSA9ICgwLCBfZmlsdGVycy5mbG93KShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLmVsYXBzZWQgKz0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpO1xuICAgIH0sIGZ1bmN0aW9uIChlbGFwc2VkKSB7XG4gICAgICByZXR1cm4gKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSgwLCBkdXJhdGlvbiwgZWxhcHNlZCk7XG4gICAgfSwgY2xhbXBQcm9ncmVzcywgZWFzZSwgZnVuY3Rpb24gKGVhc2VkUHJvZ3Jlc3MpIHtcbiAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGZyb20sIHRvLCBlYXNlZFByb2dyZXNzKTtcbiAgICB9KTtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZCA+PSB0aGlzLnByb3BzLmR1cmF0aW9uO1xuICB9O1xuXG4gIHJldHVybiBUd2Vlbjtcbn0oXzIuZGVmYXVsdCk7XG5cblR3ZWVuLmRlZmF1bHRQcm9wcyA9IHtcbiAgZHVyYXRpb246IDMwMCxcbiAgZWFzZTogX2Vhc2luZy5lYXNlT3V0LFxuICBmcm9tOiAwLFxuICB0bzogMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgVHdlZW4ocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNSM1pXVnVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenRCUVVOQk96dEJRVU5CT3p0QlFVTkJPenM3T3pzN096czdPMEZCUlVFc1NVRkJUU3huUWtGQlowSXNiMEpCUVUwc1EwRkJUaXhGUVVGVExFTkJRVlFzUTBGQmFFSTdPMGxCUlVFN096czdPenM3T3p0clFrRlJTaXcyUWtGQlZUczdPMmxDUVVNMlFpeExRVUZMTEV0QlFVd3NRMEZFTjBJN1VVRkRRU3d5UWtGRVFUdFJRVU5WTEcxQ1FVUldPMUZCUTJkQ0xHMUNRVVJvUWp0UlFVTnpRaXhsUVVSMFFqczdPMEZCUjFJc1UwRkJTeXhQUVVGTUxFZEJRV1VzUTBGQlppeERRVWhST3p0QlFVdFNMRk5CUVVzc1VVRkJUQ3hIUVVGblFpeHRRa0ZEWkR0aFFVRk5MRTlCUVVzc1QwRkJUQ3hKUVVGblFpeHZRMEZCYUVJN1MwRkJUaXhGUVVOQkxGVkJRVU1zVDBGQlJEdGhRVUZoTEdkRFFVRnhRaXhEUVVGeVFpeEZRVUYzUWl4UlFVRjRRaXhGUVVGclF5eFBRVUZzUXp0TFFVRmlMRVZCUTBFc1lVRklZeXhGUVVsa0xFbEJTbU1zUlVGTFpDeFZRVUZETEdGQlFVUTdZVUZCYlVJc1owTkJRWEZDTEVsQlFYSkNMRVZCUVRKQ0xFVkJRVE5DTEVWQlFTdENMR0ZCUVM5Q08wdEJRVzVDTEVOQlRFWXNRMEZNVVRzN08wRkJVazRzYTBKQmMwSktMQ3REUVVGdFFqdEJRVU5xUWl4WFFVRlJMRXRCUVVzc1QwRkJUQ3hKUVVGblFpeExRVUZMTEV0QlFVd3NRMEZCVnl4UlFVRllMRU5CUkZBN096dFRRWFJDWmpzN08wMUJRMGNzWlVGQlpUdEJRVU53UWl4WlFVRlZMRWRCUVZZN1FVRkRRU3gxUWtGR2IwSTdRVUZIY0VJc1VVRkJUU3hEUVVGT08wRkJRMEVzVFVGQlNTeERRVUZLT3pzN2EwSkJjMEpYTEZWQlFVTXNTMEZCUkR0VFFVRlhMRWxCUVVrc1MwRkJTaXhEUVVGVkxFdEJRVlk3UTBGQldDSXNJbVpwYkdVaU9pSjBkMlZsYmk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2Snp0Y2JtbHRjRzl5ZENCN0lIUnBiV1ZUYVc1alpVeGhjM1JHY21GdFpTQjlJR1p5YjIwZ0p5NHVMMlp5WVcxbGMzbHVZeWM3WEc1cGJYQnZjblFnZXlCbWJHOTNMQ0JqYkdGdGNDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5bWFXeDBaWEp6Snp0Y2JtbHRjRzl5ZENCN0lHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxMQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibWx0Y0c5eWRDQjdJR1ZoYzJWUGRYUWdmU0JtY205dElDY3VMaTlsWVhOcGJtY25PMXh1WEc1amIyNXpkQ0JqYkdGdGNGQnliMmR5WlhOeklEMGdZMnhoYlhBb01Dd2dNU2s3WEc1Y2JtTnNZWE56SUZSM1pXVnVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYzNSaGRHbGpJR1JsWm1GMWJIUlFjbTl3Y3lBOUlIdGNiaUFnSUNCa2RYSmhkR2x2YmpvZ016QXdMRnh1SUNBZ0lHVmhjMlU2SUdWaGMyVlBkWFFzWEc0Z0lDQWdabkp2YlRvZ01DeGNiaUFnSUNCMGJ6b2dNVnh1SUNCOU8xeHVYRzRnSUc5dVUzUmhjblFvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJrZFhKaGRHbHZiaXdnWldGelpTd2dabkp2YlN3Z2RHOGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCMGFHbHpMbVZzWVhCelpXUWdQU0F3TzF4dVhHNGdJQ0FnZEdocGN5NXZibFZ3WkdGMFpTQTlJR1pzYjNjb1hHNGdJQ0FnSUNBb0tTQTlQaUIwYUdsekxtVnNZWEJ6WldRZ0t6MGdkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxLQ2tzWEc0Z0lDQWdJQ0FvWld4aGNITmxaQ2tnUFQ0Z1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9NQ3dnWkhWeVlYUnBiMjRzSUdWc1lYQnpaV1FwTEZ4dUlDQWdJQ0FnWTJ4aGJYQlFjbTluY21WemN5eGNiaUFnSUNBZ0lHVmhjMlVzWEc0Z0lDQWdJQ0FvWldGelpXUlFjbTluY21WemN5a2dQVDRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb1puSnZiU3dnZEc4c0lHVmhjMlZrVUhKdlozSmxjM01wWEc0Z0lDQWdLVHRjYmlBZ2ZWeHVYRzRnSUdselFXTjBhVzl1UTI5dGNHeGxkR1VvS1NCN1hHNGdJQ0FnY21WMGRYSnVJQ2gwYUdsekxtVnNZWEJ6WldRZ1BqMGdkR2hwY3k1d2NtOXdjeTVrZFhKaGRHbHZiaWs3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hCeWIzQnpLU0E5UGlCdVpYY2dWSGRsWlc0b2NISnZjSE1wTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVHJhY2sgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVHJhY2ssIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFRyYWNrKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFjayk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFRyYWNrLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgaW5wdXQgPSB0aGlzLnByb3BzLmlucHV0O1xuXG4gICAgdGhpcy5pbnB1dE9yaWdpbiA9IGlucHV0LmdldCgpO1xuXG4gICAgaW5wdXQuc2V0UHJvcHMoe1xuICAgICAgX29uVXBkYXRlOiB0aGlzLnVwZGF0ZVxuICAgIH0pO1xuICB9O1xuXG4gIFRyYWNrLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBpbnB1dCA9IF9wcm9wcy5pbnB1dDtcbiAgICB2YXIgZnJvbSA9IF9wcm9wcy5mcm9tO1xuXG4gICAgdmFyIG9mZnNldCA9IGlucHV0LmdldCgpIC0gdGhpcy5pbnB1dE9yaWdpbjtcbiAgICByZXR1cm4gZnJvbSArIG9mZnNldDtcbiAgfTtcblxuICByZXR1cm4gVHJhY2s7XG59KF8yLmRlZmF1bHQpO1xuXG5UcmFjay5kZWZhdWx0UHJvcHMgPSB7XG4gIGZyb206IDAsXG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IFRyYWNrKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzUnlZV05yTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096czdPenM3T3pzN08wbEJSVTA3T3pzN096czdPenRyUWtGTlNpdzJRa0ZCVlR0UlFVTkJMRkZCUVZVc1MwRkJTeXhMUVVGTUxFTkJRVllzVFVGRVFUczdRVUZGVWl4VFFVRkxMRmRCUVV3c1IwRkJiVUlzVFVGQlRTeEhRVUZPTEVWQlFXNUNMRU5CUmxFN08wRkJTVklzVlVGQlRTeFJRVUZPTEVOQlFXVTdRVUZEWWl4cFFrRkJWeXhMUVVGTExFMUJRVXc3UzBGRVlpeEZRVXBST3pzN1FVRk9UaXhyUWtGbFNpd3JRa0ZCVnp0cFFrRkRaU3hMUVVGTExFdEJRVXdzUTBGRVpqdFJRVU5FTEhGQ1FVUkRPMUZCUTAwc2JVSkJSRTQ3TzBGQlJWUXNVVUZCVFN4VFFVRlRMRTFCUVUwc1IwRkJUaXhMUVVGakxFdEJRVXNzVjBGQlRDeERRVVp3UWp0QlFVZFVMRmRCUVU4c1QwRkJUeXhOUVVGUUxFTkJTRVU3T3p0VFFXWlFPenM3VFVGRFJ5eGxRVUZsTzBGQlEzQkNMRkZCUVUwc1EwRkJUanRCUVVOQkxGZEJRVk1zU1VGQlZEczdPMnRDUVcxQ1Z5eFZRVUZETEV0QlFVUTdVMEZCVnl4SlFVRkpMRXRCUVVvc1EwRkJWU3hMUVVGV08wTkJRVmdpTENKbWFXeGxJam9pZEhKaFkyc3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVjYm1Oc1lYTnpJRlJ5WVdOcklHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0JtY205dE9pQXdMRnh1SUNBZ0lIQmhjM05wZG1VNklIUnlkV1ZjYmlBZ2ZUdGNibHh1SUNCdmJsTjBZWEowS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYVc1d2RYUWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnZEdocGN5NXBibkIxZEU5eWFXZHBiaUE5SUdsdWNIVjBMbWRsZENncE8xeHVYRzRnSUNBZ2FXNXdkWFF1YzJWMFVISnZjSE1vZTF4dUlDQWdJQ0FnWDI5dVZYQmtZWFJsT2lCMGFHbHpMblZ3WkdGMFpWeHVJQ0FnSUgwcE8xeHVJQ0I5WEc1Y2JpQWdiMjVWY0dSaGRHVW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QnBibkIxZEN3Z1puSnZiU0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCamIyNXpkQ0J2Wm1aelpYUWdQU0JwYm5CMWRDNW5aWFFvS1NBdElIUm9hWE11YVc1d2RYUlBjbWxuYVc0N1hHNGdJQ0FnY21WMGRYSnVJR1p5YjIwZ0t5QnZabVp6WlhRN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tIQnliM0J6S1NBOVBpQnVaWGNnVkhKaFkyc29jSEp2Y0hNcE8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3RyYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBoeXNpY3MgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoUGh5c2ljcywgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGh5c2ljcyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFBoeXNpY3MucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGFjY2VsZXJhdGlvbiA9IF9wcm9wcy5hY2NlbGVyYXRpb247XG4gICAgdmFyIGF1dG9TdG9wU3BlZWQgPSBfcHJvcHMuYXV0b1N0b3BTcGVlZDtcbiAgICB2YXIgZnJpY3Rpb24gPSBfcHJvcHMuZnJpY3Rpb247XG4gICAgdmFyIHZlbG9jaXR5ID0gX3Byb3BzLnZlbG9jaXR5O1xuICAgIHZhciBzcHJpbmcgPSBfcHJvcHMuc3ByaW5nO1xuICAgIHZhciB0byA9IF9wcm9wcy50bztcblxuICAgIHZhciBuZXdWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgIHZhciBlbGFwc2VkID0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpO1xuXG4gICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGFjY2VsZXJhdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKGFjY2VsZXJhdGlvbiwgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgZnJpY3Rpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoZnJpY3Rpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICo9IE1hdGgucG93KDEgLSBmcmljdGlvbiwgZWxhcHNlZCAvIDEwMCk7XG4gICAgfVxuXG4gICAgaWYgKHNwcmluZyAmJiB0byAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZGlzdGFuY2VUb1RhcmdldCA9IHRvIC0gdGhpcy5jdXJyZW50O1xuICAgICAgbmV3VmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShzcHJpbmcsIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHZlbG9jaXR5XG4gICAgdGhpcy5jdXJyZW50ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShuZXdWZWxvY2l0eSwgZWxhcHNlZCk7XG4gICAgdGhpcy5wcm9wcy52ZWxvY2l0eSA9IG5ld1ZlbG9jaXR5O1xuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBQaHlzaWNzLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gIXRoaXMudmVsb2NpdHkgfHwgTWF0aC5hYnModGhpcy52ZWxvY2l0eSkgPD0gdGhpcy5wcm9wcy5hdXRvU3RvcFNwZWVkO1xuICB9O1xuXG4gIHJldHVybiBQaHlzaWNzO1xufShfMi5kZWZhdWx0KTtcblxuUGh5c2ljcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjY2VsZXJhdGlvbjogMCxcbiAgZnJpY3Rpb246IDAsXG4gIHZlbG9jaXR5OiAwLFxuICBhdXRvU3RvcFNwZWVkOiAwLjAwMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGh5c2ljcyhwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0JvZVhOcFkzTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPMEZCUTBFN096czdPenM3T3pzN1NVRkZUVHM3T3pzN096czdPMjlDUVZGS0xDdENRVUZYTzJsQ1FVTXJSQ3hMUVVGTExFdEJRVXdzUTBGRUwwUTdVVUZEUkN4dFEwRkVRenRSUVVOaExIRkRRVVJpTzFGQlF6UkNMREpDUVVRMVFqdFJRVU56UXl3eVFrRkVkRU03VVVGRFowUXNkVUpCUkdoRU8xRkJRM2RFTEdWQlJIaEVPenRCUVVWVUxGRkJRVWtzWTBGQll5eFJRVUZrTEVOQlJrczdRVUZIVkN4UlFVRk5MRlZCUVZVc2IwTkJRVlk3T3p0QlFVaEhMRkZCVFV3c1dVRkJTaXhGUVVGclFqdEJRVU5vUWl4eFFrRkJaU3g1UWtGQll5eFpRVUZrTEVWQlFUUkNMRTlCUVRWQ0xFTkJRV1lzUTBGRVowSTdTMEZCYkVJN096dEJRVTVUTEZGQlYwd3NVVUZCU2l4RlFVRmpPMEZCUTFvc09FSkJRV2RDTEVsQlFVa3NVVUZCU2l4RlFVRnJRaXhWUVVGVkxFZEJRVllzUTBGQmJFTXNRMEZFV1R0TFFVRmtPenRCUVVsQkxGRkJRVWtzVlVGQlZTeFBRVUZQTEZOQlFWQXNSVUZCYTBJN1FVRkRPVUlzVlVGQlRTeHRRa0ZCYlVJc1MwRkJTeXhMUVVGTExFOUJRVXdzUTBGRVFUdEJRVVU1UWl4eFFrRkJaU3h0UWtGQmJVSXNlVUpCUVdNc1RVRkJaQ3hGUVVGelFpeFBRVUYwUWl4RFFVRnVRaXhEUVVabE8wdEJRV2hET3pzN1FVRm1VeXhSUVhGQ1ZDeERRVUZMTEU5QlFVd3NTVUZCWjBJc2VVSkJRV01zVjBGQlpDeEZRVUV5UWl4UFFVRXpRaXhEUVVGb1FpeERRWEpDVXp0QlFYTkNWQ3hUUVVGTExFdEJRVXdzUTBGQlZ5eFJRVUZZTEVkQlFYTkNMRmRCUVhSQ0xFTkJkRUpUT3p0QlFYZENWQ3hYUVVGUExFdEJRVXNzVDBGQlRDeERRWGhDUlRzN08wRkJVbEFzYjBKQmJVTktMQ3REUVVGdFFqdEJRVU5xUWl4WFFVRlJMRU5CUVVNc1MwRkJTeXhSUVVGTUxFbEJRV2xDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVVzc1VVRkJUQ3hEUVVGVUxFbEJRVEpDTEV0QlFVc3NTMEZCVEN4RFFVRlhMR0ZCUVZnc1EwRkVjRU03T3p0VFFXNURaanM3TzFGQlEwY3NaVUZCWlR0QlFVTndRaXhuUWtGQll5eERRVUZrTzBGQlEwRXNXVUZCVlN4RFFVRldPMEZCUTBFc1dVRkJWU3hEUVVGV08wRkJRMEVzYVVKQlFXVXNTMEZCWmpzN08ydENRVzFEVnl4VlFVRkRMRXRCUVVRN1UwRkJWeXhKUVVGSkxFOUJRVW9zUTBGQldTeExRVUZhTzBOQlFWZ2lMQ0ptYVd4bElqb2ljR2g1YzJsamN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dkp6dGNibWx0Y0c5eWRDQjdJSFJwYldWVGFXNWpaVXhoYzNSR2NtRnRaU0I5SUdaeWIyMGdKeTR1TDJaeVlXMWxjM2x1WXljN1hHNXBiWEJ2Y25RZ2V5QnpjR1ZsWkZCbGNrWnlZVzFsSUgwZ1puSnZiU0FuTGk0dmFXNWpMMk5oYkdNbk8xeHVYRzVqYkdGemN5QlFhSGx6YVdOeklHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0JoWTJObGJHVnlZWFJwYjI0NklEQXNYRzRnSUNBZ1puSnBZM1JwYjI0NklEQXNYRzRnSUNBZ2RtVnNiMk5wZEhrNklEQXNYRzRnSUNBZ1lYVjBiMU4wYjNCVGNHVmxaRG9nTUM0d01ERmNiaUFnZlZ4dVhHNGdJRzl1VlhCa1lYUmxLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dZV05qWld4bGNtRjBhVzl1TENCaGRYUnZVM1J2Y0ZOd1pXVmtMQ0JtY21samRHbHZiaXdnZG1Wc2IyTnBkSGtzSUhOd2NtbHVaeXdnZEc4Z2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdiR1YwSUc1bGQxWmxiRzlqYVhSNUlEMGdkbVZzYjJOcGRIazdYRzRnSUNBZ1kyOXVjM1FnWld4aGNITmxaQ0E5SUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNncE8xeHVYRzRnSUNBZ0x5OGdRWEJ3YkhrZ1lXTmpaV3hsY21GMGFXOXVJSFJ2SUhabGJHOWphWFI1WEc0Z0lDQWdhV1lnS0dGalkyVnNaWEpoZEdsdmJpa2dlMXh1SUNBZ0lDQWdibVYzVm1Wc2IyTnBkSGtnS3owZ2MzQmxaV1JRWlhKR2NtRnRaU2hoWTJObGJHVnlZWFJwYjI0c0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFRndjR3g1SUdaeWFXTjBhVzl1SUhSdklIWmxiRzlqYVhSNVhHNGdJQ0FnYVdZZ0tHWnlhV04wYVc5dUtTQjdYRzRnSUNBZ0lDQnVaWGRXWld4dlkybDBlU0FxUFNBb01TQXRJR1p5YVdOMGFXOXVLU0FxS2lBb1pXeGhjSE5sWkNBdklERXdNQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hOd2NtbHVaeUFtSmlCMGJ5QWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0JrYVhOMFlXNWpaVlJ2VkdGeVoyVjBJRDBnZEc4Z0xTQjBhR2x6TG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0J1WlhkV1pXeHZZMmwwZVNBclBTQmthWE4wWVc1alpWUnZWR0Z5WjJWMElDb2djM0JsWldSUVpYSkdjbUZ0WlNoemNISnBibWNzSUdWc1lYQnpaV1FwTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUVGd2NHeDVJSFpsYkc5amFYUjVYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJQ3M5SUhOd1pXVmtVR1Z5Um5KaGJXVW9ibVYzVm1Wc2IyTnBkSGtzSUdWc1lYQnpaV1FwTzF4dUlDQWdJSFJvYVhNdWNISnZjSE11ZG1Wc2IyTnBkSGtnUFNCdVpYZFdaV3h2WTJsMGVUdGNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbU4xY25KbGJuUTdYRzRnSUgxY2JseHVJQ0JwYzBGamRHbHZia052YlhCc1pYUmxLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQW9JWFJvYVhNdWRtVnNiMk5wZEhrZ2ZId2dUV0YwYUM1aFluTW9kR2hwY3k1MlpXeHZZMmwwZVNrZ1BEMGdkR2hwY3k1d2NtOXdjeTVoZFhSdlUzUnZjRk53WldWa0tUdGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9jSEp2Y0hNcElEMCtJRzVsZHlCUWFIbHphV056S0hCeWIzQnpLVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBhcmFsbGVsID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFBhcmFsbGVsLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBQYXJhbGxlbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFyYWxsZWwpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBQYXJhbGxlbC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgYWN0aW9ucyA9IHRoaXMucHJvcHMuYWN0aW9ucztcblxuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IGFjdGlvbnMubGVuZ3RoO1xuXG4gICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIGFjdGlvbi5zZXRQcm9wcyh7XG4gICAgICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIHJldHVybiBhY3Rpb24uc3RvcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5hZGRBY3Rpb24gPSBmdW5jdGlvbiBhZGRBY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLnByb3BzLmFjdGlvbnM7XG5cblxuICAgIGlmIChhY3Rpb25zLmluZGV4T2YoYWN0aW9uKSA9PT0gLTEpIHtcbiAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMDtcbiAgfTtcblxuICByZXR1cm4gUGFyYWxsZWw7XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucykge1xuICByZXR1cm4gbmV3IFBhcmFsbGVsKHsgYWN0aW9uczogYWN0aW9ucyB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQmhjbUZzYkdWc0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenM3T3pzN096czdPMGxCUlUwN096czdPenM3T3p0eFFrRkRTaXcyUWtGQlZUczdPMUZCUTBFc1ZVRkJXU3hMUVVGTExFdEJRVXdzUTBGQldpeFJRVVJCT3p0QlFVVlNMRk5CUVVzc1owSkJRVXdzUjBGQmQwSXNVVUZCVVN4TlFVRlNMRU5CUm1oQ096dEJRVWxTTEZsQlFWRXNUMEZCVWl4RFFVRm5RaXhWUVVGRExFMUJRVVFzUlVGQldUdEJRVU14UWl4aFFVRlBMRkZCUVZBc1EwRkJaMEk3UVVGRFpDeHBRa0ZCVXp0cFFrRkJUU3hQUVVGTExHZENRVUZNTzFOQlFVNDdUMEZFV0N4RlFVVkhMRXRCUmtnc1IwRkVNRUk3UzBGQldpeERRVUZvUWl4RFFVcFJPenM3UVVGRVRpeHhRa0ZaU2l3eVFrRkJVenRCUVVOUUxGTkJRVXNzUzBGQlRDeERRVUZYTEU5QlFWZ3NRMEZCYlVJc1QwRkJia0lzUTBGQk1rSXNWVUZCUXl4TlFVRkVPMkZCUVZrc1QwRkJUeXhKUVVGUU8wdEJRVm9zUTBGQk0wSXNRMEZFVHpzN08wRkJXa3dzY1VKQlowSktMQ3RDUVVGVkxGRkJRVkU3VVVGRFVpeFZRVUZaTEV0QlFVc3NTMEZCVEN4RFFVRmFMRkZCUkZFN096dEJRVWRvUWl4UlFVRkpMRkZCUVZFc1QwRkJVaXhEUVVGblFpeE5RVUZvUWl4TlFVRTBRaXhEUVVGRExFTkJRVVFzUlVGQlNUdEJRVU5zUXl4alFVRlJMRWxCUVZJc1EwRkJZU3hOUVVGaUxFVkJSR3RETzB0QlFYQkRPenM3UVVGdVFrVXNjVUpCZDBKS0xDdERRVUZ0UWp0QlFVTnFRaXhYUVVGUkxFdEJRVXNzWjBKQlFVd3NTMEZCTUVJc1EwRkJNVUlzUTBGRVV6czdPMU5CZUVKbU96czdhMEpCTmtKVExGVkJRVU1zVDBGQlJEdFRRVUZoTEVsQlFVa3NVVUZCU2l4RFFVRmhMRVZCUVVVc1owSkJRVVlzUlVGQllqdERRVUZpSWl3aVptbHNaU0k2SW5CaGNtRnNiR1ZzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaThuTzF4dVhHNWpiR0Z6Y3lCUVlYSmhiR3hsYkNCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lHOXVVM1JoY25Rb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCaFkzUnBiMjV6SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lIUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeUE5SUdGamRHbHZibk11YkdWdVozUm9PMXh1WEc0Z0lDQWdZV04wYVc5dWN5NW1iM0pGWVdOb0tDaGhZM1JwYjI0cElEMCtJSHRjYmlBZ0lDQWdJR0ZqZEdsdmJpNXpaWFJRY205d2N5aDdYRzRnSUNBZ0lDQWdJRjl2YmxOMGIzQTZJQ2dwSUQwK0lIUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeTB0WEc0Z0lDQWdJQ0I5S1M1emRHRnlkQ2dwTzF4dUlDQWdJSDBwTzF4dUlDQjlYRzVjYmlBZ2IyNVRkRzl3S0NrZ2UxeHVJQ0FnSUhSb2FYTXVjSEp2Y0hNdVlXTjBhVzl1Y3k1bWIzSkZZV05vS0NoaFkzUnBiMjRwSUQwK0lHRmpkR2x2Ymk1emRHOXdLQ2twTzF4dUlDQjlYRzVjYmlBZ1lXUmtRV04wYVc5dUtHRmpkR2x2YmlrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWVdOMGFXOXVjeUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNibHh1SUNBZ0lHbG1JQ2hoWTNScGIyNXpMbWx1WkdWNFQyWW9ZV04wYVc5dUtTQTlQVDBnTFRFcElIdGNiaUFnSUNBZ0lHRmpkR2x2Ym5NdWNIVnphQ2hoWTNScGIyNHBPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR2x6UVdOMGFXOXVRMjl0Y0d4bGRHVW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlDaDBhR2x6TG01MWJVRmpkR2wyWlVGamRHbHZibk1nUFQwOUlEQXBPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hoWTNScGIyNXpLU0E5UGlCdVpYY2dVR0Z5WVd4c1pXd29leUJoWTNScGIyNXpJSDBwTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGFyYWxsZWwuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ2hhaW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ2hhaW4sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENoYWluKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYWluKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMucGxheU5leHQgPSBfdGhpcy5wbGF5TmV4dC5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBDaGFpbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pID0gMDtcbiAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLnBsYXlOZXh0ID0gZnVuY3Rpb24gcGxheU5leHQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGkgPSBfcHJvcHMuaTtcbiAgICB2YXIgb3JkZXIgPSBfcHJvcHMub3JkZXI7XG5cbiAgICBpZiAoaSA8IG9yZGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMucHJvcHMuaSsrO1xuICAgICAgdGhpcy5wbGF5Q3VycmVudCgpO1xuICAgIH1cbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUucGxheUN1cnJlbnQgPSBmdW5jdGlvbiBwbGF5Q3VycmVudCgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGkgPSBfcHJvcHMyLmk7XG4gICAgdmFyIG9yZGVyID0gX3Byb3BzMi5vcmRlcjtcblxuICAgIG9yZGVyW2ldLm9uQ29tcGxldGUgPSB0aGlzLnBsYXlOZXh0O1xuICAgIG9yZGVyW2ldLnN0YXJ0KCk7XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGkgPSBfcHJvcHMzLmk7XG4gICAgdmFyIG9yZGVyID0gX3Byb3BzMy5vcmRlcjtcblxuICAgIG9yZGVyW2ldLnN0b3AoKTtcbiAgfTtcblxuICByZXR1cm4gQ2hhaW47XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3JkZXIpIHtcbiAgcmV0dXJuIG5ldyBDaGFpbih7IG9yZGVyOiBvcmRlciB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTm9ZV2x1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096czdPenM3T3pzN08wbEJSVTA3T3p0QlFVTktMRmRCUkVrc1MwRkRTaXhEUVVGWkxFdEJRVm9zUlVGQmJVSTdNRUpCUkdZc1QwRkRaVHM3YVVSQlEycENMRzFDUVVGTkxFdEJRVTRzUjBGRWFVSTdPMEZCUldwQ0xGVkJRVXNzVVVGQlRDeEhRVUZuUWl4TlFVRkxMRkZCUVV3c1EwRkJZeXhKUVVGa0xFOUJRV2hDTEVOQlJtbENPenRIUVVGdVFqczdRVUZFU1N4clFrRk5TaXcyUWtGQlZUdEJRVU5TTEZOQlFVc3NTMEZCVEN4RFFVRlhMRU5CUVZnc1IwRkJaU3hEUVVGbUxFTkJSRkU3UVVGRlVpeFRRVUZMTEZkQlFVd3NSMEZHVVRzN08wRkJUazRzYTBKQlYwb3NLMEpCUVZjN2FVSkJRMWtzUzBGQlN5eExRVUZNTEVOQlJGbzdVVUZEUkN4aFFVUkRPMUZCUTBVc2NVSkJSRVk3TzBGQlJWUXNVVUZCU1N4SlFVRkpMRTFCUVUwc1RVRkJUaXhIUVVGbExFTkJRV1lzUlVGQmEwSTdRVUZEZUVJc1YwRkJTeXhMUVVGTUxFTkJRVmNzUTBGQldDeEhRVVIzUWp0QlFVVjRRaXhYUVVGTExGZEJRVXdzUjBGR2QwSTdTMEZCTVVJN096dEJRV0pGTEd0Q1FXMUNTaXh4UTBGQll6dHJRa0ZEVXl4TFFVRkxMRXRCUVV3c1EwRkVWRHRSUVVOS0xHTkJSRWs3VVVGRFJDeHpRa0ZFUXpzN1FVRkZXaXhWUVVGTkxFTkJRVTRzUlVGQlV5eFZRVUZVTEVkQlFYTkNMRXRCUVVzc1VVRkJUQ3hEUVVaV08wRkJSMW9zVlVGQlRTeERRVUZPTEVWQlFWTXNTMEZCVkN4SFFVaFpPenM3UVVGdVFsWXNhMEpCZVVKS0xESkNRVUZUTzJ0Q1FVTmpMRXRCUVVzc1MwRkJUQ3hEUVVSa08xRkJRME1zWTBGRVJEdFJRVU5KTEhOQ1FVUktPenRCUVVWUUxGVkJRVTBzUTBGQlRpeEZRVUZUTEVsQlFWUXNSMEZHVHpzN08xTkJla0pNT3pzN2EwSkJLMEpUTEZWQlFVTXNTMEZCUkR0VFFVRlhMRWxCUVVrc1MwRkJTaXhEUVVGVkxFVkJRVVVzV1VGQlJpeEZRVUZXTzBOQlFWZ2lMQ0ptYVd4bElqb2lZMmhoYVc0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNWNibU5zWVhOeklFTm9ZV2x1SUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNCemRYQmxjaWh3Y205d2N5azdYRzRnSUNBZ2RHaHBjeTV3YkdGNVRtVjRkQ0E5SUhSb2FYTXVjR3hoZVU1bGVIUXVZbWx1WkNoMGFHbHpLVHRjYmlBZ2ZWeHVYRzRnSUc5dVUzUmhjblFvS1NCN1hHNGdJQ0FnZEdocGN5NXdjbTl3Y3k1cElEMGdNRHRjYmlBZ0lDQjBhR2x6TG5Cc1lYbERkWEp5Wlc1MEtDazdYRzRnSUgxY2JseHVJQ0J3YkdGNVRtVjRkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR2tzSUc5eVpHVnlJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdsbUlDaHBJRHdnYjNKa1pYSXViR1Z1WjNSb0lDMGdNU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXdjbTl3Y3k1cEt5czdYRzRnSUNBZ0lDQjBhR2x6TG5Cc1lYbERkWEp5Wlc1MEtDazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdjR3hoZVVOMWNuSmxiblFvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJwTENCdmNtUmxjaUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCdmNtUmxjbHRwWFM1dmJrTnZiWEJzWlhSbElEMGdkR2hwY3k1d2JHRjVUbVY0ZER0Y2JpQWdJQ0J2Y21SbGNsdHBYUzV6ZEdGeWRDZ3BPMXh1SUNCOVhHNWNiaUFnYjI1VGRHOXdLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dhU3dnYjNKa1pYSWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnYjNKa1pYSmJhVjB1YzNSdmNDZ3BPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2h2Y21SbGNpa2dQVDRnYm1WM0lFTm9ZV2x1S0hzZ2IzSmtaWElnZlNrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2NoYWluLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gIHJldHVybiAoMCwgX3R3ZWVuMi5kZWZhdWx0KSh7IGR1cmF0aW9uOiBkdXJhdGlvbiB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyUmxiR0Y1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096czdPMnRDUVVWbExGVkJRVU1zVVVGQlJEdFRRVUZqTEhGQ1FVRk5MRVZCUVVVc2EwSkJRVVlzUlVGQlRqdERRVUZrSWl3aVptbHNaU0k2SW1SbGJHRjVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IwZDJWbGJpQm1jbTl0SUNjdUwzUjNaV1Z1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHUjFjbUYwYVc5dUtTQTlQaUIwZDJWbGJpaDdJR1IxY21GMGFXOXVJSDBwTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZGVsYXkuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF90d2VlbiA9IHJlcXVpcmUoJy4vdHdlZW4nKTtcblxudmFyIF90d2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2Vlbik7XG5cbnZhciBfZWFzaW5nID0gcmVxdWlyZSgnLi4vZWFzaW5nJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENyb3NzRmFkZSA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDcm9zc0ZhZGUsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENyb3NzRmFkZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ3Jvc3NGYWRlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ3Jvc3NGYWRlLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb247XG4gICAgdmFyIGVhc2UgPSBfcHJvcHMuZWFzZTtcbiAgICB2YXIgZmFkZXIgPSBfcHJvcHMuZmFkZXI7XG5cblxuICAgIHRoaXMuZmFkZXIgPSBmYWRlciB8fCAoMCwgX3R3ZWVuMi5kZWZhdWx0KSh7XG4gICAgICB0bzogMSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGVhc2U6IGVhc2VcbiAgICB9KS5zdGFydCgpO1xuICB9O1xuXG4gIENyb3NzRmFkZS5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZyb20gPSBfcHJvcHMyLmZyb207XG4gICAgdmFyIHRvID0gX3Byb3BzMi50bztcblxuICAgIHZhciBiYWxhbmNlID0gdGhpcy5mYWRlci5nZXQoKTtcbiAgICB2YXIgbGF0ZXN0RnJvbVZhbHVlID0gZnJvbS5nZXQoKTtcbiAgICB2YXIgbGF0ZXN0VG9WYWx1ZSA9IHRvLmdldCgpO1xuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGxhdGVzdEZyb21WYWx1ZSwgbGF0ZXN0VG9WYWx1ZSwgYmFsYW5jZSk7XG4gIH07XG5cbiAgcmV0dXJuIENyb3NzRmFkZTtcbn0oXzIuZGVmYXVsdCk7XG5cbkNyb3NzRmFkZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGVhc2U6IF9lYXNpbmcubGluZWFyXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDcm9zc0ZhZGUocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOeWIzTnpMV1poWkdVdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdRVUZEUVRzN1FVRkRRVHM3T3pzN096czdPenRKUVVWTk96czdPenM3T3pzN2MwSkJTMG9zTmtKQlFWVTdhVUpCUXpCQ0xFdEJRVXNzUzBGQlRDeERRVVF4UWp0UlFVTkJMREpDUVVSQk8xRkJRMVVzYlVKQlJGWTdVVUZEWjBJc2NVSkJSR2hDT3pzN1FVRkhVaXhUUVVGTExFdEJRVXdzUjBGQllTeFRRVUZUTEhGQ1FVRk5PMEZCUXpGQ0xGVkJRVWtzUTBGQlNqdEJRVU5CTEhkQ1FVWXdRanRCUVVjeFFpeG5Ra0ZJTUVJN1MwRkJUaXhGUVVsdVFpeExRVXB0UWl4RlFVRlVMRU5CU0V3N096dEJRVXhPTEhOQ1FXVktMQ3RDUVVGWE8ydENRVU5aTEV0QlFVc3NTMEZCVEN4RFFVUmFPMUZCUTBRc2IwSkJSRU03VVVGRFN5eG5Ra0ZFVERzN1FVRkZWQ3hSUVVGTkxGVkJRVlVzUzBGQlN5eExRVUZNTEVOQlFWY3NSMEZCV0N4RlFVRldMRU5CUmtjN1FVRkhWQ3hSUVVGTkxHdENRVUZyUWl4TFFVRkxMRWRCUVV3c1JVRkJiRUlzUTBGSVJ6dEJRVWxVTEZGQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUjBGQlNDeEZRVUZvUWl4RFFVcEhPMEZCUzFRc1YwRkJUeXhuUTBGQmNVSXNaVUZCY2tJc1JVRkJjME1zWVVGQmRFTXNSVUZCY1VRc1QwRkJja1FzUTBGQlVDeERRVXhUT3pzN1UwRm1VRHM3TzFWQlEwY3NaVUZCWlR0QlFVTndRaXh6UWtGRWIwSTdPenRyUWtGMVFsUXNWVUZCUXl4TFFVRkVPMU5CUVZjc1NVRkJTU3hUUVVGS0xFTkJRV01zUzBGQlpEdERRVUZZSWl3aVptbHNaU0k2SW1OeWIzTnpMV1poWkdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNXBiWEJ2Y25RZ2RIZGxaVzRnWm5KdmJTQW5MaTkwZDJWbGJpYzdYRzVwYlhCdmNuUWdleUJzYVc1bFlYSWdmU0JtY205dElDY3VMaTlsWVhOcGJtY25PMXh1YVcxd2IzSjBJSHNnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVjYm1Oc1lYTnpJRU55YjNOelJtRmtaU0JsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzRnSUhOMFlYUnBZeUJrWldaaGRXeDBVSEp2Y0hNZ1BTQjdYRzRnSUNBZ1pXRnpaVG9nYkdsdVpXRnlYRzRnSUgxY2JseHVJQ0J2YmxOMFlYSjBLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2daSFZ5WVhScGIyNHNJR1ZoYzJVc0lHWmhaR1Z5SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdkR2hwY3k1bVlXUmxjaUE5SUdaaFpHVnlJSHg4SUhSM1pXVnVLSHRjYmlBZ0lDQWdJSFJ2T2lBeExGeHVJQ0FnSUNBZ1pIVnlZWFJwYjI0c1hHNGdJQ0FnSUNCbFlYTmxYRzRnSUNBZ2ZTa3VjM1JoY25Rb0tUdGNiaUFnZlZ4dVhHNGdJRzl1VlhCa1lYUmxLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dabkp2YlN3Z2RHOGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnWTI5dWMzUWdZbUZzWVc1alpTQTlJSFJvYVhNdVptRmtaWEl1WjJWMEtDazdYRzRnSUNBZ1kyOXVjM1FnYkdGMFpYTjBSbkp2YlZaaGJIVmxJRDBnWm5KdmJTNW5aWFFvS1R0Y2JpQWdJQ0JqYjI1emRDQnNZWFJsYzNSVWIxWmhiSFZsSUQwZ2RHOHVaMlYwS0NrN1hHNGdJQ0FnY21WMGRYSnVJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56S0d4aGRHVnpkRVp5YjIxV1lXeDFaU3dnYkdGMFpYTjBWRzlXWVd4MVpTd2dZbUZzWVc1alpTazdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSEJ5YjNCektTQTlQaUJ1WlhjZ1EzSnZjM05HWVdSbEtIQnliM0J6S1R0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ29tcG9zaXRlQWN0aW9uID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENvbXBvc2l0ZUFjdGlvbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ29tcG9zaXRlQWN0aW9uKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvc2l0ZUFjdGlvbik7XG5cbiAgICB2YXIgYWN0aW9ucyA9IHByb3BzLmFjdGlvbnM7XG5cbiAgICB2YXIgcmVtYWluaW5nUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsnYWN0aW9ucyddKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCByZW1haW5pbmdQcm9wcykpO1xuXG4gICAgX3RoaXMuY3VycmVudCA9IHt9O1xuICAgIF90aGlzLmFjdGlvbktleXMgPSBbXTtcbiAgICBfdGhpcy5hZGRBY3Rpb25zKHByb3BzLmFjdGlvbnMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuYWRkQWN0aW9ucyA9IGZ1bmN0aW9uIGFkZEFjdGlvbnMoYWN0aW9ucykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKF90aGlzMi5hY3Rpb25LZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgX3RoaXMyLmFjdGlvbktleXMucHVzaChrZXkpO1xuICAgICAgfVxuXG4gICAgICBfdGhpczJba2V5XSA9IGFjdGlvbnNba2V5XTtcbiAgICAgIF90aGlzMltrZXldLnNldFByb3BzKHtcbiAgICAgICAgLy8gTG9vayBpbnRvIHByaXZhdGUgc2V0dGFibGUgZnVuY3Rpb25zXG4gICAgICAgIF9vblVwZGF0ZTogZnVuY3Rpb24gKHYsIGFjdGlvbikge1xuICAgICAgICAgIF90aGlzMi5jdXJyZW50W2tleV0gPSBhY3Rpb24uZ2V0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGtleSBpbiBhY3Rpb25zKSB7XG4gICAgICBfbG9vcChrZXkpO1xuICAgIH1cbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gdGhpcy5hY3Rpb25LZXlzLmxlbmd0aDtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXMzW2tleV0uc3RhcnQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczRba2V5XS5zdG9wKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5nZXRWZWxvY2l0eSA9IGZ1bmN0aW9uIGdldFZlbG9jaXR5KCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIHZlbG9jaXR5ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHZlbG9jaXR5W2tleV0gPSBfdGhpczVba2V5XS5nZXRWZWxvY2l0eSgpO1xuICAgIH0pO1xuICAgIHJldHVybiB2ZWxvY2l0eTtcbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDA7XG4gIH07XG5cbiAgcmV0dXJuIENvbXBvc2l0ZUFjdGlvbjtcbn0oXzIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhY3Rpb25zLCBwcm9wcykge1xuICByZXR1cm4gbmV3IENvbXBvc2l0ZUFjdGlvbihfZXh0ZW5kcyh7XG4gICAgYWN0aW9uczogYWN0aW9uc1xuICB9LCBwcm9wcykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOdmJYQnZjMmwwWlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenM3T3pzN096czdPenM3U1VGRlRUczdPMEZCUTBvc1YwRkVTU3hsUVVOS0xFTkJRVmtzUzBGQldpeEZRVUZ0UWpzd1FrRkVaaXhwUWtGRFpUczdVVUZEVkN4VlFVRXJRaXhOUVVFdlFpeFJRVVJUT3p0UlFVTkhMREJEUVVGdFFpeHZRa0ZFZEVJN08ybEVRVVZxUWl4dFFrRkJUU3hqUVVGT0xFZEJSbWxDT3p0QlFVZHFRaXhWUVVGTExFOUJRVXdzUjBGQlpTeEZRVUZtTEVOQlNHbENPMEZCU1dwQ0xGVkJRVXNzVlVGQlRDeEhRVUZyUWl4RlFVRnNRaXhEUVVwcFFqdEJRVXRxUWl4VlFVRkxMRlZCUVV3c1EwRkJaMElzVFVGQlRTeFBRVUZPTEVOQlFXaENMRU5CVEdsQ096dEhRVUZ1UWpzN1FVRkVTU3cwUWtGVFNpeHBRMEZCVnl4VFFVRlRPenM3TUVKQlExQTdRVUZEVkN4VlFVRkpMRTlCUVVzc1ZVRkJUQ3hEUVVGblFpeFBRVUZvUWl4RFFVRjNRaXhIUVVGNFFpeE5RVUZwUXl4RFFVRkRMRU5CUVVRc1JVRkJTVHRCUVVOMlF5eGxRVUZMTEZWQlFVd3NRMEZCWjBJc1NVRkJhRUlzUTBGQmNVSXNSMEZCY2tJc1JVRkVkVU03VDBGQmVrTTdPMEZCU1VFc1lVRkJTeXhIUVVGTUxFbEJRVmtzVVVGQlVTeEhRVUZTTEVOQlFWbzdRVUZEUVN4aFFVRkxMRWRCUVV3c1JVRkJWU3hSUVVGV0xFTkJRVzFDT3p0QlFVVnFRaXh0UWtGQlZ5eFZRVUZETEVOQlFVUXNSVUZCU1N4TlFVRktMRVZCUVdVN1FVRkRlRUlzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRWRCUVdJc1NVRkJiMElzVDBGQlR5eEhRVUZRTEVWQlFYQkNMRU5CUkhkQ08xTkJRV1k3UVVGSFdDeHBRa0ZCVXp0cFFrRkJUU3hQUVVGTExHZENRVUZNTzFOQlFVNDdUMEZNV0R0TlFWQm5RanM3UVVGRGJFSXNVMEZCU3l4SlFVRk5MRWRCUVU0c1NVRkJZU3hQUVVGc1FpeEZRVUV5UWp0WlFVRm9RaXhMUVVGblFqdExRVUV6UWpzN08wRkJWa1VzTkVKQk1FSktMRFpDUVVGVk96czdRVUZEVWl4VFFVRkxMR2RDUVVGTUxFZEJRWGRDTEV0QlFVc3NWVUZCVEN4RFFVRm5RaXhOUVVGb1FpeERRVVJvUWp0QlFVVlNMRk5CUVVzc1ZVRkJUQ3hEUVVGblFpeFBRVUZvUWl4RFFVRjNRaXhWUVVGRExFZEJRVVE3WVVGQlV5eFBRVUZMTEVkQlFVd3NSVUZCVlN4TFFVRldPMHRCUVZRc1EwRkJlRUlzUTBGR1VUczdPMEZCTVVKT0xEUkNRU3RDU2l3eVFrRkJVenM3TzBGQlExQXNVMEZCU3l4VlFVRk1MRU5CUVdkQ0xFOUJRV2hDTEVOQlFYZENMRlZCUVVNc1IwRkJSRHRoUVVGVExFOUJRVXNzUjBGQlRDeEZRVUZWTEVsQlFWWTdTMEZCVkN4RFFVRjRRaXhEUVVSUE96czdRVUV2UWt3c05FSkJiVU5LTEhGRFFVRmpPenM3UVVGRFdpeFJRVUZOTEZkQlFWY3NSVUZCV0N4RFFVUk5PMEZCUlZvc1UwRkJTeXhWUVVGTUxFTkJRV2RDTEU5QlFXaENMRU5CUVhkQ0xGVkJRVU1zUjBGQlJEdGhRVUZUTEZOQlFWTXNSMEZCVkN4SlFVRm5RaXhQUVVGTExFZEJRVXdzUlVGQlZTeFhRVUZXTEVWQlFXaENPMHRCUVZRc1EwRkJlRUlzUTBGR1dUdEJRVWRhTEZkQlFVOHNVVUZCVUN4RFFVaFpPenM3UVVGdVExWXNORUpCZVVOS0xDdERRVUZ0UWp0QlFVTnFRaXhYUVVGUkxFdEJRVXNzWjBKQlFVd3NTMEZCTUVJc1EwRkJNVUlzUTBGRVV6czdPMU5CZWtObU96czdhMEpCT0VOVExGVkJRVU1zVDBGQlJDeEZRVUZWTEV0QlFWWXNSVUZCYjBJN1FVRkRha01zVTBGQlR5eEpRVUZKTEdWQlFVbzdRVUZEVER0TFFVTkhMRTFCUmtVc1EwRkJVQ3hEUVVScFF6dERRVUZ3UWlJc0ltWnBiR1VpT2lKamIyMXdiM05wZEdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNWNibU5zWVhOeklFTnZiWEJ2YzJsMFpVRmpkR2x2YmlCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCaFkzUnBiMjV6TENBdUxpNXlaVzFoYVc1cGJtZFFjbTl3Y3lCOUlEMGdjSEp2Y0hNN1hHNGdJQ0FnYzNWd1pYSW9jbVZ0WVdsdWFXNW5VSEp2Y0hNcE8xeHVJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRDQTlJSHQ5TzF4dUlDQWdJSFJvYVhNdVlXTjBhVzl1UzJWNWN5QTlJRnRkTzF4dUlDQWdJSFJvYVhNdVlXUmtRV04wYVc5dWN5aHdjbTl3Y3k1aFkzUnBiMjV6S1R0Y2JpQWdmVnh1WEc0Z0lHRmtaRUZqZEdsdmJuTW9ZV04wYVc5dWN5a2dlMXh1SUNBZ0lHWnZjaUFvWTI5dWMzUWdhMlY1SUdsdUlHRmpkR2x2Ym5NcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtRmpkR2x2Ymt0bGVYTXVhVzVrWlhoUFppaHJaWGtwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbUZqZEdsdmJrdGxlWE11Y0hWemFDaHJaWGtwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCMGFHbHpXMnRsZVYwZ1BTQmhZM1JwYjI1elcydGxlVjA3WEc0Z0lDQWdJQ0IwYUdselcydGxlVjB1YzJWMFVISnZjSE1vZTF4dUlDQWdJQ0FnSUNBdkx5Qk1iMjlySUdsdWRHOGdjSEpwZG1GMFpTQnpaWFIwWVdKc1pTQm1kVzVqZEdsdmJuTmNiaUFnSUNBZ0lDQWdYMjl1VlhCa1lYUmxPaUFvZGl3Z1lXTjBhVzl1S1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NWpkWEp5Wlc1MFcydGxlVjBnUFNCaFkzUnBiMjR1WjJWMEtDazdYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUY5dmJsTjBiM0E2SUNncElEMCtJSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3kwdFhHNGdJQ0FnSUNCOUtUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnZibE4wWVhKMEtDa2dlMXh1SUNBZ0lIUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeUE5SUhSb2FYTXVZV04wYVc5dVMyVjVjeTVzWlc1bmRHZzdYRzRnSUNBZ2RHaHBjeTVoWTNScGIyNUxaWGx6TG1admNrVmhZMmdvS0d0bGVTa2dQVDRnZEdocGMxdHJaWGxkTG5OMFlYSjBLQ2twTzF4dUlDQjlYRzVjYmlBZ2IyNVRkRzl3S0NrZ2UxeHVJQ0FnSUhSb2FYTXVZV04wYVc5dVMyVjVjeTVtYjNKRllXTm9LQ2hyWlhrcElEMCtJSFJvYVhOYmEyVjVYUzV6ZEc5d0tDa3BPMXh1SUNCOVhHNWNiaUFnWjJWMFZtVnNiMk5wZEhrb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZG1Wc2IyTnBkSGtnUFNCN2ZUdGNiaUFnSUNCMGFHbHpMbUZqZEdsdmJrdGxlWE11Wm05eVJXRmphQ2dvYTJWNUtTQTlQaUIyWld4dlkybDBlVnRyWlhsZElEMGdkR2hwYzF0clpYbGRMbWRsZEZabGJHOWphWFI1S0NrcE8xeHVJQ0FnSUhKbGRIVnliaUIyWld4dlkybDBlVHRjYmlBZ2ZWeHVYRzRnSUdselFXTjBhVzl1UTI5dGNHeGxkR1VvS1NCN1hHNGdJQ0FnY21WMGRYSnVJQ2gwYUdsekxtNTFiVUZqZEdsMlpVRmpkR2x2Ym5NZ1BUMDlJREFwTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoaFkzUnBiMjV6TENCd2NtOXdjeWtnUFQ0Z2UxeHVJQ0J5WlhSMWNtNGdibVYzSUVOdmJYQnZjMmwwWlVGamRHbHZiaWg3WEc0Z0lDQWdZV04wYVc5dWN5eGNiaUFnSUNBdUxpNXdjbTl3YzF4dUlDQjlLVHRjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY29tcG9zaXRlID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9jb21wb3NpdGUnKTtcblxudmFyIF9jb21wb3NpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gY3JlYXRlUG9pbnRlcihfcmVmLCBfcmVmMikge1xuICB2YXIgeCA9IF9yZWYueDtcbiAgdmFyIHkgPSBfcmVmLnk7XG4gIHZhciBldmVudFRvUG9pbnRzID0gX3JlZjIuZXZlbnRUb1BvaW50cztcbiAgdmFyIG1vdmVFdmVudCA9IF9yZWYyLm1vdmVFdmVudDtcblxuXG4gIHZhciBwb2ludGVyID0gKDAsIF9jb21wb3NpdGUyLmRlZmF1bHQpKHtcbiAgICB4OiB7XG4gICAgICBmcm9tOiB4XG4gICAgfSxcbiAgICB5OiB7XG4gICAgICBmcm9tOiB4XG4gICAgfVxuICB9KTtcblxuICBwb2ludGVyLnNldFByb3BzKHtcbiAgICBfb25TdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgcG9pbnRlci51cGRhdGUpO1xuICAgIH0sXG4gICAgX29uU3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgcG9pbnRlci51cGRhdGUpO1xuICAgIH0sXG4gICAgX29uVXBkYXRlOiBmdW5jdGlvbiAoKSB7fVxuICB9KTtcbn1cblxudmFyIFBvaW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBvaW50ZXIoX3JlZjMsIF9yZWY0KSB7XG4gICAgdmFyIHggPSBfcmVmMy54O1xuICAgIHZhciB5ID0gX3JlZjMueTtcbiAgICB2YXIgZXZlbnRUb1BvaW50cyA9IF9yZWY0LmV2ZW50VG9Qb2ludHM7XG4gICAgdmFyIG1vdmVFdmVudCA9IF9yZWY0Lm1vdmVFdmVudDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb2ludGVyKTtcblxuICAgIHRoaXMueCA9IHZhbHVlKHgpO1xuICAgIHRoaXMueSA9IHZhbHVlKHkpO1xuICAgIHRoaXMubW92ZUV2ZW50ID0gbW92ZUV2ZW50O1xuICAgIHRoaXMuZXZlbnRUb1BvaW50cyA9IGV2ZW50VG9Qb2ludHM7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgUG9pbnRlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIgX2V2ZW50VG9Qb2ludHMgPSB0aGlzLmV2ZW50VG9Qb2ludHMoZSk7XG5cbiAgICB2YXIgeCA9IF9ldmVudFRvUG9pbnRzLng7XG4gICAgdmFyIHkgPSBfZXZlbnRUb1BvaW50cy55O1xuXG4gICAgdGhpcy54LnVwZGF0ZSh4KTtcbiAgICB0aGlzLnkudXBkYXRlKHkpO1xuICB9O1xuXG4gIHJldHVybiBQb2ludGVyO1xufSgpO1xuXG52YXIgbW91c2VFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4ge1xuICAgIHg6IGUucGFnZVgsXG4gICAgeTogZS5wYWdlWVxuICB9O1xufTtcblxudmFyIHRvdWNoRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKF9yZWY1KSB7XG4gIHZhciBjaGFuZ2VkVG91Y2hlcyA9IF9yZWY1LmNoYW5nZWRUb3VjaGVzO1xuICByZXR1cm4ge1xuICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICB9O1xufTtcblxudmFyIGdldE5hdGl2ZUV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlLm5hdGl2ZUV2ZW50IHx8IGU7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZSkge1xuICB2YXIgbmF0aXZlRXZlbnQgPSBnZXROYXRpdmVFdmVudChlKTtcbiAgcmV0dXJuIG5hdGl2ZUV2ZW50LnRvdWNoZXMgPyBjcmVhdGVQb2ludGVyKHRvdWNoRXZlbnRUb1BvaW50KGUpLCB7XG4gICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICBldmVudFRvUG9pbnRzOiB0b3VjaEV2ZW50VG9Qb2ludFxuICB9KSA6IGNyZWF0ZVBvaW50ZXIobW91c2VFdmVudFRvUG9pbnQoZSksIHtcbiAgICBtb3ZlRXZlbnQ6ICdtb3VzZW1vdmUnLFxuICAgIGV2ZW50VG9Qb2ludHM6IG1vdXNlRXZlbnRUb1BvaW50XG4gIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJuQjFkQzl3YjJsdWRHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3pzN096czdRVUZGUVN4VFFVRlRMR0ZCUVZRc1kwRkJLMFE3VFVGQmRFTXNWMEZCYzBNN1RVRkJia01zVjBGQmJVTTdUVUZCTlVJc2IwTkJRVFJDTzAxQlFXSXNORUpCUVdFN096dEJRVVUzUkN4TlFVRk5MRlZCUVZVc2VVSkJRVlU3UVVGRGVFSXNUMEZCUnp0QlFVTkVMRmxCUVUwc1EwRkJUanRMUVVSR08wRkJSMEVzVDBGQlJ6dEJRVU5FTEZsQlFVMHNRMEZCVGp0TFFVUkdPMGRCU21Nc1EwRkJWaXhEUVVaMVJEczdRVUZYTjBRc1ZVRkJVU3hSUVVGU0xFTkJRV2xDTzBGQlEyWXNZMEZCVlR0aFFVRk5MRk5CUVZNc1pVRkJWQ3hEUVVGNVFpeG5Ra0ZCZWtJc1EwRkJNRU1zVTBGQk1VTXNSVUZCY1VRc1VVRkJVU3hOUVVGU08wdEJRVE5FTzBGQlExWXNZVUZCVXp0aFFVRk5MRk5CUVZNc1pVRkJWQ3hEUVVGNVFpeHRRa0ZCZWtJc1EwRkJOa01zVTBGQk4wTXNSVUZCZDBRc1VVRkJVU3hOUVVGU08wdEJRVGxFTzBGQlExUXNaVUZCVnl4WlFVRk5MRVZCUVU0N1IwRklZaXhGUVZnMlJEdERRVUV2UkRzN1NVRnJRazA3UVVGRFNpeFhRVVJKTEU5QlEwb3NaVUZCYjBRN1VVRkJkRU1zV1VGQmMwTTdVVUZCYmtNc1dVRkJiVU03VVVGQk5VSXNiME5CUVRSQ08xRkJRV0lzTkVKQlFXRTdPekJDUVVSb1JDeFRRVU5uUkRzN1FVRkRiRVFzVTBGQlN5eERRVUZNTEVkQlFWTXNUVUZCVFN4RFFVRk9MRU5CUVZRc1EwRkVhMFE3UVVGRmJFUXNVMEZCU3l4RFFVRk1MRWRCUVZNc1RVRkJUU3hEUVVGT0xFTkJRVlFzUTBGR2EwUTdRVUZIYkVRc1UwRkJTeXhUUVVGTUxFZEJRV2xDTEZOQlFXcENMRU5CU0d0RU8wRkJTV3hFTEZOQlFVc3NZVUZCVEN4SFFVRnhRaXhoUVVGeVFpeERRVXByUkR0QlFVdHNSQ3hUUVVGTExFMUJRVXdzUjBGQll5eExRVUZMTEUxQlFVd3NRMEZCV1N4SlFVRmFMRU5CUVdsQ0xFbEJRV3BDTEVOQlFXUXNRMEZNYTBRN1IwRkJjRVE3TzBGQlJFa3NiMEpCVTBvc2VVSkJRVThzUjBGQlJ6dEJRVU5TTEUxQlFVVXNZMEZCUml4SFFVUlJPenQ1UWtGRlV5eExRVUZMTEdGQlFVd3NRMEZCYlVJc1EwRkJia0lzUlVGR1ZEczdVVUZGUVN4eFFrRkdRVHRSUVVWSExIRkNRVVpJT3p0QlFVZFNMRk5CUVVzc1EwRkJUQ3hEUVVGUExFMUJRVkFzUTBGQll5eERRVUZrTEVWQlNGRTdRVUZKVWl4VFFVRkxMRU5CUVV3c1EwRkJUeXhOUVVGUUxFTkJRV01zUTBGQlpDeEZRVXBST3pzN1UwRlVUanM3TzBGQmEwSk9MRWxCUVUwc2IwSkJRVzlDTEZWQlFVTXNRMEZCUkR0VFFVRlJPMEZCUTJoRExFOUJRVWNzUlVGQlJTeExRVUZHTzBGQlEwZ3NUMEZCUnl4RlFVRkZMRXRCUVVZN08wTkJSbkZDT3p0QlFVc3hRaXhKUVVGTkxHOUNRVUZ2UWp0TlFVRkhPMU5CUVhOQ08wRkJRMnBFTEU5QlFVY3NaVUZCWlN4RFFVRm1MRVZCUVd0Q0xFOUJRV3hDTzBGQlEwZ3NUMEZCUnl4bFFVRmxMRU5CUVdZc1JVRkJhMElzVDBGQmJFSTdPME5CUm5GQ096dEJRVXN4UWl4SlFVRk5MR2xDUVVGcFFpeFZRVUZETEVOQlFVUTdVMEZCVHl4RlFVRkZMR0ZCUVVZc1NVRkJiVUlzUlVGQlJTeFhRVUZHTEVsQlFXbENMRU5CUVhCRE8wTkJRVkE3TzJ0Q1FVVlNMRlZCUVVNc1EwRkJSQ3hGUVVGUE8wRkJRM0JDTEUxQlFVMHNZMEZCWXl4bFFVRmxMRU5CUVdZc1EwRkJaQ3hEUVVSak8wRkJSWEJDTEZOQlFVOHNWMEZCUXl4RFFVRlpMRTlCUVZvc1IwRkRUaXhqUVVGakxHdENRVUZyUWl4RFFVRnNRaXhEUVVGa0xFVkJRVzlETzBGQlEyeERMR1ZCUVZjc1YwRkJXRHRCUVVOQkxHMUNRVUZsTEdsQ1FVRm1PMGRCUmtZc1EwRkVTeXhIUVV0TUxHTkJRV01zYTBKQlFXdENMRU5CUVd4Q0xFTkJRV1FzUlVGQmIwTTdRVUZEYkVNc1pVRkJWeXhYUVVGWU8wRkJRMEVzYlVKQlFXVXNhVUpCUVdZN1IwRkdSaXhEUVV4TExFTkJSbUU3UTBGQlVDSXNJbVpwYkdVaU9pSndiMmx1ZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQmpiMjF3YjNOcGRHVWdabkp2YlNBbkxpNHZZV04wYVc5dWN5OWpiMjF3YjNOcGRHVW5PMXh1WEc1bWRXNWpkR2x2YmlCamNtVmhkR1ZRYjJsdWRHVnlLSHNnZUN3Z2VTQjlMQ0I3SUdWMlpXNTBWRzlRYjJsdWRITXNJRzF2ZG1WRmRtVnVkQ0I5S1NCN1hHNWNiaUFnWTI5dWMzUWdjRzlwYm5SbGNpQTlJR052YlhCdmMybDBaU2g3WEc0Z0lDQWdlRG9nZTF4dUlDQWdJQ0FnWm5KdmJUb2dlRnh1SUNBZ0lIMHNYRzRnSUNBZ2VUb2dlMXh1SUNBZ0lDQWdabkp2YlRvZ2VGeHVJQ0FnSUgxY2JpQWdmU2s3WEc1Y2JpQWdjRzlwYm5SbGNpNXpaWFJRY205d2N5aDdYRzRnSUNBZ1gyOXVVM1JoY25RNklDZ3BJRDArSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLRzF2ZG1WRmRtVnVkQ3dnY0c5cGJuUmxjaTUxY0dSaGRHVXBMRnh1SUNBZ0lGOXZibE4wYjNBNklDZ3BJRDArSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0cxdmRtVkZkbVZ1ZEN3Z2NHOXBiblJsY2k1MWNHUmhkR1VwTEZ4dUlDQWdJRjl2YmxWd1pHRjBaVG9nS0NrZ1BUNGdlMzFjYmlBZ2ZTazdYRzU5WEc1Y2JtTnNZWE56SUZCdmFXNTBaWElnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWg3SUhnc0lIa2dmU3dnZXlCbGRtVnVkRlJ2VUc5cGJuUnpMQ0J0YjNabFJYWmxiblFnZlNrZ2UxeHVJQ0FnSUhSb2FYTXVlQ0E5SUhaaGJIVmxLSGdwTzF4dUlDQWdJSFJvYVhNdWVTQTlJSFpoYkhWbEtIa3BPMXh1SUNBZ0lIUm9hWE11Ylc5MlpVVjJaVzUwSUQwZ2JXOTJaVVYyWlc1ME8xeHVJQ0FnSUhSb2FYTXVaWFpsYm5SVWIxQnZhVzUwY3lBOUlHVjJaVzUwVkc5UWIybHVkSE03WEc0Z0lDQWdkR2hwY3k1MWNHUmhkR1VnUFNCMGFHbHpMblZ3WkdGMFpTNWlhVzVrS0hSb2FYTXBPMXh1SUNCOVhHNWNiaUFnZFhCa1lYUmxLR1VwSUh0Y2JpQWdJQ0JsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEc0Z0lDQWdZMjl1YzNRZ2V5QjRMQ0I1SUgwZ1BTQjBhR2x6TG1WMlpXNTBWRzlRYjJsdWRITW9aU2s3WEc0Z0lDQWdkR2hwY3k1NExuVndaR0YwWlNoNEtUdGNiaUFnSUNCMGFHbHpMbmt1ZFhCa1lYUmxLSGtwTzF4dUlDQjlYRzVjYm4xY2JseHVZMjl1YzNRZ2JXOTFjMlZGZG1WdWRGUnZVRzlwYm5RZ1BTQW9aU2tnUFQ0Z0tIdGNiaUFnZURvZ1pTNXdZV2RsV0N4Y2JpQWdlVG9nWlM1d1lXZGxXVnh1ZlNrN1hHNWNibU52Ym5OMElIUnZkV05vUlhabGJuUlViMUJ2YVc1MElEMGdLSHNnWTJoaGJtZGxaRlJ2ZFdOb1pYTWdmU2tnUFQ0Z0tIdGNiaUFnZURvZ1kyaGhibWRsWkZSdmRXTm9aWE5iTUYwdVkyeHBaVzUwV0N4Y2JpQWdlVG9nWTJoaGJtZGxaRlJ2ZFdOb1pYTmJNRjB1WTJ4cFpXNTBXVnh1ZlNrN1hHNWNibU52Ym5OMElHZGxkRTVoZEdsMlpVVjJaVzUwSUQwZ0tHVXBJRDArSUdVdWIzSnBaMmx1WVd4RmRtVnVkQ0I4ZkNCbExtNWhkR2wyWlVWMlpXNTBJSHg4SUdVN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaGxLU0E5UGlCN1hHNGdJR052Ym5OMElHNWhkR2wyWlVWMlpXNTBJRDBnWjJWMFRtRjBhWFpsUlhabGJuUW9aU2s3WEc0Z0lISmxkSFZ5YmlBb2JtRjBhWFpsUlhabGJuUXVkRzkxWTJobGN5a2dQMXh1SUNBZ0lHTnlaV0YwWlZCdmFXNTBaWElvZEc5MVkyaEZkbVZ1ZEZSdlVHOXBiblFvWlNrc0lIdGNiaUFnSUNBZ0lHMXZkbVZGZG1WdWREb2dKM1J2ZFdOb2JXOTJaU2NzWEc0Z0lDQWdJQ0JsZG1WdWRGUnZVRzlwYm5Sek9pQjBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRGeHVJQ0FnSUgwcElEcGNiaUFnSUNCamNtVmhkR1ZRYjJsdWRHVnlLRzF2ZFhObFJYWmxiblJVYjFCdmFXNTBLR1VwTENCN1hHNGdJQ0FnSUNCdGIzWmxSWFpsYm5RNklDZHRiM1Z6WlcxdmRtVW5MRnh1SUNBZ0lDQWdaWFpsYm5SVWIxQnZhVzUwY3pvZ2JXOTFjMlZGZG1WdWRGUnZVRzlwYm5SY2JpQWdJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5wdXQvcG9pbnRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lRW5kID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBleHBvcnRzLm9uRnJhbWVFbmQgPSBleHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLm9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLm9uRnJhbWVTdGFydCA9IHVuZGVmaW5lZDtcblxudmFyIF9vbk5leHRGcmFtZSA9IHJlcXVpcmUoJy4vb24tbmV4dC1mcmFtZScpO1xuXG52YXIgX29uTmV4dEZyYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29uTmV4dEZyYW1lKTtcblxudmFyIF9jcmVhdGVSZW5kZXJTdGVwID0gcmVxdWlyZSgnLi9jcmVhdGUtcmVuZGVyLXN0ZXAnKTtcblxudmFyIF9jcmVhdGVSZW5kZXJTdGVwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVJlbmRlclN0ZXApO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB3aWxsUmVuZGVyTmV4dEZyYW1lID0gZmFsc2U7XG5cbi8qKlxuICogTWF4aW11bSBwZXJtaXR0ZWQgbXMgc2luY2UgbGFzdCBmcmFtZVxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIE1BWF9FTEFQU0VEID0gMjA7XG5cbi8qKlxuICogQ3VycmVudCBmcmFtZXN0YW1wXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgY3VycmVudEZyYW1lc3RhbXAgPSAoMCwgX3V0aWxzLmN1cnJlbnRUaW1lKSgpO1xuXG52YXIgZWxhcHNlZCA9IDA7XG5cbi8qKlxuICogRmFjdG9yIHRvIG11bHRpcGx5IGBlbGFwc2VkYCBieSAtIFxuICogMC41IHdvdWxkIGJlIHNsb3cgbW90aW9uLCAyIHdvdWxkIGJlIGZhc3RcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBkaWxhdGlvbiA9IDE7XG5cbmZ1bmN0aW9uIHN0YXJ0UmVuZGVyTG9vcCgpIHtcbiAgaWYgKCF3aWxsUmVuZGVyTmV4dEZyYW1lKSB7XG4gICAgd2lsbFJlbmRlck5leHRGcmFtZSA9IHRydWU7XG4gICAgKDAsIF9vbk5leHRGcmFtZTIuZGVmYXVsdCkocHJvY2Vzc0ZyYW1lKTtcbiAgfVxufVxuXG52YXIgZnJhbWVTdGFydCA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcbnZhciBmcmFtZVVwZGF0ZSA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcbnZhciBmcmFtZVJlbmRlciA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcbnZhciBmcmFtZUVuZCA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcblxuZnVuY3Rpb24gcHJvY2Vzc0ZyYW1lKGZyYW1lc3RhbXApIHtcbiAgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnRGcmFtZXN0YW1wLCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gIGN1cnJlbnRGcmFtZXN0YW1wID0gZnJhbWVzdGFtcDtcblxuICBmcmFtZVN0YXJ0LnByb2Nlc3MoKTtcbiAgZnJhbWVVcGRhdGUucHJvY2VzcygpO1xuICBmcmFtZVJlbmRlci5wcm9jZXNzKCk7XG4gIGZyYW1lRW5kLnByb2Nlc3MoKTtcbn1cblxudmFyIG9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5zY2hlZHVsZTtcbnZhciBvbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZnJhbWVVcGRhdGUuc2NoZWR1bGU7XG52YXIgb25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGZyYW1lUmVuZGVyLnNjaGVkdWxlO1xudmFyIG9uRnJhbWVFbmQgPSBleHBvcnRzLm9uRnJhbWVFbmQgPSBmcmFtZUVuZC5zY2hlZHVsZTtcbnZhciBjYW5jZWxPbkZyYW1lU3RhcnQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGZyYW1lUmVuZGVyLmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lRW5kID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lRW5kID0gZnJhbWVFbmQuY2FuY2VsO1xuXG52YXIgdGltZVNpbmNlTGFzdEZyYW1lID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBlbGFwc2VkO1xufTtcbnZhciBjdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLmN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGN1cnJlbnRGcmFtZXN0YW1wO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bWNtRnRaWE41Ym1NdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdRVUZCUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkZRU3hKUVVGSkxITkNRVUZ6UWl4TFFVRjBRanM3T3pzN08wRkJUVW9zU1VGQlRTeGpRVUZqTEVWQlFXUTdPenM3T3p0QlFVMU9MRWxCUVVrc2IwSkJRVzlDTEhsQ1FVRndRanM3UVVGRlNpeEpRVUZKTEZWQlFWVXNRMEZCVmpzN096czdPenRCUVU5S0xFbEJRVWtzVjBGQlZ5eERRVUZZT3p0QlFVVktMRk5CUVZNc1pVRkJWQ3hIUVVFeVFqdEJRVU42UWl4TlFVRkpMRU5CUVVNc2JVSkJRVVFzUlVGQmMwSTdRVUZEZUVJc01FSkJRWE5DTEVsQlFYUkNMRU5CUkhkQ08wRkJSWGhDTEN0Q1FVRlpMRmxCUVZvc1JVRkdkMEk3UjBGQk1VSTdRMEZFUmpzN1FVRlBRU3hKUVVGTkxHRkJRV0VzWjBOQlFXbENMR1ZCUVdwQ0xFTkJRV0k3UVVGRFRpeEpRVUZOTEdOQlFXTXNaME5CUVdsQ0xHVkJRV3BDTEVOQlFXUTdRVUZEVGl4SlFVRk5MR05CUVdNc1owTkJRV2xDTEdWQlFXcENMRU5CUVdRN1FVRkRUaXhKUVVGTkxGZEJRVmNzWjBOQlFXbENMR1ZCUVdwQ0xFTkJRVmc3TzBGQlJVNHNVMEZCVXl4WlFVRlVMRU5CUVhOQ0xGVkJRWFJDTEVWQlFXdERPMEZCUTJoRExIZENRVUZ6UWl4TFFVRjBRaXhEUVVSblF6dEJRVVZvUXl4WlFVRlZMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVXNzUjBGQlRDeERRVUZUTEdGQlFXRXNhVUpCUVdJc1JVRkJaME1zVjBGQmVrTXNRMEZCVkN4RlFVRm5SU3hEUVVGb1JTeEpRVUZ4UlN4UlFVRnlSU3hEUVVaelFqdEJRVWRvUXl4elFrRkJiMElzVlVGQmNFSXNRMEZJWjBNN08wRkJTMmhETEdGQlFWY3NUMEZCV0N4SFFVeG5RenRCUVUxb1F5eGpRVUZaTEU5QlFWb3NSMEZPWjBNN1FVRlBhRU1zWTBGQldTeFBRVUZhTEVkQlVHZERPMEZCVVdoRExGZEJRVk1zVDBGQlZDeEhRVkpuUXp0RFFVRnNRenM3UVVGWFR5eEpRVUZOTEhORFFVRmxMRmRCUVZjc1VVRkJXRHRCUVVOeVFpeEpRVUZOTEhkRFFVRm5RaXhaUVVGWkxGRkJRVm83UVVGRGRFSXNTVUZCVFN4M1EwRkJaMElzV1VGQldTeFJRVUZhTzBGQlEzUkNMRWxCUVUwc2EwTkJRV0VzVTBGQlV5eFJRVUZVTzBGQlEyNUNMRWxCUVUwc2EwUkJRWEZDTEZkQlFWY3NUVUZCV0R0QlFVTXpRaXhKUVVGTkxHOUVRVUZ6UWl4WlFVRlpMRTFCUVZvN1FVRkROVUlzU1VGQlRTeHZSRUZCYzBJc1dVRkJXU3hOUVVGYU8wRkJRelZDTEVsQlFVMHNPRU5CUVcxQ0xGTkJRVk1zVFVGQlZEczdRVUZGZWtJc1NVRkJUU3hyUkVGQmNVSTdVMEZCVFR0RFFVRk9PMEZCUXpOQ0xFbEJRVTBzZDBSQlFYZENPMU5CUVUwN1EwRkJUaUlzSW1acGJHVWlPaUpwYm1SbGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdiMjVPWlhoMFJuSmhiV1VnWm5KdmJTQW5MaTl2YmkxdVpYaDBMV1p5WVcxbEp6dGNibWx0Y0c5eWRDQmpjbVZoZEdWU1pXNWtaWEpUZEdWd0lHWnliMjBnSnk0dlkzSmxZWFJsTFhKbGJtUmxjaTF6ZEdWd0p6dGNibWx0Y0c5eWRDQjdJR04xY25KbGJuUlVhVzFsSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1YkdWMElIZHBiR3hTWlc1a1pYSk9aWGgwUm5KaGJXVWdQU0JtWVd4elpUdGNibHh1THlvcVhHNGdLaUJOWVhocGJYVnRJSEJsY20xcGRIUmxaQ0J0Y3lCemFXNWpaU0JzWVhOMElHWnlZVzFsWEc0Z0tpQkFkSGx3WlNCN1RuVnRZbVZ5ZlZ4dUlDb3ZYRzVqYjI1emRDQk5RVmhmUlV4QlVGTkZSQ0E5SURJd08xeHVYRzR2S2lwY2JpQXFJRU4xY25KbGJuUWdabkpoYldWemRHRnRjRnh1SUNvZ1FIUjVjR1VnZTA1MWJXSmxjbjFjYmlBcUwxeHViR1YwSUdOMWNuSmxiblJHY21GdFpYTjBZVzF3SUQwZ1kzVnljbVZ1ZEZScGJXVW9LVHRjYmx4dWJHVjBJR1ZzWVhCelpXUWdQU0F3TzF4dVhHNHZLaXBjYmlBcUlFWmhZM1J2Y2lCMGJ5QnRkV3gwYVhCc2VTQmdaV3hoY0hObFpHQWdZbmtnTFNCY2JpQXFJREF1TlNCM2IzVnNaQ0JpWlNCemJHOTNJRzF2ZEdsdmJpd2dNaUIzYjNWc1pDQmlaU0JtWVhOMFhHNGdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ292WEc1c1pYUWdaR2xzWVhScGIyNGdQU0F4TzF4dVhHNW1kVzVqZEdsdmJpQnpkR0Z5ZEZKbGJtUmxja3h2YjNBb0tTQjdYRzRnSUdsbUlDZ2hkMmxzYkZKbGJtUmxjazVsZUhSR2NtRnRaU2tnZTF4dUlDQWdJSGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VnUFNCMGNuVmxPMXh1SUNBZ0lHOXVUbVY0ZEVaeVlXMWxLSEJ5YjJObGMzTkdjbUZ0WlNrN1hHNGdJSDFjYm4xY2JseHVZMjl1YzNRZ1puSmhiV1ZUZEdGeWRDQTlJR055WldGMFpWSmxibVJsY2xOMFpYQW9jM1JoY25SU1pXNWtaWEpNYjI5d0tUdGNibU52Ym5OMElHWnlZVzFsVlhCa1lYUmxJRDBnWTNKbFlYUmxVbVZ1WkdWeVUzUmxjQ2h6ZEdGeWRGSmxibVJsY2t4dmIzQXBPMXh1WTI5dWMzUWdabkpoYldWU1pXNWtaWElnUFNCamNtVmhkR1ZTWlc1a1pYSlRkR1Z3S0hOMFlYSjBVbVZ1WkdWeVRHOXZjQ2s3WEc1amIyNXpkQ0JtY21GdFpVVnVaQ0E5SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLVHRjYmx4dVpuVnVZM1JwYjI0Z2NISnZZMlZ6YzBaeVlXMWxLR1p5WVcxbGMzUmhiWEFwSUh0Y2JpQWdkMmxzYkZKbGJtUmxjazVsZUhSR2NtRnRaU0E5SUdaaGJITmxPMXh1SUNCbGJHRndjMlZrSUQwZ1RXRjBhQzV0WVhnb1RXRjBhQzV0YVc0b1puSmhiV1Z6ZEdGdGNDQXRJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdMQ0JOUVZoZlJVeEJVRk5GUkNrc0lERXBJQ29nWkdsc1lYUnBiMjQ3WEc0Z0lHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd0lEMGdabkpoYldWemRHRnRjRHRjYmx4dUlDQm1jbUZ0WlZOMFlYSjBMbkJ5YjJObGMzTW9LVHRjYmlBZ1puSmhiV1ZWY0dSaGRHVXVjSEp2WTJWemN5Z3BPMXh1SUNCbWNtRnRaVkpsYm1SbGNpNXdjbTlqWlhOektDazdYRzRnSUdaeVlXMWxSVzVrTG5CeWIyTmxjM01vS1R0Y2JuMWNibHh1Wlhod2IzSjBJR052Ym5OMElHOXVSbkpoYldWVGRHRnlkQ0E5SUdaeVlXMWxVM1JoY25RdWMyTm9aV1IxYkdVN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnYjI1R2NtRnRaVlZ3WkdGMFpTQTlJR1p5WVcxbFZYQmtZWFJsTG5OamFHVmtkV3hsTzF4dVpYaHdiM0owSUdOdmJuTjBJRzl1Um5KaGJXVlNaVzVrWlhJZ1BTQm1jbUZ0WlZKbGJtUmxjaTV6WTJobFpIVnNaVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnZia1p5WVcxbFJXNWtJRDBnWm5KaGJXVkZibVF1YzJOb1pXUjFiR1U3WEc1bGVIQnZjblFnWTI5dWMzUWdZMkZ1WTJWc1QyNUdjbUZ0WlZOMFlYSjBJRDBnWm5KaGJXVlRkR0Z5ZEM1allXNWpaV3c3WEc1bGVIQnZjblFnWTI5dWMzUWdZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU0E5SUdaeVlXMWxWWEJrWVhSbExtTmhibU5sYkR0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqWVc1alpXeFBia1p5WVcxbFVtVnVaR1Z5SUQwZ1puSmhiV1ZTWlc1a1pYSXVZMkZ1WTJWc08xeHVaWGh3YjNKMElHTnZibk4wSUdOaGJtTmxiRTl1Um5KaGJXVkZibVFnUFNCbWNtRnRaVVZ1WkM1allXNWpaV3c3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0IwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VnUFNBb0tTQTlQaUJsYkdGd2MyVmtPMXh1Wlhod2IzSjBJR052Ym5OMElHTjFjbkpsYm5SR2NtRnRaVlJwYldWemRHRnRjQ0E5SUNncElEMCtJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIID0gMS41MjU7XG5cbnZhciBjcmVhdGVSZXZlcnNlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzaW5nKDEgLSBwKTtcbiAgfTtcbn07XG52YXIgY3JlYXRlTWlycm9yZWRFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8PSAwLjUgPyBlYXNpbmcoMiAqIHApIC8gMiA6ICgyIC0gZWFzaW5nKDIgKiAoMSAtIHApKSkgLyAyO1xuICB9O1xufTs7XG5cbnZhciBsaW5lYXIgPSBleHBvcnRzLmxpbmVhciA9IGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwO1xufTtcblxudmFyIGNyZWF0ZUVhc2VJbiA9IGV4cG9ydHMuY3JlYXRlRWFzZUluID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBNYXRoLnBvdyhwLCBwb3dlcik7XG4gIH07XG59O1xudmFyIGVhc2VJbiA9IGV4cG9ydHMuZWFzZUluID0gY3JlYXRlRWFzZUluKDIpO1xudmFyIGVhc2VPdXQgPSBleHBvcnRzLmVhc2VPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNlSW4pO1xudmFyIGVhc2VJbk91dCA9IGV4cG9ydHMuZWFzZUluT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoZWFzZUluKTtcblxudmFyIGNpcmNJbiA9IGV4cG9ydHMuY2lyY0luID0gZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocCkpO1xufTtcbnZhciBjaXJjT3V0ID0gZXhwb3J0cy5jaXJjT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoY2lyY0luKTtcbnZhciBjaXJjSW5PdXQgPSBleHBvcnRzLmNpcmNJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGNpcmNPdXQpO1xuXG52YXIgY3JlYXRlQmFja0luID0gZXhwb3J0cy5jcmVhdGVCYWNrSW4gPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgKiBwICogKChwb3dlciArIDEpICogcCAtIHBvd2VyKTtcbiAgfTtcbn07XG52YXIgYmFja0luID0gZXhwb3J0cy5iYWNrSW4gPSBjcmVhdGVCYWNrSW4oREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xudmFyIGJhY2tPdXQgPSBleHBvcnRzLmJhY2tPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhiYWNrSW4pO1xudmFyIGJhY2tJbk91dCA9IGV4cG9ydHMuYmFja0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoYmFja0luKTtcblxudmFyIGNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgdmFyIGJhY2tFYXNpbmcgPSBjcmVhdGVCYWNrSW4ocG93ZXIpO1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gKHAgKj0gMikgPCAxID8gMC41ICogYmFja0Vhc2luZyhwKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHAgLSAxKSkpO1xuICB9O1xufTtcbnZhciBhbnRpY2lwYXRlID0gZXhwb3J0cy5hbnRpY2lwYXRlID0gY3JlYXRlQW50aWNpcGF0ZUVhc2luZyhERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWxZWE5wYm1jdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzU1VGQlRTdzJRa0ZCTmtJc1MwRkJOMEk3TzBGQlJVTXNTVUZCVFN4elJFRkJkVUlzVlVGQlF5eE5RVUZFTzFOQlFWa3NWVUZCUXl4RFFVRkVPMWRCUVU4c1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlNpeERRVUZZTzBkQlFWQTdRMEZCV2p0QlFVTTNRaXhKUVVGTkxITkVRVUYxUWl4VlFVRkRMRTFCUVVRN1UwRkJXU3hWUVVGRExFTkJRVVE3VjBGQlR5eERRVUZETEVsQlFVc3NSMEZCVEN4SFFVRlpMRTlCUVU4c1NVRkJTU3hEUVVGS0xFTkJRVkFzUjBGQlowSXNRMEZCYUVJc1IwRkJiMElzUTBGQlF5eEpRVUZKTEU5QlFVOHNTMEZCU3l4SlFVRkpMRU5CUVVvc1EwRkJUQ3hEUVVGWUxFTkJRVVFzUjBGQk5FSXNRMEZCTlVJN1IwRkJlRU03UTBGQldpeERRVUZyUmpzN1FVRkZMMGNzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRU5CUVVRN1UwRkJUenREUVVGUU96dEJRVVZtTEVsQlFVMHNjME5CUVdVc1ZVRkJReXhMUVVGRU8xTkJRVmNzVlVGQlF5eERRVUZFTzI5Q1FVRlBMRWRCUVVzN1IwRkJXanREUVVGWU8wRkJRM0pDTEVsQlFVMHNNRUpCUVZNc1lVRkJZU3hEUVVGaUxFTkJRVlE3UVVGRFRpeEpRVUZOTERSQ1FVRlZMSEZDUVVGeFFpeE5RVUZ5UWl4RFFVRldPMEZCUTA0c1NVRkJUU3huUTBGQldTeHhRa0ZCY1VJc1RVRkJja0lzUTBGQldqczdRVUZGVGl4SlFVRk5MREJDUVVGVExGVkJRVU1zUTBGQlJEdFRRVUZQTEVsQlFVa3NTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJTeXhKUVVGTUxFTkJRVlVzUTBGQlZpeERRVUZVTEVOQlFVbzdRMEZCVUR0QlFVTm1MRWxCUVUwc05FSkJRVlVzY1VKQlFYRkNMRTFCUVhKQ0xFTkJRVlk3UVVGRFRpeEpRVUZOTEdkRFFVRlpMSEZDUVVGeFFpeFBRVUZ5UWl4RFFVRmFPenRCUVVWT0xFbEJRVTBzYzBOQlFXVXNWVUZCUXl4TFFVRkVPMU5CUVZjc1ZVRkJReXhEUVVGRU8xZEJRVThzUTBGQlF5eEhRVUZKTEVOQlFVb3NTVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJVaXhEUVVGRUxFZEJRV01zUTBGQlpDeEhRVUZyUWl4TFFVRnNRaXhEUVVGWU8wZEJRVkE3UTBGQldEdEJRVU55UWl4SlFVRk5MREJDUVVGVExHRkJRV0VzTUVKQlFXSXNRMEZCVkR0QlFVTk9MRWxCUVUwc05FSkJRVlVzY1VKQlFYRkNMRTFCUVhKQ0xFTkJRVlk3UVVGRFRpeEpRVUZOTEdkRFFVRlpMSEZDUVVGeFFpeE5RVUZ5UWl4RFFVRmFPenRCUVVWT0xFbEJRVTBzTUVSQlFYbENMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJReTlETEUxQlFVMHNZVUZCWVN4aFFVRmhMRXRCUVdJc1EwRkJZaXhEUVVSNVF6dEJRVVV2UXl4VFFVRlBMRlZCUVVNc1EwRkJSRHRYUVVGUExFTkJRVVVzUzBGQlN5eERRVUZNTEVOQlFVUXNSMEZCVnl4RFFVRllMRWRCUVdkQ0xFMUJRVTBzVjBGQlZ5eERRVUZZTEVOQlFVNHNSMEZCYzBJc1QwRkJUeXhKUVVGSkxFdEJRVXNzUjBGQlRDeERRVUZUTEVOQlFWUXNSVUZCV1N4RFFVRkRMRVZCUVVRc1NVRkJUeXhKUVVGSkxFTkJRVW9zUTBGQlVDeERRVUZvUWl4RFFVRlFPMGRCUVRsRExFTkJSbmRETzBOQlFWZzdRVUZKTDBJc1NVRkJUU3hyUTBGQllTeDFRa0ZCZFVJc01FSkJRWFpDTEVOQlFXSWlMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lZMjl1YzNRZ1JFVkdRVlZNVkY5UFZrVlNVMGhQVDFSZlUxUlNSVTVIVkVnZ1BTQXhMalV5TlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bklEMGdLR1ZoYzJsdVp5a2dQVDRnS0hBcElEMCtJREVnTFNCbFlYTnBibWNvTVNBdElIQXBPMXh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlUxcGNuSnZjbVZrUldGemFXNW5JRDBnS0dWaGMybHVaeWtnUFQ0Z0tIQXBJRDArSUNod0lEdzlJREF1TlNrZ1B5QmxZWE5wYm1jb01pQXFJSEFwSUM4Z01pQTZJQ2d5SUMwZ1pXRnphVzVuS0RJZ0tpQW9NU0F0SUhBcEtTa2dMeUF5T3p0Y2JseHVaWGh3YjNKMElHTnZibk4wSUd4cGJtVmhjaUE5SUNod0tTQTlQaUJ3TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxSV0Z6WlVsdUlEMGdLSEJ2ZDJWeUtTQTlQaUFvY0NrZ1BUNGdjQ0FxS2lCd2IzZGxjanRjYm1WNGNHOXlkQ0JqYjI1emRDQmxZWE5sU1c0Z1BTQmpjbVZoZEdWRllYTmxTVzRvTWlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWldGelpVOTFkQ0E5SUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bktHVmhjMlZKYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWldGelpVbHVUM1YwSUQwZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY29aV0Z6WlVsdUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnBjbU5KYmlBOUlDaHdLU0E5UGlBeElDMGdUV0YwYUM1emFXNG9UV0YwYUM1aFkyOXpLSEFwS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYVhKalQzVjBJRDBnWTNKbFlYUmxVbVYyWlhKelpXUkZZWE5wYm1jb1kybHlZMGx1S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYVhKalNXNVBkWFFnUFNCamNtVmhkR1ZOYVhKeWIzSmxaRVZoYzJsdVp5aGphWEpqVDNWMEtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVKaFkydEpiaUE5SUNod2IzZGxjaWtnUFQ0Z0tIQXBJRDArSUNod0lDb2djQ2tnS2lBb0tIQnZkMlZ5SUNzZ01Ta2dLaUJ3SUMwZ2NHOTNaWElwTzF4dVpYaHdiM0owSUdOdmJuTjBJR0poWTJ0SmJpQTlJR055WldGMFpVSmhZMnRKYmloRVJVWkJWVXhVWDA5V1JWSlRTRTlQVkY5VFZGSkZUa2RVU0NrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWW1GamEwOTFkQ0E5SUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bktHSmhZMnRKYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWW1GamEwbHVUM1YwSUQwZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY29ZbUZqYTBsdUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVGdWRHbGphWEJoZEdWRllYTnBibWNnUFNBb2NHOTNaWElwSUQwK0lIdGNiaUFnWTI5dWMzUWdZbUZqYTBWaGMybHVaeUE5SUdOeVpXRjBaVUpoWTJ0SmJpaHdiM2RsY2lrN1hHNGdJSEpsZEhWeWJpQW9jQ2tnUFQ0Z0tDaHdJQ285SURJcElEd2dNU2tnUHlBd0xqVWdLaUJpWVdOclJXRnphVzVuS0hBcElEb2dNQzQxSUNvZ0tESWdMU0JOWVhSb0xuQnZkeWd5TENBdE1UQWdLaUFvY0NBdElERXBLU2s3WEc1OVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWVc1MGFXTnBjR0YwWlNBOUlHTnlaV0YwWlVGdWRHbGphWEJoZEdWRllYTnBibWNvUkVWR1FWVk1WRjlQVmtWU1UwaFBUMVJmVTFSU1JVNUhWRWdwTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2Vhc2luZy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFjdGlvbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyk7XG5cbiAgICB0aGlzLnNldFByb3BzKHByb3BzKTtcblxuICAgIHRoaXMuY3VycmVudCA9IHByb3BzLmN1cnJlbnQgfHwgMDtcbiAgfVxuXG4gIEFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgb25TdGFydCA9IF9wcm9wcy5vblN0YXJ0O1xuICAgIHZhciBfb25TdGFydCA9IF9wcm9wcy5fb25TdGFydDtcbiAgICB2YXIgcGFzc2l2ZSA9IF9wcm9wcy5wYXNzaXZlO1xuXG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy51cGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RhcnQpIHRoaXMub25TdGFydCgpO1xuICAgIGlmIChvblN0YXJ0KSBvblN0YXJ0KHRoaXMpO1xuICAgIGlmIChfb25TdGFydCkgX29uU3RhcnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgb25TdG9wID0gX3Byb3BzMi5vblN0b3A7XG4gICAgdmFyIF9vblN0b3AgPSBfcHJvcHMyLl9vblN0b3A7XG4gICAgdmFyIHBhc3NpdmUgPSBfcHJvcHMyLnBhc3NpdmU7XG5cblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgKDAsIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVVwZGF0ZSkodGhpcy51cGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RvcCkgdGhpcy5vblN0b3AoKTtcbiAgICBpZiAob25TdG9wKSBvblN0b3AodGhpcyk7XG4gICAgaWYgKF9vblN0b3ApIF9vblN0b3AodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvbkNvbXBsZXRlID0gX3Byb3BzMy5vbkNvbXBsZXRlO1xuICAgIHZhciBfb25Db21wbGV0ZSA9IF9wcm9wczMuX29uQ29tcGxldGU7XG5cblxuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKHRoaXMpO1xuICAgIGlmIChfb25Db21wbGV0ZSkgX29uQ29tcGxldGUodGhpcyk7XG5cbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCk7XG4gICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50O1xuXG4gICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvblVwZGF0ZSA9IF9wcm9wczQub25VcGRhdGU7XG4gICAgdmFyIF9vblVwZGF0ZSA9IF9wcm9wczQuX29uVXBkYXRlO1xuICAgIHZhciBwYXNzaXZlID0gX3Byb3BzNC5wYXNzaXZlO1xuXG5cbiAgICBpZiAodGhpcy5vblVwZGF0ZSkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHZhciBmaWx0ZXJlZCA9IHRoaXMuZ2V0KCk7XG4gICAgaWYgKG9uVXBkYXRlKSBvblVwZGF0ZShmaWx0ZXJlZCwgdGhpcyk7XG4gICAgaWYgKF9vblVwZGF0ZSkgX29uVXBkYXRlKGZpbHRlcmVkLCB0aGlzKTtcblxuICAgIGlmICghcGFzc2l2ZSAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiB0aGlzLmlzQWN0aW9uQ29tcGxldGUoKSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbiBzZXRQcm9wcyhwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgcHJvcHMpO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KCkge1xuICAgIHZhciBmaWx0ZXIgPSB0aGlzLnByb3BzLmZpbHRlcjtcblxuICAgIHJldHVybiBmaWx0ZXIgPyBmaWx0ZXIodGhpcy5jdXJyZW50KSA6IHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5zcGVlZFBlclNlY29uZCkodGhpcy5wcmV2IC0gdGhpcy5jdXJyZW50LCB0aGlzLmxhc3RVcGRhdGVkKTtcbiAgfTtcblxuICByZXR1cm4gQWN0aW9uO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGQk96dEJRVU5CT3pzN08wbEJSVTA3UVVGRFNpeFhRVVJKTEUxQlEwb3NRMEZCV1N4TFFVRmFMRVZCUVcxQ096QkNRVVJtTEZGQlEyVTdPMEZCUTJwQ0xGTkJRVXNzVFVGQlRDeEhRVUZqTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWxCUVZvc1EwRkJhVUlzU1VGQmFrSXNRMEZCWkN4RFFVUnBRanM3UVVGSGFrSXNVMEZCU3l4TFFVRk1MR2RDUVVOTExFdEJRVXNzVjBGQlRDeERRVUZwUWl4WlFVRnFRaXhEUVVSTUxFTkJTR2xDT3p0QlFVOXFRaXhUUVVGTExGRkJRVXdzUTBGQll5eExRVUZrTEVWQlVHbENPenRCUVZOcVFpeFRRVUZMTEU5QlFVd3NSMEZCWlN4TlFVRk5MRTlCUVU0c1NVRkJhVUlzUTBGQmFrSXNRMEZVUlR0SFFVRnVRanM3UVVGRVNTeHRRa0ZoU2l4NVFrRkJVVHRwUWtGRGFVTXNTMEZCU3l4TFFVRk1MRU5CUkdwRE8xRkJRMFVzZVVKQlJFWTdVVUZEVnl3eVFrRkVXRHRSUVVOeFFpeDVRa0ZFY2tJN096dEJRVWRPTEZGQlFVa3NRMEZCUXl4UFFVRkVMRVZCUVZVN1FVRkRXaXhYUVVGTExGRkJRVXdzUjBGQlowSXNTVUZCYUVJc1EwRkVXVHRCUVVWYUxHOURRVUZqTEV0QlFVc3NUVUZCVEN4RFFVRmtMRU5CUmxrN1MwRkJaRHM3UVVGTFFTeFJRVUZKTEV0QlFVc3NUMEZCVEN4RlFVRmpMRXRCUVVzc1QwRkJUQ3hIUVVGc1FqdEJRVU5CTEZGQlFVa3NUMEZCU2l4RlFVRmhMRkZCUVZFc1NVRkJVaXhGUVVGaU8wRkJRMEVzVVVGQlNTeFJRVUZLTEVWQlFXTXNVMEZCVXl4SlFVRlVMRVZCUVdRN08wRkJSVUVzVjBGQlR5eEpRVUZRTEVOQldrMDdPenRCUVdKS0xHMUNRVFJDU2l4MVFrRkJUenRyUWtGRFowTXNTMEZCU3l4TFFVRk1MRU5CUkdoRE8xRkJRMGNzZDBKQlJFZzdVVUZEVnl3d1FrRkVXRHRSUVVOdlFpd3dRa0ZFY0VJN096dEJRVWRNTEZGQlFVa3NRMEZCUXl4UFFVRkVMRVZCUVZVN1FVRkRXaXhYUVVGTExGRkJRVXdzUjBGQlowSXNTMEZCYUVJc1EwRkVXVHRCUVVWYUxEQkRRVUZ2UWl4TFFVRkxMRTFCUVV3c1EwRkJjRUlzUTBGR1dUdExRVUZrT3p0QlFVdEJMRkZCUVVrc1MwRkJTeXhOUVVGTUxFVkJRV0VzUzBGQlN5eE5RVUZNTEVkQlFXcENPMEZCUTBFc1VVRkJTU3hOUVVGS0xFVkJRVmtzVDBGQlR5eEpRVUZRTEVWQlFWbzdRVUZEUVN4UlFVRkpMRTlCUVVvc1JVRkJZU3hSUVVGUkxFbEJRVklzUlVGQllqczdRVUZGUVN4WFFVRlBMRWxCUVZBc1EwRmFTenM3TzBGQk5VSklMRzFDUVRKRFNpd3JRa0ZCVnp0clFrRkRNa0lzUzBGQlN5eExRVUZNTEVOQlJETkNPMUZCUTBRc1owTkJSRU03VVVGRFZ5eHJRMEZFV0RzN08wRkJSMVFzVVVGQlNTeExRVUZMTEZWQlFVd3NSVUZCYVVJc1MwRkJTeXhWUVVGTUxFZEJRWEpDTzBGQlEwRXNVVUZCU1N4VlFVRktMRVZCUVdkQ0xGZEJRVmNzU1VGQldDeEZRVUZvUWp0QlFVTkJMRkZCUVVrc1YwRkJTaXhGUVVGcFFpeFpRVUZaTEVsQlFWb3NSVUZCYWtJN08wRkJSVUVzVTBGQlN5eEpRVUZNTEVkQlVGTTdPMEZCVTFRc1YwRkJUeXhKUVVGUUxFTkJWRk03T3p0QlFUTkRVQ3h0UWtGMVJFb3NNa0pCUVZNN1FVRkRVQ3hUUVVGTExGZEJRVXdzUjBGQmJVSXNiME5CUVc1Q0xFTkJSRTg3UVVGRlVDeFRRVUZMTEVsQlFVd3NSMEZCV1N4TFFVRkxMRTlCUVV3c1EwRkdURHM3YTBKQlNXdERMRXRCUVVzc1MwRkJUQ3hEUVVwc1F6dFJRVWxETERSQ1FVcEVPMUZCU1Zjc09FSkJTbGc3VVVGSmMwSXNNRUpCU25SQ096czdRVUZOVUN4UlFVRkpMRXRCUVVzc1VVRkJUQ3hGUVVGbE8wRkJRMnBDTEZkQlFVc3NUMEZCVEN4SFFVRmxMRXRCUVVzc1VVRkJUQ3hGUVVGbUxFTkJSR2xDTzB0QlFXNUNPenRCUVVsQkxGRkJRVTBzVjBGQlZ5eExRVUZMTEVkQlFVd3NSVUZCV0N4RFFWWkRPMEZCVjFBc1VVRkJTU3hSUVVGS0xFVkJRV01zVTBGQlV5eFJRVUZVTEVWQlFXMUNMRWxCUVc1Q0xFVkJRV1E3UVVGRFFTeFJRVUZKTEZOQlFVb3NSVUZCWlN4VlFVRlZMRkZCUVZZc1JVRkJiMElzU1VGQmNFSXNSVUZCWmpzN1FVRkZRU3hSUVVGSkxFTkJRVU1zVDBGQlJDeEpRVUZaTEV0QlFVc3NVVUZCVEN4RlFVRmxPMEZCUXpkQ0xHOURRVUZqTEV0QlFVc3NUVUZCVEN4RFFVRmtMRU5CUkRaQ08wdEJRUzlDT3p0QlFVbEJMRkZCUVVrc1MwRkJTeXhuUWtGQlRDeEpRVUY1UWl4TFFVRkxMR2RDUVVGTUxFVkJRWHBDTEVWQlFXdEVPMEZCUTNCRUxGZEJRVXNzVVVGQlRDeEhRVVJ2UkR0TFFVRjBSRHM3UVVGSlFTeFhRVUZQTEVsQlFWQXNRMEYwUWs4N096dEJRWFpFVEN4dFFrRm5Sa29zTmtKQlFWTXNUMEZCVHp0QlFVTmtMRk5CUVVzc1MwRkJUQ3huUWtGRFN5eExRVUZMTEV0QlFVd3NSVUZEUVN4TlFVWk1MRU5CUkdNN096dEJRV2hHV2l4dFFrRjFSa29zY1VKQlFVMDdVVUZEU1N4VFFVRlhMRXRCUVVzc1MwRkJUQ3hEUVVGWUxFOUJSRW83TzBGQlJVb3NWMEZCVHl4VFFVRlRMRTlCUVU4c1MwRkJTeXhQUVVGTUxFTkJRV2hDTEVkQlFXZERMRXRCUVVzc1QwRkJUQ3hEUVVadVF6czdPMEZCZGtaR0xHMUNRVFJHU2l4eFEwRkJZenRCUVVOYUxGZEJRVThzTUVKQlFXVXNTMEZCU3l4SlFVRk1MRWRCUVZrc1MwRkJTeXhQUVVGTUxFVkJRV01zUzBGQlN5eFhRVUZNTEVOQlFXaEVMRU5CUkZrN096dFRRVFZHVmpzN08ydENRV2xIVXlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCdmJrWnlZVzFsVlhCa1lYUmxMQ0JqWVc1alpXeFBia1p5WVcxbFZYQmtZWFJsTENCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ2ZTQm1jbTl0SUNjdUxpOW1jbUZ0WlhONWJtTW5PMXh1YVcxd2IzSjBJSHNnYzNCbFpXUlFaWEpUWldOdmJtUWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JtTnNZWE56SUVGamRHbHZiaUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ2RHaHBjeTUxY0dSaGRHVWdQU0IwYUdsekxuVndaR0YwWlM1aWFXNWtLSFJvYVhNcE8xeHVYRzRnSUNBZ2RHaHBjeTV3Y205d2N5QTlJSHRjYmlBZ0lDQWdJQzR1TG5Sb2FYTXVZMjl1YzNSeWRXTjBiM0l1WkdWbVlYVnNkRkJ5YjNCelhHNGdJQ0FnZlR0Y2JseHVJQ0FnSUhSb2FYTXVjMlYwVUhKdmNITW9jSEp2Y0hNcE8xeHVYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJRDBnY0hKdmNITXVZM1Z5Y21WdWRDQjhmQ0F3TzF4dUlDQjlYRzVjYmlBZ2MzUmhjblFvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJ2YmxOMFlYSjBMQ0JmYjI1VGRHRnlkQ3dnY0dGemMybDJaU0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNibHh1SUNBZ0lHbG1JQ2doY0dGemMybDJaU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXBjMEZqZEdsMlpTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNCdmJrWnlZVzFsVlhCa1lYUmxLSFJvYVhNdWRYQmtZWFJsS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2RHaHBjeTV2YmxOMFlYSjBLU0IwYUdsekxtOXVVM1JoY25Rb0tUdGNiaUFnSUNCcFppQW9iMjVUZEdGeWRDa2diMjVUZEdGeWRDaDBhR2x6S1R0Y2JpQWdJQ0JwWmlBb1gyOXVVM1JoY25RcElGOXZibE4wWVhKMEtIUm9hWE1wTzF4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnpkRzl3S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYjI1VGRHOXdMQ0JmYjI1VGRHOXdMQ0J3WVhOemFYWmxJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2FXWWdLQ0Z3WVhOemFYWmxLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtbHpRV04wYVhabElEMGdabUZzYzJVN1hHNGdJQ0FnSUNCallXNWpaV3hQYmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11ZFhCa1lYUmxLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NXZibE4wYjNBcElIUm9hWE11YjI1VGRHOXdLQ2s3WEc0Z0lDQWdhV1lnS0c5dVUzUnZjQ2tnYjI1VGRHOXdLSFJvYVhNcE8xeHVJQ0FnSUdsbUlDaGZiMjVUZEc5d0tTQmZiMjVUZEc5d0tIUm9hWE1wTzF4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQmpiMjF3YkdWMFpTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHOXVRMjl0Y0d4bGRHVXNJRjl2YmtOdmJYQnNaWFJsSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdhV1lnS0hSb2FYTXViMjVEYjIxd2JHVjBaU2tnZEdocGN5NXZia052YlhCc1pYUmxLQ2s3WEc0Z0lDQWdhV1lnS0c5dVEyOXRjR3hsZEdVcElHOXVRMjl0Y0d4bGRHVW9kR2hwY3lrN1hHNGdJQ0FnYVdZZ0tGOXZia052YlhCc1pYUmxLU0JmYjI1RGIyMXdiR1YwWlNoMGFHbHpLVHRjYmx4dUlDQWdJSFJvYVhNdWMzUnZjQ2dwTzF4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQjFjR1JoZEdVb0tTQjdYRzRnSUNBZ2RHaHBjeTVzWVhOMFZYQmtZWFJsWkNBOUlIUnBiV1ZUYVc1alpVeGhjM1JHY21GdFpTZ3BPMXh1SUNBZ0lIUm9hWE11Y0hKbGRpQTlJSFJvYVhNdVkzVnljbVZ1ZER0Y2JseHVJQ0FnSUdOdmJuTjBJSHNnYjI1VmNHUmhkR1VzSUY5dmJsVndaR0YwWlN3Z2NHRnpjMmwyWlNCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbTl1VlhCa1lYUmxLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtTjFjbkpsYm5RZ1BTQjBhR2x6TG05dVZYQmtZWFJsS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTI5dWMzUWdabWxzZEdWeVpXUWdQU0IwYUdsekxtZGxkQ2dwTzF4dUlDQWdJR2xtSUNodmJsVndaR0YwWlNrZ2IyNVZjR1JoZEdVb1ptbHNkR1Z5WldRc0lIUm9hWE1wTzF4dUlDQWdJR2xtSUNoZmIyNVZjR1JoZEdVcElGOXZibFZ3WkdGMFpTaG1hV3gwWlhKbFpDd2dkR2hwY3lrN1hHNWNiaUFnSUNCcFppQW9JWEJoYzNOcGRtVWdKaVlnZEdocGN5NXBjMEZqZEdsMlpTa2dlMXh1SUNBZ0lDQWdiMjVHY21GdFpWVndaR0YwWlNoMGFHbHpMblZ3WkdGMFpTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWFYTkJZM1JwYjI1RGIyMXdiR1YwWlNBbUppQjBhR2x6TG1selFXTjBhVzl1UTI5dGNHeGxkR1VvS1NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVqYjIxd2JHVjBaU2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2MyVjBVSEp2Y0hNb2NISnZjSE1wSUh0Y2JpQWdJQ0IwYUdsekxuQnliM0J6SUQwZ2UxeHVJQ0FnSUNBZ0xpNHVkR2hwY3k1d2NtOXdjeXhjYmlBZ0lDQWdJQzR1TG5CeWIzQnpYRzRnSUNBZ2ZUdGNiaUFnZlZ4dVhHNGdJR2RsZENncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdacGJIUmxjaUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCeVpYUjFjbTRnWm1sc2RHVnlJRDhnWm1sc2RHVnlLSFJvYVhNdVkzVnljbVZ1ZENrZ09pQjBhR2x6TG1OMWNuSmxiblE3WEc0Z0lIMWNibHh1SUNCblpYUldaV3h2WTJsMGVTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2MzQmxaV1JRWlhKVFpXTnZibVFvZEdocGN5NXdjbVYySUMwZ2RHaHBjeTVqZFhKeVpXNTBMQ0IwYUdsekxteGhjM1JWY0dSaGRHVmtLVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JCWTNScGIyNDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbnZhciB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNhbWVsVG9EYXNoID0gZXhwb3J0cy5jYW1lbFRvRGFzaCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qXG4gIENyZWF0ZSBhIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgcmV0dXJuIHByZWZpeCArICcoJyArIHZhbHVlICsgJyknO1xufTtcblxuLypcbiAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgXG4gIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG52YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLmN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xufSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgQ2hlY2sgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eSBhbmQgaXQgaXNuJ3QgdW5kZWZpbmVkXG5cbiAgQHBhcmFtIFtvYmplY3RdXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtib29sZWFuXVxuKi9cbnZhciBoYXNQcm9wZXJ0eSA9IGV4cG9ydHMuaGFzUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpIHtcbiAgcmV0dXJuIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbnZhciBpc051bSA9IGV4cG9ydHMuaXNOdW0gPSBmdW5jdGlvbiAobnVtKSB7XG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xudmFyIGlzT2JqID0gZXhwb3J0cy5pc09iaiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcblxuLypcbiAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbnZhciBpc1JlbGF0aXZlVmFsdWUgPSBleHBvcnRzLmlzUmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbnZhciBpc1N0cmluZyA9IGV4cG9ydHMuaXNTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbi8qXG4gIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcbn07XG5cbi8qXG4gIFNwbGl0IHNwYWNlLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyBiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0U3BhY2VEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcGFyYW0gW251bWJlcl1cbiAgQHJldHVybiBbbnVtYmVyXVxuKi9cbnZhciB0b0RlY2ltYWwgPSBleHBvcnRzLnRvRGVjaW1hbCA9IGZ1bmN0aW9uIChudW0pIHtcbiAgdmFyIHByZWNpc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDIgOiBhcmd1bWVudHNbMV07XG5cbiAgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRYUnBiSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzU1VGQlRTeHhRa0ZCY1VJc2FVSkJRWEpDTzBGQlEwNHNTVUZCVFN4dFFrRkJiVUlzVDBGQmJrSTdRVUZEVGl4SlFVRk5MSE5DUVVGMVFpeFBRVUZQTEZkQlFWQXNTMEZCZFVJc1YwRkJka0lzU1VGQmMwTXNXVUZCV1N4SFFVRmFPenM3T3pzN096dEJRVkZ1UlN4SlFVRk5MRlZCUVZVc1ZVRkJReXhSUVVGRU8xTkJRV01zVDBGQlR5eFRRVUZRTEVOQlFXbENMRkZCUVdwQ0xFTkJRVEJDTEVsQlFURkNMRU5CUVN0Q0xGRkJRUzlDTEVWQlFYbERMRXRCUVhwRExFTkJRU3RETEVOQlFTOURMRVZCUVd0RUxFTkJRVU1zUTBGQlJEdERRVUZvUlRzN096czdPenM3UVVGUlZDeEpRVUZOTEc5RFFVRmpMRlZCUVVNc1RVRkJSRHRUUVVGWkxFOUJRVThzVDBGQlVDeERRVUZsTEd0Q1FVRm1MRVZCUVcxRExHZENRVUZ1UXl4RlFVRnhSQ3hYUVVGeVJEdERRVUZhT3pzN096czdPenM3T3p0QlFWZHdRaXhKUVVGTkxITkVRVUYxUWl4VlFVRkRMRXRCUVVRc1JVRkJVU3hOUVVGU08xTkJRWE5DTEdWQlFWVTdRMEZCYUVNN096czdPenM3UVVGUE4wSXNTVUZCVFN4dlEwRkJZeXh6UWtGQmMwSTdVMEZCVFN4WlFVRlpMRWRCUVZvN1EwRkJUaXhIUVVFd1FqdFRRVUZOTEVsQlFVa3NTVUZCU2l4SFFVRlhMRTlCUVZnN1EwRkJUanM3T3pzN096czdPMEZCVTNCRkxFbEJRVTBzYjBOQlFXTXNWVUZCUXl4TlFVRkVMRVZCUVZNc1dVRkJWRHRUUVVFd1FpeFBRVUZQTEdOQlFWQXNRMEZCYzBJc1dVRkJkRUlzUzBGQmRVTXNUMEZCVHl4WlFVRlFMRTFCUVhsQ0xGTkJRWHBDTzBOQlFXcEZPenM3T3pzN096dEJRVkZ3UWl4SlFVRk5MRFJDUVVGVkxGVkJRVU1zUjBGQlJEdFRRVUZUTEZGQlFWRXNSMEZCVWl4TlFVRnBRaXhQUVVGcVFqdERRVUZVT3pzN096czdPenRCUVZGb1FpeEpRVUZOTERCQ1FVRlRMRlZCUVVNc1IwRkJSRHRUUVVGVExGRkJRVkVzUjBGQlVpeE5RVUZwUWl4VlFVRnFRanREUVVGVU96czdPenM3T3p0QlFWRm1MRWxCUVUwc2QwSkJRVkVzVlVGQlF5eEhRVUZFTzFOQlFWTXNUMEZCVHl4SFFVRlFMRXRCUVdVc1VVRkJaanREUVVGVU96czdPenM3T3p0QlFWRmtMRWxCUVUwc2QwSkJRVkVzVlVGQlF5eEhRVUZFTzFOQlFWTXNUMEZCVHl4SFFVRlFMRXRCUVdVc1VVRkJaanREUVVGVU96czdPenM3T3p0QlFWRmtMRWxCUVUwc05FTkJRV3RDTEZWQlFVTXNTMEZCUkR0VFFVRlhMRXRCUVVNc1NVRkJVeXhOUVVGTkxFOUJRVTRzU1VGQmFVSXNUVUZCVFN4UFFVRk9MRU5CUVdNc1IwRkJaQ3hKUVVGeFFpeERRVUZ5UWl4SFFVRXdRaXhKUVVGeVJDeEhRVUUwUkN4TFFVRTFSRHREUVVGWU96czdPenM3T3p0QlFWRjRRaXhKUVVGTkxEaENRVUZYTEZWQlFVTXNSMEZCUkR0VFFVRlRMRTlCUVU4c1IwRkJVQ3hMUVVGbExGRkJRV1k3UTBGQlZEczdPenM3T3pzN096dEJRVlZxUWl4SlFVRk5MRzlFUVVGelFpeFZRVUZETEV0QlFVUTdVMEZCVnl4VFFVRlRMRXRCUVZRc1NVRkJhMElzVFVGQlRTeExRVUZPTEVOQlFWa3NUVUZCV2l4RFFVRnNRaXhIUVVGM1F5eERRVUZETEV0QlFVUXNRMEZCZUVNN1EwRkJXRHM3T3pzN096czdPenRCUVZVMVFpeEpRVUZOTEc5RVFVRnpRaXhWUVVGRExFdEJRVVE3VTBGQlZ5eFRRVUZUTEV0QlFWUXNTVUZCYTBJc1RVRkJUU3hMUVVGT0xFTkJRVmtzUjBGQldpeERRVUZzUWl4SFFVRnhReXhEUVVGRExFdEJRVVFzUTBGQmNrTTdRMEZCV0RzN096czdPenM3TzBGQlV6VkNMRWxCUVUwc1owTkJRVmtzVlVGQlF5eEhRVUZFTEVWQlFYZENPMDFCUVd4Q0xHdEZRVUZaTEdsQ1FVRk5PenRCUVVNdlF5eDFRa0ZCV1N4SlFVRk5MRlZCUVd4Q0xFTkJSQ3RETzBGQlJTOURMRk5CUVU4c1MwRkJTeXhMUVVGTUxFTkJRVmNzVFVGQlRTeFRRVUZPTEVOQlFWZ3NSMEZCT0VJc1UwRkJPVUlzUTBGR2QwTTdRMEZCZUVJaUxDSm1hV3hsSWpvaWRYUnBiSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVkyOXVjM1FnUTBGTlJVeGZRMEZUUlY5UVFWUlVSVkpPSUQwZ0x5aGJZUzE2WFNrb1cwRXRXbDBwTDJjN1hHNWpiMjV6ZENCU1JWQk1RVU5GWDFSRlRWQk1RVlJGSUQwZ0p5UXhMU1F5Snp0Y2JtTnZibk4wSUVoQlUxOVFSVkpHVDFKTlFVNURSVjlPVDFjZ1BTQW9kSGx3Wlc5bUlIQmxjbVp2Y20xaGJtTmxJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJ3WlhKbWIzSnRZVzVqWlM1dWIzY3BPMXh1WEc0dktseHVJQ0JIWlhRZ2RtRnlJSFI1Y0dVZ1lYTWdjM1J5YVc1blhHNGdJRnh1SUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFRvZ1VtVjBkWEp1Y3l3Z1ptOXlJR2x1YzNSaGJtTmxJQ2RQWW1wbFkzUW5JR2xtSUZ0dlltcGxZM1FnVDJKcVpXTjBYVnh1S2k5Y2JtTnZibk4wSUhaaGNsUjVjR1VnUFNBb2RtRnlhV0ZpYkdVcElEMCtJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVkRzlUZEhKcGJtY3VZMkZzYkNoMllYSnBZV0pzWlNrdWMyeHBZMlVvT0N3Z0xURXBPMXh1WEc0dktseHVJQ0JEYjI1MlpYSjBJR05oYldWc1EyRnpaU0IwYnlCa1lYTm9MV05oYzJWY2JseHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnUUhKbGRIVnliaUJiYzNSeWFXNW5YVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqWVcxbGJGUnZSR0Z6YUNBOUlDaHpkSEpwYm1jcElEMCtJSE4wY21sdVp5NXlaWEJzWVdObEtFTkJUVVZNWDBOQlUwVmZVRUZVVkVWU1Rpd2dVa1ZRVEVGRFJWOVVSVTFRVEVGVVJTa3VkRzlNYjNkbGNrTmhjMlVvS1R0Y2JseHVMeXBjYmlBZ1EzSmxZWFJsSUdFZ1puVnVZM1JwYjI0Z2MzUnlhVzVuWEc1Y2JpQWdKekl3Y0hnbkxDQW5kSEpoYm5Oc1lYUmxKeUF0UGlBbmRISmhibk5zWVhSbEtESXdjSGdwSjF4dVhHNGdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnUUhKbGRIVnliaUJiYzNSeWFXNW5YVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVkdkVzVqZEdsdmJsTjBjbWx1WnlBOUlDaDJZV3gxWlN3Z2NISmxabWw0S1NBOVBpQmdKSHR3Y21WbWFYaDlLQ1I3ZG1Gc2RXVjlLV0E3WEc1Y2JpOHFYRzRnSUVkbGJtVnlZWFJsSUdOMWNuSmxiblFnZEdsdFpYTjBZVzF3WEc0Z0lGeHVJQ0JBY21WMGRYSnVJRnQwYVcxbGMzUmhiWEJkT2lCRGRYSnlaVzUwSUZWT1NWZ2dkR2x0WlhOMFlXMXdYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUlVhVzFsSUQwZ1NFRlRYMUJGVWtaUFVrMUJUa05GWDA1UFZ5QS9JQ2dwSUQwK0lIQmxjbVp2Y20xaGJtTmxMbTV2ZHlncElEb2dLQ2tnUFQ0Z2JtVjNJRVJoZEdVb0tTNW5aWFJVYVcxbEtDazdYRzVjYmk4cVhHNGdJRU5vWldOcklHbG1JRzlpYW1WamRDQm9ZWE1nY0hKdmNHVnlkSGtnWVc1a0lHbDBJR2x6YmlkMElIVnVaR1ZtYVc1bFpGeHVYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVnh1SUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FHRnpVSEp2Y0dWeWRIa2dQU0FvYjJKcVpXTjBMQ0J3Y205d1pYSjBlVTVoYldVcElEMCtJRzlpYW1WamRDNW9ZWE5QZDI1UWNtOXdaWEowZVNod2NtOXdaWEowZVU1aGJXVXBJQ1ltSUc5aWFtVmpkRnR3Y205d1pYSjBlVTVoYldWZElDRTlQU0IxYm1SbFptbHVaV1E3WEc1Y2JpOHFYRzRnSUVseklIVjBhV3h6SUhaaGNpQmhiaUJoY25KaGVTQS9JRnh1SUNCY2JpQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkWFJwYkhNdWRtRnlWSGx3WlNBOVBUMGdKMEZ5Y21GNUoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMEZ5Y21GNUlEMGdLR0Z5Y2lrZ1BUNGdkbUZ5Vkhsd1pTaGhjbklwSUQwOVBTQW5RWEp5WVhrbk8xeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVNCbWRXNWpkR2x2YmlBL0lGeHVJQ0JjYmlBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RYUnBiSE11ZG1GeVZIbHdaU0E5UFQwZ0owWjFibU4wYVc5dUoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMFoxYm1NZ1BTQW9iMkpxS1NBOVBpQjJZWEpVZVhCbEtHOWlhaWtnUFQwOUlDZEdkVzVqZEdsdmJpYzdYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaElHNTFiV0psY2o5Y2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUE5UFQwZ0oyNTFiV0psY2lkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTk9kVzBnUFNBb2JuVnRLU0E5UGlCMGVYQmxiMllnYm5WdElEMDlQU0FuYm5WdFltVnlKenRjYmx4dUx5cGNiaUFnU1hNZ2RYUnBiSE1nZG1GeUlHRnVJRzlpYW1WamREOWNiaUFnWEc0Z0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIUjVjR1Z2WmlBOVBUMGdKMjlpYW1WamRDZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5QWW1vZ1BTQW9iMkpxS1NBOVBpQjBlWEJsYjJZZ2IySnFJRDA5UFNBbmIySnFaV04wSnp0Y2JseHVMeXBjYmlBZ1NYTWdkWFJwYkhNZ1lTQnlaV3hoZEdsMlpTQjJZV3gxWlNCaGMzTnBaMjV0Wlc1MFAxeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQkpaaUIxZEdsc2N5QnNiMjlyY3lCc2FXdGxJR0VnY21Wc1lYUnBkbVVnZG1Gc2RXVWdZWE56YVdkdWJXVnVkRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzFKbGJHRjBhWFpsVm1Gc2RXVWdQU0FvZG1Gc2RXVXBJRDArSUNoMllXeDFaU0FtSmlCMllXeDFaUzVwYm1SbGVFOW1JQ1ltSUhaaGJIVmxMbWx1WkdWNFQyWW9KejBuS1NBK0lEQXBJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVNCemRISnBibWNnUHlCY2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUJ6ZEhJZ1BUMDlJQ2R6ZEhKcGJtY25YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VTNSeWFXNW5JRDBnS0hOMGNpa2dQVDRnZEhsd1pXOW1JSE4wY2lBOVBUMGdKM04wY21sdVp5YzdYRzVjYmk4cVhHNGdJRk53YkdsMElHTnZiVzFoTFdSbGJHbHRhWFJsWkNCemRISnBibWRjYmx4dUlDQmNJbVp2Ynl4aVlYSmNJaUF0UGlCYlhDSm1iMjljSWl3Z1hDSmlZWEpjSWwxY2JseHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnUUhKbGRIVnliaUJiWVhKeVlYbGRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE53YkdsMFEyOXRiV0ZFWld4cGJXbDBaV1FnUFNBb2RtRnNkV1VwSUQwK0lHbHpVM1J5YVc1bktIWmhiSFZsS1NBL0lIWmhiSFZsTG5Od2JHbDBLQzhzWEZ4ektpOHBJRG9nVzNaaGJIVmxYVHRjYmx4dUx5cGNiaUFnVTNCc2FYUWdjM0JoWTJVdFpHVnNhVzFwZEdWa0lITjBjbWx1WjF4dVhHNGdJRndpWm05dklHSmhjbHdpSUMwK0lGdGNJbVp2YjF3aUxDQmNJbUpoY2x3aVhWeHVYRzRnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNCQWNtVjBkWEp1SUZ0aGNuSmhlVjFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNBOUlDaDJZV3gxWlNrZ1BUNGdhWE5UZEhKcGJtY29kbUZzZFdVcElEOGdkbUZzZFdVdWMzQnNhWFFvSnlBbktTQTZJRnQyWVd4MVpWMDdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdiblZ0WW1WeUlIUnZJSGdnWkdWamFXMWhiQ0J3YkdGalpYTmNibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2RHOUVaV05wYldGc0lEMGdLRzUxYlN3Z2NISmxZMmx6YVc5dUlEMGdNaWtnUFQ0Z2UxeHVJQ0J3Y21WamFYTnBiMjRnUFNBeE1DQXFLaUJ3Y21WamFYTnBiMjQ3WEc0Z0lISmxkSFZ5YmlCTllYUm9Mbkp2ZFc1a0tHNTFiU0FxSUhCeVpXTnBjMmx2YmlrZ0x5QndjbVZqYVhOcGIyNDdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICBEZXRlY3QgYW5kIGxvYWQgYW4gYXBwcm9wcmlhdGUgY2xvY2sgc2V0dGluZyBmb3IgdGhlIGVudmlyb25tZW50XG4qL1xudmFyIGhhc1JBRiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB0cnVlIDogZmFsc2U7XG5cbnZhciBvbk5leHRGcmFtZSA9IHZvaWQgMDtcblxuaWYgKGhhc1JBRikge1xuICBvbk5leHRGcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgfTtcbn0gZWxzZSB7XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgXG4gICAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG4gICAgICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgICAgXG4gICAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICAgIFxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICAgIFxuICAgICAgTUlUIGxpY2Vuc2VcbiAgICAqL1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgICBvbk5leHRGcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2LjcgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhsYXN0VGltZSk7XG4gICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICB9O1xuICB9KSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBvbk5leHRGcmFtZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bWNtRnRaWE41Ym1NdmIyNHRibVY0ZEMxbWNtRnRaUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZIUVN4SlFVRk5MRk5CUVZNc1QwRkJVU3hOUVVGUUxFdEJRV3RDTEZkQlFXeENMRWxCUVdsRExFOUJRVThzY1VKQlFWQXNSMEZCWjBNc1NVRkJiRVVzUjBGQmVVVXNTMEZCZWtVN08wRkJSV1lzU1VGQlNTeHZRa0ZCU2pzN1FVRkZRU3hKUVVGSkxFMUJRVW9zUlVGQldUdEJRVU5XTEdkQ1FVRmpMRlZCUVVNc1VVRkJSRHRYUVVGakxFOUJRVThzY1VKQlFWQXNRMEZCTmtJc1VVRkJOMEk3UjBGQlpDeERRVVJLTzBOQlFWb3NUVUZIVHpzN096czdPenM3T3pzN096czdPMEZCWlV3c1VVRkJTU3hYUVVGWExFTkJRVmc3TzBGQlJVb3NhMEpCUVdNc1ZVRkJReXhSUVVGRUxFVkJRV003UVVGRE1VSXNWVUZCVFN4alFVRmpMRWxCUVVrc1NVRkJTaXhIUVVGWExFOUJRVmdzUlVGQlpDeERRVVJ2UWp0QlFVVXhRaXhWUVVGTkxHRkJRV0VzUzBGQlN5eEhRVUZNTEVOQlFWTXNRMEZCVkN4RlFVRlpMRkZCUVZFc1kwRkJZeXhSUVVGa0xFTkJRVklzUTBGQmVrSXNRMEZHYjBJN08wRkJTVEZDTEdsQ1FVRlhMR05CUVdNc1ZVRkJaQ3hEUVVwbE96dEJRVTB4UWl4cFFrRkJWenRsUVVGTkxGTkJRVk1zVVVGQlZEdFBRVUZPTEVWQlFUQkNMRlZCUVhKRExFVkJUakJDTzB0QlFXUTdUMEZxUWxRN1EwRklVRHM3YTBKQk9FSmxJaXdpWm1sc1pTSTZJbTl1TFc1bGVIUXRabkpoYldVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ1JHVjBaV04wSUdGdVpDQnNiMkZrSUdGdUlHRndjSEp2Y0hKcFlYUmxJR05zYjJOcklITmxkSFJwYm1jZ1ptOXlJSFJvWlNCbGJuWnBjbTl1YldWdWRGeHVLaTljYm1OdmJuTjBJR2hoYzFKQlJpQTlJQ2gwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQjNhVzVrYjNjdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLU0EvSUhSeWRXVWdPaUJtWVd4elpUdGNibHh1YkdWMElHOXVUbVY0ZEVaeVlXMWxPMXh1WEc1cFppQW9hR0Z6VWtGR0tTQjdYRzRnSUc5dVRtVjRkRVp5WVcxbElEMGdLR05oYkd4aVlXTnJLU0E5UGlCM2FXNWtiM2N1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEtHTmhiR3hpWVdOcktUdGNibHh1ZlNCbGJITmxJSHRjYmlBZ0x5cGNiaUFnSUNCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVWdjRzlzZVdacGJHeGNiaUFnSUNCY2JpQWdJQ0JHYjNJZ1NVVTRMemtnUm14cGJuTjBiMjVsY3lCaGJtUWdibTl1TFdKeWIzZHpaWElnWlc1MmFYSnZibTFsYm5SelhHNWNiaUFnSUNCVVlXdGxiaUJtY205dElGQmhkV3dnU1hKcGMyZ3VJRmRsSjNabElITjBjbWx3Y0dWa0lHOTFkQ0JqWVc1alpXeEJibWx0WVhScGIyNUdjbUZ0WlNCamFHVmphM01nWW1WallYVnpaU0IzWlNCa2IyNG5kQ0JtYjNnZ2QybDBhQ0IwYUdGMFhHNGdJQ0FnWEc0Z0lDQWdhSFIwY0RvdkwzQmhkV3hwY21semFDNWpiMjB2TWpBeE1TOXlaWEYxWlhOMFlXNXBiV0YwYVc5dVpuSmhiV1V0Wm05eUxYTnRZWEowTFdGdWFXMWhkR2x1Wnk5Y2JpQWdJQ0JvZEhSd09pOHZiWGt1YjNCbGNtRXVZMjl0TDJWdGIyeHNaWEl2WW14dlp5OHlNREV4THpFeUx6SXdMM0psY1hWbGMzUmhibWx0WVhScGIyNW1jbUZ0WlMxbWIzSXRjMjFoY25RdFpYSXRZVzVwYldGMGFXNW5YRzRnSUNBZ0lGeHVJQ0FnSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTQndiMng1Wm1sc2JDQmllU0JGY21scklFM0R0bXhzWlhJdUlHWnBlR1Z6SUdaeWIyMGdVR0YxYkNCSmNtbHphQ0JoYm1RZ1ZHbHVieUJhYVdwa1pXeGNiaUFnSUNBZ1hHNGdJQ0FnVFVsVUlHeHBZMlZ1YzJWY2JpQWdLaTljYmlBZ2JHVjBJR3hoYzNSVWFXMWxJRDBnTUR0Y2JseHVJQ0J2Yms1bGVIUkdjbUZ0WlNBOUlDaGpZV3hzWW1GamF5a2dQVDRnZTF4dUlDQWdJR052Ym5OMElHTjFjbkpsYm5SVWFXMWxJRDBnYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsS0NrN1hHNGdJQ0FnWTI5dWMzUWdkR2x0WlZSdlEyRnNiQ0E5SUUxaGRHZ3ViV0Y0S0RBc0lERTJMamNnTFNBb1kzVnljbVZ1ZEZScGJXVWdMU0JzWVhOMFZHbHRaU2twTzF4dVhHNGdJQ0FnYkdGemRGUnBiV1VnUFNCamRYSnlaVzUwVkdsdFpTQXJJSFJwYldWVWIwTmhiR3c3WEc1Y2JpQWdJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJR05oYkd4aVlXTnJLR3hoYzNSVWFXMWxLU3dnZEdsdFpWUnZRMkZzYkNrN1hHNGdJSDA3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHOXVUbVY0ZEVaeVlXMWxPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL29uLW5leHQtZnJhbWUuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVSZW5kZXJTdGVwO1xuZnVuY3Rpb24gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApIHtcbiAgLyoqXG4gICAqIFdlIHVzZSB0d28gYXJyYXlzLCBvbmUgZm9yIHRoaXMgZnJhbWUgYW5kIG9uZSB0byBxdWV1ZSBmb3IgdGhlXG4gICAqIG5leHQgZnJhbWUsIHJldXNpbmcgZWFjaCB0byBhdm9pZCBHQy5cbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgdmFyIGZ1bmN0aW9uc1RvUnVuID0gW107XG4gIHZhciBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgc2NoZWR1bGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgc3RhcnRSZW5kZXJMb29wKCk7XG4gICAgICAvLyBJZiB0aGlzIGNhbGxiYWNrIGlzbid0IGFscmVhZHkgc2NoZWR1bGVkIHRvIHJ1biBuZXh0IGZyYW1lXG4gICAgICBpZiAoZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLnB1c2goY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjYW5jZWw6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdmFyIGluZGV4T2ZDYWxsYmFjayA9IGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgaWYgKGluZGV4T2ZDYWxsYmFjayAhPT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuc3BsaWNlKGluZGV4T2ZDYWxsYmFjaywgMSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHByb2Nlc3M6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgLy8gQ2xlYXIgbmV4dCBmcmFtZSBsaXN0XG4gICAgICB2YXIgX3JlZiA9IFtmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSwgZnVuY3Rpb25zVG9SdW5dO1xuICAgICAgLy8gU3dhcCB0aGlzIGZyYW1lIGFuZCBuZXh0IGZyYW1lIGFycmF5cyB0byBhdm9pZCBHQ1xuXG4gICAgICBmdW5jdGlvbnNUb1J1biA9IF9yZWZbMF07XG4gICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSA9IF9yZWZbMV07XG4gICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5sZW5ndGggPSAwO1xuXG4gICAgICAvLyBFeGVjdXRlIGFsbCBvZiB0aGlzIGZyYW1lJ3MgZnVuY3Rpb25zXG4gICAgICB2YXIgbnVtVGhpc0ZyYW1lID0gZnVuY3Rpb25zVG9SdW4ubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UaGlzRnJhbWU7IGkrKykge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bltpXSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bWNtRnRaWE41Ym1NdlkzSmxZWFJsTFhKbGJtUmxjaTF6ZEdWd0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGQmQwSTdRVUZCVkN4VFFVRlRMR2RDUVVGVUxFTkJRVEJDTEdWQlFURkNMRVZCUVRKRE96czdPenM3UVVGTmVFUXNUVUZCU1N4cFFrRkJhVUlzUlVGQmFrSXNRMEZPYjBRN1FVRlBlRVFzVFVGQlNTd3dRa0ZCTUVJc1JVRkJNVUlzUTBGUWIwUTdPMEZCVTNoRUxGTkJRVTg3UVVGRFRDeGpRVUZWTEZWQlFVTXNVVUZCUkN4RlFVRmpPMEZCUTNSQ096dEJRVVJ6UWl4VlFVZHNRaXgzUWtGQmQwSXNUMEZCZUVJc1EwRkJaME1zVVVGQmFFTXNUVUZCT0VNc1EwRkJReXhEUVVGRUxFVkJRVWs3UVVGRGNFUXNaME5CUVhkQ0xFbEJRWGhDTEVOQlFUWkNMRkZCUVRkQ0xFVkJSRzlFTzA5QlFYUkVPMHRCU0ZFN08wRkJVVllzV1VGQlVTeFZRVUZETEZGQlFVUXNSVUZCWXp0QlFVTndRaXhWUVVGTkxHdENRVUZyUWl4M1FrRkJkMElzVDBGQmVFSXNRMEZCWjBNc1VVRkJhRU1zUTBGQmJFSXNRMEZFWXp0QlFVVndRaXhWUVVGSkxHOUNRVUZ2UWl4RFFVRkRMRU5CUVVRc1JVRkJTVHRCUVVNeFFpeG5RMEZCZDBJc1RVRkJlRUlzUTBGQkswSXNaVUZCTDBJc1JVRkJaMFFzUTBGQmFFUXNSVUZFTUVJN1QwRkJOVUk3UzBGR1RUczdRVUZQVWl4aFFVRlRMRmxCUVUwN096dHBRa0ZGSzBJc1EwRkJReXgxUWtGQlJDeEZRVUV3UWl4alFVRXhRanM3UVVGR0wwSTdRVUZGV2l3clFrRkdXVHRCUVVWSkxIZERRVVpLTzBGQlMySXNPRUpCUVhkQ0xFMUJRWGhDTEVkQlFXbERMRU5CUVdwRE96czdRVUZNWVN4VlFWRlFMR1ZCUVdVc1pVRkJaU3hOUVVGbUxFTkJVbEk3UVVGVFlpeFhRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3haUVVGS0xFVkJRV3RDTEVkQlFXeERMRVZCUVhWRE8wRkJRM0pETEhWQ1FVRmxMRU5CUVdZc1NVRkVjVU03VDBGQmRrTTdTMEZVVHp0SFFXaENXQ3hEUVZSM1JEdERRVUV6UXlJc0ltWnBiR1VpT2lKamNtVmhkR1V0Y21WdVpHVnlMWE4wWlhBdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z1kzSmxZWFJsVW1WdVpHVnlVM1JsY0NoemRHRnlkRkpsYm1SbGNreHZiM0FwSUh0Y2JpQWdMeW9xWEc0Z0lDQXFJRmRsSUhWelpTQjBkMjhnWVhKeVlYbHpMQ0J2Ym1VZ1ptOXlJSFJvYVhNZ1puSmhiV1VnWVc1a0lHOXVaU0IwYnlCeGRXVjFaU0JtYjNJZ2RHaGxYRzRnSUNBcUlHNWxlSFFnWm5KaGJXVXNJSEpsZFhOcGJtY2daV0ZqYUNCMGJ5QmhkbTlwWkNCSFF5NWNiaUFnSUNvZ1FIUjVjR1VnZTBGeWNtRjVmVnh1SUNBZ0tpOWNiaUFnYkdWMElHWjFibU4wYVc5dWMxUnZVblZ1SUQwZ1cxMDdYRzRnSUd4bGRDQm1kVzVqZEdsdmJuTlViMUoxYms1bGVIUkdjbUZ0WlNBOUlGdGRPMXh1WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnYzJOb1pXUjFiR1U2SUNoallXeHNZbUZqYXlrZ1BUNGdlMXh1SUNBZ0lDQWdjM1JoY25SU1pXNWtaWEpNYjI5d0tDazdYRzRnSUNBZ0lDQXZMeUJKWmlCMGFHbHpJR05oYkd4aVlXTnJJR2x6YmlkMElHRnNjbVZoWkhrZ2MyTm9aV1IxYkdWa0lIUnZJSEoxYmlCdVpYaDBJR1p5WVcxbFhHNGdJQ0FnSUNCcFppQW9ablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldVdWFXNWtaWGhQWmloallXeHNZbUZqYXlrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTG5CMWMyZ29ZMkZzYkdKaFkyc3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmpZVzVqWld3NklDaGpZV3hzWW1GamF5a2dQVDRnZTF4dUlDQWdJQ0FnWTI5dWMzUWdhVzVrWlhoUFprTmhiR3hpWVdOcklEMGdablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldVdWFXNWtaWGhQWmloallXeHNZbUZqYXlrN1hHNGdJQ0FnSUNCcFppQW9hVzVrWlhoUFprTmhiR3hpWVdOcklDRTlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQm1kVzVqZEdsdmJuTlViMUoxYms1bGVIUkdjbUZ0WlM1emNHeHBZMlVvYVc1a1pYaFBaa05oYkd4aVlXTnJMQ0F4S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnY0hKdlkyVnpjem9nS0NrZ1BUNGdlMXh1SUNBZ0lDQWdMeThnVTNkaGNDQjBhR2x6SUdaeVlXMWxJR0Z1WkNCdVpYaDBJR1p5WVcxbElHRnljbUY1Y3lCMGJ5QmhkbTlwWkNCSFExeHVJQ0FnSUNBZ1cyWjFibU4wYVc5dWMxUnZVblZ1TENCbWRXNWpkR2x2Ym5OVWIxSjFiazVsZUhSR2NtRnRaVjBnUFNCYlpuVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1VzSUdaMWJtTjBhVzl1YzFSdlVuVnVYVHRjYmx4dUlDQWdJQ0FnTHk4Z1EyeGxZWElnYm1WNGRDQm1jbUZ0WlNCc2FYTjBYRzRnSUNBZ0lDQm1kVzVqZEdsdmJuTlViMUoxYms1bGVIUkdjbUZ0WlM1c1pXNW5kR2dnUFNBd08xeHVYRzRnSUNBZ0lDQXZMeUJGZUdWamRYUmxJR0ZzYkNCdlppQjBhR2x6SUdaeVlXMWxKM01nWm5WdVkzUnBiMjV6WEc0Z0lDQWdJQ0JqYjI1emRDQnVkVzFVYUdselJuSmhiV1VnUFNCbWRXNWpkR2x2Ym5OVWIxSjFiaTVzWlc1bmRHZzdYRzRnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlZSb2FYTkdjbUZ0WlRzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUdaMWJtTjBhVzl1YzFSdlVuVnVXMmxkS0NrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlPMXh1ZlNKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9jcmVhdGUtcmVuZGVyLXN0ZXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9