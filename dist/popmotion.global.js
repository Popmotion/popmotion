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
	  var all = _ref2.all;
	
	  var eventToTouches = _ref.eventToTouches,
	      moveEvent = _ref.moveEvent,
	      props = _objectWithoutProperties(_ref, ['eventToTouches', 'moveEvent']);
	
	  var touches = (0, _composite2.default)({
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
	        all = _eventToTouches.all;
	
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
	    all: touches
	  };
	};
	
	var touchEventToTouches = function (_ref4) {
	  var touches = _ref4.touches;
	
	  return {
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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3RvdWNoZXMuanMiXSwibmFtZXMiOlsiY3JlYXRlVG91Y2hlcyIsImFsbCIsImV2ZW50VG9Ub3VjaGVzIiwibW92ZUV2ZW50IiwicHJvcHMiLCJ0b3VjaGVzIiwibWFwQ29vcmRzVG9BY3Rpb25zIiwidG91Y2hDb3VudCIsImxlbmd0aCIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlVG91Y2hlcyIsImUiLCJ1cGRhdGVBY3Rpb25XaXRoVG91Y2hlcyIsInNldCIsInNldFByb3BzIiwiX29uU3RhcnQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfb25TdG9wIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvb3JkcyIsImFjdGlvbnMiLCJpIiwieCIsInkiLCJhY3Rpb24iLCJuYW1lIiwibmV3VG91Y2hlcyIsIm1vdXNlRXZlbnRUb1RvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwidG91Y2hFdmVudFRvVG91Y2hlcyIsImV4dHJhY3RDb29yZHMiLCJjbGllbnRYIiwiY2xpZW50WSIsImdldE5hdGl2ZUV2ZW50Iiwib3JpZ2luYWxFdmVudCIsIm5hdGl2ZUV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztBQUVBLFNBQVNBLGFBQVQsY0FBeUU7QUFBQSxNQUFoREMsR0FBZ0QsU0FBaERBLEdBQWdEOztBQUFBLE1BQXZDQyxjQUF1QyxRQUF2Q0EsY0FBdUM7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQUEsTUFBVEMsS0FBUzs7QUFDdkUsTUFBTUMsVUFBVSx5QkFBVTtBQUN4QkEsYUFBU0MsbUJBQW1CTCxHQUFuQixDQURlO0FBRXhCTSxnQkFBWSxxQkFBTU4sSUFBSU8sTUFBVjtBQUZZLEdBQVY7QUFJZEMsb0JBQWdCO0FBSkYsS0FLWEwsS0FMVyxFQUFoQjs7QUFRQSxXQUFTTSxhQUFULENBQXVCQyxDQUF2QixFQUEwQjtBQUN4QixRQUFJUCxNQUFN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QkEsT0FEK0I7QUFBQSxRQUN0QkMsT0FEc0IsY0FDdEJBLE9BRHNCOztBQUV2Q2IsWUFBUUMsQ0FBUixJQUFhO0FBQ1hDLFNBQUdVLE9BRFE7QUFFWFQsU0FBR1U7QUFGUSxLQUFiO0FBSUQ7QUFDRCxTQUFPYixPQUFQO0FBQ0Q7O0FBRUQsSUFBTWMsaUJBQWlCLFVBQUN6QixDQUFEO0FBQUEsU0FBT0EsRUFBRTBCLGFBQUYsSUFBbUIxQixFQUFFMkIsV0FBckIsSUFBb0MzQixDQUEzQztBQUFBLENBQXZCOztrQkFFZSxVQUFDQSxDQUFELEVBQUlQLEtBQUosRUFBYztBQUMzQixNQUFNa0MsY0FBY0YsZUFBZXpCLENBQWYsQ0FBcEI7QUFDQSxTQUFRMkIsWUFBWWpDLE9BQWIsR0FDTEwsY0FBY2dDLG9CQUFvQnJCLENBQXBCLENBQWQ7QUFDRVIsZUFBVyxXQURiO0FBRUVELG9CQUFnQjhCO0FBRmxCLEtBR0s1QixLQUhMLEVBREssR0FNTEosY0FBYzZCLG9CQUFvQmxCLENBQXBCLENBQWQ7QUFDRVIsZUFBVyxXQURiO0FBRUVELG9CQUFnQjJCO0FBRmxCLEtBR0t6QixLQUhMLEVBTkY7QUFXRCxDIiwiZmlsZSI6InRvdWNoZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcnMuaGFsbC9Qcm9qZWN0cy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFsdWUgZnJvbSAnLi92YWx1ZSc7XG5pbXBvcnQgY29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcblxuZnVuY3Rpb24gY3JlYXRlVG91Y2hlcyh7IGFsbCB9LCB7IGV2ZW50VG9Ub3VjaGVzLCBtb3ZlRXZlbnQsIC4uLnByb3BzIH0pIHtcbiAgY29uc3QgdG91Y2hlcyA9IGNvbXBvc2l0ZSh7XG4gICAgdG91Y2hlczogbWFwQ29vcmRzVG9BY3Rpb25zKGFsbCksXG4gICAgdG91Y2hDb3VudDogdmFsdWUoYWxsLmxlbmd0aClcbiAgfSwge1xuICAgIHByZXZlbnREZWZhdWx0OiB0cnVlLFxuICAgIC4uLnByb3BzXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRvdWNoZXMoZSkge1xuICAgIGlmIChwcm9wcy5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBjb25zdCB7IGFsbCB9ID0gZXZlbnRUb1RvdWNoZXMoZSk7XG4gICAgdXBkYXRlQWN0aW9uV2l0aFRvdWNoZXModG91Y2hlcywgJ3RvdWNoZXMnLCBhbGwpO1xuICAgIHRvdWNoZXMudG91Y2hDb3VudC5zZXQoYWxsLmxlbmd0aCk7XG4gIH1cblxuICB0b3VjaGVzLnNldFByb3BzKHtcbiAgICBfb25TdGFydDogKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVUb3VjaGVzKSxcbiAgICBfb25TdG9wOiAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVRvdWNoZXMpXG4gIH0pO1xuXG4gIHJldHVybiB0b3VjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXBDb29yZHNUb0FjdGlvbnMoY29vcmRzKSB7IFxuICBsZXQgYWN0aW9ucyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gY29vcmRzW2ldO1xuICAgIGFjdGlvbnNbaV0gPSBjb21wb3NpdGUoe1xuICAgICAgeDogdmFsdWUoeCksXG4gICAgICB5OiB2YWx1ZSh5KVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBjb21wb3NpdGUoYWN0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFjdGlvbldpdGhUb3VjaGVzKGFjdGlvbiwgbmFtZSwgbmV3VG91Y2hlcykge1xuICBmb3IgKGNvbnN0IGkgaW4gbmV3VG91Y2hlcykge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gbmV3VG91Y2hlc1tpXTtcbiAgICBpZiAoYWN0aW9uW25hbWVdW2ldICE9IG51bGwpIHtcbiAgICAgIGFjdGlvbltuYW1lXVtpXS54LnNldCh4KTtcbiAgICAgIGFjdGlvbltuYW1lXVtpXS55LnNldCh5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aW9uW25hbWVdW2ldID0gY29tcG9zaXRlKHtcbiAgICAgICAgeDogdmFsdWUoeCksXG4gICAgICAgIHk6IHZhbHVlKHkpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgbW91c2VFdmVudFRvVG91Y2hlcyA9ICh7IHBhZ2VYLCBwYWdlWSB9KSA9PiB7XG4gIGNvbnN0IHRvdWNoZXMgPSBbe1xuICAgIHg6IHBhZ2VYLFxuICAgIHk6IHBhZ2VZXG4gIH1dO1xuICByZXR1cm4ge1xuICAgIGFsbDogdG91Y2hlc1xuICB9O1xufTtcblxuY29uc3QgdG91Y2hFdmVudFRvVG91Y2hlcyA9ICh7IHRvdWNoZXMgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFsbDogZXh0cmFjdENvb3Jkcyh0b3VjaGVzKVxuICB9O1xufTtcblxuZnVuY3Rpb24gZXh0cmFjdENvb3Jkcyh0b3VjaGVzKSB7IFxuICBsZXQgYWN0aW9ucyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IHRvdWNoZXNbaV07XG4gICAgYWN0aW9uc1tpXSA9IHtcbiAgICAgIHg6IGNsaWVudFgsXG4gICAgICB5OiBjbGllbnRZXG4gICAgfTtcbiAgfVxuICByZXR1cm4gYWN0aW9ucztcbn1cblxuY29uc3QgZ2V0TmF0aXZlRXZlbnQgPSAoZSkgPT4gZS5vcmlnaW5hbEV2ZW50IHx8IGUubmF0aXZlRXZlbnQgfHwgZTtcblxuZXhwb3J0IGRlZmF1bHQgKGUsIHByb3BzKSA9PiB7XG4gIGNvbnN0IG5hdGl2ZUV2ZW50ID0gZ2V0TmF0aXZlRXZlbnQoZSk7XG4gIHJldHVybiAobmF0aXZlRXZlbnQudG91Y2hlcykgP1xuICAgIGNyZWF0ZVRvdWNoZXModG91Y2hFdmVudFRvVG91Y2hlcyhlKSwge1xuICAgICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICAgIGV2ZW50VG9Ub3VjaGVzOiB0b3VjaEV2ZW50VG9Ub3VjaGVzLFxuICAgICAgLi4ucHJvcHNcbiAgICB9KSA6XG4gICAgY3JlYXRlVG91Y2hlcyhtb3VzZUV2ZW50VG9Ub3VjaGVzKGUpLCB7XG4gICAgICBtb3ZlRXZlbnQ6ICdtb3VzZW1vdmUnLFxuICAgICAgZXZlbnRUb1RvdWNoZXM6IG1vdXNlRXZlbnRUb1RvdWNoZXMsXG4gICAgICAuLi5wcm9wc1xuICAgIH0pO1xufTtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3R3ZWVuLmpzIl0sIm5hbWVzIjpbImNsYW1wUHJvZ3Jlc3MiLCJORVhUX1NURVBTIiwibG9vcCIsInR3ZWVuIiwic3RhcnQiLCJ5b3lvIiwicmV2ZXJzZSIsImZsaXAiLCJUd2VlbiIsIm9uU3RhcnQiLCJwcm9wcyIsImR1cmF0aW9uIiwicGxheURpcmVjdGlvbiIsImVsYXBzZWQiLCJwcm9ncmVzcyIsInVwZGF0ZSIsImVhc2UiLCJmcm9tIiwidG8iLCJpc0FjdGlvbkNvbXBsZXRlIiwiaXNDb21wbGV0ZSIsImlzU3RlcFRha2VuIiwia2V5IiwibmV4dFN0ZXAiLCJjb3VudFByb3AiLCJzdGVwTWF4IiwiZ2V0UHJvcCIsInN0ZXBDb3VudCIsInNldFByb3BzIiwiZ2V0RWxhcHNlZCIsImRlZmF1bHRQcm9wcyIsImZsaXBDb3VudCIsInlveW9Db3VudCIsImxvb3BDb3VudCIsImFyZ3MiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IseUJBQU0sQ0FBTixFQUFTLENBQVQsQ0FBdEI7O0FBRUEsSUFBTUMsYUFBYTtBQUNqQkMsUUFBTSxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsTUFBTUMsS0FBTixFQUFYO0FBQUEsR0FEVztBQUVqQkMsUUFBTSxVQUFDRixLQUFEO0FBQUEsV0FBV0EsTUFBTUcsT0FBTixHQUFnQkYsS0FBaEIsRUFBWDtBQUFBLEdBRlc7QUFHakJHLFFBQU0sVUFBQ0osS0FBRDtBQUFBLFdBQVdBLE1BQU1JLElBQU4sR0FBYUgsS0FBYixFQUFYO0FBQUE7QUFIVyxDQUFuQjs7SUFNTUksSzs7Ozs7Ozs7O2tCQWVKQyxPLHNCQUFVO0FBQUEsaUJBQzRCLEtBQUtDLEtBRGpDO0FBQUEsUUFDQUMsUUFEQSxVQUNBQSxRQURBO0FBQUEsUUFDVUMsYUFEVixVQUNVQSxhQURWOzs7QUFHUixTQUFLQyxPQUFMLEdBQWdCRCxr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c0IsSUFBUztBQUFUQSxRQUFTO0FBQUE7O0FBQzFCLE1BQUlBLEtBQUtDLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFBQSxRQUNiekIsS0FEYSxHQUNId0IsSUFERzs7QUFFckIsV0FBTyxJQUFJMUIsS0FBSixDQUFVRSxLQUFWLENBQVA7QUFDRCxHQUhELE1BR087QUFBQSxRQUNHTyxJQURILEdBQ3VDaUIsSUFEdkM7QUFBQSxRQUNTaEIsRUFEVCxHQUN1Q2dCLElBRHZDO0FBQUEsUUFDYXZCLFFBRGIsR0FDdUN1QixJQUR2QztBQUFBLFFBQ3VCbEIsSUFEdkIsR0FDdUNrQixJQUR2QztBQUFBLFFBQzZCeEIsT0FEN0IsR0FDdUN3QixJQUR2Qzs7QUFFTCxXQUFPLElBQUkxQixLQUFKLFlBQVlTLFVBQVosRUFBa0JDLE1BQWxCLEVBQXNCUCxrQkFBdEIsRUFBZ0NLLFVBQWhDLElBQXlDTixPQUF6QyxFQUFQO0FBQ0Q7QUFDRixDIiwiZmlsZSI6InR3ZWVuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJzLmhhbGwvUHJvamVjdHMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgeyB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuaW1wb3J0IHsgY2xhbXAgfSBmcm9tICcuLi9pbmMvdHJhbnNmb3JtZXJzJztcbmltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGVhc2VPdXQgfSBmcm9tICcuLi9pbmMvZWFzaW5nJztcblxuY29uc3QgY2xhbXBQcm9ncmVzcyA9IGNsYW1wKDAsIDEpO1xuXG5jb25zdCBORVhUX1NURVBTID0ge1xuICBsb29wOiAodHdlZW4pID0+IHR3ZWVuLnN0YXJ0KCksXG4gIHlveW86ICh0d2VlbikgPT4gdHdlZW4ucmV2ZXJzZSgpLnN0YXJ0KCksXG4gIGZsaXA6ICh0d2VlbikgPT4gdHdlZW4uZmxpcCgpLnN0YXJ0KClcbn07XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIGVhc2U6IGVhc2VPdXQsXG4gICAgZnJvbTogMCxcbiAgICB0bzogMSxcbiAgICBmbGlwOiAwLFxuICAgIGZsaXBDb3VudDogMCxcbiAgICB5b3lvOiAwLFxuICAgIHlveW9Db3VudDogMCxcbiAgICBsb29wOiAwLFxuICAgIGxvb3BDb3VudDogMCxcbiAgICBwbGF5RGlyZWN0aW9uOiAxXG4gIH07XG5cbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IGR1cmF0aW9uLCBwbGF5RGlyZWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5lbGFwc2VkID0gKHBsYXlEaXJlY3Rpb24gPT09IDEpID8gMCA6IGR1cmF0aW9uO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHsgZHVyYXRpb24sIGVhc2UsIGZyb20sIHRvLCBwbGF5RGlyZWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5lbGFwc2VkICs9IHRpbWVTaW5jZUxhc3RGcmFtZSgpICogcGxheURpcmVjdGlvbjtcbiAgICB0aGlzLnByb2dyZXNzID0gY2xhbXBQcm9ncmVzcyhnZXRQcm9ncmVzc0Zyb21WYWx1ZSgwLCBkdXJhdGlvbiwgdGhpcy5lbGFwc2VkKSk7XG5cbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZnJvbSwgdG8sIGVhc2UodGhpcy5wcm9ncmVzcykpO1xuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICBjb25zdCB7IGR1cmF0aW9uLCBwbGF5RGlyZWN0aW9uLCB5b3lvLCBsb29wLCBmbGlwIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBpc0NvbXBsZXRlID0gKHBsYXlEaXJlY3Rpb24gPT09IDEpID8gKHRoaXMuZWxhcHNlZCA+PSBkdXJhdGlvbikgOiAodGhpcy5lbGFwc2VkIDw9IDApO1xuXG4gICAgaWYgKGlzQ29tcGxldGUgJiYgKHlveW8gfHwgbG9vcCB8fCBmbGlwKSkge1xuICAgICAgbGV0IGlzU3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgIGNvbnN0IG5leHRTdGVwID0gTkVYVF9TVEVQU1trZXldO1xuICAgICAgICBjb25zdCBjb3VudFByb3AgPSBrZXkgKyAnQ291bnQnO1xuICAgICAgICBjb25zdCBzdGVwTWF4ID0gdGhpcy5nZXRQcm9wKGtleSk7XG4gICAgICAgIGNvbnN0IHN0ZXBDb3VudCA9IHRoaXMuZ2V0UHJvcChjb3VudFByb3ApO1xuXG4gICAgICAgIGlmIChzdGVwTWF4ID4gc3RlcENvdW50KSB7XG4gICAgICAgICAgdGhpcy5zZXRQcm9wcyh7XG4gICAgICAgICAgICBbY291bnRQcm9wXTogc3RlcENvdW50ICsgMVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG5leHRTdGVwKHRoaXMpO1xuICAgICAgICAgIGlzU3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdGVwVGFrZW4pIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNDb21wbGV0ZTtcbiAgfVxuXG4gIGdldEVsYXBzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZDtcbiAgfVxuXG4gIGZsaXAoKSB7XG4gICAgdGhpcy5lbGFwc2VkID0gdGhpcy5wcm9wcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcbiAgICBbdGhpcy5wcm9wcy5mcm9tLCB0aGlzLnByb3BzLnRvXSA9IFt0aGlzLnByb3BzLnRvLCB0aGlzLnByb3BzLmZyb21dO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmV2ZXJzZSgpIHtcbiAgICB0aGlzLnByb3BzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKC4uLmFyZ3MpID0+IHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgWyBwcm9wcyBdID0gYXJncztcbiAgICByZXR1cm4gbmV3IFR3ZWVuKHByb3BzKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBbIGZyb20sIHRvLCBkdXJhdGlvbiwgZWFzZSwgcHJvcHMgXSA9IGFyZ3M7XG4gICAgcmV0dXJuIG5ldyBUd2Vlbih7IGZyb20sIHRvLCBkdXJhdGlvbiwgZWFzZSwgLi4ucHJvcHMgfSk7XG4gIH1cbn07XG4iXX0=

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
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFjdGlvbiIsInByb3BzIiwic2NoZWR1bGVkVXBkYXRlIiwiYmluZCIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdFByb3BzIiwic2V0UHJvcHMiLCJjdXJyZW50IiwiZnJvbSIsInN0YXJ0Iiwib25TdGFydCIsIl9vblN0YXJ0IiwicGFzc2l2ZSIsIl9pc0FjdGl2ZSIsInN0b3AiLCJvblN0b3AiLCJfb25TdG9wIiwiY29tcGxldGUiLCJvbkNvbXBsZXRlIiwiX29uQ29tcGxldGUiLCJsYXN0VXBkYXRlZCIsInByZXYiLCJvblVwZGF0ZSIsInVwZGF0ZSIsImZpcmVMaXN0ZW5lcnMiLCJpc0FjdGlvbkNvbXBsZXRlIiwib3V0cHV0IiwiZnVuYyIsImdldCIsInNldCIsInYiLCJnZXRQcm9wIiwia2V5IiwiZ2V0VmVsb2NpdHkiLCJpc0FjdGl2ZSIsImFkZExpc3RlbmVyIiwibGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJudW1MaXN0ZW5lcnMiLCJpbmRleE9mIiwicHVzaCIsInJlbW92ZUxpc3RlbmVyIiwibGlzdGVuZXJJbmRleCIsInNwbGljZSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0lBRU1BLE07QUFBUztBQUNiLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtDLGVBQUwsR0FBdUIsS0FBS0EsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkI7O0FBRUEsU0FBS0YsS0FBTCxnQkFDSyxLQUFLRyxXQUFMLENBQWlCQyxZQUR0Qjs7QUFJQSxTQUFLQyxRQUFMLENBQWNMLEtBQWQ7O0FBRUEsU0FBS00sT0FBTCxHQUFlTixNQUFNTSxPQUFOLElBQWlCTixNQUFNTyxJQUF2QixJQUErQixDQUE5QztBQUNEOzttQkFFREMsSyxvQkFBUTtBQUFBLGlCQUNpQyxLQUFLUixLQUR0QztBQUFBLFFBQ0VTLE9BREYsVUFDRUEsT0FERjtBQUFBLFFBQ1dDLFFB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YyxRLHVCQUFXO0FBQ1QsV0FBTyxLQUFLckIsU0FBWjtBQUNELEc7O21CQUVEc0IsVyx3QkFBWUMsUSxFQUFVO0FBQ3BCLFNBQUtDLFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxJQUFrQixFQUFuQztBQUNBLFNBQUtDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxJQUFxQixDQUF6QztBQUNBLFFBQUksS0FBS0QsU0FBTCxDQUFlRSxPQUFmLENBQXVCSCxRQUF2QixNQUFxQyxDQUFDLENBQTFDLEVBQTZDO0FBQzNDLFdBQUtDLFNBQUwsQ0FBZUcsSUFBZixDQUFvQkosUUFBcEI7QUFDQSxXQUFLRSxZQUFMO0FBQ0Q7QUFDRCxXQUFPLElBQVA7QUFDRCxHOzttQkFFREcsYywyQkFBZUwsUSxFQUFVO0FBQ3ZCLFFBQU1NLGdCQUFpQixLQUFLTCxTQUFOLEdBQW1CLEtBQUtBLFNBQUwsQ0FBZUUsT0FBZixDQUF1QkgsUUFBdkIsQ0FBbkIsR0FBc0QsQ0FBQyxDQUE3RTtBQUNBLFFBQUlNLGtCQUFrQixDQUFDLENBQXZCLEVBQTBCO0FBQ3hCLFdBQUtKLFlBQUw7QUFDQSxXQUFLRCxTQUFMLENBQWVNLE1BQWYsQ0FBc0JELGFBQXRCLEVBQXFDLENBQXJDO0FBQ0Q7QUFDRCxXQUFPLElBQVA7QUFDRCxHOzttQkFFRGxCLGEsNEJBQWdCO0FBQ2QsUUFBTWpCLFVBQVUsS0FBS3FCLEdBQUwsRUFBaEI7QUFDQSxTQUFLLElBQUlnQixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS04sWUFBekIsRUFBdUNNLEdBQXZDLEVBQTRDO0FBQzFDLFdBQUtQLFNBQUwsQ0FBZU8sQ0FBZixFQUFrQnJDLE9BQWxCLEVBQTJCLElBQTNCO0FBQ0Q7QUFDRCxXQUFPLElBQVA7QUFDRCxHOzs7OztrQkFHWVAsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFycy5oYWxsL1Byb2plY3RzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9uRnJhbWVVcGRhdGUsIGNhbmNlbE9uRnJhbWVVcGRhdGUsIHRpbWVTaW5jZUxhc3RGcmFtZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBzcGVlZFBlclNlY29uZCB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuY2xhc3MgQWN0aW9uIHsgLy8gbGF3c3VpdCAtIHNvcnJ5XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5zY2hlZHVsZWRVcGRhdGUgPSB0aGlzLnNjaGVkdWxlZFVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzXG4gICAgfTtcblxuICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuXG4gICAgdGhpcy5jdXJyZW50ID0gcHJvcHMuY3VycmVudCB8fCBwcm9wcy5mcm9tIHx8IDA7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBjb25zdCB7IG9uU3RhcnQsIF9vblN0YXJ0LCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG4gICAgICBvbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB0aGlzLm9uU3RhcnQoKTtcbiAgICBpZiAob25TdGFydCkgb25TdGFydCh0aGlzKTtcbiAgICBpZiAoX29uU3RhcnQpIF9vblN0YXJ0KHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNvbnN0IHsgb25TdG9wLCBfb25TdG9wLCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgY2FuY2VsT25GcmFtZVVwZGF0ZSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdG9wKSB0aGlzLm9uU3RvcCgpO1xuICAgIGlmIChvblN0b3ApIG9uU3RvcCh0aGlzKTtcbiAgICBpZiAoX29uU3RvcCkgX29uU3RvcCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgY29uc3QgeyBvbkNvbXBsZXRlLCBfb25Db21wbGV0ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgaWYgKHRoaXMub25Db21wbGV0ZSkgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUodGhpcyk7XG4gICAgaWYgKF9vbkNvbXBsZXRlKSBfb25Db21wbGV0ZSh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2NoZWR1bGVkVXBkYXRlKCkge1xuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSB0aW1lU2luY2VMYXN0RnJhbWUoKTtcbiAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICBjb25zdCB7IG9uVXBkYXRlLCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHRoaXMudXBkYXRlKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnVwZGF0ZSh0aGlzLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlmIChvblVwZGF0ZSkgb25VcGRhdGUodGhpcy5jdXJyZW50LCB0aGlzKTtcbiAgICB0aGlzLmZpcmVMaXN0ZW5lcnMoKTtcblxuICAgIGlmICghcGFzc2l2ZSAmJiB0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgb25GcmFtZVVwZGF0ZSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiB0aGlzLmlzQWN0aW9uQ29tcGxldGUoKSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0UHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0ge1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG91dHB1dChmdW5jKSB7XG4gICAgdGhpcy5wcm9wcy5vblVwZGF0ZSA9IGZ1bmM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfVxuXG4gIHNldCh2KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFByb3Aoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHNba2V5XTtcbiAgfVxuXG4gIGdldFZlbG9jaXR5KCkge1xuICAgIHJldHVybiBzcGVlZFBlclNlY29uZCh0aGlzLmN1cnJlbnQgLSB0aGlzLnByZXYsIHRoaXMubGFzdFVwZGF0ZWQpO1xuICB9XG5cbiAgaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9XG5cbiAgYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IFtdO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gdGhpcy5udW1MaXN0ZW5lcnMgfHwgMDtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzKys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBjb25zdCBsaXN0ZW5lckluZGV4ID0gKHRoaXMubGlzdGVuZXJzKSA/IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpIDogLTE7XG4gICAgaWYgKGxpc3RlbmVySW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycy0tO1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZpcmVMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUxpc3RlbmVyczsgaSsrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tpXShjdXJyZW50LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuIl19

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2RhMWZmODUxMmY3MWQ5ZGE5NGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb2xvci10d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wYXJhbGxlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdG91Y2hlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9zdGFnZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3ZhbHVlLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXN5bmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9wYXJzZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL2NyZWF0ZS1yZW5kZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvdHJhbnNmb3JtLXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3ByZWZpeGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvYnVpbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNRO0FBQ0EsNENBQTJDLGNBQWMsdVo7Ozs7OztBQ1R6RDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rix3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxjQUFjLCs1Rjs7Ozs7O0FDNUx6RDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsY0FBYywyeVY7Ozs7OztBQ2pOekQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxjQUFjLHVwSjs7Ozs7O0FDakV6RDs7QUFFQTtBQUNBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksT0FBTztBQUNuQixhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQVksT0FBTztBQUNuQixhQUFZLE9BQU87QUFDbkIsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLGFBQWE7QUFDekIsYUFBWTtBQUNaO0FBQ0E7QUFDQSwwRUFBeUUsYUFBYTtBQUN0RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyRkFBMEYsZUFBZTtBQUN6RztBQUNBOztBQUVBO0FBQ0EsZ0JBQWUscUJBQXFCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFZLE1BQU07QUFDbEIsYUFBWSxNQUFNO0FBQ2xCLGFBQVksU0FBUztBQUNyQixhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFdBQVUsaUJBQWlCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsY0FBYywrM29COzs7Ozs7QUNyVXpEOztBQUVBO0FBQ0E7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZSxHQUFHO0FBQ2pRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBdUM7QUFDdkM7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBdUM7QUFDdkM7QUFDQSxFQUFDOztBQUVELDRDQUEyQztBQUMzQztBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLGNBQWMsMmhHOzs7Ozs7QUN0RXpEOztBQUVBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RiwrQ0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsY0FBYztBQUNqQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsNENBQTJDLGNBQWMsdThOOzs7Ozs7QUNqR3pEOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixrREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDJDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQSxxQkFBb0IsdUNBQXVDO0FBQzNEO0FBQ0EsNENBQTJDLGNBQWMsbTlFOzs7Ozs7QUNyRXpEOztBQUVBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQTtBQUNBLDBDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSw0Q0FBMkMsY0FBYywyb0M7Ozs7OztBQ3pCekQ7O0FBRUE7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLCtDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU4sa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSw0Q0FBMkMsY0FBYywydUk7Ozs7OztBQzNHekQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxjQUFjLG11RTs7Ozs7O0FDcEV6RDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQSxnQ0FBK0IsNkNBQTZDO0FBQzVFO0FBQ0EsNENBQTJDLGNBQWMsdWhCOzs7Ozs7QUNiekQ7O0FBRUE7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLGlDQUFnQyxtQkFBbUI7QUFDbkQ7QUFDQSw0Q0FBMkMsY0FBYywreUU7Ozs7OztBQ3BFekQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsY0FBYyx1NUg7Ozs7OztBQ3pGekQ7O0FBRUE7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLCtDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU47QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSw0Q0FBMkMsY0FBYyx1MEk7Ozs7OztBQ3BGekQ7O0FBRUE7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLCtDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU47QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsNENBQTJDLGNBQWMsdTVPOzs7Ozs7QUMzSXpEOztBQUVBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixrREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDJDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0VBQWlFLGFBQWE7QUFDOUU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQStCLHFEQUFxRDtBQUNwRjtBQUNBO0FBQ0EsNENBQTJDLGNBQWMsKzVPOzs7Ozs7QUNsS3pEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxNQUFNO0FBQ2xCLGFBQVksa0JBQWtCO0FBQzlCLGFBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRyxJQUFJLHlCQUF5QjtBQUNoQztBQUNBLDRDQUEyQyxjQUFjLG1zRTs7Ozs7O0FDeEN6RDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFvQix1Q0FBdUM7QUFDM0Q7QUFDQSw0Q0FBMkMsY0FBYywrdUM7Ozs7OztBQzlDekQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxjQUFjLCt6STs7Ozs7O0FDOUV6RDs7QUFFQTs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQSxrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2QkFBNEI7O0FBRTVCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZCQUE0QjtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQSw0Q0FBMkMsY0FBYywybFI7Ozs7OztBQ3hLekQ7O0FBRUE7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUEsa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBOztBQUVBLDZCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjLE9BQU87QUFDckIsZUFBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBYyxPQUFPO0FBQ3JCLGVBQWM7QUFDZDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCLGNBQWEsTUFBTTtBQUNuQjs7O0FBR0E7QUFDQSxvRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsT0FBTztBQUNwQixjQUFhLE9BQU87QUFDcEI7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLDRDQUEyQyxjQUFjLG1tUTs7Ozs7O0FDekt6RDs7QUFFQTs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDO0FBQ0QsNENBQTJDLGNBQWMsbXlGOzs7Ozs7QUM3RXpEOztBQUVBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBK0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQztBQUNELDRDQUEyQyxjQUFjLHV5Rjs7Ozs7O0FDN0V6RDs7QUFFQTs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7QUFDRCw0Q0FBMkMsY0FBYywrN0U7Ozs7OztBQ25FekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsY0FBYztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsY0FBYywyaVM7Ozs7OztBQ3hLekQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsY0FBYyxtOEY7Ozs7OztBQ25EekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLDRDQUEyQyxjQUFjLG1rRjs7Ozs7O0FDM0N6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsY0FBYywraEc7Ozs7OztBQy9DekQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFrQiw0QkFBNEI7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLDJCQUEwQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsY0FBYywraUw7Ozs7OztBQ3hGekQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDOztBQUVEO0FBQ0EsNENBQTJDLGNBQWMsbXNEOzs7Ozs7QUN6QnpEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxjQUFjLDI3RTs7Ozs7O0FDaER6RDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyxjQUFjLDIrRjs7Ozs7O0FDMUN6RDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLGNBQWMsdS9KOzs7Ozs7QUN6RHpEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxjQUFjLG02Qjs7Ozs7O0FDbEJ6RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLGNBQWMsbXRGIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgM2RhMWZmODUxMmY3MWQ5ZGE5NGRcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi9wb3Btb3Rpb24nKTtcblxudmFyIHBvcG1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wb3Btb3Rpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG53aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW5iRzlpWVd3dWFuTWlYU3dpYm1GdFpYTWlPbHNpY0c5d2JXOTBhVzl1SWl3aWQybHVaRzkzSWwwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQk96dEpRVUZaUVN4VE96czdPMEZCUTFwRExFOUJRVTlFTEZOQlFWQXNSMEZCYlVKQkxGTkJRVzVDSWl3aVptbHNaU0k2SW1kc2IySmhiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0Z5Y3k1b1lXeHNMMUJ5YjJwbFkzUnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0FxSUdGeklIQnZjRzF2ZEdsdmJpQm1jbTl0SUNjdUwzQnZjRzF2ZEdsdmJpYzdYRzUzYVc1a2IzY3VjRzl3Ylc5MGFXOXVJRDBnY0c5d2JXOTBhVzl1TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3ZnUGF0aCA9IGV4cG9ydHMuc3ZnID0gZXhwb3J0cy5jc3MgPSBleHBvcnRzLlJlbmRlcmVyID0gZXhwb3J0cy52YWx1ZSA9IGV4cG9ydHMuc3RhZ2dlciA9IGV4cG9ydHMudHdlZW4gPSBleHBvcnRzLnRvdWNoZXMgPSBleHBvcnRzLnBvaW50ZXIgPSBleHBvcnRzLnBoeXNpY3MgPSBleHBvcnRzLnBhcmFsbGVsID0gZXhwb3J0cy5kZWxheSA9IGV4cG9ydHMuY3Jvc3NGYWRlID0gZXhwb3J0cy5jb21wb3NpdGUgPSBleHBvcnRzLmNvbG9yVHdlZW4gPSBleHBvcnRzLmNoYWluID0gZXhwb3J0cy5ibGVuZFR3ZWVucyA9IGV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy52YWx1ZVR5cGVzID0gZXhwb3J0cy50cmFuc2Zvcm0gPSBleHBvcnRzLmVhc2luZyA9IGV4cG9ydHMuY2FsYyA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4vZnJhbWVzeW5jJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVN0YXJ0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lU3RhcnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lVXBkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVJlbmRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVJlbmRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVFbmQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVFbmQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lU3RhcnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVTdGFydDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVVcGRhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVVcGRhdGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lUmVuZGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lUmVuZGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZUVuZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZUVuZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3RpbWVTaW5jZUxhc3RGcmFtZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3VycmVudEZyYW1lVGltZXN0YW1wJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jdXJyZW50RnJhbWVUaW1lc3RhbXA7XG4gIH1cbn0pO1xuXG52YXIgX2NhbGMyID0gcmVxdWlyZSgnLi9pbmMvY2FsYycpO1xuXG52YXIgX2NhbGMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY2FsYzIpO1xuXG52YXIgX2Vhc2luZzIgPSByZXF1aXJlKCcuL2luYy9lYXNpbmcnKTtcblxudmFyIF9lYXNpbmcgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfZWFzaW5nMik7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdHJhbnNmb3JtID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3RyYW5zZm9ybWVycyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSByZXF1aXJlKCcuL2luYy92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdmFsdWVUeXBlczIpO1xuXG52YXIgX2FjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMnKTtcblxudmFyIF9hY3Rpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FjdGlvbnMpO1xuXG52YXIgX2JsZW5kVHdlZW5zMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9ibGVuZC10d2VlbnMnKTtcblxudmFyIF9ibGVuZFR3ZWVuczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ibGVuZFR3ZWVuczIpO1xuXG52YXIgX2NoYWluMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jaGFpbicpO1xuXG52YXIgX2NoYWluMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoYWluMik7XG5cbnZhciBfY29sb3JUd2VlbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY29sb3ItdHdlZW4nKTtcblxudmFyIF9jb2xvclR3ZWVuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yVHdlZW4yKTtcblxudmFyIF9jb21wb3NpdGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NvbXBvc2l0ZScpO1xuXG52YXIgX2NvbXBvc2l0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGUyKTtcblxudmFyIF9jcm9zc0ZhZGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Nyb3NzLWZhZGUnKTtcblxudmFyIF9jcm9zc0ZhZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3Jvc3NGYWRlMik7XG5cbnZhciBfZGVsYXkyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2RlbGF5Jyk7XG5cbnZhciBfZGVsYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVsYXkyKTtcblxudmFyIF9wYXJhbGxlbDIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcGFyYWxsZWwnKTtcblxudmFyIF9wYXJhbGxlbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJhbGxlbDIpO1xuXG52YXIgX3BoeXNpY3MyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BoeXNpY3MnKTtcblxudmFyIF9waHlzaWNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BoeXNpY3MyKTtcblxudmFyIF9wb2ludGVyMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9wb2ludGVyJyk7XG5cbnZhciBfcG9pbnRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb2ludGVyMik7XG5cbnZhciBfdG91Y2hlczIgPSByZXF1aXJlKCcuL2FjdGlvbnMvdG91Y2hlcycpO1xuXG52YXIgX3RvdWNoZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG91Y2hlczIpO1xuXG52YXIgX3R3ZWVuMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy90d2VlbicpO1xuXG52YXIgX3R3ZWVuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuMik7XG5cbnZhciBfc3RhZ2dlcjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvc3RhZ2dlcicpO1xuXG52YXIgX3N0YWdnZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhZ2dlcjIpO1xuXG52YXIgX3ZhbHVlMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy92YWx1ZScpO1xuXG52YXIgX3ZhbHVlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlMik7XG5cbnZhciBfcmVuZGVyZXJzID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMnKTtcblxudmFyIF9yZW5kZXJlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVuZGVyZXJzKTtcblxudmFyIF9jc3MyID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMvY3NzJyk7XG5cbnZhciBfY3NzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NzczIpO1xuXG52YXIgX3N2ZzIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9zdmcnKTtcblxudmFyIF9zdmczID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnMik7XG5cbnZhciBfc3ZnUGF0aDIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9zdmctcGF0aCcpO1xuXG52YXIgX3N2Z1BhdGgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnUGF0aDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5leHBvcnRzLmNhbGMgPSBfY2FsYztcbmV4cG9ydHMuZWFzaW5nID0gX2Vhc2luZztcbmV4cG9ydHMudHJhbnNmb3JtID0gX3RyYW5zZm9ybTtcbmV4cG9ydHMudmFsdWVUeXBlcyA9IF92YWx1ZVR5cGVzO1xuXG4vLyBBY3Rpb25zXG5cbmV4cG9ydHMuQWN0aW9uID0gX2FjdGlvbnMyLmRlZmF1bHQ7XG5leHBvcnRzLmJsZW5kVHdlZW5zID0gX2JsZW5kVHdlZW5zMy5kZWZhdWx0O1xuZXhwb3J0cy5jaGFpbiA9IF9jaGFpbjMuZGVmYXVsdDtcbmV4cG9ydHMuY29sb3JUd2VlbiA9IF9jb2xvclR3ZWVuMy5kZWZhdWx0O1xuZXhwb3J0cy5jb21wb3NpdGUgPSBfY29tcG9zaXRlMy5kZWZhdWx0O1xuZXhwb3J0cy5jcm9zc0ZhZGUgPSBfY3Jvc3NGYWRlMy5kZWZhdWx0O1xuZXhwb3J0cy5kZWxheSA9IF9kZWxheTMuZGVmYXVsdDtcbmV4cG9ydHMucGFyYWxsZWwgPSBfcGFyYWxsZWwzLmRlZmF1bHQ7XG5leHBvcnRzLnBoeXNpY3MgPSBfcGh5c2ljczMuZGVmYXVsdDtcbmV4cG9ydHMucG9pbnRlciA9IF9wb2ludGVyMy5kZWZhdWx0O1xuZXhwb3J0cy50b3VjaGVzID0gX3RvdWNoZXMzLmRlZmF1bHQ7XG5leHBvcnRzLnR3ZWVuID0gX3R3ZWVuMy5kZWZhdWx0O1xuZXhwb3J0cy5zdGFnZ2VyID0gX3N0YWdnZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnZhbHVlID0gX3ZhbHVlMy5kZWZhdWx0O1xuXG4vLyBSZW5kZXJlcnNcblxuZXhwb3J0cy5SZW5kZXJlciA9IF9yZW5kZXJlcnMyLmRlZmF1bHQ7XG5leHBvcnRzLmNzcyA9IF9jc3MzLmRlZmF1bHQ7XG5leHBvcnRzLnN2ZyA9IF9zdmczLmRlZmF1bHQ7XG5leHBvcnRzLnN2Z1BhdGggPSBfc3ZnUGF0aDMuZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3YjNCdGIzUnBiMjR1YW5NaVhTd2libUZ0WlhNaU9sc2liMjVHY21GdFpWTjBZWEowSWl3aWIyNUdjbUZ0WlZWd1pHRjBaU0lzSW05dVJuSmhiV1ZTWlc1a1pYSWlMQ0p2YmtaeVlXMWxSVzVrSWl3aVkyRnVZMlZzVDI1R2NtRnRaVk4wWVhKMElpd2lZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU0lzSW1OaGJtTmxiRTl1Um5KaGJXVlNaVzVrWlhJaUxDSmpZVzVqWld4UGJrWnlZVzFsUlc1a0lpd2lkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxJaXdpWTNWeWNtVnVkRVp5WVcxbFZHbHRaWE4wWVcxd0lpd2lZMkZzWXlJc0ltVmhjMmx1WnlJc0luUnlZVzV6Wm05eWJTSXNJblpoYkhWbFZIbHdaWE1pTENKQlkzUnBiMjRpTENKaWJHVnVaRlIzWldWdWN5SXNJbU5vWVdsdUlpd2lZMjlzYjNKVWQyVmxiaUlzSW1OdmJYQnZjMmwwWlNJc0ltTnliM056Um1Ga1pTSXNJbVJsYkdGNUlpd2ljR0Z5WVd4c1pXd2lMQ0p3YUhsemFXTnpJaXdpY0c5cGJuUmxjaUlzSW5SdmRXTm9aWE1pTENKMGQyVmxiaUlzSW5OMFlXZG5aWElpTENKMllXeDFaU0lzSWxKbGJtUmxjbVZ5SWl3aVkzTnpJaXdpYzNabklpd2ljM1puVUdGMGFDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0elFrRkZSVUVzV1RzN096czdPM05DUVVOQlF5eGhPenM3T3pzN2MwSkJRMEZETEdFN096czdPenR6UWtGRFFVTXNWVHM3T3pzN08zTkNRVU5CUXl4clFqczdPenM3TzNOQ1FVTkJReXh0UWpzN096czdPM05DUVVOQlF5eHRRanM3T3pzN08zTkNRVU5CUXl4blFqczdPenM3TzNOQ1FVTkJReXhyUWpzN096czdPM05DUVVOQlF5eHhRanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08xRkJSMVZETEVrN1VVRkRRVU1zVFR0UlFVTkJReXhUTzFGQlEwRkRMRlU3TzBGQlJWbzdPMUZCUTA5RExFMDdVVUZEUVVNc1Z6dFJRVU5CUXl4TE8xRkJRMEZETEZVN1VVRkRRVU1zVXp0UlFVTkJReXhUTzFGQlEwRkRMRXM3VVVGRFFVTXNVVHRSUVVOQlF5eFBPMUZCUTBGRExFODdVVUZEUVVNc1R6dFJRVU5CUXl4TE8xRkJRMEZETEU4N1VVRkRRVU1zU3pzN1FVRkZVRHM3VVVGRFQwTXNVVHRSUVVOQlF5eEhPMUZCUTBGRExFYzdVVUZEUVVNc1R5SXNJbVpwYkdVaU9pSndiM0J0YjNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk11YUdGc2JDOVFjbTlxWldOMGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THlCR2NtRnRaWE41Ym1NZ2MyTm9aV1IxYkdWeWMxeHVaWGh3YjNKMElIdGNiaUFnYjI1R2NtRnRaVk4wWVhKMExGeHVJQ0J2YmtaeVlXMWxWWEJrWVhSbExGeHVJQ0J2YmtaeVlXMWxVbVZ1WkdWeUxGeHVJQ0J2YmtaeVlXMWxSVzVrTEZ4dUlDQmpZVzVqWld4UGJrWnlZVzFsVTNSaGNuUXNYRzRnSUdOaGJtTmxiRTl1Um5KaGJXVlZjR1JoZEdVc1hHNGdJR05oYm1ObGJFOXVSbkpoYldWU1pXNWtaWElzWEc0Z0lHTmhibU5sYkU5dVJuSmhiV1ZGYm1Rc1hHNGdJSFJwYldWVGFXNWpaVXhoYzNSR2NtRnRaU3hjYmlBZ1kzVnljbVZ1ZEVaeVlXMWxWR2x0WlhOMFlXMXdYRzU5SUdaeWIyMGdKeTR2Wm5KaGJXVnplVzVqSnp0Y2JseHVaWGh3YjNKMElDb2dZWE1nWTJGc1l5Qm1jbTl0SUNjdUwybHVZeTlqWVd4akp6dGNibVY0Y0c5eWRDQXFJR0Z6SUdWaGMybHVaeUJtY205dElDY3VMMmx1WXk5bFlYTnBibWNuTzF4dVpYaHdiM0owSUNvZ1lYTWdkSEpoYm5ObWIzSnRJR1p5YjIwZ0p5NHZhVzVqTDNSeVlXNXpabTl5YldWeWN5YzdYRzVsZUhCdmNuUWdLaUJoY3lCMllXeDFaVlI1Y0dWeklHWnliMjBnSnk0dmFXNWpMM1poYkhWbExYUjVjR1Z6Snp0Y2JseHVMeThnUVdOMGFXOXVjMXh1Wlhod2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUwyRmpkR2x2Ym5Nbk8xeHVaWGh3YjNKMElHSnNaVzVrVkhkbFpXNXpJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OWliR1Z1WkMxMGQyVmxibk1uTzF4dVpYaHdiM0owSUdOb1lXbHVJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OWphR0ZwYmljN1hHNWxlSEJ2Y25RZ1kyOXNiM0pVZDJWbGJpQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlkyOXNiM0l0ZEhkbFpXNG5PMXh1Wlhod2IzSjBJR052YlhCdmMybDBaU0JtY205dElDY3VMMkZqZEdsdmJuTXZZMjl0Y0c5emFYUmxKenRjYm1WNGNHOXlkQ0JqY205emMwWmhaR1VnWm5KdmJTQW5MaTloWTNScGIyNXpMMk55YjNOekxXWmhaR1VuTzF4dVpYaHdiM0owSUdSbGJHRjVJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OWtaV3hoZVNjN1hHNWxlSEJ2Y25RZ2NHRnlZV3hzWld3Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDNCaGNtRnNiR1ZzSnp0Y2JtVjRjRzl5ZENCd2FIbHphV056SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTl3YUhsemFXTnpKenRjYm1WNGNHOXlkQ0J3YjJsdWRHVnlJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OXdiMmx1ZEdWeUp6dGNibVY0Y0c5eWRDQjBiM1ZqYUdWeklHWnliMjBnSnk0dllXTjBhVzl1Y3k5MGIzVmphR1Z6Snp0Y2JtVjRjRzl5ZENCMGQyVmxiaUJtY205dElDY3VMMkZqZEdsdmJuTXZkSGRsWlc0bk8xeHVaWGh3YjNKMElITjBZV2RuWlhJZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDNOMFlXZG5aWEluTzF4dVpYaHdiM0owSUhaaGJIVmxJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OTJZV3gxWlNjN1hHNWNiaTh2SUZKbGJtUmxjbVZ5YzF4dVpYaHdiM0owSUZKbGJtUmxjbVZ5SUdaeWIyMGdKeTR2Y21WdVpHVnlaWEp6Snp0Y2JtVjRjRzl5ZENCamMzTWdabkp2YlNBbkxpOXlaVzVrWlhKbGNuTXZZM056Snp0Y2JtVjRjRzl5ZENCemRtY2dabkp2YlNBbkxpOXlaVzVrWlhKbGNuTXZjM1puSnp0Y2JtVjRjRzl5ZENCemRtZFFZWFJvSUdaeWIyMGdKeTR2Y21WdVpHVnlaWEp6TDNOMlp5MXdZWFJvSnp0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNtb290aCA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGV4cG9ydHMuZGlsYXRlID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5hbmdsZSA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuLypcbiAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcGFyYW0gW251bWJlcl1cbiAgQHJldHVybiBbbnVtYmVyXVxuKi9cbnZhciB0b0RlY2ltYWwgPSBmdW5jdGlvbiAobnVtKSB7XG4gIHZhciBwcmVjaXNpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDI7XG5cbiAgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufTtcblxuLypcbiAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgXG4gIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICBhcmUgYXQgMCwwXG4gIFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFpFUk9fUE9JTlQ7XG4gIHJldHVybiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbnZhciBkZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgRGlsYXRlXG4gIFxuICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gIFxuICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgXG4gIGEgLS0tLS0tLS0tIGJcbiAgXG4gIHRvXG4gIFxuICBhIC0tLS0gYlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG52YXIgZGlsYXRlID0gZXhwb3J0cy5kaWxhdGUgPSBmdW5jdGlvbiAoYSwgYiwgZGlsYXRpb24pIHtcbiAgcmV0dXJuIGEgKyAoYiAtIGEpICogZGlsYXRpb247XG59O1xuXG4vKlxuICBEaXN0YW5jZVxuICBcbiAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG4gIFxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG52YXIgZGlzdGFuY2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24gKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFpFUk9fUE9JTlQ7XG5cbiAgLy8gMUQgZGltZW5zaW9uc1xuICBpZiAoKDAsIF91dGlscy5pc051bSkoYSkpIHtcbiAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gIH0gZWxzZSB7XG4gICAgdmFyIHhEZWx0YSA9IGRpc3RhbmNlMUQoYS54LCBiLngpO1xuICAgIHZhciB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICB2YXIgekRlbHRhID0gKDAsIF91dGlscy5pc051bSkoYS56KSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coeERlbHRhLCAyKSArIE1hdGgucG93KHlEZWx0YSwgMikgKyBNYXRoLnBvdyh6RGVsdGEsIDIpKTtcbiAgfVxufTtcblxuLypcbiAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xudmFyIGdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGZ1bmN0aW9uIChmcm9tLCB0bywgdmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG59O1xuXG4vKlxuICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG52YXIgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZnVuY3Rpb24gKGZyb20sIHRvLCBwcm9ncmVzcykge1xuICByZXR1cm4gLXByb2dyZXNzICogZnJvbSArIHByb2dyZXNzICogdG8gKyBmcm9tO1xufTtcblxuLypcbiAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xudmFyIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICByZXR1cm4ge1xuICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICB9O1xufTtcblxuLypcbiAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xudmFyIHJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBmdW5jdGlvbiAocmFkaWFucykge1xuICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKlxuICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xudmFyIHNtb290aCA9IGV4cG9ydHMuc21vb3RoID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24pIHtcbiAgdmFyIHNtb290aGluZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcbiAgcmV0dXJuIHRvRGVjaW1hbChvbGRWYWx1ZSArIGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpO1xufTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZnVuY3Rpb24gKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gKDAsIF91dGlscy5pc051bSkoeHBzKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xufTtcblxuLypcbiAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgcmV0dXJuIHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcbn07XG5cbi8qXG4gIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gIFxuICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbnZhciBzdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGZ1bmN0aW9uIChzdGVwcywgcHJvZ3Jlc3MpIHtcbiAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gIHZhciB0YXJnZXQgPSAxIC0gMSAvIHN0ZXBzO1xuICB2YXIgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlkyRnNZeTVxY3lKZExDSnVZVzFsY3lJNld5SjBiMFJsWTJsdFlXd2lMQ0p1ZFcwaUxDSndjbVZqYVhOcGIyNGlMQ0pOWVhSb0lpd2ljbTkxYm1RaUxDSmFSVkpQWDFCUFNVNVVJaXdpZUNJc0lua2lMQ0o2SWl3aVpHbHpkR0Z1WTJVeFJDSXNJbUVpTENKaUlpd2lZV0p6SWl3aVlXNW5iR1VpTENKeVlXUnBZVzV6Vkc5RVpXZHlaV1Z6SWl3aVlYUmhiaklpTENKa1pXZHlaV1Z6Vkc5U1lXUnBZVzV6SWl3aVpHVm5jbVZsY3lJc0lsQkpJaXdpWkdsc1lYUmxJaXdpWkdsc1lYUnBiMjRpTENKa2FYTjBZVzVqWlNJc0luaEVaV3gwWVNJc0lubEVaV3gwWVNJc0lucEVaV3gwWVNJc0luTnhjblFpTENKblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTSXNJbVp5YjIwaUxDSjBieUlzSW5aaGJIVmxJaXdpWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNaUxDSndjbTluY21WemN5SXNJbkJ2YVc1MFJuSnZiVUZ1WjJ4bFFXNWtSR2x6ZEdGdVkyVWlMQ0p2Y21sbmFXNGlMQ0pqYjNNaUxDSnphVzRpTENKeVlXUnBZVzV6SWl3aWMyMXZiM1JvSWl3aWJtVjNWbUZzZFdVaUxDSnZiR1JXWVd4MVpTSXNJbVIxY21GMGFXOXVJaXdpYzIxdmIzUm9hVzVuSWl3aWJXRjRJaXdpYzNCbFpXUlFaWEpHY21GdFpTSXNJbmh3Y3lJc0ltWnlZVzFsUkhWeVlYUnBiMjRpTENKemNHVmxaRkJsY2xObFkyOXVaQ0lzSW5abGJHOWphWFI1SWl3aWMzUmxjRkJ5YjJkeVpYTnpJaXdpYzNSbGNITWlMQ0p6WldkdFpXNTBJaXdpZEdGeVoyVjBJaXdpY0hKdlozSmxjM05QWmxSaGNtZGxkQ0lzSW0xcGJpSXNJbVpzYjI5eUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCT3p0QlFVVkJPenM3T3pzN08wRkJUMEVzU1VGQlRVRXNXVUZCV1N4VlFVRkRReXhIUVVGRUxFVkJRWGRDTzBGQlFVRXNUVUZCYkVKRExGTkJRV3RDTEhWRlFVRk9MRU5CUVUwN08wRkJRM2hEUVN4MVFrRkJXU3hGUVVGYUxFVkJRV3RDUVN4VFFVRnNRanRCUVVOQkxGTkJRVTlETEV0QlFVdERMRXRCUVV3c1EwRkJWMGdzVFVGQlRVTXNVMEZCYWtJc1NVRkJPRUpCTEZOQlFYSkRPMEZCUTBRc1EwRklSRHM3UVVGTFFTeEpRVUZOUnl4aFFVRmhPMEZCUTJwQ1F5eExRVUZITEVOQlJHTTdRVUZGYWtKRExFdEJRVWNzUTBGR1l6dEJRVWRxUWtNc1MwRkJSenRCUVVoakxFTkJRVzVDT3p0QlFVMUJMRWxCUVUxRExHRkJRV0VzVlVGQlEwTXNRMEZCUkN4RlFVRkpReXhEUVVGS08wRkJRVUVzVTBGQlZWSXNTMEZCUzFNc1IwRkJUQ3hEUVVGVFJpeEpRVUZKUXl4RFFVRmlMRU5CUVZZN1FVRkJRU3hEUVVGdVFqczdRVUZGUVRzN096czdPenM3T3p0QlFWVlBMRWxCUVUxRkxIZENRVUZSTEZWQlFVTklMRU5CUVVRN1FVRkJRU3hOUVVGSlF5eERRVUZLTEhWRlFVRlJUaXhWUVVGU08wRkJRVUVzVTBGQmRVSlRMR2xDUVVGcFFsZ3NTMEZCUzFrc1MwRkJUQ3hEUVVGWFRDeEZRVUZGU2l4RFFVRkdMRWRCUVUxTExFVkJRVVZNTEVOQlFXNUNMRVZCUVhOQ1NTeEZRVUZGU0N4RFFVRkdMRWRCUVUxSkxFVkJRVVZLTEVOQlFUbENMRU5CUVdwQ0xFTkJRWFpDTzBGQlFVRXNRMEZCWkRzN1FVRkZVRHM3T3pzN08wRkJUVThzU1VGQlRWTXNPRU5CUVcxQ0xGVkJRVU5ETEU5QlFVUTdRVUZCUVN4VFFVRmhRU3hWUVVGVlpDeExRVUZMWlN4RlFVRm1MRWRCUVc5Q0xFZEJRV3BETzBGQlFVRXNRMEZCZWtJN08wRkJSVkE3T3pzN096czdPenM3T3pzN096czdPenRCUVd0Q1R5eEpRVUZOUXl3d1FrRkJVeXhWUVVGRFZDeERRVUZFTEVWQlFVbERMRU5CUVVvc1JVRkJUMU1zVVVGQlVEdEJRVUZCTEZOQlFXOUNWaXhKUVVGTExFTkJRVU5ETEVsQlFVbEVMRU5CUVV3c1NVRkJWVlVzVVVGQmJrTTdRVUZCUVN4RFFVRm1PenRCUVVWUU96czdPenM3T3pzN1FVRlRUeXhKUVVGTlF5dzRRa0ZCVnl4VlFVRkRXQ3hEUVVGRUxFVkJRWFZDTzBGQlFVRXNUVUZCYmtKRExFTkJRVzFDTEhWRlFVRm1UaXhWUVVGbE96dEJRVU0zUXp0QlFVTkJMRTFCUVVrc2EwSkJRVTFMTEVOQlFVNHNRMEZCU2l4RlFVRmpPMEZCUTFvc1YwRkJUMFFzVjBGQlYwTXNRMEZCV0N4RlFVRmpReXhEUVVGa0xFTkJRVkE3TzBGQlJVWTdRVUZEUXl4SFFVcEVMRTFCU1U4N1FVRkRUQ3hSUVVGTlZ5eFRRVUZUWWl4WFFVRlhReXhGUVVGRlNpeERRVUZpTEVWQlFXZENTeXhGUVVGRlRDeERRVUZzUWl4RFFVRm1PMEZCUTBFc1VVRkJUV2xDTEZOQlFWTmtMRmRCUVZkRExFVkJRVVZJTEVOQlFXSXNSVUZCWjBKSkxFVkJRVVZLTEVOQlFXeENMRU5CUVdZN1FVRkRRU3hSUVVGTmFVSXNVMEZCVlN4clFrRkJUV1FzUlVGQlJVWXNRMEZCVWl4RFFVRkVMRWRCUVdWRExGZEJRVmRETEVWQlFVVkdMRU5CUVdJc1JVRkJaMEpITEVWQlFVVklMRU5CUVd4Q0xFTkJRV1lzUjBGQmMwTXNRMEZCY2tRN08wRkJSVUVzVjBGQlQwd3NTMEZCUzNOQ0xFbEJRVXdzUTBGQlZTeFRRVUZEU0N4TlFVRkVMRVZCUVZjc1EwRkJXQ3hoUVVGcFFrTXNUVUZCYWtJc1JVRkJNa0lzUTBGQk0wSXNZVUZCYVVORExFMUJRV3BETEVWQlFUSkRMRU5CUVRORExFTkJRVllzUTBGQlVEdEJRVU5FTzBGQlEwWXNRMEZpVFRzN1FVRmxVRHM3T3pzN096czdPenM3TzBGQldVOHNTVUZCVFVVc2MwUkJRWFZDTEZWQlFVTkRMRWxCUVVRc1JVRkJUME1zUlVGQlVDeEZRVUZYUXl4TFFVRllPMEZCUVVFc1UwRkJjVUlzUTBGQlEwRXNVVUZCVVVZc1NVRkJWQ3hMUVVGclFrTXNTMEZCUzBRc1NVRkJka0lzUTBGQmNrSTdRVUZCUVN4RFFVRTNRanM3UVVGRlVEczdPenM3T3pzN096czdRVUZYVHl4SlFVRk5SeXh6UkVGQmRVSXNWVUZCUTBnc1NVRkJSQ3hGUVVGUFF5eEZRVUZRTEVWQlFWZEhMRkZCUVZnN1FVRkJRU3hUUVVGNVFpeERRVUZGUVN4UlFVRkdMRWRCUVdGS0xFbEJRV1FzUjBGQmRVSkpMRmRCUVZkSUxFVkJRV3hETEVkQlFYZERSQ3hKUVVGb1JUdEJRVUZCTEVOQlFUZENPenRCUVVWUU96czdPenM3T3p0QlFWRlBMRWxCUVUxTExHZEZRVUUwUWl4VlFVRkRReXhOUVVGRUxFVkJRVk53UWl4TFFVRlVMRVZCUVdkQ1VTeFJRVUZvUWl4RlFVRTJRanRCUVVOd1JWSXNWVUZCVVVjc2FVSkJRV2xDU0N4TFFVRnFRaXhEUVVGU096dEJRVVZCTEZOQlFVODdRVUZEVEZBc1QwRkJSMlVzVjBGQlYyeENMRXRCUVVzclFpeEhRVUZNTEVOQlFWTnlRaXhMUVVGVUxFTkJRVmdzUjBGQk5rSnZRaXhQUVVGUE0wSXNRMEZFYkVNN1FVRkZURU1zVDBGQlIyTXNWMEZCVjJ4Q0xFdEJRVXRuUXl4SFFVRk1MRU5CUVZOMFFpeExRVUZVTEVOQlFWZ3NSMEZCTmtKdlFpeFBRVUZQTVVJN1FVRkdiRU1zUjBGQlVEdEJRVWxFTEVOQlVFMDdPMEZCVTFBN096czdPenRCUVUxUExFbEJRVTFQTERoRFFVRnRRaXhWUVVGRGMwSXNUMEZCUkR0QlFVRkJMRk5CUVdGQkxGVkJRVlVzUjBGQlZpeEhRVUZuUW1wRExFdEJRVXRsTEVWQlFXeERPMEZCUVVFc1EwRkJla0k3TzBGQlJWQTdPenM3T3pzN08wRkJVVThzU1VGQlRXMUNMREJDUVVGVExGVkJRVU5ETEZGQlFVUXNSVUZCVjBNc1VVRkJXQ3hGUVVGeFFrTXNVVUZCY2tJN1FVRkJRU3hOUVVFclFrTXNVMEZCTDBJc2RVVkJRVEpETEVOQlFUTkRPMEZCUVVFc1UwRkJhVVI2UXl4VlFVRlZkVU1zVjBGQldVTXNXVUZCV1VZc1YwRkJWME1zVVVGQmRrSXNTVUZCYlVOd1F5eExRVUZMZFVNc1IwRkJUQ3hEUVVGVFJDeFRRVUZVTEVWQlFXOUNSQ3hSUVVGd1FpeERRVUY2UkN4RFFVRnFSRHRCUVVGQkxFTkJRV1k3TzBGQlJWQTdPenM3T3p0QlFVMVBMRWxCUVUxSExIZERRVUZuUWl4VlFVRkRReXhIUVVGRUxFVkJRVTFETEdGQlFVNDdRVUZCUVN4VFFVRjVRaXhyUWtGQlRVUXNSMEZCVGl4RFFVRkVMRWRCUVdWQkxFOUJRVThzVDBGQlQwTXNZVUZCWkN4RFFVRm1MRWRCUVRoRExFTkJRWFJGTzBGQlFVRXNRMEZCZEVJN08wRkJSVkE3T3pzN096dEJRVTFQTEVsQlFVMURMREJEUVVGcFFpeFZRVUZEUXl4UlFVRkVMRVZCUVZkR0xHRkJRVmc3UVVGQlFTeFRRVUUyUWtVc1dVRkJXU3hQUVVGUFJpeGhRVUZ1UWl4RFFVRTNRanRCUVVGQkxFTkJRWFpDT3p0QlFVVlFPenM3T3pzN08wRkJUMDhzU1VGQlRVY3NjME5CUVdVc1ZVRkJRME1zUzBGQlJDeEZRVUZSYkVJc1VVRkJVaXhGUVVGeFFqdEJRVU12UXl4TlFVRk5iVUlzVlVGQlZTeExRVUZMUkN4UlFVRlJMRU5CUVdJc1EwRkJhRUk3UVVGRFFTeE5RVUZOUlN4VFFVRlRMRWxCUVVzc1NVRkJTVVlzUzBGQmVFSTdRVUZEUVN4TlFVRk5SeXh0UWtGQmJVSnFSQ3hMUVVGTGEwUXNSMEZCVEN4RFFVRlRkRUlzVjBGQlYyOUNMRTFCUVhCQ0xFVkJRVFJDTEVOQlFUVkNMRU5CUVhwQ096dEJRVVZCTEZOQlFVOW9SQ3hMUVVGTGJVUXNTMEZCVEN4RFFVRlhSaXh0UWtGQmJVSkdMRTlCUVRsQ0xFbEJRWGxEUVN4UFFVRm9SRHRCUVVORUxFTkJUazBpTENKbWFXeGxJam9pWTJGc1l5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRnljeTVvWVd4c0wxQnliMnBsWTNSekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR2x6VG5WdElIMGdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ2JuVnRZbVZ5SUhSdklIZ2daR1ZqYVcxaGJDQndiR0ZqWlhOY2JseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDFjYmlvdlhHNWpiMjV6ZENCMGIwUmxZMmx0WVd3Z1BTQW9iblZ0TENCd2NtVmphWE5wYjI0Z1BTQXlLU0E5UGlCN1hHNGdJSEJ5WldOcGMybHZiaUE5SURFd0lDb3FJSEJ5WldOcGMybHZianRjYmlBZ2NtVjBkWEp1SUUxaGRHZ3VjbTkxYm1Rb2JuVnRJQ29nY0hKbFkybHphVzl1S1NBdklIQnlaV05wYzJsdmJqdGNibjA3WEc1Y2JtTnZibk4wSUZwRlVrOWZVRTlKVGxRZ1BTQjdYRzRnSUhnNklEQXNYRzRnSUhrNklEQXNYRzRnSUhvNklEQmNibjA3WEc1Y2JtTnZibk4wSUdScGMzUmhibU5sTVVRZ1BTQW9ZU3dnWWlrZ1BUNGdUV0YwYUM1aFluTW9ZU0F0SUdJcE8xeHVYRzR2S2x4dUlDQkJibWRzWlNCaVpYUjNaV1Z1SUhCdmFXNTBjMXh1SUNCY2JpQWdWSEpoYm5Oc1lYUmxjeUIwYUdVZ2FIbHdiM1JvWlhScFkyRnNJR3hwYm1VZ2MyOGdkR2hoZENCMGFHVWdKMlp5YjIwbklHTnZiM0prYVc1aGRHVnpYRzRnSUdGeVpTQmhkQ0F3TERCY2JpQWdYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjI5eVpHbHVZWFJsY3lCdlppQm1jbTl0SUhCdmFXNTBYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjNKa2FXNWhkR1Z6SUc5bUlIUnZJSEJ2YVc1MFhHNGdJRUJ5WlhSMWNtNGdXM0poWkdsaGJsMDZJRUZ1WjJ4bElHSmxkSGRsWlc0Z2RHaGxJSFIzYnlCd2IybHVkSE1nYVc0Z2NtRmthV0Z1YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCaGJtZHNaU0E5SUNoaExDQmlJRDBnV2tWU1QxOVFUMGxPVkNrZ1BUNGdjbUZrYVdGdWMxUnZSR1ZuY21WbGN5aE5ZWFJvTG1GMFlXNHlLR0V1ZUNBdElHSXVlQ3dnWVM1NUlDMGdZaTU1S1NrN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ1pHVm5jbVZsY3lCMGJ5QnlZV1JwWVc1elhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUdSbFozSmxaWE5jYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z2NtRmthV0Z1YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa1pXZHlaV1Z6Vkc5U1lXUnBZVzV6SUQwZ0tHUmxaM0psWlhNcElEMCtJR1JsWjNKbFpYTWdLaUJOWVhSb0xsQkpJQzhnTVRnd08xeHVYRzR2S2x4dUlDQkVhV3hoZEdWY2JpQWdYRzRnSUVOb1lXNW5aU0IwYUdVZ2NISnZaM0psYzNOcGIyNGdZbVYwZDJWbGJpQmhJR0Z1WkNCaUlHRmpZMjl5WkdsdVp5QjBieUJrYVd4aGRHbHZiaTVjYmlBZ1hHNGdJRk52SUdScGJHRjBhVzl1SUQwZ01DNDFJSGR2ZFd4a0lHTm9ZVzVuWlZ4dUlDQmNiaUFnWVNBdExTMHRMUzB0TFMwZ1lseHVJQ0JjYmlBZ2RHOWNiaUFnWEc0Z0lHRWdMUzB0TFNCaVhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeVpYWnBiM1Z6SUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVJwYkdGMFpTQndjbTluY21WemN5QmllU0I0WEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsSUhCc2RYTWdkR2hsSUdScGJHRjBaV1FnWkdsbVptVnlaVzVqWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa2FXeGhkR1VnUFNBb1lTd2dZaXdnWkdsc1lYUnBiMjRwSUQwK0lHRWdLeUFvS0dJZ0xTQmhLU0FxSUdScGJHRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ1JHbHpkR0Z1WTJWY2JpQWdYRzRnSUZKbGRIVnlibk1nZEdobElHUnBjM1JoYm1ObElHSmxkSGRsWlc0Z2RIZHZJRzRnWkdsdFpXNXphVzl1WVd3Z2NHOXBiblJ6TGx4dUlDQmNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUXZiblZ0WW1WeVhUb2dlQ0JoYm1RZ2VTQnZjaUJxZFhOMElIZ2diMllnY0c5cGJuUWdRVnh1SUNCQWNHRnlZVzBnVzI5aWFtVmpkQzl1ZFcxaVpYSmRPaUFvYjNCMGFXOXVZV3dwT2lCNElHRnVaQ0I1SUc5eUlHcDFjM1FnZUNCdlppQndiMmx1ZENCQ1hHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlJvWlNCa2FYTjBZVzVqWlNCaVpYUjNaV1Z1SUhSb1pTQjBkMjhnY0c5cGJuUnpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1JwYzNSaGJtTmxJRDBnS0dFc0lHSWdQU0JhUlZKUFgxQlBTVTVVS1NBOVBpQjdYRzRnSUM4dklERkVJR1JwYldWdWMybHZibk5jYmlBZ2FXWWdLR2x6VG5WdEtHRXBLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHUnBjM1JoYm1ObE1VUW9ZU3dnWWlrN1hHNWNiaUFnTHk4Z1RYVnNkR2t0WkdsdFpXNXphVzl1WVd4Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCamIyNXpkQ0I0UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVDd2dZaTU0S1R0Y2JpQWdJQ0JqYjI1emRDQjVSR1ZzZEdFZ1BTQmthWE4wWVc1alpURkVLR0V1ZVN3Z1lpNTVLVHRjYmlBZ0lDQmpiMjV6ZENCNlJHVnNkR0VnUFNBb2FYTk9kVzBvWVM1NktTa2dQeUJrYVhOMFlXNWpaVEZFS0dFdWVpd2dZaTU2S1NBNklEQTdYRzVjYmlBZ0lDQnlaWFIxY200Z1RXRjBhQzV6Y1hKMEtDaDRSR1ZzZEdFZ0tpb2dNaWtnS3lBb2VVUmxiSFJoSUNvcUlESXBJQ3NnS0hwRVpXeDBZU0FxS2lBeUtTazdYRzRnSUgxY2JuMDdYRzVjYmk4cVhHNGdJRkJ5YjJkeVpYTnpJSGRwZEdocGJpQm5hWFpsYmlCeVlXNW5aVnh1SUNCY2JpQWdSMmwyWlc0Z1lTQnNiM2RsY2lCc2FXMXBkQ0JoYm1RZ1lXNGdkWEJ3WlhJZ2JHbHRhWFFzSUhkbElISmxkSFZ5YmlCMGFHVWdjSEp2WjNKbGMzTmNiaUFnS0dWNGNISmxjM05sWkNCaGN5QmhJRzUxYldKbGNpQXdMVEVwSUhKbGNISmxjMlZ1ZEdWa0lHSjVJSFJvWlNCbmFYWmxiaUIyWVd4MVpTd2dZVzVrWEc0Z0lHeHBiV2wwSUhSb1lYUWdjSEp2WjNKbGMzTWdkRzhnZDJsMGFHbHVJREF0TVM1Y2JpQWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEc5M1pYSWdiR2x0YVhRZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWWEJ3WlhJZ2JHbHRhWFJjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0IwYnlCbWFXNWtJSEJ5YjJkeVpYTnpJSGRwZEdocGJpQm5hWFpsYmlCeVlXNW5aVnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCUWNtOW5jbVZ6Y3lCdlppQjJZV3gxWlNCM2FYUm9hVzRnY21GdVoyVWdZWE1nWlhod2NtVnpjMlZrSURBdE1WeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU0E5SUNobWNtOXRMQ0IwYnl3Z2RtRnNkV1VwSUQwK0lDaDJZV3gxWlNBdElHWnliMjBwSUM4Z0tIUnZJQzBnWm5KdmJTazdYRzVjYmk4cVhHNGdJRlpoYkhWbElHbHVJSEpoYm1kbElHWnliMjBnY0hKdlozSmxjM05jYmlBZ1hHNGdJRWRwZG1WdUlHRWdiRzkzWlhJZ2JHbHRhWFFnWVc1a0lHRnVJSFZ3Y0dWeUlHeHBiV2wwTENCM1pTQnlaWFIxY200Z2RHaGxJSFpoYkhWbElIZHBkR2hwYmx4dUlDQjBhR0YwSUhKaGJtZGxJR0Z6SUdWNGNISmxjM05sWkNCaWVTQndjbTluY21WemN5QW9ZU0J1ZFcxaVpYSWdabkp2YlNBd0xURXBYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeHZkMlZ5SUd4cGJXbDBJRzltSUhKaGJtZGxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlhCd1pYSWdiR2x0YVhRZ2IyWWdjbUZ1WjJWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlVhR1VnY0hKdlozSmxjM01nWW1WMGQyVmxiaUJzYjNkbGNpQmhibVFnZFhCd1pYSWdiR2x0YVhSeklHVjRjSEpsYzNObFpDQXdMVEZjYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnWVhNZ1kyRnNZM1ZzWVhSbFpDQm1jbTl0SUhCeWIyZHlaWE56SUhkcGRHaHBiaUJ5WVc1blpTQW9ibTkwSUd4cGJXbDBaV1FnZDJsMGFHbHVJSEpoYm1kbEtWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeUE5SUNobWNtOXRMQ0IwYnl3Z2NISnZaM0psYzNNcElEMCtJQ2d0SUhCeWIyZHlaWE56SUNvZ1puSnZiU2tnS3lBb2NISnZaM0psYzNNZ0tpQjBieWtnS3lCbWNtOXRPMXh1WEc0dktseHVJQ0JRYjJsdWRDQm1jbTl0SUdGdVoyeGxJR0Z1WkNCa2FYTjBZVzVqWlZ4dUlDQmNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUF5UkNCd2IybHVkQ0J2WmlCdmNtbG5hVzVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCQmJtZHNaU0JtY205dElHOXlhV2RwYmx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFUnBjM1JoYm1ObElHWnliMjBnYjNKcFoybHVYRzRnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjA2SUVOaGJHTjFiR0YwWldRZ01rUWdjRzlwYm5SY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NHOXBiblJHY205dFFXNW5iR1ZCYm1SRWFYTjBZVzVqWlNBOUlDaHZjbWxuYVc0c0lHRnVaMnhsTENCa2FYTjBZVzVqWlNrZ1BUNGdlMXh1SUNCaGJtZHNaU0E5SUdSbFozSmxaWE5VYjFKaFpHbGhibk1vWVc1bmJHVXBPMXh1WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnZURvZ1pHbHpkR0Z1WTJVZ0tpQk5ZWFJvTG1OdmN5aGhibWRzWlNrZ0t5QnZjbWxuYVc0dWVDeGNiaUFnSUNCNU9pQmthWE4wWVc1alpTQXFJRTFoZEdndWMybHVLR0Z1WjJ4bEtTQXJJRzl5YVdkcGJpNTVYRzRnSUgwN1hHNTlPMXh1WEc0dktseHVJQ0JEYjI1MlpYSjBJSEpoWkdsaGJuTWdkRzhnWkdWbmNtVmxjMXh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCcGJpQnlZV1JwWVc1elhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJR1JsWjNKbFpYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjbUZrYVdGdWMxUnZSR1ZuY21WbGN5QTlJQ2h5WVdScFlXNXpLU0E5UGlCeVlXUnBZVzV6SUNvZ01UZ3dJQzhnVFdGMGFDNVFTVHRjYmx4dUx5cGNiaUFnUm5KaGJXVnlZWFJsTFdsdVpHVndaVzVrWlc1MElITnRiMjkwYUdsdVoxeHVYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVG1WM0lIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1QyeGtJSFpoYkhWbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZElDaHZjSFJwYjI1aGJDazZJRk50YjI5MGFHbHVaeUFvTUNCcGN5QnViMjVsS1Z4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemJXOXZkR2dnUFNBb2JtVjNWbUZzZFdVc0lHOXNaRlpoYkhWbExDQmtkWEpoZEdsdmJpd2djMjF2YjNSb2FXNW5JRDBnTUNrZ1BUNGdkRzlFWldOcGJXRnNLRzlzWkZaaGJIVmxJQ3NnS0dSMWNtRjBhVzl1SUNvZ0tHNWxkMVpoYkhWbElDMGdiMnhrVm1Gc2RXVXBJQzhnVFdGMGFDNXRZWGdvYzIxdmIzUm9hVzVuTENCa2RYSmhkR2x2YmlrcEtUdGNibHh1THlwY2JpQWdRMjl1ZG1WeWRDQjRJSEJsY2lCelpXTnZibVFnZEc4Z2NHVnlJR1p5WVcxbElIWmxiRzlqYVhSNUlHSmhjMlZrSUc5dUlHWndjMXh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZibWwwSUhCbGNpQnpaV052Ym1SY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkdjbUZ0WlNCa2RYSmhkR2x2YmlCcGJpQnRjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Y0dWbFpGQmxja1p5WVcxbElEMGdLSGh3Y3l3Z1puSmhiV1ZFZFhKaGRHbHZiaWtnUFQ0Z0tHbHpUblZ0S0hod2N5a3BJRDhnZUhCeklDOGdLREV3TURBZ0x5Qm1jbUZ0WlVSMWNtRjBhVzl1S1NBNklEQTdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdkbVZzYjJOcGRIa2dhVzUwYnlCMlpXeHBZMmwwZVNCd1pYSWdjMlZqYjI1a1hHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWdWFYUWdjR1Z5SUdaeVlXMWxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNGdhVzRnYlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQmxaV1JRWlhKVFpXTnZibVFnUFNBb2RtVnNiMk5wZEhrc0lHWnlZVzFsUkhWeVlYUnBiMjRwSUQwK0lIWmxiRzlqYVhSNUlDb2dLREV3TURBZ0x5Qm1jbUZ0WlVSMWNtRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ1EzSmxZWFJsSUhOMFpYQndaV1FnZG1WeWMybHZiaUJ2WmlBd0xURWdjSEp2WjNKbGMzTmNiaUFnWEc0Z0lFQndZWEpoYlNCYmFXNTBYVG9nVG5WdFltVnlJRzltSUhOMFpYQnpYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJUZEdWd2NHVmtJSFpoYkhWbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITjBaWEJRY205bmNtVnpjeUE5SUNoemRHVndjeXdnY0hKdlozSmxjM01wSUQwK0lIdGNiaUFnWTI5dWMzUWdjMlZuYldWdWRDQTlJREVnTHlBb2MzUmxjSE1nTFNBeEtUdGNiaUFnWTI5dWMzUWdkR0Z5WjJWMElEMGdNU0F0SUNneElDOGdjM1JsY0hNcE8xeHVJQ0JqYjI1emRDQndjbTluY21WemMwOW1WR0Z5WjJWMElEMGdUV0YwYUM1dGFXNG9jSEp2WjNKbGMzTWdMeUIwWVhKblpYUXNJREVwTzF4dVhHNGdJSEpsZEhWeWJpQk5ZWFJvTG1ac2IyOXlLSEJ5YjJkeVpYTnpUMlpVWVhKblpYUWdMeUJ6WldkdFpXNTBLU0FxSUhObFoyMWxiblE3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3ViaWNCZXppZXIgPSBleHBvcnRzLmFudGljaXBhdGUgPSBleHBvcnRzLmNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBleHBvcnRzLmJhY2tJbk91dCA9IGV4cG9ydHMuYmFja091dCA9IGV4cG9ydHMuYmFja0luID0gZXhwb3J0cy5jcmVhdGVCYWNrSW4gPSBleHBvcnRzLmNpcmNJbk91dCA9IGV4cG9ydHMuY2lyY091dCA9IGV4cG9ydHMuY2lyY0luID0gZXhwb3J0cy5lYXNlSW5PdXQgPSBleHBvcnRzLmVhc2VPdXQgPSBleHBvcnRzLmVhc2VJbiA9IGV4cG9ydHMuY3JlYXRlRXhwb0luID0gZXhwb3J0cy5saW5lYXIgPSBleHBvcnRzLmNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVSZXZlcnNlZEVhc2luZyA9IHVuZGVmaW5lZDtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybWVycycpO1xuXG52YXIgREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEggPSAxLjUyNTtcblxudmFyIGNyZWF0ZVJldmVyc2VkRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVSZXZlcnNlZEVhc2luZyA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNpbmcoMSAtIHApO1xuICB9O1xufTtcbnZhciBjcmVhdGVNaXJyb3JlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlTWlycm9yZWRFYXNpbmcgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwIDw9IDAuNSA/IGVhc2luZygyICogcCkgLyAyIDogKDIgLSBlYXNpbmcoMiAqICgxIC0gcCkpKSAvIDI7XG4gIH07XG59O1xuXG52YXIgbGluZWFyID0gZXhwb3J0cy5saW5lYXIgPSBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcDtcbn07XG5cbnZhciBjcmVhdGVFeHBvSW4gPSBleHBvcnRzLmNyZWF0ZUV4cG9JbiA9IGZ1bmN0aW9uIChwb3dlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gTWF0aC5wb3cocCwgcG93ZXIpO1xuICB9O1xufTtcbnZhciBlYXNlSW4gPSBleHBvcnRzLmVhc2VJbiA9IGNyZWF0ZUV4cG9JbigyKTtcbnZhciBlYXNlT3V0ID0gZXhwb3J0cy5lYXNlT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoZWFzZUluKTtcbnZhciBlYXNlSW5PdXQgPSBleHBvcnRzLmVhc2VJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGVhc2VJbik7XG5cbnZhciBjaXJjSW4gPSBleHBvcnRzLmNpcmNJbiA9IGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHApKTtcbn07XG52YXIgY2lyY091dCA9IGV4cG9ydHMuY2lyY091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGNpcmNJbik7XG52YXIgY2lyY0luT3V0ID0gZXhwb3J0cy5jaXJjSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhjaXJjT3V0KTtcblxudmFyIGNyZWF0ZUJhY2tJbiA9IGV4cG9ydHMuY3JlYXRlQmFja0luID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwICogcCAqICgocG93ZXIgKyAxKSAqIHAgLSBwb3dlcik7XG4gIH07XG59O1xudmFyIGJhY2tJbiA9IGV4cG9ydHMuYmFja0luID0gY3JlYXRlQmFja0luKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcbnZhciBiYWNrT3V0ID0gZXhwb3J0cy5iYWNrT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoYmFja0luKTtcbnZhciBiYWNrSW5PdXQgPSBleHBvcnRzLmJhY2tJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGJhY2tJbik7XG5cbnZhciBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHZhciBiYWNrRWFzaW5nID0gY3JlYXRlQmFja0luKHBvd2VyKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIChwICo9IDIpIDwgMSA/IDAuNSAqIGJhY2tFYXNpbmcocCkgOiAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwIC0gMSkpKTtcbiAgfTtcbn07XG5cbnZhciBhbnRpY2lwYXRlID0gZXhwb3J0cy5hbnRpY2lwYXRlID0gY3JlYXRlQW50aWNpcGF0ZUVhc2luZyhERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG5cbnZhciBjdWJpY0JlemllciA9IGV4cG9ydHMuY3ViaWNCZXppZXIgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIpIHtcbiAgdmFyIHhCZXppZXIgPSAoMCwgX3RyYW5zZm9ybWVycy5iZXppZXIpKDAsIHgxLCB4MiwgMSk7XG4gIHZhciB5QmV6aWVyID0gKDAsIF90cmFuc2Zvcm1lcnMuYmV6aWVyKSgwLCB5MSwgeTIsIDEpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB5QmV6aWVyKHhCZXppZXIodCkpO1xuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJJa1JGUmtGVlRGUmZUMVpGVWxOSVQwOVVYMU5VVWtWT1IxUklJaXdpWTNKbFlYUmxVbVYyWlhKelpXUkZZWE5wYm1jaUxDSmxZWE5wYm1jaUxDSndJaXdpWTNKbFlYUmxUV2x5Y205eVpXUkZZWE5wYm1jaUxDSnNhVzVsWVhJaUxDSmpjbVZoZEdWRmVIQnZTVzRpTENKd2IzZGxjaUlzSW1WaGMyVkpiaUlzSW1WaGMyVlBkWFFpTENKbFlYTmxTVzVQZFhRaUxDSmphWEpqU1c0aUxDSk5ZWFJvSWl3aWMybHVJaXdpWVdOdmN5SXNJbU5wY21OUGRYUWlMQ0pqYVhKalNXNVBkWFFpTENKamNtVmhkR1ZDWVdOclNXNGlMQ0ppWVdOclNXNGlMQ0ppWVdOclQzVjBJaXdpWW1GamEwbHVUM1YwSWl3aVkzSmxZWFJsUVc1MGFXTnBjR0YwWlVWaGMybHVaeUlzSW1KaFkydEZZWE5wYm1jaUxDSndiM2NpTENKaGJuUnBZMmx3WVhSbElpd2lZM1ZpYVdOQ1pYcHBaWElpTENKNE1TSXNJbmt4SWl3aWVESWlMQ0o1TWlJc0luaENaWHBwWlhJaUxDSjVRbVY2YVdWeUlpd2lkQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlFUczdRVUZGUVN4SlFVRk5RU3cyUWtGQk5rSXNTMEZCYmtNN08wRkJSVThzU1VGQlRVTXNjMFJCUVhWQ0xGVkJRVU5ETEUxQlFVUTdRVUZCUVN4VFFVRlpMRlZCUVVORExFTkJRVVE3UVVGQlFTeFhRVUZQTEVsQlFVbEVMRTlCUVU4c1NVRkJTVU1zUTBGQldDeERRVUZZTzBGQlFVRXNSMEZCV2p0QlFVRkJMRU5CUVRkQ08wRkJRMEVzU1VGQlRVTXNjMFJCUVhWQ0xGVkJRVU5HTEUxQlFVUTdRVUZCUVN4VFFVRlpMRlZCUVVORExFTkJRVVE3UVVGQlFTeFhRVUZSUVN4TFFVRkxMRWRCUVU0c1IwRkJZVVFzVDBGQlR5eEpRVUZKUXl4RFFVRllMRWxCUVdkQ0xFTkJRVGRDTEVkQlFXbERMRU5CUVVNc1NVRkJTVVFzVDBGQlR5eExRVUZMTEVsQlFVbERMRU5CUVZRc1EwRkJVQ3hEUVVGTUxFbEJRVFJDTEVOQlFYQkZPMEZCUVVFc1IwRkJXanRCUVVGQkxFTkJRVGRDT3p0QlFVVkJMRWxCUVUxRkxEQkNRVUZUTEZWQlFVTkdMRU5CUVVRN1FVRkJRU3hUUVVGUFFTeERRVUZRTzBGQlFVRXNRMEZCWmpzN1FVRkZRU3hKUVVGTlJ5eHpRMEZCWlN4VlFVRkRReXhMUVVGRU8wRkJRVUVzVTBGQlZ5eFZRVUZEU2l4RFFVRkVPMEZCUVVFc2IwSkJRVTlCTEVOQlFWQXNSVUZCV1Vrc1MwRkJXanRCUVVGQkxFZEJRVmc3UVVGQlFTeERRVUZ5UWp0QlFVTkJMRWxCUVUxRExEQkNRVUZUUml4aFFVRmhMRU5CUVdJc1EwRkJaanRCUVVOQkxFbEJRVTFITERSQ1FVRlZVaXh4UWtGQmNVSlBMRTFCUVhKQ0xFTkJRV2hDTzBGQlEwRXNTVUZCVFVVc1owTkJRVmxPTEhGQ1FVRnhRa2tzVFVGQmNrSXNRMEZCYkVJN08wRkJSVUVzU1VGQlRVY3NNRUpCUVZNc1ZVRkJRMUlzUTBGQlJEdEJRVUZCTEZOQlFVOHNTVUZCU1ZNc1MwRkJTME1zUjBGQlRDeERRVUZUUkN4TFFVRkxSU3hKUVVGTUxFTkJRVlZZTEVOQlFWWXNRMEZCVkN4RFFVRllPMEZCUVVFc1EwRkJaanRCUVVOQkxFbEJRVTFaTERSQ1FVRlZaQ3h4UWtGQmNVSlZMRTFCUVhKQ0xFTkJRV2hDTzBGQlEwRXNTVUZCVFVzc1owTkJRVmxhTEhGQ1FVRnhRbGNzVDBGQmNrSXNRMEZCYkVJN08wRkJSVUVzU1VGQlRVVXNjME5CUVdVc1ZVRkJRMVlzUzBGQlJEdEJRVUZCTEZOQlFWY3NWVUZCUTBvc1EwRkJSRHRCUVVGQkxGZEJRVkZCTEVsQlFVbEJMRU5CUVV3c1NVRkJWeXhEUVVGRFNTeFJRVUZSTEVOQlFWUXNTVUZCWTBvc1EwRkJaQ3hIUVVGclFra3NTMEZCTjBJc1EwRkJVRHRCUVVGQkxFZEJRVmc3UVVGQlFTeERRVUZ5UWp0QlFVTkJMRWxCUVUxWExEQkNRVUZUUkN4aFFVRmhha0lzTUVKQlFXSXNRMEZCWmp0QlFVTkJMRWxCUVUxdFFpdzBRa0ZCVld4Q0xIRkNRVUZ4UW1sQ0xFMUJRWEpDTEVOQlFXaENPMEZCUTBFc1NVRkJUVVVzWjBOQlFWbG9RaXh4UWtGQmNVSmpMRTFCUVhKQ0xFTkJRV3hDT3p0QlFVVkJMRWxCUVUxSExEQkVRVUY1UWl4VlFVRkRaQ3hMUVVGRUxFVkJRVmM3UVVGREwwTXNUVUZCVFdVc1lVRkJZVXdzWVVGQllWWXNTMEZCWWl4RFFVRnVRanRCUVVOQkxGTkJRVThzVlVGQlEwb3NRMEZCUkR0QlFVRkJMRmRCUVZFc1EwRkJRMEVzUzBGQlN5eERRVUZPTEVsQlFWY3NRMEZCV2l4SFFVRnBRaXhOUVVGTmJVSXNWMEZCVjI1Q0xFTkJRVmdzUTBGQmRrSXNSMEZCZFVNc1QwRkJUeXhKUVVGSlV5eExRVUZMVnl4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVU1zUlVGQlJDeEpRVUZQY0VJc1NVRkJTU3hEUVVGWUxFTkJRVm9zUTBGQldDeERRVUU1UXp0QlFVRkJMRWRCUVZBN1FVRkRSQ3hEUVVoTk96dEJRVXRCTEVsQlFVMXhRaXhyUTBGQllVZ3NkVUpCUVhWQ2NrSXNNRUpCUVhaQ0xFTkJRVzVDT3p0QlFVVkJMRWxCUVUxNVFpeHZRMEZCWXl4VlFVRkRReXhGUVVGRUxFVkJRVXRETEVWQlFVd3NSVUZCVTBNc1JVRkJWQ3hGUVVGaFF5eEZRVUZpTEVWQlFXOUNPMEZCUXpkRExFMUJRVTFETEZWQlFWVXNNRUpCUVU4c1EwRkJVQ3hGUVVGVlNpeEZRVUZXTEVWQlFXTkZMRVZCUVdRc1JVRkJhMElzUTBGQmJFSXNRMEZCYUVJN1FVRkRRU3hOUVVGTlJ5eFZRVUZWTERCQ1FVRlBMRU5CUVZBc1JVRkJWVW9zUlVGQlZpeEZRVUZqUlN4RlFVRmtMRVZCUVd0Q0xFTkJRV3hDTEVOQlFXaENPenRCUVVWQkxGTkJRVThzVlVGQlEwY3NRMEZCUkR0QlFVRkJMRmRCUVU5RUxGRkJRVkZFTEZGQlFWRkZMRU5CUVZJc1EwRkJVaXhEUVVGUU8wRkJRVUVzUjBGQlVEdEJRVU5FTEVOQlRFMGlMQ0ptYVd4bElqb2laV0Z6YVc1bkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYSnpMbWhoYkd3dlVISnZhbVZqZEhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZbVY2YVdWeUlIMGdabkp2YlNBbkxpOTBjbUZ1YzJadmNtMWxjbk1uTzF4dVhHNWpiMjV6ZENCRVJVWkJWVXhVWDA5V1JWSlRTRTlQVkY5VFZGSkZUa2RVU0NBOUlERXVOVEkxTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxVbVYyWlhKelpXUkZZWE5wYm1jZ1BTQW9aV0Z6YVc1bktTQTlQaUFvY0NrZ1BUNGdNU0F0SUdWaGMybHVaeWd4SUMwZ2NDazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY2dQU0FvWldGemFXNW5LU0E5UGlBb2NDa2dQVDRnS0hBZ1BEMGdNQzQxS1NBL0lHVmhjMmx1WnlneUlDb2djQ2tnTHlBeUlEb2dLRElnTFNCbFlYTnBibWNvTWlBcUlDZ3hJQzBnY0NrcEtTQXZJREk3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JzYVc1bFlYSWdQU0FvY0NrZ1BUNGdjRHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR055WldGMFpVVjRjRzlKYmlBOUlDaHdiM2RsY2lrZ1BUNGdLSEFwSUQwK0lIQWdLaW9nY0c5M1pYSTdYRzVsZUhCdmNuUWdZMjl1YzNRZ1pXRnpaVWx1SUQwZ1kzSmxZWFJsUlhod2IwbHVLRElwTzF4dVpYaHdiM0owSUdOdmJuTjBJR1ZoYzJWUGRYUWdQU0JqY21WaGRHVlNaWFpsY25ObFpFVmhjMmx1WnlobFlYTmxTVzRwTzF4dVpYaHdiM0owSUdOdmJuTjBJR1ZoYzJWSmJrOTFkQ0E5SUdOeVpXRjBaVTFwY25KdmNtVmtSV0Z6YVc1bktHVmhjMlZKYmlrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamFYSmpTVzRnUFNBb2NDa2dQVDRnTVNBdElFMWhkR2d1YzJsdUtFMWhkR2d1WVdOdmN5aHdLU2s3WEc1bGVIQnZjblFnWTI5dWMzUWdZMmx5WTA5MWRDQTlJR055WldGMFpWSmxkbVZ5YzJWa1JXRnphVzVuS0dOcGNtTkpiaWs3WEc1bGVIQnZjblFnWTI5dWMzUWdZMmx5WTBsdVQzVjBJRDBnWTNKbFlYUmxUV2x5Y205eVpXUkZZWE5wYm1jb1kybHlZMDkxZENrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZDWVdOclNXNGdQU0FvY0c5M1pYSXBJRDArSUNod0tTQTlQaUFvY0NBcUlIQXBJQ29nS0Nod2IzZGxjaUFySURFcElDb2djQ0F0SUhCdmQyVnlLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmlZV05yU1c0Z1BTQmpjbVZoZEdWQ1lXTnJTVzRvUkVWR1FWVk1WRjlQVmtWU1UwaFBUMVJmVTFSU1JVNUhWRWdwTzF4dVpYaHdiM0owSUdOdmJuTjBJR0poWTJ0UGRYUWdQU0JqY21WaGRHVlNaWFpsY25ObFpFVmhjMmx1WnloaVlXTnJTVzRwTzF4dVpYaHdiM0owSUdOdmJuTjBJR0poWTJ0SmJrOTFkQ0E5SUdOeVpXRjBaVTFwY25KdmNtVmtSV0Z6YVc1bktHSmhZMnRKYmlrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZCYm5ScFkybHdZWFJsUldGemFXNW5JRDBnS0hCdmQyVnlLU0E5UGlCN1hHNGdJR052Ym5OMElHSmhZMnRGWVhOcGJtY2dQU0JqY21WaGRHVkNZV05yU1c0b2NHOTNaWElwTzF4dUlDQnlaWFIxY200Z0tIQXBJRDArSUNnb2NDQXFQU0F5S1NBOElERXBJRDhnTUM0MUlDb2dZbUZqYTBWaGMybHVaeWh3S1NBNklEQXVOU0FxSUNneUlDMGdUV0YwYUM1d2IzY29NaXdnTFRFd0lDb2dLSEFnTFNBeEtTa3BPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdGdWRHbGphWEJoZEdVZ1BTQmpjbVZoZEdWQmJuUnBZMmx3WVhSbFJXRnphVzVuS0VSRlJrRlZURlJmVDFaRlVsTklUMDlVWDFOVVVrVk9SMVJJS1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOMVltbGpRbVY2YVdWeUlEMGdLSGd4TENCNU1Td2dlRElzSUhreUtTQTlQaUI3WEc0Z0lHTnZibk4wSUhoQ1pYcHBaWElnUFNCaVpYcHBaWElvTUN3Z2VERXNJSGd5TENBeEtUdGNiaUFnWTI5dWMzUWdlVUpsZW1sbGNpQTlJR0psZW1sbGNpZ3dMQ0I1TVN3Z2VUSXNJREVwTzF4dVhHNGdJSEpsZEhWeWJpQW9kQ2tnUFQ0Z2VVSmxlbWxsY2loNFFtVjZhV1Z5S0hRcEtUdGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9lYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmJlemllciA9IGV4cG9ydHMuYmxlbmRDb2xvciA9IGV4cG9ydHMuYWxwaGEgPSBleHBvcnRzLmNvbG9yID0gZXhwb3J0cy5oc2xhID0gZXhwb3J0cy5yZ2JhID0gZXhwb3J0cy5yZ2JVbml0ID0gZXhwb3J0cy5weCA9IGV4cG9ydHMuZGVncmVlcyA9IGV4cG9ydHMucGVyY2VudCA9IGV4cG9ydHMudHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSBleHBvcnRzLnN0ZXBzID0gZXhwb3J0cy5zbW9vdGggPSBleHBvcnRzLndyYXAgPSBleHBvcnRzLm5vbmxpbmVhclNwcmluZyA9IGV4cG9ydHMuc3ByaW5nID0gZXhwb3J0cy5nZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gZXhwb3J0cy5tdWx0aXBseSA9IGV4cG9ydHMuZGl2aWRlID0gZXhwb3J0cy5hZGQgPSBleHBvcnRzLnN1YnRyYWN0ID0gZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGV4cG9ydHMuZmxvdyA9IGV4cG9ydHMuY29uZGl0aW9uYWwgPSBleHBvcnRzLmNsYW1wID0gZXhwb3J0cy5jbGFtcE1pbiA9IGV4cG9ydHMuY2xhbXBNYXggPSBleHBvcnRzLmFwcGVuZFVuaXQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4vY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3BhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIG5vb3AgPSBmdW5jdGlvbiAodikge1xuICByZXR1cm4gdjtcbn07XG5cbi8qKlxuICogQXBwZW5kIFVuaXRcbiAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGVuZFxuICogYXBwZW5kVW5pdCgncHgnLCAyMCkgLT4gJzIwcHgnXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVuaXQpXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBhcHBlbmRVbml0ID0gZXhwb3J0cy5hcHBlbmRVbml0ID0gZnVuY3Rpb24gKHVuaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuICcnICsgdiArIHVuaXQ7XG4gIH07XG59O1xuXG4vKipcbiAqIENsYW1wIHZhbHVlIGJldHdlZW5cbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVzdHJpY3QgYSBnaXZlbiB2YWx1ZSBiZXR3ZWVuIGBtaW5gIGFuZCBgbWF4YFxuICogQHBhcmFtICB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBjbGFtcE1heCA9IGV4cG9ydHMuY2xhbXBNYXggPSBmdW5jdGlvbiAobWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBNYXRoLm1pbih2LCBtYXgpO1xuICB9O1xufTtcbnZhciBjbGFtcE1pbiA9IGV4cG9ydHMuY2xhbXBNaW4gPSBmdW5jdGlvbiAobWluKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBNYXRoLm1heCh2LCBtaW4pO1xuICB9O1xufTtcbnZhciBjbGFtcCA9IGV4cG9ydHMuY2xhbXAgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgdmFyIF9taW4gPSBjbGFtcE1pbihtaW4pO1xuICB2YXIgX21heCA9IGNsYW1wTWF4KG1heCk7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBfbWluKF9tYXgodikpO1xuICB9O1xufTtcblxudmFyIGNvbmRpdGlvbmFsID0gZXhwb3J0cy5jb25kaXRpb25hbCA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGlmVHJ1ZSkge1xuICB2YXIgaWZGYWxzZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbm9vcDtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2LCBhY3Rpb24pIHtcbiAgICByZXR1cm4gY29uZGl0aW9uKHYsIGFjdGlvbikgPyBpZlRydWUodiwgYWN0aW9uKSA6IGlmRmFsc2UodiwgYWN0aW9uKTtcbiAgfTtcbn07XG5cbi8qKlxuICogRmxvd1xuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogZmxvdyhtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG52YXIgZmxvdyA9IGV4cG9ydHMuZmxvdyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRyYW5zZm9ybWVycyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHRyYW5zZm9ybWVyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhY2MpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHZhciB2ID0gYWNjO1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXS5hcHBseSh0cmFuc2Zvcm1lcnMsIFt2XS5jb25jYXQoYXJncykpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcblxuLyoqXG4gKiBJbnRlcnBvbGF0ZSBmcm9tIHNldCBvZiB2YWx1ZXMgdG8gYW5vdGhlclxuICogQHBhcmFtICB7QXJyYXl9IGlucHV0IGFycmF5XG4gKiBAcGFyYW0gIHtBcnJheX0gb3V0cHV0XG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gcmFuZ2VFYXNpbmdcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG52YXIgaW50ZXJwb2xhdGUgPSBleHBvcnRzLmludGVycG9sYXRlID0gZnVuY3Rpb24gKGlucHV0LCBvdXRwdXQsIHJhbmdlRWFzaW5nKSB7XG4gIHZhciByYW5nZUxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgdmFyIGZpbmFsSW5kZXggPSByYW5nZUxlbmd0aCAtIDE7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtaW5pbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2IDw9IGlucHV0WzBdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0WzBdO1xuICAgIH1cblxuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA+PSBpbnB1dFtmaW5hbEluZGV4XSkge1xuICAgICAgcmV0dXJuIG91dHB1dFtmaW5hbEluZGV4XTtcbiAgICB9XG5cbiAgICB2YXIgaSA9IDE7XG5cbiAgICAvLyBGaW5kIGluZGV4IG9mIHJhbmdlIHN0YXJ0XG4gICAgZm9yICg7IGkgPCByYW5nZUxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5wdXRbaV0gPiB2IHx8IGkgPT09IGZpbmFsSW5kZXgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByb2dyZXNzSW5SYW5nZSA9ICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoaW5wdXRbaSAtIDFdLCBpbnB1dFtpXSwgdik7XG4gICAgdmFyIGVhc2VkUHJvZ3Jlc3MgPSByYW5nZUVhc2luZyA/IHJhbmdlRWFzaW5nW2ldKHByb2dyZXNzSW5SYW5nZSkgOiBwcm9ncmVzc0luUmFuZ2U7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykob3V0cHV0W2kgLSAxXSwgb3V0cHV0W2ldLCBlYXNlZFByb2dyZXNzKTtcbiAgfTtcbn07XG5cbnZhciBzdWJ0cmFjdCA9IGV4cG9ydHMuc3VidHJhY3QgPSBmdW5jdGlvbiAob3JpZ2luKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2IC0gb3JpZ2luO1xuICB9O1xufTtcbnZhciBhZGQgPSBleHBvcnRzLmFkZCA9IGZ1bmN0aW9uIChvcmlnaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYgKyBvcmlnaW47XG4gIH07XG59O1xudmFyIGRpdmlkZSA9IGV4cG9ydHMuZGl2aWRlID0gZnVuY3Rpb24gKG9yaWdpbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdiAvIG9yaWdpbjtcbiAgfTtcbn07XG52YXIgbXVsdGlwbHkgPSBleHBvcnRzLm11bHRpcGx5ID0gZnVuY3Rpb24gKG9yaWdpbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdiAqIG9yaWdpbjtcbiAgfTtcbn07XG5cbnZhciBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gZXhwb3J0cy5nZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYWx0ZXJEaXNwbGFjZW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG5vb3A7XG4gIHJldHVybiBmdW5jdGlvbiAoY29uc3RhbnQsIG9yaWdpbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgdmFyIGRpc3BsYWNlbWVudCA9IG9yaWdpbiAtIHY7XG4gICAgICB2YXIgc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQgPSAtY29uc3RhbnQgKiAoMCAtIGFsdGVyRGlzcGxhY2VtZW50KE1hdGguYWJzKGRpc3BsYWNlbWVudCkpKTtcbiAgICAgIHJldHVybiBkaXNwbGFjZW1lbnQgPD0gMCA/IG9yaWdpbiArIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50IDogb3JpZ2luIC0gc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQ7XG4gICAgfTtcbiAgfTtcbn07XG5cbnZhciBzcHJpbmcgPSBleHBvcnRzLnNwcmluZyA9IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcoKTtcbnZhciBub25saW5lYXJTcHJpbmcgPSBleHBvcnRzLm5vbmxpbmVhclNwcmluZyA9IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcoTWF0aC5zcXJ0KTtcblxudmFyIHdyYXAgPSBleHBvcnRzLndyYXAgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHJhbmdlU2l6ZSA9IG1heCAtIG1pbjtcbiAgICByZXR1cm4gKCh2IC0gbWluKSAlIHJhbmdlU2l6ZSArIHJhbmdlU2l6ZSkgJSByYW5nZVNpemUgKyBtaW47XG4gIH07XG59O1xuXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdHJlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogNTA7XG5cbiAgdmFyIHByZXZpb3VzVmFsdWUgPSAwO1xuICB2YXIgaGFzU21vb3RoZWQgPSBmYWxzZTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgY3VycmVudFZhbHVlID0gaGFzU21vb3RoZWQgPyBwcmV2aW91c1ZhbHVlIDogdjtcbiAgICB2YXIgbmV3VmFsdWUgPSAoMCwgX2NhbGMuc21vb3RoKShjdXJyZW50VmFsdWUsIHByZXZpb3VzVmFsdWUsICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKSwgc3RyZW5ndGgpO1xuICAgIHByZXZpb3VzVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBoYXNTbW9vdGhlZCA9IHRydWU7XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xuICB9O1xufTtcblxudmFyIHN0ZXBzID0gZXhwb3J0cy5zdGVwcyA9IGZ1bmN0aW9uIChzdGVwcywgbWluLCBtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHByb2dyZXNzID0gKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShtaW4sIG1heCwgdik7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5zdGVwUHJvZ3Jlc3MpKHN0ZXBzLCBwcm9ncmVzcyk7XG4gIH07XG59O1xuXG52YXIgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSBleHBvcnRzLnRyYW5zZm9ybUNoaWxkVmFsdWVzID0gZnVuY3Rpb24gKGNoaWxkVHJhbnNmb3JtZXJzKSB7XG4gIHZhciBtdXRhYmxlU3RhdGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZm9yICh2YXIga2V5IGluIHYpIHtcbiAgICAgIHZhciBjaGlsZFRyYW5zZm9ybWVyID0gY2hpbGRUcmFuc2Zvcm1lcnNba2V5XTtcbiAgICAgIGlmIChjaGlsZFRyYW5zZm9ybWVyKSB7XG4gICAgICAgIG11dGFibGVTdGF0ZVtrZXldID0gY2hpbGRUcmFuc2Zvcm1lcih2W2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtdXRhYmxlU3RhdGU7XG4gIH07XG59O1xuXG4vLyBVbml0IHRyYW5zZm9ybWVyc1xudmFyIHBlcmNlbnQgPSBleHBvcnRzLnBlcmNlbnQgPSBhcHBlbmRVbml0KCclJyk7XG52YXIgZGVncmVlcyA9IGV4cG9ydHMuZGVncmVlcyA9IGFwcGVuZFVuaXQoJ2RlZycpO1xudmFyIHB4ID0gZXhwb3J0cy5weCA9IGFwcGVuZFVuaXQoJ3B4Jyk7XG5cbnZhciByZ2JVbml0ID0gZXhwb3J0cy5yZ2JVbml0ID0gZmxvdyhjbGFtcCgwLCAyNTUpLCBNYXRoLnJvdW5kKTtcblxudmFyIHJnYmFUZW1wbGF0ZSA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciByZWQgPSBfcmVmLnJlZCxcbiAgICAgIGdyZWVuID0gX3JlZi5ncmVlbixcbiAgICAgIGJsdWUgPSBfcmVmLmJsdWUsXG4gICAgICBfcmVmJGFscGhhID0gX3JlZi5hbHBoYSxcbiAgICAgIGFscGhhID0gX3JlZiRhbHBoYSA9PT0gdW5kZWZpbmVkID8gMSA6IF9yZWYkYWxwaGE7XG4gIHJldHVybiAncmdiYSgnICsgcmVkICsgJywgJyArIGdyZWVuICsgJywgJyArIGJsdWUgKyAnLCAnICsgYWxwaGEgKyAnKSc7XG59O1xuXG52YXIgcmdiYSA9IGV4cG9ydHMucmdiYSA9IGZsb3codHJhbnNmb3JtQ2hpbGRWYWx1ZXMoe1xuICByZWQ6IHJnYlVuaXQsXG4gIGdyZWVuOiByZ2JVbml0LFxuICBibHVlOiByZ2JVbml0LFxuICBhbHBoYTogYWxwaGFcbn0pLCByZ2JhVGVtcGxhdGUpO1xuXG52YXIgaHNsYVRlbXBsYXRlID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gIHZhciBodWUgPSBfcmVmMi5odWUsXG4gICAgICBzYXR1cmF0aW9uID0gX3JlZjIuc2F0dXJhdGlvbixcbiAgICAgIGxpZ2h0bmVzcyA9IF9yZWYyLmxpZ2h0bmVzcyxcbiAgICAgIF9yZWYyJGFscGhhID0gX3JlZjIuYWxwaGEsXG4gICAgICBhbHBoYSA9IF9yZWYyJGFscGhhID09PSB1bmRlZmluZWQgPyAxIDogX3JlZjIkYWxwaGE7XG4gIHJldHVybiAnaHNsYSgnICsgaHVlICsgJywgJyArIHNhdHVyYXRpb24gKyAnLCAnICsgbGlnaHRuZXNzICsgJywgJyArIGFscGhhICsgJyknO1xufTtcblxudmFyIGhzbGEgPSBleHBvcnRzLmhzbGEgPSBmbG93KHRyYW5zZm9ybUNoaWxkVmFsdWVzKHtcbiAgaHVlOiBwYXJzZUZsb2F0LFxuICBzYXR1cmF0aW9uOiBwZXJjZW50LFxuICBsaWdodG5lc3M6IHBlcmNlbnQsXG4gIGFscGhhOiBhbHBoYVxufSksIGhzbGFUZW1wbGF0ZSk7XG5cbnZhciBjb2xvciA9IGV4cG9ydHMuY29sb3IgPSBmdW5jdGlvbiAodikge1xuICBpZiAodi5oYXNPd25Qcm9wZXJ0eSgncmVkJykpIHtcbiAgICByZXR1cm4gcmdiYSh2KTtcbiAgfSBlbHNlIGlmICh2Lmhhc093blByb3BlcnR5KCdodWUnKSkge1xuICAgIHJldHVybiBoc2xhKHYpO1xuICB9XG4gIHJldHVybiB2O1xufTtcblxudmFyIGFscGhhID0gZXhwb3J0cy5hbHBoYSA9IGNsYW1wKDAsIDEpO1xuXG52YXIgYmxlbmQgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHYpIHtcbiAgdmFyIGZyb21FeHBvID0gZnJvbSAqIGZyb207XG4gIHZhciB0b0V4cG8gPSB0byAqIHRvO1xuICByZXR1cm4gTWF0aC5zcXJ0KHYgKiAodG9FeHBvIC0gZnJvbUV4cG8pICsgZnJvbUV4cG8pO1xufTtcbi8vIGh0dHA6Ly9jb2RlcGVuLmlvL29zdWJsYWtlL3Blbi94R1ZWYU5cbnZhciBibGVuZENvbG9yID0gZXhwb3J0cy5ibGVuZENvbG9yID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gIHZhciBmcm9tQ29sb3IgPSAoMCwgX3V0aWxzLmlzU3RyaW5nKShmcm9tKSA/ICgwLCBfcGFyc2Vycy5jb2xvcikoZnJvbSkgOiBmcm9tO1xuICB2YXIgdG9Db2xvciA9ICgwLCBfdXRpbHMuaXNTdHJpbmcpKHRvKSA/ICgwLCBfcGFyc2Vycy5jb2xvcikodG8pIDogdG87XG5cbiAgdmFyIGJsZW5kZWQgPSBfZXh0ZW5kcyh7fSwgZnJvbUNvbG9yKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gYmxlbmRlZCkge1xuICAgICAgYmxlbmRlZFtrZXldID0gYmxlbmQoZnJvbUNvbG9yW2tleV0sIHRvQ29sb3Jba2V5XSwgdik7XG4gICAgfVxuICAgIGJsZW5kZWQucmVkID0gYmxlbmQoZnJvbUNvbG9yLnJlZCwgdG9Db2xvci5yZWQsIHYpO1xuICAgIGJsZW5kZWQuZ3JlZW4gPSBibGVuZChmcm9tQ29sb3IuZ3JlZW4sIHRvQ29sb3IuZ3JlZW4sIHYpO1xuICAgIGJsZW5kZWQuYmx1ZSA9IGJsZW5kKGZyb21Db2xvci5ibHVlLCB0b0NvbG9yLmJsdWUsIHYpO1xuICAgIGJsZW5kZWQuYWxwaGEgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGZyb21Db2xvci5hbHBoYSwgdG9Db2xvci5hbHBoYSwgdik7XG4gICAgcmV0dXJuIGJsZW5kZWQ7XG4gIH07XG59O1xuXG4vLyBCZXppZXIgcmVzb2x2ZXJcbi8vIFJlZmFjdG9yZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vaHVnaHNrL2Jlemllci9ibG9iL21hc3Rlci9pbmRleC5qc1xuLyoqXG4jIyBUaGUgTUlUIExpY2Vuc2UgKE1JVCkgIyNcblxuQ29weXJpZ2h0IChjKSAyMDEzIEh1Z2ggS2VubmVkeVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG4gKi9cbnZhciByZXNvbHZlMyA9IGZ1bmN0aW9uIChwb2ludHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIHV0ID0gMSAtIHQ7XG4gICAgcmV0dXJuIChwb2ludHNbMF0gKiB1dCArIHBvaW50c1sxXSAqIHQpICogdXQgKyAocG9pbnRzWzFdICogdXQgKyBwb2ludHNbMl0gKiB0KSAqIHQ7XG4gIH07XG59O1xuXG52YXIgcmVzb2x2ZTQgPSBmdW5jdGlvbiAocG9pbnRzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgIHZhciB1dCA9IDEgLSB0O1xuICAgIHZhciBhMSA9IHBvaW50c1sxXSAqIHV0ICsgcG9pbnRzWzJdICogdDtcbiAgICByZXR1cm4gKChwb2ludHNbMF0gKiB1dCArIHBvaW50c1sxXSAqIHQpICogdXQgKyBhMSAqIHQpICogdXQgKyAoYTEgKiB1dCArIChwb2ludHNbMl0gKiB1dCArIHBvaW50c1szXSAqIHQpICogdCkgKiB0O1xuICB9O1xufTtcblxudmFyIGJlemllciA9IGV4cG9ydHMuYmV6aWVyID0gZnVuY3Rpb24gKHBvaW50cykge1xuICByZXR1cm4gcG9pbnRzLmxlbmd0aCA9PT0gMyA/IHJlc29sdmUzKHBvaW50cykgOiByZXNvbHZlNChwb2ludHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRISmhibk5tYjNKdFpYSnpMbXB6SWwwc0ltNWhiV1Z6SWpwYkltNXZiM0FpTENKMklpd2lZWEJ3Wlc1a1ZXNXBkQ0lzSW5WdWFYUWlMQ0pqYkdGdGNFMWhlQ0lzSW0xaGVDSXNJazFoZEdnaUxDSnRhVzRpTENKamJHRnRjRTFwYmlJc0ltTnNZVzF3SWl3aVgyMXBiaUlzSWw5dFlYZ2lMQ0pqYjI1a2FYUnBiMjVoYkNJc0ltTnZibVJwZEdsdmJpSXNJbWxtVkhKMVpTSXNJbWxtUm1Gc2MyVWlMQ0poWTNScGIyNGlMQ0ptYkc5M0lpd2lkSEpoYm5ObWIzSnRaWEp6SWl3aWJuVnRWSEpoYm5ObWIzSnRaWEp6SWl3aWJHVnVaM1JvSWl3aWFTSXNJbUZqWXlJc0ltRnlaM01pTENKcGJuUmxjbkJ2YkdGMFpTSXNJbWx1Y0hWMElpd2liM1YwY0hWMElpd2ljbUZ1WjJWRllYTnBibWNpTENKeVlXNW5aVXhsYm1kMGFDSXNJbVpwYm1Gc1NXNWtaWGdpTENKd2NtOW5jbVZ6YzBsdVVtRnVaMlVpTENKbFlYTmxaRkJ5YjJkeVpYTnpJaXdpYzNWaWRISmhZM1FpTENKdmNtbG5hVzRpTENKaFpHUWlMQ0prYVhacFpHVWlMQ0p0ZFd4MGFYQnNlU0lzSW1kbGJtVnlZWFJsVG05dVNXNTBaWEpuY21GMFpXUlRjSEpwYm1jaUxDSmhiSFJsY2tScGMzQnNZV05sYldWdWRDSXNJbU52Ym5OMFlXNTBJaXdpWkdsemNHeGhZMlZ0Wlc1MElpd2ljM0J5YVc1blRXOWthV1pwWldSRWFYTndiR0ZqWlcxbGJuUWlMQ0poWW5NaUxDSnpjSEpwYm1jaUxDSnViMjVzYVc1bFlYSlRjSEpwYm1jaUxDSnpjWEowSWl3aWQzSmhjQ0lzSW5KaGJtZGxVMmw2WlNJc0luTnRiMjkwYUNJc0luTjBjbVZ1WjNSb0lpd2ljSEpsZG1sdmRYTldZV3gxWlNJc0ltaGhjMU50YjI5MGFHVmtJaXdpWTNWeWNtVnVkRlpoYkhWbElpd2libVYzVm1Gc2RXVWlMQ0p6ZEdWd2N5SXNJbkJ5YjJkeVpYTnpJaXdpZEhKaGJuTm1iM0p0UTJocGJHUldZV3gxWlhNaUxDSmphR2xzWkZSeVlXNXpabTl5YldWeWN5SXNJbTExZEdGaWJHVlRkR0YwWlNJc0ltdGxlU0lzSW1Ob2FXeGtWSEpoYm5ObWIzSnRaWElpTENKd1pYSmpaVzUwSWl3aVpHVm5jbVZsY3lJc0luQjRJaXdpY21kaVZXNXBkQ0lzSW5KdmRXNWtJaXdpY21kaVlWUmxiWEJzWVhSbElpd2ljbVZrSWl3aVozSmxaVzRpTENKaWJIVmxJaXdpWVd4d2FHRWlMQ0p5WjJKaElpd2lhSE5zWVZSbGJYQnNZWFJsSWl3aWFIVmxJaXdpYzJGMGRYSmhkR2x2YmlJc0lteHBaMmgwYm1WemN5SXNJbWh6YkdFaUxDSndZWEp6WlVac2IyRjBJaXdpWTI5c2IzSWlMQ0pvWVhOUGQyNVFjbTl3WlhKMGVTSXNJbUpzWlc1a0lpd2labkp2YlNJc0luUnZJaXdpWm5KdmJVVjRjRzhpTENKMGIwVjRjRzhpTENKaWJHVnVaRU52Ykc5eUlpd2labkp2YlVOdmJHOXlJaXdpZEc5RGIyeHZjaUlzSW1Kc1pXNWtaV1FpTENKeVpYTnZiSFpsTXlJc0luQnZhVzUwY3lJc0luUWlMQ0oxZENJc0luSmxjMjlzZG1VMElpd2lZVEVpTENKaVpYcHBaWElpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN1FVRkJRVHM3UVVGRFFUczdRVUZEUVRzN1FVRkRRVHM3UVVGRlFTeEpRVUZOUVN4UFFVRlBMRlZCUVVORExFTkJRVVE3UVVGQlFTeFRRVUZQUVN4RFFVRlFPMEZCUVVFc1EwRkJZanM3UVVGRlFUczdPenM3T3p0QlFVOVBMRWxCUVUxRExHdERRVUZoTEZWQlFVTkRMRWxCUVVRN1FVRkJRU3hUUVVGVkxGVkJRVU5HTEVOQlFVUTdRVUZCUVN4blFrRkJWVUVzUTBGQlZpeEhRVUZqUlN4SlFVRmtPMEZCUVVFc1IwRkJWanRCUVVGQkxFTkJRVzVDT3p0QlFVVlFPenM3T3pzN08wRkJUMDhzU1VGQlRVTXNPRUpCUVZjc1ZVRkJRME1zUjBGQlJEdEJRVUZCTEZOQlFWTXNWVUZCUTBvc1EwRkJSRHRCUVVGQkxGZEJRVTlMTEV0QlFVdERMRWRCUVV3c1EwRkJVMDRzUTBGQlZDeEZRVUZaU1N4SFFVRmFMRU5CUVZBN1FVRkJRU3hIUVVGVU8wRkJRVUVzUTBGQmFrSTdRVUZEUVN4SlFVRk5SeXc0UWtGQlZ5eFZRVUZEUkN4SFFVRkVPMEZCUVVFc1UwRkJVeXhWUVVGRFRpeERRVUZFTzBGQlFVRXNWMEZCVDBzc1MwRkJTMFFzUjBGQlRDeERRVUZUU2l4RFFVRlVMRVZCUVZsTkxFZEJRVm9zUTBGQlVEdEJRVUZCTEVkQlFWUTdRVUZCUVN4RFFVRnFRanRCUVVOQkxFbEJRVTFGTEhkQ1FVRlJMRlZCUVVOR0xFZEJRVVFzUlVGQlRVWXNSMEZCVGl4RlFVRmpPMEZCUTJwRExFMUJRVTFMTEU5QlFVOUdMRk5CUVZORUxFZEJRVlFzUTBGQllqdEJRVU5CTEUxQlFVMUpMRTlCUVU5UUxGTkJRVk5ETEVkQlFWUXNRMEZCWWp0QlFVTkJMRk5CUVU4c1ZVRkJRMG9zUTBGQlJEdEJRVUZCTEZkQlFVOVRMRXRCUVV0RExFdEJRVXRXTEVOQlFVd3NRMEZCVEN4RFFVRlFPMEZCUVVFc1IwRkJVRHRCUVVORUxFTkJTazA3TzBGQlRVRXNTVUZCVFZjc2IwTkJRV01zVlVGQlEwTXNVMEZCUkN4RlFVRlpReXhOUVVGYU8wRkJRVUVzVFVGQmIwSkRMRTlCUVhCQ0xIVkZRVUU0UW1Zc1NVRkJPVUk3UVVGQlFTeFRRVUYxUXl4VlFVRkRReXhEUVVGRUxFVkJRVWxsTEUxQlFVb3NSVUZCWlR0QlFVTXZSU3hYUVVGUFNDeFZRVUZWV2l4RFFVRldMRVZCUVdGbExFMUJRV0lzU1VGQmRVSkdMRTlCUVU5aUxFTkJRVkFzUlVGQlZXVXNUVUZCVml4RFFVRjJRaXhIUVVFeVEwUXNVVUZCVVdRc1EwRkJVaXhGUVVGWFpTeE5RVUZZTEVOQlFXeEVPMEZCUTBRc1IwRkdNRUk3UVVGQlFTeERRVUZ3UWpzN1FVRkpVRHM3T3pzN096dEJRVTlQTEVsQlFVMURMSE5DUVVGUExGbEJRWEZDTzBGQlFVRXNiME5CUVdwQ1F5eFpRVUZwUWp0QlFVRnFRa0VzWjBKQlFXbENPMEZCUVVFN08wRkJRM1pETEUxQlFVMURMR3RDUVVGclFrUXNZVUZCWVVVc1RVRkJja003UVVGRFFTeE5RVUZKUXl4SlFVRkpMRU5CUVZJN08wRkJSVUVzVTBGQlR5eFZRVUZEUXl4SFFVRkVMRVZCUVd0Q08wRkJRVUVzZFVOQlFWUkRMRWxCUVZNN1FVRkJWRUVzVlVGQlV6dEJRVUZCT3p0QlFVTjJRaXhSUVVGSmRFSXNTVUZCU1hGQ0xFZEJRVkk3UVVGRFFTeFRRVUZMUkN4SlFVRkpMRU5CUVZRc1JVRkJXVUVzU1VGQlNVWXNaVUZCYUVJc1JVRkJhVU5GTEVkQlFXcERMRVZCUVhORE8wRkJRM0JEY0VJc1ZVRkJTV2xDTEdGQlFXRkhMRU5CUVdJc2RVSkJRV2RDY0VJc1EwRkJhRUlzVTBGQmMwSnpRaXhKUVVGMFFpeEZRVUZLTzBGQlEwUTdPMEZCUlVRc1YwRkJUM1JDTEVOQlFWQTdRVUZEUkN4SFFWQkVPMEZCVVVRc1EwRmFUVHM3UVVGalVEczdPenM3T3p0QlFVOVBMRWxCUVUxMVFpeHZRMEZCWXl4VlFVRkRReXhMUVVGRUxFVkJRVkZETEUxQlFWSXNSVUZCWjBKRExGZEJRV2hDTEVWQlFXZERPMEZCUTNwRUxFMUJRVTFETEdOQlFXTklMRTFCUVUxTUxFMUJRVEZDTzBGQlEwRXNUVUZCVFZNc1lVRkJZVVFzWTBGQll5eERRVUZxUXpzN1FVRkZRU3hUUVVGUExGVkJRVU16UWl4RFFVRkVMRVZCUVU4N1FVRkRXanRCUVVOQkxGRkJRVWxCTEV0QlFVdDNRaXhOUVVGTkxFTkJRVTRzUTBGQlZDeEZRVUZ0UWp0QlFVTnFRaXhoUVVGUFF5eFBRVUZQTEVOQlFWQXNRMEZCVUR0QlFVTkVPenRCUVVWRU8wRkJRMEVzVVVGQlNYcENMRXRCUVV0M1FpeE5RVUZOU1N4VlFVRk9MRU5CUVZRc1JVRkJORUk3UVVGRE1VSXNZVUZCVDBnc1QwRkJUMGNzVlVGQlVDeERRVUZRTzBGQlEwUTdPMEZCUlVRc1VVRkJTVklzU1VGQlNTeERRVUZTT3p0QlFVVkJPMEZCUTBFc1YwRkJUMEVzU1VGQlNVOHNWMEZCV0N4RlFVRjNRbEFzUjBGQmVFSXNSVUZCTmtJN1FVRkRNMElzVlVGQlNVa3NUVUZCVFVvc1EwRkJUaXhKUVVGWGNFSXNRMEZCV0N4SlFVRm5RbTlDTEUxQlFVMVJMRlZCUVRGQ0xFVkJRWE5ETzBGQlEzQkRPMEZCUTBRN1FVRkRSanM3UVVGRlJDeFJRVUZOUXl4clFrRkJhMElzWjBOQlFYRkNUQ3hOUVVGTlNpeEpRVUZKTEVOQlFWWXNRMEZCY2tJc1JVRkJiVU5KTEUxQlFVMUtMRU5CUVU0c1EwRkJia01zUlVGQk5rTndRaXhEUVVFM1F5eERRVUY0UWp0QlFVTkJMRkZCUVUwNFFpeG5Ra0ZCYVVKS0xGZEJRVVFzUjBGQlowSkJMRmxCUVZsT0xFTkJRVm9zUlVGQlpWTXNaVUZCWml4RFFVRm9RaXhIUVVGclJFRXNaVUZCZUVVN1FVRkRRU3hYUVVGUExHZERRVUZ4UWtvc1QwRkJUMHdzU1VGQlNTeERRVUZZTEVOQlFYSkNMRVZCUVc5RFN5eFBRVUZQVEN4RFFVRlFMRU5CUVhCRExFVkJRU3REVlN4aFFVRXZReXhEUVVGUU8wRkJRMFFzUjBGMlFrUTdRVUYzUWtRc1EwRTFRazA3TzBGQk9FSkJMRWxCUVUxRExEaENRVUZYTEZWQlFVTkRMRTFCUVVRN1FVRkJRU3hUUVVGWkxGVkJRVU5vUXl4RFFVRkVPMEZCUVVFc1YwRkJUMEVzU1VGQlNXZERMRTFCUVZnN1FVRkJRU3hIUVVGYU8wRkJRVUVzUTBGQmFrSTdRVUZEUVN4SlFVRk5ReXh2UWtGQlRTeFZRVUZEUkN4TlFVRkVPMEZCUVVFc1UwRkJXU3hWUVVGRGFFTXNRMEZCUkR0QlFVRkJMRmRCUVU5QkxFbEJRVWxuUXl4TlFVRllPMEZCUVVFc1IwRkJXanRCUVVGQkxFTkJRVm83UVVGRFFTeEpRVUZOUlN3d1FrRkJVeXhWUVVGRFJpeE5RVUZFTzBGQlFVRXNVMEZCV1N4VlFVRkRhRU1zUTBGQlJEdEJRVUZCTEZkQlFVOUJMRWxCUVVsblF5eE5RVUZZTzBGQlFVRXNSMEZCV2p0QlFVRkJMRU5CUVdZN1FVRkRRU3hKUVVGTlJ5dzRRa0ZCVnl4VlFVRkRTQ3hOUVVGRU8wRkJRVUVzVTBGQldTeFZRVUZEYUVNc1EwRkJSRHRCUVVGQkxGZEJRVTlCTEVsQlFVbG5ReXhOUVVGWU8wRkJRVUVzUjBGQldqdEJRVUZCTEVOQlFXcENPenRCUVVWQkxFbEJRVTFKTEhORlFVRXJRanRCUVVGQkxFMUJRVU5ETEdsQ1FVRkVMSFZGUVVGeFFuUkRMRWxCUVhKQ08wRkJRVUVzVTBGQk9FSXNWVUZCUTNWRExGRkJRVVFzUlVGQlYwNHNUVUZCV0R0QlFVRkJMRmRCUVhOQ0xGVkJRVU5vUXl4RFFVRkVMRVZCUVU4N1FVRkRja2NzVlVGQlRYVkRMR1ZCUVdWUUxGTkJRVk5vUXl4RFFVRTVRanRCUVVOQkxGVkJRVTEzUXl3MlFrRkJOa0lzUTBGQlJVWXNVVUZCUml4SlFVRmpMRWxCUVVsRUxHdENRVUZyUW1oRExFdEJRVXR2UXl4SFFVRk1MRU5CUVZOR0xGbEJRVlFzUTBGQmJFSXNRMEZCYkVJc1EwRkJia003UVVGRFFTeGhRVUZSUVN4blFrRkJaMElzUTBGQmFrSXNSMEZCYzBKUUxGTkJRVk5STERCQ1FVRXZRaXhIUVVFMFJGSXNVMEZCVTFFc01FSkJRVFZGTzBGQlEwUXNTMEZLZVVVN1FVRkJRU3hIUVVFNVFqdEJRVUZCTEVOQlFYSkRPenRCUVUxQkxFbEJRVTFGTERCQ1FVRlRUaXc0UWtGQlpqdEJRVU5CTEVsQlFVMVBMRFJEUVVGclFsQXNOa0pCUVRaQ0wwSXNTMEZCUzNWRExFbEJRV3hETEVOQlFYaENPenRCUVVWQkxFbEJRVTFETEhOQ1FVRlBMRlZCUVVOMlF5eEhRVUZFTEVWQlFVMUdMRWRCUVU0N1FVRkJRU3hUUVVGakxGVkJRVU5LTEVOQlFVUXNSVUZCVHp0QlFVTjJReXhSUVVGTk9FTXNXVUZCV1RGRExFMUJRVTFGTEVkQlFYaENPMEZCUTBFc1YwRkJUeXhEUVVGRExFTkJRVU5PTEVsQlFVbE5MRWRCUVV3c1NVRkJXWGRETEZOQlFWb3NSMEZCZDBKQkxGTkJRWHBDTEVsQlFYTkRRU3hUUVVGMFF5eEhRVUZyUkhoRExFZEJRWHBFTzBGQlEwUXNSMEZJYlVJN1FVRkJRU3hEUVVGaU96dEJRVXRCTEVsQlFVMTVReXd3UWtGQlV5eFpRVUZ0UWp0QlFVRkJMRTFCUVd4Q1F5eFJRVUZyUWl4MVJVRkJVQ3hGUVVGUE96dEJRVU4yUXl4TlFVRkpReXhuUWtGQlowSXNRMEZCY0VJN1FVRkRRU3hOUVVGSlF5eGpRVUZqTEV0QlFXeENPenRCUVVWQkxGTkJRVThzVlVGQlEyeEVMRU5CUVVRc1JVRkJUenRCUVVOYUxGRkJRVTF0UkN4bFFVRm5Ra1FzVjBGQlJDeEhRVUZuUWtRc1lVRkJhRUlzUjBGQlowTnFSQ3hEUVVGeVJEdEJRVU5CTEZGQlFVMXZSQ3hYUVVGWExHdENRVUZqUkN4WlFVRmtMRVZCUVRSQ1JpeGhRVUUxUWl4RlFVRXlReXh2UTBGQk0wTXNSVUZCYVVWRUxGRkJRV3BGTEVOQlFXcENPMEZCUTBGRExHOUNRVUZuUWtjc1VVRkJhRUk3UVVGRFFVWXNhMEpCUVdNc1NVRkJaRHRCUVVOQkxGZEJRVTlGTEZGQlFWQTdRVUZEUkN4SFFVNUVPMEZCVDBRc1EwRllUVHM3UVVGaFFTeEpRVUZOUXl4M1FrRkJVU3hWUVVGRFFTeExRVUZFTEVWQlFWRXZReXhIUVVGU0xFVkJRV0ZHTEVkQlFXSTdRVUZCUVN4VFFVRnhRaXhWUVVGRFNpeERRVUZFTEVWQlFVODdRVUZETDBNc1VVRkJUWE5FTEZkQlFWY3NaME5CUVhGQ2FFUXNSMEZCY2tJc1JVRkJNRUpHTEVkQlFURkNMRVZCUVN0Q1NpeERRVUV2UWl4RFFVRnFRanRCUVVOQkxGZEJRVThzZDBKQlFXRnhSQ3hMUVVGaUxFVkJRVzlDUXl4UlFVRndRaXhEUVVGUU8wRkJRMFFzUjBGSWIwSTdRVUZCUVN4RFFVRmtPenRCUVV0QkxFbEJRVTFETEhORVFVRjFRaXhWUVVGRFF5eHBRa0ZCUkN4RlFVRjFRanRCUVVONlJDeE5RVUZOUXl4bFFVRmxMRVZCUVhKQ08wRkJRMEVzVTBGQlR5eFZRVUZEZWtRc1EwRkJSQ3hGUVVGUE8wRkJRMW9zVTBGQlN5eEpRVUZKTUVRc1IwRkJWQ3hKUVVGblFqRkVMRU5CUVdoQ0xFVkJRVzFDTzBGQlEycENMRlZCUVUweVJDeHRRa0ZCYlVKSUxHdENRVUZyUWtVc1IwRkJiRUlzUTBGQmVrSTdRVUZEUVN4VlFVRkpReXhuUWtGQlNpeEZRVUZ6UWp0QlFVTndRa1lzY1VKQlFXRkRMRWRCUVdJc1NVRkJiMEpETEdsQ1FVRnBRak5FTEVWQlFVVXdSQ3hIUVVGR0xFTkJRV3BDTEVOQlFYQkNPMEZCUTBRN1FVRkRSanM3UVVGRlJDeFhRVUZQUkN4WlFVRlFPMEZCUTBRc1IwRlVSRHRCUVZWRUxFTkJXazA3TzBGQlkxQTdRVUZEVHl4SlFVRk5SeXcwUWtGQlZUTkVMRmRCUVZjc1IwRkJXQ3hEUVVGb1FqdEJRVU5CTEVsQlFVMDBSQ3cwUWtGQlZUVkVMRmRCUVZjc1MwRkJXQ3hEUVVGb1FqdEJRVU5CTEVsQlFVMDJSQ3hyUWtGQlN6ZEVMRmRCUVZjc1NVRkJXQ3hEUVVGWU96dEJRVVZCTEVsQlFVMDRSQ3cwUWtGQlZTOURMRXRCUTNKQ1VpeE5RVUZOTEVOQlFVNHNSVUZCVXl4SFFVRlVMRU5CUkhGQ0xFVkJSWEpDU0N4TFFVRkxNa1FzUzBGR1owSXNRMEZCYUVJN08wRkJTMUFzU1VGQlRVTXNaVUZCWlR0QlFVRkJMRTFCUVVkRExFZEJRVWdzVVVGQlIwRXNSMEZCU0R0QlFVRkJMRTFCUVZGRExFdEJRVklzVVVGQlVVRXNTMEZCVWp0QlFVRkJMRTFCUVdWRExFbEJRV1lzVVVGQlpVRXNTVUZCWmp0QlFVRkJMSGRDUVVGeFFrTXNTMEZCY2tJN1FVRkJRU3hOUVVGeFFrRXNTMEZCY2tJc09FSkJRVFpDTEVOQlFUZENPMEZCUVVFc2JVSkJRMWhJTEVkQlJGY3NWVUZEU0VNc1MwRkVSeXhWUVVOUFF5eEpRVVJRTEZWQlEyZENReXhMUVVSb1FqdEJRVUZCTEVOQlFYSkNPenRCUVVkUExFbEJRVTFETEhOQ1FVRlBkRVFzUzBGRGJFSjFReXh4UWtGQmNVSTdRVUZEYmtKWExFOUJRVXRJTEU5QlJHTTdRVUZGYmtKSkxGTkJRVTlLTEU5QlJsazdRVUZIYmtKTExGRkJRVTFNTEU5QlNHRTdRVUZKYmtKTk8wRkJTbTFDTEVOQlFYSkNMRU5CUkd0Q0xFVkJUMnhDU2l4WlFWQnJRaXhEUVVGaU96dEJRVlZRTEVsQlFVMU5MR1ZCUVdVN1FVRkJRU3hOUVVGSFF5eEhRVUZJTEZOQlFVZEJMRWRCUVVnN1FVRkJRU3hOUVVGUlF5eFZRVUZTTEZOQlFWRkJMRlZCUVZJN1FVRkJRU3hOUVVGdlFrTXNVMEZCY0VJc1UwRkJiMEpCTEZOQlFYQkNPMEZCUVVFc01FSkJRU3RDVEN4TFFVRXZRanRCUVVGQkxFMUJRU3RDUVN4TFFVRXZRaXdyUWtGQmRVTXNRMEZCZGtNN1FVRkJRU3h0UWtGRFdFY3NSMEZFVnl4VlFVTklReXhWUVVSSExGVkJRMWxETEZOQlJGb3NWVUZETUVKTUxFdEJSREZDTzBGQlFVRXNRMEZCY2tJN08wRkJSMDhzU1VGQlRVMHNjMEpCUVU4elJDeExRVU5zUW5WRExIRkNRVUZ4UWp0QlFVTnVRbWxDTEU5QlFVdEpMRlZCUkdNN1FVRkZia0pJTEdOQlFWbGlMRTlCUms4N1FVRkhia0pqTEdGQlFWZGtMRTlCU0ZFN1FVRkpia0pUTzBGQlNtMUNMRU5CUVhKQ0xFTkJSR3RDTEVWQlQyeENSU3haUVZCclFpeERRVUZpT3p0QlFWVkJMRWxCUVUxTkxIZENRVUZSTEZWQlFVTTNSU3hEUVVGRUxFVkJRVTg3UVVGRE1VSXNUVUZCU1VFc1JVRkJSVGhGTEdOQlFVWXNRMEZCYVVJc1MwRkJha0lzUTBGQlNpeEZRVUUyUWp0QlFVTXpRaXhYUVVGUFVpeExRVUZMZEVVc1EwRkJUQ3hEUVVGUU8wRkJRMFFzUjBGR1JDeE5RVVZQTEVsQlFVbEJMRVZCUVVVNFJTeGpRVUZHTEVOQlFXbENMRXRCUVdwQ0xFTkJRVW9zUlVGQk5rSTdRVUZEYkVNc1YwRkJUMGdzUzBGQlN6TkZMRU5CUVV3c1EwRkJVRHRCUVVORU8wRkJRMFFzVTBGQlQwRXNRMEZCVUR0QlFVTkVMRU5CVUUwN08wRkJVMEVzU1VGQlRYRkZMSGRDUVVGUk4wUXNUVUZCVFN4RFFVRk9MRVZCUVZNc1EwRkJWQ3hEUVVGa096dEJRVVZRTEVsQlFVMTFSU3hSUVVGUkxGVkJRVU5ETEVsQlFVUXNSVUZCVDBNc1JVRkJVQ3hGUVVGWGFrWXNRMEZCV0N4RlFVRnBRanRCUVVNM1FpeE5RVUZOYTBZc1YwRkJWMFlzVDBGQlQwRXNTVUZCZUVJN1FVRkRRU3hOUVVGTlJ5eFRRVUZUUml4TFFVRkxRU3hGUVVGd1FqdEJRVU5CTEZOQlFVODFSU3hMUVVGTGRVTXNTVUZCVEN4RFFVRlZOVU1zUzBGQlMyMUdMRk5CUVZORUxGRkJRV1FzU1VGQk1FSkJMRkZCUVhCRExFTkJRVkE3UVVGRFJDeERRVXBFTzBGQlMwRTdRVUZEVHl4SlFVRk5SU3hyUTBGQllTeFZRVUZEU2l4SlFVRkVMRVZCUVU5RExFVkJRVkFzUlVGQll6dEJRVU4wUXl4TlFVRk5TU3haUVVGWkxIRkNRVUZUVEN4SlFVRlVMRWxCUVdsQ0xHOUNRVUZYUVN4SlFVRllMRU5CUVdwQ0xFZEJRVzlEUVN4SlFVRjBSRHRCUVVOQkxFMUJRVTFOTEZWQlFWVXNjVUpCUVZOTUxFVkJRVlFzU1VGQlpTeHZRa0ZCVjBFc1JVRkJXQ3hEUVVGbUxFZEJRU3RDUVN4RlFVRXZRenM3UVVGRlFTeE5RVUZOVFN4MVFrRkJaVVlzVTBGQlppeERRVUZPT3p0QlFVVkJMRk5CUVU4c1ZVRkJRM0pHTEVOQlFVUXNSVUZCVHp0QlFVTmFMRk5CUVVzc1NVRkJTVEJFTEVkQlFWUXNTVUZCWjBJMlFpeFBRVUZvUWl4RlFVRjVRanRCUVVOMlFrRXNZMEZCVVRkQ0xFZEJRVklzU1VGQlpYRkNMRTFCUVUxTkxGVkJRVlV6UWl4SFFVRldMRU5CUVU0c1JVRkJjMEkwUWl4UlFVRlJOVUlzUjBGQlVpeERRVUYwUWl4RlFVRnZRekZFTEVOQlFYQkRMRU5CUVdZN1FVRkRSRHRCUVVORWRVWXNXVUZCVVhKQ0xFZEJRVklzUjBGQlkyRXNUVUZCVFUwc1ZVRkJWVzVDTEVkQlFXaENMRVZCUVhGQ2IwSXNVVUZCVVhCQ0xFZEJRVGRDTEVWQlFXdERiRVVzUTBGQmJFTXNRMEZCWkR0QlFVTkJkVVlzV1VGQlVYQkNMRXRCUVZJc1IwRkJaMEpaTEUxQlFVMU5MRlZCUVZWc1FpeExRVUZvUWl4RlFVRjFRbTFDTEZGQlFWRnVRaXhMUVVFdlFpeEZRVUZ6UTI1RkxFTkJRWFJETEVOQlFXaENPMEZCUTBGMVJpeFpRVUZSYmtJc1NVRkJVaXhIUVVGbFZ5eE5RVUZOVFN4VlFVRlZha0lzU1VGQmFFSXNSVUZCYzBKclFpeFJRVUZSYkVJc1NVRkJPVUlzUlVGQmIwTndSU3hEUVVGd1F5eERRVUZtTzBGQlEwRjFSaXhaUVVGUmJFSXNTMEZCVWl4SFFVRm5RaXhuUTBGQmNVSm5RaXhWUVVGVmFFSXNTMEZCTDBJc1JVRkJjME5wUWl4UlFVRlJha0lzUzBGQk9VTXNSVUZCY1VSeVJTeERRVUZ5UkN4RFFVRm9RanRCUVVOQkxGZEJRVTkxUml4UFFVRlFPMEZCUTBRc1IwRlVSRHRCUVZWRUxFTkJhRUpOT3p0QlFXdENVRHRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJkVUpCTEVsQlFVMURMRmRCUVZjc1ZVRkJRME1zVFVGQlJEdEJRVUZCTEZOQlFWa3NWVUZCUTBNc1EwRkJSQ3hGUVVGUE8wRkJRMnhETEZGQlFVMURMRXRCUVVzc1NVRkJTVVFzUTBGQlpqdEJRVU5CTEZkQlFVOHNRMEZCUTBRc1QwRkJUeXhEUVVGUUxFbEJRVmxGTEVWQlFWb3NSMEZCYVVKR0xFOUJRVThzUTBGQlVDeEpRVUZaUXl4RFFVRTVRaXhKUVVGdFEwTXNSVUZCYmtNc1IwRkJkME1zUTBGQlEwWXNUMEZCVHl4RFFVRlFMRWxCUVZsRkxFVkJRVm9zUjBGQmFVSkdMRTlCUVU4c1EwRkJVQ3hKUVVGWlF5eERRVUU1UWl4SlFVRnRRMEVzUTBGQmJFWTdRVUZEUkN4SFFVaG5RanRCUVVGQkxFTkJRV3BDT3p0QlFVdEJMRWxCUVUxRkxGZEJRVmNzVlVGQlEwZ3NUVUZCUkR0QlFVRkJMRk5CUVZrc1ZVRkJRME1zUTBGQlJDeEZRVUZQTzBGQlEyeERMRkZCUVUxRExFdEJRVXNzU1VGQlNVUXNRMEZCWmp0QlFVTkJMRkZCUVUxSExFdEJRVXRLTEU5QlFVOHNRMEZCVUN4SlFVRlpSU3hGUVVGYUxFZEJRV2xDUml4UFFVRlBMRU5CUVZBc1NVRkJXVU1zUTBGQmVFTTdRVUZEUVN4WFFVRlBMRU5CUVVNc1EwRkJRMFFzVDBGQlR5eERRVUZRTEVsQlFWbEZMRVZCUVZvc1IwRkJhVUpHTEU5QlFVOHNRMEZCVUN4SlFVRlpReXhEUVVFNVFpeEpRVUZ0UTBNc1JVRkJia01zUjBGQmQwTkZMRXRCUVV0SUxFTkJRVGxETEVsQlFXMUVReXhGUVVGdVJDeEhRVUYzUkN4RFFVRkRSU3hMUVVGTFJpeEZRVUZNTEVkQlFWVXNRMEZCUTBZc1QwRkJUeXhEUVVGUUxFbEJRVmxGTEVWQlFWb3NSMEZCYVVKR0xFOUJRVThzUTBGQlVDeEpRVUZaUXl4RFFVRTVRaXhKUVVGdFEwRXNRMEZCT1VNc1NVRkJiVVJCTEVOQlFXeElPMEZCUTBRc1IwRktaMEk3UVVGQlFTeERRVUZxUWpzN1FVRk5UeXhKUVVGTlNTd3dRa0ZCVXl4VlFVRkRUQ3hOUVVGRU8wRkJRVUVzVTBGRGJrSkJMRTlCUVU5MFJTeE5RVUZRTEV0QlFXdENMRU5CUVc1Q0xFZEJRWGRDY1VVc1UwRkJVME1zVFVGQlZDeERRVUY0UWl4SFFVRXlRMGNzVTBGQlUwZ3NUVUZCVkN4RFFVUjJRanRCUVVGQkxFTkJRV1lpTENKbWFXeGxJam9pZEhKaGJuTm1iM0p0WlhKekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYSnpMbWhoYkd3dlVISnZhbVZqZEhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2daMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VzSUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOekxDQnpkR1Z3VUhKdlozSmxjM01zSUhOdGIyOTBhQ0JoY3lCallXeGpVMjF2YjNSb2FXNW5JSDBnWm5KdmJTQW5MaTlqWVd4akp6dGNibWx0Y0c5eWRDQjdJR2x6VTNSeWFXNW5JSDBnWm5KdmJTQW5MaTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdleUJqYjJ4dmNpQmhjeUJ3WVhKelpVTnZiRzl5SUgwZ1puSnZiU0FuTGk5d1lYSnpaWEp6Snp0Y2JtbHRjRzl5ZENCN0lIUnBiV1ZUYVc1alpVeGhjM1JHY21GdFpTQjlJR1p5YjIwZ0p5NHVMMlp5WVcxbGMzbHVZeWM3WEc1Y2JtTnZibk4wSUc1dmIzQWdQU0FvZGlrZ1BUNGdkanRjYmx4dUx5b3FYRzRnS2lCQmNIQmxibVFnVlc1cGRGeHVJQ29nUVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z1lYQndaVzVrWEc0Z0tpQmhjSEJsYm1SVmJtbDBLQ2R3ZUNjc0lESXdLU0F0UGlBbk1qQndlQ2RjYmlBcUlFQndZWEpoYlNBZ2UzTjBjbWx1WjMwZ2RXNXBkQ2xjYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24xY2JpQXFMMXh1Wlhod2IzSjBJR052Ym5OMElHRndjR1Z1WkZWdWFYUWdQU0FvZFc1cGRDa2dQVDRnS0hZcElEMCtJR0FrZTNaOUpIdDFibWwwZldBN1hHNWNiaThxS2x4dUlDb2dRMnhoYlhBZ2RtRnNkV1VnWW1WMGQyVmxibHh1SUNvZ1EzSmxZWFJsY3lCaElHWjFibU4wYVc5dUlIUm9ZWFFnZDJsc2JDQnlaWE4wY21samRDQmhJR2RwZG1WdUlIWmhiSFZsSUdKbGRIZGxaVzRnWUcxcGJtQWdZVzVrSUdCdFlYaGdYRzRnS2lCQWNHRnlZVzBnSUh0dWRXMWlaWEo5SUcxcGJseHVJQ29nUUhCaGNtRnRJQ0I3Ym5WdFltVnlmU0J0WVhoY2JpQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMWNiaUFxTDF4dVpYaHdiM0owSUdOdmJuTjBJR05zWVcxd1RXRjRJRDBnS0cxaGVDa2dQVDRnS0hZcElEMCtJRTFoZEdndWJXbHVLSFlzSUcxaGVDazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyeGhiWEJOYVc0Z1BTQW9iV2x1S1NBOVBpQW9kaWtnUFQ0Z1RXRjBhQzV0WVhnb2Rpd2diV2x1S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYkdGdGNDQTlJQ2h0YVc0c0lHMWhlQ2tnUFQ0Z2UxeHVJQ0JqYjI1emRDQmZiV2x1SUQwZ1kyeGhiWEJOYVc0b2JXbHVLVHRjYmlBZ1kyOXVjM1FnWDIxaGVDQTlJR05zWVcxd1RXRjRLRzFoZUNrN1hHNGdJSEpsZEhWeWJpQW9kaWtnUFQ0Z1gyMXBiaWhmYldGNEtIWXBLVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamIyNWthWFJwYjI1aGJDQTlJQ2hqYjI1a2FYUnBiMjRzSUdsbVZISjFaU3dnYVdaR1lXeHpaU0E5SUc1dmIzQXBJRDArSUNoMkxDQmhZM1JwYjI0cElEMCtJSHRjYmlBZ2NtVjBkWEp1SUdOdmJtUnBkR2x2YmloMkxDQmhZM1JwYjI0cElEOGdhV1pVY25WbEtIWXNJR0ZqZEdsdmJpa2dPaUJwWmtaaGJITmxLSFlzSUdGamRHbHZiaWs3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRVpzYjNkY2JpQXFJRU52YlhCdmMyVWdiM1JvWlhJZ2RISmhibk5tYjNKdFpYSnpJSFJ2SUhKMWJpQnNhVzVsWVhKcGJIbGNiaUFxSUdac2IzY29iV2x1S0RJd0tTd2diV0Y0S0RRd0tTbGNiaUFxSUVCd1lYSmhiU0FnZXk0dUxtWjFibU4wYVc5dWMzMGdkSEpoYm5ObWIzSnRaWEp6WEc0Z0tpQkFjbVYwZFhKdUlIdG1kVzVqZEdsdmJuMWNiaUFxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1pzYjNjZ1BTQW9MaTR1ZEhKaGJuTm1iM0p0WlhKektTQTlQaUI3WEc0Z0lHTnZibk4wSUc1MWJWUnlZVzV6Wm05eWJXVnljeUE5SUhSeVlXNXpabTl5YldWeWN5NXNaVzVuZEdnN1hHNGdJR3hsZENCcElEMGdNRHRjYmx4dUlDQnlaWFIxY200Z0tHRmpZeXdnTGk0dVlYSm5jeWtnUFQ0Z2UxeHVJQ0FnSUd4bGRDQjJJRDBnWVdOak8xeHVJQ0FnSUdadmNpQW9hU0E5SURBN0lHa2dQQ0J1ZFcxVWNtRnVjMlp2Y20xbGNuTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2RpQTlJSFJ5WVc1elptOXliV1Z5YzF0cFhTaDJMQ0F1TGk1aGNtZHpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RqdGNiaUFnZlR0Y2JuMDdYRzVjYmk4cUtseHVJQ29nU1c1MFpYSndiMnhoZEdVZ1puSnZiU0J6WlhRZ2IyWWdkbUZzZFdWeklIUnZJR0Z1YjNSb1pYSmNiaUFxSUVCd1lYSmhiU0FnZTBGeWNtRjVmU0JwYm5CMWRDQmhjbkpoZVZ4dUlDb2dRSEJoY21GdElDQjdRWEp5WVhsOUlHOTFkSEIxZEZ4dUlDb2dRSEJoY21GdElDQjdSblZ1WTNScGIyNTlJSEpoYm1kbFJXRnphVzVuWEc0Z0tpQkFjbVYwZFhKdUlIdEdkVzVqZEdsdmJuMWNiaUFxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x1ZEdWeWNHOXNZWFJsSUQwZ0tHbHVjSFYwTENCdmRYUndkWFFzSUhKaGJtZGxSV0Z6YVc1bktTQTlQaUI3WEc0Z0lHTnZibk4wSUhKaGJtZGxUR1Z1WjNSb0lEMGdhVzV3ZFhRdWJHVnVaM1JvTzF4dUlDQmpiMjV6ZENCbWFXNWhiRWx1WkdWNElEMGdjbUZ1WjJWTVpXNW5kR2dnTFNBeE8xeHVYRzRnSUhKbGRIVnliaUFvZGlrZ1BUNGdlMXh1SUNBZ0lDOHZJRWxtSUhaaGJIVmxJRzkxZEhOcFpHVWdiV2x1YVcxMWJTQnlZVzVuWlN3Z2NYVnBZMnRzZVNCeVpYUjFjbTVjYmlBZ0lDQnBaaUFvZGlBOFBTQnBibkIxZEZzd1hTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHOTFkSEIxZEZzd1hUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QkpaaUIyWVd4MVpTQnZkWFJ6YVdSbElHMWhlR2x0ZFcwZ2NtRnVaMlVzSUhGMWFXTnJiSGtnY21WMGRYSnVYRzRnSUNBZ2FXWWdLSFlnUGowZ2FXNXdkWFJiWm1sdVlXeEpibVJsZUYwcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCdmRYUndkWFJiWm1sdVlXeEpibVJsZUYwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYkdWMElHa2dQU0F4TzF4dVhHNGdJQ0FnTHk4Z1JtbHVaQ0JwYm1SbGVDQnZaaUJ5WVc1blpTQnpkR0Z5ZEZ4dUlDQWdJR1p2Y2lBb095QnBJRHdnY21GdVoyVk1aVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnYVdZZ0tHbHVjSFYwVzJsZElENGdkaUI4ZkNCcElEMDlQU0JtYVc1aGJFbHVaR1Y0S1NCN1hHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR052Ym5OMElIQnliMmR5WlhOelNXNVNZVzVuWlNBOUlHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLR2x1Y0hWMFcya2dMU0F4WFN3Z2FXNXdkWFJiYVYwc0lIWXBPMXh1SUNBZ0lHTnZibk4wSUdWaGMyVmtVSEp2WjNKbGMzTWdQU0FvY21GdVoyVkZZWE5wYm1jcElEOGdjbUZ1WjJWRllYTnBibWRiYVYwb2NISnZaM0psYzNOSmJsSmhibWRsS1NBNklIQnliMmR5WlhOelNXNVNZVzVuWlR0Y2JpQWdJQ0J5WlhSMWNtNGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vYjNWMGNIVjBXMmtnTFNBeFhTd2diM1YwY0hWMFcybGRMQ0JsWVhObFpGQnliMmR5WlhOektUdGNiaUFnZlR0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnpkV0owY21GamRDQTlJQ2h2Y21sbmFXNHBJRDArSUNoMktTQTlQaUIySUMwZ2IzSnBaMmx1TzF4dVpYaHdiM0owSUdOdmJuTjBJR0ZrWkNBOUlDaHZjbWxuYVc0cElEMCtJQ2gyS1NBOVBpQjJJQ3NnYjNKcFoybHVPMXh1Wlhod2IzSjBJR052Ym5OMElHUnBkbWxrWlNBOUlDaHZjbWxuYVc0cElEMCtJQ2gyS1NBOVBpQjJJQzhnYjNKcFoybHVPMXh1Wlhod2IzSjBJR052Ym5OMElHMTFiSFJwY0d4NUlEMGdLRzl5YVdkcGJpa2dQVDRnS0hZcElEMCtJSFlnS2lCdmNtbG5hVzQ3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlc1bGNtRjBaVTV2YmtsdWRHVnlaM0poZEdWa1UzQnlhVzVuSUQwZ0tHRnNkR1Z5UkdsemNHeGhZMlZ0Wlc1MElEMGdibTl2Y0NrZ1BUNGdLR052Ym5OMFlXNTBMQ0J2Y21sbmFXNHBJRDArSUNoMktTQTlQaUI3WEc0Z0lHTnZibk4wSUdScGMzQnNZV05sYldWdWRDQTlJRzl5YVdkcGJpQXRJSFk3WEc0Z0lHTnZibk4wSUhOd2NtbHVaMDF2WkdsbWFXVmtSR2x6Y0d4aFkyVnRaVzUwSUQwZ0xTQmpiMjV6ZEdGdWRDQXFJQ2d3SUMwZ1lXeDBaWEpFYVhOd2JHRmpaVzFsYm5Rb1RXRjBhQzVoWW5Nb1pHbHpjR3hoWTJWdFpXNTBLU2twTzF4dUlDQnlaWFIxY200Z0tHUnBjM0JzWVdObGJXVnVkQ0E4UFNBd0tTQS9JRzl5YVdkcGJpQXJJSE53Y21sdVowMXZaR2xtYVdWa1JHbHpjR3hoWTJWdFpXNTBJRG9nYjNKcFoybHVJQzBnYzNCeWFXNW5UVzlrYVdacFpXUkVhWE53YkdGalpXMWxiblE3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQnlhVzVuSUQwZ1oyVnVaWEpoZEdWT2IyNUpiblJsY21keVlYUmxaRk53Y21sdVp5Z3BPMXh1Wlhod2IzSjBJR052Ym5OMElHNXZibXhwYm1WaGNsTndjbWx1WnlBOUlHZGxibVZ5WVhSbFRtOXVTVzUwWlhKbmNtRjBaV1JUY0hKcGJtY29UV0YwYUM1emNYSjBLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSGR5WVhBZ1BTQW9iV2x1TENCdFlYZ3BJRDArSUNoMktTQTlQaUI3WEc0Z0lHTnZibk4wSUhKaGJtZGxVMmw2WlNBOUlHMWhlQ0F0SUcxcGJqdGNiaUFnY21WMGRYSnVJQ2dvZGlBdElHMXBiaWtnSlNCeVlXNW5aVk5wZW1VZ0t5QnlZVzVuWlZOcGVtVXBJQ1VnY21GdVoyVlRhWHBsSUNzZ2JXbHVPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhOdGIyOTBhQ0E5SUNoemRISmxibWQwYUNBOUlEVXdLU0E5UGlCN1hHNGdJR3hsZENCd2NtVjJhVzkxYzFaaGJIVmxJRDBnTUR0Y2JpQWdiR1YwSUdoaGMxTnRiMjkwYUdWa0lEMGdabUZzYzJVN1hHNWNiaUFnY21WMGRYSnVJQ2gyS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnWTNWeWNtVnVkRlpoYkhWbElEMGdLR2hoYzFOdGIyOTBhR1ZrS1NBL0lIQnlaWFpwYjNWelZtRnNkV1VnT2lCMk8xeHVJQ0FnSUdOdmJuTjBJRzVsZDFaaGJIVmxJRDBnWTJGc1kxTnRiMjkwYUdsdVp5aGpkWEp5Wlc1MFZtRnNkV1VzSUhCeVpYWnBiM1Z6Vm1Gc2RXVXNJSFJwYldWVGFXNWpaVXhoYzNSR2NtRnRaU2dwTENCemRISmxibWQwYUNrN1hHNGdJQ0FnY0hKbGRtbHZkWE5XWVd4MVpTQTlJRzVsZDFaaGJIVmxPMXh1SUNBZ0lHaGhjMU50YjI5MGFHVmtJRDBnZEhKMVpUdGNiaUFnSUNCeVpYUjFjbTRnYm1WM1ZtRnNkV1U3WEc0Z0lIMDdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNSbGNITWdQU0FvYzNSbGNITXNJRzFwYml3Z2JXRjRLU0E5UGlBb2Rpa2dQVDRnZTF4dUlDQmpiMjV6ZENCd2NtOW5jbVZ6Y3lBOUlHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLRzFwYml3Z2JXRjRMQ0IyS1R0Y2JpQWdjbVYwZFhKdUlITjBaWEJRY205bmNtVnpjeWh6ZEdWd2N5d2djSEp2WjNKbGMzTXBPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhSeVlXNXpabTl5YlVOb2FXeGtWbUZzZFdWeklEMGdLR05vYVd4a1ZISmhibk5tYjNKdFpYSnpLU0E5UGlCN1hHNGdJR052Ym5OMElHMTFkR0ZpYkdWVGRHRjBaU0E5SUh0OU8xeHVJQ0J5WlhSMWNtNGdLSFlwSUQwK0lIdGNiaUFnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZGlrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnWTJocGJHUlVjbUZ1YzJadmNtMWxjaUE5SUdOb2FXeGtWSEpoYm5ObWIzSnRaWEp6VzJ0bGVWMDdYRzRnSUNBZ0lDQnBaaUFvWTJocGJHUlVjbUZ1YzJadmNtMWxjaWtnZTF4dUlDQWdJQ0FnSUNCdGRYUmhZbXhsVTNSaGRHVmJhMlY1WFNBOUlHTm9hV3hrVkhKaGJuTm1iM0p0WlhJb2RsdHJaWGxkS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdiWFYwWVdKc1pWTjBZWFJsTzF4dUlDQjlPMXh1ZlR0Y2JseHVMeThnVlc1cGRDQjBjbUZ1YzJadmNtMWxjbk5jYm1WNGNHOXlkQ0JqYjI1emRDQndaWEpqWlc1MElEMGdZWEJ3Wlc1a1ZXNXBkQ2duSlNjcE8xeHVaWGh3YjNKMElHTnZibk4wSUdSbFozSmxaWE1nUFNCaGNIQmxibVJWYm1sMEtDZGtaV2NuS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0J3ZUNBOUlHRndjR1Z1WkZWdWFYUW9KM0I0SnlrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCeVoySlZibWwwSUQwZ1pteHZkeWhjYmlBZ1kyeGhiWEFvTUN3Z01qVTFLU3hjYmlBZ1RXRjBhQzV5YjNWdVpGeHVLVHRjYmx4dVkyOXVjM1FnY21kaVlWUmxiWEJzWVhSbElEMGdLSHNnY21Wa0xDQm5jbVZsYml3Z1lteDFaU3dnWVd4d2FHRWdQU0F4SUgwcElEMCtJRnh1SUNCZ2NtZGlZU2drZTNKbFpIMHNJQ1I3WjNKbFpXNTlMQ0FrZTJKc2RXVjlMQ0FrZTJGc2NHaGhmU2xnTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21kaVlTQTlJR1pzYjNjb1hHNGdJSFJ5WVc1elptOXliVU5vYVd4a1ZtRnNkV1Z6S0h0Y2JpQWdJQ0J5WldRNklISm5ZbFZ1YVhRc1hHNGdJQ0FnWjNKbFpXNDZJSEpuWWxWdWFYUXNYRzRnSUNBZ1lteDFaVG9nY21kaVZXNXBkQ3hjYmlBZ0lDQmhiSEJvWVZ4dUlDQjlLU3hjYmlBZ2NtZGlZVlJsYlhCc1lYUmxYRzRwTzF4dVhHNWpiMjV6ZENCb2MyeGhWR1Z0Y0d4aGRHVWdQU0FvZXlCb2RXVXNJSE5oZEhWeVlYUnBiMjRzSUd4cFoyaDBibVZ6Y3l3Z1lXeHdhR0VnUFNBeElIMHBJRDArSUZ4dUlDQmdhSE5zWVNna2UyaDFaWDBzSUNSN2MyRjBkWEpoZEdsdmJuMHNJQ1I3YkdsbmFIUnVaWE56ZlN3Z0pIdGhiSEJvWVgwcFlEdGNibHh1Wlhod2IzSjBJR052Ym5OMElHaHpiR0VnUFNCbWJHOTNLRnh1SUNCMGNtRnVjMlp2Y20xRGFHbHNaRlpoYkhWbGN5aDdYRzRnSUNBZ2FIVmxPaUJ3WVhKelpVWnNiMkYwTEZ4dUlDQWdJSE5oZEhWeVlYUnBiMjQ2SUhCbGNtTmxiblFzWEc0Z0lDQWdiR2xuYUhSdVpYTnpPaUJ3WlhKalpXNTBMRnh1SUNBZ0lHRnNjR2hoWEc0Z0lIMHBMRnh1SUNCb2MyeGhWR1Z0Y0d4aGRHVmNiaWs3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYjJ4dmNpQTlJQ2gyS1NBOVBpQjdYRzRnSUdsbUlDaDJMbWhoYzA5M2JsQnliM0JsY25SNUtDZHlaV1FuS1NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ5WjJKaEtIWXBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tIWXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb0oyaDFaU2NwS1NCN1hHNGdJQ0FnY21WMGRYSnVJR2h6YkdFb2RpazdYRzRnSUgxY2JpQWdjbVYwZFhKdUlIWTdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWVd4d2FHRWdQU0JqYkdGdGNDZ3dMQ0F4S1R0Y2JseHVZMjl1YzNRZ1lteGxibVFnUFNBb1puSnZiU3dnZEc4c0lIWXBJRDArSUh0Y2JpQWdZMjl1YzNRZ1puSnZiVVY0Y0c4Z1BTQm1jbTl0SUNvZ1puSnZiVHRjYmlBZ1kyOXVjM1FnZEc5RmVIQnZJRDBnZEc4Z0tpQjBienRjYmlBZ2NtVjBkWEp1SUUxaGRHZ3VjM0Z5ZENoMklDb2dLSFJ2Ulhod2J5QXRJR1p5YjIxRmVIQnZLU0FySUdaeWIyMUZlSEJ2S1R0Y2JuMDdYRzR2THlCb2RIUndPaTh2WTI5a1pYQmxiaTVwYnk5dmMzVmliR0ZyWlM5d1pXNHZlRWRXVm1GT1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWW14bGJtUkRiMnh2Y2lBOUlDaG1jbTl0TENCMGJ5a2dQVDRnZTF4dUlDQmpiMjV6ZENCbWNtOXRRMjlzYjNJZ1BTQnBjMU4wY21sdVp5aG1jbTl0S1NBL0lIQmhjbk5sUTI5c2IzSW9abkp2YlNrZ09pQm1jbTl0TzF4dUlDQmpiMjV6ZENCMGIwTnZiRzl5SUQwZ2FYTlRkSEpwYm1jb2RHOHBJRDhnY0dGeWMyVkRiMnh2Y2loMGJ5azZJSFJ2TzF4dVhHNGdJR052Ym5OMElHSnNaVzVrWldRZ1BTQjdJQzR1TG1aeWIyMURiMnh2Y2lCOU8xeHVYRzRnSUhKbGRIVnliaUFvZGlrZ1BUNGdlMXh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCaWJHVnVaR1ZrS1NCN1hHNGdJQ0FnSUNCaWJHVnVaR1ZrVzJ0bGVWMGdQU0JpYkdWdVpDaG1jbTl0UTI5c2IzSmJhMlY1WFN3Z2RHOURiMnh2Y2x0clpYbGRMQ0IyS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdZbXhsYm1SbFpDNXlaV1FnUFNCaWJHVnVaQ2htY205dFEyOXNiM0l1Y21Wa0xDQjBiME52Ykc5eUxuSmxaQ3dnZGlrN1hHNGdJQ0FnWW14bGJtUmxaQzVuY21WbGJpQTlJR0pzWlc1a0tHWnliMjFEYjJ4dmNpNW5jbVZsYml3Z2RHOURiMnh2Y2k1bmNtVmxiaXdnZGlrN1hHNGdJQ0FnWW14bGJtUmxaQzVpYkhWbElEMGdZbXhsYm1Rb1puSnZiVU52Ykc5eUxtSnNkV1VzSUhSdlEyOXNiM0l1WW14MVpTd2dkaWs3WEc0Z0lDQWdZbXhsYm1SbFpDNWhiSEJvWVNBOUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLR1p5YjIxRGIyeHZjaTVoYkhCb1lTd2dkRzlEYjJ4dmNpNWhiSEJvWVN3Z2RpazdYRzRnSUNBZ2NtVjBkWEp1SUdKc1pXNWtaV1E3WEc0Z0lIMDdYRzU5TzF4dVhHNHZMeUJDWlhwcFpYSWdjbVZ6YjJ4MlpYSmNiaTh2SUZKbFptRmpkRzl5WldRZ1puSnZiU0JvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2YUhWbmFITnJMMkpsZW1sbGNpOWliRzlpTDIxaGMzUmxjaTlwYm1SbGVDNXFjMXh1THlvcVhHNGpJeUJVYUdVZ1RVbFVJRXhwWTJWdWMyVWdLRTFKVkNrZ0l5TmNibHh1UTI5d2VYSnBaMmgwSUNoaktTQXlNREV6SUVoMVoyZ2dTMlZ1Ym1Wa2VWeHVYRzVRWlhKdGFYTnphVzl1SUdseklHaGxjbVZpZVNCbmNtRnVkR1ZrTENCbWNtVmxJRzltSUdOb1lYSm5aU3dnZEc4Z1lXNTVJSEJsY25OdmJpQnZZblJoYVc1cGJtY2dZU0JqYjNCNVhHNXZaaUIwYUdseklITnZablIzWVhKbElHRnVaQ0JoYzNOdlkybGhkR1ZrSUdSdlkzVnRaVzUwWVhScGIyNGdabWxzWlhNZ0tIUm9aU0JjSWxOdlpuUjNZWEpsWENJcExDQjBieUJrWldGc1hHNXBiaUIwYUdVZ1UyOW1kSGRoY21VZ2QybDBhRzkxZENCeVpYTjBjbWxqZEdsdmJpd2dhVzVqYkhWa2FXNW5JSGRwZEdodmRYUWdiR2x0YVhSaGRHbHZiaUIwYUdVZ2NtbG5hSFJ6WEc1MGJ5QjFjMlVzSUdOdmNIa3NJRzF2WkdsbWVTd2diV1Z5WjJVc0lIQjFZbXhwYzJnc0lHUnBjM1J5YVdKMWRHVXNJSE4xWW14cFkyVnVjMlVzSUdGdVpDOXZjaUJ6Wld4c1hHNWpiM0JwWlhNZ2IyWWdkR2hsSUZOdlpuUjNZWEpsTENCaGJtUWdkRzhnY0dWeWJXbDBJSEJsY25OdmJuTWdkRzhnZDJodmJTQjBhR1VnVTI5bWRIZGhjbVVnYVhOY2JtWjFjbTVwYzJobFpDQjBieUJrYnlCemJ5d2djM1ZpYW1WamRDQjBieUIwYUdVZ1ptOXNiRzkzYVc1bklHTnZibVJwZEdsdmJuTTZYRzVjYmxSb1pTQmhZbTkyWlNCamIzQjVjbWxuYUhRZ2JtOTBhV05sSUdGdVpDQjBhR2x6SUhCbGNtMXBjM05wYjI0Z2JtOTBhV05sSUhOb1lXeHNJR0psSUdsdVkyeDFaR1ZrSUdsdVhHNWhiR3dnWTI5d2FXVnpJRzl5SUhOMVluTjBZVzUwYVdGc0lIQnZjblJwYjI1eklHOW1JSFJvWlNCVGIyWjBkMkZ5WlM1Y2JseHVWRWhGSUZOUFJsUlhRVkpGSUVsVElGQlNUMVpKUkVWRUlGd2lRVk1nU1ZOY0lpd2dWMGxVU0U5VlZDQlhRVkpTUVU1VVdTQlBSaUJCVGxrZ1MwbE9SQ3dnUlZoUVVrVlRVeUJQVWx4dVNVMVFURWxGUkN3Z1NVNURURlZFU1U1SElFSlZWQ0JPVDFRZ1RFbE5TVlJGUkNCVVR5QlVTRVVnVjBGU1VrRk9WRWxGVXlCUFJpQk5SVkpEU0VGT1ZFRkNTVXhKVkZrc1hHNUdTVlJPUlZOVElFWlBVaUJCSUZCQlVsUkpRMVZNUVZJZ1VGVlNVRTlUUlNCQlRrUWdUazlPU1U1R1VrbE9SMFZOUlU1VUxpQkpUaUJPVHlCRlZrVk9WQ0JUU0VGTVRDQlVTRVZjYmtGVlZFaFBVbE1nVDFJZ1EwOVFXVkpKUjBoVUlFaFBURVJGVWxNZ1FrVWdURWxCUWt4RklFWlBVaUJCVGxrZ1EweEJTVTBzSUVSQlRVRkhSVk1nVDFJZ1QxUklSVkpjYmt4SlFVSkpURWxVV1N3Z1YwaEZWRWhGVWlCSlRpQkJUaUJCUTFSSlQwNGdUMFlnUTA5T1ZGSkJRMVFzSUZSUFVsUWdUMUlnVDFSSVJWSlhTVk5GTENCQlVrbFRTVTVISUVaU1QwMHNYRzVQVlZRZ1QwWWdUMUlnU1U0Z1EwOU9Ua1ZEVkVsUFRpQlhTVlJJSUZSSVJTQlRUMFpVVjBGU1JTQlBVaUJVU0VVZ1ZWTkZJRTlTSUU5VVNFVlNJRVJGUVV4SlRrZFRJRWxPWEc1VVNFVWdVMDlHVkZkQlVrVXVYRzRnS2k5Y2JtTnZibk4wSUhKbGMyOXNkbVV6SUQwZ0tIQnZhVzUwY3lrZ1BUNGdLSFFwSUQwK0lIdGNiaUFnWTI5dWMzUWdkWFFnUFNBeElDMGdkRHRjYmlBZ2NtVjBkWEp1SUNod2IybHVkSE5iTUYwZ0tpQjFkQ0FySUhCdmFXNTBjMXN4WFNBcUlIUXBJQ29nZFhRZ0t5QW9jRzlwYm5Seld6RmRJQ29nZFhRZ0t5QndiMmx1ZEhOYk1sMGdLaUIwS1NBcUlIUTdYRzU5TzF4dVhHNWpiMjV6ZENCeVpYTnZiSFpsTkNBOUlDaHdiMmx1ZEhNcElEMCtJQ2gwS1NBOVBpQjdYRzRnSUdOdmJuTjBJSFYwSUQwZ01TQXRJSFE3WEc0Z0lHTnZibk4wSUdFeElEMGdjRzlwYm5Seld6RmRJQ29nZFhRZ0t5QndiMmx1ZEhOYk1sMGdLaUIwTzF4dUlDQnlaWFIxY200Z0tDaHdiMmx1ZEhOYk1GMGdLaUIxZENBcklIQnZhVzUwYzFzeFhTQXFJSFFwSUNvZ2RYUWdLeUJoTVNBcUlIUXBJQ29nZFhRZ0t5QW9ZVEVnS2lCMWRDQXJJQ2h3YjJsdWRITmJNbDBnS2lCMWRDQXJJSEJ2YVc1MGMxc3pYU0FxSUhRcElDb2dkQ2tnS2lCME8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR0psZW1sbGNpQTlJQ2h3YjJsdWRITXBJRDArWEc0Z0lDaHdiMmx1ZEhNdWJHVnVaM1JvSUQwOVBTQXpLU0EvSUhKbGMyOXNkbVV6S0hCdmFXNTBjeWtnT2lCeVpYTnZiSFpsTkNod2IybHVkSE1wTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy90cmFuc2Zvcm1lcnMuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNvbG9yID0gZXhwb3J0cy5oc2xhID0gZXhwb3J0cy5oZXggPSBleHBvcnRzLnJnYmEgPSBleHBvcnRzLnJnYlVuaXQgPSBleHBvcnRzLnNjYWxlID0gZXhwb3J0cy5weCA9IGV4cG9ydHMucGVyY2VudCA9IGV4cG9ydHMuZGVncmVlcyA9IGV4cG9ydHMuYWxwaGEgPSBleHBvcnRzLm51bWJlciA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBWYWx1ZSB0eXBlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGFscGhhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBkZWdyZWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBoZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGhzbGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHBlcmNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHB4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiByZ2JVbml0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiByZ2JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHNjYWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgbnVtYmVyID0gZXhwb3J0cy5udW1iZXIgPSB7XG4gIHRlc3Q6IF91dGlscy5pc051bSxcbiAgcGFyc2U6IHBhcnNlRmxvYXRcbn07XG5cbi8vIFZhbHVlIHR5cGVzXG52YXIgYWxwaGEgPSBleHBvcnRzLmFscGhhID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICB0cmFuc2Zvcm06IF90cmFuc2Zvcm1lcnMuYWxwaGFcbn0pO1xuXG52YXIgZGVncmVlcyA9IGV4cG9ydHMuZGVncmVlcyA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCdkZWcnLCBfdHJhbnNmb3JtZXJzLmRlZ3JlZXMpO1xudmFyIHBlcmNlbnQgPSBleHBvcnRzLnBlcmNlbnQgPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgnJScsIF90cmFuc2Zvcm1lcnMucGVyY2VudCk7XG52YXIgcHggPSBleHBvcnRzLnB4ID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJ3B4JywgX3RyYW5zZm9ybWVycy5weCk7XG5cbnZhciBzY2FsZSA9IGV4cG9ydHMuc2NhbGUgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIGRlZmF1bHQ6IDFcbn0pO1xuXG52YXIgcmdiVW5pdCA9IGV4cG9ydHMucmdiVW5pdCA9IF9leHRlbmRzKHt9LCBudW1iZXIsIHtcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLnJnYlVuaXRcbn0pO1xuXG52YXIgcmdiYSA9IGV4cG9ydHMucmdiYSA9IHtcbiAgdGVzdDogX3V0aWxzLmlzUmdiLFxuICBwYXJzZTogX3BhcnNlcnMucmdiYSxcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLnJnYmFcbn07XG5cbnZhciBoZXggPSBleHBvcnRzLmhleCA9IF9leHRlbmRzKHt9LCByZ2JhLCB7XG4gIHRlc3Q6IF91dGlscy5pc0hleCxcbiAgcGFyc2U6IF9wYXJzZXJzLmhleFxufSk7XG5cbnZhciBoc2xhID0gZXhwb3J0cy5oc2xhID0ge1xuICB0ZXN0OiBfdXRpbHMuaXNIc2wsXG4gIHBhcnNlOiBfcGFyc2Vycy5oc2xhLFxuICB0cmFuc2Zvcm06IF90cmFuc2Zvcm1lcnMuaHNsYVxufTtcblxudmFyIGNvbG9yID0gZXhwb3J0cy5jb2xvciA9IHtcbiAgcGFyc2U6IF9wYXJzZXJzLmNvbG9yLFxuICB0ZXN0OiBfdXRpbHMuaXNDb2xvcixcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLmNvbG9yXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZG1Gc2RXVXRkSGx3WlhNdWFuTWlYU3dpYm1GdFpYTWlPbHNpYm5WdFltVnlJaXdpZEdWemRDSXNJbkJoY25ObElpd2ljR0Z5YzJWR2JHOWhkQ0lzSW1Gc2NHaGhJaXdpZEhKaGJuTm1iM0p0SWl3aVpHVm5jbVZsY3lJc0luQmxjbU5sYm5RaUxDSndlQ0lzSW5OallXeGxJaXdpWkdWbVlYVnNkQ0lzSW5KbllsVnVhWFFpTENKeVoySmhJaXdpYUdWNElpd2lhSE5zWVNJc0ltTnZiRzl5SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0clVVRkJRVHM3T3pzN096czdPenM3T3pzN08wRkJZVUU3TzBGQlZVRTdPMEZCVFVFN08wRkJVMDhzU1VGQlRVRXNNRUpCUVZNN1FVRkRjRUpETEc5Q1FVUnZRanRCUVVWd1FrTXNVMEZCVDBNN1FVRkdZU3hEUVVGbU96dEJRVXRRTzBGQlEwOHNTVUZCVFVNc2NVTkJRMUpLTEUxQlJGRTdRVUZGV0VzN1FVRkdWeXhGUVVGT096dEJRVXRCTEVsQlFVMURMRFJDUVVGVkxESkNRVUZsTEV0QlFXWXNkMEpCUVdoQ08wRkJRMEVzU1VGQlRVTXNORUpCUVZVc01rSkJRV1VzUjBGQlppeDNRa0ZCYUVJN1FVRkRRU3hKUVVGTlF5eHJRa0ZCU3l3eVFrRkJaU3hKUVVGbUxHMUNRVUZZT3p0QlFVVkJMRWxCUVUxRExIRkRRVU5TVkN4TlFVUlJPMEZCUlZoVkxGZEJRVk03UVVGR1JTeEZRVUZPT3p0QlFVdEJMRWxCUVUxRExIbERRVU5TV0N4TlFVUlJPMEZCUlZoTE8wRkJSbGNzUlVGQlRqczdRVUZMUVN4SlFVRk5UeXh6UWtGQlR6dEJRVU5zUWxnc2IwSkJSR3RDTzBGQlJXeENReXh6UWtGR2EwSTdRVUZIYkVKSE8wRkJTR3RDTEVOQlFXSTdPMEZCVFVFc1NVRkJUVkVzYVVOQlExSkVMRWxCUkZFN1FVRkZXRmdzYjBKQlJsYzdRVUZIV0VNN1FVRklWeXhGUVVGT096dEJRVTFCTEVsQlFVMVpMSE5DUVVGUE8wRkJRMnhDWWl4dlFrRkVhMEk3UVVGRmJFSkRMSE5DUVVaclFqdEJRVWRzUWtjN1FVRklhMElzUTBGQllqczdRVUZOUVN4SlFVRk5WU3gzUWtGQlVUdEJRVU51UW1Jc2RVSkJSRzFDTzBGQlJXNUNSQ3h6UWtGR2JVSTdRVUZIYmtKSk8wRkJTRzFDTEVOQlFXUWlMQ0ptYVd4bElqb2lkbUZzZFdVdGRIbHdaWE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoY25NdWFHRnNiQzlRY205cVpXTjBjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktpcGNiaUFxSUZaaGJIVmxJSFI1Y0dWelhHNGdLbHh1SUNvZ1lXeHdhR0ZjYmlBcUlHUmxaM0psWlhOY2JpQXFJR2hsZUZ4dUlDb2dhSE5zWVZ4dUlDb2djR1Z5WTJWdWRGeHVJQ29nY0hoY2JpQXFJSEpuWWxWdWFYUmNiaUFxSUhKbllseHVJQ29nYzJOaGJHVmNiaUFxTDF4dWFXMXdiM0owSUh0Y2JpQWdjbWRpVlc1cGRDQmhjeUIwY21GdWMyWnZjbTFTUjBKVmJtbDBMRnh1SUNCeVoySmhJR0Z6SUhSeVlXNXpabTl5YlZKblltRXNYRzRnSUdGc2NHaGhJR0Z6SUhSeVlXNXpabTl5YlVGc2NHaGhMRnh1SUNCb2MyeGhJR0Z6SUhSeVlXNXpabTl5YlVoemJHRXNYRzRnSUdOdmJHOXlJR0Z6SUhSeVlXNXpabTl5YlVOdmJHOXlMRnh1SUNCd2VDQmhjeUIwY21GdWMyWnZjbTFRZUN4Y2JpQWdjR1Z5WTJWdWRDQmhjeUIwY21GdWMyWnZjbTFRWlhKalpXNTBMRnh1SUNCa1pXZHlaV1Z6SUdGeklIUnlZVzV6Wm05eWJVUmxaM0psWlhOY2JuMGdabkp2YlNBbkxpOTBjbUZ1YzJadmNtMWxjbk1uTzF4dWFXMXdiM0owSUh0Y2JpQWdhR1Y0SUdGeklIQmhjbk5sU0dWNExGeHVJQ0J5WjJKaElHRnpJSEJoY25ObFVtZGlZU3hjYmlBZ2FITnNZU0JoY3lCd1lYSnpaVWh6YkdFc1hHNGdJR052Ykc5eUlHRnpJSEJoY25ObFEyOXNiM0pjYm4wZ1puSnZiU0FuTGk5d1lYSnpaWEp6Snp0Y2JtbHRjRzl5ZENCN1hHNGdJR055WldGMFpWVnVhWFJVZVhCbExGeHVJQ0JwYzA1MWJTeGNiaUFnYVhOU1oySXNYRzRnSUdselNITnNMRnh1SUNCcGMwaGxlQ3hjYmlBZ2FYTkRiMnh2Y2x4dWZTQm1jbTl0SUNjdUwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUc1MWJXSmxjaUE5SUh0Y2JpQWdkR1Z6ZERvZ2FYTk9kVzBzWEc0Z0lIQmhjbk5sT2lCd1lYSnpaVVpzYjJGMFhHNTlPMXh1WEc0dkx5QldZV3gxWlNCMGVYQmxjMXh1Wlhod2IzSjBJR052Ym5OMElHRnNjR2hoSUQwZ2UxeHVJQ0F1TGk1dWRXMWlaWElzWEc0Z0lIUnlZVzV6Wm05eWJUb2dkSEpoYm5ObWIzSnRRV3h3YUdGY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmtaV2R5WldWeklEMGdZM0psWVhSbFZXNXBkRlI1Y0dVb0oyUmxaeWNzSUhSeVlXNXpabTl5YlVSbFozSmxaWE1wTzF4dVpYaHdiM0owSUdOdmJuTjBJSEJsY21ObGJuUWdQU0JqY21WaGRHVlZibWwwVkhsd1pTZ25KU2NzSUhSeVlXNXpabTl5YlZCbGNtTmxiblFwTzF4dVpYaHdiM0owSUdOdmJuTjBJSEI0SUQwZ1kzSmxZWFJsVlc1cGRGUjVjR1VvSjNCNEp5d2dkSEpoYm5ObWIzSnRVSGdwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzJOaGJHVWdQU0I3WEc0Z0lDNHVMbTUxYldKbGNpeGNiaUFnWkdWbVlYVnNkRG9nTVZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElISm5ZbFZ1YVhRZ1BTQjdYRzRnSUM0dUxtNTFiV0psY2l4Y2JpQWdkSEpoYm5ObWIzSnRPaUIwY21GdWMyWnZjbTFTUjBKVmJtbDBYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21kaVlTQTlJSHRjYmlBZ2RHVnpkRG9nYVhOU1oySXNYRzRnSUhCaGNuTmxPaUJ3WVhKelpWSm5ZbUVzWEc0Z0lIUnlZVzV6Wm05eWJUb2dkSEpoYm5ObWIzSnRVbWRpWVZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHaGxlQ0E5SUh0Y2JpQWdMaTR1Y21kaVlTeGNiaUFnZEdWemREb2dhWE5JWlhnc1hHNGdJSEJoY25ObE9pQndZWEp6WlVobGVGeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR2h6YkdFZ1BTQjdYRzRnSUhSbGMzUTZJR2x6U0hOc0xGeHVJQ0J3WVhKelpUb2djR0Z5YzJWSWMyeGhMRnh1SUNCMGNtRnVjMlp2Y20wNklIUnlZVzV6Wm05eWJVaHpiR0ZjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamIyeHZjaUE5SUh0Y2JpQWdjR0Z5YzJVNklIQmhjbk5sUTI5c2IzSXNYRzRnSUhSbGMzUTZJR2x6UTI5c2IzSXNYRzRnSUhSeVlXNXpabTl5YlRvZ2RISmhibk5tYjNKdFEyOXNiM0pjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdmFsdWUtdHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJy4uL2luYy9lYXNpbmcnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIGNsYW1wUHJvZ3Jlc3MgPSAoMCwgX3RyYW5zZm9ybWVycy5jbGFtcCkoMCwgMSk7XG5cbmZ1bmN0aW9uIGNhbGNWYWx1ZUF0VGltZShmcm9tLCB0bywgZHVyYXRpb24sIGVsYXBzZWQsIGVhc2UpIHtcbiAgdmFyIHByb2dyZXNzQXRUaW1lID0gZWFzZShjbGFtcFByb2dyZXNzKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoMCwgZHVyYXRpb24sIGVsYXBzZWQpKSk7XG4gIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGZyb20sIHRvLCBwcm9ncmVzc0F0VGltZSk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBmcm9tID0gX3JlZi5mcm9tLFxuICAgICAgdG8gPSBfcmVmLnRvLFxuICAgICAgb25VcGRhdGUgPSBfcmVmLm9uVXBkYXRlLFxuICAgICAgX3JlZiRhY2N1cmFjeSA9IF9yZWYuYWNjdXJhY3ksXG4gICAgICBhY2N1cmFjeSA9IF9yZWYkYWNjdXJhY3kgPT09IHVuZGVmaW5lZCA/IDYwIDogX3JlZiRhY2N1cmFjeSxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnZnJvbScsICd0bycsICdvblVwZGF0ZScsICdhY2N1cmFjeSddKTtcblxuICAvLyBHZXQgdHdlZW4gcHJvcGVydGllc1xuICB2YXIgYSA9IGZyb207XG4gIHZhciBiID0gdG87XG4gIHZhciBhQ3VycmVudCA9IGEuZ2V0KCk7XG4gIHZhciBhRHVyYXRpb24gPSBhLmdldFByb3AoJ2R1cmF0aW9uJyk7XG4gIHZhciBiRHVyYXRpb24gPSBiLmdldFByb3AoJ2R1cmF0aW9uJyk7XG4gIHZhciBhRWFzZSA9IGEuZ2V0UHJvcCgnZWFzZScpO1xuICB2YXIgYkVhc2UgPSBiLmdldFByb3AoJ2Vhc2UnKTtcbiAgdmFyIGFGcm9tID0gYS5nZXRQcm9wKCdmcm9tJyk7XG4gIHZhciBiRnJvbSA9IGIuZ2V0UHJvcCgnZnJvbScpO1xuICB2YXIgYVRvID0gYS5nZXRQcm9wKCd0bycpO1xuICB2YXIgYlRvID0gYi5nZXRQcm9wKCd0bycpO1xuXG4gIC8vIEFuYWx5c2UgdHdlZW5zXG4gIHZhciBvdmVybGFwRHVyYXRpb24gPSBNYXRoLm1pbihhRHVyYXRpb24gLSBhLmdldEVsYXBzZWQoKSwgYkR1cmF0aW9uKTtcbiAgdmFyIGJWYWx1ZUF0VHdlZW5PdmVybGFwQ29tcGxldGUgPSBjYWxjVmFsdWVBdFRpbWUoYkZyb20sIGJUbywgYkR1cmF0aW9uLCBvdmVybGFwRHVyYXRpb24sIGJFYXNlKTtcbiAgdmFyIGJTdGFydHNIaWdoZXJUaGFuQSA9IGJGcm9tID4gYUN1cnJlbnQ7XG4gIHZhciBiRW5kc0hpZ2hlclRoYW5BID0gYlZhbHVlQXRUd2Vlbk92ZXJsYXBDb21wbGV0ZSA+IGFUbztcblxuICAvLyBCbGVuZCBwb2ludHMgYXJlIGRlZmluZWQgYXMgW3QgPSB0aW1lLCB2ID0gdmFsdWVBdFRpbWVdXG4gIC8vIFAxXG4gIC8vIFRoZSBzdGFydCBvZiB0aGUgdHdlZW4gYmxlbmRcbiAgdmFyIFAxID0gYUN1cnJlbnQ7XG4gIHZhciBibGVuZFBvaW50cyA9IFtQMV07XG5cbiAgLy8gRmluZCBQMlxuICAvLyBUaGUgcG9zc2libGUgaW50ZXJzZWN0aW9uIHBvaW50IGJldHdlZW4gdGhlIHR3byB0d2VlbnNcbiAgdmFyIHR3ZWVuc0ludGVyc2VjdCA9IGJTdGFydHNIaWdoZXJUaGFuQSAhPT0gYkVuZHNIaWdoZXJUaGFuQTtcbiAgaWYgKHR3ZWVuc0ludGVyc2VjdCkge1xuICAgIHZhciB0aW1lc3RlcCA9IG92ZXJsYXBEdXJhdGlvbiAvIGFjY3VyYWN5O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY2N1cmFjeTsgaSsrKSB7XG4gICAgICB2YXIgcnVubmluZ1RpbWUgPSBpICogdGltZXN0ZXA7XG5cbiAgICAgIHZhciBhVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYUZyb20sIGFUbywgYUR1cmF0aW9uLCBhLmVsYXBzZWQgKyBydW5uaW5nVGltZSwgYUVhc2UpO1xuICAgICAgdmFyIGJWYWx1ZUF0VGltZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIGIuZWxhcHNlZCArIHJ1bm5pbmdUaW1lLCBiRWFzZSk7XG5cbiAgICAgIHZhciBoYXNJbnRlcnNlY3RlZCA9IGJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPiBiVmFsdWVBdFRpbWUgfHwgIWJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPCBiVmFsdWVBdFRpbWU7XG5cbiAgICAgIGlmIChoYXNJbnRlcnNlY3RlZCkge1xuICAgICAgICB2YXIgUDIgPSBiVmFsdWVBdFRpbWU7XG4gICAgICAgIGJsZW5kUG9pbnRzLnB1c2goUDIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQM1xuICAvLyBUaGUgcG9pbnRzIHRoZSB0d28gdHdlZW5zIHN0b3Agb3ZlcmxhcHBpbmdcbiAgdmFyIFAzID0gYlZhbHVlQXRUd2Vlbk92ZXJsYXBDb21wbGV0ZTtcbiAgYmxlbmRQb2ludHMucHVzaChQMyk7XG5cbiAgLy8gUHVzaCB0aGUgZW5kIHN0YXRlIG9mIGIgdHdlZW4gYXMgZmluYWwgY29udHJvbCBwb2ludFxuICB2YXIgUDQgPSBiVG87XG4gIGJsZW5kUG9pbnRzLnB1c2goUDQpO1xuXG4gIHJldHVybiAoMCwgX3R3ZWVuMi5kZWZhdWx0KShfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBkdXJhdGlvbjogYkR1cmF0aW9uLFxuICAgIGVhc2U6IF9lYXNpbmcubGluZWFyLFxuICAgIG9uVXBkYXRlOiAoMCwgX3RyYW5zZm9ybWVycy5mbG93KSgoMCwgX3RyYW5zZm9ybWVycy5iZXppZXIpKGJsZW5kUG9pbnRzKSwgb25VcGRhdGUpXG4gIH0pKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJKc1pXNWtMWFIzWldWdWN5NXFjeUpkTENKdVlXMWxjeUk2V3lKamJHRnRjRkJ5YjJkeVpYTnpJaXdpWTJGc1kxWmhiSFZsUVhSVWFXMWxJaXdpWm5KdmJTSXNJblJ2SWl3aVpIVnlZWFJwYjI0aUxDSmxiR0Z3YzJWa0lpd2laV0Z6WlNJc0luQnliMmR5WlhOelFYUlVhVzFsSWl3aWIyNVZjR1JoZEdVaUxDSmhZMk4xY21GamVTSXNJbkJ5YjNCeklpd2lZU0lzSW1JaUxDSmhRM1Z5Y21WdWRDSXNJbWRsZENJc0ltRkVkWEpoZEdsdmJpSXNJbWRsZEZCeWIzQWlMQ0ppUkhWeVlYUnBiMjRpTENKaFJXRnpaU0lzSW1KRllYTmxJaXdpWVVaeWIyMGlMQ0ppUm5KdmJTSXNJbUZVYnlJc0ltSlVieUlzSW05MlpYSnNZWEJFZFhKaGRHbHZiaUlzSWsxaGRHZ2lMQ0p0YVc0aUxDSm5aWFJGYkdGd2MyVmtJaXdpWWxaaGJIVmxRWFJVZDJWbGJrOTJaWEpzWVhCRGIyMXdiR1YwWlNJc0ltSlRkR0Z5ZEhOSWFXZG9aWEpVYUdGdVFTSXNJbUpGYm1SelNHbG5hR1Z5VkdoaGJrRWlMQ0pRTVNJc0ltSnNaVzVrVUc5cGJuUnpJaXdpZEhkbFpXNXpTVzUwWlhKelpXTjBJaXdpZEdsdFpYTjBaWEFpTENKcElpd2ljblZ1Ym1sdVoxUnBiV1VpTENKaFZtRnNkV1ZCZEZScGJXVWlMQ0ppVm1Gc2RXVkJkRlJwYldVaUxDSm9ZWE5KYm5SbGNuTmxZM1JsWkNJc0lsQXlJaXdpY0hWemFDSXNJbEF6SWl3aVVEUWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGQk96czdPMEZCUTBFN08wRkJRMEU3TzBGQlEwRTdPenM3T3p0QlFVVkJMRWxCUVUxQkxHZENRVUZuUWl4NVFrRkJUU3hEUVVGT0xFVkJRVk1zUTBGQlZDeERRVUYwUWpzN1FVRkZRU3hUUVVGVFF5eGxRVUZVTEVOQlFYbENReXhKUVVGNlFpeEZRVUVyUWtNc1JVRkJMMElzUlVGQmJVTkRMRkZCUVc1RExFVkJRVFpEUXl4UFFVRTNReXhGUVVGelJFTXNTVUZCZEVRc1JVRkJORVE3UVVGRE1VUXNUVUZCVFVNc2FVSkJRV2xDUkN4TFFVRkxUaXhqUVVGakxHZERRVUZ4UWl4RFFVRnlRaXhGUVVGM1Fra3NVVUZCZUVJc1JVRkJhME5ETEU5QlFXeERMRU5CUVdRc1EwRkJUQ3hEUVVGMlFqdEJRVU5CTEZOQlFVOHNaME5CUVhGQ1NDeEpRVUZ5UWl4RlFVRXlRa01zUlVGQk0wSXNSVUZCSzBKSkxHTkJRUzlDTEVOQlFWQTdRVUZEUkRzN2EwSkJSV01zWjBKQlFYRkVPMEZCUVVFc1RVRkJiRVJNTEVsQlFXdEVMRkZCUVd4RVFTeEpRVUZyUkR0QlFVRkJMRTFCUVRWRFF5eEZRVUUwUXl4UlFVRTFRMEVzUlVGQk5FTTdRVUZCUVN4TlFVRjRRMHNzVVVGQmQwTXNVVUZCZUVOQkxGRkJRWGRETzBGQlFVRXNNa0pCUVRsQ1F5eFJRVUU0UWp0QlFVRkJMRTFCUVRsQ1FTeFJRVUU0UWl4cFEwRkJia0lzUlVGQmJVSTdRVUZCUVN4TlFVRmFReXhMUVVGWk96dEJRVU5zUlR0QlFVTkJMRTFCUVUxRExFbEJRVWxVTEVsQlFWWTdRVUZEUVN4TlFVRk5WU3hKUVVGSlZDeEZRVUZXTzBGQlEwRXNUVUZCVFZVc1YwRkJWMFlzUlVGQlJVY3NSMEZCUml4RlFVRnFRanRCUVVOQkxFMUJRVTFETEZsQlFWbEtMRVZCUVVWTExFOUJRVVlzUTBGQlZTeFZRVUZXTEVOQlFXeENPMEZCUTBFc1RVRkJUVU1zV1VGQldVd3NSVUZCUlVrc1QwRkJSaXhEUVVGVkxGVkJRVllzUTBGQmJFSTdRVUZEUVN4TlFVRk5SU3hSUVVGUlVDeEZRVUZGU3l4UFFVRkdMRU5CUVZVc1RVRkJWaXhEUVVGa08wRkJRMEVzVFVGQlRVY3NVVUZCVVZBc1JVRkJSVWtzVDBGQlJpeERRVUZWTEUxQlFWWXNRMEZCWkR0QlFVTkJMRTFCUVUxSkxGRkJRVkZVTEVWQlFVVkxMRTlCUVVZc1EwRkJWU3hOUVVGV0xFTkJRV1E3UVVGRFFTeE5RVUZOU3l4UlFVRlJWQ3hGUVVGRlNTeFBRVUZHTEVOQlFWVXNUVUZCVml4RFFVRmtPMEZCUTBFc1RVRkJUVTBzVFVGQlRWZ3NSVUZCUlVzc1QwRkJSaXhEUVVGVkxFbEJRVllzUTBGQldqdEJRVU5CTEUxQlFVMVBMRTFCUVUxWUxFVkJRVVZKTEU5QlFVWXNRMEZCVlN4SlFVRldMRU5CUVZvN08wRkJSVUU3UVVGRFFTeE5RVUZOVVN4clFrRkJhMEpETEV0QlFVdERMRWRCUVV3c1EwRkJVMWdzV1VGQldVb3NSVUZCUldkQ0xGVkJRVVlzUlVGQmNrSXNSVUZCY1VOV0xGTkJRWEpETEVOQlFYaENPMEZCUTBFc1RVRkJUVmNzSzBKQlFTdENNMElzWjBKQlFXZENiMElzUzBGQmFFSXNSVUZCZFVKRkxFZEJRWFpDTEVWQlFUUkNUaXhUUVVFMVFpeEZRVUYxUTA4c1pVRkJka01zUlVGQmQwUk1MRXRCUVhoRUxFTkJRWEpETzBGQlEwRXNUVUZCVFZVc2NVSkJRWE5DVWl4UlFVRlJVaXhSUVVGd1F6dEJRVU5CTEUxQlFVMXBRaXh0UWtGQmIwSkdMQ3RDUVVFclFrNHNSMEZCZWtRN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCVFZNc1MwRkJTMnhDTEZGQlFWZzdRVUZEUVN4TlFVRk5iVUlzWTBGQll5eERRVUZEUkN4RlFVRkVMRU5CUVhCQ096dEJRVVZCTzBGQlEwRTdRVUZEUVN4TlFVRk5SU3hyUWtGQmJVSktMSFZDUVVGMVFrTXNaMEpCUVdoRU8wRkJRMEVzVFVGQlNVY3NaVUZCU2l4RlFVRnhRanRCUVVOdVFpeFJRVUZKUXl4WFFVRlhWaXhyUWtGQmEwSm1MRkZCUVdwRE96dEJRVVZCTEZOQlFVc3NTVUZCU1RCQ0xFbEJRVWtzUTBGQllpeEZRVUZuUWtFc1NVRkJTVEZDTEZGQlFYQkNMRVZCUVRoQ01FSXNSMEZCT1VJc1JVRkJiVU03UVVGRGFrTXNWVUZCVFVNc1kwRkJZMFFzU1VGQlNVUXNVVUZCZUVJN08wRkJSVUVzVlVGQlRVY3NaVUZCWlhCRExHZENRVUZuUW0xQ0xFdEJRV2hDTEVWQlFYVkNSU3hIUVVGMlFpeEZRVUUwUWxBc1UwRkJOVUlzUlVGQmRVTktMRVZCUVVWT0xFOUJRVVlzUjBGQldTdENMRmRCUVc1RUxFVkJRV2RGYkVJc1MwRkJhRVVzUTBGQmNrSTdRVUZEUVN4VlFVRk5iMElzWlVGQlpYSkRMR2RDUVVGblFtOUNMRXRCUVdoQ0xFVkJRWFZDUlN4SFFVRjJRaXhGUVVFMFFrNHNVMEZCTlVJc1JVRkJkVU5NTEVWQlFVVlFMRTlCUVVZc1IwRkJXU3RDTEZkQlFXNUVMRVZCUVdkRmFrSXNTMEZCYUVVc1EwRkJja0k3TzBGQlJVRXNWVUZCVFc5Q0xHbENRVU5JVml4elFrRkJjMEpSTEdWQlFXVkRMRmxCUVhSRExFbEJRME1zUTBGQlExUXNhMEpCUVVRc1NVRkJkVUpSTEdWQlFXVkRMRmxCUm5wRE96dEJRVXRCTEZWQlFVbERMR05CUVVvc1JVRkJiMEk3UVVGRGJFSXNXVUZCVFVNc1MwRkJTMFlzV1VGQldEdEJRVU5CVGl4dlFrRkJXVk1zU1VGQldpeERRVUZwUWtRc1JVRkJha0k3UVVGRFFUdEJRVU5FTzBGQlEwWTdRVUZEUmpzN1FVRkZSRHRCUVVOQk8wRkJRMEVzVFVGQlRVVXNTMEZCUzJRc05FSkJRVmc3UVVGRFFVa3NZMEZCV1ZNc1NVRkJXaXhEUVVGcFFrTXNSVUZCYWtJN08wRkJSVUU3UVVGRFFTeE5RVUZOUXl4TFFVRkxjRUlzUjBGQldEdEJRVU5CVXl4alFVRlpVeXhKUVVGYUxFTkJRV2xDUlN4RlFVRnFRanM3UVVGRlFTeFRRVUZQTEd0RFFVTkdha01zUzBGRVJUdEJRVVZNVGl4alFVRlZZU3hUUVVaTU8wRkJSMHhZTEhkQ1FVaExPMEZCU1V4RkxHTkJRVlVzZDBKQlExSXNNRUpCUVU5M1FpeFhRVUZRTEVOQlJGRXNSVUZGVW5oQ0xGRkJSbEU3UVVGS1RDeExRVUZRTzBGQlUwUXNReUlzSW1acGJHVWlPaUppYkdWdVpDMTBkMlZsYm5NdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGNuTXVhR0ZzYkM5UWNtOXFaV04wY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RIZGxaVzRnWm5KdmJTQW5MaTkwZDJWbGJpYzdYRzVwYlhCdmNuUWdleUJzYVc1bFlYSWdmU0JtY205dElDY3VMaTlwYm1NdlpXRnphVzVuSnp0Y2JtbHRjRzl5ZENCN0lHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxMQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibWx0Y0c5eWRDQjdJR1pzYjNjc0lHTnNZVzF3TENCaVpYcHBaWElnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6Snp0Y2JseHVZMjl1YzNRZ1kyeGhiWEJRY205bmNtVnpjeUE5SUdOc1lXMXdLREFzSURFcE8xeHVYRzVtZFc1amRHbHZiaUJqWVd4alZtRnNkV1ZCZEZScGJXVW9abkp2YlN3Z2RHOHNJR1IxY21GMGFXOXVMQ0JsYkdGd2MyVmtMQ0JsWVhObEtTQjdYRzRnSUdOdmJuTjBJSEJ5YjJkeVpYTnpRWFJVYVcxbElEMGdaV0Z6WlNoamJHRnRjRkJ5YjJkeVpYTnpLR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0RBc0lHUjFjbUYwYVc5dUxDQmxiR0Z3YzJWa0tTa3BPMXh1SUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb1puSnZiU3dnZEc4c0lIQnliMmR5WlhOelFYUlVhVzFsS1R0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSHNnWm5KdmJTd2dkRzhzSUc5dVZYQmtZWFJsTENCaFkyTjFjbUZqZVNBOUlEWXdMQ0F1TGk1d2NtOXdjeUI5S1NBOVBpQjdYRzRnSUM4dklFZGxkQ0IwZDJWbGJpQndjbTl3WlhKMGFXVnpYRzRnSUdOdmJuTjBJR0VnUFNCbWNtOXRPMXh1SUNCamIyNXpkQ0JpSUQwZ2RHODdYRzRnSUdOdmJuTjBJR0ZEZFhKeVpXNTBJRDBnWVM1blpYUW9LVHRjYmlBZ1kyOXVjM1FnWVVSMWNtRjBhVzl1SUQwZ1lTNW5aWFJRY205d0tDZGtkWEpoZEdsdmJpY3BPMXh1SUNCamIyNXpkQ0JpUkhWeVlYUnBiMjRnUFNCaUxtZGxkRkJ5YjNBb0oyUjFjbUYwYVc5dUp5azdYRzRnSUdOdmJuTjBJR0ZGWVhObElEMGdZUzVuWlhSUWNtOXdLQ2RsWVhObEp5azdYRzRnSUdOdmJuTjBJR0pGWVhObElEMGdZaTVuWlhSUWNtOXdLQ2RsWVhObEp5azdYRzRnSUdOdmJuTjBJR0ZHY205dElEMGdZUzVuWlhSUWNtOXdLQ2RtY205dEp5azdYRzRnSUdOdmJuTjBJR0pHY205dElEMGdZaTVuWlhSUWNtOXdLQ2RtY205dEp5azdYRzRnSUdOdmJuTjBJR0ZVYnlBOUlHRXVaMlYwVUhKdmNDZ25kRzhuS1R0Y2JpQWdZMjl1YzNRZ1lsUnZJRDBnWWk1blpYUlFjbTl3S0NkMGJ5Y3BPMXh1WEc0Z0lDOHZJRUZ1WVd4NWMyVWdkSGRsWlc1elhHNGdJR052Ym5OMElHOTJaWEpzWVhCRWRYSmhkR2x2YmlBOUlFMWhkR2d1YldsdUtHRkVkWEpoZEdsdmJpQXRJR0V1WjJWMFJXeGhjSE5sWkNncExDQmlSSFZ5WVhScGIyNHBPMXh1SUNCamIyNXpkQ0JpVm1Gc2RXVkJkRlIzWldWdVQzWmxjbXhoY0VOdmJYQnNaWFJsSUQwZ1kyRnNZMVpoYkhWbFFYUlVhVzFsS0dKR2NtOXRMQ0JpVkc4c0lHSkVkWEpoZEdsdmJpd2diM1psY214aGNFUjFjbUYwYVc5dUxDQmlSV0Z6WlNrN1hHNGdJR052Ym5OMElHSlRkR0Z5ZEhOSWFXZG9aWEpVYUdGdVFTQTlJQ2hpUm5KdmJTQStJR0ZEZFhKeVpXNTBLVHRjYmlBZ1kyOXVjM1FnWWtWdVpITklhV2RvWlhKVWFHRnVRU0E5SUNoaVZtRnNkV1ZCZEZSM1pXVnVUM1psY214aGNFTnZiWEJzWlhSbElENGdZVlJ2S1R0Y2JseHVJQ0F2THlCQ2JHVnVaQ0J3YjJsdWRITWdZWEpsSUdSbFptbHVaV1FnWVhNZ1czUWdQU0IwYVcxbExDQjJJRDBnZG1Gc2RXVkJkRlJwYldWZFhHNGdJQzh2SUZBeFhHNGdJQzh2SUZSb1pTQnpkR0Z5ZENCdlppQjBhR1VnZEhkbFpXNGdZbXhsYm1SY2JpQWdZMjl1YzNRZ1VERWdQU0JoUTNWeWNtVnVkRHRjYmlBZ1kyOXVjM1FnWW14bGJtUlFiMmx1ZEhNZ1BTQmJVREZkTzF4dVhHNGdJQzh2SUVacGJtUWdVREpjYmlBZ0x5OGdWR2hsSUhCdmMzTnBZbXhsSUdsdWRHVnljMlZqZEdsdmJpQndiMmx1ZENCaVpYUjNaV1Z1SUhSb1pTQjBkMjhnZEhkbFpXNXpYRzRnSUdOdmJuTjBJSFIzWldWdWMwbHVkR1Z5YzJWamRDQTlJQ2hpVTNSaGNuUnpTR2xuYUdWeVZHaGhia0VnSVQwOUlHSkZibVJ6U0dsbmFHVnlWR2hoYmtFcE8xeHVJQ0JwWmlBb2RIZGxaVzV6U1c1MFpYSnpaV04wS1NCN1hHNGdJQ0FnYkdWMElIUnBiV1Z6ZEdWd0lEMGdiM1psY214aGNFUjFjbUYwYVc5dUlDOGdZV05qZFhKaFkzazdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJR0ZqWTNWeVlXTjVPeUJwS3lzcElIdGNiaUFnSUNBZ0lHTnZibk4wSUhKMWJtNXBibWRVYVcxbElEMGdhU0FxSUhScGJXVnpkR1Z3TzF4dVhHNGdJQ0FnSUNCamIyNXpkQ0JoVm1Gc2RXVkJkRlJwYldVZ1BTQmpZV3hqVm1Gc2RXVkJkRlJwYldVb1lVWnliMjBzSUdGVWJ5d2dZVVIxY21GMGFXOXVMQ0JoTG1Wc1lYQnpaV1FnS3lCeWRXNXVhVzVuVkdsdFpTd2dZVVZoYzJVcE8xeHVJQ0FnSUNBZ1kyOXVjM1FnWWxaaGJIVmxRWFJVYVcxbElEMGdZMkZzWTFaaGJIVmxRWFJVYVcxbEtHSkdjbTl0TENCaVZHOHNJR0pFZFhKaGRHbHZiaXdnWWk1bGJHRndjMlZrSUNzZ2NuVnVibWx1WjFScGJXVXNJR0pGWVhObEtUdGNibHh1SUNBZ0lDQWdZMjl1YzNRZ2FHRnpTVzUwWlhKelpXTjBaV1FnUFNBb1hHNGdJQ0FnSUNBZ0lDaGlVM1JoY25SelNHbG5hR1Z5VkdoaGJrRWdKaVlnWVZaaGJIVmxRWFJVYVcxbElENGdZbFpoYkhWbFFYUlVhVzFsS1NCOGZGeHVJQ0FnSUNBZ0lDQW9JV0pUZEdGeWRITklhV2RvWlhKVWFHRnVRU0FtSmlCaFZtRnNkV1ZCZEZScGJXVWdQQ0JpVm1Gc2RXVkJkRlJwYldVcFhHNGdJQ0FnSUNBcE8xeHVYRzRnSUNBZ0lDQnBaaUFvYUdGelNXNTBaWEp6WldOMFpXUXBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdVRElnUFNCaVZtRnNkV1ZCZEZScGJXVTdYRzRnSUNBZ0lDQWdJR0pzWlc1a1VHOXBiblJ6TG5CMWMyZ29VRElwTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2THlCUU0xeHVJQ0F2THlCVWFHVWdjRzlwYm5SeklIUm9aU0IwZDI4Z2RIZGxaVzV6SUhOMGIzQWdiM1psY214aGNIQnBibWRjYmlBZ1kyOXVjM1FnVURNZ1BTQmlWbUZzZFdWQmRGUjNaV1Z1VDNabGNteGhjRU52YlhCc1pYUmxPMXh1SUNCaWJHVnVaRkJ2YVc1MGN5NXdkWE5vS0ZBektUdGNibHh1SUNBdkx5QlFkWE5vSUhSb1pTQmxibVFnYzNSaGRHVWdiMllnWWlCMGQyVmxiaUJoY3lCbWFXNWhiQ0JqYjI1MGNtOXNJSEJ2YVc1MFhHNGdJR052Ym5OMElGQTBJRDBnWWxSdk8xeHVJQ0JpYkdWdVpGQnZhVzUwY3k1d2RYTm9LRkEwS1R0Y2JseHVJQ0J5WlhSMWNtNGdkSGRsWlc0b2UxeHVJQ0FnSUM0dUxuQnliM0J6TEZ4dUlDQWdJR1IxY21GMGFXOXVPaUJpUkhWeVlYUnBiMjRzWEc0Z0lDQWdaV0Z6WlRvZ2JHbHVaV0Z5TEZ4dUlDQWdJRzl1VlhCa1lYUmxPaUJtYkc5M0tGeHVJQ0FnSUNBZ1ltVjZhV1Z5S0dKc1pXNWtVRzlwYm5SektTeGNiaUFnSUNBZ0lHOXVWWEJrWVhSbFhHNGdJQ0FnS1Z4dUlDQjlLVHRjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDaGFpbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDaGFpbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ2hhaW4ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhaW4pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5wbGF5TmV4dCA9IF90aGlzLnBsYXlOZXh0LmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIENoYWluLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB0aGlzLnByb3BzLmkgPSAwO1xuICAgIHRoaXMucGxheUN1cnJlbnQoKTtcbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUucGxheU5leHQgPSBmdW5jdGlvbiBwbGF5TmV4dCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaSA9IF9wcm9wcy5pLFxuICAgICAgICBvcmRlciA9IF9wcm9wcy5vcmRlcjtcblxuICAgIGlmIChpIDwgb3JkZXIubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5wcm9wcy5pKys7XG4gICAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLnBsYXlDdXJyZW50ID0gZnVuY3Rpb24gcGxheUN1cnJlbnQoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBpID0gX3Byb3BzMi5pLFxuICAgICAgICBvcmRlciA9IF9wcm9wczIub3JkZXI7XG5cbiAgICBvcmRlcltpXS5wcm9wcy5fb25Db21wbGV0ZSA9IHRoaXMucGxheU5leHQ7XG4gICAgb3JkZXJbaV0uc3RhcnQoKTtcbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaSA9IF9wcm9wczMuaSxcbiAgICAgICAgb3JkZXIgPSBfcHJvcHMzLm9yZGVyO1xuXG4gICAgb3JkZXJbaV0uc3RvcCgpO1xuICB9O1xuXG4gIHJldHVybiBDaGFpbjtcbn0oXzIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcmRlciwgb25Db21wbGV0ZSkge1xuICByZXR1cm4gbmV3IENoYWluKHsgb3JkZXI6IG9yZGVyLCBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk5vWVdsdUxtcHpJbDBzSW01aGJXVnpJanBiSWtOb1lXbHVJaXdpY0hKdmNITWlMQ0p3YkdGNVRtVjRkQ0lzSW1KcGJtUWlMQ0p2YmxOMFlYSjBJaXdpYVNJc0luQnNZWGxEZFhKeVpXNTBJaXdpYjNKa1pYSWlMQ0pzWlc1bmRHZ2lMQ0pqYjIxd2JHVjBaU0lzSWw5dmJrTnZiWEJzWlhSbElpd2ljM1JoY25RaUxDSnZibE4wYjNBaUxDSnpkRzl3SWl3aWIyNURiMjF3YkdWMFpTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN096czdPenM3T3pzN1NVRkZUVUVzU3pzN08wRkJRMG9zYVVKQlFWbERMRXRCUVZvc1JVRkJiVUk3UVVGQlFUczdRVUZCUVN4cFJFRkRha0lzYlVKQlFVMUJMRXRCUVU0c1EwRkVhVUk3TzBGQlJXcENMRlZCUVV0RExGRkJRVXdzUjBGQlowSXNUVUZCUzBFc1VVRkJUQ3hEUVVGalF5eEpRVUZrTEU5QlFXaENPMEZCUm1sQ08wRkJSMnhDT3p0clFrRkZSRU1zVHl4elFrRkJWVHRCUVVOU0xGTkJRVXRJTEV0QlFVd3NRMEZCVjBrc1EwRkJXQ3hIUVVGbExFTkJRV1k3UVVGRFFTeFRRVUZMUXl4WFFVRk1PMEZCUTBRc1J6czdhMEpCUlVSS0xGRXNkVUpCUVZjN1FVRkJRU3hwUWtGRFdTeExRVUZMUkN4TFFVUnFRanRCUVVGQkxGRkJRMFJKTEVOQlJFTXNWVUZEUkVFc1EwRkVRenRCUVVGQkxGRkJRMFZGTEV0QlJFWXNWVUZEUlVFc1MwRkVSanM3UVVGRlZDeFJRVUZKUml4SlFVRkpSU3hOUVVGTlF5eE5RVUZPTEVkQlFXVXNRMEZCZGtJc1JVRkJNRUk3UVVGRGVFSXNWMEZCUzFBc1MwRkJUQ3hEUVVGWFNTeERRVUZZTzBGQlEwRXNWMEZCUzBNc1YwRkJURHRCUVVORUxFdEJTRVFzVFVGSFR6dEJRVU5NTEZkQlFVdEhMRkZCUVV3N1FVRkRSRHRCUVVOR0xFYzdPMnRDUVVWRVNDeFhMREJDUVVGak8wRkJRVUVzYTBKQlExTXNTMEZCUzB3c1MwRkVaRHRCUVVGQkxGRkJRMHBKTEVOQlJFa3NWMEZEU2tFc1EwRkVTVHRCUVVGQkxGRkJRMFJGTEV0QlJFTXNWMEZEUkVFc1MwRkVRenM3UVVGRldrRXNWVUZCVFVZc1EwRkJUaXhGUVVGVFNpeExRVUZVTEVOQlFXVlRMRmRCUVdZc1IwRkJOa0lzUzBGQlMxSXNVVUZCYkVNN1FVRkRRVXNzVlVGQlRVWXNRMEZCVGl4RlFVRlRUU3hMUVVGVU8wRkJRMFFzUnpzN2EwSkJSVVJETEUwc2NVSkJRVk03UVVGQlFTeHJRa0ZEWXl4TFFVRkxXQ3hMUVVSdVFqdEJRVUZCTEZGQlEwTkpMRU5CUkVRc1YwRkRRMEVzUTBGRVJEdEJRVUZCTEZGQlEwbEZMRXRCUkVvc1YwRkRTVUVzUzBGRVNqczdRVUZGVUVFc1ZVRkJUVVlzUTBGQlRpeEZRVUZUVVN4SlFVRlVPMEZCUTBRc1J6czdPenM3YTBKQlIxa3NWVUZCUTA0c1MwRkJSQ3hGUVVGUlR5eFZRVUZTTzBGQlFVRXNVMEZCZFVJc1NVRkJTV1FzUzBGQlNpeERRVUZWTEVWQlFVVlBMRmxCUVVZc1JVRkJVMDhzYzBKQlFWUXNSVUZCVml4RFFVRjJRanRCUVVGQkxFTWlMQ0ptYVd4bElqb2lZMmhoYVc0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGNuTXVhR0ZzYkM5UWNtOXFaV04wY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2Snp0Y2JseHVZMnhoYzNNZ1EyaGhhVzRnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhOMWNHVnlLSEJ5YjNCektUdGNiaUFnSUNCMGFHbHpMbkJzWVhsT1pYaDBJRDBnZEdocGN5NXdiR0Y1VG1WNGRDNWlhVzVrS0hSb2FYTXBPMXh1SUNCOVhHNWNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0IwYUdsekxuQnliM0J6TG1rZ1BTQXdPMXh1SUNBZ0lIUm9hWE11Y0d4aGVVTjFjbkpsYm5Rb0tUdGNiaUFnZlZ4dVhHNGdJSEJzWVhsT1pYaDBLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dhU3dnYjNKa1pYSWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnYVdZZ0tHa2dQQ0J2Y21SbGNpNXNaVzVuZEdnZ0xTQXhLU0I3WEc0Z0lDQWdJQ0IwYUdsekxuQnliM0J6TG1rckt6dGNiaUFnSUNBZ0lIUm9hWE11Y0d4aGVVTjFjbkpsYm5Rb0tUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnZEdocGN5NWpiMjF3YkdWMFpTZ3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEJzWVhsRGRYSnlaVzUwS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYVN3Z2IzSmtaWElnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ2IzSmtaWEpiYVYwdWNISnZjSE11WDI5dVEyOXRjR3hsZEdVZ1BTQjBhR2x6TG5Cc1lYbE9aWGgwTzF4dUlDQWdJRzl5WkdWeVcybGRMbk4wWVhKMEtDazdYRzRnSUgxY2JseHVJQ0J2YmxOMGIzQW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QnBMQ0J2Y21SbGNpQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0J2Y21SbGNsdHBYUzV6ZEc5d0tDazdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLRzl5WkdWeUxDQnZia052YlhCc1pYUmxLU0E5UGlCdVpYY2dRMmhoYVc0b2V5QnZjbVJsY2l3Z2IyNURiMjF3YkdWMFpTQjlLVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY2hhaW4uanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi4vaW5jL3ZhbHVlLXR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBub29wID0gZnVuY3Rpb24gKCkge307XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gKDAsIF90d2VlbjIuZGVmYXVsdCkoX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgZnJvbTogMCxcbiAgICB0bzogMSxcbiAgICBvblVwZGF0ZTogKDAsIF90cmFuc2Zvcm1lcnMuZmxvdykoKDAsIF90cmFuc2Zvcm1lcnMuYmxlbmRDb2xvcikocHJvcHMuZnJvbSwgcHJvcHMudG8pLCBfdmFsdWVUeXBlcy5jb2xvci50cmFuc2Zvcm0sIHByb3BzLm9uVXBkYXRlIHx8IG5vb3ApXG4gIH0pKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOdmJHOXlMWFIzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiSW01dmIzQWlMQ0p3Y205d2N5SXNJbVp5YjIwaUxDSjBieUlzSW05dVZYQmtZWFJsSWl3aWRISmhibk5tYjNKdElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZCUVRzN096dEJRVU5CT3p0QlFVTkJPenM3TzBGQlJVRXNTVUZCVFVFc1QwRkJUeXhaUVVGTkxFTkJRVVVzUTBGQmNrSTdPMnRDUVVWbExGVkJRVU5ETEV0QlFVUXNSVUZCVnp0QlFVTjRRaXhUUVVGUExHdERRVU5HUVN4TFFVUkZPMEZCUlV4RExGVkJRVTBzUTBGR1JEdEJRVWRNUXl4UlFVRkpMRU5CU0VNN1FVRkpURU1zWTBGQlZTeDNRa0ZEVWl3NFFrRkJWMGdzVFVGQlRVTXNTVUZCYWtJc1JVRkJkVUpFTEUxQlFVMUZMRVZCUVRkQ0xFTkJSRkVzUlVGRlVpeHJRa0ZCVFVVc1UwRkdSU3hGUVVkU1NpeE5RVUZOUnl4UlFVRk9MRWxCUVd0Q1NpeEpRVWhXTzBGQlNrd3NTMEZCVUR0QlFWVkVMRU1pTENKbWFXeGxJam9pWTI5c2IzSXRkSGRsWlc0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGNuTXVhR0ZzYkM5UWNtOXFaV04wY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RIZGxaVzRnWm5KdmJTQW5MaTkwZDJWbGJpYzdYRzVwYlhCdmNuUWdleUJpYkdWdVpFTnZiRzl5TENCbWJHOTNJSDBnWm5KdmJTQW5MaTR2YVc1akwzUnlZVzV6Wm05eWJXVnljeWM3WEc1cGJYQnZjblFnZXlCamIyeHZjaUI5SUdaeWIyMGdKeTR1TDJsdVl5OTJZV3gxWlMxMGVYQmxjeWM3WEc1Y2JtTnZibk4wSUc1dmIzQWdQU0FvS1NBOVBpQjdmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hCeWIzQnpLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQjBkMlZsYmloN1hHNGdJQ0FnTGk0dWNISnZjSE1zWEc0Z0lDQWdabkp2YlRvZ01DeGNiaUFnSUNCMGJ6b2dNU3hjYmlBZ0lDQnZibFZ3WkdGMFpUb2dabXh2ZHloY2JpQWdJQ0FnSUdKc1pXNWtRMjlzYjNJb2NISnZjSE11Wm5KdmJTd2djSEp2Y0hNdWRHOHBMRnh1SUNBZ0lDQWdZMjlzYjNJdWRISmhibk5tYjNKdExGeHVJQ0FnSUNBZ2NISnZjSE11YjI1VmNHUmhkR1VnZkh3Z2JtOXZjRnh1SUNBZ0lDbGNiaUFnZlNrN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9jb2xvci10d2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENvbXBvc2l0ZUFjdGlvbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDb21wb3NpdGVBY3Rpb24sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENvbXBvc2l0ZUFjdGlvbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb3NpdGVBY3Rpb24pO1xuXG4gICAgdmFyIGFjdGlvbnMgPSBwcm9wcy5hY3Rpb25zLFxuICAgICAgICByZW1haW5pbmdQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWydhY3Rpb25zJ10pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHJlbWFpbmluZ1Byb3BzKSk7XG5cbiAgICBfdGhpcy5jdXJyZW50ID0ge307XG4gICAgX3RoaXMuYWN0aW9uS2V5cyA9IFtdO1xuICAgIF90aGlzLmFkZEFjdGlvbnMocHJvcHMuYWN0aW9ucyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5hZGRBY3Rpb25zID0gZnVuY3Rpb24gYWRkQWN0aW9ucyhhY3Rpb25zKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoX3RoaXMyLmFjdGlvbktleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICBfdGhpczIuYWN0aW9uS2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzMltrZXldID0gYWN0aW9uc1trZXldO1xuXG4gICAgICB2YXIgb25VcGRhdGUgPSBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gX3RoaXMyLmN1cnJlbnRba2V5XSA9IHY7XG4gICAgICB9OztcblxuICAgICAgLy8gSW1tZWRpYXRlbHkgdXBkYXRlIHdpdGggdGhlIGN1cnJlbnQgYWN0aW9uIHN0YXRlXG4gICAgICBvblVwZGF0ZShfdGhpczJba2V5XS5nZXQoKSk7XG5cbiAgICAgIF90aGlzMltrZXldLnNldFByb3BzKHtcbiAgICAgICAgX29uU3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIubnVtQWN0aXZlQWN0aW9ucy0tO1xuICAgICAgICB9XG4gICAgICB9KS5hZGRMaXN0ZW5lcihvblVwZGF0ZSk7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGtleSBpbiBhY3Rpb25zKSB7XG4gICAgICBfbG9vcChrZXkpO1xuICAgIH1cbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gdGhpcy5hY3Rpb25LZXlzLmxlbmd0aDtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXMzW2tleV0uc3RhcnQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczRba2V5XS5zdG9wKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5nZXRWZWxvY2l0eSA9IGZ1bmN0aW9uIGdldFZlbG9jaXR5KCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIHZlbG9jaXR5ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHZlbG9jaXR5W2tleV0gPSBfdGhpczVba2V5XS5nZXRWZWxvY2l0eSgpO1xuICAgIH0pO1xuICAgIHJldHVybiB2ZWxvY2l0eTtcbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDA7XG4gIH07XG5cbiAgcmV0dXJuIENvbXBvc2l0ZUFjdGlvbjtcbn0oXzIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhY3Rpb25zLCBwcm9wcykge1xuICByZXR1cm4gbmV3IENvbXBvc2l0ZUFjdGlvbihfZXh0ZW5kcyh7XG4gICAgYWN0aW9uczogYWN0aW9uc1xuICB9LCBwcm9wcykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk52YlhCdmMybDBaUzVxY3lKZExDSnVZVzFsY3lJNld5SkRiMjF3YjNOcGRHVkJZM1JwYjI0aUxDSndjbTl3Y3lJc0ltRmpkR2x2Ym5NaUxDSnlaVzFoYVc1cGJtZFFjbTl3Y3lJc0ltTjFjbkpsYm5RaUxDSmhZM1JwYjI1TFpYbHpJaXdpWVdSa1FXTjBhVzl1Y3lJc0ltdGxlU0lzSW1sdVpHVjRUMllpTENKd2RYTm9JaXdpYjI1VmNHUmhkR1VpTENKMklpd2laMlYwSWl3aWMyVjBVSEp2Y0hNaUxDSmZiMjVUZEc5d0lpd2liblZ0UVdOMGFYWmxRV04wYVc5dWN5SXNJbUZrWkV4cGMzUmxibVZ5SWl3aWIyNVRkR0Z5ZENJc0lteGxibWQwYUNJc0ltWnZja1ZoWTJnaUxDSnpkR0Z5ZENJc0ltOXVVM1J2Y0NJc0luTjBiM0FpTENKblpYUldaV3h2WTJsMGVTSXNJblpsYkc5amFYUjVJaXdpYVhOQlkzUnBiMjVEYjIxd2JHVjBaU0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenM3T3pzN096czdPMGxCUlUxQkxHVTdPenRCUVVOS0xESkNRVUZaUXl4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlFVRXNVVUZEVkVNc1QwRkVVeXhIUVVOelFrUXNTMEZFZEVJc1EwRkRWRU1zVDBGRVV6dEJRVUZCTEZGQlEwZERMR05CUkVnc05FSkJRM05DUml4TFFVUjBRanM3UVVGQlFTeHBSRUZGYWtJc2JVSkJRVTFGTEdOQlFVNHNRMEZHYVVJN08wRkJSMnBDTEZWQlFVdERMRTlCUVV3c1IwRkJaU3hGUVVGbU8wRkJRMEVzVlVGQlMwTXNWVUZCVEN4SFFVRnJRaXhGUVVGc1FqdEJRVU5CTEZWQlFVdERMRlZCUVV3c1EwRkJaMEpNTEUxQlFVMURMRTlCUVhSQ08wRkJUR2xDTzBGQlRXeENPenMwUWtGRlJFa3NWU3gxUWtGQlYwb3NUeXhGUVVGVE8wRkJRVUU3TzBGQlFVRXNNRUpCUTFCTExFZEJSRTg3UVVGRmFFSXNWVUZCU1N4UFFVRkxSaXhWUVVGTUxFTkJRV2RDUnl4UFFVRm9RaXhEUVVGM1FrUXNSMEZCZUVJc1RVRkJhVU1zUTBGQlF5eERRVUYwUXl4RlFVRjVRenRCUVVOMlF5eGxRVUZMUml4VlFVRk1MRU5CUVdkQ1NTeEpRVUZvUWl4RFFVRnhRa1lzUjBGQmNrSTdRVUZEUkRzN1FVRkZSQ3hoUVVGTFFTeEhRVUZNTEVsQlFWbE1MRkZCUVZGTExFZEJRVklzUTBGQldqczdRVUZGUVN4VlFVRk5SeXhYUVVGWExGVkJRVU5ETEVOQlFVUTdRVUZCUVN4bFFVRlBMRTlCUVV0UUxFOUJRVXdzUTBGQllVY3NSMEZCWWl4SlFVRnZRa2tzUTBGQk0wSTdRVUZCUVN4UFFVRnFRaXhEUVVFNFF6czdRVUZGT1VNN1FVRkRRVVFzWlVGQlV5eFBRVUZMU0N4SFFVRk1MRVZCUVZWTExFZEJRVllzUlVGQlZEczdRVUZGUVN4aFFVRkxUQ3hIUVVGTUxFVkJRMGROTEZGQlJFZ3NRMEZEV1R0QlFVTlNReXhwUWtGQlV6dEJRVUZCTEdsQ1FVRk5MRTlCUVV0RExHZENRVUZNTEVWQlFVNDdRVUZCUVR0QlFVUkVMRTlCUkZvc1JVRkpSME1zVjBGS1NDeERRVWxsVGl4UlFVcG1PMEZCWW1kQ096dEJRVU5zUWl4VFFVRkxMRWxCUVUxSUxFZEJRVmdzU1VGQmEwSk1MRTlCUVd4Q0xFVkJRVEpDTzBGQlFVRXNXVUZCYUVKTExFZEJRV2RDTzBGQmFVSXhRanRCUVVOR0xFYzdPelJDUVVWRVZTeFBMSE5DUVVGVk8wRkJRVUU3TzBGQlExSXNVMEZCUzBZc1owSkJRVXdzUjBGQmQwSXNTMEZCUzFZc1ZVRkJUQ3hEUVVGblFtRXNUVUZCZUVNN1FVRkRRU3hUUVVGTFlpeFZRVUZNTEVOQlFXZENZeXhQUVVGb1FpeERRVUYzUWl4VlFVRkRXaXhIUVVGRU8wRkJRVUVzWVVGQlV5eFBRVUZMUVN4SFFVRk1MRVZCUVZWaExFdEJRVllzUlVGQlZEdEJRVUZCTEV0QlFYaENPMEZCUTBRc1J6czdORUpCUlVSRExFMHNjVUpCUVZNN1FVRkJRVHM3UVVGRFVDeFRRVUZMYUVJc1ZVRkJUQ3hEUVVGblFtTXNUMEZCYUVJc1EwRkJkMElzVlVGQlExb3NSMEZCUkR0QlFVRkJMR0ZCUVZNc1QwRkJTMEVzUjBGQlRDeEZRVUZWWlN4SlFVRldMRVZCUVZRN1FVRkJRU3hMUVVGNFFqdEJRVU5FTEVjN096UkNRVVZFUXl4WExEQkNRVUZqTzBGQlFVRTdPMEZCUTFvc1VVRkJUVU1zVjBGQlZ5eEZRVUZxUWp0QlFVTkJMRk5CUVV0dVFpeFZRVUZNTEVOQlFXZENZeXhQUVVGb1FpeERRVUYzUWl4VlFVRkRXaXhIUVVGRU8wRkJRVUVzWVVGQlUybENMRk5CUVZOcVFpeEhRVUZVTEVsQlFXZENMRTlCUVV0QkxFZEJRVXdzUlVGQlZXZENMRmRCUVZZc1JVRkJla0k3UVVGQlFTeExRVUY0UWp0QlFVTkJMRmRCUVU5RExGRkJRVkE3UVVGRFJDeEhPenMwUWtGRlJFTXNaMElzSzBKQlFXMUNPMEZCUTJwQ0xGZEJRVkVzUzBGQlMxWXNaMEpCUVV3c1MwRkJNRUlzUTBGQmJFTTdRVUZEUkN4SE96czdPenRyUWtGSFdTeFZRVUZEWWl4UFFVRkVMRVZCUVZWRUxFdEJRVllzUlVGQmIwSTdRVUZEYWtNc1UwRkJUeXhKUVVGSlJDeGxRVUZLTzBGQlEweEZPMEZCUkVzc1MwRkZSa1FzUzBGR1JTeEZRVUZRTzBGQlNVUXNReUlzSW1acGJHVWlPaUpqYjIxd2IzTnBkR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoY25NdWFHRnNiQzlRY205cVpXTjBjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYm1sdGNHOXlkQ0I3SUc5dVJuSmhiV1ZWY0dSaGRHVWdmU0JtY205dElDY3VMaTltY21GdFpYTjVibU1uTzF4dVhHNWpiR0Z6Y3lCRGIyMXdiM05wZEdWQlkzUnBiMjRnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWVdOMGFXOXVjeXdnTGk0dWNtVnRZV2x1YVc1blVISnZjSE1nZlNBOUlIQnliM0J6TzF4dUlDQWdJSE4xY0dWeUtISmxiV0ZwYm1sdVoxQnliM0J6S1R0Y2JpQWdJQ0IwYUdsekxtTjFjbkpsYm5RZ1BTQjdmVHRjYmlBZ0lDQjBhR2x6TG1GamRHbHZia3RsZVhNZ1BTQmJYVHRjYmlBZ0lDQjBhR2x6TG1Ga1pFRmpkR2x2Ym5Nb2NISnZjSE11WVdOMGFXOXVjeWs3WEc0Z0lIMWNibHh1SUNCaFpHUkJZM1JwYjI1ektHRmpkR2x2Ym5NcElIdGNiaUFnSUNCbWIzSWdLR052Ym5OMElHdGxlU0JwYmlCaFkzUnBiMjV6S1NCN1hHNGdJQ0FnSUNCcFppQW9kR2hwY3k1aFkzUnBiMjVMWlhsekxtbHVaR1Y0VDJZb2EyVjVLU0E5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWhZM1JwYjI1TFpYbHpMbkIxYzJnb2EyVjVLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnZEdocGMxdHJaWGxkSUQwZ1lXTjBhVzl1YzF0clpYbGRPMXh1WEc0Z0lDQWdJQ0JqYjI1emRDQnZibFZ3WkdGMFpTQTlJQ2gyS1NBOVBpQjBhR2x6TG1OMWNuSmxiblJiYTJWNVhTQTlJSFk3TzF4dVhHNGdJQ0FnSUNBdkx5QkpiVzFsWkdsaGRHVnNlU0IxY0dSaGRHVWdkMmwwYUNCMGFHVWdZM1Z5Y21WdWRDQmhZM1JwYjI0Z2MzUmhkR1ZjYmlBZ0lDQWdJRzl1VlhCa1lYUmxLSFJvYVhOYmEyVjVYUzVuWlhRb0tTazdYRzVjYmlBZ0lDQWdJSFJvYVhOYmEyVjVYVnh1SUNBZ0lDQWdJQ0F1YzJWMFVISnZjSE1vZTF4dUlDQWdJQ0FnSUNBZ0lGOXZibE4wYjNBNklDZ3BJRDArSUhSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5MHRYRzRnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0FnSUM1aFpHUk1hWE4wWlc1bGNpaHZibFZ3WkdGMFpTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQjBhR2x6TG01MWJVRmpkR2wyWlVGamRHbHZibk1nUFNCMGFHbHpMbUZqZEdsdmJrdGxlWE11YkdWdVozUm9PMXh1SUNBZ0lIUm9hWE11WVdOMGFXOXVTMlY1Y3k1bWIzSkZZV05vS0NoclpYa3BJRDArSUhSb2FYTmJhMlY1WFM1emRHRnlkQ2dwS1R0Y2JpQWdmVnh1WEc0Z0lHOXVVM1J2Y0NncElIdGNiaUFnSUNCMGFHbHpMbUZqZEdsdmJrdGxlWE11Wm05eVJXRmphQ2dvYTJWNUtTQTlQaUIwYUdselcydGxlVjB1YzNSdmNDZ3BLVHRjYmlBZ2ZWeHVYRzRnSUdkbGRGWmxiRzlqYVhSNUtDa2dlMXh1SUNBZ0lHTnZibk4wSUhabGJHOWphWFI1SUQwZ2UzMDdYRzRnSUNBZ2RHaHBjeTVoWTNScGIyNUxaWGx6TG1admNrVmhZMmdvS0d0bGVTa2dQVDRnZG1Wc2IyTnBkSGxiYTJWNVhTQTlJSFJvYVhOYmEyVjVYUzVuWlhSV1pXeHZZMmwwZVNncEtUdGNiaUFnSUNCeVpYUjFjbTRnZG1Wc2IyTnBkSGs3WEc0Z0lIMWNibHh1SUNCcGMwRmpkR2x2YmtOdmJYQnNaWFJsS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUFvZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1eklEMDlQU0F3S1R0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1lXTjBhVzl1Y3l3Z2NISnZjSE1wSUQwK0lIdGNiaUFnY21WMGRYSnVJRzVsZHlCRGIyMXdiM05wZEdWQlkzUnBiMjRvZTF4dUlDQWdJR0ZqZEdsdmJuTXNYRzRnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdmU2s3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxudmFyIF9lYXNpbmcgPSByZXF1aXJlKCcuLi9pbmMvZWFzaW5nJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENyb3NzRmFkZSA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDcm9zc0ZhZGUsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENyb3NzRmFkZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ3Jvc3NGYWRlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ3Jvc3NGYWRlLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb24sXG4gICAgICAgIGVhc2UgPSBfcHJvcHMuZWFzZSxcbiAgICAgICAgZmFkZXIgPSBfcHJvcHMuZmFkZXI7XG5cblxuICAgIHRoaXMuZmFkZXIgPSBmYWRlciB8fCAoMCwgX3R3ZWVuMi5kZWZhdWx0KSh7XG4gICAgICB0bzogMSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGVhc2U6IGVhc2VcbiAgICB9KS5zdGFydCgpO1xuICB9O1xuXG4gIENyb3NzRmFkZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZnJvbSA9IF9wcm9wczIuZnJvbSxcbiAgICAgICAgdG8gPSBfcHJvcHMyLnRvO1xuXG4gICAgdmFyIGJhbGFuY2UgPSB0aGlzLmZhZGVyLmdldCgpO1xuICAgIHZhciBsYXRlc3RGcm9tVmFsdWUgPSBmcm9tLmdldCgpO1xuICAgIHZhciBsYXRlc3RUb1ZhbHVlID0gdG8uZ2V0KCk7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykobGF0ZXN0RnJvbVZhbHVlLCBsYXRlc3RUb1ZhbHVlLCBiYWxhbmNlKTtcbiAgfTtcblxuICByZXR1cm4gQ3Jvc3NGYWRlO1xufShfMi5kZWZhdWx0KTtcblxuQ3Jvc3NGYWRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZWFzZTogX2Vhc2luZy5saW5lYXJcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IENyb3NzRmFkZShwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnliM056TFdaaFpHVXVhbk1pWFN3aWJtRnRaWE1pT2xzaVEzSnZjM05HWVdSbElpd2liMjVUZEdGeWRDSXNJbkJ5YjNCeklpd2laSFZ5WVhScGIyNGlMQ0psWVhObElpd2labUZrWlhJaUxDSjBieUlzSW5OMFlYSjBJaXdpZFhCa1lYUmxJaXdpWm5KdmJTSXNJbUpoYkdGdVkyVWlMQ0puWlhRaUxDSnNZWFJsYzNSR2NtOXRWbUZzZFdVaUxDSnNZWFJsYzNSVWIxWmhiSFZsSWl3aVpHVm1ZWFZzZEZCeWIzQnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3p0QlFVTkJPenM3T3pzN096czdPMGxCUlUxQkxGTTdPenM3T3pzN096dHpRa0ZMU2tNc1R5eHpRa0ZCVlR0QlFVRkJMR2xDUVVNd1FpeExRVUZMUXl4TFFVUXZRanRCUVVGQkxGRkJRMEZETEZGQlJFRXNWVUZEUVVFc1VVRkVRVHRCUVVGQkxGRkJRMVZETEVsQlJGWXNWVUZEVlVFc1NVRkVWanRCUVVGQkxGRkJRMmRDUXl4TFFVUm9RaXhWUVVOblFrRXNTMEZFYUVJN096dEJRVWRTTEZOQlFVdEJMRXRCUVV3c1IwRkJZVUVzVTBGQlV5eHhRa0ZCVFR0QlFVTXhRa01zVlVGQlNTeERRVVJ6UWp0QlFVVXhRa2dzZDBKQlJqQkNPMEZCUnpGQ1F6dEJRVWd3UWl4TFFVRk9MRVZCU1c1Q1J5eExRVXB0UWl4RlFVRjBRanRCUVV0RUxFYzdPM05DUVVWRVF5eE5MSEZDUVVGVE8wRkJRVUVzYTBKQlEyTXNTMEZCUzA0c1MwRkVia0k3UVVGQlFTeFJRVU5EVHl4SlFVUkVMRmRCUTBOQkxFbEJSRVE3UVVGQlFTeFJRVU5QU0N4RlFVUlFMRmRCUTA5QkxFVkJSRkE3TzBGQlJWQXNVVUZCVFVrc1ZVRkJWU3hMUVVGTFRDeExRVUZNTEVOQlFWZE5MRWRCUVZnc1JVRkJhRUk3UVVGRFFTeFJRVUZOUXl4clFrRkJhMEpJTEV0QlFVdEZMRWRCUVV3c1JVRkJlRUk3UVVGRFFTeFJRVUZOUlN4blFrRkJaMEpRTEVkQlFVZExMRWRCUVVnc1JVRkJkRUk3UVVGRFFTeFhRVUZQTEdkRFFVRnhRa01zWlVGQmNrSXNSVUZCYzBORExHRkJRWFJETEVWQlFYRkVTQ3hQUVVGeVJDeERRVUZRTzBGQlEwUXNSenM3T3pzN1FVRnlRa2RXTEZNc1EwRkRSMk1zV1N4SFFVRmxPMEZCUTNCQ1ZqdEJRVVJ2UWl4RE96dHJRa0YxUWxRc1ZVRkJRMFlzUzBGQlJEdEJRVUZCTEZOQlFWY3NTVUZCU1VZc1UwRkJTaXhEUVVGalJTeExRVUZrTEVOQlFWZzdRVUZCUVN4RElpd2labWxzWlNJNkltTnliM056TFdaaFpHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk11YUdGc2JDOVFjbTlxWldOMGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dkp6dGNibWx0Y0c5eWRDQjBkMlZsYmlCbWNtOXRJQ2N1TDNSM1pXVnVKenRjYm1sdGNHOXlkQ0I3SUd4cGJtVmhjaUI5SUdaeWIyMGdKeTR1TDJsdVl5OWxZWE5wYm1jbk8xeHVhVzF3YjNKMElIc2daMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01nZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNWNibU5zWVhOeklFTnliM056Um1Ga1pTQmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJSE4wWVhScFl5QmtaV1poZFd4MFVISnZjSE1nUFNCN1hHNGdJQ0FnWldGelpUb2diR2x1WldGeVhHNGdJSDFjYmx4dUlDQnZibE4wWVhKMEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1pIVnlZWFJwYjI0c0lHVmhjMlVzSUdaaFpHVnlJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2RHaHBjeTVtWVdSbGNpQTlJR1poWkdWeUlIeDhJSFIzWldWdUtIdGNiaUFnSUNBZ0lIUnZPaUF4TEZ4dUlDQWdJQ0FnWkhWeVlYUnBiMjRzWEc0Z0lDQWdJQ0JsWVhObFhHNGdJQ0FnZlNrdWMzUmhjblFvS1R0Y2JpQWdmVnh1WEc0Z0lIVndaR0YwWlNncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdaeWIyMHNJSFJ2SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHTnZibk4wSUdKaGJHRnVZMlVnUFNCMGFHbHpMbVpoWkdWeUxtZGxkQ2dwTzF4dUlDQWdJR052Ym5OMElHeGhkR1Z6ZEVaeWIyMVdZV3gxWlNBOUlHWnliMjB1WjJWMEtDazdYRzRnSUNBZ1kyOXVjM1FnYkdGMFpYTjBWRzlXWVd4MVpTQTlJSFJ2TG1kbGRDZ3BPMXh1SUNBZ0lISmxkSFZ5YmlCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aHNZWFJsYzNSR2NtOXRWbUZzZFdVc0lHeGhkR1Z6ZEZSdlZtRnNkV1VzSUdKaGJHRnVZMlVwTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNod2NtOXdjeWtnUFQ0Z2JtVjNJRU55YjNOelJtRmtaU2h3Y205d2N5azdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9jcm9zcy1mYWRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90d2VlbiA9IHJlcXVpcmUoJy4vdHdlZW4nKTtcblxudmFyIF90d2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2Vlbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChkdXJhdGlvbiwgb25Db21wbGV0ZSkge1xuICByZXR1cm4gKDAsIF90d2VlbjIuZGVmYXVsdCkoeyBkdXJhdGlvbjogZHVyYXRpb24sIG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyUmxiR0Y1TG1weklsMHNJbTVoYldWeklqcGJJbVIxY21GMGFXOXVJaXdpYjI1RGIyMXdiR1YwWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3T3pzN2EwSkJSV1VzVlVGQlEwRXNVVUZCUkN4RlFVRlhReXhWUVVGWU8wRkJRVUVzVTBGQk1FSXNjVUpCUVUwc1JVRkJSVVFzYTBKQlFVWXNSVUZCV1VNc2MwSkJRVm9zUlVGQlRpeERRVUV4UWp0QlFVRkJMRU1pTENKbWFXeGxJam9pWkdWc1lYa3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk11YUdGc2JDOVFjbTlxWldOMGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkSGRsWlc0Z1puSnZiU0FuTGk5MGQyVmxiaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoa2RYSmhkR2x2Yml3Z2IyNURiMjF3YkdWMFpTa2dQVDRnZEhkbFpXNG9leUJrZFhKaGRHbHZiaXdnYjI1RGIyMXdiR1YwWlNCOUtUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9kZWxheS5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGFyYWxsZWwgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoUGFyYWxsZWwsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFBhcmFsbGVsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXJhbGxlbCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBhY3Rpb25zID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuXG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gYWN0aW9ucy5sZW5ndGg7XG5cbiAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgYWN0aW9uLnNldFByb3BzKHtcbiAgICAgICAgX29uU3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIubnVtQWN0aXZlQWN0aW9ucy0tO1xuICAgICAgICB9XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgcmV0dXJuIGFjdGlvbi5zdG9wKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLmFkZEFjdGlvbiA9IGZ1bmN0aW9uIGFkZEFjdGlvbihhY3Rpb24pIHtcbiAgICB2YXIgYWN0aW9ucyA9IHRoaXMucHJvcHMuYWN0aW9ucztcblxuXG4gICAgaWYgKGFjdGlvbnMuaW5kZXhPZihhY3Rpb24pID09PSAtMSkge1xuICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwO1xuICB9O1xuXG4gIHJldHVybiBQYXJhbGxlbDtcbn0oXzIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhY3Rpb25zLCBwcm9wcykge1xuICByZXR1cm4gbmV3IFBhcmFsbGVsKF9leHRlbmRzKHsgYWN0aW9uczogYWN0aW9ucyB9LCBwcm9wcykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0JoY21Gc2JHVnNMbXB6SWwwc0ltNWhiV1Z6SWpwYklsQmhjbUZzYkdWc0lpd2liMjVUZEdGeWRDSXNJbUZqZEdsdmJuTWlMQ0p3Y205d2N5SXNJbTUxYlVGamRHbDJaVUZqZEdsdmJuTWlMQ0pzWlc1bmRHZ2lMQ0ptYjNKRllXTm9JaXdpWVdOMGFXOXVJaXdpYzJWMFVISnZjSE1pTENKZmIyNVRkRzl3SWl3aWMzUmhjblFpTENKdmJsTjBiM0FpTENKemRHOXdJaXdpWVdSa1FXTjBhVzl1SWl3aWFXNWtaWGhQWmlJc0luQjFjMmdpTENKcGMwRmpkR2x2YmtOdmJYQnNaWFJsSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3pzN096czdPenM3TzBsQlJVMUJMRkU3T3pzN096czdPenR4UWtGRFNrTXNUeXh6UWtGQlZUdEJRVUZCT3p0QlFVRkJMRkZCUTBGRExFOUJSRUVzUjBGRFdTeExRVUZMUXl4TFFVUnFRaXhEUVVOQlJDeFBRVVJCT3p0QlFVVlNMRk5CUVV0RkxHZENRVUZNTEVkQlFYZENSaXhSUVVGUlJ5eE5RVUZvUXpzN1FVRkZRVWdzV1VGQlVVa3NUMEZCVWl4RFFVRm5RaXhWUVVGRFF5eE5RVUZFTEVWQlFWazdRVUZETVVKQkxHRkJRVTlETEZGQlFWQXNRMEZCWjBJN1FVRkRaRU1zYVVKQlFWTTdRVUZCUVN4cFFrRkJUU3hQUVVGTFRDeG5Ra0ZCVEN4RlFVRk9PMEZCUVVFN1FVRkVTeXhQUVVGb1FpeEZRVVZIVFN4TFFVWklPMEZCUjBRc1MwRktSRHRCUVV0RUxFYzdPM0ZDUVVWRVF5eE5MSEZDUVVGVE8wRkJRMUFzVTBGQlMxSXNTMEZCVEN4RFFVRlhSQ3hQUVVGWUxFTkJRVzFDU1N4UFFVRnVRaXhEUVVFeVFpeFZRVUZEUXl4TlFVRkVPMEZCUVVFc1lVRkJXVUVzVDBGQlQwc3NTVUZCVUN4RlFVRmFPMEZCUVVFc1MwRkJNMEk3UVVGRFJDeEhPenR4UWtGRlJFTXNVeXh6UWtGQlZVNHNUU3hGUVVGUk8wRkJRVUVzVVVGRFVrd3NUMEZFVVN4SFFVTkpMRXRCUVV0RExFdEJSRlFzUTBGRFVrUXNUMEZFVVRzN08wRkJSMmhDTEZGQlFVbEJMRkZCUVZGWkxFOUJRVklzUTBGQlowSlFMRTFCUVdoQ0xFMUJRVFJDTEVOQlFVTXNRMEZCYWtNc1JVRkJiME03UVVGRGJFTk1MR05CUVZGaExFbEJRVklzUTBGQllWSXNUVUZCWWp0QlFVTkVPMEZCUTBZc1J6czdjVUpCUlVSVExHZENMQ3RDUVVGdFFqdEJRVU5xUWl4WFFVRlJMRXRCUVV0YUxHZENRVUZNTEV0QlFUQkNMRU5CUVd4RE8wRkJRMFFzUnpzN096czdhMEpCUjFrc1ZVRkJRMFlzVDBGQlJDeEZRVUZWUXl4TFFVRldPMEZCUVVFc1UwRkJiMElzU1VGQlNVZ3NVVUZCU2l4WlFVRmxSU3huUWtGQlppeEpRVUV5UWtNc1MwRkJNMElzUlVGQmNFSTdRVUZCUVN4RElpd2labWxzWlNJNkluQmhjbUZzYkdWc0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYSnpMbWhoYkd3dlVISnZhbVZqZEhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNWNibU5zWVhOeklGQmhjbUZzYkdWc0lHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHRmpkR2x2Ym5NZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdkR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6SUQwZ1lXTjBhVzl1Y3k1c1pXNW5kR2c3WEc1Y2JpQWdJQ0JoWTNScGIyNXpMbVp2Y2tWaFkyZ29LR0ZqZEdsdmJpa2dQVDRnZTF4dUlDQWdJQ0FnWVdOMGFXOXVMbk5sZEZCeWIzQnpLSHRjYmlBZ0lDQWdJQ0FnWDI5dVUzUnZjRG9nS0NrZ1BUNGdkR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6TFMxY2JpQWdJQ0FnSUgwcExuTjBZWEowS0NrN1hHNGdJQ0FnZlNrN1hHNGdJSDFjYmx4dUlDQnZibE4wYjNBb0tTQjdYRzRnSUNBZ2RHaHBjeTV3Y205d2N5NWhZM1JwYjI1ekxtWnZja1ZoWTJnb0tHRmpkR2x2YmlrZ1BUNGdZV04wYVc5dUxuTjBiM0FvS1NrN1hHNGdJSDFjYmx4dUlDQmhaR1JCWTNScGIyNG9ZV04wYVc5dUtTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCaFkzUnBiMjV6SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdhV1lnS0dGamRHbHZibk11YVc1a1pYaFBaaWhoWTNScGIyNHBJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdZV04wYVc5dWN5NXdkWE5vS0dGamRHbHZiaWs3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYVhOQlkzUnBiMjVEYjIxd2JHVjBaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdLSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lBOVBUMGdNQ2s3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dGamRHbHZibk1zSUhCeWIzQnpLU0E5UGlCdVpYY2dVR0Z5WVd4c1pXd29leUJoWTNScGIyNXpMQ0F1TGk1d2NtOXdjeUI5S1R0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BhcmFsbGVsLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQaHlzaWNzID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFBoeXNpY3MsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFBoeXNpY3MoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBoeXNpY3MpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBQaHlzaWNzLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGF1dG9TdG9wU3BlZWQgPSBfcHJvcHMuYXV0b1N0b3BTcGVlZCxcbiAgICAgICAgYWNjZWxlcmF0aW9uID0gX3Byb3BzLmFjY2VsZXJhdGlvbixcbiAgICAgICAgZnJpY3Rpb24gPSBfcHJvcHMuZnJpY3Rpb24sXG4gICAgICAgIHZlbG9jaXR5ID0gX3Byb3BzLnZlbG9jaXR5LFxuICAgICAgICBzcHJpbmcgPSBfcHJvcHMuc3ByaW5nLFxuICAgICAgICB0byA9IF9wcm9wcy50bztcblxuICAgIHZhciBuZXdWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgIHZhciBlbGFwc2VkID0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpO1xuXG4gICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGFjY2VsZXJhdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKGFjY2VsZXJhdGlvbiwgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgZnJpY3Rpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoZnJpY3Rpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICo9IE1hdGgucG93KDEgLSBmcmljdGlvbiwgZWxhcHNlZCAvIDEwMCk7XG4gICAgfVxuXG4gICAgaWYgKHNwcmluZyAmJiB0byAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZGlzdGFuY2VUb1RhcmdldCA9IHRvIC0gdGhpcy5jdXJyZW50O1xuICAgICAgbmV3VmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShzcHJpbmcsIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHZlbG9jaXR5XG4gICAgdGhpcy5jdXJyZW50ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShuZXdWZWxvY2l0eSwgZWxhcHNlZCk7XG4gICAgdGhpcy5wcm9wcy52ZWxvY2l0eSA9IG5ld1ZlbG9jaXR5O1xuXG4gICAgLy8gQ2hlY2sgaWYgc2ltdWxhdGlvbiBpcyBjb21wbGV0ZVxuICAgIC8vIFdlIGRvIHRoaXMgaGVyZSBpbnN0ZWFkIG9mIGBpc0FjdGlvbkNvbXBsZXRlYCBhcyBpdCBhbGxvd3MgdXNcbiAgICAvLyB0byBjbGFtcCBkdXJpbmcgdGhpcyB1cGRhdGVcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBhdXRvU3RvcFNwZWVkICE9PSBmYWxzZSAmJiAoIW5ld1ZlbG9jaXR5IHx8IE1hdGguYWJzKG5ld1ZlbG9jaXR5KSA8PSBhdXRvU3RvcFNwZWVkKTtcblxuICAgIGlmICh0aGlzLmlzQ29tcGxldGUgJiYgc3ByaW5nKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0bztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9O1xuXG4gIFBoeXNpY3MucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGU7XG4gIH07XG5cbiAgcmV0dXJuIFBoeXNpY3M7XG59KF8yLmRlZmF1bHQpO1xuXG5QaHlzaWNzLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWNjZWxlcmF0aW9uOiAwLFxuICBmcmljdGlvbjogMCxcbiAgdmVsb2NpdHk6IDAsXG4gIGF1dG9TdG9wU3BlZWQ6IDAuMDAxXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBQaHlzaWNzKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sc2lVR2g1YzJsamN5SXNJblZ3WkdGMFpTSXNJbkJ5YjNCeklpd2lZWFYwYjFOMGIzQlRjR1ZsWkNJc0ltRmpZMlZzWlhKaGRHbHZiaUlzSW1aeWFXTjBhVzl1SWl3aWRtVnNiMk5wZEhraUxDSnpjSEpwYm1jaUxDSjBieUlzSW01bGQxWmxiRzlqYVhSNUlpd2laV3hoY0hObFpDSXNJblZ1WkdWbWFXNWxaQ0lzSW1ScGMzUmhibU5sVkc5VVlYSm5aWFFpTENKamRYSnlaVzUwSWl3aWFYTkRiMjF3YkdWMFpTSXNJazFoZEdnaUxDSmhZbk1pTENKcGMwRmpkR2x2YmtOdmJYQnNaWFJsSWl3aVpHVm1ZWFZzZEZCeWIzQnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN1FVRkRRVHM3T3pzN096czdPenRKUVVWTlFTeFBPenM3T3pzN096czdiMEpCVVVwRExFMHNjVUpCUVZNN1FVRkJRU3hwUWtGRGFVVXNTMEZCUzBNc1MwRkVkRVU3UVVGQlFTeFJRVU5EUXl4aFFVUkVMRlZCUTBOQkxHRkJSRVE3UVVGQlFTeFJRVU5uUWtNc1dVRkVhRUlzVlVGRFowSkJMRmxCUkdoQ08wRkJRVUVzVVVGRE9FSkRMRkZCUkRsQ0xGVkJRemhDUVN4UlFVUTVRanRCUVVGQkxGRkJRM2REUXl4UlFVUjRReXhWUVVOM1EwRXNVVUZFZUVNN1FVRkJRU3hSUVVOclJFTXNUVUZFYkVRc1ZVRkRhMFJCTEUxQlJHeEVPMEZCUVVFc1VVRkRNRVJETEVWQlJERkVMRlZCUXpCRVFTeEZRVVF4UkRzN1FVRkZVQ3hSUVVGSlF5eGpRVUZqU0N4UlFVRnNRanRCUVVOQkxGRkJRVTFKTEZWQlFWVXNiME5CUVdoQ096dEJRVVZCTzBGQlEwRXNVVUZCU1U0c1dVRkJTaXhGUVVGclFqdEJRVU5vUWtzc2NVSkJRV1VzZVVKQlFXTk1MRmxCUVdRc1JVRkJORUpOTEU5QlFUVkNMRU5CUVdZN1FVRkRSRHM3UVVGRlJEdEJRVU5CTEZGQlFVbE1MRkZCUVVvc1JVRkJZenRCUVVOYVNTdzRRa0ZCWjBJc1NVRkJTVW9zVVVGQmNFSXNSVUZCYTBOTExGVkJRVlVzUjBGQk5VTTdRVUZEUkRzN1FVRkZSQ3hSUVVGSlNDeFZRVUZWUXl4UFFVRlBSeXhUUVVGeVFpeEZRVUZuUXp0QlFVTTVRaXhWUVVGTlF5eHRRa0ZCYlVKS0xFdEJRVXNzUzBGQlMwc3NUMEZCYmtNN1FVRkRRVW9zY1VKQlFXVkhMRzFDUVVGdFFpeDVRa0ZCWTB3c1RVRkJaQ3hGUVVGelFrY3NUMEZCZEVJc1EwRkJiRU03UVVGRFJEczdRVUZGUkR0QlFVTkJMRk5CUVV0SExFOUJRVXdzU1VGQlowSXNlVUpCUVdOS0xGZEJRV1FzUlVGQk1rSkRMRTlCUVROQ0xFTkJRV2hDTzBGQlEwRXNVMEZCUzFJc1MwRkJUQ3hEUVVGWFNTeFJRVUZZTEVkQlFYTkNSeXhYUVVGMFFqczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGTFN5eFZRVUZNTEVkQlFXMUNXQ3hyUWtGQmEwSXNTMEZCYkVJc1MwRkJORUlzUTBGQlEwMHNWMEZCUkN4SlFVRm5RazBzUzBGQlMwTXNSMEZCVEN4RFFVRlRVQ3hYUVVGVUxFdEJRWGxDVGl4aFFVRnlSU3hEUVVGdVFqczdRVUZGUVN4UlFVRkpMRXRCUVV0WExGVkJRVXdzU1VGQmJVSlFMRTFCUVhaQ0xFVkJRU3RDTzBGQlF6ZENMRmRCUVV0TkxFOUJRVXdzUjBGQlpVd3NSVUZCWmp0QlFVTkVPenRCUVVWRUxGZEJRVThzUzBGQlMwc3NUMEZCV2p0QlFVTkVMRWM3TzI5Q1FVVkVTU3huUWl3clFrRkJiVUk3UVVGRGFrSXNWMEZCVHl4TFFVRkxTQ3hWUVVGYU8wRkJRMFFzUnpzN096czdRVUU1UTBka0xFOHNRMEZEUjJ0Q0xGa3NSMEZCWlR0QlFVTndRbVFzWjBKQlFXTXNRMEZFVFR0QlFVVndRa01zV1VGQlZTeERRVVpWTzBGQlIzQkNReXhaUVVGVkxFTkJTRlU3UVVGSmNFSklMR2xDUVVGbE8wRkJTa3NzUXpzN2EwSkJaMFJVTEZWQlFVTkVMRXRCUVVRN1FVRkJRU3hUUVVGWExFbEJRVWxHTEU5QlFVb3NRMEZCV1VVc1MwRkJXaXhEUVVGWU8wRkJRVUVzUXlJc0ltWnBiR1VpT2lKd2FIbHphV056TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhKekxtaGhiR3d2VUhKdmFtVmpkSE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMeWM3WEc1cGJYQnZjblFnZXlCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ2ZTQm1jbTl0SUNjdUxpOW1jbUZ0WlhONWJtTW5PMXh1YVcxd2IzSjBJSHNnYzNCbFpXUlFaWEpHY21GdFpTQjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYmx4dVkyeGhjM01nVUdoNWMybGpjeUJsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzRnSUhOMFlYUnBZeUJrWldaaGRXeDBVSEp2Y0hNZ1BTQjdYRzRnSUNBZ1lXTmpaV3hsY21GMGFXOXVPaUF3TEZ4dUlDQWdJR1p5YVdOMGFXOXVPaUF3TEZ4dUlDQWdJSFpsYkc5amFYUjVPaUF3TEZ4dUlDQWdJR0YxZEc5VGRHOXdVM0JsWldRNklEQXVNREF4WEc0Z0lIMWNibHh1SUNCMWNHUmhkR1VvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJoZFhSdlUzUnZjRk53WldWa0xDQmhZMk5sYkdWeVlYUnBiMjRzSUdaeWFXTjBhVzl1TENCMlpXeHZZMmwwZVN3Z2MzQnlhVzVuTENCMGJ5QjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0JzWlhRZ2JtVjNWbVZzYjJOcGRIa2dQU0IyWld4dlkybDBlVHRjYmlBZ0lDQmpiMjV6ZENCbGJHRndjMlZrSUQwZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbEtDazdYRzVjYmlBZ0lDQXZMeUJCY0hCc2VTQmhZMk5sYkdWeVlYUnBiMjRnZEc4Z2RtVnNiMk5wZEhsY2JpQWdJQ0JwWmlBb1lXTmpaV3hsY21GMGFXOXVLU0I3WEc0Z0lDQWdJQ0J1WlhkV1pXeHZZMmwwZVNBclBTQnpjR1ZsWkZCbGNrWnlZVzFsS0dGalkyVnNaWEpoZEdsdmJpd2daV3hoY0hObFpDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdRWEJ3YkhrZ1puSnBZM1JwYjI0Z2RHOGdkbVZzYjJOcGRIbGNiaUFnSUNCcFppQW9abkpwWTNScGIyNHBJSHRjYmlBZ0lDQWdJRzVsZDFabGJHOWphWFI1SUNvOUlDZ3hJQzBnWm5KcFkzUnBiMjRwSUNvcUlDaGxiR0Z3YzJWa0lDOGdNVEF3S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2MzQnlhVzVuSUNZbUlIUnZJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lHTnZibk4wSUdScGMzUmhibU5sVkc5VVlYSm5aWFFnUFNCMGJ5QXRJSFJvYVhNdVkzVnljbVZ1ZER0Y2JpQWdJQ0FnSUc1bGQxWmxiRzlqYVhSNUlDczlJR1JwYzNSaGJtTmxWRzlVWVhKblpYUWdLaUJ6Y0dWbFpGQmxja1p5WVcxbEtITndjbWx1Wnl3Z1pXeGhjSE5sWkNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1FYQndiSGtnZG1Wc2IyTnBkSGxjYmlBZ0lDQjBhR2x6TG1OMWNuSmxiblFnS3owZ2MzQmxaV1JRWlhKR2NtRnRaU2h1WlhkV1pXeHZZMmwwZVN3Z1pXeGhjSE5sWkNrN1hHNGdJQ0FnZEdocGN5NXdjbTl3Y3k1MlpXeHZZMmwwZVNBOUlHNWxkMVpsYkc5amFYUjVPMXh1WEc0Z0lDQWdMeThnUTJobFkyc2dhV1lnYzJsdGRXeGhkR2x2YmlCcGN5QmpiMjF3YkdWMFpWeHVJQ0FnSUM4dklGZGxJR1J2SUhSb2FYTWdhR1Z5WlNCcGJuTjBaV0ZrSUc5bUlHQnBjMEZqZEdsdmJrTnZiWEJzWlhSbFlDQmhjeUJwZENCaGJHeHZkM01nZFhOY2JpQWdJQ0F2THlCMGJ5QmpiR0Z0Y0NCa2RYSnBibWNnZEdocGN5QjFjR1JoZEdWY2JpQWdJQ0IwYUdsekxtbHpRMjl0Y0d4bGRHVWdQU0FvWVhWMGIxTjBiM0JUY0dWbFpDQWhQVDBnWm1Gc2MyVWdKaVlnS0NGdVpYZFdaV3h2WTJsMGVTQjhmQ0JOWVhSb0xtRmljeWh1WlhkV1pXeHZZMmwwZVNrZ1BEMGdZWFYwYjFOMGIzQlRjR1ZsWkNrcE8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWFYTkRiMjF3YkdWMFpTQW1KaUJ6Y0hKcGJtY3BJSHRjYmlBZ0lDQWdJSFJvYVhNdVkzVnljbVZ1ZENBOUlIUnZPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbU4xY25KbGJuUTdYRzRnSUgxY2JseHVJQ0JwYzBGamRHbHZia052YlhCc1pYUmxLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1selEyOXRjR3hsZEdVN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tIQnliM0J6S1NBOVBpQnVaWGNnVUdoNWMybGpjeWh3Y205d2N5azdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BoeXNpY3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3ZhbHVlID0gcmVxdWlyZSgnLi92YWx1ZScpO1xuXG52YXIgX3ZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlKTtcblxudmFyIF9jb21wb3NpdGUgPSByZXF1aXJlKCcuL2NvbXBvc2l0ZScpO1xuXG52YXIgX2NvbXBvc2l0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvaW50ZXIoX3JlZjIsIF9yZWYpIHtcbiAgdmFyIHggPSBfcmVmMi54LFxuICAgICAgeSA9IF9yZWYyLnk7XG5cbiAgdmFyIGV2ZW50VG9Qb2ludHMgPSBfcmVmLmV2ZW50VG9Qb2ludHMsXG4gICAgICBtb3ZlRXZlbnQgPSBfcmVmLm1vdmVFdmVudCxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnZXZlbnRUb1BvaW50cycsICdtb3ZlRXZlbnQnXSk7XG5cbiAgdmFyIHBvaW50ZXIgPSAoMCwgX2NvbXBvc2l0ZTIuZGVmYXVsdCkoe1xuICAgIHg6ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHgpLFxuICAgIHk6ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHkpXG4gIH0sIF9leHRlbmRzKHtcbiAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZVxuICB9LCBwcm9wcykpO1xuXG4gIHZhciB1cGRhdGVQb2ludGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAocHJvcHMucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgcG9pbnRzID0gZXZlbnRUb1BvaW50cyhlKTtcbiAgICBwb2ludGVyLnguc2V0KHBvaW50cy54KTtcbiAgICBwb2ludGVyLnkuc2V0KHBvaW50cy55KTtcbiAgfTtcblxuICBwb2ludGVyLnNldFByb3BzKHtcbiAgICBfb25TdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlcik7XG4gICAgfSxcbiAgICBfb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVQb2ludGVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwb2ludGVyO1xufVxuXG52YXIgbW91c2VFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4ge1xuICAgIHg6IGUucGFnZVgsXG4gICAgeTogZS5wYWdlWVxuICB9O1xufTtcblxudmFyIHRvdWNoRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKF9yZWYzKSB7XG4gIHZhciBjaGFuZ2VkVG91Y2hlcyA9IF9yZWYzLmNoYW5nZWRUb3VjaGVzO1xuICByZXR1cm4ge1xuICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICB9O1xufTtcblxudmFyIGdldE5hdGl2ZUV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlLm5hdGl2ZUV2ZW50IHx8IGU7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZSwgcHJvcHMpIHtcbiAgdmFyIG5hdGl2ZUV2ZW50ID0gZ2V0TmF0aXZlRXZlbnQoZSk7XG4gIHJldHVybiBuYXRpdmVFdmVudC50b3VjaGVzID8gY3JlYXRlUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwgX2V4dGVuZHMoe1xuICAgIG1vdmVFdmVudDogJ3RvdWNobW92ZScsXG4gICAgZXZlbnRUb1BvaW50czogdG91Y2hFdmVudFRvUG9pbnRcbiAgfSwgcHJvcHMpKSA6IGNyZWF0ZVBvaW50ZXIobW91c2VFdmVudFRvUG9pbnQoZSksIF9leHRlbmRzKHtcbiAgICBtb3ZlRXZlbnQ6ICdtb3VzZW1vdmUnLFxuICAgIGV2ZW50VG9Qb2ludHM6IG1vdXNlRXZlbnRUb1BvaW50XG4gIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQnZhVzUwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHNpWTNKbFlYUmxVRzlwYm5SbGNpSXNJbmdpTENKNUlpd2laWFpsYm5SVWIxQnZhVzUwY3lJc0ltMXZkbVZGZG1WdWRDSXNJbkJ5YjNCeklpd2ljRzlwYm5SbGNpSXNJbkJ5WlhabGJuUkVaV1poZFd4MElpd2lkWEJrWVhSbFVHOXBiblJsY2lJc0ltVWlMQ0p3YjJsdWRITWlMQ0p6WlhRaUxDSnpaWFJRY205d2N5SXNJbDl2YmxOMFlYSjBJaXdpWkc5amRXMWxiblFpTENKa2IyTjFiV1Z1ZEVWc1pXMWxiblFpTENKaFpHUkZkbVZ1ZEV4cGMzUmxibVZ5SWl3aVgyOXVVM1J2Y0NJc0luSmxiVzkyWlVWMlpXNTBUR2x6ZEdWdVpYSWlMQ0p0YjNWelpVVjJaVzUwVkc5UWIybHVkQ0lzSW5CaFoyVllJaXdpY0dGblpWa2lMQ0owYjNWamFFVjJaVzUwVkc5UWIybHVkQ0lzSW1Ob1lXNW5aV1JVYjNWamFHVnpJaXdpWTJ4cFpXNTBXQ0lzSW1Oc2FXVnVkRmtpTENKblpYUk9ZWFJwZG1WRmRtVnVkQ0lzSW05eWFXZHBibUZzUlhabGJuUWlMQ0p1WVhScGRtVkZkbVZ1ZENJc0luUnZkV05vWlhNaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN096czdPMEZCUlVFc1UwRkJVMEVzWVVGQlZDeGpRVUY1UlR0QlFVRkJMRTFCUVdoRVF5eERRVUZuUkN4VFFVRm9SRUVzUTBGQlowUTdRVUZCUVN4TlFVRTNRME1zUTBGQk5rTXNVMEZCTjBOQkxFTkJRVFpET3p0QlFVRkJMRTFCUVhSRFF5eGhRVUZ6UXl4UlFVRjBRMEVzWVVGQmMwTTdRVUZCUVN4TlFVRjJRa01zVTBGQmRVSXNVVUZCZGtKQkxGTkJRWFZDTzBGQlFVRXNUVUZCVkVNc1MwRkJVenM3UVVGRGRrVXNUVUZCVFVNc1ZVRkJWU3g1UWtGQlZUdEJRVU40UWt3c1QwRkJSeXh4UWtGQlRVRXNRMEZCVGl4RFFVUnhRanRCUVVWNFFrTXNUMEZCUnl4eFFrRkJUVUVzUTBGQlRqdEJRVVp4UWl4SFFVRldPMEZCU1dSTExHOUNRVUZuUWp0QlFVcEdMRXRCUzFoR0xFdEJURmNzUlVGQmFFSTdPMEZCVVVFc1RVRkJUVWNzWjBKQlFXZENMRlZCUVVORExFTkJRVVFzUlVGQlR6dEJRVU16UWl4UlFVRkpTaXhOUVVGTlJTeGpRVUZXTEVWQlFUQkNPMEZCUTNoQ1JTeFJRVUZGUml4alFVRkdPMEZCUTBRN08wRkJSVVFzVVVGQlRVY3NVMEZCVTFBc1kwRkJZMDBzUTBGQlpDeERRVUZtTzBGQlEwRklMRmxCUVZGTUxFTkJRVklzUTBGQlZWVXNSMEZCVml4RFFVRmpSQ3hQUVVGUFZDeERRVUZ5UWp0QlFVTkJTeXhaUVVGUlNpeERRVUZTTEVOQlFWVlRMRWRCUVZZc1EwRkJZMFFzVDBGQlQxSXNRMEZCY2tJN1FVRkRSQ3hIUVZKRU96dEJRVlZCU1N4VlFVRlJUU3hSUVVGU0xFTkJRV2xDTzBGQlEyWkRMR05CUVZVN1FVRkJRU3hoUVVGTlF5eFRRVUZUUXl4bFFVRlVMRU5CUVhsQ1F5eG5Ra0ZCZWtJc1EwRkJNRU5hTEZOQlFURkRMRVZCUVhGRVNTeGhRVUZ5UkN4RFFVRk9PMEZCUVVFc1MwRkVTenRCUVVWbVV5eGhRVUZUTzBGQlFVRXNZVUZCVFVnc1UwRkJVME1zWlVGQlZDeERRVUY1UWtjc2JVSkJRWHBDTEVOQlFUWkRaQ3hUUVVFM1F5eEZRVUYzUkVrc1lVRkJlRVFzUTBGQlRqdEJRVUZCTzBGQlJrMHNSMEZCYWtJN08wRkJTMEVzVTBGQlQwWXNUMEZCVUR0QlFVTkVPenRCUVVWRUxFbEJRVTFoTEc5Q1FVRnZRaXhWUVVGRFZpeERRVUZFTzBGQlFVRXNVMEZCVVR0QlFVTm9RMUlzVDBGQlIxRXNSVUZCUlZjc1MwRkVNa0k3UVVGRmFFTnNRaXhQUVVGSFR5eEZRVUZGV1R0QlFVWXlRaXhIUVVGU08wRkJRVUVzUTBGQk1VSTdPMEZCUzBFc1NVRkJUVU1zYjBKQlFXOUNPMEZCUVVFc1RVRkJSME1zWTBGQlNDeFRRVUZIUVN4alFVRklPMEZCUVVFc1UwRkJlVUk3UVVGRGFrUjBRaXhQUVVGSGMwSXNaVUZCWlN4RFFVRm1MRVZCUVd0Q1F5eFBRVVEwUWp0QlFVVnFSSFJDTEU5QlFVZHhRaXhsUVVGbExFTkJRV1lzUlVGQmEwSkZPMEZCUmpSQ0xFZEJRWHBDTzBGQlFVRXNRMEZCTVVJN08wRkJTMEVzU1VGQlRVTXNhVUpCUVdsQ0xGVkJRVU5xUWl4RFFVRkVPMEZCUVVFc1UwRkJUMEVzUlVGQlJXdENMR0ZCUVVZc1NVRkJiVUpzUWl4RlFVRkZiVUlzVjBGQmNrSXNTVUZCYjBOdVFpeERRVUV6UXp0QlFVRkJMRU5CUVhaQ096dHJRa0ZGWlN4VlFVRkRRU3hEUVVGRUxFVkJRVWxLTEV0QlFVb3NSVUZCWXp0QlFVTXpRaXhOUVVGTmRVSXNZMEZCWTBZc1pVRkJaV3BDTEVOQlFXWXNRMEZCY0VJN1FVRkRRU3hUUVVGUmJVSXNXVUZCV1VNc1QwRkJZaXhIUVVOTU4wSXNZMEZCWTNOQ0xHdENRVUZyUW1Jc1EwRkJiRUlzUTBGQlpEdEJRVU5GVEN4bFFVRlhMRmRCUkdJN1FVRkZSVVFzYlVKQlFXVnRRanRCUVVacVFpeExRVWRMYWtJc1MwRklUQ3hGUVVSTExFZEJUVXhNTEdOQlFXTnRRaXhyUWtGQmEwSldMRU5CUVd4Q0xFTkJRV1E3UVVGRFJVd3NaVUZCVnl4WFFVUmlPMEZCUlVWRUxHMUNRVUZsWjBJN1FVRkdha0lzUzBGSFMyUXNTMEZJVEN4RlFVNUdPMEZCVjBRc1F5SXNJbVpwYkdVaU9pSndiMmx1ZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYSnpMbWhoYkd3dlVISnZhbVZqZEhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIWmhiSFZsSUdaeWIyMGdKeTR2ZG1Gc2RXVW5PMXh1YVcxd2IzSjBJR052YlhCdmMybDBaU0JtY205dElDY3VMMk52YlhCdmMybDBaU2M3WEc1Y2JtWjFibU4wYVc5dUlHTnlaV0YwWlZCdmFXNTBaWElvZXlCNExDQjVJSDBzSUhzZ1pYWmxiblJVYjFCdmFXNTBjeXdnYlc5MlpVVjJaVzUwTENBdUxpNXdjbTl3Y3lCOUtTQjdYRzRnSUdOdmJuTjBJSEJ2YVc1MFpYSWdQU0JqYjIxd2IzTnBkR1VvZTF4dUlDQWdJSGc2SUhaaGJIVmxLSGdwTEZ4dUlDQWdJSGs2SUhaaGJIVmxLSGtwWEc0Z0lIMHNJSHRjYmlBZ0lDQndjbVYyWlc1MFJHVm1ZWFZzZERvZ2RISjFaU3hjYmlBZ0lDQXVMaTV3Y205d2MxeHVJQ0I5S1R0Y2JseHVJQ0JqYjI1emRDQjFjR1JoZEdWUWIybHVkR1Z5SUQwZ0tHVXBJRDArSUh0Y2JpQWdJQ0JwWmlBb2NISnZjSE11Y0hKbGRtVnVkRVJsWm1GMWJIUXBJSHRjYmlBZ0lDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQmpiMjV6ZENCd2IybHVkSE1nUFNCbGRtVnVkRlJ2VUc5cGJuUnpLR1VwTzF4dUlDQWdJSEJ2YVc1MFpYSXVlQzV6WlhRb2NHOXBiblJ6TG5ncE8xeHVJQ0FnSUhCdmFXNTBaWEl1ZVM1elpYUW9jRzlwYm5Sekxua3BPMXh1SUNCOU8xeHVYRzRnSUhCdmFXNTBaWEl1YzJWMFVISnZjSE1vZTF4dUlDQWdJRjl2YmxOMFlYSjBPaUFvS1NBOVBpQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lodGIzWmxSWFpsYm5Rc0lIVndaR0YwWlZCdmFXNTBaWElwTEZ4dUlDQWdJRjl2YmxOMGIzQTZJQ2dwSUQwK0lHUnZZM1Z0Wlc1MExtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1eVpXMXZkbVZGZG1WdWRFeHBjM1JsYm1WeUtHMXZkbVZGZG1WdWRDd2dkWEJrWVhSbFVHOXBiblJsY2lsY2JpQWdmU2s3WEc1Y2JpQWdjbVYwZFhKdUlIQnZhVzUwWlhJN1hHNTlYRzVjYm1OdmJuTjBJRzF2ZFhObFJYWmxiblJVYjFCdmFXNTBJRDBnS0dVcElEMCtJQ2g3WEc0Z0lIZzZJR1V1Y0dGblpWZ3NYRzRnSUhrNklHVXVjR0ZuWlZsY2JuMHBPMXh1WEc1amIyNXpkQ0IwYjNWamFFVjJaVzUwVkc5UWIybHVkQ0E5SUNoN0lHTm9ZVzVuWldSVWIzVmphR1Z6SUgwcElEMCtJQ2g3WEc0Z0lIZzZJR05vWVc1blpXUlViM1ZqYUdWeld6QmRMbU5zYVdWdWRGZ3NYRzRnSUhrNklHTm9ZVzVuWldSVWIzVmphR1Z6V3pCZExtTnNhV1Z1ZEZsY2JuMHBPMXh1WEc1amIyNXpkQ0JuWlhST1lYUnBkbVZGZG1WdWRDQTlJQ2hsS1NBOVBpQmxMbTl5YVdkcGJtRnNSWFpsYm5RZ2ZId2daUzV1WVhScGRtVkZkbVZ1ZENCOGZDQmxPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWlN3Z2NISnZjSE1wSUQwK0lIdGNiaUFnWTI5dWMzUWdibUYwYVhabFJYWmxiblFnUFNCblpYUk9ZWFJwZG1WRmRtVnVkQ2hsS1R0Y2JpQWdjbVYwZFhKdUlDaHVZWFJwZG1WRmRtVnVkQzUwYjNWamFHVnpLU0EvWEc0Z0lDQWdZM0psWVhSbFVHOXBiblJsY2loMGIzVmphRVYyWlc1MFZHOVFiMmx1ZENobEtTd2dlMXh1SUNBZ0lDQWdiVzkyWlVWMlpXNTBPaUFuZEc5MVkyaHRiM1psSnl4Y2JpQWdJQ0FnSUdWMlpXNTBWRzlRYjJsdWRITTZJSFJ2ZFdOb1JYWmxiblJVYjFCdmFXNTBMRnh1SUNBZ0lDQWdMaTR1Y0hKdmNITmNiaUFnSUNCOUtTQTZYRzRnSUNBZ1kzSmxZWFJsVUc5cGJuUmxjaWh0YjNWelpVVjJaVzUwVkc5UWIybHVkQ2hsS1N3Z2UxeHVJQ0FnSUNBZ2JXOTJaVVYyWlc1ME9pQW5iVzkxYzJWdGIzWmxKeXhjYmlBZ0lDQWdJR1YyWlc1MFZHOVFiMmx1ZEhNNklHMXZkWE5sUlhabGJuUlViMUJ2YVc1MExGeHVJQ0FnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdJQ0I5S1R0Y2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wb2ludGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF92YWx1ZSA9IHJlcXVpcmUoJy4vdmFsdWUnKTtcblxudmFyIF92YWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZSk7XG5cbnZhciBfY29tcG9zaXRlID0gcmVxdWlyZSgnLi9jb21wb3NpdGUnKTtcblxudmFyIF9jb21wb3NpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBjcmVhdGVUb3VjaGVzKF9yZWYyLCBfcmVmKSB7XG4gIHZhciBhbGwgPSBfcmVmMi5hbGw7XG5cbiAgdmFyIGV2ZW50VG9Ub3VjaGVzID0gX3JlZi5ldmVudFRvVG91Y2hlcyxcbiAgICAgIG1vdmVFdmVudCA9IF9yZWYubW92ZUV2ZW50LFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydldmVudFRvVG91Y2hlcycsICdtb3ZlRXZlbnQnXSk7XG5cbiAgdmFyIHRvdWNoZXMgPSAoMCwgX2NvbXBvc2l0ZTIuZGVmYXVsdCkoe1xuICAgIHRvdWNoZXM6IG1hcENvb3Jkc1RvQWN0aW9ucyhhbGwpLFxuICAgIHRvdWNoQ291bnQ6ICgwLCBfdmFsdWUyLmRlZmF1bHQpKGFsbC5sZW5ndGgpXG4gIH0sIF9leHRlbmRzKHtcbiAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZVxuICB9LCBwcm9wcykpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRvdWNoZXMoZSkge1xuICAgIGlmIChwcm9wcy5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciBfZXZlbnRUb1RvdWNoZXMgPSBldmVudFRvVG91Y2hlcyhlKSxcbiAgICAgICAgYWxsID0gX2V2ZW50VG9Ub3VjaGVzLmFsbDtcblxuICAgIHVwZGF0ZUFjdGlvbldpdGhUb3VjaGVzKHRvdWNoZXMsICd0b3VjaGVzJywgYWxsKTtcbiAgICB0b3VjaGVzLnRvdWNoQ291bnQuc2V0KGFsbC5sZW5ndGgpO1xuICB9XG5cbiAgdG91Y2hlcy5zZXRQcm9wcyh7XG4gICAgX29uU3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVRvdWNoZXMpO1xuICAgIH0sXG4gICAgX29uU3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlVG91Y2hlcyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdG91Y2hlcztcbn1cblxuZnVuY3Rpb24gbWFwQ29vcmRzVG9BY3Rpb25zKGNvb3Jkcykge1xuICB2YXIgYWN0aW9ucyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBfY29vcmRzJGkgPSBjb29yZHNbaV0sXG4gICAgICAgIHggPSBfY29vcmRzJGkueCxcbiAgICAgICAgeSA9IF9jb29yZHMkaS55O1xuXG4gICAgYWN0aW9uc1tpXSA9ICgwLCBfY29tcG9zaXRlMi5kZWZhdWx0KSh7XG4gICAgICB4OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh4KSxcbiAgICAgIHk6ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHkpXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuICgwLCBfY29tcG9zaXRlMi5kZWZhdWx0KShhY3Rpb25zKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQWN0aW9uV2l0aFRvdWNoZXMoYWN0aW9uLCBuYW1lLCBuZXdUb3VjaGVzKSB7XG4gIGZvciAodmFyIGkgaW4gbmV3VG91Y2hlcykge1xuICAgIHZhciBfbmV3VG91Y2hlcyRpID0gbmV3VG91Y2hlc1tpXSxcbiAgICAgICAgeCA9IF9uZXdUb3VjaGVzJGkueCxcbiAgICAgICAgeSA9IF9uZXdUb3VjaGVzJGkueTtcblxuICAgIGlmIChhY3Rpb25bbmFtZV1baV0gIT0gbnVsbCkge1xuICAgICAgYWN0aW9uW25hbWVdW2ldLnguc2V0KHgpO1xuICAgICAgYWN0aW9uW25hbWVdW2ldLnkuc2V0KHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3Rpb25bbmFtZV1baV0gPSAoMCwgX2NvbXBvc2l0ZTIuZGVmYXVsdCkoe1xuICAgICAgICB4OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh4KSxcbiAgICAgICAgeTogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG52YXIgbW91c2VFdmVudFRvVG91Y2hlcyA9IGZ1bmN0aW9uIChfcmVmMykge1xuICB2YXIgcGFnZVggPSBfcmVmMy5wYWdlWCxcbiAgICAgIHBhZ2VZID0gX3JlZjMucGFnZVk7XG5cbiAgdmFyIHRvdWNoZXMgPSBbe1xuICAgIHg6IHBhZ2VYLFxuICAgIHk6IHBhZ2VZXG4gIH1dO1xuICByZXR1cm4ge1xuICAgIGFsbDogdG91Y2hlc1xuICB9O1xufTtcblxudmFyIHRvdWNoRXZlbnRUb1RvdWNoZXMgPSBmdW5jdGlvbiAoX3JlZjQpIHtcbiAgdmFyIHRvdWNoZXMgPSBfcmVmNC50b3VjaGVzO1xuXG4gIHJldHVybiB7XG4gICAgYWxsOiBleHRyYWN0Q29vcmRzKHRvdWNoZXMpXG4gIH07XG59O1xuXG5mdW5jdGlvbiBleHRyYWN0Q29vcmRzKHRvdWNoZXMpIHtcbiAgdmFyIGFjdGlvbnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF90b3VjaGVzJGkgPSB0b3VjaGVzW2ldLFxuICAgICAgICBjbGllbnRYID0gX3RvdWNoZXMkaS5jbGllbnRYLFxuICAgICAgICBjbGllbnRZID0gX3RvdWNoZXMkaS5jbGllbnRZO1xuXG4gICAgYWN0aW9uc1tpXSA9IHtcbiAgICAgIHg6IGNsaWVudFgsXG4gICAgICB5OiBjbGllbnRZXG4gICAgfTtcbiAgfVxuICByZXR1cm4gYWN0aW9ucztcbn1cblxudmFyIGdldE5hdGl2ZUV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlLm5hdGl2ZUV2ZW50IHx8IGU7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZSwgcHJvcHMpIHtcbiAgdmFyIG5hdGl2ZUV2ZW50ID0gZ2V0TmF0aXZlRXZlbnQoZSk7XG4gIHJldHVybiBuYXRpdmVFdmVudC50b3VjaGVzID8gY3JlYXRlVG91Y2hlcyh0b3VjaEV2ZW50VG9Ub3VjaGVzKGUpLCBfZXh0ZW5kcyh7XG4gICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICBldmVudFRvVG91Y2hlczogdG91Y2hFdmVudFRvVG91Y2hlc1xuICB9LCBwcm9wcykpIDogY3JlYXRlVG91Y2hlcyhtb3VzZUV2ZW50VG9Ub3VjaGVzKGUpLCBfZXh0ZW5kcyh7XG4gICAgbW92ZUV2ZW50OiAnbW91c2Vtb3ZlJyxcbiAgICBldmVudFRvVG91Y2hlczogbW91c2VFdmVudFRvVG91Y2hlc1xuICB9LCBwcm9wcykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1J2ZFdOb1pYTXVhbk1pWFN3aWJtRnRaWE1pT2xzaVkzSmxZWFJsVkc5MVkyaGxjeUlzSW1Gc2JDSXNJbVYyWlc1MFZHOVViM1ZqYUdWeklpd2liVzkyWlVWMlpXNTBJaXdpY0hKdmNITWlMQ0owYjNWamFHVnpJaXdpYldGd1EyOXZjbVJ6Vkc5QlkzUnBiMjV6SWl3aWRHOTFZMmhEYjNWdWRDSXNJbXhsYm1kMGFDSXNJbkJ5WlhabGJuUkVaV1poZFd4MElpd2lkWEJrWVhSbFZHOTFZMmhsY3lJc0ltVWlMQ0oxY0dSaGRHVkJZM1JwYjI1WGFYUm9WRzkxWTJobGN5SXNJbk5sZENJc0luTmxkRkJ5YjNCeklpd2lYMjl1VTNSaGNuUWlMQ0prYjJOMWJXVnVkQ0lzSW1SdlkzVnRaVzUwUld4bGJXVnVkQ0lzSW1Ga1pFVjJaVzUwVEdsemRHVnVaWElpTENKZmIyNVRkRzl3SWl3aWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpSXNJbU52YjNKa2N5SXNJbUZqZEdsdmJuTWlMQ0pwSWl3aWVDSXNJbmtpTENKaFkzUnBiMjRpTENKdVlXMWxJaXdpYm1WM1ZHOTFZMmhsY3lJc0ltMXZkWE5sUlhabGJuUlViMVJ2ZFdOb1pYTWlMQ0p3WVdkbFdDSXNJbkJoWjJWWklpd2lkRzkxWTJoRmRtVnVkRlJ2Vkc5MVkyaGxjeUlzSW1WNGRISmhZM1JEYjI5eVpITWlMQ0pqYkdsbGJuUllJaXdpWTJ4cFpXNTBXU0lzSW1kbGRFNWhkR2wyWlVWMlpXNTBJaXdpYjNKcFoybHVZV3hGZG1WdWRDSXNJbTVoZEdsMlpVVjJaVzUwSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3T3pzN096dEJRVVZCTEZOQlFWTkJMR0ZCUVZRc1kwRkJlVVU3UVVGQlFTeE5RVUZvUkVNc1IwRkJaMFFzVTBGQmFFUkJMRWRCUVdkRU96dEJRVUZCTEUxQlFYWkRReXhqUVVGMVF5eFJRVUYyUTBFc1kwRkJkVU03UVVGQlFTeE5RVUYyUWtNc1UwRkJkVUlzVVVGQmRrSkJMRk5CUVhWQ08wRkJRVUVzVFVGQlZFTXNTMEZCVXpzN1FVRkRka1VzVFVGQlRVTXNWVUZCVlN4NVFrRkJWVHRCUVVONFFrRXNZVUZCVTBNc2JVSkJRVzFDVEN4SFFVRnVRaXhEUVVSbE8wRkJSWGhDVFN4blFrRkJXU3h4UWtGQlRVNHNTVUZCU1U4c1RVRkJWanRCUVVaWkxFZEJRVlk3UVVGSlpFTXNiMEpCUVdkQ08wRkJTa1lzUzBGTFdFd3NTMEZNVnl4RlFVRm9RanM3UVVGUlFTeFhRVUZUVFN4aFFVRlVMRU5CUVhWQ1F5eERRVUYyUWl4RlFVRXdRanRCUVVONFFpeFJRVUZKVUN4TlFVRk5TeXhqUVVGV0xFVkJRVEJDTzBGQlEzaENSU3hSUVVGRlJpeGpRVUZHTzBGQlEwUTdPMEZCU0hWQ0xEQkNRVWxTVUN4bFFVRmxVeXhEUVVGbUxFTkJTbEU3UVVGQlFTeFJRVWxvUWxZc1IwRktaMElzYlVKQlNXaENRU3hIUVVwblFqczdRVUZMZUVKWExEUkNRVUYzUWxBc1QwRkJlRUlzUlVGQmFVTXNVMEZCYWtNc1JVRkJORU5LTEVkQlFUVkRPMEZCUTBGSkxGbEJRVkZGTEZWQlFWSXNRMEZCYlVKTkxFZEJRVzVDTEVOQlFYVkNXaXhKUVVGSlR5eE5RVUV6UWp0QlFVTkVPenRCUVVWRVNDeFZRVUZSVXl4UlFVRlNMRU5CUVdsQ08wRkJRMlpETEdOQlFWVTdRVUZCUVN4aFFVRk5ReXhUUVVGVFF5eGxRVUZVTEVOQlFYbENReXhuUWtGQmVrSXNRMEZCTUVObUxGTkJRVEZETEVWQlFYRkVUeXhoUVVGeVJDeERRVUZPTzBGQlFVRXNTMEZFU3p0QlFVVm1VeXhoUVVGVE8wRkJRVUVzWVVGQlRVZ3NVMEZCVTBNc1pVRkJWQ3hEUVVGNVFrY3NiVUpCUVhwQ0xFTkJRVFpEYWtJc1UwRkJOME1zUlVGQmQwUlBMR0ZCUVhoRUxFTkJRVTQ3UVVGQlFUdEJRVVpOTEVkQlFXcENPenRCUVV0QkxGTkJRVTlNTEU5QlFWQTdRVUZEUkRzN1FVRkZSQ3hUUVVGVFF5eHJRa0ZCVkN4RFFVRTBRbVVzVFVGQk5VSXNSVUZCYjBNN1FVRkRiRU1zVFVGQlNVTXNWVUZCVlN4RlFVRmtPMEZCUTBFc1QwRkJTeXhKUVVGSlF5eEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWxHTEU5QlFVOWlMRTFCUVROQ0xFVkJRVzFEWlN4SFFVRnVReXhGUVVGM1F6dEJRVUZCTEc5Q1FVTnlRa1lzVDBGQlQwVXNRMEZCVUN4RFFVUnhRanRCUVVGQkxGRkJRemxDUXl4RFFVUTRRaXhoUVVNNVFrRXNRMEZFT0VJN1FVRkJRU3hSUVVNelFrTXNRMEZFTWtJc1lVRkRNMEpCTEVOQlJESkNPenRCUVVWMFEwZ3NXVUZCVVVNc1EwRkJVaXhKUVVGaExIbENRVUZWTzBGQlEzSkNReXhUUVVGSExIRkNRVUZOUVN4RFFVRk9MRU5CUkd0Q08wRkJSWEpDUXl4VFFVRkhMSEZDUVVGTlFTeERRVUZPTzBGQlJtdENMRXRCUVZZc1EwRkJZanRCUVVsRU8wRkJRMFFzVTBGQlR5eDVRa0ZCVlVnc1QwRkJWaXhEUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVTFZc2RVSkJRVlFzUTBGQmFVTmpMRTFCUVdwRExFVkJRWGxEUXl4SlFVRjZReXhGUVVFclEwTXNWVUZCTDBNc1JVRkJNa1E3UVVGRGVrUXNUMEZCU3l4SlFVRk5UQ3hEUVVGWUxFbEJRV2RDU3l4VlFVRm9RaXhGUVVFMFFqdEJRVUZCTEhkQ1FVTlVRU3hYUVVGWFRDeERRVUZZTEVOQlJGTTdRVUZCUVN4UlFVTnNRa01zUTBGRWEwSXNhVUpCUTJ4Q1FTeERRVVJyUWp0QlFVRkJMRkZCUTJaRExFTkJSR1VzYVVKQlEyWkJMRU5CUkdVN08wRkJSVEZDTEZGQlFVbERMRTlCUVU5RExFbEJRVkFzUlVGQllVb3NRMEZCWWl4TFFVRnRRaXhKUVVGMlFpeEZRVUUyUWp0QlFVTXpRa2NzWVVGQlQwTXNTVUZCVUN4RlFVRmhTaXhEUVVGaUxFVkJRV2RDUXl4RFFVRm9RaXhEUVVGclFsZ3NSMEZCYkVJc1EwRkJjMEpYTEVOQlFYUkNPMEZCUTBGRkxHRkJRVTlETEVsQlFWQXNSVUZCWVVvc1EwRkJZaXhGUVVGblFrVXNRMEZCYUVJc1EwRkJhMEphTEVkQlFXeENMRU5CUVhOQ1dTeERRVUYwUWp0QlFVTkVMRXRCU0VRc1RVRkhUenRCUVVOTVF5eGhRVUZQUXl4SlFVRlFMRVZCUVdGS0xFTkJRV0lzU1VGQmEwSXNlVUpCUVZVN1FVRkRNVUpETEZkQlFVY3NjVUpCUVUxQkxFTkJRVTRzUTBGRWRVSTdRVUZGTVVKRExGZEJRVWNzY1VKQlFVMUJMRU5CUVU0N1FVRkdkVUlzVDBGQlZpeERRVUZzUWp0QlFVbEVPMEZCUTBZN1FVRkRSanM3UVVGRlJDeEpRVUZOU1N4elFrRkJjMElzYVVKQlFYTkNPMEZCUVVFc1RVRkJia0pETEV0QlFXMUNMRk5CUVc1Q1FTeExRVUZ0UWp0QlFVRkJMRTFCUVZwRExFdEJRVmtzVTBGQldrRXNTMEZCV1RzN1FVRkRhRVFzVFVGQlRURkNMRlZCUVZVc1EwRkJRenRCUVVObWJVSXNUMEZCUjAwc1MwRkVXVHRCUVVWbVRDeFBRVUZIVFR0QlFVWlpMRWRCUVVRc1EwRkJhRUk3UVVGSlFTeFRRVUZQTzBGQlEwdzVRaXhUUVVGTFNUdEJRVVJCTEVkQlFWQTdRVUZIUkN4RFFWSkVPenRCUVZWQkxFbEJRVTB5UWl4elFrRkJjMElzYVVKQlFXbENPMEZCUVVFc1RVRkJaRE5DTEU5QlFXTXNVMEZCWkVFc1QwRkJZenM3UVVGRE0wTXNVMEZCVHp0QlFVTk1TaXhUUVVGTFowTXNZMEZCWXpWQ0xFOUJRV1E3UVVGRVFTeEhRVUZRTzBGQlIwUXNRMEZLUkRzN1FVRk5RU3hUUVVGVE5FSXNZVUZCVkN4RFFVRjFRalZDTEU5QlFYWkNMRVZCUVdkRE8wRkJRemxDTEUxQlFVbHBRaXhWUVVGVkxFVkJRV1E3UVVGRFFTeFBRVUZMTEVsQlFVbERMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1d4Q0xGRkJRVkZITEUxQlFUVkNMRVZCUVc5RFpTeEhRVUZ3UXl4RlFVRjVRenRCUVVGQkxIRkNRVU5XYkVJc1VVRkJVV3RDTEVOQlFWSXNRMEZFVlR0QlFVRkJMRkZCUXk5Q1Z5eFBRVVFyUWl4alFVTXZRa0VzVDBGRUswSTdRVUZCUVN4UlFVTjBRa01zVDBGRWMwSXNZMEZEZEVKQkxFOUJSSE5DT3p0QlFVVjJRMklzV1VGQlVVTXNRMEZCVWl4SlFVRmhPMEZCUTFoRExGTkJRVWRWTEU5QlJGRTdRVUZGV0ZRc1UwRkJSMVU3UVVGR1VTeExRVUZpTzBGQlNVUTdRVUZEUkN4VFFVRlBZaXhQUVVGUU8wRkJRMFE3TzBGQlJVUXNTVUZCVFdNc2FVSkJRV2xDTEZWQlFVTjZRaXhEUVVGRU8wRkJRVUVzVTBGQlQwRXNSVUZCUlRCQ0xHRkJRVVlzU1VGQmJVSXhRaXhGUVVGRk1rSXNWMEZCY2tJc1NVRkJiME16UWl4RFFVRXpRenRCUVVGQkxFTkJRWFpDT3p0clFrRkZaU3hWUVVGRFFTeERRVUZFTEVWQlFVbFFMRXRCUVVvc1JVRkJZenRCUVVNelFpeE5RVUZOYTBNc1kwRkJZMFlzWlVGQlpYcENMRU5CUVdZc1EwRkJjRUk3UVVGRFFTeFRRVUZSTWtJc1dVRkJXV3BETEU5QlFXSXNSMEZEVEV3c1kwRkJZMmRETEc5Q1FVRnZRbkpDTEVOQlFYQkNMRU5CUVdRN1FVRkRSVklzWlVGQlZ5eFhRVVJpTzBGQlJVVkVMRzlDUVVGblFqaENPMEZCUm14Q0xFdEJSMHMxUWl4TFFVaE1MRVZCUkVzc1IwRk5URW9zWTBGQll6WkNMRzlDUVVGdlFteENMRU5CUVhCQ0xFTkJRV1E3UVVGRFJWSXNaVUZCVnl4WFFVUmlPMEZCUlVWRUxHOUNRVUZuUWpKQ08wRkJSbXhDTEV0QlIwdDZRaXhMUVVoTUxFVkJUa1k3UVVGWFJDeERJaXdpWm1sc1pTSTZJblJ2ZFdOb1pYTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk11YUdGc2JDOVFjbTlxWldOMGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkbUZzZFdVZ1puSnZiU0FuTGk5MllXeDFaU2M3WEc1cGJYQnZjblFnWTI5dGNHOXphWFJsSUdaeWIyMGdKeTR2WTI5dGNHOXphWFJsSnp0Y2JseHVablZ1WTNScGIyNGdZM0psWVhSbFZHOTFZMmhsY3loN0lHRnNiQ0I5TENCN0lHVjJaVzUwVkc5VWIzVmphR1Z6TENCdGIzWmxSWFpsYm5Rc0lDNHVMbkJ5YjNCeklIMHBJSHRjYmlBZ1kyOXVjM1FnZEc5MVkyaGxjeUE5SUdOdmJYQnZjMmwwWlNoN1hHNGdJQ0FnZEc5MVkyaGxjem9nYldGd1EyOXZjbVJ6Vkc5QlkzUnBiMjV6S0dGc2JDa3NYRzRnSUNBZ2RHOTFZMmhEYjNWdWREb2dkbUZzZFdVb1lXeHNMbXhsYm1kMGFDbGNiaUFnZlN3Z2UxeHVJQ0FnSUhCeVpYWmxiblJFWldaaGRXeDBPaUIwY25WbExGeHVJQ0FnSUM0dUxuQnliM0J6WEc0Z0lIMHBPMXh1WEc0Z0lHWjFibU4wYVc5dUlIVndaR0YwWlZSdmRXTm9aWE1vWlNrZ2UxeHVJQ0FnSUdsbUlDaHdjbTl3Y3k1d2NtVjJaVzUwUkdWbVlYVnNkQ2tnZTF4dUlDQWdJQ0FnWlM1d2NtVjJaVzUwUkdWbVlYVnNkQ2dwTzF4dUlDQWdJSDFjYmlBZ0lDQmpiMjV6ZENCN0lHRnNiQ0I5SUQwZ1pYWmxiblJVYjFSdmRXTm9aWE1vWlNrN1hHNGdJQ0FnZFhCa1lYUmxRV04wYVc5dVYybDBhRlJ2ZFdOb1pYTW9kRzkxWTJobGN5d2dKM1J2ZFdOb1pYTW5MQ0JoYkd3cE8xeHVJQ0FnSUhSdmRXTm9aWE11ZEc5MVkyaERiM1Z1ZEM1elpYUW9ZV3hzTG14bGJtZDBhQ2s3WEc0Z0lIMWNibHh1SUNCMGIzVmphR1Z6TG5ObGRGQnliM0J6S0h0Y2JpQWdJQ0JmYjI1VGRHRnlkRG9nS0NrZ1BUNGdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb2JXOTJaVVYyWlc1MExDQjFjR1JoZEdWVWIzVmphR1Z6S1N4Y2JpQWdJQ0JmYjI1VGRHOXdPaUFvS1NBOVBpQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpaHRiM1psUlhabGJuUXNJSFZ3WkdGMFpWUnZkV05vWlhNcFhHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQjBiM1ZqYUdWek8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCdFlYQkRiMjl5WkhOVWIwRmpkR2x2Ym5Nb1kyOXZjbVJ6S1NCN0lGeHVJQ0JzWlhRZ1lXTjBhVzl1Y3lBOUlGdGRPMXh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHTnZiM0prY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2VDd2dlU0I5SUQwZ1kyOXZjbVJ6VzJsZE8xeHVJQ0FnSUdGamRHbHZibk5iYVYwZ1BTQmpiMjF3YjNOcGRHVW9lMXh1SUNBZ0lDQWdlRG9nZG1Gc2RXVW9lQ2tzWEc0Z0lDQWdJQ0I1T2lCMllXeDFaU2g1S1Z4dUlDQWdJSDBwTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJqYjIxd2IzTnBkR1VvWVdOMGFXOXVjeWs3WEc1OVhHNWNibVoxYm1OMGFXOXVJSFZ3WkdGMFpVRmpkR2x2YmxkcGRHaFViM1ZqYUdWektHRmpkR2x2Yml3Z2JtRnRaU3dnYm1WM1ZHOTFZMmhsY3lrZ2UxeHVJQ0JtYjNJZ0tHTnZibk4wSUdrZ2FXNGdibVYzVkc5MVkyaGxjeWtnZTF4dUlDQWdJR052Ym5OMElIc2dlQ3dnZVNCOUlEMGdibVYzVkc5MVkyaGxjMXRwWFR0Y2JpQWdJQ0JwWmlBb1lXTjBhVzl1VzI1aGJXVmRXMmxkSUNFOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUdGamRHbHZibHR1WVcxbFhWdHBYUzU0TG5ObGRDaDRLVHRjYmlBZ0lDQWdJR0ZqZEdsdmJsdHVZVzFsWFZ0cFhTNTVMbk5sZENoNUtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnWVdOMGFXOXVXMjVoYldWZFcybGRJRDBnWTI5dGNHOXphWFJsS0h0Y2JpQWdJQ0FnSUNBZ2VEb2dkbUZzZFdVb2VDa3NYRzRnSUNBZ0lDQWdJSGs2SUhaaGJIVmxLSGtwWEc0Z0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibjFjYmx4dVkyOXVjM1FnYlc5MWMyVkZkbVZ1ZEZSdlZHOTFZMmhsY3lBOUlDaDdJSEJoWjJWWUxDQndZV2RsV1NCOUtTQTlQaUI3WEc0Z0lHTnZibk4wSUhSdmRXTm9aWE1nUFNCYmUxeHVJQ0FnSUhnNklIQmhaMlZZTEZ4dUlDQWdJSGs2SUhCaFoyVlpYRzRnSUgxZE8xeHVJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lHRnNiRG9nZEc5MVkyaGxjMXh1SUNCOU8xeHVmVHRjYmx4dVkyOXVjM1FnZEc5MVkyaEZkbVZ1ZEZSdlZHOTFZMmhsY3lBOUlDaDdJSFJ2ZFdOb1pYTWdmU2tnUFQ0Z2UxeHVJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lHRnNiRG9nWlhoMGNtRmpkRU52YjNKa2N5aDBiM1ZqYUdWektWeHVJQ0I5TzF4dWZUdGNibHh1Wm5WdVkzUnBiMjRnWlhoMGNtRmpkRU52YjNKa2N5aDBiM1ZqYUdWektTQjdJRnh1SUNCc1pYUWdZV04wYVc5dWN5QTlJRnRkTzF4dUlDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJSFJ2ZFdOb1pYTXViR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR05zYVdWdWRGZ3NJR05zYVdWdWRGa2dmU0E5SUhSdmRXTm9aWE5iYVYwN1hHNGdJQ0FnWVdOMGFXOXVjMXRwWFNBOUlIdGNiaUFnSUNBZ0lIZzZJR05zYVdWdWRGZ3NYRzRnSUNBZ0lDQjVPaUJqYkdsbGJuUlpYRzRnSUNBZ2ZUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z1lXTjBhVzl1Y3p0Y2JuMWNibHh1WTI5dWMzUWdaMlYwVG1GMGFYWmxSWFpsYm5RZ1BTQW9aU2tnUFQ0Z1pTNXZjbWxuYVc1aGJFVjJaVzUwSUh4OElHVXVibUYwYVhabFJYWmxiblFnZkh3Z1pUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR1VzSUhCeWIzQnpLU0E5UGlCN1hHNGdJR052Ym5OMElHNWhkR2wyWlVWMlpXNTBJRDBnWjJWMFRtRjBhWFpsUlhabGJuUW9aU2s3WEc0Z0lISmxkSFZ5YmlBb2JtRjBhWFpsUlhabGJuUXVkRzkxWTJobGN5a2dQMXh1SUNBZ0lHTnlaV0YwWlZSdmRXTm9aWE1vZEc5MVkyaEZkbVZ1ZEZSdlZHOTFZMmhsY3lobEtTd2dlMXh1SUNBZ0lDQWdiVzkyWlVWMlpXNTBPaUFuZEc5MVkyaHRiM1psSnl4Y2JpQWdJQ0FnSUdWMlpXNTBWRzlVYjNWamFHVnpPaUIwYjNWamFFVjJaVzUwVkc5VWIzVmphR1Z6TEZ4dUlDQWdJQ0FnTGk0dWNISnZjSE5jYmlBZ0lDQjlLU0E2WEc0Z0lDQWdZM0psWVhSbFZHOTFZMmhsY3lodGIzVnpaVVYyWlc1MFZHOVViM1ZqYUdWektHVXBMQ0I3WEc0Z0lDQWdJQ0J0YjNabFJYWmxiblE2SUNkdGIzVnpaVzF2ZG1VbkxGeHVJQ0FnSUNBZ1pYWmxiblJVYjFSdmRXTm9aWE02SUcxdmRYTmxSWFpsYm5SVWIxUnZkV05vWlhNc1hHNGdJQ0FnSUNBdUxpNXdjbTl3YzF4dUlDQWdJSDBwTzF4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90b3VjaGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF9lYXNpbmcgPSByZXF1aXJlKCcuLi9pbmMvZWFzaW5nJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGNsYW1wUHJvZ3Jlc3MgPSAoMCwgX3RyYW5zZm9ybWVycy5jbGFtcCkoMCwgMSk7XG5cbnZhciBORVhUX1NURVBTID0ge1xuICBsb29wOiBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICByZXR1cm4gdHdlZW4uc3RhcnQoKTtcbiAgfSxcbiAgeW95bzogZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgcmV0dXJuIHR3ZWVuLnJldmVyc2UoKS5zdGFydCgpO1xuICB9LFxuICBmbGlwOiBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICByZXR1cm4gdHdlZW4uZmxpcCgpLnN0YXJ0KCk7XG4gIH1cbn07XG5cbnZhciBUd2VlbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhUd2VlbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3ZWVuKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVHdlZW4ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBkdXJhdGlvbiA9IF9wcm9wcy5kdXJhdGlvbixcbiAgICAgICAgcGxheURpcmVjdGlvbiA9IF9wcm9wcy5wbGF5RGlyZWN0aW9uO1xuXG5cbiAgICB0aGlzLmVsYXBzZWQgPSBwbGF5RGlyZWN0aW9uID09PSAxID8gMCA6IGR1cmF0aW9uO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBkdXJhdGlvbiA9IF9wcm9wczIuZHVyYXRpb24sXG4gICAgICAgIGVhc2UgPSBfcHJvcHMyLmVhc2UsXG4gICAgICAgIGZyb20gPSBfcHJvcHMyLmZyb20sXG4gICAgICAgIHRvID0gX3Byb3BzMi50byxcbiAgICAgICAgcGxheURpcmVjdGlvbiA9IF9wcm9wczIucGxheURpcmVjdGlvbjtcblxuXG4gICAgdGhpcy5lbGFwc2VkICs9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKSAqIHBsYXlEaXJlY3Rpb247XG4gICAgdGhpcy5wcm9ncmVzcyA9IGNsYW1wUHJvZ3Jlc3MoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSgwLCBkdXJhdGlvbiwgdGhpcy5lbGFwc2VkKSk7XG5cbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShmcm9tLCB0bywgZWFzZSh0aGlzLnByb2dyZXNzKSk7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMzLmR1cmF0aW9uLFxuICAgICAgICBwbGF5RGlyZWN0aW9uID0gX3Byb3BzMy5wbGF5RGlyZWN0aW9uLFxuICAgICAgICB5b3lvID0gX3Byb3BzMy55b3lvLFxuICAgICAgICBsb29wID0gX3Byb3BzMy5sb29wLFxuICAgICAgICBmbGlwID0gX3Byb3BzMy5mbGlwO1xuXG4gICAgdmFyIGlzQ29tcGxldGUgPSBwbGF5RGlyZWN0aW9uID09PSAxID8gdGhpcy5lbGFwc2VkID49IGR1cmF0aW9uIDogdGhpcy5lbGFwc2VkIDw9IDA7XG5cbiAgICBpZiAoaXNDb21wbGV0ZSAmJiAoeW95byB8fCBsb29wIHx8IGZsaXApKSB7XG4gICAgICB2YXIgaXNTdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIE5FWFRfU1RFUFMpIHtcbiAgICAgICAgdmFyIG5leHRTdGVwID0gTkVYVF9TVEVQU1trZXldO1xuICAgICAgICB2YXIgY291bnRQcm9wID0ga2V5ICsgJ0NvdW50JztcbiAgICAgICAgdmFyIHN0ZXBNYXggPSB0aGlzLmdldFByb3Aoa2V5KTtcbiAgICAgICAgdmFyIHN0ZXBDb3VudCA9IHRoaXMuZ2V0UHJvcChjb3VudFByb3ApO1xuXG4gICAgICAgIGlmIChzdGVwTWF4ID4gc3RlcENvdW50KSB7XG4gICAgICAgICAgdmFyIF9zZXRQcm9wcztcblxuICAgICAgICAgIHRoaXMuc2V0UHJvcHMoKF9zZXRQcm9wcyA9IHt9LCBfc2V0UHJvcHNbY291bnRQcm9wXSA9IHN0ZXBDb3VudCArIDEsIF9zZXRQcm9wcykpO1xuICAgICAgICAgIG5leHRTdGVwKHRoaXMpO1xuICAgICAgICAgIGlzU3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdGVwVGFrZW4pIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNDb21wbGV0ZTtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuZ2V0RWxhcHNlZCA9IGZ1bmN0aW9uIGdldEVsYXBzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZDtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuZmxpcCA9IGZ1bmN0aW9uIGZsaXAoKSB7XG4gICAgdGhpcy5lbGFwc2VkID0gdGhpcy5wcm9wcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcbiAgICB2YXIgX3JlZiA9IFt0aGlzLnByb3BzLnRvLCB0aGlzLnByb3BzLmZyb21dO1xuICAgIHRoaXMucHJvcHMuZnJvbSA9IF9yZWZbMF07XG4gICAgdGhpcy5wcm9wcy50byA9IF9yZWZbMV07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgdGhpcy5wcm9wcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBUd2Vlbjtcbn0oXzIuZGVmYXVsdCk7XG5cblR3ZWVuLmRlZmF1bHRQcm9wcyA9IHtcbiAgZHVyYXRpb246IDMwMCxcbiAgZWFzZTogX2Vhc2luZy5lYXNlT3V0LFxuICBmcm9tOiAwLFxuICB0bzogMSxcbiAgZmxpcDogMCxcbiAgZmxpcENvdW50OiAwLFxuICB5b3lvOiAwLFxuICB5b3lvQ291bnQ6IDAsXG4gIGxvb3A6IDAsXG4gIGxvb3BDb3VudDogMCxcbiAgcGxheURpcmVjdGlvbjogMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmdzWzBdO1xuXG4gICAgcmV0dXJuIG5ldyBUd2Vlbihwcm9wcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGZyb20gPSBhcmdzWzBdLFxuICAgICAgICB0byA9IGFyZ3NbMV0sXG4gICAgICAgIGR1cmF0aW9uID0gYXJnc1syXSxcbiAgICAgICAgZWFzZSA9IGFyZ3NbM10sXG4gICAgICAgIF9wcm9wczQgPSBhcmdzWzRdO1xuXG4gICAgcmV0dXJuIG5ldyBUd2VlbihfZXh0ZW5kcyh7IGZyb206IGZyb20sIHRvOiB0bywgZHVyYXRpb246IGR1cmF0aW9uLCBlYXNlOiBlYXNlIH0sIF9wcm9wczQpKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1IzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiSW1Oc1lXMXdVSEp2WjNKbGMzTWlMQ0pPUlZoVVgxTlVSVkJUSWl3aWJHOXZjQ0lzSW5SM1pXVnVJaXdpYzNSaGNuUWlMQ0o1YjNsdklpd2ljbVYyWlhKelpTSXNJbVpzYVhBaUxDSlVkMlZsYmlJc0ltOXVVM1JoY25RaUxDSndjbTl3Y3lJc0ltUjFjbUYwYVc5dUlpd2ljR3hoZVVScGNtVmpkR2x2YmlJc0ltVnNZWEJ6WldRaUxDSndjbTluY21WemN5SXNJblZ3WkdGMFpTSXNJbVZoYzJVaUxDSm1jbTl0SWl3aWRHOGlMQ0pwYzBGamRHbHZia052YlhCc1pYUmxJaXdpYVhORGIyMXdiR1YwWlNJc0ltbHpVM1JsY0ZSaGEyVnVJaXdpYTJWNUlpd2libVY0ZEZOMFpYQWlMQ0pqYjNWdWRGQnliM0FpTENKemRHVndUV0Y0SWl3aVoyVjBVSEp2Y0NJc0luTjBaWEJEYjNWdWRDSXNJbk5sZEZCeWIzQnpJaXdpWjJWMFJXeGhjSE5sWkNJc0ltUmxabUYxYkhSUWNtOXdjeUlzSW1ac2FYQkRiM1Z1ZENJc0lubHZlVzlEYjNWdWRDSXNJbXh2YjNCRGIzVnVkQ0lzSW1GeVozTWlMQ0pzWlc1bmRHZ2lYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGQk96czdPMEZCUTBFN08wRkJRMEU3TzBGQlEwRTdPMEZCUTBFN096czdPenM3T3pzN1FVRkZRU3hKUVVGTlFTeG5Ra0ZCWjBJc2VVSkJRVTBzUTBGQlRpeEZRVUZUTEVOQlFWUXNRMEZCZEVJN08wRkJSVUVzU1VGQlRVTXNZVUZCWVR0QlFVTnFRa01zVVVGQlRTeFZRVUZEUXl4TFFVRkVPMEZCUVVFc1YwRkJWMEVzVFVGQlRVTXNTMEZCVGl4RlFVRllPMEZCUVVFc1IwRkVWenRCUVVWcVFrTXNVVUZCVFN4VlFVRkRSaXhMUVVGRU8wRkJRVUVzVjBGQlYwRXNUVUZCVFVjc1QwRkJUaXhIUVVGblFrWXNTMEZCYUVJc1JVRkJXRHRCUVVGQkxFZEJSbGM3UVVGSGFrSkhMRkZCUVUwc1ZVRkJRMG9zUzBGQlJEdEJRVUZCTEZkQlFWZEJMRTFCUVUxSkxFbEJRVTRzUjBGQllVZ3NTMEZCWWl4RlFVRllPMEZCUVVFN1FVRklWeXhEUVVGdVFqczdTVUZOVFVrc1N6czdPenM3T3pzN08ydENRV1ZLUXl4UExITkNRVUZWTzBGQlFVRXNhVUpCUXpSQ0xFdEJRVXRETEV0QlJHcERPMEZCUVVFc1VVRkRRVU1zVVVGRVFTeFZRVU5CUVN4UlFVUkJPMEZCUVVFc1VVRkRWVU1zWVVGRVZpeFZRVU5WUVN4aFFVUldPenM3UVVGSFVpeFRRVUZMUXl4UFFVRk1MRWRCUVdkQ1JDeHJRa0ZCYTBJc1EwRkJia0lzUjBGQmQwSXNRMEZCZUVJc1IwRkJORUpFTEZGQlFUTkRPMEZCUTBFc1UwRkJTMGNzVVVGQlRDeEhRVUZuUWl4RFFVRm9RanRCUVVORUxFYzdPMnRDUVVWRVF5eE5MSEZDUVVGVE8wRkJRVUVzYTBKQlF6WkRMRXRCUVV0TUxFdEJSR3hFTzBGQlFVRXNVVUZEUTBNc1VVRkVSQ3hYUVVORFFTeFJRVVJFTzBGQlFVRXNVVUZEVjBzc1NVRkVXQ3hYUVVOWFFTeEpRVVJZTzBGQlFVRXNVVUZEYVVKRExFbEJSR3BDTEZkQlEybENRU3hKUVVScVFqdEJRVUZCTEZGQlEzVkNReXhGUVVSMlFpeFhRVU4xUWtFc1JVRkVka0k3UVVGQlFTeFJRVU15UWs0c1lVRkVNMElzVjBGRE1rSkJMR0ZCUkROQ096czdRVUZIVUN4VFFVRkxReXhQUVVGTUxFbEJRV2RDTEhWRFFVRjFRa1FzWVVGQmRrTTdRVUZEUVN4VFFVRkxSU3hSUVVGTUxFZEJRV2RDWkN4alFVRmpMR2REUVVGeFFpeERRVUZ5UWl4RlFVRjNRbGNzVVVGQmVFSXNSVUZCYTBNc1MwRkJTMFVzVDBGQmRrTXNRMEZCWkN4RFFVRm9RanM3UVVGRlFTeFhRVUZQTEdkRFFVRnhRa2tzU1VGQmNrSXNSVUZCTWtKRExFVkJRVE5DTEVWQlFTdENSaXhMUVVGTExFdEJRVXRHTEZGQlFWWXNRMEZCTDBJc1EwRkJVRHRCUVVORUxFYzdPMnRDUVVWRVN5eG5RaXdyUWtGQmJVSTdRVUZCUVN4clFrRkRjVU1zUzBGQlMxUXNTMEZFTVVNN1FVRkJRU3hSUVVOVVF5eFJRVVJUTEZkQlExUkJMRkZCUkZNN1FVRkJRU3hSUVVORFF5eGhRVVJFTEZkQlEwTkJMR0ZCUkVRN1FVRkJRU3hSUVVOblFsQXNTVUZFYUVJc1YwRkRaMEpCTEVsQlJHaENPMEZCUVVFc1VVRkRjMEpJTEVsQlJIUkNMRmRCUTNOQ1FTeEpRVVIwUWp0QlFVRkJMRkZCUXpSQ1N5eEpRVVExUWl4WFFVTTBRa0VzU1VGRU5VSTdPMEZCUldwQ0xGRkJRVWxoTEdGQlFXTlNMR3RDUVVGclFpeERRVUZ1UWl4SFFVRjVRaXhMUVVGTFF5eFBRVUZNTEVsQlFXZENSaXhSUVVGNlF5eEhRVUZ6UkN4TFFVRkxSU3hQUVVGTUxFbEJRV2RDTEVOQlFYWkdPenRCUVVWQkxGRkJRVWxQTEdWQlFXVm1MRkZCUVZGSUxFbEJRVklzU1VGQlowSkxMRWxCUVM5Q0xFTkJRVW9zUlVGQk1FTTdRVUZEZUVNc1ZVRkJTV01zWTBGQll5eExRVUZzUWpzN1FVRkZRU3hYUVVGTExFbEJRVWxETEVkQlFWUXNTVUZCWjBKeVFpeFZRVUZvUWl4RlFVRTBRanRCUVVNeFFpeFpRVUZOYzBJc1YwRkJWM1JDTEZkQlFWZHhRaXhIUVVGWUxFTkJRV3BDTzBGQlEwRXNXVUZCVFVVc1dVRkJXVVlzVFVGQlRTeFBRVUY0UWp0QlFVTkJMRmxCUVUxSExGVkJRVlVzUzBGQlMwTXNUMEZCVEN4RFFVRmhTaXhIUVVGaUxFTkJRV2hDTzBGQlEwRXNXVUZCVFVzc1dVRkJXU3hMUVVGTFJDeFBRVUZNTEVOQlFXRkdMRk5CUVdJc1EwRkJiRUk3TzBGQlJVRXNXVUZCU1VNc1ZVRkJWVVVzVTBGQlpDeEZRVUY1UWp0QlFVRkJPenRCUVVOMlFpeGxRVUZMUXl4UlFVRk1MRFJDUVVOSFNpeFRRVVJJTEVsQlEyVkhMRmxCUVZrc1EwRkVNMEk3UVVGSFFVb3NiVUpCUVZNc1NVRkJWRHRCUVVOQlJpeDNRa0ZCWXl4SlFVRmtPMEZCUTBRN1FVRkRSanM3UVVGRlJDeFZRVUZKUVN4WFFVRktMRVZCUVdsQ1JDeGhRVUZoTEV0QlFXSTdRVUZEYkVJN08wRkJSVVFzVjBGQlQwRXNWVUZCVUR0QlFVTkVMRWM3TzJ0Q1FVVkVVeXhWTEhsQ1FVRmhPMEZCUTFnc1YwRkJUeXhMUVVGTGFFSXNUMEZCV2p0QlFVTkVMRWM3TzJ0Q1FVVkVUaXhKTEcxQ1FVRlBPMEZCUTB3c1UwRkJTMDBzVDBGQlRDeEhRVUZsTEV0QlFVdElMRXRCUVV3c1EwRkJWME1zVVVGQldDeEhRVUZ6UWl4TFFVRkxSU3hQUVVFeFF6dEJRVVJMTEdWQlJUaENMRU5CUVVNc1MwRkJTMGdzUzBGQlRDeERRVUZYVVN4RlFVRmFMRVZCUVdkQ0xFdEJRVXRTTEV0QlFVd3NRMEZCVjA4c1NVRkJNMElzUTBGR09VSTdRVUZGU2l4VFFVRkxVQ3hMUVVGTUxFTkJRVmRQTEVsQlJsQTdRVUZGWVN4VFFVRkxVQ3hMUVVGTUxFTkJRVmRSTEVWQlJuaENPenRCUVVkTUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08ydENRVVZFV2l4UExITkNRVUZWTzBGQlExSXNVMEZCUzBrc1MwRkJUQ3hEUVVGWFJTeGhRVUZZTEVsQlFUUkNMRU5CUVVNc1EwRkJOMEk3UVVGRFFTeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96czdPenRCUVhoRlIwb3NTeXhEUVVOSGMwSXNXU3hIUVVGbE8wRkJRM0JDYmtJc1dVRkJWU3hIUVVSVk8wRkJSWEJDU3l4MVFrRkdiMEk3UVVGSGNFSkRMRkZCUVUwc1EwRklZenRCUVVsd1FrTXNUVUZCU1N4RFFVcG5RanRCUVV0d1FsZ3NVVUZCVFN4RFFVeGpPMEZCVFhCQ2QwSXNZVUZCVnl4RFFVNVRPMEZCVDNCQ01VSXNVVUZCVFN4RFFWQmpPMEZCVVhCQ01rSXNZVUZCVnl4RFFWSlRPMEZCVTNCQ09VSXNVVUZCVFN4RFFWUmpPMEZCVlhCQ0swSXNZVUZCVnl4RFFWWlRPMEZCVjNCQ2NrSXNhVUpCUVdVN1FVRllTeXhET3p0clFrRXdSVlFzV1VGQllUdEJRVUZCTEc5RFFVRlVjMElzU1VGQlV6dEJRVUZVUVN4UlFVRlRPMEZCUVVFN08wRkJRekZDTEUxQlFVbEJMRXRCUVV0RExFMUJRVXdzUzBGQlowSXNRMEZCY0VJc1JVRkJkVUk3UVVGQlFTeFJRVU5pZWtJc1MwRkVZU3hIUVVOSWQwSXNTVUZFUnpzN1FVRkZja0lzVjBGQlR5eEpRVUZKTVVJc1MwRkJTaXhEUVVGVlJTeExRVUZXTEVOQlFWQTdRVUZEUkN4SFFVaEVMRTFCUjA4N1FVRkJRU3hSUVVOSFR5eEpRVVJJTEVkQlEzVkRhVUlzU1VGRWRrTTdRVUZCUVN4UlFVTlRhRUlzUlVGRVZDeEhRVU4xUTJkQ0xFbEJSSFpETzBGQlFVRXNVVUZEWVhaQ0xGRkJSR0lzUjBGRGRVTjFRaXhKUVVSMlF6dEJRVUZCTEZGQlEzVkNiRUlzU1VGRWRrSXNSMEZEZFVOclFpeEpRVVIyUXp0QlFVRkJMRkZCUXpaQ2VFSXNUMEZFTjBJc1IwRkRkVU4zUWl4SlFVUjJRenM3UVVGRlRDeFhRVUZQTEVsQlFVa3hRaXhMUVVGS0xGbEJRVmxUTEZWQlFWb3NSVUZCYTBKRExFMUJRV3hDTEVWQlFYTkNVQ3hyUWtGQmRFSXNSVUZCWjBOTExGVkJRV2hETEVsQlFYbERUaXhQUVVGNlF5eEZRVUZRTzBGQlEwUTdRVUZEUml4RElpd2labWxzWlNJNkluUjNaV1Z1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhKekxtaGhiR3d2VUhKdmFtVmpkSE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMeWM3WEc1cGJYQnZjblFnZXlCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ2ZTQm1jbTl0SUNjdUxpOW1jbUZ0WlhONWJtTW5PMXh1YVcxd2IzSjBJSHNnWTJ4aGJYQWdmU0JtY205dElDY3VMaTlwYm1NdmRISmhibk5tYjNKdFpYSnpKenRjYm1sdGNHOXlkQ0I3SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbExDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeUI5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JtbHRjRzl5ZENCN0lHVmhjMlZQZFhRZ2ZTQm1jbTl0SUNjdUxpOXBibU12WldGemFXNW5KenRjYmx4dVkyOXVjM1FnWTJ4aGJYQlFjbTluY21WemN5QTlJR05zWVcxd0tEQXNJREVwTzF4dVhHNWpiMjV6ZENCT1JWaFVYMU5VUlZCVElEMGdlMXh1SUNCc2IyOXdPaUFvZEhkbFpXNHBJRDArSUhSM1pXVnVMbk4wWVhKMEtDa3NYRzRnSUhsdmVXODZJQ2gwZDJWbGJpa2dQVDRnZEhkbFpXNHVjbVYyWlhKelpTZ3BMbk4wWVhKMEtDa3NYRzRnSUdac2FYQTZJQ2gwZDJWbGJpa2dQVDRnZEhkbFpXNHVabXhwY0NncExuTjBZWEowS0NsY2JuMDdYRzVjYm1Oc1lYTnpJRlIzWldWdUlHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0JrZFhKaGRHbHZiam9nTXpBd0xGeHVJQ0FnSUdWaGMyVTZJR1ZoYzJWUGRYUXNYRzRnSUNBZ1puSnZiVG9nTUN4Y2JpQWdJQ0IwYnpvZ01TeGNiaUFnSUNCbWJHbHdPaUF3TEZ4dUlDQWdJR1pzYVhCRGIzVnVkRG9nTUN4Y2JpQWdJQ0I1YjNsdk9pQXdMRnh1SUNBZ0lIbHZlVzlEYjNWdWREb2dNQ3hjYmlBZ0lDQnNiMjl3T2lBd0xGeHVJQ0FnSUd4dmIzQkRiM1Z1ZERvZ01DeGNiaUFnSUNCd2JHRjVSR2x5WldOMGFXOXVPaUF4WEc0Z0lIMDdYRzVjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdSMWNtRjBhVzl1TENCd2JHRjVSR2x5WldOMGFXOXVJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJRDBnS0hCc1lYbEVhWEpsWTNScGIyNGdQVDA5SURFcElEOGdNQ0E2SUdSMWNtRjBhVzl1TzF4dUlDQWdJSFJvYVhNdWNISnZaM0psYzNNZ1BTQXdPMXh1SUNCOVhHNWNiaUFnZFhCa1lYUmxLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2daSFZ5WVhScGIyNHNJR1ZoYzJVc0lHWnliMjBzSUhSdkxDQndiR0Y1UkdseVpXTjBhVzl1SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdkR2hwY3k1bGJHRndjMlZrSUNzOUlIUnBiV1ZUYVc1alpVeGhjM1JHY21GdFpTZ3BJQ29nY0d4aGVVUnBjbVZqZEdsdmJqdGNiaUFnSUNCMGFHbHpMbkJ5YjJkeVpYTnpJRDBnWTJ4aGJYQlFjbTluY21WemN5aG5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2d3TENCa2RYSmhkR2x2Yml3Z2RHaHBjeTVsYkdGd2MyVmtLU2s3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vWm5KdmJTd2dkRzhzSUdWaGMyVW9kR2hwY3k1d2NtOW5jbVZ6Y3lrcE8xeHVJQ0I5WEc1Y2JpQWdhWE5CWTNScGIyNURiMjF3YkdWMFpTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHUjFjbUYwYVc5dUxDQndiR0Y1UkdseVpXTjBhVzl1TENCNWIzbHZMQ0JzYjI5d0xDQm1iR2x3SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHeGxkQ0JwYzBOdmJYQnNaWFJsSUQwZ0tIQnNZWGxFYVhKbFkzUnBiMjRnUFQwOUlERXBJRDhnS0hSb2FYTXVaV3hoY0hObFpDQStQU0JrZFhKaGRHbHZiaWtnT2lBb2RHaHBjeTVsYkdGd2MyVmtJRHc5SURBcE8xeHVYRzRnSUNBZ2FXWWdLR2x6UTI5dGNHeGxkR1VnSmlZZ0tIbHZlVzhnZkh3Z2JHOXZjQ0I4ZkNCbWJHbHdLU2tnZTF4dUlDQWdJQ0FnYkdWMElHbHpVM1JsY0ZSaGEyVnVJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQk9SVmhVWDFOVVJWQlRLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzVsZUhSVGRHVndJRDBnVGtWWVZGOVRWRVZRVTF0clpYbGRPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmpiM1Z1ZEZCeWIzQWdQU0JyWlhrZ0t5QW5RMjkxYm5Rbk8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCemRHVndUV0Y0SUQwZ2RHaHBjeTVuWlhSUWNtOXdLR3RsZVNrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOMFpYQkRiM1Z1ZENBOUlIUm9hWE11WjJWMFVISnZjQ2hqYjNWdWRGQnliM0FwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2h6ZEdWd1RXRjRJRDRnYzNSbGNFTnZkVzUwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkR2hwY3k1elpYUlFjbTl3Y3loN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JiWTI5MWJuUlFjbTl3WFRvZ2MzUmxjRU52ZFc1MElDc2dNVnh1SUNBZ0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQWdJRzVsZUhSVGRHVndLSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQWdJR2x6VTNSbGNGUmhhMlZ1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCcFppQW9hWE5UZEdWd1ZHRnJaVzRwSUdselEyOXRjR3hsZEdVZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdhWE5EYjIxd2JHVjBaVHRjYmlBZ2ZWeHVYRzRnSUdkbGRFVnNZWEJ6WldRb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVaV3hoY0hObFpEdGNiaUFnZlZ4dVhHNGdJR1pzYVhBb0tTQjdYRzRnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJRDBnZEdocGN5NXdjbTl3Y3k1a2RYSmhkR2x2YmlBdElIUm9hWE11Wld4aGNITmxaRHRjYmlBZ0lDQmJkR2hwY3k1d2NtOXdjeTVtY205dExDQjBhR2x6TG5CeWIzQnpMblJ2WFNBOUlGdDBhR2x6TG5CeWIzQnpMblJ2TENCMGFHbHpMbkJ5YjNCekxtWnliMjFkTzF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2NtVjJaWEp6WlNncElIdGNiaUFnSUNCMGFHbHpMbkJ5YjNCekxuQnNZWGxFYVhKbFkzUnBiMjRnS2owZ0xURTdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLQzR1TG1GeVozTXBJRDArSUh0Y2JpQWdhV1lnS0dGeVozTXViR1Z1WjNSb0lEMDlQU0F4S1NCN1hHNGdJQ0FnWTI5dWMzUWdXeUJ3Y205d2N5QmRJRDBnWVhKbmN6dGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lGUjNaV1Z1S0hCeWIzQnpLVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0JqYjI1emRDQmJJR1p5YjIwc0lIUnZMQ0JrZFhKaGRHbHZiaXdnWldGelpTd2djSEp2Y0hNZ1hTQTlJR0Z5WjNNN1hHNGdJQ0FnY21WMGRYSnVJRzVsZHlCVWQyVmxiaWg3SUdaeWIyMHNJSFJ2TENCa2RYSmhkR2x2Yml3Z1pXRnpaU3dnTGk0dWNISnZjSE1nZlNrN1hHNGdJSDFjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3R3ZWVuLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jaGFpbiA9IHJlcXVpcmUoJy4vY2hhaW4nKTtcblxudmFyIF9jaGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGFpbik7XG5cbnZhciBfcGFyYWxsZWwgPSByZXF1aXJlKCcuL3BhcmFsbGVsJyk7XG5cbnZhciBfcGFyYWxsZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyYWxsZWwpO1xuXG52YXIgX2RlbGF5ID0gcmVxdWlyZSgnLi9kZWxheScpO1xuXG52YXIgX2RlbGF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlbGF5KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcGFyYWxsZWwgQWN0aW9uIGNvbXBvc2VkIG9mIGNoYWluZWRcbiAqIGRlbGF5IGFuZCBhY3Rpb25zLiBJbnRlcnZhbCBjYW4gYmUgZWl0aGVyIGEgbnVtYmVyXG4gKiB0byBtdWx0aXBseSBieSBgaWAgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgYGlgXG4gKlxuICogU3RyYWlnaHQgY3JpYmJlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi8yNGM3MmY1MTNlNDhmMGJkYzQwODIwYjQzMjYyMzI4ZmUyYzMwMWQ0L0xpYnJhcmllcy9BbmltYXRlZC9zcmMvQW5pbWF0ZWRJbXBsZW1lbnRhdGlvbi5qcyNMMjAzMVxuICogXiBUaGlzIGZ1bmN0aW9uIHNvbGQgYSBwcmV2aW91c2x5LWNvbmZsaWN0ZWQgbWUgb24gdGhlIG1lcml0IG9mIG1vdmluZyBmcm9tXG4gKiBqUXVlcnktc3R5bGUgbXVsdGktcHJvcGVydHkgYW5pbWF0aW9ucyB0byBzaW5nbGUtcHJvcGVydHkuXG4gKiBAcGFyYW0gIHthcnJheX0gYWN0aW9uc1xuICogQHBhcmFtICB7ZnVuY3Rpb24gfCBudW1iZXJ9IGludGVydmFsXG4gKiBAcmV0dXJuIHtBY3Rpb259XG4gKi9cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhY3Rpb25zLCBpbnRlcnZhbCwgb25Db21wbGV0ZSkge1xuICB2YXIgaW50ZXJ2YWxJc0Z1bmN0aW9uID0gKDAsIF91dGlscy5pc0Z1bmMpKGludGVydmFsKTtcblxuICByZXR1cm4gKDAsIF9wYXJhbGxlbDIuZGVmYXVsdCkoYWN0aW9ucy5tYXAoZnVuY3Rpb24gKGFjdGlvbiwgaSkge1xuICAgIHZhciB0aW1lVG9EZWxheSA9IGludGVydmFsSXNGdW5jdGlvbiA/IGludGVydmFsKGkpIDogaSAqIGludGVydmFsO1xuICAgIHJldHVybiAoMCwgX2NoYWluMi5kZWZhdWx0KShbKDAsIF9kZWxheTIuZGVmYXVsdCkodGltZVRvRGVsYXkpLCBhY3Rpb25dKTtcbiAgfSksIHsgb25Db21wbGV0ZTogb25Db21wbGV0ZSB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNOMFlXZG5aWEl1YW5NaVhTd2libUZ0WlhNaU9sc2lZV04wYVc5dWN5SXNJbWx1ZEdWeWRtRnNJaXdpYjI1RGIyMXdiR1YwWlNJc0ltbHVkR1Z5ZG1Gc1NYTkdkVzVqZEdsdmJpSXNJbTFoY0NJc0ltRmpkR2x2YmlJc0lta2lMQ0owYVcxbFZHOUVaV3hoZVNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUlVFN096czdPenM3T3pzN096dHJRa0ZaWlN4VlFVRkRRU3hQUVVGRUxFVkJRVlZETEZGQlFWWXNSVUZCYjBKRExGVkJRWEJDTEVWQlFXMURPMEZCUTJoRUxFMUJRVTFETEhGQ1FVRnhRaXh0UWtGQlQwWXNVVUZCVUN4RFFVRXpRanM3UVVGRlFTeFRRVUZQTEhkQ1FVRlRSQ3hSUVVGUlNTeEhRVUZTTEVOQlFWa3NWVUZCUTBNc1RVRkJSQ3hGUVVGVFF5eERRVUZVTEVWQlFXVTdRVUZEZWtNc1VVRkJUVU1zWTBGQlpVb3NhMEpCUVVRc1IwRkJkVUpHTEZOQlFWTkxMRU5CUVZRc1EwRkJka0lzUjBGQmNVTkJMRWxCUVVsTUxGRkJRVGRFTzBGQlEwRXNWMEZCVHl4eFFrRkJUU3hEUVVOWUxIRkNRVUZOVFN4WFFVRk9MRU5CUkZjc1JVRkZXRVlzVFVGR1Z5eERRVUZPTEVOQlFWQTdRVUZKUkN4SFFVNWxMRU5CUVZRc1JVRk5TQ3hGUVVGRlNDeHpRa0ZCUml4RlFVNUhMRU5CUVZBN1FVRlBSQ3hESWl3aVptbHNaU0k2SW5OMFlXZG5aWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoY25NdWFHRnNiQzlRY205cVpXTjBjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnWTJoaGFXNGdabkp2YlNBbkxpOWphR0ZwYmljN1hHNXBiWEJ2Y25RZ2NHRnlZV3hzWld3Z1puSnZiU0FuTGk5d1lYSmhiR3hsYkNjN1hHNXBiWEJ2Y25RZ1pHVnNZWGtnWm5KdmJTQW5MaTlrWld4aGVTYzdYRzVwYlhCdmNuUWdleUJwYzBaMWJtTWdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNHZLaXBjYmlBcUlFTnlaV0YwWlhNZ1lTQnVaWGNnY0dGeVlXeHNaV3dnUVdOMGFXOXVJR052YlhCdmMyVmtJRzltSUdOb1lXbHVaV1JjYmlBcUlHUmxiR0Y1SUdGdVpDQmhZM1JwYjI1ekxpQkpiblJsY25aaGJDQmpZVzRnWW1VZ1pXbDBhR1Z5SUdFZ2JuVnRZbVZ5WEc0Z0tpQjBieUJ0ZFd4MGFYQnNlU0JpZVNCZ2FXQWdiM0lnWVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z1ltVWdjSEp2ZG1sa1pXUWdZR2xnWEc0Z0tseHVJQ29nVTNSeVlXbG5hSFFnWTNKcFltSmxaQ0JtY205dElHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW1ZV05sWW05dmF5OXlaV0ZqZEMxdVlYUnBkbVV2WW14dllpOHlOR00zTW1ZMU1UTmxORGhtTUdKa1l6UXdPREl3WWpRek1qWXlNekk0Wm1VeVl6TXdNV1EwTDB4cFluSmhjbWxsY3k5QmJtbHRZWFJsWkM5emNtTXZRVzVwYldGMFpXUkpiWEJzWlcxbGJuUmhkR2x2Ymk1cWN5Tk1NakF6TVZ4dUlDb2dYaUJVYUdseklHWjFibU4wYVc5dUlITnZiR1FnWVNCd2NtVjJhVzkxYzJ4NUxXTnZibVpzYVdOMFpXUWdiV1VnYjI0Z2RHaGxJRzFsY21sMElHOW1JRzF2ZG1sdVp5Qm1jbTl0WEc0Z0tpQnFVWFZsY25rdGMzUjViR1VnYlhWc2RHa3RjSEp2Y0dWeWRIa2dZVzVwYldGMGFXOXVjeUIwYnlCemFXNW5iR1V0Y0hKdmNHVnlkSGt1WEc0Z0tpQkFjR0Z5WVcwZ0lIdGhjbkpoZVgwZ1lXTjBhVzl1YzF4dUlDb2dRSEJoY21GdElDQjdablZ1WTNScGIyNGdmQ0J1ZFcxaVpYSjlJR2x1ZEdWeWRtRnNYRzRnS2lCQWNtVjBkWEp1SUh0QlkzUnBiMjU5WEc0Z0tpOWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaGhZM1JwYjI1ekxDQnBiblJsY25aaGJDd2diMjVEYjIxd2JHVjBaU2tnUFQ0Z2UxeHVJQ0JqYjI1emRDQnBiblJsY25aaGJFbHpSblZ1WTNScGIyNGdQU0JwYzBaMWJtTW9hVzUwWlhKMllXd3BPMXh1WEc0Z0lISmxkSFZ5YmlCd1lYSmhiR3hsYkNoaFkzUnBiMjV6TG0xaGNDZ29ZV04wYVc5dUxDQnBLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdkR2x0WlZSdlJHVnNZWGtnUFNBb2FXNTBaWEoyWVd4SmMwWjFibU4wYVc5dUtTQS9JR2x1ZEdWeWRtRnNLR2twSURvZ2FTQXFJR2x1ZEdWeWRtRnNPMXh1SUNBZ0lISmxkSFZ5YmlCamFHRnBiaWhiWEc0Z0lDQWdJQ0JrWld4aGVTaDBhVzFsVkc5RVpXeGhlU2tzWEc0Z0lDQWdJQ0JoWTNScGIyNWNiaUFnSUNCZEtUdGNiaUFnZlNrc0lIc2diMjVEYjIxd2JHVjBaU0I5S1R0Y2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9zdGFnZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBWYWx1ZSA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhWYWx1ZSwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVmFsdWUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZhbHVlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVmFsdWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgdGhpcy50b1VwZGF0ZSA9IHY7XG4gICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICB9O1xuXG4gIFZhbHVlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9VcGRhdGU7XG4gIH07XG5cbiAgcmV0dXJuIFZhbHVlO1xufShfMi5kZWZhdWx0KTtcblxuVmFsdWUuZGVmYXVsdFByb3BzID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY3VycmVudCwgb25VcGRhdGUpIHtcbiAgcmV0dXJuIG5ldyBWYWx1ZSh7IGN1cnJlbnQ6IGN1cnJlbnQsIG9uVXBkYXRlOiBvblVwZGF0ZSB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNaaGJIVmxMbXB6SWwwc0ltNWhiV1Z6SWpwYklsWmhiSFZsSWl3aWMyVjBJaXdpZGlJc0luUnZWWEJrWVhSbElpd2ljMk5vWldSMWJHVmtWWEJrWVhSbElpd2lkWEJrWVhSbElpd2laR1ZtWVhWc2RGQnliM0J6SWl3aWNHRnpjMmwyWlNJc0ltTjFjbkpsYm5RaUxDSnZibFZ3WkdGMFpTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN096czdPenM3U1VGRlRVRXNTenM3T3pzN096czdPMnRDUVV0S1F5eEhMR2RDUVVGSlF5eERMRVZCUVVjN1FVRkRUQ3hUUVVGTFF5eFJRVUZNTEVkQlFXZENSQ3hEUVVGb1FqdEJRVU5CTEd0RFFVRmpMRXRCUVV0RkxHVkJRVzVDTzBGQlEwUXNSenM3YTBKQlJVUkRMRTBzY1VKQlFWTTdRVUZEVUN4WFFVRlBMRXRCUVV0R0xGRkJRVm83UVVGRFJDeEhPenM3T3p0QlFWcEhTQ3hMTEVOQlEwZE5MRmtzUjBGQlpUdEJRVU53UWtNc1YwRkJVenRCUVVSWExFTTdPMnRDUVdOVUxGVkJRVU5ETEU5QlFVUXNSVUZCVlVNc1VVRkJWanRCUVVGQkxGTkJRWFZDTEVsQlFVbFVMRXRCUVVvc1EwRkJWU3hGUVVGRlVTeG5Ra0ZCUml4RlFVRlhReXhyUWtGQldDeEZRVUZXTEVOQlFYWkNPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSjJZV3gxWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGeWN5NW9ZV3hzTDFCeWIycGxZM1J6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaThuTzF4dWFXMXdiM0owSUhzZ2IyNUdjbUZ0WlZWd1pHRjBaU0I5SUdaeWIyMGdKeTR1TDJaeVlXMWxjM2x1WXljN1hHNWNibU5zWVhOeklGWmhiSFZsSUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ2MzUmhkR2xqSUdSbFptRjFiSFJRY205d2N5QTlJSHRjYmlBZ0lDQndZWE56YVhabE9pQjBjblZsWEc0Z0lIMDdYRzVjYmlBZ2MyVjBLSFlwSUh0Y2JpQWdJQ0IwYUdsekxuUnZWWEJrWVhSbElEMGdkanRjYmlBZ0lDQnZia1p5WVcxbFZYQmtZWFJsS0hSb2FYTXVjMk5vWldSMWJHVmtWWEJrWVhSbEtUdGNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTUwYjFWd1pHRjBaVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWTNWeWNtVnVkQ3dnYjI1VmNHUmhkR1VwSUQwK0lHNWxkeUJXWVd4MVpTaDdJR04xY25KbGJuUXNJRzl1VlhCa1lYUmxJSDBwTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdmFsdWUuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfb25OZXh0RnJhbWUgPSByZXF1aXJlKCcuL29uLW5leHQtZnJhbWUnKTtcblxudmFyIF9vbk5leHRGcmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vbk5leHRGcmFtZSk7XG5cbnZhciBfY3JlYXRlUmVuZGVyU3RlcCA9IHJlcXVpcmUoJy4vY3JlYXRlLXJlbmRlci1zdGVwJyk7XG5cbnZhciBfY3JlYXRlUmVuZGVyU3RlcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSZW5kZXJTdGVwKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuXG4vKipcbiAqIE1heGltdW0gcGVybWl0dGVkIG1zIHNpbmNlIGxhc3QgZnJhbWVcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBNQVhfRUxBUFNFRCA9IDIwO1xuXG4vKipcbiAqIEN1cnJlbnQgZnJhbWVzdGFtcFxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIGN1cnJlbnRGcmFtZXN0YW1wID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcblxudmFyIGVsYXBzZWQgPSAwO1xuXG4vKipcbiAqIEZhY3RvciB0byBtdWx0aXBseSBgZWxhcHNlZGAgYnkgLSBcbiAqIDAuNSB3b3VsZCBiZSBzbG93IG1vdGlvbiwgMiB3b3VsZCBiZSBmYXN0XG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgZGlsYXRpb24gPSAxO1xuXG5mdW5jdGlvbiBzdGFydFJlbmRlckxvb3AoKSB7XG4gIGlmICghd2lsbFJlbmRlck5leHRGcmFtZSkge1xuICAgIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSB0cnVlO1xuICAgICgwLCBfb25OZXh0RnJhbWUyLmRlZmF1bHQpKHByb2Nlc3NGcmFtZSk7XG4gIH1cbn1cblxudmFyIGZyYW1lU3RhcnQgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVVcGRhdGUgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVSZW5kZXIgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVFbmQgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NGcmFtZShmcmFtZXN0YW1wKSB7XG4gIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcbiAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50RnJhbWVzdGFtcCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICBjdXJyZW50RnJhbWVzdGFtcCA9IGZyYW1lc3RhbXA7XG5cbiAgZnJhbWVTdGFydC5wcm9jZXNzKCk7XG4gIGZyYW1lVXBkYXRlLnByb2Nlc3MoKTtcbiAgZnJhbWVSZW5kZXIucHJvY2VzcygpO1xuICBmcmFtZUVuZC5wcm9jZXNzKCk7XG59XG5cbnZhciBvbkZyYW1lU3RhcnQgPSBleHBvcnRzLm9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuc2NoZWR1bGU7XG52YXIgb25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLnNjaGVkdWxlO1xudmFyIG9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5zY2hlZHVsZTtcbnZhciBvbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZnJhbWVFbmQuc2NoZWR1bGU7XG52YXIgY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lVXBkYXRlID0gZnJhbWVVcGRhdGUuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGZyYW1lRW5kLmNhbmNlbDtcblxudmFyIHRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZWxhcHNlZDtcbn07XG52YXIgY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjdXJyZW50RnJhbWVzdGFtcDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bWNtRnRaWE41Ym1NdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sc2lkMmxzYkZKbGJtUmxjazVsZUhSR2NtRnRaU0lzSWsxQldGOUZURUZRVTBWRUlpd2lZM1Z5Y21WdWRFWnlZVzFsYzNSaGJYQWlMQ0psYkdGd2MyVmtJaXdpWkdsc1lYUnBiMjRpTENKemRHRnlkRkpsYm1SbGNreHZiM0FpTENKd2NtOWpaWE56Um5KaGJXVWlMQ0ptY21GdFpWTjBZWEowSWl3aVpuSmhiV1ZWY0dSaGRHVWlMQ0ptY21GdFpWSmxibVJsY2lJc0ltWnlZVzFsUlc1a0lpd2labkpoYldWemRHRnRjQ0lzSWsxaGRHZ2lMQ0p0WVhnaUxDSnRhVzRpTENKd2NtOWpaWE56SWl3aWIyNUdjbUZ0WlZOMFlYSjBJaXdpYzJOb1pXUjFiR1VpTENKdmJrWnlZVzFsVlhCa1lYUmxJaXdpYjI1R2NtRnRaVkpsYm1SbGNpSXNJbTl1Um5KaGJXVkZibVFpTENKallXNWpaV3hQYmtaeVlXMWxVM1JoY25RaUxDSmpZVzVqWld3aUxDSmpZVzVqWld4UGJrWnlZVzFsVlhCa1lYUmxJaXdpWTJGdVkyVnNUMjVHY21GdFpWSmxibVJsY2lJc0ltTmhibU5sYkU5dVJuSmhiV1ZGYm1RaUxDSjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVWlMQ0pqZFhKeVpXNTBSbkpoYldWVWFXMWxjM1JoYlhBaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlJVRXNTVUZCU1VFc2MwSkJRWE5DTEV0QlFURkNPenRCUVVWQk96czdPMEZCU1VFc1NVRkJUVU1zWTBGQll5eEZRVUZ3UWpzN1FVRkZRVHM3T3p0QlFVbEJMRWxCUVVsRExHOUNRVUZ2UWl4NVFrRkJlRUk3TzBGQlJVRXNTVUZCU1VNc1ZVRkJWU3hEUVVGa096dEJRVVZCT3pzN096dEJRVXRCTEVsQlFVbERMRmRCUVZjc1EwRkJaanM3UVVGRlFTeFRRVUZUUXl4bFFVRlVMRWRCUVRKQ08wRkJRM3BDTEUxQlFVa3NRMEZCUTB3c2JVSkJRVXdzUlVGQk1FSTdRVUZEZUVKQkxEQkNRVUZ6UWl4SlFVRjBRanRCUVVOQkxDdENRVUZaVFN4WlFVRmFPMEZCUTBRN1FVRkRSanM3UVVGRlJDeEpRVUZOUXl4aFFVRmhMR2REUVVGcFFrWXNaVUZCYWtJc1EwRkJia0k3UVVGRFFTeEpRVUZOUnl4alFVRmpMR2REUVVGcFFrZ3NaVUZCYWtJc1EwRkJjRUk3UVVGRFFTeEpRVUZOU1N4alFVRmpMR2REUVVGcFFrb3NaVUZCYWtJc1EwRkJjRUk3UVVGRFFTeEpRVUZOU3l4WFFVRlhMR2REUVVGcFFrd3NaVUZCYWtJc1EwRkJha0k3TzBGQlJVRXNVMEZCVTBNc1dVRkJWQ3hEUVVGelFrc3NWVUZCZEVJc1JVRkJhME03UVVGRGFFTllMSGRDUVVGelFpeExRVUYwUWp0QlFVTkJSeXhaUVVGVlV5eExRVUZMUXl4SFFVRk1MRU5CUVZORUxFdEJRVXRGTEVkQlFVd3NRMEZCVTBnc1lVRkJZVlFzYVVKQlFYUkNMRVZCUVhsRFJDeFhRVUY2UXl4RFFVRlVMRVZCUVdkRkxFTkJRV2hGTEVsQlFYRkZSeXhSUVVFdlJUdEJRVU5CUml4elFrRkJiMEpUTEZWQlFYQkNPenRCUVVWQlNpeGhRVUZYVVN4UFFVRllPMEZCUTBGUUxHTkJRVmxQTEU5QlFWbzdRVUZEUVU0c1kwRkJXVTBzVDBGQldqdEJRVU5CVEN4WFFVRlRTeXhQUVVGVU8wRkJRMFE3TzBGQlJVMHNTVUZCVFVNc2MwTkJRV1ZVTEZkQlFWZFZMRkZCUVdoRE8wRkJRMEVzU1VGQlRVTXNkME5CUVdkQ1ZpeFpRVUZaVXl4UlFVRnNRenRCUVVOQkxFbEJRVTFGTEhkRFFVRm5RbFlzV1VGQldWRXNVVUZCYkVNN1FVRkRRU3hKUVVGTlJ5eHJRMEZCWVZZc1UwRkJVMDhzVVVGQk5VSTdRVUZEUVN4SlFVRk5TU3hyUkVGQmNVSmtMRmRCUVZkbExFMUJRWFJETzBGQlEwRXNTVUZCVFVNc2IwUkJRWE5DWml4WlFVRlpZeXhOUVVGNFF6dEJRVU5CTEVsQlFVMUZMRzlFUVVGelFtWXNXVUZCV1dFc1RVRkJlRU03UVVGRFFTeEpRVUZOUnl3NFEwRkJiVUptTEZOQlFWTlpMRTFCUVd4RE96dEJRVVZCTEVsQlFVMUpMR3RFUVVGeFFqdEJRVUZCTEZOQlFVMTJRaXhQUVVGT08wRkJRVUVzUTBGQk0wSTdRVUZEUVN4SlFVRk5kMElzZDBSQlFYZENPMEZCUVVFc1UwRkJUWHBDTEdsQ1FVRk9PMEZCUVVFc1EwRkJPVUlpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk11YUdGc2JDOVFjbTlxWldOMGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdiMjVPWlhoMFJuSmhiV1VnWm5KdmJTQW5MaTl2YmkxdVpYaDBMV1p5WVcxbEp6dGNibWx0Y0c5eWRDQmpjbVZoZEdWU1pXNWtaWEpUZEdWd0lHWnliMjBnSnk0dlkzSmxZWFJsTFhKbGJtUmxjaTF6ZEdWd0p6dGNibWx0Y0c5eWRDQjdJR04xY25KbGJuUlVhVzFsSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1YkdWMElIZHBiR3hTWlc1a1pYSk9aWGgwUm5KaGJXVWdQU0JtWVd4elpUdGNibHh1THlvcVhHNGdLaUJOWVhocGJYVnRJSEJsY20xcGRIUmxaQ0J0Y3lCemFXNWpaU0JzWVhOMElHWnlZVzFsWEc0Z0tpQkFkSGx3WlNCN1RuVnRZbVZ5ZlZ4dUlDb3ZYRzVqYjI1emRDQk5RVmhmUlV4QlVGTkZSQ0E5SURJd08xeHVYRzR2S2lwY2JpQXFJRU4xY25KbGJuUWdabkpoYldWemRHRnRjRnh1SUNvZ1FIUjVjR1VnZTA1MWJXSmxjbjFjYmlBcUwxeHViR1YwSUdOMWNuSmxiblJHY21GdFpYTjBZVzF3SUQwZ1kzVnljbVZ1ZEZScGJXVW9LVHRjYmx4dWJHVjBJR1ZzWVhCelpXUWdQU0F3TzF4dVhHNHZLaXBjYmlBcUlFWmhZM1J2Y2lCMGJ5QnRkV3gwYVhCc2VTQmdaV3hoY0hObFpHQWdZbmtnTFNCY2JpQXFJREF1TlNCM2IzVnNaQ0JpWlNCemJHOTNJRzF2ZEdsdmJpd2dNaUIzYjNWc1pDQmlaU0JtWVhOMFhHNGdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ292WEc1c1pYUWdaR2xzWVhScGIyNGdQU0F4TzF4dVhHNW1kVzVqZEdsdmJpQnpkR0Z5ZEZKbGJtUmxja3h2YjNBb0tTQjdYRzRnSUdsbUlDZ2hkMmxzYkZKbGJtUmxjazVsZUhSR2NtRnRaU2tnZTF4dUlDQWdJSGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VnUFNCMGNuVmxPMXh1SUNBZ0lHOXVUbVY0ZEVaeVlXMWxLSEJ5YjJObGMzTkdjbUZ0WlNrN1hHNGdJSDFjYm4xY2JseHVZMjl1YzNRZ1puSmhiV1ZUZEdGeWRDQTlJR055WldGMFpWSmxibVJsY2xOMFpYQW9jM1JoY25SU1pXNWtaWEpNYjI5d0tUdGNibU52Ym5OMElHWnlZVzFsVlhCa1lYUmxJRDBnWTNKbFlYUmxVbVZ1WkdWeVUzUmxjQ2h6ZEdGeWRGSmxibVJsY2t4dmIzQXBPMXh1WTI5dWMzUWdabkpoYldWU1pXNWtaWElnUFNCamNtVmhkR1ZTWlc1a1pYSlRkR1Z3S0hOMFlYSjBVbVZ1WkdWeVRHOXZjQ2s3WEc1amIyNXpkQ0JtY21GdFpVVnVaQ0E5SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLVHRjYmx4dVpuVnVZM1JwYjI0Z2NISnZZMlZ6YzBaeVlXMWxLR1p5WVcxbGMzUmhiWEFwSUh0Y2JpQWdkMmxzYkZKbGJtUmxjazVsZUhSR2NtRnRaU0E5SUdaaGJITmxPMXh1SUNCbGJHRndjMlZrSUQwZ1RXRjBhQzV0WVhnb1RXRjBhQzV0YVc0b1puSmhiV1Z6ZEdGdGNDQXRJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdMQ0JOUVZoZlJVeEJVRk5GUkNrc0lERXBJQ29nWkdsc1lYUnBiMjQ3WEc0Z0lHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd0lEMGdabkpoYldWemRHRnRjRHRjYmx4dUlDQm1jbUZ0WlZOMFlYSjBMbkJ5YjJObGMzTW9LVHRjYmlBZ1puSmhiV1ZWY0dSaGRHVXVjSEp2WTJWemN5Z3BPMXh1SUNCbWNtRnRaVkpsYm1SbGNpNXdjbTlqWlhOektDazdYRzRnSUdaeVlXMWxSVzVrTG5CeWIyTmxjM01vS1R0Y2JuMWNibHh1Wlhod2IzSjBJR052Ym5OMElHOXVSbkpoYldWVGRHRnlkQ0E5SUdaeVlXMWxVM1JoY25RdWMyTm9aV1IxYkdVN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnYjI1R2NtRnRaVlZ3WkdGMFpTQTlJR1p5WVcxbFZYQmtZWFJsTG5OamFHVmtkV3hsTzF4dVpYaHdiM0owSUdOdmJuTjBJRzl1Um5KaGJXVlNaVzVrWlhJZ1BTQm1jbUZ0WlZKbGJtUmxjaTV6WTJobFpIVnNaVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnZia1p5WVcxbFJXNWtJRDBnWm5KaGJXVkZibVF1YzJOb1pXUjFiR1U3WEc1bGVIQnZjblFnWTI5dWMzUWdZMkZ1WTJWc1QyNUdjbUZ0WlZOMFlYSjBJRDBnWm5KaGJXVlRkR0Z5ZEM1allXNWpaV3c3WEc1bGVIQnZjblFnWTI5dWMzUWdZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU0E5SUdaeVlXMWxWWEJrWVhSbExtTmhibU5sYkR0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqWVc1alpXeFBia1p5WVcxbFVtVnVaR1Z5SUQwZ1puSmhiV1ZTWlc1a1pYSXVZMkZ1WTJWc08xeHVaWGh3YjNKMElHTnZibk4wSUdOaGJtTmxiRTl1Um5KaGJXVkZibVFnUFNCbWNtRnRaVVZ1WkM1allXNWpaV3c3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0IwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VnUFNBb0tTQTlQaUJsYkdGd2MyVmtPMXh1Wlhod2IzSjBJR052Ym5OMElHTjFjbkpsYm5SR2NtRnRaVlJwYldWemRHRnRjQ0E5SUNncElEMCtJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gbGF3c3VpdCAtIHNvcnJ5XG4gIGZ1bmN0aW9uIEFjdGlvbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgdGhpcy5zY2hlZHVsZWRVcGRhdGUgPSB0aGlzLnNjaGVkdWxlZFVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyk7XG5cbiAgICB0aGlzLnNldFByb3BzKHByb3BzKTtcblxuICAgIHRoaXMuY3VycmVudCA9IHByb3BzLmN1cnJlbnQgfHwgcHJvcHMuZnJvbSB8fCAwO1xuICB9XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBvblN0YXJ0ID0gX3Byb3BzLm9uU3RhcnQsXG4gICAgICAgIF9vblN0YXJ0ID0gX3Byb3BzLl9vblN0YXJ0LFxuICAgICAgICBwYXNzaXZlID0gX3Byb3BzLnBhc3NpdmU7XG5cblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RhcnQpIHRoaXMub25TdGFydCgpO1xuICAgIGlmIChvblN0YXJ0KSBvblN0YXJ0KHRoaXMpO1xuICAgIGlmIChfb25TdGFydCkgX29uU3RhcnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25TdG9wID0gX3Byb3BzMi5vblN0b3AsXG4gICAgICAgIF9vblN0b3AgPSBfcHJvcHMyLl9vblN0b3AsXG4gICAgICAgIHBhc3NpdmUgPSBfcHJvcHMyLnBhc3NpdmU7XG5cblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICgwLCBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVVcGRhdGUpKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0b3ApIHRoaXMub25TdG9wKCk7XG4gICAgaWYgKG9uU3RvcCkgb25TdG9wKHRoaXMpO1xuICAgIGlmIChfb25TdG9wKSBfb25TdG9wKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25Db21wbGV0ZSA9IF9wcm9wczMub25Db21wbGV0ZSxcbiAgICAgICAgX29uQ29tcGxldGUgPSBfcHJvcHMzLl9vbkNvbXBsZXRlO1xuXG5cbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKHRoaXMpO1xuICAgIGlmIChfb25Db21wbGV0ZSkgX29uQ29tcGxldGUodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlZFVwZGF0ZSA9IGZ1bmN0aW9uIHNjaGVkdWxlZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmxhc3RVcGRhdGVkID0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpO1xuICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudDtcblxuICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25VcGRhdGUgPSBfcHJvcHM0Lm9uVXBkYXRlLFxuICAgICAgICBwYXNzaXZlID0gX3Byb3BzNC5wYXNzaXZlO1xuXG5cbiAgICBpZiAodGhpcy51cGRhdGUpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMudXBkYXRlKHRoaXMuY3VycmVudCk7XG4gICAgfVxuXG4gICAgaWYgKG9uVXBkYXRlKSBvblVwZGF0ZSh0aGlzLmN1cnJlbnQsIHRoaXMpO1xuICAgIHRoaXMuZmlyZUxpc3RlbmVycygpO1xuXG4gICAgaWYgKCFwYXNzaXZlICYmIHRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiB0aGlzLmlzQWN0aW9uQ29tcGxldGUoKSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbiBzZXRQcm9wcyhwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgcHJvcHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUub3V0cHV0ID0gZnVuY3Rpb24gb3V0cHV0KGZ1bmMpIHtcbiAgICB0aGlzLnByb3BzLm9uVXBkYXRlID0gZnVuYztcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHYpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0UHJvcCA9IGZ1bmN0aW9uIGdldFByb3Aoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHNba2V5XTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5zcGVlZFBlclNlY29uZCkodGhpcy5jdXJyZW50IC0gdGhpcy5wcmV2LCB0aGlzLmxhc3RVcGRhdGVkKTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMgfHwgW107XG4gICAgdGhpcy5udW1MaXN0ZW5lcnMgPSB0aGlzLm51bUxpc3RlbmVycyB8fCAwO1xuICAgIGlmICh0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMrKztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgdmFyIGxpc3RlbmVySW5kZXggPSB0aGlzLmxpc3RlbmVycyA/IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpIDogLTE7XG4gICAgaWYgKGxpc3RlbmVySW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycy0tO1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmZpcmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiBmaXJlTGlzdGVuZXJzKCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5nZXQoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtTGlzdGVuZXJzOyBpKyspIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzW2ldKGN1cnJlbnQsIHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gQWN0aW9uO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYklrRmpkR2x2YmlJc0luQnliM0J6SWl3aWMyTm9aV1IxYkdWa1ZYQmtZWFJsSWl3aVltbHVaQ0lzSW1OdmJuTjBjblZqZEc5eUlpd2laR1ZtWVhWc2RGQnliM0J6SWl3aWMyVjBVSEp2Y0hNaUxDSmpkWEp5Wlc1MElpd2labkp2YlNJc0luTjBZWEowSWl3aWIyNVRkR0Z5ZENJc0lsOXZibE4wWVhKMElpd2ljR0Z6YzJsMlpTSXNJbDlwYzBGamRHbDJaU0lzSW5OMGIzQWlMQ0p2YmxOMGIzQWlMQ0pmYjI1VGRHOXdJaXdpWTI5dGNHeGxkR1VpTENKdmJrTnZiWEJzWlhSbElpd2lYMjl1UTI5dGNHeGxkR1VpTENKc1lYTjBWWEJrWVhSbFpDSXNJbkJ5WlhZaUxDSnZibFZ3WkdGMFpTSXNJblZ3WkdGMFpTSXNJbVpwY21WTWFYTjBaVzVsY25NaUxDSnBjMEZqZEdsdmJrTnZiWEJzWlhSbElpd2liM1YwY0hWMElpd2lablZ1WXlJc0ltZGxkQ0lzSW5ObGRDSXNJbllpTENKblpYUlFjbTl3SWl3aWEyVjVJaXdpWjJWMFZtVnNiMk5wZEhraUxDSnBjMEZqZEdsMlpTSXNJbUZrWkV4cGMzUmxibVZ5SWl3aWJHbHpkR1Z1WlhJaUxDSnNhWE4wWlc1bGNuTWlMQ0p1ZFcxTWFYTjBaVzVsY25NaUxDSnBibVJsZUU5bUlpd2ljSFZ6YUNJc0luSmxiVzkyWlV4cGMzUmxibVZ5SWl3aWJHbHpkR1Z1WlhKSmJtUmxlQ0lzSW5Od2JHbGpaU0lzSW1raVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3p0QlFVTkJPenM3TzBsQlJVMUJMRTA3UVVGQlV6dEJRVU5pTEd0Q1FVRlpReXhMUVVGYUxFVkJRVzFDTzBGQlFVRTdPMEZCUTJwQ0xGTkJRVXRETEdWQlFVd3NSMEZCZFVJc1MwRkJTMEVzWlVGQlRDeERRVUZ4UWtNc1NVRkJja0lzUTBGQk1FSXNTVUZCTVVJc1EwRkJka0k3TzBGQlJVRXNVMEZCUzBZc1MwRkJUQ3huUWtGRFN5eExRVUZMUnl4WFFVRk1MRU5CUVdsQ1F5eFpRVVIwUWpzN1FVRkpRU3hUUVVGTFF5eFJRVUZNTEVOQlFXTk1MRXRCUVdRN08wRkJSVUVzVTBGQlMwMHNUMEZCVEN4SFFVRmxUaXhOUVVGTlRTeFBRVUZPTEVsQlFXbENUaXhOUVVGTlR5eEpRVUYyUWl4SlFVRXJRaXhEUVVFNVF6dEJRVU5FT3p0dFFrRkZSRU1zU3l4dlFrRkJVVHRCUVVGQkxHbENRVU5wUXl4TFFVRkxVaXhMUVVSMFF6dEJRVUZCTEZGQlEwVlRMRTlCUkVZc1ZVRkRSVUVzVDBGRVJqdEJRVUZCTEZGQlExZERMRkZCUkZnc1ZVRkRWMEVzVVVGRVdEdEJRVUZCTEZGQlEzRkNReXhQUVVSeVFpeFZRVU54UWtFc1QwRkVja0k3T3p0QlFVZE9MRkZCUVVrc1EwRkJRMEVzVDBGQlRDeEZRVUZqTzBGQlExb3NWMEZCUzBNc1UwRkJUQ3hIUVVGcFFpeEpRVUZxUWp0QlFVTkJMRzlEUVVGakxFdEJRVXRZTEdWQlFXNUNPMEZCUTBRN08wRkJSVVFzVVVGQlNTeExRVUZMVVN4UFFVRlVMRVZCUVd0Q0xFdEJRVXRCTEU5QlFVdzdRVUZEYkVJc1VVRkJTVUVzVDBGQlNpeEZRVUZoUVN4UlFVRlJMRWxCUVZJN1FVRkRZaXhSUVVGSlF5eFJRVUZLTEVWQlFXTkJMRk5CUVZNc1NVRkJWRHM3UVVGRlpDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkVjc1NTeHRRa0ZCVHp0QlFVRkJMR3RDUVVOblF5eExRVUZMWWl4TFFVUnlRenRCUVVGQkxGRkJRMGRqTEUxQlJFZ3NWMEZEUjBFc1RVRkVTRHRCUVVGQkxGRkJRMWRETEU5QlJGZ3NWMEZEVjBFc1QwRkVXRHRCUVVGQkxGRkJRMjlDU2l4UFFVUndRaXhYUVVOdlFrRXNUMEZFY0VJN096dEJRVWRNTEZGQlFVa3NRMEZCUTBFc1QwRkJUQ3hGUVVGak8wRkJRMW9zVjBGQlMwTXNVMEZCVEN4SFFVRnBRaXhMUVVGcVFqdEJRVU5CTERCRFFVRnZRaXhMUVVGTFdDeGxRVUY2UWp0QlFVTkVPenRCUVVWRUxGRkJRVWtzUzBGQlMyRXNUVUZCVkN4RlFVRnBRaXhMUVVGTFFTeE5RVUZNTzBGQlEycENMRkZCUVVsQkxFMUJRVW9zUlVGQldVRXNUMEZCVHl4SlFVRlFPMEZCUTFvc1VVRkJTVU1zVDBGQlNpeEZRVUZoUVN4UlFVRlJMRWxCUVZJN08wRkJSV0lzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YlVKQlJVUkRMRkVzZFVKQlFWYzdRVUZCUVN4clFrRkRNa0lzUzBGQlMyaENMRXRCUkdoRE8wRkJRVUVzVVVGRFJHbENMRlZCUkVNc1YwRkRSRUVzVlVGRVF6dEJRVUZCTEZGQlExZERMRmRCUkZnc1YwRkRWMEVzVjBGRVdEczdPMEZCUjFRc1UwRkJTMHdzU1VGQlREczdRVUZGUVN4UlFVRkpMRXRCUVV0SkxGVkJRVlFzUlVGQmNVSXNTMEZCUzBFc1ZVRkJURHRCUVVOeVFpeFJRVUZKUVN4VlFVRktMRVZCUVdkQ1FTeFhRVUZYTEVsQlFWZzdRVUZEYUVJc1VVRkJTVU1zVjBGQlNpeEZRVUZwUWtFc1dVRkJXU3hKUVVGYU96dEJRVVZxUWl4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSR3BDTEdVc09FSkJRV3RDTzBGQlEyaENMRk5CUVV0clFpeFhRVUZNTEVkQlFXMUNMRzlEUVVGdVFqdEJRVU5CTEZOQlFVdERMRWxCUVV3c1IwRkJXU3hMUVVGTFpDeFBRVUZxUWpzN1FVRkdaMElzYTBKQlNXTXNTMEZCUzA0c1MwRktia0k3UVVGQlFTeFJRVWxTY1VJc1VVRktVU3hYUVVsU1FTeFJRVXBSTzBGQlFVRXNVVUZKUlZZc1QwRktSaXhYUVVsRlFTeFBRVXBHT3pzN1FVRk5hRUlzVVVGQlNTeExRVUZMVnl4TlFVRlVMRVZCUVdsQ08wRkJRMllzVjBGQlMyaENMRTlCUVV3c1IwRkJaU3hMUVVGTFowSXNUVUZCVEN4RFFVRlpMRXRCUVV0b1FpeFBRVUZxUWl4RFFVRm1PMEZCUTBRN08wRkJSVVFzVVVGQlNXVXNVVUZCU2l4RlFVRmpRU3hUUVVGVExFdEJRVXRtTEU5QlFXUXNSVUZCZFVJc1NVRkJka0k3UVVGRFpDeFRRVUZMYVVJc1lVRkJURHM3UVVGRlFTeFJRVUZKTEVOQlFVTmFMRTlCUVVRc1NVRkJXU3hMUVVGTFF5eFRRVUZ5UWl4RlFVRm5RenRCUVVNNVFpeHZRMEZCWXl4TFFVRkxXQ3hsUVVGdVFqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1MwRkJTM1ZDTEdkQ1FVRk1MRWxCUVhsQ0xFdEJRVXRCTEdkQ1FVRk1MRVZCUVRkQ0xFVkJRWE5FTzBGQlEzQkVMRmRCUVV0U0xGRkJRVXc3UVVGRFJEczdRVUZGUkN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSRmdzVVN4eFFrRkJVMHdzU3l4RlFVRlBPMEZCUTJRc1UwRkJTMEVzUzBGQlRDeG5Ra0ZEU3l4TFFVRkxRU3hMUVVSV0xFVkJSVXRCTEV0QlJrdzdRVUZKUVN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSSGxDTEUwc2JVSkJRVTlETEVrc1JVRkJUVHRCUVVOWUxGTkJRVXN4UWl4TFFVRk1MRU5CUVZkeFFpeFJRVUZZTEVkQlFYTkNTeXhKUVVGMFFqdEJRVU5CTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzIxQ1FVVkVReXhITEd0Q1FVRk5PMEZCUTBvc1YwRkJUeXhMUVVGTGNrSXNUMEZCV2p0QlFVTkVMRWM3TzIxQ1FVVkVjMElzUnl4blFrRkJTVU1zUXl4RlFVRkhPMEZCUTB3c1UwRkJTM1pDTEU5QlFVd3NSMEZCWlhWQ0xFTkJRV1k3UVVGRFFTeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkVNc1R5eHZRa0ZCVVVNc1J5eEZRVUZMTzBGQlExZ3NWMEZCVHl4TFFVRkxMMElzUzBGQlRDeERRVUZYSzBJc1IwRkJXQ3hEUVVGUU8wRkJRMFFzUnpzN2JVSkJSVVJETEZjc01FSkJRV003UVVGRFdpeFhRVUZQTERCQ1FVRmxMRXRCUVVzeFFpeFBRVUZNTEVkQlFXVXNTMEZCUzJNc1NVRkJia01zUlVGQmVVTXNTMEZCUzBRc1YwRkJPVU1zUTBGQlVEdEJRVU5FTEVjN08yMUNRVVZFWXl4UkxIVkNRVUZYTzBGQlExUXNWMEZCVHl4TFFVRkxja0lzVTBGQldqdEJRVU5FTEVjN08yMUNRVVZFYzBJc1Z5eDNRa0ZCV1VNc1VTeEZRVUZWTzBGQlEzQkNMRk5CUVV0RExGTkJRVXdzUjBGQmFVSXNTMEZCUzBFc1UwRkJUQ3hKUVVGclFpeEZRVUZ1UXp0QlFVTkJMRk5CUVV0RExGbEJRVXdzUjBGQmIwSXNTMEZCUzBFc1dVRkJUQ3hKUVVGeFFpeERRVUY2UXp0QlFVTkJMRkZCUVVrc1MwRkJTMFFzVTBGQlRDeERRVUZsUlN4UFFVRm1MRU5CUVhWQ1NDeFJRVUYyUWl4TlFVRnhReXhEUVVGRExFTkJRVEZETEVWQlFUWkRPMEZCUXpORExGZEJRVXRETEZOQlFVd3NRMEZCWlVjc1NVRkJaaXhEUVVGdlFrb3NVVUZCY0VJN1FVRkRRU3hYUVVGTFJTeFpRVUZNTzBGQlEwUTdRVUZEUkN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSRWNzWXl3eVFrRkJaVXdzVVN4RlFVRlZPMEZCUTNaQ0xGRkJRVTFOTEdkQ1FVRnBRaXhMUVVGTFRDeFRRVUZPTEVkQlFXMUNMRXRCUVV0QkxGTkJRVXdzUTBGQlpVVXNUMEZCWml4RFFVRjFRa2dzVVVGQmRrSXNRMEZCYmtJc1IwRkJjMFFzUTBGQlF5eERRVUUzUlR0QlFVTkJMRkZCUVVsTkxHdENRVUZyUWl4RFFVRkRMRU5CUVhaQ0xFVkJRVEJDTzBGQlEzaENMRmRCUVV0S0xGbEJRVXc3UVVGRFFTeFhRVUZMUkN4VFFVRk1MRU5CUVdWTkxFMUJRV1lzUTBGQmMwSkVMR0ZCUVhSQ0xFVkJRWEZETEVOQlFYSkRPMEZCUTBRN1FVRkRSQ3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJHeENMR0VzTkVKQlFXZENPMEZCUTJRc1VVRkJUV3BDTEZWQlFWVXNTMEZCUzNGQ0xFZEJRVXdzUlVGQmFFSTdRVUZEUVN4VFFVRkxMRWxCUVVsblFpeEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWtzUzBGQlMwNHNXVUZCZWtJc1JVRkJkVU5OTEVkQlFYWkRMRVZCUVRSRE8wRkJRekZETEZkQlFVdFFMRk5CUVV3c1EwRkJaVThzUTBGQlppeEZRVUZyUW5KRExFOUJRV3hDTEVWQlFUSkNMRWxCUVROQ08wRkJRMFE3UVVGRFJDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96czdPenRyUWtGSFdWQXNUU0lzSW1acGJHVWlPaUpwYm1SbGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRnljeTVvWVd4c0wxQnliMnBsWTNSekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJRzl1Um5KaGJXVlZjR1JoZEdVc0lHTmhibU5sYkU5dVJuSmhiV1ZWY0dSaGRHVXNJSFJwYldWVGFXNWpaVXhoYzNSR2NtRnRaU0I5SUdaeWIyMGdKeTR1TDJaeVlXMWxjM2x1WXljN1hHNXBiWEJ2Y25RZ2V5QnpjR1ZsWkZCbGNsTmxZMjl1WkNCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibHh1WTJ4aGMzTWdRV04wYVc5dUlIc2dMeThnYkdGM2MzVnBkQ0F0SUhOdmNuSjVYRzRnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6S1NCN1hHNGdJQ0FnZEdocGN5NXpZMmhsWkhWc1pXUlZjR1JoZEdVZ1BTQjBhR2x6TG5OamFHVmtkV3hsWkZWd1pHRjBaUzVpYVc1a0tIUm9hWE1wTzF4dVhHNGdJQ0FnZEdocGN5NXdjbTl3Y3lBOUlIdGNiaUFnSUNBZ0lDNHVMblJvYVhNdVkyOXVjM1J5ZFdOMGIzSXVaR1ZtWVhWc2RGQnliM0J6WEc0Z0lDQWdmVHRjYmx4dUlDQWdJSFJvYVhNdWMyVjBVSEp2Y0hNb2NISnZjSE1wTzF4dVhHNGdJQ0FnZEdocGN5NWpkWEp5Wlc1MElEMGdjSEp2Y0hNdVkzVnljbVZ1ZENCOGZDQndjbTl3Y3k1bWNtOXRJSHg4SURBN1hHNGdJSDFjYmx4dUlDQnpkR0Z5ZENncElIdGNiaUFnSUNCamIyNXpkQ0I3SUc5dVUzUmhjblFzSUY5dmJsTjBZWEowTENCd1lYTnphWFpsSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdhV1lnS0NGd1lYTnphWFpsS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbDlwYzBGamRHbDJaU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQnZia1p5WVcxbFZYQmtZWFJsS0hSb2FYTXVjMk5vWldSMWJHVmtWWEJrWVhSbEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9kR2hwY3k1dmJsTjBZWEowS1NCMGFHbHpMbTl1VTNSaGNuUW9LVHRjYmlBZ0lDQnBaaUFvYjI1VGRHRnlkQ2tnYjI1VGRHRnlkQ2gwYUdsektUdGNiaUFnSUNCcFppQW9YMjl1VTNSaGNuUXBJRjl2YmxOMFlYSjBLSFJvYVhNcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0J6ZEc5d0tDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2IyNVRkRzl3TENCZmIyNVRkRzl3TENCd1lYTnphWFpsSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdhV1lnS0NGd1lYTnphWFpsS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbDlwYzBGamRHbDJaU0E5SUdaaGJITmxPMXh1SUNBZ0lDQWdZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU2gwYUdsekxuTmphR1ZrZFd4bFpGVndaR0YwWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YjI1VGRHOXdLU0IwYUdsekxtOXVVM1J2Y0NncE8xeHVJQ0FnSUdsbUlDaHZibE4wYjNBcElHOXVVM1J2Y0NoMGFHbHpLVHRjYmlBZ0lDQnBaaUFvWDI5dVUzUnZjQ2tnWDI5dVUzUnZjQ2gwYUdsektUdGNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnWTI5dGNHeGxkR1VvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJ2YmtOdmJYQnNaWFJsTENCZmIyNURiMjF3YkdWMFpTQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JseHVJQ0FnSUhSb2FYTXVjM1J2Y0NncE8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWIyNURiMjF3YkdWMFpTa2dkR2hwY3k1dmJrTnZiWEJzWlhSbEtDazdYRzRnSUNBZ2FXWWdLRzl1UTI5dGNHeGxkR1VwSUc5dVEyOXRjR3hsZEdVb2RHaHBjeWs3WEc0Z0lDQWdhV1lnS0Y5dmJrTnZiWEJzWlhSbEtTQmZiMjVEYjIxd2JHVjBaU2gwYUdsektUdGNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnYzJOb1pXUjFiR1ZrVlhCa1lYUmxLQ2tnZTF4dUlDQWdJSFJvYVhNdWJHRnpkRlZ3WkdGMFpXUWdQU0IwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VvS1R0Y2JpQWdJQ0IwYUdsekxuQnlaWFlnUFNCMGFHbHpMbU4xY25KbGJuUTdYRzVjYmlBZ0lDQmpiMjV6ZENCN0lHOXVWWEJrWVhSbExDQndZWE56YVhabElIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11ZFhCa1lYUmxLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtTjFjbkpsYm5RZ1BTQjBhR2x6TG5Wd1pHRjBaU2gwYUdsekxtTjFjbkpsYm5RcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaHZibFZ3WkdGMFpTa2diMjVWY0dSaGRHVW9kR2hwY3k1amRYSnlaVzUwTENCMGFHbHpLVHRjYmlBZ0lDQjBhR2x6TG1acGNtVk1hWE4wWlc1bGNuTW9LVHRjYmx4dUlDQWdJR2xtSUNnaGNHRnpjMmwyWlNBbUppQjBhR2x6TGw5cGMwRmpkR2wyWlNrZ2UxeHVJQ0FnSUNBZ2IyNUdjbUZ0WlZWd1pHRjBaU2gwYUdsekxuTmphR1ZrZFd4bFpGVndaR0YwWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YVhOQlkzUnBiMjVEYjIxd2JHVjBaU0FtSmlCMGFHbHpMbWx6UVdOMGFXOXVRMjl0Y0d4bGRHVW9LU2tnZTF4dUlDQWdJQ0FnZEdocGN5NWpiMjF3YkdWMFpTZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnYzJWMFVISnZjSE1vY0hKdmNITXBJSHRjYmlBZ0lDQjBhR2x6TG5CeWIzQnpJRDBnZTF4dUlDQWdJQ0FnTGk0dWRHaHBjeTV3Y205d2N5eGNiaUFnSUNBZ0lDNHVMbkJ5YjNCelhHNGdJQ0FnZlR0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lHOTFkSEIxZENobWRXNWpLU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTV2YmxWd1pHRjBaU0E5SUdaMWJtTTdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0JuWlhRb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVZM1Z5Y21WdWREdGNiaUFnZlZ4dVhHNGdJSE5sZENoMktTQjdYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJRDBnZGp0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lHZGxkRkJ5YjNBb2EyVjVLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Y0hKdmNITmJhMlY1WFR0Y2JpQWdmVnh1WEc0Z0lHZGxkRlpsYkc5amFYUjVLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQnpjR1ZsWkZCbGNsTmxZMjl1WkNoMGFHbHpMbU4xY25KbGJuUWdMU0IwYUdsekxuQnlaWFlzSUhSb2FYTXViR0Z6ZEZWd1pHRjBaV1FwTzF4dUlDQjlYRzVjYmlBZ2FYTkJZM1JwZG1Vb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMmx6UVdOMGFYWmxPMXh1SUNCOVhHNWNiaUFnWVdSa1RHbHpkR1Z1WlhJb2JHbHpkR1Z1WlhJcElIdGNiaUFnSUNCMGFHbHpMbXhwYzNSbGJtVnljeUE5SUhSb2FYTXViR2x6ZEdWdVpYSnpJSHg4SUZ0ZE8xeHVJQ0FnSUhSb2FYTXViblZ0VEdsemRHVnVaWEp6SUQwZ2RHaHBjeTV1ZFcxTWFYTjBaVzVsY25NZ2ZId2dNRHRjYmlBZ0lDQnBaaUFvZEdocGN5NXNhWE4wWlc1bGNuTXVhVzVrWlhoUFppaHNhWE4wWlc1bGNpa2dQVDA5SUMweEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG14cGMzUmxibVZ5Y3k1d2RYTm9LR3hwYzNSbGJtVnlLVHRjYmlBZ0lDQWdJSFJvYVhNdWJuVnRUR2x6ZEdWdVpYSnpLeXM3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnY21WdGIzWmxUR2x6ZEdWdVpYSW9iR2x6ZEdWdVpYSXBJSHRjYmlBZ0lDQmpiMjV6ZENCc2FYTjBaVzVsY2tsdVpHVjRJRDBnS0hSb2FYTXViR2x6ZEdWdVpYSnpLU0EvSUhSb2FYTXViR2x6ZEdWdVpYSnpMbWx1WkdWNFQyWW9iR2x6ZEdWdVpYSXBJRG9nTFRFN1hHNGdJQ0FnYVdZZ0tHeHBjM1JsYm1WeVNXNWtaWGdnSVQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtNTFiVXhwYzNSbGJtVnljeTB0TzF4dUlDQWdJQ0FnZEdocGN5NXNhWE4wWlc1bGNuTXVjM0JzYVdObEtHeHBjM1JsYm1WeVNXNWtaWGdzSURFcE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lHWnBjbVZNYVhOMFpXNWxjbk1vS1NCN1hHNGdJQ0FnWTI5dWMzUWdZM1Z5Y21WdWRDQTlJSFJvYVhNdVoyVjBLQ2s3WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0IwYUdsekxtNTFiVXhwYzNSbGJtVnljenNnYVNzcktTQjdYRzRnSUNBZ0lDQjBhR2x6TG14cGMzUmxibVZ5YzF0cFhTaGpkWEp5Wlc1MExDQjBhR2x6S1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnUVdOMGFXOXVPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZW5kZXJlcik7XG5cbiAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzLCBwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge307XG4gICAgdGhpcy5jaGFuZ2VkVmFsdWVzID0gW107XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgc3RhdGUuXG4gICAqIElmIGBrZXlgIGlzIG5vdCBkZWZpbmVkLCByZXR1cm4gZW50aXJlIGNhY2hlZCBzdGF0ZS5cbiAgICogSWYgYGtleWAgaXMgZGVmaW5lZCwgcmV0dXJuIGNhY2hlZCB2YWx1ZSBpZiBwcmVzZW50LlxuICAgKiBJZiBga2V5YCBpcyBkZWZpbmVkIGFuZCBjYWNoZWQgdmFsdWUgaXMgbm90IHByZXNlbnQsIHJlYWQgYW5kIHJldHVybi5cbiAgICogQHBhcmFtICB7c3RyaW5nfSAob3B0aW9uYWwpIGtleSBvZiB2YWx1ZVxuICAgKiBAcmV0dXJuIHt2YWx1ZX1cbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZChrZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlYWQgdmFsdWUgYWNjb3JkaW5nIHRvIGBvblJlYWRgXG4gICAqIEBwYXJhbSAge3N0cmluZ30gTmFtZSBvZiBwcm9wZXJ0eSB0byByZWFkXG4gICAqIEByZXR1cm4ge1t0eXBlXX1cbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uIHJlYWQoa2V5KSB7XG4gICAgaWYgKHRoaXMub25SZWFkKSB7XG4gICAgICByZXR1cm4gdGhpcy5vblJlYWQoa2V5KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBgc3RhdGVgIHdpdGggbmV3IHZhbHVlcyBhbmQgc2NoZWR1bGUgYHJlbmRlcmAuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXNcbiAgICogQHBhcmFtIHt2YWx1ZX0gdmFsdWUgdG9zZXRcbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBhcmdzWzBdO1xuICAgICAgLy8gU2V0IG11bHRpcGxlIHZhbHVlc1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCB2YWx1ZXNba2V5XSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfa2V5MiA9IGFyZ3NbMF0sXG4gICAgICAgICAgdmFsdWUgPSBhcmdzWzFdO1xuXG4gICAgICB0aGlzLnNldFZhbHVlKF9rZXkyLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCkge1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVJlbmRlcikodGhpcy5yZW5kZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vID4gV2lsZXkgLSA2IGluIHRoZSBNb3JuaW5nXG4gIC8qKlxuICAgKiBTZXQgYSBzaW5nbGUgdmFsdWVcbiAgICogSWYgYSBzdHJpbmcgb3IgbnVtYmVyLCBzZXQgZGlyZWN0bHkuXG4gICAqIElmIGFuIG9iamVjdCBvciBhcnJheSwgY3JlYXRlIG5ldyBvYmplY3Qgb3IgYXJyYXlcbiAgICogaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0LiBUaGVuIHNoYWxsb3cgY29tcGFyZVxuICAgKiB0byBzZXQgYW5kIGNvbXBhcmUgaW5kaXZpZHVhbCB2YWx1ZXMuXG4gICAqIE9uZSBvZiB0aGUgY2xlYXJlciBkcmF3YmFja3MgYW5kIGFubm95YW5jZXMgd2l0aFxuICAgKiB1c2luZyBtdXRhYmxlIGluc3RlYWQgb2YgaW1tdXRhYmxlIHN0YXRlcy5cbiAgICogQHBhcmFtIHtbdHlwZV19IGtleVxuICAgKiBAcGFyYW0ge1t0eXBlXX0gdmFsdWVcbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiBzZXRWYWx1ZShrZXksIHZhbHVlKSB7XG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9IHRoaXMuc3RhdGVba2V5XTtcblxuICAgIC8vIElmIG51bWJlciBvciBzdHJpbmcsIHNldCBkaXJlY3RseVxuICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZSkgfHwgKDAsIF91dGlscy5pc1N0cmluZykodmFsdWUpKSB7XG4gICAgICBpZiAoY3VycmVudFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNBcnJheSkodmFsdWUpKSB7XG4gICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgdmFyIG51bVZhbHVlcyA9IHZhbHVlLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVmFsdWVzOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XVtpXSAhPT0gdmFsdWVbaV0pIHtcbiAgICAgICAgICB0aGlzLnN0YXRlW2tleV1baV0gPSB2YWx1ZVtpXTtcbiAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLmlzT2JqKSh2YWx1ZSkpIHtcbiAgICAgIGlmICghY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciB2YWx1ZUtleSBpbiB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZVtrZXldW3ZhbHVlS2V5XSAhPT0gdmFsdWVbdmFsdWVLZXldKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldW3ZhbHVlS2V5XSA9IHZhbHVlW3ZhbHVlS2V5XTtcbiAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCkge1xuICAgICAgdGhpcy5jaGFuZ2VkVmFsdWVzLnB1c2goa2V5KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpcmVzIGBvblJlbmRlcmAgaWYgdmFsdWVzIGhhdmUgY2hhbmdlZCBvciBgZm9yY2VSZW5kZXJgXG4gICAqIGlzIHNldCB0byB0cnVlLlxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGZvcmNlUmVuZGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgIGlmICgoZm9yY2VSZW5kZXIgfHwgdGhpcy5oYXNDaGFuZ2VkKSAmJiB0aGlzLm9uUmVuZGVyKSB7XG4gICAgICB0aGlzLm9uUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VkVmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gUmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlcmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHNpVW1WdVpHVnlaWElpTENKd2NtOXdjeUlzSW5KbGJtUmxjaUlzSW1KcGJtUWlMQ0pqYjI1emRISjFZM1J2Y2lJc0ltUmxabUYxYkhSUWNtOXdjeUlzSW5OMFlYUmxJaXdpWTJoaGJtZGxaRlpoYkhWbGN5SXNJbWRsZENJc0ltdGxlU0lzSW5WdVpHVm1hVzVsWkNJc0luSmxZV1FpTENKdmJsSmxZV1FpTENKelpYUWlMQ0poY21keklpd2lkbUZzZFdWeklpd2ljMlYwVm1Gc2RXVWlMQ0oyWVd4MVpTSXNJbWhoYzBOb1lXNW5aV1FpTENKamRYSnlaVzUwVm1Gc2RXVWlMQ0p1ZFcxV1lXeDFaWE1pTENKc1pXNW5kR2dpTENKcElpd2lkbUZzZFdWTFpYa2lMQ0p3ZFhOb0lpd2labTl5WTJWU1pXNWtaWElpTENKdmJsSmxibVJsY2lKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3TzBGQlEwRTdPenM3U1VGRlRVRXNVVHRCUVVOS0xHOUNRVUZaUXl4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlEycENMRk5CUVV0RExFMUJRVXdzUjBGQll5eExRVUZMUVN4TlFVRk1MRU5CUVZsRExFbEJRVm9zUTBGQmFVSXNTVUZCYWtJc1EwRkJaRHM3UVVGRlFTeFRRVUZMUml4TFFVRk1MR2RDUVVOTExFdEJRVXRITEZkQlFVd3NRMEZCYVVKRExGbEJSSFJDTEVWQlJVdEtMRXRCUmt3N08wRkJTMEVzVTBGQlMwc3NTMEZCVEN4SFFVRmhMRVZCUVdJN1FVRkRRU3hUUVVGTFF5eGhRVUZNTEVkQlFYRkNMRVZCUVhKQ08wRkJRMFE3TzBGQlJVUTdPenM3T3pzN096czdjVUpCVVVGRExFY3NaMEpCUVVsRExFY3NSVUZCU3p0QlFVTlFMRkZCUVVsQkxFZEJRVW9zUlVGQlV6dEJRVU5RTEZWQlFVa3NTMEZCUzBnc1MwRkJUQ3hEUVVGWFJ5eEhRVUZZTEUxQlFXOUNReXhUUVVGNFFpeEZRVUZ0UXp0QlFVTnFReXhsUVVGUExFdEJRVXRLTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hEUVVGUU8wRkJRMFFzVDBGR1JDeE5RVVZQTzBGQlEwd3NaVUZCVHl4TFFVRkxSU3hKUVVGTUxFTkJRVlZHTEVkQlFWWXNRMEZCVUR0QlFVTkVPMEZCUTBZc1MwRk9SQ3hOUVUxUE8wRkJRMHdzWVVGQlR5eExRVUZMU0N4TFFVRmFPMEZCUTBRN1FVRkRSaXhIT3p0QlFVVkVPenM3T3pzN08zRkNRVXRCU3l4SkxHbENRVUZMUml4SExFVkJRVXM3UVVGRFVpeFJRVUZKTEV0QlFVdEhMRTFCUVZRc1JVRkJhVUk3UVVGRFppeGhRVUZQTEV0QlFVdEJMRTFCUVV3c1EwRkJXVWdzUjBGQldpeERRVUZRTzBGQlEwUTdRVUZEUml4SE96dEJRVVZFT3pzN096czdPM0ZDUVV0QlNTeEhMR3RDUVVGaE8wRkJRVUVzYzBOQlFVNURMRWxCUVUwN1FVRkJUa0VzVlVGQlRUdEJRVUZCT3p0QlFVTllMRkZCUVVrc1QwRkJUMEVzUzBGQlN5eERRVUZNTEVOQlFWQXNTMEZCYlVJc1YwRkJka0lzUlVGQmIwTTdRVUZCUVN4VlFVTXhRa01zVFVGRU1FSXNSMEZEWmtRc1NVRkVaVHRCUVVWc1F6czdRVUZEUVN4WFFVRkxMRWxCUVUxTUxFZEJRVmdzU1VGQmEwSk5MRTFCUVd4Q0xFVkJRVEJDTzBGQlEzaENMR0ZCUVV0RExGRkJRVXdzUTBGQlkxQXNSMEZCWkN4RlFVRnRRazBzVDBGQlQwNHNSMEZCVUN4RFFVRnVRanRCUVVORU8wRkJRMFlzUzBGT1JDeE5RVTFQTzBGQlFVRXNWVUZEUjBFc1MwRkVTQ3hIUVVOclFrc3NTVUZFYkVJN1FVRkJRU3hWUVVOUlJ5eExRVVJTTEVkQlEydENTQ3hKUVVSc1FqczdRVUZGVEN4WFFVRkxSU3hSUVVGTUxFTkJRV05RTEV0QlFXUXNSVUZCYlVKUkxFdEJRVzVDTzBGQlEwUTdPMEZCUlVRc1VVRkJTU3hMUVVGTFF5eFZRVUZVTEVWQlFYRkNPMEZCUTI1Q0xHOURRVUZqTEV0QlFVdG9RaXhOUVVGdVFqdEJRVU5FT3p0QlFVVkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMEZCUlVRN1FVRkRRVHM3T3pzN096czdPenM3T3p0eFFrRlhRV01zVVN4eFFrRkJVMUFzUnl4RlFVRkxVU3hMTEVWQlFVODdRVUZEYmtJc1VVRkJUVVVzWlVGQlpTeExRVUZMWWl4TFFVRk1MRU5CUVZkSExFZEJRVmdzUTBGQmNrSTdPMEZCUlVFN1FVRkRRU3hSUVVGSkxHdENRVUZOVVN4TFFVRk9MRXRCUVdkQ0xIRkNRVUZUUVN4TFFVRlVMRU5CUVhCQ0xFVkJRWEZETzBGQlEyNURMRlZCUVVsRkxHbENRVUZwUWtZc1MwRkJja0lzUlVGQk5FSTdRVUZETVVJc1lVRkJTMWdzUzBGQlRDeERRVUZYUnl4SFFVRllMRWxCUVd0Q1VTeExRVUZzUWp0QlFVTkJMR0ZCUVV0RExGVkJRVXdzUjBGQmEwSXNTVUZCYkVJN1FVRkRSRHRCUVVOR0xFdEJURVFzVFVGTFR5eEpRVUZKTEc5Q1FVRlJSQ3hMUVVGU0xFTkJRVW9zUlVGQmIwSTdRVUZEZWtJc1ZVRkJTU3hEUVVGRFJTeFpRVUZNTEVWQlFXMUNPMEZCUTJwQ0xHRkJRVXRpTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hKUVVGclFpeEZRVUZzUWp0QlFVTkVPenRCUVVWRUxGVkJRVTFYTEZsQlFWbElMRTFCUVUxSkxFMUJRWGhDTzBGQlEwRXNWMEZCU3l4SlFVRkpReXhKUVVGSkxFTkJRV0lzUlVGQlowSkJMRWxCUVVsR0xGTkJRWEJDTEVWQlFTdENSU3hIUVVFdlFpeEZRVUZ2UXp0QlFVTnNReXhaUVVGSkxFdEJRVXRvUWl4TFFVRk1MRU5CUVZkSExFZEJRVmdzUlVGQlowSmhMRU5CUVdoQ0xFMUJRWFZDVEN4TlFVRk5TeXhEUVVGT0xFTkJRVE5DTEVWQlFYRkRPMEZCUTI1RExHVkJRVXRvUWl4TFFVRk1MRU5CUVZkSExFZEJRVmdzUlVGQlowSmhMRU5CUVdoQ0xFbEJRWEZDVEN4TlFVRk5TeXhEUVVGT0xFTkJRWEpDTzBGQlEwRXNaVUZCUzBvc1ZVRkJUQ3hIUVVGclFpeEpRVUZzUWp0QlFVTkVPMEZCUTBZN1FVRkRSaXhMUVZwTkxFMUJXVUVzU1VGQlNTeHJRa0ZCVFVRc1MwRkJUaXhEUVVGS0xFVkJRV3RDTzBGQlEzWkNMRlZCUVVrc1EwRkJRMFVzV1VGQlRDeEZRVUZ0UWp0QlFVTnFRaXhoUVVGTFlpeExRVUZNTEVOQlFWZEhMRWRCUVZnc1NVRkJhMElzUlVGQmJFSTdRVUZEUkRzN1FVRkZSQ3hYUVVGTExFbEJRVWxqTEZGQlFWUXNTVUZCY1VKT0xFdEJRWEpDTEVWQlFUUkNPMEZCUXpGQ0xGbEJRVWtzUzBGQlMxZ3NTMEZCVEN4RFFVRlhSeXhIUVVGWUxFVkJRV2RDWXl4UlFVRm9RaXhOUVVFNFFrNHNUVUZCVFUwc1VVRkJUaXhEUVVGc1F5eEZRVUZ0UkR0QlFVTnFSQ3hsUVVGTGFrSXNTMEZCVEN4RFFVRlhSeXhIUVVGWUxFVkJRV2RDWXl4UlFVRm9RaXhKUVVFMFFrNHNUVUZCVFUwc1VVRkJUaXhEUVVFMVFqdEJRVU5CTEdWQlFVdE1MRlZCUVV3c1IwRkJhMElzU1VGQmJFSTdRVUZEUkR0QlFVTkdPMEZCUTBZN08wRkJSVVFzVVVGQlNTeExRVUZMUVN4VlFVRlVMRVZCUVhGQ08wRkJRMjVDTEZkQlFVdFlMR0ZCUVV3c1EwRkJiVUpwUWl4SlFVRnVRaXhEUVVGM1FtWXNSMEZCZUVJN1FVRkRSRHRCUVVOR0xFYzdPMEZCUlVRN096czdPenM3Y1VKQlMwRlFMRTBzY1VKQlFUUkNPMEZCUVVFc1VVRkJja0oxUWl4WFFVRnhRaXgxUlVGQlVDeExRVUZQT3p0QlFVTXhRaXhSUVVGSkxFTkJRVU5CTEdWQlFXVXNTMEZCUzFBc1ZVRkJja0lzUzBGQmIwTXNTMEZCUzFFc1VVRkJOME1zUlVGQmRVUTdRVUZEY2tRc1YwRkJTMEVzVVVGQlREdEJRVU5FT3p0QlFVVkVMRk5CUVV0dVFpeGhRVUZNTEVOQlFXMUNZeXhOUVVGdVFpeEhRVUUwUWl4RFFVRTFRanRCUVVOQkxGTkJRVXRJTEZWQlFVd3NSMEZCYTBJc1MwRkJiRUk3TzBGQlJVRXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdPenM3YTBKQlIxbHNRaXhSSWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWEp6TG1oaGJHd3ZVSEp2YW1WamRITXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnYjI1R2NtRnRaVkpsYm1SbGNpQjlJR1p5YjIwZ0p5NHVMMlp5WVcxbGMzbHVZeWM3WEc1cGJYQnZjblFnZXlCcGMwRnljbUY1TENCcGMwOWlhaXdnYVhOT2RXMHNJR2x6VTNSeWFXNW5JSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMnhoYzNNZ1VtVnVaR1Z5WlhJZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeWtnZTF4dUlDQWdJSFJvYVhNdWNtVnVaR1Z5SUQwZ2RHaHBjeTV5Wlc1a1pYSXVZbWx1WkNoMGFHbHpLVHRjYmx4dUlDQWdJSFJvYVhNdWNISnZjSE1nUFNCN1hHNGdJQ0FnSUNBdUxpNTBhR2x6TG1OdmJuTjBjblZqZEc5eUxtUmxabUYxYkhSUWNtOXdjeXhjYmlBZ0lDQWdJQzR1TG5CeWIzQnpYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lIUm9hWE11YzNSaGRHVWdQU0I3ZlR0Y2JpQWdJQ0IwYUdsekxtTm9ZVzVuWldSV1lXeDFaWE1nUFNCYlhUdGNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJIWlhRZ1kzVnljbVZ1ZENCemRHRjBaUzVjYmlBZ0lDb2dTV1lnWUd0bGVXQWdhWE1nYm05MElHUmxabWx1WldRc0lISmxkSFZ5YmlCbGJuUnBjbVVnWTJGamFHVmtJSE4wWVhSbExseHVJQ0FnS2lCSlppQmdhMlY1WUNCcGN5QmtaV1pwYm1Wa0xDQnlaWFIxY200Z1kyRmphR1ZrSUhaaGJIVmxJR2xtSUhCeVpYTmxiblF1WEc0Z0lDQXFJRWxtSUdCclpYbGdJR2x6SUdSbFptbHVaV1FnWVc1a0lHTmhZMmhsWkNCMllXeDFaU0JwY3lCdWIzUWdjSEpsYzJWdWRDd2djbVZoWkNCaGJtUWdjbVYwZFhKdUxseHVJQ0FnS2lCQWNHRnlZVzBnSUh0emRISnBibWQ5SUNodmNIUnBiMjVoYkNrZ2EyVjVJRzltSUhaaGJIVmxYRzRnSUNBcUlFQnlaWFIxY200Z2UzWmhiSFZsZlZ4dUlDQWdLaTljYmlBZ1oyVjBLR3RsZVNrZ2UxeHVJQ0FnSUdsbUlDaHJaWGtwSUh0Y2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG5OMFlYUmxXMnRsZVYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXpkR0YwWlZ0clpYbGRPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11Y21WaFpDaHJaWGtwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV6ZEdGMFpUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQXZLaXBjYmlBZ0lDb2dVbVZoWkNCMllXeDFaU0JoWTJOdmNtUnBibWNnZEc4Z1lHOXVVbVZoWkdCY2JpQWdJQ29nUUhCaGNtRnRJQ0I3YzNSeWFXNW5mU0JPWVcxbElHOW1JSEJ5YjNCbGNuUjVJSFJ2SUhKbFlXUmNiaUFnSUNvZ1FISmxkSFZ5YmlCN1czUjVjR1ZkZlZ4dUlDQWdLaTljYmlBZ2NtVmhaQ2hyWlhrcElIdGNiaUFnSUNCcFppQW9kR2hwY3k1dmJsSmxZV1FwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtOXVVbVZoWkNoclpYa3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJWY0dSaGRHVWdZSE4wWVhSbFlDQjNhWFJvSUc1bGR5QjJZV3gxWlhNZ1lXNWtJSE5qYUdWa2RXeGxJR0J5Wlc1a1pYSmdMbHh1SUNBZ0tpQkFjR0Z5WVcwZ2UyOWlhbVZqZEgwZ2RtRnNkV1Z6WEc0Z0lDQXFJRUJ3WVhKaGJTQjdkbUZzZFdWOUlIWmhiSFZsSUhSdmMyVjBYRzRnSUNBcUwxeHVJQ0J6WlhRb0xpNHVZWEpuY3lrZ2UxeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ1lYSm5jMXN4WFNBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJRnNnZG1Gc2RXVnpJRjBnUFNCaGNtZHpPMXh1SUNBZ0lDQWdMeThnVTJWMElHMTFiSFJwY0d4bElIWmhiSFZsYzF4dUlDQWdJQ0FnWm05eUlDaGpiMjV6ZENCclpYa2dhVzRnZG1Gc2RXVnpLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMlYwVm1Gc2RXVW9hMlY1TENCMllXeDFaWE5iYTJWNVhTazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJRnNnYTJWNUxDQjJZV3gxWlNCZElEMGdZWEpuY3p0Y2JpQWdJQ0FnSUhSb2FYTXVjMlYwVm1Gc2RXVW9hMlY1TENCMllXeDFaU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXVhR0Z6UTJoaGJtZGxaQ2tnZTF4dUlDQWdJQ0FnYjI1R2NtRnRaVkpsYm1SbGNpaDBhR2x6TG5KbGJtUmxjaWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNBdkx5QStJRmRwYkdWNUlDMGdOaUJwYmlCMGFHVWdUVzl5Ym1sdVoxeHVJQ0F2S2lwY2JpQWdJQ29nVTJWMElHRWdjMmx1WjJ4bElIWmhiSFZsWEc0Z0lDQXFJRWxtSUdFZ2MzUnlhVzVuSUc5eUlHNTFiV0psY2l3Z2MyVjBJR1JwY21WamRHeDVMbHh1SUNBZ0tpQkpaaUJoYmlCdlltcGxZM1FnYjNJZ1lYSnlZWGtzSUdOeVpXRjBaU0J1WlhjZ2IySnFaV04wSUc5eUlHRnljbUY1WEc0Z0lDQXFJR2xtSUdsMElHUnZaWE51SjNRZ1lXeHlaV0ZrZVNCbGVHbHpkQzRnVkdobGJpQnphR0ZzYkc5M0lHTnZiWEJoY21WY2JpQWdJQ29nZEc4Z2MyVjBJR0Z1WkNCamIyMXdZWEpsSUdsdVpHbDJhV1IxWVd3Z2RtRnNkV1Z6TGx4dUlDQWdLaUJQYm1VZ2IyWWdkR2hsSUdOc1pXRnlaWElnWkhKaGQySmhZMnR6SUdGdVpDQmhibTV2ZVdGdVkyVnpJSGRwZEdoY2JpQWdJQ29nZFhOcGJtY2diWFYwWVdKc1pTQnBibk4wWldGa0lHOW1JR2x0YlhWMFlXSnNaU0J6ZEdGMFpYTXVYRzRnSUNBcUlFQndZWEpoYlNCN1czUjVjR1ZkZlNCclpYbGNiaUFnSUNvZ1FIQmhjbUZ0SUh0YmRIbHdaVjE5SUhaaGJIVmxYRzRnSUNBcUwxeHVJQ0J6WlhSV1lXeDFaU2hyWlhrc0lIWmhiSFZsS1NCN1hHNGdJQ0FnWTI5dWMzUWdZM1Z5Y21WdWRGWmhiSFZsSUQwZ2RHaHBjeTV6ZEdGMFpWdHJaWGxkTzF4dVhHNGdJQ0FnTHk4Z1NXWWdiblZ0WW1WeUlHOXlJSE4wY21sdVp5d2djMlYwSUdScGNtVmpkR3g1WEc0Z0lDQWdhV1lnS0dselRuVnRLSFpoYkhWbEtTQjhmQ0JwYzFOMGNtbHVaeWgyWVd4MVpTa3BJSHRjYmlBZ0lDQWdJR2xtSUNoamRYSnlaVzUwVm1Gc2RXVWdJVDA5SUhaaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdWYmEyVjVYU0E5SUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaGhjME5vWVc1blpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb2FYTkJjbkpoZVNoMllXeDFaU2twSUh0Y2JpQWdJQ0FnSUdsbUlDZ2hZM1Z5Y21WdWRGWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFNBOUlGdGRPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JqYjI1emRDQnVkVzFXWVd4MVpYTWdQU0IyWVd4MVpTNXNaVzVuZEdnN1hHNGdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVlpoYkhWbGN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuTjBZWFJsVzJ0bGVWMWJhVjBnSVQwOUlIWmhiSFZsVzJsZEtTQjdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlZ0clpYbGRXMmxkSUQwZ2RtRnNkV1ZiYVYwN1hHNGdJQ0FnSUNBZ0lDQWdkR2hwY3k1b1lYTkRhR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb2FYTlBZbW9vZG1Gc2RXVXBLU0I3WEc0Z0lDQWdJQ0JwWmlBb0lXTjFjbkpsYm5SV1lXeDFaU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbFcydGxlVjBnUFNCN2ZUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdabTl5SUNoc1pYUWdkbUZzZFdWTFpYa2dhVzRnZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YzNSaGRHVmJhMlY1WFZ0MllXeDFaVXRsZVYwZ0lUMDlJSFpoYkhWbFczWmhiSFZsUzJWNVhTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdWYmEyVjVYVnQyWVd4MVpVdGxlVjBnUFNCMllXeDFaVnQyWVd4MVpVdGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTVvWVhORGFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbWhoYzBOb1lXNW5aV1FwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZMmhoYm1kbFpGWmhiSFZsY3k1d2RYTm9LR3RsZVNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFWnBjbVZ6SUdCdmJsSmxibVJsY21BZ2FXWWdkbUZzZFdWeklHaGhkbVVnWTJoaGJtZGxaQ0J2Y2lCZ1ptOXlZMlZTWlc1a1pYSmdYRzRnSUNBcUlHbHpJSE5sZENCMGJ5QjBjblZsTGx4dUlDQWdLaUJBY21WMGRYSnVJSHQwYUdsemZWeHVJQ0FnS2k5Y2JpQWdjbVZ1WkdWeUtHWnZjbU5sVW1WdVpHVnlJRDBnWm1Gc2MyVXBJSHRjYmlBZ0lDQnBaaUFvS0dadmNtTmxVbVZ1WkdWeUlIeDhJSFJvYVhNdWFHRnpRMmhoYm1kbFpDa2dKaVlnZEdocGN5NXZibEpsYm1SbGNpa2dlMXh1SUNBZ0lDQWdkR2hwY3k1dmJsSmxibVJsY2lncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhSb2FYTXVZMmhoYm1kbFpGWmhiSFZsY3k1c1pXNW5kR2dnUFNBd08xeHVJQ0FnSUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ0E5SUdaaGJITmxPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVW1WdVpHVnlaWEk3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IENTU1JlbmRlcmVyKF9leHRlbmRzKHtcbiAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uOiB0cnVlXG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX3JlbmRlciA9IHJlcXVpcmUoJy4vcmVuZGVyJyk7XG5cbnZhciBfcmVuZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbmRlcik7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDU1NSZW5kZXJlciA9IGZ1bmN0aW9uIChfUmVuZGVyZXIpIHtcbiAgX2luaGVyaXRzKENTU1JlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIENTU1JlbmRlcmVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDU1NSZW5kZXJlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ1NTUmVuZGVyZXIucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGVsZW1lbnQgPSBfcHJvcHMuZWxlbWVudCxcbiAgICAgICAgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24gPSBfcHJvcHMuZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb247XG5cbiAgICAoMCwgX3JlbmRlcjIuZGVmYXVsdCkoZWxlbWVudCwgdGhpcy5zdGF0ZSwgdGhpcy5jaGFuZ2VkVmFsdWVzLCBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbik7XG4gIH07XG5cbiAgQ1NTUmVuZGVyZXIucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZChrZXkpIHtcbiAgICB2YXIgdmFsdWVUeXBlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRba2V5XTtcblxuICAgIGlmICghX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgICB2YXIgZG9tVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVsoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShrZXkpXSB8fCAwO1xuICAgICAgcmV0dXJuIHZhbHVlVHlwZSAmJiB2YWx1ZVR5cGUucGFyc2UgPyB2YWx1ZVR5cGUucGFyc2UoZG9tVmFsdWUpIDogZG9tVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlVHlwZS5kZWZhdWx0IHx8IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIENTU1JlbmRlcmVyO1xufShfMi5kZWZhdWx0KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJbVZzWlcxbGJuUWlMQ0p3Y205d2N5SXNJa05UVTFKbGJtUmxjbVZ5SWl3aVpXNWhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0aUxDSnZibEpsYm1SbGNpSXNJbk4wWVhSbElpd2lZMmhoYm1kbFpGWmhiSFZsY3lJc0ltOXVVbVZoWkNJc0ltdGxlU0lzSW5aaGJIVmxWSGx3WlNJc0ltUnZiVlpoYkhWbElpd2lkMmx1Wkc5M0lpd2laMlYwUTI5dGNIVjBaV1JUZEhsc1pTSXNJbkJoY25ObElpd2laR1ZtWVhWc2RDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMnRDUVRaQ1pTeFZRVUZWUVN4UFFVRldMRVZCUVcxQ1F5eExRVUZ1UWl4RlFVRXdRanRCUVVOMlF5eFRRVUZQTEVsQlFVbERMRmRCUVVvN1FVRkRURVlzYjBKQlJFczdRVUZGVEVjc1owTkJRVFJDTzBGQlJuWkNMRXRCUjBaR0xFdEJTRVVzUlVGQlVEdEJRVXRFTEVNN08wRkJia05FT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3pzN096czdPenRKUVVWTlF5eFhPenM3T3pzN096czdkMEpCUTBwRkxGRXNkVUpCUVZjN1FVRkJRU3hwUWtGRGRVTXNTMEZCUzBnc1MwRkVOVU03UVVGQlFTeFJRVU5FUkN4UFFVUkRMRlZCUTBSQkxFOUJSRU03UVVGQlFTeFJRVU5SUnl3d1FrRkVVaXhWUVVOUlFTd3dRa0ZFVWpzN1FVRkZWQ3d3UWtGQlZVZ3NUMEZCVml4RlFVRnRRaXhMUVVGTFN5eExRVUY0UWl4RlFVRXJRaXhMUVVGTFF5eGhRVUZ3UXl4RlFVRnRSRWdzTUVKQlFXNUVPMEZCUTBRc1J6czdkMEpCUlVSSkxFMHNiVUpCUVU5RExFY3NSVUZCU3p0QlFVTldMRkZCUVUxRExGbEJRVmtzY1VKQlFXTkVMRWRCUVdRc1EwRkJiRUk3TzBGQlJVRXNVVUZCU1N4RFFVRkRMSGxDUVVGbFFTeEhRVUZtTEVOQlFVd3NSVUZCTUVJN1FVRkJRU3hWUVVOb1FsSXNUMEZFWjBJc1IwRkRTaXhMUVVGTFF5eExRVVJFTEVOQlEyaENSQ3hQUVVSblFqczdRVUZGZUVJc1ZVRkJUVlVzVjBGQlYwTXNUMEZCVDBNc1owSkJRVkFzUTBGQmQwSmFMRTlCUVhoQ0xFVkJRV2xETEVsQlFXcERMRVZCUVhWRExIZENRVUZUVVN4SFFVRlVMRU5CUVhaRExFdEJRWGxFTEVOQlFURkZPMEZCUTBFc1lVRkJVVU1zWVVGQllVRXNWVUZCVlVrc1MwRkJlRUlzUjBGQmFVTktMRlZCUVZWSkxFdEJRVllzUTBGQlowSklMRkZCUVdoQ0xFTkJRV3BETEVkQlFUWkVRU3hSUVVGd1JUdEJRVU5FTEV0QlNrUXNUVUZKVHp0QlFVTk1MRlZCUVVsRUxGTkJRVW9zUlVGQlpUdEJRVU5pTEdWQlFVOUJMRlZCUVZWTExFOUJRVllzU1VGQmNVSXNRMEZCTlVJN1FVRkRSQ3hQUVVaRUxFMUJSVTg3UVVGRFRDeGxRVUZQTEVOQlFWQTdRVUZEUkR0QlFVTkdPMEZCUTBZc1J5SXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGeWN5NW9ZV3hzTDFCeWIycGxZM1J6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCU1pXNWtaWEpsY2lCbWNtOXRJQ2N1TGk4bk8xeHVhVzF3YjNKMElISmxibVJsY2tOVFV5Qm1jbTl0SUNjdUwzSmxibVJsY2ljN1hHNXBiWEJ2Y25RZ2RISmhibk5tYjNKdFVISnZjSE1nWm5KdmJTQW5MaTkwY21GdWMyWnZjbTB0Y0hKdmNITW5PMXh1YVcxd2IzSjBJSFpoYkhWbFZIbHdaWE5OWVhBZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5YzdYRzVwYlhCdmNuUWdjSEpsWm1sNFpYSWdabkp2YlNBbkxpOXdjbVZtYVhobGNpYzdYRzVjYm1Oc1lYTnpJRU5UVTFKbGJtUmxjbVZ5SUdWNGRHVnVaSE1nVW1WdVpHVnlaWElnZTF4dUlDQnZibEpsYm1SbGNpZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHVnNaVzFsYm5Rc0lHVnVZV0pzWlVoaGNtUjNZWEpsUVdOalpXeGxjbUYwYVc5dUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJSEpsYm1SbGNrTlRVeWhsYkdWdFpXNTBMQ0IwYUdsekxuTjBZWFJsTENCMGFHbHpMbU5vWVc1blpXUldZV3gxWlhNc0lHVnVZV0pzWlVoaGNtUjNZWEpsUVdOalpXeGxjbUYwYVc5dUtUdGNiaUFnZlZ4dVhHNGdJRzl1VW1WaFpDaHJaWGtwSUh0Y2JpQWdJQ0JqYjI1emRDQjJZV3gxWlZSNWNHVWdQU0IyWVd4MVpWUjVjR1Z6VFdGd1cydGxlVjA3WEc1Y2JpQWdJQ0JwWmlBb0lYUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJR052Ym5OMElIc2daV3hsYldWdWRDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0FnSUdOdmJuTjBJR1J2YlZaaGJIVmxJRDBnZDJsdVpHOTNMbWRsZEVOdmJYQjFkR1ZrVTNSNWJHVW9aV3hsYldWdWRDd2diblZzYkNsYmNISmxabWw0WlhJb2EyVjVLVjBnZkh3Z01EdGNiaUFnSUNBZ0lISmxkSFZ5YmlBb2RtRnNkV1ZVZVhCbElDWW1JSFpoYkhWbFZIbHdaUzV3WVhKelpTa2dQeUIyWVd4MVpWUjVjR1V1Y0dGeWMyVW9aRzl0Vm1Gc2RXVXBJRG9nWkc5dFZtRnNkV1U3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHbG1JQ2gyWVd4MVpWUjVjR1VwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhaaGJIVmxWSGx3WlM1a1pXWmhkV3gwSUh4OElEQTdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01EdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z0tHVnNaVzFsYm5Rc0lIQnliM0J6S1NCN1hHNGdJSEpsZEhWeWJpQnVaWGNnUTFOVFVtVnVaR1Z5WlhJb2UxeHVJQ0FnSUdWc1pXMWxiblFzWEc0Z0lDQWdaVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNDZJSFJ5ZFdVc1hHNGdJQ0FnTGk0dWNISnZjSE5jYmlBZ2ZTazdYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBTVkdSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudFxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVzKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTVkdSZW5kZXJlciA9IGZ1bmN0aW9uIChfUmVuZGVyZXIpIHtcbiAgX2luaGVyaXRzKFNWR1JlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIFNWR1JlbmRlcmVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNWR1JlbmRlcmVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICB2YXIgX3Byb3BzJGVsZW1lbnQkZ2V0QkJvID0gcHJvcHMuZWxlbWVudC5nZXRCQm94KCksXG4gICAgICAgIHggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueCxcbiAgICAgICAgeSA9IF9wcm9wcyRlbGVtZW50JGdldEJCby55LFxuICAgICAgICB3aWR0aCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLmhlaWdodDtcblxuICAgIF90aGlzLmVsZW1lbnREaW1lbnNpb25zID0geyB4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU1ZHUmVuZGVyZXIucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICB2YXIgYXR0cnMgPSAoMCwgX2J1aWxkMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCB0aGlzLmVsZW1lbnREaW1lbnNpb25zKTtcbiAgICAoMCwgX3V0aWxzLnNldERPTUF0dHJzKShlbGVtZW50LCBhdHRycyk7XG4gIH07XG5cbiAgU1ZHUmVuZGVyZXIucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZChrZXkpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuXG4gICAgaWYgKCFfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2YWx1ZVR5cGUgPSBfdmFsdWVUeXBlczIuZGVmYXVsdFtrZXldO1xuICAgICAgcmV0dXJuIHZhbHVlVHlwZSA/IHZhbHVlVHlwZS5kZWZhdWx0IDogMDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFNWR1JlbmRlcmVyO1xufShfMi5kZWZhdWx0KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJbVZzWlcxbGJuUWlMQ0p3Y205d2N5SXNJbE5XUjFKbGJtUmxjbVZ5SWl3aVoyVjBRa0p2ZUNJc0luZ2lMQ0o1SWl3aWQybGtkR2dpTENKb1pXbG5hSFFpTENKbGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lJc0ltOXVVbVZ1WkdWeUlpd2lZWFIwY25NaUxDSnpkR0YwWlNJc0ltOXVVbVZoWkNJc0ltdGxlU0lzSW1kbGRFRjBkSEpwWW5WMFpTSXNJblpoYkhWbFZIbHdaU0lzSW1SbFptRjFiSFFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0clFrRm5RMlVzVlVGQlZVRXNUMEZCVml4RlFVRnRRa01zUzBGQmJrSXNSVUZCTUVJN1FVRkRka01zVTBGQlR5eEpRVUZKUXl4WFFVRktPMEZCUTB4R08wRkJSRXNzUzBGRlJrTXNTMEZHUlN4RlFVRlFPMEZCU1VRc1F6czdRVUZ5UTBRN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN096czdPenRKUVVWTlF5eFhPenM3UVVGRFNpeDFRa0ZCV1VRc1MwRkJXaXhGUVVGdFFqdEJRVUZCT3p0QlFVRkJMR2xFUVVOcVFpeHhRa0ZCVFVFc1MwRkJUaXhEUVVScFFqczdRVUZCUVN4blEwRkhaVUVzVFVGQlRVUXNUMEZCVGl4RFFVRmpSeXhQUVVGa0xFVkJTR1k3UVVGQlFTeFJRVWRVUXl4RFFVaFRMSGxDUVVkVVFTeERRVWhUTzBGQlFVRXNVVUZIVGtNc1EwRklUU3g1UWtGSFRrRXNRMEZJVFR0QlFVRkJMRkZCUjBoRExFdEJTRWNzZVVKQlIwaEJMRXRCU0VjN1FVRkJRU3hSUVVkSlF5eE5RVWhLTEhsQ1FVZEpRU3hOUVVoS096dEJRVWxxUWl4VlFVRkxReXhwUWtGQlRDeEhRVUY1UWl4RlFVRkZTaXhKUVVGR0xFVkJRVXRETEVsQlFVd3NSVUZCVVVNc1dVRkJVaXhGUVVGbFF5eGpRVUZtTEVWQlFYcENPMEZCU21sQ08wRkJTMnhDT3p0M1FrRkZSRVVzVVN4MVFrRkJWenRCUVVGQkxGRkJRMFJVTEU5QlJFTXNSMEZEVnl4TFFVRkxReXhMUVVSb1FpeERRVU5FUkN4UFFVUkRPenRCUVVWVUxGRkJRVTFWTEZGQlFWRXNjVUpCUVUwc1MwRkJTME1zUzBGQldDeEZRVUZyUWl4TFFVRkxTQ3hwUWtGQmRrSXNRMEZCWkR0QlFVTkJMRFJDUVVGWlVpeFBRVUZhTEVWQlFYRkNWU3hMUVVGeVFqdEJRVU5FTEVjN08zZENRVVZFUlN4TkxHMUNRVUZQUXl4SExFVkJRVXM3UVVGQlFTeFJRVU5HWWl4UFFVUkZMRWRCUTFVc1MwRkJTME1zUzBGRVppeERRVU5HUkN4UFFVUkZPenM3UVVGSFZpeFJRVUZKTEVOQlFVTXNlVUpCUVdWaExFZEJRV1lzUTBGQlRDeEZRVUV3UWp0QlFVTjRRaXhoUVVGUFlpeFJRVUZSWXl4WlFVRlNMRU5CUVhGQ1JDeEhRVUZ5UWl4RFFVRlFPMEZCUTBRc1MwRkdSQ3hOUVVWUE8wRkJRMHdzVlVGQlRVVXNXVUZCV1N4eFFrRkJZVVlzUjBGQllpeERRVUZzUWp0QlFVTkJMR0ZCUVZGRkxGTkJRVVFzUjBGQlkwRXNWVUZCVlVNc1QwRkJlRUlzUjBGQmEwTXNRMEZCZWtNN1FVRkRSRHRCUVVOR0xFY2lMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGNuTXVhR0ZzYkM5UWNtOXFaV04wY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1VtVnVaR1Z5WlhJZ1puSnZiU0FuTGk0dkp6dGNibWx0Y0c5eWRDQmlkV2xzWkNCbWNtOXRJQ2N1TDJKMWFXeGtKenRjYm1sdGNHOXlkQ0IwY21GdWMyWnZjbTFRY205d2N5Qm1jbTl0SUNjdUxpOWpjM012ZEhKaGJuTm1iM0p0TFhCeWIzQnpKenRjYm1sdGNHOXlkQ0IyWVd4MVpWUjVjR1ZOWVhBZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5YzdYRzVwYlhCdmNuUWdleUJ6WlhSRVQwMUJkSFJ5Y3lCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtTnNZWE56SUZOV1IxSmxibVJsY21WeUlHVjRkR1Z1WkhNZ1VtVnVaR1Z5WlhJZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeWtnZTF4dUlDQWdJSE4xY0dWeUtIQnliM0J6S1R0Y2JseHVJQ0FnSUdOdmJuTjBJSHNnZUN3Z2VTd2dkMmxrZEdnc0lHaGxhV2RvZENCOUlEMGdjSEp2Y0hNdVpXeGxiV1Z1ZEM1blpYUkNRbTk0S0NrN1hHNGdJQ0FnZEdocGN5NWxiR1Z0Wlc1MFJHbHRaVzV6YVc5dWN5QTlJSHNnZUN3Z2VTd2dkMmxrZEdnc0lHaGxhV2RvZENCOU8xeHVJQ0I5WEc1Y2JpQWdiMjVTWlc1a1pYSW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmxiR1Z0Wlc1MElIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR052Ym5OMElHRjBkSEp6SUQwZ1luVnBiR1FvZEdocGN5NXpkR0YwWlN3Z2RHaHBjeTVsYkdWdFpXNTBSR2x0Wlc1emFXOXVjeWs3WEc0Z0lDQWdjMlYwUkU5TlFYUjBjbk1vWld4bGJXVnVkQ3dnWVhSMGNuTXBPMXh1SUNCOVhHNWNiaUFnYjI1U1pXRmtLR3RsZVNrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWld4bGJXVnVkQ0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNibHh1SUNBZ0lHbG1JQ2doZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdWc1pXMWxiblF1WjJWMFFYUjBjbWxpZFhSbEtHdGxlU2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHTnZibk4wSUhaaGJIVmxWSGx3WlNBOUlIWmhiSFZsVkhsd1pVMWhjRnRyWlhsZE8xeHVJQ0FnSUNBZ2NtVjBkWEp1SUNoMllXeDFaVlI1Y0dVcElEOGdkbUZzZFdWVWVYQmxMbVJsWm1GMWJIUWdPaUF3TzF4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUFvWld4bGJXVnVkQ3dnY0hKdmNITXBJSHRjYmlBZ2NtVjBkWEp1SUc1bGR5QlRWa2RTWlc1a1pYSmxjaWg3WEc0Z0lDQWdaV3hsYldWdWRDeGNiaUFnSUNBdUxpNXdjbTl3YzF4dUlDQjlLVHRjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgU1ZHUGF0aFJlbmRlcmVyKF9leHRlbmRzKHtcbiAgICBlbGVtZW50OiBlbGVtZW50XG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTVkdQYXRoUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhTVkdQYXRoUmVuZGVyZXIsIF9SZW5kZXJlcik7XG5cbiAgZnVuY3Rpb24gU1ZHUGF0aFJlbmRlcmVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNWR1BhdGhSZW5kZXJlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVuZGVyZXIuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgdmFyIF9wcm9wcyRlbGVtZW50JGdldEJCbyA9IHByb3BzLmVsZW1lbnQuZ2V0QkJveCgpLFxuICAgICAgICB4ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLngsXG4gICAgICAgIHkgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueSxcbiAgICAgICAgd2lkdGggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby5oZWlnaHQ7XG5cbiAgICBfdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5LFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBwYXRoTGVuZ3RoOiBwcm9wcy5lbGVtZW50LmdldFRvdGFsTGVuZ3RoKClcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFNWR1BhdGhSZW5kZXJlci5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICB2YXIgcGF0aExlbmd0aCA9IHRoaXMuZWxlbWVudERpbWVuc2lvbnMucGF0aExlbmd0aDtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgICgwLCBfdXRpbHMuc2V0RE9NQXR0cnMpKGVsZW1lbnQsICgwLCBfYnVpbGQyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIHBhdGhMZW5ndGgpKTtcbiAgfTtcblxuICBTVkdQYXRoUmVuZGVyZXIucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5lbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICB9O1xuXG4gIHJldHVybiBTVkdQYXRoUmVuZGVyZXI7XG59KF8yLmRlZmF1bHQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTFhCaGRHZ3ZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHNpWld4bGJXVnVkQ0lzSW5CeWIzQnpJaXdpVTFaSFVHRjBhRkpsYm1SbGNtVnlJaXdpWjJWMFFrSnZlQ0lzSW5naUxDSjVJaXdpZDJsa2RHZ2lMQ0pvWldsbmFIUWlMQ0psYkdWdFpXNTBSR2x0Wlc1emFXOXVjeUlzSW5CaGRHaE1aVzVuZEdnaUxDSm5aWFJVYjNSaGJFeGxibWQwYUNJc0ltOXVVbVZ1WkdWeUlpd2ljM1JoZEdVaUxDSnZibEpsWVdRaUxDSnJaWGtpTENKblpYUkJkSFJ5YVdKMWRHVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRyUWtFMlFtVXNWVUZCVlVFc1QwRkJWaXhGUVVGdFFrTXNTMEZCYmtJc1JVRkJNRUk3UVVGRGRrTXNVMEZCVHl4SlFVRkpReXhsUVVGS08wRkJRMHhHTzBGQlJFc3NTMEZGUmtNc1MwRkdSU3hGUVVGUU8wRkJTVVFzUXpzN1FVRnNRMFE3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN096czdPMGxCUlUxRExHVTdPenRCUVVOS0xESkNRVUZaUkN4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlFVRXNhVVJCUTJwQ0xIRkNRVUZOUVN4TFFVRk9MRU5CUkdsQ096dEJRVUZCTEdkRFFVZGxRU3hOUVVGTlJDeFBRVUZPTEVOQlFXTkhMRTlCUVdRc1JVRklaanRCUVVGQkxGRkJSMVJETEVOQlNGTXNlVUpCUjFSQkxFTkJTRk03UVVGQlFTeFJRVWRPUXl4RFFVaE5MSGxDUVVkT1FTeERRVWhOTzBGQlFVRXNVVUZIU0VNc1MwRklSeXg1UWtGSFNFRXNTMEZJUnp0QlFVRkJMRkZCUjBsRExFMUJTRW9zZVVKQlIwbEJMRTFCU0VvN08wRkJTV3BDTEZWQlFVdERMR2xDUVVGTUxFZEJRWGxDTzBGQlEzWkNTaXhWUVVSMVFqdEJRVVYyUWtNc1ZVRkdkVUk3UVVGSGRrSkRMR3RDUVVoMVFqdEJRVWwyUWtNc2IwSkJTblZDTzBGQlMzWkNSU3hyUWtGQldWSXNUVUZCVFVRc1QwRkJUaXhEUVVGalZTeGpRVUZrTzBGQlRGY3NTMEZCZWtJN1FVRkthVUk3UVVGWGJFSTdPelJDUVVWRVF5eFJMSFZDUVVGWE8wRkJRVUVzVVVGRFJFWXNWVUZFUXl4SFFVTmpMRXRCUVV0RUxHbENRVVJ1UWl4RFFVTkVReXhWUVVSRE8wRkJRVUVzVVVGRlJGUXNUMEZHUXl4SFFVVlhMRXRCUVV0RExFdEJSbWhDTEVOQlJVUkVMRTlCUmtNN08wRkJSMVFzTkVKQlFWbEJMRTlCUVZvc1JVRkJjVUlzY1VKQlFVMHNTMEZCUzFrc1MwRkJXQ3hGUVVGclFrZ3NWVUZCYkVJc1EwRkJja0k3UVVGRFJDeEhPenMwUWtGRlJFa3NUU3h0UWtGQlQwTXNSeXhGUVVGTE8wRkJRMVlzVjBGQlR5eExRVUZMWWl4TFFVRk1MRU5CUVZkRUxFOUJRVmdzUTBGQmJVSmxMRmxCUVc1Q0xFTkJRV2REUkN4SFFVRm9ReXhEUVVGUU8wRkJRMFFzUnlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0Z5Y3k1b1lXeHNMMUJ5YjJwbFkzUnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JTWlc1a1pYSmxjaUJtY205dElDY3VMaThuTzF4dWFXMXdiM0owSUdKMWFXeGtJR1p5YjIwZ0p5NHZZblZwYkdRbk8xeHVhVzF3YjNKMElIc2djMlYwUkU5TlFYUjBjbk1nZlNCbWNtOXRJQ2N1TGk4dUxpOXBibU12ZFhScGJITW5PMXh1WEc1amJHRnpjeUJUVmtkUVlYUm9VbVZ1WkdWeVpYSWdaWGgwWlc1a2N5QlNaVzVrWlhKbGNpQjdYRzRnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6S1NCN1hHNGdJQ0FnYzNWd1pYSW9jSEp2Y0hNcE8xeHVYRzRnSUNBZ1kyOXVjM1FnZXlCNExDQjVMQ0IzYVdSMGFDd2dhR1ZwWjJoMElIMGdQU0J3Y205d2N5NWxiR1Z0Wlc1MExtZGxkRUpDYjNnb0tUdGNiaUFnSUNCMGFHbHpMbVZzWlcxbGJuUkVhVzFsYm5OcGIyNXpJRDBnZTF4dUlDQWdJQ0FnZUN4Y2JpQWdJQ0FnSUhrc1hHNGdJQ0FnSUNCM2FXUjBhQ3hjYmlBZ0lDQWdJR2hsYVdkb2RDeGNiaUFnSUNBZ0lIQmhkR2hNWlc1bmRHZzZJSEJ5YjNCekxtVnNaVzFsYm5RdVoyVjBWRzkwWVd4TVpXNW5kR2dvS1Z4dUlDQWdJSDA3WEc0Z0lIMWNibHh1SUNCdmJsSmxibVJsY2lncElIdGNiaUFnSUNCamIyNXpkQ0I3SUhCaGRHaE1aVzVuZEdnZ2ZTQTlJSFJvYVhNdVpXeGxiV1Z1ZEVScGJXVnVjMmx2Ym5NN1hHNGdJQ0FnWTI5dWMzUWdleUJsYkdWdFpXNTBJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUhObGRFUlBUVUYwZEhKektHVnNaVzFsYm5Rc0lHSjFhV3hrS0hSb2FYTXVjM1JoZEdVc0lIQmhkR2hNWlc1bmRHZ3BLVHRjYmlBZ2ZWeHVYRzRnSUc5dVVtVmhaQ2hyWlhrcElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXdjbTl3Y3k1bGJHVnRaVzUwTG1kbGRFRjBkSEpwWW5WMFpTaHJaWGtwTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUNobGJHVnRaVzUwTENCd2NtOXdjeWtnZTF4dUlDQnlaWFIxY200Z2JtVjNJRk5XUjFCaGRHaFNaVzVrWlhKbGNpaDdYRzRnSUNBZ1pXeGxiV1Z1ZEN4Y2JpQWdJQ0F1TGk1d2NtOXdjMXh1SUNCOUtUdGNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNwbGl0Q29sb3JWYWx1ZXMgPSBzcGxpdENvbG9yVmFsdWVzO1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xufTtcblxudmFyIENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xudmFyIFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xudmFyIEhBU19QRVJGT1JNQU5DRV9OT1cgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdztcblxuLypcbiAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY2FtZWxUb0Rhc2ggPSBleHBvcnRzLmNhbWVsVG9EYXNoID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuLypcbiAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgXG4gIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG52YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLmN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xufSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxudmFyIHNldERPTUF0dHJzID0gZXhwb3J0cy5zZXRET01BdHRycyA9IGZ1bmN0aW9uIChlbGVtZW50LCBhdHRycykge1xuICBmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG4gIH1cbn07XG4vKlxuICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgXCJmb28sYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdENvbW1hRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG59O1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIGFueSBhcmd1bWVudCBmb3IgYHRlcm1gXG4gKiBgY29udGFpbnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG52YXIgY29udGFpbnMgPSBleHBvcnRzLmNvbnRhaW5zID0gZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSAhPT0gLTE7XG4gIH07XG59O1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIHRvIHNlZSBpZiBhbiBhcmd1bWVudCBpc1xuICogIHRoZSBmaXJzdCBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBgdGVybWBcbiAqIGBpc0ZpcnN0Q2hhcnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG52YXIgaXNGaXJzdENoYXJzID0gZXhwb3J0cy5pc0ZpcnN0Q2hhcnMgPSBmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pID09PSAwO1xuICB9O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSB1bml0IHZhbHVlIHR5cGVcbiAqL1xudmFyIGNyZWF0ZVVuaXRUeXBlID0gZXhwb3J0cy5jcmVhdGVVbml0VHlwZSA9IGZ1bmN0aW9uICh0eXBlLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIHtcbiAgICB0ZXN0OiBjb250YWlucyh0eXBlKSxcbiAgICBwYXJzZTogcGFyc2VGbG9hdCxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICB9O1xufTtcblxuLypcbiAgR2V0IHZhbHVlIGZyb20gZnVuY3Rpb24gc3RyaW5nXG4gIFwidHJhbnNsYXRlWCgyMHB4KVwiIC0+IFwiMjBweFwiXG4qL1xudmFyIGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHNwbGl0IGNvbG9yXG4gKiB2YWx1ZXMgZnJvbSBzdHJpbmcgaW50byBhbiBvYmplY3Qgb2YgcHJvcGVydGllc1xuICogYG1hcEFycmF5VG9PYmplY3QoWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddKSgncmdiYSgwLDAsMCknKWBcbiAqL1xuZnVuY3Rpb24gc3BsaXRDb2xvclZhbHVlcyh0ZXJtcykge1xuICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHZhbHVlcyA9IHt9O1xuICAgIHZhciB2YWx1ZXNBcnJheSA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodikpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICB2YWx1ZXNbdGVybXNbaV1dID0gdmFsdWVzQXJyYXlbaV0gIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQodmFsdWVzQXJyYXlbaV0pIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xufVxuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbnZhciBpc051bSA9IGV4cG9ydHMuaXNOdW0gPSBmdW5jdGlvbiAobnVtKSB7XG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xudmFyIGlzT2JqID0gZXhwb3J0cy5pc09iaiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbnZhciBpc1N0cmluZyA9IGV4cG9ydHMuaXNTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbnZhciBpc0hleCA9IGV4cG9ydHMuaXNIZXggPSBpc0ZpcnN0Q2hhcnMoJyMnKTtcbnZhciBpc1JnYiA9IGV4cG9ydHMuaXNSZ2IgPSBpc0ZpcnN0Q2hhcnMoJ3JnYicpO1xudmFyIGlzSHNsID0gZXhwb3J0cy5pc0hzbCA9IGlzRmlyc3RDaGFycygnaHNsJyk7XG52YXIgaXNDb2xvciA9IGV4cG9ydHMuaXNDb2xvciA9IGZ1bmN0aW9uICh2KSB7XG4gIHJldHVybiBpc0hleCh2KSB8fCBpc1JnYih2KSB8fCBpc0hzbCh2KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkWFJwYkhNdWFuTWlYU3dpYm1GdFpYTWlPbHNpYzNCc2FYUkRiMnh2Y2xaaGJIVmxjeUlzSW5aaGNsUjVjR1VpTENKMllYSnBZV0pzWlNJc0lrOWlhbVZqZENJc0luQnliM1J2ZEhsd1pTSXNJblJ2VTNSeWFXNW5JaXdpWTJGc2JDSXNJbk5zYVdObElpd2lRMEZOUlV4ZlEwRlRSVjlRUVZSVVJWSk9JaXdpVWtWUVRFRkRSVjlVUlUxUVRFRlVSU0lzSWtoQlUxOVFSVkpHVDFKTlFVNURSVjlPVDFjaUxDSndaWEptYjNKdFlXNWpaU0lzSW01dmR5SXNJbU5oYldWc1ZHOUVZWE5vSWl3aWMzUnlhVzVuSWl3aWNtVndiR0ZqWlNJc0luUnZURzkzWlhKRFlYTmxJaXdpWTNWeWNtVnVkRlJwYldVaUxDSkVZWFJsSWl3aVoyVjBWR2x0WlNJc0luTmxkRVJQVFVGMGRISnpJaXdpWld4bGJXVnVkQ0lzSW1GMGRISnpJaXdpYTJWNUlpd2lhR0Z6VDNkdVVISnZjR1Z5ZEhraUxDSnpaWFJCZEhSeWFXSjFkR1VpTENKemNHeHBkRU52YlcxaFJHVnNhVzFwZEdWa0lpd2lkbUZzZFdVaUxDSnBjMU4wY21sdVp5SXNJbk53YkdsMElpd2lZMjl1ZEdGcGJuTWlMQ0owWlhKdElpd2lkaUlzSW1sdVpHVjRUMllpTENKcGMwWnBjbk4wUTJoaGNuTWlMQ0pqY21WaGRHVlZibWwwVkhsd1pTSXNJblI1Y0dVaUxDSjBjbUZ1YzJadmNtMGlMQ0owWlhOMElpd2ljR0Z5YzJVaUxDSndZWEp6WlVac2IyRjBJaXdpWjJWMFZtRnNkV1ZHY205dFJuVnVZM1JwYjI1VGRISnBibWNpTENKemRXSnpkSEpwYm1jaUxDSnNZWE4wU1c1a1pYaFBaaUlzSW5SbGNtMXpJaXdpYm5WdFZHVnliWE1pTENKc1pXNW5kR2dpTENKMllXeDFaWE1pTENKMllXeDFaWE5CY25KaGVTSXNJbWtpTENKMWJtUmxabWx1WldRaUxDSnBjMEZ5Y21GNUlpd2lZWEp5SWl3aWFYTkdkVzVqSWl3aWIySnFJaXdpYVhOT2RXMGlMQ0p1ZFcwaUxDSnBjMDlpYWlJc0luTjBjaUlzSW1selNHVjRJaXdpYVhOU1oySWlMQ0pwYzBoemJDSXNJbWx6UTI5c2IzSWlYU3dpYldGd2NHbHVaM01pT2lJN096dFJRVFpGWjBKQkxHZENMRWRCUVVGQkxHZENPMEZCTjBWb1FpeEpRVUZOUXl4VlFVRlZMRlZCUVVORExGRkJRVVE3UVVGQlFTeFRRVUZqUXl4UFFVRlBReXhUUVVGUUxFTkJRV2xDUXl4UlFVRnFRaXhEUVVFd1FrTXNTVUZCTVVJc1EwRkJLMEpLTEZGQlFTOUNMRVZCUVhsRFN5eExRVUY2UXl4RFFVRXJReXhEUVVFdlF5eEZRVUZyUkN4RFFVRkRMRU5CUVc1RUxFTkJRV1E3UVVGQlFTeERRVUZvUWpzN1FVRkZRU3hKUVVGTlF5eHhRa0ZCY1VJc2FVSkJRVE5DTzBGQlEwRXNTVUZCVFVNc2JVSkJRVzFDTEU5QlFYcENPMEZCUTBFc1NVRkJUVU1zYzBKQlFYVkNMRTlCUVU5RExGZEJRVkFzUzBGQmRVSXNWMEZCZGtJc1NVRkJjME5CTEZsQlFWbERMRWRCUVM5Rk96dEJRVVZCT3pzN096czdRVUZOVHl4SlFVRk5ReXh2UTBGQll5eFZRVUZEUXl4TlFVRkVPMEZCUVVFc1UwRkJXVUVzVDBGQlQwTXNUMEZCVUN4RFFVRmxVQ3hyUWtGQlppeEZRVUZ0UTBNc1owSkJRVzVETEVWQlFYRkVUeXhYUVVGeVJDeEZRVUZhTzBGQlFVRXNRMEZCY0VJN08wRkJSVkE3T3pzN08wRkJTMDhzU1VGQlRVTXNiME5CUVdOUUxITkNRVUZ6UWp0QlFVRkJMRk5CUVUxRExGbEJRVmxETEVkQlFWb3NSVUZCVGp0QlFVRkJMRU5CUVhSQ0xFZEJRV2RFTzBGQlFVRXNVMEZCVFN4SlFVRkpUU3hKUVVGS0xFZEJRVmRETEU5QlFWZ3NSVUZCVGp0QlFVRkJMRU5CUVhCRk96dEJRVVZCTEVsQlFVMURMRzlEUVVGakxGVkJRVU5ETEU5QlFVUXNSVUZCVlVNc1MwRkJWaXhGUVVGdlFqdEJRVU0zUXl4UFFVRkxMRWxCUVVsRExFZEJRVlFzU1VGQlowSkVMRXRCUVdoQ0xFVkJRWFZDTzBGQlEzSkNMRkZCUVVsQkxFMUJRVTFGTEdOQlFVNHNRMEZCY1VKRUxFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkROMEpHTEdOQlFWRkpMRmxCUVZJc1EwRkJjVUpHTEVkQlFYSkNMRVZCUVRCQ1JDeE5RVUZOUXl4SFFVRk9MRU5CUVRGQ08wRkJRMFE3UVVGRFJqdEJRVU5HTEVOQlRrMDdRVUZQVURzN096czdPenM3UVVGUlR5eEpRVUZOUnl4dlJFRkJjMElzVlVGQlEwTXNTMEZCUkR0QlFVRkJMRk5CUVZkRExGTkJRVk5FTEV0QlFWUXNTVUZCYTBKQkxFMUJRVTFGTEV0QlFVNHNRMEZCV1N4TlFVRmFMRU5CUVd4Q0xFZEJRWGRETEVOQlFVTkdMRXRCUVVRc1EwRkJia1E3UVVGQlFTeERRVUUxUWpzN1FVRkZVRHM3T3p0QlFVbFBMRWxCUVUxSExEaENRVUZYTEZWQlFVTkRMRWxCUVVRN1FVRkJRU3hUUVVGVkxGVkJRVU5ETEVOQlFVUXNSVUZCVHp0QlFVTjJReXhYUVVGUlNpeFRRVUZUUnl4SlFVRlVMRXRCUVd0Q1F5eEZRVUZGUXl4UFFVRkdMRU5CUVZWR0xFbEJRVllzVFVGQmIwSXNRMEZCUXl4RFFVRXZRenRCUVVORUxFZEJSblZDTzBGQlFVRXNRMEZCYWtJN08wRkJTVkE3T3pzN08wRkJTMDhzU1VGQlRVY3NjME5CUVdVc1ZVRkJRMGdzU1VGQlJEdEJRVUZCTEZOQlFWVXNWVUZCUTBNc1EwRkJSQ3hGUVVGUE8wRkJRek5ETEZkQlFWRktMRk5CUVZOSExFbEJRVlFzUzBGQmEwSkRMRVZCUVVWRExFOUJRVVlzUTBGQlZVWXNTVUZCVml4TlFVRnZRaXhEUVVFNVF6dEJRVU5FTEVkQlJqSkNPMEZCUVVFc1EwRkJja0k3TzBGQlNWQTdPenRCUVVkUExFbEJRVTFKTERCRFFVRnBRaXhWUVVGRFF5eEpRVUZFTEVWQlFVOURMRk5CUVZBc1JVRkJjVUk3UVVGRGFrUXNVMEZCVHp0QlFVTk1ReXhWUVVGTlVpeFRRVUZUVFN4SlFVRlVMRU5CUkVRN1FVRkZURWNzVjBGQlQwTXNWVUZHUmp0QlFVZE1TRHRCUVVoTExFZEJRVkE3UVVGTFJDeERRVTVOT3p0QlFWRlFPenM3TzBGQlNVOHNTVUZCVFVrc2EwVkJRVFpDTEZWQlFVTmtMRXRCUVVRN1FVRkJRU3hUUVVGWFFTeE5RVUZOWlN4VFFVRk9MRU5CUVdkQ1ppeE5RVUZOVFN4UFFVRk9MRU5CUVdNc1IwRkJaQ3hKUVVGeFFpeERRVUZ5UXl4RlFVRjNRMDRzVFVGQlRXZENMRmRCUVU0c1EwRkJhMElzUjBGQmJFSXNRMEZCZUVNc1EwRkJXRHRCUVVGQkxFTkJRVzVET3p0QlFVVlFPenM3T3p0QlFVdFBMRk5CUVZNelF5eG5Ra0ZCVkN4RFFVRXdRalJETEV0QlFURkNMRVZCUVdsRE8wRkJRM1JETEUxQlFVMURMRmRCUVZkRUxFMUJRVTFGTEUxQlFYWkNPenRCUVVWQkxGTkJRVThzVlVGQlZXUXNRMEZCVml4RlFVRmhPMEZCUTJ4Q0xGRkJRVTFsTEZOQlFWTXNSVUZCWmp0QlFVTkJMRkZCUVUxRExHTkJRV04wUWl4dlFrRkJiMEpsTERKQ1FVRXlRbFFzUTBGQk0wSXNRMEZCY0VJc1EwRkJjRUk3TzBGQlJVRXNVMEZCU3l4SlFVRkphVUlzU1VGQlNTeERRVUZpTEVWQlFXZENRU3hKUVVGSlNpeFJRVUZ3UWl4RlFVRTRRa2tzUjBGQk9VSXNSVUZCYlVNN1FVRkRha05HTEdGQlFVOUlMRTFCUVUxTExFTkJRVTRzUTBGQlVDeEpRVUZ2UWtRc1dVRkJXVU1zUTBGQldpeE5RVUZ0UWtNc1UwRkJjRUlzUjBGQmFVTldMRmRCUVZkUkxGbEJRVmxETEVOQlFWb3NRMEZCV0N4RFFVRnFReXhIUVVFNFJDeERRVUZxUmp0QlFVTkVPenRCUVVWRUxGZEJRVTlHTEUxQlFWQTdRVUZEUkN4SFFWUkVPMEZCVlVRN08wRkJSVVE3T3pzN096dEJRVTFQTEVsQlFVMUpMRFJDUVVGVkxGVkJRVU5ETEVkQlFVUTdRVUZCUVN4VFFVRlRia1FzVVVGQlVXMUVMRWRCUVZJc1RVRkJhVUlzVDBGQk1VSTdRVUZCUVN4RFFVRm9RanM3UVVGRlVEczdPenM3TzBGQlRVOHNTVUZCVFVNc01FSkJRVk1zVlVGQlEwTXNSMEZCUkR0QlFVRkJMRk5CUVZOeVJDeFJRVUZSY1VRc1IwRkJVaXhOUVVGcFFpeFZRVUV4UWp0QlFVRkJMRU5CUVdZN08wRkJSVkE3T3pzN096dEJRVTFQTEVsQlFVMURMSGRDUVVGUkxGVkJRVU5ETEVkQlFVUTdRVUZCUVN4VFFVRlRMRTlCUVU5QkxFZEJRVkFzUzBGQlpTeFJRVUY0UWp0QlFVRkJMRU5CUVdRN08wRkJSVkE3T3pzN096dEJRVTFQTEVsQlFVMURMSGRDUVVGUkxGVkJRVU5JTEVkQlFVUTdRVUZCUVN4VFFVRlRMRTlCUVU5QkxFZEJRVkFzUzBGQlpTeFJRVUY0UWp0QlFVRkJMRU5CUVdRN08wRkJSVkE3T3pzN096dEJRVTFQTEVsQlFVMHhRaXc0UWtGQlZ5eFZRVUZET0VJc1IwRkJSRHRCUVVGQkxGTkJRVk1zVDBGQlQwRXNSMEZCVUN4TFFVRmxMRkZCUVhoQ08wRkJRVUVzUTBGQmFrSTdPMEZCUlVFc1NVRkJUVU1zZDBKQlFWRjZRaXhoUVVGaExFZEJRV0lzUTBGQlpEdEJRVU5CTEVsQlFVMHdRaXgzUWtGQlVURkNMR0ZCUVdFc1MwRkJZaXhEUVVGa08wRkJRMEVzU1VGQlRUSkNMSGRDUVVGUk0wSXNZVUZCWVN4TFFVRmlMRU5CUVdRN1FVRkRRU3hKUVVGTk5FSXNORUpCUVZVc1ZVRkJRemxDTEVOQlFVUTdRVUZCUVN4VFFVRlJNa0lzVFVGQlRUTkNMRU5CUVU0c1MwRkJXVFJDTEUxQlFVMDFRaXhEUVVGT0xFTkJRVm9zU1VGQmQwSTJRaXhOUVVGTk4wSXNRMEZCVGl4RFFVRm9RenRCUVVGQkxFTkJRV2hDSWl3aVptbHNaU0k2SW5WMGFXeHpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWEp6TG1oaGJHd3ZVSEp2YW1WamRITXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWTI5dWMzUWdkbUZ5Vkhsd1pTQTlJQ2gyWVhKcFlXSnNaU2tnUFQ0Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1MGIxTjBjbWx1Wnk1allXeHNLSFpoY21saFlteGxLUzV6YkdsalpTZzRMQ0F0TVNrN1hHNWNibU52Ym5OMElFTkJUVVZNWDBOQlUwVmZVRUZVVkVWU1RpQTlJQzhvVzJFdGVsMHBLRnRCTFZwZEtTOW5PMXh1WTI5dWMzUWdVa1ZRVEVGRFJWOVVSVTFRVEVGVVJTQTlJQ2NrTVMwa01pYzdYRzVqYjI1emRDQklRVk5mVUVWU1JrOVNUVUZPUTBWZlRrOVhJRDBnS0hSNWNHVnZaaUJ3WlhKbWIzSnRZVzVqWlNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2NHVnlabTl5YldGdVkyVXVibTkzS1R0Y2JseHVMeXBjYmlBZ1EyOXVkbVZ5ZENCallXMWxiRU5oYzJVZ2RHOGdaR0Z6YUMxallYTmxYRzVjYmlBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lFQnlaWFIxY200Z1czTjBjbWx1WjExY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyRnRaV3hVYjBSaGMyZ2dQU0FvYzNSeWFXNW5LU0E5UGlCemRISnBibWN1Y21Wd2JHRmpaU2hEUVUxRlRGOURRVk5GWDFCQlZGUkZVazRzSUZKRlVFeEJRMFZmVkVWTlVFeEJWRVVwTG5SdlRHOTNaWEpEWVhObEtDazdYRzVjYmk4cVhHNGdJRWRsYm1WeVlYUmxJR04xY25KbGJuUWdkR2x0WlhOMFlXMXdYRzRnSUZ4dUlDQkFjbVYwZFhKdUlGdDBhVzFsYzNSaGJYQmRPaUJEZFhKeVpXNTBJRlZPU1ZnZ2RHbHRaWE4wWVcxd1hHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHTjFjbkpsYm5SVWFXMWxJRDBnU0VGVFgxQkZVa1pQVWsxQlRrTkZYMDVQVnlBL0lDZ3BJRDArSUhCbGNtWnZjbTFoYm1ObExtNXZkeWdwSURvZ0tDa2dQVDRnYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsS0NrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCelpYUkVUMDFCZEhSeWN5QTlJQ2hsYkdWdFpXNTBMQ0JoZEhSeWN5a2dQVDRnZTF4dUlDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z1lYUjBjbk1wSUh0Y2JpQWdJQ0JwWmlBb1lYUjBjbk11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ1pXeGxiV1Z1ZEM1elpYUkJkSFJ5YVdKMWRHVW9hMlY1TENCaGRIUnljMXRyWlhsZEtUdGNiaUFnSUNCOVhHNGdJSDFjYm4wN1hHNHZLbHh1SUNCVGNHeHBkQ0JqYjIxdFlTMWtaV3hwYldsMFpXUWdjM1J5YVc1blhHNWNiaUFnWENKbWIyOHNZbUZ5WENJZ0xUNGdXMXdpWm05dlhDSXNJRndpWW1GeVhDSmRYRzVjYmlBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lFQnlaWFIxY200Z1cyRnljbUY1WFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemNHeHBkRU52YlcxaFJHVnNhVzFwZEdWa0lEMGdLSFpoYkhWbEtTQTlQaUJwYzFOMGNtbHVaeWgyWVd4MVpTa2dQeUIyWVd4MVpTNXpjR3hwZENndkxGeGNjeW92S1NBNklGdDJZV3gxWlYwN1hHNWNiaThxS2x4dUlDb2dJRkpsZEhWeWJuTWdZU0JtZFc1amRHbHZiaUIwYUdGMElIZHBiR3dnWTJobFkyc2dZVzU1SUdGeVozVnRaVzUwSUdadmNpQmdkR1Z5YldCY2JpQXFJR0JqYjI1MFlXbHVjeWduYm1WbFpHeGxKeWtvSjJoaGVYTjBZV05ySnlsZ1hHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpiMjUwWVdsdWN5QTlJQ2gwWlhKdEtTQTlQaUFvZGlrZ1BUNGdlMXh1SUNCeVpYUjFjbTRnS0dselUzUnlhVzVuS0hSbGNtMHBJQ1ltSUhZdWFXNWtaWGhQWmloMFpYSnRLU0FoUFQwZ0xURXBPMXh1ZlR0Y2JseHVMeW9xWEc0Z0tpQWdVbVYwZFhKdWN5QmhJR1oxYm1OMGFXOXVJSFJvWVhRZ2QybHNiQ0JqYUdWamF5QjBieUJ6WldVZ2FXWWdZVzRnWVhKbmRXMWxiblFnYVhOY2JpQXFJQ0IwYUdVZ1ptbHljM1FnWTJoaGNtRmpkR1Z5Y3lCcGJpQjBhR1VnY0hKdmRtbGtaV1FnWUhSbGNtMWdYRzRnS2lCZ2FYTkdhWEp6ZEVOb1lYSnpLQ2R1WldWa2JHVW5LU2duYUdGNWMzUmhZMnNuS1dCY2JpQXFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpSbWx5YzNSRGFHRnljeUE5SUNoMFpYSnRLU0E5UGlBb2Rpa2dQVDRnZTF4dUlDQnlaWFIxY200Z0tHbHpVM1J5YVc1bktIUmxjbTBwSUNZbUlIWXVhVzVrWlhoUFppaDBaWEp0S1NBOVBUMGdNQ2s3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpTQmhJSFZ1YVhRZ2RtRnNkV1VnZEhsd1pWeHVJQ292WEc1bGVIQnZjblFnWTI5dWMzUWdZM0psWVhSbFZXNXBkRlI1Y0dVZ1BTQW9kSGx3WlN3Z2RISmhibk5tYjNKdEtTQTlQaUI3WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnZEdWemREb2dZMjl1ZEdGcGJuTW9kSGx3WlNrc1hHNGdJQ0FnY0dGeWMyVTZJSEJoY25ObFJteHZZWFFzWEc0Z0lDQWdkSEpoYm5ObWIzSnRYRzRnSUgwN1hHNTlPMXh1WEc0dktseHVJQ0JIWlhRZ2RtRnNkV1VnWm5KdmJTQm1kVzVqZEdsdmJpQnpkSEpwYm1kY2JpQWdYQ0owY21GdWMyeGhkR1ZZS0RJd2NIZ3BYQ0lnTFQ0Z1hDSXlNSEI0WENKY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBWbUZzZFdWR2NtOXRSblZ1WTNScGIyNVRkSEpwYm1jZ1BTQW9kbUZzZFdVcElEMCtJSFpoYkhWbExuTjFZbk4wY21sdVp5aDJZV3gxWlM1cGJtUmxlRTltS0Njb0p5a2dLeUF4TENCMllXeDFaUzVzWVhOMFNXNWtaWGhQWmlnbktTY3BLVHRjYmx4dUx5b3FYRzRnS2lCRGNtVmhkR1Z6SUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ0IzYVd4c0lITndiR2wwSUdOdmJHOXlYRzRnS2lCMllXeDFaWE1nWm5KdmJTQnpkSEpwYm1jZ2FXNTBieUJoYmlCdlltcGxZM1FnYjJZZ2NISnZjR1Z5ZEdsbGMxeHVJQ29nWUcxaGNFRnljbUY1Vkc5UFltcGxZM1FvV3lkeVpXUW5MQ0FuWjNKbFpXNG5MQ0FuWW14MVpTZGRLU2duY21kaVlTZ3dMREFzTUNrbktXQmNiaUFxTDF4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUhOd2JHbDBRMjlzYjNKV1lXeDFaWE1vZEdWeWJYTXBJSHRjYmlBZ1kyOXVjM1FnYm5WdFZHVnliWE1nUFNCMFpYSnRjeTVzWlc1bmRHZzdYRzVjYmlBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUNoMktTQjdYRzRnSUNBZ1kyOXVjM1FnZG1Gc2RXVnpJRDBnZTMwN1hHNGdJQ0FnWTI5dWMzUWdkbUZzZFdWelFYSnlZWGtnUFNCemNHeHBkRU52YlcxaFJHVnNhVzFwZEdWa0tHZGxkRlpoYkhWbFJuSnZiVVoxYm1OMGFXOXVVM1J5YVc1bktIWXBLVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYm5WdFZHVnliWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdkbUZzZFdWelczUmxjbTF6VzJsZFhTQTlJQ2gyWVd4MVpYTkJjbkpoZVZ0cFhTQWhQVDBnZFc1a1pXWnBibVZrS1NBL0lIQmhjbk5sUm14dllYUW9kbUZzZFdWelFYSnlZWGxiYVYwcElEb2dNVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RtRnNkV1Z6TzF4dUlDQjlPMXh1ZlZ4dVhHNHZLbHh1SUNCSmN5QjFkR2xzY3lCMllYSWdZVzRnWVhKeVlYa2dQeUJjYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFYwYVd4ekxuWmhjbFI1Y0dVZ1BUMDlJQ2RCY25KaGVTZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5CY25KaGVTQTlJQ2hoY25JcElEMCtJSFpoY2xSNWNHVW9ZWEp5S1NBOVBUMGdKMEZ5Y21GNUp6dGNibHh1THlwY2JpQWdTWE1nZFhScGJITWdkbUZ5SUdFZ1puVnVZM1JwYjI0Z1B5QmNiaUFnWEc0Z0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIVjBhV3h6TG5aaGNsUjVjR1VnUFQwOUlDZEdkVzVqZEdsdmJpZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5HZFc1aklEMGdLRzlpYWlrZ1BUNGdkbUZ5Vkhsd1pTaHZZbW9wSUQwOVBTQW5SblZ1WTNScGIyNG5PMXh1WEc0dktseHVJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lTQnVkVzFpWlhJL1hHNGdJRnh1SUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMGVYQmxiMllnUFQwOUlDZHVkVzFpWlhJblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpUblZ0SUQwZ0tHNTFiU2tnUFQ0Z2RIbHdaVzltSUc1MWJTQTlQVDBnSjI1MWJXSmxjaWM3WEc1Y2JpOHFYRzRnSUVseklIVjBhV3h6SUhaaGNpQmhiaUJ2WW1wbFkzUS9YRzRnSUZ4dUlDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBlWEJsYjJZZ1BUMDlJQ2R2WW1wbFkzUW5YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VDJKcUlEMGdLRzlpYWlrZ1BUNGdkSGx3Wlc5bUlHOWlhaUE5UFQwZ0oyOWlhbVZqZENjN1hHNWNiaThxWEc0Z0lFbHpJSFYwYVd4eklIWmhjaUJoSUhOMGNtbHVaeUEvSUZ4dUlDQmNiaUFnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZEhsd1pXOW1JSE4wY2lBOVBUMGdKM04wY21sdVp5ZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5UZEhKcGJtY2dQU0FvYzNSeUtTQTlQaUIwZVhCbGIyWWdjM1J5SUQwOVBTQW5jM1J5YVc1bkp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElHbHpTR1Y0SUQwZ2FYTkdhWEp6ZEVOb1lYSnpLQ2NqSnlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOU1oySWdQU0JwYzBacGNuTjBRMmhoY25Nb0ozSm5ZaWNwTzF4dVpYaHdiM0owSUdOdmJuTjBJR2x6U0hOc0lEMGdhWE5HYVhKemRFTm9ZWEp6S0Nkb2Myd25LVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnBjME52Ykc5eUlEMGdLSFlwSUQwK0lDaHBjMGhsZUNoMktTQjhmQ0JwYzFKbllpaDJLU0I4ZkNCcGMwaHpiQ2gyS1NrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb2xvciA9IGV4cG9ydHMuaHNsYSA9IGV4cG9ydHMucmdiYSA9IGV4cG9ydHMuaGV4ID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgaGV4ID0gZXhwb3J0cy5oZXggPSBmdW5jdGlvbiAodikge1xuICB2YXIgciA9IHZvaWQgMCxcbiAgICAgIGcgPSB2b2lkIDAsXG4gICAgICBiID0gdm9pZCAwO1xuXG4gIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gIGlmICh2Lmxlbmd0aCA+IDQpIHtcbiAgICByID0gdi5zdWJzdHIoMSwgMik7XG4gICAgZyA9IHYuc3Vic3RyKDMsIDIpO1xuICAgIGIgPSB2LnN1YnN0cig1LCAyKTtcblxuICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gIH0gZWxzZSB7XG4gICAgciA9IHYuc3Vic3RyKDEsIDEpO1xuICAgIGcgPSB2LnN1YnN0cigyLCAxKTtcbiAgICBiID0gdi5zdWJzdHIoMywgMSk7XG4gICAgciArPSByO1xuICAgIGcgKz0gZztcbiAgICBiICs9IGI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgIGdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgYmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgIGFscGhhOiAxXG4gIH07XG59O1xuXG52YXIgcmdiYSA9IGV4cG9ydHMucmdiYSA9ICgwLCBfdXRpbHMuc3BsaXRDb2xvclZhbHVlcykoWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZScsICdhbHBoYSddKTtcblxudmFyIGhzbGEgPSBleHBvcnRzLmhzbGEgPSAoMCwgX3V0aWxzLnNwbGl0Q29sb3JWYWx1ZXMpKFsnaHVlJywgJ3NhdHVyYXRpb24nLCAnbGlnaHRuZXNzJywgJ2FscGhhJ10pO1xuXG52YXIgY29sb3IgPSBleHBvcnRzLmNvbG9yID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCgwLCBfdXRpbHMuaXNSZ2IpKHYpKSB7XG4gICAgcmV0dXJuIHJnYmEodik7XG4gIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc0hleCkodikpIHtcbiAgICByZXR1cm4gaGV4KHYpO1xuICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNIc2wpKHYpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cblxuICByZXR1cm4gdjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZjR0Z5YzJWeWN5NXFjeUpkTENKdVlXMWxjeUk2V3lKb1pYZ2lMQ0oySWl3aWNpSXNJbWNpTENKaUlpd2liR1Z1WjNSb0lpd2ljM1ZpYzNSeUlpd2ljbVZrSWl3aWNHRnljMlZKYm5RaUxDSm5jbVZsYmlJc0ltSnNkV1VpTENKaGJIQm9ZU0lzSW5KblltRWlMQ0pvYzJ4aElpd2lZMjlzYjNJaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN08wRkJRVUU3TzBGQlJVOHNTVUZCVFVFc2IwSkJRVTBzVlVGQlEwTXNRMEZCUkN4RlFVRlBPMEZCUTNoQ0xFMUJRVWxETEZWQlFVbzdRVUZCUVN4TlFVRlBReXhWUVVGUU8wRkJRVUVzVFVGQlZVTXNWVUZCVmpzN1FVRkZRVHRCUVVOQkxFMUJRVWxJTEVWQlFVVkpMRTFCUVVZc1IwRkJWeXhEUVVGbUxFVkJRV3RDTzBGQlEyaENTQ3hSUVVGSlJDeEZRVUZGU3l4TlFVRkdMRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVm9zUTBGQlNqdEJRVU5CU0N4UlFVRkpSaXhGUVVGRlN5eE5RVUZHTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVZvc1EwRkJTanRCUVVOQlJpeFJRVUZKU0N4RlFVRkZTeXhOUVVGR0xFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFWb3NRMEZCU2pzN1FVRkZSanRCUVVORExFZEJUa1FzVFVGTlR6dEJRVU5NU2l4UlFVRkpSQ3hGUVVGRlN5eE5RVUZHTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVZvc1EwRkJTanRCUVVOQlNDeFJRVUZKUml4RlFVRkZTeXhOUVVGR0xFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFWb3NRMEZCU2p0QlFVTkJSaXhSUVVGSlNDeEZRVUZGU3l4TlFVRkdMRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVm9zUTBGQlNqdEJRVU5CU2l4VFFVRkxRU3hEUVVGTU8wRkJRMEZETEZOQlFVdEJMRU5CUVV3N1FVRkRRVU1zVTBGQlMwRXNRMEZCVER0QlFVTkVPenRCUVVWRUxGTkJRVTg3UVVGRFRFY3NVMEZCUzBNc1UwRkJVMDRzUTBGQlZDeEZRVUZaTEVWQlFWb3NRMEZFUVR0QlFVVk1UeXhYUVVGUFJDeFRRVUZUVEN4RFFVRlVMRVZCUVZrc1JVRkJXaXhEUVVaR08wRkJSMHhQTEZWQlFVMUdMRk5CUVZOS0xFTkJRVlFzUlVGQldTeEZRVUZhTEVOQlNFUTdRVUZKVEU4c1YwRkJUenRCUVVwR0xFZEJRVkE3UVVGTlJDeERRWHBDVFRzN1FVRXlRa0VzU1VGQlRVTXNjMEpCUVU4c05rSkJRV2xDTEVOQlFVTXNTMEZCUkN4RlFVRlJMRTlCUVZJc1JVRkJhVUlzVFVGQmFrSXNSVUZCZVVJc1QwRkJla0lzUTBGQmFrSXNRMEZCWWpzN1FVRkZRU3hKUVVGTlF5eHpRa0ZCVHl3MlFrRkJhVUlzUTBGQlF5eExRVUZFTEVWQlFWRXNXVUZCVWl4RlFVRnpRaXhYUVVGMFFpeEZRVUZ0UXl4UFFVRnVReXhEUVVGcVFpeERRVUZpT3p0QlFVVkJMRWxCUVUxRExIZENRVUZSTEZWQlFVTmlMRU5CUVVRc1JVRkJUenRCUVVNeFFpeE5RVUZKTEd0Q1FVRk5RU3hEUVVGT0xFTkJRVW9zUlVGQll6dEJRVU5hTEZkQlFVOVhMRXRCUVV0WUxFTkJRVXdzUTBGQlVEdEJRVU5FTEVkQlJrUXNUVUZGVHl4SlFVRkpMR3RDUVVGTlFTeERRVUZPTEVOQlFVb3NSVUZCWXp0QlFVTnVRaXhYUVVGUFJDeEpRVUZKUXl4RFFVRktMRU5CUVZBN1FVRkRSQ3hIUVVaTkxFMUJSVUVzU1VGQlNTeHJRa0ZCVFVFc1EwRkJUaXhEUVVGS0xFVkJRV003UVVGRGJrSXNWMEZCVDFrc1MwRkJTMW9zUTBGQlRDeERRVUZRTzBGQlEwUTdPMEZCUlVRc1UwRkJUMEVzUTBGQlVEdEJRVU5FTEVOQlZrMGlMQ0ptYVd4bElqb2ljR0Z5YzJWeWN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRnljeTVvWVd4c0wxQnliMnBsWTNSekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJSE53YkdsMFEyOXNiM0pXWVd4MVpYTXNJR2x6VW1kaUxDQnBjMGhsZUN3Z2FYTkljMndnZlNCbWNtOXRJQ2N1TDNWMGFXeHpKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR2hsZUNBOUlDaDJLU0E5UGlCN1hHNGdJR3hsZENCeUxDQm5MQ0JpTzF4dVhHNGdJQzh2SUVsbUlIZGxJR2hoZG1VZ05pQmphR0Z5WVdOMFpYSnpMQ0JwWlNBalJrWXdNREF3WEc0Z0lHbG1JQ2gyTG14bGJtZDBhQ0ErSURRcElIdGNiaUFnSUNCeUlEMGdkaTV6ZFdKemRISW9NU3dnTWlrN1hHNGdJQ0FnWnlBOUlIWXVjM1ZpYzNSeUtETXNJRElwTzF4dUlDQWdJR0lnUFNCMkxuTjFZbk4wY2lnMUxDQXlLVHRjYmx4dUlDQXZMeUJQY2lCM1pTQm9ZWFpsSURNZ1kyaGhjbUZqZEdWeWN5d2dhV1VnSTBZd01GeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lISWdQU0IyTG5OMVluTjBjaWd4TENBeEtUdGNiaUFnSUNCbklEMGdkaTV6ZFdKemRISW9NaXdnTVNrN1hHNGdJQ0FnWWlBOUlIWXVjM1ZpYzNSeUtETXNJREVwTzF4dUlDQWdJSElnS3owZ2NqdGNiaUFnSUNCbklDczlJR2M3WEc0Z0lDQWdZaUFyUFNCaU8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNCeVpXUTZJSEJoY25ObFNXNTBLSElzSURFMktTeGNiaUFnSUNCbmNtVmxiam9nY0dGeWMyVkpiblFvWnl3Z01UWXBMRnh1SUNBZ0lHSnNkV1U2SUhCaGNuTmxTVzUwS0dJc0lERTJLU3hjYmlBZ0lDQmhiSEJvWVRvZ01WeHVJQ0I5TzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElISm5ZbUVnUFNCemNHeHBkRU52Ykc5eVZtRnNkV1Z6S0ZzbmNtVmtKeXdnSjJkeVpXVnVKeXdnSjJKc2RXVW5MQ0FuWVd4d2FHRW5YU2s3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JvYzJ4aElEMGdjM0JzYVhSRGIyeHZjbFpoYkhWbGN5aGJKMmgxWlNjc0lDZHpZWFIxY21GMGFXOXVKeXdnSjJ4cFoyaDBibVZ6Y3ljc0lDZGhiSEJvWVNkZEtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnZiRzl5SUQwZ0tIWXBJRDArSUh0Y2JpQWdhV1lnS0dselVtZGlLSFlwS1NCN1hHNGdJQ0FnY21WMGRYSnVJSEpuWW1Fb2RpazdYRzRnSUgwZ1pXeHpaU0JwWmlBb2FYTklaWGdvZGlrcElIdGNiaUFnSUNCeVpYUjFjbTRnYUdWNEtIWXBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tHbHpTSE5zS0hZcEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdoemJHRW9kaWs3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnZGp0Y2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3BhcnNlcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cbnZhciBoYXNSQUYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gdHJ1ZSA6IGZhbHNlO1xuXG52YXIgb25OZXh0RnJhbWUgPSB2b2lkIDA7XG5cbmlmIChoYXNSQUYpIHtcbiAgb25OZXh0RnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gIH07XG59IGVsc2Uge1xuICAvKlxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgIFxuICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcbiAgICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgIFxuICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgIFxuICAgIE1JVCBsaWNlbnNlXG4gICovXG4gIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgb25OZXh0RnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2LjcgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhsYXN0VGltZSk7XG4gICAgfSwgdGltZVRvQ2FsbCk7XG4gIH07XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9uTmV4dEZyYW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZiMjR0Ym1WNGRDMW1jbUZ0WlM1cWN5SmRMQ0p1WVcxbGN5STZXeUpvWVhOU1FVWWlMQ0ozYVc1a2IzY2lMQ0p5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVaUxDSnZiazVsZUhSR2NtRnRaU0lzSW1OaGJHeGlZV05ySWl3aWJHRnpkRlJwYldVaUxDSmpkWEp5Wlc1MFZHbHRaU0lzSWtSaGRHVWlMQ0puWlhSVWFXMWxJaXdpZEdsdFpWUnZRMkZzYkNJc0lrMWhkR2dpTENKdFlYZ2lMQ0p6WlhSVWFXMWxiM1YwSWwwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFUczdPMEZCUjBFc1NVRkJUVUVzVTBGQlZTeFBRVUZQUXl4TlFVRlFMRXRCUVd0Q0xGZEJRV3hDTEVsQlFXbERRU3hQUVVGUFF5eHhRa0ZCZWtNc1IwRkJhMFVzU1VGQmJFVXNSMEZCZVVVc1MwRkJlRVk3TzBGQlJVRXNTVUZCU1VNc2IwSkJRVW83TzBGQlJVRXNTVUZCU1Vnc1RVRkJTaXhGUVVGWk8wRkJRMVpITEdkQ1FVRmpMRlZCUVVORExGRkJRVVE3UVVGQlFTeFhRVUZqU0N4UFFVRlBReXh4UWtGQlVDeERRVUUyUWtVc1VVRkJOMElzUTBGQlpEdEJRVUZCTEVkQlFXUTdRVUZGUkN4RFFVaEVMRTFCUjA4N1FVRkRURHM3T3pzN096czdPenM3T3p0QlFXTkJMRTFCUVVsRExGZEJRVmNzUTBGQlpqczdRVUZGUVVZc1owSkJRV01zVlVGQlEwTXNVVUZCUkN4RlFVRmpPMEZCUXpGQ0xGRkJRVTFGTEdOQlFXTXNTVUZCU1VNc1NVRkJTaXhIUVVGWFF5eFBRVUZZTEVWQlFYQkNPMEZCUTBFc1VVRkJUVU1zWVVGQllVTXNTMEZCUzBNc1IwRkJUQ3hEUVVGVExFTkJRVlFzUlVGQldTeFJRVUZSVEN4alFVRmpSQ3hSUVVGMFFpeERRVUZhTEVOQlFXNUNPenRCUVVWQlFTeGxRVUZYUXl4alFVRmpSeXhWUVVGNlFqczdRVUZGUVVjc1pVRkJWenRCUVVGQkxHRkJRVTFTTEZOQlFWTkRMRkZCUVZRc1EwRkJUanRCUVVGQkxFdEJRVmdzUlVGQmNVTkpMRlZCUVhKRE8wRkJRMFFzUjBGUVJEdEJRVkZFT3p0clFrRkZZMDRzVnlJc0ltWnBiR1VpT2lKdmJpMXVaWGgwTFdaeVlXMWxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWEp6TG1oaGJHd3ZVSEp2YW1WamRITXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQWdSR1YwWldOMElHRnVaQ0JzYjJGa0lHRnVJR0Z3Y0hKdmNISnBZWFJsSUdOc2IyTnJJSE5sZEhScGJtY2dabTl5SUhSb1pTQmxiblpwY205dWJXVnVkRnh1S2k5Y2JtTnZibk4wSUdoaGMxSkJSaUE5SUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUIzYVc1a2IzY3VjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsS1NBL0lIUnlkV1VnT2lCbVlXeHpaVHRjYmx4dWJHVjBJRzl1VG1WNGRFWnlZVzFsTzF4dVhHNXBaaUFvYUdGelVrRkdLU0I3WEc0Z0lHOXVUbVY0ZEVaeVlXMWxJRDBnS0dOaGJHeGlZV05yS1NBOVBpQjNhVzVrYjNjdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLR05oYkd4aVlXTnJLVHRjYmx4dWZTQmxiSE5sSUh0Y2JpQWdMeXBjYmlBZ0lDQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VnY0c5c2VXWnBiR3hjYmlBZ0lDQmNiaUFnSUNCR2IzSWdTVVU0THprZ1JteHBibk4wYjI1bGN5QmhibVFnYm05dUxXSnliM2R6WlhJZ1pXNTJhWEp2Ym0xbGJuUnpYRzVjYmlBZ0lDQlVZV3RsYmlCbWNtOXRJRkJoZFd3Z1NYSnBjMmd1SUZkbEozWmxJSE4wY21sd2NHVmtJRzkxZENCallXNWpaV3hCYm1sdFlYUnBiMjVHY21GdFpTQmphR1ZqYTNNZ1ltVmpZWFZ6WlNCM1pTQmtiMjRuZENCbWIzZ2dkMmwwYUNCMGFHRjBYRzRnSUNBZ1hHNGdJQ0FnYUhSMGNEb3ZMM0JoZFd4cGNtbHphQzVqYjIwdk1qQXhNUzl5WlhGMVpYTjBZVzVwYldGMGFXOXVabkpoYldVdFptOXlMWE50WVhKMExXRnVhVzFoZEdsdVp5OWNiaUFnSUNCb2RIUndPaTh2YlhrdWIzQmxjbUV1WTI5dEwyVnRiMnhzWlhJdllteHZaeTh5TURFeEx6RXlMekl3TDNKbGNYVmxjM1JoYm1sdFlYUnBiMjVtY21GdFpTMW1iM0l0YzIxaGNuUXRaWEl0WVc1cGJXRjBhVzVuWEc0Z0lDQWdJRnh1SUNBZ0lISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0J3YjJ4NVptbHNiQ0JpZVNCRmNtbHJJRTNEdG14c1pYSXVJR1pwZUdWeklHWnliMjBnVUdGMWJDQkpjbWx6YUNCaGJtUWdWR2x1YnlCYWFXcGtaV3hjYmlBZ0lDQWdYRzRnSUNBZ1RVbFVJR3hwWTJWdWMyVmNiaUFnS2k5Y2JpQWdiR1YwSUd4aGMzUlVhVzFsSUQwZ01EdGNibHh1SUNCdmJrNWxlSFJHY21GdFpTQTlJQ2hqWVd4c1ltRmpheWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR04xY25KbGJuUlVhVzFsSUQwZ2JtVjNJRVJoZEdVb0tTNW5aWFJVYVcxbEtDazdYRzRnSUNBZ1kyOXVjM1FnZEdsdFpWUnZRMkZzYkNBOUlFMWhkR2d1YldGNEtEQXNJREUyTGpjZ0xTQW9ZM1Z5Y21WdWRGUnBiV1VnTFNCc1lYTjBWR2x0WlNrcE8xeHVYRzRnSUNBZ2JHRnpkRlJwYldVZ1BTQmpkWEp5Wlc1MFZHbHRaU0FySUhScGJXVlViME5oYkd3N1hHNWNiaUFnSUNCelpYUlVhVzFsYjNWMEtDZ3BJRDArSUdOaGJHeGlZV05yS0d4aGMzUlVhVzFsS1N3Z2RHbHRaVlJ2UTJGc2JDazdYRzRnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRzl1VG1WNGRFWnlZVzFsT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9vbi1uZXh0LWZyYW1lLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUmVuZGVyU3RlcDtcbmZ1bmN0aW9uIGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKSB7XG4gIC8qKlxuICAgKiBXZSB1c2UgdHdvIGFycmF5cywgb25lIGZvciB0aGlzIGZyYW1lIGFuZCBvbmUgdG8gcXVldWUgZm9yIHRoZVxuICAgKiBuZXh0IGZyYW1lLCByZXVzaW5nIGVhY2ggdG8gYXZvaWQgR0MuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gIHZhciBmdW5jdGlvbnNUb1J1biA9IFtdO1xuICB2YXIgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUgPSBbXTtcblxuICByZXR1cm4ge1xuICAgIHNjaGVkdWxlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHN0YXJ0UmVuZGVyTG9vcCgpO1xuICAgICAgLy8gSWYgdGhpcyBjYWxsYmFjayBpc24ndCBhbHJlYWR5IHNjaGVkdWxlZCB0byBydW4gbmV4dCBmcmFtZVxuICAgICAgaWYgKGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spID09PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2FuY2VsOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciBpbmRleE9mQ2FsbGJhY2sgPSBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgIGlmIChpbmRleE9mQ2FsbGJhY2sgIT09IC0xKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLnNwbGljZShpbmRleE9mQ2FsbGJhY2ssIDEpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBwcm9jZXNzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIC8vIENsZWFyIG5leHQgZnJhbWUgbGlzdFxuICAgICAgdmFyIF9yZWYgPSBbZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUsIGZ1bmN0aW9uc1RvUnVuXTtcbiAgICAgIC8vIFN3YXAgdGhpcyBmcmFtZSBhbmQgbmV4dCBmcmFtZSBhcnJheXMgdG8gYXZvaWQgR0NcblxuICAgICAgZnVuY3Rpb25zVG9SdW4gPSBfcmVmWzBdO1xuICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUgPSBfcmVmWzFdO1xuICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUubGVuZ3RoID0gMDtcblxuICAgICAgLy8gRXhlY3V0ZSBhbGwgb2YgdGhpcyBmcmFtZSdzIGZ1bmN0aW9uc1xuICAgICAgdmFyIG51bVRoaXNGcmFtZSA9IGZ1bmN0aW9uc1RvUnVuLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGhpc0ZyYW1lOyBpKyspIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5baV0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bWNtRnRaWE41Ym1NdlkzSmxZWFJsTFhKbGJtUmxjaTF6ZEdWd0xtcHpJbDBzSW01aGJXVnpJanBiSW1OeVpXRjBaVkpsYm1SbGNsTjBaWEFpTENKemRHRnlkRkpsYm1SbGNreHZiM0FpTENKbWRXNWpkR2x2Ym5OVWIxSjFiaUlzSW1aMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxJaXdpYzJOb1pXUjFiR1VpTENKallXeHNZbUZqYXlJc0ltbHVaR1Y0VDJZaUxDSndkWE5vSWl3aVkyRnVZMlZzSWl3aWFXNWtaWGhQWmtOaGJHeGlZV05ySWl3aWMzQnNhV05sSWl3aWNISnZZMlZ6Y3lJc0lteGxibWQwYUNJc0ltNTFiVlJvYVhOR2NtRnRaU0lzSW1raVhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRkJkMEpCTEdkQ08wRkJRVlFzVTBGQlUwRXNaMEpCUVZRc1EwRkJNRUpETEdWQlFURkNMRVZCUVRKRE8wRkJRM2hFT3pzN096dEJRVXRCTEUxQlFVbERMR2xDUVVGcFFpeEZRVUZ5UWp0QlFVTkJMRTFCUVVsRExEQkNRVUV3UWl4RlFVRTVRanM3UVVGRlFTeFRRVUZQTzBGQlEweERMR05CUVZVc1ZVRkJRME1zVVVGQlJDeEZRVUZqTzBGQlEzUkNTanRCUVVOQk8wRkJRMEVzVlVGQlNVVXNkMEpCUVhkQ1J5eFBRVUY0UWl4RFFVRm5RMFFzVVVGQmFFTXNUVUZCT0VNc1EwRkJReXhEUVVGdVJDeEZRVUZ6UkR0QlFVTndSRVlzWjBOQlFYZENTU3hKUVVGNFFpeERRVUUyUWtZc1VVRkJOMEk3UVVGRFJEdEJRVU5HTEV0QlVFazdPMEZCVTB4SExGbEJRVkVzVlVGQlEwZ3NVVUZCUkN4RlFVRmpPMEZCUTNCQ0xGVkJRVTFKTEd0Q1FVRnJRazRzZDBKQlFYZENSeXhQUVVGNFFpeERRVUZuUTBRc1VVRkJhRU1zUTBGQmVFSTdRVUZEUVN4VlFVRkpTU3h2UWtGQmIwSXNRMEZCUXl4RFFVRjZRaXhGUVVFMFFqdEJRVU14UWs0c1owTkJRWGRDVHl4TlFVRjRRaXhEUVVFclFrUXNaVUZCTDBJc1JVRkJaMFFzUTBGQmFFUTdRVUZEUkR0QlFVTkdMRXRCWkVrN08wRkJaMEpNUlN4aFFVRlRMRmxCUVUwN08wRkJTV0k3UVVGS1lTeHBRa0ZGSzBJc1EwRkJRMUlzZFVKQlFVUXNSVUZCTUVKRUxHTkJRVEZDTEVOQlJpOUNPMEZCUTJJN08wRkJRME5CTEc5Q1FVWlpPMEZCUlVsRExEWkNRVVpLTzBGQlMySkJMRGhDUVVGM1FsTXNUVUZCZUVJc1IwRkJhVU1zUTBGQmFrTTdPMEZCUlVFN1FVRkRRU3hWUVVGTlF5eGxRVUZsV0N4bFFVRmxWU3hOUVVGd1F6dEJRVU5CTEZkQlFVc3NTVUZCU1VVc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpSQ3haUVVGd1FpeEZRVUZyUTBNc1IwRkJiRU1zUlVGQmRVTTdRVUZEY2tOYUxIVkNRVUZsV1N4RFFVRm1PMEZCUTBRN1FVRkRSanRCUVRWQ1NTeEhRVUZRTzBGQk9FSkVJaXdpWm1sc1pTSTZJbU55WldGMFpTMXlaVzVrWlhJdGMzUmxjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0Z5Y3k1b1lXeHNMMUJ5YjJwbFkzUnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJR055WldGMFpWSmxibVJsY2xOMFpYQW9jM1JoY25SU1pXNWtaWEpNYjI5d0tTQjdYRzRnSUM4cUtseHVJQ0FnS2lCWFpTQjFjMlVnZEhkdklHRnljbUY1Y3l3Z2IyNWxJR1p2Y2lCMGFHbHpJR1p5WVcxbElHRnVaQ0J2Ym1VZ2RHOGdjWFZsZFdVZ1ptOXlJSFJvWlZ4dUlDQWdLaUJ1WlhoMElHWnlZVzFsTENCeVpYVnphVzVuSUdWaFkyZ2dkRzhnWVhadmFXUWdSME11WEc0Z0lDQXFJRUIwZVhCbElIdEJjbkpoZVgxY2JpQWdJQ292WEc0Z0lHeGxkQ0JtZFc1amRHbHZibk5VYjFKMWJpQTlJRnRkTzF4dUlDQnNaWFFnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVWdQU0JiWFR0Y2JseHVJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lITmphR1ZrZFd4bE9pQW9ZMkZzYkdKaFkyc3BJRDArSUh0Y2JpQWdJQ0FnSUhOMFlYSjBVbVZ1WkdWeVRHOXZjQ2dwTzF4dUlDQWdJQ0FnTHk4Z1NXWWdkR2hwY3lCallXeHNZbUZqYXlCcGMyNG5kQ0JoYkhKbFlXUjVJSE5qYUdWa2RXeGxaQ0IwYnlCeWRXNGdibVY0ZENCbWNtRnRaVnh1SUNBZ0lDQWdhV1lnS0daMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxMbWx1WkdWNFQyWW9ZMkZzYkdKaFkyc3BJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZibk5VYjFKMWJrNWxlSFJHY21GdFpTNXdkWE5vS0dOaGJHeGlZV05yS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnWTJGdVkyVnNPaUFvWTJGc2JHSmhZMnNwSUQwK0lIdGNiaUFnSUNBZ0lHTnZibk4wSUdsdVpHVjRUMlpEWVd4c1ltRmpheUE5SUdaMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxMbWx1WkdWNFQyWW9ZMkZzYkdKaFkyc3BPMXh1SUNBZ0lDQWdhV1lnS0dsdVpHVjRUMlpEWVd4c1ltRmpheUFoUFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVXVjM0JzYVdObEtHbHVaR1Y0VDJaRFlXeHNZbUZqYXl3Z01TazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lIQnliMk5sYzNNNklDZ3BJRDArSUh0Y2JpQWdJQ0FnSUM4dklGTjNZWEFnZEdocGN5Qm1jbUZ0WlNCaGJtUWdibVY0ZENCbWNtRnRaU0JoY25KaGVYTWdkRzhnWVhadmFXUWdSME5jYmlBZ0lDQWdJRnRtZFc1amRHbHZibk5VYjFKMWJpd2dablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldWZElEMGdXMloxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbExDQm1kVzVqZEdsdmJuTlViMUoxYmwwN1hHNWNiaUFnSUNBZ0lDOHZJRU5zWldGeUlHNWxlSFFnWm5KaGJXVWdiR2x6ZEZ4dUlDQWdJQ0FnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVXViR1Z1WjNSb0lEMGdNRHRjYmx4dUlDQWdJQ0FnTHk4Z1JYaGxZM1YwWlNCaGJHd2diMllnZEdocGN5Qm1jbUZ0WlNkeklHWjFibU4wYVc5dWMxeHVJQ0FnSUNBZ1kyOXVjM1FnYm5WdFZHaHBjMFp5WVcxbElEMGdablZ1WTNScGIyNXpWRzlTZFc0dWJHVnVaM1JvTzF4dUlDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMVVhR2x6Um5KaGJXVTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQm1kVzVqZEdsdmJuTlViMUoxYmx0cFhTZ3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlR0Y2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkU3R5bGVQcm9wZXJ0eVN0cmluZztcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVzKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xudmFyIHRyYW5zbGF0ZU1hcCA9IHtcbiAgeDogVFJBTlNMQVRFICsgJ1gnLFxuICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gIHo6IFRSQU5TTEFURSArICdaJ1xufTtcblxuZnVuY3Rpb24gYnVpbGRTdHlsZVByb3BlcnR5U3RyaW5nKGVsZW1lbnQsIHN0YXRlLCBjaGFuZ2VkVmFsdWVzLCBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICB2YXIgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICB2YXIgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIHZhciB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgLy8gRmlyc3QgY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBjaGFuZ2VkIHRyYW5zZm9ybSB2YWx1ZXNcbiAgLy8gYW5kIGlmIHRydWUgYWRkIGFsbCB0cmFuc2Zvcm0gdmFsdWVzXG4gIHZhciBudW1DaGFuZ2VkVmFsdWVzID0gY2hhbmdlZFZhbHVlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ2hhbmdlZFZhbHVlczsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGNoYW5nZWRWYWx1ZXNbaV07XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdHJhbnNmb3JtIHByb3BlcnR5LCBhZGQgYWxsIG90aGVyIHRyYW5zZm9ybSBwcm9wc1xuICAgIC8vIHRvIGNoYW5nZWRWYWx1ZXMgYW5kIHRoZW4gYnJlYWtcbiAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG5cbiAgICAgIGZvciAodmFyIF9rZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtfa2V5XSAmJiBjaGFuZ2VkVmFsdWVzLmluZGV4T2YoX2tleSkgPT09IC0xKSB7XG4gICAgICAgICAgY2hhbmdlZFZhbHVlcy5wdXNoKF9rZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0b3RhbE51bUNoYW5nZWRWYWx1ZXMgPSBjaGFuZ2VkVmFsdWVzLmxlbmd0aDtcbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRvdGFsTnVtQ2hhbmdlZFZhbHVlczsgX2krKykge1xuICAgIHZhciBfa2V5MiA9IGNoYW5nZWRWYWx1ZXNbX2ldO1xuICAgIHZhciB2YWx1ZSA9IHN0YXRlW19rZXkyXTtcblxuICAgIGlmICh0cmFuc2xhdGVNYXBbX2tleTJdKSB7XG4gICAgICBfa2V5MiA9IHRyYW5zbGF0ZU1hcFtfa2V5Ml07XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIG51bWJlciBvciBvYmplY3QgYW5kIHdlIGhhdmUgZmlsdGVyLCBhcHBseSBmaWx0ZXJcbiAgICBpZiAoX3ZhbHVlVHlwZXMyLmRlZmF1bHRbX2tleTJdICYmICgoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZSkgfHwgKDAsIF91dGlscy5pc09iaikodmFsdWUpKSAmJiBfdmFsdWVUeXBlczIuZGVmYXVsdFtfa2V5Ml0udHJhbnNmb3JtKSB7XG4gICAgICB2YWx1ZSA9IF92YWx1ZVR5cGVzMi5kZWZhdWx0W19rZXkyXS50cmFuc2Zvcm0odmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRbX2tleTJdKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gX2tleTIgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgICB0cmFuc2Zvcm1IYXNaID0gX2tleTIgPT09IHRyYW5zbGF0ZU1hcC56ID8gdHJ1ZSA6IHRyYW5zZm9ybUhhc1o7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKF9rZXkyLCB0cnVlKSArICc6JyArIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHdlIGhhdmUgdHJhbnNmb3JtIHByb3BzLCBidWlsZCBhIHRyYW5zZm9ybSBzdHJpbmdcbiAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgIGlmICghdHJhbnNmb3JtSGFzWiAmJiBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IHRyYW5zbGF0ZU1hcC56ICsgJygwKSc7XG4gICAgfVxuXG4gICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoJ3RyYW5zZm9ybScsIHRydWUpICsgJzonICsgdHJhbnNmb3JtU3RyaW5nO1xuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IHByb3BlcnR5U3RyaW5nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNKbGJtUmxjaTVxY3lKZExDSnVZVzFsY3lJNld5SmlkV2xzWkZOMGVXeGxVSEp2Y0dWeWRIbFRkSEpwYm1jaUxDSlVVa0ZPVTB4QlZFVWlMQ0owY21GdWMyeGhkR1ZOWVhBaUxDSjRJaXdpZVNJc0lub2lMQ0psYkdWdFpXNTBJaXdpYzNSaGRHVWlMQ0pqYUdGdVoyVmtWbUZzZFdWeklpd2laVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNGlMQ0p3Y205d1pYSjBlVk4wY21sdVp5SXNJblJ5WVc1elptOXliVk4wY21sdVp5SXNJbWhoYzFSeVlXNXpabTl5YlNJc0luUnlZVzV6Wm05eWJVaGhjMW9pTENKdWRXMURhR0Z1WjJWa1ZtRnNkV1Z6SWl3aWJHVnVaM1JvSWl3aWFTSXNJbXRsZVNJc0ltbHVaR1Y0VDJZaUxDSndkWE5vSWl3aWRHOTBZV3hPZFcxRGFHRnVaMlZrVm1Gc2RXVnpJaXdpZG1Gc2RXVWlMQ0owY21GdWMyWnZjbTBpTENKemRIbHNaU0lzSW1OemMxUmxlSFFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGWmQwSkJMSGRDT3p0QlFWcDRRanM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVWQkxFbEJRVTFETEZsQlFWa3NWMEZCYkVJN1FVRkRRU3hKUVVGTlF5eGxRVUZsTzBGQlEyNUNReXhMUVVGSFJpeFpRVUZaTEVkQlJFazdRVUZGYmtKSExFdEJRVWRJTEZsQlFWa3NSMEZHU1R0QlFVZHVRa2tzUzBGQlIwb3NXVUZCV1R0QlFVaEpMRU5CUVhKQ096dEJRVTFsTEZOQlFWTkVMSGRDUVVGVUxFTkJRV3REVFN4UFFVRnNReXhGUVVFeVEwTXNTMEZCTTBNc1JVRkJhMFJETEdGQlFXeEVMRVZCUVdsRlF5d3dRa0ZCYWtVc1JVRkJOa1k3UVVGRE1VY3NUVUZCU1VNc2FVSkJRV2xDTEVWQlFYSkNPMEZCUTBFc1RVRkJTVU1zYTBKQlFXdENMRVZCUVhSQ08wRkJRMEVzVFVGQlNVTXNaVUZCWlN4TFFVRnVRanRCUVVOQkxFMUJRVWxETEdkQ1FVRm5RaXhMUVVGd1FqczdRVUZGUVR0QlFVTkJPMEZCUTBFc1RVRkJUVU1zYlVKQlFXMUNUaXhqUVVGalR5eE5RVUYyUXp0QlFVTkJMRTlCUVVzc1NVRkJTVU1zU1VGQlNTeERRVUZpTEVWQlFXZENRU3hKUVVGSlJpeG5Ra0ZCY0VJc1JVRkJjME5GTEVkQlFYUkRMRVZCUVRKRE8wRkJRM3BETEZGQlFVMURMRTFCUVUxVUxHTkJRV05STEVOQlFXUXNRMEZCV2pzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVVVGQlNTeDVRa0ZCWlVNc1IwRkJaaXhEUVVGS0xFVkJRWGxDTzBGQlEzWkNUQ3h4UWtGQlpTeEpRVUZtT3p0QlFVVkJMRmRCUVVzc1NVRkJTVXNzU1VGQlZDeEpRVUZuUWxZc1MwRkJhRUlzUlVGQmRVSTdRVUZEY2tJc1dVRkJTU3g1UWtGQlpWVXNTVUZCWml4TFFVRjFRbFFzWTBGQlkxVXNUMEZCWkN4RFFVRnpRa1FzU1VGQmRFSXNUVUZCSzBJc1EwRkJReXhEUVVFelJDeEZRVUU0UkR0QlFVTTFSRlFzZDBKQlFXTlhMRWxCUVdRc1EwRkJiVUpHTEVsQlFXNUNPMEZCUTBRN1FVRkRSanM3UVVGRlJEdEJRVU5FTzBGQlEwWTdPMEZCUlVRc1RVRkJUVWNzZDBKQlFYZENXaXhqUVVGalR5eE5RVUUxUXp0QlFVTkJMRTlCUVVzc1NVRkJTVU1zUzBGQlNTeERRVUZpTEVWQlFXZENRU3hMUVVGSlNTeHhRa0ZCY0VJc1JVRkJNa05LTEVsQlFUTkRMRVZCUVdkRU8wRkJRemxETEZGQlFVbERMRkZCUVUxVUxHTkJRV05STEVWQlFXUXNRMEZCVmp0QlFVTkJMRkZCUVVsTExGRkJRVkZrTEUxQlFVMVZMRXRCUVU0c1EwRkJXanM3UVVGRlFTeFJRVUZKWml4aFFVRmhaU3hMUVVGaUxFTkJRVW9zUlVGQmRVSTdRVUZEY2tKQkxHTkJRVTFtTEdGQlFXRmxMRXRCUVdJc1EwRkJUanRCUVVORU96dEJRVVZFTzBGQlEwRXNVVUZCU1N4eFFrRkJWMEVzUzBGQldDeE5RVUZ2UWl4clFrRkJUVWtzUzBGQlRpeExRVUZuUWl4clFrRkJUVUVzUzBGQlRpeERRVUZ3UXl4TFFVRnhSQ3h4UWtGQlYwb3NTMEZCV0N4RlFVRm5Ra3NzVTBGQmVrVXNSVUZCYjBZN1FVRkRiRVpFTEdOQlFWRXNjVUpCUVZkS0xFdEJRVmdzUlVGQlowSkxMRk5CUVdoQ0xFTkJRVEJDUkN4TFFVRXhRaXhEUVVGU08wRkJRMFE3TzBGQlJVUXNVVUZCU1N4NVFrRkJaVW9zUzBGQlppeERRVUZLTEVWQlFYbENPMEZCUTNaQ1RpeDVRa0ZCYlVKTkxGRkJRVTBzUjBGQlRpeEhRVUZaU1N4TFFVRmFMRWRCUVc5Q0xFbEJRWFpETzBGQlEwRlNMSE5DUVVGcFFra3NWVUZCVVdZc1lVRkJZVWNzUTBGQmRFSXNSMEZCTWtJc1NVRkJNMElzUjBGQmEwTlJMR0ZCUVd4RU8wRkJSVVFzUzBGS1JDeE5RVWxQTzBGQlEweElMSGRDUVVGclFpeE5RVUZOTEhkQ1FVRlRUeXhMUVVGVUxFVkJRV01zU1VGQlpDeERRVUZPTEVkQlFUUkNMRWRCUVRWQ0xFZEJRV3REU1N4TFFVRndSRHRCUVVORU8wRkJRMFk3TzBGQlJVUTdRVUZEUVN4TlFVRkpWQ3haUVVGS0xFVkJRV3RDTzBGQlEyaENMRkZCUVVrc1EwRkJRME1zWVVGQlJDeEpRVUZyUWtvc01FSkJRWFJDTEVWQlFXdEVPMEZCUTJoRVJTeDVRa0ZCYlVKVUxHRkJRV0ZITEVOQlFXSXNSMEZCYVVJc1MwRkJjRU03UVVGRFJEczdRVUZGUkVzc2MwSkJRV3RDTEUxQlFVMHNkMEpCUVZNc1YwRkJWQ3hGUVVGelFpeEpRVUYwUWl4RFFVRk9MRWRCUVc5RExFZEJRWEJETEVkQlFUQkRReXhsUVVFMVJEdEJRVU5FT3p0QlFVVkVUQ3hWUVVGUmFVSXNTMEZCVWl4RFFVRmpReXhQUVVGa0xFbEJRWGxDWkN4alFVRjZRanRCUVVORUlpd2labWxzWlNJNkluSmxibVJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGeWN5NW9ZV3hzTDFCeWIycGxZM1J6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCMGNtRnVjMlp2Y20xUWNtOXdjeUJtY205dElDY3VMM1J5WVc1elptOXliUzF3Y205d2N5YzdYRzVwYlhCdmNuUWdkbUZzZFdWVWVYQmxjeUJtY205dElDY3VMM1poYkhWbExYUjVjR1Z6Snp0Y2JtbHRjRzl5ZENCd2NtVm1hWGhsY2lCbWNtOXRJQ2N1TDNCeVpXWnBlR1Z5Snp0Y2JtbHRjRzl5ZENCN0lHbHpUblZ0TENCcGMwOWlhaUI5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJRlJTUVU1VFRFRlVSU0E5SUNkMGNtRnVjMnhoZEdVbk8xeHVZMjl1YzNRZ2RISmhibk5zWVhSbFRXRndJRDBnZTF4dUlDQjRPaUJVVWtGT1UweEJWRVVnS3lBbldDY3NYRzRnSUhrNklGUlNRVTVUVEVGVVJTQXJJQ2RaSnl4Y2JpQWdlam9nVkZKQlRsTk1RVlJGSUNzZ0oxb25YRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCaWRXbHNaRk4wZVd4bFVISnZjR1Z5ZEhsVGRISnBibWNvWld4bGJXVnVkQ3dnYzNSaGRHVXNJR05vWVc1blpXUldZV3gxWlhNc0lHVnVZV0pzWlVoaGNtUjNZWEpsUVdOalpXeGxjbUYwYVc5dUtTQjdYRzRnSUd4bGRDQndjbTl3WlhKMGVWTjBjbWx1WnlBOUlDY25PMXh1SUNCc1pYUWdkSEpoYm5ObWIzSnRVM1J5YVc1bklEMGdKeWM3WEc0Z0lHeGxkQ0JvWVhOVWNtRnVjMlp2Y20wZ1BTQm1ZV3h6WlR0Y2JpQWdiR1YwSUhSeVlXNXpabTl5YlVoaGMxb2dQU0JtWVd4elpUdGNibHh1SUNBdkx5QkdhWEp6ZENCamFHVmpheUJwWmlCMGFHVnlaU0JoY21VZ1lXNTVJR05vWVc1blpXUWdkSEpoYm5ObWIzSnRJSFpoYkhWbGMxeHVJQ0F2THlCaGJtUWdhV1lnZEhKMVpTQmhaR1FnWVd4c0lIUnlZVzV6Wm05eWJTQjJZV3gxWlhOY2JpQWdZMjl1YzNRZ2JuVnRRMmhoYm1kbFpGWmhiSFZsY3lBOUlHTm9ZVzVuWldSV1lXeDFaWE11YkdWdVozUm9PMXh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVU5vWVc1blpXUldZV3gxWlhNN0lHa3JLeWtnZTF4dUlDQWdJR052Ym5OMElHdGxlU0E5SUdOb1lXNW5aV1JXWVd4MVpYTmJhVjA3WEc1Y2JpQWdJQ0F2THlCSlppQjBhR2x6SUdseklHRWdkSEpoYm5ObWIzSnRJSEJ5YjNCbGNuUjVMQ0JoWkdRZ1lXeHNJRzkwYUdWeUlIUnlZVzV6Wm05eWJTQndjbTl3YzF4dUlDQWdJQzh2SUhSdklHTm9ZVzVuWldSV1lXeDFaWE1nWVc1a0lIUm9aVzRnWW5KbFlXdGNiaUFnSUNCcFppQW9kSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnYUdGelZISmhibk5tYjNKdElEMGdkSEoxWlR0Y2JseHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhOMFlYUmxLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMVFjbTl3YzF0clpYbGRJQ1ltSUdOb1lXNW5aV1JXWVd4MVpYTXVhVzVrWlhoUFppaHJaWGtwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHTm9ZVzVuWldSV1lXeDFaWE11Y0hWemFDaHJaWGtwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdOdmJuTjBJSFJ2ZEdGc1RuVnRRMmhoYm1kbFpGWmhiSFZsY3lBOUlHTm9ZVzVuWldSV1lXeDFaWE11YkdWdVozUm9PMXh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUnZkR0ZzVG5WdFEyaGhibWRsWkZaaGJIVmxjenNnYVNzcktTQjdYRzRnSUNBZ2JHVjBJR3RsZVNBOUlHTm9ZVzVuWldSV1lXeDFaWE5iYVYwN1hHNGdJQ0FnYkdWMElIWmhiSFZsSUQwZ2MzUmhkR1ZiYTJWNVhUdGNibHh1SUNBZ0lHbG1JQ2gwY21GdWMyeGhkR1ZOWVhCYmEyVjVYU2tnZTF4dUlDQWdJQ0FnYTJWNUlEMGdkSEpoYm5Oc1lYUmxUV0Z3VzJ0bGVWMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdTV1lnZEdocGN5QnBjeUJoSUc1MWJXSmxjaUJ2Y2lCdlltcGxZM1FnWVc1a0lIZGxJR2hoZG1VZ1ptbHNkR1Z5TENCaGNIQnNlU0JtYVd4MFpYSmNiaUFnSUNCcFppQW9kbUZzZFdWVWVYQmxjMXRyWlhsZElDWW1JQ2hwYzA1MWJTaDJZV3gxWlNrZ2ZId2dhWE5QWW1vb2RtRnNkV1VwS1NBbUppQjJZV3gxWlZSNWNHVnpXMnRsZVYwdWRISmhibk5tYjNKdEtTQjdYRzRnSUNBZ0lDQjJZV3gxWlNBOUlIWmhiSFZsVkhsd1pYTmJhMlY1WFM1MGNtRnVjMlp2Y20wb2RtRnNkV1VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGNtRnVjMlp2Y20xUWNtOXdjMXRyWlhsZEtTQjdYRzRnSUNBZ0lDQjBjbUZ1YzJadmNtMVRkSEpwYm1jZ0t6MGdhMlY1SUNzZ0p5Z25JQ3NnZG1Gc2RXVWdLeUFuS1NBbk8xeHVJQ0FnSUNBZ2RISmhibk5tYjNKdFNHRnpXaUE5SUNoclpYa2dQVDA5SUhSeVlXNXpiR0YwWlUxaGNDNTZLU0EvSUhSeWRXVWdPaUIwY21GdWMyWnZjbTFJWVhOYU8xeHVYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhCeWIzQmxjblI1VTNSeWFXNW5JQ3M5SUNjN0p5QXJJSEJ5WldacGVHVnlLR3RsZVN3Z2RISjFaU2tnS3lBbk9pY2dLeUIyWVd4MVpUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQXZMeUJKWmlCM1pTQm9ZWFpsSUhSeVlXNXpabTl5YlNCd2NtOXdjeXdnWW5WcGJHUWdZU0IwY21GdWMyWnZjbTBnYzNSeWFXNW5YRzRnSUdsbUlDaG9ZWE5VY21GdWMyWnZjbTBwSUh0Y2JpQWdJQ0JwWmlBb0lYUnlZVzV6Wm05eWJVaGhjMW9nSmlZZ1pXNWhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0cElIdGNiaUFnSUNBZ0lIUnlZVzV6Wm05eWJWTjBjbWx1WnlBclBTQjBjbUZ1YzJ4aGRHVk5ZWEF1ZWlBcklDY29NQ2tuTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEJ5YjNCbGNuUjVVM1J5YVc1bklDczlJQ2M3SnlBcklIQnlaV1pwZUdWeUtDZDBjbUZ1YzJadmNtMG5MQ0IwY25WbEtTQXJJQ2M2SnlBcklIUnlZVzV6Wm05eWJWTjBjbWx1Wnp0Y2JpQWdmVnh1WEc0Z0lHVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0FyUFNCd2NtOXdaWEowZVZOMGNtbHVaenRjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL3JlbmRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgYXhlcyA9IFsnWCcsICdZJywgJ1onXTtcblxudmFyIHRyYW5zZm9ybVByb3BzID0ge1xuICB4OiB0cnVlLFxuICB5OiB0cnVlLFxuICB6OiB0cnVlXG59O1xuXG52YXIgU0NBTEUgPSAnc2NhbGUnO1xudmFyIFJPVEFURSA9ICdyb3RhdGUnO1xudmFyIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSc7XG52YXIgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBheGVzLmZvckVhY2goZnVuY3Rpb24gKGF4aXMpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtUHJvcHNbdGVybSArIGF4aXNdID0gdHJ1ZTtcbiAgfSk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNmb3JtUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM1J5WVc1elptOXliUzF3Y205d2N5NXFjeUpkTENKdVlXMWxjeUk2V3lKaGVHVnpJaXdpZEhKaGJuTm1iM0p0VUhKdmNITWlMQ0o0SWl3aWVTSXNJbm9pTENKVFEwRk1SU0lzSWxKUFZFRlVSU0lzSWxSU1FVNVRSazlTVFY5UVJWSlRVRVZEVkVsV1JTSXNJbFJGVWsxVElpd2labTl5UldGamFDSXNJblJsY20waUxDSmhlR2x6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeEpRVUZOUVN4UFFVRlBMRU5CUVVNc1IwRkJSQ3hGUVVGTkxFZEJRVTRzUlVGQlZ5eEhRVUZZTEVOQlFXSTdPMEZCUlVFc1NVRkJTVU1zYVVKQlFXbENPMEZCUTI1Q1F5eExRVUZITEVsQlJHZENPMEZCUlc1Q1F5eExRVUZITEVsQlJtZENPMEZCUjI1Q1F5eExRVUZITzBGQlNHZENMRU5CUVhKQ096dEJRVTFCTEVsQlFVMURMRkZCUVZFc1QwRkJaRHRCUVVOQkxFbEJRVTFETEZOQlFWTXNVVUZCWmp0QlFVTkJMRWxCUVUxRExIZENRVUYzUWl4elFrRkJPVUk3UVVGRFFTeEpRVUZOUXl4UlFVRlJMRU5CUVVNc1YwRkJSQ3hGUVVGalNDeExRVUZrTEVWQlFYRkNReXhOUVVGeVFpeEZRVUUyUWl4TlFVRTNRaXhGUVVGeFEwTXNjVUpCUVhKRExFTkJRV1E3TzBGQlJVRk9MR1ZCUVdWTExFMUJRV1lzU1VGQmVVSk1MR1ZCUVdWSkxFdEJRV1lzU1VGQmQwSktMR1ZCUVdWTkxIRkNRVUZtTEVsQlFYZERMRWxCUVhwR096dEJRVVZCUXl4TlFVRk5ReXhQUVVGT0xFTkJRV01zVlVGQlEwTXNTVUZCUkR0QlFVRkJMRk5CUVZWV0xFdEJRVXRUTEU5QlFVd3NRMEZCWVN4VlFVRkRSU3hKUVVGRU8wRkJRVUVzVjBGQlZWWXNaVUZCWlZNc1QwRkJUME1zU1VGQmRFSXNTVUZCT0VJc1NVRkJlRU03UVVGQlFTeEhRVUZpTEVOQlFWWTdRVUZCUVN4RFFVRmtPenRyUWtGRlpWWXNZeUlzSW1acGJHVWlPaUowY21GdWMyWnZjbTB0Y0hKdmNITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk11YUdGc2JDOVFjbTlxWldOMGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQmhlR1Z6SUQwZ1d5ZFlKeXdnSjFrbkxDQW5XaWRkTzF4dVhHNXNaWFFnZEhKaGJuTm1iM0p0VUhKdmNITWdQU0I3WEc0Z0lIZzZJSFJ5ZFdVc1hHNGdJSGs2SUhSeWRXVXNYRzRnSUhvNklIUnlkV1ZjYm4wN1hHNWNibU52Ym5OMElGTkRRVXhGSUQwZ0ozTmpZV3hsSnp0Y2JtTnZibk4wSUZKUFZFRlVSU0E5SUNkeWIzUmhkR1VuTzF4dVkyOXVjM1FnVkZKQlRsTkdUMUpOWDFCRlVsTlFSVU5VU1ZaRklEMGdKM1J5WVc1elptOXliVkJsY25Od1pXTjBhWFpsSnp0Y2JtTnZibk4wSUZSRlVrMVRJRDBnV3lkMGNtRnVjMnhoZEdVbkxDQlRRMEZNUlN3Z1VrOVVRVlJGTENBbmMydGxkeWNzSUZSU1FVNVRSazlTVFY5UVJWSlRVRVZEVkVsV1JWMDdYRzVjYm5SeVlXNXpabTl5YlZCeWIzQnpXMUpQVkVGVVJWMGdQU0IwY21GdWMyWnZjbTFRY205d2MxdFRRMEZNUlYwZ1BTQjBjbUZ1YzJadmNtMVFjbTl3YzF0VVVrRk9VMFpQVWsxZlVFVlNVMUJGUTFSSlZrVmRJRDBnZEhKMVpUdGNibHh1VkVWU1RWTXVabTl5UldGamFDZ29kR1Z5YlNrZ1BUNGdZWGhsY3k1bWIzSkZZV05vS0NoaGVHbHpLU0E5UGlCMGNtRnVjMlp2Y20xUWNtOXdjMXQwWlhKdElDc2dZWGhwYzEwZ1BTQjBjblZsS1NrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIUnlZVzV6Wm05eWJWQnliM0J6T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvdHJhbnNmb3JtLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3ZhbHVlLXR5cGVzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgLy8gQ29sb3IgcHJvcHNcbiAgY29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBiYWNrZ3JvdW5kQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBvdXRsaW5lQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBmaWxsOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgc3Ryb2tlOiBfdmFsdWVUeXBlcy5jb2xvcixcblxuICAvLyBCb3JkZXIgcHJvcHNcbiAgYm9yZGVyQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJUb3BDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlclJpZ2h0Q29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJCb3R0b21Db2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlckxlZnRDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlclJhZGl1czogX3ZhbHVlVHlwZXMucHgsXG5cbiAgLy8gUG9zaXRpb25pbmdcbiAgd2lkdGg6IF92YWx1ZVR5cGVzLnB4LFxuICBoZWlnaHQ6IF92YWx1ZVR5cGVzLnB4LFxuICB0b3A6IF92YWx1ZVR5cGVzLnB4LFxuICBsZWZ0OiBfdmFsdWVUeXBlcy5weCxcbiAgYm90dG9tOiBfdmFsdWVUeXBlcy5weCxcbiAgcmlnaHQ6IF92YWx1ZVR5cGVzLnB4LFxuXG4gIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gIHJvdGF0ZTogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgcm90YXRlWDogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgcm90YXRlWTogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgcm90YXRlWjogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgc2NhbGU6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVg6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVk6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVo6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBza2V3WDogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgc2tld1k6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIGRpc3RhbmNlOiBfdmFsdWVUeXBlcy5weCxcbiAgdHJhbnNsYXRlWDogX3ZhbHVlVHlwZXMucHgsXG4gIHRyYW5zbGF0ZVk6IF92YWx1ZVR5cGVzLnB4LFxuICB0cmFuc2xhdGVaOiBfdmFsdWVUeXBlcy5weCxcbiAgcGVyc3BlY3RpdmU6IF92YWx1ZVR5cGVzLnB4LFxuICBvcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzWmhiSFZsTFhSNWNHVnpMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTnZiRzl5SWl3aVltRmphMmR5YjNWdVpFTnZiRzl5SWl3aWIzVjBiR2x1WlVOdmJHOXlJaXdpWm1sc2JDSXNJbk4wY205clpTSXNJbUp2Y21SbGNrTnZiRzl5SWl3aVltOXlaR1Z5Vkc5d1EyOXNiM0lpTENKaWIzSmtaWEpTYVdkb2RFTnZiRzl5SWl3aVltOXlaR1Z5UW05MGRHOXRRMjlzYjNJaUxDSmliM0prWlhKTVpXWjBRMjlzYjNJaUxDSmliM0prWlhKU1lXUnBkWE1pTENKM2FXUjBhQ0lzSW1obGFXZG9kQ0lzSW5SdmNDSXNJbXhsWm5RaUxDSmliM1IwYjIwaUxDSnlhV2RvZENJc0luSnZkR0YwWlNJc0luSnZkR0YwWlZnaUxDSnliM1JoZEdWWklpd2ljbTkwWVhSbFdpSXNJbk5qWVd4bElpd2ljMk5oYkdWWUlpd2ljMk5oYkdWWklpd2ljMk5oYkdWYUlpd2ljMnRsZDFnaUxDSnphMlYzV1NJc0ltUnBjM1JoYm1ObElpd2lkSEpoYm5Oc1lYUmxXQ0lzSW5SeVlXNXpiR0YwWlZraUxDSjBjbUZ1YzJ4aGRHVmFJaXdpY0dWeWMzQmxZM1JwZG1VaUxDSnZjR0ZqYVhSNUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3TzJ0Q1FVTmxPMEZCUTJJN1FVRkRRVUVzTUVKQlJtRTdRVUZIWWtNc2IwTkJTR0U3UVVGSllrTXNhVU5CU21FN1FVRkxZa01zZVVKQlRHRTdRVUZOWWtNc01rSkJUbUU3TzBGQlVXSTdRVUZEUVVNc1owTkJWR0U3UVVGVllrTXNiVU5CVm1FN1FVRlhZa01zY1VOQldHRTdRVUZaWWtNc2MwTkJXbUU3UVVGaFlrTXNiME5CWW1FN1FVRmpZa01zT0VKQlpHRTdPMEZCWjBKaU8wRkJRMEZETEhWQ1FXcENZVHRCUVd0Q1lrTXNkMEpCYkVKaE8wRkJiVUppUXl4eFFrRnVRbUU3UVVGdlFtSkRMSE5DUVhCQ1lUdEJRWEZDWWtNc2QwSkJja0poTzBGQmMwSmlReXgxUWtGMFFtRTdPMEZCZDBKaU8wRkJRMEZETERaQ1FYcENZVHRCUVRCQ1lrTXNPRUpCTVVKaE8wRkJNa0ppUXl3NFFrRXpRbUU3UVVFMFFtSkRMRGhDUVRWQ1lUdEJRVFpDWWtNc01FSkJOMEpoTzBGQk9FSmlReXd5UWtFNVFtRTdRVUVyUW1KRExESkNRUzlDWVR0QlFXZERZa01zTWtKQmFFTmhPMEZCYVVOaVF5dzBRa0ZxUTJFN1FVRnJRMkpETERSQ1FXeERZVHRCUVcxRFlrTXNNRUpCYmtOaE8wRkJiME5pUXl3MFFrRndRMkU3UVVGeFEySkRMRFJDUVhKRFlUdEJRWE5EWWtNc05FSkJkRU5oTzBGQmRVTmlReXcyUWtGMlEyRTdRVUYzUTJKRE8wRkJlRU5oTEVNaUxDSm1hV3hsSWpvaWRtRnNkV1V0ZEhsd1pYTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhjbk11YUdGc2JDOVFjbTlxWldOMGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJoYkhCb1lTd2dZMjlzYjNJc0lHUmxaM0psWlhNc0lITmpZV3hsTENCd2VDQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTJZV3gxWlMxMGVYQmxjeWM3SUZ4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQXZMeUJEYjJ4dmNpQndjbTl3YzF4dUlDQmpiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHSmhZMnRuY205MWJtUkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHOTFkR3hwYm1WRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdacGJHdzZJR052Ykc5eUxGeHVJQ0J6ZEhKdmEyVTZJR052Ykc5eUxGeHVYRzRnSUM4dklFSnZjbVJsY2lCd2NtOXdjMXh1SUNCaWIzSmtaWEpEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0p2Y21SbGNsUnZjRU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdZbTl5WkdWeVVtbG5hSFJEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0p2Y21SbGNrSnZkSFJ2YlVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnWW05eVpHVnlUR1ZtZEVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnWW05eVpHVnlVbUZrYVhWek9pQndlQ3hjYmx4dUlDQXZMeUJRYjNOcGRHbHZibWx1WjF4dUlDQjNhV1IwYURvZ2NIZ3NYRzRnSUdobGFXZG9kRG9nY0hnc0lDQmNiaUFnZEc5d09pQndlQ3hjYmlBZ2JHVm1kRG9nY0hnc1hHNGdJR0p2ZEhSdmJUb2djSGdzWEc0Z0lISnBaMmgwT2lCd2VDeGNibHh1SUNBdkx5QlVjbUZ1YzJadmNtMGdjSEp2Y0dWeWRHbGxjMXh1SUNCeWIzUmhkR1U2SUdSbFozSmxaWE1zWEc0Z0lISnZkR0YwWlZnNklHUmxaM0psWlhNc1hHNGdJSEp2ZEdGMFpWazZJR1JsWjNKbFpYTXNYRzRnSUhKdmRHRjBaVm82SUdSbFozSmxaWE1zWEc0Z0lITmpZV3hsT2lCelkyRnNaU3hjYmlBZ2MyTmhiR1ZZT2lCelkyRnNaU3hjYmlBZ2MyTmhiR1ZaT2lCelkyRnNaU3hjYmlBZ2MyTmhiR1ZhT2lCelkyRnNaU3hjYmlBZ2MydGxkMWc2SUdSbFozSmxaWE1zWEc0Z0lITnJaWGRaT2lCa1pXZHlaV1Z6TEZ4dUlDQmthWE4wWVc1alpUb2djSGdzWEc0Z0lIUnlZVzV6YkdGMFpWZzZJSEI0TEZ4dUlDQjBjbUZ1YzJ4aGRHVlpPaUJ3ZUN4Y2JpQWdkSEpoYm5Oc1lYUmxXam9nY0hnc1hHNGdJSEJsY25Od1pXTjBhWFpsT2lCd2VDeGNiaUFnYjNCaFkybDBlVG9nWVd4d2FHRmNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvdmFsdWUtdHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBjYW1lbENhY2hlID0ge307XG52YXIgZGFzaENhY2hlID0ge307XG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcycsICcnXTtcbnZhciBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbnZhciB0ZXN0RWxlbWVudCA9IHZvaWQgMDtcblxuLypcbiAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbnZhciB0ZXN0UHJlZml4ID0gZnVuY3Rpb24gKGtleSkge1xuICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICB2YXIgbm9QcmVmaXggPSBwcmVmaXggPT09ICcnO1xuICAgIHZhciBwcmVmaXhlZFByb3BlcnR5TmFtZSA9IG5vUHJlZml4ID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgaWYgKHByZWZpeGVkUHJvcGVydHlOYW1lIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICBjYW1lbENhY2hlW2tleV0gPSBwcmVmaXhlZFByb3BlcnR5TmFtZTtcbiAgICAgIGRhc2hDYWNoZVtrZXldID0gJycgKyAobm9QcmVmaXggPyAnJyA6ICctJykgKyAoMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShwcmVmaXhlZFByb3BlcnR5TmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoa2V5LCBhc0Rhc2hDYXNlKSB7XG4gIHZhciBjYWNoZSA9IGFzRGFzaENhc2UgPyBkYXNoQ2FjaGUgOiBjYW1lbENhY2hlO1xuXG4gIGlmICghY2FjaGVba2V5XSkge1xuICAgIHRlc3RQcmVmaXgoa2V5KTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZVtrZXldO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzQnlaV1pwZUdWeUxtcHpJbDBzSW01aGJXVnpJanBiSW1OaGJXVnNRMkZqYUdVaUxDSmtZWE5vUTJGamFHVWlMQ0p3Y21WbWFYaGxjeUlzSW01MWJWQnlaV1pwZUdWeklpd2liR1Z1WjNSb0lpd2lkR1Z6ZEVWc1pXMWxiblFpTENKMFpYTjBVSEpsWm1sNElpd2lhMlY1SWl3aVpHOWpkVzFsYm5RaUxDSmpjbVZoZEdWRmJHVnRaVzUwSWl3aWFTSXNJbkJ5WldacGVDSXNJbTV2VUhKbFptbDRJaXdpY0hKbFptbDRaV1JRY205d1pYSjBlVTVoYldVaUxDSmphR0Z5UVhRaUxDSjBiMVZ3Y0dWeVEyRnpaU0lzSW5Oc2FXTmxJaXdpYzNSNWJHVWlMQ0poYzBSaGMyaERZWE5sSWl3aVkyRmphR1VpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdRVUZGUVN4SlFVRk5RU3hoUVVGaExFVkJRVzVDTzBGQlEwRXNTVUZCVFVNc1dVRkJXU3hGUVVGc1FqdEJRVU5CTEVsQlFVMURMRmRCUVZjc1EwRkJReXhSUVVGRUxFVkJRVlVzUzBGQlZpeEZRVUZuUWl4SFFVRm9RaXhGUVVGdlFpeEpRVUZ3UWl4RlFVRXdRaXhGUVVFeFFpeERRVUZxUWp0QlFVTkJMRWxCUVUxRExHTkJRV05FTEZOQlFWTkZMRTFCUVRkQ08wRkJRMEVzU1VGQlNVTXNiMEpCUVVvN08wRkJSVUU3T3pzN096dEJRVTFCTEVsQlFVMURMR0ZCUVdFc1ZVRkJRME1zUjBGQlJDeEZRVUZUTzBGQlF6RkNSaXhuUWtGQlkwRXNaVUZCWlVjc1UwRkJVME1zWVVGQlZDeERRVUYxUWl4TFFVRjJRaXhEUVVFM1FqczdRVUZGUVN4UFFVRkxMRWxCUVVsRExFbEJRVWtzUTBGQllpeEZRVUZuUWtFc1NVRkJTVkFzVjBGQmNFSXNSVUZCYVVOUExFZEJRV3BETEVWQlFYTkRPMEZCUTNCRExGRkJRVTFETEZOQlFWTlVMRk5CUVZOUkxFTkJRVlFzUTBGQlpqdEJRVU5CTEZGQlFVMUZMRmRCUVZsRUxGZEJRVmNzUlVGQk4wSTdRVUZEUVN4UlFVRk5SU3gxUWtGQmRVSkVMRmRCUVZkTUxFZEJRVmdzUjBGQmFVSkpMRk5CUVZOS0xFbEJRVWxQTEUxQlFVb3NRMEZCVnl4RFFVRllMRVZCUVdORExGZEJRV1FzUlVGQlZDeEhRVUYxUTFJc1NVRkJTVk1zUzBGQlNpeERRVUZWTEVOQlFWWXNRMEZCY2tZN08wRkJSVUVzVVVGQlNVZ3NkMEpCUVhkQ1VpeFpRVUZaV1N4TFFVRjRReXhGUVVFclF6dEJRVU0zUTJwQ0xHbENRVUZYVHl4SFFVRllMRWxCUVd0Q1RTeHZRa0ZCYkVJN1FVRkRRVm9zWjBKQlFWVk5MRWRCUVZZc1ZVRkJjVUpMTEZkQlFWY3NSVUZCV0N4SFFVRm5RaXhIUVVGeVF5eEpRVUUwUXl4M1FrRkJXVU1zYjBKQlFWb3NRMEZCTlVNN1FVRkRSRHRCUVVOR08wRkJRMFlzUTBGaVJEczdhMEpCWldVc1ZVRkJRMDRzUjBGQlJDeEZRVUZOVnl4VlFVRk9MRVZCUVhGQ08wRkJRMnhETEUxQlFVMURMRkZCUVZGRUxHRkJRV0ZxUWl4VFFVRmlMRWRCUVhsQ1JDeFZRVUYyUXpzN1FVRkZRU3hOUVVGSkxFTkJRVU50UWl4TlFVRk5XaXhIUVVGT0xFTkJRVXdzUlVGQmFVSTdRVUZEWmtRc1pVRkJWME1zUjBGQldEdEJRVU5FT3p0QlFVVkVMRk5CUVU5WkxFMUJRVTFhTEVkQlFVNHNRMEZCVUR0QlFVTkVMRU1pTENKbWFXeGxJam9pY0hKbFptbDRaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoY25NdWFHRnNiQzlRY205cVpXTjBjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCallXMWxiRlJ2UkdGemFDQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU52Ym5OMElHTmhiV1ZzUTJGamFHVWdQU0I3ZlR0Y2JtTnZibk4wSUdSaGMyaERZV05vWlNBOUlIdDlPMXh1WTI5dWMzUWdjSEpsWm1sNFpYTWdQU0JiSjFkbFltdHBkQ2NzSjAxdmVpY3NKMDhuTENkdGN5Y3NJQ2NuWFR0Y2JtTnZibk4wSUc1MWJWQnlaV1pwZUdWeklEMGdjSEpsWm1sNFpYTXViR1Z1WjNSb08xeHViR1YwSUhSbGMzUkZiR1Z0Wlc1ME8xeHVYRzR2S2x4dUlDQlVaWE4wSUhOMGVXeGxJSEJ5YjNCbGNuUjVJR1p2Y2lCd2NtVm1hWGhsWkNCMlpYSnphVzl1WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRk4wZVd4bElIQnliM0JsY25SNVhHNGdJRUJ5WlhSMWNtNGdXM04wY21sdVoxMDZJRU5oWTJobFpDQndjbTl3WlhKMGVTQnVZVzFsWEc0cUwxeHVZMjl1YzNRZ2RHVnpkRkJ5WldacGVDQTlJQ2hyWlhrcElEMCtJSHRjYmlBZ2RHVnpkRVZzWlcxbGJuUWdQU0IwWlhOMFJXeGxiV1Z1ZENCOGZDQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nka2FYWW5LVHRjYmx4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlZCeVpXWnBlR1Z6T3lCcEt5c3BJSHRjYmlBZ0lDQmpiMjV6ZENCd2NtVm1hWGdnUFNCd2NtVm1hWGhsYzF0cFhUdGNiaUFnSUNCamIyNXpkQ0J1YjFCeVpXWnBlQ0E5SUNod2NtVm1hWGdnUFQwOUlDY25LVHRjYmlBZ0lDQmpiMjV6ZENCd2NtVm1hWGhsWkZCeWIzQmxjblI1VG1GdFpTQTlJRzV2VUhKbFptbDRJRDhnYTJWNUlEb2djSEpsWm1sNElDc2dhMlY1TG1Ob1lYSkJkQ2d3S1M1MGIxVndjR1Z5UTJGelpTZ3BJQ3NnYTJWNUxuTnNhV05sS0RFcE8xeHVYRzRnSUNBZ2FXWWdLSEJ5WldacGVHVmtVSEp2Y0dWeWRIbE9ZVzFsSUdsdUlIUmxjM1JGYkdWdFpXNTBMbk4wZVd4bEtTQjdYRzRnSUNBZ0lDQmpZVzFsYkVOaFkyaGxXMnRsZVYwZ1BTQndjbVZtYVhobFpGQnliM0JsY25SNVRtRnRaVHRjYmlBZ0lDQWdJR1JoYzJoRFlXTm9aVnRyWlhsZElEMGdZQ1I3S0c1dlVISmxabWw0SUQ4Z0p5Y2dPaUFuTFNjcGZTUjdZMkZ0Wld4VWIwUmhjMmdvY0hKbFptbDRaV1JRY205d1pYSjBlVTVoYldVcGZXQTdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hMlY1TENCaGMwUmhjMmhEWVhObEtTQTlQaUI3WEc0Z0lHTnZibk4wSUdOaFkyaGxJRDBnWVhORVlYTm9RMkZ6WlNBL0lHUmhjMmhEWVdOb1pTQTZJR05oYldWc1EyRmphR1U3WEc1Y2JpQWdhV1lnS0NGallXTm9aVnRyWlhsZEtTQjdYRzRnSUNBZ2RHVnpkRkJ5WldacGVDaHJaWGtwTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdOaFkyaGxXMnRsZVYwN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy9wcmVmaXhlci5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBkYXRhKSB7XG4gIHZhciBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDE7XG4gIHZhciBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMTtcbiAgdmFyIHRyYW5zZm9ybU9yaWdpblggPSBkYXRhLndpZHRoICogKChzdGF0ZS5vcmlnaW5YIHx8IDUwKSAvIDEwMCkgKyBkYXRhLng7XG4gIHZhciB0cmFuc2Zvcm1PcmlnaW5ZID0gZGF0YS5oZWlnaHQgKiAoKHN0YXRlLm9yaWdpblkgfHwgNTApIC8gMTAwKSArIGRhdGEueTtcbiAgdmFyIHNjYWxlVHJhbnNmb3JtWCA9IC10cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSk7XG4gIHZhciBzY2FsZVRyYW5zZm9ybVkgPSAtdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKTtcbiAgdmFyIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGU7XG4gIHZhciBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWTtcbiAgdmFyIHRyYW5zZm9ybSA9IHtcbiAgICB0cmFuc2xhdGU6ICd0cmFuc2xhdGUoJyArIHN0YXRlLnRyYW5zbGF0ZVggKyAnLCAnICsgc3RhdGUudHJhbnNsYXRlWSArICcpICcsXG4gICAgc2NhbGU6ICd0cmFuc2xhdGUoJyArIHNjYWxlVHJhbnNmb3JtWCArICcsICcgKyBzY2FsZVRyYW5zZm9ybVkgKyAnKSBzY2FsZSgnICsgc2NhbGUgKyAnLCAnICsgc2NhbGVZICsgJykgdHJhbnNsYXRlKCcgKyBzY2FsZVJlcGxhY2VYICsgJywgJyArIHNjYWxlUmVwbGFjZVkgKyAnKSAnLFxuICAgIHJvdGF0ZTogJ3JvdGF0ZSgnICsgc3RhdGUucm90YXRlICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblggKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWSArICcpICcsXG4gICAgc2tld1g6ICdza2V3WCgnICsgc3RhdGUuc2tld1ggKyAnKSAnLFxuICAgIHNrZXdZOiAnc2tld1koJyArIHN0YXRlLnNrZXdZICsgJykgJ1xuICB9O1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzWygwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICBmb3IgKHZhciBfa2V5IGluIHRyYW5zZm9ybSkge1xuICAgICAgaWYgKHRyYW5zZm9ybS5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gX2tleSA9PT0gJ3NjYWxlJyA/ICcxJyA6ICcwJztcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtfa2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MMkoxYVd4a0xtcHpJbDBzSW01aGJXVnpJanBiSW1KMWFXeGtJaXdpV2tWU1QxOU9UMVJmV2tWU1R5SXNJbk4wWVhSbElpd2laR0YwWVNJc0ltaGhjMVJ5WVc1elptOXliU0lzSW5CeWIzQnpJaXdpYzJOaGJHVWlMQ0oxYm1SbFptbHVaV1FpTENKelkyRnNaVmdpTENKelkyRnNaVmtpTENKMGNtRnVjMlp2Y20xUGNtbG5hVzVZSWl3aWQybGtkR2dpTENKdmNtbG5hVzVZSWl3aWVDSXNJblJ5WVc1elptOXliVTl5YVdkcGJsa2lMQ0pvWldsbmFIUWlMQ0p2Y21sbmFXNVpJaXdpZVNJc0luTmpZV3hsVkhKaGJuTm1iM0p0V0NJc0luTmpZV3hsVkhKaGJuTm1iM0p0V1NJc0luTmpZV3hsVW1Wd2JHRmpaVmdpTENKelkyRnNaVkpsY0d4aFkyVlpJaXdpZEhKaGJuTm1iM0p0SWl3aWRISmhibk5zWVhSbElpd2lkSEpoYm5Oc1lYUmxXQ0lzSW5SeVlXNXpiR0YwWlZraUxDSnliM1JoZEdVaUxDSnphMlYzV0NJc0luTnJaWGRaSWl3aWEyVjVJaXdpYUdGelQzZHVVSEp2Y0dWeWRIa2lMQ0prWldaaGRXeDBWbUZzZFdVaUxDSnlaWEJzWVdObElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJTM2RDUVN4TE96dEJRVXg0UWpzN1FVRkRRVHM3T3pzN08wRkJSVUVzU1VGQlRVTXNaMEpCUVdkQ0xFMUJRWFJDT3p0QlFVVmxMRk5CUVZORUxFdEJRVlFzUTBGQlpVVXNTMEZCWml4RlFVRnpRa01zU1VGQmRFSXNSVUZCTkVJN1FVRkRla01zVFVGQlNVTXNaVUZCWlN4TFFVRnVRanRCUVVOQkxFMUJRVTFETEZGQlFWRXNSVUZCWkR0QlFVTkJMRTFCUVUxRExGRkJRVkZLTEUxQlFVMUpMRXRCUVU0c1MwRkJaMEpETEZOQlFXaENMRWRCUVRSQ1RDeE5RVUZOU1N4TFFVRk9MRWxCUVdWTUxHRkJRVE5ETEVkQlFUSkVReXhOUVVGTlRTeE5RVUZPTEVsQlFXZENMRU5CUVhwR08wRkJRMEVzVFVGQlRVTXNVMEZCVTFBc1RVRkJUVThzVFVGQlRpeExRVUZwUWtZc1UwRkJha0lzUjBGQk5rSk1MRTFCUVUxUExFMUJRVTRzU1VGQlowSlNMR0ZCUVRkRExFZEJRVFpFU3l4VFFVRlRMRU5CUVhKR08wRkJRMEVzVFVGQlRVa3NiVUpCUVcxQ1VDeExRVUZMVVN4TFFVRk1MRWxCUVdNc1EwRkJRMVFzVFVGQlRWVXNUMEZCVGl4SlFVRnBRaXhGUVVGc1FpeEpRVUYzUWl4SFFVRjBReXhKUVVFMlExUXNTMEZCUzFVc1EwRkJNMFU3UVVGRFFTeE5RVUZOUXl4dFFrRkJiVUpZTEV0QlFVdFpMRTFCUVV3c1NVRkJaU3hEUVVGRFlpeE5RVUZOWXl4UFFVRk9MRWxCUVdsQ0xFVkJRV3hDTEVsQlFYZENMRWRCUVhaRExFbEJRVGhEWWl4TFFVRkxZeXhEUVVFMVJUdEJRVU5CTEUxQlFVMURMR3RDUVVGclFpeERRVUZGVWl4blFrRkJSaXhKUVVGelFrb3NVVUZCVVN4RFFVRTVRaXhEUVVGNFFqdEJRVU5CTEUxQlFVMWhMR3RDUVVGclFpeERRVUZGVEN4blFrRkJSaXhKUVVGelFrd3NVMEZCVXl4RFFVRXZRaXhEUVVGNFFqdEJRVU5CTEUxQlFVMVhMR2RDUVVGblFsWXNiVUpCUVcxQ1NpeExRVUY2UXp0QlFVTkJMRTFCUVUxbExHZENRVUZuUWxBc2JVSkJRVzFDVEN4TlFVRjZRenRCUVVOQkxFMUJRVTFoTEZsQlFWazdRVUZEYUVKRExEaENRVUYzUW5KQ0xFMUJRVTF6UWl4VlFVRTVRaXhWUVVFMlEzUkNMRTFCUVUxMVFpeFZRVUZ1UkN4UFFVUm5RanRCUVVWb1FtNUNMREJDUVVGdlFsa3NaVUZCY0VJc1ZVRkJkME5ETEdWQlFYaERMR2RDUVVGclJXSXNTMEZCYkVVc1ZVRkJORVZITEUxQlFUVkZMRzlDUVVGcFIxY3NZVUZCYWtjc1ZVRkJiVWhETEdGQlFXNUlMRTlCUm1kQ08wRkJSMmhDU3l4M1FrRkJhMEo0UWl4TlFVRk5kMElzVFVGQmVFSXNWVUZCYlVOb1FpeG5Ra0ZCYmtNc1ZVRkJkMFJKTEdkQ1FVRjRSQ3hQUVVoblFqdEJRVWxvUW1Fc2MwSkJRV2RDZWtJc1RVRkJUWGxDTEV0QlFYUkNMRTlCU21kQ08wRkJTMmhDUXl4elFrRkJaMEl4UWl4TlFVRk5NRUlzUzBGQmRFSTdRVUZNWjBJc1IwRkJiRUk3TzBGQlVVRXNUMEZCU3l4SlFVRkpReXhIUVVGVUxFbEJRV2RDTTBJc1MwRkJhRUlzUlVGQmRVSTdRVUZEY2tJc1VVRkJTVUVzVFVGQlRUUkNMR05CUVU0c1EwRkJjVUpFTEVkQlFYSkNMRU5CUVVvc1JVRkJLMEk3UVVGRE4wSXNWVUZCU1N4NVFrRkJaVUVzUjBGQlppeERRVUZLTEVWQlFYbENPMEZCUTNaQ2VrSXNkVUpCUVdVc1NVRkJaanRCUVVORUxFOUJSa1FzVFVGRlR6dEJRVU5NUXl4alFVRk5MSGRDUVVGWmQwSXNSMEZCV2l4RFFVRk9MRWxCUVRCQ00wSXNUVUZCVFRKQ0xFZEJRVTRzUTBGQk1VSTdRVUZEUkR0QlFVTkdPMEZCUTBZN08wRkJSVVFzVFVGQlNYcENMRmxCUVVvc1JVRkJhMEk3UVVGRGFFSkRMRlZCUVUxcFFpeFRRVUZPTEVkQlFXdENMRVZCUVd4Q096dEJRVVZCTEZOQlFVc3NTVUZCU1U4c1NVRkJWQ3hKUVVGblFsQXNVMEZCYUVJc1JVRkJNa0k3UVVGRGVrSXNWVUZCU1VFc1ZVRkJWVkVzWTBGQlZpeERRVUY1UWtRc1NVRkJla0lzUTBGQlNpeEZRVUZ0UXp0QlFVTnFReXhaUVVGTlJTeGxRVUZuUWtZc1UwRkJVU3hQUVVGVUxFZEJRVzlDTEVkQlFYQkNMRWRCUVRCQ0xFZEJRUzlETzBGQlEwRjRRaXhqUVVGTmFVSXNVMEZCVGl4SlFVRnRRa0VzVlVGQlZVOHNTVUZCVml4RlFVRmxSeXhQUVVGbUxFTkJRWFZDTEZsQlFYWkNMRVZCUVhGRFJDeFpRVUZ5UXl4RFFVRnVRanRCUVVORU8wRkJRMFk3UVVGRFJqczdRVUZGUkN4VFFVRlBNVUlzUzBGQlVEdEJRVU5FSWl3aVptbHNaU0k2SW1KMWFXeGtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWEp6TG1oaGJHd3ZVSEp2YW1WamRITXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWTJGdFpXeFViMFJoYzJnZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRYUnBiSE1uTzF4dWFXMXdiM0owSUhSeVlXNXpabTl5YlZCeWIzQnpJR1p5YjIwZ0p5NHVMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dVhHNWpiMjV6ZENCYVJWSlBYMDVQVkY5YVJWSlBJRDBnTUM0d01EQXhPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJpZFdsc1pDaHpkR0YwWlN3Z1pHRjBZU2tnZTF4dUlDQnNaWFFnYUdGelZISmhibk5tYjNKdElEMGdabUZzYzJVN1hHNGdJR052Ym5OMElIQnliM0J6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJSE5qWVd4bElEMGdjM1JoZEdVdWMyTmhiR1VnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JSE4wWVhSbExuTmpZV3hsSUh4OElGcEZVazlmVGs5VVgxcEZVazhnT2lCemRHRjBaUzV6WTJGc1pWZ2dmSHdnTVR0Y2JpQWdZMjl1YzNRZ2MyTmhiR1ZaSUQwZ2MzUmhkR1V1YzJOaGJHVlpJQ0U5UFNCMWJtUmxabWx1WldRZ1B5QnpkR0YwWlM1elkyRnNaVmtnZkh3Z1drVlNUMTlPVDFSZldrVlNUeUE2SUhOallXeGxJSHg4SURFN1hHNGdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ1BTQmtZWFJoTG5kcFpIUm9JQ29nS0NoemRHRjBaUzV2Y21sbmFXNVlJSHg4SURVd0tTQXZJREV3TUNrZ0t5QmtZWFJoTG5nN1hHNGdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxrZ1BTQmtZWFJoTG1obGFXZG9kQ0FxSUNnb2MzUmhkR1V1YjNKcFoybHVXU0I4ZkNBMU1Da2dMeUF4TURBcElDc2daR0YwWVM1NU8xeHVJQ0JqYjI1emRDQnpZMkZzWlZSeVlXNXpabTl5YlZnZ1BTQXRJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dLaUFvYzJOaGJHVWdLaUF4S1R0Y2JpQWdZMjl1YzNRZ2MyTmhiR1ZVY21GdWMyWnZjbTFaSUQwZ0xTQjBjbUZ1YzJadmNtMVBjbWxuYVc1WklDb2dLSE5qWVd4bFdTQXFJREVwTzF4dUlDQmpiMjV6ZENCelkyRnNaVkpsY0d4aFkyVllJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXQ0F2SUhOallXeGxPMXh1SUNCamIyNXpkQ0J6WTJGc1pWSmxjR3hoWTJWWklEMGdkSEpoYm5ObWIzSnRUM0pwWjJsdVdTQXZJSE5qWVd4bFdUdGNiaUFnWTI5dWMzUWdkSEpoYm5ObWIzSnRJRDBnZTF4dUlDQWdJSFJ5WVc1emJHRjBaVG9nWUhSeVlXNXpiR0YwWlNna2UzTjBZWFJsTG5SeVlXNXpiR0YwWlZoOUxDQWtlM04wWVhSbExuUnlZVzV6YkdGMFpWbDlLU0JnTEZ4dUlDQWdJSE5qWVd4bE9pQmdkSEpoYm5Oc1lYUmxLQ1I3YzJOaGJHVlVjbUZ1YzJadmNtMVlmU3dnSkh0elkyRnNaVlJ5WVc1elptOXliVmw5S1NCelkyRnNaU2drZTNOallXeGxmU3dnSkh0elkyRnNaVmw5S1NCMGNtRnVjMnhoZEdVb0pIdHpZMkZzWlZKbGNHeGhZMlZZZlN3Z0pIdHpZMkZzWlZKbGNHeGhZMlZaZlNrZ1lDeGNiaUFnSUNCeWIzUmhkR1U2SUdCeWIzUmhkR1VvSkh0emRHRjBaUzV5YjNSaGRHVjlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGg5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxsOUtTQmdMRnh1SUNBZ0lITnJaWGRZT2lCZ2MydGxkMWdvSkh0emRHRjBaUzV6YTJWM1dIMHBJR0FzWEc0Z0lDQWdjMnRsZDFrNklHQnphMlYzV1Nna2UzTjBZWFJsTG5OclpYZFpmU2tnWUZ4dUlDQjlPMXh1WEc0Z0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJR2xtSUNoemRHRjBaUzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNCcFppQW9kSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNCb1lYTlVjbUZ1YzJadmNtMGdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NISnZjSE5iWTJGdFpXeFViMFJoYzJnb2EyVjVLVjBnUFNCemRHRjBaVnRyWlhsZE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHbG1JQ2hvWVhOVWNtRnVjMlp2Y20wcElIdGNiaUFnSUNCd2NtOXdjeTUwY21GdWMyWnZjbTBnUFNBbkp6dGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGNtRnVjMlp2Y20wcElIdGNiaUFnSUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTB1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCa1pXWmhkV3gwVm1Gc2RXVWdQU0FvYTJWNUlEMDlQU0FuYzJOaGJHVW5LU0EvSUNjeEp5QTZJQ2N3Snp0Y2JpQWdJQ0FnSUNBZ2NISnZjSE11ZEhKaGJuTm1iM0p0SUNzOUlIUnlZVzV6Wm05eWJWdHJaWGxkTG5KbGNHeGhZMlVvTDNWdVpHVm1hVzVsWkM5bkxDQmtaV1poZFd4MFZtRnNkV1VwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ3Y205d2N6dGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL2luYy92YWx1ZS10eXBlcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGZpbGw6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzdHJva2U6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzY2FsZTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWDogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIGQ6IF92YWx1ZVR5cGVzLmNvbXBsZXgsXG4gIHBvaW50czogX3ZhbHVlVHlwZXMuY29tcGxleCxcbiAgb3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGEsXG4gIGZpbGxPcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYSxcbiAgc3Ryb2tlT3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGFcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MM1poYkhWbExYUjVjR1Z6TG1weklsMHNJbTVoYldWeklqcGJJbVpwYkd3aUxDSnpkSEp2YTJVaUxDSnpZMkZzWlNJc0luTmpZV3hsV0NJc0luTmpZV3hsV1NJc0ltUWlMQ0p3YjJsdWRITWlMQ0p2Y0dGamFYUjVJaXdpWm1sc2JFOXdZV05wZEhraUxDSnpkSEp2YTJWUGNHRmphWFI1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPMnRDUVVWbE8wRkJRMkpCTEhsQ1FVUmhPMEZCUldKRExESkNRVVpoTzBGQlIySkRMREJDUVVoaE8wRkJTV0pETERKQ1FVcGhPMEZCUzJKRExESkNRVXhoTzBGQlRXSkRMSGRDUVU1aE8wRkJUMkpETERaQ1FWQmhPMEZCVVdKRExEUkNRVkpoTzBGQlUySkRMR2REUVZSaE8wRkJWV0pETzBGQlZtRXNReUlzSW1acGJHVWlPaUoyWVd4MVpTMTBlWEJsY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGeWN5NW9ZV3hzTDFCeWIycGxZM1J6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHRnNjR2hoTENCamIyeHZjaXdnWTI5dGNHeGxlQ3dnYzJOaGJHVWdmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkbUZzZFdVdGRIbHdaWE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJR1pwYkd3NklHTnZiRzl5TEZ4dUlDQnpkSEp2YTJVNklHTnZiRzl5TEZ4dUlDQnpZMkZzWlRvZ2MyTmhiR1VzWEc0Z0lITmpZV3hsV0RvZ2MyTmhiR1VzWEc0Z0lITmpZV3hsV1RvZ2MyTmhiR1VzWEc0Z0lHUTZJR052YlhCc1pYZ3NYRzRnSUhCdmFXNTBjem9nWTI5dGNHeGxlQ3hjYmlBZ2IzQmhZMmwwZVRvZ1lXeHdhR0VzWEc0Z0lHWnBiR3hQY0dGamFYUjVPaUJoYkhCb1lTeGNiaUFnYzNSeWIydGxUM0JoWTJsMGVUb2dZV3h3YUdGY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnQsIGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCAqIGxlbmd0aCArICdweCc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RhdGUsIGxlbmd0aCkge1xuICB2YXIgc3R5bGVzID0ge307XG4gIHZhciBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgbGVuZ3RoOiAwLFxuICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgfTtcbiAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkxYQmhkR2d2WW5WcGJHUXVhbk1pWFN3aWJtRnRaWE1pT2xzaWNHVnlZMlZ1ZEZSdlVHbDRaV3h6SWl3aWNHVnlZMlZ1ZENJc0lteGxibWQwYUNJc0luQmhjbk5sUm14dllYUWlMQ0p6ZEdGMFpTSXNJbk4wZVd4bGN5SXNJbVJoYzJoQmNuSmhlVk4wZVd4bGN5SXNJbk53WVdOcGJtY2lMQ0pvWVhORVlYTm9RWEp5WVhraUxDSnJaWGtpTENKb1lYTlBkMjVRY205d1pYSjBlU0lzSW5aaGJIVmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVRzN096czdPMEZCVFVFc1NVRkJUVUVzYTBKQlFXdENMRlZCUVVORExFOUJRVVFzUlVGQlZVTXNUVUZCVmp0QlFVRkJMRk5CUVhOQ1F5eFhRVUZYUml4UFFVRllMRWxCUVhOQ0xFZEJRWFpDTEVkQlFUaENReXhOUVVFNVFpeEhRVUYxUXl4SlFVRTFSRHRCUVVGQkxFTkJRWGhDT3p0clFrRkZaU3hWUVVGRFJTeExRVUZFTEVWQlFWRkdMRTFCUVZJc1JVRkJiVUk3UVVGRGFFTXNUVUZCVFVjc1UwRkJVeXhGUVVGbU8wRkJRMEVzVFVGQlRVTXNhMEpCUVd0Q08wRkJRM1JDU2l4WlFVRlJMRU5CUkdNN1FVRkZkRUpMTEdGQlFWTk1MRk5CUVZNN1FVRkdTU3hIUVVGNFFqdEJRVWxCTEUxQlFVbE5MR1ZCUVdVc1MwRkJia0k3TzBGQlJVRXNUMEZCU3l4SlFVRkpReXhIUVVGVUxFbEJRV2RDVEN4TFFVRm9RaXhGUVVGMVFqdEJRVU55UWl4UlFVRkpRU3hOUVVGTlRTeGpRVUZPTEVOQlFYRkNSQ3hIUVVGeVFpeERRVUZLTEVWQlFTdENPMEZCUXpkQ0xGVkJRVTFGTEZGQlFWRlFMRTFCUVUxTExFZEJRVTRzUTBGQlpEczdRVUZGUVN4alFVRlJRU3hIUVVGU08wRkJRMEVzWVVGQlN5eFJRVUZNTzBGQlEwRXNZVUZCU3l4VFFVRk1PMEZCUTBWRUxIbENRVUZsTEVsQlFXWTdRVUZEUVVZc01FSkJRV2RDUnl4SFFVRm9RaXhKUVVGMVFsUXNaMEpCUVdkQ1Z5eExRVUZvUWl4RlFVRjFRbFFzVFVGQmRrSXNRMEZCZGtJN1FVRkRRVHRCUVVOR0xHRkJRVXNzVVVGQlREdEJRVU5GUnl4cFFrRkJUeXh0UWtGQlVDeEpRVUU0UWt3c1owSkJRV2RDTEVOQlFVTlhMRXRCUVdwQ0xFVkJRWGRDVkN4TlFVRjRRaXhEUVVFNVFqdEJRVU5CTzBGQlEwWTdRVUZEUlVjc2FVSkJRVTlKTEVkQlFWQXNTVUZCWTBVc1MwRkJaRHRCUVZaR08wRkJXVVE3UVVGRFJqczdRVUZGUkN4TlFVRkpTQ3haUVVGS0xFVkJRV3RDTzBGQlEyaENTQ3hYUVVGUExHdENRVUZRTEVsQlFUWkNReXhuUWtGQlowSktMRTFCUVdoQ0xFZEJRWGxDTEVkQlFYcENMRWRCUVN0Q1NTeG5Ra0ZCWjBKRExFOUJRVFZGTzBGQlEwUTdPMEZCUlVRc1UwRkJUMFlzVFVGQlVEdEJRVU5FTEVNaUxDSm1hV3hsSWpvaVluVnBiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoY25NdWFHRnNiQzlRY205cVpXTjBjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0JEYjI1MlpYSjBJSEJsY21ObGJuUmhaMlVnZEc4Z2NHbDRaV3h6WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJsY21ObGJuUmhaMlVnYjJZZ2RHOTBZV3dnYkdWdVozUm9YRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVkc5MFlXd2diR1Z1WjNSb1hHNHFMMXh1WTI5dWMzUWdjR1Z5WTJWdWRGUnZVR2w0Wld4eklEMGdLSEJsY21ObGJuUXNJR3hsYm1kMGFDa2dQVDRnS0hCaGNuTmxSbXh2WVhRb2NHVnlZMlZ1ZENrZ0x5QXhNREFwSUNvZ2JHVnVaM1JvSUNzZ0ozQjRKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hOMFlYUmxMQ0JzWlc1bmRHZ3BJRDArSUh0Y2JpQWdZMjl1YzNRZ2MzUjViR1Z6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJR1JoYzJoQmNuSmhlVk4wZVd4bGN5QTlJSHRjYmlBZ0lDQnNaVzVuZEdnNklEQXNYRzRnSUNBZ2MzQmhZMmx1WnpvZ2JHVnVaM1JvSUNzZ0ozQjRKMXh1SUNCOU8xeHVJQ0JzWlhRZ2FHRnpSR0Z6YUVGeWNtRjVJRDBnWm1Gc2MyVTdYRzVjYmlBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhOMFlYUmxLU0I3WEc0Z0lDQWdhV1lnS0hOMFlYUmxMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdjM1JoZEdWYmEyVjVYVHRjYmx4dUlDQWdJQ0FnYzNkcGRHTm9JQ2hyWlhrcElIdGNiaUFnSUNBZ0lHTmhjMlVnSjJ4bGJtZDBhQ2M2WEc0Z0lDQWdJQ0JqWVhObElDZHpjR0ZqYVc1bkp6cGNiaUFnSUNBZ0lDQWdhR0Z6UkdGemFFRnljbUY1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnWkdGemFFRnljbUY1VTNSNWJHVnpXMnRsZVYwZ1BTQndaWEpqWlc1MFZHOVFhWGhsYkhNb2RtRnNkV1VzSUd4bGJtZDBhQ2s3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdZMkZ6WlNBbmIyWm1jMlYwSnpwY2JpQWdJQ0FnSUNBZ2MzUjViR1Z6V3lkemRISnZhMlV0WkdGemFHOW1abk5sZENkZElEMGdjR1Z5WTJWdWRGUnZVR2w0Wld4ektDMTJZV3gxWlN3Z2JHVnVaM1JvS1R0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0JrWldaaGRXeDBPbHh1SUNBZ0lDQWdJQ0J6ZEhsc1pYTmJhMlY1WFNBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdsbUlDaG9ZWE5FWVhOb1FYSnlZWGtwSUh0Y2JpQWdJQ0J6ZEhsc1pYTmJKM04wY205clpTMWtZWE5vWVhKeVlYa25YU0E5SUdSaGMyaEJjbkpoZVZOMGVXeGxjeTVzWlc1bmRHZ2dLeUFuSUNjZ0t5QmtZWE5vUVhKeVlYbFRkSGxzWlhNdWMzQmhZMmx1Wnp0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCemRIbHNaWE03WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9