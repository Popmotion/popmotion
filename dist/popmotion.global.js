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
	exports.composite = exports.crossFade = exports.delay = exports.chain = exports.parallel = exports.physics = exports.tween = exports.Action = exports.filter = exports.calc = exports.easing = exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
	var _framesync = __webpack_require__(10);
	
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
	
	var _easing2 = __webpack_require__(11);
	
	var _easing = _interopRequireWildcard(_easing2);
	
	var _calc2 = __webpack_require__(2);
	
	var _calc = _interopRequireWildcard(_calc2);
	
	var _filters = __webpack_require__(3);
	
	var _filter = _interopRequireWildcard(_filters);
	
	var _actions = __webpack_require__(12);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _tween2 = __webpack_require__(4);
	
	var _tween3 = _interopRequireDefault(_tween2);
	
	var _physics2 = __webpack_require__(5);
	
	var _physics3 = _interopRequireDefault(_physics2);
	
	var _parallel2 = __webpack_require__(6);
	
	var _parallel3 = _interopRequireDefault(_parallel2);
	
	var _chain2 = __webpack_require__(7);
	
	var _chain3 = _interopRequireDefault(_chain2);
	
	var _delay2 = __webpack_require__(8);
	
	var _delay3 = _interopRequireDefault(_delay2);
	
	var _crossFade2 = __webpack_require__(9);
	
	var _crossFade3 = _interopRequireDefault(_crossFade2);
	
	var _composite2 = __webpack_require__(16);
	
	var _composite3 = _interopRequireDefault(_composite2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.easing = _easing;
	
	// Helpers
	
	exports.calc = _calc;
	exports.filter = _filter;
	
	// Actions
	
	exports.Action = _actions2.default;
	exports.tween = _tween3.default;
	exports.physics = _physics3.default;
	exports.parallel = _parallel3.default;
	exports.chain = _chain3.default;
	exports.delay = _delay3.default;
	exports.crossFade = _crossFade3.default;
	exports.composite = _composite3.default;
	
	//export Action from './actions';
	
	// export value from './value';
	// export Action from './actions';
	// export chain from './actions/chain';
	// export delay from './actions/delay';
	// export group from './actions/group';
	// export physics from './actions/physics';
	// export stagger from './actions/stagger';
	// export tween from './actions/tween';
	// export track from './actions/track';
	// export pointer from './input/pointer';
	// export * as easing from './easing';
	
	// export { color } from './value/types';
	
	//export cssRender from './render/css';
	
	// export timeline from './inc/timeline';
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzQkFFRTs7Ozs7O3NCQUNBOzs7Ozs7c0JBQ0E7Ozs7OztzQkFDQTs7Ozs7O3NCQUNBOzs7Ozs7c0JBQ0E7Ozs7OztzQkFDQTs7Ozs7O3NCQUNBOzs7Ozs7c0JBQ0E7Ozs7OztzQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUlVOzs7O1FBQ0E7UUFDQTs7OztRQUdMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EiLCJmaWxlIjoicG9wbW90aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZyYW1lc3luYyBzY2hlZHVsZXJzXG5leHBvcnQge1xuICBvbkZyYW1lU3RhcnQsXG4gIG9uRnJhbWVVcGRhdGUsXG4gIG9uRnJhbWVSZW5kZXIsXG4gIG9uRnJhbWVFbmQsXG4gIGNhbmNlbE9uRnJhbWVTdGFydCxcbiAgY2FuY2VsT25GcmFtZVVwZGF0ZSxcbiAgY2FuY2VsT25GcmFtZVJlbmRlcixcbiAgY2FuY2VsT25GcmFtZUVuZCxcbiAgdGltZVNpbmNlTGFzdEZyYW1lLFxuICBjdXJyZW50RnJhbWVUaW1lc3RhbXBcbn0gZnJvbSAnLi9mcmFtZXN5bmMnO1xuXG4vLyBIZWxwZXJzXG5leHBvcnQgKiBhcyBlYXNpbmcgZnJvbSAnLi9lYXNpbmcnO1xuZXhwb3J0ICogYXMgY2FsYyBmcm9tICcuL2luYy9jYWxjJztcbmV4cG9ydCAqIGFzIGZpbHRlciBmcm9tICcuL2luYy9maWx0ZXJzJztcblxuLy8gQWN0aW9uc1xuZXhwb3J0IEFjdGlvbiBmcm9tICcuL2FjdGlvbnMnO1xuZXhwb3J0IHR3ZWVuIGZyb20gJy4vYWN0aW9ucy90d2Vlbic7XG5leHBvcnQgcGh5c2ljcyBmcm9tICcuL2FjdGlvbnMvcGh5c2ljcyc7XG5leHBvcnQgcGFyYWxsZWwgZnJvbSAnLi9hY3Rpb25zL3BhcmFsbGVsJztcbmV4cG9ydCBjaGFpbiBmcm9tICcuL2FjdGlvbnMvY2hhaW4nO1xuZXhwb3J0IGRlbGF5IGZyb20gJy4vYWN0aW9ucy9kZWxheSc7XG5leHBvcnQgY3Jvc3NGYWRlIGZyb20gJy4vYWN0aW9ucy9jcm9zcy1mYWRlJztcbmV4cG9ydCBjb21wb3NpdGUgZnJvbSAnLi9hY3Rpb25zL2NvbXBvc2l0ZSc7XG5cbi8vZXhwb3J0IEFjdGlvbiBmcm9tICcuL2FjdGlvbnMnO1xuXG4vLyBleHBvcnQgdmFsdWUgZnJvbSAnLi92YWx1ZSc7XG4vLyBleHBvcnQgQWN0aW9uIGZyb20gJy4vYWN0aW9ucyc7XG4vLyBleHBvcnQgY2hhaW4gZnJvbSAnLi9hY3Rpb25zL2NoYWluJztcbi8vIGV4cG9ydCBkZWxheSBmcm9tICcuL2FjdGlvbnMvZGVsYXknO1xuLy8gZXhwb3J0IGdyb3VwIGZyb20gJy4vYWN0aW9ucy9ncm91cCc7XG4vLyBleHBvcnQgcGh5c2ljcyBmcm9tICcuL2FjdGlvbnMvcGh5c2ljcyc7XG4vLyBleHBvcnQgc3RhZ2dlciBmcm9tICcuL2FjdGlvbnMvc3RhZ2dlcic7XG4vLyBleHBvcnQgdHdlZW4gZnJvbSAnLi9hY3Rpb25zL3R3ZWVuJztcbi8vIGV4cG9ydCB0cmFjayBmcm9tICcuL2FjdGlvbnMvdHJhY2snO1xuLy8gZXhwb3J0IHBvaW50ZXIgZnJvbSAnLi9pbnB1dC9wb2ludGVyJztcbi8vIGV4cG9ydCAqIGFzIGVhc2luZyBmcm9tICcuL2Vhc2luZyc7XG5cbi8vIGV4cG9ydCB7IGNvbG9yIH0gZnJvbSAnLi92YWx1ZS90eXBlcyc7XG5cblxuLy9leHBvcnQgY3NzUmVuZGVyIGZyb20gJy4vcmVuZGVyL2Nzcyc7XG5cblxuLy8gZXhwb3J0IHRpbWVsaW5lIGZyb20gJy4vaW5jL3RpbWVsaW5lJztcbiJdfQ==

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.relativeValue = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.getProgressFromValue = exports.getValueFromProgress = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(13);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvY2FsYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQU9BLElBQU0sYUFBYTtBQUNqQixLQUFHLENBQUg7QUFDQSxLQUFHLENBQUg7QUFDQSxLQUFHLENBQUg7Q0FISTs7QUFNTixJQUFNLGFBQWEsVUFBQyxDQUFELEVBQUksQ0FBSjtTQUFVLEtBQUssR0FBTCxDQUFTLElBQUksQ0FBSjtDQUFuQjs7Ozs7Ozs7Ozs7O0FBWVosSUFBTSx3QkFBUSxVQUFDLENBQUQ7TUFBSSwwREFBSTtTQUFlLGlCQUFpQixLQUFLLEtBQUwsQ0FBVyxFQUFFLENBQUYsR0FBTSxFQUFFLENBQUYsRUFBSyxFQUFFLENBQUYsR0FBTSxFQUFFLENBQUYsQ0FBN0M7Q0FBdkI7Ozs7Ozs7O0FBUWQsSUFBTSw4Q0FBbUIsVUFBQyxPQUFEO1NBQWEsVUFBVSxLQUFLLEVBQUwsR0FBVSxHQUFwQjtDQUFiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CekIsSUFBTSwwQkFBUyxVQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sUUFBUDtTQUFvQixJQUFLLENBQUMsSUFBSSxDQUFKLENBQUQsR0FBVSxRQUFWO0NBQXpCOzs7Ozs7Ozs7OztBQVdmLElBQU0sOEJBQVcsVUFBQyxDQUFELEVBQXVCO01BQW5CLDBEQUFJLDBCQUFlOzs7QUFFN0MsTUFBSSxrQkFBTSxDQUFOLENBQUosRUFBYztBQUNaLFdBQU8sV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFQOzs7QUFEWSxHQUFkLE1BSU87QUFDTCxVQUFNLFNBQVMsV0FBVyxFQUFFLENBQUYsRUFBSyxFQUFFLENBQUYsQ0FBekIsQ0FERDtBQUVMLFVBQU0sU0FBUyxXQUFXLEVBQUUsQ0FBRixFQUFLLEVBQUUsQ0FBRixDQUF6QixDQUZEO0FBR0wsVUFBTSxTQUFTLGlCQUFDLENBQU0sRUFBRSxDQUFGLENBQVAsR0FBZSxXQUFXLEVBQUUsQ0FBRixFQUFLLEVBQUUsQ0FBRixDQUEvQixHQUFzQyxDQUF0QyxDQUhWOztBQUtMLGFBQU8sS0FBSyxJQUFMLENBQVUsU0FBQyxRQUFVLEVBQVgsWUFBaUIsUUFBVSxFQUEzQixZQUFpQyxRQUFVLEVBQTNDLENBQWpCLENBTEs7S0FKUDtDQUZzQjs7Ozs7Ozs7Ozs7OztBQTBCakIsSUFBTSxzREFBdUIsVUFBQyxJQUFELEVBQU8sRUFBUCxFQUFXLFFBQVg7U0FBd0IsQ0FBRyxRQUFGLEdBQWEsSUFBYixHQUFzQixXQUFXLEVBQVgsR0FBaUIsSUFBeEM7Q0FBeEI7Ozs7Ozs7Ozs7Ozs7O0FBYzdCLElBQU0sc0RBQXVCLFVBQUMsSUFBRCxFQUFPLEVBQVAsRUFBVyxLQUFYO1NBQXFCLENBQUMsUUFBUSxJQUFSLENBQUQsSUFBa0IsS0FBSyxJQUFMLENBQWxCO0NBQXJCOzs7Ozs7Ozs7O0FBVTdCLElBQU0sZ0VBQTRCLFVBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsUUFBaEIsRUFBNkI7QUFDcEUsVUFBUSxpQkFBaUIsS0FBakIsQ0FBUixDQURvRTs7QUFHcEUsU0FBTztBQUNMLE9BQUcsV0FBVyxLQUFLLEdBQUwsQ0FBUyxLQUFULENBQVgsR0FBNkIsT0FBTyxDQUFQO0FBQ2hDLE9BQUcsV0FBVyxLQUFLLEdBQUwsQ0FBUyxLQUFULENBQVgsR0FBNkIsT0FBTyxDQUFQO0dBRmxDLENBSG9FO0NBQTdCOzs7Ozs7OztBQWVsQyxJQUFNLDhDQUFtQixVQUFDLE9BQUQ7U0FBYSxVQUFVLEdBQVYsR0FBZ0IsS0FBSyxFQUFMO0NBQTdCOzs7Ozs7Ozs7Ozs7QUFZekIsSUFBTSx3Q0FBZ0IsVUFBQyxPQUFELEVBQVUsUUFBVixFQUF1QjtBQUNsRCxNQUFJLFdBQVcsT0FBWCxDQUQ4QztBQUVsRCxNQUFNLFdBQVcsU0FBUyxLQUFULENBQWUsR0FBZixDQUFYLENBRjRDO0FBR2xELE1BQU0sV0FBVyxTQUFTLENBQVQsQ0FBWCxDQUg0Qzs7MEJBSTVCLDZCQUFpQixTQUFTLENBQVQsQ0FBakIsRUFKNEI7O01BSTVDLDhCQUo0QztNQUl0QyxnQ0FKc0M7OztBQU1sRCxVQUFRLFdBQVcsS0FBWCxDQUFSLENBTmtEOztBQVFsRCxVQUFRLFFBQVI7QUFDQSxTQUFLLEdBQUw7QUFDRSxrQkFBWSxLQUFaLENBREY7QUFFRSxZQUZGO0FBREEsU0FJSyxHQUFMO0FBQ0Usa0JBQVksS0FBWixDQURGO0FBRUUsWUFGRjtBQUpBLFNBT0ssR0FBTDtBQUNFLGtCQUFZLEtBQVosQ0FERjtBQUVFLFlBRkY7QUFQQSxTQVVLLEdBQUw7QUFDRSxrQkFBWSxLQUFaLENBREY7QUFFRSxZQUZGO0FBVkEsR0FSa0Q7O0FBdUJsRCxNQUFJLElBQUosRUFBVTtBQUNSLGdCQUFZLElBQVosQ0FEUTtHQUFWOztBQUlBLFNBQU8sUUFBUCxDQTNCa0Q7Q0FBdkI7Ozs7Ozs7Ozs7QUFzQ3RCLElBQU0sMEJBQVMsVUFBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixRQUFyQjtNQUErQixrRUFBWTtTQUFNLHNCQUFVLFdBQVksWUFBWSxXQUFXLFFBQVgsQ0FBWixHQUFtQyxLQUFLLEdBQUwsQ0FBUyxTQUFULEVBQW9CLFFBQXBCLENBQW5DO0NBQXZFOzs7Ozs7OztBQVFmLElBQU0sd0NBQWdCLFVBQUMsR0FBRCxFQUFNLGFBQU47U0FBd0IsaUJBQUMsQ0FBTSxHQUFOLENBQUQsR0FBZSxPQUFPLE9BQU8sYUFBUCxDQUFQLEdBQStCLENBQTlDO0NBQXhCOzs7Ozs7OztBQVF0QixJQUFNLDBDQUFpQixVQUFDLFFBQUQsRUFBVyxhQUFYO1NBQTZCLFlBQVksT0FBTyxhQUFQLENBQVo7Q0FBN0I7Ozs7Ozs7OztBQVN2QixJQUFNLHNDQUFlLFVBQUMsS0FBRCxFQUFRLFFBQVIsRUFBcUI7QUFDL0MsTUFBTSxVQUFVLEtBQUssUUFBUSxDQUFSLENBQUwsQ0FEK0I7QUFFL0MsTUFBTSxTQUFTLElBQUssSUFBSSxLQUFKLENBRjJCO0FBRy9DLE1BQU0sbUJBQW1CLEtBQUssR0FBTCxDQUFTLFdBQVcsTUFBWCxFQUFtQixDQUE1QixDQUFuQixDQUh5Qzs7QUFLL0MsU0FBTyxLQUFLLEtBQUwsQ0FBVyxtQkFBbUIsT0FBbkIsQ0FBWCxHQUF5QyxPQUF6QyxDQUx3QztDQUFyQiIsImZpbGUiOiJjYWxjLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGhhc1Byb3BlcnR5LFxuICBpc051bSxcbiAgZmluZFZhbHVlQW5kVW5pdCxcbiAgdG9EZWNpbWFsXG59IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBaRVJPX1BPSU5UID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB6OiAwXG59O1xuXG5jb25zdCBkaXN0YW5jZTFEID0gKGEsIGIpID0+IE1hdGguYWJzKGEgLSBiKTtcblxuLypcbiAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgXG4gIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICBhcmUgYXQgMCwwXG4gIFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgYW5nbGUgPSAoYSwgYiA9IFpFUk9fUE9JTlQpID0+IHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xuXG4vKlxuICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgZGVncmVlc1RvUmFkaWFucyA9IChkZWdyZWVzKSA9PiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcblxuLypcbiAgRGlsYXRlXG4gIFxuICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gIFxuICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgXG4gIGEgLS0tLS0tLS0tIGJcbiAgXG4gIHRvXG4gIFxuICBhIC0tLS0gYlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG5leHBvcnQgY29uc3QgZGlsYXRlID0gKGEsIGIsIGRpbGF0aW9uKSA9PiBhICsgKChiIC0gYSkgKiBkaWxhdGlvbik7XG5cbi8qXG4gIERpc3RhbmNlXG4gIFxuICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbmV4cG9ydCBjb25zdCBkaXN0YW5jZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4ge1xuICAvLyAxRCBkaW1lbnNpb25zXG4gIGlmIChpc051bShhKSkge1xuICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgY29uc3QgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgY29uc3QgekRlbHRhID0gKGlzTnVtKGEueikpID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgcmV0dXJuIE1hdGguc3FydCgoeERlbHRhICoqIDIpICsgKHlEZWx0YSAqKiAyKSArICh6RGVsdGEgKiogMikpO1xuICB9XG59O1xuXG4vKlxuICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSAoZnJvbSwgdG8sIHByb2dyZXNzKSA9PiAoLSBwcm9ncmVzcyAqIGZyb20pICsgKHByb2dyZXNzICogdG8pICsgZnJvbTtcblxuLypcbiAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xuZXhwb3J0IGNvbnN0IGdldFByb2dyZXNzRnJvbVZhbHVlID0gKGZyb20sIHRvLCB2YWx1ZSkgPT4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcblxuLypcbiAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xuZXhwb3J0IGNvbnN0IHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpID0+IHtcbiAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICByZXR1cm4ge1xuICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICB9O1xufTtcblxuLypcbiAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xuZXhwb3J0IGNvbnN0IHJhZGlhbnNUb0RlZ3JlZXMgPSAocmFkaWFucykgPT4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG5cbi8qXG4gIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICBcbiAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gIEByZXR1cm4gW251bWJlcl06IE5ldyB2YWx1ZVxuKi9cbmV4cG9ydCBjb25zdCByZWxhdGl2ZVZhbHVlID0gKGN1cnJlbnQsIHJlbGF0aXZlKSA9PiB7XG4gIGxldCBuZXdWYWx1ZSA9IGN1cnJlbnQ7XG4gIGNvbnN0IGVxdWF0aW9uID0gcmVsYXRpdmUuc3BsaXQoJz0nKTtcbiAgY29uc3Qgb3BlcmF0b3IgPSBlcXVhdGlvblswXTtcbiAgbGV0IHsgdW5pdCwgdmFsdWUgfSA9IGZpbmRWYWx1ZUFuZFVuaXQoZXF1YXRpb25bMV0pO1xuXG4gIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgc3dpdGNoIChvcGVyYXRvcikge1xuICBjYXNlICcrJzpcbiAgICBuZXdWYWx1ZSArPSB2YWx1ZTtcbiAgICBicmVhaztcbiAgY2FzZSAnLSc6XG4gICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgYnJlYWs7XG4gIGNhc2UgJyonOlxuICAgIG5ld1ZhbHVlICo9IHZhbHVlO1xuICAgIGJyZWFrO1xuICBjYXNlICcvJzpcbiAgICBuZXdWYWx1ZSAvPSB2YWx1ZTtcbiAgICBicmVhaztcbiAgfVxuICBcbiAgaWYgKHVuaXQpIHtcbiAgICBuZXdWYWx1ZSArPSB1bml0O1xuICB9XG5cbiAgcmV0dXJuIG5ld1ZhbHVlO1xufTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbmV4cG9ydCBjb25zdCBzbW9vdGggPSAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nID0gMCkgPT4gdG9EZWNpbWFsKG9sZFZhbHVlICsgKGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpKTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlckZyYW1lID0gKHhwcywgZnJhbWVEdXJhdGlvbikgPT4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHN0ZXBQcm9ncmVzcyA9IChzdGVwcywgcHJvZ3Jlc3MpID0+IHtcbiAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgY29uc3QgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpO1xuICBjb25zdCBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuIl19

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
	
	var _ = __webpack_require__(12);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(10);
	
	var _filters = __webpack_require__(3);
	
	var _calc = __webpack_require__(2);
	
	var _easing = __webpack_require__(11);
	
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
	  to: 0
	};
	
	exports.default = function (props) {
	  return new Tween(props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxnQkFBZ0Isb0JBQU0sQ0FBTixFQUFTLENBQVQsQ0FBaEI7O0lBRUE7Ozs7Ozs7OztrQkFRSiw2QkFBVTs7O2lCQUM2QixLQUFLLEtBQUwsQ0FEN0I7UUFDQSwyQkFEQTtRQUNVLG1CQURWO1FBQ2dCLG1CQURoQjtRQUNzQixlQUR0Qjs7O0FBR1IsU0FBSyxPQUFMLEdBQWUsQ0FBZixDQUhROztBQUtSLFNBQUssUUFBTCxHQUFnQixtQkFDZDthQUFNLE9BQUssT0FBTCxJQUFnQixvQ0FBaEI7S0FBTixFQUNBLFVBQUMsT0FBRDthQUFhLGdDQUFxQixDQUFyQixFQUF3QixRQUF4QixFQUFrQyxPQUFsQztLQUFiLEVBQ0EsYUFIYyxFQUlkLElBSmMsRUFLZCxVQUFDLGFBQUQ7YUFBbUIsZ0NBQXFCLElBQXJCLEVBQTJCLEVBQTNCLEVBQStCLGFBQS9CO0tBQW5CLENBTEYsQ0FMUTs7O0FBUk4sa0JBc0JKLCtDQUFtQjtBQUNqQixXQUFRLEtBQUssT0FBTCxJQUFnQixLQUFLLEtBQUwsQ0FBVyxRQUFYLENBRFA7OztTQXRCZjs7O01BQ0csZUFBZTtBQUNwQixZQUFVLEdBQVY7QUFDQSx1QkFGb0I7QUFHcEIsUUFBTSxDQUFOO0FBQ0EsTUFBSSxDQUFKOzs7a0JBc0JXLFVBQUMsS0FBRDtTQUFXLElBQUksS0FBSixDQUFVLEtBQVY7Q0FBWCIsImZpbGUiOiJ0d2Vlbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IHRpbWVTaW5jZUxhc3RGcmFtZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBmbG93LCBjbGFtcCB9IGZyb20gJy4uL2luYy9maWx0ZXJzJztcbmltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGVhc2VPdXQgfSBmcm9tICcuLi9lYXNpbmcnO1xuXG5jb25zdCBjbGFtcFByb2dyZXNzID0gY2xhbXAoMCwgMSk7XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIGVhc2U6IGVhc2VPdXQsXG4gICAgZnJvbTogMCxcbiAgICB0bzogMFxuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IGR1cmF0aW9uLCBlYXNlLCBmcm9tLCB0byB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuZWxhcHNlZCA9IDA7XG5cbiAgICB0aGlzLm9uVXBkYXRlID0gZmxvdyhcbiAgICAgICgpID0+IHRoaXMuZWxhcHNlZCArPSB0aW1lU2luY2VMYXN0RnJhbWUoKSxcbiAgICAgIChlbGFwc2VkKSA9PiBnZXRQcm9ncmVzc0Zyb21WYWx1ZSgwLCBkdXJhdGlvbiwgZWxhcHNlZCksXG4gICAgICBjbGFtcFByb2dyZXNzLFxuICAgICAgZWFzZSxcbiAgICAgIChlYXNlZFByb2dyZXNzKSA9PiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhmcm9tLCB0bywgZWFzZWRQcm9ncmVzcylcbiAgICApO1xuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gKHRoaXMuZWxhcHNlZCA+PSB0aGlzLnByb3BzLmR1cmF0aW9uKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IG5ldyBUd2Vlbihwcm9wcyk7XG4iXX0=

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(12);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(10);
	
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(12);
	
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
	        onStop: function () {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BhcmFsbGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU07Ozs7Ozs7OztxQkFDSiw2QkFBVTs7O1FBQ0EsVUFBWSxLQUFLLEtBQUwsQ0FBWixRQURBOztBQUVSLFNBQUssZ0JBQUwsR0FBd0IsUUFBUSxNQUFSLENBRmhCOztBQUlSLFlBQVEsT0FBUixDQUFnQixVQUFDLE1BQUQsRUFBWTtBQUMxQixhQUFPLFFBQVAsQ0FBZ0I7QUFDZCxnQkFBUTtpQkFBTSxPQUFLLGdCQUFMO1NBQU47T0FEVixFQUVHLEtBRkgsR0FEMEI7S0FBWixDQUFoQixDQUpROzs7QUFETixxQkFZSiwyQkFBUztBQUNQLFNBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsT0FBbkIsQ0FBMkIsVUFBQyxNQUFEO2FBQVksT0FBTyxJQUFQO0tBQVosQ0FBM0IsQ0FETzs7O0FBWkwscUJBZ0JKLCtCQUFVLFFBQVE7UUFDUixVQUFZLEtBQUssS0FBTCxDQUFaLFFBRFE7OztBQUdoQixRQUFJLFFBQVEsT0FBUixDQUFnQixNQUFoQixNQUE0QixDQUFDLENBQUQsRUFBSTtBQUNsQyxjQUFRLElBQVIsQ0FBYSxNQUFiLEVBRGtDO0tBQXBDOzs7QUFuQkUscUJBd0JKLCtDQUFtQjtBQUNqQixXQUFRLEtBQUssZ0JBQUwsS0FBMEIsQ0FBMUIsQ0FEUzs7O1NBeEJmOzs7a0JBNkJTLFVBQUMsT0FBRDtTQUFhLElBQUksUUFBSixDQUFhLEVBQUUsZ0JBQUYsRUFBYjtDQUFiIiwiZmlsZSI6InBhcmFsbGVsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuXG5jbGFzcyBQYXJhbGxlbCBleHRlbmRzIEFjdGlvbiB7XG4gIG9uU3RhcnQoKSB7XG4gICAgY29uc3QgeyBhY3Rpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IGFjdGlvbnMubGVuZ3RoO1xuXG4gICAgYWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHtcbiAgICAgIGFjdGlvbi5zZXRQcm9wcyh7XG4gICAgICAgIG9uU3RvcDogKCkgPT4gdGhpcy5udW1BY3RpdmVBY3Rpb25zLS1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH1cblxuICBvblN0b3AoKSB7XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4gYWN0aW9uLnN0b3AoKSk7XG4gIH1cblxuICBhZGRBY3Rpb24oYWN0aW9uKSB7XG4gICAgY29uc3QgeyBhY3Rpb25zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGFjdGlvbnMuaW5kZXhPZihhY3Rpb24pID09PSAtMSkge1xuICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gKHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGFjdGlvbnMpID0+IG5ldyBQYXJhbGxlbCh7IGFjdGlvbnMgfSk7XG4iXX0=

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(12);
	
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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(12);
	
	var _2 = _interopRequireDefault(_);
	
	var _tween = __webpack_require__(4);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	var _easing = __webpack_require__(11);
	
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
	
	
	    this.transferTween = (0, _tween2.default)({
	      to: 1,
	      duration: duration,
	      ease: ease
	    }).start();
	  };
	
	  CrossFade.prototype.onUpdate = function onUpdate() {
	    var _props2 = this.props;
	    var from = _props2.from;
	    var to = _props2.to;
	
	    var balance = this.transferTween.get();
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNOzs7Ozs7Ozs7c0JBS0osNkJBQVU7aUJBQ21CLEtBQUssS0FBTCxDQURuQjtRQUNBLDJCQURBO1FBQ1UsbUJBRFY7OztBQUdSLFNBQUssYUFBTCxHQUFxQixxQkFBTTtBQUN6QixVQUFJLENBQUo7QUFDQSx3QkFGeUI7QUFHekIsZ0JBSHlCO0tBQU4sRUFJbEIsS0FKa0IsRUFBckIsQ0FIUTs7O0FBTE4sc0JBZUosK0JBQVc7a0JBQ1ksS0FBSyxLQUFMLENBRFo7UUFDRCxvQkFEQztRQUNLLGdCQURMOztBQUVULFFBQU0sVUFBVSxLQUFLLGFBQUwsQ0FBbUIsR0FBbkIsRUFBVixDQUZHO0FBR1QsUUFBTSxrQkFBa0IsS0FBSyxHQUFMLEVBQWxCLENBSEc7QUFJVCxRQUFNLGdCQUFnQixHQUFHLEdBQUgsRUFBaEIsQ0FKRztBQUtULFdBQU8sZ0NBQXFCLGVBQXJCLEVBQXNDLGFBQXRDLEVBQXFELE9BQXJELENBQVAsQ0FMUzs7O1NBZlA7OztVQUNHLGVBQWU7QUFDcEIsc0JBRG9COzs7a0JBdUJULFVBQUMsS0FBRDtTQUFXLElBQUksU0FBSixDQUFjLEtBQWQ7Q0FBWCIsImZpbGUiOiJjcm9zcy1mYWRlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHR3ZWVuIGZyb20gJy4vdHdlZW4nO1xuaW1wb3J0IHsgbGluZWFyIH0gZnJvbSAnLi4vZWFzaW5nJztcbmltcG9ydCB7IGdldFZhbHVlRnJvbVByb2dyZXNzIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jbGFzcyBDcm9zc0ZhZGUgZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGVhc2U6IGxpbmVhclxuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IGR1cmF0aW9uLCBlYXNlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy50cmFuc2ZlclR3ZWVuID0gdHdlZW4oe1xuICAgICAgdG86IDEsXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGVhc2VcbiAgICB9KS5zdGFydCgpO1xuICB9XG5cbiAgb25VcGRhdGUoKSB7XG4gICAgY29uc3QgeyBmcm9tLCB0byB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBiYWxhbmNlID0gdGhpcy50cmFuc2ZlclR3ZWVuLmdldCgpO1xuICAgIGNvbnN0IGxhdGVzdEZyb21WYWx1ZSA9IGZyb20uZ2V0KCk7XG4gICAgY29uc3QgbGF0ZXN0VG9WYWx1ZSA9IHRvLmdldCgpO1xuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhsYXRlc3RGcm9tVmFsdWUsIGxhdGVzdFRvVmFsdWUsIGJhbGFuY2UpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gbmV3IENyb3NzRmFkZShwcm9wcyk7XG4iXX0=

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
	var _onNextFrame = __webpack_require__(14);
	
	var _onNextFrame2 = _interopRequireDefault(_onNextFrame);
	
	var _createRenderStep = __webpack_require__(15);
	
	var _createRenderStep2 = _interopRequireDefault(_createRenderStep);
	
	var _utils = __webpack_require__(13);
	
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
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _framesync = __webpack_require__(10);
	
	var _calc = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Action = function () {
	  function Action(props) {
	    _classCallCheck(this, Action);
	
	    this.current = 0;
	    this.update = this.update.bind(this);
	
	    this.props = _extends({}, this.constructor.defaultProps, props);
	  }
	
	  Action.prototype.start = function start() {
	    var _props = this.props;
	    var value = _props.value;
	    var onStart = _props.onStart;
	    var from = _props.from;
	    var velocity = _props.velocity;
	
	
	    this.isActive = true;
	    (0, _framesync.onFrameUpdate)(this.update);
	
	    if (this.onStart) {
	      this.onStart();
	    }
	
	    if (onStart) {
	      onStart(this);
	    }
	
	    return this;
	  };
	
	  Action.prototype.stop = function stop() {
	    var onStop = this.props.onStop;
	
	
	    this.isActive = false;
	    (0, _framesync.cancelOnFrameUpdate)(this.update);
	
	    if (this.onStop) {
	      this.onStop();
	    }
	
	    if (onStop) {
	      onStop(this);
	    }
	
	    return this;
	  };
	
	  Action.prototype.complete = function complete() {
	    if (this.onComplete) {
	      this.onComplete();
	    }
	
	    if (this.props.onComplete) {
	      this.props.onComplete(this);
	    }
	
	    this.stop();
	
	    return this;
	  };
	
	  Action.prototype.update = function update() {
	    this.lastUpdated = (0, _framesync.timeSinceLastFrame)();
	    this.prev = this.current;
	
	    if (this.onUpdate) {
	      this.current = this.onUpdate();
	    }
	
	    if (this.props.onUpdate) {
	      this.props.onUpdate(this.current, this);
	    }
	
	    if (this.isActive) {
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
	    return this.current;
	  };
	
	  Action.prototype.getVelocity = function getVelocity() {
	    return (0, _calc.speedPerSecond)(this.prev - this.current, this.lastUpdated);
	  };
	
	  return Action;
	}();
	
	exports.default = Action;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0lBRU07QUFDSixXQURJLE1BQ0osQ0FBWSxLQUFaLEVBQW1COzBCQURmLFFBQ2U7O0FBQ2pCLFNBQUssT0FBTCxHQUFlLENBQWYsQ0FEaUI7QUFFakIsU0FBSyxNQUFMLEdBQWMsS0FBSyxNQUFMLENBQVksSUFBWixDQUFpQixJQUFqQixDQUFkLENBRmlCOztBQUlqQixTQUFLLEtBQUwsZ0JBQ0ssS0FBSyxXQUFMLENBQWlCLFlBQWpCLEVBQ0EsTUFGTCxDQUppQjtHQUFuQjs7QUFESSxtQkFXSix5QkFBUTtpQkFDcUMsS0FBSyxLQUFMLENBRHJDO1FBQ0UscUJBREY7UUFDUyx5QkFEVDtRQUNrQixtQkFEbEI7UUFDd0IsMkJBRHhCOzs7QUFHTixTQUFLLFFBQUwsR0FBZ0IsSUFBaEIsQ0FITTtBQUlOLGtDQUFjLEtBQUssTUFBTCxDQUFkLENBSk07O0FBTU4sUUFBSSxLQUFLLE9BQUwsRUFBYztBQUNoQixXQUFLLE9BQUwsR0FEZ0I7S0FBbEI7O0FBSUEsUUFBSSxPQUFKLEVBQWE7QUFDWCxjQUFRLElBQVIsRUFEVztLQUFiOztBQUlBLFdBQU8sSUFBUCxDQWRNOzs7QUFYSixtQkE0QkosdUJBQU87UUFDRyxTQUFXLEtBQUssS0FBTCxDQUFYLE9BREg7OztBQUdMLFNBQUssUUFBTCxHQUFnQixLQUFoQixDQUhLO0FBSUwsd0NBQW9CLEtBQUssTUFBTCxDQUFwQixDQUpLOztBQU1MLFFBQUksS0FBSyxNQUFMLEVBQWE7QUFDZixXQUFLLE1BQUwsR0FEZTtLQUFqQjs7QUFJQSxRQUFJLE1BQUosRUFBWTtBQUNWLGFBQU8sSUFBUCxFQURVO0tBQVo7O0FBSUEsV0FBTyxJQUFQLENBZEs7OztBQTVCSCxtQkE2Q0osK0JBQVc7QUFDVCxRQUFJLEtBQUssVUFBTCxFQUFpQjtBQUNuQixXQUFLLFVBQUwsR0FEbUI7S0FBckI7O0FBSUEsUUFBSSxLQUFLLEtBQUwsQ0FBVyxVQUFYLEVBQXVCO0FBQ3pCLFdBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsSUFBdEIsRUFEeUI7S0FBM0I7O0FBSUEsU0FBSyxJQUFMLEdBVFM7O0FBV1QsV0FBTyxJQUFQLENBWFM7OztBQTdDUCxtQkEyREosMkJBQVM7QUFDUCxTQUFLLFdBQUwsR0FBbUIsb0NBQW5CLENBRE87QUFFUCxTQUFLLElBQUwsR0FBWSxLQUFLLE9BQUwsQ0FGTDs7QUFJUCxRQUFJLEtBQUssUUFBTCxFQUFlO0FBQ2pCLFdBQUssT0FBTCxHQUFlLEtBQUssUUFBTCxFQUFmLENBRGlCO0tBQW5COztBQUlBLFFBQUksS0FBSyxLQUFMLENBQVcsUUFBWCxFQUFxQjtBQUN2QixXQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEtBQUssT0FBTCxFQUFjLElBQWxDLEVBRHVCO0tBQXpCOztBQUlBLFFBQUksS0FBSyxRQUFMLEVBQWU7QUFDakIsb0NBQWMsS0FBSyxNQUFMLENBQWQsQ0FEaUI7S0FBbkI7O0FBSUEsUUFBSSxLQUFLLGdCQUFMLElBQXlCLEtBQUssZ0JBQUwsRUFBekIsRUFBa0Q7QUFDcEQsV0FBSyxRQUFMLEdBRG9EO0tBQXREOztBQUlBLFdBQU8sSUFBUCxDQXBCTzs7O0FBM0RMLG1CQWtGSiw2QkFBUyxPQUFPO0FBQ2QsU0FBSyxLQUFMLGdCQUNLLEtBQUssS0FBTCxFQUNBLE1BRkwsQ0FEYzs7O0FBbEZaLG1CQXlGSixxQkFBTTtBQUNKLFdBQU8sS0FBSyxPQUFMLENBREg7OztBQXpGRixtQkE2RkoscUNBQWM7QUFDWixXQUFPLDBCQUFlLEtBQUssSUFBTCxHQUFZLEtBQUssT0FBTCxFQUFjLEtBQUssV0FBTCxDQUFoRCxDQURZOzs7U0E3RlY7OztrQkFrR1MiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb25GcmFtZVVwZGF0ZSwgY2FuY2VsT25GcmFtZVVwZGF0ZSwgdGltZVNpbmNlTGFzdEZyYW1lIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcbmltcG9ydCB7IHNwZWVkUGVyU2Vjb25kIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jbGFzcyBBY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzLFxuICAgICAgLi4ucHJvcHNcbiAgICB9O1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgb25TdGFydCwgZnJvbSwgdmVsb2NpdHkgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICBvbkZyYW1lVXBkYXRlKHRoaXMudXBkYXRlKTtcblxuICAgIGlmICh0aGlzLm9uU3RhcnQpIHtcbiAgICAgIHRoaXMub25TdGFydCgpO1xuICAgIH1cblxuICAgIGlmIChvblN0YXJ0KSB7XG4gICAgICBvblN0YXJ0KHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBjb25zdCB7IG9uU3RvcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICBjYW5jZWxPbkZyYW1lVXBkYXRlKHRoaXMudXBkYXRlKTtcblxuICAgIGlmICh0aGlzLm9uU3RvcCkge1xuICAgICAgdGhpcy5vblN0b3AoKTtcbiAgICB9XG5cbiAgICBpZiAob25TdG9wKSB7XG4gICAgICBvblN0b3AodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5zdG9wKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmxhc3RVcGRhdGVkID0gdGltZVNpbmNlTGFzdEZyYW1lKCk7XG4gICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50O1xuXG4gICAgaWYgKHRoaXMub25VcGRhdGUpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMub25VcGRhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblVwZGF0ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSh0aGlzLmN1cnJlbnQsIHRoaXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XG4gICAgICBvbkZyYW1lVXBkYXRlKHRoaXMudXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0FjdGlvbkNvbXBsZXRlICYmIHRoaXMuaXNBY3Rpb25Db21wbGV0ZSgpKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRQcm9wcyhwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICAuLi50aGlzLnByb3BzLFxuICAgICAgLi4ucHJvcHNcbiAgICB9O1xuICB9XG5cbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH1cblxuICBnZXRWZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gc3BlZWRQZXJTZWNvbmQodGhpcy5wcmV2IC0gdGhpcy5jdXJyZW50LCB0aGlzLmxhc3RVcGRhdGVkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XG4iXX0=

/***/ },
/* 13 */
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
/* 14 */
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
/* 15 */
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

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(12);
	
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
	      _this2.actionKeys.push(key);
	      _this2[key] = actions[key];
	      _this2[key].setProps({
	        // Look into private settable functions
	        onUpdate: function (v, action) {
	          _this2.current[key] = action.get();
	        },
	        onStop: function () {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxlQUNKLENBQVksS0FBWixFQUFtQjswQkFEZixpQkFDZTs7UUFDVCxVQUErQixNQUEvQixRQURTOztRQUNHLDBDQUFtQixvQkFEdEI7O2lEQUVqQixtQkFBTSxjQUFOLEdBRmlCOztBQUdqQixVQUFLLE9BQUwsR0FBZSxFQUFmLENBSGlCO0FBSWpCLFVBQUssVUFBTCxHQUFrQixFQUFsQixDQUppQjtBQUtqQixVQUFLLFVBQUwsQ0FBZ0IsTUFBTSxPQUFOLENBQWhCLENBTGlCOztHQUFuQjs7QUFESSw0QkFTSixpQ0FBVyxTQUFTOzs7MEJBQ1A7QUFDVCxhQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsR0FBckI7QUFDQSxhQUFLLEdBQUwsSUFBWSxRQUFRLEdBQVIsQ0FBWjtBQUNBLGFBQUssR0FBTCxFQUFVLFFBQVYsQ0FBbUI7O0FBRWpCLGtCQUFVLFVBQUMsQ0FBRCxFQUFJLE1BQUosRUFBZTtBQUN2QixpQkFBSyxPQUFMLENBQWEsR0FBYixJQUFvQixPQUFPLEdBQVAsRUFBcEIsQ0FEdUI7U0FBZjtBQUdWLGdCQUFRO2lCQUFNLE9BQUssZ0JBQUw7U0FBTjtPQUxWO01BSmdCOztBQUNsQixTQUFLLElBQU0sR0FBTixJQUFhLE9BQWxCLEVBQTJCO1lBQWhCLEtBQWdCO0tBQTNCOzs7QUFWRSw0QkF1QkosNkJBQVU7OztBQUNSLFNBQUssZ0JBQUwsR0FBd0IsS0FBSyxVQUFMLENBQWdCLE1BQWhCLENBRGhCO0FBRVIsU0FBSyxVQUFMLENBQWdCLE9BQWhCLENBQXdCLFVBQUMsR0FBRDthQUFTLE9BQUssR0FBTCxFQUFVLEtBQVY7S0FBVCxDQUF4QixDQUZROzs7QUF2Qk4sNEJBNEJKLDJCQUFTOzs7QUFDUCxTQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBd0IsVUFBQyxHQUFEO2FBQVMsT0FBSyxHQUFMLEVBQVUsSUFBVjtLQUFULENBQXhCLENBRE87OztBQTVCTCw0QkFnQ0oscUNBQWM7OztBQUNaLFFBQU0sV0FBVyxFQUFYLENBRE07QUFFWixTQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBd0IsVUFBQyxHQUFEO2FBQVMsU0FBUyxHQUFULElBQWdCLE9BQUssR0FBTCxFQUFVLFdBQVYsRUFBaEI7S0FBVCxDQUF4QixDQUZZO0FBR1osV0FBTyxRQUFQLENBSFk7OztBQWhDViw0QkFzQ0osK0NBQW1CO0FBQ2pCLFdBQVEsS0FBSyxnQkFBTCxLQUEwQixDQUExQixDQURTOzs7U0F0Q2Y7OztrQkEyQ1MsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFvQjtBQUNqQyxTQUFPLElBQUksZUFBSjtBQUNMO0tBQ0csTUFGRSxDQUFQLENBRGlDO0NBQXBCIiwiZmlsZSI6ImNvbXBvc2l0ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcblxuY2xhc3MgQ29tcG9zaXRlQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBjb25zdCB7IGFjdGlvbnMsIC4uLnJlbWFpbmluZ1Byb3BzIH0gPSBwcm9wcztcbiAgICBzdXBlcihyZW1haW5pbmdQcm9wcyk7XG4gICAgdGhpcy5jdXJyZW50ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzID0gW107XG4gICAgdGhpcy5hZGRBY3Rpb25zKHByb3BzLmFjdGlvbnMpO1xuICB9XG5cbiAgYWRkQWN0aW9ucyhhY3Rpb25zKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYWN0aW9ucykge1xuICAgICAgdGhpcy5hY3Rpb25LZXlzLnB1c2goa2V5KTtcbiAgICAgIHRoaXNba2V5XSA9IGFjdGlvbnNba2V5XTtcbiAgICAgIHRoaXNba2V5XS5zZXRQcm9wcyh7XG4gICAgICAgIC8vIExvb2sgaW50byBwcml2YXRlIHNldHRhYmxlIGZ1bmN0aW9uc1xuICAgICAgICBvblVwZGF0ZTogKHYsIGFjdGlvbikgPT4ge1xuICAgICAgICAgIHRoaXMuY3VycmVudFtrZXldID0gYWN0aW9uLmdldCgpO1xuICAgICAgICB9LFxuICAgICAgICBvblN0b3A6ICgpID0+IHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IHRoaXMuYWN0aW9uS2V5cy5sZW5ndGg7XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goKGtleSkgPT4gdGhpc1trZXldLnN0YXJ0KCkpO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKChrZXkpID0+IHRoaXNba2V5XS5zdG9wKCkpO1xuICB9XG5cbiAgZ2V0VmVsb2NpdHkoKSB7XG4gICAgY29uc3QgdmVsb2NpdHkgPSB7fTtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaCgoa2V5KSA9PiB2ZWxvY2l0eVtrZXldID0gdGhpc1trZXldLmdldFZlbG9jaXR5KCkpO1xuICAgIHJldHVybiB2ZWxvY2l0eTtcbiAgfVxuXG4gIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuICh0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChhY3Rpb25zLCBwcm9wcykgPT4ge1xuICByZXR1cm4gbmV3IENvbXBvc2l0ZUFjdGlvbih7XG4gICAgYWN0aW9ucyxcbiAgICAuLi5wcm9wc1xuICB9KTtcbn1cbiJdfQ==

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzBlMGNhZTA4NGFjNWFkMDgyZTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wYXJhbGxlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jcm9zcy1mYWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXN5bmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vhc2luZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL2NyZWF0ZS1yZW5kZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNRO0FBQ0EsNENBQTJDLDJXOzs7Ozs7QUNUM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNROztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVcsUUFBUTs7QUFFbkI7O0FBRUE7QUFDQSw0Q0FBMkMsMnhFOzs7Ozs7QUN6SjNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsbTVWOzs7Ozs7QUNoUDNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkIsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksYUFBYTtBQUN6QixhQUFZO0FBQ1o7QUFDQTtBQUNBLDBFQUF5RSxhQUFhO0FBQ3RGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdCQUFlLHFCQUFxQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFdBQVUsaUJBQWlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsbTVKOzs7Ozs7QUNyRzNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixrREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDJDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsbXRFOzs7Ozs7QUN6RTNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixrREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDJDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsbTZGOzs7Ozs7QUNoRjNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixrREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDJDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQSx3QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0EsNENBQTJDLHU1RDs7Ozs7O0FDbEUzQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0EscUJBQW9CLGVBQWU7QUFDbkM7QUFDQSw0Q0FBMkMsMjhEOzs7Ozs7QUNuRTNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBLGdDQUErQixxQkFBcUI7QUFDcEQ7QUFDQSw0Q0FBMkMsdVo7Ozs7OztBQ2IzQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywyMUQ7Ozs7OztBQ25FM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxtc0g7Ozs7OztBQzlFM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsbXhHOzs7Ozs7QUNuRDNDOztBQUVBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLDRDQUEyQywrbEo7Ozs7OztBQ25IM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsdXBNOzs7Ozs7QUMvSjNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQSw0Q0FBMkMsMnpFOzs7Ozs7QUM3QzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxtdUY7Ozs7OztBQy9DM0M7O0FBRUE7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLCtDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU4sa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLDRDQUEyQywrekciLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAzMGUwY2FlMDg0YWM1YWQwODJlOFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCcuL3BvcG1vdGlvbicpO1xuXG52YXIgcG9wbW90aW9uID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3BvcG1vdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbndpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW5iRzlpWVd3dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVRzN1NVRkJXVHM3T3p0QlFVTmFMRTlCUVU4c1UwRkJVQ3hIUVVGdFFpeFRRVUZ1UWlJc0ltWnBiR1VpT2lKbmJHOWlZV3d1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUNvZ1lYTWdjRzl3Ylc5MGFXOXVJR1p5YjIwZ0p5NHZjRzl3Ylc5MGFXOXVKenRjYm5kcGJtUnZkeTV3YjNCdGIzUnBiMjRnUFNCd2IzQnRiM1JwYjI0N1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNvbXBvc2l0ZSA9IGV4cG9ydHMuY3Jvc3NGYWRlID0gZXhwb3J0cy5kZWxheSA9IGV4cG9ydHMuY2hhaW4gPSBleHBvcnRzLnBhcmFsbGVsID0gZXhwb3J0cy5waHlzaWNzID0gZXhwb3J0cy50d2VlbiA9IGV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy5maWx0ZXIgPSBleHBvcnRzLmNhbGMgPSBleHBvcnRzLmVhc2luZyA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4vZnJhbWVzeW5jJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVN0YXJ0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lU3RhcnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lVXBkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVJlbmRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVJlbmRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVFbmQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVFbmQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lU3RhcnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVTdGFydDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVVcGRhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVVcGRhdGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lUmVuZGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lUmVuZGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZUVuZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZUVuZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3RpbWVTaW5jZUxhc3RGcmFtZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3VycmVudEZyYW1lVGltZXN0YW1wJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jdXJyZW50RnJhbWVUaW1lc3RhbXA7XG4gIH1cbn0pO1xuXG52YXIgX2Vhc2luZzIgPSByZXF1aXJlKCcuL2Vhc2luZycpO1xuXG52YXIgX2Vhc2luZyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9lYXNpbmcyKTtcblxudmFyIF9jYWxjMiA9IHJlcXVpcmUoJy4vaW5jL2NhbGMnKTtcblxudmFyIF9jYWxjID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2NhbGMyKTtcblxudmFyIF9maWx0ZXJzID0gcmVxdWlyZSgnLi9pbmMvZmlsdGVycycpO1xuXG52YXIgX2ZpbHRlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9maWx0ZXJzKTtcblxudmFyIF9hY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zJyk7XG5cbnZhciBfYWN0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hY3Rpb25zKTtcblxudmFyIF90d2VlbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvdHdlZW4nKTtcblxudmFyIF90d2VlbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2VlbjIpO1xuXG52YXIgX3BoeXNpY3MyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BoeXNpY3MnKTtcblxudmFyIF9waHlzaWNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BoeXNpY3MyKTtcblxudmFyIF9wYXJhbGxlbDIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcGFyYWxsZWwnKTtcblxudmFyIF9wYXJhbGxlbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJhbGxlbDIpO1xuXG52YXIgX2NoYWluMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jaGFpbicpO1xuXG52YXIgX2NoYWluMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoYWluMik7XG5cbnZhciBfZGVsYXkyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2RlbGF5Jyk7XG5cbnZhciBfZGVsYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVsYXkyKTtcblxudmFyIF9jcm9zc0ZhZGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Nyb3NzLWZhZGUnKTtcblxudmFyIF9jcm9zc0ZhZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3Jvc3NGYWRlMik7XG5cbnZhciBfY29tcG9zaXRlMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jb21wb3NpdGUnKTtcblxudmFyIF9jb21wb3NpdGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRlMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmV4cG9ydHMuZWFzaW5nID0gX2Vhc2luZztcblxuLy8gSGVscGVyc1xuXG5leHBvcnRzLmNhbGMgPSBfY2FsYztcbmV4cG9ydHMuZmlsdGVyID0gX2ZpbHRlcjtcblxuLy8gQWN0aW9uc1xuXG5leHBvcnRzLkFjdGlvbiA9IF9hY3Rpb25zMi5kZWZhdWx0O1xuZXhwb3J0cy50d2VlbiA9IF90d2VlbjMuZGVmYXVsdDtcbmV4cG9ydHMucGh5c2ljcyA9IF9waHlzaWNzMy5kZWZhdWx0O1xuZXhwb3J0cy5wYXJhbGxlbCA9IF9wYXJhbGxlbDMuZGVmYXVsdDtcbmV4cG9ydHMuY2hhaW4gPSBfY2hhaW4zLmRlZmF1bHQ7XG5leHBvcnRzLmRlbGF5ID0gX2RlbGF5My5kZWZhdWx0O1xuZXhwb3J0cy5jcm9zc0ZhZGUgPSBfY3Jvc3NGYWRlMy5kZWZhdWx0O1xuZXhwb3J0cy5jb21wb3NpdGUgPSBfY29tcG9zaXRlMy5kZWZhdWx0O1xuXG4vL2V4cG9ydCBBY3Rpb24gZnJvbSAnLi9hY3Rpb25zJztcblxuLy8gZXhwb3J0IHZhbHVlIGZyb20gJy4vdmFsdWUnO1xuLy8gZXhwb3J0IEFjdGlvbiBmcm9tICcuL2FjdGlvbnMnO1xuLy8gZXhwb3J0IGNoYWluIGZyb20gJy4vYWN0aW9ucy9jaGFpbic7XG4vLyBleHBvcnQgZGVsYXkgZnJvbSAnLi9hY3Rpb25zL2RlbGF5Jztcbi8vIGV4cG9ydCBncm91cCBmcm9tICcuL2FjdGlvbnMvZ3JvdXAnO1xuLy8gZXhwb3J0IHBoeXNpY3MgZnJvbSAnLi9hY3Rpb25zL3BoeXNpY3MnO1xuLy8gZXhwb3J0IHN0YWdnZXIgZnJvbSAnLi9hY3Rpb25zL3N0YWdnZXInO1xuLy8gZXhwb3J0IHR3ZWVuIGZyb20gJy4vYWN0aW9ucy90d2Vlbic7XG4vLyBleHBvcnQgdHJhY2sgZnJvbSAnLi9hY3Rpb25zL3RyYWNrJztcbi8vIGV4cG9ydCBwb2ludGVyIGZyb20gJy4vaW5wdXQvcG9pbnRlcic7XG4vLyBleHBvcnQgKiBhcyBlYXNpbmcgZnJvbSAnLi9lYXNpbmcnO1xuXG4vLyBleHBvcnQgeyBjb2xvciB9IGZyb20gJy4vdmFsdWUvdHlwZXMnO1xuXG4vL2V4cG9ydCBjc3NSZW5kZXIgZnJvbSAnLi9yZW5kZXIvY3NzJztcblxuLy8gZXhwb3J0IHRpbWVsaW5lIGZyb20gJy4vaW5jL3RpbWVsaW5lJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2IzQnRiM1JwYjI0dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHpRa0ZGUlRzN096czdPM05DUVVOQk96czdPenM3YzBKQlEwRTdPenM3T3p0elFrRkRRVHM3T3pzN08zTkNRVU5CT3pzN096czdjMEpCUTBFN096czdPenR6UWtGRFFUczdPenM3TzNOQ1FVTkJPenM3T3pzN2MwSkJRMEU3T3pzN096dHpRa0ZEUVRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRSUVVsVk96czdPMUZCUTBFN1VVRkRRVHM3T3p0UlFVZE1PMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRWlMQ0ptYVd4bElqb2ljRzl3Ylc5MGFXOXVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4dklFWnlZVzFsYzNsdVl5QnpZMmhsWkhWc1pYSnpYRzVsZUhCdmNuUWdlMXh1SUNCdmJrWnlZVzFsVTNSaGNuUXNYRzRnSUc5dVJuSmhiV1ZWY0dSaGRHVXNYRzRnSUc5dVJuSmhiV1ZTWlc1a1pYSXNYRzRnSUc5dVJuSmhiV1ZGYm1Rc1hHNGdJR05oYm1ObGJFOXVSbkpoYldWVGRHRnlkQ3hjYmlBZ1kyRnVZMlZzVDI1R2NtRnRaVlZ3WkdGMFpTeGNiaUFnWTJGdVkyVnNUMjVHY21GdFpWSmxibVJsY2l4Y2JpQWdZMkZ1WTJWc1QyNUdjbUZ0WlVWdVpDeGNiaUFnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsTEZ4dUlDQmpkWEp5Wlc1MFJuSmhiV1ZVYVcxbGMzUmhiWEJjYm4wZ1puSnZiU0FuTGk5bWNtRnRaWE41Ym1Nbk8xeHVYRzR2THlCSVpXeHdaWEp6WEc1bGVIQnZjblFnS2lCaGN5QmxZWE5wYm1jZ1puSnZiU0FuTGk5bFlYTnBibWNuTzF4dVpYaHdiM0owSUNvZ1lYTWdZMkZzWXlCbWNtOXRJQ2N1TDJsdVl5OWpZV3hqSnp0Y2JtVjRjRzl5ZENBcUlHRnpJR1pwYkhSbGNpQm1jbTl0SUNjdUwybHVZeTltYVd4MFpYSnpKenRjYmx4dUx5OGdRV04wYVc5dWMxeHVaWGh3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1TDJGamRHbHZibk1uTzF4dVpYaHdiM0owSUhSM1pXVnVJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OTBkMlZsYmljN1hHNWxlSEJ2Y25RZ2NHaDVjMmxqY3lCbWNtOXRJQ2N1TDJGamRHbHZibk12Y0doNWMybGpjeWM3WEc1bGVIQnZjblFnY0dGeVlXeHNaV3dnWm5KdmJTQW5MaTloWTNScGIyNXpMM0JoY21Gc2JHVnNKenRjYm1WNGNHOXlkQ0JqYUdGcGJpQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlkyaGhhVzRuTzF4dVpYaHdiM0owSUdSbGJHRjVJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OWtaV3hoZVNjN1hHNWxlSEJ2Y25RZ1kzSnZjM05HWVdSbElHWnliMjBnSnk0dllXTjBhVzl1Y3k5amNtOXpjeTFtWVdSbEp6dGNibVY0Y0c5eWRDQmpiMjF3YjNOcGRHVWdabkp2YlNBbkxpOWhZM1JwYjI1ekwyTnZiWEJ2YzJsMFpTYzdYRzVjYmk4dlpYaHdiM0owSUVGamRHbHZiaUJtY205dElDY3VMMkZqZEdsdmJuTW5PMXh1WEc0dkx5QmxlSEJ2Y25RZ2RtRnNkV1VnWm5KdmJTQW5MaTkyWVd4MVpTYzdYRzR2THlCbGVIQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZZV04wYVc5dWN5YzdYRzR2THlCbGVIQnZjblFnWTJoaGFXNGdabkp2YlNBbkxpOWhZM1JwYjI1ekwyTm9ZV2x1Snp0Y2JpOHZJR1Y0Y0c5eWRDQmtaV3hoZVNCbWNtOXRJQ2N1TDJGamRHbHZibk12WkdWc1lYa25PMXh1THk4Z1pYaHdiM0owSUdkeWIzVndJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OW5jbTkxY0NjN1hHNHZMeUJsZUhCdmNuUWdjR2g1YzJsamN5Qm1jbTl0SUNjdUwyRmpkR2x2Ym5NdmNHaDVjMmxqY3ljN1hHNHZMeUJsZUhCdmNuUWdjM1JoWjJkbGNpQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdmMzUmhaMmRsY2ljN1hHNHZMeUJsZUhCdmNuUWdkSGRsWlc0Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDNSM1pXVnVKenRjYmk4dklHVjRjRzl5ZENCMGNtRmpheUJtY205dElDY3VMMkZqZEdsdmJuTXZkSEpoWTJzbk8xeHVMeThnWlhod2IzSjBJSEJ2YVc1MFpYSWdabkp2YlNBbkxpOXBibkIxZEM5d2IybHVkR1Z5Snp0Y2JpOHZJR1Y0Y0c5eWRDQXFJR0Z6SUdWaGMybHVaeUJtY205dElDY3VMMlZoYzJsdVp5YzdYRzVjYmk4dklHVjRjRzl5ZENCN0lHTnZiRzl5SUgwZ1puSnZiU0FuTGk5MllXeDFaUzkwZVhCbGN5YzdYRzVjYmx4dUx5OWxlSEJ2Y25RZ1kzTnpVbVZ1WkdWeUlHWnliMjBnSnk0dmNtVnVaR1Z5TDJOemN5YzdYRzVjYmx4dUx5OGdaWGh3YjNKMElIUnBiV1ZzYVc1bElHWnliMjBnSnk0dmFXNWpMM1JwYldWc2FXNWxKenRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy5yZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufTtcblxuLypcbiAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgXG4gIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICBhcmUgYXQgMCwwXG4gIFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbn07XG5cbi8qXG4gIERpbGF0ZVxuICBcbiAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICBcbiAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gIFxuICBhIC0tLS0tLS0tLSBiXG4gIFxuICB0b1xuICBcbiAgYSAtLS0tIGJcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xudmFyIGRpbGF0ZSA9IGV4cG9ydHMuZGlsYXRlID0gZnVuY3Rpb24gKGEsIGIsIGRpbGF0aW9uKSB7XG4gIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xudmFyIGRpc3RhbmNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGZ1bmN0aW9uIChhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gWkVST19QT0lOVCA6IGFyZ3VtZW50c1sxXTtcblxuICAvLyAxRCBkaW1lbnNpb25zXG4gIGlmICgoMCwgX3V0aWxzLmlzTnVtKShhKSkge1xuICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICAgIHZhciB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICAgIHZhciB6RGVsdGEgPSAoMCwgX3V0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gICAgfVxufTtcblxuLypcbiAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xudmFyIGdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGZ1bmN0aW9uIChmcm9tLCB0bywgcHJvZ3Jlc3MpIHtcbiAgcmV0dXJuIC1wcm9ncmVzcyAqIGZyb20gKyBwcm9ncmVzcyAqIHRvICsgZnJvbTtcbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xufTtcblxuLypcbiAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xudmFyIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICByZXR1cm4ge1xuICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICB9O1xufTtcblxuLypcbiAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xudmFyIHJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBmdW5jdGlvbiAocmFkaWFucykge1xuICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKlxuICBDYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVcbiAgXG4gIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgdG8gdGhlIGN1cnJlbnQgdmFsdWUgdG8gcmVzb2x2ZSBhIG5ldyB0YXJnZXQuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiovXG52YXIgcmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMucmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uIChjdXJyZW50LCByZWxhdGl2ZSkge1xuICB2YXIgbmV3VmFsdWUgPSBjdXJyZW50O1xuICB2YXIgZXF1YXRpb24gPSByZWxhdGl2ZS5zcGxpdCgnPScpO1xuICB2YXIgb3BlcmF0b3IgPSBlcXVhdGlvblswXTtcblxuICB2YXIgX2ZpbmRWYWx1ZUFuZFVuaXQgPSAoMCwgX3V0aWxzLmZpbmRWYWx1ZUFuZFVuaXQpKGVxdWF0aW9uWzFdKTtcblxuICB2YXIgdW5pdCA9IF9maW5kVmFsdWVBbmRVbml0LnVuaXQ7XG4gIHZhciB2YWx1ZSA9IF9maW5kVmFsdWVBbmRVbml0LnZhbHVlO1xuXG5cbiAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgY2FzZSAnKyc6XG4gICAgICBuZXdWYWx1ZSArPSB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy0nOlxuICAgICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcqJzpcbiAgICAgIG5ld1ZhbHVlICo9IHZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLyc6XG4gICAgICBuZXdWYWx1ZSAvPSB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaWYgKHVuaXQpIHtcbiAgICBuZXdWYWx1ZSArPSB1bml0O1xuICB9XG5cbiAgcmV0dXJuIG5ld1ZhbHVlO1xufTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbnZhciBzbW9vdGggPSBleHBvcnRzLnNtb290aCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uKSB7XG4gIHZhciBzbW9vdGhpbmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzNdO1xuICByZXR1cm4gKDAsIF91dGlscy50b0RlY2ltYWwpKG9sZFZhbHVlICsgZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh4cHMpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xufTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xudmFyIHN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gKHN0ZXBzLCBwcm9ncmVzcykge1xuICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgdmFyIHRhcmdldCA9IDEgLSAxIC8gc3RlcHM7XG4gIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlkyRnNZeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCT3p0QlFVOUJMRWxCUVUwc1lVRkJZVHRCUVVOcVFpeExRVUZITEVOQlFVZzdRVUZEUVN4TFFVRkhMRU5CUVVnN1FVRkRRU3hMUVVGSExFTkJRVWc3UTBGSVNUczdRVUZOVGl4SlFVRk5MR0ZCUVdFc1ZVRkJReXhEUVVGRUxFVkJRVWtzUTBGQlNqdFRRVUZWTEV0QlFVc3NSMEZCVEN4RFFVRlRMRWxCUVVrc1EwRkJTanREUVVGdVFqczdPenM3T3pzN096czdPMEZCV1Zvc1NVRkJUU3gzUWtGQlVTeFZRVUZETEVOQlFVUTdUVUZCU1N3d1JFRkJTVHRUUVVGbExHbENRVUZwUWl4TFFVRkxMRXRCUVV3c1EwRkJWeXhGUVVGRkxFTkJRVVlzUjBGQlRTeEZRVUZGTEVOQlFVWXNSVUZCU3l4RlFVRkZMRU5CUVVZc1IwRkJUU3hGUVVGRkxFTkJRVVlzUTBGQk4wTTdRMEZCZGtJN096czdPenM3TzBGQlVXUXNTVUZCVFN3NFEwRkJiVUlzVlVGQlF5eFBRVUZFTzFOQlFXRXNWVUZCVlN4TFFVRkxMRVZCUVV3c1IwRkJWU3hIUVVGd1FqdERRVUZpT3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFXOUNla0lzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRU5CUVVRc1JVRkJTU3hEUVVGS0xFVkJRVThzVVVGQlVEdFRRVUZ2UWl4SlFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGS0xFTkJRVVFzUjBGQlZTeFJRVUZXTzBOQlFYcENPenM3T3pzN096czdPenRCUVZkbUxFbEJRVTBzT0VKQlFWY3NWVUZCUXl4RFFVRkVMRVZCUVhWQ08wMUJRVzVDTERCRVFVRkpMREJDUVVGbE96czdRVUZGTjBNc1RVRkJTU3hyUWtGQlRTeERRVUZPTEVOQlFVb3NSVUZCWXp0QlFVTmFMRmRCUVU4c1YwRkJWeXhEUVVGWUxFVkJRV01zUTBGQlpDeERRVUZRT3pzN1FVRkVXU3hIUVVGa0xFMUJTVTg3UVVGRFRDeFZRVUZOTEZOQlFWTXNWMEZCVnl4RlFVRkZMRU5CUVVZc1JVRkJTeXhGUVVGRkxFTkJRVVlzUTBGQmVrSXNRMEZFUkR0QlFVVk1MRlZCUVUwc1UwRkJVeXhYUVVGWExFVkJRVVVzUTBGQlJpeEZRVUZMTEVWQlFVVXNRMEZCUml4RFFVRjZRaXhEUVVaRU8wRkJSMHdzVlVGQlRTeFRRVUZUTEdsQ1FVRkRMRU5CUVUwc1JVRkJSU3hEUVVGR0xFTkJRVkFzUjBGQlpTeFhRVUZYTEVWQlFVVXNRMEZCUml4RlFVRkxMRVZCUVVVc1EwRkJSaXhEUVVFdlFpeEhRVUZ6UXl4RFFVRjBReXhEUVVoV096dEJRVXRNTEdGQlFVOHNTMEZCU3l4SlFVRk1MRU5CUVZVc1UwRkJReXhSUVVGVkxFVkJRVmdzV1VGQmFVSXNVVUZCVlN4RlFVRXpRaXhaUVVGcFF5eFJRVUZWTEVWQlFUTkRMRU5CUVdwQ0xFTkJURXM3UzBGS1VEdERRVVp6UWpzN096czdPenM3T3pzN096dEJRVEJDYWtJc1NVRkJUU3h6UkVGQmRVSXNWVUZCUXl4SlFVRkVMRVZCUVU4c1JVRkJVQ3hGUVVGWExGRkJRVmc3VTBGQmQwSXNRMEZCUnl4UlFVRkdMRWRCUVdFc1NVRkJZaXhIUVVGelFpeFhRVUZYTEVWQlFWZ3NSMEZCYVVJc1NVRkJlRU03UTBGQmVFSTdPenM3T3pzN096czdPenM3TzBGQll6ZENMRWxCUVUwc2MwUkJRWFZDTEZWQlFVTXNTVUZCUkN4RlFVRlBMRVZCUVZBc1JVRkJWeXhMUVVGWU8xTkJRWEZDTEVOQlFVTXNVVUZCVVN4SlFVRlNMRU5CUVVRc1NVRkJhMElzUzBGQlN5eEpRVUZNTEVOQlFXeENPME5CUVhKQ096czdPenM3T3pzN08wRkJWVGRDTEVsQlFVMHNaMFZCUVRSQ0xGVkJRVU1zVFVGQlJDeEZRVUZUTEV0QlFWUXNSVUZCWjBJc1VVRkJhRUlzUlVGQk5rSTdRVUZEY0VVc1ZVRkJVU3hwUWtGQmFVSXNTMEZCYWtJc1EwRkJVaXhEUVVSdlJUczdRVUZIY0VVc1UwRkJUenRCUVVOTUxFOUJRVWNzVjBGQlZ5eExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVZnc1IwRkJOa0lzVDBGQlR5eERRVUZRTzBGQlEyaERMRTlCUVVjc1YwRkJWeXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFWZ3NSMEZCTmtJc1QwRkJUeXhEUVVGUU8wZEJSbXhETEVOQlNHOUZPME5CUVRkQ096czdPenM3T3p0QlFXVnNReXhKUVVGTkxEaERRVUZ0UWl4VlFVRkRMRTlCUVVRN1UwRkJZU3hWUVVGVkxFZEJRVllzUjBGQlowSXNTMEZCU3l4RlFVRk1PME5CUVRkQ096czdPenM3T3pzN096czdRVUZaZWtJc1NVRkJUU3gzUTBGQlowSXNWVUZCUXl4UFFVRkVMRVZCUVZVc1VVRkJWaXhGUVVGMVFqdEJRVU5zUkN4TlFVRkpMRmRCUVZjc1QwRkJXQ3hEUVVRNFF6dEJRVVZzUkN4TlFVRk5MRmRCUVZjc1UwRkJVeXhMUVVGVUxFTkJRV1VzUjBGQlppeERRVUZZTEVOQlJqUkRPMEZCUjJ4RUxFMUJRVTBzVjBGQlZ5eFRRVUZUTEVOQlFWUXNRMEZCV0N4RFFVZzBRenM3TUVKQlNUVkNMRFpDUVVGcFFpeFRRVUZUTEVOQlFWUXNRMEZCYWtJc1JVRktORUk3TzAxQlNUVkRMRGhDUVVvMFF6dE5RVWwwUXl4blEwRktjME03T3p0QlFVMXNSQ3hWUVVGUkxGZEJRVmNzUzBGQldDeERRVUZTTEVOQlRtdEVPenRCUVZGc1JDeFZRVUZSTEZGQlFWSTdRVUZEUVN4VFFVRkxMRWRCUVV3N1FVRkRSU3hyUWtGQldTeExRVUZhTEVOQlJFWTdRVUZGUlN4WlFVWkdPMEZCUkVFc1UwRkpTeXhIUVVGTU8wRkJRMFVzYTBKQlFWa3NTMEZCV2l4RFFVUkdPMEZCUlVVc1dVRkdSanRCUVVwQkxGTkJUMHNzUjBGQlREdEJRVU5GTEd0Q1FVRlpMRXRCUVZvc1EwRkVSanRCUVVWRkxGbEJSa1k3UVVGUVFTeFRRVlZMTEVkQlFVdzdRVUZEUlN4clFrRkJXU3hMUVVGYUxFTkJSRVk3UVVGRlJTeFpRVVpHTzBGQlZrRXNSMEZTYTBRN08wRkJkVUpzUkN4TlFVRkpMRWxCUVVvc1JVRkJWVHRCUVVOU0xHZENRVUZaTEVsQlFWb3NRMEZFVVR0SFFVRldPenRCUVVsQkxGTkJRVThzVVVGQlVDeERRVE5DYTBRN1EwRkJka0k3T3pzN096czdPenM3UVVGelEzUkNMRWxCUVUwc01FSkJRVk1zVlVGQlF5eFJRVUZFTEVWQlFWY3NVVUZCV0N4RlFVRnhRaXhSUVVGeVFqdE5RVUVyUWl4clJVRkJXVHRUUVVGTkxITkNRVUZWTEZkQlFWa3NXVUZCV1N4WFFVRlhMRkZCUVZnc1EwRkJXaXhIUVVGdFF5eExRVUZMTEVkQlFVd3NRMEZCVXl4VFFVRlVMRVZCUVc5Q0xGRkJRWEJDTEVOQlFXNURPME5CUVhaRk96czdPenM3T3p0QlFWRm1MRWxCUVUwc2QwTkJRV2RDTEZWQlFVTXNSMEZCUkN4RlFVRk5MR0ZCUVU0N1UwRkJkMElzYVVKQlFVTXNRMEZCVFN4SFFVRk9MRU5CUVVRc1IwRkJaU3hQUVVGUExFOUJRVThzWVVGQlVDeERRVUZRTEVkQlFTdENMRU5CUVRsRE8wTkJRWGhDT3pzN096czdPenRCUVZGMFFpeEpRVUZOTERCRFFVRnBRaXhWUVVGRExGRkJRVVFzUlVGQlZ5eGhRVUZZTzFOQlFUWkNMRmxCUVZrc1QwRkJUeXhoUVVGUUxFTkJRVm83UTBGQk4wSTdPenM3T3pzN096dEJRVk4yUWl4SlFVRk5MSE5EUVVGbExGVkJRVU1zUzBGQlJDeEZRVUZSTEZGQlFWSXNSVUZCY1VJN1FVRkRMME1zVFVGQlRTeFZRVUZWTEV0QlFVc3NVVUZCVVN4RFFVRlNMRU5CUVV3c1EwRkVLMEk3UVVGRkwwTXNUVUZCVFN4VFFVRlRMRWxCUVVzc1NVRkJTU3hMUVVGS0xFTkJSakpDTzBGQlJ5OURMRTFCUVUwc2JVSkJRVzFDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRmRCUVZjc1RVRkJXQ3hGUVVGdFFpeERRVUUxUWl4RFFVRnVRaXhEUVVoNVF6czdRVUZMTDBNc1UwRkJUeXhMUVVGTExFdEJRVXdzUTBGQlZ5eHRRa0ZCYlVJc1QwRkJia0lzUTBGQldDeEhRVUY1UXl4UFFVRjZReXhEUVV4M1F6dERRVUZ5UWlJc0ltWnBiR1VpT2lKallXeGpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3WEc0Z0lHaGhjMUJ5YjNCbGNuUjVMRnh1SUNCcGMwNTFiU3hjYmlBZ1ptbHVaRlpoYkhWbFFXNWtWVzVwZEN4Y2JpQWdkRzlFWldOcGJXRnNYRzU5SUdaeWIyMGdKeTR2ZFhScGJITW5PMXh1WEc1amIyNXpkQ0JhUlZKUFgxQlBTVTVVSUQwZ2UxeHVJQ0I0T2lBd0xGeHVJQ0I1T2lBd0xGeHVJQ0I2T2lBd1hHNTlPMXh1WEc1amIyNXpkQ0JrYVhOMFlXNWpaVEZFSUQwZ0tHRXNJR0lwSUQwK0lFMWhkR2d1WVdKektHRWdMU0JpS1R0Y2JseHVMeXBjYmlBZ1FXNW5iR1VnWW1WMGQyVmxiaUJ3YjJsdWRITmNiaUFnWEc0Z0lGUnlZVzV6YkdGMFpYTWdkR2hsSUdoNWNHOTBhR1YwYVdOaGJDQnNhVzVsSUhOdklIUm9ZWFFnZEdobElDZG1jbTl0SnlCamIyOXlaR2x1WVhSbGMxeHVJQ0JoY21VZ1lYUWdNQ3d3WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMDZJRmdnWVc1a0lGa2dZMjl2Y21ScGJtRjBaWE1nYjJZZ1puSnZiU0J3YjJsdWRGeHVJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMDZJRmdnWVc1a0lGa2dZMjl5WkdsdVlYUmxjeUJ2WmlCMGJ5QndiMmx1ZEZ4dUlDQkFjbVYwZFhKdUlGdHlZV1JwWVc1ZE9pQkJibWRzWlNCaVpYUjNaV1Z1SUhSb1pTQjBkMjhnY0c5cGJuUnpJR2x1SUhKaFpHbGhibk5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWVc1bmJHVWdQU0FvWVN3Z1lpQTlJRnBGVWs5ZlVFOUpUbFFwSUQwK0lISmhaR2xoYm5OVWIwUmxaM0psWlhNb1RXRjBhQzVoZEdGdU1paGhMbmdnTFNCaUxuZ3NJR0V1ZVNBdElHSXVlU2twTzF4dVhHNHZLbHh1SUNCRGIyNTJaWEowSUdSbFozSmxaWE1nZEc4Z2NtRmthV0Z1YzF4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJrWldkeVpXVnpYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUhKaFpHbGhibk5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdWbmNtVmxjMVJ2VW1Ga2FXRnVjeUE5SUNoa1pXZHlaV1Z6S1NBOVBpQmtaV2R5WldWeklDb2dUV0YwYUM1UVNTQXZJREU0TUR0Y2JseHVMeXBjYmlBZ1JHbHNZWFJsWEc0Z0lGeHVJQ0JEYUdGdVoyVWdkR2hsSUhCeWIyZHlaWE56YVc5dUlHSmxkSGRsWlc0Z1lTQmhibVFnWWlCaFkyTnZjbVJwYm1jZ2RHOGdaR2xzWVhScGIyNHVYRzRnSUZ4dUlDQlRieUJrYVd4aGRHbHZiaUE5SURBdU5TQjNiM1ZzWkNCamFHRnVaMlZjYmlBZ1hHNGdJR0VnTFMwdExTMHRMUzB0SUdKY2JpQWdYRzRnSUhSdlhHNGdJRnh1SUNCaElDMHRMUzBnWWx4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJRY21WMmFXOTFjeUIyWVd4MVpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRU4xY25KbGJuUWdkbUZzZFdWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkVhV3hoZEdVZ2NISnZaM0psYzNNZ1lua2dlRnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCUWNtVjJhVzkxY3lCMllXeDFaU0J3YkhWeklIUm9aU0JrYVd4aGRHVmtJR1JwWm1abGNtVnVZMlZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdsc1lYUmxJRDBnS0dFc0lHSXNJR1JwYkdGMGFXOXVLU0E5UGlCaElDc2dLQ2hpSUMwZ1lTa2dLaUJrYVd4aGRHbHZiaWs3WEc1Y2JpOHFYRzRnSUVScGMzUmhibU5sWEc0Z0lGeHVJQ0JTWlhSMWNtNXpJSFJvWlNCa2FYTjBZVzVqWlNCaVpYUjNaV1Z1SUhSM2J5QnVJR1JwYldWdWMybHZibUZzSUhCdmFXNTBjeTVjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMEwyNTFiV0psY2wwNklIZ2dZVzVrSUhrZ2IzSWdhblZ6ZENCNElHOW1JSEJ2YVc1MElFRmNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUXZiblZ0WW1WeVhUb2dLRzl3ZEdsdmJtRnNLVG9nZUNCaGJtUWdlU0J2Y2lCcWRYTjBJSGdnYjJZZ2NHOXBiblFnUWx4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlVhR1VnWkdsemRHRnVZMlVnWW1WMGQyVmxiaUIwYUdVZ2RIZHZJSEJ2YVc1MGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmthWE4wWVc1alpTQTlJQ2hoTENCaUlEMGdXa1ZTVDE5UVQwbE9WQ2tnUFQ0Z2UxeHVJQ0F2THlBeFJDQmthVzFsYm5OcGIyNXpYRzRnSUdsbUlDaHBjMDUxYlNoaEtTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCa2FYTjBZVzVqWlRGRUtHRXNJR0lwTzF4dVhHNGdJQzh2SUUxMWJIUnBMV1JwYldWdWMybHZibUZzWEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnWTI5dWMzUWdlRVJsYkhSaElEMGdaR2x6ZEdGdVkyVXhSQ2hoTG5nc0lHSXVlQ2s3WEc0Z0lDQWdZMjl1YzNRZ2VVUmxiSFJoSUQwZ1pHbHpkR0Z1WTJVeFJDaGhMbmtzSUdJdWVTazdYRzRnSUNBZ1kyOXVjM1FnZWtSbGJIUmhJRDBnS0dselRuVnRLR0V1ZWlrcElEOGdaR2x6ZEdGdVkyVXhSQ2hoTG5vc0lHSXVlaWtnT2lBd08xeHVYRzRnSUNBZ2NtVjBkWEp1SUUxaGRHZ3VjM0Z5ZENnb2VFUmxiSFJoSUNvcUlESXBJQ3NnS0hsRVpXeDBZU0FxS2lBeUtTQXJJQ2g2UkdWc2RHRWdLaW9nTWlrcE8xeHVJQ0I5WEc1OU8xeHVYRzR2S2x4dUlDQldZV3gxWlNCcGJpQnlZVzVuWlNCbWNtOXRJSEJ5YjJkeVpYTnpYRzRnSUZ4dUlDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQjJZV3gxWlNCM2FYUm9hVzVjYmlBZ2RHaGhkQ0J5WVc1blpTQmhjeUJsZUhCeVpYTnpaV1FnWW5rZ2NISnZaM0psYzNNZ0tHRWdiblZ0WW1WeUlHWnliMjBnTUMweEtWeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCTWIzZGxjaUJzYVcxcGRDQnZaaUJ5WVc1blpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ3Y0dWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZHaGxJSEJ5YjJkeVpYTnpJR0psZEhkbFpXNGdiRzkzWlhJZ1lXNWtJSFZ3Y0dWeUlHeHBiV2wwY3lCbGVIQnlaWE56WldRZ01DMHhYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR0Z6SUdOaGJHTjFiR0YwWldRZ1puSnZiU0J3Y205bmNtVnpjeUIzYVhSb2FXNGdjbUZ1WjJVZ0tHNXZkQ0JzYVcxcGRHVmtJSGRwZEdocGJpQnlZVzVuWlNsY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTWdQU0FvWm5KdmJTd2dkRzhzSUhCeWIyZHlaWE56S1NBOVBpQW9MU0J3Y205bmNtVnpjeUFxSUdaeWIyMHBJQ3NnS0hCeWIyZHlaWE56SUNvZ2RHOHBJQ3NnWm5KdmJUdGNibHh1THlwY2JpQWdVSEp2WjNKbGMzTWdkMmwwYUdsdUlHZHBkbVZ1SUhKaGJtZGxYRzRnSUZ4dUlDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQndjbTluY21WemMxeHVJQ0FvWlhod2NtVnpjMlZrSUdGeklHRWdiblZ0WW1WeUlEQXRNU2tnY21Wd2NtVnpaVzUwWldRZ1lua2dkR2hsSUdkcGRtVnVJSFpoYkhWbExDQmhibVJjYmlBZ2JHbHRhWFFnZEdoaGRDQndjbTluY21WemN5QjBieUIzYVhSb2FXNGdNQzB4TGx4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNYjNkbGNpQnNhVzFwZENCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZjSEJsY2lCc2FXMXBkRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJSFJ2SUdacGJtUWdjSEp2WjNKbGMzTWdkMmwwYUdsdUlHZHBkbVZ1SUhKaGJtZGxYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56SUc5bUlIWmhiSFZsSUhkcGRHaHBiaUJ5WVc1blpTQmhjeUJsZUhCeVpYTnpaV1FnTUMweFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxJRDBnS0daeWIyMHNJSFJ2TENCMllXeDFaU2tnUFQ0Z0tIWmhiSFZsSUMwZ1puSnZiU2tnTHlBb2RHOGdMU0JtY205dEtUdGNibHh1THlwY2JpQWdVRzlwYm5RZ1puSnZiU0JoYm1kc1pTQmhibVFnWkdsemRHRnVZMlZjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dNa1FnY0c5cGJuUWdiMllnYjNKcFoybHVYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUVc1bmJHVWdabkp2YlNCdmNtbG5hVzVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCRWFYTjBZVzVqWlNCbWNtOXRJRzl5YVdkcGJseHVJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRPaUJEWVd4amRXeGhkR1ZrSURKRUlIQnZhVzUwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhCdmFXNTBSbkp2YlVGdVoyeGxRVzVrUkdsemRHRnVZMlVnUFNBb2IzSnBaMmx1TENCaGJtZHNaU3dnWkdsemRHRnVZMlVwSUQwK0lIdGNiaUFnWVc1bmJHVWdQU0JrWldkeVpXVnpWRzlTWVdScFlXNXpLR0Z1WjJ4bEtUdGNibHh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJSGc2SUdScGMzUmhibU5sSUNvZ1RXRjBhQzVqYjNNb1lXNW5iR1VwSUNzZ2IzSnBaMmx1TG5nc1hHNGdJQ0FnZVRvZ1pHbHpkR0Z1WTJVZ0tpQk5ZWFJvTG5OcGJpaGhibWRzWlNrZ0t5QnZjbWxuYVc0dWVWeHVJQ0I5TzF4dWZUdGNibHh1THlwY2JpQWdRMjl1ZG1WeWRDQnlZV1JwWVc1eklIUnZJR1JsWjNKbFpYTmNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z2NtRmthV0Z1YzF4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQldZV3gxWlNCcGJpQmtaV2R5WldWelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElISmhaR2xoYm5OVWIwUmxaM0psWlhNZ1BTQW9jbUZrYVdGdWN5a2dQVDRnY21Ga2FXRnVjeUFxSURFNE1DQXZJRTFoZEdndVVFazdYRzVjYmk4cVhHNGdJRU5oYkdOMWJHRjBaU0J5Wld4aGRHbDJaU0IyWVd4MVpWeHVJQ0JjYmlBZ1ZHRnJaWE1nZEdobElHOXdaWEpoZEc5eUlHRnVaQ0IyWVd4MVpTQm1jbTl0SUdFZ2MzUnlhVzVuTENCcFpTQmNJaXM5TlZ3aUxDQmhibVFnWVhCd2JHbGxjMXh1SUNCMGJ5QjBhR1VnWTNWeWNtVnVkQ0IyWVd4MVpTQjBieUJ5WlhOdmJIWmxJR0VnYm1WM0lIUmhjbWRsZEM1Y2JpQWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRkpsYkdGMGFYWmxJSFpoYkhWbFhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRTVsZHlCMllXeDFaVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J5Wld4aGRHbDJaVlpoYkhWbElEMGdLR04xY25KbGJuUXNJSEpsYkdGMGFYWmxLU0E5UGlCN1hHNGdJR3hsZENCdVpYZFdZV3gxWlNBOUlHTjFjbkpsYm5RN1hHNGdJR052Ym5OMElHVnhkV0YwYVc5dUlEMGdjbVZzWVhScGRtVXVjM0JzYVhRb0p6MG5LVHRjYmlBZ1kyOXVjM1FnYjNCbGNtRjBiM0lnUFNCbGNYVmhkR2x2Ymxzd1hUdGNiaUFnYkdWMElIc2dkVzVwZEN3Z2RtRnNkV1VnZlNBOUlHWnBibVJXWVd4MVpVRnVaRlZ1YVhRb1pYRjFZWFJwYjI1Yk1WMHBPMXh1WEc0Z0lIWmhiSFZsSUQwZ2NHRnljMlZHYkc5aGRDaDJZV3gxWlNrN1hHNWNiaUFnYzNkcGRHTm9JQ2h2Y0dWeVlYUnZjaWtnZTF4dUlDQmpZWE5sSUNjckp6cGNiaUFnSUNCdVpYZFdZV3gxWlNBclBTQjJZV3gxWlR0Y2JpQWdJQ0JpY21WaGF6dGNiaUFnWTJGelpTQW5MU2M2WEc0Z0lDQWdibVYzVm1Gc2RXVWdMVDBnZG1Gc2RXVTdYRzRnSUNBZ1luSmxZV3M3WEc0Z0lHTmhjMlVnSnlvbk9seHVJQ0FnSUc1bGQxWmhiSFZsSUNvOUlIWmhiSFZsTzF4dUlDQWdJR0p5WldGck8xeHVJQ0JqWVhObElDY3ZKenBjYmlBZ0lDQnVaWGRXWVd4MVpTQXZQU0IyWVd4MVpUdGNiaUFnSUNCaWNtVmhhenRjYmlBZ2ZWeHVJQ0JjYmlBZ2FXWWdLSFZ1YVhRcElIdGNiaUFnSUNCdVpYZFdZV3gxWlNBclBTQjFibWwwTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUc1bGQxWmhiSFZsTzF4dWZUdGNibHh1THlwY2JpQWdSbkpoYldWeVlYUmxMV2x1WkdWd1pXNWtaVzUwSUhOdGIyOTBhR2x1WjF4dVhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUbVYzSUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVDJ4a0lIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkSUNodmNIUnBiMjVoYkNrNklGTnRiMjkwYUdsdVp5QW9NQ0JwY3lCdWIyNWxLVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Ylc5dmRHZ2dQU0FvYm1WM1ZtRnNkV1VzSUc5c1pGWmhiSFZsTENCa2RYSmhkR2x2Yml3Z2MyMXZiM1JvYVc1bklEMGdNQ2tnUFQ0Z2RHOUVaV05wYldGc0tHOXNaRlpoYkhWbElDc2dLR1IxY21GMGFXOXVJQ29nS0c1bGQxWmhiSFZsSUMwZ2IyeGtWbUZzZFdVcElDOGdUV0YwYUM1dFlYZ29jMjF2YjNSb2FXNW5MQ0JrZFhKaGRHbHZiaWtwS1R0Y2JseHVMeXBjYmlBZ1EyOXVkbVZ5ZENCNElIQmxjaUJ6WldOdmJtUWdkRzhnY0dWeUlHWnlZVzFsSUhabGJHOWphWFI1SUdKaGMyVmtJRzl1SUdad2MxeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmJtbDBJSEJsY2lCelpXTnZibVJjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCR2NtRnRaU0JrZFhKaGRHbHZiaUJwYmlCdGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR1ZsWkZCbGNrWnlZVzFsSUQwZ0tIaHdjeXdnWm5KaGJXVkVkWEpoZEdsdmJpa2dQVDRnS0dselRuVnRLSGh3Y3lrcElEOGdlSEJ6SUM4Z0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLU0E2SURBN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ2RtVnNiMk5wZEhrZ2FXNTBieUIyWld4cFkybDBlU0J3WlhJZ2MyVmpiMjVrWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ1YVhRZ2NHVnlJR1p5WVcxbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI0Z2FXNGdiWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCbFpXUlFaWEpUWldOdmJtUWdQU0FvZG1Wc2IyTnBkSGtzSUdaeVlXMWxSSFZ5WVhScGIyNHBJRDArSUhabGJHOWphWFI1SUNvZ0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLVHRjYmx4dUx5cGNiaUFnUTNKbFlYUmxJSE4wWlhCd1pXUWdkbVZ5YzJsdmJpQnZaaUF3TFRFZ2NISnZaM0psYzNOY2JpQWdYRzRnSUVCd1lYSmhiU0JiYVc1MFhUb2dUblZ0WW1WeUlHOW1JSE4wWlhCelhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlRkR1Z3Y0dWa0lIWmhiSFZsWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOMFpYQlFjbTluY21WemN5QTlJQ2h6ZEdWd2N5d2djSEp2WjNKbGMzTXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2MyVm5iV1Z1ZENBOUlERWdMeUFvYzNSbGNITWdMU0F4S1R0Y2JpQWdZMjl1YzNRZ2RHRnlaMlYwSUQwZ01TQXRJQ2d4SUM4Z2MzUmxjSE1wTzF4dUlDQmpiMjV6ZENCd2NtOW5jbVZ6YzA5bVZHRnlaMlYwSUQwZ1RXRjBhQzV0YVc0b2NISnZaM0psYzNNZ0x5QjBZWEpuWlhRc0lERXBPMXh1WEc0Z0lISmxkSFZ5YmlCTllYUm9MbVpzYjI5eUtIQnliMmR5WlhOelQyWlVZWEpuWlhRZ0x5QnpaV2R0Wlc1MEtTQXFJSE5sWjIxbGJuUTdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdGVwcyA9IGV4cG9ydHMuY2xhbXAgPSBleHBvcnRzLmNsYW1wT3ZlciA9IGV4cG9ydHMuY2xhbXBVbmRlciA9IGV4cG9ydHMuaW50ZXJwb2xhdGUgPSBleHBvcnRzLmZsb3cgPSBleHBvcnRzLmFwcGVuZFVuaXQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4vY2FsYycpO1xuXG4vKipcbiAqIEFwcGVuZCBVbml0XG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGVuZCB0aGUgdW5pdCB0byBhIGdpdmVuIHZhbHVlXG4gKiBhcHBlbmRVbml0KCdweCcpKDIwKSAtPiAnMjBweCdcbiAqIEBwYXJhbSAge3N0cmluZ30gdW5pdClcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGFwcGVuZFVuaXQgPSBleHBvcnRzLmFwcGVuZFVuaXQgPSBmdW5jdGlvbiAodW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gJycgKyB2ICsgdW5pdDtcbiAgfTtcbn07XG5cbi8qKlxuICogRmxvd1xuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogZmxvdyhtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG52YXIgZmxvdyA9IGV4cG9ydHMuZmxvdyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRyYW5zZm9ybWVycyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHRyYW5zZm9ybWVyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldKHYpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcblxudmFyIGludGVycG9sYXRlID0gZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykge1xuICB2YXIgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIHZhciBmaW5hbEluZGV4ID0gcmFuZ2VMZW5ndGggLSAxO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgdmFyIGkgPSAwO1xuXG4gICAgLy8gRmluZCBpbmRleCBvZiByYW5nZSBzdGFydFxuICAgIGZvciAoOyBpIDwgcmFuZ2VMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlucHV0W2ldID4gdiB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9ncmVzc0luUmFuZ2UgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGlucHV0W2ldLCBpbnB1dFtpICsgMV0sIHYpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gcmFuZ2VFYXNpbmcgPyByYW5nZUVhc2luZ1tpXShwcm9ncmVzc0luUmFuZ2UpIDogcHJvZ3Jlc3NJblJhbmdlO1xuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKG91dHB1dFtpXSwgb3V0cHV0W2kgKyAxXSwgZWFzZWRQcm9ncmVzcyk7XG4gIH07XG59O1xuXG4vKipcbiAqIENsYW1wIHZhbHVlIGJldHdlZW5cbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVzdHJpY3QgYSBnaXZlbiB2YWx1ZSBiZXR3ZWVuIGBtaW5gIGFuZCBgbWF4YFxuICogQHBhcmFtICB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBjbGFtcFVuZGVyID0gZXhwb3J0cy5jbGFtcFVuZGVyID0gZnVuY3Rpb24gKG1heCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odiwgbWF4KTtcbiAgfTtcbn07XG52YXIgY2xhbXBPdmVyID0gZXhwb3J0cy5jbGFtcE92ZXIgPSBmdW5jdGlvbiAobWluKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBNYXRoLm1heCh2LCBtaW4pO1xuICB9O1xufTtcbnZhciBjbGFtcCA9IGV4cG9ydHMuY2xhbXAgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgcmV0dXJuIGZsb3coY2xhbXBPdmVyKG1pbiksIGNsYW1wVW5kZXIobWF4KSk7XG59O1xuXG52YXIgc3RlcHMgPSBleHBvcnRzLnN0ZXBzID0gZnVuY3Rpb24gKHN0ZXBzLCBtaW4sIG1heCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKG1pbiwgbWF4LCB2KTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLnN0ZXBQcm9ncmVzcykoc3RlcHMsIHByb2dyZXNzKTtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12Wm1sc2RHVnljeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCT3pzN096czdPenM3UVVGVFR5eEpRVUZOTEd0RFFVRmhMRlZCUVVNc1NVRkJSRHRUUVVGVkxGVkJRVU1zUTBGQlJEdG5Ra0ZCVlN4SlFVRkpPMGRCUVdRN1EwRkJWanM3T3pzN096czdPMEZCVTI1Q0xFbEJRVTBzYzBKQlFVOHNXVUZCY1VJN2IwTkJRV3BDT3p0SFFVRnBRanM3UVVGRGRrTXNUVUZCVFN4clFrRkJhMElzWVVGQllTeE5RVUZpTEVOQlJHVTdRVUZGZGtNc1RVRkJTU3hKUVVGSkxFTkJRVW9zUTBGR2JVTTdPMEZCU1haRExGTkJRVThzVlVGQlF5eERRVUZFTEVWQlFVODdRVUZEV2l4VFFVRkxMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzWlVGQlNpeEZRVUZ4UWl4SFFVRnFReXhGUVVGelF6dEJRVU53UXl4VlFVRkpMR0ZCUVdFc1EwRkJZaXhGUVVGblFpeERRVUZvUWl4RFFVRktMRU5CUkc5RE8wdEJRWFJET3p0QlFVbEJMRmRCUVU4c1EwRkJVQ3hEUVV4Wk8wZEJRVkFzUTBGS1owTTdRMEZCY2tJN08wRkJZV0lzU1VGQlRTeHZRMEZCWXl4VlFVRkRMRXRCUVVRc1JVRkJVU3hOUVVGU0xFVkJRV2RDTEZkQlFXaENMRVZCUVdkRE8wRkJRM3BFTEUxQlFVMHNZMEZCWXl4TlFVRk5MRTFCUVU0c1EwRkVjVU03UVVGRmVrUXNUVUZCVFN4aFFVRmhMR05CUVdNc1EwRkJaQ3hEUVVaelF6czdRVUZKZWtRc1UwRkJUeXhWUVVGRExFTkJRVVFzUlVGQlR6czdRVUZGV2l4UlFVRkpMRXRCUVVzc1RVRkJUU3hEUVVGT0xFTkJRVXdzUlVGQlpUdEJRVU5xUWl4aFFVRlBMRTlCUVU4c1EwRkJVQ3hEUVVGUUxFTkJSR2xDTzB0QlFXNUNPenM3UVVGR1dTeFJRVTlTTEV0QlFVc3NUVUZCVFN4VlFVRk9MRU5CUVV3c1JVRkJkMEk3UVVGRE1VSXNZVUZCVHl4UFFVRlBMRlZCUVZBc1EwRkJVQ3hEUVVRd1FqdExRVUUxUWpzN1FVRkpRU3hSUVVGSkxFbEJRVWtzUTBGQlNqczdPMEZCV0ZFc1YwRmpUQ3hKUVVGSkxGZEJRVW9zUlVGQmFVSXNSMEZCZUVJc1JVRkJOa0k3UVVGRE0wSXNWVUZCU1N4TlFVRk5MRU5CUVU0c1NVRkJWeXhEUVVGWUxFbEJRV2RDTEUxQlFVMHNWVUZCVGl4RlFVRnJRanRCUVVOd1F5eGpRVVJ2UXp0UFFVRjBRenRMUVVSR096dEJRVTFCTEZGQlFVMHNhMEpCUVd0Q0xHZERRVUZ4UWl4TlFVRk5MRU5CUVU0c1EwRkJja0lzUlVGQkswSXNUVUZCVFN4SlFVRkpMRU5CUVVvc1EwRkJja01zUlVGQk5rTXNRMEZCTjBNc1EwRkJiRUlzUTBGd1FrMDdRVUZ4UWxvc1VVRkJUU3huUWtGQlowSXNZMEZCWjBJc1dVRkJXU3hEUVVGYUxFVkJRV1VzWlVGQlppeERRVUZvUWl4SFFVRnJSQ3hsUVVGc1JDeERRWEpDVmp0QlFYTkNXaXhYUVVGUExHZERRVUZ4UWl4UFFVRlBMRU5CUVZBc1EwRkJja0lzUlVGQlowTXNUMEZCVHl4SlFVRkpMRU5CUVVvc1EwRkJka01zUlVGQkswTXNZVUZCTDBNc1EwRkJVQ3hEUVhSQ1dUdEhRVUZRTEVOQlNtdEVPME5CUVdoRE96czdPenM3T3pzN1FVRnhRM0JDTEVsQlFVMHNhME5CUVdFc1ZVRkJReXhIUVVGRU8xTkJRVk1zVlVGQlF5eERRVUZFTzFkQlFVOHNTMEZCU3l4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxFZEJRVm83UjBGQlVEdERRVUZVTzBGQlEyNUNMRWxCUVUwc1owTkJRVmtzVlVGQlF5eEhRVUZFTzFOQlFWTXNWVUZCUXl4RFFVRkVPMWRCUVU4c1MwRkJTeXhIUVVGTUxFTkJRVk1zUTBGQlZDeEZRVUZaTEVkQlFWbzdSMEZCVUR0RFFVRlVPMEZCUTJ4Q0xFbEJRVTBzZDBKQlFWRXNWVUZCUXl4SFFVRkVMRVZCUVUwc1IwRkJUanRUUVVGakxFdEJRVXNzVlVGQlZTeEhRVUZXTEVOQlFVd3NSVUZCY1VJc1YwRkJWeXhIUVVGWUxFTkJRWEpDTzBOQlFXUTdPMEZCUldRc1NVRkJUU3gzUWtGQlVTeFZRVUZETEV0QlFVUXNSVUZCVVN4SFFVRlNMRVZCUVdFc1IwRkJZanRUUVVGeFFpeFZRVUZETEVOQlFVUXNSVUZCVHp0QlFVTXZReXhSUVVGTkxGZEJRVmNzWjBOQlFYRkNMRWRCUVhKQ0xFVkJRVEJDTEVkQlFURkNMRVZCUVN0Q0xFTkJRUzlDTEVOQlFWZ3NRMEZFZVVNN1FVRkZMME1zVjBGQlR5eDNRa0ZCWVN4TFFVRmlMRVZCUVc5Q0xGRkJRWEJDTEVOQlFWQXNRMEZHSzBNN1IwRkJVRHREUVVGeVFpSXNJbVpwYkdVaU9pSm1hV3gwWlhKekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsTENCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5d2djM1JsY0ZCeWIyZHlaWE56SUgwZ1puSnZiU0FuTGk5allXeGpKenRjYmx4dUx5b3FYRzRnS2lCQmNIQmxibVFnVlc1cGRGeHVJQ29nUTNKbFlYUmxjeUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdkMmxzYkNCaGNIQmxibVFnZEdobElIVnVhWFFnZEc4Z1lTQm5hWFpsYmlCMllXeDFaVnh1SUNvZ1lYQndaVzVrVlc1cGRDZ25jSGduS1NneU1Da2dMVDRnSnpJd2NIZ25YRzRnS2lCQWNHRnlZVzBnSUh0emRISnBibWQ5SUhWdWFYUXBYRzRnS2lCQWNtVjBkWEp1SUh0dWRXMWlaWEo5WEc0Z0tpOWNibVY0Y0c5eWRDQmpiMjV6ZENCaGNIQmxibVJWYm1sMElEMGdLSFZ1YVhRcElEMCtJQ2gyS1NBOVBpQmdKSHQyZlNSN2RXNXBkSDFnTzF4dVhHNHZLaXBjYmlBcUlFWnNiM2RjYmlBcUlFTnZiWEJ2YzJVZ2IzUm9aWElnZEhKaGJuTm1iM0p0WlhKeklIUnZJSEoxYmlCc2FXNWxZWEpwYkhsY2JpQXFJR1pzYjNjb2JXbHVLREl3S1N3Z2JXRjRLRFF3S1NsY2JpQXFJRUJ3WVhKaGJTQWdleTR1TG1aMWJtTjBhVzl1YzMwZ2RISmhibk5tYjNKdFpYSnpYRzRnS2lCQWNtVjBkWEp1SUh0bWRXNWpkR2x2Ym4xY2JpQXFMMXh1Wlhod2IzSjBJR052Ym5OMElHWnNiM2NnUFNBb0xpNHVkSEpoYm5ObWIzSnRaWEp6S1NBOVBpQjdYRzRnSUdOdmJuTjBJRzUxYlZSeVlXNXpabTl5YldWeWN5QTlJSFJ5WVc1elptOXliV1Z5Y3k1c1pXNW5kR2c3WEc0Z0lHeGxkQ0JwSUQwZ01EdGNibHh1SUNCeVpYUjFjbTRnS0hZcElEMCtJSHRjYmlBZ0lDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z2JuVnRWSEpoYm5ObWIzSnRaWEp6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJSFlnUFNCMGNtRnVjMlp2Y20xbGNuTmJhVjBvZGlrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFk3WEc0Z0lIMDdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVc1MFpYSndiMnhoZEdVZ1BTQW9hVzV3ZFhRc0lHOTFkSEIxZEN3Z2NtRnVaMlZGWVhOcGJtY3BJRDArSUh0Y2JpQWdZMjl1YzNRZ2NtRnVaMlZNWlc1bmRHZ2dQU0JwYm5CMWRDNXNaVzVuZEdnN1hHNGdJR052Ym5OMElHWnBibUZzU1c1a1pYZ2dQU0J5WVc1blpVeGxibWQwYUNBdElERTdYRzVjYmlBZ2NtVjBkWEp1SUNoMktTQTlQaUI3WEc0Z0lDQWdMeThnU1dZZ2RtRnNkV1VnYjNWMGMybGtaU0J0YVc1cGJYVnRJSEpoYm1kbExDQnhkV2xqYTJ4NUlISmxkSFZ5Ymx4dUlDQWdJR2xtSUNoMklEdzlJR2x1Y0hWMFd6QmRLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdiM1YwY0hWMFd6QmRPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRWxtSUhaaGJIVmxJRzkxZEhOcFpHVWdiV0Y0YVcxMWJTQnlZVzVuWlN3Z2NYVnBZMnRzZVNCeVpYUjFjbTVjYmlBZ0lDQnBaaUFvZGlBK1BTQnBibkIxZEZ0bWFXNWhiRWx1WkdWNFhTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHOTFkSEIxZEZ0bWFXNWhiRWx1WkdWNFhUdGNiaUFnSUNCOVhHNWNiaUFnSUNCc1pYUWdhU0E5SURBN1hHNWNiaUFnSUNBdkx5QkdhVzVrSUdsdVpHVjRJRzltSUhKaGJtZGxJSE4wWVhKMFhHNGdJQ0FnWm05eUlDZzdJR2tnUENCeVlXNW5aVXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNCcFppQW9hVzV3ZFhSYmFWMGdQaUIySUh4OElHa2dQVDA5SUdacGJtRnNTVzVrWlhncElIdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTI5dWMzUWdjSEp2WjNKbGMzTkpibEpoYm1kbElEMGdaMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvYVc1d2RYUmJhVjBzSUdsdWNIVjBXMmtnS3lBeFhTd2dkaWs3WEc0Z0lDQWdZMjl1YzNRZ1pXRnpaV1JRY205bmNtVnpjeUE5SUNoeVlXNW5aVVZoYzJsdVp5a2dQeUJ5WVc1blpVVmhjMmx1WjF0cFhTaHdjbTluY21WemMwbHVVbUZ1WjJVcElEb2djSEp2WjNKbGMzTkpibEpoYm1kbE8xeHVJQ0FnSUhKbGRIVnliaUJuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lodmRYUndkWFJiYVYwc0lHOTFkSEIxZEZ0cElDc2dNVjBzSUdWaGMyVmtVSEp2WjNKbGMzTXBPMXh1SUNCOU8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCRGJHRnRjQ0IyWVd4MVpTQmlaWFIzWldWdVhHNGdLaUJEY21WaGRHVnpJR0VnWm5WdVkzUnBiMjRnZEdoaGRDQjNhV3hzSUhKbGMzUnlhV04wSUdFZ1oybDJaVzRnZG1Gc2RXVWdZbVYwZDJWbGJpQmdiV2x1WUNCaGJtUWdZRzFoZUdCY2JpQXFJRUJ3WVhKaGJTQWdlMjUxYldKbGNuMGdiV2x1WEc0Z0tpQkFjR0Z5WVcwZ0lIdHVkVzFpWlhKOUlHMWhlRnh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlZ4dUlDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyeGhiWEJWYm1SbGNpQTlJQ2h0WVhncElEMCtJQ2gyS1NBOVBpQk5ZWFJvTG0xcGJpaDJMQ0J0WVhncE8xeHVaWGh3YjNKMElHTnZibk4wSUdOc1lXMXdUM1psY2lBOUlDaHRhVzRwSUQwK0lDaDJLU0E5UGlCTllYUm9MbTFoZUNoMkxDQnRhVzRwTzF4dVpYaHdiM0owSUdOdmJuTjBJR05zWVcxd0lEMGdLRzFwYml3Z2JXRjRLU0E5UGlCbWJHOTNLR05zWVcxd1QzWmxjaWh0YVc0cExDQmpiR0Z0Y0ZWdVpHVnlLRzFoZUNrcE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzUmxjSE1nUFNBb2MzUmxjSE1zSUcxcGJpd2diV0Y0S1NBOVBpQW9kaWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQndjbTluY21WemN5QTlJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0cxcGJpd2diV0Y0TENCMktUdGNiaUFnY21WMGRYSnVJSE4wWlhCUWNtOW5jbVZ6Y3loemRHVndjeXdnY0hKdlozSmxjM01wTzF4dWZUdGNibHh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2ZpbHRlcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9maWx0ZXJzID0gcmVxdWlyZSgnLi4vaW5jL2ZpbHRlcnMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF9lYXNpbmcgPSByZXF1aXJlKCcuLi9lYXNpbmcnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgY2xhbXBQcm9ncmVzcyA9ICgwLCBfZmlsdGVycy5jbGFtcCkoMCwgMSk7XG5cbnZhciBUd2VlbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhUd2VlbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3ZWVuKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVHdlZW4ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uO1xuICAgIHZhciBlYXNlID0gX3Byb3BzLmVhc2U7XG4gICAgdmFyIGZyb20gPSBfcHJvcHMuZnJvbTtcbiAgICB2YXIgdG8gPSBfcHJvcHMudG87XG5cblxuICAgIHRoaXMuZWxhcHNlZCA9IDA7XG5cbiAgICB0aGlzLm9uVXBkYXRlID0gKDAsIF9maWx0ZXJzLmZsb3cpKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczIuZWxhcHNlZCArPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCk7XG4gICAgfSwgZnVuY3Rpb24gKGVsYXBzZWQpIHtcbiAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKDAsIGR1cmF0aW9uLCBlbGFwc2VkKTtcbiAgICB9LCBjbGFtcFByb2dyZXNzLCBlYXNlLCBmdW5jdGlvbiAoZWFzZWRQcm9ncmVzcykge1xuICAgICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZnJvbSwgdG8sIGVhc2VkUHJvZ3Jlc3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGFwc2VkID49IHRoaXMucHJvcHMuZHVyYXRpb247XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuO1xufShfMi5kZWZhdWx0KTtcblxuVHdlZW4uZGVmYXVsdFByb3BzID0ge1xuICBkdXJhdGlvbjogMzAwLFxuICBlYXNlOiBfZWFzaW5nLmVhc2VPdXQsXG4gIGZyb206IDAsXG4gIHRvOiAwXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBUd2Vlbihwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1IzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenRCUVVOQk96dEJRVU5CT3p0QlFVTkJPenRCUVVOQk96czdPenM3T3pzN08wRkJSVUVzU1VGQlRTeG5Ra0ZCWjBJc2IwSkJRVTBzUTBGQlRpeEZRVUZUTEVOQlFWUXNRMEZCYUVJN08wbEJSVUU3T3pzN096czdPenRyUWtGUlNpdzJRa0ZCVlRzN08ybENRVU0yUWl4TFFVRkxMRXRCUVV3c1EwRkVOMEk3VVVGRFFTd3lRa0ZFUVR0UlFVTlZMRzFDUVVSV08xRkJRMmRDTEcxQ1FVUm9RanRSUVVOelFpeGxRVVIwUWpzN08wRkJSMUlzVTBGQlN5eFBRVUZNTEVkQlFXVXNRMEZCWml4RFFVaFJPenRCUVV0U0xGTkJRVXNzVVVGQlRDeEhRVUZuUWl4dFFrRkRaRHRoUVVGTkxFOUJRVXNzVDBGQlRDeEpRVUZuUWl4dlEwRkJhRUk3UzBGQlRpeEZRVU5CTEZWQlFVTXNUMEZCUkR0aFFVRmhMR2REUVVGeFFpeERRVUZ5UWl4RlFVRjNRaXhSUVVGNFFpeEZRVUZyUXl4UFFVRnNRenRMUVVGaUxFVkJRMEVzWVVGSVl5eEZRVWxrTEVsQlNtTXNSVUZMWkN4VlFVRkRMR0ZCUVVRN1lVRkJiVUlzWjBOQlFYRkNMRWxCUVhKQ0xFVkJRVEpDTEVWQlFUTkNMRVZCUVN0Q0xHRkJRUzlDTzB0QlFXNUNMRU5CVEVZc1EwRk1VVHM3TzBGQlVrNHNhMEpCYzBKS0xDdERRVUZ0UWp0QlFVTnFRaXhYUVVGUkxFdEJRVXNzVDBGQlRDeEpRVUZuUWl4TFFVRkxMRXRCUVV3c1EwRkJWeXhSUVVGWUxFTkJSRkE3T3p0VFFYUkNaanM3TzAxQlEwY3NaVUZCWlR0QlFVTndRaXhaUVVGVkxFZEJRVlk3UVVGRFFTeDFRa0ZHYjBJN1FVRkhjRUlzVVVGQlRTeERRVUZPTzBGQlEwRXNUVUZCU1N4RFFVRktPenM3YTBKQmMwSlhMRlZCUVVNc1MwRkJSRHRUUVVGWExFbEJRVWtzUzBGQlNpeERRVUZWTEV0QlFWWTdRMEZCV0NJc0ltWnBiR1VpT2lKMGQyVmxiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYm1sdGNHOXlkQ0I3SUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVwYlhCdmNuUWdleUJtYkc5M0xDQmpiR0Z0Y0NCOUlHWnliMjBnSnk0dUwybHVZeTltYVd4MFpYSnpKenRjYm1sdGNHOXlkQ0I3SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbExDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeUI5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JtbHRjRzl5ZENCN0lHVmhjMlZQZFhRZ2ZTQm1jbTl0SUNjdUxpOWxZWE5wYm1jbk8xeHVYRzVqYjI1emRDQmpiR0Z0Y0ZCeWIyZHlaWE56SUQwZ1kyeGhiWEFvTUN3Z01TazdYRzVjYm1Oc1lYTnpJRlIzWldWdUlHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0JrZFhKaGRHbHZiam9nTXpBd0xGeHVJQ0FnSUdWaGMyVTZJR1ZoYzJWUGRYUXNYRzRnSUNBZ1puSnZiVG9nTUN4Y2JpQWdJQ0IwYnpvZ01GeHVJQ0I5WEc1Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHUjFjbUYwYVc5dUxDQmxZWE5sTENCbWNtOXRMQ0IwYnlCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmx4dUlDQWdJSFJvYVhNdVpXeGhjSE5sWkNBOUlEQTdYRzVjYmlBZ0lDQjBhR2x6TG05dVZYQmtZWFJsSUQwZ1pteHZkeWhjYmlBZ0lDQWdJQ2dwSUQwK0lIUm9hWE11Wld4aGNITmxaQ0FyUFNCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVb0tTeGNiaUFnSUNBZ0lDaGxiR0Z3YzJWa0tTQTlQaUJuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNnd0xDQmtkWEpoZEdsdmJpd2daV3hoY0hObFpDa3NYRzRnSUNBZ0lDQmpiR0Z0Y0ZCeWIyZHlaWE56TEZ4dUlDQWdJQ0FnWldGelpTeGNiaUFnSUNBZ0lDaGxZWE5sWkZCeWIyZHlaWE56S1NBOVBpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWhtY205dExDQjBieXdnWldGelpXUlFjbTluY21WemN5bGNiaUFnSUNBcE8xeHVJQ0I5WEc1Y2JpQWdhWE5CWTNScGIyNURiMjF3YkdWMFpTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z0tIUm9hWE11Wld4aGNITmxaQ0ErUFNCMGFHbHpMbkJ5YjNCekxtUjFjbUYwYVc5dUtUdGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9jSEp2Y0hNcElEMCtJRzVsZHlCVWQyVmxiaWh3Y205d2N5azdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQaHlzaWNzID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFBoeXNpY3MsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFBoeXNpY3MoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBoeXNpY3MpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBQaHlzaWNzLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBhY2NlbGVyYXRpb24gPSBfcHJvcHMuYWNjZWxlcmF0aW9uO1xuICAgIHZhciBhdXRvU3RvcFNwZWVkID0gX3Byb3BzLmF1dG9TdG9wU3BlZWQ7XG4gICAgdmFyIGZyaWN0aW9uID0gX3Byb3BzLmZyaWN0aW9uO1xuICAgIHZhciB2ZWxvY2l0eSA9IF9wcm9wcy52ZWxvY2l0eTtcbiAgICB2YXIgc3ByaW5nID0gX3Byb3BzLnNwcmluZztcbiAgICB2YXIgdG8gPSBfcHJvcHMudG87XG5cbiAgICB2YXIgbmV3VmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICB2YXIgZWxhcHNlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcblxuICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChhY2NlbGVyYXRpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShhY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGZyaWN0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGZyaWN0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSAqPSBNYXRoLnBvdygxIC0gZnJpY3Rpb24sIGVsYXBzZWQgLyAxMDApO1xuICAgIH1cblxuICAgIGlmIChzcHJpbmcgJiYgdG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGRpc3RhbmNlVG9UYXJnZXQgPSB0byAtIHRoaXMuY3VycmVudDtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkoc3ByaW5nLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB2ZWxvY2l0eVxuICAgIHRoaXMuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkobmV3VmVsb2NpdHksIGVsYXBzZWQpO1xuICAgIHRoaXMucHJvcHMudmVsb2NpdHkgPSBuZXdWZWxvY2l0eTtcblxuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH07XG5cbiAgUGh5c2ljcy5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuICF0aGlzLnZlbG9jaXR5IHx8IE1hdGguYWJzKHRoaXMudmVsb2NpdHkpIDw9IHRoaXMucHJvcHMuYXV0b1N0b3BTcGVlZDtcbiAgfTtcblxuICByZXR1cm4gUGh5c2ljcztcbn0oXzIuZGVmYXVsdCk7XG5cblBoeXNpY3MuZGVmYXVsdFByb3BzID0ge1xuICBhY2NlbGVyYXRpb246IDAsXG4gIGZyaWN0aW9uOiAwLFxuICB2ZWxvY2l0eTogMCxcbiAgYXV0b1N0b3BTcGVlZDogMC4wMDFcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IFBoeXNpY3MocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3TzBGQlEwRTdPenM3T3pzN096czdTVUZGVFRzN096czdPenM3TzI5Q1FWRktMQ3RDUVVGWE8ybENRVU1yUkN4TFFVRkxMRXRCUVV3c1EwRkVMMFE3VVVGRFJDeHRRMEZFUXp0UlFVTmhMSEZEUVVSaU8xRkJRelJDTERKQ1FVUTFRanRSUVVOelF5d3lRa0ZFZEVNN1VVRkRaMFFzZFVKQlJHaEVPMUZCUTNkRUxHVkJSSGhFT3p0QlFVVlVMRkZCUVVrc1kwRkJZeXhSUVVGa0xFTkJSa3M3UVVGSFZDeFJRVUZOTEZWQlFWVXNiME5CUVZZN096dEJRVWhITEZGQlRVd3NXVUZCU2l4RlFVRnJRanRCUVVOb1FpeHhRa0ZCWlN4NVFrRkJZeXhaUVVGa0xFVkJRVFJDTEU5QlFUVkNMRU5CUVdZc1EwRkVaMEk3UzBGQmJFSTdPenRCUVU1VExGRkJWMHdzVVVGQlNpeEZRVUZqTzBGQlExb3NPRUpCUVdkQ0xFbEJRVWtzVVVGQlNpeEZRVUZyUWl4VlFVRlZMRWRCUVZZc1EwRkJiRU1zUTBGRVdUdExRVUZrT3p0QlFVbEJMRkZCUVVrc1ZVRkJWU3hQUVVGUExGTkJRVkFzUlVGQmEwSTdRVUZET1VJc1ZVRkJUU3h0UWtGQmJVSXNTMEZCU3l4TFFVRkxMRTlCUVV3c1EwRkVRVHRCUVVVNVFpeHhRa0ZCWlN4dFFrRkJiVUlzZVVKQlFXTXNUVUZCWkN4RlFVRnpRaXhQUVVGMFFpeERRVUZ1UWl4RFFVWmxPMHRCUVdoRE96czdRVUZtVXl4UlFYRkNWQ3hEUVVGTExFOUJRVXdzU1VGQlowSXNlVUpCUVdNc1YwRkJaQ3hGUVVFeVFpeFBRVUV6UWl4RFFVRm9RaXhEUVhKQ1V6dEJRWE5DVkN4VFFVRkxMRXRCUVV3c1EwRkJWeXhSUVVGWUxFZEJRWE5DTEZkQlFYUkNMRU5CZEVKVE96dEJRWGRDVkN4WFFVRlBMRXRCUVVzc1QwRkJUQ3hEUVhoQ1JUczdPMEZCVWxBc2IwSkJiVU5LTEN0RFFVRnRRanRCUVVOcVFpeFhRVUZSTEVOQlFVTXNTMEZCU3l4UlFVRk1MRWxCUVdsQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFVc3NVVUZCVEN4RFFVRlVMRWxCUVRKQ0xFdEJRVXNzUzBGQlRDeERRVUZYTEdGQlFWZ3NRMEZFY0VNN096dFRRVzVEWmpzN08xRkJRMGNzWlVGQlpUdEJRVU53UWl4blFrRkJZeXhEUVVGa08wRkJRMEVzV1VGQlZTeERRVUZXTzBGQlEwRXNXVUZCVlN4RFFVRldPMEZCUTBFc2FVSkJRV1VzUzBGQlpqczdPMnRDUVcxRFZ5eFZRVUZETEV0QlFVUTdVMEZCVnl4SlFVRkpMRTlCUVVvc1EwRkJXU3hMUVVGYU8wTkJRVmdpTENKbWFXeGxJam9pY0doNWMybGpjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYm1sdGNHOXlkQ0I3SUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVwYlhCdmNuUWdleUJ6Y0dWbFpGQmxja1p5WVcxbElIMGdabkp2YlNBbkxpNHZhVzVqTDJOaGJHTW5PMXh1WEc1amJHRnpjeUJRYUhsemFXTnpJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYzNSaGRHbGpJR1JsWm1GMWJIUlFjbTl3Y3lBOUlIdGNiaUFnSUNCaFkyTmxiR1Z5WVhScGIyNDZJREFzWEc0Z0lDQWdabkpwWTNScGIyNDZJREFzWEc0Z0lDQWdkbVZzYjJOcGRIazZJREFzWEc0Z0lDQWdZWFYwYjFOMGIzQlRjR1ZsWkRvZ01DNHdNREZjYmlBZ2ZWeHVYRzRnSUc5dVZYQmtZWFJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWVdOalpXeGxjbUYwYVc5dUxDQmhkWFJ2VTNSdmNGTndaV1ZrTENCbWNtbGpkR2x2Yml3Z2RtVnNiMk5wZEhrc0lITndjbWx1Wnl3Z2RHOGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnYkdWMElHNWxkMVpsYkc5amFYUjVJRDBnZG1Wc2IyTnBkSGs3WEc0Z0lDQWdZMjl1YzNRZ1pXeGhjSE5sWkNBOUlIUnBiV1ZUYVc1alpVeGhjM1JHY21GdFpTZ3BPMXh1WEc0Z0lDQWdMeThnUVhCd2JIa2dZV05qWld4bGNtRjBhVzl1SUhSdklIWmxiRzlqYVhSNVhHNGdJQ0FnYVdZZ0tHRmpZMlZzWlhKaGRHbHZiaWtnZTF4dUlDQWdJQ0FnYm1WM1ZtVnNiMk5wZEhrZ0t6MGdjM0JsWldSUVpYSkdjbUZ0WlNoaFkyTmxiR1Z5WVhScGIyNHNJR1ZzWVhCelpXUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRUZ3Y0d4NUlHWnlhV04wYVc5dUlIUnZJSFpsYkc5amFYUjVYRzRnSUNBZ2FXWWdLR1p5YVdOMGFXOXVLU0I3WEc0Z0lDQWdJQ0J1WlhkV1pXeHZZMmwwZVNBcVBTQW9NU0F0SUdaeWFXTjBhVzl1S1NBcUtpQW9aV3hoY0hObFpDQXZJREV3TUNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tITndjbWx1WnlBbUppQjBieUFoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCa2FYTjBZVzVqWlZSdlZHRnlaMlYwSUQwZ2RHOGdMU0IwYUdsekxtTjFjbkpsYm5RN1hHNGdJQ0FnSUNCdVpYZFdaV3h2WTJsMGVTQXJQU0JrYVhOMFlXNWpaVlJ2VkdGeVoyVjBJQ29nYzNCbFpXUlFaWEpHY21GdFpTaHpjSEpwYm1jc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFRndjR3g1SUhabGJHOWphWFI1WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwSUNzOUlITndaV1ZrVUdWeVJuSmhiV1VvYm1WM1ZtVnNiMk5wZEhrc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUhSb2FYTXVjSEp2Y0hNdWRtVnNiMk5wZEhrZ1BTQnVaWGRXWld4dlkybDBlVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1OMWNuSmxiblE3WEc0Z0lIMWNibHh1SUNCcGMwRmpkR2x2YmtOdmJYQnNaWFJsS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUFvSVhSb2FYTXVkbVZzYjJOcGRIa2dmSHdnVFdGMGFDNWhZbk1vZEdocGN5NTJaV3h2WTJsMGVTa2dQRDBnZEdocGN5NXdjbTl3Y3k1aGRYUnZVM1J2Y0ZOd1pXVmtLVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvY0hKdmNITXBJRDArSUc1bGR5QlFhSGx6YVdOektIQnliM0J6S1RzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGh5c2ljcy5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQYXJhbGxlbCA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQYXJhbGxlbCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGFyYWxsZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhcmFsbGVsKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLnByb3BzLmFjdGlvbnM7XG5cbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSBhY3Rpb25zLmxlbmd0aDtcblxuICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICBhY3Rpb24uc2V0UHJvcHMoe1xuICAgICAgICBvblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIHJldHVybiBhY3Rpb24uc3RvcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5hZGRBY3Rpb24gPSBmdW5jdGlvbiBhZGRBY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLnByb3BzLmFjdGlvbnM7XG5cblxuICAgIGlmIChhY3Rpb25zLmluZGV4T2YoYWN0aW9uKSA9PT0gLTEpIHtcbiAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMDtcbiAgfTtcblxuICByZXR1cm4gUGFyYWxsZWw7XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucykge1xuICByZXR1cm4gbmV3IFBhcmFsbGVsKHsgYWN0aW9uczogYWN0aW9ucyB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQmhjbUZzYkdWc0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenM3T3pzN096czdPMGxCUlUwN096czdPenM3T3p0eFFrRkRTaXcyUWtGQlZUczdPMUZCUTBFc1ZVRkJXU3hMUVVGTExFdEJRVXdzUTBGQldpeFJRVVJCT3p0QlFVVlNMRk5CUVVzc1owSkJRVXdzUjBGQmQwSXNVVUZCVVN4TlFVRlNMRU5CUm1oQ096dEJRVWxTTEZsQlFWRXNUMEZCVWl4RFFVRm5RaXhWUVVGRExFMUJRVVFzUlVGQldUdEJRVU14UWl4aFFVRlBMRkZCUVZBc1EwRkJaMEk3UVVGRFpDeG5Ra0ZCVVR0cFFrRkJUU3hQUVVGTExHZENRVUZNTzFOQlFVNDdUMEZFVml4RlFVVkhMRXRCUmtnc1IwRkVNRUk3UzBGQldpeERRVUZvUWl4RFFVcFJPenM3UVVGRVRpeHhRa0ZaU2l3eVFrRkJVenRCUVVOUUxGTkJRVXNzUzBGQlRDeERRVUZYTEU5QlFWZ3NRMEZCYlVJc1QwRkJia0lzUTBGQk1rSXNWVUZCUXl4TlFVRkVPMkZCUVZrc1QwRkJUeXhKUVVGUU8wdEJRVm9zUTBGQk0wSXNRMEZFVHpzN08wRkJXa3dzY1VKQlowSktMQ3RDUVVGVkxGRkJRVkU3VVVGRFVpeFZRVUZaTEV0QlFVc3NTMEZCVEN4RFFVRmFMRkZCUkZFN096dEJRVWRvUWl4UlFVRkpMRkZCUVZFc1QwRkJVaXhEUVVGblFpeE5RVUZvUWl4TlFVRTBRaXhEUVVGRExFTkJRVVFzUlVGQlNUdEJRVU5zUXl4alFVRlJMRWxCUVZJc1EwRkJZU3hOUVVGaUxFVkJSR3RETzB0QlFYQkRPenM3UVVGdVFrVXNjVUpCZDBKS0xDdERRVUZ0UWp0QlFVTnFRaXhYUVVGUkxFdEJRVXNzWjBKQlFVd3NTMEZCTUVJc1EwRkJNVUlzUTBGRVV6czdPMU5CZUVKbU96czdhMEpCTmtKVExGVkJRVU1zVDBGQlJEdFRRVUZoTEVsQlFVa3NVVUZCU2l4RFFVRmhMRVZCUVVVc1owSkJRVVlzUlVGQllqdERRVUZpSWl3aVptbHNaU0k2SW5CaGNtRnNiR1ZzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaThuTzF4dVhHNWpiR0Z6Y3lCUVlYSmhiR3hsYkNCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lHOXVVM1JoY25Rb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCaFkzUnBiMjV6SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lIUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeUE5SUdGamRHbHZibk11YkdWdVozUm9PMXh1WEc0Z0lDQWdZV04wYVc5dWN5NW1iM0pGWVdOb0tDaGhZM1JwYjI0cElEMCtJSHRjYmlBZ0lDQWdJR0ZqZEdsdmJpNXpaWFJRY205d2N5aDdYRzRnSUNBZ0lDQWdJRzl1VTNSdmNEb2dLQ2tnUFQ0Z2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpMUzFjYmlBZ0lDQWdJSDBwTG5OMFlYSjBLQ2s3WEc0Z0lDQWdmU2s3WEc0Z0lIMWNibHh1SUNCdmJsTjBiM0FvS1NCN1hHNGdJQ0FnZEdocGN5NXdjbTl3Y3k1aFkzUnBiMjV6TG1admNrVmhZMmdvS0dGamRHbHZiaWtnUFQ0Z1lXTjBhVzl1TG5OMGIzQW9LU2s3WEc0Z0lIMWNibHh1SUNCaFpHUkJZM1JwYjI0b1lXTjBhVzl1S1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJoWTNScGIyNXpJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2FXWWdLR0ZqZEdsdmJuTXVhVzVrWlhoUFppaGhZM1JwYjI0cElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ1lXTjBhVzl1Y3k1d2RYTm9LR0ZqZEdsdmJpazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdhWE5CWTNScGIyNURiMjF3YkdWMFpTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z0tIUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeUE5UFQwZ01DazdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR0ZqZEdsdmJuTXBJRDArSUc1bGR5QlFZWEpoYkd4bGJDaDdJR0ZqZEdsdmJuTWdmU2s3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGFyYWxsZWwuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ2hhaW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ2hhaW4sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENoYWluKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYWluKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMucGxheU5leHQgPSBfdGhpcy5wbGF5TmV4dC5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBDaGFpbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pID0gMDtcbiAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLnBsYXlOZXh0ID0gZnVuY3Rpb24gcGxheU5leHQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGkgPSBfcHJvcHMuaTtcbiAgICB2YXIgb3JkZXIgPSBfcHJvcHMub3JkZXI7XG5cbiAgICBpZiAoaSA8IG9yZGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMucHJvcHMuaSsrO1xuICAgICAgdGhpcy5wbGF5Q3VycmVudCgpO1xuICAgIH1cbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUucGxheUN1cnJlbnQgPSBmdW5jdGlvbiBwbGF5Q3VycmVudCgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGkgPSBfcHJvcHMyLmk7XG4gICAgdmFyIG9yZGVyID0gX3Byb3BzMi5vcmRlcjtcblxuICAgIG9yZGVyW2ldLm9uQ29tcGxldGUgPSB0aGlzLnBsYXlOZXh0O1xuICAgIG9yZGVyW2ldLnN0YXJ0KCk7XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGkgPSBfcHJvcHMzLmk7XG4gICAgdmFyIG9yZGVyID0gX3Byb3BzMy5vcmRlcjtcblxuICAgIG9yZGVyW2ldLnN0b3AoKTtcbiAgfTtcblxuICByZXR1cm4gQ2hhaW47XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3JkZXIpIHtcbiAgcmV0dXJuIG5ldyBDaGFpbih7IG9yZGVyOiBvcmRlciB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTm9ZV2x1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096czdPenM3T3pzN08wbEJSVTA3T3p0QlFVTktMRmRCUkVrc1MwRkRTaXhEUVVGWkxFdEJRVm9zUlVGQmJVSTdNRUpCUkdZc1QwRkRaVHM3YVVSQlEycENMRzFDUVVGTkxFdEJRVTRzUjBGRWFVSTdPMEZCUldwQ0xGVkJRVXNzVVVGQlRDeEhRVUZuUWl4TlFVRkxMRkZCUVV3c1EwRkJZeXhKUVVGa0xFOUJRV2hDTEVOQlJtbENPenRIUVVGdVFqczdRVUZFU1N4clFrRk5TaXcyUWtGQlZUdEJRVU5TTEZOQlFVc3NTMEZCVEN4RFFVRlhMRU5CUVZnc1IwRkJaU3hEUVVGbUxFTkJSRkU3UVVGRlVpeFRRVUZMTEZkQlFVd3NSMEZHVVRzN08wRkJUazRzYTBKQlYwb3NLMEpCUVZjN2FVSkJRMWtzUzBGQlN5eExRVUZNTEVOQlJGbzdVVUZEUkN4aFFVUkRPMUZCUTBVc2NVSkJSRVk3TzBGQlJWUXNVVUZCU1N4SlFVRkpMRTFCUVUwc1RVRkJUaXhIUVVGbExFTkJRV1lzUlVGQmEwSTdRVUZEZUVJc1YwRkJTeXhMUVVGTUxFTkJRVmNzUTBGQldDeEhRVVIzUWp0QlFVVjRRaXhYUVVGTExGZEJRVXdzUjBGR2QwSTdTMEZCTVVJN096dEJRV0pGTEd0Q1FXMUNTaXh4UTBGQll6dHJRa0ZEVXl4TFFVRkxMRXRCUVV3c1EwRkVWRHRSUVVOS0xHTkJSRWs3VVVGRFJDeHpRa0ZFUXpzN1FVRkZXaXhWUVVGTkxFTkJRVTRzUlVGQlV5eFZRVUZVTEVkQlFYTkNMRXRCUVVzc1VVRkJUQ3hEUVVaV08wRkJSMW9zVlVGQlRTeERRVUZPTEVWQlFWTXNTMEZCVkN4SFFVaFpPenM3UVVGdVFsWXNhMEpCZVVKS0xESkNRVUZUTzJ0Q1FVTmpMRXRCUVVzc1MwRkJUQ3hEUVVSa08xRkJRME1zWTBGRVJEdFJRVU5KTEhOQ1FVUktPenRCUVVWUUxGVkJRVTBzUTBGQlRpeEZRVUZUTEVsQlFWUXNSMEZHVHpzN08xTkJla0pNT3pzN2EwSkJLMEpUTEZWQlFVTXNTMEZCUkR0VFFVRlhMRWxCUVVrc1MwRkJTaXhEUVVGVkxFVkJRVVVzV1VGQlJpeEZRVUZXTzBOQlFWZ2lMQ0ptYVd4bElqb2lZMmhoYVc0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNWNibU5zWVhOeklFTm9ZV2x1SUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNCemRYQmxjaWh3Y205d2N5azdYRzRnSUNBZ2RHaHBjeTV3YkdGNVRtVjRkQ0E5SUhSb2FYTXVjR3hoZVU1bGVIUXVZbWx1WkNoMGFHbHpLVHRjYmlBZ2ZWeHVYRzRnSUc5dVUzUmhjblFvS1NCN1hHNGdJQ0FnZEdocGN5NXdjbTl3Y3k1cElEMGdNRHRjYmlBZ0lDQjBhR2x6TG5Cc1lYbERkWEp5Wlc1MEtDazdYRzRnSUgxY2JseHVJQ0J3YkdGNVRtVjRkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR2tzSUc5eVpHVnlJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdsbUlDaHBJRHdnYjNKa1pYSXViR1Z1WjNSb0lDMGdNU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXdjbTl3Y3k1cEt5czdYRzRnSUNBZ0lDQjBhR2x6TG5Cc1lYbERkWEp5Wlc1MEtDazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdjR3hoZVVOMWNuSmxiblFvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJwTENCdmNtUmxjaUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCdmNtUmxjbHRwWFM1dmJrTnZiWEJzWlhSbElEMGdkR2hwY3k1d2JHRjVUbVY0ZER0Y2JpQWdJQ0J2Y21SbGNsdHBYUzV6ZEdGeWRDZ3BPMXh1SUNCOVhHNWNiaUFnYjI1VGRHOXdLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dhU3dnYjNKa1pYSWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnYjNKa1pYSmJhVjB1YzNSdmNDZ3BPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2h2Y21SbGNpa2dQVDRnYm1WM0lFTm9ZV2x1S0hzZ2IzSmtaWElnZlNrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2NoYWluLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gIHJldHVybiAoMCwgX3R3ZWVuMi5kZWZhdWx0KSh7IGR1cmF0aW9uOiBkdXJhdGlvbiB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyUmxiR0Y1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096czdPMnRDUVVWbExGVkJRVU1zVVVGQlJEdFRRVUZqTEhGQ1FVRk5MRVZCUVVVc2EwSkJRVVlzUlVGQlRqdERRVUZrSWl3aVptbHNaU0k2SW1SbGJHRjVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IwZDJWbGJpQm1jbTl0SUNjdUwzUjNaV1Z1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHUjFjbUYwYVc5dUtTQTlQaUIwZDJWbGJpaDdJR1IxY21GMGFXOXVJSDBwTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZGVsYXkuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF90d2VlbiA9IHJlcXVpcmUoJy4vdHdlZW4nKTtcblxudmFyIF90d2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2Vlbik7XG5cbnZhciBfZWFzaW5nID0gcmVxdWlyZSgnLi4vZWFzaW5nJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENyb3NzRmFkZSA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDcm9zc0ZhZGUsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENyb3NzRmFkZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ3Jvc3NGYWRlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ3Jvc3NGYWRlLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb247XG4gICAgdmFyIGVhc2UgPSBfcHJvcHMuZWFzZTtcblxuXG4gICAgdGhpcy50cmFuc2ZlclR3ZWVuID0gKDAsIF90d2VlbjIuZGVmYXVsdCkoe1xuICAgICAgdG86IDEsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBlYXNlOiBlYXNlXG4gICAgfSkuc3RhcnQoKTtcbiAgfTtcblxuICBDcm9zc0ZhZGUucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmcm9tID0gX3Byb3BzMi5mcm9tO1xuICAgIHZhciB0byA9IF9wcm9wczIudG87XG5cbiAgICB2YXIgYmFsYW5jZSA9IHRoaXMudHJhbnNmZXJUd2Vlbi5nZXQoKTtcbiAgICB2YXIgbGF0ZXN0RnJvbVZhbHVlID0gZnJvbS5nZXQoKTtcbiAgICB2YXIgbGF0ZXN0VG9WYWx1ZSA9IHRvLmdldCgpO1xuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGxhdGVzdEZyb21WYWx1ZSwgbGF0ZXN0VG9WYWx1ZSwgYmFsYW5jZSk7XG4gIH07XG5cbiAgcmV0dXJuIENyb3NzRmFkZTtcbn0oXzIuZGVmYXVsdCk7XG5cbkNyb3NzRmFkZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGVhc2U6IF9lYXNpbmcubGluZWFyXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDcm9zc0ZhZGUocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOeWIzTnpMV1poWkdVdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdRVUZEUVRzN1FVRkRRVHM3T3pzN096czdPenRKUVVWTk96czdPenM3T3pzN2MwSkJTMG9zTmtKQlFWVTdhVUpCUTIxQ0xFdEJRVXNzUzBGQlRDeERRVVJ1UWp0UlFVTkJMREpDUVVSQk8xRkJRMVVzYlVKQlJGWTdPenRCUVVkU0xGTkJRVXNzWVVGQlRDeEhRVUZ4UWl4eFFrRkJUVHRCUVVONlFpeFZRVUZKTEVOQlFVbzdRVUZEUVN4M1FrRkdlVUk3UVVGSGVrSXNaMEpCU0hsQ08wdEJRVTRzUlVGSmJFSXNTMEZLYTBJc1JVRkJja0lzUTBGSVVUczdPMEZCVEU0c2MwSkJaVW9zSzBKQlFWYzdhMEpCUTFrc1MwRkJTeXhMUVVGTUxFTkJSRm83VVVGRFJDeHZRa0ZFUXp0UlFVTkxMR2RDUVVSTU96dEJRVVZVTEZGQlFVMHNWVUZCVlN4TFFVRkxMR0ZCUVV3c1EwRkJiVUlzUjBGQmJrSXNSVUZCVml4RFFVWkhPMEZCUjFRc1VVRkJUU3hyUWtGQmEwSXNTMEZCU3l4SFFVRk1MRVZCUVd4Q0xFTkJTRWM3UVVGSlZDeFJRVUZOTEdkQ1FVRm5RaXhIUVVGSExFZEJRVWdzUlVGQmFFSXNRMEZLUnp0QlFVdFVMRmRCUVU4c1owTkJRWEZDTEdWQlFYSkNMRVZCUVhORExHRkJRWFJETEVWQlFYRkVMRTlCUVhKRUxFTkJRVkFzUTBGTVV6czdPMU5CWmxBN096dFZRVU5ITEdWQlFXVTdRVUZEY0VJc2MwSkJSRzlDT3pzN2EwSkJkVUpVTEZWQlFVTXNTMEZCUkR0VFFVRlhMRWxCUVVrc1UwRkJTaXhEUVVGakxFdEJRV1E3UTBGQldDSXNJbVpwYkdVaU9pSmpjbTl6Y3kxbVlXUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1YVcxd2IzSjBJSFIzWldWdUlHWnliMjBnSnk0dmRIZGxaVzRuTzF4dWFXMXdiM0owSUhzZ2JHbHVaV0Z5SUgwZ1puSnZiU0FuTGk0dlpXRnphVzVuSnp0Y2JtbHRjRzl5ZENCN0lHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dVhHNWpiR0Z6Y3lCRGNtOXpjMFpoWkdVZ1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQnpkR0YwYVdNZ1pHVm1ZWFZzZEZCeWIzQnpJRDBnZTF4dUlDQWdJR1ZoYzJVNklHeHBibVZoY2x4dUlDQjlYRzVjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdSMWNtRjBhVzl1TENCbFlYTmxJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2RHaHBjeTUwY21GdWMyWmxjbFIzWldWdUlEMGdkSGRsWlc0b2UxeHVJQ0FnSUNBZ2RHODZJREVzWEc0Z0lDQWdJQ0JrZFhKaGRHbHZiaXhjYmlBZ0lDQWdJR1ZoYzJWY2JpQWdJQ0I5S1M1emRHRnlkQ2dwTzF4dUlDQjlYRzVjYmlBZ2IyNVZjR1JoZEdVb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCbWNtOXRMQ0IwYnlCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQmpiMjV6ZENCaVlXeGhibU5sSUQwZ2RHaHBjeTUwY21GdWMyWmxjbFIzWldWdUxtZGxkQ2dwTzF4dUlDQWdJR052Ym5OMElHeGhkR1Z6ZEVaeWIyMVdZV3gxWlNBOUlHWnliMjB1WjJWMEtDazdYRzRnSUNBZ1kyOXVjM1FnYkdGMFpYTjBWRzlXWVd4MVpTQTlJSFJ2TG1kbGRDZ3BPMXh1SUNBZ0lISmxkSFZ5YmlCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aHNZWFJsYzNSR2NtOXRWbUZzZFdVc0lHeGhkR1Z6ZEZSdlZtRnNkV1VzSUdKaGJHRnVZMlVwTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNod2NtOXdjeWtnUFQ0Z2JtVjNJRU55YjNOelJtRmtaU2h3Y205d2N5azdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9jcm9zcy1mYWRlLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfb25OZXh0RnJhbWUgPSByZXF1aXJlKCcuL29uLW5leHQtZnJhbWUnKTtcblxudmFyIF9vbk5leHRGcmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vbk5leHRGcmFtZSk7XG5cbnZhciBfY3JlYXRlUmVuZGVyU3RlcCA9IHJlcXVpcmUoJy4vY3JlYXRlLXJlbmRlci1zdGVwJyk7XG5cbnZhciBfY3JlYXRlUmVuZGVyU3RlcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSZW5kZXJTdGVwKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuXG4vKipcbiAqIE1heGltdW0gcGVybWl0dGVkIG1zIHNpbmNlIGxhc3QgZnJhbWVcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBNQVhfRUxBUFNFRCA9IDIwO1xuXG4vKipcbiAqIEN1cnJlbnQgZnJhbWVzdGFtcFxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIGN1cnJlbnRGcmFtZXN0YW1wID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcblxudmFyIGVsYXBzZWQgPSAwO1xuXG4vKipcbiAqIEZhY3RvciB0byBtdWx0aXBseSBgZWxhcHNlZGAgYnkgLSBcbiAqIDAuNSB3b3VsZCBiZSBzbG93IG1vdGlvbiwgMiB3b3VsZCBiZSBmYXN0XG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgZGlsYXRpb24gPSAxO1xuXG5mdW5jdGlvbiBzdGFydFJlbmRlckxvb3AoKSB7XG4gIGlmICghd2lsbFJlbmRlck5leHRGcmFtZSkge1xuICAgIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSB0cnVlO1xuICAgICgwLCBfb25OZXh0RnJhbWUyLmRlZmF1bHQpKHByb2Nlc3NGcmFtZSk7XG4gIH1cbn1cblxudmFyIGZyYW1lU3RhcnQgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVVcGRhdGUgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVSZW5kZXIgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVFbmQgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NGcmFtZShmcmFtZXN0YW1wKSB7XG4gIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcbiAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50RnJhbWVzdGFtcCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICBjdXJyZW50RnJhbWVzdGFtcCA9IGZyYW1lc3RhbXA7XG5cbiAgZnJhbWVTdGFydC5wcm9jZXNzKCk7XG4gIGZyYW1lVXBkYXRlLnByb2Nlc3MoKTtcbiAgZnJhbWVSZW5kZXIucHJvY2VzcygpO1xuICBmcmFtZUVuZC5wcm9jZXNzKCk7XG59XG5cbnZhciBvbkZyYW1lU3RhcnQgPSBleHBvcnRzLm9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuc2NoZWR1bGU7XG52YXIgb25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLnNjaGVkdWxlO1xudmFyIG9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5zY2hlZHVsZTtcbnZhciBvbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZnJhbWVFbmQuc2NoZWR1bGU7XG52YXIgY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lVXBkYXRlID0gZnJhbWVVcGRhdGUuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGZyYW1lRW5kLmNhbmNlbDtcblxudmFyIHRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZWxhcHNlZDtcbn07XG52YXIgY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjdXJyZW50RnJhbWVzdGFtcDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZGUVN4SlFVRkpMSE5DUVVGelFpeExRVUYwUWpzN096czdPMEZCVFVvc1NVRkJUU3hqUVVGakxFVkJRV1E3T3pzN096dEJRVTFPTEVsQlFVa3NiMEpCUVc5Q0xIbENRVUZ3UWpzN1FVRkZTaXhKUVVGSkxGVkJRVlVzUTBGQlZqczdPenM3T3p0QlFVOUtMRWxCUVVrc1YwRkJWeXhEUVVGWU96dEJRVVZLTEZOQlFWTXNaVUZCVkN4SFFVRXlRanRCUVVONlFpeE5RVUZKTEVOQlFVTXNiVUpCUVVRc1JVRkJjMEk3UVVGRGVFSXNNRUpCUVhOQ0xFbEJRWFJDTEVOQlJIZENPMEZCUlhoQ0xDdENRVUZaTEZsQlFWb3NSVUZHZDBJN1IwRkJNVUk3UTBGRVJqczdRVUZQUVN4SlFVRk5MR0ZCUVdFc1owTkJRV2xDTEdWQlFXcENMRU5CUVdJN1FVRkRUaXhKUVVGTkxHTkJRV01zWjBOQlFXbENMR1ZCUVdwQ0xFTkJRV1E3UVVGRFRpeEpRVUZOTEdOQlFXTXNaME5CUVdsQ0xHVkJRV3BDTEVOQlFXUTdRVUZEVGl4SlFVRk5MRmRCUVZjc1owTkJRV2xDTEdWQlFXcENMRU5CUVZnN08wRkJSVTRzVTBGQlV5eFpRVUZVTEVOQlFYTkNMRlZCUVhSQ0xFVkJRV3RETzBGQlEyaERMSGRDUVVGelFpeExRVUYwUWl4RFFVUm5RenRCUVVWb1F5eFpRVUZWTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVVzc1IwRkJUQ3hEUVVGVExHRkJRV0VzYVVKQlFXSXNSVUZCWjBNc1YwRkJla01zUTBGQlZDeEZRVUZuUlN4RFFVRm9SU3hKUVVGeFJTeFJRVUZ5UlN4RFFVWnpRanRCUVVkb1F5eHpRa0ZCYjBJc1ZVRkJjRUlzUTBGSVowTTdPMEZCUzJoRExHRkJRVmNzVDBGQldDeEhRVXhuUXp0QlFVMW9ReXhqUVVGWkxFOUJRVm9zUjBGT1owTTdRVUZQYUVNc1kwRkJXU3hQUVVGYUxFZEJVR2RETzBGQlVXaERMRmRCUVZNc1QwRkJWQ3hIUVZKblF6dERRVUZzUXpzN1FVRlhUeXhKUVVGTkxITkRRVUZsTEZkQlFWY3NVVUZCV0R0QlFVTnlRaXhKUVVGTkxIZERRVUZuUWl4WlFVRlpMRkZCUVZvN1FVRkRkRUlzU1VGQlRTeDNRMEZCWjBJc1dVRkJXU3hSUVVGYU8wRkJRM1JDTEVsQlFVMHNhME5CUVdFc1UwRkJVeXhSUVVGVU8wRkJRMjVDTEVsQlFVMHNhMFJCUVhGQ0xGZEJRVmNzVFVGQldEdEJRVU16UWl4SlFVRk5MRzlFUVVGelFpeFpRVUZaTEUxQlFWbzdRVUZETlVJc1NVRkJUU3h2UkVGQmMwSXNXVUZCV1N4TlFVRmFPMEZCUXpWQ0xFbEJRVTBzT0VOQlFXMUNMRk5CUVZNc1RVRkJWRHM3UVVGRmVrSXNTVUZCVFN4clJFRkJjVUk3VTBGQlRUdERRVUZPTzBGQlF6TkNMRWxCUVUwc2QwUkJRWGRDTzFOQlFVMDdRMEZCVGlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnYjI1T1pYaDBSbkpoYldVZ1puSnZiU0FuTGk5dmJpMXVaWGgwTFdaeVlXMWxKenRjYm1sdGNHOXlkQ0JqY21WaGRHVlNaVzVrWlhKVGRHVndJR1p5YjIwZ0p5NHZZM0psWVhSbExYSmxibVJsY2kxemRHVndKenRjYm1sdGNHOXlkQ0I3SUdOMWNuSmxiblJVYVcxbElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dWJHVjBJSGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VnUFNCbVlXeHpaVHRjYmx4dUx5b3FYRzRnS2lCTllYaHBiWFZ0SUhCbGNtMXBkSFJsWkNCdGN5QnphVzVqWlNCc1lYTjBJR1p5WVcxbFhHNGdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ292WEc1amIyNXpkQ0JOUVZoZlJVeEJVRk5GUkNBOUlESXdPMXh1WEc0dktpcGNiaUFxSUVOMWNuSmxiblFnWm5KaGJXVnpkR0Z0Y0Z4dUlDb2dRSFI1Y0dVZ2UwNTFiV0psY24xY2JpQXFMMXh1YkdWMElHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd0lEMGdZM1Z5Y21WdWRGUnBiV1VvS1R0Y2JseHViR1YwSUdWc1lYQnpaV1FnUFNBd08xeHVYRzR2S2lwY2JpQXFJRVpoWTNSdmNpQjBieUJ0ZFd4MGFYQnNlU0JnWld4aGNITmxaR0FnWW5rZ0xTQmNiaUFxSURBdU5TQjNiM1ZzWkNCaVpTQnpiRzkzSUcxdmRHbHZiaXdnTWlCM2IzVnNaQ0JpWlNCbVlYTjBYRzRnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNvdlhHNXNaWFFnWkdsc1lYUnBiMjRnUFNBeE8xeHVYRzVtZFc1amRHbHZiaUJ6ZEdGeWRGSmxibVJsY2t4dmIzQW9LU0I3WEc0Z0lHbG1JQ2doZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNrZ2UxeHVJQ0FnSUhkcGJHeFNaVzVrWlhKT1pYaDBSbkpoYldVZ1BTQjBjblZsTzF4dUlDQWdJRzl1VG1WNGRFWnlZVzFsS0hCeWIyTmxjM05HY21GdFpTazdYRzRnSUgxY2JuMWNibHh1WTI5dWMzUWdabkpoYldWVGRHRnlkQ0E5SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLVHRjYm1OdmJuTjBJR1p5WVcxbFZYQmtZWFJsSUQwZ1kzSmxZWFJsVW1WdVpHVnlVM1JsY0NoemRHRnlkRkpsYm1SbGNreHZiM0FwTzF4dVkyOXVjM1FnWm5KaGJXVlNaVzVrWlhJZ1BTQmpjbVZoZEdWU1pXNWtaWEpUZEdWd0tITjBZWEowVW1WdVpHVnlURzl2Y0NrN1hHNWpiMjV6ZENCbWNtRnRaVVZ1WkNBOUlHTnlaV0YwWlZKbGJtUmxjbE4wWlhBb2MzUmhjblJTWlc1a1pYSk1iMjl3S1R0Y2JseHVablZ1WTNScGIyNGdjSEp2WTJWemMwWnlZVzFsS0daeVlXMWxjM1JoYlhBcElIdGNiaUFnZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNBOUlHWmhiSE5sTzF4dUlDQmxiR0Z3YzJWa0lEMGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9abkpoYldWemRHRnRjQ0F0SUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TENCTlFWaGZSVXhCVUZORlJDa3NJREVwSUNvZ1pHbHNZWFJwYjI0N1hHNGdJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdJRDBnWm5KaGJXVnpkR0Z0Y0R0Y2JseHVJQ0JtY21GdFpWTjBZWEowTG5CeWIyTmxjM01vS1R0Y2JpQWdabkpoYldWVmNHUmhkR1V1Y0hKdlkyVnpjeWdwTzF4dUlDQm1jbUZ0WlZKbGJtUmxjaTV3Y205alpYTnpLQ2s3WEc0Z0lHWnlZVzFsUlc1a0xuQnliMk5sYzNNb0tUdGNibjFjYmx4dVpYaHdiM0owSUdOdmJuTjBJRzl1Um5KaGJXVlRkR0Z5ZENBOUlHWnlZVzFsVTNSaGNuUXVjMk5vWldSMWJHVTdYRzVsZUhCdmNuUWdZMjl1YzNRZ2IyNUdjbUZ0WlZWd1pHRjBaU0E5SUdaeVlXMWxWWEJrWVhSbExuTmphR1ZrZFd4bE8xeHVaWGh3YjNKMElHTnZibk4wSUc5dVJuSmhiV1ZTWlc1a1pYSWdQU0JtY21GdFpWSmxibVJsY2k1elkyaGxaSFZzWlR0Y2JtVjRjRzl5ZENCamIyNXpkQ0J2YmtaeVlXMWxSVzVrSUQwZ1puSmhiV1ZGYm1RdWMyTm9aV1IxYkdVN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWTjBZWEowSUQwZ1puSmhiV1ZUZEdGeWRDNWpZVzVqWld3N1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlNBOUlHWnlZVzFsVlhCa1lYUmxMbU5oYm1ObGJEdGNibVY0Y0c5eWRDQmpiMjV6ZENCallXNWpaV3hQYmtaeVlXMWxVbVZ1WkdWeUlEMGdabkpoYldWU1pXNWtaWEl1WTJGdVkyVnNPMXh1Wlhod2IzSjBJR052Ym5OMElHTmhibU5sYkU5dVJuSmhiV1ZGYm1RZ1BTQm1jbUZ0WlVWdVpDNWpZVzVqWld3N1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ1BTQW9LU0E5UGlCbGJHRndjMlZrTzF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUkdjbUZ0WlZScGJXVnpkR0Z0Y0NBOUlDZ3BJRDArSUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCA9IDEuNTI1O1xuXG52YXIgY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZVJldmVyc2VkRWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2luZygxIC0gcCk7XG4gIH07XG59O1xudmFyIGNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVNaXJyb3JlZEVhc2luZyA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPD0gMC41ID8gZWFzaW5nKDIgKiBwKSAvIDIgOiAoMiAtIGVhc2luZygyICogKDEgLSBwKSkpIC8gMjtcbiAgfTtcbn07O1xuXG52YXIgbGluZWFyID0gZXhwb3J0cy5saW5lYXIgPSBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcDtcbn07XG5cbnZhciBjcmVhdGVFYXNlSW4gPSBleHBvcnRzLmNyZWF0ZUVhc2VJbiA9IGZ1bmN0aW9uIChwb3dlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gTWF0aC5wb3cocCwgcG93ZXIpO1xuICB9O1xufTtcbnZhciBlYXNlSW4gPSBleHBvcnRzLmVhc2VJbiA9IGNyZWF0ZUVhc2VJbigyKTtcbnZhciBlYXNlT3V0ID0gZXhwb3J0cy5lYXNlT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoZWFzZUluKTtcbnZhciBlYXNlSW5PdXQgPSBleHBvcnRzLmVhc2VJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGVhc2VJbik7XG5cbnZhciBjaXJjSW4gPSBleHBvcnRzLmNpcmNJbiA9IGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHApKTtcbn07XG52YXIgY2lyY091dCA9IGV4cG9ydHMuY2lyY091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGNpcmNJbik7XG52YXIgY2lyY0luT3V0ID0gZXhwb3J0cy5jaXJjSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhjaXJjT3V0KTtcblxudmFyIGNyZWF0ZUJhY2tJbiA9IGV4cG9ydHMuY3JlYXRlQmFja0luID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwICogcCAqICgocG93ZXIgKyAxKSAqIHAgLSBwb3dlcik7XG4gIH07XG59O1xudmFyIGJhY2tJbiA9IGV4cG9ydHMuYmFja0luID0gY3JlYXRlQmFja0luKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcbnZhciBiYWNrT3V0ID0gZXhwb3J0cy5iYWNrT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoYmFja0luKTtcbnZhciBiYWNrSW5PdXQgPSBleHBvcnRzLmJhY2tJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGJhY2tJbik7XG5cbnZhciBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHZhciBiYWNrRWFzaW5nID0gY3JlYXRlQmFja0luKHBvd2VyKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIChwICo9IDIpIDwgMSA/IDAuNSAqIGJhY2tFYXNpbmcocCkgOiAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwIC0gMSkpKTtcbiAgfTtcbn07XG52YXIgYW50aWNpcGF0ZSA9IGV4cG9ydHMuYW50aWNpcGF0ZSA9IGNyZWF0ZUFudGljaXBhdGVFYXNpbmcoREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlsWVhOcGJtY3ZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1NVRkJUU3cyUWtGQk5rSXNTMEZCTjBJN08wRkJSVU1zU1VGQlRTeHpSRUZCZFVJc1ZVRkJReXhOUVVGRU8xTkJRVmtzVlVGQlF5eERRVUZFTzFkQlFVOHNTVUZCU1N4UFFVRlBMRWxCUVVrc1EwRkJTaXhEUVVGWU8wZEJRVkE3UTBGQldqdEJRVU0zUWl4SlFVRk5MSE5FUVVGMVFpeFZRVUZETEUxQlFVUTdVMEZCV1N4VlFVRkRMRU5CUVVRN1YwRkJUeXhEUVVGRExFbEJRVXNzUjBGQlRDeEhRVUZaTEU5QlFVOHNTVUZCU1N4RFFVRktMRU5CUVZBc1IwRkJaMElzUTBGQmFFSXNSMEZCYjBJc1EwRkJReXhKUVVGSkxFOUJRVThzUzBGQlN5eEpRVUZKTEVOQlFVb3NRMEZCVEN4RFFVRllMRU5CUVVRc1IwRkJORUlzUTBGQk5VSTdSMEZCZUVNN1EwRkJXaXhEUVVGclJqczdRVUZGTDBjc1NVRkJUU3d3UWtGQlV5eFZRVUZETEVOQlFVUTdVMEZCVHp0RFFVRlFPenRCUVVWbUxFbEJRVTBzYzBOQlFXVXNWVUZCUXl4TFFVRkVPMU5CUVZjc1ZVRkJReXhEUVVGRU8yOUNRVUZQTEVkQlFVczdSMEZCV2p0RFFVRllPMEZCUTNKQ0xFbEJRVTBzTUVKQlFWTXNZVUZCWVN4RFFVRmlMRU5CUVZRN1FVRkRUaXhKUVVGTkxEUkNRVUZWTEhGQ1FVRnhRaXhOUVVGeVFpeERRVUZXTzBGQlEwNHNTVUZCVFN4blEwRkJXU3h4UWtGQmNVSXNUVUZCY2tJc1EwRkJXanM3UVVGRlRpeEpRVUZOTERCQ1FVRlRMRlZCUVVNc1EwRkJSRHRUUVVGUExFbEJRVWtzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCU3l4SlFVRk1MRU5CUVZVc1EwRkJWaXhEUVVGVUxFTkJRVW83UTBGQlVEdEJRVU5tTEVsQlFVMHNORUpCUVZVc2NVSkJRWEZDTEUxQlFYSkNMRU5CUVZZN1FVRkRUaXhKUVVGTkxHZERRVUZaTEhGQ1FVRnhRaXhQUVVGeVFpeERRVUZhT3p0QlFVVk9MRWxCUVUwc2MwTkJRV1VzVlVGQlF5eExRVUZFTzFOQlFWY3NWVUZCUXl4RFFVRkVPMWRCUVU4c1EwRkJReXhIUVVGSkxFTkJRVW9zU1VGQlZTeERRVUZETEZGQlFWRXNRMEZCVWl4RFFVRkVMRWRCUVdNc1EwRkJaQ3hIUVVGclFpeExRVUZzUWl4RFFVRllPMGRCUVZBN1EwRkJXRHRCUVVOeVFpeEpRVUZOTERCQ1FVRlRMR0ZCUVdFc01FSkJRV0lzUTBGQlZEdEJRVU5PTEVsQlFVMHNORUpCUVZVc2NVSkJRWEZDTEUxQlFYSkNMRU5CUVZZN1FVRkRUaXhKUVVGTkxHZERRVUZaTEhGQ1FVRnhRaXhOUVVGeVFpeERRVUZhT3p0QlFVVk9MRWxCUVUwc01FUkJRWGxDTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUXk5RExFMUJRVTBzWVVGQllTeGhRVUZoTEV0QlFXSXNRMEZCWWl4RFFVUjVRenRCUVVVdlF5eFRRVUZQTEZWQlFVTXNRMEZCUkR0WFFVRlBMRU5CUVVVc1MwRkJTeXhEUVVGTUxFTkJRVVFzUjBGQlZ5eERRVUZZTEVkQlFXZENMRTFCUVUwc1YwRkJWeXhEUVVGWUxFTkJRVTRzUjBGQmMwSXNUMEZCVHl4SlFVRkpMRXRCUVVzc1IwRkJUQ3hEUVVGVExFTkJRVlFzUlVGQldTeERRVUZETEVWQlFVUXNTVUZCVHl4SlFVRkpMRU5CUVVvc1EwRkJVQ3hEUVVGb1FpeERRVUZRTzBkQlFUbERMRU5CUm5kRE8wTkJRVmc3UVVGSkwwSXNTVUZCVFN4clEwRkJZU3gxUWtGQmRVSXNNRUpCUVhaQ0xFTkJRV0lpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWTI5dWMzUWdSRVZHUVZWTVZGOVBWa1ZTVTBoUFQxUmZVMVJTUlU1SFZFZ2dQU0F4TGpVeU5UdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlZKbGRtVnljMlZrUldGemFXNW5JRDBnS0dWaGMybHVaeWtnUFQ0Z0tIQXBJRDArSURFZ0xTQmxZWE5wYm1jb01TQXRJSEFwTzF4dVpYaHdiM0owSUdOdmJuTjBJR055WldGMFpVMXBjbkp2Y21Wa1JXRnphVzVuSUQwZ0tHVmhjMmx1WnlrZ1BUNGdLSEFwSUQwK0lDaHdJRHc5SURBdU5Ta2dQeUJsWVhOcGJtY29NaUFxSUhBcElDOGdNaUE2SUNneUlDMGdaV0Z6YVc1bktESWdLaUFvTVNBdElIQXBLU2tnTHlBeU96dGNibHh1Wlhod2IzSjBJR052Ym5OMElHeHBibVZoY2lBOUlDaHdLU0E5UGlCd08xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzSmxZWFJsUldGelpVbHVJRDBnS0hCdmQyVnlLU0E5UGlBb2NDa2dQVDRnY0NBcUtpQndiM2RsY2p0Y2JtVjRjRzl5ZENCamIyNXpkQ0JsWVhObFNXNGdQU0JqY21WaGRHVkZZWE5sU1c0b01pazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1pXRnpaVTkxZENBOUlHTnlaV0YwWlZKbGRtVnljMlZrUldGemFXNW5LR1ZoYzJWSmJpazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1pXRnpaVWx1VDNWMElEMGdZM0psWVhSbFRXbHljbTl5WldSRllYTnBibWNvWldGelpVbHVLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR05wY21OSmJpQTlJQ2h3S1NBOVBpQXhJQzBnVFdGMGFDNXphVzRvVFdGMGFDNWhZMjl6S0hBcEtUdGNibVY0Y0c5eWRDQmpiMjV6ZENCamFYSmpUM1YwSUQwZ1kzSmxZWFJsVW1WMlpYSnpaV1JGWVhOcGJtY29ZMmx5WTBsdUtUdGNibVY0Y0c5eWRDQmpiMjV6ZENCamFYSmpTVzVQZFhRZ1BTQmpjbVZoZEdWTmFYSnliM0psWkVWaGMybHVaeWhqYVhKalQzVjBLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR055WldGMFpVSmhZMnRKYmlBOUlDaHdiM2RsY2lrZ1BUNGdLSEFwSUQwK0lDaHdJQ29nY0NrZ0tpQW9LSEJ2ZDJWeUlDc2dNU2tnS2lCd0lDMGdjRzkzWlhJcE8xeHVaWGh3YjNKMElHTnZibk4wSUdKaFkydEpiaUE5SUdOeVpXRjBaVUpoWTJ0SmJpaEVSVVpCVlV4VVgwOVdSVkpUU0U5UFZGOVRWRkpGVGtkVVNDazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1ltRmphMDkxZENBOUlHTnlaV0YwWlZKbGRtVnljMlZrUldGemFXNW5LR0poWTJ0SmJpazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1ltRmphMGx1VDNWMElEMGdZM0psWVhSbFRXbHljbTl5WldSRllYTnBibWNvWW1GamEwbHVLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR055WldGMFpVRnVkR2xqYVhCaGRHVkZZWE5wYm1jZ1BTQW9jRzkzWlhJcElEMCtJSHRjYmlBZ1kyOXVjM1FnWW1GamEwVmhjMmx1WnlBOUlHTnlaV0YwWlVKaFkydEpiaWh3YjNkbGNpazdYRzRnSUhKbGRIVnliaUFvY0NrZ1BUNGdLQ2h3SUNvOUlESXBJRHdnTVNrZ1B5QXdMalVnS2lCaVlXTnJSV0Z6YVc1bktIQXBJRG9nTUM0MUlDb2dLRElnTFNCTllYUm9MbkJ2ZHlneUxDQXRNVEFnS2lBb2NDQXRJREVwS1NrN1hHNTlYRzVsZUhCdmNuUWdZMjl1YzNRZ1lXNTBhV05wY0dGMFpTQTlJR055WldGMFpVRnVkR2xqYVhCaGRHVkZZWE5wYm1jb1JFVkdRVlZNVkY5UFZrVlNVMGhQVDFSZlUxUlNSVTVIVkVncE8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9lYXNpbmcvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBY3Rpb24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uKTtcblxuICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcywgcHJvcHMpO1xuICB9XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciB2YWx1ZSA9IF9wcm9wcy52YWx1ZTtcbiAgICB2YXIgb25TdGFydCA9IF9wcm9wcy5vblN0YXJ0O1xuICAgIHZhciBmcm9tID0gX3Byb3BzLmZyb207XG4gICAgdmFyIHZlbG9jaXR5ID0gX3Byb3BzLnZlbG9jaXR5O1xuXG5cbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnVwZGF0ZSk7XG5cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB7XG4gICAgICB0aGlzLm9uU3RhcnQoKTtcbiAgICB9XG5cbiAgICBpZiAob25TdGFydCkge1xuICAgICAgb25TdGFydCh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHZhciBvblN0b3AgPSB0aGlzLnByb3BzLm9uU3RvcDtcblxuXG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICgwLCBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVVcGRhdGUpKHRoaXMudXBkYXRlKTtcblxuICAgIGlmICh0aGlzLm9uU3RvcCkge1xuICAgICAgdGhpcy5vblN0b3AoKTtcbiAgICB9XG5cbiAgICBpZiAob25TdG9wKSB7XG4gICAgICBvblN0b3AodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCk7XG4gICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50O1xuXG4gICAgaWYgKHRoaXMub25VcGRhdGUpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMub25VcGRhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vblVwZGF0ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSh0aGlzLmN1cnJlbnQsIHRoaXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiB0aGlzLmlzQWN0aW9uQ29tcGxldGUoKSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbiBzZXRQcm9wcyhwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgcHJvcHMpO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXRWZWxvY2l0eSA9IGZ1bmN0aW9uIGdldFZlbG9jaXR5KCkge1xuICAgIHJldHVybiAoMCwgX2NhbGMuc3BlZWRQZXJTZWNvbmQpKHRoaXMucHJldiAtIHRoaXMuY3VycmVudCwgdGhpcy5sYXN0VXBkYXRlZCk7XG4gIH07XG5cbiAgcmV0dXJuIEFjdGlvbjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenRCUVVOQk96czdPMGxCUlUwN1FVRkRTaXhYUVVSSkxFMUJRMG9zUTBGQldTeExRVUZhTEVWQlFXMUNPekJDUVVSbUxGRkJRMlU3TzBGQlEycENMRk5CUVVzc1QwRkJUQ3hIUVVGbExFTkJRV1lzUTBGRWFVSTdRVUZGYWtJc1UwRkJTeXhOUVVGTUxFZEJRV01zUzBGQlN5eE5RVUZNTEVOQlFWa3NTVUZCV2l4RFFVRnBRaXhKUVVGcVFpeERRVUZrTEVOQlJtbENPenRCUVVscVFpeFRRVUZMTEV0QlFVd3NaMEpCUTBzc1MwRkJTeXhYUVVGTUxFTkJRV2xDTEZsQlFXcENMRVZCUTBFc1RVRkdUQ3hEUVVwcFFqdEhRVUZ1UWpzN1FVRkVTU3h0UWtGWFNpeDVRa0ZCVVR0cFFrRkRjVU1zUzBGQlN5eExRVUZNTEVOQlJISkRPMUZCUTBVc2NVSkJSRVk3VVVGRFV5eDVRa0ZFVkR0UlFVTnJRaXh0UWtGRWJFSTdVVUZEZDBJc01rSkJSSGhDT3pzN1FVRkhUaXhUUVVGTExGRkJRVXdzUjBGQlowSXNTVUZCYUVJc1EwRklUVHRCUVVsT0xHdERRVUZqTEV0QlFVc3NUVUZCVEN4RFFVRmtMRU5CU2swN08wRkJUVTRzVVVGQlNTeExRVUZMTEU5QlFVd3NSVUZCWXp0QlFVTm9RaXhYUVVGTExFOUJRVXdzUjBGRVowSTdTMEZCYkVJN08wRkJTVUVzVVVGQlNTeFBRVUZLTEVWQlFXRTdRVUZEV0N4alFVRlJMRWxCUVZJc1JVRkVWenRMUVVGaU96dEJRVWxCTEZkQlFVOHNTVUZCVUN4RFFXUk5PenM3UVVGWVNpeHRRa0UwUWtvc2RVSkJRVTg3VVVGRFJ5eFRRVUZYTEV0QlFVc3NTMEZCVEN4RFFVRllMRTlCUkVnN096dEJRVWRNTEZOQlFVc3NVVUZCVEN4SFFVRm5RaXhMUVVGb1FpeERRVWhMTzBGQlNVd3NkME5CUVc5Q0xFdEJRVXNzVFVGQlRDeERRVUZ3UWl4RFFVcExPenRCUVUxTUxGRkJRVWtzUzBGQlN5eE5RVUZNTEVWQlFXRTdRVUZEWml4WFFVRkxMRTFCUVV3c1IwRkVaVHRMUVVGcVFqczdRVUZKUVN4UlFVRkpMRTFCUVVvc1JVRkJXVHRCUVVOV0xHRkJRVThzU1VGQlVDeEZRVVJWTzB0QlFWbzdPMEZCU1VFc1YwRkJUeXhKUVVGUUxFTkJaRXM3T3p0QlFUVkNTQ3h0UWtFMlEwb3NLMEpCUVZjN1FVRkRWQ3hSUVVGSkxFdEJRVXNzVlVGQlRDeEZRVUZwUWp0QlFVTnVRaXhYUVVGTExGVkJRVXdzUjBGRWJVSTdTMEZCY2tJN08wRkJTVUVzVVVGQlNTeExRVUZMTEV0QlFVd3NRMEZCVnl4VlFVRllMRVZCUVhWQ08wRkJRM3BDTEZkQlFVc3NTMEZCVEN4RFFVRlhMRlZCUVZnc1EwRkJjMElzU1VGQmRFSXNSVUZFZVVJN1MwRkJNMEk3TzBGQlNVRXNVMEZCU3l4SlFVRk1MRWRCVkZNN08wRkJWMVFzVjBGQlR5eEpRVUZRTEVOQldGTTdPenRCUVRkRFVDeHRRa0V5UkVvc01rSkJRVk03UVVGRFVDeFRRVUZMTEZkQlFVd3NSMEZCYlVJc2IwTkJRVzVDTEVOQlJFODdRVUZGVUN4VFFVRkxMRWxCUVV3c1IwRkJXU3hMUVVGTExFOUJRVXdzUTBGR1REczdRVUZKVUN4UlFVRkpMRXRCUVVzc1VVRkJUQ3hGUVVGbE8wRkJRMnBDTEZkQlFVc3NUMEZCVEN4SFFVRmxMRXRCUVVzc1VVRkJUQ3hGUVVGbUxFTkJSR2xDTzB0QlFXNUNPenRCUVVsQkxGRkJRVWtzUzBGQlN5eExRVUZNTEVOQlFWY3NVVUZCV0N4RlFVRnhRanRCUVVOMlFpeFhRVUZMTEV0QlFVd3NRMEZCVnl4UlFVRllMRU5CUVc5Q0xFdEJRVXNzVDBGQlRDeEZRVUZqTEVsQlFXeERMRVZCUkhWQ08wdEJRWHBDT3p0QlFVbEJMRkZCUVVrc1MwRkJTeXhSUVVGTUxFVkJRV1U3UVVGRGFrSXNiME5CUVdNc1MwRkJTeXhOUVVGTUxFTkJRV1FzUTBGRWFVSTdTMEZCYmtJN08wRkJTVUVzVVVGQlNTeExRVUZMTEdkQ1FVRk1MRWxCUVhsQ0xFdEJRVXNzWjBKQlFVd3NSVUZCZWtJc1JVRkJhMFE3UVVGRGNFUXNWMEZCU3l4UlFVRk1MRWRCUkc5RU8wdEJRWFJFT3p0QlFVbEJMRmRCUVU4c1NVRkJVQ3hEUVhCQ1R6czdPMEZCTTBSTUxHMUNRV3RHU2l3MlFrRkJVeXhQUVVGUE8wRkJRMlFzVTBGQlN5eExRVUZNTEdkQ1FVTkxMRXRCUVVzc1MwRkJUQ3hGUVVOQkxFMUJSa3dzUTBGRVl6czdPMEZCYkVaYUxHMUNRWGxHU2l4eFFrRkJUVHRCUVVOS0xGZEJRVThzUzBGQlN5eFBRVUZNTEVOQlJFZzdPenRCUVhwR1JpeHRRa0UyUmtvc2NVTkJRV003UVVGRFdpeFhRVUZQTERCQ1FVRmxMRXRCUVVzc1NVRkJUQ3hIUVVGWkxFdEJRVXNzVDBGQlRDeEZRVUZqTEV0QlFVc3NWMEZCVEN4RFFVRm9SQ3hEUVVSWk96czdVMEUzUmxZN096dHJRa0ZyUjFNaUxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2IyNUdjbUZ0WlZWd1pHRjBaU3dnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlN3Z2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbElIMGdabkp2YlNBbkxpNHZabkpoYldWemVXNWpKenRjYm1sdGNHOXlkQ0I3SUhOd1pXVmtVR1Z5VTJWamIyNWtJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dVhHNWpiR0Z6Y3lCQlkzUnBiMjRnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lIUm9hWE11WTNWeWNtVnVkQ0E5SURBN1hHNGdJQ0FnZEdocGN5NTFjR1JoZEdVZ1BTQjBhR2x6TG5Wd1pHRjBaUzVpYVc1a0tIUm9hWE1wTzF4dVhHNGdJQ0FnZEdocGN5NXdjbTl3Y3lBOUlIdGNiaUFnSUNBZ0lDNHVMblJvYVhNdVkyOXVjM1J5ZFdOMGIzSXVaR1ZtWVhWc2RGQnliM0J6TEZ4dUlDQWdJQ0FnTGk0dWNISnZjSE5jYmlBZ0lDQjlPMXh1SUNCOVhHNWNiaUFnYzNSaGNuUW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QjJZV3gxWlN3Z2IyNVRkR0Z5ZEN3Z1puSnZiU3dnZG1Wc2IyTnBkSGtnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzVjYmlBZ0lDQjBhR2x6TG1selFXTjBhWFpsSUQwZ2RISjFaVHRjYmlBZ0lDQnZia1p5WVcxbFZYQmtZWFJsS0hSb2FYTXVkWEJrWVhSbEtUdGNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtOXVVM1JoY25RcElIdGNiaUFnSUNBZ0lIUm9hWE11YjI1VGRHRnlkQ2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNodmJsTjBZWEowS1NCN1hHNGdJQ0FnSUNCdmJsTjBZWEowS0hSb2FYTXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnYzNSdmNDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHOXVVM1J2Y0NCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmx4dUlDQWdJSFJvYVhNdWFYTkJZM1JwZG1VZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0JqWVc1alpXeFBia1p5WVcxbFZYQmtZWFJsS0hSb2FYTXVkWEJrWVhSbEtUdGNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtOXVVM1J2Y0NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV2YmxOMGIzQW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYjI1VGRHOXdLU0I3WEc0Z0lDQWdJQ0J2YmxOMGIzQW9kR2hwY3lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQmpiMjF3YkdWMFpTZ3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXZia052YlhCc1pYUmxLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtOXVRMjl0Y0d4bGRHVW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NXdjbTl3Y3k1dmJrTnZiWEJzWlhSbEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG5CeWIzQnpMbTl1UTI5dGNHeGxkR1VvZEdocGN5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RHaHBjeTV6ZEc5d0tDazdYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0IwYUdsekxteGhjM1JWY0dSaGRHVmtJRDBnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsS0NrN1hHNGdJQ0FnZEdocGN5NXdjbVYySUQwZ2RHaHBjeTVqZFhKeVpXNTBPMXh1WEc0Z0lDQWdhV1lnS0hSb2FYTXViMjVWY0dSaGRHVXBJSHRjYmlBZ0lDQWdJSFJvYVhNdVkzVnljbVZ1ZENBOUlIUm9hWE11YjI1VmNHUmhkR1VvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2RHaHBjeTV3Y205d2N5NXZibFZ3WkdGMFpTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1d2NtOXdjeTV2YmxWd1pHRjBaU2gwYUdsekxtTjFjbkpsYm5Rc0lIUm9hWE1wTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbWx6UVdOMGFYWmxLU0I3WEc0Z0lDQWdJQ0J2YmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11ZFhCa1lYUmxLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NXBjMEZqZEdsdmJrTnZiWEJzWlhSbElDWW1JSFJvYVhNdWFYTkJZM1JwYjI1RGIyMXdiR1YwWlNncEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG1OdmJYQnNaWFJsS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnpaWFJRY205d2N5aHdjbTl3Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVjSEp2Y0hNZ1BTQjdYRzRnSUNBZ0lDQXVMaTUwYUdsekxuQnliM0J6TEZ4dUlDQWdJQ0FnTGk0dWNISnZjSE5jYmlBZ0lDQjlPMXh1SUNCOVhHNWNiaUFnWjJWMEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbU4xY25KbGJuUTdYRzRnSUgxY2JseHVJQ0JuWlhSV1pXeHZZMmwwZVNncElIdGNiaUFnSUNCeVpYUjFjbTRnYzNCbFpXUlFaWEpUWldOdmJtUW9kR2hwY3k1d2NtVjJJQzBnZEdocGN5NWpkWEp5Wlc1MExDQjBhR2x6TG14aGMzUlZjR1JoZEdWa0tUdGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkJZM1JwYjI0N1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbnZhciBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbnZhciBIQVNfUEVSRk9STUFOQ0VfTk9XID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3c7XG5cbi8qXG4gIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xufTtcblxuLypcbiAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY2FtZWxUb0Rhc2ggPSBleHBvcnRzLmNhbWVsVG9EYXNoID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuLypcbiAgQ3JlYXRlIGEgZnVuY3Rpb24gc3RyaW5nXG5cbiAgJzIwcHgnLCAndHJhbnNsYXRlJyAtPiAndHJhbnNsYXRlKDIwcHgpJ1xuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjcmVhdGVGdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUsIHByZWZpeCkge1xuICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG4vKlxuICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICBcbiAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbnZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG59IDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG4vKlxuICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICBAcGFyYW0gW29iamVjdF1cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xudmFyIGhhc1Byb3BlcnR5ID0gZXhwb3J0cy5oYXNQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5TmFtZSkge1xuICByZXR1cm4gb2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkgJiYgb2JqZWN0W3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZDtcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbnZhciBpc0FycmF5ID0gZXhwb3J0cy5pc0FycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG52YXIgaXNGdW5jID0gZXhwb3J0cy5pc0Z1bmMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xudmFyIGlzTnVtID0gZXhwb3J0cy5pc051bSA9IGZ1bmN0aW9uIChudW0pIHtcbiAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG52YXIgaXNPYmogPSBleHBvcnRzLmlzT2JqID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xuXG4vKlxuICBJcyB1dGlscyBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnQ/XG4gIFxuICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IElmIHV0aWxzIGxvb2tzIGxpa2UgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50XG4qL1xudmFyIGlzUmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMuaXNSZWxhdGl2ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDAgPyB0cnVlIDogZmFsc2U7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xudmFyIGlzU3RyaW5nID0gZXhwb3J0cy5pc1N0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufTtcblxuLypcbiAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRDb21tYURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRDb21tYURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vIGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRTcGFjZURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRTcGFjZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG59O1xuXG4vKlxuICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcmV0dXJuIFtudW1iZXJdXG4qL1xudmFyIHRvRGVjaW1hbCA9IGV4cG9ydHMudG9EZWNpbWFsID0gZnVuY3Rpb24gKG51bSkge1xuICB2YXIgcHJlY2lzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMiA6IGFyZ3VtZW50c1sxXTtcblxuICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZFhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNTVUZCVFN4eFFrRkJjVUlzYVVKQlFYSkNPMEZCUTA0c1NVRkJUU3h0UWtGQmJVSXNUMEZCYmtJN1FVRkRUaXhKUVVGTkxITkNRVUYxUWl4UFFVRlBMRmRCUVZBc1MwRkJkVUlzVjBGQmRrSXNTVUZCYzBNc1dVRkJXU3hIUVVGYU96czdPenM3T3p0QlFWRnVSU3hKUVVGTkxGVkJRVlVzVlVGQlF5eFJRVUZFTzFOQlFXTXNUMEZCVHl4VFFVRlFMRU5CUVdsQ0xGRkJRV3BDTEVOQlFUQkNMRWxCUVRGQ0xFTkJRU3RDTEZGQlFTOUNMRVZCUVhsRExFdEJRWHBETEVOQlFTdERMRU5CUVM5RExFVkJRV3RFTEVOQlFVTXNRMEZCUkR0RFFVRm9SVHM3T3pzN096czdRVUZSVkN4SlFVRk5MRzlEUVVGakxGVkJRVU1zVFVGQlJEdFRRVUZaTEU5QlFVOHNUMEZCVUN4RFFVRmxMR3RDUVVGbUxFVkJRVzFETEdkQ1FVRnVReXhGUVVGeFJDeFhRVUZ5UkR0RFFVRmFPenM3T3pzN096czdPenRCUVZkd1FpeEpRVUZOTEhORVFVRjFRaXhWUVVGRExFdEJRVVFzUlVGQlVTeE5RVUZTTzFOQlFYTkNMR1ZCUVZVN1EwRkJhRU03T3pzN096czdRVUZQTjBJc1NVRkJUU3h2UTBGQll5eHpRa0ZCYzBJN1UwRkJUU3haUVVGWkxFZEJRVm83UTBGQlRpeEhRVUV3UWp0VFFVRk5MRWxCUVVrc1NVRkJTaXhIUVVGWExFOUJRVmc3UTBGQlRqczdPenM3T3pzN08wRkJVM0JGTEVsQlFVMHNiME5CUVdNc1ZVRkJReXhOUVVGRUxFVkJRVk1zV1VGQlZEdFRRVUV3UWl4UFFVRlBMR05CUVZBc1EwRkJjMElzV1VGQmRFSXNTMEZCZFVNc1QwRkJUeXhaUVVGUUxFMUJRWGxDTEZOQlFYcENPME5CUVdwRk96czdPenM3T3p0QlFWRndRaXhKUVVGTkxEUkNRVUZWTEZWQlFVTXNSMEZCUkR0VFFVRlRMRkZCUVZFc1IwRkJVaXhOUVVGcFFpeFBRVUZxUWp0RFFVRlVPenM3T3pzN096dEJRVkZvUWl4SlFVRk5MREJDUVVGVExGVkJRVU1zUjBGQlJEdFRRVUZUTEZGQlFWRXNSMEZCVWl4TlFVRnBRaXhWUVVGcVFqdERRVUZVT3pzN096czdPenRCUVZGbUxFbEJRVTBzZDBKQlFWRXNWVUZCUXl4SFFVRkVPMU5CUVZNc1QwRkJUeXhIUVVGUUxFdEJRV1VzVVVGQlpqdERRVUZVT3pzN096czdPenRCUVZGa0xFbEJRVTBzZDBKQlFWRXNWVUZCUXl4SFFVRkVPMU5CUVZNc1QwRkJUeXhIUVVGUUxFdEJRV1VzVVVGQlpqdERRVUZVT3pzN096czdPenRCUVZGa0xFbEJRVTBzTkVOQlFXdENMRlZCUVVNc1MwRkJSRHRUUVVGWExFdEJRVU1zU1VGQlV5eE5RVUZOTEU5QlFVNHNTVUZCYVVJc1RVRkJUU3hQUVVGT0xFTkJRV01zUjBGQlpDeEpRVUZ4UWl4RFFVRnlRaXhIUVVFd1FpeEpRVUZ5UkN4SFFVRTBSQ3hMUVVFMVJEdERRVUZZT3pzN096czdPenRCUVZGNFFpeEpRVUZOTERoQ1FVRlhMRlZCUVVNc1IwRkJSRHRUUVVGVExFOUJRVThzUjBGQlVDeExRVUZsTEZGQlFXWTdRMEZCVkRzN096czdPenM3T3p0QlFWVnFRaXhKUVVGTkxHOUVRVUZ6UWl4VlFVRkRMRXRCUVVRN1UwRkJWeXhUUVVGVExFdEJRVlFzU1VGQmEwSXNUVUZCVFN4TFFVRk9MRU5CUVZrc1RVRkJXaXhEUVVGc1FpeEhRVUYzUXl4RFFVRkRMRXRCUVVRc1EwRkJlRU03UTBGQldEczdPenM3T3pzN096dEJRVlUxUWl4SlFVRk5MRzlFUVVGelFpeFZRVUZETEV0QlFVUTdVMEZCVnl4VFFVRlRMRXRCUVZRc1NVRkJhMElzVFVGQlRTeExRVUZPTEVOQlFWa3NSMEZCV2l4RFFVRnNRaXhIUVVGeFF5eERRVUZETEV0QlFVUXNRMEZCY2tNN1EwRkJXRHM3T3pzN096czdPMEZCVXpWQ0xFbEJRVTBzWjBOQlFWa3NWVUZCUXl4SFFVRkVMRVZCUVhkQ08wMUJRV3hDTEd0RlFVRlpMR2xDUVVGTk96dEJRVU12UXl4MVFrRkJXU3hKUVVGTkxGVkJRV3hDTEVOQlJDdERPMEZCUlM5RExGTkJRVThzUzBGQlN5eExRVUZNTEVOQlFWY3NUVUZCVFN4VFFVRk9MRU5CUVZnc1IwRkJPRUlzVTBGQk9VSXNRMEZHZDBNN1EwRkJlRUlpTENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWTI5dWMzUWdRMEZOUlV4ZlEwRlRSVjlRUVZSVVJWSk9JRDBnTHloYllTMTZYU2tvVzBFdFdsMHBMMmM3WEc1amIyNXpkQ0JTUlZCTVFVTkZYMVJGVFZCTVFWUkZJRDBnSnlReExTUXlKenRjYm1OdmJuTjBJRWhCVTE5UVJWSkdUMUpOUVU1RFJWOU9UMWNnUFNBb2RIbHdaVzltSUhCbGNtWnZjbTFoYm1ObElDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQndaWEptYjNKdFlXNWpaUzV1YjNjcE8xeHVYRzR2S2x4dUlDQkhaWFFnZG1GeUlIUjVjR1VnWVhNZ2MzUnlhVzVuWEc0Z0lGeHVJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnUUhKbGRIVnliaUJiYzNSeWFXNW5YVG9nVW1WMGRYSnVjeXdnWm05eUlHbHVjM1JoYm1ObElDZFBZbXBsWTNRbklHbG1JRnR2WW1wbFkzUWdUMkpxWldOMFhWeHVLaTljYm1OdmJuTjBJSFpoY2xSNWNHVWdQU0FvZG1GeWFXRmliR1VwSUQwK0lFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWRHOVRkSEpwYm1jdVkyRnNiQ2gyWVhKcFlXSnNaU2t1YzJ4cFkyVW9PQ3dnTFRFcE8xeHVYRzR2S2x4dUlDQkRiMjUyWlhKMElHTmhiV1ZzUTJGelpTQjBieUJrWVhOb0xXTmhjMlZjYmx4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpZVzFsYkZSdlJHRnphQ0E5SUNoemRISnBibWNwSUQwK0lITjBjbWx1Wnk1eVpYQnNZV05sS0VOQlRVVk1YME5CVTBWZlVFRlVWRVZTVGl3Z1VrVlFURUZEUlY5VVJVMVFURUZVUlNrdWRHOU1iM2RsY2tOaGMyVW9LVHRjYmx4dUx5cGNiaUFnUTNKbFlYUmxJR0VnWm5WdVkzUnBiMjRnYzNSeWFXNW5YRzVjYmlBZ0p6SXdjSGduTENBbmRISmhibk5zWVhSbEp5QXRQaUFuZEhKaGJuTnNZWFJsS0RJd2NIZ3BKMXh1WEc0Z0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWR2RXNWpkR2x2YmxOMGNtbHVaeUE5SUNoMllXeDFaU3dnY0hKbFptbDRLU0E5UGlCZ0pIdHdjbVZtYVhoOUtDUjdkbUZzZFdWOUtXQTdYRzVjYmk4cVhHNGdJRWRsYm1WeVlYUmxJR04xY25KbGJuUWdkR2x0WlhOMFlXMXdYRzRnSUZ4dUlDQkFjbVYwZFhKdUlGdDBhVzFsYzNSaGJYQmRPaUJEZFhKeVpXNTBJRlZPU1ZnZ2RHbHRaWE4wWVcxd1hHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHTjFjbkpsYm5SVWFXMWxJRDBnU0VGVFgxQkZVa1pQVWsxQlRrTkZYMDVQVnlBL0lDZ3BJRDArSUhCbGNtWnZjbTFoYm1ObExtNXZkeWdwSURvZ0tDa2dQVDRnYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsS0NrN1hHNWNiaThxWEc0Z0lFTm9aV05ySUdsbUlHOWlhbVZqZENCb1lYTWdjSEp2Y0dWeWRIa2dZVzVrSUdsMElHbHpiaWQwSUhWdVpHVm1hVzVsWkZ4dVhHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMFhWeHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnUUhKbGRIVnliaUJiWW05dmJHVmhibDFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUdGelVISnZjR1Z5ZEhrZ1BTQW9iMkpxWldOMExDQndjbTl3WlhKMGVVNWhiV1VwSUQwK0lHOWlhbVZqZEM1b1lYTlBkMjVRY205d1pYSjBlU2h3Y205d1pYSjBlVTVoYldVcElDWW1JRzlpYW1WamRGdHdjbTl3WlhKMGVVNWhiV1ZkSUNFOVBTQjFibVJsWm1sdVpXUTdYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaGJpQmhjbkpoZVNBL0lGeHVJQ0JjYmlBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RYUnBiSE11ZG1GeVZIbHdaU0E5UFQwZ0owRnljbUY1SjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwRnljbUY1SUQwZ0tHRnljaWtnUFQ0Z2RtRnlWSGx3WlNoaGNuSXBJRDA5UFNBblFYSnlZWGtuTzF4dVhHNHZLbHh1SUNCSmN5QjFkR2xzY3lCMllYSWdZU0JtZFc1amRHbHZiaUEvSUZ4dUlDQmNiaUFnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZFhScGJITXVkbUZ5Vkhsd1pTQTlQVDBnSjBaMWJtTjBhVzl1SjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwWjFibU1nUFNBb2IySnFLU0E5UGlCMllYSlVlWEJsS0c5aWFpa2dQVDA5SUNkR2RXNWpkR2x2YmljN1hHNWNiaThxWEc0Z0lFbHpJSFYwYVd4eklIWmhjaUJoSUc1MWJXSmxjajljYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQTlQVDBnSjI1MWJXSmxjaWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOT2RXMGdQU0FvYm5WdEtTQTlQaUIwZVhCbGIyWWdiblZ0SUQwOVBTQW5iblZ0WW1WeUp6dGNibHh1THlwY2JpQWdTWE1nZFhScGJITWdkbUZ5SUdGdUlHOWlhbVZqZEQ5Y2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUE5UFQwZ0oyOWlhbVZqZENkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTlBZbW9nUFNBb2IySnFLU0E5UGlCMGVYQmxiMllnYjJKcUlEMDlQU0FuYjJKcVpXTjBKenRjYmx4dUx5cGNiaUFnU1hNZ2RYUnBiSE1nWVNCeVpXeGhkR2wyWlNCMllXeDFaU0JoYzNOcFoyNXRaVzUwUDF4dUlDQmNiaUFnUUhCaGNtRnRJRnR6ZEhKcGJtZGRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCSlppQjFkR2xzY3lCc2IyOXJjeUJzYVd0bElHRWdjbVZzWVhScGRtVWdkbUZzZFdVZ1lYTnphV2R1YldWdWRGeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMUpsYkdGMGFYWmxWbUZzZFdVZ1BTQW9kbUZzZFdVcElEMCtJQ2gyWVd4MVpTQW1KaUIyWVd4MVpTNXBibVJsZUU5bUlDWW1JSFpoYkhWbExtbHVaR1Y0VDJZb0p6MG5LU0ErSURBcElEOGdkSEoxWlNBNklHWmhiSE5sTzF4dVhHNHZLbHh1SUNCSmN5QjFkR2xzY3lCMllYSWdZU0J6ZEhKcGJtY2dQeUJjYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQnpkSElnUFQwOUlDZHpkSEpwYm1jblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpVM1J5YVc1bklEMGdLSE4wY2lrZ1BUNGdkSGx3Wlc5bUlITjBjaUE5UFQwZ0ozTjBjbWx1WnljN1hHNWNiaThxWEc0Z0lGTndiR2wwSUdOdmJXMWhMV1JsYkdsdGFYUmxaQ0J6ZEhKcGJtZGNibHh1SUNCY0ltWnZieXhpWVhKY0lpQXRQaUJiWENKbWIyOWNJaXdnWENKaVlYSmNJbDFjYmx4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdRSEpsZEhWeWJpQmJZWEp5WVhsZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITndiR2wwUTI5dGJXRkVaV3hwYldsMFpXUWdQU0FvZG1Gc2RXVXBJRDArSUdselUzUnlhVzVuS0haaGJIVmxLU0EvSUhaaGJIVmxMbk53YkdsMEtDOHNYRnh6S2k4cElEb2dXM1poYkhWbFhUdGNibHh1THlwY2JpQWdVM0JzYVhRZ2MzQmhZMlV0WkdWc2FXMXBkR1ZrSUhOMGNtbHVaMXh1WEc0Z0lGd2labTl2SUdKaGNsd2lJQzArSUZ0Y0ltWnZiMXdpTENCY0ltSmhjbHdpWFZ4dVhHNGdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0JBY21WMGRYSnVJRnRoY25KaGVWMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ0E5SUNoMllXeDFaU2tnUFQ0Z2FYTlRkSEpwYm1jb2RtRnNkV1VwSUQ4Z2RtRnNkV1V1YzNCc2FYUW9KeUFuS1NBNklGdDJZV3gxWlYwN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ2JuVnRZbVZ5SUhSdklIZ2daR1ZqYVcxaGJDQndiR0ZqWlhOY2JseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnZEc5RVpXTnBiV0ZzSUQwZ0tHNTFiU3dnY0hKbFkybHphVzl1SUQwZ01pa2dQVDRnZTF4dUlDQndjbVZqYVhOcGIyNGdQU0F4TUNBcUtpQndjbVZqYVhOcGIyNDdYRzRnSUhKbGRIVnliaUJOWVhSb0xuSnZkVzVrS0c1MWJTQXFJSEJ5WldOcGMybHZiaWtnTHlCd2NtVmphWE5wYjI0N1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG52YXIgaGFzUkFGID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRydWUgOiBmYWxzZTtcblxudmFyIG9uTmV4dEZyYW1lID0gdm9pZCAwO1xuXG5pZiAoaGFzUkFGKSB7XG4gIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9O1xufSBlbHNlIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvKlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgICBcbiAgICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcbiAgICAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgICBcbiAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgICAgXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgXG4gICAgICBNSVQgbGljZW5zZVxuICAgICovXG4gICAgdmFyIGxhc3RUaW1lID0gMDtcblxuICAgIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYuNyAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWUgKyB0aW1lVG9DYWxsO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGxhc3RUaW1lKTtcbiAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgIH07XG4gIH0pKCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9uTmV4dEZyYW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12YjI0dGJtVjRkQzFtY21GdFpTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkhRU3hKUVVGTkxGTkJRVk1zVDBGQlVTeE5RVUZRTEV0QlFXdENMRmRCUVd4Q0xFbEJRV2xETEU5QlFVOHNjVUpCUVZBc1IwRkJaME1zU1VGQmJFVXNSMEZCZVVVc1MwRkJla1U3TzBGQlJXWXNTVUZCU1N4dlFrRkJTanM3UVVGRlFTeEpRVUZKTEUxQlFVb3NSVUZCV1R0QlFVTldMR2RDUVVGakxGVkJRVU1zVVVGQlJEdFhRVUZqTEU5QlFVOHNjVUpCUVZBc1EwRkJOa0lzVVVGQk4wSTdSMEZCWkN4RFFVUktPME5CUVZvc1RVRkhUenM3T3pzN096czdPenM3T3pzN08wRkJaVXdzVVVGQlNTeFhRVUZYTEVOQlFWZzdPMEZCUlVvc2EwSkJRV01zVlVGQlF5eFJRVUZFTEVWQlFXTTdRVUZETVVJc1ZVRkJUU3hqUVVGakxFbEJRVWtzU1VGQlNpeEhRVUZYTEU5QlFWZ3NSVUZCWkN4RFFVUnZRanRCUVVVeFFpeFZRVUZOTEdGQlFXRXNTMEZCU3l4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxGRkJRVkVzWTBGQll5eFJRVUZrTEVOQlFWSXNRMEZCZWtJc1EwRkdiMEk3TzBGQlNURkNMR2xDUVVGWExHTkJRV01zVlVGQlpDeERRVXBsT3p0QlFVMHhRaXhwUWtGQlZ6dGxRVUZOTEZOQlFWTXNVVUZCVkR0UFFVRk9MRVZCUVRCQ0xGVkJRWEpETEVWQlRqQkNPMHRCUVdRN1QwRnFRbFE3UTBGSVVEczdhMEpCT0VKbElpd2labWxzWlNJNkltOXVMVzVsZUhRdFpuSmhiV1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnUkdWMFpXTjBJR0Z1WkNCc2IyRmtJR0Z1SUdGd2NISnZjSEpwWVhSbElHTnNiMk5ySUhObGRIUnBibWNnWm05eUlIUm9aU0JsYm5acGNtOXViV1Z1ZEZ4dUtpOWNibU52Ym5OMElHaGhjMUpCUmlBOUlDaDBlWEJsYjJZZ2QybHVaRzkzSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCM2FXNWtiM2N1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEtTQS9JSFJ5ZFdVZ09pQm1ZV3h6WlR0Y2JseHViR1YwSUc5dVRtVjRkRVp5WVcxbE8xeHVYRzVwWmlBb2FHRnpVa0ZHS1NCN1hHNGdJRzl1VG1WNGRFWnlZVzFsSUQwZ0tHTmhiR3hpWVdOcktTQTlQaUIzYVc1a2IzY3VjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsS0dOaGJHeGlZV05yS1R0Y2JseHVmU0JsYkhObElIdGNiaUFnTHlwY2JpQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVZ2NHOXNlV1pwYkd4Y2JpQWdJQ0JjYmlBZ0lDQkdiM0lnU1VVNEx6a2dSbXhwYm5OMGIyNWxjeUJoYm1RZ2JtOXVMV0p5YjNkelpYSWdaVzUyYVhKdmJtMWxiblJ6WEc1Y2JpQWdJQ0JVWVd0bGJpQm1jbTl0SUZCaGRXd2dTWEpwYzJndUlGZGxKM1psSUhOMGNtbHdjR1ZrSUc5MWRDQmpZVzVqWld4QmJtbHRZWFJwYjI1R2NtRnRaU0JqYUdWamEzTWdZbVZqWVhWelpTQjNaU0JrYjI0bmRDQm1iM2dnZDJsMGFDQjBhR0YwWEc0Z0lDQWdYRzRnSUNBZ2FIUjBjRG92TDNCaGRXeHBjbWx6YUM1amIyMHZNakF4TVM5eVpYRjFaWE4wWVc1cGJXRjBhVzl1Wm5KaGJXVXRabTl5TFhOdFlYSjBMV0Z1YVcxaGRHbHVaeTljYmlBZ0lDQm9kSFJ3T2k4dmJYa3ViM0JsY21FdVkyOXRMMlZ0YjJ4c1pYSXZZbXh2Wnk4eU1ERXhMekV5THpJd0wzSmxjWFZsYzNSaGJtbHRZWFJwYjI1bWNtRnRaUzFtYjNJdGMyMWhjblF0WlhJdFlXNXBiV0YwYVc1blhHNGdJQ0FnSUZ4dUlDQWdJSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNCd2IyeDVabWxzYkNCaWVTQkZjbWxySUUzRHRteHNaWEl1SUdacGVHVnpJR1p5YjIwZ1VHRjFiQ0JKY21semFDQmhibVFnVkdsdWJ5QmFhV3BrWld4Y2JpQWdJQ0FnWEc0Z0lDQWdUVWxVSUd4cFkyVnVjMlZjYmlBZ0tpOWNiaUFnYkdWMElHeGhjM1JVYVcxbElEMGdNRHRjYmx4dUlDQnZiazVsZUhSR2NtRnRaU0E5SUNoallXeHNZbUZqYXlrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUdOMWNuSmxiblJVYVcxbElEMGdibVYzSUVSaGRHVW9LUzVuWlhSVWFXMWxLQ2s3WEc0Z0lDQWdZMjl1YzNRZ2RHbHRaVlJ2UTJGc2JDQTlJRTFoZEdndWJXRjRLREFzSURFMkxqY2dMU0FvWTNWeWNtVnVkRlJwYldVZ0xTQnNZWE4wVkdsdFpTa3BPMXh1WEc0Z0lDQWdiR0Z6ZEZScGJXVWdQU0JqZFhKeVpXNTBWR2x0WlNBcklIUnBiV1ZVYjBOaGJHdzdYRzVjYmlBZ0lDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lHTmhiR3hpWVdOcktHeGhjM1JVYVcxbEtTd2dkR2x0WlZSdlEyRnNiQ2s3WEc0Z0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUc5dVRtVjRkRVp5WVcxbE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVJlbmRlclN0ZXA7XG5mdW5jdGlvbiBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCkge1xuICAvKipcbiAgICogV2UgdXNlIHR3byBhcnJheXMsIG9uZSBmb3IgdGhpcyBmcmFtZSBhbmQgb25lIHRvIHF1ZXVlIGZvciB0aGVcbiAgICogbmV4dCBmcmFtZSwgcmV1c2luZyBlYWNoIHRvIGF2b2lkIEdDLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICB2YXIgZnVuY3Rpb25zVG9SdW4gPSBbXTtcbiAgdmFyIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICBzY2hlZHVsZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBzdGFydFJlbmRlckxvb3AoKTtcbiAgICAgIC8vIElmIHRoaXMgY2FsbGJhY2sgaXNuJ3QgYWxyZWFkeSBzY2hlZHVsZWQgdG8gcnVuIG5leHQgZnJhbWVcbiAgICAgIGlmIChmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUucHVzaChjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNhbmNlbDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgaW5kZXhPZkNhbGxiYWNrID0gZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaW5kZXhPZkNhbGxiYWNrICE9PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXhPZkNhbGxiYWNrLCAxKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAvLyBDbGVhciBuZXh0IGZyYW1lIGxpc3RcbiAgICAgIHZhciBfcmVmID0gW2Z1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLCBmdW5jdGlvbnNUb1J1bl07XG4gICAgICAvLyBTd2FwIHRoaXMgZnJhbWUgYW5kIG5leHQgZnJhbWUgYXJyYXlzIHRvIGF2b2lkIEdDXG5cbiAgICAgIGZ1bmN0aW9uc1RvUnVuID0gX3JlZlswXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gX3JlZlsxXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIEV4ZWN1dGUgYWxsIG9mIHRoaXMgZnJhbWUncyBmdW5jdGlvbnNcbiAgICAgIHZhciBudW1UaGlzRnJhbWUgPSBmdW5jdGlvbnNUb1J1bi5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRoaXNGcmFtZTsgaSsrKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuW2ldKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12WTNKbFlYUmxMWEpsYm1SbGNpMXpkR1Z3TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZCZDBJN1FVRkJWQ3hUUVVGVExHZENRVUZVTEVOQlFUQkNMR1ZCUVRGQ0xFVkJRVEpET3pzN096czdRVUZOZUVRc1RVRkJTU3hwUWtGQmFVSXNSVUZCYWtJc1EwRk9iMFE3UVVGUGVFUXNUVUZCU1N3d1FrRkJNRUlzUlVGQk1VSXNRMEZRYjBRN08wRkJVM2hFTEZOQlFVODdRVUZEVEN4alFVRlZMRlZCUVVNc1VVRkJSQ3hGUVVGak8wRkJRM1JDT3p0QlFVUnpRaXhWUVVkc1FpeDNRa0ZCZDBJc1QwRkJlRUlzUTBGQlowTXNVVUZCYUVNc1RVRkJPRU1zUTBGQlF5eERRVUZFTEVWQlFVazdRVUZEY0VRc1owTkJRWGRDTEVsQlFYaENMRU5CUVRaQ0xGRkJRVGRDTEVWQlJHOUVPMDlCUVhSRU8wdEJTRkU3TzBGQlVWWXNXVUZCVVN4VlFVRkRMRkZCUVVRc1JVRkJZenRCUVVOd1FpeFZRVUZOTEd0Q1FVRnJRaXgzUWtGQmQwSXNUMEZCZUVJc1EwRkJaME1zVVVGQmFFTXNRMEZCYkVJc1EwRkVZenRCUVVWd1FpeFZRVUZKTEc5Q1FVRnZRaXhEUVVGRExFTkJRVVFzUlVGQlNUdEJRVU14UWl4blEwRkJkMElzVFVGQmVFSXNRMEZCSzBJc1pVRkJMMElzUlVGQlowUXNRMEZCYUVRc1JVRkVNRUk3VDBGQk5VSTdTMEZHVFRzN1FVRlBVaXhoUVVGVExGbEJRVTA3T3p0cFFrRkZLMElzUTBGQlF5eDFRa0ZCUkN4RlFVRXdRaXhqUVVFeFFqczdRVUZHTDBJN1FVRkZXaXdyUWtGR1dUdEJRVVZKTEhkRFFVWktPMEZCUzJJc09FSkJRWGRDTEUxQlFYaENMRWRCUVdsRExFTkJRV3BET3pzN1FVRk1ZU3hWUVZGUUxHVkJRV1VzWlVGQlpTeE5RVUZtTEVOQlVsSTdRVUZUWWl4WFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeFpRVUZLTEVWQlFXdENMRWRCUVd4RExFVkJRWFZETzBGQlEzSkRMSFZDUVVGbExFTkJRV1lzU1VGRWNVTTdUMEZCZGtNN1MwRlVUenRIUVdoQ1dDeERRVlIzUkR0RFFVRXpReUlzSW1acGJHVWlPaUpqY21WaGRHVXRjbVZ1WkdWeUxYTjBaWEF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnWTNKbFlYUmxVbVZ1WkdWeVUzUmxjQ2h6ZEdGeWRGSmxibVJsY2t4dmIzQXBJSHRjYmlBZ0x5b3FYRzRnSUNBcUlGZGxJSFZ6WlNCMGQyOGdZWEp5WVhsekxDQnZibVVnWm05eUlIUm9hWE1nWm5KaGJXVWdZVzVrSUc5dVpTQjBieUJ4ZFdWMVpTQm1iM0lnZEdobFhHNGdJQ0FxSUc1bGVIUWdabkpoYldVc0lISmxkWE5wYm1jZ1pXRmphQ0IwYnlCaGRtOXBaQ0JIUXk1Y2JpQWdJQ29nUUhSNWNHVWdlMEZ5Y21GNWZWeHVJQ0FnS2k5Y2JpQWdiR1YwSUdaMWJtTjBhVzl1YzFSdlVuVnVJRDBnVzEwN1hHNGdJR3hsZENCbWRXNWpkR2x2Ym5OVWIxSjFiazVsZUhSR2NtRnRaU0E5SUZ0ZE8xeHVYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdjMk5vWldSMWJHVTZJQ2hqWVd4c1ltRmpheWtnUFQ0Z2UxeHVJQ0FnSUNBZ2MzUmhjblJTWlc1a1pYSk1iMjl3S0NrN1hHNGdJQ0FnSUNBdkx5QkpaaUIwYUdseklHTmhiR3hpWVdOcklHbHpiaWQwSUdGc2NtVmhaSGtnYzJOb1pXUjFiR1ZrSUhSdklISjFiaUJ1WlhoMElHWnlZVzFsWEc0Z0lDQWdJQ0JwWmlBb1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YVc1a1pYaFBaaWhqWVd4c1ltRmpheWtnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0FnSUdaMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxMbkIxYzJnb1kyRnNiR0poWTJzcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNiaUFnSUNCallXNWpaV3c2SUNoallXeHNZbUZqYXlrZ1BUNGdlMXh1SUNBZ0lDQWdZMjl1YzNRZ2FXNWtaWGhQWmtOaGJHeGlZV05ySUQwZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YVc1a1pYaFBaaWhqWVd4c1ltRmpheWs3WEc0Z0lDQWdJQ0JwWmlBb2FXNWtaWGhQWmtOaGJHeGlZV05ySUNFOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2Ym5OVWIxSjFiazVsZUhSR2NtRnRaUzV6Y0d4cFkyVW9hVzVrWlhoUFprTmhiR3hpWVdOckxDQXhLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdjSEp2WTJWemN6b2dLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0x5OGdVM2RoY0NCMGFHbHpJR1p5WVcxbElHRnVaQ0J1WlhoMElHWnlZVzFsSUdGeWNtRjVjeUIwYnlCaGRtOXBaQ0JIUTF4dUlDQWdJQ0FnVzJaMWJtTjBhVzl1YzFSdlVuVnVMQ0JtZFc1amRHbHZibk5VYjFKMWJrNWxlSFJHY21GdFpWMGdQU0JiWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVXNJR1oxYm1OMGFXOXVjMVJ2VW5WdVhUdGNibHh1SUNBZ0lDQWdMeThnUTJ4bFlYSWdibVY0ZENCbWNtRnRaU0JzYVhOMFhHNGdJQ0FnSUNCbWRXNWpkR2x2Ym5OVWIxSjFiazVsZUhSR2NtRnRaUzVzWlc1bmRHZ2dQU0F3TzF4dVhHNGdJQ0FnSUNBdkx5QkZlR1ZqZFhSbElHRnNiQ0J2WmlCMGFHbHpJR1p5WVcxbEozTWdablZ1WTNScGIyNXpYRzRnSUNBZ0lDQmpiMjV6ZENCdWRXMVVhR2x6Um5KaGJXVWdQU0JtZFc1amRHbHZibk5VYjFKMWJpNXNaVzVuZEdnN1hHNGdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVlJvYVhOR2NtRnRaVHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVjMVJ2VW5WdVcybGRLQ2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOU8xeHVmU0pkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL2NyZWF0ZS1yZW5kZXItc3RlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDb21wb3NpdGVBY3Rpb24gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ29tcG9zaXRlQWN0aW9uLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBDb21wb3NpdGVBY3Rpb24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9zaXRlQWN0aW9uKTtcblxuICAgIHZhciBhY3Rpb25zID0gcHJvcHMuYWN0aW9ucztcblxuICAgIHZhciByZW1haW5pbmdQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWydhY3Rpb25zJ10pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHJlbWFpbmluZ1Byb3BzKSk7XG5cbiAgICBfdGhpcy5jdXJyZW50ID0ge307XG4gICAgX3RoaXMuYWN0aW9uS2V5cyA9IFtdO1xuICAgIF90aGlzLmFkZEFjdGlvbnMocHJvcHMuYWN0aW9ucyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5hZGRBY3Rpb25zID0gZnVuY3Rpb24gYWRkQWN0aW9ucyhhY3Rpb25zKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfdGhpczIuYWN0aW9uS2V5cy5wdXNoKGtleSk7XG4gICAgICBfdGhpczJba2V5XSA9IGFjdGlvbnNba2V5XTtcbiAgICAgIF90aGlzMltrZXldLnNldFByb3BzKHtcbiAgICAgICAgLy8gTG9vayBpbnRvIHByaXZhdGUgc2V0dGFibGUgZnVuY3Rpb25zXG4gICAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiAodiwgYWN0aW9uKSB7XG4gICAgICAgICAgX3RoaXMyLmN1cnJlbnRba2V5XSA9IGFjdGlvbi5nZXQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYWN0aW9ucykge1xuICAgICAgX2xvb3Aoa2V5KTtcbiAgICB9XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IHRoaXMuYWN0aW9uS2V5cy5sZW5ndGg7XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzM1trZXldLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXM0W2tleV0uc3RvcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciB2ZWxvY2l0eSA9IHt9O1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB2ZWxvY2l0eVtrZXldID0gX3RoaXM1W2tleV0uZ2V0VmVsb2NpdHkoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwO1xuICB9O1xuXG4gIHJldHVybiBDb21wb3NpdGVBY3Rpb247XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDb21wb3NpdGVBY3Rpb24oX2V4dGVuZHMoe1xuICAgIGFjdGlvbnM6IGFjdGlvbnNcbiAgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnZiWEJ2YzJsMFpTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3pzN096czdPenM3T3pzN1NVRkZUVHM3TzBGQlEwb3NWMEZFU1N4bFFVTktMRU5CUVZrc1MwRkJXaXhGUVVGdFFqc3dRa0ZFWml4cFFrRkRaVHM3VVVGRFZDeFZRVUVyUWl4TlFVRXZRaXhSUVVSVE96dFJRVU5ITERCRFFVRnRRaXh2UWtGRWRFSTdPMmxFUVVWcVFpeHRRa0ZCVFN4alFVRk9MRWRCUm1sQ096dEJRVWRxUWl4VlFVRkxMRTlCUVV3c1IwRkJaU3hGUVVGbUxFTkJTR2xDTzBGQlNXcENMRlZCUVVzc1ZVRkJUQ3hIUVVGclFpeEZRVUZzUWl4RFFVcHBRanRCUVV0cVFpeFZRVUZMTEZWQlFVd3NRMEZCWjBJc1RVRkJUU3hQUVVGT0xFTkJRV2hDTEVOQlRHbENPenRIUVVGdVFqczdRVUZFU1N3MFFrRlRTaXhwUTBGQlZ5eFRRVUZUT3pzN01FSkJRMUE3UVVGRFZDeGhRVUZMTEZWQlFVd3NRMEZCWjBJc1NVRkJhRUlzUTBGQmNVSXNSMEZCY2tJN1FVRkRRU3hoUVVGTExFZEJRVXdzU1VGQldTeFJRVUZSTEVkQlFWSXNRMEZCV2p0QlFVTkJMR0ZCUVVzc1IwRkJUQ3hGUVVGVkxGRkJRVllzUTBGQmJVSTdPMEZCUldwQ0xHdENRVUZWTEZWQlFVTXNRMEZCUkN4RlFVRkpMRTFCUVVvc1JVRkJaVHRCUVVOMlFpeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1IwRkJZaXhKUVVGdlFpeFBRVUZQTEVkQlFWQXNSVUZCY0VJc1EwRkVkVUk3VTBGQlpqdEJRVWRXTEdkQ1FVRlJPMmxDUVVGTkxFOUJRVXNzWjBKQlFVdzdVMEZCVGp0UFFVeFdPMDFCU21kQ096dEJRVU5zUWl4VFFVRkxMRWxCUVUwc1IwRkJUaXhKUVVGaExFOUJRV3hDTEVWQlFUSkNPMWxCUVdoQ0xFdEJRV2RDTzB0QlFUTkNPenM3UVVGV1JTdzBRa0YxUWtvc05rSkJRVlU3T3p0QlFVTlNMRk5CUVVzc1owSkJRVXdzUjBGQmQwSXNTMEZCU3l4VlFVRk1MRU5CUVdkQ0xFMUJRV2hDTEVOQlJHaENPMEZCUlZJc1UwRkJTeXhWUVVGTUxFTkJRV2RDTEU5QlFXaENMRU5CUVhkQ0xGVkJRVU1zUjBGQlJEdGhRVUZUTEU5QlFVc3NSMEZCVEN4RlFVRlZMRXRCUVZZN1MwRkJWQ3hEUVVGNFFpeERRVVpST3pzN1FVRjJRazRzTkVKQk5FSktMREpDUVVGVE96czdRVUZEVUN4VFFVRkxMRlZCUVV3c1EwRkJaMElzVDBGQmFFSXNRMEZCZDBJc1ZVRkJReXhIUVVGRU8yRkJRVk1zVDBGQlN5eEhRVUZNTEVWQlFWVXNTVUZCVmp0TFFVRlVMRU5CUVhoQ0xFTkJSRTg3T3p0QlFUVkNUQ3cwUWtGblEwb3NjVU5CUVdNN096dEJRVU5hTEZGQlFVMHNWMEZCVnl4RlFVRllMRU5CUkUwN1FVRkZXaXhUUVVGTExGVkJRVXdzUTBGQlowSXNUMEZCYUVJc1EwRkJkMElzVlVGQlF5eEhRVUZFTzJGQlFWTXNVMEZCVXl4SFFVRlVMRWxCUVdkQ0xFOUJRVXNzUjBGQlRDeEZRVUZWTEZkQlFWWXNSVUZCYUVJN1MwRkJWQ3hEUVVGNFFpeERRVVpaTzBGQlIxb3NWMEZCVHl4UlFVRlFMRU5CU0ZrN096dEJRV2hEVml3MFFrRnpRMG9zSzBOQlFXMUNPMEZCUTJwQ0xGZEJRVkVzUzBGQlN5eG5Ra0ZCVEN4TFFVRXdRaXhEUVVFeFFpeERRVVJUT3pzN1UwRjBRMlk3T3p0clFrRXlRMU1zVlVGQlF5eFBRVUZFTEVWQlFWVXNTMEZCVml4RlFVRnZRanRCUVVOcVF5eFRRVUZQTEVsQlFVa3NaVUZCU2p0QlFVTk1PMHRCUTBjc1RVRkdSU3hEUVVGUUxFTkJSR2xETzBOQlFYQkNJaXdpWm1sc1pTSTZJbU52YlhCdmMybDBaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYmx4dVkyeGhjM01nUTI5dGNHOXphWFJsUVdOMGFXOXVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnWTI5dWMzUnlkV04wYjNJb2NISnZjSE1wSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR0ZqZEdsdmJuTXNJQzR1TG5KbGJXRnBibWx1WjFCeWIzQnpJSDBnUFNCd2NtOXdjenRjYmlBZ0lDQnpkWEJsY2loeVpXMWhhVzVwYm1kUWNtOXdjeWs3WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwSUQwZ2UzMDdYRzRnSUNBZ2RHaHBjeTVoWTNScGIyNUxaWGx6SUQwZ1cxMDdYRzRnSUNBZ2RHaHBjeTVoWkdSQlkzUnBiMjV6S0hCeWIzQnpMbUZqZEdsdmJuTXBPMXh1SUNCOVhHNWNiaUFnWVdSa1FXTjBhVzl1Y3loaFkzUnBiMjV6S1NCN1hHNGdJQ0FnWm05eUlDaGpiMjV6ZENCclpYa2dhVzRnWVdOMGFXOXVjeWtnZTF4dUlDQWdJQ0FnZEdocGN5NWhZM1JwYjI1TFpYbHpMbkIxYzJnb2EyVjVLVHRjYmlBZ0lDQWdJSFJvYVhOYmEyVjVYU0E5SUdGamRHbHZibk5iYTJWNVhUdGNiaUFnSUNBZ0lIUm9hWE5iYTJWNVhTNXpaWFJRY205d2N5aDdYRzRnSUNBZ0lDQWdJQzh2SUV4dmIyc2dhVzUwYnlCd2NtbDJZWFJsSUhObGRIUmhZbXhsSUdaMWJtTjBhVzl1YzF4dUlDQWdJQ0FnSUNCdmJsVndaR0YwWlRvZ0tIWXNJR0ZqZEdsdmJpa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11WTNWeWNtVnVkRnRyWlhsZElEMGdZV04wYVc5dUxtZGxkQ2dwTzF4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQnZibE4wYjNBNklDZ3BJRDArSUhSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5MHRYRzRnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J2YmxOMFlYSjBLQ2tnZTF4dUlDQWdJSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lBOUlIUm9hWE11WVdOMGFXOXVTMlY1Y3k1c1pXNW5kR2c3WEc0Z0lDQWdkR2hwY3k1aFkzUnBiMjVMWlhsekxtWnZja1ZoWTJnb0tHdGxlU2tnUFQ0Z2RHaHBjMXRyWlhsZExuTjBZWEowS0NrcE8xeHVJQ0I5WEc1Y2JpQWdiMjVUZEc5d0tDa2dlMXh1SUNBZ0lIUm9hWE11WVdOMGFXOXVTMlY1Y3k1bWIzSkZZV05vS0NoclpYa3BJRDArSUhSb2FYTmJhMlY1WFM1emRHOXdLQ2twTzF4dUlDQjlYRzVjYmlBZ1oyVjBWbVZzYjJOcGRIa29LU0I3WEc0Z0lDQWdZMjl1YzNRZ2RtVnNiMk5wZEhrZ1BTQjdmVHRjYmlBZ0lDQjBhR2x6TG1GamRHbHZia3RsZVhNdVptOXlSV0ZqYUNnb2EyVjVLU0E5UGlCMlpXeHZZMmwwZVZ0clpYbGRJRDBnZEdocGMxdHJaWGxkTG1kbGRGWmxiRzlqYVhSNUtDa3BPMXh1SUNBZ0lISmxkSFZ5YmlCMlpXeHZZMmwwZVR0Y2JpQWdmVnh1WEc0Z0lHbHpRV04wYVc5dVEyOXRjR3hsZEdVb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUNoMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTWdQVDA5SURBcE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaGhZM1JwYjI1ekxDQndjbTl3Y3lrZ1BUNGdlMXh1SUNCeVpYUjFjbTRnYm1WM0lFTnZiWEJ2YzJsMFpVRmpkR2x2YmloN1hHNGdJQ0FnWVdOMGFXOXVjeXhjYmlBZ0lDQXVMaTV3Y205d2MxeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9