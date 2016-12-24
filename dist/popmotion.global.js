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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwuanMiXSwibmFtZXMiOlsicG9wbW90aW9uIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBOztJQUFZQSxTOzs7O0FBQ1pDLE9BQU9ELFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBvcG1vdGlvbiBmcm9tICcuL3BvcG1vdGlvbic7XG53aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuIl19

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.svgPath = exports.svg = exports.css = exports.Renderer = exports.composite = exports.crossFade = exports.delay = exports.chain = exports.pointer = exports.parallel = exports.physics = exports.track = exports.tween = exports.Action = exports.valueTypes = exports.transformers = exports.easing = exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
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
	
	var _easing2 = __webpack_require__(37);
	
	var _easing = _interopRequireWildcard(_easing2);
	
	var _transformers2 = __webpack_require__(27);
	
	var _transformers = _interopRequireWildcard(_transformers2);
	
	var _valueTypes2 = __webpack_require__(36);
	
	var _valueTypes = _interopRequireWildcard(_valueTypes2);
	
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
	
	var _pointer2 = __webpack_require__(8);
	
	var _pointer3 = _interopRequireDefault(_pointer2);
	
	var _chain2 = __webpack_require__(9);
	
	var _chain3 = _interopRequireDefault(_chain2);
	
	var _delay2 = __webpack_require__(10);
	
	var _delay3 = _interopRequireDefault(_delay2);
	
	var _crossFade2 = __webpack_require__(11);
	
	var _crossFade3 = _interopRequireDefault(_crossFade2);
	
	var _composite2 = __webpack_require__(12);
	
	var _composite3 = _interopRequireDefault(_composite2);
	
	var _renderers = __webpack_require__(16);
	
	var _renderers2 = _interopRequireDefault(_renderers);
	
	var _css2 = __webpack_require__(17);
	
	var _css3 = _interopRequireDefault(_css2);
	
	var _svg2 = __webpack_require__(29);
	
	var _svg3 = _interopRequireDefault(_svg2);
	
	var _svgPath2 = __webpack_require__(30);
	
	var _svgPath3 = _interopRequireDefault(_svgPath2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.easing = _easing;
	exports.transformers = _transformers;
	exports.valueTypes = _valueTypes;
	
	// Actions
	
	exports.Action = _actions2.default;
	exports.tween = _tween3.default;
	exports.track = _track3.default;
	exports.physics = _physics3.default;
	exports.parallel = _parallel3.default;
	exports.pointer = _pointer3.default;
	exports.chain = _chain3.default;
	exports.delay = _delay3.default;
	exports.crossFade = _crossFade3.default;
	exports.composite = _composite3.default;
	
	// Renderers
	
	exports.Renderer = _renderers2.default;
	exports.css = _css3.default;
	exports.svg = _svg3.default;
	exports.svgPath = _svgPath3.default;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOlsib25GcmFtZVN0YXJ0Iiwib25GcmFtZVVwZGF0ZSIsIm9uRnJhbWVSZW5kZXIiLCJvbkZyYW1lRW5kIiwiY2FuY2VsT25GcmFtZVN0YXJ0IiwiY2FuY2VsT25GcmFtZVVwZGF0ZSIsImNhbmNlbE9uRnJhbWVSZW5kZXIiLCJjYW5jZWxPbkZyYW1lRW5kIiwidGltZVNpbmNlTGFzdEZyYW1lIiwiY3VycmVudEZyYW1lVGltZXN0YW1wIiwiZWFzaW5nIiwidHJhbnNmb3JtZXJzIiwidmFsdWVUeXBlcyIsIkFjdGlvbiIsInR3ZWVuIiwidHJhY2siLCJwaHlzaWNzIiwicGFyYWxsZWwiLCJwb2ludGVyIiwiY2hhaW4iLCJkZWxheSIsImNyb3NzRmFkZSIsImNvbXBvc2l0ZSIsIlJlbmRlcmVyIiwiY3NzIiwic3ZnIiwic3ZnUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzQkFFRUEsWTs7Ozs7O3NCQUNBQyxhOzs7Ozs7c0JBQ0FDLGE7Ozs7OztzQkFDQUMsVTs7Ozs7O3NCQUNBQyxrQjs7Ozs7O3NCQUNBQyxtQjs7Ozs7O3NCQUNBQyxtQjs7Ozs7O3NCQUNBQyxnQjs7Ozs7O3NCQUNBQyxrQjs7Ozs7O3NCQUNBQyxxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUdVQyxNO1FBQ0FDLFk7UUFDQUMsVTs7QUFFWjs7UUFDT0MsTTtRQUNBQyxLO1FBQ0FDLEs7UUFDQUMsTztRQUNBQyxRO1FBQ0FDLE87UUFDQUMsSztRQUNBQyxLO1FBQ0FDLFM7UUFDQUMsUzs7QUFFUDs7UUFDT0MsUTtRQUNBQyxHO1FBQ0FDLEc7UUFDQUMsTyIsImZpbGUiOiJwb3Btb3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGcmFtZXN5bmMgc2NoZWR1bGVyc1xuZXhwb3J0IHtcbiAgb25GcmFtZVN0YXJ0LFxuICBvbkZyYW1lVXBkYXRlLFxuICBvbkZyYW1lUmVuZGVyLFxuICBvbkZyYW1lRW5kLFxuICBjYW5jZWxPbkZyYW1lU3RhcnQsXG4gIGNhbmNlbE9uRnJhbWVVcGRhdGUsXG4gIGNhbmNlbE9uRnJhbWVSZW5kZXIsXG4gIGNhbmNlbE9uRnJhbWVFbmQsXG4gIHRpbWVTaW5jZUxhc3RGcmFtZSxcbiAgY3VycmVudEZyYW1lVGltZXN0YW1wXG59IGZyb20gJy4vZnJhbWVzeW5jJztcblxuZXhwb3J0ICogYXMgZWFzaW5nIGZyb20gJy4vaW5jL2Vhc2luZyc7XG5leHBvcnQgKiBhcyB0cmFuc2Zvcm1lcnMgZnJvbSAnLi9pbmMvdHJhbnNmb3JtZXJzJztcbmV4cG9ydCAqIGFzIHZhbHVlVHlwZXMgZnJvbSAnLi9pbmMvdmFsdWUtdHlwZXMnO1xuXG4vLyBBY3Rpb25zXG5leHBvcnQgQWN0aW9uIGZyb20gJy4vYWN0aW9ucyc7XG5leHBvcnQgdHdlZW4gZnJvbSAnLi9hY3Rpb25zL3R3ZWVuJztcbmV4cG9ydCB0cmFjayBmcm9tICcuL2FjdGlvbnMvdHJhY2snO1xuZXhwb3J0IHBoeXNpY3MgZnJvbSAnLi9hY3Rpb25zL3BoeXNpY3MnO1xuZXhwb3J0IHBhcmFsbGVsIGZyb20gJy4vYWN0aW9ucy9wYXJhbGxlbCc7XG5leHBvcnQgcG9pbnRlciBmcm9tICcuL2FjdGlvbnMvcG9pbnRlcic7XG5leHBvcnQgY2hhaW4gZnJvbSAnLi9hY3Rpb25zL2NoYWluJztcbmV4cG9ydCBkZWxheSBmcm9tICcuL2FjdGlvbnMvZGVsYXknO1xuZXhwb3J0IGNyb3NzRmFkZSBmcm9tICcuL2FjdGlvbnMvY3Jvc3MtZmFkZSc7XG5leHBvcnQgY29tcG9zaXRlIGZyb20gJy4vYWN0aW9ucy9jb21wb3NpdGUnO1xuXG4vLyBSZW5kZXJlcnNcbmV4cG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVycyc7XG5leHBvcnQgY3NzIGZyb20gJy4vcmVuZGVyZXJzL2Nzcyc7XG5leHBvcnQgc3ZnIGZyb20gJy4vcmVuZGVyZXJzL3N2Zyc7XG5leHBvcnQgc3ZnUGF0aCBmcm9tICcuL3JlbmRlcmVycy9zdmctcGF0aCc7XG4iXX0=

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.getProgressFromValue = exports.getValueFromProgress = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(18);
	
	/*
	  Convert number to x decimal places
	
	  @param [number]
	  @param [number]
	  @return [number]
	*/
	var toDecimal = function (num) {
	  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	
	  precision = Math.pow(10, precision);
	  return Math.round(num * precision) / precision;
	};
	
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
	  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ZERO_POINT;
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
	  Framerate-independent smoothing
	
	  @param [number]: New value
	  @param [number]: Old value
	  @param [number]: Frame duration
	  @param [number] (optional): Smoothing (0 is none)
	*/
	var smooth = exports.smooth = function (newValue, oldValue, duration) {
	  var smoothing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	  return toDecimal(oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration));
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvY2FsYy5qcyJdLCJuYW1lcyI6WyJ0b0RlY2ltYWwiLCJudW0iLCJwcmVjaXNpb24iLCJNYXRoIiwicm91bmQiLCJaRVJPX1BPSU5UIiwieCIsInkiLCJ6IiwiZGlzdGFuY2UxRCIsImEiLCJiIiwiYWJzIiwiYW5nbGUiLCJyYWRpYW5zVG9EZWdyZWVzIiwiYXRhbjIiLCJkZWdyZWVzVG9SYWRpYW5zIiwiZGVncmVlcyIsIlBJIiwiZGlsYXRlIiwiZGlsYXRpb24iLCJkaXN0YW5jZSIsInhEZWx0YSIsInlEZWx0YSIsInpEZWx0YSIsInNxcnQiLCJnZXRWYWx1ZUZyb21Qcm9ncmVzcyIsImZyb20iLCJ0byIsInByb2dyZXNzIiwiZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUiLCJ2YWx1ZSIsInBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UiLCJvcmlnaW4iLCJjb3MiLCJzaW4iLCJyYWRpYW5zIiwic21vb3RoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImR1cmF0aW9uIiwic21vb3RoaW5nIiwibWF4Iiwic3BlZWRQZXJGcmFtZSIsInhwcyIsImZyYW1lRHVyYXRpb24iLCJzcGVlZFBlclNlY29uZCIsInZlbG9jaXR5Iiwic3RlcFByb2dyZXNzIiwic3RlcHMiLCJzZWdtZW50IiwidGFyZ2V0IiwicHJvZ3Jlc3NPZlRhcmdldCIsIm1pbiIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOzs7Ozs7O0FBT0EsSUFBTUEsWUFBWSxVQUFDQyxHQUFELEVBQXdCO0FBQUEsTUFBbEJDLFNBQWtCLHVFQUFOLENBQU07O0FBQ3hDQSx1QkFBWSxFQUFaLEVBQWtCQSxTQUFsQjtBQUNBLFNBQU9DLEtBQUtDLEtBQUwsQ0FBV0gsTUFBTUMsU0FBakIsSUFBOEJBLFNBQXJDO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNRyxhQUFhO0FBQ2pCQyxLQUFHLENBRGM7QUFFakJDLEtBQUcsQ0FGYztBQUdqQkMsS0FBRztBQUhjLENBQW5COztBQU1BLElBQU1DLGFB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QUFLdUMsR0FBTCxDQUFTRCxTQUFULEVBQW9CRCxRQUFwQixDQUF6RCxDQUFqRDtBQUFBLENBQWY7O0FBRVA7Ozs7OztBQU1PLElBQU1HLHdDQUFnQixVQUFDQyxHQUFELEVBQU1DLGFBQU47QUFBQSxTQUF5QixrQkFBTUQsR0FBTixDQUFELEdBQWVBLE9BQU8sT0FBT0MsYUFBZCxDQUFmLEdBQThDLENBQXRFO0FBQUEsQ0FBdEI7O0FBRVA7Ozs7OztBQU1PLElBQU1DLDBDQUFpQixVQUFDQyxRQUFELEVBQVdGLGFBQVg7QUFBQSxTQUE2QkUsWUFBWSxPQUFPRixhQUFuQixDQUE3QjtBQUFBLENBQXZCOztBQUVQOzs7Ozs7O0FBT08sSUFBTUcsc0NBQWUsVUFBQ0MsS0FBRCxFQUFRcEIsUUFBUixFQUFxQjtBQUMvQyxNQUFNcUIsVUFBVSxLQUFLRCxRQUFRLENBQWIsQ0FBaEI7QUFDQSxNQUFNRSxTQUFTLElBQUssSUFBSUYsS0FBeEI7QUFDQSxNQUFNRyxtQkFBbUJqRCxLQUFLa0QsR0FBTCxDQUFTeEIsV0FBV3NCLE1BQXBCLEVBQTRCLENBQTVCLENBQXpCOztBQUVBLFNBQU9oRCxLQUFLbUQsS0FBTCxDQUFXRixtQkFBbUJGLE9BQTlCLElBQXlDQSxPQUFoRDtBQUNELENBTk0iLCJmaWxlIjoiY2FsYy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzTnVtLCBmaW5kVmFsdWVBbmRVbml0IH0gZnJvbSAnLi91dGlscyc7XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG5jb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gIHByZWNpc2lvbiA9IDEwICoqIHByZWNpc2lvbjtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG5cbmNvbnN0IFpFUk9fUE9JTlQgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHo6IDBcbn07XG5cbmNvbnN0IGRpc3RhbmNlMUQgPSAoYSwgYikgPT4gTWF0aC5hYnMoYSAtIGIpO1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICBcbiAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gIGFyZSBhdCAwLDBcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBhbmdsZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBkZWdyZWVzVG9SYWRpYW5zID0gKGRlZ3JlZXMpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuXG4vKlxuICBEaWxhdGVcbiAgXG4gIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICBcbiAgYSAtLS0tLS0tLS0gYlxuICBcbiAgdG9cbiAgXG4gIGEgLS0tLSBiXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbmV4cG9ydCBjb25zdCBkaWxhdGUgPSAoYSwgYiwgZGlsYXRpb24pID0+IGEgKyAoKGIgLSBhKSAqIGRpbGF0aW9uKTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IGRpc3RhbmNlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiB7XG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKGlzTnVtKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICBjb25zdCB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICBjb25zdCB6RGVsdGEgPSAoaXNOdW0oYS56KSkgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KCh4RGVsdGEgKiogMikgKyAoeURlbHRhICoqIDIpICsgKHpEZWx0YSAqKiAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IChmcm9tLCB0bywgcHJvZ3Jlc3MpID0+ICgtIHByb2dyZXNzICogZnJvbSkgKyAocHJvZ3Jlc3MgKiB0bykgKyBmcm9tO1xuXG4vKlxuICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG5leHBvcnQgY29uc3QgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSAoZnJvbSwgdG8sIHZhbHVlKSA9PiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG5leHBvcnQgY29uc3QgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkgPT4ge1xuICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gIHJldHVybiB7XG4gICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gIH07XG59O1xuXG4vKlxuICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG5leHBvcnQgY29uc3QgcmFkaWFuc1RvRGVncmVlcyA9IChyYWRpYW5zKSA9PiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbmV4cG9ydCBjb25zdCBzbW9vdGggPSAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nID0gMCkgPT4gdG9EZWNpbWFsKG9sZFZhbHVlICsgKGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpKTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlckZyYW1lID0gKHhwcywgZnJhbWVEdXJhdGlvbikgPT4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHN0ZXBQcm9ncmVzcyA9IChzdGVwcywgcHJvZ3Jlc3MpID0+IHtcbiAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgY29uc3QgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpO1xuICBjb25zdCBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuIl19

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(15);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(13);
	
	var _transformers = __webpack_require__(27);
	
	var _calc = __webpack_require__(2);
	
	var _easing = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../easing\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var clampProgress = (0, _transformers.clamp)(0, 1);
	
	var Tween = function (_Action) {
	  _inherits(Tween, _Action);
	
	  function Tween() {
	    _classCallCheck(this, Tween);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Tween.prototype.onStart = function onStart() {
	    var _this2 = this;
	
	    var _props = this.props,
	        duration = _props.duration,
	        ease = _props.ease,
	        from = _props.from,
	        to = _props.to;
	
	
	    this.elapsed = 0;
	
	    this.onUpdate = (0, _transformers.flow)(function () {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3R3ZWVuLmpzIl0sIm5hbWVzIjpbImNsYW1wUHJvZ3Jlc3MiLCJUd2VlbiIsIm9uU3RhcnQiLCJwcm9wcyIsImR1cmF0aW9uIiwiZWFzZSIsImZyb20iLCJ0byIsImVsYXBzZWQiLCJvblVwZGF0ZSIsImVhc2VkUHJvZ3Jlc3MiLCJpc0FjdGlvbkNvbXBsZXRlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQix5QkFBTSxDQUFOLEVBQVMsQ0FBVCxDQUF0Qjs7SUFFTUMsSzs7Ozs7Ozs7O2tCQVFKQyxPLHNCQUFVO0FBQUE7O0FBQUEsaUJBQzZCLEtBQUtDLEtBRGxDO0FBQUEsUUFDQUMsUUFEQSxVQUNBQSxRQURBO0FBQUEsUUFDVUMsSUFEVixVQUNVQSxJQURWO0FBQUEsUUFDZ0JDLElBRGhCLFVBQ2dCQSxJQURoQjtBQUFBLFFBQ3NCQyxFQUR0QixVQUNzQkEsRUFEdEI7OztBQUdSLFNBQUtDLE9BQUwsR0FBZSxDQUFmOztBQUVBLFNBQUtDLFFBQUwsR0FBZ0Isd0JBQ2Q7QUFBQSxhQUFNLE9BQUtELE9BQUwsSUFBZ0Isb0NBQXRCO0FBQUEsS0FEYyxFQUVkLFVBQUNBLE9BQUQ7QUFBQSxhQUFhLGdDQUFxQixDQUFyQixFQUF3QkosUUFBeEIsRUFBa0NJLE9BQWxDLENBQWI7QUFBQSxLQUZjLEVBR2RSLGFBSGMsRUFJZEssSUFKYyxFQUtkLFVBQUNLLGFBQUQ7QUFBQSxhQUFtQixnQ0FBcUJKLElBQXJCLEVBQTJCQyxFQUEzQixFQUErQkcsYUFBL0IsQ0FBbkI7QUFBQSxLQUxjLENBQWhCO0FBT0QsRzs7a0JBRURDLGdCLCtCQUFtQjtBQUNqQixXQUFRLEtBQUtILE9BQUwsSUFBZ0IsS0FBS0wsS0FBTCxDQUFXQyxRQUFuQztBQUNELEc7Ozs7O0FBeEJHSCxLLENBQ0dXLFksR0FBZTtBQUNwQlIsWUFBVSxHQURVO0FBRXBCQyx1QkFGb0I7QUFHcEJDLFFBQU0sQ0FIYztBQUlwQkMsTUFBSTtBQUpnQixDOztrQkEwQlQsVUFBQ0osS0FBRDtBQUFBLFNBQVcsSUFBSUYsS0FBSixDQUFVRSxLQUFWLENBQVg7QUFBQSxDIiwiZmlsZSI6InR3ZWVuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgeyB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuaW1wb3J0IHsgZmxvdywgY2xhbXAgfSBmcm9tICcuLi9pbmMvdHJhbnNmb3JtZXJzJztcbmltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGVhc2VPdXQgfSBmcm9tICcuLi9lYXNpbmcnO1xuXG5jb25zdCBjbGFtcFByb2dyZXNzID0gY2xhbXAoMCwgMSk7XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIGVhc2U6IGVhc2VPdXQsXG4gICAgZnJvbTogMCxcbiAgICB0bzogMVxuICB9O1xuXG4gIG9uU3RhcnQoKSB7XG4gICAgY29uc3QgeyBkdXJhdGlvbiwgZWFzZSwgZnJvbSwgdG8gfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLmVsYXBzZWQgPSAwO1xuXG4gICAgdGhpcy5vblVwZGF0ZSA9IGZsb3coXG4gICAgICAoKSA9PiB0aGlzLmVsYXBzZWQgKz0gdGltZVNpbmNlTGFzdEZyYW1lKCksXG4gICAgICAoZWxhcHNlZCkgPT4gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoMCwgZHVyYXRpb24sIGVsYXBzZWQpLFxuICAgICAgY2xhbXBQcm9ncmVzcyxcbiAgICAgIGVhc2UsXG4gICAgICAoZWFzZWRQcm9ncmVzcykgPT4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZnJvbSwgdG8sIGVhc2VkUHJvZ3Jlc3MpXG4gICAgKTtcbiAgfVxuXG4gIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuICh0aGlzLmVsYXBzZWQgPj0gdGhpcy5wcm9wcy5kdXJhdGlvbik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgVHdlZW4ocHJvcHMpO1xuIl19

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
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
	    input.addListener(this.update);
	  };
	
	  Track.prototype.onStop = function onStop() {
	    var input = this.props.input;
	
	    input.removeListener(this.update);
	  };
	
	  Track.prototype.onUpdate = function onUpdate() {
	    var _props = this.props,
	        input = _props.input,
	        from = _props.from;
	
	    var offset = input.get() - this.inputOrigin;
	    return from + offset;
	  };
	
	  return Track;
	}(_2.default);
	
	Track.defaultProps = {
	  from: 0,
	  passive: true
	};
	
	exports.default = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  if (args.length === 1) {
	    var props = args[0];
	
	    return new Track(props);
	  } else {
	    var input = args[0],
	        onUpdate = args[1],
	        _props2 = args[2];
	
	    return new Track(_extends({
	      input: input,
	      onUpdate: onUpdate
	    }, _props2));
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3RyYWNrLmpzIl0sIm5hbWVzIjpbIlRyYWNrIiwib25TdGFydCIsImlucHV0IiwicHJvcHMiLCJpbnB1dE9yaWdpbiIsImdldCIsImFkZExpc3RlbmVyIiwidXBkYXRlIiwib25TdG9wIiwicmVtb3ZlTGlzdGVuZXIiLCJvblVwZGF0ZSIsImZyb20iLCJvZmZzZXQiLCJkZWZhdWx0UHJvcHMiLCJwYXNzaXZlIiwiYXJncyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7Ozs7Ozs7a0JBTUpDLE8sc0JBQVU7QUFBQSxRQUNBQyxLQURBLEdBQ1UsS0FBS0MsS0FEZixDQUNBRCxLQURBOztBQUVSLFNBQUtFLFdBQUwsR0FBbUJGLE1BQU1HLEdBQU4sRUFBbkI7QUFDQUgsVUFBTUksV0FBTixDQUFrQixLQUFLQyxNQUF2QjtBQUNELEc7O2tCQUVEQyxNLHFCQUFTO0FBQUEsUUFDQ04sS0FERCxHQUNXLEtBQUtDLEtBRGhCLENBQ0NELEtBREQ7O0FBRVBBLFVBQU1PLGNBQU4sQ0FBcUIsS0FBS0YsTUFBMUI7QUFDRCxHOztrQkFFREcsUSx1QkFBVztBQUFBLGlCQUNlLEtBQUtQLEtBRHBCO0FBQUEsUUFDREQsS0FEQyxVQUNEQSxLQURDO0FBQUEsUUFDTVMsSUFETixVQUNNQSxJQUROOztBQUVULFFBQU1DLFNBQVNWLE1BQU1HLEdBQU4sS0FBYyxLQUFLRCxXQUFsQztBQUNBLFdBQU9PLE9BQU9DLE1BQWQ7QUFDRCxHOzs7OztBQXJCR1osSyxDQUNHYSxZLEdBQWU7QUFDcEJGLFFBQU0sQ0FEYztBQUVwQkcsV0FBUztBQUZXLEM7O2tCQXVCVCxZQUFhO0FBQUEsb0NBQVRDLElBQVM7QUFBVEEsUUFBUztBQUFBOztBQUMxQixNQUFJQSxLQUFLQyxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQUEsUUFDYmIsS0FEYSxHQUNIWSxJQURHOztBQUVyQixXQUFPLElBQUlmLEtBQUosQ0FBVUcsS0FBVixDQUFQO0FBQ0QsR0FIRCxNQUdPO0FBQUEsUUFDR0QsS0FESCxHQUM4QmEsSUFEOUI7QUFBQSxRQUNVTCxRQURWLEdBQzhCSyxJQUQ5QjtBQUFBLFFBQ29CWixPQURwQixHQUM4QlksSUFEOUI7O0FBRUwsV0FBTyxJQUFJZixLQUFKO0FBQ0xFLGtCQURLO0FBRUxRO0FBRkssT0FHRlAsT0FIRSxFQUFQO0FBS0Q7QUFDRixDIiwiZmlsZSI6InRyYWNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5cbmNsYXNzIFRyYWNrIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBmcm9tOiAwLFxuICAgIHBhc3NpdmU6IHRydWVcbiAgfTtcblxuICBvblN0YXJ0KCkge1xuICAgIGNvbnN0IHsgaW5wdXQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5pbnB1dE9yaWdpbiA9IGlucHV0LmdldCgpO1xuICAgIGlucHV0LmFkZExpc3RlbmVyKHRoaXMudXBkYXRlKTtcbiAgfVxuXG4gIG9uU3RvcCgpIHtcbiAgICBjb25zdCB7IGlucHV0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlucHV0LnJlbW92ZUxpc3RlbmVyKHRoaXMudXBkYXRlKTtcbiAgfVxuXG4gIG9uVXBkYXRlKCkge1xuICAgIGNvbnN0IHsgaW5wdXQsIGZyb20gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgb2Zmc2V0ID0gaW5wdXQuZ2V0KCkgLSB0aGlzLmlucHV0T3JpZ2luO1xuICAgIHJldHVybiBmcm9tICsgb2Zmc2V0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICguLi5hcmdzKSA9PiB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IFsgcHJvcHMgXSA9IGFyZ3M7XG4gICAgcmV0dXJuIG5ldyBUcmFjayhwcm9wcyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgWyBpbnB1dCwgb25VcGRhdGUsIHByb3BzIF0gPSBhcmdzO1xuICAgIHJldHVybiBuZXcgVHJhY2soe1xuICAgICAgaW5wdXQsXG4gICAgICBvblVwZGF0ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSk7XG4gIH1cbn07XG4iXX0=

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
	    var _props = this.props,
	        acceleration = _props.acceleration,
	        autoStopSpeed = _props.autoStopSpeed,
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BoeXNpY3MuanMiXSwibmFtZXMiOlsiUGh5c2ljcyIsIm9uVXBkYXRlIiwicHJvcHMiLCJhY2NlbGVyYXRpb24iLCJhdXRvU3RvcFNwZWVkIiwiZnJpY3Rpb24iLCJ2ZWxvY2l0eSIsInNwcmluZyIsInRvIiwibmV3VmVsb2NpdHkiLCJlbGFwc2VkIiwidW5kZWZpbmVkIiwiZGlzdGFuY2VUb1RhcmdldCIsImN1cnJlbnQiLCJpc0FjdGlvbkNvbXBsZXRlIiwiTWF0aCIsImFicyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsTzs7Ozs7Ozs7O29CQVFKQyxRLHVCQUFXO0FBQUEsaUJBQytELEtBQUtDLEtBRHBFO0FBQUEsUUFDREMsWUFEQyxVQUNEQSxZQURDO0FBQUEsUUFDYUMsYUFEYixVQUNhQSxhQURiO0FBQUEsUUFDNEJDLFFBRDVCLFVBQzRCQSxRQUQ1QjtBQUFBLFFBQ3NDQyxRQUR0QyxVQUNzQ0EsUUFEdEM7QUFBQSxRQUNnREMsTUFEaEQsVUFDZ0RBLE1BRGhEO0FBQUEsUUFDd0RDLEVBRHhELFVBQ3dEQSxFQUR4RDs7QUFFVCxRQUFJQyxjQUFjSCxRQUFsQjtBQUNBLFFBQU1JLFVBQVUsb0NBQWhCOztBQUVBO0FBQ0EsUUFBSVAsWUFBSixFQUFrQjtBQUNoQk0scUJBQWUseUJBQWNOLFlBQWQsRUFBNEJPLE9BQTVCLENBQWY7QUFDRDs7QUFFRDtBQUNBLFFBQUlMLFFBQUosRUFBYztBQUNaSSw4QkFBZ0IsSUFBSUosUUFBcEIsRUFBa0NLLFVBQVUsR0FBNUM7QUFDRDs7QUFFRCxRQUFJSCxVQUFVQyxPQUFPRyxTQUFyQixFQUFnQztBQUM5QixVQUFNQyxtQkFBbUJKLEtBQUssS0FBS0ssT0FBbkM7QUFDQUoscUJBQWVHLG1CQUFtQix5QkFBY0wsTUFBZCxFQUFzQkcsT0FBdEIsQ0FBbEM7QUFDRDs7QUFFRDtBQUNBLFNBQUtHLE9BQUwsSUFBZ0IseUJBQWNKLFdBQWQsRUFBMkJDLE9BQTNCLENBQWhCO0FBQ0EsU0FBS1IsS0FBTCxDQUFXSSxRQUFYLEdBQXNCRyxXQUF0Qjs7QUFFQSxXQUFPLEtBQUtJLE9BQVo7QUFDRCxHOztvQkFFREMsZ0IsK0JBQW1CO0FBQ2pCLFdBQVEsQ0FBQyxLQUFLUixRQUFOLElBQWtCUyxLQUFLQyxHQUFMLENBQVMsS0FBS1YsUUFBZCxLQUEyQixLQUFLSixLQUFMLENBQVdFLGFBQWhFO0FBQ0QsRzs7Ozs7QUFyQ0dKLE8sQ0FDR2lCLFksR0FBZTtBQUNwQmQsZ0JBQWMsQ0FETTtBQUVwQkUsWUFBVSxDQUZVO0FBR3BCQyxZQUFVLENBSFU7QUFJcEJGLGlCQUFlO0FBSkssQzs7a0JBdUNULFVBQUNGLEtBQUQ7QUFBQSxTQUFXLElBQUlGLE9BQUosQ0FBWUUsS0FBWixDQUFYO0FBQUEsQyIsImZpbGUiOiJwaHlzaWNzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgeyB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuaW1wb3J0IHsgc3BlZWRQZXJGcmFtZSB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuY2xhc3MgUGh5c2ljcyBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWNjZWxlcmF0aW9uOiAwLFxuICAgIGZyaWN0aW9uOiAwLFxuICAgIHZlbG9jaXR5OiAwLFxuICAgIGF1dG9TdG9wU3BlZWQ6IDAuMDAxXG4gIH1cblxuICBvblVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGFjY2VsZXJhdGlvbiwgYXV0b1N0b3BTcGVlZCwgZnJpY3Rpb24sIHZlbG9jaXR5LCBzcHJpbmcsIHRvIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBuZXdWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgIGNvbnN0IGVsYXBzZWQgPSB0aW1lU2luY2VMYXN0RnJhbWUoKTtcblxuICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChhY2NlbGVyYXRpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9IHNwZWVkUGVyRnJhbWUoYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBmcmljdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChmcmljdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKj0gKDEgLSBmcmljdGlvbikgKiogKGVsYXBzZWQgLyAxMDApO1xuICAgIH1cblxuICAgIGlmIChzcHJpbmcgJiYgdG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZGlzdGFuY2VUb1RhcmdldCA9IHRvIC0gdGhpcy5jdXJyZW50O1xuICAgICAgbmV3VmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqIHNwZWVkUGVyRnJhbWUoc3ByaW5nLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB2ZWxvY2l0eVxuICAgIHRoaXMuY3VycmVudCArPSBzcGVlZFBlckZyYW1lKG5ld1ZlbG9jaXR5LCBlbGFwc2VkKTtcbiAgICB0aGlzLnByb3BzLnZlbG9jaXR5ID0gbmV3VmVsb2NpdHk7XG5cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gKCF0aGlzLnZlbG9jaXR5IHx8IE1hdGguYWJzKHRoaXMudmVsb2NpdHkpIDw9IHRoaXMucHJvcHMuYXV0b1N0b3BTcGVlZCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgUGh5c2ljcyhwcm9wcyk7Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BhcmFsbGVsLmpzIl0sIm5hbWVzIjpbIlBhcmFsbGVsIiwib25TdGFydCIsImFjdGlvbnMiLCJwcm9wcyIsIm51bUFjdGl2ZUFjdGlvbnMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiYWN0aW9uIiwic2V0UHJvcHMiLCJfb25TdG9wIiwic3RhcnQiLCJvblN0b3AiLCJzdG9wIiwiYWRkQWN0aW9uIiwiaW5kZXhPZiIsInB1c2giLCJpc0FjdGlvbkNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7Ozs7Ozs7cUJBQ0pDLE8sc0JBQVU7QUFBQTs7QUFBQSxRQUNBQyxPQURBLEdBQ1ksS0FBS0MsS0FEakIsQ0FDQUQsT0FEQTs7QUFFUixTQUFLRSxnQkFBTCxHQUF3QkYsUUFBUUcsTUFBaEM7O0FBRUFILFlBQVFJLE9BQVIsQ0FBZ0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzFCQSxhQUFPQyxRQUFQLENBQWdCO0FBQ2RDLGlCQUFTO0FBQUEsaUJBQU0sT0FBS0wsZ0JBQUwsRUFBTjtBQUFBO0FBREssT0FBaEIsRUFFR00sS0FGSDtBQUdELEtBSkQ7QUFLRCxHOztxQkFFREMsTSxxQkFBUztBQUNQLFNBQUtSLEtBQUwsQ0FBV0QsT0FBWCxDQUFtQkksT0FBbkIsQ0FBMkIsVUFBQ0MsTUFBRDtBQUFBLGFBQVlBLE9BQU9LLElBQVAsRUFBWjtBQUFBLEtBQTNCO0FBQ0QsRzs7cUJBRURDLFMsc0JBQVVOLE0sRUFBUTtBQUFBLFFBQ1JMLE9BRFEsR0FDSSxLQUFLQyxLQURULENBQ1JELE9BRFE7OztBQUdoQixRQUFJQSxRQUFRWSxPQUFSLENBQWdCUCxNQUFoQixNQUE0QixDQUFDLENBQWpDLEVBQW9DO0FBQ2xDTCxjQUFRYSxJQUFSLENBQWFSLE1BQWI7QUFDRDtBQUNGLEc7O3FCQUVEUyxnQiwrQkFBbUI7QUFDakIsV0FBUSxLQUFLWixnQkFBTCxLQUEwQixDQUFsQztBQUNELEc7Ozs7O2tCQUdZLFVBQUNGLE9BQUQ7QUFBQSxTQUFhLElBQUlGLFFBQUosQ0FBYSxFQUFFRSxnQkFBRixFQUFiLENBQWI7QUFBQSxDIiwiZmlsZSI6InBhcmFsbGVsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5cbmNsYXNzIFBhcmFsbGVsIGV4dGVuZHMgQWN0aW9uIHtcbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IGFjdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gYWN0aW9ucy5sZW5ndGg7XG5cbiAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xuICAgICAgYWN0aW9uLnNldFByb3BzKHtcbiAgICAgICAgX29uU3RvcDogKCkgPT4gdGhpcy5udW1BY3RpdmVBY3Rpb25zLS1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH1cblxuICBvblN0b3AoKSB7XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4gYWN0aW9uLnN0b3AoKSk7XG4gIH1cblxuICBhZGRBY3Rpb24oYWN0aW9uKSB7XG4gICAgY29uc3QgeyBhY3Rpb25zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGFjdGlvbnMuaW5kZXhPZihhY3Rpb24pID09PSAtMSkge1xuICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gKHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGFjdGlvbnMpID0+IG5ldyBQYXJhbGxlbCh7IGFjdGlvbnMgfSk7XG4iXX0=

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _value = __webpack_require__(28);
	
	var _value2 = _interopRequireDefault(_value);
	
	var _composite = __webpack_require__(12);
	
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
	    passive: true
	  }, props));
	
	  var updatePointer = function (e) {
	    if (props.preventDefault) {
	      e.preventDefault();
	    }
	
	    var points = eventToPoints(e);
	    pointer.x.set(points.x);
	    pointer.y.set(points.y);
	  };
	
	  pointer.setProps({
	    _onStart: function () {
	      return document.documentElement.addEventListener(moveEvent, updatePointer);
	    },
	    _onStop: function () {
	      return document.documentElement.removeEventListener(moveEvent, updatePointer);
	    }
	  });
	
	  return pointer;
	}
	
	var mouseEventToPoint = function (e) {
	  return {
	    x: e.pageX,
	    y: e.pageY
	  };
	};
	
	var touchEventToPoint = function (_ref3) {
	  var changedTouches = _ref3.changedTouches;
	  return {
	    x: changedTouches[0].clientX,
	    y: changedTouches[0].clientY
	  };
	};
	
	var getNativeEvent = function (e) {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BvaW50ZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlUG9pbnRlciIsIngiLCJ5IiwiZXZlbnRUb1BvaW50cyIsIm1vdmVFdmVudCIsInByb3BzIiwicG9pbnRlciIsInBhc3NpdmUiLCJ1cGRhdGVQb2ludGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9pbnRzIiwic2V0Iiwic2V0UHJvcHMiLCJfb25TdGFydCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9vblN0b3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibW91c2VFdmVudFRvUG9pbnQiLCJwYWdlWCIsInBhZ2VZIiwidG91Y2hFdmVudFRvUG9pbnQiLCJjaGFuZ2VkVG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwiZ2V0TmF0aXZlRXZlbnQiLCJvcmlnaW5hbEV2ZW50IiwibmF0aXZlRXZlbnQiLCJ0b3VjaGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztBQUVBLFNBQVNBLGFBQVQsY0FBeUU7QUFBQSxNQUFoREMsQ0FBZ0QsU0FBaERBLENBQWdEO0FBQUEsTUFBN0NDLENBQTZDLFNBQTdDQSxDQUE2Qzs7QUFBQSxNQUF0Q0MsYUFBc0MsUUFBdENBLGFBQXNDO0FBQUEsTUFBdkJDLFNBQXVCLFFBQXZCQSxTQUF1QjtBQUFBLE1BQVRDLEtBQVM7O0FBQ3ZFLE1BQU1DLFVBQVUseUJBQVU7QUFDeEJMLE9BQUcscUJBQU1BLENBQU4sQ0FEcUI7QUFFeEJDLE9BQUcscUJBQU1BLENBQU47QUFGcUIsR0FBVjtBQUlkSyxhQUFTO0FBSkssS0FLWEYsS0FMVyxFQUFoQjs7QUFRQSxNQUFNRyxnQkFBZ0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQzNCLFFBQUlKLE1BQU1LLGNBQVYsRUFBMEI7QUFDeEJELFFBQUVDLGNBQUY7QUFDRDs7QUFFRCxRQUFNQyxTQUFTUixjQUFjTSxDQUFkLENBQWY7QUFDQUgsWUFBUUwsQ0FBUixDQUFVVyxHQUFWLENBQWNELE9BQU9WLENBQXJCO0FBQ0FLLFlBQVFKLENBQVIsQ0FBVVUsR0FBVixDQUFjRCxPQUFPVCxDQUFyQjtBQUNELEdBUkQ7O0FBVUFJLFVBQVFPLFFBQVIsQ0FBaUI7QUFDZkMsY0FBVTtBQUFBLGFBQU1DLFNBQVNDLGVBQVQsQ0FBeUJDLGdCQUF6QixDQUEwQ2IsU0FBMUMsRUFBcURJLGFBQXJELENBQU47QUFBQSxLQURLO0FBRWZVLGFBQVM7QUFBQSxhQUFNSCxTQUFTQyxlQUFULENBQXlCRyxtQkFBekIsQ0FBNkNmLFNBQTdDLEVBQXdESSxhQUF4RCxDQUFOO0FBQUE7QUFGTSxHQUFqQjs7QUFLQSxTQUFPRixPQUFQO0FBQ0Q7O0FBRUQsSUFBTWMsb0JBQW9CLFVBQUNYLENBQUQ7QUFBQSxTQUFRO0FBQ2hDUixPQUFHUSxFQUFFWSxLQUQyQjtBQUVoQ25CLE9BQUdPLEVBQUVhO0FBRjJCLEdBQVI7QUFBQSxDQUExQjs7QUFLQSxJQUFNQyxvQkFBb0I7QUFBQSxNQUFHQyxjQUFILFNBQUdBLGNBQUg7QUFBQSxTQUF5QjtBQUNqRHZCLE9BQUd1QixlQUFlLENBQWYsRUFBa0JDLE9BRDRCO0FBRWpEdkIsT0FBR3NCLGVBQWUsQ0FBZixFQUFrQkU7QUFGNEIsR0FBekI7QUFBQSxDQUExQjs7QUFLQSxJQUFNQyxpQkFBaUIsVUFBQ2xCLENBQUQ7QUFBQSxTQUFPQSxFQUFFbUIsYUFBRixJQUFtQm5CLEVBQUVvQixXQUFyQixJQUFvQ3BCLENBQTNDO0FBQUEsQ0FBdkI7O2tCQUVlLFVBQUNBLENBQUQsRUFBSUosS0FBSixFQUFjO0FBQzNCLE1BQU13QixjQUFjRixlQUFlbEIsQ0FBZixDQUFwQjtBQUNBLFNBQVFvQixZQUFZQyxPQUFiLEdBQ0w5QixjQUFjdUIsa0JBQWtCZCxDQUFsQixDQUFkO0FBQ0VMLGVBQVcsV0FEYjtBQUVFRCxtQkFBZW9CO0FBRmpCLEtBR0tsQixLQUhMLEVBREssR0FNTEwsY0FBY29CLGtCQUFrQlgsQ0FBbEIsQ0FBZDtBQUNFTCxlQUFXLFdBRGI7QUFFRUQsbUJBQWVpQjtBQUZqQixLQUdLZixLQUhMLEVBTkY7QUFXRCxDIiwiZmlsZSI6InBvaW50ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFsdWUgZnJvbSAnLi92YWx1ZSc7XG5pbXBvcnQgY29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcblxuZnVuY3Rpb24gY3JlYXRlUG9pbnRlcih7IHgsIHkgfSwgeyBldmVudFRvUG9pbnRzLCBtb3ZlRXZlbnQsIC4uLnByb3BzIH0pIHtcbiAgY29uc3QgcG9pbnRlciA9IGNvbXBvc2l0ZSh7XG4gICAgeDogdmFsdWUoeCksXG4gICAgeTogdmFsdWUoeSlcbiAgfSwge1xuICAgIHBhc3NpdmU6IHRydWUsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG5cbiAgY29uc3QgdXBkYXRlUG9pbnRlciA9IChlKSA9PiB7XG4gICAgaWYgKHByb3BzLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRzID0gZXZlbnRUb1BvaW50cyhlKTtcbiAgICBwb2ludGVyLnguc2V0KHBvaW50cy54KTtcbiAgICBwb2ludGVyLnkuc2V0KHBvaW50cy55KTtcbiAgfTtcblxuICBwb2ludGVyLnNldFByb3BzKHtcbiAgICBfb25TdGFydDogKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVQb2ludGVyKSxcbiAgICBfb25TdG9wOiAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpXG4gIH0pO1xuXG4gIHJldHVybiBwb2ludGVyO1xufVxuXG5jb25zdCBtb3VzZUV2ZW50VG9Qb2ludCA9IChlKSA9PiAoe1xuICB4OiBlLnBhZ2VYLFxuICB5OiBlLnBhZ2VZXG59KTtcblxuY29uc3QgdG91Y2hFdmVudFRvUG9pbnQgPSAoeyBjaGFuZ2VkVG91Y2hlcyB9KSA9PiAoe1xuICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG59KTtcblxuY29uc3QgZ2V0TmF0aXZlRXZlbnQgPSAoZSkgPT4gZS5vcmlnaW5hbEV2ZW50IHx8IGUubmF0aXZlRXZlbnQgfHwgZTtcblxuZXhwb3J0IGRlZmF1bHQgKGUsIHByb3BzKSA9PiB7XG4gIGNvbnN0IG5hdGl2ZUV2ZW50ID0gZ2V0TmF0aXZlRXZlbnQoZSk7XG4gIHJldHVybiAobmF0aXZlRXZlbnQudG91Y2hlcykgP1xuICAgIGNyZWF0ZVBvaW50ZXIodG91Y2hFdmVudFRvUG9pbnQoZSksIHtcbiAgICAgIG1vdmVFdmVudDogJ3RvdWNobW92ZScsXG4gICAgICBldmVudFRvUG9pbnRzOiB0b3VjaEV2ZW50VG9Qb2ludCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSkgOlxuICAgIGNyZWF0ZVBvaW50ZXIobW91c2VFdmVudFRvUG9pbnQoZSksIHtcbiAgICAgIG1vdmVFdmVudDogJ21vdXNlbW92ZScsXG4gICAgICBldmVudFRvUG9pbnRzOiBtb3VzZUV2ZW50VG9Qb2ludCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSk7XG59O1xuIl19

/***/ },
/* 9 */
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
	    var _props = this.props,
	        i = _props.i,
	        order = _props.order;
	
	    if (i < order.length - 1) {
	      this.props.i++;
	      this.playCurrent();
	    }
	  };
	
	  Chain.prototype.playCurrent = function playCurrent() {
	    var _props2 = this.props,
	        i = _props2.i,
	        order = _props2.order;
	
	    order[i].onComplete = this.playNext;
	    order[i].start();
	  };
	
	  Chain.prototype.onStop = function onStop() {
	    var _props3 = this.props,
	        i = _props3.i,
	        order = _props3.order;
	
	    order[i].stop();
	  };
	
	  return Chain;
	}(_2.default);
	
	exports.default = function (order) {
	  return new Chain({ order: order });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NoYWluLmpzIl0sIm5hbWVzIjpbIkNoYWluIiwicHJvcHMiLCJwbGF5TmV4dCIsImJpbmQiLCJvblN0YXJ0IiwiaSIsInBsYXlDdXJyZW50Iiwib3JkZXIiLCJsZW5ndGgiLCJvbkNvbXBsZXRlIiwic3RhcnQiLCJvblN0b3AiLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixtQkFBTUEsS0FBTixDQURpQjs7QUFFakIsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsT0FBaEI7QUFGaUI7QUFHbEI7O2tCQUVEQyxPLHNCQUFVO0FBQ1IsU0FBS0gsS0FBTCxDQUFXSSxDQUFYLEdBQWUsQ0FBZjtBQUNBLFNBQUtDLFdBQUw7QUFDRCxHOztrQkFFREosUSx1QkFBVztBQUFBLGlCQUNZLEtBQUtELEtBRGpCO0FBQUEsUUFDREksQ0FEQyxVQUNEQSxDQURDO0FBQUEsUUFDRUUsS0FERixVQUNFQSxLQURGOztBQUVULFFBQUlGLElBQUlFLE1BQU1DLE1BQU4sR0FBZSxDQUF2QixFQUEwQjtBQUN4QixXQUFLUCxLQUFMLENBQVdJLENBQVg7QUFDQSxXQUFLQyxXQUFMO0FBQ0Q7QUFDRixHOztrQkFFREEsVywwQkFBYztBQUFBLGtCQUNTLEtBQUtMLEtBRGQ7QUFBQSxRQUNKSSxDQURJLFdBQ0pBLENBREk7QUFBQSxRQUNERSxLQURDLFdBQ0RBLEtBREM7O0FBRVpBLFVBQU1GLENBQU4sRUFBU0ksVUFBVCxHQUFzQixLQUFLUCxRQUEzQjtBQUNBSyxVQUFNRixDQUFOLEVBQVNLLEtBQVQ7QUFDRCxHOztrQkFFREMsTSxxQkFBUztBQUFBLGtCQUNjLEtBQUtWLEtBRG5CO0FBQUEsUUFDQ0ksQ0FERCxXQUNDQSxDQUREO0FBQUEsUUFDSUUsS0FESixXQUNJQSxLQURKOztBQUVQQSxVQUFNRixDQUFOLEVBQVNPLElBQVQ7QUFDRCxHOzs7OztrQkFHWSxVQUFDTCxLQUFEO0FBQUEsU0FBVyxJQUFJUCxLQUFKLENBQVUsRUFBRU8sWUFBRixFQUFWLENBQVg7QUFBQSxDIiwiZmlsZSI6ImNoYWluLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5cbmNsYXNzIENoYWluIGV4dGVuZHMgQWN0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wbGF5TmV4dCA9IHRoaXMucGxheU5leHQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pID0gMDtcbiAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gIH1cblxuICBwbGF5TmV4dCgpIHtcbiAgICBjb25zdCB7IGksIG9yZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpIDwgb3JkZXIubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5wcm9wcy5pKys7XG4gICAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gICAgfVxuICB9XG5cbiAgcGxheUN1cnJlbnQoKSB7XG4gICAgY29uc3QgeyBpLCBvcmRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBvcmRlcltpXS5vbkNvbXBsZXRlID0gdGhpcy5wbGF5TmV4dDtcbiAgICBvcmRlcltpXS5zdGFydCgpO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIGNvbnN0IHsgaSwgb3JkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgb3JkZXJbaV0uc3RvcCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChvcmRlcikgPT4gbmV3IENoYWluKHsgb3JkZXIgfSk7XG4iXX0=

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _tween = __webpack_require__(4);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (duration) {
	  return (0, _tween2.default)({ duration: duration });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2RlbGF5LmpzIl0sIm5hbWVzIjpbImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7OztrQkFFZSxVQUFDQSxRQUFEO0FBQUEsU0FBYyxxQkFBTSxFQUFFQSxrQkFBRixFQUFOLENBQWQ7QUFBQSxDIiwiZmlsZSI6ImRlbGF5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR3ZWVuIGZyb20gJy4vdHdlZW4nO1xuXG5leHBvcnQgZGVmYXVsdCAoZHVyYXRpb24pID0+IHR3ZWVuKHsgZHVyYXRpb24gfSk7XG4iXX0=

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(15);
	
	var _2 = _interopRequireDefault(_);
	
	var _tween = __webpack_require__(4);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	var _easing = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../easing\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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
	
	  CrossFade.prototype.onUpdate = function onUpdate() {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanMiXSwibmFtZXMiOlsiQ3Jvc3NGYWRlIiwib25TdGFydCIsInByb3BzIiwiZHVyYXRpb24iLCJlYXNlIiwiZmFkZXIiLCJ0byIsInN0YXJ0Iiwib25VcGRhdGUiLCJmcm9tIiwiYmFsYW5jZSIsImdldCIsImxhdGVzdEZyb21WYWx1ZSIsImxhdGVzdFRvVmFsdWUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsUzs7Ozs7Ozs7O3NCQUtKQyxPLHNCQUFVO0FBQUEsaUJBQzBCLEtBQUtDLEtBRC9CO0FBQUEsUUFDQUMsUUFEQSxVQUNBQSxRQURBO0FBQUEsUUFDVUMsSUFEVixVQUNVQSxJQURWO0FBQUEsUUFDZ0JDLEtBRGhCLFVBQ2dCQSxLQURoQjs7O0FBR1IsU0FBS0EsS0FBTCxHQUFhQSxTQUFTLHFCQUFNO0FBQzFCQyxVQUFJLENBRHNCO0FBRTFCSCx3QkFGMEI7QUFHMUJDO0FBSDBCLEtBQU4sRUFJbkJHLEtBSm1CLEVBQXRCO0FBS0QsRzs7c0JBRURDLFEsdUJBQVc7QUFBQSxrQkFDWSxLQUFLTixLQURqQjtBQUFBLFFBQ0RPLElBREMsV0FDREEsSUFEQztBQUFBLFFBQ0tILEVBREwsV0FDS0EsRUFETDs7QUFFVCxRQUFNSSxVQUFVLEtBQUtMLEtBQUwsQ0FBV00sR0FBWCxFQUFoQjtBQUNBLFFBQU1DLGtCQUFrQkgsS0FBS0UsR0FBTCxFQUF4QjtBQUNBLFFBQU1FLGdCQUFnQlAsR0FBR0ssR0FBSCxFQUF0QjtBQUNBLFdBQU8sZ0NBQXFCQyxlQUFyQixFQUFzQ0MsYUFBdEMsRUFBcURILE9BQXJELENBQVA7QUFDRCxHOzs7OztBQXJCR1YsUyxDQUNHYyxZLEdBQWU7QUFDcEJWO0FBRG9CLEM7O2tCQXVCVCxVQUFDRixLQUFEO0FBQUEsU0FBVyxJQUFJRixTQUFKLENBQWNFLEtBQWQsQ0FBWDtBQUFBLEMiLCJmaWxlIjoiY3Jvc3MtZmFkZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHR3ZWVuIGZyb20gJy4vdHdlZW4nO1xuaW1wb3J0IHsgbGluZWFyIH0gZnJvbSAnLi4vZWFzaW5nJztcbmltcG9ydCB7IGdldFZhbHVlRnJvbVByb2dyZXNzIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jbGFzcyBDcm9zc0ZhZGUgZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGVhc2U6IGxpbmVhclxuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IGR1cmF0aW9uLCBlYXNlLCBmYWRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuZmFkZXIgPSBmYWRlciB8fCB0d2Vlbih7XG4gICAgICB0bzogMSxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgZWFzZVxuICAgIH0pLnN0YXJ0KCk7XG4gIH1cblxuICBvblVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGZyb20sIHRvIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGJhbGFuY2UgPSB0aGlzLmZhZGVyLmdldCgpO1xuICAgIGNvbnN0IGxhdGVzdEZyb21WYWx1ZSA9IGZyb20uZ2V0KCk7XG4gICAgY29uc3QgbGF0ZXN0VG9WYWx1ZSA9IHRvLmdldCgpO1xuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhsYXRlc3RGcm9tVmFsdWUsIGxhdGVzdFRvVmFsdWUsIGJhbGFuY2UpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gbmV3IENyb3NzRmFkZShwcm9wcyk7XG4iXX0=

/***/ },
/* 12 */
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
	
	    var actions = props.actions,
	        remainingProps = _objectWithoutProperties(props, ['actions']);
	
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
	
	      var onUpdate = function (v, action) {
	        return _this2.current[key] = action.get();
	      };
	
	      _this2[key].setProps({
	        _onStop: function () {
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
	
	exports.default = function (actions, props) {
	  return new CompositeAction(_extends({
	    actions: actions
	  }, props));
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qcyJdLCJuYW1lcyI6WyJDb21wb3NpdGVBY3Rpb24iLCJwcm9wcyIsImFjdGlvbnMiLCJyZW1haW5pbmdQcm9wcyIsImN1cnJlbnQiLCJhY3Rpb25LZXlzIiwiYWRkQWN0aW9ucyIsImtleSIsImluZGV4T2YiLCJwdXNoIiwib25VcGRhdGUiLCJ2IiwiYWN0aW9uIiwiZ2V0Iiwic2V0UHJvcHMiLCJfb25TdG9wIiwibnVtQWN0aXZlQWN0aW9ucyIsImFkZExpc3RlbmVyIiwib25TdGFydCIsImxlbmd0aCIsImZvckVhY2giLCJzdGFydCIsIm9uU3RvcCIsInN0b3AiLCJnZXRWZWxvY2l0eSIsInZlbG9jaXR5IiwiaXNBY3Rpb25Db21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGU7OztBQUNKLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsUUFDVEMsT0FEUyxHQUNzQkQsS0FEdEIsQ0FDVEMsT0FEUztBQUFBLFFBQ0dDLGNBREgsNEJBQ3NCRixLQUR0Qjs7QUFBQSxpREFFakIsbUJBQU1FLGNBQU4sQ0FGaUI7O0FBR2pCLFVBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFVBQUtDLFVBQUwsQ0FBZ0JMLE1BQU1DLE9BQXRCO0FBTGlCO0FBTWxCOzs0QkFFREksVSx1QkFBV0osTyxFQUFTO0FBQUE7O0FBQUEsMEJBQ1BLLEdBRE87QUFFaEIsVUFBSSxPQUFLRixVQUFMLENBQWdCRyxPQUFoQixDQUF3QkQsR0FBeEIsTUFBaUMsQ0FBQyxDQUF0QyxFQUF5QztBQUN2QyxlQUFLRixVQUFMLENBQWdCSSxJQUFoQixDQUFxQkYsR0FBckI7QUFDRDs7QUFFRCxhQUFLQSxHQUFMLElBQVlMLFFBQVFLLEdBQVIsQ0FBWjs7QUFFQSxVQUFNRyxXQUFXLFVBQUNDLENBQUQsRUFBSUMsTUFBSjtBQUFBLGVBQWUsT0FBS1IsT0FBTCxDQUFhRyxHQUFiLElBQW9CSyxPQUFPQyxHQUFQLEVBQW5DO0FBQUEsT0FBakI7O0FBRUEsYUFBS04sR0FBTCxFQUNHTyxRQURILENBQ1k7QUFDUkMsaUJBQVM7QUFBQSxpQkFBTSxPQUFLQyxnQkFBTCxFQUFOO0FBQUE7QUFERCxPQURaLEVBSUdDLFdBSkgsQ0FJZVAsUUFKZjtBQVZnQjs7QUFDbEIsU0FBSyxJQUFNSCxHQUFYLElBQWtCTCxPQUFsQixFQUEyQjtBQUFBLFlBQWhCSyxHQUFnQjtBQWMxQjtBQUNGLEc7OzRCQUVEVyxPLHNCQUFVO0FBQUE7O0FBQ1IsU0FBS0YsZ0JBQUwsR0FBd0IsS0FBS1gsVUFBTCxDQUFnQmMsTUFBeEM7QUFDQSxTQUFLZCxVQUFMLENBQWdCZSxPQUFoQixDQUF3QixVQUFDYixHQUFEO0FBQUEsYUFBUyxPQUFLQSxHQUFMLEVBQVVjLEtBQVYsRUFBVDtBQUFBLEtBQXhCO0FBQ0QsRzs7NEJBRURDLE0scUJBQVM7QUFBQTs7QUFDUCxTQUFLakIsVUFBTCxDQUFnQmUsT0FBaEIsQ0FBd0IsVUFBQ2IsR0FBRDtBQUFBLGFBQVMsT0FBS0EsR0FBTCxFQUFVZ0IsSUFBVixFQUFUO0FBQUEsS0FBeEI7QUFDRCxHOzs0QkFFREMsVywwQkFBYztBQUFBOztBQUNaLFFBQU1DLFdBQVcsRUFBakI7QUFDQSxTQUFLcEIsVUFBTCxDQUFnQmUsT0FBaEIsQ0FBd0IsVUFBQ2IsR0FBRDtBQUFBLGFBQVNrQixTQUFTbEIsR0FBVCxJQUFnQixPQUFLQSxHQUFMLEVBQVVpQixXQUFWLEVBQXpCO0FBQUEsS0FBeEI7QUFDQSxXQUFPQyxRQUFQO0FBQ0QsRzs7NEJBRURDLGdCLCtCQUFtQjtBQUNqQixXQUFRLEtBQUtWLGdCQUFMLEtBQTBCLENBQWxDO0FBQ0QsRzs7Ozs7a0JBR1ksVUFBQ2QsT0FBRCxFQUFVRCxLQUFWLEVBQW9CO0FBQ2pDLFNBQU8sSUFBSUQsZUFBSjtBQUNMRTtBQURLLEtBRUZELEtBRkUsRUFBUDtBQUlELEMiLCJmaWxlIjoiY29tcG9zaXRlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5cbmNsYXNzIENvbXBvc2l0ZUFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgY29uc3QgeyBhY3Rpb25zLCAuLi5yZW1haW5pbmdQcm9wcyB9ID0gcHJvcHM7XG4gICAgc3VwZXIocmVtYWluaW5nUHJvcHMpO1xuICAgIHRoaXMuY3VycmVudCA9IHt9O1xuICAgIHRoaXMuYWN0aW9uS2V5cyA9IFtdO1xuICAgIHRoaXMuYWRkQWN0aW9ucyhwcm9wcy5hY3Rpb25zKTtcbiAgfVxuXG4gIGFkZEFjdGlvbnMoYWN0aW9ucykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGFjdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLmFjdGlvbktleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICB0aGlzLmFjdGlvbktleXMucHVzaChrZXkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzW2tleV0gPSBhY3Rpb25zW2tleV07XG5cbiAgICAgIGNvbnN0IG9uVXBkYXRlID0gKHYsIGFjdGlvbikgPT4gdGhpcy5jdXJyZW50W2tleV0gPSBhY3Rpb24uZ2V0KCk7XG5cbiAgICAgIHRoaXNba2V5XVxuICAgICAgICAuc2V0UHJvcHMoe1xuICAgICAgICAgIF9vblN0b3A6ICgpID0+IHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tXG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRMaXN0ZW5lcihvblVwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSB0aGlzLmFjdGlvbktleXMubGVuZ3RoO1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKChrZXkpID0+IHRoaXNba2V5XS5zdGFydCgpKTtcbiAgfVxuXG4gIG9uU3RvcCgpIHtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaCgoa2V5KSA9PiB0aGlzW2tleV0uc3RvcCgpKTtcbiAgfVxuXG4gIGdldFZlbG9jaXR5KCkge1xuICAgIGNvbnN0IHZlbG9jaXR5ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goKGtleSkgPT4gdmVsb2NpdHlba2V5XSA9IHRoaXNba2V5XS5nZXRWZWxvY2l0eSgpKTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH1cblxuICBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiAodGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoYWN0aW9ucywgcHJvcHMpID0+IHtcbiAgcmV0dXJuIG5ldyBDb21wb3NpdGVBY3Rpb24oe1xuICAgIGFjdGlvbnMsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG59O1xuIl19

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
	var _onNextFrame = __webpack_require__(19);
	
	var _onNextFrame2 = _interopRequireDefault(_onNextFrame);
	
	var _createRenderStep = __webpack_require__(20);
	
	var _createRenderStep2 = _interopRequireDefault(_createRenderStep);
	
	var _utils = __webpack_require__(18);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvaW5kZXguanMiXSwibmFtZXMiOlsid2lsbFJlbmRlck5leHRGcmFtZSIsIk1BWF9FTEFQU0VEIiwiY3VycmVudEZyYW1lc3RhbXAiLCJlbGFwc2VkIiwiZGlsYXRpb24iLCJzdGFydFJlbmRlckxvb3AiLCJwcm9jZXNzRnJhbWUiLCJmcmFtZVN0YXJ0IiwiZnJhbWVVcGRhdGUiLCJmcmFtZVJlbmRlciIsImZyYW1lRW5kIiwiZnJhbWVzdGFtcCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJwcm9jZXNzIiwib25GcmFtZVN0YXJ0Iiwic2NoZWR1bGUiLCJvbkZyYW1lVXBkYXRlIiwib25GcmFtZVJlbmRlciIsIm9uRnJhbWVFbmQiLCJjYW5jZWxPbkZyYW1lU3RhcnQiLCJjYW5jZWwiLCJjYW5jZWxPbkZyYW1lVXBkYXRlIiwiY2FuY2VsT25GcmFtZVJlbmRlciIsImNhbmNlbE9uRnJhbWVFbmQiLCJ0aW1lU2luY2VMYXN0RnJhbWUiLCJjdXJyZW50RnJhbWVUaW1lc3RhbXAiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBSUEsc0JBQXNCLEtBQTFCOztBQUVBOzs7O0FBSUEsSUFBTUMsY0FBYyxFQUFwQjs7QUFFQTs7OztBQUlBLElBQUlDLG9CQUFvQix5QkFBeEI7O0FBRUEsSUFBSUMsVUFBVSxDQUFkOztBQUVBOzs7OztBQUtBLElBQUlDLFdBQVcsQ0FBZjs7QUFFQSxTQUFTQyxlQUFULEdBQTJCO0FBQ3pCLE1BQUksQ0FBQ0wsbUJBQUwsRUFBMEI7QUFDeEJBLDBCQUFzQixJQUF0QjtBQUNBLCtCQUFZTSxZQUFaO0FBQ0Q7QUFDRjs7QUFFRCxJQUFNQyxhQUFhLGdDQUFpQkYsZUFBakIsQ0FBbkI7QUFDQSxJQUFNRyxjQUFjLGdDQUFpQkgsZUFBakIsQ0FBcEI7QUFDQSxJQUFNSSxjQUFjLGdDQUFpQkosZUFBakIsQ0FBcEI7QUFDQSxJQUFNSyxXQUFXLGdDQUFpQkwsZUFBakIsQ0FBakI7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkssVUFBdEIsRUFBa0M7QUFDaENYLHdCQUFzQixLQUF0QjtBQUNBRyxZQUFVUyxLQUFLQyxHQUFMLENBQVNELEtBQUtFLEdBQUwsQ0FBU0gsYUFBYVQsaUJBQXRCLEVBQXlDRCxXQUF6QyxDQUFULEVBQWdFLENBQWhFLElBQXFFRyxRQUEvRTtBQUNBRixzQkFBb0JTLFVBQXBCOztBQUVBSixhQUFXUSxPQUFYO0FBQ0FQLGNBQVlPLE9BQVo7QUFDQU4sY0FBWU0sT0FBWjtBQUNBTCxXQUFTSyxPQUFUO0FBQ0Q7O0FBRU0sSUFBTUMsc0NBQWVULFdBQVdVLFFBQWhDO0FBQ0EsSUFBTUMsd0NBQWdCVixZQUFZUyxRQUFsQztBQUNBLElBQU1FLHdDQUFnQlYsWUFBWVEsUUFBbEM7QUFDQSxJQUFNRyxrQ0FBYVYsU0FBU08sUUFBNUI7QUFDQSxJQUFNSSxrREFBcUJkLFdBQVdlLE1BQXRDO0FBQ0EsSUFBTUMsb0RBQXNCZixZQUFZYyxNQUF4QztBQUNBLElBQU1FLG9EQUFzQmYsWUFBWWEsTUFBeEM7QUFDQSxJQUFNRyw4Q0FBbUJmLFNBQVNZLE1BQWxDOztBQUVBLElBQU1JLGtEQUFxQjtBQUFBLFNBQU12QixPQUFOO0FBQUEsQ0FBM0I7QUFDQSxJQUFNd0Isd0RBQXdCO0FBQUEsU0FBTXpCLGlCQUFOO0FBQUEsQ0FBOUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb25OZXh0RnJhbWUgZnJvbSAnLi9vbi1uZXh0LWZyYW1lJztcbmltcG9ydCBjcmVhdGVSZW5kZXJTdGVwIGZyb20gJy4vY3JlYXRlLXJlbmRlci1zdGVwJztcbmltcG9ydCB7IGN1cnJlbnRUaW1lIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxubGV0IHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcblxuLyoqXG4gKiBNYXhpbXVtIHBlcm1pdHRlZCBtcyBzaW5jZSBsYXN0IGZyYW1lXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG5jb25zdCBNQVhfRUxBUFNFRCA9IDIwO1xuXG4vKipcbiAqIEN1cnJlbnQgZnJhbWVzdGFtcFxuICogQHR5cGUge051bWJlcn1cbiAqL1xubGV0IGN1cnJlbnRGcmFtZXN0YW1wID0gY3VycmVudFRpbWUoKTtcblxubGV0IGVsYXBzZWQgPSAwO1xuXG4vKipcbiAqIEZhY3RvciB0byBtdWx0aXBseSBgZWxhcHNlZGAgYnkgLSBcbiAqIDAuNSB3b3VsZCBiZSBzbG93IG1vdGlvbiwgMiB3b3VsZCBiZSBmYXN0XG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG5sZXQgZGlsYXRpb24gPSAxO1xuXG5mdW5jdGlvbiBzdGFydFJlbmRlckxvb3AoKSB7XG4gIGlmICghd2lsbFJlbmRlck5leHRGcmFtZSkge1xuICAgIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSB0cnVlO1xuICAgIG9uTmV4dEZyYW1lKHByb2Nlc3NGcmFtZSk7XG4gIH1cbn1cblxuY29uc3QgZnJhbWVTdGFydCA9IGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKTtcbmNvbnN0IGZyYW1lVXBkYXRlID0gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApO1xuY29uc3QgZnJhbWVSZW5kZXIgPSBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCk7XG5jb25zdCBmcmFtZUVuZCA9IGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKTtcblxuZnVuY3Rpb24gcHJvY2Vzc0ZyYW1lKGZyYW1lc3RhbXApIHtcbiAgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnRGcmFtZXN0YW1wLCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gIGN1cnJlbnRGcmFtZXN0YW1wID0gZnJhbWVzdGFtcDtcblxuICBmcmFtZVN0YXJ0LnByb2Nlc3MoKTtcbiAgZnJhbWVVcGRhdGUucHJvY2VzcygpO1xuICBmcmFtZVJlbmRlci5wcm9jZXNzKCk7XG4gIGZyYW1lRW5kLnByb2Nlc3MoKTtcbn1cblxuZXhwb3J0IGNvbnN0IG9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuc2NoZWR1bGU7XG5leHBvcnQgY29uc3Qgb25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLnNjaGVkdWxlO1xuZXhwb3J0IGNvbnN0IG9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5zY2hlZHVsZTtcbmV4cG9ydCBjb25zdCBvbkZyYW1lRW5kID0gZnJhbWVFbmQuc2NoZWR1bGU7XG5leHBvcnQgY29uc3QgY2FuY2VsT25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5jYW5jZWw7XG5leHBvcnQgY29uc3QgY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLmNhbmNlbDtcbmV4cG9ydCBjb25zdCBjYW5jZWxPbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuY2FuY2VsO1xuZXhwb3J0IGNvbnN0IGNhbmNlbE9uRnJhbWVFbmQgPSBmcmFtZUVuZC5jYW5jZWw7XG5cbmV4cG9ydCBjb25zdCB0aW1lU2luY2VMYXN0RnJhbWUgPSAoKSA9PiBlbGFwc2VkO1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9ICgpID0+IGN1cnJlbnRGcmFtZXN0YW1wO1xuIl19

/***/ },
/* 14 */,
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
	    var _props = this.props,
	        onStart = _props.onStart,
	        _onStart = _props._onStart,
	        passive = _props.passive;
	
	
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
	    var _props2 = this.props,
	        onStop = _props2.onStop,
	        _onStop = _props2._onStop,
	        passive = _props2.passive;
	
	
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
	    var _props3 = this.props,
	        onComplete = _props3.onComplete,
	        _onComplete = _props3._onComplete;
	
	
	    if (this.onComplete) this.onComplete();
	    if (onComplete) onComplete(this);
	    if (_onComplete) _onComplete(this);
	
	    this.stop();
	
	    return this;
	  };
	
	  Action.prototype.update = function update() {
	    this.lastUpdated = (0, _framesync.timeSinceLastFrame)();
	    this.prev = this.current;
	
	    var _props4 = this.props,
	        onUpdate = _props4.onUpdate,
	        passive = _props4.passive;
	
	
	    if (this.onUpdate) {
	      this.current = this.onUpdate();
	    }
	
	    if (onUpdate) onUpdate(this.current, this);
	    this.fireListeners();
	
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
	    return this;
	  };
	
	  Action.prototype.get = function get() {
	    return this.current;
	  };
	
	  Action.prototype.getVelocity = function getVelocity() {
	    return (0, _calc.speedPerSecond)(this.prev - this.current, this.lastUpdated);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFjdGlvbiIsInByb3BzIiwidXBkYXRlIiwiYmluZCIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdFByb3BzIiwic2V0UHJvcHMiLCJjdXJyZW50Iiwic3RhcnQiLCJvblN0YXJ0IiwiX29uU3RhcnQiLCJwYXNzaXZlIiwiaXNBY3RpdmUiLCJzdG9wIiwib25TdG9wIiwiX29uU3RvcCIsImNvbXBsZXRlIiwib25Db21wbGV0ZSIsIl9vbkNvbXBsZXRlIiwibGFzdFVwZGF0ZWQiLCJwcmV2Iiwib25VcGRhdGUiLCJmaXJlTGlzdGVuZXJzIiwiaXNBY3Rpb25Db21wbGV0ZSIsImdldCIsImdldFZlbG9jaXR5IiwiYWRkTGlzdGVuZXIiLCJsaXN0ZW5lciIsImxpc3RlbmVycyIsIm51bUxpc3RlbmVycyIsImluZGV4T2YiLCJwdXNoIiwicmVtb3ZlTGlzdGVuZXIiLCJsaXN0ZW5lckluZGV4Iiwic3BsaWNlIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUFFTUEsTTtBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtDLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBZDs7QUFFQSxTQUFLRixLQUFMLGdCQUNLLEtBQUtHLFdBQUwsQ0FBaUJDLFlBRHRCOztBQUlBLFNBQUtDLFFBQUwsQ0FBY0wsS0FBZDs7QUFFQSxTQUFLTSxPQUFMLEdBQWVOLE1BQU1NLE9BQU4sSUFBaUIsQ0FBaEM7QUFDRDs7bUJBRURDLEssb0JBQVE7QUFBQSxpQkFDaUMsS0FBS1AsS0FEdEM7QUFBQSxRQUNFUSxPQURGLFVBQ0VBLE9BREY7QUFBQSxRQUNXQyxRQURYLFVBQ1dBLFFBRFg7QUFBQSxRQUNxQkMsT0FEckIsVUFDcUJBLE9BRHJCOzs7QUFHTixRQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaLFdBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxv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RCxDQUFDLENBQTdFO0FBQ0EsUUFBSU0sa0JBQWtCLENBQUMsQ0FBdkIsRUFBMEI7QUFDeEIsV0FBS0osWUFBTDtBQUNBLFdBQUtELFNBQUwsQ0FBZU0sTUFBZixDQUFzQkQsYUFBdEIsRUFBcUMsQ0FBckM7QUFDRDtBQUNELFdBQU8sSUFBUDtBQUNELEc7O21CQUVEWCxhLDRCQUFnQjtBQUNkLFFBQU1mLFVBQVUsS0FBS2lCLEdBQUwsRUFBaEI7QUFDQSxTQUFLLElBQUlXLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLTixZQUF6QixFQUF1Q00sR0FBdkMsRUFBNEM7QUFDMUMsV0FBS1AsU0FBTCxDQUFlTyxDQUFmLEVBQWtCNUIsT0FBbEIsRUFBMkIsSUFBM0I7QUFDRDtBQUNELFdBQU8sSUFBUDtBQUNELEc7Ozs7O2tCQUdZUCxNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb25GcmFtZVVwZGF0ZSwgY2FuY2VsT25GcmFtZVVwZGF0ZSwgdGltZVNpbmNlTGFzdEZyYW1lIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcbmltcG9ydCB7IHNwZWVkUGVyU2Vjb25kIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jbGFzcyBBY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wc1xuICAgIH07XG5cbiAgICB0aGlzLnNldFByb3BzKHByb3BzKTtcblxuICAgIHRoaXMuY3VycmVudCA9IHByb3BzLmN1cnJlbnQgfHwgMDtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGNvbnN0IHsgb25TdGFydCwgX29uU3RhcnQsIHBhc3NpdmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgb25GcmFtZVVwZGF0ZSh0aGlzLnVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdGFydCkgdGhpcy5vblN0YXJ0KCk7XG4gICAgaWYgKG9uU3RhcnQpIG9uU3RhcnQodGhpcyk7XG4gICAgaWYgKF9vblN0YXJ0KSBfb25TdGFydCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBjb25zdCB7IG9uU3RvcCwgX29uU3RvcCwgcGFzc2l2ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgY2FuY2VsT25GcmFtZVVwZGF0ZSh0aGlzLnVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdG9wKSB0aGlzLm9uU3RvcCgpO1xuICAgIGlmIChvblN0b3ApIG9uU3RvcCh0aGlzKTtcbiAgICBpZiAoX29uU3RvcCkgX29uU3RvcCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgY29uc3QgeyBvbkNvbXBsZXRlLCBfb25Db21wbGV0ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKHRoaXMpO1xuICAgIGlmIChfb25Db21wbGV0ZSkgX29uQ29tcGxldGUodGhpcyk7XG5cbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSB0aW1lU2luY2VMYXN0RnJhbWUoKTtcbiAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICBjb25zdCB7IG9uVXBkYXRlLCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHRoaXMub25VcGRhdGUpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMub25VcGRhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAob25VcGRhdGUpIG9uVXBkYXRlKHRoaXMuY3VycmVudCwgdGhpcyk7XG4gICAgdGhpcy5maXJlTGlzdGVuZXJzKCk7XG5cbiAgICBpZiAoIXBhc3NpdmUgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgb25GcmFtZVVwZGF0ZSh0aGlzLnVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiB0aGlzLmlzQWN0aW9uQ29tcGxldGUoKSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0UHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0ge1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9XG5cbiAgZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuIHNwZWVkUGVyU2Vjb25kKHRoaXMucHJldiAtIHRoaXMuY3VycmVudCwgdGhpcy5sYXN0VXBkYXRlZCk7XG4gIH1cblxuICBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMgfHwgW107XG4gICAgdGhpcy5udW1MaXN0ZW5lcnMgPSB0aGlzLm51bUxpc3RlbmVycyB8fCAwO1xuICAgIGlmICh0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMrKztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGNvbnN0IGxpc3RlbmVySW5kZXggPSAodGhpcy5saXN0ZW5lcnMpID8gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgOiAtMTtcbiAgICBpZiAobGlzdGVuZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzLS07XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UobGlzdGVuZXJJbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZmlyZUxpc3RlbmVycygpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5nZXQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtTGlzdGVuZXJzOyBpKyspIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzW2ldKGN1cnJlbnQsIHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XG4iXX0=

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _framesync = __webpack_require__(13);
	
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
	
	  Renderer.prototype.setValue = function setValue(key, value) {
	    if (this.state[key] !== value) {
	      this.hasChanged = true;
	      this.changedValues.push(key);
	      this.state[key] = value;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiUmVuZGVyZXIiLCJwcm9wcyIsInJlbmRlciIsImJpbmQiLCJjb25zdHJ1Y3RvciIsImRlZmF1bHRQcm9wcyIsInN0YXRlIiwiY2hhbmdlZFZhbHVlcyIsImdldCIsImtleSIsInVuZGVmaW5lZCIsInJlYWQiLCJvblJlYWQiLCJzZXQiLCJhcmdzIiwidmFsdWVzIiwic2V0VmFsdWUiLCJ2YWx1ZSIsImhhc0NoYW5nZWQiLCJwdXNoIiwiZm9yY2VSZW5kZXIiLCJvblJlbmRlciIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7SUFFTUEsUTtBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtDLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBZDs7QUFFQSxTQUFLRixLQUFMLGdCQUNLLEtBQUtHLFdBQUwsQ0FBaUJDLFlBRHRCLEVBRUtKLEtBRkw7O0FBS0EsU0FBS0ssS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7cUJBUUFDLEcsZ0JBQUlDLEcsRUFBSztBQUNQLFFBQUlBLEdBQUosRUFBUztBQUNQLFVBQUksS0FBS0gsS0FBTCxDQUFXRyxHQUFYLE1BQW9CQyxTQUF4QixFQUFtQztBQUNqQyxlQUFPLEtBQUtKLEtBQUwsQ0FBV0csR0FBWCxDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTyxLQUFLRSxJQUFMLENBQVVGLEdBQVYsQ0FBUDtBQUNEO0FBQ0YsS0FORCxNQU1PO0FBQ0wsYUFBTyxLQUFLSCxLQUFaO0FBQ0Q7QUFDRixHOztBQUVEOzs7Ozs7O3FCQUtBSyxJLGlCQUFLRixHLEVBQUs7QUFDUixRQUFJLEtBQUtHLE1BQVQsRUFBaUI7QUFDZixhQUFPLEtBQUtBLE1BQUwsQ0FBWUgsR0FBWixDQUFQO0FBQ0Q7QUFDRixHOztBQUVEOzs7Ozs7O3FCQUtBSSxHLGtCQUFhO0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUNYLFFBQUksT0FBT0EsS0FBSyxDQUFMLENBQVAsS0FBbUIsV0FBdkIsRUFBb0M7QUFBQSxVQUMxQkMsTUFEMEIsR0FDZkQsSUFEZTtBQUVsQzs7QUFDQSxXQUFLLElBQU1MLEdBQVgsSUFBa0JNLE1BQWxCLEVBQTBCO0FBQ3hCLGFBQUtDLFFBQUwsQ0FBY1AsR0FBZCxFQUFtQk0sT0FBT04sR0FBUCxDQUFuQjtBQUNEO0FBQ0YsS0FORCxNQU1PO0FBQUEsVUFDR0EsS0FESCxHQUNrQkssSUFEbEI7QUFBQSxVQUNRRyxLQURSLEdBQ2tCSCxJQURsQjs7QUFFTCxXQUFLRSxRQUFMLENBQWNQLEtBQWQsRUFBbUJRLEtBQW5CO0FBQ0Q7O0FBRUQsUUFBSSxLQUFLQyxVQUFULEVBQXFCO0FBQ25CLG9DQUFjLEtBQUtoQixNQUFuQjtBQUNEOztBQUVELFdBQU8sSUFBUDtBQUNELEc7O3FCQUVEYyxRLHFCQUFTUCxHLEVBQUtRLEssRUFBTztBQUNuQixRQUFJLEtBQUtYLEtBQUwsQ0FBV0csR0FBWCxNQUFvQlEsS0FBeEIsRUFBK0I7QUFDN0IsV0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFdBQUtYLGFBQUwsQ0FBbUJZLElBQW5CLENBQXdCVixHQUF4QjtBQUNBLFdBQUtILEtBQUwsQ0FBV0csR0FBWCxJQUFrQlEsS0FBbEI7QUFDRDtBQUNGLEc7O0FBRUQ7Ozs7Ozs7cUJBS0FmLE0scUJBQTRCO0FBQUEsUUFBckJrQixXQUFxQix1RUFBUCxLQUFPOztBQUMxQixRQUFJLENBQUNBLGVBQWUsS0FBS0YsVUFBckIsS0FBb0MsS0FBS0csUUFBN0MsRUFBdUQ7QUFDckQsV0FBS0EsUUFBTDtBQUNEOztBQUVELFNBQUtkLGFBQUwsQ0FBbUJlLE1BQW5CLEdBQTRCLENBQTVCO0FBQ0EsU0FBS0osVUFBTCxHQUFrQixLQUFsQjs7QUFFQSxXQUFPLElBQVA7QUFDRCxHOzs7OztrQkFHWWxCLFEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvbkZyYW1lUmVuZGVyIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcblxuY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfTtcblxuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLmNoYW5nZWRWYWx1ZXMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBzdGF0ZS5cbiAgICogSWYgYGtleWAgaXMgbm90IGRlZmluZWQsIHJldHVybiBlbnRpcmUgY2FjaGVkIHN0YXRlLlxuICAgKiBJZiBga2V5YCBpcyBkZWZpbmVkLCByZXR1cm4gY2FjaGVkIHZhbHVlIGlmIHByZXNlbnQuXG4gICAqIElmIGBrZXlgIGlzIGRlZmluZWQgYW5kIGNhY2hlZCB2YWx1ZSBpcyBub3QgcHJlc2VudCwgcmVhZCBhbmQgcmV0dXJuLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IChvcHRpb25hbCkga2V5IG9mIHZhbHVlXG4gICAqIEByZXR1cm4ge3ZhbHVlfVxuICAgKi9cbiAgZ2V0KGtleSkge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZChrZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVhZCB2YWx1ZSBhY2NvcmRpbmcgdG8gYG9uUmVhZGBcbiAgICogQHBhcmFtICB7c3RyaW5nfSBOYW1lIG9mIHByb3BlcnR5IHRvIHJlYWRcbiAgICogQHJldHVybiB7W3R5cGVdfVxuICAgKi9cbiAgcmVhZChrZXkpIHtcbiAgICBpZiAodGhpcy5vblJlYWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uUmVhZChrZXkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYHN0YXRlYCB3aXRoIG5ldyB2YWx1ZXMgYW5kIHNjaGVkdWxlIGByZW5kZXJgLlxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzXG4gICAqIEBwYXJhbSB7dmFsdWV9IHZhbHVlIHRvc2V0XG4gICAqL1xuICBzZXQoLi4uYXJncykge1xuICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IFsgdmFsdWVzIF0gPSBhcmdzO1xuICAgICAgLy8gU2V0IG11bHRpcGxlIHZhbHVlc1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCB2YWx1ZXNba2V5XSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFsga2V5LCB2YWx1ZSBdID0gYXJncztcbiAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCkge1xuICAgICAgb25GcmFtZVJlbmRlcih0aGlzLnJlbmRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRWYWx1ZShrZXksIHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGVba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB0aGlzLmNoYW5nZWRWYWx1ZXMucHVzaChrZXkpO1xuICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGBvblJlbmRlcmAgaWYgdmFsdWVzIGhhdmUgY2hhbmdlZCBvciBgZm9yY2VSZW5kZXJgXG4gICAqIGlzIHNldCB0byB0cnVlLlxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgcmVuZGVyKGZvcmNlUmVuZGVyID0gZmFsc2UpIHtcbiAgICBpZiAoKGZvcmNlUmVuZGVyIHx8IHRoaXMuaGFzQ2hhbmdlZCkgJiYgdGhpcy5vblJlbmRlcikge1xuICAgICAgdGhpcy5vblJlbmRlcigpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XG4iXX0=

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (element, props) {
	  return new CSSRenderer(_extends({
	    element: element
	  }, props));
	};
	
	var _ = __webpack_require__(16);
	
	var _2 = _interopRequireDefault(_);
	
	var _render = __webpack_require__(21);
	
	var _render2 = _interopRequireDefault(_render);
	
	var _transformProps = __webpack_require__(22);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(23);
	
	var _valueTypes2 = _interopRequireDefault(_valueTypes);
	
	var _prefixer = __webpack_require__(24);
	
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
	      return valueType.default || 0;
	    }
	  };
	
	  return CSSRenderer;
	}(_2.default);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzIl0sIm5hbWVzIjpbImVsZW1lbnQiLCJwcm9wcyIsIkNTU1JlbmRlcmVyIiwib25SZW5kZXIiLCJlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiIsInN0YXRlIiwiY2hhbmdlZFZhbHVlcyIsIm9uUmVhZCIsImtleSIsInZhbHVlVHlwZSIsImRvbVZhbHVlIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBhcnNlIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQXlCZSxVQUFVQSxPQUFWLEVBQW1CQyxLQUFuQixFQUEwQjtBQUN2QyxTQUFPLElBQUlDLFdBQUo7QUFDTEY7QUFESyxLQUVGQyxLQUZFLEVBQVA7QUFJRCxDOztBQTlCRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUMsVzs7Ozs7Ozs7O3dCQUNKQyxRLHVCQUFXO0FBQUEsaUJBQ3VDLEtBQUtGLEtBRDVDO0FBQUEsUUFDREQsT0FEQyxVQUNEQSxPQURDO0FBQUEsUUFDUUksMEJBRFIsVUFDUUEsMEJBRFI7O0FBRVQsMEJBQVVKLE9BQVYsRUFBbUIsS0FBS0ssS0FBeEIsRUFBK0IsS0FBS0MsYUFBcEMsRUFBbURGLDBCQUFuRDtBQUNELEc7O3dCQUVERyxNLG1CQUFPQyxHLEVBQUs7QUFDVixRQUFNQyxZQUFZLHFCQUFjRCxHQUFkLENBQWxCOztBQUVBLFFBQUksQ0FBQyx5QkFBZUEsR0FBZixDQUFMLEVBQTBCO0FBQUEsVUFDaEJSLE9BRGdCLEdBQ0osS0FBS0MsS0FERCxDQUNoQkQsT0FEZ0I7O0FBRXhCLFVBQU1VLFdBQVdDLE9BQU9DLGdCQUFQLENBQXdCWixPQUF4QixFQUFpQyxJQUFqQyxFQUF1Qyx3QkFBU1EsR0FBVCxDQUF2QyxLQUF5RCxDQUExRTtBQUNBLGFBQVFDLGFBQWFBLFVBQVVJLEtBQXhCLEdBQWlDSixVQUFVSSxLQUFWLENBQWdCSCxRQUFoQixDQUFqQyxHQUE2REEsUUFBcEU7QUFDRCxLQUpELE1BSU87QUFDTCxhQUFPRCxVQUFVSyxPQUFWLElBQXFCLENBQTVCO0FBQ0Q7QUFDRixHIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4uLyc7XG5pbXBvcnQgcmVuZGVyQ1NTIGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL3RyYW5zZm9ybS1wcm9wcyc7XG5pbXBvcnQgdmFsdWVUeXBlc01hcCBmcm9tICcuL3ZhbHVlLXR5cGVzJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcblxuY2xhc3MgQ1NTUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIG9uUmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWxlbWVudCwgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgcmVuZGVyQ1NTKGVsZW1lbnQsIHRoaXMuc3RhdGUsIHRoaXMuY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pO1xuICB9XG5cbiAgb25SZWFkKGtleSkge1xuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlVHlwZXNNYXBba2V5XTtcblxuICAgIGlmICghdHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgZG9tVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVtwcmVmaXhlcihrZXkpXSB8fCAwO1xuICAgICAgcmV0dXJuICh2YWx1ZVR5cGUgJiYgdmFsdWVUeXBlLnBhcnNlKSA/IHZhbHVlVHlwZS5wYXJzZShkb21WYWx1ZSkgOiBkb21WYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlVHlwZS5kZWZhdWx0IHx8IDA7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IENTU1JlbmRlcmVyKHtcbiAgICBlbGVtZW50LFxuICAgIC4uLnByb3BzXG4gIH0pO1xufVxuIl19

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getColorValues = exports.findValueAndUnit = exports.createUnitType = exports.isFirstChars = exports.contains = exports.splitCommaDelimited = exports.setDOMAttrs = exports.isString = exports.isObj = exports.isNum = exports.isFunc = exports.isArray = exports.hasProperty = exports.currentTime = exports.camelToDash = undefined;
	exports.splitColorValues = splitColorValues;
	
	var _transformers = __webpack_require__(27);
	
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
	  Is utils var a string ? 
	  
	  @param: Variable to test
	  @return [boolean]: Returns true if typeof str === 'string'
	*/
	var isString = exports.isString = function (str) {
	  return typeof str === 'string';
	};
	
	var setDOMAttrs = exports.setDOMAttrs = function (element, attrs) {
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
	var splitCommaDelimited = exports.splitCommaDelimited = function (value) {
	  return isString(value) ? value.split(/,\s*/) : [value];
	};
	
	/**
	 *  Returns a function that will check any argument for `term`
	 * `contains('needle')('haystack')`
	 */
	var contains = exports.contains = function (term) {
	  return function (v) {
	    return isString(term) && v.indexOf(term) !== -1;
	  };
	};
	
	/**
	 *  Returns a function that will check to see if an argument is
	 *  the first characters in the provided `term`
	 * `isFirstChars('needle')('haystack')`
	 */
	var isFirstChars = exports.isFirstChars = function (term) {
	  return function (v) {
	    return isString(term) && v.indexOf(term) === 0;
	  };
	};
	
	/**
	 * Create a unit value type
	 */
	var createUnitType = exports.createUnitType = function (type) {
	  return {
	    test: contains(type),
	    parse: parseFloat,
	    transform: (0, _transformers.appendUnit)(type)
	  };
	};
	
	/**
	 * Creates a function that will split color
	 * values from string into an object of properties
	 * `splitColorValues(['Red', 'Green', 'Blue'])('rgba(0,0,0)')`
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
	  Split a value into a value/unit object
	  
	    "200px" -> { value: 200, unit: "px" }
	    
	  @param [string]: Value to split
	  @return [object]: Object with value and unit props
	*/
	var findValueAndUnit = exports.findValueAndUnit = function (value) {
	  if (value.match) {
	    var splitValue = value.match(/(-?\d*\.?\d*)(.*)/);
	
	    return {
	      value: parseFloat(splitValue[1]),
	      unit: splitValue[2]
	    };
	  } else {
	    return { value: value };
	  }
	};
	
	/*
	  Split color string into map of color properties
	
	  "rgba(255, 255, 255, 0)", ["Red", 'Green", "Blue", "Alpha"]
	
	  { Red: 255... }
	*/
	var getColorValues = exports.getColorValues = function (value, colorTerms) {
	  var numColorTerms = colorTerms.length;
	  var colorValues = {};
	  var colors = splitCommaDelimited(getValueFromFunctionString(value));
	
	  for (var i = 0; i < numColorTerms; i++) {
	    colorValues[colorTerms[i]] = colors[i] !== undefined ? colors[i] : 1;
	  }
	
	  return colorValues;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdXRpbHMuanMiXSwibmFtZXMiOlsic3BsaXRDb2xvclZhbHVlcyIsIkNBTUVMX0NBU0VfUEFUVEVSTiIsIlJFUExBQ0VfVEVNUExBVEUiLCJIQVNfUEVSRk9STUFOQ0VfTk9XIiwicGVyZm9ybWFuY2UiLCJub3ciLCJ2YXJUeXBlIiwidmFyaWFibGUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImNhbWVsVG9EYXNoIiwic3RyaW5nIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiY3VycmVudFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImhhc1Byb3BlcnR5Iiwib2JqZWN0IiwicHJvcGVydHlOYW1lIiwiaGFzT3duUHJvcGVydHkiLCJ1bmRlZmluZWQiLCJpc0FycmF5IiwiYXJyIiwiaXNGdW5jIiwib2JqIiwiaXNOdW0iLCJudW0iLCJpc09iaiIsImlzU3RyaW5nIiwic3RyIiwic2V0RE9NQXR0cnMiLCJlbGVtZW50IiwiYXR0cnMiLCJrZXkiLCJzZXRBdHRyaWJ1dGUiLCJzcGxpdENvbW1hRGVsaW1pdGVkIiwidmFsdWUiLCJzcGxpdCIsImNvbnRhaW5zIiwidGVybSIsInYiLCJpbmRleE9mIiwiaXNGaXJzdENoYXJzIiwiY3JlYXRlVW5pdFR5cGUiLCJ0eXBlIiwidGVzdCIsInBhcnNlIiwicGFyc2VGbG9hdCIsInRyYW5zZm9ybSIsInRlcm1zIiwibnVtVGVybXMiLCJsZW5ndGgiLCJ2YWx1ZXMiLCJ2YWx1ZXNBcnJheSIsImdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nIiwiaSIsImZpbmRWYWx1ZUFuZFVuaXQiLCJtYXRjaCIsInNwbGl0VmFsdWUiLCJ1bml0IiwiZ2V0Q29sb3JWYWx1ZXMiLCJjb2xvclRlcm1zIiwibnVtQ29sb3JUZXJtcyIsImNvbG9yVmFsdWVzIiwiY29sb3JzIl0sIm1hcHBpbmdzIjoiOzs7O1FBZ0lnQkEsZ0IsR0FBQUEsZ0I7O0FBaEloQjs7QUFFQSxJQUFNQyxxQkFB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R0FBbkMsRUFBd0M7QUFDdENRLGdCQUFZRixXQUFXTixDQUFYLENBQVosSUFBOEJTLE9BQU9ULENBQVAsTUFBY25DLFNBQWYsR0FBNEI0QyxPQUFPVCxDQUFQLENBQTVCLEdBQXdDLENBQXJFO0FBQ0Q7O0FBRUQsU0FBT1EsV0FBUDtBQUNELENBVk0iLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBlbmRVbml0IH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMnO1xuXG5jb25zdCBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbmNvbnN0IFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xuY29uc3QgSEFTX1BFUkZPUk1BTkNFX05PVyA9ICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdyk7XG5cbi8qXG4gIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xuY29uc3QgdmFyVHlwZSA9ICh2YXJpYWJsZSkgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG5cbi8qXG4gIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtzdHJpbmddXG4qL1xuZXhwb3J0IGNvbnN0IGNhbWVsVG9EYXNoID0gKHN0cmluZykgPT4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xuXG4vKlxuICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICBcbiAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbmV4cG9ydCBjb25zdCBjdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyAoKSA9PiBwZXJmb3JtYW5jZS5ub3coKSA6ICgpID0+IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4vKlxuICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICBAcGFyYW0gW29iamVjdF1cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xuZXhwb3J0IGNvbnN0IGhhc1Byb3BlcnR5ID0gKG9iamVjdCwgcHJvcGVydHlOYW1lKSA9PiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IChhcnIpID0+IHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5JztcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG5leHBvcnQgY29uc3QgaXNGdW5jID0gKG9iaikgPT4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xuZXhwb3J0IGNvbnN0IGlzTnVtID0gKG51bSkgPT4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xuZXhwb3J0IGNvbnN0IGlzT2JqID0gKG9iaikgPT4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAoc3RyKSA9PiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcblxuZXhwb3J0IGNvbnN0IHNldERPTUF0dHJzID0gKGVsZW1lbnQsIGF0dHJzKSA9PiB7XG4gIGZvciAobGV0IGtleSBpbiBhdHRycykge1xuICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuICAgIH1cbiAgfVxufTtcbi8qXG4gIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBhbnkgYXJndW1lbnQgZm9yIGB0ZXJtYFxuICogYGNvbnRhaW5zKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnRhaW5zID0gKHRlcm0pID0+ICh2KSA9PiB7XG4gIHJldHVybiAoaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pICE9PSAtMSk7XG59O1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIHRvIHNlZSBpZiBhbiBhcmd1bWVudCBpc1xuICogIHRoZSBmaXJzdCBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBgdGVybWBcbiAqIGBpc0ZpcnN0Q2hhcnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG5leHBvcnQgY29uc3QgaXNGaXJzdENoYXJzID0gKHRlcm0pID0+ICh2KSA9PiB7XG4gIHJldHVybiAoaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pID09PSAwKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgdW5pdCB2YWx1ZSB0eXBlXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVVbml0VHlwZSA9ICh0eXBlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVzdDogY29udGFpbnModHlwZSksXG4gICAgcGFyc2U6IHBhcnNlRmxvYXQsXG4gICAgdHJhbnNmb3JtOiBhcHBlbmRVbml0KHR5cGUpXG4gIH07XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgc3BsaXQgY29sb3JcbiAqIHZhbHVlcyBmcm9tIHN0cmluZyBpbnRvIGFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXG4gKiBgc3BsaXRDb2xvclZhbHVlcyhbJ1JlZCcsICdHcmVlbicsICdCbHVlJ10pKCdyZ2JhKDAsMCwwKScpYFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRDb2xvclZhbHVlcyh0ZXJtcykge1xuICBjb25zdCBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcblxuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB7fTtcbiAgICBjb25zdCB2YWx1ZXNBcnJheSA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodikpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICB2YWx1ZXNbdGVybXNbaV1dID0gKHZhbHVlc0FycmF5W2ldICE9PSB1bmRlZmluZWQpID8gcGFyc2VGbG9hdCh2YWx1ZXNBcnJheVtpXSkgOiAxO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH07XG59XG5cbi8qXG4gIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gIFxuICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgXG4gIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG5leHBvcnQgY29uc3QgZmluZFZhbHVlQW5kVW5pdCA9ICh2YWx1ZSkgPT4ge1xuICBpZiAodmFsdWUubWF0Y2gpIHtcbiAgICBjb25zdCBzcGxpdFZhbHVlID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3BsaXRWYWx1ZVsxXSksXG4gICAgICB1bml0OiAgc3BsaXRWYWx1ZVsyXVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgdmFsdWUgfTtcbiAgfVxufTtcblxuLypcbiAgU3BsaXQgY29sb3Igc3RyaW5nIGludG8gbWFwIG9mIGNvbG9yIHByb3BlcnRpZXNcblxuICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gIHsgUmVkOiAyNTUuLi4gfVxuKi9cbmV4cG9ydCBjb25zdCBnZXRDb2xvclZhbHVlcyA9ICh2YWx1ZSwgY29sb3JUZXJtcykgPT4ge1xuICBjb25zdCBudW1Db2xvclRlcm1zID0gY29sb3JUZXJtcy5sZW5ndGg7XG4gIGNvbnN0IGNvbG9yVmFsdWVzID0ge307XG4gIGNvbnN0IGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvbG9yVGVybXM7IGkrKykge1xuICAgIGNvbG9yVmFsdWVzW2NvbG9yVGVybXNbaV1dID0gKGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yc1tpXSA6IDE7XG4gIH1cblxuICByZXR1cm4gY29sb3JWYWx1ZXM7XG59O1xuXG4iXX0=

/***/ },
/* 19 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qcyJdLCJuYW1lcyI6WyJoYXNSQUYiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvbk5leHRGcmFtZSIsImNhbGxiYWNrIiwibGFzdFRpbWUiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZVRvQ2FsbCIsIk1hdGgiLCJtYXgiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTs7O0FBR0EsSUFBTUEsU0FBVSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxPQUFPQyxxQkFBekMsR0FBa0UsSUFBbEUsR0FBeUUsS0FBeEY7O0FBRUEsSUFBSUMsb0JBQUo7O0FBRUEsSUFBSUgsTUFBSixFQUFZO0FBQ1ZHLGdCQUFjLFVBQUNDLFFBQUQ7QUFBQSxXQUFjSCxPQUFPQyxxQkFBUCxDQUE2QkUsUUFBN0IsQ0FBZDtBQUFBLEdBQWQ7QUFFRCxDQUhELE1BR087QUFBQTtBQUNMOzs7Ozs7Ozs7Ozs7O0FBY0EsUUFBSUMsV0FBVyxDQUFmOztBQUVBRixrQkFBYyxVQUFDQyxRQUFELEVBQWM7QUFDMUIsVUFBTUUsY0FBYyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBcEI7QUFDQSxVQUFNQyxhQUFhQyxLQUFLQyxHQUFMLENBQVMsQ0FBVCxFQUFZLFFBQVFMLGNBQWNELFFBQXRCLENBQVosQ0FBbkI7O0FBRUFBLGlCQUFXQyxjQUFjRyxVQUF6Qjs7QUFFQUcsaUJBQVc7QUFBQSxlQUFNUixTQUFTQyxRQUFULENBQU47QUFBQSxPQUFYLEVBQXFDSSxVQUFyQztBQUNELEtBUEQ7QUFqQks7QUF5Qk47O2tCQUVjTixXIiwiZmlsZSI6Im9uLW5leHQtZnJhbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBEZXRlY3QgYW5kIGxvYWQgYW4gYXBwcm9wcmlhdGUgY2xvY2sgc2V0dGluZyBmb3IgdGhlIGVudmlyb25tZW50XG4qL1xuY29uc3QgaGFzUkFGID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpID8gdHJ1ZSA6IGZhbHNlO1xuXG5sZXQgb25OZXh0RnJhbWU7XG5cbmlmIChoYXNSQUYpIHtcbiAgb25OZXh0RnJhbWUgPSAoY2FsbGJhY2spID0+IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuXG59IGVsc2Uge1xuICAvKlxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgIFxuICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcblxuICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICBcbiAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICBcbiAgICBNSVQgbGljZW5zZVxuICAqL1xuICBsZXQgbGFzdFRpbWUgPSAwO1xuXG4gIG9uTmV4dEZyYW1lID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYuNyAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2sobGFzdFRpbWUpLCB0aW1lVG9DYWxsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb25OZXh0RnJhbWU7Il19

/***/ },
/* 20 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVJlbmRlclN0ZXAiLCJzdGFydFJlbmRlckxvb3AiLCJmdW5jdGlvbnNUb1J1biIsImZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lIiwic2NoZWR1bGUiLCJjYWxsYmFjayIsImluZGV4T2YiLCJwdXNoIiwiY2FuY2VsIiwiaW5kZXhPZkNhbGxiYWNrIiwic3BsaWNlIiwicHJvY2VzcyIsImxlbmd0aCIsIm51bVRoaXNGcmFtZSIsImkiXSwibWFwcGluZ3MiOiI7OztrQkFBd0JBLGdCO0FBQVQsU0FBU0EsZ0JBQVQsQ0FBMEJDLGVBQTFCLEVBQTJDO0FBQ3hEOzs7OztBQUtBLE1BQUlDLGlCQUFpQixFQUFyQjtBQUNBLE1BQUlDLDBCQUEwQixFQUE5Qjs7QUFFQSxTQUFPO0FBQ0xDLGNBQVUsVUFBQ0MsUUFBRCxFQUFjO0FBQ3RCSjtBQUNBO0FBQ0EsVUFBSUUsd0JBQXdCRyxPQUF4QixDQUFnQ0QsUUFBaEMsTUFBOEMsQ0FBQyxDQUFuRCxFQUFzRDtBQUNwREYsZ0NBQXdCSSxJQUF4QixDQUE2QkYsUUFBN0I7QUFDRDtBQUNGLEtBUEk7O0FBU0xHLFlBQVEsVUFBQ0gsUUFBRCxFQUFjO0FBQ3BCLFVBQU1JLGtCQUFrQk4sd0JBQXdCRyxPQUF4QixDQUFnQ0QsUUFBaEMsQ0FBeEI7QUFDQSxVQUFJSSxvQkFBb0IsQ0FBQyxDQUF6QixFQUE0QjtBQUMxQk4sZ0NBQXdCTyxNQUF4QixDQUErQkQsZUFBL0IsRUFBZ0QsQ0FBaEQ7QUFDRDtBQUNGLEtBZEk7O0FBZ0JMRSxhQUFTLFlBQU07O0FBSWI7QUFKYSxpQkFFK0IsQ0FBQ1IsdUJBQUQsRUFBMEJELGNBQTFCLENBRi9CO0FBQ2I7O0FBQ0NBLG9CQUZZO0FBRUlDLDZCQUZKO0FBS2JBLDhCQUF3QlMsTUFBeEIsR0FBaUMsQ0FBakM7O0FBRUE7QUFDQSxVQUFNQyxlQUFlWCxlQUFlVSxNQUFwQztBQUNBLFdBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxZQUFwQixFQUFrQ0MsR0FBbEMsRUFBdUM7QUFDckNaLHVCQUFlWSxDQUFmO0FBQ0Q7QUFDRjtBQTVCSSxHQUFQO0FBOEJEIiwiZmlsZSI6ImNyZWF0ZS1yZW5kZXItc3RlcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKSB7XG4gIC8qKlxuICAgKiBXZSB1c2UgdHdvIGFycmF5cywgb25lIGZvciB0aGlzIGZyYW1lIGFuZCBvbmUgdG8gcXVldWUgZm9yIHRoZVxuICAgKiBuZXh0IGZyYW1lLCByZXVzaW5nIGVhY2ggdG8gYXZvaWQgR0MuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gIGxldCBmdW5jdGlvbnNUb1J1biA9IFtdO1xuICBsZXQgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUgPSBbXTtcblxuICByZXR1cm4ge1xuICAgIHNjaGVkdWxlOiAoY2FsbGJhY2spID0+IHtcbiAgICAgIHN0YXJ0UmVuZGVyTG9vcCgpO1xuICAgICAgLy8gSWYgdGhpcyBjYWxsYmFjayBpc24ndCBhbHJlYWR5IHNjaGVkdWxlZCB0byBydW4gbmV4dCBmcmFtZVxuICAgICAgaWYgKGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spID09PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2FuY2VsOiAoY2FsbGJhY2spID0+IHtcbiAgICAgIGNvbnN0IGluZGV4T2ZDYWxsYmFjayA9IGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgaWYgKGluZGV4T2ZDYWxsYmFjayAhPT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuc3BsaWNlKGluZGV4T2ZDYWxsYmFjaywgMSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHByb2Nlc3M6ICgpID0+IHtcbiAgICAgIC8vIFN3YXAgdGhpcyBmcmFtZSBhbmQgbmV4dCBmcmFtZSBhcnJheXMgdG8gYXZvaWQgR0NcbiAgICAgIFtmdW5jdGlvbnNUb1J1biwgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWVdID0gW2Z1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLCBmdW5jdGlvbnNUb1J1bl07XG5cbiAgICAgIC8vIENsZWFyIG5leHQgZnJhbWUgbGlzdFxuICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUubGVuZ3RoID0gMDtcblxuICAgICAgLy8gRXhlY3V0ZSBhbGwgb2YgdGhpcyBmcmFtZSdzIGZ1bmN0aW9uc1xuICAgICAgY29uc3QgbnVtVGhpc0ZyYW1lID0gZnVuY3Rpb25zVG9SdW4ubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UaGlzRnJhbWU7IGkrKykge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bltpXSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0iXX0=

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _transformProps = __webpack_require__(22);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(23);
	
	var _valueTypes2 = _interopRequireDefault(_valueTypes);
	
	var _prefixer = __webpack_require__(24);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _utils = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TRANSLATE = 'translate';
	var translateMap = {
	  x: TRANSLATE + 'X',
	  y: TRANSLATE + 'Y',
	  z: TRANSLATE + 'Z'
	};
	
	function buildStylePropertyString(state, changedValues, enableHardwareAcceleration) {
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
	
	    if (_transformProps2.default[_key2]) {
	      transformString += _key2 + '(' + value + ') ';
	      transformHasZ = _key2 === translateMap.z ? true : transformHasZ;
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
	
	  return propertyString;
	}
	
	exports.default = function (element, values, changedValues, enableHardwareAcceleration) {
	  var propertyString = buildStylePropertyString(values, changedValues, enableHardwareAcceleration);
	  element.style.cssText += propertyString;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3JlbmRlci5qcyJdLCJuYW1lcyI6WyJUUkFOU0xBVEUiLCJ0cmFuc2xhdGVNYXAiLCJ4IiwieSIsInoiLCJidWlsZFN0eWxlUHJvcGVydHlTdHJpbmciLCJzdGF0ZSIsImNoYW5nZWRWYWx1ZXMiLCJlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiIsInByb3BlcnR5U3RyaW5nIiwidHJhbnNmb3JtU3RyaW5nIiwiaGFzVHJhbnNmb3JtIiwidHJhbnNmb3JtSGFzWiIsIm51bUNoYW5nZWRWYWx1ZXMiLCJsZW5ndGgiLCJpIiwia2V5IiwiaW5kZXhPZiIsInB1c2giLCJ0b3RhbE51bUNoYW5nZWRWYWx1ZXMiLCJ2YWx1ZSIsInRyYW5zZm9ybSIsImVsZW1lbnQiLCJ2YWx1ZXMiLCJzdHlsZSIsImNzc1RleHQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVksV0FBbEI7QUFDQSxJQUFNQyxlQUFlO0FBQ25CQyxLQUFHRixZQUFZLEdBREk7QUFFbkJHLEtBQUdILFlBQVksR0FGSTtBQUduQkksS0FBR0osWUFBWTtBQUhJLENBQXJCOztBQU1BLFNBQVNLLHdCQUFULENBQWtDQyxLQUFsQyxFQUF5Q0MsYUFBekMsRUFBd0RDLDBCQUF4RCxFQUFvRjtBQUNsRixNQUFJQyxpQkFBaUIsRUFBckI7QUFDQSxNQUFJQyxrQkFBa0IsRUFBdEI7QUFDQSxNQUFJQyxlQUFlLEtBQW5CO0FBQ0EsTUFBSUMsZ0JBQWdCLEtBQXBCOztBQUVBO0FBQ0E7QUFDQSxNQUFNQyxtQkFBbUJOLGNBQWNPLE1BQXZDO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLGdCQUFwQixFQUFzQ0UsR0FBdEMsRUFBMkM7QUFDekMsUUFBTUMsTUFBTVQsY0FBY1EsQ0FBZCxDQUFaOztBQUVBO0FBQ0E7QUFDQSxRQUFJLHlCQUFlQyxHQUFmLENBQUosRUFBeUI7QUFDdkJMLHFCQUFlLElBQWY7O0FBRUEsV0FBSyxJQUFJSyxJQUFULElBQWdCVixLQUFoQixFQUF1QjtBQUNyQixZQUFJLHlCQUFlVSxJQUFmLEtBQXVCVCxjQUFjVSxPQUFkLENBQXNCRCxJQUF0QixNQUErQixDQUFDLENBQTNELEVBQThEO0FBQzVEVCx3QkFBY1csSUFBZCxDQUFtQkYsSUFBbkI7QUFDRDtBQUNGOztBQUVEO0FBQ0Q7QUFDRjs7QUFFRCxNQUFNRyx3QkFBd0JaLGNBQWNPLE1BQTVDO0FBQ0EsT0FBSyxJQUFJQyxLQUFJLENBQWIsRUFBZ0JBLEtBQUlJLHFCQUFwQixFQUEyQ0osSUFBM0MsRUFBZ0Q7QUFDOUMsUUFBSUMsUUFBTVQsY0FBY1EsRUFBZCxDQUFWO0FBQ0EsUUFBSUssUUFBUWQsTUFBTVUsS0FBTixDQUFaOztBQUVBLFFBQUlmLGFBQWFlLEtBQWIsQ0FBSixFQUF1QjtBQUNyQkEsY0FBTWYsYUFBYWUsS0FBYixDQUFOO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJLHFCQUFXQSxLQUFYLE1BQW9CLGtCQUFNSSxLQUFOLEtBQWdCLGtCQUFNQSxLQUFOLENBQXBDLEtBQXFELHFCQUFXSixLQUFYLEVBQWdCSyxTQUF6RSxFQUFvRjtBQUNsRkQsY0FBUSxxQkFBV0osS0FBWCxFQUFnQkssU0FBaEIsQ0FBMEJELEtBQTFCLENBQVI7QUFDRDs7QUFFRCxRQUFJLHlCQUFlSixLQUFmLENBQUosRUFBeUI7QUFDdkJOLHlCQUFtQk0sUUFBTSxHQUFOLEdBQVlJLEtBQVosR0FBb0IsSUFBdkM7QUFDQVIsc0JBQWlCSSxVQUFRZixhQUFhRyxDQUF0QixHQUEyQixJQUEzQixHQUFrQ1EsYUFBbEQ7QUFFRCxLQUpELE1BSU87QUFDTEgsd0JBQWtCLE1BQU0sd0JBQVNPLEtBQVQsRUFBYyxJQUFkLENBQU4sR0FBNEIsR0FBNUIsR0FBa0NJLEtBQXBEO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBLE1BQUlULFlBQUosRUFBa0I7QUFDaEIsUUFBSSxDQUFDQyxhQUFELElBQWtCSiwwQkFBdEIsRUFBa0Q7QUFDaERFLHlCQUFtQlQsYUFBYUcsQ0FBYixHQUFpQixLQUFwQztBQUNEOztBQUVESyxzQkFBa0IsTUFBTSx3QkFBUyxXQUFULEVBQXNCLElBQXRCLENBQU4sR0FBb0MsR0FBcEMsR0FBMENDLGVBQTVEO0FBQ0Q7O0FBRUQsU0FBT0QsY0FBUDtBQUNEOztrQkFFYyxVQUFDYSxPQUFELEVBQVVDLE1BQVYsRUFBa0JoQixhQUFsQixFQUFpQ0MsMEJBQWpDLEVBQWdFO0FBQzdFLE1BQU1DLGlCQUFpQkoseUJBQXlCa0IsTUFBekIsRUFBaUNoQixhQUFqQyxFQUFnREMsMEJBQWhELENBQXZCO0FBQ0FjLFVBQVFFLEtBQVIsQ0FBY0MsT0FBZCxJQUF5QmhCLGNBQXpCO0FBQ0QsQyIsImZpbGUiOiJyZW5kZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IHZhbHVlVHlwZXMgZnJvbSAnLi92YWx1ZS10eXBlcyc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9wcmVmaXhlcic7XG5pbXBvcnQgeyBpc051bSwgaXNPYmogfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcbmNvbnN0IHRyYW5zbGF0ZU1hcCA9IHtcbiAgeDogVFJBTlNMQVRFICsgJ1gnLFxuICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gIHo6IFRSQU5TTEFURSArICdaJ1xufTtcblxuZnVuY3Rpb24gYnVpbGRTdHlsZVByb3BlcnR5U3RyaW5nKHN0YXRlLCBjaGFuZ2VkVmFsdWVzLCBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICBsZXQgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgbGV0IHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICBsZXQgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIGxldCB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgLy8gRmlyc3QgY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBjaGFuZ2VkIHRyYW5zZm9ybSB2YWx1ZXNcbiAgLy8gYW5kIGlmIHRydWUgYWRkIGFsbCB0cmFuc2Zvcm0gdmFsdWVzXG4gIGNvbnN0IG51bUNoYW5nZWRWYWx1ZXMgPSBjaGFuZ2VkVmFsdWVzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1DaGFuZ2VkVmFsdWVzOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBjaGFuZ2VkVmFsdWVzW2ldO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBwcm9wZXJ0eSwgYWRkIGFsbCBvdGhlciB0cmFuc2Zvcm0gcHJvcHNcbiAgICAvLyB0byBjaGFuZ2VkVmFsdWVzIGFuZCB0aGVuIGJyZWFrXG4gICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG5cbiAgICAgIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSAmJiBjaGFuZ2VkVmFsdWVzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjaGFuZ2VkVmFsdWVzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25zdCB0b3RhbE51bUNoYW5nZWRWYWx1ZXMgPSBjaGFuZ2VkVmFsdWVzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbE51bUNoYW5nZWRWYWx1ZXM7IGkrKykge1xuICAgIGxldCBrZXkgPSBjaGFuZ2VkVmFsdWVzW2ldO1xuICAgIGxldCB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICBpZiAodHJhbnNsYXRlTWFwW2tleV0pIHtcbiAgICAgIGtleSA9IHRyYW5zbGF0ZU1hcFtrZXldO1xuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSBudW1iZXIgb3Igb2JqZWN0IGFuZCB3ZSBoYXZlIGZpbHRlciwgYXBwbHkgZmlsdGVyXG4gICAgaWYgKHZhbHVlVHlwZXNba2V5XSAmJiAoaXNOdW0odmFsdWUpIHx8IGlzT2JqKHZhbHVlKSkgJiYgdmFsdWVUeXBlc1trZXldLnRyYW5zZm9ybSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZVR5cGVzW2tleV0udHJhbnNmb3JtKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IGtleSArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgIHRyYW5zZm9ybUhhc1ogPSAoa2V5ID09PSB0cmFuc2xhdGVNYXAueikgPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcblxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcihrZXksIHRydWUpICsgJzonICsgdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgd2UgaGF2ZSB0cmFuc2Zvcm0gcHJvcHMsIGJ1aWxkIGEgdHJhbnNmb3JtIHN0cmluZ1xuICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gdHJhbnNsYXRlTWFwLnogKyAnKDApJztcbiAgICB9XG5cbiAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcigndHJhbnNmb3JtJywgdHJ1ZSkgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHlTdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChlbGVtZW50LCB2YWx1ZXMsIGNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSA9PiB7XG4gIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gYnVpbGRTdHlsZVByb3BlcnR5U3RyaW5nKHZhbHVlcywgY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pO1xuICBlbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gcHJvcGVydHlTdHJpbmc7XG59OyJdfQ==

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyJdLCJuYW1lcyI6WyJheGVzIiwidHJhbnNmb3JtUHJvcHMiLCJ4IiwieSIsInoiLCJTQ0FMRSIsIlJPVEFURSIsIlRSQU5TRk9STV9QRVJTUEVDVElWRSIsIlRFUk1TIiwiZm9yRWFjaCIsInRlcm0iLCJheGlzIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNQSxPQUFPLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWI7O0FBRUEsSUFBSUMsaUJBQWlCO0FBQ25CQyxLQUFHLElBRGdCO0FBRW5CQyxLQUFHLElBRmdCO0FBR25CQyxLQUFHO0FBSGdCLENBQXJCOztBQU1BLElBQU1DLFFBQVEsT0FBZDtBQUNBLElBQU1DLFNBQVMsUUFBZjtBQUNBLElBQU1DLHdCQUF3QixzQkFBOUI7QUFDQSxJQUFNQyxRQUFRLENBQUMsV0FBRCxFQUFjSCxLQUFkLEVBQXFCQyxNQUFyQixFQUE2QixNQUE3QixFQUFxQ0MscUJBQXJDLENBQWQ7O0FBRUFOLGVBQWVLLE1BQWYsSUFBeUJMLGVBQWVJLEtBQWYsSUFBd0JKLGVBQWVNLHFCQUFmLElBQXdDLElBQXpGOztBQUVBQyxNQUFNQyxPQUFOLENBQWMsVUFBQ0MsSUFBRDtBQUFBLFNBQVVWLEtBQUtTLE9BQUwsQ0FBYSxVQUFDRSxJQUFEO0FBQUEsV0FBVVYsZUFBZVMsT0FBT0MsSUFBdEIsSUFBOEIsSUFBeEM7QUFBQSxHQUFiLENBQVY7QUFBQSxDQUFkOztrQkFFZVYsYyIsImZpbGUiOiJ0cmFuc2Zvcm0tcHJvcHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBheGVzID0gWydYJywgJ1knLCAnWiddO1xuXG5sZXQgdHJhbnNmb3JtUHJvcHMgPSB7XG4gIHg6IHRydWUsXG4gIHk6IHRydWUsXG4gIHo6IHRydWVcbn07XG5cbmNvbnN0IFNDQUxFID0gJ3NjYWxlJztcbmNvbnN0IFJPVEFURSA9ICdyb3RhdGUnO1xuY29uc3QgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbmNvbnN0IFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaCgodGVybSkgPT4gYXhlcy5mb3JFYWNoKChheGlzKSA9PiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zZm9ybVByb3BzOyJdfQ==

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _types = __webpack_require__(25);
	
	exports.default = {
	  // Color props
	  color: _types.color,
	  backgroundColor: _types.color,
	  outlineColor: _types.color,
	  fill: _types.color,
	  stroke: _types.color,
	
	  // Border props
	  borderColor: _types.color,
	  borderTopColor: _types.color,
	  borderRightColor: _types.color,
	  borderBottomColor: _types.color,
	  borderLeftColor: _types.color,
	  borderRadius: _types.px,
	
	  // Positioning
	  width: _types.px,
	  height: _types.px,
	
	  // Shadows
	  textShadow: _types.shadow,
	  boxShadow: _types.shadow,
	
	  // Transform properties
	  rotate: _types.angle,
	  rotateX: _types.angle,
	  rotateY: _types.angle,
	  rotateZ: _types.angle,
	  scale: _types.scale,
	  scaleX: _types.scale,
	  scaleY: _types.scale,
	  scaleZ: _types.scale,
	  skewX: _types.angle,
	  skewY: _types.angle,
	  distance: _types.px,
	  x: _types.px,
	  y: _types.px,
	  z: _types.px,
	  perspective: _types.px,
	  opacity: _types.alpha
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib3V0bGluZUNvbG9yIiwiZmlsbCIsInN0cm9rZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyVG9wQ29sb3IiLCJib3JkZXJSaWdodENvbG9yIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJib3JkZXJMZWZ0Q29sb3IiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImhlaWdodCIsInRleHRTaGFkb3ciLCJib3hTaGFkb3ciLCJyb3RhdGUiLCJyb3RhdGVYIiwicm90YXRlWSIsInJvdGF0ZVoiLCJzY2FsZSIsInNjYWxlWCIsInNjYWxlWSIsInNjYWxlWiIsInNrZXdYIiwic2tld1kiLCJkaXN0YW5jZSIsIngiLCJ5IiwieiIsInBlcnNwZWN0aXZlIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztrQkFDZTtBQUNiO0FBQ0FBLHFCQUZhO0FBR2JDLCtCQUhhO0FBSWJDLDRCQUphO0FBS2JDLG9CQUxhO0FBTWJDLHNCQU5hOztBQVFiO0FBQ0FDLDJCQVRhO0FBVWJDLDhCQVZhO0FBV2JDLGdDQVhhO0FBWWJDLGlDQVphO0FBYWJDLCtCQWJhO0FBY2JDLHlCQWRhOztBQWdCYjtBQUNBQyxrQkFqQmE7QUFrQmJDLG1CQWxCYTs7QUFvQmI7QUFDQUMsMkJBckJhO0FBc0JiQywwQkF0QmE7O0FBd0JiO0FBQ0FDLHNCQXpCYTtBQTBCYkMsdUJBMUJhO0FBMkJiQyx1QkEzQmE7QUE0QmJDLHVCQTVCYTtBQTZCYkMscUJBN0JhO0FBOEJiQyxzQkE5QmE7QUErQmJDLHNCQS9CYTtBQWdDYkMsc0JBaENhO0FBaUNiQyxxQkFqQ2E7QUFrQ2JDLHFCQWxDYTtBQW1DYkMscUJBbkNhO0FBb0NiQyxjQXBDYTtBQXFDYkMsY0FyQ2E7QUFzQ2JDLGNBdENhO0FBdUNiQyx3QkF2Q2E7QUF3Q2JDO0FBeENhLEMiLCJmaWxlIjoidmFsdWUtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmdsZSwgYWxwaGEsIGNvbG9yLCBzY2FsZSwgc2hhZG93LCBweCB9IGZyb20gJy4uLy4uL3ZhbHVlL3R5cGVzJzsgXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIENvbG9yIHByb3BzXG4gIGNvbG9yOiBjb2xvcixcbiAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgb3V0bGluZUNvbG9yOiBjb2xvcixcbiAgZmlsbDogY29sb3IsXG4gIHN0cm9rZTogY29sb3IsXG5cbiAgLy8gQm9yZGVyIHByb3BzXG4gIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgYm9yZGVyVG9wQ29sb3I6IGNvbG9yLFxuICBib3JkZXJSaWdodENvbG9yOiBjb2xvcixcbiAgYm9yZGVyQm90dG9tQ29sb3I6IGNvbG9yLFxuICBib3JkZXJMZWZ0Q29sb3I6IGNvbG9yLFxuICBib3JkZXJSYWRpdXM6IHB4LFxuXG4gIC8vIFBvc2l0aW9uaW5nXG4gIHdpZHRoOiBweCxcbiAgaGVpZ2h0OiBweCxcblxuICAvLyBTaGFkb3dzXG4gIHRleHRTaGFkb3c6IHNoYWRvdyxcbiAgYm94U2hhZG93OiBzaGFkb3csICAgXG5cbiAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgcm90YXRlOiBhbmdsZSxcbiAgcm90YXRlWDogYW5nbGUsXG4gIHJvdGF0ZVk6IGFuZ2xlLFxuICByb3RhdGVaOiBhbmdsZSxcbiAgc2NhbGU6IHNjYWxlLFxuICBzY2FsZVg6IHNjYWxlLFxuICBzY2FsZVk6IHNjYWxlLFxuICBzY2FsZVo6IHNjYWxlLFxuICBza2V3WDogYW5nbGUsXG4gIHNrZXdZOiBhbmdsZSxcbiAgZGlzdGFuY2U6IHB4LFxuICB4OiBweCxcbiAgeTogcHgsXG4gIHo6IHB4LFxuICBwZXJzcGVjdGl2ZTogcHgsXG4gIG9wYWNpdHk6IGFscGhhXG59O1xuIl19

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(18);
	
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
	var testPrefix = function (key) {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3ByZWZpeGVyLmpzIl0sIm5hbWVzIjpbImNhbWVsQ2FjaGUiLCJkYXNoQ2FjaGUiLCJwcmVmaXhlcyIsIm51bVByZWZpeGVzIiwibGVuZ3RoIiwidGVzdEVsZW1lbnQiLCJ0ZXN0UHJlZml4Iiwia2V5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaSIsInByZWZpeCIsIm5vUHJlZml4IiwicHJlZml4ZWRQcm9wZXJ0eU5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwic3R5bGUiLCJhc0Rhc2hDYXNlIiwiY2FjaGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhLEVBQW5CO0FBQ0EsSUFBTUMsWUFBWSxFQUFsQjtBQUNBLElBQU1DLFdBQVcsQ0FBQyxRQUFELEVBQVUsS0FBVixFQUFnQixHQUFoQixFQUFvQixJQUFwQixFQUEwQixFQUExQixDQUFqQjtBQUNBLElBQU1DLGNBQWNELFNBQVNFLE1BQTdCO0FBQ0EsSUFBSUMsb0JBQUo7O0FBRUE7Ozs7OztBQU1BLElBQU1DLGFBQWEsVUFBQ0MsR0FBRCxFQUFTO0FBQzFCRixnQkFBY0EsZUFBZUcsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUE3Qjs7QUFFQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSVAsV0FBcEIsRUFBaUNPLEdBQWpDLEVBQXNDO0FBQ3BDLFFBQU1DLFNBQVNULFNBQVNRLENBQVQsQ0FBZjtBQUNBLFFBQU1FLFdBQVlELFdBQVcsRUFBN0I7QUFDQSxRQUFNRSx1QkFBdUJELFdBQVdMLEdBQVgsR0FBaUJJLFNBQVNKLElBQUlPLE1BQUosQ0FBVyxDQUFYLEVBQWNDLFdBQWQsRUFBVCxHQUF1Q1IsSUFBSVMsS0FBSixDQUFVLENBQVYsQ0FBckY7O0FBRUEsUUFBSUgsd0JBQXdCUixZQUFZWSxLQUF4QyxFQUErQztBQUM3Q2pCLGlCQUFXTyxHQUFYLElBQWtCTSxvQkFBbEI7QUFDQVosZ0JBQVVNLEdBQVYsVUFBcUJLLFdBQVcsRUFBWCxHQUFnQixHQUFyQyxJQUE0Qyx3QkFBWUMsb0JBQVosQ0FBNUM7QUFDRDtBQUNGO0FBQ0YsQ0FiRDs7a0JBZWUsVUFBQ04sR0FBRCxFQUFNVyxVQUFOLEVBQXFCO0FBQ2xDLE1BQU1DLFFBQVFELGFBQWFqQixTQUFiLEdBQXlCRCxVQUF2Qzs7QUFFQSxNQUFJLENBQUNtQixNQUFNWixHQUFOLENBQUwsRUFBaUI7QUFDZkQsZUFBV0MsR0FBWDtBQUNEOztBQUVELFNBQU9ZLE1BQU1aLEdBQU4sQ0FBUDtBQUNELEMiLCJmaWxlIjoicHJlZml4ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW1lbFRvRGFzaCB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5cbmNvbnN0IGNhbWVsQ2FjaGUgPSB7fTtcbmNvbnN0IGRhc2hDYWNoZSA9IHt9O1xuY29uc3QgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsJ01veicsJ08nLCdtcycsICcnXTtcbmNvbnN0IG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xubGV0IHRlc3RFbGVtZW50O1xuXG4vKlxuICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gIFxuICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xuY29uc3QgdGVzdFByZWZpeCA9IChrZXkpID0+IHtcbiAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICBjb25zdCBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICBjb25zdCBub1ByZWZpeCA9IChwcmVmaXggPT09ICcnKTtcbiAgICBjb25zdCBwcmVmaXhlZFByb3BlcnR5TmFtZSA9IG5vUHJlZml4ID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgaWYgKHByZWZpeGVkUHJvcGVydHlOYW1lIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICBjYW1lbENhY2hlW2tleV0gPSBwcmVmaXhlZFByb3BlcnR5TmFtZTtcbiAgICAgIGRhc2hDYWNoZVtrZXldID0gYCR7KG5vUHJlZml4ID8gJycgOiAnLScpfSR7Y2FtZWxUb0Rhc2gocHJlZml4ZWRQcm9wZXJ0eU5hbWUpfWA7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoa2V5LCBhc0Rhc2hDYXNlKSA9PiB7XG4gIGNvbnN0IGNhY2hlID0gYXNEYXNoQ2FzZSA/IGRhc2hDYWNoZSA6IGNhbWVsQ2FjaGU7XG5cbiAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgdGVzdFByZWZpeChrZXkpO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuIl19

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.color = exports.hsla = exports.hex = exports.rgba = exports.rgbUnit = exports.scale = exports.px = exports.percent = exports.degrees = exports.alpha = exports.number = undefined;
	
	var _childTypes, _childTypes2;
	
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
	
	
	var _transformers = __webpack_require__(27);
	
	var _utils = __webpack_require__(26);
	
	var _utils2 = __webpack_require__(18);
	
	// String properties
	var RED = 'Red';
	var GREEN = 'Green';
	var BLUE = 'Blue';
	var ALPHA = 'Alpha';
	var HUE = 'Hue';
	var SATURATION = 'Saturation';
	var LIGHTNESS = 'Lightness';
	
	// Templates
	var rgbaTemplate = function (colors) {
	  return 'rgba(' + colors[RED] + ', ' + colors[GREEN] + ', ' + colors[BLUE] + ', ' + colors[ALPHA] + ')';
	};
	var hslaTemplate = function (colors) {
	  return 'hsla(' + colors[HUE] + ', ' + colors[SATURATION] + ', ' + colors[LIGHTNESS] + ', ' + colors[ALPHA] + ')';
	};
	
	var number = exports.number = {
	  test: _utils2.isNum,
	  parse: parseFloat
	};
	
	// Value types
	var alpha = exports.alpha = _extends({}, number, {
	  transform: (0, _transformers.clamp)(0, 1)
	});
	
	var degrees = exports.degrees = (0, _utils.createUnitType)('deg');
	var percent = exports.percent = (0, _utils.createUnitType)('%');
	var px = exports.px = (0, _utils.createUnitType)('px');
	
	var scale = exports.scale = _extends({}, number, {
	  default: 1
	});
	
	var rgbUnit = exports.rgbUnit = _extends({}, number, {
	  transform: (0, _transformers.flow)(
	  //http://codepen.io/osublake/full/xGVVaN/
	  // (v, value, action) => {
	  //   if (action) {
	  //     const fromColor = action.from * action.from;
	  //     const toColor = action.to * action.to;
	  //     return Math.sqrt(action.progress * (toColor - fromColor) + fromColor);
	  //   }
	
	  //   return v;
	  // },
	  (0, _transformers.clamp)(0, 255), Math.round)
	});
	
	var rgba = exports.rgba = {
	  childTypes: (_childTypes = {}, _childTypes[RED] = rgbUnit, _childTypes[GREEN] = rgbUnit, _childTypes[BLUE] = rgbUnit, _childTypes[ALPHA] = alpha, _childTypes),
	
	  test: (0, _utils.isFirstChars)('rgb'),
	
	  parse: (0, _utils.splitColorValues)([RED, GREEN, BLUE, ALPHA]),
	
	  transform: rgbaTemplate
	};
	
	var hex = exports.hex = _extends({}, rgba, {
	
	  test: (0, _utils.isFirstChars)('#'),
	
	  parse: function (v) {
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
	      Red: parseInt(r, 16),
	      Green: parseInt(g, 16),
	      Blue: parseInt(b, 16),
	      Alpha: 1
	    };
	  }
	});
	
	var hsla = exports.hsla = {
	  childTypes: (_childTypes2 = {}, _childTypes2[HUE] = number, _childTypes2[SATURATION] = percent, _childTypes2[LIGHTNESS] = percent, _childTypes2[ALPHA] = alpha, _childTypes2),
	
	  test: (0, _utils.isFirstChars)('hsl'),
	
	  parse: (0, _utils.splitColorValues)([HUE, SATURATION, LIGHTNESS, ALPHA]),
	
	  combine: hslaTemplate
	};
	
	var color = exports.color = {
	  childTypes: _extends({}, hsla.childTypes, rgba.childTypes),
	
	  test: function (value) {
	    return rgba.test(value) || hex.test(value) || hsla.test(value);
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS90eXBlcy5qcyJdLCJuYW1lcyI6WyJSRUQiLCJHUkVFTiIsIkJMVUUiLCJBTFBIQSIsIkhVRSIsIlNBVFVSQVRJT04iLCJMSUdIVE5FU1MiLCJyZ2JhVGVtcGxhdGUiLCJjb2xvcnMiLCJoc2xhVGVtcGxhdGUiLCJudW1iZXIiLCJ0ZXN0IiwicGFyc2UiLCJwYXJzZUZsb2F0IiwiYWxwaGEiLCJ0cmFuc2Zvcm0iLCJkZWdyZWVzIiwicGVyY2VudCIsInB4Iiwic2NhbGUiLCJkZWZhdWx0IiwicmdiVW5pdCIsIk1hdGgiLCJyb3VuZCIsInJnYmEiLCJjaGlsZFR5cGVzIiwiaGV4IiwidiIsInIiLCJnIiwiYiIsImxlbmd0aCIsInN1YnN0ciIsIlJlZCIsInBhcnNlSW50IiwiR3JlZW4iLCJCbHVlIiwiQWxwaGEiLCJoc2xhIiwiY29tYmluZSIsImNvbG9yIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7a1FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQWFBOztBQUNBOztBQUNBOztBQUVBO0FBQ0EsSUFBTUEsTUFBTSxLQUFaO0FBQ0EsSUFBTUMsUUFBUSxPQUFkO0FBQ0EsSUFBTUMsT0FBTyxNQUFiO0FBQ0EsSUFBTUMsUUFBUSxPQUFkO0FBQ0EsSUFBTUMsTUFBTSxLQUFaO0FBQ0EsSUFBTUMsYUFBYSxZQUFuQjtBQUNBLElBQU1DLFlBQVksV0FBbEI7O0FBRUE7QUFDQSxJQUFNQyxlQUFlLFVBQUNDLE1BQUQ7QUFBQSxtQkFBb0JBLE9BQU9SLEdBQVAsQ0FBcEIsVUFBb0NRLE9BQU9QLEtBQVAsQ0FBcEMsVUFBc0RPLE9BQU9OLElBQVAsQ0FBdEQsVUFBdUVNLE9BQU9MLEtBQVAsQ0FBdkU7QUFBQSxDQUFyQjtBQUNBLElBQU1NLGVBQWUsVUFBQ0QsTUFBRDtBQUFBLG1CQUFvQkEsT0FBT0osR0FBUCxDQUFwQixVQUFvQ0ksT0FBT0gsVUFBUCxDQUFwQyxVQUEyREcsT0FBT0YsU0FBUCxDQUEzRCxVQUFpRkUsT0FBT0wsS0FBUCxDQUFqRjtB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QixJQUF1Q0gsS0FBSzNCLElBQUwsQ0FBVThCLEtBQVYsQ0FBbEQ7QUFBQTtBQU5hLENBQWQiLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFZhbHVlIHR5cGVzXG4gKlxuICogYWxwaGFcbiAqIGRlZ3JlZXNcbiAqIGhleFxuICogaHNsYVxuICogcGVyY2VudFxuICogcHhcbiAqIHJnYlVuaXRcbiAqIHJnYlxuICogc2NhbGVcbiAqL1xuaW1wb3J0IHsgY2xhbXAsIGZsb3cgfSBmcm9tICcuLi9pbmMvdHJhbnNmb3JtZXJzJztcbmltcG9ydCB7IGNyZWF0ZVVuaXRUeXBlLCBpc0ZpcnN0Q2hhcnMsIHNwbGl0Q29sb3JWYWx1ZXMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuLy8gU3RyaW5nIHByb3BlcnRpZXNcbmNvbnN0IFJFRCA9ICdSZWQnO1xuY29uc3QgR1JFRU4gPSAnR3JlZW4nO1xuY29uc3QgQkxVRSA9ICdCbHVlJztcbmNvbnN0IEFMUEhBID0gJ0FscGhhJztcbmNvbnN0IEhVRSA9ICdIdWUnO1xuY29uc3QgU0FUVVJBVElPTiA9ICdTYXR1cmF0aW9uJztcbmNvbnN0IExJR0hUTkVTUyA9ICdMaWdodG5lc3MnO1xuXG4vLyBUZW1wbGF0ZXNcbmNvbnN0IHJnYmFUZW1wbGF0ZSA9IChjb2xvcnMpID0+IGByZ2JhKCR7Y29sb3JzW1JFRF19LCAke2NvbG9yc1tHUkVFTl19LCAke2NvbG9yc1tCTFVFXX0sICR7Y29sb3JzW0FMUEhBXX0pYDtcbmNvbnN0IGhzbGFUZW1wbGF0ZSA9IChjb2xvcnMpID0+IGBoc2xhKCR7Y29sb3JzW0hVRV19LCAke2NvbG9yc1tTQVRVUkFUSU9OXX0sICR7Y29sb3JzW0xJR0hUTkVTU119LCAke2NvbG9yc1tBTFBIQV19KWA7XG5cbmV4cG9ydCBjb25zdCBudW1iZXIgPSB7XG4gIHRlc3Q6IGlzTnVtLFxuICBwYXJzZTogcGFyc2VGbG9hdFxufTtcblxuLy8gVmFsdWUgdHlwZXNcbmV4cG9ydCBjb25zdCBhbHBoYSA9IHtcbiAgLi4ubnVtYmVyLFxuICB0cmFuc2Zvcm06IGNsYW1wKDAsIDEpXG59O1xuXG5leHBvcnQgY29uc3QgZGVncmVlcyA9IGNyZWF0ZVVuaXRUeXBlKCdkZWcnKTtcbmV4cG9ydCBjb25zdCBwZXJjZW50ID0gY3JlYXRlVW5pdFR5cGUoJyUnKTtcbmV4cG9ydCBjb25zdCBweCA9IGNyZWF0ZVVuaXRUeXBlKCdweCcpO1xuXG5leHBvcnQgY29uc3Qgc2NhbGUgPSB7XG4gIC4uLm51bWJlcixcbiAgZGVmYXVsdDogMVxufTtcblxuZXhwb3J0IGNvbnN0IHJnYlVuaXQgPSB7XG4gIC4uLm51bWJlcixcbiAgdHJhbnNmb3JtOiBmbG93KFxuICAgIC8vaHR0cDovL2NvZGVwZW4uaW8vb3N1Ymxha2UvZnVsbC94R1ZWYU4vXG4gICAgLy8gKHYsIHZhbHVlLCBhY3Rpb24pID0+IHtcbiAgICAvLyAgIGlmIChhY3Rpb24pIHtcbiAgICAvLyAgICAgY29uc3QgZnJvbUNvbG9yID0gYWN0aW9uLmZyb20gKiBhY3Rpb24uZnJvbTtcbiAgICAvLyAgICAgY29uc3QgdG9Db2xvciA9IGFjdGlvbi50byAqIGFjdGlvbi50bztcbiAgICAvLyAgICAgcmV0dXJuIE1hdGguc3FydChhY3Rpb24ucHJvZ3Jlc3MgKiAodG9Db2xvciAtIGZyb21Db2xvcikgKyBmcm9tQ29sb3IpO1xuICAgIC8vICAgfVxuXG4gICAgLy8gICByZXR1cm4gdjtcbiAgICAvLyB9LFxuICAgIGNsYW1wKDAsIDI1NSksXG4gICAgTWF0aC5yb3VuZFxuICApXG59O1xuXG5leHBvcnQgY29uc3QgcmdiYSA9IHtcbiAgY2hpbGRUeXBlczoge1xuICAgIFtSRURdOiByZ2JVbml0LFxuICAgIFtHUkVFTl06IHJnYlVuaXQsXG4gICAgW0JMVUVdOiByZ2JVbml0LFxuICAgIFtBTFBIQV06IGFscGhhXG4gIH0sXG5cbiAgdGVzdDogaXNGaXJzdENoYXJzKCdyZ2InKSxcblxuICBwYXJzZTogc3BsaXRDb2xvclZhbHVlcyhbUkVELCBHUkVFTiwgQkxVRSwgQUxQSEFdKSxcblxuICB0cmFuc2Zvcm06IHJnYmFUZW1wbGF0ZVxufTtcblxuZXhwb3J0IGNvbnN0IGhleCA9IHtcbiAgLi4ucmdiYSxcblxuICB0ZXN0OiBpc0ZpcnN0Q2hhcnMoJyMnKSxcblxuICBwYXJzZTogKHYpID0+IHtcbiAgICBsZXQgciwgZywgYjtcblxuICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgaWYgKHYubGVuZ3RoID4gNCkge1xuICAgICAgciA9IHYuc3Vic3RyKDEsIDIpO1xuICAgICAgZyA9IHYuc3Vic3RyKDMsIDIpO1xuICAgICAgYiA9IHYuc3Vic3RyKDUsIDIpO1xuXG4gICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICB9IGVsc2Uge1xuICAgICAgciA9IHYuc3Vic3RyKDEsIDEpO1xuICAgICAgZyA9IHYuc3Vic3RyKDIsIDEpO1xuICAgICAgYiA9IHYuc3Vic3RyKDMsIDEpO1xuICAgICAgciArPSByO1xuICAgICAgZyArPSBnO1xuICAgICAgYiArPSBiO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBSZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICAgIEdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgICBCbHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgICBBbHBoYTogMVxuICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBoc2xhID0ge1xuICBjaGlsZFR5cGVzOiB7XG4gICAgW0hVRV06IG51bWJlcixcbiAgICBbU0FUVVJBVElPTl06IHBlcmNlbnQsXG4gICAgW0xJR0hUTkVTU106IHBlcmNlbnQsXG4gICAgW0FMUEhBXTogYWxwaGFcbiAgfSxcblxuICB0ZXN0OiBpc0ZpcnN0Q2hhcnMoJ2hzbCcpLFxuXG4gIHBhcnNlOiBzcGxpdENvbG9yVmFsdWVzKFtIVUUsIFNBVFVSQVRJT04sIExJR0hUTkVTUywgQUxQSEFdKSxcblxuICBjb21iaW5lOiBoc2xhVGVtcGxhdGVcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9IHtcbiAgY2hpbGRUeXBlczoge1xuICAgIC4uLmhzbGEuY2hpbGRUeXBlcyxcbiAgICAuLi5yZ2JhLmNoaWxkVHlwZXNcbiAgfSxcblxuICB0ZXN0OiAodmFsdWUpID0+IHJnYmEudGVzdCh2YWx1ZSkgfHwgaGV4LnRlc3QodmFsdWUpIHx8IGhzbGEudGVzdCh2YWx1ZSlcbn07XG4iXX0=

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getColorValues = exports.findValueAndUnit = exports.createUnitType = exports.isFirstChars = exports.contains = exports.splitCommaDelimited = undefined;
	exports.splitColorValues = splitColorValues;
	
	var _utils = __webpack_require__(18);
	
	var _transformers = __webpack_require__(27);
	
	/*
	  Split comma-delimited string
	
	  "foo,bar" -> ["foo", "bar"]
	
	  @param [string]
	  @return [array]
	*/
	var splitCommaDelimited = exports.splitCommaDelimited = function (value) {
	  return (0, _utils.isString)(value) ? value.split(/,\s*/) : [value];
	};
	
	/**
	 *  Returns a function that will check any argument for `term`
	 * `contains('needle')('haystack')`
	 */
	var contains = exports.contains = function (term) {
	  return function (v) {
	    return (0, _utils.isString)(term) && v.indexOf(term) !== -1;
	  };
	};
	
	/**
	 *  Returns a function that will check to see if an argument is
	 *  the first characters in the provided `term`
	 * `isFirstChars('needle')('haystack')`
	 */
	var isFirstChars = exports.isFirstChars = function (term) {
	  return function (v) {
	    return (0, _utils.isString)(term) && v.indexOf(term) === 0;
	  };
	};
	
	/**
	 * Create a unit value type
	 */
	var createUnitType = exports.createUnitType = function (type) {
	  return {
	    test: contains(type),
	    parse: parseFloat,
	    transform: (0, _transformers.appendUnit)(type)
	  };
	};
	
	/**
	 * Creates a function that will split color
	 * values from string into an object of properties
	 * `splitColorValues(['Red', 'Green', 'Blue'])('rgba(0,0,0)')`
	 */
	function splitColorValues(terms) {
	  var numTerms = terms.length;
	
	  return function (v) {
	    var values = {};
	    var valuesArray = splitCommaDelimited((0, _utils.getValueFromFunctionString)(v));
	
	    for (var i = 0; i < numTerms; i++) {
	      values[terms[i]] = valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
	    }
	
	    return values;
	  };
	}
	
	/*
	  Split a value into a value/unit object
	  
	    "200px" -> { value: 200, unit: "px" }
	    
	  @param [string]: Value to split
	  @return [object]: Object with value and unit props
	*/
	var findValueAndUnit = exports.findValueAndUnit = function (value) {
	  if (value.match) {
	    var splitValue = value.match(/(-?\d*\.?\d*)(.*)/);
	
	    return {
	      value: parseFloat(splitValue[1]),
	      unit: splitValue[2]
	    };
	  } else {
	    return { value: value };
	  }
	};
	
	/*
	  Split color string into map of color properties
	
	  "rgba(255, 255, 255, 0)", ["Red", 'Green", "Blue", "Alpha"]
	
	  { Red: 255... }
	*/
	var getColorValues = exports.getColorValues = function (value, colorTerms) {
	  var numColorTerms = colorTerms.length;
	  var colorValues = {};
	  var colors = splitCommaDelimited((0, _utils.getValueFromFunctionString)(value));
	
	  for (var i = 0; i < numColorTerms; i++) {
	    colorValues[colorTerms[i]] = colors[i] !== undefined ? colors[i] : 1;
	  }
	
	  return colorValues;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS91dGlscy5qcyJdLCJuYW1lcyI6WyJzcGxpdENvbG9yVmFsdWVzIiwic3BsaXRDb21tYURlbGltaXRlZCIsInZhbHVlIiwic3BsaXQiLCJjb250YWlucyIsInRlcm0iLCJ2IiwiaW5kZXhPZiIsImlzRmlyc3RDaGFycyIsImNyZWF0ZVVuaXRUeXBlIiwidHlwZSIsInRlc3QiLCJwYXJzZSIsInBhcnNlRmxvYXQiLCJ0cmFuc2Zvcm0iLCJ0ZXJtcyIsIm51bVRlcm1zIiwibGVuZ3RoIiwidmFsdWVzIiwidmFsdWVzQXJyYXkiLCJpIiwidW5kZWZpbmVkIiwiZmluZFZhbHVlQW5kVW5pdCIsIm1hdGNoIiwic3BsaXRWYWx1ZSIsInVuaXQiLCJnZXRDb2xvclZhbHVlcyIsImNvbG9yVGVybXMiLCJudW1Db2xvclRlcm1zIiwiY29sb3JWYWx1ZXMiLCJjb2xvcnMiXSwibWFwcGluZ3MiOiI7Ozs7UUE4Q2dCQSxnQixHQUFBQSxnQjs7QUE5Q2hCOztBQUNBOztBQUVBOzs7Ozs7OztBQVFPLElBQU1DLG9EQUFzQixVQUFDQyxLQUFEO0FBQUEsU0FBVyxxQkFBU0EsS0FBVCxJQUFrQkEsTUFBTUMsS0FBTixDQUFZLE1BQVosQ0FBbEIsR0FBd0MsQ0FBQ0QsS0FBRCxDQUFuRDtBQUFBLENBQTVCOztBQUVQOzs7O0FBSU8sSUFBTUUsOEJBQVcsVUFBQ0MsSUFBRDtBQUFBLFNBQVUsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3ZDLFdBQVEscUJBQVNELElBQVQsS0FBa0JDLEVBQUVDLE9BQUYsQ0FBVUYsSUFBVixNQUFvQixDQUFDLENBQS9DO0FBQ0QsR0FGdUI7QUFBQSxDQUFqQjs7QUFJUDs7Ozs7QUFLTyxJQUFNRyxzQ0FBZSxVQUFDSCxJQUFEO0FBQUEsU0FBVSxVQUFDQyxDQUFELEVBQU87QUFDM0MsV0FBUSxxQkFBU0QsSUFBVCxLQUFrQkMsRUFBRUMsT0FBRixDQUFVRixJQUFWLE1BQW9CLENBQTlDO0FBQ0QsR0FGMkI7QUFBQSxDQUFyQjs7QUFJUDs7O0FBR08sSUFBTUksMENBQWlCLFVBQUNDLElBQUQsRUFBVTtBQUN0QyxTQUFPO0FBQ0xDLFVBQU1QLFNBQVNNLElBQVQsQ0FERDtBQUVMRSxXQUFPQyxVQUZGO0FBR0xDLGVBQVcsOEJBQVdKLElBQVg7QUFITixHQUFQO0FBS0QsQ0FOTTs7QUFRUDs7Ozs7QUFLTyxTQUFTVixnQkFBVCxDQUEwQmUsS0FBMUIsRUFBaUM7QUFDdEMsTUFBTUMsV0FBV0QsTUFBTUUsTUFBdkI7O0FBRUEsU0FBTyxVQUFVWCxDQUFWLEVBQWE7QUFDbEIsUUFBTVksU0FBUyxFQUFmO0FBQ0EsUUFBTUMsY0FBY2xCLG9CQUFvQix1Q0FBMkJLLENBQTNCLENBQXBCLENBQXBCOztBQUVBLFNBQUssSUFBSWMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSixRQUFwQixFQUE4QkksR0FBOUIsRUFBbUM7QUFDakNGLGFBQU9ILE1BQU1LLENBQU4sQ0FBUCxJQUFvQkQsWUFBWUMsQ0FBWixNQUFtQkMsU0FBcEIsR0FBaUNSLFdBQVdNLFlBQVlDLENBQVosQ0FBWCxDQUFqQyxHQUE4RCxDQUFqRjtBQUNEOztBQUVELFdBQU9GLE1BQVA7QUFDRCxHQVREO0FBVUQ7O0FBRUQ7Ozs7Ozs7O0FBUU8sSUFBTUksOENBQW1CLFVBQUNwQixLQUFELEVBQVc7QUFDekMsTUFBSUEsTUFBTXFCLEtBQVYsRUFBaUI7QUFDZixRQUFNQyxhQUFhdEIsTUFBTXFCLEtBQU4sQ0FBWSxtQkFBWixDQUFuQjs7QUFFQSxXQUFPO0FBQ0xyQixhQUFPVyxXQUFXVyxXQUFXLENBQVgsQ0FBWCxDQURGO0FBRUxDLFlBQU9ELFdBQVcsQ0FBWDtBQUZGLEtBQVA7QUFJRCxHQVBELE1BT087QUFDTCxXQUFPLEVBQUV0QixZQUFGLEVBQVA7QUFDRDtBQUNGLENBWE07O0FBYVA7Ozs7Ozs7QUFPTyxJQUFNd0IsMENBQWlCLFVBQUN4QixLQUFELEVBQVF5QixVQUFSLEVBQXVCO0FBQ25ELE1BQU1DLGdCQUFnQkQsV0FBV1YsTUFBakM7QUFDQSxNQUFNWSxjQUFjLEVBQXBCO0FBQ0EsTUFBTUMsU0FBUzdCLG9CQUFvQix1Q0FBMkJDLEtBQTNCLENBQXBCLENBQWY7O0FBRUEsT0FBSyxJQUFJa0IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJUSxhQUFwQixFQUFtQ1IsR0FBbkMsRUFBd0M7QUFDdENTLGdCQUFZRixXQUFXUCxDQUFYLENBQVosSUFBOEJVLE9BQU9WLENBQVAsTUFBY0MsU0FBZixHQUE0QlMsT0FBT1YsQ0FBUCxDQUE1QixHQUF3QyxDQUFyRTtBQUNEOztBQUVELFNBQU9TLFdBQVA7QUFDRCxDQVZNIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcsIGlzU3RyaW5nIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCB7IGFwcGVuZFVuaXQgfSBmcm9tICcuLi9pbmMvdHJhbnNmb3JtZXJzJztcblxuLypcbiAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc3BsaXRDb21tYURlbGltaXRlZCA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIGFueSBhcmd1bWVudCBmb3IgYHRlcm1gXG4gKiBgY29udGFpbnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG5leHBvcnQgY29uc3QgY29udGFpbnMgPSAodGVybSkgPT4gKHYpID0+IHtcbiAgcmV0dXJuIChpc1N0cmluZyh0ZXJtKSAmJiB2LmluZGV4T2YodGVybSkgIT09IC0xKTtcbn07XG5cbi8qKlxuICogIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgdG8gc2VlIGlmIGFuIGFyZ3VtZW50IGlzXG4gKiAgdGhlIGZpcnN0IGNoYXJhY3RlcnMgaW4gdGhlIHByb3ZpZGVkIGB0ZXJtYFxuICogYGlzRmlyc3RDaGFycygnbmVlZGxlJykoJ2hheXN0YWNrJylgXG4gKi9cbmV4cG9ydCBjb25zdCBpc0ZpcnN0Q2hhcnMgPSAodGVybSkgPT4gKHYpID0+IHtcbiAgcmV0dXJuIChpc1N0cmluZyh0ZXJtKSAmJiB2LmluZGV4T2YodGVybSkgPT09IDApO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSB1bml0IHZhbHVlIHR5cGVcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVVuaXRUeXBlID0gKHR5cGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0ZXN0OiBjb250YWlucyh0eXBlKSxcbiAgICBwYXJzZTogcGFyc2VGbG9hdCxcbiAgICB0cmFuc2Zvcm06IGFwcGVuZFVuaXQodHlwZSlcbiAgfTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBzcGxpdCBjb2xvclxuICogdmFsdWVzIGZyb20gc3RyaW5nIGludG8gYW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcbiAqIGBzcGxpdENvbG9yVmFsdWVzKFsnUmVkJywgJ0dyZWVuJywgJ0JsdWUnXSkoJ3JnYmEoMCwwLDApJylgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdENvbG9yVmFsdWVzKHRlcm1zKSB7XG4gIGNvbnN0IG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGNvbnN0IHZhbHVlcyA9IHt9O1xuICAgIGNvbnN0IHZhbHVlc0FycmF5ID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2KSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgIHZhbHVlc1t0ZXJtc1tpXV0gPSAodmFsdWVzQXJyYXlbaV0gIT09IHVuZGVmaW5lZCkgPyBwYXJzZUZsb2F0KHZhbHVlc0FycmF5W2ldKSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcbn1cblxuLypcbiAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgXG4gICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICBcbiAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuKi9cbmV4cG9ydCBjb25zdCBmaW5kVmFsdWVBbmRVbml0ID0gKHZhbHVlKSA9PiB7XG4gIGlmICh2YWx1ZS5tYXRjaCkge1xuICAgIGNvbnN0IHNwbGl0VmFsdWUgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbHVlWzFdKSxcbiAgICAgIHVuaXQ6ICBzcGxpdFZhbHVlWzJdXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyB2YWx1ZSB9O1xuICB9XG59O1xuXG4vKlxuICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLCBbXCJSZWRcIiwgJ0dyZWVuXCIsIFwiQmx1ZVwiLCBcIkFscGhhXCJdXG5cbiAgeyBSZWQ6IDI1NS4uLiB9XG4qL1xuZXhwb3J0IGNvbnN0IGdldENvbG9yVmFsdWVzID0gKHZhbHVlLCBjb2xvclRlcm1zKSA9PiB7XG4gIGNvbnN0IG51bUNvbG9yVGVybXMgPSBjb2xvclRlcm1zLmxlbmd0aDtcbiAgY29uc3QgY29sb3JWYWx1ZXMgPSB7fTtcbiAgY29uc3QgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2YWx1ZSkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29sb3JUZXJtczsgaSsrKSB7XG4gICAgY29sb3JWYWx1ZXNbY29sb3JUZXJtc1tpXV0gPSAoY29sb3JzW2ldICE9PSB1bmRlZmluZWQpID8gY29sb3JzW2ldIDogMTtcbiAgfVxuXG4gIHJldHVybiBjb2xvclZhbHVlcztcbn07XG4iXX0=

/***/ },
/* 27 */
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
	
	    var i = 1;
	
	    // Find index of range start
	    for (; i < rangeLength; i++) {
	      if (input[i] > v || i === finalIndex) {
	        break;
	      }
	    }
	
	    var progressInRange = (0, _calc.getProgressFromValue)(input[i - 1], input[i], v);
	    var easedProgress = rangeEasing ? rangeEasing[i](progressInRange) : progressInRange;
	    return (0, _calc.getValueFromProgress)(output[i - 1], output[i], easedProgress);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbImFwcGVuZFVuaXQiLCJ1bml0IiwidiIsImZsb3ciLCJ0cmFuc2Zvcm1lcnMiLCJudW1UcmFuc2Zvcm1lcnMiLCJsZW5ndGgiLCJpIiwiYWNjIiwiYXJncyIsImludGVycG9sYXRlIiwiaW5wdXQiLCJvdXRwdXQiLCJyYW5nZUVhc2luZyIsInJhbmdlTGVuZ3RoIiwiZmluYWxJbmRleCIsInByb2dyZXNzSW5SYW5nZSIsImVhc2VkUHJvZ3Jlc3MiLCJjbGFtcFVuZGVyIiwibWF4IiwiTWF0aCIsIm1pbiIsImNsYW1wT3ZlciIsImNsYW1wIiwic3RlcHMiLCJwcm9ncmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQTs7Ozs7OztBQU9PLElBQU1BLGtDQUFhLFVBQUNDLElBQUQ7QUFBQSxTQUFVLFVBQUNDLENBQUQ7QUFBQSxnQkFBVUEsQ0FBVixHQUFjRCxJQUFkO0FBQUEsR0FBVjtBQUFBLENBQW5COztBQUVQOzs7Ozs7O0FBT08sSUFBTUUsc0JBQU8sWUFBcUI7QUFBQSxvQ0FBakJDLFlBQWlCO0FBQWpCQSxnQkFBaUI7QUFBQTs7QUFDdkMsTUFBTUMsa0JBQWtCRCxhQUFhRSxNQUFyQztBQUNBLE1BQUlDLElBQUksQ0FBUjs7QUFFQSxTQUFPLFVBQUNDLEdBQUQsRUFBa0I7QUFBQSx1Q0FBVEMsSUFBUztBQUFUQSxVQUFTO0FBQUE7O0FBQ3ZCLFFBQUlQLElBQUlNLEdBQVI7QUFDQSxTQUFLRCxJQUFJLENBQVQsRUFBWUEsSUFBSUYsZUFBaEIsRUFBaUNFLEdBQWpDLEVBQXNDO0FBQ3BDTCxVQUFJRSxhQUFhRyxDQUFiLHVCQUFnQkwsQ0FBaEIsU0FBc0JPLElBQXRCLEVBQUo7QUFDRDs7QUFFRCxXQUFPUCxDQUFQO0FBQ0QsR0FQRDtBQVFELENBWk07O0FBY0EsSUFBTVEsb0NBQWMsVUFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQWdCQyxXQUFoQixFQUFnQztBQUN6RCxNQUFNQyxjQUFjSCxNQUFNTCxNQUExQjtBQUNBLE1BQU1TLGFBQWFELGNBQWMsQ0FBakM7O0FBRUEsU0FBTyxVQUFDWixDQUFELEVBQU87QUFDWjtBQUNBLFFBQUlBLEtBQUtTLE1BQU0sQ0FBTixDQUFULEVBQW1CO0FBQ2pCLGFBQU9DLE9BQU8sQ0FBUCxDQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJVixLQUFLUyxNQUFNSSxVQUFOLENBQVQsRUFBNEI7QUFDMUIsYUFBT0gsT0FBT0csVUFBUCxDQUFQO0FBQ0Q7O0FBRUQsUUFBSVIsSUFBSSxDQUFSOztBQUVBO0FBQ0EsV0FBT0EsSUFBSU8sV0FBWCxFQUF3QlAsR0FBeEIsRUFBNkI7QUFDM0IsVUFBSUksTUFBTUosQ0FBTixJQUFXTCxDQUFYLElBQWdCSyxNQUFNUSxVQUExQixFQUFzQztBQUNwQztBQUNEO0FBQ0Y7O0FBRUQsUUFBTUMsa0JBQWtCLGdDQUFxQkwsTUFBTUosSUFBSSxDQUFWLENBQXJCLEVBQW1DSSxNQUFNSixDQUFOLENBQW5DLEVBQTZDTCxDQUE3QyxDQUF4QjtBQUNBLFFBQU1lLGdCQUFpQkosV0FBRCxHQUFnQkEsWUFBWU4sQ0FBWixFQUFlUyxlQUFmLENBQWhCLEdBQWtEQSxlQUF4RTtBQUNBLFdBQU8sZ0NBQXFCSixPQUFPTCxJQUFJLENBQVgsQ0FBckIsRUFBb0NLLE9BQU9MLENBQVAsQ0FBcEMsRUFBK0NVLGFBQS9DLENBQVA7QUFDRCxHQXZCRDtBQXdCRCxDQTVCTTs7QUE4QlA7Ozs7Ozs7QUFPTyxJQUFNQyxrQ0FBYSxVQUFDQyxHQUFEO0FBQUEsU0FBUyxVQUFDakIsQ0FBRDtBQUFBLFdBQU9rQixLQUFLQyxHQUFMLENBQVNuQixDQUFULEVBQVlpQixHQUFaLENBQVA7QUFBQSxHQUFUO0FBQUEsQ0FBbkI7QUFDQSxJQUFNRyxnQ0FBWSxVQUFDRCxHQUFEO0FBQUEsU0FBUyxVQUFDbkIsQ0FBRDtBQUFBLFdBQU9rQixLQUFLRCxHQUFMLENBQVNqQixDQUFULEVBQVltQixHQUFaLENBQVA7QUFBQSxHQUFUO0FBQUEsQ0FBbEI7QUFDQSxJQUFNRSx3QkFBUSxVQUFDRixHQUFELEVBQU1GLEdBQU47QUFBQSxTQUFjaEIsS0FBS21CLFVBQVVELEdBQVYsQ0FBTCxFQUFxQkgsV0FBV0MsR0FBWCxDQUFyQixDQUFkO0FBQUEsQ0FBZDs7QUFFQSxJQUFNSyx3QkFBUSxVQUFDQSxLQUFELEVBQVFILEdBQVIsRUFBYUYsR0FBYjtBQUFBLFNBQXFCLFVBQUNqQixDQUFELEVBQU87QUFDL0MsUUFBTXVCLFdBQVcsZ0NBQXFCSixHQUFyQixFQUEwQkYsR0FBMUIsRUFBK0JqQixDQUEvQixDQUFqQjtBQUNBLFdBQU8sd0JBQWFzQixLQUFiLEVBQW9CQyxRQUFwQixDQUFQO0FBQ0QsR0FIb0I7QUFBQSxDQUFkIiwiZmlsZSI6InRyYW5zZm9ybWVycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcywgc3RlcFByb2dyZXNzIH0gZnJvbSAnLi9jYWxjJztcblxuLyoqXG4gKiBBcHBlbmQgVW5pdFxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBhcHBlbmQgdGhlIHVuaXQgdG8gYSBnaXZlbiB2YWx1ZVxuICogYXBwZW5kVW5pdCgncHgnKSgyMCkgLT4gJzIwcHgnXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVuaXQpXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBhcHBlbmRVbml0ID0gKHVuaXQpID0+ICh2KSA9PiBgJHt2fSR7dW5pdH1gO1xuXG4vKipcbiAqIEZsb3dcbiAqIENvbXBvc2Ugb3RoZXIgdHJhbnNmb3JtZXJzIHRvIHJ1biBsaW5lYXJpbHlcbiAqIGZsb3cobWluKDIwKSwgbWF4KDQwKSlcbiAqIEBwYXJhbSAgey4uLmZ1bmN0aW9uc30gdHJhbnNmb3JtZXJzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGZsb3cgPSAoLi4udHJhbnNmb3JtZXJzKSA9PiB7XG4gIGNvbnN0IG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICByZXR1cm4gKGFjYywgLi4uYXJncykgPT4ge1xuICAgIGxldCB2ID0gYWNjO1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbnRlcnBvbGF0ZSA9IChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykgPT4ge1xuICBjb25zdCByYW5nZUxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgY29uc3QgZmluYWxJbmRleCA9IHJhbmdlTGVuZ3RoIC0gMTtcblxuICByZXR1cm4gKHYpID0+IHtcbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1pbmltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPD0gaW5wdXRbMF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbMF07XG4gICAgfVxuXG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtYXhpbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2ID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgIH1cblxuICAgIGxldCBpID0gMTtcblxuICAgIC8vIEZpbmQgaW5kZXggb2YgcmFuZ2Ugc3RhcnRcbiAgICBmb3IgKDsgaSA8IHJhbmdlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpbnB1dFtpXSA+IHYgfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzc0luUmFuZ2UgPSBnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbnB1dFtpIC0gMV0sIGlucHV0W2ldLCB2KTtcbiAgICBjb25zdCBlYXNlZFByb2dyZXNzID0gKHJhbmdlRWFzaW5nKSA/IHJhbmdlRWFzaW5nW2ldKHByb2dyZXNzSW5SYW5nZSkgOiBwcm9ncmVzc0luUmFuZ2U7XG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKG91dHB1dFtpIC0gMV0sIG91dHB1dFtpXSwgZWFzZWRQcm9ncmVzcyk7XG4gIH07XG59O1xuXG4vKipcbiAqIENsYW1wIHZhbHVlIGJldHdlZW5cbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVzdHJpY3QgYSBnaXZlbiB2YWx1ZSBiZXR3ZWVuIGBtaW5gIGFuZCBgbWF4YFxuICogQHBhcmFtICB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBjbGFtcFVuZGVyID0gKG1heCkgPT4gKHYpID0+IE1hdGgubWluKHYsIG1heCk7XG5leHBvcnQgY29uc3QgY2xhbXBPdmVyID0gKG1pbikgPT4gKHYpID0+IE1hdGgubWF4KHYsIG1pbik7XG5leHBvcnQgY29uc3QgY2xhbXAgPSAobWluLCBtYXgpID0+IGZsb3coY2xhbXBPdmVyKG1pbiksIGNsYW1wVW5kZXIobWF4KSk7XG5cbmV4cG9ydCBjb25zdCBzdGVwcyA9IChzdGVwcywgbWluLCBtYXgpID0+ICh2KSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzID0gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUobWluLCBtYXgsIHYpO1xuICByZXR1cm4gc3RlcFByb2dyZXNzKHN0ZXBzLCBwcm9ncmVzcyk7XG59O1xuXG4iXX0=

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(15);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(13);
	
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
	    this.current = v;
	    (0, _framesync.onFrameUpdate)(this.update);
	  };
	
	  return Value;
	}(_2.default);
	
	Value.defaultProps = {
	  passive: true
	};
	
	exports.default = function (current) {
	  return new Value({ current: current });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3ZhbHVlLmpzIl0sIm5hbWVzIjpbIlZhbHVlIiwic2V0IiwidiIsImN1cnJlbnQiLCJ1cGRhdGUiLCJkZWZhdWx0UHJvcHMiLCJwYXNzaXZlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxLOzs7Ozs7Ozs7a0JBS0pDLEcsZ0JBQUlDLEMsRUFBRztBQUNMLFNBQUtDLE9BQUwsR0FBZUQsQ0FBZjtBQUNBLGtDQUFjLEtBQUtFLE1BQW5CO0FBQ0QsRzs7Ozs7QUFSR0osSyxDQUNHSyxZLEdBQWU7QUFDcEJDLFdBQVM7QUFEVyxDOztrQkFVVCxVQUFDSCxPQUFEO0FBQUEsU0FBYSxJQUFJSCxLQUFKLENBQVUsRUFBRUcsZ0JBQUYsRUFBVixDQUFiO0FBQUEsQyIsImZpbGUiOiJ2YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgb25GcmFtZVVwZGF0ZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5cbmNsYXNzIFZhbHVlIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH07XG5cbiAgc2V0KHYpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB2O1xuICAgIG9uRnJhbWVVcGRhdGUodGhpcy51cGRhdGUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXJyZW50KSA9PiBuZXcgVmFsdWUoeyBjdXJyZW50IH0pO1xuIl19

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (element, props) {
	  return new SVGRenderer(_extends({
	    element: element
	  }, props));
	};
	
	var _ = __webpack_require__(16);
	
	var _2 = _interopRequireDefault(_);
	
	var _build = __webpack_require__(31);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _transformProps = __webpack_require__(22);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(32);
	
	var _valueTypes2 = _interopRequireDefault(_valueTypes);
	
	var _utils = __webpack_require__(18);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzIl0sIm5hbWVzIjpbImVsZW1lbnQiLCJwcm9wcyIsIlNWR1JlbmRlcmVyIiwiZ2V0QkJveCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJlbGVtZW50RGltZW5zaW9ucyIsIm9uUmVuZGVyIiwiYXR0cnMiLCJzdGF0ZSIsIm9uUmVhZCIsImtleSIsImdldEF0dHJpYnV0ZSIsInZhbHVlVHlwZSIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFnQ2UsVUFBVUEsT0FBVixFQUFtQkMsS0FBbkIsRUFBMEI7QUFDdkMsU0FBTyxJQUFJQyxXQUFKO0FBQ0xGO0FBREssS0FFRkMsS0FGRSxFQUFQO0FBSUQsQzs7QUFyQ0Q7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQyxXOzs7QUFDSix1QkFBWUQsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixxQkFBTUEsS0FBTixDQURpQjs7QUFBQSxnQ0FHZUEsTUFBTUQsT0FBTixDQUFjRyxPQUFkLEVBSGY7QUFBQSxRQUdUQyxDQUhTLHlCQUdUQSxDQUhTO0FBQUEsUUFHTkMsQ0FITSx5QkFHTkEsQ0FITTtBQUFBLFFBR0hDLEtBSEcseUJBR0hBLEtBSEc7QUFBQSxRQUdJQyxNQUhKLHlCQUdJQSxNQUhKOztBQUlqQixVQUFLQyxpQkFBTCxHQUF5QixFQUFFSixJQUFGLEVBQUtDLElBQUwsRUFBUUMsWUFBUixFQUFlQyxjQUFmLEVBQXpCO0FBSmlCO0FBS2xCOzt3QkFFREUsUSx1QkFBVztBQUFBLFFBQ0RULE9BREMsR0FDVyxLQUFLQyxLQURoQixDQUNERCxPQURDOztBQUVULFFBQU1VLFFBQVEscUJBQU0sS0FBS0MsS0FBWCxFQUFrQixLQUFLSCxpQkFBdkIsQ0FBZDtBQUNBLDRCQUFZUixPQUFaLEVBQXFCVSxLQUFyQjtBQUNELEc7O3dCQUVERSxNLG1CQUFPQyxHLEVBQUs7QUFBQSxRQUNGYixPQURFLEdBQ1UsS0FBS0MsS0FEZixDQUNGRCxPQURFOzs7QUFHVixRQUFJLENBQUMseUJBQWVhLEdBQWYsQ0FBTCxFQUEwQjtBQUN4QixhQUFPYixRQUFRYyxZQUFSLENBQXFCRCxHQUFyQixDQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBTUUsWUFBWSxxQkFBYUYsR0FBYixDQUFsQjtBQUNBLGFBQVFFLFNBQUQsR0FBY0EsVUFBVUMsT0FBeEIsR0FBa0MsQ0FBekM7QUFDRDtBQUNGLEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi4vJztcbmltcG9ydCBidWlsZCBmcm9tICcuL2J1aWxkJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi92YWx1ZS10eXBlcyc7XG5pbXBvcnQgeyBzZXRET01BdHRycyB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5cbmNsYXNzIFNWR1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gcHJvcHMuZWxlbWVudC5nZXRCQm94KCk7XG4gICAgdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9O1xuICB9XG5cbiAgb25SZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGF0dHJzID0gYnVpbGQodGhpcy5zdGF0ZSwgdGhpcy5lbGVtZW50RGltZW5zaW9ucyk7XG4gICAgc2V0RE9NQXR0cnMoZWxlbWVudCwgYXR0cnMpO1xuICB9XG5cbiAgb25SZWFkKGtleSkge1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghdHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlVHlwZU1hcFtrZXldO1xuICAgICAgcmV0dXJuICh2YWx1ZVR5cGUpID8gdmFsdWVUeXBlLmRlZmF1bHQgOiAwO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBTVkdSZW5kZXJlcih7XG4gICAgZWxlbWVudCxcbiAgICAuLi5wcm9wc1xuICB9KTtcbn1cbiJdfQ==

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (element, props) {
	  return new SVGPathRenderer(_extends({
	    element: element
	  }, props));
	};
	
	var _ = __webpack_require__(16);
	
	var _2 = _interopRequireDefault(_);
	
	var _build = __webpack_require__(33);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _utils = __webpack_require__(18);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanMiXSwibmFtZXMiOlsiZWxlbWVudCIsInByb3BzIiwiU1ZHUGF0aFJlbmRlcmVyIiwiZ2V0QkJveCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJlbGVtZW50RGltZW5zaW9ucyIsInBhdGhMZW5ndGgiLCJnZXRUb3RhbExlbmd0aCIsIm9uUmVuZGVyIiwic3RhdGUiLCJvblJlYWQiLCJrZXkiLCJnZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkE2QmUsVUFBVUEsT0FBVixFQUFtQkMsS0FBbkIsRUFBMEI7QUFDdkMsU0FBTyxJQUFJQyxlQUFKO0FBQ0xGO0FBREssS0FFRkMsS0FGRSxFQUFQO0FBSUQsQzs7QUFsQ0Q7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1DLGU7OztBQUNKLDJCQUFZRCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLHFCQUFNQSxLQUFOLENBRGlCOztBQUFBLGdDQUdlQSxNQUFNRCxPQUFOLENBQWNHLE9BQWQsRUFIZjtBQUFBLFFBR1RDLENBSFMseUJBR1RBLENBSFM7QUFBQSxRQUdOQyxDQUhNLHlCQUdOQSxDQUhNO0FBQUEsUUFHSEMsS0FIRyx5QkFHSEEsS0FIRztBQUFBLFFBR0lDLE1BSEoseUJBR0lBLE1BSEo7O0FBSWpCLFVBQUtDLGlCQUFMLEdBQXlCO0FBQ3ZCSixVQUR1QjtBQUV2QkMsVUFGdUI7QUFHdkJDLGtCQUh1QjtBQUl2QkMsb0JBSnVCO0FBS3ZCRSxrQkFBWVIsTUFBTUQsT0FBTixDQUFjVSxjQUFkO0FBTFcsS0FBekI7QUFKaUI7QUFXbEI7OzRCQUVEQyxRLHVCQUFXO0FBQUEsUUFDREYsVUFEQyxHQUNjLEtBQUtELGlCQURuQixDQUNEQyxVQURDO0FBQUEsUUFFRFQsT0FGQyxHQUVXLEtBQUtDLEtBRmhCLENBRURELE9BRkM7O0FBR1QsNEJBQVlBLE9BQVosRUFBcUIscUJBQU0sS0FBS1ksS0FBWCxFQUFrQkgsVUFBbEIsQ0FBckI7QUFDRCxHOzs0QkFFREksTSxtQkFBT0MsRyxFQUFLO0FBQ1YsV0FBTyxLQUFLYixLQUFMLENBQVdELE9BQVgsQ0FBbUJlLFlBQW5CLENBQWdDRCxHQUFoQyxDQUFQO0FBQ0QsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZW5kZXJlciBmcm9tICcuLi8nO1xuaW1wb3J0IGJ1aWxkIGZyb20gJy4vYnVpbGQnO1xuaW1wb3J0IHsgc2V0RE9NQXR0cnMgfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuXG5jbGFzcyBTVkdQYXRoUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKTtcbiAgICB0aGlzLmVsZW1lbnREaW1lbnNpb25zID0ge1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhdGhMZW5ndGg6IHByb3BzLmVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKVxuICAgIH07XG4gIH1cblxuICBvblJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBhdGhMZW5ndGggfSA9IHRoaXMuZWxlbWVudERpbWVuc2lvbnM7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIHNldERPTUF0dHJzKGVsZW1lbnQsIGJ1aWxkKHRoaXMuc3RhdGUsIHBhdGhMZW5ndGgpKTtcbiAgfVxuXG4gIG9uUmVhZChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5lbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1BhdGhSZW5kZXJlcih7XG4gICAgZWxlbWVudCxcbiAgICAuLi5wcm9wc1xuICB9KTtcbn1cbiJdfQ==

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(18);
	
	var _transformProps = __webpack_require__(22);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL2J1aWxkLmpzIl0sIm5hbWVzIjpbImJ1aWxkIiwiWkVST19OT1RfWkVSTyIsInN0YXRlIiwiZGF0YSIsImhhc1RyYW5zZm9ybSIsInByb3BzIiwic2NhbGUiLCJ1bmRlZmluZWQiLCJzY2FsZVgiLCJzY2FsZVkiLCJ0cmFuc2Zvcm1PcmlnaW5YIiwid2lkdGgiLCJvcmlnaW5YIiwieCIsInRyYW5zZm9ybU9yaWdpblkiLCJoZWlnaHQiLCJvcmlnaW5ZIiwieSIsInNjYWxlVHJhbnNmb3JtWCIsInNjYWxlVHJhbnNmb3JtWSIsInNjYWxlUmVwbGFjZVgiLCJzY2FsZVJlcGxhY2VZIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJyb3RhdGUiLCJza2V3WCIsInNrZXdZIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJkZWZhdWx0VmFsdWUiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7a0JBS3dCQSxLOztBQUx4Qjs7QUFDQTs7Ozs7O0FBRUEsSUFBTUMsZ0JBQWdCLE1BQXRCOztBQUVlLFNBQVNELEtBQVQsQ0FBZUUsS0FBZixFQUFzQkMsSUFBdEIsRUFBNEI7QUFDekMsTUFBSUMsZUFBZSxLQUFuQjtBQUNBLE1BQU1DLFFBQVEsRUFBZDtBQUNBLE1BQU1DLFFBQVFKLE1BQU1JLEtBQU4sS0FBZ0JDLFNBQWhCLEdBQTRCTCxNQUFNSSxLQUFOLElBQWVMLGFBQTNDLEdBQTJEQyxNQUFNTSxNQUFOLElBQWdCLENBQXpGO0FBQ0EsTUFBTUMsU0FBU1AsTUFBTU8sTUFBTixLQUFpQkYsU0FBakIsR0FBNkJMLE1BQU1PLE1BQU4sSUFBZ0JSLGFBQTdDLEdBQTZESyxTQUFTLENBQXJGO0FBQ0EsTUFBTUksbUJBQW1CUCxLQUFLUSxLQUFMLElBQWMsQ0FBQ1QsTUFBTVUsT0FBTixJQUFpQixFQUFsQixJQUF3QixHQUF0QyxJQUE2Q1QsS0FBS1UsQ0FBM0U7QUFDQSxNQUFNQyxtQkFBbUJYLEtBQUtZLE1BQUwsSUFBZSxDQUFDYixNQUFNYyxPQUFOLElBQWlCLEVBQWxCLElBQXdCLEdBQXZDLElBQThDYixLQUFLYyxDQUE1RTtBQUNBLE1BQU1DLGtCQUFrQixDQUFFUixnQkFBRixJQUFzQkosUUFBUSxDQUE5QixDQUF4QjtBQUNBLE1BQU1hLGtCQUFrQixDQUFFTCxnQkFBRixJQUFzQkwsU0FBUyxDQUEvQixDQUF4QjtBQUNBLE1BQU1XLGdCQUFnQlYsbUJBQW1CSixLQUF6QztBQUNBLE1BQU1lLGdCQUFnQlAsbUJBQW1CTCxNQUF6QztBQUNBLE1BQU1hLFlBQVk7QUFDaEJDLDhCQUF3QnJCLE1BQU1zQixVQUE5QixVQUE2Q3RCLE1BQU11QixVQUFuRCxPQURnQjtBQUVoQm5CLDBCQUFvQlksZUFBcEIsVUFBd0NDLGVBQXhDLGdCQUFrRWIsS0FBbEUsVUFBNEVHLE1BQTVFLG9CQUFpR1csYUFBakcsVUFBbUhDLGFBQW5ILE9BRmdCO0FBR2hCSyx3QkFBa0J4QixNQUFNd0IsTUFBeEIsVUFBbUNoQixnQkFBbkMsVUFBd0RJLGdCQUF4RCxPQUhnQjtBQUloQmEsc0JBQWdCekIsTUFBTXlCLEtBQXRCLE9BSmdCO0FBS2hCQyxzQkFBZ0IxQixNQUFNMEIsS0FBdEI7QUFMZ0IsR0FBbEI7O0FBUUEsT0FBSyxJQUFJQyxHQUFULElBQWdCM0IsS0FBaEIsRUFBdUI7QUFDckIsUUFBSUEsTUFBTTRCLGNBQU4sQ0FBcUJELEdBQXJCLENBQUosRUFBK0I7QUFDN0IsVUFBSSx5QkFBZUEsR0FBZixDQUFKLEVBQXlCO0FBQ3ZCekIsdUJBQWUsSUFBZjtBQUNELE9BRkQsTUFFTztBQUNMQyxjQUFNLHdCQUFZd0IsR0FBWixDQUFOLElBQTBCM0IsTUFBTTJCLEdBQU4sQ0FBMUI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsTUFBSXpCLFlBQUosRUFBa0I7QUFDaEJDLFVBQU1pQixTQUFOLEdBQWtCLEVBQWxCOztBQUVBLFNBQUssSUFBSU8sSUFBVCxJQUFnQlAsU0FBaEIsRUFBMkI7QUFDekIsVUFBSUEsVUFBVVEsY0FBVixDQUF5QkQsSUFBekIsQ0FBSixFQUFtQztBQUNqQyxZQUFNRSxlQUFnQkYsU0FBUSxPQUFULEdBQW9CLEdBQXBCLEdBQTBCLEdBQS9DO0FBQ0F4QixjQUFNaUIsU0FBTixJQUFtQkEsVUFBVU8sSUFBVixFQUFlRyxPQUFmLENBQXVCLFlBQXZCLEVBQXFDRCxZQUFyQyxDQUFuQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPMUIsS0FBUDtBQUNEIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxUb0Rhc2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuXG5jb25zdCBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZChzdGF0ZSwgZGF0YSkge1xuICBsZXQgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIGNvbnN0IHByb3BzID0ge307XG4gIGNvbnN0IHNjYWxlID0gc3RhdGUuc2NhbGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlIHx8IFpFUk9fTk9UX1pFUk8gOiBzdGF0ZS5zY2FsZVggfHwgMTtcbiAgY29uc3Qgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDE7XG4gIGNvbnN0IHRyYW5zZm9ybU9yaWdpblggPSBkYXRhLndpZHRoICogKChzdGF0ZS5vcmlnaW5YIHx8IDUwKSAvIDEwMCkgKyBkYXRhLng7XG4gIGNvbnN0IHRyYW5zZm9ybU9yaWdpblkgPSBkYXRhLmhlaWdodCAqICgoc3RhdGUub3JpZ2luWSB8fCA1MCkgLyAxMDApICsgZGF0YS55O1xuICBjb25zdCBzY2FsZVRyYW5zZm9ybVggPSAtIHRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKTtcbiAgY29uc3Qgc2NhbGVUcmFuc2Zvcm1ZID0gLSB0cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpO1xuICBjb25zdCBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlO1xuICBjb25zdCBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWTtcbiAgY29uc3QgdHJhbnNmb3JtID0ge1xuICAgIHRyYW5zbGF0ZTogYHRyYW5zbGF0ZSgke3N0YXRlLnRyYW5zbGF0ZVh9LCAke3N0YXRlLnRyYW5zbGF0ZVl9KSBgLFxuICAgIHNjYWxlOiBgdHJhbnNsYXRlKCR7c2NhbGVUcmFuc2Zvcm1YfSwgJHtzY2FsZVRyYW5zZm9ybVl9KSBzY2FsZSgke3NjYWxlfSwgJHtzY2FsZVl9KSB0cmFuc2xhdGUoJHtzY2FsZVJlcGxhY2VYfSwgJHtzY2FsZVJlcGxhY2VZfSkgYCxcbiAgICByb3RhdGU6IGByb3RhdGUoJHtzdGF0ZS5yb3RhdGV9LCAke3RyYW5zZm9ybU9yaWdpblh9LCAke3RyYW5zZm9ybU9yaWdpbll9KSBgLFxuICAgIHNrZXdYOiBgc2tld1goJHtzdGF0ZS5za2V3WH0pIGAsXG4gICAgc2tld1k6IGBza2V3WSgke3N0YXRlLnNrZXdZfSkgYFxuICB9O1xuXG4gIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHNbY2FtZWxUb0Rhc2goa2V5KV0gPSBzdGF0ZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgIGZvciAobGV0IGtleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSAoa2V5ID09PSAnc2NhbGUnKSA/ICcxJyA6ICcwJztcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtrZXldLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn0iXX0=

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _types = __webpack_require__(25);
	
	exports.default = {
	  fill: _types.color,
	  stroke: _types.color,
	  scale: _types.scale,
	  scaleX: _types.scale,
	  scaleY: _types.scale,
	  d: _types.complex,
	  points: _types.complex,
	  opacity: _types.alpha,
	  fillOpacity: _types.alpha,
	  strokeOpacity: _types.alpha
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbImZpbGwiLCJzdHJva2UiLCJzY2FsZSIsInNjYWxlWCIsInNjYWxlWSIsImQiLCJwb2ludHMiLCJvcGFjaXR5IiwiZmlsbE9wYWNpdHkiLCJzdHJva2VPcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O2tCQUVlO0FBQ2JBLG9CQURhO0FBRWJDLHNCQUZhO0FBR2JDLHFCQUhhO0FBSWJDLHNCQUphO0FBS2JDLHNCQUxhO0FBTWJDLG1CQU5hO0FBT2JDLHdCQVBhO0FBUWJDLHVCQVJhO0FBU2JDLDJCQVRhO0FBVWJDO0FBVmEsQyIsImZpbGUiOiJ2YWx1ZS10eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFscGhhLCBjb2xvciwgY29tcGxleCwgc2NhbGUgfSBmcm9tICcuLi8uLi92YWx1ZS90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmlsbDogY29sb3IsXG4gIHN0cm9rZTogY29sb3IsXG4gIHNjYWxlOiBzY2FsZSxcbiAgc2NhbGVYOiBzY2FsZSxcbiAgc2NhbGVZOiBzY2FsZSxcbiAgZDogY29tcGxleCxcbiAgcG9pbnRzOiBjb21wbGV4LFxuICBvcGFjaXR5OiBhbHBoYSxcbiAgZmlsbE9wYWNpdHk6IGFscGhhLFxuICBzdHJva2VPcGFjaXR5OiBhbHBoYVxufTsiXX0=

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	/*
	  Convert percentage to pixels
	  
	  @param [number]: Percentage of total length
	  @param [number]: Total length
	*/
	var percentToPixels = function (percent, length) {
	  return parseFloat(percent) / 100 * length + 'px';
	};
	
	exports.default = function (state, length) {
	  var styles = {};
	  var dashArrayStyles = {
	    length: 0,
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvYnVpbGQuanMiXSwibmFtZXMiOlsicGVyY2VudFRvUGl4ZWxzIiwicGVyY2VudCIsImxlbmd0aCIsInBhcnNlRmxvYXQiLCJzdGF0ZSIsInN0eWxlcyIsImRhc2hBcnJheVN0eWxlcyIsInNwYWNpbmciLCJoYXNEYXNoQXJyYXkiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7O0FBTUEsSUFBTUEsa0JBQWtCLFVBQUNDLE9BQUQsRUFBVUMsTUFBVjtBQUFBLFNBQXNCQyxXQUFXRixPQUFYLElBQXNCLEdBQXZCLEdBQThCQyxNQUE5QixHQUF1QyxJQUE1RDtBQUFBLENBQXhCOztrQkFFZSxVQUFDRSxLQUFELEVBQVFGLE1BQVIsRUFBbUI7QUFDaEMsTUFBTUcsU0FBUyxFQUFmO0FBQ0EsTUFBTUMsa0JBQWtCO0FBQ3RCSixZQUFRLENBRGM7QUFFdEJLLGFBQVNMLFNBQVM7QUFGSSxHQUF4QjtBQUlBLE1BQUlNLGVBQWUsS0FBbkI7O0FBRUEsT0FBSyxJQUFJQyxHQUFULElBQWdCTCxLQUFoQixFQUF1QjtBQUNyQixRQUFJQSxNQUFNTSxjQUFOLENBQXFCRCxHQUFyQixDQUFKLEVBQStCO0FBQzdCLFVBQU1FLFFBQVFQLE1BQU1LLEdBQU4sQ0FBZDs7QUFFQSxjQUFRQSxHQUFSO0FBQ0EsYUFBSyxRQUFMO0FBQ0EsYUFBSyxTQUFMO0FBQ0VELHlCQUFlLElBQWY7QUFDQUYsMEJBQWdCRyxHQUFoQixJQUF1QlQsZ0JBQWdCVyxLQUFoQixFQUF1QlQsTUFBdkIsQ0FBdkI7QUFDQTtBQUNGLGFBQUssUUFBTDtBQUNFRyxpQkFBTyxtQkFBUCxJQUE4QkwsZ0JBQWdCLENBQUNXLEtBQWpCLEVBQXdCVCxNQUF4QixDQUE5QjtBQUNBO0FBQ0Y7QUFDRUcsaUJBQU9JLEdBQVAsSUFBY0UsS0FBZDtBQVZGO0FBWUQ7QUFDRjs7QUFFRCxNQUFJSCxZQUFKLEVBQWtCO0FBQ2hCSCxXQUFPLGtCQUFQLElBQTZCQyxnQkFBZ0JKLE1BQWhCLEdBQXlCLEdBQXpCLEdBQStCSSxnQkFBZ0JDLE9BQTVFO0FBQ0Q7O0FBRUQsU0FBT0YsTUFBUDtBQUNELEMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xuY29uc3QgcGVyY2VudFRvUGl4ZWxzID0gKHBlcmNlbnQsIGxlbmd0aCkgPT4gKHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDApICogbGVuZ3RoICsgJ3B4JztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBsZW5ndGgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0ge307XG4gIGNvbnN0IGRhc2hBcnJheVN0eWxlcyA9IHtcbiAgICBsZW5ndGg6IDAsXG4gICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICB9O1xuICBsZXQgaGFzRGFzaEFycmF5ID0gZmFsc2U7XG5cbiAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICBzdHlsZXNbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGRhc2hBcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBkYXNoQXJyYXlTdHlsZXMuc3BhY2luZztcbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59OyJdfQ==

/***/ },
/* 34 */,
/* 35 */,
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.color = exports.hsla = exports.hex = exports.rgba = exports.rgbUnit = exports.scale = exports.px = exports.percent = exports.degrees = exports.alpha = exports.number = undefined;
	
	var _childTypes, _childTypes2;
	
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
	
	
	var _transformers = __webpack_require__(27);
	
	var _utils = __webpack_require__(18);
	
	var _utils2 = __webpack_require__(18);
	
	// String properties
	var RED = 'Red';
	var GREEN = 'Green';
	var BLUE = 'Blue';
	var ALPHA = 'Alpha';
	var HUE = 'Hue';
	var SATURATION = 'Saturation';
	var LIGHTNESS = 'Lightness';
	
	// Templates
	var rgbaTemplate = function (colors) {
	  return 'rgba(' + colors[RED] + ', ' + colors[GREEN] + ', ' + colors[BLUE] + ', ' + colors[ALPHA] + ')';
	};
	var hslaTemplate = function (colors) {
	  return 'hsla(' + colors[HUE] + ', ' + colors[SATURATION] + ', ' + colors[LIGHTNESS] + ', ' + colors[ALPHA] + ')';
	};
	
	var number = exports.number = {
	  test: _utils2.isNum,
	  parse: parseFloat
	};
	
	// Value types
	var alpha = exports.alpha = _extends({}, number, {
	  transform: (0, _transformers.clamp)(0, 1)
	});
	
	var degrees = exports.degrees = (0, _utils.createUnitType)('deg');
	var percent = exports.percent = (0, _utils.createUnitType)('%');
	var px = exports.px = (0, _utils.createUnitType)('px');
	
	var scale = exports.scale = _extends({}, number, {
	  default: 1
	});
	
	var rgbUnit = exports.rgbUnit = _extends({}, number, {
	  transform: (0, _transformers.flow)(
	  //http://codepen.io/osublake/full/xGVVaN/
	  // (v, value, action) => {
	  //   if (action) {
	  //     const fromColor = action.from * action.from;
	  //     const toColor = action.to * action.to;
	  //     return Math.sqrt(action.progress * (toColor - fromColor) + fromColor);
	  //   }
	
	  //   return v;
	  // },
	  (0, _transformers.clamp)(0, 255), Math.round)
	});
	
	var rgba = exports.rgba = {
	  childTypes: (_childTypes = {}, _childTypes[RED] = rgbUnit, _childTypes[GREEN] = rgbUnit, _childTypes[BLUE] = rgbUnit, _childTypes[ALPHA] = alpha, _childTypes),
	
	  test: (0, _utils.isFirstChars)('rgb'),
	
	  parse: (0, _utils.splitColorValues)([RED, GREEN, BLUE, ALPHA]),
	
	  transform: rgbaTemplate
	};
	
	var hex = exports.hex = _extends({}, rgba, {
	
	  test: (0, _utils.isFirstChars)('#'),
	
	  parse: function (v) {
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
	      Red: parseInt(r, 16),
	      Green: parseInt(g, 16),
	      Blue: parseInt(b, 16),
	      Alpha: 1
	    };
	  }
	});
	
	var hsla = exports.hsla = {
	  childTypes: (_childTypes2 = {}, _childTypes2[HUE] = number, _childTypes2[SATURATION] = percent, _childTypes2[LIGHTNESS] = percent, _childTypes2[ALPHA] = alpha, _childTypes2),
	
	  test: (0, _utils.isFirstChars)('hsl'),
	
	  parse: (0, _utils.splitColorValues)([HUE, SATURATION, LIGHTNESS, ALPHA]),
	
	  combine: hslaTemplate
	};
	
	var color = exports.color = {
	  childTypes: _extends({}, hsla.childTypes, rgba.childTypes),
	
	  test: function (value) {
	    return rgba.test(value) || hex.test(value) || hsla.test(value);
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdmFsdWUtdHlwZXMuanMiXSwibmFtZXMiOlsiUkVEIiwiR1JFRU4iLCJCTFVFIiwiQUxQSEEiLCJIVUUiLCJTQVRVUkFUSU9OIiwiTElHSFRORVNTIiwicmdiYVRlbXBsYXRlIiwiY29sb3JzIiwiaHNsYVRlbXBsYXRlIiwibnVtYmVyIiwidGVzdCIsInBhcnNlIiwicGFyc2VGbG9hdCIsImFscGhhIiwidHJhbnNmb3JtIiwiZGVncmVlcyIsInBlcmNlbnQiLCJweCIsInNjYWxlIiwiZGVmYXVsdCIsInJnYlVuaXQiLCJNYXRoIiwicm91bmQiLCJyZ2JhIiwiY2hpbGRUeXBlcyIsImhleCIsInYiLCJyIiwiZyIsImIiLCJsZW5ndGgiLCJzdWJzdHIiLCJSZWQiLCJwYXJzZUludCIsIkdyZWVuIiwiQmx1ZSIsIkFscGhhIiwiaHNsYSIsImNvbWJpbmUiLCJjb2xvciIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O2tRQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBLElBQU1BLE1BQU0sS0FBWjtBQUNBLElBQU1DLFFBQVEsT0FBZDtBQUNBLElBQU1DLE9BQU8sTUFBYjtBQUNBLElBQU1DLFFBQVEsT0FBZDtBQUNBLElBQU1DLE1BQU0sS0FBWjtBQUNBLElBQU1DLGFBQWEsWUFBbkI7QUFDQSxJQUFNQyxZQUFZLFdBQWxCOztBQUVBO0FBQ0EsSUFBTUMsZUFBZSxVQUFDQyxNQUFEO0FBQUEsbUJBQW9CQSxPQUFPUixHQUFQLENBQXBCLFVBQW9DUSxPQUFPUCxLQUFQLENBQXBDLFVBQXNETyxPQUFPTixJQUFQLENBQXRELFVBQXVFTSxPQUFPTCxLQUFQLENBQXZFO0FBQUEsQ0FBckI7QUFDQSxJQUFNTSxlQUFlLFVBQUNELE1BQUQ7QUFBQSxtQkFBb0JBLE9BQU9KLEdBQVAsQ0FBcEIsVUFBb0NJLE9BQU9ILFVBQVAsQ0FBcEMsVUFBMkRHLE9BQU9GLFNBQVAsQ0FBM0QsVUFBaUZFLE9BQU9MLEtBQVAsQ0FB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Q0FBcEIsSUFBdUNILEtBQUszQixJQUFMLENBQVU4QixLQUFWLENBQWxEO0FBQUE7QUFOYSxDQUFkIiwiZmlsZSI6InZhbHVlLXR5cGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBWYWx1ZSB0eXBlc1xuICpcbiAqIGFscGhhXG4gKiBkZWdyZWVzXG4gKiBoZXhcbiAqIGhzbGFcbiAqIHBlcmNlbnRcbiAqIHB4XG4gKiByZ2JVbml0XG4gKiByZ2JcbiAqIHNjYWxlXG4gKi9cbmltcG9ydCB7IGNsYW1wLCBmbG93IH0gZnJvbSAnLi4vaW5jL3RyYW5zZm9ybWVycyc7XG5pbXBvcnQgeyBjcmVhdGVVbml0VHlwZSwgaXNGaXJzdENoYXJzLCBzcGxpdENvbG9yVmFsdWVzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBpc051bSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbi8vIFN0cmluZyBwcm9wZXJ0aWVzXG5jb25zdCBSRUQgPSAnUmVkJztcbmNvbnN0IEdSRUVOID0gJ0dyZWVuJztcbmNvbnN0IEJMVUUgPSAnQmx1ZSc7XG5jb25zdCBBTFBIQSA9ICdBbHBoYSc7XG5jb25zdCBIVUUgPSAnSHVlJztcbmNvbnN0IFNBVFVSQVRJT04gPSAnU2F0dXJhdGlvbic7XG5jb25zdCBMSUdIVE5FU1MgPSAnTGlnaHRuZXNzJztcblxuLy8gVGVtcGxhdGVzXG5jb25zdCByZ2JhVGVtcGxhdGUgPSAoY29sb3JzKSA9PiBgcmdiYSgke2NvbG9yc1tSRURdfSwgJHtjb2xvcnNbR1JFRU5dfSwgJHtjb2xvcnNbQkxVRV19LCAke2NvbG9yc1tBTFBIQV19KWA7XG5jb25zdCBoc2xhVGVtcGxhdGUgPSAoY29sb3JzKSA9PiBgaHNsYSgke2NvbG9yc1tIVUVdfSwgJHtjb2xvcnNbU0FUVVJBVElPTl19LCAke2NvbG9yc1tMSUdIVE5FU1NdfSwgJHtjb2xvcnNbQUxQSEFdfSlgO1xuXG5leHBvcnQgY29uc3QgbnVtYmVyID0ge1xuICB0ZXN0OiBpc051bSxcbiAgcGFyc2U6IHBhcnNlRmxvYXRcbn07XG5cbi8vIFZhbHVlIHR5cGVzXG5leHBvcnQgY29uc3QgYWxwaGEgPSB7XG4gIC4uLm51bWJlcixcbiAgdHJhbnNmb3JtOiBjbGFtcCgwLCAxKVxufTtcblxuZXhwb3J0IGNvbnN0IGRlZ3JlZXMgPSBjcmVhdGVVbml0VHlwZSgnZGVnJyk7XG5leHBvcnQgY29uc3QgcGVyY2VudCA9IGNyZWF0ZVVuaXRUeXBlKCclJyk7XG5leHBvcnQgY29uc3QgcHggPSBjcmVhdGVVbml0VHlwZSgncHgnKTtcblxuZXhwb3J0IGNvbnN0IHNjYWxlID0ge1xuICAuLi5udW1iZXIsXG4gIGRlZmF1bHQ6IDFcbn07XG5cbmV4cG9ydCBjb25zdCByZ2JVbml0ID0ge1xuICAuLi5udW1iZXIsXG4gIHRyYW5zZm9ybTogZmxvdyhcbiAgICAvL2h0dHA6Ly9jb2RlcGVuLmlvL29zdWJsYWtlL2Z1bGwveEdWVmFOL1xuICAgIC8vICh2LCB2YWx1ZSwgYWN0aW9uKSA9PiB7XG4gICAgLy8gICBpZiAoYWN0aW9uKSB7XG4gICAgLy8gICAgIGNvbnN0IGZyb21Db2xvciA9IGFjdGlvbi5mcm9tICogYWN0aW9uLmZyb207XG4gICAgLy8gICAgIGNvbnN0IHRvQ29sb3IgPSBhY3Rpb24udG8gKiBhY3Rpb24udG87XG4gICAgLy8gICAgIHJldHVybiBNYXRoLnNxcnQoYWN0aW9uLnByb2dyZXNzICogKHRvQ29sb3IgLSBmcm9tQ29sb3IpICsgZnJvbUNvbG9yKTtcbiAgICAvLyAgIH1cblxuICAgIC8vICAgcmV0dXJuIHY7XG4gICAgLy8gfSxcbiAgICBjbGFtcCgwLCAyNTUpLFxuICAgIE1hdGgucm91bmRcbiAgKVxufTtcblxuZXhwb3J0IGNvbnN0IHJnYmEgPSB7XG4gIGNoaWxkVHlwZXM6IHtcbiAgICBbUkVEXTogcmdiVW5pdCxcbiAgICBbR1JFRU5dOiByZ2JVbml0LFxuICAgIFtCTFVFXTogcmdiVW5pdCxcbiAgICBbQUxQSEFdOiBhbHBoYVxuICB9LFxuXG4gIHRlc3Q6IGlzRmlyc3RDaGFycygncmdiJyksXG5cbiAgcGFyc2U6IHNwbGl0Q29sb3JWYWx1ZXMoW1JFRCwgR1JFRU4sIEJMVUUsIEFMUEhBXSksXG5cbiAgdHJhbnNmb3JtOiByZ2JhVGVtcGxhdGVcbn07XG5cbmV4cG9ydCBjb25zdCBoZXggPSB7XG4gIC4uLnJnYmEsXG5cbiAgdGVzdDogaXNGaXJzdENoYXJzKCcjJyksXG5cbiAgcGFyc2U6ICh2KSA9PiB7XG4gICAgbGV0IHIsIGcsIGI7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgIGlmICh2Lmxlbmd0aCA+IDQpIHtcbiAgICAgIHIgPSB2LnN1YnN0cigxLCAyKTtcbiAgICAgIGcgPSB2LnN1YnN0cigzLCAyKTtcbiAgICAgIGIgPSB2LnN1YnN0cig1LCAyKTtcblxuICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSB2LnN1YnN0cigxLCAxKTtcbiAgICAgIGcgPSB2LnN1YnN0cigyLCAxKTtcbiAgICAgIGIgPSB2LnN1YnN0cigzLCAxKTtcbiAgICAgIHIgKz0gcjtcbiAgICAgIGcgKz0gZztcbiAgICAgIGIgKz0gYjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgUmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgICBHcmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgICAgQmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgQWxwaGE6IDFcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaHNsYSA9IHtcbiAgY2hpbGRUeXBlczoge1xuICAgIFtIVUVdOiBudW1iZXIsXG4gICAgW1NBVFVSQVRJT05dOiBwZXJjZW50LFxuICAgIFtMSUdIVE5FU1NdOiBwZXJjZW50LFxuICAgIFtBTFBIQV06IGFscGhhXG4gIH0sXG5cbiAgdGVzdDogaXNGaXJzdENoYXJzKCdoc2wnKSxcblxuICBwYXJzZTogc3BsaXRDb2xvclZhbHVlcyhbSFVFLCBTQVRVUkFUSU9OLCBMSUdIVE5FU1MsIEFMUEhBXSksXG5cbiAgY29tYmluZTogaHNsYVRlbXBsYXRlXG59O1xuXG5leHBvcnQgY29uc3QgY29sb3IgPSB7XG4gIGNoaWxkVHlwZXM6IHtcbiAgICAuLi5oc2xhLmNoaWxkVHlwZXMsXG4gICAgLi4ucmdiYS5jaGlsZFR5cGVzXG4gIH0sXG5cbiAgdGVzdDogKHZhbHVlKSA9PiByZ2JhLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2xhLnRlc3QodmFsdWUpXG59O1xuIl19

/***/ },
/* 37 */
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
	};
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvZWFzaW5nLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIIiwiY3JlYXRlUmV2ZXJzZWRFYXNpbmciLCJlYXNpbmciLCJwIiwiY3JlYXRlTWlycm9yZWRFYXNpbmciLCJsaW5lYXIiLCJjcmVhdGVFYXNlSW4iLCJwb3dlciIsImVhc2VJbiIsImVhc2VPdXQiLCJlYXNlSW5PdXQiLCJjaXJjSW4iLCJNYXRoIiwic2luIiwiYWNvcyIsImNpcmNPdXQiLCJjaXJjSW5PdXQiLCJjcmVhdGVCYWNrSW4iLCJiYWNrSW4iLCJiYWNrT3V0IiwiYmFja0luT3V0IiwiY3JlYXRlQW50aWNpcGF0ZUVhc2luZyIsImJhY2tFYXNpbmciLCJwb3ciLCJhbnRpY2lwYXRlIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNQSw2QkFBNkIsS0FBbkM7O0FBRU8sSUFBTUMsc0RBQXVCLFVBQUNDLE1BQUQ7QUFBQSxTQUFZLFVBQUNDLENBQUQ7QUFBQSxXQUFPLElBQUlELE9BQU8sSUFBSUMsQ0FBWCxDQUFYO0FBQUEsR0FBWjtBQUFBLENBQTdCO0FBQ0EsSUFBTUMsc0RBQXVCLFVBQUNGLE1BQUQ7QUFBQSxTQUFZLFVBQUNDLENBQUQ7QUFBQSxXQUFRQSxLQUFLLEdBQU4sR0FBYUQsT0FBTyxJQUFJQyxDQUFYLElBQWdCLENBQTdCLEdBQWlDLENBQUMsSUFBSUQsT0FBTyxLQUFLLElBQUlDLENBQVQsQ0FBUCxDQUFMLElBQTRCLENBQXBFO0FBQUEsR0FBWjtBQUFBLENBQTdCOztBQUVBLElBQU1FLDBCQUFTLFVBQUNGLENBQUQ7QUFBQSxTQUFPQSxDQUFQO0FBQUEsQ0FBZjs7QUFFQSxJQUFNRyxzQ0FBZSxVQUFDQyxLQUFEO0FBQUEsU0FBVyxVQUFDSixDQUFEO0FBQUEsb0JBQU9BLENBQVAsRUFBWUksS0FBWjtBQUFBLEdBQVg7QUFBQSxDQUFyQjtBQUNBLElBQU1DLDBCQUFTRixhQUFhLENBQWIsQ0FBZjtBQUNBLElBQU1HLDRCQUFVUixxQkFBcUJPLE1BQXJCLENBQWhCO0FBQ0EsSUFBTUUsZ0NBQVlOLHFCQUFxQkksTUFBckIsQ0FBbEI7O0FBRUEsSUFBTUcsMEJBQVMsVUFBQ1IsQ0FBRDtBQUFBLFNBQU8sSUFBSVMsS0FBS0MsR0FBTCxDQUFTRCxLQUFLRSxJQUFMLENBQVVYLENBQVYsQ0FBVCxDQUFYO0FBQUEsQ0FBZjtBQUNBLElBQU1ZLDRCQUFVZCxxQkFBcUJVLE1BQXJCLENBQWhCO0FBQ0EsSUFBTUssZ0NBQVlaLHFCQUFxQlcsT0FBckIsQ0FBbEI7O0FBRUEsSUFBTUUsc0NBQWUsVUFBQ1YsS0FBRDtBQUFBLFNBQVcsVUFBQ0osQ0FBRDtBQUFBLFdBQVFBLElBQUlBLENBQUwsSUFBVyxDQUFDSSxRQUFRLENBQVQsSUFBY0osQ0FBZCxHQUFrQkksS0FBN0IsQ0FBUDtBQUFBLEdBQVg7QUFBQSxDQUFyQjtBQUNBLElBQU1XLDBCQUFTRCxhQUFhakIsMEJBQWIsQ0FBZjtBQUNBLElBQU1tQiw0QkFBVWxCLHFCQUFxQmlCLE1BQXJCLENBQWhCO0FBQ0EsSUFBTUUsZ0NBQVloQixxQkFBcUJjLE1BQXJCLENBQWxCOztBQUVBLElBQU1HLDBEQUF5QixVQUFDZCxLQUFELEVBQVc7QUFDL0MsTUFBTWUsYUFBYUwsYUFBYVYsS0FBYixDQUFuQjtBQUNBLFNBQU8sVUFBQ0osQ0FBRDtBQUFBLFdBQVEsQ0FBQ0EsS0FBSyxDQUFOLElBQVcsQ0FBWixHQUFpQixNQUFNbUIsV0FBV25CLENBQVgsQ0FBdkIsR0FBdUMsT0FBTyxJQUFJUyxLQUFLVyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxJQUFPcEIsSUFBSSxDQUFYLENBQVosQ0FBWCxDQUE5QztBQUFBLEdBQVA7QUFDRCxDQUhNOztBQUtBLElBQU1xQixrQ0FBYUgsdUJBQXVCckIsMEJBQXZCLENBQW5CIiwiZmlsZSI6ImVhc2luZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIID0gMS41MjU7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXZlcnNlZEVhc2luZyA9IChlYXNpbmcpID0+IChwKSA9PiAxIC0gZWFzaW5nKDEgLSBwKTtcbmV4cG9ydCBjb25zdCBjcmVhdGVNaXJyb3JlZEVhc2luZyA9IChlYXNpbmcpID0+IChwKSA9PiAocCA8PSAwLjUpID8gZWFzaW5nKDIgKiBwKSAvIDIgOiAoMiAtIGVhc2luZygyICogKDEgLSBwKSkpIC8gMjtcblxuZXhwb3J0IGNvbnN0IGxpbmVhciA9IChwKSA9PiBwO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRWFzZUluID0gKHBvd2VyKSA9PiAocCkgPT4gcCAqKiBwb3dlcjtcbmV4cG9ydCBjb25zdCBlYXNlSW4gPSBjcmVhdGVFYXNlSW4oMik7XG5leHBvcnQgY29uc3QgZWFzZU91dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGVhc2VJbik7XG5leHBvcnQgY29uc3QgZWFzZUluT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoZWFzZUluKTtcblxuZXhwb3J0IGNvbnN0IGNpcmNJbiA9IChwKSA9PiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHApKTtcbmV4cG9ydCBjb25zdCBjaXJjT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoY2lyY0luKTtcbmV4cG9ydCBjb25zdCBjaXJjSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhjaXJjT3V0KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJhY2tJbiA9IChwb3dlcikgPT4gKHApID0+IChwICogcCkgKiAoKHBvd2VyICsgMSkgKiBwIC0gcG93ZXIpO1xuZXhwb3J0IGNvbnN0IGJhY2tJbiA9IGNyZWF0ZUJhY2tJbihERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG5leHBvcnQgY29uc3QgYmFja091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGJhY2tJbik7XG5leHBvcnQgY29uc3QgYmFja0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoYmFja0luKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSAocG93ZXIpID0+IHtcbiAgY29uc3QgYmFja0Vhc2luZyA9IGNyZWF0ZUJhY2tJbihwb3dlcik7XG4gIHJldHVybiAocCkgPT4gKChwICo9IDIpIDwgMSkgPyAwLjUgKiBiYWNrRWFzaW5nKHApIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocCAtIDEpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgYW50aWNpcGF0ZSA9IGNyZWF0ZUFudGljaXBhdGVFYXNpbmcoREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xuIl19

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjhjOWQzZjYxNjRhNTMxNWVlZjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90cmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BhcmFsbGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY2hhaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZGVsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9vbi1uZXh0LWZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvdmFsdWUtdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlL3R5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy92YWx1ZS10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2Vhc2luZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7QUFDQSw0Q0FBMkMsbVo7Ozs7OztBQ1QzQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxF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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7QUFDRCw0Q0FBMkMsdWlGOzs7Ozs7QUN4RTNDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtB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RUE7QUFDQTs7QUFFQTtBQUNBLDBCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsbTVPOzs7Ozs7QUMzSTNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUEyQyx1NUgiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBiOGM5ZDNmNjE2NGE1MzE1ZWVmMlxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCcuL3BvcG1vdGlvbicpO1xuXG52YXIgcG9wbW90aW9uID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3BvcG1vdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbndpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW5iRzlpWVd3dWFuTWlYU3dpYm1GdFpYTWlPbHNpY0c5d2JXOTBhVzl1SWl3aWQybHVaRzkzSWwwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQk96dEpRVUZaUVN4VE96czdPMEZCUTFwRExFOUJRVTlFTEZOQlFWQXNSMEZCYlVKQkxGTkJRVzVDSWl3aVptbHNaU0k2SW1kc2IySmhiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQXFJR0Z6SUhCdmNHMXZkR2x2YmlCbWNtOXRJQ2N1TDNCdmNHMXZkR2x2YmljN1hHNTNhVzVrYjNjdWNHOXdiVzkwYVc5dUlEMGdjRzl3Ylc5MGFXOXVPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdmdQYXRoID0gZXhwb3J0cy5zdmcgPSBleHBvcnRzLmNzcyA9IGV4cG9ydHMuUmVuZGVyZXIgPSBleHBvcnRzLmNvbXBvc2l0ZSA9IGV4cG9ydHMuY3Jvc3NGYWRlID0gZXhwb3J0cy5kZWxheSA9IGV4cG9ydHMuY2hhaW4gPSBleHBvcnRzLnBvaW50ZXIgPSBleHBvcnRzLnBhcmFsbGVsID0gZXhwb3J0cy5waHlzaWNzID0gZXhwb3J0cy50cmFjayA9IGV4cG9ydHMudHdlZW4gPSBleHBvcnRzLkFjdGlvbiA9IGV4cG9ydHMudmFsdWVUeXBlcyA9IGV4cG9ydHMudHJhbnNmb3JtZXJzID0gZXhwb3J0cy5lYXNpbmcgPSBleHBvcnRzLmN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lRW5kID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBleHBvcnRzLm9uRnJhbWVFbmQgPSBleHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLm9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLm9uRnJhbWVTdGFydCA9IHVuZGVmaW5lZDtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuL2ZyYW1lc3luYycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVTdGFydCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVN0YXJ0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVVwZGF0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVSZW5kZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVSZW5kZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lRW5kJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lRW5kO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZVN0YXJ0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lU3RhcnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lVXBkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lVXBkYXRlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZVJlbmRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVJlbmRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVFbmQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVFbmQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd0aW1lU2luY2VMYXN0RnJhbWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2N1cnJlbnRGcmFtZVRpbWVzdGFtcCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY3VycmVudEZyYW1lVGltZXN0YW1wO1xuICB9XG59KTtcblxudmFyIF9lYXNpbmcyID0gcmVxdWlyZSgnLi9pbmMvZWFzaW5nJyk7XG5cbnZhciBfZWFzaW5nID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2Vhc2luZzIpO1xuXG52YXIgX3RyYW5zZm9ybWVyczIgPSByZXF1aXJlKCcuL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHJhbnNmb3JtZXJzMik7XG5cbnZhciBfdmFsdWVUeXBlczIgPSByZXF1aXJlKCcuL2luYy92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdmFsdWVUeXBlczIpO1xuXG52YXIgX2FjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMnKTtcblxudmFyIF9hY3Rpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FjdGlvbnMpO1xuXG52YXIgX3R3ZWVuMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy90d2VlbicpO1xuXG52YXIgX3R3ZWVuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuMik7XG5cbnZhciBfdHJhY2syID0gcmVxdWlyZSgnLi9hY3Rpb25zL3RyYWNrJyk7XG5cbnZhciBfdHJhY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhY2syKTtcblxudmFyIF9waHlzaWNzMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9waHlzaWNzJyk7XG5cbnZhciBfcGh5c2ljczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9waHlzaWNzMik7XG5cbnZhciBfcGFyYWxsZWwyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BhcmFsbGVsJyk7XG5cbnZhciBfcGFyYWxsZWwzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyYWxsZWwyKTtcblxudmFyIF9wb2ludGVyMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9wb2ludGVyJyk7XG5cbnZhciBfcG9pbnRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb2ludGVyMik7XG5cbnZhciBfY2hhaW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NoYWluJyk7XG5cbnZhciBfY2hhaW4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hhaW4yKTtcblxudmFyIF9kZWxheTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvZGVsYXknKTtcblxudmFyIF9kZWxheTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWxheTIpO1xuXG52YXIgX2Nyb3NzRmFkZTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY3Jvc3MtZmFkZScpO1xuXG52YXIgX2Nyb3NzRmFkZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcm9zc0ZhZGUyKTtcblxudmFyIF9jb21wb3NpdGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NvbXBvc2l0ZScpO1xuXG52YXIgX2NvbXBvc2l0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGUyKTtcblxudmFyIF9yZW5kZXJlcnMgPSByZXF1aXJlKCcuL3JlbmRlcmVycycpO1xuXG52YXIgX3JlbmRlcmVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW5kZXJlcnMpO1xuXG52YXIgX2NzczIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9jc3MnKTtcblxudmFyIF9jc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzMik7XG5cbnZhciBfc3ZnMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL3N2ZycpO1xuXG52YXIgX3N2ZzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmcyKTtcblxudmFyIF9zdmdQYXRoMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL3N2Zy1wYXRoJyk7XG5cbnZhciBfc3ZnUGF0aDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmV4cG9ydHMuZWFzaW5nID0gX2Vhc2luZztcbmV4cG9ydHMudHJhbnNmb3JtZXJzID0gX3RyYW5zZm9ybWVycztcbmV4cG9ydHMudmFsdWVUeXBlcyA9IF92YWx1ZVR5cGVzO1xuXG4vLyBBY3Rpb25zXG5cbmV4cG9ydHMuQWN0aW9uID0gX2FjdGlvbnMyLmRlZmF1bHQ7XG5leHBvcnRzLnR3ZWVuID0gX3R3ZWVuMy5kZWZhdWx0O1xuZXhwb3J0cy50cmFjayA9IF90cmFjazMuZGVmYXVsdDtcbmV4cG9ydHMucGh5c2ljcyA9IF9waHlzaWNzMy5kZWZhdWx0O1xuZXhwb3J0cy5wYXJhbGxlbCA9IF9wYXJhbGxlbDMuZGVmYXVsdDtcbmV4cG9ydHMucG9pbnRlciA9IF9wb2ludGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5jaGFpbiA9IF9jaGFpbjMuZGVmYXVsdDtcbmV4cG9ydHMuZGVsYXkgPSBfZGVsYXkzLmRlZmF1bHQ7XG5leHBvcnRzLmNyb3NzRmFkZSA9IF9jcm9zc0ZhZGUzLmRlZmF1bHQ7XG5leHBvcnRzLmNvbXBvc2l0ZSA9IF9jb21wb3NpdGUzLmRlZmF1bHQ7XG5cbi8vIFJlbmRlcmVyc1xuXG5leHBvcnRzLlJlbmRlcmVyID0gX3JlbmRlcmVyczIuZGVmYXVsdDtcbmV4cG9ydHMuY3NzID0gX2NzczMuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnID0gX3N2ZzMuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnUGF0aCA9IF9zdmdQYXRoMy5kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3YjNCdGIzUnBiMjR1YW5NaVhTd2libUZ0WlhNaU9sc2liMjVHY21GdFpWTjBZWEowSWl3aWIyNUdjbUZ0WlZWd1pHRjBaU0lzSW05dVJuSmhiV1ZTWlc1a1pYSWlMQ0p2YmtaeVlXMWxSVzVrSWl3aVkyRnVZMlZzVDI1R2NtRnRaVk4wWVhKMElpd2lZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU0lzSW1OaGJtTmxiRTl1Um5KaGJXVlNaVzVrWlhJaUxDSmpZVzVqWld4UGJrWnlZVzFsUlc1a0lpd2lkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxJaXdpWTNWeWNtVnVkRVp5WVcxbFZHbHRaWE4wWVcxd0lpd2laV0Z6YVc1bklpd2lkSEpoYm5ObWIzSnRaWEp6SWl3aWRtRnNkV1ZVZVhCbGN5SXNJa0ZqZEdsdmJpSXNJblIzWldWdUlpd2lkSEpoWTJzaUxDSndhSGx6YVdOeklpd2ljR0Z5WVd4c1pXd2lMQ0p3YjJsdWRHVnlJaXdpWTJoaGFXNGlMQ0prWld4aGVTSXNJbU55YjNOelJtRmtaU0lzSW1OdmJYQnZjMmwwWlNJc0lsSmxibVJsY21WeUlpd2lZM056SWl3aWMzWm5JaXdpYzNablVHRjBhQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHpRa0ZGUlVFc1dUczdPenM3TzNOQ1FVTkJReXhoT3pzN096czdjMEpCUTBGRExHRTdPenM3T3p0elFrRkRRVU1zVlRzN096czdPM05DUVVOQlF5eHJRanM3T3pzN08zTkNRVU5CUXl4dFFqczdPenM3TzNOQ1FVTkJReXh0UWpzN096czdPM05DUVVOQlF5eG5RanM3T3pzN08zTkNRVU5CUXl4clFqczdPenM3TzNOQ1FVTkJReXh4UWpzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dFJRVWRWUXl4Tk8xRkJRMEZETEZrN1VVRkRRVU1zVlRzN1FVRkZXanM3VVVGRFQwTXNUVHRSUVVOQlF5eExPMUZCUTBGRExFczdVVUZEUVVNc1R6dFJRVU5CUXl4Uk8xRkJRMEZETEU4N1VVRkRRVU1zU3p0UlFVTkJReXhMTzFGQlEwRkRMRk03VVVGRFFVTXNVenM3UVVGRlVEczdVVUZEVDBNc1VUdFJRVU5CUXl4SE8xRkJRMEZETEVjN1VVRkRRVU1zVHlJc0ltWnBiR1VpT2lKd2IzQnRiM1JwYjI0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkx5QkdjbUZ0WlhONWJtTWdjMk5vWldSMWJHVnljMXh1Wlhod2IzSjBJSHRjYmlBZ2IyNUdjbUZ0WlZOMFlYSjBMRnh1SUNCdmJrWnlZVzFsVlhCa1lYUmxMRnh1SUNCdmJrWnlZVzFsVW1WdVpHVnlMRnh1SUNCdmJrWnlZVzFsUlc1a0xGeHVJQ0JqWVc1alpXeFBia1p5WVcxbFUzUmhjblFzWEc0Z0lHTmhibU5sYkU5dVJuSmhiV1ZWY0dSaGRHVXNYRzRnSUdOaGJtTmxiRTl1Um5KaGJXVlNaVzVrWlhJc1hHNGdJR05oYm1ObGJFOXVSbkpoYldWRmJtUXNYRzRnSUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlN4Y2JpQWdZM1Z5Y21WdWRFWnlZVzFsVkdsdFpYTjBZVzF3WEc1OUlHWnliMjBnSnk0dlpuSmhiV1Z6ZVc1akp6dGNibHh1Wlhod2IzSjBJQ29nWVhNZ1pXRnphVzVuSUdaeWIyMGdKeTR2YVc1akwyVmhjMmx1WnljN1hHNWxlSEJ2Y25RZ0tpQmhjeUIwY21GdWMyWnZjbTFsY25NZ1puSnZiU0FuTGk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6Snp0Y2JtVjRjRzl5ZENBcUlHRnpJSFpoYkhWbFZIbHdaWE1nWm5KdmJTQW5MaTlwYm1NdmRtRnNkV1V0ZEhsd1pYTW5PMXh1WEc0dkx5QkJZM1JwYjI1elhHNWxlSEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeWM3WEc1bGVIQnZjblFnZEhkbFpXNGdabkp2YlNBbkxpOWhZM1JwYjI1ekwzUjNaV1Z1Snp0Y2JtVjRjRzl5ZENCMGNtRmpheUJtY205dElDY3VMMkZqZEdsdmJuTXZkSEpoWTJzbk8xeHVaWGh3YjNKMElIQm9lWE5wWTNNZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDNCb2VYTnBZM01uTzF4dVpYaHdiM0owSUhCaGNtRnNiR1ZzSUdaeWIyMGdKeTR2WVdOMGFXOXVjeTl3WVhKaGJHeGxiQ2M3WEc1bGVIQnZjblFnY0c5cGJuUmxjaUJtY205dElDY3VMMkZqZEdsdmJuTXZjRzlwYm5SbGNpYzdYRzVsZUhCdmNuUWdZMmhoYVc0Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDJOb1lXbHVKenRjYm1WNGNHOXlkQ0JrWld4aGVTQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlpHVnNZWGtuTzF4dVpYaHdiM0owSUdOeWIzTnpSbUZrWlNCbWNtOXRJQ2N1TDJGamRHbHZibk12WTNKdmMzTXRabUZrWlNjN1hHNWxlSEJ2Y25RZ1kyOXRjRzl6YVhSbElHWnliMjBnSnk0dllXTjBhVzl1Y3k5amIyMXdiM05wZEdVbk8xeHVYRzR2THlCU1pXNWtaWEpsY25OY2JtVjRjRzl5ZENCU1pXNWtaWEpsY2lCbWNtOXRJQ2N1TDNKbGJtUmxjbVZ5Y3ljN1hHNWxlSEJ2Y25RZ1kzTnpJR1p5YjIwZ0p5NHZjbVZ1WkdWeVpYSnpMMk56Y3ljN1hHNWxlSEJ2Y25RZ2MzWm5JR1p5YjIwZ0p5NHZjbVZ1WkdWeVpYSnpMM04yWnljN1hHNWxlSEJ2Y25RZ2MzWm5VR0YwYUNCbWNtOXRJQ2N1TDNKbGJtUmxjbVZ5Y3k5emRtY3RjR0YwYUNjN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNtb290aCA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5kaXN0YW5jZSA9IGV4cG9ydHMuZGlsYXRlID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5hbmdsZSA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuLypcbiAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcGFyYW0gW251bWJlcl1cbiAgQHJldHVybiBbbnVtYmVyXVxuKi9cbnZhciB0b0RlY2ltYWwgPSBmdW5jdGlvbiAobnVtKSB7XG4gIHZhciBwcmVjaXNpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDI7XG5cbiAgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufTtcblxuLypcbiAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgXG4gIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICBhcmUgYXQgMCwwXG4gIFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFpFUk9fUE9JTlQ7XG4gIHJldHVybiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbnZhciBkZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgRGlsYXRlXG4gIFxuICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gIFxuICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgXG4gIGEgLS0tLS0tLS0tIGJcbiAgXG4gIHRvXG4gIFxuICBhIC0tLS0gYlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG52YXIgZGlsYXRlID0gZXhwb3J0cy5kaWxhdGUgPSBmdW5jdGlvbiAoYSwgYiwgZGlsYXRpb24pIHtcbiAgcmV0dXJuIGEgKyAoYiAtIGEpICogZGlsYXRpb247XG59O1xuXG4vKlxuICBEaXN0YW5jZVxuICBcbiAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG4gIFxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG52YXIgZGlzdGFuY2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24gKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFpFUk9fUE9JTlQ7XG5cbiAgLy8gMUQgZGltZW5zaW9uc1xuICBpZiAoKDAsIF91dGlscy5pc051bSkoYSkpIHtcbiAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gIH0gZWxzZSB7XG4gICAgdmFyIHhEZWx0YSA9IGRpc3RhbmNlMUQoYS54LCBiLngpO1xuICAgIHZhciB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICB2YXIgekRlbHRhID0gKDAsIF91dGlscy5pc051bSkoYS56KSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coeERlbHRhLCAyKSArIE1hdGgucG93KHlEZWx0YSwgMikgKyBNYXRoLnBvdyh6RGVsdGEsIDIpKTtcbiAgfVxufTtcblxuLypcbiAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xudmFyIGdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGZ1bmN0aW9uIChmcm9tLCB0bywgcHJvZ3Jlc3MpIHtcbiAgcmV0dXJuIC1wcm9ncmVzcyAqIGZyb20gKyBwcm9ncmVzcyAqIHRvICsgZnJvbTtcbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xufTtcblxuLypcbiAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xudmFyIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICByZXR1cm4ge1xuICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICB9O1xufTtcblxuLypcbiAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xudmFyIHJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBmdW5jdGlvbiAocmFkaWFucykge1xuICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKlxuICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xudmFyIHNtb290aCA9IGV4cG9ydHMuc21vb3RoID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24pIHtcbiAgdmFyIHNtb290aGluZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcbiAgcmV0dXJuIHRvRGVjaW1hbChvbGRWYWx1ZSArIGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpO1xufTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZnVuY3Rpb24gKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gKDAsIF91dGlscy5pc051bSkoeHBzKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xufTtcblxuLypcbiAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgcmV0dXJuIHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcbn07XG5cbi8qXG4gIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gIFxuICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbnZhciBzdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGZ1bmN0aW9uIChzdGVwcywgcHJvZ3Jlc3MpIHtcbiAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gIHZhciB0YXJnZXQgPSAxIC0gMSAvIHN0ZXBzO1xuICB2YXIgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZZMkZzWXk1cWN5SmRMQ0p1WVcxbGN5STZXeUowYjBSbFkybHRZV3dpTENKdWRXMGlMQ0p3Y21WamFYTnBiMjRpTENKTllYUm9JaXdpY205MWJtUWlMQ0phUlZKUFgxQlBTVTVVSWl3aWVDSXNJbmtpTENKNklpd2laR2x6ZEdGdVkyVXhSQ0lzSW1FaUxDSmlJaXdpWVdKeklpd2lZVzVuYkdVaUxDSnlZV1JwWVc1elZHOUVaV2R5WldWeklpd2lZWFJoYmpJaUxDSmtaV2R5WldWelZHOVNZV1JwWVc1eklpd2laR1ZuY21WbGN5SXNJbEJKSWl3aVpHbHNZWFJsSWl3aVpHbHNZWFJwYjI0aUxDSmthWE4wWVc1alpTSXNJbmhFWld4MFlTSXNJbmxFWld4MFlTSXNJbnBFWld4MFlTSXNJbk54Y25RaUxDSm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeUlzSW1aeWIyMGlMQ0owYnlJc0luQnliMmR5WlhOeklpd2laMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VpTENKMllXeDFaU0lzSW5CdmFXNTBSbkp2YlVGdVoyeGxRVzVrUkdsemRHRnVZMlVpTENKdmNtbG5hVzRpTENKamIzTWlMQ0p6YVc0aUxDSnlZV1JwWVc1eklpd2ljMjF2YjNSb0lpd2libVYzVm1Gc2RXVWlMQ0p2YkdSV1lXeDFaU0lzSW1SMWNtRjBhVzl1SWl3aWMyMXZiM1JvYVc1bklpd2liV0Y0SWl3aWMzQmxaV1JRWlhKR2NtRnRaU0lzSW5od2N5SXNJbVp5WVcxbFJIVnlZWFJwYjI0aUxDSnpjR1ZsWkZCbGNsTmxZMjl1WkNJc0luWmxiRzlqYVhSNUlpd2ljM1JsY0ZCeWIyZHlaWE56SWl3aWMzUmxjSE1pTENKelpXZHRaVzUwSWl3aWRHRnlaMlYwSWl3aWNISnZaM0psYzNOUFpsUmhjbWRsZENJc0ltMXBiaUlzSW1ac2IyOXlJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96dEJRVVZCT3pzN096czdPMEZCVDBFc1NVRkJUVUVzV1VGQldTeFZRVUZEUXl4SFFVRkVMRVZCUVhkQ08wRkJRVUVzVFVGQmJFSkRMRk5CUVd0Q0xIVkZRVUZPTEVOQlFVMDdPMEZCUTNoRFFTeDFRa0ZCV1N4RlFVRmFMRVZCUVd0Q1FTeFRRVUZzUWp0QlFVTkJMRk5CUVU5RExFdEJRVXRETEV0QlFVd3NRMEZCVjBnc1RVRkJUVU1zVTBGQmFrSXNTVUZCT0VKQkxGTkJRWEpETzBGQlEwUXNRMEZJUkRzN1FVRkxRU3hKUVVGTlJ5eGhRVUZoTzBGQlEycENReXhMUVVGSExFTkJSR003UVVGRmFrSkRMRXRCUVVjc1EwRkdZenRCUVVkcVFrTXNTMEZCUnp0QlFVaGpMRU5CUVc1Q096dEJRVTFCTEVsQlFVMURMR0ZCUVdFc1ZVRkJRME1zUTBGQlJDeEZRVUZKUXl4RFFVRktPMEZCUVVFc1UwRkJWVklzUzBGQlMxTXNSMEZCVEN4RFFVRlRSaXhKUVVGSlF5eERRVUZpTEVOQlFWWTdRVUZCUVN4RFFVRnVRanM3UVVGRlFUczdPenM3T3pzN096dEJRVlZQTEVsQlFVMUZMSGRDUVVGUkxGVkJRVU5JTEVOQlFVUTdRVUZCUVN4TlFVRkpReXhEUVVGS0xIVkZRVUZSVGl4VlFVRlNPMEZCUVVFc1UwRkJkVUpUTEdsQ1FVRnBRbGdzUzBGQlMxa3NTMEZCVEN4RFFVRlhUQ3hGUVVGRlNpeERRVUZHTEVkQlFVMUxMRVZCUVVWTUxFTkJRVzVDTEVWQlFYTkNTU3hGUVVGRlNDeERRVUZHTEVkQlFVMUpMRVZCUVVWS0xFTkJRVGxDTEVOQlFXcENMRU5CUVhaQ08wRkJRVUVzUTBGQlpEczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVk1zT0VOQlFXMUNMRlZCUVVORExFOUJRVVE3UVVGQlFTeFRRVUZoUVN4VlFVRlZaQ3hMUVVGTFpTeEZRVUZtTEVkQlFXOUNMRWRCUVdwRE8wRkJRVUVzUTBGQmVrSTdPMEZCUlZBN096czdPenM3T3pzN096czdPenM3T3p0QlFXdENUeXhKUVVGTlF5d3dRa0ZCVXl4VlFVRkRWQ3hEUVVGRUxFVkJRVWxETEVOQlFVb3NSVUZCVDFNc1VVRkJVRHRCUVVGQkxGTkJRVzlDVml4SlFVRkxMRU5CUVVORExFbEJRVWxFTEVOQlFVd3NTVUZCVlZVc1VVRkJia003UVVGQlFTeERRVUZtT3p0QlFVVlFPenM3T3pzN096czdRVUZUVHl4SlFVRk5ReXc0UWtGQlZ5eFZRVUZEV0N4RFFVRkVMRVZCUVhWQ08wRkJRVUVzVFVGQmJrSkRMRU5CUVcxQ0xIVkZRVUZtVGl4VlFVRmxPenRCUVVNM1F6dEJRVU5CTEUxQlFVa3NhMEpCUVUxTExFTkJRVTRzUTBGQlNpeEZRVUZqTzBGQlExb3NWMEZCVDBRc1YwRkJWME1zUTBGQldDeEZRVUZqUXl4RFFVRmtMRU5CUVZBN08wRkJSVVk3UVVGRFF5eEhRVXBFTEUxQlNVODdRVUZEVEN4UlFVRk5WeXhUUVVGVFlpeFhRVUZYUXl4RlFVRkZTaXhEUVVGaUxFVkJRV2RDU3l4RlFVRkZUQ3hEUVVGc1FpeERRVUZtTzBGQlEwRXNVVUZCVFdsQ0xGTkJRVk5rTEZkQlFWZERMRVZCUVVWSUxFTkJRV0lzUlVGQlowSkpMRVZCUVVWS0xFTkJRV3hDTEVOQlFXWTdRVUZEUVN4UlFVRk5hVUlzVTBGQlZTeHJRa0ZCVFdRc1JVRkJSVVlzUTBGQlVpeERRVUZFTEVkQlFXVkRMRmRCUVZkRExFVkJRVVZHTEVOQlFXSXNSVUZCWjBKSExFVkJRVVZJTEVOQlFXeENMRU5CUVdZc1IwRkJjME1zUTBGQmNrUTdPMEZCUlVFc1YwRkJUMHdzUzBGQlMzTkNMRWxCUVV3c1EwRkJWU3hUUVVGRFNDeE5RVUZFTEVWQlFWY3NRMEZCV0N4aFFVRnBRa01zVFVGQmFrSXNSVUZCTWtJc1EwRkJNMElzWVVGQmFVTkRMRTFCUVdwRExFVkJRVEpETEVOQlFUTkRMRU5CUVZZc1EwRkJVRHRCUVVORU8wRkJRMFlzUTBGaVRUczdRVUZsVURzN096czdPenM3T3pzN1FVRlhUeXhKUVVGTlJTeHpSRUZCZFVJc1ZVRkJRME1zU1VGQlJDeEZRVUZQUXl4RlFVRlFMRVZCUVZkRExGRkJRVmc3UVVGQlFTeFRRVUY1UWl4RFFVRkZRU3hSUVVGR0xFZEJRV0ZHTEVsQlFXUXNSMEZCZFVKRkxGZEJRVmRFTEVWQlFXeERMRWRCUVhkRFJDeEpRVUZvUlR0QlFVRkJMRU5CUVRkQ096dEJRVVZRT3pzN096czdPenM3T3pzN1FVRlpUeXhKUVVGTlJ5eHpSRUZCZFVJc1ZVRkJRMGdzU1VGQlJDeEZRVUZQUXl4RlFVRlFMRVZCUVZkSExFdEJRVmc3UVVGQlFTeFRRVUZ4UWl4RFFVRkRRU3hSUVVGUlNpeEpRVUZVTEV0QlFXdENReXhMUVVGTFJDeEpRVUYyUWl4RFFVRnlRanRCUVVGQkxFTkJRVGRDT3p0QlFVVlFPenM3T3pzN096dEJRVkZQTEVsQlFVMUxMR2RGUVVFMFFpeFZRVUZEUXl4TlFVRkVMRVZCUVZOd1FpeExRVUZVTEVWQlFXZENVU3hSUVVGb1FpeEZRVUUyUWp0QlFVTndSVklzVlVGQlVVY3NhVUpCUVdsQ1NDeExRVUZxUWl4RFFVRlNPenRCUVVWQkxGTkJRVTg3UVVGRFRGQXNUMEZCUjJVc1YwRkJWMnhDTEV0QlFVc3JRaXhIUVVGTUxFTkJRVk55UWl4TFFVRlVMRU5CUVZnc1IwRkJOa0p2UWl4UFFVRlBNMElzUTBGRWJFTTdRVUZGVEVNc1QwRkJSMk1zVjBGQlYyeENMRXRCUVV0blF5eEhRVUZNTEVOQlFWTjBRaXhMUVVGVUxFTkJRVmdzUjBGQk5rSnZRaXhQUVVGUE1VSTdRVUZHYkVNc1IwRkJVRHRCUVVsRUxFTkJVRTA3TzBGQlUxQTdPenM3T3p0QlFVMVBMRWxCUVUxUExEaERRVUZ0UWl4VlFVRkRjMElzVDBGQlJEdEJRVUZCTEZOQlFXRkJMRlZCUVZVc1IwRkJWaXhIUVVGblFtcERMRXRCUVV0bExFVkJRV3hETzBGQlFVRXNRMEZCZWtJN08wRkJSVkE3T3pzN096czdPMEZCVVU4c1NVRkJUVzFDTERCQ1FVRlRMRlZCUVVORExGRkJRVVFzUlVGQlYwTXNVVUZCV0N4RlFVRnhRa01zVVVGQmNrSTdRVUZCUVN4TlFVRXJRa01zVTBGQkwwSXNkVVZCUVRKRExFTkJRVE5ETzBGQlFVRXNVMEZCYVVSNlF5eFZRVUZWZFVNc1YwRkJXVU1zV1VGQldVWXNWMEZCVjBNc1VVRkJka0lzU1VGQmJVTndReXhMUVVGTGRVTXNSMEZCVEN4RFFVRlRSQ3hUUVVGVUxFVkJRVzlDUkN4UlFVRndRaXhEUVVGNlJDeERRVUZxUkR0QlFVRkJMRU5CUVdZN08wRkJSVkE3T3pzN096dEJRVTFQTEVsQlFVMUhMSGREUVVGblFpeFZRVUZEUXl4SFFVRkVMRVZCUVUxRExHRkJRVTQ3UVVGQlFTeFRRVUY1UWl4clFrRkJUVVFzUjBGQlRpeERRVUZFTEVkQlFXVkJMRTlCUVU4c1QwRkJUME1zWVVGQlpDeERRVUZtTEVkQlFUaERMRU5CUVhSRk8wRkJRVUVzUTBGQmRFSTdPMEZCUlZBN096czdPenRCUVUxUExFbEJRVTFETERCRFFVRnBRaXhWUVVGRFF5eFJRVUZFTEVWQlFWZEdMR0ZCUVZnN1FVRkJRU3hUUVVFMlFrVXNXVUZCV1N4UFFVRlBSaXhoUVVGdVFpeERRVUUzUWp0QlFVRkJMRU5CUVhaQ096dEJRVVZRT3pzN096czdPMEZCVDA4c1NVRkJUVWNzYzBOQlFXVXNWVUZCUTBNc1MwRkJSQ3hGUVVGUmNFSXNVVUZCVWl4RlFVRnhRanRCUVVNdlF5eE5RVUZOY1VJc1ZVRkJWU3hMUVVGTFJDeFJRVUZSTEVOQlFXSXNRMEZCYUVJN1FVRkRRU3hOUVVGTlJTeFRRVUZUTEVsQlFVc3NTVUZCU1VZc1MwRkJlRUk3UVVGRFFTeE5RVUZOUnl4dFFrRkJiVUpxUkN4TFFVRkxhMFFzUjBGQlRDeERRVUZUZUVJc1YwRkJWM05DTEUxQlFYQkNMRVZCUVRSQ0xFTkJRVFZDTEVOQlFYcENPenRCUVVWQkxGTkJRVTlvUkN4TFFVRkxiVVFzUzBGQlRDeERRVUZYUml4dFFrRkJiVUpHTEU5QlFUbENMRWxCUVhsRFFTeFBRVUZvUkR0QlFVTkVMRU5CVGswaUxDSm1hV3hsSWpvaVkyRnNZeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR2x6VG5WdExDQm1hVzVrVm1Gc2RXVkJibVJWYm1sMElIMGdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ2JuVnRZbVZ5SUhSdklIZ2daR1ZqYVcxaGJDQndiR0ZqWlhOY2JseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDFjYmlvdlhHNWpiMjV6ZENCMGIwUmxZMmx0WVd3Z1BTQW9iblZ0TENCd2NtVmphWE5wYjI0Z1BTQXlLU0E5UGlCN1hHNGdJSEJ5WldOcGMybHZiaUE5SURFd0lDb3FJSEJ5WldOcGMybHZianRjYmlBZ2NtVjBkWEp1SUUxaGRHZ3VjbTkxYm1Rb2JuVnRJQ29nY0hKbFkybHphVzl1S1NBdklIQnlaV05wYzJsdmJqdGNibjA3WEc1Y2JtTnZibk4wSUZwRlVrOWZVRTlKVGxRZ1BTQjdYRzRnSUhnNklEQXNYRzRnSUhrNklEQXNYRzRnSUhvNklEQmNibjA3WEc1Y2JtTnZibk4wSUdScGMzUmhibU5sTVVRZ1BTQW9ZU3dnWWlrZ1BUNGdUV0YwYUM1aFluTW9ZU0F0SUdJcE8xeHVYRzR2S2x4dUlDQkJibWRzWlNCaVpYUjNaV1Z1SUhCdmFXNTBjMXh1SUNCY2JpQWdWSEpoYm5Oc1lYUmxjeUIwYUdVZ2FIbHdiM1JvWlhScFkyRnNJR3hwYm1VZ2MyOGdkR2hoZENCMGFHVWdKMlp5YjIwbklHTnZiM0prYVc1aGRHVnpYRzRnSUdGeVpTQmhkQ0F3TERCY2JpQWdYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjI5eVpHbHVZWFJsY3lCdlppQm1jbTl0SUhCdmFXNTBYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjNKa2FXNWhkR1Z6SUc5bUlIUnZJSEJ2YVc1MFhHNGdJRUJ5WlhSMWNtNGdXM0poWkdsaGJsMDZJRUZ1WjJ4bElHSmxkSGRsWlc0Z2RHaGxJSFIzYnlCd2IybHVkSE1nYVc0Z2NtRmthV0Z1YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCaGJtZHNaU0E5SUNoaExDQmlJRDBnV2tWU1QxOVFUMGxPVkNrZ1BUNGdjbUZrYVdGdWMxUnZSR1ZuY21WbGN5aE5ZWFJvTG1GMFlXNHlLR0V1ZUNBdElHSXVlQ3dnWVM1NUlDMGdZaTU1S1NrN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ1pHVm5jbVZsY3lCMGJ5QnlZV1JwWVc1elhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUdSbFozSmxaWE5jYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z2NtRmthV0Z1YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa1pXZHlaV1Z6Vkc5U1lXUnBZVzV6SUQwZ0tHUmxaM0psWlhNcElEMCtJR1JsWjNKbFpYTWdLaUJOWVhSb0xsQkpJQzhnTVRnd08xeHVYRzR2S2x4dUlDQkVhV3hoZEdWY2JpQWdYRzRnSUVOb1lXNW5aU0IwYUdVZ2NISnZaM0psYzNOcGIyNGdZbVYwZDJWbGJpQmhJR0Z1WkNCaUlHRmpZMjl5WkdsdVp5QjBieUJrYVd4aGRHbHZiaTVjYmlBZ1hHNGdJRk52SUdScGJHRjBhVzl1SUQwZ01DNDFJSGR2ZFd4a0lHTm9ZVzVuWlZ4dUlDQmNiaUFnWVNBdExTMHRMUzB0TFMwZ1lseHVJQ0JjYmlBZ2RHOWNiaUFnWEc0Z0lHRWdMUzB0TFNCaVhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeVpYWnBiM1Z6SUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVJwYkdGMFpTQndjbTluY21WemN5QmllU0I0WEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsSUhCc2RYTWdkR2hsSUdScGJHRjBaV1FnWkdsbVptVnlaVzVqWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa2FXeGhkR1VnUFNBb1lTd2dZaXdnWkdsc1lYUnBiMjRwSUQwK0lHRWdLeUFvS0dJZ0xTQmhLU0FxSUdScGJHRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ1JHbHpkR0Z1WTJWY2JpQWdYRzRnSUZKbGRIVnlibk1nZEdobElHUnBjM1JoYm1ObElHSmxkSGRsWlc0Z2RIZHZJRzRnWkdsdFpXNXphVzl1WVd3Z2NHOXBiblJ6TGx4dUlDQmNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUXZiblZ0WW1WeVhUb2dlQ0JoYm1RZ2VTQnZjaUJxZFhOMElIZ2diMllnY0c5cGJuUWdRVnh1SUNCQWNHRnlZVzBnVzI5aWFtVmpkQzl1ZFcxaVpYSmRPaUFvYjNCMGFXOXVZV3dwT2lCNElHRnVaQ0I1SUc5eUlHcDFjM1FnZUNCdlppQndiMmx1ZENCQ1hHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlJvWlNCa2FYTjBZVzVqWlNCaVpYUjNaV1Z1SUhSb1pTQjBkMjhnY0c5cGJuUnpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1JwYzNSaGJtTmxJRDBnS0dFc0lHSWdQU0JhUlZKUFgxQlBTVTVVS1NBOVBpQjdYRzRnSUM4dklERkVJR1JwYldWdWMybHZibk5jYmlBZ2FXWWdLR2x6VG5WdEtHRXBLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHUnBjM1JoYm1ObE1VUW9ZU3dnWWlrN1hHNWNiaUFnTHk4Z1RYVnNkR2t0WkdsdFpXNXphVzl1WVd4Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCamIyNXpkQ0I0UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVDd2dZaTU0S1R0Y2JpQWdJQ0JqYjI1emRDQjVSR1ZzZEdFZ1BTQmthWE4wWVc1alpURkVLR0V1ZVN3Z1lpNTVLVHRjYmlBZ0lDQmpiMjV6ZENCNlJHVnNkR0VnUFNBb2FYTk9kVzBvWVM1NktTa2dQeUJrYVhOMFlXNWpaVEZFS0dFdWVpd2dZaTU2S1NBNklEQTdYRzVjYmlBZ0lDQnlaWFIxY200Z1RXRjBhQzV6Y1hKMEtDaDRSR1ZzZEdFZ0tpb2dNaWtnS3lBb2VVUmxiSFJoSUNvcUlESXBJQ3NnS0hwRVpXeDBZU0FxS2lBeUtTazdYRzRnSUgxY2JuMDdYRzVjYmk4cVhHNGdJRlpoYkhWbElHbHVJSEpoYm1kbElHWnliMjBnY0hKdlozSmxjM05jYmlBZ1hHNGdJRWRwZG1WdUlHRWdiRzkzWlhJZ2JHbHRhWFFnWVc1a0lHRnVJSFZ3Y0dWeUlHeHBiV2wwTENCM1pTQnlaWFIxY200Z2RHaGxJSFpoYkhWbElIZHBkR2hwYmx4dUlDQjBhR0YwSUhKaGJtZGxJR0Z6SUdWNGNISmxjM05sWkNCaWVTQndjbTluY21WemN5QW9ZU0J1ZFcxaVpYSWdabkp2YlNBd0xURXBYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeHZkMlZ5SUd4cGJXbDBJRzltSUhKaGJtZGxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlhCd1pYSWdiR2x0YVhRZ2IyWWdjbUZ1WjJWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlVhR1VnY0hKdlozSmxjM01nWW1WMGQyVmxiaUJzYjNkbGNpQmhibVFnZFhCd1pYSWdiR2x0YVhSeklHVjRjSEpsYzNObFpDQXdMVEZjYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnWVhNZ1kyRnNZM1ZzWVhSbFpDQm1jbTl0SUhCeWIyZHlaWE56SUhkcGRHaHBiaUJ5WVc1blpTQW9ibTkwSUd4cGJXbDBaV1FnZDJsMGFHbHVJSEpoYm1kbEtWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeUE5SUNobWNtOXRMQ0IwYnl3Z2NISnZaM0psYzNNcElEMCtJQ2d0SUhCeWIyZHlaWE56SUNvZ1puSnZiU2tnS3lBb2NISnZaM0psYzNNZ0tpQjBieWtnS3lCbWNtOXRPMXh1WEc0dktseHVJQ0JRY205bmNtVnpjeUIzYVhSb2FXNGdaMmwyWlc0Z2NtRnVaMlZjYmlBZ1hHNGdJRWRwZG1WdUlHRWdiRzkzWlhJZ2JHbHRhWFFnWVc1a0lHRnVJSFZ3Y0dWeUlHeHBiV2wwTENCM1pTQnlaWFIxY200Z2RHaGxJSEJ5YjJkeVpYTnpYRzRnSUNobGVIQnlaWE56WldRZ1lYTWdZU0J1ZFcxaVpYSWdNQzB4S1NCeVpYQnlaWE5sYm5SbFpDQmllU0IwYUdVZ1oybDJaVzRnZG1Gc2RXVXNJR0Z1WkZ4dUlDQnNhVzFwZENCMGFHRjBJSEJ5YjJkeVpYTnpJSFJ2SUhkcGRHaHBiaUF3TFRFdVhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4dmQyVnlJR3hwYldsMElGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ3Y0dWeUlHeHBiV2wwWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnZEc4Z1ptbHVaQ0J3Y205bmNtVnpjeUIzYVhSb2FXNGdaMmwyWlc0Z2NtRnVaMlZjYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1VISnZaM0psYzNNZ2IyWWdkbUZzZFdVZ2QybDBhR2x1SUhKaGJtZGxJR0Z6SUdWNGNISmxjM05sWkNBd0xURmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VnUFNBb1puSnZiU3dnZEc4c0lIWmhiSFZsS1NBOVBpQW9kbUZzZFdVZ0xTQm1jbTl0S1NBdklDaDBieUF0SUdaeWIyMHBPMXh1WEc0dktseHVJQ0JRYjJsdWRDQm1jbTl0SUdGdVoyeGxJR0Z1WkNCa2FYTjBZVzVqWlZ4dUlDQmNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUF5UkNCd2IybHVkQ0J2WmlCdmNtbG5hVzVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCQmJtZHNaU0JtY205dElHOXlhV2RwYmx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFUnBjM1JoYm1ObElHWnliMjBnYjNKcFoybHVYRzRnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjA2SUVOaGJHTjFiR0YwWldRZ01rUWdjRzlwYm5SY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NHOXBiblJHY205dFFXNW5iR1ZCYm1SRWFYTjBZVzVqWlNBOUlDaHZjbWxuYVc0c0lHRnVaMnhsTENCa2FYTjBZVzVqWlNrZ1BUNGdlMXh1SUNCaGJtZHNaU0E5SUdSbFozSmxaWE5VYjFKaFpHbGhibk1vWVc1bmJHVXBPMXh1WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnZURvZ1pHbHpkR0Z1WTJVZ0tpQk5ZWFJvTG1OdmN5aGhibWRzWlNrZ0t5QnZjbWxuYVc0dWVDeGNiaUFnSUNCNU9pQmthWE4wWVc1alpTQXFJRTFoZEdndWMybHVLR0Z1WjJ4bEtTQXJJRzl5YVdkcGJpNTVYRzRnSUgwN1hHNTlPMXh1WEc0dktseHVJQ0JEYjI1MlpYSjBJSEpoWkdsaGJuTWdkRzhnWkdWbmNtVmxjMXh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCcGJpQnlZV1JwWVc1elhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJR1JsWjNKbFpYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjbUZrYVdGdWMxUnZSR1ZuY21WbGN5QTlJQ2h5WVdScFlXNXpLU0E5UGlCeVlXUnBZVzV6SUNvZ01UZ3dJQzhnVFdGMGFDNVFTVHRjYmx4dUx5cGNiaUFnUm5KaGJXVnlZWFJsTFdsdVpHVndaVzVrWlc1MElITnRiMjkwYUdsdVoxeHVYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVG1WM0lIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1QyeGtJSFpoYkhWbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZElDaHZjSFJwYjI1aGJDazZJRk50YjI5MGFHbHVaeUFvTUNCcGN5QnViMjVsS1Z4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemJXOXZkR2dnUFNBb2JtVjNWbUZzZFdVc0lHOXNaRlpoYkhWbExDQmtkWEpoZEdsdmJpd2djMjF2YjNSb2FXNW5JRDBnTUNrZ1BUNGdkRzlFWldOcGJXRnNLRzlzWkZaaGJIVmxJQ3NnS0dSMWNtRjBhVzl1SUNvZ0tHNWxkMVpoYkhWbElDMGdiMnhrVm1Gc2RXVXBJQzhnVFdGMGFDNXRZWGdvYzIxdmIzUm9hVzVuTENCa2RYSmhkR2x2YmlrcEtUdGNibHh1THlwY2JpQWdRMjl1ZG1WeWRDQjRJSEJsY2lCelpXTnZibVFnZEc4Z2NHVnlJR1p5WVcxbElIWmxiRzlqYVhSNUlHSmhjMlZrSUc5dUlHWndjMXh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZibWwwSUhCbGNpQnpaV052Ym1SY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkdjbUZ0WlNCa2RYSmhkR2x2YmlCcGJpQnRjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Y0dWbFpGQmxja1p5WVcxbElEMGdLSGh3Y3l3Z1puSmhiV1ZFZFhKaGRHbHZiaWtnUFQ0Z0tHbHpUblZ0S0hod2N5a3BJRDhnZUhCeklDOGdLREV3TURBZ0x5Qm1jbUZ0WlVSMWNtRjBhVzl1S1NBNklEQTdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdkbVZzYjJOcGRIa2dhVzUwYnlCMlpXeHBZMmwwZVNCd1pYSWdjMlZqYjI1a1hHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWdWFYUWdjR1Z5SUdaeVlXMWxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNGdhVzRnYlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQmxaV1JRWlhKVFpXTnZibVFnUFNBb2RtVnNiMk5wZEhrc0lHWnlZVzFsUkhWeVlYUnBiMjRwSUQwK0lIWmxiRzlqYVhSNUlDb2dLREV3TURBZ0x5Qm1jbUZ0WlVSMWNtRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ1EzSmxZWFJsSUhOMFpYQndaV1FnZG1WeWMybHZiaUJ2WmlBd0xURWdjSEp2WjNKbGMzTmNiaUFnWEc0Z0lFQndZWEpoYlNCYmFXNTBYVG9nVG5WdFltVnlJRzltSUhOMFpYQnpYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJUZEdWd2NHVmtJSFpoYkhWbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITjBaWEJRY205bmNtVnpjeUE5SUNoemRHVndjeXdnY0hKdlozSmxjM01wSUQwK0lIdGNiaUFnWTI5dWMzUWdjMlZuYldWdWRDQTlJREVnTHlBb2MzUmxjSE1nTFNBeEtUdGNiaUFnWTI5dWMzUWdkR0Z5WjJWMElEMGdNU0F0SUNneElDOGdjM1JsY0hNcE8xeHVJQ0JqYjI1emRDQndjbTluY21WemMwOW1WR0Z5WjJWMElEMGdUV0YwYUM1dGFXNG9jSEp2WjNKbGMzTWdMeUIwWVhKblpYUXNJREVwTzF4dVhHNGdJSEpsZEhWeWJpQk5ZWFJvTG1ac2IyOXlLSEJ5YjJkeVpYTnpUMlpVWVhKblpYUWdMeUJ6WldkdFpXNTBLU0FxSUhObFoyMWxiblE3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF9lYXNpbmcgPSByZXF1aXJlKCcuLi9lYXNpbmcnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgY2xhbXBQcm9ncmVzcyA9ICgwLCBfdHJhbnNmb3JtZXJzLmNsYW1wKSgwLCAxKTtcblxudmFyIFR3ZWVuID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFR3ZWVuLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBUd2VlbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdlZW4pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBUd2Vlbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb24sXG4gICAgICAgIGVhc2UgPSBfcHJvcHMuZWFzZSxcbiAgICAgICAgZnJvbSA9IF9wcm9wcy5mcm9tLFxuICAgICAgICB0byA9IF9wcm9wcy50bztcblxuXG4gICAgdGhpcy5lbGFwc2VkID0gMDtcblxuICAgIHRoaXMub25VcGRhdGUgPSAoMCwgX3RyYW5zZm9ybWVycy5mbG93KShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLmVsYXBzZWQgKz0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpO1xuICAgIH0sIGZ1bmN0aW9uIChlbGFwc2VkKSB7XG4gICAgICByZXR1cm4gKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSgwLCBkdXJhdGlvbiwgZWxhcHNlZCk7XG4gICAgfSwgY2xhbXBQcm9ncmVzcywgZWFzZSwgZnVuY3Rpb24gKGVhc2VkUHJvZ3Jlc3MpIHtcbiAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGZyb20sIHRvLCBlYXNlZFByb2dyZXNzKTtcbiAgICB9KTtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZCA+PSB0aGlzLnByb3BzLmR1cmF0aW9uO1xuICB9O1xuXG4gIHJldHVybiBUd2Vlbjtcbn0oXzIuZGVmYXVsdCk7XG5cblR3ZWVuLmRlZmF1bHRQcm9wcyA9IHtcbiAgZHVyYXRpb246IDMwMCxcbiAgZWFzZTogX2Vhc2luZy5lYXNlT3V0LFxuICBmcm9tOiAwLFxuICB0bzogMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgVHdlZW4ocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNSM1pXVnVMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTnNZVzF3VUhKdlozSmxjM01pTENKVWQyVmxiaUlzSW05dVUzUmhjblFpTENKd2NtOXdjeUlzSW1SMWNtRjBhVzl1SWl3aVpXRnpaU0lzSW1aeWIyMGlMQ0owYnlJc0ltVnNZWEJ6WldRaUxDSnZibFZ3WkdGMFpTSXNJbVZoYzJWa1VISnZaM0psYzNNaUxDSnBjMEZqZEdsdmJrTnZiWEJzWlhSbElpd2laR1ZtWVhWc2RGQnliM0J6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3UVVGRFFUczdRVUZEUVRzN1FVRkRRVHM3UVVGRFFUczdPenM3T3pzN096dEJRVVZCTEVsQlFVMUJMR2RDUVVGblFpeDVRa0ZCVFN4RFFVRk9MRVZCUVZNc1EwRkJWQ3hEUVVGMFFqczdTVUZGVFVNc1N6czdPenM3T3pzN08ydENRVkZLUXl4UExITkNRVUZWTzBGQlFVRTdPMEZCUVVFc2FVSkJRelpDTEV0QlFVdERMRXRCUkd4RE8wRkJRVUVzVVVGRFFVTXNVVUZFUVN4VlFVTkJRU3hSUVVSQk8wRkJRVUVzVVVGRFZVTXNTVUZFVml4VlFVTlZRU3hKUVVSV08wRkJRVUVzVVVGRFowSkRMRWxCUkdoQ0xGVkJRMmRDUVN4SlFVUm9RanRCUVVGQkxGRkJRM05DUXl4RlFVUjBRaXhWUVVOelFrRXNSVUZFZEVJN096dEJRVWRTTEZOQlFVdERMRTlCUVV3c1IwRkJaU3hEUVVGbU96dEJRVVZCTEZOQlFVdERMRkZCUVV3c1IwRkJaMElzZDBKQlEyUTdRVUZCUVN4aFFVRk5MRTlCUVV0RUxFOUJRVXdzU1VGQlowSXNiME5CUVhSQ08wRkJRVUVzUzBGRVl5eEZRVVZrTEZWQlFVTkJMRTlCUVVRN1FVRkJRU3hoUVVGaExHZERRVUZ4UWl4RFFVRnlRaXhGUVVGM1Frb3NVVUZCZUVJc1JVRkJhME5KTEU5QlFXeERMRU5CUVdJN1FVRkJRU3hMUVVaakxFVkJSMlJTTEdGQlNHTXNSVUZKWkVzc1NVRktZeXhGUVV0a0xGVkJRVU5MTEdGQlFVUTdRVUZCUVN4aFFVRnRRaXhuUTBGQmNVSktMRWxCUVhKQ0xFVkJRVEpDUXl4RlFVRXpRaXhGUVVFclFrY3NZVUZCTDBJc1EwRkJia0k3UVVGQlFTeExRVXhqTEVOQlFXaENPMEZCVDBRc1J6czdhMEpCUlVSRExHZENMQ3RDUVVGdFFqdEJRVU5xUWl4WFFVRlJMRXRCUVV0SUxFOUJRVXdzU1VGQlowSXNTMEZCUzB3c1MwRkJUQ3hEUVVGWFF5eFJRVUZ1UXp0QlFVTkVMRWM3T3pzN08wRkJlRUpIU0N4TExFTkJRMGRYTEZrc1IwRkJaVHRCUVVOd1FsSXNXVUZCVlN4SFFVUlZPMEZCUlhCQ1F5eDFRa0ZHYjBJN1FVRkhjRUpETEZGQlFVMHNRMEZJWXp0QlFVbHdRa01zVFVGQlNUdEJRVXBuUWl4RE96dHJRa0V3UWxRc1ZVRkJRMG9zUzBGQlJEdEJRVUZCTEZOQlFWY3NTVUZCU1VZc1MwRkJTaXhEUVVGVlJTeExRVUZXTEVOQlFWZzdRVUZCUVN4RElpd2labWxzWlNJNkluUjNaV1Z1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVwYlhCdmNuUWdleUIwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VnZlNCbWNtOXRJQ2N1TGk5bWNtRnRaWE41Ym1Nbk8xeHVhVzF3YjNKMElIc2dabXh2ZHl3Z1kyeGhiWEFnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6Snp0Y2JtbHRjRzl5ZENCN0lHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxMQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibWx0Y0c5eWRDQjdJR1ZoYzJWUGRYUWdmU0JtY205dElDY3VMaTlsWVhOcGJtY25PMXh1WEc1amIyNXpkQ0JqYkdGdGNGQnliMmR5WlhOeklEMGdZMnhoYlhBb01Dd2dNU2s3WEc1Y2JtTnNZWE56SUZSM1pXVnVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYzNSaGRHbGpJR1JsWm1GMWJIUlFjbTl3Y3lBOUlIdGNiaUFnSUNCa2RYSmhkR2x2YmpvZ016QXdMRnh1SUNBZ0lHVmhjMlU2SUdWaGMyVlBkWFFzWEc0Z0lDQWdabkp2YlRvZ01DeGNiaUFnSUNCMGJ6b2dNVnh1SUNCOU8xeHVYRzRnSUc5dVUzUmhjblFvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJrZFhKaGRHbHZiaXdnWldGelpTd2dabkp2YlN3Z2RHOGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCMGFHbHpMbVZzWVhCelpXUWdQU0F3TzF4dVhHNGdJQ0FnZEdocGN5NXZibFZ3WkdGMFpTQTlJR1pzYjNjb1hHNGdJQ0FnSUNBb0tTQTlQaUIwYUdsekxtVnNZWEJ6WldRZ0t6MGdkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxLQ2tzWEc0Z0lDQWdJQ0FvWld4aGNITmxaQ2tnUFQ0Z1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9NQ3dnWkhWeVlYUnBiMjRzSUdWc1lYQnpaV1FwTEZ4dUlDQWdJQ0FnWTJ4aGJYQlFjbTluY21WemN5eGNiaUFnSUNBZ0lHVmhjMlVzWEc0Z0lDQWdJQ0FvWldGelpXUlFjbTluY21WemN5a2dQVDRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb1puSnZiU3dnZEc4c0lHVmhjMlZrVUhKdlozSmxjM01wWEc0Z0lDQWdLVHRjYmlBZ2ZWeHVYRzRnSUdselFXTjBhVzl1UTI5dGNHeGxkR1VvS1NCN1hHNGdJQ0FnY21WMGRYSnVJQ2gwYUdsekxtVnNZWEJ6WldRZ1BqMGdkR2hwY3k1d2NtOXdjeTVrZFhKaGRHbHZiaWs3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hCeWIzQnpLU0E5UGlCdVpYY2dWSGRsWlc0b2NISnZjSE1wTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVHJhY2sgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVHJhY2ssIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFRyYWNrKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFjayk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFRyYWNrLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgaW5wdXQgPSB0aGlzLnByb3BzLmlucHV0O1xuXG4gICAgdGhpcy5pbnB1dE9yaWdpbiA9IGlucHV0LmdldCgpO1xuICAgIGlucHV0LmFkZExpc3RlbmVyKHRoaXMudXBkYXRlKTtcbiAgfTtcblxuICBUcmFjay5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHZhciBpbnB1dCA9IHRoaXMucHJvcHMuaW5wdXQ7XG5cbiAgICBpbnB1dC5yZW1vdmVMaXN0ZW5lcih0aGlzLnVwZGF0ZSk7XG4gIH07XG5cbiAgVHJhY2sucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlucHV0ID0gX3Byb3BzLmlucHV0LFxuICAgICAgICBmcm9tID0gX3Byb3BzLmZyb207XG5cbiAgICB2YXIgb2Zmc2V0ID0gaW5wdXQuZ2V0KCkgLSB0aGlzLmlucHV0T3JpZ2luO1xuICAgIHJldHVybiBmcm9tICsgb2Zmc2V0O1xuICB9O1xuXG4gIHJldHVybiBUcmFjaztcbn0oXzIuZGVmYXVsdCk7XG5cblRyYWNrLmRlZmF1bHRQcm9wcyA9IHtcbiAgZnJvbTogMCxcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmdzWzBdO1xuXG4gICAgcmV0dXJuIG5ldyBUcmFjayhwcm9wcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGlucHV0ID0gYXJnc1swXSxcbiAgICAgICAgb25VcGRhdGUgPSBhcmdzWzFdLFxuICAgICAgICBfcHJvcHMyID0gYXJnc1syXTtcblxuICAgIHJldHVybiBuZXcgVHJhY2soX2V4dGVuZHMoe1xuICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgb25VcGRhdGU6IG9uVXBkYXRlXG4gICAgfSwgX3Byb3BzMikpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1J5WVdOckxtcHpJbDBzSW01aGJXVnpJanBiSWxSeVlXTnJJaXdpYjI1VGRHRnlkQ0lzSW1sdWNIVjBJaXdpY0hKdmNITWlMQ0pwYm5CMWRFOXlhV2RwYmlJc0ltZGxkQ0lzSW1Ga1pFeHBjM1JsYm1WeUlpd2lkWEJrWVhSbElpd2liMjVUZEc5d0lpd2ljbVZ0YjNabFRHbHpkR1Z1WlhJaUxDSnZibFZ3WkdGMFpTSXNJbVp5YjIwaUxDSnZabVp6WlhRaUxDSmtaV1poZFd4MFVISnZjSE1pTENKd1lYTnphWFpsSWl3aVlYSm5jeUlzSW14bGJtZDBhQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPenM3T3pzN096czdPenRKUVVWTlFTeExPenM3T3pzN096czdhMEpCVFVwRExFOHNjMEpCUVZVN1FVRkJRU3hSUVVOQlF5eExRVVJCTEVkQlExVXNTMEZCUzBNc1MwRkVaaXhEUVVOQlJDeExRVVJCT3p0QlFVVlNMRk5CUVV0RkxGZEJRVXdzUjBGQmJVSkdMRTFCUVUxSExFZEJRVTRzUlVGQmJrSTdRVUZEUVVnc1ZVRkJUVWtzVjBGQlRpeERRVUZyUWl4TFFVRkxReXhOUVVGMlFqdEJRVU5FTEVjN08ydENRVVZFUXl4TkxIRkNRVUZUTzBGQlFVRXNVVUZEUTA0c1MwRkVSQ3hIUVVOWExFdEJRVXRETEV0QlJHaENMRU5CUTBORUxFdEJSRVE3TzBGQlJWQkJMRlZCUVUxUExHTkJRVTRzUTBGQmNVSXNTMEZCUzBZc1RVRkJNVUk3UVVGRFJDeEhPenRyUWtGRlJFY3NVU3gxUWtGQlZ6dEJRVUZCTEdsQ1FVTmxMRXRCUVV0UUxFdEJSSEJDTzBGQlFVRXNVVUZEUkVRc1MwRkVReXhWUVVORVFTeExRVVJETzBGQlFVRXNVVUZEVFZNc1NVRkVUaXhWUVVOTlFTeEpRVVJPT3p0QlFVVlVMRkZCUVUxRExGTkJRVk5XTEUxQlFVMUhMRWRCUVU0c1MwRkJZeXhMUVVGTFJDeFhRVUZzUXp0QlFVTkJMRmRCUVU5UExFOUJRVTlETEUxQlFXUTdRVUZEUkN4SE96czdPenRCUVhKQ1Ixb3NTeXhEUVVOSFlTeFpMRWRCUVdVN1FVRkRjRUpHTEZGQlFVMHNRMEZFWXp0QlFVVndRa2NzVjBGQlV6dEJRVVpYTEVNN08ydENRWFZDVkN4WlFVRmhPMEZCUVVFc2IwTkJRVlJETEVsQlFWTTdRVUZCVkVFc1VVRkJVenRCUVVGQk96dEJRVU14UWl4TlFVRkpRU3hMUVVGTFF5eE5RVUZNTEV0QlFXZENMRU5CUVhCQ0xFVkJRWFZDTzBGQlFVRXNVVUZEWW1Jc1MwRkVZU3hIUVVOSVdTeEpRVVJIT3p0QlFVVnlRaXhYUVVGUExFbEJRVWxtTEV0QlFVb3NRMEZCVlVjc1MwRkJWaXhEUVVGUU8wRkJRMFFzUjBGSVJDeE5RVWRQTzBGQlFVRXNVVUZEUjBRc1MwRkVTQ3hIUVVNNFFtRXNTVUZFT1VJN1FVRkJRU3hSUVVOVlRDeFJRVVJXTEVkQlF6aENTeXhKUVVRNVFqdEJRVUZCTEZGQlEyOUNXaXhQUVVSd1FpeEhRVU00UWxrc1NVRkVPVUk3TzBGQlJVd3NWMEZCVHl4SlFVRkpaaXhMUVVGS08wRkJRMHhGTEd0Q1FVUkxPMEZCUlV4Uk8wRkJSa3NzVDBGSFJsQXNUMEZJUlN4RlFVRlFPMEZCUzBRN1FVRkRSaXhESWl3aVptbHNaU0k2SW5SeVlXTnJMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNWNibU5zWVhOeklGUnlZV05ySUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ2MzUmhkR2xqSUdSbFptRjFiSFJRY205d2N5QTlJSHRjYmlBZ0lDQm1jbTl0T2lBd0xGeHVJQ0FnSUhCaGMzTnBkbVU2SUhSeWRXVmNiaUFnZlR0Y2JseHVJQ0J2YmxOMFlYSjBLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dhVzV3ZFhRZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdkR2hwY3k1cGJuQjFkRTl5YVdkcGJpQTlJR2x1Y0hWMExtZGxkQ2dwTzF4dUlDQWdJR2x1Y0hWMExtRmtaRXhwYzNSbGJtVnlLSFJvYVhNdWRYQmtZWFJsS1R0Y2JpQWdmVnh1WEc0Z0lHOXVVM1J2Y0NncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdsdWNIVjBJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdsdWNIVjBMbkpsYlc5MlpVeHBjM1JsYm1WeUtIUm9hWE11ZFhCa1lYUmxLVHRjYmlBZ2ZWeHVYRzRnSUc5dVZYQmtZWFJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYVc1d2RYUXNJR1p5YjIwZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdZMjl1YzNRZ2IyWm1jMlYwSUQwZ2FXNXdkWFF1WjJWMEtDa2dMU0IwYUdsekxtbHVjSFYwVDNKcFoybHVPMXh1SUNBZ0lISmxkSFZ5YmlCbWNtOXRJQ3NnYjJabWMyVjBPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2d1TGk1aGNtZHpLU0E5UGlCN1hHNGdJR2xtSUNoaGNtZHpMbXhsYm1kMGFDQTlQVDBnTVNrZ2UxeHVJQ0FnSUdOdmJuTjBJRnNnY0hKdmNITWdYU0E5SUdGeVozTTdYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QlVjbUZqYXlod2NtOXdjeWs3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnWTI5dWMzUWdXeUJwYm5CMWRDd2diMjVWY0dSaGRHVXNJSEJ5YjNCeklGMGdQU0JoY21kek8xeHVJQ0FnSUhKbGRIVnliaUJ1WlhjZ1ZISmhZMnNvZTF4dUlDQWdJQ0FnYVc1d2RYUXNYRzRnSUNBZ0lDQnZibFZ3WkdGMFpTeGNiaUFnSUNBZ0lDNHVMbkJ5YjNCelhHNGdJQ0FnZlNrN1hHNGdJSDFjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3RyYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBoeXNpY3MgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoUGh5c2ljcywgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGh5c2ljcyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFBoeXNpY3MucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjY2VsZXJhdGlvbiA9IF9wcm9wcy5hY2NlbGVyYXRpb24sXG4gICAgICAgIGF1dG9TdG9wU3BlZWQgPSBfcHJvcHMuYXV0b1N0b3BTcGVlZCxcbiAgICAgICAgZnJpY3Rpb24gPSBfcHJvcHMuZnJpY3Rpb24sXG4gICAgICAgIHZlbG9jaXR5ID0gX3Byb3BzLnZlbG9jaXR5LFxuICAgICAgICBzcHJpbmcgPSBfcHJvcHMuc3ByaW5nLFxuICAgICAgICB0byA9IF9wcm9wcy50bztcblxuICAgIHZhciBuZXdWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgIHZhciBlbGFwc2VkID0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpO1xuXG4gICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGFjY2VsZXJhdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKGFjY2VsZXJhdGlvbiwgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgZnJpY3Rpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoZnJpY3Rpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICo9IE1hdGgucG93KDEgLSBmcmljdGlvbiwgZWxhcHNlZCAvIDEwMCk7XG4gICAgfVxuXG4gICAgaWYgKHNwcmluZyAmJiB0byAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZGlzdGFuY2VUb1RhcmdldCA9IHRvIC0gdGhpcy5jdXJyZW50O1xuICAgICAgbmV3VmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShzcHJpbmcsIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHZlbG9jaXR5XG4gICAgdGhpcy5jdXJyZW50ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShuZXdWZWxvY2l0eSwgZWxhcHNlZCk7XG4gICAgdGhpcy5wcm9wcy52ZWxvY2l0eSA9IG5ld1ZlbG9jaXR5O1xuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBQaHlzaWNzLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gIXRoaXMudmVsb2NpdHkgfHwgTWF0aC5hYnModGhpcy52ZWxvY2l0eSkgPD0gdGhpcy5wcm9wcy5hdXRvU3RvcFNwZWVkO1xuICB9O1xuXG4gIHJldHVybiBQaHlzaWNzO1xufShfMi5kZWZhdWx0KTtcblxuUGh5c2ljcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjY2VsZXJhdGlvbjogMCxcbiAgZnJpY3Rpb246IDAsXG4gIHZlbG9jaXR5OiAwLFxuICBhdXRvU3RvcFNwZWVkOiAwLjAwMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGh5c2ljcyhwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0JvZVhOcFkzTXVhbk1pWFN3aWJtRnRaWE1pT2xzaVVHaDVjMmxqY3lJc0ltOXVWWEJrWVhSbElpd2ljSEp2Y0hNaUxDSmhZMk5sYkdWeVlYUnBiMjRpTENKaGRYUnZVM1J2Y0ZOd1pXVmtJaXdpWm5KcFkzUnBiMjRpTENKMlpXeHZZMmwwZVNJc0luTndjbWx1WnlJc0luUnZJaXdpYm1WM1ZtVnNiMk5wZEhraUxDSmxiR0Z3YzJWa0lpd2lkVzVrWldacGJtVmtJaXdpWkdsemRHRnVZMlZVYjFSaGNtZGxkQ0lzSW1OMWNuSmxiblFpTENKcGMwRmpkR2x2YmtOdmJYQnNaWFJsSWl3aVRXRjBhQ0lzSW1GaWN5SXNJbVJsWm1GMWJIUlFjbTl3Y3lKZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPMEZCUTBFN096czdPenM3T3pzN1NVRkZUVUVzVHpzN096czdPenM3TzI5Q1FWRktReXhSTEhWQ1FVRlhPMEZCUVVFc2FVSkJReXRFTEV0QlFVdERMRXRCUkhCRk8wRkJRVUVzVVVGRFJFTXNXVUZFUXl4VlFVTkVRU3haUVVSRE8wRkJRVUVzVVVGRFlVTXNZVUZFWWl4VlFVTmhRU3hoUVVSaU8wRkJRVUVzVVVGRE5FSkRMRkZCUkRWQ0xGVkJRelJDUVN4UlFVUTFRanRCUVVGQkxGRkJRM05EUXl4UlFVUjBReXhWUVVOelEwRXNVVUZFZEVNN1FVRkJRU3hSUVVOblJFTXNUVUZFYUVRc1ZVRkRaMFJCTEUxQlJHaEVPMEZCUVVFc1VVRkRkMFJETEVWQlJIaEVMRlZCUTNkRVFTeEZRVVI0UkRzN1FVRkZWQ3hSUVVGSlF5eGpRVUZqU0N4UlFVRnNRanRCUVVOQkxGRkJRVTFKTEZWQlFWVXNiME5CUVdoQ096dEJRVVZCTzBGQlEwRXNVVUZCU1ZBc1dVRkJTaXhGUVVGclFqdEJRVU5vUWswc2NVSkJRV1VzZVVKQlFXTk9MRmxCUVdRc1JVRkJORUpQTEU5QlFUVkNMRU5CUVdZN1FVRkRSRHM3UVVGRlJEdEJRVU5CTEZGQlFVbE1MRkZCUVVvc1JVRkJZenRCUVVOYVNTdzRRa0ZCWjBJc1NVRkJTVW9zVVVGQmNFSXNSVUZCYTBOTExGVkJRVlVzUjBGQk5VTTdRVUZEUkRzN1FVRkZSQ3hSUVVGSlNDeFZRVUZWUXl4UFFVRlBSeXhUUVVGeVFpeEZRVUZuUXp0QlFVTTVRaXhWUVVGTlF5eHRRa0ZCYlVKS0xFdEJRVXNzUzBGQlMwc3NUMEZCYmtNN1FVRkRRVW9zY1VKQlFXVkhMRzFDUVVGdFFpeDVRa0ZCWTB3c1RVRkJaQ3hGUVVGelFrY3NUMEZCZEVJc1EwRkJiRU03UVVGRFJEczdRVUZGUkR0QlFVTkJMRk5CUVV0SExFOUJRVXdzU1VGQlowSXNlVUpCUVdOS0xGZEJRV1FzUlVGQk1rSkRMRTlCUVROQ0xFTkJRV2hDTzBGQlEwRXNVMEZCUzFJc1MwRkJUQ3hEUVVGWFNTeFJRVUZZTEVkQlFYTkNSeXhYUVVGMFFqczdRVUZGUVN4WFFVRlBMRXRCUVV0SkxFOUJRVm83UVVGRFJDeEhPenR2UWtGRlJFTXNaMElzSzBKQlFXMUNPMEZCUTJwQ0xGZEJRVkVzUTBGQlF5eExRVUZMVWl4UlFVRk9MRWxCUVd0Q1V5eExRVUZMUXl4SFFVRk1MRU5CUVZNc1MwRkJTMVlzVVVGQlpDeExRVUV5UWl4TFFVRkxTaXhMUVVGTUxFTkJRVmRGTEdGQlFXaEZPMEZCUTBRc1J6czdPenM3UVVGeVEwZEtMRThzUTBGRFIybENMRmtzUjBGQlpUdEJRVU53UW1Rc1owSkJRV01zUTBGRVRUdEJRVVZ3UWtVc1dVRkJWU3hEUVVaVk8wRkJSM0JDUXl4WlFVRlZMRU5CU0ZVN1FVRkpjRUpHTEdsQ1FVRmxPMEZCU2tzc1F6czdhMEpCZFVOVUxGVkJRVU5HTEV0QlFVUTdRVUZCUVN4VFFVRlhMRWxCUVVsR0xFOUJRVW9zUTBGQldVVXNTMEZCV2l4RFFVRllPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSndhSGx6YVdOekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMeWM3WEc1cGJYQnZjblFnZXlCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ2ZTQm1jbTl0SUNjdUxpOW1jbUZ0WlhONWJtTW5PMXh1YVcxd2IzSjBJSHNnYzNCbFpXUlFaWEpHY21GdFpTQjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYmx4dVkyeGhjM01nVUdoNWMybGpjeUJsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzRnSUhOMFlYUnBZeUJrWldaaGRXeDBVSEp2Y0hNZ1BTQjdYRzRnSUNBZ1lXTmpaV3hsY21GMGFXOXVPaUF3TEZ4dUlDQWdJR1p5YVdOMGFXOXVPaUF3TEZ4dUlDQWdJSFpsYkc5amFYUjVPaUF3TEZ4dUlDQWdJR0YxZEc5VGRHOXdVM0JsWldRNklEQXVNREF4WEc0Z0lIMWNibHh1SUNCdmJsVndaR0YwWlNncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdGalkyVnNaWEpoZEdsdmJpd2dZWFYwYjFOMGIzQlRjR1ZsWkN3Z1puSnBZM1JwYjI0c0lIWmxiRzlqYVhSNUxDQnpjSEpwYm1jc0lIUnZJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUd4bGRDQnVaWGRXWld4dlkybDBlU0E5SUhabGJHOWphWFI1TzF4dUlDQWdJR052Ym5OMElHVnNZWEJ6WldRZ1BTQjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVW9LVHRjYmx4dUlDQWdJQzh2SUVGd2NHeDVJR0ZqWTJWc1pYSmhkR2x2YmlCMGJ5QjJaV3h2WTJsMGVWeHVJQ0FnSUdsbUlDaGhZMk5sYkdWeVlYUnBiMjRwSUh0Y2JpQWdJQ0FnSUc1bGQxWmxiRzlqYVhSNUlDczlJSE53WldWa1VHVnlSbkpoYldVb1lXTmpaV3hsY21GMGFXOXVMQ0JsYkdGd2MyVmtLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJCY0hCc2VTQm1jbWxqZEdsdmJpQjBieUIyWld4dlkybDBlVnh1SUNBZ0lHbG1JQ2htY21samRHbHZiaWtnZTF4dUlDQWdJQ0FnYm1WM1ZtVnNiMk5wZEhrZ0tqMGdLREVnTFNCbWNtbGpkR2x2YmlrZ0tpb2dLR1ZzWVhCelpXUWdMeUF4TURBcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaHpjSEpwYm1jZ0ppWWdkRzhnSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ1pHbHpkR0Z1WTJWVWIxUmhjbWRsZENBOUlIUnZJQzBnZEdocGN5NWpkWEp5Wlc1ME8xeHVJQ0FnSUNBZ2JtVjNWbVZzYjJOcGRIa2dLejBnWkdsemRHRnVZMlZVYjFSaGNtZGxkQ0FxSUhOd1pXVmtVR1Z5Um5KaGJXVW9jM0J5YVc1bkxDQmxiR0Z3YzJWa0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QkJjSEJzZVNCMlpXeHZZMmwwZVZ4dUlDQWdJSFJvYVhNdVkzVnljbVZ1ZENBclBTQnpjR1ZsWkZCbGNrWnlZVzFsS0c1bGQxWmxiRzlqYVhSNUxDQmxiR0Z3YzJWa0tUdGNiaUFnSUNCMGFHbHpMbkJ5YjNCekxuWmxiRzlqYVhSNUlEMGdibVYzVm1Wc2IyTnBkSGs3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1amRYSnlaVzUwTzF4dUlDQjlYRzVjYmlBZ2FYTkJZM1JwYjI1RGIyMXdiR1YwWlNncElIdGNiaUFnSUNCeVpYUjFjbTRnS0NGMGFHbHpMblpsYkc5amFYUjVJSHg4SUUxaGRHZ3VZV0p6S0hSb2FYTXVkbVZzYjJOcGRIa3BJRHc5SUhSb2FYTXVjSEp2Y0hNdVlYVjBiMU4wYjNCVGNHVmxaQ2s3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hCeWIzQnpLU0E5UGlCdVpYY2dVR2g1YzJsamN5aHdjbTl3Y3lrN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGh5c2ljcy5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQYXJhbGxlbCA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQYXJhbGxlbCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGFyYWxsZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhcmFsbGVsKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLnByb3BzLmFjdGlvbnM7XG5cbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSBhY3Rpb25zLmxlbmd0aDtcblxuICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICBhY3Rpb24uc2V0UHJvcHMoe1xuICAgICAgICBfb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLnN0b3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUuYWRkQWN0aW9uID0gZnVuY3Rpb24gYWRkQWN0aW9uKGFjdGlvbikge1xuICAgIHZhciBhY3Rpb25zID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuXG5cbiAgICBpZiAoYWN0aW9ucy5pbmRleE9mKGFjdGlvbikgPT09IC0xKSB7XG4gICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDA7XG4gIH07XG5cbiAgcmV0dXJuIFBhcmFsbGVsO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBQYXJhbGxlbCh7IGFjdGlvbnM6IGFjdGlvbnMgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0JoY21Gc2JHVnNMbXB6SWwwc0ltNWhiV1Z6SWpwYklsQmhjbUZzYkdWc0lpd2liMjVUZEdGeWRDSXNJbUZqZEdsdmJuTWlMQ0p3Y205d2N5SXNJbTUxYlVGamRHbDJaVUZqZEdsdmJuTWlMQ0pzWlc1bmRHZ2lMQ0ptYjNKRllXTm9JaXdpWVdOMGFXOXVJaXdpYzJWMFVISnZjSE1pTENKZmIyNVRkRzl3SWl3aWMzUmhjblFpTENKdmJsTjBiM0FpTENKemRHOXdJaXdpWVdSa1FXTjBhVzl1SWl3aWFXNWtaWGhQWmlJc0luQjFjMmdpTENKcGMwRmpkR2x2YmtOdmJYQnNaWFJsSWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3T3pzN096czdPenRKUVVWTlFTeFJPenM3T3pzN096czdjVUpCUTBwRExFOHNjMEpCUVZVN1FVRkJRVHM3UVVGQlFTeFJRVU5CUXl4UFFVUkJMRWRCUTFrc1MwRkJTME1zUzBGRWFrSXNRMEZEUVVRc1QwRkVRVHM3UVVGRlVpeFRRVUZMUlN4blFrRkJUQ3hIUVVGM1FrWXNVVUZCVVVjc1RVRkJhRU03TzBGQlJVRklMRmxCUVZGSkxFOUJRVklzUTBGQlowSXNWVUZCUTBNc1RVRkJSQ3hGUVVGWk8wRkJRekZDUVN4aFFVRlBReXhSUVVGUUxFTkJRV2RDTzBGQlEyUkRMR2xDUVVGVE8wRkJRVUVzYVVKQlFVMHNUMEZCUzB3c1owSkJRVXdzUlVGQlRqdEJRVUZCTzBGQlJFc3NUMEZCYUVJc1JVRkZSMDBzUzBGR1NEdEJRVWRFTEV0QlNrUTdRVUZMUkN4SE96dHhRa0ZGUkVNc1RTeHhRa0ZCVXp0QlFVTlFMRk5CUVV0U0xFdEJRVXdzUTBGQlYwUXNUMEZCV0N4RFFVRnRRa2tzVDBGQmJrSXNRMEZCTWtJc1ZVRkJRME1zVFVGQlJEdEJRVUZCTEdGQlFWbEJMRTlCUVU5TExFbEJRVkFzUlVGQldqdEJRVUZCTEV0QlFUTkNPMEZCUTBRc1J6czdjVUpCUlVSRExGTXNjMEpCUVZWT0xFMHNSVUZCVVR0QlFVRkJMRkZCUTFKTUxFOUJSRkVzUjBGRFNTeExRVUZMUXl4TFFVUlVMRU5CUTFKRUxFOUJSRkU3T3p0QlFVZG9RaXhSUVVGSlFTeFJRVUZSV1N4UFFVRlNMRU5CUVdkQ1VDeE5RVUZvUWl4TlFVRTBRaXhEUVVGRExFTkJRV3BETEVWQlFXOURPMEZCUTJ4RFRDeGpRVUZSWVN4SlFVRlNMRU5CUVdGU0xFMUJRV0k3UVVGRFJEdEJRVU5HTEVjN08zRkNRVVZFVXl4blFpd3JRa0ZCYlVJN1FVRkRha0lzVjBGQlVTeExRVUZMV2l4blFrRkJUQ3hMUVVFd1FpeERRVUZzUXp0QlFVTkVMRWM3T3pzN08ydENRVWRaTEZWQlFVTkdMRTlCUVVRN1FVRkJRU3hUUVVGaExFbEJRVWxHTEZGQlFVb3NRMEZCWVN4RlFVRkZSU3huUWtGQlJpeEZRVUZpTEVOQlFXSTdRVUZCUVN4RElpd2labWxzWlNJNkluQmhjbUZzYkdWc0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMeWM3WEc1Y2JtTnNZWE56SUZCaGNtRnNiR1ZzSUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdGamRHbHZibk1nZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpJRDBnWVdOMGFXOXVjeTVzWlc1bmRHZzdYRzVjYmlBZ0lDQmhZM1JwYjI1ekxtWnZja1ZoWTJnb0tHRmpkR2x2YmlrZ1BUNGdlMXh1SUNBZ0lDQWdZV04wYVc5dUxuTmxkRkJ5YjNCektIdGNiaUFnSUNBZ0lDQWdYMjl1VTNSdmNEb2dLQ2tnUFQ0Z2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpMUzFjYmlBZ0lDQWdJSDBwTG5OMFlYSjBLQ2s3WEc0Z0lDQWdmU2s3WEc0Z0lIMWNibHh1SUNCdmJsTjBiM0FvS1NCN1hHNGdJQ0FnZEdocGN5NXdjbTl3Y3k1aFkzUnBiMjV6TG1admNrVmhZMmdvS0dGamRHbHZiaWtnUFQ0Z1lXTjBhVzl1TG5OMGIzQW9LU2s3WEc0Z0lIMWNibHh1SUNCaFpHUkJZM1JwYjI0b1lXTjBhVzl1S1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJoWTNScGIyNXpJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2FXWWdLR0ZqZEdsdmJuTXVhVzVrWlhoUFppaGhZM1JwYjI0cElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ1lXTjBhVzl1Y3k1d2RYTm9LR0ZqZEdsdmJpazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdhWE5CWTNScGIyNURiMjF3YkdWMFpTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z0tIUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeUE5UFQwZ01DazdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR0ZqZEdsdmJuTXBJRDArSUc1bGR5QlFZWEpoYkd4bGJDaDdJR0ZqZEdsdmJuTWdmU2s3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGFyYWxsZWwuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdmFsdWUgPSByZXF1aXJlKCcuL3ZhbHVlJyk7XG5cbnZhciBfdmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWUpO1xuXG52YXIgX2NvbXBvc2l0ZSA9IHJlcXVpcmUoJy4vY29tcG9zaXRlJyk7XG5cbnZhciBfY29tcG9zaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2l0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gY3JlYXRlUG9pbnRlcihfcmVmMiwgX3JlZikge1xuICB2YXIgeCA9IF9yZWYyLngsXG4gICAgICB5ID0gX3JlZjIueTtcblxuICB2YXIgZXZlbnRUb1BvaW50cyA9IF9yZWYuZXZlbnRUb1BvaW50cyxcbiAgICAgIG1vdmVFdmVudCA9IF9yZWYubW92ZUV2ZW50LFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydldmVudFRvUG9pbnRzJywgJ21vdmVFdmVudCddKTtcblxuICB2YXIgcG9pbnRlciA9ICgwLCBfY29tcG9zaXRlMi5kZWZhdWx0KSh7XG4gICAgeDogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeCksXG4gICAgeTogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeSlcbiAgfSwgX2V4dGVuZHMoe1xuICAgIHBhc3NpdmU6IHRydWVcbiAgfSwgcHJvcHMpKTtcblxuICB2YXIgdXBkYXRlUG9pbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHByb3BzLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyIHBvaW50cyA9IGV2ZW50VG9Qb2ludHMoZSk7XG4gICAgcG9pbnRlci54LnNldChwb2ludHMueCk7XG4gICAgcG9pbnRlci55LnNldChwb2ludHMueSk7XG4gIH07XG5cbiAgcG9pbnRlci5zZXRQcm9wcyh7XG4gICAgX29uU3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpO1xuICAgIH0sXG4gICAgX29uU3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcG9pbnRlcjtcbn1cblxudmFyIG1vdXNlRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIHtcbiAgICB4OiBlLnBhZ2VYLFxuICAgIHk6IGUucGFnZVlcbiAgfTtcbn07XG5cbnZhciB0b3VjaEV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChfcmVmMykge1xuICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBfcmVmMy5jaGFuZ2VkVG91Y2hlcztcbiAgcmV0dXJuIHtcbiAgICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbiAgfTtcbn07XG5cbnZhciBnZXROYXRpdmVFdmVudCA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiBlLm9yaWdpbmFsRXZlbnQgfHwgZS5uYXRpdmVFdmVudCB8fCBlO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGUsIHByb3BzKSB7XG4gIHZhciBuYXRpdmVFdmVudCA9IGdldE5hdGl2ZUV2ZW50KGUpO1xuICByZXR1cm4gbmF0aXZlRXZlbnQudG91Y2hlcyA/IGNyZWF0ZVBvaW50ZXIodG91Y2hFdmVudFRvUG9pbnQoZSksIF9leHRlbmRzKHtcbiAgICBtb3ZlRXZlbnQ6ICd0b3VjaG1vdmUnLFxuICAgIGV2ZW50VG9Qb2ludHM6IHRvdWNoRXZlbnRUb1BvaW50XG4gIH0sIHByb3BzKSkgOiBjcmVhdGVQb2ludGVyKG1vdXNlRXZlbnRUb1BvaW50KGUpLCBfZXh0ZW5kcyh7XG4gICAgbW92ZUV2ZW50OiAnbW91c2Vtb3ZlJyxcbiAgICBldmVudFRvUG9pbnRzOiBtb3VzZUV2ZW50VG9Qb2ludFxuICB9LCBwcm9wcykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNCdmFXNTBaWEl1YW5NaVhTd2libUZ0WlhNaU9sc2lZM0psWVhSbFVHOXBiblJsY2lJc0luZ2lMQ0o1SWl3aVpYWmxiblJVYjFCdmFXNTBjeUlzSW0xdmRtVkZkbVZ1ZENJc0luQnliM0J6SWl3aWNHOXBiblJsY2lJc0luQmhjM05wZG1VaUxDSjFjR1JoZEdWUWIybHVkR1Z5SWl3aVpTSXNJbkJ5WlhabGJuUkVaV1poZFd4MElpd2ljRzlwYm5Seklpd2ljMlYwSWl3aWMyVjBVSEp2Y0hNaUxDSmZiMjVUZEdGeWRDSXNJbVJ2WTNWdFpXNTBJaXdpWkc5amRXMWxiblJGYkdWdFpXNTBJaXdpWVdSa1JYWmxiblJNYVhOMFpXNWxjaUlzSWw5dmJsTjBiM0FpTENKeVpXMXZkbVZGZG1WdWRFeHBjM1JsYm1WeUlpd2liVzkxYzJWRmRtVnVkRlJ2VUc5cGJuUWlMQ0p3WVdkbFdDSXNJbkJoWjJWWklpd2lkRzkxWTJoRmRtVnVkRlJ2VUc5cGJuUWlMQ0pqYUdGdVoyVmtWRzkxWTJobGN5SXNJbU5zYVdWdWRGZ2lMQ0pqYkdsbGJuUlpJaXdpWjJWMFRtRjBhWFpsUlhabGJuUWlMQ0p2Y21sbmFXNWhiRVYyWlc1MElpd2libUYwYVhabFJYWmxiblFpTENKMGIzVmphR1Z6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3T3pzN096dEJRVVZCTEZOQlFWTkJMR0ZCUVZRc1kwRkJlVVU3UVVGQlFTeE5RVUZvUkVNc1EwRkJaMFFzVTBGQmFFUkJMRU5CUVdkRU8wRkJRVUVzVFVGQk4wTkRMRU5CUVRaRExGTkJRVGREUVN4RFFVRTJRenM3UVVGQlFTeE5RVUYwUTBNc1lVRkJjME1zVVVGQmRFTkJMR0ZCUVhORE8wRkJRVUVzVFVGQmRrSkRMRk5CUVhWQ0xGRkJRWFpDUVN4VFFVRjFRanRCUVVGQkxFMUJRVlJETEV0QlFWTTdPMEZCUTNaRkxFMUJRVTFETEZWQlFWVXNlVUpCUVZVN1FVRkRlRUpNTEU5QlFVY3NjVUpCUVUxQkxFTkJRVTRzUTBGRWNVSTdRVUZGZUVKRExFOUJRVWNzY1VKQlFVMUJMRU5CUVU0N1FVRkdjVUlzUjBGQlZqdEJRVWxrU3l4aFFVRlRPMEZCU2tzc1MwRkxXRVlzUzBGTVZ5eEZRVUZvUWpzN1FVRlJRU3hOUVVGTlJ5eG5Ra0ZCWjBJc1ZVRkJRME1zUTBGQlJDeEZRVUZQTzBGQlF6TkNMRkZCUVVsS0xFMUJRVTFMTEdOQlFWWXNSVUZCTUVJN1FVRkRlRUpFTEZGQlFVVkRMR05CUVVZN1FVRkRSRHM3UVVGRlJDeFJRVUZOUXl4VFFVRlRVaXhqUVVGalRTeERRVUZrTEVOQlFXWTdRVUZEUVVnc1dVRkJVVXdzUTBGQlVpeERRVUZWVnl4SFFVRldMRU5CUVdORUxFOUJRVTlXTEVOQlFYSkNPMEZCUTBGTExGbEJRVkZLTEVOQlFWSXNRMEZCVlZVc1IwRkJWaXhEUVVGalJDeFBRVUZQVkN4RFFVRnlRanRCUVVORUxFZEJVa1E3TzBGQlZVRkpMRlZCUVZGUExGRkJRVklzUTBGQmFVSTdRVUZEWmtNc1kwRkJWVHRCUVVGQkxHRkJRVTFETEZOQlFWTkRMR1ZCUVZRc1EwRkJlVUpETEdkQ1FVRjZRaXhEUVVFd1EySXNVMEZCTVVNc1JVRkJjVVJKTEdGQlFYSkVMRU5CUVU0N1FVRkJRU3hMUVVSTE8wRkJSV1pWTEdGQlFWTTdRVUZCUVN4aFFVRk5TQ3hUUVVGVFF5eGxRVUZVTEVOQlFYbENSeXh0UWtGQmVrSXNRMEZCTmtObUxGTkJRVGRETEVWQlFYZEVTU3hoUVVGNFJDeERRVUZPTzBGQlFVRTdRVUZHVFN4SFFVRnFRanM3UVVGTFFTeFRRVUZQUml4UFFVRlFPMEZCUTBRN08wRkJSVVFzU1VGQlRXTXNiMEpCUVc5Q0xGVkJRVU5ZTEVOQlFVUTdRVUZCUVN4VFFVRlJPMEZCUTJoRFVpeFBRVUZIVVN4RlFVRkZXU3hMUVVReVFqdEJRVVZvUTI1Q0xFOUJRVWRQTEVWQlFVVmhPMEZCUmpKQ0xFZEJRVkk3UVVGQlFTeERRVUV4UWpzN1FVRkxRU3hKUVVGTlF5eHZRa0ZCYjBJN1FVRkJRU3hOUVVGSFF5eGpRVUZJTEZOQlFVZEJMR05CUVVnN1FVRkJRU3hUUVVGNVFqdEJRVU5xUkhaQ0xFOUJRVWQxUWl4bFFVRmxMRU5CUVdZc1JVRkJhMEpETEU5QlJEUkNPMEZCUldwRWRrSXNUMEZCUjNOQ0xHVkJRV1VzUTBGQlppeEZRVUZyUWtVN1FVRkdORUlzUjBGQmVrSTdRVUZCUVN4RFFVRXhRanM3UVVGTFFTeEpRVUZOUXl4cFFrRkJhVUlzVlVGQlEyeENMRU5CUVVRN1FVRkJRU3hUUVVGUFFTeEZRVUZGYlVJc1lVRkJSaXhKUVVGdFFtNUNMRVZCUVVWdlFpeFhRVUZ5UWl4SlFVRnZRM0JDTEVOQlFUTkRPMEZCUVVFc1EwRkJka0k3TzJ0Q1FVVmxMRlZCUVVOQkxFTkJRVVFzUlVGQlNVb3NTMEZCU2l4RlFVRmpPMEZCUXpOQ0xFMUJRVTEzUWl4alFVRmpSaXhsUVVGbGJFSXNRMEZCWml4RFFVRndRanRCUVVOQkxGTkJRVkZ2UWl4WlFVRlpReXhQUVVGaUxFZEJRMHc1UWl4alFVRmpkVUlzYTBKQlFXdENaQ3hEUVVGc1FpeERRVUZrTzBGQlEwVk1MR1ZCUVZjc1YwRkVZanRCUVVWRlJDeHRRa0ZCWlc5Q08wRkJSbXBDTEV0QlIwdHNRaXhMUVVoTUxFVkJSRXNzUjBGTlRFd3NZMEZCWTI5Q0xHdENRVUZyUWxnc1EwRkJiRUlzUTBGQlpEdEJRVU5GVEN4bFFVRlhMRmRCUkdJN1FVRkZSVVFzYlVKQlFXVnBRanRCUVVacVFpeExRVWRMWml4TFFVaE1MRVZCVGtZN1FVRlhSQ3hESWl3aVptbHNaU0k2SW5CdmFXNTBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkbUZzZFdVZ1puSnZiU0FuTGk5MllXeDFaU2M3WEc1cGJYQnZjblFnWTI5dGNHOXphWFJsSUdaeWIyMGdKeTR2WTI5dGNHOXphWFJsSnp0Y2JseHVablZ1WTNScGIyNGdZM0psWVhSbFVHOXBiblJsY2loN0lIZ3NJSGtnZlN3Z2V5QmxkbVZ1ZEZSdlVHOXBiblJ6TENCdGIzWmxSWFpsYm5Rc0lDNHVMbkJ5YjNCeklIMHBJSHRjYmlBZ1kyOXVjM1FnY0c5cGJuUmxjaUE5SUdOdmJYQnZjMmwwWlNoN1hHNGdJQ0FnZURvZ2RtRnNkV1VvZUNrc1hHNGdJQ0FnZVRvZ2RtRnNkV1VvZVNsY2JpQWdmU3dnZTF4dUlDQWdJSEJoYzNOcGRtVTZJSFJ5ZFdVc1hHNGdJQ0FnTGk0dWNISnZjSE5jYmlBZ2ZTazdYRzVjYmlBZ1kyOXVjM1FnZFhCa1lYUmxVRzlwYm5SbGNpQTlJQ2hsS1NBOVBpQjdYRzRnSUNBZ2FXWWdLSEJ5YjNCekxuQnlaWFpsYm5SRVpXWmhkV3gwS1NCN1hHNGdJQ0FnSUNCbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTI5dWMzUWdjRzlwYm5SeklEMGdaWFpsYm5SVWIxQnZhVzUwY3lobEtUdGNiaUFnSUNCd2IybHVkR1Z5TG5ndWMyVjBLSEJ2YVc1MGN5NTRLVHRjYmlBZ0lDQndiMmx1ZEdWeUxua3VjMlYwS0hCdmFXNTBjeTU1S1R0Y2JpQWdmVHRjYmx4dUlDQndiMmx1ZEdWeUxuTmxkRkJ5YjNCektIdGNiaUFnSUNCZmIyNVRkR0Z5ZERvZ0tDa2dQVDRnWkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9iVzkyWlVWMlpXNTBMQ0IxY0dSaGRHVlFiMmx1ZEdWeUtTeGNiaUFnSUNCZmIyNVRkRzl3T2lBb0tTQTlQaUJrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWh0YjNabFJYWmxiblFzSUhWd1pHRjBaVkJ2YVc1MFpYSXBYRzRnSUgwcE8xeHVYRzRnSUhKbGRIVnliaUJ3YjJsdWRHVnlPMXh1ZlZ4dVhHNWpiMjV6ZENCdGIzVnpaVVYyWlc1MFZHOVFiMmx1ZENBOUlDaGxLU0E5UGlBb2UxeHVJQ0I0T2lCbExuQmhaMlZZTEZ4dUlDQjVPaUJsTG5CaFoyVlpYRzU5S1R0Y2JseHVZMjl1YzNRZ2RHOTFZMmhGZG1WdWRGUnZVRzlwYm5RZ1BTQW9leUJqYUdGdVoyVmtWRzkxWTJobGN5QjlLU0E5UGlBb2UxeHVJQ0I0T2lCamFHRnVaMlZrVkc5MVkyaGxjMXN3WFM1amJHbGxiblJZTEZ4dUlDQjVPaUJqYUdGdVoyVmtWRzkxWTJobGMxc3dYUzVqYkdsbGJuUlpYRzU5S1R0Y2JseHVZMjl1YzNRZ1oyVjBUbUYwYVhabFJYWmxiblFnUFNBb1pTa2dQVDRnWlM1dmNtbG5hVzVoYkVWMlpXNTBJSHg4SUdVdWJtRjBhWFpsUlhabGJuUWdmSHdnWlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHVXNJSEJ5YjNCektTQTlQaUI3WEc0Z0lHTnZibk4wSUc1aGRHbDJaVVYyWlc1MElEMGdaMlYwVG1GMGFYWmxSWFpsYm5Rb1pTazdYRzRnSUhKbGRIVnliaUFvYm1GMGFYWmxSWFpsYm5RdWRHOTFZMmhsY3lrZ1AxeHVJQ0FnSUdOeVpXRjBaVkJ2YVc1MFpYSW9kRzkxWTJoRmRtVnVkRlJ2VUc5cGJuUW9aU2tzSUh0Y2JpQWdJQ0FnSUcxdmRtVkZkbVZ1ZERvZ0ozUnZkV05vYlc5MlpTY3NYRzRnSUNBZ0lDQmxkbVZ1ZEZSdlVHOXBiblJ6T2lCMGIzVmphRVYyWlc1MFZHOVFiMmx1ZEN4Y2JpQWdJQ0FnSUM0dUxuQnliM0J6WEc0Z0lDQWdmU2tnT2x4dUlDQWdJR055WldGMFpWQnZhVzUwWlhJb2JXOTFjMlZGZG1WdWRGUnZVRzlwYm5Rb1pTa3NJSHRjYmlBZ0lDQWdJRzF2ZG1WRmRtVnVkRG9nSjIxdmRYTmxiVzkyWlNjc1hHNGdJQ0FnSUNCbGRtVnVkRlJ2VUc5cGJuUnpPaUJ0YjNWelpVVjJaVzUwVkc5UWIybHVkQ3hjYmlBZ0lDQWdJQzR1TG5CeWIzQnpYRzRnSUNBZ2ZTazdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcG9pbnRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDaGFpbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDaGFpbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ2hhaW4ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhaW4pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5wbGF5TmV4dCA9IF90aGlzLnBsYXlOZXh0LmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIENoYWluLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB0aGlzLnByb3BzLmkgPSAwO1xuICAgIHRoaXMucGxheUN1cnJlbnQoKTtcbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUucGxheU5leHQgPSBmdW5jdGlvbiBwbGF5TmV4dCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaSA9IF9wcm9wcy5pLFxuICAgICAgICBvcmRlciA9IF9wcm9wcy5vcmRlcjtcblxuICAgIGlmIChpIDwgb3JkZXIubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5wcm9wcy5pKys7XG4gICAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gICAgfVxuICB9O1xuXG4gIENoYWluLnByb3RvdHlwZS5wbGF5Q3VycmVudCA9IGZ1bmN0aW9uIHBsYXlDdXJyZW50KCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaSA9IF9wcm9wczIuaSxcbiAgICAgICAgb3JkZXIgPSBfcHJvcHMyLm9yZGVyO1xuXG4gICAgb3JkZXJbaV0ub25Db21wbGV0ZSA9IHRoaXMucGxheU5leHQ7XG4gICAgb3JkZXJbaV0uc3RhcnQoKTtcbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaSA9IF9wcm9wczMuaSxcbiAgICAgICAgb3JkZXIgPSBfcHJvcHMzLm9yZGVyO1xuXG4gICAgb3JkZXJbaV0uc3RvcCgpO1xuICB9O1xuXG4gIHJldHVybiBDaGFpbjtcbn0oXzIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcmRlcikge1xuICByZXR1cm4gbmV3IENoYWluKHsgb3JkZXI6IG9yZGVyIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOb1lXbHVMbXB6SWwwc0ltNWhiV1Z6SWpwYklrTm9ZV2x1SWl3aWNISnZjSE1pTENKd2JHRjVUbVY0ZENJc0ltSnBibVFpTENKdmJsTjBZWEowSWl3aWFTSXNJbkJzWVhsRGRYSnlaVzUwSWl3aWIzSmtaWElpTENKc1pXNW5kR2dpTENKdmJrTnZiWEJzWlhSbElpd2ljM1JoY25RaUxDSnZibE4wYjNBaUxDSnpkRzl3SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3T3pzN096czdPenRKUVVWTlFTeExPenM3UVVGRFNpeHBRa0ZCV1VNc1MwRkJXaXhGUVVGdFFqdEJRVUZCT3p0QlFVRkJMR2xFUVVOcVFpeHRRa0ZCVFVFc1MwRkJUaXhEUVVScFFqczdRVUZGYWtJc1ZVRkJTME1zVVVGQlRDeEhRVUZuUWl4TlFVRkxRU3hSUVVGTUxFTkJRV05ETEVsQlFXUXNUMEZCYUVJN1FVRkdhVUk3UVVGSGJFSTdPMnRDUVVWRVF5eFBMSE5DUVVGVk8wRkJRMUlzVTBGQlMwZ3NTMEZCVEN4RFFVRlhTU3hEUVVGWUxFZEJRV1VzUTBGQlpqdEJRVU5CTEZOQlFVdERMRmRCUVV3N1FVRkRSQ3hIT3p0clFrRkZSRW9zVVN4MVFrRkJWenRCUVVGQkxHbENRVU5aTEV0QlFVdEVMRXRCUkdwQ08wRkJRVUVzVVVGRFJFa3NRMEZFUXl4VlFVTkVRU3hEUVVSRE8wRkJRVUVzVVVGRFJVVXNTMEZFUml4VlFVTkZRU3hMUVVSR096dEJRVVZVTEZGQlFVbEdMRWxCUVVsRkxFMUJRVTFETEUxQlFVNHNSMEZCWlN4RFFVRjJRaXhGUVVFd1FqdEJRVU40UWl4WFFVRkxVQ3hMUVVGTUxFTkJRVmRKTEVOQlFWZzdRVUZEUVN4WFFVRkxReXhYUVVGTU8wRkJRMFE3UVVGRFJpeEhPenRyUWtGRlJFRXNWeXd3UWtGQll6dEJRVUZCTEd0Q1FVTlRMRXRCUVV0TUxFdEJSR1E3UVVGQlFTeFJRVU5LU1N4RFFVUkpMRmRCUTBwQkxFTkJSRWs3UVVGQlFTeFJRVU5FUlN4TFFVUkRMRmRCUTBSQkxFdEJSRU03TzBGQlJWcEJMRlZCUVUxR0xFTkJRVTRzUlVGQlUwa3NWVUZCVkN4SFFVRnpRaXhMUVVGTFVDeFJRVUV6UWp0QlFVTkJTeXhWUVVGTlJpeERRVUZPTEVWQlFWTkxMRXRCUVZRN1FVRkRSQ3hIT3p0clFrRkZSRU1zVFN4eFFrRkJVenRCUVVGQkxHdENRVU5qTEV0QlFVdFdMRXRCUkc1Q08wRkJRVUVzVVVGRFEwa3NRMEZFUkN4WFFVTkRRU3hEUVVSRU8wRkJRVUVzVVVGRFNVVXNTMEZFU2l4WFFVTkpRU3hMUVVSS096dEJRVVZRUVN4VlFVRk5SaXhEUVVGT0xFVkJRVk5QTEVsQlFWUTdRVUZEUkN4SE96czdPenRyUWtGSFdTeFZRVUZEVEN4TFFVRkVPMEZCUVVFc1UwRkJWeXhKUVVGSlVDeExRVUZLTEVOQlFWVXNSVUZCUlU4c1dVRkJSaXhGUVVGV0xFTkJRVmc3UVVGQlFTeERJaXdpWm1sc1pTSTZJbU5vWVdsdUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMeWM3WEc1Y2JtTnNZWE56SUVOb1lXbHVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnWTI5dWMzUnlkV04wYjNJb2NISnZjSE1wSUh0Y2JpQWdJQ0J6ZFhCbGNpaHdjbTl3Y3lrN1hHNGdJQ0FnZEdocGN5NXdiR0Y1VG1WNGRDQTlJSFJvYVhNdWNHeGhlVTVsZUhRdVltbHVaQ2gwYUdsektUdGNiaUFnZlZ4dVhHNGdJRzl1VTNSaGNuUW9LU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTVwSUQwZ01EdGNiaUFnSUNCMGFHbHpMbkJzWVhsRGRYSnlaVzUwS0NrN1hHNGdJSDFjYmx4dUlDQndiR0Y1VG1WNGRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHa3NJRzl5WkdWeUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR2xtSUNocElEd2diM0prWlhJdWJHVnVaM1JvSUMwZ01Ta2dlMXh1SUNBZ0lDQWdkR2hwY3k1d2NtOXdjeTVwS3lzN1hHNGdJQ0FnSUNCMGFHbHpMbkJzWVhsRGRYSnlaVzUwS0NrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NHeGhlVU4xY25KbGJuUW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QnBMQ0J2Y21SbGNpQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0J2Y21SbGNsdHBYUzV2YmtOdmJYQnNaWFJsSUQwZ2RHaHBjeTV3YkdGNVRtVjRkRHRjYmlBZ0lDQnZjbVJsY2x0cFhTNXpkR0Z5ZENncE8xeHVJQ0I5WEc1Y2JpQWdiMjVUZEc5d0tDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2FTd2diM0prWlhJZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdiM0prWlhKYmFWMHVjM1J2Y0NncE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaHZjbVJsY2lrZ1BUNGdibVYzSUVOb1lXbHVLSHNnYjNKa1pYSWdmU2s3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY2hhaW4uanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgcmV0dXJuICgwLCBfdHdlZW4yLmRlZmF1bHQpKHsgZHVyYXRpb246IGR1cmF0aW9uIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJSbGJHRjVMbXB6SWwwc0ltNWhiV1Z6SWpwYkltUjFjbUYwYVc5dUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN096dHJRa0ZGWlN4VlFVRkRRU3hSUVVGRU8wRkJRVUVzVTBGQll5eHhRa0ZCVFN4RlFVRkZRU3hyUWtGQlJpeEZRVUZPTEVOQlFXUTdRVUZCUVN4RElpd2labWxzWlNJNkltUmxiR0Y1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSFIzWldWdUlHWnliMjBnSnk0dmRIZGxaVzRuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1pIVnlZWFJwYjI0cElEMCtJSFIzWldWdUtIc2daSFZ5WVhScGIyNGdmU2s3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZGVsYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJy4uL2Vhc2luZycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDcm9zc0ZhZGUgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ3Jvc3NGYWRlLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBDcm9zc0ZhZGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENyb3NzRmFkZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENyb3NzRmFkZS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uLFxuICAgICAgICBlYXNlID0gX3Byb3BzLmVhc2UsXG4gICAgICAgIGZhZGVyID0gX3Byb3BzLmZhZGVyO1xuXG5cbiAgICB0aGlzLmZhZGVyID0gZmFkZXIgfHwgKDAsIF90d2VlbjIuZGVmYXVsdCkoe1xuICAgICAgdG86IDEsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBlYXNlOiBlYXNlXG4gICAgfSkuc3RhcnQoKTtcbiAgfTtcblxuICBDcm9zc0ZhZGUucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBmcm9tID0gX3Byb3BzMi5mcm9tLFxuICAgICAgICB0byA9IF9wcm9wczIudG87XG5cbiAgICB2YXIgYmFsYW5jZSA9IHRoaXMuZmFkZXIuZ2V0KCk7XG4gICAgdmFyIGxhdGVzdEZyb21WYWx1ZSA9IGZyb20uZ2V0KCk7XG4gICAgdmFyIGxhdGVzdFRvVmFsdWUgPSB0by5nZXQoKTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShsYXRlc3RGcm9tVmFsdWUsIGxhdGVzdFRvVmFsdWUsIGJhbGFuY2UpO1xuICB9O1xuXG4gIHJldHVybiBDcm9zc0ZhZGU7XG59KF8yLmRlZmF1bHQpO1xuXG5Dcm9zc0ZhZGUuZGVmYXVsdFByb3BzID0ge1xuICBlYXNlOiBfZWFzaW5nLmxpbmVhclxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ3Jvc3NGYWRlKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnliM056TFdaaFpHVXVhbk1pWFN3aWJtRnRaWE1pT2xzaVEzSnZjM05HWVdSbElpd2liMjVUZEdGeWRDSXNJbkJ5YjNCeklpd2laSFZ5WVhScGIyNGlMQ0psWVhObElpd2labUZrWlhJaUxDSjBieUlzSW5OMFlYSjBJaXdpYjI1VmNHUmhkR1VpTENKbWNtOXRJaXdpWW1Gc1lXNWpaU0lzSW1kbGRDSXNJbXhoZEdWemRFWnliMjFXWVd4MVpTSXNJbXhoZEdWemRGUnZWbUZzZFdVaUxDSmtaV1poZFd4MFVISnZjSE1pWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenRCUVVOQk96czdPMEZCUTBFN08wRkJRMEU3T3pzN096czdPenM3U1VGRlRVRXNVenM3T3pzN096czdPM05DUVV0S1F5eFBMSE5DUVVGVk8wRkJRVUVzYVVKQlF6QkNMRXRCUVV0RExFdEJSQzlDTzBGQlFVRXNVVUZEUVVNc1VVRkVRU3hWUVVOQlFTeFJRVVJCTzBGQlFVRXNVVUZEVlVNc1NVRkVWaXhWUVVOVlFTeEpRVVJXTzBGQlFVRXNVVUZEWjBKRExFdEJSR2hDTEZWQlEyZENRU3hMUVVSb1FqczdPMEZCUjFJc1UwRkJTMEVzUzBGQlRDeEhRVUZoUVN4VFFVRlRMSEZDUVVGTk8wRkJRekZDUXl4VlFVRkpMRU5CUkhOQ08wRkJSVEZDU0N4M1FrRkdNRUk3UVVGSE1VSkRPMEZCU0RCQ0xFdEJRVTRzUlVGSmJrSkhMRXRCU20xQ0xFVkJRWFJDTzBGQlMwUXNSenM3YzBKQlJVUkRMRkVzZFVKQlFWYzdRVUZCUVN4clFrRkRXU3hMUVVGTFRpeExRVVJxUWp0QlFVRkJMRkZCUTBSUExFbEJSRU1zVjBGRFJFRXNTVUZFUXp0QlFVRkJMRkZCUTB0SUxFVkJSRXdzVjBGRFMwRXNSVUZFVERzN1FVRkZWQ3hSUVVGTlNTeFZRVUZWTEV0QlFVdE1MRXRCUVV3c1EwRkJWMDBzUjBGQldDeEZRVUZvUWp0QlFVTkJMRkZCUVUxRExHdENRVUZyUWtnc1MwRkJTMFVzUjBGQlRDeEZRVUY0UWp0QlFVTkJMRkZCUVUxRkxHZENRVUZuUWxBc1IwRkJSMHNzUjBGQlNDeEZRVUYwUWp0QlFVTkJMRmRCUVU4c1owTkJRWEZDUXl4bFFVRnlRaXhGUVVGelEwTXNZVUZCZEVNc1JVRkJjVVJJTEU5QlFYSkVMRU5CUVZBN1FVRkRSQ3hIT3pzN096dEJRWEpDUjFZc1V5eERRVU5IWXl4WkxFZEJRV1U3UVVGRGNFSldPMEZCUkc5Q0xFTTdPMnRDUVhWQ1ZDeFZRVUZEUml4TFFVRkVPMEZCUVVFc1UwRkJWeXhKUVVGSlJpeFRRVUZLTEVOQlFXTkZMRXRCUVdRc1EwRkJXRHRCUVVGQkxFTWlMQ0ptYVd4bElqb2lZM0p2YzNNdFptRmtaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk4bk8xeHVhVzF3YjNKMElIUjNaV1Z1SUdaeWIyMGdKeTR2ZEhkbFpXNG5PMXh1YVcxd2IzSjBJSHNnYkdsdVpXRnlJSDBnWm5KdmJTQW5MaTR2WldGemFXNW5KenRjYm1sdGNHOXlkQ0I3SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOeklIMGdabkp2YlNBbkxpNHZhVzVqTDJOaGJHTW5PMXh1WEc1amJHRnpjeUJEY205emMwWmhaR1VnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCemRHRjBhV01nWkdWbVlYVnNkRkJ5YjNCeklEMGdlMXh1SUNBZ0lHVmhjMlU2SUd4cGJtVmhjbHh1SUNCOVhHNWNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1IxY21GMGFXOXVMQ0JsWVhObExDQm1ZV1JsY2lCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmx4dUlDQWdJSFJvYVhNdVptRmtaWElnUFNCbVlXUmxjaUI4ZkNCMGQyVmxiaWg3WEc0Z0lDQWdJQ0IwYnpvZ01TeGNiaUFnSUNBZ0lHUjFjbUYwYVc5dUxGeHVJQ0FnSUNBZ1pXRnpaVnh1SUNBZ0lIMHBMbk4wWVhKMEtDazdYRzRnSUgxY2JseHVJQ0J2YmxWd1pHRjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1p5YjIwc0lIUnZJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJR0poYkdGdVkyVWdQU0IwYUdsekxtWmhaR1Z5TG1kbGRDZ3BPMXh1SUNBZ0lHTnZibk4wSUd4aGRHVnpkRVp5YjIxV1lXeDFaU0E5SUdaeWIyMHVaMlYwS0NrN1hHNGdJQ0FnWTI5dWMzUWdiR0YwWlhOMFZHOVdZV3gxWlNBOUlIUnZMbWRsZENncE8xeHVJQ0FnSUhKbGRIVnliaUJuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3loc1lYUmxjM1JHY205dFZtRnNkV1VzSUd4aGRHVnpkRlJ2Vm1Gc2RXVXNJR0poYkdGdVkyVXBPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2h3Y205d2N5a2dQVDRnYm1WM0lFTnliM056Um1Ga1pTaHdjbTl3Y3lrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ29tcG9zaXRlQWN0aW9uID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENvbXBvc2l0ZUFjdGlvbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ29tcG9zaXRlQWN0aW9uKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvc2l0ZUFjdGlvbik7XG5cbiAgICB2YXIgYWN0aW9ucyA9IHByb3BzLmFjdGlvbnMsXG4gICAgICAgIHJlbWFpbmluZ1Byb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ2FjdGlvbnMnXSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwodGhpcywgcmVtYWluaW5nUHJvcHMpKTtcblxuICAgIF90aGlzLmN1cnJlbnQgPSB7fTtcbiAgICBfdGhpcy5hY3Rpb25LZXlzID0gW107XG4gICAgX3RoaXMuYWRkQWN0aW9ucyhwcm9wcy5hY3Rpb25zKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmFkZEFjdGlvbnMgPSBmdW5jdGlvbiBhZGRBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChfdGhpczIuYWN0aW9uS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgIF90aGlzMi5hY3Rpb25LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMyW2tleV0gPSBhY3Rpb25zW2tleV07XG5cbiAgICAgIHZhciBvblVwZGF0ZSA9IGZ1bmN0aW9uICh2LCBhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5jdXJyZW50W2tleV0gPSBhY3Rpb24uZ2V0KCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpczJba2V5XS5zZXRQcm9wcyh7XG4gICAgICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuICAgICAgfSkuYWRkTGlzdGVuZXIob25VcGRhdGUpO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYWN0aW9ucykge1xuICAgICAgX2xvb3Aoa2V5KTtcbiAgICB9XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IHRoaXMuYWN0aW9uS2V5cy5sZW5ndGg7XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzM1trZXldLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXM0W2tleV0uc3RvcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciB2ZWxvY2l0eSA9IHt9O1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB2ZWxvY2l0eVtrZXldID0gX3RoaXM1W2tleV0uZ2V0VmVsb2NpdHkoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwO1xuICB9O1xuXG4gIHJldHVybiBDb21wb3NpdGVBY3Rpb247XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDb21wb3NpdGVBY3Rpb24oX2V4dGVuZHMoe1xuICAgIGFjdGlvbnM6IGFjdGlvbnNcbiAgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnZiWEJ2YzJsMFpTNXFjeUpkTENKdVlXMWxjeUk2V3lKRGIyMXdiM05wZEdWQlkzUnBiMjRpTENKd2NtOXdjeUlzSW1GamRHbHZibk1pTENKeVpXMWhhVzVwYm1kUWNtOXdjeUlzSW1OMWNuSmxiblFpTENKaFkzUnBiMjVMWlhseklpd2lZV1JrUVdOMGFXOXVjeUlzSW10bGVTSXNJbWx1WkdWNFQyWWlMQ0p3ZFhOb0lpd2liMjVWY0dSaGRHVWlMQ0oySWl3aVlXTjBhVzl1SWl3aVoyVjBJaXdpYzJWMFVISnZjSE1pTENKZmIyNVRkRzl3SWl3aWJuVnRRV04wYVhabFFXTjBhVzl1Y3lJc0ltRmtaRXhwYzNSbGJtVnlJaXdpYjI1VGRHRnlkQ0lzSW14bGJtZDBhQ0lzSW1admNrVmhZMmdpTENKemRHRnlkQ0lzSW05dVUzUnZjQ0lzSW5OMGIzQWlMQ0puWlhSV1pXeHZZMmwwZVNJc0luWmxiRzlqYVhSNUlpd2lhWE5CWTNScGIyNURiMjF3YkdWMFpTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVVFN096czdPenM3T3pzN096czdPMGxCUlUxQkxHVTdPenRCUVVOS0xESkNRVUZaUXl4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlFVRXNVVUZEVkVNc1QwRkVVeXhIUVVOelFrUXNTMEZFZEVJc1EwRkRWRU1zVDBGRVV6dEJRVUZCTEZGQlEwZERMR05CUkVnc05FSkJRM05DUml4TFFVUjBRanM3UVVGQlFTeHBSRUZGYWtJc2JVSkJRVTFGTEdOQlFVNHNRMEZHYVVJN08wRkJSMnBDTEZWQlFVdERMRTlCUVV3c1IwRkJaU3hGUVVGbU8wRkJRMEVzVlVGQlMwTXNWVUZCVEN4SFFVRnJRaXhGUVVGc1FqdEJRVU5CTEZWQlFVdERMRlZCUVV3c1EwRkJaMEpNTEUxQlFVMURMRTlCUVhSQ08wRkJUR2xDTzBGQlRXeENPenMwUWtGRlJFa3NWU3gxUWtGQlYwb3NUeXhGUVVGVE8wRkJRVUU3TzBGQlFVRXNNRUpCUTFCTExFZEJSRTg3UVVGRmFFSXNWVUZCU1N4UFFVRkxSaXhWUVVGTUxFTkJRV2RDUnl4UFFVRm9RaXhEUVVGM1FrUXNSMEZCZUVJc1RVRkJhVU1zUTBGQlF5eERRVUYwUXl4RlFVRjVRenRCUVVOMlF5eGxRVUZMUml4VlFVRk1MRU5CUVdkQ1NTeEpRVUZvUWl4RFFVRnhRa1lzUjBGQmNrSTdRVUZEUkRzN1FVRkZSQ3hoUVVGTFFTeEhRVUZNTEVsQlFWbE1MRkZCUVZGTExFZEJRVklzUTBGQldqczdRVUZGUVN4VlFVRk5SeXhYUVVGWExGVkJRVU5ETEVOQlFVUXNSVUZCU1VNc1RVRkJTanRCUVVGQkxHVkJRV1VzVDBGQlMxSXNUMEZCVEN4RFFVRmhSeXhIUVVGaUxFbEJRVzlDU3l4UFFVRlBReXhIUVVGUUxFVkJRVzVETzBGQlFVRXNUMEZCYWtJN08wRkJSVUVzWVVGQlMwNHNSMEZCVEN4RlFVTkhUeXhSUVVSSUxFTkJRMWs3UVVGRFVrTXNhVUpCUVZNN1FVRkJRU3hwUWtGQlRTeFBRVUZMUXl4blFrRkJUQ3hGUVVGT08wRkJRVUU3UVVGRVJDeFBRVVJhTEVWQlNVZERMRmRCU2tnc1EwRkpaVkFzVVVGS1pqdEJRVlpuUWpzN1FVRkRiRUlzVTBGQlN5eEpRVUZOU0N4SFFVRllMRWxCUVd0Q1RDeFBRVUZzUWl4RlFVRXlRanRCUVVGQkxGbEJRV2hDU3l4SFFVRm5RanRCUVdNeFFqdEJRVU5HTEVjN096UkNRVVZFVnl4UExITkNRVUZWTzBGQlFVRTdPMEZCUTFJc1UwRkJTMFlzWjBKQlFVd3NSMEZCZDBJc1MwRkJTMWdzVlVGQlRDeERRVUZuUW1Nc1RVRkJlRU03UVVGRFFTeFRRVUZMWkN4VlFVRk1MRU5CUVdkQ1pTeFBRVUZvUWl4RFFVRjNRaXhWUVVGRFlpeEhRVUZFTzBGQlFVRXNZVUZCVXl4UFFVRkxRU3hIUVVGTUxFVkJRVlZqTEV0QlFWWXNSVUZCVkR0QlFVRkJMRXRCUVhoQ08wRkJRMFFzUnpzN05FSkJSVVJETEUwc2NVSkJRVk03UVVGQlFUczdRVUZEVUN4VFFVRkxha0lzVlVGQlRDeERRVUZuUW1Vc1QwRkJhRUlzUTBGQmQwSXNWVUZCUTJJc1IwRkJSRHRCUVVGQkxHRkJRVk1zVDBGQlMwRXNSMEZCVEN4RlFVRlZaMElzU1VGQlZpeEZRVUZVTzBGQlFVRXNTMEZCZUVJN1FVRkRSQ3hIT3pzMFFrRkZSRU1zVnl3d1FrRkJZenRCUVVGQk96dEJRVU5hTEZGQlFVMURMRmRCUVZjc1JVRkJha0k3UVVGRFFTeFRRVUZMY0VJc1ZVRkJUQ3hEUVVGblFtVXNUMEZCYUVJc1EwRkJkMElzVlVGQlEySXNSMEZCUkR0QlFVRkJMR0ZCUVZOclFpeFRRVUZUYkVJc1IwRkJWQ3hKUVVGblFpeFBRVUZMUVN4SFFVRk1MRVZCUVZWcFFpeFhRVUZXTEVWQlFYcENPMEZCUVVFc1MwRkJlRUk3UVVGRFFTeFhRVUZQUXl4UlFVRlFPMEZCUTBRc1J6czdORUpCUlVSRExHZENMQ3RDUVVGdFFqdEJRVU5xUWl4WFFVRlJMRXRCUVV0V0xHZENRVUZNTEV0QlFUQkNMRU5CUVd4RE8wRkJRMFFzUnpzN096czdhMEpCUjFrc1ZVRkJRMlFzVDBGQlJDeEZRVUZWUkN4TFFVRldMRVZCUVc5Q08wRkJRMnBETEZOQlFVOHNTVUZCU1VRc1pVRkJTanRCUVVOTVJUdEJRVVJMTEV0QlJVWkVMRXRCUmtVc1JVRkJVRHRCUVVsRUxFTWlMQ0ptYVd4bElqb2lZMjl0Y0c5emFYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNWNibU5zWVhOeklFTnZiWEJ2YzJsMFpVRmpkR2x2YmlCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCaFkzUnBiMjV6TENBdUxpNXlaVzFoYVc1cGJtZFFjbTl3Y3lCOUlEMGdjSEp2Y0hNN1hHNGdJQ0FnYzNWd1pYSW9jbVZ0WVdsdWFXNW5VSEp2Y0hNcE8xeHVJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRDQTlJSHQ5TzF4dUlDQWdJSFJvYVhNdVlXTjBhVzl1UzJWNWN5QTlJRnRkTzF4dUlDQWdJSFJvYVhNdVlXUmtRV04wYVc5dWN5aHdjbTl3Y3k1aFkzUnBiMjV6S1R0Y2JpQWdmVnh1WEc0Z0lHRmtaRUZqZEdsdmJuTW9ZV04wYVc5dWN5a2dlMXh1SUNBZ0lHWnZjaUFvWTI5dWMzUWdhMlY1SUdsdUlHRmpkR2x2Ym5NcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtRmpkR2x2Ymt0bGVYTXVhVzVrWlhoUFppaHJaWGtwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbUZqZEdsdmJrdGxlWE11Y0hWemFDaHJaWGtwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCMGFHbHpXMnRsZVYwZ1BTQmhZM1JwYjI1elcydGxlVjA3WEc1Y2JpQWdJQ0FnSUdOdmJuTjBJRzl1VlhCa1lYUmxJRDBnS0hZc0lHRmpkR2x2YmlrZ1BUNGdkR2hwY3k1amRYSnlaVzUwVzJ0bGVWMGdQU0JoWTNScGIyNHVaMlYwS0NrN1hHNWNiaUFnSUNBZ0lIUm9hWE5iYTJWNVhWeHVJQ0FnSUNBZ0lDQXVjMlYwVUhKdmNITW9lMXh1SUNBZ0lDQWdJQ0FnSUY5dmJsTjBiM0E2SUNncElEMCtJSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3kwdFhHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQWdJQzVoWkdSTWFYTjBaVzVsY2lodmJsVndaR0YwWlNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTWdQU0IwYUdsekxtRmpkR2x2Ymt0bGVYTXViR1Z1WjNSb08xeHVJQ0FnSUhSb2FYTXVZV04wYVc5dVMyVjVjeTVtYjNKRllXTm9LQ2hyWlhrcElEMCtJSFJvYVhOYmEyVjVYUzV6ZEdGeWRDZ3BLVHRjYmlBZ2ZWeHVYRzRnSUc5dVUzUnZjQ2dwSUh0Y2JpQWdJQ0IwYUdsekxtRmpkR2x2Ymt0bGVYTXVabTl5UldGamFDZ29hMlY1S1NBOVBpQjBhR2x6VzJ0bGVWMHVjM1J2Y0NncEtUdGNiaUFnZlZ4dVhHNGdJR2RsZEZabGJHOWphWFI1S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSFpsYkc5amFYUjVJRDBnZTMwN1hHNGdJQ0FnZEdocGN5NWhZM1JwYjI1TFpYbHpMbVp2Y2tWaFkyZ29LR3RsZVNrZ1BUNGdkbVZzYjJOcGRIbGJhMlY1WFNBOUlIUm9hWE5iYTJWNVhTNW5aWFJXWld4dlkybDBlU2dwS1R0Y2JpQWdJQ0J5WlhSMWNtNGdkbVZzYjJOcGRIazdYRzRnSUgxY2JseHVJQ0JwYzBGamRHbHZia052YlhCc1pYUmxLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQW9kR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6SUQwOVBTQXdLVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWVdOMGFXOXVjeXdnY0hKdmNITXBJRDArSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJEYjIxd2IzTnBkR1ZCWTNScGIyNG9lMXh1SUNBZ0lHRmpkR2x2Ym5Nc1hHNGdJQ0FnTGk0dWNISnZjSE5jYmlBZ2ZTazdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY29tcG9zaXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX29uTmV4dEZyYW1lID0gcmVxdWlyZSgnLi9vbi1uZXh0LWZyYW1lJyk7XG5cbnZhciBfb25OZXh0RnJhbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb25OZXh0RnJhbWUpO1xuXG52YXIgX2NyZWF0ZVJlbmRlclN0ZXAgPSByZXF1aXJlKCcuL2NyZWF0ZS1yZW5kZXItc3RlcCcpO1xuXG52YXIgX2NyZWF0ZVJlbmRlclN0ZXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlUmVuZGVyU3RlcCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcblxuLyoqXG4gKiBNYXhpbXVtIHBlcm1pdHRlZCBtcyBzaW5jZSBsYXN0IGZyYW1lXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgTUFYX0VMQVBTRUQgPSAyMDtcblxuLyoqXG4gKiBDdXJyZW50IGZyYW1lc3RhbXBcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBjdXJyZW50RnJhbWVzdGFtcCA9ICgwLCBfdXRpbHMuY3VycmVudFRpbWUpKCk7XG5cbnZhciBlbGFwc2VkID0gMDtcblxuLyoqXG4gKiBGYWN0b3IgdG8gbXVsdGlwbHkgYGVsYXBzZWRgIGJ5IC0gXG4gKiAwLjUgd291bGQgYmUgc2xvdyBtb3Rpb24sIDIgd291bGQgYmUgZmFzdFxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIGRpbGF0aW9uID0gMTtcblxuZnVuY3Rpb24gc3RhcnRSZW5kZXJMb29wKCkge1xuICBpZiAoIXdpbGxSZW5kZXJOZXh0RnJhbWUpIHtcbiAgICB3aWxsUmVuZGVyTmV4dEZyYW1lID0gdHJ1ZTtcbiAgICAoMCwgX29uTmV4dEZyYW1lMi5kZWZhdWx0KShwcm9jZXNzRnJhbWUpO1xuICB9XG59XG5cbnZhciBmcmFtZVN0YXJ0ID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lVXBkYXRlID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lUmVuZGVyID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lRW5kID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xuXG5mdW5jdGlvbiBwcm9jZXNzRnJhbWUoZnJhbWVzdGFtcCkge1xuICB3aWxsUmVuZGVyTmV4dEZyYW1lID0gZmFsc2U7XG4gIGVsYXBzZWQgPSBNYXRoLm1heChNYXRoLm1pbihmcmFtZXN0YW1wIC0gY3VycmVudEZyYW1lc3RhbXAsIE1BWF9FTEFQU0VEKSwgMSkgKiBkaWxhdGlvbjtcbiAgY3VycmVudEZyYW1lc3RhbXAgPSBmcmFtZXN0YW1wO1xuXG4gIGZyYW1lU3RhcnQucHJvY2VzcygpO1xuICBmcmFtZVVwZGF0ZS5wcm9jZXNzKCk7XG4gIGZyYW1lUmVuZGVyLnByb2Nlc3MoKTtcbiAgZnJhbWVFbmQucHJvY2VzcygpO1xufVxuXG52YXIgb25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LnNjaGVkdWxlO1xudmFyIG9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLm9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5zY2hlZHVsZTtcbnZhciBvbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuc2NoZWR1bGU7XG52YXIgb25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGZyYW1lRW5kLnNjaGVkdWxlO1xudmFyIGNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBmcmFtZUVuZC5jYW5jZWw7XG5cbnZhciB0aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGVsYXBzZWQ7XG59O1xudmFyIGN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY3VycmVudEZyYW1lc3RhbXA7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2xzaWQybHNiRkpsYm1SbGNrNWxlSFJHY21GdFpTSXNJazFCV0Y5RlRFRlFVMFZFSWl3aVkzVnljbVZ1ZEVaeVlXMWxjM1JoYlhBaUxDSmxiR0Z3YzJWa0lpd2laR2xzWVhScGIyNGlMQ0p6ZEdGeWRGSmxibVJsY2t4dmIzQWlMQ0p3Y205alpYTnpSbkpoYldVaUxDSm1jbUZ0WlZOMFlYSjBJaXdpWm5KaGJXVlZjR1JoZEdVaUxDSm1jbUZ0WlZKbGJtUmxjaUlzSW1aeVlXMWxSVzVrSWl3aVpuSmhiV1Z6ZEdGdGNDSXNJazFoZEdnaUxDSnRZWGdpTENKdGFXNGlMQ0p3Y205alpYTnpJaXdpYjI1R2NtRnRaVk4wWVhKMElpd2ljMk5vWldSMWJHVWlMQ0p2YmtaeVlXMWxWWEJrWVhSbElpd2liMjVHY21GdFpWSmxibVJsY2lJc0ltOXVSbkpoYldWRmJtUWlMQ0pqWVc1alpXeFBia1p5WVcxbFUzUmhjblFpTENKallXNWpaV3dpTENKallXNWpaV3hQYmtaeVlXMWxWWEJrWVhSbElpd2lZMkZ1WTJWc1QyNUdjbUZ0WlZKbGJtUmxjaUlzSW1OaGJtTmxiRTl1Um5KaGJXVkZibVFpTENKMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVaUxDSmpkWEp5Wlc1MFJuSmhiV1ZVYVcxbGMzUmhiWEFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUlVFc1NVRkJTVUVzYzBKQlFYTkNMRXRCUVRGQ096dEJRVVZCT3pzN08wRkJTVUVzU1VGQlRVTXNZMEZCWXl4RlFVRndRanM3UVVGRlFUczdPenRCUVVsQkxFbEJRVWxETEc5Q1FVRnZRaXg1UWtGQmVFSTdPMEZCUlVFc1NVRkJTVU1zVlVGQlZTeERRVUZrT3p0QlFVVkJPenM3T3p0QlFVdEJMRWxCUVVsRExGZEJRVmNzUTBGQlpqczdRVUZGUVN4VFFVRlRReXhsUVVGVUxFZEJRVEpDTzBGQlEzcENMRTFCUVVrc1EwRkJRMHdzYlVKQlFVd3NSVUZCTUVJN1FVRkRlRUpCTERCQ1FVRnpRaXhKUVVGMFFqdEJRVU5CTEN0Q1FVRlpUU3haUVVGYU8wRkJRMFE3UVVGRFJqczdRVUZGUkN4SlFVRk5ReXhoUVVGaExHZERRVUZwUWtZc1pVRkJha0lzUTBGQmJrSTdRVUZEUVN4SlFVRk5SeXhqUVVGakxHZERRVUZwUWtnc1pVRkJha0lzUTBGQmNFSTdRVUZEUVN4SlFVRk5TU3hqUVVGakxHZERRVUZwUWtvc1pVRkJha0lzUTBGQmNFSTdRVUZEUVN4SlFVRk5TeXhYUVVGWExHZERRVUZwUWt3c1pVRkJha0lzUTBGQmFrSTdPMEZCUlVFc1UwRkJVME1zV1VGQlZDeERRVUZ6UWtzc1ZVRkJkRUlzUlVGQmEwTTdRVUZEYUVOWUxIZENRVUZ6UWl4TFFVRjBRanRCUVVOQlJ5eFpRVUZWVXl4TFFVRkxReXhIUVVGTUxFTkJRVk5FTEV0QlFVdEZMRWRCUVV3c1EwRkJVMGdzWVVGQllWUXNhVUpCUVhSQ0xFVkJRWGxEUkN4WFFVRjZReXhEUVVGVUxFVkJRV2RGTEVOQlFXaEZMRWxCUVhGRlJ5eFJRVUV2UlR0QlFVTkJSaXh6UWtGQmIwSlRMRlZCUVhCQ096dEJRVVZCU2l4aFFVRlhVU3hQUVVGWU8wRkJRMEZRTEdOQlFWbFBMRTlCUVZvN1FVRkRRVTRzWTBGQldVMHNUMEZCV2p0QlFVTkJUQ3hYUVVGVFN5eFBRVUZVTzBGQlEwUTdPMEZCUlUwc1NVRkJUVU1zYzBOQlFXVlVMRmRCUVZkVkxGRkJRV2hETzBGQlEwRXNTVUZCVFVNc2QwTkJRV2RDVml4WlFVRlpVeXhSUVVGc1F6dEJRVU5CTEVsQlFVMUZMSGREUVVGblFsWXNXVUZCV1ZFc1VVRkJiRU03UVVGRFFTeEpRVUZOUnl4clEwRkJZVllzVTBGQlUwOHNVVUZCTlVJN1FVRkRRU3hKUVVGTlNTeHJSRUZCY1VKa0xGZEJRVmRsTEUxQlFYUkRPMEZCUTBFc1NVRkJUVU1zYjBSQlFYTkNaaXhaUVVGWll5eE5RVUY0UXp0QlFVTkJMRWxCUVUxRkxHOUVRVUZ6UW1Zc1dVRkJXV0VzVFVGQmVFTTdRVUZEUVN4SlFVRk5SeXc0UTBGQmJVSm1MRk5CUVZOWkxFMUJRV3hET3p0QlFVVkJMRWxCUVUxSkxHdEVRVUZ4UWp0QlFVRkJMRk5CUVUxMlFpeFBRVUZPTzBGQlFVRXNRMEZCTTBJN1FVRkRRU3hKUVVGTmQwSXNkMFJCUVhkQ08wRkJRVUVzVTBGQlRYcENMR2xDUVVGT08wRkJRVUVzUTBGQk9VSWlMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnYjI1T1pYaDBSbkpoYldVZ1puSnZiU0FuTGk5dmJpMXVaWGgwTFdaeVlXMWxKenRjYm1sdGNHOXlkQ0JqY21WaGRHVlNaVzVrWlhKVGRHVndJR1p5YjIwZ0p5NHZZM0psWVhSbExYSmxibVJsY2kxemRHVndKenRjYm1sdGNHOXlkQ0I3SUdOMWNuSmxiblJVYVcxbElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dWJHVjBJSGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VnUFNCbVlXeHpaVHRjYmx4dUx5b3FYRzRnS2lCTllYaHBiWFZ0SUhCbGNtMXBkSFJsWkNCdGN5QnphVzVqWlNCc1lYTjBJR1p5WVcxbFhHNGdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ292WEc1amIyNXpkQ0JOUVZoZlJVeEJVRk5GUkNBOUlESXdPMXh1WEc0dktpcGNiaUFxSUVOMWNuSmxiblFnWm5KaGJXVnpkR0Z0Y0Z4dUlDb2dRSFI1Y0dVZ2UwNTFiV0psY24xY2JpQXFMMXh1YkdWMElHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd0lEMGdZM1Z5Y21WdWRGUnBiV1VvS1R0Y2JseHViR1YwSUdWc1lYQnpaV1FnUFNBd08xeHVYRzR2S2lwY2JpQXFJRVpoWTNSdmNpQjBieUJ0ZFd4MGFYQnNlU0JnWld4aGNITmxaR0FnWW5rZ0xTQmNiaUFxSURBdU5TQjNiM1ZzWkNCaVpTQnpiRzkzSUcxdmRHbHZiaXdnTWlCM2IzVnNaQ0JpWlNCbVlYTjBYRzRnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNvdlhHNXNaWFFnWkdsc1lYUnBiMjRnUFNBeE8xeHVYRzVtZFc1amRHbHZiaUJ6ZEdGeWRGSmxibVJsY2t4dmIzQW9LU0I3WEc0Z0lHbG1JQ2doZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNrZ2UxeHVJQ0FnSUhkcGJHeFNaVzVrWlhKT1pYaDBSbkpoYldVZ1BTQjBjblZsTzF4dUlDQWdJRzl1VG1WNGRFWnlZVzFsS0hCeWIyTmxjM05HY21GdFpTazdYRzRnSUgxY2JuMWNibHh1WTI5dWMzUWdabkpoYldWVGRHRnlkQ0E5SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLVHRjYm1OdmJuTjBJR1p5WVcxbFZYQmtZWFJsSUQwZ1kzSmxZWFJsVW1WdVpHVnlVM1JsY0NoemRHRnlkRkpsYm1SbGNreHZiM0FwTzF4dVkyOXVjM1FnWm5KaGJXVlNaVzVrWlhJZ1BTQmpjbVZoZEdWU1pXNWtaWEpUZEdWd0tITjBZWEowVW1WdVpHVnlURzl2Y0NrN1hHNWpiMjV6ZENCbWNtRnRaVVZ1WkNBOUlHTnlaV0YwWlZKbGJtUmxjbE4wWlhBb2MzUmhjblJTWlc1a1pYSk1iMjl3S1R0Y2JseHVablZ1WTNScGIyNGdjSEp2WTJWemMwWnlZVzFsS0daeVlXMWxjM1JoYlhBcElIdGNiaUFnZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNBOUlHWmhiSE5sTzF4dUlDQmxiR0Z3YzJWa0lEMGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9abkpoYldWemRHRnRjQ0F0SUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TENCTlFWaGZSVXhCVUZORlJDa3NJREVwSUNvZ1pHbHNZWFJwYjI0N1hHNGdJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdJRDBnWm5KaGJXVnpkR0Z0Y0R0Y2JseHVJQ0JtY21GdFpWTjBZWEowTG5CeWIyTmxjM01vS1R0Y2JpQWdabkpoYldWVmNHUmhkR1V1Y0hKdlkyVnpjeWdwTzF4dUlDQm1jbUZ0WlZKbGJtUmxjaTV3Y205alpYTnpLQ2s3WEc0Z0lHWnlZVzFsUlc1a0xuQnliMk5sYzNNb0tUdGNibjFjYmx4dVpYaHdiM0owSUdOdmJuTjBJRzl1Um5KaGJXVlRkR0Z5ZENBOUlHWnlZVzFsVTNSaGNuUXVjMk5vWldSMWJHVTdYRzVsZUhCdmNuUWdZMjl1YzNRZ2IyNUdjbUZ0WlZWd1pHRjBaU0E5SUdaeVlXMWxWWEJrWVhSbExuTmphR1ZrZFd4bE8xeHVaWGh3YjNKMElHTnZibk4wSUc5dVJuSmhiV1ZTWlc1a1pYSWdQU0JtY21GdFpWSmxibVJsY2k1elkyaGxaSFZzWlR0Y2JtVjRjRzl5ZENCamIyNXpkQ0J2YmtaeVlXMWxSVzVrSUQwZ1puSmhiV1ZGYm1RdWMyTm9aV1IxYkdVN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWTjBZWEowSUQwZ1puSmhiV1ZUZEdGeWRDNWpZVzVqWld3N1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlNBOUlHWnlZVzFsVlhCa1lYUmxMbU5oYm1ObGJEdGNibVY0Y0c5eWRDQmpiMjV6ZENCallXNWpaV3hQYmtaeVlXMWxVbVZ1WkdWeUlEMGdabkpoYldWU1pXNWtaWEl1WTJGdVkyVnNPMXh1Wlhod2IzSjBJR052Ym5OMElHTmhibU5sYkU5dVJuSmhiV1ZGYm1RZ1BTQm1jbUZ0WlVWdVpDNWpZVzVqWld3N1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ1BTQW9LU0E5UGlCbGJHRndjMlZrTzF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUkdjbUZ0WlZScGJXVnpkR0Z0Y0NBOUlDZ3BJRDArSUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFjdGlvbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyk7XG5cbiAgICB0aGlzLnNldFByb3BzKHByb3BzKTtcblxuICAgIHRoaXMuY3VycmVudCA9IHByb3BzLmN1cnJlbnQgfHwgMDtcbiAgfVxuXG4gIEFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25TdGFydCA9IF9wcm9wcy5vblN0YXJ0LFxuICAgICAgICBfb25TdGFydCA9IF9wcm9wcy5fb25TdGFydCxcbiAgICAgICAgcGFzc2l2ZSA9IF9wcm9wcy5wYXNzaXZlO1xuXG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy51cGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RhcnQpIHRoaXMub25TdGFydCgpO1xuICAgIGlmIChvblN0YXJ0KSBvblN0YXJ0KHRoaXMpO1xuICAgIGlmIChfb25TdGFydCkgX29uU3RhcnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25TdG9wID0gX3Byb3BzMi5vblN0b3AsXG4gICAgICAgIF9vblN0b3AgPSBfcHJvcHMyLl9vblN0b3AsXG4gICAgICAgIHBhc3NpdmUgPSBfcHJvcHMyLnBhc3NpdmU7XG5cblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgKDAsIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVVwZGF0ZSkodGhpcy51cGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RvcCkgdGhpcy5vblN0b3AoKTtcbiAgICBpZiAob25TdG9wKSBvblN0b3AodGhpcyk7XG4gICAgaWYgKF9vblN0b3ApIF9vblN0b3AodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICBvbkNvbXBsZXRlID0gX3Byb3BzMy5vbkNvbXBsZXRlLFxuICAgICAgICBfb25Db21wbGV0ZSA9IF9wcm9wczMuX29uQ29tcGxldGU7XG5cblxuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKHRoaXMpO1xuICAgIGlmIChfb25Db21wbGV0ZSkgX29uQ29tcGxldGUodGhpcyk7XG5cbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCk7XG4gICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50O1xuXG4gICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICBvblVwZGF0ZSA9IF9wcm9wczQub25VcGRhdGUsXG4gICAgICAgIHBhc3NpdmUgPSBfcHJvcHM0LnBhc3NpdmU7XG5cblxuICAgIGlmICh0aGlzLm9uVXBkYXRlKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLm9uVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKG9uVXBkYXRlKSBvblVwZGF0ZSh0aGlzLmN1cnJlbnQsIHRoaXMpO1xuICAgIHRoaXMuZmlyZUxpc3RlbmVycygpO1xuXG4gICAgaWYgKCFwYXNzaXZlICYmIHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKHRoaXMudXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0FjdGlvbkNvbXBsZXRlICYmIHRoaXMuaXNBY3Rpb25Db21wbGV0ZSgpKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zZXRQcm9wcyA9IGZ1bmN0aW9uIHNldFByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCBwcm9wcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5zcGVlZFBlclNlY29uZCkodGhpcy5wcmV2IC0gdGhpcy5jdXJyZW50LCB0aGlzLmxhc3RVcGRhdGVkKTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IFtdO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gdGhpcy5udW1MaXN0ZW5lcnMgfHwgMDtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzKys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHZhciBsaXN0ZW5lckluZGV4ID0gdGhpcy5saXN0ZW5lcnMgPyB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA6IC0xO1xuICAgIGlmIChsaXN0ZW5lckluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMtLTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5maXJlTGlzdGVuZXJzID0gZnVuY3Rpb24gZmlyZUxpc3RlbmVycygpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuZ2V0KCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bUxpc3RlbmVyczsgaSsrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tpXShjdXJyZW50LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIEFjdGlvbjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSWtGamRHbHZiaUlzSW5CeWIzQnpJaXdpZFhCa1lYUmxJaXdpWW1sdVpDSXNJbU52Ym5OMGNuVmpkRzl5SWl3aVpHVm1ZWFZzZEZCeWIzQnpJaXdpYzJWMFVISnZjSE1pTENKamRYSnlaVzUwSWl3aWMzUmhjblFpTENKdmJsTjBZWEowSWl3aVgyOXVVM1JoY25RaUxDSndZWE56YVhabElpd2lhWE5CWTNScGRtVWlMQ0p6ZEc5d0lpd2liMjVUZEc5d0lpd2lYMjl1VTNSdmNDSXNJbU52YlhCc1pYUmxJaXdpYjI1RGIyMXdiR1YwWlNJc0lsOXZia052YlhCc1pYUmxJaXdpYkdGemRGVndaR0YwWldRaUxDSndjbVYySWl3aWIyNVZjR1JoZEdVaUxDSm1hWEpsVEdsemRHVnVaWEp6SWl3aWFYTkJZM1JwYjI1RGIyMXdiR1YwWlNJc0ltZGxkQ0lzSW1kbGRGWmxiRzlqYVhSNUlpd2lZV1JrVEdsemRHVnVaWElpTENKc2FYTjBaVzVsY2lJc0lteHBjM1JsYm1WeWN5SXNJbTUxYlV4cGMzUmxibVZ5Y3lJc0ltbHVaR1Y0VDJZaUxDSndkWE5vSWl3aWNtVnRiM1psVEdsemRHVnVaWElpTENKc2FYTjBaVzVsY2tsdVpHVjRJaXdpYzNCc2FXTmxJaXdpYVNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3TzBGQlEwRTdPenM3U1VGRlRVRXNUVHRCUVVOS0xHdENRVUZaUXl4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlEycENMRk5CUVV0RExFMUJRVXdzUjBGQll5eExRVUZMUVN4TlFVRk1MRU5CUVZsRExFbEJRVm9zUTBGQmFVSXNTVUZCYWtJc1EwRkJaRHM3UVVGRlFTeFRRVUZMUml4TFFVRk1MR2RDUVVOTExFdEJRVXRITEZkQlFVd3NRMEZCYVVKRExGbEJSSFJDT3p0QlFVbEJMRk5CUVV0RExGRkJRVXdzUTBGQlkwd3NTMEZCWkRzN1FVRkZRU3hUUVVGTFRTeFBRVUZNTEVkQlFXVk9MRTFCUVUxTkxFOUJRVTRzU1VGQmFVSXNRMEZCYUVNN1FVRkRSRHM3YlVKQlJVUkRMRXNzYjBKQlFWRTdRVUZCUVN4cFFrRkRhVU1zUzBGQlMxQXNTMEZFZEVNN1FVRkJRU3hSUVVORlVTeFBRVVJHTEZWQlEwVkJMRTlCUkVZN1FVRkJRU3hSUVVOWFF5eFJRVVJZTEZWQlExZEJMRkZCUkZnN1FVRkJRU3hSUVVOeFFrTXNUMEZFY2tJc1ZVRkRjVUpCTEU5QlJISkNPenM3UVVGSFRpeFJRVUZKTEVOQlFVTkJMRTlCUVV3c1JVRkJZenRCUVVOYUxGZEJRVXRETEZGQlFVd3NSMEZCWjBJc1NVRkJhRUk3UVVGRFFTeHZRMEZCWXl4TFFVRkxWaXhOUVVGdVFqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1MwRkJTMDhzVDBGQlZDeEZRVUZyUWl4TFFVRkxRU3hQUVVGTU8wRkJRMnhDTEZGQlFVbEJMRTlCUVVvc1JVRkJZVUVzVVVGQlVTeEpRVUZTTzBGQlEySXNVVUZCU1VNc1VVRkJTaXhGUVVGalFTeFRRVUZUTEVsQlFWUTdPMEZCUldRc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN2JVSkJSVVJITEVrc2JVSkJRVTg3UVVGQlFTeHJRa0ZEWjBNc1MwRkJTMW9zUzBGRWNrTTdRVUZCUVN4UlFVTkhZU3hOUVVSSUxGZEJRMGRCTEUxQlJFZzdRVUZCUVN4UlFVTlhReXhQUVVSWUxGZEJRMWRCTEU5QlJGZzdRVUZCUVN4UlFVTnZRa29zVDBGRWNFSXNWMEZEYjBKQkxFOUJSSEJDT3pzN1FVRkhUQ3hSUVVGSkxFTkJRVU5CTEU5QlFVd3NSVUZCWXp0QlFVTmFMRmRCUVV0RExGRkJRVXdzUjBGQlowSXNTMEZCYUVJN1FVRkRRU3d3UTBGQmIwSXNTMEZCUzFZc1RVRkJla0k3UVVGRFJEczdRVUZGUkN4UlFVRkpMRXRCUVV0WkxFMUJRVlFzUlVGQmFVSXNTMEZCUzBFc1RVRkJURHRCUVVOcVFpeFJRVUZKUVN4TlFVRktMRVZCUVZsQkxFOUJRVThzU1VGQlVEdEJRVU5hTEZGQlFVbERMRTlCUVVvc1JVRkJZVUVzVVVGQlVTeEpRVUZTT3p0QlFVVmlMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMjFDUVVWRVF5eFJMSFZDUVVGWE8wRkJRVUVzYTBKQlF6SkNMRXRCUVV0bUxFdEJSR2hETzBGQlFVRXNVVUZEUkdkQ0xGVkJSRU1zVjBGRFJFRXNWVUZFUXp0QlFVRkJMRkZCUTFkRExGZEJSRmdzVjBGRFYwRXNWMEZFV0RzN08wRkJSMVFzVVVGQlNTeExRVUZMUkN4VlFVRlVMRVZCUVhGQ0xFdEJRVXRCTEZWQlFVdzdRVUZEY2tJc1VVRkJTVUVzVlVGQlNpeEZRVUZuUWtFc1YwRkJWeXhKUVVGWU8wRkJRMmhDTEZGQlFVbERMRmRCUVVvc1JVRkJhVUpCTEZsQlFWa3NTVUZCV2pzN1FVRkZha0lzVTBGQlMwd3NTVUZCVERzN1FVRkZRU3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJGZ3NUU3h4UWtGQlV6dEJRVU5RTEZOQlFVdHBRaXhYUVVGTUxFZEJRVzFDTEc5RFFVRnVRanRCUVVOQkxGTkJRVXRETEVsQlFVd3NSMEZCV1N4TFFVRkxZaXhQUVVGcVFqczdRVUZHVHl4clFrRkpkVUlzUzBGQlMwNHNTMEZLTlVJN1FVRkJRU3hSUVVsRGIwSXNVVUZLUkN4WFFVbERRU3hSUVVwRU8wRkJRVUVzVVVGSlYxWXNUMEZLV0N4WFFVbFhRU3hQUVVwWU96czdRVUZOVUN4UlFVRkpMRXRCUVV0VkxGRkJRVlFzUlVGQmJVSTdRVUZEYWtJc1YwRkJTMlFzVDBGQlRDeEhRVUZsTEV0QlFVdGpMRkZCUVV3c1JVRkJaanRCUVVORU96dEJRVVZFTEZGQlFVbEJMRkZCUVVvc1JVRkJZMEVzVTBGQlV5eExRVUZMWkN4UFFVRmtMRVZCUVhWQ0xFbEJRWFpDTzBGQlEyUXNVMEZCUzJVc1lVRkJURHM3UVVGRlFTeFJRVUZKTEVOQlFVTllMRTlCUVVRc1NVRkJXU3hMUVVGTFF5eFJRVUZ5UWl4RlFVRXJRanRCUVVNM1FpeHZRMEZCWXl4TFFVRkxWaXhOUVVGdVFqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1MwRkJTM0ZDTEdkQ1FVRk1MRWxCUVhsQ0xFdEJRVXRCTEdkQ1FVRk1MRVZCUVRkQ0xFVkJRWE5FTzBGQlEzQkVMRmRCUVV0UUxGRkJRVXc3UVVGRFJEczdRVUZGUkN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSRllzVVN4eFFrRkJVMHdzU3l4RlFVRlBPMEZCUTJRc1UwRkJTMEVzUzBGQlRDeG5Ra0ZEU3l4TFFVRkxRU3hMUVVSV0xFVkJSVXRCTEV0QlJrdzdRVUZKUVN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSSFZDTEVjc2EwSkJRVTA3UVVGRFNpeFhRVUZQTEV0QlFVdHFRaXhQUVVGYU8wRkJRMFFzUnpzN2JVSkJSVVJyUWl4WExEQkNRVUZqTzBGQlExb3NWMEZCVHl3d1FrRkJaU3hMUVVGTFRDeEpRVUZNTEVkQlFWa3NTMEZCUzJJc1QwRkJhRU1zUlVGQmVVTXNTMEZCUzFrc1YwRkJPVU1zUTBGQlVEdEJRVU5FTEVjN08yMUNRVVZFVHl4WExIZENRVUZaUXl4UkxFVkJRVlU3UVVGRGNFSXNVMEZCUzBNc1UwRkJUQ3hIUVVGcFFpeExRVUZMUVN4VFFVRk1MRWxCUVd0Q0xFVkJRVzVETzBGQlEwRXNVMEZCUzBNc1dVRkJUQ3hIUVVGdlFpeExRVUZMUVN4WlFVRk1MRWxCUVhGQ0xFTkJRWHBETzBGQlEwRXNVVUZCU1N4TFFVRkxSQ3hUUVVGTUxFTkJRV1ZGTEU5QlFXWXNRMEZCZFVKSUxGRkJRWFpDTEUxQlFYRkRMRU5CUVVNc1EwRkJNVU1zUlVGQk5rTTdRVUZETTBNc1YwRkJTME1zVTBGQlRDeERRVUZsUnl4SlFVRm1MRU5CUVc5Q1NpeFJRVUZ3UWp0QlFVTkJMRmRCUVV0RkxGbEJRVXc3UVVGRFJEdEJRVU5FTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzIxQ1FVVkVSeXhqTERKQ1FVRmxUQ3hSTEVWQlFWVTdRVUZEZGtJc1VVRkJUVTBzWjBKQlFXbENMRXRCUVV0TUxGTkJRVTRzUjBGQmJVSXNTMEZCUzBFc1UwRkJUQ3hEUVVGbFJTeFBRVUZtTEVOQlFYVkNTQ3hSUVVGMlFpeERRVUZ1UWl4SFFVRnpSQ3hEUVVGRExFTkJRVGRGTzBGQlEwRXNVVUZCU1Uwc2EwSkJRV3RDTEVOQlFVTXNRMEZCZGtJc1JVRkJNRUk3UVVGRGVFSXNWMEZCUzBvc1dVRkJURHRCUVVOQkxGZEJRVXRFTEZOQlFVd3NRMEZCWlUwc1RVRkJaaXhEUVVGelFrUXNZVUZCZEVJc1JVRkJjVU1zUTBGQmNrTTdRVUZEUkR0QlFVTkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMjFDUVVWRVdDeGhMRFJDUVVGblFqdEJRVU5rTEZGQlFVMW1MRlZCUVZVc1MwRkJTMmxDTEVkQlFVd3NSVUZCYUVJN1FVRkRRU3hUUVVGTExFbEJRVWxYTEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNTeExRVUZMVGl4WlFVRjZRaXhGUVVGMVEwMHNSMEZCZGtNc1JVRkJORU03UVVGRE1VTXNWMEZCUzFBc1UwRkJUQ3hEUVVGbFR5eERRVUZtTEVWQlFXdENOVUlzVDBGQmJFSXNSVUZCTWtJc1NVRkJNMEk3UVVGRFJEdEJRVU5FTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3T3pzN08ydENRVWRaVUN4Tklpd2labWxzWlNJNkltbHVaR1Y0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnYjI1R2NtRnRaVlZ3WkdGMFpTd2dZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU3dnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsSUgwZ1puSnZiU0FuTGk0dlpuSmhiV1Z6ZVc1akp6dGNibWx0Y0c5eWRDQjdJSE53WldWa1VHVnlVMlZqYjI1a0lIMGdabkp2YlNBbkxpNHZhVzVqTDJOaGJHTW5PMXh1WEc1amJHRnpjeUJCWTNScGIyNGdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVkWEJrWVhSbElEMGdkR2hwY3k1MWNHUmhkR1V1WW1sdVpDaDBhR2x6S1R0Y2JseHVJQ0FnSUhSb2FYTXVjSEp2Y0hNZ1BTQjdYRzRnSUNBZ0lDQXVMaTUwYUdsekxtTnZibk4wY25WamRHOXlMbVJsWm1GMWJIUlFjbTl3YzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0IwYUdsekxuTmxkRkJ5YjNCektIQnliM0J6S1R0Y2JseHVJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRDQTlJSEJ5YjNCekxtTjFjbkpsYm5RZ2ZId2dNRHRjYmlBZ2ZWeHVYRzRnSUhOMFlYSjBLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2diMjVUZEdGeWRDd2dYMjl1VTNSaGNuUXNJSEJoYzNOcGRtVWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCcFppQW9JWEJoYzNOcGRtVXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWFYTkJZM1JwZG1VZ1BTQjBjblZsTzF4dUlDQWdJQ0FnYjI1R2NtRnRaVlZ3WkdGMFpTaDBhR2x6TG5Wd1pHRjBaU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXViMjVUZEdGeWRDa2dkR2hwY3k1dmJsTjBZWEowS0NrN1hHNGdJQ0FnYVdZZ0tHOXVVM1JoY25RcElHOXVVM1JoY25Rb2RHaHBjeWs3WEc0Z0lDQWdhV1lnS0Y5dmJsTjBZWEowS1NCZmIyNVRkR0Z5ZENoMGFHbHpLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2MzUnZjQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJRzl1VTNSdmNDd2dYMjl1VTNSdmNDd2djR0Z6YzJsMlpTQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JseHVJQ0FnSUdsbUlDZ2hjR0Z6YzJsMlpTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1cGMwRmpkR2wyWlNBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlNoMGFHbHpMblZ3WkdGMFpTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWIyNVRkRzl3S1NCMGFHbHpMbTl1VTNSdmNDZ3BPMXh1SUNBZ0lHbG1JQ2h2YmxOMGIzQXBJRzl1VTNSdmNDaDBhR2x6S1R0Y2JpQWdJQ0JwWmlBb1gyOXVVM1J2Y0NrZ1gyOXVVM1J2Y0NoMGFHbHpLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ1kyOXRjR3hsZEdVb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCdmJrTnZiWEJzWlhSbExDQmZiMjVEYjIxd2JHVjBaU0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtOXVRMjl0Y0d4bGRHVXBJSFJvYVhNdWIyNURiMjF3YkdWMFpTZ3BPMXh1SUNBZ0lHbG1JQ2h2YmtOdmJYQnNaWFJsS1NCdmJrTnZiWEJzWlhSbEtIUm9hWE1wTzF4dUlDQWdJR2xtSUNoZmIyNURiMjF3YkdWMFpTa2dYMjl1UTI5dGNHeGxkR1VvZEdocGN5azdYRzVjYmlBZ0lDQjBhR2x6TG5OMGIzQW9LVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2RYQmtZWFJsS0NrZ2UxeHVJQ0FnSUhSb2FYTXViR0Z6ZEZWd1pHRjBaV1FnUFNCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVb0tUdGNiaUFnSUNCMGFHbHpMbkJ5WlhZZ1BTQjBhR2x6TG1OMWNuSmxiblE3WEc1Y2JpQWdJQ0JqYjI1emRDQjdJRzl1VlhCa1lYUmxMQ0J3WVhOemFYWmxJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWIyNVZjR1JoZEdVcElIdGNiaUFnSUNBZ0lIUm9hWE11WTNWeWNtVnVkQ0E5SUhSb2FYTXViMjVWY0dSaGRHVW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYjI1VmNHUmhkR1VwSUc5dVZYQmtZWFJsS0hSb2FYTXVZM1Z5Y21WdWRDd2dkR2hwY3lrN1hHNGdJQ0FnZEdocGN5NW1hWEpsVEdsemRHVnVaWEp6S0NrN1hHNWNiaUFnSUNCcFppQW9JWEJoYzNOcGRtVWdKaVlnZEdocGN5NXBjMEZqZEdsMlpTa2dlMXh1SUNBZ0lDQWdiMjVHY21GdFpWVndaR0YwWlNoMGFHbHpMblZ3WkdGMFpTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWFYTkJZM1JwYjI1RGIyMXdiR1YwWlNBbUppQjBhR2x6TG1selFXTjBhVzl1UTI5dGNHeGxkR1VvS1NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVqYjIxd2JHVjBaU2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2MyVjBVSEp2Y0hNb2NISnZjSE1wSUh0Y2JpQWdJQ0IwYUdsekxuQnliM0J6SUQwZ2UxeHVJQ0FnSUNBZ0xpNHVkR2hwY3k1d2NtOXdjeXhjYmlBZ0lDQWdJQzR1TG5CeWIzQnpYRzRnSUNBZ2ZUdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJR2RsZENncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWpkWEp5Wlc1ME8xeHVJQ0I5WEc1Y2JpQWdaMlYwVm1Wc2IyTnBkSGtvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSE53WldWa1VHVnlVMlZqYjI1a0tIUm9hWE11Y0hKbGRpQXRJSFJvYVhNdVkzVnljbVZ1ZEN3Z2RHaHBjeTVzWVhOMFZYQmtZWFJsWkNrN1hHNGdJSDFjYmx4dUlDQmhaR1JNYVhOMFpXNWxjaWhzYVhOMFpXNWxjaWtnZTF4dUlDQWdJSFJvYVhNdWJHbHpkR1Z1WlhKeklEMGdkR2hwY3k1c2FYTjBaVzVsY25NZ2ZId2dXMTA3WEc0Z0lDQWdkR2hwY3k1dWRXMU1hWE4wWlc1bGNuTWdQU0IwYUdsekxtNTFiVXhwYzNSbGJtVnljeUI4ZkNBd08xeHVJQ0FnSUdsbUlDaDBhR2x6TG14cGMzUmxibVZ5Y3k1cGJtUmxlRTltS0d4cGMzUmxibVZ5S1NBOVBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViR2x6ZEdWdVpYSnpMbkIxYzJnb2JHbHpkR1Z1WlhJcE8xeHVJQ0FnSUNBZ2RHaHBjeTV1ZFcxTWFYTjBaVzVsY25Nckt6dGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnlaVzF2ZG1WTWFYTjBaVzVsY2loc2FYTjBaVzVsY2lrZ2UxeHVJQ0FnSUdOdmJuTjBJR3hwYzNSbGJtVnlTVzVrWlhnZ1BTQW9kR2hwY3k1c2FYTjBaVzVsY25NcElEOGdkR2hwY3k1c2FYTjBaVzVsY25NdWFXNWtaWGhQWmloc2FYTjBaVzVsY2lrZ09pQXRNVHRjYmlBZ0lDQnBaaUFvYkdsemRHVnVaWEpKYm1SbGVDQWhQVDBnTFRFcElIdGNiaUFnSUNBZ0lIUm9hWE11Ym5WdFRHbHpkR1Z1WlhKekxTMDdYRzRnSUNBZ0lDQjBhR2x6TG14cGMzUmxibVZ5Y3k1emNHeHBZMlVvYkdsemRHVnVaWEpKYm1SbGVDd2dNU2s3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnWm1seVpVeHBjM1JsYm1WeWN5Z3BJSHRjYmlBZ0lDQmpiMjV6ZENCamRYSnlaVzUwSUQwZ2RHaHBjeTVuWlhRb0tUdGNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11Ym5WdFRHbHpkR1Z1WlhKek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViR2x6ZEdWdVpYSnpXMmxkS0dOMWNuSmxiblFzSUhSb2FYTXBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkJZM1JwYjI0N1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZW5kZXJlcik7XG5cbiAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzLCBwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge307XG4gICAgdGhpcy5jaGFuZ2VkVmFsdWVzID0gW107XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgc3RhdGUuXG4gICAqIElmIGBrZXlgIGlzIG5vdCBkZWZpbmVkLCByZXR1cm4gZW50aXJlIGNhY2hlZCBzdGF0ZS5cbiAgICogSWYgYGtleWAgaXMgZGVmaW5lZCwgcmV0dXJuIGNhY2hlZCB2YWx1ZSBpZiBwcmVzZW50LlxuICAgKiBJZiBga2V5YCBpcyBkZWZpbmVkIGFuZCBjYWNoZWQgdmFsdWUgaXMgbm90IHByZXNlbnQsIHJlYWQgYW5kIHJldHVybi5cbiAgICogQHBhcmFtICB7c3RyaW5nfSAob3B0aW9uYWwpIGtleSBvZiB2YWx1ZVxuICAgKiBAcmV0dXJuIHt2YWx1ZX1cbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZChrZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlYWQgdmFsdWUgYWNjb3JkaW5nIHRvIGBvblJlYWRgXG4gICAqIEBwYXJhbSAge3N0cmluZ30gTmFtZSBvZiBwcm9wZXJ0eSB0byByZWFkXG4gICAqIEByZXR1cm4ge1t0eXBlXX1cbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uIHJlYWQoa2V5KSB7XG4gICAgaWYgKHRoaXMub25SZWFkKSB7XG4gICAgICByZXR1cm4gdGhpcy5vblJlYWQoa2V5KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBgc3RhdGVgIHdpdGggbmV3IHZhbHVlcyBhbmQgc2NoZWR1bGUgYHJlbmRlcmAuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXNcbiAgICogQHBhcmFtIHt2YWx1ZX0gdmFsdWUgdG9zZXRcbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBhcmdzWzBdO1xuICAgICAgLy8gU2V0IG11bHRpcGxlIHZhbHVlc1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCB2YWx1ZXNba2V5XSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfa2V5MiA9IGFyZ3NbMF0sXG4gICAgICAgICAgdmFsdWUgPSBhcmdzWzFdO1xuXG4gICAgICB0aGlzLnNldFZhbHVlKF9rZXkyLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCkge1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVJlbmRlcikodGhpcy5yZW5kZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uIHNldFZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZVtrZXldICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5wdXNoKGtleSk7XG4gICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpcmVzIGBvblJlbmRlcmAgaWYgdmFsdWVzIGhhdmUgY2hhbmdlZCBvciBgZm9yY2VSZW5kZXJgXG4gICAqIGlzIHNldCB0byB0cnVlLlxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGZvcmNlUmVuZGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgIGlmICgoZm9yY2VSZW5kZXIgfHwgdGhpcy5oYXNDaGFuZ2VkKSAmJiB0aGlzLm9uUmVuZGVyKSB7XG4gICAgICB0aGlzLm9uUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VkVmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gUmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlcmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2xzaVVtVnVaR1Z5WlhJaUxDSndjbTl3Y3lJc0luSmxibVJsY2lJc0ltSnBibVFpTENKamIyNXpkSEoxWTNSdmNpSXNJbVJsWm1GMWJIUlFjbTl3Y3lJc0luTjBZWFJsSWl3aVkyaGhibWRsWkZaaGJIVmxjeUlzSW1kbGRDSXNJbXRsZVNJc0luVnVaR1ZtYVc1bFpDSXNJbkpsWVdRaUxDSnZibEpsWVdRaUxDSnpaWFFpTENKaGNtZHpJaXdpZG1Gc2RXVnpJaXdpYzJWMFZtRnNkV1VpTENKMllXeDFaU0lzSW1oaGMwTm9ZVzVuWldRaUxDSndkWE5vSWl3aVptOXlZMlZTWlc1a1pYSWlMQ0p2YmxKbGJtUmxjaUlzSW14bGJtZDBhQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPenM3U1VGRlRVRXNVVHRCUVVOS0xHOUNRVUZaUXl4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlEycENMRk5CUVV0RExFMUJRVXdzUjBGQll5eExRVUZMUVN4TlFVRk1MRU5CUVZsRExFbEJRVm9zUTBGQmFVSXNTVUZCYWtJc1EwRkJaRHM3UVVGRlFTeFRRVUZMUml4TFFVRk1MR2RDUVVOTExFdEJRVXRITEZkQlFVd3NRMEZCYVVKRExGbEJSSFJDTEVWQlJVdEtMRXRCUmt3N08wRkJTMEVzVTBGQlMwc3NTMEZCVEN4SFFVRmhMRVZCUVdJN1FVRkRRU3hUUVVGTFF5eGhRVUZNTEVkQlFYRkNMRVZCUVhKQ08wRkJRMFE3TzBGQlJVUTdPenM3T3pzN096czdjVUpCVVVGRExFY3NaMEpCUVVsRExFY3NSVUZCU3p0QlFVTlFMRkZCUVVsQkxFZEJRVW9zUlVGQlV6dEJRVU5RTEZWQlFVa3NTMEZCUzBnc1MwRkJUQ3hEUVVGWFJ5eEhRVUZZTEUxQlFXOUNReXhUUVVGNFFpeEZRVUZ0UXp0QlFVTnFReXhsUVVGUExFdEJRVXRLTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hEUVVGUU8wRkJRMFFzVDBGR1JDeE5RVVZQTzBGQlEwd3NaVUZCVHl4TFFVRkxSU3hKUVVGTUxFTkJRVlZHTEVkQlFWWXNRMEZCVUR0QlFVTkVPMEZCUTBZc1MwRk9SQ3hOUVUxUE8wRkJRMHdzWVVGQlR5eExRVUZMU0N4TFFVRmFPMEZCUTBRN1FVRkRSaXhIT3p0QlFVVkVPenM3T3pzN08zRkNRVXRCU3l4SkxHbENRVUZMUml4SExFVkJRVXM3UVVGRFVpeFJRVUZKTEV0QlFVdEhMRTFCUVZRc1JVRkJhVUk3UVVGRFppeGhRVUZQTEV0QlFVdEJMRTFCUVV3c1EwRkJXVWdzUjBGQldpeERRVUZRTzBGQlEwUTdRVUZEUml4SE96dEJRVVZFT3pzN096czdPM0ZDUVV0QlNTeEhMR3RDUVVGaE8wRkJRVUVzYzBOQlFVNURMRWxCUVUwN1FVRkJUa0VzVlVGQlRUdEJRVUZCT3p0QlFVTllMRkZCUVVrc1QwRkJUMEVzUzBGQlN5eERRVUZNTEVOQlFWQXNTMEZCYlVJc1YwRkJka0lzUlVGQmIwTTdRVUZCUVN4VlFVTXhRa01zVFVGRU1FSXNSMEZEWmtRc1NVRkVaVHRCUVVWc1F6czdRVUZEUVN4WFFVRkxMRWxCUVUxTUxFZEJRVmdzU1VGQmEwSk5MRTFCUVd4Q0xFVkJRVEJDTzBGQlEzaENMR0ZCUVV0RExGRkJRVXdzUTBGQlkxQXNSMEZCWkN4RlFVRnRRazBzVDBGQlQwNHNSMEZCVUN4RFFVRnVRanRCUVVORU8wRkJRMFlzUzBGT1JDeE5RVTFQTzBGQlFVRXNWVUZEUjBFc1MwRkVTQ3hIUVVOclFrc3NTVUZFYkVJN1FVRkJRU3hWUVVOUlJ5eExRVVJTTEVkQlEydENTQ3hKUVVSc1FqczdRVUZGVEN4WFFVRkxSU3hSUVVGTUxFTkJRV05RTEV0QlFXUXNSVUZCYlVKUkxFdEJRVzVDTzBGQlEwUTdPMEZCUlVRc1VVRkJTU3hMUVVGTFF5eFZRVUZVTEVWQlFYRkNPMEZCUTI1Q0xHOURRVUZqTEV0QlFVdG9RaXhOUVVGdVFqdEJRVU5FT3p0QlFVVkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPM0ZDUVVWRVl5eFJMSEZDUVVGVFVDeEhMRVZCUVV0UkxFc3NSVUZCVHp0QlFVTnVRaXhSUVVGSkxFdEJRVXRZTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hOUVVGdlFsRXNTMEZCZUVJc1JVRkJLMEk3UVVGRE4wSXNWMEZCUzBNc1ZVRkJUQ3hIUVVGclFpeEpRVUZzUWp0QlFVTkJMRmRCUVV0WUxHRkJRVXdzUTBGQmJVSlpMRWxCUVc1Q0xFTkJRWGRDVml4SFFVRjRRanRCUVVOQkxGZEJRVXRJTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hKUVVGclFsRXNTMEZCYkVJN1FVRkRSRHRCUVVOR0xFYzdPMEZCUlVRN096czdPenM3Y1VKQlMwRm1MRTBzY1VKQlFUUkNPMEZCUVVFc1VVRkJja0pyUWl4WFFVRnhRaXgxUlVGQlVDeExRVUZQT3p0QlFVTXhRaXhSUVVGSkxFTkJRVU5CTEdWQlFXVXNTMEZCUzBZc1ZVRkJja0lzUzBGQmIwTXNTMEZCUzBjc1VVRkJOME1zUlVGQmRVUTdRVUZEY2tRc1YwRkJTMEVzVVVGQlREdEJRVU5FT3p0QlFVVkVMRk5CUVV0a0xHRkJRVXdzUTBGQmJVSmxMRTFCUVc1Q0xFZEJRVFJDTEVOQlFUVkNPMEZCUTBFc1UwRkJTMG9zVlVGQlRDeEhRVUZyUWl4TFFVRnNRanM3UVVGRlFTeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96czdPenRyUWtGSFdXeENMRkVpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnZia1p5WVcxbFVtVnVaR1Z5SUgwZ1puSnZiU0FuTGk0dlpuSmhiV1Z6ZVc1akp6dGNibHh1WTJ4aGMzTWdVbVZ1WkdWeVpYSWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVjbVZ1WkdWeUlEMGdkR2hwY3k1eVpXNWtaWEl1WW1sdVpDaDBhR2x6S1R0Y2JseHVJQ0FnSUhSb2FYTXVjSEp2Y0hNZ1BTQjdYRzRnSUNBZ0lDQXVMaTUwYUdsekxtTnZibk4wY25WamRHOXlMbVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUM0dUxuQnliM0J6WEc0Z0lDQWdmVHRjYmx4dUlDQWdJSFJvYVhNdWMzUmhkR1VnUFNCN2ZUdGNiaUFnSUNCMGFHbHpMbU5vWVc1blpXUldZV3gxWlhNZ1BTQmJYVHRjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCSFpYUWdZM1Z5Y21WdWRDQnpkR0YwWlM1Y2JpQWdJQ29nU1dZZ1lHdGxlV0FnYVhNZ2JtOTBJR1JsWm1sdVpXUXNJSEpsZEhWeWJpQmxiblJwY21VZ1kyRmphR1ZrSUhOMFlYUmxMbHh1SUNBZ0tpQkpaaUJnYTJWNVlDQnBjeUJrWldacGJtVmtMQ0J5WlhSMWNtNGdZMkZqYUdWa0lIWmhiSFZsSUdsbUlIQnlaWE5sYm5RdVhHNGdJQ0FxSUVsbUlHQnJaWGxnSUdseklHUmxabWx1WldRZ1lXNWtJR05oWTJobFpDQjJZV3gxWlNCcGN5QnViM1FnY0hKbGMyVnVkQ3dnY21WaFpDQmhibVFnY21WMGRYSnVMbHh1SUNBZ0tpQkFjR0Z5WVcwZ0lIdHpkSEpwYm1kOUlDaHZjSFJwYjI1aGJDa2dhMlY1SUc5bUlIWmhiSFZsWEc0Z0lDQXFJRUJ5WlhSMWNtNGdlM1poYkhWbGZWeHVJQ0FnS2k5Y2JpQWdaMlYwS0d0bGVTa2dlMXh1SUNBZ0lHbG1JQ2hyWlhrcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxuTjBZWFJsVzJ0bGVWMGdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV6ZEdGMFpWdHJaWGxkTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWNtVmhaQ2hyWlhrcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1emRHRjBaVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nVW1WaFpDQjJZV3gxWlNCaFkyTnZjbVJwYm1jZ2RHOGdZRzl1VW1WaFpHQmNiaUFnSUNvZ1FIQmhjbUZ0SUNCN2MzUnlhVzVuZlNCT1lXMWxJRzltSUhCeWIzQmxjblI1SUhSdklISmxZV1JjYmlBZ0lDb2dRSEpsZEhWeWJpQjdXM1I1Y0dWZGZWeHVJQ0FnS2k5Y2JpQWdjbVZoWkNoclpYa3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXZibEpsWVdRcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTl1VW1WaFpDaHJaWGtwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCVmNHUmhkR1VnWUhOMFlYUmxZQ0IzYVhSb0lHNWxkeUIyWVd4MVpYTWdZVzVrSUhOamFHVmtkV3hsSUdCeVpXNWtaWEpnTGx4dUlDQWdLaUJBY0dGeVlXMGdlMjlpYW1WamRIMGdkbUZzZFdWelhHNGdJQ0FxSUVCd1lYSmhiU0I3ZG1Gc2RXVjlJSFpoYkhWbElIUnZjMlYwWEc0Z0lDQXFMMXh1SUNCelpYUW9MaTR1WVhKbmN5a2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdZWEpuYzFzeFhTQTlQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBZ0lHTnZibk4wSUZzZ2RtRnNkV1Z6SUYwZ1BTQmhjbWR6TzF4dUlDQWdJQ0FnTHk4Z1UyVjBJRzExYkhScGNHeGxJSFpoYkhWbGMxeHVJQ0FnSUNBZ1ptOXlJQ2hqYjI1emRDQnJaWGtnYVc0Z2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJWMFZtRnNkV1VvYTJWNUxDQjJZV3gxWlhOYmEyVjVYU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHTnZibk4wSUZzZ2EyVjVMQ0IyWVd4MVpTQmRJRDBnWVhKbmN6dGNiaUFnSUNBZ0lIUm9hWE11YzJWMFZtRnNkV1VvYTJWNUxDQjJZV3gxWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YUdGelEyaGhibWRsWkNrZ2UxeHVJQ0FnSUNBZ2IyNUdjbUZ0WlZKbGJtUmxjaWgwYUdsekxuSmxibVJsY2lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnpaWFJXWVd4MVpTaHJaWGtzSUhaaGJIVmxLU0I3WEc0Z0lDQWdhV1lnS0hSb2FYTXVjM1JoZEdWYmEyVjVYU0FoUFQwZ2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQjBhR2x6TG1Ob1lXNW5aV1JXWVd4MVpYTXVjSFZ6YUNoclpYa3BPMXh1SUNBZ0lDQWdkR2hwY3k1emRHRjBaVnRyWlhsZElEMGdkbUZzZFdVN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFWnBjbVZ6SUdCdmJsSmxibVJsY21BZ2FXWWdkbUZzZFdWeklHaGhkbVVnWTJoaGJtZGxaQ0J2Y2lCZ1ptOXlZMlZTWlc1a1pYSmdYRzRnSUNBcUlHbHpJSE5sZENCMGJ5QjBjblZsTGx4dUlDQWdLaUJBY21WMGRYSnVJSHQwYUdsemZWeHVJQ0FnS2k5Y2JpQWdjbVZ1WkdWeUtHWnZjbU5sVW1WdVpHVnlJRDBnWm1Gc2MyVXBJSHRjYmlBZ0lDQnBaaUFvS0dadmNtTmxVbVZ1WkdWeUlIeDhJSFJvYVhNdWFHRnpRMmhoYm1kbFpDa2dKaVlnZEdocGN5NXZibEpsYm1SbGNpa2dlMXh1SUNBZ0lDQWdkR2hwY3k1dmJsSmxibVJsY2lncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhSb2FYTXVZMmhoYm1kbFpGWmhiSFZsY3k1c1pXNW5kR2dnUFNBd08xeHVJQ0FnSUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ0E5SUdaaGJITmxPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVW1WdVpHVnlaWEk3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IENTU1JlbmRlcmVyKF9leHRlbmRzKHtcbiAgICBlbGVtZW50OiBlbGVtZW50XG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX3JlbmRlciA9IHJlcXVpcmUoJy4vcmVuZGVyJyk7XG5cbnZhciBfcmVuZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbmRlcik7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDU1NSZW5kZXJlciA9IGZ1bmN0aW9uIChfUmVuZGVyZXIpIHtcbiAgX2luaGVyaXRzKENTU1JlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIENTU1JlbmRlcmVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDU1NSZW5kZXJlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ1NTUmVuZGVyZXIucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGVsZW1lbnQgPSBfcHJvcHMuZWxlbWVudCxcbiAgICAgICAgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24gPSBfcHJvcHMuZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb247XG5cbiAgICAoMCwgX3JlbmRlcjIuZGVmYXVsdCkoZWxlbWVudCwgdGhpcy5zdGF0ZSwgdGhpcy5jaGFuZ2VkVmFsdWVzLCBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbik7XG4gIH07XG5cbiAgQ1NTUmVuZGVyZXIucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZChrZXkpIHtcbiAgICB2YXIgdmFsdWVUeXBlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRba2V5XTtcblxuICAgIGlmICghX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgICB2YXIgZG9tVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVsoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShrZXkpXSB8fCAwO1xuICAgICAgcmV0dXJuIHZhbHVlVHlwZSAmJiB2YWx1ZVR5cGUucGFyc2UgPyB2YWx1ZVR5cGUucGFyc2UoZG9tVmFsdWUpIDogZG9tVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZVR5cGUuZGVmYXVsdCB8fCAwO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ1NTUmVuZGVyZXI7XG59KF8yLmRlZmF1bHQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJbVZzWlcxbGJuUWlMQ0p3Y205d2N5SXNJa05UVTFKbGJtUmxjbVZ5SWl3aWIyNVNaVzVrWlhJaUxDSmxibUZpYkdWSVlYSmtkMkZ5WlVGalkyVnNaWEpoZEdsdmJpSXNJbk4wWVhSbElpd2lZMmhoYm1kbFpGWmhiSFZsY3lJc0ltOXVVbVZoWkNJc0ltdGxlU0lzSW5aaGJIVmxWSGx3WlNJc0ltUnZiVlpoYkhWbElpd2lkMmx1Wkc5M0lpd2laMlYwUTI5dGNIVjBaV1JUZEhsc1pTSXNJbkJoY25ObElpd2laR1ZtWVhWc2RDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMnRDUVhsQ1pTeFZRVUZWUVN4UFFVRldMRVZCUVcxQ1F5eExRVUZ1UWl4RlFVRXdRanRCUVVOMlF5eFRRVUZQTEVsQlFVbERMRmRCUVVvN1FVRkRURVk3UVVGRVN5eExRVVZHUXl4TFFVWkZMRVZCUVZBN1FVRkpSQ3hET3p0QlFUbENSRHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3T3pzN096czdTVUZGVFVNc1Z6czdPenM3T3pzN08zZENRVU5LUXl4UkxIVkNRVUZYTzBGQlFVRXNhVUpCUTNWRExFdEJRVXRHTEV0QlJEVkRPMEZCUVVFc1VVRkRSRVFzVDBGRVF5eFZRVU5FUVN4UFFVUkRPMEZCUVVFc1VVRkRVVWtzTUVKQlJGSXNWVUZEVVVFc01FSkJSRkk3TzBGQlJWUXNNRUpCUVZWS0xFOUJRVllzUlVGQmJVSXNTMEZCUzBzc1MwRkJlRUlzUlVGQkswSXNTMEZCUzBNc1lVRkJjRU1zUlVGQmJVUkdMREJDUVVGdVJEdEJRVU5FTEVjN08zZENRVVZFUnl4TkxHMUNRVUZQUXl4SExFVkJRVXM3UVVGRFZpeFJRVUZOUXl4WlFVRlpMSEZDUVVGalJDeEhRVUZrTEVOQlFXeENPenRCUVVWQkxGRkJRVWtzUTBGQlF5eDVRa0ZCWlVFc1IwRkJaaXhEUVVGTUxFVkJRVEJDTzBGQlFVRXNWVUZEYUVKU0xFOUJSR2RDTEVkQlEwb3NTMEZCUzBNc1MwRkVSQ3hEUVVOb1FrUXNUMEZFWjBJN08wRkJSWGhDTEZWQlFVMVZMRmRCUVZkRExFOUJRVTlETEdkQ1FVRlFMRU5CUVhkQ1dpeFBRVUY0UWl4RlFVRnBReXhKUVVGcVF5eEZRVUYxUXl4M1FrRkJVMUVzUjBGQlZDeERRVUYyUXl4TFFVRjVSQ3hEUVVFeFJUdEJRVU5CTEdGQlFWRkRMR0ZCUVdGQkxGVkJRVlZKTEV0QlFYaENMRWRCUVdsRFNpeFZRVUZWU1N4TFFVRldMRU5CUVdkQ1NDeFJRVUZvUWl4RFFVRnFReXhIUVVFMlJFRXNVVUZCY0VVN1FVRkRSQ3hMUVVwRUxFMUJTVTg3UVVGRFRDeGhRVUZQUkN4VlFVRlZTeXhQUVVGV0xFbEJRWEZDTEVOQlFUVkNPMEZCUTBRN1FVRkRSaXhISWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGSmxibVJsY21WeUlHWnliMjBnSnk0dUx5YzdYRzVwYlhCdmNuUWdjbVZ1WkdWeVExTlRJR1p5YjIwZ0p5NHZjbVZ1WkdWeUp6dGNibWx0Y0c5eWRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lCbWNtOXRJQ2N1TDNSeVlXNXpabTl5YlMxd2NtOXdjeWM3WEc1cGJYQnZjblFnZG1Gc2RXVlVlWEJsYzAxaGNDQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpKenRjYm1sdGNHOXlkQ0J3Y21WbWFYaGxjaUJtY205dElDY3VMM0J5WldacGVHVnlKenRjYmx4dVkyeGhjM01nUTFOVFVtVnVaR1Z5WlhJZ1pYaDBaVzVrY3lCU1pXNWtaWEpsY2lCN1hHNGdJRzl1VW1WdVpHVnlLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2daV3hsYldWdWRDd2daVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnY21WdVpHVnlRMU5US0dWc1pXMWxiblFzSUhSb2FYTXVjM1JoZEdVc0lIUm9hWE11WTJoaGJtZGxaRlpoYkhWbGN5d2daVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNHBPMXh1SUNCOVhHNWNiaUFnYjI1U1pXRmtLR3RsZVNrZ2UxeHVJQ0FnSUdOdmJuTjBJSFpoYkhWbFZIbHdaU0E5SUhaaGJIVmxWSGx3WlhOTllYQmJhMlY1WFR0Y2JseHVJQ0FnSUdsbUlDZ2hkSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnWTI5dWMzUWdleUJsYkdWdFpXNTBJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUNBZ1kyOXVjM1FnWkc5dFZtRnNkV1VnUFNCM2FXNWtiM2N1WjJWMFEyOXRjSFYwWldSVGRIbHNaU2hsYkdWdFpXNTBMQ0J1ZFd4c0tWdHdjbVZtYVhobGNpaHJaWGtwWFNCOGZDQXdPMXh1SUNBZ0lDQWdjbVYwZFhKdUlDaDJZV3gxWlZSNWNHVWdKaVlnZG1Gc2RXVlVlWEJsTG5CaGNuTmxLU0EvSUhaaGJIVmxWSGx3WlM1d1lYSnpaU2hrYjIxV1lXeDFaU2tnT2lCa2IyMVdZV3gxWlR0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsVkhsd1pTNWtaV1poZFd4MElIeDhJREE3WEc0Z0lDQWdmVnh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJQ2hsYkdWdFpXNTBMQ0J3Y205d2N5a2dlMXh1SUNCeVpYUjFjbTRnYm1WM0lFTlRVMUpsYm1SbGNtVnlLSHRjYmlBZ0lDQmxiR1Z0Wlc1MExGeHVJQ0FnSUM0dUxuQnliM0J6WEc0Z0lIMHBPMXh1ZlZ4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRDb2xvclZhbHVlcyA9IGV4cG9ydHMuZmluZFZhbHVlQW5kVW5pdCA9IGV4cG9ydHMuY3JlYXRlVW5pdFR5cGUgPSBleHBvcnRzLmlzRmlyc3RDaGFycyA9IGV4cG9ydHMuY29udGFpbnMgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNldERPTUF0dHJzID0gZXhwb3J0cy5pc1N0cmluZyA9IGV4cG9ydHMuaXNPYmogPSBleHBvcnRzLmlzTnVtID0gZXhwb3J0cy5pc0Z1bmMgPSBleHBvcnRzLmlzQXJyYXkgPSBleHBvcnRzLmhhc1Byb3BlcnR5ID0gZXhwb3J0cy5jdXJyZW50VGltZSA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSB1bmRlZmluZWQ7XG5leHBvcnRzLnNwbGl0Q29sb3JWYWx1ZXMgPSBzcGxpdENvbG9yVmFsdWVzO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbnZhciBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbnZhciBIQVNfUEVSRk9STUFOQ0VfTk9XID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3c7XG5cbi8qXG4gIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xufTtcblxuLypcbiAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY2FtZWxUb0Rhc2ggPSBleHBvcnRzLmNhbWVsVG9EYXNoID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuLypcbiAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgXG4gIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG52YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLmN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xufSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgQ2hlY2sgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eSBhbmQgaXQgaXNuJ3QgdW5kZWZpbmVkXG5cbiAgQHBhcmFtIFtvYmplY3RdXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtib29sZWFuXVxuKi9cbnZhciBoYXNQcm9wZXJ0eSA9IGV4cG9ydHMuaGFzUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpIHtcbiAgcmV0dXJuIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbnZhciBpc051bSA9IGV4cG9ydHMuaXNOdW0gPSBmdW5jdGlvbiAobnVtKSB7XG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xudmFyIGlzT2JqID0gZXhwb3J0cy5pc09iaiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbnZhciBpc1N0cmluZyA9IGV4cG9ydHMuaXNTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbnZhciBzZXRET01BdHRycyA9IGV4cG9ydHMuc2V0RE9NQXR0cnMgPSBmdW5jdGlvbiAoZWxlbWVudCwgYXR0cnMpIHtcbiAgZm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfVxuICB9XG59O1xuLypcbiAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRDb21tYURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRDb21tYURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBhbnkgYXJndW1lbnQgZm9yIGB0ZXJtYFxuICogYGNvbnRhaW5zKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xudmFyIGNvbnRhaW5zID0gZXhwb3J0cy5jb250YWlucyA9IGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBpc1N0cmluZyh0ZXJtKSAmJiB2LmluZGV4T2YodGVybSkgIT09IC0xO1xuICB9O1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayB0byBzZWUgaWYgYW4gYXJndW1lbnQgaXNcbiAqICB0aGUgZmlyc3QgY2hhcmFjdGVycyBpbiB0aGUgcHJvdmlkZWQgYHRlcm1gXG4gKiBgaXNGaXJzdENoYXJzKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xudmFyIGlzRmlyc3RDaGFycyA9IGV4cG9ydHMuaXNGaXJzdENoYXJzID0gZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSA9PT0gMDtcbiAgfTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgdW5pdCB2YWx1ZSB0eXBlXG4gKi9cbnZhciBjcmVhdGVVbml0VHlwZSA9IGV4cG9ydHMuY3JlYXRlVW5pdFR5cGUgPSBmdW5jdGlvbiAodHlwZSkge1xuICByZXR1cm4ge1xuICAgIHRlc3Q6IGNvbnRhaW5zKHR5cGUpLFxuICAgIHBhcnNlOiBwYXJzZUZsb2F0LFxuICAgIHRyYW5zZm9ybTogKDAsIF90cmFuc2Zvcm1lcnMuYXBwZW5kVW5pdCkodHlwZSlcbiAgfTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBzcGxpdCBjb2xvclxuICogdmFsdWVzIGZyb20gc3RyaW5nIGludG8gYW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcbiAqIGBzcGxpdENvbG9yVmFsdWVzKFsnUmVkJywgJ0dyZWVuJywgJ0JsdWUnXSkoJ3JnYmEoMCwwLDApJylgXG4gKi9cbmZ1bmN0aW9uIHNwbGl0Q29sb3JWYWx1ZXModGVybXMpIHtcbiAgdmFyIG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICB2YXIgdmFsdWVzQXJyYXkgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHYpKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgdmFsdWVzW3Rlcm1zW2ldXSA9IHZhbHVlc0FycmF5W2ldICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KHZhbHVlc0FycmF5W2ldKSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcbn1cblxuLypcbiAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgXG4gICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICBcbiAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuKi9cbnZhciBmaW5kVmFsdWVBbmRVbml0ID0gZXhwb3J0cy5maW5kVmFsdWVBbmRVbml0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh2YWx1ZS5tYXRjaCkge1xuICAgIHZhciBzcGxpdFZhbHVlID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3BsaXRWYWx1ZVsxXSksXG4gICAgICB1bml0OiBzcGxpdFZhbHVlWzJdXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgfTtcbiAgfVxufTtcblxuLypcbiAgU3BsaXQgY29sb3Igc3RyaW5nIGludG8gbWFwIG9mIGNvbG9yIHByb3BlcnRpZXNcblxuICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gIHsgUmVkOiAyNTUuLi4gfVxuKi9cbnZhciBnZXRDb2xvclZhbHVlcyA9IGV4cG9ydHMuZ2V0Q29sb3JWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWUsIGNvbG9yVGVybXMpIHtcbiAgdmFyIG51bUNvbG9yVGVybXMgPSBjb2xvclRlcm1zLmxlbmd0aDtcbiAgdmFyIGNvbG9yVmFsdWVzID0ge307XG4gIHZhciBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHZhbHVlKSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Db2xvclRlcm1zOyBpKyspIHtcbiAgICBjb2xvclZhbHVlc1tjb2xvclRlcm1zW2ldXSA9IGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkID8gY29sb3JzW2ldIDogMTtcbiAgfVxuXG4gIHJldHVybiBjb2xvclZhbHVlcztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZFhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2xzaWMzQnNhWFJEYjJ4dmNsWmhiSFZsY3lJc0lrTkJUVVZNWDBOQlUwVmZVRUZVVkVWU1RpSXNJbEpGVUV4QlEwVmZWRVZOVUV4QlZFVWlMQ0pJUVZOZlVFVlNSazlTVFVGT1EwVmZUazlYSWl3aWNHVnlabTl5YldGdVkyVWlMQ0p1YjNjaUxDSjJZWEpVZVhCbElpd2lkbUZ5YVdGaWJHVWlMQ0pQWW1wbFkzUWlMQ0p3Y205MGIzUjVjR1VpTENKMGIxTjBjbWx1WnlJc0ltTmhiR3dpTENKemJHbGpaU0lzSW1OaGJXVnNWRzlFWVhOb0lpd2ljM1J5YVc1bklpd2ljbVZ3YkdGalpTSXNJblJ2VEc5M1pYSkRZWE5sSWl3aVkzVnljbVZ1ZEZScGJXVWlMQ0pFWVhSbElpd2laMlYwVkdsdFpTSXNJbWhoYzFCeWIzQmxjblI1SWl3aWIySnFaV04wSWl3aWNISnZjR1Z5ZEhsT1lXMWxJaXdpYUdGelQzZHVVSEp2Y0dWeWRIa2lMQ0oxYm1SbFptbHVaV1FpTENKcGMwRnljbUY1SWl3aVlYSnlJaXdpYVhOR2RXNWpJaXdpYjJKcUlpd2lhWE5PZFcwaUxDSnVkVzBpTENKcGMwOWlhaUlzSW1selUzUnlhVzVuSWl3aWMzUnlJaXdpYzJWMFJFOU5RWFIwY25NaUxDSmxiR1Z0Wlc1MElpd2lZWFIwY25NaUxDSnJaWGtpTENKelpYUkJkSFJ5YVdKMWRHVWlMQ0p6Y0d4cGRFTnZiVzFoUkdWc2FXMXBkR1ZrSWl3aWRtRnNkV1VpTENKemNHeHBkQ0lzSW1OdmJuUmhhVzV6SWl3aWRHVnliU0lzSW5ZaUxDSnBibVJsZUU5bUlpd2lhWE5HYVhKemRFTm9ZWEp6SWl3aVkzSmxZWFJsVlc1cGRGUjVjR1VpTENKMGVYQmxJaXdpZEdWemRDSXNJbkJoY25ObElpd2ljR0Z5YzJWR2JHOWhkQ0lzSW5SeVlXNXpabTl5YlNJc0luUmxjbTF6SWl3aWJuVnRWR1Z5YlhNaUxDSnNaVzVuZEdnaUxDSjJZV3gxWlhNaUxDSjJZV3gxWlhOQmNuSmhlU0lzSW1kbGRGWmhiSFZsUm5KdmJVWjFibU4wYVc5dVUzUnlhVzVuSWl3aWFTSXNJbVpwYm1SV1lXeDFaVUZ1WkZWdWFYUWlMQ0p0WVhSamFDSXNJbk53YkdsMFZtRnNkV1VpTENKMWJtbDBJaXdpWjJWMFEyOXNiM0pXWVd4MVpYTWlMQ0pqYjJ4dmNsUmxjbTF6SWl3aWJuVnRRMjlzYjNKVVpYSnRjeUlzSW1OdmJHOXlWbUZzZFdWeklpd2lZMjlzYjNKeklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08xRkJaMGxuUWtFc1owSXNSMEZCUVVFc1owSTdPMEZCYUVsb1FqczdRVUZGUVN4SlFVRk5ReXh4UWtGQmNVSXNhVUpCUVROQ08wRkJRMEVzU1VGQlRVTXNiVUpCUVcxQ0xFOUJRWHBDTzBGQlEwRXNTVUZCVFVNc2MwSkJRWFZDTEU5QlFVOURMRmRCUVZBc1MwRkJkVUlzVjBGQmRrSXNTVUZCYzBOQkxGbEJRVmxETEVkQlFTOUZPenRCUVVWQk96czdPenM3UVVGTlFTeEpRVUZOUXl4VlFVRlZMRlZCUVVORExGRkJRVVE3UVVGQlFTeFRRVUZqUXl4UFFVRlBReXhUUVVGUUxFTkJRV2xDUXl4UlFVRnFRaXhEUVVFd1FrTXNTVUZCTVVJc1EwRkJLMEpLTEZGQlFTOUNMRVZCUVhsRFN5eExRVUY2UXl4RFFVRXJReXhEUVVFdlF5eEZRVUZyUkN4RFFVRkRMRU5CUVc1RUxFTkJRV1E3UVVGQlFTeERRVUZvUWpzN1FVRkZRVHM3T3pzN08wRkJUVThzU1VGQlRVTXNiME5CUVdNc1ZVRkJRME1zVFVGQlJEdEJRVUZCTEZOQlFWbEJMRTlCUVU5RExFOUJRVkFzUTBGQlpXUXNhMEpCUVdZc1JVRkJiVU5ETEdkQ1FVRnVReXhGUVVGeFJHTXNWMEZCY2tRc1JVRkJXanRCUVVGQkxFTkJRWEJDT3p0QlFVVlFPenM3T3p0QlFVdFBMRWxCUVUxRExHOURRVUZqWkN4elFrRkJjMEk3UVVGQlFTeFRRVUZOUXl4WlFVRlpReXhIUVVGYUxFVkJRVTQ3UVVGQlFTeERRVUYwUWl4SFFVRm5SRHRCUVVGQkxGTkJRVTBzU1VGQlNXRXNTVUZCU2l4SFFVRlhReXhQUVVGWUxFVkJRVTQ3UVVGQlFTeERRVUZ3UlRzN1FVRkZVRHM3T3pzN096dEJRVTlQTEVsQlFVMURMRzlEUVVGakxGVkJRVU5ETEUxQlFVUXNSVUZCVTBNc1dVRkJWRHRCUVVGQkxGTkJRVEJDUkN4UFFVRlBSU3hqUVVGUUxFTkJRWE5DUkN4WlFVRjBRaXhMUVVGMVEwUXNUMEZCVDBNc1dVRkJVQ3hOUVVGNVFrVXNVMEZCTVVZN1FVRkJRU3hEUVVGd1FqczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVU1zTkVKQlFWVXNWVUZCUTBNc1IwRkJSRHRCUVVGQkxGTkJRVk53UWl4UlFVRlJiMElzUjBGQlVpeE5RVUZwUWl4UFFVRXhRanRCUVVGQkxFTkJRV2hDT3p0QlFVVlFPenM3T3pzN1FVRk5UeXhKUVVGTlF5d3dRa0ZCVXl4VlFVRkRReXhIUVVGRU8wRkJRVUVzVTBGQlUzUkNMRkZCUVZGelFpeEhRVUZTTEUxQlFXbENMRlZCUVRGQ08wRkJRVUVzUTBGQlpqczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVU1zZDBKQlFWRXNWVUZCUTBNc1IwRkJSRHRCUVVGQkxGTkJRVk1zVDBGQlQwRXNSMEZCVUN4TFFVRmxMRkZCUVhoQ08wRkJRVUVzUTBGQlpEczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVU1zZDBKQlFWRXNWVUZCUTBnc1IwRkJSRHRCUVVGQkxGTkJRVk1zVDBGQlQwRXNSMEZCVUN4TFFVRmxMRkZCUVhoQ08wRkJRVUVzUTBGQlpEczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVWtzT0VKQlFWY3NWVUZCUTBNc1IwRkJSRHRCUVVGQkxGTkJRVk1zVDBGQlQwRXNSMEZCVUN4TFFVRmxMRkZCUVhoQ08wRkJRVUVzUTBGQmFrSTdPMEZCUlVFc1NVRkJUVU1zYjBOQlFXTXNWVUZCUTBNc1QwRkJSQ3hGUVVGVlF5eExRVUZXTEVWQlFXOUNPMEZCUXpkRExFOUJRVXNzU1VGQlNVTXNSMEZCVkN4SlFVRm5Ra1FzUzBGQmFFSXNSVUZCZFVJN1FVRkRja0lzVVVGQlNVRXNUVUZCVFdJc1kwRkJUaXhEUVVGeFFtTXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU0zUWtZc1kwRkJVVWNzV1VGQlVpeERRVUZ4UWtRc1IwRkJja0lzUlVGQk1FSkVMRTFCUVUxRExFZEJRVTRzUTBGQk1VSTdRVUZEUkR0QlFVTkdPMEZCUTBZc1EwRk9UVHRCUVU5UU96czdPenM3T3p0QlFWRlBMRWxCUVUxRkxHOUVRVUZ6UWl4VlFVRkRReXhMUVVGRU8wRkJRVUVzVTBGQlYxSXNVMEZCVTFFc1MwRkJWQ3hKUVVGclFrRXNUVUZCVFVNc1MwRkJUaXhEUVVGWkxFMUJRVm9zUTBGQmJFSXNSMEZCZDBNc1EwRkJRMFFzUzBGQlJDeERRVUZ1UkR0QlFVRkJMRU5CUVRWQ096dEJRVVZRT3pzN08wRkJTVThzU1VGQlRVVXNPRUpCUVZjc1ZVRkJRME1zU1VGQlJEdEJRVUZCTEZOQlFWVXNWVUZCUTBNc1EwRkJSQ3hGUVVGUE8wRkJRM1pETEZkQlFWRmFMRk5CUVZOWExFbEJRVlFzUzBGQmEwSkRMRVZCUVVWRExFOUJRVVlzUTBGQlZVWXNTVUZCVml4TlFVRnZRaXhEUVVGRExFTkJRUzlETzBGQlEwUXNSMEZHZFVJN1FVRkJRU3hEUVVGcVFqczdRVUZKVURzN096czdRVUZMVHl4SlFVRk5SeXh6UTBGQlpTeFZRVUZEU0N4SlFVRkVPMEZCUVVFc1UwRkJWU3hWUVVGRFF5eERRVUZFTEVWQlFVODdRVUZETTBNc1YwRkJVVm9zVTBGQlUxY3NTVUZCVkN4TFFVRnJRa01zUlVGQlJVTXNUMEZCUml4RFFVRlZSaXhKUVVGV0xFMUJRVzlDTEVOQlFUbERPMEZCUTBRc1IwRkdNa0k3UVVGQlFTeERRVUZ5UWpzN1FVRkpVRHM3TzBGQlIwOHNTVUZCVFVrc01FTkJRV2xDTEZWQlFVTkRMRWxCUVVRc1JVRkJWVHRCUVVOMFF5eFRRVUZQTzBGQlEweERMRlZCUVUxUUxGTkJRVk5OTEVsQlFWUXNRMEZFUkR0QlFVVk1SU3hYUVVGUFF5eFZRVVpHTzBGQlIweERMR1ZCUVZjc09FSkJRVmRLTEVsQlFWZzdRVUZJVGl4SFFVRlFPMEZCUzBRc1EwRk9UVHM3UVVGUlVEczdPenM3UVVGTFR5eFRRVUZUYUVRc1owSkJRVlFzUTBGQk1FSnhSQ3hMUVVFeFFpeEZRVUZwUXp0QlFVTjBReXhOUVVGTlF5eFhRVUZYUkN4TlFVRk5SU3hOUVVGMlFqczdRVUZGUVN4VFFVRlBMRlZCUVZWWUxFTkJRVllzUlVGQllUdEJRVU5zUWl4UlFVRk5XU3hUUVVGVExFVkJRV1k3UVVGRFFTeFJRVUZOUXl4alFVRmpiRUlzYjBKQlFXOUNiVUlzTWtKQlFUSkNaQ3hEUVVFelFpeERRVUZ3UWl4RFFVRndRanM3UVVGRlFTeFRRVUZMTEVsQlFVbGxMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1V3c1VVRkJjRUlzUlVGQk9FSkxMRWRCUVRsQ0xFVkJRVzFETzBGQlEycERTQ3hoUVVGUFNDeE5RVUZOVFN4RFFVRk9MRU5CUVZBc1NVRkJiMEpHTEZsQlFWbEZMRU5CUVZvc1RVRkJiVUp1UXl4VFFVRndRaXhIUVVGcFF6SkNMRmRCUVZkTkxGbEJRVmxGTEVOQlFWb3NRMEZCV0N4RFFVRnFReXhIUVVFNFJDeERRVUZxUmp0QlFVTkVPenRCUVVWRUxGZEJRVTlJTEUxQlFWQTdRVUZEUkN4SFFWUkVPMEZCVlVRN08wRkJSVVE3T3pzN096czdPMEZCVVU4c1NVRkJUVWtzT0VOQlFXMUNMRlZCUVVOd1FpeExRVUZFTEVWQlFWYzdRVUZEZWtNc1RVRkJTVUVzVFVGQlRYRkNMRXRCUVZZc1JVRkJhVUk3UVVGRFppeFJRVUZOUXl4aFFVRmhkRUlzVFVGQlRYRkNMRXRCUVU0c1EwRkJXU3h0UWtGQldpeERRVUZ1UWpzN1FVRkZRU3hYUVVGUE8wRkJRMHh5UWl4aFFVRlBWeXhYUVVGWFZ5eFhRVUZYTEVOQlFWZ3NRMEZCV0N4RFFVUkdPMEZCUlV4RExGbEJRVTlFTEZkQlFWY3NRMEZCV0R0QlFVWkdMRXRCUVZBN1FVRkpSQ3hIUVZCRUxFMUJUMDg3UVVGRFRDeFhRVUZQTEVWQlFVVjBRaXhaUVVGR0xFVkJRVkE3UVVGRFJEdEJRVU5HTEVOQldFMDdPMEZCWVZBN096czdPenM3UVVGUFR5eEpRVUZOZDBJc01FTkJRV2xDTEZWQlFVTjRRaXhMUVVGRUxFVkJRVkY1UWl4VlFVRlNMRVZCUVhWQ08wRkJRMjVFTEUxQlFVMURMR2RDUVVGblFrUXNWMEZCVjFZc1RVRkJha003UVVGRFFTeE5RVUZOV1N4alFVRmpMRVZCUVhCQ08wRkJRMEVzVFVGQlRVTXNVMEZCVXpkQ0xHOUNRVUZ2UW0xQ0xESkNRVUV5UW14Q0xFdEJRVE5DTEVOQlFYQkNMRU5CUVdZN08wRkJSVUVzVDBGQlN5eEpRVUZKYlVJc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpUeXhoUVVGd1FpeEZRVUZ0UTFBc1IwRkJia01zUlVGQmQwTTdRVUZEZEVOUkxHZENRVUZaUml4WFFVRlhUaXhEUVVGWUxFTkJRVm9zU1VGQk9FSlRMRTlCUVU5VUxFTkJRVkFzVFVGQlkyNURMRk5CUVdZc1IwRkJORUkwUXl4UFFVRlBWQ3hEUVVGUUxFTkJRVFZDTEVkQlFYZERMRU5CUVhKRk8wRkJRMFE3TzBGQlJVUXNVMEZCVDFFc1YwRkJVRHRCUVVORUxFTkJWazBpTENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmhjSEJsYm1SVmJtbDBJSDBnWm5KdmJTQW5MaTkwY21GdWMyWnZjbTFsY25Nbk8xeHVYRzVqYjI1emRDQkRRVTFGVEY5RFFWTkZYMUJCVkZSRlVrNGdQU0F2S0Z0aExYcGRLU2hiUVMxYVhTa3ZaenRjYm1OdmJuTjBJRkpGVUV4QlEwVmZWRVZOVUV4QlZFVWdQU0FuSkRFdEpESW5PMXh1WTI5dWMzUWdTRUZUWDFCRlVrWlBVazFCVGtORlgwNVBWeUE5SUNoMGVYQmxiMllnY0dWeVptOXliV0Z1WTJVZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIQmxjbVp2Y20xaGJtTmxMbTV2ZHlrN1hHNWNiaThxWEc0Z0lFZGxkQ0IyWVhJZ2RIbHdaU0JoY3lCemRISnBibWRjYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnR6ZEhKcGJtZGRPaUJTWlhSMWNtNXpMQ0JtYjNJZ2FXNXpkR0Z1WTJVZ0owOWlhbVZqZENjZ2FXWWdXMjlpYW1WamRDQlBZbXBsWTNSZFhHNHFMMXh1WTI5dWMzUWdkbUZ5Vkhsd1pTQTlJQ2gyWVhKcFlXSnNaU2tnUFQ0Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1MGIxTjBjbWx1Wnk1allXeHNLSFpoY21saFlteGxLUzV6YkdsalpTZzRMQ0F0TVNrN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ1kyRnRaV3hEWVhObElIUnZJR1JoYzJndFkyRnpaVnh1WEc0Z0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQkFjbVYwZFhKdUlGdHpkSEpwYm1kZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHTmhiV1ZzVkc5RVlYTm9JRDBnS0hOMGNtbHVaeWtnUFQ0Z2MzUnlhVzVuTG5KbGNHeGhZMlVvUTBGTlJVeGZRMEZUUlY5UVFWUlVSVkpPTENCU1JWQk1RVU5GWDFSRlRWQk1RVlJGS1M1MGIweHZkMlZ5UTJGelpTZ3BPMXh1WEc0dktseHVJQ0JIWlc1bGNtRjBaU0JqZFhKeVpXNTBJSFJwYldWemRHRnRjRnh1SUNCY2JpQWdRSEpsZEhWeWJpQmJkR2x0WlhOMFlXMXdYVG9nUTNWeWNtVnVkQ0JWVGtsWUlIUnBiV1Z6ZEdGdGNGeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpkWEp5Wlc1MFZHbHRaU0E5SUVoQlUxOVFSVkpHVDFKTlFVNURSVjlPVDFjZ1B5QW9LU0E5UGlCd1pYSm1iM0p0WVc1alpTNXViM2NvS1NBNklDZ3BJRDArSUc1bGR5QkVZWFJsS0NrdVoyVjBWR2x0WlNncE8xeHVYRzR2S2x4dUlDQkRhR1ZqYXlCcFppQnZZbXBsWTNRZ2FHRnpJSEJ5YjNCbGNuUjVJR0Z1WkNCcGRDQnBjMjRuZENCMWJtUmxabWx1WldSY2JseHVJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMWNiaUFnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdoaGMxQnliM0JsY25SNUlEMGdLRzlpYW1WamRDd2djSEp2Y0dWeWRIbE9ZVzFsS1NBOVBpQnZZbXBsWTNRdWFHRnpUM2R1VUhKdmNHVnlkSGtvY0hKdmNHVnlkSGxPWVcxbEtTQW1KaUJ2WW1wbFkzUmJjSEp2Y0dWeWRIbE9ZVzFsWFNBaFBUMGdkVzVrWldacGJtVmtPMXh1WEc0dktseHVJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lXNGdZWEp5WVhrZ1B5QmNiaUFnWEc0Z0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIVjBhV3h6TG5aaGNsUjVjR1VnUFQwOUlDZEJjbkpoZVNkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkJjbkpoZVNBOUlDaGhjbklwSUQwK0lIWmhjbFI1Y0dVb1lYSnlLU0E5UFQwZ0owRnljbUY1Snp0Y2JseHVMeXBjYmlBZ1NYTWdkWFJwYkhNZ2RtRnlJR0VnWm5WdVkzUnBiMjRnUHlCY2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhWMGFXeHpMblpoY2xSNWNHVWdQVDA5SUNkR2RXNWpkR2x2YmlkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkdkVzVqSUQwZ0tHOWlhaWtnUFQ0Z2RtRnlWSGx3WlNodlltb3BJRDA5UFNBblJuVnVZM1JwYjI0bk8xeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVNCdWRXMWlaWEkvWEc0Z0lGeHVJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIwZVhCbGIyWWdQVDA5SUNkdWRXMWlaWEluWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselRuVnRJRDBnS0c1MWJTa2dQVDRnZEhsd1pXOW1JRzUxYlNBOVBUMGdKMjUxYldKbGNpYzdYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaGJpQnZZbXBsWTNRL1hHNGdJRnh1SUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMGVYQmxiMllnUFQwOUlDZHZZbXBsWTNRblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpUMkpxSUQwZ0tHOWlhaWtnUFQ0Z2RIbHdaVzltSUc5aWFpQTlQVDBnSjI5aWFtVmpkQ2M3WEc1Y2JpOHFYRzRnSUVseklIVjBhV3h6SUhaaGNpQmhJSE4wY21sdVp5QS9JRnh1SUNCY2JpQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkSGx3Wlc5bUlITjBjaUE5UFQwZ0ozTjBjbWx1WnlkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTlRkSEpwYm1jZ1BTQW9jM1J5S1NBOVBpQjBlWEJsYjJZZ2MzUnlJRDA5UFNBbmMzUnlhVzVuSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhObGRFUlBUVUYwZEhKeklEMGdLR1ZzWlcxbGJuUXNJR0YwZEhKektTQTlQaUI3WEc0Z0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCaGRIUnljeWtnZTF4dUlDQWdJR2xtSUNoaGRIUnljeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNCbGJHVnRaVzUwTG5ObGRFRjBkSEpwWW5WMFpTaHJaWGtzSUdGMGRISnpXMnRsZVYwcE8xeHVJQ0FnSUgxY2JpQWdmVnh1ZlR0Y2JpOHFYRzRnSUZOd2JHbDBJR052YlcxaExXUmxiR2x0YVhSbFpDQnpkSEpwYm1kY2JseHVJQ0JjSW1admJ5eGlZWEpjSWlBdFBpQmJYQ0ptYjI5Y0lpd2dYQ0ppWVhKY0lsMWNibHh1SUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ1FISmxkSFZ5YmlCYllYSnlZWGxkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOd2JHbDBRMjl0YldGRVpXeHBiV2wwWldRZ1BTQW9kbUZzZFdVcElEMCtJR2x6VTNSeWFXNW5LSFpoYkhWbEtTQS9JSFpoYkhWbExuTndiR2wwS0M4c1hGeHpLaThwSURvZ1czWmhiSFZsWFR0Y2JseHVMeW9xWEc0Z0tpQWdVbVYwZFhKdWN5QmhJR1oxYm1OMGFXOXVJSFJvWVhRZ2QybHNiQ0JqYUdWamF5QmhibmtnWVhKbmRXMWxiblFnWm05eUlHQjBaWEp0WUZ4dUlDb2dZR052Ym5SaGFXNXpLQ2R1WldWa2JHVW5LU2duYUdGNWMzUmhZMnNuS1dCY2JpQXFMMXh1Wlhod2IzSjBJR052Ym5OMElHTnZiblJoYVc1eklEMGdLSFJsY20wcElEMCtJQ2gyS1NBOVBpQjdYRzRnSUhKbGRIVnliaUFvYVhOVGRISnBibWNvZEdWeWJTa2dKaVlnZGk1cGJtUmxlRTltS0hSbGNtMHBJQ0U5UFNBdE1TazdYRzU5TzF4dVhHNHZLaXBjYmlBcUlDQlNaWFIxY201eklHRWdablZ1WTNScGIyNGdkR2hoZENCM2FXeHNJR05vWldOcklIUnZJSE5sWlNCcFppQmhiaUJoY21kMWJXVnVkQ0JwYzF4dUlDb2dJSFJvWlNCbWFYSnpkQ0JqYUdGeVlXTjBaWEp6SUdsdUlIUm9aU0J3Y205MmFXUmxaQ0JnZEdWeWJXQmNiaUFxSUdCcGMwWnBjbk4wUTJoaGNuTW9KMjVsWldSc1pTY3BLQ2RvWVhsemRHRmpheWNwWUZ4dUlDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkdhWEp6ZEVOb1lYSnpJRDBnS0hSbGNtMHBJRDArSUNoMktTQTlQaUI3WEc0Z0lISmxkSFZ5YmlBb2FYTlRkSEpwYm1jb2RHVnliU2tnSmlZZ2RpNXBibVJsZUU5bUtIUmxjbTBwSUQwOVBTQXdLVHRjYm4wN1hHNWNiaThxS2x4dUlDb2dRM0psWVhSbElHRWdkVzVwZENCMllXeDFaU0IwZVhCbFhHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWVmJtbDBWSGx3WlNBOUlDaDBlWEJsS1NBOVBpQjdYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdkR1Z6ZERvZ1kyOXVkR0ZwYm5Nb2RIbHdaU2tzWEc0Z0lDQWdjR0Z5YzJVNklIQmhjbk5sUm14dllYUXNYRzRnSUNBZ2RISmhibk5tYjNKdE9pQmhjSEJsYm1SVmJtbDBLSFI1Y0dVcFhHNGdJSDA3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpYTWdZU0JtZFc1amRHbHZiaUIwYUdGMElIZHBiR3dnYzNCc2FYUWdZMjlzYjNKY2JpQXFJSFpoYkhWbGN5Qm1jbTl0SUhOMGNtbHVaeUJwYm5SdklHRnVJRzlpYW1WamRDQnZaaUJ3Y205d1pYSjBhV1Z6WEc0Z0tpQmdjM0JzYVhSRGIyeHZjbFpoYkhWbGN5aGJKMUpsWkNjc0lDZEhjbVZsYmljc0lDZENiSFZsSjEwcEtDZHlaMkpoS0RBc01Dd3dLU2NwWUZ4dUlDb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdjM0JzYVhSRGIyeHZjbFpoYkhWbGN5aDBaWEp0Y3lrZ2UxeHVJQ0JqYjI1emRDQnVkVzFVWlhKdGN5QTlJSFJsY20xekxteGxibWQwYUR0Y2JseHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdLSFlwSUh0Y2JpQWdJQ0JqYjI1emRDQjJZV3gxWlhNZ1BTQjdmVHRjYmlBZ0lDQmpiMjV6ZENCMllXeDFaWE5CY25KaGVTQTlJSE53YkdsMFEyOXRiV0ZFWld4cGJXbDBaV1FvWjJWMFZtRnNkV1ZHY205dFJuVnVZM1JwYjI1VGRISnBibWNvZGlrcE8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFVWlhKdGN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNCMllXeDFaWE5iZEdWeWJYTmJhVjFkSUQwZ0tIWmhiSFZsYzBGeWNtRjVXMmxkSUNFOVBTQjFibVJsWm1sdVpXUXBJRDhnY0dGeWMyVkdiRzloZENoMllXeDFaWE5CY25KaGVWdHBYU2tnT2lBeE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIyWVd4MVpYTTdYRzRnSUgwN1hHNTlYRzVjYmk4cVhHNGdJRk53YkdsMElHRWdkbUZzZFdVZ2FXNTBieUJoSUhaaGJIVmxMM1Z1YVhRZ2IySnFaV04wWEc0Z0lGeHVJQ0FnSUZ3aU1qQXdjSGhjSWlBdFBpQjdJSFpoYkhWbE9pQXlNREFzSUhWdWFYUTZJRndpY0hoY0lpQjlYRzRnSUNBZ1hHNGdJRUJ3WVhKaGJTQmJjM1J5YVc1blhUb2dWbUZzZFdVZ2RHOGdjM0JzYVhSY2JpQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhUb2dUMkpxWldOMElIZHBkR2dnZG1Gc2RXVWdZVzVrSUhWdWFYUWdjSEp2Y0hOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1ptbHVaRlpoYkhWbFFXNWtWVzVwZENBOUlDaDJZV3gxWlNrZ1BUNGdlMXh1SUNCcFppQW9kbUZzZFdVdWJXRjBZMmdwSUh0Y2JpQWdJQ0JqYjI1emRDQnpjR3hwZEZaaGJIVmxJRDBnZG1Gc2RXVXViV0YwWTJnb0x5Z3RQMXhjWkNwY1hDNC9YRnhrS2lrb0xpb3BMeWs3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdkbUZzZFdVNklIQmhjbk5sUm14dllYUW9jM0JzYVhSV1lXeDFaVnN4WFNrc1hHNGdJQ0FnSUNCMWJtbDBPaUFnYzNCc2FYUldZV3gxWlZzeVhWeHVJQ0FnSUgwN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2NtVjBkWEp1SUhzZ2RtRnNkV1VnZlR0Y2JpQWdmVnh1ZlR0Y2JseHVMeXBjYmlBZ1UzQnNhWFFnWTI5c2IzSWdjM1J5YVc1bklHbHVkRzhnYldGd0lHOW1JR052Ykc5eUlIQnliM0JsY25ScFpYTmNibHh1SUNCY0luSm5ZbUVvTWpVMUxDQXlOVFVzSURJMU5Td2dNQ2xjSWl3Z1cxd2lVbVZrWENJc0lDZEhjbVZsYmx3aUxDQmNJa0pzZFdWY0lpd2dYQ0pCYkhCb1lWd2lYVnh1WEc0Z0lIc2dVbVZrT2lBeU5UVXVMaTRnZlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUkRiMnh2Y2xaaGJIVmxjeUE5SUNoMllXeDFaU3dnWTI5c2IzSlVaWEp0Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0J1ZFcxRGIyeHZjbFJsY20xeklEMGdZMjlzYjNKVVpYSnRjeTVzWlc1bmRHZzdYRzRnSUdOdmJuTjBJR052Ykc5eVZtRnNkV1Z6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJR052Ykc5eWN5QTlJSE53YkdsMFEyOXRiV0ZFWld4cGJXbDBaV1FvWjJWMFZtRnNkV1ZHY205dFJuVnVZM1JwYjI1VGRISnBibWNvZG1Gc2RXVXBLVHRjYmx4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlVOdmJHOXlWR1Z5YlhNN0lHa3JLeWtnZTF4dUlDQWdJR052Ykc5eVZtRnNkV1Z6VzJOdmJHOXlWR1Z5YlhOYmFWMWRJRDBnS0dOdmJHOXljMXRwWFNBaFBUMGdkVzVrWldacGJtVmtLU0EvSUdOdmJHOXljMXRwWFNBNklERTdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdZMjlzYjNKV1lXeDFaWE03WEc1OU8xeHVYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG52YXIgaGFzUkFGID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRydWUgOiBmYWxzZTtcblxudmFyIG9uTmV4dEZyYW1lID0gdm9pZCAwO1xuXG5pZiAoaGFzUkFGKSB7XG4gIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9O1xufSBlbHNlIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvKlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgICBcbiAgICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcbiAgICAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgICBcbiAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgICAgXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgXG4gICAgICBNSVQgbGljZW5zZVxuICAgICovXG4gICAgdmFyIGxhc3RUaW1lID0gMDtcblxuICAgIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYuNyAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWUgKyB0aW1lVG9DYWxsO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGxhc3RUaW1lKTtcbiAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgIH07XG4gIH0pKCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9uTmV4dEZyYW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12YjI0dGJtVjRkQzFtY21GdFpTNXFjeUpkTENKdVlXMWxjeUk2V3lKb1lYTlNRVVlpTENKM2FXNWtiM2NpTENKeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVWlMQ0p2Yms1bGVIUkdjbUZ0WlNJc0ltTmhiR3hpWVdOcklpd2liR0Z6ZEZScGJXVWlMQ0pqZFhKeVpXNTBWR2x0WlNJc0lrUmhkR1VpTENKblpYUlVhVzFsSWl3aWRHbHRaVlJ2UTJGc2JDSXNJazFoZEdnaUxDSnRZWGdpTENKelpYUlVhVzFsYjNWMElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRVHM3TzBGQlIwRXNTVUZCVFVFc1UwRkJWU3hQUVVGUFF5eE5RVUZRTEV0QlFXdENMRmRCUVd4Q0xFbEJRV2xEUVN4UFFVRlBReXh4UWtGQmVrTXNSMEZCYTBVc1NVRkJiRVVzUjBGQmVVVXNTMEZCZUVZN08wRkJSVUVzU1VGQlNVTXNiMEpCUVVvN08wRkJSVUVzU1VGQlNVZ3NUVUZCU2l4RlFVRlpPMEZCUTFaSExHZENRVUZqTEZWQlFVTkRMRkZCUVVRN1FVRkJRU3hYUVVGalNDeFBRVUZQUXl4eFFrRkJVQ3hEUVVFMlFrVXNVVUZCTjBJc1EwRkJaRHRCUVVGQkxFZEJRV1E3UVVGRlJDeERRVWhFTEUxQlIwODdRVUZCUVR0QlFVTk1PenM3T3pzN096czdPenM3TzBGQlkwRXNVVUZCU1VNc1YwRkJWeXhEUVVGbU96dEJRVVZCUml4clFrRkJZeXhWUVVGRFF5eFJRVUZFTEVWQlFXTTdRVUZETVVJc1ZVRkJUVVVzWTBGQll5eEpRVUZKUXl4SlFVRktMRWRCUVZkRExFOUJRVmdzUlVGQmNFSTdRVUZEUVN4VlFVRk5ReXhoUVVGaFF5eExRVUZMUXl4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxGRkJRVkZNTEdOQlFXTkVMRkZCUVhSQ0xFTkJRVm9zUTBGQmJrSTdPMEZCUlVGQkxHbENRVUZYUXl4alFVRmpSeXhWUVVGNlFqczdRVUZGUVVjc2FVSkJRVmM3UVVGQlFTeGxRVUZOVWl4VFFVRlRReXhSUVVGVUxFTkJRVTQ3UVVGQlFTeFBRVUZZTEVWQlFYRkRTU3hWUVVGeVF6dEJRVU5FTEV0QlVFUTdRVUZxUWtzN1FVRjVRazQ3TzJ0Q1FVVmpUaXhYSWl3aVptbHNaU0k2SW05dUxXNWxlSFF0Wm5KaGJXVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNCRVpYUmxZM1FnWVc1a0lHeHZZV1FnWVc0Z1lYQndjbTl3Y21saGRHVWdZMnh2WTJzZ2MyVjBkR2x1WnlCbWIzSWdkR2hsSUdWdWRtbHliMjV0Wlc1MFhHNHFMMXh1WTI5dWMzUWdhR0Z6VWtGR0lEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVXBJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVYRzVzWlhRZ2IyNU9aWGgwUm5KaGJXVTdYRzVjYm1sbUlDaG9ZWE5TUVVZcElIdGNiaUFnYjI1T1pYaDBSbkpoYldVZ1BTQW9ZMkZzYkdKaFkyc3BJRDArSUhkcGJtUnZkeTV5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVb1kyRnNiR0poWTJzcE8xeHVYRzU5SUdWc2MyVWdlMXh1SUNBdktseHVJQ0FnSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTQndiMng1Wm1sc2JGeHVJQ0FnSUZ4dUlDQWdJRVp2Y2lCSlJUZ3ZPU0JHYkdsdWMzUnZibVZ6SUdGdVpDQnViMjR0WW5KdmQzTmxjaUJsYm5acGNtOXViV1Z1ZEhOY2JseHVJQ0FnSUZSaGEyVnVJR1p5YjIwZ1VHRjFiQ0JKY21semFDNGdWMlVuZG1VZ2MzUnlhWEJ3WldRZ2IzVjBJR05oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsSUdOb1pXTnJjeUJpWldOaGRYTmxJSGRsSUdSdmJpZDBJR1p2ZUNCM2FYUm9JSFJvWVhSY2JpQWdJQ0JjYmlBZ0lDQm9kSFJ3T2k4dmNHRjFiR2x5YVhOb0xtTnZiUzh5TURFeEwzSmxjWFZsYzNSaGJtbHRZWFJwYjI1bWNtRnRaUzFtYjNJdGMyMWhjblF0WVc1cGJXRjBhVzVuTDF4dUlDQWdJR2gwZEhBNkx5OXRlUzV2Y0dWeVlTNWpiMjB2WlcxdmJHeGxjaTlpYkc5bkx6SXdNVEV2TVRJdk1qQXZjbVZ4ZFdWemRHRnVhVzFoZEdsdmJtWnlZVzFsTFdadmNpMXpiV0Z5ZEMxbGNpMWhibWx0WVhScGJtZGNiaUFnSUNBZ1hHNGdJQ0FnY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbElIQnZiSGxtYVd4c0lHSjVJRVZ5YVdzZ1RjTzJiR3hsY2k0Z1ptbDRaWE1nWm5KdmJTQlFZWFZzSUVseWFYTm9JR0Z1WkNCVWFXNXZJRnBwYW1SbGJGeHVJQ0FnSUNCY2JpQWdJQ0JOU1ZRZ2JHbGpaVzV6WlZ4dUlDQXFMMXh1SUNCc1pYUWdiR0Z6ZEZScGJXVWdQU0F3TzF4dVhHNGdJRzl1VG1WNGRFWnlZVzFsSUQwZ0tHTmhiR3hpWVdOcktTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1kzVnljbVZ1ZEZScGJXVWdQU0J1WlhjZ1JHRjBaU2dwTG1kbGRGUnBiV1VvS1R0Y2JpQWdJQ0JqYjI1emRDQjBhVzFsVkc5RFlXeHNJRDBnVFdGMGFDNXRZWGdvTUN3Z01UWXVOeUF0SUNoamRYSnlaVzUwVkdsdFpTQXRJR3hoYzNSVWFXMWxLU2s3WEc1Y2JpQWdJQ0JzWVhOMFZHbHRaU0E5SUdOMWNuSmxiblJVYVcxbElDc2dkR2x0WlZSdlEyRnNiRHRjYmx4dUlDQWdJSE5sZEZScGJXVnZkWFFvS0NrZ1BUNGdZMkZzYkdKaFkyc29iR0Z6ZEZScGJXVXBMQ0IwYVcxbFZHOURZV3hzS1R0Y2JpQWdmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2IyNU9aWGgwUm5KaGJXVTdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVJlbmRlclN0ZXA7XG5mdW5jdGlvbiBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCkge1xuICAvKipcbiAgICogV2UgdXNlIHR3byBhcnJheXMsIG9uZSBmb3IgdGhpcyBmcmFtZSBhbmQgb25lIHRvIHF1ZXVlIGZvciB0aGVcbiAgICogbmV4dCBmcmFtZSwgcmV1c2luZyBlYWNoIHRvIGF2b2lkIEdDLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICB2YXIgZnVuY3Rpb25zVG9SdW4gPSBbXTtcbiAgdmFyIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICBzY2hlZHVsZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBzdGFydFJlbmRlckxvb3AoKTtcbiAgICAgIC8vIElmIHRoaXMgY2FsbGJhY2sgaXNuJ3QgYWxyZWFkeSBzY2hlZHVsZWQgdG8gcnVuIG5leHQgZnJhbWVcbiAgICAgIGlmIChmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUucHVzaChjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNhbmNlbDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgaW5kZXhPZkNhbGxiYWNrID0gZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaW5kZXhPZkNhbGxiYWNrICE9PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXhPZkNhbGxiYWNrLCAxKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAvLyBDbGVhciBuZXh0IGZyYW1lIGxpc3RcbiAgICAgIHZhciBfcmVmID0gW2Z1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLCBmdW5jdGlvbnNUb1J1bl07XG4gICAgICAvLyBTd2FwIHRoaXMgZnJhbWUgYW5kIG5leHQgZnJhbWUgYXJyYXlzIHRvIGF2b2lkIEdDXG5cbiAgICAgIGZ1bmN0aW9uc1RvUnVuID0gX3JlZlswXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gX3JlZlsxXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIEV4ZWN1dGUgYWxsIG9mIHRoaXMgZnJhbWUncyBmdW5jdGlvbnNcbiAgICAgIHZhciBudW1UaGlzRnJhbWUgPSBmdW5jdGlvbnNUb1J1bi5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRoaXNGcmFtZTsgaSsrKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuW2ldKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12WTNKbFlYUmxMWEpsYm1SbGNpMXpkR1Z3TG1weklsMHNJbTVoYldWeklqcGJJbU55WldGMFpWSmxibVJsY2xOMFpYQWlMQ0p6ZEdGeWRGSmxibVJsY2t4dmIzQWlMQ0ptZFc1amRHbHZibk5VYjFKMWJpSXNJbVoxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbElpd2ljMk5vWldSMWJHVWlMQ0pqWVd4c1ltRmpheUlzSW1sdVpHVjRUMllpTENKd2RYTm9JaXdpWTJGdVkyVnNJaXdpYVc1a1pYaFBaa05oYkd4aVlXTnJJaXdpYzNCc2FXTmxJaXdpY0hKdlkyVnpjeUlzSW14bGJtZDBhQ0lzSW01MWJWUm9hWE5HY21GdFpTSXNJbWtpWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGQmQwSkJMR2RDTzBGQlFWUXNVMEZCVTBFc1owSkJRVlFzUTBGQk1FSkRMR1ZCUVRGQ0xFVkJRVEpETzBGQlEzaEVPenM3T3p0QlFVdEJMRTFCUVVsRExHbENRVUZwUWl4RlFVRnlRanRCUVVOQkxFMUJRVWxETERCQ1FVRXdRaXhGUVVFNVFqczdRVUZGUVN4VFFVRlBPMEZCUTB4RExHTkJRVlVzVlVGQlEwTXNVVUZCUkN4RlFVRmpPMEZCUTNSQ1NqdEJRVU5CTzBGQlEwRXNWVUZCU1VVc2QwSkJRWGRDUnl4UFFVRjRRaXhEUVVGblEwUXNVVUZCYUVNc1RVRkJPRU1zUTBGQlF5eERRVUZ1UkN4RlFVRnpSRHRCUVVOd1JFWXNaME5CUVhkQ1NTeEpRVUY0UWl4RFFVRTJRa1lzVVVGQk4wSTdRVUZEUkR0QlFVTkdMRXRCVUVrN08wRkJVMHhITEZsQlFWRXNWVUZCUTBnc1VVRkJSQ3hGUVVGak8wRkJRM0JDTEZWQlFVMUpMR3RDUVVGclFrNHNkMEpCUVhkQ1J5eFBRVUY0UWl4RFFVRm5RMFFzVVVGQmFFTXNRMEZCZUVJN1FVRkRRU3hWUVVGSlNTeHZRa0ZCYjBJc1EwRkJReXhEUVVGNlFpeEZRVUUwUWp0QlFVTXhRazRzWjBOQlFYZENUeXhOUVVGNFFpeERRVUVyUWtRc1pVRkJMMElzUlVGQlowUXNRMEZCYUVRN1FVRkRSRHRCUVVOR0xFdEJaRWs3TzBGQlowSk1SU3hoUVVGVExGbEJRVTA3TzBGQlNXSTdRVUZLWVN4cFFrRkZLMElzUTBGQlExSXNkVUpCUVVRc1JVRkJNRUpFTEdOQlFURkNMRU5CUmk5Q08wRkJRMkk3TzBGQlEwTkJMRzlDUVVaWk8wRkJSVWxETERaQ1FVWktPMEZCUzJKQkxEaENRVUYzUWxNc1RVRkJlRUlzUjBGQmFVTXNRMEZCYWtNN08wRkJSVUU3UVVGRFFTeFZRVUZOUXl4bFFVRmxXQ3hsUVVGbFZTeE5RVUZ3UXp0QlFVTkJMRmRCUVVzc1NVRkJTVVVzU1VGQlNTeERRVUZpTEVWQlFXZENRU3hKUVVGSlJDeFpRVUZ3UWl4RlFVRnJRME1zUjBGQmJFTXNSVUZCZFVNN1FVRkRja05hTEhWQ1FVRmxXU3hEUVVGbU8wRkJRMFE3UVVGRFJqdEJRVFZDU1N4SFFVRlFPMEZCT0VKRUlpd2labWxzWlNJNkltTnlaV0YwWlMxeVpXNWtaWEl0YzNSbGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLU0I3WEc0Z0lDOHFLbHh1SUNBZ0tpQlhaU0IxYzJVZ2RIZHZJR0Z5Y21GNWN5d2diMjVsSUdadmNpQjBhR2x6SUdaeVlXMWxJR0Z1WkNCdmJtVWdkRzhnY1hWbGRXVWdabTl5SUhSb1pWeHVJQ0FnS2lCdVpYaDBJR1p5WVcxbExDQnlaWFZ6YVc1bklHVmhZMmdnZEc4Z1lYWnZhV1FnUjBNdVhHNGdJQ0FxSUVCMGVYQmxJSHRCY25KaGVYMWNiaUFnSUNvdlhHNGdJR3hsZENCbWRXNWpkR2x2Ym5OVWIxSjFiaUE5SUZ0ZE8xeHVJQ0JzWlhRZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1VnUFNCYlhUdGNibHh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJSE5qYUdWa2RXeGxPaUFvWTJGc2JHSmhZMnNwSUQwK0lIdGNiaUFnSUNBZ0lITjBZWEowVW1WdVpHVnlURzl2Y0NncE8xeHVJQ0FnSUNBZ0x5OGdTV1lnZEdocGN5QmpZV3hzWW1GamF5QnBjMjRuZENCaGJISmxZV1I1SUhOamFHVmtkV3hsWkNCMGJ5QnlkVzRnYm1WNGRDQm1jbUZ0WlZ4dUlDQWdJQ0FnYVdZZ0tHWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTG1sdVpHVjRUMllvWTJGc2JHSmhZMnNwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2Ym5OVWIxSjFiazVsZUhSR2NtRnRaUzV3ZFhOb0tHTmhiR3hpWVdOcktUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyRnVZMlZzT2lBb1kyRnNiR0poWTJzcElEMCtJSHRjYmlBZ0lDQWdJR052Ym5OMElHbHVaR1Y0VDJaRFlXeHNZbUZqYXlBOUlHWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTG1sdVpHVjRUMllvWTJGc2JHSmhZMnNwTzF4dUlDQWdJQ0FnYVdZZ0tHbHVaR1Y0VDJaRFlXeHNZbUZqYXlBaFBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YzNCc2FXTmxLR2x1WkdWNFQyWkRZV3hzWW1GamF5d2dNU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSEJ5YjJObGMzTTZJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDOHZJRk4zWVhBZ2RHaHBjeUJtY21GdFpTQmhibVFnYm1WNGRDQm1jbUZ0WlNCaGNuSmhlWE1nZEc4Z1lYWnZhV1FnUjBOY2JpQWdJQ0FnSUZ0bWRXNWpkR2x2Ym5OVWIxSjFiaXdnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVmRJRDBnVzJaMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxMQ0JtZFc1amRHbHZibk5VYjFKMWJsMDdYRzVjYmlBZ0lDQWdJQzh2SUVOc1pXRnlJRzVsZUhRZ1puSmhiV1VnYkdsemRGeHVJQ0FnSUNBZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YkdWdVozUm9JRDBnTUR0Y2JseHVJQ0FnSUNBZ0x5OGdSWGhsWTNWMFpTQmhiR3dnYjJZZ2RHaHBjeUJtY21GdFpTZHpJR1oxYm1OMGFXOXVjMXh1SUNBZ0lDQWdZMjl1YzNRZ2JuVnRWR2hwYzBaeVlXMWxJRDBnWm5WdVkzUnBiMjV6Vkc5U2RXNHViR1Z1WjNSb08xeHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFVYUdselJuSmhiV1U3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZibk5VYjFKMWJsdHBYU2dwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZUdGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL2NyZWF0ZS1yZW5kZXItc3RlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcbnZhciB0cmFuc2xhdGVNYXAgPSB7XG4gIHg6IFRSQU5TTEFURSArICdYJyxcbiAgeTogVFJBTlNMQVRFICsgJ1knLFxuICB6OiBUUkFOU0xBVEUgKyAnWidcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkU3R5bGVQcm9wZXJ0eVN0cmluZyhzdGF0ZSwgY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgdmFyIHByb3BlcnR5U3RyaW5nID0gJyc7XG4gIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSAnJztcbiAgdmFyIGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICB2YXIgdHJhbnNmb3JtSGFzWiA9IGZhbHNlO1xuXG4gIC8vIEZpcnN0IGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgY2hhbmdlZCB0cmFuc2Zvcm0gdmFsdWVzXG4gIC8vIGFuZCBpZiB0cnVlIGFkZCBhbGwgdHJhbnNmb3JtIHZhbHVlc1xuICB2YXIgbnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNoYW5nZWRWYWx1ZXM7IGkrKykge1xuICAgIHZhciBrZXkgPSBjaGFuZ2VkVmFsdWVzW2ldO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBwcm9wZXJ0eSwgYWRkIGFsbCBvdGhlciB0cmFuc2Zvcm0gcHJvcHNcbiAgICAvLyB0byBjaGFuZ2VkVmFsdWVzIGFuZCB0aGVuIGJyZWFrXG4gICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuXG4gICAgICBmb3IgKHZhciBfa2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRbX2tleV0gJiYgY2hhbmdlZFZhbHVlcy5pbmRleE9mKF9rZXkpID09PSAtMSkge1xuICAgICAgICAgIGNoYW5nZWRWYWx1ZXMucHVzaChfa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgdG90YWxOdW1DaGFuZ2VkVmFsdWVzID0gY2hhbmdlZFZhbHVlcy5sZW5ndGg7XG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCB0b3RhbE51bUNoYW5nZWRWYWx1ZXM7IF9pKyspIHtcbiAgICB2YXIgX2tleTIgPSBjaGFuZ2VkVmFsdWVzW19pXTtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZVtfa2V5Ml07XG5cbiAgICBpZiAodHJhbnNsYXRlTWFwW19rZXkyXSkge1xuICAgICAgX2tleTIgPSB0cmFuc2xhdGVNYXBbX2tleTJdO1xuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSBudW1iZXIgb3Igb2JqZWN0IGFuZCB3ZSBoYXZlIGZpbHRlciwgYXBwbHkgZmlsdGVyXG4gICAgaWYgKF92YWx1ZVR5cGVzMi5kZWZhdWx0W19rZXkyXSAmJiAoKDAsIF91dGlscy5pc051bSkodmFsdWUpIHx8ICgwLCBfdXRpbHMuaXNPYmopKHZhbHVlKSkgJiYgX3ZhbHVlVHlwZXMyLmRlZmF1bHRbX2tleTJdLnRyYW5zZm9ybSkge1xuICAgICAgdmFsdWUgPSBfdmFsdWVUeXBlczIuZGVmYXVsdFtfa2V5Ml0udHJhbnNmb3JtKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W19rZXkyXSkge1xuICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IF9rZXkyICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgdHJhbnNmb3JtSGFzWiA9IF9rZXkyID09PSB0cmFuc2xhdGVNYXAueiA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShfa2V5MiwgdHJ1ZSkgKyAnOicgKyB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSBoYXZlIHRyYW5zZm9ybSBwcm9wcywgYnVpbGQgYSB0cmFuc2Zvcm0gc3RyaW5nXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSB0cmFuc2xhdGVNYXAueiArICcoMCknO1xuICAgIH1cblxuICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKCd0cmFuc2Zvcm0nLCB0cnVlKSArICc6JyArIHRyYW5zZm9ybVN0cmluZztcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eVN0cmluZztcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlcywgY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgdmFyIHByb3BlcnR5U3RyaW5nID0gYnVpbGRTdHlsZVByb3BlcnR5U3RyaW5nKHZhbHVlcywgY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pO1xuICBlbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gcHJvcGVydHlTdHJpbmc7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzSmxibVJsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUpVVWtGT1UweEJWRVVpTENKMGNtRnVjMnhoZEdWTllYQWlMQ0o0SWl3aWVTSXNJbm9pTENKaWRXbHNaRk4wZVd4bFVISnZjR1Z5ZEhsVGRISnBibWNpTENKemRHRjBaU0lzSW1Ob1lXNW5aV1JXWVd4MVpYTWlMQ0psYm1GaWJHVklZWEprZDJGeVpVRmpZMlZzWlhKaGRHbHZiaUlzSW5CeWIzQmxjblI1VTNSeWFXNW5JaXdpZEhKaGJuTm1iM0p0VTNSeWFXNW5JaXdpYUdGelZISmhibk5tYjNKdElpd2lkSEpoYm5ObWIzSnRTR0Z6V2lJc0ltNTFiVU5vWVc1blpXUldZV3gxWlhNaUxDSnNaVzVuZEdnaUxDSnBJaXdpYTJWNUlpd2lhVzVrWlhoUFppSXNJbkIxYzJnaUxDSjBiM1JoYkU1MWJVTm9ZVzVuWldSV1lXeDFaWE1pTENKMllXeDFaU0lzSW5SeVlXNXpabTl5YlNJc0ltVnNaVzFsYm5RaUxDSjJZV3gxWlhNaUxDSnpkSGxzWlNJc0ltTnpjMVJsZUhRaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVWQkxFbEJRVTFCTEZsQlFWa3NWMEZCYkVJN1FVRkRRU3hKUVVGTlF5eGxRVUZsTzBGQlEyNUNReXhMUVVGSFJpeFpRVUZaTEVkQlJFazdRVUZGYmtKSExFdEJRVWRJTEZsQlFWa3NSMEZHU1R0QlFVZHVRa2tzUzBGQlIwb3NXVUZCV1R0QlFVaEpMRU5CUVhKQ096dEJRVTFCTEZOQlFWTkxMSGRDUVVGVUxFTkJRV3REUXl4TFFVRnNReXhGUVVGNVEwTXNZVUZCZWtNc1JVRkJkMFJETERCQ1FVRjRSQ3hGUVVGdlJqdEJRVU5zUml4TlFVRkpReXhwUWtGQmFVSXNSVUZCY2tJN1FVRkRRU3hOUVVGSlF5eHJRa0ZCYTBJc1JVRkJkRUk3UVVGRFFTeE5RVUZKUXl4bFFVRmxMRXRCUVc1Q08wRkJRMEVzVFVGQlNVTXNaMEpCUVdkQ0xFdEJRWEJDT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hOUVVGTlF5eHRRa0ZCYlVKT0xHTkJRV05QTEUxQlFYWkRPMEZCUTBFc1QwRkJTeXhKUVVGSlF5eEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWxHTEdkQ1FVRndRaXhGUVVGelEwVXNSMEZCZEVNc1JVRkJNa003UVVGRGVrTXNVVUZCVFVNc1RVRkJUVlFzWTBGQlkxRXNRMEZCWkN4RFFVRmFPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFJRVUZKTEhsQ1FVRmxReXhIUVVGbUxFTkJRVW9zUlVGQmVVSTdRVUZEZGtKTUxIRkNRVUZsTEVsQlFXWTdPMEZCUlVFc1YwRkJTeXhKUVVGSlN5eEpRVUZVTEVsQlFXZENWaXhMUVVGb1FpeEZRVUYxUWp0QlFVTnlRaXhaUVVGSkxIbENRVUZsVlN4SlFVRm1MRXRCUVhWQ1ZDeGpRVUZqVlN4UFFVRmtMRU5CUVhOQ1JDeEpRVUYwUWl4TlFVRXJRaXhEUVVGRExFTkJRVE5FTEVWQlFUaEVPMEZCUXpWRVZDeDNRa0ZCWTFjc1NVRkJaQ3hEUVVGdFFrWXNTVUZCYmtJN1FVRkRSRHRCUVVOR096dEJRVVZFTzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3hOUVVGTlJ5eDNRa0ZCZDBKYUxHTkJRV05QTEUxQlFUVkRPMEZCUTBFc1QwRkJTeXhKUVVGSlF5eExRVUZKTEVOQlFXSXNSVUZCWjBKQkxFdEJRVWxKTEhGQ1FVRndRaXhGUVVFeVEwb3NTVUZCTTBNc1JVRkJaMFE3UVVGRE9VTXNVVUZCU1VNc1VVRkJUVlFzWTBGQlkxRXNSVUZCWkN4RFFVRldPMEZCUTBFc1VVRkJTVXNzVVVGQlVXUXNUVUZCVFZVc1MwRkJUaXhEUVVGYU96dEJRVVZCTEZGQlFVbG1MR0ZCUVdGbExFdEJRV0lzUTBGQlNpeEZRVUYxUWp0QlFVTnlRa0VzWTBGQlRXWXNZVUZCWVdVc1MwRkJZaXhEUVVGT08wRkJRMFE3TzBGQlJVUTdRVUZEUVN4UlFVRkpMSEZDUVVGWFFTeExRVUZZTEUxQlFXOUNMR3RDUVVGTlNTeExRVUZPTEV0QlFXZENMR3RDUVVGTlFTeExRVUZPTEVOQlFYQkRMRXRCUVhGRUxIRkNRVUZYU2l4TFFVRllMRVZCUVdkQ1N5eFRRVUY2UlN4RlFVRnZSanRCUVVOc1JrUXNZMEZCVVN4eFFrRkJWMG9zUzBGQldDeEZRVUZuUWtzc1UwRkJhRUlzUTBGQk1FSkVMRXRCUVRGQ0xFTkJRVkk3UVVGRFJEczdRVUZGUkN4UlFVRkpMSGxDUVVGbFNpeExRVUZtTEVOQlFVb3NSVUZCZVVJN1FVRkRka0pPTEhsQ1FVRnRRazBzVVVGQlRTeEhRVUZPTEVkQlFWbEpMRXRCUVZvc1IwRkJiMElzU1VGQmRrTTdRVUZEUVZJc2MwSkJRV2xDU1N4VlFVRlJaaXhoUVVGaFJ5eERRVUYwUWl4SFFVRXlRaXhKUVVFelFpeEhRVUZyUTFFc1lVRkJiRVE3UVVGRlJDeExRVXBFTEUxQlNVODdRVUZEVEVnc2QwSkJRV3RDTEUxQlFVMHNkMEpCUVZOUExFdEJRVlFzUlVGQll5eEpRVUZrTEVOQlFVNHNSMEZCTkVJc1IwRkJOVUlzUjBGQmEwTkpMRXRCUVhCRU8wRkJRMFE3UVVGRFJqczdRVUZGUkR0QlFVTkJMRTFCUVVsVUxGbEJRVW9zUlVGQmEwSTdRVUZEYUVJc1VVRkJTU3hEUVVGRFF5eGhRVUZFTEVsQlFXdENTaXd3UWtGQmRFSXNSVUZCYTBRN1FVRkRhRVJGTEhsQ1FVRnRRbFFzWVVGQllVY3NRMEZCWWl4SFFVRnBRaXhMUVVGd1F6dEJRVU5FT3p0QlFVVkVTeXh6UWtGQmEwSXNUVUZCVFN4M1FrRkJVeXhYUVVGVUxFVkJRWE5DTEVsQlFYUkNMRU5CUVU0c1IwRkJiME1zUjBGQmNFTXNSMEZCTUVORExHVkJRVFZFTzBGQlEwUTdPMEZCUlVRc1UwRkJUMFFzWTBGQlVEdEJRVU5FT3p0clFrRkZZeXhWUVVGRFlTeFBRVUZFTEVWQlFWVkRMRTFCUVZZc1JVRkJhMEpvUWl4aFFVRnNRaXhGUVVGcFEwTXNNRUpCUVdwRExFVkJRV2RGTzBGQlF6ZEZMRTFCUVUxRExHbENRVUZwUWtvc2VVSkJRWGxDYTBJc1RVRkJla0lzUlVGQmFVTm9RaXhoUVVGcVF5eEZRVUZuUkVNc01FSkJRV2hFTEVOQlFYWkNPMEZCUTBGakxGVkJRVkZGTEV0QlFWSXNRMEZCWTBNc1QwRkJaQ3hKUVVGNVFtaENMR05CUVhwQ08wRkJRMFFzUXlJc0ltWnBiR1VpT2lKeVpXNWtaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1puSnZiU0FuTGk5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUhaaGJIVmxWSGx3WlhNZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5YzdYRzVwYlhCdmNuUWdjSEpsWm1sNFpYSWdabkp2YlNBbkxpOXdjbVZtYVhobGNpYzdYRzVwYlhCdmNuUWdleUJwYzA1MWJTd2dhWE5QWW1vZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCVVVrRk9VMHhCVkVVZ1BTQW5kSEpoYm5Oc1lYUmxKenRjYm1OdmJuTjBJSFJ5WVc1emJHRjBaVTFoY0NBOUlIdGNiaUFnZURvZ1ZGSkJUbE5NUVZSRklDc2dKMWduTEZ4dUlDQjVPaUJVVWtGT1UweEJWRVVnS3lBbldTY3NYRzRnSUhvNklGUlNRVTVUVEVGVVJTQXJJQ2RhSjF4dWZUdGNibHh1Wm5WdVkzUnBiMjRnWW5WcGJHUlRkSGxzWlZCeWIzQmxjblI1VTNSeWFXNW5LSE4wWVhSbExDQmphR0Z1WjJWa1ZtRnNkV1Z6TENCbGJtRmliR1ZJWVhKa2QyRnlaVUZqWTJWc1pYSmhkR2x2YmlrZ2UxeHVJQ0JzWlhRZ2NISnZjR1Z5ZEhsVGRISnBibWNnUFNBbkp6dGNiaUFnYkdWMElIUnlZVzV6Wm05eWJWTjBjbWx1WnlBOUlDY25PMXh1SUNCc1pYUWdhR0Z6VkhKaGJuTm1iM0p0SUQwZ1ptRnNjMlU3WEc0Z0lHeGxkQ0IwY21GdWMyWnZjbTFJWVhOYUlEMGdabUZzYzJVN1hHNWNiaUFnTHk4Z1JtbHljM1FnWTJobFkyc2dhV1lnZEdobGNtVWdZWEpsSUdGdWVTQmphR0Z1WjJWa0lIUnlZVzV6Wm05eWJTQjJZV3gxWlhOY2JpQWdMeThnWVc1a0lHbG1JSFJ5ZFdVZ1lXUmtJR0ZzYkNCMGNtRnVjMlp2Y20wZ2RtRnNkV1Z6WEc0Z0lHTnZibk4wSUc1MWJVTm9ZVzVuWldSV1lXeDFaWE1nUFNCamFHRnVaMlZrVm1Gc2RXVnpMbXhsYm1kMGFEdGNiaUFnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMURhR0Z1WjJWa1ZtRnNkV1Z6T3lCcEt5c3BJSHRjYmlBZ0lDQmpiMjV6ZENCclpYa2dQU0JqYUdGdVoyVmtWbUZzZFdWelcybGRPMXh1WEc0Z0lDQWdMeThnU1dZZ2RHaHBjeUJwY3lCaElIUnlZVzV6Wm05eWJTQndjbTl3WlhKMGVTd2dZV1JrSUdGc2JDQnZkR2hsY2lCMGNtRnVjMlp2Y20wZ2NISnZjSE5jYmlBZ0lDQXZMeUIwYnlCamFHRnVaMlZrVm1Gc2RXVnpJR0Z1WkNCMGFHVnVJR0p5WldGclhHNGdJQ0FnYVdZZ0tIUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJR2hoYzFSeVlXNXpabTl5YlNBOUlIUnlkV1U3WEc1Y2JpQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ6ZEdGMFpTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTQW1KaUJqYUdGdVoyVmtWbUZzZFdWekxtbHVaR1Y0VDJZb2EyVjVLU0E5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnSUNCamFHRnVaMlZrVm1Gc2RXVnpMbkIxYzJnb2EyVjVLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JqYjI1emRDQjBiM1JoYkU1MWJVTm9ZVzVuWldSV1lXeDFaWE1nUFNCamFHRnVaMlZrVm1Gc2RXVnpMbXhsYm1kMGFEdGNiaUFnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGIzUmhiRTUxYlVOb1lXNW5aV1JXWVd4MVpYTTdJR2tyS3lrZ2UxeHVJQ0FnSUd4bGRDQnJaWGtnUFNCamFHRnVaMlZrVm1Gc2RXVnpXMmxkTzF4dUlDQWdJR3hsZENCMllXeDFaU0E5SUhOMFlYUmxXMnRsZVYwN1hHNWNiaUFnSUNCcFppQW9kSEpoYm5Oc1lYUmxUV0Z3VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJR3RsZVNBOUlIUnlZVzV6YkdGMFpVMWhjRnRyWlhsZE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFbG1JSFJvYVhNZ2FYTWdZU0J1ZFcxaVpYSWdiM0lnYjJKcVpXTjBJR0Z1WkNCM1pTQm9ZWFpsSUdacGJIUmxjaXdnWVhCd2JIa2dabWxzZEdWeVhHNGdJQ0FnYVdZZ0tIWmhiSFZsVkhsd1pYTmJhMlY1WFNBbUppQW9hWE5PZFcwb2RtRnNkV1VwSUh4OElHbHpUMkpxS0haaGJIVmxLU2tnSmlZZ2RtRnNkV1ZVZVhCbGMxdHJaWGxkTG5SeVlXNXpabTl5YlNrZ2UxeHVJQ0FnSUNBZ2RtRnNkV1VnUFNCMllXeDFaVlI1Y0dWelcydGxlVjB1ZEhKaGJuTm1iM0p0S0haaGJIVmxLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ2RISmhibk5tYjNKdFUzUnlhVzVuSUNzOUlHdGxlU0FySUNjb0p5QXJJSFpoYkhWbElDc2dKeWtnSnp0Y2JpQWdJQ0FnSUhSeVlXNXpabTl5YlVoaGMxb2dQU0FvYTJWNUlEMDlQU0IwY21GdWMyeGhkR1ZOWVhBdWVpa2dQeUIwY25WbElEb2dkSEpoYm5ObWIzSnRTR0Z6V2p0Y2JseHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J3Y205d1pYSjBlVk4wY21sdVp5QXJQU0FuT3ljZ0t5QndjbVZtYVhobGNpaHJaWGtzSUhSeWRXVXBJQ3NnSnpvbklDc2dkbUZzZFdVN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ0x5OGdTV1lnZDJVZ2FHRjJaU0IwY21GdWMyWnZjbTBnY0hKdmNITXNJR0oxYVd4a0lHRWdkSEpoYm5ObWIzSnRJSE4wY21sdVoxeHVJQ0JwWmlBb2FHRnpWSEpoYm5ObWIzSnRLU0I3WEc0Z0lDQWdhV1lnS0NGMGNtRnVjMlp2Y20xSVlYTmFJQ1ltSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1NCN1hHNGdJQ0FnSUNCMGNtRnVjMlp2Y20xVGRISnBibWNnS3owZ2RISmhibk5zWVhSbFRXRndMbm9nS3lBbktEQXBKenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQndjbTl3WlhKMGVWTjBjbWx1WnlBclBTQW5PeWNnS3lCd2NtVm1hWGhsY2lnbmRISmhibk5tYjNKdEp5d2dkSEoxWlNrZ0t5QW5PaWNnS3lCMGNtRnVjMlp2Y20xVGRISnBibWM3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnY0hKdmNHVnlkSGxUZEhKcGJtYzdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNobGJHVnRaVzUwTENCMllXeDFaWE1zSUdOb1lXNW5aV1JXWVd4MVpYTXNJR1Z1WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVLU0E5UGlCN1hHNGdJR052Ym5OMElIQnliM0JsY25SNVUzUnlhVzVuSUQwZ1luVnBiR1JUZEhsc1pWQnliM0JsY25SNVUzUnlhVzVuS0haaGJIVmxjeXdnWTJoaGJtZGxaRlpoYkhWbGN5d2daVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNHBPMXh1SUNCbGJHVnRaVzUwTG5OMGVXeGxMbU56YzFSbGVIUWdLejBnY0hKdmNHVnlkSGxUZEhKcGJtYzdYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvcmVuZGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBheGVzID0gWydYJywgJ1knLCAnWiddO1xuXG52YXIgdHJhbnNmb3JtUHJvcHMgPSB7XG4gIHg6IHRydWUsXG4gIHk6IHRydWUsXG4gIHo6IHRydWVcbn07XG5cbnZhciBTQ0FMRSA9ICdzY2FsZSc7XG52YXIgUk9UQVRFID0gJ3JvdGF0ZSc7XG52YXIgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbnZhciBURVJNUyA9IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdO1xuXG50cmFuc2Zvcm1Qcm9wc1tST1RBVEVdID0gdHJhbnNmb3JtUHJvcHNbU0NBTEVdID0gdHJhbnNmb3JtUHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG5cblRFUk1TLmZvckVhY2goZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGF4ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXhpcykge1xuICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlO1xuICB9KTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2Zvcm1Qcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM1J5WVc1elptOXliUzF3Y205d2N5NXFjeUpkTENKdVlXMWxjeUk2V3lKaGVHVnpJaXdpZEhKaGJuTm1iM0p0VUhKdmNITWlMQ0o0SWl3aWVTSXNJbm9pTENKVFEwRk1SU0lzSWxKUFZFRlVSU0lzSWxSU1FVNVRSazlTVFY5UVJWSlRVRVZEVkVsV1JTSXNJbFJGVWsxVElpd2labTl5UldGamFDSXNJblJsY20waUxDSmhlR2x6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeEpRVUZOUVN4UFFVRlBMRU5CUVVNc1IwRkJSQ3hGUVVGTkxFZEJRVTRzUlVGQlZ5eEhRVUZZTEVOQlFXSTdPMEZCUlVFc1NVRkJTVU1zYVVKQlFXbENPMEZCUTI1Q1F5eExRVUZITEVsQlJHZENPMEZCUlc1Q1F5eExRVUZITEVsQlJtZENPMEZCUjI1Q1F5eExRVUZITzBGQlNHZENMRU5CUVhKQ096dEJRVTFCTEVsQlFVMURMRkZCUVZFc1QwRkJaRHRCUVVOQkxFbEJRVTFETEZOQlFWTXNVVUZCWmp0QlFVTkJMRWxCUVUxRExIZENRVUYzUWl4elFrRkJPVUk3UVVGRFFTeEpRVUZOUXl4UlFVRlJMRU5CUVVNc1YwRkJSQ3hGUVVGalNDeExRVUZrTEVWQlFYRkNReXhOUVVGeVFpeEZRVUUyUWl4TlFVRTNRaXhGUVVGeFEwTXNjVUpCUVhKRExFTkJRV1E3TzBGQlJVRk9MR1ZCUVdWTExFMUJRV1lzU1VGQmVVSk1MR1ZCUVdWSkxFdEJRV1lzU1VGQmQwSktMR1ZCUVdWTkxIRkNRVUZtTEVsQlFYZERMRWxCUVhwR096dEJRVVZCUXl4TlFVRk5ReXhQUVVGT0xFTkJRV01zVlVGQlEwTXNTVUZCUkR0QlFVRkJMRk5CUVZWV0xFdEJRVXRUTEU5QlFVd3NRMEZCWVN4VlFVRkRSU3hKUVVGRU8wRkJRVUVzVjBGQlZWWXNaVUZCWlZNc1QwRkJUME1zU1VGQmRFSXNTVUZCT0VJc1NVRkJlRU03UVVGQlFTeEhRVUZpTEVOQlFWWTdRVUZCUVN4RFFVRmtPenRyUWtGRlpWWXNZeUlzSW1acGJHVWlPaUowY21GdWMyWnZjbTB0Y0hKdmNITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCaGVHVnpJRDBnV3lkWUp5d2dKMWtuTENBbldpZGRPMXh1WEc1c1pYUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1BTQjdYRzRnSUhnNklIUnlkV1VzWEc0Z0lIazZJSFJ5ZFdVc1hHNGdJSG82SUhSeWRXVmNibjA3WEc1Y2JtTnZibk4wSUZORFFVeEZJRDBnSjNOallXeGxKenRjYm1OdmJuTjBJRkpQVkVGVVJTQTlJQ2R5YjNSaGRHVW5PMXh1WTI5dWMzUWdWRkpCVGxOR1QxSk5YMUJGVWxOUVJVTlVTVlpGSUQwZ0ozUnlZVzV6Wm05eWJWQmxjbk53WldOMGFYWmxKenRjYm1OdmJuTjBJRlJGVWsxVElEMGdXeWQwY21GdWMyeGhkR1VuTENCVFEwRk1SU3dnVWs5VVFWUkZMQ0FuYzJ0bGR5Y3NJRlJTUVU1VFJrOVNUVjlRUlZKVFVFVkRWRWxXUlYwN1hHNWNiblJ5WVc1elptOXliVkJ5YjNCelcxSlBWRUZVUlYwZ1BTQjBjbUZ1YzJadmNtMVFjbTl3YzF0VFEwRk1SVjBnUFNCMGNtRnVjMlp2Y20xUWNtOXdjMXRVVWtGT1UwWlBVazFmVUVWU1UxQkZRMVJKVmtWZElEMGdkSEoxWlR0Y2JseHVWRVZTVFZNdVptOXlSV0ZqYUNnb2RHVnliU2tnUFQ0Z1lYaGxjeTVtYjNKRllXTm9LQ2hoZUdsektTQTlQaUIwY21GdWMyWnZjbTFRY205d2MxdDBaWEp0SUNzZ1lYaHBjMTBnUFNCMGNuVmxLU2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUhSeVlXNXpabTl5YlZCeWIzQnpPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUvdHlwZXMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAvLyBDb2xvciBwcm9wc1xuICBjb2xvcjogX3R5cGVzLmNvbG9yLFxuICBiYWNrZ3JvdW5kQ29sb3I6IF90eXBlcy5jb2xvcixcbiAgb3V0bGluZUNvbG9yOiBfdHlwZXMuY29sb3IsXG4gIGZpbGw6IF90eXBlcy5jb2xvcixcbiAgc3Ryb2tlOiBfdHlwZXMuY29sb3IsXG5cbiAgLy8gQm9yZGVyIHByb3BzXG4gIGJvcmRlckNvbG9yOiBfdHlwZXMuY29sb3IsXG4gIGJvcmRlclRvcENvbG9yOiBfdHlwZXMuY29sb3IsXG4gIGJvcmRlclJpZ2h0Q29sb3I6IF90eXBlcy5jb2xvcixcbiAgYm9yZGVyQm90dG9tQ29sb3I6IF90eXBlcy5jb2xvcixcbiAgYm9yZGVyTGVmdENvbG9yOiBfdHlwZXMuY29sb3IsXG4gIGJvcmRlclJhZGl1czogX3R5cGVzLnB4LFxuXG4gIC8vIFBvc2l0aW9uaW5nXG4gIHdpZHRoOiBfdHlwZXMucHgsXG4gIGhlaWdodDogX3R5cGVzLnB4LFxuXG4gIC8vIFNoYWRvd3NcbiAgdGV4dFNoYWRvdzogX3R5cGVzLnNoYWRvdyxcbiAgYm94U2hhZG93OiBfdHlwZXMuc2hhZG93LFxuXG4gIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gIHJvdGF0ZTogX3R5cGVzLmFuZ2xlLFxuICByb3RhdGVYOiBfdHlwZXMuYW5nbGUsXG4gIHJvdGF0ZVk6IF90eXBlcy5hbmdsZSxcbiAgcm90YXRlWjogX3R5cGVzLmFuZ2xlLFxuICBzY2FsZTogX3R5cGVzLnNjYWxlLFxuICBzY2FsZVg6IF90eXBlcy5zY2FsZSxcbiAgc2NhbGVZOiBfdHlwZXMuc2NhbGUsXG4gIHNjYWxlWjogX3R5cGVzLnNjYWxlLFxuICBza2V3WDogX3R5cGVzLmFuZ2xlLFxuICBza2V3WTogX3R5cGVzLmFuZ2xlLFxuICBkaXN0YW5jZTogX3R5cGVzLnB4LFxuICB4OiBfdHlwZXMucHgsXG4gIHk6IF90eXBlcy5weCxcbiAgejogX3R5cGVzLnB4LFxuICBwZXJzcGVjdGl2ZTogX3R5cGVzLnB4LFxuICBvcGFjaXR5OiBfdHlwZXMuYWxwaGFcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNaaGJIVmxMWFI1Y0dWekxtcHpJbDBzSW01aGJXVnpJanBiSW1OdmJHOXlJaXdpWW1GamEyZHliM1Z1WkVOdmJHOXlJaXdpYjNWMGJHbHVaVU52Ykc5eUlpd2labWxzYkNJc0luTjBjbTlyWlNJc0ltSnZjbVJsY2tOdmJHOXlJaXdpWW05eVpHVnlWRzl3UTI5c2IzSWlMQ0ppYjNKa1pYSlNhV2RvZEVOdmJHOXlJaXdpWW05eVpHVnlRbTkwZEc5dFEyOXNiM0lpTENKaWIzSmtaWEpNWldaMFEyOXNiM0lpTENKaWIzSmtaWEpTWVdScGRYTWlMQ0ozYVdSMGFDSXNJbWhsYVdkb2RDSXNJblJsZUhSVGFHRmtiM2NpTENKaWIzaFRhR0ZrYjNjaUxDSnliM1JoZEdVaUxDSnliM1JoZEdWWUlpd2ljbTkwWVhSbFdTSXNJbkp2ZEdGMFpWb2lMQ0p6WTJGc1pTSXNJbk5qWVd4bFdDSXNJbk5qWVd4bFdTSXNJbk5qWVd4bFdpSXNJbk5yWlhkWUlpd2ljMnRsZDFraUxDSmthWE4wWVc1alpTSXNJbmdpTENKNUlpd2llaUlzSW5CbGNuTndaV04wYVhabElpd2liM0JoWTJsMGVTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0clFrRkRaVHRCUVVOaU8wRkJRMEZCTEhGQ1FVWmhPMEZCUjJKRExDdENRVWhoTzBGQlNXSkRMRFJDUVVwaE8wRkJTMkpETEc5Q1FVeGhPMEZCVFdKRExITkNRVTVoT3p0QlFWRmlPMEZCUTBGRExESkNRVlJoTzBGQlZXSkRMRGhDUVZaaE8wRkJWMkpETEdkRFFWaGhPMEZCV1dKRExHbERRVnBoTzBGQllXSkRMQ3RDUVdKaE8wRkJZMkpETEhsQ1FXUmhPenRCUVdkQ1lqdEJRVU5CUXl4clFrRnFRbUU3UVVGclFtSkRMRzFDUVd4Q1lUczdRVUZ2UW1JN1FVRkRRVU1zTWtKQmNrSmhPMEZCYzBKaVF5d3dRa0YwUW1FN08wRkJkMEppTzBGQlEwRkRMSE5DUVhwQ1lUdEJRVEJDWWtNc2RVSkJNVUpoTzBGQk1rSmlReXgxUWtFelFtRTdRVUUwUW1KRExIVkNRVFZDWVR0QlFUWkNZa01zY1VKQk4wSmhPMEZCT0VKaVF5eHpRa0U1UW1FN1FVRXJRbUpETEhOQ1FTOUNZVHRCUVdkRFlrTXNjMEpCYUVOaE8wRkJhVU5pUXl4eFFrRnFRMkU3UVVGclEySkRMSEZDUVd4RFlUdEJRVzFEWWtNc2NVSkJia05oTzBGQmIwTmlReXhqUVhCRFlUdEJRWEZEWWtNc1kwRnlRMkU3UVVGelEySkRMR05CZEVOaE8wRkJkVU5pUXl4M1FrRjJRMkU3UVVGM1EySkRPMEZCZUVOaExFTWlMQ0ptYVd4bElqb2lkbUZzZFdVdGRIbHdaWE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJoYm1kc1pTd2dZV3h3YUdFc0lHTnZiRzl5TENCelkyRnNaU3dnYzJoaFpHOTNMQ0J3ZUNCOUlHWnliMjBnSnk0dUx5NHVMM1poYkhWbEwzUjVjR1Z6SnpzZ1hHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQzh2SUVOdmJHOXlJSEJ5YjNCelhHNGdJR052Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdZbUZqYTJkeWIzVnVaRU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdiM1YwYkdsdVpVTnZiRzl5T2lCamIyeHZjaXhjYmlBZ1ptbHNiRG9nWTI5c2IzSXNYRzRnSUhOMGNtOXJaVG9nWTI5c2IzSXNYRzVjYmlBZ0x5OGdRbTl5WkdWeUlIQnliM0J6WEc0Z0lHSnZjbVJsY2tOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnWW05eVpHVnlWRzl3UTI5c2IzSTZJR052Ykc5eUxGeHVJQ0JpYjNKa1pYSlNhV2RvZEVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnWW05eVpHVnlRbTkwZEc5dFEyOXNiM0k2SUdOdmJHOXlMRnh1SUNCaWIzSmtaWEpNWldaMFEyOXNiM0k2SUdOdmJHOXlMRnh1SUNCaWIzSmtaWEpTWVdScGRYTTZJSEI0TEZ4dVhHNGdJQzh2SUZCdmMybDBhVzl1YVc1blhHNGdJSGRwWkhSb09pQndlQ3hjYmlBZ2FHVnBaMmgwT2lCd2VDeGNibHh1SUNBdkx5QlRhR0ZrYjNkelhHNGdJSFJsZUhSVGFHRmtiM2M2SUhOb1lXUnZkeXhjYmlBZ1ltOTRVMmhoWkc5M09pQnphR0ZrYjNjc0lDQWdYRzVjYmlBZ0x5OGdWSEpoYm5ObWIzSnRJSEJ5YjNCbGNuUnBaWE5jYmlBZ2NtOTBZWFJsT2lCaGJtZHNaU3hjYmlBZ2NtOTBZWFJsV0RvZ1lXNW5iR1VzWEc0Z0lISnZkR0YwWlZrNklHRnVaMnhsTEZ4dUlDQnliM1JoZEdWYU9pQmhibWRzWlN4Y2JpQWdjMk5oYkdVNklITmpZV3hsTEZ4dUlDQnpZMkZzWlZnNklITmpZV3hsTEZ4dUlDQnpZMkZzWlZrNklITmpZV3hsTEZ4dUlDQnpZMkZzWlZvNklITmpZV3hsTEZ4dUlDQnphMlYzV0RvZ1lXNW5iR1VzWEc0Z0lITnJaWGRaT2lCaGJtZHNaU3hjYmlBZ1pHbHpkR0Z1WTJVNklIQjRMRnh1SUNCNE9pQndlQ3hjYmlBZ2VUb2djSGdzWEc0Z0lIbzZJSEI0TEZ4dUlDQndaWEp6Y0dWamRHbDJaVG9nY0hnc1hHNGdJRzl3WVdOcGRIazZJR0ZzY0doaFhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy92YWx1ZS10eXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIGNhbWVsQ2FjaGUgPSB7fTtcbnZhciBkYXNoQ2FjaGUgPSB7fTtcbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJywgJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHRlc3RFbGVtZW50ID0gdm9pZCAwO1xuXG4vKlxuICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gIFxuICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIHZhciBub1ByZWZpeCA9IHByZWZpeCA9PT0gJyc7XG4gICAgdmFyIHByZWZpeGVkUHJvcGVydHlOYW1lID0gbm9QcmVmaXggPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICBpZiAocHJlZml4ZWRQcm9wZXJ0eU5hbWUgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgIGNhbWVsQ2FjaGVba2V5XSA9IHByZWZpeGVkUHJvcGVydHlOYW1lO1xuICAgICAgZGFzaENhY2hlW2tleV0gPSAnJyArIChub1ByZWZpeCA/ICcnIDogJy0nKSArICgwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKHByZWZpeGVkUHJvcGVydHlOYW1lKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChrZXksIGFzRGFzaENhc2UpIHtcbiAgdmFyIGNhY2hlID0gYXNEYXNoQ2FzZSA/IGRhc2hDYWNoZSA6IGNhbWVsQ2FjaGU7XG5cbiAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgdGVzdFByZWZpeChrZXkpO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzQnlaV1pwZUdWeUxtcHpJbDBzSW01aGJXVnpJanBiSW1OaGJXVnNRMkZqYUdVaUxDSmtZWE5vUTJGamFHVWlMQ0p3Y21WbWFYaGxjeUlzSW01MWJWQnlaV1pwZUdWeklpd2liR1Z1WjNSb0lpd2lkR1Z6ZEVWc1pXMWxiblFpTENKMFpYTjBVSEpsWm1sNElpd2lhMlY1SWl3aVpHOWpkVzFsYm5RaUxDSmpjbVZoZEdWRmJHVnRaVzUwSWl3aWFTSXNJbkJ5WldacGVDSXNJbTV2VUhKbFptbDRJaXdpY0hKbFptbDRaV1JRY205d1pYSjBlVTVoYldVaUxDSmphR0Z5UVhRaUxDSjBiMVZ3Y0dWeVEyRnpaU0lzSW5Oc2FXTmxJaXdpYzNSNWJHVWlMQ0poYzBSaGMyaERZWE5sSWl3aVkyRmphR1VpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdRVUZGUVN4SlFVRk5RU3hoUVVGaExFVkJRVzVDTzBGQlEwRXNTVUZCVFVNc1dVRkJXU3hGUVVGc1FqdEJRVU5CTEVsQlFVMURMRmRCUVZjc1EwRkJReXhSUVVGRUxFVkJRVlVzUzBGQlZpeEZRVUZuUWl4SFFVRm9RaXhGUVVGdlFpeEpRVUZ3UWl4RlFVRXdRaXhGUVVFeFFpeERRVUZxUWp0QlFVTkJMRWxCUVUxRExHTkJRV05FTEZOQlFWTkZMRTFCUVRkQ08wRkJRMEVzU1VGQlNVTXNiMEpCUVVvN08wRkJSVUU3T3pzN096dEJRVTFCTEVsQlFVMURMR0ZCUVdFc1ZVRkJRME1zUjBGQlJDeEZRVUZUTzBGQlF6RkNSaXhuUWtGQlkwRXNaVUZCWlVjc1UwRkJVME1zWVVGQlZDeERRVUYxUWl4TFFVRjJRaXhEUVVFM1FqczdRVUZGUVN4UFFVRkxMRWxCUVVsRExFbEJRVWtzUTBGQllpeEZRVUZuUWtFc1NVRkJTVkFzVjBGQmNFSXNSVUZCYVVOUExFZEJRV3BETEVWQlFYTkRPMEZCUTNCRExGRkJRVTFETEZOQlFWTlVMRk5CUVZOUkxFTkJRVlFzUTBGQlpqdEJRVU5CTEZGQlFVMUZMRmRCUVZsRUxGZEJRVmNzUlVGQk4wSTdRVUZEUVN4UlFVRk5SU3gxUWtGQmRVSkVMRmRCUVZkTUxFZEJRVmdzUjBGQmFVSkpMRk5CUVZOS0xFbEJRVWxQTEUxQlFVb3NRMEZCVnl4RFFVRllMRVZCUVdORExGZEJRV1FzUlVGQlZDeEhRVUYxUTFJc1NVRkJTVk1zUzBGQlNpeERRVUZWTEVOQlFWWXNRMEZCY2tZN08wRkJSVUVzVVVGQlNVZ3NkMEpCUVhkQ1VpeFpRVUZaV1N4TFFVRjRReXhGUVVFclF6dEJRVU0zUTJwQ0xHbENRVUZYVHl4SFFVRllMRWxCUVd0Q1RTeHZRa0ZCYkVJN1FVRkRRVm9zWjBKQlFWVk5MRWRCUVZZc1ZVRkJjVUpMTEZkQlFWY3NSVUZCV0N4SFFVRm5RaXhIUVVGeVF5eEpRVUUwUXl4M1FrRkJXVU1zYjBKQlFWb3NRMEZCTlVNN1FVRkRSRHRCUVVOR08wRkJRMFlzUTBGaVJEczdhMEpCWldVc1ZVRkJRMDRzUjBGQlJDeEZRVUZOVnl4VlFVRk9MRVZCUVhGQ08wRkJRMnhETEUxQlFVMURMRkZCUVZGRUxHRkJRV0ZxUWl4VFFVRmlMRWRCUVhsQ1JDeFZRVUYyUXpzN1FVRkZRU3hOUVVGSkxFTkJRVU50UWl4TlFVRk5XaXhIUVVGT0xFTkJRVXdzUlVGQmFVSTdRVUZEWmtRc1pVRkJWME1zUjBGQldEdEJRVU5FT3p0QlFVVkVMRk5CUVU5WkxFMUJRVTFhTEVkQlFVNHNRMEZCVUR0QlFVTkVMRU1pTENKbWFXeGxJam9pY0hKbFptbDRaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJqWVcxbGJGUnZSR0Z6YUNCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtTnZibk4wSUdOaGJXVnNRMkZqYUdVZ1BTQjdmVHRjYm1OdmJuTjBJR1JoYzJoRFlXTm9aU0E5SUh0OU8xeHVZMjl1YzNRZ2NISmxabWw0WlhNZ1BTQmJKMWRsWW10cGRDY3NKMDF2ZWljc0owOG5MQ2R0Y3ljc0lDY25YVHRjYm1OdmJuTjBJRzUxYlZCeVpXWnBlR1Z6SUQwZ2NISmxabWw0WlhNdWJHVnVaM1JvTzF4dWJHVjBJSFJsYzNSRmJHVnRaVzUwTzF4dVhHNHZLbHh1SUNCVVpYTjBJSE4wZVd4bElIQnliM0JsY25SNUlHWnZjaUJ3Y21WbWFYaGxaQ0IyWlhKemFXOXVYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGTjBlV3hsSUhCeWIzQmxjblI1WEc0Z0lFQnlaWFIxY200Z1czTjBjbWx1WjEwNklFTmhZMmhsWkNCd2NtOXdaWEowZVNCdVlXMWxYRzRxTDF4dVkyOXVjM1FnZEdWemRGQnlaV1pwZUNBOUlDaHJaWGtwSUQwK0lIdGNiaUFnZEdWemRFVnNaVzFsYm5RZ1BTQjBaWE4wUld4bGJXVnVkQ0I4ZkNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ2RrYVhZbktUdGNibHh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVkJ5WldacGVHVnpPeUJwS3lzcElIdGNiaUFnSUNCamIyNXpkQ0J3Y21WbWFYZ2dQU0J3Y21WbWFYaGxjMXRwWFR0Y2JpQWdJQ0JqYjI1emRDQnViMUJ5WldacGVDQTlJQ2h3Y21WbWFYZ2dQVDA5SUNjbktUdGNiaUFnSUNCamIyNXpkQ0J3Y21WbWFYaGxaRkJ5YjNCbGNuUjVUbUZ0WlNBOUlHNXZVSEpsWm1sNElEOGdhMlY1SURvZ2NISmxabWw0SUNzZ2EyVjVMbU5vWVhKQmRDZ3dLUzUwYjFWd2NHVnlRMkZ6WlNncElDc2dhMlY1TG5Oc2FXTmxLREVwTzF4dVhHNGdJQ0FnYVdZZ0tIQnlaV1pwZUdWa1VISnZjR1Z5ZEhsT1lXMWxJR2x1SUhSbGMzUkZiR1Z0Wlc1MExuTjBlV3hsS1NCN1hHNGdJQ0FnSUNCallXMWxiRU5oWTJobFcydGxlVjBnUFNCd2NtVm1hWGhsWkZCeWIzQmxjblI1VG1GdFpUdGNiaUFnSUNBZ0lHUmhjMmhEWVdOb1pWdHJaWGxkSUQwZ1lDUjdLRzV2VUhKbFptbDRJRDhnSnljZ09pQW5MU2NwZlNSN1kyRnRaV3hVYjBSaGMyZ29jSEpsWm1sNFpXUlFjbTl3WlhKMGVVNWhiV1VwZldBN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2EyVjVMQ0JoYzBSaGMyaERZWE5sS1NBOVBpQjdYRzRnSUdOdmJuTjBJR05oWTJobElEMGdZWE5FWVhOb1EyRnpaU0EvSUdSaGMyaERZV05vWlNBNklHTmhiV1ZzUTJGamFHVTdYRzVjYmlBZ2FXWWdLQ0ZqWVdOb1pWdHJaWGxkS1NCN1hHNGdJQ0FnZEdWemRGQnlaV1pwZUNoclpYa3BPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJR05oWTJobFcydGxlVjA3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL3ByZWZpeGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29sb3IgPSBleHBvcnRzLmhzbGEgPSBleHBvcnRzLmhleCA9IGV4cG9ydHMucmdiYSA9IGV4cG9ydHMucmdiVW5pdCA9IGV4cG9ydHMuc2NhbGUgPSBleHBvcnRzLnB4ID0gZXhwb3J0cy5wZXJjZW50ID0gZXhwb3J0cy5kZWdyZWVzID0gZXhwb3J0cy5hbHBoYSA9IGV4cG9ydHMubnVtYmVyID0gdW5kZWZpbmVkO1xuXG52YXIgX2NoaWxkVHlwZXMsIF9jaGlsZFR5cGVzMjtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBWYWx1ZSB0eXBlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGFscGhhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBkZWdyZWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBoZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGhzbGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHBlcmNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHB4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiByZ2JVbml0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiByZ2JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHNjYWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuLy8gU3RyaW5nIHByb3BlcnRpZXNcbnZhciBSRUQgPSAnUmVkJztcbnZhciBHUkVFTiA9ICdHcmVlbic7XG52YXIgQkxVRSA9ICdCbHVlJztcbnZhciBBTFBIQSA9ICdBbHBoYSc7XG52YXIgSFVFID0gJ0h1ZSc7XG52YXIgU0FUVVJBVElPTiA9ICdTYXR1cmF0aW9uJztcbnZhciBMSUdIVE5FU1MgPSAnTGlnaHRuZXNzJztcblxuLy8gVGVtcGxhdGVzXG52YXIgcmdiYVRlbXBsYXRlID0gZnVuY3Rpb24gKGNvbG9ycykge1xuICByZXR1cm4gJ3JnYmEoJyArIGNvbG9yc1tSRURdICsgJywgJyArIGNvbG9yc1tHUkVFTl0gKyAnLCAnICsgY29sb3JzW0JMVUVdICsgJywgJyArIGNvbG9yc1tBTFBIQV0gKyAnKSc7XG59O1xudmFyIGhzbGFUZW1wbGF0ZSA9IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgcmV0dXJuICdoc2xhKCcgKyBjb2xvcnNbSFVFXSArICcsICcgKyBjb2xvcnNbU0FUVVJBVElPTl0gKyAnLCAnICsgY29sb3JzW0xJR0hUTkVTU10gKyAnLCAnICsgY29sb3JzW0FMUEhBXSArICcpJztcbn07XG5cbnZhciBudW1iZXIgPSBleHBvcnRzLm51bWJlciA9IHtcbiAgdGVzdDogX3V0aWxzMi5pc051bSxcbiAgcGFyc2U6IHBhcnNlRmxvYXRcbn07XG5cbi8vIFZhbHVlIHR5cGVzXG52YXIgYWxwaGEgPSBleHBvcnRzLmFscGhhID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICB0cmFuc2Zvcm06ICgwLCBfdHJhbnNmb3JtZXJzLmNsYW1wKSgwLCAxKVxufSk7XG5cbnZhciBkZWdyZWVzID0gZXhwb3J0cy5kZWdyZWVzID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJ2RlZycpO1xudmFyIHBlcmNlbnQgPSBleHBvcnRzLnBlcmNlbnQgPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgnJScpO1xudmFyIHB4ID0gZXhwb3J0cy5weCA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCdweCcpO1xuXG52YXIgc2NhbGUgPSBleHBvcnRzLnNjYWxlID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICBkZWZhdWx0OiAxXG59KTtcblxudmFyIHJnYlVuaXQgPSBleHBvcnRzLnJnYlVuaXQgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIHRyYW5zZm9ybTogKDAsIF90cmFuc2Zvcm1lcnMuZmxvdykoXG4gIC8vaHR0cDovL2NvZGVwZW4uaW8vb3N1Ymxha2UvZnVsbC94R1ZWYU4vXG4gIC8vICh2LCB2YWx1ZSwgYWN0aW9uKSA9PiB7XG4gIC8vICAgaWYgKGFjdGlvbikge1xuICAvLyAgICAgY29uc3QgZnJvbUNvbG9yID0gYWN0aW9uLmZyb20gKiBhY3Rpb24uZnJvbTtcbiAgLy8gICAgIGNvbnN0IHRvQ29sb3IgPSBhY3Rpb24udG8gKiBhY3Rpb24udG87XG4gIC8vICAgICByZXR1cm4gTWF0aC5zcXJ0KGFjdGlvbi5wcm9ncmVzcyAqICh0b0NvbG9yIC0gZnJvbUNvbG9yKSArIGZyb21Db2xvcik7XG4gIC8vICAgfVxuXG4gIC8vICAgcmV0dXJuIHY7XG4gIC8vIH0sXG4gICgwLCBfdHJhbnNmb3JtZXJzLmNsYW1wKSgwLCAyNTUpLCBNYXRoLnJvdW5kKVxufSk7XG5cbnZhciByZ2JhID0gZXhwb3J0cy5yZ2JhID0ge1xuICBjaGlsZFR5cGVzOiAoX2NoaWxkVHlwZXMgPSB7fSwgX2NoaWxkVHlwZXNbUkVEXSA9IHJnYlVuaXQsIF9jaGlsZFR5cGVzW0dSRUVOXSA9IHJnYlVuaXQsIF9jaGlsZFR5cGVzW0JMVUVdID0gcmdiVW5pdCwgX2NoaWxkVHlwZXNbQUxQSEFdID0gYWxwaGEsIF9jaGlsZFR5cGVzKSxcblxuICB0ZXN0OiAoMCwgX3V0aWxzLmlzRmlyc3RDaGFycykoJ3JnYicpLFxuXG4gIHBhcnNlOiAoMCwgX3V0aWxzLnNwbGl0Q29sb3JWYWx1ZXMpKFtSRUQsIEdSRUVOLCBCTFVFLCBBTFBIQV0pLFxuXG4gIHRyYW5zZm9ybTogcmdiYVRlbXBsYXRlXG59O1xuXG52YXIgaGV4ID0gZXhwb3J0cy5oZXggPSBfZXh0ZW5kcyh7fSwgcmdiYSwge1xuXG4gIHRlc3Q6ICgwLCBfdXRpbHMuaXNGaXJzdENoYXJzKSgnIycpLFxuXG4gIHBhcnNlOiBmdW5jdGlvbiAodikge1xuICAgIHZhciByID0gdm9pZCAwLFxuICAgICAgICBnID0gdm9pZCAwLFxuICAgICAgICBiID0gdm9pZCAwO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICBpZiAodi5sZW5ndGggPiA0KSB7XG4gICAgICByID0gdi5zdWJzdHIoMSwgMik7XG4gICAgICBnID0gdi5zdWJzdHIoMywgMik7XG4gICAgICBiID0gdi5zdWJzdHIoNSwgMik7XG5cbiAgICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSB2LnN1YnN0cigxLCAxKTtcbiAgICAgIGcgPSB2LnN1YnN0cigyLCAxKTtcbiAgICAgIGIgPSB2LnN1YnN0cigzLCAxKTtcbiAgICAgIHIgKz0gcjtcbiAgICAgIGcgKz0gZztcbiAgICAgIGIgKz0gYjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgUmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgICBHcmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgICAgQmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgQWxwaGE6IDFcbiAgICB9O1xuICB9XG59KTtcblxudmFyIGhzbGEgPSBleHBvcnRzLmhzbGEgPSB7XG4gIGNoaWxkVHlwZXM6IChfY2hpbGRUeXBlczIgPSB7fSwgX2NoaWxkVHlwZXMyW0hVRV0gPSBudW1iZXIsIF9jaGlsZFR5cGVzMltTQVRVUkFUSU9OXSA9IHBlcmNlbnQsIF9jaGlsZFR5cGVzMltMSUdIVE5FU1NdID0gcGVyY2VudCwgX2NoaWxkVHlwZXMyW0FMUEhBXSA9IGFscGhhLCBfY2hpbGRUeXBlczIpLFxuXG4gIHRlc3Q6ICgwLCBfdXRpbHMuaXNGaXJzdENoYXJzKSgnaHNsJyksXG5cbiAgcGFyc2U6ICgwLCBfdXRpbHMuc3BsaXRDb2xvclZhbHVlcykoW0hVRSwgU0FUVVJBVElPTiwgTElHSFRORVNTLCBBTFBIQV0pLFxuXG4gIGNvbWJpbmU6IGhzbGFUZW1wbGF0ZVxufTtcblxudmFyIGNvbG9yID0gZXhwb3J0cy5jb2xvciA9IHtcbiAgY2hpbGRUeXBlczogX2V4dGVuZHMoe30sIGhzbGEuY2hpbGRUeXBlcywgcmdiYS5jaGlsZFR5cGVzKSxcblxuICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gcmdiYS50ZXN0KHZhbHVlKSB8fCBoZXgudGVzdCh2YWx1ZSkgfHwgaHNsYS50ZXN0KHZhbHVlKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzkwZVhCbGN5NXFjeUpkTENKdVlXMWxjeUk2V3lKU1JVUWlMQ0pIVWtWRlRpSXNJa0pNVlVVaUxDSkJURkJJUVNJc0lraFZSU0lzSWxOQlZGVlNRVlJKVDA0aUxDSk1TVWRJVkU1RlUxTWlMQ0p5WjJKaFZHVnRjR3hoZEdVaUxDSmpiMnh2Y25NaUxDSm9jMnhoVkdWdGNHeGhkR1VpTENKdWRXMWlaWElpTENKMFpYTjBJaXdpY0dGeWMyVWlMQ0p3WVhKelpVWnNiMkYwSWl3aVlXeHdhR0VpTENKMGNtRnVjMlp2Y20waUxDSmtaV2R5WldWeklpd2ljR1Z5WTJWdWRDSXNJbkI0SWl3aWMyTmhiR1VpTENKa1pXWmhkV3gwSWl3aWNtZGlWVzVwZENJc0lrMWhkR2dpTENKeWIzVnVaQ0lzSW5KblltRWlMQ0pqYUdsc1pGUjVjR1Z6SWl3aWFHVjRJaXdpZGlJc0luSWlMQ0puSWl3aVlpSXNJbXhsYm1kMGFDSXNJbk4xWW5OMGNpSXNJbEpsWkNJc0luQmhjbk5sU1c1MElpd2lSM0psWlc0aUxDSkNiSFZsSWl3aVFXeHdhR0VpTENKb2MyeGhJaXdpWTI5dFltbHVaU0lzSW1OdmJHOXlJaXdpZG1Gc2RXVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3YTFGQlFVRTdPenM3T3pzN096czdPenM3T3p0QlFXRkJPenRCUVVOQk96dEJRVU5CT3p0QlFVVkJPMEZCUTBFc1NVRkJUVUVzVFVGQlRTeExRVUZhTzBGQlEwRXNTVUZCVFVNc1VVRkJVU3hQUVVGa08wRkJRMEVzU1VGQlRVTXNUMEZCVHl4TlFVRmlPMEZCUTBFc1NVRkJUVU1zVVVGQlVTeFBRVUZrTzBGQlEwRXNTVUZCVFVNc1RVRkJUU3hMUVVGYU8wRkJRMEVzU1VGQlRVTXNZVUZCWVN4WlFVRnVRanRCUVVOQkxFbEJRVTFETEZsQlFWa3NWMEZCYkVJN08wRkJSVUU3UVVGRFFTeEpRVUZOUXl4bFFVRmxMRlZCUVVORExFMUJRVVE3UVVGQlFTeHRRa0ZCYjBKQkxFOUJRVTlTTEVkQlFWQXNRMEZCY0VJc1ZVRkJiME5STEU5QlFVOVFMRXRCUVZBc1EwRkJjRU1zVlVGQmMwUlBMRTlCUVU5T0xFbEJRVkFzUTBGQmRFUXNWVUZCZFVWTkxFOUJRVTlNTEV0QlFWQXNRMEZCZGtVN1FVRkJRU3hEUVVGeVFqdEJRVU5CTEVsQlFVMU5MR1ZCUVdVc1ZVRkJRMFFzVFVGQlJEdEJRVUZCTEcxQ1FVRnZRa0VzVDBGQlQwb3NSMEZCVUN4RFFVRndRaXhWUVVGdlEwa3NUMEZCVDBnc1ZVRkJVQ3hEUVVGd1F5eFZRVUV5UkVjc1QwRkJUMFlzVTBGQlVDeERRVUV6UkN4VlFVRnBSa1VzVDBGQlQwd3NTMEZCVUN4RFFVRnFSanRCUVVGQkxFTkJRWEpDT3p0QlFVVlBMRWxCUVUxUExEQkNRVUZUTzBGQlEzQkNReXh4UWtGRWIwSTdRVUZGY0VKRExGTkJRVTlETzBGQlJtRXNRMEZCWmpzN1FVRkxVRHRCUVVOUExFbEJRVTFETEhGRFFVTlNTaXhOUVVSUk8wRkJSVmhMTEdGQlFWY3NlVUpCUVUwc1EwRkJUaXhGUVVGVExFTkJRVlE3UVVGR1FTeEZRVUZPT3p0QlFVdEJMRWxCUVUxRExEUkNRVUZWTERKQ1FVRmxMRXRCUVdZc1EwRkJhRUk3UVVGRFFTeEpRVUZOUXl3MFFrRkJWU3d5UWtGQlpTeEhRVUZtTEVOQlFXaENPMEZCUTBFc1NVRkJUVU1zYTBKQlFVc3NNa0pCUVdVc1NVRkJaaXhEUVVGWU96dEJRVVZCTEVsQlFVMURMSEZEUVVOU1ZDeE5RVVJSTzBGQlJWaFZMRmRCUVZNN1FVRkdSU3hGUVVGT096dEJRVXRCTEVsQlFVMURMSGxEUVVOU1dDeE5RVVJSTzBGQlJWaExMR0ZCUVZjN1FVRkRWRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzTWtKQlFVMHNRMEZCVGl4RlFVRlRMRWRCUVZRc1EwRllVeXhGUVZsVVR5eExRVUZMUXl4TFFWcEpPMEZCUmtFc1JVRkJUanM3UVVGclFrRXNTVUZCVFVNc2MwSkJRVTg3UVVGRGJFSkRMRFpEUVVOSGVrSXNSMEZFU0N4SlFVTlRjVUlzVDBGRVZDeGpRVVZIY0VJc1MwRkdTQ3hKUVVWWGIwSXNUMEZHV0N4alFVZEhia0lzU1VGSVNDeEpRVWRWYlVJc1QwRklWaXhqUVVsSGJFSXNTMEZLU0N4SlFVbFhWeXhMUVVwWUxHTkJSR3RDT3p0QlFWRnNRa2dzVVVGQlRTeDVRa0ZCWVN4TFFVRmlMRU5CVWxrN08wRkJWV3hDUXl4VFFVRlBMRFpDUVVGcFFpeERRVUZEV2l4SFFVRkVMRVZCUVUxRExFdEJRVTRzUlVGQllVTXNTVUZCWWl4RlFVRnRRa01zUzBGQmJrSXNRMEZCYWtJc1EwRldWenM3UVVGWmJFSlpMR0ZCUVZkU08wRkJXazhzUTBGQllqczdRVUZsUVN4SlFVRk5iVUlzYVVOQlExSkdMRWxCUkZFN08wRkJSMWhpTEZGQlFVMHNlVUpCUVdFc1IwRkJZaXhEUVVoTE96dEJRVXRZUXl4VFFVRlBMRlZCUVVObExFTkJRVVFzUlVGQlR6dEJRVU5hTEZGQlFVbERMRlZCUVVvN1FVRkJRU3hSUVVGUFF5eFZRVUZRTzBGQlFVRXNVVUZCVlVNc1ZVRkJWanM3UVVGRlFUdEJRVU5CTEZGQlFVbElMRVZCUVVWSkxFMUJRVVlzUjBGQlZ5eERRVUZtTEVWQlFXdENPMEZCUTJoQ1NDeFZRVUZKUkN4RlFVRkZTeXhOUVVGR0xFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFWb3NRMEZCU2p0QlFVTkJTQ3hWUVVGSlJpeEZRVUZGU3l4TlFVRkdMRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVm9zUTBGQlNqdEJRVU5CUml4VlFVRkpTQ3hGUVVGRlN5eE5RVUZHTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVZvc1EwRkJTanM3UVVGRlJqdEJRVU5ETEV0QlRrUXNUVUZOVHp0QlFVTk1TaXhWUVVGSlJDeEZRVUZGU3l4TlFVRkdMRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVm9zUTBGQlNqdEJRVU5CU0N4VlFVRkpSaXhGUVVGRlN5eE5RVUZHTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVZvc1EwRkJTanRCUVVOQlJpeFZRVUZKU0N4RlFVRkZTeXhOUVVGR0xFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFWb3NRMEZCU2p0QlFVTkJTaXhYUVVGTFFTeERRVUZNTzBGQlEwRkRMRmRCUVV0QkxFTkJRVXc3UVVGRFFVTXNWMEZCUzBFc1EwRkJURHRCUVVORU96dEJRVVZFTEZkQlFVODdRVUZEVEVjc1YwRkJTME1zVTBGQlUwNHNRMEZCVkN4RlFVRlpMRVZCUVZvc1EwRkVRVHRCUVVWTVR5eGhRVUZQUkN4VFFVRlRUQ3hEUVVGVUxFVkJRVmtzUlVGQldpeERRVVpHTzBGQlIweFBMRmxCUVUxR0xGTkJRVk5LTEVOQlFWUXNSVUZCV1N4RlFVRmFMRU5CU0VRN1FVRkpURThzWVVGQlR6dEJRVXBHTEV0QlFWQTdRVUZOUkR0QlFUbENWU3hGUVVGT096dEJRV2xEUVN4SlFVRk5ReXh6UWtGQlR6dEJRVU5zUW1Jc0swTkJRMGR5UWl4SFFVUklMRWxCUTFOTkxFMUJSRlFzWlVGRlIwd3NWVUZHU0N4SlFVVm5RbGtzVDBGR2FFSXNaVUZIUjFnc1UwRklTQ3hKUVVkbFZ5eFBRVWhtTEdWQlNVZGtMRXRCU2tnc1NVRkpWMWNzUzBGS1dDeGxRVVJyUWpzN1FVRlJiRUpJTEZGQlFVMHNlVUpCUVdFc1MwRkJZaXhEUVZKWk96dEJRVlZzUWtNc1UwRkJUeXcyUWtGQmFVSXNRMEZCUTFJc1IwRkJSQ3hGUVVGTlF5eFZRVUZPTEVWQlFXdENReXhUUVVGc1FpeEZRVUUyUWtnc1MwRkJOMElzUTBGQmFrSXNRMEZXVnpzN1FVRlpiRUp2UXl4WFFVRlRPVUk3UVVGYVV5eERRVUZpT3p0QlFXVkJMRWxCUVUwclFpeDNRa0ZCVVR0QlFVTnVRbVlzTWtKQlEwdGhMRXRCUVV0aUxGVkJSRllzUlVGRlMwUXNTMEZCUzBNc1ZVRkdWaXhEUVVSdFFqczdRVUZOYmtKa0xGRkJRVTBzVlVGQlF6aENMRXRCUVVRN1FVRkJRU3hYUVVGWGFrSXNTMEZCUzJJc1NVRkJUQ3hEUVVGVk9FSXNTMEZCVml4TFFVRnZRbVlzU1VGQlNXWXNTVUZCU2l4RFFVRlRPRUlzUzBGQlZDeERRVUZ3UWl4SlFVRjFRMGdzUzBGQlN6TkNMRWxCUVV3c1EwRkJWVGhDTEV0QlFWWXNRMEZCYkVRN1FVRkJRVHRCUVU1aExFTkJRV1FpTENKbWFXeGxJam9pZEhsd1pYTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaXBjYmlBcUlGWmhiSFZsSUhSNWNHVnpYRzRnS2x4dUlDb2dZV3h3YUdGY2JpQXFJR1JsWjNKbFpYTmNiaUFxSUdobGVGeHVJQ29nYUhOc1lWeHVJQ29nY0dWeVkyVnVkRnh1SUNvZ2NIaGNiaUFxSUhKbllsVnVhWFJjYmlBcUlISm5ZbHh1SUNvZ2MyTmhiR1ZjYmlBcUwxeHVhVzF3YjNKMElIc2dZMnhoYlhBc0lHWnNiM2NnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6Snp0Y2JtbHRjRzl5ZENCN0lHTnlaV0YwWlZWdWFYUlVlWEJsTENCcGMwWnBjbk4wUTJoaGNuTXNJSE53YkdsMFEyOXNiM0pXWVd4MVpYTWdmU0JtY205dElDY3VMM1YwYVd4ekp6dGNibWx0Y0c5eWRDQjdJR2x6VG5WdElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dUx5OGdVM1J5YVc1bklIQnliM0JsY25ScFpYTmNibU52Ym5OMElGSkZSQ0E5SUNkU1pXUW5PMXh1WTI5dWMzUWdSMUpGUlU0Z1BTQW5SM0psWlc0bk8xeHVZMjl1YzNRZ1FreFZSU0E5SUNkQ2JIVmxKenRjYm1OdmJuTjBJRUZNVUVoQklEMGdKMEZzY0doaEp6dGNibU52Ym5OMElFaFZSU0E5SUNkSWRXVW5PMXh1WTI5dWMzUWdVMEZVVlZKQlZFbFBUaUE5SUNkVFlYUjFjbUYwYVc5dUp6dGNibU52Ym5OMElFeEpSMGhVVGtWVFV5QTlJQ2RNYVdkb2RHNWxjM01uTzF4dVhHNHZMeUJVWlcxd2JHRjBaWE5jYm1OdmJuTjBJSEpuWW1GVVpXMXdiR0YwWlNBOUlDaGpiMnh2Y25NcElEMCtJR0J5WjJKaEtDUjdZMjlzYjNKelcxSkZSRjE5TENBa2UyTnZiRzl5YzF0SFVrVkZUbDE5TENBa2UyTnZiRzl5YzF0Q1RGVkZYWDBzSUNSN1kyOXNiM0p6VzBGTVVFaEJYWDBwWUR0Y2JtTnZibk4wSUdoemJHRlVaVzF3YkdGMFpTQTlJQ2hqYjJ4dmNuTXBJRDArSUdCb2MyeGhLQ1I3WTI5c2IzSnpXMGhWUlYxOUxDQWtlMk52Ykc5eWMxdFRRVlJWVWtGVVNVOU9YWDBzSUNSN1kyOXNiM0p6VzB4SlIwaFVUa1ZUVTExOUxDQWtlMk52Ykc5eWMxdEJURkJJUVYxOUtXQTdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnVkVzFpWlhJZ1BTQjdYRzRnSUhSbGMzUTZJR2x6VG5WdExGeHVJQ0J3WVhKelpUb2djR0Z5YzJWR2JHOWhkRnh1ZlR0Y2JseHVMeThnVm1Gc2RXVWdkSGx3WlhOY2JtVjRjRzl5ZENCamIyNXpkQ0JoYkhCb1lTQTlJSHRjYmlBZ0xpNHViblZ0WW1WeUxGeHVJQ0IwY21GdWMyWnZjbTA2SUdOc1lXMXdLREFzSURFcFhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdaR1ZuY21WbGN5QTlJR055WldGMFpWVnVhWFJVZVhCbEtDZGtaV2NuS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0J3WlhKalpXNTBJRDBnWTNKbFlYUmxWVzVwZEZSNWNHVW9KeVVuS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0J3ZUNBOUlHTnlaV0YwWlZWdWFYUlVlWEJsS0Nkd2VDY3BPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjMk5oYkdVZ1BTQjdYRzRnSUM0dUxtNTFiV0psY2l4Y2JpQWdaR1ZtWVhWc2REb2dNVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhKbllsVnVhWFFnUFNCN1hHNGdJQzR1TG01MWJXSmxjaXhjYmlBZ2RISmhibk5tYjNKdE9pQm1iRzkzS0Z4dUlDQWdJQzh2YUhSMGNEb3ZMMk52WkdWd1pXNHVhVzh2YjNOMVlteGhhMlV2Wm5Wc2JDOTRSMVpXWVU0dlhHNGdJQ0FnTHk4Z0tIWXNJSFpoYkhWbExDQmhZM1JwYjI0cElEMCtJSHRjYmlBZ0lDQXZMeUFnSUdsbUlDaGhZM1JwYjI0cElIdGNiaUFnSUNBdkx5QWdJQ0FnWTI5dWMzUWdabkp2YlVOdmJHOXlJRDBnWVdOMGFXOXVMbVp5YjIwZ0tpQmhZM1JwYjI0dVpuSnZiVHRjYmlBZ0lDQXZMeUFnSUNBZ1kyOXVjM1FnZEc5RGIyeHZjaUE5SUdGamRHbHZiaTUwYnlBcUlHRmpkR2x2Ymk1MGJ6dGNiaUFnSUNBdkx5QWdJQ0FnY21WMGRYSnVJRTFoZEdndWMzRnlkQ2hoWTNScGIyNHVjSEp2WjNKbGMzTWdLaUFvZEc5RGIyeHZjaUF0SUdaeWIyMURiMnh2Y2lrZ0t5Qm1jbTl0UTI5c2IzSXBPMXh1SUNBZ0lDOHZJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z0lDQnlaWFIxY200Z2RqdGNiaUFnSUNBdkx5QjlMRnh1SUNBZ0lHTnNZVzF3S0RBc0lESTFOU2tzWEc0Z0lDQWdUV0YwYUM1eWIzVnVaRnh1SUNBcFhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjbWRpWVNBOUlIdGNiaUFnWTJocGJHUlVlWEJsY3pvZ2UxeHVJQ0FnSUZ0U1JVUmRPaUJ5WjJKVmJtbDBMRnh1SUNBZ0lGdEhVa1ZGVGwwNklISm5ZbFZ1YVhRc1hHNGdJQ0FnVzBKTVZVVmRPaUJ5WjJKVmJtbDBMRnh1SUNBZ0lGdEJURkJJUVYwNklHRnNjR2hoWEc0Z0lIMHNYRzVjYmlBZ2RHVnpkRG9nYVhOR2FYSnpkRU5vWVhKektDZHlaMkluS1N4Y2JseHVJQ0J3WVhKelpUb2djM0JzYVhSRGIyeHZjbFpoYkhWbGN5aGJVa1ZFTENCSFVrVkZUaXdnUWt4VlJTd2dRVXhRU0VGZEtTeGNibHh1SUNCMGNtRnVjMlp2Y20wNklISm5ZbUZVWlcxd2JHRjBaVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdobGVDQTlJSHRjYmlBZ0xpNHVjbWRpWVN4Y2JseHVJQ0IwWlhOME9pQnBjMFpwY25OMFEyaGhjbk1vSnlNbktTeGNibHh1SUNCd1lYSnpaVG9nS0hZcElEMCtJSHRjYmlBZ0lDQnNaWFFnY2l3Z1p5d2dZanRjYmx4dUlDQWdJQzh2SUVsbUlIZGxJR2hoZG1VZ05pQmphR0Z5WVdOMFpYSnpMQ0JwWlNBalJrWXdNREF3WEc0Z0lDQWdhV1lnS0hZdWJHVnVaM1JvSUQ0Z05Da2dlMXh1SUNBZ0lDQWdjaUE5SUhZdWMzVmljM1J5S0RFc0lESXBPMXh1SUNBZ0lDQWdaeUE5SUhZdWMzVmljM1J5S0RNc0lESXBPMXh1SUNBZ0lDQWdZaUE5SUhZdWMzVmljM1J5S0RVc0lESXBPMXh1WEc0Z0lDQWdMeThnVDNJZ2QyVWdhR0YyWlNBeklHTm9ZWEpoWTNSbGNuTXNJR2xsSUNOR01EQmNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnY2lBOUlIWXVjM1ZpYzNSeUtERXNJREVwTzF4dUlDQWdJQ0FnWnlBOUlIWXVjM1ZpYzNSeUtESXNJREVwTzF4dUlDQWdJQ0FnWWlBOUlIWXVjM1ZpYzNSeUtETXNJREVwTzF4dUlDQWdJQ0FnY2lBclBTQnlPMXh1SUNBZ0lDQWdaeUFyUFNCbk8xeHVJQ0FnSUNBZ1lpQXJQU0JpTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQlNaV1E2SUhCaGNuTmxTVzUwS0hJc0lERTJLU3hjYmlBZ0lDQWdJRWR5WldWdU9pQndZWEp6WlVsdWRDaG5MQ0F4Tmlrc1hHNGdJQ0FnSUNCQ2JIVmxPaUJ3WVhKelpVbHVkQ2hpTENBeE5pa3NYRzRnSUNBZ0lDQkJiSEJvWVRvZ01WeHVJQ0FnSUgwN1hHNGdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCb2MyeGhJRDBnZTF4dUlDQmphR2xzWkZSNWNHVnpPaUI3WEc0Z0lDQWdXMGhWUlYwNklHNTFiV0psY2l4Y2JpQWdJQ0JiVTBGVVZWSkJWRWxQVGwwNklIQmxjbU5sYm5Rc1hHNGdJQ0FnVzB4SlIwaFVUa1ZUVTEwNklIQmxjbU5sYm5Rc1hHNGdJQ0FnVzBGTVVFaEJYVG9nWVd4d2FHRmNiaUFnZlN4Y2JseHVJQ0IwWlhOME9pQnBjMFpwY25OMFEyaGhjbk1vSjJoemJDY3BMRnh1WEc0Z0lIQmhjbk5sT2lCemNHeHBkRU52Ykc5eVZtRnNkV1Z6S0Z0SVZVVXNJRk5CVkZWU1FWUkpUMDRzSUV4SlIwaFVUa1ZUVXl3Z1FVeFFTRUZkS1N4Y2JseHVJQ0JqYjIxaWFXNWxPaUJvYzJ4aFZHVnRjR3hoZEdWY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpiMnh2Y2lBOUlIdGNiaUFnWTJocGJHUlVlWEJsY3pvZ2UxeHVJQ0FnSUM0dUxtaHpiR0V1WTJocGJHUlVlWEJsY3l4Y2JpQWdJQ0F1TGk1eVoySmhMbU5vYVd4a1ZIbHdaWE5jYmlBZ2ZTeGNibHh1SUNCMFpYTjBPaUFvZG1Gc2RXVXBJRDArSUhKblltRXVkR1Z6ZENoMllXeDFaU2tnZkh3Z2FHVjRMblJsYzNRb2RtRnNkV1VwSUh4OElHaHpiR0V1ZEdWemRDaDJZV3gxWlNsY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUvdHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRDb2xvclZhbHVlcyA9IGV4cG9ydHMuZmluZFZhbHVlQW5kVW5pdCA9IGV4cG9ydHMuY3JlYXRlVW5pdFR5cGUgPSBleHBvcnRzLmlzRmlyc3RDaGFycyA9IGV4cG9ydHMuY29udGFpbnMgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSB1bmRlZmluZWQ7XG5leHBvcnRzLnNwbGl0Q29sb3JWYWx1ZXMgPSBzcGxpdENvbG9yVmFsdWVzO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG4vKlxuICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgXCJmb28sYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdENvbW1hRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiAoMCwgX3V0aWxzLmlzU3RyaW5nKSh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG59O1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIGFueSBhcmd1bWVudCBmb3IgYHRlcm1gXG4gKiBgY29udGFpbnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG52YXIgY29udGFpbnMgPSBleHBvcnRzLmNvbnRhaW5zID0gZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuICgwLCBfdXRpbHMuaXNTdHJpbmcpKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSAhPT0gLTE7XG4gIH07XG59O1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIHRvIHNlZSBpZiBhbiBhcmd1bWVudCBpc1xuICogIHRoZSBmaXJzdCBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBgdGVybWBcbiAqIGBpc0ZpcnN0Q2hhcnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG52YXIgaXNGaXJzdENoYXJzID0gZXhwb3J0cy5pc0ZpcnN0Q2hhcnMgPSBmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5pc1N0cmluZykodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pID09PSAwO1xuICB9O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSB1bml0IHZhbHVlIHR5cGVcbiAqL1xudmFyIGNyZWF0ZVVuaXRUeXBlID0gZXhwb3J0cy5jcmVhdGVVbml0VHlwZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHJldHVybiB7XG4gICAgdGVzdDogY29udGFpbnModHlwZSksXG4gICAgcGFyc2U6IHBhcnNlRmxvYXQsXG4gICAgdHJhbnNmb3JtOiAoMCwgX3RyYW5zZm9ybWVycy5hcHBlbmRVbml0KSh0eXBlKVxuICB9O1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHNwbGl0IGNvbG9yXG4gKiB2YWx1ZXMgZnJvbSBzdHJpbmcgaW50byBhbiBvYmplY3Qgb2YgcHJvcGVydGllc1xuICogYHNwbGl0Q29sb3JWYWx1ZXMoWydSZWQnLCAnR3JlZW4nLCAnQmx1ZSddKSgncmdiYSgwLDAsMCknKWBcbiAqL1xuZnVuY3Rpb24gc3BsaXRDb2xvclZhbHVlcyh0ZXJtcykge1xuICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHZhbHVlcyA9IHt9O1xuICAgIHZhciB2YWx1ZXNBcnJheSA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoKDAsIF91dGlscy5nZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZykodikpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICB2YWx1ZXNbdGVybXNbaV1dID0gdmFsdWVzQXJyYXlbaV0gIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQodmFsdWVzQXJyYXlbaV0pIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xufVxuXG4vKlxuICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICBcbiAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgIFxuICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4qL1xudmFyIGZpbmRWYWx1ZUFuZFVuaXQgPSBleHBvcnRzLmZpbmRWYWx1ZUFuZFVuaXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHZhbHVlLm1hdGNoKSB7XG4gICAgdmFyIHNwbGl0VmFsdWUgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbHVlWzFdKSxcbiAgICAgIHVuaXQ6IHNwbGl0VmFsdWVbMl1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSB9O1xuICB9XG59O1xuXG4vKlxuICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLCBbXCJSZWRcIiwgJ0dyZWVuXCIsIFwiQmx1ZVwiLCBcIkFscGhhXCJdXG5cbiAgeyBSZWQ6IDI1NS4uLiB9XG4qL1xudmFyIGdldENvbG9yVmFsdWVzID0gZXhwb3J0cy5nZXRDb2xvclZhbHVlcyA9IGZ1bmN0aW9uICh2YWx1ZSwgY29sb3JUZXJtcykge1xuICB2YXIgbnVtQ29sb3JUZXJtcyA9IGNvbG9yVGVybXMubGVuZ3RoO1xuICB2YXIgY29sb3JWYWx1ZXMgPSB7fTtcbiAgdmFyIGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoKDAsIF91dGlscy5nZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZykodmFsdWUpKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbG9yVGVybXM7IGkrKykge1xuICAgIGNvbG9yVmFsdWVzW2NvbG9yVGVybXNbaV1dID0gY29sb3JzW2ldICE9PSB1bmRlZmluZWQgPyBjb2xvcnNbaV0gOiAxO1xuICB9XG5cbiAgcmV0dXJuIGNvbG9yVmFsdWVzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzkxZEdsc2N5NXFjeUpkTENKdVlXMWxjeUk2V3lKemNHeHBkRU52Ykc5eVZtRnNkV1Z6SWl3aWMzQnNhWFJEYjIxdFlVUmxiR2x0YVhSbFpDSXNJblpoYkhWbElpd2ljM0JzYVhRaUxDSmpiMjUwWVdsdWN5SXNJblJsY20waUxDSjJJaXdpYVc1a1pYaFBaaUlzSW1selJtbHljM1JEYUdGeWN5SXNJbU55WldGMFpWVnVhWFJVZVhCbElpd2lkSGx3WlNJc0luUmxjM1FpTENKd1lYSnpaU0lzSW5CaGNuTmxSbXh2WVhRaUxDSjBjbUZ1YzJadmNtMGlMQ0owWlhKdGN5SXNJbTUxYlZSbGNtMXpJaXdpYkdWdVozUm9JaXdpZG1Gc2RXVnpJaXdpZG1Gc2RXVnpRWEp5WVhraUxDSnBJaXdpZFc1a1pXWnBibVZrSWl3aVptbHVaRlpoYkhWbFFXNWtWVzVwZENJc0ltMWhkR05vSWl3aWMzQnNhWFJXWVd4MVpTSXNJblZ1YVhRaUxDSm5aWFJEYjJ4dmNsWmhiSFZsY3lJc0ltTnZiRzl5VkdWeWJYTWlMQ0p1ZFcxRGIyeHZjbFJsY20xeklpd2lZMjlzYjNKV1lXeDFaWE1pTENKamIyeHZjbk1pWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3VVVFNFEyZENRU3huUWl4SFFVRkJRU3huUWpzN1FVRTVRMmhDT3p0QlFVTkJPenRCUVVWQk96czdPenM3T3p0QlFWRlBMRWxCUVUxRExHOUVRVUZ6UWl4VlFVRkRReXhMUVVGRU8wRkJRVUVzVTBGQlZ5eHhRa0ZCVTBFc1MwRkJWQ3hKUVVGclFrRXNUVUZCVFVNc1MwRkJUaXhEUVVGWkxFMUJRVm9zUTBGQmJFSXNSMEZCZDBNc1EwRkJRMFFzUzBGQlJDeERRVUZ1UkR0QlFVRkJMRU5CUVRWQ096dEJRVVZRT3pzN08wRkJTVThzU1VGQlRVVXNPRUpCUVZjc1ZVRkJRME1zU1VGQlJEdEJRVUZCTEZOQlFWVXNWVUZCUTBNc1EwRkJSQ3hGUVVGUE8wRkJRM1pETEZkQlFWRXNjVUpCUVZORUxFbEJRVlFzUzBGQmEwSkRMRVZCUVVWRExFOUJRVVlzUTBGQlZVWXNTVUZCVml4TlFVRnZRaXhEUVVGRExFTkJRUzlETzBGQlEwUXNSMEZHZFVJN1FVRkJRU3hEUVVGcVFqczdRVUZKVURzN096czdRVUZMVHl4SlFVRk5SeXh6UTBGQlpTeFZRVUZEU0N4SlFVRkVPMEZCUVVFc1UwRkJWU3hWUVVGRFF5eERRVUZFTEVWQlFVODdRVUZETTBNc1YwRkJVU3h4UWtGQlUwUXNTVUZCVkN4TFFVRnJRa01zUlVGQlJVTXNUMEZCUml4RFFVRlZSaXhKUVVGV0xFMUJRVzlDTEVOQlFUbERPMEZCUTBRc1IwRkdNa0k3UVVGQlFTeERRVUZ5UWpzN1FVRkpVRHM3TzBGQlIwOHNTVUZCVFVrc01FTkJRV2xDTEZWQlFVTkRMRWxCUVVRc1JVRkJWVHRCUVVOMFF5eFRRVUZQTzBGQlEweERMRlZCUVUxUUxGTkJRVk5OTEVsQlFWUXNRMEZFUkR0QlFVVk1SU3hYUVVGUFF5eFZRVVpHTzBGQlIweERMR1ZCUVZjc09FSkJRVmRLTEVsQlFWZzdRVUZJVGl4SFFVRlFPMEZCUzBRc1EwRk9UVHM3UVVGUlVEczdPenM3UVVGTFR5eFRRVUZUVml4blFrRkJWQ3hEUVVFd1FtVXNTMEZCTVVJc1JVRkJhVU03UVVGRGRFTXNUVUZCVFVNc1YwRkJWMFFzVFVGQlRVVXNUVUZCZGtJN08wRkJSVUVzVTBGQlR5eFZRVUZWV0N4RFFVRldMRVZCUVdFN1FVRkRiRUlzVVVGQlRWa3NVMEZCVXl4RlFVRm1PMEZCUTBFc1VVRkJUVU1zWTBGQlkyeENMRzlDUVVGdlFpeDFRMEZCTWtKTExFTkJRVE5DTEVOQlFYQkNMRU5CUVhCQ096dEJRVVZCTEZOQlFVc3NTVUZCU1dNc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpTaXhSUVVGd1FpeEZRVUU0UWtrc1IwRkJPVUlzUlVGQmJVTTdRVUZEYWtOR0xHRkJRVTlJTEUxQlFVMUxMRU5CUVU0c1EwRkJVQ3hKUVVGdlFrUXNXVUZCV1VNc1EwRkJXaXhOUVVGdFFrTXNVMEZCY0VJc1IwRkJhVU5TTEZkQlFWZE5MRmxCUVZsRExFTkJRVm9zUTBGQldDeERRVUZxUXl4SFFVRTRSQ3hEUVVGcVJqdEJRVU5FT3p0QlFVVkVMRmRCUVU5R0xFMUJRVkE3UVVGRFJDeEhRVlJFTzBGQlZVUTdPMEZCUlVRN096czdPenM3TzBGQlVVOHNTVUZCVFVrc09FTkJRVzFDTEZWQlFVTndRaXhMUVVGRUxFVkJRVmM3UVVGRGVrTXNUVUZCU1VFc1RVRkJUWEZDTEV0QlFWWXNSVUZCYVVJN1FVRkRaaXhSUVVGTlF5eGhRVUZoZEVJc1RVRkJUWEZDTEV0QlFVNHNRMEZCV1N4dFFrRkJXaXhEUVVGdVFqczdRVUZGUVN4WFFVRlBPMEZCUTB4eVFpeGhRVUZQVnl4WFFVRlhWeXhYUVVGWExFTkJRVmdzUTBGQldDeERRVVJHTzBGQlJVeERMRmxCUVU5RUxGZEJRVmNzUTBGQldEdEJRVVpHTEV0QlFWQTdRVUZKUkN4SFFWQkVMRTFCVDA4N1FVRkRUQ3hYUVVGUExFVkJRVVYwUWl4WlFVRkdMRVZCUVZBN1FVRkRSRHRCUVVOR0xFTkJXRTA3TzBGQllWQTdPenM3T3pzN1FVRlBUeXhKUVVGTmQwSXNNRU5CUVdsQ0xGVkJRVU40UWl4TFFVRkVMRVZCUVZGNVFpeFZRVUZTTEVWQlFYVkNPMEZCUTI1RUxFMUJRVTFETEdkQ1FVRm5Ra1FzVjBGQlYxWXNUVUZCYWtNN1FVRkRRU3hOUVVGTldTeGpRVUZqTEVWQlFYQkNPMEZCUTBFc1RVRkJUVU1zVTBGQlV6ZENMRzlDUVVGdlFpeDFRMEZCTWtKRExFdEJRVE5DTEVOQlFYQkNMRU5CUVdZN08wRkJSVUVzVDBGQlN5eEpRVUZKYTBJc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpVU3hoUVVGd1FpeEZRVUZ0UTFJc1IwRkJia01zUlVGQmQwTTdRVUZEZEVOVExHZENRVUZaUml4WFFVRlhVQ3hEUVVGWUxFTkJRVm9zU1VGQk9FSlZMRTlCUVU5V0xFTkJRVkFzVFVGQlkwTXNVMEZCWml4SFFVRTBRbE1zVDBGQlQxWXNRMEZCVUN4RFFVRTFRaXhIUVVGM1F5eERRVUZ5UlR0QlFVTkVPenRCUVVWRUxGTkJRVTlUTEZkQlFWQTdRVUZEUkN4RFFWWk5JaXdpWm1sc1pTSTZJblYwYVd4ekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1oyVjBWbUZzZFdWR2NtOXRSblZ1WTNScGIyNVRkSEpwYm1jc0lHbHpVM1J5YVc1bklIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYm1sdGNHOXlkQ0I3SUdGd2NHVnVaRlZ1YVhRZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZEhKaGJuTm1iM0p0WlhKekp6dGNibHh1THlwY2JpQWdVM0JzYVhRZ1kyOXRiV0V0WkdWc2FXMXBkR1ZrSUhOMGNtbHVaMXh1WEc0Z0lGd2labTl2TEdKaGNsd2lJQzArSUZ0Y0ltWnZiMXdpTENCY0ltSmhjbHdpWFZ4dVhHNGdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0JBY21WMGRYSnVJRnRoY25KaGVWMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JzYVhSRGIyMXRZVVJsYkdsdGFYUmxaQ0E5SUNoMllXeDFaU2tnUFQ0Z2FYTlRkSEpwYm1jb2RtRnNkV1VwSUQ4Z2RtRnNkV1V1YzNCc2FYUW9MeXhjWEhNcUx5a2dPaUJiZG1Gc2RXVmRPMXh1WEc0dktpcGNiaUFxSUNCU1pYUjFjbTV6SUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ0IzYVd4c0lHTm9aV05ySUdGdWVTQmhjbWQxYldWdWRDQm1iM0lnWUhSbGNtMWdYRzRnS2lCZ1kyOXVkR0ZwYm5Nb0oyNWxaV1JzWlNjcEtDZG9ZWGx6ZEdGamF5Y3BZRnh1SUNvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTI5dWRHRnBibk1nUFNBb2RHVnliU2tnUFQ0Z0tIWXBJRDArSUh0Y2JpQWdjbVYwZFhKdUlDaHBjMU4wY21sdVp5aDBaWEp0S1NBbUppQjJMbWx1WkdWNFQyWW9kR1Z5YlNrZ0lUMDlJQzB4S1R0Y2JuMDdYRzVjYmk4cUtseHVJQ29nSUZKbGRIVnlibk1nWVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z1kyaGxZMnNnZEc4Z2MyVmxJR2xtSUdGdUlHRnlaM1Z0Wlc1MElHbHpYRzRnS2lBZ2RHaGxJR1pwY25OMElHTm9ZWEpoWTNSbGNuTWdhVzRnZEdobElIQnliM1pwWkdWa0lHQjBaWEp0WUZ4dUlDb2dZR2x6Um1seWMzUkRhR0Z5Y3lnbmJtVmxaR3hsSnlrb0oyaGhlWE4wWVdOckp5bGdYRzRnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzBacGNuTjBRMmhoY25NZ1BTQW9kR1Z5YlNrZ1BUNGdLSFlwSUQwK0lIdGNiaUFnY21WMGRYSnVJQ2hwYzFOMGNtbHVaeWgwWlhKdEtTQW1KaUIyTG1sdVpHVjRUMllvZEdWeWJTa2dQVDA5SURBcE8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCRGNtVmhkR1VnWVNCMWJtbDBJSFpoYkhWbElIUjVjR1ZjYmlBcUwxeHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVlZ1YVhSVWVYQmxJRDBnS0hSNWNHVXBJRDArSUh0Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNCMFpYTjBPaUJqYjI1MFlXbHVjeWgwZVhCbEtTeGNiaUFnSUNCd1lYSnpaVG9nY0dGeWMyVkdiRzloZEN4Y2JpQWdJQ0IwY21GdWMyWnZjbTA2SUdGd2NHVnVaRlZ1YVhRb2RIbHdaU2xjYmlBZ2ZUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1EzSmxZWFJsY3lCaElHWjFibU4wYVc5dUlIUm9ZWFFnZDJsc2JDQnpjR3hwZENCamIyeHZjbHh1SUNvZ2RtRnNkV1Z6SUdaeWIyMGdjM1J5YVc1bklHbHVkRzhnWVc0Z2IySnFaV04wSUc5bUlIQnliM0JsY25ScFpYTmNiaUFxSUdCemNHeHBkRU52Ykc5eVZtRnNkV1Z6S0ZzblVtVmtKeXdnSjBkeVpXVnVKeXdnSjBKc2RXVW5YU2tvSjNKblltRW9NQ3d3TERBcEp5bGdYRzRnS2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCemNHeHBkRU52Ykc5eVZtRnNkV1Z6S0hSbGNtMXpLU0I3WEc0Z0lHTnZibk4wSUc1MWJWUmxjbTF6SUQwZ2RHVnliWE11YkdWdVozUm9PMXh1WEc0Z0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlBb2Rpa2dlMXh1SUNBZ0lHTnZibk4wSUhaaGJIVmxjeUE5SUh0OU8xeHVJQ0FnSUdOdmJuTjBJSFpoYkhWbGMwRnljbUY1SUQwZ2MzQnNhWFJEYjIxdFlVUmxiR2x0YVhSbFpDaG5aWFJXWVd4MVpVWnliMjFHZFc1amRHbHZibE4wY21sdVp5aDJLU2s3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJWUmxjbTF6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJSFpoYkhWbGMxdDBaWEp0YzF0cFhWMGdQU0FvZG1Gc2RXVnpRWEp5WVhsYmFWMGdJVDA5SUhWdVpHVm1hVzVsWkNrZ1B5QndZWEp6WlVac2IyRjBLSFpoYkhWbGMwRnljbUY1VzJsZEtTQTZJREU3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIWmhiSFZsY3p0Y2JpQWdmVHRjYm4xY2JseHVMeXBjYmlBZ1UzQnNhWFFnWVNCMllXeDFaU0JwYm5SdklHRWdkbUZzZFdVdmRXNXBkQ0J2WW1wbFkzUmNiaUFnWEc0Z0lDQWdYQ0l5TURCd2VGd2lJQzArSUhzZ2RtRnNkV1U2SURJd01Dd2dkVzVwZERvZ1hDSndlRndpSUgxY2JpQWdJQ0JjYmlBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCV1lXeDFaU0IwYnlCemNHeHBkRnh1SUNCQWNtVjBkWEp1SUZ0dlltcGxZM1JkT2lCUFltcGxZM1FnZDJsMGFDQjJZV3gxWlNCaGJtUWdkVzVwZENCd2NtOXdjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JtYVc1a1ZtRnNkV1ZCYm1SVmJtbDBJRDBnS0haaGJIVmxLU0E5UGlCN1hHNGdJR2xtSUNoMllXeDFaUzV0WVhSamFDa2dlMXh1SUNBZ0lHTnZibk4wSUhOd2JHbDBWbUZzZFdVZ1BTQjJZV3gxWlM1dFlYUmphQ2d2S0MwL1hGeGtLbHhjTGo5Y1hHUXFLU2d1S2lrdktUdGNibHh1SUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNCMllXeDFaVG9nY0dGeWMyVkdiRzloZENoemNHeHBkRlpoYkhWbFd6RmRLU3hjYmlBZ0lDQWdJSFZ1YVhRNklDQnpjR3hwZEZaaGJIVmxXekpkWEc0Z0lDQWdmVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J5WlhSMWNtNGdleUIyWVd4MVpTQjlPMXh1SUNCOVhHNTlPMXh1WEc0dktseHVJQ0JUY0d4cGRDQmpiMnh2Y2lCemRISnBibWNnYVc1MGJ5QnRZWEFnYjJZZ1kyOXNiM0lnY0hKdmNHVnlkR2xsYzF4dVhHNGdJRndpY21kaVlTZ3lOVFVzSURJMU5Td2dNalUxTENBd0tWd2lMQ0JiWENKU1pXUmNJaXdnSjBkeVpXVnVYQ0lzSUZ3aVFteDFaVndpTENCY0lrRnNjR2hoWENKZFhHNWNiaUFnZXlCU1pXUTZJREkxTlM0dUxpQjlYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2RsZEVOdmJHOXlWbUZzZFdWeklEMGdLSFpoYkhWbExDQmpiMnh2Y2xSbGNtMXpLU0E5UGlCN1hHNGdJR052Ym5OMElHNTFiVU52Ykc5eVZHVnliWE1nUFNCamIyeHZjbFJsY20xekxteGxibWQwYUR0Y2JpQWdZMjl1YzNRZ1kyOXNiM0pXWVd4MVpYTWdQU0I3ZlR0Y2JpQWdZMjl1YzNRZ1kyOXNiM0p6SUQwZ2MzQnNhWFJEYjIxdFlVUmxiR2x0YVhSbFpDaG5aWFJXWVd4MVpVWnliMjFHZFc1amRHbHZibE4wY21sdVp5aDJZV3gxWlNrcE8xeHVYRzRnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JuVnRRMjlzYjNKVVpYSnRjenNnYVNzcktTQjdYRzRnSUNBZ1kyOXNiM0pXWVd4MVpYTmJZMjlzYjNKVVpYSnRjMXRwWFYwZ1BTQW9ZMjlzYjNKelcybGRJQ0U5UFNCMWJtUmxabWx1WldRcElEOGdZMjlzYjNKelcybGRJRG9nTVR0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCamIyeHZjbFpoYkhWbGN6dGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcHMgPSBleHBvcnRzLmNsYW1wID0gZXhwb3J0cy5jbGFtcE92ZXIgPSBleHBvcnRzLmNsYW1wVW5kZXIgPSBleHBvcnRzLmludGVycG9sYXRlID0gZXhwb3J0cy5mbG93ID0gZXhwb3J0cy5hcHBlbmRVbml0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuL2NhbGMnKTtcblxuLyoqXG4gKiBBcHBlbmQgVW5pdFxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBhcHBlbmQgdGhlIHVuaXQgdG8gYSBnaXZlbiB2YWx1ZVxuICogYXBwZW5kVW5pdCgncHgnKSgyMCkgLT4gJzIwcHgnXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVuaXQpXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBhcHBlbmRVbml0ID0gZXhwb3J0cy5hcHBlbmRVbml0ID0gZnVuY3Rpb24gKHVuaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuICcnICsgdiArIHVuaXQ7XG4gIH07XG59O1xuXG4vKipcbiAqIEZsb3dcbiAqIENvbXBvc2Ugb3RoZXIgdHJhbnNmb3JtZXJzIHRvIHJ1biBsaW5lYXJpbHlcbiAqIGZsb3cobWluKDIwKSwgbWF4KDQwKSlcbiAqIEBwYXJhbSAgey4uLmZ1bmN0aW9uc30gdHJhbnNmb3JtZXJzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xudmFyIGZsb3cgPSBleHBvcnRzLmZsb3cgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB0cmFuc2Zvcm1lcnMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB0cmFuc2Zvcm1lcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoYWNjKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgdiA9IGFjYztcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0uYXBwbHkodHJhbnNmb3JtZXJzLCBbdl0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG5cbnZhciBpbnRlcnBvbGF0ZSA9IGV4cG9ydHMuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiAoaW5wdXQsIG91dHB1dCwgcmFuZ2VFYXNpbmcpIHtcbiAgdmFyIHJhbmdlTGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICB2YXIgZmluYWxJbmRleCA9IHJhbmdlTGVuZ3RoIC0gMTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1pbmltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPD0gaW5wdXRbMF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbMF07XG4gICAgfVxuXG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtYXhpbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2ID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgIH1cblxuICAgIHZhciBpID0gMTtcblxuICAgIC8vIEZpbmQgaW5kZXggb2YgcmFuZ2Ugc3RhcnRcbiAgICBmb3IgKDsgaSA8IHJhbmdlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpbnB1dFtpXSA+IHYgfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJvZ3Jlc3NJblJhbmdlID0gKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbnB1dFtpIC0gMV0sIGlucHV0W2ldLCB2KTtcbiAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IHJhbmdlRWFzaW5nID8gcmFuZ2VFYXNpbmdbaV0ocHJvZ3Jlc3NJblJhbmdlKSA6IHByb2dyZXNzSW5SYW5nZTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShvdXRwdXRbaSAtIDFdLCBvdXRwdXRbaV0sIGVhc2VkUHJvZ3Jlc3MpO1xuICB9O1xufTtcblxuLyoqXG4gKiBDbGFtcCB2YWx1ZSBiZXR3ZWVuXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlc3RyaWN0IGEgZ2l2ZW4gdmFsdWUgYmV0d2VlbiBgbWluYCBhbmQgYG1heGBcbiAqIEBwYXJhbSAge251bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgY2xhbXBVbmRlciA9IGV4cG9ydHMuY2xhbXBVbmRlciA9IGZ1bmN0aW9uIChtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHYsIG1heCk7XG4gIH07XG59O1xudmFyIGNsYW1wT3ZlciA9IGV4cG9ydHMuY2xhbXBPdmVyID0gZnVuY3Rpb24gKG1pbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgodiwgbWluKTtcbiAgfTtcbn07XG52YXIgY2xhbXAgPSBleHBvcnRzLmNsYW1wID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIHJldHVybiBmbG93KGNsYW1wT3ZlcihtaW4pLCBjbGFtcFVuZGVyKG1heCkpO1xufTtcblxudmFyIHN0ZXBzID0gZXhwb3J0cy5zdGVwcyA9IGZ1bmN0aW9uIChzdGVwcywgbWluLCBtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHByb2dyZXNzID0gKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShtaW4sIG1heCwgdik7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5zdGVwUHJvZ3Jlc3MpKHN0ZXBzLCBwcm9ncmVzcyk7XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRISmhibk5tYjNKdFpYSnpMbXB6SWwwc0ltNWhiV1Z6SWpwYkltRndjR1Z1WkZWdWFYUWlMQ0oxYm1sMElpd2lkaUlzSW1ac2IzY2lMQ0owY21GdWMyWnZjbTFsY25NaUxDSnVkVzFVY21GdWMyWnZjbTFsY25NaUxDSnNaVzVuZEdnaUxDSnBJaXdpWVdOaklpd2lZWEpuY3lJc0ltbHVkR1Z5Y0c5c1lYUmxJaXdpYVc1d2RYUWlMQ0p2ZFhSd2RYUWlMQ0p5WVc1blpVVmhjMmx1WnlJc0luSmhibWRsVEdWdVozUm9JaXdpWm1sdVlXeEpibVJsZUNJc0luQnliMmR5WlhOelNXNVNZVzVuWlNJc0ltVmhjMlZrVUhKdlozSmxjM01pTENKamJHRnRjRlZ1WkdWeUlpd2liV0Y0SWl3aVRXRjBhQ0lzSW0xcGJpSXNJbU5zWVcxd1QzWmxjaUlzSW1Oc1lXMXdJaXdpYzNSbGNITWlMQ0p3Y205bmNtVnpjeUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlFUczdRVUZGUVRzN096czdPenRCUVU5UExFbEJRVTFCTEd0RFFVRmhMRlZCUVVORExFbEJRVVE3UVVGQlFTeFRRVUZWTEZWQlFVTkRMRU5CUVVRN1FVRkJRU3huUWtGQlZVRXNRMEZCVml4SFFVRmpSQ3hKUVVGa08wRkJRVUVzUjBGQlZqdEJRVUZCTEVOQlFXNUNPenRCUVVWUU96czdPenM3TzBGQlQwOHNTVUZCVFVVc2MwSkJRVThzV1VGQmNVSTdRVUZCUVN4dlEwRkJha0pETEZsQlFXbENPMEZCUVdwQ1FTeG5Ra0ZCYVVJN1FVRkJRVHM3UVVGRGRrTXNUVUZCVFVNc2EwSkJRV3RDUkN4aFFVRmhSU3hOUVVGeVF6dEJRVU5CTEUxQlFVbERMRWxCUVVrc1EwRkJVanM3UVVGRlFTeFRRVUZQTEZWQlFVTkRMRWRCUVVRc1JVRkJhMEk3UVVGQlFTeDFRMEZCVkVNc1NVRkJVenRCUVVGVVFTeFZRVUZUTzBGQlFVRTdPMEZCUTNaQ0xGRkJRVWxRTEVsQlFVbE5MRWRCUVZJN1FVRkRRU3hUUVVGTFJDeEpRVUZKTEVOQlFWUXNSVUZCV1VFc1NVRkJTVVlzWlVGQmFFSXNSVUZCYVVORkxFZEJRV3BETEVWQlFYTkRPMEZCUTNCRFRDeFZRVUZKUlN4aFFVRmhSeXhEUVVGaUxIVkNRVUZuUWt3c1EwRkJhRUlzVTBGQmMwSlBMRWxCUVhSQ0xFVkJRVW83UVVGRFJEczdRVUZGUkN4WFFVRlBVQ3hEUVVGUU8wRkJRMFFzUjBGUVJEdEJRVkZFTEVOQldrMDdPMEZCWTBFc1NVRkJUVkVzYjBOQlFXTXNWVUZCUTBNc1MwRkJSQ3hGUVVGUlF5eE5RVUZTTEVWQlFXZENReXhYUVVGb1FpeEZRVUZuUXp0QlFVTjZSQ3hOUVVGTlF5eGpRVUZqU0N4TlFVRk5UQ3hOUVVFeFFqdEJRVU5CTEUxQlFVMVRMR0ZCUVdGRUxHTkJRV01zUTBGQmFrTTdPMEZCUlVFc1UwRkJUeXhWUVVGRFdpeERRVUZFTEVWQlFVODdRVUZEV2p0QlFVTkJMRkZCUVVsQkxFdEJRVXRUTEUxQlFVMHNRMEZCVGl4RFFVRlVMRVZCUVcxQ08wRkJRMnBDTEdGQlFVOURMRTlCUVU4c1EwRkJVQ3hEUVVGUU8wRkJRMFE3TzBGQlJVUTdRVUZEUVN4UlFVRkpWaXhMUVVGTFV5eE5RVUZOU1N4VlFVRk9MRU5CUVZRc1JVRkJORUk3UVVGRE1VSXNZVUZCVDBnc1QwRkJUMGNzVlVGQlVDeERRVUZRTzBGQlEwUTdPMEZCUlVRc1VVRkJTVklzU1VGQlNTeERRVUZTT3p0QlFVVkJPMEZCUTBFc1YwRkJUMEVzU1VGQlNVOHNWMEZCV0N4RlFVRjNRbEFzUjBGQmVFSXNSVUZCTmtJN1FVRkRNMElzVlVGQlNVa3NUVUZCVFVvc1EwRkJUaXhKUVVGWFRDeERRVUZZTEVsQlFXZENTeXhOUVVGTlVTeFZRVUV4UWl4RlFVRnpRenRCUVVOd1F6dEJRVU5FTzBGQlEwWTdPMEZCUlVRc1VVRkJUVU1zYTBKQlFXdENMR2REUVVGeFFrd3NUVUZCVFVvc1NVRkJTU3hEUVVGV0xFTkJRWEpDTEVWQlFXMURTU3hOUVVGTlNpeERRVUZPTEVOQlFXNURMRVZCUVRaRFRDeERRVUUzUXl4RFFVRjRRanRCUVVOQkxGRkJRVTFsTEdkQ1FVRnBRa29zVjBGQlJDeEhRVUZuUWtFc1dVRkJXVTRzUTBGQldpeEZRVUZsVXl4bFFVRm1MRU5CUVdoQ0xFZEJRV3RFUVN4bFFVRjRSVHRCUVVOQkxGZEJRVThzWjBOQlFYRkNTaXhQUVVGUFRDeEpRVUZKTEVOQlFWZ3NRMEZCY2tJc1JVRkJiME5MTEU5QlFVOU1MRU5CUVZBc1EwRkJjRU1zUlVGQkswTlZMR0ZCUVM5RExFTkJRVkE3UVVGRFJDeEhRWFpDUkR0QlFYZENSQ3hEUVRWQ1RUczdRVUU0UWxBN096czdPenM3UVVGUFR5eEpRVUZOUXl4clEwRkJZU3hWUVVGRFF5eEhRVUZFTzBGQlFVRXNVMEZCVXl4VlFVRkRha0lzUTBGQlJEdEJRVUZCTEZkQlFVOXJRaXhMUVVGTFF5eEhRVUZNTEVOQlFWTnVRaXhEUVVGVUxFVkJRVmxwUWl4SFFVRmFMRU5CUVZBN1FVRkJRU3hIUVVGVU8wRkJRVUVzUTBGQmJrSTdRVUZEUVN4SlFVRk5SeXhuUTBGQldTeFZRVUZEUkN4SFFVRkVPMEZCUVVFc1UwRkJVeXhWUVVGRGJrSXNRMEZCUkR0QlFVRkJMRmRCUVU5clFpeExRVUZMUkN4SFFVRk1MRU5CUVZOcVFpeERRVUZVTEVWQlFWbHRRaXhIUVVGYUxFTkJRVkE3UVVGQlFTeEhRVUZVTzBGQlFVRXNRMEZCYkVJN1FVRkRRU3hKUVVGTlJTeDNRa0ZCVVN4VlFVRkRSaXhIUVVGRUxFVkJRVTFHTEVkQlFVNDdRVUZCUVN4VFFVRmphRUlzUzBGQlMyMUNMRlZCUVZWRUxFZEJRVllzUTBGQlRDeEZRVUZ4UWtnc1YwRkJWME1zUjBGQldDeERRVUZ5UWl4RFFVRmtPMEZCUVVFc1EwRkJaRHM3UVVGRlFTeEpRVUZOU3l4M1FrRkJVU3hWUVVGRFFTeExRVUZFTEVWQlFWRklMRWRCUVZJc1JVRkJZVVlzUjBGQllqdEJRVUZCTEZOQlFYRkNMRlZCUVVOcVFpeERRVUZFTEVWQlFVODdRVUZETDBNc1VVRkJUWFZDTEZkQlFWY3NaME5CUVhGQ1NpeEhRVUZ5UWl4RlFVRXdRa1lzUjBGQk1VSXNSVUZCSzBKcVFpeERRVUV2UWl4RFFVRnFRanRCUVVOQkxGZEJRVThzZDBKQlFXRnpRaXhMUVVGaUxFVkJRVzlDUXl4UlFVRndRaXhEUVVGUU8wRkJRMFFzUjBGSWIwSTdRVUZCUVN4RFFVRmtJaXdpWm1sc1pTSTZJblJ5WVc1elptOXliV1Z5Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbExDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeXdnYzNSbGNGQnliMmR5WlhOeklIMGdabkp2YlNBbkxpOWpZV3hqSnp0Y2JseHVMeW9xWEc0Z0tpQkJjSEJsYm1RZ1ZXNXBkRnh1SUNvZ1EzSmxZWFJsY3lCaElHWjFibU4wYVc5dUlIUm9ZWFFnZDJsc2JDQmhjSEJsYm1RZ2RHaGxJSFZ1YVhRZ2RHOGdZU0JuYVhabGJpQjJZV3gxWlZ4dUlDb2dZWEJ3Wlc1a1ZXNXBkQ2duY0hnbktTZ3lNQ2tnTFQ0Z0p6SXdjSGduWEc0Z0tpQkFjR0Z5WVcwZ0lIdHpkSEpwYm1kOUlIVnVhWFFwWEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOVhHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmhjSEJsYm1SVmJtbDBJRDBnS0hWdWFYUXBJRDArSUNoMktTQTlQaUJnSkh0MmZTUjdkVzVwZEgxZ08xeHVYRzR2S2lwY2JpQXFJRVpzYjNkY2JpQXFJRU52YlhCdmMyVWdiM1JvWlhJZ2RISmhibk5tYjNKdFpYSnpJSFJ2SUhKMWJpQnNhVzVsWVhKcGJIbGNiaUFxSUdac2IzY29iV2x1S0RJd0tTd2diV0Y0S0RRd0tTbGNiaUFxSUVCd1lYSmhiU0FnZXk0dUxtWjFibU4wYVc5dWMzMGdkSEpoYm5ObWIzSnRaWEp6WEc0Z0tpQkFjbVYwZFhKdUlIdG1kVzVqZEdsdmJuMWNiaUFxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1pzYjNjZ1BTQW9MaTR1ZEhKaGJuTm1iM0p0WlhKektTQTlQaUI3WEc0Z0lHTnZibk4wSUc1MWJWUnlZVzV6Wm05eWJXVnljeUE5SUhSeVlXNXpabTl5YldWeWN5NXNaVzVuZEdnN1hHNGdJR3hsZENCcElEMGdNRHRjYmx4dUlDQnlaWFIxY200Z0tHRmpZeXdnTGk0dVlYSm5jeWtnUFQ0Z2UxeHVJQ0FnSUd4bGRDQjJJRDBnWVdOak8xeHVJQ0FnSUdadmNpQW9hU0E5SURBN0lHa2dQQ0J1ZFcxVWNtRnVjMlp2Y20xbGNuTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2RpQTlJSFJ5WVc1elptOXliV1Z5YzF0cFhTaDJMQ0F1TGk1aGNtZHpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RqdGNiaUFnZlR0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnBiblJsY25CdmJHRjBaU0E5SUNocGJuQjFkQ3dnYjNWMGNIVjBMQ0J5WVc1blpVVmhjMmx1WnlrZ1BUNGdlMXh1SUNCamIyNXpkQ0J5WVc1blpVeGxibWQwYUNBOUlHbHVjSFYwTG14bGJtZDBhRHRjYmlBZ1kyOXVjM1FnWm1sdVlXeEpibVJsZUNBOUlISmhibWRsVEdWdVozUm9JQzBnTVR0Y2JseHVJQ0J5WlhSMWNtNGdLSFlwSUQwK0lIdGNiaUFnSUNBdkx5QkpaaUIyWVd4MVpTQnZkWFJ6YVdSbElHMXBibWx0ZFcwZ2NtRnVaMlVzSUhGMWFXTnJiSGtnY21WMGRYSnVYRzRnSUNBZ2FXWWdLSFlnUEQwZ2FXNXdkWFJiTUYwcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCdmRYUndkWFJiTUYwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1NXWWdkbUZzZFdVZ2IzVjBjMmxrWlNCdFlYaHBiWFZ0SUhKaGJtZGxMQ0J4ZFdsamEyeDVJSEpsZEhWeWJseHVJQ0FnSUdsbUlDaDJJRDQ5SUdsdWNIVjBXMlpwYm1Gc1NXNWtaWGhkS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYjNWMGNIVjBXMlpwYm1Gc1NXNWtaWGhkTzF4dUlDQWdJSDFjYmx4dUlDQWdJR3hsZENCcElEMGdNVHRjYmx4dUlDQWdJQzh2SUVacGJtUWdhVzVrWlhnZ2IyWWdjbUZ1WjJVZ2MzUmhjblJjYmlBZ0lDQm1iM0lnS0RzZ2FTQThJSEpoYm1kbFRHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJR2xtSUNocGJuQjFkRnRwWFNBK0lIWWdmSHdnYVNBOVBUMGdabWx1WVd4SmJtUmxlQ2tnZTF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQmpiMjV6ZENCd2NtOW5jbVZ6YzBsdVVtRnVaMlVnUFNCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTaHBibkIxZEZ0cElDMGdNVjBzSUdsdWNIVjBXMmxkTENCMktUdGNiaUFnSUNCamIyNXpkQ0JsWVhObFpGQnliMmR5WlhOeklEMGdLSEpoYm1kbFJXRnphVzVuS1NBL0lISmhibWRsUldGemFXNW5XMmxkS0hCeWIyZHlaWE56U1c1U1lXNW5aU2tnT2lCd2NtOW5jbVZ6YzBsdVVtRnVaMlU3WEc0Z0lDQWdjbVYwZFhKdUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLRzkxZEhCMWRGdHBJQzBnTVYwc0lHOTFkSEIxZEZ0cFhTd2daV0Z6WldSUWNtOW5jbVZ6Y3lrN1hHNGdJSDA3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRU5zWVcxd0lIWmhiSFZsSUdKbGRIZGxaVzVjYmlBcUlFTnlaV0YwWlhNZ1lTQm1kVzVqZEdsdmJpQjBhR0YwSUhkcGJHd2djbVZ6ZEhKcFkzUWdZU0JuYVhabGJpQjJZV3gxWlNCaVpYUjNaV1Z1SUdCdGFXNWdJR0Z1WkNCZ2JXRjRZRnh1SUNvZ1FIQmhjbUZ0SUNCN2JuVnRZbVZ5ZlNCdGFXNWNiaUFxSUVCd1lYSmhiU0FnZTI1MWJXSmxjbjBnYldGNFhHNGdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlYRzRnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYkdGdGNGVnVaR1Z5SUQwZ0tHMWhlQ2tnUFQ0Z0tIWXBJRDArSUUxaGRHZ3ViV2x1S0hZc0lHMWhlQ2s3WEc1bGVIQnZjblFnWTI5dWMzUWdZMnhoYlhCUGRtVnlJRDBnS0cxcGJpa2dQVDRnS0hZcElEMCtJRTFoZEdndWJXRjRLSFlzSUcxcGJpazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyeGhiWEFnUFNBb2JXbHVMQ0J0WVhncElEMCtJR1pzYjNjb1kyeGhiWEJQZG1WeUtHMXBiaWtzSUdOc1lXMXdWVzVrWlhJb2JXRjRLU2s3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J6ZEdWd2N5QTlJQ2h6ZEdWd2N5d2diV2x1TENCdFlYZ3BJRDArSUNoMktTQTlQaUI3WEc0Z0lHTnZibk4wSUhCeWIyZHlaWE56SUQwZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9iV2x1TENCdFlYZ3NJSFlwTzF4dUlDQnlaWFIxY200Z2MzUmxjRkJ5YjJkeVpYTnpLSE4wWlhCekxDQndjbTluY21WemN5azdYRzU5TzF4dVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBWYWx1ZSA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhWYWx1ZSwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVmFsdWUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZhbHVlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVmFsdWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gdjtcbiAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnVwZGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIFZhbHVlO1xufShfMi5kZWZhdWx0KTtcblxuVmFsdWUuZGVmYXVsdFByb3BzID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICByZXR1cm4gbmV3IFZhbHVlKHsgY3VycmVudDogY3VycmVudCB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzWmhiSFZsTG1weklsMHNJbTVoYldWeklqcGJJbFpoYkhWbElpd2ljMlYwSWl3aWRpSXNJbU4xY25KbGJuUWlMQ0oxY0dSaGRHVWlMQ0prWldaaGRXeDBVSEp2Y0hNaUxDSndZWE56YVhabElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3pzN096czdPenRKUVVWTlFTeExPenM3T3pzN096czdhMEpCUzBwRExFY3NaMEpCUVVsRExFTXNSVUZCUnp0QlFVTk1MRk5CUVV0RExFOUJRVXdzUjBGQlpVUXNRMEZCWmp0QlFVTkJMR3REUVVGakxFdEJRVXRGTEUxQlFXNUNPMEZCUTBRc1J6czdPenM3UVVGU1Iwb3NTeXhEUVVOSFN5eFpMRWRCUVdVN1FVRkRjRUpETEZkQlFWTTdRVUZFVnl4RE96dHJRa0ZWVkN4VlFVRkRTQ3hQUVVGRU8wRkJRVUVzVTBGQllTeEpRVUZKU0N4TFFVRktMRU5CUVZVc1JVRkJSVWNzWjBKQlFVWXNSVUZCVml4RFFVRmlPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSjJZV3gxWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1YVcxd2IzSjBJSHNnYjI1R2NtRnRaVlZ3WkdGMFpTQjlJR1p5YjIwZ0p5NHVMMlp5WVcxbGMzbHVZeWM3WEc1Y2JtTnNZWE56SUZaaGJIVmxJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYzNSaGRHbGpJR1JsWm1GMWJIUlFjbTl3Y3lBOUlIdGNiaUFnSUNCd1lYTnphWFpsT2lCMGNuVmxYRzRnSUgwN1hHNWNiaUFnYzJWMEtIWXBJSHRjYmlBZ0lDQjBhR2x6TG1OMWNuSmxiblFnUFNCMk8xeHVJQ0FnSUc5dVJuSmhiV1ZWY0dSaGRHVW9kR2hwY3k1MWNHUmhkR1VwTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoamRYSnlaVzUwS1NBOVBpQnVaWGNnVm1Gc2RXVW9leUJqZFhKeVpXNTBJSDBwTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdmFsdWUuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBTVkdSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudFxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVzKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTVkdSZW5kZXJlciA9IGZ1bmN0aW9uIChfUmVuZGVyZXIpIHtcbiAgX2luaGVyaXRzKFNWR1JlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIFNWR1JlbmRlcmVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNWR1JlbmRlcmVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICB2YXIgX3Byb3BzJGVsZW1lbnQkZ2V0QkJvID0gcHJvcHMuZWxlbWVudC5nZXRCQm94KCksXG4gICAgICAgIHggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueCxcbiAgICAgICAgeSA9IF9wcm9wcyRlbGVtZW50JGdldEJCby55LFxuICAgICAgICB3aWR0aCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLmhlaWdodDtcblxuICAgIF90aGlzLmVsZW1lbnREaW1lbnNpb25zID0geyB4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU1ZHUmVuZGVyZXIucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICB2YXIgYXR0cnMgPSAoMCwgX2J1aWxkMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCB0aGlzLmVsZW1lbnREaW1lbnNpb25zKTtcbiAgICAoMCwgX3V0aWxzLnNldERPTUF0dHJzKShlbGVtZW50LCBhdHRycyk7XG4gIH07XG5cbiAgU1ZHUmVuZGVyZXIucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZChrZXkpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuXG4gICAgaWYgKCFfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2YWx1ZVR5cGUgPSBfdmFsdWVUeXBlczIuZGVmYXVsdFtrZXldO1xuICAgICAgcmV0dXJuIHZhbHVlVHlwZSA/IHZhbHVlVHlwZS5kZWZhdWx0IDogMDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFNWR1JlbmRlcmVyO1xufShfMi5kZWZhdWx0KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSW1Wc1pXMWxiblFpTENKd2NtOXdjeUlzSWxOV1IxSmxibVJsY21WeUlpd2laMlYwUWtKdmVDSXNJbmdpTENKNUlpd2lkMmxrZEdnaUxDSm9aV2xuYUhRaUxDSmxiR1Z0Wlc1MFJHbHRaVzV6YVc5dWN5SXNJbTl1VW1WdVpHVnlJaXdpWVhSMGNuTWlMQ0p6ZEdGMFpTSXNJbTl1VW1WaFpDSXNJbXRsZVNJc0ltZGxkRUYwZEhKcFluVjBaU0lzSW5aaGJIVmxWSGx3WlNJc0ltUmxabUYxYkhRaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dHJRa0ZuUTJVc1ZVRkJWVUVzVDBGQlZpeEZRVUZ0UWtNc1MwRkJia0lzUlVGQk1FSTdRVUZEZGtNc1UwRkJUeXhKUVVGSlF5eFhRVUZLTzBGQlEweEdPMEZCUkVzc1MwRkZSa01zUzBGR1JTeEZRVUZRTzBGQlNVUXNRenM3UVVGeVEwUTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096czdPenM3T3p0SlFVVk5ReXhYT3pzN1FVRkRTaXgxUWtGQldVUXNTMEZCV2l4RlFVRnRRanRCUVVGQk96dEJRVUZCTEdsRVFVTnFRaXh4UWtGQlRVRXNTMEZCVGl4RFFVUnBRanM3UVVGQlFTeG5RMEZIWlVFc1RVRkJUVVFzVDBGQlRpeERRVUZqUnl4UFFVRmtMRVZCU0dZN1FVRkJRU3hSUVVkVVF5eERRVWhUTEhsQ1FVZFVRU3hEUVVoVE8wRkJRVUVzVVVGSFRrTXNRMEZJVFN4NVFrRkhUa0VzUTBGSVRUdEJRVUZCTEZGQlIwaERMRXRCU0Vjc2VVSkJSMGhCTEV0QlNFYzdRVUZCUVN4UlFVZEpReXhOUVVoS0xIbENRVWRKUVN4TlFVaEtPenRCUVVscVFpeFZRVUZMUXl4cFFrRkJUQ3hIUVVGNVFpeEZRVUZGU2l4SlFVRkdMRVZCUVV0RExFbEJRVXdzUlVGQlVVTXNXVUZCVWl4RlFVRmxReXhqUVVGbUxFVkJRWHBDTzBGQlNtbENPMEZCUzJ4Q096dDNRa0ZGUkVVc1VTeDFRa0ZCVnp0QlFVRkJMRkZCUTBSVUxFOUJSRU1zUjBGRFZ5eExRVUZMUXl4TFFVUm9RaXhEUVVORVJDeFBRVVJET3p0QlFVVlVMRkZCUVUxVkxGRkJRVkVzY1VKQlFVMHNTMEZCUzBNc1MwRkJXQ3hGUVVGclFpeExRVUZMU0N4cFFrRkJka0lzUTBGQlpEdEJRVU5CTERSQ1FVRlpVaXhQUVVGYUxFVkJRWEZDVlN4TFFVRnlRanRCUVVORUxFYzdPM2RDUVVWRVJTeE5MRzFDUVVGUFF5eEhMRVZCUVVzN1FVRkJRU3hSUVVOR1lpeFBRVVJGTEVkQlExVXNTMEZCUzBNc1MwRkVaaXhEUVVOR1JDeFBRVVJGT3pzN1FVRkhWaXhSUVVGSkxFTkJRVU1zZVVKQlFXVmhMRWRCUVdZc1EwRkJUQ3hGUVVFd1FqdEJRVU40UWl4aFFVRlBZaXhSUVVGUll5eFpRVUZTTEVOQlFYRkNSQ3hIUVVGeVFpeERRVUZRTzBGQlEwUXNTMEZHUkN4TlFVVlBPMEZCUTB3c1ZVRkJUVVVzV1VGQldTeHhRa0ZCWVVZc1IwRkJZaXhEUVVGc1FqdEJRVU5CTEdGQlFWRkZMRk5CUVVRc1IwRkJZMEVzVlVGQlZVTXNUMEZCZUVJc1IwRkJhME1zUTBGQmVrTTdRVUZEUkR0QlFVTkdMRWNpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1VtVnVaR1Z5WlhJZ1puSnZiU0FuTGk0dkp6dGNibWx0Y0c5eWRDQmlkV2xzWkNCbWNtOXRJQ2N1TDJKMWFXeGtKenRjYm1sdGNHOXlkQ0IwY21GdWMyWnZjbTFRY205d2N5Qm1jbTl0SUNjdUxpOWpjM012ZEhKaGJuTm1iM0p0TFhCeWIzQnpKenRjYm1sdGNHOXlkQ0IyWVd4MVpWUjVjR1ZOWVhBZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5YzdYRzVwYlhCdmNuUWdleUJ6WlhSRVQwMUJkSFJ5Y3lCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtTnNZWE56SUZOV1IxSmxibVJsY21WeUlHVjRkR1Z1WkhNZ1VtVnVaR1Z5WlhJZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeWtnZTF4dUlDQWdJSE4xY0dWeUtIQnliM0J6S1R0Y2JseHVJQ0FnSUdOdmJuTjBJSHNnZUN3Z2VTd2dkMmxrZEdnc0lHaGxhV2RvZENCOUlEMGdjSEp2Y0hNdVpXeGxiV1Z1ZEM1blpYUkNRbTk0S0NrN1hHNGdJQ0FnZEdocGN5NWxiR1Z0Wlc1MFJHbHRaVzV6YVc5dWN5QTlJSHNnZUN3Z2VTd2dkMmxrZEdnc0lHaGxhV2RvZENCOU8xeHVJQ0I5WEc1Y2JpQWdiMjVTWlc1a1pYSW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmxiR1Z0Wlc1MElIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR052Ym5OMElHRjBkSEp6SUQwZ1luVnBiR1FvZEdocGN5NXpkR0YwWlN3Z2RHaHBjeTVsYkdWdFpXNTBSR2x0Wlc1emFXOXVjeWs3WEc0Z0lDQWdjMlYwUkU5TlFYUjBjbk1vWld4bGJXVnVkQ3dnWVhSMGNuTXBPMXh1SUNCOVhHNWNiaUFnYjI1U1pXRmtLR3RsZVNrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWld4bGJXVnVkQ0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNibHh1SUNBZ0lHbG1JQ2doZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdWc1pXMWxiblF1WjJWMFFYUjBjbWxpZFhSbEtHdGxlU2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHTnZibk4wSUhaaGJIVmxWSGx3WlNBOUlIWmhiSFZsVkhsd1pVMWhjRnRyWlhsZE8xeHVJQ0FnSUNBZ2NtVjBkWEp1SUNoMllXeDFaVlI1Y0dVcElEOGdkbUZzZFdWVWVYQmxMbVJsWm1GMWJIUWdPaUF3TzF4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUFvWld4bGJXVnVkQ3dnY0hKdmNITXBJSHRjYmlBZ2NtVjBkWEp1SUc1bGR5QlRWa2RTWlc1a1pYSmxjaWg3WEc0Z0lDQWdaV3hsYldWdWRDeGNiaUFnSUNBdUxpNXdjbTl3YzF4dUlDQjlLVHRjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgU1ZHUGF0aFJlbmRlcmVyKF9leHRlbmRzKHtcbiAgICBlbGVtZW50OiBlbGVtZW50XG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTVkdQYXRoUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhTVkdQYXRoUmVuZGVyZXIsIF9SZW5kZXJlcik7XG5cbiAgZnVuY3Rpb24gU1ZHUGF0aFJlbmRlcmVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNWR1BhdGhSZW5kZXJlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVuZGVyZXIuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgdmFyIF9wcm9wcyRlbGVtZW50JGdldEJCbyA9IHByb3BzLmVsZW1lbnQuZ2V0QkJveCgpLFxuICAgICAgICB4ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLngsXG4gICAgICAgIHkgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueSxcbiAgICAgICAgd2lkdGggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby5oZWlnaHQ7XG5cbiAgICBfdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5LFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBwYXRoTGVuZ3RoOiBwcm9wcy5lbGVtZW50LmdldFRvdGFsTGVuZ3RoKClcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFNWR1BhdGhSZW5kZXJlci5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICB2YXIgcGF0aExlbmd0aCA9IHRoaXMuZWxlbWVudERpbWVuc2lvbnMucGF0aExlbmd0aDtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgICgwLCBfdXRpbHMuc2V0RE9NQXR0cnMpKGVsZW1lbnQsICgwLCBfYnVpbGQyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIHBhdGhMZW5ndGgpKTtcbiAgfTtcblxuICBTVkdQYXRoUmVuZGVyZXIucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5lbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICB9O1xuXG4gIHJldHVybiBTVkdQYXRoUmVuZGVyZXI7XG59KF8yLmRlZmF1bHQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkxYQmhkR2d2YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2xzaVpXeGxiV1Z1ZENJc0luQnliM0J6SWl3aVUxWkhVR0YwYUZKbGJtUmxjbVZ5SWl3aVoyVjBRa0p2ZUNJc0luZ2lMQ0o1SWl3aWQybGtkR2dpTENKb1pXbG5hSFFpTENKbGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lJc0luQmhkR2hNWlc1bmRHZ2lMQ0puWlhSVWIzUmhiRXhsYm1kMGFDSXNJbTl1VW1WdVpHVnlJaXdpYzNSaGRHVWlMQ0p2YmxKbFlXUWlMQ0pyWlhraUxDSm5aWFJCZEhSeWFXSjFkR1VpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0clFrRTJRbVVzVlVGQlZVRXNUMEZCVml4RlFVRnRRa01zUzBGQmJrSXNSVUZCTUVJN1FVRkRka01zVTBGQlR5eEpRVUZKUXl4bFFVRktPMEZCUTB4R08wRkJSRXNzUzBGRlJrTXNTMEZHUlN4RlFVRlFPMEZCU1VRc1F6czdRVUZzUTBRN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdPenM3TzBsQlJVMURMR1U3T3p0QlFVTktMREpDUVVGWlJDeExRVUZhTEVWQlFXMUNPMEZCUVVFN08wRkJRVUVzYVVSQlEycENMSEZDUVVGTlFTeExRVUZPTEVOQlJHbENPenRCUVVGQkxHZERRVWRsUVN4TlFVRk5SQ3hQUVVGT0xFTkJRV05ITEU5QlFXUXNSVUZJWmp0QlFVRkJMRkZCUjFSRExFTkJTRk1zZVVKQlIxUkJMRU5CU0ZNN1FVRkJRU3hSUVVkT1F5eERRVWhOTEhsQ1FVZE9RU3hEUVVoTk8wRkJRVUVzVVVGSFNFTXNTMEZJUnl4NVFrRkhTRUVzUzBGSVJ6dEJRVUZCTEZGQlIwbERMRTFCU0Vvc2VVSkJSMGxCTEUxQlNFbzdPMEZCU1dwQ0xGVkJRVXRETEdsQ1FVRk1MRWRCUVhsQ08wRkJRM1pDU2l4VlFVUjFRanRCUVVWMlFrTXNWVUZHZFVJN1FVRkhka0pETEd0Q1FVaDFRanRCUVVsMlFrTXNiMEpCU25WQ08wRkJTM1pDUlN4clFrRkJXVklzVFVGQlRVUXNUMEZCVGl4RFFVRmpWU3hqUVVGa08wRkJURmNzUzBGQmVrSTdRVUZLYVVJN1FVRlhiRUk3T3pSQ1FVVkVReXhSTEhWQ1FVRlhPMEZCUVVFc1VVRkRSRVlzVlVGRVF5eEhRVU5qTEV0QlFVdEVMR2xDUVVSdVFpeERRVU5FUXl4VlFVUkRPMEZCUVVFc1VVRkZSRlFzVDBGR1F5eEhRVVZYTEV0QlFVdERMRXRCUm1oQ0xFTkJSVVJFTEU5QlJrTTdPMEZCUjFRc05FSkJRVmxCTEU5QlFWb3NSVUZCY1VJc2NVSkJRVTBzUzBGQlMxa3NTMEZCV0N4RlFVRnJRa2dzVlVGQmJFSXNRMEZCY2tJN1FVRkRSQ3hIT3pzMFFrRkZSRWtzVFN4dFFrRkJUME1zUnl4RlFVRkxPMEZCUTFZc1YwRkJUeXhMUVVGTFlpeExRVUZNTEVOQlFWZEVMRTlCUVZnc1EwRkJiVUpsTEZsQlFXNUNMRU5CUVdkRFJDeEhRVUZvUXl4RFFVRlFPMEZCUTBRc1J5SXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JTWlc1a1pYSmxjaUJtY205dElDY3VMaThuTzF4dWFXMXdiM0owSUdKMWFXeGtJR1p5YjIwZ0p5NHZZblZwYkdRbk8xeHVhVzF3YjNKMElIc2djMlYwUkU5TlFYUjBjbk1nZlNCbWNtOXRJQ2N1TGk4dUxpOXBibU12ZFhScGJITW5PMXh1WEc1amJHRnpjeUJUVmtkUVlYUm9VbVZ1WkdWeVpYSWdaWGgwWlc1a2N5QlNaVzVrWlhKbGNpQjdYRzRnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6S1NCN1hHNGdJQ0FnYzNWd1pYSW9jSEp2Y0hNcE8xeHVYRzRnSUNBZ1kyOXVjM1FnZXlCNExDQjVMQ0IzYVdSMGFDd2dhR1ZwWjJoMElIMGdQU0J3Y205d2N5NWxiR1Z0Wlc1MExtZGxkRUpDYjNnb0tUdGNiaUFnSUNCMGFHbHpMbVZzWlcxbGJuUkVhVzFsYm5OcGIyNXpJRDBnZTF4dUlDQWdJQ0FnZUN4Y2JpQWdJQ0FnSUhrc1hHNGdJQ0FnSUNCM2FXUjBhQ3hjYmlBZ0lDQWdJR2hsYVdkb2RDeGNiaUFnSUNBZ0lIQmhkR2hNWlc1bmRHZzZJSEJ5YjNCekxtVnNaVzFsYm5RdVoyVjBWRzkwWVd4TVpXNW5kR2dvS1Z4dUlDQWdJSDA3WEc0Z0lIMWNibHh1SUNCdmJsSmxibVJsY2lncElIdGNiaUFnSUNCamIyNXpkQ0I3SUhCaGRHaE1aVzVuZEdnZ2ZTQTlJSFJvYVhNdVpXeGxiV1Z1ZEVScGJXVnVjMmx2Ym5NN1hHNGdJQ0FnWTI5dWMzUWdleUJsYkdWdFpXNTBJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUhObGRFUlBUVUYwZEhKektHVnNaVzFsYm5Rc0lHSjFhV3hrS0hSb2FYTXVjM1JoZEdVc0lIQmhkR2hNWlc1bmRHZ3BLVHRjYmlBZ2ZWeHVYRzRnSUc5dVVtVmhaQ2hyWlhrcElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXdjbTl3Y3k1bGJHVnRaVzUwTG1kbGRFRjBkSEpwWW5WMFpTaHJaWGtwTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUNobGJHVnRaVzUwTENCd2NtOXdjeWtnZTF4dUlDQnlaWFIxY200Z2JtVjNJRk5XUjFCaGRHaFNaVzVrWlhKbGNpaDdYRzRnSUNBZ1pXeGxiV1Z1ZEN4Y2JpQWdJQ0F1TGk1d2NtOXdjMXh1SUNCOUtUdGNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBkYXRhKSB7XG4gIHZhciBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDE7XG4gIHZhciBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMTtcbiAgdmFyIHRyYW5zZm9ybU9yaWdpblggPSBkYXRhLndpZHRoICogKChzdGF0ZS5vcmlnaW5YIHx8IDUwKSAvIDEwMCkgKyBkYXRhLng7XG4gIHZhciB0cmFuc2Zvcm1PcmlnaW5ZID0gZGF0YS5oZWlnaHQgKiAoKHN0YXRlLm9yaWdpblkgfHwgNTApIC8gMTAwKSArIGRhdGEueTtcbiAgdmFyIHNjYWxlVHJhbnNmb3JtWCA9IC10cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSk7XG4gIHZhciBzY2FsZVRyYW5zZm9ybVkgPSAtdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKTtcbiAgdmFyIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGU7XG4gIHZhciBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWTtcbiAgdmFyIHRyYW5zZm9ybSA9IHtcbiAgICB0cmFuc2xhdGU6ICd0cmFuc2xhdGUoJyArIHN0YXRlLnRyYW5zbGF0ZVggKyAnLCAnICsgc3RhdGUudHJhbnNsYXRlWSArICcpICcsXG4gICAgc2NhbGU6ICd0cmFuc2xhdGUoJyArIHNjYWxlVHJhbnNmb3JtWCArICcsICcgKyBzY2FsZVRyYW5zZm9ybVkgKyAnKSBzY2FsZSgnICsgc2NhbGUgKyAnLCAnICsgc2NhbGVZICsgJykgdHJhbnNsYXRlKCcgKyBzY2FsZVJlcGxhY2VYICsgJywgJyArIHNjYWxlUmVwbGFjZVkgKyAnKSAnLFxuICAgIHJvdGF0ZTogJ3JvdGF0ZSgnICsgc3RhdGUucm90YXRlICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblggKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWSArICcpICcsXG4gICAgc2tld1g6ICdza2V3WCgnICsgc3RhdGUuc2tld1ggKyAnKSAnLFxuICAgIHNrZXdZOiAnc2tld1koJyArIHN0YXRlLnNrZXdZICsgJykgJ1xuICB9O1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzWygwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICBmb3IgKHZhciBfa2V5IGluIHRyYW5zZm9ybSkge1xuICAgICAgaWYgKHRyYW5zZm9ybS5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gX2tleSA9PT0gJ3NjYWxlJyA/ICcxJyA6ICcwJztcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtfa2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDJKMWFXeGtMbXB6SWwwc0ltNWhiV1Z6SWpwYkltSjFhV3hrSWl3aVdrVlNUMTlPVDFSZldrVlNUeUlzSW5OMFlYUmxJaXdpWkdGMFlTSXNJbWhoYzFSeVlXNXpabTl5YlNJc0luQnliM0J6SWl3aWMyTmhiR1VpTENKMWJtUmxabWx1WldRaUxDSnpZMkZzWlZnaUxDSnpZMkZzWlZraUxDSjBjbUZ1YzJadmNtMVBjbWxuYVc1WUlpd2lkMmxrZEdnaUxDSnZjbWxuYVc1WUlpd2llQ0lzSW5SeVlXNXpabTl5YlU5eWFXZHBibGtpTENKb1pXbG5hSFFpTENKdmNtbG5hVzVaSWl3aWVTSXNJbk5qWVd4bFZISmhibk5tYjNKdFdDSXNJbk5qWVd4bFZISmhibk5tYjNKdFdTSXNJbk5qWVd4bFVtVndiR0ZqWlZnaUxDSnpZMkZzWlZKbGNHeGhZMlZaSWl3aWRISmhibk5tYjNKdElpd2lkSEpoYm5Oc1lYUmxJaXdpZEhKaGJuTnNZWFJsV0NJc0luUnlZVzV6YkdGMFpWa2lMQ0p5YjNSaGRHVWlMQ0p6YTJWM1dDSXNJbk5yWlhkWklpd2lhMlY1SWl3aWFHRnpUM2R1VUhKdmNHVnlkSGtpTENKa1pXWmhkV3gwVm1Gc2RXVWlMQ0p5WlhCc1lXTmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUzNkQ1FTeExPenRCUVV4NFFqczdRVUZEUVRzN096czdPMEZCUlVFc1NVRkJUVU1zWjBKQlFXZENMRTFCUVhSQ096dEJRVVZsTEZOQlFWTkVMRXRCUVZRc1EwRkJaVVVzUzBGQlppeEZRVUZ6UWtNc1NVRkJkRUlzUlVGQk5FSTdRVUZEZWtNc1RVRkJTVU1zWlVGQlpTeExRVUZ1UWp0QlFVTkJMRTFCUVUxRExGRkJRVkVzUlVGQlpEdEJRVU5CTEUxQlFVMURMRkZCUVZGS0xFMUJRVTFKTEV0QlFVNHNTMEZCWjBKRExGTkJRV2hDTEVkQlFUUkNUQ3hOUVVGTlNTeExRVUZPTEVsQlFXVk1MR0ZCUVRORExFZEJRVEpFUXl4TlFVRk5UU3hOUVVGT0xFbEJRV2RDTEVOQlFYcEdPMEZCUTBFc1RVRkJUVU1zVTBGQlUxQXNUVUZCVFU4c1RVRkJUaXhMUVVGcFFrWXNVMEZCYWtJc1IwRkJOa0pNTEUxQlFVMVBMRTFCUVU0c1NVRkJaMEpTTEdGQlFUZERMRWRCUVRaRVN5eFRRVUZUTEVOQlFYSkdPMEZCUTBFc1RVRkJUVWtzYlVKQlFXMUNVQ3hMUVVGTFVTeExRVUZNTEVsQlFXTXNRMEZCUTFRc1RVRkJUVlVzVDBGQlRpeEpRVUZwUWl4RlFVRnNRaXhKUVVGM1FpeEhRVUYwUXl4SlFVRTJRMVFzUzBGQlMxVXNRMEZCTTBVN1FVRkRRU3hOUVVGTlF5eHRRa0ZCYlVKWUxFdEJRVXRaTEUxQlFVd3NTVUZCWlN4RFFVRkRZaXhOUVVGTll5eFBRVUZPTEVsQlFXbENMRVZCUVd4Q0xFbEJRWGRDTEVkQlFYWkRMRWxCUVRoRFlpeExRVUZMWXl4RFFVRTFSVHRCUVVOQkxFMUJRVTFETEd0Q1FVRnJRaXhEUVVGRlVpeG5Ra0ZCUml4SlFVRnpRa29zVVVGQlVTeERRVUU1UWl4RFFVRjRRanRCUVVOQkxFMUJRVTFoTEd0Q1FVRnJRaXhEUVVGRlRDeG5Ra0ZCUml4SlFVRnpRa3dzVTBGQlV5eERRVUV2UWl4RFFVRjRRanRCUVVOQkxFMUJRVTFYTEdkQ1FVRm5RbFlzYlVKQlFXMUNTaXhMUVVGNlF6dEJRVU5CTEUxQlFVMWxMR2RDUVVGblFsQXNiVUpCUVcxQ1RDeE5RVUY2UXp0QlFVTkJMRTFCUVUxaExGbEJRVms3UVVGRGFFSkRMRGhDUVVGM1FuSkNMRTFCUVUxelFpeFZRVUU1UWl4VlFVRTJRM1JDTEUxQlFVMTFRaXhWUVVGdVJDeFBRVVJuUWp0QlFVVm9RbTVDTERCQ1FVRnZRbGtzWlVGQmNFSXNWVUZCZDBORExHVkJRWGhETEdkQ1FVRnJSV0lzUzBGQmJFVXNWVUZCTkVWSExFMUJRVFZGTEc5Q1FVRnBSMWNzWVVGQmFrY3NWVUZCYlVoRExHRkJRVzVJTEU5QlJtZENPMEZCUjJoQ1N5eDNRa0ZCYTBKNFFpeE5RVUZOZDBJc1RVRkJlRUlzVlVGQmJVTm9RaXhuUWtGQmJrTXNWVUZCZDBSSkxHZENRVUY0UkN4UFFVaG5RanRCUVVsb1FtRXNjMEpCUVdkQ2VrSXNUVUZCVFhsQ0xFdEJRWFJDTEU5QlNtZENPMEZCUzJoQ1F5eHpRa0ZCWjBJeFFpeE5RVUZOTUVJc1MwRkJkRUk3UVVGTVowSXNSMEZCYkVJN08wRkJVVUVzVDBGQlN5eEpRVUZKUXl4SFFVRlVMRWxCUVdkQ00wSXNTMEZCYUVJc1JVRkJkVUk3UVVGRGNrSXNVVUZCU1VFc1RVRkJUVFJDTEdOQlFVNHNRMEZCY1VKRUxFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkROMElzVlVGQlNTeDVRa0ZCWlVFc1IwRkJaaXhEUVVGS0xFVkJRWGxDTzBGQlEzWkNla0lzZFVKQlFXVXNTVUZCWmp0QlFVTkVMRTlCUmtRc1RVRkZUenRCUVVOTVF5eGpRVUZOTEhkQ1FVRlpkMElzUjBGQldpeERRVUZPTEVsQlFUQkNNMElzVFVGQlRUSkNMRWRCUVU0c1EwRkJNVUk3UVVGRFJEdEJRVU5HTzBGQlEwWTdPMEZCUlVRc1RVRkJTWHBDTEZsQlFVb3NSVUZCYTBJN1FVRkRhRUpETEZWQlFVMXBRaXhUUVVGT0xFZEJRV3RDTEVWQlFXeENPenRCUVVWQkxGTkJRVXNzU1VGQlNVOHNTVUZCVkN4SlFVRm5RbEFzVTBGQmFFSXNSVUZCTWtJN1FVRkRla0lzVlVGQlNVRXNWVUZCVlZFc1kwRkJWaXhEUVVGNVFrUXNTVUZCZWtJc1EwRkJTaXhGUVVGdFF6dEJRVU5xUXl4WlFVRk5SU3hsUVVGblFrWXNVMEZCVVN4UFFVRlVMRWRCUVc5Q0xFZEJRWEJDTEVkQlFUQkNMRWRCUVM5RE8wRkJRMEY0UWl4alFVRk5hVUlzVTBGQlRpeEpRVUZ0UWtFc1ZVRkJWVThzU1VGQlZpeEZRVUZsUnl4UFFVRm1MRU5CUVhWQ0xGbEJRWFpDTEVWQlFYRkRSQ3haUVVGeVF5eERRVUZ1UWp0QlFVTkVPMEZCUTBZN1FVRkRSanM3UVVGRlJDeFRRVUZQTVVJc1MwRkJVRHRCUVVORUlpd2labWxzWlNJNkltSjFhV3hrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWTJGdFpXeFViMFJoYzJnZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRYUnBiSE1uTzF4dWFXMXdiM0owSUhSeVlXNXpabTl5YlZCeWIzQnpJR1p5YjIwZ0p5NHVMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dVhHNWpiMjV6ZENCYVJWSlBYMDVQVkY5YVJWSlBJRDBnTUM0d01EQXhPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJpZFdsc1pDaHpkR0YwWlN3Z1pHRjBZU2tnZTF4dUlDQnNaWFFnYUdGelZISmhibk5tYjNKdElEMGdabUZzYzJVN1hHNGdJR052Ym5OMElIQnliM0J6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJSE5qWVd4bElEMGdjM1JoZEdVdWMyTmhiR1VnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JSE4wWVhSbExuTmpZV3hsSUh4OElGcEZVazlmVGs5VVgxcEZVazhnT2lCemRHRjBaUzV6WTJGc1pWZ2dmSHdnTVR0Y2JpQWdZMjl1YzNRZ2MyTmhiR1ZaSUQwZ2MzUmhkR1V1YzJOaGJHVlpJQ0U5UFNCMWJtUmxabWx1WldRZ1B5QnpkR0YwWlM1elkyRnNaVmtnZkh3Z1drVlNUMTlPVDFSZldrVlNUeUE2SUhOallXeGxJSHg4SURFN1hHNGdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ1BTQmtZWFJoTG5kcFpIUm9JQ29nS0NoemRHRjBaUzV2Y21sbmFXNVlJSHg4SURVd0tTQXZJREV3TUNrZ0t5QmtZWFJoTG5nN1hHNGdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxrZ1BTQmtZWFJoTG1obGFXZG9kQ0FxSUNnb2MzUmhkR1V1YjNKcFoybHVXU0I4ZkNBMU1Da2dMeUF4TURBcElDc2daR0YwWVM1NU8xeHVJQ0JqYjI1emRDQnpZMkZzWlZSeVlXNXpabTl5YlZnZ1BTQXRJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dLaUFvYzJOaGJHVWdLaUF4S1R0Y2JpQWdZMjl1YzNRZ2MyTmhiR1ZVY21GdWMyWnZjbTFaSUQwZ0xTQjBjbUZ1YzJadmNtMVBjbWxuYVc1WklDb2dLSE5qWVd4bFdTQXFJREVwTzF4dUlDQmpiMjV6ZENCelkyRnNaVkpsY0d4aFkyVllJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXQ0F2SUhOallXeGxPMXh1SUNCamIyNXpkQ0J6WTJGc1pWSmxjR3hoWTJWWklEMGdkSEpoYm5ObWIzSnRUM0pwWjJsdVdTQXZJSE5qWVd4bFdUdGNiaUFnWTI5dWMzUWdkSEpoYm5ObWIzSnRJRDBnZTF4dUlDQWdJSFJ5WVc1emJHRjBaVG9nWUhSeVlXNXpiR0YwWlNna2UzTjBZWFJsTG5SeVlXNXpiR0YwWlZoOUxDQWtlM04wWVhSbExuUnlZVzV6YkdGMFpWbDlLU0JnTEZ4dUlDQWdJSE5qWVd4bE9pQmdkSEpoYm5Oc1lYUmxLQ1I3YzJOaGJHVlVjbUZ1YzJadmNtMVlmU3dnSkh0elkyRnNaVlJ5WVc1elptOXliVmw5S1NCelkyRnNaU2drZTNOallXeGxmU3dnSkh0elkyRnNaVmw5S1NCMGNtRnVjMnhoZEdVb0pIdHpZMkZzWlZKbGNHeGhZMlZZZlN3Z0pIdHpZMkZzWlZKbGNHeGhZMlZaZlNrZ1lDeGNiaUFnSUNCeWIzUmhkR1U2SUdCeWIzUmhkR1VvSkh0emRHRjBaUzV5YjNSaGRHVjlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGg5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxsOUtTQmdMRnh1SUNBZ0lITnJaWGRZT2lCZ2MydGxkMWdvSkh0emRHRjBaUzV6YTJWM1dIMHBJR0FzWEc0Z0lDQWdjMnRsZDFrNklHQnphMlYzV1Nna2UzTjBZWFJsTG5OclpYZFpmU2tnWUZ4dUlDQjlPMXh1WEc0Z0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJR2xtSUNoemRHRjBaUzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNCcFppQW9kSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNCb1lYTlVjbUZ1YzJadmNtMGdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NISnZjSE5iWTJGdFpXeFViMFJoYzJnb2EyVjVLVjBnUFNCemRHRjBaVnRyWlhsZE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHbG1JQ2hvWVhOVWNtRnVjMlp2Y20wcElIdGNiaUFnSUNCd2NtOXdjeTUwY21GdWMyWnZjbTBnUFNBbkp6dGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGNtRnVjMlp2Y20wcElIdGNiaUFnSUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTB1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCa1pXWmhkV3gwVm1Gc2RXVWdQU0FvYTJWNUlEMDlQU0FuYzJOaGJHVW5LU0EvSUNjeEp5QTZJQ2N3Snp0Y2JpQWdJQ0FnSUNBZ2NISnZjSE11ZEhKaGJuTm1iM0p0SUNzOUlIUnlZVzV6Wm05eWJWdHJaWGxkTG5KbGNHeGhZMlVvTDNWdVpHVm1hVzVsWkM5bkxDQmtaV1poZFd4MFZtRnNkV1VwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ3Y205d2N6dGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS90eXBlcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGZpbGw6IF90eXBlcy5jb2xvcixcbiAgc3Ryb2tlOiBfdHlwZXMuY29sb3IsXG4gIHNjYWxlOiBfdHlwZXMuc2NhbGUsXG4gIHNjYWxlWDogX3R5cGVzLnNjYWxlLFxuICBzY2FsZVk6IF90eXBlcy5zY2FsZSxcbiAgZDogX3R5cGVzLmNvbXBsZXgsXG4gIHBvaW50czogX3R5cGVzLmNvbXBsZXgsXG4gIG9wYWNpdHk6IF90eXBlcy5hbHBoYSxcbiAgZmlsbE9wYWNpdHk6IF90eXBlcy5hbHBoYSxcbiAgc3Ryb2tlT3BhY2l0eTogX3R5cGVzLmFscGhhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwzWmhiSFZsTFhSNWNHVnpMbXB6SWwwc0ltNWhiV1Z6SWpwYkltWnBiR3dpTENKemRISnZhMlVpTENKelkyRnNaU0lzSW5OallXeGxXQ0lzSW5OallXeGxXU0lzSW1RaUxDSndiMmx1ZEhNaUxDSnZjR0ZqYVhSNUlpd2labWxzYkU5d1lXTnBkSGtpTENKemRISnZhMlZQY0dGamFYUjVJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN08ydENRVVZsTzBGQlEySkJMRzlDUVVSaE8wRkJSV0pETEhOQ1FVWmhPMEZCUjJKRExIRkNRVWhoTzBGQlNXSkRMSE5DUVVwaE8wRkJTMkpETEhOQ1FVeGhPMEZCVFdKRExHMUNRVTVoTzBGQlQySkRMSGRDUVZCaE8wRkJVV0pETEhWQ1FWSmhPMEZCVTJKRExESkNRVlJoTzBGQlZXSkRPMEZCVm1Fc1F5SXNJbVpwYkdVaU9pSjJZV3gxWlMxMGVYQmxjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR0ZzY0doaExDQmpiMnh2Y2l3Z1kyOXRjR3hsZUN3Z2MyTmhiR1VnZlNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlM5MGVYQmxjeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdabWxzYkRvZ1kyOXNiM0lzWEc0Z0lITjBjbTlyWlRvZ1kyOXNiM0lzWEc0Z0lITmpZV3hsT2lCelkyRnNaU3hjYmlBZ2MyTmhiR1ZZT2lCelkyRnNaU3hjYmlBZ2MyTmhiR1ZaT2lCelkyRnNaU3hjYmlBZ1pEb2dZMjl0Y0d4bGVDeGNiaUFnY0c5cGJuUnpPaUJqYjIxd2JHVjRMRnh1SUNCdmNHRmphWFI1T2lCaGJIQm9ZU3hjYmlBZ1ptbHNiRTl3WVdOcGRIazZJR0ZzY0doaExGeHVJQ0J6ZEhKdmEyVlBjR0ZqYVhSNU9pQmhiSEJvWVZ4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnQsIGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCAqIGxlbmd0aCArICdweCc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RhdGUsIGxlbmd0aCkge1xuICB2YXIgc3R5bGVzID0ge307XG4gIHZhciBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgbGVuZ3RoOiAwLFxuICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgfTtcbiAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MWEJoZEdndlluVnBiR1F1YW5NaVhTd2libUZ0WlhNaU9sc2ljR1Z5WTJWdWRGUnZVR2w0Wld4eklpd2ljR1Z5WTJWdWRDSXNJbXhsYm1kMGFDSXNJbkJoY25ObFJteHZZWFFpTENKemRHRjBaU0lzSW5OMGVXeGxjeUlzSW1SaGMyaEJjbkpoZVZOMGVXeGxjeUlzSW5Od1lXTnBibWNpTENKb1lYTkVZWE5vUVhKeVlYa2lMQ0pyWlhraUxDSm9ZWE5QZDI1UWNtOXdaWEowZVNJc0luWmhiSFZsSWwwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFUczdPenM3TzBGQlRVRXNTVUZCVFVFc2EwSkJRV3RDTEZWQlFVTkRMRTlCUVVRc1JVRkJWVU1zVFVGQlZqdEJRVUZCTEZOQlFYTkNReXhYUVVGWFJpeFBRVUZZTEVsQlFYTkNMRWRCUVhaQ0xFZEJRVGhDUXl4TlFVRTVRaXhIUVVGMVF5eEpRVUUxUkR0QlFVRkJMRU5CUVhoQ096dHJRa0ZGWlN4VlFVRkRSU3hMUVVGRUxFVkJRVkZHTEUxQlFWSXNSVUZCYlVJN1FVRkRhRU1zVFVGQlRVY3NVMEZCVXl4RlFVRm1PMEZCUTBFc1RVRkJUVU1zYTBKQlFXdENPMEZCUTNSQ1NpeFpRVUZSTEVOQlJHTTdRVUZGZEVKTExHRkJRVk5NTEZOQlFWTTdRVUZHU1N4SFFVRjRRanRCUVVsQkxFMUJRVWxOTEdWQlFXVXNTMEZCYmtJN08wRkJSVUVzVDBGQlN5eEpRVUZKUXl4SFFVRlVMRWxCUVdkQ1RDeExRVUZvUWl4RlFVRjFRanRCUVVOeVFpeFJRVUZKUVN4TlFVRk5UU3hqUVVGT0xFTkJRWEZDUkN4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6ZENMRlZCUVUxRkxGRkJRVkZRTEUxQlFVMUxMRWRCUVU0c1EwRkJaRHM3UVVGRlFTeGpRVUZSUVN4SFFVRlNPMEZCUTBFc1lVRkJTeXhSUVVGTU8wRkJRMEVzWVVGQlN5eFRRVUZNTzBGQlEwVkVMSGxDUVVGbExFbEJRV1k3UVVGRFFVWXNNRUpCUVdkQ1J5eEhRVUZvUWl4SlFVRjFRbFFzWjBKQlFXZENWeXhMUVVGb1FpeEZRVUYxUWxRc1RVRkJka0lzUTBGQmRrSTdRVUZEUVR0QlFVTkdMR0ZCUVVzc1VVRkJURHRCUVVORlJ5eHBRa0ZCVHl4dFFrRkJVQ3hKUVVFNFFrd3NaMEpCUVdkQ0xFTkJRVU5YTEV0QlFXcENMRVZCUVhkQ1ZDeE5RVUY0UWl4RFFVRTVRanRCUVVOQk8wRkJRMFk3UVVGRFJVY3NhVUpCUVU5SkxFZEJRVkFzU1VGQlkwVXNTMEZCWkR0QlFWWkdPMEZCV1VRN1FVRkRSanM3UVVGRlJDeE5RVUZKU0N4WlFVRktMRVZCUVd0Q08wRkJRMmhDU0N4WFFVRlBMR3RDUVVGUUxFbEJRVFpDUXl4blFrRkJaMEpLTEUxQlFXaENMRWRCUVhsQ0xFZEJRWHBDTEVkQlFTdENTU3huUWtGQlowSkRMRTlCUVRWRk8wRkJRMFE3TzBGQlJVUXNVMEZCVDBZc1RVRkJVRHRCUVVORUxFTWlMQ0ptYVd4bElqb2lZblZwYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0JEYjI1MlpYSjBJSEJsY21ObGJuUmhaMlVnZEc4Z2NHbDRaV3h6WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJsY21ObGJuUmhaMlVnYjJZZ2RHOTBZV3dnYkdWdVozUm9YRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVkc5MFlXd2diR1Z1WjNSb1hHNHFMMXh1WTI5dWMzUWdjR1Z5WTJWdWRGUnZVR2w0Wld4eklEMGdLSEJsY21ObGJuUXNJR3hsYm1kMGFDa2dQVDRnS0hCaGNuTmxSbXh2WVhRb2NHVnlZMlZ1ZENrZ0x5QXhNREFwSUNvZ2JHVnVaM1JvSUNzZ0ozQjRKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hOMFlYUmxMQ0JzWlc1bmRHZ3BJRDArSUh0Y2JpQWdZMjl1YzNRZ2MzUjViR1Z6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJR1JoYzJoQmNuSmhlVk4wZVd4bGN5QTlJSHRjYmlBZ0lDQnNaVzVuZEdnNklEQXNYRzRnSUNBZ2MzQmhZMmx1WnpvZ2JHVnVaM1JvSUNzZ0ozQjRKMXh1SUNCOU8xeHVJQ0JzWlhRZ2FHRnpSR0Z6YUVGeWNtRjVJRDBnWm1Gc2MyVTdYRzVjYmlBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhOMFlYUmxLU0I3WEc0Z0lDQWdhV1lnS0hOMFlYUmxMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdjM1JoZEdWYmEyVjVYVHRjYmx4dUlDQWdJQ0FnYzNkcGRHTm9JQ2hyWlhrcElIdGNiaUFnSUNBZ0lHTmhjMlVnSjJ4bGJtZDBhQ2M2WEc0Z0lDQWdJQ0JqWVhObElDZHpjR0ZqYVc1bkp6cGNiaUFnSUNBZ0lDQWdhR0Z6UkdGemFFRnljbUY1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnWkdGemFFRnljbUY1VTNSNWJHVnpXMnRsZVYwZ1BTQndaWEpqWlc1MFZHOVFhWGhsYkhNb2RtRnNkV1VzSUd4bGJtZDBhQ2s3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdZMkZ6WlNBbmIyWm1jMlYwSnpwY2JpQWdJQ0FnSUNBZ2MzUjViR1Z6V3lkemRISnZhMlV0WkdGemFHOW1abk5sZENkZElEMGdjR1Z5WTJWdWRGUnZVR2w0Wld4ektDMTJZV3gxWlN3Z2JHVnVaM1JvS1R0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0JrWldaaGRXeDBPbHh1SUNBZ0lDQWdJQ0J6ZEhsc1pYTmJhMlY1WFNBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdsbUlDaG9ZWE5FWVhOb1FYSnlZWGtwSUh0Y2JpQWdJQ0J6ZEhsc1pYTmJKM04wY205clpTMWtZWE5vWVhKeVlYa25YU0E5SUdSaGMyaEJjbkpoZVZOMGVXeGxjeTVzWlc1bmRHZ2dLeUFuSUNjZ0t5QmtZWE5vUVhKeVlYbFRkSGxzWlhNdWMzQmhZMmx1Wnp0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCemRIbHNaWE03WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb2xvciA9IGV4cG9ydHMuaHNsYSA9IGV4cG9ydHMuaGV4ID0gZXhwb3J0cy5yZ2JhID0gZXhwb3J0cy5yZ2JVbml0ID0gZXhwb3J0cy5zY2FsZSA9IGV4cG9ydHMucHggPSBleHBvcnRzLnBlcmNlbnQgPSBleHBvcnRzLmRlZ3JlZXMgPSBleHBvcnRzLmFscGhhID0gZXhwb3J0cy5udW1iZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfY2hpbGRUeXBlcywgX2NoaWxkVHlwZXMyO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFZhbHVlIHR5cGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogYWxwaGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGRlZ3JlZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGhleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogaHNsYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcGVyY2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHJnYlVuaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHJnYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogc2NhbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3V0aWxzMiA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG4vLyBTdHJpbmcgcHJvcGVydGllc1xudmFyIFJFRCA9ICdSZWQnO1xudmFyIEdSRUVOID0gJ0dyZWVuJztcbnZhciBCTFVFID0gJ0JsdWUnO1xudmFyIEFMUEhBID0gJ0FscGhhJztcbnZhciBIVUUgPSAnSHVlJztcbnZhciBTQVRVUkFUSU9OID0gJ1NhdHVyYXRpb24nO1xudmFyIExJR0hUTkVTUyA9ICdMaWdodG5lc3MnO1xuXG4vLyBUZW1wbGF0ZXNcbnZhciByZ2JhVGVtcGxhdGUgPSBmdW5jdGlvbiAoY29sb3JzKSB7XG4gIHJldHVybiAncmdiYSgnICsgY29sb3JzW1JFRF0gKyAnLCAnICsgY29sb3JzW0dSRUVOXSArICcsICcgKyBjb2xvcnNbQkxVRV0gKyAnLCAnICsgY29sb3JzW0FMUEhBXSArICcpJztcbn07XG52YXIgaHNsYVRlbXBsYXRlID0gZnVuY3Rpb24gKGNvbG9ycykge1xuICByZXR1cm4gJ2hzbGEoJyArIGNvbG9yc1tIVUVdICsgJywgJyArIGNvbG9yc1tTQVRVUkFUSU9OXSArICcsICcgKyBjb2xvcnNbTElHSFRORVNTXSArICcsICcgKyBjb2xvcnNbQUxQSEFdICsgJyknO1xufTtcblxudmFyIG51bWJlciA9IGV4cG9ydHMubnVtYmVyID0ge1xuICB0ZXN0OiBfdXRpbHMyLmlzTnVtLFxuICBwYXJzZTogcGFyc2VGbG9hdFxufTtcblxuLy8gVmFsdWUgdHlwZXNcbnZhciBhbHBoYSA9IGV4cG9ydHMuYWxwaGEgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIHRyYW5zZm9ybTogKDAsIF90cmFuc2Zvcm1lcnMuY2xhbXApKDAsIDEpXG59KTtcblxudmFyIGRlZ3JlZXMgPSBleHBvcnRzLmRlZ3JlZXMgPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgnZGVnJyk7XG52YXIgcGVyY2VudCA9IGV4cG9ydHMucGVyY2VudCA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCclJyk7XG52YXIgcHggPSBleHBvcnRzLnB4ID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJ3B4Jyk7XG5cbnZhciBzY2FsZSA9IGV4cG9ydHMuc2NhbGUgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIGRlZmF1bHQ6IDFcbn0pO1xuXG52YXIgcmdiVW5pdCA9IGV4cG9ydHMucmdiVW5pdCA9IF9leHRlbmRzKHt9LCBudW1iZXIsIHtcbiAgdHJhbnNmb3JtOiAoMCwgX3RyYW5zZm9ybWVycy5mbG93KShcbiAgLy9odHRwOi8vY29kZXBlbi5pby9vc3VibGFrZS9mdWxsL3hHVlZhTi9cbiAgLy8gKHYsIHZhbHVlLCBhY3Rpb24pID0+IHtcbiAgLy8gICBpZiAoYWN0aW9uKSB7XG4gIC8vICAgICBjb25zdCBmcm9tQ29sb3IgPSBhY3Rpb24uZnJvbSAqIGFjdGlvbi5mcm9tO1xuICAvLyAgICAgY29uc3QgdG9Db2xvciA9IGFjdGlvbi50byAqIGFjdGlvbi50bztcbiAgLy8gICAgIHJldHVybiBNYXRoLnNxcnQoYWN0aW9uLnByb2dyZXNzICogKHRvQ29sb3IgLSBmcm9tQ29sb3IpICsgZnJvbUNvbG9yKTtcbiAgLy8gICB9XG5cbiAgLy8gICByZXR1cm4gdjtcbiAgLy8gfSxcbiAgKDAsIF90cmFuc2Zvcm1lcnMuY2xhbXApKDAsIDI1NSksIE1hdGgucm91bmQpXG59KTtcblxudmFyIHJnYmEgPSBleHBvcnRzLnJnYmEgPSB7XG4gIGNoaWxkVHlwZXM6IChfY2hpbGRUeXBlcyA9IHt9LCBfY2hpbGRUeXBlc1tSRURdID0gcmdiVW5pdCwgX2NoaWxkVHlwZXNbR1JFRU5dID0gcmdiVW5pdCwgX2NoaWxkVHlwZXNbQkxVRV0gPSByZ2JVbml0LCBfY2hpbGRUeXBlc1tBTFBIQV0gPSBhbHBoYSwgX2NoaWxkVHlwZXMpLFxuXG4gIHRlc3Q6ICgwLCBfdXRpbHMuaXNGaXJzdENoYXJzKSgncmdiJyksXG5cbiAgcGFyc2U6ICgwLCBfdXRpbHMuc3BsaXRDb2xvclZhbHVlcykoW1JFRCwgR1JFRU4sIEJMVUUsIEFMUEhBXSksXG5cbiAgdHJhbnNmb3JtOiByZ2JhVGVtcGxhdGVcbn07XG5cbnZhciBoZXggPSBleHBvcnRzLmhleCA9IF9leHRlbmRzKHt9LCByZ2JhLCB7XG5cbiAgdGVzdDogKDAsIF91dGlscy5pc0ZpcnN0Q2hhcnMpKCcjJyksXG5cbiAgcGFyc2U6IGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHIgPSB2b2lkIDAsXG4gICAgICAgIGcgPSB2b2lkIDAsXG4gICAgICAgIGIgPSB2b2lkIDA7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgIGlmICh2Lmxlbmd0aCA+IDQpIHtcbiAgICAgIHIgPSB2LnN1YnN0cigxLCAyKTtcbiAgICAgIGcgPSB2LnN1YnN0cigzLCAyKTtcbiAgICAgIGIgPSB2LnN1YnN0cig1LCAyKTtcblxuICAgICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICB9IGVsc2Uge1xuICAgICAgciA9IHYuc3Vic3RyKDEsIDEpO1xuICAgICAgZyA9IHYuc3Vic3RyKDIsIDEpO1xuICAgICAgYiA9IHYuc3Vic3RyKDMsIDEpO1xuICAgICAgciArPSByO1xuICAgICAgZyArPSBnO1xuICAgICAgYiArPSBiO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBSZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICAgIEdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgICBCbHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgICBBbHBoYTogMVxuICAgIH07XG4gIH1cbn0pO1xuXG52YXIgaHNsYSA9IGV4cG9ydHMuaHNsYSA9IHtcbiAgY2hpbGRUeXBlczogKF9jaGlsZFR5cGVzMiA9IHt9LCBfY2hpbGRUeXBlczJbSFVFXSA9IG51bWJlciwgX2NoaWxkVHlwZXMyW1NBVFVSQVRJT05dID0gcGVyY2VudCwgX2NoaWxkVHlwZXMyW0xJR0hUTkVTU10gPSBwZXJjZW50LCBfY2hpbGRUeXBlczJbQUxQSEFdID0gYWxwaGEsIF9jaGlsZFR5cGVzMiksXG5cbiAgdGVzdDogKDAsIF91dGlscy5pc0ZpcnN0Q2hhcnMpKCdoc2wnKSxcblxuICBwYXJzZTogKDAsIF91dGlscy5zcGxpdENvbG9yVmFsdWVzKShbSFVFLCBTQVRVUkFUSU9OLCBMSUdIVE5FU1MsIEFMUEhBXSksXG5cbiAgY29tYmluZTogaHNsYVRlbXBsYXRlXG59O1xuXG52YXIgY29sb3IgPSBleHBvcnRzLmNvbG9yID0ge1xuICBjaGlsZFR5cGVzOiBfZXh0ZW5kcyh7fSwgaHNsYS5jaGlsZFR5cGVzLCByZ2JhLmNoaWxkVHlwZXMpLFxuXG4gIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiByZ2JhLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2xhLnRlc3QodmFsdWUpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRtRnNkV1V0ZEhsd1pYTXVhbk1pWFN3aWJtRnRaWE1pT2xzaVVrVkVJaXdpUjFKRlJVNGlMQ0pDVEZWRklpd2lRVXhRU0VFaUxDSklWVVVpTENKVFFWUlZVa0ZVU1U5T0lpd2lURWxIU0ZST1JWTlRJaXdpY21kaVlWUmxiWEJzWVhSbElpd2lZMjlzYjNKeklpd2lhSE5zWVZSbGJYQnNZWFJsSWl3aWJuVnRZbVZ5SWl3aWRHVnpkQ0lzSW5CaGNuTmxJaXdpY0dGeWMyVkdiRzloZENJc0ltRnNjR2hoSWl3aWRISmhibk5tYjNKdElpd2laR1ZuY21WbGN5SXNJbkJsY21ObGJuUWlMQ0p3ZUNJc0luTmpZV3hsSWl3aVpHVm1ZWFZzZENJc0luSm5ZbFZ1YVhRaUxDSk5ZWFJvSWl3aWNtOTFibVFpTENKeVoySmhJaXdpWTJocGJHUlVlWEJsY3lJc0ltaGxlQ0lzSW5ZaUxDSnlJaXdpWnlJc0ltSWlMQ0pzWlc1bmRHZ2lMQ0p6ZFdKemRISWlMQ0pTWldRaUxDSndZWEp6WlVsdWRDSXNJa2R5WldWdUlpd2lRbXgxWlNJc0lrRnNjR2hoSWl3aWFITnNZU0lzSW1OdmJXSnBibVVpTENKamIyeHZjaUlzSW5aaGJIVmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3TzJ0UlFVRkJPenM3T3pzN096czdPenM3T3pzN1FVRmhRVHM3UVVGRFFUczdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFbEJRVTFCTEUxQlFVMHNTMEZCV2p0QlFVTkJMRWxCUVUxRExGRkJRVkVzVDBGQlpEdEJRVU5CTEVsQlFVMURMRTlCUVU4c1RVRkJZanRCUVVOQkxFbEJRVTFETEZGQlFWRXNUMEZCWkR0QlFVTkJMRWxCUVUxRExFMUJRVTBzUzBGQldqdEJRVU5CTEVsQlFVMURMR0ZCUVdFc1dVRkJia0k3UVVGRFFTeEpRVUZOUXl4WlFVRlpMRmRCUVd4Q096dEJRVVZCTzBGQlEwRXNTVUZCVFVNc1pVRkJaU3hWUVVGRFF5eE5RVUZFTzBGQlFVRXNiVUpCUVc5Q1FTeFBRVUZQVWl4SFFVRlFMRU5CUVhCQ0xGVkJRVzlEVVN4UFFVRlBVQ3hMUVVGUUxFTkJRWEJETEZWQlFYTkVUeXhQUVVGUFRpeEpRVUZRTEVOQlFYUkVMRlZCUVhWRlRTeFBRVUZQVEN4TFFVRlFMRU5CUVhaRk8wRkJRVUVzUTBGQmNrSTdRVUZEUVN4SlFVRk5UU3hsUVVGbExGVkJRVU5FTEUxQlFVUTdRVUZCUVN4dFFrRkJiMEpCTEU5QlFVOUtMRWRCUVZBc1EwRkJjRUlzVlVGQmIwTkpMRTlCUVU5SUxGVkJRVkFzUTBGQmNFTXNWVUZCTWtSSExFOUJRVTlHTEZOQlFWQXNRMEZCTTBRc1ZVRkJhVVpGTEU5QlFVOU1MRXRCUVZBc1EwRkJha1k3UVVGQlFTeERRVUZ5UWpzN1FVRkZUeXhKUVVGTlR5d3dRa0ZCVXp0QlFVTndRa01zY1VKQlJHOUNPMEZCUlhCQ1F5eFRRVUZQUXp0QlFVWmhMRU5CUVdZN08wRkJTMUE3UVVGRFR5eEpRVUZOUXl4eFEwRkRVa29zVFVGRVVUdEJRVVZZU3l4aFFVRlhMSGxDUVVGTkxFTkJRVTRzUlVGQlV5eERRVUZVTzBGQlJrRXNSVUZCVGpzN1FVRkxRU3hKUVVGTlF5dzBRa0ZCVlN3eVFrRkJaU3hMUVVGbUxFTkJRV2hDTzBGQlEwRXNTVUZCVFVNc05FSkJRVlVzTWtKQlFXVXNSMEZCWml4RFFVRm9RanRCUVVOQkxFbEJRVTFETEd0Q1FVRkxMREpDUVVGbExFbEJRV1lzUTBGQldEczdRVUZGUVN4SlFVRk5ReXh4UTBGRFVsUXNUVUZFVVR0QlFVVllWU3hYUVVGVE8wRkJSa1VzUlVGQlRqczdRVUZMUVN4SlFVRk5ReXg1UTBGRFVsZ3NUVUZFVVR0QlFVVllTeXhoUVVGWE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTERKQ1FVRk5MRU5CUVU0c1JVRkJVeXhIUVVGVUxFTkJXRk1zUlVGWlZFOHNTMEZCUzBNc1MwRmFTVHRCUVVaQkxFVkJRVTQ3TzBGQmEwSkJMRWxCUVUxRExITkNRVUZQTzBGQlEyeENReXcyUTBGRFIzcENMRWRCUkVnc1NVRkRVM0ZDTEU5QlJGUXNZMEZGUjNCQ0xFdEJSa2dzU1VGRlYyOUNMRTlCUmxnc1kwRkhSMjVDTEVsQlNFZ3NTVUZIVlcxQ0xFOUJTRllzWTBGSlIyeENMRXRCU2tnc1NVRkpWMWNzUzBGS1dDeGpRVVJyUWpzN1FVRlJiRUpJTEZGQlFVMHNlVUpCUVdFc1MwRkJZaXhEUVZKWk96dEJRVlZzUWtNc1UwRkJUeXcyUWtGQmFVSXNRMEZCUTFvc1IwRkJSQ3hGUVVGTlF5eExRVUZPTEVWQlFXRkRMRWxCUVdJc1JVRkJiVUpETEV0QlFXNUNMRU5CUVdwQ0xFTkJWbGM3TzBGQldXeENXU3hoUVVGWFVqdEJRVnBQTEVOQlFXSTdPMEZCWlVFc1NVRkJUVzFDTEdsRFFVTlNSaXhKUVVSUk96dEJRVWRZWWl4UlFVRk5MSGxDUVVGaExFZEJRV0lzUTBGSVN6czdRVUZMV0VNc1UwRkJUeXhWUVVGRFpTeERRVUZFTEVWQlFVODdRVUZEV2l4UlFVRkpReXhWUVVGS08wRkJRVUVzVVVGQlQwTXNWVUZCVUR0QlFVRkJMRkZCUVZWRExGVkJRVlk3TzBGQlJVRTdRVUZEUVN4UlFVRkpTQ3hGUVVGRlNTeE5RVUZHTEVkQlFWY3NRMEZCWml4RlFVRnJRanRCUVVOb1FrZ3NWVUZCU1VRc1JVRkJSVXNzVFVGQlJpeERRVUZUTEVOQlFWUXNSVUZCV1N4RFFVRmFMRU5CUVVvN1FVRkRRVWdzVlVGQlNVWXNSVUZCUlVzc1RVRkJSaXhEUVVGVExFTkJRVlFzUlVGQldTeERRVUZhTEVOQlFVbzdRVUZEUVVZc1ZVRkJTVWdzUlVGQlJVc3NUVUZCUml4RFFVRlRMRU5CUVZRc1JVRkJXU3hEUVVGYUxFTkJRVW83TzBGQlJVWTdRVUZEUXl4TFFVNUVMRTFCVFU4N1FVRkRURW9zVlVGQlNVUXNSVUZCUlVzc1RVRkJSaXhEUVVGVExFTkJRVlFzUlVGQldTeERRVUZhTEVOQlFVbzdRVUZEUVVnc1ZVRkJTVVlzUlVGQlJVc3NUVUZCUml4RFFVRlRMRU5CUVZRc1JVRkJXU3hEUVVGYUxFTkJRVW83UVVGRFFVWXNWVUZCU1Vnc1JVRkJSVXNzVFVGQlJpeERRVUZUTEVOQlFWUXNSVUZCV1N4RFFVRmFMRU5CUVVvN1FVRkRRVW9zVjBGQlMwRXNRMEZCVER0QlFVTkJReXhYUVVGTFFTeERRVUZNTzBGQlEwRkRMRmRCUVV0QkxFTkJRVXc3UVVGRFJEczdRVUZGUkN4WFFVRlBPMEZCUTB4SExGZEJRVXRETEZOQlFWTk9MRU5CUVZRc1JVRkJXU3hGUVVGYUxFTkJSRUU3UVVGRlRFOHNZVUZCVDBRc1UwRkJVMHdzUTBGQlZDeEZRVUZaTEVWQlFWb3NRMEZHUmp0QlFVZE1UeXhaUVVGTlJpeFRRVUZUU2l4RFFVRlVMRVZCUVZrc1JVRkJXaXhEUVVoRU8wRkJTVXhQTEdGQlFVODdRVUZLUml4TFFVRlFPMEZCVFVRN1FVRTVRbFVzUlVGQlRqczdRVUZwUTBFc1NVRkJUVU1zYzBKQlFVODdRVUZEYkVKaUxDdERRVU5IY2tJc1IwRkVTQ3hKUVVOVFRTeE5RVVJVTEdWQlJVZE1MRlZCUmtnc1NVRkZaMEpaTEU5QlJtaENMR1ZCUjBkWUxGTkJTRWdzU1VGSFpWY3NUMEZJWml4bFFVbEhaQ3hMUVVwSUxFbEJTVmRYTEV0QlNsZ3NaVUZFYTBJN08wRkJVV3hDU0N4UlFVRk5MSGxDUVVGaExFdEJRV0lzUTBGU1dUczdRVUZWYkVKRExGTkJRVThzTmtKQlFXbENMRU5CUVVOU0xFZEJRVVFzUlVGQlRVTXNWVUZCVGl4RlFVRnJRa01zVTBGQmJFSXNSVUZCTmtKSUxFdEJRVGRDTEVOQlFXcENMRU5CVmxjN08wRkJXV3hDYjBNc1YwRkJVemxDTzBGQldsTXNRMEZCWWpzN1FVRmxRU3hKUVVGTkswSXNkMEpCUVZFN1FVRkRia0ptTERKQ1FVTkxZU3hMUVVGTFlpeFZRVVJXTEVWQlJVdEVMRXRCUVV0RExGVkJSbFlzUTBGRWJVSTdPMEZCVFc1Q1pDeFJRVUZOTEZWQlFVTTRRaXhMUVVGRU8wRkJRVUVzVjBGQlYycENMRXRCUVV0aUxFbEJRVXdzUTBGQlZUaENMRXRCUVZZc1MwRkJiMEptTEVsQlFVbG1MRWxCUVVvc1EwRkJVemhDTEV0QlFWUXNRMEZCY0VJc1NVRkJkVU5JTEV0QlFVc3pRaXhKUVVGTUxFTkJRVlU0UWl4TFFVRldMRU5CUVd4RU8wRkJRVUU3UVVGT1lTeERRVUZrSWl3aVptbHNaU0k2SW5aaGJIVmxMWFI1Y0dWekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FYRzRnS2lCV1lXeDFaU0IwZVhCbGMxeHVJQ3BjYmlBcUlHRnNjR2hoWEc0Z0tpQmtaV2R5WldWelhHNGdLaUJvWlhoY2JpQXFJR2h6YkdGY2JpQXFJSEJsY21ObGJuUmNiaUFxSUhCNFhHNGdLaUJ5WjJKVmJtbDBYRzRnS2lCeVoySmNiaUFxSUhOallXeGxYRzRnS2k5Y2JtbHRjRzl5ZENCN0lHTnNZVzF3TENCbWJHOTNJSDBnWm5KdmJTQW5MaTR2YVc1akwzUnlZVzV6Wm05eWJXVnljeWM3WEc1cGJYQnZjblFnZXlCamNtVmhkR1ZWYm1sMFZIbHdaU3dnYVhOR2FYSnpkRU5vWVhKekxDQnpjR3hwZEVOdmJHOXlWbUZzZFdWeklIMGdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ2V5QnBjMDUxYlNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYmk4dklGTjBjbWx1WnlCd2NtOXdaWEowYVdWelhHNWpiMjV6ZENCU1JVUWdQU0FuVW1Wa0p6dGNibU52Ym5OMElFZFNSVVZPSUQwZ0owZHlaV1Z1Snp0Y2JtTnZibk4wSUVKTVZVVWdQU0FuUW14MVpTYzdYRzVqYjI1emRDQkJURkJJUVNBOUlDZEJiSEJvWVNjN1hHNWpiMjV6ZENCSVZVVWdQU0FuU0hWbEp6dGNibU52Ym5OMElGTkJWRlZTUVZSSlQwNGdQU0FuVTJGMGRYSmhkR2x2YmljN1hHNWpiMjV6ZENCTVNVZElWRTVGVTFNZ1BTQW5UR2xuYUhSdVpYTnpKenRjYmx4dUx5OGdWR1Z0Y0d4aGRHVnpYRzVqYjI1emRDQnlaMkpoVkdWdGNHeGhkR1VnUFNBb1kyOXNiM0p6S1NBOVBpQmdjbWRpWVNna2UyTnZiRzl5YzF0U1JVUmRmU3dnSkh0amIyeHZjbk5iUjFKRlJVNWRmU3dnSkh0amIyeHZjbk5iUWt4VlJWMTlMQ0FrZTJOdmJHOXljMXRCVEZCSVFWMTlLV0E3WEc1amIyNXpkQ0JvYzJ4aFZHVnRjR3hoZEdVZ1BTQW9ZMjlzYjNKektTQTlQaUJnYUhOc1lTZ2tlMk52Ykc5eWMxdElWVVZkZlN3Z0pIdGpiMnh2Y25OYlUwRlVWVkpCVkVsUFRsMTlMQ0FrZTJOdmJHOXljMXRNU1VkSVZFNUZVMU5kZlN3Z0pIdGpiMnh2Y25OYlFVeFFTRUZkZlNsZ08xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2JuVnRZbVZ5SUQwZ2UxeHVJQ0IwWlhOME9pQnBjMDUxYlN4Y2JpQWdjR0Z5YzJVNklIQmhjbk5sUm14dllYUmNibjA3WEc1Y2JpOHZJRlpoYkhWbElIUjVjR1Z6WEc1bGVIQnZjblFnWTI5dWMzUWdZV3h3YUdFZ1BTQjdYRzRnSUM0dUxtNTFiV0psY2l4Y2JpQWdkSEpoYm5ObWIzSnRPaUJqYkdGdGNDZ3dMQ0F4S1Z4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHUmxaM0psWlhNZ1BTQmpjbVZoZEdWVmJtbDBWSGx3WlNnblpHVm5KeWs3WEc1bGVIQnZjblFnWTI5dWMzUWdjR1Z5WTJWdWRDQTlJR055WldGMFpWVnVhWFJVZVhCbEtDY2xKeWs3WEc1bGVIQnZjblFnWTI5dWMzUWdjSGdnUFNCamNtVmhkR1ZWYm1sMFZIbHdaU2duY0hnbktUdGNibHh1Wlhod2IzSjBJR052Ym5OMElITmpZV3hsSUQwZ2UxeHVJQ0F1TGk1dWRXMWlaWElzWEc0Z0lHUmxabUYxYkhRNklERmNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J5WjJKVmJtbDBJRDBnZTF4dUlDQXVMaTV1ZFcxaVpYSXNYRzRnSUhSeVlXNXpabTl5YlRvZ1pteHZkeWhjYmlBZ0lDQXZMMmgwZEhBNkx5OWpiMlJsY0dWdUxtbHZMMjl6ZFdKc1lXdGxMMloxYkd3dmVFZFdWbUZPTDF4dUlDQWdJQzh2SUNoMkxDQjJZV3gxWlN3Z1lXTjBhVzl1S1NBOVBpQjdYRzRnSUNBZ0x5OGdJQ0JwWmlBb1lXTjBhVzl1S1NCN1hHNGdJQ0FnTHk4Z0lDQWdJR052Ym5OMElHWnliMjFEYjJ4dmNpQTlJR0ZqZEdsdmJpNW1jbTl0SUNvZ1lXTjBhVzl1TG1aeWIyMDdYRzRnSUNBZ0x5OGdJQ0FnSUdOdmJuTjBJSFJ2UTI5c2IzSWdQU0JoWTNScGIyNHVkRzhnS2lCaFkzUnBiMjR1ZEc4N1hHNGdJQ0FnTHk4Z0lDQWdJSEpsZEhWeWJpQk5ZWFJvTG5OeGNuUW9ZV04wYVc5dUxuQnliMmR5WlhOeklDb2dLSFJ2UTI5c2IzSWdMU0JtY205dFEyOXNiM0lwSUNzZ1puSnZiVU52Ykc5eUtUdGNiaUFnSUNBdkx5QWdJSDFjYmx4dUlDQWdJQzh2SUNBZ2NtVjBkWEp1SUhZN1hHNGdJQ0FnTHk4Z2ZTeGNiaUFnSUNCamJHRnRjQ2d3TENBeU5UVXBMRnh1SUNBZ0lFMWhkR2d1Y205MWJtUmNiaUFnS1Z4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElISm5ZbUVnUFNCN1hHNGdJR05vYVd4a1ZIbHdaWE02SUh0Y2JpQWdJQ0JiVWtWRVhUb2djbWRpVlc1cGRDeGNiaUFnSUNCYlIxSkZSVTVkT2lCeVoySlZibWwwTEZ4dUlDQWdJRnRDVEZWRlhUb2djbWRpVlc1cGRDeGNiaUFnSUNCYlFVeFFTRUZkT2lCaGJIQm9ZVnh1SUNCOUxGeHVYRzRnSUhSbGMzUTZJR2x6Um1seWMzUkRhR0Z5Y3lnbmNtZGlKeWtzWEc1Y2JpQWdjR0Z5YzJVNklITndiR2wwUTI5c2IzSldZV3gxWlhNb1cxSkZSQ3dnUjFKRlJVNHNJRUpNVlVVc0lFRk1VRWhCWFNrc1hHNWNiaUFnZEhKaGJuTm1iM0p0T2lCeVoySmhWR1Z0Y0d4aGRHVmNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JvWlhnZ1BTQjdYRzRnSUM0dUxuSm5ZbUVzWEc1Y2JpQWdkR1Z6ZERvZ2FYTkdhWEp6ZEVOb1lYSnpLQ2NqSnlrc1hHNWNiaUFnY0dGeWMyVTZJQ2gyS1NBOVBpQjdYRzRnSUNBZ2JHVjBJSElzSUdjc0lHSTdYRzVjYmlBZ0lDQXZMeUJKWmlCM1pTQm9ZWFpsSURZZ1kyaGhjbUZqZEdWeWN5d2dhV1VnSTBaR01EQXdNRnh1SUNBZ0lHbG1JQ2gyTG14bGJtZDBhQ0ErSURRcElIdGNiaUFnSUNBZ0lISWdQU0IyTG5OMVluTjBjaWd4TENBeUtUdGNiaUFnSUNBZ0lHY2dQU0IyTG5OMVluTjBjaWd6TENBeUtUdGNiaUFnSUNBZ0lHSWdQU0IyTG5OMVluTjBjaWcxTENBeUtUdGNibHh1SUNBZ0lDOHZJRTl5SUhkbElHaGhkbVVnTXlCamFHRnlZV04wWlhKekxDQnBaU0FqUmpBd1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSElnUFNCMkxuTjFZbk4wY2lneExDQXhLVHRjYmlBZ0lDQWdJR2NnUFNCMkxuTjFZbk4wY2lneUxDQXhLVHRjYmlBZ0lDQWdJR0lnUFNCMkxuTjFZbk4wY2lnekxDQXhLVHRjYmlBZ0lDQWdJSElnS3owZ2NqdGNiaUFnSUNBZ0lHY2dLejBnWnp0Y2JpQWdJQ0FnSUdJZ0t6MGdZanRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ1VtVmtPaUJ3WVhKelpVbHVkQ2h5TENBeE5pa3NYRzRnSUNBZ0lDQkhjbVZsYmpvZ2NHRnljMlZKYm5Rb1p5d2dNVFlwTEZ4dUlDQWdJQ0FnUW14MVpUb2djR0Z5YzJWSmJuUW9ZaXdnTVRZcExGeHVJQ0FnSUNBZ1FXeHdhR0U2SURGY2JpQWdJQ0I5TzF4dUlDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUhOc1lTQTlJSHRjYmlBZ1kyaHBiR1JVZVhCbGN6b2dlMXh1SUNBZ0lGdElWVVZkT2lCdWRXMWlaWElzWEc0Z0lDQWdXMU5CVkZWU1FWUkpUMDVkT2lCd1pYSmpaVzUwTEZ4dUlDQWdJRnRNU1VkSVZFNUZVMU5kT2lCd1pYSmpaVzUwTEZ4dUlDQWdJRnRCVEZCSVFWMDZJR0ZzY0doaFhHNGdJSDBzWEc1Y2JpQWdkR1Z6ZERvZ2FYTkdhWEp6ZEVOb1lYSnpLQ2RvYzJ3bktTeGNibHh1SUNCd1lYSnpaVG9nYzNCc2FYUkRiMnh2Y2xaaGJIVmxjeWhiU0ZWRkxDQlRRVlJWVWtGVVNVOU9MQ0JNU1VkSVZFNUZVMU1zSUVGTVVFaEJYU2tzWEc1Y2JpQWdZMjl0WW1sdVpUb2dhSE5zWVZSbGJYQnNZWFJsWEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyOXNiM0lnUFNCN1hHNGdJR05vYVd4a1ZIbHdaWE02SUh0Y2JpQWdJQ0F1TGk1b2MyeGhMbU5vYVd4a1ZIbHdaWE1zWEc0Z0lDQWdMaTR1Y21kaVlTNWphR2xzWkZSNWNHVnpYRzRnSUgwc1hHNWNiaUFnZEdWemREb2dLSFpoYkhWbEtTQTlQaUJ5WjJKaExuUmxjM1FvZG1Gc2RXVXBJSHg4SUdobGVDNTBaWE4wS0haaGJIVmxLU0I4ZkNCb2MyeGhMblJsYzNRb2RtRnNkV1VwWEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdmFsdWUtdHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEggPSAxLjUyNTtcblxudmFyIGNyZWF0ZVJldmVyc2VkRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVSZXZlcnNlZEVhc2luZyA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNpbmcoMSAtIHApO1xuICB9O1xufTtcbnZhciBjcmVhdGVNaXJyb3JlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlTWlycm9yZWRFYXNpbmcgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwIDw9IDAuNSA/IGVhc2luZygyICogcCkgLyAyIDogKDIgLSBlYXNpbmcoMiAqICgxIC0gcCkpKSAvIDI7XG4gIH07XG59O1xuXG52YXIgbGluZWFyID0gZXhwb3J0cy5saW5lYXIgPSBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcDtcbn07XG5cbnZhciBjcmVhdGVFYXNlSW4gPSBleHBvcnRzLmNyZWF0ZUVhc2VJbiA9IGZ1bmN0aW9uIChwb3dlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gTWF0aC5wb3cocCwgcG93ZXIpO1xuICB9O1xufTtcbnZhciBlYXNlSW4gPSBleHBvcnRzLmVhc2VJbiA9IGNyZWF0ZUVhc2VJbigyKTtcbnZhciBlYXNlT3V0ID0gZXhwb3J0cy5lYXNlT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoZWFzZUluKTtcbnZhciBlYXNlSW5PdXQgPSBleHBvcnRzLmVhc2VJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGVhc2VJbik7XG5cbnZhciBjaXJjSW4gPSBleHBvcnRzLmNpcmNJbiA9IGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHApKTtcbn07XG52YXIgY2lyY091dCA9IGV4cG9ydHMuY2lyY091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGNpcmNJbik7XG52YXIgY2lyY0luT3V0ID0gZXhwb3J0cy5jaXJjSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhjaXJjT3V0KTtcblxudmFyIGNyZWF0ZUJhY2tJbiA9IGV4cG9ydHMuY3JlYXRlQmFja0luID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwICogcCAqICgocG93ZXIgKyAxKSAqIHAgLSBwb3dlcik7XG4gIH07XG59O1xudmFyIGJhY2tJbiA9IGV4cG9ydHMuYmFja0luID0gY3JlYXRlQmFja0luKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcbnZhciBiYWNrT3V0ID0gZXhwb3J0cy5iYWNrT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoYmFja0luKTtcbnZhciBiYWNrSW5PdXQgPSBleHBvcnRzLmJhY2tJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGJhY2tJbik7XG5cbnZhciBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHZhciBiYWNrRWFzaW5nID0gY3JlYXRlQmFja0luKHBvd2VyKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIChwICo9IDIpIDwgMSA/IDAuNSAqIGJhY2tFYXNpbmcocCkgOiAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwIC0gMSkpKTtcbiAgfTtcbn07XG5cbnZhciBhbnRpY2lwYXRlID0gZXhwb3J0cy5hbnRpY2lwYXRlID0gY3JlYXRlQW50aWNpcGF0ZUVhc2luZyhERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYklrUkZSa0ZWVEZSZlQxWkZVbE5JVDA5VVgxTlVVa1ZPUjFSSUlpd2lZM0psWVhSbFVtVjJaWEp6WldSRllYTnBibWNpTENKbFlYTnBibWNpTENKd0lpd2lZM0psWVhSbFRXbHljbTl5WldSRllYTnBibWNpTENKc2FXNWxZWElpTENKamNtVmhkR1ZGWVhObFNXNGlMQ0p3YjNkbGNpSXNJbVZoYzJWSmJpSXNJbVZoYzJWUGRYUWlMQ0psWVhObFNXNVBkWFFpTENKamFYSmpTVzRpTENKTllYUm9JaXdpYzJsdUlpd2lZV052Y3lJc0ltTnBjbU5QZFhRaUxDSmphWEpqU1c1UGRYUWlMQ0pqY21WaGRHVkNZV05yU1c0aUxDSmlZV05yU1c0aUxDSmlZV05yVDNWMElpd2lZbUZqYTBsdVQzVjBJaXdpWTNKbFlYUmxRVzUwYVdOcGNHRjBaVVZoYzJsdVp5SXNJbUpoWTJ0RllYTnBibWNpTENKd2IzY2lMQ0poYm5ScFkybHdZWFJsSWwwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeEpRVUZOUVN3MlFrRkJOa0lzUzBGQmJrTTdPMEZCUlU4c1NVRkJUVU1zYzBSQlFYVkNMRlZCUVVORExFMUJRVVE3UVVGQlFTeFRRVUZaTEZWQlFVTkRMRU5CUVVRN1FVRkJRU3hYUVVGUExFbEJRVWxFTEU5QlFVOHNTVUZCU1VNc1EwRkJXQ3hEUVVGWU8wRkJRVUVzUjBGQldqdEJRVUZCTEVOQlFUZENPMEZCUTBFc1NVRkJUVU1zYzBSQlFYVkNMRlZCUVVOR0xFMUJRVVE3UVVGQlFTeFRRVUZaTEZWQlFVTkRMRU5CUVVRN1FVRkJRU3hYUVVGUlFTeExRVUZMTEVkQlFVNHNSMEZCWVVRc1QwRkJUeXhKUVVGSlF5eERRVUZZTEVsQlFXZENMRU5CUVRkQ0xFZEJRV2xETEVOQlFVTXNTVUZCU1VRc1QwRkJUeXhMUVVGTExFbEJRVWxETEVOQlFWUXNRMEZCVUN4RFFVRk1MRWxCUVRSQ0xFTkJRWEJGTzBGQlFVRXNSMEZCV2p0QlFVRkJMRU5CUVRkQ096dEJRVVZCTEVsQlFVMUZMREJDUVVGVExGVkJRVU5HTEVOQlFVUTdRVUZCUVN4VFFVRlBRU3hEUVVGUU8wRkJRVUVzUTBGQlpqczdRVUZGUVN4SlFVRk5SeXh6UTBGQlpTeFZRVUZEUXl4TFFVRkVPMEZCUVVFc1UwRkJWeXhWUVVGRFNpeERRVUZFTzBGQlFVRXNiMEpCUVU5QkxFTkJRVkFzUlVGQldVa3NTMEZCV2p0QlFVRkJMRWRCUVZnN1FVRkJRU3hEUVVGeVFqdEJRVU5CTEVsQlFVMURMREJDUVVGVFJpeGhRVUZoTEVOQlFXSXNRMEZCWmp0QlFVTkJMRWxCUVUxSExEUkNRVUZWVWl4eFFrRkJjVUpQTEUxQlFYSkNMRU5CUVdoQ08wRkJRMEVzU1VGQlRVVXNaME5CUVZsT0xIRkNRVUZ4UWtrc1RVRkJja0lzUTBGQmJFSTdPMEZCUlVFc1NVRkJUVWNzTUVKQlFWTXNWVUZCUTFJc1EwRkJSRHRCUVVGQkxGTkJRVThzU1VGQlNWTXNTMEZCUzBNc1IwRkJUQ3hEUVVGVFJDeExRVUZMUlN4SlFVRk1MRU5CUVZWWUxFTkJRVllzUTBGQlZDeERRVUZZTzBGQlFVRXNRMEZCWmp0QlFVTkJMRWxCUVUxWkxEUkNRVUZWWkN4eFFrRkJjVUpWTEUxQlFYSkNMRU5CUVdoQ08wRkJRMEVzU1VGQlRVc3NaME5CUVZsYUxIRkNRVUZ4UWxjc1QwRkJja0lzUTBGQmJFSTdPMEZCUlVFc1NVRkJUVVVzYzBOQlFXVXNWVUZCUTFZc1MwRkJSRHRCUVVGQkxGTkJRVmNzVlVGQlEwb3NRMEZCUkR0QlFVRkJMRmRCUVZGQkxFbEJRVWxCTEVOQlFVd3NTVUZCVnl4RFFVRkRTU3hSUVVGUkxFTkJRVlFzU1VGQlkwb3NRMEZCWkN4SFFVRnJRa2tzUzBGQk4wSXNRMEZCVUR0QlFVRkJMRWRCUVZnN1FVRkJRU3hEUVVGeVFqdEJRVU5CTEVsQlFVMVhMREJDUVVGVFJDeGhRVUZoYWtJc01FSkJRV0lzUTBGQlpqdEJRVU5CTEVsQlFVMXRRaXcwUWtGQlZXeENMSEZDUVVGeFFtbENMRTFCUVhKQ0xFTkJRV2hDTzBGQlEwRXNTVUZCVFVVc1owTkJRVmxvUWl4eFFrRkJjVUpqTEUxQlFYSkNMRU5CUVd4Q096dEJRVVZCTEVsQlFVMUhMREJFUVVGNVFpeFZRVUZEWkN4TFFVRkVMRVZCUVZjN1FVRkRMME1zVFVGQlRXVXNZVUZCWVV3c1lVRkJZVllzUzBGQllpeERRVUZ1UWp0QlFVTkJMRk5CUVU4c1ZVRkJRMG9zUTBGQlJEdEJRVUZCTEZkQlFWRXNRMEZCUTBFc1MwRkJTeXhEUVVGT0xFbEJRVmNzUTBGQldpeEhRVUZwUWl4TlFVRk5iVUlzVjBGQlYyNUNMRU5CUVZnc1EwRkJka0lzUjBGQmRVTXNUMEZCVHl4SlFVRkpVeXhMUVVGTFZ5eEhRVUZNTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVVNc1JVRkJSQ3hKUVVGUGNFSXNTVUZCU1N4RFFVRllMRU5CUVZvc1EwRkJXQ3hEUVVFNVF6dEJRVUZCTEVkQlFWQTdRVUZEUkN4RFFVaE5PenRCUVV0QkxFbEJRVTF4UWl4clEwRkJZVWdzZFVKQlFYVkNja0lzTUVKQlFYWkNMRU5CUVc1Q0lpd2labWxzWlNJNkltVmhjMmx1Wnk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1OdmJuTjBJRVJGUmtGVlRGUmZUMVpGVWxOSVQwOVVYMU5VVWtWT1IxUklJRDBnTVM0MU1qVTdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWU1pYWmxjbk5sWkVWaGMybHVaeUE5SUNobFlYTnBibWNwSUQwK0lDaHdLU0E5UGlBeElDMGdaV0Z6YVc1bktERWdMU0J3S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVk5hWEp5YjNKbFpFVmhjMmx1WnlBOUlDaGxZWE5wYm1jcElEMCtJQ2h3S1NBOVBpQW9jQ0E4UFNBd0xqVXBJRDhnWldGemFXNW5LRElnS2lCd0tTQXZJRElnT2lBb01pQXRJR1ZoYzJsdVp5Z3lJQ29nS0RFZ0xTQndLU2twSUM4Z01qdGNibHh1Wlhod2IzSjBJR052Ym5OMElHeHBibVZoY2lBOUlDaHdLU0E5UGlCd08xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzSmxZWFJsUldGelpVbHVJRDBnS0hCdmQyVnlLU0E5UGlBb2NDa2dQVDRnY0NBcUtpQndiM2RsY2p0Y2JtVjRjRzl5ZENCamIyNXpkQ0JsWVhObFNXNGdQU0JqY21WaGRHVkZZWE5sU1c0b01pazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1pXRnpaVTkxZENBOUlHTnlaV0YwWlZKbGRtVnljMlZrUldGemFXNW5LR1ZoYzJWSmJpazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1pXRnpaVWx1VDNWMElEMGdZM0psWVhSbFRXbHljbTl5WldSRllYTnBibWNvWldGelpVbHVLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR05wY21OSmJpQTlJQ2h3S1NBOVBpQXhJQzBnVFdGMGFDNXphVzRvVFdGMGFDNWhZMjl6S0hBcEtUdGNibVY0Y0c5eWRDQmpiMjV6ZENCamFYSmpUM1YwSUQwZ1kzSmxZWFJsVW1WMlpYSnpaV1JGWVhOcGJtY29ZMmx5WTBsdUtUdGNibVY0Y0c5eWRDQmpiMjV6ZENCamFYSmpTVzVQZFhRZ1BTQmpjbVZoZEdWTmFYSnliM0psWkVWaGMybHVaeWhqYVhKalQzVjBLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR055WldGMFpVSmhZMnRKYmlBOUlDaHdiM2RsY2lrZ1BUNGdLSEFwSUQwK0lDaHdJQ29nY0NrZ0tpQW9LSEJ2ZDJWeUlDc2dNU2tnS2lCd0lDMGdjRzkzWlhJcE8xeHVaWGh3YjNKMElHTnZibk4wSUdKaFkydEpiaUE5SUdOeVpXRjBaVUpoWTJ0SmJpaEVSVVpCVlV4VVgwOVdSVkpUU0U5UFZGOVRWRkpGVGtkVVNDazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1ltRmphMDkxZENBOUlHTnlaV0YwWlZKbGRtVnljMlZrUldGemFXNW5LR0poWTJ0SmJpazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1ltRmphMGx1VDNWMElEMGdZM0psWVhSbFRXbHljbTl5WldSRllYTnBibWNvWW1GamEwbHVLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR055WldGMFpVRnVkR2xqYVhCaGRHVkZZWE5wYm1jZ1BTQW9jRzkzWlhJcElEMCtJSHRjYmlBZ1kyOXVjM1FnWW1GamEwVmhjMmx1WnlBOUlHTnlaV0YwWlVKaFkydEpiaWh3YjNkbGNpazdYRzRnSUhKbGRIVnliaUFvY0NrZ1BUNGdLQ2h3SUNvOUlESXBJRHdnTVNrZ1B5QXdMalVnS2lCaVlXTnJSV0Z6YVc1bktIQXBJRG9nTUM0MUlDb2dLRElnTFNCTllYUm9MbkJ2ZHlneUxDQXRNVEFnS2lBb2NDQXRJREVwS1NrN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdZVzUwYVdOcGNHRjBaU0E5SUdOeVpXRjBaVUZ1ZEdsamFYQmhkR1ZGWVhOcGJtY29SRVZHUVZWTVZGOVBWa1ZTVTBoUFQxUmZVMVJTUlU1SFZFZ3BPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2Vhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJwb3Btb3Rpb24uZ2xvYmFsLmpzIn0=