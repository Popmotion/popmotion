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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwuanMiXSwibmFtZXMiOlsicG9wbW90aW9uIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBOztJQUFZQSxTOzs7O0FBQ1pDLE9BQU9ELFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy5oYWxsL1Byb2plY3RzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBvcG1vdGlvbiBmcm9tICcuL3BvcG1vdGlvbic7XG53aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuIl19

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.svgPath = exports.svg = exports.css = exports.Renderer = exports.value = exports.stagger = exports.tween = exports.touches = exports.pointer = exports.physics = exports.parallel = exports.delay = exports.crossFade = exports.composite = exports.colorTween = exports.chain = exports.blendTweens = exports.Action = exports.valueTypes = exports.transform = exports.easing = exports.calc = exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
	var _framesync = __webpack_require__(19);
	
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
	
	var _calc2 = __webpack_require__(2);
	
	var _calc = _interopRequireWildcard(_calc2);
	
	var _easing2 = __webpack_require__(3);
	
	var _easing = _interopRequireWildcard(_easing2);
	
	var _transformers = __webpack_require__(4);
	
	var _transform = _interopRequireWildcard(_transformers);
	
	var _valueTypes2 = __webpack_require__(5);
	
	var _valueTypes = _interopRequireWildcard(_valueTypes2);
	
	var _actions = __webpack_require__(20);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _blendTweens2 = __webpack_require__(6);
	
	var _blendTweens3 = _interopRequireDefault(_blendTweens2);
	
	var _chain2 = __webpack_require__(7);
	
	var _chain3 = _interopRequireDefault(_chain2);
	
	var _colorTween2 = __webpack_require__(8);
	
	var _colorTween3 = _interopRequireDefault(_colorTween2);
	
	var _composite2 = __webpack_require__(9);
	
	var _composite3 = _interopRequireDefault(_composite2);
	
	var _crossFade2 = __webpack_require__(10);
	
	var _crossFade3 = _interopRequireDefault(_crossFade2);
	
	var _delay2 = __webpack_require__(11);
	
	var _delay3 = _interopRequireDefault(_delay2);
	
	var _parallel2 = __webpack_require__(12);
	
	var _parallel3 = _interopRequireDefault(_parallel2);
	
	var _physics2 = __webpack_require__(13);
	
	var _physics3 = _interopRequireDefault(_physics2);
	
	var _pointer2 = __webpack_require__(14);
	
	var _pointer3 = _interopRequireDefault(_pointer2);
	
	var _touches2 = __webpack_require__(15);
	
	var _touches3 = _interopRequireDefault(_touches2);
	
	var _tween2 = __webpack_require__(16);
	
	var _tween3 = _interopRequireDefault(_tween2);
	
	var _stagger2 = __webpack_require__(17);
	
	var _stagger3 = _interopRequireDefault(_stagger2);
	
	var _value2 = __webpack_require__(18);
	
	var _value3 = _interopRequireDefault(_value2);
	
	var _renderers = __webpack_require__(21);
	
	var _renderers2 = _interopRequireDefault(_renderers);
	
	var _css2 = __webpack_require__(22);
	
	var _css3 = _interopRequireDefault(_css2);
	
	var _svg2 = __webpack_require__(23);
	
	var _svg3 = _interopRequireDefault(_svg2);
	
	var _svgPath2 = __webpack_require__(24);
	
	var _svgPath3 = _interopRequireDefault(_svgPath2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.calc = _calc;
	exports.easing = _easing;
	exports.transform = _transform;
	exports.valueTypes = _valueTypes;
	
	// Actions
	
	exports.Action = _actions2.default;
	exports.blendTweens = _blendTweens3.default;
	exports.chain = _chain3.default;
	exports.colorTween = _colorTween3.default;
	exports.composite = _composite3.default;
	exports.crossFade = _crossFade3.default;
	exports.delay = _delay3.default;
	exports.parallel = _parallel3.default;
	exports.physics = _physics3.default;
	exports.pointer = _pointer3.default;
	exports.touches = _touches3.default;
	exports.tween = _tween3.default;
	exports.stagger = _stagger3.default;
	exports.value = _value3.default;
	
	// Renderers
	
	exports.Renderer = _renderers2.default;
	exports.css = _css3.default;
	exports.svg = _svg3.default;
	exports.svgPath = _svgPath3.default;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOlsib25GcmFtZVN0YXJ0Iiwib25GcmFtZVVwZGF0ZSIsIm9uRnJhbWVSZW5kZXIiLCJvbkZyYW1lRW5kIiwiY2FuY2VsT25GcmFtZVN0YXJ0IiwiY2FuY2VsT25GcmFtZVVwZGF0ZSIsImNhbmNlbE9uRnJhbWVSZW5kZXIiLCJjYW5jZWxPbkZyYW1lRW5kIiwidGltZVNpbmNlTGFzdEZyYW1lIiwiY3VycmVudEZyYW1lVGltZXN0YW1wIiwiY2FsYyIsImVhc2luZyIsInRyYW5zZm9ybSIsInZhbHVlVHlwZXMiLCJBY3Rpb24iLCJibGVuZFR3ZWVucyIsImNoYWluIiwiY29sb3JUd2VlbiIsImNvbXBvc2l0ZSIsImNyb3NzRmFkZSIsImRlbGF5IiwicGFyYWxsZWwiLCJwaHlzaWNzIiwicG9pbnRlciIsInRvdWNoZXMiLCJ0d2VlbiIsInN0YWdnZXIiLCJ2YWx1ZSIsIlJlbmRlcmVyIiwiY3NzIiwic3ZnIiwic3ZnUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzQkFFRUEsWTs7Ozs7O3NCQUNBQyxhOzs7Ozs7c0JBQ0FDLGE7Ozs7OztzQkFDQUMsVTs7Ozs7O3NCQUNBQyxrQjs7Ozs7O3NCQUNBQyxtQjs7Ozs7O3NCQUNBQyxtQjs7Ozs7O3NCQUNBQyxnQjs7Ozs7O3NCQUNBQyxrQjs7Ozs7O3NCQUNBQyxxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBR1VDLEk7UUFDQUMsTTtRQUNBQyxTO1FBQ0FDLFU7O0FBRVo7O1FBQ09DLE07UUFDQUMsVztRQUNBQyxLO1FBQ0FDLFU7UUFDQUMsUztRQUNBQyxTO1FBQ0FDLEs7UUFDQUMsUTtRQUNBQyxPO1FBQ0FDLE87UUFDQUMsTztRQUNBQyxLO1FBQ0FDLE87UUFDQUMsSzs7QUFFUDs7UUFDT0MsUTtRQUNBQyxHO1FBQ0FDLEc7UUFDQUMsTyIsImZpbGUiOiJwb3Btb3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMuaGFsbC9Qcm9qZWN0cy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGcmFtZXN5bmMgc2NoZWR1bGVyc1xuZXhwb3J0IHtcbiAgb25GcmFtZVN0YXJ0LFxuICBvbkZyYW1lVXBkYXRlLFxuICBvbkZyYW1lUmVuZGVyLFxuICBvbkZyYW1lRW5kLFxuICBjYW5jZWxPbkZyYW1lU3RhcnQsXG4gIGNhbmNlbE9uRnJhbWVVcGRhdGUsXG4gIGNhbmNlbE9uRnJhbWVSZW5kZXIsXG4gIGNhbmNlbE9uRnJhbWVFbmQsXG4gIHRpbWVTaW5jZUxhc3RGcmFtZSxcbiAgY3VycmVudEZyYW1lVGltZXN0YW1wXG59IGZyb20gJy4vZnJhbWVzeW5jJztcblxuZXhwb3J0ICogYXMgY2FsYyBmcm9tICcuL2luYy9jYWxjJztcbmV4cG9ydCAqIGFzIGVhc2luZyBmcm9tICcuL2luYy9lYXNpbmcnO1xuZXhwb3J0ICogYXMgdHJhbnNmb3JtIGZyb20gJy4vaW5jL3RyYW5zZm9ybWVycyc7XG5leHBvcnQgKiBhcyB2YWx1ZVR5cGVzIGZyb20gJy4vaW5jL3ZhbHVlLXR5cGVzJztcblxuLy8gQWN0aW9uc1xuZXhwb3J0IEFjdGlvbiBmcm9tICcuL2FjdGlvbnMnO1xuZXhwb3J0IGJsZW5kVHdlZW5zIGZyb20gJy4vYWN0aW9ucy9ibGVuZC10d2VlbnMnO1xuZXhwb3J0IGNoYWluIGZyb20gJy4vYWN0aW9ucy9jaGFpbic7XG5leHBvcnQgY29sb3JUd2VlbiBmcm9tICcuL2FjdGlvbnMvY29sb3ItdHdlZW4nO1xuZXhwb3J0IGNvbXBvc2l0ZSBmcm9tICcuL2FjdGlvbnMvY29tcG9zaXRlJztcbmV4cG9ydCBjcm9zc0ZhZGUgZnJvbSAnLi9hY3Rpb25zL2Nyb3NzLWZhZGUnO1xuZXhwb3J0IGRlbGF5IGZyb20gJy4vYWN0aW9ucy9kZWxheSc7XG5leHBvcnQgcGFyYWxsZWwgZnJvbSAnLi9hY3Rpb25zL3BhcmFsbGVsJztcbmV4cG9ydCBwaHlzaWNzIGZyb20gJy4vYWN0aW9ucy9waHlzaWNzJztcbmV4cG9ydCBwb2ludGVyIGZyb20gJy4vYWN0aW9ucy9wb2ludGVyJztcbmV4cG9ydCB0b3VjaGVzIGZyb20gJy4vYWN0aW9ucy90b3VjaGVzJztcbmV4cG9ydCB0d2VlbiBmcm9tICcuL2FjdGlvbnMvdHdlZW4nO1xuZXhwb3J0IHN0YWdnZXIgZnJvbSAnLi9hY3Rpb25zL3N0YWdnZXInO1xuZXhwb3J0IHZhbHVlIGZyb20gJy4vYWN0aW9ucy92YWx1ZSc7XG5cbi8vIFJlbmRlcmVyc1xuZXhwb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXJzJztcbmV4cG9ydCBjc3MgZnJvbSAnLi9yZW5kZXJlcnMvY3NzJztcbmV4cG9ydCBzdmcgZnJvbSAnLi9yZW5kZXJlcnMvc3ZnJztcbmV4cG9ydCBzdmdQYXRoIGZyb20gJy4vcmVuZGVyZXJzL3N2Zy1wYXRoJztcbiJdfQ==

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.getValueFromProgress = exports.getProgressFromValue = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(25);
	
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvY2FsYy5qcyJdLCJuYW1lcyI6WyJ0b0RlY2ltYWwiLCJudW0iLCJwcmVjaXNpb24iLCJNYXRoIiwicm91bmQiLCJaRVJPX1BPSU5UIiwieCIsInkiLCJ6IiwiZGlzdGFuY2UxRCIsImEiLCJiIiwiYWJzIiwiYW5nbGUiLCJyYWRpYW5zVG9EZWdyZWVzIiwiYXRhbjIiLCJkZWdyZWVzVG9SYWRpYW5zIiwiZGVncmVlcyIsIlBJIiwiZGlsYXRlIiwiZGlsYXRpb24iLCJkaXN0YW5jZSIsInhEZWx0YSIsInlEZWx0YSIsInpEZWx0YSIsInNxcnQiLCJnZXRQcm9ncmVzc0Zyb21WYWx1ZSIsImZyb20iLCJ0byIsInZhbHVlIiwiZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MiLCJwcm9ncmVzcyIsInBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UiLCJvcmlnaW4iLCJjb3MiLCJzaW4iLCJyYWRpYW5zIiwic21vb3RoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImR1cmF0aW9uIiwic21vb3RoaW5nIiwibWF4Iiwic3BlZWRQZXJGcmFtZSIsInhwcyIsImZyYW1lRHVyYXRpb24iLCJzcGVlZFBlclNlY29uZCIsInZlbG9jaXR5Iiwic3RlcFByb2dyZXNzIiwic3RlcHMiLCJzZWdtZW50IiwidGFyZ2V0IiwicHJvZ3Jlc3NPZlRhcmdldCIsIm1pbiIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOzs7Ozs7O0FBT0EsSUFBTUEsWUFBWSxVQUFDQyxHQUFELEVBQXdCO0FBQUEsTUFBbEJDLFNBQWtCLHVFQUFOLENBQU07O0FBQ3hDQSx1QkFBWSxFQUFaLEVBQWtCQSxTQUFsQjtBQUNBLFNBQU9DLEtBQUtDLEtBQUwsQ0FBV0gsTUFBTUMsU0FBakIsSUFBOEJBLFNBQXJDO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNRyxhQUFhO0FBQ2pCQyxLQUFHLENBRGM7QUFFakJDLEtBQUcsQ0FGYztBQUdqQkMsS0FBRztBQUhjLENBQW5COztBQU1BLElBQU1DLGFB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QUFLdUMsR0FBTCxDQUFTRCxTQUFULEVBQW9CRCxRQUFwQixDQUF6RCxDQUFqRDtBQUFBLENBQWY7O0FBRVA7Ozs7OztBQU1PLElBQU1HLHdDQUFnQixVQUFDQyxHQUFELEVBQU1DLGFBQU47QUFBQSxTQUF5QixrQkFBTUQsR0FBTixDQUFELEdBQWVBLE9BQU8sT0FBT0MsYUFBZCxDQUFmLEdBQThDLENBQXRFO0FBQUEsQ0FBdEI7O0FBRVA7Ozs7OztBQU1PLElBQU1DLDBDQUFpQixVQUFDQyxRQUFELEVBQVdGLGFBQVg7QUFBQSxTQUE2QkUsWUFBWSxPQUFPRixhQUFuQixDQUE3QjtBQUFBLENBQXZCOztBQUVQOzs7Ozs7O0FBT08sSUFBTUcsc0NBQWUsVUFBQ0MsS0FBRCxFQUFRbEIsUUFBUixFQUFxQjtBQUMvQyxNQUFNbUIsVUFBVSxLQUFLRCxRQUFRLENBQWIsQ0FBaEI7QUFDQSxNQUFNRSxTQUFTLElBQUssSUFBSUYsS0FBeEI7QUFDQSxNQUFNRyxtQkFBbUJqRCxLQUFLa0QsR0FBTCxDQUFTdEIsV0FBV29CLE1BQXBCLEVBQTRCLENBQTVCLENBQXpCOztBQUVBLFNBQU9oRCxLQUFLbUQsS0FBTCxDQUFXRixtQkFBbUJGLE9BQTlCLElBQXlDQSxPQUFoRDtBQUNELENBTk0iLCJmaWxlIjoiY2FsYy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy5oYWxsL1Byb2plY3RzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG5jb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gIHByZWNpc2lvbiA9IDEwICoqIHByZWNpc2lvbjtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG5cbmNvbnN0IFpFUk9fUE9JTlQgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHo6IDBcbn07XG5cbmNvbnN0IGRpc3RhbmNlMUQgPSAoYSwgYikgPT4gTWF0aC5hYnMoYSAtIGIpO1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICBcbiAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gIGFyZSBhdCAwLDBcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBhbmdsZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBkZWdyZWVzVG9SYWRpYW5zID0gKGRlZ3JlZXMpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuXG4vKlxuICBEaWxhdGVcbiAgXG4gIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICBcbiAgYSAtLS0tLS0tLS0gYlxuICBcbiAgdG9cbiAgXG4gIGEgLS0tLSBiXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbmV4cG9ydCBjb25zdCBkaWxhdGUgPSAoYSwgYiwgZGlsYXRpb24pID0+IGEgKyAoKGIgLSBhKSAqIGRpbGF0aW9uKTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IGRpc3RhbmNlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiB7XG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKGlzTnVtKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICBjb25zdCB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICBjb25zdCB6RGVsdGEgPSAoaXNOdW0oYS56KSkgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KCh4RGVsdGEgKiogMikgKyAoeURlbHRhICoqIDIpICsgKHpEZWx0YSAqKiAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbmV4cG9ydCBjb25zdCBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IChmcm9tLCB0bywgdmFsdWUpID0+ICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG5cbi8qXG4gIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IChmcm9tLCB0bywgcHJvZ3Jlc3MpID0+ICgtIHByb2dyZXNzICogZnJvbSkgKyAocHJvZ3Jlc3MgKiB0bykgKyBmcm9tO1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG5leHBvcnQgY29uc3QgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkgPT4ge1xuICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gIHJldHVybiB7XG4gICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gIH07XG59O1xuXG4vKlxuICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG5leHBvcnQgY29uc3QgcmFkaWFuc1RvRGVncmVlcyA9IChyYWRpYW5zKSA9PiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbmV4cG9ydCBjb25zdCBzbW9vdGggPSAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nID0gMCkgPT4gdG9EZWNpbWFsKG9sZFZhbHVlICsgKGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpKTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlckZyYW1lID0gKHhwcywgZnJhbWVEdXJhdGlvbikgPT4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHN0ZXBQcm9ncmVzcyA9IChzdGVwcywgcHJvZ3Jlc3MpID0+IHtcbiAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgY29uc3QgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpO1xuICBjb25zdCBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuIl19

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.cubicBezier = exports.anticipate = exports.createAnticipateEasing = exports.backInOut = exports.backOut = exports.backIn = exports.createBackIn = exports.circInOut = exports.circOut = exports.circIn = exports.easeInOut = exports.easeOut = exports.easeIn = exports.createExpoIn = exports.linear = exports.createMirroredEasing = exports.createReversedEasing = undefined;
	
	var _transformers = __webpack_require__(4);
	
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
	
	var createExpoIn = exports.createExpoIn = function (power) {
	  return function (p) {
	    return Math.pow(p, power);
	  };
	};
	var easeIn = exports.easeIn = createExpoIn(2);
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
	
	var cubicBezier = exports.cubicBezier = function (x1, y1, x2, y2) {
	  var xBezier = (0, _transformers.bezier)(0, x1, x2, 1);
	  var yBezier = (0, _transformers.bezier)(0, y1, y2, 1);
	
	  return function (t) {
	    return yBezier(xBezier(t));
	  };
	};
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvZWFzaW5nLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIIiwiY3JlYXRlUmV2ZXJzZWRFYXNpbmciLCJlYXNpbmciLCJwIiwiY3JlYXRlTWlycm9yZWRFYXNpbmciLCJsaW5lYXIiLCJjcmVhdGVFeHBvSW4iLCJwb3dlciIsImVhc2VJbiIsImVhc2VPdXQiLCJlYXNlSW5PdXQiLCJjaXJjSW4iLCJNYXRoIiwic2luIiwiYWNvcyIsImNpcmNPdXQiLCJjaXJjSW5PdXQiLCJjcmVhdGVCYWNrSW4iLCJiYWNrSW4iLCJiYWNrT3V0IiwiYmFja0luT3V0IiwiY3JlYXRlQW50aWNpcGF0ZUVhc2luZyIsImJhY2tFYXNpbmciLCJwb3ciLCJhbnRpY2lwYXRlIiwiY3ViaWNCZXppZXIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInhCZXppZXIiLCJ5QmV6aWVyIiwidCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxJQUFNQSw2QkFBNkIsS0FBbkM7O0FBRU8sSUFBTUMsc0RBQXVCLFVBQUNDLE1BQUQ7QUFBQSxTQUFZLFVBQUNDLENBQUQ7QUFBQSxXQUFPLElBQUlELE9BQU8sSUFBSUMsQ0FBWCxDQUFYO0FBQUEsR0FBWjtBQUFBLENBQTdCO0FBQ0EsSUFBTUMsc0RBQXVCLFVBQUNGLE1BQUQ7QUFBQSxTQUFZLFVBQUNDLENBQUQ7QUFBQSxXQUFRQSxLQUFLLEdBQU4sR0FBYUQsT0FBTyxJQUFJQyxDQUFYLElBQWdCLENBQTdCLEdBQWlDLENBQUMsSUFBSUQsT0FBTyxLQUFLLElBQUlDLENBQVQsQ0FBUCxDQUFMLElBQTRCLENBQXBFO0FBQUEsR0FBWjtBQUFBLENBQTdCOztBQUVBLElBQU1FLDBCQUFTLFVBQUNGLENBQUQ7QUFBQSxTQUFPQSxDQUFQO0FBQUEsQ0FBZjs7QUFFQSxJQUFNRyxzQ0FBZSxVQUFDQyxLQUFEO0FBQUEsU0FBVyxVQUFDSixDQUFEO0FBQUEsb0JBQU9BLENBQVAsRUFBWUksS0FBWjtBQUFBLEdBQVg7QUFBQSxDQUFyQjtBQUNBLElBQU1DLDBCQUFTRixhQUFhLENBQWIsQ0FBZjtBQUNBLElBQU1HLDRCQUFVUixxQkFBcUJPLE1BQXJCLENBQWhCO0FBQ0EsSUFBTUUsZ0NBQVlOLHFCQUFxQkksTUFBckIsQ0FBbEI7O0FBRUEsSUFBTUcsMEJBQVMsVUFBQ1IsQ0FBRDtBQUFBLFNBQU8sSUFBSVMsS0FBS0MsR0FBTCxDQUFTRCxLQUFLRSxJQUFMLENBQVVYLENBQVYsQ0FBVCxDQUFYO0FBQUEsQ0FBZjtBQUNBLElBQU1ZLDRCQUFVZCxxQkFBcUJVLE1BQXJCLENBQWhCO0FBQ0EsSUFBTUssZ0NBQVlaLHFCQUFxQlcsT0FBckIsQ0FBbEI7O0FBRUEsSUFBTUUsc0NBQWUsVUFBQ1YsS0FBRDtBQUFBLFNBQVcsVUFBQ0osQ0FBRDtBQUFBLFdBQVFBLElBQUlBLENBQUwsSUFBVyxDQUFDSSxRQUFRLENBQVQsSUFBY0osQ0FBZCxHQUFrQkksS0FBN0IsQ0FBUDtBQUFBLEdBQVg7QUFBQSxDQUFyQjtBQUNBLElBQU1XLDBCQUFTRCxhQUFhakIsMEJBQWIsQ0FBZjtBQUNBLElBQU1tQiw0QkFBVWxCLHFCQUFxQmlCLE1BQXJCLENBQWhCO0FBQ0EsSUFBTUUsZ0NBQVloQixxQkFBcUJjLE1BQXJCLENBQWxCOztBQUVBLElBQU1HLDBEQUF5QixVQUFDZCxLQUFELEVBQVc7QUFDL0MsTUFBTWUsYUFBYUwsYUFBYVYsS0FBYixDQUFuQjtBQUNBLFNBQU8sVUFBQ0osQ0FBRDtBQUFBLFdBQVEsQ0FBQ0EsS0FBSyxDQUFOLElBQVcsQ0FBWixHQUFpQixNQUFNbUIsV0FBV25CLENBQVgsQ0FBdkIsR0FBdUMsT0FBTyxJQUFJUyxLQUFLVyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxJQUFPcEIsSUFBSSxDQUFYLENBQVosQ0FBWCxDQUE5QztBQUFBLEdBQVA7QUFDRCxDQUhNOztBQUtBLElBQU1xQixrQ0FBYUgsdUJBQXVCckIsMEJBQXZCLENBQW5COztBQUVBLElBQU15QixvQ0FBYyxVQUFDQyxFQUFELEVBQUtDLEVBQUwsRUFBU0MsRUFBVCxFQUFhQyxFQUFiLEVBQW9CO0FBQzdDLE1BQU1DLFVBQVUsMEJBQU8sQ0FBUCxFQUFVSixFQUFWLEVBQWNFLEVBQWQsRUFBa0IsQ0FBbEIsQ0FBaEI7QUFDQSxNQUFNRyxVQUFVLDBCQUFPLENBQVAsRUFBVUosRUFBVixFQUFjRSxFQUFkLEVBQWtCLENBQWxCLENBQWhCOztBQUVBLFNBQU8sVUFBQ0csQ0FBRDtBQUFBLFdBQU9ELFFBQVFELFFBQVFFLENBQVIsQ0FBUixDQUFQO0FBQUEsR0FBUDtBQUNELENBTE0iLCJmaWxlIjoiZWFzaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzLmhhbGwvUHJvamVjdHMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmV6aWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMnO1xuXG5jb25zdCBERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCA9IDEuNTI1O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSAoZWFzaW5nKSA9PiAocCkgPT4gMSAtIGVhc2luZygxIC0gcCk7XG5leHBvcnQgY29uc3QgY3JlYXRlTWlycm9yZWRFYXNpbmcgPSAoZWFzaW5nKSA9PiAocCkgPT4gKHAgPD0gMC41KSA/IGVhc2luZygyICogcCkgLyAyIDogKDIgLSBlYXNpbmcoMiAqICgxIC0gcCkpKSAvIDI7XG5cbmV4cG9ydCBjb25zdCBsaW5lYXIgPSAocCkgPT4gcDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUV4cG9JbiA9IChwb3dlcikgPT4gKHApID0+IHAgKiogcG93ZXI7XG5leHBvcnQgY29uc3QgZWFzZUluID0gY3JlYXRlRXhwb0luKDIpO1xuZXhwb3J0IGNvbnN0IGVhc2VPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNlSW4pO1xuZXhwb3J0IGNvbnN0IGVhc2VJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGVhc2VJbik7XG5cbmV4cG9ydCBjb25zdCBjaXJjSW4gPSAocCkgPT4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwKSk7XG5leHBvcnQgY29uc3QgY2lyY091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGNpcmNJbik7XG5leHBvcnQgY29uc3QgY2lyY0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoY2lyY091dCk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCYWNrSW4gPSAocG93ZXIpID0+IChwKSA9PiAocCAqIHApICogKChwb3dlciArIDEpICogcCAtIHBvd2VyKTtcbmV4cG9ydCBjb25zdCBiYWNrSW4gPSBjcmVhdGVCYWNrSW4oREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xuZXhwb3J0IGNvbnN0IGJhY2tPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhiYWNrSW4pO1xuZXhwb3J0IGNvbnN0IGJhY2tJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGJhY2tJbik7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gKHBvd2VyKSA9PiB7XG4gIGNvbnN0IGJhY2tFYXNpbmcgPSBjcmVhdGVCYWNrSW4ocG93ZXIpO1xuICByZXR1cm4gKHApID0+ICgocCAqPSAyKSA8IDEpID8gMC41ICogYmFja0Vhc2luZyhwKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHAgLSAxKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFudGljaXBhdGUgPSBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcblxuZXhwb3J0IGNvbnN0IGN1YmljQmV6aWVyID0gKHgxLCB5MSwgeDIsIHkyKSA9PiB7XG4gIGNvbnN0IHhCZXppZXIgPSBiZXppZXIoMCwgeDEsIHgyLCAxKTtcbiAgY29uc3QgeUJlemllciA9IGJlemllcigwLCB5MSwgeTIsIDEpO1xuXG4gIHJldHVybiAodCkgPT4geUJlemllcih4QmV6aWVyKHQpKTtcbn07XG4iXX0=

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.bezier = exports.blendColor = exports.alpha = exports.color = exports.hsla = exports.rgba = exports.rgbUnit = exports.px = exports.degrees = exports.percent = exports.transformChildValues = exports.steps = exports.smooth = exports.wrap = exports.nonlinearSpring = exports.spring = exports.generateNonIntergratedSpring = exports.multiply = exports.divide = exports.add = exports.subtract = exports.interpolate = exports.flow = exports.conditional = exports.clamp = exports.clampMin = exports.clampMax = exports.appendUnit = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _calc = __webpack_require__(2);
	
	var _utils = __webpack_require__(25);
	
	var _parsers = __webpack_require__(26);
	
	var _framesync = __webpack_require__(19);
	
	var noop = function (v) {
	  return v;
	};
	
	/**
	 * Append Unit
	 * A function that will append
	 * appendUnit('px', 20) -> '20px'
	 * @param  {string} unit)
	 * @return {number}
	 */
	var appendUnit = exports.appendUnit = function (unit) {
	  return function (v) {
	    return '' + v + unit;
	  };
	};
	
	/**
	 * Clamp value between
	 * Creates a function that will restrict a given value between `min` and `max`
	 * @param  {number} min
	 * @param  {number} max
	 * @return {number}
	 */
	var clampMax = exports.clampMax = function (max) {
	  return function (v) {
	    return Math.min(v, max);
	  };
	};
	var clampMin = exports.clampMin = function (min) {
	  return function (v) {
	    return Math.max(v, min);
	  };
	};
	var clamp = exports.clamp = function (min, max) {
	  var _min = clampMin(min);
	  var _max = clampMax(max);
	  return function (v) {
	    return _min(_max(v));
	  };
	};
	
	var conditional = exports.conditional = function (condition, ifTrue) {
	  var ifFalse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;
	  return function (v, action) {
	    return condition(v, action) ? ifTrue(v, action) : ifFalse(v, action);
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
	
	/**
	 * Interpolate from set of values to another
	 * @param  {Array} input array
	 * @param  {Array} output
	 * @param  {Function} rangeEasing
	 * @return {Function}
	 */
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
	
	var subtract = exports.subtract = function (origin) {
	  return function (v) {
	    return v - origin;
	  };
	};
	var add = exports.add = function (origin) {
	  return function (v) {
	    return v + origin;
	  };
	};
	var divide = exports.divide = function (origin) {
	  return function (v) {
	    return v / origin;
	  };
	};
	var multiply = exports.multiply = function (origin) {
	  return function (v) {
	    return v * origin;
	  };
	};
	
	var generateNonIntergratedSpring = exports.generateNonIntergratedSpring = function () {
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
	
	var wrap = exports.wrap = function (min, max) {
	  return function (v) {
	    var rangeSize = max - min;
	    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
	  };
	};
	
	var smooth = exports.smooth = function () {
	  var strength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
	
	  var previousValue = 0;
	  var hasSmoothed = false;
	
	  return function (v) {
	    var currentValue = hasSmoothed ? previousValue : v;
	    var newValue = (0, _calc.smooth)(currentValue, previousValue, (0, _framesync.timeSinceLastFrame)(), strength);
	    previousValue = newValue;
	    hasSmoothed = true;
	    return newValue;
	  };
	};
	
	var steps = exports.steps = function (steps, min, max) {
	  return function (v) {
	    var progress = (0, _calc.getProgressFromValue)(min, max, v);
	    return (0, _calc.stepProgress)(steps, progress);
	  };
	};
	
	var transformChildValues = exports.transformChildValues = function (childTransformers) {
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
	
	var rgbUnit = exports.rgbUnit = flow(clamp(0, 255), Math.round);
	
	var rgbaTemplate = function (_ref) {
	  var red = _ref.red,
	      green = _ref.green,
	      blue = _ref.blue,
	      _ref$alpha = _ref.alpha,
	      alpha = _ref$alpha === undefined ? 1 : _ref$alpha;
	  return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
	};
	
	var rgba = exports.rgba = flow(transformChildValues({
	  red: rgbUnit,
	  green: rgbUnit,
	  blue: rgbUnit,
	  alpha: alpha
	}), rgbaTemplate);
	
	var hslaTemplate = function (_ref2) {
	  var hue = _ref2.hue,
	      saturation = _ref2.saturation,
	      lightness = _ref2.lightness,
	      _ref2$alpha = _ref2.alpha,
	      alpha = _ref2$alpha === undefined ? 1 : _ref2$alpha;
	  return 'hsla(' + hue + ', ' + saturation + ', ' + lightness + ', ' + alpha + ')';
	};
	
	var hsla = exports.hsla = flow(transformChildValues({
	  hue: parseFloat,
	  saturation: percent,
	  lightness: percent,
	  alpha: alpha
	}), hslaTemplate);
	
	var color = exports.color = function (v) {
	  if (v.hasOwnProperty('red')) {
	    return rgba(v);
	  } else if (v.hasOwnProperty('hue')) {
	    return hsla(v);
	  }
	  return v;
	};
	
	var alpha = exports.alpha = clamp(0, 1);
	
	var blend = function (from, to, v) {
	  var fromExpo = from * from;
	  var toExpo = to * to;
	  return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
	};
	// http://codepen.io/osublake/pen/xGVVaN
	var blendColor = exports.blendColor = function (from, to) {
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
	var resolve3 = function (points) {
	  return function (t) {
	    var ut = 1 - t;
	    return (points[0] * ut + points[1] * t) * ut + (points[1] * ut + points[2] * t) * t;
	  };
	};
	
	var resolve4 = function (points) {
	  return function (t) {
	    var ut = 1 - t;
	    var a1 = points[1] * ut + points[2] * t;
	    return ((points[0] * ut + points[1] * t) * ut + a1 * t) * ut + (a1 * ut + (points[2] * ut + points[3] * t) * t) * t;
	  };
	};
	
	var bezier = exports.bezier = function (points) {
	  return points.length === 3 ? resolve3(points) : resolve4(points);
	};
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJ2IiwiYXBwZW5kVW5pdCIsInVuaXQiLCJjbGFtcE1heCIsIm1heCIsIk1hdGgiLCJtaW4iLCJjbGFtcE1pbiIsImNsYW1wIiwiX21pbiIsIl9tYXgiLCJjb25kaXRpb25hbCIsImNvbmRpdGlvbiIsImlmVHJ1ZSIsImlmRmFsc2UiLCJhY3Rpb24iLCJmbG93IiwidHJhbnNmb3JtZXJzIiwibnVtVHJhbnNmb3JtZXJzIiwibGVuZ3RoIiwiaSIsImFjYyIsImFyZ3MiLCJpbnRlcnBvbGF0ZSIsImlucHV0Iiwib3V0cHV0IiwicmFuZ2VFYXNpbmciLCJyYW5nZUxlbmd0aCIsImZpbmFsSW5kZXgiLCJwcm9ncmVzc0luUmFuZ2UiLCJlYXNlZFByb2dyZXNzIiwic3VidHJhY3QiLCJvcmlnaW4iLCJhZGQiLCJkaXZpZGUiLCJtdWx0aXBseSIsImdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmciLCJhbHRlckRpc3BsYWNlbWVudCIsImNvbnN0YW50IiwiZGlzcGxhY2VtZW50Iiwic3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQiLCJhYnMiLCJzcHJpbmciLCJub25saW5lYXJTcHJpbmciLCJzcXJ0Iiwid3JhcCIsInJhbmdlU2l6ZSIsInNtb290aCIsInN0cmVuZ3RoIiwicHJldmlvdXNWYWx1ZSIsImhhc1Ntb290aGVkIiwiY3VycmVudFZhbHVlIiwibmV3VmFsdWUiLCJzdGVwcyIsInByb2dyZXNzIiwidHJhbnNmb3JtQ2hpbGRWYWx1ZXMiLCJjaGlsZFRyYW5zZm9ybWVycyIsIm11dGFibGVTdGF0ZSIsImtleSIsImNoaWxkVHJhbnNmb3JtZXIiLCJwZXJjZW50IiwiZGVncmVlcyIsInB4IiwicmdiVW5pdCIsInJvdW5kIiwicmdiYVRlbXBsYXRlIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYWxwaGEiLCJyZ2JhIiwiaHNsYVRlbXBsYXRlIiwiaHVlIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsImhzbGEiLCJwYXJzZUZsb2F0IiwiY29sb3IiLCJoYXNPd25Qcm9wZXJ0eSIsImJsZW5kIiwiZnJvbSIsInRvIiwiZnJvbUV4cG8iLCJ0b0V4cG8iLCJibGVuZENvbG9yIiwiZnJvbUNvbG9yIiwidG9Db2xvciIsImJsZW5kZWQiLCJyZXNvbHZlMyIsInBvaW50cyIsInQiLCJ1dCIsInJlc29sdmU0IiwiYTEiLCJiZXppZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLFVBQUNDLENBQUQ7QUFBQSxTQUFPQSxDQUFQO0FBQUEsQ0FBYjs7QUFFQTs7Ozs7OztBQU9PLElBQU1DLGtDQUFhLFVBQUNDLElBQUQ7QUFBQSxTQUFVLFVBQUNGLENBQUQ7QUFBQSxnQkFBVUEsQ0FBVixHQUFjRSxJQUFkO0FBQUEsR0FBVjtBQUFBLENBQW5COztBQUVQOzs7Ozs7O0FBT08sSUFBTUMsOEJBQVcsVUFBQ0MsR0FBRDtBQUFBLFNBQVMsVUFBQ0osQ0FBRDtBQUFBLFdBQU9LLEtBQUtDLEdBQUwsQ0FBU04sQ0FBVCxFQUFZSSxHQUFaLENBQVA7QUFBQSxHQUFUO0FBQUEsQ0FBakI7QUFDQSxJQUFNRyw4QkFBVyxVQUFDRCxHQUFEO0FBQUEsU0FBUyxVQUFDTixDQUFEO0FBQUEsV0FBT0ssS0FBS0QsR0FBTCxDQUFTSixDQUFULEVBQVlNLEdBQVosQ0FBUDtBQUFBLEdBQVQ7QUFBQSxDQUFqQjtBQUNBLElBQU1FLHdCQUFRLFVBQUNGLEdBQUQsRUFBTUYsR0FBTixFQUFjO0FBQ2pDLE1BQU1LLE9BQU9GLFNBQVNELEdBQVQsQ0FBYjtBQUNBLE1BQU1JLE9BQU9QLFNBQVNDLEdBQVQsQ0FBYjtBQUNBLFNBQU8sVUFBQ0osQ0FBRDtBQUFBLFdBQU9TLEtBQUtDLEtBQUtWLENBQUwsQ0FBTCxDQUFQO0FBQUEsR0FBUDtBQUNELENBSk07O0FBTUEsSUFBTVcsb0NBQWMsVUFBQ0MsU0FBRCxFQUFZQyxNQUFaO0FBQUEsTUFBb0JDLE9BQXBCLHVF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RUFBbkMsR0FBd0MsQ0FBQ0YsT0FBTyxDQUFQLElBQVlFLEVBQVosR0FBaUJGLE9BQU8sQ0FBUCxJQUFZQyxDQUE5QixJQUFtQ0EsQ0FBbEY7QUFDRCxHQUhnQjtBQUFBLENBQWpCOztBQUtBLElBQU1FLFdBQVcsVUFBQ0gsTUFBRDtBQUFBLFNBQVksVUFBQ0MsQ0FBRCxFQUFPO0FBQ2xDLFFBQU1DLEtBQUssSUFBSUQsQ0FBZjtBQUNBLFFBQU1HLEtBQUtKLE9BQU8sQ0FBUCxJQUFZRSxFQUFaLEdBQWlCRixPQUFPLENBQVAsSUFBWUMsQ0FBeEM7QUFDQSxXQUFPLENBQUMsQ0FBQ0QsT0FBTyxDQUFQLElBQVlFLEVBQVosR0FBaUJGLE9BQU8sQ0FBUCxJQUFZQyxDQUE5QixJQUFtQ0MsRUFBbkMsR0FBd0NFLEtBQUtILENBQTlDLElBQW1EQyxFQUFuRCxHQUF3RCxDQUFDRSxLQUFLRixFQUFMLEdBQVUsQ0FBQ0YsT0FBTyxDQUFQLElBQVlFLEVBQVosR0FBaUJGLE9BQU8sQ0FBUCxJQUFZQyxDQUE5QixJQUFtQ0EsQ0FBOUMsSUFBbURBLENBQWxIO0FBQ0QsR0FKZ0I7QUFBQSxDQUFqQjs7QUFNTyxJQUFNSSwwQkFBUyxVQUFDTCxNQUFEO0FBQUEsU0FDbkJBLE9BQU90RSxNQUFQLEtBQWtCLENBQW5CLEdBQXdCcUUsU0FBU0MsTUFBVCxDQUF4QixHQUEyQ0csU0FBU0gsTUFBVCxDQUR2QjtBQUFBLENBQWYiLCJmaWxlIjoidHJhbnNmb3JtZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzLmhhbGwvUHJvamVjdHMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCBzdGVwUHJvZ3Jlc3MsIHNtb290aCBhcyBjYWxjU21vb3RoaW5nIH0gZnJvbSAnLi9jYWxjJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBjb2xvciBhcyBwYXJzZUNvbG9yIH0gZnJvbSAnLi9wYXJzZXJzJztcbmltcG9ydCB7IHRpbWVTaW5jZUxhc3RGcmFtZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5cbmNvbnN0IG5vb3AgPSAodikgPT4gdjtcblxuLyoqXG4gKiBBcHBlbmQgVW5pdFxuICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYXBwZW5kXG4gKiBhcHBlbmRVbml0KCdweCcsIDIwKSAtPiAnMjBweCdcbiAqIEBwYXJhbSAge3N0cmluZ30gdW5pdClcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGVuZFVuaXQgPSAodW5pdCkgPT4gKHYpID0+IGAke3Z9JHt1bml0fWA7XG5cbi8qKlxuICogQ2xhbXAgdmFsdWUgYmV0d2VlblxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXN0cmljdCBhIGdpdmVuIHZhbHVlIGJldHdlZW4gYG1pbmAgYW5kIGBtYXhgXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pblxuICogQHBhcmFtICB7bnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGNsYW1wTWF4ID0gKG1heCkgPT4gKHYpID0+IE1hdGgubWluKHYsIG1heCk7XG5leHBvcnQgY29uc3QgY2xhbXBNaW4gPSAobWluKSA9PiAodikgPT4gTWF0aC5tYXgodiwgbWluKTtcbmV4cG9ydCBjb25zdCBjbGFtcCA9IChtaW4sIG1heCkgPT4ge1xuICBjb25zdCBfbWluID0gY2xhbXBNaW4obWluKTtcbiAgY29uc3QgX21heCA9IGNsYW1wTWF4KG1heCk7XG4gIHJldHVybiAodikgPT4gX21pbihfbWF4KHYpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb25kaXRpb25hbCA9IChjb25kaXRpb24sIGlmVHJ1ZSwgaWZGYWxzZSA9IG5vb3ApID0+ICh2LCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIGNvbmRpdGlvbih2LCBhY3Rpb24pID8gaWZUcnVlKHYsIGFjdGlvbikgOiBpZkZhbHNlKHYsIGFjdGlvbik7XG59O1xuXG4vKipcbiAqIEZsb3dcbiAqIENvbXBvc2Ugb3RoZXIgdHJhbnNmb3JtZXJzIHRvIHJ1biBsaW5lYXJpbHlcbiAqIGZsb3cobWluKDIwKSwgbWF4KDQwKSlcbiAqIEBwYXJhbSAgey4uLmZ1bmN0aW9uc30gdHJhbnNmb3JtZXJzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGZsb3cgPSAoLi4udHJhbnNmb3JtZXJzKSA9PiB7XG4gIGNvbnN0IG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICByZXR1cm4gKGFjYywgLi4uYXJncykgPT4ge1xuICAgIGxldCB2ID0gYWNjO1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG5cbi8qKlxuICogSW50ZXJwb2xhdGUgZnJvbSBzZXQgb2YgdmFsdWVzIHRvIGFub3RoZXJcbiAqIEBwYXJhbSAge0FycmF5fSBpbnB1dCBhcnJheVxuICogQHBhcmFtICB7QXJyYXl9IG91dHB1dFxuICogQHBhcmFtICB7RnVuY3Rpb259IHJhbmdlRWFzaW5nXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGludGVycG9sYXRlID0gKGlucHV0LCBvdXRwdXQsIHJhbmdlRWFzaW5nKSA9PiB7XG4gIGNvbnN0IHJhbmdlTGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICBjb25zdCBmaW5hbEluZGV4ID0gcmFuZ2VMZW5ndGggLSAxO1xuXG4gIHJldHVybiAodikgPT4ge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgbGV0IGkgPSAxO1xuXG4gICAgLy8gRmluZCBpbmRleCBvZiByYW5nZSBzdGFydFxuICAgIGZvciAoOyBpIDwgcmFuZ2VMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlucHV0W2ldID4gdiB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByb2dyZXNzSW5SYW5nZSA9IGdldFByb2dyZXNzRnJvbVZhbHVlKGlucHV0W2kgLSAxXSwgaW5wdXRbaV0sIHYpO1xuICAgIGNvbnN0IGVhc2VkUHJvZ3Jlc3MgPSAocmFuZ2VFYXNpbmcpID8gcmFuZ2VFYXNpbmdbaV0ocHJvZ3Jlc3NJblJhbmdlKSA6IHByb2dyZXNzSW5SYW5nZTtcbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3Mob3V0cHV0W2kgLSAxXSwgb3V0cHV0W2ldLCBlYXNlZFByb2dyZXNzKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdWJ0cmFjdCA9IChvcmlnaW4pID0+ICh2KSA9PiB2IC0gb3JpZ2luO1xuZXhwb3J0IGNvbnN0IGFkZCA9IChvcmlnaW4pID0+ICh2KSA9PiB2ICsgb3JpZ2luO1xuZXhwb3J0IGNvbnN0IGRpdmlkZSA9IChvcmlnaW4pID0+ICh2KSA9PiB2IC8gb3JpZ2luO1xuZXhwb3J0IGNvbnN0IG11bHRpcGx5ID0gKG9yaWdpbikgPT4gKHYpID0+IHYgKiBvcmlnaW47XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gKGFsdGVyRGlzcGxhY2VtZW50ID0gbm9vcCkgPT4gKGNvbnN0YW50LCBvcmlnaW4pID0+ICh2KSA9PiB7XG4gIGNvbnN0IGRpc3BsYWNlbWVudCA9IG9yaWdpbiAtIHY7XG4gIGNvbnN0IHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50ID0gLSBjb25zdGFudCAqICgwIC0gYWx0ZXJEaXNwbGFjZW1lbnQoTWF0aC5hYnMoZGlzcGxhY2VtZW50KSkpO1xuICByZXR1cm4gKGRpc3BsYWNlbWVudCA8PSAwKSA/IG9yaWdpbiArIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50IDogb3JpZ2luIC0gc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQ7XG59O1xuXG5leHBvcnQgY29uc3Qgc3ByaW5nID0gZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZygpO1xuZXhwb3J0IGNvbnN0IG5vbmxpbmVhclNwcmluZyA9IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcoTWF0aC5zcXJ0KTtcblxuZXhwb3J0IGNvbnN0IHdyYXAgPSAobWluLCBtYXgpID0+ICh2KSA9PiB7XG4gIGNvbnN0IHJhbmdlU2l6ZSA9IG1heCAtIG1pbjtcbiAgcmV0dXJuICgodiAtIG1pbikgJSByYW5nZVNpemUgKyByYW5nZVNpemUpICUgcmFuZ2VTaXplICsgbWluO1xufTtcblxuZXhwb3J0IGNvbnN0IHNtb290aCA9IChzdHJlbmd0aCA9IDUwKSA9PiB7XG4gIGxldCBwcmV2aW91c1ZhbHVlID0gMDtcbiAgbGV0IGhhc1Ntb290aGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuICh2KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gKGhhc1Ntb290aGVkKSA/IHByZXZpb3VzVmFsdWUgOiB2O1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gY2FsY1Ntb290aGluZyhjdXJyZW50VmFsdWUsIHByZXZpb3VzVmFsdWUsIHRpbWVTaW5jZUxhc3RGcmFtZSgpLCBzdHJlbmd0aCk7XG4gICAgcHJldmlvdXNWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgIGhhc1Ntb290aGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gbmV3VmFsdWU7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc3RlcHMgPSAoc3RlcHMsIG1pbiwgbWF4KSA9PiAodikgPT4ge1xuICBjb25zdCBwcm9ncmVzcyA9IGdldFByb2dyZXNzRnJvbVZhbHVlKG1pbiwgbWF4LCB2KTtcbiAgcmV0dXJuIHN0ZXBQcm9ncmVzcyhzdGVwcywgcHJvZ3Jlc3MpO1xufTtcblxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybUNoaWxkVmFsdWVzID0gKGNoaWxkVHJhbnNmb3JtZXJzKSA9PiB7XG4gIGNvbnN0IG11dGFibGVTdGF0ZSA9IHt9O1xuICByZXR1cm4gKHYpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdikge1xuICAgICAgY29uc3QgY2hpbGRUcmFuc2Zvcm1lciA9IGNoaWxkVHJhbnNmb3JtZXJzW2tleV07XG4gICAgICBpZiAoY2hpbGRUcmFuc2Zvcm1lcikge1xuICAgICAgICBtdXRhYmxlU3RhdGVba2V5XSA9IGNoaWxkVHJhbnNmb3JtZXIodltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbXV0YWJsZVN0YXRlO1xuICB9O1xufTtcblxuLy8gVW5pdCB0cmFuc2Zvcm1lcnNcbmV4cG9ydCBjb25zdCBwZXJjZW50ID0gYXBwZW5kVW5pdCgnJScpO1xuZXhwb3J0IGNvbnN0IGRlZ3JlZXMgPSBhcHBlbmRVbml0KCdkZWcnKTtcbmV4cG9ydCBjb25zdCBweCA9IGFwcGVuZFVuaXQoJ3B4Jyk7XG5cbmV4cG9ydCBjb25zdCByZ2JVbml0ID0gZmxvdyhcbiAgY2xhbXAoMCwgMjU1KSxcbiAgTWF0aC5yb3VuZFxuKTtcblxuY29uc3QgcmdiYVRlbXBsYXRlID0gKHsgcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEgPSAxIH0pID0+IFxuICBgcmdiYSgke3JlZH0sICR7Z3JlZW59LCAke2JsdWV9LCAke2FscGhhfSlgO1xuXG5leHBvcnQgY29uc3QgcmdiYSA9IGZsb3coXG4gIHRyYW5zZm9ybUNoaWxkVmFsdWVzKHtcbiAgICByZWQ6IHJnYlVuaXQsXG4gICAgZ3JlZW46IHJnYlVuaXQsXG4gICAgYmx1ZTogcmdiVW5pdCxcbiAgICBhbHBoYVxuICB9KSxcbiAgcmdiYVRlbXBsYXRlXG4pO1xuXG5jb25zdCBoc2xhVGVtcGxhdGUgPSAoeyBodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYWxwaGEgPSAxIH0pID0+IFxuICBgaHNsYSgke2h1ZX0sICR7c2F0dXJhdGlvbn0sICR7bGlnaHRuZXNzfSwgJHthbHBoYX0pYDtcblxuZXhwb3J0IGNvbnN0IGhzbGEgPSBmbG93KFxuICB0cmFuc2Zvcm1DaGlsZFZhbHVlcyh7XG4gICAgaHVlOiBwYXJzZUZsb2F0LFxuICAgIHNhdHVyYXRpb246IHBlcmNlbnQsXG4gICAgbGlnaHRuZXNzOiBwZXJjZW50LFxuICAgIGFscGhhXG4gIH0pLFxuICBoc2xhVGVtcGxhdGVcbik7XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9ICh2KSA9PiB7XG4gIGlmICh2Lmhhc093blByb3BlcnR5KCdyZWQnKSkge1xuICAgIHJldHVybiByZ2JhKHYpO1xuICB9IGVsc2UgaWYgKHYuaGFzT3duUHJvcGVydHkoJ2h1ZScpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cbiAgcmV0dXJuIHY7XG59O1xuXG5leHBvcnQgY29uc3QgYWxwaGEgPSBjbGFtcCgwLCAxKTtcblxuY29uc3QgYmxlbmQgPSAoZnJvbSwgdG8sIHYpID0+IHtcbiAgY29uc3QgZnJvbUV4cG8gPSBmcm9tICogZnJvbTtcbiAgY29uc3QgdG9FeHBvID0gdG8gKiB0bztcbiAgcmV0dXJuIE1hdGguc3FydCh2ICogKHRvRXhwbyAtIGZyb21FeHBvKSArIGZyb21FeHBvKTtcbn07XG4vLyBodHRwOi8vY29kZXBlbi5pby9vc3VibGFrZS9wZW4veEdWVmFOXG5leHBvcnQgY29uc3QgYmxlbmRDb2xvciA9IChmcm9tLCB0bykgPT4ge1xuICBjb25zdCBmcm9tQ29sb3IgPSBpc1N0cmluZyhmcm9tKSA/IHBhcnNlQ29sb3IoZnJvbSkgOiBmcm9tO1xuICBjb25zdCB0b0NvbG9yID0gaXNTdHJpbmcodG8pID8gcGFyc2VDb2xvcih0byk6IHRvO1xuXG4gIGNvbnN0IGJsZW5kZWQgPSB7IC4uLmZyb21Db2xvciB9O1xuXG4gIHJldHVybiAodikgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiBibGVuZGVkKSB7XG4gICAgICBibGVuZGVkW2tleV0gPSBibGVuZChmcm9tQ29sb3Jba2V5XSwgdG9Db2xvcltrZXldLCB2KTtcbiAgICB9XG4gICAgYmxlbmRlZC5yZWQgPSBibGVuZChmcm9tQ29sb3IucmVkLCB0b0NvbG9yLnJlZCwgdik7XG4gICAgYmxlbmRlZC5ncmVlbiA9IGJsZW5kKGZyb21Db2xvci5ncmVlbiwgdG9Db2xvci5ncmVlbiwgdik7XG4gICAgYmxlbmRlZC5ibHVlID0gYmxlbmQoZnJvbUNvbG9yLmJsdWUsIHRvQ29sb3IuYmx1ZSwgdik7XG4gICAgYmxlbmRlZC5hbHBoYSA9IGdldFZhbHVlRnJvbVByb2dyZXNzKGZyb21Db2xvci5hbHBoYSwgdG9Db2xvci5hbHBoYSwgdik7XG4gICAgcmV0dXJuIGJsZW5kZWQ7XG4gIH07XG59O1xuXG4vLyBCZXppZXIgcmVzb2x2ZXJcbi8vIFJlZmFjdG9yZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vaHVnaHNrL2Jlemllci9ibG9iL21hc3Rlci9pbmRleC5qc1xuLyoqXG4jIyBUaGUgTUlUIExpY2Vuc2UgKE1JVCkgIyNcblxuQ29weXJpZ2h0IChjKSAyMDEzIEh1Z2ggS2VubmVkeVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG4gKi9cbmNvbnN0IHJlc29sdmUzID0gKHBvaW50cykgPT4gKHQpID0+IHtcbiAgY29uc3QgdXQgPSAxIC0gdDtcbiAgcmV0dXJuIChwb2ludHNbMF0gKiB1dCArIHBvaW50c1sxXSAqIHQpICogdXQgKyAocG9pbnRzWzFdICogdXQgKyBwb2ludHNbMl0gKiB0KSAqIHQ7XG59O1xuXG5jb25zdCByZXNvbHZlNCA9IChwb2ludHMpID0+ICh0KSA9PiB7XG4gIGNvbnN0IHV0ID0gMSAtIHQ7XG4gIGNvbnN0IGExID0gcG9pbnRzWzFdICogdXQgKyBwb2ludHNbMl0gKiB0O1xuICByZXR1cm4gKChwb2ludHNbMF0gKiB1dCArIHBvaW50c1sxXSAqIHQpICogdXQgKyBhMSAqIHQpICogdXQgKyAoYTEgKiB1dCArIChwb2ludHNbMl0gKiB1dCArIHBvaW50c1szXSAqIHQpICogdCkgKiB0O1xufTtcblxuZXhwb3J0IGNvbnN0IGJlemllciA9IChwb2ludHMpID0+XG4gIChwb2ludHMubGVuZ3RoID09PSAzKSA/IHJlc29sdmUzKHBvaW50cykgOiByZXNvbHZlNChwb2ludHMpO1xuIl19

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.color = exports.hsla = exports.hex = exports.rgba = exports.rgbUnit = exports.scale = exports.px = exports.percent = exports.degrees = exports.alpha = exports.number = undefined;
	
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
	
	var _parsers = __webpack_require__(26);
	
	var _utils = __webpack_require__(25);
	
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdmFsdWUtdHlwZXMuanMiXSwibmFtZXMiOlsibnVtYmVyIiwidGVzdCIsInBhcnNlIiwicGFyc2VGbG9hdCIsImFscGhhIiwidHJhbnNmb3JtIiwiZGVncmVlcyIsInBlcmNlbnQiLCJweCIsInNjYWxlIiwiZGVmYXVsdCIsInJnYlVuaXQiLCJyZ2JhIiwiaGV4IiwiaHNsYSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7OztrUUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7O0FBVUE7O0FBTUE7O0FBU08sSUFBTUEsMEJBQVM7QUFDcEJDLG9CQURvQjtBQUVwQkMsU0FBT0M7QUFGYSxDQUFmOztBQUtQO0FBQ08sSUFBTUMscUNBQ1JKLE1BRFE7QUFFWEs7QUFGVyxFQUFOOztBQUtBLElBQU1DLDRCQUFVLDJCQUFlLEtBQWYsd0JBQWhCO0FBQ0EsSUFBTUMsNEJBQVUsMkJBQWUsR0FBZix3QkFBaEI7QUFDQSxJQUFNQyxrQkFBSywyQkFBZSxJQUFmLG1CQUFYOztBQUVBLElBQU1DLHFDQUNSVCxNQURRO0FBRVhVLFdBQVM7QUFGRSxFQUFOOztBQUtBLElBQU1DLHlDQUNSWCxNQURRO0FBRVhLO0FBRlcsRUFBTjs7QUFLQSxJQUFNTyxzQkFBTztBQUNsQlgsb0JBRGtCO0FBRWxCQyxzQkFGa0I7QUFHbEJHO0FBSGtCLENBQWI7O0FBTUEsSUFBTVEsaUNBQ1JELElBRFE7QUFFWFgsb0JBRlc7QUFHWEM7QUFIVyxFQUFOOztBQU1BLElBQU1ZLHNCQUFPO0FBQ2xCYixvQkFEa0I7QUFFbEJDLHNCQUZrQjtBQUdsQkc7QUFIa0IsQ0FBYjs7QUFNQSxJQUFNVSx3QkFBUTtBQUNuQmIsdUJBRG1CO0FBRW5CRCxzQkFGbUI7QUFHbkJJO0FBSG1CLENBQWQiLCJmaWxlIjoidmFsdWUtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMuaGFsbC9Qcm9qZWN0cy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFZhbHVlIHR5cGVzXG4gKlxuICogYWxwaGFcbiAqIGRlZ3JlZXNcbiAqIGhleFxuICogaHNsYVxuICogcGVyY2VudFxuICogcHhcbiAqIHJnYlVuaXRcbiAqIHJnYlxuICogc2NhbGVcbiAqL1xuaW1wb3J0IHtcbiAgcmdiVW5pdCBhcyB0cmFuc2Zvcm1SR0JVbml0LFxuICByZ2JhIGFzIHRyYW5zZm9ybVJnYmEsXG4gIGFscGhhIGFzIHRyYW5zZm9ybUFscGhhLFxuICBoc2xhIGFzIHRyYW5zZm9ybUhzbGEsXG4gIGNvbG9yIGFzIHRyYW5zZm9ybUNvbG9yLFxuICBweCBhcyB0cmFuc2Zvcm1QeCxcbiAgcGVyY2VudCBhcyB0cmFuc2Zvcm1QZXJjZW50LFxuICBkZWdyZWVzIGFzIHRyYW5zZm9ybURlZ3JlZXNcbn0gZnJvbSAnLi90cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHtcbiAgaGV4IGFzIHBhcnNlSGV4LFxuICByZ2JhIGFzIHBhcnNlUmdiYSxcbiAgaHNsYSBhcyBwYXJzZUhzbGEsXG4gIGNvbG9yIGFzIHBhcnNlQ29sb3Jcbn0gZnJvbSAnLi9wYXJzZXJzJztcbmltcG9ydCB7XG4gIGNyZWF0ZVVuaXRUeXBlLFxuICBpc051bSxcbiAgaXNSZ2IsXG4gIGlzSHNsLFxuICBpc0hleCxcbiAgaXNDb2xvclxufSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IG51bWJlciA9IHtcbiAgdGVzdDogaXNOdW0sXG4gIHBhcnNlOiBwYXJzZUZsb2F0XG59O1xuXG4vLyBWYWx1ZSB0eXBlc1xuZXhwb3J0IGNvbnN0IGFscGhhID0ge1xuICAuLi5udW1iZXIsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtQWxwaGFcbn07XG5cbmV4cG9ydCBjb25zdCBkZWdyZWVzID0gY3JlYXRlVW5pdFR5cGUoJ2RlZycsIHRyYW5zZm9ybURlZ3JlZXMpO1xuZXhwb3J0IGNvbnN0IHBlcmNlbnQgPSBjcmVhdGVVbml0VHlwZSgnJScsIHRyYW5zZm9ybVBlcmNlbnQpO1xuZXhwb3J0IGNvbnN0IHB4ID0gY3JlYXRlVW5pdFR5cGUoJ3B4JywgdHJhbnNmb3JtUHgpO1xuXG5leHBvcnQgY29uc3Qgc2NhbGUgPSB7XG4gIC4uLm51bWJlcixcbiAgZGVmYXVsdDogMVxufTtcblxuZXhwb3J0IGNvbnN0IHJnYlVuaXQgPSB7XG4gIC4uLm51bWJlcixcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1SR0JVbml0XG59O1xuXG5leHBvcnQgY29uc3QgcmdiYSA9IHtcbiAgdGVzdDogaXNSZ2IsXG4gIHBhcnNlOiBwYXJzZVJnYmEsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtUmdiYVxufTtcblxuZXhwb3J0IGNvbnN0IGhleCA9IHtcbiAgLi4ucmdiYSxcbiAgdGVzdDogaXNIZXgsXG4gIHBhcnNlOiBwYXJzZUhleFxufTtcblxuZXhwb3J0IGNvbnN0IGhzbGEgPSB7XG4gIHRlc3Q6IGlzSHNsLFxuICBwYXJzZTogcGFyc2VIc2xhLFxuICB0cmFuc2Zvcm06IHRyYW5zZm9ybUhzbGFcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9IHtcbiAgcGFyc2U6IHBhcnNlQ29sb3IsXG4gIHRlc3Q6IGlzQ29sb3IsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtQ29sb3Jcbn07XG4iXX0=

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _tween = __webpack_require__(16);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	var _easing = __webpack_require__(3);
	
	var _calc = __webpack_require__(2);
	
	var _transformers = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var clampProgress = (0, _transformers.clamp)(0, 1);
	
	function calcValueAtTime(from, to, duration, elapsed, ease) {
	  var progressAtTime = ease(clampProgress((0, _calc.getProgressFromValue)(0, duration, elapsed)));
	  return (0, _calc.getValueFromProgress)(from, to, progressAtTime);
	}
	
	exports.default = function (_ref) {
	  var from = _ref.from,
	      to = _ref.to,
	      onUpdate = _ref.onUpdate,
	      _ref$accuracy = _ref.accuracy,
	      accuracy = _ref$accuracy === undefined ? 60 : _ref$accuracy,
	      props = _objectWithoutProperties(_ref, ['from', 'to', 'onUpdate', 'accuracy']);
	
	  // Get tween properties
	  var a = from;
	  var b = to;
	  var aCurrent = a.get();
	  var aDuration = a.getProp('duration');
	  var bDuration = b.getProp('duration');
	  var aEase = a.getProp('ease');
	  var bEase = b.getProp('ease');
	  var aFrom = a.getProp('from');
	  var bFrom = b.getProp('from');
	  var aTo = a.getProp('to');
	  var bTo = b.getProp('to');
	
	  // Analyse tweens
	  var overlapDuration = Math.min(aDuration - a.getElapsed(), bDuration);
	  var bValueAtTweenOverlapComplete = calcValueAtTime(bFrom, bTo, bDuration, overlapDuration, bEase);
	  var bStartsHigherThanA = bFrom > aCurrent;
	  var bEndsHigherThanA = bValueAtTweenOverlapComplete > aTo;
	
	  // Blend points are defined as [t = time, v = valueAtTime]
	  // P1
	  // The start of the tween blend
	  var P1 = aCurrent;
	  var blendPoints = [P1];
	
	  // Find P2
	  // The possible intersection point between the two tweens
	  var tweensIntersect = bStartsHigherThanA !== bEndsHigherThanA;
	  if (tweensIntersect) {
	    var timestep = overlapDuration / accuracy;
	
	    for (var i = 0; i < accuracy; i++) {
	      var runningTime = i * timestep;
	
	      var aValueAtTime = calcValueAtTime(aFrom, aTo, aDuration, a.elapsed + runningTime, aEase);
	      var bValueAtTime = calcValueAtTime(bFrom, bTo, bDuration, b.elapsed + runningTime, bEase);
	
	      var hasIntersected = bStartsHigherThanA && aValueAtTime > bValueAtTime || !bStartsHigherThanA && aValueAtTime < bValueAtTime;
	
	      if (hasIntersected) {
	        var P2 = bValueAtTime;
	        blendPoints.push(P2);
	        break;
	      }
	    }
	  }
	
	  // P3
	  // The points the two tweens stop overlapping
	  var P3 = bValueAtTweenOverlapComplete;
	  blendPoints.push(P3);
	
	  // Push the end state of b tween as final control point
	  var P4 = bTo;
	  blendPoints.push(P4);
	
	  return (0, _tween2.default)(_extends({}, props, {
	    duration: bDuration,
	    ease: _easing.linear,
	    onUpdate: (0, _transformers.flow)((0, _transformers.bezier)(blendPoints), onUpdate)
	  }));
	};
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyJdLCJuYW1lcyI6WyJjbGFtcFByb2dyZXNzIiwiY2FsY1ZhbHVlQXRUaW1lIiwiZnJvbSIsInRvIiwiZHVyYXRpb24iLCJlbGFwc2VkIiwiZWFzZSIsInByb2dyZXNzQXRUaW1lIiwib25VcGRhdGUiLCJhY2N1cmFjeSIsInByb3BzIiwiYSIsImIiLCJhQ3VycmVudCIsImdldCIsImFEdXJhdGlvbiIsImdldFByb3AiLCJiRHVyYXRpb24iLCJhRWFzZSIsImJFYXNlIiwiYUZyb20iLCJiRnJvbSIsImFUbyIsImJUbyIsIm92ZXJsYXBEdXJhdGlvbiIsIk1hdGgiLCJtaW4iLCJnZXRFbGFwc2VkIiwiYlZhbHVlQXRUd2Vlbk92ZXJsYXBDb21wbGV0ZSIsImJTdGFydHNIaWdoZXJUaGFuQSIsImJFbmRzSGlnaGVyVGhhbkEiLCJQMSIsImJsZW5kUG9pbnRzIiwidHdlZW5zSW50ZXJzZWN0IiwidGltZXN0ZXAiLCJpIiwicnVubmluZ1RpbWUiLCJhVmFsdWVBdFRpbWUiLCJiVmFsdWVBdFRpbWUiLCJoYXNJbnRlcnNlY3RlZCIsIlAyIiwicHVzaCIsIlAzIiwiUDQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGdCQUFnQix5QkFBTSxDQUFOLEVBQVMsQ0FBVCxDQUF0Qjs7QUFFQSxTQUFTQyxlQUFULENBQXlCQyxJQUF6QixFQUErQkMsRUFBL0IsRUFBbUNDLFFBQW5DLEVBQTZDQyxPQUE3QyxFQUFzREMsSUFBdEQsRUFBNEQ7QUFDMUQsTUFBTUMsaUJBQWlCRCxLQUFLTixjQUFjLGdDQUFxQixDQUFyQixFQUF3QkksUUFBeEIsRUFBa0NDLE9BQWxDLENBQWQsQ0FBTCxDQUF2QjtBQUNBLFNBQU8sZ0NBQXFCSCxJQUFyQixFQUEyQkMsRUFBM0IsRUFBK0JJLGNBQS9CLENBQVA7QUFDRDs7a0JBRWMsZ0JBQXFEO0FBQUEsTUFBbERMLElBQWtELFFBQWxEQSxJQUFrRDtBQUFBLE1BQTVDQyxFQUE0QyxRQUE1Q0EsRUFBNEM7QUFBQSxNQUF4Q0ssUUFBd0MsUUFBeENBLFFBQXdDO0FBQUEsMkJBQTlCQyxRQUE4QjtBQUFBLE1BQTlCQSxRQUE4QixpQ0FBbkIsRUFBbUI7QUFBQSxNQUFaQyxLQUFZOztBQUNsRTtBQUNBLE1BQU1DLElBQUlULElBQVY7QUFDQSxNQUFNVSxJQUFJVCxFQUFWO0FBQ0EsTUFBTVUsV0FBV0YsRUFBRUcsR0FBRixFQUFqQjtBQUNBLE1BQU1DLFlBQVlKLEVBQUVLLE9BQUYsQ0FBVSxVQUFWLENBQWxCO0FBQ0EsTUFBTUMsWUFBWUwsRUFBRUksT0FBRixDQUFVLFVBQVYsQ0FBbEI7QUFDQSxNQUFNRSxRQUFRUCxFQUFFSyxPQUFGLENBQVUsTUFBVixDQUFkO0FBQ0EsTUFBTUcsUUFBUVAsRUFBRUksT0FBRixDQUFVLE1BQVYsQ0FBZDtBQUNBLE1BQU1JLFFBQVFULEVBQUVLLE9BQUYsQ0FBVSxNQUFWLENBQWQ7QUFDQSxNQUFNSyxRQUFRVCxFQUFFSSxPQUFGLENBQVUsTUFBVixDQUFkO0FBQ0EsTUFBTU0sTUFBTVgsRUFBRUssT0FBRixDQUFVLElBQVYsQ0FBWjtBQUNBLE1BQU1PLE1BQU1YLEVBQUVJLE9BQUYsQ0FBVSxJQUFWLENBQVo7O0FBRUE7QUFDQSxNQUFNUSxrQkFBa0JDLEtBQUtDLEdBQUwsQ0FBU1gsWUFBWUosRUFBRWdCLFVBQUYsRUFBckIsRUFBcUNWLFNBQXJDLENBQXhCO0FBQ0EsTUFBTVcsK0JBQStCM0IsZ0JBQWdCb0IsS0FBaEIsRUFBdUJFLEdBQXZCLEVBQTRCTixTQUE1QixFQUF1Q08sZUFBdkMsRUFBd0RMLEtBQXhELENBQXJDO0FBQ0EsTUFBTVUscUJBQXNCUixRQUFRUixRQUFwQztBQUNBLE1BQU1pQixtQkFBb0JGLCtCQUErQk4sR0FBekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTVMsS0FBS2xCLFFBQVg7QUFDQSxNQUFNbUIsY0FBYyxDQUFDRCxFQUFELENBQXBCOztBQUVBO0FBQ0E7QUFDQSxNQUFNRSxrQkFBbUJKLHVCQUF1QkMsZ0JBQWhEO0FBQ0EsTUFBSUcsZUFBSixFQUFxQjtBQUNuQixRQUFJQyxXQUFXVixrQkFBa0JmLFFBQWpDOztBQUVBLFNBQUssSUFBSTBCLElBQUksQ0FBYixFQUFnQkEsSUFBSTFCLFFBQXBCLEVBQThCMEIsR0FBOUIsRUFBbUM7QUFDakMsVUFBTUMsY0FBY0QsSUFBSUQsUUFBeEI7O0FBRUEsVUFBTUcsZUFBZXBDLGdCQUFnQm1CLEtBQWhCLEVBQXVCRSxHQUF2QixFQUE0QlAsU0FBNUIsRUFBdUNKLEVBQUVOLE9BQUYsR0FBWStCLFdBQW5ELEVBQWdFbEIsS0FBaEUsQ0FBckI7QUFDQSxVQUFNb0IsZUFBZXJDLGdCQUFnQm9CLEtBQWhCLEVBQXVCRSxHQUF2QixFQUE0Qk4sU0FBNUIsRUFBdUNMLEVBQUVQLE9BQUYsR0FBWStCLFdBQW5ELEVBQWdFakIsS0FBaEUsQ0FBckI7O0FBRUEsVUFBTW9CLGlCQUNIVixzQkFBc0JRLGVBQWVDLFlBQXRDLElBQ0MsQ0FBQ1Qsa0JBQUQsSUFBdUJRLGVBQWVDLFlBRnpDOztBQUtBLFVBQUlDLGNBQUosRUFBb0I7QUFDbEIsWUFBTUMsS0FBS0YsWUFBWDtBQUNBTixvQkFBWVMsSUFBWixDQUFpQkQsRUFBakI7QUFDQTtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDtBQUNBO0FBQ0EsTUFBTUUsS0FBS2QsNEJBQVg7QUFDQUksY0FBWVMsSUFBWixDQUFpQkMsRUFBakI7O0FBRUE7QUFDQSxNQUFNQyxLQUFLcEIsR0FBWDtBQUNBUyxjQUFZUyxJQUFaLENBQWlCRSxFQUFqQjs7QUFFQSxTQUFPLGtDQUNGakMsS0FERTtBQUVMTixjQUFVYSxTQUZMO0FBR0xYLHdCQUhLO0FBSUxFLGNBQVUsd0JBQ1IsMEJBQU93QixXQUFQLENBRFEsRUFFUnhCLFFBRlE7QUFKTCxLQUFQO0FBU0QsQyIsImZpbGUiOiJibGVuZC10d2VlbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMuaGFsbC9Qcm9qZWN0cy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHdlZW4gZnJvbSAnLi90d2Vlbic7XG5pbXBvcnQgeyBsaW5lYXIgfSBmcm9tICcuLi9pbmMvZWFzaW5nJztcbmltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGZsb3csIGNsYW1wLCBiZXppZXIgfSBmcm9tICcuLi9pbmMvdHJhbnNmb3JtZXJzJztcblxuY29uc3QgY2xhbXBQcm9ncmVzcyA9IGNsYW1wKDAsIDEpO1xuXG5mdW5jdGlvbiBjYWxjVmFsdWVBdFRpbWUoZnJvbSwgdG8sIGR1cmF0aW9uLCBlbGFwc2VkLCBlYXNlKSB7XG4gIGNvbnN0IHByb2dyZXNzQXRUaW1lID0gZWFzZShjbGFtcFByb2dyZXNzKGdldFByb2dyZXNzRnJvbVZhbHVlKDAsIGR1cmF0aW9uLCBlbGFwc2VkKSkpO1xuICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZnJvbSwgdG8sIHByb2dyZXNzQXRUaW1lKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgZnJvbSwgdG8sIG9uVXBkYXRlLCBhY2N1cmFjeSA9IDYwLCAuLi5wcm9wcyB9KSA9PiB7XG4gIC8vIEdldCB0d2VlbiBwcm9wZXJ0aWVzXG4gIGNvbnN0IGEgPSBmcm9tO1xuICBjb25zdCBiID0gdG87XG4gIGNvbnN0IGFDdXJyZW50ID0gYS5nZXQoKTtcbiAgY29uc3QgYUR1cmF0aW9uID0gYS5nZXRQcm9wKCdkdXJhdGlvbicpO1xuICBjb25zdCBiRHVyYXRpb24gPSBiLmdldFByb3AoJ2R1cmF0aW9uJyk7XG4gIGNvbnN0IGFFYXNlID0gYS5nZXRQcm9wKCdlYXNlJyk7XG4gIGNvbnN0IGJFYXNlID0gYi5nZXRQcm9wKCdlYXNlJyk7XG4gIGNvbnN0IGFGcm9tID0gYS5nZXRQcm9wKCdmcm9tJyk7XG4gIGNvbnN0IGJGcm9tID0gYi5nZXRQcm9wKCdmcm9tJyk7XG4gIGNvbnN0IGFUbyA9IGEuZ2V0UHJvcCgndG8nKTtcbiAgY29uc3QgYlRvID0gYi5nZXRQcm9wKCd0bycpO1xuXG4gIC8vIEFuYWx5c2UgdHdlZW5zXG4gIGNvbnN0IG92ZXJsYXBEdXJhdGlvbiA9IE1hdGgubWluKGFEdXJhdGlvbiAtIGEuZ2V0RWxhcHNlZCgpLCBiRHVyYXRpb24pO1xuICBjb25zdCBiVmFsdWVBdFR3ZWVuT3ZlcmxhcENvbXBsZXRlID0gY2FsY1ZhbHVlQXRUaW1lKGJGcm9tLCBiVG8sIGJEdXJhdGlvbiwgb3ZlcmxhcER1cmF0aW9uLCBiRWFzZSk7XG4gIGNvbnN0IGJTdGFydHNIaWdoZXJUaGFuQSA9IChiRnJvbSA+IGFDdXJyZW50KTtcbiAgY29uc3QgYkVuZHNIaWdoZXJUaGFuQSA9IChiVmFsdWVBdFR3ZWVuT3ZlcmxhcENvbXBsZXRlID4gYVRvKTtcblxuICAvLyBCbGVuZCBwb2ludHMgYXJlIGRlZmluZWQgYXMgW3QgPSB0aW1lLCB2ID0gdmFsdWVBdFRpbWVdXG4gIC8vIFAxXG4gIC8vIFRoZSBzdGFydCBvZiB0aGUgdHdlZW4gYmxlbmRcbiAgY29uc3QgUDEgPSBhQ3VycmVudDtcbiAgY29uc3QgYmxlbmRQb2ludHMgPSBbUDFdO1xuXG4gIC8vIEZpbmQgUDJcbiAgLy8gVGhlIHBvc3NpYmxlIGludGVyc2VjdGlvbiBwb2ludCBiZXR3ZWVuIHRoZSB0d28gdHdlZW5zXG4gIGNvbnN0IHR3ZWVuc0ludGVyc2VjdCA9IChiU3RhcnRzSGlnaGVyVGhhbkEgIT09IGJFbmRzSGlnaGVyVGhhbkEpO1xuICBpZiAodHdlZW5zSW50ZXJzZWN0KSB7XG4gICAgbGV0IHRpbWVzdGVwID0gb3ZlcmxhcER1cmF0aW9uIC8gYWNjdXJhY3k7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY3VyYWN5OyBpKyspIHtcbiAgICAgIGNvbnN0IHJ1bm5pbmdUaW1lID0gaSAqIHRpbWVzdGVwO1xuXG4gICAgICBjb25zdCBhVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYUZyb20sIGFUbywgYUR1cmF0aW9uLCBhLmVsYXBzZWQgKyBydW5uaW5nVGltZSwgYUVhc2UpO1xuICAgICAgY29uc3QgYlZhbHVlQXRUaW1lID0gY2FsY1ZhbHVlQXRUaW1lKGJGcm9tLCBiVG8sIGJEdXJhdGlvbiwgYi5lbGFwc2VkICsgcnVubmluZ1RpbWUsIGJFYXNlKTtcblxuICAgICAgY29uc3QgaGFzSW50ZXJzZWN0ZWQgPSAoXG4gICAgICAgIChiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lID4gYlZhbHVlQXRUaW1lKSB8fFxuICAgICAgICAoIWJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPCBiVmFsdWVBdFRpbWUpXG4gICAgICApO1xuXG4gICAgICBpZiAoaGFzSW50ZXJzZWN0ZWQpIHtcbiAgICAgICAgY29uc3QgUDIgPSBiVmFsdWVBdFRpbWU7XG4gICAgICAgIGJsZW5kUG9pbnRzLnB1c2goUDIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQM1xuICAvLyBUaGUgcG9pbnRzIHRoZSB0d28gdHdlZW5zIHN0b3Agb3ZlcmxhcHBpbmdcbiAgY29uc3QgUDMgPSBiVmFsdWVBdFR3ZWVuT3ZlcmxhcENvbXBsZXRlO1xuICBibGVuZFBvaW50cy5wdXNoKFAzKTtcblxuICAvLyBQdXNoIHRoZSBlbmQgc3RhdGUgb2YgYiB0d2VlbiBhcyBmaW5hbCBjb250cm9sIHBvaW50XG4gIGNvbnN0IFA0ID0gYlRvO1xuICBibGVuZFBvaW50cy5wdXNoKFA0KTtcblxuICByZXR1cm4gdHdlZW4oe1xuICAgIC4uLnByb3BzLFxuICAgIGR1cmF0aW9uOiBiRHVyYXRpb24sXG4gICAgZWFzZTogbGluZWFyLFxuICAgIG9uVXBkYXRlOiBmbG93KFxuICAgICAgYmV6aWVyKGJsZW5kUG9pbnRzKSxcbiAgICAgIG9uVXBkYXRlXG4gICAgKVxuICB9KTtcbn07XG4iXX0=

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(20);
	
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
	    } else {
	      this.complete();
	    }
	  };
	
	  Chain.prototype.playCurrent = function playCurrent() {
	    var _props2 = this.props,
	        i = _props2.i,
	        order = _props2.order;
	
	    order[i].props._onComplete = this.playNext;
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
	
	exports.default = function (order, onComplete) {
	  return new Chain({ order: order, onComplete: onComplete });
	};
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NoYWluLmpzIl0sIm5hbWVzIjpbIkNoYWluIiwicHJvcHMiLCJwbGF5TmV4dCIsImJpbmQiLCJvblN0YXJ0IiwiaSIsInBsYXlDdXJyZW50Iiwib3JkZXIiLCJsZW5ndGgiLCJjb21wbGV0ZSIsIl9vbkNvbXBsZXRlIiwic3RhcnQiLCJvblN0b3AiLCJzdG9wIiwib25Db21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsbUJBQU1BLEtBQU4sQ0FEaUI7O0FBRWpCLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLE9BQWhCO0FBRmlCO0FBR2xCOztrQkFFREMsTyxzQkFBVTtBQUNSLFNBQUtILEtBQUwsQ0FBV0ksQ0FBWCxHQUFlLENBQWY7QUFDQSxTQUFLQyxXQUFMO0FBQ0QsRzs7a0JBRURKLFEsdUJBQVc7QUFBQSxpQkFDWSxLQUFLRCxLQURqQjtBQUFBLFFBQ0RJLENBREMsVUFDREEsQ0FEQztBQUFBLFFBQ0VFLEtBREYsVUFDRUEsS0FERjs7QUFFVCxRQUFJRixJQUFJRSxNQUFNQyxNQUFOLEdBQWUsQ0FBdkIsRUFBMEI7QUFDeEIsV0FBS1AsS0FBTCxDQUFXSSxDQUFYO0FBQ0EsV0FBS0MsV0FBTDtBQUNELEtBSEQsTUFHTztBQUNMLFdBQUtHLFFBQUw7QUFDRDtBQUNGLEc7O2tCQUVESCxXLDBCQUFjO0FBQUEsa0JBQ1MsS0FBS0wsS0FEZDtBQUFBLFFBQ0pJLENBREksV0FDSkEsQ0FESTtBQUFBLFFBQ0RFLEtBREMsV0FDREEsS0FEQzs7QUFFWkEsVUFBTUYsQ0FBTixFQUFTSixLQUFULENBQWVTLFdBQWYsR0FBNkIsS0FBS1IsUUFBbEM7QUFDQUssVUFBTUYsQ0FBTixFQUFTTSxLQUFUO0FBQ0QsRzs7a0JBRURDLE0scUJBQVM7QUFBQSxrQkFDYyxLQUFLWCxLQURuQjtBQUFBLFFBQ0NJLENBREQsV0FDQ0EsQ0FERDtBQUFBLFFBQ0lFLEtBREosV0FDSUEsS0FESjs7QUFFUEEsVUFBTUYsQ0FBTixFQUFTUSxJQUFUO0FBQ0QsRzs7Ozs7a0JBR1ksVUFBQ04sS0FBRCxFQUFRTyxVQUFSO0FBQUEsU0FBdUIsSUFBSWQsS0FBSixDQUFVLEVBQUVPLFlBQUYsRUFBU08sc0JBQVQsRUFBVixDQUF2QjtBQUFBLEMiLCJmaWxlIjoiY2hhaW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMuaGFsbC9Qcm9qZWN0cy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcblxuY2xhc3MgQ2hhaW4gZXh0ZW5kcyBBY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnBsYXlOZXh0ID0gdGhpcy5wbGF5TmV4dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICB0aGlzLnByb3BzLmkgPSAwO1xuICAgIHRoaXMucGxheUN1cnJlbnQoKTtcbiAgfVxuXG4gIHBsYXlOZXh0KCkge1xuICAgIGNvbnN0IHsgaSwgb3JkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGkgPCBvcmRlci5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnByb3BzLmkrKztcbiAgICAgIHRoaXMucGxheUN1cnJlbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHBsYXlDdXJyZW50KCkge1xuICAgIGNvbnN0IHsgaSwgb3JkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgb3JkZXJbaV0ucHJvcHMuX29uQ29tcGxldGUgPSB0aGlzLnBsYXlOZXh0O1xuICAgIG9yZGVyW2ldLnN0YXJ0KCk7XG4gIH1cblxuICBvblN0b3AoKSB7XG4gICAgY29uc3QgeyBpLCBvcmRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBvcmRlcltpXS5zdG9wKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKG9yZGVyLCBvbkNvbXBsZXRlKSA9PiBuZXcgQ2hhaW4oeyBvcmRlciwgb25Db21wbGV0ZSB9KTtcbiJdfQ==

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _tween = __webpack_require__(16);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	var _transformers = __webpack_require__(4);
	
	var _valueTypes = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var noop = function () {};
	
	exports.default = function (props) {
	  return (0, _tween2.default)(_extends({}, props, {
	    from: 0,
	    to: 1,
	    onUpdate: (0, _transformers.flow)((0, _transformers.blendColor)(props.from, props.to), _valueTypes.color.transform, props.onUpdate || noop)
	  }));
	};
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbG9yLXR3ZWVuLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJwcm9wcyIsImZyb20iLCJ0byIsIm9uVXBkYXRlIiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsT0FBTyxZQUFNLENBQUUsQ0FBckI7O2tCQUVlLFVBQUNDLEtBQUQsRUFBVztBQUN4QixTQUFPLGtDQUNGQSxLQURFO0FBRUxDLFVBQU0sQ0FGRDtBQUdMQyxRQUFJLENBSEM7QUFJTEMsY0FBVSx3QkFDUiw4QkFBV0gsTUFBTUMsSUFBakIsRUFBdUJELE1BQU1FLEVBQTdCLENBRFEsRUFFUixrQkFBTUUsU0FGRSxFQUdSSixNQUFNRyxRQUFOLElBQWtCSixJQUhWO0FBSkwsS0FBUDtBQVVELEMiLCJmaWxlIjoiY29sb3ItdHdlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMuaGFsbC9Qcm9qZWN0cy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHdlZW4gZnJvbSAnLi90d2Vlbic7XG5pbXBvcnQgeyBibGVuZENvbG9yLCBmbG93IH0gZnJvbSAnLi4vaW5jL3RyYW5zZm9ybWVycyc7XG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uL2luYy92YWx1ZS10eXBlcyc7XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIHJldHVybiB0d2Vlbih7XG4gICAgLi4ucHJvcHMsXG4gICAgZnJvbTogMCxcbiAgICB0bzogMSxcbiAgICBvblVwZGF0ZTogZmxvdyhcbiAgICAgIGJsZW5kQ29sb3IocHJvcHMuZnJvbSwgcHJvcHMudG8pLFxuICAgICAgY29sb3IudHJhbnNmb3JtLFxuICAgICAgcHJvcHMub25VcGRhdGUgfHwgbm9vcFxuICAgIClcbiAgfSk7XG59O1xuIl19

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(20);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(19);
	
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
	
	      var onUpdate = function (v) {
	        return _this2.current[key] = v;
	      };;
	
	      // Immediately update with the current action state
	      onUpdate(_this2[key].get());
	
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qcyJdLCJuYW1lcyI6WyJDb21wb3NpdGVBY3Rpb24iLCJwcm9wcyIsImFjdGlvbnMiLCJyZW1haW5pbmdQcm9wcyIsImN1cnJlbnQiLCJhY3Rpb25LZXlzIiwiYWRkQWN0aW9ucyIsImtleSIsImluZGV4T2YiLCJwdXNoIiwib25VcGRhdGUiLCJ2IiwiZ2V0Iiwic2V0UHJvcHMiLCJfb25TdG9wIiwibnVtQWN0aXZlQWN0aW9ucyIsImFkZExpc3RlbmVyIiwib25TdGFydCIsImxlbmd0aCIsImZvckVhY2giLCJzdGFydCIsIm9uU3RvcCIsInN0b3AiLCJnZXRWZWxvY2l0eSIsInZlbG9jaXR5IiwiaXNBY3Rpb25Db21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLGU7OztBQUNKLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsUUFDVEMsT0FEUyxHQUNzQkQsS0FEdEIsQ0FDVEMsT0FEUztBQUFBLFFBQ0dDLGNBREgsNEJBQ3NCRixLQUR0Qjs7QUFBQSxpREFFakIsbUJBQU1FLGNBQU4sQ0FGaUI7O0FBR2pCLFVBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFVBQUtDLFVBQUwsQ0FBZ0JMLE1BQU1DLE9BQXRCO0FBTGlCO0FBTWxCOzs0QkFFREksVSx1QkFBV0osTyxFQUFTO0FBQUE7O0FBQUEsMEJBQ1BLLEdBRE87QUFFaEIsVUFBSSxPQUFLRixVQUFMLENBQWdCRyxPQUFoQixDQUF3QkQsR0FBeEIsTUFBaUMsQ0FBQyxDQUF0QyxFQUF5QztBQUN2QyxlQUFLRixVQUFMLENBQWdCSSxJQUFoQixDQUFxQkYsR0FBckI7QUFDRDs7QUFFRCxhQUFLQSxHQUFMLElBQVlMLFFBQVFLLEdBQVIsQ0FBWjs7QUFFQSxVQUFNRyxXQUFXLFVBQUNDLENBQUQ7QUFBQSxlQUFPLE9BQUtQLE9BQUwsQ0FBYUcsR0FBYixJQUFvQkksQ0FBM0I7QUFBQSxPQUFqQixDQUE4Qzs7QUFFOUM7QUFDQUQsZUFBUyxPQUFLSCxHQUFMLEVBQVVLLEdBQVYsRUFBVDs7QUFFQSxhQUFLTCxHQUFMLEVBQ0dNLFFBREgsQ0FDWTtBQUNSQyxpQkFBUztBQUFBLGlCQUFNLE9BQUtDLGdCQUFMLEVBQU47QUFBQTtBQURELE9BRFosRUFJR0MsV0FKSCxDQUllTixRQUpmO0FBYmdCOztBQUNsQixTQUFLLElBQU1ILEdBQVgsSUFBa0JMLE9BQWxCLEVBQTJCO0FBQUEsWUFBaEJLLEdBQWdCO0FBaUIxQjtBQUNGLEc7OzRCQUVEVSxPLHNCQUFVO0FBQUE7O0FBQ1IsU0FBS0YsZ0JBQUwsR0FBd0IsS0FBS1YsVUFBTCxDQUFnQmEsTUFBeEM7QUFDQSxTQUFLYixVQUFMLENBQWdCYyxPQUFoQixDQUF3QixVQUFDWixHQUFEO0FBQUEsYUFBUyxPQUFLQSxHQUFMLEVBQVVhLEtBQVYsRUFBVDtBQUFBLEtBQXhCO0FBQ0QsRzs7NEJBRURDLE0scUJBQVM7QUFBQTs7QUFDUCxTQUFLaEIsVUFBTCxDQUFnQmMsT0FBaEIsQ0FBd0IsVUFBQ1osR0FBRDtBQUFBLGFBQVMsT0FBS0EsR0FBTCxFQUFVZSxJQUFWLEVBQVQ7QUFBQSxLQUF4QjtBQUNELEc7OzRCQUVEQyxXLDBCQUFjO0FBQUE7O0FBQ1osUUFBTUMsV0FBVyxFQUFqQjtBQUNBLFNBQUtuQixVQUFMLENBQWdCYyxPQUFoQixDQUF3QixVQUFDWixHQUFEO0FBQUEsYUFBU2lCLFNBQVNqQixHQUFULElBQWdCLE9BQUtBLEdBQUwsRUFBVWdCLFdBQVYsRUFBekI7QUFBQSxLQUF4QjtBQUNBLFdBQU9DLFFBQVA7QUFDRCxHOzs0QkFFREMsZ0IsK0JBQW1CO0FBQ2pCLFdBQVEsS0FBS1YsZ0JBQUwsS0FBMEIsQ0FBbEM7QUFDRCxHOzs7OztrQkFHWSxVQUFDYixPQUFELEVBQVVELEtBQVYsRUFBb0I7QUFDakMsU0FBTyxJQUFJRCxlQUFKO0FBQ0xFO0FBREssS0FFRkQsS0FGRSxFQUFQO0FBSUQsQyIsImZpbGUiOiJjb21wb3NpdGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMuaGFsbC9Qcm9qZWN0cy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IG9uRnJhbWVVcGRhdGUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuXG5jbGFzcyBDb21wb3NpdGVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIGNvbnN0IHsgYWN0aW9ucywgLi4ucmVtYWluaW5nUHJvcHMgfSA9IHByb3BzO1xuICAgIHN1cGVyKHJlbWFpbmluZ1Byb3BzKTtcbiAgICB0aGlzLmN1cnJlbnQgPSB7fTtcbiAgICB0aGlzLmFjdGlvbktleXMgPSBbXTtcbiAgICB0aGlzLmFkZEFjdGlvbnMocHJvcHMuYWN0aW9ucyk7XG4gIH1cblxuICBhZGRBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhY3Rpb25zKSB7XG4gICAgICBpZiAodGhpcy5hY3Rpb25LZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cblxuICAgICAgdGhpc1trZXldID0gYWN0aW9uc1trZXldO1xuXG4gICAgICBjb25zdCBvblVwZGF0ZSA9ICh2KSA9PiB0aGlzLmN1cnJlbnRba2V5XSA9IHY7O1xuXG4gICAgICAvLyBJbW1lZGlhdGVseSB1cGRhdGUgd2l0aCB0aGUgY3VycmVudCBhY3Rpb24gc3RhdGVcbiAgICAgIG9uVXBkYXRlKHRoaXNba2V5XS5nZXQoKSk7XG5cbiAgICAgIHRoaXNba2V5XVxuICAgICAgICAuc2V0UHJvcHMoe1xuICAgICAgICAgIF9vblN0b3A6ICgpID0+IHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tXG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRMaXN0ZW5lcihvblVwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSB0aGlzLmFjdGlvbktleXMubGVuZ3RoO1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKChrZXkpID0+IHRoaXNba2V5XS5zdGFydCgpKTtcbiAgfVxuXG4gIG9uU3RvcCgpIHtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaCgoa2V5KSA9PiB0aGlzW2tleV0uc3RvcCgpKTtcbiAgfVxuXG4gIGdldFZlbG9jaXR5KCkge1xuICAgIGNvbnN0IHZlbG9jaXR5ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goKGtleSkgPT4gdmVsb2NpdHlba2V5XSA9IHRoaXNba2V5XS5nZXRWZWxvY2l0eSgpKTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH1cblxuICBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiAodGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoYWN0aW9ucywgcHJvcHMpID0+IHtcbiAgcmV0dXJuIG5ldyBDb21wb3NpdGVBY3Rpb24oe1xuICAgIGFjdGlvbnMsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG59O1xuIl19

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(20);
	
	var _2 = _interopRequireDefault(_);
	
	var _tween = __webpack_require__(16);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	var _easing = __webpack_require__(3);
	
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanMiXSwibmFtZXMiOlsiQ3Jvc3NGYWRlIiwib25TdGFydCIsInByb3BzIiwiZHVyYXRpb24iLCJlYXNlIiwiZmFkZXIiLCJ0byIsInN0YXJ0IiwidXBkYXRlIiwiZnJvbSIsImJhbGFuY2UiLCJnZXQiLCJsYXRlc3RGcm9tVmFsdWUiLCJsYXRlc3RUb1ZhbHVlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLFM7Ozs7Ozs7OztzQkFLSkMsTyxzQkFBVTtBQUFBLGlCQUMwQixLQUFLQyxLQUQvQjtBQUFBLFFBQ0FDLFFBREEsVUFDQUEsUUFEQTtBQUFBLFFBQ1VDLElBRFYsVUFDVUEsSUFEVjtBQUFBLFFBQ2dCQyxLQURoQixVQUNnQkEsS0FEaEI7OztBQUdSLFNBQUtBLEtBQUwsR0FBYUEsU0FBUyxxQkFBTTtBQUMxQkMsVUFBSSxDQURzQjtBQUUxQkgsd0JBRjBCO0FBRzFCQztBQUgwQixLQUFOLEVBSW5CRyxLQUptQixFQUF0QjtBQUtELEc7O3NCQUVEQyxNLHFCQUFTO0FBQUEsa0JBQ2MsS0FBS04sS0FEbkI7QUFBQSxRQUNDTyxJQURELFdBQ0NBLElBREQ7QUFBQSxRQUNPSCxFQURQLFdBQ09BLEVBRFA7O0FBRVAsUUFBTUksVUFBVSxLQUFLTCxLQUFMLENBQVdNLEdBQVgsRUFBaEI7QUFDQSxRQUFNQyxrQkFBa0JILEtBQUtFLEdBQUwsRUFBeEI7QUFDQSxRQUFNRSxnQkFBZ0JQLEdBQUdLLEdBQUgsRUFBdEI7QUFDQSxXQUFPLGdDQUFxQkMsZUFBckIsRUFBc0NDLGFBQXRDLEVBQXFESCxPQUFyRCxDQUFQO0FBQ0QsRzs7Ozs7QUFyQkdWLFMsQ0FDR2MsWSxHQUFlO0FBQ3BCVjtBQURvQixDOztrQkF1QlQsVUFBQ0YsS0FBRDtBQUFBLFNBQVcsSUFBSUYsU0FBSixDQUFjRSxLQUFkLENBQVg7QUFBQSxDIiwiZmlsZSI6ImNyb3NzLWZhZGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMuaGFsbC9Qcm9qZWN0cy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB0d2VlbiBmcm9tICcuL3R3ZWVuJztcbmltcG9ydCB7IGxpbmVhciB9IGZyb20gJy4uL2luYy9lYXNpbmcnO1xuaW1wb3J0IHsgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNsYXNzIENyb3NzRmFkZSBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZWFzZTogbGluZWFyXG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIGNvbnN0IHsgZHVyYXRpb24sIGVhc2UsIGZhZGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5mYWRlciA9IGZhZGVyIHx8IHR3ZWVuKHtcbiAgICAgIHRvOiAxLFxuICAgICAgZHVyYXRpb24sXG4gICAgICBlYXNlXG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGZyb20sIHRvIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGJhbGFuY2UgPSB0aGlzLmZhZGVyLmdldCgpO1xuICAgIGNvbnN0IGxhdGVzdEZyb21WYWx1ZSA9IGZyb20uZ2V0KCk7XG4gICAgY29uc3QgbGF0ZXN0VG9WYWx1ZSA9IHRvLmdldCgpO1xuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhsYXRlc3RGcm9tVmFsdWUsIGxhdGVzdFRvVmFsdWUsIGJhbGFuY2UpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gbmV3IENyb3NzRmFkZShwcm9wcyk7XG4iXX0=

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _tween = __webpack_require__(16);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (duration, onComplete) {
	  return (0, _tween2.default)({ duration: duration, onComplete: onComplete });
	};
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2RlbGF5LmpzIl0sIm5hbWVzIjpbImR1cmF0aW9uIiwib25Db21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7a0JBRWUsVUFBQ0EsUUFBRCxFQUFXQyxVQUFYO0FBQUEsU0FBMEIscUJBQU0sRUFBRUQsa0JBQUYsRUFBWUMsc0JBQVosRUFBTixDQUExQjtBQUFBLEMiLCJmaWxlIjoiZGVsYXkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMuaGFsbC9Qcm9qZWN0cy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHdlZW4gZnJvbSAnLi90d2Vlbic7XG5cbmV4cG9ydCBkZWZhdWx0IChkdXJhdGlvbiwgb25Db21wbGV0ZSkgPT4gdHdlZW4oeyBkdXJhdGlvbiwgb25Db21wbGV0ZSB9KTtcbiJdfQ==

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(20);
	
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
	
	exports.default = function (actions, props) {
	  return new Parallel(_extends({ actions: actions }, props));
	};
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BhcmFsbGVsLmpzIl0sIm5hbWVzIjpbIlBhcmFsbGVsIiwib25TdGFydCIsImFjdGlvbnMiLCJwcm9wcyIsIm51bUFjdGl2ZUFjdGlvbnMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiYWN0aW9uIiwic2V0UHJvcHMiLCJfb25TdG9wIiwic3RhcnQiLCJvblN0b3AiLCJzdG9wIiwiYWRkQWN0aW9uIiwiaW5kZXhPZiIsInB1c2giLCJpc0FjdGlvbkNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLFE7Ozs7Ozs7OztxQkFDSkMsTyxzQkFBVTtBQUFBOztBQUFBLFFBQ0FDLE9BREEsR0FDWSxLQUFLQyxLQURqQixDQUNBRCxPQURBOztBQUVSLFNBQUtFLGdCQUFMLEdBQXdCRixRQUFRRyxNQUFoQzs7QUFFQUgsWUFBUUksT0FBUixDQUFnQixVQUFDQyxNQUFELEVBQVk7QUFDMUJBLGFBQU9DLFFBQVAsQ0FBZ0I7QUFDZEMsaUJBQVM7QUFBQSxpQkFBTSxPQUFLTCxnQkFBTCxFQUFOO0FBQUE7QUFESyxPQUFoQixFQUVHTSxLQUZIO0FBR0QsS0FKRDtBQUtELEc7O3FCQUVEQyxNLHFCQUFTO0FBQ1AsU0FBS1IsS0FBTCxDQUFXRCxPQUFYLENBQW1CSSxPQUFuQixDQUEyQixVQUFDQyxNQUFEO0FBQUEsYUFBWUEsT0FBT0ssSUFBUCxFQUFaO0FBQUEsS0FBM0I7QUFDRCxHOztxQkFFREMsUyxzQkFBVU4sTSxFQUFRO0FBQUEsUUFDUkwsT0FEUSxHQUNJLEtBQUtDLEtBRFQsQ0FDUkQsT0FEUTs7O0FBR2hCLFFBQUlBLFFBQVFZLE9BQVIsQ0FBZ0JQLE1BQWhCLE1BQTRCLENBQUMsQ0FBakMsRUFBb0M7QUFDbENMLGNBQVFhLElBQVIsQ0FBYVIsTUFBYjtBQUNEO0FBQ0YsRzs7cUJBRURTLGdCLCtCQUFtQjtBQUNqQixXQUFRLEtBQUtaLGdCQUFMLEtBQTBCLENBQWxDO0FBQ0QsRzs7Ozs7a0JBR1ksVUFBQ0YsT0FBRCxFQUFVQyxLQUFWO0FBQUEsU0FBb0IsSUFBSUgsUUFBSixZQUFlRSxnQkFBZixJQUEyQkMsS0FBM0IsRUFBcEI7QUFBQSxDIiwiZmlsZSI6InBhcmFsbGVsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzLmhhbGwvUHJvamVjdHMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5cbmNsYXNzIFBhcmFsbGVsIGV4dGVuZHMgQWN0aW9uIHtcbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IGFjdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gYWN0aW9ucy5sZW5ndGg7XG5cbiAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xuICAgICAgYWN0aW9uLnNldFByb3BzKHtcbiAgICAgICAgX29uU3RvcDogKCkgPT4gdGhpcy5udW1BY3RpdmVBY3Rpb25zLS1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH1cblxuICBvblN0b3AoKSB7XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4gYWN0aW9uLnN0b3AoKSk7XG4gIH1cblxuICBhZGRBY3Rpb24oYWN0aW9uKSB7XG4gICAgY29uc3QgeyBhY3Rpb25zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGFjdGlvbnMuaW5kZXhPZihhY3Rpb24pID09PSAtMSkge1xuICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gKHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGFjdGlvbnMsIHByb3BzKSA9PiBuZXcgUGFyYWxsZWwoeyBhY3Rpb25zLCAuLi5wcm9wcyB9KTtcbiJdfQ==

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(20);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(19);
	
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BoeXNpY3MuanMiXSwibmFtZXMiOlsiUGh5c2ljcyIsInVwZGF0ZSIsInByb3BzIiwiYXV0b1N0b3BTcGVlZCIsImFjY2VsZXJhdGlvbiIsImZyaWN0aW9uIiwidmVsb2NpdHkiLCJzcHJpbmciLCJ0byIsIm5ld1ZlbG9jaXR5IiwiZWxhcHNlZCIsInVuZGVmaW5lZCIsImRpc3RhbmNlVG9UYXJnZXQiLCJjdXJyZW50IiwiaXNDb21wbGV0ZSIsIk1hdGgiLCJhYnMiLCJpc0FjdGlvbkNvbXBsZXRlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7b0JBUUpDLE0scUJBQVM7QUFBQSxpQkFDaUUsS0FBS0MsS0FEdEU7QUFBQSxRQUNDQyxhQURELFVBQ0NBLGFBREQ7QUFBQSxRQUNnQkMsWUFEaEIsVUFDZ0JBLFlBRGhCO0FBQUEsUUFDOEJDLFFBRDlCLFVBQzhCQSxRQUQ5QjtBQUFBLFFBQ3dDQyxRQUR4QyxVQUN3Q0EsUUFEeEM7QUFBQSxRQUNrREMsTUFEbEQsVUFDa0RBLE1BRGxEO0FBQUEsUUFDMERDLEVBRDFELFVBQzBEQSxFQUQxRDs7QUFFUCxRQUFJQyxjQUFjSCxRQUFsQjtBQUNBLFFBQU1JLFVBQVUsb0NBQWhCOztBQUVBO0FBQ0EsUUFBSU4sWUFBSixFQUFrQjtBQUNoQksscUJBQWUseUJBQWNMLFlBQWQsRUFBNEJNLE9BQTVCLENBQWY7QUFDRDs7QUFFRDtBQUNBLFFBQUlMLFFBQUosRUFBYztBQUNaSSw4QkFBZ0IsSUFBSUosUUFBcEIsRUFBa0NLLFVBQVUsR0FBNUM7QUFDRDs7QUFFRCxRQUFJSCxVQUFVQyxPQUFPRyxTQUFyQixFQUFnQztBQUM5QixVQUFNQyxtQkFBbUJKLEtBQUssS0FBS0ssT0FBbkM7QUFDQUoscUJBQWVHLG1CQUFtQix5QkFBY0wsTUFBZCxFQUFzQkcsT0FBdEIsQ0FBbEM7QUFDRDs7QUFFRDtBQUNBLFNBQUtHLE9BQUwsSUFBZ0IseUJBQWNKLFdBQWQsRUFBMkJDLE9BQTNCLENBQWhCO0FBQ0EsU0FBS1IsS0FBTCxDQUFXSSxRQUFYLEdBQXNCRyxXQUF0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFLSyxVQUFMLEdBQW1CWCxrQkFBa0IsS0FBbEIsS0FBNEIsQ0FBQ00sV0FBRCxJQUFnQk0sS0FBS0MsR0FBTCxDQUFTUCxXQUFULEtBQXlCTixhQUFyRSxDQUFuQjs7QUFFQSxRQUFJLEtBQUtXLFVBQUwsSUFBbUJQLE1BQXZCLEVBQStCO0FBQzdCLFdBQUtNLE9BQUwsR0FBZUwsRUFBZjtBQUNEOztBQUVELFdBQU8sS0FBS0ssT0FBWjtBQUNELEc7O29CQUVESSxnQiwrQkFBbUI7QUFDakIsV0FBTyxLQUFLSCxVQUFaO0FBQ0QsRzs7Ozs7QUE5Q0dkLE8sQ0FDR2tCLFksR0FBZTtBQUNwQmQsZ0JBQWMsQ0FETTtBQUVwQkMsWUFBVSxDQUZVO0FBR3BCQyxZQUFVLENBSFU7QUFJcEJILGlCQUFlO0FBSkssQzs7a0JBZ0RULFVBQUNELEtBQUQ7QUFBQSxTQUFXLElBQUlGLE9BQUosQ0FBWUUsS0FBWixDQUFYO0FBQUEsQyIsImZpbGUiOiJwaHlzaWNzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzLmhhbGwvUHJvamVjdHMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgeyB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuaW1wb3J0IHsgc3BlZWRQZXJGcmFtZSB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuY2xhc3MgUGh5c2ljcyBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWNjZWxlcmF0aW9uOiAwLFxuICAgIGZyaWN0aW9uOiAwLFxuICAgIHZlbG9jaXR5OiAwLFxuICAgIGF1dG9TdG9wU3BlZWQ6IDAuMDAxXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeyBhdXRvU3RvcFNwZWVkLCBhY2NlbGVyYXRpb24sIGZyaWN0aW9uLCB2ZWxvY2l0eSwgc3ByaW5nLCB0byB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgbmV3VmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICBjb25zdCBlbGFwc2VkID0gdGltZVNpbmNlTGFzdEZyYW1lKCk7XG5cbiAgICAvLyBBcHBseSBhY2NlbGVyYXRpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoYWNjZWxlcmF0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSArPSBzcGVlZFBlckZyYW1lKGFjY2VsZXJhdGlvbiwgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgZnJpY3Rpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoZnJpY3Rpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICo9ICgxIC0gZnJpY3Rpb24pICoqIChlbGFwc2VkIC8gMTAwKTtcbiAgICB9XG5cbiAgICBpZiAoc3ByaW5nICYmIHRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlVG9UYXJnZXQgPSB0byAtIHRoaXMuY3VycmVudDtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiBzcGVlZFBlckZyYW1lKHNwcmluZywgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdmVsb2NpdHlcbiAgICB0aGlzLmN1cnJlbnQgKz0gc3BlZWRQZXJGcmFtZShuZXdWZWxvY2l0eSwgZWxhcHNlZCk7XG4gICAgdGhpcy5wcm9wcy52ZWxvY2l0eSA9IG5ld1ZlbG9jaXR5O1xuXG4gICAgLy8gQ2hlY2sgaWYgc2ltdWxhdGlvbiBpcyBjb21wbGV0ZVxuICAgIC8vIFdlIGRvIHRoaXMgaGVyZSBpbnN0ZWFkIG9mIGBpc0FjdGlvbkNvbXBsZXRlYCBhcyBpdCBhbGxvd3MgdXNcbiAgICAvLyB0byBjbGFtcCBkdXJpbmcgdGhpcyB1cGRhdGVcbiAgICB0aGlzLmlzQ29tcGxldGUgPSAoYXV0b1N0b3BTcGVlZCAhPT0gZmFsc2UgJiYgKCFuZXdWZWxvY2l0eSB8fCBNYXRoLmFicyhuZXdWZWxvY2l0eSkgPD0gYXV0b1N0b3BTcGVlZCkpO1xuXG4gICAgaWYgKHRoaXMuaXNDb21wbGV0ZSAmJiBzcHJpbmcpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRvO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH1cblxuICBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgUGh5c2ljcyhwcm9wcyk7Il19

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _value = __webpack_require__(18);
	
	var _value2 = _interopRequireDefault(_value);
	
	var _composite = __webpack_require__(9);
	
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BvaW50ZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlUG9pbnRlciIsIngiLCJ5IiwiZXZlbnRUb1BvaW50cyIsIm1vdmVFdmVudCIsInByb3BzIiwicG9pbnRlciIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlUG9pbnRlciIsImUiLCJwb2ludHMiLCJzZXQiLCJzZXRQcm9wcyIsIl9vblN0YXJ0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX29uU3RvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb3VzZUV2ZW50VG9Qb2ludCIsInBhZ2VYIiwicGFnZVkiLCJ0b3VjaEV2ZW50VG9Qb2ludCIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJnZXROYXRpdmVFdmVudCIsIm9yaWdpbmFsRXZlbnQiLCJuYXRpdmVFdmVudCIsInRvdWNoZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsU0FBU0EsYUFBVCxjQUF5RTtBQUFBLE1BQWhEQyxDQUFnRCxTQUFoREEsQ0FBZ0Q7QUFBQSxNQUE3Q0MsQ0FBNkMsU0FBN0NBLENBQTZDOztBQUFBLE1BQXRDQyxhQUFzQyxRQUF0Q0EsYUFBc0M7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQUEsTUFBVEMsS0FBUzs7QUFDdkUsTUFBTUMsVUFBVSx5QkFBVTtBQUN4QkwsT0FBRyxxQkFBTUEsQ0FBTixDQURxQjtBQUV4QkMsT0FBRyxxQkFBTUEsQ0FBTjtBQUZxQixHQUFWO0FBSWRLLG9CQUFnQjtBQUpGLEtBS1hGLEtBTFcsRUFBaEI7O0FBUUEsTUFBTUcsZ0JBQWdCLFVBQUNDLENBQUQsRUFBTztBQUMzQixRQUFJSixNQUFNRSxjQUFWLEVBQTBCO0FBQ3hCRSxRQUFFRixjQUFGO0FBQ0Q7O0FBRUQsUUFBTUcsU0FBU1AsY0FBY00sQ0FBZCxDQUFmO0FBQ0FILFlBQVFMLENBQVIsQ0FBVVUsR0FBVixDQUFjRCxPQUFPVCxDQUFyQjtBQUNBSyxZQUFRSixDQUFSLENBQVVTLEdBQVYsQ0FBY0QsT0FBT1IsQ0FBckI7QUFDRCxHQVJEOztBQVVBSSxVQUFRTSxRQUFSLENBQWlCO0FBQ2ZDLGNBQVU7QUFBQSxhQUFNQyxTQUFTQyxlQUFULENBQXlCQyxnQkFBekIsQ0FBMENaLFNBQTFDLEVBQXFESSxhQUFyRCxDQUFOO0FBQUEsS0FESztBQUVmUyxhQUFTO0FBQUEsYUFBTUgsU0FBU0MsZUFBVCxDQUF5QkcsbUJBQXpCLENBQTZDZCxTQUE3QyxFQUF3REksYUFBeEQsQ0FBTjtBQUFBO0FBRk0sR0FBakI7O0FBS0EsU0FBT0YsT0FBUDtBQUNEOztBQUVELElBQU1hLG9CQUFvQixVQUFDVixDQUFEO0FBQUEsU0FBUTtBQUNoQ1IsT0FBR1EsRUFBRVcsS0FEMkI7QUFFaENsQixPQUFHTyxFQUFFWTtBQUYyQixHQUFSO0FBQUEsQ0FBMUI7O0FBS0EsSUFBTUMsb0JBQW9CO0FBQUEsTUFBR0MsY0FBSCxTQUFHQSxjQUFIO0FBQUEsU0FBeUI7QUFDakR0QixPQUFHc0IsZUFBZSxDQUFmLEVBQWtCQyxPQUQ0QjtBQUVqRHRCLE9BQUdxQixlQUFlLENBQWYsRUFBa0JFO0FBRjRCLEdBQXpCO0FBQUEsQ0FBMUI7O0FBS0EsSUFBTUMsaUJBQWlCLFVBQUNqQixDQUFEO0FBQUEsU0FBT0EsRUFBRWtCLGFBQUYsSUFBbUJsQixFQUFFbUIsV0FBckIsSUFBb0NuQixDQUEzQztBQUFBLENBQXZCOztrQkFFZSxVQUFDQSxDQUFELEVBQUlKLEtBQUosRUFBYztBQUMzQixNQUFNdUIsY0FBY0YsZUFBZWpCLENBQWYsQ0FBcEI7QUFDQSxTQUFRbUIsWUFBWUMsT0FBYixHQUNMN0IsY0FBY3NCLGtCQUFrQmIsQ0FBbEIsQ0FBZDtBQUNFTCxlQUFXLFdBRGI7QUFFRUQsbUJBQWVtQjtBQUZqQixLQUdLakIsS0FITCxFQURLLEdBTUxMLGNBQWNtQixrQkFBa0JWLENBQWxCLENBQWQ7QUFDRUwsZUFBVyxXQURiO0FBRUVELG1CQUFlZ0I7QUFGakIsS0FHS2QsS0FITCxFQU5GO0FBV0QsQyIsImZpbGUiOiJwb2ludGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzLmhhbGwvUHJvamVjdHMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZhbHVlIGZyb20gJy4vdmFsdWUnO1xuaW1wb3J0IGNvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvaW50ZXIoeyB4LCB5IH0sIHsgZXZlbnRUb1BvaW50cywgbW92ZUV2ZW50LCAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHBvaW50ZXIgPSBjb21wb3NpdGUoe1xuICAgIHg6IHZhbHVlKHgpLFxuICAgIHk6IHZhbHVlKHkpXG4gIH0sIHtcbiAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZSxcbiAgICAuLi5wcm9wc1xuICB9KTtcblxuICBjb25zdCB1cGRhdGVQb2ludGVyID0gKGUpID0+IHtcbiAgICBpZiAocHJvcHMucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludHMgPSBldmVudFRvUG9pbnRzKGUpO1xuICAgIHBvaW50ZXIueC5zZXQocG9pbnRzLngpO1xuICAgIHBvaW50ZXIueS5zZXQocG9pbnRzLnkpO1xuICB9O1xuXG4gIHBvaW50ZXIuc2V0UHJvcHMoe1xuICAgIF9vblN0YXJ0OiAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpLFxuICAgIF9vblN0b3A6ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlcilcbiAgfSk7XG5cbiAgcmV0dXJuIHBvaW50ZXI7XG59XG5cbmNvbnN0IG1vdXNlRXZlbnRUb1BvaW50ID0gKGUpID0+ICh7XG4gIHg6IGUucGFnZVgsXG4gIHk6IGUucGFnZVlcbn0pO1xuXG5jb25zdCB0b3VjaEV2ZW50VG9Qb2ludCA9ICh7IGNoYW5nZWRUb3VjaGVzIH0pID0+ICh7XG4gIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbn0pO1xuXG5jb25zdCBnZXROYXRpdmVFdmVudCA9IChlKSA9PiBlLm9yaWdpbmFsRXZlbnQgfHwgZS5uYXRpdmVFdmVudCB8fCBlO1xuXG5leHBvcnQgZGVmYXVsdCAoZSwgcHJvcHMpID0+IHtcbiAgY29uc3QgbmF0aXZlRXZlbnQgPSBnZXROYXRpdmVFdmVudChlKTtcbiAgcmV0dXJuIChuYXRpdmVFdmVudC50b3VjaGVzKSA/XG4gICAgY3JlYXRlUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwge1xuICAgICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICAgIGV2ZW50VG9Qb2ludHM6IHRvdWNoRXZlbnRUb1BvaW50LFxuICAgICAgLi4ucHJvcHNcbiAgICB9KSA6XG4gICAgY3JlYXRlUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwge1xuICAgICAgbW92ZUV2ZW50OiAnbW91c2Vtb3ZlJyxcbiAgICAgIGV2ZW50VG9Qb2ludHM6IG1vdXNlRXZlbnRUb1BvaW50LFxuICAgICAgLi4ucHJvcHNcbiAgICB9KTtcbn07XG4iXX0=

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _value = __webpack_require__(18);
	
	var _value2 = _interopRequireDefault(_value);
	
	var _composite = __webpack_require__(9);
	
	var _composite2 = _interopRequireDefault(_composite);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function createTouches(_ref2, _ref) {
	  var changed = _ref2.changed,
	      target = _ref2.target,
	      all = _ref2.all;
	
	  var eventToTouches = _ref.eventToTouches,
	      moveEvent = _ref.moveEvent,
	      props = _objectWithoutProperties(_ref, ['eventToTouches', 'moveEvent']);
	
	  var touches = (0, _composite2.default)({
	    changedTouches: mapCoordsToActions(changed),
	    targetTouches: mapCoordsToActions(target),
	    touches: mapCoordsToActions(all),
	    touchCount: (0, _value2.default)(all.length)
	  }, _extends({
	    preventDefault: true
	  }, props));
	
	  function updateTouches(e) {
	    if (props.preventDefault) {
	      e.preventDefault();
	    }
	
	    var _eventToTouches = eventToTouches(e),
	        changed = _eventToTouches.changed,
	        target = _eventToTouches.target,
	        all = _eventToTouches.all;
	
	    updateActionWithTouches(touches, 'changedTouches', changed);
	    updateActionWithTouches(touches, 'targetTouches', target);
	    updateActionWithTouches(touches, 'touches', all);
	    touches.touchCount.set(all.length);
	  }
	
	  touches.setProps({
	    _onStart: function () {
	      return document.documentElement.addEventListener(moveEvent, updateTouches);
	    },
	    _onStop: function () {
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
	  return (0, _composite2.default)(actions);
	}
	
	function updateActionWithTouches(action, name, newTouches) {
	  for (var i in newTouches) {
	    var _newTouches$i = newTouches[i],
	        x = _newTouches$i.x,
	        y = _newTouches$i.y;
	
	    if (action[name][i] != null) {
	      action[name][i].x.set(x);
	      action[name][i].y.set(y);
	    } else {
	      action[name][i] = (0, _composite2.default)({
	        x: (0, _value2.default)(x),
	        y: (0, _value2.default)(y)
	      });
	    }
	  }
	}
	
	var mouseEventToTouches = function (_ref3) {
	  var pageX = _ref3.pageX,
	      pageY = _ref3.pageY;
	
	  var touches = [{
	    x: pageX,
	    y: pageY
	  }];
	  return {
	    changed: touches,
	    target: touches,
	    all: touches
	  };
	};
	
	var touchEventToTouches = function (_ref4) {
	  var changedTouches = _ref4.changedTouches,
	      targetTouches = _ref4.targetTouches,
	      touches = _ref4.touches;
	
	  return {
	    changed: extractCoords(changedTouches),
	    target: extractCoords(targetTouches),
	    all: extractCoords(touches)
	  };
	};
	
	function extractCoords(touches) {
	  var actions = [];
	  for (var i = 0; i < touches.length; i++) {
	    var _touches$i = touches[i],
	        clientX = _touches$i.clientX,
	        clientY = _touches$i.clientY;
	
	    actions[i] = {
	      x: clientX,
	      y: clientY
	    };
	  }
	  return actions;
	}
	
	var getNativeEvent = function (e) {
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3RvdWNoZXMuanMiXSwibmFtZXMiOlsiY3JlYXRlVG91Y2hlcyIsImNoYW5nZWQiLCJ0YXJnZXQiLCJhbGwiLCJldmVudFRvVG91Y2hlcyIsIm1vdmVFdmVudCIsInByb3BzIiwidG91Y2hlcyIsImNoYW5nZWRUb3VjaGVzIiwibWFwQ29vcmRzVG9BY3Rpb25zIiwidGFyZ2V0VG91Y2hlcyIsInRvdWNoQ291bnQiLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZVRvdWNoZXMiLCJlIiwidXBkYXRlQWN0aW9uV2l0aFRvdWNoZXMiLCJzZXQiLCJzZXRQcm9wcyIsIl9vblN0YXJ0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX29uU3RvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb29yZHMiLCJhY3Rpb25zIiwiaSIsIngiLCJ5IiwiYWN0aW9uIiwibmFtZSIsIm5ld1RvdWNoZXMiLCJtb3VzZUV2ZW50VG9Ub3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsInRvdWNoRXZlbnRUb1RvdWNoZXMiLCJleHRyYWN0Q29vcmRzIiwiY2xpZW50WCIsImNsaWVudFkiLCJnZXROYXRpdmVFdmVudCIsIm9yaWdpbmFsRXZlbnQiLCJuYXRpdmVFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFTQSxhQUFULGNBQTBGO0FBQUEsTUFBakVDLE9BQWlFLFNBQWpFQSxPQUFpRTtBQUFBLE1BQXhEQyxNQUF3RCxTQUF4REEsTUFBd0Q7QUFBQSxNQUFoREMsR0FBZ0QsU0FBaERBLEdBQWdEOztBQUFBLE1BQXZDQyxjQUF1QyxRQUF2Q0EsY0FBdUM7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQUEsTUFBVEMsS0FBUzs7QUFDeEYsTUFBTUMsVUFBVSx5QkFBVTtBQUN4QkMsb0JBQWdCQyxtQkFBbUJSLE9BQW5CLENBRFE7QUFFeEJTLG1CQUFlRCxtQkFBbUJQLE1BQW5CLENBRlM7QUFHeEJLLGFBQVNFLG1CQUFtQk4sR0FBbkIsQ0FIZTtBQUl4QlEsZ0JBQVkscUJBQU1SLElBQUlTLE1BQVY7QUFKWSxHQUFWO0FBTWRDLG9CQUFnQjtBQU5GLEtBT1hQLEtBUFcsRUFBaEI7O0FBVUEsV0FBU1EsYUFBVCxDQUF1QkMsQ0FBdkIsRUFBMEI7QUFDeEIsUUFBSVQsTUFBTU8sY0FBVixFQUEwQjtBQUN4QkUsUUFBRUYsY0FBRjtBQUNEOztBQUh1QiwwQkFJU1QsZUFBZVcsQ0FBZixDQUpUO0FBQUEsUUFJaEJkLE9BSmdCLG1CQUloQkEsT0FKZ0I7QUFBQSxRQUlQQyxNQUpPLG1CQUlQQSxNQUpPO0FBQUEsUUFJQ0MsR0FKRCxtQkFJQ0EsR0FKRDs7QUFLeEJhLDRCQUF3QlQsT0FBeEIsRUFBaUMsZ0JBQWpDLEVBQW1ETixPQUFuRDtBQUNBZSw0QkFBd0JULE9BQXhCLEVBQWlDLGVBQWpDLEVBQWtETCxNQUFsRDtBQUNBYyw0QkFBd0JULE9BQXhCLEVBQWlDLFNBQWpDLEVBQTRDSixHQUE1QztBQUNBSSxZQUFRSSxVQUFSLENBQW1CTSxHQUFuQixDQUF1QmQsSUFBSVMsTUFBM0I7QUFDRDs7QUFFREwsVUFBUVcsUUFBUixDQUFpQjtBQUNmQyxjQUFVO0FBQUEsYUFBTUMsU0FBU0MsZUFBVCxDQUF5QkMsZ0JBQXpCLENBQTBDakIsU0FBMUMsRUFBcURTLGFBQXJELENBQU47QUFBQSxLQURLO0FBRWZTLGFBQVM7QUFBQSxhQUFNSCxTQUFTQyxlQUFULENBQXlCRyxtQkFBekIsQ0FBNkNuQixTQUE3QyxFQUF3RFMsYUFBeEQsQ0FBTjtBQUFBO0FBRk0sR0FBakI7O0FBS0EsU0FBT1AsT0FBUDtBQUNEOztBQUVELFNBQVNFLGtCQUFULENBQTRCZ0IsTUFBNUIsRUFBb0M7QUFDbEMsTUFBSUMsVUFBVSxFQUFkO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLE9BQU9iLE1BQTNCLEVBQW1DZSxHQUFuQyxFQUF3QztBQUFBLG9CQUNyQkYsT0FBT0UsQ0FBUCxDQURxQjtBQUFBLFFBQzlCQyxDQUQ4QixhQUM5QkEsQ0FEOEI7QUFBQSxRQUMzQkMsQ0FEMkIsYUFDM0JBLENBRDJCOztBQUV0Q0gsWUFBUUMsQ0FBUixJQUFhLHlCQUFVO0FBQ3JCQyxTQUFHLHFCQUFNQSxDQUFOLENBRGtCO0FBRXJCQyxTQUFHLHFCQUFNQSxDQUFOO0FBRmtCLEtBQVYsQ0FBYjtBQUlEO0FBQ0QsU0FBTyx5QkFBVUgsT0FBVixDQUFQO0FBQ0Q7O0FBRUQsU0FBU1YsdUJBQVQsQ0FBaUNjLE1BQWpDLEVBQXlDQyxJQUF6QyxFQUErQ0MsVUFBL0MsRUFBMkQ7QUFDekQsT0FBSyxJQUFNTCxDQUFYLElBQWdCSyxVQUFoQixFQUE0QjtBQUFBLHdCQUNUQSxXQUFXTCxDQUFYLENBRFM7QUFBQSxRQUNsQkMsQ0FEa0IsaUJBQ2xCQSxDQURrQjtBQUFBLFFBQ2ZDLENBRGUsaUJBQ2ZBLENBRGU7O0FBRTFCLFFBQUlDLE9BQU9DLElBQVAsRUFBYUosQ0FBYixLQUFtQixJQUF2QixFQUE2QjtBQUMzQkcsYUFBT0MsSUFBUCxFQUFhSixDQUFiLEVBQWdCQyxDQUFoQixDQUFrQlgsR0FBbEIsQ0FBc0JXLENBQXRCO0FBQ0FFLGFBQU9DLElBQVAsRUFBYUosQ0FBYixFQUFnQkUsQ0FBaEIsQ0FBa0JaLEdBQWxCLENBQXNCWSxDQUF0QjtBQUNELEtBSEQsTUFHTztBQUNMQyxhQUFPQyxJQUFQLEVBQWFKLENBQWIsSUFBa0IseUJBQVU7QUFDMUJDLFdBQUcscUJBQU1BLENBQU4sQ0FEdUI7QUFFMUJDLFdBQUcscUJBQU1BLENBQU47QUFGdUIsT0FBVixDQUFsQjtBQUlEO0FBQ0Y7QUFDRjs7QUFFRCxJQUFNSSxzQkFBc0IsaUJBQXNCO0FBQUEsTUFBbkJDLEtBQW1CLFNBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLEtBQVksU0FBWkEsS0FBWTs7QUFDaEQsTUFBTTVCLFVBQVUsQ0FBQztBQUNmcUIsT0FBR00sS0FEWTtBQUVmTCxPQUFHTTtBQUZZLEdBQUQsQ0FBaEI7QUFJQSxTQUFPO0FBQ0xsQyxhQUFTTSxPQURKO0FBRUxMLFlBQVFLLE9BRkg7QUFHTEosU0FBS0k7QUFIQSxHQUFQO0FBS0QsQ0FWRDs7QUFZQSxJQUFNNkIsc0JBQXNCLGlCQUFnRDtBQUFBLE1BQTdDNUIsY0FBNkMsU0FBN0NBLGNBQTZDO0FBQUEsTUFBN0JFLGFBQTZCLFNBQTdCQSxhQUE2QjtBQUFBLE1BQWRILE9BQWMsU0FBZEEsT0FBYzs7QUFDMUUsU0FBTztBQUNMTixhQUFTb0MsY0FBYzdCLGNBQWQsQ0FESjtBQUVMTixZQUFRbUMsY0FBYzNCLGFBQWQsQ0FGSDtBQUdMUCxTQUFLa0MsY0FBYzlCLE9BQWQ7QUFIQSxHQUFQO0FBS0QsQ0FORDs7QUFRQSxTQUFTOEIsYUFBVCxDQUF1QjlCLE9BQXZCLEVBQWdDO0FBQzlCLE1BQUltQixVQUFVLEVBQWQ7QUFDQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSXBCLFFBQVFLLE1BQTVCLEVBQW9DZSxHQUFwQyxFQUF5QztBQUFBLHFCQUNWcEIsUUFBUW9CLENBQVIsQ0FEVTtBQUFBLFFBQy9CVyxPQUQrQixjQUMvQkEsT0FEK0I7QUFBQSxRQUN0QkMsT0FEc0IsY0FDdEJBLE9BRHNCOztBQUV2Q2IsWUFBUUMsQ0FBUixJQUFhO0FBQ1hDLFNBQUdVLE9BRFE7QUFFWFQsU0FBR1U7QUFGUSxLQUFiO0FBSUQ7QUFDRCxTQUFPYixPQUFQO0FBQ0Q7O0FBRUQsSUFBTWMsaUJBQWlCLFVBQUN6QixDQUFEO0FBQUEsU0FBT0EsRUFBRTBCLGFBQUYsSUFBbUIxQixFQUFFMkIsV0FBckIsSUFBb0MzQixDQUEzQztBQUFBLENBQXZCOztrQkFFZSxVQUFDQSxDQUFELEVBQUlULEtBQUosRUFBYztBQUMzQixNQUFNb0MsY0FBY0YsZUFBZXpCLENBQWYsQ0FBcEI7QUFDQSxTQUFRMkIsWUFBWW5DLE9BQWIsR0FDTFAsY0FBY29DLG9CQUFvQnJCLENBQXBCLENBQWQ7QUFDRVYsZUFBVyxXQURiO0FBRUVELG9CQUFnQmdDO0FBRmxCLEtBR0s5QixLQUhMLEVBREssR0FNTE4sY0FBY2lDLG9CQUFvQmxCLENBQXBCLENBQWQ7QUFDRVYsZUFBVyxXQURiO0FBRUVELG9CQUFnQjZCO0FBRmxCLEtBR0szQixLQUhMLEVBTkY7QUFXRCxDIiwiZmlsZSI6InRvdWNoZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMuaGFsbC9Qcm9qZWN0cy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFsdWUgZnJvbSAnLi92YWx1ZSc7XG5pbXBvcnQgY29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcblxuZnVuY3Rpb24gY3JlYXRlVG91Y2hlcyh7IGNoYW5nZWQsIHRhcmdldCwgYWxsIH0sIHsgZXZlbnRUb1RvdWNoZXMsIG1vdmVFdmVudCwgLi4ucHJvcHMgfSkge1xuICBjb25zdCB0b3VjaGVzID0gY29tcG9zaXRlKHtcbiAgICBjaGFuZ2VkVG91Y2hlczogbWFwQ29vcmRzVG9BY3Rpb25zKGNoYW5nZWQpLFxuICAgIHRhcmdldFRvdWNoZXM6IG1hcENvb3Jkc1RvQWN0aW9ucyh0YXJnZXQpLFxuICAgIHRvdWNoZXM6IG1hcENvb3Jkc1RvQWN0aW9ucyhhbGwpLFxuICAgIHRvdWNoQ291bnQ6IHZhbHVlKGFsbC5sZW5ndGgpXG4gIH0sIHtcbiAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZSxcbiAgICAuLi5wcm9wc1xuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGVUb3VjaGVzKGUpIHtcbiAgICBpZiAocHJvcHMucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgY29uc3QgeyBjaGFuZ2VkLCB0YXJnZXQsIGFsbCB9ID0gZXZlbnRUb1RvdWNoZXMoZSk7XG4gICAgdXBkYXRlQWN0aW9uV2l0aFRvdWNoZXModG91Y2hlcywgJ2NoYW5nZWRUb3VjaGVzJywgY2hhbmdlZCk7XG4gICAgdXBkYXRlQWN0aW9uV2l0aFRvdWNoZXModG91Y2hlcywgJ3RhcmdldFRvdWNoZXMnLCB0YXJnZXQpO1xuICAgIHVwZGF0ZUFjdGlvbldpdGhUb3VjaGVzKHRvdWNoZXMsICd0b3VjaGVzJywgYWxsKTtcbiAgICB0b3VjaGVzLnRvdWNoQ291bnQuc2V0KGFsbC5sZW5ndGgpO1xuICB9XG5cbiAgdG91Y2hlcy5zZXRQcm9wcyh7XG4gICAgX29uU3RhcnQ6ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlVG91Y2hlcyksXG4gICAgX29uU3RvcDogKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVUb3VjaGVzKVxuICB9KTtcblxuICByZXR1cm4gdG91Y2hlcztcbn1cblxuZnVuY3Rpb24gbWFwQ29vcmRzVG9BY3Rpb25zKGNvb3JkcykgeyBcbiAgbGV0IGFjdGlvbnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGNvb3Jkc1tpXTtcbiAgICBhY3Rpb25zW2ldID0gY29tcG9zaXRlKHtcbiAgICAgIHg6IHZhbHVlKHgpLFxuICAgICAgeTogdmFsdWUoeSlcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gY29tcG9zaXRlKGFjdGlvbnMpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBY3Rpb25XaXRoVG91Y2hlcyhhY3Rpb24sIG5hbWUsIG5ld1RvdWNoZXMpIHtcbiAgZm9yIChjb25zdCBpIGluIG5ld1RvdWNoZXMpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IG5ld1RvdWNoZXNbaV07XG4gICAgaWYgKGFjdGlvbltuYW1lXVtpXSAhPSBudWxsKSB7XG4gICAgICBhY3Rpb25bbmFtZV1baV0ueC5zZXQoeCk7XG4gICAgICBhY3Rpb25bbmFtZV1baV0ueS5zZXQoeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGlvbltuYW1lXVtpXSA9IGNvbXBvc2l0ZSh7XG4gICAgICAgIHg6IHZhbHVlKHgpLFxuICAgICAgICB5OiB2YWx1ZSh5KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG1vdXNlRXZlbnRUb1RvdWNoZXMgPSAoeyBwYWdlWCwgcGFnZVkgfSkgPT4ge1xuICBjb25zdCB0b3VjaGVzID0gW3tcbiAgICB4OiBwYWdlWCxcbiAgICB5OiBwYWdlWVxuICB9XTtcbiAgcmV0dXJuIHtcbiAgICBjaGFuZ2VkOiB0b3VjaGVzLFxuICAgIHRhcmdldDogdG91Y2hlcyxcbiAgICBhbGw6IHRvdWNoZXNcbiAgfTtcbn07XG5cbmNvbnN0IHRvdWNoRXZlbnRUb1RvdWNoZXMgPSAoeyBjaGFuZ2VkVG91Y2hlcywgdGFyZ2V0VG91Y2hlcywgdG91Y2hlcyB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgY2hhbmdlZDogZXh0cmFjdENvb3JkcyhjaGFuZ2VkVG91Y2hlcyksXG4gICAgdGFyZ2V0OiBleHRyYWN0Q29vcmRzKHRhcmdldFRvdWNoZXMpLFxuICAgIGFsbDogZXh0cmFjdENvb3Jkcyh0b3VjaGVzKVxuICB9O1xufTtcblxuZnVuY3Rpb24gZXh0cmFjdENvb3Jkcyh0b3VjaGVzKSB7IFxuICBsZXQgYWN0aW9ucyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IHRvdWNoZXNbaV07XG4gICAgYWN0aW9uc1tpXSA9IHtcbiAgICAgIHg6IGNsaWVudFgsXG4gICAgICB5OiBjbGllbnRZXG4gICAgfTtcbiAgfVxuICByZXR1cm4gYWN0aW9ucztcbn1cblxuY29uc3QgZ2V0TmF0aXZlRXZlbnQgPSAoZSkgPT4gZS5vcmlnaW5hbEV2ZW50IHx8IGUubmF0aXZlRXZlbnQgfHwgZTtcblxuZXhwb3J0IGRlZmF1bHQgKGUsIHByb3BzKSA9PiB7XG4gIGNvbnN0IG5hdGl2ZUV2ZW50ID0gZ2V0TmF0aXZlRXZlbnQoZSk7XG4gIHJldHVybiAobmF0aXZlRXZlbnQudG91Y2hlcykgP1xuICAgIGNyZWF0ZVRvdWNoZXModG91Y2hFdmVudFRvVG91Y2hlcyhlKSwge1xuICAgICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICAgIGV2ZW50VG9Ub3VjaGVzOiB0b3VjaEV2ZW50VG9Ub3VjaGVzLFxuICAgICAgLi4ucHJvcHNcbiAgICB9KSA6XG4gICAgY3JlYXRlVG91Y2hlcyhtb3VzZUV2ZW50VG9Ub3VjaGVzKGUpLCB7XG4gICAgICBtb3ZlRXZlbnQ6ICdtb3VzZW1vdmUnLFxuICAgICAgZXZlbnRUb1RvdWNoZXM6IG1vdXNlRXZlbnRUb1RvdWNoZXMsXG4gICAgICAuLi5wcm9wc1xuICAgIH0pO1xufTtcbiJdfQ==

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(20);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(19);
	
	var _transformers = __webpack_require__(4);
	
	var _calc = __webpack_require__(2);
	
	var _easing = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var clampProgress = (0, _transformers.clamp)(0, 1);
	
	var NEXT_STEPS = {
	  loop: function (tween) {
	    return tween.start();
	  },
	  yoyo: function (tween) {
	    return tween.reverse().start();
	  },
	  flip: function (tween) {
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
	
	
	    this.elapsed += (0, _framesync.timeSinceLastFrame)() * playDirection;
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
	
	exports.default = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  if (args.length === 1) {
	    var props = args[0];
	
	    return new Tween(props);
	  } else {
	    var from = args[0],
	        to = args[1],
	        duration = args[2],
	        ease = args[3],
	        _props4 = args[4];
	
	    return new Tween(_extends({ from: from, to: to, duration: duration, ease: ease }, _props4));
	  }
	};
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3R3ZWVuLmpzIl0sIm5hbWVzIjpbImNsYW1wUHJvZ3Jlc3MiLCJORVhUX1NURVBTIiwibG9vcCIsInR3ZWVuIiwic3RhcnQiLCJ5b3lvIiwicmV2ZXJzZSIsImZsaXAiLCJUd2VlbiIsIm9uU3RhcnQiLCJwcm9wcyIsImR1cmF0aW9uIiwicGxheURpcmVjdGlvbiIsImVsYXBzZWQiLCJwcm9ncmVzcyIsInVwZGF0ZSIsImVhc2UiLCJmcm9tIiwidG8iLCJpc0FjdGlvbkNvbXBsZXRlIiwiaXNDb21wbGV0ZSIsImlzU3RlcFRha2VuIiwia2V5IiwibmV4dFN0ZXAiLCJjb3VudFByb3AiLCJzdGVwTWF4IiwiZ2V0UHJvcCIsInN0ZXBDb3VudCIsInNldFByb3BzIiwiZ2V0RWxhcHNlZCIsImRlZmF1bHRQcm9wcyIsImZsaXBDb3VudCIsInlveW9Db3VudCIsImxvb3BDb3VudCIsImFyZ3MiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IseUJBQU0sQ0FBTixFQUFTLENBQVQsQ0FBdEI7O0FBRUEsSUFBTUMsYUFBYTtBQUNqQkMsUUFBTSxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsTUFBTUMsS0FBTixFQUFYO0FBQUEsR0FEVztBQUVqQkMsUUFBTSxVQUFDRixLQUFEO0FBQUEsV0FBV0EsTUFBTUcsT0FBTixHQUFnQkYsS0FBaEIsRUFBWDtBQUFBLEdBRlc7QUFHakJHLFFBQU0sVUFBQ0osS0FBRDtBQUFBLFdBQVdBLE1BQU1JLElBQU4sR0FBYUgsS0FBYixFQUFYO0FBQUE7QUFIVyxDQUFuQjs7SUFNTUksSzs7Ozs7Ozs7O2tCQWVKQyxPLHNCQUFVO0FBQUEsaUJBQzRCLEtBQUtDLEtBRGpDO0FBQUEsUUFDQUMsUUFEQSxVQUNBQSxRQURBO0FBQUEsUUFDVUMsYUFEVixVQUNVQSxhQURWOzs7QUFHUixTQUFLQyxPQUFMLEdBQWdCRCxrQkFBa0IsQ0FBbkIsR0FBd0IsQ0FBeEIsR0FBNEJELFFBQTNDO0FBQ0EsU0FBS0csUUFBTCxHQUFnQixDQUFoQjtBQUNELEc7O2tCQUVEQyxNLHFCQUFTO0FBQUEsa0JBQzZDLEtBQUtMLEtBRGxEO0FBQUEsUUFDQ0MsUUFERCxXQUNDQSxRQUREO0FBQUEsUUFDV0ssSUFEWCxXQUNXQSxJQURYO0FBQUEsUUFDaUJDLElBRGpCLFdBQ2lCQSxJQURqQjtBQUFBLFFBQ3VCQyxFQUR2QixXQUN1QkEsRUFEdkI7QUFBQSxRQUMyQk4sYUFEM0IsV0FDMkJBLGFBRDNCOzs7QUFHUCxTQUFLQyxPQUFMLElBQWdCLHVDQUF1QkQsYUFBdkM7QUFDQSxTQUFLRSxRQUFMLEdBQWdCZCxjQUFjLGdDQUFxQixDQUFyQixFQUF3QlcsUUFBeEIsRUFBa0MsS0FBS0UsT0FBdkMsQ0FBZCxDQUFoQjs7QUFFQSxXQUFPLGdDQUFxQkksSUFBckIsRUFBMkJDLEVBQTNCLEVBQStCRixLQUFLLEtBQUtGLFFBQVYsQ0FBL0IsQ0FBUDtBQUNELEc7O2tCQUVESyxnQiwrQkFBbUI7QUFBQSxrQkFDcUMsS0FBS1QsS0FEMUM7QUFBQSxRQUNUQyxRQURTLFdBQ1RBLFFBRFM7QUFBQSxRQUNDQyxhQURELFdBQ0NBLGFBREQ7QUFBQSxRQUNnQlAsSUFEaEIsV0FDZ0JBLElBRGhCO0FBQUEsUUFDc0JILElBRHRCLFdBQ3NCQSxJQUR0QjtBQUFBLFFBQzRCSyxJQUQ1QixXQUM0QkEsSUFENUI7O0FBRWpCLFFBQUlhLGFBQWNSLGtCQUFrQixDQUFuQixHQUF5QixLQUFLQyxPQUFMLElBQWdCRixRQUF6QyxHQUFzRCxLQUFLRSxPQUFMLElBQWdCLENBQXZGOztBQUVBLFFBQUlPLGVBQWVmLFFBQVFILElBQVIsSUFBZ0JLLElBQS9CLENBQUosRUFBMEM7QUFDeEMsVUFBSWMsY0FBYyxLQUFsQjs7QUFFQSxXQUFLLElBQUlDLEdBQVQsSUFBZ0JyQixVQUFoQixFQUE0QjtBQUMxQixZQUFNc0IsV0FBV3RCLFdBQVdxQixHQUFYLENBQWpCO0FBQ0EsWUFBTUUsWUFBWUYsTUFBTSxPQUF4QjtBQUNBLFlBQU1HLFVBQVUsS0FBS0MsT0FBTCxDQUFhSixHQUFiLENBQWhCO0FBQ0EsWUFBTUssWUFBWSxLQUFLRCxPQUFMLENBQWFGLFNBQWIsQ0FBbEI7O0FBRUEsWUFBSUMsVUFBVUUsU0FBZCxFQUF5QjtBQUFBOztBQUN2QixlQUFLQyxRQUFMLDRCQUNHSixTQURILElBQ2VHLFlBQVksQ0FEM0I7QUFHQUosbUJBQVMsSUFBVDtBQUNBRix3QkFBYyxJQUFkO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJQSxXQUFKLEVBQWlCRCxhQUFhLEtBQWI7QUFDbEI7O0FBRUQsV0FBT0EsVUFBUDtBQUNELEc7O2tCQUVEUyxVLHlCQUFhO0FBQ1gsV0FBTyxLQUFLaEIsT0FBWjtBQUNELEc7O2tCQUVETixJLG1CQUFPO0FBQ0wsU0FBS00sT0FBTCxHQUFlLEtBQUtILEtBQUwsQ0FBV0MsUUFBWCxHQUFzQixLQUFLRSxPQUExQztBQURLLGVBRThCLENBQUMsS0FBS0gsS0FBTCxDQUFXUSxFQUFaLEVBQWdCLEtBQUtSLEtBQUwsQ0FBV08sSUFBM0IsQ0FGOUI7QUFFSixTQUFLUCxLQUFMLENBQVdPLElBRlA7QUFFYSxTQUFLUCxLQUFMLENBQVdRLEVBRnhCOztBQUdMLFdBQU8sSUFBUDtBQUNELEc7O2tCQUVEWixPLHNCQUFVO0FBQ1IsU0FBS0ksS0FBTCxDQUFXRSxhQUFYLElBQTRCLENBQUMsQ0FBN0I7QUFDQSxXQUFPLElBQVA7QUFDRCxHOzs7OztBQXhFR0osSyxDQUNHc0IsWSxHQUFlO0FBQ3BCbkIsWUFBVSxHQURVO0FBRXBCSyx1QkFGb0I7QUFHcEJDLFFBQU0sQ0FIYztBQUlwQkMsTUFBSSxDQUpnQjtBQUtwQlgsUUFBTSxDQUxjO0FBTXBCd0IsYUFBVyxDQU5TO0FBT3BCMUIsUUFBTSxDQVBjO0FBUXBCMkIsYUFBVyxDQVJTO0FBU3BCOUIsUUFBTSxDQVRjO0FBVXBCK0IsYUFBVyxDQVZTO0FBV3BCckIsaUJBQWU7QUFYSyxDOztrQkEwRVQsWUFBYTtBQUFBLG9DQUFUc0IsSUFBUztBQUFUQSxRQUFTO0FBQUE7O0FBQzFCLE1BQUlBLEtBQUtDLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFBQSxRQUNiekIsS0FEYSxHQUNId0IsSUFERzs7QUFFckIsV0FBTyxJQUFJMUIsS0FBSixDQUFVRSxLQUFWLENBQVA7QUFDRCxHQUhELE1BR087QUFBQSxRQUNHTyxJQURILEdBQ3VDaUIsSUFEdkM7QUFBQSxRQUNTaEIsRUFEVCxHQUN1Q2dCLElBRHZDO0FBQUEsUUFDYXZCLFFBRGIsR0FDdUN1QixJQUR2QztBQUFBLFFBQ3VCbEIsSUFEdkIsR0FDdUNrQixJQUR2QztBQUFBLFFBQzZCeEIsT0FEN0IsR0FDdUN3QixJQUR2Qzs7QUFFTCxXQUFPLElBQUkxQixLQUFKLFlBQVlTLFVBQVosRUFBa0JDLE1BQWxCLEVBQXNCUCxrQkFBdEIsRUFBZ0NLLFVBQWhDLElBQXlDTixPQUF6QyxFQUFQO0FBQ0Q7QUFDRixDIiwiZmlsZSI6InR3ZWVuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzLmhhbGwvUHJvamVjdHMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgeyB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuaW1wb3J0IHsgY2xhbXAgfSBmcm9tICcuLi9pbmMvdHJhbnNmb3JtZXJzJztcbmltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGVhc2VPdXQgfSBmcm9tICcuLi9pbmMvZWFzaW5nJztcblxuY29uc3QgY2xhbXBQcm9ncmVzcyA9IGNsYW1wKDAsIDEpO1xuXG5jb25zdCBORVhUX1NURVBTID0ge1xuICBsb29wOiAodHdlZW4pID0+IHR3ZWVuLnN0YXJ0KCksXG4gIHlveW86ICh0d2VlbikgPT4gdHdlZW4ucmV2ZXJzZSgpLnN0YXJ0KCksXG4gIGZsaXA6ICh0d2VlbikgPT4gdHdlZW4uZmxpcCgpLnN0YXJ0KClcbn07XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIGVhc2U6IGVhc2VPdXQsXG4gICAgZnJvbTogMCxcbiAgICB0bzogMSxcbiAgICBmbGlwOiAwLFxuICAgIGZsaXBDb3VudDogMCxcbiAgICB5b3lvOiAwLFxuICAgIHlveW9Db3VudDogMCxcbiAgICBsb29wOiAwLFxuICAgIGxvb3BDb3VudDogMCxcbiAgICBwbGF5RGlyZWN0aW9uOiAxXG4gIH07XG5cbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IGR1cmF0aW9uLCBwbGF5RGlyZWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5lbGFwc2VkID0gKHBsYXlEaXJlY3Rpb24gPT09IDEpID8gMCA6IGR1cmF0aW9uO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHsgZHVyYXRpb24sIGVhc2UsIGZyb20sIHRvLCBwbGF5RGlyZWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5lbGFwc2VkICs9IHRpbWVTaW5jZUxhc3RGcmFtZSgpICogcGxheURpcmVjdGlvbjtcbiAgICB0aGlzLnByb2dyZXNzID0gY2xhbXBQcm9ncmVzcyhnZXRQcm9ncmVzc0Zyb21WYWx1ZSgwLCBkdXJhdGlvbiwgdGhpcy5lbGFwc2VkKSk7XG5cbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZnJvbSwgdG8sIGVhc2UodGhpcy5wcm9ncmVzcykpO1xuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICBjb25zdCB7IGR1cmF0aW9uLCBwbGF5RGlyZWN0aW9uLCB5b3lvLCBsb29wLCBmbGlwIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBpc0NvbXBsZXRlID0gKHBsYXlEaXJlY3Rpb24gPT09IDEpID8gKHRoaXMuZWxhcHNlZCA+PSBkdXJhdGlvbikgOiAodGhpcy5lbGFwc2VkIDw9IDApO1xuXG4gICAgaWYgKGlzQ29tcGxldGUgJiYgKHlveW8gfHwgbG9vcCB8fCBmbGlwKSkge1xuICAgICAgbGV0IGlzU3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgIGNvbnN0IG5leHRTdGVwID0gTkVYVF9TVEVQU1trZXldO1xuICAgICAgICBjb25zdCBjb3VudFByb3AgPSBrZXkgKyAnQ291bnQnO1xuICAgICAgICBjb25zdCBzdGVwTWF4ID0gdGhpcy5nZXRQcm9wKGtleSk7XG4gICAgICAgIGNvbnN0IHN0ZXBDb3VudCA9IHRoaXMuZ2V0UHJvcChjb3VudFByb3ApO1xuXG4gICAgICAgIGlmIChzdGVwTWF4ID4gc3RlcENvdW50KSB7XG4gICAgICAgICAgdGhpcy5zZXRQcm9wcyh7XG4gICAgICAgICAgICBbY291bnRQcm9wXTogc3RlcENvdW50ICsgMVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG5leHRTdGVwKHRoaXMpO1xuICAgICAgICAgIGlzU3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdGVwVGFrZW4pIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNDb21wbGV0ZTtcbiAgfVxuXG4gIGdldEVsYXBzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZDtcbiAgfVxuXG4gIGZsaXAoKSB7XG4gICAgdGhpcy5lbGFwc2VkID0gdGhpcy5wcm9wcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcbiAgICBbdGhpcy5wcm9wcy5mcm9tLCB0aGlzLnByb3BzLnRvXSA9IFt0aGlzLnByb3BzLnRvLCB0aGlzLnByb3BzLmZyb21dO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmV2ZXJzZSgpIHtcbiAgICB0aGlzLnByb3BzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKC4uLmFyZ3MpID0+IHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgWyBwcm9wcyBdID0gYXJncztcbiAgICByZXR1cm4gbmV3IFR3ZWVuKHByb3BzKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBbIGZyb20sIHRvLCBkdXJhdGlvbiwgZWFzZSwgcHJvcHMgXSA9IGFyZ3M7XG4gICAgcmV0dXJuIG5ldyBUd2Vlbih7IGZyb20sIHRvLCBkdXJhdGlvbiwgZWFzZSwgLi4ucHJvcHMgfSk7XG4gIH1cbn07XG4iXX0=

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _chain = __webpack_require__(7);
	
	var _chain2 = _interopRequireDefault(_chain);
	
	var _parallel = __webpack_require__(12);
	
	var _parallel2 = _interopRequireDefault(_parallel);
	
	var _delay = __webpack_require__(11);
	
	var _delay2 = _interopRequireDefault(_delay);
	
	var _utils = __webpack_require__(25);
	
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3N0YWdnZXIuanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsImludGVydmFsIiwib25Db21wbGV0ZSIsImludGVydmFsSXNGdW5jdGlvbiIsIm1hcCIsImFjdGlvbiIsImkiLCJ0aW1lVG9EZWxheSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztrQkFZZSxVQUFDQSxPQUFELEVBQVVDLFFBQVYsRUFBb0JDLFVBQXBCLEVBQW1DO0FBQ2hELE1BQU1DLHFCQUFxQixtQkFBT0YsUUFBUCxDQUEzQjs7QUFFQSxTQUFPLHdCQUFTRCxRQUFRSSxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDekMsUUFBTUMsY0FBZUosa0JBQUQsR0FBdUJGLFNBQVNLLENBQVQsQ0FBdkIsR0FBcUNBLElBQUlMLFFBQTdEO0FBQ0EsV0FBTyxxQkFBTSxDQUNYLHFCQUFNTSxXQUFOLENBRFcsRUFFWEYsTUFGVyxDQUFOLENBQVA7QUFJRCxHQU5lLENBQVQsRUFNSCxFQUFFSCxzQkFBRixFQU5HLENBQVA7QUFPRCxDIiwiZmlsZSI6InN0YWdnZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMuaGFsbC9Qcm9qZWN0cy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaW4gZnJvbSAnLi9jaGFpbic7XG5pbXBvcnQgcGFyYWxsZWwgZnJvbSAnLi9wYXJhbGxlbCc7XG5pbXBvcnQgZGVsYXkgZnJvbSAnLi9kZWxheSc7XG5pbXBvcnQgeyBpc0Z1bmMgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcGFyYWxsZWwgQWN0aW9uIGNvbXBvc2VkIG9mIGNoYWluZWRcbiAqIGRlbGF5IGFuZCBhY3Rpb25zLiBJbnRlcnZhbCBjYW4gYmUgZWl0aGVyIGEgbnVtYmVyXG4gKiB0byBtdWx0aXBseSBieSBgaWAgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgYGlgXG4gKlxuICogU3RyYWlnaHQgY3JpYmJlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi8yNGM3MmY1MTNlNDhmMGJkYzQwODIwYjQzMjYyMzI4ZmUyYzMwMWQ0L0xpYnJhcmllcy9BbmltYXRlZC9zcmMvQW5pbWF0ZWRJbXBsZW1lbnRhdGlvbi5qcyNMMjAzMVxuICogXiBUaGlzIGZ1bmN0aW9uIHNvbGQgYSBwcmV2aW91c2x5LWNvbmZsaWN0ZWQgbWUgb24gdGhlIG1lcml0IG9mIG1vdmluZyBmcm9tXG4gKiBqUXVlcnktc3R5bGUgbXVsdGktcHJvcGVydHkgYW5pbWF0aW9ucyB0byBzaW5nbGUtcHJvcGVydHkuXG4gKiBAcGFyYW0gIHthcnJheX0gYWN0aW9uc1xuICogQHBhcmFtICB7ZnVuY3Rpb24gfCBudW1iZXJ9IGludGVydmFsXG4gKiBAcmV0dXJuIHtBY3Rpb259XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChhY3Rpb25zLCBpbnRlcnZhbCwgb25Db21wbGV0ZSkgPT4ge1xuICBjb25zdCBpbnRlcnZhbElzRnVuY3Rpb24gPSBpc0Z1bmMoaW50ZXJ2YWwpO1xuXG4gIHJldHVybiBwYXJhbGxlbChhY3Rpb25zLm1hcCgoYWN0aW9uLCBpKSA9PiB7XG4gICAgY29uc3QgdGltZVRvRGVsYXkgPSAoaW50ZXJ2YWxJc0Z1bmN0aW9uKSA/IGludGVydmFsKGkpIDogaSAqIGludGVydmFsO1xuICAgIHJldHVybiBjaGFpbihbXG4gICAgICBkZWxheSh0aW1lVG9EZWxheSksXG4gICAgICBhY3Rpb25cbiAgICBdKTtcbiAgfSksIHsgb25Db21wbGV0ZSB9KTtcbn07XG4iXX0=

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(20);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(19);
	
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
	  };
	
	  Value.prototype.update = function update() {
	    return this.toUpdate;
	  };
	
	  return Value;
	}(_2.default);
	
	Value.defaultProps = {
	  passive: true
	};
	
	exports.default = function (current, onUpdate) {
	  return new Value({ current: current, onUpdate: onUpdate });
	};
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3ZhbHVlLmpzIl0sIm5hbWVzIjpbIlZhbHVlIiwic2V0IiwidiIsInRvVXBkYXRlIiwic2NoZWR1bGVkVXBkYXRlIiwidXBkYXRlIiwiZGVmYXVsdFByb3BzIiwicGFzc2l2ZSIsImN1cnJlbnQiLCJvblVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsSzs7Ozs7Ozs7O2tCQUtKQyxHLGdCQUFJQyxDLEVBQUc7QUFDTCxTQUFLQyxRQUFMLEdBQWdCRCxDQUFoQjtBQUNBLGtDQUFjLEtBQUtFLGVBQW5CO0FBQ0QsRzs7a0JBRURDLE0scUJBQVM7QUFDUCxXQUFPLEtBQUtGLFFBQVo7QUFDRCxHOzs7OztBQVpHSCxLLENBQ0dNLFksR0FBZTtBQUNwQkMsV0FBUztBQURXLEM7O2tCQWNULFVBQUNDLE9BQUQsRUFBVUMsUUFBVjtBQUFBLFNBQXVCLElBQUlULEtBQUosQ0FBVSxFQUFFUSxnQkFBRixFQUFXQyxrQkFBWCxFQUFWLENBQXZCO0FBQUEsQyIsImZpbGUiOiJ2YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy5oYWxsL1Byb2plY3RzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgb25GcmFtZVVwZGF0ZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5cbmNsYXNzIFZhbHVlIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH07XG5cbiAgc2V0KHYpIHtcbiAgICB0aGlzLnRvVXBkYXRlID0gdjtcbiAgICBvbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy50b1VwZGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VycmVudCwgb25VcGRhdGUpID0+IG5ldyBWYWx1ZSh7IGN1cnJlbnQsIG9uVXBkYXRlIH0pO1xuIl19

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
	var _onNextFrame = __webpack_require__(27);
	
	var _onNextFrame2 = _interopRequireDefault(_onNextFrame);
	
	var _createRenderStep = __webpack_require__(28);
	
	var _createRenderStep2 = _interopRequireDefault(_createRenderStep);
	
	var _utils = __webpack_require__(25);
	
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvaW5kZXguanMiXSwibmFtZXMiOlsid2lsbFJlbmRlck5leHRGcmFtZSIsIk1BWF9FTEFQU0VEIiwiY3VycmVudEZyYW1lc3RhbXAiLCJlbGFwc2VkIiwiZGlsYXRpb24iLCJzdGFydFJlbmRlckxvb3AiLCJwcm9jZXNzRnJhbWUiLCJmcmFtZVN0YXJ0IiwiZnJhbWVVcGRhdGUiLCJmcmFtZVJlbmRlciIsImZyYW1lRW5kIiwiZnJhbWVzdGFtcCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJwcm9jZXNzIiwib25GcmFtZVN0YXJ0Iiwic2NoZWR1bGUiLCJvbkZyYW1lVXBkYXRlIiwib25GcmFtZVJlbmRlciIsIm9uRnJhbWVFbmQiLCJjYW5jZWxPbkZyYW1lU3RhcnQiLCJjYW5jZWwiLCJjYW5jZWxPbkZyYW1lVXBkYXRlIiwiY2FuY2VsT25GcmFtZVJlbmRlciIsImNhbmNlbE9uRnJhbWVFbmQiLCJ0aW1lU2luY2VMYXN0RnJhbWUiLCJjdXJyZW50RnJhbWVUaW1lc3RhbXAiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBSUEsc0JBQXNCLEtBQTFCOztBQUVBOzs7O0FBSUEsSUFBTUMsY0FBYyxFQUFwQjs7QUFFQTs7OztBQUlBLElBQUlDLG9CQUFvQix5QkFBeEI7O0FBRUEsSUFBSUMsVUFBVSxDQUFkOztBQUVBOzs7OztBQUtBLElBQUlDLFdBQVcsQ0FBZjs7QUFFQSxTQUFTQyxlQUFULEdBQTJCO0FBQ3pCLE1BQUksQ0FBQ0wsbUJBQUwsRUFBMEI7QUFDeEJBLDBCQUFzQixJQUF0QjtBQUNBLCtCQUFZTSxZQUFaO0FBQ0Q7QUFDRjs7QUFFRCxJQUFNQyxhQUFhLGdDQUFpQkYsZUFBakIsQ0FBbkI7QUFDQSxJQUFNRyxjQUFjLGdDQUFpQkgsZUFBakIsQ0FBcEI7QUFDQSxJQUFNSSxjQUFjLGdDQUFpQkosZUFBakIsQ0FBcEI7QUFDQSxJQUFNSyxXQUFXLGdDQUFpQkwsZUFBakIsQ0FBakI7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkssVUFBdEIsRUFBa0M7QUFDaENYLHdCQUFzQixLQUF0QjtBQUNBRyxZQUFVUyxLQUFLQyxHQUFMLENBQVNELEtBQUtFLEdBQUwsQ0FBU0gsYUFBYVQsaUJBQXRCLEVBQXlDRCxXQUF6QyxDQUFULEVBQWdFLENBQWhFLElBQXFFRyxRQUEvRTtBQUNBRixzQkFBb0JTLFVBQXBCOztBQUVBSixhQUFXUSxPQUFYO0FBQ0FQLGNBQVlPLE9BQVo7QUFDQU4sY0FBWU0sT0FBWjtBQUNBTCxXQUFTSyxPQUFUO0FBQ0Q7O0FBRU0sSUFBTUMsc0NBQWVULFdBQVdVLFFBQWhDO0FBQ0EsSUFBTUMsd0NBQWdCVixZQUFZUyxRQUFsQztBQUNBLElBQU1FLHdDQUFnQlYsWUFBWVEsUUFBbEM7QUFDQSxJQUFNRyxrQ0FBYVYsU0FBU08sUUFBNUI7QUFDQSxJQUFNSSxrREFBcUJkLFdBQVdlLE1BQXRDO0FBQ0EsSUFBTUMsb0RBQXNCZixZQUFZYyxNQUF4QztBQUNBLElBQU1FLG9EQUFzQmYsWUFBWWEsTUFBeEM7QUFDQSxJQUFNRyw4Q0FBbUJmLFNBQVNZLE1BQWxDOztBQUVBLElBQU1JLGtEQUFxQjtBQUFBLFNBQU12QixPQUFOO0FBQUEsQ0FBM0I7QUFDQSxJQUFNd0Isd0RBQXdCO0FBQUEsU0FBTXpCLGlCQUFOO0FBQUEsQ0FBOUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMuaGFsbC9Qcm9qZWN0cy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb25OZXh0RnJhbWUgZnJvbSAnLi9vbi1uZXh0LWZyYW1lJztcbmltcG9ydCBjcmVhdGVSZW5kZXJTdGVwIGZyb20gJy4vY3JlYXRlLXJlbmRlci1zdGVwJztcbmltcG9ydCB7IGN1cnJlbnRUaW1lIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxubGV0IHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcblxuLyoqXG4gKiBNYXhpbXVtIHBlcm1pdHRlZCBtcyBzaW5jZSBsYXN0IGZyYW1lXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG5jb25zdCBNQVhfRUxBUFNFRCA9IDIwO1xuXG4vKipcbiAqIEN1cnJlbnQgZnJhbWVzdGFtcFxuICogQHR5cGUge051bWJlcn1cbiAqL1xubGV0IGN1cnJlbnRGcmFtZXN0YW1wID0gY3VycmVudFRpbWUoKTtcblxubGV0IGVsYXBzZWQgPSAwO1xuXG4vKipcbiAqIEZhY3RvciB0byBtdWx0aXBseSBgZWxhcHNlZGAgYnkgLSBcbiAqIDAuNSB3b3VsZCBiZSBzbG93IG1vdGlvbiwgMiB3b3VsZCBiZSBmYXN0XG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG5sZXQgZGlsYXRpb24gPSAxO1xuXG5mdW5jdGlvbiBzdGFydFJlbmRlckxvb3AoKSB7XG4gIGlmICghd2lsbFJlbmRlck5leHRGcmFtZSkge1xuICAgIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSB0cnVlO1xuICAgIG9uTmV4dEZyYW1lKHByb2Nlc3NGcmFtZSk7XG4gIH1cbn1cblxuY29uc3QgZnJhbWVTdGFydCA9IGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKTtcbmNvbnN0IGZyYW1lVXBkYXRlID0gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApO1xuY29uc3QgZnJhbWVSZW5kZXIgPSBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCk7XG5jb25zdCBmcmFtZUVuZCA9IGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKTtcblxuZnVuY3Rpb24gcHJvY2Vzc0ZyYW1lKGZyYW1lc3RhbXApIHtcbiAgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnRGcmFtZXN0YW1wLCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gIGN1cnJlbnRGcmFtZXN0YW1wID0gZnJhbWVzdGFtcDtcblxuICBmcmFtZVN0YXJ0LnByb2Nlc3MoKTtcbiAgZnJhbWVVcGRhdGUucHJvY2VzcygpO1xuICBmcmFtZVJlbmRlci5wcm9jZXNzKCk7XG4gIGZyYW1lRW5kLnByb2Nlc3MoKTtcbn1cblxuZXhwb3J0IGNvbnN0IG9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuc2NoZWR1bGU7XG5leHBvcnQgY29uc3Qgb25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLnNjaGVkdWxlO1xuZXhwb3J0IGNvbnN0IG9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5zY2hlZHVsZTtcbmV4cG9ydCBjb25zdCBvbkZyYW1lRW5kID0gZnJhbWVFbmQuc2NoZWR1bGU7XG5leHBvcnQgY29uc3QgY2FuY2VsT25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5jYW5jZWw7XG5leHBvcnQgY29uc3QgY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLmNhbmNlbDtcbmV4cG9ydCBjb25zdCBjYW5jZWxPbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuY2FuY2VsO1xuZXhwb3J0IGNvbnN0IGNhbmNlbE9uRnJhbWVFbmQgPSBmcmFtZUVuZC5jYW5jZWw7XG5cbmV4cG9ydCBjb25zdCB0aW1lU2luY2VMYXN0RnJhbWUgPSAoKSA9PiBlbGFwc2VkO1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9ICgpID0+IGN1cnJlbnRGcmFtZXN0YW1wO1xuIl19

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _framesync = __webpack_require__(19);
	
	var _calc = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Action = function () {
	  // lawsuit - sorry
	  function Action(props) {
	    _classCallCheck(this, Action);
	
	    this.scheduledUpdate = this.scheduledUpdate.bind(this);
	
	    this.props = _extends({}, this.constructor.defaultProps);
	
	    this.setProps(props);
	
	    this.current = props.current || props.from || 0;
	  }
	
	  Action.prototype.start = function start() {
	    var _props = this.props,
	        onStart = _props.onStart,
	        _onStart = _props._onStart,
	        passive = _props.passive;
	
	
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
	    var _props2 = this.props,
	        onStop = _props2.onStop,
	        _onStop = _props2._onStop,
	        passive = _props2.passive;
	
	
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
	    var _props3 = this.props,
	        onComplete = _props3.onComplete,
	        _onComplete = _props3._onComplete;
	
	
	    this.stop();
	
	    if (this.onComplete) this.onComplete();
	    if (onComplete) onComplete(this);
	    if (_onComplete) _onComplete(this);
	
	    return this;
	  };
	
	  Action.prototype.scheduledUpdate = function scheduledUpdate() {
	    this.lastUpdated = (0, _framesync.timeSinceLastFrame)();
	    this.prev = this.current;
	
	    var _props4 = this.props,
	        onUpdate = _props4.onUpdate,
	        passive = _props4.passive;
	
	
	    if (this.update) {
	      this.current = this.update(this.current);
	    }
	
	    if (onUpdate) onUpdate(this.current, this);
	    this.fireListeners();
	
	    if (!passive && this._isActive) {
	      (0, _framesync.onFrameUpdate)(this.scheduledUpdate);
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
	
	  Action.prototype.output = function output(func) {
	    this.props.onUpdate = func;
	    return this;
	  };
	
	  Action.prototype.get = function get() {
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFjdGlvbiIsInByb3BzIiwic2NoZWR1bGVkVXBkYXRlIiwiYmluZCIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdFByb3BzIiwic2V0UHJvcHMiLCJjdXJyZW50IiwiZnJvbSIsInN0YXJ0Iiwib25TdGFydCIsIl9vblN0YXJ0IiwicGFzc2l2ZSIsIl9pc0FjdGl2ZSIsInN0b3AiLCJvblN0b3AiLCJfb25TdG9wIiwiY29tcGxldGUiLCJvbkNvbXBsZXRlIiwiX29uQ29tcGxldGUiLCJsYXN0VXBkYXRlZCIsInByZXYiLCJvblVwZGF0ZSIsInVwZGF0ZSIsImZpcmVMaXN0ZW5lcnMiLCJpc0FjdGlvbkNvbXBsZXRlIiwib3V0cHV0IiwiZnVuYyIsImdldCIsInNldCIsInYiLCJnZXRQcm9wIiwia2V5IiwiZ2V0VmVsb2NpdHkiLCJpc0FjdGl2ZSIsImFkZExpc3RlbmVyIiwibGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJudW1MaXN0ZW5lcnMiLCJpbmRleE9mIiwicHVzaCIsInJlbW92ZUxpc3RlbmVyIiwibGlzdGVuZXJJbmRleCIsInNwbGljZSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0lBRU1BLE07QUFBUztBQUNiLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtDLGVBQUwsR0FBdUIsS0FBS0EsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkI7O0FBRUEsU0FBS0YsS0FBTCxnQkFDSyxLQUFLRyxXQUFMLENBQWlCQyxZQUR0Qjs7QUFJQSxTQUFLQyxRQUFMLENBQWNMLEtBQWQ7O0FBRUEsU0FBS00sT0FBTCxHQUFlTixNQUFNTSxPQUFOLElBQWlCTixNQUFNTyxJQUF2QixJQUErQixDQUE5QztBQUNEOzttQkFFREMsSyxvQkFBUTtBQUFBLGlCQUNpQyxLQUFLUixLQUR0QztBQUFBLFFBQ0VTLE9BREYsVUFDRUEsT0FERjtBQUFBLFFBQ1dDLFFBRFgsVUFDV0EsUUFEWDtBQUFBLFFBQ3FCQyxPQURyQixVQUNxQkEsT0FEckI7OztBQUdOLFFBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1osV0FBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUNBLG9DQUFjLEtBQUtYLGVBQW5CO0FBQ0Q7O0FBRUQsUUFBSSxLQUFLUSxPQUFULEVBQWtCLEtBQUtBLE9BQUw7QUFDbEIsUUFBSUEsT0FBSixFQUFhQSxRQUFRLElBQVI7QUFDYixRQUFJQyxRQUFKLEVBQWNBLFNBQVMsSUFBVDs7QUFFZCxXQUFPLElBQVA7QUFDRCxHOzttQkFFREcsSSxtQkFBTztBQUFBLGtCQUNnQyxLQUFLYixLQURyQztBQUFBLFFBQ0djLE1BREgsV0FDR0EsTUFESDtBQUFBLFFBQ1dDLE9BRFgsV0FDV0EsT0FEWDtBQUFBLFFBQ29CSixPQURwQixXQUNvQkEsT0FEcEI7OztBQUdMLFFBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1osV0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNBLDBDQUFvQixLQUFLWCxlQUF6QjtBQUNEOztBQUVELFFBQUksS0FBS2EsTUFBVCxFQUFpQixLQUFLQSxNQUFMO0FBQ2pCLFFBQUlBLE1BQUosRUFBWUEsT0FBTyxJQUFQO0FBQ1osUUFBSUMsT0FBSixFQUFhQSxRQUFRLElBQVI7O0FBRWIsV0FBTyxJQUFQO0FBQ0QsRzs7bUJBRURDLFEsdUJBQVc7QUFBQSxrQkFDMkIsS0FBS2hCLEtBRGhDO0FBQUEsUUFDRGlCLFVBREMsV0FDREEsVUFEQztBQUFBLFFBQ1dDLFdBRFgsV0FDV0EsV0FEWDs7O0FBR1QsU0FBS0wsSUFBTDs7QUFFQSxRQUFJLEtBQUtJLFVBQVQsRUFBcUIsS0FBS0EsVUFBTDtBQUNyQixRQUFJQSxVQUFKLEVBQWdCQSxXQUFXLElBQVg7QUFDaEIsUUFBSUMsV0FBSixFQUFpQkEsWUFBWSxJQUFaOztBQUVqQixXQUFPLElBQVA7QUFDRCxHOzttQkFFRGpCLGUsOEJBQWtCO0FBQ2hCLFNBQUtrQixXQUFMLEdBQW1CLG9DQUFuQjtBQUNBLFNBQUtDLElBQUwsR0FBWSxLQUFLZCxPQUFqQjs7QUFGZ0Isa0JBSWMsS0FBS04sS0FKbkI7QUFBQSxRQUlScUIsUUFKUSxXQUlSQSxRQUpRO0FBQUEsUUFJRVYsT0FKRixXQUlFQSxPQUpGOzs7QUFNaEIsUUFBSSxLQUFLVyxNQUFULEVBQWlCO0FBQ2YsV0FBS2hCLE9BQUwsR0FBZSxLQUFLZ0IsTUFBTCxDQUFZLEtBQUtoQixPQUFqQixDQUFmO0FBQ0Q7O0FBRUQsUUFBSWUsUUFBSixFQUFjQSxTQUFTLEtBQUtmLE9BQWQsRUFBdUIsSUFBdkI7QUFDZCxTQUFLaUIsYUFBTDs7QUFFQSxRQUFJLENBQUNaLE9BQUQsSUFBWSxLQUFLQyxTQUFyQixFQUFnQztBQUM5QixvQ0FBYyxLQUFLWCxlQUFuQjtBQUNEOztBQUVELFFBQUksS0FBS3VCLGdCQUFMLElBQXlCLEtBQUtBLGdCQUFMLEVBQTdCLEVBQXNEO0FBQ3BELFdBQUtSLFFBQUw7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDRCxHOzttQkFFRFgsUSxxQkFBU0wsSyxFQUFPO0FBQ2QsU0FBS0EsS0FBTCxnQkFDSyxLQUFLQSxLQURWLEVBRUtBLEtBRkw7QUFJQSxXQUFPLElBQVA7QUFDRCxHOzttQkFFRHlCLE0sbUJBQU9DLEksRUFBTTtBQUNYLFNBQUsxQixLQUFMLENBQVdxQixRQUFYLEdBQXNCSyxJQUF0QjtBQUNBLFdBQU8sSUFBUDtBQUNELEc7O21CQUVEQyxHLGtCQUFNO0FBQ0osV0FBTyxLQUFLckIsT0FBWjtBQUNELEc7O21CQUVEc0IsRyxnQkFBSUMsQyxFQUFHO0FBQ0wsU0FBS3ZCLE9BQUwsR0FBZXVCLENBQWY7QUFDQSxXQUFPLElBQVA7QUFDRCxHOzttQkFFREMsTyxvQkFBUUMsRyxFQUFLO0FBQ1gsV0FBTyxLQUFLL0IsS0FBTCxDQUFXK0IsR0FBWCxDQUFQO0FBQ0QsRzs7bUJBRURDLFcsMEJBQWM7QUFDWixXQUFPLDBCQUFlLEtBQUsxQixPQUFMLEdBQWUsS0FBS2MsSUFBbkMsRUFBeUMsS0FBS0QsV0FBOUMsQ0FBUDtBQUNELEc7O21CQUVEYyxRLHVCQUFXO0FBQ1QsV0FBTyxLQUFLckIsU0FBWjtBQUNELEc7O21CQUVEc0IsVyx3QkFBWUMsUSxFQUFVO0FBQ3BCLFNBQUtDLFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxJQUFrQixFQUFuQztBQUNBLFNBQUtDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxJQUFxQixDQUF6QztBQUNBLFFBQUksS0FBS0QsU0FBTCxDQUFlRSxPQUFmLENBQXVCSCxRQUF2QixNQUFxQyxDQUFDLENBQTFDLEVBQTZDO0FBQzNDLFdBQUtDLFNBQUwsQ0FBZUcsSUFBZixDQUFvQkosUUFBcEI7QUFDQSxXQUFLRSxZQUFMO0FBQ0Q7QUFDRCxXQUFPLElBQVA7QUFDRCxHOzttQkFFREcsYywyQkFBZUwsUSxFQUFVO0FBQ3ZCLFFBQU1NLGdCQUFpQixLQUFLTCxTQUFOLEdBQW1CLEtBQUtBLFNBQUwsQ0FBZUUsT0FBZixDQUF1QkgsUUFBdkIsQ0FBbkIsR0FBc0QsQ0FBQyxDQUE3RTtBQUNBLFFBQUlNLGtCQUFrQixDQUFDLENBQXZCLEVBQTBCO0FBQ3hCLFdBQUtKLFlBQUw7QUFDQSxXQUFLRCxTQUFMLENBQWVNLE1BQWYsQ0FBc0JELGFBQXRCLEVBQXFDLENBQXJDO0FBQ0Q7QUFDRCxXQUFPLElBQVA7QUFDRCxHOzttQkFFRGxCLGEsNEJBQWdCO0FBQ2QsUUFBTWpCLFVBQVUsS0FBS3FCLEdBQUwsRUFBaEI7QUFDQSxTQUFLLElBQUlnQixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS04sWUFBekIsRUFBdUNNLEdBQXZDLEVBQTRDO0FBQzFDLFdBQUtQLFNBQUwsQ0FBZU8sQ0FBZixFQUFrQnJDLE9BQWxCLEVBQTJCLElBQTNCO0FBQ0Q7QUFDRCxXQUFPLElBQVA7QUFDRCxHOzs7OztrQkFHWVAsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy5oYWxsL1Byb2plY3RzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9uRnJhbWVVcGRhdGUsIGNhbmNlbE9uRnJhbWVVcGRhdGUsIHRpbWVTaW5jZUxhc3RGcmFtZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBzcGVlZFBlclNlY29uZCB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuY2xhc3MgQWN0aW9uIHsgLy8gbGF3c3VpdCAtIHNvcnJ5XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5zY2hlZHVsZWRVcGRhdGUgPSB0aGlzLnNjaGVkdWxlZFVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzXG4gICAgfTtcblxuICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuXG4gICAgdGhpcy5jdXJyZW50ID0gcHJvcHMuY3VycmVudCB8fCBwcm9wcy5mcm9tIHx8IDA7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBjb25zdCB7IG9uU3RhcnQsIF9vblN0YXJ0LCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG4gICAgICBvbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB0aGlzLm9uU3RhcnQoKTtcbiAgICBpZiAob25TdGFydCkgb25TdGFydCh0aGlzKTtcbiAgICBpZiAoX29uU3RhcnQpIF9vblN0YXJ0KHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNvbnN0IHsgb25TdG9wLCBfb25TdG9wLCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgY2FuY2VsT25GcmFtZVVwZGF0ZSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdG9wKSB0aGlzLm9uU3RvcCgpO1xuICAgIGlmIChvblN0b3ApIG9uU3RvcCh0aGlzKTtcbiAgICBpZiAoX29uU3RvcCkgX29uU3RvcCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgY29uc3QgeyBvbkNvbXBsZXRlLCBfb25Db21wbGV0ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgaWYgKHRoaXMub25Db21wbGV0ZSkgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUodGhpcyk7XG4gICAgaWYgKF9vbkNvbXBsZXRlKSBfb25Db21wbGV0ZSh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2NoZWR1bGVkVXBkYXRlKCkge1xuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSB0aW1lU2luY2VMYXN0RnJhbWUoKTtcbiAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICBjb25zdCB7IG9uVXBkYXRlLCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHRoaXMudXBkYXRlKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnVwZGF0ZSh0aGlzLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlmIChvblVwZGF0ZSkgb25VcGRhdGUodGhpcy5jdXJyZW50LCB0aGlzKTtcbiAgICB0aGlzLmZpcmVMaXN0ZW5lcnMoKTtcblxuICAgIGlmICghcGFzc2l2ZSAmJiB0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgb25GcmFtZVVwZGF0ZSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiB0aGlzLmlzQWN0aW9uQ29tcGxldGUoKSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0UHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0ge1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG91dHB1dChmdW5jKSB7XG4gICAgdGhpcy5wcm9wcy5vblVwZGF0ZSA9IGZ1bmM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfVxuXG4gIHNldCh2KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFByb3Aoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHNba2V5XTtcbiAgfVxuXG4gIGdldFZlbG9jaXR5KCkge1xuICAgIHJldHVybiBzcGVlZFBlclNlY29uZCh0aGlzLmN1cnJlbnQgLSB0aGlzLnByZXYsIHRoaXMubGFzdFVwZGF0ZWQpO1xuICB9XG5cbiAgaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9XG5cbiAgYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IFtdO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gdGhpcy5udW1MaXN0ZW5lcnMgfHwgMDtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzKys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBjb25zdCBsaXN0ZW5lckluZGV4ID0gKHRoaXMubGlzdGVuZXJzKSA/IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpIDogLTE7XG4gICAgaWYgKGxpc3RlbmVySW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycy0tO1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZpcmVMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUxpc3RlbmVyczsgaSsrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tpXShjdXJyZW50LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuIl19

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _framesync = __webpack_require__(19);
	
	var _utils = __webpack_require__(25);
	
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
	
	    if (this.hasChanged) {
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiUmVuZGVyZXIiLCJwcm9wcyIsInJlbmRlciIsImJpbmQiLCJjb25zdHJ1Y3RvciIsImRlZmF1bHRQcm9wcyIsInN0YXRlIiwiY2hhbmdlZFZhbHVlcyIsImdldCIsImtleSIsInVuZGVmaW5lZCIsInJlYWQiLCJvblJlYWQiLCJzZXQiLCJhcmdzIiwidmFsdWVzIiwic2V0VmFsdWUiLCJ2YWx1ZSIsImhhc0NoYW5nZWQiLCJjdXJyZW50VmFsdWUiLCJudW1WYWx1ZXMiLCJsZW5ndGgiLCJpIiwidmFsdWVLZXkiLCJwdXNoIiwiZm9yY2VSZW5kZXIiLCJvblJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUFFTUEsUTtBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtDLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBZDs7QUFFQSxTQUFLRixLQUFMLGdCQUNLLEtBQUtHLFdBQUwsQ0FBaUJDLFlBRHRCLEVBRUtKLEtBRkw7O0FBS0EsU0FBS0ssS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7cUJBUUFDLEcsZ0JBQUlDLEcsRUFBSztBQUNQLFFBQUlBLEdBQUosRUFBUztBQUNQLFVBQUksS0FBS0gsS0FBTCxDQUFXRyxHQUFYLE1BQW9CQyxTQUF4QixFQUFtQztBQUNqQyxlQUFPLEtBQUtKLEtBQUwsQ0FBV0csR0FBWCxDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTyxLQUFLRSxJQUFMLENBQVVGLEdBQVYsQ0FBUDtBQUNEO0FBQ0YsS0FORCxNQU1PO0FBQ0wsYUFBTyxLQUFLSCxLQUFaO0FBQ0Q7QUFDRixHOztBQUVEOzs7Ozs7O3FCQUtBSyxJLGlCQUFLRixHLEVBQUs7QUFDUixRQUFJLEtBQUtHLE1BQVQsRUFBaUI7QUFDZixhQUFPLEtB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R1lsQixRIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzLmhhbGwvUHJvamVjdHMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb25GcmFtZVJlbmRlciB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBpc0FycmF5LCBpc09iaiwgaXNOdW0sIGlzU3RyaW5nIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfTtcblxuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLmNoYW5nZWRWYWx1ZXMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBzdGF0ZS5cbiAgICogSWYgYGtleWAgaXMgbm90IGRlZmluZWQsIHJldHVybiBlbnRpcmUgY2FjaGVkIHN0YXRlLlxuICAgKiBJZiBga2V5YCBpcyBkZWZpbmVkLCByZXR1cm4gY2FjaGVkIHZhbHVlIGlmIHByZXNlbnQuXG4gICAqIElmIGBrZXlgIGlzIGRlZmluZWQgYW5kIGNhY2hlZCB2YWx1ZSBpcyBub3QgcHJlc2VudCwgcmVhZCBhbmQgcmV0dXJuLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IChvcHRpb25hbCkga2V5IG9mIHZhbHVlXG4gICAqIEByZXR1cm4ge3ZhbHVlfVxuICAgKi9cbiAgZ2V0KGtleSkge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZChrZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVhZCB2YWx1ZSBhY2NvcmRpbmcgdG8gYG9uUmVhZGBcbiAgICogQHBhcmFtICB7c3RyaW5nfSBOYW1lIG9mIHByb3BlcnR5IHRvIHJlYWRcbiAgICogQHJldHVybiB7W3R5cGVdfVxuICAgKi9cbiAgcmVhZChrZXkpIHtcbiAgICBpZiAodGhpcy5vblJlYWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uUmVhZChrZXkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYHN0YXRlYCB3aXRoIG5ldyB2YWx1ZXMgYW5kIHNjaGVkdWxlIGByZW5kZXJgLlxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzXG4gICAqIEBwYXJhbSB7dmFsdWV9IHZhbHVlIHRvc2V0XG4gICAqL1xuICBzZXQoLi4uYXJncykge1xuICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IFsgdmFsdWVzIF0gPSBhcmdzO1xuICAgICAgLy8gU2V0IG11bHRpcGxlIHZhbHVlc1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCB2YWx1ZXNba2V5XSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFsga2V5LCB2YWx1ZSBdID0gYXJncztcbiAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCkge1xuICAgICAgb25GcmFtZVJlbmRlcih0aGlzLnJlbmRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyA+IFdpbGV5IC0gNiBpbiB0aGUgTW9ybmluZ1xuICAvKipcbiAgICogU2V0IGEgc2luZ2xlIHZhbHVlXG4gICAqIElmIGEgc3RyaW5nIG9yIG51bWJlciwgc2V0IGRpcmVjdGx5LlxuICAgKiBJZiBhbiBvYmplY3Qgb3IgYXJyYXksIGNyZWF0ZSBuZXcgb2JqZWN0IG9yIGFycmF5XG4gICAqIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC4gVGhlbiBzaGFsbG93IGNvbXBhcmVcbiAgICogdG8gc2V0IGFuZCBjb21wYXJlIGluZGl2aWR1YWwgdmFsdWVzLlxuICAgKiBPbmUgb2YgdGhlIGNsZWFyZXIgZHJhd2JhY2tzIGFuZCBhbm5veWFuY2VzIHdpdGhcbiAgICogdXNpbmcgbXV0YWJsZSBpbnN0ZWFkIG9mIGltbXV0YWJsZSBzdGF0ZXMuXG4gICAqIEBwYXJhbSB7W3R5cGVdfSBrZXlcbiAgICogQHBhcmFtIHtbdHlwZV19IHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZShrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5zdGF0ZVtrZXldO1xuXG4gICAgLy8gSWYgbnVtYmVyIG9yIHN0cmluZywgc2V0IGRpcmVjdGx5XG4gICAgaWYgKGlzTnVtKHZhbHVlKSB8fCBpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGlmICghY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBudW1WYWx1ZXMgPSB2YWx1ZS5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVZhbHVlczsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV1baV0gIT09IHZhbHVlW2ldKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldW2ldID0gdmFsdWVbaV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNPYmoodmFsdWUpKSB7XG4gICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgdmFsdWVLZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gIT09IHZhbHVlW3ZhbHVlS2V5XSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gPSB2YWx1ZVt2YWx1ZUtleV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5wdXNoKGtleSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGBvblJlbmRlcmAgaWYgdmFsdWVzIGhhdmUgY2hhbmdlZCBvciBgZm9yY2VSZW5kZXJgXG4gICAqIGlzIHNldCB0byB0cnVlLlxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgcmVuZGVyKGZvcmNlUmVuZGVyID0gZmFsc2UpIHtcbiAgICBpZiAoKGZvcmNlUmVuZGVyIHx8IHRoaXMuaGFzQ2hhbmdlZCkgJiYgdGhpcy5vblJlbmRlcikge1xuICAgICAgdGhpcy5vblJlbmRlcigpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XG4iXX0=

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (element, props) {
	  return new CSSRenderer(_extends({
	    element: element,
	    enableHardwareAcceleration: true
	  }, props));
	};
	
	var _ = __webpack_require__(21);
	
	var _2 = _interopRequireDefault(_);
	
	var _render = __webpack_require__(29);
	
	var _render2 = _interopRequireDefault(_render);
	
	var _transformProps = __webpack_require__(30);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(31);
	
	var _valueTypes2 = _interopRequireDefault(_valueTypes);
	
	var _prefixer = __webpack_require__(32);
	
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzIl0sIm5hbWVzIjpbImVsZW1lbnQiLCJwcm9wcyIsIkNTU1JlbmRlcmVyIiwiZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24iLCJvblJlbmRlciIsInN0YXRlIiwiY2hhbmdlZFZhbHVlcyIsIm9uUmVhZCIsImtleSIsInZhbHVlVHlwZSIsImRvbVZhbHVlIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBhcnNlIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQTZCZSxVQUFVQSxPQUFWLEVBQW1CQyxLQUFuQixFQUEwQjtBQUN2QyxTQUFPLElBQUlDLFdBQUo7QUFDTEYsb0JBREs7QUFFTEcsZ0NBQTRCO0FBRnZCLEtBR0ZGLEtBSEUsRUFBUDtBQUtELEM7O0FBbkNEOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQyxXOzs7Ozs7Ozs7d0JBQ0pFLFEsdUJBQVc7QUFBQSxpQkFDdUMsS0FBS0gsS0FENUM7QUFBQSxRQUNERCxPQURDLFVBQ0RBLE9BREM7QUFBQSxRQUNRRywwQkFEUixVQUNRQSwwQkFEUjs7QUFFVCwwQkFBVUgsT0FBVixFQUFtQixLQUFLSyxLQUF4QixFQUErQixLQUFLQyxhQUFwQyxFQUFtREgsMEJBQW5EO0FBQ0QsRzs7d0JBRURJLE0sbUJBQU9DLEcsRUFBSztBQUNWLFFBQU1DLFlBQVkscUJBQWNELEdBQWQsQ0FBbEI7O0FBRUEsUUFBSSxDQUFDLHlCQUFlQSxHQUFmLENBQUwsRUFBMEI7QUFBQSxVQUNoQlIsT0FEZ0IsR0FDSixLQUFLQyxLQURELENBQ2hCRCxPQURnQjs7QUFFeEIsVUFBTVUsV0FBV0MsT0FBT0MsZ0JBQVAsQ0FBd0JaLE9BQXhCLEVBQWlDLElBQWpDLEVBQXVDLHdCQUFTUSxHQUFULENBQXZDLEtBQXlELENBQTFFO0FBQ0EsYUFBUUMsYUFBYUEsVUFBVUksS0FBeEIsR0FBaUNKLFVBQVVJLEtBQVYsQ0FBZ0JILFFBQWhCLENBQWpDLEdBQTZEQSxRQUFwRTtBQUNELEtBSkQsTUFJTztBQUNMLFVBQUlELFNBQUosRUFBZTtBQUNiLGVBQU9BLFVBQVVLLE9BQVYsSUFBcUIsQ0FBNUI7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLENBQVA7QUFDRDtBQUNGO0FBQ0YsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy5oYWxsL1Byb2plY3RzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZW5kZXJlciBmcm9tICcuLi8nO1xuaW1wb3J0IHJlbmRlckNTUyBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IHZhbHVlVHlwZXNNYXAgZnJvbSAnLi92YWx1ZS10eXBlcyc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9wcmVmaXhlcic7XG5cbmNsYXNzIENTU1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBvblJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIHJlbmRlckNTUyhlbGVtZW50LCB0aGlzLnN0YXRlLCB0aGlzLmNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKTtcbiAgfVxuXG4gIG9uUmVhZChrZXkpIHtcbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZVR5cGVzTWFwW2tleV07XG5cbiAgICBpZiAoIXRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGRvbVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClbcHJlZml4ZXIoa2V5KV0gfHwgMDtcbiAgICAgIHJldHVybiAodmFsdWVUeXBlICYmIHZhbHVlVHlwZS5wYXJzZSkgPyB2YWx1ZVR5cGUucGFyc2UoZG9tVmFsdWUpIDogZG9tVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlVHlwZS5kZWZhdWx0IHx8IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ1NTUmVuZGVyZXIoe1xuICAgIGVsZW1lbnQsXG4gICAgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb246IHRydWUsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG59XG4iXX0=

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (element, props) {
	  return new SVGRenderer(_extends({
	    element: element
	  }, props));
	};
	
	var _ = __webpack_require__(21);
	
	var _2 = _interopRequireDefault(_);
	
	var _build = __webpack_require__(33);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _transformProps = __webpack_require__(30);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(34);
	
	var _valueTypes2 = _interopRequireDefault(_valueTypes);
	
	var _utils = __webpack_require__(25);
	
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzIl0sIm5hbWVzIjpbImVsZW1lbnQiLCJwcm9wcyIsIlNWR1JlbmRlcmVyIiwiZ2V0QkJveCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJlbGVtZW50RGltZW5zaW9ucyIsIm9uUmVuZGVyIiwiYXR0cnMiLCJzdGF0ZSIsIm9uUmVhZCIsImtleSIsImdldEF0dHJpYnV0ZSIsInZhbHVlVHlwZSIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFnQ2UsVUFBVUEsT0FBVixFQUFtQkMsS0FBbkIsRUFBMEI7QUFDdkMsU0FBTyxJQUFJQyxXQUFKO0FBQ0xGO0FBREssS0FFRkMsS0FGRSxFQUFQO0FBSUQsQzs7QUFyQ0Q7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQyxXOzs7QUFDSix1QkFBWUQsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixxQkFBTUEsS0FBTixDQURpQjs7QUFBQSxnQ0FHZUEsTUFBTUQsT0FBTixDQUFjRyxPQUFkLEVBSGY7QUFBQSxRQUdUQyxDQUhTLHlCQUdUQSxDQUhTO0FBQUEsUUFHTkMsQ0FITSx5QkFHTkEsQ0FITTtBQUFBLFFBR0hDLEtBSEcseUJBR0hBLEtBSEc7QUFBQSxRQUdJQyxNQUhKLHlCQUdJQSxNQUhKOztBQUlqQixVQUFLQyxpQkFBTCxHQUF5QixFQUFFSixJQUFGLEVBQUtDLElBQUwsRUFBUUMsWUFBUixFQUFlQyxjQUFmLEVBQXpCO0FBSmlCO0FBS2xCOzt3QkFFREUsUSx1QkFBVztBQUFBLFFBQ0RULE9BREMsR0FDVyxLQUFLQyxLQURoQixDQUNERCxPQURDOztBQUVULFFBQU1VLFFBQVEscUJBQU0sS0FBS0MsS0FBWCxFQUFrQixLQUFLSCxpQkFBdkIsQ0FBZDtBQUNBLDRCQUFZUixPQUFaLEVBQXFCVSxLQUFyQjtBQUNELEc7O3dCQUVERSxNLG1CQUFPQyxHLEVBQUs7QUFBQSxRQUNGYixPQURFLEdBQ1UsS0FBS0MsS0FEZixDQUNGRCxPQURFOzs7QUFHVixRQUFJLENBQUMseUJBQWVhLEdBQWYsQ0FBTCxFQUEwQjtBQUN4QixhQUFPYixRQUFRYyxZQUFSLENBQXFCRCxHQUFyQixDQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBTUUsWUFBWSxxQkFBYUYsR0FBYixDQUFsQjtBQUNBLGFBQVFFLFNBQUQsR0FBY0EsVUFBVUMsT0FBeEIsR0FBa0MsQ0FBekM7QUFDRDtBQUNGLEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMuaGFsbC9Qcm9qZWN0cy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi4vJztcbmltcG9ydCBidWlsZCBmcm9tICcuL2J1aWxkJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi92YWx1ZS10eXBlcyc7XG5pbXBvcnQgeyBzZXRET01BdHRycyB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5cbmNsYXNzIFNWR1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gcHJvcHMuZWxlbWVudC5nZXRCQm94KCk7XG4gICAgdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9O1xuICB9XG5cbiAgb25SZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGF0dHJzID0gYnVpbGQodGhpcy5zdGF0ZSwgdGhpcy5lbGVtZW50RGltZW5zaW9ucyk7XG4gICAgc2V0RE9NQXR0cnMoZWxlbWVudCwgYXR0cnMpO1xuICB9XG5cbiAgb25SZWFkKGtleSkge1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghdHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlVHlwZU1hcFtrZXldO1xuICAgICAgcmV0dXJuICh2YWx1ZVR5cGUpID8gdmFsdWVUeXBlLmRlZmF1bHQgOiAwO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBTVkdSZW5kZXJlcih7XG4gICAgZWxlbWVudCxcbiAgICAuLi5wcm9wc1xuICB9KTtcbn1cbiJdfQ==

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (element, props) {
	  return new SVGPathRenderer(_extends({
	    element: element
	  }, props));
	};
	
	var _ = __webpack_require__(21);
	
	var _2 = _interopRequireDefault(_);
	
	var _build = __webpack_require__(35);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _utils = __webpack_require__(25);
	
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanMiXSwibmFtZXMiOlsiZWxlbWVudCIsInByb3BzIiwiU1ZHUGF0aFJlbmRlcmVyIiwiZ2V0QkJveCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJlbGVtZW50RGltZW5zaW9ucyIsInBhdGhMZW5ndGgiLCJnZXRUb3RhbExlbmd0aCIsIm9uUmVuZGVyIiwic3RhdGUiLCJvblJlYWQiLCJrZXkiLCJnZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkE2QmUsVUFBVUEsT0FBVixFQUFtQkMsS0FBbkIsRUFBMEI7QUFDdkMsU0FBTyxJQUFJQyxlQUFKO0FBQ0xGO0FBREssS0FFRkMsS0FGRSxFQUFQO0FBSUQsQzs7QUFsQ0Q7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1DLGU7OztBQUNKLDJCQUFZRCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLHFCQUFNQSxLQUFOLENBRGlCOztBQUFBLGdDQUdlQSxNQUFNRCxPQUFOLENBQWNHLE9BQWQsRUFIZjtBQUFBLFFBR1RDLENBSFMseUJBR1RBLENBSFM7QUFBQSxRQUdOQyxDQUhNLHlCQUdOQSxDQUhNO0FBQUEsUUFHSEMsS0FIRyx5QkFHSEEsS0FIRztBQUFBLFFBR0lDLE1BSEoseUJBR0lBLE1BSEo7O0FBSWpCLFVBQUtDLGlCQUFMLEdBQXlCO0FBQ3ZCSixVQUR1QjtBQUV2QkMsVUFGdUI7QUFHdkJDLGtCQUh1QjtBQUl2QkMsb0JBSnVCO0FBS3ZCRSxrQkFBWVIsTUFBTUQsT0FBTixDQUFjVSxjQUFkO0FBTFcsS0FBekI7QUFKaUI7QUFXbEI7OzRCQUVEQyxRLHVCQUFXO0FBQUEsUUFDREYsVUFEQyxHQUNjLEtBQUtELGlCQURuQixDQUNEQyxVQURDO0FBQUEsUUFFRFQsT0FGQyxHQUVXLEtBQUtDLEtBRmhCLENBRURELE9BRkM7O0FBR1QsNEJBQVlBLE9BQVosRUFBcUIscUJBQU0sS0FBS1ksS0FBWCxFQUFrQkgsVUFBbEIsQ0FBckI7QUFDRCxHOzs0QkFFREksTSxtQkFBT0MsRyxFQUFLO0FBQ1YsV0FBTyxLQUFLYixLQUFMLENBQVdELE9BQVgsQ0FBbUJlLFlBQW5CLENBQWdDRCxHQUFoQyxDQUFQO0FBQ0QsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy5oYWxsL1Byb2plY3RzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZW5kZXJlciBmcm9tICcuLi8nO1xuaW1wb3J0IGJ1aWxkIGZyb20gJy4vYnVpbGQnO1xuaW1wb3J0IHsgc2V0RE9NQXR0cnMgfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuXG5jbGFzcyBTVkdQYXRoUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKTtcbiAgICB0aGlzLmVsZW1lbnREaW1lbnNpb25zID0ge1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhdGhMZW5ndGg6IHByb3BzLmVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKVxuICAgIH07XG4gIH1cblxuICBvblJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBhdGhMZW5ndGggfSA9IHRoaXMuZWxlbWVudERpbWVuc2lvbnM7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIHNldERPTUF0dHJzKGVsZW1lbnQsIGJ1aWxkKHRoaXMuc3RhdGUsIHBhdGhMZW5ndGgpKTtcbiAgfVxuXG4gIG9uUmVhZChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5lbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1BhdGhSZW5kZXJlcih7XG4gICAgZWxlbWVudCxcbiAgICAuLi5wcm9wc1xuICB9KTtcbn1cbiJdfQ==

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.splitColorValues = splitColorValues;
	var varType = function (variable) {
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
	var createUnitType = exports.createUnitType = function (type, transform) {
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
	var getValueFromFunctionString = exports.getValueFromFunctionString = function (value) {
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
	
	var isHex = exports.isHex = isFirstChars('#');
	var isRgb = exports.isRgb = isFirstChars('rgb');
	var isHsl = exports.isHsl = isFirstChars('hsl');
	var isColor = exports.isColor = function (v) {
	  return isHex(v) || isRgb(v) || isHsl(v);
	};
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdXRpbHMuanMiXSwibmFtZXMiOlsic3BsaXRDb2xvclZhbHVlcyIsInZhclR5cGUiLCJ2YXJpYWJsZSIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiQ0FNRUxfQ0FTRV9QQVRURVJOIiwiUkVQTEFDRV9URU1QTEFURSIsIkhBU19QRVJGT1JNQU5DRV9OT1ciLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNhbWVsVG9EYXNoIiwic3RyaW5nIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiY3VycmVudFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInNldERPTUF0dHJzIiwiZWxlbWVudCIsImF0dHJzIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJzZXRBdHRyaWJ1dGUiLCJzcGxpdENvbW1hRGVsaW1pdGVkIiwidmFsdWUiLCJpc1N0cmluZyIsInNwbGl0IiwiY29udGFpbnMiLCJ0ZXJtIiwidiIsImluZGV4T2YiLCJpc0ZpcnN0Q2hhcnMiLCJjcmVhdGVVbml0VHlwZSIsInR5cGUiLCJ0cmFuc2Zvcm0iLCJ0ZXN0IiwicGFyc2UiLCJwYXJzZUZsb2F0IiwiZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmciLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsInRlcm1zIiwibnVtVGVybXMiLCJsZW5ndGgiLCJ2YWx1ZXMiLCJ2YWx1ZXNBcnJheSIsImkiLCJ1bmRlZmluZWQiLCJpc0FycmF5IiwiYXJyIiwiaXNGdW5jIiwib2JqIiwiaXNOdW0iLCJudW0iLCJpc09iaiIsInN0ciIsImlzSGV4IiwiaXNSZ2IiLCJpc0hzbCIsImlzQ29sb3IiXSwibWFwcGluZ3MiOiI7OztRQTZFZ0JBLGdCLEdBQUFBLGdCO0FBN0VoQixJQUFNQyxVQUFVLFVBQUNDLFFBQUQ7QUFBQSxTQUFjQyxPQUFPQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JKLFFBQS9CLEVBQXlDSyxLQUF6QyxDQUErQyxDQUEvQyxFQUFr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O0FBTU8sSUFBTUMsMEJBQVMsVUFBQ0MsR0FBRDtBQUFBLFNBQVNyRCxRQUFRcUQsR0FBUixNQUFpQixVQUExQjtBQUFBLENBQWY7O0FBRVA7Ozs7OztBQU1PLElBQU1DLHdCQUFRLFVBQUNDLEdBQUQ7QUFBQSxTQUFTLE9BQU9BLEdBQVAsS0FBZSxRQUF4QjtBQUFBLENBQWQ7O0FBRVA7Ozs7OztBQU1PLElBQU1DLHdCQUFRLFVBQUNILEdBQUQ7QUFBQSxTQUFTLE9BQU9BLEdBQVAsS0FBZSxRQUF4QjtBQUFBLENBQWQ7O0FBRVA7Ozs7OztBQU1PLElBQU0xQiw4QkFBVyxVQUFDOEIsR0FBRDtBQUFBLFNBQVMsT0FBT0EsR0FBUCxLQUFlLFFBQXhCO0FBQUEsQ0FBakI7O0FBRUEsSUFBTUMsd0JBQVF6QixhQUFhLEdBQWIsQ0FBZDtBQUNBLElBQU0wQix3QkFBUTFCLGFBQWEsS0FBYixDQUFkO0FBQ0EsSUFBTTJCLHdCQUFRM0IsYUFBYSxLQUFiLENBQWQ7QUFDQSxJQUFNNEIsNEJBQVUsVUFBQzlCLENBQUQ7QUFBQSxTQUFRMkIsTUFBTTNCLENBQU4sS0FBWTRCLE1BQU01QixDQUFOLENBQVosSUFBd0I2QixNQUFNN0IsQ0FBTixDQUFoQztBQUFBLENBQWhCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzLmhhbGwvUHJvamVjdHMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFyVHlwZSA9ICh2YXJpYWJsZSkgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG5cbmNvbnN0IENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xuY29uc3QgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG5jb25zdCBIQVNfUEVSRk9STUFOQ0VfTk9XID0gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KTtcblxuLypcbiAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG5leHBvcnQgY29uc3QgY2FtZWxUb0Rhc2ggPSAoc3RyaW5nKSA9PiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG5cbi8qXG4gIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gIFxuICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/ICgpID0+IHBlcmZvcm1hbmNlLm5vdygpIDogKCkgPT4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbmV4cG9ydCBjb25zdCBzZXRET01BdHRycyA9IChlbGVtZW50LCBhdHRycykgPT4ge1xuICBmb3IgKGxldCBrZXkgaW4gYXR0cnMpIHtcbiAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG4gIH1cbn07XG4vKlxuICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgXCJmb28sYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzcGxpdENvbW1hRGVsaW1pdGVkID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG5cbi8qKlxuICogIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgYW55IGFyZ3VtZW50IGZvciBgdGVybWBcbiAqIGBjb250YWlucygnbmVlZGxlJykoJ2hheXN0YWNrJylgXG4gKi9cbmV4cG9ydCBjb25zdCBjb250YWlucyA9ICh0ZXJtKSA9PiAodikgPT4ge1xuICByZXR1cm4gKGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSAhPT0gLTEpO1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayB0byBzZWUgaWYgYW4gYXJndW1lbnQgaXNcbiAqICB0aGUgZmlyc3QgY2hhcmFjdGVycyBpbiB0aGUgcHJvdmlkZWQgYHRlcm1gXG4gKiBgaXNGaXJzdENoYXJzKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xuZXhwb3J0IGNvbnN0IGlzRmlyc3RDaGFycyA9ICh0ZXJtKSA9PiAodikgPT4ge1xuICByZXR1cm4gKGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSA9PT0gMCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHVuaXQgdmFsdWUgdHlwZVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVW5pdFR5cGUgPSAodHlwZSwgdHJhbnNmb3JtKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVzdDogY29udGFpbnModHlwZSksXG4gICAgcGFyc2U6IHBhcnNlRmxvYXQsXG4gICAgdHJhbnNmb3JtXG4gIH07XG59O1xuXG4vKlxuICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcbiAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSAodmFsdWUpID0+IHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHNwbGl0IGNvbG9yXG4gKiB2YWx1ZXMgZnJvbSBzdHJpbmcgaW50byBhbiBvYmplY3Qgb2YgcHJvcGVydGllc1xuICogYG1hcEFycmF5VG9PYmplY3QoWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddKSgncmdiYSgwLDAsMCknKWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0Q29sb3JWYWx1ZXModGVybXMpIHtcbiAgY29uc3QgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgY29uc3QgdmFsdWVzID0ge307XG4gICAgY29uc3QgdmFsdWVzQXJyYXkgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHYpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgdmFsdWVzW3Rlcm1zW2ldXSA9ICh2YWx1ZXNBcnJheVtpXSAhPT0gdW5kZWZpbmVkKSA/IHBhcnNlRmxvYXQodmFsdWVzQXJyYXlbaV0pIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xufVxuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IChhcnIpID0+IHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5JztcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG5leHBvcnQgY29uc3QgaXNGdW5jID0gKG9iaikgPT4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xuZXhwb3J0IGNvbnN0IGlzTnVtID0gKG51bSkgPT4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xuZXhwb3J0IGNvbnN0IGlzT2JqID0gKG9iaikgPT4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAoc3RyKSA9PiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcblxuZXhwb3J0IGNvbnN0IGlzSGV4ID0gaXNGaXJzdENoYXJzKCcjJyk7XG5leHBvcnQgY29uc3QgaXNSZ2IgPSBpc0ZpcnN0Q2hhcnMoJ3JnYicpO1xuZXhwb3J0IGNvbnN0IGlzSHNsID0gaXNGaXJzdENoYXJzKCdoc2wnKTtcbmV4cG9ydCBjb25zdCBpc0NvbG9yID0gKHYpID0+IChpc0hleCh2KSB8fCBpc1JnYih2KSB8fCBpc0hzbCh2KSk7XG4iXX0=

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.color = exports.hsla = exports.rgba = exports.hex = undefined;
	
	var _utils = __webpack_require__(25);
	
	var hex = exports.hex = function (v) {
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
	
	var color = exports.color = function (v) {
	  if ((0, _utils.isRgb)(v)) {
	    return rgba(v);
	  } else if ((0, _utils.isHex)(v)) {
	    return hex(v);
	  } else if ((0, _utils.isHsl)(v)) {
	    return hsla(v);
	  }
	
	  return v;
	};
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvcGFyc2Vycy5qcyJdLCJuYW1lcyI6WyJoZXgiLCJ2IiwiciIsImciLCJiIiwibGVuZ3RoIiwic3Vic3RyIiwicmVkIiwicGFyc2VJbnQiLCJncmVlbiIsImJsdWUiLCJhbHBoYSIsInJnYmEiLCJoc2xhIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRU8sSUFBTUEsb0JBQU0sVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hCLE1BQUlDLFVBQUo7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBVUMsVUFBVjs7QUFFQTtBQUNBLE1BQUlILEVBQUVJLE1BQUYsR0FBVyxDQUFmLEVBQWtCO0FBQ2hCSCxRQUFJRCxFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjtBQUNBSCxRQUFJRixFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjtBQUNBRixRQUFJSCxFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjs7QUFFRjtBQUNDLEdBTkQsTUFNTztBQUNMSixRQUFJRCxFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjtBQUNBSCxRQUFJRixFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjtBQUNBRixRQUFJSCxFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjtBQUNBSixTQUFLQSxDQUFMO0FBQ0FDLFNBQUtBLENBQUw7QUFDQUMsU0FBS0EsQ0FBTDtBQUNEOztBQUVELFNBQU87QUFDTEcsU0FBS0MsU0FBU04sQ0FBVCxFQUFZLEVBQVosQ0FEQTtBQUVMTyxXQUFPRCxTQUFTTCxDQUFULEVBQVksRUFBWixDQUZGO0FBR0xPLFVBQU1GLFNBQVNKLENBQVQsRUFBWSxFQUFaLENBSEQ7QUFJTE8sV0FBTztBQUpGLEdBQVA7QUFNRCxDQXpCTTs7QUEyQkEsSUFBTUMsc0JBQU8sNkJBQWlCLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsTUFBakIsRUFBeUIsT0FBekIsQ0FBakIsQ0FBYjs7QUFFQSxJQUFNQyxzQkFBTyw2QkFBaUIsQ0FBQyxLQUFELEVBQVEsWUFBUixFQUFzQixXQUF0QixFQUFtQyxPQUFuQyxDQUFqQixDQUFiOztBQUVBLElBQU1DLHdCQUFRLFVBQUNiLENBQUQsRUFBTztBQUMxQixNQUFJLGtCQUFNQSxDQUFOLENBQUosRUFBYztBQUNaLFdBQU9XLEtBQUtYLENBQUwsQ0FBUDtBQUNELEdBRkQsTUFFTyxJQUFJLGtCQUFNQSxDQUFOLENBQUosRUFBYztBQUNuQixXQUFPRCxJQUFJQyxDQUFKLENBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSSxrQkFBTUEsQ0FBTixDQUFKLEVBQWM7QUFDbkIsV0FBT1ksS0FBS1osQ0FBTCxDQUFQO0FBQ0Q7O0FBRUQsU0FBT0EsQ0FBUDtBQUNELENBVk0iLCJmaWxlIjoicGFyc2Vycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy5oYWxsL1Byb2plY3RzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNwbGl0Q29sb3JWYWx1ZXMsIGlzUmdiLCBpc0hleCwgaXNIc2wgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IGhleCA9ICh2KSA9PiB7XG4gIGxldCByLCBnLCBiO1xuXG4gIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gIGlmICh2Lmxlbmd0aCA+IDQpIHtcbiAgICByID0gdi5zdWJzdHIoMSwgMik7XG4gICAgZyA9IHYuc3Vic3RyKDMsIDIpO1xuICAgIGIgPSB2LnN1YnN0cig1LCAyKTtcblxuICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICB9IGVsc2Uge1xuICAgIHIgPSB2LnN1YnN0cigxLCAxKTtcbiAgICBnID0gdi5zdWJzdHIoMiwgMSk7XG4gICAgYiA9IHYuc3Vic3RyKDMsIDEpO1xuICAgIHIgKz0gcjtcbiAgICBnICs9IGc7XG4gICAgYiArPSBiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICBncmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgIGJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICBhbHBoYTogMVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHJnYmEgPSBzcGxpdENvbG9yVmFsdWVzKFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAnYWxwaGEnXSk7XG5cbmV4cG9ydCBjb25zdCBoc2xhID0gc3BsaXRDb2xvclZhbHVlcyhbJ2h1ZScsICdzYXR1cmF0aW9uJywgJ2xpZ2h0bmVzcycsICdhbHBoYSddKTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yID0gKHYpID0+IHtcbiAgaWYgKGlzUmdiKHYpKSB7XG4gICAgcmV0dXJuIHJnYmEodik7XG4gIH0gZWxzZSBpZiAoaXNIZXgodikpIHtcbiAgICByZXR1cm4gaGV4KHYpO1xuICB9IGVsc2UgaWYgKGlzSHNsKHYpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cblxuICByZXR1cm4gdjtcbn07XG4iXX0=

/***/ },
/* 27 */
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
	}
	
	exports.default = onNextFrame;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qcyJdLCJuYW1lcyI6WyJoYXNSQUYiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvbk5leHRGcmFtZSIsImNhbGxiYWNrIiwibGFzdFRpbWUiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZVRvQ2FsbCIsIk1hdGgiLCJtYXgiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7QUFBQTs7O0FBR0EsSUFBTUEsU0FBVSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxPQUFPQyxxQkFBekMsR0FBa0UsSUFBbEUsR0FBeUUsS0FBeEY7O0FBRUEsSUFBSUMsb0JBQUo7O0FBRUEsSUFBSUgsTUFBSixFQUFZO0FBQ1ZHLGdCQUFjLFVBQUNDLFFBQUQ7QUFBQSxXQUFjSCxPQUFPQyxxQkFBUCxDQUE2QkUsUUFBN0IsQ0FBZDtBQUFBLEdBQWQ7QUFFRCxDQUhELE1BR087QUFDTDs7Ozs7Ozs7Ozs7OztBQWNBLE1BQUlDLFdBQVcsQ0FBZjs7QUFFQUYsZ0JBQWMsVUFBQ0MsUUFBRCxFQUFjO0FBQzFCLFFBQU1FLGNBQWMsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQXBCO0FBQ0EsUUFBTUMsYUFBYUMsS0FBS0MsR0FBTCxDQUFTLENBQVQsRUFBWSxRQUFRTCxjQUFjRCxRQUF0QixDQUFaLENBQW5COztBQUVBQSxlQUFXQyxjQUFjRyxVQUF6Qjs7QUFFQUcsZUFBVztBQUFBLGFBQU1SLFNBQVNDLFFBQVQsQ0FBTjtBQUFBLEtBQVgsRUFBcUNJLFVBQXJDO0FBQ0QsR0FQRDtBQVFEOztrQkFFY04sVyIsImZpbGUiOiJvbi1uZXh0LWZyYW1lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzLmhhbGwvUHJvamVjdHMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cbmNvbnN0IGhhc1JBRiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSA/IHRydWUgOiBmYWxzZTtcblxubGV0IG9uTmV4dEZyYW1lO1xuXG5pZiAoaGFzUkFGKSB7XG4gIG9uTmV4dEZyYW1lID0gKGNhbGxiYWNrKSA9PiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcblxufSBlbHNlIHtcbiAgLypcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICBcbiAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG5cbiAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgXG4gICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgXG4gICAgTUlUIGxpY2Vuc2VcbiAgKi9cbiAgbGV0IGxhc3RUaW1lID0gMDtcblxuICBvbk5leHRGcmFtZSA9IChjYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2LjcgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKGxhc3RUaW1lKSwgdGltZVRvQ2FsbCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9uTmV4dEZyYW1lOyJdfQ==

/***/ },
/* 28 */
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVJlbmRlclN0ZXAiLCJzdGFydFJlbmRlckxvb3AiLCJmdW5jdGlvbnNUb1J1biIsImZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lIiwic2NoZWR1bGUiLCJjYWxsYmFjayIsImluZGV4T2YiLCJwdXNoIiwiY2FuY2VsIiwiaW5kZXhPZkNhbGxiYWNrIiwic3BsaWNlIiwicHJvY2VzcyIsImxlbmd0aCIsIm51bVRoaXNGcmFtZSIsImkiXSwibWFwcGluZ3MiOiI7OztrQkFBd0JBLGdCO0FBQVQsU0FBU0EsZ0JBQVQsQ0FBMEJDLGVBQTFCLEVBQTJDO0FBQ3hEOzs7OztBQUtBLE1BQUlDLGlCQUFpQixFQUFyQjtBQUNBLE1BQUlDLDBCQUEwQixFQUE5Qjs7QUFFQSxTQUFPO0FBQ0xDLGNBQVUsVUFBQ0MsUUFBRCxFQUFjO0FBQ3RCSjtBQUNBO0FBQ0EsVUFBSUUsd0JBQXdCRyxPQUF4QixDQUFnQ0QsUUFBaEMsTUFBOEMsQ0FBQyxDQUFuRCxFQUFzRDtBQUNwREYsZ0NBQXdCSSxJQUF4QixDQUE2QkYsUUFBN0I7QUFDRDtBQUNGLEtBUEk7O0FBU0xHLFlBQVEsVUFBQ0gsUUFBRCxFQUFjO0FBQ3BCLFVBQU1JLGtCQUFrQk4sd0JBQXdCRyxPQUF4QixDQUFnQ0QsUUFBaEMsQ0FBeEI7QUFDQSxVQUFJSSxvQkFBb0IsQ0FBQyxDQUF6QixFQUE0QjtBQUMxQk4sZ0NBQXdCTyxNQUF4QixDQUErQkQsZUFBL0IsRUFBZ0QsQ0FBaEQ7QUFDRDtBQUNGLEtBZEk7O0FBZ0JMRSxhQUFTLFlBQU07O0FBSWI7QUFKYSxpQkFFK0IsQ0FBQ1IsdUJBQUQsRUFBMEJELGNBQTFCLENBRi9CO0FBQ2I7O0FBQ0NBLG9CQUZZO0FBRUlDLDZCQUZKO0FBS2JBLDhCQUF3QlMsTUFBeEIsR0FBaUMsQ0FBakM7O0FBRUE7QUFDQSxVQUFNQyxlQUFlWCxlQUFlVSxNQUFwQztBQUNBLFdBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxZQUFwQixFQUFrQ0MsR0FBbEMsRUFBdUM7QUFDckNaLHVCQUFlWSxDQUFmO0FBQ0Q7QUFDRjtBQTVCSSxHQUFQO0FBOEJEIiwiZmlsZSI6ImNyZWF0ZS1yZW5kZXItc3RlcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy5oYWxsL1Byb2plY3RzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKSB7XG4gIC8qKlxuICAgKiBXZSB1c2UgdHdvIGFycmF5cywgb25lIGZvciB0aGlzIGZyYW1lIGFuZCBvbmUgdG8gcXVldWUgZm9yIHRoZVxuICAgKiBuZXh0IGZyYW1lLCByZXVzaW5nIGVhY2ggdG8gYXZvaWQgR0MuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gIGxldCBmdW5jdGlvbnNUb1J1biA9IFtdO1xuICBsZXQgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUgPSBbXTtcblxuICByZXR1cm4ge1xuICAgIHNjaGVkdWxlOiAoY2FsbGJhY2spID0+IHtcbiAgICAgIHN0YXJ0UmVuZGVyTG9vcCgpO1xuICAgICAgLy8gSWYgdGhpcyBjYWxsYmFjayBpc24ndCBhbHJlYWR5IHNjaGVkdWxlZCB0byBydW4gbmV4dCBmcmFtZVxuICAgICAgaWYgKGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spID09PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2FuY2VsOiAoY2FsbGJhY2spID0+IHtcbiAgICAgIGNvbnN0IGluZGV4T2ZDYWxsYmFjayA9IGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgaWYgKGluZGV4T2ZDYWxsYmFjayAhPT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuc3BsaWNlKGluZGV4T2ZDYWxsYmFjaywgMSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHByb2Nlc3M6ICgpID0+IHtcbiAgICAgIC8vIFN3YXAgdGhpcyBmcmFtZSBhbmQgbmV4dCBmcmFtZSBhcnJheXMgdG8gYXZvaWQgR0NcbiAgICAgIFtmdW5jdGlvbnNUb1J1biwgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWVdID0gW2Z1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLCBmdW5jdGlvbnNUb1J1bl07XG5cbiAgICAgIC8vIENsZWFyIG5leHQgZnJhbWUgbGlzdFxuICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUubGVuZ3RoID0gMDtcblxuICAgICAgLy8gRXhlY3V0ZSBhbGwgb2YgdGhpcyBmcmFtZSdzIGZ1bmN0aW9uc1xuICAgICAgY29uc3QgbnVtVGhpc0ZyYW1lID0gZnVuY3Rpb25zVG9SdW4ubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UaGlzRnJhbWU7IGkrKykge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bltpXSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0iXX0=

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = buildStylePropertyString;
	
	var _transformProps = __webpack_require__(30);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(31);
	
	var _valueTypes2 = _interopRequireDefault(_valueTypes);
	
	var _prefixer = __webpack_require__(32);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _utils = __webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TRANSLATE = 'translate';
	var translateMap = {
	  x: TRANSLATE + 'X',
	  y: TRANSLATE + 'Y',
	  z: TRANSLATE + 'Z'
	};
	
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
	
	  element.style.cssText += propertyString;
	}
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3JlbmRlci5qcyJdLCJuYW1lcyI6WyJidWlsZFN0eWxlUHJvcGVydHlTdHJpbmciLCJUUkFOU0xBVEUiLCJ0cmFuc2xhdGVNYXAiLCJ4IiwieSIsInoiLCJlbGVtZW50Iiwic3RhdGUiLCJjaGFuZ2VkVmFsdWVzIiwiZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24iLCJwcm9wZXJ0eVN0cmluZyIsInRyYW5zZm9ybVN0cmluZyIsImhhc1RyYW5zZm9ybSIsInRyYW5zZm9ybUhhc1oiLCJudW1DaGFuZ2VkVmFsdWVzIiwibGVuZ3RoIiwiaSIsImtleSIsImluZGV4T2YiLCJwdXNoIiwidG90YWxOdW1DaGFuZ2VkVmFsdWVzIiwidmFsdWUiLCJ0cmFuc2Zvcm0iLCJzdHlsZSIsImNzc1RleHQiXSwibWFwcGluZ3MiOiI7OztrQkFZd0JBLHdCOztBQVp4Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1DLFlBQVksV0FBbEI7QUFDQSxJQUFNQyxlQUFlO0FBQ25CQyxLQUFHRixZQUFZLEdBREk7QUFFbkJHLEtBQUdILFlBQVksR0FGSTtBQUduQkksS0FBR0osWUFBWTtBQUhJLENBQXJCOztBQU1lLFNBQVNELHdCQUFULENBQWtDTSxPQUFsQyxFQUEyQ0MsS0FBM0MsRUFBa0RDLGFBQWxELEVBQWlFQywwQkFBakUsRUFBNkY7QUFDMUcsTUFBSUMsaUJBQWlCLEVBQXJCO0FBQ0EsTUFBSUMsa0JBQWtCLEVBQXRCO0FBQ0EsTUFBSUMsZUFBZSxLQUFuQjtBQUNBLE1BQUlDLGdCQUFnQixLQUFwQjs7QUFFQTtBQUNBO0FBQ0EsTUFBTUMsbUJBQW1CTixjQUFjTyxNQUF2QztBQUNBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixnQkFBcEIsRUFBc0NFLEdBQXRDLEVBQTJDO0FBQ3pDLFFBQU1DLE1BQU1ULGNBQWNRLENBQWQsQ0FBWjs7QUFFQTtBQUNBO0FBQ0EsUUFBSSx5QkFBZUMsR0FBZixDQUFKLEVBQXlCO0FBQ3ZCTCxxQkFBZSxJQUFmOztBQUVBLFdBQUssSUFBSUssSUFBVCxJQUFnQlYsS0FBaEIsRUFBdUI7QUFDckIsWUFBSSx5QkFBZVUsSUFBZixLQUF1QlQsY0FBY1UsT0FBZCxDQUFzQkQsSUFBdEIsTUFBK0IsQ0FBQyxDQUEzRCxFQUE4RDtBQUM1RFQsd0JBQWNXLElBQWQsQ0FBbUJGLElBQW5CO0FBQ0Q7QUFDRjs7QUFFRDtBQUNEO0FBQ0Y7O0FBRUQsTUFBTUcsd0JBQXdCWixjQUFjTyxNQUE1QztBQUNBLE9BQUssSUFBSUMsS0FBSSxDQUFiLEVBQWdCQSxLQUFJSSxxQkFBcEIsRUFBMkNKLElBQTNDLEVBQWdEO0FBQzlDLFFBQUlDLFFBQU1ULGNBQWNRLEVBQWQsQ0FBVjtBQUNBLFFBQUlLLFFBQVFkLE1BQU1VLEtBQU4sQ0FBWjs7QUFFQSxRQUFJZixhQUFhZSxLQUFiLENBQUosRUFBdUI7QUFDckJBLGNBQU1mLGFBQWFlLEtBQWIsQ0FBTjtBQUNEOztBQUVEO0FBQ0EsUUFBSSxxQkFBV0EsS0FBWCxNQUFvQixrQkFBTUksS0FBTixLQUFnQixrQkFBTUEsS0FBTixDQUFwQyxLQUFxRCxxQkFBV0osS0FBWCxFQUFnQkssU0FBekUsRUFBb0Y7QUFDbEZELGNBQVEscUJBQVdKLEtBQVgsRUFBZ0JLLFNBQWhCLENBQTBCRCxLQUExQixDQUFSO0FBQ0Q7O0FBRUQsUUFBSSx5QkFBZUosS0FBZixDQUFKLEVBQXlCO0FBQ3ZCTix5QkFBbUJNLFFBQU0sR0FBTixHQUFZSSxLQUFaLEdBQW9CLElBQXZDO0FBQ0FSLHNCQUFpQkksVUFBUWYsYUFBYUcsQ0FBdEIsR0FBMkIsSUFBM0IsR0FBa0NRLGFBQWxEO0FBRUQsS0FKRCxNQUlPO0FBQ0xILHdCQUFrQixNQUFNLHdCQUFTTyxLQUFULEVBQWMsSUFBZCxDQUFOLEdBQTRCLEdBQTVCLEdBQWtDSSxLQUFwRDtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQSxNQUFJVCxZQUFKLEVBQWtCO0FBQ2hCLFFBQUksQ0FBQ0MsYUFBRCxJQUFrQkosMEJBQXRCLEVBQWtEO0FBQ2hERSx5QkFBbUJULGFBQWFHLENBQWIsR0FBaUIsS0FBcEM7QUFDRDs7QUFFREssc0JBQWtCLE1BQU0sd0JBQVMsV0FBVCxFQUFzQixJQUF0QixDQUFOLEdBQW9DLEdBQXBDLEdBQTBDQyxlQUE1RDtBQUNEOztBQUVETCxVQUFRaUIsS0FBUixDQUFjQyxPQUFkLElBQXlCZCxjQUF6QjtBQUNEIiwiZmlsZSI6InJlbmRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy5oYWxsL1Byb2plY3RzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL3RyYW5zZm9ybS1wcm9wcyc7XG5pbXBvcnQgdmFsdWVUeXBlcyBmcm9tICcuL3ZhbHVlLXR5cGVzJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcbmltcG9ydCB7IGlzTnVtLCBpc09iaiB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5cbmNvbnN0IFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuY29uc3QgdHJhbnNsYXRlTWFwID0ge1xuICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gIHk6IFRSQU5TTEFURSArICdZJyxcbiAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFN0eWxlUHJvcGVydHlTdHJpbmcoZWxlbWVudCwgc3RhdGUsIGNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gIGxldCBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICBsZXQgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gIGxldCBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgbGV0IHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAvLyBGaXJzdCBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGNoYW5nZWQgdHJhbnNmb3JtIHZhbHVlc1xuICAvLyBhbmQgaWYgdHJ1ZSBhZGQgYWxsIHRyYW5zZm9ybSB2YWx1ZXNcbiAgY29uc3QgbnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNoYW5nZWRWYWx1ZXM7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNoYW5nZWRWYWx1ZXNbaV07XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdHJhbnNmb3JtIHByb3BlcnR5LCBhZGQgYWxsIG90aGVyIHRyYW5zZm9ybSBwcm9wc1xuICAgIC8vIHRvIGNoYW5nZWRWYWx1ZXMgYW5kIHRoZW4gYnJlYWtcbiAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldICYmIGNoYW5nZWRWYWx1ZXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNoYW5nZWRWYWx1ZXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRvdGFsTnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsTnVtQ2hhbmdlZFZhbHVlczsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGNoYW5nZWRWYWx1ZXNbaV07XG4gICAgbGV0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgIGlmICh0cmFuc2xhdGVNYXBba2V5XSkge1xuICAgICAga2V5ID0gdHJhbnNsYXRlTWFwW2tleV07XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIG51bWJlciBvciBvYmplY3QgYW5kIHdlIGhhdmUgZmlsdGVyLCBhcHBseSBmaWx0ZXJcbiAgICBpZiAodmFsdWVUeXBlc1trZXldICYmIChpc051bSh2YWx1ZSkgfHwgaXNPYmoodmFsdWUpKSAmJiB2YWx1ZVR5cGVzW2tleV0udHJhbnNmb3JtKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlVHlwZXNba2V5XS50cmFuc2Zvcm0odmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IHRyYW5zbGF0ZU1hcC56KSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIHByZWZpeGVyKGtleSwgdHJ1ZSkgKyAnOicgKyB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSBoYXZlIHRyYW5zZm9ybSBwcm9wcywgYnVpbGQgYSB0cmFuc2Zvcm0gc3RyaW5nXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSB0cmFuc2xhdGVNYXAueiArICcoMCknO1xuICAgIH1cblxuICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIHByZWZpeGVyKCd0cmFuc2Zvcm0nLCB0cnVlKSArICc6JyArIHRyYW5zZm9ybVN0cmluZztcbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBwcm9wZXJ0eVN0cmluZztcbn1cbiJdfQ==

/***/ },
/* 30 */
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyJdLCJuYW1lcyI6WyJheGVzIiwidHJhbnNmb3JtUHJvcHMiLCJ4IiwieSIsInoiLCJTQ0FMRSIsIlJPVEFURSIsIlRSQU5TRk9STV9QRVJTUEVDVElWRSIsIlRFUk1TIiwiZm9yRWFjaCIsInRlcm0iLCJheGlzIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNQSxPQUFPLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWI7O0FBRUEsSUFBSUMsaUJBQWlCO0FBQ25CQyxLQUFHLElBRGdCO0FBRW5CQyxLQUFHLElBRmdCO0FBR25CQyxLQUFHO0FBSGdCLENBQXJCOztBQU1BLElBQU1DLFFBQVEsT0FBZDtBQUNBLElBQU1DLFNBQVMsUUFBZjtBQUNBLElBQU1DLHdCQUF3QixzQkFBOUI7QUFDQSxJQUFNQyxRQUFRLENBQUMsV0FBRCxFQUFjSCxLQUFkLEVBQXFCQyxNQUFyQixFQUE2QixNQUE3QixFQUFxQ0MscUJBQXJDLENBQWQ7O0FBRUFOLGVBQWVLLE1BQWYsSUFBeUJMLGVBQWVJLEtBQWYsSUFBd0JKLGVBQWVNLHFCQUFmLElBQXdDLElBQXpGOztBQUVBQyxNQUFNQyxPQUFOLENBQWMsVUFBQ0MsSUFBRDtBQUFBLFNBQVVWLEtBQUtTLE9BQUwsQ0FBYSxVQUFDRSxJQUFEO0FBQUEsV0FBVVYsZUFBZVMsT0FBT0MsSUFBdEIsSUFBOEIsSUFBeEM7QUFBQSxHQUFiLENBQVY7QUFBQSxDQUFkOztrQkFFZVYsYyIsImZpbGUiOiJ0cmFuc2Zvcm0tcHJvcHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMuaGFsbC9Qcm9qZWN0cy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBheGVzID0gWydYJywgJ1knLCAnWiddO1xuXG5sZXQgdHJhbnNmb3JtUHJvcHMgPSB7XG4gIHg6IHRydWUsXG4gIHk6IHRydWUsXG4gIHo6IHRydWVcbn07XG5cbmNvbnN0IFNDQUxFID0gJ3NjYWxlJztcbmNvbnN0IFJPVEFURSA9ICdyb3RhdGUnO1xuY29uc3QgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbmNvbnN0IFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaCgodGVybSkgPT4gYXhlcy5mb3JFYWNoKChheGlzKSA9PiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zZm9ybVByb3BzOyJdfQ==

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib3V0bGluZUNvbG9yIiwiZmlsbCIsInN0cm9rZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyVG9wQ29sb3IiLCJib3JkZXJSaWdodENvbG9yIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJib3JkZXJMZWZ0Q29sb3IiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsInJvdGF0ZSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsInNjYWxlIiwic2NhbGVYIiwic2NhbGVZIiwic2NhbGVaIiwic2tld1giLCJza2V3WSIsImRpc3RhbmNlIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJ0cmFuc2xhdGVaIiwicGVyc3BlY3RpdmUiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O2tCQUNlO0FBQ2I7QUFDQUEsMEJBRmE7QUFHYkMsb0NBSGE7QUFJYkMsaUNBSmE7QUFLYkMseUJBTGE7QUFNYkMsMkJBTmE7O0FBUWI7QUFDQUMsZ0NBVGE7QUFVYkMsbUNBVmE7QUFXYkMscUNBWGE7QUFZYkMsc0NBWmE7QUFhYkMsb0NBYmE7QUFjYkMsOEJBZGE7O0FBZ0JiO0FBQ0FDLHVCQWpCYTtBQWtCYkMsd0JBbEJhO0FBbUJiQyxxQkFuQmE7QUFvQmJDLHNCQXBCYTtBQXFCYkMsd0JBckJhO0FBc0JiQyx1QkF0QmE7O0FBd0JiO0FBQ0FDLDZCQXpCYTtBQTBCYkMsOEJBMUJhO0FBMkJiQyw4QkEzQmE7QUE0QmJDLDhCQTVCYTtBQTZCYkMsMEJBN0JhO0FBOEJiQywyQkE5QmE7QUErQmJDLDJCQS9CYTtBQWdDYkMsMkJBaENhO0FBaUNiQyw0QkFqQ2E7QUFrQ2JDLDRCQWxDYTtBQW1DYkMsMEJBbkNhO0FBb0NiQyw0QkFwQ2E7QUFxQ2JDLDRCQXJDYTtBQXNDYkMsNEJBdENhO0FBdUNiQyw2QkF2Q2E7QUF3Q2JDO0FBeENhLEMiLCJmaWxlIjoidmFsdWUtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMuaGFsbC9Qcm9qZWN0cy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbHBoYSwgY29sb3IsIGRlZ3JlZXMsIHNjYWxlLCBweCB9IGZyb20gJy4uLy4uL2luYy92YWx1ZS10eXBlcyc7IFxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBDb2xvciBwcm9wc1xuICBjb2xvcjogY29sb3IsXG4gIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gIG91dGxpbmVDb2xvcjogY29sb3IsXG4gIGZpbGw6IGNvbG9yLFxuICBzdHJva2U6IGNvbG9yLFxuXG4gIC8vIEJvcmRlciBwcm9wc1xuICBib3JkZXJDb2xvcjogY29sb3IsXG4gIGJvcmRlclRvcENvbG9yOiBjb2xvcixcbiAgYm9yZGVyUmlnaHRDb2xvcjogY29sb3IsXG4gIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvcixcbiAgYm9yZGVyTGVmdENvbG9yOiBjb2xvcixcbiAgYm9yZGVyUmFkaXVzOiBweCxcblxuICAvLyBQb3NpdGlvbmluZ1xuICB3aWR0aDogcHgsXG4gIGhlaWdodDogcHgsICBcbiAgdG9wOiBweCxcbiAgbGVmdDogcHgsXG4gIGJvdHRvbTogcHgsXG4gIHJpZ2h0OiBweCxcblxuICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICByb3RhdGU6IGRlZ3JlZXMsXG4gIHJvdGF0ZVg6IGRlZ3JlZXMsXG4gIHJvdGF0ZVk6IGRlZ3JlZXMsXG4gIHJvdGF0ZVo6IGRlZ3JlZXMsXG4gIHNjYWxlOiBzY2FsZSxcbiAgc2NhbGVYOiBzY2FsZSxcbiAgc2NhbGVZOiBzY2FsZSxcbiAgc2NhbGVaOiBzY2FsZSxcbiAgc2tld1g6IGRlZ3JlZXMsXG4gIHNrZXdZOiBkZWdyZWVzLFxuICBkaXN0YW5jZTogcHgsXG4gIHRyYW5zbGF0ZVg6IHB4LFxuICB0cmFuc2xhdGVZOiBweCxcbiAgdHJhbnNsYXRlWjogcHgsXG4gIHBlcnNwZWN0aXZlOiBweCxcbiAgb3BhY2l0eTogYWxwaGFcbn07XG4iXX0=

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(25);
	
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3ByZWZpeGVyLmpzIl0sIm5hbWVzIjpbImNhbWVsQ2FjaGUiLCJkYXNoQ2FjaGUiLCJwcmVmaXhlcyIsIm51bVByZWZpeGVzIiwibGVuZ3RoIiwidGVzdEVsZW1lbnQiLCJ0ZXN0UHJlZml4Iiwia2V5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaSIsInByZWZpeCIsIm5vUHJlZml4IiwicHJlZml4ZWRQcm9wZXJ0eU5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwic3R5bGUiLCJhc0Rhc2hDYXNlIiwiY2FjaGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhLEVBQW5CO0FBQ0EsSUFBTUMsWUFBWSxFQUFsQjtBQUNBLElBQU1DLFdBQVcsQ0FBQyxRQUFELEVBQVUsS0FBVixFQUFnQixHQUFoQixFQUFvQixJQUFwQixFQUEwQixFQUExQixDQUFqQjtBQUNBLElBQU1DLGNBQWNELFNBQVNFLE1BQTdCO0FBQ0EsSUFBSUMsb0JBQUo7O0FBRUE7Ozs7OztBQU1BLElBQU1DLGFBQWEsVUFBQ0MsR0FBRCxFQUFTO0FBQzFCRixnQkFBY0EsZUFBZUcsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUE3Qjs7QUFFQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSVAsV0FBcEIsRUFBaUNPLEdBQWpDLEVBQXNDO0FBQ3BDLFFBQU1DLFNBQVNULFNBQVNRLENBQVQsQ0FBZjtBQUNBLFFBQU1FLFdBQVlELFdBQVcsRUFBN0I7QUFDQSxRQUFNRSx1QkFBdUJELFdBQVdMLEdBQVgsR0FBaUJJLFNBQVNKLElBQUlPLE1BQUosQ0FBVyxDQUFYLEVBQWNDLFdBQWQsRUFBVCxHQUF1Q1IsSUFBSVMsS0FBSixDQUFVLENBQVYsQ0FBckY7O0FBRUEsUUFBSUgsd0JBQXdCUixZQUFZWSxLQUF4QyxFQUErQztBQUM3Q2pCLGlCQUFXTyxHQUFYLElBQWtCTSxvQkFBbEI7QUFDQVosZ0JBQVVNLEdBQVYsVUFBcUJLLFdBQVcsRUFBWCxHQUFnQixHQUFyQyxJQUE0Qyx3QkFBWUMsb0JBQVosQ0FBNUM7QUFDRDtBQUNGO0FBQ0YsQ0FiRDs7a0JBZWUsVUFBQ04sR0FBRCxFQUFNVyxVQUFOLEVBQXFCO0FBQ2xDLE1BQU1DLFFBQVFELGFBQWFqQixTQUFiLEdBQXlCRCxVQUF2Qzs7QUFFQSxNQUFJLENBQUNtQixNQUFNWixHQUFOLENBQUwsRUFBaUI7QUFDZkQsZUFBV0MsR0FBWDtBQUNEOztBQUVELFNBQU9ZLE1BQU1aLEdBQU4sQ0FBUDtBQUNELEMiLCJmaWxlIjoicHJlZml4ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMuaGFsbC9Qcm9qZWN0cy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW1lbFRvRGFzaCB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5cbmNvbnN0IGNhbWVsQ2FjaGUgPSB7fTtcbmNvbnN0IGRhc2hDYWNoZSA9IHt9O1xuY29uc3QgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsJ01veicsJ08nLCdtcycsICcnXTtcbmNvbnN0IG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xubGV0IHRlc3RFbGVtZW50O1xuXG4vKlxuICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gIFxuICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xuY29uc3QgdGVzdFByZWZpeCA9IChrZXkpID0+IHtcbiAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICBjb25zdCBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICBjb25zdCBub1ByZWZpeCA9IChwcmVmaXggPT09ICcnKTtcbiAgICBjb25zdCBwcmVmaXhlZFByb3BlcnR5TmFtZSA9IG5vUHJlZml4ID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgaWYgKHByZWZpeGVkUHJvcGVydHlOYW1lIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICBjYW1lbENhY2hlW2tleV0gPSBwcmVmaXhlZFByb3BlcnR5TmFtZTtcbiAgICAgIGRhc2hDYWNoZVtrZXldID0gYCR7KG5vUHJlZml4ID8gJycgOiAnLScpfSR7Y2FtZWxUb0Rhc2gocHJlZml4ZWRQcm9wZXJ0eU5hbWUpfWA7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoa2V5LCBhc0Rhc2hDYXNlKSA9PiB7XG4gIGNvbnN0IGNhY2hlID0gYXNEYXNoQ2FzZSA/IGRhc2hDYWNoZSA6IGNhbWVsQ2FjaGU7XG5cbiAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgdGVzdFByZWZpeChrZXkpO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuIl19

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(25);
	
	var _transformProps = __webpack_require__(30);
	
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL2J1aWxkLmpzIl0sIm5hbWVzIjpbImJ1aWxkIiwiWkVST19OT1RfWkVSTyIsInN0YXRlIiwiZGF0YSIsImhhc1RyYW5zZm9ybSIsInByb3BzIiwic2NhbGUiLCJ1bmRlZmluZWQiLCJzY2FsZVgiLCJzY2FsZVkiLCJ0cmFuc2Zvcm1PcmlnaW5YIiwid2lkdGgiLCJvcmlnaW5YIiwieCIsInRyYW5zZm9ybU9yaWdpblkiLCJoZWlnaHQiLCJvcmlnaW5ZIiwieSIsInNjYWxlVHJhbnNmb3JtWCIsInNjYWxlVHJhbnNmb3JtWSIsInNjYWxlUmVwbGFjZVgiLCJzY2FsZVJlcGxhY2VZIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJyb3RhdGUiLCJza2V3WCIsInNrZXdZIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJkZWZhdWx0VmFsdWUiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7a0JBS3dCQSxLOztBQUx4Qjs7QUFDQTs7Ozs7O0FBRUEsSUFBTUMsZ0JBQWdCLE1BQXRCOztBQUVlLFNBQVNELEtBQVQsQ0FBZUUsS0FBZixFQUFzQkMsSUFBdEIsRUFBNEI7QUFDekMsTUFBSUMsZUFBZSxLQUFuQjtBQUNBLE1BQU1DLFFBQVEsRUFBZDtBQUNBLE1BQU1DLFFBQVFKLE1BQU1JLEtBQU4sS0FBZ0JDLFNBQWhCLEdBQTRCTCxNQUFNSSxLQUFOLElBQWVMLGFBQTNDLEdBQTJEQyxNQUFNTSxNQUFOLElBQWdCLENBQXpGO0FBQ0EsTUFBTUMsU0FBU1AsTUFBTU8sTUFBTixLQUFpQkYsU0FBakIsR0FBNkJMLE1BQU1PLE1BQU4sSUFBZ0JSLGFBQTdDLEdBQTZESyxTQUFTLENBQXJGO0FBQ0EsTUFBTUksbUJBQW1CUCxLQUFLUSxLQUFMLElBQWMsQ0FBQ1QsTUFBTVUsT0FBTixJQUFpQixFQUFsQixJQUF3QixHQUF0QyxJQUE2Q1QsS0FBS1UsQ0FBM0U7QUFDQSxNQUFNQyxtQkFBbUJYLEtBQUtZLE1BQUwsSUFBZSxDQUFDYixNQUFNYyxPQUFOLElBQWlCLEVBQWxCLElBQXdCLEdBQXZDLElBQThDYixLQUFLYyxDQUE1RTtBQUNBLE1BQU1DLGtCQUFrQixDQUFFUixnQkFBRixJQUFzQkosUUFBUSxDQUE5QixDQUF4QjtBQUNBLE1BQU1hLGtCQUFrQixDQUFFTCxnQkFBRixJQUFzQkwsU0FBUyxDQUEvQixDQUF4QjtBQUNBLE1BQU1XLGdCQUFnQlYsbUJBQW1CSixLQUF6QztBQUNBLE1BQU1lLGdCQUFnQlAsbUJBQW1CTCxNQUF6QztBQUNBLE1BQU1hLFlBQVk7QUFDaEJDLDhCQUF3QnJCLE1BQU1zQixVQUE5QixVQUE2Q3RCLE1BQU11QixVQUFuRCxPQURnQjtBQUVoQm5CLDBCQUFvQlksZUFBcEIsVUFBd0NDLGVBQXhDLGdCQUFrRWIsS0FBbEUsVUFBNEVHLE1BQTVFLG9CQUFpR1csYUFBakcsVUFBbUhDLGFBQW5ILE9BRmdCO0FBR2hCSyx3QkFBa0J4QixNQUFNd0IsTUFBeEIsVUFBbUNoQixnQkFBbkMsVUFBd0RJLGdCQUF4RCxPQUhnQjtBQUloQmEsc0JBQWdCekIsTUFBTXlCLEtBQXRCLE9BSmdCO0FBS2hCQyxzQkFBZ0IxQixNQUFNMEIsS0FBdEI7QUFMZ0IsR0FBbEI7O0FBUUEsT0FBSyxJQUFJQyxHQUFULElBQWdCM0IsS0FBaEIsRUFBdUI7QUFDckIsUUFBSUEsTUFBTTRCLGNBQU4sQ0FBcUJELEdBQXJCLENBQUosRUFBK0I7QUFDN0IsVUFBSSx5QkFBZUEsR0FBZixDQUFKLEVBQXlCO0FBQ3ZCekIsdUJBQWUsSUFBZjtBQUNELE9BRkQsTUFFTztBQUNMQyxjQUFNLHdCQUFZd0IsR0FBWixDQUFOLElBQTBCM0IsTUFBTTJCLEdBQU4sQ0FBMUI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsTUFBSXpCLFlBQUosRUFBa0I7QUFDaEJDLFVBQU1pQixTQUFOLEdBQWtCLEVBQWxCOztBQUVBLFNBQUssSUFBSU8sSUFBVCxJQUFnQlAsU0FBaEIsRUFBMkI7QUFDekIsVUFBSUEsVUFBVVEsY0FBVixDQUF5QkQsSUFBekIsQ0FBSixFQUFtQztBQUNqQyxZQUFNRSxlQUFnQkYsU0FBUSxPQUFULEdBQW9CLEdBQXBCLEdBQTBCLEdBQS9DO0FBQ0F4QixjQUFNaUIsU0FBTixJQUFtQkEsVUFBVU8sSUFBVixFQUFlRyxPQUFmLENBQXVCLFlBQXZCLEVBQXFDRCxZQUFyQyxDQUFuQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPMUIsS0FBUDtBQUNEIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzLmhhbGwvUHJvamVjdHMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxUb0Rhc2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuXG5jb25zdCBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZChzdGF0ZSwgZGF0YSkge1xuICBsZXQgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIGNvbnN0IHByb3BzID0ge307XG4gIGNvbnN0IHNjYWxlID0gc3RhdGUuc2NhbGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlIHx8IFpFUk9fTk9UX1pFUk8gOiBzdGF0ZS5zY2FsZVggfHwgMTtcbiAgY29uc3Qgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDE7XG4gIGNvbnN0IHRyYW5zZm9ybU9yaWdpblggPSBkYXRhLndpZHRoICogKChzdGF0ZS5vcmlnaW5YIHx8IDUwKSAvIDEwMCkgKyBkYXRhLng7XG4gIGNvbnN0IHRyYW5zZm9ybU9yaWdpblkgPSBkYXRhLmhlaWdodCAqICgoc3RhdGUub3JpZ2luWSB8fCA1MCkgLyAxMDApICsgZGF0YS55O1xuICBjb25zdCBzY2FsZVRyYW5zZm9ybVggPSAtIHRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKTtcbiAgY29uc3Qgc2NhbGVUcmFuc2Zvcm1ZID0gLSB0cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpO1xuICBjb25zdCBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlO1xuICBjb25zdCBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWTtcbiAgY29uc3QgdHJhbnNmb3JtID0ge1xuICAgIHRyYW5zbGF0ZTogYHRyYW5zbGF0ZSgke3N0YXRlLnRyYW5zbGF0ZVh9LCAke3N0YXRlLnRyYW5zbGF0ZVl9KSBgLFxuICAgIHNjYWxlOiBgdHJhbnNsYXRlKCR7c2NhbGVUcmFuc2Zvcm1YfSwgJHtzY2FsZVRyYW5zZm9ybVl9KSBzY2FsZSgke3NjYWxlfSwgJHtzY2FsZVl9KSB0cmFuc2xhdGUoJHtzY2FsZVJlcGxhY2VYfSwgJHtzY2FsZVJlcGxhY2VZfSkgYCxcbiAgICByb3RhdGU6IGByb3RhdGUoJHtzdGF0ZS5yb3RhdGV9LCAke3RyYW5zZm9ybU9yaWdpblh9LCAke3RyYW5zZm9ybU9yaWdpbll9KSBgLFxuICAgIHNrZXdYOiBgc2tld1goJHtzdGF0ZS5za2V3WH0pIGAsXG4gICAgc2tld1k6IGBza2V3WSgke3N0YXRlLnNrZXdZfSkgYFxuICB9O1xuXG4gIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHNbY2FtZWxUb0Rhc2goa2V5KV0gPSBzdGF0ZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgIGZvciAobGV0IGtleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSAoa2V5ID09PSAnc2NhbGUnKSA/ICcxJyA6ICcwJztcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtrZXldLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn0iXX0=

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _valueTypes = __webpack_require__(5);
	
	exports.default = {
	  fill: _valueTypes.color,
	  stroke: _valueTypes.color,
	  scale: _valueTypes.scale,
	  scaleX: _valueTypes.scale,
	  scaleY: _valueTypes.scale,
	  d: _valueTypes.complex,
	  points: _valueTypes.complex,
	  opacity: _valueTypes.alpha,
	  fillOpacity: _valueTypes.alpha,
	  strokeOpacity: _valueTypes.alpha
	};
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbImZpbGwiLCJzdHJva2UiLCJzY2FsZSIsInNjYWxlWCIsInNjYWxlWSIsImQiLCJwb2ludHMiLCJvcGFjaXR5IiwiZmlsbE9wYWNpdHkiLCJzdHJva2VPcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O2tCQUVlO0FBQ2JBLHlCQURhO0FBRWJDLDJCQUZhO0FBR2JDLDBCQUhhO0FBSWJDLDJCQUphO0FBS2JDLDJCQUxhO0FBTWJDLHdCQU5hO0FBT2JDLDZCQVBhO0FBUWJDLDRCQVJhO0FBU2JDLGdDQVRhO0FBVWJDO0FBVmEsQyIsImZpbGUiOiJ2YWx1ZS10eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy5oYWxsL1Byb2plY3RzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFscGhhLCBjb2xvciwgY29tcGxleCwgc2NhbGUgfSBmcm9tICcuLi8uLi9pbmMvdmFsdWUtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpbGw6IGNvbG9yLFxuICBzdHJva2U6IGNvbG9yLFxuICBzY2FsZTogc2NhbGUsXG4gIHNjYWxlWDogc2NhbGUsXG4gIHNjYWxlWTogc2NhbGUsXG4gIGQ6IGNvbXBsZXgsXG4gIHBvaW50czogY29tcGxleCxcbiAgb3BhY2l0eTogYWxwaGEsXG4gIGZpbGxPcGFjaXR5OiBhbHBoYSxcbiAgc3Ryb2tlT3BhY2l0eTogYWxwaGFcbn07Il19

/***/ },
/* 35 */
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvYnVpbGQuanMiXSwibmFtZXMiOlsicGVyY2VudFRvUGl4ZWxzIiwicGVyY2VudCIsImxlbmd0aCIsInBhcnNlRmxvYXQiLCJzdGF0ZSIsInN0eWxlcyIsImRhc2hBcnJheVN0eWxlcyIsInNwYWNpbmciLCJoYXNEYXNoQXJyYXkiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7O0FBTUEsSUFBTUEsa0JBQWtCLFVBQUNDLE9BQUQsRUFBVUMsTUFBVjtBQUFBLFNBQXNCQyxXQUFXRixPQUFYLElBQXNCLEdBQXZCLEdBQThCQyxNQUE5QixHQUF1QyxJQUE1RDtBQUFBLENBQXhCOztrQkFFZSxVQUFDRSxLQUFELEVBQVFGLE1BQVIsRUFBbUI7QUFDaEMsTUFBTUcsU0FBUyxFQUFmO0FBQ0EsTUFBTUMsa0JBQWtCO0FBQ3RCSixZQUFRLENBRGM7QUFFdEJLLGFBQVNMLFNBQVM7QUFGSSxHQUF4QjtBQUlBLE1BQUlNLGVBQWUsS0FBbkI7O0FBRUEsT0FBSyxJQUFJQyxHQUFULElBQWdCTCxLQUFoQixFQUF1QjtBQUNyQixRQUFJQSxNQUFNTSxjQUFOLENBQXFCRCxHQUFyQixDQUFKLEVBQStCO0FBQzdCLFVBQU1FLFFBQVFQLE1BQU1LLEdBQU4sQ0FBZDs7QUFFQSxjQUFRQSxHQUFSO0FBQ0EsYUFBSyxRQUFMO0FBQ0EsYUFBSyxTQUFMO0FBQ0VELHlCQUFlLElBQWY7QUFDQUYsMEJBQWdCRyxHQUFoQixJQUF1QlQsZ0JBQWdCVyxLQUFoQixFQUF1QlQsTUFBdkIsQ0FBdkI7QUFDQTtBQUNGLGFBQUssUUFBTDtBQUNFRyxpQkFBTyxtQkFBUCxJQUE4QkwsZ0JBQWdCLENBQUNXLEtBQWpCLEVBQXdCVCxNQUF4QixDQUE5QjtBQUNBO0FBQ0Y7QUFDRUcsaUJBQU9JLEdBQVAsSUFBY0UsS0FBZDtBQVZGO0FBWUQ7QUFDRjs7QUFFRCxNQUFJSCxZQUFKLEVBQWtCO0FBQ2hCSCxXQUFPLGtCQUFQLElBQTZCQyxnQkFBZ0JKLE1BQWhCLEdBQXlCLEdBQXpCLEdBQStCSSxnQkFBZ0JDLE9BQTVFO0FBQ0Q7O0FBRUQsU0FBT0YsTUFBUDtBQUNELEMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMuaGFsbC9Qcm9qZWN0cy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xuY29uc3QgcGVyY2VudFRvUGl4ZWxzID0gKHBlcmNlbnQsIGxlbmd0aCkgPT4gKHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDApICogbGVuZ3RoICsgJ3B4JztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBsZW5ndGgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0ge307XG4gIGNvbnN0IGRhc2hBcnJheVN0eWxlcyA9IHtcbiAgICBsZW5ndGg6IDAsXG4gICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICB9O1xuICBsZXQgaGFzRGFzaEFycmF5ID0gZmFsc2U7XG5cbiAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICBzdHlsZXNbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGRhc2hBcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBkYXNoQXJyYXlTdHlsZXMuc3BhY2luZztcbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59OyJdfQ==

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWE5NjE1MTI1ZDI1MTM2YTVhNWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb2xvci10d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wYXJhbGxlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdG91Y2hlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9zdGFnZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3ZhbHVlLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXN5bmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9wYXJzZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL2NyZWF0ZS1yZW5kZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvdHJhbnNmb3JtLXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3ByZWZpeGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvYnVpbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNRO0FBQ0EsNENBQTJDLGNBQWMsdVo7Ozs7OztBQ1R6RDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rix3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxjQUFjLCs1Rjs7Ozs7O0FDNUx6RDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsY0FBYywyK0Y7Ozs7OztBQzFDekQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyxjQUFjLHUvSjs7Ozs7O0FDekR6RDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsY0FBYyxtNkI7Ozs7OztBQ2xCekQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyxjQUFjLG10RiIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDFhOTYxNTEyNWQyNTEzNmE1YTVhXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3BvcG1vdGlvbiA9IHJlcXVpcmUoJy4vcG9wbW90aW9uJyk7XG5cbnZhciBwb3Btb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcG9wbW90aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxud2luZG93LnBvcG1vdGlvbiA9IHBvcG1vdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTluYkc5aVlXd3Vhbk1pWFN3aWJtRnRaWE1pT2xzaWNHOXdiVzkwYVc5dUlpd2lkMmx1Wkc5M0lsMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJPenRKUVVGWlFTeFRPenM3TzBGQlExcERMRTlCUVU5RUxGTkJRVkFzUjBGQmJVSkJMRk5CUVc1Q0lpd2labWxzWlNJNkltZHNiMkpoYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGeWN5NW9ZV3hzTDFCeWIycGxZM1J6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENBcUlHRnpJSEJ2Y0cxdmRHbHZiaUJtY205dElDY3VMM0J2Y0cxdmRHbHZiaWM3WEc1M2FXNWtiM2N1Y0c5d2JXOTBhVzl1SUQwZ2NHOXdiVzkwYVc5dU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN2Z1BhdGggPSBleHBvcnRzLnN2ZyA9IGV4cG9ydHMuY3NzID0gZXhwb3J0cy5SZW5kZXJlciA9IGV4cG9ydHMudmFsdWUgPSBleHBvcnRzLnN0YWdnZXIgPSBleHBvcnRzLnR3ZWVuID0gZXhwb3J0cy50b3VjaGVzID0gZXhwb3J0cy5wb2ludGVyID0gZXhwb3J0cy5waHlzaWNzID0gZXhwb3J0cy5wYXJhbGxlbCA9IGV4cG9ydHMuZGVsYXkgPSBleHBvcnRzLmNyb3NzRmFkZSA9IGV4cG9ydHMuY29tcG9zaXRlID0gZXhwb3J0cy5jb2xvclR3ZWVuID0gZXhwb3J0cy5jaGFpbiA9IGV4cG9ydHMuYmxlbmRUd2VlbnMgPSBleHBvcnRzLkFjdGlvbiA9IGV4cG9ydHMudmFsdWVUeXBlcyA9IGV4cG9ydHMudHJhbnNmb3JtID0gZXhwb3J0cy5lYXNpbmcgPSBleHBvcnRzLmNhbGMgPSBleHBvcnRzLmN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lRW5kID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBleHBvcnRzLm9uRnJhbWVFbmQgPSBleHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLm9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLm9uRnJhbWVTdGFydCA9IHVuZGVmaW5lZDtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuL2ZyYW1lc3luYycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVTdGFydCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVN0YXJ0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVVwZGF0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVSZW5kZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVSZW5kZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lRW5kJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lRW5kO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZVN0YXJ0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lU3RhcnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lVXBkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lVXBkYXRlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZVJlbmRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVJlbmRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVFbmQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVFbmQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd0aW1lU2luY2VMYXN0RnJhbWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2N1cnJlbnRGcmFtZVRpbWVzdGFtcCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY3VycmVudEZyYW1lVGltZXN0YW1wO1xuICB9XG59KTtcblxudmFyIF9jYWxjMiA9IHJlcXVpcmUoJy4vaW5jL2NhbGMnKTtcblxudmFyIF9jYWxjID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2NhbGMyKTtcblxudmFyIF9lYXNpbmcyID0gcmVxdWlyZSgnLi9pbmMvZWFzaW5nJyk7XG5cbnZhciBfZWFzaW5nID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2Vhc2luZzIpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3RyYW5zZm9ybSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90cmFuc2Zvcm1lcnMpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gcmVxdWlyZSgnLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3ZhbHVlVHlwZXMyKTtcblxudmFyIF9hY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zJyk7XG5cbnZhciBfYWN0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hY3Rpb25zKTtcblxudmFyIF9ibGVuZFR3ZWVuczIgPSByZXF1aXJlKCcuL2FjdGlvbnMvYmxlbmQtdHdlZW5zJyk7XG5cbnZhciBfYmxlbmRUd2VlbnMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmxlbmRUd2VlbnMyKTtcblxudmFyIF9jaGFpbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY2hhaW4nKTtcblxudmFyIF9jaGFpbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGFpbjIpO1xuXG52YXIgX2NvbG9yVHdlZW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NvbG9yLXR3ZWVuJyk7XG5cbnZhciBfY29sb3JUd2VlbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvclR3ZWVuMik7XG5cbnZhciBfY29tcG9zaXRlMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jb21wb3NpdGUnKTtcblxudmFyIF9jb21wb3NpdGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRlMik7XG5cbnZhciBfY3Jvc3NGYWRlMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jcm9zcy1mYWRlJyk7XG5cbnZhciBfY3Jvc3NGYWRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nyb3NzRmFkZTIpO1xuXG52YXIgX2RlbGF5MiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9kZWxheScpO1xuXG52YXIgX2RlbGF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlbGF5Mik7XG5cbnZhciBfcGFyYWxsZWwyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BhcmFsbGVsJyk7XG5cbnZhciBfcGFyYWxsZWwzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyYWxsZWwyKTtcblxudmFyIF9waHlzaWNzMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9waHlzaWNzJyk7XG5cbnZhciBfcGh5c2ljczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9waHlzaWNzMik7XG5cbnZhciBfcG9pbnRlcjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcG9pbnRlcicpO1xuXG52YXIgX3BvaW50ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9pbnRlcjIpO1xuXG52YXIgX3RvdWNoZXMyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3RvdWNoZXMnKTtcblxudmFyIF90b3VjaGVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvdWNoZXMyKTtcblxudmFyIF90d2VlbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvdHdlZW4nKTtcblxudmFyIF90d2VlbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2VlbjIpO1xuXG52YXIgX3N0YWdnZXIyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3N0YWdnZXInKTtcblxudmFyIF9zdGFnZ2VyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YWdnZXIyKTtcblxudmFyIF92YWx1ZTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvdmFsdWUnKTtcblxudmFyIF92YWx1ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZTIpO1xuXG52YXIgX3JlbmRlcmVycyA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzJyk7XG5cbnZhciBfcmVuZGVyZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbmRlcmVycyk7XG5cbnZhciBfY3NzMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL2NzcycpO1xuXG52YXIgX2NzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3MyKTtcblxudmFyIF9zdmcyID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMvc3ZnJyk7XG5cbnZhciBfc3ZnMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2ZzIpO1xuXG52YXIgX3N2Z1BhdGgyID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMvc3ZnLXBhdGgnKTtcblxudmFyIF9zdmdQYXRoMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z1BhdGgyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZXhwb3J0cy5jYWxjID0gX2NhbGM7XG5leHBvcnRzLmVhc2luZyA9IF9lYXNpbmc7XG5leHBvcnRzLnRyYW5zZm9ybSA9IF90cmFuc2Zvcm07XG5leHBvcnRzLnZhbHVlVHlwZXMgPSBfdmFsdWVUeXBlcztcblxuLy8gQWN0aW9uc1xuXG5leHBvcnRzLkFjdGlvbiA9IF9hY3Rpb25zMi5kZWZhdWx0O1xuZXhwb3J0cy5ibGVuZFR3ZWVucyA9IF9ibGVuZFR3ZWVuczMuZGVmYXVsdDtcbmV4cG9ydHMuY2hhaW4gPSBfY2hhaW4zLmRlZmF1bHQ7XG5leHBvcnRzLmNvbG9yVHdlZW4gPSBfY29sb3JUd2VlbjMuZGVmYXVsdDtcbmV4cG9ydHMuY29tcG9zaXRlID0gX2NvbXBvc2l0ZTMuZGVmYXVsdDtcbmV4cG9ydHMuY3Jvc3NGYWRlID0gX2Nyb3NzRmFkZTMuZGVmYXVsdDtcbmV4cG9ydHMuZGVsYXkgPSBfZGVsYXkzLmRlZmF1bHQ7XG5leHBvcnRzLnBhcmFsbGVsID0gX3BhcmFsbGVsMy5kZWZhdWx0O1xuZXhwb3J0cy5waHlzaWNzID0gX3BoeXNpY3MzLmRlZmF1bHQ7XG5leHBvcnRzLnBvaW50ZXIgPSBfcG9pbnRlcjMuZGVmYXVsdDtcbmV4cG9ydHMudG91Y2hlcyA9IF90b3VjaGVzMy5kZWZhdWx0O1xuZXhwb3J0cy50d2VlbiA9IF90d2VlbjMuZGVmYXVsdDtcbmV4cG9ydHMuc3RhZ2dlciA9IF9zdGFnZ2VyMy5kZWZhdWx0O1xuZXhwb3J0cy52YWx1ZSA9IF92YWx1ZTMuZGVmYXVsdDtcblxuLy8gUmVuZGVyZXJzXG5cbmV4cG9ydHMuUmVuZGVyZXIgPSBfcmVuZGVyZXJzMi5kZWZhdWx0O1xuZXhwb3J0cy5jc3MgPSBfY3NzMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmcgPSBfc3ZnMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmdQYXRoID0gX3N2Z1BhdGgzLmRlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2IzQnRiM1JwYjI0dWFuTWlYU3dpYm1GdFpYTWlPbHNpYjI1R2NtRnRaVk4wWVhKMElpd2liMjVHY21GdFpWVndaR0YwWlNJc0ltOXVSbkpoYldWU1pXNWtaWElpTENKdmJrWnlZVzFsUlc1a0lpd2lZMkZ1WTJWc1QyNUdjbUZ0WlZOMFlYSjBJaXdpWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlNJc0ltTmhibU5sYkU5dVJuSmhiV1ZTWlc1a1pYSWlMQ0pqWVc1alpXeFBia1p5WVcxbFJXNWtJaXdpZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsSWl3aVkzVnljbVZ1ZEVaeVlXMWxWR2x0WlhOMFlXMXdJaXdpWTJGc1l5SXNJbVZoYzJsdVp5SXNJblJ5WVc1elptOXliU0lzSW5aaGJIVmxWSGx3WlhNaUxDSkJZM1JwYjI0aUxDSmliR1Z1WkZSM1pXVnVjeUlzSW1Ob1lXbHVJaXdpWTI5c2IzSlVkMlZsYmlJc0ltTnZiWEJ2YzJsMFpTSXNJbU55YjNOelJtRmtaU0lzSW1SbGJHRjVJaXdpY0dGeVlXeHNaV3dpTENKd2FIbHphV056SWl3aWNHOXBiblJsY2lJc0luUnZkV05vWlhNaUxDSjBkMlZsYmlJc0luTjBZV2RuWlhJaUxDSjJZV3gxWlNJc0lsSmxibVJsY21WeUlpd2lZM056SWl3aWMzWm5JaXdpYzNablVHRjBhQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHpRa0ZGUlVFc1dUczdPenM3TzNOQ1FVTkJReXhoT3pzN096czdjMEpCUTBGRExHRTdPenM3T3p0elFrRkRRVU1zVlRzN096czdPM05DUVVOQlF5eHJRanM3T3pzN08zTkNRVU5CUXl4dFFqczdPenM3TzNOQ1FVTkJReXh0UWpzN096czdPM05DUVVOQlF5eG5RanM3T3pzN08zTkNRVU5CUXl4clFqczdPenM3TzNOQ1FVTkJReXh4UWpzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMUZCUjFWRExFazdVVUZEUVVNc1RUdFJRVU5CUXl4VE8xRkJRMEZETEZVN08wRkJSVm83TzFGQlEwOURMRTA3VVVGRFFVTXNWenRSUVVOQlF5eExPMUZCUTBGRExGVTdVVUZEUVVNc1V6dFJRVU5CUXl4VE8xRkJRMEZETEVzN1VVRkRRVU1zVVR0UlFVTkJReXhQTzFGQlEwRkRMRTg3VVVGRFFVTXNUenRSUVVOQlF5eExPMUZCUTBGRExFODdVVUZEUVVNc1N6czdRVUZGVURzN1VVRkRUME1zVVR0UlFVTkJReXhITzFGQlEwRkRMRWM3VVVGRFFVTXNUeUlzSW1acGJHVWlPaUp3YjNCdGIzUnBiMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoY25NdWFHRnNiQzlRY205cVpXTjBjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkx5QkdjbUZ0WlhONWJtTWdjMk5vWldSMWJHVnljMXh1Wlhod2IzSjBJSHRjYmlBZ2IyNUdjbUZ0WlZOMFlYSjBMRnh1SUNCdmJrWnlZVzFsVlhCa1lYUmxMRnh1SUNCdmJrWnlZVzFsVW1WdVpHVnlMRnh1SUNCdmJrWnlZVzFsUlc1a0xGeHVJQ0JqWVc1alpXeFBia1p5WVcxbFUzUmhjblFzWEc0Z0lHTmhibU5sYkU5dVJuSmhiV1ZWY0dSaGRHVXNYRzRnSUdOaGJtTmxiRTl1Um5KaGJXVlNaVzVrWlhJc1hHNGdJR05oYm1ObGJFOXVSbkpoYldWRmJtUXNYRzRnSUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlN4Y2JpQWdZM1Z5Y21WdWRFWnlZVzFsVkdsdFpYTjBZVzF3WEc1OUlHWnliMjBnSnk0dlpuSmhiV1Z6ZVc1akp6dGNibHh1Wlhod2IzSjBJQ29nWVhNZ1kyRnNZeUJtY205dElDY3VMMmx1WXk5allXeGpKenRjYm1WNGNHOXlkQ0FxSUdGeklHVmhjMmx1WnlCbWNtOXRJQ2N1TDJsdVl5OWxZWE5wYm1jbk8xeHVaWGh3YjNKMElDb2dZWE1nZEhKaGJuTm1iM0p0SUdaeWIyMGdKeTR2YVc1akwzUnlZVzV6Wm05eWJXVnljeWM3WEc1bGVIQnZjblFnS2lCaGN5QjJZV3gxWlZSNWNHVnpJR1p5YjIwZ0p5NHZhVzVqTDNaaGJIVmxMWFI1Y0dWekp6dGNibHh1THk4Z1FXTjBhVzl1YzF4dVpYaHdiM0owSUVGamRHbHZiaUJtY205dElDY3VMMkZqZEdsdmJuTW5PMXh1Wlhod2IzSjBJR0pzWlc1a1ZIZGxaVzV6SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlpYkdWdVpDMTBkMlZsYm5Nbk8xeHVaWGh3YjNKMElHTm9ZV2x1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlqYUdGcGJpYzdYRzVsZUhCdmNuUWdZMjlzYjNKVWQyVmxiaUJtY205dElDY3VMMkZqZEdsdmJuTXZZMjlzYjNJdGRIZGxaVzRuTzF4dVpYaHdiM0owSUdOdmJYQnZjMmwwWlNCbWNtOXRJQ2N1TDJGamRHbHZibk12WTI5dGNHOXphWFJsSnp0Y2JtVjRjRzl5ZENCamNtOXpjMFpoWkdVZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDJOeWIzTnpMV1poWkdVbk8xeHVaWGh3YjNKMElHUmxiR0Y1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlrWld4aGVTYzdYRzVsZUhCdmNuUWdjR0Z5WVd4c1pXd2dabkp2YlNBbkxpOWhZM1JwYjI1ekwzQmhjbUZzYkdWc0p6dGNibVY0Y0c5eWRDQndhSGx6YVdOeklHWnliMjBnSnk0dllXTjBhVzl1Y3k5d2FIbHphV056Snp0Y2JtVjRjRzl5ZENCd2IybHVkR1Z5SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTl3YjJsdWRHVnlKenRjYm1WNGNHOXlkQ0IwYjNWamFHVnpJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OTBiM1ZqYUdWekp6dGNibVY0Y0c5eWRDQjBkMlZsYmlCbWNtOXRJQ2N1TDJGamRHbHZibk12ZEhkbFpXNG5PMXh1Wlhod2IzSjBJSE4wWVdkblpYSWdabkp2YlNBbkxpOWhZM1JwYjI1ekwzTjBZV2RuWlhJbk8xeHVaWGh3YjNKMElIWmhiSFZsSUdaeWIyMGdKeTR2WVdOMGFXOXVjeTkyWVd4MVpTYzdYRzVjYmk4dklGSmxibVJsY21WeWMxeHVaWGh3YjNKMElGSmxibVJsY21WeUlHWnliMjBnSnk0dmNtVnVaR1Z5WlhKekp6dGNibVY0Y0c5eWRDQmpjM01nWm5KdmJTQW5MaTl5Wlc1a1pYSmxjbk12WTNOekp6dGNibVY0Y0c5eWRDQnpkbWNnWm5KdmJTQW5MaTl5Wlc1a1pYSmxjbk12YzNabkp6dGNibVY0Y0c5eWRDQnpkbWRRWVhSb0lHWnliMjBnSnk0dmNtVnVaR1Z5WlhKekwzTjJaeTF3WVhSb0p6dGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcG9wbW90aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zbW9vdGggPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBleHBvcnRzLmRpbGF0ZSA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuYW5nbGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG52YXIgdG9EZWNpbWFsID0gZnVuY3Rpb24gKG51bSkge1xuICB2YXIgcHJlY2lzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAyO1xuXG4gIHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xufTtcblxudmFyIFpFUk9fUE9JTlQgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHo6IDBcbn07XG5cbnZhciBkaXN0YW5jZTFEID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKTtcbn07XG5cbi8qXG4gIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gIFxuICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgYXJlIGF0IDAsMFxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xudmFyIGFuZ2xlID0gZXhwb3J0cy5hbmdsZSA9IGZ1bmN0aW9uIChhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBaRVJPX1BPSU5UO1xuICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbn07XG5cbi8qXG4gIERpbGF0ZVxuICBcbiAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICBcbiAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gIFxuICBhIC0tLS0tLS0tLSBiXG4gIFxuICB0b1xuICBcbiAgYSAtLS0tIGJcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xudmFyIGRpbGF0ZSA9IGV4cG9ydHMuZGlsYXRlID0gZnVuY3Rpb24gKGEsIGIsIGRpbGF0aW9uKSB7XG4gIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xudmFyIGRpc3RhbmNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGZ1bmN0aW9uIChhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBaRVJPX1BPSU5UO1xuXG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICB9IGVsc2Uge1xuICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICB2YXIgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgdmFyIHpEZWx0YSA9ICgwLCBfdXRpbHMuaXNOdW0pKGEueikgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xufTtcblxuLypcbiAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xudmFyIGdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGZ1bmN0aW9uIChmcm9tLCB0bywgcHJvZ3Jlc3MpIHtcbiAgcmV0dXJuIC1wcm9ncmVzcyAqIGZyb20gKyBwcm9ncmVzcyAqIHRvICsgZnJvbTtcbn07XG5cbi8qXG4gIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gIFxuICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbnZhciBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgfTtcbn07XG5cbi8qXG4gIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xufTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbnZhciBzbW9vdGggPSBleHBvcnRzLnNtb290aCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uKSB7XG4gIHZhciBzbW9vdGhpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDA7XG4gIHJldHVybiB0b0RlY2ltYWwob2xkVmFsdWUgKyBkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGZ1bmN0aW9uICh4cHMsIGZyYW1lRHVyYXRpb24pIHtcbiAgcmV0dXJuICgwLCBfdXRpbHMuaXNOdW0pKHhwcykgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcbn07XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZnVuY3Rpb24gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSB7XG4gIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG59O1xuXG4vKlxuICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICBcbiAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG52YXIgc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoc3RlcHMsIHByb2dyZXNzKSB7XG4gIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICB2YXIgdGFyZ2V0ID0gMSAtIDEgLyBzdGVwcztcbiAgdmFyIHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZZMkZzWXk1cWN5SmRMQ0p1WVcxbGN5STZXeUowYjBSbFkybHRZV3dpTENKdWRXMGlMQ0p3Y21WamFYTnBiMjRpTENKTllYUm9JaXdpY205MWJtUWlMQ0phUlZKUFgxQlBTVTVVSWl3aWVDSXNJbmtpTENKNklpd2laR2x6ZEdGdVkyVXhSQ0lzSW1FaUxDSmlJaXdpWVdKeklpd2lZVzVuYkdVaUxDSnlZV1JwWVc1elZHOUVaV2R5WldWeklpd2lZWFJoYmpJaUxDSmtaV2R5WldWelZHOVNZV1JwWVc1eklpd2laR1ZuY21WbGN5SXNJbEJKSWl3aVpHbHNZWFJsSWl3aVpHbHNZWFJwYjI0aUxDSmthWE4wWVc1alpTSXNJbmhFWld4MFlTSXNJbmxFWld4MFlTSXNJbnBFWld4MFlTSXNJbk54Y25RaUxDSm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU0lzSW1aeWIyMGlMQ0owYnlJc0luWmhiSFZsSWl3aVoyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTWlMQ0p3Y205bmNtVnpjeUlzSW5CdmFXNTBSbkp2YlVGdVoyeGxRVzVrUkdsemRHRnVZMlVpTENKdmNtbG5hVzRpTENKamIzTWlMQ0p6YVc0aUxDSnlZV1JwWVc1eklpd2ljMjF2YjNSb0lpd2libVYzVm1Gc2RXVWlMQ0p2YkdSV1lXeDFaU0lzSW1SMWNtRjBhVzl1SWl3aWMyMXZiM1JvYVc1bklpd2liV0Y0SWl3aWMzQmxaV1JRWlhKR2NtRnRaU0lzSW5od2N5SXNJbVp5WVcxbFJIVnlZWFJwYjI0aUxDSnpjR1ZsWkZCbGNsTmxZMjl1WkNJc0luWmxiRzlqYVhSNUlpd2ljM1JsY0ZCeWIyZHlaWE56SWl3aWMzUmxjSE1pTENKelpXZHRaVzUwSWl3aWRHRnlaMlYwSWl3aWNISnZaM0psYzNOUFpsUmhjbWRsZENJc0ltMXBiaUlzSW1ac2IyOXlJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96dEJRVVZCT3pzN096czdPMEZCVDBFc1NVRkJUVUVzV1VGQldTeFZRVUZEUXl4SFFVRkVMRVZCUVhkQ08wRkJRVUVzVFVGQmJFSkRMRk5CUVd0Q0xIVkZRVUZPTEVOQlFVMDdPMEZCUTNoRFFTeDFRa0ZCV1N4RlFVRmFMRVZCUVd0Q1FTeFRRVUZzUWp0QlFVTkJMRk5CUVU5RExFdEJRVXRETEV0QlFVd3NRMEZCVjBnc1RVRkJUVU1zVTBGQmFrSXNTVUZCT0VKQkxGTkJRWEpETzBGQlEwUXNRMEZJUkRzN1FVRkxRU3hKUVVGTlJ5eGhRVUZoTzBGQlEycENReXhMUVVGSExFTkJSR003UVVGRmFrSkRMRXRCUVVjc1EwRkdZenRCUVVkcVFrTXNTMEZCUnp0QlFVaGpMRU5CUVc1Q096dEJRVTFCTEVsQlFVMURMR0ZCUVdFc1ZVRkJRME1zUTBGQlJDeEZRVUZKUXl4RFFVRktPMEZCUVVFc1UwRkJWVklzUzBGQlMxTXNSMEZCVEN4RFFVRlRSaXhKUVVGSlF5eERRVUZpTEVOQlFWWTdRVUZCUVN4RFFVRnVRanM3UVVGRlFUczdPenM3T3pzN096dEJRVlZQTEVsQlFVMUZMSGRDUVVGUkxGVkJRVU5JTEVOQlFVUTdRVUZCUVN4TlFVRkpReXhEUVVGS0xIVkZRVUZSVGl4VlFVRlNPMEZCUVVFc1UwRkJkVUpUTEdsQ1FVRnBRbGdzUzBGQlMxa3NTMEZCVEN4RFFVRlhUQ3hGUVVGRlNpeERRVUZHTEVkQlFVMUxMRVZCUVVWTUxFTkJRVzVDTEVWQlFYTkNTU3hGUVVGRlNDeERRVUZHTEVkQlFVMUpMRVZCUVVWS0xFTkJRVGxDTEVOQlFXcENMRU5CUVhaQ08wRkJRVUVzUTBGQlpEczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVk1zT0VOQlFXMUNMRlZCUVVORExFOUJRVVE3UVVGQlFTeFRRVUZoUVN4VlFVRlZaQ3hMUVVGTFpTeEZRVUZtTEVkQlFXOUNMRWRCUVdwRE8wRkJRVUVzUTBGQmVrSTdPMEZCUlZBN096czdPenM3T3pzN096czdPenM3T3p0QlFXdENUeXhKUVVGTlF5d3dRa0ZCVXl4VlFVRkRWQ3hEUVVGRUxFVkJRVWxETEVOQlFVb3NSVUZCVDFNc1VVRkJVRHRCUVVGQkxGTkJRVzlDVml4SlFVRkxMRU5CUVVORExFbEJRVWxFTEVOQlFVd3NTVUZCVlZVc1VVRkJia003UVVGQlFTeERRVUZtT3p0QlFVVlFPenM3T3pzN096czdRVUZUVHl4SlFVRk5ReXc0UWtGQlZ5eFZRVUZEV0N4RFFVRkVMRVZCUVhWQ08wRkJRVUVzVFVGQmJrSkRMRU5CUVcxQ0xIVkZRVUZtVGl4VlFVRmxPenRCUVVNM1F6dEJRVU5CTEUxQlFVa3NhMEpCUVUxTExFTkJRVTRzUTBGQlNpeEZRVUZqTzBGQlExb3NWMEZCVDBRc1YwRkJWME1zUTBGQldDeEZRVUZqUXl4RFFVRmtMRU5CUVZBN08wRkJSVVk3UVVGRFF5eEhRVXBFTEUxQlNVODdRVUZEVEN4UlFVRk5WeXhUUVVGVFlpeFhRVUZYUXl4RlFVRkZTaXhEUVVGaUxFVkJRV2RDU3l4RlFVRkZUQ3hEUVVGc1FpeERRVUZtTzBGQlEwRXNVVUZCVFdsQ0xGTkJRVk5rTEZkQlFWZERMRVZCUVVWSUxFTkJRV0lzUlVGQlowSkpMRVZCUVVWS0xFTkJRV3hDTEVOQlFXWTdRVUZEUVN4UlFVRk5hVUlzVTBGQlZTeHJRa0ZCVFdRc1JVRkJSVVlzUTBGQlVpeERRVUZFTEVkQlFXVkRMRmRCUVZkRExFVkJRVVZHTEVOQlFXSXNSVUZCWjBKSExFVkJRVVZJTEVOQlFXeENMRU5CUVdZc1IwRkJjME1zUTBGQmNrUTdPMEZCUlVFc1YwRkJUMHdzUzBGQlMzTkNMRWxCUVV3c1EwRkJWU3hUUVVGRFNDeE5RVUZFTEVWQlFWY3NRMEZCV0N4aFFVRnBRa01zVFVGQmFrSXNSVUZCTWtJc1EwRkJNMElzWVVGQmFVTkRMRTFCUVdwRExFVkJRVEpETEVOQlFUTkRMRU5CUVZZc1EwRkJVRHRCUVVORU8wRkJRMFlzUTBGaVRUczdRVUZsVURzN096czdPenM3T3pzN08wRkJXVThzU1VGQlRVVXNjMFJCUVhWQ0xGVkJRVU5ETEVsQlFVUXNSVUZCVDBNc1JVRkJVQ3hGUVVGWFF5eExRVUZZTzBGQlFVRXNVMEZCY1VJc1EwRkJRMEVzVVVGQlVVWXNTVUZCVkN4TFFVRnJRa01zUzBGQlMwUXNTVUZCZGtJc1EwRkJja0k3UVVGQlFTeERRVUUzUWpzN1FVRkZVRHM3T3pzN096czdPenM3UVVGWFR5eEpRVUZOUnl4elJFRkJkVUlzVlVGQlEwZ3NTVUZCUkN4RlFVRlBReXhGUVVGUUxFVkJRVmRITEZGQlFWZzdRVUZCUVN4VFFVRjVRaXhEUVVGRlFTeFJRVUZHTEVkQlFXRktMRWxCUVdRc1IwRkJkVUpKTEZkQlFWZElMRVZCUVd4RExFZEJRWGREUkN4SlFVRm9SVHRCUVVGQkxFTkJRVGRDT3p0QlFVVlFPenM3T3pzN096dEJRVkZQTEVsQlFVMUxMR2RGUVVFMFFpeFZRVUZEUXl4TlFVRkVMRVZCUVZOd1FpeExRVUZVTEVWQlFXZENVU3hSUVVGb1FpeEZRVUUyUWp0QlFVTndSVklzVlVGQlVVY3NhVUpCUVdsQ1NDeExRVUZxUWl4RFFVRlNPenRCUVVWQkxGTkJRVTg3UVVGRFRGQXNUMEZCUjJVc1YwRkJWMnhDTEV0QlFVc3JRaXhIUVVGTUxFTkJRVk55UWl4TFFVRlVMRU5CUVZnc1IwRkJOa0p2UWl4UFFVRlBNMElzUTBGRWJFTTdRVUZGVEVNc1QwRkJSMk1zVjBGQlYyeENMRXRCUVV0blF5eEhRVUZNTEVOQlFWTjBRaXhMUVVGVUxFTkJRVmdzUjBGQk5rSnZRaXhQUVVGUE1VSTdRVUZHYkVNc1IwRkJVRHRCUVVsRUxFTkJVRTA3TzBGQlUxQTdPenM3T3p0QlFVMVBMRWxCUVUxUExEaERRVUZ0UWl4VlFVRkRjMElzVDBGQlJEdEJRVUZCTEZOQlFXRkJMRlZCUVZVc1IwRkJWaXhIUVVGblFtcERMRXRCUVV0bExFVkJRV3hETzBGQlFVRXNRMEZCZWtJN08wRkJSVkE3T3pzN096czdPMEZCVVU4c1NVRkJUVzFDTERCQ1FVRlRMRlZCUVVORExGRkJRVVFzUlVGQlYwTXNVVUZCV0N4RlFVRnhRa01zVVVGQmNrSTdRVUZCUVN4TlFVRXJRa01zVTBGQkwwSXNkVVZCUVRKRExFTkJRVE5ETzBGQlFVRXNVMEZCYVVSNlF5eFZRVUZWZFVNc1YwRkJXVU1zV1VGQldVWXNWMEZCVjBNc1VVRkJka0lzU1VGQmJVTndReXhMUVVGTGRVTXNSMEZCVEN4RFFVRlRSQ3hUUVVGVUxFVkJRVzlDUkN4UlFVRndRaXhEUVVGNlJDeERRVUZxUkR0QlFVRkJMRU5CUVdZN08wRkJSVkE3T3pzN096dEJRVTFQTEVsQlFVMUhMSGREUVVGblFpeFZRVUZEUXl4SFFVRkVMRVZCUVUxRExHRkJRVTQ3UVVGQlFTeFRRVUY1UWl4clFrRkJUVVFzUjBGQlRpeERRVUZFTEVkQlFXVkJMRTlCUVU4c1QwRkJUME1zWVVGQlpDeERRVUZtTEVkQlFUaERMRU5CUVhSRk8wRkJRVUVzUTBGQmRFSTdPMEZCUlZBN096czdPenRCUVUxUExFbEJRVTFETERCRFFVRnBRaXhWUVVGRFF5eFJRVUZFTEVWQlFWZEdMR0ZCUVZnN1FVRkJRU3hUUVVFMlFrVXNXVUZCV1N4UFFVRlBSaXhoUVVGdVFpeERRVUUzUWp0QlFVRkJMRU5CUVhaQ096dEJRVVZRT3pzN096czdPMEZCVDA4c1NVRkJUVWNzYzBOQlFXVXNWVUZCUTBNc1MwRkJSQ3hGUVVGUmJFSXNVVUZCVWl4RlFVRnhRanRCUVVNdlF5eE5RVUZOYlVJc1ZVRkJWU3hMUVVGTFJDeFJRVUZSTEVOQlFXSXNRMEZCYUVJN1FVRkRRU3hOUVVGTlJTeFRRVUZUTEVsQlFVc3NTVUZCU1VZc1MwRkJlRUk3UVVGRFFTeE5RVUZOUnl4dFFrRkJiVUpxUkN4TFFVRkxhMFFzUjBGQlRDeERRVUZUZEVJc1YwRkJWMjlDTEUxQlFYQkNMRVZCUVRSQ0xFTkJRVFZDTEVOQlFYcENPenRCUVVWQkxGTkJRVTlvUkN4TFFVRkxiVVFzUzBGQlRDeERRVUZYUml4dFFrRkJiVUpHTEU5QlFUbENMRWxCUVhsRFFTeFBRVUZvUkR0QlFVTkVMRU5CVGswaUxDSm1hV3hsSWpvaVkyRnNZeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0Z5Y3k1b1lXeHNMMUJ5YjJwbFkzUnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdselRuVnRJSDBnWm5KdmJTQW5MaTkxZEdsc2N5YzdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdiblZ0WW1WeUlIUnZJSGdnWkdWamFXMWhiQ0J3YkdGalpYTmNibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wxY2Jpb3ZYRzVqYjI1emRDQjBiMFJsWTJsdFlXd2dQU0FvYm5WdExDQndjbVZqYVhOcGIyNGdQU0F5S1NBOVBpQjdYRzRnSUhCeVpXTnBjMmx2YmlBOUlERXdJQ29xSUhCeVpXTnBjMmx2Ymp0Y2JpQWdjbVYwZFhKdUlFMWhkR2d1Y205MWJtUW9iblZ0SUNvZ2NISmxZMmx6YVc5dUtTQXZJSEJ5WldOcGMybHZianRjYm4wN1hHNWNibU52Ym5OMElGcEZVazlmVUU5SlRsUWdQU0I3WEc0Z0lIZzZJREFzWEc0Z0lIazZJREFzWEc0Z0lIbzZJREJjYm4wN1hHNWNibU52Ym5OMElHUnBjM1JoYm1ObE1VUWdQU0FvWVN3Z1lpa2dQVDRnVFdGMGFDNWhZbk1vWVNBdElHSXBPMXh1WEc0dktseHVJQ0JCYm1kc1pTQmlaWFIzWldWdUlIQnZhVzUwYzF4dUlDQmNiaUFnVkhKaGJuTnNZWFJsY3lCMGFHVWdhSGx3YjNSb1pYUnBZMkZzSUd4cGJtVWdjMjhnZEdoaGRDQjBhR1VnSjJaeWIyMG5JR052YjNKa2FXNWhkR1Z6WEc0Z0lHRnlaU0JoZENBd0xEQmNiaUFnWEc0Z0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1dDQmhibVFnV1NCamIyOXlaR2x1WVhSbGN5QnZaaUJtY205dElIQnZhVzUwWEc0Z0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1dDQmhibVFnV1NCamIzSmthVzVoZEdWeklHOW1JSFJ2SUhCdmFXNTBYRzRnSUVCeVpYUjFjbTRnVzNKaFpHbGhibDA2SUVGdVoyeGxJR0psZEhkbFpXNGdkR2hsSUhSM2J5QndiMmx1ZEhNZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmhibWRzWlNBOUlDaGhMQ0JpSUQwZ1drVlNUMTlRVDBsT1ZDa2dQVDRnY21Ga2FXRnVjMVJ2UkdWbmNtVmxjeWhOWVhSb0xtRjBZVzR5S0dFdWVDQXRJR0l1ZUN3Z1lTNTVJQzBnWWk1NUtTazdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdaR1ZuY21WbGN5QjBieUJ5WVdScFlXNXpYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlHUmxaM0psWlhOY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmtaV2R5WldWelZHOVNZV1JwWVc1eklEMGdLR1JsWjNKbFpYTXBJRDArSUdSbFozSmxaWE1nS2lCTllYUm9MbEJKSUM4Z01UZ3dPMXh1WEc0dktseHVJQ0JFYVd4aGRHVmNiaUFnWEc0Z0lFTm9ZVzVuWlNCMGFHVWdjSEp2WjNKbGMzTnBiMjRnWW1WMGQyVmxiaUJoSUdGdVpDQmlJR0ZqWTI5eVpHbHVaeUIwYnlCa2FXeGhkR2x2Ymk1Y2JpQWdYRzRnSUZOdklHUnBiR0YwYVc5dUlEMGdNQzQxSUhkdmRXeGtJR05vWVc1blpWeHVJQ0JjYmlBZ1lTQXRMUzB0TFMwdExTMGdZbHh1SUNCY2JpQWdkRzljYmlBZ1hHNGdJR0VnTFMwdExTQmlYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVScGJHRjBaU0J3Y205bmNtVnpjeUJpZVNCNFhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRkJ5WlhacGIzVnpJSFpoYkhWbElIQnNkWE1nZEdobElHUnBiR0YwWldRZ1pHbG1abVZ5Wlc1alpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmthV3hoZEdVZ1BTQW9ZU3dnWWl3Z1pHbHNZWFJwYjI0cElEMCtJR0VnS3lBb0tHSWdMU0JoS1NBcUlHUnBiR0YwYVc5dUtUdGNibHh1THlwY2JpQWdSR2x6ZEdGdVkyVmNiaUFnWEc0Z0lGSmxkSFZ5Ym5NZ2RHaGxJR1JwYzNSaGJtTmxJR0psZEhkbFpXNGdkSGR2SUc0Z1pHbHRaVzV6YVc5dVlXd2djRzlwYm5SekxseHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dlltcGxZM1F2Ym5WdFltVnlYVG9nZUNCaGJtUWdlU0J2Y2lCcWRYTjBJSGdnYjJZZ2NHOXBiblFnUVZ4dUlDQkFjR0Z5WVcwZ1cyOWlhbVZqZEM5dWRXMWlaWEpkT2lBb2IzQjBhVzl1WVd3cE9pQjRJR0Z1WkNCNUlHOXlJR3AxYzNRZ2VDQnZaaUJ3YjJsdWRDQkNYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZSb1pTQmthWE4wWVc1alpTQmlaWFIzWldWdUlIUm9aU0IwZDI4Z2NHOXBiblJ6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdScGMzUmhibU5sSUQwZ0tHRXNJR0lnUFNCYVJWSlBYMUJQU1U1VUtTQTlQaUI3WEc0Z0lDOHZJREZFSUdScGJXVnVjMmx2Ym5OY2JpQWdhV1lnS0dselRuVnRLR0VwS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1JwYzNSaGJtTmxNVVFvWVN3Z1lpazdYRzVjYmlBZ0x5OGdUWFZzZEdrdFpHbHRaVzV6YVc5dVlXeGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmpiMjV6ZENCNFJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlQ3dnWWk1NEtUdGNiaUFnSUNCamIyNXpkQ0I1UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVTd2dZaTU1S1R0Y2JpQWdJQ0JqYjI1emRDQjZSR1ZzZEdFZ1BTQW9hWE5PZFcwb1lTNTZLU2tnUHlCa2FYTjBZVzVqWlRGRUtHRXVlaXdnWWk1NktTQTZJREE3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdUV0YwYUM1emNYSjBLQ2g0UkdWc2RHRWdLaW9nTWlrZ0t5QW9lVVJsYkhSaElDb3FJRElwSUNzZ0tIcEVaV3gwWVNBcUtpQXlLU2s3WEc0Z0lIMWNibjA3WEc1Y2JpOHFYRzRnSUZCeWIyZHlaWE56SUhkcGRHaHBiaUJuYVhabGJpQnlZVzVuWlZ4dUlDQmNiaUFnUjJsMlpXNGdZU0JzYjNkbGNpQnNhVzFwZENCaGJtUWdZVzRnZFhCd1pYSWdiR2x0YVhRc0lIZGxJSEpsZEhWeWJpQjBhR1VnY0hKdlozSmxjM05jYmlBZ0tHVjRjSEpsYzNObFpDQmhjeUJoSUc1MWJXSmxjaUF3TFRFcElISmxjSEpsYzJWdWRHVmtJR0o1SUhSb1pTQm5hWFpsYmlCMllXeDFaU3dnWVc1a1hHNGdJR3hwYldsMElIUm9ZWFFnY0hKdlozSmxjM01nZEc4Z2QybDBhR2x1SURBdE1TNWNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RHOTNaWElnYkdsdGFYUWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlhCd1pYSWdiR2x0YVhSY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCMGJ5Qm1hVzVrSUhCeWIyZHlaWE56SUhkcGRHaHBiaUJuYVhabGJpQnlZVzVuWlZ4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlFjbTluY21WemN5QnZaaUIyWVd4MVpTQjNhWFJvYVc0Z2NtRnVaMlVnWVhNZ1pYaHdjbVZ6YzJWa0lEQXRNVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNBOUlDaG1jbTl0TENCMGJ5d2dkbUZzZFdVcElEMCtJQ2gyWVd4MVpTQXRJR1p5YjIwcElDOGdLSFJ2SUMwZ1puSnZiU2s3WEc1Y2JpOHFYRzRnSUZaaGJIVmxJR2x1SUhKaGJtZGxJR1p5YjIwZ2NISnZaM0psYzNOY2JpQWdYRzRnSUVkcGRtVnVJR0VnYkc5M1pYSWdiR2x0YVhRZ1lXNWtJR0Z1SUhWd2NHVnlJR3hwYldsMExDQjNaU0J5WlhSMWNtNGdkR2hsSUhaaGJIVmxJSGRwZEdocGJseHVJQ0IwYUdGMElISmhibWRsSUdGeklHVjRjSEpsYzNObFpDQmllU0J3Y205bmNtVnpjeUFvWVNCdWRXMWlaWElnWm5KdmJTQXdMVEVwWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZYQndaWElnYkdsdGFYUWdiMllnY21GdVoyVmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJVYUdVZ2NISnZaM0psYzNNZ1ltVjBkMlZsYmlCc2IzZGxjaUJoYm1RZ2RYQndaWElnYkdsdGFYUnpJR1Y0Y0hKbGMzTmxaQ0F3TFRGY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ1lYTWdZMkZzWTNWc1lYUmxaQ0JtY205dElIQnliMmR5WlhOeklIZHBkR2hwYmlCeVlXNW5aU0FvYm05MElHeHBiV2wwWldRZ2QybDBhR2x1SUhKaGJtZGxLVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lBOUlDaG1jbTl0TENCMGJ5d2djSEp2WjNKbGMzTXBJRDArSUNndElIQnliMmR5WlhOeklDb2dabkp2YlNrZ0t5QW9jSEp2WjNKbGMzTWdLaUIwYnlrZ0t5Qm1jbTl0TzF4dVhHNHZLbHh1SUNCUWIybHVkQ0JtY205dElHRnVaMnhsSUdGdVpDQmthWE4wWVc1alpWeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lBeVJDQndiMmx1ZENCdlppQnZjbWxuYVc1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkJibWRzWlNCbWNtOXRJRzl5YVdkcGJseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVJwYzNSaGJtTmxJR1p5YjIwZ2IzSnBaMmx1WEc0Z0lFQnlaWFIxY200Z1cyOWlhbVZqZEYwNklFTmhiR04xYkdGMFpXUWdNa1FnY0c5cGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjRzlwYm5SR2NtOXRRVzVuYkdWQmJtUkVhWE4wWVc1alpTQTlJQ2h2Y21sbmFXNHNJR0Z1WjJ4bExDQmthWE4wWVc1alpTa2dQVDRnZTF4dUlDQmhibWRzWlNBOUlHUmxaM0psWlhOVWIxSmhaR2xoYm5Nb1lXNW5iR1VwTzF4dVhHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2VEb2daR2x6ZEdGdVkyVWdLaUJOWVhSb0xtTnZjeWhoYm1kc1pTa2dLeUJ2Y21sbmFXNHVlQ3hjYmlBZ0lDQjVPaUJrYVhOMFlXNWpaU0FxSUUxaGRHZ3VjMmx1S0dGdVoyeGxLU0FySUc5eWFXZHBiaTU1WEc0Z0lIMDdYRzU5TzF4dVhHNHZLbHh1SUNCRGIyNTJaWEowSUhKaFpHbGhibk1nZEc4Z1pHVm5jbVZsYzF4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJ5WVdScFlXNXpYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUdSbFozSmxaWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21Ga2FXRnVjMVJ2UkdWbmNtVmxjeUE5SUNoeVlXUnBZVzV6S1NBOVBpQnlZV1JwWVc1eklDb2dNVGd3SUM4Z1RXRjBhQzVRU1R0Y2JseHVMeXBjYmlBZ1JuSmhiV1Z5WVhSbExXbHVaR1Z3Wlc1a1pXNTBJSE50YjI5MGFHbHVaMXh1WEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RtVjNJSFpoYkhWbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUMnhrSUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRJQ2h2Y0hScGIyNWhiQ2s2SUZOdGIyOTBhR2x1WnlBb01DQnBjeUJ1YjI1bEtWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpiVzl2ZEdnZ1BTQW9ibVYzVm1Gc2RXVXNJRzlzWkZaaGJIVmxMQ0JrZFhKaGRHbHZiaXdnYzIxdmIzUm9hVzVuSUQwZ01Da2dQVDRnZEc5RVpXTnBiV0ZzS0c5c1pGWmhiSFZsSUNzZ0tHUjFjbUYwYVc5dUlDb2dLRzVsZDFaaGJIVmxJQzBnYjJ4a1ZtRnNkV1VwSUM4Z1RXRjBhQzV0WVhnb2MyMXZiM1JvYVc1bkxDQmtkWEpoZEdsdmJpa3BLVHRjYmx4dUx5cGNiaUFnUTI5dWRtVnlkQ0I0SUhCbGNpQnpaV052Ym1RZ2RHOGdjR1Z5SUdaeVlXMWxJSFpsYkc5amFYUjVJR0poYzJWa0lHOXVJR1p3YzF4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWYm1sMElIQmxjaUJ6WldOdmJtUmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJHY21GdFpTQmtkWEpoZEdsdmJpQnBiaUJ0YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemNHVmxaRkJsY2taeVlXMWxJRDBnS0hod2N5d2dabkpoYldWRWRYSmhkR2x2YmlrZ1BUNGdLR2x6VG5WdEtIaHdjeWtwSUQ4Z2VIQnpJQzhnS0RFd01EQWdMeUJtY21GdFpVUjFjbUYwYVc5dUtTQTZJREE3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnZG1Wc2IyTnBkSGtnYVc1MGJ5QjJaV3hwWTJsMGVTQndaWElnYzJWamIyNWtYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVnVhWFFnY0dWeUlHWnlZVzFsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjRnYVc0Z2JYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JsWldSUVpYSlRaV052Ym1RZ1BTQW9kbVZzYjJOcGRIa3NJR1p5WVcxbFJIVnlZWFJwYjI0cElEMCtJSFpsYkc5amFYUjVJQ29nS0RFd01EQWdMeUJtY21GdFpVUjFjbUYwYVc5dUtUdGNibHh1THlwY2JpQWdRM0psWVhSbElITjBaWEJ3WldRZ2RtVnljMmx2YmlCdlppQXdMVEVnY0hKdlozSmxjM05jYmlBZ1hHNGdJRUJ3WVhKaGJTQmJhVzUwWFRvZ1RuVnRZbVZ5SUc5bUlITjBaWEJ6WEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCVGRHVndjR1ZrSUhaaGJIVmxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE4wWlhCUWNtOW5jbVZ6Y3lBOUlDaHpkR1Z3Y3l3Z2NISnZaM0psYzNNcElEMCtJSHRjYmlBZ1kyOXVjM1FnYzJWbmJXVnVkQ0E5SURFZ0x5QW9jM1JsY0hNZ0xTQXhLVHRjYmlBZ1kyOXVjM1FnZEdGeVoyVjBJRDBnTVNBdElDZ3hJQzhnYzNSbGNITXBPMXh1SUNCamIyNXpkQ0J3Y205bmNtVnpjMDltVkdGeVoyVjBJRDBnVFdGMGFDNXRhVzRvY0hKdlozSmxjM01nTHlCMFlYSm5aWFFzSURFcE8xeHVYRzRnSUhKbGRIVnliaUJOWVhSb0xtWnNiMjl5S0hCeWIyZHlaWE56VDJaVVlYSm5aWFFnTHlCelpXZHRaVzUwS1NBcUlITmxaMjFsYm5RN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2NhbGMuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmN1YmljQmV6aWVyID0gZXhwb3J0cy5hbnRpY2lwYXRlID0gZXhwb3J0cy5jcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gZXhwb3J0cy5iYWNrSW5PdXQgPSBleHBvcnRzLmJhY2tPdXQgPSBleHBvcnRzLmJhY2tJbiA9IGV4cG9ydHMuY3JlYXRlQmFja0luID0gZXhwb3J0cy5jaXJjSW5PdXQgPSBleHBvcnRzLmNpcmNPdXQgPSBleHBvcnRzLmNpcmNJbiA9IGV4cG9ydHMuZWFzZUluT3V0ID0gZXhwb3J0cy5lYXNlT3V0ID0gZXhwb3J0cy5lYXNlSW4gPSBleHBvcnRzLmNyZWF0ZUV4cG9JbiA9IGV4cG9ydHMubGluZWFyID0gZXhwb3J0cy5jcmVhdGVNaXJyb3JlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSB1bmRlZmluZWQ7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1lcnMnKTtcblxudmFyIERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIID0gMS41MjU7XG5cbnZhciBjcmVhdGVSZXZlcnNlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzaW5nKDEgLSBwKTtcbiAgfTtcbn07XG52YXIgY3JlYXRlTWlycm9yZWRFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8PSAwLjUgPyBlYXNpbmcoMiAqIHApIC8gMiA6ICgyIC0gZWFzaW5nKDIgKiAoMSAtIHApKSkgLyAyO1xuICB9O1xufTtcblxudmFyIGxpbmVhciA9IGV4cG9ydHMubGluZWFyID0gZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHA7XG59O1xuXG52YXIgY3JlYXRlRXhwb0luID0gZXhwb3J0cy5jcmVhdGVFeHBvSW4gPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHAsIHBvd2VyKTtcbiAgfTtcbn07XG52YXIgZWFzZUluID0gZXhwb3J0cy5lYXNlSW4gPSBjcmVhdGVFeHBvSW4oMik7XG52YXIgZWFzZU91dCA9IGV4cG9ydHMuZWFzZU91dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGVhc2VJbik7XG52YXIgZWFzZUluT3V0ID0gZXhwb3J0cy5lYXNlSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhlYXNlSW4pO1xuXG52YXIgY2lyY0luID0gZXhwb3J0cy5jaXJjSW4gPSBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwKSk7XG59O1xudmFyIGNpcmNPdXQgPSBleHBvcnRzLmNpcmNPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhjaXJjSW4pO1xudmFyIGNpcmNJbk91dCA9IGV4cG9ydHMuY2lyY0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoY2lyY091dCk7XG5cbnZhciBjcmVhdGVCYWNrSW4gPSBleHBvcnRzLmNyZWF0ZUJhY2tJbiA9IGZ1bmN0aW9uIChwb3dlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCAqIHAgKiAoKHBvd2VyICsgMSkgKiBwIC0gcG93ZXIpO1xuICB9O1xufTtcbnZhciBiYWNrSW4gPSBleHBvcnRzLmJhY2tJbiA9IGNyZWF0ZUJhY2tJbihERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG52YXIgYmFja091dCA9IGV4cG9ydHMuYmFja091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGJhY2tJbik7XG52YXIgYmFja0luT3V0ID0gZXhwb3J0cy5iYWNrSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhiYWNrSW4pO1xuXG52YXIgY3JlYXRlQW50aWNpcGF0ZUVhc2luZyA9IGV4cG9ydHMuY3JlYXRlQW50aWNpcGF0ZUVhc2luZyA9IGZ1bmN0aW9uIChwb3dlcikge1xuICB2YXIgYmFja0Vhc2luZyA9IGNyZWF0ZUJhY2tJbihwb3dlcik7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAocCAqPSAyKSA8IDEgPyAwLjUgKiBiYWNrRWFzaW5nKHApIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocCAtIDEpKSk7XG4gIH07XG59O1xuXG52YXIgYW50aWNpcGF0ZSA9IGV4cG9ydHMuYW50aWNpcGF0ZSA9IGNyZWF0ZUFudGljaXBhdGVFYXNpbmcoREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xuXG52YXIgY3ViaWNCZXppZXIgPSBleHBvcnRzLmN1YmljQmV6aWVyID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyKSB7XG4gIHZhciB4QmV6aWVyID0gKDAsIF90cmFuc2Zvcm1lcnMuYmV6aWVyKSgwLCB4MSwgeDIsIDEpO1xuICB2YXIgeUJlemllciA9ICgwLCBfdHJhbnNmb3JtZXJzLmJlemllcikoMCwgeTEsIHkyLCAxKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4geUJlemllcih4QmV6aWVyKHQpKTtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZaV0Z6YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiSWtSRlJrRlZURlJmVDFaRlVsTklUMDlVWDFOVVVrVk9SMVJJSWl3aVkzSmxZWFJsVW1WMlpYSnpaV1JGWVhOcGJtY2lMQ0psWVhOcGJtY2lMQ0p3SWl3aVkzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY2lMQ0pzYVc1bFlYSWlMQ0pqY21WaGRHVkZlSEJ2U1c0aUxDSndiM2RsY2lJc0ltVmhjMlZKYmlJc0ltVmhjMlZQZFhRaUxDSmxZWE5sU1c1UGRYUWlMQ0pqYVhKalNXNGlMQ0pOWVhSb0lpd2ljMmx1SWl3aVlXTnZjeUlzSW1OcGNtTlBkWFFpTENKamFYSmpTVzVQZFhRaUxDSmpjbVZoZEdWQ1lXTnJTVzRpTENKaVlXTnJTVzRpTENKaVlXTnJUM1YwSWl3aVltRmphMGx1VDNWMElpd2lZM0psWVhSbFFXNTBhV05wY0dGMFpVVmhjMmx1WnlJc0ltSmhZMnRGWVhOcGJtY2lMQ0p3YjNjaUxDSmhiblJwWTJsd1lYUmxJaXdpWTNWaWFXTkNaWHBwWlhJaUxDSjRNU0lzSW5reElpd2llRElpTENKNU1pSXNJbmhDWlhwcFpYSWlMQ0o1UW1WNmFXVnlJaXdpZENKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN1FVRkJRVHM3UVVGRlFTeEpRVUZOUVN3MlFrRkJOa0lzUzBGQmJrTTdPMEZCUlU4c1NVRkJUVU1zYzBSQlFYVkNMRlZCUVVORExFMUJRVVE3UVVGQlFTeFRRVUZaTEZWQlFVTkRMRU5CUVVRN1FVRkJRU3hYUVVGUExFbEJRVWxFTEU5QlFVOHNTVUZCU1VNc1EwRkJXQ3hEUVVGWU8wRkJRVUVzUjBGQldqdEJRVUZCTEVOQlFUZENPMEZCUTBFc1NVRkJUVU1zYzBSQlFYVkNMRlZCUVVOR0xFMUJRVVE3UVVGQlFTeFRRVUZaTEZWQlFVTkRMRU5CUVVRN1FVRkJRU3hYUVVGUlFTeExRVUZMTEVkQlFVNHNSMEZCWVVRc1QwRkJUeXhKUVVGSlF5eERRVUZZTEVsQlFXZENMRU5CUVRkQ0xFZEJRV2xETEVOQlFVTXNTVUZCU1VRc1QwRkJUeXhMUVVGTExFbEJRVWxETEVOQlFWUXNRMEZCVUN4RFFVRk1MRWxCUVRSQ0xFTkJRWEJGTzBGQlFVRXNSMEZCV2p0QlFVRkJMRU5CUVRkQ096dEJRVVZCTEVsQlFVMUZMREJDUVVGVExGVkJRVU5HTEVOQlFVUTdRVUZCUVN4VFFVRlBRU3hEUVVGUU8wRkJRVUVzUTBGQlpqczdRVUZGUVN4SlFVRk5SeXh6UTBGQlpTeFZRVUZEUXl4TFFVRkVPMEZCUVVFc1UwRkJWeXhWUVVGRFNpeERRVUZFTzBGQlFVRXNiMEpCUVU5QkxFTkJRVkFzUlVGQldVa3NTMEZCV2p0QlFVRkJMRWRCUVZnN1FVRkJRU3hEUVVGeVFqdEJRVU5CTEVsQlFVMURMREJDUVVGVFJpeGhRVUZoTEVOQlFXSXNRMEZCWmp0QlFVTkJMRWxCUVUxSExEUkNRVUZWVWl4eFFrRkJjVUpQTEUxQlFYSkNMRU5CUVdoQ08wRkJRMEVzU1VGQlRVVXNaME5CUVZsT0xIRkNRVUZ4UWtrc1RVRkJja0lzUTBGQmJFSTdPMEZCUlVFc1NVRkJUVWNzTUVKQlFWTXNWVUZCUTFJc1EwRkJSRHRCUVVGQkxGTkJRVThzU1VGQlNWTXNTMEZCUzBNc1IwRkJUQ3hEUVVGVFJDeExRVUZMUlN4SlFVRk1MRU5CUVZWWUxFTkJRVllzUTBGQlZDeERRVUZZTzBGQlFVRXNRMEZCWmp0QlFVTkJMRWxCUVUxWkxEUkNRVUZWWkN4eFFrRkJjVUpWTEUxQlFYSkNMRU5CUVdoQ08wRkJRMEVzU1VGQlRVc3NaME5CUVZsYUxIRkNRVUZ4UWxjc1QwRkJja0lzUTBGQmJFSTdPMEZCUlVFc1NVRkJUVVVzYzBOQlFXVXNWVUZCUTFZc1MwRkJSRHRCUVVGQkxGTkJRVmNzVlVGQlEwb3NRMEZCUkR0QlFVRkJMRmRCUVZGQkxFbEJRVWxCTEVOQlFVd3NTVUZCVnl4RFFVRkRTU3hSUVVGUkxFTkJRVlFzU1VGQlkwb3NRMEZCWkN4SFFVRnJRa2tzUzBGQk4wSXNRMEZCVUR0QlFVRkJMRWRCUVZnN1FVRkJRU3hEUVVGeVFqdEJRVU5CTEVsQlFVMVhMREJDUVVGVFJDeGhRVUZoYWtJc01FSkJRV0lzUTBGQlpqdEJRVU5CTEVsQlFVMXRRaXcwUWtGQlZXeENMSEZDUVVGeFFtbENMRTFCUVhKQ0xFTkJRV2hDTzBGQlEwRXNTVUZCVFVVc1owTkJRVmxvUWl4eFFrRkJjVUpqTEUxQlFYSkNMRU5CUVd4Q096dEJRVVZCTEVsQlFVMUhMREJFUVVGNVFpeFZRVUZEWkN4TFFVRkVMRVZCUVZjN1FVRkRMME1zVFVGQlRXVXNZVUZCWVV3c1lVRkJZVllzUzBGQllpeERRVUZ1UWp0QlFVTkJMRk5CUVU4c1ZVRkJRMG9zUTBGQlJEdEJRVUZCTEZkQlFWRXNRMEZCUTBFc1MwRkJTeXhEUVVGT0xFbEJRVmNzUTBGQldpeEhRVUZwUWl4TlFVRk5iVUlzVjBGQlYyNUNMRU5CUVZnc1EwRkJka0lzUjBGQmRVTXNUMEZCVHl4SlFVRkpVeXhMUVVGTFZ5eEhRVUZNTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVVNc1JVRkJSQ3hKUVVGUGNFSXNTVUZCU1N4RFFVRllMRU5CUVZvc1EwRkJXQ3hEUVVFNVF6dEJRVUZCTEVkQlFWQTdRVUZEUkN4RFFVaE5PenRCUVV0QkxFbEJRVTF4UWl4clEwRkJZVWdzZFVKQlFYVkNja0lzTUVKQlFYWkNMRU5CUVc1Q096dEJRVVZCTEVsQlFVMTVRaXh2UTBGQll5eFZRVUZEUXl4RlFVRkVMRVZCUVV0RExFVkJRVXdzUlVGQlUwTXNSVUZCVkN4RlFVRmhReXhGUVVGaUxFVkJRVzlDTzBGQlF6ZERMRTFCUVUxRExGVkJRVlVzTUVKQlFVOHNRMEZCVUN4RlFVRlZTaXhGUVVGV0xFVkJRV05GTEVWQlFXUXNSVUZCYTBJc1EwRkJiRUlzUTBGQmFFSTdRVUZEUVN4TlFVRk5SeXhWUVVGVkxEQkNRVUZQTEVOQlFWQXNSVUZCVlVvc1JVRkJWaXhGUVVGalJTeEZRVUZrTEVWQlFXdENMRU5CUVd4Q0xFTkJRV2hDT3p0QlFVVkJMRk5CUVU4c1ZVRkJRMGNzUTBGQlJEdEJRVUZCTEZkQlFVOUVMRkZCUVZGRUxGRkJRVkZGTEVOQlFWSXNRMEZCVWl4RFFVRlFPMEZCUVVFc1IwRkJVRHRCUVVORUxFTkJURTBpTENKbWFXeGxJam9pWldGemFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWEp6TG1oaGJHd3ZVSEp2YW1WamRITXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWW1WNmFXVnlJSDBnWm5KdmJTQW5MaTkwY21GdWMyWnZjbTFsY25Nbk8xeHVYRzVqYjI1emRDQkVSVVpCVlV4VVgwOVdSVkpUU0U5UFZGOVRWRkpGVGtkVVNDQTlJREV1TlRJMU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzSmxZWFJsVW1WMlpYSnpaV1JGWVhOcGJtY2dQU0FvWldGemFXNW5LU0E5UGlBb2NDa2dQVDRnTVNBdElHVmhjMmx1WnlneElDMGdjQ2s3WEc1bGVIQnZjblFnWTI5dWMzUWdZM0psWVhSbFRXbHljbTl5WldSRllYTnBibWNnUFNBb1pXRnphVzVuS1NBOVBpQW9jQ2tnUFQ0Z0tIQWdQRDBnTUM0MUtTQS9JR1ZoYzJsdVp5Z3lJQ29nY0NrZ0x5QXlJRG9nS0RJZ0xTQmxZWE5wYm1jb01pQXFJQ2d4SUMwZ2NDa3BLU0F2SURJN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCc2FXNWxZWElnUFNBb2NDa2dQVDRnY0R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVVY0Y0c5SmJpQTlJQ2h3YjNkbGNpa2dQVDRnS0hBcElEMCtJSEFnS2lvZ2NHOTNaWEk3WEc1bGVIQnZjblFnWTI5dWMzUWdaV0Z6WlVsdUlEMGdZM0psWVhSbFJYaHdiMGx1S0RJcE8xeHVaWGh3YjNKMElHTnZibk4wSUdWaGMyVlBkWFFnUFNCamNtVmhkR1ZTWlhabGNuTmxaRVZoYzJsdVp5aGxZWE5sU1c0cE8xeHVaWGh3YjNKMElHTnZibk4wSUdWaGMyVkpiazkxZENBOUlHTnlaV0YwWlUxcGNuSnZjbVZrUldGemFXNW5LR1ZoYzJWSmJpazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmphWEpqU1c0Z1BTQW9jQ2tnUFQ0Z01TQXRJRTFoZEdndWMybHVLRTFoZEdndVlXTnZjeWh3S1NrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJseVkwOTFkQ0E5SUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bktHTnBjbU5KYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJseVkwbHVUM1YwSUQwZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY29ZMmx5WTA5MWRDazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWQ1lXTnJTVzRnUFNBb2NHOTNaWElwSUQwK0lDaHdLU0E5UGlBb2NDQXFJSEFwSUNvZ0tDaHdiM2RsY2lBcklERXBJQ29nY0NBdElIQnZkMlZ5S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JpWVdOclNXNGdQU0JqY21WaGRHVkNZV05yU1c0b1JFVkdRVlZNVkY5UFZrVlNVMGhQVDFSZlUxUlNSVTVIVkVncE8xeHVaWGh3YjNKMElHTnZibk4wSUdKaFkydFBkWFFnUFNCamNtVmhkR1ZTWlhabGNuTmxaRVZoYzJsdVp5aGlZV05yU1c0cE8xeHVaWGh3YjNKMElHTnZibk4wSUdKaFkydEpiazkxZENBOUlHTnlaV0YwWlUxcGNuSnZjbVZrUldGemFXNW5LR0poWTJ0SmJpazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWQmJuUnBZMmx3WVhSbFJXRnphVzVuSUQwZ0tIQnZkMlZ5S1NBOVBpQjdYRzRnSUdOdmJuTjBJR0poWTJ0RllYTnBibWNnUFNCamNtVmhkR1ZDWVdOclNXNG9jRzkzWlhJcE8xeHVJQ0J5WlhSMWNtNGdLSEFwSUQwK0lDZ29jQ0FxUFNBeUtTQThJREVwSUQ4Z01DNDFJQ29nWW1GamEwVmhjMmx1Wnlod0tTQTZJREF1TlNBcUlDZ3lJQzBnVFdGMGFDNXdiM2NvTWl3Z0xURXdJQ29nS0hBZ0xTQXhLU2twTzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHRnVkR2xqYVhCaGRHVWdQU0JqY21WaGRHVkJiblJwWTJsd1lYUmxSV0Z6YVc1bktFUkZSa0ZWVEZSZlQxWkZVbE5JVDA5VVgxTlVVa1ZPUjFSSUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTjFZbWxqUW1WNmFXVnlJRDBnS0hneExDQjVNU3dnZURJc0lIa3lLU0E5UGlCN1hHNGdJR052Ym5OMElIaENaWHBwWlhJZ1BTQmlaWHBwWlhJb01Dd2dlREVzSUhneUxDQXhLVHRjYmlBZ1kyOXVjM1FnZVVKbGVtbGxjaUE5SUdKbGVtbGxjaWd3TENCNU1Td2dlVElzSURFcE8xeHVYRzRnSUhKbGRIVnliaUFvZENrZ1BUNGdlVUpsZW1sbGNpaDRRbVY2YVdWeUtIUXBLVHRjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5iZXppZXIgPSBleHBvcnRzLmJsZW5kQ29sb3IgPSBleHBvcnRzLmFscGhhID0gZXhwb3J0cy5jb2xvciA9IGV4cG9ydHMuaHNsYSA9IGV4cG9ydHMucmdiYSA9IGV4cG9ydHMucmdiVW5pdCA9IGV4cG9ydHMucHggPSBleHBvcnRzLmRlZ3JlZXMgPSBleHBvcnRzLnBlcmNlbnQgPSBleHBvcnRzLnRyYW5zZm9ybUNoaWxkVmFsdWVzID0gZXhwb3J0cy5zdGVwcyA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy53cmFwID0gZXhwb3J0cy5ub25saW5lYXJTcHJpbmcgPSBleHBvcnRzLnNwcmluZyA9IGV4cG9ydHMuZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZyA9IGV4cG9ydHMubXVsdGlwbHkgPSBleHBvcnRzLmRpdmlkZSA9IGV4cG9ydHMuYWRkID0gZXhwb3J0cy5zdWJ0cmFjdCA9IGV4cG9ydHMuaW50ZXJwb2xhdGUgPSBleHBvcnRzLmZsb3cgPSBleHBvcnRzLmNvbmRpdGlvbmFsID0gZXhwb3J0cy5jbGFtcCA9IGV4cG9ydHMuY2xhbXBNaW4gPSBleHBvcnRzLmNsYW1wTWF4ID0gZXhwb3J0cy5hcHBlbmRVbml0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuL2NhbGMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF9wYXJzZXJzID0gcmVxdWlyZSgnLi9wYXJzZXJzJyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBub29wID0gZnVuY3Rpb24gKHYpIHtcbiAgcmV0dXJuIHY7XG59O1xuXG4vKipcbiAqIEFwcGVuZCBVbml0XG4gKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBhcHBlbmRcbiAqIGFwcGVuZFVuaXQoJ3B4JywgMjApIC0+ICcyMHB4J1xuICogQHBhcmFtICB7c3RyaW5nfSB1bml0KVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgYXBwZW5kVW5pdCA9IGV4cG9ydHMuYXBwZW5kVW5pdCA9IGZ1bmN0aW9uICh1bml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiAnJyArIHYgKyB1bml0O1xuICB9O1xufTtcblxuLyoqXG4gKiBDbGFtcCB2YWx1ZSBiZXR3ZWVuXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlc3RyaWN0IGEgZ2l2ZW4gdmFsdWUgYmV0d2VlbiBgbWluYCBhbmQgYG1heGBcbiAqIEBwYXJhbSAge251bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgY2xhbXBNYXggPSBleHBvcnRzLmNsYW1wTWF4ID0gZnVuY3Rpb24gKG1heCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odiwgbWF4KTtcbiAgfTtcbn07XG52YXIgY2xhbXBNaW4gPSBleHBvcnRzLmNsYW1wTWluID0gZnVuY3Rpb24gKG1pbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgodiwgbWluKTtcbiAgfTtcbn07XG52YXIgY2xhbXAgPSBleHBvcnRzLmNsYW1wID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIHZhciBfbWluID0gY2xhbXBNaW4obWluKTtcbiAgdmFyIF9tYXggPSBjbGFtcE1heChtYXgpO1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gX21pbihfbWF4KHYpKTtcbiAgfTtcbn07XG5cbnZhciBjb25kaXRpb25hbCA9IGV4cG9ydHMuY29uZGl0aW9uYWwgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBpZlRydWUpIHtcbiAgdmFyIGlmRmFsc2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG5vb3A7XG4gIHJldHVybiBmdW5jdGlvbiAodiwgYWN0aW9uKSB7XG4gICAgcmV0dXJuIGNvbmRpdGlvbih2LCBhY3Rpb24pID8gaWZUcnVlKHYsIGFjdGlvbikgOiBpZkZhbHNlKHYsIGFjdGlvbik7XG4gIH07XG59O1xuXG4vKipcbiAqIEZsb3dcbiAqIENvbXBvc2Ugb3RoZXIgdHJhbnNmb3JtZXJzIHRvIHJ1biBsaW5lYXJpbHlcbiAqIGZsb3cobWluKDIwKSwgbWF4KDQwKSlcbiAqIEBwYXJhbSAgey4uLmZ1bmN0aW9uc30gdHJhbnNmb3JtZXJzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xudmFyIGZsb3cgPSBleHBvcnRzLmZsb3cgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB0cmFuc2Zvcm1lcnMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB0cmFuc2Zvcm1lcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoYWNjKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgdiA9IGFjYztcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0uYXBwbHkodHJhbnNmb3JtZXJzLCBbdl0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG5cbi8qKlxuICogSW50ZXJwb2xhdGUgZnJvbSBzZXQgb2YgdmFsdWVzIHRvIGFub3RoZXJcbiAqIEBwYXJhbSAge0FycmF5fSBpbnB1dCBhcnJheVxuICogQHBhcmFtICB7QXJyYXl9IG91dHB1dFxuICogQHBhcmFtICB7RnVuY3Rpb259IHJhbmdlRWFzaW5nXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xudmFyIGludGVycG9sYXRlID0gZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykge1xuICB2YXIgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIHZhciBmaW5hbEluZGV4ID0gcmFuZ2VMZW5ndGggLSAxO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgdmFyIGkgPSAxO1xuXG4gICAgLy8gRmluZCBpbmRleCBvZiByYW5nZSBzdGFydFxuICAgIGZvciAoOyBpIDwgcmFuZ2VMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlucHV0W2ldID4gdiB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9ncmVzc0luUmFuZ2UgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGlucHV0W2kgLSAxXSwgaW5wdXRbaV0sIHYpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gcmFuZ2VFYXNpbmcgPyByYW5nZUVhc2luZ1tpXShwcm9ncmVzc0luUmFuZ2UpIDogcHJvZ3Jlc3NJblJhbmdlO1xuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKG91dHB1dFtpIC0gMV0sIG91dHB1dFtpXSwgZWFzZWRQcm9ncmVzcyk7XG4gIH07XG59O1xuXG52YXIgc3VidHJhY3QgPSBleHBvcnRzLnN1YnRyYWN0ID0gZnVuY3Rpb24gKG9yaWdpbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdiAtIG9yaWdpbjtcbiAgfTtcbn07XG52YXIgYWRkID0gZXhwb3J0cy5hZGQgPSBmdW5jdGlvbiAob3JpZ2luKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2ICsgb3JpZ2luO1xuICB9O1xufTtcbnZhciBkaXZpZGUgPSBleHBvcnRzLmRpdmlkZSA9IGZ1bmN0aW9uIChvcmlnaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYgLyBvcmlnaW47XG4gIH07XG59O1xudmFyIG11bHRpcGx5ID0gZXhwb3J0cy5tdWx0aXBseSA9IGZ1bmN0aW9uIChvcmlnaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYgKiBvcmlnaW47XG4gIH07XG59O1xuXG52YXIgZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZyA9IGV4cG9ydHMuZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFsdGVyRGlzcGxhY2VtZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBub29wO1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnN0YW50LCBvcmlnaW4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgIHZhciBkaXNwbGFjZW1lbnQgPSBvcmlnaW4gLSB2O1xuICAgICAgdmFyIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50ID0gLWNvbnN0YW50ICogKDAgLSBhbHRlckRpc3BsYWNlbWVudChNYXRoLmFicyhkaXNwbGFjZW1lbnQpKSk7XG4gICAgICByZXR1cm4gZGlzcGxhY2VtZW50IDw9IDAgPyBvcmlnaW4gKyBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudCA6IG9yaWdpbiAtIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50O1xuICAgIH07XG4gIH07XG59O1xuXG52YXIgc3ByaW5nID0gZXhwb3J0cy5zcHJpbmcgPSBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nKCk7XG52YXIgbm9ubGluZWFyU3ByaW5nID0gZXhwb3J0cy5ub25saW5lYXJTcHJpbmcgPSBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nKE1hdGguc3FydCk7XG5cbnZhciB3cmFwID0gZXhwb3J0cy53cmFwID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciByYW5nZVNpemUgPSBtYXggLSBtaW47XG4gICAgcmV0dXJuICgodiAtIG1pbikgJSByYW5nZVNpemUgKyByYW5nZVNpemUpICUgcmFuZ2VTaXplICsgbWluO1xuICB9O1xufTtcblxudmFyIHNtb290aCA9IGV4cG9ydHMuc21vb3RoID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDUwO1xuXG4gIHZhciBwcmV2aW91c1ZhbHVlID0gMDtcbiAgdmFyIGhhc1Ntb290aGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGhhc1Ntb290aGVkID8gcHJldmlvdXNWYWx1ZSA6IHY7XG4gICAgdmFyIG5ld1ZhbHVlID0gKDAsIF9jYWxjLnNtb290aCkoY3VycmVudFZhbHVlLCBwcmV2aW91c1ZhbHVlLCAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCksIHN0cmVuZ3RoKTtcbiAgICBwcmV2aW91c1ZhbHVlID0gbmV3VmFsdWU7XG4gICAgaGFzU21vb3RoZWQgPSB0cnVlO1xuICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgfTtcbn07XG5cbnZhciBzdGVwcyA9IGV4cG9ydHMuc3RlcHMgPSBmdW5jdGlvbiAoc3RlcHMsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciBwcm9ncmVzcyA9ICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkobWluLCBtYXgsIHYpO1xuICAgIHJldHVybiAoMCwgX2NhbGMuc3RlcFByb2dyZXNzKShzdGVwcywgcHJvZ3Jlc3MpO1xuICB9O1xufTtcblxudmFyIHRyYW5zZm9ybUNoaWxkVmFsdWVzID0gZXhwb3J0cy50cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IGZ1bmN0aW9uIChjaGlsZFRyYW5zZm9ybWVycykge1xuICB2YXIgbXV0YWJsZVN0YXRlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGZvciAodmFyIGtleSBpbiB2KSB7XG4gICAgICB2YXIgY2hpbGRUcmFuc2Zvcm1lciA9IGNoaWxkVHJhbnNmb3JtZXJzW2tleV07XG4gICAgICBpZiAoY2hpbGRUcmFuc2Zvcm1lcikge1xuICAgICAgICBtdXRhYmxlU3RhdGVba2V5XSA9IGNoaWxkVHJhbnNmb3JtZXIodltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbXV0YWJsZVN0YXRlO1xuICB9O1xufTtcblxuLy8gVW5pdCB0cmFuc2Zvcm1lcnNcbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0gYXBwZW5kVW5pdCgnJScpO1xudmFyIGRlZ3JlZXMgPSBleHBvcnRzLmRlZ3JlZXMgPSBhcHBlbmRVbml0KCdkZWcnKTtcbnZhciBweCA9IGV4cG9ydHMucHggPSBhcHBlbmRVbml0KCdweCcpO1xuXG52YXIgcmdiVW5pdCA9IGV4cG9ydHMucmdiVW5pdCA9IGZsb3coY2xhbXAoMCwgMjU1KSwgTWF0aC5yb3VuZCk7XG5cbnZhciByZ2JhVGVtcGxhdGUgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgcmVkID0gX3JlZi5yZWQsXG4gICAgICBncmVlbiA9IF9yZWYuZ3JlZW4sXG4gICAgICBibHVlID0gX3JlZi5ibHVlLFxuICAgICAgX3JlZiRhbHBoYSA9IF9yZWYuYWxwaGEsXG4gICAgICBhbHBoYSA9IF9yZWYkYWxwaGEgPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmJGFscGhhO1xuICByZXR1cm4gJ3JnYmEoJyArIHJlZCArICcsICcgKyBncmVlbiArICcsICcgKyBibHVlICsgJywgJyArIGFscGhhICsgJyknO1xufTtcblxudmFyIHJnYmEgPSBleHBvcnRzLnJnYmEgPSBmbG93KHRyYW5zZm9ybUNoaWxkVmFsdWVzKHtcbiAgcmVkOiByZ2JVbml0LFxuICBncmVlbjogcmdiVW5pdCxcbiAgYmx1ZTogcmdiVW5pdCxcbiAgYWxwaGE6IGFscGhhXG59KSwgcmdiYVRlbXBsYXRlKTtcblxudmFyIGhzbGFUZW1wbGF0ZSA9IGZ1bmN0aW9uIChfcmVmMikge1xuICB2YXIgaHVlID0gX3JlZjIuaHVlLFxuICAgICAgc2F0dXJhdGlvbiA9IF9yZWYyLnNhdHVyYXRpb24sXG4gICAgICBsaWdodG5lc3MgPSBfcmVmMi5saWdodG5lc3MsXG4gICAgICBfcmVmMiRhbHBoYSA9IF9yZWYyLmFscGhhLFxuICAgICAgYWxwaGEgPSBfcmVmMiRhbHBoYSA9PT0gdW5kZWZpbmVkID8gMSA6IF9yZWYyJGFscGhhO1xuICByZXR1cm4gJ2hzbGEoJyArIGh1ZSArICcsICcgKyBzYXR1cmF0aW9uICsgJywgJyArIGxpZ2h0bmVzcyArICcsICcgKyBhbHBoYSArICcpJztcbn07XG5cbnZhciBoc2xhID0gZXhwb3J0cy5oc2xhID0gZmxvdyh0cmFuc2Zvcm1DaGlsZFZhbHVlcyh7XG4gIGh1ZTogcGFyc2VGbG9hdCxcbiAgc2F0dXJhdGlvbjogcGVyY2VudCxcbiAgbGlnaHRuZXNzOiBwZXJjZW50LFxuICBhbHBoYTogYWxwaGFcbn0pLCBoc2xhVGVtcGxhdGUpO1xuXG52YXIgY29sb3IgPSBleHBvcnRzLmNvbG9yID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKHYuaGFzT3duUHJvcGVydHkoJ3JlZCcpKSB7XG4gICAgcmV0dXJuIHJnYmEodik7XG4gIH0gZWxzZSBpZiAodi5oYXNPd25Qcm9wZXJ0eSgnaHVlJykpIHtcbiAgICByZXR1cm4gaHNsYSh2KTtcbiAgfVxuICByZXR1cm4gdjtcbn07XG5cbnZhciBhbHBoYSA9IGV4cG9ydHMuYWxwaGEgPSBjbGFtcCgwLCAxKTtcblxudmFyIGJsZW5kID0gZnVuY3Rpb24gKGZyb20sIHRvLCB2KSB7XG4gIHZhciBmcm9tRXhwbyA9IGZyb20gKiBmcm9tO1xuICB2YXIgdG9FeHBvID0gdG8gKiB0bztcbiAgcmV0dXJuIE1hdGguc3FydCh2ICogKHRvRXhwbyAtIGZyb21FeHBvKSArIGZyb21FeHBvKTtcbn07XG4vLyBodHRwOi8vY29kZXBlbi5pby9vc3VibGFrZS9wZW4veEdWVmFOXG52YXIgYmxlbmRDb2xvciA9IGV4cG9ydHMuYmxlbmRDb2xvciA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICB2YXIgZnJvbUNvbG9yID0gKDAsIF91dGlscy5pc1N0cmluZykoZnJvbSkgPyAoMCwgX3BhcnNlcnMuY29sb3IpKGZyb20pIDogZnJvbTtcbiAgdmFyIHRvQ29sb3IgPSAoMCwgX3V0aWxzLmlzU3RyaW5nKSh0bykgPyAoMCwgX3BhcnNlcnMuY29sb3IpKHRvKSA6IHRvO1xuXG4gIHZhciBibGVuZGVkID0gX2V4dGVuZHMoe30sIGZyb21Db2xvcik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZm9yICh2YXIga2V5IGluIGJsZW5kZWQpIHtcbiAgICAgIGJsZW5kZWRba2V5XSA9IGJsZW5kKGZyb21Db2xvcltrZXldLCB0b0NvbG9yW2tleV0sIHYpO1xuICAgIH1cbiAgICBibGVuZGVkLnJlZCA9IGJsZW5kKGZyb21Db2xvci5yZWQsIHRvQ29sb3IucmVkLCB2KTtcbiAgICBibGVuZGVkLmdyZWVuID0gYmxlbmQoZnJvbUNvbG9yLmdyZWVuLCB0b0NvbG9yLmdyZWVuLCB2KTtcbiAgICBibGVuZGVkLmJsdWUgPSBibGVuZChmcm9tQ29sb3IuYmx1ZSwgdG9Db2xvci5ibHVlLCB2KTtcbiAgICBibGVuZGVkLmFscGhhID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShmcm9tQ29sb3IuYWxwaGEsIHRvQ29sb3IuYWxwaGEsIHYpO1xuICAgIHJldHVybiBibGVuZGVkO1xuICB9O1xufTtcblxuLy8gQmV6aWVyIHJlc29sdmVyXG4vLyBSZWZhY3RvcmVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2h1Z2hzay9iZXppZXIvYmxvYi9tYXN0ZXIvaW5kZXguanNcbi8qKlxuIyMgVGhlIE1JVCBMaWNlbnNlIChNSVQpICMjXG5cbkNvcHlyaWdodCAoYykgMjAxMyBIdWdoIEtlbm5lZHlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuICovXG52YXIgcmVzb2x2ZTMgPSBmdW5jdGlvbiAocG9pbnRzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgIHZhciB1dCA9IDEgLSB0O1xuICAgIHJldHVybiAocG9pbnRzWzBdICogdXQgKyBwb2ludHNbMV0gKiB0KSAqIHV0ICsgKHBvaW50c1sxXSAqIHV0ICsgcG9pbnRzWzJdICogdCkgKiB0O1xuICB9O1xufTtcblxudmFyIHJlc29sdmU0ID0gZnVuY3Rpb24gKHBvaW50cykge1xuICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgdXQgPSAxIC0gdDtcbiAgICB2YXIgYTEgPSBwb2ludHNbMV0gKiB1dCArIHBvaW50c1syXSAqIHQ7XG4gICAgcmV0dXJuICgocG9pbnRzWzBdICogdXQgKyBwb2ludHNbMV0gKiB0KSAqIHV0ICsgYTEgKiB0KSAqIHV0ICsgKGExICogdXQgKyAocG9pbnRzWzJdICogdXQgKyBwb2ludHNbM10gKiB0KSAqIHQpICogdDtcbiAgfTtcbn07XG5cbnZhciBiZXppZXIgPSBleHBvcnRzLmJlemllciA9IGZ1bmN0aW9uIChwb2ludHMpIHtcbiAgcmV0dXJuIHBvaW50cy5sZW5ndGggPT09IDMgPyByZXNvbHZlMyhwb2ludHMpIDogcmVzb2x2ZTQocG9pbnRzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6TG1weklsMHNJbTVoYldWeklqcGJJbTV2YjNBaUxDSjJJaXdpWVhCd1pXNWtWVzVwZENJc0luVnVhWFFpTENKamJHRnRjRTFoZUNJc0ltMWhlQ0lzSWsxaGRHZ2lMQ0p0YVc0aUxDSmpiR0Z0Y0UxcGJpSXNJbU5zWVcxd0lpd2lYMjFwYmlJc0lsOXRZWGdpTENKamIyNWthWFJwYjI1aGJDSXNJbU52Ym1ScGRHbHZiaUlzSW1sbVZISjFaU0lzSW1sbVJtRnNjMlVpTENKaFkzUnBiMjRpTENKbWJHOTNJaXdpZEhKaGJuTm1iM0p0WlhKeklpd2liblZ0VkhKaGJuTm1iM0p0WlhKeklpd2liR1Z1WjNSb0lpd2lhU0lzSW1Gall5SXNJbUZ5WjNNaUxDSnBiblJsY25CdmJHRjBaU0lzSW1sdWNIVjBJaXdpYjNWMGNIVjBJaXdpY21GdVoyVkZZWE5wYm1jaUxDSnlZVzVuWlV4bGJtZDBhQ0lzSW1acGJtRnNTVzVrWlhnaUxDSndjbTluY21WemMwbHVVbUZ1WjJVaUxDSmxZWE5sWkZCeWIyZHlaWE56SWl3aWMzVmlkSEpoWTNRaUxDSnZjbWxuYVc0aUxDSmhaR1FpTENKa2FYWnBaR1VpTENKdGRXeDBhWEJzZVNJc0ltZGxibVZ5WVhSbFRtOXVTVzUwWlhKbmNtRjBaV1JUY0hKcGJtY2lMQ0poYkhSbGNrUnBjM0JzWVdObGJXVnVkQ0lzSW1OdmJuTjBZVzUwSWl3aVpHbHpjR3hoWTJWdFpXNTBJaXdpYzNCeWFXNW5UVzlrYVdacFpXUkVhWE53YkdGalpXMWxiblFpTENKaFluTWlMQ0p6Y0hKcGJtY2lMQ0p1YjI1c2FXNWxZWEpUY0hKcGJtY2lMQ0p6Y1hKMElpd2lkM0poY0NJc0luSmhibWRsVTJsNlpTSXNJbk50YjI5MGFDSXNJbk4wY21WdVozUm9JaXdpY0hKbGRtbHZkWE5XWVd4MVpTSXNJbWhoYzFOdGIyOTBhR1ZrSWl3aVkzVnljbVZ1ZEZaaGJIVmxJaXdpYm1WM1ZtRnNkV1VpTENKemRHVndjeUlzSW5CeWIyZHlaWE56SWl3aWRISmhibk5tYjNKdFEyaHBiR1JXWVd4MVpYTWlMQ0pqYUdsc1pGUnlZVzV6Wm05eWJXVnljeUlzSW0xMWRHRmliR1ZUZEdGMFpTSXNJbXRsZVNJc0ltTm9hV3hrVkhKaGJuTm1iM0p0WlhJaUxDSndaWEpqWlc1MElpd2laR1ZuY21WbGN5SXNJbkI0SWl3aWNtZGlWVzVwZENJc0luSnZkVzVrSWl3aWNtZGlZVlJsYlhCc1lYUmxJaXdpY21Wa0lpd2laM0psWlc0aUxDSmliSFZsSWl3aVlXeHdhR0VpTENKeVoySmhJaXdpYUhOc1lWUmxiWEJzWVhSbElpd2lhSFZsSWl3aWMyRjBkWEpoZEdsdmJpSXNJbXhwWjJoMGJtVnpjeUlzSW1oemJHRWlMQ0p3WVhKelpVWnNiMkYwSWl3aVkyOXNiM0lpTENKb1lYTlBkMjVRY205d1pYSjBlU0lzSW1Kc1pXNWtJaXdpWm5KdmJTSXNJblJ2SWl3aVpuSnZiVVY0Y0c4aUxDSjBiMFY0Y0c4aUxDSmliR1Z1WkVOdmJHOXlJaXdpWm5KdmJVTnZiRzl5SWl3aWRHOURiMnh2Y2lJc0ltSnNaVzVrWldRaUxDSnlaWE52YkhabE15SXNJbkJ2YVc1MGN5SXNJblFpTENKMWRDSXNJbkpsYzI5c2RtVTBJaXdpWVRFaUxDSmlaWHBwWlhJaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdRVUZCUVRzN1FVRkRRVHM3UVVGRFFUczdRVUZEUVRzN1FVRkZRU3hKUVVGTlFTeFBRVUZQTEZWQlFVTkRMRU5CUVVRN1FVRkJRU3hUUVVGUFFTeERRVUZRTzBGQlFVRXNRMEZCWWpzN1FVRkZRVHM3T3pzN096dEJRVTlQTEVsQlFVMURMR3REUVVGaExGVkJRVU5ETEVsQlFVUTdRVUZCUVN4VFFVRlZMRlZCUVVOR0xFTkJRVVE3UVVGQlFTeG5Ra0ZCVlVFc1EwRkJWaXhIUVVGalJTeEpRVUZrTzBGQlFVRXNSMEZCVmp0QlFVRkJMRU5CUVc1Q096dEJRVVZRT3pzN096czdPMEZCVDA4c1NVRkJUVU1zT0VKQlFWY3NWVUZCUTBNc1IwRkJSRHRCUVVGQkxGTkJRVk1zVlVGQlEwb3NRMEZCUkR0QlFVRkJMRmRCUVU5TExFdEJRVXRETEVkQlFVd3NRMEZCVTA0c1EwRkJWQ3hGUVVGWlNTeEhRVUZhTEVOQlFWQTdRVUZCUVN4SFFVRlVPMEZCUVVFc1EwRkJha0k3UVVGRFFTeEpRVUZOUnl3NFFrRkJWeXhWUVVGRFJDeEhRVUZFTzBGQlFVRXNVMEZCVXl4VlFVRkRUaXhEUVVGRU8wRkJRVUVzVjBGQlQwc3NTMEZCUzBRc1IwRkJUQ3hEUVVGVFNpeERRVUZVTEVWQlFWbE5MRWRCUVZvc1EwRkJVRHRCUVVGQkxFZEJRVlE3UVVGQlFTeERRVUZxUWp0QlFVTkJMRWxCUVUxRkxIZENRVUZSTEZWQlFVTkdMRWRCUVVRc1JVRkJUVVlzUjBGQlRpeEZRVUZqTzBGQlEycERMRTFCUVUxTExFOUJRVTlHTEZOQlFWTkVMRWRCUVZRc1EwRkJZanRCUVVOQkxFMUJRVTFKTEU5QlFVOVFMRk5CUVZORExFZEJRVlFzUTBGQllqdEJRVU5CTEZOQlFVOHNWVUZCUTBvc1EwRkJSRHRCUVVGQkxGZEJRVTlUTEV0QlFVdERMRXRCUVV0V0xFTkJRVXdzUTBGQlRDeERRVUZRTzBGQlFVRXNSMEZCVUR0QlFVTkVMRU5CU2swN08wRkJUVUVzU1VGQlRWY3NiME5CUVdNc1ZVRkJRME1zVTBGQlJDeEZRVUZaUXl4TlFVRmFPMEZCUVVFc1RVRkJiMEpETEU5QlFYQkNMSFZGUVVFNFFtWXNTVUZCT1VJN1FVRkJRU3hUUVVGMVF5eFZRVUZEUXl4RFFVRkVMRVZCUVVsbExFMUJRVW9zUlVGQlpUdEJRVU12UlN4WFFVRlBTQ3hWUVVGVldpeERRVUZXTEVWQlFXRmxMRTFCUVdJc1NVRkJkVUpHTEU5QlFVOWlMRU5CUVZBc1JVRkJWV1VzVFVGQlZpeERRVUYyUWl4SFFVRXlRMFFzVVVGQlVXUXNRMEZCVWl4RlFVRlhaU3hOUVVGWUxFTkJRV3hFTzBGQlEwUXNSMEZHTUVJN1FVRkJRU3hEUVVGd1FqczdRVUZKVURzN096czdPenRCUVU5UExFbEJRVTFETEhOQ1FVRlBMRmxCUVhGQ08wRkJRVUVzYjBOQlFXcENReXhaUVVGcFFqdEJRVUZxUWtFc1owSkJRV2xDTzBGQlFVRTdPMEZCUTNaRExFMUJRVTFETEd0Q1FVRnJRa1FzWVVGQllVVXNUVUZCY2tNN1FVRkRRU3hOUVVGSlF5eEpRVUZKTEVOQlFWSTdPMEZCUlVFc1UwRkJUeXhWUVVGRFF5eEhRVUZFTEVWQlFXdENPMEZCUVVFc2RVTkJRVlJETEVsQlFWTTdRVUZCVkVFc1ZVRkJVenRCUVVGQk96dEJRVU4yUWl4UlFVRkpkRUlzU1VGQlNYRkNMRWRCUVZJN1FVRkRRU3hUUVVGTFJDeEpRVUZKTEVOQlFWUXNSVUZCV1VFc1NVRkJTVVlzWlVGQmFFSXNSVUZCYVVORkxFZEJRV3BETEVWQlFYTkRPMEZCUTNCRGNFSXNWVUZCU1dsQ0xHRkJRV0ZITEVOQlFXSXNkVUpCUVdkQ2NFSXNRMEZCYUVJc1UwRkJjMEp6UWl4SlFVRjBRaXhGUVVGS08wRkJRMFE3TzBGQlJVUXNWMEZCVDNSQ0xFTkJRVkE3UVVGRFJDeEhRVkJFTzBGQlVVUXNRMEZhVFRzN1FVRmpVRHM3T3pzN096dEJRVTlQTEVsQlFVMTFRaXh2UTBGQll5eFZRVUZEUXl4TFFVRkVMRVZCUVZGRExFMUJRVklzUlVGQlowSkRMRmRCUVdoQ0xFVkJRV2RETzBGQlEzcEVMRTFCUVUxRExHTkJRV05JTEUxQlFVMU1MRTFCUVRGQ08wRkJRMEVzVFVGQlRWTXNZVUZCWVVRc1kwRkJZeXhEUVVGcVF6czdRVUZGUVN4VFFVRlBMRlZCUVVNelFpeERRVUZFTEVWQlFVODdRVUZEV2p0QlFVTkJMRkZCUVVsQkxFdEJRVXQzUWl4TlFVRk5MRU5CUVU0c1EwRkJWQ3hGUVVGdFFqdEJRVU5xUWl4aFFVRlBReXhQUVVGUExFTkJRVkFzUTBGQlVEdEJRVU5FT3p0QlFVVkVPMEZCUTBFc1VVRkJTWHBDTEV0QlFVdDNRaXhOUVVGTlNTeFZRVUZPTEVOQlFWUXNSVUZCTkVJN1FVRkRNVUlzWVVGQlQwZ3NUMEZCVDBjc1ZVRkJVQ3hEUVVGUU8wRkJRMFE3TzBGQlJVUXNVVUZCU1ZJc1NVRkJTU3hEUVVGU096dEJRVVZCTzBGQlEwRXNWMEZCVDBFc1NVRkJTVThzVjBGQldDeEZRVUYzUWxBc1IwRkJlRUlzUlVGQk5rSTdRVUZETTBJc1ZVRkJTVWtzVFVGQlRVb3NRMEZCVGl4SlFVRlhjRUlzUTBGQldDeEpRVUZuUW05Q0xFMUJRVTFSTEZWQlFURkNMRVZCUVhORE8wRkJRM0JETzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3hSUVVGTlF5eHJRa0ZCYTBJc1owTkJRWEZDVEN4TlFVRk5TaXhKUVVGSkxFTkJRVllzUTBGQmNrSXNSVUZCYlVOSkxFMUJRVTFLTEVOQlFVNHNRMEZCYmtNc1JVRkJOa053UWl4RFFVRTNReXhEUVVGNFFqdEJRVU5CTEZGQlFVMDRRaXhuUWtGQmFVSktMRmRCUVVRc1IwRkJaMEpCTEZsQlFWbE9MRU5CUVZvc1JVRkJaVk1zWlVGQlppeERRVUZvUWl4SFFVRnJSRUVzWlVGQmVFVTdRVUZEUVN4WFFVRlBMR2REUVVGeFFrb3NUMEZCVDB3c1NVRkJTU3hEUVVGWUxFTkJRWEpDTEVWQlFXOURTeXhQUVVGUFRDeERRVUZRTEVOQlFYQkRMRVZCUVN0RFZTeGhRVUV2UXl4RFFVRlFPMEZCUTBRc1IwRjJRa1E3UVVGM1FrUXNRMEUxUWswN08wRkJPRUpCTEVsQlFVMURMRGhDUVVGWExGVkJRVU5ETEUxQlFVUTdRVUZCUVN4VFFVRlpMRlZCUVVOb1F5eERRVUZFTzBGQlFVRXNWMEZCVDBFc1NVRkJTV2RETEUxQlFWZzdRVUZCUVN4SFFVRmFPMEZCUVVFc1EwRkJha0k3UVVGRFFTeEpRVUZOUXl4dlFrRkJUU3hWUVVGRFJDeE5RVUZFTzBGQlFVRXNVMEZCV1N4VlFVRkRhRU1zUTBGQlJEdEJRVUZCTEZkQlFVOUJMRWxCUVVsblF5eE5RVUZZTzBGQlFVRXNSMEZCV2p0QlFVRkJMRU5CUVZvN1FVRkRRU3hKUVVGTlJTd3dRa0ZCVXl4VlFVRkRSaXhOUVVGRU8wRkJRVUVzVTBGQldTeFZRVUZEYUVNc1EwRkJSRHRCUVVGQkxGZEJRVTlCTEVsQlFVbG5ReXhOUVVGWU8wRkJRVUVzUjBGQldqdEJRVUZCTEVOQlFXWTdRVUZEUVN4SlFVRk5SeXc0UWtGQlZ5eFZRVUZEU0N4TlFVRkVPMEZCUVVFc1UwRkJXU3hWUVVGRGFFTXNRMEZCUkR0QlFVRkJMRmRCUVU5QkxFbEJRVWxuUXl4TlFVRllPMEZCUVVFc1IwRkJXanRCUVVGQkxFTkJRV3BDT3p0QlFVVkJMRWxCUVUxSkxITkZRVUVyUWp0QlFVRkJMRTFCUVVORExHbENRVUZFTEhWRlFVRnhRblJETEVsQlFYSkNPMEZCUVVFc1UwRkJPRUlzVlVGQlEzVkRMRkZCUVVRc1JVRkJWMDRzVFVGQldEdEJRVUZCTEZkQlFYTkNMRlZCUVVOb1F5eERRVUZFTEVWQlFVODdRVUZEY2tjc1ZVRkJUWFZETEdWQlFXVlFMRk5CUVZOb1F5eERRVUU1UWp0QlFVTkJMRlZCUVUxM1F5dzJRa0ZCTmtJc1EwRkJSVVlzVVVGQlJpeEpRVUZqTEVsQlFVbEVMR3RDUVVGclFtaERMRXRCUVV0dlF5eEhRVUZNTEVOQlFWTkdMRmxCUVZRc1EwRkJiRUlzUTBGQmJFSXNRMEZCYmtNN1FVRkRRU3hoUVVGUlFTeG5Ra0ZCWjBJc1EwRkJha0lzUjBGQmMwSlFMRk5CUVZOUkxEQkNRVUV2UWl4SFFVRTBSRklzVTBGQlUxRXNNRUpCUVRWRk8wRkJRMFFzUzBGS2VVVTdRVUZCUVN4SFFVRTVRanRCUVVGQkxFTkJRWEpET3p0QlFVMUJMRWxCUVUxRkxEQkNRVUZUVGl3NFFrRkJaanRCUVVOQkxFbEJRVTFQTERSRFFVRnJRbEFzTmtKQlFUWkNMMElzUzBGQlMzVkRMRWxCUVd4RExFTkJRWGhDT3p0QlFVVkJMRWxCUVUxRExITkNRVUZQTEZWQlFVTjJReXhIUVVGRUxFVkJRVTFHTEVkQlFVNDdRVUZCUVN4VFFVRmpMRlZCUVVOS0xFTkJRVVFzUlVGQlR6dEJRVU4yUXl4UlFVRk5PRU1zV1VGQldURkRMRTFCUVUxRkxFZEJRWGhDTzBGQlEwRXNWMEZCVHl4RFFVRkRMRU5CUVVOT0xFbEJRVWxOTEVkQlFVd3NTVUZCV1hkRExGTkJRVm9zUjBGQmQwSkJMRk5CUVhwQ0xFbEJRWE5EUVN4VFFVRjBReXhIUVVGclJIaERMRWRCUVhwRU8wRkJRMFFzUjBGSWJVSTdRVUZCUVN4RFFVRmlPenRCUVV0QkxFbEJRVTE1UXl3d1FrRkJVeXhaUVVGdFFqdEJRVUZCTEUxQlFXeENReXhSUVVGclFpeDFSVUZCVUN4RlFVRlBPenRCUVVOMlF5eE5RVUZKUXl4blFrRkJaMElzUTBGQmNFSTdRVUZEUVN4TlFVRkpReXhqUVVGakxFdEJRV3hDT3p0QlFVVkJMRk5CUVU4c1ZVRkJRMnhFTEVOQlFVUXNSVUZCVHp0QlFVTmFMRkZCUVUxdFJDeGxRVUZuUWtRc1YwRkJSQ3hIUVVGblFrUXNZVUZCYUVJc1IwRkJaME5xUkN4RFFVRnlSRHRCUVVOQkxGRkJRVTF2UkN4WFFVRlhMR3RDUVVGalJDeFpRVUZrTEVWQlFUUkNSaXhoUVVFMVFpeEZRVUV5UXl4dlEwRkJNME1zUlVGQmFVVkVMRkZCUVdwRkxFTkJRV3BDTzBGQlEwRkRMRzlDUVVGblFrY3NVVUZCYUVJN1FVRkRRVVlzYTBKQlFXTXNTVUZCWkR0QlFVTkJMRmRCUVU5RkxGRkJRVkE3UVVGRFJDeEhRVTVFTzBGQlQwUXNRMEZZVFRzN1FVRmhRU3hKUVVGTlF5eDNRa0ZCVVN4VlFVRkRRU3hMUVVGRUxFVkJRVkV2UXl4SFFVRlNMRVZCUVdGR0xFZEJRV0k3UVVGQlFTeFRRVUZ4UWl4VlFVRkRTaXhEUVVGRUxFVkJRVTg3UVVGREwwTXNVVUZCVFhORUxGZEJRVmNzWjBOQlFYRkNhRVFzUjBGQmNrSXNSVUZCTUVKR0xFZEJRVEZDTEVWQlFTdENTaXhEUVVFdlFpeERRVUZxUWp0QlFVTkJMRmRCUVU4c2QwSkJRV0Z4UkN4TFFVRmlMRVZCUVc5Q1F5eFJRVUZ3UWl4RFFVRlFPMEZCUTBRc1IwRkliMEk3UVVGQlFTeERRVUZrT3p0QlFVdEJMRWxCUVUxRExITkVRVUYxUWl4VlFVRkRReXhwUWtGQlJDeEZRVUYxUWp0QlFVTjZSQ3hOUVVGTlF5eGxRVUZsTEVWQlFYSkNPMEZCUTBFc1UwRkJUeXhWUVVGRGVrUXNRMEZCUkN4RlFVRlBPMEZCUTFvc1UwRkJTeXhKUVVGSk1FUXNSMEZCVkN4SlFVRm5RakZFTEVOQlFXaENMRVZCUVcxQ08wRkJRMnBDTEZWQlFVMHlSQ3h0UWtGQmJVSklMR3RDUVVGclFrVXNSMEZCYkVJc1EwRkJla0k3UVVGRFFTeFZRVUZKUXl4blFrRkJTaXhGUVVGelFqdEJRVU53UWtZc2NVSkJRV0ZETEVkQlFXSXNTVUZCYjBKRExHbENRVUZwUWpORUxFVkJRVVV3UkN4SFFVRkdMRU5CUVdwQ0xFTkJRWEJDTzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3hYUVVGUFJDeFpRVUZRTzBGQlEwUXNSMEZVUkR0QlFWVkVMRU5CV2swN08wRkJZMUE3UVVGRFR5eEpRVUZOUnl3MFFrRkJWVE5FTEZkQlFWY3NSMEZCV0N4RFFVRm9RanRCUVVOQkxFbEJRVTAwUkN3MFFrRkJWVFZFTEZkQlFWY3NTMEZCV0N4RFFVRm9RanRCUVVOQkxFbEJRVTAyUkN4clFrRkJTemRFTEZkQlFWY3NTVUZCV0N4RFFVRllPenRCUVVWQkxFbEJRVTA0UkN3MFFrRkJWUzlETEV0QlEzSkNVaXhOUVVGTkxFTkJRVTRzUlVGQlV5eEhRVUZVTEVOQlJIRkNMRVZCUlhKQ1NDeExRVUZMTWtRc1MwRkdaMElzUTBGQmFFSTdPMEZCUzFBc1NVRkJUVU1zWlVGQlpUdEJRVUZCTEUxQlFVZERMRWRCUVVnc1VVRkJSMEVzUjBGQlNEdEJRVUZCTEUxQlFWRkRMRXRCUVZJc1VVRkJVVUVzUzBGQlVqdEJRVUZCTEUxQlFXVkRMRWxCUVdZc1VVRkJaVUVzU1VGQlpqdEJRVUZCTEhkQ1FVRnhRa01zUzBGQmNrSTdRVUZCUVN4TlFVRnhRa0VzUzBGQmNrSXNPRUpCUVRaQ0xFTkJRVGRDTzBGQlFVRXNiVUpCUTFoSUxFZEJSRmNzVlVGRFNFTXNTMEZFUnl4VlFVTlBReXhKUVVSUUxGVkJRMmRDUXl4TFFVUm9RanRCUVVGQkxFTkJRWEpDT3p0QlFVZFBMRWxCUVUxRExITkNRVUZQZEVRc1MwRkRiRUoxUXl4eFFrRkJjVUk3UVVGRGJrSlhMRTlCUVV0SUxFOUJSR003UVVGRmJrSkpMRk5CUVU5S0xFOUJSbGs3UVVGSGJrSkxMRkZCUVUxTUxFOUJTR0U3UVVGSmJrSk5PMEZCU20xQ0xFTkJRWEpDTEVOQlJHdENMRVZCVDJ4Q1NpeFpRVkJyUWl4RFFVRmlPenRCUVZWUUxFbEJRVTFOTEdWQlFXVTdRVUZCUVN4TlFVRkhReXhIUVVGSUxGTkJRVWRCTEVkQlFVZzdRVUZCUVN4TlFVRlJReXhWUVVGU0xGTkJRVkZCTEZWQlFWSTdRVUZCUVN4TlFVRnZRa01zVTBGQmNFSXNVMEZCYjBKQkxGTkJRWEJDTzBGQlFVRXNNRUpCUVN0Q1RDeExRVUV2UWp0QlFVRkJMRTFCUVN0Q1FTeExRVUV2UWl3clFrRkJkVU1zUTBGQmRrTTdRVUZCUVN4dFFrRkRXRWNzUjBGRVZ5eFZRVU5JUXl4VlFVUkhMRlZCUTFsRExGTkJSRm9zVlVGRE1FSk1MRXRCUkRGQ08wRkJRVUVzUTBGQmNrSTdPMEZCUjA4c1NVRkJUVTBzYzBKQlFVOHpSQ3hMUVVOc1FuVkRMSEZDUVVGeFFqdEJRVU51UW1sQ0xFOUJRVXRKTEZWQlJHTTdRVUZGYmtKSUxHTkJRVmxpTEU5QlJrODdRVUZIYmtKakxHRkJRVmRrTEU5QlNGRTdRVUZKYmtKVE8wRkJTbTFDTEVOQlFYSkNMRU5CUkd0Q0xFVkJUMnhDUlN4WlFWQnJRaXhEUVVGaU96dEJRVlZCTEVsQlFVMU5MSGRDUVVGUkxGVkJRVU0zUlN4RFFVRkVMRVZCUVU4N1FVRkRNVUlzVFVGQlNVRXNSVUZCUlRoRkxHTkJRVVlzUTBGQmFVSXNTMEZCYWtJc1EwRkJTaXhGUVVFMlFqdEJRVU16UWl4WFFVRlBVaXhMUVVGTGRFVXNRMEZCVEN4RFFVRlFPMEZCUTBRc1IwRkdSQ3hOUVVWUExFbEJRVWxCTEVWQlFVVTRSU3hqUVVGR0xFTkJRV2xDTEV0QlFXcENMRU5CUVVvc1JVRkJOa0k3UVVGRGJFTXNWMEZCVDBnc1MwRkJTek5GTEVOQlFVd3NRMEZCVUR0QlFVTkVPMEZCUTBRc1UwRkJUMEVzUTBGQlVEdEJRVU5FTEVOQlVFMDdPMEZCVTBFc1NVRkJUWEZGTEhkQ1FVRlJOMFFzVFVGQlRTeERRVUZPTEVWQlFWTXNRMEZCVkN4RFFVRmtPenRCUVVWUUxFbEJRVTExUlN4UlFVRlJMRlZCUVVORExFbEJRVVFzUlVGQlQwTXNSVUZCVUN4RlFVRlhha1lzUTBGQldDeEZRVUZwUWp0QlFVTTNRaXhOUVVGTmEwWXNWMEZCVjBZc1QwRkJUMEVzU1VGQmVFSTdRVUZEUVN4TlFVRk5SeXhUUVVGVFJpeExRVUZMUVN4RlFVRndRanRCUVVOQkxGTkJRVTgxUlN4TFFVRkxkVU1zU1VGQlRDeERRVUZWTlVNc1MwRkJTMjFHTEZOQlFWTkVMRkZCUVdRc1NVRkJNRUpCTEZGQlFYQkRMRU5CUVZBN1FVRkRSQ3hEUVVwRU8wRkJTMEU3UVVGRFR5eEpRVUZOUlN4clEwRkJZU3hWUVVGRFNpeEpRVUZFTEVWQlFVOURMRVZCUVZBc1JVRkJZenRCUVVOMFF5eE5RVUZOU1N4WlFVRlpMSEZDUVVGVFRDeEpRVUZVTEVsQlFXbENMRzlDUVVGWFFTeEpRVUZZTEVOQlFXcENMRWRCUVc5RFFTeEpRVUYwUkR0QlFVTkJMRTFCUVUxTkxGVkJRVlVzY1VKQlFWTk1MRVZCUVZRc1NVRkJaU3h2UWtGQlYwRXNSVUZCV0N4RFFVRm1MRWRCUVN0Q1FTeEZRVUV2UXpzN1FVRkZRU3hOUVVGTlRTeDFRa0ZCWlVZc1UwRkJaaXhEUVVGT096dEJRVVZCTEZOQlFVOHNWVUZCUTNKR0xFTkJRVVFzUlVGQlR6dEJRVU5hTEZOQlFVc3NTVUZCU1RCRUxFZEJRVlFzU1VGQlowSTJRaXhQUVVGb1FpeEZRVUY1UWp0QlFVTjJRa0VzWTBGQlVUZENMRWRCUVZJc1NVRkJaWEZDTEUxQlFVMU5MRlZCUVZVelFpeEhRVUZXTEVOQlFVNHNSVUZCYzBJMFFpeFJRVUZSTlVJc1IwRkJVaXhEUVVGMFFpeEZRVUZ2UXpGRUxFTkJRWEJETEVOQlFXWTdRVUZEUkR0QlFVTkVkVVlzV1VGQlVYSkNMRWRCUVZJc1IwRkJZMkVzVFVGQlRVMHNWVUZCVlc1Q0xFZEJRV2hDTEVWQlFYRkNiMElzVVVGQlVYQkNMRWRCUVRkQ0xFVkJRV3REYkVVc1EwRkJiRU1zUTBGQlpEdEJRVU5CZFVZc1dVRkJVWEJDTEV0QlFWSXNSMEZCWjBKWkxFMUJRVTFOTEZWQlFWVnNRaXhMUVVGb1FpeEZRVUYxUW0xQ0xGRkJRVkZ1UWl4TFFVRXZRaXhGUVVGelEyNUZMRU5CUVhSRExFTkJRV2hDTzBGQlEwRjFSaXhaUVVGUmJrSXNTVUZCVWl4SFFVRmxWeXhOUVVGTlRTeFZRVUZWYWtJc1NVRkJhRUlzUlVGQmMwSnJRaXhSUVVGUmJFSXNTVUZCT1VJc1JVRkJiME53UlN4RFFVRndReXhEUVVGbU8wRkJRMEYxUml4WlFVRlJiRUlzUzBGQlVpeEhRVUZuUWl4blEwRkJjVUpuUWl4VlFVRlZhRUlzUzBGQkwwSXNSVUZCYzBOcFFpeFJRVUZSYWtJc1MwRkJPVU1zUlVGQmNVUnlSU3hEUVVGeVJDeERRVUZvUWp0QlFVTkJMRmRCUVU5MVJpeFBRVUZRTzBGQlEwUXNSMEZVUkR0QlFWVkVMRU5CYUVKTk96dEJRV3RDVUR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCZFVKQkxFbEJRVTFETEZkQlFWY3NWVUZCUTBNc1RVRkJSRHRCUVVGQkxGTkJRVmtzVlVGQlEwTXNRMEZCUkN4RlFVRlBPMEZCUTJ4RExGRkJRVTFETEV0QlFVc3NTVUZCU1VRc1EwRkJaanRCUVVOQkxGZEJRVThzUTBGQlEwUXNUMEZCVHl4RFFVRlFMRWxCUVZsRkxFVkJRVm9zUjBGQmFVSkdMRTlCUVU4c1EwRkJVQ3hKUVVGWlF5eERRVUU1UWl4SlFVRnRRME1zUlVGQmJrTXNSMEZCZDBNc1EwRkJRMFlzVDBGQlR5eERRVUZRTEVsQlFWbEZMRVZCUVZvc1IwRkJhVUpHTEU5QlFVOHNRMEZCVUN4SlFVRlpReXhEUVVFNVFpeEpRVUZ0UTBFc1EwRkJiRVk3UVVGRFJDeEhRVWhuUWp0QlFVRkJMRU5CUVdwQ096dEJRVXRCTEVsQlFVMUZMRmRCUVZjc1ZVRkJRMGdzVFVGQlJEdEJRVUZCTEZOQlFWa3NWVUZCUTBNc1EwRkJSQ3hGUVVGUE8wRkJRMnhETEZGQlFVMURMRXRCUVVzc1NVRkJTVVFzUTBGQlpqdEJRVU5CTEZGQlFVMUhMRXRCUVV0S0xFOUJRVThzUTBGQlVDeEpRVUZaUlN4RlFVRmFMRWRCUVdsQ1JpeFBRVUZQTEVOQlFWQXNTVUZCV1VNc1EwRkJlRU03UVVGRFFTeFhRVUZQTEVOQlFVTXNRMEZCUTBRc1QwRkJUeXhEUVVGUUxFbEJRVmxGTEVWQlFWb3NSMEZCYVVKR0xFOUJRVThzUTBGQlVDeEpRVUZaUXl4RFFVRTVRaXhKUVVGdFEwTXNSVUZCYmtNc1IwRkJkME5GTEV0QlFVdElMRU5CUVRsRExFbEJRVzFFUXl4RlFVRnVSQ3hIUVVGM1JDeERRVUZEUlN4TFFVRkxSaXhGUVVGTUxFZEJRVlVzUTBGQlEwWXNUMEZCVHl4RFFVRlFMRWxCUVZsRkxFVkJRVm9zUjBGQmFVSkdMRTlCUVU4c1EwRkJVQ3hKUVVGWlF5eERRVUU1UWl4SlFVRnRRMEVzUTBGQk9VTXNTVUZCYlVSQkxFTkJRV3hJTzBGQlEwUXNSMEZLWjBJN1FVRkJRU3hEUVVGcVFqczdRVUZOVHl4SlFVRk5TU3d3UWtGQlV5eFZRVUZEVEN4TlFVRkVPMEZCUVVFc1UwRkRia0pCTEU5QlFVOTBSU3hOUVVGUUxFdEJRV3RDTEVOQlFXNUNMRWRCUVhkQ2NVVXNVMEZCVTBNc1RVRkJWQ3hEUVVGNFFpeEhRVUV5UTBjc1UwRkJVMGdzVFVGQlZDeERRVVIyUWp0QlFVRkJMRU5CUVdZaUxDSm1hV3hsSWpvaWRISmhibk5tYjNKdFpYSnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWEp6TG1oaGJHd3ZVSEp2YW1WamRITXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVc0lHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpMQ0J6ZEdWd1VISnZaM0psYzNNc0lITnRiMjkwYUNCaGN5QmpZV3hqVTIxdmIzUm9hVzVuSUgwZ1puSnZiU0FuTGk5allXeGpKenRjYm1sdGNHOXlkQ0I3SUdselUzUnlhVzVuSUgwZ1puSnZiU0FuTGk5MWRHbHNjeWM3WEc1cGJYQnZjblFnZXlCamIyeHZjaUJoY3lCd1lYSnpaVU52Ykc5eUlIMGdabkp2YlNBbkxpOXdZWEp6WlhKekp6dGNibWx0Y0c5eWRDQjdJSFJwYldWVGFXNWpaVXhoYzNSR2NtRnRaU0I5SUdaeWIyMGdKeTR1TDJaeVlXMWxjM2x1WXljN1hHNWNibU52Ym5OMElHNXZiM0FnUFNBb2Rpa2dQVDRnZGp0Y2JseHVMeW9xWEc0Z0tpQkJjSEJsYm1RZ1ZXNXBkRnh1SUNvZ1FTQm1kVzVqZEdsdmJpQjBhR0YwSUhkcGJHd2dZWEJ3Wlc1a1hHNGdLaUJoY0hCbGJtUlZibWwwS0Nkd2VDY3NJREl3S1NBdFBpQW5NakJ3ZUNkY2JpQXFJRUJ3WVhKaGJTQWdlM04wY21sdVozMGdkVzVwZENsY2JpQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMWNiaUFxTDF4dVpYaHdiM0owSUdOdmJuTjBJR0Z3Y0dWdVpGVnVhWFFnUFNBb2RXNXBkQ2tnUFQ0Z0tIWXBJRDArSUdBa2UzWjlKSHQxYm1sMGZXQTdYRzVjYmk4cUtseHVJQ29nUTJ4aGJYQWdkbUZzZFdVZ1ltVjBkMlZsYmx4dUlDb2dRM0psWVhSbGN5QmhJR1oxYm1OMGFXOXVJSFJvWVhRZ2QybHNiQ0J5WlhOMGNtbGpkQ0JoSUdkcGRtVnVJSFpoYkhWbElHSmxkSGRsWlc0Z1lHMXBibUFnWVc1a0lHQnRZWGhnWEc0Z0tpQkFjR0Z5WVcwZ0lIdHVkVzFpWlhKOUlHMXBibHh1SUNvZ1FIQmhjbUZ0SUNCN2JuVnRZbVZ5ZlNCdFlYaGNiaUFxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjFjYmlBcUwxeHVaWGh3YjNKMElHTnZibk4wSUdOc1lXMXdUV0Y0SUQwZ0tHMWhlQ2tnUFQ0Z0tIWXBJRDArSUUxaGRHZ3ViV2x1S0hZc0lHMWhlQ2s3WEc1bGVIQnZjblFnWTI5dWMzUWdZMnhoYlhCTmFXNGdQU0FvYldsdUtTQTlQaUFvZGlrZ1BUNGdUV0YwYUM1dFlYZ29kaXdnYldsdUtUdGNibVY0Y0c5eWRDQmpiMjV6ZENCamJHRnRjQ0E5SUNodGFXNHNJRzFoZUNrZ1BUNGdlMXh1SUNCamIyNXpkQ0JmYldsdUlEMGdZMnhoYlhCTmFXNG9iV2x1S1R0Y2JpQWdZMjl1YzNRZ1gyMWhlQ0E5SUdOc1lXMXdUV0Y0S0cxaGVDazdYRzRnSUhKbGRIVnliaUFvZGlrZ1BUNGdYMjFwYmloZmJXRjRLSFlwS1R0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpiMjVrYVhScGIyNWhiQ0E5SUNoamIyNWthWFJwYjI0c0lHbG1WSEoxWlN3Z2FXWkdZV3h6WlNBOUlHNXZiM0FwSUQwK0lDaDJMQ0JoWTNScGIyNHBJRDArSUh0Y2JpQWdjbVYwZFhKdUlHTnZibVJwZEdsdmJpaDJMQ0JoWTNScGIyNHBJRDhnYVdaVWNuVmxLSFlzSUdGamRHbHZiaWtnT2lCcFprWmhiSE5sS0hZc0lHRmpkR2x2YmlrN1hHNTlPMXh1WEc0dktpcGNiaUFxSUVac2IzZGNiaUFxSUVOdmJYQnZjMlVnYjNSb1pYSWdkSEpoYm5ObWIzSnRaWEp6SUhSdklISjFiaUJzYVc1bFlYSnBiSGxjYmlBcUlHWnNiM2NvYldsdUtESXdLU3dnYldGNEtEUXdLU2xjYmlBcUlFQndZWEpoYlNBZ2V5NHVMbVoxYm1OMGFXOXVjMzBnZEhKaGJuTm1iM0p0WlhKelhHNGdLaUJBY21WMGRYSnVJSHRtZFc1amRHbHZibjFjYmlBcUwxeHVaWGh3YjNKMElHTnZibk4wSUdac2IzY2dQU0FvTGk0dWRISmhibk5tYjNKdFpYSnpLU0E5UGlCN1hHNGdJR052Ym5OMElHNTFiVlJ5WVc1elptOXliV1Z5Y3lBOUlIUnlZVzV6Wm05eWJXVnljeTVzWlc1bmRHZzdYRzRnSUd4bGRDQnBJRDBnTUR0Y2JseHVJQ0J5WlhSMWNtNGdLR0ZqWXl3Z0xpNHVZWEpuY3lrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0IySUQwZ1lXTmpPMXh1SUNBZ0lHWnZjaUFvYVNBOUlEQTdJR2tnUENCdWRXMVVjbUZ1YzJadmNtMWxjbk03SUdrckt5a2dlMXh1SUNBZ0lDQWdkaUE5SUhSeVlXNXpabTl5YldWeWMxdHBYU2gyTENBdUxpNWhjbWR6S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkanRjYmlBZ2ZUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1NXNTBaWEp3YjJ4aGRHVWdabkp2YlNCelpYUWdiMllnZG1Gc2RXVnpJSFJ2SUdGdWIzUm9aWEpjYmlBcUlFQndZWEpoYlNBZ2UwRnljbUY1ZlNCcGJuQjFkQ0JoY25KaGVWeHVJQ29nUUhCaGNtRnRJQ0I3UVhKeVlYbDlJRzkxZEhCMWRGeHVJQ29nUUhCaGNtRnRJQ0I3Um5WdVkzUnBiMjU5SUhKaGJtZGxSV0Z6YVc1blhHNGdLaUJBY21WMGRYSnVJSHRHZFc1amRHbHZibjFjYmlBcUwxeHVaWGh3YjNKMElHTnZibk4wSUdsdWRHVnljRzlzWVhSbElEMGdLR2x1Y0hWMExDQnZkWFJ3ZFhRc0lISmhibWRsUldGemFXNW5LU0E5UGlCN1hHNGdJR052Ym5OMElISmhibWRsVEdWdVozUm9JRDBnYVc1d2RYUXViR1Z1WjNSb08xeHVJQ0JqYjI1emRDQm1hVzVoYkVsdVpHVjRJRDBnY21GdVoyVk1aVzVuZEdnZ0xTQXhPMXh1WEc0Z0lISmxkSFZ5YmlBb2Rpa2dQVDRnZTF4dUlDQWdJQzh2SUVsbUlIWmhiSFZsSUc5MWRITnBaR1VnYldsdWFXMTFiU0J5WVc1blpTd2djWFZwWTJ0c2VTQnlaWFIxY201Y2JpQWdJQ0JwWmlBb2RpQThQU0JwYm5CMWRGc3dYU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRzkxZEhCMWRGc3dYVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJKWmlCMllXeDFaU0J2ZFhSemFXUmxJRzFoZUdsdGRXMGdjbUZ1WjJVc0lIRjFhV05yYkhrZ2NtVjBkWEp1WEc0Z0lDQWdhV1lnS0hZZ1BqMGdhVzV3ZFhSYlptbHVZV3hKYm1SbGVGMHBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnZkWFJ3ZFhSYlptbHVZV3hKYm1SbGVGMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2JHVjBJR2tnUFNBeE8xeHVYRzRnSUNBZ0x5OGdSbWx1WkNCcGJtUmxlQ0J2WmlCeVlXNW5aU0J6ZEdGeWRGeHVJQ0FnSUdadmNpQW9PeUJwSUR3Z2NtRnVaMlZNWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2FXWWdLR2x1Y0hWMFcybGRJRDRnZGlCOGZDQnBJRDA5UFNCbWFXNWhiRWx1WkdWNEtTQjdYRzRnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdOdmJuTjBJSEJ5YjJkeVpYTnpTVzVTWVc1blpTQTlJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0dsdWNIVjBXMmtnTFNBeFhTd2dhVzV3ZFhSYmFWMHNJSFlwTzF4dUlDQWdJR052Ym5OMElHVmhjMlZrVUhKdlozSmxjM01nUFNBb2NtRnVaMlZGWVhOcGJtY3BJRDhnY21GdVoyVkZZWE5wYm1kYmFWMG9jSEp2WjNKbGMzTkpibEpoYm1kbEtTQTZJSEJ5YjJkeVpYTnpTVzVTWVc1blpUdGNiaUFnSUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb2IzVjBjSFYwVzJrZ0xTQXhYU3dnYjNWMGNIVjBXMmxkTENCbFlYTmxaRkJ5YjJkeVpYTnpLVHRjYmlBZ2ZUdGNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J6ZFdKMGNtRmpkQ0E5SUNodmNtbG5hVzRwSUQwK0lDaDJLU0E5UGlCMklDMGdiM0pwWjJsdU8xeHVaWGh3YjNKMElHTnZibk4wSUdGa1pDQTlJQ2h2Y21sbmFXNHBJRDArSUNoMktTQTlQaUIySUNzZ2IzSnBaMmx1TzF4dVpYaHdiM0owSUdOdmJuTjBJR1JwZG1sa1pTQTlJQ2h2Y21sbmFXNHBJRDArSUNoMktTQTlQaUIySUM4Z2IzSnBaMmx1TzF4dVpYaHdiM0owSUdOdmJuTjBJRzExYkhScGNHeDVJRDBnS0c5eWFXZHBiaWtnUFQ0Z0tIWXBJRDArSUhZZ0tpQnZjbWxuYVc0N1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCblpXNWxjbUYwWlU1dmJrbHVkR1Z5WjNKaGRHVmtVM0J5YVc1bklEMGdLR0ZzZEdWeVJHbHpjR3hoWTJWdFpXNTBJRDBnYm05dmNDa2dQVDRnS0dOdmJuTjBZVzUwTENCdmNtbG5hVzRwSUQwK0lDaDJLU0E5UGlCN1hHNGdJR052Ym5OMElHUnBjM0JzWVdObGJXVnVkQ0E5SUc5eWFXZHBiaUF0SUhZN1hHNGdJR052Ym5OMElITndjbWx1WjAxdlpHbG1hV1ZrUkdsemNHeGhZMlZ0Wlc1MElEMGdMU0JqYjI1emRHRnVkQ0FxSUNnd0lDMGdZV3gwWlhKRWFYTndiR0ZqWlcxbGJuUW9UV0YwYUM1aFluTW9aR2x6Y0d4aFkyVnRaVzUwS1NrcE8xeHVJQ0J5WlhSMWNtNGdLR1JwYzNCc1lXTmxiV1Z1ZENBOFBTQXdLU0EvSUc5eWFXZHBiaUFySUhOd2NtbHVaMDF2WkdsbWFXVmtSR2x6Y0d4aFkyVnRaVzUwSURvZ2IzSnBaMmx1SUMwZ2MzQnlhVzVuVFc5a2FXWnBaV1JFYVhOd2JHRmpaVzFsYm5RN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjM0J5YVc1bklEMGdaMlZ1WlhKaGRHVk9iMjVKYm5SbGNtZHlZWFJsWkZOd2NtbHVaeWdwTzF4dVpYaHdiM0owSUdOdmJuTjBJRzV2Ym14cGJtVmhjbE53Y21sdVp5QTlJR2RsYm1WeVlYUmxUbTl1U1c1MFpYSm5jbUYwWldSVGNISnBibWNvVFdGMGFDNXpjWEowS1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhkeVlYQWdQU0FvYldsdUxDQnRZWGdwSUQwK0lDaDJLU0E5UGlCN1hHNGdJR052Ym5OMElISmhibWRsVTJsNlpTQTlJRzFoZUNBdElHMXBianRjYmlBZ2NtVjBkWEp1SUNnb2RpQXRJRzFwYmlrZ0pTQnlZVzVuWlZOcGVtVWdLeUJ5WVc1blpWTnBlbVVwSUNVZ2NtRnVaMlZUYVhwbElDc2diV2x1TzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElITnRiMjkwYUNBOUlDaHpkSEpsYm1kMGFDQTlJRFV3S1NBOVBpQjdYRzRnSUd4bGRDQndjbVYyYVc5MWMxWmhiSFZsSUQwZ01EdGNiaUFnYkdWMElHaGhjMU50YjI5MGFHVmtJRDBnWm1Gc2MyVTdYRzVjYmlBZ2NtVjBkWEp1SUNoMktTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1kzVnljbVZ1ZEZaaGJIVmxJRDBnS0doaGMxTnRiMjkwYUdWa0tTQS9JSEJ5WlhacGIzVnpWbUZzZFdVZ09pQjJPMXh1SUNBZ0lHTnZibk4wSUc1bGQxWmhiSFZsSUQwZ1kyRnNZMU50YjI5MGFHbHVaeWhqZFhKeVpXNTBWbUZzZFdVc0lIQnlaWFpwYjNWelZtRnNkV1VzSUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNncExDQnpkSEpsYm1kMGFDazdYRzRnSUNBZ2NISmxkbWx2ZFhOV1lXeDFaU0E5SUc1bGQxWmhiSFZsTzF4dUlDQWdJR2hoYzFOdGIyOTBhR1ZrSUQwZ2RISjFaVHRjYmlBZ0lDQnlaWFIxY200Z2JtVjNWbUZzZFdVN1hHNGdJSDA3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzUmxjSE1nUFNBb2MzUmxjSE1zSUcxcGJpd2diV0Y0S1NBOVBpQW9kaWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQndjbTluY21WemN5QTlJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0cxcGJpd2diV0Y0TENCMktUdGNiaUFnY21WMGRYSnVJSE4wWlhCUWNtOW5jbVZ6Y3loemRHVndjeXdnY0hKdlozSmxjM01wTzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElIUnlZVzV6Wm05eWJVTm9hV3hrVm1Gc2RXVnpJRDBnS0dOb2FXeGtWSEpoYm5ObWIzSnRaWEp6S1NBOVBpQjdYRzRnSUdOdmJuTjBJRzExZEdGaWJHVlRkR0YwWlNBOUlIdDlPMXh1SUNCeVpYUjFjbTRnS0hZcElEMCtJSHRjYmlBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2Rpa2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ1kyaHBiR1JVY21GdWMyWnZjbTFsY2lBOUlHTm9hV3hrVkhKaGJuTm1iM0p0WlhKelcydGxlVjA3WEc0Z0lDQWdJQ0JwWmlBb1kyaHBiR1JVY21GdWMyWnZjbTFsY2lrZ2UxeHVJQ0FnSUNBZ0lDQnRkWFJoWW14bFUzUmhkR1ZiYTJWNVhTQTlJR05vYVd4a1ZISmhibk5tYjNKdFpYSW9kbHRyWlhsZEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnYlhWMFlXSnNaVk4wWVhSbE8xeHVJQ0I5TzF4dWZUdGNibHh1THk4Z1ZXNXBkQ0IwY21GdWMyWnZjbTFsY25OY2JtVjRjRzl5ZENCamIyNXpkQ0J3WlhKalpXNTBJRDBnWVhCd1pXNWtWVzVwZENnbkpTY3BPMXh1Wlhod2IzSjBJR052Ym5OMElHUmxaM0psWlhNZ1BTQmhjSEJsYm1SVmJtbDBLQ2RrWldjbktUdGNibVY0Y0c5eWRDQmpiMjV6ZENCd2VDQTlJR0Z3Y0dWdVpGVnVhWFFvSjNCNEp5azdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnlaMkpWYm1sMElEMGdabXh2ZHloY2JpQWdZMnhoYlhBb01Dd2dNalUxS1N4Y2JpQWdUV0YwYUM1eWIzVnVaRnh1S1R0Y2JseHVZMjl1YzNRZ2NtZGlZVlJsYlhCc1lYUmxJRDBnS0hzZ2NtVmtMQ0JuY21WbGJpd2dZbXgxWlN3Z1lXeHdhR0VnUFNBeElIMHBJRDArSUZ4dUlDQmdjbWRpWVNna2UzSmxaSDBzSUNSN1ozSmxaVzU5TENBa2UySnNkV1Y5TENBa2UyRnNjR2hoZlNsZ08xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtZGlZU0E5SUdac2IzY29YRzRnSUhSeVlXNXpabTl5YlVOb2FXeGtWbUZzZFdWektIdGNiaUFnSUNCeVpXUTZJSEpuWWxWdWFYUXNYRzRnSUNBZ1ozSmxaVzQ2SUhKbllsVnVhWFFzWEc0Z0lDQWdZbXgxWlRvZ2NtZGlWVzVwZEN4Y2JpQWdJQ0JoYkhCb1lWeHVJQ0I5S1N4Y2JpQWdjbWRpWVZSbGJYQnNZWFJsWEc0cE8xeHVYRzVqYjI1emRDQm9jMnhoVkdWdGNHeGhkR1VnUFNBb2V5Qm9kV1VzSUhOaGRIVnlZWFJwYjI0c0lHeHBaMmgwYm1WemN5d2dZV3h3YUdFZ1BTQXhJSDBwSUQwK0lGeHVJQ0JnYUhOc1lTZ2tlMmgxWlgwc0lDUjdjMkYwZFhKaGRHbHZibjBzSUNSN2JHbG5hSFJ1WlhOemZTd2dKSHRoYkhCb1lYMHBZRHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR2h6YkdFZ1BTQm1iRzkzS0Z4dUlDQjBjbUZ1YzJadmNtMURhR2xzWkZaaGJIVmxjeWg3WEc0Z0lDQWdhSFZsT2lCd1lYSnpaVVpzYjJGMExGeHVJQ0FnSUhOaGRIVnlZWFJwYjI0NklIQmxjbU5sYm5Rc1hHNGdJQ0FnYkdsbmFIUnVaWE56T2lCd1pYSmpaVzUwTEZ4dUlDQWdJR0ZzY0doaFhHNGdJSDBwTEZ4dUlDQm9jMnhoVkdWdGNHeGhkR1ZjYmlrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamIyeHZjaUE5SUNoMktTQTlQaUI3WEc0Z0lHbG1JQ2gyTG1oaGMwOTNibEJ5YjNCbGNuUjVLQ2R5WldRbktTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCeVoySmhLSFlwTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLSFl1YUdGelQzZHVVSEp2Y0dWeWRIa29KMmgxWlNjcEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdoemJHRW9kaWs3WEc0Z0lIMWNiaUFnY21WMGRYSnVJSFk3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1lXeHdhR0VnUFNCamJHRnRjQ2d3TENBeEtUdGNibHh1WTI5dWMzUWdZbXhsYm1RZ1BTQW9abkp2YlN3Z2RHOHNJSFlwSUQwK0lIdGNiaUFnWTI5dWMzUWdabkp2YlVWNGNHOGdQU0JtY205dElDb2dabkp2YlR0Y2JpQWdZMjl1YzNRZ2RHOUZlSEJ2SUQwZ2RHOGdLaUIwYnp0Y2JpQWdjbVYwZFhKdUlFMWhkR2d1YzNGeWRDaDJJQ29nS0hSdlJYaHdieUF0SUdaeWIyMUZlSEJ2S1NBcklHWnliMjFGZUhCdktUdGNibjA3WEc0dkx5Qm9kSFJ3T2k4dlkyOWtaWEJsYmk1cGJ5OXZjM1ZpYkdGclpTOXdaVzR2ZUVkV1ZtRk9YRzVsZUhCdmNuUWdZMjl1YzNRZ1lteGxibVJEYjJ4dmNpQTlJQ2htY205dExDQjBieWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQm1jbTl0UTI5c2IzSWdQU0JwYzFOMGNtbHVaeWhtY205dEtTQS9JSEJoY25ObFEyOXNiM0lvWm5KdmJTa2dPaUJtY205dE8xeHVJQ0JqYjI1emRDQjBiME52Ykc5eUlEMGdhWE5UZEhKcGJtY29kRzhwSUQ4Z2NHRnljMlZEYjJ4dmNpaDBieWs2SUhSdk8xeHVYRzRnSUdOdmJuTjBJR0pzWlc1a1pXUWdQU0I3SUM0dUxtWnliMjFEYjJ4dmNpQjlPMXh1WEc0Z0lISmxkSFZ5YmlBb2Rpa2dQVDRnZTF4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQmliR1Z1WkdWa0tTQjdYRzRnSUNBZ0lDQmliR1Z1WkdWa1cydGxlVjBnUFNCaWJHVnVaQ2htY205dFEyOXNiM0piYTJWNVhTd2dkRzlEYjJ4dmNsdHJaWGxkTENCMktUdGNiaUFnSUNCOVhHNGdJQ0FnWW14bGJtUmxaQzV5WldRZ1BTQmliR1Z1WkNobWNtOXRRMjlzYjNJdWNtVmtMQ0IwYjBOdmJHOXlMbkpsWkN3Z2RpazdYRzRnSUNBZ1lteGxibVJsWkM1bmNtVmxiaUE5SUdKc1pXNWtLR1p5YjIxRGIyeHZjaTVuY21WbGJpd2dkRzlEYjJ4dmNpNW5jbVZsYml3Z2RpazdYRzRnSUNBZ1lteGxibVJsWkM1aWJIVmxJRDBnWW14bGJtUW9abkp2YlVOdmJHOXlMbUpzZFdVc0lIUnZRMjlzYjNJdVlteDFaU3dnZGlrN1hHNGdJQ0FnWW14bGJtUmxaQzVoYkhCb1lTQTlJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56S0daeWIyMURiMnh2Y2k1aGJIQm9ZU3dnZEc5RGIyeHZjaTVoYkhCb1lTd2dkaWs3WEc0Z0lDQWdjbVYwZFhKdUlHSnNaVzVrWldRN1hHNGdJSDA3WEc1OU8xeHVYRzR2THlCQ1pYcHBaWElnY21WemIyeDJaWEpjYmk4dklGSmxabUZqZEc5eVpXUWdabkp2YlNCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmFIVm5hSE5yTDJKbGVtbGxjaTlpYkc5aUwyMWhjM1JsY2k5cGJtUmxlQzVxYzF4dUx5b3FYRzRqSXlCVWFHVWdUVWxVSUV4cFkyVnVjMlVnS0UxSlZDa2dJeU5jYmx4dVEyOXdlWEpwWjJoMElDaGpLU0F5TURFeklFaDFaMmdnUzJWdWJtVmtlVnh1WEc1UVpYSnRhWE56YVc5dUlHbHpJR2hsY21WaWVTQm5jbUZ1ZEdWa0xDQm1jbVZsSUc5bUlHTm9ZWEpuWlN3Z2RHOGdZVzU1SUhCbGNuTnZiaUJ2WW5SaGFXNXBibWNnWVNCamIzQjVYRzV2WmlCMGFHbHpJSE52Wm5SM1lYSmxJR0Z1WkNCaGMzTnZZMmxoZEdWa0lHUnZZM1Z0Wlc1MFlYUnBiMjRnWm1sc1pYTWdLSFJvWlNCY0lsTnZablIzWVhKbFhDSXBMQ0IwYnlCa1pXRnNYRzVwYmlCMGFHVWdVMjltZEhkaGNtVWdkMmwwYUc5MWRDQnlaWE4wY21samRHbHZiaXdnYVc1amJIVmthVzVuSUhkcGRHaHZkWFFnYkdsdGFYUmhkR2x2YmlCMGFHVWdjbWxuYUhSelhHNTBieUIxYzJVc0lHTnZjSGtzSUcxdlpHbG1lU3dnYldWeVoyVXNJSEIxWW14cGMyZ3NJR1JwYzNSeWFXSjFkR1VzSUhOMVlteHBZMlZ1YzJVc0lHRnVaQzl2Y2lCelpXeHNYRzVqYjNCcFpYTWdiMllnZEdobElGTnZablIzWVhKbExDQmhibVFnZEc4Z2NHVnliV2wwSUhCbGNuTnZibk1nZEc4Z2QyaHZiU0IwYUdVZ1UyOW1kSGRoY21VZ2FYTmNibVoxY201cGMyaGxaQ0IwYnlCa2J5QnpieXdnYzNWaWFtVmpkQ0IwYnlCMGFHVWdabTlzYkc5M2FXNW5JR052Ym1ScGRHbHZibk02WEc1Y2JsUm9aU0JoWW05MlpTQmpiM0I1Y21sbmFIUWdibTkwYVdObElHRnVaQ0IwYUdseklIQmxjbTFwYzNOcGIyNGdibTkwYVdObElITm9ZV3hzSUdKbElHbHVZMngxWkdWa0lHbHVYRzVoYkd3Z1kyOXdhV1Z6SUc5eUlITjFZbk4wWVc1MGFXRnNJSEJ2Y25ScGIyNXpJRzltSUhSb1pTQlRiMlowZDJGeVpTNWNibHh1VkVoRklGTlBSbFJYUVZKRklFbFRJRkJTVDFaSlJFVkVJRndpUVZNZ1NWTmNJaXdnVjBsVVNFOVZWQ0JYUVZKU1FVNVVXU0JQUmlCQlRsa2dTMGxPUkN3Z1JWaFFVa1ZUVXlCUFVseHVTVTFRVEVsRlJDd2dTVTVEVEZWRVNVNUhJRUpWVkNCT1QxUWdURWxOU1ZSRlJDQlVUeUJVU0VVZ1YwRlNVa0ZPVkVsRlV5QlBSaUJOUlZKRFNFRk9WRUZDU1V4SlZGa3NYRzVHU1ZST1JWTlRJRVpQVWlCQklGQkJVbFJKUTFWTVFWSWdVRlZTVUU5VFJTQkJUa1FnVGs5T1NVNUdVa2xPUjBWTlJVNVVMaUJKVGlCT1R5QkZWa1ZPVkNCVFNFRk1UQ0JVU0VWY2JrRlZWRWhQVWxNZ1QxSWdRMDlRV1ZKSlIwaFVJRWhQVEVSRlVsTWdRa1VnVEVsQlFreEZJRVpQVWlCQlRsa2dRMHhCU1Uwc0lFUkJUVUZIUlZNZ1QxSWdUMVJJUlZKY2JreEpRVUpKVEVsVVdTd2dWMGhGVkVoRlVpQkpUaUJCVGlCQlExUkpUMDRnVDBZZ1EwOU9WRkpCUTFRc0lGUlBVbFFnVDFJZ1QxUklSVkpYU1ZORkxDQkJVa2xUU1U1SElFWlNUMDBzWEc1UFZWUWdUMFlnVDFJZ1NVNGdRMDlPVGtWRFZFbFBUaUJYU1ZSSUlGUklSU0JUVDBaVVYwRlNSU0JQVWlCVVNFVWdWVk5GSUU5U0lFOVVTRVZTSUVSRlFVeEpUa2RUSUVsT1hHNVVTRVVnVTA5R1ZGZEJVa1V1WEc0Z0tpOWNibU52Ym5OMElISmxjMjlzZG1VeklEMGdLSEJ2YVc1MGN5a2dQVDRnS0hRcElEMCtJSHRjYmlBZ1kyOXVjM1FnZFhRZ1BTQXhJQzBnZER0Y2JpQWdjbVYwZFhKdUlDaHdiMmx1ZEhOYk1GMGdLaUIxZENBcklIQnZhVzUwYzFzeFhTQXFJSFFwSUNvZ2RYUWdLeUFvY0c5cGJuUnpXekZkSUNvZ2RYUWdLeUJ3YjJsdWRITmJNbDBnS2lCMEtTQXFJSFE3WEc1OU8xeHVYRzVqYjI1emRDQnlaWE52YkhabE5DQTlJQ2h3YjJsdWRITXBJRDArSUNoMEtTQTlQaUI3WEc0Z0lHTnZibk4wSUhWMElEMGdNU0F0SUhRN1hHNGdJR052Ym5OMElHRXhJRDBnY0c5cGJuUnpXekZkSUNvZ2RYUWdLeUJ3YjJsdWRITmJNbDBnS2lCME8xeHVJQ0J5WlhSMWNtNGdLQ2h3YjJsdWRITmJNRjBnS2lCMWRDQXJJSEJ2YVc1MGMxc3hYU0FxSUhRcElDb2dkWFFnS3lCaE1TQXFJSFFwSUNvZ2RYUWdLeUFvWVRFZ0tpQjFkQ0FySUNod2IybHVkSE5iTWwwZ0tpQjFkQ0FySUhCdmFXNTBjMXN6WFNBcUlIUXBJQ29nZENrZ0tpQjBPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdKbGVtbGxjaUE5SUNod2IybHVkSE1wSUQwK1hHNGdJQ2h3YjJsdWRITXViR1Z1WjNSb0lEMDlQU0F6S1NBL0lISmxjMjlzZG1VektIQnZhVzUwY3lrZ09pQnlaWE52YkhabE5DaHdiMmx1ZEhNcE8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb2xvciA9IGV4cG9ydHMuaHNsYSA9IGV4cG9ydHMuaGV4ID0gZXhwb3J0cy5yZ2JhID0gZXhwb3J0cy5yZ2JVbml0ID0gZXhwb3J0cy5zY2FsZSA9IGV4cG9ydHMucHggPSBleHBvcnRzLnBlcmNlbnQgPSBleHBvcnRzLmRlZ3JlZXMgPSBleHBvcnRzLmFscGhhID0gZXhwb3J0cy5udW1iZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVmFsdWUgdHlwZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBhbHBoYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogZGVncmVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBoc2xhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBwZXJjZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBweFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmdiVW5pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmdiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzY2FsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3BhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIG51bWJlciA9IGV4cG9ydHMubnVtYmVyID0ge1xuICB0ZXN0OiBfdXRpbHMuaXNOdW0sXG4gIHBhcnNlOiBwYXJzZUZsb2F0XG59O1xuXG4vLyBWYWx1ZSB0eXBlc1xudmFyIGFscGhhID0gZXhwb3J0cy5hbHBoYSA9IF9leHRlbmRzKHt9LCBudW1iZXIsIHtcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLmFscGhhXG59KTtcblxudmFyIGRlZ3JlZXMgPSBleHBvcnRzLmRlZ3JlZXMgPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgnZGVnJywgX3RyYW5zZm9ybWVycy5kZWdyZWVzKTtcbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJyUnLCBfdHJhbnNmb3JtZXJzLnBlcmNlbnQpO1xudmFyIHB4ID0gZXhwb3J0cy5weCA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCdweCcsIF90cmFuc2Zvcm1lcnMucHgpO1xuXG52YXIgc2NhbGUgPSBleHBvcnRzLnNjYWxlID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICBkZWZhdWx0OiAxXG59KTtcblxudmFyIHJnYlVuaXQgPSBleHBvcnRzLnJnYlVuaXQgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5yZ2JVbml0XG59KTtcblxudmFyIHJnYmEgPSBleHBvcnRzLnJnYmEgPSB7XG4gIHRlc3Q6IF91dGlscy5pc1JnYixcbiAgcGFyc2U6IF9wYXJzZXJzLnJnYmEsXG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5yZ2JhXG59O1xuXG52YXIgaGV4ID0gZXhwb3J0cy5oZXggPSBfZXh0ZW5kcyh7fSwgcmdiYSwge1xuICB0ZXN0OiBfdXRpbHMuaXNIZXgsXG4gIHBhcnNlOiBfcGFyc2Vycy5oZXhcbn0pO1xuXG52YXIgaHNsYSA9IGV4cG9ydHMuaHNsYSA9IHtcbiAgdGVzdDogX3V0aWxzLmlzSHNsLFxuICBwYXJzZTogX3BhcnNlcnMuaHNsYSxcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLmhzbGFcbn07XG5cbnZhciBjb2xvciA9IGV4cG9ydHMuY29sb3IgPSB7XG4gIHBhcnNlOiBfcGFyc2Vycy5jb2xvcixcbiAgdGVzdDogX3V0aWxzLmlzQ29sb3IsXG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5jb2xvclxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRtRnNkV1V0ZEhsd1pYTXVhbk1pWFN3aWJtRnRaWE1pT2xzaWJuVnRZbVZ5SWl3aWRHVnpkQ0lzSW5CaGNuTmxJaXdpY0dGeWMyVkdiRzloZENJc0ltRnNjR2hoSWl3aWRISmhibk5tYjNKdElpd2laR1ZuY21WbGN5SXNJbkJsY21ObGJuUWlMQ0p3ZUNJc0luTmpZV3hsSWl3aVpHVm1ZWFZzZENJc0luSm5ZbFZ1YVhRaUxDSnlaMkpoSWl3aWFHVjRJaXdpYUhOc1lTSXNJbU52Ykc5eUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dHJVVUZCUVRzN096czdPenM3T3pzN096czdPMEZCWVVFN08wRkJWVUU3TzBGQlRVRTdPMEZCVTA4c1NVRkJUVUVzTUVKQlFWTTdRVUZEY0VKRExHOUNRVVJ2UWp0QlFVVndRa01zVTBGQlQwTTdRVUZHWVN4RFFVRm1PenRCUVV0UU8wRkJRMDhzU1VGQlRVTXNjVU5CUTFKS0xFMUJSRkU3UVVGRldFczdRVUZHVnl4RlFVRk9PenRCUVV0QkxFbEJRVTFETERSQ1FVRlZMREpDUVVGbExFdEJRV1lzZDBKQlFXaENPMEZCUTBFc1NVRkJUVU1zTkVKQlFWVXNNa0pCUVdVc1IwRkJaaXgzUWtGQmFFSTdRVUZEUVN4SlFVRk5ReXhyUWtGQlN5d3lRa0ZCWlN4SlFVRm1MRzFDUVVGWU96dEJRVVZCTEVsQlFVMURMSEZEUVVOU1ZDeE5RVVJSTzBGQlJWaFZMRmRCUVZNN1FVRkdSU3hGUVVGT096dEJRVXRCTEVsQlFVMURMSGxEUVVOU1dDeE5RVVJSTzBGQlJWaExPMEZCUmxjc1JVRkJUanM3UVVGTFFTeEpRVUZOVHl4elFrRkJUenRCUVVOc1FsZ3NiMEpCUkd0Q08wRkJSV3hDUXl4elFrRkdhMEk3UVVGSGJFSkhPMEZCU0d0Q0xFTkJRV0k3TzBGQlRVRXNTVUZCVFZFc2FVTkJRMUpFTEVsQlJGRTdRVUZGV0Znc2IwSkJSbGM3UVVGSFdFTTdRVUZJVnl4RlFVRk9PenRCUVUxQkxFbEJRVTFaTEhOQ1FVRlBPMEZCUTJ4Q1lpeHZRa0ZFYTBJN1FVRkZiRUpETEhOQ1FVWnJRanRCUVVkc1FrYzdRVUZJYTBJc1EwRkJZanM3UVVGTlFTeEpRVUZOVlN4M1FrRkJVVHRCUVVOdVFtSXNkVUpCUkcxQ08wRkJSVzVDUkN4elFrRkdiVUk3UVVGSGJrSkpPMEZCU0cxQ0xFTkJRV1FpTENKbWFXeGxJam9pZG1Gc2RXVXRkSGx3WlhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGNuTXVhR0ZzYkM5UWNtOXFaV04wY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaXBjYmlBcUlGWmhiSFZsSUhSNWNHVnpYRzRnS2x4dUlDb2dZV3h3YUdGY2JpQXFJR1JsWjNKbFpYTmNiaUFxSUdobGVGeHVJQ29nYUhOc1lWeHVJQ29nY0dWeVkyVnVkRnh1SUNvZ2NIaGNiaUFxSUhKbllsVnVhWFJjYmlBcUlISm5ZbHh1SUNvZ2MyTmhiR1ZjYmlBcUwxeHVhVzF3YjNKMElIdGNiaUFnY21kaVZXNXBkQ0JoY3lCMGNtRnVjMlp2Y20xU1IwSlZibWwwTEZ4dUlDQnlaMkpoSUdGeklIUnlZVzV6Wm05eWJWSm5ZbUVzWEc0Z0lHRnNjR2hoSUdGeklIUnlZVzV6Wm05eWJVRnNjR2hoTEZ4dUlDQm9jMnhoSUdGeklIUnlZVzV6Wm05eWJVaHpiR0VzWEc0Z0lHTnZiRzl5SUdGeklIUnlZVzV6Wm05eWJVTnZiRzl5TEZ4dUlDQndlQ0JoY3lCMGNtRnVjMlp2Y20xUWVDeGNiaUFnY0dWeVkyVnVkQ0JoY3lCMGNtRnVjMlp2Y20xUVpYSmpaVzUwTEZ4dUlDQmtaV2R5WldWeklHRnpJSFJ5WVc1elptOXliVVJsWjNKbFpYTmNibjBnWm5KdmJTQW5MaTkwY21GdWMyWnZjbTFsY25Nbk8xeHVhVzF3YjNKMElIdGNiaUFnYUdWNElHRnpJSEJoY25ObFNHVjRMRnh1SUNCeVoySmhJR0Z6SUhCaGNuTmxVbWRpWVN4Y2JpQWdhSE5zWVNCaGN5QndZWEp6WlVoemJHRXNYRzRnSUdOdmJHOXlJR0Z6SUhCaGNuTmxRMjlzYjNKY2JuMGdabkp2YlNBbkxpOXdZWEp6WlhKekp6dGNibWx0Y0c5eWRDQjdYRzRnSUdOeVpXRjBaVlZ1YVhSVWVYQmxMRnh1SUNCcGMwNTFiU3hjYmlBZ2FYTlNaMklzWEc0Z0lHbHpTSE5zTEZ4dUlDQnBjMGhsZUN4Y2JpQWdhWE5EYjJ4dmNseHVmU0JtY205dElDY3VMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElHNTFiV0psY2lBOUlIdGNiaUFnZEdWemREb2dhWE5PZFcwc1hHNGdJSEJoY25ObE9pQndZWEp6WlVac2IyRjBYRzU5TzF4dVhHNHZMeUJXWVd4MVpTQjBlWEJsYzF4dVpYaHdiM0owSUdOdmJuTjBJR0ZzY0doaElEMGdlMXh1SUNBdUxpNXVkVzFpWlhJc1hHNGdJSFJ5WVc1elptOXliVG9nZEhKaGJuTm1iM0p0UVd4d2FHRmNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JrWldkeVpXVnpJRDBnWTNKbFlYUmxWVzVwZEZSNWNHVW9KMlJsWnljc0lIUnlZVzV6Wm05eWJVUmxaM0psWlhNcE8xeHVaWGh3YjNKMElHTnZibk4wSUhCbGNtTmxiblFnUFNCamNtVmhkR1ZWYm1sMFZIbHdaU2duSlNjc0lIUnlZVzV6Wm05eWJWQmxjbU5sYm5RcE8xeHVaWGh3YjNKMElHTnZibk4wSUhCNElEMGdZM0psWVhSbFZXNXBkRlI1Y0dVb0ozQjRKeXdnZEhKaGJuTm1iM0p0VUhncE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2MyTmhiR1VnUFNCN1hHNGdJQzR1TG01MWJXSmxjaXhjYmlBZ1pHVm1ZWFZzZERvZ01WeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSEpuWWxWdWFYUWdQU0I3WEc0Z0lDNHVMbTUxYldKbGNpeGNiaUFnZEhKaGJuTm1iM0p0T2lCMGNtRnVjMlp2Y20xU1IwSlZibWwwWEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtZGlZU0E5SUh0Y2JpQWdkR1Z6ZERvZ2FYTlNaMklzWEc0Z0lIQmhjbk5sT2lCd1lYSnpaVkpuWW1Fc1hHNGdJSFJ5WVc1elptOXliVG9nZEhKaGJuTm1iM0p0VW1kaVlWeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR2hsZUNBOUlIdGNiaUFnTGk0dWNtZGlZU3hjYmlBZ2RHVnpkRG9nYVhOSVpYZ3NYRzRnSUhCaGNuTmxPaUJ3WVhKelpVaGxlRnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdoemJHRWdQU0I3WEc0Z0lIUmxjM1E2SUdselNITnNMRnh1SUNCd1lYSnpaVG9nY0dGeWMyVkljMnhoTEZ4dUlDQjBjbUZ1YzJadmNtMDZJSFJ5WVc1elptOXliVWh6YkdGY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpiMnh2Y2lBOUlIdGNiaUFnY0dGeWMyVTZJSEJoY25ObFEyOXNiM0lzWEc0Z0lIUmxjM1E2SUdselEyOXNiM0lzWEc0Z0lIUnlZVzV6Wm05eWJUb2dkSEpoYm5ObWIzSnRRMjlzYjNKY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3ZhbHVlLXR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxudmFyIF9lYXNpbmcgPSByZXF1aXJlKCcuLi9pbmMvZWFzaW5nJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBjbGFtcFByb2dyZXNzID0gKDAsIF90cmFuc2Zvcm1lcnMuY2xhbXApKDAsIDEpO1xuXG5mdW5jdGlvbiBjYWxjVmFsdWVBdFRpbWUoZnJvbSwgdG8sIGR1cmF0aW9uLCBlbGFwc2VkLCBlYXNlKSB7XG4gIHZhciBwcm9ncmVzc0F0VGltZSA9IGVhc2UoY2xhbXBQcm9ncmVzcygoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKDAsIGR1cmF0aW9uLCBlbGFwc2VkKSkpO1xuICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShmcm9tLCB0bywgcHJvZ3Jlc3NBdFRpbWUpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgZnJvbSA9IF9yZWYuZnJvbSxcbiAgICAgIHRvID0gX3JlZi50byxcbiAgICAgIG9uVXBkYXRlID0gX3JlZi5vblVwZGF0ZSxcbiAgICAgIF9yZWYkYWNjdXJhY3kgPSBfcmVmLmFjY3VyYWN5LFxuICAgICAgYWNjdXJhY3kgPSBfcmVmJGFjY3VyYWN5ID09PSB1bmRlZmluZWQgPyA2MCA6IF9yZWYkYWNjdXJhY3ksXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2Zyb20nLCAndG8nLCAnb25VcGRhdGUnLCAnYWNjdXJhY3knXSk7XG5cbiAgLy8gR2V0IHR3ZWVuIHByb3BlcnRpZXNcbiAgdmFyIGEgPSBmcm9tO1xuICB2YXIgYiA9IHRvO1xuICB2YXIgYUN1cnJlbnQgPSBhLmdldCgpO1xuICB2YXIgYUR1cmF0aW9uID0gYS5nZXRQcm9wKCdkdXJhdGlvbicpO1xuICB2YXIgYkR1cmF0aW9uID0gYi5nZXRQcm9wKCdkdXJhdGlvbicpO1xuICB2YXIgYUVhc2UgPSBhLmdldFByb3AoJ2Vhc2UnKTtcbiAgdmFyIGJFYXNlID0gYi5nZXRQcm9wKCdlYXNlJyk7XG4gIHZhciBhRnJvbSA9IGEuZ2V0UHJvcCgnZnJvbScpO1xuICB2YXIgYkZyb20gPSBiLmdldFByb3AoJ2Zyb20nKTtcbiAgdmFyIGFUbyA9IGEuZ2V0UHJvcCgndG8nKTtcbiAgdmFyIGJUbyA9IGIuZ2V0UHJvcCgndG8nKTtcblxuICAvLyBBbmFseXNlIHR3ZWVuc1xuICB2YXIgb3ZlcmxhcER1cmF0aW9uID0gTWF0aC5taW4oYUR1cmF0aW9uIC0gYS5nZXRFbGFwc2VkKCksIGJEdXJhdGlvbik7XG4gIHZhciBiVmFsdWVBdFR3ZWVuT3ZlcmxhcENvbXBsZXRlID0gY2FsY1ZhbHVlQXRUaW1lKGJGcm9tLCBiVG8sIGJEdXJhdGlvbiwgb3ZlcmxhcER1cmF0aW9uLCBiRWFzZSk7XG4gIHZhciBiU3RhcnRzSGlnaGVyVGhhbkEgPSBiRnJvbSA+IGFDdXJyZW50O1xuICB2YXIgYkVuZHNIaWdoZXJUaGFuQSA9IGJWYWx1ZUF0VHdlZW5PdmVybGFwQ29tcGxldGUgPiBhVG87XG5cbiAgLy8gQmxlbmQgcG9pbnRzIGFyZSBkZWZpbmVkIGFzIFt0ID0gdGltZSwgdiA9IHZhbHVlQXRUaW1lXVxuICAvLyBQMVxuICAvLyBUaGUgc3RhcnQgb2YgdGhlIHR3ZWVuIGJsZW5kXG4gIHZhciBQMSA9IGFDdXJyZW50O1xuICB2YXIgYmxlbmRQb2ludHMgPSBbUDFdO1xuXG4gIC8vIEZpbmQgUDJcbiAgLy8gVGhlIHBvc3NpYmxlIGludGVyc2VjdGlvbiBwb2ludCBiZXR3ZWVuIHRoZSB0d28gdHdlZW5zXG4gIHZhciB0d2VlbnNJbnRlcnNlY3QgPSBiU3RhcnRzSGlnaGVyVGhhbkEgIT09IGJFbmRzSGlnaGVyVGhhbkE7XG4gIGlmICh0d2VlbnNJbnRlcnNlY3QpIHtcbiAgICB2YXIgdGltZXN0ZXAgPSBvdmVybGFwRHVyYXRpb24gLyBhY2N1cmFjeTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWNjdXJhY3k7IGkrKykge1xuICAgICAgdmFyIHJ1bm5pbmdUaW1lID0gaSAqIHRpbWVzdGVwO1xuXG4gICAgICB2YXIgYVZhbHVlQXRUaW1lID0gY2FsY1ZhbHVlQXRUaW1lKGFGcm9tLCBhVG8sIGFEdXJhdGlvbiwgYS5lbGFwc2VkICsgcnVubmluZ1RpbWUsIGFFYXNlKTtcbiAgICAgIHZhciBiVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYkZyb20sIGJUbywgYkR1cmF0aW9uLCBiLmVsYXBzZWQgKyBydW5uaW5nVGltZSwgYkVhc2UpO1xuXG4gICAgICB2YXIgaGFzSW50ZXJzZWN0ZWQgPSBiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lID4gYlZhbHVlQXRUaW1lIHx8ICFiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lIDwgYlZhbHVlQXRUaW1lO1xuXG4gICAgICBpZiAoaGFzSW50ZXJzZWN0ZWQpIHtcbiAgICAgICAgdmFyIFAyID0gYlZhbHVlQXRUaW1lO1xuICAgICAgICBibGVuZFBvaW50cy5wdXNoKFAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUDNcbiAgLy8gVGhlIHBvaW50cyB0aGUgdHdvIHR3ZWVucyBzdG9wIG92ZXJsYXBwaW5nXG4gIHZhciBQMyA9IGJWYWx1ZUF0VHdlZW5PdmVybGFwQ29tcGxldGU7XG4gIGJsZW5kUG9pbnRzLnB1c2goUDMpO1xuXG4gIC8vIFB1c2ggdGhlIGVuZCBzdGF0ZSBvZiBiIHR3ZWVuIGFzIGZpbmFsIGNvbnRyb2wgcG9pbnRcbiAgdmFyIFA0ID0gYlRvO1xuICBibGVuZFBvaW50cy5wdXNoKFA0KTtcblxuICByZXR1cm4gKDAsIF90d2VlbjIuZGVmYXVsdCkoX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgZHVyYXRpb246IGJEdXJhdGlvbixcbiAgICBlYXNlOiBfZWFzaW5nLmxpbmVhcixcbiAgICBvblVwZGF0ZTogKDAsIF90cmFuc2Zvcm1lcnMuZmxvdykoKDAsIF90cmFuc2Zvcm1lcnMuYmV6aWVyKShibGVuZFBvaW50cyksIG9uVXBkYXRlKVxuICB9KSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwySnNaVzVrTFhSM1pXVnVjeTVxY3lKZExDSnVZVzFsY3lJNld5SmpiR0Z0Y0ZCeWIyZHlaWE56SWl3aVkyRnNZMVpoYkhWbFFYUlVhVzFsSWl3aVpuSnZiU0lzSW5Sdklpd2laSFZ5WVhScGIyNGlMQ0psYkdGd2MyVmtJaXdpWldGelpTSXNJbkJ5YjJkeVpYTnpRWFJVYVcxbElpd2liMjVWY0dSaGRHVWlMQ0poWTJOMWNtRmplU0lzSW5CeWIzQnpJaXdpWVNJc0ltSWlMQ0poUTNWeWNtVnVkQ0lzSW1kbGRDSXNJbUZFZFhKaGRHbHZiaUlzSW1kbGRGQnliM0FpTENKaVJIVnlZWFJwYjI0aUxDSmhSV0Z6WlNJc0ltSkZZWE5sSWl3aVlVWnliMjBpTENKaVJuSnZiU0lzSW1GVWJ5SXNJbUpVYnlJc0ltOTJaWEpzWVhCRWRYSmhkR2x2YmlJc0lrMWhkR2dpTENKdGFXNGlMQ0puWlhSRmJHRndjMlZrSWl3aVlsWmhiSFZsUVhSVWQyVmxiazkyWlhKc1lYQkRiMjF3YkdWMFpTSXNJbUpUZEdGeWRITklhV2RvWlhKVWFHRnVRU0lzSW1KRmJtUnpTR2xuYUdWeVZHaGhia0VpTENKUU1TSXNJbUpzWlc1a1VHOXBiblJ6SWl3aWRIZGxaVzV6U1c1MFpYSnpaV04wSWl3aWRHbHRaWE4wWlhBaUxDSnBJaXdpY25WdWJtbHVaMVJwYldVaUxDSmhWbUZzZFdWQmRGUnBiV1VpTENKaVZtRnNkV1ZCZEZScGJXVWlMQ0pvWVhOSmJuUmxjbk5sWTNSbFpDSXNJbEF5SWl3aWNIVnphQ0lzSWxBeklpd2lVRFFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenM3TzBGQlEwRTdPMEZCUTBFN08wRkJRMEU3T3pzN096dEJRVVZCTEVsQlFVMUJMR2RDUVVGblFpeDVRa0ZCVFN4RFFVRk9MRVZCUVZNc1EwRkJWQ3hEUVVGMFFqczdRVUZGUVN4VFFVRlRReXhsUVVGVUxFTkJRWGxDUXl4SlFVRjZRaXhGUVVFclFrTXNSVUZCTDBJc1JVRkJiVU5ETEZGQlFXNURMRVZCUVRaRFF5eFBRVUUzUXl4RlFVRnpSRU1zU1VGQmRFUXNSVUZCTkVRN1FVRkRNVVFzVFVGQlRVTXNhVUpCUVdsQ1JDeExRVUZMVGl4alFVRmpMR2REUVVGeFFpeERRVUZ5UWl4RlFVRjNRa2tzVVVGQmVFSXNSVUZCYTBORExFOUJRV3hETEVOQlFXUXNRMEZCVEN4RFFVRjJRanRCUVVOQkxGTkJRVThzWjBOQlFYRkNTQ3hKUVVGeVFpeEZRVUV5UWtNc1JVRkJNMElzUlVGQkswSkpMR05CUVM5Q0xFTkJRVkE3UVVGRFJEczdhMEpCUldNc1owSkJRWEZFTzBGQlFVRXNUVUZCYkVSTUxFbEJRV3RFTEZGQlFXeEVRU3hKUVVGclJEdEJRVUZCTEUxQlFUVkRReXhGUVVFMFF5eFJRVUUxUTBFc1JVRkJORU03UVVGQlFTeE5RVUY0UTBzc1VVRkJkME1zVVVGQmVFTkJMRkZCUVhkRE8wRkJRVUVzTWtKQlFUbENReXhSUVVFNFFqdEJRVUZCTEUxQlFUbENRU3hSUVVFNFFpeHBRMEZCYmtJc1JVRkJiVUk3UVVGQlFTeE5RVUZhUXl4TFFVRlpPenRCUVVOc1JUdEJRVU5CTEUxQlFVMURMRWxCUVVsVUxFbEJRVlk3UVVGRFFTeE5RVUZOVlN4SlFVRkpWQ3hGUVVGV08wRkJRMEVzVFVGQlRWVXNWMEZCVjBZc1JVRkJSVWNzUjBGQlJpeEZRVUZxUWp0QlFVTkJMRTFCUVUxRExGbEJRVmxLTEVWQlFVVkxMRTlCUVVZc1EwRkJWU3hWUVVGV0xFTkJRV3hDTzBGQlEwRXNUVUZCVFVNc1dVRkJXVXdzUlVGQlJVa3NUMEZCUml4RFFVRlZMRlZCUVZZc1EwRkJiRUk3UVVGRFFTeE5RVUZOUlN4UlFVRlJVQ3hGUVVGRlN5eFBRVUZHTEVOQlFWVXNUVUZCVml4RFFVRmtPMEZCUTBFc1RVRkJUVWNzVVVGQlVWQXNSVUZCUlVrc1QwRkJSaXhEUVVGVkxFMUJRVllzUTBGQlpEdEJRVU5CTEUxQlFVMUpMRkZCUVZGVUxFVkJRVVZMTEU5QlFVWXNRMEZCVlN4TlFVRldMRU5CUVdRN1FVRkRRU3hOUVVGTlN5eFJRVUZSVkN4RlFVRkZTU3hQUVVGR0xFTkJRVlVzVFVGQlZpeERRVUZrTzBGQlEwRXNUVUZCVFUwc1RVRkJUVmdzUlVGQlJVc3NUMEZCUml4RFFVRlZMRWxCUVZZc1EwRkJXanRCUVVOQkxFMUJRVTFQTEUxQlFVMVlMRVZCUVVWSkxFOUJRVVlzUTBGQlZTeEpRVUZXTEVOQlFWbzdPMEZCUlVFN1FVRkRRU3hOUVVGTlVTeHJRa0ZCYTBKRExFdEJRVXRETEVkQlFVd3NRMEZCVTFnc1dVRkJXVW9zUlVGQlJXZENMRlZCUVVZc1JVRkJja0lzUlVGQmNVTldMRk5CUVhKRExFTkJRWGhDTzBGQlEwRXNUVUZCVFZjc0swSkJRU3RDTTBJc1owSkJRV2RDYjBJc1MwRkJhRUlzUlVGQmRVSkZMRWRCUVhaQ0xFVkJRVFJDVGl4VFFVRTFRaXhGUVVGMVEwOHNaVUZCZGtNc1JVRkJkMFJNTEV0QlFYaEVMRU5CUVhKRE8wRkJRMEVzVFVGQlRWVXNjVUpCUVhOQ1VpeFJRVUZSVWl4UlFVRndRenRCUVVOQkxFMUJRVTFwUWl4dFFrRkJiMEpHTEN0Q1FVRXJRazRzUjBGQmVrUTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlRWTXNTMEZCUzJ4Q0xGRkJRVmc3UVVGRFFTeE5RVUZOYlVJc1kwRkJZeXhEUVVGRFJDeEZRVUZFTEVOQlFYQkNPenRCUVVWQk8wRkJRMEU3UVVGRFFTeE5RVUZOUlN4clFrRkJiVUpLTEhWQ1FVRjFRa01zWjBKQlFXaEVPMEZCUTBFc1RVRkJTVWNzWlVGQlNpeEZRVUZ4UWp0QlFVTnVRaXhSUVVGSlF5eFhRVUZYVml4clFrRkJhMEptTEZGQlFXcERPenRCUVVWQkxGTkJRVXNzU1VGQlNUQkNMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1RGQ0xGRkJRWEJDTEVWQlFUaENNRUlzUjBGQk9VSXNSVUZCYlVNN1FVRkRha01zVlVGQlRVTXNZMEZCWTBRc1NVRkJTVVFzVVVGQmVFSTdPMEZCUlVFc1ZVRkJUVWNzWlVGQlpYQkRMR2RDUVVGblFtMUNMRXRCUVdoQ0xFVkJRWFZDUlN4SFFVRjJRaXhGUVVFMFFsQXNVMEZCTlVJc1JVRkJkVU5LTEVWQlFVVk9MRTlCUVVZc1IwRkJXU3RDTEZkQlFXNUVMRVZCUVdkRmJFSXNTMEZCYUVVc1EwRkJja0k3UVVGRFFTeFZRVUZOYjBJc1pVRkJaWEpETEdkQ1FVRm5RbTlDTEV0QlFXaENMRVZCUVhWQ1JTeEhRVUYyUWl4RlFVRTBRazRzVTBGQk5VSXNSVUZCZFVOTUxFVkJRVVZRTEU5QlFVWXNSMEZCV1N0Q0xGZEJRVzVFTEVWQlFXZEZha0lzUzBGQmFFVXNRMEZCY2tJN08wRkJSVUVzVlVGQlRXOUNMR2xDUVVOSVZpeHpRa0ZCYzBKUkxHVkJRV1ZETEZsQlFYUkRMRWxCUTBNc1EwRkJRMVFzYTBKQlFVUXNTVUZCZFVKUkxHVkJRV1ZETEZsQlJucERPenRCUVV0QkxGVkJRVWxETEdOQlFVb3NSVUZCYjBJN1FVRkRiRUlzV1VGQlRVTXNTMEZCUzBZc1dVRkJXRHRCUVVOQlRpeHZRa0ZCV1ZNc1NVRkJXaXhEUVVGcFFrUXNSVUZCYWtJN1FVRkRRVHRCUVVORU8wRkJRMFk3UVVGRFJqczdRVUZGUkR0QlFVTkJPMEZCUTBFc1RVRkJUVVVzUzBGQlMyUXNORUpCUVZnN1FVRkRRVWtzWTBGQldWTXNTVUZCV2l4RFFVRnBRa01zUlVGQmFrSTdPMEZCUlVFN1FVRkRRU3hOUVVGTlF5eExRVUZMY0VJc1IwRkJXRHRCUVVOQlV5eGpRVUZaVXl4SlFVRmFMRU5CUVdsQ1JTeEZRVUZxUWpzN1FVRkZRU3hUUVVGUExHdERRVU5HYWtNc1MwRkVSVHRCUVVWTVRpeGpRVUZWWVN4VFFVWk1PMEZCUjB4WUxIZENRVWhMTzBGQlNVeEZMR05CUVZVc2QwSkJRMUlzTUVKQlFVOTNRaXhYUVVGUUxFTkJSRkVzUlVGRlVuaENMRkZCUmxFN1FVRktUQ3hMUVVGUU8wRkJVMFFzUXlJc0ltWnBiR1VpT2lKaWJHVnVaQzEwZDJWbGJuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk11YUdGc2JDOVFjbTlxWldOMGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkSGRsWlc0Z1puSnZiU0FuTGk5MGQyVmxiaWM3WEc1cGJYQnZjblFnZXlCc2FXNWxZWElnZlNCbWNtOXRJQ2N1TGk5cGJtTXZaV0Z6YVc1bkp6dGNibWx0Y0c5eWRDQjdJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsTENCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYm1sdGNHOXlkQ0I3SUdac2IzY3NJR05zWVcxd0xDQmlaWHBwWlhJZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZEhKaGJuTm1iM0p0WlhKekp6dGNibHh1WTI5dWMzUWdZMnhoYlhCUWNtOW5jbVZ6Y3lBOUlHTnNZVzF3S0RBc0lERXBPMXh1WEc1bWRXNWpkR2x2YmlCallXeGpWbUZzZFdWQmRGUnBiV1VvWm5KdmJTd2dkRzhzSUdSMWNtRjBhVzl1TENCbGJHRndjMlZrTENCbFlYTmxLU0I3WEc0Z0lHTnZibk4wSUhCeWIyZHlaWE56UVhSVWFXMWxJRDBnWldGelpTaGpiR0Z0Y0ZCeWIyZHlaWE56S0dkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtEQXNJR1IxY21GMGFXOXVMQ0JsYkdGd2MyVmtLU2twTzF4dUlDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9abkp2YlN3Z2RHOHNJSEJ5YjJkeVpYTnpRWFJVYVcxbEtUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hzZ1puSnZiU3dnZEc4c0lHOXVWWEJrWVhSbExDQmhZMk4xY21GamVTQTlJRFl3TENBdUxpNXdjbTl3Y3lCOUtTQTlQaUI3WEc0Z0lDOHZJRWRsZENCMGQyVmxiaUJ3Y205d1pYSjBhV1Z6WEc0Z0lHTnZibk4wSUdFZ1BTQm1jbTl0TzF4dUlDQmpiMjV6ZENCaUlEMGdkRzg3WEc0Z0lHTnZibk4wSUdGRGRYSnlaVzUwSUQwZ1lTNW5aWFFvS1R0Y2JpQWdZMjl1YzNRZ1lVUjFjbUYwYVc5dUlEMGdZUzVuWlhSUWNtOXdLQ2RrZFhKaGRHbHZiaWNwTzF4dUlDQmpiMjV6ZENCaVJIVnlZWFJwYjI0Z1BTQmlMbWRsZEZCeWIzQW9KMlIxY21GMGFXOXVKeWs3WEc0Z0lHTnZibk4wSUdGRllYTmxJRDBnWVM1blpYUlFjbTl3S0NkbFlYTmxKeWs3WEc0Z0lHTnZibk4wSUdKRllYTmxJRDBnWWk1blpYUlFjbTl3S0NkbFlYTmxKeWs3WEc0Z0lHTnZibk4wSUdGR2NtOXRJRDBnWVM1blpYUlFjbTl3S0NkbWNtOXRKeWs3WEc0Z0lHTnZibk4wSUdKR2NtOXRJRDBnWWk1blpYUlFjbTl3S0NkbWNtOXRKeWs3WEc0Z0lHTnZibk4wSUdGVWJ5QTlJR0V1WjJWMFVISnZjQ2duZEc4bktUdGNiaUFnWTI5dWMzUWdZbFJ2SUQwZ1lpNW5aWFJRY205d0tDZDBieWNwTzF4dVhHNGdJQzh2SUVGdVlXeDVjMlVnZEhkbFpXNXpYRzRnSUdOdmJuTjBJRzkyWlhKc1lYQkVkWEpoZEdsdmJpQTlJRTFoZEdndWJXbHVLR0ZFZFhKaGRHbHZiaUF0SUdFdVoyVjBSV3hoY0hObFpDZ3BMQ0JpUkhWeVlYUnBiMjRwTzF4dUlDQmpiMjV6ZENCaVZtRnNkV1ZCZEZSM1pXVnVUM1psY214aGNFTnZiWEJzWlhSbElEMGdZMkZzWTFaaGJIVmxRWFJVYVcxbEtHSkdjbTl0TENCaVZHOHNJR0pFZFhKaGRHbHZiaXdnYjNabGNteGhjRVIxY21GMGFXOXVMQ0JpUldGelpTazdYRzRnSUdOdmJuTjBJR0pUZEdGeWRITklhV2RvWlhKVWFHRnVRU0E5SUNoaVJuSnZiU0ErSUdGRGRYSnlaVzUwS1R0Y2JpQWdZMjl1YzNRZ1lrVnVaSE5JYVdkb1pYSlVhR0Z1UVNBOUlDaGlWbUZzZFdWQmRGUjNaV1Z1VDNabGNteGhjRU52YlhCc1pYUmxJRDRnWVZSdktUdGNibHh1SUNBdkx5QkNiR1Z1WkNCd2IybHVkSE1nWVhKbElHUmxabWx1WldRZ1lYTWdXM1FnUFNCMGFXMWxMQ0IySUQwZ2RtRnNkV1ZCZEZScGJXVmRYRzRnSUM4dklGQXhYRzRnSUM4dklGUm9aU0J6ZEdGeWRDQnZaaUIwYUdVZ2RIZGxaVzRnWW14bGJtUmNiaUFnWTI5dWMzUWdVREVnUFNCaFEzVnljbVZ1ZER0Y2JpQWdZMjl1YzNRZ1lteGxibVJRYjJsdWRITWdQU0JiVURGZE8xeHVYRzRnSUM4dklFWnBibVFnVURKY2JpQWdMeThnVkdobElIQnZjM05wWW14bElHbHVkR1Z5YzJWamRHbHZiaUJ3YjJsdWRDQmlaWFIzWldWdUlIUm9aU0IwZDI4Z2RIZGxaVzV6WEc0Z0lHTnZibk4wSUhSM1pXVnVjMGx1ZEdWeWMyVmpkQ0E5SUNoaVUzUmhjblJ6U0dsbmFHVnlWR2hoYmtFZ0lUMDlJR0pGYm1SelNHbG5hR1Z5VkdoaGJrRXBPMXh1SUNCcFppQW9kSGRsWlc1elNXNTBaWEp6WldOMEtTQjdYRzRnSUNBZ2JHVjBJSFJwYldWemRHVndJRDBnYjNabGNteGhjRVIxY21GMGFXOXVJQzhnWVdOamRYSmhZM2s3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUdGalkzVnlZV041T3lCcEt5c3BJSHRjYmlBZ0lDQWdJR052Ym5OMElISjFibTVwYm1kVWFXMWxJRDBnYVNBcUlIUnBiV1Z6ZEdWd08xeHVYRzRnSUNBZ0lDQmpiMjV6ZENCaFZtRnNkV1ZCZEZScGJXVWdQU0JqWVd4alZtRnNkV1ZCZEZScGJXVW9ZVVp5YjIwc0lHRlVieXdnWVVSMWNtRjBhVzl1TENCaExtVnNZWEJ6WldRZ0t5QnlkVzV1YVc1blZHbHRaU3dnWVVWaGMyVXBPMXh1SUNBZ0lDQWdZMjl1YzNRZ1lsWmhiSFZsUVhSVWFXMWxJRDBnWTJGc1kxWmhiSFZsUVhSVWFXMWxLR0pHY205dExDQmlWRzhzSUdKRWRYSmhkR2x2Yml3Z1lpNWxiR0Z3YzJWa0lDc2djblZ1Ym1sdVoxUnBiV1VzSUdKRllYTmxLVHRjYmx4dUlDQWdJQ0FnWTI5dWMzUWdhR0Z6U1c1MFpYSnpaV04wWldRZ1BTQW9YRzRnSUNBZ0lDQWdJQ2hpVTNSaGNuUnpTR2xuYUdWeVZHaGhia0VnSmlZZ1lWWmhiSFZsUVhSVWFXMWxJRDRnWWxaaGJIVmxRWFJVYVcxbEtTQjhmRnh1SUNBZ0lDQWdJQ0FvSVdKVGRHRnlkSE5JYVdkb1pYSlVhR0Z1UVNBbUppQmhWbUZzZFdWQmRGUnBiV1VnUENCaVZtRnNkV1ZCZEZScGJXVXBYRzRnSUNBZ0lDQXBPMXh1WEc0Z0lDQWdJQ0JwWmlBb2FHRnpTVzUwWlhKelpXTjBaV1FwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnVURJZ1BTQmlWbUZzZFdWQmRGUnBiV1U3WEc0Z0lDQWdJQ0FnSUdKc1pXNWtVRzlwYm5SekxuQjFjMmdvVURJcE8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdkx5QlFNMXh1SUNBdkx5QlVhR1VnY0c5cGJuUnpJSFJvWlNCMGQyOGdkSGRsWlc1eklITjBiM0FnYjNabGNteGhjSEJwYm1kY2JpQWdZMjl1YzNRZ1VETWdQU0JpVm1Gc2RXVkJkRlIzWldWdVQzWmxjbXhoY0VOdmJYQnNaWFJsTzF4dUlDQmliR1Z1WkZCdmFXNTBjeTV3ZFhOb0tGQXpLVHRjYmx4dUlDQXZMeUJRZFhOb0lIUm9aU0JsYm1RZ2MzUmhkR1VnYjJZZ1lpQjBkMlZsYmlCaGN5Qm1hVzVoYkNCamIyNTBjbTlzSUhCdmFXNTBYRzRnSUdOdmJuTjBJRkEwSUQwZ1lsUnZPMXh1SUNCaWJHVnVaRkJ2YVc1MGN5NXdkWE5vS0ZBMEtUdGNibHh1SUNCeVpYUjFjbTRnZEhkbFpXNG9lMXh1SUNBZ0lDNHVMbkJ5YjNCekxGeHVJQ0FnSUdSMWNtRjBhVzl1T2lCaVJIVnlZWFJwYjI0c1hHNGdJQ0FnWldGelpUb2diR2x1WldGeUxGeHVJQ0FnSUc5dVZYQmtZWFJsT2lCbWJHOTNLRnh1SUNBZ0lDQWdZbVY2YVdWeUtHSnNaVzVrVUc5cGJuUnpLU3hjYmlBZ0lDQWdJRzl1VlhCa1lYUmxYRzRnSUNBZ0tWeHVJQ0I5S1R0Y2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9ibGVuZC10d2VlbnMuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ2hhaW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ2hhaW4sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENoYWluKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYWluKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMucGxheU5leHQgPSBfdGhpcy5wbGF5TmV4dC5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBDaGFpbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pID0gMDtcbiAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLnBsYXlOZXh0ID0gZnVuY3Rpb24gcGxheU5leHQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGkgPSBfcHJvcHMuaSxcbiAgICAgICAgb3JkZXIgPSBfcHJvcHMub3JkZXI7XG5cbiAgICBpZiAoaSA8IG9yZGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMucHJvcHMuaSsrO1xuICAgICAgdGhpcy5wbGF5Q3VycmVudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIENoYWluLnByb3RvdHlwZS5wbGF5Q3VycmVudCA9IGZ1bmN0aW9uIHBsYXlDdXJyZW50KCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaSA9IF9wcm9wczIuaSxcbiAgICAgICAgb3JkZXIgPSBfcHJvcHMyLm9yZGVyO1xuXG4gICAgb3JkZXJbaV0ucHJvcHMuX29uQ29tcGxldGUgPSB0aGlzLnBsYXlOZXh0O1xuICAgIG9yZGVyW2ldLnN0YXJ0KCk7XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGkgPSBfcHJvcHMzLmksXG4gICAgICAgIG9yZGVyID0gX3Byb3BzMy5vcmRlcjtcblxuICAgIG9yZGVyW2ldLnN0b3AoKTtcbiAgfTtcblxuICByZXR1cm4gQ2hhaW47XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3JkZXIsIG9uQ29tcGxldGUpIHtcbiAgcmV0dXJuIG5ldyBDaGFpbih7IG9yZGVyOiBvcmRlciwgb25Db21wbGV0ZTogb25Db21wbGV0ZSB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOb1lXbHVMbXB6SWwwc0ltNWhiV1Z6SWpwYklrTm9ZV2x1SWl3aWNISnZjSE1pTENKd2JHRjVUbVY0ZENJc0ltSnBibVFpTENKdmJsTjBZWEowSWl3aWFTSXNJbkJzWVhsRGRYSnlaVzUwSWl3aWIzSmtaWElpTENKc1pXNW5kR2dpTENKamIyMXdiR1YwWlNJc0lsOXZia052YlhCc1pYUmxJaXdpYzNSaGNuUWlMQ0p2YmxOMGIzQWlMQ0p6ZEc5d0lpd2liMjVEYjIxd2JHVjBaU0pkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPenM3T3pzN096czdTVUZGVFVFc1N6czdPMEZCUTBvc2FVSkJRVmxETEV0QlFWb3NSVUZCYlVJN1FVRkJRVHM3UVVGQlFTeHBSRUZEYWtJc2JVSkJRVTFCTEV0QlFVNHNRMEZFYVVJN08wRkJSV3BDTEZWQlFVdERMRkZCUVV3c1IwRkJaMElzVFVGQlMwRXNVVUZCVEN4RFFVRmpReXhKUVVGa0xFOUJRV2hDTzBGQlJtbENPMEZCUjJ4Q096dHJRa0ZGUkVNc1R5eHpRa0ZCVlR0QlFVTlNMRk5CUVV0SUxFdEJRVXdzUTBGQlYwa3NRMEZCV0N4SFFVRmxMRU5CUVdZN1FVRkRRU3hUUVVGTFF5eFhRVUZNTzBGQlEwUXNSenM3YTBKQlJVUktMRkVzZFVKQlFWYzdRVUZCUVN4cFFrRkRXU3hMUVVGTFJDeExRVVJxUWp0QlFVRkJMRkZCUTBSSkxFTkJSRU1zVlVGRFJFRXNRMEZFUXp0QlFVRkJMRkZCUTBWRkxFdEJSRVlzVlVGRFJVRXNTMEZFUmpzN1FVRkZWQ3hSUVVGSlJpeEpRVUZKUlN4TlFVRk5ReXhOUVVGT0xFZEJRV1VzUTBGQmRrSXNSVUZCTUVJN1FVRkRlRUlzVjBGQlMxQXNTMEZCVEN4RFFVRlhTU3hEUVVGWU8wRkJRMEVzVjBGQlMwTXNWMEZCVER0QlFVTkVMRXRCU0VRc1RVRkhUenRCUVVOTUxGZEJRVXRITEZGQlFVdzdRVUZEUkR0QlFVTkdMRWM3TzJ0Q1FVVkVTQ3hYTERCQ1FVRmpPMEZCUVVFc2EwSkJRMU1zUzBGQlMwd3NTMEZFWkR0QlFVRkJMRkZCUTBwSkxFTkJSRWtzVjBGRFNrRXNRMEZFU1R0QlFVRkJMRkZCUTBSRkxFdEJSRU1zVjBGRFJFRXNTMEZFUXpzN1FVRkZXa0VzVlVGQlRVWXNRMEZCVGl4RlFVRlRTaXhMUVVGVUxFTkJRV1ZUTEZkQlFXWXNSMEZCTmtJc1MwRkJTMUlzVVVGQmJFTTdRVUZEUVVzc1ZVRkJUVVlzUTBGQlRpeEZRVUZUVFN4TFFVRlVPMEZCUTBRc1J6czdhMEpCUlVSRExFMHNjVUpCUVZNN1FVRkJRU3hyUWtGRFl5eExRVUZMV0N4TFFVUnVRanRCUVVGQkxGRkJRME5KTEVOQlJFUXNWMEZEUTBFc1EwRkVSRHRCUVVGQkxGRkJRMGxGTEV0QlJFb3NWMEZEU1VFc1MwRkVTanM3UVVGRlVFRXNWVUZCVFVZc1EwRkJUaXhGUVVGVFVTeEpRVUZVTzBGQlEwUXNSenM3T3pzN2EwSkJSMWtzVlVGQlEwNHNTMEZCUkN4RlFVRlJUeXhWUVVGU08wRkJRVUVzVTBGQmRVSXNTVUZCU1dRc1MwRkJTaXhEUVVGVkxFVkJRVVZQTEZsQlFVWXNSVUZCVTA4c2MwSkJRVlFzUlVGQlZpeERRVUYyUWp0QlFVRkJMRU1pTENKbWFXeGxJam9pWTJoaGFXNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk11YUdGc2JDOVFjbTlxWldOMGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dkp6dGNibHh1WTJ4aGMzTWdRMmhoYVc0Z1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lITjFjR1Z5S0hCeWIzQnpLVHRjYmlBZ0lDQjBhR2x6TG5Cc1lYbE9aWGgwSUQwZ2RHaHBjeTV3YkdGNVRtVjRkQzVpYVc1a0tIUm9hWE1wTzF4dUlDQjlYRzVjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCMGFHbHpMbkJ5YjNCekxta2dQU0F3TzF4dUlDQWdJSFJvYVhNdWNHeGhlVU4xY25KbGJuUW9LVHRjYmlBZ2ZWeHVYRzRnSUhCc1lYbE9aWGgwS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYVN3Z2IzSmtaWElnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ2FXWWdLR2tnUENCdmNtUmxjaTVzWlc1bmRHZ2dMU0F4S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbkJ5YjNCekxta3JLenRjYmlBZ0lDQWdJSFJvYVhNdWNHeGhlVU4xY25KbGJuUW9LVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVqYjIxd2JHVjBaU2dwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhCc1lYbERkWEp5Wlc1MEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2FTd2diM0prWlhJZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdiM0prWlhKYmFWMHVjSEp2Y0hNdVgyOXVRMjl0Y0d4bGRHVWdQU0IwYUdsekxuQnNZWGxPWlhoME8xeHVJQ0FnSUc5eVpHVnlXMmxkTG5OMFlYSjBLQ2s3WEc0Z0lIMWNibHh1SUNCdmJsTjBiM0FvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJwTENCdmNtUmxjaUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCdmNtUmxjbHRwWFM1emRHOXdLQ2s3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0c5eVpHVnlMQ0J2YmtOdmJYQnNaWFJsS1NBOVBpQnVaWGNnUTJoaGFXNG9leUJ2Y21SbGNpd2diMjVEYjIxd2JHVjBaU0I5S1R0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2NoYWluLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4uL2luYy92YWx1ZS10eXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuICgwLCBfdHdlZW4yLmRlZmF1bHQpKF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGZyb206IDAsXG4gICAgdG86IDEsXG4gICAgb25VcGRhdGU6ICgwLCBfdHJhbnNmb3JtZXJzLmZsb3cpKCgwLCBfdHJhbnNmb3JtZXJzLmJsZW5kQ29sb3IpKHByb3BzLmZyb20sIHByb3BzLnRvKSwgX3ZhbHVlVHlwZXMuY29sb3IudHJhbnNmb3JtLCBwcm9wcy5vblVwZGF0ZSB8fCBub29wKVxuICB9KSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnZiRzl5TFhSM1pXVnVMbXB6SWwwc0ltNWhiV1Z6SWpwYkltNXZiM0FpTENKd2NtOXdjeUlzSW1aeWIyMGlMQ0owYnlJc0ltOXVWWEJrWVhSbElpd2lkSEpoYm5ObWIzSnRJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenRCUVVOQk96dEJRVU5CT3pzN08wRkJSVUVzU1VGQlRVRXNUMEZCVHl4WlFVRk5MRU5CUVVVc1EwRkJja0k3TzJ0Q1FVVmxMRlZCUVVORExFdEJRVVFzUlVGQlZ6dEJRVU40UWl4VFFVRlBMR3REUVVOR1FTeExRVVJGTzBGQlJVeERMRlZCUVUwc1EwRkdSRHRCUVVkTVF5eFJRVUZKTEVOQlNFTTdRVUZKVEVNc1kwRkJWU3gzUWtGRFVpdzRRa0ZCVjBnc1RVRkJUVU1zU1VGQmFrSXNSVUZCZFVKRUxFMUJRVTFGTEVWQlFUZENMRU5CUkZFc1JVRkZVaXhyUWtGQlRVVXNVMEZHUlN4RlFVZFNTaXhOUVVGTlJ5eFJRVUZPTEVsQlFXdENTaXhKUVVoV08wRkJTa3dzUzBGQlVEdEJRVlZFTEVNaUxDSm1hV3hsSWpvaVkyOXNiM0l0ZEhkbFpXNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk11YUdGc2JDOVFjbTlxWldOMGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkSGRsWlc0Z1puSnZiU0FuTGk5MGQyVmxiaWM3WEc1cGJYQnZjblFnZXlCaWJHVnVaRU52Ykc5eUxDQm1iRzkzSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1J5WVc1elptOXliV1Z5Y3ljN1hHNXBiWEJ2Y25RZ2V5QmpiMnh2Y2lCOUlHWnliMjBnSnk0dUwybHVZeTkyWVd4MVpTMTBlWEJsY3ljN1hHNWNibU52Ym5OMElHNXZiM0FnUFNBb0tTQTlQaUI3ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tIQnliM0J6S1NBOVBpQjdYRzRnSUhKbGRIVnliaUIwZDJWbGJpaDdYRzRnSUNBZ0xpNHVjSEp2Y0hNc1hHNGdJQ0FnWm5KdmJUb2dNQ3hjYmlBZ0lDQjBiem9nTVN4Y2JpQWdJQ0J2YmxWd1pHRjBaVG9nWm14dmR5aGNiaUFnSUNBZ0lHSnNaVzVrUTI5c2IzSW9jSEp2Y0hNdVpuSnZiU3dnY0hKdmNITXVkRzhwTEZ4dUlDQWdJQ0FnWTI5c2IzSXVkSEpoYm5ObWIzSnRMRnh1SUNBZ0lDQWdjSEp2Y0hNdWIyNVZjR1JoZEdVZ2ZId2dibTl2Y0Z4dUlDQWdJQ2xjYmlBZ2ZTazdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY29sb3ItdHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDb21wb3NpdGVBY3Rpb24gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ29tcG9zaXRlQWN0aW9uLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBDb21wb3NpdGVBY3Rpb24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9zaXRlQWN0aW9uKTtcblxuICAgIHZhciBhY3Rpb25zID0gcHJvcHMuYWN0aW9ucyxcbiAgICAgICAgcmVtYWluaW5nUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsnYWN0aW9ucyddKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCByZW1haW5pbmdQcm9wcykpO1xuXG4gICAgX3RoaXMuY3VycmVudCA9IHt9O1xuICAgIF90aGlzLmFjdGlvbktleXMgPSBbXTtcbiAgICBfdGhpcy5hZGRBY3Rpb25zKHByb3BzLmFjdGlvbnMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuYWRkQWN0aW9ucyA9IGZ1bmN0aW9uIGFkZEFjdGlvbnMoYWN0aW9ucykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKF90aGlzMi5hY3Rpb25LZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgX3RoaXMyLmFjdGlvbktleXMucHVzaChrZXkpO1xuICAgICAgfVxuXG4gICAgICBfdGhpczJba2V5XSA9IGFjdGlvbnNba2V5XTtcblxuICAgICAgdmFyIG9uVXBkYXRlID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5jdXJyZW50W2tleV0gPSB2O1xuICAgICAgfTs7XG5cbiAgICAgIC8vIEltbWVkaWF0ZWx5IHVwZGF0ZSB3aXRoIHRoZSBjdXJyZW50IGFjdGlvbiBzdGF0ZVxuICAgICAgb25VcGRhdGUoX3RoaXMyW2tleV0uZ2V0KCkpO1xuXG4gICAgICBfdGhpczJba2V5XS5zZXRQcm9wcyh7XG4gICAgICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuICAgICAgfSkuYWRkTGlzdGVuZXIob25VcGRhdGUpO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYWN0aW9ucykge1xuICAgICAgX2xvb3Aoa2V5KTtcbiAgICB9XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IHRoaXMuYWN0aW9uS2V5cy5sZW5ndGg7XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzM1trZXldLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXM0W2tleV0uc3RvcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciB2ZWxvY2l0eSA9IHt9O1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB2ZWxvY2l0eVtrZXldID0gX3RoaXM1W2tleV0uZ2V0VmVsb2NpdHkoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwO1xuICB9O1xuXG4gIHJldHVybiBDb21wb3NpdGVBY3Rpb247XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDb21wb3NpdGVBY3Rpb24oX2V4dGVuZHMoe1xuICAgIGFjdGlvbnM6IGFjdGlvbnNcbiAgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOdmJYQnZjMmwwWlM1cWN5SmRMQ0p1WVcxbGN5STZXeUpEYjIxd2IzTnBkR1ZCWTNScGIyNGlMQ0p3Y205d2N5SXNJbUZqZEdsdmJuTWlMQ0p5WlcxaGFXNXBibWRRY205d2N5SXNJbU4xY25KbGJuUWlMQ0poWTNScGIyNUxaWGx6SWl3aVlXUmtRV04wYVc5dWN5SXNJbXRsZVNJc0ltbHVaR1Y0VDJZaUxDSndkWE5vSWl3aWIyNVZjR1JoZEdVaUxDSjJJaXdpWjJWMElpd2ljMlYwVUhKdmNITWlMQ0pmYjI1VGRHOXdJaXdpYm5WdFFXTjBhWFpsUVdOMGFXOXVjeUlzSW1Ga1pFeHBjM1JsYm1WeUlpd2liMjVUZEdGeWRDSXNJbXhsYm1kMGFDSXNJbVp2Y2tWaFkyZ2lMQ0p6ZEdGeWRDSXNJbTl1VTNSdmNDSXNJbk4wYjNBaUxDSm5aWFJXWld4dlkybDBlU0lzSW5abGJHOWphWFI1SWl3aWFYTkJZM1JwYjI1RGIyMXdiR1YwWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3pzN096czdPenM3TzBsQlJVMUJMR1U3T3p0QlFVTktMREpDUVVGWlF5eExRVUZhTEVWQlFXMUNPMEZCUVVFN08wRkJRVUVzVVVGRFZFTXNUMEZFVXl4SFFVTnpRa1FzUzBGRWRFSXNRMEZEVkVNc1QwRkVVenRCUVVGQkxGRkJRMGRETEdOQlJFZ3NORUpCUTNOQ1JpeExRVVIwUWpzN1FVRkJRU3hwUkVGRmFrSXNiVUpCUVUxRkxHTkJRVTRzUTBGR2FVSTdPMEZCUjJwQ0xGVkJRVXRETEU5QlFVd3NSMEZCWlN4RlFVRm1PMEZCUTBFc1ZVRkJTME1zVlVGQlRDeEhRVUZyUWl4RlFVRnNRanRCUVVOQkxGVkJRVXRETEZWQlFVd3NRMEZCWjBKTUxFMUJRVTFETEU5QlFYUkNPMEZCVEdsQ08wRkJUV3hDT3pzMFFrRkZSRWtzVlN4MVFrRkJWMG9zVHl4RlFVRlRPMEZCUVVFN08wRkJRVUVzTUVKQlExQkxMRWRCUkU4N1FVRkZhRUlzVlVGQlNTeFBRVUZMUml4VlFVRk1MRU5CUVdkQ1J5eFBRVUZvUWl4RFFVRjNRa1FzUjBGQmVFSXNUVUZCYVVNc1EwRkJReXhEUVVGMFF5eEZRVUY1UXp0QlFVTjJReXhsUVVGTFJpeFZRVUZNTEVOQlFXZENTU3hKUVVGb1FpeERRVUZ4UWtZc1IwRkJja0k3UVVGRFJEczdRVUZGUkN4aFFVRkxRU3hIUVVGTUxFbEJRVmxNTEZGQlFWRkxMRWRCUVZJc1EwRkJXanM3UVVGRlFTeFZRVUZOUnl4WFFVRlhMRlZCUVVORExFTkJRVVE3UVVGQlFTeGxRVUZQTEU5QlFVdFFMRTlCUVV3c1EwRkJZVWNzUjBGQllpeEpRVUZ2UWtrc1EwRkJNMEk3UVVGQlFTeFBRVUZxUWl4RFFVRTRRenM3UVVGRk9VTTdRVUZEUVVRc1pVRkJVeXhQUVVGTFNDeEhRVUZNTEVWQlFWVkxMRWRCUVZZc1JVRkJWRHM3UVVGRlFTeGhRVUZMVEN4SFFVRk1MRVZCUTBkTkxGRkJSRWdzUTBGRFdUdEJRVU5TUXl4cFFrRkJVenRCUVVGQkxHbENRVUZOTEU5QlFVdERMR2RDUVVGTUxFVkJRVTQ3UVVGQlFUdEJRVVJFTEU5QlJGb3NSVUZKUjBNc1YwRktTQ3hEUVVsbFRpeFJRVXBtTzBGQlltZENPenRCUVVOc1FpeFRRVUZMTEVsQlFVMUlMRWRCUVZnc1NVRkJhMEpNTEU5QlFXeENMRVZCUVRKQ08wRkJRVUVzV1VGQmFFSkxMRWRCUVdkQ08wRkJhVUl4UWp0QlFVTkdMRWM3T3pSQ1FVVkVWU3hQTEhOQ1FVRlZPMEZCUVVFN08wRkJRMUlzVTBGQlMwWXNaMEpCUVV3c1IwRkJkMElzUzBGQlMxWXNWVUZCVEN4RFFVRm5RbUVzVFVGQmVFTTdRVUZEUVN4VFFVRkxZaXhWUVVGTUxFTkJRV2RDWXl4UFFVRm9RaXhEUVVGM1FpeFZRVUZEV2l4SFFVRkVPMEZCUVVFc1lVRkJVeXhQUVVGTFFTeEhRVUZNTEVWQlFWVmhMRXRCUVZZc1JVRkJWRHRCUVVGQkxFdEJRWGhDTzBGQlEwUXNSenM3TkVKQlJVUkRMRTBzY1VKQlFWTTdRVUZCUVRzN1FVRkRVQ3hUUVVGTGFFSXNWVUZCVEN4RFFVRm5RbU1zVDBGQmFFSXNRMEZCZDBJc1ZVRkJRMW9zUjBGQlJEdEJRVUZCTEdGQlFWTXNUMEZCUzBFc1IwRkJUQ3hGUVVGVlpTeEpRVUZXTEVWQlFWUTdRVUZCUVN4TFFVRjRRanRCUVVORUxFYzdPelJDUVVWRVF5eFhMREJDUVVGak8wRkJRVUU3TzBGQlExb3NVVUZCVFVNc1YwRkJWeXhGUVVGcVFqdEJRVU5CTEZOQlFVdHVRaXhWUVVGTUxFTkJRV2RDWXl4UFFVRm9RaXhEUVVGM1FpeFZRVUZEV2l4SFFVRkVPMEZCUVVFc1lVRkJVMmxDTEZOQlFWTnFRaXhIUVVGVUxFbEJRV2RDTEU5QlFVdEJMRWRCUVV3c1JVRkJWV2RDTEZkQlFWWXNSVUZCZWtJN1FVRkJRU3hMUVVGNFFqdEJRVU5CTEZkQlFVOURMRkZCUVZBN1FVRkRSQ3hIT3pzMFFrRkZSRU1zWjBJc0swSkJRVzFDTzBGQlEycENMRmRCUVZFc1MwRkJTMVlzWjBKQlFVd3NTMEZCTUVJc1EwRkJiRU03UVVGRFJDeEhPenM3T3p0clFrRkhXU3hWUVVGRFlpeFBRVUZFTEVWQlFWVkVMRXRCUVZZc1JVRkJiMEk3UVVGRGFrTXNVMEZCVHl4SlFVRkpSQ3hsUVVGS08wRkJRMHhGTzBGQlJFc3NTMEZGUmtRc1MwRkdSU3hGUVVGUU8wRkJTVVFzUXlJc0ltWnBiR1VpT2lKamIyMXdiM05wZEdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGNuTXVhR0ZzYkM5UWNtOXFaV04wY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2Snp0Y2JtbHRjRzl5ZENCN0lHOXVSbkpoYldWVmNHUmhkR1VnZlNCbWNtOXRJQ2N1TGk5bWNtRnRaWE41Ym1Nbk8xeHVYRzVqYkdGemN5QkRiMjF3YjNOcGRHVkJZM1JwYjI0Z1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1lXTjBhVzl1Y3l3Z0xpNHVjbVZ0WVdsdWFXNW5VSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0FnSUhOMWNHVnlLSEpsYldGcGJtbHVaMUJ5YjNCektUdGNiaUFnSUNCMGFHbHpMbU4xY25KbGJuUWdQU0I3ZlR0Y2JpQWdJQ0IwYUdsekxtRmpkR2x2Ymt0bGVYTWdQU0JiWFR0Y2JpQWdJQ0IwYUdsekxtRmtaRUZqZEdsdmJuTW9jSEp2Y0hNdVlXTjBhVzl1Y3lrN1hHNGdJSDFjYmx4dUlDQmhaR1JCWTNScGIyNXpLR0ZqZEdsdmJuTXBJSHRjYmlBZ0lDQm1iM0lnS0dOdmJuTjBJR3RsZVNCcGJpQmhZM1JwYjI1ektTQjdYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NWhZM1JwYjI1TFpYbHpMbWx1WkdWNFQyWW9hMlY1S1NBOVBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoWTNScGIyNUxaWGx6TG5CMWMyZ29hMlY1S1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2RHaHBjMXRyWlhsZElEMGdZV04wYVc5dWMxdHJaWGxkTzF4dVhHNGdJQ0FnSUNCamIyNXpkQ0J2YmxWd1pHRjBaU0E5SUNoMktTQTlQaUIwYUdsekxtTjFjbkpsYm5SYmEyVjVYU0E5SUhZN08xeHVYRzRnSUNBZ0lDQXZMeUJKYlcxbFpHbGhkR1ZzZVNCMWNHUmhkR1VnZDJsMGFDQjBhR1VnWTNWeWNtVnVkQ0JoWTNScGIyNGdjM1JoZEdWY2JpQWdJQ0FnSUc5dVZYQmtZWFJsS0hSb2FYTmJhMlY1WFM1blpYUW9LU2s3WEc1Y2JpQWdJQ0FnSUhSb2FYTmJhMlY1WFZ4dUlDQWdJQ0FnSUNBdWMyVjBVSEp2Y0hNb2UxeHVJQ0FnSUNBZ0lDQWdJRjl2YmxOMGIzQTZJQ2dwSUQwK0lIUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeTB0WEc0Z0lDQWdJQ0FnSUgwcFhHNGdJQ0FnSUNBZ0lDNWhaR1JNYVhOMFpXNWxjaWh2YmxWd1pHRjBaU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0IwYUdsekxtNTFiVUZqZEdsMlpVRmpkR2x2Ym5NZ1BTQjBhR2x6TG1GamRHbHZia3RsZVhNdWJHVnVaM1JvTzF4dUlDQWdJSFJvYVhNdVlXTjBhVzl1UzJWNWN5NW1iM0pGWVdOb0tDaHJaWGtwSUQwK0lIUm9hWE5iYTJWNVhTNXpkR0Z5ZENncEtUdGNiaUFnZlZ4dVhHNGdJRzl1VTNSdmNDZ3BJSHRjYmlBZ0lDQjBhR2x6TG1GamRHbHZia3RsZVhNdVptOXlSV0ZqYUNnb2EyVjVLU0E5UGlCMGFHbHpXMnRsZVYwdWMzUnZjQ2dwS1R0Y2JpQWdmVnh1WEc0Z0lHZGxkRlpsYkc5amFYUjVLQ2tnZTF4dUlDQWdJR052Ym5OMElIWmxiRzlqYVhSNUlEMGdlMzA3WEc0Z0lDQWdkR2hwY3k1aFkzUnBiMjVMWlhsekxtWnZja1ZoWTJnb0tHdGxlU2tnUFQ0Z2RtVnNiMk5wZEhsYmEyVjVYU0E5SUhSb2FYTmJhMlY1WFM1blpYUldaV3h2WTJsMGVTZ3BLVHRjYmlBZ0lDQnlaWFIxY200Z2RtVnNiMk5wZEhrN1hHNGdJSDFjYmx4dUlDQnBjMEZqZEdsdmJrTnZiWEJzWlhSbEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlBb2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpJRDA5UFNBd0tUdGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9ZV04wYVc5dWN5d2djSEp2Y0hNcElEMCtJSHRjYmlBZ2NtVjBkWEp1SUc1bGR5QkRiMjF3YjNOcGRHVkJZM1JwYjI0b2UxeHVJQ0FnSUdGamRHbHZibk1zWEc0Z0lDQWdMaTR1Y0hKdmNITmNiaUFnZlNrN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF90d2VlbiA9IHJlcXVpcmUoJy4vdHdlZW4nKTtcblxudmFyIF90d2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2Vlbik7XG5cbnZhciBfZWFzaW5nID0gcmVxdWlyZSgnLi4vaW5jL2Vhc2luZycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDcm9zc0ZhZGUgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ3Jvc3NGYWRlLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBDcm9zc0ZhZGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENyb3NzRmFkZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENyb3NzRmFkZS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uLFxuICAgICAgICBlYXNlID0gX3Byb3BzLmVhc2UsXG4gICAgICAgIGZhZGVyID0gX3Byb3BzLmZhZGVyO1xuXG5cbiAgICB0aGlzLmZhZGVyID0gZmFkZXIgfHwgKDAsIF90d2VlbjIuZGVmYXVsdCkoe1xuICAgICAgdG86IDEsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBlYXNlOiBlYXNlXG4gICAgfSkuc3RhcnQoKTtcbiAgfTtcblxuICBDcm9zc0ZhZGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGZyb20gPSBfcHJvcHMyLmZyb20sXG4gICAgICAgIHRvID0gX3Byb3BzMi50bztcblxuICAgIHZhciBiYWxhbmNlID0gdGhpcy5mYWRlci5nZXQoKTtcbiAgICB2YXIgbGF0ZXN0RnJvbVZhbHVlID0gZnJvbS5nZXQoKTtcbiAgICB2YXIgbGF0ZXN0VG9WYWx1ZSA9IHRvLmdldCgpO1xuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGxhdGVzdEZyb21WYWx1ZSwgbGF0ZXN0VG9WYWx1ZSwgYmFsYW5jZSk7XG4gIH07XG5cbiAgcmV0dXJuIENyb3NzRmFkZTtcbn0oXzIuZGVmYXVsdCk7XG5cbkNyb3NzRmFkZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGVhc2U6IF9lYXNpbmcubGluZWFyXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDcm9zc0ZhZGUocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk55YjNOekxXWmhaR1V1YW5NaVhTd2libUZ0WlhNaU9sc2lRM0p2YzNOR1lXUmxJaXdpYjI1VGRHRnlkQ0lzSW5CeWIzQnpJaXdpWkhWeVlYUnBiMjRpTENKbFlYTmxJaXdpWm1Ga1pYSWlMQ0owYnlJc0luTjBZWEowSWl3aWRYQmtZWFJsSWl3aVpuSnZiU0lzSW1KaGJHRnVZMlVpTENKblpYUWlMQ0pzWVhSbGMzUkdjbTl0Vm1Gc2RXVWlMQ0pzWVhSbGMzUlViMVpoYkhWbElpd2laR1ZtWVhWc2RGQnliM0J6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVOQk96dEJRVU5CT3pzN096czdPenM3TzBsQlJVMUJMRk03T3pzN096czdPenR6UWtGTFNrTXNUeXh6UWtGQlZUdEJRVUZCTEdsQ1FVTXdRaXhMUVVGTFF5eExRVVF2UWp0QlFVRkJMRkZCUTBGRExGRkJSRUVzVlVGRFFVRXNVVUZFUVR0QlFVRkJMRkZCUTFWRExFbEJSRllzVlVGRFZVRXNTVUZFVmp0QlFVRkJMRkZCUTJkQ1F5eExRVVJvUWl4VlFVTm5Ra0VzUzBGRWFFSTdPenRCUVVkU0xGTkJRVXRCTEV0QlFVd3NSMEZCWVVFc1UwRkJVeXh4UWtGQlRUdEJRVU14UWtNc1ZVRkJTU3hEUVVSelFqdEJRVVV4UWtnc2QwSkJSakJDTzBGQlJ6RkNRenRCUVVnd1FpeExRVUZPTEVWQlNXNUNSeXhMUVVwdFFpeEZRVUYwUWp0QlFVdEVMRWM3TzNOQ1FVVkVReXhOTEhGQ1FVRlRPMEZCUVVFc2EwSkJRMk1zUzBGQlMwNHNTMEZFYmtJN1FVRkJRU3hSUVVORFR5eEpRVVJFTEZkQlEwTkJMRWxCUkVRN1FVRkJRU3hSUVVOUFNDeEZRVVJRTEZkQlEwOUJMRVZCUkZBN08wRkJSVkFzVVVGQlRVa3NWVUZCVlN4TFFVRkxUQ3hMUVVGTUxFTkJRVmROTEVkQlFWZ3NSVUZCYUVJN1FVRkRRU3hSUVVGTlF5eHJRa0ZCYTBKSUxFdEJRVXRGTEVkQlFVd3NSVUZCZUVJN1FVRkRRU3hSUVVGTlJTeG5Ra0ZCWjBKUUxFZEJRVWRMTEVkQlFVZ3NSVUZCZEVJN1FVRkRRU3hYUVVGUExHZERRVUZ4UWtNc1pVRkJja0lzUlVGQmMwTkRMR0ZCUVhSRExFVkJRWEZFU0N4UFFVRnlSQ3hEUVVGUU8wRkJRMFFzUnpzN096czdRVUZ5UWtkV0xGTXNRMEZEUjJNc1dTeEhRVUZsTzBGQlEzQkNWanRCUVVSdlFpeERPenRyUWtGMVFsUXNWVUZCUTBZc1MwRkJSRHRCUVVGQkxGTkJRVmNzU1VGQlNVWXNVMEZCU2l4RFFVRmpSU3hMUVVGa0xFTkJRVmc3UVVGQlFTeERJaXdpWm1sc1pTSTZJbU55YjNOekxXWmhaR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoY25NdWFHRnNiQzlRY205cVpXTjBjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYm1sdGNHOXlkQ0IwZDJWbGJpQm1jbTl0SUNjdUwzUjNaV1Z1Snp0Y2JtbHRjRzl5ZENCN0lHeHBibVZoY2lCOUlHWnliMjBnSnk0dUwybHVZeTlsWVhOcGJtY25PMXh1YVcxd2IzSjBJSHNnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVjYm1Oc1lYTnpJRU55YjNOelJtRmtaU0JsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzRnSUhOMFlYUnBZeUJrWldaaGRXeDBVSEp2Y0hNZ1BTQjdYRzRnSUNBZ1pXRnpaVG9nYkdsdVpXRnlYRzRnSUgxY2JseHVJQ0J2YmxOMFlYSjBLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2daSFZ5WVhScGIyNHNJR1ZoYzJVc0lHWmhaR1Z5SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdkR2hwY3k1bVlXUmxjaUE5SUdaaFpHVnlJSHg4SUhSM1pXVnVLSHRjYmlBZ0lDQWdJSFJ2T2lBeExGeHVJQ0FnSUNBZ1pIVnlZWFJwYjI0c1hHNGdJQ0FnSUNCbFlYTmxYRzRnSUNBZ2ZTa3VjM1JoY25Rb0tUdGNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHWnliMjBzSUhSdklIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR052Ym5OMElHSmhiR0Z1WTJVZ1BTQjBhR2x6TG1aaFpHVnlMbWRsZENncE8xeHVJQ0FnSUdOdmJuTjBJR3hoZEdWemRFWnliMjFXWVd4MVpTQTlJR1p5YjIwdVoyVjBLQ2s3WEc0Z0lDQWdZMjl1YzNRZ2JHRjBaWE4wVkc5V1lXeDFaU0E5SUhSdkxtZGxkQ2dwTzF4dUlDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWhzWVhSbGMzUkdjbTl0Vm1Gc2RXVXNJR3hoZEdWemRGUnZWbUZzZFdVc0lHSmhiR0Z1WTJVcE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaHdjbTl3Y3lrZ1BUNGdibVYzSUVOeWIzTnpSbUZrWlNod2NtOXdjeWs3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZHVyYXRpb24sIG9uQ29tcGxldGUpIHtcbiAgcmV0dXJuICgwLCBfdHdlZW4yLmRlZmF1bHQpKHsgZHVyYXRpb246IGR1cmF0aW9uLCBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlJsYkdGNUxtcHpJbDBzSW01aGJXVnpJanBiSW1SMWNtRjBhVzl1SWl3aWIyNURiMjF3YkdWMFpTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN096czdhMEpCUldVc1ZVRkJRMEVzVVVGQlJDeEZRVUZYUXl4VlFVRllPMEZCUVVFc1UwRkJNRUlzY1VKQlFVMHNSVUZCUlVRc2EwSkJRVVlzUlVGQldVTXNjMEpCUVZvc1JVRkJUaXhEUVVFeFFqdEJRVUZCTEVNaUxDSm1hV3hsSWpvaVpHVnNZWGt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoY25NdWFHRnNiQzlRY205cVpXTjBjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZEhkbFpXNGdabkp2YlNBbkxpOTBkMlZsYmljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaGtkWEpoZEdsdmJpd2diMjVEYjIxd2JHVjBaU2tnUFQ0Z2RIZGxaVzRvZXlCa2RYSmhkR2x2Yml3Z2IyNURiMjF3YkdWMFpTQjlLVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZGVsYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBhcmFsbGVsID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFBhcmFsbGVsLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBQYXJhbGxlbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFyYWxsZWwpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBQYXJhbGxlbC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgYWN0aW9ucyA9IHRoaXMucHJvcHMuYWN0aW9ucztcblxuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IGFjdGlvbnMubGVuZ3RoO1xuXG4gICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIGFjdGlvbi5zZXRQcm9wcyh7XG4gICAgICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIHJldHVybiBhY3Rpb24uc3RvcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5hZGRBY3Rpb24gPSBmdW5jdGlvbiBhZGRBY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLnByb3BzLmFjdGlvbnM7XG5cblxuICAgIGlmIChhY3Rpb25zLmluZGV4T2YoYWN0aW9uKSA9PT0gLTEpIHtcbiAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMDtcbiAgfTtcblxuICByZXR1cm4gUGFyYWxsZWw7XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBQYXJhbGxlbChfZXh0ZW5kcyh7IGFjdGlvbnM6IGFjdGlvbnMgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNCaGNtRnNiR1ZzTG1weklsMHNJbTVoYldWeklqcGJJbEJoY21Gc2JHVnNJaXdpYjI1VGRHRnlkQ0lzSW1GamRHbHZibk1pTENKd2NtOXdjeUlzSW01MWJVRmpkR2wyWlVGamRHbHZibk1pTENKc1pXNW5kR2dpTENKbWIzSkZZV05vSWl3aVlXTjBhVzl1SWl3aWMyVjBVSEp2Y0hNaUxDSmZiMjVUZEc5d0lpd2ljM1JoY25RaUxDSnZibE4wYjNBaUxDSnpkRzl3SWl3aVlXUmtRV04wYVc5dUlpd2lhVzVrWlhoUFppSXNJbkIxYzJnaUxDSnBjMEZqZEdsdmJrTnZiWEJzWlhSbElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZCUVRzN096czdPenM3T3pzN08wbEJSVTFCTEZFN096czdPenM3T3p0eFFrRkRTa01zVHl4elFrRkJWVHRCUVVGQk96dEJRVUZCTEZGQlEwRkRMRTlCUkVFc1IwRkRXU3hMUVVGTFF5eExRVVJxUWl4RFFVTkJSQ3hQUVVSQk96dEJRVVZTTEZOQlFVdEZMR2RDUVVGTUxFZEJRWGRDUml4UlFVRlJSeXhOUVVGb1F6czdRVUZGUVVnc1dVRkJVVWtzVDBGQlVpeERRVUZuUWl4VlFVRkRReXhOUVVGRUxFVkJRVms3UVVGRE1VSkJMR0ZCUVU5RExGRkJRVkFzUTBGQlowSTdRVUZEWkVNc2FVSkJRVk03UVVGQlFTeHBRa0ZCVFN4UFFVRkxUQ3huUWtGQlRDeEZRVUZPTzBGQlFVRTdRVUZFU3l4UFFVRm9RaXhGUVVWSFRTeExRVVpJTzBGQlIwUXNTMEZLUkR0QlFVdEVMRWM3TzNGQ1FVVkVReXhOTEhGQ1FVRlRPMEZCUTFBc1UwRkJTMUlzUzBGQlRDeERRVUZYUkN4UFFVRllMRU5CUVcxQ1NTeFBRVUZ1UWl4RFFVRXlRaXhWUVVGRFF5eE5RVUZFTzBGQlFVRXNZVUZCV1VFc1QwRkJUMHNzU1VGQlVDeEZRVUZhTzBGQlFVRXNTMEZCTTBJN1FVRkRSQ3hIT3p0eFFrRkZSRU1zVXl4elFrRkJWVTRzVFN4RlFVRlJPMEZCUVVFc1VVRkRVa3dzVDBGRVVTeEhRVU5KTEV0QlFVdERMRXRCUkZRc1EwRkRVa1FzVDBGRVVUczdPMEZCUjJoQ0xGRkJRVWxCTEZGQlFWRlpMRTlCUVZJc1EwRkJaMEpRTEUxQlFXaENMRTFCUVRSQ0xFTkJRVU1zUTBGQmFrTXNSVUZCYjBNN1FVRkRiRU5NTEdOQlFWRmhMRWxCUVZJc1EwRkJZVklzVFVGQllqdEJRVU5FTzBGQlEwWXNSenM3Y1VKQlJVUlRMR2RDTEN0Q1FVRnRRanRCUVVOcVFpeFhRVUZSTEV0QlFVdGFMR2RDUVVGTUxFdEJRVEJDTEVOQlFXeERPMEZCUTBRc1J6czdPenM3YTBKQlIxa3NWVUZCUTBZc1QwRkJSQ3hGUVVGVlF5eExRVUZXTzBGQlFVRXNVMEZCYjBJc1NVRkJTVWdzVVVGQlNpeFpRVUZsUlN4blFrRkJaaXhKUVVFeVFrTXNTMEZCTTBJc1JVRkJjRUk3UVVGQlFTeERJaXdpWm1sc1pTSTZJbkJoY21Gc2JHVnNMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWEp6TG1oaGJHd3ZVSEp2YW1WamRITXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVjYm1Oc1lYTnpJRkJoY21Gc2JHVnNJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR0ZqZEdsdmJuTWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1eklEMGdZV04wYVc5dWN5NXNaVzVuZEdnN1hHNWNiaUFnSUNCaFkzUnBiMjV6TG1admNrVmhZMmdvS0dGamRHbHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ1lXTjBhVzl1TG5ObGRGQnliM0J6S0h0Y2JpQWdJQ0FnSUNBZ1gyOXVVM1J2Y0RvZ0tDa2dQVDRnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1ekxTMWNiaUFnSUNBZ0lIMHBMbk4wWVhKMEtDazdYRzRnSUNBZ2ZTazdYRzRnSUgxY2JseHVJQ0J2YmxOMGIzQW9LU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTVoWTNScGIyNXpMbVp2Y2tWaFkyZ29LR0ZqZEdsdmJpa2dQVDRnWVdOMGFXOXVMbk4wYjNBb0tTazdYRzRnSUgxY2JseHVJQ0JoWkdSQlkzUnBiMjRvWVdOMGFXOXVLU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmhZM1JwYjI1eklIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tHRmpkR2x2Ym5NdWFXNWtaWGhQWmloaFkzUnBiMjRwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnWVdOMGFXOXVjeTV3ZFhOb0tHRmpkR2x2YmlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FYTkJZM1JwYjI1RGIyMXdiR1YwWlNncElIdGNiaUFnSUNCeVpYUjFjbTRnS0hSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5QTlQVDBnTUNrN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHRmpkR2x2Ym5Nc0lIQnliM0J6S1NBOVBpQnVaWGNnVUdGeVlXeHNaV3dvZXlCaFkzUnBiMjV6TENBdUxpNXdjbTl3Y3lCOUtUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wYXJhbGxlbC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGh5c2ljcyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQaHlzaWNzLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBQaHlzaWNzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaHlzaWNzKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUGh5c2ljcy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhdXRvU3RvcFNwZWVkID0gX3Byb3BzLmF1dG9TdG9wU3BlZWQsXG4gICAgICAgIGFjY2VsZXJhdGlvbiA9IF9wcm9wcy5hY2NlbGVyYXRpb24sXG4gICAgICAgIGZyaWN0aW9uID0gX3Byb3BzLmZyaWN0aW9uLFxuICAgICAgICB2ZWxvY2l0eSA9IF9wcm9wcy52ZWxvY2l0eSxcbiAgICAgICAgc3ByaW5nID0gX3Byb3BzLnNwcmluZyxcbiAgICAgICAgdG8gPSBfcHJvcHMudG87XG5cbiAgICB2YXIgbmV3VmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICB2YXIgZWxhcHNlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcblxuICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChhY2NlbGVyYXRpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShhY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGZyaWN0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGZyaWN0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSAqPSBNYXRoLnBvdygxIC0gZnJpY3Rpb24sIGVsYXBzZWQgLyAxMDApO1xuICAgIH1cblxuICAgIGlmIChzcHJpbmcgJiYgdG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGRpc3RhbmNlVG9UYXJnZXQgPSB0byAtIHRoaXMuY3VycmVudDtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkoc3ByaW5nLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB2ZWxvY2l0eVxuICAgIHRoaXMuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkobmV3VmVsb2NpdHksIGVsYXBzZWQpO1xuICAgIHRoaXMucHJvcHMudmVsb2NpdHkgPSBuZXdWZWxvY2l0eTtcblxuICAgIC8vIENoZWNrIGlmIHNpbXVsYXRpb24gaXMgY29tcGxldGVcbiAgICAvLyBXZSBkbyB0aGlzIGhlcmUgaW5zdGVhZCBvZiBgaXNBY3Rpb25Db21wbGV0ZWAgYXMgaXQgYWxsb3dzIHVzXG4gICAgLy8gdG8gY2xhbXAgZHVyaW5nIHRoaXMgdXBkYXRlXG4gICAgdGhpcy5pc0NvbXBsZXRlID0gYXV0b1N0b3BTcGVlZCAhPT0gZmFsc2UgJiYgKCFuZXdWZWxvY2l0eSB8fCBNYXRoLmFicyhuZXdWZWxvY2l0eSkgPD0gYXV0b1N0b3BTcGVlZCk7XG5cbiAgICBpZiAodGhpcy5pc0NvbXBsZXRlICYmIHNwcmluZykge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdG87XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBQaHlzaWNzLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICB9O1xuXG4gIHJldHVybiBQaHlzaWNzO1xufShfMi5kZWZhdWx0KTtcblxuUGh5c2ljcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjY2VsZXJhdGlvbjogMCxcbiAgZnJpY3Rpb246IDAsXG4gIHZlbG9jaXR5OiAwLFxuICBhdXRvU3RvcFNwZWVkOiAwLjAwMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGh5c2ljcyhwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQm9lWE5wWTNNdWFuTWlYU3dpYm1GdFpYTWlPbHNpVUdoNWMybGpjeUlzSW5Wd1pHRjBaU0lzSW5CeWIzQnpJaXdpWVhWMGIxTjBiM0JUY0dWbFpDSXNJbUZqWTJWc1pYSmhkR2x2YmlJc0ltWnlhV04wYVc5dUlpd2lkbVZzYjJOcGRIa2lMQ0p6Y0hKcGJtY2lMQ0owYnlJc0ltNWxkMVpsYkc5amFYUjVJaXdpWld4aGNITmxaQ0lzSW5WdVpHVm1hVzVsWkNJc0ltUnBjM1JoYm1ObFZHOVVZWEpuWlhRaUxDSmpkWEp5Wlc1MElpd2lhWE5EYjIxd2JHVjBaU0lzSWsxaGRHZ2lMQ0poWW5NaUxDSnBjMEZqZEdsdmJrTnZiWEJzWlhSbElpd2laR1ZtWVhWc2RGQnliM0J6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3UVVGRFFUczdRVUZEUVRzN096czdPenM3T3p0SlFVVk5RU3hQT3pzN096czdPenM3YjBKQlVVcERMRTBzY1VKQlFWTTdRVUZCUVN4cFFrRkRhVVVzUzBGQlMwTXNTMEZFZEVVN1FVRkJRU3hSUVVORFF5eGhRVVJFTEZWQlEwTkJMR0ZCUkVRN1FVRkJRU3hSUVVOblFrTXNXVUZFYUVJc1ZVRkRaMEpCTEZsQlJHaENPMEZCUVVFc1VVRkRPRUpETEZGQlJEbENMRlZCUXpoQ1FTeFJRVVE1UWp0QlFVRkJMRkZCUTNkRFF5eFJRVVI0UXl4VlFVTjNRMEVzVVVGRWVFTTdRVUZCUVN4UlFVTnJSRU1zVFVGRWJFUXNWVUZEYTBSQkxFMUJSR3hFTzBGQlFVRXNVVUZETUVSRExFVkJSREZFTEZWQlF6QkVRU3hGUVVReFJEczdRVUZGVUN4UlFVRkpReXhqUVVGalNDeFJRVUZzUWp0QlFVTkJMRkZCUVUxSkxGVkJRVlVzYjBOQlFXaENPenRCUVVWQk8wRkJRMEVzVVVGQlNVNHNXVUZCU2l4RlFVRnJRanRCUVVOb1Frc3NjVUpCUVdVc2VVSkJRV05NTEZsQlFXUXNSVUZCTkVKTkxFOUJRVFZDTEVOQlFXWTdRVUZEUkRzN1FVRkZSRHRCUVVOQkxGRkJRVWxNTEZGQlFVb3NSVUZCWXp0QlFVTmFTU3c0UWtGQlowSXNTVUZCU1Vvc1VVRkJjRUlzUlVGQmEwTkxMRlZCUVZVc1IwRkJOVU03UVVGRFJEczdRVUZGUkN4UlFVRkpTQ3hWUVVGVlF5eFBRVUZQUnl4VFFVRnlRaXhGUVVGblF6dEJRVU01UWl4VlFVRk5ReXh0UWtGQmJVSktMRXRCUVVzc1MwRkJTMHNzVDBGQmJrTTdRVUZEUVVvc2NVSkJRV1ZITEcxQ1FVRnRRaXg1UWtGQlkwd3NUVUZCWkN4RlFVRnpRa2NzVDBGQmRFSXNRMEZCYkVNN1FVRkRSRHM3UVVGRlJEdEJRVU5CTEZOQlFVdEhMRTlCUVV3c1NVRkJaMElzZVVKQlFXTktMRmRCUVdRc1JVRkJNa0pETEU5QlFUTkNMRU5CUVdoQ08wRkJRMEVzVTBGQlMxSXNTMEZCVEN4RFFVRlhTU3hSUVVGWUxFZEJRWE5DUnl4WFFVRjBRanM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRkxTeXhWUVVGTUxFZEJRVzFDV0N4clFrRkJhMElzUzBGQmJFSXNTMEZCTkVJc1EwRkJRMDBzVjBGQlJDeEpRVUZuUWswc1MwRkJTME1zUjBGQlRDeERRVUZUVUN4WFFVRlVMRXRCUVhsQ1RpeGhRVUZ5UlN4RFFVRnVRanM3UVVGRlFTeFJRVUZKTEV0QlFVdFhMRlZCUVV3c1NVRkJiVUpRTEUxQlFYWkNMRVZCUVN0Q08wRkJRemRDTEZkQlFVdE5MRTlCUVV3c1IwRkJaVXdzUlVGQlpqdEJRVU5FT3p0QlFVVkVMRmRCUVU4c1MwRkJTMHNzVDBGQldqdEJRVU5FTEVjN08yOUNRVVZFU1N4blFpd3JRa0ZCYlVJN1FVRkRha0lzVjBGQlR5eExRVUZMU0N4VlFVRmFPMEZCUTBRc1J6czdPenM3UVVFNVEwZGtMRThzUTBGRFIydENMRmtzUjBGQlpUdEJRVU53UW1Rc1owSkJRV01zUTBGRVRUdEJRVVZ3UWtNc1dVRkJWU3hEUVVaVk8wRkJSM0JDUXl4WlFVRlZMRU5CU0ZVN1FVRkpjRUpJTEdsQ1FVRmxPMEZCU2tzc1F6czdhMEpCWjBSVUxGVkJRVU5FTEV0QlFVUTdRVUZCUVN4VFFVRlhMRWxCUVVsR0xFOUJRVW9zUTBGQldVVXNTMEZCV2l4RFFVRllPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSndhSGx6YVdOekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYSnpMbWhoYkd3dlVISnZhbVZqZEhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNXBiWEJ2Y25RZ2V5QjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVWdmU0JtY205dElDY3VMaTltY21GdFpYTjVibU1uTzF4dWFXMXdiM0owSUhzZ2MzQmxaV1JRWlhKR2NtRnRaU0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVZMnhoYzNNZ1VHaDVjMmxqY3lCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lITjBZWFJwWXlCa1pXWmhkV3gwVUhKdmNITWdQU0I3WEc0Z0lDQWdZV05qWld4bGNtRjBhVzl1T2lBd0xGeHVJQ0FnSUdaeWFXTjBhVzl1T2lBd0xGeHVJQ0FnSUhabGJHOWphWFI1T2lBd0xGeHVJQ0FnSUdGMWRHOVRkRzl3VTNCbFpXUTZJREF1TURBeFhHNGdJSDFjYmx4dUlDQjFjR1JoZEdVb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCaGRYUnZVM1J2Y0ZOd1pXVmtMQ0JoWTJObGJHVnlZWFJwYjI0c0lHWnlhV04wYVc5dUxDQjJaV3h2WTJsMGVTd2djM0J5YVc1bkxDQjBieUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCc1pYUWdibVYzVm1Wc2IyTnBkSGtnUFNCMlpXeHZZMmwwZVR0Y2JpQWdJQ0JqYjI1emRDQmxiR0Z3YzJWa0lEMGdkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxLQ2s3WEc1Y2JpQWdJQ0F2THlCQmNIQnNlU0JoWTJObGJHVnlZWFJwYjI0Z2RHOGdkbVZzYjJOcGRIbGNiaUFnSUNCcFppQW9ZV05qWld4bGNtRjBhVzl1S1NCN1hHNGdJQ0FnSUNCdVpYZFdaV3h2WTJsMGVTQXJQU0J6Y0dWbFpGQmxja1p5WVcxbEtHRmpZMlZzWlhKaGRHbHZiaXdnWld4aGNITmxaQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnUVhCd2JIa2dabkpwWTNScGIyNGdkRzhnZG1Wc2IyTnBkSGxjYmlBZ0lDQnBaaUFvWm5KcFkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUc1bGQxWmxiRzlqYVhSNUlDbzlJQ2d4SUMwZ1puSnBZM1JwYjI0cElDb3FJQ2hsYkdGd2MyVmtJQzhnTVRBd0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9jM0J5YVc1bklDWW1JSFJ2SUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJR052Ym5OMElHUnBjM1JoYm1ObFZHOVVZWEpuWlhRZ1BTQjBieUF0SUhSb2FYTXVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lHNWxkMVpsYkc5amFYUjVJQ3M5SUdScGMzUmhibU5sVkc5VVlYSm5aWFFnS2lCemNHVmxaRkJsY2taeVlXMWxLSE53Y21sdVp5d2daV3hoY0hObFpDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdRWEJ3YkhrZ2RtVnNiMk5wZEhsY2JpQWdJQ0IwYUdsekxtTjFjbkpsYm5RZ0t6MGdjM0JsWldSUVpYSkdjbUZ0WlNodVpYZFdaV3h2WTJsMGVTd2daV3hoY0hObFpDazdYRzRnSUNBZ2RHaHBjeTV3Y205d2N5NTJaV3h2WTJsMGVTQTlJRzVsZDFabGJHOWphWFI1TzF4dVhHNGdJQ0FnTHk4Z1EyaGxZMnNnYVdZZ2MybHRkV3hoZEdsdmJpQnBjeUJqYjIxd2JHVjBaVnh1SUNBZ0lDOHZJRmRsSUdSdklIUm9hWE1nYUdWeVpTQnBibk4wWldGa0lHOW1JR0JwYzBGamRHbHZia052YlhCc1pYUmxZQ0JoY3lCcGRDQmhiR3h2ZDNNZ2RYTmNiaUFnSUNBdkx5QjBieUJqYkdGdGNDQmtkWEpwYm1jZ2RHaHBjeUIxY0dSaGRHVmNiaUFnSUNCMGFHbHpMbWx6UTI5dGNHeGxkR1VnUFNBb1lYVjBiMU4wYjNCVGNHVmxaQ0FoUFQwZ1ptRnNjMlVnSmlZZ0tDRnVaWGRXWld4dlkybDBlU0I4ZkNCTllYUm9MbUZpY3lodVpYZFdaV3h2WTJsMGVTa2dQRDBnWVhWMGIxTjBiM0JUY0dWbFpDa3BPMXh1WEc0Z0lDQWdhV1lnS0hSb2FYTXVhWE5EYjIxd2JHVjBaU0FtSmlCemNISnBibWNwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRDQTlJSFJ2TzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1OMWNuSmxiblE3WEc0Z0lIMWNibHh1SUNCcGMwRmpkR2x2YmtOdmJYQnNaWFJsS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtbHpRMjl0Y0d4bGRHVTdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSEJ5YjNCektTQTlQaUJ1WlhjZ1VHaDVjMmxqY3lod2NtOXdjeWs3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF92YWx1ZSA9IHJlcXVpcmUoJy4vdmFsdWUnKTtcblxudmFyIF92YWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZSk7XG5cbnZhciBfY29tcG9zaXRlID0gcmVxdWlyZSgnLi9jb21wb3NpdGUnKTtcblxudmFyIF9jb21wb3NpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBjcmVhdGVQb2ludGVyKF9yZWYyLCBfcmVmKSB7XG4gIHZhciB4ID0gX3JlZjIueCxcbiAgICAgIHkgPSBfcmVmMi55O1xuXG4gIHZhciBldmVudFRvUG9pbnRzID0gX3JlZi5ldmVudFRvUG9pbnRzLFxuICAgICAgbW92ZUV2ZW50ID0gX3JlZi5tb3ZlRXZlbnQsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2V2ZW50VG9Qb2ludHMnLCAnbW92ZUV2ZW50J10pO1xuXG4gIHZhciBwb2ludGVyID0gKDAsIF9jb21wb3NpdGUyLmRlZmF1bHQpKHtcbiAgICB4OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh4KSxcbiAgICB5OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh5KVxuICB9LCBfZXh0ZW5kcyh7XG4gICAgcHJldmVudERlZmF1bHQ6IHRydWVcbiAgfSwgcHJvcHMpKTtcblxuICB2YXIgdXBkYXRlUG9pbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHByb3BzLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyIHBvaW50cyA9IGV2ZW50VG9Qb2ludHMoZSk7XG4gICAgcG9pbnRlci54LnNldChwb2ludHMueCk7XG4gICAgcG9pbnRlci55LnNldChwb2ludHMueSk7XG4gIH07XG5cbiAgcG9pbnRlci5zZXRQcm9wcyh7XG4gICAgX29uU3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpO1xuICAgIH0sXG4gICAgX29uU3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcG9pbnRlcjtcbn1cblxudmFyIG1vdXNlRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIHtcbiAgICB4OiBlLnBhZ2VYLFxuICAgIHk6IGUucGFnZVlcbiAgfTtcbn07XG5cbnZhciB0b3VjaEV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChfcmVmMykge1xuICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBfcmVmMy5jaGFuZ2VkVG91Y2hlcztcbiAgcmV0dXJuIHtcbiAgICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbiAgfTtcbn07XG5cbnZhciBnZXROYXRpdmVFdmVudCA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiBlLm9yaWdpbmFsRXZlbnQgfHwgZS5uYXRpdmVFdmVudCB8fCBlO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGUsIHByb3BzKSB7XG4gIHZhciBuYXRpdmVFdmVudCA9IGdldE5hdGl2ZUV2ZW50KGUpO1xuICByZXR1cm4gbmF0aXZlRXZlbnQudG91Y2hlcyA/IGNyZWF0ZVBvaW50ZXIodG91Y2hFdmVudFRvUG9pbnQoZSksIF9leHRlbmRzKHtcbiAgICBtb3ZlRXZlbnQ6ICd0b3VjaG1vdmUnLFxuICAgIGV2ZW50VG9Qb2ludHM6IHRvdWNoRXZlbnRUb1BvaW50XG4gIH0sIHByb3BzKSkgOiBjcmVhdGVQb2ludGVyKG1vdXNlRXZlbnRUb1BvaW50KGUpLCBfZXh0ZW5kcyh7XG4gICAgbW92ZUV2ZW50OiAnbW91c2Vtb3ZlJyxcbiAgICBldmVudFRvUG9pbnRzOiBtb3VzZUV2ZW50VG9Qb2ludFxuICB9LCBwcm9wcykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0J2YVc1MFpYSXVhbk1pWFN3aWJtRnRaWE1pT2xzaVkzSmxZWFJsVUc5cGJuUmxjaUlzSW5naUxDSjVJaXdpWlhabGJuUlViMUJ2YVc1MGN5SXNJbTF2ZG1WRmRtVnVkQ0lzSW5CeWIzQnpJaXdpY0c5cGJuUmxjaUlzSW5CeVpYWmxiblJFWldaaGRXeDBJaXdpZFhCa1lYUmxVRzlwYm5SbGNpSXNJbVVpTENKd2IybHVkSE1pTENKelpYUWlMQ0p6WlhSUWNtOXdjeUlzSWw5dmJsTjBZWEowSWl3aVpHOWpkVzFsYm5RaUxDSmtiMk4xYldWdWRFVnNaVzFsYm5RaUxDSmhaR1JGZG1WdWRFeHBjM1JsYm1WeUlpd2lYMjl1VTNSdmNDSXNJbkpsYlc5MlpVVjJaVzUwVEdsemRHVnVaWElpTENKdGIzVnpaVVYyWlc1MFZHOVFiMmx1ZENJc0luQmhaMlZZSWl3aWNHRm5aVmtpTENKMGIzVmphRVYyWlc1MFZHOVFiMmx1ZENJc0ltTm9ZVzVuWldSVWIzVmphR1Z6SWl3aVkyeHBaVzUwV0NJc0ltTnNhV1Z1ZEZraUxDSm5aWFJPWVhScGRtVkZkbVZ1ZENJc0ltOXlhV2RwYm1Gc1JYWmxiblFpTENKdVlYUnBkbVZGZG1WdWRDSXNJblJ2ZFdOb1pYTWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGQk96czdPMEZCUTBFN096czdPenM3TzBGQlJVRXNVMEZCVTBFc1lVRkJWQ3hqUVVGNVJUdEJRVUZCTEUxQlFXaEVReXhEUVVGblJDeFRRVUZvUkVFc1EwRkJaMFE3UVVGQlFTeE5RVUUzUTBNc1EwRkJOa01zVTBGQk4wTkJMRU5CUVRaRE96dEJRVUZCTEUxQlFYUkRReXhoUVVGelF5eFJRVUYwUTBFc1lVRkJjME03UVVGQlFTeE5RVUYyUWtNc1UwRkJkVUlzVVVGQmRrSkJMRk5CUVhWQ08wRkJRVUVzVFVGQlZFTXNTMEZCVXpzN1FVRkRka1VzVFVGQlRVTXNWVUZCVlN4NVFrRkJWVHRCUVVONFFrd3NUMEZCUnl4eFFrRkJUVUVzUTBGQlRpeERRVVJ4UWp0QlFVVjRRa01zVDBGQlJ5eHhRa0ZCVFVFc1EwRkJUanRCUVVaeFFpeEhRVUZXTzBGQlNXUkxMRzlDUVVGblFqdEJRVXBHTEV0QlMxaEdMRXRCVEZjc1JVRkJhRUk3TzBGQlVVRXNUVUZCVFVjc1owSkJRV2RDTEZWQlFVTkRMRU5CUVVRc1JVRkJUenRCUVVNelFpeFJRVUZKU2l4TlFVRk5SU3hqUVVGV0xFVkJRVEJDTzBGQlEzaENSU3hSUVVGRlJpeGpRVUZHTzBGQlEwUTdPMEZCUlVRc1VVRkJUVWNzVTBGQlUxQXNZMEZCWTAwc1EwRkJaQ3hEUVVGbU8wRkJRMEZJTEZsQlFWRk1MRU5CUVZJc1EwRkJWVlVzUjBGQlZpeERRVUZqUkN4UFFVRlBWQ3hEUVVGeVFqdEJRVU5CU3l4WlFVRlJTaXhEUVVGU0xFTkJRVlZUTEVkQlFWWXNRMEZCWTBRc1QwRkJUMUlzUTBGQmNrSTdRVUZEUkN4SFFWSkVPenRCUVZWQlNTeFZRVUZSVFN4UlFVRlNMRU5CUVdsQ08wRkJRMlpETEdOQlFWVTdRVUZCUVN4aFFVRk5ReXhUUVVGVFF5eGxRVUZVTEVOQlFYbENReXhuUWtGQmVrSXNRMEZCTUVOYUxGTkJRVEZETEVWQlFYRkVTU3hoUVVGeVJDeERRVUZPTzBGQlFVRXNTMEZFU3p0QlFVVm1VeXhoUVVGVE8wRkJRVUVzWVVGQlRVZ3NVMEZCVTBNc1pVRkJWQ3hEUVVGNVFrY3NiVUpCUVhwQ0xFTkJRVFpEWkN4VFFVRTNReXhGUVVGM1JFa3NZVUZCZUVRc1EwRkJUanRCUVVGQk8wRkJSazBzUjBGQmFrSTdPMEZCUzBFc1UwRkJUMFlzVDBGQlVEdEJRVU5FT3p0QlFVVkVMRWxCUVUxaExHOUNRVUZ2UWl4VlFVRkRWaXhEUVVGRU8wRkJRVUVzVTBGQlVUdEJRVU5vUTFJc1QwRkJSMUVzUlVGQlJWY3NTMEZFTWtJN1FVRkZhRU5zUWl4UFFVRkhUeXhGUVVGRldUdEJRVVl5UWl4SFFVRlNPMEZCUVVFc1EwRkJNVUk3TzBGQlMwRXNTVUZCVFVNc2IwSkJRVzlDTzBGQlFVRXNUVUZCUjBNc1kwRkJTQ3hUUVVGSFFTeGpRVUZJTzBGQlFVRXNVMEZCZVVJN1FVRkRha1IwUWl4UFFVRkhjMElzWlVGQlpTeERRVUZtTEVWQlFXdENReXhQUVVRMFFqdEJRVVZxUkhSQ0xFOUJRVWR4UWl4bFFVRmxMRU5CUVdZc1JVRkJhMEpGTzBGQlJqUkNMRWRCUVhwQ08wRkJRVUVzUTBGQk1VSTdPMEZCUzBFc1NVRkJUVU1zYVVKQlFXbENMRlZCUVVOcVFpeERRVUZFTzBGQlFVRXNVMEZCVDBFc1JVRkJSV3RDTEdGQlFVWXNTVUZCYlVKc1FpeEZRVUZGYlVJc1YwRkJja0lzU1VGQmIwTnVRaXhEUVVFelF6dEJRVUZCTEVOQlFYWkNPenRyUWtGRlpTeFZRVUZEUVN4RFFVRkVMRVZCUVVsS0xFdEJRVW9zUlVGQll6dEJRVU16UWl4TlFVRk5kVUlzWTBGQlkwWXNaVUZCWldwQ0xFTkJRV1lzUTBGQmNFSTdRVUZEUVN4VFFVRlJiVUlzV1VGQldVTXNUMEZCWWl4SFFVTk1OMElzWTBGQlkzTkNMR3RDUVVGclFtSXNRMEZCYkVJc1EwRkJaRHRCUVVORlRDeGxRVUZYTEZkQlJHSTdRVUZGUlVRc2JVSkJRV1Z0UWp0QlFVWnFRaXhMUVVkTGFrSXNTMEZJVEN4RlFVUkxMRWRCVFV4TUxHTkJRV050UWl4clFrRkJhMEpXTEVOQlFXeENMRU5CUVdRN1FVRkRSVXdzWlVGQlZ5eFhRVVJpTzBGQlJVVkVMRzFDUVVGbFowSTdRVUZHYWtJc1MwRkhTMlFzUzBGSVRDeEZRVTVHTzBGQlYwUXNReUlzSW1acGJHVWlPaUp3YjJsdWRHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWEp6TG1oaGJHd3ZVSEp2YW1WamRITXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSFpoYkhWbElHWnliMjBnSnk0dmRtRnNkV1VuTzF4dWFXMXdiM0owSUdOdmJYQnZjMmwwWlNCbWNtOXRJQ2N1TDJOdmJYQnZjMmwwWlNjN1hHNWNibVoxYm1OMGFXOXVJR055WldGMFpWQnZhVzUwWlhJb2V5QjRMQ0I1SUgwc0lIc2daWFpsYm5SVWIxQnZhVzUwY3l3Z2JXOTJaVVYyWlc1MExDQXVMaTV3Y205d2N5QjlLU0I3WEc0Z0lHTnZibk4wSUhCdmFXNTBaWElnUFNCamIyMXdiM05wZEdVb2UxeHVJQ0FnSUhnNklIWmhiSFZsS0hncExGeHVJQ0FnSUhrNklIWmhiSFZsS0hrcFhHNGdJSDBzSUh0Y2JpQWdJQ0J3Y21WMlpXNTBSR1ZtWVhWc2REb2dkSEoxWlN4Y2JpQWdJQ0F1TGk1d2NtOXdjMXh1SUNCOUtUdGNibHh1SUNCamIyNXpkQ0IxY0dSaGRHVlFiMmx1ZEdWeUlEMGdLR1VwSUQwK0lIdGNiaUFnSUNCcFppQW9jSEp2Y0hNdWNISmxkbVZ1ZEVSbFptRjFiSFFwSUh0Y2JpQWdJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JqYjI1emRDQndiMmx1ZEhNZ1BTQmxkbVZ1ZEZSdlVHOXBiblJ6S0dVcE8xeHVJQ0FnSUhCdmFXNTBaWEl1ZUM1elpYUW9jRzlwYm5SekxuZ3BPMXh1SUNBZ0lIQnZhVzUwWlhJdWVTNXpaWFFvY0c5cGJuUnpMbmtwTzF4dUlDQjlPMXh1WEc0Z0lIQnZhVzUwWlhJdWMyVjBVSEp2Y0hNb2UxeHVJQ0FnSUY5dmJsTjBZWEowT2lBb0tTQTlQaUJrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpaHRiM1psUlhabGJuUXNJSFZ3WkdGMFpWQnZhVzUwWlhJcExGeHVJQ0FnSUY5dmJsTjBiM0E2SUNncElEMCtJR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLRzF2ZG1WRmRtVnVkQ3dnZFhCa1lYUmxVRzlwYm5SbGNpbGNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJSEJ2YVc1MFpYSTdYRzU5WEc1Y2JtTnZibk4wSUcxdmRYTmxSWFpsYm5SVWIxQnZhVzUwSUQwZ0tHVXBJRDArSUNoN1hHNGdJSGc2SUdVdWNHRm5aVmdzWEc0Z0lIazZJR1V1Y0dGblpWbGNibjBwTzF4dVhHNWpiMjV6ZENCMGIzVmphRVYyWlc1MFZHOVFiMmx1ZENBOUlDaDdJR05vWVc1blpXUlViM1ZqYUdWeklIMHBJRDArSUNoN1hHNGdJSGc2SUdOb1lXNW5aV1JVYjNWamFHVnpXekJkTG1Oc2FXVnVkRmdzWEc0Z0lIazZJR05vWVc1blpXUlViM1ZqYUdWeld6QmRMbU5zYVdWdWRGbGNibjBwTzF4dVhHNWpiMjV6ZENCblpYUk9ZWFJwZG1WRmRtVnVkQ0E5SUNobEtTQTlQaUJsTG05eWFXZHBibUZzUlhabGJuUWdmSHdnWlM1dVlYUnBkbVZGZG1WdWRDQjhmQ0JsTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1pTd2djSEp2Y0hNcElEMCtJSHRjYmlBZ1kyOXVjM1FnYm1GMGFYWmxSWFpsYm5RZ1BTQm5aWFJPWVhScGRtVkZkbVZ1ZENobEtUdGNiaUFnY21WMGRYSnVJQ2h1WVhScGRtVkZkbVZ1ZEM1MGIzVmphR1Z6S1NBL1hHNGdJQ0FnWTNKbFlYUmxVRzlwYm5SbGNpaDBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDaGxLU3dnZTF4dUlDQWdJQ0FnYlc5MlpVVjJaVzUwT2lBbmRHOTFZMmh0YjNabEp5eGNiaUFnSUNBZ0lHVjJaVzUwVkc5UWIybHVkSE02SUhSdmRXTm9SWFpsYm5SVWIxQnZhVzUwTEZ4dUlDQWdJQ0FnTGk0dWNISnZjSE5jYmlBZ0lDQjlLU0E2WEc0Z0lDQWdZM0psWVhSbFVHOXBiblJsY2lodGIzVnpaVVYyWlc1MFZHOVFiMmx1ZENobEtTd2dlMXh1SUNBZ0lDQWdiVzkyWlVWMlpXNTBPaUFuYlc5MWMyVnRiM1psSnl4Y2JpQWdJQ0FnSUdWMlpXNTBWRzlRYjJsdWRITTZJRzF2ZFhObFJYWmxiblJVYjFCdmFXNTBMRnh1SUNBZ0lDQWdMaTR1Y0hKdmNITmNiaUFnSUNCOUtUdGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcG9pbnRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdmFsdWUgPSByZXF1aXJlKCcuL3ZhbHVlJyk7XG5cbnZhciBfdmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWUpO1xuXG52YXIgX2NvbXBvc2l0ZSA9IHJlcXVpcmUoJy4vY29tcG9zaXRlJyk7XG5cbnZhciBfY29tcG9zaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2l0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gY3JlYXRlVG91Y2hlcyhfcmVmMiwgX3JlZikge1xuICB2YXIgY2hhbmdlZCA9IF9yZWYyLmNoYW5nZWQsXG4gICAgICB0YXJnZXQgPSBfcmVmMi50YXJnZXQsXG4gICAgICBhbGwgPSBfcmVmMi5hbGw7XG5cbiAgdmFyIGV2ZW50VG9Ub3VjaGVzID0gX3JlZi5ldmVudFRvVG91Y2hlcyxcbiAgICAgIG1vdmVFdmVudCA9IF9yZWYubW92ZUV2ZW50LFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydldmVudFRvVG91Y2hlcycsICdtb3ZlRXZlbnQnXSk7XG5cbiAgdmFyIHRvdWNoZXMgPSAoMCwgX2NvbXBvc2l0ZTIuZGVmYXVsdCkoe1xuICAgIGNoYW5nZWRUb3VjaGVzOiBtYXBDb29yZHNUb0FjdGlvbnMoY2hhbmdlZCksXG4gICAgdGFyZ2V0VG91Y2hlczogbWFwQ29vcmRzVG9BY3Rpb25zKHRhcmdldCksXG4gICAgdG91Y2hlczogbWFwQ29vcmRzVG9BY3Rpb25zKGFsbCksXG4gICAgdG91Y2hDb3VudDogKDAsIF92YWx1ZTIuZGVmYXVsdCkoYWxsLmxlbmd0aClcbiAgfSwgX2V4dGVuZHMoe1xuICAgIHByZXZlbnREZWZhdWx0OiB0cnVlXG4gIH0sIHByb3BzKSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlVG91Y2hlcyhlKSB7XG4gICAgaWYgKHByb3BzLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyIF9ldmVudFRvVG91Y2hlcyA9IGV2ZW50VG9Ub3VjaGVzKGUpLFxuICAgICAgICBjaGFuZ2VkID0gX2V2ZW50VG9Ub3VjaGVzLmNoYW5nZWQsXG4gICAgICAgIHRhcmdldCA9IF9ldmVudFRvVG91Y2hlcy50YXJnZXQsXG4gICAgICAgIGFsbCA9IF9ldmVudFRvVG91Y2hlcy5hbGw7XG5cbiAgICB1cGRhdGVBY3Rpb25XaXRoVG91Y2hlcyh0b3VjaGVzLCAnY2hhbmdlZFRvdWNoZXMnLCBjaGFuZ2VkKTtcbiAgICB1cGRhdGVBY3Rpb25XaXRoVG91Y2hlcyh0b3VjaGVzLCAndGFyZ2V0VG91Y2hlcycsIHRhcmdldCk7XG4gICAgdXBkYXRlQWN0aW9uV2l0aFRvdWNoZXModG91Y2hlcywgJ3RvdWNoZXMnLCBhbGwpO1xuICAgIHRvdWNoZXMudG91Y2hDb3VudC5zZXQoYWxsLmxlbmd0aCk7XG4gIH1cblxuICB0b3VjaGVzLnNldFByb3BzKHtcbiAgICBfb25TdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlVG91Y2hlcyk7XG4gICAgfSxcbiAgICBfb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVUb3VjaGVzKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0b3VjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXBDb29yZHNUb0FjdGlvbnMoY29vcmRzKSB7XG4gIHZhciBhY3Rpb25zID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF9jb29yZHMkaSA9IGNvb3Jkc1tpXSxcbiAgICAgICAgeCA9IF9jb29yZHMkaS54LFxuICAgICAgICB5ID0gX2Nvb3JkcyRpLnk7XG5cbiAgICBhY3Rpb25zW2ldID0gKDAsIF9jb21wb3NpdGUyLmRlZmF1bHQpKHtcbiAgICAgIHg6ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHgpLFxuICAgICAgeTogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeSlcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gKDAsIF9jb21wb3NpdGUyLmRlZmF1bHQpKGFjdGlvbnMpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBY3Rpb25XaXRoVG91Y2hlcyhhY3Rpb24sIG5hbWUsIG5ld1RvdWNoZXMpIHtcbiAgZm9yICh2YXIgaSBpbiBuZXdUb3VjaGVzKSB7XG4gICAgdmFyIF9uZXdUb3VjaGVzJGkgPSBuZXdUb3VjaGVzW2ldLFxuICAgICAgICB4ID0gX25ld1RvdWNoZXMkaS54LFxuICAgICAgICB5ID0gX25ld1RvdWNoZXMkaS55O1xuXG4gICAgaWYgKGFjdGlvbltuYW1lXVtpXSAhPSBudWxsKSB7XG4gICAgICBhY3Rpb25bbmFtZV1baV0ueC5zZXQoeCk7XG4gICAgICBhY3Rpb25bbmFtZV1baV0ueS5zZXQoeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGlvbltuYW1lXVtpXSA9ICgwLCBfY29tcG9zaXRlMi5kZWZhdWx0KSh7XG4gICAgICAgIHg6ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHgpLFxuICAgICAgICB5OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh5KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbnZhciBtb3VzZUV2ZW50VG9Ub3VjaGVzID0gZnVuY3Rpb24gKF9yZWYzKSB7XG4gIHZhciBwYWdlWCA9IF9yZWYzLnBhZ2VYLFxuICAgICAgcGFnZVkgPSBfcmVmMy5wYWdlWTtcblxuICB2YXIgdG91Y2hlcyA9IFt7XG4gICAgeDogcGFnZVgsXG4gICAgeTogcGFnZVlcbiAgfV07XG4gIHJldHVybiB7XG4gICAgY2hhbmdlZDogdG91Y2hlcyxcbiAgICB0YXJnZXQ6IHRvdWNoZXMsXG4gICAgYWxsOiB0b3VjaGVzXG4gIH07XG59O1xuXG52YXIgdG91Y2hFdmVudFRvVG91Y2hlcyA9IGZ1bmN0aW9uIChfcmVmNCkge1xuICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBfcmVmNC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgIHRhcmdldFRvdWNoZXMgPSBfcmVmNC50YXJnZXRUb3VjaGVzLFxuICAgICAgdG91Y2hlcyA9IF9yZWY0LnRvdWNoZXM7XG5cbiAgcmV0dXJuIHtcbiAgICBjaGFuZ2VkOiBleHRyYWN0Q29vcmRzKGNoYW5nZWRUb3VjaGVzKSxcbiAgICB0YXJnZXQ6IGV4dHJhY3RDb29yZHModGFyZ2V0VG91Y2hlcyksXG4gICAgYWxsOiBleHRyYWN0Q29vcmRzKHRvdWNoZXMpXG4gIH07XG59O1xuXG5mdW5jdGlvbiBleHRyYWN0Q29vcmRzKHRvdWNoZXMpIHtcbiAgdmFyIGFjdGlvbnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF90b3VjaGVzJGkgPSB0b3VjaGVzW2ldLFxuICAgICAgICBjbGllbnRYID0gX3RvdWNoZXMkaS5jbGllbnRYLFxuICAgICAgICBjbGllbnRZID0gX3RvdWNoZXMkaS5jbGllbnRZO1xuXG4gICAgYWN0aW9uc1tpXSA9IHtcbiAgICAgIHg6IGNsaWVudFgsXG4gICAgICB5OiBjbGllbnRZXG4gICAgfTtcbiAgfVxuICByZXR1cm4gYWN0aW9ucztcbn1cblxudmFyIGdldE5hdGl2ZUV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlLm5hdGl2ZUV2ZW50IHx8IGU7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZSwgcHJvcHMpIHtcbiAgdmFyIG5hdGl2ZUV2ZW50ID0gZ2V0TmF0aXZlRXZlbnQoZSk7XG4gIHJldHVybiBuYXRpdmVFdmVudC50b3VjaGVzID8gY3JlYXRlVG91Y2hlcyh0b3VjaEV2ZW50VG9Ub3VjaGVzKGUpLCBfZXh0ZW5kcyh7XG4gICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICBldmVudFRvVG91Y2hlczogdG91Y2hFdmVudFRvVG91Y2hlc1xuICB9LCBwcm9wcykpIDogY3JlYXRlVG91Y2hlcyhtb3VzZUV2ZW50VG9Ub3VjaGVzKGUpLCBfZXh0ZW5kcyh7XG4gICAgbW92ZUV2ZW50OiAnbW91c2Vtb3ZlJyxcbiAgICBldmVudFRvVG91Y2hlczogbW91c2VFdmVudFRvVG91Y2hlc1xuICB9LCBwcm9wcykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1J2ZFdOb1pYTXVhbk1pWFN3aWJtRnRaWE1pT2xzaVkzSmxZWFJsVkc5MVkyaGxjeUlzSW1Ob1lXNW5aV1FpTENKMFlYSm5aWFFpTENKaGJHd2lMQ0psZG1WdWRGUnZWRzkxWTJobGN5SXNJbTF2ZG1WRmRtVnVkQ0lzSW5CeWIzQnpJaXdpZEc5MVkyaGxjeUlzSW1Ob1lXNW5aV1JVYjNWamFHVnpJaXdpYldGd1EyOXZjbVJ6Vkc5QlkzUnBiMjV6SWl3aWRHRnlaMlYwVkc5MVkyaGxjeUlzSW5SdmRXTm9RMjkxYm5RaUxDSnNaVzVuZEdnaUxDSndjbVYyWlc1MFJHVm1ZWFZzZENJc0luVndaR0YwWlZSdmRXTm9aWE1pTENKbElpd2lkWEJrWVhSbFFXTjBhVzl1VjJsMGFGUnZkV05vWlhNaUxDSnpaWFFpTENKelpYUlFjbTl3Y3lJc0lsOXZibE4wWVhKMElpd2laRzlqZFcxbGJuUWlMQ0prYjJOMWJXVnVkRVZzWlcxbGJuUWlMQ0poWkdSRmRtVnVkRXhwYzNSbGJtVnlJaXdpWDI5dVUzUnZjQ0lzSW5KbGJXOTJaVVYyWlc1MFRHbHpkR1Z1WlhJaUxDSmpiMjl5WkhNaUxDSmhZM1JwYjI1eklpd2lhU0lzSW5naUxDSjVJaXdpWVdOMGFXOXVJaXdpYm1GdFpTSXNJbTVsZDFSdmRXTm9aWE1pTENKdGIzVnpaVVYyWlc1MFZHOVViM1ZqYUdWeklpd2ljR0ZuWlZnaUxDSndZV2RsV1NJc0luUnZkV05vUlhabGJuUlViMVJ2ZFdOb1pYTWlMQ0psZUhSeVlXTjBRMjl2Y21Seklpd2lZMnhwWlc1MFdDSXNJbU5zYVdWdWRGa2lMQ0puWlhST1lYUnBkbVZGZG1WdWRDSXNJbTl5YVdkcGJtRnNSWFpsYm5RaUxDSnVZWFJwZG1WRmRtVnVkQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenM3T3pzN1FVRkZRU3hUUVVGVFFTeGhRVUZVTEdOQlFUQkdPMEZCUVVFc1RVRkJha1ZETEU5QlFXbEZMRk5CUVdwRlFTeFBRVUZwUlR0QlFVRkJMRTFCUVhoRVF5eE5RVUYzUkN4VFFVRjRSRUVzVFVGQmQwUTdRVUZCUVN4TlFVRm9SRU1zUjBGQlowUXNVMEZCYUVSQkxFZEJRV2RFT3p0QlFVRkJMRTFCUVhaRFF5eGpRVUYxUXl4UlFVRjJRMEVzWTBGQmRVTTdRVUZCUVN4TlFVRjJRa01zVTBGQmRVSXNVVUZCZGtKQkxGTkJRWFZDTzBGQlFVRXNUVUZCVkVNc1MwRkJVenM3UVVGRGVFWXNUVUZCVFVNc1ZVRkJWU3g1UWtGQlZUdEJRVU40UWtNc2IwSkJRV2RDUXl4dFFrRkJiVUpTTEU5QlFXNUNMRU5CUkZFN1FVRkZlRUpUTEcxQ1FVRmxSQ3h0UWtGQmJVSlFMRTFCUVc1Q0xFTkJSbE03UVVGSGVFSkxMR0ZCUVZORkxHMUNRVUZ0UWs0c1IwRkJia0lzUTBGSVpUdEJRVWw0UWxFc1owSkJRVmtzY1VKQlFVMVNMRWxCUVVsVExFMUJRVlk3UVVGS1dTeEhRVUZXTzBGQlRXUkRMRzlDUVVGblFqdEJRVTVHTEV0QlQxaFFMRXRCVUZjc1JVRkJhRUk3TzBGQlZVRXNWMEZCVTFFc1lVRkJWQ3hEUVVGMVFrTXNRMEZCZGtJc1JVRkJNRUk3UVVGRGVFSXNVVUZCU1ZRc1RVRkJUVThzWTBGQlZpeEZRVUV3UWp0QlFVTjRRa1VzVVVGQlJVWXNZMEZCUmp0QlFVTkVPenRCUVVoMVFpd3dRa0ZKVTFRc1pVRkJaVmNzUTBGQlppeERRVXBVTzBGQlFVRXNVVUZKYUVKa0xFOUJTbWRDTEcxQ1FVbG9Ra0VzVDBGS1owSTdRVUZCUVN4UlFVbFFReXhOUVVwUExHMUNRVWxRUVN4TlFVcFBPMEZCUVVFc1VVRkpRME1zUjBGS1JDeHRRa0ZKUTBFc1IwRktSRHM3UVVGTGVFSmhMRFJDUVVGM1FsUXNUMEZCZUVJc1JVRkJhVU1zWjBKQlFXcERMRVZCUVcxRVRpeFBRVUZ1UkR0QlFVTkJaU3cwUWtGQmQwSlVMRTlCUVhoQ0xFVkJRV2xETEdWQlFXcERMRVZCUVd0RVRDeE5RVUZzUkR0QlFVTkJZeXcwUWtGQmQwSlVMRTlCUVhoQ0xFVkJRV2xETEZOQlFXcERMRVZCUVRSRFNpeEhRVUUxUXp0QlFVTkJTU3haUVVGUlNTeFZRVUZTTEVOQlFXMUNUU3hIUVVGdVFpeERRVUYxUW1Rc1NVRkJTVk1zVFVGQk0wSTdRVUZEUkRzN1FVRkZSRXdzVlVGQlVWY3NVVUZCVWl4RFFVRnBRanRCUVVObVF5eGpRVUZWTzBGQlFVRXNZVUZCVFVNc1UwRkJVME1zWlVGQlZDeERRVUY1UWtNc1owSkJRWHBDTEVOQlFUQkRha0lzVTBGQk1VTXNSVUZCY1VSVExHRkJRWEpFTEVOQlFVNDdRVUZCUVN4TFFVUkxPMEZCUldaVExHRkJRVk03UVVGQlFTeGhRVUZOU0N4VFFVRlRReXhsUVVGVUxFTkJRWGxDUnl4dFFrRkJla0lzUTBGQk5rTnVRaXhUUVVFM1F5eEZRVUYzUkZNc1lVRkJlRVFzUTBGQlRqdEJRVUZCTzBGQlJrMHNSMEZCYWtJN08wRkJTMEVzVTBGQlQxQXNUMEZCVUR0QlFVTkVPenRCUVVWRUxGTkJRVk5GTEd0Q1FVRlVMRU5CUVRSQ1owSXNUVUZCTlVJc1JVRkJiME03UVVGRGJFTXNUVUZCU1VNc1ZVRkJWU3hGUVVGa08wRkJRMEVzVDBGQlN5eEpRVUZKUXl4SlFVRkpMRU5CUVdJc1JVRkJaMEpCTEVsQlFVbEdMRTlCUVU5aUxFMUJRVE5DTEVWQlFXMURaU3hIUVVGdVF5eEZRVUYzUXp0QlFVRkJMRzlDUVVOeVFrWXNUMEZCVDBVc1EwRkJVQ3hEUVVSeFFqdEJRVUZCTEZGQlF6bENReXhEUVVRNFFpeGhRVU01UWtFc1EwRkVPRUk3UVVGQlFTeFJRVU16UWtNc1EwRkVNa0lzWVVGRE0wSkJMRU5CUkRKQ096dEJRVVYwUTBnc1dVRkJVVU1zUTBGQlVpeEpRVUZoTEhsQ1FVRlZPMEZCUTNKQ1F5eFRRVUZITEhGQ1FVRk5RU3hEUVVGT0xFTkJSR3RDTzBGQlJYSkNReXhUUVVGSExIRkNRVUZOUVN4RFFVRk9PMEZCUm10Q0xFdEJRVllzUTBGQllqdEJRVWxFTzBGQlEwUXNVMEZCVHl4NVFrRkJWVWdzVDBGQlZpeERRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJVMVlzZFVKQlFWUXNRMEZCYVVOakxFMUJRV3BETEVWQlFYbERReXhKUVVGNlF5eEZRVUVyUTBNc1ZVRkJMME1zUlVGQk1rUTdRVUZEZWtRc1QwRkJTeXhKUVVGTlRDeERRVUZZTEVsQlFXZENTeXhWUVVGb1FpeEZRVUUwUWp0QlFVRkJMSGRDUVVOVVFTeFhRVUZYVEN4RFFVRllMRU5CUkZNN1FVRkJRU3hSUVVOc1FrTXNRMEZFYTBJc2FVSkJRMnhDUVN4RFFVUnJRanRCUVVGQkxGRkJRMlpETEVOQlJHVXNhVUpCUTJaQkxFTkJSR1U3TzBGQlJURkNMRkZCUVVsRExFOUJRVTlETEVsQlFWQXNSVUZCWVVvc1EwRkJZaXhMUVVGdFFpeEpRVUYyUWl4RlFVRTJRanRCUVVNelFrY3NZVUZCVDBNc1NVRkJVQ3hGUVVGaFNpeERRVUZpTEVWQlFXZENReXhEUVVGb1FpeERRVUZyUWxnc1IwRkJiRUlzUTBGQmMwSlhMRU5CUVhSQ08wRkJRMEZGTEdGQlFVOURMRWxCUVZBc1JVRkJZVW9zUTBGQllpeEZRVUZuUWtVc1EwRkJhRUlzUTBGQmEwSmFMRWRCUVd4Q0xFTkJRWE5DV1N4RFFVRjBRanRCUVVORUxFdEJTRVFzVFVGSFR6dEJRVU5NUXl4aFFVRlBReXhKUVVGUUxFVkJRV0ZLTEVOQlFXSXNTVUZCYTBJc2VVSkJRVlU3UVVGRE1VSkRMRmRCUVVjc2NVSkJRVTFCTEVOQlFVNHNRMEZFZFVJN1FVRkZNVUpETEZkQlFVY3NjVUpCUVUxQkxFTkJRVTQ3UVVGR2RVSXNUMEZCVml4RFFVRnNRanRCUVVsRU8wRkJRMFk3UVVGRFJqczdRVUZGUkN4SlFVRk5TU3h6UWtGQmMwSXNhVUpCUVhOQ08wRkJRVUVzVFVGQmJrSkRMRXRCUVcxQ0xGTkJRVzVDUVN4TFFVRnRRanRCUVVGQkxFMUJRVnBETEV0QlFWa3NVMEZCV2tFc1MwRkJXVHM3UVVGRGFFUXNUVUZCVFRWQ0xGVkJRVlVzUTBGQlF6dEJRVU5tY1VJc1QwRkJSMDBzUzBGRVdUdEJRVVZtVEN4UFFVRkhUVHRCUVVaWkxFZEJRVVFzUTBGQmFFSTdRVUZKUVN4VFFVRlBPMEZCUTB4c1F5eGhRVUZUVFN4UFFVUktPMEZCUlV4TUxGbEJRVkZMTEU5QlJrZzdRVUZIVEVvc1UwRkJTMGs3UVVGSVFTeEhRVUZRTzBGQlMwUXNRMEZXUkRzN1FVRlpRU3hKUVVGTk5rSXNjMEpCUVhOQ0xHbENRVUZuUkR0QlFVRkJMRTFCUVRkRE5VSXNZMEZCTmtNc1UwRkJOME5CTEdOQlFUWkRPMEZCUVVFc1RVRkJOMEpGTEdGQlFUWkNMRk5CUVRkQ1FTeGhRVUUyUWp0QlFVRkJMRTFCUVdSSUxFOUJRV01zVTBGQlpFRXNUMEZCWXpzN1FVRkRNVVVzVTBGQlR6dEJRVU5NVGl4aFFVRlRiME1zWTBGQll6ZENMR05CUVdRc1EwRkVTanRCUVVWTVRpeFpRVUZSYlVNc1kwRkJZek5DTEdGQlFXUXNRMEZHU0R0QlFVZE1VQ3hUUVVGTGEwTXNZMEZCWXpsQ0xFOUJRV1E3UVVGSVFTeEhRVUZRTzBGQlMwUXNRMEZPUkRzN1FVRlJRU3hUUVVGVE9FSXNZVUZCVkN4RFFVRjFRamxDTEU5QlFYWkNMRVZCUVdkRE8wRkJRemxDTEUxQlFVbHRRaXhWUVVGVkxFVkJRV1E3UVVGRFFTeFBRVUZMTEVsQlFVbERMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1hCQ0xGRkJRVkZMTEUxQlFUVkNMRVZCUVc5RFpTeEhRVUZ3UXl4RlFVRjVRenRCUVVGQkxIRkNRVU5XY0VJc1VVRkJVVzlDTEVOQlFWSXNRMEZFVlR0QlFVRkJMRkZCUXk5Q1Z5eFBRVVFyUWl4alFVTXZRa0VzVDBGRUswSTdRVUZCUVN4UlFVTjBRa01zVDBGRWMwSXNZMEZEZEVKQkxFOUJSSE5DT3p0QlFVVjJRMklzV1VGQlVVTXNRMEZCVWl4SlFVRmhPMEZCUTFoRExGTkJRVWRWTEU5QlJGRTdRVUZGV0ZRc1UwRkJSMVU3UVVGR1VTeExRVUZpTzBGQlNVUTdRVUZEUkN4VFFVRlBZaXhQUVVGUU8wRkJRMFE3TzBGQlJVUXNTVUZCVFdNc2FVSkJRV2xDTEZWQlFVTjZRaXhEUVVGRU8wRkJRVUVzVTBGQlQwRXNSVUZCUlRCQ0xHRkJRVVlzU1VGQmJVSXhRaXhGUVVGRk1rSXNWMEZCY2tJc1NVRkJiME16UWl4RFFVRXpRenRCUVVGQkxFTkJRWFpDT3p0clFrRkZaU3hWUVVGRFFTeERRVUZFTEVWQlFVbFVMRXRCUVVvc1JVRkJZenRCUVVNelFpeE5RVUZOYjBNc1kwRkJZMFlzWlVGQlpYcENMRU5CUVdZc1EwRkJjRUk3UVVGRFFTeFRRVUZSTWtJc1dVRkJXVzVETEU5QlFXSXNSMEZEVEZBc1kwRkJZMjlETEc5Q1FVRnZRbkpDTEVOQlFYQkNMRU5CUVdRN1FVRkRSVllzWlVGQlZ5eFhRVVJpTzBGQlJVVkVMRzlDUVVGblFtZERPMEZCUm14Q0xFdEJSMHM1UWl4TFFVaE1MRVZCUkVzc1IwRk5URTRzWTBGQlkybERMRzlDUVVGdlFteENMRU5CUVhCQ0xFTkJRV1E3UVVGRFJWWXNaVUZCVnl4WFFVUmlPMEZCUlVWRUxHOUNRVUZuUWpaQ08wRkJSbXhDTEV0QlIwc3pRaXhMUVVoTUxFVkJUa1k3UVVGWFJDeERJaXdpWm1sc1pTSTZJblJ2ZFdOb1pYTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk11YUdGc2JDOVFjbTlxWldOMGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkbUZzZFdVZ1puSnZiU0FuTGk5MllXeDFaU2M3WEc1cGJYQnZjblFnWTI5dGNHOXphWFJsSUdaeWIyMGdKeTR2WTI5dGNHOXphWFJsSnp0Y2JseHVablZ1WTNScGIyNGdZM0psWVhSbFZHOTFZMmhsY3loN0lHTm9ZVzVuWldRc0lIUmhjbWRsZEN3Z1lXeHNJSDBzSUhzZ1pYWmxiblJVYjFSdmRXTm9aWE1zSUcxdmRtVkZkbVZ1ZEN3Z0xpNHVjSEp2Y0hNZ2ZTa2dlMXh1SUNCamIyNXpkQ0IwYjNWamFHVnpJRDBnWTI5dGNHOXphWFJsS0h0Y2JpQWdJQ0JqYUdGdVoyVmtWRzkxWTJobGN6b2diV0Z3UTI5dmNtUnpWRzlCWTNScGIyNXpLR05vWVc1blpXUXBMRnh1SUNBZ0lIUmhjbWRsZEZSdmRXTm9aWE02SUcxaGNFTnZiM0prYzFSdlFXTjBhVzl1Y3loMFlYSm5aWFFwTEZ4dUlDQWdJSFJ2ZFdOb1pYTTZJRzFoY0VOdmIzSmtjMVJ2UVdOMGFXOXVjeWhoYkd3cExGeHVJQ0FnSUhSdmRXTm9RMjkxYm5RNklIWmhiSFZsS0dGc2JDNXNaVzVuZEdncFhHNGdJSDBzSUh0Y2JpQWdJQ0J3Y21WMlpXNTBSR1ZtWVhWc2REb2dkSEoxWlN4Y2JpQWdJQ0F1TGk1d2NtOXdjMXh1SUNCOUtUdGNibHh1SUNCbWRXNWpkR2x2YmlCMWNHUmhkR1ZVYjNWamFHVnpLR1VwSUh0Y2JpQWdJQ0JwWmlBb2NISnZjSE11Y0hKbGRtVnVkRVJsWm1GMWJIUXBJSHRjYmlBZ0lDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjYmlBZ0lDQjlYRzRnSUNBZ1kyOXVjM1FnZXlCamFHRnVaMlZrTENCMFlYSm5aWFFzSUdGc2JDQjlJRDBnWlhabGJuUlViMVJ2ZFdOb1pYTW9aU2s3WEc0Z0lDQWdkWEJrWVhSbFFXTjBhVzl1VjJsMGFGUnZkV05vWlhNb2RHOTFZMmhsY3l3Z0oyTm9ZVzVuWldSVWIzVmphR1Z6Snl3Z1kyaGhibWRsWkNrN1hHNGdJQ0FnZFhCa1lYUmxRV04wYVc5dVYybDBhRlJ2ZFdOb1pYTW9kRzkxWTJobGN5d2dKM1JoY21kbGRGUnZkV05vWlhNbkxDQjBZWEpuWlhRcE8xeHVJQ0FnSUhWd1pHRjBaVUZqZEdsdmJsZHBkR2hVYjNWamFHVnpLSFJ2ZFdOb1pYTXNJQ2QwYjNWamFHVnpKeXdnWVd4c0tUdGNiaUFnSUNCMGIzVmphR1Z6TG5SdmRXTm9RMjkxYm5RdWMyVjBLR0ZzYkM1c1pXNW5kR2dwTzF4dUlDQjlYRzVjYmlBZ2RHOTFZMmhsY3k1elpYUlFjbTl3Y3loN1hHNGdJQ0FnWDI5dVUzUmhjblE2SUNncElEMCtJR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtHMXZkbVZGZG1WdWRDd2dkWEJrWVhSbFZHOTFZMmhsY3lrc1hHNGdJQ0FnWDI5dVUzUnZjRG9nS0NrZ1BUNGdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExuSmxiVzkyWlVWMlpXNTBUR2x6ZEdWdVpYSW9iVzkyWlVWMlpXNTBMQ0IxY0dSaGRHVlViM1ZqYUdWektWeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdkRzkxWTJobGN6dGNibjFjYmx4dVpuVnVZM1JwYjI0Z2JXRndRMjl2Y21SelZHOUJZM1JwYjI1ektHTnZiM0prY3lrZ2V5QmNiaUFnYkdWMElHRmpkR2x2Ym5NZ1BTQmJYVHRjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQmpiMjl5WkhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lIZ3NJSGtnZlNBOUlHTnZiM0prYzF0cFhUdGNiaUFnSUNCaFkzUnBiMjV6VzJsZElEMGdZMjl0Y0c5emFYUmxLSHRjYmlBZ0lDQWdJSGc2SUhaaGJIVmxLSGdwTEZ4dUlDQWdJQ0FnZVRvZ2RtRnNkV1VvZVNsY2JpQWdJQ0I5S1R0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnWTI5dGNHOXphWFJsS0dGamRHbHZibk1wTzF4dWZWeHVYRzVtZFc1amRHbHZiaUIxY0dSaGRHVkJZM1JwYjI1WGFYUm9WRzkxWTJobGN5aGhZM1JwYjI0c0lHNWhiV1VzSUc1bGQxUnZkV05vWlhNcElIdGNiaUFnWm05eUlDaGpiMjV6ZENCcElHbHVJRzVsZDFSdmRXTm9aWE1wSUh0Y2JpQWdJQ0JqYjI1emRDQjdJSGdzSUhrZ2ZTQTlJRzVsZDFSdmRXTm9aWE5iYVYwN1hHNGdJQ0FnYVdZZ0tHRmpkR2x2Ymx0dVlXMWxYVnRwWFNBaFBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNCaFkzUnBiMjViYm1GdFpWMWJhVjB1ZUM1elpYUW9lQ2s3WEc0Z0lDQWdJQ0JoWTNScGIyNWJibUZ0WlYxYmFWMHVlUzV6WlhRb2VTazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdGamRHbHZibHR1WVcxbFhWdHBYU0E5SUdOdmJYQnZjMmwwWlNoN1hHNGdJQ0FnSUNBZ0lIZzZJSFpoYkhWbEtIZ3BMRnh1SUNBZ0lDQWdJQ0I1T2lCMllXeDFaU2g1S1Z4dUlDQWdJQ0FnZlNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc1Y2JtTnZibk4wSUcxdmRYTmxSWFpsYm5SVWIxUnZkV05vWlhNZ1BTQW9leUJ3WVdkbFdDd2djR0ZuWlZrZ2ZTa2dQVDRnZTF4dUlDQmpiMjV6ZENCMGIzVmphR1Z6SUQwZ1czdGNiaUFnSUNCNE9pQndZV2RsV0N4Y2JpQWdJQ0I1T2lCd1lXZGxXVnh1SUNCOVhUdGNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQmphR0Z1WjJWa09pQjBiM1ZqYUdWekxGeHVJQ0FnSUhSaGNtZGxkRG9nZEc5MVkyaGxjeXhjYmlBZ0lDQmhiR3c2SUhSdmRXTm9aWE5jYmlBZ2ZUdGNibjA3WEc1Y2JtTnZibk4wSUhSdmRXTm9SWFpsYm5SVWIxUnZkV05vWlhNZ1BTQW9leUJqYUdGdVoyVmtWRzkxWTJobGN5d2dkR0Z5WjJWMFZHOTFZMmhsY3l3Z2RHOTFZMmhsY3lCOUtTQTlQaUI3WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnWTJoaGJtZGxaRG9nWlhoMGNtRmpkRU52YjNKa2N5aGphR0Z1WjJWa1ZHOTFZMmhsY3lrc1hHNGdJQ0FnZEdGeVoyVjBPaUJsZUhSeVlXTjBRMjl2Y21SektIUmhjbWRsZEZSdmRXTm9aWE1wTEZ4dUlDQWdJR0ZzYkRvZ1pYaDBjbUZqZEVOdmIzSmtjeWgwYjNWamFHVnpLVnh1SUNCOU8xeHVmVHRjYmx4dVpuVnVZM1JwYjI0Z1pYaDBjbUZqZEVOdmIzSmtjeWgwYjNWamFHVnpLU0I3SUZ4dUlDQnNaWFFnWVdOMGFXOXVjeUE5SUZ0ZE8xeHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUhSdmRXTm9aWE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNCamIyNXpkQ0I3SUdOc2FXVnVkRmdzSUdOc2FXVnVkRmtnZlNBOUlIUnZkV05vWlhOYmFWMDdYRzRnSUNBZ1lXTjBhVzl1YzF0cFhTQTlJSHRjYmlBZ0lDQWdJSGc2SUdOc2FXVnVkRmdzWEc0Z0lDQWdJQ0I1T2lCamJHbGxiblJaWEc0Z0lDQWdmVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdZV04wYVc5dWN6dGNibjFjYmx4dVkyOXVjM1FnWjJWMFRtRjBhWFpsUlhabGJuUWdQU0FvWlNrZ1BUNGdaUzV2Y21sbmFXNWhiRVYyWlc1MElIeDhJR1V1Ym1GMGFYWmxSWFpsYm5RZ2ZId2daVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dVc0lIQnliM0J6S1NBOVBpQjdYRzRnSUdOdmJuTjBJRzVoZEdsMlpVVjJaVzUwSUQwZ1oyVjBUbUYwYVhabFJYWmxiblFvWlNrN1hHNGdJSEpsZEhWeWJpQW9ibUYwYVhabFJYWmxiblF1ZEc5MVkyaGxjeWtnUDF4dUlDQWdJR055WldGMFpWUnZkV05vWlhNb2RHOTFZMmhGZG1WdWRGUnZWRzkxWTJobGN5aGxLU3dnZTF4dUlDQWdJQ0FnYlc5MlpVVjJaVzUwT2lBbmRHOTFZMmh0YjNabEp5eGNiaUFnSUNBZ0lHVjJaVzUwVkc5VWIzVmphR1Z6T2lCMGIzVmphRVYyWlc1MFZHOVViM1ZqYUdWekxGeHVJQ0FnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdJQ0I5S1NBNlhHNGdJQ0FnWTNKbFlYUmxWRzkxWTJobGN5aHRiM1Z6WlVWMlpXNTBWRzlVYjNWamFHVnpLR1VwTENCN1hHNGdJQ0FnSUNCdGIzWmxSWFpsYm5RNklDZHRiM1Z6WlcxdmRtVW5MRnh1SUNBZ0lDQWdaWFpsYm5SVWIxUnZkV05vWlhNNklHMXZkWE5sUlhabGJuUlViMVJ2ZFdOb1pYTXNYRzRnSUNBZ0lDQXVMaTV3Y205d2MxeHVJQ0FnSUgwcE8xeHVmVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdG91Y2hlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfZWFzaW5nID0gcmVxdWlyZSgnLi4vaW5jL2Vhc2luZycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBjbGFtcFByb2dyZXNzID0gKDAsIF90cmFuc2Zvcm1lcnMuY2xhbXApKDAsIDEpO1xuXG52YXIgTkVYVF9TVEVQUyA9IHtcbiAgbG9vcDogZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgcmV0dXJuIHR3ZWVuLnN0YXJ0KCk7XG4gIH0sXG4gIHlveW86IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgIHJldHVybiB0d2Vlbi5yZXZlcnNlKCkuc3RhcnQoKTtcbiAgfSxcbiAgZmxpcDogZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgcmV0dXJuIHR3ZWVuLmZsaXAoKS5zdGFydCgpO1xuICB9XG59O1xuXG52YXIgVHdlZW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFR3ZWVuKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFR3ZWVuLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb24sXG4gICAgICAgIHBsYXlEaXJlY3Rpb24gPSBfcHJvcHMucGxheURpcmVjdGlvbjtcblxuXG4gICAgdGhpcy5lbGFwc2VkID0gcGxheURpcmVjdGlvbiA9PT0gMSA/IDAgOiBkdXJhdGlvbjtcbiAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMyLmR1cmF0aW9uLFxuICAgICAgICBlYXNlID0gX3Byb3BzMi5lYXNlLFxuICAgICAgICBmcm9tID0gX3Byb3BzMi5mcm9tLFxuICAgICAgICB0byA9IF9wcm9wczIudG8sXG4gICAgICAgIHBsYXlEaXJlY3Rpb24gPSBfcHJvcHMyLnBsYXlEaXJlY3Rpb247XG5cblxuICAgIHRoaXMuZWxhcHNlZCArPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCkgKiBwbGF5RGlyZWN0aW9uO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBjbGFtcFByb2dyZXNzKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoMCwgZHVyYXRpb24sIHRoaXMuZWxhcHNlZCkpO1xuXG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZnJvbSwgdG8sIGVhc2UodGhpcy5wcm9ncmVzcykpO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uID0gX3Byb3BzMy5kdXJhdGlvbixcbiAgICAgICAgcGxheURpcmVjdGlvbiA9IF9wcm9wczMucGxheURpcmVjdGlvbixcbiAgICAgICAgeW95byA9IF9wcm9wczMueW95byxcbiAgICAgICAgbG9vcCA9IF9wcm9wczMubG9vcCxcbiAgICAgICAgZmxpcCA9IF9wcm9wczMuZmxpcDtcblxuICAgIHZhciBpc0NvbXBsZXRlID0gcGxheURpcmVjdGlvbiA9PT0gMSA/IHRoaXMuZWxhcHNlZCA+PSBkdXJhdGlvbiA6IHRoaXMuZWxhcHNlZCA8PSAwO1xuXG4gICAgaWYgKGlzQ29tcGxldGUgJiYgKHlveW8gfHwgbG9vcCB8fCBmbGlwKSkge1xuICAgICAgdmFyIGlzU3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgIHZhciBuZXh0U3RlcCA9IE5FWFRfU1RFUFNba2V5XTtcbiAgICAgICAgdmFyIGNvdW50UHJvcCA9IGtleSArICdDb3VudCc7XG4gICAgICAgIHZhciBzdGVwTWF4ID0gdGhpcy5nZXRQcm9wKGtleSk7XG4gICAgICAgIHZhciBzdGVwQ291bnQgPSB0aGlzLmdldFByb3AoY291bnRQcm9wKTtcblxuICAgICAgICBpZiAoc3RlcE1heCA+IHN0ZXBDb3VudCkge1xuICAgICAgICAgIHZhciBfc2V0UHJvcHM7XG5cbiAgICAgICAgICB0aGlzLnNldFByb3BzKChfc2V0UHJvcHMgPSB7fSwgX3NldFByb3BzW2NvdW50UHJvcF0gPSBzdGVwQ291bnQgKyAxLCBfc2V0UHJvcHMpKTtcbiAgICAgICAgICBuZXh0U3RlcCh0aGlzKTtcbiAgICAgICAgICBpc1N0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzU3RlcFRha2VuKSBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzQ29tcGxldGU7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLmdldEVsYXBzZWQgPSBmdW5jdGlvbiBnZXRFbGFwc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmVsYXBzZWQ7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLmZsaXAgPSBmdW5jdGlvbiBmbGlwKCkge1xuICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMucHJvcHMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG4gICAgdmFyIF9yZWYgPSBbdGhpcy5wcm9wcy50bywgdGhpcy5wcm9wcy5mcm9tXTtcbiAgICB0aGlzLnByb3BzLmZyb20gPSBfcmVmWzBdO1xuICAgIHRoaXMucHJvcHMudG8gPSBfcmVmWzFdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgIHRoaXMucHJvcHMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gVHdlZW47XG59KF8yLmRlZmF1bHQpO1xuXG5Ud2Vlbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGR1cmF0aW9uOiAzMDAsXG4gIGVhc2U6IF9lYXNpbmcuZWFzZU91dCxcbiAgZnJvbTogMCxcbiAgdG86IDEsXG4gIGZsaXA6IDAsXG4gIGZsaXBDb3VudDogMCxcbiAgeW95bzogMCxcbiAgeW95b0NvdW50OiAwLFxuICBsb29wOiAwLFxuICBsb29wQ291bnQ6IDAsXG4gIHBsYXlEaXJlY3Rpb246IDFcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIHByb3BzID0gYXJnc1swXTtcblxuICAgIHJldHVybiBuZXcgVHdlZW4ocHJvcHMpO1xuICB9IGVsc2Uge1xuICAgIHZhciBmcm9tID0gYXJnc1swXSxcbiAgICAgICAgdG8gPSBhcmdzWzFdLFxuICAgICAgICBkdXJhdGlvbiA9IGFyZ3NbMl0sXG4gICAgICAgIGVhc2UgPSBhcmdzWzNdLFxuICAgICAgICBfcHJvcHM0ID0gYXJnc1s0XTtcblxuICAgIHJldHVybiBuZXcgVHdlZW4oX2V4dGVuZHMoeyBmcm9tOiBmcm9tLCB0bzogdG8sIGR1cmF0aW9uOiBkdXJhdGlvbiwgZWFzZTogZWFzZSB9LCBfcHJvcHM0KSk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNSM1pXVnVMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTnNZVzF3VUhKdlozSmxjM01pTENKT1JWaFVYMU5VUlZCVElpd2liRzl2Y0NJc0luUjNaV1Z1SWl3aWMzUmhjblFpTENKNWIzbHZJaXdpY21WMlpYSnpaU0lzSW1ac2FYQWlMQ0pVZDJWbGJpSXNJbTl1VTNSaGNuUWlMQ0p3Y205d2N5SXNJbVIxY21GMGFXOXVJaXdpY0d4aGVVUnBjbVZqZEdsdmJpSXNJbVZzWVhCelpXUWlMQ0p3Y205bmNtVnpjeUlzSW5Wd1pHRjBaU0lzSW1WaGMyVWlMQ0ptY205dElpd2lkRzhpTENKcGMwRmpkR2x2YmtOdmJYQnNaWFJsSWl3aWFYTkRiMjF3YkdWMFpTSXNJbWx6VTNSbGNGUmhhMlZ1SWl3aWEyVjVJaXdpYm1WNGRGTjBaWEFpTENKamIzVnVkRkJ5YjNBaUxDSnpkR1Z3VFdGNElpd2laMlYwVUhKdmNDSXNJbk4wWlhCRGIzVnVkQ0lzSW5ObGRGQnliM0J6SWl3aVoyVjBSV3hoY0hObFpDSXNJbVJsWm1GMWJIUlFjbTl3Y3lJc0ltWnNhWEJEYjNWdWRDSXNJbmx2ZVc5RGIzVnVkQ0lzSW14dmIzQkRiM1Z1ZENJc0ltRnlaM01pTENKc1pXNW5kR2dpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenM3TzBGQlEwRTdPMEZCUTBFN08wRkJRMEU3TzBGQlEwRTdPenM3T3pzN096czdRVUZGUVN4SlFVRk5RU3huUWtGQlowSXNlVUpCUVUwc1EwRkJUaXhGUVVGVExFTkJRVlFzUTBGQmRFSTdPMEZCUlVFc1NVRkJUVU1zWVVGQllUdEJRVU5xUWtNc1VVRkJUU3hWUVVGRFF5eExRVUZFTzBGQlFVRXNWMEZCVjBFc1RVRkJUVU1zUzBGQlRpeEZRVUZZTzBGQlFVRXNSMEZFVnp0QlFVVnFRa01zVVVGQlRTeFZRVUZEUml4TFFVRkVPMEZCUVVFc1YwRkJWMEVzVFVGQlRVY3NUMEZCVGl4SFFVRm5Ra1lzUzBGQmFFSXNSVUZCV0R0QlFVRkJMRWRCUmxjN1FVRkhha0pITEZGQlFVMHNWVUZCUTBvc1MwRkJSRHRCUVVGQkxGZEJRVmRCTEUxQlFVMUpMRWxCUVU0c1IwRkJZVWdzUzBGQllpeEZRVUZZTzBGQlFVRTdRVUZJVnl4RFFVRnVRanM3U1VGTlRVa3NTenM3T3pzN096czdPMnRDUVdWS1F5eFBMSE5DUVVGVk8wRkJRVUVzYVVKQlF6UkNMRXRCUVV0RExFdEJSR3BETzBGQlFVRXNVVUZEUVVNc1VVRkVRU3hWUVVOQlFTeFJRVVJCTzBGQlFVRXNVVUZEVlVNc1lVRkVWaXhWUVVOVlFTeGhRVVJXT3pzN1FVRkhVaXhUUVVGTFF5eFBRVUZNTEVkQlFXZENSQ3hyUWtGQmEwSXNRMEZCYmtJc1IwRkJkMElzUTBGQmVFSXNSMEZCTkVKRUxGRkJRVE5ETzBGQlEwRXNVMEZCUzBjc1VVRkJUQ3hIUVVGblFpeERRVUZvUWp0QlFVTkVMRWM3TzJ0Q1FVVkVReXhOTEhGQ1FVRlRPMEZCUVVFc2EwSkJRelpETEV0QlFVdE1MRXRCUkd4RU8wRkJRVUVzVVVGRFEwTXNVVUZFUkN4WFFVTkRRU3hSUVVSRU8wRkJRVUVzVVVGRFYwc3NTVUZFV0N4WFFVTlhRU3hKUVVSWU8wRkJRVUVzVVVGRGFVSkRMRWxCUkdwQ0xGZEJRMmxDUVN4SlFVUnFRanRCUVVGQkxGRkJRM1ZDUXl4RlFVUjJRaXhYUVVOMVFrRXNSVUZFZGtJN1FVRkJRU3hSUVVNeVFrNHNZVUZFTTBJc1YwRkRNa0pCTEdGQlJETkNPenM3UVVGSFVDeFRRVUZMUXl4UFFVRk1MRWxCUVdkQ0xIVkRRVUYxUWtRc1lVRkJka003UVVGRFFTeFRRVUZMUlN4UlFVRk1MRWRCUVdkQ1pDeGpRVUZqTEdkRFFVRnhRaXhEUVVGeVFpeEZRVUYzUWxjc1VVRkJlRUlzUlVGQmEwTXNTMEZCUzBVc1QwRkJka01zUTBGQlpDeERRVUZvUWpzN1FVRkZRU3hYUVVGUExHZERRVUZ4UWtrc1NVRkJja0lzUlVGQk1rSkRMRVZCUVROQ0xFVkJRU3RDUml4TFFVRkxMRXRCUVV0R0xGRkJRVllzUTBGQkwwSXNRMEZCVUR0QlFVTkVMRWM3TzJ0Q1FVVkVTeXhuUWl3clFrRkJiVUk3UVVGQlFTeHJRa0ZEY1VNc1MwRkJTMVFzUzBGRU1VTTdRVUZCUVN4UlFVTlVReXhSUVVSVExGZEJRMVJCTEZGQlJGTTdRVUZCUVN4UlFVTkRReXhoUVVSRUxGZEJRME5CTEdGQlJFUTdRVUZCUVN4UlFVTm5RbEFzU1VGRWFFSXNWMEZEWjBKQkxFbEJSR2hDTzBGQlFVRXNVVUZEYzBKSUxFbEJSSFJDTEZkQlEzTkNRU3hKUVVSMFFqdEJRVUZCTEZGQlF6UkNTeXhKUVVRMVFpeFhRVU0wUWtFc1NVRkVOVUk3TzBGQlJXcENMRkZCUVVsaExHRkJRV05TTEd0Q1FVRnJRaXhEUVVGdVFpeEhRVUY1UWl4TFFVRkxReXhQUVVGTUxFbEJRV2RDUml4UlFVRjZReXhIUVVGelJDeExRVUZMUlN4UFFVRk1MRWxCUVdkQ0xFTkJRWFpHT3p0QlFVVkJMRkZCUVVsUExHVkJRV1ZtTEZGQlFWRklMRWxCUVZJc1NVRkJaMEpMTEVsQlFTOUNMRU5CUVVvc1JVRkJNRU03UVVGRGVFTXNWVUZCU1dNc1kwRkJZeXhMUVVGc1FqczdRVUZGUVN4WFFVRkxMRWxCUVVsRExFZEJRVlFzU1VGQlowSnlRaXhWUVVGb1FpeEZRVUUwUWp0QlFVTXhRaXhaUVVGTmMwSXNWMEZCVjNSQ0xGZEJRVmR4UWl4SFFVRllMRU5CUVdwQ08wRkJRMEVzV1VGQlRVVXNXVUZCV1VZc1RVRkJUU3hQUVVGNFFqdEJRVU5CTEZsQlFVMUhMRlZCUVZVc1MwRkJTME1zVDBGQlRDeERRVUZoU2l4SFFVRmlMRU5CUVdoQ08wRkJRMEVzV1VGQlRVc3NXVUZCV1N4TFFVRkxSQ3hQUVVGTUxFTkJRV0ZHTEZOQlFXSXNRMEZCYkVJN08wRkJSVUVzV1VGQlNVTXNWVUZCVlVVc1UwRkJaQ3hGUVVGNVFqdEJRVUZCT3p0QlFVTjJRaXhsUVVGTFF5eFJRVUZNTERSQ1FVTkhTaXhUUVVSSUxFbEJRMlZITEZsQlFWa3NRMEZFTTBJN1FVRkhRVW9zYlVKQlFWTXNTVUZCVkR0QlFVTkJSaXgzUWtGQll5eEpRVUZrTzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3hWUVVGSlFTeFhRVUZLTEVWQlFXbENSQ3hoUVVGaExFdEJRV0k3UVVGRGJFSTdPMEZCUlVRc1YwRkJUMEVzVlVGQlVEdEJRVU5FTEVjN08ydENRVVZFVXl4VkxIbENRVUZoTzBGQlExZ3NWMEZCVHl4TFFVRkxhRUlzVDBGQldqdEJRVU5FTEVjN08ydENRVVZFVGl4SkxHMUNRVUZQTzBGQlEwd3NVMEZCUzAwc1QwRkJUQ3hIUVVGbExFdEJRVXRJTEV0QlFVd3NRMEZCVjBNc1VVRkJXQ3hIUVVGelFpeExRVUZMUlN4UFFVRXhRenRCUVVSTExHVkJSVGhDTEVOQlFVTXNTMEZCUzBnc1MwRkJUQ3hEUVVGWFVTeEZRVUZhTEVWQlFXZENMRXRCUVV0U0xFdEJRVXdzUTBGQlYwOHNTVUZCTTBJc1EwRkdPVUk3UVVGRlNpeFRRVUZMVUN4TFFVRk1MRU5CUVZkUExFbEJSbEE3UVVGRllTeFRRVUZMVUN4TFFVRk1MRU5CUVZkUkxFVkJSbmhDT3p0QlFVZE1MRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMnRDUVVWRVdpeFBMSE5DUVVGVk8wRkJRMUlzVTBGQlMwa3NTMEZCVEN4RFFVRlhSU3hoUVVGWUxFbEJRVFJDTEVOQlFVTXNRMEZCTjBJN1FVRkRRU3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenM3T3p0QlFYaEZSMG9zU3l4RFFVTkhjMElzV1N4SFFVRmxPMEZCUTNCQ2JrSXNXVUZCVlN4SFFVUlZPMEZCUlhCQ1N5eDFRa0ZHYjBJN1FVRkhjRUpETEZGQlFVMHNRMEZJWXp0QlFVbHdRa01zVFVGQlNTeERRVXBuUWp0QlFVdHdRbGdzVVVGQlRTeERRVXhqTzBGQlRYQkNkMElzWVVGQlZ5eERRVTVUTzBGQlQzQkNNVUlzVVVGQlRTeERRVkJqTzBGQlVYQkNNa0lzWVVGQlZ5eERRVkpUTzBGQlUzQkNPVUlzVVVGQlRTeERRVlJqTzBGQlZYQkNLMElzWVVGQlZ5eERRVlpUTzBGQlYzQkNja0lzYVVKQlFXVTdRVUZZU3l4RE96dHJRa0V3UlZRc1dVRkJZVHRCUVVGQkxHOURRVUZVYzBJc1NVRkJVenRCUVVGVVFTeFJRVUZUTzBGQlFVRTdPMEZCUXpGQ0xFMUJRVWxCTEV0QlFVdERMRTFCUVV3c1MwRkJaMElzUTBGQmNFSXNSVUZCZFVJN1FVRkJRU3hSUVVOaWVrSXNTMEZFWVN4SFFVTklkMElzU1VGRVJ6czdRVUZGY2tJc1YwRkJUeXhKUVVGSk1VSXNTMEZCU2l4RFFVRlZSU3hMUVVGV0xFTkJRVkE3UVVGRFJDeEhRVWhFTEUxQlIwODdRVUZCUVN4UlFVTkhUeXhKUVVSSUxFZEJRM1ZEYVVJc1NVRkVka003UVVGQlFTeFJRVU5UYUVJc1JVRkVWQ3hIUVVOMVEyZENMRWxCUkhaRE8wRkJRVUVzVVVGRFlYWkNMRkZCUkdJc1IwRkRkVU4xUWl4SlFVUjJRenRCUVVGQkxGRkJRM1ZDYkVJc1NVRkVka0lzUjBGRGRVTnJRaXhKUVVSMlF6dEJRVUZCTEZGQlF6WkNlRUlzVDBGRU4wSXNSMEZEZFVOM1FpeEpRVVIyUXpzN1FVRkZUQ3hYUVVGUExFbEJRVWt4UWl4TFFVRktMRmxCUVZsVExGVkJRVm9zUlVGQmEwSkRMRTFCUVd4Q0xFVkJRWE5DVUN4clFrRkJkRUlzUlVGQlowTkxMRlZCUVdoRExFbEJRWGxEVGl4UFFVRjZReXhGUVVGUU8wRkJRMFE3UVVGRFJpeERJaXdpWm1sc1pTSTZJblIzWldWdUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYSnpMbWhoYkd3dlVISnZhbVZqZEhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNXBiWEJ2Y25RZ2V5QjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVWdmU0JtY205dElDY3VMaTltY21GdFpYTjVibU1uTzF4dWFXMXdiM0owSUhzZ1kyeGhiWEFnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6Snp0Y2JtbHRjRzl5ZENCN0lHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxMQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibWx0Y0c5eWRDQjdJR1ZoYzJWUGRYUWdmU0JtY205dElDY3VMaTlwYm1NdlpXRnphVzVuSnp0Y2JseHVZMjl1YzNRZ1kyeGhiWEJRY205bmNtVnpjeUE5SUdOc1lXMXdLREFzSURFcE8xeHVYRzVqYjI1emRDQk9SVmhVWDFOVVJWQlRJRDBnZTF4dUlDQnNiMjl3T2lBb2RIZGxaVzRwSUQwK0lIUjNaV1Z1TG5OMFlYSjBLQ2tzWEc0Z0lIbHZlVzg2SUNoMGQyVmxiaWtnUFQ0Z2RIZGxaVzR1Y21WMlpYSnpaU2dwTG5OMFlYSjBLQ2tzWEc0Z0lHWnNhWEE2SUNoMGQyVmxiaWtnUFQ0Z2RIZGxaVzR1Wm14cGNDZ3BMbk4wWVhKMEtDbGNibjA3WEc1Y2JtTnNZWE56SUZSM1pXVnVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYzNSaGRHbGpJR1JsWm1GMWJIUlFjbTl3Y3lBOUlIdGNiaUFnSUNCa2RYSmhkR2x2YmpvZ016QXdMRnh1SUNBZ0lHVmhjMlU2SUdWaGMyVlBkWFFzWEc0Z0lDQWdabkp2YlRvZ01DeGNiaUFnSUNCMGJ6b2dNU3hjYmlBZ0lDQm1iR2x3T2lBd0xGeHVJQ0FnSUdac2FYQkRiM1Z1ZERvZ01DeGNiaUFnSUNCNWIzbHZPaUF3TEZ4dUlDQWdJSGx2ZVc5RGIzVnVkRG9nTUN4Y2JpQWdJQ0JzYjI5d09pQXdMRnh1SUNBZ0lHeHZiM0JEYjNWdWREb2dNQ3hjYmlBZ0lDQndiR0Y1UkdseVpXTjBhVzl1T2lBeFhHNGdJSDA3WEc1Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHUjFjbUYwYVc5dUxDQndiR0Y1UkdseVpXTjBhVzl1SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdkR2hwY3k1bGJHRndjMlZrSUQwZ0tIQnNZWGxFYVhKbFkzUnBiMjRnUFQwOUlERXBJRDhnTUNBNklHUjFjbUYwYVc5dU8xeHVJQ0FnSUhSb2FYTXVjSEp2WjNKbGMzTWdQU0F3TzF4dUlDQjlYRzVjYmlBZ2RYQmtZWFJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWkhWeVlYUnBiMjRzSUdWaGMyVXNJR1p5YjIwc0lIUnZMQ0J3YkdGNVJHbHlaV04wYVc5dUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lDczlJSFJwYldWVGFXNWpaVXhoYzNSR2NtRnRaU2dwSUNvZ2NHeGhlVVJwY21WamRHbHZianRjYmlBZ0lDQjBhR2x6TG5CeWIyZHlaWE56SUQwZ1kyeGhiWEJRY205bmNtVnpjeWhuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNnd0xDQmtkWEpoZEdsdmJpd2dkR2hwY3k1bGJHRndjMlZrS1NrN1hHNWNiaUFnSUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb1puSnZiU3dnZEc4c0lHVmhjMlVvZEdocGN5NXdjbTluY21WemN5a3BPMXh1SUNCOVhHNWNiaUFnYVhOQlkzUnBiMjVEYjIxd2JHVjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1IxY21GMGFXOXVMQ0J3YkdGNVJHbHlaV04wYVc5dUxDQjViM2x2TENCc2IyOXdMQ0JtYkdsd0lIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR3hsZENCcGMwTnZiWEJzWlhSbElEMGdLSEJzWVhsRWFYSmxZM1JwYjI0Z1BUMDlJREVwSUQ4Z0tIUm9hWE11Wld4aGNITmxaQ0ErUFNCa2RYSmhkR2x2YmlrZ09pQW9kR2hwY3k1bGJHRndjMlZrSUR3OUlEQXBPMXh1WEc0Z0lDQWdhV1lnS0dselEyOXRjR3hsZEdVZ0ppWWdLSGx2ZVc4Z2ZId2diRzl2Y0NCOGZDQm1iR2x3S1NrZ2UxeHVJQ0FnSUNBZ2JHVjBJR2x6VTNSbGNGUmhhMlZ1SUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJPUlZoVVgxTlVSVkJUS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUc1bGVIUlRkR1Z3SUQwZ1RrVllWRjlUVkVWUVUxdHJaWGxkTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JqYjNWdWRGQnliM0FnUFNCclpYa2dLeUFuUTI5MWJuUW5PMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnpkR1Z3VFdGNElEMGdkR2hwY3k1blpYUlFjbTl3S0d0bGVTazdYRzRnSUNBZ0lDQWdJR052Ym5OMElITjBaWEJEYjNWdWRDQTlJSFJvYVhNdVoyVjBVSEp2Y0NoamIzVnVkRkJ5YjNBcE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoemRHVndUV0Y0SUQ0Z2MzUmxjRU52ZFc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NXpaWFJRY205d2N5aDdYRzRnSUNBZ0lDQWdJQ0FnSUNCYlkyOTFiblJRY205d1hUb2djM1JsY0VOdmRXNTBJQ3NnTVZ4dUlDQWdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0FnSUc1bGVIUlRkR1Z3S0hSb2FYTXBPMXh1SUNBZ0lDQWdJQ0FnSUdselUzUmxjRlJoYTJWdUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBaaUFvYVhOVGRHVndWR0ZyWlc0cElHbHpRMjl0Y0d4bGRHVWdQU0JtWVd4elpUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnYVhORGIyMXdiR1YwWlR0Y2JpQWdmVnh1WEc0Z0lHZGxkRVZzWVhCelpXUW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Wld4aGNITmxaRHRjYmlBZ2ZWeHVYRzRnSUdac2FYQW9LU0I3WEc0Z0lDQWdkR2hwY3k1bGJHRndjMlZrSUQwZ2RHaHBjeTV3Y205d2N5NWtkWEpoZEdsdmJpQXRJSFJvYVhNdVpXeGhjSE5sWkR0Y2JpQWdJQ0JiZEdocGN5NXdjbTl3Y3k1bWNtOXRMQ0IwYUdsekxuQnliM0J6TG5SdlhTQTlJRnQwYUdsekxuQnliM0J6TG5SdkxDQjBhR2x6TG5CeWIzQnpMbVp5YjIxZE8xeHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdjbVYyWlhKelpTZ3BJSHRjYmlBZ0lDQjBhR2x6TG5CeWIzQnpMbkJzWVhsRWFYSmxZM1JwYjI0Z0tqMGdMVEU3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0M0dUxtRnlaM01wSUQwK0lIdGNiaUFnYVdZZ0tHRnlaM011YkdWdVozUm9JRDA5UFNBeEtTQjdYRzRnSUNBZ1kyOXVjM1FnV3lCd2NtOXdjeUJkSUQwZ1lYSm5jenRjYmlBZ0lDQnlaWFIxY200Z2JtVjNJRlIzWldWdUtIQnliM0J6S1R0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCamIyNXpkQ0JiSUdaeWIyMHNJSFJ2TENCa2RYSmhkR2x2Yml3Z1pXRnpaU3dnY0hKdmNITWdYU0E5SUdGeVozTTdYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QlVkMlZsYmloN0lHWnliMjBzSUhSdkxDQmtkWEpoZEdsdmJpd2daV0Z6WlN3Z0xpNHVjSEp2Y0hNZ2ZTazdYRzRnSUgxY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY2hhaW4gPSByZXF1aXJlKCcuL2NoYWluJyk7XG5cbnZhciBfY2hhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hhaW4pO1xuXG52YXIgX3BhcmFsbGVsID0gcmVxdWlyZSgnLi9wYXJhbGxlbCcpO1xuXG52YXIgX3BhcmFsbGVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcmFsbGVsKTtcblxudmFyIF9kZWxheSA9IHJlcXVpcmUoJy4vZGVsYXknKTtcblxudmFyIF9kZWxheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWxheSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHBhcmFsbGVsIEFjdGlvbiBjb21wb3NlZCBvZiBjaGFpbmVkXG4gKiBkZWxheSBhbmQgYWN0aW9ucy4gSW50ZXJ2YWwgY2FuIGJlIGVpdGhlciBhIG51bWJlclxuICogdG8gbXVsdGlwbHkgYnkgYGlgIG9yIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHByb3ZpZGVkIGBpYFxuICpcbiAqIFN0cmFpZ2h0IGNyaWJiZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL2Jsb2IvMjRjNzJmNTEzZTQ4ZjBiZGM0MDgyMGI0MzI2MjMyOGZlMmMzMDFkNC9MaWJyYXJpZXMvQW5pbWF0ZWQvc3JjL0FuaW1hdGVkSW1wbGVtZW50YXRpb24uanMjTDIwMzFcbiAqIF4gVGhpcyBmdW5jdGlvbiBzb2xkIGEgcHJldmlvdXNseS1jb25mbGljdGVkIG1lIG9uIHRoZSBtZXJpdCBvZiBtb3ZpbmcgZnJvbVxuICogalF1ZXJ5LXN0eWxlIG11bHRpLXByb3BlcnR5IGFuaW1hdGlvbnMgdG8gc2luZ2xlLXByb3BlcnR5LlxuICogQHBhcmFtICB7YXJyYXl9IGFjdGlvbnNcbiAqIEBwYXJhbSAge2Z1bmN0aW9uIHwgbnVtYmVyfSBpbnRlcnZhbFxuICogQHJldHVybiB7QWN0aW9ufVxuICovXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgaW50ZXJ2YWwsIG9uQ29tcGxldGUpIHtcbiAgdmFyIGludGVydmFsSXNGdW5jdGlvbiA9ICgwLCBfdXRpbHMuaXNGdW5jKShpbnRlcnZhbCk7XG5cbiAgcmV0dXJuICgwLCBfcGFyYWxsZWwyLmRlZmF1bHQpKGFjdGlvbnMubWFwKGZ1bmN0aW9uIChhY3Rpb24sIGkpIHtcbiAgICB2YXIgdGltZVRvRGVsYXkgPSBpbnRlcnZhbElzRnVuY3Rpb24gPyBpbnRlcnZhbChpKSA6IGkgKiBpbnRlcnZhbDtcbiAgICByZXR1cm4gKDAsIF9jaGFpbjIuZGVmYXVsdCkoWygwLCBfZGVsYXkyLmRlZmF1bHQpKHRpbWVUb0RlbGF5KSwgYWN0aW9uXSk7XG4gIH0pLCB7IG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzTjBZV2RuWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHNpWVdOMGFXOXVjeUlzSW1sdWRHVnlkbUZzSWl3aWIyNURiMjF3YkdWMFpTSXNJbWx1ZEdWeWRtRnNTWE5HZFc1amRHbHZiaUlzSW0xaGNDSXNJbUZqZEdsdmJpSXNJbWtpTENKMGFXMWxWRzlFWld4aGVTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlJVRTdPenM3T3pzN096czdPenRyUWtGWlpTeFZRVUZEUVN4UFFVRkVMRVZCUVZWRExGRkJRVllzUlVGQmIwSkRMRlZCUVhCQ0xFVkJRVzFETzBGQlEyaEVMRTFCUVUxRExIRkNRVUZ4UWl4dFFrRkJUMFlzVVVGQlVDeERRVUV6UWpzN1FVRkZRU3hUUVVGUExIZENRVUZUUkN4UlFVRlJTU3hIUVVGU0xFTkJRVmtzVlVGQlEwTXNUVUZCUkN4RlFVRlRReXhEUVVGVUxFVkJRV1U3UVVGRGVrTXNVVUZCVFVNc1kwRkJaVW9zYTBKQlFVUXNSMEZCZFVKR0xGTkJRVk5MTEVOQlFWUXNRMEZCZGtJc1IwRkJjVU5CTEVsQlFVbE1MRkZCUVRkRU8wRkJRMEVzVjBGQlR5eHhRa0ZCVFN4RFFVTllMSEZDUVVGTlRTeFhRVUZPTEVOQlJGY3NSVUZGV0VZc1RVRkdWeXhEUVVGT0xFTkJRVkE3UVVGSlJDeEhRVTVsTEVOQlFWUXNSVUZOU0N4RlFVRkZTQ3h6UWtGQlJpeEZRVTVITEVOQlFWQTdRVUZQUkN4RElpd2labWxzWlNJNkluTjBZV2RuWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGNuTXVhR0ZzYkM5UWNtOXFaV04wY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1kyaGhhVzRnWm5KdmJTQW5MaTlqYUdGcGJpYzdYRzVwYlhCdmNuUWdjR0Z5WVd4c1pXd2dabkp2YlNBbkxpOXdZWEpoYkd4bGJDYzdYRzVwYlhCdmNuUWdaR1ZzWVhrZ1puSnZiU0FuTGk5a1pXeGhlU2M3WEc1cGJYQnZjblFnZXlCcGMwWjFibU1nZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpYTWdZU0J1WlhjZ2NHRnlZV3hzWld3Z1FXTjBhVzl1SUdOdmJYQnZjMlZrSUc5bUlHTm9ZV2x1WldSY2JpQXFJR1JsYkdGNUlHRnVaQ0JoWTNScGIyNXpMaUJKYm5SbGNuWmhiQ0JqWVc0Z1ltVWdaV2wwYUdWeUlHRWdiblZ0WW1WeVhHNGdLaUIwYnlCdGRXeDBhWEJzZVNCaWVTQmdhV0FnYjNJZ1lTQm1kVzVqZEdsdmJpQjBhR0YwSUhkcGJHd2dZbVVnY0hKdmRtbGtaV1FnWUdsZ1hHNGdLbHh1SUNvZ1UzUnlZV2xuYUhRZ1kzSnBZbUpsWkNCbWNtOXRJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzltWVdObFltOXZheTl5WldGamRDMXVZWFJwZG1VdllteHZZaTh5TkdNM01tWTFNVE5sTkRobU1HSmtZelF3T0RJd1lqUXpNall5TXpJNFptVXlZek13TVdRMEwweHBZbkpoY21sbGN5OUJibWx0WVhSbFpDOXpjbU12UVc1cGJXRjBaV1JKYlhCc1pXMWxiblJoZEdsdmJpNXFjeU5NTWpBek1WeHVJQ29nWGlCVWFHbHpJR1oxYm1OMGFXOXVJSE52YkdRZ1lTQndjbVYyYVc5MWMyeDVMV052Ym1ac2FXTjBaV1FnYldVZ2IyNGdkR2hsSUcxbGNtbDBJRzltSUcxdmRtbHVaeUJtY205dFhHNGdLaUJxVVhWbGNua3RjM1I1YkdVZ2JYVnNkR2t0Y0hKdmNHVnlkSGtnWVc1cGJXRjBhVzl1Y3lCMGJ5QnphVzVuYkdVdGNISnZjR1Z5ZEhrdVhHNGdLaUJBY0dGeVlXMGdJSHRoY25KaGVYMGdZV04wYVc5dWMxeHVJQ29nUUhCaGNtRnRJQ0I3Wm5WdVkzUnBiMjRnZkNCdWRXMWlaWEo5SUdsdWRHVnlkbUZzWEc0Z0tpQkFjbVYwZFhKdUlIdEJZM1JwYjI1OVhHNGdLaTljYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hoWTNScGIyNXpMQ0JwYm5SbGNuWmhiQ3dnYjI1RGIyMXdiR1YwWlNrZ1BUNGdlMXh1SUNCamIyNXpkQ0JwYm5SbGNuWmhiRWx6Um5WdVkzUnBiMjRnUFNCcGMwWjFibU1vYVc1MFpYSjJZV3dwTzF4dVhHNGdJSEpsZEhWeWJpQndZWEpoYkd4bGJDaGhZM1JwYjI1ekxtMWhjQ2dvWVdOMGFXOXVMQ0JwS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnZEdsdFpWUnZSR1ZzWVhrZ1BTQW9hVzUwWlhKMllXeEpjMFoxYm1OMGFXOXVLU0EvSUdsdWRHVnlkbUZzS0drcElEb2dhU0FxSUdsdWRHVnlkbUZzTzF4dUlDQWdJSEpsZEhWeWJpQmphR0ZwYmloYlhHNGdJQ0FnSUNCa1pXeGhlU2gwYVcxbFZHOUVaV3hoZVNrc1hHNGdJQ0FnSUNCaFkzUnBiMjVjYmlBZ0lDQmRLVHRjYmlBZ2ZTa3NJSHNnYjI1RGIyMXdiR1YwWlNCOUtUdGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvc3RhZ2dlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVmFsdWUgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVmFsdWUsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFZhbHVlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWYWx1ZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFZhbHVlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQodikge1xuICAgIHRoaXMudG9VcGRhdGUgPSB2O1xuICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgfTtcblxuICBWYWx1ZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnRvVXBkYXRlO1xuICB9O1xuXG4gIHJldHVybiBWYWx1ZTtcbn0oXzIuZGVmYXVsdCk7XG5cblZhbHVlLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGN1cnJlbnQsIG9uVXBkYXRlKSB7XG4gIHJldHVybiBuZXcgVmFsdWUoeyBjdXJyZW50OiBjdXJyZW50LCBvblVwZGF0ZTogb25VcGRhdGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzWmhiSFZsTG1weklsMHNJbTVoYldWeklqcGJJbFpoYkhWbElpd2ljMlYwSWl3aWRpSXNJblJ2VlhCa1lYUmxJaXdpYzJOb1pXUjFiR1ZrVlhCa1lYUmxJaXdpZFhCa1lYUmxJaXdpWkdWbVlYVnNkRkJ5YjNCeklpd2ljR0Z6YzJsMlpTSXNJbU4xY25KbGJuUWlMQ0p2YmxWd1pHRjBaU0pkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdPenM3T3pzN1NVRkZUVUVzU3pzN096czdPenM3TzJ0Q1FVdEtReXhITEdkQ1FVRkpReXhETEVWQlFVYzdRVUZEVEN4VFFVRkxReXhSUVVGTUxFZEJRV2RDUkN4RFFVRm9RanRCUVVOQkxHdERRVUZqTEV0QlFVdEZMR1ZCUVc1Q08wRkJRMFFzUnpzN2EwSkJSVVJETEUwc2NVSkJRVk03UVVGRFVDeFhRVUZQTEV0QlFVdEdMRkZCUVZvN1FVRkRSQ3hIT3pzN096dEJRVnBIU0N4TExFTkJRMGROTEZrc1IwRkJaVHRCUVVOd1FrTXNWMEZCVXp0QlFVUlhMRU03TzJ0Q1FXTlVMRlZCUVVORExFOUJRVVFzUlVGQlZVTXNVVUZCVmp0QlFVRkJMRk5CUVhWQ0xFbEJRVWxVTEV0QlFVb3NRMEZCVlN4RlFVRkZVU3huUWtGQlJpeEZRVUZYUXl4clFrRkJXQ3hGUVVGV0xFTkJRWFpDTzBGQlFVRXNReUlzSW1acGJHVWlPaUoyWVd4MVpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRnljeTVvWVd4c0wxQnliMnBsWTNSekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk4bk8xeHVhVzF3YjNKMElIc2diMjVHY21GdFpWVndaR0YwWlNCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVjYm1Oc1lYTnpJRlpoYkhWbElHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0J3WVhOemFYWmxPaUIwY25WbFhHNGdJSDA3WEc1Y2JpQWdjMlYwS0hZcElIdGNiaUFnSUNCMGFHbHpMblJ2VlhCa1lYUmxJRDBnZGp0Y2JpQWdJQ0J2YmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11YzJOb1pXUjFiR1ZrVlhCa1lYUmxLVHRjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1MGIxVndaR0YwWlR0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1kzVnljbVZ1ZEN3Z2IyNVZjR1JoZEdVcElEMCtJRzVsZHlCV1lXeDFaU2g3SUdOMWNuSmxiblFzSUc5dVZYQmtZWFJsSUgwcE8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3ZhbHVlLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX29uTmV4dEZyYW1lID0gcmVxdWlyZSgnLi9vbi1uZXh0LWZyYW1lJyk7XG5cbnZhciBfb25OZXh0RnJhbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb25OZXh0RnJhbWUpO1xuXG52YXIgX2NyZWF0ZVJlbmRlclN0ZXAgPSByZXF1aXJlKCcuL2NyZWF0ZS1yZW5kZXItc3RlcCcpO1xuXG52YXIgX2NyZWF0ZVJlbmRlclN0ZXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlUmVuZGVyU3RlcCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcblxuLyoqXG4gKiBNYXhpbXVtIHBlcm1pdHRlZCBtcyBzaW5jZSBsYXN0IGZyYW1lXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgTUFYX0VMQVBTRUQgPSAyMDtcblxuLyoqXG4gKiBDdXJyZW50IGZyYW1lc3RhbXBcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBjdXJyZW50RnJhbWVzdGFtcCA9ICgwLCBfdXRpbHMuY3VycmVudFRpbWUpKCk7XG5cbnZhciBlbGFwc2VkID0gMDtcblxuLyoqXG4gKiBGYWN0b3IgdG8gbXVsdGlwbHkgYGVsYXBzZWRgIGJ5IC0gXG4gKiAwLjUgd291bGQgYmUgc2xvdyBtb3Rpb24sIDIgd291bGQgYmUgZmFzdFxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIGRpbGF0aW9uID0gMTtcblxuZnVuY3Rpb24gc3RhcnRSZW5kZXJMb29wKCkge1xuICBpZiAoIXdpbGxSZW5kZXJOZXh0RnJhbWUpIHtcbiAgICB3aWxsUmVuZGVyTmV4dEZyYW1lID0gdHJ1ZTtcbiAgICAoMCwgX29uTmV4dEZyYW1lMi5kZWZhdWx0KShwcm9jZXNzRnJhbWUpO1xuICB9XG59XG5cbnZhciBmcmFtZVN0YXJ0ID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lVXBkYXRlID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lUmVuZGVyID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lRW5kID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xuXG5mdW5jdGlvbiBwcm9jZXNzRnJhbWUoZnJhbWVzdGFtcCkge1xuICB3aWxsUmVuZGVyTmV4dEZyYW1lID0gZmFsc2U7XG4gIGVsYXBzZWQgPSBNYXRoLm1heChNYXRoLm1pbihmcmFtZXN0YW1wIC0gY3VycmVudEZyYW1lc3RhbXAsIE1BWF9FTEFQU0VEKSwgMSkgKiBkaWxhdGlvbjtcbiAgY3VycmVudEZyYW1lc3RhbXAgPSBmcmFtZXN0YW1wO1xuXG4gIGZyYW1lU3RhcnQucHJvY2VzcygpO1xuICBmcmFtZVVwZGF0ZS5wcm9jZXNzKCk7XG4gIGZyYW1lUmVuZGVyLnByb2Nlc3MoKTtcbiAgZnJhbWVFbmQucHJvY2VzcygpO1xufVxuXG52YXIgb25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LnNjaGVkdWxlO1xudmFyIG9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLm9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5zY2hlZHVsZTtcbnZhciBvbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuc2NoZWR1bGU7XG52YXIgb25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGZyYW1lRW5kLnNjaGVkdWxlO1xudmFyIGNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBmcmFtZUVuZC5jYW5jZWw7XG5cbnZhciB0aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGVsYXBzZWQ7XG59O1xudmFyIGN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY3VycmVudEZyYW1lc3RhbXA7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHNpZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNJc0lrMUJXRjlGVEVGUVUwVkVJaXdpWTNWeWNtVnVkRVp5WVcxbGMzUmhiWEFpTENKbGJHRndjMlZrSWl3aVpHbHNZWFJwYjI0aUxDSnpkR0Z5ZEZKbGJtUmxja3h2YjNBaUxDSndjbTlqWlhOelJuSmhiV1VpTENKbWNtRnRaVk4wWVhKMElpd2labkpoYldWVmNHUmhkR1VpTENKbWNtRnRaVkpsYm1SbGNpSXNJbVp5WVcxbFJXNWtJaXdpWm5KaGJXVnpkR0Z0Y0NJc0lrMWhkR2dpTENKdFlYZ2lMQ0p0YVc0aUxDSndjbTlqWlhOeklpd2liMjVHY21GdFpWTjBZWEowSWl3aWMyTm9aV1IxYkdVaUxDSnZia1p5WVcxbFZYQmtZWFJsSWl3aWIyNUdjbUZ0WlZKbGJtUmxjaUlzSW05dVJuSmhiV1ZGYm1RaUxDSmpZVzVqWld4UGJrWnlZVzFsVTNSaGNuUWlMQ0pqWVc1alpXd2lMQ0pqWVc1alpXeFBia1p5WVcxbFZYQmtZWFJsSWl3aVkyRnVZMlZzVDI1R2NtRnRaVkpsYm1SbGNpSXNJbU5oYm1ObGJFOXVSbkpoYldWRmJtUWlMQ0owYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VpTENKamRYSnlaVzUwUm5KaGJXVlVhVzFsYzNSaGJYQWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJSVUVzU1VGQlNVRXNjMEpCUVhOQ0xFdEJRVEZDT3p0QlFVVkJPenM3TzBGQlNVRXNTVUZCVFVNc1kwRkJZeXhGUVVGd1FqczdRVUZGUVRzN096dEJRVWxCTEVsQlFVbERMRzlDUVVGdlFpeDVRa0ZCZUVJN08wRkJSVUVzU1VGQlNVTXNWVUZCVlN4RFFVRmtPenRCUVVWQk96czdPenRCUVV0QkxFbEJRVWxETEZkQlFWY3NRMEZCWmpzN1FVRkZRU3hUUVVGVFF5eGxRVUZVTEVkQlFUSkNPMEZCUTNwQ0xFMUJRVWtzUTBGQlEwd3NiVUpCUVV3c1JVRkJNRUk3UVVGRGVFSkJMREJDUVVGelFpeEpRVUYwUWp0QlFVTkJMQ3RDUVVGWlRTeFpRVUZhTzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3hKUVVGTlF5eGhRVUZoTEdkRFFVRnBRa1lzWlVGQmFrSXNRMEZCYmtJN1FVRkRRU3hKUVVGTlJ5eGpRVUZqTEdkRFFVRnBRa2dzWlVGQmFrSXNRMEZCY0VJN1FVRkRRU3hKUVVGTlNTeGpRVUZqTEdkRFFVRnBRa29zWlVGQmFrSXNRMEZCY0VJN1FVRkRRU3hKUVVGTlN5eFhRVUZYTEdkRFFVRnBRa3dzWlVGQmFrSXNRMEZCYWtJN08wRkJSVUVzVTBGQlUwTXNXVUZCVkN4RFFVRnpRa3NzVlVGQmRFSXNSVUZCYTBNN1FVRkRhRU5ZTEhkQ1FVRnpRaXhMUVVGMFFqdEJRVU5CUnl4WlFVRlZVeXhMUVVGTFF5eEhRVUZNTEVOQlFWTkVMRXRCUVV0RkxFZEJRVXdzUTBGQlUwZ3NZVUZCWVZRc2FVSkJRWFJDTEVWQlFYbERSQ3hYUVVGNlF5eERRVUZVTEVWQlFXZEZMRU5CUVdoRkxFbEJRWEZGUnl4UlFVRXZSVHRCUVVOQlJpeHpRa0ZCYjBKVExGVkJRWEJDT3p0QlFVVkJTaXhoUVVGWFVTeFBRVUZZTzBGQlEwRlFMR05CUVZsUExFOUJRVm83UVVGRFFVNHNZMEZCV1Uwc1QwRkJXanRCUVVOQlRDeFhRVUZUU3l4UFFVRlVPMEZCUTBRN08wRkJSVTBzU1VGQlRVTXNjME5CUVdWVUxGZEJRVmRWTEZGQlFXaERPMEZCUTBFc1NVRkJUVU1zZDBOQlFXZENWaXhaUVVGWlV5eFJRVUZzUXp0QlFVTkJMRWxCUVUxRkxIZERRVUZuUWxZc1dVRkJXVkVzVVVGQmJFTTdRVUZEUVN4SlFVRk5SeXhyUTBGQllWWXNVMEZCVTA4c1VVRkJOVUk3UVVGRFFTeEpRVUZOU1N4clJFRkJjVUprTEZkQlFWZGxMRTFCUVhSRE8wRkJRMEVzU1VGQlRVTXNiMFJCUVhOQ1ppeFpRVUZaWXl4TlFVRjRRenRCUVVOQkxFbEJRVTFGTEc5RVFVRnpRbVlzV1VGQldXRXNUVUZCZUVNN1FVRkRRU3hKUVVGTlJ5dzRRMEZCYlVKbUxGTkJRVk5aTEUxQlFXeERPenRCUVVWQkxFbEJRVTFKTEd0RVFVRnhRanRCUVVGQkxGTkJRVTEyUWl4UFFVRk9PMEZCUVVFc1EwRkJNMEk3UVVGRFFTeEpRVUZOZDBJc2QwUkJRWGRDTzBGQlFVRXNVMEZCVFhwQ0xHbENRVUZPTzBGQlFVRXNRMEZCT1VJaUxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoY25NdWFHRnNiQzlRY205cVpXTjBjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnYjI1T1pYaDBSbkpoYldVZ1puSnZiU0FuTGk5dmJpMXVaWGgwTFdaeVlXMWxKenRjYm1sdGNHOXlkQ0JqY21WaGRHVlNaVzVrWlhKVGRHVndJR1p5YjIwZ0p5NHZZM0psWVhSbExYSmxibVJsY2kxemRHVndKenRjYm1sdGNHOXlkQ0I3SUdOMWNuSmxiblJVYVcxbElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dWJHVjBJSGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VnUFNCbVlXeHpaVHRjYmx4dUx5b3FYRzRnS2lCTllYaHBiWFZ0SUhCbGNtMXBkSFJsWkNCdGN5QnphVzVqWlNCc1lYTjBJR1p5WVcxbFhHNGdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ292WEc1amIyNXpkQ0JOUVZoZlJVeEJVRk5GUkNBOUlESXdPMXh1WEc0dktpcGNiaUFxSUVOMWNuSmxiblFnWm5KaGJXVnpkR0Z0Y0Z4dUlDb2dRSFI1Y0dVZ2UwNTFiV0psY24xY2JpQXFMMXh1YkdWMElHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd0lEMGdZM1Z5Y21WdWRGUnBiV1VvS1R0Y2JseHViR1YwSUdWc1lYQnpaV1FnUFNBd08xeHVYRzR2S2lwY2JpQXFJRVpoWTNSdmNpQjBieUJ0ZFd4MGFYQnNlU0JnWld4aGNITmxaR0FnWW5rZ0xTQmNiaUFxSURBdU5TQjNiM1ZzWkNCaVpTQnpiRzkzSUcxdmRHbHZiaXdnTWlCM2IzVnNaQ0JpWlNCbVlYTjBYRzRnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNvdlhHNXNaWFFnWkdsc1lYUnBiMjRnUFNBeE8xeHVYRzVtZFc1amRHbHZiaUJ6ZEdGeWRGSmxibVJsY2t4dmIzQW9LU0I3WEc0Z0lHbG1JQ2doZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNrZ2UxeHVJQ0FnSUhkcGJHeFNaVzVrWlhKT1pYaDBSbkpoYldVZ1BTQjBjblZsTzF4dUlDQWdJRzl1VG1WNGRFWnlZVzFsS0hCeWIyTmxjM05HY21GdFpTazdYRzRnSUgxY2JuMWNibHh1WTI5dWMzUWdabkpoYldWVGRHRnlkQ0E5SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLVHRjYm1OdmJuTjBJR1p5WVcxbFZYQmtZWFJsSUQwZ1kzSmxZWFJsVW1WdVpHVnlVM1JsY0NoemRHRnlkRkpsYm1SbGNreHZiM0FwTzF4dVkyOXVjM1FnWm5KaGJXVlNaVzVrWlhJZ1BTQmpjbVZoZEdWU1pXNWtaWEpUZEdWd0tITjBZWEowVW1WdVpHVnlURzl2Y0NrN1hHNWpiMjV6ZENCbWNtRnRaVVZ1WkNBOUlHTnlaV0YwWlZKbGJtUmxjbE4wWlhBb2MzUmhjblJTWlc1a1pYSk1iMjl3S1R0Y2JseHVablZ1WTNScGIyNGdjSEp2WTJWemMwWnlZVzFsS0daeVlXMWxjM1JoYlhBcElIdGNiaUFnZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNBOUlHWmhiSE5sTzF4dUlDQmxiR0Z3YzJWa0lEMGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9abkpoYldWemRHRnRjQ0F0SUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TENCTlFWaGZSVXhCVUZORlJDa3NJREVwSUNvZ1pHbHNZWFJwYjI0N1hHNGdJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdJRDBnWm5KaGJXVnpkR0Z0Y0R0Y2JseHVJQ0JtY21GdFpWTjBZWEowTG5CeWIyTmxjM01vS1R0Y2JpQWdabkpoYldWVmNHUmhkR1V1Y0hKdlkyVnpjeWdwTzF4dUlDQm1jbUZ0WlZKbGJtUmxjaTV3Y205alpYTnpLQ2s3WEc0Z0lHWnlZVzFsUlc1a0xuQnliMk5sYzNNb0tUdGNibjFjYmx4dVpYaHdiM0owSUdOdmJuTjBJRzl1Um5KaGJXVlRkR0Z5ZENBOUlHWnlZVzFsVTNSaGNuUXVjMk5vWldSMWJHVTdYRzVsZUhCdmNuUWdZMjl1YzNRZ2IyNUdjbUZ0WlZWd1pHRjBaU0E5SUdaeVlXMWxWWEJrWVhSbExuTmphR1ZrZFd4bE8xeHVaWGh3YjNKMElHTnZibk4wSUc5dVJuSmhiV1ZTWlc1a1pYSWdQU0JtY21GdFpWSmxibVJsY2k1elkyaGxaSFZzWlR0Y2JtVjRjRzl5ZENCamIyNXpkQ0J2YmtaeVlXMWxSVzVrSUQwZ1puSmhiV1ZGYm1RdWMyTm9aV1IxYkdVN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWTjBZWEowSUQwZ1puSmhiV1ZUZEdGeWRDNWpZVzVqWld3N1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlNBOUlHWnlZVzFsVlhCa1lYUmxMbU5oYm1ObGJEdGNibVY0Y0c5eWRDQmpiMjV6ZENCallXNWpaV3hQYmtaeVlXMWxVbVZ1WkdWeUlEMGdabkpoYldWU1pXNWtaWEl1WTJGdVkyVnNPMXh1Wlhod2IzSjBJR052Ym5OMElHTmhibU5sYkU5dVJuSmhiV1ZGYm1RZ1BTQm1jbUZ0WlVWdVpDNWpZVzVqWld3N1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ1BTQW9LU0E5UGlCbGJHRndjMlZrTzF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUkdjbUZ0WlZScGJXVnpkR0Z0Y0NBOUlDZ3BJRDArSUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGxhd3N1aXQgLSBzb3JyeVxuICBmdW5jdGlvbiBBY3Rpb24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uKTtcblxuICAgIHRoaXMuc2NoZWR1bGVkVXBkYXRlID0gdGhpcy5zY2hlZHVsZWRVcGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMpO1xuXG4gICAgdGhpcy5zZXRQcm9wcyhwcm9wcyk7XG5cbiAgICB0aGlzLmN1cnJlbnQgPSBwcm9wcy5jdXJyZW50IHx8IHByb3BzLmZyb20gfHwgMDtcbiAgfVxuXG4gIEFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25TdGFydCA9IF9wcm9wcy5vblN0YXJ0LFxuICAgICAgICBfb25TdGFydCA9IF9wcm9wcy5fb25TdGFydCxcbiAgICAgICAgcGFzc2l2ZSA9IF9wcm9wcy5wYXNzaXZlO1xuXG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB0aGlzLm9uU3RhcnQoKTtcbiAgICBpZiAob25TdGFydCkgb25TdGFydCh0aGlzKTtcbiAgICBpZiAoX29uU3RhcnQpIF9vblN0YXJ0KHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uU3RvcCA9IF9wcm9wczIub25TdG9wLFxuICAgICAgICBfb25TdG9wID0gX3Byb3BzMi5fb25TdG9wLFxuICAgICAgICBwYXNzaXZlID0gX3Byb3BzMi5wYXNzaXZlO1xuXG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdG9wKSB0aGlzLm9uU3RvcCgpO1xuICAgIGlmIChvblN0b3ApIG9uU3RvcCh0aGlzKTtcbiAgICBpZiAoX29uU3RvcCkgX29uU3RvcCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uQ29tcGxldGUgPSBfcHJvcHMzLm9uQ29tcGxldGUsXG4gICAgICAgIF9vbkNvbXBsZXRlID0gX3Byb3BzMy5fb25Db21wbGV0ZTtcblxuXG4gICAgdGhpcy5zdG9wKCk7XG5cbiAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSh0aGlzKTtcbiAgICBpZiAoX29uQ29tcGxldGUpIF9vbkNvbXBsZXRlKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZWRVcGRhdGUgPSBmdW5jdGlvbiBzY2hlZHVsZWRVcGRhdGUoKSB7XG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcbiAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uVXBkYXRlID0gX3Byb3BzNC5vblVwZGF0ZSxcbiAgICAgICAgcGFzc2l2ZSA9IF9wcm9wczQucGFzc2l2ZTtcblxuXG4gICAgaWYgKHRoaXMudXBkYXRlKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnVwZGF0ZSh0aGlzLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlmIChvblVwZGF0ZSkgb25VcGRhdGUodGhpcy5jdXJyZW50LCB0aGlzKTtcbiAgICB0aGlzLmZpcmVMaXN0ZW5lcnMoKTtcblxuICAgIGlmICghcGFzc2l2ZSAmJiB0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQWN0aW9uQ29tcGxldGUgJiYgdGhpcy5pc0FjdGlvbkNvbXBsZXRlKCkpIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24gc2V0UHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHByb3BzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLm91dHB1dCA9IGZ1bmN0aW9uIG91dHB1dChmdW5jKSB7XG4gICAgdGhpcy5wcm9wcy5vblVwZGF0ZSA9IGZ1bmM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldFByb3AgPSBmdW5jdGlvbiBnZXRQcm9wKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzW2tleV07XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXRWZWxvY2l0eSA9IGZ1bmN0aW9uIGdldFZlbG9jaXR5KCkge1xuICAgIHJldHVybiAoMCwgX2NhbGMuc3BlZWRQZXJTZWNvbmQpKHRoaXMuY3VycmVudCAtIHRoaXMucHJldiwgdGhpcy5sYXN0VXBkYXRlZCk7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IFtdO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gdGhpcy5udW1MaXN0ZW5lcnMgfHwgMDtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzKys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHZhciBsaXN0ZW5lckluZGV4ID0gdGhpcy5saXN0ZW5lcnMgPyB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA6IC0xO1xuICAgIGlmIChsaXN0ZW5lckluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMtLTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5maXJlTGlzdGVuZXJzID0gZnVuY3Rpb24gZmlyZUxpc3RlbmVycygpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuZ2V0KCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bUxpc3RlbmVyczsgaSsrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tpXShjdXJyZW50LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIEFjdGlvbjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJa0ZqZEdsdmJpSXNJbkJ5YjNCeklpd2ljMk5vWldSMWJHVmtWWEJrWVhSbElpd2lZbWx1WkNJc0ltTnZibk4wY25WamRHOXlJaXdpWkdWbVlYVnNkRkJ5YjNCeklpd2ljMlYwVUhKdmNITWlMQ0pqZFhKeVpXNTBJaXdpWm5KdmJTSXNJbk4wWVhKMElpd2liMjVUZEdGeWRDSXNJbDl2YmxOMFlYSjBJaXdpY0dGemMybDJaU0lzSWw5cGMwRmpkR2wyWlNJc0luTjBiM0FpTENKdmJsTjBiM0FpTENKZmIyNVRkRzl3SWl3aVkyOXRjR3hsZEdVaUxDSnZia052YlhCc1pYUmxJaXdpWDI5dVEyOXRjR3hsZEdVaUxDSnNZWE4wVlhCa1lYUmxaQ0lzSW5CeVpYWWlMQ0p2YmxWd1pHRjBaU0lzSW5Wd1pHRjBaU0lzSW1acGNtVk1hWE4wWlc1bGNuTWlMQ0pwYzBGamRHbHZia052YlhCc1pYUmxJaXdpYjNWMGNIVjBJaXdpWm5WdVl5SXNJbWRsZENJc0luTmxkQ0lzSW5ZaUxDSm5aWFJRY205d0lpd2lhMlY1SWl3aVoyVjBWbVZzYjJOcGRIa2lMQ0pwYzBGamRHbDJaU0lzSW1Ga1pFeHBjM1JsYm1WeUlpd2liR2x6ZEdWdVpYSWlMQ0pzYVhOMFpXNWxjbk1pTENKdWRXMU1hWE4wWlc1bGNuTWlMQ0pwYm1SbGVFOW1JaXdpY0hWemFDSXNJbkpsYlc5MlpVeHBjM1JsYm1WeUlpd2liR2x6ZEdWdVpYSkpibVJsZUNJc0luTndiR2xqWlNJc0lta2lYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGQk96dEJRVU5CT3pzN08wbEJSVTFCTEUwN1FVRkJVenRCUVVOaUxHdENRVUZaUXl4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlEycENMRk5CUVV0RExHVkJRVXdzUjBGQmRVSXNTMEZCUzBFc1pVRkJUQ3hEUVVGeFFrTXNTVUZCY2tJc1EwRkJNRUlzU1VGQk1VSXNRMEZCZGtJN08wRkJSVUVzVTBGQlMwWXNTMEZCVEN4blFrRkRTeXhMUVVGTFJ5eFhRVUZNTEVOQlFXbENReXhaUVVSMFFqczdRVUZKUVN4VFFVRkxReXhSUVVGTUxFTkJRV05NTEV0QlFXUTdPMEZCUlVFc1UwRkJTMDBzVDBGQlRDeEhRVUZsVGl4TlFVRk5UU3hQUVVGT0xFbEJRV2xDVGl4TlFVRk5UeXhKUVVGMlFpeEpRVUVyUWl4RFFVRTVRenRCUVVORU96dHRRa0ZGUkVNc1N5eHZRa0ZCVVR0QlFVRkJMR2xDUVVOcFF5eExRVUZMVWl4TFFVUjBRenRCUVVGQkxGRkJRMFZUTEU5QlJFWXNWVUZEUlVFc1QwRkVSanRCUVVGQkxGRkJRMWRETEZGQlJGZ3NWVUZEVjBFc1VVRkVXRHRCUVVGQkxGRkJRM0ZDUXl4UFFVUnlRaXhWUVVOeFFrRXNUMEZFY2tJN096dEJRVWRPTEZGQlFVa3NRMEZCUTBFc1QwRkJUQ3hGUVVGak8wRkJRMW9zVjBGQlMwTXNVMEZCVEN4SFFVRnBRaXhKUVVGcVFqdEJRVU5CTEc5RFFVRmpMRXRCUVV0WUxHVkJRVzVDTzBGQlEwUTdPMEZCUlVRc1VVRkJTU3hMUVVGTFVTeFBRVUZVTEVWQlFXdENMRXRCUVV0QkxFOUJRVXc3UVVGRGJFSXNVVUZCU1VFc1QwRkJTaXhGUVVGaFFTeFJRVUZSTEVsQlFWSTdRVUZEWWl4UlFVRkpReXhSUVVGS0xFVkJRV05CTEZOQlFWTXNTVUZCVkRzN1FVRkZaQ3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJFY3NTU3h0UWtGQlR6dEJRVUZCTEd0Q1FVTm5ReXhMUVVGTFlpeExRVVJ5UXp0QlFVRkJMRkZCUTBkakxFMUJSRWdzVjBGRFIwRXNUVUZFU0R0QlFVRkJMRkZCUTFkRExFOUJSRmdzVjBGRFYwRXNUMEZFV0R0QlFVRkJMRkZCUTI5Q1NpeFBRVVJ3UWl4WFFVTnZRa0VzVDBGRWNFSTdPenRCUVVkTUxGRkJRVWtzUTBGQlEwRXNUMEZCVEN4RlFVRmpPMEZCUTFvc1YwRkJTME1zVTBGQlRDeEhRVUZwUWl4TFFVRnFRanRCUVVOQkxEQkRRVUZ2UWl4TFFVRkxXQ3hsUVVGNlFqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1MwRkJTMkVzVFVGQlZDeEZRVUZwUWl4TFFVRkxRU3hOUVVGTU8wRkJRMnBDTEZGQlFVbEJMRTFCUVVvc1JVRkJXVUVzVDBGQlR5eEpRVUZRTzBGQlExb3NVVUZCU1VNc1QwRkJTaXhGUVVGaFFTeFJRVUZSTEVsQlFWSTdPMEZCUldJc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN2JVSkJSVVJETEZFc2RVSkJRVmM3UVVGQlFTeHJRa0ZETWtJc1MwRkJTMmhDTEV0QlJHaERPMEZCUVVFc1VVRkRSR2xDTEZWQlJFTXNWMEZEUkVFc1ZVRkVRenRCUVVGQkxGRkJRMWRETEZkQlJGZ3NWMEZEVjBFc1YwRkVXRHM3TzBGQlIxUXNVMEZCUzB3c1NVRkJURHM3UVVGRlFTeFJRVUZKTEV0QlFVdEpMRlZCUVZRc1JVRkJjVUlzUzBGQlMwRXNWVUZCVER0QlFVTnlRaXhSUVVGSlFTeFZRVUZLTEVWQlFXZENRU3hYUVVGWExFbEJRVmc3UVVGRGFFSXNVVUZCU1VNc1YwRkJTaXhGUVVGcFFrRXNXVUZCV1N4SlFVRmFPenRCUVVWcVFpeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkdwQ0xHVXNPRUpCUVd0Q08wRkJRMmhDTEZOQlFVdHJRaXhYUVVGTUxFZEJRVzFDTEc5RFFVRnVRanRCUVVOQkxGTkJRVXRETEVsQlFVd3NSMEZCV1N4TFFVRkxaQ3hQUVVGcVFqczdRVUZHWjBJc2EwSkJTV01zUzBGQlMwNHNTMEZLYmtJN1FVRkJRU3hSUVVsU2NVSXNVVUZLVVN4WFFVbFNRU3hSUVVwUk8wRkJRVUVzVVVGSlJWWXNUMEZLUml4WFFVbEZRU3hQUVVwR096czdRVUZOYUVJc1VVRkJTU3hMUVVGTFZ5eE5RVUZVTEVWQlFXbENPMEZCUTJZc1YwRkJTMmhDTEU5QlFVd3NSMEZCWlN4TFFVRkxaMElzVFVGQlRDeERRVUZaTEV0QlFVdG9RaXhQUVVGcVFpeERRVUZtTzBGQlEwUTdPMEZCUlVRc1VVRkJTV1VzVVVGQlNpeEZRVUZqUVN4VFFVRlRMRXRCUVV0bUxFOUJRV1FzUlVGQmRVSXNTVUZCZGtJN1FVRkRaQ3hUUVVGTGFVSXNZVUZCVERzN1FVRkZRU3hSUVVGSkxFTkJRVU5hTEU5QlFVUXNTVUZCV1N4TFFVRkxReXhUUVVGeVFpeEZRVUZuUXp0QlFVTTVRaXh2UTBGQll5eExRVUZMV0N4bFFVRnVRanRCUVVORU96dEJRVVZFTEZGQlFVa3NTMEZCUzNWQ0xHZENRVUZNTEVsQlFYbENMRXRCUVV0QkxHZENRVUZNTEVWQlFUZENMRVZCUVhORU8wRkJRM0JFTEZkQlFVdFNMRkZCUVV3N1FVRkRSRHM3UVVGRlJDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkZnc1VTeHhRa0ZCVTB3c1N5eEZRVUZQTzBGQlEyUXNVMEZCUzBFc1MwRkJUQ3huUWtGRFN5eExRVUZMUVN4TFFVUldMRVZCUlV0QkxFdEJSa3c3UVVGSlFTeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkhsQ0xFMHNiVUpCUVU5RExFa3NSVUZCVFR0QlFVTllMRk5CUVVzeFFpeExRVUZNTEVOQlFWZHhRaXhSUVVGWUxFZEJRWE5DU3l4SlFVRjBRanRCUVVOQkxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08yMUNRVVZFUXl4SExHdENRVUZOTzBGQlEwb3NWMEZCVHl4TFFVRkxja0lzVDBGQldqdEJRVU5FTEVjN08yMUNRVVZFYzBJc1J5eG5Ra0ZCU1VNc1F5eEZRVUZITzBGQlEwd3NVMEZCUzNaQ0xFOUJRVXdzUjBGQlpYVkNMRU5CUVdZN1FVRkRRU3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJFTXNUeXh2UWtGQlVVTXNSeXhGUVVGTE8wRkJRMWdzVjBGQlR5eExRVUZMTDBJc1MwRkJUQ3hEUVVGWEswSXNSMEZCV0N4RFFVRlFPMEZCUTBRc1J6czdiVUpCUlVSRExGY3NNRUpCUVdNN1FVRkRXaXhYUVVGUExEQkNRVUZsTEV0QlFVc3hRaXhQUVVGTUxFZEJRV1VzUzBGQlMyTXNTVUZCYmtNc1JVRkJlVU1zUzBGQlMwUXNWMEZCT1VNc1EwRkJVRHRCUVVORUxFYzdPMjFDUVVWRVl5eFJMSFZDUVVGWE8wRkJRMVFzVjBGQlR5eExRVUZMY2tJc1UwRkJXanRCUVVORUxFYzdPMjFDUVVWRWMwSXNWeXgzUWtGQldVTXNVU3hGUVVGVk8wRkJRM0JDTEZOQlFVdERMRk5CUVV3c1IwRkJhVUlzUzBGQlMwRXNVMEZCVEN4SlFVRnJRaXhGUVVGdVF6dEJRVU5CTEZOQlFVdERMRmxCUVV3c1IwRkJiMElzUzBGQlMwRXNXVUZCVEN4SlFVRnhRaXhEUVVGNlF6dEJRVU5CTEZGQlFVa3NTMEZCUzBRc1UwRkJUQ3hEUVVGbFJTeFBRVUZtTEVOQlFYVkNTQ3hSUVVGMlFpeE5RVUZ4UXl4RFFVRkRMRU5CUVRGRExFVkJRVFpETzBGQlF6TkRMRmRCUVV0RExGTkJRVXdzUTBGQlpVY3NTVUZCWml4RFFVRnZRa29zVVVGQmNFSTdRVUZEUVN4WFFVRkxSU3haUVVGTU8wRkJRMFE3UVVGRFJDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkVjc1l5d3lRa0ZCWlV3c1VTeEZRVUZWTzBGQlEzWkNMRkZCUVUxTkxHZENRVUZwUWl4TFFVRkxUQ3hUUVVGT0xFZEJRVzFDTEV0QlFVdEJMRk5CUVV3c1EwRkJaVVVzVDBGQlppeERRVUYxUWtnc1VVRkJka0lzUTBGQmJrSXNSMEZCYzBRc1EwRkJReXhEUVVFM1JUdEJRVU5CTEZGQlFVbE5MR3RDUVVGclFpeERRVUZETEVOQlFYWkNMRVZCUVRCQ08wRkJRM2hDTEZkQlFVdEtMRmxCUVV3N1FVRkRRU3hYUVVGTFJDeFRRVUZNTEVOQlFXVk5MRTFCUVdZc1EwRkJjMEpFTEdGQlFYUkNMRVZCUVhGRExFTkJRWEpETzBGQlEwUTdRVUZEUkN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSR3hDTEdFc05FSkJRV2RDTzBGQlEyUXNVVUZCVFdwQ0xGVkJRVlVzUzBGQlMzRkNMRWRCUVV3c1JVRkJhRUk3UVVGRFFTeFRRVUZMTEVsQlFVbG5RaXhKUVVGSkxFTkJRV0lzUlVGQlowSkJMRWxCUVVrc1MwRkJTMDRzV1VGQmVrSXNSVUZCZFVOTkxFZEJRWFpETEVWQlFUUkRPMEZCUXpGRExGZEJRVXRRTEZOQlFVd3NRMEZCWlU4c1EwRkJaaXhGUVVGclFuSkRMRTlCUVd4Q0xFVkJRVEpDTEVsQlFUTkNPMEZCUTBRN1FVRkRSQ3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenM3T3p0clFrRkhXVkFzVFNJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0Z5Y3k1b1lXeHNMMUJ5YjJwbFkzUnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUc5dVJuSmhiV1ZWY0dSaGRHVXNJR05oYm1ObGJFOXVSbkpoYldWVmNHUmhkR1VzSUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVwYlhCdmNuUWdleUJ6Y0dWbFpGQmxjbE5sWTI5dVpDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYmx4dVkyeGhjM01nUVdOMGFXOXVJSHNnTHk4Z2JHRjNjM1ZwZENBdElITnZjbko1WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ2RHaHBjeTV6WTJobFpIVnNaV1JWY0dSaGRHVWdQU0IwYUdsekxuTmphR1ZrZFd4bFpGVndaR0YwWlM1aWFXNWtLSFJvYVhNcE8xeHVYRzRnSUNBZ2RHaHBjeTV3Y205d2N5QTlJSHRjYmlBZ0lDQWdJQzR1TG5Sb2FYTXVZMjl1YzNSeWRXTjBiM0l1WkdWbVlYVnNkRkJ5YjNCelhHNGdJQ0FnZlR0Y2JseHVJQ0FnSUhSb2FYTXVjMlYwVUhKdmNITW9jSEp2Y0hNcE8xeHVYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJRDBnY0hKdmNITXVZM1Z5Y21WdWRDQjhmQ0J3Y205d2N5NW1jbTl0SUh4OElEQTdYRzRnSUgxY2JseHVJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHOXVVM1JoY25Rc0lGOXZibE4wWVhKMExDQndZWE56YVhabElIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tDRndZWE56YVhabEtTQjdYRzRnSUNBZ0lDQjBhR2x6TGw5cGMwRmpkR2wyWlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0J2YmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11YzJOb1pXUjFiR1ZrVlhCa1lYUmxLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NXZibE4wWVhKMEtTQjBhR2x6TG05dVUzUmhjblFvS1R0Y2JpQWdJQ0JwWmlBb2IyNVRkR0Z5ZENrZ2IyNVRkR0Z5ZENoMGFHbHpLVHRjYmlBZ0lDQnBaaUFvWDI5dVUzUmhjblFwSUY5dmJsTjBZWEowS0hSb2FYTXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCemRHOXdLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2diMjVUZEc5d0xDQmZiMjVUZEc5d0xDQndZWE56YVhabElIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tDRndZWE56YVhabEtTQjdYRzRnSUNBZ0lDQjBhR2x6TGw5cGMwRmpkR2wyWlNBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlNoMGFHbHpMbk5qYUdWa2RXeGxaRlZ3WkdGMFpTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWIyNVRkRzl3S1NCMGFHbHpMbTl1VTNSdmNDZ3BPMXh1SUNBZ0lHbG1JQ2h2YmxOMGIzQXBJRzl1VTNSdmNDaDBhR2x6S1R0Y2JpQWdJQ0JwWmlBb1gyOXVVM1J2Y0NrZ1gyOXVVM1J2Y0NoMGFHbHpLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ1kyOXRjR3hsZEdVb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCdmJrTnZiWEJzWlhSbExDQmZiMjVEYjIxd2JHVjBaU0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNibHh1SUNBZ0lIUm9hWE11YzNSdmNDZ3BPMXh1WEc0Z0lDQWdhV1lnS0hSb2FYTXViMjVEYjIxd2JHVjBaU2tnZEdocGN5NXZia052YlhCc1pYUmxLQ2s3WEc0Z0lDQWdhV1lnS0c5dVEyOXRjR3hsZEdVcElHOXVRMjl0Y0d4bGRHVW9kR2hwY3lrN1hHNGdJQ0FnYVdZZ0tGOXZia052YlhCc1pYUmxLU0JmYjI1RGIyMXdiR1YwWlNoMGFHbHpLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2MyTm9aV1IxYkdWa1ZYQmtZWFJsS0NrZ2UxeHVJQ0FnSUhSb2FYTXViR0Z6ZEZWd1pHRjBaV1FnUFNCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVb0tUdGNiaUFnSUNCMGFHbHpMbkJ5WlhZZ1BTQjBhR2x6TG1OMWNuSmxiblE3WEc1Y2JpQWdJQ0JqYjI1emRDQjdJRzl1VlhCa1lYUmxMQ0J3WVhOemFYWmxJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWRYQmtZWFJsS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbU4xY25KbGJuUWdQU0IwYUdsekxuVndaR0YwWlNoMGFHbHpMbU4xY25KbGJuUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2h2YmxWd1pHRjBaU2tnYjI1VmNHUmhkR1VvZEdocGN5NWpkWEp5Wlc1MExDQjBhR2x6S1R0Y2JpQWdJQ0IwYUdsekxtWnBjbVZNYVhOMFpXNWxjbk1vS1R0Y2JseHVJQ0FnSUdsbUlDZ2hjR0Z6YzJsMlpTQW1KaUIwYUdsekxsOXBjMEZqZEdsMlpTa2dlMXh1SUNBZ0lDQWdiMjVHY21GdFpWVndaR0YwWlNoMGFHbHpMbk5qYUdWa2RXeGxaRlZ3WkdGMFpTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWFYTkJZM1JwYjI1RGIyMXdiR1YwWlNBbUppQjBhR2x6TG1selFXTjBhVzl1UTI5dGNHeGxkR1VvS1NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVqYjIxd2JHVjBaU2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2MyVjBVSEp2Y0hNb2NISnZjSE1wSUh0Y2JpQWdJQ0IwYUdsekxuQnliM0J6SUQwZ2UxeHVJQ0FnSUNBZ0xpNHVkR2hwY3k1d2NtOXdjeXhjYmlBZ0lDQWdJQzR1TG5CeWIzQnpYRzRnSUNBZ2ZUdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJRzkxZEhCMWRDaG1kVzVqS1NCN1hHNGdJQ0FnZEdocGN5NXdjbTl3Y3k1dmJsVndaR0YwWlNBOUlHWjFibU03WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCblpYUW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WTNWeWNtVnVkRHRjYmlBZ2ZWeHVYRzRnSUhObGRDaDJLU0I3WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwSUQwZ2RqdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJR2RsZEZCeWIzQW9hMlY1S1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWNISnZjSE5iYTJWNVhUdGNiaUFnZlZ4dVhHNGdJR2RsZEZabGJHOWphWFI1S0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ6Y0dWbFpGQmxjbE5sWTI5dVpDaDBhR2x6TG1OMWNuSmxiblFnTFNCMGFHbHpMbkJ5WlhZc0lIUm9hWE11YkdGemRGVndaR0YwWldRcE8xeHVJQ0I5WEc1Y2JpQWdhWE5CWTNScGRtVW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDJselFXTjBhWFpsTzF4dUlDQjlYRzVjYmlBZ1lXUmtUR2x6ZEdWdVpYSW9iR2x6ZEdWdVpYSXBJSHRjYmlBZ0lDQjBhR2x6TG14cGMzUmxibVZ5Y3lBOUlIUm9hWE11YkdsemRHVnVaWEp6SUh4OElGdGRPMXh1SUNBZ0lIUm9hWE11Ym5WdFRHbHpkR1Z1WlhKeklEMGdkR2hwY3k1dWRXMU1hWE4wWlc1bGNuTWdmSHdnTUR0Y2JpQWdJQ0JwWmlBb2RHaHBjeTVzYVhOMFpXNWxjbk11YVc1a1pYaFBaaWhzYVhOMFpXNWxjaWtnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteHBjM1JsYm1WeWN5NXdkWE5vS0d4cGMzUmxibVZ5S1R0Y2JpQWdJQ0FnSUhSb2FYTXViblZ0VEdsemRHVnVaWEp6S3lzN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2NtVnRiM1psVEdsemRHVnVaWElvYkdsemRHVnVaWElwSUh0Y2JpQWdJQ0JqYjI1emRDQnNhWE4wWlc1bGNrbHVaR1Y0SUQwZ0tIUm9hWE11YkdsemRHVnVaWEp6S1NBL0lIUm9hWE11YkdsemRHVnVaWEp6TG1sdVpHVjRUMllvYkdsemRHVnVaWElwSURvZ0xURTdYRzRnSUNBZ2FXWWdLR3hwYzNSbGJtVnlTVzVrWlhnZ0lUMDlJQzB4S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbTUxYlV4cGMzUmxibVZ5Y3kwdE8xeHVJQ0FnSUNBZ2RHaHBjeTVzYVhOMFpXNWxjbk11YzNCc2FXTmxLR3hwYzNSbGJtVnlTVzVrWlhnc0lERXBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJR1pwY21WTWFYTjBaVzVsY25Nb0tTQjdYRzRnSUNBZ1kyOXVjM1FnWTNWeWNtVnVkQ0E5SUhSb2FYTXVaMlYwS0NrN1hHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbTUxYlV4cGMzUmxibVZ5Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteHBjM1JsYm1WeWMxdHBYU2hqZFhKeVpXNTBMQ0IwYUdsektUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1FXTjBhVzl1TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVuZGVyZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuZGVyZXIpO1xuXG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcywgcHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMuY2hhbmdlZFZhbHVlcyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IHN0YXRlLlxuICAgKiBJZiBga2V5YCBpcyBub3QgZGVmaW5lZCwgcmV0dXJuIGVudGlyZSBjYWNoZWQgc3RhdGUuXG4gICAqIElmIGBrZXlgIGlzIGRlZmluZWQsIHJldHVybiBjYWNoZWQgdmFsdWUgaWYgcHJlc2VudC5cbiAgICogSWYgYGtleWAgaXMgZGVmaW5lZCBhbmQgY2FjaGVkIHZhbHVlIGlzIG5vdCBwcmVzZW50LCByZWFkIGFuZCByZXR1cm4uXG4gICAqIEBwYXJhbSAge3N0cmluZ30gKG9wdGlvbmFsKSBrZXkgb2YgdmFsdWVcbiAgICogQHJldHVybiB7dmFsdWV9XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQoa2V5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZWFkIHZhbHVlIGFjY29yZGluZyB0byBgb25SZWFkYFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IE5hbWUgb2YgcHJvcGVydHkgdG8gcmVhZFxuICAgKiBAcmV0dXJuIHtbdHlwZV19XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiByZWFkKGtleSkge1xuICAgIGlmICh0aGlzLm9uUmVhZCkge1xuICAgICAgcmV0dXJuIHRoaXMub25SZWFkKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgYHN0YXRlYCB3aXRoIG5ldyB2YWx1ZXMgYW5kIHNjaGVkdWxlIGByZW5kZXJgLlxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzXG4gICAqIEBwYXJhbSB7dmFsdWV9IHZhbHVlIHRvc2V0XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgdmFsdWVzID0gYXJnc1swXTtcbiAgICAgIC8vIFNldCBtdWx0aXBsZSB2YWx1ZXNcblxuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICB0aGlzLnNldFZhbHVlKGtleSwgdmFsdWVzW2tleV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2tleTIgPSBhcmdzWzBdLFxuICAgICAgICAgIHZhbHVlID0gYXJnc1sxXTtcblxuICAgICAgdGhpcy5zZXRWYWx1ZShfa2V5MiwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVSZW5kZXIpKHRoaXMucmVuZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyA+IFdpbGV5IC0gNiBpbiB0aGUgTW9ybmluZ1xuICAvKipcbiAgICogU2V0IGEgc2luZ2xlIHZhbHVlXG4gICAqIElmIGEgc3RyaW5nIG9yIG51bWJlciwgc2V0IGRpcmVjdGx5LlxuICAgKiBJZiBhbiBvYmplY3Qgb3IgYXJyYXksIGNyZWF0ZSBuZXcgb2JqZWN0IG9yIGFycmF5XG4gICAqIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC4gVGhlbiBzaGFsbG93IGNvbXBhcmVcbiAgICogdG8gc2V0IGFuZCBjb21wYXJlIGluZGl2aWR1YWwgdmFsdWVzLlxuICAgKiBPbmUgb2YgdGhlIGNsZWFyZXIgZHJhd2JhY2tzIGFuZCBhbm5veWFuY2VzIHdpdGhcbiAgICogdXNpbmcgbXV0YWJsZSBpbnN0ZWFkIG9mIGltbXV0YWJsZSBzdGF0ZXMuXG4gICAqIEBwYXJhbSB7W3R5cGVdfSBrZXlcbiAgICogQHBhcmFtIHtbdHlwZV19IHZhbHVlXG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gc2V0VmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSB0aGlzLnN0YXRlW2tleV07XG5cbiAgICAvLyBJZiBudW1iZXIgb3Igc3RyaW5nLCBzZXQgZGlyZWN0bHlcbiAgICBpZiAoKDAsIF91dGlscy5pc051bSkodmFsdWUpIHx8ICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlKSkge1xuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLmlzQXJyYXkpKHZhbHVlKSkge1xuICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gW107XG4gICAgICB9XG5cbiAgICAgIHZhciBudW1WYWx1ZXMgPSB2YWx1ZS5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVZhbHVlczsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV1baV0gIT09IHZhbHVlW2ldKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldW2ldID0gdmFsdWVbaV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc09iaikodmFsdWUpKSB7XG4gICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgdmFsdWVLZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gIT09IHZhbHVlW3ZhbHVlS2V5XSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gPSB2YWx1ZVt2YWx1ZUtleV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5wdXNoKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBGaXJlcyBgb25SZW5kZXJgIGlmIHZhbHVlcyBoYXZlIGNoYW5nZWQgb3IgYGZvcmNlUmVuZGVyYFxuICAgKiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBmb3JjZVJlbmRlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICBpZiAoKGZvcmNlUmVuZGVyIHx8IHRoaXMuaGFzQ2hhbmdlZCkgJiYgdGhpcy5vblJlbmRlcikge1xuICAgICAgdGhpcy5vblJlbmRlcigpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIFJlbmRlcmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2xzaVVtVnVaR1Z5WlhJaUxDSndjbTl3Y3lJc0luSmxibVJsY2lJc0ltSnBibVFpTENKamIyNXpkSEoxWTNSdmNpSXNJbVJsWm1GMWJIUlFjbTl3Y3lJc0luTjBZWFJsSWl3aVkyaGhibWRsWkZaaGJIVmxjeUlzSW1kbGRDSXNJbXRsZVNJc0luVnVaR1ZtYVc1bFpDSXNJbkpsWVdRaUxDSnZibEpsWVdRaUxDSnpaWFFpTENKaGNtZHpJaXdpZG1Gc2RXVnpJaXdpYzJWMFZtRnNkV1VpTENKMllXeDFaU0lzSW1oaGMwTm9ZVzVuWldRaUxDSmpkWEp5Wlc1MFZtRnNkV1VpTENKdWRXMVdZV3gxWlhNaUxDSnNaVzVuZEdnaUxDSnBJaXdpZG1Gc2RXVkxaWGtpTENKd2RYTm9JaXdpWm05eVkyVlNaVzVrWlhJaUxDSnZibEpsYm1SbGNpSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVVFN08wRkJRMEU3T3pzN1NVRkZUVUVzVVR0QlFVTktMRzlDUVVGWlF5eExRVUZhTEVWQlFXMUNPMEZCUVVFN08wRkJRMnBDTEZOQlFVdERMRTFCUVV3c1IwRkJZeXhMUVVGTFFTeE5RVUZNTEVOQlFWbERMRWxCUVZvc1EwRkJhVUlzU1VGQmFrSXNRMEZCWkRzN1FVRkZRU3hUUVVGTFJpeExRVUZNTEdkQ1FVTkxMRXRCUVV0SExGZEJRVXdzUTBGQmFVSkRMRmxCUkhSQ0xFVkJSVXRLTEV0QlJrdzdPMEZCUzBFc1UwRkJTMHNzUzBGQlRDeEhRVUZoTEVWQlFXSTdRVUZEUVN4VFFVRkxReXhoUVVGTUxFZEJRWEZDTEVWQlFYSkNPMEZCUTBRN08wRkJSVVE3T3pzN096czdPenM3Y1VKQlVVRkRMRWNzWjBKQlFVbERMRWNzUlVGQlN6dEJRVU5RTEZGQlFVbEJMRWRCUVVvc1JVRkJVenRCUVVOUUxGVkJRVWtzUzBGQlMwZ3NTMEZCVEN4RFFVRlhSeXhIUVVGWUxFMUJRVzlDUXl4VFFVRjRRaXhGUVVGdFF6dEJRVU5xUXl4bFFVRlBMRXRCUVV0S0xFdEJRVXdzUTBGQlYwY3NSMEZCV0N4RFFVRlFPMEZCUTBRc1QwRkdSQ3hOUVVWUE8wRkJRMHdzWlVGQlR5eExRVUZMUlN4SlFVRk1MRU5CUVZWR0xFZEJRVllzUTBGQlVEdEJRVU5FTzBGQlEwWXNTMEZPUkN4TlFVMVBPMEZCUTB3c1lVRkJUeXhMUVVGTFNDeExRVUZhTzBGQlEwUTdRVUZEUml4SE96dEJRVVZFT3pzN096czdPM0ZDUVV0QlN5eEpMR2xDUVVGTFJpeEhMRVZCUVVzN1FVRkRVaXhSUVVGSkxFdEJRVXRITEUxQlFWUXNSVUZCYVVJN1FVRkRaaXhoUVVGUExFdEJRVXRCTEUxQlFVd3NRMEZCV1Vnc1IwRkJXaXhEUVVGUU8wRkJRMFE3UVVGRFJpeEhPenRCUVVWRU96czdPenM3TzNGQ1FVdEJTU3hITEd0Q1FVRmhPMEZCUVVFc2MwTkJRVTVETEVsQlFVMDdRVUZCVGtFc1ZVRkJUVHRCUVVGQk96dEJRVU5ZTEZGQlFVa3NUMEZCVDBFc1MwRkJTeXhEUVVGTUxFTkJRVkFzUzBGQmJVSXNWMEZCZGtJc1JVRkJiME03UVVGQlFTeFZRVU14UWtNc1RVRkVNRUlzUjBGRFprUXNTVUZFWlR0QlFVVnNRenM3UVVGRFFTeFhRVUZMTEVsQlFVMU1MRWRCUVZnc1NVRkJhMEpOTEUxQlFXeENMRVZCUVRCQ08wRkJRM2hDTEdGQlFVdERMRkZCUVV3c1EwRkJZMUFzUjBGQlpDeEZRVUZ0UWswc1QwRkJUMDRzUjBGQlVDeERRVUZ1UWp0QlFVTkVPMEZCUTBZc1MwRk9SQ3hOUVUxUE8wRkJRVUVzVlVGRFIwRXNTMEZFU0N4SFFVTnJRa3NzU1VGRWJFSTdRVUZCUVN4VlFVTlJSeXhMUVVSU0xFZEJRMnRDU0N4SlFVUnNRanM3UVVGRlRDeFhRVUZMUlN4UlFVRk1MRU5CUVdOUUxFdEJRV1FzUlVGQmJVSlJMRXRCUVc1Q08wRkJRMFE3TzBGQlJVUXNVVUZCU1N4TFFVRkxReXhWUVVGVUxFVkJRWEZDTzBGQlEyNUNMRzlEUVVGakxFdEJRVXRvUWl4TlFVRnVRanRCUVVORU96dEJRVVZFTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzBGQlJVUTdRVUZEUVRzN096czdPenM3T3pzN096dHhRa0ZYUVdNc1VTeHhRa0ZCVTFBc1J5eEZRVUZMVVN4TExFVkJRVTg3UVVGRGJrSXNVVUZCVFVVc1pVRkJaU3hMUVVGTFlpeExRVUZNTEVOQlFWZEhMRWRCUVZnc1EwRkJja0k3TzBGQlJVRTdRVUZEUVN4UlFVRkpMR3RDUVVGTlVTeExRVUZPTEV0QlFXZENMSEZDUVVGVFFTeExRVUZVTEVOQlFYQkNMRVZCUVhGRE8wRkJRMjVETEZWQlFVbEZMR2xDUVVGcFFrWXNTMEZCY2tJc1JVRkJORUk3UVVGRE1VSXNZVUZCUzFnc1MwRkJUQ3hEUVVGWFJ5eEhRVUZZTEVsQlFXdENVU3hMUVVGc1FqdEJRVU5CTEdGQlFVdERMRlZCUVV3c1IwRkJhMElzU1VGQmJFSTdRVUZEUkR0QlFVTkdMRXRCVEVRc1RVRkxUeXhKUVVGSkxHOUNRVUZSUkN4TFFVRlNMRU5CUVVvc1JVRkJiMEk3UVVGRGVrSXNWVUZCU1N4RFFVRkRSU3haUVVGTUxFVkJRVzFDTzBGQlEycENMR0ZCUVV0aUxFdEJRVXdzUTBGQlYwY3NSMEZCV0N4SlFVRnJRaXhGUVVGc1FqdEJRVU5FT3p0QlFVVkVMRlZCUVUxWExGbEJRVmxJTEUxQlFVMUpMRTFCUVhoQ08wRkJRMEVzVjBGQlN5eEpRVUZKUXl4SlFVRkpMRU5CUVdJc1JVRkJaMEpCTEVsQlFVbEdMRk5CUVhCQ0xFVkJRU3RDUlN4SFFVRXZRaXhGUVVGdlF6dEJRVU5zUXl4WlFVRkpMRXRCUVV0b1FpeExRVUZNTEVOQlFWZEhMRWRCUVZnc1JVRkJaMEpoTEVOQlFXaENMRTFCUVhWQ1RDeE5RVUZOU3l4RFFVRk9MRU5CUVROQ0xFVkJRWEZETzBGQlEyNURMR1ZCUVV0b1FpeExRVUZNTEVOQlFWZEhMRWRCUVZnc1JVRkJaMEpoTEVOQlFXaENMRWxCUVhGQ1RDeE5RVUZOU3l4RFFVRk9MRU5CUVhKQ08wRkJRMEVzWlVGQlMwb3NWVUZCVEN4SFFVRnJRaXhKUVVGc1FqdEJRVU5FTzBGQlEwWTdRVUZEUml4TFFWcE5MRTFCV1VFc1NVRkJTU3hyUWtGQlRVUXNTMEZCVGl4RFFVRktMRVZCUVd0Q08wRkJRM1pDTEZWQlFVa3NRMEZCUTBVc1dVRkJUQ3hGUVVGdFFqdEJRVU5xUWl4aFFVRkxZaXhMUVVGTUxFTkJRVmRITEVkQlFWZ3NTVUZCYTBJc1JVRkJiRUk3UVVGRFJEczdRVUZGUkN4WFFVRkxMRWxCUVVsakxGRkJRVlFzU1VGQmNVSk9MRXRCUVhKQ0xFVkJRVFJDTzBGQlF6RkNMRmxCUVVrc1MwRkJTMWdzUzBGQlRDeERRVUZYUnl4SFFVRllMRVZCUVdkQ1l5eFJRVUZvUWl4TlFVRTRRazRzVFVGQlRVMHNVVUZCVGl4RFFVRnNReXhGUVVGdFJEdEJRVU5xUkN4bFFVRkxha0lzUzBGQlRDeERRVUZYUnl4SFFVRllMRVZCUVdkQ1l5eFJRVUZvUWl4SlFVRTBRazRzVFVGQlRVMHNVVUZCVGl4RFFVRTFRanRCUVVOQkxHVkJRVXRNTEZWQlFVd3NSMEZCYTBJc1NVRkJiRUk3UVVGRFJEdEJRVU5HTzBGQlEwWTdPMEZCUlVRc1VVRkJTU3hMUVVGTFFTeFZRVUZVTEVWQlFYRkNPMEZCUTI1Q0xGZEJRVXRZTEdGQlFVd3NRMEZCYlVKcFFpeEpRVUZ1UWl4RFFVRjNRbVlzUjBGQmVFSTdRVUZEUkR0QlFVTkdMRWM3TzBGQlJVUTdPenM3T3pzN2NVSkJTMEZRTEUwc2NVSkJRVFJDTzBGQlFVRXNVVUZCY2tKMVFpeFhRVUZ4UWl4MVJVRkJVQ3hMUVVGUE96dEJRVU14UWl4UlFVRkpMRU5CUVVOQkxHVkJRV1VzUzBGQlMxQXNWVUZCY2tJc1MwRkJiME1zUzBGQlMxRXNVVUZCTjBNc1JVRkJkVVE3UVVGRGNrUXNWMEZCUzBFc1VVRkJURHRCUVVORU96dEJRVVZFTEZOQlFVdHVRaXhoUVVGTUxFTkJRVzFDWXl4TlFVRnVRaXhIUVVFMFFpeERRVUUxUWp0QlFVTkJMRk5CUVV0SUxGVkJRVXdzUjBGQmEwSXNTMEZCYkVJN08wRkJSVUVzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3T3pzN2EwSkJSMWxzUWl4Uklpd2labWxzWlNJNkltbHVaR1Y0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhKekxtaGhiR3d2VUhKdmFtVmpkSE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2IyNUdjbUZ0WlZKbGJtUmxjaUI5SUdaeWIyMGdKeTR1TDJaeVlXMWxjM2x1WXljN1hHNXBiWEJ2Y25RZ2V5QnBjMEZ5Y21GNUxDQnBjMDlpYWl3Z2FYTk9kVzBzSUdselUzUnlhVzVuSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTJ4aGMzTWdVbVZ1WkdWeVpYSWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVjbVZ1WkdWeUlEMGdkR2hwY3k1eVpXNWtaWEl1WW1sdVpDaDBhR2x6S1R0Y2JseHVJQ0FnSUhSb2FYTXVjSEp2Y0hNZ1BTQjdYRzRnSUNBZ0lDQXVMaTUwYUdsekxtTnZibk4wY25WamRHOXlMbVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUM0dUxuQnliM0J6WEc0Z0lDQWdmVHRjYmx4dUlDQWdJSFJvYVhNdWMzUmhkR1VnUFNCN2ZUdGNiaUFnSUNCMGFHbHpMbU5vWVc1blpXUldZV3gxWlhNZ1BTQmJYVHRjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCSFpYUWdZM1Z5Y21WdWRDQnpkR0YwWlM1Y2JpQWdJQ29nU1dZZ1lHdGxlV0FnYVhNZ2JtOTBJR1JsWm1sdVpXUXNJSEpsZEhWeWJpQmxiblJwY21VZ1kyRmphR1ZrSUhOMFlYUmxMbHh1SUNBZ0tpQkpaaUJnYTJWNVlDQnBjeUJrWldacGJtVmtMQ0J5WlhSMWNtNGdZMkZqYUdWa0lIWmhiSFZsSUdsbUlIQnlaWE5sYm5RdVhHNGdJQ0FxSUVsbUlHQnJaWGxnSUdseklHUmxabWx1WldRZ1lXNWtJR05oWTJobFpDQjJZV3gxWlNCcGN5QnViM1FnY0hKbGMyVnVkQ3dnY21WaFpDQmhibVFnY21WMGRYSnVMbHh1SUNBZ0tpQkFjR0Z5WVcwZ0lIdHpkSEpwYm1kOUlDaHZjSFJwYjI1aGJDa2dhMlY1SUc5bUlIWmhiSFZsWEc0Z0lDQXFJRUJ5WlhSMWNtNGdlM1poYkhWbGZWeHVJQ0FnS2k5Y2JpQWdaMlYwS0d0bGVTa2dlMXh1SUNBZ0lHbG1JQ2hyWlhrcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxuTjBZWFJsVzJ0bGVWMGdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV6ZEdGMFpWdHJaWGxkTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWNtVmhaQ2hyWlhrcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1emRHRjBaVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nVW1WaFpDQjJZV3gxWlNCaFkyTnZjbVJwYm1jZ2RHOGdZRzl1VW1WaFpHQmNiaUFnSUNvZ1FIQmhjbUZ0SUNCN2MzUnlhVzVuZlNCT1lXMWxJRzltSUhCeWIzQmxjblI1SUhSdklISmxZV1JjYmlBZ0lDb2dRSEpsZEhWeWJpQjdXM1I1Y0dWZGZWeHVJQ0FnS2k5Y2JpQWdjbVZoWkNoclpYa3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXZibEpsWVdRcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTl1VW1WaFpDaHJaWGtwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCVmNHUmhkR1VnWUhOMFlYUmxZQ0IzYVhSb0lHNWxkeUIyWVd4MVpYTWdZVzVrSUhOamFHVmtkV3hsSUdCeVpXNWtaWEpnTGx4dUlDQWdLaUJBY0dGeVlXMGdlMjlpYW1WamRIMGdkbUZzZFdWelhHNGdJQ0FxSUVCd1lYSmhiU0I3ZG1Gc2RXVjlJSFpoYkhWbElIUnZjMlYwWEc0Z0lDQXFMMXh1SUNCelpYUW9MaTR1WVhKbmN5a2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdZWEpuYzFzeFhTQTlQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBZ0lHTnZibk4wSUZzZ2RtRnNkV1Z6SUYwZ1BTQmhjbWR6TzF4dUlDQWdJQ0FnTHk4Z1UyVjBJRzExYkhScGNHeGxJSFpoYkhWbGMxeHVJQ0FnSUNBZ1ptOXlJQ2hqYjI1emRDQnJaWGtnYVc0Z2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJWMFZtRnNkV1VvYTJWNUxDQjJZV3gxWlhOYmEyVjVYU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHTnZibk4wSUZzZ2EyVjVMQ0IyWVd4MVpTQmRJRDBnWVhKbmN6dGNiaUFnSUNBZ0lIUm9hWE11YzJWMFZtRnNkV1VvYTJWNUxDQjJZV3gxWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YUdGelEyaGhibWRsWkNrZ2UxeHVJQ0FnSUNBZ2IyNUdjbUZ0WlZKbGJtUmxjaWgwYUdsekxuSmxibVJsY2lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQXZMeUErSUZkcGJHVjVJQzBnTmlCcGJpQjBhR1VnVFc5eWJtbHVaMXh1SUNBdktpcGNiaUFnSUNvZ1UyVjBJR0VnYzJsdVoyeGxJSFpoYkhWbFhHNGdJQ0FxSUVsbUlHRWdjM1J5YVc1bklHOXlJRzUxYldKbGNpd2djMlYwSUdScGNtVmpkR3g1TGx4dUlDQWdLaUJKWmlCaGJpQnZZbXBsWTNRZ2IzSWdZWEp5WVhrc0lHTnlaV0YwWlNCdVpYY2diMkpxWldOMElHOXlJR0Z5Y21GNVhHNGdJQ0FxSUdsbUlHbDBJR1J2WlhOdUozUWdZV3h5WldGa2VTQmxlR2x6ZEM0Z1ZHaGxiaUJ6YUdGc2JHOTNJR052YlhCaGNtVmNiaUFnSUNvZ2RHOGdjMlYwSUdGdVpDQmpiMjF3WVhKbElHbHVaR2wyYVdSMVlXd2dkbUZzZFdWekxseHVJQ0FnS2lCUGJtVWdiMllnZEdobElHTnNaV0Z5WlhJZ1pISmhkMkpoWTJ0eklHRnVaQ0JoYm01dmVXRnVZMlZ6SUhkcGRHaGNiaUFnSUNvZ2RYTnBibWNnYlhWMFlXSnNaU0JwYm5OMFpXRmtJRzltSUdsdGJYVjBZV0pzWlNCemRHRjBaWE11WEc0Z0lDQXFJRUJ3WVhKaGJTQjdXM1I1Y0dWZGZTQnJaWGxjYmlBZ0lDb2dRSEJoY21GdElIdGJkSGx3WlYxOUlIWmhiSFZsWEc0Z0lDQXFMMXh1SUNCelpYUldZV3gxWlNoclpYa3NJSFpoYkhWbEtTQjdYRzRnSUNBZ1kyOXVjM1FnWTNWeWNtVnVkRlpoYkhWbElEMGdkR2hwY3k1emRHRjBaVnRyWlhsZE8xeHVYRzRnSUNBZ0x5OGdTV1lnYm5WdFltVnlJRzl5SUhOMGNtbHVaeXdnYzJWMElHUnBjbVZqZEd4NVhHNGdJQ0FnYVdZZ0tHbHpUblZ0S0haaGJIVmxLU0I4ZkNCcGMxTjBjbWx1WnloMllXeDFaU2twSUh0Y2JpQWdJQ0FnSUdsbUlDaGpkWEp5Wlc1MFZtRnNkV1VnSVQwOUlIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFNBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhoYzBOb1lXNW5aV1FnUFNCMGNuVmxPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9hWE5CY25KaGVTaDJZV3gxWlNrcElIdGNiaUFnSUNBZ0lHbG1JQ2doWTNWeWNtVnVkRlpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1ZiYTJWNVhTQTlJRnRkTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCamIyNXpkQ0J1ZFcxV1lXeDFaWE1nUFNCMllXeDFaUzVzWlc1bmRHZzdYRzRnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlZaaGJIVmxjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbk4wWVhSbFcydGxlVjFiYVYwZ0lUMDlJSFpoYkhWbFcybGRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpWdHJaWGxkVzJsZElEMGdkbUZzZFdWYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9hWE5QWW1vb2RtRnNkV1VwS1NCN1hHNGdJQ0FnSUNCcFppQW9JV04xY25KbGJuUldZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYwZ1BTQjdmVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnWm05eUlDaHNaWFFnZG1Gc2RXVkxaWGtnYVc0Z2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWMzUmhkR1ZiYTJWNVhWdDJZV3gxWlV0bGVWMGdJVDA5SUhaaGJIVmxXM1poYkhWbFMyVjVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFZ0MllXeDFaVXRsZVYwZ1BTQjJZV3gxWlZ0MllXeDFaVXRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdkR2hwY3k1b1lYTkRhR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBhR2x6TG1oaGMwTm9ZVzVuWldRcElIdGNiaUFnSUNBZ0lIUm9hWE11WTJoaGJtZGxaRlpoYkhWbGN5NXdkWE5vS0d0bGVTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRVpwY21WeklHQnZibEpsYm1SbGNtQWdhV1lnZG1Gc2RXVnpJR2hoZG1VZ1kyaGhibWRsWkNCdmNpQmdabTl5WTJWU1pXNWtaWEpnWEc0Z0lDQXFJR2x6SUhObGRDQjBieUIwY25WbExseHVJQ0FnS2lCQWNtVjBkWEp1SUh0MGFHbHpmVnh1SUNBZ0tpOWNiaUFnY21WdVpHVnlLR1p2Y21ObFVtVnVaR1Z5SUQwZ1ptRnNjMlVwSUh0Y2JpQWdJQ0JwWmlBb0tHWnZjbU5sVW1WdVpHVnlJSHg4SUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ2tnSmlZZ2RHaHBjeTV2YmxKbGJtUmxjaWtnZTF4dUlDQWdJQ0FnZEdocGN5NXZibEpsYm1SbGNpZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIUm9hWE11WTJoaGJtZGxaRlpoYkhWbGN5NXNaVzVuZEdnZ1BTQXdPMXh1SUNBZ0lIUm9hWE11YUdGelEyaGhibWRsWkNBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1VtVnVaR1Z5WlhJN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDU1NSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudCxcbiAgICBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbjogdHJ1ZVxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9yZW5kZXIgPSByZXF1aXJlKCcuL3JlbmRlcicpO1xuXG52YXIgX3JlbmRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW5kZXIpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZXMpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ1NTUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhDU1NSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBDU1NSZW5kZXJlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ1NTUmVuZGVyZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENTU1JlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBlbGVtZW50ID0gX3Byb3BzLmVsZW1lbnQsXG4gICAgICAgIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uID0gX3Byb3BzLmVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uO1xuXG4gICAgKDAsIF9yZW5kZXIyLmRlZmF1bHQpKGVsZW1lbnQsIHRoaXMuc3RhdGUsIHRoaXMuY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pO1xuICB9O1xuXG4gIENTU1JlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgdmFyIHZhbHVlVHlwZSA9IF92YWx1ZVR5cGVzMi5kZWZhdWx0W2tleV07XG5cbiAgICBpZiAoIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgICAgdmFyIGRvbVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClbKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoa2V5KV0gfHwgMDtcbiAgICAgIHJldHVybiB2YWx1ZVR5cGUgJiYgdmFsdWVUeXBlLnBhcnNlID8gdmFsdWVUeXBlLnBhcnNlKGRvbVZhbHVlKSA6IGRvbVZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWVUeXBlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVR5cGUuZGVmYXVsdCB8fCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDU1NSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSW1Wc1pXMWxiblFpTENKd2NtOXdjeUlzSWtOVFUxSmxibVJsY21WeUlpd2laVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNGlMQ0p2YmxKbGJtUmxjaUlzSW5OMFlYUmxJaXdpWTJoaGJtZGxaRlpoYkhWbGN5SXNJbTl1VW1WaFpDSXNJbXRsZVNJc0luWmhiSFZsVkhsd1pTSXNJbVJ2YlZaaGJIVmxJaXdpZDJsdVpHOTNJaXdpWjJWMFEyOXRjSFYwWldSVGRIbHNaU0lzSW5CaGNuTmxJaXdpWkdWbVlYVnNkQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzJ0Q1FUWkNaU3hWUVVGVlFTeFBRVUZXTEVWQlFXMUNReXhMUVVGdVFpeEZRVUV3UWp0QlFVTjJReXhUUVVGUExFbEJRVWxETEZkQlFVbzdRVUZEVEVZc2IwSkJSRXM3UVVGRlRFY3NaME5CUVRSQ08wRkJSblpDTEV0QlIwWkdMRXRCU0VVc1JVRkJVRHRCUVV0RUxFTTdPMEZCYmtORU96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096czdPenM3T3p0SlFVVk5ReXhYT3pzN096czdPenM3ZDBKQlEwcEZMRkVzZFVKQlFWYzdRVUZCUVN4cFFrRkRkVU1zUzBGQlMwZ3NTMEZFTlVNN1FVRkJRU3hSUVVORVJDeFBRVVJETEZWQlEwUkJMRTlCUkVNN1FVRkJRU3hSUVVOUlJ5d3dRa0ZFVWl4VlFVTlJRU3d3UWtGRVVqczdRVUZGVkN3d1FrRkJWVWdzVDBGQlZpeEZRVUZ0UWl4TFFVRkxTeXhMUVVGNFFpeEZRVUVyUWl4TFFVRkxReXhoUVVGd1F5eEZRVUZ0UkVnc01FSkJRVzVFTzBGQlEwUXNSenM3ZDBKQlJVUkpMRTBzYlVKQlFVOURMRWNzUlVGQlN6dEJRVU5XTEZGQlFVMURMRmxCUVZrc2NVSkJRV05FTEVkQlFXUXNRMEZCYkVJN08wRkJSVUVzVVVGQlNTeERRVUZETEhsQ1FVRmxRU3hIUVVGbUxFTkJRVXdzUlVGQk1FSTdRVUZCUVN4VlFVTm9RbElzVDBGRVowSXNSMEZEU2l4TFFVRkxReXhMUVVSRUxFTkJRMmhDUkN4UFFVUm5RanM3UVVGRmVFSXNWVUZCVFZVc1YwRkJWME1zVDBGQlQwTXNaMEpCUVZBc1EwRkJkMEphTEU5QlFYaENMRVZCUVdsRExFbEJRV3BETEVWQlFYVkRMSGRDUVVGVFVTeEhRVUZVTEVOQlFYWkRMRXRCUVhsRUxFTkJRVEZGTzBGQlEwRXNZVUZCVVVNc1lVRkJZVUVzVlVGQlZVa3NTMEZCZUVJc1IwRkJhVU5LTEZWQlFWVkpMRXRCUVZZc1EwRkJaMEpJTEZGQlFXaENMRU5CUVdwRExFZEJRVFpFUVN4UlFVRndSVHRCUVVORUxFdEJTa1FzVFVGSlR6dEJRVU5NTEZWQlFVbEVMRk5CUVVvc1JVRkJaVHRCUVVOaUxHVkJRVTlCTEZWQlFWVkxMRTlCUVZZc1NVRkJjVUlzUTBGQk5VSTdRVUZEUkN4UFFVWkVMRTFCUlU4N1FVRkRUQ3hsUVVGUExFTkJRVkE3UVVGRFJEdEJRVU5HTzBGQlEwWXNSeUlzSW1acGJHVWlPaUpwYm1SbGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRnljeTVvWVd4c0wxQnliMnBsWTNSekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlNaVzVrWlhKbGNpQm1jbTl0SUNjdUxpOG5PMXh1YVcxd2IzSjBJSEpsYm1SbGNrTlRVeUJtY205dElDY3VMM0psYm1SbGNpYzdYRzVwYlhCdmNuUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1puSnZiU0FuTGk5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUhaaGJIVmxWSGx3WlhOTllYQWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeWM3WEc1cGJYQnZjblFnY0hKbFptbDRaWElnWm5KdmJTQW5MaTl3Y21WbWFYaGxjaWM3WEc1Y2JtTnNZWE56SUVOVFUxSmxibVJsY21WeUlHVjRkR1Z1WkhNZ1VtVnVaR1Z5WlhJZ2UxeHVJQ0J2YmxKbGJtUmxjaWdwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1ZzWlcxbGJuUXNJR1Z1WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUhKbGJtUmxja05UVXlobGJHVnRaVzUwTENCMGFHbHpMbk4wWVhSbExDQjBhR2x6TG1Ob1lXNW5aV1JXWVd4MVpYTXNJR1Z1WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVLVHRjYmlBZ2ZWeHVYRzRnSUc5dVVtVmhaQ2hyWlhrcElIdGNiaUFnSUNCamIyNXpkQ0IyWVd4MVpWUjVjR1VnUFNCMllXeDFaVlI1Y0dWelRXRndXMnRsZVYwN1hHNWNiaUFnSUNCcFppQW9JWFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSHNnWld4bGJXVnVkQ0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNBZ0lHTnZibk4wSUdSdmJWWmhiSFZsSUQwZ2QybHVaRzkzTG1kbGRFTnZiWEIxZEdWa1UzUjViR1VvWld4bGJXVnVkQ3dnYm5Wc2JDbGJjSEpsWm1sNFpYSW9hMlY1S1YwZ2ZId2dNRHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW9kbUZzZFdWVWVYQmxJQ1ltSUhaaGJIVmxWSGx3WlM1d1lYSnpaU2tnUHlCMllXeDFaVlI1Y0dVdWNHRnljMlVvWkc5dFZtRnNkV1VwSURvZ1pHOXRWbUZzZFdVN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR2xtSUNoMllXeDFaVlI1Y0dVcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsVkhsd1pTNWtaV1poZFd4MElIeDhJREE3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdLR1ZzWlcxbGJuUXNJSEJ5YjNCektTQjdYRzRnSUhKbGRIVnliaUJ1WlhjZ1ExTlRVbVZ1WkdWeVpYSW9lMXh1SUNBZ0lHVnNaVzFsYm5Rc1hHNGdJQ0FnWlc1aFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjQ2SUhSeWRXVXNYRzRnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdmU2s3WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgU1ZHUmVuZGVyZXIoX2V4dGVuZHMoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU1ZHUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhTVkdSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBTVkdSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTVkdSZW5kZXJlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVuZGVyZXIuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgdmFyIF9wcm9wcyRlbGVtZW50JGdldEJCbyA9IHByb3BzLmVsZW1lbnQuZ2V0QkJveCgpLFxuICAgICAgICB4ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLngsXG4gICAgICAgIHkgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueSxcbiAgICAgICAgd2lkdGggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby5oZWlnaHQ7XG5cbiAgICBfdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHsgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFNWR1JlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgdmFyIGF0dHJzID0gKDAsIF9idWlsZDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgdGhpcy5lbGVtZW50RGltZW5zaW9ucyk7XG4gICAgKDAsIF91dGlscy5zZXRET01BdHRycykoZWxlbWVudCwgYXR0cnMpO1xuICB9O1xuXG4gIFNWR1JlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cblxuICAgIGlmICghX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmFsdWVUeXBlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRba2V5XTtcbiAgICAgIHJldHVybiB2YWx1ZVR5cGUgPyB2YWx1ZVR5cGUuZGVmYXVsdCA6IDA7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTVkdSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSW1Wc1pXMWxiblFpTENKd2NtOXdjeUlzSWxOV1IxSmxibVJsY21WeUlpd2laMlYwUWtKdmVDSXNJbmdpTENKNUlpd2lkMmxrZEdnaUxDSm9aV2xuYUhRaUxDSmxiR1Z0Wlc1MFJHbHRaVzV6YVc5dWN5SXNJbTl1VW1WdVpHVnlJaXdpWVhSMGNuTWlMQ0p6ZEdGMFpTSXNJbTl1VW1WaFpDSXNJbXRsZVNJc0ltZGxkRUYwZEhKcFluVjBaU0lzSW5aaGJIVmxWSGx3WlNJc0ltUmxabUYxYkhRaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dHJRa0ZuUTJVc1ZVRkJWVUVzVDBGQlZpeEZRVUZ0UWtNc1MwRkJia0lzUlVGQk1FSTdRVUZEZGtNc1UwRkJUeXhKUVVGSlF5eFhRVUZLTzBGQlEweEdPMEZCUkVzc1MwRkZSa01zUzBGR1JTeEZRVUZRTzBGQlNVUXNRenM3UVVGeVEwUTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096czdPenM3T3p0SlFVVk5ReXhYT3pzN1FVRkRTaXgxUWtGQldVUXNTMEZCV2l4RlFVRnRRanRCUVVGQk96dEJRVUZCTEdsRVFVTnFRaXh4UWtGQlRVRXNTMEZCVGl4RFFVUnBRanM3UVVGQlFTeG5RMEZIWlVFc1RVRkJUVVFzVDBGQlRpeERRVUZqUnl4UFFVRmtMRVZCU0dZN1FVRkJRU3hSUVVkVVF5eERRVWhUTEhsQ1FVZFVRU3hEUVVoVE8wRkJRVUVzVVVGSFRrTXNRMEZJVFN4NVFrRkhUa0VzUTBGSVRUdEJRVUZCTEZGQlIwaERMRXRCU0Vjc2VVSkJSMGhCTEV0QlNFYzdRVUZCUVN4UlFVZEpReXhOUVVoS0xIbENRVWRKUVN4TlFVaEtPenRCUVVscVFpeFZRVUZMUXl4cFFrRkJUQ3hIUVVGNVFpeEZRVUZGU2l4SlFVRkdMRVZCUVV0RExFbEJRVXdzUlVGQlVVTXNXVUZCVWl4RlFVRmxReXhqUVVGbUxFVkJRWHBDTzBGQlNtbENPMEZCUzJ4Q096dDNRa0ZGUkVVc1VTeDFRa0ZCVnp0QlFVRkJMRkZCUTBSVUxFOUJSRU1zUjBGRFZ5eExRVUZMUXl4TFFVUm9RaXhEUVVORVJDeFBRVVJET3p0QlFVVlVMRkZCUVUxVkxGRkJRVkVzY1VKQlFVMHNTMEZCUzBNc1MwRkJXQ3hGUVVGclFpeExRVUZMU0N4cFFrRkJka0lzUTBGQlpEdEJRVU5CTERSQ1FVRlpVaXhQUVVGYUxFVkJRWEZDVlN4TFFVRnlRanRCUVVORUxFYzdPM2RDUVVWRVJTeE5MRzFDUVVGUFF5eEhMRVZCUVVzN1FVRkJRU3hSUVVOR1lpeFBRVVJGTEVkQlExVXNTMEZCUzBNc1MwRkVaaXhEUVVOR1JDeFBRVVJGT3pzN1FVRkhWaXhSUVVGSkxFTkJRVU1zZVVKQlFXVmhMRWRCUVdZc1EwRkJUQ3hGUVVFd1FqdEJRVU40UWl4aFFVRlBZaXhSUVVGUll5eFpRVUZTTEVOQlFYRkNSQ3hIUVVGeVFpeERRVUZRTzBGQlEwUXNTMEZHUkN4TlFVVlBPMEZCUTB3c1ZVRkJUVVVzV1VGQldTeHhRa0ZCWVVZc1IwRkJZaXhEUVVGc1FqdEJRVU5CTEdGQlFWRkZMRk5CUVVRc1IwRkJZMEVzVlVGQlZVTXNUMEZCZUVJc1IwRkJhME1zUTBGQmVrTTdRVUZEUkR0QlFVTkdMRWNpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk11YUdGc2JDOVFjbTlxWldOMGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdVbVZ1WkdWeVpYSWdabkp2YlNBbkxpNHZKenRjYm1sdGNHOXlkQ0JpZFdsc1pDQm1jbTl0SUNjdUwySjFhV3hrSnp0Y2JtbHRjRzl5ZENCMGNtRnVjMlp2Y20xUWNtOXdjeUJtY205dElDY3VMaTlqYzNNdmRISmhibk5tYjNKdExYQnliM0J6Snp0Y2JtbHRjRzl5ZENCMllXeDFaVlI1Y0dWTllYQWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeWM3WEc1cGJYQnZjblFnZXlCelpYUkVUMDFCZEhSeWN5QjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU5zWVhOeklGTldSMUpsYm1SbGNtVnlJR1Y0ZEdWdVpITWdVbVZ1WkdWeVpYSWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhOMWNHVnlLSEJ5YjNCektUdGNibHh1SUNBZ0lHTnZibk4wSUhzZ2VDd2dlU3dnZDJsa2RHZ3NJR2hsYVdkb2RDQjlJRDBnY0hKdmNITXVaV3hsYldWdWRDNW5aWFJDUW05NEtDazdYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBSR2x0Wlc1emFXOXVjeUE5SUhzZ2VDd2dlU3dnZDJsa2RHZ3NJR2hsYVdkb2RDQjlPMXh1SUNCOVhHNWNiaUFnYjI1U1pXNWtaWElvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJsYkdWdFpXNTBJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJR0YwZEhKeklEMGdZblZwYkdRb2RHaHBjeTV6ZEdGMFpTd2dkR2hwY3k1bGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lrN1hHNGdJQ0FnYzJWMFJFOU5RWFIwY25Nb1pXeGxiV1Z1ZEN3Z1lYUjBjbk1wTzF4dUlDQjlYRzVjYmlBZ2IyNVNaV0ZrS0d0bGVTa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1pXeGxiV1Z1ZENCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmx4dUlDQWdJR2xtSUNnaGRISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHVnNaVzFsYm5RdVoyVjBRWFIwY21saWRYUmxLR3RsZVNrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR052Ym5OMElIWmhiSFZsVkhsd1pTQTlJSFpoYkhWbFZIbHdaVTFoY0Z0clpYbGRPMXh1SUNBZ0lDQWdjbVYwZFhKdUlDaDJZV3gxWlZSNWNHVXBJRDhnZG1Gc2RXVlVlWEJsTG1SbFptRjFiSFFnT2lBd08xeHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlBb1pXeGxiV1Z1ZEN3Z2NISnZjSE1wSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJUVmtkU1pXNWtaWEpsY2loN1hHNGdJQ0FnWld4bGJXVnVkQ3hjYmlBZ0lDQXVMaTV3Y205d2MxeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1BhdGhSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudFxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU1ZHUGF0aFJlbmRlcmVyID0gZnVuY3Rpb24gKF9SZW5kZXJlcikge1xuICBfaW5oZXJpdHMoU1ZHUGF0aFJlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIFNWR1BhdGhSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTVkdQYXRoUmVuZGVyZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIHZhciBfcHJvcHMkZWxlbWVudCRnZXRCQm8gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKSxcbiAgICAgICAgeCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby54LFxuICAgICAgICB5ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLnksXG4gICAgICAgIHdpZHRoID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8uaGVpZ2h0O1xuXG4gICAgX3RoaXMuZWxlbWVudERpbWVuc2lvbnMgPSB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeSxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgcGF0aExlbmd0aDogcHJvcHMuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBTVkdQYXRoUmVuZGVyZXIucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgdmFyIHBhdGhMZW5ndGggPSB0aGlzLmVsZW1lbnREaW1lbnNpb25zLnBhdGhMZW5ndGg7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICAoMCwgX3V0aWxzLnNldERPTUF0dHJzKShlbGVtZW50LCAoMCwgX2J1aWxkMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCBwYXRoTGVuZ3RoKSk7XG4gIH07XG5cbiAgU1ZHUGF0aFJlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgfTtcblxuICByZXR1cm4gU1ZHUGF0aFJlbmRlcmVyO1xufShfMi5kZWZhdWx0KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkxYQmhkR2d2YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2xzaVpXeGxiV1Z1ZENJc0luQnliM0J6SWl3aVUxWkhVR0YwYUZKbGJtUmxjbVZ5SWl3aVoyVjBRa0p2ZUNJc0luZ2lMQ0o1SWl3aWQybGtkR2dpTENKb1pXbG5hSFFpTENKbGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lJc0luQmhkR2hNWlc1bmRHZ2lMQ0puWlhSVWIzUmhiRXhsYm1kMGFDSXNJbTl1VW1WdVpHVnlJaXdpYzNSaGRHVWlMQ0p2YmxKbFlXUWlMQ0pyWlhraUxDSm5aWFJCZEhSeWFXSjFkR1VpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0clFrRTJRbVVzVlVGQlZVRXNUMEZCVml4RlFVRnRRa01zUzBGQmJrSXNSVUZCTUVJN1FVRkRka01zVTBGQlR5eEpRVUZKUXl4bFFVRktPMEZCUTB4R08wRkJSRXNzUzBGRlJrTXNTMEZHUlN4RlFVRlFPMEZCU1VRc1F6czdRVUZzUTBRN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdPenM3TzBsQlJVMURMR1U3T3p0QlFVTktMREpDUVVGWlJDeExRVUZhTEVWQlFXMUNPMEZCUVVFN08wRkJRVUVzYVVSQlEycENMSEZDUVVGTlFTeExRVUZPTEVOQlJHbENPenRCUVVGQkxHZERRVWRsUVN4TlFVRk5SQ3hQUVVGT0xFTkJRV05ITEU5QlFXUXNSVUZJWmp0QlFVRkJMRkZCUjFSRExFTkJTRk1zZVVKQlIxUkJMRU5CU0ZNN1FVRkJRU3hSUVVkT1F5eERRVWhOTEhsQ1FVZE9RU3hEUVVoTk8wRkJRVUVzVVVGSFNFTXNTMEZJUnl4NVFrRkhTRUVzUzBGSVJ6dEJRVUZCTEZGQlIwbERMRTFCU0Vvc2VVSkJSMGxCTEUxQlNFbzdPMEZCU1dwQ0xGVkJRVXRETEdsQ1FVRk1MRWRCUVhsQ08wRkJRM1pDU2l4VlFVUjFRanRCUVVWMlFrTXNWVUZHZFVJN1FVRkhka0pETEd0Q1FVaDFRanRCUVVsMlFrTXNiMEpCU25WQ08wRkJTM1pDUlN4clFrRkJXVklzVFVGQlRVUXNUMEZCVGl4RFFVRmpWU3hqUVVGa08wRkJURmNzUzBGQmVrSTdRVUZLYVVJN1FVRlhiRUk3T3pSQ1FVVkVReXhSTEhWQ1FVRlhPMEZCUVVFc1VVRkRSRVlzVlVGRVF5eEhRVU5qTEV0QlFVdEVMR2xDUVVSdVFpeERRVU5FUXl4VlFVUkRPMEZCUVVFc1VVRkZSRlFzVDBGR1F5eEhRVVZYTEV0QlFVdERMRXRCUm1oQ0xFTkJSVVJFTEU5QlJrTTdPMEZCUjFRc05FSkJRVmxCTEU5QlFWb3NSVUZCY1VJc2NVSkJRVTBzUzBGQlMxa3NTMEZCV0N4RlFVRnJRa2dzVlVGQmJFSXNRMEZCY2tJN1FVRkRSQ3hIT3pzMFFrRkZSRWtzVFN4dFFrRkJUME1zUnl4RlFVRkxPMEZCUTFZc1YwRkJUeXhMUVVGTFlpeExRVUZNTEVOQlFWZEVMRTlCUVZnc1EwRkJiVUpsTEZsQlFXNUNMRU5CUVdkRFJDeEhRVUZvUXl4RFFVRlFPMEZCUTBRc1J5SXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGeWN5NW9ZV3hzTDFCeWIycGxZM1J6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCU1pXNWtaWEpsY2lCbWNtOXRJQ2N1TGk4bk8xeHVhVzF3YjNKMElHSjFhV3hrSUdaeWIyMGdKeTR2WW5WcGJHUW5PMXh1YVcxd2IzSjBJSHNnYzJWMFJFOU5RWFIwY25NZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWpiR0Z6Y3lCVFZrZFFZWFJvVW1WdVpHVnlaWElnWlhoMFpXNWtjeUJTWlc1a1pYSmxjaUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ2MzVndaWElvY0hKdmNITXBPMXh1WEc0Z0lDQWdZMjl1YzNRZ2V5QjRMQ0I1TENCM2FXUjBhQ3dnYUdWcFoyaDBJSDBnUFNCd2NtOXdjeTVsYkdWdFpXNTBMbWRsZEVKQ2IzZ29LVHRjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblJFYVcxbGJuTnBiMjV6SUQwZ2UxeHVJQ0FnSUNBZ2VDeGNiaUFnSUNBZ0lIa3NYRzRnSUNBZ0lDQjNhV1IwYUN4Y2JpQWdJQ0FnSUdobGFXZG9kQ3hjYmlBZ0lDQWdJSEJoZEdoTVpXNW5kR2c2SUhCeWIzQnpMbVZzWlcxbGJuUXVaMlYwVkc5MFlXeE1aVzVuZEdnb0tWeHVJQ0FnSUgwN1hHNGdJSDFjYmx4dUlDQnZibEpsYm1SbGNpZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lIQmhkR2hNWlc1bmRHZ2dmU0E5SUhSb2FYTXVaV3hsYldWdWRFUnBiV1Z1YzJsdmJuTTdYRzRnSUNBZ1kyOXVjM1FnZXlCbGJHVnRaVzUwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lITmxkRVJQVFVGMGRISnpLR1ZzWlcxbGJuUXNJR0oxYVd4a0tIUm9hWE11YzNSaGRHVXNJSEJoZEdoTVpXNW5kR2dwS1R0Y2JpQWdmVnh1WEc0Z0lHOXVVbVZoWkNoclpYa3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV3Y205d2N5NWxiR1Z0Wlc1MExtZGxkRUYwZEhKcFluVjBaU2hyWlhrcE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlDaGxiR1Z0Wlc1MExDQndjbTl3Y3lrZ2UxeHVJQ0J5WlhSMWNtNGdibVYzSUZOV1IxQmhkR2hTWlc1a1pYSmxjaWg3WEc0Z0lDQWdaV3hsYldWdWRDeGNiaUFnSUNBdUxpNXdjbTl3YzF4dUlDQjlLVHRjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zcGxpdENvbG9yVmFsdWVzID0gc3BsaXRDb2xvclZhbHVlcztcbnZhciB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbn07XG5cbnZhciBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbnZhciBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbnZhciBIQVNfUEVSRk9STUFOQ0VfTk9XID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3c7XG5cbi8qXG4gIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNhbWVsVG9EYXNoID0gZXhwb3J0cy5jYW1lbFRvRGFzaCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qXG4gIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gIFxuICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xudmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy5jdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbnZhciBzZXRET01BdHRycyA9IGV4cG9ydHMuc2V0RE9NQXR0cnMgPSBmdW5jdGlvbiAoZWxlbWVudCwgYXR0cnMpIHtcbiAgZm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfVxuICB9XG59O1xuLypcbiAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRDb21tYURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRDb21tYURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBhbnkgYXJndW1lbnQgZm9yIGB0ZXJtYFxuICogYGNvbnRhaW5zKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xudmFyIGNvbnRhaW5zID0gZXhwb3J0cy5jb250YWlucyA9IGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBpc1N0cmluZyh0ZXJtKSAmJiB2LmluZGV4T2YodGVybSkgIT09IC0xO1xuICB9O1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayB0byBzZWUgaWYgYW4gYXJndW1lbnQgaXNcbiAqICB0aGUgZmlyc3QgY2hhcmFjdGVycyBpbiB0aGUgcHJvdmlkZWQgYHRlcm1gXG4gKiBgaXNGaXJzdENoYXJzKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xudmFyIGlzRmlyc3RDaGFycyA9IGV4cG9ydHMuaXNGaXJzdENoYXJzID0gZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSA9PT0gMDtcbiAgfTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgdW5pdCB2YWx1ZSB0eXBlXG4gKi9cbnZhciBjcmVhdGVVbml0VHlwZSA9IGV4cG9ydHMuY3JlYXRlVW5pdFR5cGUgPSBmdW5jdGlvbiAodHlwZSwgdHJhbnNmb3JtKSB7XG4gIHJldHVybiB7XG4gICAgdGVzdDogY29udGFpbnModHlwZSksXG4gICAgcGFyc2U6IHBhcnNlRmxvYXQsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgfTtcbn07XG5cbi8qXG4gIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbnZhciBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBzcGxpdCBjb2xvclxuICogdmFsdWVzIGZyb20gc3RyaW5nIGludG8gYW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcbiAqIGBtYXBBcnJheVRvT2JqZWN0KFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXSkoJ3JnYmEoMCwwLDApJylgXG4gKi9cbmZ1bmN0aW9uIHNwbGl0Q29sb3JWYWx1ZXModGVybXMpIHtcbiAgdmFyIG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICB2YXIgdmFsdWVzQXJyYXkgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHYpKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgdmFsdWVzW3Rlcm1zW2ldXSA9IHZhbHVlc0FycmF5W2ldICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KHZhbHVlc0FycmF5W2ldKSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcbn1cblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xudmFyIGlzQXJyYXkgPSBleHBvcnRzLmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbnZhciBpc0Z1bmMgPSBleHBvcnRzLmlzRnVuYyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG52YXIgaXNOdW0gPSBleHBvcnRzLmlzTnVtID0gZnVuY3Rpb24gKG51bSkge1xuICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbnZhciBpc09iaiA9IGV4cG9ydHMuaXNPYmogPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59O1xuXG52YXIgaXNIZXggPSBleHBvcnRzLmlzSGV4ID0gaXNGaXJzdENoYXJzKCcjJyk7XG52YXIgaXNSZ2IgPSBleHBvcnRzLmlzUmdiID0gaXNGaXJzdENoYXJzKCdyZ2InKTtcbnZhciBpc0hzbCA9IGV4cG9ydHMuaXNIc2wgPSBpc0ZpcnN0Q2hhcnMoJ2hzbCcpO1xudmFyIGlzQ29sb3IgPSBleHBvcnRzLmlzQ29sb3IgPSBmdW5jdGlvbiAodikge1xuICByZXR1cm4gaXNIZXgodikgfHwgaXNSZ2IodikgfHwgaXNIc2wodik7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZFhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2xzaWMzQnNhWFJEYjJ4dmNsWmhiSFZsY3lJc0luWmhjbFI1Y0dVaUxDSjJZWEpwWVdKc1pTSXNJazlpYW1WamRDSXNJbkJ5YjNSdmRIbHdaU0lzSW5SdlUzUnlhVzVuSWl3aVkyRnNiQ0lzSW5Oc2FXTmxJaXdpUTBGTlJVeGZRMEZUUlY5UVFWUlVSVkpPSWl3aVVrVlFURUZEUlY5VVJVMVFURUZVUlNJc0lraEJVMTlRUlZKR1QxSk5RVTVEUlY5T1QxY2lMQ0p3WlhKbWIzSnRZVzVqWlNJc0ltNXZkeUlzSW1OaGJXVnNWRzlFWVhOb0lpd2ljM1J5YVc1bklpd2ljbVZ3YkdGalpTSXNJblJ2VEc5M1pYSkRZWE5sSWl3aVkzVnljbVZ1ZEZScGJXVWlMQ0pFWVhSbElpd2laMlYwVkdsdFpTSXNJbk5sZEVSUFRVRjBkSEp6SWl3aVpXeGxiV1Z1ZENJc0ltRjBkSEp6SWl3aWEyVjVJaXdpYUdGelQzZHVVSEp2Y0dWeWRIa2lMQ0p6WlhSQmRIUnlhV0oxZEdVaUxDSnpjR3hwZEVOdmJXMWhSR1ZzYVcxcGRHVmtJaXdpZG1Gc2RXVWlMQ0pwYzFOMGNtbHVaeUlzSW5Od2JHbDBJaXdpWTI5dWRHRnBibk1pTENKMFpYSnRJaXdpZGlJc0ltbHVaR1Y0VDJZaUxDSnBjMFpwY25OMFEyaGhjbk1pTENKamNtVmhkR1ZWYm1sMFZIbHdaU0lzSW5SNWNHVWlMQ0owY21GdWMyWnZjbTBpTENKMFpYTjBJaXdpY0dGeWMyVWlMQ0p3WVhKelpVWnNiMkYwSWl3aVoyVjBWbUZzZFdWR2NtOXRSblZ1WTNScGIyNVRkSEpwYm1jaUxDSnpkV0p6ZEhKcGJtY2lMQ0pzWVhOMFNXNWtaWGhQWmlJc0luUmxjbTF6SWl3aWJuVnRWR1Z5YlhNaUxDSnNaVzVuZEdnaUxDSjJZV3gxWlhNaUxDSjJZV3gxWlhOQmNuSmhlU0lzSW1raUxDSjFibVJsWm1sdVpXUWlMQ0pwYzBGeWNtRjVJaXdpWVhKeUlpd2lhWE5HZFc1aklpd2liMkpxSWl3aWFYTk9kVzBpTENKdWRXMGlMQ0pwYzA5aWFpSXNJbk4wY2lJc0ltbHpTR1Y0SWl3aWFYTlNaMklpTENKcGMwaHpiQ0lzSW1selEyOXNiM0lpWFN3aWJXRndjR2x1WjNNaU9pSTdPenRSUVRaRlowSkJMR2RDTEVkQlFVRkJMR2RDTzBGQk4wVm9RaXhKUVVGTlF5eFZRVUZWTEZWQlFVTkRMRkZCUVVRN1FVRkJRU3hUUVVGalF5eFBRVUZQUXl4VFFVRlFMRU5CUVdsQ1F5eFJRVUZxUWl4RFFVRXdRa01zU1VGQk1VSXNRMEZCSzBKS0xGRkJRUzlDTEVWQlFYbERTeXhMUVVGNlF5eERRVUVyUXl4RFFVRXZReXhGUVVGclJDeERRVUZETEVOQlFXNUVMRU5CUVdRN1FVRkJRU3hEUVVGb1FqczdRVUZGUVN4SlFVRk5ReXh4UWtGQmNVSXNhVUpCUVROQ08wRkJRMEVzU1VGQlRVTXNiVUpCUVcxQ0xFOUJRWHBDTzBGQlEwRXNTVUZCVFVNc2MwSkJRWFZDTEU5QlFVOURMRmRCUVZBc1MwRkJkVUlzVjBGQmRrSXNTVUZCYzBOQkxGbEJRVmxETEVkQlFTOUZPenRCUVVWQk96czdPenM3UVVGTlR5eEpRVUZOUXl4dlEwRkJZeXhWUVVGRFF5eE5RVUZFTzBGQlFVRXNVMEZCV1VFc1QwRkJUME1zVDBGQlVDeERRVUZsVUN4clFrRkJaaXhGUVVGdFEwTXNaMEpCUVc1RExFVkJRWEZFVHl4WFFVRnlSQ3hGUVVGYU8wRkJRVUVzUTBGQmNFSTdPMEZCUlZBN096czdPMEZCUzA4c1NVRkJUVU1zYjBOQlFXTlFMSE5DUVVGelFqdEJRVUZCTEZOQlFVMURMRmxCUVZsRExFZEJRVm9zUlVGQlRqdEJRVUZCTEVOQlFYUkNMRWRCUVdkRU8wRkJRVUVzVTBGQlRTeEpRVUZKVFN4SlFVRktMRWRCUVZkRExFOUJRVmdzUlVGQlRqdEJRVUZCTEVOQlFYQkZPenRCUVVWQkxFbEJRVTFETEc5RFFVRmpMRlZCUVVORExFOUJRVVFzUlVGQlZVTXNTMEZCVml4RlFVRnZRanRCUVVNM1F5eFBRVUZMTEVsQlFVbERMRWRCUVZRc1NVRkJaMEpFTEV0QlFXaENMRVZCUVhWQ08wRkJRM0pDTEZGQlFVbEJMRTFCUVUxRkxHTkJRVTRzUTBGQmNVSkVMRWRCUVhKQ0xFTkJRVW9zUlVGQkswSTdRVUZETjBKR0xHTkJRVkZKTEZsQlFWSXNRMEZCY1VKR0xFZEJRWEpDTEVWQlFUQkNSQ3hOUVVGTlF5eEhRVUZPTEVOQlFURkNPMEZCUTBRN1FVRkRSanRCUVVOR0xFTkJUazA3UVVGUFVEczdPenM3T3pzN1FVRlJUeXhKUVVGTlJ5eHZSRUZCYzBJc1ZVRkJRME1zUzBGQlJEdEJRVUZCTEZOQlFWZERMRk5CUVZORUxFdEJRVlFzU1VGQmEwSkJMRTFCUVUxRkxFdEJRVTRzUTBGQldTeE5RVUZhTEVOQlFXeENMRWRCUVhkRExFTkJRVU5HTEV0QlFVUXNRMEZCYmtRN1FVRkJRU3hEUVVFMVFqczdRVUZGVURzN096dEJRVWxQTEVsQlFVMUhMRGhDUVVGWExGVkJRVU5ETEVsQlFVUTdRVUZCUVN4VFFVRlZMRlZCUVVORExFTkJRVVFzUlVGQlR6dEJRVU4yUXl4WFFVRlJTaXhUUVVGVFJ5eEpRVUZVTEV0QlFXdENReXhGUVVGRlF5eFBRVUZHTEVOQlFWVkdMRWxCUVZZc1RVRkJiMElzUTBGQlF5eERRVUV2UXp0QlFVTkVMRWRCUm5WQ08wRkJRVUVzUTBGQmFrSTdPMEZCU1ZBN096czdPMEZCUzA4c1NVRkJUVWNzYzBOQlFXVXNWVUZCUTBnc1NVRkJSRHRCUVVGQkxGTkJRVlVzVlVGQlEwTXNRMEZCUkN4RlFVRlBPMEZCUXpORExGZEJRVkZLTEZOQlFWTkhMRWxCUVZRc1MwRkJhMEpETEVWQlFVVkRMRTlCUVVZc1EwRkJWVVlzU1VGQlZpeE5RVUZ2UWl4RFFVRTVRenRCUVVORUxFZEJSakpDTzBGQlFVRXNRMEZCY2tJN08wRkJTVkE3T3p0QlFVZFBMRWxCUVUxSkxEQkRRVUZwUWl4VlFVRkRReXhKUVVGRUxFVkJRVTlETEZOQlFWQXNSVUZCY1VJN1FVRkRha1FzVTBGQlR6dEJRVU5NUXl4VlFVRk5VaXhUUVVGVFRTeEpRVUZVTEVOQlJFUTdRVUZGVEVjc1YwRkJUME1zVlVGR1JqdEJRVWRNU0R0QlFVaExMRWRCUVZBN1FVRkxSQ3hEUVU1Tk96dEJRVkZRT3pzN08wRkJTVThzU1VGQlRVa3NhMFZCUVRaQ0xGVkJRVU5rTEV0QlFVUTdRVUZCUVN4VFFVRlhRU3hOUVVGTlpTeFRRVUZPTEVOQlFXZENaaXhOUVVGTlRTeFBRVUZPTEVOQlFXTXNSMEZCWkN4SlFVRnhRaXhEUVVGeVF5eEZRVUYzUTA0c1RVRkJUV2RDTEZkQlFVNHNRMEZCYTBJc1IwRkJiRUlzUTBGQmVFTXNRMEZCV0R0QlFVRkJMRU5CUVc1RE96dEJRVVZRT3pzN096dEJRVXRQTEZOQlFWTXpReXhuUWtGQlZDeERRVUV3UWpSRExFdEJRVEZDTEVWQlFXbERPMEZCUTNSRExFMUJRVTFETEZkQlFWZEVMRTFCUVUxRkxFMUJRWFpDT3p0QlFVVkJMRk5CUVU4c1ZVRkJWV1FzUTBGQlZpeEZRVUZoTzBGQlEyeENMRkZCUVUxbExGTkJRVk1zUlVGQlpqdEJRVU5CTEZGQlFVMURMR05CUVdOMFFpeHZRa0ZCYjBKbExESkNRVUV5UWxRc1EwRkJNMElzUTBGQmNFSXNRMEZCY0VJN08wRkJSVUVzVTBGQlN5eEpRVUZKYVVJc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpTaXhSUVVGd1FpeEZRVUU0UWtrc1IwRkJPVUlzUlVGQmJVTTdRVUZEYWtOR0xHRkJRVTlJTEUxQlFVMUxMRU5CUVU0c1EwRkJVQ3hKUVVGdlFrUXNXVUZCV1VNc1EwRkJXaXhOUVVGdFFrTXNVMEZCY0VJc1IwRkJhVU5XTEZkQlFWZFJMRmxCUVZsRExFTkJRVm9zUTBGQldDeERRVUZxUXl4SFFVRTRSQ3hEUVVGcVJqdEJRVU5FT3p0QlFVVkVMRmRCUVU5R0xFMUJRVkE3UVVGRFJDeEhRVlJFTzBGQlZVUTdPMEZCUlVRN096czdPenRCUVUxUExFbEJRVTFKTERSQ1FVRlZMRlZCUVVORExFZEJRVVE3UVVGQlFTeFRRVUZUYmtRc1VVRkJVVzFFTEVkQlFWSXNUVUZCYVVJc1QwRkJNVUk3UVVGQlFTeERRVUZvUWpzN1FVRkZVRHM3T3pzN08wRkJUVThzU1VGQlRVTXNNRUpCUVZNc1ZVRkJRME1zUjBGQlJEdEJRVUZCTEZOQlFWTnlSQ3hSUVVGUmNVUXNSMEZCVWl4TlFVRnBRaXhWUVVFeFFqdEJRVUZCTEVOQlFXWTdPMEZCUlZBN096czdPenRCUVUxUExFbEJRVTFETEhkQ1FVRlJMRlZCUVVORExFZEJRVVE3UVVGQlFTeFRRVUZUTEU5QlFVOUJMRWRCUVZBc1MwRkJaU3hSUVVGNFFqdEJRVUZCTEVOQlFXUTdPMEZCUlZBN096czdPenRCUVUxUExFbEJRVTFETEhkQ1FVRlJMRlZCUVVOSUxFZEJRVVE3UVVGQlFTeFRRVUZUTEU5QlFVOUJMRWRCUVZBc1MwRkJaU3hSUVVGNFFqdEJRVUZCTEVOQlFXUTdPMEZCUlZBN096czdPenRCUVUxUExFbEJRVTB4UWl3NFFrRkJWeXhWUVVGRE9FSXNSMEZCUkR0QlFVRkJMRk5CUVZNc1QwRkJUMEVzUjBGQlVDeExRVUZsTEZGQlFYaENPMEZCUVVFc1EwRkJha0k3TzBGQlJVRXNTVUZCVFVNc2QwSkJRVkY2UWl4aFFVRmhMRWRCUVdJc1EwRkJaRHRCUVVOQkxFbEJRVTB3UWl4M1FrRkJVVEZDTEdGQlFXRXNTMEZCWWl4RFFVRmtPMEZCUTBFc1NVRkJUVEpDTEhkQ1FVRlJNMElzWVVGQllTeExRVUZpTEVOQlFXUTdRVUZEUVN4SlFVRk5ORUlzTkVKQlFWVXNWVUZCUXpsQ0xFTkJRVVE3UVVGQlFTeFRRVUZSTWtJc1RVRkJUVE5DTEVOQlFVNHNTMEZCV1RSQ0xFMUJRVTAxUWl4RFFVRk9MRU5CUVZvc1NVRkJkMEkyUWl4TlFVRk5OMElzUTBGQlRpeERRVUZvUXp0QlFVRkJMRU5CUVdoQ0lpd2labWxzWlNJNkluVjBhV3h6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhKekxtaGhiR3d2VUhKdmFtVmpkSE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVkyOXVjM1FnZG1GeVZIbHdaU0E5SUNoMllYSnBZV0pzWlNrZ1BUNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp5NWpZV3hzS0haaGNtbGhZbXhsS1M1emJHbGpaU2c0TENBdE1TazdYRzVjYm1OdmJuTjBJRU5CVFVWTVgwTkJVMFZmVUVGVVZFVlNUaUE5SUM4b1cyRXRlbDBwS0Z0QkxWcGRLUzluTzF4dVkyOXVjM1FnVWtWUVRFRkRSVjlVUlUxUVRFRlVSU0E5SUNja01TMGtNaWM3WEc1amIyNXpkQ0JJUVZOZlVFVlNSazlTVFVGT1EwVmZUazlYSUQwZ0tIUjVjR1Z2WmlCd1pYSm1iM0p0WVc1alpTQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdjR1Z5Wm05eWJXRnVZMlV1Ym05M0tUdGNibHh1THlwY2JpQWdRMjl1ZG1WeWRDQmpZVzFsYkVOaGMyVWdkRzhnWkdGemFDMWpZWE5sWEc1Y2JpQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJRUJ5WlhSMWNtNGdXM04wY21sdVoxMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdZMkZ0Wld4VWIwUmhjMmdnUFNBb2MzUnlhVzVuS1NBOVBpQnpkSEpwYm1jdWNtVndiR0ZqWlNoRFFVMUZURjlEUVZORlgxQkJWRlJGVWs0c0lGSkZVRXhCUTBWZlZFVk5VRXhCVkVVcExuUnZURzkzWlhKRFlYTmxLQ2s3WEc1Y2JpOHFYRzRnSUVkbGJtVnlZWFJsSUdOMWNuSmxiblFnZEdsdFpYTjBZVzF3WEc0Z0lGeHVJQ0JBY21WMGRYSnVJRnQwYVcxbGMzUmhiWEJkT2lCRGRYSnlaVzUwSUZWT1NWZ2dkR2x0WlhOMFlXMXdYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUlVhVzFsSUQwZ1NFRlRYMUJGVWtaUFVrMUJUa05GWDA1UFZ5QS9JQ2dwSUQwK0lIQmxjbVp2Y20xaGJtTmxMbTV2ZHlncElEb2dLQ2tnUFQ0Z2JtVjNJRVJoZEdVb0tTNW5aWFJVYVcxbEtDazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnpaWFJFVDAxQmRIUnljeUE5SUNobGJHVnRaVzUwTENCaGRIUnljeWtnUFQ0Z2UxeHVJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdZWFIwY25NcElIdGNiaUFnSUNCcFppQW9ZWFIwY25NdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdaV3hsYldWdWRDNXpaWFJCZEhSeWFXSjFkR1VvYTJWNUxDQmhkSFJ5YzF0clpYbGRLVHRjYmlBZ0lDQjlYRzRnSUgxY2JuMDdYRzR2S2x4dUlDQlRjR3hwZENCamIyMXRZUzFrWld4cGJXbDBaV1FnYzNSeWFXNW5YRzVjYmlBZ1hDSm1iMjhzWW1GeVhDSWdMVDRnVzF3aVptOXZYQ0lzSUZ3aVltRnlYQ0pkWEc1Y2JpQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJRUJ5WlhSMWNtNGdXMkZ5Y21GNVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR3hwZEVOdmJXMWhSR1ZzYVcxcGRHVmtJRDBnS0haaGJIVmxLU0E5UGlCcGMxTjBjbWx1WnloMllXeDFaU2tnUHlCMllXeDFaUzV6Y0d4cGRDZ3ZMRnhjY3lvdktTQTZJRnQyWVd4MVpWMDdYRzVjYmk4cUtseHVJQ29nSUZKbGRIVnlibk1nWVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z1kyaGxZMnNnWVc1NUlHRnlaM1Z0Wlc1MElHWnZjaUJnZEdWeWJXQmNiaUFxSUdCamIyNTBZV2x1Y3lnbmJtVmxaR3hsSnlrb0oyaGhlWE4wWVdOckp5bGdYRzRnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYjI1MFlXbHVjeUE5SUNoMFpYSnRLU0E5UGlBb2Rpa2dQVDRnZTF4dUlDQnlaWFIxY200Z0tHbHpVM1J5YVc1bktIUmxjbTBwSUNZbUlIWXVhVzVrWlhoUFppaDBaWEp0S1NBaFBUMGdMVEVwTzF4dWZUdGNibHh1THlvcVhHNGdLaUFnVW1WMGRYSnVjeUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdkMmxzYkNCamFHVmpheUIwYnlCelpXVWdhV1lnWVc0Z1lYSm5kVzFsYm5RZ2FYTmNiaUFxSUNCMGFHVWdabWx5YzNRZ1kyaGhjbUZqZEdWeWN5QnBiaUIwYUdVZ2NISnZkbWxrWldRZ1lIUmxjbTFnWEc0Z0tpQmdhWE5HYVhKemRFTm9ZWEp6S0NkdVpXVmtiR1VuS1NnbmFHRjVjM1JoWTJzbktXQmNiaUFxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6Um1seWMzUkRhR0Z5Y3lBOUlDaDBaWEp0S1NBOVBpQW9kaWtnUFQ0Z2UxeHVJQ0J5WlhSMWNtNGdLR2x6VTNSeWFXNW5LSFJsY20wcElDWW1JSFl1YVc1a1pYaFBaaWgwWlhKdEtTQTlQVDBnTUNrN1hHNTlPMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaU0JoSUhWdWFYUWdkbUZzZFdVZ2RIbHdaVnh1SUNvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxWVzVwZEZSNWNHVWdQU0FvZEhsd1pTd2dkSEpoYm5ObWIzSnRLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2RHVnpkRG9nWTI5dWRHRnBibk1vZEhsd1pTa3NYRzRnSUNBZ2NHRnljMlU2SUhCaGNuTmxSbXh2WVhRc1hHNGdJQ0FnZEhKaGJuTm1iM0p0WEc0Z0lIMDdYRzU5TzF4dVhHNHZLbHh1SUNCSFpYUWdkbUZzZFdVZ1puSnZiU0JtZFc1amRHbHZiaUJ6ZEhKcGJtZGNiaUFnWENKMGNtRnVjMnhoZEdWWUtESXdjSGdwWENJZ0xUNGdYQ0l5TUhCNFhDSmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY2dQU0FvZG1Gc2RXVXBJRDArSUhaaGJIVmxMbk4xWW5OMGNtbHVaeWgyWVd4MVpTNXBibVJsZUU5bUtDY29KeWtnS3lBeExDQjJZV3gxWlM1c1lYTjBTVzVrWlhoUFppZ25LU2NwS1R0Y2JseHVMeW9xWEc0Z0tpQkRjbVZoZEdWeklHRWdablZ1WTNScGIyNGdkR2hoZENCM2FXeHNJSE53YkdsMElHTnZiRzl5WEc0Z0tpQjJZV3gxWlhNZ1puSnZiU0J6ZEhKcGJtY2dhVzUwYnlCaGJpQnZZbXBsWTNRZ2IyWWdjSEp2Y0dWeWRHbGxjMXh1SUNvZ1lHMWhjRUZ5Y21GNVZHOVBZbXBsWTNRb1d5ZHlaV1FuTENBblozSmxaVzRuTENBbllteDFaU2RkS1NnbmNtZGlZU2d3TERBc01Da25LV0JjYmlBcUwxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlITndiR2wwUTI5c2IzSldZV3gxWlhNb2RHVnliWE1wSUh0Y2JpQWdZMjl1YzNRZ2JuVnRWR1Z5YlhNZ1BTQjBaWEp0Y3k1c1pXNW5kR2c3WEc1Y2JpQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDaDJLU0I3WEc0Z0lDQWdZMjl1YzNRZ2RtRnNkV1Z6SUQwZ2UzMDdYRzRnSUNBZ1kyOXVjM1FnZG1Gc2RXVnpRWEp5WVhrZ1BTQnpjR3hwZEVOdmJXMWhSR1ZzYVcxcGRHVmtLR2RsZEZaaGJIVmxSbkp2YlVaMWJtTjBhVzl1VTNSeWFXNW5LSFlwS1R0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JuVnRWR1Z5YlhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnZG1Gc2RXVnpXM1JsY20xelcybGRYU0E5SUNoMllXeDFaWE5CY25KaGVWdHBYU0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQS9JSEJoY25ObFJteHZZWFFvZG1Gc2RXVnpRWEp5WVhsYmFWMHBJRG9nTVR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkbUZzZFdWek8xeHVJQ0I5TzF4dWZWeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVc0Z1lYSnlZWGtnUHlCY2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhWMGFXeHpMblpoY2xSNWNHVWdQVDA5SUNkQmNuSmhlU2RjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOQmNuSmhlU0E5SUNoaGNuSXBJRDArSUhaaGNsUjVjR1VvWVhKeUtTQTlQVDBnSjBGeWNtRjVKenRjYmx4dUx5cGNiaUFnU1hNZ2RYUnBiSE1nZG1GeUlHRWdablZ1WTNScGIyNGdQeUJjYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFYwYVd4ekxuWmhjbFI1Y0dVZ1BUMDlJQ2RHZFc1amRHbHZiaWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOR2RXNWpJRDBnS0c5aWFpa2dQVDRnZG1GeVZIbHdaU2h2WW1vcElEMDlQU0FuUm5WdVkzUnBiMjRuTzF4dVhHNHZLbHh1SUNCSmN5QjFkR2xzY3lCMllYSWdZU0J1ZFcxaVpYSS9YRzRnSUZ4dUlDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBlWEJsYjJZZ1BUMDlJQ2R1ZFcxaVpYSW5YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VG5WdElEMGdLRzUxYlNrZ1BUNGdkSGx3Wlc5bUlHNTFiU0E5UFQwZ0oyNTFiV0psY2ljN1hHNWNiaThxWEc0Z0lFbHpJSFYwYVd4eklIWmhjaUJoYmlCdlltcGxZM1EvWEc0Z0lGeHVJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIwZVhCbGIyWWdQVDA5SUNkdlltcGxZM1FuWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselQySnFJRDBnS0c5aWFpa2dQVDRnZEhsd1pXOW1JRzlpYWlBOVBUMGdKMjlpYW1WamRDYzdYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaElITjBjbWx1WnlBL0lGeHVJQ0JjYmlBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RIbHdaVzltSUhOMGNpQTlQVDBnSjNOMGNtbHVaeWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOVGRISnBibWNnUFNBb2MzUnlLU0E5UGlCMGVYQmxiMllnYzNSeUlEMDlQU0FuYzNSeWFXNW5KenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR2x6U0dWNElEMGdhWE5HYVhKemRFTm9ZWEp6S0Njakp5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTlNaMklnUFNCcGMwWnBjbk4wUTJoaGNuTW9KM0puWWljcE8xeHVaWGh3YjNKMElHTnZibk4wSUdselNITnNJRDBnYVhOR2FYSnpkRU5vWVhKektDZG9jMnduS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzBOdmJHOXlJRDBnS0hZcElEMCtJQ2hwYzBobGVDaDJLU0I4ZkNCcGMxSm5ZaWgyS1NCOGZDQnBjMGh6YkNoMktTazdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29sb3IgPSBleHBvcnRzLmhzbGEgPSBleHBvcnRzLnJnYmEgPSBleHBvcnRzLmhleCA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIGhleCA9IGV4cG9ydHMuaGV4ID0gZnVuY3Rpb24gKHYpIHtcbiAgdmFyIHIgPSB2b2lkIDAsXG4gICAgICBnID0gdm9pZCAwLFxuICAgICAgYiA9IHZvaWQgMDtcblxuICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICBpZiAodi5sZW5ndGggPiA0KSB7XG4gICAgciA9IHYuc3Vic3RyKDEsIDIpO1xuICAgIGcgPSB2LnN1YnN0cigzLCAyKTtcbiAgICBiID0gdi5zdWJzdHIoNSwgMik7XG5cbiAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICB9IGVsc2Uge1xuICAgIHIgPSB2LnN1YnN0cigxLCAxKTtcbiAgICBnID0gdi5zdWJzdHIoMiwgMSk7XG4gICAgYiA9IHYuc3Vic3RyKDMsIDEpO1xuICAgIHIgKz0gcjtcbiAgICBnICs9IGc7XG4gICAgYiArPSBiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICBncmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgIGJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICBhbHBoYTogMVxuICB9O1xufTtcblxudmFyIHJnYmEgPSBleHBvcnRzLnJnYmEgPSAoMCwgX3V0aWxzLnNwbGl0Q29sb3JWYWx1ZXMpKFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAnYWxwaGEnXSk7XG5cbnZhciBoc2xhID0gZXhwb3J0cy5oc2xhID0gKDAsIF91dGlscy5zcGxpdENvbG9yVmFsdWVzKShbJ2h1ZScsICdzYXR1cmF0aW9uJywgJ2xpZ2h0bmVzcycsICdhbHBoYSddKTtcblxudmFyIGNvbG9yID0gZXhwb3J0cy5jb2xvciA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICgoMCwgX3V0aWxzLmlzUmdiKSh2KSkge1xuICAgIHJldHVybiByZ2JhKHYpO1xuICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNIZXgpKHYpKSB7XG4gICAgcmV0dXJuIGhleCh2KTtcbiAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLmlzSHNsKSh2KSkge1xuICAgIHJldHVybiBoc2xhKHYpO1xuICB9XG5cbiAgcmV0dXJuIHY7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12Y0dGeWMyVnljeTVxY3lKZExDSnVZVzFsY3lJNld5Sm9aWGdpTENKMklpd2ljaUlzSW1jaUxDSmlJaXdpYkdWdVozUm9JaXdpYzNWaWMzUnlJaXdpY21Wa0lpd2ljR0Z5YzJWSmJuUWlMQ0puY21WbGJpSXNJbUpzZFdVaUxDSmhiSEJvWVNJc0luSm5ZbUVpTENKb2MyeGhJaXdpWTI5c2IzSWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN08wRkJSVThzU1VGQlRVRXNiMEpCUVUwc1ZVRkJRME1zUTBGQlJDeEZRVUZQTzBGQlEzaENMRTFCUVVsRExGVkJRVW83UVVGQlFTeE5RVUZQUXl4VlFVRlFPMEZCUVVFc1RVRkJWVU1zVlVGQlZqczdRVUZGUVR0QlFVTkJMRTFCUVVsSUxFVkJRVVZKTEUxQlFVWXNSMEZCVnl4RFFVRm1MRVZCUVd0Q08wRkJRMmhDU0N4UlFVRkpSQ3hGUVVGRlN5eE5RVUZHTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVZvc1EwRkJTanRCUVVOQlNDeFJRVUZKUml4RlFVRkZTeXhOUVVGR0xFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFWb3NRMEZCU2p0QlFVTkJSaXhSUVVGSlNDeEZRVUZGU3l4TlFVRkdMRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVm9zUTBGQlNqczdRVUZGUmp0QlFVTkRMRWRCVGtRc1RVRk5UenRCUVVOTVNpeFJRVUZKUkN4RlFVRkZTeXhOUVVGR0xFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFWb3NRMEZCU2p0QlFVTkJTQ3hSUVVGSlJpeEZRVUZGU3l4TlFVRkdMRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVm9zUTBGQlNqdEJRVU5CUml4UlFVRkpTQ3hGUVVGRlN5eE5RVUZHTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVZvc1EwRkJTanRCUVVOQlNpeFRRVUZMUVN4RFFVRk1PMEZCUTBGRExGTkJRVXRCTEVOQlFVdzdRVUZEUVVNc1UwRkJTMEVzUTBGQlREdEJRVU5FT3p0QlFVVkVMRk5CUVU4N1FVRkRURWNzVTBGQlMwTXNVMEZCVTA0c1EwRkJWQ3hGUVVGWkxFVkJRVm9zUTBGRVFUdEJRVVZNVHl4WFFVRlBSQ3hUUVVGVFRDeERRVUZVTEVWQlFWa3NSVUZCV2l4RFFVWkdPMEZCUjB4UExGVkJRVTFHTEZOQlFWTktMRU5CUVZRc1JVRkJXU3hGUVVGYUxFTkJTRVE3UVVGSlRFOHNWMEZCVHp0QlFVcEdMRWRCUVZBN1FVRk5SQ3hEUVhwQ1RUczdRVUV5UWtFc1NVRkJUVU1zYzBKQlFVOHNOa0pCUVdsQ0xFTkJRVU1zUzBGQlJDeEZRVUZSTEU5QlFWSXNSVUZCYVVJc1RVRkJha0lzUlVGQmVVSXNUMEZCZWtJc1EwRkJha0lzUTBGQllqczdRVUZGUVN4SlFVRk5ReXh6UWtGQlR5dzJRa0ZCYVVJc1EwRkJReXhMUVVGRUxFVkJRVkVzV1VGQlVpeEZRVUZ6UWl4WFFVRjBRaXhGUVVGdFF5eFBRVUZ1UXl4RFFVRnFRaXhEUVVGaU96dEJRVVZCTEVsQlFVMURMSGRDUVVGUkxGVkJRVU5pTEVOQlFVUXNSVUZCVHp0QlFVTXhRaXhOUVVGSkxHdENRVUZOUVN4RFFVRk9MRU5CUVVvc1JVRkJZenRCUVVOYUxGZEJRVTlYTEV0QlFVdFlMRU5CUVV3c1EwRkJVRHRCUVVORUxFZEJSa1FzVFVGRlR5eEpRVUZKTEd0Q1FVRk5RU3hEUVVGT0xFTkJRVW9zUlVGQll6dEJRVU51UWl4WFFVRlBSQ3hKUVVGSlF5eERRVUZLTEVOQlFWQTdRVUZEUkN4SFFVWk5MRTFCUlVFc1NVRkJTU3hyUWtGQlRVRXNRMEZCVGl4RFFVRktMRVZCUVdNN1FVRkRia0lzVjBGQlQxa3NTMEZCUzFvc1EwRkJUQ3hEUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVDBFc1EwRkJVRHRCUVVORUxFTkJWazBpTENKbWFXeGxJam9pY0dGeWMyVnljeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0Z5Y3k1b1lXeHNMMUJ5YjJwbFkzUnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUhOd2JHbDBRMjlzYjNKV1lXeDFaWE1zSUdselVtZGlMQ0JwYzBobGVDd2dhWE5JYzJ3Z2ZTQm1jbTl0SUNjdUwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdobGVDQTlJQ2gyS1NBOVBpQjdYRzRnSUd4bGRDQnlMQ0JuTENCaU8xeHVYRzRnSUM4dklFbG1JSGRsSUdoaGRtVWdOaUJqYUdGeVlXTjBaWEp6TENCcFpTQWpSa1l3TURBd1hHNGdJR2xtSUNoMkxteGxibWQwYUNBK0lEUXBJSHRjYmlBZ0lDQnlJRDBnZGk1emRXSnpkSElvTVN3Z01pazdYRzRnSUNBZ1p5QTlJSFl1YzNWaWMzUnlLRE1zSURJcE8xeHVJQ0FnSUdJZ1BTQjJMbk4xWW5OMGNpZzFMQ0F5S1R0Y2JseHVJQ0F2THlCUGNpQjNaU0JvWVhabElETWdZMmhoY21GamRHVnljeXdnYVdVZ0kwWXdNRnh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSElnUFNCMkxuTjFZbk4wY2lneExDQXhLVHRjYmlBZ0lDQm5JRDBnZGk1emRXSnpkSElvTWl3Z01TazdYRzRnSUNBZ1lpQTlJSFl1YzNWaWMzUnlLRE1zSURFcE8xeHVJQ0FnSUhJZ0t6MGdjanRjYmlBZ0lDQm5JQ3M5SUdjN1hHNGdJQ0FnWWlBclBTQmlPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQnlaV1E2SUhCaGNuTmxTVzUwS0hJc0lERTJLU3hjYmlBZ0lDQm5jbVZsYmpvZ2NHRnljMlZKYm5Rb1p5d2dNVFlwTEZ4dUlDQWdJR0pzZFdVNklIQmhjbk5sU1c1MEtHSXNJREUyS1N4Y2JpQWdJQ0JoYkhCb1lUb2dNVnh1SUNCOU8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSEpuWW1FZ1BTQnpjR3hwZEVOdmJHOXlWbUZzZFdWektGc25jbVZrSnl3Z0oyZHlaV1Z1Snl3Z0oySnNkV1VuTENBbllXeHdhR0VuWFNrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCb2MyeGhJRDBnYzNCc2FYUkRiMnh2Y2xaaGJIVmxjeWhiSjJoMVpTY3NJQ2R6WVhSMWNtRjBhVzl1Snl3Z0oyeHBaMmgwYm1WemN5Y3NJQ2RoYkhCb1lTZGRLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR052Ykc5eUlEMGdLSFlwSUQwK0lIdGNiaUFnYVdZZ0tHbHpVbWRpS0hZcEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhKblltRW9kaWs3WEc0Z0lIMGdaV3h6WlNCcFppQW9hWE5JWlhnb2Rpa3BJSHRjYmlBZ0lDQnlaWFIxY200Z2FHVjRLSFlwTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLR2x6U0hOc0tIWXBLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHaHpiR0VvZGlrN1hHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2RqdGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9wYXJzZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG52YXIgaGFzUkFGID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRydWUgOiBmYWxzZTtcblxudmFyIG9uTmV4dEZyYW1lID0gdm9pZCAwO1xuXG5pZiAoaGFzUkFGKSB7XG4gIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9O1xufSBlbHNlIHtcbiAgLypcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICBcbiAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG4gICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICBcbiAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICBcbiAgICBNSVQgbGljZW5zZVxuICAqL1xuICB2YXIgbGFzdFRpbWUgPSAwO1xuXG4gIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNi43IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWUgKyB0aW1lVG9DYWxsO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2sobGFzdFRpbWUpO1xuICAgIH0sIHRpbWVUb0NhbGwpO1xuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBvbk5leHRGcmFtZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12YjI0dGJtVjRkQzFtY21GdFpTNXFjeUpkTENKdVlXMWxjeUk2V3lKb1lYTlNRVVlpTENKM2FXNWtiM2NpTENKeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVWlMQ0p2Yms1bGVIUkdjbUZ0WlNJc0ltTmhiR3hpWVdOcklpd2liR0Z6ZEZScGJXVWlMQ0pqZFhKeVpXNTBWR2x0WlNJc0lrUmhkR1VpTENKblpYUlVhVzFsSWl3aWRHbHRaVlJ2UTJGc2JDSXNJazFoZEdnaUxDSnRZWGdpTENKelpYUlVhVzFsYjNWMElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRVHM3TzBGQlIwRXNTVUZCVFVFc1UwRkJWU3hQUVVGUFF5eE5RVUZRTEV0QlFXdENMRmRCUVd4Q0xFbEJRV2xEUVN4UFFVRlBReXh4UWtGQmVrTXNSMEZCYTBVc1NVRkJiRVVzUjBGQmVVVXNTMEZCZUVZN08wRkJSVUVzU1VGQlNVTXNiMEpCUVVvN08wRkJSVUVzU1VGQlNVZ3NUVUZCU2l4RlFVRlpPMEZCUTFaSExHZENRVUZqTEZWQlFVTkRMRkZCUVVRN1FVRkJRU3hYUVVGalNDeFBRVUZQUXl4eFFrRkJVQ3hEUVVFMlFrVXNVVUZCTjBJc1EwRkJaRHRCUVVGQkxFZEJRV1E3UVVGRlJDeERRVWhFTEUxQlIwODdRVUZEVERzN096czdPenM3T3pzN096dEJRV05CTEUxQlFVbERMRmRCUVZjc1EwRkJaanM3UVVGRlFVWXNaMEpCUVdNc1ZVRkJRME1zVVVGQlJDeEZRVUZqTzBGQlF6RkNMRkZCUVUxRkxHTkJRV01zU1VGQlNVTXNTVUZCU2l4SFFVRlhReXhQUVVGWUxFVkJRWEJDTzBGQlEwRXNVVUZCVFVNc1lVRkJZVU1zUzBGQlMwTXNSMEZCVEN4RFFVRlRMRU5CUVZRc1JVRkJXU3hSUVVGUlRDeGpRVUZqUkN4UlFVRjBRaXhEUVVGYUxFTkJRVzVDT3p0QlFVVkJRU3hsUVVGWFF5eGpRVUZqUnl4VlFVRjZRanM3UVVGRlFVY3NaVUZCVnp0QlFVRkJMR0ZCUVUxU0xGTkJRVk5ETEZGQlFWUXNRMEZCVGp0QlFVRkJMRXRCUVZnc1JVRkJjVU5KTEZWQlFYSkRPMEZCUTBRc1IwRlFSRHRCUVZGRU96dHJRa0ZGWTA0c1Z5SXNJbVpwYkdVaU9pSnZiaTF1WlhoMExXWnlZVzFsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhKekxtaGhiR3d2VUhKdmFtVmpkSE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnUkdWMFpXTjBJR0Z1WkNCc2IyRmtJR0Z1SUdGd2NISnZjSEpwWVhSbElHTnNiMk5ySUhObGRIUnBibWNnWm05eUlIUm9aU0JsYm5acGNtOXViV1Z1ZEZ4dUtpOWNibU52Ym5OMElHaGhjMUpCUmlBOUlDaDBlWEJsYjJZZ2QybHVaRzkzSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCM2FXNWtiM2N1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEtTQS9JSFJ5ZFdVZ09pQm1ZV3h6WlR0Y2JseHViR1YwSUc5dVRtVjRkRVp5WVcxbE8xeHVYRzVwWmlBb2FHRnpVa0ZHS1NCN1hHNGdJRzl1VG1WNGRFWnlZVzFsSUQwZ0tHTmhiR3hpWVdOcktTQTlQaUIzYVc1a2IzY3VjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsS0dOaGJHeGlZV05yS1R0Y2JseHVmU0JsYkhObElIdGNiaUFnTHlwY2JpQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVZ2NHOXNlV1pwYkd4Y2JpQWdJQ0JjYmlBZ0lDQkdiM0lnU1VVNEx6a2dSbXhwYm5OMGIyNWxjeUJoYm1RZ2JtOXVMV0p5YjNkelpYSWdaVzUyYVhKdmJtMWxiblJ6WEc1Y2JpQWdJQ0JVWVd0bGJpQm1jbTl0SUZCaGRXd2dTWEpwYzJndUlGZGxKM1psSUhOMGNtbHdjR1ZrSUc5MWRDQmpZVzVqWld4QmJtbHRZWFJwYjI1R2NtRnRaU0JqYUdWamEzTWdZbVZqWVhWelpTQjNaU0JrYjI0bmRDQm1iM2dnZDJsMGFDQjBhR0YwWEc0Z0lDQWdYRzRnSUNBZ2FIUjBjRG92TDNCaGRXeHBjbWx6YUM1amIyMHZNakF4TVM5eVpYRjFaWE4wWVc1cGJXRjBhVzl1Wm5KaGJXVXRabTl5TFhOdFlYSjBMV0Z1YVcxaGRHbHVaeTljYmlBZ0lDQm9kSFJ3T2k4dmJYa3ViM0JsY21FdVkyOXRMMlZ0YjJ4c1pYSXZZbXh2Wnk4eU1ERXhMekV5THpJd0wzSmxjWFZsYzNSaGJtbHRZWFJwYjI1bWNtRnRaUzFtYjNJdGMyMWhjblF0WlhJdFlXNXBiV0YwYVc1blhHNGdJQ0FnSUZ4dUlDQWdJSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNCd2IyeDVabWxzYkNCaWVTQkZjbWxySUUzRHRteHNaWEl1SUdacGVHVnpJR1p5YjIwZ1VHRjFiQ0JKY21semFDQmhibVFnVkdsdWJ5QmFhV3BrWld4Y2JpQWdJQ0FnWEc0Z0lDQWdUVWxVSUd4cFkyVnVjMlZjYmlBZ0tpOWNiaUFnYkdWMElHeGhjM1JVYVcxbElEMGdNRHRjYmx4dUlDQnZiazVsZUhSR2NtRnRaU0E5SUNoallXeHNZbUZqYXlrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUdOMWNuSmxiblJVYVcxbElEMGdibVYzSUVSaGRHVW9LUzVuWlhSVWFXMWxLQ2s3WEc0Z0lDQWdZMjl1YzNRZ2RHbHRaVlJ2UTJGc2JDQTlJRTFoZEdndWJXRjRLREFzSURFMkxqY2dMU0FvWTNWeWNtVnVkRlJwYldVZ0xTQnNZWE4wVkdsdFpTa3BPMXh1WEc0Z0lDQWdiR0Z6ZEZScGJXVWdQU0JqZFhKeVpXNTBWR2x0WlNBcklIUnBiV1ZVYjBOaGJHdzdYRzVjYmlBZ0lDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lHTmhiR3hpWVdOcktHeGhjM1JVYVcxbEtTd2dkR2x0WlZSdlEyRnNiQ2s3WEc0Z0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUc5dVRtVjRkRVp5WVcxbE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVJlbmRlclN0ZXA7XG5mdW5jdGlvbiBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCkge1xuICAvKipcbiAgICogV2UgdXNlIHR3byBhcnJheXMsIG9uZSBmb3IgdGhpcyBmcmFtZSBhbmQgb25lIHRvIHF1ZXVlIGZvciB0aGVcbiAgICogbmV4dCBmcmFtZSwgcmV1c2luZyBlYWNoIHRvIGF2b2lkIEdDLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICB2YXIgZnVuY3Rpb25zVG9SdW4gPSBbXTtcbiAgdmFyIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICBzY2hlZHVsZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBzdGFydFJlbmRlckxvb3AoKTtcbiAgICAgIC8vIElmIHRoaXMgY2FsbGJhY2sgaXNuJ3QgYWxyZWFkeSBzY2hlZHVsZWQgdG8gcnVuIG5leHQgZnJhbWVcbiAgICAgIGlmIChmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUucHVzaChjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNhbmNlbDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgaW5kZXhPZkNhbGxiYWNrID0gZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaW5kZXhPZkNhbGxiYWNrICE9PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXhPZkNhbGxiYWNrLCAxKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAvLyBDbGVhciBuZXh0IGZyYW1lIGxpc3RcbiAgICAgIHZhciBfcmVmID0gW2Z1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLCBmdW5jdGlvbnNUb1J1bl07XG4gICAgICAvLyBTd2FwIHRoaXMgZnJhbWUgYW5kIG5leHQgZnJhbWUgYXJyYXlzIHRvIGF2b2lkIEdDXG5cbiAgICAgIGZ1bmN0aW9uc1RvUnVuID0gX3JlZlswXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gX3JlZlsxXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIEV4ZWN1dGUgYWxsIG9mIHRoaXMgZnJhbWUncyBmdW5jdGlvbnNcbiAgICAgIHZhciBudW1UaGlzRnJhbWUgPSBmdW5jdGlvbnNUb1J1bi5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRoaXNGcmFtZTsgaSsrKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuW2ldKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZZM0psWVhSbExYSmxibVJsY2kxemRHVndMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTnlaV0YwWlZKbGJtUmxjbE4wWlhBaUxDSnpkR0Z5ZEZKbGJtUmxja3h2YjNBaUxDSm1kVzVqZEdsdmJuTlViMUoxYmlJc0ltWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsSWl3aWMyTm9aV1IxYkdVaUxDSmpZV3hzWW1GamF5SXNJbWx1WkdWNFQyWWlMQ0p3ZFhOb0lpd2lZMkZ1WTJWc0lpd2lhVzVrWlhoUFprTmhiR3hpWVdOcklpd2ljM0JzYVdObElpd2ljSEp2WTJWemN5SXNJbXhsYm1kMGFDSXNJbTUxYlZSb2FYTkdjbUZ0WlNJc0lta2lYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZCZDBKQkxHZENPMEZCUVZRc1UwRkJVMEVzWjBKQlFWUXNRMEZCTUVKRExHVkJRVEZDTEVWQlFUSkRPMEZCUTNoRU96czdPenRCUVV0QkxFMUJRVWxETEdsQ1FVRnBRaXhGUVVGeVFqdEJRVU5CTEUxQlFVbERMREJDUVVFd1FpeEZRVUU1UWpzN1FVRkZRU3hUUVVGUE8wRkJRMHhETEdOQlFWVXNWVUZCUTBNc1VVRkJSQ3hGUVVGak8wRkJRM1JDU2p0QlFVTkJPMEZCUTBFc1ZVRkJTVVVzZDBKQlFYZENSeXhQUVVGNFFpeERRVUZuUTBRc1VVRkJhRU1zVFVGQk9FTXNRMEZCUXl4RFFVRnVSQ3hGUVVGelJEdEJRVU53UkVZc1owTkJRWGRDU1N4SlFVRjRRaXhEUVVFMlFrWXNVVUZCTjBJN1FVRkRSRHRCUVVOR0xFdEJVRWs3TzBGQlUweEhMRmxCUVZFc1ZVRkJRMGdzVVVGQlJDeEZRVUZqTzBGQlEzQkNMRlZCUVUxSkxHdENRVUZyUWs0c2QwSkJRWGRDUnl4UFFVRjRRaXhEUVVGblEwUXNVVUZCYUVNc1EwRkJlRUk3UVVGRFFTeFZRVUZKU1N4dlFrRkJiMElzUTBGQlF5eERRVUY2UWl4RlFVRTBRanRCUVVNeFFrNHNaME5CUVhkQ1R5eE5RVUY0UWl4RFFVRXJRa1FzWlVGQkwwSXNSVUZCWjBRc1EwRkJhRVE3UVVGRFJEdEJRVU5HTEV0QlpFazdPMEZCWjBKTVJTeGhRVUZUTEZsQlFVMDdPMEZCU1dJN1FVRktZU3hwUWtGRkswSXNRMEZCUTFJc2RVSkJRVVFzUlVGQk1FSkVMR05CUVRGQ0xFTkJSaTlDTzBGQlEySTdPMEZCUTBOQkxHOUNRVVpaTzBGQlJVbERMRFpDUVVaS08wRkJTMkpCTERoQ1FVRjNRbE1zVFVGQmVFSXNSMEZCYVVNc1EwRkJha003TzBGQlJVRTdRVUZEUVN4VlFVRk5ReXhsUVVGbFdDeGxRVUZsVlN4TlFVRndRenRCUVVOQkxGZEJRVXNzU1VGQlNVVXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKUkN4WlFVRndRaXhGUVVGclEwTXNSMEZCYkVNc1JVRkJkVU03UVVGRGNrTmFMSFZDUVVGbFdTeERRVUZtTzBGQlEwUTdRVUZEUmp0QlFUVkNTU3hIUVVGUU8wRkJPRUpFSWl3aVptbHNaU0k2SW1OeVpXRjBaUzF5Wlc1a1pYSXRjM1JsY0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGeWN5NW9ZV3hzTDFCeWIycGxZM1J6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLU0I3WEc0Z0lDOHFLbHh1SUNBZ0tpQlhaU0IxYzJVZ2RIZHZJR0Z5Y21GNWN5d2diMjVsSUdadmNpQjBhR2x6SUdaeVlXMWxJR0Z1WkNCdmJtVWdkRzhnY1hWbGRXVWdabTl5SUhSb1pWeHVJQ0FnS2lCdVpYaDBJR1p5WVcxbExDQnlaWFZ6YVc1bklHVmhZMmdnZEc4Z1lYWnZhV1FnUjBNdVhHNGdJQ0FxSUVCMGVYQmxJSHRCY25KaGVYMWNiaUFnSUNvdlhHNGdJR3hsZENCbWRXNWpkR2x2Ym5OVWIxSjFiaUE5SUZ0ZE8xeHVJQ0JzWlhRZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1VnUFNCYlhUdGNibHh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJSE5qYUdWa2RXeGxPaUFvWTJGc2JHSmhZMnNwSUQwK0lIdGNiaUFnSUNBZ0lITjBZWEowVW1WdVpHVnlURzl2Y0NncE8xeHVJQ0FnSUNBZ0x5OGdTV1lnZEdocGN5QmpZV3hzWW1GamF5QnBjMjRuZENCaGJISmxZV1I1SUhOamFHVmtkV3hsWkNCMGJ5QnlkVzRnYm1WNGRDQm1jbUZ0WlZ4dUlDQWdJQ0FnYVdZZ0tHWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTG1sdVpHVjRUMllvWTJGc2JHSmhZMnNwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2Ym5OVWIxSjFiazVsZUhSR2NtRnRaUzV3ZFhOb0tHTmhiR3hpWVdOcktUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyRnVZMlZzT2lBb1kyRnNiR0poWTJzcElEMCtJSHRjYmlBZ0lDQWdJR052Ym5OMElHbHVaR1Y0VDJaRFlXeHNZbUZqYXlBOUlHWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTG1sdVpHVjRUMllvWTJGc2JHSmhZMnNwTzF4dUlDQWdJQ0FnYVdZZ0tHbHVaR1Y0VDJaRFlXeHNZbUZqYXlBaFBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YzNCc2FXTmxLR2x1WkdWNFQyWkRZV3hzWW1GamF5d2dNU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSEJ5YjJObGMzTTZJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDOHZJRk4zWVhBZ2RHaHBjeUJtY21GdFpTQmhibVFnYm1WNGRDQm1jbUZ0WlNCaGNuSmhlWE1nZEc4Z1lYWnZhV1FnUjBOY2JpQWdJQ0FnSUZ0bWRXNWpkR2x2Ym5OVWIxSjFiaXdnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVmRJRDBnVzJaMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxMQ0JtZFc1amRHbHZibk5VYjFKMWJsMDdYRzVjYmlBZ0lDQWdJQzh2SUVOc1pXRnlJRzVsZUhRZ1puSmhiV1VnYkdsemRGeHVJQ0FnSUNBZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YkdWdVozUm9JRDBnTUR0Y2JseHVJQ0FnSUNBZ0x5OGdSWGhsWTNWMFpTQmhiR3dnYjJZZ2RHaHBjeUJtY21GdFpTZHpJR1oxYm1OMGFXOXVjMXh1SUNBZ0lDQWdZMjl1YzNRZ2JuVnRWR2hwYzBaeVlXMWxJRDBnWm5WdVkzUnBiMjV6Vkc5U2RXNHViR1Z1WjNSb08xeHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFVYUdselJuSmhiV1U3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZibk5VYjFKMWJsdHBYU2dwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZUdGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL2NyZWF0ZS1yZW5kZXItc3RlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZFN0eWxlUHJvcGVydHlTdHJpbmc7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcbnZhciB0cmFuc2xhdGVNYXAgPSB7XG4gIHg6IFRSQU5TTEFURSArICdYJyxcbiAgeTogVFJBTlNMQVRFICsgJ1knLFxuICB6OiBUUkFOU0xBVEUgKyAnWidcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkU3R5bGVQcm9wZXJ0eVN0cmluZyhlbGVtZW50LCBzdGF0ZSwgY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgdmFyIHByb3BlcnR5U3RyaW5nID0gJyc7XG4gIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSAnJztcbiAgdmFyIGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICB2YXIgdHJhbnNmb3JtSGFzWiA9IGZhbHNlO1xuXG4gIC8vIEZpcnN0IGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgY2hhbmdlZCB0cmFuc2Zvcm0gdmFsdWVzXG4gIC8vIGFuZCBpZiB0cnVlIGFkZCBhbGwgdHJhbnNmb3JtIHZhbHVlc1xuICB2YXIgbnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNoYW5nZWRWYWx1ZXM7IGkrKykge1xuICAgIHZhciBrZXkgPSBjaGFuZ2VkVmFsdWVzW2ldO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBwcm9wZXJ0eSwgYWRkIGFsbCBvdGhlciB0cmFuc2Zvcm0gcHJvcHNcbiAgICAvLyB0byBjaGFuZ2VkVmFsdWVzIGFuZCB0aGVuIGJyZWFrXG4gICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuXG4gICAgICBmb3IgKHZhciBfa2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRbX2tleV0gJiYgY2hhbmdlZFZhbHVlcy5pbmRleE9mKF9rZXkpID09PSAtMSkge1xuICAgICAgICAgIGNoYW5nZWRWYWx1ZXMucHVzaChfa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgdG90YWxOdW1DaGFuZ2VkVmFsdWVzID0gY2hhbmdlZFZhbHVlcy5sZW5ndGg7XG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCB0b3RhbE51bUNoYW5nZWRWYWx1ZXM7IF9pKyspIHtcbiAgICB2YXIgX2tleTIgPSBjaGFuZ2VkVmFsdWVzW19pXTtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZVtfa2V5Ml07XG5cbiAgICBpZiAodHJhbnNsYXRlTWFwW19rZXkyXSkge1xuICAgICAgX2tleTIgPSB0cmFuc2xhdGVNYXBbX2tleTJdO1xuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSBudW1iZXIgb3Igb2JqZWN0IGFuZCB3ZSBoYXZlIGZpbHRlciwgYXBwbHkgZmlsdGVyXG4gICAgaWYgKF92YWx1ZVR5cGVzMi5kZWZhdWx0W19rZXkyXSAmJiAoKDAsIF91dGlscy5pc051bSkodmFsdWUpIHx8ICgwLCBfdXRpbHMuaXNPYmopKHZhbHVlKSkgJiYgX3ZhbHVlVHlwZXMyLmRlZmF1bHRbX2tleTJdLnRyYW5zZm9ybSkge1xuICAgICAgdmFsdWUgPSBfdmFsdWVUeXBlczIuZGVmYXVsdFtfa2V5Ml0udHJhbnNmb3JtKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W19rZXkyXSkge1xuICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IF9rZXkyICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgdHJhbnNmb3JtSGFzWiA9IF9rZXkyID09PSB0cmFuc2xhdGVNYXAueiA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShfa2V5MiwgdHJ1ZSkgKyAnOicgKyB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSBoYXZlIHRyYW5zZm9ybSBwcm9wcywgYnVpbGQgYSB0cmFuc2Zvcm0gc3RyaW5nXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSB0cmFuc2xhdGVNYXAueiArICcoMCknO1xuICAgIH1cblxuICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKCd0cmFuc2Zvcm0nLCB0cnVlKSArICc6JyArIHRyYW5zZm9ybVN0cmluZztcbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBwcm9wZXJ0eVN0cmluZztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzSmxibVJsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUppZFdsc1pGTjBlV3hsVUhKdmNHVnlkSGxUZEhKcGJtY2lMQ0pVVWtGT1UweEJWRVVpTENKMGNtRnVjMnhoZEdWTllYQWlMQ0o0SWl3aWVTSXNJbm9pTENKbGJHVnRaVzUwSWl3aWMzUmhkR1VpTENKamFHRnVaMlZrVm1Gc2RXVnpJaXdpWlc1aFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjRpTENKd2NtOXdaWEowZVZOMGNtbHVaeUlzSW5SeVlXNXpabTl5YlZOMGNtbHVaeUlzSW1oaGMxUnlZVzV6Wm05eWJTSXNJblJ5WVc1elptOXliVWhoYzFvaUxDSnVkVzFEYUdGdVoyVmtWbUZzZFdWeklpd2liR1Z1WjNSb0lpd2lhU0lzSW10bGVTSXNJbWx1WkdWNFQyWWlMQ0p3ZFhOb0lpd2lkRzkwWVd4T2RXMURhR0Z1WjJWa1ZtRnNkV1Z6SWl3aWRtRnNkV1VpTENKMGNtRnVjMlp2Y20waUxDSnpkSGxzWlNJc0ltTnpjMVJsZUhRaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRlpkMEpCTEhkQ096dEJRVnA0UWpzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVVkJMRWxCUVUxRExGbEJRVmtzVjBGQmJFSTdRVUZEUVN4SlFVRk5ReXhsUVVGbE8wRkJRMjVDUXl4TFFVRkhSaXhaUVVGWkxFZEJSRWs3UVVGRmJrSkhMRXRCUVVkSUxGbEJRVmtzUjBGR1NUdEJRVWR1UWtrc1MwRkJSMG9zV1VGQldUdEJRVWhKTEVOQlFYSkNPenRCUVUxbExGTkJRVk5FTEhkQ1FVRlVMRU5CUVd0RFRTeFBRVUZzUXl4RlFVRXlRME1zUzBGQk0wTXNSVUZCYTBSRExHRkJRV3hFTEVWQlFXbEZReXd3UWtGQmFrVXNSVUZCTmtZN1FVRkRNVWNzVFVGQlNVTXNhVUpCUVdsQ0xFVkJRWEpDTzBGQlEwRXNUVUZCU1VNc2EwSkJRV3RDTEVWQlFYUkNPMEZCUTBFc1RVRkJTVU1zWlVGQlpTeExRVUZ1UWp0QlFVTkJMRTFCUVVsRExHZENRVUZuUWl4TFFVRndRanM3UVVGRlFUdEJRVU5CTzBGQlEwRXNUVUZCVFVNc2JVSkJRVzFDVGl4alFVRmpUeXhOUVVGMlF6dEJRVU5CTEU5QlFVc3NTVUZCU1VNc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpSaXhuUWtGQmNFSXNSVUZCYzBORkxFZEJRWFJETEVWQlFUSkRPMEZCUTNwRExGRkJRVTFETEUxQlFVMVVMR05CUVdOUkxFTkJRV1FzUTBGQldqczdRVUZGUVR0QlFVTkJPMEZCUTBFc1VVRkJTU3g1UWtGQlpVTXNSMEZCWml4RFFVRktMRVZCUVhsQ08wRkJRM1pDVEN4eFFrRkJaU3hKUVVGbU96dEJRVVZCTEZkQlFVc3NTVUZCU1Vzc1NVRkJWQ3hKUVVGblFsWXNTMEZCYUVJc1JVRkJkVUk3UVVGRGNrSXNXVUZCU1N4NVFrRkJaVlVzU1VGQlppeExRVUYxUWxRc1kwRkJZMVVzVDBGQlpDeERRVUZ6UWtRc1NVRkJkRUlzVFVGQkswSXNRMEZCUXl4RFFVRXpSQ3hGUVVFNFJEdEJRVU0xUkZRc2QwSkJRV05YTEVsQlFXUXNRMEZCYlVKR0xFbEJRVzVDTzBGQlEwUTdRVUZEUmpzN1FVRkZSRHRCUVVORU8wRkJRMFk3TzBGQlJVUXNUVUZCVFVjc2QwSkJRWGRDV2l4alFVRmpUeXhOUVVFMVF6dEJRVU5CTEU5QlFVc3NTVUZCU1VNc1MwRkJTU3hEUVVGaUxFVkJRV2RDUVN4TFFVRkpTU3h4UWtGQmNFSXNSVUZCTWtOS0xFbEJRVE5ETEVWQlFXZEVPMEZCUXpsRExGRkJRVWxETEZGQlFVMVVMR05CUVdOUkxFVkJRV1FzUTBGQlZqdEJRVU5CTEZGQlFVbExMRkZCUVZGa0xFMUJRVTFWTEV0QlFVNHNRMEZCV2pzN1FVRkZRU3hSUVVGSlppeGhRVUZoWlN4TFFVRmlMRU5CUVVvc1JVRkJkVUk3UVVGRGNrSkJMR05CUVUxbUxHRkJRV0ZsTEV0QlFXSXNRMEZCVGp0QlFVTkVPenRCUVVWRU8wRkJRMEVzVVVGQlNTeHhRa0ZCVjBFc1MwRkJXQ3hOUVVGdlFpeHJRa0ZCVFVrc1MwRkJUaXhMUVVGblFpeHJRa0ZCVFVFc1MwRkJUaXhEUVVGd1F5eExRVUZ4UkN4eFFrRkJWMG9zUzBGQldDeEZRVUZuUWtzc1UwRkJla1VzUlVGQmIwWTdRVUZEYkVaRUxHTkJRVkVzY1VKQlFWZEtMRXRCUVZnc1JVRkJaMEpMTEZOQlFXaENMRU5CUVRCQ1JDeExRVUV4UWl4RFFVRlNPMEZCUTBRN08wRkJSVVFzVVVGQlNTeDVRa0ZCWlVvc1MwRkJaaXhEUVVGS0xFVkJRWGxDTzBGQlEzWkNUaXg1UWtGQmJVSk5MRkZCUVUwc1IwRkJUaXhIUVVGWlNTeExRVUZhTEVkQlFXOUNMRWxCUVhaRE8wRkJRMEZTTEhOQ1FVRnBRa2tzVlVGQlVXWXNZVUZCWVVjc1EwRkJkRUlzUjBGQk1rSXNTVUZCTTBJc1IwRkJhME5STEdGQlFXeEVPMEZCUlVRc1MwRktSQ3hOUVVsUE8wRkJRMHhJTEhkQ1FVRnJRaXhOUVVGTkxIZENRVUZUVHl4TFFVRlVMRVZCUVdNc1NVRkJaQ3hEUVVGT0xFZEJRVFJDTEVkQlFUVkNMRWRCUVd0RFNTeExRVUZ3UkR0QlFVTkVPMEZCUTBZN08wRkJSVVE3UVVGRFFTeE5RVUZKVkN4WlFVRktMRVZCUVd0Q08wRkJRMmhDTEZGQlFVa3NRMEZCUTBNc1lVRkJSQ3hKUVVGclFrb3NNRUpCUVhSQ0xFVkJRV3RFTzBGQlEyaEVSU3g1UWtGQmJVSlVMR0ZCUVdGSExFTkJRV0lzUjBGQmFVSXNTMEZCY0VNN1FVRkRSRHM3UVVGRlJFc3NjMEpCUVd0Q0xFMUJRVTBzZDBKQlFWTXNWMEZCVkN4RlFVRnpRaXhKUVVGMFFpeERRVUZPTEVkQlFXOURMRWRCUVhCRExFZEJRVEJEUXl4bFFVRTFSRHRCUVVORU96dEJRVVZFVEN4VlFVRlJhVUlzUzBGQlVpeERRVUZqUXl4UFFVRmtMRWxCUVhsQ1pDeGpRVUY2UWp0QlFVTkVJaXdpWm1sc1pTSTZJbkpsYm1SbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRnljeTVvWVd4c0wxQnliMnBsWTNSekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lCbWNtOXRJQ2N1TDNSeVlXNXpabTl5YlMxd2NtOXdjeWM3WEc1cGJYQnZjblFnZG1Gc2RXVlVlWEJsY3lCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekp6dGNibWx0Y0c5eWRDQndjbVZtYVhobGNpQm1jbTl0SUNjdUwzQnlaV1pwZUdWeUp6dGNibWx0Y0c5eWRDQjdJR2x6VG5WdExDQnBjMDlpYWlCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtTnZibk4wSUZSU1FVNVRURUZVUlNBOUlDZDBjbUZ1YzJ4aGRHVW5PMXh1WTI5dWMzUWdkSEpoYm5Oc1lYUmxUV0Z3SUQwZ2UxeHVJQ0I0T2lCVVVrRk9VMHhCVkVVZ0t5QW5XQ2NzWEc0Z0lIazZJRlJTUVU1VFRFRlVSU0FySUNkWkp5eGNiaUFnZWpvZ1ZGSkJUbE5NUVZSRklDc2dKMW9uWEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmlkV2xzWkZOMGVXeGxVSEp2Y0dWeWRIbFRkSEpwYm1jb1pXeGxiV1Z1ZEN3Z2MzUmhkR1VzSUdOb1lXNW5aV1JXWVd4MVpYTXNJR1Z1WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVLU0I3WEc0Z0lHeGxkQ0J3Y205d1pYSjBlVk4wY21sdVp5QTlJQ2NuTzF4dUlDQnNaWFFnZEhKaGJuTm1iM0p0VTNSeWFXNW5JRDBnSnljN1hHNGdJR3hsZENCb1lYTlVjbUZ1YzJadmNtMGdQU0JtWVd4elpUdGNiaUFnYkdWMElIUnlZVzV6Wm05eWJVaGhjMW9nUFNCbVlXeHpaVHRjYmx4dUlDQXZMeUJHYVhKemRDQmphR1ZqYXlCcFppQjBhR1Z5WlNCaGNtVWdZVzU1SUdOb1lXNW5aV1FnZEhKaGJuTm1iM0p0SUhaaGJIVmxjMXh1SUNBdkx5QmhibVFnYVdZZ2RISjFaU0JoWkdRZ1lXeHNJSFJ5WVc1elptOXliU0IyWVd4MVpYTmNiaUFnWTI5dWMzUWdiblZ0UTJoaGJtZGxaRlpoYkhWbGN5QTlJR05vWVc1blpXUldZV3gxWlhNdWJHVnVaM1JvTzF4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlVOb1lXNW5aV1JXWVd4MVpYTTdJR2tyS3lrZ2UxeHVJQ0FnSUdOdmJuTjBJR3RsZVNBOUlHTm9ZVzVuWldSV1lXeDFaWE5iYVYwN1hHNWNiaUFnSUNBdkx5QkpaaUIwYUdseklHbHpJR0VnZEhKaGJuTm1iM0p0SUhCeWIzQmxjblI1TENCaFpHUWdZV3hzSUc5MGFHVnlJSFJ5WVc1elptOXliU0J3Y205d2MxeHVJQ0FnSUM4dklIUnZJR05vWVc1blpXUldZV3gxWlhNZ1lXNWtJSFJvWlc0Z1luSmxZV3RjYmlBZ0lDQnBaaUFvZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ2FHRnpWSEpoYm5ObWIzSnRJRDBnZEhKMVpUdGNibHh1SUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlITjBZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTFRY205d2MxdHJaWGxkSUNZbUlHTm9ZVzVuWldSV1lXeDFaWE11YVc1a1pYaFBaaWhyWlhrcElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR05vWVc1blpXUldZV3gxWlhNdWNIVnphQ2hyWlhrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHTnZibk4wSUhSdmRHRnNUblZ0UTJoaGJtZGxaRlpoYkhWbGN5QTlJR05vWVc1blpXUldZV3gxWlhNdWJHVnVaM1JvTzF4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJ2ZEdGc1RuVnRRMmhoYm1kbFpGWmhiSFZsY3pzZ2FTc3JLU0I3WEc0Z0lDQWdiR1YwSUd0bGVTQTlJR05vWVc1blpXUldZV3gxWlhOYmFWMDdYRzRnSUNBZ2JHVjBJSFpoYkhWbElEMGdjM1JoZEdWYmEyVjVYVHRjYmx4dUlDQWdJR2xtSUNoMGNtRnVjMnhoZEdWTllYQmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ2EyVjVJRDBnZEhKaGJuTnNZWFJsVFdGd1cydGxlVjA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnU1dZZ2RHaHBjeUJwY3lCaElHNTFiV0psY2lCdmNpQnZZbXBsWTNRZ1lXNWtJSGRsSUdoaGRtVWdabWxzZEdWeUxDQmhjSEJzZVNCbWFXeDBaWEpjYmlBZ0lDQnBaaUFvZG1Gc2RXVlVlWEJsYzF0clpYbGRJQ1ltSUNocGMwNTFiU2gyWVd4MVpTa2dmSHdnYVhOUFltb29kbUZzZFdVcEtTQW1KaUIyWVd4MVpWUjVjR1Z6VzJ0bGVWMHVkSEpoYm5ObWIzSnRLU0I3WEc0Z0lDQWdJQ0IyWVd4MVpTQTlJSFpoYkhWbFZIbHdaWE5iYTJWNVhTNTBjbUZ1YzJadmNtMG9kbUZzZFdVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMVFjbTl3YzF0clpYbGRLU0I3WEc0Z0lDQWdJQ0IwY21GdWMyWnZjbTFUZEhKcGJtY2dLejBnYTJWNUlDc2dKeWduSUNzZ2RtRnNkV1VnS3lBbktTQW5PMXh1SUNBZ0lDQWdkSEpoYm5ObWIzSnRTR0Z6V2lBOUlDaHJaWGtnUFQwOUlIUnlZVzV6YkdGMFpVMWhjQzU2S1NBL0lIUnlkV1VnT2lCMGNtRnVjMlp2Y20xSVlYTmFPMXh1WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIQnliM0JsY25SNVUzUnlhVzVuSUNzOUlDYzdKeUFySUhCeVpXWnBlR1Z5S0d0bGVTd2dkSEoxWlNrZ0t5QW5PaWNnS3lCMllXeDFaVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2THlCSlppQjNaU0JvWVhabElIUnlZVzV6Wm05eWJTQndjbTl3Y3l3Z1luVnBiR1FnWVNCMGNtRnVjMlp2Y20wZ2MzUnlhVzVuWEc0Z0lHbG1JQ2hvWVhOVWNtRnVjMlp2Y20wcElIdGNiaUFnSUNCcFppQW9JWFJ5WVc1elptOXliVWhoYzFvZ0ppWWdaVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNHBJSHRjYmlBZ0lDQWdJSFJ5WVc1elptOXliVk4wY21sdVp5QXJQU0IwY21GdWMyeGhkR1ZOWVhBdWVpQXJJQ2NvTUNrbk8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhCeWIzQmxjblI1VTNSeWFXNW5JQ3M5SUNjN0p5QXJJSEJ5WldacGVHVnlLQ2QwY21GdWMyWnZjbTBuTENCMGNuVmxLU0FySUNjNkp5QXJJSFJ5WVc1elptOXliVk4wY21sdVp6dGNiaUFnZlZ4dVhHNGdJR1ZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBclBTQndjbTl3WlhKMGVWTjBjbWx1Wnp0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy9yZW5kZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGF4ZXMgPSBbJ1gnLCAnWScsICdaJ107XG5cbnZhciB0cmFuc2Zvcm1Qcm9wcyA9IHtcbiAgeDogdHJ1ZSxcbiAgeTogdHJ1ZSxcbiAgejogdHJ1ZVxufTtcblxudmFyIFNDQUxFID0gJ3NjYWxlJztcbnZhciBST1RBVEUgPSAncm90YXRlJztcbnZhciBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xudmFyIFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaChmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gYXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWU7XG4gIH0pO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zZm9ybVByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNSeVlXNXpabTl5YlMxd2NtOXdjeTVxY3lKZExDSnVZVzFsY3lJNld5SmhlR1Z6SWl3aWRISmhibk5tYjNKdFVISnZjSE1pTENKNElpd2llU0lzSW5vaUxDSlRRMEZNUlNJc0lsSlBWRUZVUlNJc0lsUlNRVTVUUms5U1RWOVFSVkpUVUVWRFZFbFdSU0lzSWxSRlVrMVRJaXdpWm05eVJXRmphQ0lzSW5SbGNtMGlMQ0poZUdseklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hKUVVGTlFTeFBRVUZQTEVOQlFVTXNSMEZCUkN4RlFVRk5MRWRCUVU0c1JVRkJWeXhIUVVGWUxFTkJRV0k3TzBGQlJVRXNTVUZCU1VNc2FVSkJRV2xDTzBGQlEyNUNReXhMUVVGSExFbEJSR2RDTzBGQlJXNUNReXhMUVVGSExFbEJSbWRDTzBGQlIyNUNReXhMUVVGSE8wRkJTR2RDTEVOQlFYSkNPenRCUVUxQkxFbEJRVTFETEZGQlFWRXNUMEZCWkR0QlFVTkJMRWxCUVUxRExGTkJRVk1zVVVGQlpqdEJRVU5CTEVsQlFVMURMSGRDUVVGM1FpeHpRa0ZCT1VJN1FVRkRRU3hKUVVGTlF5eFJRVUZSTEVOQlFVTXNWMEZCUkN4RlFVRmpTQ3hMUVVGa0xFVkJRWEZDUXl4TlFVRnlRaXhGUVVFMlFpeE5RVUUzUWl4RlFVRnhRME1zY1VKQlFYSkRMRU5CUVdRN08wRkJSVUZPTEdWQlFXVkxMRTFCUVdZc1NVRkJlVUpNTEdWQlFXVkpMRXRCUVdZc1NVRkJkMEpLTEdWQlFXVk5MSEZDUVVGbUxFbEJRWGRETEVsQlFYcEdPenRCUVVWQlF5eE5RVUZOUXl4UFFVRk9MRU5CUVdNc1ZVRkJRME1zU1VGQlJEdEJRVUZCTEZOQlFWVldMRXRCUVV0VExFOUJRVXdzUTBGQllTeFZRVUZEUlN4SlFVRkVPMEZCUVVFc1YwRkJWVllzWlVGQlpWTXNUMEZCVDBNc1NVRkJkRUlzU1VGQk9FSXNTVUZCZUVNN1FVRkJRU3hIUVVGaUxFTkJRVlk3UVVGQlFTeERRVUZrT3p0clFrRkZaVllzWXlJc0ltWnBiR1VpT2lKMGNtRnVjMlp2Y20wdGNISnZjSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoY25NdWFHRnNiQzlRY205cVpXTjBjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JoZUdWeklEMGdXeWRZSnl3Z0oxa25MQ0FuV2lkZE8xeHVYRzVzWlhRZ2RISmhibk5tYjNKdFVISnZjSE1nUFNCN1hHNGdJSGc2SUhSeWRXVXNYRzRnSUhrNklIUnlkV1VzWEc0Z0lIbzZJSFJ5ZFdWY2JuMDdYRzVjYm1OdmJuTjBJRk5EUVV4RklEMGdKM05qWVd4bEp6dGNibU52Ym5OMElGSlBWRUZVUlNBOUlDZHliM1JoZEdVbk8xeHVZMjl1YzNRZ1ZGSkJUbE5HVDFKTlgxQkZVbE5RUlVOVVNWWkZJRDBnSjNSeVlXNXpabTl5YlZCbGNuTndaV04wYVhabEp6dGNibU52Ym5OMElGUkZVazFUSUQwZ1d5ZDBjbUZ1YzJ4aGRHVW5MQ0JUUTBGTVJTd2dVazlVUVZSRkxDQW5jMnRsZHljc0lGUlNRVTVUUms5U1RWOVFSVkpUVUVWRFZFbFdSVjA3WEc1Y2JuUnlZVzV6Wm05eWJWQnliM0J6VzFKUFZFRlVSVjBnUFNCMGNtRnVjMlp2Y20xUWNtOXdjMXRUUTBGTVJWMGdQU0IwY21GdWMyWnZjbTFRY205d2MxdFVVa0ZPVTBaUFVrMWZVRVZTVTFCRlExUkpWa1ZkSUQwZ2RISjFaVHRjYmx4dVZFVlNUVk11Wm05eVJXRmphQ2dvZEdWeWJTa2dQVDRnWVhobGN5NW1iM0pGWVdOb0tDaGhlR2x6S1NBOVBpQjBjbUZ1YzJadmNtMVFjbTl3YzF0MFpYSnRJQ3NnWVhocGMxMGdQU0IwY25WbEtTazdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSFJ5WVc1elptOXliVkJ5YjNCek95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL3RyYW5zZm9ybS1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL2luYy92YWx1ZS10eXBlcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIC8vIENvbG9yIHByb3BzXG4gIGNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYmFja2dyb3VuZENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgb3V0bGluZUNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgZmlsbDogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIHN0cm9rZTogX3ZhbHVlVHlwZXMuY29sb3IsXG5cbiAgLy8gQm9yZGVyIHByb3BzXG4gIGJvcmRlckNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyVG9wQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJSaWdodENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyQm90dG9tQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJMZWZ0Q29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJSYWRpdXM6IF92YWx1ZVR5cGVzLnB4LFxuXG4gIC8vIFBvc2l0aW9uaW5nXG4gIHdpZHRoOiBfdmFsdWVUeXBlcy5weCxcbiAgaGVpZ2h0OiBfdmFsdWVUeXBlcy5weCxcbiAgdG9wOiBfdmFsdWVUeXBlcy5weCxcbiAgbGVmdDogX3ZhbHVlVHlwZXMucHgsXG4gIGJvdHRvbTogX3ZhbHVlVHlwZXMucHgsXG4gIHJpZ2h0OiBfdmFsdWVUeXBlcy5weCxcblxuICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICByb3RhdGU6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVg6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVk6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVo6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHNjYWxlOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVYOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVZOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVaOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2tld1g6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHNrZXdZOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICBkaXN0YW5jZTogX3ZhbHVlVHlwZXMucHgsXG4gIHRyYW5zbGF0ZVg6IF92YWx1ZVR5cGVzLnB4LFxuICB0cmFuc2xhdGVZOiBfdmFsdWVUeXBlcy5weCxcbiAgdHJhbnNsYXRlWjogX3ZhbHVlVHlwZXMucHgsXG4gIHBlcnNwZWN0aXZlOiBfdmFsdWVUeXBlcy5weCxcbiAgb3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGFcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM1poYkhWbExYUjVjR1Z6TG1weklsMHNJbTVoYldWeklqcGJJbU52Ykc5eUlpd2lZbUZqYTJkeWIzVnVaRU52Ykc5eUlpd2liM1YwYkdsdVpVTnZiRzl5SWl3aVptbHNiQ0lzSW5OMGNtOXJaU0lzSW1KdmNtUmxja052Ykc5eUlpd2lZbTl5WkdWeVZHOXdRMjlzYjNJaUxDSmliM0prWlhKU2FXZG9kRU52Ykc5eUlpd2lZbTl5WkdWeVFtOTBkRzl0UTI5c2IzSWlMQ0ppYjNKa1pYSk1aV1owUTI5c2IzSWlMQ0ppYjNKa1pYSlNZV1JwZFhNaUxDSjNhV1IwYUNJc0ltaGxhV2RvZENJc0luUnZjQ0lzSW14bFpuUWlMQ0ppYjNSMGIyMGlMQ0p5YVdkb2RDSXNJbkp2ZEdGMFpTSXNJbkp2ZEdGMFpWZ2lMQ0p5YjNSaGRHVlpJaXdpY205MFlYUmxXaUlzSW5OallXeGxJaXdpYzJOaGJHVllJaXdpYzJOaGJHVlpJaXdpYzJOaGJHVmFJaXdpYzJ0bGQxZ2lMQ0p6YTJWM1dTSXNJbVJwYzNSaGJtTmxJaXdpZEhKaGJuTnNZWFJsV0NJc0luUnlZVzV6YkdGMFpWa2lMQ0owY21GdWMyeGhkR1ZhSWl3aWNHVnljM0JsWTNScGRtVWlMQ0p2Y0dGamFYUjVJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN08ydENRVU5sTzBGQlEySTdRVUZEUVVFc01FSkJSbUU3UVVGSFlrTXNiME5CU0dFN1FVRkpZa01zYVVOQlNtRTdRVUZMWWtNc2VVSkJUR0U3UVVGTllrTXNNa0pCVG1FN08wRkJVV0k3UVVGRFFVTXNaME5CVkdFN1FVRlZZa01zYlVOQlZtRTdRVUZYWWtNc2NVTkJXR0U3UVVGWllrTXNjME5CV21FN1FVRmhZa01zYjBOQlltRTdRVUZqWWtNc09FSkJaR0U3TzBGQlowSmlPMEZCUTBGRExIVkNRV3BDWVR0QlFXdENZa01zZDBKQmJFSmhPMEZCYlVKaVF5eHhRa0Z1UW1FN1FVRnZRbUpETEhOQ1FYQkNZVHRCUVhGQ1lrTXNkMEpCY2tKaE8wRkJjMEppUXl4MVFrRjBRbUU3TzBGQmQwSmlPMEZCUTBGRExEWkNRWHBDWVR0QlFUQkNZa01zT0VKQk1VSmhPMEZCTWtKaVF5dzRRa0V6UW1FN1FVRTBRbUpETERoQ1FUVkNZVHRCUVRaQ1lrTXNNRUpCTjBKaE8wRkJPRUppUXl3eVFrRTVRbUU3UVVFclFtSkRMREpDUVM5Q1lUdEJRV2REWWtNc01rSkJhRU5oTzBGQmFVTmlReXcwUWtGcVEyRTdRVUZyUTJKRExEUkNRV3hEWVR0QlFXMURZa01zTUVKQmJrTmhPMEZCYjBOaVF5dzBRa0Z3UTJFN1FVRnhRMkpETERSQ1FYSkRZVHRCUVhORFlrTXNORUpCZEVOaE8wRkJkVU5pUXl3MlFrRjJRMkU3UVVGM1EySkRPMEZCZUVOaExFTWlMQ0ptYVd4bElqb2lkbUZzZFdVdGRIbHdaWE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoY25NdWFHRnNiQzlRY205cVpXTjBjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCaGJIQm9ZU3dnWTI5c2IzSXNJR1JsWjNKbFpYTXNJSE5qWVd4bExDQndlQ0I5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkyWVd4MVpTMTBlWEJsY3ljN0lGeHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0F2THlCRGIyeHZjaUJ3Y205d2MxeHVJQ0JqYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0poWTJ0bmNtOTFibVJEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJRzkxZEd4cGJtVkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHWnBiR3c2SUdOdmJHOXlMRnh1SUNCemRISnZhMlU2SUdOdmJHOXlMRnh1WEc0Z0lDOHZJRUp2Y21SbGNpQndjbTl3YzF4dUlDQmliM0prWlhKRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdKdmNtUmxjbFJ2Y0VOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnWW05eVpHVnlVbWxuYUhSRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdKdmNtUmxja0p2ZEhSdmJVTnZiRzl5T2lCamIyeHZjaXhjYmlBZ1ltOXlaR1Z5VEdWbWRFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ1ltOXlaR1Z5VW1Ga2FYVnpPaUJ3ZUN4Y2JseHVJQ0F2THlCUWIzTnBkR2x2Ym1sdVoxeHVJQ0IzYVdSMGFEb2djSGdzWEc0Z0lHaGxhV2RvZERvZ2NIZ3NJQ0JjYmlBZ2RHOXdPaUJ3ZUN4Y2JpQWdiR1ZtZERvZ2NIZ3NYRzRnSUdKdmRIUnZiVG9nY0hnc1hHNGdJSEpwWjJoME9pQndlQ3hjYmx4dUlDQXZMeUJVY21GdWMyWnZjbTBnY0hKdmNHVnlkR2xsYzF4dUlDQnliM1JoZEdVNklHUmxaM0psWlhNc1hHNGdJSEp2ZEdGMFpWZzZJR1JsWjNKbFpYTXNYRzRnSUhKdmRHRjBaVms2SUdSbFozSmxaWE1zWEc0Z0lISnZkR0YwWlZvNklHUmxaM0psWlhNc1hHNGdJSE5qWVd4bE9pQnpZMkZzWlN4Y2JpQWdjMk5oYkdWWU9pQnpZMkZzWlN4Y2JpQWdjMk5oYkdWWk9pQnpZMkZzWlN4Y2JpQWdjMk5oYkdWYU9pQnpZMkZzWlN4Y2JpQWdjMnRsZDFnNklHUmxaM0psWlhNc1hHNGdJSE5yWlhkWk9pQmtaV2R5WldWekxGeHVJQ0JrYVhOMFlXNWpaVG9nY0hnc1hHNGdJSFJ5WVc1emJHRjBaVmc2SUhCNExGeHVJQ0IwY21GdWMyeGhkR1ZaT2lCd2VDeGNiaUFnZEhKaGJuTnNZWFJsV2pvZ2NIZ3NYRzRnSUhCbGNuTndaV04wYVhabE9pQndlQ3hjYmlBZ2IzQmhZMmwwZVRvZ1lXeHdhR0ZjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgY2FtZWxDYWNoZSA9IHt9O1xudmFyIGRhc2hDYWNoZSA9IHt9O1xudmFyIHByZWZpeGVzID0gWydXZWJraXQnLCAnTW96JywgJ08nLCAnbXMnLCAnJ107XG52YXIgbnVtUHJlZml4ZXMgPSBwcmVmaXhlcy5sZW5ndGg7XG52YXIgdGVzdEVsZW1lbnQgPSB2b2lkIDA7XG5cbi8qXG4gIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgXG4gIEBwYXJhbSBbc3RyaW5nXTogU3R5bGUgcHJvcGVydHlcbiAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG52YXIgdGVzdFByZWZpeCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgdmFyIG5vUHJlZml4ID0gcHJlZml4ID09PSAnJztcbiAgICB2YXIgcHJlZml4ZWRQcm9wZXJ0eU5hbWUgPSBub1ByZWZpeCA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgIGlmIChwcmVmaXhlZFByb3BlcnR5TmFtZSBpbiB0ZXN0RWxlbWVudC5zdHlsZSkge1xuICAgICAgY2FtZWxDYWNoZVtrZXldID0gcHJlZml4ZWRQcm9wZXJ0eU5hbWU7XG4gICAgICBkYXNoQ2FjaGVba2V5XSA9ICcnICsgKG5vUHJlZml4ID8gJycgOiAnLScpICsgKDAsIF91dGlscy5jYW1lbFRvRGFzaCkocHJlZml4ZWRQcm9wZXJ0eU5hbWUpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGtleSwgYXNEYXNoQ2FzZSkge1xuICB2YXIgY2FjaGUgPSBhc0Rhc2hDYXNlID8gZGFzaENhY2hlIDogY2FtZWxDYWNoZTtcblxuICBpZiAoIWNhY2hlW2tleV0pIHtcbiAgICB0ZXN0UHJlZml4KGtleSk7XG4gIH1cblxuICByZXR1cm4gY2FjaGVba2V5XTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM0J5WldacGVHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTmhiV1ZzUTJGamFHVWlMQ0prWVhOb1EyRmphR1VpTENKd2NtVm1hWGhsY3lJc0ltNTFiVkJ5WldacGVHVnpJaXdpYkdWdVozUm9JaXdpZEdWemRFVnNaVzFsYm5RaUxDSjBaWE4wVUhKbFptbDRJaXdpYTJWNUlpd2laRzlqZFcxbGJuUWlMQ0pqY21WaGRHVkZiR1Z0Wlc1MElpd2lhU0lzSW5CeVpXWnBlQ0lzSW01dlVISmxabWw0SWl3aWNISmxabWw0WldSUWNtOXdaWEowZVU1aGJXVWlMQ0pqYUdGeVFYUWlMQ0owYjFWd2NHVnlRMkZ6WlNJc0luTnNhV05sSWl3aWMzUjViR1VpTENKaGMwUmhjMmhEWVhObElpd2lZMkZqYUdVaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3UVVGRlFTeEpRVUZOUVN4aFFVRmhMRVZCUVc1Q08wRkJRMEVzU1VGQlRVTXNXVUZCV1N4RlFVRnNRanRCUVVOQkxFbEJRVTFETEZkQlFWY3NRMEZCUXl4UlFVRkVMRVZCUVZVc1MwRkJWaXhGUVVGblFpeEhRVUZvUWl4RlFVRnZRaXhKUVVGd1FpeEZRVUV3UWl4RlFVRXhRaXhEUVVGcVFqdEJRVU5CTEVsQlFVMURMR05CUVdORUxGTkJRVk5GTEUxQlFUZENPMEZCUTBFc1NVRkJTVU1zYjBKQlFVbzdPMEZCUlVFN096czdPenRCUVUxQkxFbEJRVTFETEdGQlFXRXNWVUZCUTBNc1IwRkJSQ3hGUVVGVE8wRkJRekZDUml4blFrRkJZMEVzWlVGQlpVY3NVMEZCVTBNc1lVRkJWQ3hEUVVGMVFpeExRVUYyUWl4RFFVRTNRanM3UVVGRlFTeFBRVUZMTEVsQlFVbERMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1ZBc1YwRkJjRUlzUlVGQmFVTlBMRWRCUVdwRExFVkJRWE5ETzBGQlEzQkRMRkZCUVUxRExGTkJRVk5VTEZOQlFWTlJMRU5CUVZRc1EwRkJaanRCUVVOQkxGRkJRVTFGTEZkQlFWbEVMRmRCUVZjc1JVRkJOMEk3UVVGRFFTeFJRVUZOUlN4MVFrRkJkVUpFTEZkQlFWZE1MRWRCUVZnc1IwRkJhVUpKTEZOQlFWTktMRWxCUVVsUExFMUJRVW9zUTBGQlZ5eERRVUZZTEVWQlFXTkRMRmRCUVdRc1JVRkJWQ3hIUVVGMVExSXNTVUZCU1ZNc1MwRkJTaXhEUVVGVkxFTkJRVllzUTBGQmNrWTdPMEZCUlVFc1VVRkJTVWdzZDBKQlFYZENVaXhaUVVGWldTeExRVUY0UXl4RlFVRXJRenRCUVVNM1EycENMR2xDUVVGWFR5eEhRVUZZTEVsQlFXdENUU3h2UWtGQmJFSTdRVUZEUVZvc1owSkJRVlZOTEVkQlFWWXNWVUZCY1VKTExGZEJRVmNzUlVGQldDeEhRVUZuUWl4SFFVRnlReXhKUVVFMFF5eDNRa0ZCV1VNc2IwSkJRVm9zUTBGQk5VTTdRVUZEUkR0QlFVTkdPMEZCUTBZc1EwRmlSRHM3YTBKQlpXVXNWVUZCUTA0c1IwRkJSQ3hGUVVGTlZ5eFZRVUZPTEVWQlFYRkNPMEZCUTJ4RExFMUJRVTFETEZGQlFWRkVMR0ZCUVdGcVFpeFRRVUZpTEVkQlFYbENSQ3hWUVVGMlF6czdRVUZGUVN4TlFVRkpMRU5CUVVOdFFpeE5RVUZOV2l4SFFVRk9MRU5CUVV3c1JVRkJhVUk3UVVGRFprUXNaVUZCVjBNc1IwRkJXRHRCUVVORU96dEJRVVZFTEZOQlFVOVpMRTFCUVUxYUxFZEJRVTRzUTBGQlVEdEJRVU5FTEVNaUxDSm1hV3hsSWpvaWNISmxabWw0WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGNuTXVhR0ZzYkM5UWNtOXFaV04wY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmpZVzFsYkZSdlJHRnphQ0I5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJR05oYldWc1EyRmphR1VnUFNCN2ZUdGNibU52Ym5OMElHUmhjMmhEWVdOb1pTQTlJSHQ5TzF4dVkyOXVjM1FnY0hKbFptbDRaWE1nUFNCYkoxZGxZbXRwZENjc0owMXZlaWNzSjA4bkxDZHRjeWNzSUNjblhUdGNibU52Ym5OMElHNTFiVkJ5WldacGVHVnpJRDBnY0hKbFptbDRaWE11YkdWdVozUm9PMXh1YkdWMElIUmxjM1JGYkdWdFpXNTBPMXh1WEc0dktseHVJQ0JVWlhOMElITjBlV3hsSUhCeWIzQmxjblI1SUdadmNpQndjbVZtYVhobFpDQjJaWEp6YVc5dVhHNGdJRnh1SUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUZOMGVXeGxJSEJ5YjNCbGNuUjVYRzRnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTA2SUVOaFkyaGxaQ0J3Y205d1pYSjBlU0J1WVcxbFhHNHFMMXh1WTI5dWMzUWdkR1Z6ZEZCeVpXWnBlQ0E5SUNoclpYa3BJRDArSUh0Y2JpQWdkR1Z6ZEVWc1pXMWxiblFnUFNCMFpYTjBSV3hsYldWdWRDQjhmQ0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZGthWFluS1R0Y2JseHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJWQnlaV1pwZUdWek95QnBLeXNwSUh0Y2JpQWdJQ0JqYjI1emRDQndjbVZtYVhnZ1BTQndjbVZtYVhobGMxdHBYVHRjYmlBZ0lDQmpiMjV6ZENCdWIxQnlaV1pwZUNBOUlDaHdjbVZtYVhnZ1BUMDlJQ2NuS1R0Y2JpQWdJQ0JqYjI1emRDQndjbVZtYVhobFpGQnliM0JsY25SNVRtRnRaU0E5SUc1dlVISmxabWw0SUQ4Z2EyVjVJRG9nY0hKbFptbDRJQ3NnYTJWNUxtTm9ZWEpCZENnd0tTNTBiMVZ3Y0dWeVEyRnpaU2dwSUNzZ2EyVjVMbk5zYVdObEtERXBPMXh1WEc0Z0lDQWdhV1lnS0hCeVpXWnBlR1ZrVUhKdmNHVnlkSGxPWVcxbElHbHVJSFJsYzNSRmJHVnRaVzUwTG5OMGVXeGxLU0I3WEc0Z0lDQWdJQ0JqWVcxbGJFTmhZMmhsVzJ0bGVWMGdQU0J3Y21WbWFYaGxaRkJ5YjNCbGNuUjVUbUZ0WlR0Y2JpQWdJQ0FnSUdSaGMyaERZV05vWlZ0clpYbGRJRDBnWUNSN0tHNXZVSEpsWm1sNElEOGdKeWNnT2lBbkxTY3BmU1I3WTJGdFpXeFViMFJoYzJnb2NISmxabWw0WldSUWNtOXdaWEowZVU1aGJXVXBmV0E3WEc0Z0lDQWdmVnh1SUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvYTJWNUxDQmhjMFJoYzJoRFlYTmxLU0E5UGlCN1hHNGdJR052Ym5OMElHTmhZMmhsSUQwZ1lYTkVZWE5vUTJGelpTQS9JR1JoYzJoRFlXTm9aU0E2SUdOaGJXVnNRMkZqYUdVN1hHNWNiaUFnYVdZZ0tDRmpZV05vWlZ0clpYbGRLU0I3WEc0Z0lDQWdkR1Z6ZEZCeVpXWnBlQ2hyWlhrcE8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlHTmhZMmhsVzJ0bGVWMDdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvcHJlZml4ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgZGF0YSkge1xuICB2YXIgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxO1xuICB2YXIgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDE7XG4gIHZhciB0cmFuc2Zvcm1PcmlnaW5YID0gZGF0YS53aWR0aCAqICgoc3RhdGUub3JpZ2luWCB8fCA1MCkgLyAxMDApICsgZGF0YS54O1xuICB2YXIgdHJhbnNmb3JtT3JpZ2luWSA9IGRhdGEuaGVpZ2h0ICogKChzdGF0ZS5vcmlnaW5ZIHx8IDUwKSAvIDEwMCkgKyBkYXRhLnk7XG4gIHZhciBzY2FsZVRyYW5zZm9ybVggPSAtdHJhbnNmb3JtT3JpZ2luWCAqIChzY2FsZSAqIDEpO1xuICB2YXIgc2NhbGVUcmFuc2Zvcm1ZID0gLXRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSk7XG4gIHZhciBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlO1xuICB2YXIgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVk7XG4gIHZhciB0cmFuc2Zvcm0gPSB7XG4gICAgdHJhbnNsYXRlOiAndHJhbnNsYXRlKCcgKyBzdGF0ZS50cmFuc2xhdGVYICsgJywgJyArIHN0YXRlLnRyYW5zbGF0ZVkgKyAnKSAnLFxuICAgIHNjYWxlOiAndHJhbnNsYXRlKCcgKyBzY2FsZVRyYW5zZm9ybVggKyAnLCAnICsgc2NhbGVUcmFuc2Zvcm1ZICsgJykgc2NhbGUoJyArIHNjYWxlICsgJywgJyArIHNjYWxlWSArICcpIHRyYW5zbGF0ZSgnICsgc2NhbGVSZXBsYWNlWCArICcsICcgKyBzY2FsZVJlcGxhY2VZICsgJykgJyxcbiAgICByb3RhdGU6ICdyb3RhdGUoJyArIHN0YXRlLnJvdGF0ZSArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5YICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblkgKyAnKSAnLFxuICAgIHNrZXdYOiAnc2tld1goJyArIHN0YXRlLnNrZXdYICsgJykgJyxcbiAgICBza2V3WTogJ3NrZXdZKCcgKyBzdGF0ZS5za2V3WSArICcpICdcbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wc1soMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgZm9yICh2YXIgX2tleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IF9rZXkgPT09ICdzY2FsZScgPyAnMScgOiAnMCc7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB0cmFuc2Zvcm1bX2tleV0ucmVwbGFjZSgvdW5kZWZpbmVkL2csIGRlZmF1bHRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDJKMWFXeGtMbXB6SWwwc0ltNWhiV1Z6SWpwYkltSjFhV3hrSWl3aVdrVlNUMTlPVDFSZldrVlNUeUlzSW5OMFlYUmxJaXdpWkdGMFlTSXNJbWhoYzFSeVlXNXpabTl5YlNJc0luQnliM0J6SWl3aWMyTmhiR1VpTENKMWJtUmxabWx1WldRaUxDSnpZMkZzWlZnaUxDSnpZMkZzWlZraUxDSjBjbUZ1YzJadmNtMVBjbWxuYVc1WUlpd2lkMmxrZEdnaUxDSnZjbWxuYVc1WUlpd2llQ0lzSW5SeVlXNXpabTl5YlU5eWFXZHBibGtpTENKb1pXbG5hSFFpTENKdmNtbG5hVzVaSWl3aWVTSXNJbk5qWVd4bFZISmhibk5tYjNKdFdDSXNJbk5qWVd4bFZISmhibk5tYjNKdFdTSXNJbk5qWVd4bFVtVndiR0ZqWlZnaUxDSnpZMkZzWlZKbGNHeGhZMlZaSWl3aWRISmhibk5tYjNKdElpd2lkSEpoYm5Oc1lYUmxJaXdpZEhKaGJuTnNZWFJsV0NJc0luUnlZVzV6YkdGMFpWa2lMQ0p5YjNSaGRHVWlMQ0p6YTJWM1dDSXNJbk5yWlhkWklpd2lhMlY1SWl3aWFHRnpUM2R1VUhKdmNHVnlkSGtpTENKa1pXWmhkV3gwVm1Gc2RXVWlMQ0p5WlhCc1lXTmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUzNkQ1FTeExPenRCUVV4NFFqczdRVUZEUVRzN096czdPMEZCUlVFc1NVRkJUVU1zWjBKQlFXZENMRTFCUVhSQ096dEJRVVZsTEZOQlFWTkVMRXRCUVZRc1EwRkJaVVVzUzBGQlppeEZRVUZ6UWtNc1NVRkJkRUlzUlVGQk5FSTdRVUZEZWtNc1RVRkJTVU1zWlVGQlpTeExRVUZ1UWp0QlFVTkJMRTFCUVUxRExGRkJRVkVzUlVGQlpEdEJRVU5CTEUxQlFVMURMRkZCUVZGS0xFMUJRVTFKTEV0QlFVNHNTMEZCWjBKRExGTkJRV2hDTEVkQlFUUkNUQ3hOUVVGTlNTeExRVUZPTEVsQlFXVk1MR0ZCUVRORExFZEJRVEpFUXl4TlFVRk5UU3hOUVVGT0xFbEJRV2RDTEVOQlFYcEdPMEZCUTBFc1RVRkJUVU1zVTBGQlUxQXNUVUZCVFU4c1RVRkJUaXhMUVVGcFFrWXNVMEZCYWtJc1IwRkJOa0pNTEUxQlFVMVBMRTFCUVU0c1NVRkJaMEpTTEdGQlFUZERMRWRCUVRaRVN5eFRRVUZUTEVOQlFYSkdPMEZCUTBFc1RVRkJUVWtzYlVKQlFXMUNVQ3hMUVVGTFVTeExRVUZNTEVsQlFXTXNRMEZCUTFRc1RVRkJUVlVzVDBGQlRpeEpRVUZwUWl4RlFVRnNRaXhKUVVGM1FpeEhRVUYwUXl4SlFVRTJRMVFzUzBGQlMxVXNRMEZCTTBVN1FVRkRRU3hOUVVGTlF5eHRRa0ZCYlVKWUxFdEJRVXRaTEUxQlFVd3NTVUZCWlN4RFFVRkRZaXhOUVVGTll5eFBRVUZPTEVsQlFXbENMRVZCUVd4Q0xFbEJRWGRDTEVkQlFYWkRMRWxCUVRoRFlpeExRVUZMWXl4RFFVRTFSVHRCUVVOQkxFMUJRVTFETEd0Q1FVRnJRaXhEUVVGRlVpeG5Ra0ZCUml4SlFVRnpRa29zVVVGQlVTeERRVUU1UWl4RFFVRjRRanRCUVVOQkxFMUJRVTFoTEd0Q1FVRnJRaXhEUVVGRlRDeG5Ra0ZCUml4SlFVRnpRa3dzVTBGQlV5eERRVUV2UWl4RFFVRjRRanRCUVVOQkxFMUJRVTFYTEdkQ1FVRm5RbFlzYlVKQlFXMUNTaXhMUVVGNlF6dEJRVU5CTEUxQlFVMWxMR2RDUVVGblFsQXNiVUpCUVcxQ1RDeE5RVUY2UXp0QlFVTkJMRTFCUVUxaExGbEJRVms3UVVGRGFFSkRMRGhDUVVGM1FuSkNMRTFCUVUxelFpeFZRVUU1UWl4VlFVRTJRM1JDTEUxQlFVMTFRaXhWUVVGdVJDeFBRVVJuUWp0QlFVVm9RbTVDTERCQ1FVRnZRbGtzWlVGQmNFSXNWVUZCZDBORExHVkJRWGhETEdkQ1FVRnJSV0lzUzBGQmJFVXNWVUZCTkVWSExFMUJRVFZGTEc5Q1FVRnBSMWNzWVVGQmFrY3NWVUZCYlVoRExHRkJRVzVJTEU5QlJtZENPMEZCUjJoQ1N5eDNRa0ZCYTBKNFFpeE5RVUZOZDBJc1RVRkJlRUlzVlVGQmJVTm9RaXhuUWtGQmJrTXNWVUZCZDBSSkxHZENRVUY0UkN4UFFVaG5RanRCUVVsb1FtRXNjMEpCUVdkQ2VrSXNUVUZCVFhsQ0xFdEJRWFJDTEU5QlNtZENPMEZCUzJoQ1F5eHpRa0ZCWjBJeFFpeE5RVUZOTUVJc1MwRkJkRUk3UVVGTVowSXNSMEZCYkVJN08wRkJVVUVzVDBGQlN5eEpRVUZKUXl4SFFVRlVMRWxCUVdkQ00wSXNTMEZCYUVJc1JVRkJkVUk3UVVGRGNrSXNVVUZCU1VFc1RVRkJUVFJDTEdOQlFVNHNRMEZCY1VKRUxFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkROMElzVlVGQlNTeDVRa0ZCWlVFc1IwRkJaaXhEUVVGS0xFVkJRWGxDTzBGQlEzWkNla0lzZFVKQlFXVXNTVUZCWmp0QlFVTkVMRTlCUmtRc1RVRkZUenRCUVVOTVF5eGpRVUZOTEhkQ1FVRlpkMElzUjBGQldpeERRVUZPTEVsQlFUQkNNMElzVFVGQlRUSkNMRWRCUVU0c1EwRkJNVUk3UVVGRFJEdEJRVU5HTzBGQlEwWTdPMEZCUlVRc1RVRkJTWHBDTEZsQlFVb3NSVUZCYTBJN1FVRkRhRUpETEZWQlFVMXBRaXhUUVVGT0xFZEJRV3RDTEVWQlFXeENPenRCUVVWQkxGTkJRVXNzU1VGQlNVOHNTVUZCVkN4SlFVRm5RbEFzVTBGQmFFSXNSVUZCTWtJN1FVRkRla0lzVlVGQlNVRXNWVUZCVlZFc1kwRkJWaXhEUVVGNVFrUXNTVUZCZWtJc1EwRkJTaXhGUVVGdFF6dEJRVU5xUXl4WlFVRk5SU3hsUVVGblFrWXNVMEZCVVN4UFFVRlVMRWRCUVc5Q0xFZEJRWEJDTEVkQlFUQkNMRWRCUVM5RE8wRkJRMEY0UWl4alFVRk5hVUlzVTBGQlRpeEpRVUZ0UWtFc1ZVRkJWVThzU1VGQlZpeEZRVUZsUnl4UFFVRm1MRU5CUVhWQ0xGbEJRWFpDTEVWQlFYRkRSQ3haUVVGeVF5eERRVUZ1UWp0QlFVTkVPMEZCUTBZN1FVRkRSanM3UVVGRlJDeFRRVUZQTVVJc1MwRkJVRHRCUVVORUlpd2labWxzWlNJNkltSjFhV3hrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhKekxtaGhiR3d2VUhKdmFtVmpkSE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kyRnRaV3hVYjBSaGMyZ2dmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElIUnlZVzV6Wm05eWJWQnliM0J6SUdaeWIyMGdKeTR1TDJOemN5OTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVYRzVqYjI1emRDQmFSVkpQWDA1UFZGOWFSVkpQSUQwZ01DNHdNREF4TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCaWRXbHNaQ2h6ZEdGMFpTd2daR0YwWVNrZ2UxeHVJQ0JzWlhRZ2FHRnpWSEpoYm5ObWIzSnRJRDBnWm1Gc2MyVTdYRzRnSUdOdmJuTjBJSEJ5YjNCeklEMGdlMzA3WEc0Z0lHTnZibk4wSUhOallXeGxJRDBnYzNSaGRHVXVjMk5oYkdVZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhOMFlYUmxMbk5qWVd4bElIeDhJRnBGVWs5ZlRrOVVYMXBGVWs4Z09pQnpkR0YwWlM1elkyRnNaVmdnZkh3Z01UdGNiaUFnWTI5dWMzUWdjMk5oYkdWWklEMGdjM1JoZEdVdWMyTmhiR1ZaSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJ6ZEdGMFpTNXpZMkZzWlZrZ2ZId2dXa1ZTVDE5T1QxUmZXa1ZTVHlBNklITmpZV3hsSUh4OElERTdYRzRnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dQU0JrWVhSaExuZHBaSFJvSUNvZ0tDaHpkR0YwWlM1dmNtbG5hVzVZSUh4OElEVXdLU0F2SURFd01Da2dLeUJrWVhSaExuZzdYRzRnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsa2dQU0JrWVhSaExtaGxhV2RvZENBcUlDZ29jM1JoZEdVdWIzSnBaMmx1V1NCOGZDQTFNQ2tnTHlBeE1EQXBJQ3NnWkdGMFlTNTVPMXh1SUNCamIyNXpkQ0J6WTJGc1pWUnlZVzV6Wm05eWJWZ2dQU0F0SUhSeVlXNXpabTl5YlU5eWFXZHBibGdnS2lBb2MyTmhiR1VnS2lBeEtUdGNiaUFnWTI5dWMzUWdjMk5oYkdWVWNtRnVjMlp2Y20xWklEMGdMU0IwY21GdWMyWnZjbTFQY21sbmFXNVpJQ29nS0hOallXeGxXU0FxSURFcE8xeHVJQ0JqYjI1emRDQnpZMkZzWlZKbGNHeGhZMlZZSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V0NBdklITmpZV3hsTzF4dUlDQmpiMjV6ZENCelkyRnNaVkpsY0d4aFkyVlpJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0F2SUhOallXeGxXVHRjYmlBZ1kyOXVjM1FnZEhKaGJuTm1iM0p0SUQwZ2UxeHVJQ0FnSUhSeVlXNXpiR0YwWlRvZ1lIUnlZVzV6YkdGMFpTZ2tlM04wWVhSbExuUnlZVzV6YkdGMFpWaDlMQ0FrZTNOMFlYUmxMblJ5WVc1emJHRjBaVmw5S1NCZ0xGeHVJQ0FnSUhOallXeGxPaUJnZEhKaGJuTnNZWFJsS0NSN2MyTmhiR1ZVY21GdWMyWnZjbTFZZlN3Z0pIdHpZMkZzWlZSeVlXNXpabTl5YlZsOUtTQnpZMkZzWlNna2UzTmpZV3hsZlN3Z0pIdHpZMkZzWlZsOUtTQjBjbUZ1YzJ4aGRHVW9KSHR6WTJGc1pWSmxjR3hoWTJWWWZTd2dKSHR6WTJGc1pWSmxjR3hoWTJWWmZTa2dZQ3hjYmlBZ0lDQnliM1JoZEdVNklHQnliM1JoZEdVb0pIdHpkR0YwWlM1eWIzUmhkR1Y5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxoOUxDQWtlM1J5WVc1elptOXliVTl5YVdkcGJsbDlLU0JnTEZ4dUlDQWdJSE5yWlhkWU9pQmdjMnRsZDFnb0pIdHpkR0YwWlM1emEyVjNXSDBwSUdBc1hHNGdJQ0FnYzJ0bGQxazZJR0J6YTJWM1dTZ2tlM04wWVhSbExuTnJaWGRaZlNrZ1lGeHVJQ0I5TzF4dVhHNGdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQnpkR0YwWlNrZ2UxeHVJQ0FnSUdsbUlDaHpkR0YwWlM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQnBaaUFvZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ0lDQm9ZWE5VY21GdWMyWnZjbTBnUFNCMGNuVmxPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjSEp2Y0hOYlkyRnRaV3hVYjBSaGMyZ29hMlY1S1YwZ1BTQnpkR0YwWlZ0clpYbGRPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR2xtSUNob1lYTlVjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQndjbTl3Y3k1MGNtRnVjMlp2Y20wZ1BTQW5KenRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQWdJR2xtSUNoMGNtRnVjMlp2Y20wdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmtaV1poZFd4MFZtRnNkV1VnUFNBb2EyVjVJRDA5UFNBbmMyTmhiR1VuS1NBL0lDY3hKeUE2SUNjd0p6dGNiaUFnSUNBZ0lDQWdjSEp2Y0hNdWRISmhibk5tYjNKdElDczlJSFJ5WVc1elptOXliVnRyWlhsZExuSmxjR3hoWTJVb0wzVnVaR1ZtYVc1bFpDOW5MQ0JrWldaaGRXeDBWbUZzZFdVcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCd2NtOXdjenRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmcvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBmaWxsOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgc3Ryb2tlOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgc2NhbGU6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVg6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVk6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBkOiBfdmFsdWVUeXBlcy5jb21wbGV4LFxuICBwb2ludHM6IF92YWx1ZVR5cGVzLmNvbXBsZXgsXG4gIG9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhLFxuICBmaWxsT3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGEsXG4gIHN0cm9rZU9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDNaaGJIVmxMWFI1Y0dWekxtcHpJbDBzSW01aGJXVnpJanBiSW1acGJHd2lMQ0p6ZEhKdmEyVWlMQ0p6WTJGc1pTSXNJbk5qWVd4bFdDSXNJbk5qWVd4bFdTSXNJbVFpTENKd2IybHVkSE1pTENKdmNHRmphWFI1SWl3aVptbHNiRTl3WVdOcGRIa2lMQ0p6ZEhKdmEyVlBjR0ZqYVhSNUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3TzJ0Q1FVVmxPMEZCUTJKQkxIbENRVVJoTzBGQlJXSkRMREpDUVVaaE8wRkJSMkpETERCQ1FVaGhPMEZCU1dKRExESkNRVXBoTzBGQlMySkRMREpDUVV4aE8wRkJUV0pETEhkQ1FVNWhPMEZCVDJKRExEWkNRVkJoTzBGQlVXSkRMRFJDUVZKaE8wRkJVMkpETEdkRFFWUmhPMEZCVldKRE8wRkJWbUVzUXlJc0ltWnBiR1VpT2lKMllXeDFaUzEwZVhCbGN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRnljeTVvWVd4c0wxQnliMnBsWTNSekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR0ZzY0doaExDQmpiMnh2Y2l3Z1kyOXRjR3hsZUN3Z2MyTmhiR1VnZlNCbWNtOXRJQ2N1TGk4dUxpOXBibU12ZG1Gc2RXVXRkSGx3WlhNbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUdacGJHdzZJR052Ykc5eUxGeHVJQ0J6ZEhKdmEyVTZJR052Ykc5eUxGeHVJQ0J6WTJGc1pUb2djMk5oYkdVc1hHNGdJSE5qWVd4bFdEb2djMk5oYkdVc1hHNGdJSE5qWVd4bFdUb2djMk5oYkdVc1hHNGdJR1E2SUdOdmJYQnNaWGdzWEc0Z0lIQnZhVzUwY3pvZ1kyOXRjR3hsZUN4Y2JpQWdiM0JoWTJsMGVUb2dZV3h3YUdFc1hHNGdJR1pwYkd4UGNHRmphWFI1T2lCaGJIQm9ZU3hjYmlBZ2MzUnliMnRsVDNCaFkybDBlVG9nWVd4d2FHRmNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy92YWx1ZS10eXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50LCBsZW5ndGgpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDAgKiBsZW5ndGggKyAncHgnO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBsZW5ndGgpIHtcbiAgdmFyIHN0eWxlcyA9IHt9O1xuICB2YXIgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgIGxlbmd0aDogMCxcbiAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gIH07XG4gIHZhciBoYXNEYXNoQXJyYXkgPSBmYWxzZTtcblxuICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFyIHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MWEJoZEdndlluVnBiR1F1YW5NaVhTd2libUZ0WlhNaU9sc2ljR1Z5WTJWdWRGUnZVR2w0Wld4eklpd2ljR1Z5WTJWdWRDSXNJbXhsYm1kMGFDSXNJbkJoY25ObFJteHZZWFFpTENKemRHRjBaU0lzSW5OMGVXeGxjeUlzSW1SaGMyaEJjbkpoZVZOMGVXeGxjeUlzSW5Od1lXTnBibWNpTENKb1lYTkVZWE5vUVhKeVlYa2lMQ0pyWlhraUxDSm9ZWE5QZDI1UWNtOXdaWEowZVNJc0luWmhiSFZsSWwwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFUczdPenM3TzBGQlRVRXNTVUZCVFVFc2EwSkJRV3RDTEZWQlFVTkRMRTlCUVVRc1JVRkJWVU1zVFVGQlZqdEJRVUZCTEZOQlFYTkNReXhYUVVGWFJpeFBRVUZZTEVsQlFYTkNMRWRCUVhaQ0xFZEJRVGhDUXl4TlFVRTVRaXhIUVVGMVF5eEpRVUUxUkR0QlFVRkJMRU5CUVhoQ096dHJRa0ZGWlN4VlFVRkRSU3hMUVVGRUxFVkJRVkZHTEUxQlFWSXNSVUZCYlVJN1FVRkRhRU1zVFVGQlRVY3NVMEZCVXl4RlFVRm1PMEZCUTBFc1RVRkJUVU1zYTBKQlFXdENPMEZCUTNSQ1NpeFpRVUZSTEVOQlJHTTdRVUZGZEVKTExHRkJRVk5NTEZOQlFWTTdRVUZHU1N4SFFVRjRRanRCUVVsQkxFMUJRVWxOTEdWQlFXVXNTMEZCYmtJN08wRkJSVUVzVDBGQlN5eEpRVUZKUXl4SFFVRlVMRWxCUVdkQ1RDeExRVUZvUWl4RlFVRjFRanRCUVVOeVFpeFJRVUZKUVN4TlFVRk5UU3hqUVVGT0xFTkJRWEZDUkN4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6ZENMRlZCUVUxRkxGRkJRVkZRTEUxQlFVMUxMRWRCUVU0c1EwRkJaRHM3UVVGRlFTeGpRVUZSUVN4SFFVRlNPMEZCUTBFc1lVRkJTeXhSUVVGTU8wRkJRMEVzWVVGQlN5eFRRVUZNTzBGQlEwVkVMSGxDUVVGbExFbEJRV1k3UVVGRFFVWXNNRUpCUVdkQ1J5eEhRVUZvUWl4SlFVRjFRbFFzWjBKQlFXZENWeXhMUVVGb1FpeEZRVUYxUWxRc1RVRkJka0lzUTBGQmRrSTdRVUZEUVR0QlFVTkdMR0ZCUVVzc1VVRkJURHRCUVVORlJ5eHBRa0ZCVHl4dFFrRkJVQ3hKUVVFNFFrd3NaMEpCUVdkQ0xFTkJRVU5YTEV0QlFXcENMRVZCUVhkQ1ZDeE5RVUY0UWl4RFFVRTVRanRCUVVOQk8wRkJRMFk3UVVGRFJVY3NhVUpCUVU5SkxFZEJRVkFzU1VGQlkwVXNTMEZCWkR0QlFWWkdPMEZCV1VRN1FVRkRSanM3UVVGRlJDeE5RVUZKU0N4WlFVRktMRVZCUVd0Q08wRkJRMmhDU0N4WFFVRlBMR3RDUVVGUUxFbEJRVFpDUXl4blFrRkJaMEpLTEUxQlFXaENMRWRCUVhsQ0xFZEJRWHBDTEVkQlFTdENTU3huUWtGQlowSkRMRTlCUVRWRk8wRkJRMFE3TzBGQlJVUXNVMEZCVDBZc1RVRkJVRHRCUVVORUxFTWlMQ0ptYVd4bElqb2lZblZwYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGNuTXVhR0ZzYkM5UWNtOXFaV04wY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNCRGIyNTJaWEowSUhCbGNtTmxiblJoWjJVZ2RHOGdjR2w0Wld4elhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCbGNtTmxiblJoWjJVZ2IyWWdkRzkwWVd3Z2JHVnVaM1JvWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZHOTBZV3dnYkdWdVozUm9YRzRxTDF4dVkyOXVjM1FnY0dWeVkyVnVkRlJ2VUdsNFpXeHpJRDBnS0hCbGNtTmxiblFzSUd4bGJtZDBhQ2tnUFQ0Z0tIQmhjbk5sUm14dllYUW9jR1Z5WTJWdWRDa2dMeUF4TURBcElDb2diR1Z1WjNSb0lDc2dKM0I0Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tITjBZWFJsTENCc1pXNW5kR2dwSUQwK0lIdGNiaUFnWTI5dWMzUWdjM1I1YkdWeklEMGdlMzA3WEc0Z0lHTnZibk4wSUdSaGMyaEJjbkpoZVZOMGVXeGxjeUE5SUh0Y2JpQWdJQ0JzWlc1bmRHZzZJREFzWEc0Z0lDQWdjM0JoWTJsdVp6b2diR1Z1WjNSb0lDc2dKM0I0SjF4dUlDQjlPMXh1SUNCc1pYUWdhR0Z6UkdGemFFRnljbUY1SUQwZ1ptRnNjMlU3WEc1Y2JpQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlITjBZWFJsS1NCN1hHNGdJQ0FnYVdZZ0tITjBZWFJsTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnYzNSaGRHVmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ2MzZHBkR05vSUNoclpYa3BJSHRjYmlBZ0lDQWdJR05oYzJVZ0oyeGxibWQwYUNjNlhHNGdJQ0FnSUNCallYTmxJQ2R6Y0dGamFXNW5KenBjYmlBZ0lDQWdJQ0FnYUdGelJHRnphRUZ5Y21GNUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ1pHRnphRUZ5Y21GNVUzUjViR1Z6VzJ0bGVWMGdQU0J3WlhKalpXNTBWRzlRYVhobGJITW9kbUZzZFdVc0lHeGxibWQwYUNrN1hHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnWTJGelpTQW5iMlptYzJWMEp6cGNiaUFnSUNBZ0lDQWdjM1I1YkdWeld5ZHpkSEp2YTJVdFpHRnphRzltWm5ObGRDZGRJRDBnY0dWeVkyVnVkRlJ2VUdsNFpXeHpLQzEyWVd4MVpTd2diR1Z1WjNSb0tUdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNCa1pXWmhkV3gwT2x4dUlDQWdJQ0FnSUNCemRIbHNaWE5iYTJWNVhTQTlJSFpoYkhWbE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHbG1JQ2hvWVhORVlYTm9RWEp5WVhrcElIdGNiaUFnSUNCemRIbHNaWE5iSjNOMGNtOXJaUzFrWVhOb1lYSnlZWGtuWFNBOUlHUmhjMmhCY25KaGVWTjBlV3hsY3k1c1pXNW5kR2dnS3lBbklDY2dLeUJrWVhOb1FYSnlZWGxUZEhsc1pYTXVjM0JoWTJsdVp6dGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnpkSGxzWlhNN1hHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==