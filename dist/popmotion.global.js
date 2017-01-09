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
	exports.svgPath = exports.svg = exports.css = exports.Renderer = exports.value = exports.stagger = exports.tween = exports.pointer = exports.physics = exports.parallel = exports.delay = exports.crossFade = exports.composite = exports.colorTween = exports.chain = exports.blendTweens = exports.Action = exports.valueTypes = exports.transform = exports.easing = exports.calc = exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
	var _framesync = __webpack_require__(18);
	
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
	
	var _actions = __webpack_require__(19);
	
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
	
	var _tween2 = __webpack_require__(15);
	
	var _tween3 = _interopRequireDefault(_tween2);
	
	var _stagger2 = __webpack_require__(16);
	
	var _stagger3 = _interopRequireDefault(_stagger2);
	
	var _value2 = __webpack_require__(17);
	
	var _value3 = _interopRequireDefault(_value2);
	
	var _renderers = __webpack_require__(20);
	
	var _renderers2 = _interopRequireDefault(_renderers);
	
	var _css2 = __webpack_require__(21);
	
	var _css3 = _interopRequireDefault(_css2);
	
	var _svg2 = __webpack_require__(22);
	
	var _svg3 = _interopRequireDefault(_svg2);
	
	var _svgPath2 = __webpack_require__(23);
	
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
	exports.tween = _tween3.default;
	exports.stagger = _stagger3.default;
	exports.value = _value3.default;
	
	// Renderers
	
	exports.Renderer = _renderers2.default;
	exports.css = _css3.default;
	exports.svg = _svg3.default;
	exports.svgPath = _svgPath3.default;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOlsib25GcmFtZVN0YXJ0Iiwib25GcmFtZVVwZGF0ZSIsIm9uRnJhbWVSZW5kZXIiLCJvbkZyYW1lRW5kIiwiY2FuY2VsT25GcmFtZVN0YXJ0IiwiY2FuY2VsT25GcmFtZVVwZGF0ZSIsImNhbmNlbE9uRnJhbWVSZW5kZXIiLCJjYW5jZWxPbkZyYW1lRW5kIiwidGltZVNpbmNlTGFzdEZyYW1lIiwiY3VycmVudEZyYW1lVGltZXN0YW1wIiwiY2FsYyIsImVhc2luZyIsInRyYW5zZm9ybSIsInZhbHVlVHlwZXMiLCJBY3Rpb24iLCJibGVuZFR3ZWVucyIsImNoYWluIiwiY29sb3JUd2VlbiIsImNvbXBvc2l0ZSIsImNyb3NzRmFkZSIsImRlbGF5IiwicGFyYWxsZWwiLCJwaHlzaWNzIiwicG9pbnRlciIsInR3ZWVuIiwic3RhZ2dlciIsInZhbHVlIiwiUmVuZGVyZXIiLCJjc3MiLCJzdmciLCJzdmdQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3NCQUVFQSxZOzs7Ozs7c0JBQ0FDLGE7Ozs7OztzQkFDQUMsYTs7Ozs7O3NCQUNBQyxVOzs7Ozs7c0JBQ0FDLGtCOzs7Ozs7c0JBQ0FDLG1COzs7Ozs7c0JBQ0FDLG1COzs7Ozs7c0JBQ0FDLGdCOzs7Ozs7c0JBQ0FDLGtCOzs7Ozs7c0JBQ0FDLHFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUdVQyxJO1FBQ0FDLE07UUFDQUMsUztRQUNBQyxVOztBQUVaOztRQUNPQyxNO1FBQ0FDLFc7UUFDQUMsSztRQUNBQyxVO1FBQ0FDLFM7UUFDQUMsUztRQUNBQyxLO1FBQ0FDLFE7UUFDQUMsTztRQUNBQyxPO1FBQ0FDLEs7UUFDQUMsTztRQUNBQyxLOztBQUVQOztRQUNPQyxRO1FBQ0FDLEc7UUFDQUMsRztRQUNBQyxPIiwiZmlsZSI6InBvcG1vdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZyYW1lc3luYyBzY2hlZHVsZXJzXG5leHBvcnQge1xuICBvbkZyYW1lU3RhcnQsXG4gIG9uRnJhbWVVcGRhdGUsXG4gIG9uRnJhbWVSZW5kZXIsXG4gIG9uRnJhbWVFbmQsXG4gIGNhbmNlbE9uRnJhbWVTdGFydCxcbiAgY2FuY2VsT25GcmFtZVVwZGF0ZSxcbiAgY2FuY2VsT25GcmFtZVJlbmRlcixcbiAgY2FuY2VsT25GcmFtZUVuZCxcbiAgdGltZVNpbmNlTGFzdEZyYW1lLFxuICBjdXJyZW50RnJhbWVUaW1lc3RhbXBcbn0gZnJvbSAnLi9mcmFtZXN5bmMnO1xuXG5leHBvcnQgKiBhcyBjYWxjIGZyb20gJy4vaW5jL2NhbGMnO1xuZXhwb3J0ICogYXMgZWFzaW5nIGZyb20gJy4vaW5jL2Vhc2luZyc7XG5leHBvcnQgKiBhcyB0cmFuc2Zvcm0gZnJvbSAnLi9pbmMvdHJhbnNmb3JtZXJzJztcbmV4cG9ydCAqIGFzIHZhbHVlVHlwZXMgZnJvbSAnLi9pbmMvdmFsdWUtdHlwZXMnO1xuXG4vLyBBY3Rpb25zXG5leHBvcnQgQWN0aW9uIGZyb20gJy4vYWN0aW9ucyc7XG5leHBvcnQgYmxlbmRUd2VlbnMgZnJvbSAnLi9hY3Rpb25zL2JsZW5kLXR3ZWVucyc7XG5leHBvcnQgY2hhaW4gZnJvbSAnLi9hY3Rpb25zL2NoYWluJztcbmV4cG9ydCBjb2xvclR3ZWVuIGZyb20gJy4vYWN0aW9ucy9jb2xvci10d2Vlbic7XG5leHBvcnQgY29tcG9zaXRlIGZyb20gJy4vYWN0aW9ucy9jb21wb3NpdGUnO1xuZXhwb3J0IGNyb3NzRmFkZSBmcm9tICcuL2FjdGlvbnMvY3Jvc3MtZmFkZSc7XG5leHBvcnQgZGVsYXkgZnJvbSAnLi9hY3Rpb25zL2RlbGF5JztcbmV4cG9ydCBwYXJhbGxlbCBmcm9tICcuL2FjdGlvbnMvcGFyYWxsZWwnO1xuZXhwb3J0IHBoeXNpY3MgZnJvbSAnLi9hY3Rpb25zL3BoeXNpY3MnO1xuZXhwb3J0IHBvaW50ZXIgZnJvbSAnLi9hY3Rpb25zL3BvaW50ZXInO1xuZXhwb3J0IHR3ZWVuIGZyb20gJy4vYWN0aW9ucy90d2Vlbic7XG5leHBvcnQgc3RhZ2dlciBmcm9tICcuL2FjdGlvbnMvc3RhZ2dlcic7XG5leHBvcnQgdmFsdWUgZnJvbSAnLi9hY3Rpb25zL3ZhbHVlJztcblxuLy8gUmVuZGVyZXJzXG5leHBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcnMnO1xuZXhwb3J0IGNzcyBmcm9tICcuL3JlbmRlcmVycy9jc3MnO1xuZXhwb3J0IHN2ZyBmcm9tICcuL3JlbmRlcmVycy9zdmcnO1xuZXhwb3J0IHN2Z1BhdGggZnJvbSAnLi9yZW5kZXJlcnMvc3ZnLXBhdGgnO1xuIl19

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.getValueFromProgress = exports.getProgressFromValue = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(24);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvY2FsYy5qcyJdLCJuYW1lcyI6WyJ0b0RlY2ltYWwiLCJudW0iLCJwcmVjaXNpb24iLCJNYXRoIiwicm91bmQiLCJaRVJPX1BPSU5UIiwieCIsInkiLCJ6IiwiZGlzdGFuY2UxRCIsImEiLCJiIiwiYWJzIiwiYW5nbGUiLCJyYWRpYW5zVG9EZWdyZWVzIiwiYXRhbjIiLCJkZWdyZWVzVG9SYWRpYW5zIiwiZGVncmVlcyIsIlBJIiwiZGlsYXRlIiwiZGlsYXRpb24iLCJkaXN0YW5jZSIsInhEZWx0YSIsInlEZWx0YSIsInpEZWx0YSIsInNxcnQiLCJnZXRQcm9ncmVzc0Zyb21WYWx1ZSIsImZyb20iLCJ0byIsInZhbHVlIiwiZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MiLCJwcm9ncmVzcyIsInBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UiLCJvcmlnaW4iLCJjb3MiLCJzaW4iLCJyYWRpYW5zIiwic21vb3RoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImR1cmF0aW9uIiwic21vb3RoaW5nIiwibWF4Iiwic3BlZWRQZXJGcmFtZSIsInhwcyIsImZyYW1lRHVyYXRpb24iLCJzcGVlZFBlclNlY29uZCIsInZlbG9jaXR5Iiwic3RlcFByb2dyZXNzIiwic3RlcHMiLCJzZWdtZW50IiwidGFyZ2V0IiwicHJvZ3Jlc3NPZlRhcmdldCIsIm1pbiIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOzs7Ozs7O0FBT0EsSUFBTUEsWUFBWSxVQUFDQyxHQUFELEVBQXdCO0FBQUEsTUFBbEJDLFNBQWtCLHVFQUFOLENBQU07O0FBQ3hDQSx1QkFBWSxFQUFaLEVBQWtCQSxTQUFsQjtBQUNBLFNBQU9DLEtBQUtDLEtBQUwsQ0FBV0gsTUFBTUMsU0FBakIsSUFBOEJBLFNBQXJDO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNRyxhQUFhO0FBQ2pCQyxLQUFHLENBRGM7QUFFakJDLEtBQUcsQ0FGYztBQUdqQkMsS0FBRztBQUhjLENBQW5COztBQU1BLElBQU1DLGFB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QUFLdUMsR0FBTCxDQUFTRCxTQUFULEVBQW9CRCxRQUFwQixDQUF6RCxDQUFqRDtBQUFBLENBQWY7O0FBRVA7Ozs7OztBQU1PLElBQU1HLHdDQUFnQixVQUFDQyxHQUFELEVBQU1DLGFBQU47QUFBQSxTQUF5QixrQkFBTUQsR0FBTixDQUFELEdBQWVBLE9BQU8sT0FBT0MsYUFBZCxDQUFmLEdBQThDLENBQXRFO0FBQUEsQ0FBdEI7O0FBRVA7Ozs7OztBQU1PLElBQU1DLDBDQUFpQixVQUFDQyxRQUFELEVBQVdGLGFBQVg7QUFBQSxTQUE2QkUsWUFBWSxPQUFPRixhQUFuQixDQUE3QjtBQUFBLENBQXZCOztBQUVQOzs7Ozs7O0FBT08sSUFBTUcsc0NBQWUsVUFBQ0MsS0FBRCxFQUFRbEIsUUFBUixFQUFxQjtBQUMvQyxNQUFNbUIsVUFBVSxLQUFLRCxRQUFRLENBQWIsQ0FBaEI7QUFDQSxNQUFNRSxTQUFTLElBQUssSUFBSUYsS0FBeEI7QUFDQSxNQUFNRyxtQkFBbUJqRCxLQUFLa0QsR0FBTCxDQUFTdEIsV0FBV29CLE1BQXBCLEVBQTRCLENBQTVCLENBQXpCOztBQUVBLFNBQU9oRCxLQUFLbUQsS0FBTCxDQUFXRixtQkFBbUJGLE9BQTlCLElBQXlDQSxPQUFoRDtBQUNELENBTk0iLCJmaWxlIjoiY2FsYy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG5jb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gIHByZWNpc2lvbiA9IDEwICoqIHByZWNpc2lvbjtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG5cbmNvbnN0IFpFUk9fUE9JTlQgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHo6IDBcbn07XG5cbmNvbnN0IGRpc3RhbmNlMUQgPSAoYSwgYikgPT4gTWF0aC5hYnMoYSAtIGIpO1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICBcbiAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gIGFyZSBhdCAwLDBcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBhbmdsZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBkZWdyZWVzVG9SYWRpYW5zID0gKGRlZ3JlZXMpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuXG4vKlxuICBEaWxhdGVcbiAgXG4gIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICBcbiAgYSAtLS0tLS0tLS0gYlxuICBcbiAgdG9cbiAgXG4gIGEgLS0tLSBiXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbmV4cG9ydCBjb25zdCBkaWxhdGUgPSAoYSwgYiwgZGlsYXRpb24pID0+IGEgKyAoKGIgLSBhKSAqIGRpbGF0aW9uKTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IGRpc3RhbmNlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiB7XG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKGlzTnVtKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICBjb25zdCB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICBjb25zdCB6RGVsdGEgPSAoaXNOdW0oYS56KSkgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KCh4RGVsdGEgKiogMikgKyAoeURlbHRhICoqIDIpICsgKHpEZWx0YSAqKiAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbmV4cG9ydCBjb25zdCBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IChmcm9tLCB0bywgdmFsdWUpID0+ICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG5cbi8qXG4gIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IChmcm9tLCB0bywgcHJvZ3Jlc3MpID0+ICgtIHByb2dyZXNzICogZnJvbSkgKyAocHJvZ3Jlc3MgKiB0bykgKyBmcm9tO1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG5leHBvcnQgY29uc3QgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkgPT4ge1xuICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gIHJldHVybiB7XG4gICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gIH07XG59O1xuXG4vKlxuICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG5leHBvcnQgY29uc3QgcmFkaWFuc1RvRGVncmVlcyA9IChyYWRpYW5zKSA9PiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbmV4cG9ydCBjb25zdCBzbW9vdGggPSAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nID0gMCkgPT4gdG9EZWNpbWFsKG9sZFZhbHVlICsgKGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpKTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlckZyYW1lID0gKHhwcywgZnJhbWVEdXJhdGlvbikgPT4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHN0ZXBQcm9ncmVzcyA9IChzdGVwcywgcHJvZ3Jlc3MpID0+IHtcbiAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgY29uc3QgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpO1xuICBjb25zdCBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuIl19

/***/ },
/* 3 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvZWFzaW5nLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIIiwiY3JlYXRlUmV2ZXJzZWRFYXNpbmciLCJlYXNpbmciLCJwIiwiY3JlYXRlTWlycm9yZWRFYXNpbmciLCJsaW5lYXIiLCJjcmVhdGVFeHBvSW4iLCJwb3dlciIsImVhc2VJbiIsImVhc2VPdXQiLCJlYXNlSW5PdXQiLCJjaXJjSW4iLCJNYXRoIiwic2luIiwiYWNvcyIsImNpcmNPdXQiLCJjaXJjSW5PdXQiLCJjcmVhdGVCYWNrSW4iLCJiYWNrSW4iLCJiYWNrT3V0IiwiYmFja0luT3V0IiwiY3JlYXRlQW50aWNpcGF0ZUVhc2luZyIsImJhY2tFYXNpbmciLCJwb3ciLCJhbnRpY2lwYXRlIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNQSw2QkFBNkIsS0FBbkM7O0FBRU8sSUFBTUMsc0RBQXVCLFVBQUNDLE1BQUQ7QUFBQSxTQUFZLFVBQUNDLENBQUQ7QUFBQSxXQUFPLElBQUlELE9BQU8sSUFBSUMsQ0FBWCxDQUFYO0FBQUEsR0FBWjtBQUFBLENBQTdCO0FBQ0EsSUFBTUMsc0RBQXVCLFVBQUNGLE1BQUQ7QUFBQSxTQUFZLFVBQUNDLENBQUQ7QUFBQSxXQUFRQSxLQUFLLEdBQU4sR0FBYUQsT0FBTyxJQUFJQyxDQUFYLElBQWdCLENBQTdCLEdBQWlDLENBQUMsSUFBSUQsT0FBTyxLQUFLLElBQUlDLENBQVQsQ0FBUCxDQUFMLElBQTRCLENBQXBFO0FBQUEsR0FBWjtBQUFBLENBQTdCOztBQUVBLElBQU1FLDBCQUFTLFVBQUNGLENBQUQ7QUFBQSxTQUFPQSxDQUFQO0FBQUEsQ0FBZjs7QUFFQSxJQUFNRyxzQ0FBZSxVQUFDQyxLQUFEO0FBQUEsU0FBVyxVQUFDSixDQUFEO0FBQUEsb0JBQU9BLENBQVAsRUFBWUksS0FBWjtBQUFBLEdBQVg7QUFBQSxDQUFyQjtBQUNBLElBQU1DLDBCQUFTRixhQUFhLENBQWIsQ0FBZjtBQUNBLElBQU1HLDRCQUFVUixxQkFBcUJPLE1BQXJCLENBQWhCO0FBQ0EsSUFBTUUsZ0NBQVlOLHFCQUFxQkksTUFBckIsQ0FBbEI7O0FBRUEsSUFBTUcsMEJBQVMsVUFBQ1IsQ0FBRDtBQUFBLFNBQU8sSUFBSVMsS0FBS0MsR0FBTCxDQUFTRCxLQUFLRSxJQUFMLENBQVVYLENBQVYsQ0FBVCxDQUFYO0FBQUEsQ0FBZjtBQUNBLElBQU1ZLDRCQUFVZCxxQkFBcUJVLE1BQXJCLENBQWhCO0FBQ0EsSUFBTUssZ0NBQVlaLHFCQUFxQlcsT0FBckIsQ0FBbEI7O0FBRUEsSUFBTUUsc0NBQWUsVUFBQ1YsS0FBRDtBQUFBLFNBQVcsVUFBQ0osQ0FBRDtBQUFBLFdBQVFBLElBQUlBLENBQUwsSUFBVyxDQUFDSSxRQUFRLENBQVQsSUFBY0osQ0FBZCxHQUFrQkksS0FBN0IsQ0FBUDtBQUFBLEdBQVg7QUFBQSxDQUFyQjtBQUNBLElBQU1XLDBCQUFTRCxhQUFhakIsMEJBQWIsQ0FBZjtBQUNBLElBQU1tQiw0QkFBVWxCLHFCQUFxQmlCLE1BQXJCLENBQWhCO0FBQ0EsSUFBTUUsZ0NBQVloQixxQkFBcUJjLE1BQXJCLENBQWxCOztBQUVBLElBQU1HLDBEQUF5QixVQUFDZCxLQUFELEVBQVc7QUFDL0MsTUFBTWUsYUFBYUwsYUFBYVYsS0FBYixDQUFuQjtBQUNBLFNBQU8sVUFBQ0osQ0FBRDtBQUFBLFdBQVEsQ0FBQ0EsS0FBSyxDQUFOLElBQVcsQ0FBWixHQUFpQixNQUFNbUIsV0FBV25CLENBQVgsQ0FBdkIsR0FBdUMsT0FBTyxJQUFJUyxLQUFLVyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxJQUFPcEIsSUFBSSxDQUFYLENBQVosQ0FBWCxDQUE5QztBQUFBLEdBQVA7QUFDRCxDQUhNOztBQUtBLElBQU1xQixrQ0FBYUgsdUJBQXVCckIsMEJBQXZCLENBQW5CIiwiZmlsZSI6ImVhc2luZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIID0gMS41MjU7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXZlcnNlZEVhc2luZyA9IChlYXNpbmcpID0+IChwKSA9PiAxIC0gZWFzaW5nKDEgLSBwKTtcbmV4cG9ydCBjb25zdCBjcmVhdGVNaXJyb3JlZEVhc2luZyA9IChlYXNpbmcpID0+IChwKSA9PiAocCA8PSAwLjUpID8gZWFzaW5nKDIgKiBwKSAvIDIgOiAoMiAtIGVhc2luZygyICogKDEgLSBwKSkpIC8gMjtcblxuZXhwb3J0IGNvbnN0IGxpbmVhciA9IChwKSA9PiBwO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRXhwb0luID0gKHBvd2VyKSA9PiAocCkgPT4gcCAqKiBwb3dlcjtcbmV4cG9ydCBjb25zdCBlYXNlSW4gPSBjcmVhdGVFeHBvSW4oMik7XG5leHBvcnQgY29uc3QgZWFzZU91dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGVhc2VJbik7XG5leHBvcnQgY29uc3QgZWFzZUluT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoZWFzZUluKTtcblxuZXhwb3J0IGNvbnN0IGNpcmNJbiA9IChwKSA9PiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHApKTtcbmV4cG9ydCBjb25zdCBjaXJjT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoY2lyY0luKTtcbmV4cG9ydCBjb25zdCBjaXJjSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhjaXJjT3V0KTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJhY2tJbiA9IChwb3dlcikgPT4gKHApID0+IChwICogcCkgKiAoKHBvd2VyICsgMSkgKiBwIC0gcG93ZXIpO1xuZXhwb3J0IGNvbnN0IGJhY2tJbiA9IGNyZWF0ZUJhY2tJbihERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG5leHBvcnQgY29uc3QgYmFja091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGJhY2tJbik7XG5leHBvcnQgY29uc3QgYmFja0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoYmFja0luKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSAocG93ZXIpID0+IHtcbiAgY29uc3QgYmFja0Vhc2luZyA9IGNyZWF0ZUJhY2tJbihwb3dlcik7XG4gIHJldHVybiAocCkgPT4gKChwICo9IDIpIDwgMSkgPyAwLjUgKiBiYWNrRWFzaW5nKHApIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocCAtIDEpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgYW50aWNpcGF0ZSA9IGNyZWF0ZUFudGljaXBhdGVFYXNpbmcoREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xuIl19

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.blendColor = exports.alpha = exports.color = exports.hsla = exports.rgba = exports.rgbUnit = exports.px = exports.degrees = exports.percent = exports.transformChildValues = exports.steps = exports.wrap = exports.nonlinearSpring = exports.spring = exports.generateNonIntergratedSpring = exports.multiply = exports.divide = exports.add = exports.subtract = exports.interpolate = exports.flow = exports.conditional = exports.clamp = exports.clampMin = exports.clampMax = exports.appendUnit = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _calc = __webpack_require__(2);
	
	var _utils = __webpack_require__(24);
	
	var _parsers = __webpack_require__(25);
	
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
	
	var steps = exports.steps = function (steps, min, max) {
	  return function (v) {
	    var progress = (0, _calc.getProgressFromValue)(min, max, v);
	    return (0, _calc.stepProgress)(steps, progress);
	  };
	};
	
	var transformChildValues = exports.transformChildValues = function (childTransformers) {
	  return function (v) {
	    for (var key in v) {
	      var childTransformer = childTransformers[key];
	      if (childTransformer) {
	        v[key] = childTransformer(v[key]);
	      }
	    }
	
	    return v;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJ2IiwiYXBwZW5kVW5pdCIsInVuaXQiLCJjbGFtcE1heCIsIm1heCIsIk1hdGgiLCJtaW4iLCJjbGFtcE1pbiIsImNsYW1wIiwiX21pbiIsIl9tYXgiLCJjb25kaXRpb25hbCIsImNvbmRpdGlvbiIsImlmVHJ1ZSIsImlmRmFsc2UiLCJhY3Rpb24iLCJmbG93IiwidHJhbnNmb3JtZXJzIiwibnVtVHJhbnNmb3JtZXJzIiwibGVuZ3RoIiwiaSIsImFjYyIsImFyZ3MiLCJpbnRlcnBvbGF0ZSIsImlucHV0Iiwib3V0cHV0IiwicmFuZ2VFYXNpbmciLCJyYW5nZUxlbmd0aCIsImZpbmFsSW5kZXgiLCJwcm9ncmVzc0luUmFuZ2UiLCJlYXNlZFByb2dyZXNzIiwic3VidHJhY3QiLCJvcmlnaW4iLCJhZGQiLCJkaXZpZGUiLCJtdWx0aXBseSIsImdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmciLCJhbHRlckRpc3BsYWNlbWVudCIsImNvbnN0YW50IiwiZGlzcGxhY2VtZW50Iiwic3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQiLCJhYnMiLCJzcHJpbmciLCJub25saW5lYXJTcHJpbmciLCJzcXJ0Iiwid3JhcCIsInJhbmdlU2l6ZSIsInN0ZXBzIiwicHJvZ3Jlc3MiLCJ0cmFuc2Zvcm1DaGlsZFZhbHVlcyIsImNoaWxkVHJhbnNmb3JtZXJzIiwia2V5IiwiY2hpbGRUcmFuc2Zvcm1lciIsInBlcmNlbnQiLCJkZWdyZWVzIiwicHgiLCJyZ2JVbml0Iiwicm91bmQiLCJyZ2JhVGVtcGxhdGUiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJhbHBoYSIsInJnYmEiLCJoc2xhVGVtcGxhdGUiLCJodWUiLCJzYXR1cmF0aW9uIiwibGlnaHRuZXNzIiwiaHNsYSIsInBhcnNlRmxvYXQiLCJjb2xvciIsImhhc093blByb3BlcnR5IiwiYmxlbmQiLCJmcm9tIiwidG8iLCJmcm9tRXhwbyIsInRvRXhw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LFlBQVFuQixJQUFSLEdBQWVXLE1BQU1NLFVBQVVqQixJQUFoQixFQUFzQmtCLFFBQVFsQixJQUE5QixFQUFvQzdELENBQXBDLENBQWY7QUFDQWdGLFlBQVFsQixLQUFSLEdBQWdCLGdDQUFxQmdCLFVBQVVoQixLQUEvQixFQUFzQ2lCLFFBQVFqQixLQUE5QyxFQUFxRDlELENBQXJELENBQWhCO0FBQ0EsV0FBT2dGLE9BQVA7QUFDRCxHQVREO0FBVUQsQ0FoQk0iLCJmaWxlIjoidHJhbnNmb3JtZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCBzdGVwUHJvZ3Jlc3MgfSBmcm9tICcuL2NhbGMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNvbG9yIGFzIHBhcnNlQ29sb3IgfSBmcm9tICcuL3BhcnNlcnMnO1xuXG5jb25zdCBub29wID0gKHYpID0+IHY7XG5cbi8qKlxuICogQXBwZW5kIFVuaXRcbiAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGVuZFxuICogYXBwZW5kVW5pdCgncHgnLCAyMCkgLT4gJzIwcHgnXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVuaXQpXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBhcHBlbmRVbml0ID0gKHVuaXQpID0+ICh2KSA9PiBgJHt2fSR7dW5pdH1gO1xuXG4vKipcbiAqIENsYW1wIHZhbHVlIGJldHdlZW5cbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVzdHJpY3QgYSBnaXZlbiB2YWx1ZSBiZXR3ZWVuIGBtaW5gIGFuZCBgbWF4YFxuICogQHBhcmFtICB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBjbGFtcE1heCA9IChtYXgpID0+ICh2KSA9PiBNYXRoLm1pbih2LCBtYXgpO1xuZXhwb3J0IGNvbnN0IGNsYW1wTWluID0gKG1pbikgPT4gKHYpID0+IE1hdGgubWF4KHYsIG1pbik7XG5leHBvcnQgY29uc3QgY2xhbXAgPSAobWluLCBtYXgpID0+IHtcbiAgY29uc3QgX21pbiA9IGNsYW1wTWluKG1pbik7XG4gIGNvbnN0IF9tYXggPSBjbGFtcE1heChtYXgpO1xuICByZXR1cm4gKHYpID0+IF9taW4oX21heCh2KSk7XG59O1xuXG5leHBvcnQgY29uc3QgY29uZGl0aW9uYWwgPSAoY29uZGl0aW9uLCBpZlRydWUsIGlmRmFsc2UgPSBub29wKSA9PiAodiwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBjb25kaXRpb24odiwgYWN0aW9uKSA/IGlmVHJ1ZSh2LCBhY3Rpb24pIDogaWZGYWxzZSh2LCBhY3Rpb24pO1xufTtcblxuLyoqXG4gKiBGbG93XG4gKiBDb21wb3NlIG90aGVyIHRyYW5zZm9ybWVycyB0byBydW4gbGluZWFyaWx5XG4gKiBmbG93KG1pbigyMCksIG1heCg0MCkpXG4gKiBAcGFyYW0gIHsuLi5mdW5jdGlvbnN9IHRyYW5zZm9ybWVyc1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCBmbG93ID0gKC4uLnRyYW5zZm9ybWVycykgPT4ge1xuICBjb25zdCBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAgcmV0dXJuIChhY2MsIC4uLmFyZ3MpID0+IHtcbiAgICBsZXQgdiA9IGFjYztcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0odiwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xuXG4vKipcbiAqIEludGVycG9sYXRlIGZyb20gc2V0IG9mIHZhbHVlcyB0byBhbm90aGVyXG4gKiBAcGFyYW0gIHtBcnJheX0gaW5wdXQgYXJyYXlcbiAqIEBwYXJhbSAge0FycmF5fSBvdXRwdXRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSByYW5nZUVhc2luZ1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCBpbnRlcnBvbGF0ZSA9IChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykgPT4ge1xuICBjb25zdCByYW5nZUxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgY29uc3QgZmluYWxJbmRleCA9IHJhbmdlTGVuZ3RoIC0gMTtcblxuICByZXR1cm4gKHYpID0+IHtcbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1pbmltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPD0gaW5wdXRbMF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbMF07XG4gICAgfVxuXG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtYXhpbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2ID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgIH1cblxuICAgIGxldCBpID0gMTtcblxuICAgIC8vIEZpbmQgaW5kZXggb2YgcmFuZ2Ugc3RhcnRcbiAgICBmb3IgKDsgaSA8IHJhbmdlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpbnB1dFtpXSA+IHYgfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzc0luUmFuZ2UgPSBnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbnB1dFtpIC0gMV0sIGlucHV0W2ldLCB2KTtcbiAgICBjb25zdCBlYXNlZFByb2dyZXNzID0gKHJhbmdlRWFzaW5nKSA/IHJhbmdlRWFzaW5nW2ldKHByb2dyZXNzSW5SYW5nZSkgOiBwcm9ncmVzc0luUmFuZ2U7XG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKG91dHB1dFtpIC0gMV0sIG91dHB1dFtpXSwgZWFzZWRQcm9ncmVzcyk7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc3VidHJhY3QgPSAob3JpZ2luKSA9PiAodikgPT4gdiAtIG9yaWdpbjtcbmV4cG9ydCBjb25zdCBhZGQgPSAob3JpZ2luKSA9PiAodikgPT4gdiArIG9yaWdpbjtcbmV4cG9ydCBjb25zdCBkaXZpZGUgPSAob3JpZ2luKSA9PiAodikgPT4gdiAvIG9yaWdpbjtcbmV4cG9ydCBjb25zdCBtdWx0aXBseSA9IChvcmlnaW4pID0+ICh2KSA9PiB2ICogb3JpZ2luO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZyA9IChhbHRlckRpc3BsYWNlbWVudCA9IG5vb3ApID0+IChjb25zdGFudCwgb3JpZ2luKSA9PiAodikgPT4ge1xuICBjb25zdCBkaXNwbGFjZW1lbnQgPSBvcmlnaW4gLSB2O1xuICBjb25zdCBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudCA9IC0gY29uc3RhbnQgKiAoMCAtIGFsdGVyRGlzcGxhY2VtZW50KE1hdGguYWJzKGRpc3BsYWNlbWVudCkpKTtcbiAgcmV0dXJuIChkaXNwbGFjZW1lbnQgPD0gMCkgPyBvcmlnaW4gKyBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudCA6IG9yaWdpbiAtIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IHNwcmluZyA9IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcoKTtcbmV4cG9ydCBjb25zdCBub25saW5lYXJTcHJpbmcgPSBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nKE1hdGguc3FydCk7XG5cbmV4cG9ydCBjb25zdCB3cmFwID0gKG1pbiwgbWF4KSA9PiAodikgPT4ge1xuICBjb25zdCByYW5nZVNpemUgPSBtYXggLSBtaW47XG4gIHJldHVybiAoKHYgLSBtaW4pICUgcmFuZ2VTaXplICsgcmFuZ2VTaXplKSAlIHJhbmdlU2l6ZSArIG1pbjtcbn07XG5cbmV4cG9ydCBjb25zdCBzdGVwcyA9IChzdGVwcywgbWluLCBtYXgpID0+ICh2KSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzID0gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUobWluLCBtYXgsIHYpO1xuICByZXR1cm4gc3RlcFByb2dyZXNzKHN0ZXBzLCBwcm9ncmVzcyk7XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSAoY2hpbGRUcmFuc2Zvcm1lcnMpID0+ICh2KSA9PiB7XG4gIGZvciAobGV0IGtleSBpbiB2KSB7XG4gICAgY29uc3QgY2hpbGRUcmFuc2Zvcm1lciA9IGNoaWxkVHJhbnNmb3JtZXJzW2tleV07XG4gICAgaWYgKGNoaWxkVHJhbnNmb3JtZXIpIHtcbiAgICAgIHZba2V5XSA9IGNoaWxkVHJhbnNmb3JtZXIodltrZXldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdjtcbn07XG5cbi8vIFVuaXQgdHJhbnNmb3JtZXJzXG5leHBvcnQgY29uc3QgcGVyY2VudCA9IGFwcGVuZFVuaXQoJyUnKTtcbmV4cG9ydCBjb25zdCBkZWdyZWVzID0gYXBwZW5kVW5pdCgnZGVnJyk7XG5leHBvcnQgY29uc3QgcHggPSBhcHBlbmRVbml0KCdweCcpO1xuXG5leHBvcnQgY29uc3QgcmdiVW5pdCA9IGZsb3coXG4gIGNsYW1wKDAsIDI1NSksXG4gIE1hdGgucm91bmRcbik7XG5cbmNvbnN0IHJnYmFUZW1wbGF0ZSA9ICh7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhID0gMSB9KSA9PiBcbiAgYHJnYmEoJHtyZWR9LCAke2dyZWVufSwgJHtibHVlfSwgJHthbHBoYX0pYDtcblxuZXhwb3J0IGNvbnN0IHJnYmEgPSBmbG93KFxuICB0cmFuc2Zvcm1DaGlsZFZhbHVlcyh7XG4gICAgcmVkOiByZ2JVbml0LFxuICAgIGdyZWVuOiByZ2JVbml0LFxuICAgIGJsdWU6IHJnYlVuaXQsXG4gICAgYWxwaGFcbiAgfSksXG4gIHJnYmFUZW1wbGF0ZVxuKTtcblxuY29uc3QgaHNsYVRlbXBsYXRlID0gKHsgaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGFscGhhID0gMSB9KSA9PiBcbiAgYGhzbGEoJHtodWV9LCAke3NhdHVyYXRpb259LCAke2xpZ2h0bmVzc30sICR7YWxwaGF9KWA7XG5cbmV4cG9ydCBjb25zdCBoc2xhID0gZmxvdyhcbiAgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMoe1xuICAgIGh1ZTogcGFyc2VGbG9hdCxcbiAgICBzYXR1cmF0aW9uOiBwZXJjZW50LFxuICAgIGxpZ2h0bmVzczogcGVyY2VudCxcbiAgICBhbHBoYVxuICB9KSxcbiAgaHNsYVRlbXBsYXRlXG4pO1xuXG5leHBvcnQgY29uc3QgY29sb3IgPSAodikgPT4ge1xuICBpZiAodi5oYXNPd25Qcm9wZXJ0eSgncmVkJykpIHtcbiAgICByZXR1cm4gcmdiYSh2KTtcbiAgfSBlbHNlIGlmICh2Lmhhc093blByb3BlcnR5KCdodWUnKSkge1xuICAgIHJldHVybiBoc2xhKHYpO1xuICB9XG4gIHJldHVybiB2O1xufTtcblxuZXhwb3J0IGNvbnN0IGFscGhhID0gY2xhbXAoMCwgMSk7XG5cbmNvbnN0IGJsZW5kID0gKGZyb20sIHRvLCB2KSA9PiB7XG4gIGNvbnN0IGZyb21FeHBvID0gZnJvbSAqIGZyb207XG4gIGNvbnN0IHRvRXhwbyA9IHRvICogdG87XG4gIHJldHVybiBNYXRoLnNxcnQodiAqICh0b0V4cG8gLSBmcm9tRXhwbykgKyBmcm9tRXhwbyk7XG59O1xuLy8gaHR0cDovL2NvZGVwZW4uaW8vb3N1Ymxha2UvcGVuL3hHVlZhTlxuZXhwb3J0IGNvbnN0IGJsZW5kQ29sb3IgPSAoZnJvbSwgdG8pID0+IHtcbiAgY29uc3QgZnJvbUNvbG9yID0gaXNTdHJpbmcoZnJvbSkgPyBwYXJzZUNvbG9yKGZyb20pIDogZnJvbTtcbiAgY29uc3QgdG9Db2xvciA9IGlzU3RyaW5nKHRvKSA/IHBhcnNlQ29sb3IodG8pOiB0bztcblxuICBjb25zdCBibGVuZGVkID0geyAuLi5mcm9tQ29sb3IgfTtcblxuICByZXR1cm4gKHYpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gYmxlbmRlZCkge1xuICAgICAgYmxlbmRlZFtrZXldID0gYmxlbmQoZnJvbUNvbG9yW2tleV0sIHRvQ29sb3Jba2V5XSwgdik7XG4gICAgfVxuICAgIGJsZW5kZWQucmVkID0gYmxlbmQoZnJvbUNvbG9yLnJlZCwgdG9Db2xvci5yZWQsIHYpO1xuICAgIGJsZW5kZWQuZ3JlZW4gPSBibGVuZChmcm9tQ29sb3IuZ3JlZW4sIHRvQ29sb3IuZ3JlZW4sIHYpO1xuICAgIGJsZW5kZWQuYmx1ZSA9IGJsZW5kKGZyb21Db2xvci5ibHVlLCB0b0NvbG9yLmJsdWUsIHYpO1xuICAgIGJsZW5kZWQuYWxwaGEgPSBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhmcm9tQ29sb3IuYWxwaGEsIHRvQ29sb3IuYWxwaGEsIHYpO1xuICAgIHJldHVybiBibGVuZGVkO1xuICB9O1xufTtcbiJdfQ==

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
	
	var _parsers = __webpack_require__(25);
	
	var _utils = __webpack_require__(24);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdmFsdWUtdHlwZXMuanMiXSwibmFtZXMiOlsibnVtYmVyIiwidGVzdCIsInBhcnNlIiwicGFyc2VGbG9hdCIsImFscGhhIiwidHJhbnNmb3JtIiwiZGVncmVlcyIsInBlcmNlbnQiLCJweCIsInNjYWxlIiwiZGVmYXVsdCIsInJnYlVuaXQiLCJyZ2JhIiwiaGV4IiwiaHNsYSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7OztrUUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7O0FBVUE7O0FBTUE7O0FBU08sSUFBTUEsMEJBQVM7QUFDcEJDLG9CQURvQjtBQUVwQkMsU0FBT0M7QUFGYSxDQUFmOztBQUtQO0FBQ08sSUFBTUMscUNBQ1JKLE1BRFE7QUFFWEs7QUFGVyxFQUFOOztBQUtBLElBQU1DLDRCQUFVLDJCQUFlLEtBQWYsd0JBQWhCO0FBQ0EsSUFBTUMsNEJBQVUsMkJBQWUsR0FBZix3QkFBaEI7QUFDQSxJQUFNQyxrQkFBSywyQkFBZSxJQUFmLG1CQUFYOztBQUVBLElBQU1DLHFDQUNSVCxNQURRO0FBRVhVLFdBQVM7QUFGRSxFQUFOOztBQUtBLElBQU1DLHlDQUNSWCxNQURRO0FBRVhLO0FBRlcsRUFBTjs7QUFLQSxJQUFNTyxzQkFBTztBQUNsQlgsb0JBRGtCO0FBRWxCQyxzQkFGa0I7QUFHbEJHO0FBSGtCLENBQWI7O0FBTUEsSUFBTVEsaUNBQ1JELElBRFE7QUFFWFgsb0JBRlc7QUFHWEM7QUFIVyxFQUFOOztBQU1BLElBQU1ZLHNCQUFPO0FBQ2xCYixvQkFEa0I7QUFFbEJDLHNCQUZrQjtBQUdsQkc7QUFIa0IsQ0FBYjs7QUFNQSxJQUFNVSx3QkFBUTtBQUNuQmIsdUJBRG1CO0FBRW5CRCxzQkFGbUI7QUFHbkJJO0FBSG1CLENBQWQiLCJmaWxlIjoidmFsdWUtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFZhbHVlIHR5cGVzXG4gKlxuICogYWxwaGFcbiAqIGRlZ3JlZXNcbiAqIGhleFxuICogaHNsYVxuICogcGVyY2VudFxuICogcHhcbiAqIHJnYlVuaXRcbiAqIHJnYlxuICogc2NhbGVcbiAqL1xuaW1wb3J0IHtcbiAgcmdiVW5pdCBhcyB0cmFuc2Zvcm1SR0JVbml0LFxuICByZ2JhIGFzIHRyYW5zZm9ybVJnYmEsXG4gIGFscGhhIGFzIHRyYW5zZm9ybUFscGhhLFxuICBoc2xhIGFzIHRyYW5zZm9ybUhzbGEsXG4gIGNvbG9yIGFzIHRyYW5zZm9ybUNvbG9yLFxuICBweCBhcyB0cmFuc2Zvcm1QeCxcbiAgcGVyY2VudCBhcyB0cmFuc2Zvcm1QZXJjZW50LFxuICBkZWdyZWVzIGFzIHRyYW5zZm9ybURlZ3JlZXNcbn0gZnJvbSAnLi90cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHtcbiAgaGV4IGFzIHBhcnNlSGV4LFxuICByZ2JhIGFzIHBhcnNlUmdiYSxcbiAgaHNsYSBhcyBwYXJzZUhzbGEsXG4gIGNvbG9yIGFzIHBhcnNlQ29sb3Jcbn0gZnJvbSAnLi9wYXJzZXJzJztcbmltcG9ydCB7XG4gIGNyZWF0ZVVuaXRUeXBlLFxuICBpc051bSxcbiAgaXNSZ2IsXG4gIGlzSHNsLFxuICBpc0hleCxcbiAgaXNDb2xvclxufSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IG51bWJlciA9IHtcbiAgdGVzdDogaXNOdW0sXG4gIHBhcnNlOiBwYXJzZUZsb2F0XG59O1xuXG4vLyBWYWx1ZSB0eXBlc1xuZXhwb3J0IGNvbnN0IGFscGhhID0ge1xuICAuLi5udW1iZXIsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtQWxwaGFcbn07XG5cbmV4cG9ydCBjb25zdCBkZWdyZWVzID0gY3JlYXRlVW5pdFR5cGUoJ2RlZycsIHRyYW5zZm9ybURlZ3JlZXMpO1xuZXhwb3J0IGNvbnN0IHBlcmNlbnQgPSBjcmVhdGVVbml0VHlwZSgnJScsIHRyYW5zZm9ybVBlcmNlbnQpO1xuZXhwb3J0IGNvbnN0IHB4ID0gY3JlYXRlVW5pdFR5cGUoJ3B4JywgdHJhbnNmb3JtUHgpO1xuXG5leHBvcnQgY29uc3Qgc2NhbGUgPSB7XG4gIC4uLm51bWJlcixcbiAgZGVmYXVsdDogMVxufTtcblxuZXhwb3J0IGNvbnN0IHJnYlVuaXQgPSB7XG4gIC4uLm51bWJlcixcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1SR0JVbml0XG59O1xuXG5leHBvcnQgY29uc3QgcmdiYSA9IHtcbiAgdGVzdDogaXNSZ2IsXG4gIHBhcnNlOiBwYXJzZVJnYmEsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtUmdiYVxufTtcblxuZXhwb3J0IGNvbnN0IGhleCA9IHtcbiAgLi4ucmdiYSxcbiAgdGVzdDogaXNIZXgsXG4gIHBhcnNlOiBwYXJzZUhleFxufTtcblxuZXhwb3J0IGNvbnN0IGhzbGEgPSB7XG4gIHRlc3Q6IGlzSHNsLFxuICBwYXJzZTogcGFyc2VIc2xhLFxuICB0cmFuc2Zvcm06IHRyYW5zZm9ybUhzbGFcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9IHtcbiAgcGFyc2U6IHBhcnNlQ29sb3IsXG4gIHRlc3Q6IGlzQ29sb3IsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtQ29sb3Jcbn07XG4iXX0=

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	var _calc = __webpack_require__(2);
	
	var _transformers = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var clampProgress = (0, _transformers.clamp)(0, 1);
	
	function calcValueAtTime(from, to, duration, elapsed, ease) {
	  var progressAtTime = ease(clampProgress((0, _calc.getProgressFromValue)(0, duration, elapsed)));
	  return (0, _calc.getValueFromProgress)(from, to, progressAtTime);
	}
	
	var TweenBlend = function (_Action) {
	  _inherits(TweenBlend, _Action);
	
	  function TweenBlend() {
	    _classCallCheck(this, TweenBlend);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  TweenBlend.prototype.onStart = function onStart() {
	    var _props = this.props,
	        from = _props.from,
	        to = _props.to,
	        duration = _props.duration,
	        accuracy = _props.accuracy;
	
	    var a = from;
	    var b = to;
	    var aDuration = a.getProp('duration');
	    var bDuration = b.getProp('duration');
	
	    this.progress = 0;
	    this.duration = duration || Math.min(aDuration - a.getElapsed(), bDuration);
	
	    var aEase = a.getProp('ease');
	    var bEase = b.getProp('ease');
	    var aFrom = a.getProp('from');
	    var bFrom = b.getProp('from');
	    var aTo = a.getProp('to');
	    var bTo = b.getProp('to');
	    var bValueAtBlendComplete = calcValueAtTime(bFrom, bTo, bDuration, this.duration, bEase);
	    var bStartsHigherThanA = bFrom > a.get();
	
	    this.blendPoints = [[0, a.get()], [this.duration, bValueAtBlendComplete]];
	
	    // Find tween intersection
	    var timestep = this.duration / accuracy;
	
	    var foundP1 = false;
	    var foundP2 = false;
	
	    for (var i = 0; i < accuracy; i++) {
	      var totalTime = i * timestep;
	
	      var aValueAtTime = calcValueAtTime(aFrom, aTo, aDuration, a.elapsed + totalTime, aEase);
	      var bValueAtTime = calcValueAtTime(bFrom, bTo, bDuration, b.elapsed + totalTime, bEase);
	
	      var hasIntersected = bStartsHigherThanA && aValueAtTime > bValueAtTime || !bStartsHigherThanA && aValueAtTime < bValueAtTime;
	
	      if (!foundP1 && hasIntersected) {
	        this.blendPoints.splice(1, 0, [totalTime, bValueAtTime]);
	        foundP1 = true;
	      }
	
	      var hasIntersectedB = bStartsHigherThanA && aValueAtTime < bValueAtTime || !bStartsHigherThanA && aValueAtTime > bValueAtTime;
	
	      if (foundP1 && hasIntersectedB) {
	        this.blendPoints[2] = [totalTime, bValueAtTime];
	        foundP2 = true;
	      }
	
	      if (foundP2) break;
	    }
	
	    to.start();
	  };
	
	  TweenBlend.prototype.update = function update() {
	    var to = this.props.to;
	
	    var b = to;
	
	    this.progress = clampProgress((0, _calc.getProgressFromValue)(this.blendPoints[0][0], this.blendPoints[2][0], b.getElapsed()));
	
	    if (this.progress >= 1) {
	      return b.get();
	    } else {
	      var aP = (0, _calc.getValueFromProgress)(this.blendPoints[0][1], this.blendPoints[1][1], this.progress);
	      var bP = (0, _calc.getValueFromProgress)(this.blendPoints[1][1], this.blendPoints[2][1], this.progress);
	      return (0, _calc.getValueFromProgress)(aP, bP, this.progress);
	    }
	  };
	
	  TweenBlend.prototype.isActionComplete = function isActionComplete() {
	    var to = this.props.to;
	
	    return !to.isActive();
	  };
	
	  return TweenBlend;
	}(_2.default);
	
	TweenBlend.defaultProps = {
	  accuracy: 60
	};
	
	exports.default = function (props) {
	  return new TweenBlend(props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyJdLCJuYW1lcyI6WyJjbGFtcFByb2dyZXNzIiwiY2FsY1ZhbHVlQXRUaW1lIiwiZnJvbSIsInRvIiwiZHVyYXRpb24iLCJlbGFwc2VkIiwiZWFzZSIsInByb2dyZXNzQXRUaW1lIiwiVHdlZW5CbGVuZCIsIm9uU3RhcnQiLCJwcm9wcyIsImFjY3VyYWN5IiwiYSIsImIiLCJhRHVyYXRpb24iLCJnZXRQcm9wIiwiYkR1cmF0aW9uIiwicHJvZ3Jlc3MiLCJNYXRoIiwibWluIiwiZ2V0RWxhcHNlZCIsImFFYXNlIiwiYkVhc2UiLCJhRnJvbSIsImJGcm9tIiwiYVRvIiwiYlRvIiwiYlZhbHVlQXRCbGVuZENvbXBsZXRlIiwiYlN0YXJ0c0hpZ2hlclRoYW5BIiwiZ2V0IiwiYmxlbmRQb2ludHMiLCJ0aW1lc3RlcCIsImZvdW5kUDEiLCJmb3VuZFAyIiwiaSIsInRvdGFsVGltZSIsImFWYWx1ZUF0VGltZSIsImJWYWx1ZUF0VGltZSIsImhhc0ludGVyc2VjdGVkIiwic3BsaWNlIiwiaGFzSW50ZXJzZWN0ZWRCIiwic3RhcnQiLCJ1cGRhdGUiLCJhUCIsImJQIiwiaXNBY3Rpb25Db21wbGV0ZSIsImlzQWN0aXZlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQix5QkFBTSxDQUFOLEVBQVMsQ0FBVCxDQUF0Qjs7QUFFQSxTQUFTQyxlQUFULENBQXlCQyxJQUF6QixFQUErQkMsRUFBL0IsRUFBbUNDLFFBQW5DLEVBQTZDQyxPQUE3QyxFQUFzREMsSUFBdEQsRUFBNEQ7QUFDMUQsTUFBTUMsaUJBQWlCRCxLQUFLTixjQUFjLGdDQUFxQixDQUFyQixFQUF3QkksUUFBeEIsRUFBa0NDLE9BQWxDLENBQWQsQ0FBTCxDQUF2QjtBQUNBLFNBQU8sZ0NBQXFCSCxJQUFyQixFQUEyQkMsRUFBM0IsRUFBK0JJLGNBQS9CLENBQVA7QUFDRDs7SUFFS0MsVTs7Ozs7Ozs7O3VCQUtKQyxPLHNCQUFVO0FBQUEsaUJBQ2lDLEtBQUtDLEtBRHRDO0FBQUEsUUFDQVIsSUFEQSxVQUNBQSxJQURBO0FBQUEsUUFDTUMsRUFETixVQUNNQSxFQUROO0FBQUEsUUFDVUMsUUFEVixVQUNVQSxRQURWO0FBQUEsUUFDb0JPLFFBRHBCLFVBQ29CQSxRQURwQjs7QUFFUixRQUFNQyxJQUFJVixJQUFWO0FBQ0EsUUFBTVcsSUFBSVYsRUFBVjtBQUNBLFFBQU1XLFlBQVlGLEVBQUVHLE9BQUYsQ0FBVSxVQUFWLENBQWxCO0FBQ0EsUUFBTUMsWUFBWUgsRUFBRUUsT0FBRixDQUFVLFVBQVYsQ0FBbEI7O0FBRUEsU0FBS0UsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtiLFFBQUwsR0FBZ0JBLFlBQVljLEtBQUtDLEdBQUwsQ0FDMUJMLFlBQVlGLEVBQUVRLFVBQUYsRUFEYyxFQUUxQkosU0FGMEIsQ0FBNUI7O0FBS0EsUUFBTUssUUFBUVQsRUFBRUcsT0FBRixDQUFVLE1BQVYsQ0FBZDtBQUNBLFFBQU1PLFFBQVFULEVBQUVFLE9BQUYsQ0FBVSxNQUFWLENBQWQ7QUFDQSxRQUFNUSxRQUFRWCxFQUFFRyxPQUFGLENBQVUsTUFBVixDQUFkO0FBQ0EsUUFBTVMsUUFBUVgsRUFBRUUsT0FBRixDQUFVLE1BQVYsQ0FBZDtBQUNBLFFBQU1VLE1BQU1iLEVBQUVHLE9BQUYsQ0FBVSxJQUFWLENBQVo7QUFDQSxRQUFNVyxNQUFNYixFQUFFRSxPQUFGLENBQVUsSUFBVixDQUFaO0FBQ0EsUUFBTVksd0JBQXdCMUIsZ0JBQWdCdUIsS0FBaEIsRUFBdUJFLEdBQXZCLEVBQTRCVixTQUE1QixFQUF1QyxLQUFLWixRQUE1QyxFQUFzRGtCLEtBQXRELENBQTlCO0FBQ0EsUUFBTU0scUJBQXFCSixRQUFRWixFQUFFaUIsR0FBRixFQUFuQzs7QUFFQSxTQUFLQyxXQUFMLEdBQW1CLENBQ2pCLENBQUMsQ0FBRCxFQUFJbEIsRUFBRWlCLEdBQUYsRUFBSixDQURpQixFQUVqQixDQUFDLEtBQUt6QixRQUFOLEVBQWdCdUIscUJBQWhCLENBRmlCLENBQW5COztBQUtBO0FBQ0EsUUFBTUksV0FBVyxLQUFLM0IsUUFBTCxHQUFnQk8sUUFBakM7O0FBRUEsUUFBSXFCLFVBQVUsS0FBZDtBQUNBLFFBQUlDLFVBQVUsS0FBZDs7QUFFQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSXZCLFFBQXBCLEVBQThCdUIsR0FBOUIsRUFBbUM7QUFDakMsVUFBTUMsWUFBWUQsSUFBSUgsUUFBdEI7O0FBRUEsVUFBTUssZUFBZW5DLGdCQUFnQnNCLEtBQWhCLEVBQXVCRSxHQUF2QixFQUE0QlgsU0FBNUIsRUFBdUNGLEVBQUVQLE9BQUYsR0FBWThCLFNBQW5ELEVBQThEZCxLQUE5RCxDQUFyQjtBQUNBLFVBQU1nQixlQUFlcEMsZ0JBQWdCdUIsS0FBaEIsRUFBdUJFLEdBQXZCLEVBQTRCVixTQUE1QixFQUF1Q0gsRUFBRVIsT0FBRixHQUFZOEIsU0FBbkQsRUFBOERiLEtBQTlELENBQXJCOztBQUVBLFVBQU1nQixpQkFDSFYsc0JBQXNCUSxlQUFlQyxZQUF0QyxJQUNDLENBQUNULGtCQUFELElBQXVCUSxlQUFlQyxZQUZ6Qzs7QUFLQSxVQUFJLENBQUNMLE9BQUQsSUFBWU0sY0FBaEIsRUFBZ0M7QUFDOUIsYUFBS1IsV0FBTCxDQUFpQlMsTUFBakIsQ0FBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBQ0osU0FBRCxFQUFZRSxZQUFaLENBQTlCO0FBQ0FMLGtCQUFVLElBQVY7QUFDRDs7QUFFRCxVQUFNUSxrQkFDSFosc0JBQXNCUSxlQUFlQyxZQUF0QyxJQUNDLENBQUNULGtCQUFELElBQXVCUSxlQUFlQyxZQUZ6Qzs7QUFLQSxVQUFJTCxXQUFXUSxlQUFmLEVBQWdDO0FBQzlCLGFBQUtWLFdBQUwsQ0FBaUIsQ0FBakIsSUFBc0IsQ0FBQ0ssU0FBRCxFQUFZRSxZQUFaLENBQXRCO0FBQ0FKLGtCQUFVLElBQVY7QUFDRDs7QUFFRCxVQUFJQSxPQUFKLEVBQWE7QUFDZDs7QUFFRDlCLE9BQUdzQyxLQUFIO0FBQ0QsRzs7dUJBRURDLE0scUJBQVM7QUFBQSxRQUNDdkMsRUFERCxHQUNRLEtBQUtPLEtBRGIsQ0FDQ1AsRUFERDs7QUFFUCxRQUFNVSxJQUFJVixFQUFWOztBQUVBLFNBQUtjLFFBQUwsR0FBZ0JqQixjQUFjLGdDQUFxQixLQUFLOEIsV0FBTCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUFyQixFQUE2QyxLQUFLQSxXQUFMLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQTdDLEVBQXFFakIsRUFBRU8sVUFBRixFQUFyRSxDQUFkLENBQWhCOztBQUVBLFFBQUksS0FBS0gsUUFBTCxJQUFpQixDQUFyQixFQUF3QjtBQUN0QixhQUFPSixFQUFFZ0IsR0FBRixFQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBTWMsS0FBSyxnQ0FBcUIsS0FBS2IsV0FBTCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUFyQixFQUE2QyxLQUFLQSxXQUFMLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQTdDLEVBQXFFLEtBQUtiLFFBQTFFLENBQVg7QUFDQSxVQUFNMkIsS0FBSyxnQ0FBcUIsS0FBS2QsV0FBTCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUFyQixFQUE2QyxLQUFLQSxXQUFMLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQTdDLEVBQXFFLEtBQUtiLFFBQTFFLENBQVg7QUFDQSxhQUFPLGdDQUFxQjBCLEVBQXJCLEVBQXlCQyxFQUF6QixFQUE2QixLQUFLM0IsUUFBbEMsQ0FBUDtBQUNEO0FBQ0YsRzs7dUJBRUQ0QixnQiwrQkFBbUI7QUFBQSxRQUNUMUMsRUFEUyxHQUNGLEtBQUtPLEtBREgsQ0FDVFAsRUFEUzs7QUFFakIsV0FBTyxDQUFDQSxHQUFHMkMsUUFBSCxFQUFSO0FBQ0QsRzs7Ozs7QUF4Rkd0QyxVLENBQ0d1QyxZLEdBQWU7QUFDcEJwQyxZQUFVO0FBRFUsQzs7a0JBMEZULFVBQUNELEtBQUQ7QUFBQSxTQUFXLElBQUlGLFVBQUosQ0FBZUUsS0FBZixDQUFYO0FBQUEsQyIsImZpbGUiOiJibGVuZC10d2VlbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGNsYW1wIH0gZnJvbSAnLi4vaW5jL3RyYW5zZm9ybWVycyc7XG5cbmNvbnN0IGNsYW1wUHJvZ3Jlc3MgPSBjbGFtcCgwLCAxKTtcblxuZnVuY3Rpb24gY2FsY1ZhbHVlQXRUaW1lKGZyb20sIHRvLCBkdXJhdGlvbiwgZWxhcHNlZCwgZWFzZSkge1xuICBjb25zdCBwcm9ncmVzc0F0VGltZSA9IGVhc2UoY2xhbXBQcm9ncmVzcyhnZXRQcm9ncmVzc0Zyb21WYWx1ZSgwLCBkdXJhdGlvbiwgZWxhcHNlZCkpKTtcbiAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGZyb20sIHRvLCBwcm9ncmVzc0F0VGltZSk7XG59XG5cbmNsYXNzIFR3ZWVuQmxlbmQgZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFjY3VyYWN5OiA2MFxuICB9O1xuXG4gIG9uU3RhcnQoKSB7XG4gICAgY29uc3QgeyBmcm9tLCB0bywgZHVyYXRpb24sIGFjY3VyYWN5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGEgPSBmcm9tO1xuICAgIGNvbnN0IGIgPSB0bztcbiAgICBjb25zdCBhRHVyYXRpb24gPSBhLmdldFByb3AoJ2R1cmF0aW9uJyk7XG4gICAgY29uc3QgYkR1cmF0aW9uID0gYi5nZXRQcm9wKCdkdXJhdGlvbicpO1xuXG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uIHx8IE1hdGgubWluKFxuICAgICAgYUR1cmF0aW9uIC0gYS5nZXRFbGFwc2VkKCksXG4gICAgICBiRHVyYXRpb25cbiAgICApO1xuXG4gICAgY29uc3QgYUVhc2UgPSBhLmdldFByb3AoJ2Vhc2UnKTtcbiAgICBjb25zdCBiRWFzZSA9IGIuZ2V0UHJvcCgnZWFzZScpO1xuICAgIGNvbnN0IGFGcm9tID0gYS5nZXRQcm9wKCdmcm9tJyk7XG4gICAgY29uc3QgYkZyb20gPSBiLmdldFByb3AoJ2Zyb20nKTtcbiAgICBjb25zdCBhVG8gPSBhLmdldFByb3AoJ3RvJyk7XG4gICAgY29uc3QgYlRvID0gYi5nZXRQcm9wKCd0bycpO1xuICAgIGNvbnN0IGJWYWx1ZUF0QmxlbmRDb21wbGV0ZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIHRoaXMuZHVyYXRpb24sIGJFYXNlKTtcbiAgICBjb25zdCBiU3RhcnRzSGlnaGVyVGhhbkEgPSBiRnJvbSA+IGEuZ2V0KCk7XG5cbiAgICB0aGlzLmJsZW5kUG9pbnRzID0gW1xuICAgICAgWzAsIGEuZ2V0KCldLFxuICAgICAgW3RoaXMuZHVyYXRpb24sIGJWYWx1ZUF0QmxlbmRDb21wbGV0ZV1cbiAgICBdO1xuXG4gICAgLy8gRmluZCB0d2VlbiBpbnRlcnNlY3Rpb25cbiAgICBjb25zdCB0aW1lc3RlcCA9IHRoaXMuZHVyYXRpb24gLyBhY2N1cmFjeTtcblxuICAgIGxldCBmb3VuZFAxID0gZmFsc2U7XG4gICAgbGV0IGZvdW5kUDIgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjdXJhY3k7IGkrKykge1xuICAgICAgY29uc3QgdG90YWxUaW1lID0gaSAqIHRpbWVzdGVwO1xuXG4gICAgICBjb25zdCBhVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYUZyb20sIGFUbywgYUR1cmF0aW9uLCBhLmVsYXBzZWQgKyB0b3RhbFRpbWUsIGFFYXNlKTtcbiAgICAgIGNvbnN0IGJWYWx1ZUF0VGltZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIGIuZWxhcHNlZCArIHRvdGFsVGltZSwgYkVhc2UpO1xuXG4gICAgICBjb25zdCBoYXNJbnRlcnNlY3RlZCA9IChcbiAgICAgICAgKGJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPiBiVmFsdWVBdFRpbWUpIHx8XG4gICAgICAgICghYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA8IGJWYWx1ZUF0VGltZSlcbiAgICAgICk7XG5cbiAgICAgIGlmICghZm91bmRQMSAmJiBoYXNJbnRlcnNlY3RlZCkge1xuICAgICAgICB0aGlzLmJsZW5kUG9pbnRzLnNwbGljZSgxLCAwLCBbdG90YWxUaW1lLCBiVmFsdWVBdFRpbWVdKTtcbiAgICAgICAgZm91bmRQMSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhc0ludGVyc2VjdGVkQiA9IChcbiAgICAgICAgKGJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPCBiVmFsdWVBdFRpbWUpIHx8XG4gICAgICAgICghYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA+IGJWYWx1ZUF0VGltZSlcbiAgICAgICk7XG5cbiAgICAgIGlmIChmb3VuZFAxICYmIGhhc0ludGVyc2VjdGVkQikge1xuICAgICAgICB0aGlzLmJsZW5kUG9pbnRzWzJdID0gW3RvdGFsVGltZSwgYlZhbHVlQXRUaW1lXTtcbiAgICAgICAgZm91bmRQMiA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VuZFAyKSBicmVhaztcbiAgICB9XG5cbiAgICB0by5zdGFydCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHsgdG8gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYiA9IHRvO1xuXG4gICAgdGhpcy5wcm9ncmVzcyA9IGNsYW1wUHJvZ3Jlc3MoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUodGhpcy5ibGVuZFBvaW50c1swXVswXSwgdGhpcy5ibGVuZFBvaW50c1syXVswXSwgYi5nZXRFbGFwc2VkKCkpKTtcblxuICAgIGlmICh0aGlzLnByb2dyZXNzID49IDEpIHtcbiAgICAgIHJldHVybiBiLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhUCA9IGdldFZhbHVlRnJvbVByb2dyZXNzKHRoaXMuYmxlbmRQb2ludHNbMF1bMV0sIHRoaXMuYmxlbmRQb2ludHNbMV1bMV0sIHRoaXMucHJvZ3Jlc3MpO1xuICAgICAgY29uc3QgYlAgPSBnZXRWYWx1ZUZyb21Qcm9ncmVzcyh0aGlzLmJsZW5kUG9pbnRzWzFdWzFdLCB0aGlzLmJsZW5kUG9pbnRzWzJdWzFdLCB0aGlzLnByb2dyZXNzKTtcbiAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhhUCwgYlAsIHRoaXMucHJvZ3Jlc3MpO1xuICAgIH1cbiAgfVxuXG4gIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgY29uc3QgeyB0byB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gIXRvLmlzQWN0aXZlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgVHdlZW5CbGVuZChwcm9wcyk7XG4iXX0=

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(19);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NoYWluLmpzIl0sIm5hbWVzIjpbIkNoYWluIiwicHJvcHMiLCJwbGF5TmV4dCIsImJpbmQiLCJvblN0YXJ0IiwiaSIsInBsYXlDdXJyZW50Iiwib3JkZXIiLCJsZW5ndGgiLCJjb21wbGV0ZSIsIl9vbkNvbXBsZXRlIiwic3RhcnQiLCJvblN0b3AiLCJzdG9wIiwib25Db21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTUEsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsbUJBQU1BLEtBQU4sQ0FEaUI7O0FBRWpCLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLE9BQWhCO0FBRmlCO0FBR2xCOztrQkFFREMsTyxzQkFBVTtBQUNSLFNBQUtILEtBQUwsQ0FBV0ksQ0FBWCxHQUFlLENBQWY7QUFDQSxTQUFLQyxXQUFMO0FBQ0QsRzs7a0JBRURKLFEsdUJBQVc7QUFBQSxpQkFDWSxLQUFLRCxLQURqQjtBQUFBLFFBQ0RJLENBREMsVUFDREEsQ0FEQztBQUFBLFFBQ0VFLEtBREYsVUFDRUEsS0FERjs7QUFFVCxRQUFJRixJQUFJRSxNQUFNQyxNQUFOLEdBQWUsQ0FBdkIsRUFBMEI7QUFDeEIsV0FBS1AsS0FBTCxDQUFXSSxDQUFYO0FBQ0EsV0FBS0MsV0FBTDtBQUNELEtBSEQsTUFHTztBQUNMLFdBQUtHLFFBQUw7QUFDRDtBQUNGLEc7O2tCQUVESCxXLDBCQUFjO0FBQUEsa0JBQ1MsS0FBS0wsS0FEZDtBQUFBLFFBQ0pJLENBREksV0FDSkEsQ0FESTtBQUFBLFFBQ0RFLEtBREMsV0FDREEsS0FEQzs7QUFFWkEsVUFBTUYsQ0FBTixFQUFTSixLQUFULENBQWVTLFdBQWYsR0FBNkIsS0FBS1IsUUFBbEM7QUFDQUssVUFBTUYsQ0FBTixFQUFTTSxLQUFUO0FBQ0QsRzs7a0JBRURDLE0scUJBQVM7QUFBQSxrQkFDYyxLQUFLWCxLQURuQjtBQUFBLFFBQ0NJLENBREQsV0FDQ0EsQ0FERDtBQUFBLFFBQ0lFLEtBREosV0FDSUEsS0FESjs7QUFFUEEsVUFBTUYsQ0FBTixFQUFTUSxJQUFUO0FBQ0QsRzs7Ozs7a0JBR1ksVUFBQ04sS0FBRCxFQUFRTyxVQUFSO0FBQUEsU0FBdUIsSUFBSWQsS0FBSixDQUFVLEVBQUVPLFlBQUYsRUFBU08sc0JBQVQsRUFBVixDQUF2QjtBQUFBLEMiLCJmaWxlIjoiY2hhaW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcblxuY2xhc3MgQ2hhaW4gZXh0ZW5kcyBBY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnBsYXlOZXh0ID0gdGhpcy5wbGF5TmV4dC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICB0aGlzLnByb3BzLmkgPSAwO1xuICAgIHRoaXMucGxheUN1cnJlbnQoKTtcbiAgfVxuXG4gIHBsYXlOZXh0KCkge1xuICAgIGNvbnN0IHsgaSwgb3JkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGkgPCBvcmRlci5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnByb3BzLmkrKztcbiAgICAgIHRoaXMucGxheUN1cnJlbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHBsYXlDdXJyZW50KCkge1xuICAgIGNvbnN0IHsgaSwgb3JkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgb3JkZXJbaV0ucHJvcHMuX29uQ29tcGxldGUgPSB0aGlzLnBsYXlOZXh0O1xuICAgIG9yZGVyW2ldLnN0YXJ0KCk7XG4gIH1cblxuICBvblN0b3AoKSB7XG4gICAgY29uc3QgeyBpLCBvcmRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBvcmRlcltpXS5zdG9wKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKG9yZGVyLCBvbkNvbXBsZXRlKSA9PiBuZXcgQ2hhaW4oeyBvcmRlciwgb25Db21wbGV0ZSB9KTtcbiJdfQ==

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _tween = __webpack_require__(15);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbG9yLXR3ZWVuLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJwcm9wcyIsImZyb20iLCJ0byIsIm9uVXBkYXRlIiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsT0FBTyxZQUFNLENBQUUsQ0FBckI7O2tCQUVlLFVBQUNDLEtBQUQsRUFBVztBQUN4QixTQUFPLGtDQUNGQSxLQURFO0FBRUxDLFVBQU0sQ0FGRDtBQUdMQyxRQUFJLENBSEM7QUFJTEMsY0FBVSx3QkFDUiw4QkFBV0gsTUFBTUMsSUFBakIsRUFBdUJELE1BQU1FLEVBQTdCLENBRFEsRUFFUixrQkFBTUUsU0FGRSxFQUdSSixNQUFNRyxRQUFOLElBQWtCSixJQUhWO0FBSkwsS0FBUDtBQVVELEMiLCJmaWxlIjoiY29sb3ItdHdlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHdlZW4gZnJvbSAnLi90d2Vlbic7XG5pbXBvcnQgeyBibGVuZENvbG9yLCBmbG93IH0gZnJvbSAnLi4vaW5jL3RyYW5zZm9ybWVycyc7XG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uL2luYy92YWx1ZS10eXBlcyc7XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIHJldHVybiB0d2Vlbih7XG4gICAgLi4ucHJvcHMsXG4gICAgZnJvbTogMCxcbiAgICB0bzogMSxcbiAgICBvblVwZGF0ZTogZmxvdyhcbiAgICAgIGJsZW5kQ29sb3IocHJvcHMuZnJvbSwgcHJvcHMudG8pLFxuICAgICAgY29sb3IudHJhbnNmb3JtLFxuICAgICAgcHJvcHMub25VcGRhdGUgfHwgbm9vcFxuICAgIClcbiAgfSk7XG59O1xuIl19

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(18);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qcyJdLCJuYW1lcyI6WyJDb21wb3NpdGVBY3Rpb24iLCJwcm9wcyIsImFjdGlvbnMiLCJyZW1haW5pbmdQcm9wcyIsImN1cnJlbnQiLCJhY3Rpb25LZXlzIiwiYWRkQWN0aW9ucyIsImtleSIsImluZGV4T2YiLCJwdXNoIiwib25VcGRhdGUiLCJ2IiwiZ2V0Iiwic2V0UHJvcHMiLCJfb25TdG9wIiwibnVtQWN0aXZlQWN0aW9ucyIsImFkZExpc3RlbmVyIiwib25TdGFydCIsImxlbmd0aCIsImZvckVhY2giLCJzdGFydCIsIm9uU3RvcCIsInN0b3AiLCJnZXRWZWxvY2l0eSIsInZlbG9jaXR5IiwiaXNBY3Rpb25Db21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLGU7OztBQUNKLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsUUFDVEMsT0FEUyxHQUNzQkQsS0FEdEIsQ0FDVEMsT0FEUztBQUFBLFFBQ0dDLGNBREgsNEJBQ3NCRixLQUR0Qjs7QUFBQSxpREFFakIsbUJBQU1FLGNBQU4sQ0FGaUI7O0FBR2pCLFVBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFVBQUtDLFVBQUwsQ0FBZ0JMLE1BQU1DLE9BQXRCO0FBTGlCO0FBTWxCOzs0QkFFREksVSx1QkFBV0osTyxFQUFTO0FBQUE7O0FBQUEsMEJBQ1BLLEdBRE87QUFFaEIsVUFBSSxPQUFLRixVQUFMLENBQWdCRyxPQUFoQixDQUF3QkQsR0FBeEIsTUFBaUMsQ0FBQyxDQUF0QyxFQUF5QztBQUN2QyxlQUFLRixVQUFMLENBQWdCSSxJQUFoQixDQUFxQkYsR0FBckI7QUFDRDs7QUFFRCxhQUFLQSxHQUFMLElBQVlMLFFBQVFLLEdBQVIsQ0FBWjs7QUFFQSxVQUFNRyxXQUFXLFVBQUNDLENBQUQ7QUFBQSxlQUFPLE9BQUtQLE9BQUwsQ0FBYUcsR0FBYixJQUFvQkksQ0FBM0I7QUFBQSxPQUFqQixDQUE4Qzs7QUFFOUM7QUFDQUQsZUFBUyxPQUFLSCxHQUFMLEVBQVVLLEdBQVYsRUFBVDs7QUFFQSxhQUFLTCxHQUFMLEVBQ0dNLFFBREgsQ0FDWTtBQUNSQyxpQkFBUztBQUFBLGlCQUFNLE9BQUtDLGdCQUFMLEVBQU47QUFBQTtBQURELE9BRFosRUFJR0MsV0FKSCxDQUllTixRQUpmO0FBYmdCOztBQUNsQixTQUFLLElBQU1ILEdBQVgsSUFBa0JMLE9BQWxCLEVBQTJCO0FBQUEsWUFBaEJLLEdBQWdCO0FBaUIxQjtBQUNGLEc7OzRCQUVEVSxPLHNCQUFVO0FBQUE7O0FBQ1IsU0FBS0YsZ0JBQUwsR0FBd0IsS0FBS1YsVUFBTCxDQUFnQmEsTUFBeEM7QUFDQSxTQUFLYixVQUFMLENBQWdCYyxPQUFoQixDQUF3QixVQUFDWixHQUFEO0FBQUEsYUFBUyxPQUFLQSxHQUFMLEVBQVVhLEtBQVYsRUFBVDtBQUFBLEtBQXhCO0FBQ0QsRzs7NEJBRURDLE0scUJBQVM7QUFBQTs7QUFDUCxTQUFLaEIsVUFBTCxDQUFnQmMsT0FBaEIsQ0FBd0IsVUFBQ1osR0FBRDtBQUFBLGFBQVMsT0FBS0EsR0FBTCxFQUFVZSxJQUFWLEVBQVQ7QUFBQSxLQUF4QjtBQUNELEc7OzRCQUVEQyxXLDBCQUFjO0FBQUE7O0FBQ1osUUFBTUMsV0FBVyxFQUFqQjtBQUNBLFNBQUtuQixVQUFMLENBQWdCYyxPQUFoQixDQUF3QixVQUFDWixHQUFEO0FBQUEsYUFBU2lCLFNBQVNqQixHQUFULElBQWdCLE9BQUtBLEdBQUwsRUFBVWdCLFdBQVYsRUFBekI7QUFBQSxLQUF4QjtBQUNBLFdBQU9DLFFBQVA7QUFDRCxHOzs0QkFFREMsZ0IsK0JBQW1CO0FBQ2pCLFdBQVEsS0FBS1YsZ0JBQUwsS0FBMEIsQ0FBbEM7QUFDRCxHOzs7OztrQkFHWSxVQUFDYixPQUFELEVBQVVELEtBQVYsRUFBb0I7QUFDakMsU0FBTyxJQUFJRCxlQUFKO0FBQ0xFO0FBREssS0FFRkQsS0FGRSxFQUFQO0FBSUQsQyIsImZpbGUiOiJjb21wb3NpdGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IG9uRnJhbWVVcGRhdGUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuXG5jbGFzcyBDb21wb3NpdGVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIGNvbnN0IHsgYWN0aW9ucywgLi4ucmVtYWluaW5nUHJvcHMgfSA9IHByb3BzO1xuICAgIHN1cGVyKHJlbWFpbmluZ1Byb3BzKTtcbiAgICB0aGlzLmN1cnJlbnQgPSB7fTtcbiAgICB0aGlzLmFjdGlvbktleXMgPSBbXTtcbiAgICB0aGlzLmFkZEFjdGlvbnMocHJvcHMuYWN0aW9ucyk7XG4gIH1cblxuICBhZGRBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhY3Rpb25zKSB7XG4gICAgICBpZiAodGhpcy5hY3Rpb25LZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cblxuICAgICAgdGhpc1trZXldID0gYWN0aW9uc1trZXldO1xuXG4gICAgICBjb25zdCBvblVwZGF0ZSA9ICh2KSA9PiB0aGlzLmN1cnJlbnRba2V5XSA9IHY7O1xuXG4gICAgICAvLyBJbW1lZGlhdGVseSB1cGRhdGUgd2l0aCB0aGUgY3VycmVudCBhY3Rpb24gc3RhdGVcbiAgICAgIG9uVXBkYXRlKHRoaXNba2V5XS5nZXQoKSk7XG5cbiAgICAgIHRoaXNba2V5XVxuICAgICAgICAuc2V0UHJvcHMoe1xuICAgICAgICAgIF9vblN0b3A6ICgpID0+IHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tXG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRMaXN0ZW5lcihvblVwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSB0aGlzLmFjdGlvbktleXMubGVuZ3RoO1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKChrZXkpID0+IHRoaXNba2V5XS5zdGFydCgpKTtcbiAgfVxuXG4gIG9uU3RvcCgpIHtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaCgoa2V5KSA9PiB0aGlzW2tleV0uc3RvcCgpKTtcbiAgfVxuXG4gIGdldFZlbG9jaXR5KCkge1xuICAgIGNvbnN0IHZlbG9jaXR5ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goKGtleSkgPT4gdmVsb2NpdHlba2V5XSA9IHRoaXNba2V5XS5nZXRWZWxvY2l0eSgpKTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH1cblxuICBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiAodGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoYWN0aW9ucywgcHJvcHMpID0+IHtcbiAgcmV0dXJuIG5ldyBDb21wb3NpdGVBY3Rpb24oe1xuICAgIGFjdGlvbnMsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG59O1xuIl19

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	var _tween = __webpack_require__(15);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanMiXSwibmFtZXMiOlsiQ3Jvc3NGYWRlIiwib25TdGFydCIsInByb3BzIiwiZHVyYXRpb24iLCJlYXNlIiwiZmFkZXIiLCJ0byIsInN0YXJ0IiwidXBkYXRlIiwiZnJvbSIsImJhbGFuY2UiLCJnZXQiLCJsYXRlc3RGcm9tVmFsdWUiLCJsYXRlc3RUb1ZhbHVlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0lBRU1BLFM7Ozs7Ozs7OztzQkFLSkMsTyxzQkFBVTtBQUFBLGlCQUMwQixLQUFLQyxLQUQvQjtBQUFBLFFBQ0FDLFFBREEsVUFDQUEsUUFEQTtBQUFBLFFBQ1VDLElBRFYsVUFDVUEsSUFEVjtBQUFBLFFBQ2dCQyxLQURoQixVQUNnQkEsS0FEaEI7OztBQUdSLFNBQUtBLEtBQUwsR0FBYUEsU0FBUyxxQkFBTTtBQUMxQkMsVUFBSSxDQURzQjtBQUUxQkgsd0JBRjBCO0FBRzFCQztBQUgwQixLQUFOLEVBSW5CRyxLQUptQixFQUF0QjtBQUtELEc7O3NCQUVEQyxNLHFCQUFTO0FBQUEsa0JBQ2MsS0FBS04sS0FEbkI7QUFBQSxRQUNDTyxJQURELFdBQ0NBLElBREQ7QUFBQSxRQUNPSCxFQURQLFdBQ09BLEVBRFA7O0FBRVAsUUFBTUksVUFBVSxLQUFLTCxLQUFMLENBQVdNLEdBQVgsRUFBaEI7QUFDQSxRQUFNQyxrQkFBa0JILEtBQUtFLEdBQUwsRUFBeEI7QUFDQSxRQUFNRSxnQkFBZ0JQLEdBQUdLLEdBQUgsRUFBdEI7QUFDQSxXQUFPLGdDQUFxQkMsZUFBckIsRUFBc0NDLGFBQXRDLEVBQXFESCxPQUFyRCxDQUFQO0FBQ0QsRzs7Ozs7QUFyQkdWLFMsQ0FDR2MsWSxHQUFlO0FBQ3BCVjtBQURvQixDOztrQkF1QlQsVUFBQ0YsS0FBRDtBQUFBLFNBQVcsSUFBSUYsU0FBSixDQUFjRSxLQUFkLENBQVg7QUFBQSxDIiwiZmlsZSI6ImNyb3NzLWZhZGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB0d2VlbiBmcm9tICcuL3R3ZWVuJztcbmltcG9ydCB7IGxpbmVhciB9IGZyb20gJy4uL2luYy9lYXNpbmcnO1xuaW1wb3J0IHsgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNsYXNzIENyb3NzRmFkZSBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZWFzZTogbGluZWFyXG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIGNvbnN0IHsgZHVyYXRpb24sIGVhc2UsIGZhZGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5mYWRlciA9IGZhZGVyIHx8IHR3ZWVuKHtcbiAgICAgIHRvOiAxLFxuICAgICAgZHVyYXRpb24sXG4gICAgICBlYXNlXG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGZyb20sIHRvIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGJhbGFuY2UgPSB0aGlzLmZhZGVyLmdldCgpO1xuICAgIGNvbnN0IGxhdGVzdEZyb21WYWx1ZSA9IGZyb20uZ2V0KCk7XG4gICAgY29uc3QgbGF0ZXN0VG9WYWx1ZSA9IHRvLmdldCgpO1xuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhsYXRlc3RGcm9tVmFsdWUsIGxhdGVzdFRvVmFsdWUsIGJhbGFuY2UpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gbmV3IENyb3NzRmFkZShwcm9wcyk7XG4iXX0=

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _tween = __webpack_require__(15);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (duration, onComplete) {
	  return (0, _tween2.default)({ duration: duration, onComplete: onComplete });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2RlbGF5LmpzIl0sIm5hbWVzIjpbImR1cmF0aW9uIiwib25Db21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7a0JBRWUsVUFBQ0EsUUFBRCxFQUFXQyxVQUFYO0FBQUEsU0FBMEIscUJBQU0sRUFBRUQsa0JBQUYsRUFBWUMsc0JBQVosRUFBTixDQUExQjtBQUFBLEMiLCJmaWxlIjoiZGVsYXkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHdlZW4gZnJvbSAnLi90d2Vlbic7XG5cbmV4cG9ydCBkZWZhdWx0IChkdXJhdGlvbiwgb25Db21wbGV0ZSkgPT4gdHdlZW4oeyBkdXJhdGlvbiwgb25Db21wbGV0ZSB9KTtcbiJdfQ==

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(19);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BhcmFsbGVsLmpzIl0sIm5hbWVzIjpbIlBhcmFsbGVsIiwib25TdGFydCIsImFjdGlvbnMiLCJwcm9wcyIsIm51bUFjdGl2ZUFjdGlvbnMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiYWN0aW9uIiwic2V0UHJvcHMiLCJfb25TdG9wIiwic3RhcnQiLCJvblN0b3AiLCJzdG9wIiwiYWRkQWN0aW9uIiwiaW5kZXhPZiIsInB1c2giLCJpc0FjdGlvbkNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU1BLFE7Ozs7Ozs7OztxQkFDSkMsTyxzQkFBVTtBQUFBOztBQUFBLFFBQ0FDLE9BREEsR0FDWSxLQUFLQyxLQURqQixDQUNBRCxPQURBOztBQUVSLFNBQUtFLGdCQUFMLEdBQXdCRixRQUFRRyxNQUFoQzs7QUFFQUgsWUFBUUksT0FBUixDQUFnQixVQUFDQyxNQUFELEVBQVk7QUFDMUJBLGFBQU9DLFFBQVAsQ0FBZ0I7QUFDZEMsaUJBQVM7QUFBQSxpQkFBTSxPQUFLTCxnQkFBTCxFQUFOO0FBQUE7QUFESyxPQUFoQixFQUVHTSxLQUZIO0FBR0QsS0FKRDtBQUtELEc7O3FCQUVEQyxNLHFCQUFTO0FBQ1AsU0FBS1IsS0FBTCxDQUFXRCxPQUFYLENBQW1CSSxPQUFuQixDQUEyQixVQUFDQyxNQUFEO0FBQUEsYUFBWUEsT0FBT0ssSUFBUCxFQUFaO0FBQUEsS0FBM0I7QUFDRCxHOztxQkFFREMsUyxzQkFBVU4sTSxFQUFRO0FBQUEsUUFDUkwsT0FEUSxHQUNJLEtBQUtDLEtBRFQsQ0FDUkQsT0FEUTs7O0FBR2hCLFFBQUlBLFFBQVFZLE9BQVIsQ0FBZ0JQLE1BQWhCLE1BQTRCLENBQUMsQ0FBakMsRUFBb0M7QUFDbENMLGNBQVFhLElBQVIsQ0FBYVIsTUFBYjtBQUNEO0FBQ0YsRzs7cUJBRURTLGdCLCtCQUFtQjtBQUNqQixXQUFRLEtBQUtaLGdCQUFMLEtBQTBCLENBQWxDO0FBQ0QsRzs7Ozs7a0JBR1ksVUFBQ0YsT0FBRCxFQUFVQyxLQUFWO0FBQUEsU0FBb0IsSUFBSUgsUUFBSixZQUFlRSxnQkFBZixJQUEyQkMsS0FBM0IsRUFBcEI7QUFBQSxDIiwiZmlsZSI6InBhcmFsbGVsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5cbmNsYXNzIFBhcmFsbGVsIGV4dGVuZHMgQWN0aW9uIHtcbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IGFjdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gYWN0aW9ucy5sZW5ndGg7XG5cbiAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xuICAgICAgYWN0aW9uLnNldFByb3BzKHtcbiAgICAgICAgX29uU3RvcDogKCkgPT4gdGhpcy5udW1BY3RpdmVBY3Rpb25zLS1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH1cblxuICBvblN0b3AoKSB7XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4gYWN0aW9uLnN0b3AoKSk7XG4gIH1cblxuICBhZGRBY3Rpb24oYWN0aW9uKSB7XG4gICAgY29uc3QgeyBhY3Rpb25zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGFjdGlvbnMuaW5kZXhPZihhY3Rpb24pID09PSAtMSkge1xuICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gKHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGFjdGlvbnMsIHByb3BzKSA9PiBuZXcgUGFyYWxsZWwoeyBhY3Rpb25zLCAuLi5wcm9wcyB9KTtcbiJdfQ==

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(18);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BoeXNpY3MuanMiXSwibmFtZXMiOlsiUGh5c2ljcyIsInVwZGF0ZSIsInByb3BzIiwiYXV0b1N0b3BTcGVlZCIsImFjY2VsZXJhdGlvbiIsImZyaWN0aW9uIiwidmVsb2NpdHkiLCJzcHJpbmciLCJ0byIsIm5ld1ZlbG9jaXR5IiwiZWxhcHNlZCIsInVuZGVmaW5lZCIsImRpc3RhbmNlVG9UYXJnZXQiLCJjdXJyZW50IiwiaXNDb21wbGV0ZSIsIk1hdGgiLCJhYnMiLCJpc0FjdGlvbkNvbXBsZXRlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7b0JBUUpDLE0scUJBQVM7QUFBQSxpQkFDaUUsS0FBS0MsS0FEdEU7QUFBQSxRQUNDQyxhQURELFVBQ0NBLGFBREQ7QUFBQSxRQUNnQkMsWUFEaEIsVUFDZ0JBLFlBRGhCO0FBQUEsUUFDOEJDLFFBRDlCLFVBQzhCQSxRQUQ5QjtBQUFBLFFBQ3dDQyxRQUR4QyxVQUN3Q0EsUUFEeEM7QUFBQSxRQUNrREMsTUFEbEQsVUFDa0RBLE1BRGxEO0FBQUEsUUFDMERDLEVBRDFELFVBQzBEQSxFQUQxRDs7QUFFUCxRQUFJQyxjQUFjSCxRQUFsQjtBQUNBLFFBQU1JLFVBQVUsb0NBQWhCOztBQUVBO0FBQ0EsUUFBSU4sWUFBSixFQUFrQjtBQUNoQksscUJBQWUseUJBQWNMLFlBQWQsRUFBNEJNLE9BQTVCLENBQWY7QUFDRDs7QUFFRDtBQUNBLFFBQUlMLFFBQUosRUFBYztBQUNaSSw4QkFBZ0IsSUFBSUosUUFBcEIsRUFBa0NLLFVBQVUsR0FBNUM7QUFDRDs7QUFFRCxRQUFJSCxVQUFVQyxPQUFPRyxTQUFyQixFQUFnQztBQUM5QixVQUFNQyxtQkFBbUJKLEtBQUssS0FBS0ssT0FBbkM7QUFDQUoscUJBQWVHLG1CQUFtQix5QkFBY0wsTUFBZCxFQUFzQkcsT0FBdEIsQ0FBbEM7QUFDRDs7QUFFRDtBQUNBLFNBQUtHLE9BQUwsSUFBZ0IseUJBQWNKLFdBQWQsRUFBMkJDLE9BQTNCLENBQWhCO0FBQ0EsU0FBS1IsS0FBTCxDQUFXSSxRQUFYLEdBQXNCRyxXQUF0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFLSyxVQUFMLEdBQW1CWCxrQkFBa0IsS0FBbEIsS0FBNEIsQ0FBQ00sV0FBRCxJQUFnQk0sS0FBS0MsR0FBTCxDQUFTUCxXQUFULEtBQXlCTixhQUFyRSxDQUFuQjs7QUFFQSxRQUFJLEtBQUtXLFVBQUwsSUFBbUJQLE1BQXZCLEVBQStCO0FBQzdCLFdBQUtNLE9BQUwsR0FBZUwsRUFBZjtBQUNEOztBQUVELFdBQU8sS0FBS0ssT0FBWjtBQUNELEc7O29CQUVESSxnQiwrQkFBbUI7QUFDakIsV0FBTyxLQUFLSCxVQUFaO0FBQ0QsRzs7Ozs7QUE5Q0dkLE8sQ0FDR2tCLFksR0FBZTtBQUNwQmQsZ0JBQWMsQ0FETTtBQUVwQkMsWUFBVSxDQUZVO0FBR3BCQyxZQUFVLENBSFU7QUFJcEJILGlCQUFlO0FBSkssQzs7a0JBZ0RULFVBQUNELEtBQUQ7QUFBQSxTQUFXLElBQUlGLE9BQUosQ0FBWUUsS0FBWixDQUFYO0FBQUEsQyIsImZpbGUiOiJwaHlzaWNzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgeyB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuaW1wb3J0IHsgc3BlZWRQZXJGcmFtZSB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuY2xhc3MgUGh5c2ljcyBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWNjZWxlcmF0aW9uOiAwLFxuICAgIGZyaWN0aW9uOiAwLFxuICAgIHZlbG9jaXR5OiAwLFxuICAgIGF1dG9TdG9wU3BlZWQ6IDAuMDAxXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeyBhdXRvU3RvcFNwZWVkLCBhY2NlbGVyYXRpb24sIGZyaWN0aW9uLCB2ZWxvY2l0eSwgc3ByaW5nLCB0byB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgbmV3VmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICBjb25zdCBlbGFwc2VkID0gdGltZVNpbmNlTGFzdEZyYW1lKCk7XG5cbiAgICAvLyBBcHBseSBhY2NlbGVyYXRpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoYWNjZWxlcmF0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSArPSBzcGVlZFBlckZyYW1lKGFjY2VsZXJhdGlvbiwgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgZnJpY3Rpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoZnJpY3Rpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICo9ICgxIC0gZnJpY3Rpb24pICoqIChlbGFwc2VkIC8gMTAwKTtcbiAgICB9XG5cbiAgICBpZiAoc3ByaW5nICYmIHRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlVG9UYXJnZXQgPSB0byAtIHRoaXMuY3VycmVudDtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiBzcGVlZFBlckZyYW1lKHNwcmluZywgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdmVsb2NpdHlcbiAgICB0aGlzLmN1cnJlbnQgKz0gc3BlZWRQZXJGcmFtZShuZXdWZWxvY2l0eSwgZWxhcHNlZCk7XG4gICAgdGhpcy5wcm9wcy52ZWxvY2l0eSA9IG5ld1ZlbG9jaXR5O1xuXG4gICAgLy8gQ2hlY2sgaWYgc2ltdWxhdGlvbiBpcyBjb21wbGV0ZVxuICAgIC8vIFdlIGRvIHRoaXMgaGVyZSBpbnN0ZWFkIG9mIGBpc0FjdGlvbkNvbXBsZXRlYCBhcyBpdCBhbGxvd3MgdXNcbiAgICAvLyB0byBjbGFtcCBkdXJpbmcgdGhpcyB1cGRhdGVcbiAgICB0aGlzLmlzQ29tcGxldGUgPSAoYXV0b1N0b3BTcGVlZCAhPT0gZmFsc2UgJiYgKCFuZXdWZWxvY2l0eSB8fCBNYXRoLmFicyhuZXdWZWxvY2l0eSkgPD0gYXV0b1N0b3BTcGVlZCkpO1xuXG4gICAgaWYgKHRoaXMuaXNDb21wbGV0ZSAmJiBzcHJpbmcpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRvO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH1cblxuICBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgUGh5c2ljcyhwcm9wcyk7Il19

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _value = __webpack_require__(17);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BvaW50ZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlUG9pbnRlciIsIngiLCJ5IiwiZXZlbnRUb1BvaW50cyIsIm1vdmVFdmVudCIsInByb3BzIiwicG9pbnRlciIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlUG9pbnRlciIsImUiLCJwb2ludHMiLCJzZXQiLCJzZXRQcm9wcyIsIl9vblN0YXJ0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX29uU3RvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb3VzZUV2ZW50VG9Qb2ludCIsInBhZ2VYIiwicGFnZVkiLCJ0b3VjaEV2ZW50VG9Qb2ludCIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJnZXROYXRpdmVFdmVudCIsIm9yaWdpbmFsRXZlbnQiLCJuYXRpdmVFdmVudCIsInRvdWNoZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsU0FBU0EsYUFBVCxjQUF5RTtBQUFBLE1BQWhEQyxDQUFnRCxTQUFoREEsQ0FBZ0Q7QUFBQSxNQUE3Q0MsQ0FBNkMsU0FBN0NBLENBQTZDOztBQUFBLE1BQXRDQyxhQUFzQyxRQUF0Q0EsYUFBc0M7QUFBQSxNQUF2QkMsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQUEsTUFBVEMsS0FBUzs7QUFDdkUsTUFBTUMsVUFBVSx5QkFBVTtBQUN4QkwsT0FBRyxxQkFBTUEsQ0FBTixDQURxQjtBQUV4QkMsT0FBRyxxQkFBTUEsQ0FBTjtBQUZxQixHQUFWO0FBSWRLLG9CQUFnQjtBQUpGLEtBS1hGLEtBTFcsRUFBaEI7O0FBUUEsTUFBTUcsZ0JBQWdCLFVBQUNDLENBQUQsRUFBTztBQUMzQixRQUFJSixNQUFNRSxjQUFWLEVBQTBCO0FBQ3hCRSxRQUFFRixjQUFGO0FBQ0Q7O0FBRUQsUUFBTUcsU0FBU1AsY0FBY00sQ0FBZCxDQUFmO0FBQ0FILFlBQVFMLENBQVIsQ0FBVVUsR0FBVixDQUFjRCxPQUFPVCxDQUFyQjtBQUNBSyxZQUFRSixDQUFSLENBQVVTLEdBQVYsQ0FBY0QsT0FBT1IsQ0FBckI7QUFDRCxHQVJEOztBQVVBSSxVQUFRTSxRQUFSLENBQWlCO0FBQ2ZDLGNBQVU7QUFBQSxhQUFNQyxTQUFTQyxlQUFULENBQXlCQyxnQkFBekIsQ0FBMENaLFNBQTFDLEVBQXFESSxhQUFyRCxDQUFOO0FBQUEsS0FESztBQUVmUyxhQUFTO0FBQUEsYUFBTUgsU0FBU0MsZUFBVCxDQUF5QkcsbUJBQXpCLENBQTZDZCxTQUE3QyxFQUF3REksYUFBeEQsQ0FBTjtBQUFBO0FBRk0sR0FBakI7O0FBS0EsU0FBT0YsT0FBUDtBQUNEOztBQUVELElBQU1hLG9CQUFvQixVQUFDVixDQUFEO0FBQUEsU0FBUTtBQUNoQ1IsT0FBR1EsRUFBRVcsS0FEMkI7QUFFaENsQixPQUFHTyxFQUFFWTtBQUYyQixHQUFSO0FBQUEsQ0FBMUI7O0FBS0EsSUFBTUMsb0JBQW9CO0FBQUEsTUFBR0MsY0FBSCxTQUFHQSxjQUFIO0FBQUEsU0FBeUI7QUFDakR0QixPQUFHc0IsZUFBZSxDQUFmLEVBQWtCQyxPQUQ0QjtBQUVqRHRCLE9BQUdxQixlQUFlLENBQWYsRUFBa0JFO0FBRjRCLEdBQXpCO0FBQUEsQ0FBMUI7O0FBS0EsSUFBTUMsaUJBQWlCLFVBQUNqQixDQUFEO0FBQUEsU0FBT0EsRUFBRWtCLGFBQUYsSUFBbUJsQixFQUFFbUIsV0FBckIsSUFBb0NuQixDQUEzQztBQUFBLENBQXZCOztrQkFFZSxVQUFDQSxDQUFELEVBQUlKLEtBQUosRUFBYztBQUMzQixNQUFNdUIsY0FBY0YsZUFBZWpCLENBQWYsQ0FBcEI7QUFDQSxTQUFRbUIsWUFBWUMsT0FBYixHQUNMN0IsY0FBY3NCLGtCQUFrQmIsQ0FBbEIsQ0FBZDtBQUNFTCxlQUFXLFdBRGI7QUFFRUQsbUJBQWVtQjtBQUZqQixLQUdLakIsS0FITCxFQURLLEdBTUxMLGNBQWNtQixrQkFBa0JWLENBQWxCLENBQWQ7QUFDRUwsZUFBVyxXQURiO0FBRUVELG1CQUFlZ0I7QUFGakIsS0FHS2QsS0FITCxFQU5GO0FBV0QsQyIsImZpbGUiOiJwb2ludGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZhbHVlIGZyb20gJy4vdmFsdWUnO1xuaW1wb3J0IGNvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvaW50ZXIoeyB4LCB5IH0sIHsgZXZlbnRUb1BvaW50cywgbW92ZUV2ZW50LCAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHBvaW50ZXIgPSBjb21wb3NpdGUoe1xuICAgIHg6IHZhbHVlKHgpLFxuICAgIHk6IHZhbHVlKHkpXG4gIH0sIHtcbiAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZSxcbiAgICAuLi5wcm9wc1xuICB9KTtcblxuICBjb25zdCB1cGRhdGVQb2ludGVyID0gKGUpID0+IHtcbiAgICBpZiAocHJvcHMucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludHMgPSBldmVudFRvUG9pbnRzKGUpO1xuICAgIHBvaW50ZXIueC5zZXQocG9pbnRzLngpO1xuICAgIHBvaW50ZXIueS5zZXQocG9pbnRzLnkpO1xuICB9O1xuXG4gIHBvaW50ZXIuc2V0UHJvcHMoe1xuICAgIF9vblN0YXJ0OiAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpLFxuICAgIF9vblN0b3A6ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlcilcbiAgfSk7XG5cbiAgcmV0dXJuIHBvaW50ZXI7XG59XG5cbmNvbnN0IG1vdXNlRXZlbnRUb1BvaW50ID0gKGUpID0+ICh7XG4gIHg6IGUucGFnZVgsXG4gIHk6IGUucGFnZVlcbn0pO1xuXG5jb25zdCB0b3VjaEV2ZW50VG9Qb2ludCA9ICh7IGNoYW5nZWRUb3VjaGVzIH0pID0+ICh7XG4gIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbn0pO1xuXG5jb25zdCBnZXROYXRpdmVFdmVudCA9IChlKSA9PiBlLm9yaWdpbmFsRXZlbnQgfHwgZS5uYXRpdmVFdmVudCB8fCBlO1xuXG5leHBvcnQgZGVmYXVsdCAoZSwgcHJvcHMpID0+IHtcbiAgY29uc3QgbmF0aXZlRXZlbnQgPSBnZXROYXRpdmVFdmVudChlKTtcbiAgcmV0dXJuIChuYXRpdmVFdmVudC50b3VjaGVzKSA/XG4gICAgY3JlYXRlUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwge1xuICAgICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICAgIGV2ZW50VG9Qb2ludHM6IHRvdWNoRXZlbnRUb1BvaW50LFxuICAgICAgLi4ucHJvcHNcbiAgICB9KSA6XG4gICAgY3JlYXRlUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwge1xuICAgICAgbW92ZUV2ZW50OiAnbW91c2Vtb3ZlJyxcbiAgICAgIGV2ZW50VG9Qb2ludHM6IG1vdXNlRXZlbnRUb1BvaW50LFxuICAgICAgLi4ucHJvcHNcbiAgICB9KTtcbn07XG4iXX0=

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(18);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3R3ZWVuLmpzIl0sIm5hbWVzIjpbImNsYW1wUHJvZ3Jlc3MiLCJORVhUX1NURVBTIiwibG9vcCIsInR3ZWVuIiwic3RhcnQiLCJ5b3lvIiwicmV2ZXJzZSIsImZsaXAiLCJUd2VlbiIsIm9uU3RhcnQiLCJwcm9wcyIsImR1cmF0aW9uIiwicGxheURpcmVjdGlvbiIsImVsYXBzZWQiLCJwcm9ncmVzcyIsInVwZGF0ZSIsImVhc2UiLCJmcm9tIiwidG8iLCJpc0FjdGlvbkNvbXBsZXRlIiwiaXNDb21wbGV0ZSIsImlzU3RlcFRha2VuIiwia2V5IiwibmV4dFN0ZXAiLCJjb3VudFByb3AiLCJzdGVwTWF4IiwiZ2V0UHJvcCIsInN0ZXBDb3VudCIsInNldFByb3BzIiwiZ2V0RWxhcHNlZCIsImRlZmF1bHRQcm9wcyIsImZsaXBDb3VudCIsInlveW9Db3VudCIsImxvb3BDb3VudCIsImFyZ3MiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IseUJBQU0sQ0FBTixFQUFTLENBQVQsQ0FBdEI7O0FBRUEsSUFBTUMsYUFBYTtBQUNqQkMsUUFBTSxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsTUFBTUMsS0FBTixFQUFYO0FBQUEsR0FEVztBQUVqQkMsUUFBTSxVQUFDRixLQUFEO0FBQUEsV0FBV0EsTUFBTUcsT0FBTixHQUFnQkYsS0FBaEIsRUFBWDtBQUFBLEdBRlc7QUFHakJHLFFBQU0sVUFBQ0osS0FBRDtBQUFBLFdBQVdBLE1BQU1JLElBQU4sR0FBYUgsS0FBYixFQUFYO0FBQUE7QUFIVyxDQUFuQjs7SUFNTUksSzs7Ozs7Ozs7O2tCQWVKQyxPLHNCQUFVO0FBQUEsaUJBQzRCLEtBQUtDLEtBRGpDO0FBQUEsUUFDQUMsUUFEQSxVQUNBQSxRQURBO0FBQUEsUUFDVUMsYUFEVixVQUNVQSxhQURWOzs7QUFHUixTQUFLQyxPQUFMLEdBQWdCRCxr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c0IsSUFBUztBQUFUQSxRQUFTO0FBQUE7O0FBQzFCLE1BQUlBLEtBQUtDLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFBQSxRQUNiekIsS0FEYSxHQUNId0IsSUFERzs7QUFFckIsV0FBTyxJQUFJMUIsS0FBSixDQUFVRSxLQUFWLENBQVA7QUFDRCxHQUhELE1BR087QUFBQSxRQUNHTyxJQURILEdBQ3VDaUIsSUFEdkM7QUFBQSxRQUNTaEIsRUFEVCxHQUN1Q2dCLElBRHZDO0FBQUEsUUFDYXZCLFFBRGIsR0FDdUN1QixJQUR2QztBQUFBLFFBQ3VCbEIsSUFEdkIsR0FDdUNrQixJQUR2QztBQUFBLFFBQzZCeEIsT0FEN0IsR0FDdUN3QixJQUR2Qzs7QUFFTCxXQUFPLElBQUkxQixLQUFKLFlBQVlTLFVBQVosRUFBa0JDLE1BQWxCLEVBQXNCUCxrQkFBdEIsRUFBZ0NLLFVBQWhDLElBQXlDTixPQUF6QyxFQUFQO0FBQ0Q7QUFDRixDIiwiZmlsZSI6InR3ZWVuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgeyB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuaW1wb3J0IHsgY2xhbXAgfSBmcm9tICcuLi9pbmMvdHJhbnNmb3JtZXJzJztcbmltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGVhc2VPdXQgfSBmcm9tICcuLi9pbmMvZWFzaW5nJztcblxuY29uc3QgY2xhbXBQcm9ncmVzcyA9IGNsYW1wKDAsIDEpO1xuXG5jb25zdCBORVhUX1NURVBTID0ge1xuICBsb29wOiAodHdlZW4pID0+IHR3ZWVuLnN0YXJ0KCksXG4gIHlveW86ICh0d2VlbikgPT4gdHdlZW4ucmV2ZXJzZSgpLnN0YXJ0KCksXG4gIGZsaXA6ICh0d2VlbikgPT4gdHdlZW4uZmxpcCgpLnN0YXJ0KClcbn07XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIGVhc2U6IGVhc2VPdXQsXG4gICAgZnJvbTogMCxcbiAgICB0bzogMSxcbiAgICBmbGlwOiAwLFxuICAgIGZsaXBDb3VudDogMCxcbiAgICB5b3lvOiAwLFxuICAgIHlveW9Db3VudDogMCxcbiAgICBsb29wOiAwLFxuICAgIGxvb3BDb3VudDogMCxcbiAgICBwbGF5RGlyZWN0aW9uOiAxXG4gIH07XG5cbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IGR1cmF0aW9uLCBwbGF5RGlyZWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5lbGFwc2VkID0gKHBsYXlEaXJlY3Rpb24gPT09IDEpID8gMCA6IGR1cmF0aW9uO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHsgZHVyYXRpb24sIGVhc2UsIGZyb20sIHRvLCBwbGF5RGlyZWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5lbGFwc2VkICs9IHRpbWVTaW5jZUxhc3RGcmFtZSgpICogcGxheURpcmVjdGlvbjtcbiAgICB0aGlzLnByb2dyZXNzID0gY2xhbXBQcm9ncmVzcyhnZXRQcm9ncmVzc0Zyb21WYWx1ZSgwLCBkdXJhdGlvbiwgdGhpcy5lbGFwc2VkKSk7XG5cbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZnJvbSwgdG8sIGVhc2UodGhpcy5wcm9ncmVzcykpO1xuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICBjb25zdCB7IGR1cmF0aW9uLCBwbGF5RGlyZWN0aW9uLCB5b3lvLCBsb29wLCBmbGlwIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBpc0NvbXBsZXRlID0gKHBsYXlEaXJlY3Rpb24gPT09IDEpID8gKHRoaXMuZWxhcHNlZCA+PSBkdXJhdGlvbikgOiAodGhpcy5lbGFwc2VkIDw9IDApO1xuXG4gICAgaWYgKGlzQ29tcGxldGUgJiYgKHlveW8gfHwgbG9vcCB8fCBmbGlwKSkge1xuICAgICAgbGV0IGlzU3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgIGNvbnN0IG5leHRTdGVwID0gTkVYVF9TVEVQU1trZXldO1xuICAgICAgICBjb25zdCBjb3VudFByb3AgPSBrZXkgKyAnQ291bnQnO1xuICAgICAgICBjb25zdCBzdGVwTWF4ID0gdGhpcy5nZXRQcm9wKGtleSk7XG4gICAgICAgIGNvbnN0IHN0ZXBDb3VudCA9IHRoaXMuZ2V0UHJvcChjb3VudFByb3ApO1xuXG4gICAgICAgIGlmIChzdGVwTWF4ID4gc3RlcENvdW50KSB7XG4gICAgICAgICAgdGhpcy5zZXRQcm9wcyh7XG4gICAgICAgICAgICBbY291bnRQcm9wXTogc3RlcENvdW50ICsgMVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG5leHRTdGVwKHRoaXMpO1xuICAgICAgICAgIGlzU3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdGVwVGFrZW4pIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNDb21wbGV0ZTtcbiAgfVxuXG4gIGdldEVsYXBzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZDtcbiAgfVxuXG4gIGZsaXAoKSB7XG4gICAgdGhpcy5lbGFwc2VkID0gdGhpcy5wcm9wcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcbiAgICBbdGhpcy5wcm9wcy5mcm9tLCB0aGlzLnByb3BzLnRvXSA9IFt0aGlzLnByb3BzLnRvLCB0aGlzLnByb3BzLmZyb21dO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmV2ZXJzZSgpIHtcbiAgICB0aGlzLnByb3BzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKC4uLmFyZ3MpID0+IHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgWyBwcm9wcyBdID0gYXJncztcbiAgICByZXR1cm4gbmV3IFR3ZWVuKHByb3BzKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBbIGZyb20sIHRvLCBkdXJhdGlvbiwgZWFzZSwgcHJvcHMgXSA9IGFyZ3M7XG4gICAgcmV0dXJuIG5ldyBUd2Vlbih7IGZyb20sIHRvLCBkdXJhdGlvbiwgZWFzZSwgLi4ucHJvcHMgfSk7XG4gIH1cbn07XG4iXX0=

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _chain = __webpack_require__(7);
	
	var _chain2 = _interopRequireDefault(_chain);
	
	var _parallel = __webpack_require__(12);
	
	var _parallel2 = _interopRequireDefault(_parallel);
	
	var _delay = __webpack_require__(11);
	
	var _delay2 = _interopRequireDefault(_delay);
	
	var _utils = __webpack_require__(24);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3N0YWdnZXIuanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsImludGVydmFsIiwib25Db21wbGV0ZSIsImludGVydmFsSXNGdW5jdGlvbiIsIm1hcCIsImFjdGlvbiIsImkiLCJ0aW1lVG9EZWxheSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztrQkFZZSxVQUFDQSxPQUFELEVBQVVDLFFBQVYsRUFBb0JDLFVBQXBCLEVBQW1DO0FBQ2hELE1BQU1DLHFCQUFxQixtQkFBT0YsUUFBUCxDQUEzQjs7QUFFQSxTQUFPLHdCQUFTRCxRQUFRSSxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDekMsUUFBTUMsY0FBZUosa0JBQUQsR0FBdUJGLFNBQVNLLENBQVQsQ0FBdkIsR0FBcUNBLElBQUlMLFFBQTdEO0FBQ0EsV0FBTyxxQkFBTSxDQUNYLHFCQUFNTSxXQUFOLENBRFcsRUFFWEYsTUFGVyxDQUFOLENBQVA7QUFJRCxHQU5lLENBQVQsRUFNSCxFQUFFSCxzQkFBRixFQU5HLENBQVA7QUFPRCxDIiwiZmlsZSI6InN0YWdnZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaW4gZnJvbSAnLi9jaGFpbic7XG5pbXBvcnQgcGFyYWxsZWwgZnJvbSAnLi9wYXJhbGxlbCc7XG5pbXBvcnQgZGVsYXkgZnJvbSAnLi9kZWxheSc7XG5pbXBvcnQgeyBpc0Z1bmMgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcGFyYWxsZWwgQWN0aW9uIGNvbXBvc2VkIG9mIGNoYWluZWRcbiAqIGRlbGF5IGFuZCBhY3Rpb25zLiBJbnRlcnZhbCBjYW4gYmUgZWl0aGVyIGEgbnVtYmVyXG4gKiB0byBtdWx0aXBseSBieSBgaWAgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgYGlgXG4gKlxuICogU3RyYWlnaHQgY3JpYmJlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi8yNGM3MmY1MTNlNDhmMGJkYzQwODIwYjQzMjYyMzI4ZmUyYzMwMWQ0L0xpYnJhcmllcy9BbmltYXRlZC9zcmMvQW5pbWF0ZWRJbXBsZW1lbnRhdGlvbi5qcyNMMjAzMVxuICogXiBUaGlzIGZ1bmN0aW9uIHNvbGQgYSBwcmV2aW91c2x5LWNvbmZsaWN0ZWQgbWUgb24gdGhlIG1lcml0IG9mIG1vdmluZyBmcm9tXG4gKiBqUXVlcnktc3R5bGUgbXVsdGktcHJvcGVydHkgYW5pbWF0aW9ucyB0byBzaW5nbGUtcHJvcGVydHkuXG4gKiBAcGFyYW0gIHthcnJheX0gYWN0aW9uc1xuICogQHBhcmFtICB7ZnVuY3Rpb24gfCBudW1iZXJ9IGludGVydmFsXG4gKiBAcmV0dXJuIHtBY3Rpb259XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChhY3Rpb25zLCBpbnRlcnZhbCwgb25Db21wbGV0ZSkgPT4ge1xuICBjb25zdCBpbnRlcnZhbElzRnVuY3Rpb24gPSBpc0Z1bmMoaW50ZXJ2YWwpO1xuXG4gIHJldHVybiBwYXJhbGxlbChhY3Rpb25zLm1hcCgoYWN0aW9uLCBpKSA9PiB7XG4gICAgY29uc3QgdGltZVRvRGVsYXkgPSAoaW50ZXJ2YWxJc0Z1bmN0aW9uKSA/IGludGVydmFsKGkpIDogaSAqIGludGVydmFsO1xuICAgIHJldHVybiBjaGFpbihbXG4gICAgICBkZWxheSh0aW1lVG9EZWxheSksXG4gICAgICBhY3Rpb25cbiAgICBdKTtcbiAgfSksIHsgb25Db21wbGV0ZSB9KTtcbn07XG4iXX0=

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(18);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3ZhbHVlLmpzIl0sIm5hbWVzIjpbIlZhbHVlIiwic2V0IiwidiIsInRvVXBkYXRlIiwic2NoZWR1bGVkVXBkYXRlIiwidXBkYXRlIiwiZGVmYXVsdFByb3BzIiwicGFzc2l2ZSIsImN1cnJlbnQiLCJvblVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsSzs7Ozs7Ozs7O2tCQUtKQyxHLGdCQUFJQyxDLEVBQUc7QUFDTCxTQUFLQyxRQUFMLEdBQWdCRCxDQUFoQjtBQUNBLGtDQUFjLEtBQUtFLGVBQW5CO0FBQ0QsRzs7a0JBRURDLE0scUJBQVM7QUFDUCxXQUFPLEtBQUtGLFFBQVo7QUFDRCxHOzs7OztBQVpHSCxLLENBQ0dNLFksR0FBZTtBQUNwQkMsV0FBUztBQURXLEM7O2tCQWNULFVBQUNDLE9BQUQsRUFBVUMsUUFBVjtBQUFBLFNBQXVCLElBQUlULEtBQUosQ0FBVSxFQUFFUSxnQkFBRixFQUFXQyxrQkFBWCxFQUFWLENBQXZCO0FBQUEsQyIsImZpbGUiOiJ2YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgb25GcmFtZVVwZGF0ZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5cbmNsYXNzIFZhbHVlIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH07XG5cbiAgc2V0KHYpIHtcbiAgICB0aGlzLnRvVXBkYXRlID0gdjtcbiAgICBvbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy50b1VwZGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VycmVudCwgb25VcGRhdGUpID0+IG5ldyBWYWx1ZSh7IGN1cnJlbnQsIG9uVXBkYXRlIH0pO1xuIl19

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
	var _onNextFrame = __webpack_require__(26);
	
	var _onNextFrame2 = _interopRequireDefault(_onNextFrame);
	
	var _createRenderStep = __webpack_require__(27);
	
	var _createRenderStep2 = _interopRequireDefault(_createRenderStep);
	
	var _utils = __webpack_require__(24);
	
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _framesync = __webpack_require__(18);
	
	var _calc = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Action = function () {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFjdGlvbiIsInByb3BzIiwic2NoZWR1bGVkVXBkYXRlIiwiYmluZCIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdFByb3BzIiwic2V0UHJvcHMiLCJjdXJyZW50IiwiZnJvbSIsInN0YXJ0Iiwib25TdGFydCIsIl9vblN0YXJ0IiwicGFzc2l2ZSIsIl9pc0FjdGl2ZSIsInN0b3AiLCJvblN0b3AiLCJfb25TdG9wIiwiY29tcGxldGUiLCJvbkNvbXBsZXRlIiwiX29uQ29tcGxldGUiLCJsYXN0VXBkYXRlZCIsInByZXYiLCJvblVwZGF0ZSIsInVwZGF0ZSIsImZpcmVMaXN0ZW5lcnMiLCJpc0FjdGlvbkNvbXBsZXRlIiwiZ2V0Iiwic2V0IiwidiIsImdldFByb3AiLCJrZXkiLCJnZXRWZWxvY2l0eSIsImlzQWN0aXZlIiwiYWRkTGlzdGVuZXIiLCJsaXN0ZW5lciIsImxpc3RlbmVycyIsIm51bUxpc3RlbmVycyIsImluZGV4T2YiLCJwdXNoIiwicmVtb3ZlTGlzdGVuZXIiLCJsaXN0ZW5lckluZGV4Iiwic3BsaWNlIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUFFTUEsTTtBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtDLGVBQUwsR0FBdUIsS0FBS0EsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkI7O0FBRUEsU0FBS0YsS0FBTCxnQkFDSyxLQUFLRyxXQUFMLENBQWlCQyxZQUR0Qjs7QUFJQSxTQUFLQyxRQUFMLENBQWNMLEtBQWQ7O0FBRUEsU0FBS00sT0FBTCxHQUFlTixNQUFNTSxPQUFOLElBQWlCTixNQUFNTyxJQUF2QixJQUErQixDQUE5QztBQUNEOzttQkFFREMsSyxvQkFBUTtBQUFBLGlCQUNpQyxLQUFLUixLQUR0QztBQUFBLFFBQ0VTLE9BREYsVUFDRUEsT0FERjtBQUFBLFFBQ1dDLFFBRFgsVUFDV0EsUUFEWDtBQUFBLFFB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O0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLElBQXFCLENBQXpDO0FBQ0EsUUFBSSxLQUFLRCxTQUFMLENBQWVFLE9BQWYsQ0FBdUJILFFBQXZCLE1BQXFDLENBQUMsQ0FBMUMsRUFBNkM7QUFDM0MsV0FBS0MsU0FBTCxDQUFlRyxJQUFmLENBQW9CSixRQUFwQjtBQUNBLFdBQUtFLFlBQUw7QUFDRDtBQUNELFdBQU8sSUFBUDtBQUNELEc7O21CQUVERyxjLDJCQUFlTCxRLEVBQVU7QUFDdkIsUUFBTU0sZ0JBQWlCLEtBQUtMLFNBQU4sR0FBbUIsS0FBS0EsU0FBTCxDQUFlRSxPQUFmLENBQXVCSCxRQUF2QixDQUFuQixHQUFzRCxDQUFDLENBQTdFO0FBQ0EsUUFBSU0sa0JBQWtCLENBQUMsQ0FBdkIsRUFBMEI7QUFDeEIsV0FBS0osWUFBTDtBQUNBLFdBQUtELFNBQUwsQ0FBZU0sTUFBZixDQUFzQkQsYUFBdEIsRUFBcUMsQ0FBckM7QUFDRDtBQUNELFdBQU8sSUFBUDtBQUNELEc7O21CQUVEaEIsYSw0QkFBZ0I7QUFDZCxRQUFNakIsVUFBVSxLQUFLbUIsR0FBTCxFQUFoQjtBQUNBLFNBQUssSUFBSWdCLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLTixZQUF6QixFQUF1Q00sR0FBdkMsRUFBNEM7QUFDMUMsV0FBS1AsU0FBTCxDQUFlTyxDQUFmLEVBQWtCbkMsT0FBbEIsRUFBMkIsSUFBM0I7QUFDRDtBQUNELFdBQU8sSUFBUDtBQUNELEc7Ozs7O2tCQUdZUCxNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb25GcmFtZVVwZGF0ZSwgY2FuY2VsT25GcmFtZVVwZGF0ZSwgdGltZVNpbmNlTGFzdEZyYW1lIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcbmltcG9ydCB7IHNwZWVkUGVyU2Vjb25kIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jbGFzcyBBY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMuc2NoZWR1bGVkVXBkYXRlID0gdGhpcy5zY2hlZHVsZWRVcGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wc1xuICAgIH07XG5cbiAgICB0aGlzLnNldFByb3BzKHByb3BzKTtcblxuICAgIHRoaXMuY3VycmVudCA9IHByb3BzLmN1cnJlbnQgfHwgcHJvcHMuZnJvbSB8fCAwO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgY29uc3QgeyBvblN0YXJ0LCBfb25TdGFydCwgcGFzc2l2ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSB0cnVlO1xuICAgICAgb25GcmFtZVVwZGF0ZSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdGFydCkgdGhpcy5vblN0YXJ0KCk7XG4gICAgaWYgKG9uU3RhcnQpIG9uU3RhcnQodGhpcyk7XG4gICAgaWYgKF9vblN0YXJ0KSBfb25TdGFydCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBjb25zdCB7IG9uU3RvcCwgX29uU3RvcCwgcGFzc2l2ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGNhbmNlbE9uRnJhbWVVcGRhdGUodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RvcCkgdGhpcy5vblN0b3AoKTtcbiAgICBpZiAob25TdG9wKSBvblN0b3AodGhpcyk7XG4gICAgaWYgKF9vblN0b3ApIF9vblN0b3AodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIGNvbnN0IHsgb25Db21wbGV0ZSwgX29uQ29tcGxldGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKHRoaXMpO1xuICAgIGlmIChfb25Db21wbGV0ZSkgX29uQ29tcGxldGUodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNjaGVkdWxlZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmxhc3RVcGRhdGVkID0gdGltZVNpbmNlTGFzdEZyYW1lKCk7XG4gICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50O1xuXG4gICAgY29uc3QgeyBvblVwZGF0ZSwgcGFzc2l2ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh0aGlzLnVwZGF0ZSkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy51cGRhdGUodGhpcy5jdXJyZW50KTtcbiAgICB9XG5cbiAgICBpZiAob25VcGRhdGUpIG9uVXBkYXRlKHRoaXMuY3VycmVudCwgdGhpcyk7XG4gICAgdGhpcy5maXJlTGlzdGVuZXJzKCk7XG5cbiAgICBpZiAoIXBhc3NpdmUgJiYgdGhpcy5faXNBY3RpdmUpIHtcbiAgICAgIG9uRnJhbWVVcGRhdGUodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQWN0aW9uQ29tcGxldGUgJiYgdGhpcy5pc0FjdGlvbkNvbXBsZXRlKCkpIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICAuLi5wcm9wc1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfVxuXG4gIHNldCh2KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFByb3Aoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHNba2V5XTtcbiAgfVxuXG4gIGdldFZlbG9jaXR5KCkge1xuICAgIHJldHVybiBzcGVlZFBlclNlY29uZCh0aGlzLmN1cnJlbnQgLSB0aGlzLnByZXYsIHRoaXMubGFzdFVwZGF0ZWQpO1xuICB9XG5cbiAgaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9XG5cbiAgYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IFtdO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gdGhpcy5udW1MaXN0ZW5lcnMgfHwgMDtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzKys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBjb25zdCBsaXN0ZW5lckluZGV4ID0gKHRoaXMubGlzdGVuZXJzKSA/IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpIDogLTE7XG4gICAgaWYgKGxpc3RlbmVySW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycy0tO1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZpcmVMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUxpc3RlbmVyczsgaSsrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tpXShjdXJyZW50LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuIl19

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _framesync = __webpack_require__(18);
	
	var _utils = __webpack_require__(24);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiUmVuZGVyZXIiLCJwcm9wcyIsInJlbmRlciIsImJpbmQiLCJjb25zdHJ1Y3RvciIsImRlZmF1bHRQcm9wcyIsInN0YXRlIiwiY2hhbmdlZFZhbHVlcyIsImdldCIsImtleSIsInVuZGVmaW5lZCIsInJlYWQiLCJvblJlYWQiLCJzZXQiLCJhcmdzIiwidmFsdWVzIiwic2V0VmFsdWUiLCJ2YWx1ZSIsImhhc0NoYW5nZWQiLCJjdXJyZW50VmFsdWUiLCJudW1WYWx1ZXMiLCJsZW5ndGgiLCJpIiwidmFsdWVLZXkiLCJwdXNoIiwiZm9yY2VSZW5kZXIiLCJvblJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUFFTUEsUTtBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtDLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBZDs7QUFFQSxTQUFLRixLQUFMLGdCQUNLLEtBQUtHLFdBQUwsQ0FBaUJDLFlBRHRCLEVBRUtKLEtBRkw7O0FBS0EsU0FBS0ssS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7cUJBUUFDLEcsZ0JBQUlDLEcsRUFBSztBQUNQLFFBQUlBLEdBQUosRUFBUztBQUNQLFVBQUksS0FBS0gsS0FBTCxDQUFXRyxHQUFYLE1BQW9CQyxTQUF4QixFQUFtQztBQUNqQyxlQUFPLEtBQUtKLEtBQUwsQ0FBV0csR0FBWCxDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTyxLQUFLRSxJQUFMLENBQVVGLEdBQVYsQ0FBUDtBQUNEO0FBQ0YsS0FORCxNQU1PO0FBQ0wsYUFBTyxLQUFLSCxLQUFaO0FBQ0Q7QUFDRixHOztBQUVEOzs7Ozs7O3FCQUtBSyxJLGlCQUFLRixHLEVBQUs7QUFDUixRQUFJLEtBQUtHLE1BQVQsRUFBaUI7QUFDZixhQUFPLEtB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R1lsQixRIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb25GcmFtZVJlbmRlciB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBpc0FycmF5LCBpc09iaiwgaXNOdW0sIGlzU3RyaW5nIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfTtcblxuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLmNoYW5nZWRWYWx1ZXMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBzdGF0ZS5cbiAgICogSWYgYGtleWAgaXMgbm90IGRlZmluZWQsIHJldHVybiBlbnRpcmUgY2FjaGVkIHN0YXRlLlxuICAgKiBJZiBga2V5YCBpcyBkZWZpbmVkLCByZXR1cm4gY2FjaGVkIHZhbHVlIGlmIHByZXNlbnQuXG4gICAqIElmIGBrZXlgIGlzIGRlZmluZWQgYW5kIGNhY2hlZCB2YWx1ZSBpcyBub3QgcHJlc2VudCwgcmVhZCBhbmQgcmV0dXJuLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IChvcHRpb25hbCkga2V5IG9mIHZhbHVlXG4gICAqIEByZXR1cm4ge3ZhbHVlfVxuICAgKi9cbiAgZ2V0KGtleSkge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZChrZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVhZCB2YWx1ZSBhY2NvcmRpbmcgdG8gYG9uUmVhZGBcbiAgICogQHBhcmFtICB7c3RyaW5nfSBOYW1lIG9mIHByb3BlcnR5IHRvIHJlYWRcbiAgICogQHJldHVybiB7W3R5cGVdfVxuICAgKi9cbiAgcmVhZChrZXkpIHtcbiAgICBpZiAodGhpcy5vblJlYWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uUmVhZChrZXkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYHN0YXRlYCB3aXRoIG5ldyB2YWx1ZXMgYW5kIHNjaGVkdWxlIGByZW5kZXJgLlxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzXG4gICAqIEBwYXJhbSB7dmFsdWV9IHZhbHVlIHRvc2V0XG4gICAqL1xuICBzZXQoLi4uYXJncykge1xuICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IFsgdmFsdWVzIF0gPSBhcmdzO1xuICAgICAgLy8gU2V0IG11bHRpcGxlIHZhbHVlc1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCB2YWx1ZXNba2V5XSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFsga2V5LCB2YWx1ZSBdID0gYXJncztcbiAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCkge1xuICAgICAgb25GcmFtZVJlbmRlcih0aGlzLnJlbmRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyA+IFdpbGV5IC0gNiBpbiB0aGUgTW9ybmluZ1xuICAvKipcbiAgICogU2V0IGEgc2luZ2xlIHZhbHVlXG4gICAqIElmIGEgc3RyaW5nIG9yIG51bWJlciwgc2V0IGRpcmVjdGx5LlxuICAgKiBJZiBhbiBvYmplY3Qgb3IgYXJyYXksIGNyZWF0ZSBuZXcgb2JqZWN0IG9yIGFycmF5XG4gICAqIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC4gVGhlbiBzaGFsbG93IGNvbXBhcmVcbiAgICogdG8gc2V0IGFuZCBjb21wYXJlIGluZGl2aWR1YWwgdmFsdWVzLlxuICAgKiBPbmUgb2YgdGhlIGNsZWFyZXIgZHJhd2JhY2tzIGFuZCBhbm5veWFuY2VzIHdpdGhcbiAgICogdXNpbmcgbXV0YWJsZSBpbnN0ZWFkIG9mIGltbXV0YWJsZSBzdGF0ZXMuXG4gICAqIEBwYXJhbSB7W3R5cGVdfSBrZXlcbiAgICogQHBhcmFtIHtbdHlwZV19IHZhbHVlXG4gICAqL1xuICBzZXRWYWx1ZShrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy5zdGF0ZVtrZXldO1xuXG4gICAgLy8gSWYgbnVtYmVyIG9yIHN0cmluZywgc2V0IGRpcmVjdGx5XG4gICAgaWYgKGlzTnVtKHZhbHVlKSB8fCBpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGlmICghY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBudW1WYWx1ZXMgPSB2YWx1ZS5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVZhbHVlczsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV1baV0gIT09IHZhbHVlW2ldKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldW2ldID0gdmFsdWVbaV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNPYmoodmFsdWUpKSB7XG4gICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgdmFsdWVLZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gIT09IHZhbHVlW3ZhbHVlS2V5XSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gPSB2YWx1ZVt2YWx1ZUtleV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5wdXNoKGtleSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGBvblJlbmRlcmAgaWYgdmFsdWVzIGhhdmUgY2hhbmdlZCBvciBgZm9yY2VSZW5kZXJgXG4gICAqIGlzIHNldCB0byB0cnVlLlxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cbiAgcmVuZGVyKGZvcmNlUmVuZGVyID0gZmFsc2UpIHtcbiAgICBpZiAoKGZvcmNlUmVuZGVyIHx8IHRoaXMuaGFzQ2hhbmdlZCkgJiYgdGhpcy5vblJlbmRlcikge1xuICAgICAgdGhpcy5vblJlbmRlcigpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XG4iXX0=

/***/ },
/* 21 */
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
	
	var _ = __webpack_require__(20);
	
	var _2 = _interopRequireDefault(_);
	
	var _render = __webpack_require__(28);
	
	var _render2 = _interopRequireDefault(_render);
	
	var _transformProps = __webpack_require__(29);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(30);
	
	var _valueTypes2 = _interopRequireDefault(_valueTypes);
	
	var _prefixer = __webpack_require__(31);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzIl0sIm5hbWVzIjpbImVsZW1lbnQiLCJwcm9wcyIsIkNTU1JlbmRlcmVyIiwiZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24iLCJvblJlbmRlciIsInN0YXRlIiwiY2hhbmdlZFZhbHVlcyIsIm9uUmVhZCIsImtleSIsInZhbHVlVHlwZSIsImRvbVZhbHVlIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBhcnNlIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQTZCZSxVQUFVQSxPQUFWLEVBQW1CQyxLQUFuQixFQUEwQjtBQUN2QyxTQUFPLElBQUlDLFdBQUo7QUFDTEYsb0JBREs7QUFFTEcsZ0NBQTRCO0FBRnZCLEtBR0ZGLEtBSEUsRUFBUDtBQUtELEM7O0FBbkNEOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQyxXOzs7Ozs7Ozs7d0JBQ0pFLFEsdUJBQVc7QUFBQSxpQkFDdUMsS0FBS0gsS0FENUM7QUFBQSxRQUNERCxPQURDLFVBQ0RBLE9BREM7QUFBQSxRQUNRRywwQkFEUixVQUNRQSwwQkFEUjs7QUFFVCwwQkFBVUgsT0FBVixFQUFtQixLQUFLSyxLQUF4QixFQUErQixLQUFLQyxhQUFwQyxFQUFtREgsMEJBQW5EO0FBQ0QsRzs7d0JBRURJLE0sbUJBQU9DLEcsRUFBSztBQUNWLFFBQU1DLFlBQVkscUJBQWNELEdBQWQsQ0FBbEI7O0FBRUEsUUFBSSxDQUFDLHlCQUFlQSxHQUFmLENBQUwsRUFBMEI7QUFBQSxVQUNoQlIsT0FEZ0IsR0FDSixLQUFLQyxLQURELENBQ2hCRCxPQURnQjs7QUFFeEIsVUFBTVUsV0FBV0MsT0FBT0MsZ0JBQVAsQ0FBd0JaLE9BQXhCLEVBQWlDLElBQWpDLEVBQXVDLHdCQUFTUSxHQUFULENBQXZDLEtBQXlELENBQTFFO0FBQ0EsYUFBUUMsYUFBYUEsVUFBVUksS0FBeEIsR0FBaUNKLFVBQVVJLEtBQVYsQ0FBZ0JILFFBQWhCLENBQWpDLEdBQTZEQSxRQUFwRTtBQUNELEtBSkQsTUFJTztBQUNMLFVBQUlELFNBQUosRUFBZTtBQUNiLGVBQU9BLFVBQVVLLE9BQVYsSUFBcUIsQ0FBNUI7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLENBQVA7QUFDRDtBQUNGO0FBQ0YsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZW5kZXJlciBmcm9tICcuLi8nO1xuaW1wb3J0IHJlbmRlckNTUyBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IHZhbHVlVHlwZXNNYXAgZnJvbSAnLi92YWx1ZS10eXBlcyc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9wcmVmaXhlcic7XG5cbmNsYXNzIENTU1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBvblJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIHJlbmRlckNTUyhlbGVtZW50LCB0aGlzLnN0YXRlLCB0aGlzLmNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKTtcbiAgfVxuXG4gIG9uUmVhZChrZXkpIHtcbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZVR5cGVzTWFwW2tleV07XG5cbiAgICBpZiAoIXRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGRvbVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClbcHJlZml4ZXIoa2V5KV0gfHwgMDtcbiAgICAgIHJldHVybiAodmFsdWVUeXBlICYmIHZhbHVlVHlwZS5wYXJzZSkgPyB2YWx1ZVR5cGUucGFyc2UoZG9tVmFsdWUpIDogZG9tVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlVHlwZS5kZWZhdWx0IHx8IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ1NTUmVuZGVyZXIoe1xuICAgIGVsZW1lbnQsXG4gICAgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb246IHRydWUsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG59XG4iXX0=

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (element, props) {
	  return new SVGRenderer(_extends({
	    element: element
	  }, props));
	};
	
	var _ = __webpack_require__(20);
	
	var _2 = _interopRequireDefault(_);
	
	var _build = __webpack_require__(33);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _transformProps = __webpack_require__(29);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(34);
	
	var _valueTypes2 = _interopRequireDefault(_valueTypes);
	
	var _utils = __webpack_require__(24);
	
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (element, props) {
	  return new SVGPathRenderer(_extends({
	    element: element
	  }, props));
	};
	
	var _ = __webpack_require__(20);
	
	var _2 = _interopRequireDefault(_);
	
	var _build = __webpack_require__(32);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _utils = __webpack_require__(24);
	
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
/* 24 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdXRpbHMuanMiXSwibmFtZXMiOlsic3BsaXRDb2xvclZhbHVlcyIsInZhclR5cGUiLCJ2YXJpYWJsZSIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiQ0FNRUxfQ0FTRV9QQVRURVJOIiwiUkVQTEFDRV9URU1QTEFURSIsIkhBU19QRVJGT1JNQU5DRV9OT1ciLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNhbWVsVG9EYXNoIiwic3RyaW5nIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiY3VycmVudFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInNldERPTUF0dHJzIiwiZWxlbWVudCIsImF0dHJzIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJzZXRBdHRyaWJ1dGUiLCJzcGxpdENvbW1hRGVsaW1pdGVkIiwidmFsdWUiLCJpc1N0cmluZyIsInNwbGl0IiwiY29udGFpbnMiLCJ0ZXJtIiwidiIsImluZGV4T2YiLCJpc0ZpcnN0Q2hhcnMiLCJjcmVhdGVVbml0VHlwZSIsInR5cGUiLCJ0cmFuc2Zvcm0iLCJ0ZXN0IiwicGFyc2UiLCJwYXJzZUZsb2F0IiwiZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmciLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsInRlcm1zIiwibnVtVGVybXMiLCJsZW5ndGgiLCJ2YWx1ZXMiLCJ2YWx1ZXNBcnJheSIsImkiLCJ1bmRlZmluZWQiLCJpc0FycmF5IiwiYXJyIiwiaXNGdW5jIiwib2JqIiwiaXNOdW0iLCJudW0iLCJpc09iaiIsInN0ciIsImlzSGV4IiwiaXNSZ2IiLCJpc0hzbCIsImlzQ29sb3IiXSwibWFwcGluZ3MiOiI7OztRQTZFZ0JBLGdCLEdBQUFBLGdCO0FBN0VoQixJQUFNQyxVQUFVLFVBQUNDLFFBQUQ7QUFBQSxTQUFjQyxPQUFPQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JKLFFBQS9CLEVBQXlDSyxLQUF6QyxDQUErQyxDQUEvQyxFQUFr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O0FBTU8sSUFBTUMsMEJBQVMsVUFBQ0MsR0FBRDtBQUFBLFNBQVNyRCxRQUFRcUQsR0FBUixNQUFpQixVQUExQjtBQUFBLENBQWY7O0FBRVA7Ozs7OztBQU1PLElBQU1DLHdCQUFRLFVBQUNDLEdBQUQ7QUFBQSxTQUFTLE9BQU9BLEdBQVAsS0FBZSxRQUF4QjtBQUFBLENBQWQ7O0FBRVA7Ozs7OztBQU1PLElBQU1DLHdCQUFRLFVBQUNILEdBQUQ7QUFBQSxTQUFTLE9BQU9BLEdBQVAsS0FBZSxRQUF4QjtBQUFBLENBQWQ7O0FBRVA7Ozs7OztBQU1PLElBQU0xQiw4QkFBVyxVQUFDOEIsR0FBRDtBQUFBLFNBQVMsT0FBT0EsR0FBUCxLQUFlLFFBQXhCO0FBQUEsQ0FBakI7O0FBRUEsSUFBTUMsd0JBQVF6QixhQUFhLEdBQWIsQ0FBZDtBQUNBLElBQU0wQix3QkFBUTFCLGFBQWEsS0FBYixDQUFkO0FBQ0EsSUFBTTJCLHdCQUFRM0IsYUFBYSxLQUFiLENBQWQ7QUFDQSxJQUFNNEIsNEJBQVUsVUFBQzlCLENBQUQ7QUFBQSxTQUFRMkIsTUFBTTNCLENBQU4sS0FBWTRCLE1BQU01QixDQUFOLENBQVosSUFBd0I2QixNQUFNN0IsQ0FBTixDQUFoQztBQUFBLENBQWhCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFyVHlwZSA9ICh2YXJpYWJsZSkgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG5cbmNvbnN0IENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xuY29uc3QgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG5jb25zdCBIQVNfUEVSRk9STUFOQ0VfTk9XID0gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KTtcblxuLypcbiAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG5leHBvcnQgY29uc3QgY2FtZWxUb0Rhc2ggPSAoc3RyaW5nKSA9PiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG5cbi8qXG4gIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gIFxuICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/ICgpID0+IHBlcmZvcm1hbmNlLm5vdygpIDogKCkgPT4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbmV4cG9ydCBjb25zdCBzZXRET01BdHRycyA9IChlbGVtZW50LCBhdHRycykgPT4ge1xuICBmb3IgKGxldCBrZXkgaW4gYXR0cnMpIHtcbiAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG4gIH1cbn07XG4vKlxuICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgXCJmb28sYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzcGxpdENvbW1hRGVsaW1pdGVkID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG5cbi8qKlxuICogIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgYW55IGFyZ3VtZW50IGZvciBgdGVybWBcbiAqIGBjb250YWlucygnbmVlZGxlJykoJ2hheXN0YWNrJylgXG4gKi9cbmV4cG9ydCBjb25zdCBjb250YWlucyA9ICh0ZXJtKSA9PiAodikgPT4ge1xuICByZXR1cm4gKGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSAhPT0gLTEpO1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayB0byBzZWUgaWYgYW4gYXJndW1lbnQgaXNcbiAqICB0aGUgZmlyc3QgY2hhcmFjdGVycyBpbiB0aGUgcHJvdmlkZWQgYHRlcm1gXG4gKiBgaXNGaXJzdENoYXJzKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xuZXhwb3J0IGNvbnN0IGlzRmlyc3RDaGFycyA9ICh0ZXJtKSA9PiAodikgPT4ge1xuICByZXR1cm4gKGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSA9PT0gMCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHVuaXQgdmFsdWUgdHlwZVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVW5pdFR5cGUgPSAodHlwZSwgdHJhbnNmb3JtKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVzdDogY29udGFpbnModHlwZSksXG4gICAgcGFyc2U6IHBhcnNlRmxvYXQsXG4gICAgdHJhbnNmb3JtXG4gIH07XG59O1xuXG4vKlxuICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcbiAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSAodmFsdWUpID0+IHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHNwbGl0IGNvbG9yXG4gKiB2YWx1ZXMgZnJvbSBzdHJpbmcgaW50byBhbiBvYmplY3Qgb2YgcHJvcGVydGllc1xuICogYG1hcEFycmF5VG9PYmplY3QoWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddKSgncmdiYSgwLDAsMCknKWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0Q29sb3JWYWx1ZXModGVybXMpIHtcbiAgY29uc3QgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgY29uc3QgdmFsdWVzID0ge307XG4gICAgY29uc3QgdmFsdWVzQXJyYXkgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHYpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgdmFsdWVzW3Rlcm1zW2ldXSA9ICh2YWx1ZXNBcnJheVtpXSAhPT0gdW5kZWZpbmVkKSA/IHBhcnNlRmxvYXQodmFsdWVzQXJyYXlbaV0pIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xufVxuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IChhcnIpID0+IHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5JztcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG5leHBvcnQgY29uc3QgaXNGdW5jID0gKG9iaikgPT4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xuZXhwb3J0IGNvbnN0IGlzTnVtID0gKG51bSkgPT4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xuZXhwb3J0IGNvbnN0IGlzT2JqID0gKG9iaikgPT4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAoc3RyKSA9PiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcblxuZXhwb3J0IGNvbnN0IGlzSGV4ID0gaXNGaXJzdENoYXJzKCcjJyk7XG5leHBvcnQgY29uc3QgaXNSZ2IgPSBpc0ZpcnN0Q2hhcnMoJ3JnYicpO1xuZXhwb3J0IGNvbnN0IGlzSHNsID0gaXNGaXJzdENoYXJzKCdoc2wnKTtcbmV4cG9ydCBjb25zdCBpc0NvbG9yID0gKHYpID0+IChpc0hleCh2KSB8fCBpc1JnYih2KSB8fCBpc0hzbCh2KSk7XG4iXX0=

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.color = exports.hsla = exports.rgba = exports.hex = undefined;
	
	var _utils = __webpack_require__(24);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvcGFyc2Vycy5qcyJdLCJuYW1lcyI6WyJoZXgiLCJ2IiwiciIsImciLCJiIiwibGVuZ3RoIiwic3Vic3RyIiwicmVkIiwicGFyc2VJbnQiLCJncmVlbiIsImJsdWUiLCJhbHBoYSIsInJnYmEiLCJoc2xhIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRU8sSUFBTUEsb0JBQU0sVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hCLE1BQUlDLFVBQUo7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBVUMsVUFBVjs7QUFFQTtBQUNBLE1BQUlILEVBQUVJLE1BQUYsR0FBVyxDQUFmLEVBQWtCO0FBQ2hCSCxRQUFJRCxFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjtBQUNBSCxRQUFJRixFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjtBQUNBRixRQUFJSCxFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjs7QUFFRjtBQUNDLEdBTkQsTUFNTztBQUNMSixRQUFJRCxFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjtBQUNBSCxRQUFJRixFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjtBQUNBRixRQUFJSCxFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjtBQUNBSixTQUFLQSxDQUFMO0FBQ0FDLFNBQUtBLENBQUw7QUFDQUMsU0FBS0EsQ0FBTDtBQUNEOztBQUVELFNBQU87QUFDTEcsU0FBS0MsU0FBU04sQ0FBVCxFQUFZLEVBQVosQ0FEQTtBQUVMTyxXQUFPRCxTQUFTTCxDQUFULEVBQVksRUFBWixDQUZGO0FBR0xPLFVBQU1GLFNBQVNKLENBQVQsRUFBWSxFQUFaLENBSEQ7QUFJTE8sV0FBTztBQUpGLEdBQVA7QUFNRCxDQXpCTTs7QUEyQkEsSUFBTUMsc0JBQU8sNkJBQWlCLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsTUFBakIsRUFBeUIsT0FBekIsQ0FBakIsQ0FBYjs7QUFFQSxJQUFNQyxzQkFBTyw2QkFBaUIsQ0FBQyxLQUFELEVBQVEsWUFBUixFQUFzQixXQUF0QixFQUFtQyxPQUFuQyxDQUFqQixDQUFiOztBQUVBLElBQU1DLHdCQUFRLFVBQUNiLENBQUQsRUFBTztBQUMxQixNQUFJLGtCQUFNQSxDQUFOLENBQUosRUFBYztBQUNaLFdBQU9XLEtBQUtYLENBQUwsQ0FBUDtBQUNELEdBRkQsTUFFTyxJQUFJLGtCQUFNQSxDQUFOLENBQUosRUFBYztBQUNuQixXQUFPRCxJQUFJQyxDQUFKLENBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSSxrQkFBTUEsQ0FBTixDQUFKLEVBQWM7QUFDbkIsV0FBT1ksS0FBS1osQ0FBTCxDQUFQO0FBQ0Q7O0FBRUQsU0FBT0EsQ0FBUDtBQUNELENBVk0iLCJmaWxlIjoicGFyc2Vycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNwbGl0Q29sb3JWYWx1ZXMsIGlzUmdiLCBpc0hleCwgaXNIc2wgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IGhleCA9ICh2KSA9PiB7XG4gIGxldCByLCBnLCBiO1xuXG4gIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gIGlmICh2Lmxlbmd0aCA+IDQpIHtcbiAgICByID0gdi5zdWJzdHIoMSwgMik7XG4gICAgZyA9IHYuc3Vic3RyKDMsIDIpO1xuICAgIGIgPSB2LnN1YnN0cig1LCAyKTtcblxuICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICB9IGVsc2Uge1xuICAgIHIgPSB2LnN1YnN0cigxLCAxKTtcbiAgICBnID0gdi5zdWJzdHIoMiwgMSk7XG4gICAgYiA9IHYuc3Vic3RyKDMsIDEpO1xuICAgIHIgKz0gcjtcbiAgICBnICs9IGc7XG4gICAgYiArPSBiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICBncmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgIGJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICBhbHBoYTogMVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHJnYmEgPSBzcGxpdENvbG9yVmFsdWVzKFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAnYWxwaGEnXSk7XG5cbmV4cG9ydCBjb25zdCBoc2xhID0gc3BsaXRDb2xvclZhbHVlcyhbJ2h1ZScsICdzYXR1cmF0aW9uJywgJ2xpZ2h0bmVzcycsICdhbHBoYSddKTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yID0gKHYpID0+IHtcbiAgaWYgKGlzUmdiKHYpKSB7XG4gICAgcmV0dXJuIHJnYmEodik7XG4gIH0gZWxzZSBpZiAoaXNIZXgodikpIHtcbiAgICByZXR1cm4gaGV4KHYpO1xuICB9IGVsc2UgaWYgKGlzSHNsKHYpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cblxuICByZXR1cm4gdjtcbn07XG4iXX0=

/***/ },
/* 26 */
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
/* 27 */
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = buildStylePropertyString;
	
	var _transformProps = __webpack_require__(29);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(30);
	
	var _valueTypes2 = _interopRequireDefault(_valueTypes);
	
	var _prefixer = __webpack_require__(31);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _utils = __webpack_require__(24);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3JlbmRlci5qcyJdLCJuYW1lcyI6WyJidWlsZFN0eWxlUHJvcGVydHlTdHJpbmciLCJUUkFOU0xBVEUiLCJ0cmFuc2xhdGVNYXAiLCJ4IiwieSIsInoiLCJlbGVtZW50Iiwic3RhdGUiLCJjaGFuZ2VkVmFsdWVzIiwiZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24iLCJwcm9wZXJ0eVN0cmluZyIsInRyYW5zZm9ybVN0cmluZyIsImhhc1RyYW5zZm9ybSIsInRyYW5zZm9ybUhhc1oiLCJudW1DaGFuZ2VkVmFsdWVzIiwibGVuZ3RoIiwiaSIsImtleSIsImluZGV4T2YiLCJwdXNoIiwidG90YWxOdW1DaGFuZ2VkVmFsdWVzIiwidmFsdWUiLCJ0cmFuc2Zvcm0iLCJzdHlsZSIsImNzc1RleHQiXSwibWFwcGluZ3MiOiI7OztrQkFZd0JBLHdCOztBQVp4Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1DLFlBQVksV0FBbEI7QUFDQSxJQUFNQyxlQUFlO0FBQ25CQyxLQUFHRixZQUFZLEdBREk7QUFFbkJHLEtBQUdILFlBQVksR0FGSTtBQUduQkksS0FBR0osWUFBWTtBQUhJLENBQXJCOztBQU1lLFNBQVNELHdCQUFULENBQWtDTSxPQUFsQyxFQUEyQ0MsS0FBM0MsRUFBa0RDLGFBQWxELEVBQWlFQywwQkFBakUsRUFBNkY7QUFDMUcsTUFBSUMsaUJBQWlCLEVBQXJCO0FBQ0EsTUFBSUMsa0JBQWtCLEVBQXRCO0FBQ0EsTUFBSUMsZUFBZSxLQUFuQjtBQUNBLE1BQUlDLGdCQUFnQixLQUFwQjs7QUFFQTtBQUNBO0FBQ0EsTUFBTUMsbUJBQW1CTixjQUFjTyxNQUF2QztBQUNBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixnQkFBcEIsRUFBc0NFLEdBQXRDLEVBQTJDO0FBQ3pDLFFBQU1DLE1BQU1ULGNBQWNRLENBQWQsQ0FBWjs7QUFFQTtBQUNBO0FBQ0EsUUFBSSx5QkFBZUMsR0FBZixDQUFKLEVBQXlCO0FBQ3ZCTCxxQkFBZSxJQUFmOztBQUVBLFdBQUssSUFBSUssSUFBVCxJQUFnQlYsS0FBaEIsRUFBdUI7QUFDckIsWUFBSSx5QkFBZVUsSUFBZixLQUF1QlQsY0FBY1UsT0FBZCxDQUFzQkQsSUFBdEIsTUFBK0IsQ0FBQyxDQUEzRCxFQUE4RDtBQUM1RFQsd0JBQWNXLElBQWQsQ0FBbUJGLElBQW5CO0FBQ0Q7QUFDRjs7QUFFRDtBQUNEO0FBQ0Y7O0FBRUQsTUFBTUcsd0JBQXdCWixjQUFjTyxNQUE1QztBQUNBLE9BQUssSUFBSUMsS0FBSSxDQUFiLEVBQWdCQSxLQUFJSSxxQkFBcEIsRUFBMkNKLElBQTNDLEVBQWdEO0FBQzlDLFFBQUlDLFFBQU1ULGNBQWNRLEVBQWQsQ0FBVjtBQUNBLFFBQUlLLFFBQVFkLE1BQU1VLEtBQU4sQ0FBWjs7QUFFQSxRQUFJZixhQUFhZSxLQUFiLENBQUosRUFBdUI7QUFDckJBLGNBQU1mLGFBQWFlLEtBQWIsQ0FBTjtBQUNEOztBQUVEO0FBQ0EsUUFBSSxxQkFBV0EsS0FBWCxNQUFvQixrQkFBTUksS0FBTixLQUFnQixrQkFBTUEsS0FBTixDQUFwQyxLQUFxRCxxQkFBV0osS0FBWCxFQUFnQkssU0FBekUsRUFBb0Y7QUFDbEZELGNBQVEscUJBQVdKLEtBQVgsRUFBZ0JLLFNBQWhCLENBQTBCRCxLQUExQixDQUFSO0FBQ0Q7O0FBRUQsUUFBSSx5QkFBZUosS0FBZixDQUFKLEVBQXlCO0FBQ3ZCTix5QkFBbUJNLFFBQU0sR0FBTixHQUFZSSxLQUFaLEdBQW9CLElBQXZDO0FBQ0FSLHNCQUFpQkksVUFBUWYsYUFBYUcsQ0FBdEIsR0FBMkIsSUFBM0IsR0FBa0NRLGFBQWxEO0FBRUQsS0FKRCxNQUlPO0FBQ0xILHdCQUFrQixNQUFNLHdCQUFTTyxLQUFULEVBQWMsSUFBZCxDQUFOLEdBQTRCLEdBQTVCLEdBQWtDSSxLQUFwRDtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQSxNQUFJVCxZQUFKLEVBQWtCO0FBQ2hCLFFBQUksQ0FBQ0MsYUFBRCxJQUFrQkosMEJBQXRCLEVBQWtEO0FBQ2hERSx5QkFBbUJULGFBQWFHLENBQWIsR0FBaUIsS0FBcEM7QUFDRDs7QUFFREssc0JBQWtCLE1BQU0sd0JBQVMsV0FBVCxFQUFzQixJQUF0QixDQUFOLEdBQW9DLEdBQXBDLEdBQTBDQyxlQUE1RDtBQUNEOztBQUVETCxVQUFRaUIsS0FBUixDQUFjQyxPQUFkLElBQXlCZCxjQUF6QjtBQUNEIiwiZmlsZSI6InJlbmRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL3RyYW5zZm9ybS1wcm9wcyc7XG5pbXBvcnQgdmFsdWVUeXBlcyBmcm9tICcuL3ZhbHVlLXR5cGVzJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcbmltcG9ydCB7IGlzTnVtLCBpc09iaiB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5cbmNvbnN0IFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuY29uc3QgdHJhbnNsYXRlTWFwID0ge1xuICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gIHk6IFRSQU5TTEFURSArICdZJyxcbiAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFN0eWxlUHJvcGVydHlTdHJpbmcoZWxlbWVudCwgc3RhdGUsIGNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gIGxldCBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICBsZXQgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gIGxldCBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgbGV0IHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAvLyBGaXJzdCBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGNoYW5nZWQgdHJhbnNmb3JtIHZhbHVlc1xuICAvLyBhbmQgaWYgdHJ1ZSBhZGQgYWxsIHRyYW5zZm9ybSB2YWx1ZXNcbiAgY29uc3QgbnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNoYW5nZWRWYWx1ZXM7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNoYW5nZWRWYWx1ZXNbaV07XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdHJhbnNmb3JtIHByb3BlcnR5LCBhZGQgYWxsIG90aGVyIHRyYW5zZm9ybSBwcm9wc1xuICAgIC8vIHRvIGNoYW5nZWRWYWx1ZXMgYW5kIHRoZW4gYnJlYWtcbiAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldICYmIGNoYW5nZWRWYWx1ZXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNoYW5nZWRWYWx1ZXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRvdGFsTnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsTnVtQ2hhbmdlZFZhbHVlczsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGNoYW5nZWRWYWx1ZXNbaV07XG4gICAgbGV0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgIGlmICh0cmFuc2xhdGVNYXBba2V5XSkge1xuICAgICAga2V5ID0gdHJhbnNsYXRlTWFwW2tleV07XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIG51bWJlciBvciBvYmplY3QgYW5kIHdlIGhhdmUgZmlsdGVyLCBhcHBseSBmaWx0ZXJcbiAgICBpZiAodmFsdWVUeXBlc1trZXldICYmIChpc051bSh2YWx1ZSkgfHwgaXNPYmoodmFsdWUpKSAmJiB2YWx1ZVR5cGVzW2tleV0udHJhbnNmb3JtKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlVHlwZXNba2V5XS50cmFuc2Zvcm0odmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IHRyYW5zbGF0ZU1hcC56KSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIHByZWZpeGVyKGtleSwgdHJ1ZSkgKyAnOicgKyB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSBoYXZlIHRyYW5zZm9ybSBwcm9wcywgYnVpbGQgYSB0cmFuc2Zvcm0gc3RyaW5nXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSB0cmFuc2xhdGVNYXAueiArICcoMCknO1xuICAgIH1cblxuICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIHByZWZpeGVyKCd0cmFuc2Zvcm0nLCB0cnVlKSArICc6JyArIHRyYW5zZm9ybVN0cmluZztcbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBwcm9wZXJ0eVN0cmluZztcbn1cbiJdfQ==

/***/ },
/* 29 */
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
/* 30 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib3V0bGluZUNvbG9yIiwiZmlsbCIsInN0cm9rZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyVG9wQ29sb3IiLCJib3JkZXJSaWdodENvbG9yIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJib3JkZXJMZWZ0Q29sb3IiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImhlaWdodCIsInJvdGF0ZSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsInNjYWxlIiwic2NhbGVYIiwic2NhbGVZIiwic2NhbGVaIiwic2tld1giLCJza2V3WSIsImRpc3RhbmNlIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJ0cmFuc2xhdGVaIiwicGVyc3BlY3RpdmUiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O2tCQUNlO0FBQ2I7QUFDQUEsMEJBRmE7QUFHYkMsb0NBSGE7QUFJYkMsaUNBSmE7QUFLYkMseUJBTGE7QUFNYkMsMkJBTmE7O0FBUWI7QUFDQUMsZ0NBVGE7QUFVYkMsbUNBVmE7QUFXYkMscUNBWGE7QUFZYkMsc0NBWmE7QUFhYkMsb0NBYmE7QUFjYkMsOEJBZGE7O0FBZ0JiO0FBQ0FDLHVCQWpCYTtBQWtCYkMsd0JBbEJhOztBQW9CYjtBQUNBQyw2QkFyQmE7QUFzQmJDLDhCQXRCYTtBQXVCYkMsOEJBdkJhO0FBd0JiQyw4QkF4QmE7QUF5QmJDLDBCQXpCYTtBQTBCYkMsMkJBMUJhO0FBMkJiQywyQkEzQmE7QUE0QmJDLDJCQTVCYTtBQTZCYkMsNEJBN0JhO0FBOEJiQyw0QkE5QmE7QUErQmJDLDBCQS9CYTtBQWdDYkMsNEJBaENhO0FBaUNiQyw0QkFqQ2E7QUFrQ2JDLDRCQWxDYTtBQW1DYkMsNkJBbkNhO0FBb0NiQztBQXBDYSxDIiwiZmlsZSI6InZhbHVlLXR5cGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxwaGEsIGNvbG9yLCBkZWdyZWVzLCBzY2FsZSwgcHggfSBmcm9tICcuLi8uLi9pbmMvdmFsdWUtdHlwZXMnOyBcbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gQ29sb3IgcHJvcHNcbiAgY29sb3I6IGNvbG9yLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICBvdXRsaW5lQ29sb3I6IGNvbG9yLFxuICBmaWxsOiBjb2xvcixcbiAgc3Ryb2tlOiBjb2xvcixcblxuICAvLyBCb3JkZXIgcHJvcHNcbiAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICBib3JkZXJUb3BDb2xvcjogY29sb3IsXG4gIGJvcmRlclJpZ2h0Q29sb3I6IGNvbG9yLFxuICBib3JkZXJCb3R0b21Db2xvcjogY29sb3IsXG4gIGJvcmRlckxlZnRDb2xvcjogY29sb3IsXG4gIGJvcmRlclJhZGl1czogcHgsXG5cbiAgLy8gUG9zaXRpb25pbmdcbiAgd2lkdGg6IHB4LFxuICBoZWlnaHQ6IHB4LCAgXG5cbiAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgcm90YXRlOiBkZWdyZWVzLFxuICByb3RhdGVYOiBkZWdyZWVzLFxuICByb3RhdGVZOiBkZWdyZWVzLFxuICByb3RhdGVaOiBkZWdyZWVzLFxuICBzY2FsZTogc2NhbGUsXG4gIHNjYWxlWDogc2NhbGUsXG4gIHNjYWxlWTogc2NhbGUsXG4gIHNjYWxlWjogc2NhbGUsXG4gIHNrZXdYOiBkZWdyZWVzLFxuICBza2V3WTogZGVncmVlcyxcbiAgZGlzdGFuY2U6IHB4LFxuICB0cmFuc2xhdGVYOiBweCxcbiAgdHJhbnNsYXRlWTogcHgsXG4gIHRyYW5zbGF0ZVo6IHB4LFxuICBwZXJzcGVjdGl2ZTogcHgsXG4gIG9wYWNpdHk6IGFscGhhXG59O1xuIl19

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(24);
	
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
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(24);
	
	var _transformProps = __webpack_require__(29);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbImZpbGwiLCJzdHJva2UiLCJzY2FsZSIsInNjYWxlWCIsInNjYWxlWSIsImQiLCJwb2ludHMiLCJvcGFjaXR5IiwiZmlsbE9wYWNpdHkiLCJzdHJva2VPcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O2tCQUVlO0FBQ2JBLHlCQURhO0FBRWJDLDJCQUZhO0FBR2JDLDBCQUhhO0FBSWJDLDJCQUphO0FBS2JDLDJCQUxhO0FBTWJDLHdCQU5hO0FBT2JDLDZCQVBhO0FBUWJDLDRCQVJhO0FBU2JDLGdDQVRhO0FBVWJDO0FBVmEsQyIsImZpbGUiOiJ2YWx1ZS10eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFscGhhLCBjb2xvciwgY29tcGxleCwgc2NhbGUgfSBmcm9tICcuLi8uLi9pbmMvdmFsdWUtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpbGw6IGNvbG9yLFxuICBzdHJva2U6IGNvbG9yLFxuICBzY2FsZTogc2NhbGUsXG4gIHNjYWxlWDogc2NhbGUsXG4gIHNjYWxlWTogc2NhbGUsXG4gIGQ6IGNvbXBsZXgsXG4gIHBvaW50czogY29tcGxleCxcbiAgb3BhY2l0eTogYWxwaGEsXG4gIGZpbGxPcGFjaXR5OiBhbHBoYSxcbiAgc3Ryb2tlT3BhY2l0eTogYWxwaGFcbn07Il19

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWZlNzEzZGRkZTRjYTk0YjU2ZTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb2xvci10d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wYXJhbGxlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvc3RhZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvcGFyc2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL29uLW5leHQtZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9jcmVhdGUtcmVuZGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy92YWx1ZS10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy9wcmVmaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7O0FDdENBOztBQUVBOztBQUVBOztBQUVBLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUTtBQUNBLDRDQUEyQyxtWjs7Ozs7O0FDVDNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxtMEY7Ozs7OztBQ3ZMM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLHV5Vjs7Ozs7O0FDak4zQzs7QUFFQTtBQUNBOztBQUVB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QUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyx1aVM7Ozs7OztBQ3hLM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsKzdGOzs7Ozs7QUNuRDNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQSw0Q0FBMkMsK2tGOzs7Ozs7QUM3QzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywyaEc7Ozs7OztBQy9DM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFrQiw0QkFBNEI7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLDJCQUEwQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsMmlMOzs7Ozs7QUN4RjNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQzs7QUFFRDtBQUNBLDRDQUEyQywrckQ7Ozs7OztBQ3pCM0M7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywydkU7Ozs7OztBQzVDM0M7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsdStGOzs7Ozs7QUMxQzNDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsK3NGOzs7Ozs7QUM5QzNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsbS9KOzs7Ozs7QUN6RDNDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywrNUIiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBlZmU3MTNkZGRlNGNhOTRiNTZlN1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCcuL3BvcG1vdGlvbicpO1xuXG52YXIgcG9wbW90aW9uID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3BvcG1vdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbndpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW5iRzlpWVd3dWFuTWlYU3dpYm1GdFpYTWlPbHNpY0c5d2JXOTBhVzl1SWl3aWQybHVaRzkzSWwwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQk96dEpRVUZaUVN4VE96czdPMEZCUTFwRExFOUJRVTlFTEZOQlFWQXNSMEZCYlVKQkxGTkJRVzVDSWl3aVptbHNaU0k2SW1kc2IySmhiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQXFJR0Z6SUhCdmNHMXZkR2x2YmlCbWNtOXRJQ2N1TDNCdmNHMXZkR2x2YmljN1hHNTNhVzVrYjNjdWNHOXdiVzkwYVc5dUlEMGdjRzl3Ylc5MGFXOXVPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdmdQYXRoID0gZXhwb3J0cy5zdmcgPSBleHBvcnRzLmNzcyA9IGV4cG9ydHMuUmVuZGVyZXIgPSBleHBvcnRzLnZhbHVlID0gZXhwb3J0cy5zdGFnZ2VyID0gZXhwb3J0cy50d2VlbiA9IGV4cG9ydHMucG9pbnRlciA9IGV4cG9ydHMucGh5c2ljcyA9IGV4cG9ydHMucGFyYWxsZWwgPSBleHBvcnRzLmRlbGF5ID0gZXhwb3J0cy5jcm9zc0ZhZGUgPSBleHBvcnRzLmNvbXBvc2l0ZSA9IGV4cG9ydHMuY29sb3JUd2VlbiA9IGV4cG9ydHMuY2hhaW4gPSBleHBvcnRzLmJsZW5kVHdlZW5zID0gZXhwb3J0cy5BY3Rpb24gPSBleHBvcnRzLnZhbHVlVHlwZXMgPSBleHBvcnRzLnRyYW5zZm9ybSA9IGV4cG9ydHMuZWFzaW5nID0gZXhwb3J0cy5jYWxjID0gZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi9mcmFtZXN5bmMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lU3RhcnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVTdGFydDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVVcGRhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lUmVuZGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lUmVuZGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZUVuZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZUVuZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVTdGFydCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVN0YXJ0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZVVwZGF0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVVwZGF0ZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVSZW5kZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVSZW5kZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lRW5kJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lRW5kO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndGltZVNpbmNlTGFzdEZyYW1lJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjdXJyZW50RnJhbWVUaW1lc3RhbXAnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmN1cnJlbnRGcmFtZVRpbWVzdGFtcDtcbiAgfVxufSk7XG5cbnZhciBfY2FsYzIgPSByZXF1aXJlKCcuL2luYy9jYWxjJyk7XG5cbnZhciBfY2FsYyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jYWxjMik7XG5cbnZhciBfZWFzaW5nMiA9IHJlcXVpcmUoJy4vaW5jL2Vhc2luZycpO1xuXG52YXIgX2Vhc2luZyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9lYXNpbmcyKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF90cmFuc2Zvcm0gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHJhbnNmb3JtZXJzKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IHJlcXVpcmUoJy4vaW5jL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF92YWx1ZVR5cGVzMik7XG5cbnZhciBfYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucycpO1xuXG52YXIgX2FjdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWN0aW9ucyk7XG5cbnZhciBfYmxlbmRUd2VlbnMyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2JsZW5kLXR3ZWVucycpO1xuXG52YXIgX2JsZW5kVHdlZW5zMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JsZW5kVHdlZW5zMik7XG5cbnZhciBfY2hhaW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NoYWluJyk7XG5cbnZhciBfY2hhaW4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hhaW4yKTtcblxudmFyIF9jb2xvclR3ZWVuMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jb2xvci10d2VlbicpO1xuXG52YXIgX2NvbG9yVHdlZW4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3JUd2VlbjIpO1xuXG52YXIgX2NvbXBvc2l0ZTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY29tcG9zaXRlJyk7XG5cbnZhciBfY29tcG9zaXRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2l0ZTIpO1xuXG52YXIgX2Nyb3NzRmFkZTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY3Jvc3MtZmFkZScpO1xuXG52YXIgX2Nyb3NzRmFkZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcm9zc0ZhZGUyKTtcblxudmFyIF9kZWxheTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvZGVsYXknKTtcblxudmFyIF9kZWxheTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWxheTIpO1xuXG52YXIgX3BhcmFsbGVsMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9wYXJhbGxlbCcpO1xuXG52YXIgX3BhcmFsbGVsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcmFsbGVsMik7XG5cbnZhciBfcGh5c2ljczIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcGh5c2ljcycpO1xuXG52YXIgX3BoeXNpY3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGh5c2ljczIpO1xuXG52YXIgX3BvaW50ZXIyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BvaW50ZXInKTtcblxudmFyIF9wb2ludGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvaW50ZXIyKTtcblxudmFyIF90d2VlbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvdHdlZW4nKTtcblxudmFyIF90d2VlbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2VlbjIpO1xuXG52YXIgX3N0YWdnZXIyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3N0YWdnZXInKTtcblxudmFyIF9zdGFnZ2VyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YWdnZXIyKTtcblxudmFyIF92YWx1ZTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvdmFsdWUnKTtcblxudmFyIF92YWx1ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZTIpO1xuXG52YXIgX3JlbmRlcmVycyA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzJyk7XG5cbnZhciBfcmVuZGVyZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbmRlcmVycyk7XG5cbnZhciBfY3NzMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL2NzcycpO1xuXG52YXIgX2NzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3MyKTtcblxudmFyIF9zdmcyID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMvc3ZnJyk7XG5cbnZhciBfc3ZnMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2ZzIpO1xuXG52YXIgX3N2Z1BhdGgyID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMvc3ZnLXBhdGgnKTtcblxudmFyIF9zdmdQYXRoMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z1BhdGgyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZXhwb3J0cy5jYWxjID0gX2NhbGM7XG5leHBvcnRzLmVhc2luZyA9IF9lYXNpbmc7XG5leHBvcnRzLnRyYW5zZm9ybSA9IF90cmFuc2Zvcm07XG5leHBvcnRzLnZhbHVlVHlwZXMgPSBfdmFsdWVUeXBlcztcblxuLy8gQWN0aW9uc1xuXG5leHBvcnRzLkFjdGlvbiA9IF9hY3Rpb25zMi5kZWZhdWx0O1xuZXhwb3J0cy5ibGVuZFR3ZWVucyA9IF9ibGVuZFR3ZWVuczMuZGVmYXVsdDtcbmV4cG9ydHMuY2hhaW4gPSBfY2hhaW4zLmRlZmF1bHQ7XG5leHBvcnRzLmNvbG9yVHdlZW4gPSBfY29sb3JUd2VlbjMuZGVmYXVsdDtcbmV4cG9ydHMuY29tcG9zaXRlID0gX2NvbXBvc2l0ZTMuZGVmYXVsdDtcbmV4cG9ydHMuY3Jvc3NGYWRlID0gX2Nyb3NzRmFkZTMuZGVmYXVsdDtcbmV4cG9ydHMuZGVsYXkgPSBfZGVsYXkzLmRlZmF1bHQ7XG5leHBvcnRzLnBhcmFsbGVsID0gX3BhcmFsbGVsMy5kZWZhdWx0O1xuZXhwb3J0cy5waHlzaWNzID0gX3BoeXNpY3MzLmRlZmF1bHQ7XG5leHBvcnRzLnBvaW50ZXIgPSBfcG9pbnRlcjMuZGVmYXVsdDtcbmV4cG9ydHMudHdlZW4gPSBfdHdlZW4zLmRlZmF1bHQ7XG5leHBvcnRzLnN0YWdnZXIgPSBfc3RhZ2dlcjMuZGVmYXVsdDtcbmV4cG9ydHMudmFsdWUgPSBfdmFsdWUzLmRlZmF1bHQ7XG5cbi8vIFJlbmRlcmVyc1xuXG5leHBvcnRzLlJlbmRlcmVyID0gX3JlbmRlcmVyczIuZGVmYXVsdDtcbmV4cG9ydHMuY3NzID0gX2NzczMuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnID0gX3N2ZzMuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnUGF0aCA9IF9zdmdQYXRoMy5kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3YjNCdGIzUnBiMjR1YW5NaVhTd2libUZ0WlhNaU9sc2liMjVHY21GdFpWTjBZWEowSWl3aWIyNUdjbUZ0WlZWd1pHRjBaU0lzSW05dVJuSmhiV1ZTWlc1a1pYSWlMQ0p2YmtaeVlXMWxSVzVrSWl3aVkyRnVZMlZzVDI1R2NtRnRaVk4wWVhKMElpd2lZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU0lzSW1OaGJtTmxiRTl1Um5KaGJXVlNaVzVrWlhJaUxDSmpZVzVqWld4UGJrWnlZVzFsUlc1a0lpd2lkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxJaXdpWTNWeWNtVnVkRVp5WVcxbFZHbHRaWE4wWVcxd0lpd2lZMkZzWXlJc0ltVmhjMmx1WnlJc0luUnlZVzV6Wm05eWJTSXNJblpoYkhWbFZIbHdaWE1pTENKQlkzUnBiMjRpTENKaWJHVnVaRlIzWldWdWN5SXNJbU5vWVdsdUlpd2lZMjlzYjNKVWQyVmxiaUlzSW1OdmJYQnZjMmwwWlNJc0ltTnliM056Um1Ga1pTSXNJbVJsYkdGNUlpd2ljR0Z5WVd4c1pXd2lMQ0p3YUhsemFXTnpJaXdpY0c5cGJuUmxjaUlzSW5SM1pXVnVJaXdpYzNSaFoyZGxjaUlzSW5aaGJIVmxJaXdpVW1WdVpHVnlaWElpTENKamMzTWlMQ0p6ZG1jaUxDSnpkbWRRWVhSb0lsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzNOQ1FVVkZRU3haT3pzN096czdjMEpCUTBGRExHRTdPenM3T3p0elFrRkRRVU1zWVRzN096czdPM05DUVVOQlF5eFZPenM3T3pzN2MwSkJRMEZETEd0Q096czdPenM3YzBKQlEwRkRMRzFDT3pzN096czdjMEpCUTBGRExHMUNPenM3T3pzN2MwSkJRMEZETEdkQ096czdPenM3YzBKQlEwRkRMR3RDT3pzN096czdjMEpCUTBGRExIRkNPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRSUVVkVlF5eEpPMUZCUTBGRExFMDdVVUZEUVVNc1V6dFJRVU5CUXl4Vk96dEJRVVZhT3p0UlFVTlBReXhOTzFGQlEwRkRMRmM3VVVGRFFVTXNTenRSUVVOQlF5eFZPMUZCUTBGRExGTTdVVUZEUVVNc1V6dFJRVU5CUXl4TE8xRkJRMEZETEZFN1VVRkRRVU1zVHp0UlFVTkJReXhQTzFGQlEwRkRMRXM3VVVGRFFVTXNUenRSUVVOQlF5eExPenRCUVVWUU96dFJRVU5QUXl4Uk8xRkJRMEZETEVjN1VVRkRRVU1zUnp0UlFVTkJReXhQSWl3aVptbHNaU0k2SW5CdmNHMXZkR2x2Ymk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4dklFWnlZVzFsYzNsdVl5QnpZMmhsWkhWc1pYSnpYRzVsZUhCdmNuUWdlMXh1SUNCdmJrWnlZVzFsVTNSaGNuUXNYRzRnSUc5dVJuSmhiV1ZWY0dSaGRHVXNYRzRnSUc5dVJuSmhiV1ZTWlc1a1pYSXNYRzRnSUc5dVJuSmhiV1ZGYm1Rc1hHNGdJR05oYm1ObGJFOXVSbkpoYldWVGRHRnlkQ3hjYmlBZ1kyRnVZMlZzVDI1R2NtRnRaVlZ3WkdGMFpTeGNiaUFnWTJGdVkyVnNUMjVHY21GdFpWSmxibVJsY2l4Y2JpQWdZMkZ1WTJWc1QyNUdjbUZ0WlVWdVpDeGNiaUFnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsTEZ4dUlDQmpkWEp5Wlc1MFJuSmhiV1ZVYVcxbGMzUmhiWEJjYm4wZ1puSnZiU0FuTGk5bWNtRnRaWE41Ym1Nbk8xeHVYRzVsZUhCdmNuUWdLaUJoY3lCallXeGpJR1p5YjIwZ0p5NHZhVzVqTDJOaGJHTW5PMXh1Wlhod2IzSjBJQ29nWVhNZ1pXRnphVzVuSUdaeWIyMGdKeTR2YVc1akwyVmhjMmx1WnljN1hHNWxlSEJ2Y25RZ0tpQmhjeUIwY21GdWMyWnZjbTBnWm5KdmJTQW5MaTlwYm1NdmRISmhibk5tYjNKdFpYSnpKenRjYm1WNGNHOXlkQ0FxSUdGeklIWmhiSFZsVkhsd1pYTWdabkp2YlNBbkxpOXBibU12ZG1Gc2RXVXRkSGx3WlhNbk8xeHVYRzR2THlCQlkzUnBiMjV6WEc1bGVIQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZZV04wYVc5dWN5YzdYRzVsZUhCdmNuUWdZbXhsYm1SVWQyVmxibk1nWm5KdmJTQW5MaTloWTNScGIyNXpMMkpzWlc1a0xYUjNaV1Z1Y3ljN1hHNWxlSEJ2Y25RZ1kyaGhhVzRnWm5KdmJTQW5MaTloWTNScGIyNXpMMk5vWVdsdUp6dGNibVY0Y0c5eWRDQmpiMnh2Y2xSM1pXVnVJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OWpiMnh2Y2kxMGQyVmxiaWM3WEc1bGVIQnZjblFnWTI5dGNHOXphWFJsSUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlqYjIxd2IzTnBkR1VuTzF4dVpYaHdiM0owSUdOeWIzTnpSbUZrWlNCbWNtOXRJQ2N1TDJGamRHbHZibk12WTNKdmMzTXRabUZrWlNjN1hHNWxlSEJ2Y25RZ1pHVnNZWGtnWm5KdmJTQW5MaTloWTNScGIyNXpMMlJsYkdGNUp6dGNibVY0Y0c5eWRDQndZWEpoYkd4bGJDQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdmNHRnlZV3hzWld3bk8xeHVaWGh3YjNKMElIQm9lWE5wWTNNZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDNCb2VYTnBZM01uTzF4dVpYaHdiM0owSUhCdmFXNTBaWElnWm5KdmJTQW5MaTloWTNScGIyNXpMM0J2YVc1MFpYSW5PMXh1Wlhod2IzSjBJSFIzWldWdUlHWnliMjBnSnk0dllXTjBhVzl1Y3k5MGQyVmxiaWM3WEc1bGVIQnZjblFnYzNSaFoyZGxjaUJtY205dElDY3VMMkZqZEdsdmJuTXZjM1JoWjJkbGNpYzdYRzVsZUhCdmNuUWdkbUZzZFdVZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDNaaGJIVmxKenRjYmx4dUx5OGdVbVZ1WkdWeVpYSnpYRzVsZUhCdmNuUWdVbVZ1WkdWeVpYSWdabkp2YlNBbkxpOXlaVzVrWlhKbGNuTW5PMXh1Wlhod2IzSjBJR056Y3lCbWNtOXRJQ2N1TDNKbGJtUmxjbVZ5Y3k5amMzTW5PMXh1Wlhod2IzSjBJSE4yWnlCbWNtOXRJQ2N1TDNKbGJtUmxjbVZ5Y3k5emRtY25PMXh1Wlhod2IzSjBJSE4yWjFCaGRHZ2dabkp2YlNBbkxpOXlaVzVrWlhKbGNuTXZjM1puTFhCaGRHZ25PMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcG9wbW90aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zbW9vdGggPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBleHBvcnRzLmRpbGF0ZSA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuYW5nbGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG52YXIgdG9EZWNpbWFsID0gZnVuY3Rpb24gKG51bSkge1xuICB2YXIgcHJlY2lzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAyO1xuXG4gIHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xufTtcblxudmFyIFpFUk9fUE9JTlQgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHo6IDBcbn07XG5cbnZhciBkaXN0YW5jZTFEID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKTtcbn07XG5cbi8qXG4gIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gIFxuICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgYXJlIGF0IDAsMFxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xudmFyIGFuZ2xlID0gZXhwb3J0cy5hbmdsZSA9IGZ1bmN0aW9uIChhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBaRVJPX1BPSU5UO1xuICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbn07XG5cbi8qXG4gIERpbGF0ZVxuICBcbiAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICBcbiAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gIFxuICBhIC0tLS0tLS0tLSBiXG4gIFxuICB0b1xuICBcbiAgYSAtLS0tIGJcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xudmFyIGRpbGF0ZSA9IGV4cG9ydHMuZGlsYXRlID0gZnVuY3Rpb24gKGEsIGIsIGRpbGF0aW9uKSB7XG4gIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xudmFyIGRpc3RhbmNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGZ1bmN0aW9uIChhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBaRVJPX1BPSU5UO1xuXG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICB9IGVsc2Uge1xuICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICB2YXIgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgdmFyIHpEZWx0YSA9ICgwLCBfdXRpbHMuaXNOdW0pKGEueikgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xufTtcblxuLypcbiAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xudmFyIGdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGZ1bmN0aW9uIChmcm9tLCB0bywgcHJvZ3Jlc3MpIHtcbiAgcmV0dXJuIC1wcm9ncmVzcyAqIGZyb20gKyBwcm9ncmVzcyAqIHRvICsgZnJvbTtcbn07XG5cbi8qXG4gIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gIFxuICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbnZhciBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgfTtcbn07XG5cbi8qXG4gIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xufTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbnZhciBzbW9vdGggPSBleHBvcnRzLnNtb290aCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uKSB7XG4gIHZhciBzbW9vdGhpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IDA7XG4gIHJldHVybiB0b0RlY2ltYWwob2xkVmFsdWUgKyBkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGZ1bmN0aW9uICh4cHMsIGZyYW1lRHVyYXRpb24pIHtcbiAgcmV0dXJuICgwLCBfdXRpbHMuaXNOdW0pKHhwcykgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcbn07XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZnVuY3Rpb24gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSB7XG4gIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG59O1xuXG4vKlxuICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICBcbiAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG52YXIgc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoc3RlcHMsIHByb2dyZXNzKSB7XG4gIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICB2YXIgdGFyZ2V0ID0gMSAtIDEgLyBzdGVwcztcbiAgdmFyIHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WTJGc1l5NXFjeUpkTENKdVlXMWxjeUk2V3lKMGIwUmxZMmx0WVd3aUxDSnVkVzBpTENKd2NtVmphWE5wYjI0aUxDSk5ZWFJvSWl3aWNtOTFibVFpTENKYVJWSlBYMUJQU1U1VUlpd2llQ0lzSW5raUxDSjZJaXdpWkdsemRHRnVZMlV4UkNJc0ltRWlMQ0ppSWl3aVlXSnpJaXdpWVc1bmJHVWlMQ0p5WVdScFlXNXpWRzlFWldkeVpXVnpJaXdpWVhSaGJqSWlMQ0prWldkeVpXVnpWRzlTWVdScFlXNXpJaXdpWkdWbmNtVmxjeUlzSWxCSklpd2laR2xzWVhSbElpd2laR2xzWVhScGIyNGlMQ0prYVhOMFlXNWpaU0lzSW5oRVpXeDBZU0lzSW5sRVpXeDBZU0lzSW5wRVpXeDBZU0lzSW5OeGNuUWlMQ0puWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNJc0ltWnliMjBpTENKMGJ5SXNJblpoYkhWbElpd2laMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01pTENKd2NtOW5jbVZ6Y3lJc0luQnZhVzUwUm5KdmJVRnVaMnhsUVc1a1JHbHpkR0Z1WTJVaUxDSnZjbWxuYVc0aUxDSmpiM01pTENKemFXNGlMQ0p5WVdScFlXNXpJaXdpYzIxdmIzUm9JaXdpYm1WM1ZtRnNkV1VpTENKdmJHUldZV3gxWlNJc0ltUjFjbUYwYVc5dUlpd2ljMjF2YjNSb2FXNW5JaXdpYldGNElpd2ljM0JsWldSUVpYSkdjbUZ0WlNJc0luaHdjeUlzSW1aeVlXMWxSSFZ5WVhScGIyNGlMQ0p6Y0dWbFpGQmxjbE5sWTI5dVpDSXNJblpsYkc5amFYUjVJaXdpYzNSbGNGQnliMmR5WlhOeklpd2ljM1JsY0hNaUxDSnpaV2R0Wlc1MElpd2lkR0Z5WjJWMElpd2ljSEp2WjNKbGMzTlBabFJoY21kbGRDSXNJbTFwYmlJc0ltWnNiMjl5SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJPenRCUVVWQk96czdPenM3TzBGQlQwRXNTVUZCVFVFc1dVRkJXU3hWUVVGRFF5eEhRVUZFTEVWQlFYZENPMEZCUVVFc1RVRkJiRUpETEZOQlFXdENMSFZGUVVGT0xFTkJRVTA3TzBGQlEzaERRU3gxUWtGQldTeEZRVUZhTEVWQlFXdENRU3hUUVVGc1FqdEJRVU5CTEZOQlFVOURMRXRCUVV0RExFdEJRVXdzUTBGQlYwZ3NUVUZCVFVNc1UwRkJha0lzU1VGQk9FSkJMRk5CUVhKRE8wRkJRMFFzUTBGSVJEczdRVUZMUVN4SlFVRk5SeXhoUVVGaE8wRkJRMnBDUXl4TFFVRkhMRU5CUkdNN1FVRkZha0pETEV0QlFVY3NRMEZHWXp0QlFVZHFRa01zUzBGQlJ6dEJRVWhqTEVOQlFXNUNPenRCUVUxQkxFbEJRVTFETEdGQlFXRXNWVUZCUTBNc1EwRkJSQ3hGUVVGSlF5eERRVUZLTzBGQlFVRXNVMEZCVlZJc1MwRkJTMU1zUjBGQlRDeERRVUZUUml4SlFVRkpReXhEUVVGaUxFTkJRVlk3UVVGQlFTeERRVUZ1UWpzN1FVRkZRVHM3T3pzN096czdPenRCUVZWUExFbEJRVTFGTEhkQ1FVRlJMRlZCUVVOSUxFTkJRVVE3UVVGQlFTeE5RVUZKUXl4RFFVRktMSFZGUVVGUlRpeFZRVUZTTzBGQlFVRXNVMEZCZFVKVExHbENRVUZwUWxnc1MwRkJTMWtzUzBGQlRDeERRVUZYVEN4RlFVRkZTaXhEUVVGR0xFZEJRVTFMTEVWQlFVVk1MRU5CUVc1Q0xFVkJRWE5DU1N4RlFVRkZTQ3hEUVVGR0xFZEJRVTFKTEVWQlFVVktMRU5CUVRsQ0xFTkJRV3BDTEVOQlFYWkNPMEZCUVVFc1EwRkJaRHM3UVVGRlVEczdPenM3TzBGQlRVOHNTVUZCVFZNc09FTkJRVzFDTEZWQlFVTkRMRTlCUVVRN1FVRkJRU3hUUVVGaFFTeFZRVUZWWkN4TFFVRkxaU3hGUVVGbUxFZEJRVzlDTEVkQlFXcERPMEZCUVVFc1EwRkJla0k3TzBGQlJWQTdPenM3T3pzN096czdPenM3T3pzN096dEJRV3RDVHl4SlFVRk5ReXd3UWtGQlV5eFZRVUZEVkN4RFFVRkVMRVZCUVVsRExFTkJRVW9zUlVGQlQxTXNVVUZCVUR0QlFVRkJMRk5CUVc5Q1ZpeEpRVUZMTEVOQlFVTkRMRWxCUVVsRUxFTkJRVXdzU1VGQlZWVXNVVUZCYmtNN1FVRkJRU3hEUVVGbU96dEJRVVZRT3pzN096czdPenM3UVVGVFR5eEpRVUZOUXl3NFFrRkJWeXhWUVVGRFdDeERRVUZFTEVWQlFYVkNPMEZCUVVFc1RVRkJia0pETEVOQlFXMUNMSFZGUVVGbVRpeFZRVUZsT3p0QlFVTTNRenRCUVVOQkxFMUJRVWtzYTBKQlFVMUxMRU5CUVU0c1EwRkJTaXhGUVVGak8wRkJRMW9zVjBGQlQwUXNWMEZCVjBNc1EwRkJXQ3hGUVVGalF5eERRVUZrTEVOQlFWQTdPMEZCUlVZN1FVRkRReXhIUVVwRUxFMUJTVTg3UVVGRFRDeFJRVUZOVnl4VFFVRlRZaXhYUVVGWFF5eEZRVUZGU2l4RFFVRmlMRVZCUVdkQ1N5eEZRVUZGVEN4RFFVRnNRaXhEUVVGbU8wRkJRMEVzVVVGQlRXbENMRk5CUVZOa0xGZEJRVmRETEVWQlFVVklMRU5CUVdJc1JVRkJaMEpKTEVWQlFVVktMRU5CUVd4Q0xFTkJRV1k3UVVGRFFTeFJRVUZOYVVJc1UwRkJWU3hyUWtGQlRXUXNSVUZCUlVZc1EwRkJVaXhEUVVGRUxFZEJRV1ZETEZkQlFWZERMRVZCUVVWR0xFTkJRV0lzUlVGQlowSkhMRVZCUVVWSUxFTkJRV3hDTEVOQlFXWXNSMEZCYzBNc1EwRkJja1E3TzBGQlJVRXNWMEZCVDB3c1MwRkJTM05DTEVsQlFVd3NRMEZCVlN4VFFVRkRTQ3hOUVVGRUxFVkJRVmNzUTBGQldDeGhRVUZwUWtNc1RVRkJha0lzUlVGQk1rSXNRMEZCTTBJc1lVRkJhVU5ETEUxQlFXcERMRVZCUVRKRExFTkJRVE5ETEVOQlFWWXNRMEZCVUR0QlFVTkVPMEZCUTBZc1EwRmlUVHM3UVVGbFVEczdPenM3T3pzN096czdPMEZCV1U4c1NVRkJUVVVzYzBSQlFYVkNMRlZCUVVORExFbEJRVVFzUlVGQlQwTXNSVUZCVUN4RlFVRlhReXhMUVVGWU8wRkJRVUVzVTBGQmNVSXNRMEZCUTBFc1VVRkJVVVlzU1VGQlZDeExRVUZyUWtNc1MwRkJTMFFzU1VGQmRrSXNRMEZCY2tJN1FVRkJRU3hEUVVFM1FqczdRVUZGVURzN096czdPenM3T3pzN1FVRlhUeXhKUVVGTlJ5eHpSRUZCZFVJc1ZVRkJRMGdzU1VGQlJDeEZRVUZQUXl4RlFVRlFMRVZCUVZkSExGRkJRVmc3UVVGQlFTeFRRVUY1UWl4RFFVRkZRU3hSUVVGR0xFZEJRV0ZLTEVsQlFXUXNSMEZCZFVKSkxGZEJRVmRJTEVWQlFXeERMRWRCUVhkRFJDeEpRVUZvUlR0QlFVRkJMRU5CUVRkQ096dEJRVVZRT3pzN096czdPenRCUVZGUExFbEJRVTFMTEdkRlFVRTBRaXhWUVVGRFF5eE5RVUZFTEVWQlFWTndRaXhMUVVGVUxFVkJRV2RDVVN4UlFVRm9RaXhGUVVFMlFqdEJRVU53UlZJc1ZVRkJVVWNzYVVKQlFXbENTQ3hMUVVGcVFpeERRVUZTT3p0QlFVVkJMRk5CUVU4N1FVRkRURkFzVDBGQlIyVXNWMEZCVjJ4Q0xFdEJRVXNyUWl4SFFVRk1MRU5CUVZOeVFpeExRVUZVTEVOQlFWZ3NSMEZCTmtKdlFpeFBRVUZQTTBJc1EwRkViRU03UVVGRlRFTXNUMEZCUjJNc1YwRkJWMnhDTEV0QlFVdG5ReXhIUVVGTUxFTkJRVk4wUWl4TFFVRlVMRU5CUVZnc1IwRkJOa0p2UWl4UFFVRlBNVUk3UVVGR2JFTXNSMEZCVUR0QlFVbEVMRU5CVUUwN08wRkJVMUE3T3pzN096dEJRVTFQTEVsQlFVMVBMRGhEUVVGdFFpeFZRVUZEYzBJc1QwRkJSRHRCUVVGQkxGTkJRV0ZCTEZWQlFWVXNSMEZCVml4SFFVRm5RbXBETEV0QlFVdGxMRVZCUVd4RE8wRkJRVUVzUTBGQmVrSTdPMEZCUlZBN096czdPenM3TzBGQlVVOHNTVUZCVFcxQ0xEQkNRVUZUTEZWQlFVTkRMRkZCUVVRc1JVRkJWME1zVVVGQldDeEZRVUZ4UWtNc1VVRkJja0k3UVVGQlFTeE5RVUVyUWtNc1UwRkJMMElzZFVWQlFUSkRMRU5CUVRORE8wRkJRVUVzVTBGQmFVUjZReXhWUVVGVmRVTXNWMEZCV1VNc1dVRkJXVVlzVjBGQlYwTXNVVUZCZGtJc1NVRkJiVU53UXl4TFFVRkxkVU1zUjBGQlRDeERRVUZUUkN4VFFVRlVMRVZCUVc5Q1JDeFJRVUZ3UWl4RFFVRjZSQ3hEUVVGcVJEdEJRVUZCTEVOQlFXWTdPMEZCUlZBN096czdPenRCUVUxUExFbEJRVTFITEhkRFFVRm5RaXhWUVVGRFF5eEhRVUZFTEVWQlFVMURMR0ZCUVU0N1FVRkJRU3hUUVVGNVFpeHJRa0ZCVFVRc1IwRkJUaXhEUVVGRUxFZEJRV1ZCTEU5QlFVOHNUMEZCVDBNc1lVRkJaQ3hEUVVGbUxFZEJRVGhETEVOQlFYUkZPMEZCUVVFc1EwRkJkRUk3TzBGQlJWQTdPenM3T3p0QlFVMVBMRWxCUVUxRExEQkRRVUZwUWl4VlFVRkRReXhSUVVGRUxFVkJRVmRHTEdGQlFWZzdRVUZCUVN4VFFVRTJRa1VzV1VGQldTeFBRVUZQUml4aFFVRnVRaXhEUVVFM1FqdEJRVUZCTEVOQlFYWkNPenRCUVVWUU96czdPenM3TzBGQlQwOHNTVUZCVFVjc2MwTkJRV1VzVlVGQlEwTXNTMEZCUkN4RlFVRlJiRUlzVVVGQlVpeEZRVUZ4UWp0QlFVTXZReXhOUVVGTmJVSXNWVUZCVlN4TFFVRkxSQ3hSUVVGUkxFTkJRV0lzUTBGQmFFSTdRVUZEUVN4TlFVRk5SU3hUUVVGVExFbEJRVXNzU1VGQlNVWXNTMEZCZUVJN1FVRkRRU3hOUVVGTlJ5eHRRa0ZCYlVKcVJDeExRVUZMYTBRc1IwRkJUQ3hEUVVGVGRFSXNWMEZCVjI5Q0xFMUJRWEJDTEVWQlFUUkNMRU5CUVRWQ0xFTkJRWHBDT3p0QlFVVkJMRk5CUVU5b1JDeExRVUZMYlVRc1MwRkJUQ3hEUVVGWFJpeHRRa0ZCYlVKR0xFOUJRVGxDTEVsQlFYbERRU3hQUVVGb1JEdEJRVU5FTEVOQlRrMGlMQ0ptYVd4bElqb2lZMkZzWXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdselRuVnRJSDBnWm5KdmJTQW5MaTkxZEdsc2N5YzdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdiblZ0WW1WeUlIUnZJSGdnWkdWamFXMWhiQ0J3YkdGalpYTmNibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wxY2Jpb3ZYRzVqYjI1emRDQjBiMFJsWTJsdFlXd2dQU0FvYm5WdExDQndjbVZqYVhOcGIyNGdQU0F5S1NBOVBpQjdYRzRnSUhCeVpXTnBjMmx2YmlBOUlERXdJQ29xSUhCeVpXTnBjMmx2Ymp0Y2JpQWdjbVYwZFhKdUlFMWhkR2d1Y205MWJtUW9iblZ0SUNvZ2NISmxZMmx6YVc5dUtTQXZJSEJ5WldOcGMybHZianRjYm4wN1hHNWNibU52Ym5OMElGcEZVazlmVUU5SlRsUWdQU0I3WEc0Z0lIZzZJREFzWEc0Z0lIazZJREFzWEc0Z0lIbzZJREJjYm4wN1hHNWNibU52Ym5OMElHUnBjM1JoYm1ObE1VUWdQU0FvWVN3Z1lpa2dQVDRnVFdGMGFDNWhZbk1vWVNBdElHSXBPMXh1WEc0dktseHVJQ0JCYm1kc1pTQmlaWFIzWldWdUlIQnZhVzUwYzF4dUlDQmNiaUFnVkhKaGJuTnNZWFJsY3lCMGFHVWdhSGx3YjNSb1pYUnBZMkZzSUd4cGJtVWdjMjhnZEdoaGRDQjBhR1VnSjJaeWIyMG5JR052YjNKa2FXNWhkR1Z6WEc0Z0lHRnlaU0JoZENBd0xEQmNiaUFnWEc0Z0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1dDQmhibVFnV1NCamIyOXlaR2x1WVhSbGN5QnZaaUJtY205dElIQnZhVzUwWEc0Z0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1dDQmhibVFnV1NCamIzSmthVzVoZEdWeklHOW1JSFJ2SUhCdmFXNTBYRzRnSUVCeVpYUjFjbTRnVzNKaFpHbGhibDA2SUVGdVoyeGxJR0psZEhkbFpXNGdkR2hsSUhSM2J5QndiMmx1ZEhNZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmhibWRzWlNBOUlDaGhMQ0JpSUQwZ1drVlNUMTlRVDBsT1ZDa2dQVDRnY21Ga2FXRnVjMVJ2UkdWbmNtVmxjeWhOWVhSb0xtRjBZVzR5S0dFdWVDQXRJR0l1ZUN3Z1lTNTVJQzBnWWk1NUtTazdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdaR1ZuY21WbGN5QjBieUJ5WVdScFlXNXpYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlHUmxaM0psWlhOY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmtaV2R5WldWelZHOVNZV1JwWVc1eklEMGdLR1JsWjNKbFpYTXBJRDArSUdSbFozSmxaWE1nS2lCTllYUm9MbEJKSUM4Z01UZ3dPMXh1WEc0dktseHVJQ0JFYVd4aGRHVmNiaUFnWEc0Z0lFTm9ZVzVuWlNCMGFHVWdjSEp2WjNKbGMzTnBiMjRnWW1WMGQyVmxiaUJoSUdGdVpDQmlJR0ZqWTI5eVpHbHVaeUIwYnlCa2FXeGhkR2x2Ymk1Y2JpQWdYRzRnSUZOdklHUnBiR0YwYVc5dUlEMGdNQzQxSUhkdmRXeGtJR05vWVc1blpWeHVJQ0JjYmlBZ1lTQXRMUzB0TFMwdExTMGdZbHh1SUNCY2JpQWdkRzljYmlBZ1hHNGdJR0VnTFMwdExTQmlYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVScGJHRjBaU0J3Y205bmNtVnpjeUJpZVNCNFhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRkJ5WlhacGIzVnpJSFpoYkhWbElIQnNkWE1nZEdobElHUnBiR0YwWldRZ1pHbG1abVZ5Wlc1alpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmthV3hoZEdVZ1BTQW9ZU3dnWWl3Z1pHbHNZWFJwYjI0cElEMCtJR0VnS3lBb0tHSWdMU0JoS1NBcUlHUnBiR0YwYVc5dUtUdGNibHh1THlwY2JpQWdSR2x6ZEdGdVkyVmNiaUFnWEc0Z0lGSmxkSFZ5Ym5NZ2RHaGxJR1JwYzNSaGJtTmxJR0psZEhkbFpXNGdkSGR2SUc0Z1pHbHRaVzV6YVc5dVlXd2djRzlwYm5SekxseHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dlltcGxZM1F2Ym5WdFltVnlYVG9nZUNCaGJtUWdlU0J2Y2lCcWRYTjBJSGdnYjJZZ2NHOXBiblFnUVZ4dUlDQkFjR0Z5WVcwZ1cyOWlhbVZqZEM5dWRXMWlaWEpkT2lBb2IzQjBhVzl1WVd3cE9pQjRJR0Z1WkNCNUlHOXlJR3AxYzNRZ2VDQnZaaUJ3YjJsdWRDQkNYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZSb1pTQmthWE4wWVc1alpTQmlaWFIzWldWdUlIUm9aU0IwZDI4Z2NHOXBiblJ6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdScGMzUmhibU5sSUQwZ0tHRXNJR0lnUFNCYVJWSlBYMUJQU1U1VUtTQTlQaUI3WEc0Z0lDOHZJREZFSUdScGJXVnVjMmx2Ym5OY2JpQWdhV1lnS0dselRuVnRLR0VwS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1JwYzNSaGJtTmxNVVFvWVN3Z1lpazdYRzVjYmlBZ0x5OGdUWFZzZEdrdFpHbHRaVzV6YVc5dVlXeGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmpiMjV6ZENCNFJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlQ3dnWWk1NEtUdGNiaUFnSUNCamIyNXpkQ0I1UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVTd2dZaTU1S1R0Y2JpQWdJQ0JqYjI1emRDQjZSR1ZzZEdFZ1BTQW9hWE5PZFcwb1lTNTZLU2tnUHlCa2FYTjBZVzVqWlRGRUtHRXVlaXdnWWk1NktTQTZJREE3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdUV0YwYUM1emNYSjBLQ2g0UkdWc2RHRWdLaW9nTWlrZ0t5QW9lVVJsYkhSaElDb3FJRElwSUNzZ0tIcEVaV3gwWVNBcUtpQXlLU2s3WEc0Z0lIMWNibjA3WEc1Y2JpOHFYRzRnSUZCeWIyZHlaWE56SUhkcGRHaHBiaUJuYVhabGJpQnlZVzVuWlZ4dUlDQmNiaUFnUjJsMlpXNGdZU0JzYjNkbGNpQnNhVzFwZENCaGJtUWdZVzRnZFhCd1pYSWdiR2x0YVhRc0lIZGxJSEpsZEhWeWJpQjBhR1VnY0hKdlozSmxjM05jYmlBZ0tHVjRjSEpsYzNObFpDQmhjeUJoSUc1MWJXSmxjaUF3TFRFcElISmxjSEpsYzJWdWRHVmtJR0o1SUhSb1pTQm5hWFpsYmlCMllXeDFaU3dnWVc1a1hHNGdJR3hwYldsMElIUm9ZWFFnY0hKdlozSmxjM01nZEc4Z2QybDBhR2x1SURBdE1TNWNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RHOTNaWElnYkdsdGFYUWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlhCd1pYSWdiR2x0YVhSY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCMGJ5Qm1hVzVrSUhCeWIyZHlaWE56SUhkcGRHaHBiaUJuYVhabGJpQnlZVzVuWlZ4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlFjbTluY21WemN5QnZaaUIyWVd4MVpTQjNhWFJvYVc0Z2NtRnVaMlVnWVhNZ1pYaHdjbVZ6YzJWa0lEQXRNVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNBOUlDaG1jbTl0TENCMGJ5d2dkbUZzZFdVcElEMCtJQ2gyWVd4MVpTQXRJR1p5YjIwcElDOGdLSFJ2SUMwZ1puSnZiU2s3WEc1Y2JpOHFYRzRnSUZaaGJIVmxJR2x1SUhKaGJtZGxJR1p5YjIwZ2NISnZaM0psYzNOY2JpQWdYRzRnSUVkcGRtVnVJR0VnYkc5M1pYSWdiR2x0YVhRZ1lXNWtJR0Z1SUhWd2NHVnlJR3hwYldsMExDQjNaU0J5WlhSMWNtNGdkR2hsSUhaaGJIVmxJSGRwZEdocGJseHVJQ0IwYUdGMElISmhibWRsSUdGeklHVjRjSEpsYzNObFpDQmllU0J3Y205bmNtVnpjeUFvWVNCdWRXMWlaWElnWm5KdmJTQXdMVEVwWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZYQndaWElnYkdsdGFYUWdiMllnY21GdVoyVmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJVYUdVZ2NISnZaM0psYzNNZ1ltVjBkMlZsYmlCc2IzZGxjaUJoYm1RZ2RYQndaWElnYkdsdGFYUnpJR1Y0Y0hKbGMzTmxaQ0F3TFRGY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ1lYTWdZMkZzWTNWc1lYUmxaQ0JtY205dElIQnliMmR5WlhOeklIZHBkR2hwYmlCeVlXNW5aU0FvYm05MElHeHBiV2wwWldRZ2QybDBhR2x1SUhKaGJtZGxLVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lBOUlDaG1jbTl0TENCMGJ5d2djSEp2WjNKbGMzTXBJRDArSUNndElIQnliMmR5WlhOeklDb2dabkp2YlNrZ0t5QW9jSEp2WjNKbGMzTWdLaUIwYnlrZ0t5Qm1jbTl0TzF4dVhHNHZLbHh1SUNCUWIybHVkQ0JtY205dElHRnVaMnhsSUdGdVpDQmthWE4wWVc1alpWeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lBeVJDQndiMmx1ZENCdlppQnZjbWxuYVc1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkJibWRzWlNCbWNtOXRJRzl5YVdkcGJseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVJwYzNSaGJtTmxJR1p5YjIwZ2IzSnBaMmx1WEc0Z0lFQnlaWFIxY200Z1cyOWlhbVZqZEYwNklFTmhiR04xYkdGMFpXUWdNa1FnY0c5cGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjRzlwYm5SR2NtOXRRVzVuYkdWQmJtUkVhWE4wWVc1alpTQTlJQ2h2Y21sbmFXNHNJR0Z1WjJ4bExDQmthWE4wWVc1alpTa2dQVDRnZTF4dUlDQmhibWRzWlNBOUlHUmxaM0psWlhOVWIxSmhaR2xoYm5Nb1lXNW5iR1VwTzF4dVhHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2VEb2daR2x6ZEdGdVkyVWdLaUJOWVhSb0xtTnZjeWhoYm1kc1pTa2dLeUJ2Y21sbmFXNHVlQ3hjYmlBZ0lDQjVPaUJrYVhOMFlXNWpaU0FxSUUxaGRHZ3VjMmx1S0dGdVoyeGxLU0FySUc5eWFXZHBiaTU1WEc0Z0lIMDdYRzU5TzF4dVhHNHZLbHh1SUNCRGIyNTJaWEowSUhKaFpHbGhibk1nZEc4Z1pHVm5jbVZsYzF4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJ5WVdScFlXNXpYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUdSbFozSmxaWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21Ga2FXRnVjMVJ2UkdWbmNtVmxjeUE5SUNoeVlXUnBZVzV6S1NBOVBpQnlZV1JwWVc1eklDb2dNVGd3SUM4Z1RXRjBhQzVRU1R0Y2JseHVMeXBjYmlBZ1JuSmhiV1Z5WVhSbExXbHVaR1Z3Wlc1a1pXNTBJSE50YjI5MGFHbHVaMXh1WEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RtVjNJSFpoYkhWbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUMnhrSUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRJQ2h2Y0hScGIyNWhiQ2s2SUZOdGIyOTBhR2x1WnlBb01DQnBjeUJ1YjI1bEtWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpiVzl2ZEdnZ1BTQW9ibVYzVm1Gc2RXVXNJRzlzWkZaaGJIVmxMQ0JrZFhKaGRHbHZiaXdnYzIxdmIzUm9hVzVuSUQwZ01Da2dQVDRnZEc5RVpXTnBiV0ZzS0c5c1pGWmhiSFZsSUNzZ0tHUjFjbUYwYVc5dUlDb2dLRzVsZDFaaGJIVmxJQzBnYjJ4a1ZtRnNkV1VwSUM4Z1RXRjBhQzV0WVhnb2MyMXZiM1JvYVc1bkxDQmtkWEpoZEdsdmJpa3BLVHRjYmx4dUx5cGNiaUFnUTI5dWRtVnlkQ0I0SUhCbGNpQnpaV052Ym1RZ2RHOGdjR1Z5SUdaeVlXMWxJSFpsYkc5amFYUjVJR0poYzJWa0lHOXVJR1p3YzF4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWYm1sMElIQmxjaUJ6WldOdmJtUmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJHY21GdFpTQmtkWEpoZEdsdmJpQnBiaUJ0YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemNHVmxaRkJsY2taeVlXMWxJRDBnS0hod2N5d2dabkpoYldWRWRYSmhkR2x2YmlrZ1BUNGdLR2x6VG5WdEtIaHdjeWtwSUQ4Z2VIQnpJQzhnS0RFd01EQWdMeUJtY21GdFpVUjFjbUYwYVc5dUtTQTZJREE3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnZG1Wc2IyTnBkSGtnYVc1MGJ5QjJaV3hwWTJsMGVTQndaWElnYzJWamIyNWtYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVnVhWFFnY0dWeUlHWnlZVzFsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjRnYVc0Z2JYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JsWldSUVpYSlRaV052Ym1RZ1BTQW9kbVZzYjJOcGRIa3NJR1p5WVcxbFJIVnlZWFJwYjI0cElEMCtJSFpsYkc5amFYUjVJQ29nS0RFd01EQWdMeUJtY21GdFpVUjFjbUYwYVc5dUtUdGNibHh1THlwY2JpQWdRM0psWVhSbElITjBaWEJ3WldRZ2RtVnljMmx2YmlCdlppQXdMVEVnY0hKdlozSmxjM05jYmlBZ1hHNGdJRUJ3WVhKaGJTQmJhVzUwWFRvZ1RuVnRZbVZ5SUc5bUlITjBaWEJ6WEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCVGRHVndjR1ZrSUhaaGJIVmxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE4wWlhCUWNtOW5jbVZ6Y3lBOUlDaHpkR1Z3Y3l3Z2NISnZaM0psYzNNcElEMCtJSHRjYmlBZ1kyOXVjM1FnYzJWbmJXVnVkQ0E5SURFZ0x5QW9jM1JsY0hNZ0xTQXhLVHRjYmlBZ1kyOXVjM1FnZEdGeVoyVjBJRDBnTVNBdElDZ3hJQzhnYzNSbGNITXBPMXh1SUNCamIyNXpkQ0J3Y205bmNtVnpjMDltVkdGeVoyVjBJRDBnVFdGMGFDNXRhVzRvY0hKdlozSmxjM01nTHlCMFlYSm5aWFFzSURFcE8xeHVYRzRnSUhKbGRIVnliaUJOWVhSb0xtWnNiMjl5S0hCeWIyZHlaWE56VDJaVVlYSm5aWFFnTHlCelpXZHRaVzUwS1NBcUlITmxaMjFsYm5RN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2NhbGMuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCA9IDEuNTI1O1xuXG52YXIgY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZVJldmVyc2VkRWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2luZygxIC0gcCk7XG4gIH07XG59O1xudmFyIGNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVNaXJyb3JlZEVhc2luZyA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPD0gMC41ID8gZWFzaW5nKDIgKiBwKSAvIDIgOiAoMiAtIGVhc2luZygyICogKDEgLSBwKSkpIC8gMjtcbiAgfTtcbn07XG5cbnZhciBsaW5lYXIgPSBleHBvcnRzLmxpbmVhciA9IGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwO1xufTtcblxudmFyIGNyZWF0ZUV4cG9JbiA9IGV4cG9ydHMuY3JlYXRlRXhwb0luID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBNYXRoLnBvdyhwLCBwb3dlcik7XG4gIH07XG59O1xudmFyIGVhc2VJbiA9IGV4cG9ydHMuZWFzZUluID0gY3JlYXRlRXhwb0luKDIpO1xudmFyIGVhc2VPdXQgPSBleHBvcnRzLmVhc2VPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNlSW4pO1xudmFyIGVhc2VJbk91dCA9IGV4cG9ydHMuZWFzZUluT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoZWFzZUluKTtcblxudmFyIGNpcmNJbiA9IGV4cG9ydHMuY2lyY0luID0gZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocCkpO1xufTtcbnZhciBjaXJjT3V0ID0gZXhwb3J0cy5jaXJjT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoY2lyY0luKTtcbnZhciBjaXJjSW5PdXQgPSBleHBvcnRzLmNpcmNJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGNpcmNPdXQpO1xuXG52YXIgY3JlYXRlQmFja0luID0gZXhwb3J0cy5jcmVhdGVCYWNrSW4gPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgKiBwICogKChwb3dlciArIDEpICogcCAtIHBvd2VyKTtcbiAgfTtcbn07XG52YXIgYmFja0luID0gZXhwb3J0cy5iYWNrSW4gPSBjcmVhdGVCYWNrSW4oREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xudmFyIGJhY2tPdXQgPSBleHBvcnRzLmJhY2tPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhiYWNrSW4pO1xudmFyIGJhY2tJbk91dCA9IGV4cG9ydHMuYmFja0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoYmFja0luKTtcblxudmFyIGNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgdmFyIGJhY2tFYXNpbmcgPSBjcmVhdGVCYWNrSW4ocG93ZXIpO1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gKHAgKj0gMikgPCAxID8gMC41ICogYmFja0Vhc2luZyhwKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHAgLSAxKSkpO1xuICB9O1xufTtcblxudmFyIGFudGljaXBhdGUgPSBleHBvcnRzLmFudGljaXBhdGUgPSBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZaV0Z6YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiSWtSRlJrRlZURlJmVDFaRlVsTklUMDlVWDFOVVVrVk9SMVJJSWl3aVkzSmxZWFJsVW1WMlpYSnpaV1JGWVhOcGJtY2lMQ0psWVhOcGJtY2lMQ0p3SWl3aVkzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY2lMQ0pzYVc1bFlYSWlMQ0pqY21WaGRHVkZlSEJ2U1c0aUxDSndiM2RsY2lJc0ltVmhjMlZKYmlJc0ltVmhjMlZQZFhRaUxDSmxZWE5sU1c1UGRYUWlMQ0pqYVhKalNXNGlMQ0pOWVhSb0lpd2ljMmx1SWl3aVlXTnZjeUlzSW1OcGNtTlBkWFFpTENKamFYSmpTVzVQZFhRaUxDSmpjbVZoZEdWQ1lXTnJTVzRpTENKaVlXTnJTVzRpTENKaVlXTnJUM1YwSWl3aVltRmphMGx1VDNWMElpd2lZM0psWVhSbFFXNTBhV05wY0dGMFpVVmhjMmx1WnlJc0ltSmhZMnRGWVhOcGJtY2lMQ0p3YjNjaUxDSmhiblJwWTJsd1lYUmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4SlFVRk5RU3cyUWtGQk5rSXNTMEZCYmtNN08wRkJSVThzU1VGQlRVTXNjMFJCUVhWQ0xGVkJRVU5ETEUxQlFVUTdRVUZCUVN4VFFVRlpMRlZCUVVORExFTkJRVVE3UVVGQlFTeFhRVUZQTEVsQlFVbEVMRTlCUVU4c1NVRkJTVU1zUTBGQldDeERRVUZZTzBGQlFVRXNSMEZCV2p0QlFVRkJMRU5CUVRkQ08wRkJRMEVzU1VGQlRVTXNjMFJCUVhWQ0xGVkJRVU5HTEUxQlFVUTdRVUZCUVN4VFFVRlpMRlZCUVVORExFTkJRVVE3UVVGQlFTeFhRVUZSUVN4TFFVRkxMRWRCUVU0c1IwRkJZVVFzVDBGQlR5eEpRVUZKUXl4RFFVRllMRWxCUVdkQ0xFTkJRVGRDTEVkQlFXbERMRU5CUVVNc1NVRkJTVVFzVDBGQlR5eExRVUZMTEVsQlFVbERMRU5CUVZRc1EwRkJVQ3hEUVVGTUxFbEJRVFJDTEVOQlFYQkZPMEZCUVVFc1IwRkJXanRCUVVGQkxFTkJRVGRDT3p0QlFVVkJMRWxCUVUxRkxEQkNRVUZUTEZWQlFVTkdMRU5CUVVRN1FVRkJRU3hUUVVGUFFTeERRVUZRTzBGQlFVRXNRMEZCWmpzN1FVRkZRU3hKUVVGTlJ5eHpRMEZCWlN4VlFVRkRReXhMUVVGRU8wRkJRVUVzVTBGQlZ5eFZRVUZEU2l4RFFVRkVPMEZCUVVFc2IwSkJRVTlCTEVOQlFWQXNSVUZCV1Vrc1MwRkJXanRCUVVGQkxFZEJRVmc3UVVGQlFTeERRVUZ5UWp0QlFVTkJMRWxCUVUxRExEQkNRVUZUUml4aFFVRmhMRU5CUVdJc1EwRkJaanRCUVVOQkxFbEJRVTFITERSQ1FVRlZVaXh4UWtGQmNVSlBMRTFCUVhKQ0xFTkJRV2hDTzBGQlEwRXNTVUZCVFVVc1owTkJRVmxPTEhGQ1FVRnhRa2tzVFVGQmNrSXNRMEZCYkVJN08wRkJSVUVzU1VGQlRVY3NNRUpCUVZNc1ZVRkJRMUlzUTBGQlJEdEJRVUZCTEZOQlFVOHNTVUZCU1ZNc1MwRkJTME1zUjBGQlRDeERRVUZUUkN4TFFVRkxSU3hKUVVGTUxFTkJRVlZZTEVOQlFWWXNRMEZCVkN4RFFVRllPMEZCUVVFc1EwRkJaanRCUVVOQkxFbEJRVTFaTERSQ1FVRlZaQ3h4UWtGQmNVSlZMRTFCUVhKQ0xFTkJRV2hDTzBGQlEwRXNTVUZCVFVzc1owTkJRVmxhTEhGQ1FVRnhRbGNzVDBGQmNrSXNRMEZCYkVJN08wRkJSVUVzU1VGQlRVVXNjME5CUVdVc1ZVRkJRMVlzUzBGQlJEdEJRVUZCTEZOQlFWY3NWVUZCUTBvc1EwRkJSRHRCUVVGQkxGZEJRVkZCTEVsQlFVbEJMRU5CUVV3c1NVRkJWeXhEUVVGRFNTeFJRVUZSTEVOQlFWUXNTVUZCWTBvc1EwRkJaQ3hIUVVGclFra3NTMEZCTjBJc1EwRkJVRHRCUVVGQkxFZEJRVmc3UVVGQlFTeERRVUZ5UWp0QlFVTkJMRWxCUVUxWExEQkNRVUZUUkN4aFFVRmhha0lzTUVKQlFXSXNRMEZCWmp0QlFVTkJMRWxCUVUxdFFpdzBRa0ZCVld4Q0xIRkNRVUZ4UW1sQ0xFMUJRWEpDTEVOQlFXaENPMEZCUTBFc1NVRkJUVVVzWjBOQlFWbG9RaXh4UWtGQmNVSmpMRTFCUVhKQ0xFTkJRV3hDT3p0QlFVVkJMRWxCUVUxSExEQkVRVUY1UWl4VlFVRkRaQ3hMUVVGRUxFVkJRVmM3UVVGREwwTXNUVUZCVFdVc1lVRkJZVXdzWVVGQllWWXNTMEZCWWl4RFFVRnVRanRCUVVOQkxGTkJRVThzVlVGQlEwb3NRMEZCUkR0QlFVRkJMRmRCUVZFc1EwRkJRMEVzUzBGQlN5eERRVUZPTEVsQlFWY3NRMEZCV2l4SFFVRnBRaXhOUVVGTmJVSXNWMEZCVjI1Q0xFTkJRVmdzUTBGQmRrSXNSMEZCZFVNc1QwRkJUeXhKUVVGSlV5eExRVUZMVnl4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVU1zUlVGQlJDeEpRVUZQY0VJc1NVRkJTU3hEUVVGWUxFTkJRVm9zUTBGQldDeERRVUU1UXp0QlFVRkJMRWRCUVZBN1FVRkRSQ3hEUVVoTk96dEJRVXRCTEVsQlFVMXhRaXhyUTBGQllVZ3NkVUpCUVhWQ2NrSXNNRUpCUVhaQ0xFTkJRVzVDSWl3aVptbHNaU0k2SW1WaGMybHVaeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbU52Ym5OMElFUkZSa0ZWVEZSZlQxWkZVbE5JVDA5VVgxTlVVa1ZPUjFSSUlEMGdNUzQxTWpVN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZTWlhabGNuTmxaRVZoYzJsdVp5QTlJQ2hsWVhOcGJtY3BJRDArSUNod0tTQTlQaUF4SUMwZ1pXRnphVzVuS0RFZ0xTQndLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWTmFYSnliM0psWkVWaGMybHVaeUE5SUNobFlYTnBibWNwSUQwK0lDaHdLU0E5UGlBb2NDQThQU0F3TGpVcElEOGdaV0Z6YVc1bktESWdLaUJ3S1NBdklESWdPaUFvTWlBdElHVmhjMmx1WnlneUlDb2dLREVnTFNCd0tTa3BJQzhnTWp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUd4cGJtVmhjaUE5SUNod0tTQTlQaUJ3TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxSWGh3YjBsdUlEMGdLSEJ2ZDJWeUtTQTlQaUFvY0NrZ1BUNGdjQ0FxS2lCd2IzZGxjanRjYm1WNGNHOXlkQ0JqYjI1emRDQmxZWE5sU1c0Z1BTQmpjbVZoZEdWRmVIQnZTVzRvTWlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWldGelpVOTFkQ0E5SUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bktHVmhjMlZKYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWldGelpVbHVUM1YwSUQwZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY29aV0Z6WlVsdUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnBjbU5KYmlBOUlDaHdLU0E5UGlBeElDMGdUV0YwYUM1emFXNG9UV0YwYUM1aFkyOXpLSEFwS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYVhKalQzVjBJRDBnWTNKbFlYUmxVbVYyWlhKelpXUkZZWE5wYm1jb1kybHlZMGx1S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYVhKalNXNVBkWFFnUFNCamNtVmhkR1ZOYVhKeWIzSmxaRVZoYzJsdVp5aGphWEpqVDNWMEtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVKaFkydEpiaUE5SUNod2IzZGxjaWtnUFQ0Z0tIQXBJRDArSUNod0lDb2djQ2tnS2lBb0tIQnZkMlZ5SUNzZ01Ta2dLaUJ3SUMwZ2NHOTNaWElwTzF4dVpYaHdiM0owSUdOdmJuTjBJR0poWTJ0SmJpQTlJR055WldGMFpVSmhZMnRKYmloRVJVWkJWVXhVWDA5V1JWSlRTRTlQVkY5VFZGSkZUa2RVU0NrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWW1GamEwOTFkQ0E5SUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bktHSmhZMnRKYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWW1GamEwbHVUM1YwSUQwZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY29ZbUZqYTBsdUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVGdWRHbGphWEJoZEdWRllYTnBibWNnUFNBb2NHOTNaWElwSUQwK0lIdGNiaUFnWTI5dWMzUWdZbUZqYTBWaGMybHVaeUE5SUdOeVpXRjBaVUpoWTJ0SmJpaHdiM2RsY2lrN1hHNGdJSEpsZEhWeWJpQW9jQ2tnUFQ0Z0tDaHdJQ285SURJcElEd2dNU2tnUHlBd0xqVWdLaUJpWVdOclJXRnphVzVuS0hBcElEb2dNQzQxSUNvZ0tESWdMU0JOWVhSb0xuQnZkeWd5TENBdE1UQWdLaUFvY0NBdElERXBLU2s3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1lXNTBhV05wY0dGMFpTQTlJR055WldGMFpVRnVkR2xqYVhCaGRHVkZZWE5wYm1jb1JFVkdRVlZNVkY5UFZrVlNVMGhQVDFSZlUxUlNSVTVIVkVncE8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5ibGVuZENvbG9yID0gZXhwb3J0cy5hbHBoYSA9IGV4cG9ydHMuY29sb3IgPSBleHBvcnRzLmhzbGEgPSBleHBvcnRzLnJnYmEgPSBleHBvcnRzLnJnYlVuaXQgPSBleHBvcnRzLnB4ID0gZXhwb3J0cy5kZWdyZWVzID0gZXhwb3J0cy5wZXJjZW50ID0gZXhwb3J0cy50cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IGV4cG9ydHMuc3RlcHMgPSBleHBvcnRzLndyYXAgPSBleHBvcnRzLm5vbmxpbmVhclNwcmluZyA9IGV4cG9ydHMuc3ByaW5nID0gZXhwb3J0cy5nZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gZXhwb3J0cy5tdWx0aXBseSA9IGV4cG9ydHMuZGl2aWRlID0gZXhwb3J0cy5hZGQgPSBleHBvcnRzLnN1YnRyYWN0ID0gZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGV4cG9ydHMuZmxvdyA9IGV4cG9ydHMuY29uZGl0aW9uYWwgPSBleHBvcnRzLmNsYW1wID0gZXhwb3J0cy5jbGFtcE1pbiA9IGV4cG9ydHMuY2xhbXBNYXggPSBleHBvcnRzLmFwcGVuZFVuaXQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4vY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3BhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcblxudmFyIG5vb3AgPSBmdW5jdGlvbiAodikge1xuICByZXR1cm4gdjtcbn07XG5cbi8qKlxuICogQXBwZW5kIFVuaXRcbiAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGVuZFxuICogYXBwZW5kVW5pdCgncHgnLCAyMCkgLT4gJzIwcHgnXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVuaXQpXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBhcHBlbmRVbml0ID0gZXhwb3J0cy5hcHBlbmRVbml0ID0gZnVuY3Rpb24gKHVuaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuICcnICsgdiArIHVuaXQ7XG4gIH07XG59O1xuXG4vKipcbiAqIENsYW1wIHZhbHVlIGJldHdlZW5cbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVzdHJpY3QgYSBnaXZlbiB2YWx1ZSBiZXR3ZWVuIGBtaW5gIGFuZCBgbWF4YFxuICogQHBhcmFtICB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBjbGFtcE1heCA9IGV4cG9ydHMuY2xhbXBNYXggPSBmdW5jdGlvbiAobWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBNYXRoLm1pbih2LCBtYXgpO1xuICB9O1xufTtcbnZhciBjbGFtcE1pbiA9IGV4cG9ydHMuY2xhbXBNaW4gPSBmdW5jdGlvbiAobWluKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBNYXRoLm1heCh2LCBtaW4pO1xuICB9O1xufTtcbnZhciBjbGFtcCA9IGV4cG9ydHMuY2xhbXAgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgdmFyIF9taW4gPSBjbGFtcE1pbihtaW4pO1xuICB2YXIgX21heCA9IGNsYW1wTWF4KG1heCk7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBfbWluKF9tYXgodikpO1xuICB9O1xufTtcblxudmFyIGNvbmRpdGlvbmFsID0gZXhwb3J0cy5jb25kaXRpb25hbCA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGlmVHJ1ZSkge1xuICB2YXIgaWZGYWxzZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbm9vcDtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2LCBhY3Rpb24pIHtcbiAgICByZXR1cm4gY29uZGl0aW9uKHYsIGFjdGlvbikgPyBpZlRydWUodiwgYWN0aW9uKSA6IGlmRmFsc2UodiwgYWN0aW9uKTtcbiAgfTtcbn07XG5cbi8qKlxuICogRmxvd1xuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogZmxvdyhtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG52YXIgZmxvdyA9IGV4cG9ydHMuZmxvdyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRyYW5zZm9ybWVycyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHRyYW5zZm9ybWVyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhY2MpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHZhciB2ID0gYWNjO1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXS5hcHBseSh0cmFuc2Zvcm1lcnMsIFt2XS5jb25jYXQoYXJncykpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcblxuLyoqXG4gKiBJbnRlcnBvbGF0ZSBmcm9tIHNldCBvZiB2YWx1ZXMgdG8gYW5vdGhlclxuICogQHBhcmFtICB7QXJyYXl9IGlucHV0IGFycmF5XG4gKiBAcGFyYW0gIHtBcnJheX0gb3V0cHV0XG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gcmFuZ2VFYXNpbmdcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG52YXIgaW50ZXJwb2xhdGUgPSBleHBvcnRzLmludGVycG9sYXRlID0gZnVuY3Rpb24gKGlucHV0LCBvdXRwdXQsIHJhbmdlRWFzaW5nKSB7XG4gIHZhciByYW5nZUxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgdmFyIGZpbmFsSW5kZXggPSByYW5nZUxlbmd0aCAtIDE7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtaW5pbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2IDw9IGlucHV0WzBdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0WzBdO1xuICAgIH1cblxuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA+PSBpbnB1dFtmaW5hbEluZGV4XSkge1xuICAgICAgcmV0dXJuIG91dHB1dFtmaW5hbEluZGV4XTtcbiAgICB9XG5cbiAgICB2YXIgaSA9IDE7XG5cbiAgICAvLyBGaW5kIGluZGV4IG9mIHJhbmdlIHN0YXJ0XG4gICAgZm9yICg7IGkgPCByYW5nZUxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5wdXRbaV0gPiB2IHx8IGkgPT09IGZpbmFsSW5kZXgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByb2dyZXNzSW5SYW5nZSA9ICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoaW5wdXRbaSAtIDFdLCBpbnB1dFtpXSwgdik7XG4gICAgdmFyIGVhc2VkUHJvZ3Jlc3MgPSByYW5nZUVhc2luZyA/IHJhbmdlRWFzaW5nW2ldKHByb2dyZXNzSW5SYW5nZSkgOiBwcm9ncmVzc0luUmFuZ2U7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykob3V0cHV0W2kgLSAxXSwgb3V0cHV0W2ldLCBlYXNlZFByb2dyZXNzKTtcbiAgfTtcbn07XG5cbnZhciBzdWJ0cmFjdCA9IGV4cG9ydHMuc3VidHJhY3QgPSBmdW5jdGlvbiAob3JpZ2luKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2IC0gb3JpZ2luO1xuICB9O1xufTtcbnZhciBhZGQgPSBleHBvcnRzLmFkZCA9IGZ1bmN0aW9uIChvcmlnaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYgKyBvcmlnaW47XG4gIH07XG59O1xudmFyIGRpdmlkZSA9IGV4cG9ydHMuZGl2aWRlID0gZnVuY3Rpb24gKG9yaWdpbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdiAvIG9yaWdpbjtcbiAgfTtcbn07XG52YXIgbXVsdGlwbHkgPSBleHBvcnRzLm11bHRpcGx5ID0gZnVuY3Rpb24gKG9yaWdpbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdiAqIG9yaWdpbjtcbiAgfTtcbn07XG5cbnZhciBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gZXhwb3J0cy5nZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYWx0ZXJEaXNwbGFjZW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG5vb3A7XG4gIHJldHVybiBmdW5jdGlvbiAoY29uc3RhbnQsIG9yaWdpbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgdmFyIGRpc3BsYWNlbWVudCA9IG9yaWdpbiAtIHY7XG4gICAgICB2YXIgc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQgPSAtY29uc3RhbnQgKiAoMCAtIGFsdGVyRGlzcGxhY2VtZW50KE1hdGguYWJzKGRpc3BsYWNlbWVudCkpKTtcbiAgICAgIHJldHVybiBkaXNwbGFjZW1lbnQgPD0gMCA/IG9yaWdpbiArIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50IDogb3JpZ2luIC0gc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQ7XG4gICAgfTtcbiAgfTtcbn07XG5cbnZhciBzcHJpbmcgPSBleHBvcnRzLnNwcmluZyA9IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcoKTtcbnZhciBub25saW5lYXJTcHJpbmcgPSBleHBvcnRzLm5vbmxpbmVhclNwcmluZyA9IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcoTWF0aC5zcXJ0KTtcblxudmFyIHdyYXAgPSBleHBvcnRzLndyYXAgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHJhbmdlU2l6ZSA9IG1heCAtIG1pbjtcbiAgICByZXR1cm4gKCh2IC0gbWluKSAlIHJhbmdlU2l6ZSArIHJhbmdlU2l6ZSkgJSByYW5nZVNpemUgKyBtaW47XG4gIH07XG59O1xuXG52YXIgc3RlcHMgPSBleHBvcnRzLnN0ZXBzID0gZnVuY3Rpb24gKHN0ZXBzLCBtaW4sIG1heCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKG1pbiwgbWF4LCB2KTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLnN0ZXBQcm9ncmVzcykoc3RlcHMsIHByb2dyZXNzKTtcbiAgfTtcbn07XG5cbnZhciB0cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IGV4cG9ydHMudHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSBmdW5jdGlvbiAoY2hpbGRUcmFuc2Zvcm1lcnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZm9yICh2YXIga2V5IGluIHYpIHtcbiAgICAgIHZhciBjaGlsZFRyYW5zZm9ybWVyID0gY2hpbGRUcmFuc2Zvcm1lcnNba2V5XTtcbiAgICAgIGlmIChjaGlsZFRyYW5zZm9ybWVyKSB7XG4gICAgICAgIHZba2V5XSA9IGNoaWxkVHJhbnNmb3JtZXIodltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG5cbi8vIFVuaXQgdHJhbnNmb3JtZXJzXG52YXIgcGVyY2VudCA9IGV4cG9ydHMucGVyY2VudCA9IGFwcGVuZFVuaXQoJyUnKTtcbnZhciBkZWdyZWVzID0gZXhwb3J0cy5kZWdyZWVzID0gYXBwZW5kVW5pdCgnZGVnJyk7XG52YXIgcHggPSBleHBvcnRzLnB4ID0gYXBwZW5kVW5pdCgncHgnKTtcblxudmFyIHJnYlVuaXQgPSBleHBvcnRzLnJnYlVuaXQgPSBmbG93KGNsYW1wKDAsIDI1NSksIE1hdGgucm91bmQpO1xuXG52YXIgcmdiYVRlbXBsYXRlID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIHJlZCA9IF9yZWYucmVkLFxuICAgICAgZ3JlZW4gPSBfcmVmLmdyZWVuLFxuICAgICAgYmx1ZSA9IF9yZWYuYmx1ZSxcbiAgICAgIF9yZWYkYWxwaGEgPSBfcmVmLmFscGhhLFxuICAgICAgYWxwaGEgPSBfcmVmJGFscGhhID09PSB1bmRlZmluZWQgPyAxIDogX3JlZiRhbHBoYTtcbiAgcmV0dXJuICdyZ2JhKCcgKyByZWQgKyAnLCAnICsgZ3JlZW4gKyAnLCAnICsgYmx1ZSArICcsICcgKyBhbHBoYSArICcpJztcbn07XG5cbnZhciByZ2JhID0gZXhwb3J0cy5yZ2JhID0gZmxvdyh0cmFuc2Zvcm1DaGlsZFZhbHVlcyh7XG4gIHJlZDogcmdiVW5pdCxcbiAgZ3JlZW46IHJnYlVuaXQsXG4gIGJsdWU6IHJnYlVuaXQsXG4gIGFscGhhOiBhbHBoYVxufSksIHJnYmFUZW1wbGF0ZSk7XG5cbnZhciBoc2xhVGVtcGxhdGUgPSBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgdmFyIGh1ZSA9IF9yZWYyLmh1ZSxcbiAgICAgIHNhdHVyYXRpb24gPSBfcmVmMi5zYXR1cmF0aW9uLFxuICAgICAgbGlnaHRuZXNzID0gX3JlZjIubGlnaHRuZXNzLFxuICAgICAgX3JlZjIkYWxwaGEgPSBfcmVmMi5hbHBoYSxcbiAgICAgIGFscGhhID0gX3JlZjIkYWxwaGEgPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmMiRhbHBoYTtcbiAgcmV0dXJuICdoc2xhKCcgKyBodWUgKyAnLCAnICsgc2F0dXJhdGlvbiArICcsICcgKyBsaWdodG5lc3MgKyAnLCAnICsgYWxwaGEgKyAnKSc7XG59O1xuXG52YXIgaHNsYSA9IGV4cG9ydHMuaHNsYSA9IGZsb3codHJhbnNmb3JtQ2hpbGRWYWx1ZXMoe1xuICBodWU6IHBhcnNlRmxvYXQsXG4gIHNhdHVyYXRpb246IHBlcmNlbnQsXG4gIGxpZ2h0bmVzczogcGVyY2VudCxcbiAgYWxwaGE6IGFscGhhXG59KSwgaHNsYVRlbXBsYXRlKTtcblxudmFyIGNvbG9yID0gZXhwb3J0cy5jb2xvciA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICh2Lmhhc093blByb3BlcnR5KCdyZWQnKSkge1xuICAgIHJldHVybiByZ2JhKHYpO1xuICB9IGVsc2UgaWYgKHYuaGFzT3duUHJvcGVydHkoJ2h1ZScpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cbiAgcmV0dXJuIHY7XG59O1xuXG52YXIgYWxwaGEgPSBleHBvcnRzLmFscGhhID0gY2xhbXAoMCwgMSk7XG5cbnZhciBibGVuZCA9IGZ1bmN0aW9uIChmcm9tLCB0bywgdikge1xuICB2YXIgZnJvbUV4cG8gPSBmcm9tICogZnJvbTtcbiAgdmFyIHRvRXhwbyA9IHRvICogdG87XG4gIHJldHVybiBNYXRoLnNxcnQodiAqICh0b0V4cG8gLSBmcm9tRXhwbykgKyBmcm9tRXhwbyk7XG59O1xuLy8gaHR0cDovL2NvZGVwZW4uaW8vb3N1Ymxha2UvcGVuL3hHVlZhTlxudmFyIGJsZW5kQ29sb3IgPSBleHBvcnRzLmJsZW5kQ29sb3IgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgdmFyIGZyb21Db2xvciA9ICgwLCBfdXRpbHMuaXNTdHJpbmcpKGZyb20pID8gKDAsIF9wYXJzZXJzLmNvbG9yKShmcm9tKSA6IGZyb207XG4gIHZhciB0b0NvbG9yID0gKDAsIF91dGlscy5pc1N0cmluZykodG8pID8gKDAsIF9wYXJzZXJzLmNvbG9yKSh0bykgOiB0bztcblxuICB2YXIgYmxlbmRlZCA9IF9leHRlbmRzKHt9LCBmcm9tQ29sb3IpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGZvciAodmFyIGtleSBpbiBibGVuZGVkKSB7XG4gICAgICBibGVuZGVkW2tleV0gPSBibGVuZChmcm9tQ29sb3Jba2V5XSwgdG9Db2xvcltrZXldLCB2KTtcbiAgICB9XG4gICAgYmxlbmRlZC5yZWQgPSBibGVuZChmcm9tQ29sb3IucmVkLCB0b0NvbG9yLnJlZCwgdik7XG4gICAgYmxlbmRlZC5ncmVlbiA9IGJsZW5kKGZyb21Db2xvci5ncmVlbiwgdG9Db2xvci5ncmVlbiwgdik7XG4gICAgYmxlbmRlZC5ibHVlID0gYmxlbmQoZnJvbUNvbG9yLmJsdWUsIHRvQ29sb3IuYmx1ZSwgdik7XG4gICAgYmxlbmRlZC5hbHBoYSA9ICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZnJvbUNvbG9yLmFscGhhLCB0b0NvbG9yLmFscGhhLCB2KTtcbiAgICByZXR1cm4gYmxlbmRlZDtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEhKaGJuTm1iM0p0WlhKekxtcHpJbDBzSW01aGJXVnpJanBiSW01dmIzQWlMQ0oySWl3aVlYQndaVzVrVlc1cGRDSXNJblZ1YVhRaUxDSmpiR0Z0Y0UxaGVDSXNJbTFoZUNJc0lrMWhkR2dpTENKdGFXNGlMQ0pqYkdGdGNFMXBiaUlzSW1Oc1lXMXdJaXdpWDIxcGJpSXNJbDl0WVhnaUxDSmpiMjVrYVhScGIyNWhiQ0lzSW1OdmJtUnBkR2x2YmlJc0ltbG1WSEoxWlNJc0ltbG1SbUZzYzJVaUxDSmhZM1JwYjI0aUxDSm1iRzkzSWl3aWRISmhibk5tYjNKdFpYSnpJaXdpYm5WdFZISmhibk5tYjNKdFpYSnpJaXdpYkdWdVozUm9JaXdpYVNJc0ltRmpZeUlzSW1GeVozTWlMQ0pwYm5SbGNuQnZiR0YwWlNJc0ltbHVjSFYwSWl3aWIzVjBjSFYwSWl3aWNtRnVaMlZGWVhOcGJtY2lMQ0p5WVc1blpVeGxibWQwYUNJc0ltWnBibUZzU1c1a1pYZ2lMQ0p3Y205bmNtVnpjMGx1VW1GdVoyVWlMQ0psWVhObFpGQnliMmR5WlhOeklpd2ljM1ZpZEhKaFkzUWlMQ0p2Y21sbmFXNGlMQ0poWkdRaUxDSmthWFpwWkdVaUxDSnRkV3gwYVhCc2VTSXNJbWRsYm1WeVlYUmxUbTl1U1c1MFpYSm5jbUYwWldSVGNISnBibWNpTENKaGJIUmxja1JwYzNCc1lXTmxiV1Z1ZENJc0ltTnZibk4wWVc1MElpd2laR2x6Y0d4aFkyVnRaVzUwSWl3aWMzQnlhVzVuVFc5a2FXWnBaV1JFYVhOd2JHRmpaVzFsYm5RaUxDSmhZbk1pTENKemNISnBibWNpTENKdWIyNXNhVzVsWVhKVGNISnBibWNpTENKemNYSjBJaXdpZDNKaGNDSXNJbkpoYm1kbFUybDZaU0lzSW5OMFpYQnpJaXdpY0hKdlozSmxjM01pTENKMGNtRnVjMlp2Y20xRGFHbHNaRlpoYkhWbGN5SXNJbU5vYVd4a1ZISmhibk5tYjNKdFpYSnpJaXdpYTJWNUlpd2lZMmhwYkdSVWNtRnVjMlp2Y20xbGNpSXNJbkJsY21ObGJuUWlMQ0prWldkeVpXVnpJaXdpY0hnaUxDSnlaMkpWYm1sMElpd2ljbTkxYm1RaUxDSnlaMkpoVkdWdGNHeGhkR1VpTENKeVpXUWlMQ0puY21WbGJpSXNJbUpzZFdVaUxDSmhiSEJvWVNJc0luSm5ZbUVpTENKb2MyeGhWR1Z0Y0d4aGRHVWlMQ0pvZFdVaUxDSnpZWFIxY21GMGFXOXVJaXdpYkdsbmFIUnVaWE56SWl3aWFITnNZU0lzSW5CaGNuTmxSbXh2WVhRaUxDSmpiMnh2Y2lJc0ltaGhjMDkzYmxCeWIzQmxjblI1SWl3aVlteGxibVFpTENKbWNtOXRJaXdpZEc4aUxDSm1jbTl0Ulhod2J5SXNJblJ2Ulhod2J5SXNJbUpzWlc1a1EyOXNiM0lpTENKbWNtOXRRMjlzYjNJaUxDSjBiME52Ykc5eUlpd2lZbXhsYm1SbFpDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVGQk96dEJRVU5CT3p0QlFVTkJPenRCUVVWQkxFbEJRVTFCTEU5QlFVOHNWVUZCUTBNc1EwRkJSRHRCUVVGQkxGTkJRVTlCTEVOQlFWQTdRVUZCUVN4RFFVRmlPenRCUVVWQk96czdPenM3TzBGQlQwOHNTVUZCVFVNc2EwTkJRV0VzVlVGQlEwTXNTVUZCUkR0QlFVRkJMRk5CUVZVc1ZVRkJRMFlzUTBGQlJEdEJRVUZCTEdkQ1FVRlZRU3hEUVVGV0xFZEJRV05GTEVsQlFXUTdRVUZCUVN4SFFVRldPMEZCUVVFc1EwRkJia0k3TzBGQlJWQTdPenM3T3pzN1FVRlBUeXhKUVVGTlF5dzRRa0ZCVnl4VlFVRkRReXhIUVVGRU8wRkJRVUVzVTBGQlV5eFZRVUZEU2l4RFFVRkVPMEZCUVVFc1YwRkJUMHNzUzBGQlMwTXNSMEZCVEN4RFFVRlRUaXhEUVVGVUxFVkJRVmxKTEVkQlFWb3NRMEZCVUR0QlFVRkJMRWRCUVZRN1FVRkJRU3hEUVVGcVFqdEJRVU5CTEVsQlFVMUhMRGhDUVVGWExGVkJRVU5FTEVkQlFVUTdRVUZCUVN4VFFVRlRMRlZCUVVOT0xFTkJRVVE3UVVGQlFTeFhRVUZQU3l4TFFVRkxSQ3hIUVVGTUxFTkJRVk5LTEVOQlFWUXNSVUZCV1Uwc1IwRkJXaXhEUVVGUU8wRkJRVUVzUjBGQlZEdEJRVUZCTEVOQlFXcENPMEZCUTBFc1NVRkJUVVVzZDBKQlFWRXNWVUZCUTBZc1IwRkJSQ3hGUVVGTlJpeEhRVUZPTEVWQlFXTTdRVUZEYWtNc1RVRkJUVXNzVDBGQlQwWXNVMEZCVTBRc1IwRkJWQ3hEUVVGaU8wRkJRMEVzVFVGQlRVa3NUMEZCVDFBc1UwRkJVME1zUjBGQlZDeERRVUZpTzBGQlEwRXNVMEZCVHl4VlFVRkRTaXhEUVVGRU8wRkJRVUVzVjBGQlQxTXNTMEZCUzBNc1MwRkJTMVlzUTBGQlRDeERRVUZNTEVOQlFWQTdRVUZCUVN4SFFVRlFPMEZCUTBRc1EwRktUVHM3UVVGTlFTeEpRVUZOVnl4dlEwRkJZeXhWUVVGRFF5eFRRVUZFTEVWQlFWbERMRTFCUVZvN1FVRkJRU3hOUVVGdlFrTXNUMEZCY0VJc2RVVkJRVGhDWml4SlFVRTVRanRCUVVGQkxGTkJRWFZETEZWQlFVTkRMRU5CUVVRc1JVRkJTV1VzVFVGQlNpeEZRVUZsTzBGQlF5OUZMRmRCUVU5SUxGVkJRVlZhTEVOQlFWWXNSVUZCWVdVc1RVRkJZaXhKUVVGMVFrWXNUMEZCVDJJc1EwRkJVQ3hGUVVGVlpTeE5RVUZXTEVOQlFYWkNMRWRCUVRKRFJDeFJRVUZSWkN4RFFVRlNMRVZCUVZkbExFMUJRVmdzUTBGQmJFUTdRVUZEUkN4SFFVWXdRanRCUVVGQkxFTkJRWEJDT3p0QlFVbFFPenM3T3pzN08wRkJUMDhzU1VGQlRVTXNjMEpCUVU4c1dVRkJjVUk3UVVGQlFTeHZRMEZCYWtKRExGbEJRV2xDTzBGQlFXcENRU3huUWtGQmFVSTdRVUZCUVRzN1FVRkRka01zVFVGQlRVTXNhMEpCUVd0Q1JDeGhRVUZoUlN4TlFVRnlRenRCUVVOQkxFMUJRVWxETEVsQlFVa3NRMEZCVWpzN1FVRkZRU3hUUVVGUExGVkJRVU5ETEVkQlFVUXNSVUZCYTBJN1FVRkJRU3gxUTBGQlZFTXNTVUZCVXp0QlFVRlVRU3hWUVVGVE8wRkJRVUU3TzBGQlEzWkNMRkZCUVVsMFFpeEpRVUZKY1VJc1IwRkJVanRCUVVOQkxGTkJRVXRFTEVsQlFVa3NRMEZCVkN4RlFVRlpRU3hKUVVGSlJpeGxRVUZvUWl4RlFVRnBRMFVzUjBGQmFrTXNSVUZCYzBNN1FVRkRjRU53UWl4VlFVRkphVUlzWVVGQllVY3NRMEZCWWl4MVFrRkJaMEp3UWl4RFFVRm9RaXhUUVVGelFuTkNMRWxCUVhSQ0xFVkJRVW83UVVGRFJEczdRVUZGUkN4WFFVRlBkRUlzUTBGQlVEdEJRVU5FTEVkQlVFUTdRVUZSUkN4RFFWcE5PenRCUVdOUU96czdPenM3TzBGQlQwOHNTVUZCVFhWQ0xHOURRVUZqTEZWQlFVTkRMRXRCUVVRc1JVRkJVVU1zVFVGQlVpeEZRVUZuUWtNc1YwRkJhRUlzUlVGQlowTTdRVUZEZWtRc1RVRkJUVU1zWTBGQlkwZ3NUVUZCVFV3c1RVRkJNVUk3UVVGRFFTeE5RVUZOVXl4aFFVRmhSQ3hqUVVGakxFTkJRV3BET3p0QlFVVkJMRk5CUVU4c1ZVRkJRek5DTEVOQlFVUXNSVUZCVHp0QlFVTmFPMEZCUTBFc1VVRkJTVUVzUzBGQlMzZENMRTFCUVUwc1EwRkJUaXhEUVVGVUxFVkJRVzFDTzBGQlEycENMR0ZCUVU5RExFOUJRVThzUTBGQlVDeERRVUZRTzBGQlEwUTdPMEZCUlVRN1FVRkRRU3hSUVVGSmVrSXNTMEZCUzNkQ0xFMUJRVTFKTEZWQlFVNHNRMEZCVkN4RlFVRTBRanRCUVVNeFFpeGhRVUZQU0N4UFFVRlBSeXhWUVVGUUxFTkJRVkE3UVVGRFJEczdRVUZGUkN4UlFVRkpVaXhKUVVGSkxFTkJRVkk3TzBGQlJVRTdRVUZEUVN4WFFVRlBRU3hKUVVGSlR5eFhRVUZZTEVWQlFYZENVQ3hIUVVGNFFpeEZRVUUyUWp0QlFVTXpRaXhWUVVGSlNTeE5RVUZOU2l4RFFVRk9MRWxCUVZkd1FpeERRVUZZTEVsQlFXZENiMElzVFVGQlRWRXNWVUZCTVVJc1JVRkJjME03UVVGRGNFTTdRVUZEUkR0QlFVTkdPenRCUVVWRUxGRkJRVTFETEd0Q1FVRnJRaXhuUTBGQmNVSk1MRTFCUVUxS0xFbEJRVWtzUTBGQlZpeERRVUZ5UWl4RlFVRnRRMGtzVFVGQlRVb3NRMEZCVGl4RFFVRnVReXhGUVVFMlEzQkNMRU5CUVRkRExFTkJRWGhDTzBGQlEwRXNVVUZCVFRoQ0xHZENRVUZwUWtvc1YwRkJSQ3hIUVVGblFrRXNXVUZCV1U0c1EwRkJXaXhGUVVGbFV5eGxRVUZtTEVOQlFXaENMRWRCUVd0RVFTeGxRVUY0UlR0QlFVTkJMRmRCUVU4c1owTkJRWEZDU2l4UFFVRlBUQ3hKUVVGSkxFTkJRVmdzUTBGQmNrSXNSVUZCYjBOTExFOUJRVTlNTEVOQlFWQXNRMEZCY0VNc1JVRkJLME5WTEdGQlFTOURMRU5CUVZBN1FVRkRSQ3hIUVhaQ1JEdEJRWGRDUkN4RFFUVkNUVHM3UVVFNFFrRXNTVUZCVFVNc09FSkJRVmNzVlVGQlEwTXNUVUZCUkR0QlFVRkJMRk5CUVZrc1ZVRkJRMmhETEVOQlFVUTdRVUZCUVN4WFFVRlBRU3hKUVVGSlowTXNUVUZCV0R0QlFVRkJMRWRCUVZvN1FVRkJRU3hEUVVGcVFqdEJRVU5CTEVsQlFVMURMRzlDUVVGTkxGVkJRVU5FTEUxQlFVUTdRVUZCUVN4VFFVRlpMRlZCUVVOb1F5eERRVUZFTzBGQlFVRXNWMEZCVDBFc1NVRkJTV2RETEUxQlFWZzdRVUZCUVN4SFFVRmFPMEZCUVVFc1EwRkJXanRCUVVOQkxFbEJRVTFGTERCQ1FVRlRMRlZCUVVOR0xFMUJRVVE3UVVGQlFTeFRRVUZaTEZWQlFVTm9ReXhEUVVGRU8wRkJRVUVzVjBGQlQwRXNTVUZCU1dkRExFMUJRVmc3UVVGQlFTeEhRVUZhTzBGQlFVRXNRMEZCWmp0QlFVTkJMRWxCUVUxSExEaENRVUZYTEZWQlFVTklMRTFCUVVRN1FVRkJRU3hUUVVGWkxGVkJRVU5vUXl4RFFVRkVPMEZCUVVFc1YwRkJUMEVzU1VGQlNXZERMRTFCUVZnN1FVRkJRU3hIUVVGYU8wRkJRVUVzUTBGQmFrSTdPMEZCUlVFc1NVRkJUVWtzYzBWQlFTdENPMEZCUVVFc1RVRkJRME1zYVVKQlFVUXNkVVZCUVhGQ2RFTXNTVUZCY2tJN1FVRkJRU3hUUVVFNFFpeFZRVUZEZFVNc1VVRkJSQ3hGUVVGWFRpeE5RVUZZTzBGQlFVRXNWMEZCYzBJc1ZVRkJRMmhETEVOQlFVUXNSVUZCVHp0QlFVTnlSeXhWUVVGTmRVTXNaVUZCWlZBc1UwRkJVMmhETEVOQlFUbENPMEZCUTBFc1ZVRkJUWGRETERaQ1FVRTJRaXhEUVVGRlJpeFJRVUZHTEVsQlFXTXNTVUZCU1VRc2EwSkJRV3RDYUVNc1MwRkJTMjlETEVkQlFVd3NRMEZCVTBZc1dVRkJWQ3hEUVVGc1FpeERRVUZzUWl4RFFVRnVRenRCUVVOQkxHRkJRVkZCTEdkQ1FVRm5RaXhEUVVGcVFpeEhRVUZ6UWxBc1UwRkJVMUVzTUVKQlFTOUNMRWRCUVRSRVVpeFRRVUZUVVN3d1FrRkJOVVU3UVVGRFJDeExRVXA1UlR0QlFVRkJMRWRCUVRsQ08wRkJRVUVzUTBGQmNrTTdPMEZCVFVFc1NVRkJUVVVzTUVKQlFWTk9MRGhDUVVGbU8wRkJRMEVzU1VGQlRVOHNORU5CUVd0Q1VDdzJRa0ZCTmtJdlFpeExRVUZMZFVNc1NVRkJiRU1zUTBGQmVFSTdPMEZCUlVFc1NVRkJUVU1zYzBKQlFVOHNWVUZCUTNaRExFZEJRVVFzUlVGQlRVWXNSMEZCVGp0QlFVRkJMRk5CUVdNc1ZVRkJRMG9zUTBGQlJDeEZRVUZQTzBGQlEzWkRMRkZCUVUwNFF5eFpRVUZaTVVNc1RVRkJUVVVzUjBGQmVFSTdRVUZEUVN4WFFVRlBMRU5CUVVNc1EwRkJRMDRzU1VGQlNVMHNSMEZCVEN4SlFVRlpkME1zVTBGQldpeEhRVUYzUWtFc1UwRkJla0lzU1VGQmMwTkJMRk5CUVhSRExFZEJRV3RFZUVNc1IwRkJla1E3UVVGRFJDeEhRVWh0UWp0QlFVRkJMRU5CUVdJN08wRkJTMEVzU1VGQlRYbERMSGRDUVVGUkxGVkJRVU5CTEV0QlFVUXNSVUZCVVhwRExFZEJRVklzUlVGQllVWXNSMEZCWWp0QlFVRkJMRk5CUVhGQ0xGVkJRVU5LTEVOQlFVUXNSVUZCVHp0QlFVTXZReXhSUVVGTlowUXNWMEZCVnl4blEwRkJjVUl4UXl4SFFVRnlRaXhGUVVFd1FrWXNSMEZCTVVJc1JVRkJLMEpLTEVOQlFTOUNMRU5CUVdwQ08wRkJRMEVzVjBGQlR5eDNRa0ZCWVN0RExFdEJRV0lzUlVGQmIwSkRMRkZCUVhCQ0xFTkJRVkE3UVVGRFJDeEhRVWh2UWp0QlFVRkJMRU5CUVdRN08wRkJTMEVzU1VGQlRVTXNjMFJCUVhWQ0xGVkJRVU5ETEdsQ1FVRkVPMEZCUVVFc1UwRkJkVUlzVlVGQlEyeEVMRU5CUVVRc1JVRkJUenRCUVVOb1JTeFRRVUZMTEVsQlFVbHRSQ3hIUVVGVUxFbEJRV2RDYmtRc1EwRkJhRUlzUlVGQmJVSTdRVUZEYWtJc1ZVRkJUVzlFTEcxQ1FVRnRRa1lzYTBKQlFXdENReXhIUVVGc1FpeERRVUY2UWp0QlFVTkJMRlZCUVVsRExHZENRVUZLTEVWQlFYTkNPMEZCUTNCQ2NFUXNWVUZCUlcxRUxFZEJRVVlzU1VGQlUwTXNhVUpCUVdsQ2NFUXNSVUZCUlcxRUxFZEJRVVlzUTBGQmFrSXNRMEZCVkR0QlFVTkVPMEZCUTBZN08wRkJSVVFzVjBGQlQyNUVMRU5CUVZBN1FVRkRSQ3hIUVZSdFF6dEJRVUZCTEVOQlFUZENPenRCUVZkUU8wRkJRMDhzU1VGQlRYRkVMRFJDUVVGVmNFUXNWMEZCVnl4SFFVRllMRU5CUVdoQ08wRkJRMEVzU1VGQlRYRkVMRFJDUVVGVmNrUXNWMEZCVnl4TFFVRllMRU5CUVdoQ08wRkJRMEVzU1VGQlRYTkVMR3RDUVVGTGRFUXNWMEZCVnl4SlFVRllMRU5CUVZnN08wRkJSVUVzU1VGQlRYVkVMRFJDUVVGVmVFTXNTMEZEY2tKU0xFMUJRVTBzUTBGQlRpeEZRVUZUTEVkQlFWUXNRMEZFY1VJc1JVRkZja0pJTEV0QlFVdHZSQ3hMUVVablFpeERRVUZvUWpzN1FVRkxVQ3hKUVVGTlF5eGxRVUZsTzBGQlFVRXNUVUZCUjBNc1IwRkJTQ3hSUVVGSFFTeEhRVUZJTzBGQlFVRXNUVUZCVVVNc1MwRkJVaXhSUVVGUlFTeExRVUZTTzBGQlFVRXNUVUZCWlVNc1NVRkJaaXhSUVVGbFFTeEpRVUZtTzBGQlFVRXNkMEpCUVhGQ1F5eExRVUZ5UWp0QlFVRkJMRTFCUVhGQ1FTeExRVUZ5UWl3NFFrRkJOa0lzUTBGQk4wSTdRVUZCUVN4dFFrRkRXRWdzUjBGRVZ5eFZRVU5JUXl4TFFVUkhMRlZCUTA5RExFbEJSRkFzVlVGRFowSkRMRXRCUkdoQ08wRkJRVUVzUTBGQmNrSTdPMEZCUjA4c1NVRkJUVU1zYzBKQlFVOHZReXhMUVVOc1FtbERMSEZDUVVGeFFqdEJRVU51UWxVc1QwRkJTMGdzVDBGRVl6dEJRVVZ1UWtrc1UwRkJUMG9zVDBGR1dUdEJRVWR1UWtzc1VVRkJUVXdzVDBGSVlUdEJRVWx1UWswN1FVRktiVUlzUTBGQmNrSXNRMEZFYTBJc1JVRlBiRUpLTEZsQlVHdENMRU5CUVdJN08wRkJWVkFzU1VGQlRVMHNaVUZCWlR0QlFVRkJMRTFCUVVkRExFZEJRVWdzVTBGQlIwRXNSMEZCU0R0QlFVRkJMRTFCUVZGRExGVkJRVklzVTBGQlVVRXNWVUZCVWp0QlFVRkJMRTFCUVc5Q1F5eFRRVUZ3UWl4VFFVRnZRa0VzVTBGQmNFSTdRVUZCUVN3d1FrRkJLMEpNTEV0QlFTOUNPMEZCUVVFc1RVRkJLMEpCTEV0QlFTOUNMQ3RDUVVGMVF5eERRVUYyUXp0QlFVRkJMRzFDUVVOWVJ5eEhRVVJYTEZWQlEwaERMRlZCUkVjc1ZVRkRXVU1zVTBGRVdpeFZRVU13UWt3c1MwRkVNVUk3UVVGQlFTeERRVUZ5UWpzN1FVRkhUeXhKUVVGTlRTeHpRa0ZCVDNCRUxFdEJRMnhDYVVNc2NVSkJRWEZDTzBGQlEyNUNaMElzVDBGQlMwa3NWVUZFWXp0QlFVVnVRa2dzWTBGQldXSXNUMEZHVHp0QlFVZHVRbU1zWVVGQlYyUXNUMEZJVVR0QlFVbHVRbE03UVVGS2JVSXNRMEZCY2tJc1EwRkVhMElzUlVGUGJFSkZMRmxCVUd0Q0xFTkJRV0k3TzBGQlZVRXNTVUZCVFUwc2QwSkJRVkVzVlVGQlEzUkZMRU5CUVVRc1JVRkJUenRCUVVNeFFpeE5RVUZKUVN4RlFVRkZkVVVzWTBGQlJpeERRVUZwUWl4TFFVRnFRaXhEUVVGS0xFVkJRVFpDTzBGQlF6TkNMRmRCUVU5U0xFdEJRVXN2UkN4RFFVRk1MRU5CUVZBN1FVRkRSQ3hIUVVaRUxFMUJSVThzU1VGQlNVRXNSVUZCUlhWRkxHTkJRVVlzUTBGQmFVSXNTMEZCYWtJc1EwRkJTaXhGUVVFMlFqdEJRVU5zUXl4WFFVRlBTQ3hMUVVGTGNFVXNRMEZCVEN4RFFVRlFPMEZCUTBRN1FVRkRSQ3hUUVVGUFFTeERRVUZRTzBGQlEwUXNRMEZRVFRzN1FVRlRRU3hKUVVGTk9FUXNkMEpCUVZGMFJDeE5RVUZOTEVOQlFVNHNSVUZCVXl4RFFVRlVMRU5CUVdRN08wRkJSVkFzU1VGQlRXZEZMRkZCUVZFc1ZVRkJRME1zU1VGQlJDeEZRVUZQUXl4RlFVRlFMRVZCUVZjeFJTeERRVUZZTEVWQlFXbENPMEZCUXpkQ0xFMUJRVTB5UlN4WFFVRlhSaXhQUVVGUFFTeEpRVUY0UWp0QlFVTkJMRTFCUVUxSExGTkJRVk5HTEV0QlFVdEJMRVZCUVhCQ08wRkJRMEVzVTBGQlQzSkZMRXRCUVV0MVF5eEpRVUZNTEVOQlFWVTFReXhMUVVGTE5FVXNVMEZCVTBRc1VVRkJaQ3hKUVVFd1FrRXNVVUZCY0VNc1EwRkJVRHRCUVVORUxFTkJTa1E3UVVGTFFUdEJRVU5QTEVsQlFVMUZMR3REUVVGaExGVkJRVU5LTEVsQlFVUXNSVUZCVDBNc1JVRkJVQ3hGUVVGak8wRkJRM1JETEUxQlFVMUpMRmxCUVZrc2NVSkJRVk5NTEVsQlFWUXNTVUZCYVVJc2IwSkJRVmRCTEVsQlFWZ3NRMEZCYWtJc1IwRkJiME5CTEVsQlFYUkVPMEZCUTBFc1RVRkJUVTBzVlVGQlZTeHhRa0ZCVTB3c1JVRkJWQ3hKUVVGbExHOUNRVUZYUVN4RlFVRllMRU5CUVdZc1IwRkJLMEpCTEVWQlFTOURPenRCUVVWQkxFMUJRVTFOTEhWQ1FVRmxSaXhUUVVGbUxFTkJRVTQ3TzBGQlJVRXNVMEZCVHl4VlFVRkRPVVVzUTBGQlJDeEZRVUZQTzBGQlExb3NVMEZCU3l4SlFVRkpiVVFzUjBGQlZDeEpRVUZuUWpaQ0xFOUJRV2hDTEVWQlFYbENPMEZCUTNaQ1FTeGpRVUZSTjBJc1IwRkJVaXhKUVVGbGNVSXNUVUZCVFUwc1ZVRkJWVE5DTEVkQlFWWXNRMEZCVGl4RlFVRnpRalJDTEZGQlFWRTFRaXhIUVVGU0xFTkJRWFJDTEVWQlFXOURia1FzUTBGQmNFTXNRMEZCWmp0QlFVTkVPMEZCUTBSblJpeFpRVUZSY2tJc1IwRkJVaXhIUVVGallTeE5RVUZOVFN4VlFVRlZia0lzUjBGQmFFSXNSVUZCY1VKdlFpeFJRVUZSY0VJc1IwRkJOMElzUlVGQmEwTXpSQ3hEUVVGc1F5eERRVUZrTzBGQlEwRm5SaXhaUVVGUmNFSXNTMEZCVWl4SFFVRm5RbGtzVFVGQlRVMHNWVUZCVld4Q0xFdEJRV2hDTEVWQlFYVkNiVUlzVVVGQlVXNUNMRXRCUVM5Q0xFVkJRWE5ETlVRc1EwRkJkRU1zUTBGQmFFSTdRVUZEUVdkR0xGbEJRVkZ1UWl4SlFVRlNMRWRCUVdWWExFMUJRVTFOTEZWQlFWVnFRaXhKUVVGb1FpeEZRVUZ6UW10Q0xGRkJRVkZzUWl4SlFVRTVRaXhGUVVGdlF6ZEVMRU5CUVhCRExFTkJRV1k3UVVGRFFXZEdMRmxCUVZGc1FpeExRVUZTTEVkQlFXZENMR2REUVVGeFFtZENMRlZCUVZWb1FpeExRVUV2UWl4RlFVRnpRMmxDTEZGQlFWRnFRaXhMUVVFNVF5eEZRVUZ4UkRsRUxFTkJRWEpFTEVOQlFXaENPMEZCUTBFc1YwRkJUMmRHTEU5QlFWQTdRVUZEUkN4SFFWUkVPMEZCVlVRc1EwRm9RazBpTENKbWFXeGxJam9pZEhKaGJuTm1iM0p0WlhKekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVXNJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56TENCemRHVndVSEp2WjNKbGMzTWdmU0JtY205dElDY3VMMk5oYkdNbk8xeHVhVzF3YjNKMElIc2dhWE5UZEhKcGJtY2dmU0JtY205dElDY3VMM1YwYVd4ekp6dGNibWx0Y0c5eWRDQjdJR052Ykc5eUlHRnpJSEJoY25ObFEyOXNiM0lnZlNCbWNtOXRJQ2N1TDNCaGNuTmxjbk1uTzF4dVhHNWpiMjV6ZENCdWIyOXdJRDBnS0hZcElEMCtJSFk3WEc1Y2JpOHFLbHh1SUNvZ1FYQndaVzVrSUZWdWFYUmNiaUFxSUVFZ1puVnVZM1JwYjI0Z2RHaGhkQ0IzYVd4c0lHRndjR1Z1WkZ4dUlDb2dZWEJ3Wlc1a1ZXNXBkQ2duY0hnbkxDQXlNQ2tnTFQ0Z0p6SXdjSGduWEc0Z0tpQkFjR0Z5WVcwZ0lIdHpkSEpwYm1kOUlIVnVhWFFwWEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOVhHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmhjSEJsYm1SVmJtbDBJRDBnS0hWdWFYUXBJRDArSUNoMktTQTlQaUJnSkh0MmZTUjdkVzVwZEgxZ08xeHVYRzR2S2lwY2JpQXFJRU5zWVcxd0lIWmhiSFZsSUdKbGRIZGxaVzVjYmlBcUlFTnlaV0YwWlhNZ1lTQm1kVzVqZEdsdmJpQjBhR0YwSUhkcGJHd2djbVZ6ZEhKcFkzUWdZU0JuYVhabGJpQjJZV3gxWlNCaVpYUjNaV1Z1SUdCdGFXNWdJR0Z1WkNCZ2JXRjRZRnh1SUNvZ1FIQmhjbUZ0SUNCN2JuVnRZbVZ5ZlNCdGFXNWNiaUFxSUVCd1lYSmhiU0FnZTI1MWJXSmxjbjBnYldGNFhHNGdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlYRzRnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYkdGdGNFMWhlQ0E5SUNodFlYZ3BJRDArSUNoMktTQTlQaUJOWVhSb0xtMXBiaWgyTENCdFlYZ3BPMXh1Wlhod2IzSjBJR052Ym5OMElHTnNZVzF3VFdsdUlEMGdLRzFwYmlrZ1BUNGdLSFlwSUQwK0lFMWhkR2d1YldGNEtIWXNJRzFwYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJ4aGJYQWdQU0FvYldsdUxDQnRZWGdwSUQwK0lIdGNiaUFnWTI5dWMzUWdYMjFwYmlBOUlHTnNZVzF3VFdsdUtHMXBiaWs3WEc0Z0lHTnZibk4wSUY5dFlYZ2dQU0JqYkdGdGNFMWhlQ2h0WVhncE8xeHVJQ0J5WlhSMWNtNGdLSFlwSUQwK0lGOXRhVzRvWDIxaGVDaDJLU2s3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyOXVaR2wwYVc5dVlXd2dQU0FvWTI5dVpHbDBhVzl1TENCcFpsUnlkV1VzSUdsbVJtRnNjMlVnUFNCdWIyOXdLU0E5UGlBb2Rpd2dZV04wYVc5dUtTQTlQaUI3WEc0Z0lISmxkSFZ5YmlCamIyNWthWFJwYjI0b2Rpd2dZV04wYVc5dUtTQS9JR2xtVkhKMVpTaDJMQ0JoWTNScGIyNHBJRG9nYVdaR1lXeHpaU2gyTENCaFkzUnBiMjRwTzF4dWZUdGNibHh1THlvcVhHNGdLaUJHYkc5M1hHNGdLaUJEYjIxd2IzTmxJRzkwYUdWeUlIUnlZVzV6Wm05eWJXVnljeUIwYnlCeWRXNGdiR2x1WldGeWFXeDVYRzRnS2lCbWJHOTNLRzFwYmlneU1Da3NJRzFoZUNnME1Da3BYRzRnS2lCQWNHRnlZVzBnSUhzdUxpNW1kVzVqZEdsdmJuTjlJSFJ5WVc1elptOXliV1Z5YzF4dUlDb2dRSEpsZEhWeWJpQjdablZ1WTNScGIyNTlYRzRnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JtYkc5M0lEMGdLQzR1TG5SeVlXNXpabTl5YldWeWN5a2dQVDRnZTF4dUlDQmpiMjV6ZENCdWRXMVVjbUZ1YzJadmNtMWxjbk1nUFNCMGNtRnVjMlp2Y20xbGNuTXViR1Z1WjNSb08xeHVJQ0JzWlhRZ2FTQTlJREE3WEc1Y2JpQWdjbVYwZFhKdUlDaGhZMk1zSUM0dUxtRnlaM01wSUQwK0lIdGNiaUFnSUNCc1pYUWdkaUE5SUdGall6dGNiaUFnSUNCbWIzSWdLR2tnUFNBd095QnBJRHdnYm5WdFZISmhibk5tYjNKdFpYSnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lIWWdQU0IwY21GdWMyWnZjbTFsY25OYmFWMG9kaXdnTGk0dVlYSm5jeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIWTdYRzRnSUgwN1hHNTlPMXh1WEc0dktpcGNiaUFxSUVsdWRHVnljRzlzWVhSbElHWnliMjBnYzJWMElHOW1JSFpoYkhWbGN5QjBieUJoYm05MGFHVnlYRzRnS2lCQWNHRnlZVzBnSUh0QmNuSmhlWDBnYVc1d2RYUWdZWEp5WVhsY2JpQXFJRUJ3WVhKaGJTQWdlMEZ5Y21GNWZTQnZkWFJ3ZFhSY2JpQXFJRUJ3WVhKaGJTQWdlMFoxYm1OMGFXOXVmU0J5WVc1blpVVmhjMmx1WjF4dUlDb2dRSEpsZEhWeWJpQjdSblZ1WTNScGIyNTlYRzRnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYm5SbGNuQnZiR0YwWlNBOUlDaHBibkIxZEN3Z2IzVjBjSFYwTENCeVlXNW5aVVZoYzJsdVp5a2dQVDRnZTF4dUlDQmpiMjV6ZENCeVlXNW5aVXhsYm1kMGFDQTlJR2x1Y0hWMExteGxibWQwYUR0Y2JpQWdZMjl1YzNRZ1ptbHVZV3hKYm1SbGVDQTlJSEpoYm1kbFRHVnVaM1JvSUMwZ01UdGNibHh1SUNCeVpYUjFjbTRnS0hZcElEMCtJSHRjYmlBZ0lDQXZMeUJKWmlCMllXeDFaU0J2ZFhSemFXUmxJRzFwYm1sdGRXMGdjbUZ1WjJVc0lIRjFhV05yYkhrZ2NtVjBkWEp1WEc0Z0lDQWdhV1lnS0hZZ1BEMGdhVzV3ZFhSYk1GMHBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnZkWFJ3ZFhSYk1GMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdTV1lnZG1Gc2RXVWdiM1YwYzJsa1pTQnRZWGhwYlhWdElISmhibWRsTENCeGRXbGphMng1SUhKbGRIVnlibHh1SUNBZ0lHbG1JQ2gySUQ0OUlHbHVjSFYwVzJacGJtRnNTVzVrWlhoZEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2IzVjBjSFYwVzJacGJtRnNTVzVrWlhoZE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUd4bGRDQnBJRDBnTVR0Y2JseHVJQ0FnSUM4dklFWnBibVFnYVc1a1pYZ2diMllnY21GdVoyVWdjM1JoY25SY2JpQWdJQ0JtYjNJZ0tEc2dhU0E4SUhKaGJtZGxUR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUdsbUlDaHBibkIxZEZ0cFhTQStJSFlnZkh3Z2FTQTlQVDBnWm1sdVlXeEpibVJsZUNrZ2UxeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JqYjI1emRDQndjbTluY21WemMwbHVVbUZ1WjJVZ1BTQm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2hwYm5CMWRGdHBJQzBnTVYwc0lHbHVjSFYwVzJsZExDQjJLVHRjYmlBZ0lDQmpiMjV6ZENCbFlYTmxaRkJ5YjJkeVpYTnpJRDBnS0hKaGJtZGxSV0Z6YVc1bktTQS9JSEpoYm1kbFJXRnphVzVuVzJsZEtIQnliMmR5WlhOelNXNVNZVzVuWlNrZ09pQndjbTluY21WemMwbHVVbUZ1WjJVN1hHNGdJQ0FnY21WMGRYSnVJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56S0c5MWRIQjFkRnRwSUMwZ01WMHNJRzkxZEhCMWRGdHBYU3dnWldGelpXUlFjbTluY21WemN5azdYRzRnSUgwN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjM1ZpZEhKaFkzUWdQU0FvYjNKcFoybHVLU0E5UGlBb2Rpa2dQVDRnZGlBdElHOXlhV2RwYmp0Y2JtVjRjRzl5ZENCamIyNXpkQ0JoWkdRZ1BTQW9iM0pwWjJsdUtTQTlQaUFvZGlrZ1BUNGdkaUFySUc5eWFXZHBianRjYm1WNGNHOXlkQ0JqYjI1emRDQmthWFpwWkdVZ1BTQW9iM0pwWjJsdUtTQTlQaUFvZGlrZ1BUNGdkaUF2SUc5eWFXZHBianRjYm1WNGNHOXlkQ0JqYjI1emRDQnRkV3gwYVhCc2VTQTlJQ2h2Y21sbmFXNHBJRDArSUNoMktTQTlQaUIySUNvZ2IzSnBaMmx1TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWdVpYSmhkR1ZPYjI1SmJuUmxjbWR5WVhSbFpGTndjbWx1WnlBOUlDaGhiSFJsY2tScGMzQnNZV05sYldWdWRDQTlJRzV2YjNBcElEMCtJQ2hqYjI1emRHRnVkQ3dnYjNKcFoybHVLU0E5UGlBb2Rpa2dQVDRnZTF4dUlDQmpiMjV6ZENCa2FYTndiR0ZqWlcxbGJuUWdQU0J2Y21sbmFXNGdMU0IyTzF4dUlDQmpiMjV6ZENCemNISnBibWROYjJScFptbGxaRVJwYzNCc1lXTmxiV1Z1ZENBOUlDMGdZMjl1YzNSaGJuUWdLaUFvTUNBdElHRnNkR1Z5UkdsemNHeGhZMlZ0Wlc1MEtFMWhkR2d1WVdKektHUnBjM0JzWVdObGJXVnVkQ2twS1R0Y2JpQWdjbVYwZFhKdUlDaGthWE53YkdGalpXMWxiblFnUEQwZ01Da2dQeUJ2Y21sbmFXNGdLeUJ6Y0hKcGJtZE5iMlJwWm1sbFpFUnBjM0JzWVdObGJXVnVkQ0E2SUc5eWFXZHBiaUF0SUhOd2NtbHVaMDF2WkdsbWFXVmtSR2x6Y0d4aFkyVnRaVzUwTzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElITndjbWx1WnlBOUlHZGxibVZ5WVhSbFRtOXVTVzUwWlhKbmNtRjBaV1JUY0hKcGJtY29LVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnViMjVzYVc1bFlYSlRjSEpwYm1jZ1BTQm5aVzVsY21GMFpVNXZia2x1ZEdWeVozSmhkR1ZrVTNCeWFXNW5LRTFoZEdndWMzRnlkQ2s3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0IzY21Gd0lEMGdLRzFwYml3Z2JXRjRLU0E5UGlBb2Rpa2dQVDRnZTF4dUlDQmpiMjV6ZENCeVlXNW5aVk5wZW1VZ1BTQnRZWGdnTFNCdGFXNDdYRzRnSUhKbGRIVnliaUFvS0hZZ0xTQnRhVzRwSUNVZ2NtRnVaMlZUYVhwbElDc2djbUZ1WjJWVGFYcGxLU0FsSUhKaGJtZGxVMmw2WlNBcklHMXBianRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCemRHVndjeUE5SUNoemRHVndjeXdnYldsdUxDQnRZWGdwSUQwK0lDaDJLU0E5UGlCN1hHNGdJR052Ym5OMElIQnliMmR5WlhOeklEMGdaMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvYldsdUxDQnRZWGdzSUhZcE8xeHVJQ0J5WlhSMWNtNGdjM1JsY0ZCeWIyZHlaWE56S0hOMFpYQnpMQ0J3Y205bmNtVnpjeWs3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2RISmhibk5tYjNKdFEyaHBiR1JXWVd4MVpYTWdQU0FvWTJocGJHUlVjbUZ1YzJadmNtMWxjbk1wSUQwK0lDaDJLU0E5UGlCN1hHNGdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjJLU0I3WEc0Z0lDQWdZMjl1YzNRZ1kyaHBiR1JVY21GdWMyWnZjbTFsY2lBOUlHTm9hV3hrVkhKaGJuTm1iM0p0WlhKelcydGxlVjA3WEc0Z0lDQWdhV1lnS0dOb2FXeGtWSEpoYm5ObWIzSnRaWElwSUh0Y2JpQWdJQ0FnSUhaYmEyVjVYU0E5SUdOb2FXeGtWSEpoYm5ObWIzSnRaWElvZGx0clpYbGRLVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdkanRjYm4wN1hHNWNiaTh2SUZWdWFYUWdkSEpoYm5ObWIzSnRaWEp6WEc1bGVIQnZjblFnWTI5dWMzUWdjR1Z5WTJWdWRDQTlJR0Z3Y0dWdVpGVnVhWFFvSnlVbktUdGNibVY0Y0c5eWRDQmpiMjV6ZENCa1pXZHlaV1Z6SUQwZ1lYQndaVzVrVlc1cGRDZ25aR1ZuSnlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnY0hnZ1BTQmhjSEJsYm1SVmJtbDBLQ2R3ZUNjcE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtZGlWVzVwZENBOUlHWnNiM2NvWEc0Z0lHTnNZVzF3S0RBc0lESTFOU2tzWEc0Z0lFMWhkR2d1Y205MWJtUmNiaWs3WEc1Y2JtTnZibk4wSUhKblltRlVaVzF3YkdGMFpTQTlJQ2g3SUhKbFpDd2daM0psWlc0c0lHSnNkV1VzSUdGc2NHaGhJRDBnTVNCOUtTQTlQaUJjYmlBZ1lISm5ZbUVvSkh0eVpXUjlMQ0FrZTJkeVpXVnVmU3dnSkh0aWJIVmxmU3dnSkh0aGJIQm9ZWDBwWUR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhKblltRWdQU0JtYkc5M0tGeHVJQ0IwY21GdWMyWnZjbTFEYUdsc1pGWmhiSFZsY3loN1hHNGdJQ0FnY21Wa09pQnlaMkpWYm1sMExGeHVJQ0FnSUdkeVpXVnVPaUJ5WjJKVmJtbDBMRnh1SUNBZ0lHSnNkV1U2SUhKbllsVnVhWFFzWEc0Z0lDQWdZV3h3YUdGY2JpQWdmU2tzWEc0Z0lISm5ZbUZVWlcxd2JHRjBaVnh1S1R0Y2JseHVZMjl1YzNRZ2FITnNZVlJsYlhCc1lYUmxJRDBnS0hzZ2FIVmxMQ0J6WVhSMWNtRjBhVzl1TENCc2FXZG9kRzVsYzNNc0lHRnNjR2hoSUQwZ01TQjlLU0E5UGlCY2JpQWdZR2h6YkdFb0pIdG9kV1Y5TENBa2UzTmhkSFZ5WVhScGIyNTlMQ0FrZTJ4cFoyaDBibVZ6YzMwc0lDUjdZV3h3YUdGOUtXQTdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQm9jMnhoSUQwZ1pteHZkeWhjYmlBZ2RISmhibk5tYjNKdFEyaHBiR1JXWVd4MVpYTW9lMXh1SUNBZ0lHaDFaVG9nY0dGeWMyVkdiRzloZEN4Y2JpQWdJQ0J6WVhSMWNtRjBhVzl1T2lCd1pYSmpaVzUwTEZ4dUlDQWdJR3hwWjJoMGJtVnpjem9nY0dWeVkyVnVkQ3hjYmlBZ0lDQmhiSEJvWVZ4dUlDQjlLU3hjYmlBZ2FITnNZVlJsYlhCc1lYUmxYRzRwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTI5c2IzSWdQU0FvZGlrZ1BUNGdlMXh1SUNCcFppQW9kaTVvWVhOUGQyNVFjbTl3WlhKMGVTZ25jbVZrSnlrcElIdGNiaUFnSUNCeVpYUjFjbTRnY21kaVlTaDJLVHRjYmlBZ2ZTQmxiSE5sSUdsbUlDaDJMbWhoYzA5M2JsQnliM0JsY25SNUtDZG9kV1VuS1NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJvYzJ4aEtIWXBPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQjJPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdGc2NHaGhJRDBnWTJ4aGJYQW9NQ3dnTVNrN1hHNWNibU52Ym5OMElHSnNaVzVrSUQwZ0tHWnliMjBzSUhSdkxDQjJLU0E5UGlCN1hHNGdJR052Ym5OMElHWnliMjFGZUhCdklEMGdabkp2YlNBcUlHWnliMjA3WEc0Z0lHTnZibk4wSUhSdlJYaHdieUE5SUhSdklDb2dkRzg3WEc0Z0lISmxkSFZ5YmlCTllYUm9Mbk54Y25Rb2RpQXFJQ2gwYjBWNGNHOGdMU0JtY205dFJYaHdieWtnS3lCbWNtOXRSWGh3YnlrN1hHNTlPMXh1THk4Z2FIUjBjRG92TDJOdlpHVndaVzR1YVc4dmIzTjFZbXhoYTJVdmNHVnVMM2hIVmxaaFRseHVaWGh3YjNKMElHTnZibk4wSUdKc1pXNWtRMjlzYjNJZ1BTQW9abkp2YlN3Z2RHOHBJRDArSUh0Y2JpQWdZMjl1YzNRZ1puSnZiVU52Ykc5eUlEMGdhWE5UZEhKcGJtY29abkp2YlNrZ1B5QndZWEp6WlVOdmJHOXlLR1p5YjIwcElEb2dabkp2YlR0Y2JpQWdZMjl1YzNRZ2RHOURiMnh2Y2lBOUlHbHpVM1J5YVc1bktIUnZLU0EvSUhCaGNuTmxRMjlzYjNJb2RHOHBPaUIwYnp0Y2JseHVJQ0JqYjI1emRDQmliR1Z1WkdWa0lEMGdleUF1TGk1bWNtOXRRMjlzYjNJZ2ZUdGNibHh1SUNCeVpYUjFjbTRnS0hZcElEMCtJSHRjYmlBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z1lteGxibVJsWkNrZ2UxeHVJQ0FnSUNBZ1lteGxibVJsWkZ0clpYbGRJRDBnWW14bGJtUW9abkp2YlVOdmJHOXlXMnRsZVYwc0lIUnZRMjlzYjNKYmEyVjVYU3dnZGlrN1hHNGdJQ0FnZlZ4dUlDQWdJR0pzWlc1a1pXUXVjbVZrSUQwZ1lteGxibVFvWm5KdmJVTnZiRzl5TG5KbFpDd2dkRzlEYjJ4dmNpNXlaV1FzSUhZcE8xeHVJQ0FnSUdKc1pXNWtaV1F1WjNKbFpXNGdQU0JpYkdWdVpDaG1jbTl0UTI5c2IzSXVaM0psWlc0c0lIUnZRMjlzYjNJdVozSmxaVzRzSUhZcE8xeHVJQ0FnSUdKc1pXNWtaV1F1WW14MVpTQTlJR0pzWlc1a0tHWnliMjFEYjJ4dmNpNWliSFZsTENCMGIwTnZiRzl5TG1Kc2RXVXNJSFlwTzF4dUlDQWdJR0pzWlc1a1pXUXVZV3h3YUdFZ1BTQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWhtY205dFEyOXNiM0l1WVd4d2FHRXNJSFJ2UTI5c2IzSXVZV3h3YUdFc0lIWXBPMXh1SUNBZ0lISmxkSFZ5YmlCaWJHVnVaR1ZrTzF4dUlDQjlPMXh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb2xvciA9IGV4cG9ydHMuaHNsYSA9IGV4cG9ydHMuaGV4ID0gZXhwb3J0cy5yZ2JhID0gZXhwb3J0cy5yZ2JVbml0ID0gZXhwb3J0cy5zY2FsZSA9IGV4cG9ydHMucHggPSBleHBvcnRzLnBlcmNlbnQgPSBleHBvcnRzLmRlZ3JlZXMgPSBleHBvcnRzLmFscGhhID0gZXhwb3J0cy5udW1iZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVmFsdWUgdHlwZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBhbHBoYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogZGVncmVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBoc2xhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBwZXJjZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBweFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmdiVW5pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmdiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzY2FsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3BhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIG51bWJlciA9IGV4cG9ydHMubnVtYmVyID0ge1xuICB0ZXN0OiBfdXRpbHMuaXNOdW0sXG4gIHBhcnNlOiBwYXJzZUZsb2F0XG59O1xuXG4vLyBWYWx1ZSB0eXBlc1xudmFyIGFscGhhID0gZXhwb3J0cy5hbHBoYSA9IF9leHRlbmRzKHt9LCBudW1iZXIsIHtcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLmFscGhhXG59KTtcblxudmFyIGRlZ3JlZXMgPSBleHBvcnRzLmRlZ3JlZXMgPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgnZGVnJywgX3RyYW5zZm9ybWVycy5kZWdyZWVzKTtcbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJyUnLCBfdHJhbnNmb3JtZXJzLnBlcmNlbnQpO1xudmFyIHB4ID0gZXhwb3J0cy5weCA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCdweCcsIF90cmFuc2Zvcm1lcnMucHgpO1xuXG52YXIgc2NhbGUgPSBleHBvcnRzLnNjYWxlID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICBkZWZhdWx0OiAxXG59KTtcblxudmFyIHJnYlVuaXQgPSBleHBvcnRzLnJnYlVuaXQgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5yZ2JVbml0XG59KTtcblxudmFyIHJnYmEgPSBleHBvcnRzLnJnYmEgPSB7XG4gIHRlc3Q6IF91dGlscy5pc1JnYixcbiAgcGFyc2U6IF9wYXJzZXJzLnJnYmEsXG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5yZ2JhXG59O1xuXG52YXIgaGV4ID0gZXhwb3J0cy5oZXggPSBfZXh0ZW5kcyh7fSwgcmdiYSwge1xuICB0ZXN0OiBfdXRpbHMuaXNIZXgsXG4gIHBhcnNlOiBfcGFyc2Vycy5oZXhcbn0pO1xuXG52YXIgaHNsYSA9IGV4cG9ydHMuaHNsYSA9IHtcbiAgdGVzdDogX3V0aWxzLmlzSHNsLFxuICBwYXJzZTogX3BhcnNlcnMuaHNsYSxcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLmhzbGFcbn07XG5cbnZhciBjb2xvciA9IGV4cG9ydHMuY29sb3IgPSB7XG4gIHBhcnNlOiBfcGFyc2Vycy5jb2xvcixcbiAgdGVzdDogX3V0aWxzLmlzQ29sb3IsXG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5jb2xvclxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkbUZzZFdVdGRIbHdaWE11YW5NaVhTd2libUZ0WlhNaU9sc2liblZ0WW1WeUlpd2lkR1Z6ZENJc0luQmhjbk5sSWl3aWNHRnljMlZHYkc5aGRDSXNJbUZzY0doaElpd2lkSEpoYm5ObWIzSnRJaXdpWkdWbmNtVmxjeUlzSW5CbGNtTmxiblFpTENKd2VDSXNJbk5qWVd4bElpd2laR1ZtWVhWc2RDSXNJbkpuWWxWdWFYUWlMQ0p5WjJKaElpd2lhR1Y0SWl3aWFITnNZU0lzSW1OdmJHOXlJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenRyVVVGQlFUczdPenM3T3pzN096czdPenM3TzBGQllVRTdPMEZCVlVFN08wRkJUVUU3TzBGQlUwOHNTVUZCVFVFc01FSkJRVk03UVVGRGNFSkRMRzlDUVVSdlFqdEJRVVZ3UWtNc1UwRkJUME03UVVGR1lTeERRVUZtT3p0QlFVdFFPMEZCUTA4c1NVRkJUVU1zY1VOQlExSktMRTFCUkZFN1FVRkZXRXM3UVVGR1Z5eEZRVUZPT3p0QlFVdEJMRWxCUVUxRExEUkNRVUZWTERKQ1FVRmxMRXRCUVdZc2QwSkJRV2hDTzBGQlEwRXNTVUZCVFVNc05FSkJRVlVzTWtKQlFXVXNSMEZCWml4M1FrRkJhRUk3UVVGRFFTeEpRVUZOUXl4clFrRkJTeXd5UWtGQlpTeEpRVUZtTEcxQ1FVRllPenRCUVVWQkxFbEJRVTFETEhGRFFVTlNWQ3hOUVVSUk8wRkJSVmhWTEZkQlFWTTdRVUZHUlN4RlFVRk9PenRCUVV0QkxFbEJRVTFETEhsRFFVTlNXQ3hOUVVSUk8wRkJSVmhMTzBGQlJsY3NSVUZCVGpzN1FVRkxRU3hKUVVGTlR5eHpRa0ZCVHp0QlFVTnNRbGdzYjBKQlJHdENPMEZCUld4Q1F5eHpRa0ZHYTBJN1FVRkhiRUpITzBGQlNHdENMRU5CUVdJN08wRkJUVUVzU1VGQlRWRXNhVU5CUTFKRUxFbEJSRkU3UVVGRldGZ3NiMEpCUmxjN1FVRkhXRU03UVVGSVZ5eEZRVUZPT3p0QlFVMUJMRWxCUVUxWkxITkNRVUZQTzBGQlEyeENZaXh2UWtGRWEwSTdRVUZGYkVKRExITkNRVVpyUWp0QlFVZHNRa2M3UVVGSWEwSXNRMEZCWWpzN1FVRk5RU3hKUVVGTlZTeDNRa0ZCVVR0QlFVTnVRbUlzZFVKQlJHMUNPMEZCUlc1Q1JDeHpRa0ZHYlVJN1FVRkhia0pKTzBGQlNHMUNMRU5CUVdRaUxDSm1hV3hsSWpvaWRtRnNkV1V0ZEhsd1pYTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaXBjYmlBcUlGWmhiSFZsSUhSNWNHVnpYRzRnS2x4dUlDb2dZV3h3YUdGY2JpQXFJR1JsWjNKbFpYTmNiaUFxSUdobGVGeHVJQ29nYUhOc1lWeHVJQ29nY0dWeVkyVnVkRnh1SUNvZ2NIaGNiaUFxSUhKbllsVnVhWFJjYmlBcUlISm5ZbHh1SUNvZ2MyTmhiR1ZjYmlBcUwxeHVhVzF3YjNKMElIdGNiaUFnY21kaVZXNXBkQ0JoY3lCMGNtRnVjMlp2Y20xU1IwSlZibWwwTEZ4dUlDQnlaMkpoSUdGeklIUnlZVzV6Wm05eWJWSm5ZbUVzWEc0Z0lHRnNjR2hoSUdGeklIUnlZVzV6Wm05eWJVRnNjR2hoTEZ4dUlDQm9jMnhoSUdGeklIUnlZVzV6Wm05eWJVaHpiR0VzWEc0Z0lHTnZiRzl5SUdGeklIUnlZVzV6Wm05eWJVTnZiRzl5TEZ4dUlDQndlQ0JoY3lCMGNtRnVjMlp2Y20xUWVDeGNiaUFnY0dWeVkyVnVkQ0JoY3lCMGNtRnVjMlp2Y20xUVpYSmpaVzUwTEZ4dUlDQmtaV2R5WldWeklHRnpJSFJ5WVc1elptOXliVVJsWjNKbFpYTmNibjBnWm5KdmJTQW5MaTkwY21GdWMyWnZjbTFsY25Nbk8xeHVhVzF3YjNKMElIdGNiaUFnYUdWNElHRnpJSEJoY25ObFNHVjRMRnh1SUNCeVoySmhJR0Z6SUhCaGNuTmxVbWRpWVN4Y2JpQWdhSE5zWVNCaGN5QndZWEp6WlVoemJHRXNYRzRnSUdOdmJHOXlJR0Z6SUhCaGNuTmxRMjlzYjNKY2JuMGdabkp2YlNBbkxpOXdZWEp6WlhKekp6dGNibWx0Y0c5eWRDQjdYRzRnSUdOeVpXRjBaVlZ1YVhSVWVYQmxMRnh1SUNCcGMwNTFiU3hjYmlBZ2FYTlNaMklzWEc0Z0lHbHpTSE5zTEZ4dUlDQnBjMGhsZUN4Y2JpQWdhWE5EYjJ4dmNseHVmU0JtY205dElDY3VMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElHNTFiV0psY2lBOUlIdGNiaUFnZEdWemREb2dhWE5PZFcwc1hHNGdJSEJoY25ObE9pQndZWEp6WlVac2IyRjBYRzU5TzF4dVhHNHZMeUJXWVd4MVpTQjBlWEJsYzF4dVpYaHdiM0owSUdOdmJuTjBJR0ZzY0doaElEMGdlMXh1SUNBdUxpNXVkVzFpWlhJc1hHNGdJSFJ5WVc1elptOXliVG9nZEhKaGJuTm1iM0p0UVd4d2FHRmNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JrWldkeVpXVnpJRDBnWTNKbFlYUmxWVzVwZEZSNWNHVW9KMlJsWnljc0lIUnlZVzV6Wm05eWJVUmxaM0psWlhNcE8xeHVaWGh3YjNKMElHTnZibk4wSUhCbGNtTmxiblFnUFNCamNtVmhkR1ZWYm1sMFZIbHdaU2duSlNjc0lIUnlZVzV6Wm05eWJWQmxjbU5sYm5RcE8xeHVaWGh3YjNKMElHTnZibk4wSUhCNElEMGdZM0psWVhSbFZXNXBkRlI1Y0dVb0ozQjRKeXdnZEhKaGJuTm1iM0p0VUhncE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2MyTmhiR1VnUFNCN1hHNGdJQzR1TG01MWJXSmxjaXhjYmlBZ1pHVm1ZWFZzZERvZ01WeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSEpuWWxWdWFYUWdQU0I3WEc0Z0lDNHVMbTUxYldKbGNpeGNiaUFnZEhKaGJuTm1iM0p0T2lCMGNtRnVjMlp2Y20xU1IwSlZibWwwWEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtZGlZU0E5SUh0Y2JpQWdkR1Z6ZERvZ2FYTlNaMklzWEc0Z0lIQmhjbk5sT2lCd1lYSnpaVkpuWW1Fc1hHNGdJSFJ5WVc1elptOXliVG9nZEhKaGJuTm1iM0p0VW1kaVlWeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR2hsZUNBOUlIdGNiaUFnTGk0dWNtZGlZU3hjYmlBZ2RHVnpkRG9nYVhOSVpYZ3NYRzRnSUhCaGNuTmxPaUJ3WVhKelpVaGxlRnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdoemJHRWdQU0I3WEc0Z0lIUmxjM1E2SUdselNITnNMRnh1SUNCd1lYSnpaVG9nY0dGeWMyVkljMnhoTEZ4dUlDQjBjbUZ1YzJadmNtMDZJSFJ5WVc1elptOXliVWh6YkdGY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpiMnh2Y2lBOUlIdGNiaUFnY0dGeWMyVTZJSEJoY25ObFEyOXNiM0lzWEc0Z0lIUmxjM1E2SUdselEyOXNiM0lzWEc0Z0lIUnlZVzV6Wm05eWJUb2dkSEpoYm5ObWIzSnRRMjlzYjNKY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3ZhbHVlLXR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBjbGFtcFByb2dyZXNzID0gKDAsIF90cmFuc2Zvcm1lcnMuY2xhbXApKDAsIDEpO1xuXG5mdW5jdGlvbiBjYWxjVmFsdWVBdFRpbWUoZnJvbSwgdG8sIGR1cmF0aW9uLCBlbGFwc2VkLCBlYXNlKSB7XG4gIHZhciBwcm9ncmVzc0F0VGltZSA9IGVhc2UoY2xhbXBQcm9ncmVzcygoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKDAsIGR1cmF0aW9uLCBlbGFwc2VkKSkpO1xuICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShmcm9tLCB0bywgcHJvZ3Jlc3NBdFRpbWUpO1xufVxuXG52YXIgVHdlZW5CbGVuZCA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhUd2VlbkJsZW5kLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBUd2VlbkJsZW5kKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2VlbkJsZW5kKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVHdlZW5CbGVuZC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGZyb20gPSBfcHJvcHMuZnJvbSxcbiAgICAgICAgdG8gPSBfcHJvcHMudG8sXG4gICAgICAgIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uLFxuICAgICAgICBhY2N1cmFjeSA9IF9wcm9wcy5hY2N1cmFjeTtcblxuICAgIHZhciBhID0gZnJvbTtcbiAgICB2YXIgYiA9IHRvO1xuICAgIHZhciBhRHVyYXRpb24gPSBhLmdldFByb3AoJ2R1cmF0aW9uJyk7XG4gICAgdmFyIGJEdXJhdGlvbiA9IGIuZ2V0UHJvcCgnZHVyYXRpb24nKTtcblxuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbiB8fCBNYXRoLm1pbihhRHVyYXRpb24gLSBhLmdldEVsYXBzZWQoKSwgYkR1cmF0aW9uKTtcblxuICAgIHZhciBhRWFzZSA9IGEuZ2V0UHJvcCgnZWFzZScpO1xuICAgIHZhciBiRWFzZSA9IGIuZ2V0UHJvcCgnZWFzZScpO1xuICAgIHZhciBhRnJvbSA9IGEuZ2V0UHJvcCgnZnJvbScpO1xuICAgIHZhciBiRnJvbSA9IGIuZ2V0UHJvcCgnZnJvbScpO1xuICAgIHZhciBhVG8gPSBhLmdldFByb3AoJ3RvJyk7XG4gICAgdmFyIGJUbyA9IGIuZ2V0UHJvcCgndG8nKTtcbiAgICB2YXIgYlZhbHVlQXRCbGVuZENvbXBsZXRlID0gY2FsY1ZhbHVlQXRUaW1lKGJGcm9tLCBiVG8sIGJEdXJhdGlvbiwgdGhpcy5kdXJhdGlvbiwgYkVhc2UpO1xuICAgIHZhciBiU3RhcnRzSGlnaGVyVGhhbkEgPSBiRnJvbSA+IGEuZ2V0KCk7XG5cbiAgICB0aGlzLmJsZW5kUG9pbnRzID0gW1swLCBhLmdldCgpXSwgW3RoaXMuZHVyYXRpb24sIGJWYWx1ZUF0QmxlbmRDb21wbGV0ZV1dO1xuXG4gICAgLy8gRmluZCB0d2VlbiBpbnRlcnNlY3Rpb25cbiAgICB2YXIgdGltZXN0ZXAgPSB0aGlzLmR1cmF0aW9uIC8gYWNjdXJhY3k7XG5cbiAgICB2YXIgZm91bmRQMSA9IGZhbHNlO1xuICAgIHZhciBmb3VuZFAyID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjY3VyYWN5OyBpKyspIHtcbiAgICAgIHZhciB0b3RhbFRpbWUgPSBpICogdGltZXN0ZXA7XG5cbiAgICAgIHZhciBhVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYUZyb20sIGFUbywgYUR1cmF0aW9uLCBhLmVsYXBzZWQgKyB0b3RhbFRpbWUsIGFFYXNlKTtcbiAgICAgIHZhciBiVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYkZyb20sIGJUbywgYkR1cmF0aW9uLCBiLmVsYXBzZWQgKyB0b3RhbFRpbWUsIGJFYXNlKTtcblxuICAgICAgdmFyIGhhc0ludGVyc2VjdGVkID0gYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA+IGJWYWx1ZUF0VGltZSB8fCAhYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA8IGJWYWx1ZUF0VGltZTtcblxuICAgICAgaWYgKCFmb3VuZFAxICYmIGhhc0ludGVyc2VjdGVkKSB7XG4gICAgICAgIHRoaXMuYmxlbmRQb2ludHMuc3BsaWNlKDEsIDAsIFt0b3RhbFRpbWUsIGJWYWx1ZUF0VGltZV0pO1xuICAgICAgICBmb3VuZFAxID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGhhc0ludGVyc2VjdGVkQiA9IGJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPCBiVmFsdWVBdFRpbWUgfHwgIWJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPiBiVmFsdWVBdFRpbWU7XG5cbiAgICAgIGlmIChmb3VuZFAxICYmIGhhc0ludGVyc2VjdGVkQikge1xuICAgICAgICB0aGlzLmJsZW5kUG9pbnRzWzJdID0gW3RvdGFsVGltZSwgYlZhbHVlQXRUaW1lXTtcbiAgICAgICAgZm91bmRQMiA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VuZFAyKSBicmVhaztcbiAgICB9XG5cbiAgICB0by5zdGFydCgpO1xuICB9O1xuXG4gIFR3ZWVuQmxlbmQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgdG8gPSB0aGlzLnByb3BzLnRvO1xuXG4gICAgdmFyIGIgPSB0bztcblxuICAgIHRoaXMucHJvZ3Jlc3MgPSBjbGFtcFByb2dyZXNzKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGhpcy5ibGVuZFBvaW50c1swXVswXSwgdGhpcy5ibGVuZFBvaW50c1syXVswXSwgYi5nZXRFbGFwc2VkKCkpKTtcblxuICAgIGlmICh0aGlzLnByb2dyZXNzID49IDEpIHtcbiAgICAgIHJldHVybiBiLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYVAgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKHRoaXMuYmxlbmRQb2ludHNbMF1bMV0sIHRoaXMuYmxlbmRQb2ludHNbMV1bMV0sIHRoaXMucHJvZ3Jlc3MpO1xuICAgICAgdmFyIGJQID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKSh0aGlzLmJsZW5kUG9pbnRzWzFdWzFdLCB0aGlzLmJsZW5kUG9pbnRzWzJdWzFdLCB0aGlzLnByb2dyZXNzKTtcbiAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGFQLCBiUCwgdGhpcy5wcm9ncmVzcyk7XG4gICAgfVxuICB9O1xuXG4gIFR3ZWVuQmxlbmQucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHZhciB0byA9IHRoaXMucHJvcHMudG87XG5cbiAgICByZXR1cm4gIXRvLmlzQWN0aXZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuQmxlbmQ7XG59KF8yLmRlZmF1bHQpO1xuXG5Ud2VlbkJsZW5kLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWNjdXJhY3k6IDYwXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBUd2VlbkJsZW5kKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwySnNaVzVrTFhSM1pXVnVjeTVxY3lKZExDSnVZVzFsY3lJNld5SmpiR0Z0Y0ZCeWIyZHlaWE56SWl3aVkyRnNZMVpoYkhWbFFYUlVhVzFsSWl3aVpuSnZiU0lzSW5Sdklpd2laSFZ5WVhScGIyNGlMQ0psYkdGd2MyVmtJaXdpWldGelpTSXNJbkJ5YjJkeVpYTnpRWFJVYVcxbElpd2lWSGRsWlc1Q2JHVnVaQ0lzSW05dVUzUmhjblFpTENKd2NtOXdjeUlzSW1GalkzVnlZV041SWl3aVlTSXNJbUlpTENKaFJIVnlZWFJwYjI0aUxDSm5aWFJRY205d0lpd2lZa1IxY21GMGFXOXVJaXdpY0hKdlozSmxjM01pTENKTllYUm9JaXdpYldsdUlpd2laMlYwUld4aGNITmxaQ0lzSW1GRllYTmxJaXdpWWtWaGMyVWlMQ0poUm5KdmJTSXNJbUpHY205dElpd2lZVlJ2SWl3aVlsUnZJaXdpWWxaaGJIVmxRWFJDYkdWdVpFTnZiWEJzWlhSbElpd2lZbE4wWVhKMGMwaHBaMmhsY2xSb1lXNUJJaXdpWjJWMElpd2lZbXhsYm1SUWIybHVkSE1pTENKMGFXMWxjM1JsY0NJc0ltWnZkVzVrVURFaUxDSm1iM1Z1WkZBeUlpd2lhU0lzSW5SdmRHRnNWR2x0WlNJc0ltRldZV3gxWlVGMFZHbHRaU0lzSW1KV1lXeDFaVUYwVkdsdFpTSXNJbWhoYzBsdWRHVnljMlZqZEdWa0lpd2ljM0JzYVdObElpd2lhR0Z6U1c1MFpYSnpaV04wWldSQ0lpd2ljM1JoY25RaUxDSjFjR1JoZEdVaUxDSmhVQ0lzSW1KUUlpd2lhWE5CWTNScGIyNURiMjF3YkdWMFpTSXNJbWx6UVdOMGFYWmxJaXdpWkdWbVlYVnNkRkJ5YjNCeklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3UVVGRFFUczdPenM3T3pzN096dEJRVVZCTEVsQlFVMUJMR2RDUVVGblFpeDVRa0ZCVFN4RFFVRk9MRVZCUVZNc1EwRkJWQ3hEUVVGMFFqczdRVUZGUVN4VFFVRlRReXhsUVVGVUxFTkJRWGxDUXl4SlFVRjZRaXhGUVVFclFrTXNSVUZCTDBJc1JVRkJiVU5ETEZGQlFXNURMRVZCUVRaRFF5eFBRVUUzUXl4RlFVRnpSRU1zU1VGQmRFUXNSVUZCTkVRN1FVRkRNVVFzVFVGQlRVTXNhVUpCUVdsQ1JDeExRVUZMVGl4alFVRmpMR2REUVVGeFFpeERRVUZ5UWl4RlFVRjNRa2tzVVVGQmVFSXNSVUZCYTBORExFOUJRV3hETEVOQlFXUXNRMEZCVEN4RFFVRjJRanRCUVVOQkxGTkJRVThzWjBOQlFYRkNTQ3hKUVVGeVFpeEZRVUV5UWtNc1JVRkJNMElzUlVGQkswSkpMR05CUVM5Q0xFTkJRVkE3UVVGRFJEczdTVUZGUzBNc1ZUczdPenM3T3pzN08zVkNRVXRLUXl4UExITkNRVUZWTzBGQlFVRXNhVUpCUTJsRExFdEJRVXRETEV0QlJIUkRPMEZCUVVFc1VVRkRRVklzU1VGRVFTeFZRVU5CUVN4SlFVUkJPMEZCUVVFc1VVRkRUVU1zUlVGRVRpeFZRVU5OUVN4RlFVUk9PMEZCUVVFc1VVRkRWVU1zVVVGRVZpeFZRVU5WUVN4UlFVUldPMEZCUVVFc1VVRkRiMEpQTEZGQlJIQkNMRlZCUTI5Q1FTeFJRVVJ3UWpzN1FVRkZVaXhSUVVGTlF5eEpRVUZKVml4SlFVRldPMEZCUTBFc1VVRkJUVmNzU1VGQlNWWXNSVUZCVmp0QlFVTkJMRkZCUVUxWExGbEJRVmxHTEVWQlFVVkhMRTlCUVVZc1EwRkJWU3hWUVVGV0xFTkJRV3hDTzBGQlEwRXNVVUZCVFVNc1dVRkJXVWdzUlVGQlJVVXNUMEZCUml4RFFVRlZMRlZCUVZZc1EwRkJiRUk3TzBGQlJVRXNVMEZCUzBVc1VVRkJUQ3hIUVVGblFpeERRVUZvUWp0QlFVTkJMRk5CUVV0aUxGRkJRVXdzUjBGQlowSkJMRmxCUVZsakxFdEJRVXRETEVkQlFVd3NRMEZETVVKTUxGbEJRVmxHTEVWQlFVVlJMRlZCUVVZc1JVRkVZeXhGUVVVeFFrb3NVMEZHTUVJc1EwRkJOVUk3TzBGQlMwRXNVVUZCVFVzc1VVRkJVVlFzUlVGQlJVY3NUMEZCUml4RFFVRlZMRTFCUVZZc1EwRkJaRHRCUVVOQkxGRkJRVTFQTEZGQlFWRlVMRVZCUVVWRkxFOUJRVVlzUTBGQlZTeE5RVUZXTEVOQlFXUTdRVUZEUVN4UlFVRk5VU3hSUVVGUldDeEZRVUZGUnl4UFFVRkdMRU5CUVZVc1RVRkJWaXhEUVVGa08wRkJRMEVzVVVGQlRWTXNVVUZCVVZnc1JVRkJSVVVzVDBGQlJpeERRVUZWTEUxQlFWWXNRMEZCWkR0QlFVTkJMRkZCUVUxVkxFMUJRVTFpTEVWQlFVVkhMRTlCUVVZc1EwRkJWU3hKUVVGV0xFTkJRVm83UVVGRFFTeFJRVUZOVnl4TlFVRk5ZaXhGUVVGRlJTeFBRVUZHTEVOQlFWVXNTVUZCVml4RFFVRmFPMEZCUTBFc1VVRkJUVmtzZDBKQlFYZENNVUlzWjBKQlFXZENkVUlzUzBGQmFFSXNSVUZCZFVKRkxFZEJRWFpDTEVWQlFUUkNWaXhUUVVFMVFpeEZRVUYxUXl4TFFVRkxXaXhSUVVFMVF5eEZRVUZ6Ukd0Q0xFdEJRWFJFTEVOQlFUbENPMEZCUTBFc1VVRkJUVTBzY1VKQlFYRkNTaXhSUVVGUldpeEZRVUZGYVVJc1IwRkJSaXhGUVVGdVF6czdRVUZGUVN4VFFVRkxReXhYUVVGTUxFZEJRVzFDTEVOQlEycENMRU5CUVVNc1EwRkJSQ3hGUVVGSmJFSXNSVUZCUldsQ0xFZEJRVVlzUlVGQlNpeERRVVJwUWl4RlFVVnFRaXhEUVVGRExFdEJRVXQ2UWl4UlFVRk9MRVZCUVdkQ2RVSXNjVUpCUVdoQ0xFTkJSbWxDTEVOQlFXNUNPenRCUVV0Qk8wRkJRMEVzVVVGQlRVa3NWMEZCVnl4TFFVRkxNMElzVVVGQlRDeEhRVUZuUWs4c1VVRkJha003TzBGQlJVRXNVVUZCU1hGQ0xGVkJRVlVzUzBGQlpEdEJRVU5CTEZGQlFVbERMRlZCUVZVc1MwRkJaRHM3UVVGRlFTeFRRVUZMTEVsQlFVbERMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1haQ0xGRkJRWEJDTEVWQlFUaENkVUlzUjBGQk9VSXNSVUZCYlVNN1FVRkRha01zVlVGQlRVTXNXVUZCV1VRc1NVRkJTVWdzVVVGQmRFSTdPMEZCUlVFc1ZVRkJUVXNzWlVGQlpXNURMR2RDUVVGblFuTkNMRXRCUVdoQ0xFVkJRWFZDUlN4SFFVRjJRaXhGUVVFMFFsZ3NVMEZCTlVJc1JVRkJkVU5HTEVWQlFVVlFMRTlCUVVZc1IwRkJXVGhDTEZOQlFXNUVMRVZCUVRoRVpDeExRVUU1UkN4RFFVRnlRanRCUVVOQkxGVkJRVTFuUWl4bFFVRmxjRU1zWjBKQlFXZENkVUlzUzBGQmFFSXNSVUZCZFVKRkxFZEJRWFpDTEVWQlFUUkNWaXhUUVVFMVFpeEZRVUYxUTBnc1JVRkJSVklzVDBGQlJpeEhRVUZaT0VJc1UwRkJia1FzUlVGQk9FUmlMRXRCUVRsRUxFTkJRWEpDT3p0QlFVVkJMRlZCUVUxblFpeHBRa0ZEU0ZZc2MwSkJRWE5DVVN4bFFVRmxReXhaUVVGMFF5eEpRVU5ETEVOQlFVTlVMR3RDUVVGRUxFbEJRWFZDVVN4bFFVRmxReXhaUVVaNlF6czdRVUZMUVN4VlFVRkpMRU5CUVVOTUxFOUJRVVFzU1VGQldVMHNZMEZCYUVJc1JVRkJaME03UVVGRE9VSXNZVUZCUzFJc1YwRkJUQ3hEUVVGcFFsTXNUVUZCYWtJc1EwRkJkMElzUTBGQmVFSXNSVUZCTWtJc1EwRkJNMElzUlVGQk9FSXNRMEZCUTBvc1UwRkJSQ3hGUVVGWlJTeFpRVUZhTEVOQlFUbENPMEZCUTBGTUxHdENRVUZWTEVsQlFWWTdRVUZEUkRzN1FVRkZSQ3hWUVVGTlVTeHJRa0ZEU0Zvc2MwSkJRWE5DVVN4bFFVRmxReXhaUVVGMFF5eEpRVU5ETEVOQlFVTlVMR3RDUVVGRUxFbEJRWFZDVVN4bFFVRmxReXhaUVVaNlF6czdRVUZMUVN4VlFVRkpUQ3hYUVVGWFVTeGxRVUZtTEVWQlFXZERPMEZCUXpsQ0xHRkJRVXRXTEZkQlFVd3NRMEZCYVVJc1EwRkJha0lzU1VGQmMwSXNRMEZCUTBzc1UwRkJSQ3hGUVVGWlJTeFpRVUZhTEVOQlFYUkNPMEZCUTBGS0xHdENRVUZWTEVsQlFWWTdRVUZEUkRzN1FVRkZSQ3hWUVVGSlFTeFBRVUZLTEVWQlFXRTdRVUZEWkRzN1FVRkZSRGxDTEU5QlFVZHpReXhMUVVGSU8wRkJRMFFzUnpzN2RVSkJSVVJETEUwc2NVSkJRVk03UVVGQlFTeFJRVU5EZGtNc1JVRkVSQ3hIUVVOUkxFdEJRVXRQTEV0QlJHSXNRMEZEUTFBc1JVRkVSRHM3UVVGRlVDeFJRVUZOVlN4SlFVRkpWaXhGUVVGV096dEJRVVZCTEZOQlFVdGpMRkZCUVV3c1IwRkJaMEpxUWl4alFVRmpMR2REUVVGeFFpeExRVUZMT0VJc1YwRkJUQ3hEUVVGcFFpeERRVUZxUWl4RlFVRnZRaXhEUVVGd1FpeERRVUZ5UWl4RlFVRTJReXhMUVVGTFFTeFhRVUZNTEVOQlFXbENMRU5CUVdwQ0xFVkJRVzlDTEVOQlFYQkNMRU5CUVRkRExFVkJRWEZGYWtJc1JVRkJSVThzVlVGQlJpeEZRVUZ5UlN4RFFVRmtMRU5CUVdoQ096dEJRVVZCTEZGQlFVa3NTMEZCUzBnc1VVRkJUQ3hKUVVGcFFpeERRVUZ5UWl4RlFVRjNRanRCUVVOMFFpeGhRVUZQU2l4RlFVRkZaMElzUjBGQlJpeEZRVUZRTzBGQlEwUXNTMEZHUkN4TlFVVlBPMEZCUTB3c1ZVRkJUV01zUzBGQlN5eG5RMEZCY1VJc1MwRkJTMklzVjBGQlRDeERRVUZwUWl4RFFVRnFRaXhGUVVGdlFpeERRVUZ3UWl4RFFVRnlRaXhGUVVFMlF5eExRVUZMUVN4WFFVRk1MRU5CUVdsQ0xFTkJRV3BDTEVWQlFXOUNMRU5CUVhCQ0xFTkJRVGRETEVWQlFYRkZMRXRCUVV0aUxGRkJRVEZGTEVOQlFWZzdRVUZEUVN4VlFVRk5Na0lzUzBGQlN5eG5RMEZCY1VJc1MwRkJTMlFzVjBGQlRDeERRVUZwUWl4RFFVRnFRaXhGUVVGdlFpeERRVUZ3UWl4RFFVRnlRaXhGUVVFMlF5eExRVUZMUVN4WFFVRk1MRU5CUVdsQ0xFTkJRV3BDTEVWQlFXOUNMRU5CUVhCQ0xFTkJRVGRETEVWQlFYRkZMRXRCUVV0aUxGRkJRVEZGTEVOQlFWZzdRVUZEUVN4aFFVRlBMR2REUVVGeFFqQkNMRVZCUVhKQ0xFVkJRWGxDUXl4RlFVRjZRaXhGUVVFMlFpeExRVUZMTTBJc1VVRkJiRU1zUTBGQlVEdEJRVU5FTzBGQlEwWXNSenM3ZFVKQlJVUTBRaXhuUWl3clFrRkJiVUk3UVVGQlFTeFJRVU5VTVVNc1JVRkVVeXhIUVVOR0xFdEJRVXRQTEV0QlJFZ3NRMEZEVkZBc1JVRkVVenM3UVVGRmFrSXNWMEZCVHl4RFFVRkRRU3hIUVVGSE1rTXNVVUZCU0N4RlFVRlNPMEZCUTBRc1J6czdPenM3UVVGNFJrZDBReXhWTEVOQlEwZDFReXhaTEVkQlFXVTdRVUZEY0VKd1F5eFpRVUZWTzBGQlJGVXNRenM3YTBKQk1FWlVMRlZCUVVORUxFdEJRVVE3UVVGQlFTeFRRVUZYTEVsQlFVbEdMRlZCUVVvc1EwRkJaVVVzUzBGQlppeERRVUZZTzBGQlFVRXNReUlzSW1acGJHVWlPaUppYkdWdVpDMTBkMlZsYm5NdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYm1sdGNHOXlkQ0I3SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbExDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeUI5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JtbHRjRzl5ZENCN0lHTnNZVzF3SUgwZ1puSnZiU0FuTGk0dmFXNWpMM1J5WVc1elptOXliV1Z5Y3ljN1hHNWNibU52Ym5OMElHTnNZVzF3VUhKdlozSmxjM01nUFNCamJHRnRjQ2d3TENBeEtUdGNibHh1Wm5WdVkzUnBiMjRnWTJGc1kxWmhiSFZsUVhSVWFXMWxLR1p5YjIwc0lIUnZMQ0JrZFhKaGRHbHZiaXdnWld4aGNITmxaQ3dnWldGelpTa2dlMXh1SUNCamIyNXpkQ0J3Y205bmNtVnpjMEYwVkdsdFpTQTlJR1ZoYzJVb1kyeGhiWEJRY205bmNtVnpjeWhuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNnd0xDQmtkWEpoZEdsdmJpd2daV3hoY0hObFpDa3BLVHRjYmlBZ2NtVjBkWEp1SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektHWnliMjBzSUhSdkxDQndjbTluY21WemMwRjBWR2x0WlNrN1hHNTlYRzVjYm1Oc1lYTnpJRlIzWldWdVFteGxibVFnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCemRHRjBhV01nWkdWbVlYVnNkRkJ5YjNCeklEMGdlMXh1SUNBZ0lHRmpZM1Z5WVdONU9pQTJNRnh1SUNCOU8xeHVYRzRnSUc5dVUzUmhjblFvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJtY205dExDQjBieXdnWkhWeVlYUnBiMjRzSUdGalkzVnlZV041SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHTnZibk4wSUdFZ1BTQm1jbTl0TzF4dUlDQWdJR052Ym5OMElHSWdQU0IwYnp0Y2JpQWdJQ0JqYjI1emRDQmhSSFZ5WVhScGIyNGdQU0JoTG1kbGRGQnliM0FvSjJSMWNtRjBhVzl1SnlrN1hHNGdJQ0FnWTI5dWMzUWdZa1IxY21GMGFXOXVJRDBnWWk1blpYUlFjbTl3S0Nka2RYSmhkR2x2YmljcE8xeHVYRzRnSUNBZ2RHaHBjeTV3Y205bmNtVnpjeUE5SURBN1hHNGdJQ0FnZEdocGN5NWtkWEpoZEdsdmJpQTlJR1IxY21GMGFXOXVJSHg4SUUxaGRHZ3ViV2x1S0Z4dUlDQWdJQ0FnWVVSMWNtRjBhVzl1SUMwZ1lTNW5aWFJGYkdGd2MyVmtLQ2tzWEc0Z0lDQWdJQ0JpUkhWeVlYUnBiMjVjYmlBZ0lDQXBPMXh1WEc0Z0lDQWdZMjl1YzNRZ1lVVmhjMlVnUFNCaExtZGxkRkJ5YjNBb0oyVmhjMlVuS1R0Y2JpQWdJQ0JqYjI1emRDQmlSV0Z6WlNBOUlHSXVaMlYwVUhKdmNDZ25aV0Z6WlNjcE8xeHVJQ0FnSUdOdmJuTjBJR0ZHY205dElEMGdZUzVuWlhSUWNtOXdLQ2RtY205dEp5azdYRzRnSUNBZ1kyOXVjM1FnWWtaeWIyMGdQU0JpTG1kbGRGQnliM0FvSjJaeWIyMG5LVHRjYmlBZ0lDQmpiMjV6ZENCaFZHOGdQU0JoTG1kbGRGQnliM0FvSjNSdkp5azdYRzRnSUNBZ1kyOXVjM1FnWWxSdklEMGdZaTVuWlhSUWNtOXdLQ2QwYnljcE8xeHVJQ0FnSUdOdmJuTjBJR0pXWVd4MVpVRjBRbXhsYm1SRGIyMXdiR1YwWlNBOUlHTmhiR05XWVd4MVpVRjBWR2x0WlNoaVJuSnZiU3dnWWxSdkxDQmlSSFZ5WVhScGIyNHNJSFJvYVhNdVpIVnlZWFJwYjI0c0lHSkZZWE5sS1R0Y2JpQWdJQ0JqYjI1emRDQmlVM1JoY25SelNHbG5hR1Z5VkdoaGJrRWdQU0JpUm5KdmJTQStJR0V1WjJWMEtDazdYRzVjYmlBZ0lDQjBhR2x6TG1Kc1pXNWtVRzlwYm5SeklEMGdXMXh1SUNBZ0lDQWdXekFzSUdFdVoyVjBLQ2xkTEZ4dUlDQWdJQ0FnVzNSb2FYTXVaSFZ5WVhScGIyNHNJR0pXWVd4MVpVRjBRbXhsYm1SRGIyMXdiR1YwWlYxY2JpQWdJQ0JkTzF4dVhHNGdJQ0FnTHk4Z1JtbHVaQ0IwZDJWbGJpQnBiblJsY25ObFkzUnBiMjVjYmlBZ0lDQmpiMjV6ZENCMGFXMWxjM1JsY0NBOUlIUm9hWE11WkhWeVlYUnBiMjRnTHlCaFkyTjFjbUZqZVR0Y2JseHVJQ0FnSUd4bGRDQm1iM1Z1WkZBeElEMGdabUZzYzJVN1hHNGdJQ0FnYkdWMElHWnZkVzVrVURJZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1lXTmpkWEpoWTNrN0lHa3JLeWtnZTF4dUlDQWdJQ0FnWTI5dWMzUWdkRzkwWVd4VWFXMWxJRDBnYVNBcUlIUnBiV1Z6ZEdWd08xeHVYRzRnSUNBZ0lDQmpiMjV6ZENCaFZtRnNkV1ZCZEZScGJXVWdQU0JqWVd4alZtRnNkV1ZCZEZScGJXVW9ZVVp5YjIwc0lHRlVieXdnWVVSMWNtRjBhVzl1TENCaExtVnNZWEJ6WldRZ0t5QjBiM1JoYkZScGJXVXNJR0ZGWVhObEtUdGNiaUFnSUNBZ0lHTnZibk4wSUdKV1lXeDFaVUYwVkdsdFpTQTlJR05oYkdOV1lXeDFaVUYwVkdsdFpTaGlSbkp2YlN3Z1lsUnZMQ0JpUkhWeVlYUnBiMjRzSUdJdVpXeGhjSE5sWkNBcklIUnZkR0ZzVkdsdFpTd2dZa1ZoYzJVcE8xeHVYRzRnSUNBZ0lDQmpiMjV6ZENCb1lYTkpiblJsY25ObFkzUmxaQ0E5SUNoY2JpQWdJQ0FnSUNBZ0tHSlRkR0Z5ZEhOSWFXZG9aWEpVYUdGdVFTQW1KaUJoVm1Gc2RXVkJkRlJwYldVZ1BpQmlWbUZzZFdWQmRGUnBiV1VwSUh4OFhHNGdJQ0FnSUNBZ0lDZ2hZbE4wWVhKMGMwaHBaMmhsY2xSb1lXNUJJQ1ltSUdGV1lXeDFaVUYwVkdsdFpTQThJR0pXWVd4MVpVRjBWR2x0WlNsY2JpQWdJQ0FnSUNrN1hHNWNiaUFnSUNBZ0lHbG1JQ2doWm05MWJtUlFNU0FtSmlCb1lYTkpiblJsY25ObFkzUmxaQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbUpzWlc1a1VHOXBiblJ6TG5Od2JHbGpaU2d4TENBd0xDQmJkRzkwWVd4VWFXMWxMQ0JpVm1Gc2RXVkJkRlJwYldWZEtUdGNiaUFnSUNBZ0lDQWdabTkxYm1SUU1TQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHTnZibk4wSUdoaGMwbHVkR1Z5YzJWamRHVmtRaUE5SUNoY2JpQWdJQ0FnSUNBZ0tHSlRkR0Z5ZEhOSWFXZG9aWEpVYUdGdVFTQW1KaUJoVm1Gc2RXVkJkRlJwYldVZ1BDQmlWbUZzZFdWQmRGUnBiV1VwSUh4OFhHNGdJQ0FnSUNBZ0lDZ2hZbE4wWVhKMGMwaHBaMmhsY2xSb1lXNUJJQ1ltSUdGV1lXeDFaVUYwVkdsdFpTQStJR0pXWVd4MVpVRjBWR2x0WlNsY2JpQWdJQ0FnSUNrN1hHNWNiaUFnSUNBZ0lHbG1JQ2htYjNWdVpGQXhJQ1ltSUdoaGMwbHVkR1Z5YzJWamRHVmtRaWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbUpzWlc1a1VHOXBiblJ6V3pKZElEMGdXM1J2ZEdGc1ZHbHRaU3dnWWxaaGJIVmxRWFJVYVcxbFhUdGNiaUFnSUNBZ0lDQWdabTkxYm1SUU1pQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHbG1JQ2htYjNWdVpGQXlLU0JpY21WaGF6dGNiaUFnSUNCOVhHNWNiaUFnSUNCMGJ5NXpkR0Z5ZENncE8xeHVJQ0I5WEc1Y2JpQWdkWEJrWVhSbEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2RHOGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnWTI5dWMzUWdZaUE5SUhSdk8xeHVYRzRnSUNBZ2RHaHBjeTV3Y205bmNtVnpjeUE5SUdOc1lXMXdVSEp2WjNKbGMzTW9aMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvZEdocGN5NWliR1Z1WkZCdmFXNTBjMXN3WFZzd1hTd2dkR2hwY3k1aWJHVnVaRkJ2YVc1MGMxc3lYVnN3WFN3Z1lpNW5aWFJGYkdGd2MyVmtLQ2twS1R0Y2JseHVJQ0FnSUdsbUlDaDBhR2x6TG5CeWIyZHlaWE56SUQ0OUlERXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQmlMbWRsZENncE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQmhVQ0E5SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektIUm9hWE11WW14bGJtUlFiMmx1ZEhOYk1GMWJNVjBzSUhSb2FYTXVZbXhsYm1SUWIybHVkSE5iTVYxYk1WMHNJSFJvYVhNdWNISnZaM0psYzNNcE8xeHVJQ0FnSUNBZ1kyOXVjM1FnWWxBZ1BTQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWgwYUdsekxtSnNaVzVrVUc5cGJuUnpXekZkV3pGZExDQjBhR2x6TG1Kc1pXNWtVRzlwYm5Seld6SmRXekZkTENCMGFHbHpMbkJ5YjJkeVpYTnpLVHRjYmlBZ0lDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWhoVUN3Z1lsQXNJSFJvYVhNdWNISnZaM0psYzNNcE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHbHpRV04wYVc5dVEyOXRjR3hsZEdVb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCMGJ5QjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0J5WlhSMWNtNGdJWFJ2TG1selFXTjBhWFpsS0NrN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tIQnliM0J6S1NBOVBpQnVaWGNnVkhkbFpXNUNiR1Z1WkNod2NtOXdjeWs3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvYmxlbmQtdHdlZW5zLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENoYWluID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENoYWluLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBDaGFpbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaGFpbik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnBsYXlOZXh0ID0gX3RoaXMucGxheU5leHQuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgQ2hhaW4ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHRoaXMucHJvcHMuaSA9IDA7XG4gICAgdGhpcy5wbGF5Q3VycmVudCgpO1xuICB9O1xuXG4gIENoYWluLnByb3RvdHlwZS5wbGF5TmV4dCA9IGZ1bmN0aW9uIHBsYXlOZXh0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBpID0gX3Byb3BzLmksXG4gICAgICAgIG9yZGVyID0gX3Byb3BzLm9yZGVyO1xuXG4gICAgaWYgKGkgPCBvcmRlci5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnByb3BzLmkrKztcbiAgICAgIHRoaXMucGxheUN1cnJlbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUucGxheUN1cnJlbnQgPSBmdW5jdGlvbiBwbGF5Q3VycmVudCgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGkgPSBfcHJvcHMyLmksXG4gICAgICAgIG9yZGVyID0gX3Byb3BzMi5vcmRlcjtcblxuICAgIG9yZGVyW2ldLnByb3BzLl9vbkNvbXBsZXRlID0gdGhpcy5wbGF5TmV4dDtcbiAgICBvcmRlcltpXS5zdGFydCgpO1xuICB9O1xuXG4gIENoYWluLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICBpID0gX3Byb3BzMy5pLFxuICAgICAgICBvcmRlciA9IF9wcm9wczMub3JkZXI7XG5cbiAgICBvcmRlcltpXS5zdG9wKCk7XG4gIH07XG5cbiAgcmV0dXJuIENoYWluO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9yZGVyLCBvbkNvbXBsZXRlKSB7XG4gIHJldHVybiBuZXcgQ2hhaW4oeyBvcmRlcjogb3JkZXIsIG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk5vWVdsdUxtcHpJbDBzSW01aGJXVnpJanBiSWtOb1lXbHVJaXdpY0hKdmNITWlMQ0p3YkdGNVRtVjRkQ0lzSW1KcGJtUWlMQ0p2YmxOMFlYSjBJaXdpYVNJc0luQnNZWGxEZFhKeVpXNTBJaXdpYjNKa1pYSWlMQ0pzWlc1bmRHZ2lMQ0pqYjIxd2JHVjBaU0lzSWw5dmJrTnZiWEJzWlhSbElpd2ljM1JoY25RaUxDSnZibE4wYjNBaUxDSnpkRzl3SWl3aWIyNURiMjF3YkdWMFpTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN096czdPenM3T3pzN1NVRkZUVUVzU3pzN08wRkJRMG9zYVVKQlFWbERMRXRCUVZvc1JVRkJiVUk3UVVGQlFUczdRVUZCUVN4cFJFRkRha0lzYlVKQlFVMUJMRXRCUVU0c1EwRkVhVUk3TzBGQlJXcENMRlZCUVV0RExGRkJRVXdzUjBGQlowSXNUVUZCUzBFc1VVRkJUQ3hEUVVGalF5eEpRVUZrTEU5QlFXaENPMEZCUm1sQ08wRkJSMnhDT3p0clFrRkZSRU1zVHl4elFrRkJWVHRCUVVOU0xGTkJRVXRJTEV0QlFVd3NRMEZCVjBrc1EwRkJXQ3hIUVVGbExFTkJRV1k3UVVGRFFTeFRRVUZMUXl4WFFVRk1PMEZCUTBRc1J6czdhMEpCUlVSS0xGRXNkVUpCUVZjN1FVRkJRU3hwUWtGRFdTeExRVUZMUkN4TFFVUnFRanRCUVVGQkxGRkJRMFJKTEVOQlJFTXNWVUZEUkVFc1EwRkVRenRCUVVGQkxGRkJRMFZGTEV0QlJFWXNWVUZEUlVFc1MwRkVSanM3UVVGRlZDeFJRVUZKUml4SlFVRkpSU3hOUVVGTlF5eE5RVUZPTEVkQlFXVXNRMEZCZGtJc1JVRkJNRUk3UVVGRGVFSXNWMEZCUzFBc1MwRkJUQ3hEUVVGWFNTeERRVUZZTzBGQlEwRXNWMEZCUzBNc1YwRkJURHRCUVVORUxFdEJTRVFzVFVGSFR6dEJRVU5NTEZkQlFVdEhMRkZCUVV3N1FVRkRSRHRCUVVOR0xFYzdPMnRDUVVWRVNDeFhMREJDUVVGak8wRkJRVUVzYTBKQlExTXNTMEZCUzB3c1MwRkVaRHRCUVVGQkxGRkJRMHBKTEVOQlJFa3NWMEZEU2tFc1EwRkVTVHRCUVVGQkxGRkJRMFJGTEV0QlJFTXNWMEZEUkVFc1MwRkVRenM3UVVGRldrRXNWVUZCVFVZc1EwRkJUaXhGUVVGVFNpeExRVUZVTEVOQlFXVlRMRmRCUVdZc1IwRkJOa0lzUzBGQlMxSXNVVUZCYkVNN1FVRkRRVXNzVlVGQlRVWXNRMEZCVGl4RlFVRlRUU3hMUVVGVU8wRkJRMFFzUnpzN2EwSkJSVVJETEUwc2NVSkJRVk03UVVGQlFTeHJRa0ZEWXl4TFFVRkxXQ3hMUVVSdVFqdEJRVUZCTEZGQlEwTkpMRU5CUkVRc1YwRkRRMEVzUTBGRVJEdEJRVUZCTEZGQlEwbEZMRXRCUkVvc1YwRkRTVUVzUzBGRVNqczdRVUZGVUVFc1ZVRkJUVVlzUTBGQlRpeEZRVUZUVVN4SlFVRlVPMEZCUTBRc1J6czdPenM3YTBKQlIxa3NWVUZCUTA0c1MwRkJSQ3hGUVVGUlR5eFZRVUZTTzBGQlFVRXNVMEZCZFVJc1NVRkJTV1FzUzBGQlNpeERRVUZWTEVWQlFVVlBMRmxCUVVZc1JVRkJVMDhzYzBKQlFWUXNSVUZCVml4RFFVRjJRanRCUVVGQkxFTWlMQ0ptYVd4bElqb2lZMmhoYVc0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYmx4dVkyeGhjM01nUTJoaGFXNGdaWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeWtnZTF4dUlDQWdJSE4xY0dWeUtIQnliM0J6S1R0Y2JpQWdJQ0IwYUdsekxuQnNZWGxPWlhoMElEMGdkR2hwY3k1d2JHRjVUbVY0ZEM1aWFXNWtLSFJvYVhNcE8xeHVJQ0I5WEc1Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQjBhR2x6TG5CeWIzQnpMbWtnUFNBd08xeHVJQ0FnSUhSb2FYTXVjR3hoZVVOMWNuSmxiblFvS1R0Y2JpQWdmVnh1WEc0Z0lIQnNZWGxPWlhoMEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2FTd2diM0prWlhJZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdhV1lnS0drZ1BDQnZjbVJsY2k1c1pXNW5kR2dnTFNBeEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG5CeWIzQnpMbWtyS3p0Y2JpQWdJQ0FnSUhSb2FYTXVjR3hoZVVOMWNuSmxiblFvS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdkR2hwY3k1amIyMXdiR1YwWlNncE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lIQnNZWGxEZFhKeVpXNTBLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dhU3dnYjNKa1pYSWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnYjNKa1pYSmJhVjB1Y0hKdmNITXVYMjl1UTI5dGNHeGxkR1VnUFNCMGFHbHpMbkJzWVhsT1pYaDBPMXh1SUNBZ0lHOXlaR1Z5VzJsZExuTjBZWEowS0NrN1hHNGdJSDFjYmx4dUlDQnZibE4wYjNBb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCcExDQnZjbVJsY2lCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQnZjbVJsY2x0cFhTNXpkRzl3S0NrN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHOXlaR1Z5TENCdmJrTnZiWEJzWlhSbEtTQTlQaUJ1WlhjZ1EyaGhhVzRvZXlCdmNtUmxjaXdnYjI1RGIyMXdiR1YwWlNCOUtUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9jaGFpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90d2VlbiA9IHJlcXVpcmUoJy4vdHdlZW4nKTtcblxudmFyIF90d2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2Vlbik7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiAoMCwgX3R3ZWVuMi5kZWZhdWx0KShfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBmcm9tOiAwLFxuICAgIHRvOiAxLFxuICAgIG9uVXBkYXRlOiAoMCwgX3RyYW5zZm9ybWVycy5mbG93KSgoMCwgX3RyYW5zZm9ybWVycy5ibGVuZENvbG9yKShwcm9wcy5mcm9tLCBwcm9wcy50byksIF92YWx1ZVR5cGVzLmNvbG9yLnRyYW5zZm9ybSwgcHJvcHMub25VcGRhdGUgfHwgbm9vcClcbiAgfSkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOdmJHOXlMWFIzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiSW01dmIzQWlMQ0p3Y205d2N5SXNJbVp5YjIwaUxDSjBieUlzSW05dVZYQmtZWFJsSWl3aWRISmhibk5tYjNKdElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZCUVRzN096dEJRVU5CT3p0QlFVTkJPenM3TzBGQlJVRXNTVUZCVFVFc1QwRkJUeXhaUVVGTkxFTkJRVVVzUTBGQmNrSTdPMnRDUVVWbExGVkJRVU5ETEV0QlFVUXNSVUZCVnp0QlFVTjRRaXhUUVVGUExHdERRVU5HUVN4TFFVUkZPMEZCUlV4RExGVkJRVTBzUTBGR1JEdEJRVWRNUXl4UlFVRkpMRU5CU0VNN1FVRkpURU1zWTBGQlZTeDNRa0ZEVWl3NFFrRkJWMGdzVFVGQlRVTXNTVUZCYWtJc1JVRkJkVUpFTEUxQlFVMUZMRVZCUVRkQ0xFTkJSRkVzUlVGRlVpeHJRa0ZCVFVVc1UwRkdSU3hGUVVkU1NpeE5RVUZOUnl4UlFVRk9MRWxCUVd0Q1NpeEpRVWhXTzBGQlNrd3NTMEZCVUR0QlFWVkVMRU1pTENKbWFXeGxJam9pWTI5c2IzSXRkSGRsWlc0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZEhkbFpXNGdabkp2YlNBbkxpOTBkMlZsYmljN1hHNXBiWEJ2Y25RZ2V5QmliR1Z1WkVOdmJHOXlMQ0JtYkc5M0lIMGdabkp2YlNBbkxpNHZhVzVqTDNSeVlXNXpabTl5YldWeWN5YzdYRzVwYlhCdmNuUWdleUJqYjJ4dmNpQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MllXeDFaUzEwZVhCbGN5YzdYRzVjYm1OdmJuTjBJRzV2YjNBZ1BTQW9LU0E5UGlCN2ZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSEJ5YjNCektTQTlQaUI3WEc0Z0lISmxkSFZ5YmlCMGQyVmxiaWg3WEc0Z0lDQWdMaTR1Y0hKdmNITXNYRzRnSUNBZ1puSnZiVG9nTUN4Y2JpQWdJQ0IwYnpvZ01TeGNiaUFnSUNCdmJsVndaR0YwWlRvZ1pteHZkeWhjYmlBZ0lDQWdJR0pzWlc1a1EyOXNiM0lvY0hKdmNITXVabkp2YlN3Z2NISnZjSE11ZEc4cExGeHVJQ0FnSUNBZ1kyOXNiM0l1ZEhKaGJuTm1iM0p0TEZ4dUlDQWdJQ0FnY0hKdmNITXViMjVWY0dSaGRHVWdmSHdnYm05dmNGeHVJQ0FnSUNsY2JpQWdmU2s3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2NvbG9yLXR3ZWVuLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ29tcG9zaXRlQWN0aW9uID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENvbXBvc2l0ZUFjdGlvbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ29tcG9zaXRlQWN0aW9uKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvc2l0ZUFjdGlvbik7XG5cbiAgICB2YXIgYWN0aW9ucyA9IHByb3BzLmFjdGlvbnMsXG4gICAgICAgIHJlbWFpbmluZ1Byb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ2FjdGlvbnMnXSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwodGhpcywgcmVtYWluaW5nUHJvcHMpKTtcblxuICAgIF90aGlzLmN1cnJlbnQgPSB7fTtcbiAgICBfdGhpcy5hY3Rpb25LZXlzID0gW107XG4gICAgX3RoaXMuYWRkQWN0aW9ucyhwcm9wcy5hY3Rpb25zKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmFkZEFjdGlvbnMgPSBmdW5jdGlvbiBhZGRBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChfdGhpczIuYWN0aW9uS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgIF90aGlzMi5hY3Rpb25LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMyW2tleV0gPSBhY3Rpb25zW2tleV07XG5cbiAgICAgIHZhciBvblVwZGF0ZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuY3VycmVudFtrZXldID0gdjtcbiAgICAgIH07O1xuXG4gICAgICAvLyBJbW1lZGlhdGVseSB1cGRhdGUgd2l0aCB0aGUgY3VycmVudCBhY3Rpb24gc3RhdGVcbiAgICAgIG9uVXBkYXRlKF90aGlzMltrZXldLmdldCgpKTtcblxuICAgICAgX3RoaXMyW2tleV0uc2V0UHJvcHMoe1xuICAgICAgICBfb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cbiAgICAgIH0pLmFkZExpc3RlbmVyKG9uVXBkYXRlKTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIGFjdGlvbnMpIHtcbiAgICAgIF9sb29wKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSB0aGlzLmFjdGlvbktleXMubGVuZ3RoO1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczNba2V5XS5zdGFydCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzNFtrZXldLnN0b3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gZ2V0VmVsb2NpdHkoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB2YXIgdmVsb2NpdHkgPSB7fTtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gdmVsb2NpdHlba2V5XSA9IF90aGlzNVtrZXldLmdldFZlbG9jaXR5KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZlbG9jaXR5O1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMDtcbiAgfTtcblxuICByZXR1cm4gQ29tcG9zaXRlQWN0aW9uO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ29tcG9zaXRlQWN0aW9uKF9leHRlbmRzKHtcbiAgICBhY3Rpb25zOiBhY3Rpb25zXG4gIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk52YlhCdmMybDBaUzVxY3lKZExDSnVZVzFsY3lJNld5SkRiMjF3YjNOcGRHVkJZM1JwYjI0aUxDSndjbTl3Y3lJc0ltRmpkR2x2Ym5NaUxDSnlaVzFoYVc1cGJtZFFjbTl3Y3lJc0ltTjFjbkpsYm5RaUxDSmhZM1JwYjI1TFpYbHpJaXdpWVdSa1FXTjBhVzl1Y3lJc0ltdGxlU0lzSW1sdVpHVjRUMllpTENKd2RYTm9JaXdpYjI1VmNHUmhkR1VpTENKMklpd2laMlYwSWl3aWMyVjBVSEp2Y0hNaUxDSmZiMjVUZEc5d0lpd2liblZ0UVdOMGFYWmxRV04wYVc5dWN5SXNJbUZrWkV4cGMzUmxibVZ5SWl3aWIyNVRkR0Z5ZENJc0lteGxibWQwYUNJc0ltWnZja1ZoWTJnaUxDSnpkR0Z5ZENJc0ltOXVVM1J2Y0NJc0luTjBiM0FpTENKblpYUldaV3h2WTJsMGVTSXNJblpsYkc5amFYUjVJaXdpYVhOQlkzUnBiMjVEYjIxd2JHVjBaU0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenM3T3pzN096czdPMGxCUlUxQkxHVTdPenRCUVVOS0xESkNRVUZaUXl4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlFVRXNVVUZEVkVNc1QwRkVVeXhIUVVOelFrUXNTMEZFZEVJc1EwRkRWRU1zVDBGRVV6dEJRVUZCTEZGQlEwZERMR05CUkVnc05FSkJRM05DUml4TFFVUjBRanM3UVVGQlFTeHBSRUZGYWtJc2JVSkJRVTFGTEdOQlFVNHNRMEZHYVVJN08wRkJSMnBDTEZWQlFVdERMRTlCUVV3c1IwRkJaU3hGUVVGbU8wRkJRMEVzVlVGQlMwTXNWVUZCVEN4SFFVRnJRaXhGUVVGc1FqdEJRVU5CTEZWQlFVdERMRlZCUVV3c1EwRkJaMEpNTEUxQlFVMURMRTlCUVhSQ08wRkJUR2xDTzBGQlRXeENPenMwUWtGRlJFa3NWU3gxUWtGQlYwb3NUeXhGUVVGVE8wRkJRVUU3TzBGQlFVRXNNRUpCUTFCTExFZEJSRTg3UVVGRmFFSXNWVUZCU1N4UFFVRkxSaXhWUVVGTUxFTkJRV2RDUnl4UFFVRm9RaXhEUVVGM1FrUXNSMEZCZUVJc1RVRkJhVU1zUTBGQlF5eERRVUYwUXl4RlFVRjVRenRCUVVOMlF5eGxRVUZMUml4VlFVRk1MRU5CUVdkQ1NTeEpRVUZvUWl4RFFVRnhRa1lzUjBGQmNrSTdRVUZEUkRzN1FVRkZSQ3hoUVVGTFFTeEhRVUZNTEVsQlFWbE1MRkZCUVZGTExFZEJRVklzUTBGQldqczdRVUZGUVN4VlFVRk5SeXhYUVVGWExGVkJRVU5ETEVOQlFVUTdRVUZCUVN4bFFVRlBMRTlCUVV0UUxFOUJRVXdzUTBGQllVY3NSMEZCWWl4SlFVRnZRa2tzUTBGQk0wSTdRVUZCUVN4UFFVRnFRaXhEUVVFNFF6czdRVUZGT1VNN1FVRkRRVVFzWlVGQlV5eFBRVUZMU0N4SFFVRk1MRVZCUVZWTExFZEJRVllzUlVGQlZEczdRVUZGUVN4aFFVRkxUQ3hIUVVGTUxFVkJRMGROTEZGQlJFZ3NRMEZEV1R0QlFVTlNReXhwUWtGQlV6dEJRVUZCTEdsQ1FVRk5MRTlCUVV0RExHZENRVUZNTEVWQlFVNDdRVUZCUVR0QlFVUkVMRTlCUkZvc1JVRkpSME1zVjBGS1NDeERRVWxsVGl4UlFVcG1PMEZCWW1kQ096dEJRVU5zUWl4VFFVRkxMRWxCUVUxSUxFZEJRVmdzU1VGQmEwSk1MRTlCUVd4Q0xFVkJRVEpDTzBGQlFVRXNXVUZCYUVKTExFZEJRV2RDTzBGQmFVSXhRanRCUVVOR0xFYzdPelJDUVVWRVZTeFBMSE5DUVVGVk8wRkJRVUU3TzBGQlExSXNVMEZCUzBZc1owSkJRVXdzUjBGQmQwSXNTMEZCUzFZc1ZVRkJUQ3hEUVVGblFtRXNUVUZCZUVNN1FVRkRRU3hUUVVGTFlpeFZRVUZNTEVOQlFXZENZeXhQUVVGb1FpeERRVUYzUWl4VlFVRkRXaXhIUVVGRU8wRkJRVUVzWVVGQlV5eFBRVUZMUVN4SFFVRk1MRVZCUVZWaExFdEJRVllzUlVGQlZEdEJRVUZCTEV0QlFYaENPMEZCUTBRc1J6czdORUpCUlVSRExFMHNjVUpCUVZNN1FVRkJRVHM3UVVGRFVDeFRRVUZMYUVJc1ZVRkJUQ3hEUVVGblFtTXNUMEZCYUVJc1EwRkJkMElzVlVGQlExb3NSMEZCUkR0QlFVRkJMR0ZCUVZNc1QwRkJTMEVzUjBGQlRDeEZRVUZWWlN4SlFVRldMRVZCUVZRN1FVRkJRU3hMUVVGNFFqdEJRVU5FTEVjN096UkNRVVZFUXl4WExEQkNRVUZqTzBGQlFVRTdPMEZCUTFvc1VVRkJUVU1zVjBGQlZ5eEZRVUZxUWp0QlFVTkJMRk5CUVV0dVFpeFZRVUZNTEVOQlFXZENZeXhQUVVGb1FpeERRVUYzUWl4VlFVRkRXaXhIUVVGRU8wRkJRVUVzWVVGQlUybENMRk5CUVZOcVFpeEhRVUZVTEVsQlFXZENMRTlCUVV0QkxFZEJRVXdzUlVGQlZXZENMRmRCUVZZc1JVRkJla0k3UVVGQlFTeExRVUY0UWp0QlFVTkJMRmRCUVU5RExGRkJRVkE3UVVGRFJDeEhPenMwUWtGRlJFTXNaMElzSzBKQlFXMUNPMEZCUTJwQ0xGZEJRVkVzUzBGQlMxWXNaMEpCUVV3c1MwRkJNRUlzUTBGQmJFTTdRVUZEUkN4SE96czdPenRyUWtGSFdTeFZRVUZEWWl4UFFVRkVMRVZCUVZWRUxFdEJRVllzUlVGQmIwSTdRVUZEYWtNc1UwRkJUeXhKUVVGSlJDeGxRVUZLTzBGQlEweEZPMEZCUkVzc1MwRkZSa1FzUzBGR1JTeEZRVUZRTzBGQlNVUXNReUlzSW1acGJHVWlPaUpqYjIxd2IzTnBkR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dkp6dGNibWx0Y0c5eWRDQjdJRzl1Um5KaGJXVlZjR1JoZEdVZ2ZTQm1jbTl0SUNjdUxpOW1jbUZ0WlhONWJtTW5PMXh1WEc1amJHRnpjeUJEYjIxd2IzTnBkR1ZCWTNScGIyNGdaWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeWtnZTF4dUlDQWdJR052Ym5OMElIc2dZV04wYVc5dWN5d2dMaTR1Y21WdFlXbHVhVzVuVUhKdmNITWdmU0E5SUhCeWIzQnpPMXh1SUNBZ0lITjFjR1Z5S0hKbGJXRnBibWx1WjFCeWIzQnpLVHRjYmlBZ0lDQjBhR2x6TG1OMWNuSmxiblFnUFNCN2ZUdGNiaUFnSUNCMGFHbHpMbUZqZEdsdmJrdGxlWE1nUFNCYlhUdGNiaUFnSUNCMGFHbHpMbUZrWkVGamRHbHZibk1vY0hKdmNITXVZV04wYVc5dWN5azdYRzRnSUgxY2JseHVJQ0JoWkdSQlkzUnBiMjV6S0dGamRHbHZibk1wSUh0Y2JpQWdJQ0JtYjNJZ0tHTnZibk4wSUd0bGVTQnBiaUJoWTNScGIyNXpLU0I3WEc0Z0lDQWdJQ0JwWmlBb2RHaHBjeTVoWTNScGIyNUxaWGx6TG1sdVpHVjRUMllvYTJWNUtTQTlQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aFkzUnBiMjVMWlhsekxuQjFjMmdvYTJWNUtUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdkR2hwYzF0clpYbGRJRDBnWVdOMGFXOXVjMXRyWlhsZE8xeHVYRzRnSUNBZ0lDQmpiMjV6ZENCdmJsVndaR0YwWlNBOUlDaDJLU0E5UGlCMGFHbHpMbU4xY25KbGJuUmJhMlY1WFNBOUlIWTdPMXh1WEc0Z0lDQWdJQ0F2THlCSmJXMWxaR2xoZEdWc2VTQjFjR1JoZEdVZ2QybDBhQ0IwYUdVZ1kzVnljbVZ1ZENCaFkzUnBiMjRnYzNSaGRHVmNiaUFnSUNBZ0lHOXVWWEJrWVhSbEtIUm9hWE5iYTJWNVhTNW5aWFFvS1NrN1hHNWNiaUFnSUNBZ0lIUm9hWE5iYTJWNVhWeHVJQ0FnSUNBZ0lDQXVjMlYwVUhKdmNITW9lMXh1SUNBZ0lDQWdJQ0FnSUY5dmJsTjBiM0E2SUNncElEMCtJSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3kwdFhHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQWdJQzVoWkdSTWFYTjBaVzVsY2lodmJsVndaR0YwWlNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTWdQU0IwYUdsekxtRmpkR2x2Ymt0bGVYTXViR1Z1WjNSb08xeHVJQ0FnSUhSb2FYTXVZV04wYVc5dVMyVjVjeTVtYjNKRllXTm9LQ2hyWlhrcElEMCtJSFJvYVhOYmEyVjVYUzV6ZEdGeWRDZ3BLVHRjYmlBZ2ZWeHVYRzRnSUc5dVUzUnZjQ2dwSUh0Y2JpQWdJQ0IwYUdsekxtRmpkR2x2Ymt0bGVYTXVabTl5UldGamFDZ29hMlY1S1NBOVBpQjBhR2x6VzJ0bGVWMHVjM1J2Y0NncEtUdGNiaUFnZlZ4dVhHNGdJR2RsZEZabGJHOWphWFI1S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSFpsYkc5amFYUjVJRDBnZTMwN1hHNGdJQ0FnZEdocGN5NWhZM1JwYjI1TFpYbHpMbVp2Y2tWaFkyZ29LR3RsZVNrZ1BUNGdkbVZzYjJOcGRIbGJhMlY1WFNBOUlIUm9hWE5iYTJWNVhTNW5aWFJXWld4dlkybDBlU2dwS1R0Y2JpQWdJQ0J5WlhSMWNtNGdkbVZzYjJOcGRIazdYRzRnSUgxY2JseHVJQ0JwYzBGamRHbHZia052YlhCc1pYUmxLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQW9kR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6SUQwOVBTQXdLVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWVdOMGFXOXVjeXdnY0hKdmNITXBJRDArSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJEYjIxd2IzTnBkR1ZCWTNScGIyNG9lMXh1SUNBZ0lHRmpkR2x2Ym5Nc1hHNGdJQ0FnTGk0dWNISnZjSE5jYmlBZ2ZTazdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY29tcG9zaXRlLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJy4uL2luYy9lYXNpbmcnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ3Jvc3NGYWRlID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENyb3NzRmFkZSwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ3Jvc3NGYWRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDcm9zc0ZhZGUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDcm9zc0ZhZGUucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBkdXJhdGlvbiA9IF9wcm9wcy5kdXJhdGlvbixcbiAgICAgICAgZWFzZSA9IF9wcm9wcy5lYXNlLFxuICAgICAgICBmYWRlciA9IF9wcm9wcy5mYWRlcjtcblxuXG4gICAgdGhpcy5mYWRlciA9IGZhZGVyIHx8ICgwLCBfdHdlZW4yLmRlZmF1bHQpKHtcbiAgICAgIHRvOiAxLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZWFzZTogZWFzZVxuICAgIH0pLnN0YXJ0KCk7XG4gIH07XG5cbiAgQ3Jvc3NGYWRlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBmcm9tID0gX3Byb3BzMi5mcm9tLFxuICAgICAgICB0byA9IF9wcm9wczIudG87XG5cbiAgICB2YXIgYmFsYW5jZSA9IHRoaXMuZmFkZXIuZ2V0KCk7XG4gICAgdmFyIGxhdGVzdEZyb21WYWx1ZSA9IGZyb20uZ2V0KCk7XG4gICAgdmFyIGxhdGVzdFRvVmFsdWUgPSB0by5nZXQoKTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShsYXRlc3RGcm9tVmFsdWUsIGxhdGVzdFRvVmFsdWUsIGJhbGFuY2UpO1xuICB9O1xuXG4gIHJldHVybiBDcm9zc0ZhZGU7XG59KF8yLmRlZmF1bHQpO1xuXG5Dcm9zc0ZhZGUuZGVmYXVsdFByb3BzID0ge1xuICBlYXNlOiBfZWFzaW5nLmxpbmVhclxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ3Jvc3NGYWRlKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnliM056TFdaaFpHVXVhbk1pWFN3aWJtRnRaWE1pT2xzaVEzSnZjM05HWVdSbElpd2liMjVUZEdGeWRDSXNJbkJ5YjNCeklpd2laSFZ5WVhScGIyNGlMQ0psWVhObElpd2labUZrWlhJaUxDSjBieUlzSW5OMFlYSjBJaXdpZFhCa1lYUmxJaXdpWm5KdmJTSXNJbUpoYkdGdVkyVWlMQ0puWlhRaUxDSnNZWFJsYzNSR2NtOXRWbUZzZFdVaUxDSnNZWFJsYzNSVWIxWmhiSFZsSWl3aVpHVm1ZWFZzZEZCeWIzQnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3p0QlFVTkJPenM3T3pzN096czdPMGxCUlUxQkxGTTdPenM3T3pzN096dHpRa0ZMU2tNc1R5eHpRa0ZCVlR0QlFVRkJMR2xDUVVNd1FpeExRVUZMUXl4TFFVUXZRanRCUVVGQkxGRkJRMEZETEZGQlJFRXNWVUZEUVVFc1VVRkVRVHRCUVVGQkxGRkJRMVZETEVsQlJGWXNWVUZEVlVFc1NVRkVWanRCUVVGQkxGRkJRMmRDUXl4TFFVUm9RaXhWUVVOblFrRXNTMEZFYUVJN096dEJRVWRTTEZOQlFVdEJMRXRCUVV3c1IwRkJZVUVzVTBGQlV5eHhRa0ZCVFR0QlFVTXhRa01zVlVGQlNTeERRVVJ6UWp0QlFVVXhRa2dzZDBKQlJqQkNPMEZCUnpGQ1F6dEJRVWd3UWl4TFFVRk9MRVZCU1c1Q1J5eExRVXB0UWl4RlFVRjBRanRCUVV0RUxFYzdPM05DUVVWRVF5eE5MSEZDUVVGVE8wRkJRVUVzYTBKQlEyTXNTMEZCUzA0c1MwRkVia0k3UVVGQlFTeFJRVU5EVHl4SlFVUkVMRmRCUTBOQkxFbEJSRVE3UVVGQlFTeFJRVU5QU0N4RlFVUlFMRmRCUTA5QkxFVkJSRkE3TzBGQlJWQXNVVUZCVFVrc1ZVRkJWU3hMUVVGTFRDeExRVUZNTEVOQlFWZE5MRWRCUVZnc1JVRkJhRUk3UVVGRFFTeFJRVUZOUXl4clFrRkJhMEpJTEV0QlFVdEZMRWRCUVV3c1JVRkJlRUk3UVVGRFFTeFJRVUZOUlN4blFrRkJaMEpRTEVkQlFVZExMRWRCUVVnc1JVRkJkRUk3UVVGRFFTeFhRVUZQTEdkRFFVRnhRa01zWlVGQmNrSXNSVUZCYzBORExHRkJRWFJETEVWQlFYRkVTQ3hQUVVGeVJDeERRVUZRTzBGQlEwUXNSenM3T3pzN1FVRnlRa2RXTEZNc1EwRkRSMk1zV1N4SFFVRmxPMEZCUTNCQ1ZqdEJRVVJ2UWl4RE96dHJRa0YxUWxRc1ZVRkJRMFlzUzBGQlJEdEJRVUZCTEZOQlFWY3NTVUZCU1VZc1UwRkJTaXhEUVVGalJTeExRVUZrTEVOQlFWZzdRVUZCUVN4RElpd2labWxzWlNJNkltTnliM056TFdaaFpHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2Snp0Y2JtbHRjRzl5ZENCMGQyVmxiaUJtY205dElDY3VMM1IzWldWdUp6dGNibWx0Y0c5eWRDQjdJR3hwYm1WaGNpQjlJR1p5YjIwZ0p5NHVMMmx1WXk5bFlYTnBibWNuTzF4dWFXMXdiM0owSUhzZ1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JtTnNZWE56SUVOeWIzTnpSbUZrWlNCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lITjBZWFJwWXlCa1pXWmhkV3gwVUhKdmNITWdQU0I3WEc0Z0lDQWdaV0Z6WlRvZ2JHbHVaV0Z5WEc0Z0lIMWNibHh1SUNCdmJsTjBZWEowS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWkhWeVlYUnBiMjRzSUdWaGMyVXNJR1poWkdWeUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnZEdocGN5NW1ZV1JsY2lBOUlHWmhaR1Z5SUh4OElIUjNaV1Z1S0h0Y2JpQWdJQ0FnSUhSdk9pQXhMRnh1SUNBZ0lDQWdaSFZ5WVhScGIyNHNYRzRnSUNBZ0lDQmxZWE5sWEc0Z0lDQWdmU2t1YzNSaGNuUW9LVHRjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1p5YjIwc0lIUnZJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJR0poYkdGdVkyVWdQU0IwYUdsekxtWmhaR1Z5TG1kbGRDZ3BPMXh1SUNBZ0lHTnZibk4wSUd4aGRHVnpkRVp5YjIxV1lXeDFaU0E5SUdaeWIyMHVaMlYwS0NrN1hHNGdJQ0FnWTI5dWMzUWdiR0YwWlhOMFZHOVdZV3gxWlNBOUlIUnZMbWRsZENncE8xeHVJQ0FnSUhKbGRIVnliaUJuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3loc1lYUmxjM1JHY205dFZtRnNkV1VzSUd4aGRHVnpkRlJ2Vm1Gc2RXVXNJR0poYkdGdVkyVXBPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2h3Y205d2N5a2dQVDRnYm1WM0lFTnliM056Um1Ga1pTaHdjbTl3Y3lrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGR1cmF0aW9uLCBvbkNvbXBsZXRlKSB7XG4gIHJldHVybiAoMCwgX3R3ZWVuMi5kZWZhdWx0KSh7IGR1cmF0aW9uOiBkdXJhdGlvbiwgb25Db21wbGV0ZTogb25Db21wbGV0ZSB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyUmxiR0Y1TG1weklsMHNJbTVoYldWeklqcGJJbVIxY21GMGFXOXVJaXdpYjI1RGIyMXdiR1YwWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3T3pzN2EwSkJSV1VzVlVGQlEwRXNVVUZCUkN4RlFVRlhReXhWUVVGWU8wRkJRVUVzVTBGQk1FSXNjVUpCUVUwc1JVRkJSVVFzYTBKQlFVWXNSVUZCV1VNc2MwSkJRVm9zUlVGQlRpeERRVUV4UWp0QlFVRkJMRU1pTENKbWFXeGxJam9pWkdWc1lYa3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RIZGxaVzRnWm5KdmJTQW5MaTkwZDJWbGJpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hrZFhKaGRHbHZiaXdnYjI1RGIyMXdiR1YwWlNrZ1BUNGdkSGRsWlc0b2V5QmtkWEpoZEdsdmJpd2diMjVEYjIxd2JHVjBaU0I5S1R0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2RlbGF5LmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQYXJhbGxlbCA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQYXJhbGxlbCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGFyYWxsZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhcmFsbGVsKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLnByb3BzLmFjdGlvbnM7XG5cbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSBhY3Rpb25zLmxlbmd0aDtcblxuICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICBhY3Rpb24uc2V0UHJvcHMoe1xuICAgICAgICBfb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLnN0b3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUuYWRkQWN0aW9uID0gZnVuY3Rpb24gYWRkQWN0aW9uKGFjdGlvbikge1xuICAgIHZhciBhY3Rpb25zID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuXG5cbiAgICBpZiAoYWN0aW9ucy5pbmRleE9mKGFjdGlvbikgPT09IC0xKSB7XG4gICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDA7XG4gIH07XG5cbiAgcmV0dXJuIFBhcmFsbGVsO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGFyYWxsZWwoX2V4dGVuZHMoeyBhY3Rpb25zOiBhY3Rpb25zIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0JoY21Gc2JHVnNMbXB6SWwwc0ltNWhiV1Z6SWpwYklsQmhjbUZzYkdWc0lpd2liMjVUZEdGeWRDSXNJbUZqZEdsdmJuTWlMQ0p3Y205d2N5SXNJbTUxYlVGamRHbDJaVUZqZEdsdmJuTWlMQ0pzWlc1bmRHZ2lMQ0ptYjNKRllXTm9JaXdpWVdOMGFXOXVJaXdpYzJWMFVISnZjSE1pTENKZmIyNVRkRzl3SWl3aWMzUmhjblFpTENKdmJsTjBiM0FpTENKemRHOXdJaXdpWVdSa1FXTjBhVzl1SWl3aWFXNWtaWGhQWmlJc0luQjFjMmdpTENKcGMwRmpkR2x2YmtOdmJYQnNaWFJsSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3pzN096czdPenM3TzBsQlJVMUJMRkU3T3pzN096czdPenR4UWtGRFNrTXNUeXh6UWtGQlZUdEJRVUZCT3p0QlFVRkJMRkZCUTBGRExFOUJSRUVzUjBGRFdTeExRVUZMUXl4TFFVUnFRaXhEUVVOQlJDeFBRVVJCT3p0QlFVVlNMRk5CUVV0RkxHZENRVUZNTEVkQlFYZENSaXhSUVVGUlJ5eE5RVUZvUXpzN1FVRkZRVWdzV1VGQlVVa3NUMEZCVWl4RFFVRm5RaXhWUVVGRFF5eE5RVUZFTEVWQlFWazdRVUZETVVKQkxHRkJRVTlETEZGQlFWQXNRMEZCWjBJN1FVRkRaRU1zYVVKQlFWTTdRVUZCUVN4cFFrRkJUU3hQUVVGTFRDeG5Ra0ZCVEN4RlFVRk9PMEZCUVVFN1FVRkVTeXhQUVVGb1FpeEZRVVZIVFN4TFFVWklPMEZCUjBRc1MwRktSRHRCUVV0RUxFYzdPM0ZDUVVWRVF5eE5MSEZDUVVGVE8wRkJRMUFzVTBGQlMxSXNTMEZCVEN4RFFVRlhSQ3hQUVVGWUxFTkJRVzFDU1N4UFFVRnVRaXhEUVVFeVFpeFZRVUZEUXl4TlFVRkVPMEZCUVVFc1lVRkJXVUVzVDBGQlQwc3NTVUZCVUN4RlFVRmFPMEZCUVVFc1MwRkJNMEk3UVVGRFJDeEhPenR4UWtGRlJFTXNVeXh6UWtGQlZVNHNUU3hGUVVGUk8wRkJRVUVzVVVGRFVrd3NUMEZFVVN4SFFVTkpMRXRCUVV0RExFdEJSRlFzUTBGRFVrUXNUMEZFVVRzN08wRkJSMmhDTEZGQlFVbEJMRkZCUVZGWkxFOUJRVklzUTBGQlowSlFMRTFCUVdoQ0xFMUJRVFJDTEVOQlFVTXNRMEZCYWtNc1JVRkJiME03UVVGRGJFTk1MR05CUVZGaExFbEJRVklzUTBGQllWSXNUVUZCWWp0QlFVTkVPMEZCUTBZc1J6czdjVUpCUlVSVExHZENMQ3RDUVVGdFFqdEJRVU5xUWl4WFFVRlJMRXRCUVV0YUxHZENRVUZNTEV0QlFUQkNMRU5CUVd4RE8wRkJRMFFzUnpzN096czdhMEpCUjFrc1ZVRkJRMFlzVDBGQlJDeEZRVUZWUXl4TFFVRldPMEZCUVVFc1UwRkJiMElzU1VGQlNVZ3NVVUZCU2l4WlFVRmxSU3huUWtGQlppeEpRVUV5UWtNc1MwRkJNMElzUlVGQmNFSTdRVUZCUVN4RElpd2labWxzWlNJNkluQmhjbUZzYkdWc0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMeWM3WEc1Y2JtTnNZWE56SUZCaGNtRnNiR1ZzSUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdGamRHbHZibk1nZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpJRDBnWVdOMGFXOXVjeTVzWlc1bmRHZzdYRzVjYmlBZ0lDQmhZM1JwYjI1ekxtWnZja1ZoWTJnb0tHRmpkR2x2YmlrZ1BUNGdlMXh1SUNBZ0lDQWdZV04wYVc5dUxuTmxkRkJ5YjNCektIdGNiaUFnSUNBZ0lDQWdYMjl1VTNSdmNEb2dLQ2tnUFQ0Z2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpMUzFjYmlBZ0lDQWdJSDBwTG5OMFlYSjBLQ2s3WEc0Z0lDQWdmU2s3WEc0Z0lIMWNibHh1SUNCdmJsTjBiM0FvS1NCN1hHNGdJQ0FnZEdocGN5NXdjbTl3Y3k1aFkzUnBiMjV6TG1admNrVmhZMmdvS0dGamRHbHZiaWtnUFQ0Z1lXTjBhVzl1TG5OMGIzQW9LU2s3WEc0Z0lIMWNibHh1SUNCaFpHUkJZM1JwYjI0b1lXTjBhVzl1S1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJoWTNScGIyNXpJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2FXWWdLR0ZqZEdsdmJuTXVhVzVrWlhoUFppaGhZM1JwYjI0cElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ1lXTjBhVzl1Y3k1d2RYTm9LR0ZqZEdsdmJpazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdhWE5CWTNScGIyNURiMjF3YkdWMFpTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z0tIUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeUE5UFQwZ01DazdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR0ZqZEdsdmJuTXNJSEJ5YjNCektTQTlQaUJ1WlhjZ1VHRnlZV3hzWld3b2V5QmhZM1JwYjI1ekxDQXVMaTV3Y205d2N5QjlLVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGFyYWxsZWwuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBoeXNpY3MgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoUGh5c2ljcywgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGh5c2ljcyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFBoeXNpY3MucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYXV0b1N0b3BTcGVlZCA9IF9wcm9wcy5hdXRvU3RvcFNwZWVkLFxuICAgICAgICBhY2NlbGVyYXRpb24gPSBfcHJvcHMuYWNjZWxlcmF0aW9uLFxuICAgICAgICBmcmljdGlvbiA9IF9wcm9wcy5mcmljdGlvbixcbiAgICAgICAgdmVsb2NpdHkgPSBfcHJvcHMudmVsb2NpdHksXG4gICAgICAgIHNwcmluZyA9IF9wcm9wcy5zcHJpbmcsXG4gICAgICAgIHRvID0gX3Byb3BzLnRvO1xuXG4gICAgdmFyIG5ld1ZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgdmFyIGVsYXBzZWQgPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCk7XG5cbiAgICAvLyBBcHBseSBhY2NlbGVyYXRpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoYWNjZWxlcmF0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkoYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBmcmljdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChmcmljdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKj0gTWF0aC5wb3coMSAtIGZyaWN0aW9uLCBlbGFwc2VkIC8gMTAwKTtcbiAgICB9XG5cbiAgICBpZiAoc3ByaW5nICYmIHRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBkaXN0YW5jZVRvVGFyZ2V0ID0gdG8gLSB0aGlzLmN1cnJlbnQ7XG4gICAgICBuZXdWZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHNwcmluZywgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdmVsb2NpdHlcbiAgICB0aGlzLmN1cnJlbnQgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKG5ld1ZlbG9jaXR5LCBlbGFwc2VkKTtcbiAgICB0aGlzLnByb3BzLnZlbG9jaXR5ID0gbmV3VmVsb2NpdHk7XG5cbiAgICAvLyBDaGVjayBpZiBzaW11bGF0aW9uIGlzIGNvbXBsZXRlXG4gICAgLy8gV2UgZG8gdGhpcyBoZXJlIGluc3RlYWQgb2YgYGlzQWN0aW9uQ29tcGxldGVgIGFzIGl0IGFsbG93cyB1c1xuICAgIC8vIHRvIGNsYW1wIGR1cmluZyB0aGlzIHVwZGF0ZVxuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGF1dG9TdG9wU3BlZWQgIT09IGZhbHNlICYmICghbmV3VmVsb2NpdHkgfHwgTWF0aC5hYnMobmV3VmVsb2NpdHkpIDw9IGF1dG9TdG9wU3BlZWQpO1xuXG4gICAgaWYgKHRoaXMuaXNDb21wbGV0ZSAmJiBzcHJpbmcpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRvO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH07XG5cbiAgUGh5c2ljcy5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgfTtcblxuICByZXR1cm4gUGh5c2ljcztcbn0oXzIuZGVmYXVsdCk7XG5cblBoeXNpY3MuZGVmYXVsdFByb3BzID0ge1xuICBhY2NlbGVyYXRpb246IDAsXG4gIGZyaWN0aW9uOiAwLFxuICB2ZWxvY2l0eTogMCxcbiAgYXV0b1N0b3BTcGVlZDogMC4wMDFcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IFBoeXNpY3MocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sc2lVR2g1YzJsamN5SXNJblZ3WkdGMFpTSXNJbkJ5YjNCeklpd2lZWFYwYjFOMGIzQlRjR1ZsWkNJc0ltRmpZMlZzWlhKaGRHbHZiaUlzSW1aeWFXTjBhVzl1SWl3aWRtVnNiMk5wZEhraUxDSnpjSEpwYm1jaUxDSjBieUlzSW01bGQxWmxiRzlqYVhSNUlpd2laV3hoY0hObFpDSXNJblZ1WkdWbWFXNWxaQ0lzSW1ScGMzUmhibU5sVkc5VVlYSm5aWFFpTENKamRYSnlaVzUwSWl3aWFYTkRiMjF3YkdWMFpTSXNJazFoZEdnaUxDSmhZbk1pTENKcGMwRmpkR2x2YmtOdmJYQnNaWFJsSWl3aVpHVm1ZWFZzZEZCeWIzQnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN1FVRkRRVHM3T3pzN096czdPenRKUVVWTlFTeFBPenM3T3pzN096czdiMEpCVVVwRExFMHNjVUpCUVZNN1FVRkJRU3hwUWtGRGFVVXNTMEZCUzBNc1MwRkVkRVU3UVVGQlFTeFJRVU5EUXl4aFFVUkVMRlZCUTBOQkxHRkJSRVE3UVVGQlFTeFJRVU5uUWtNc1dVRkVhRUlzVlVGRFowSkJMRmxCUkdoQ08wRkJRVUVzVVVGRE9FSkRMRkZCUkRsQ0xGVkJRemhDUVN4UlFVUTVRanRCUVVGQkxGRkJRM2REUXl4UlFVUjRReXhWUVVOM1EwRXNVVUZFZUVNN1FVRkJRU3hSUVVOclJFTXNUVUZFYkVRc1ZVRkRhMFJCTEUxQlJHeEVPMEZCUVVFc1VVRkRNRVJETEVWQlJERkVMRlZCUXpCRVFTeEZRVVF4UkRzN1FVRkZVQ3hSUVVGSlF5eGpRVUZqU0N4UlFVRnNRanRCUVVOQkxGRkJRVTFKTEZWQlFWVXNiME5CUVdoQ096dEJRVVZCTzBGQlEwRXNVVUZCU1U0c1dVRkJTaXhGUVVGclFqdEJRVU5vUWtzc2NVSkJRV1VzZVVKQlFXTk1MRmxCUVdRc1JVRkJORUpOTEU5QlFUVkNMRU5CUVdZN1FVRkRSRHM3UVVGRlJEdEJRVU5CTEZGQlFVbE1MRkZCUVVvc1JVRkJZenRCUVVOYVNTdzRRa0ZCWjBJc1NVRkJTVW9zVVVGQmNFSXNSVUZCYTBOTExGVkJRVlVzUjBGQk5VTTdRVUZEUkRzN1FVRkZSQ3hSUVVGSlNDeFZRVUZWUXl4UFFVRlBSeXhUUVVGeVFpeEZRVUZuUXp0QlFVTTVRaXhWUVVGTlF5eHRRa0ZCYlVKS0xFdEJRVXNzUzBGQlMwc3NUMEZCYmtNN1FVRkRRVW9zY1VKQlFXVkhMRzFDUVVGdFFpeDVRa0ZCWTB3c1RVRkJaQ3hGUVVGelFrY3NUMEZCZEVJc1EwRkJiRU03UVVGRFJEczdRVUZGUkR0QlFVTkJMRk5CUVV0SExFOUJRVXdzU1VGQlowSXNlVUpCUVdOS0xGZEJRV1FzUlVGQk1rSkRMRTlCUVROQ0xFTkJRV2hDTzBGQlEwRXNVMEZCUzFJc1MwRkJUQ3hEUVVGWFNTeFJRVUZZTEVkQlFYTkNSeXhYUVVGMFFqczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGTFN5eFZRVUZNTEVkQlFXMUNXQ3hyUWtGQmEwSXNTMEZCYkVJc1MwRkJORUlzUTBGQlEwMHNWMEZCUkN4SlFVRm5RazBzUzBGQlMwTXNSMEZCVEN4RFFVRlRVQ3hYUVVGVUxFdEJRWGxDVGl4aFFVRnlSU3hEUVVGdVFqczdRVUZGUVN4UlFVRkpMRXRCUVV0WExGVkJRVXdzU1VGQmJVSlFMRTFCUVhaQ0xFVkJRU3RDTzBGQlF6ZENMRmRCUVV0TkxFOUJRVXdzUjBGQlpVd3NSVUZCWmp0QlFVTkVPenRCUVVWRUxGZEJRVThzUzBGQlMwc3NUMEZCV2p0QlFVTkVMRWM3TzI5Q1FVVkVTU3huUWl3clFrRkJiVUk3UVVGRGFrSXNWMEZCVHl4TFFVRkxTQ3hWUVVGYU8wRkJRMFFzUnpzN096czdRVUU1UTBka0xFOHNRMEZEUjJ0Q0xGa3NSMEZCWlR0QlFVTndRbVFzWjBKQlFXTXNRMEZFVFR0QlFVVndRa01zV1VGQlZTeERRVVpWTzBGQlIzQkNReXhaUVVGVkxFTkJTRlU3UVVGSmNFSklMR2xDUVVGbE8wRkJTa3NzUXpzN2EwSkJaMFJVTEZWQlFVTkVMRXRCUVVRN1FVRkJRU3hUUVVGWExFbEJRVWxHTEU5QlFVb3NRMEZCV1VVc1MwRkJXaXhEUVVGWU8wRkJRVUVzUXlJc0ltWnBiR1VpT2lKd2FIbHphV056TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVwYlhCdmNuUWdleUIwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VnZlNCbWNtOXRJQ2N1TGk5bWNtRnRaWE41Ym1Nbk8xeHVhVzF3YjNKMElIc2djM0JsWldSUVpYSkdjbUZ0WlNCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibHh1WTJ4aGMzTWdVR2g1YzJsamN5QmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJSE4wWVhScFl5QmtaV1poZFd4MFVISnZjSE1nUFNCN1hHNGdJQ0FnWVdOalpXeGxjbUYwYVc5dU9pQXdMRnh1SUNBZ0lHWnlhV04wYVc5dU9pQXdMRnh1SUNBZ0lIWmxiRzlqYVhSNU9pQXdMRnh1SUNBZ0lHRjFkRzlUZEc5d1UzQmxaV1E2SURBdU1EQXhYRzRnSUgxY2JseHVJQ0IxY0dSaGRHVW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmhkWFJ2VTNSdmNGTndaV1ZrTENCaFkyTmxiR1Z5WVhScGIyNHNJR1p5YVdOMGFXOXVMQ0IyWld4dlkybDBlU3dnYzNCeWFXNW5MQ0IwYnlCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQnNaWFFnYm1WM1ZtVnNiMk5wZEhrZ1BTQjJaV3h2WTJsMGVUdGNiaUFnSUNCamIyNXpkQ0JsYkdGd2MyVmtJRDBnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsS0NrN1hHNWNiaUFnSUNBdkx5QkJjSEJzZVNCaFkyTmxiR1Z5WVhScGIyNGdkRzhnZG1Wc2IyTnBkSGxjYmlBZ0lDQnBaaUFvWVdOalpXeGxjbUYwYVc5dUtTQjdYRzRnSUNBZ0lDQnVaWGRXWld4dlkybDBlU0FyUFNCemNHVmxaRkJsY2taeVlXMWxLR0ZqWTJWc1pYSmhkR2x2Yml3Z1pXeGhjSE5sWkNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1FYQndiSGtnWm5KcFkzUnBiMjRnZEc4Z2RtVnNiMk5wZEhsY2JpQWdJQ0JwWmlBb1puSnBZM1JwYjI0cElIdGNiaUFnSUNBZ0lHNWxkMVpsYkc5amFYUjVJQ285SUNneElDMGdabkpwWTNScGIyNHBJQ29xSUNobGJHRndjMlZrSUM4Z01UQXdLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYzNCeWFXNW5JQ1ltSUhSdklDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR1JwYzNSaGJtTmxWRzlVWVhKblpYUWdQU0IwYnlBdElIUm9hWE11WTNWeWNtVnVkRHRjYmlBZ0lDQWdJRzVsZDFabGJHOWphWFI1SUNzOUlHUnBjM1JoYm1ObFZHOVVZWEpuWlhRZ0tpQnpjR1ZsWkZCbGNrWnlZVzFsS0hOd2NtbHVaeXdnWld4aGNITmxaQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnUVhCd2JIa2dkbVZzYjJOcGRIbGNiaUFnSUNCMGFHbHpMbU4xY25KbGJuUWdLejBnYzNCbFpXUlFaWEpHY21GdFpTaHVaWGRXWld4dlkybDBlU3dnWld4aGNITmxaQ2s3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTUyWld4dlkybDBlU0E5SUc1bGQxWmxiRzlqYVhSNU8xeHVYRzRnSUNBZ0x5OGdRMmhsWTJzZ2FXWWdjMmx0ZFd4aGRHbHZiaUJwY3lCamIyMXdiR1YwWlZ4dUlDQWdJQzh2SUZkbElHUnZJSFJvYVhNZ2FHVnlaU0JwYm5OMFpXRmtJRzltSUdCcGMwRmpkR2x2YmtOdmJYQnNaWFJsWUNCaGN5QnBkQ0JoYkd4dmQzTWdkWE5jYmlBZ0lDQXZMeUIwYnlCamJHRnRjQ0JrZFhKcGJtY2dkR2hwY3lCMWNHUmhkR1ZjYmlBZ0lDQjBhR2x6TG1selEyOXRjR3hsZEdVZ1BTQW9ZWFYwYjFOMGIzQlRjR1ZsWkNBaFBUMGdabUZzYzJVZ0ppWWdLQ0Z1WlhkV1pXeHZZMmwwZVNCOGZDQk5ZWFJvTG1GaWN5aHVaWGRXWld4dlkybDBlU2tnUEQwZ1lYVjBiMU4wYjNCVGNHVmxaQ2twTzF4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YVhORGIyMXdiR1YwWlNBbUppQnpjSEpwYm1jcElIdGNiaUFnSUNBZ0lIUm9hWE11WTNWeWNtVnVkQ0E5SUhSdk8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtTjFjbkpsYm5RN1hHNGdJSDFjYmx4dUlDQnBjMEZqZEdsdmJrTnZiWEJzWlhSbEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbWx6UTI5dGNHeGxkR1U3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hCeWIzQnpLU0E5UGlCdVpYY2dVR2g1YzJsamN5aHdjbTl3Y3lrN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGh5c2ljcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdmFsdWUgPSByZXF1aXJlKCcuL3ZhbHVlJyk7XG5cbnZhciBfdmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWUpO1xuXG52YXIgX2NvbXBvc2l0ZSA9IHJlcXVpcmUoJy4vY29tcG9zaXRlJyk7XG5cbnZhciBfY29tcG9zaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2l0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gY3JlYXRlUG9pbnRlcihfcmVmMiwgX3JlZikge1xuICB2YXIgeCA9IF9yZWYyLngsXG4gICAgICB5ID0gX3JlZjIueTtcblxuICB2YXIgZXZlbnRUb1BvaW50cyA9IF9yZWYuZXZlbnRUb1BvaW50cyxcbiAgICAgIG1vdmVFdmVudCA9IF9yZWYubW92ZUV2ZW50LFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydldmVudFRvUG9pbnRzJywgJ21vdmVFdmVudCddKTtcblxuICB2YXIgcG9pbnRlciA9ICgwLCBfY29tcG9zaXRlMi5kZWZhdWx0KSh7XG4gICAgeDogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeCksXG4gICAgeTogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeSlcbiAgfSwgX2V4dGVuZHMoe1xuICAgIHByZXZlbnREZWZhdWx0OiB0cnVlXG4gIH0sIHByb3BzKSk7XG5cbiAgdmFyIHVwZGF0ZVBvaW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChwcm9wcy5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciBwb2ludHMgPSBldmVudFRvUG9pbnRzKGUpO1xuICAgIHBvaW50ZXIueC5zZXQocG9pbnRzLngpO1xuICAgIHBvaW50ZXIueS5zZXQocG9pbnRzLnkpO1xuICB9O1xuXG4gIHBvaW50ZXIuc2V0UHJvcHMoe1xuICAgIF9vblN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVQb2ludGVyKTtcbiAgICB9LFxuICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBvaW50ZXI7XG59XG5cbnZhciBtb3VzZUV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiB7XG4gICAgeDogZS5wYWdlWCxcbiAgICB5OiBlLnBhZ2VZXG4gIH07XG59O1xuXG52YXIgdG91Y2hFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgdmFyIGNoYW5nZWRUb3VjaGVzID0gX3JlZjMuY2hhbmdlZFRvdWNoZXM7XG4gIHJldHVybiB7XG4gICAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG4gIH07XG59O1xuXG52YXIgZ2V0TmF0aXZlRXZlbnQgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4gZS5vcmlnaW5hbEV2ZW50IHx8IGUubmF0aXZlRXZlbnQgfHwgZTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlLCBwcm9wcykge1xuICB2YXIgbmF0aXZlRXZlbnQgPSBnZXROYXRpdmVFdmVudChlKTtcbiAgcmV0dXJuIG5hdGl2ZUV2ZW50LnRvdWNoZXMgPyBjcmVhdGVQb2ludGVyKHRvdWNoRXZlbnRUb1BvaW50KGUpLCBfZXh0ZW5kcyh7XG4gICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICBldmVudFRvUG9pbnRzOiB0b3VjaEV2ZW50VG9Qb2ludFxuICB9LCBwcm9wcykpIDogY3JlYXRlUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwgX2V4dGVuZHMoe1xuICAgIG1vdmVFdmVudDogJ21vdXNlbW92ZScsXG4gICAgZXZlbnRUb1BvaW50czogbW91c2VFdmVudFRvUG9pbnRcbiAgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQnZhVzUwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHNpWTNKbFlYUmxVRzlwYm5SbGNpSXNJbmdpTENKNUlpd2laWFpsYm5SVWIxQnZhVzUwY3lJc0ltMXZkbVZGZG1WdWRDSXNJbkJ5YjNCeklpd2ljRzlwYm5SbGNpSXNJbkJ5WlhabGJuUkVaV1poZFd4MElpd2lkWEJrWVhSbFVHOXBiblJsY2lJc0ltVWlMQ0p3YjJsdWRITWlMQ0p6WlhRaUxDSnpaWFJRY205d2N5SXNJbDl2YmxOMFlYSjBJaXdpWkc5amRXMWxiblFpTENKa2IyTjFiV1Z1ZEVWc1pXMWxiblFpTENKaFpHUkZkbVZ1ZEV4cGMzUmxibVZ5SWl3aVgyOXVVM1J2Y0NJc0luSmxiVzkyWlVWMlpXNTBUR2x6ZEdWdVpYSWlMQ0p0YjNWelpVVjJaVzUwVkc5UWIybHVkQ0lzSW5CaFoyVllJaXdpY0dGblpWa2lMQ0owYjNWamFFVjJaVzUwVkc5UWIybHVkQ0lzSW1Ob1lXNW5aV1JVYjNWamFHVnpJaXdpWTJ4cFpXNTBXQ0lzSW1Oc2FXVnVkRmtpTENKblpYUk9ZWFJwZG1WRmRtVnVkQ0lzSW05eWFXZHBibUZzUlhabGJuUWlMQ0p1WVhScGRtVkZkbVZ1ZENJc0luUnZkV05vWlhNaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN096czdPMEZCUlVFc1UwRkJVMEVzWVVGQlZDeGpRVUY1UlR0QlFVRkJMRTFCUVdoRVF5eERRVUZuUkN4VFFVRm9SRUVzUTBGQlowUTdRVUZCUVN4TlFVRTNRME1zUTBGQk5rTXNVMEZCTjBOQkxFTkJRVFpET3p0QlFVRkJMRTFCUVhSRFF5eGhRVUZ6UXl4UlFVRjBRMEVzWVVGQmMwTTdRVUZCUVN4TlFVRjJRa01zVTBGQmRVSXNVVUZCZGtKQkxGTkJRWFZDTzBGQlFVRXNUVUZCVkVNc1MwRkJVenM3UVVGRGRrVXNUVUZCVFVNc1ZVRkJWU3g1UWtGQlZUdEJRVU40UWt3c1QwRkJSeXh4UWtGQlRVRXNRMEZCVGl4RFFVUnhRanRCUVVWNFFrTXNUMEZCUnl4eFFrRkJUVUVzUTBGQlRqdEJRVVp4UWl4SFFVRldPMEZCU1dSTExHOUNRVUZuUWp0QlFVcEdMRXRCUzFoR0xFdEJURmNzUlVGQmFFSTdPMEZCVVVFc1RVRkJUVWNzWjBKQlFXZENMRlZCUVVORExFTkJRVVFzUlVGQlR6dEJRVU16UWl4UlFVRkpTaXhOUVVGTlJTeGpRVUZXTEVWQlFUQkNPMEZCUTNoQ1JTeFJRVUZGUml4alFVRkdPMEZCUTBRN08wRkJSVVFzVVVGQlRVY3NVMEZCVTFBc1kwRkJZMDBzUTBGQlpDeERRVUZtTzBGQlEwRklMRmxCUVZGTUxFTkJRVklzUTBGQlZWVXNSMEZCVml4RFFVRmpSQ3hQUVVGUFZDeERRVUZ5UWp0QlFVTkJTeXhaUVVGUlNpeERRVUZTTEVOQlFWVlRMRWRCUVZZc1EwRkJZMFFzVDBGQlQxSXNRMEZCY2tJN1FVRkRSQ3hIUVZKRU96dEJRVlZCU1N4VlFVRlJUU3hSUVVGU0xFTkJRV2xDTzBGQlEyWkRMR05CUVZVN1FVRkJRU3hoUVVGTlF5eFRRVUZUUXl4bFFVRlVMRU5CUVhsQ1F5eG5Ra0ZCZWtJc1EwRkJNRU5hTEZOQlFURkRMRVZCUVhGRVNTeGhRVUZ5UkN4RFFVRk9PMEZCUVVFc1MwRkVTenRCUVVWbVV5eGhRVUZUTzBGQlFVRXNZVUZCVFVnc1UwRkJVME1zWlVGQlZDeERRVUY1UWtjc2JVSkJRWHBDTEVOQlFUWkRaQ3hUUVVFM1F5eEZRVUYzUkVrc1lVRkJlRVFzUTBGQlRqdEJRVUZCTzBGQlJrMHNSMEZCYWtJN08wRkJTMEVzVTBGQlQwWXNUMEZCVUR0QlFVTkVPenRCUVVWRUxFbEJRVTFoTEc5Q1FVRnZRaXhWUVVGRFZpeERRVUZFTzBGQlFVRXNVMEZCVVR0QlFVTm9RMUlzVDBGQlIxRXNSVUZCUlZjc1MwRkVNa0k3UVVGRmFFTnNRaXhQUVVGSFR5eEZRVUZGV1R0QlFVWXlRaXhIUVVGU08wRkJRVUVzUTBGQk1VSTdPMEZCUzBFc1NVRkJUVU1zYjBKQlFXOUNPMEZCUVVFc1RVRkJSME1zWTBGQlNDeFRRVUZIUVN4alFVRklPMEZCUVVFc1UwRkJlVUk3UVVGRGFrUjBRaXhQUVVGSGMwSXNaVUZCWlN4RFFVRm1MRVZCUVd0Q1F5eFBRVVEwUWp0QlFVVnFSSFJDTEU5QlFVZHhRaXhsUVVGbExFTkJRV1lzUlVGQmEwSkZPMEZCUmpSQ0xFZEJRWHBDTzBGQlFVRXNRMEZCTVVJN08wRkJTMEVzU1VGQlRVTXNhVUpCUVdsQ0xGVkJRVU5xUWl4RFFVRkVPMEZCUVVFc1UwRkJUMEVzUlVGQlJXdENMR0ZCUVVZc1NVRkJiVUpzUWl4RlFVRkZiVUlzVjBGQmNrSXNTVUZCYjBOdVFpeERRVUV6UXp0QlFVRkJMRU5CUVhaQ096dHJRa0ZGWlN4VlFVRkRRU3hEUVVGRUxFVkJRVWxLTEV0QlFVb3NSVUZCWXp0QlFVTXpRaXhOUVVGTmRVSXNZMEZCWTBZc1pVRkJaV3BDTEVOQlFXWXNRMEZCY0VJN1FVRkRRU3hUUVVGUmJVSXNXVUZCV1VNc1QwRkJZaXhIUVVOTU4wSXNZMEZCWTNOQ0xHdENRVUZyUW1Jc1EwRkJiRUlzUTBGQlpEdEJRVU5GVEN4bFFVRlhMRmRCUkdJN1FVRkZSVVFzYlVKQlFXVnRRanRCUVVacVFpeExRVWRMYWtJc1MwRklUQ3hGUVVSTExFZEJUVXhNTEdOQlFXTnRRaXhyUWtGQmEwSldMRU5CUVd4Q0xFTkJRV1E3UVVGRFJVd3NaVUZCVnl4WFFVUmlPMEZCUlVWRUxHMUNRVUZsWjBJN1FVRkdha0lzUzBGSFMyUXNTMEZJVEN4RlFVNUdPMEZCVjBRc1F5SXNJbVpwYkdVaU9pSndiMmx1ZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhaaGJIVmxJR1p5YjIwZ0p5NHZkbUZzZFdVbk8xeHVhVzF3YjNKMElHTnZiWEJ2YzJsMFpTQm1jbTl0SUNjdUwyTnZiWEJ2YzJsMFpTYzdYRzVjYm1aMWJtTjBhVzl1SUdOeVpXRjBaVkJ2YVc1MFpYSW9leUI0TENCNUlIMHNJSHNnWlhabGJuUlViMUJ2YVc1MGN5d2diVzkyWlVWMlpXNTBMQ0F1TGk1d2NtOXdjeUI5S1NCN1hHNGdJR052Ym5OMElIQnZhVzUwWlhJZ1BTQmpiMjF3YjNOcGRHVW9lMXh1SUNBZ0lIZzZJSFpoYkhWbEtIZ3BMRnh1SUNBZ0lIazZJSFpoYkhWbEtIa3BYRzRnSUgwc0lIdGNiaUFnSUNCd2NtVjJaVzUwUkdWbVlYVnNkRG9nZEhKMVpTeGNiaUFnSUNBdUxpNXdjbTl3YzF4dUlDQjlLVHRjYmx4dUlDQmpiMjV6ZENCMWNHUmhkR1ZRYjJsdWRHVnlJRDBnS0dVcElEMCtJSHRjYmlBZ0lDQnBaaUFvY0hKdmNITXVjSEpsZG1WdWRFUmxabUYxYkhRcElIdGNiaUFnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCamIyNXpkQ0J3YjJsdWRITWdQU0JsZG1WdWRGUnZVRzlwYm5SektHVXBPMXh1SUNBZ0lIQnZhVzUwWlhJdWVDNXpaWFFvY0c5cGJuUnpMbmdwTzF4dUlDQWdJSEJ2YVc1MFpYSXVlUzV6WlhRb2NHOXBiblJ6TG5rcE8xeHVJQ0I5TzF4dVhHNGdJSEJ2YVc1MFpYSXVjMlYwVUhKdmNITW9lMXh1SUNBZ0lGOXZibE4wWVhKME9pQW9LU0E5UGlCa2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWh0YjNabFJYWmxiblFzSUhWd1pHRjBaVkJ2YVc1MFpYSXBMRnh1SUNBZ0lGOXZibE4wYjNBNklDZ3BJRDArSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0cxdmRtVkZkbVZ1ZEN3Z2RYQmtZWFJsVUc5cGJuUmxjaWxjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUhCdmFXNTBaWEk3WEc1OVhHNWNibU52Ym5OMElHMXZkWE5sUlhabGJuUlViMUJ2YVc1MElEMGdLR1VwSUQwK0lDaDdYRzRnSUhnNklHVXVjR0ZuWlZnc1hHNGdJSGs2SUdVdWNHRm5aVmxjYm4wcE8xeHVYRzVqYjI1emRDQjBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDQTlJQ2g3SUdOb1lXNW5aV1JVYjNWamFHVnpJSDBwSUQwK0lDaDdYRzRnSUhnNklHTm9ZVzVuWldSVWIzVmphR1Z6V3pCZExtTnNhV1Z1ZEZnc1hHNGdJSGs2SUdOb1lXNW5aV1JVYjNWamFHVnpXekJkTG1Oc2FXVnVkRmxjYm4wcE8xeHVYRzVqYjI1emRDQm5aWFJPWVhScGRtVkZkbVZ1ZENBOUlDaGxLU0E5UGlCbExtOXlhV2RwYm1Gc1JYWmxiblFnZkh3Z1pTNXVZWFJwZG1WRmRtVnVkQ0I4ZkNCbE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9aU3dnY0hKdmNITXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2JtRjBhWFpsUlhabGJuUWdQU0JuWlhST1lYUnBkbVZGZG1WdWRDaGxLVHRjYmlBZ2NtVjBkWEp1SUNodVlYUnBkbVZGZG1WdWRDNTBiM1ZqYUdWektTQS9YRzRnSUNBZ1kzSmxZWFJsVUc5cGJuUmxjaWgwYjNWamFFVjJaVzUwVkc5UWIybHVkQ2hsS1N3Z2UxeHVJQ0FnSUNBZ2JXOTJaVVYyWlc1ME9pQW5kRzkxWTJodGIzWmxKeXhjYmlBZ0lDQWdJR1YyWlc1MFZHOVFiMmx1ZEhNNklIUnZkV05vUlhabGJuUlViMUJ2YVc1MExGeHVJQ0FnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdJQ0I5S1NBNlhHNGdJQ0FnWTNKbFlYUmxVRzlwYm5SbGNpaHRiM1Z6WlVWMlpXNTBWRzlRYjJsdWRDaGxLU3dnZTF4dUlDQWdJQ0FnYlc5MlpVVjJaVzUwT2lBbmJXOTFjMlZ0YjNabEp5eGNiaUFnSUNBZ0lHVjJaVzUwVkc5UWIybHVkSE02SUcxdmRYTmxSWFpsYm5SVWIxQnZhVzUwTEZ4dUlDQWdJQ0FnTGk0dWNISnZjSE5jYmlBZ0lDQjlLVHRjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BvaW50ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJy4uL2luYy9lYXNpbmcnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgY2xhbXBQcm9ncmVzcyA9ICgwLCBfdHJhbnNmb3JtZXJzLmNsYW1wKSgwLCAxKTtcblxudmFyIE5FWFRfU1RFUFMgPSB7XG4gIGxvb3A6IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgIHJldHVybiB0d2Vlbi5zdGFydCgpO1xuICB9LFxuICB5b3lvOiBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICByZXR1cm4gdHdlZW4ucmV2ZXJzZSgpLnN0YXJ0KCk7XG4gIH0sXG4gIGZsaXA6IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgIHJldHVybiB0d2Vlbi5mbGlwKCkuc3RhcnQoKTtcbiAgfVxufTtcblxudmFyIFR3ZWVuID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFR3ZWVuLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBUd2VlbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdlZW4pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBUd2Vlbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uLFxuICAgICAgICBwbGF5RGlyZWN0aW9uID0gX3Byb3BzLnBsYXlEaXJlY3Rpb247XG5cblxuICAgIHRoaXMuZWxhcHNlZCA9IHBsYXlEaXJlY3Rpb24gPT09IDEgPyAwIDogZHVyYXRpb247XG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uID0gX3Byb3BzMi5kdXJhdGlvbixcbiAgICAgICAgZWFzZSA9IF9wcm9wczIuZWFzZSxcbiAgICAgICAgZnJvbSA9IF9wcm9wczIuZnJvbSxcbiAgICAgICAgdG8gPSBfcHJvcHMyLnRvLFxuICAgICAgICBwbGF5RGlyZWN0aW9uID0gX3Byb3BzMi5wbGF5RGlyZWN0aW9uO1xuXG5cbiAgICB0aGlzLmVsYXBzZWQgKz0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpICogcGxheURpcmVjdGlvbjtcbiAgICB0aGlzLnByb2dyZXNzID0gY2xhbXBQcm9ncmVzcygoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKDAsIGR1cmF0aW9uLCB0aGlzLmVsYXBzZWQpKTtcblxuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGZyb20sIHRvLCBlYXNlKHRoaXMucHJvZ3Jlc3MpKTtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICBkdXJhdGlvbiA9IF9wcm9wczMuZHVyYXRpb24sXG4gICAgICAgIHBsYXlEaXJlY3Rpb24gPSBfcHJvcHMzLnBsYXlEaXJlY3Rpb24sXG4gICAgICAgIHlveW8gPSBfcHJvcHMzLnlveW8sXG4gICAgICAgIGxvb3AgPSBfcHJvcHMzLmxvb3AsXG4gICAgICAgIGZsaXAgPSBfcHJvcHMzLmZsaXA7XG5cbiAgICB2YXIgaXNDb21wbGV0ZSA9IHBsYXlEaXJlY3Rpb24gPT09IDEgPyB0aGlzLmVsYXBzZWQgPj0gZHVyYXRpb24gOiB0aGlzLmVsYXBzZWQgPD0gMDtcblxuICAgIGlmIChpc0NvbXBsZXRlICYmICh5b3lvIHx8IGxvb3AgfHwgZmxpcCkpIHtcbiAgICAgIHZhciBpc1N0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gTkVYVF9TVEVQUykge1xuICAgICAgICB2YXIgbmV4dFN0ZXAgPSBORVhUX1NURVBTW2tleV07XG4gICAgICAgIHZhciBjb3VudFByb3AgPSBrZXkgKyAnQ291bnQnO1xuICAgICAgICB2YXIgc3RlcE1heCA9IHRoaXMuZ2V0UHJvcChrZXkpO1xuICAgICAgICB2YXIgc3RlcENvdW50ID0gdGhpcy5nZXRQcm9wKGNvdW50UHJvcCk7XG5cbiAgICAgICAgaWYgKHN0ZXBNYXggPiBzdGVwQ291bnQpIHtcbiAgICAgICAgICB2YXIgX3NldFByb3BzO1xuXG4gICAgICAgICAgdGhpcy5zZXRQcm9wcygoX3NldFByb3BzID0ge30sIF9zZXRQcm9wc1tjb3VudFByb3BdID0gc3RlcENvdW50ICsgMSwgX3NldFByb3BzKSk7XG4gICAgICAgICAgbmV4dFN0ZXAodGhpcyk7XG4gICAgICAgICAgaXNTdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1N0ZXBUYWtlbikgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0NvbXBsZXRlO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5nZXRFbGFwc2VkID0gZnVuY3Rpb24gZ2V0RWxhcHNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGFwc2VkO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5mbGlwID0gZnVuY3Rpb24gZmxpcCgpIHtcbiAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLnByb3BzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuICAgIHZhciBfcmVmID0gW3RoaXMucHJvcHMudG8sIHRoaXMucHJvcHMuZnJvbV07XG4gICAgdGhpcy5wcm9wcy5mcm9tID0gX3JlZlswXTtcbiAgICB0aGlzLnByb3BzLnRvID0gX3JlZlsxXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICB0aGlzLnByb3BzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuO1xufShfMi5kZWZhdWx0KTtcblxuVHdlZW4uZGVmYXVsdFByb3BzID0ge1xuICBkdXJhdGlvbjogMzAwLFxuICBlYXNlOiBfZWFzaW5nLmVhc2VPdXQsXG4gIGZyb206IDAsXG4gIHRvOiAxLFxuICBmbGlwOiAwLFxuICBmbGlwQ291bnQ6IDAsXG4gIHlveW86IDAsXG4gIHlveW9Db3VudDogMCxcbiAgbG9vcDogMCxcbiAgbG9vcENvdW50OiAwLFxuICBwbGF5RGlyZWN0aW9uOiAxXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBwcm9wcyA9IGFyZ3NbMF07XG5cbiAgICByZXR1cm4gbmV3IFR3ZWVuKHByb3BzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZnJvbSA9IGFyZ3NbMF0sXG4gICAgICAgIHRvID0gYXJnc1sxXSxcbiAgICAgICAgZHVyYXRpb24gPSBhcmdzWzJdLFxuICAgICAgICBlYXNlID0gYXJnc1szXSxcbiAgICAgICAgX3Byb3BzNCA9IGFyZ3NbNF07XG5cbiAgICByZXR1cm4gbmV3IFR3ZWVuKF9leHRlbmRzKHsgZnJvbTogZnJvbSwgdG86IHRvLCBkdXJhdGlvbjogZHVyYXRpb24sIGVhc2U6IGVhc2UgfSwgX3Byb3BzNCkpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1IzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiSW1Oc1lXMXdVSEp2WjNKbGMzTWlMQ0pPUlZoVVgxTlVSVkJUSWl3aWJHOXZjQ0lzSW5SM1pXVnVJaXdpYzNSaGNuUWlMQ0o1YjNsdklpd2ljbVYyWlhKelpTSXNJbVpzYVhBaUxDSlVkMlZsYmlJc0ltOXVVM1JoY25RaUxDSndjbTl3Y3lJc0ltUjFjbUYwYVc5dUlpd2ljR3hoZVVScGNtVmpkR2x2YmlJc0ltVnNZWEJ6WldRaUxDSndjbTluY21WemN5SXNJblZ3WkdGMFpTSXNJbVZoYzJVaUxDSm1jbTl0SWl3aWRHOGlMQ0pwYzBGamRHbHZia052YlhCc1pYUmxJaXdpYVhORGIyMXdiR1YwWlNJc0ltbHpVM1JsY0ZSaGEyVnVJaXdpYTJWNUlpd2libVY0ZEZOMFpYQWlMQ0pqYjNWdWRGQnliM0FpTENKemRHVndUV0Y0SWl3aVoyVjBVSEp2Y0NJc0luTjBaWEJEYjNWdWRDSXNJbk5sZEZCeWIzQnpJaXdpWjJWMFJXeGhjSE5sWkNJc0ltUmxabUYxYkhSUWNtOXdjeUlzSW1ac2FYQkRiM1Z1ZENJc0lubHZlVzlEYjNWdWRDSXNJbXh2YjNCRGIzVnVkQ0lzSW1GeVozTWlMQ0pzWlc1bmRHZ2lYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGQk96czdPMEZCUTBFN08wRkJRMEU3TzBGQlEwRTdPMEZCUTBFN096czdPenM3T3pzN1FVRkZRU3hKUVVGTlFTeG5Ra0ZCWjBJc2VVSkJRVTBzUTBGQlRpeEZRVUZUTEVOQlFWUXNRMEZCZEVJN08wRkJSVUVzU1VGQlRVTXNZVUZCWVR0QlFVTnFRa01zVVVGQlRTeFZRVUZEUXl4TFFVRkVPMEZCUVVFc1YwRkJWMEVzVFVGQlRVTXNTMEZCVGl4RlFVRllPMEZCUVVFc1IwRkVWenRCUVVWcVFrTXNVVUZCVFN4VlFVRkRSaXhMUVVGRU8wRkJRVUVzVjBGQlYwRXNUVUZCVFVjc1QwRkJUaXhIUVVGblFrWXNTMEZCYUVJc1JVRkJXRHRCUVVGQkxFZEJSbGM3UVVGSGFrSkhMRkZCUVUwc1ZVRkJRMG9zUzBGQlJEdEJRVUZCTEZkQlFWZEJMRTFCUVUxSkxFbEJRVTRzUjBGQllVZ3NTMEZCWWl4RlFVRllPMEZCUVVFN1FVRklWeXhEUVVGdVFqczdTVUZOVFVrc1N6czdPenM3T3pzN08ydENRV1ZLUXl4UExITkNRVUZWTzBGQlFVRXNhVUpCUXpSQ0xFdEJRVXRETEV0QlJHcERPMEZCUVVFc1VVRkRRVU1zVVVGRVFTeFZRVU5CUVN4UlFVUkJPMEZCUVVFc1VVRkRWVU1zWVVGRVZpeFZRVU5WUVN4aFFVUldPenM3UVVGSFVpeFRRVUZMUXl4UFFVRk1MRWRCUVdkQ1JDeHJRa0ZCYTBJc1EwRkJia0lzUjBGQmQwSXNRMEZCZUVJc1IwRkJORUpFTEZGQlFUTkRPMEZCUTBFc1UwRkJTMGNzVVVGQlRDeEhRVUZuUWl4RFFVRm9RanRCUVVORUxFYzdPMnRDUVVWRVF5eE5MSEZDUVVGVE8wRkJRVUVzYTBKQlF6WkRMRXRCUVV0TUxFdEJSR3hFTzBGQlFVRXNVVUZEUTBNc1VVRkVSQ3hYUVVORFFTeFJRVVJFTzBGQlFVRXNVVUZEVjBzc1NVRkVXQ3hYUVVOWFFTeEpRVVJZTzBGQlFVRXNVVUZEYVVKRExFbEJSR3BDTEZkQlEybENRU3hKUVVScVFqdEJRVUZCTEZGQlEzVkNReXhGUVVSMlFpeFhRVU4xUWtFc1JVRkVka0k3UVVGQlFTeFJRVU15UWs0c1lVRkVNMElzVjBGRE1rSkJMR0ZCUkROQ096czdRVUZIVUN4VFFVRkxReXhQUVVGTUxFbEJRV2RDTEhWRFFVRjFRa1FzWVVGQmRrTTdRVUZEUVN4VFFVRkxSU3hSUVVGTUxFZEJRV2RDWkN4alFVRmpMR2REUVVGeFFpeERRVUZ5UWl4RlFVRjNRbGNzVVVGQmVFSXNSVUZCYTBNc1MwRkJTMFVzVDBGQmRrTXNRMEZCWkN4RFFVRm9RanM3UVVGRlFTeFhRVUZQTEdkRFFVRnhRa2tzU1VGQmNrSXNSVUZCTWtKRExFVkJRVE5DTEVWQlFTdENSaXhMUVVGTExFdEJRVXRHTEZGQlFWWXNRMEZCTDBJc1EwRkJVRHRCUVVORUxFYzdPMnRDUVVWRVN5eG5RaXdyUWtGQmJVSTdRVUZCUVN4clFrRkRjVU1zUzBGQlMxUXNTMEZFTVVNN1FVRkJRU3hSUVVOVVF5eFJRVVJUTEZkQlExUkJMRkZCUkZNN1FVRkJRU3hSUVVORFF5eGhRVVJFTEZkQlEwTkJMR0ZCUkVRN1FVRkJRU3hSUVVOblFsQXNTVUZFYUVJc1YwRkRaMEpCTEVsQlJHaENPMEZCUVVFc1VVRkRjMEpJTEVsQlJIUkNMRmRCUTNOQ1FTeEpRVVIwUWp0QlFVRkJMRkZCUXpSQ1N5eEpRVVExUWl4WFFVTTBRa0VzU1VGRU5VSTdPMEZCUldwQ0xGRkJRVWxoTEdGQlFXTlNMR3RDUVVGclFpeERRVUZ1UWl4SFFVRjVRaXhMUVVGTFF5eFBRVUZNTEVsQlFXZENSaXhSUVVGNlF5eEhRVUZ6UkN4TFFVRkxSU3hQUVVGTUxFbEJRV2RDTEVOQlFYWkdPenRCUVVWQkxGRkJRVWxQTEdWQlFXVm1MRkZCUVZGSUxFbEJRVklzU1VGQlowSkxMRWxCUVM5Q0xFTkJRVW9zUlVGQk1FTTdRVUZEZUVNc1ZVRkJTV01zWTBGQll5eExRVUZzUWpzN1FVRkZRU3hYUVVGTExFbEJRVWxETEVkQlFWUXNTVUZCWjBKeVFpeFZRVUZvUWl4RlFVRTBRanRCUVVNeFFpeFpRVUZOYzBJc1YwRkJWM1JDTEZkQlFWZHhRaXhIUVVGWUxFTkJRV3BDTzBGQlEwRXNXVUZCVFVVc1dVRkJXVVlzVFVGQlRTeFBRVUY0UWp0QlFVTkJMRmxCUVUxSExGVkJRVlVzUzBGQlMwTXNUMEZCVEN4RFFVRmhTaXhIUVVGaUxFTkJRV2hDTzBGQlEwRXNXVUZCVFVzc1dVRkJXU3hMUVVGTFJDeFBRVUZNTEVOQlFXRkdMRk5CUVdJc1EwRkJiRUk3TzBGQlJVRXNXVUZCU1VNc1ZVRkJWVVVzVTBGQlpDeEZRVUY1UWp0QlFVRkJPenRCUVVOMlFpeGxRVUZMUXl4UlFVRk1MRFJDUVVOSFNpeFRRVVJJTEVsQlEyVkhMRmxCUVZrc1EwRkVNMEk3UVVGSFFVb3NiVUpCUVZNc1NVRkJWRHRCUVVOQlJpeDNRa0ZCWXl4SlFVRmtPMEZCUTBRN1FVRkRSanM3UVVGRlJDeFZRVUZKUVN4WFFVRktMRVZCUVdsQ1JDeGhRVUZoTEV0QlFXSTdRVUZEYkVJN08wRkJSVVFzVjBGQlQwRXNWVUZCVUR0QlFVTkVMRWM3TzJ0Q1FVVkVVeXhWTEhsQ1FVRmhPMEZCUTFnc1YwRkJUeXhMUVVGTGFFSXNUMEZCV2p0QlFVTkVMRWM3TzJ0Q1FVVkVUaXhKTEcxQ1FVRlBPMEZCUTB3c1UwRkJTMDBzVDBGQlRDeEhRVUZsTEV0QlFVdElMRXRCUVV3c1EwRkJWME1zVVVGQldDeEhRVUZ6UWl4TFFVRkxSU3hQUVVFeFF6dEJRVVJMTEdWQlJUaENMRU5CUVVNc1MwRkJTMGdzUzBGQlRDeERRVUZYVVN4RlFVRmFMRVZCUVdkQ0xFdEJRVXRTTEV0QlFVd3NRMEZCVjA4c1NVRkJNMElzUTBGR09VSTdRVUZGU2l4VFFVRkxVQ3hMUVVGTUxFTkJRVmRQTEVsQlJsQTdRVUZGWVN4VFFVRkxVQ3hMUVVGTUxFTkJRVmRSTEVWQlJuaENPenRCUVVkTUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08ydENRVVZFV2l4UExITkNRVUZWTzBGQlExSXNVMEZCUzBrc1MwRkJUQ3hEUVVGWFJTeGhRVUZZTEVsQlFUUkNMRU5CUVVNc1EwRkJOMEk3UVVGRFFTeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96czdPenRCUVhoRlIwb3NTeXhEUVVOSGMwSXNXU3hIUVVGbE8wRkJRM0JDYmtJc1dVRkJWU3hIUVVSVk8wRkJSWEJDU3l4MVFrRkdiMEk3UVVGSGNFSkRMRkZCUVUwc1EwRklZenRCUVVsd1FrTXNUVUZCU1N4RFFVcG5RanRCUVV0d1FsZ3NVVUZCVFN4RFFVeGpPMEZCVFhCQ2QwSXNZVUZCVnl4RFFVNVRPMEZCVDNCQ01VSXNVVUZCVFN4RFFWQmpPMEZCVVhCQ01rSXNZVUZCVnl4RFFWSlRPMEZCVTNCQ09VSXNVVUZCVFN4RFFWUmpPMEZCVlhCQ0swSXNZVUZCVnl4RFFWWlRPMEZCVjNCQ2NrSXNhVUpCUVdVN1FVRllTeXhET3p0clFrRXdSVlFzV1VGQllUdEJRVUZCTEc5RFFVRlVjMElzU1VGQlV6dEJRVUZVUVN4UlFVRlRPMEZCUVVFN08wRkJRekZDTEUxQlFVbEJMRXRCUVV0RExFMUJRVXdzUzBGQlowSXNRMEZCY0VJc1JVRkJkVUk3UVVGQlFTeFJRVU5pZWtJc1MwRkVZU3hIUVVOSWQwSXNTVUZFUnpzN1FVRkZja0lzVjBGQlR5eEpRVUZKTVVJc1MwRkJTaXhEUVVGVlJTeExRVUZXTEVOQlFWQTdRVUZEUkN4SFFVaEVMRTFCUjA4N1FVRkJRU3hSUVVOSFR5eEpRVVJJTEVkQlEzVkRhVUlzU1VGRWRrTTdRVUZCUVN4UlFVTlRhRUlzUlVGRVZDeEhRVU4xUTJkQ0xFbEJSSFpETzBGQlFVRXNVVUZEWVhaQ0xGRkJSR0lzUjBGRGRVTjFRaXhKUVVSMlF6dEJRVUZCTEZGQlEzVkNiRUlzU1VGRWRrSXNSMEZEZFVOclFpeEpRVVIyUXp0QlFVRkJMRkZCUXpaQ2VFSXNUMEZFTjBJc1IwRkRkVU4zUWl4SlFVUjJRenM3UVVGRlRDeFhRVUZQTEVsQlFVa3hRaXhMUVVGS0xGbEJRVmxUTEZWQlFWb3NSVUZCYTBKRExFMUJRV3hDTEVWQlFYTkNVQ3hyUWtGQmRFSXNSVUZCWjBOTExGVkJRV2hETEVsQlFYbERUaXhQUVVGNlF5eEZRVUZRTzBGQlEwUTdRVUZEUml4RElpd2labWxzWlNJNkluUjNaV1Z1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVwYlhCdmNuUWdleUIwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VnZlNCbWNtOXRJQ2N1TGk5bWNtRnRaWE41Ym1Nbk8xeHVhVzF3YjNKMElIc2dZMnhoYlhBZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZEhKaGJuTm1iM0p0WlhKekp6dGNibWx0Y0c5eWRDQjdJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsTENCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYm1sdGNHOXlkQ0I3SUdWaGMyVlBkWFFnZlNCbWNtOXRJQ2N1TGk5cGJtTXZaV0Z6YVc1bkp6dGNibHh1WTI5dWMzUWdZMnhoYlhCUWNtOW5jbVZ6Y3lBOUlHTnNZVzF3S0RBc0lERXBPMXh1WEc1amIyNXpkQ0JPUlZoVVgxTlVSVkJUSUQwZ2UxeHVJQ0JzYjI5d09pQW9kSGRsWlc0cElEMCtJSFIzWldWdUxuTjBZWEowS0Nrc1hHNGdJSGx2ZVc4NklDaDBkMlZsYmlrZ1BUNGdkSGRsWlc0dWNtVjJaWEp6WlNncExuTjBZWEowS0Nrc1hHNGdJR1pzYVhBNklDaDBkMlZsYmlrZ1BUNGdkSGRsWlc0dVpteHBjQ2dwTG5OMFlYSjBLQ2xjYm4wN1hHNWNibU5zWVhOeklGUjNaV1Z1SUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ2MzUmhkR2xqSUdSbFptRjFiSFJRY205d2N5QTlJSHRjYmlBZ0lDQmtkWEpoZEdsdmJqb2dNekF3TEZ4dUlDQWdJR1ZoYzJVNklHVmhjMlZQZFhRc1hHNGdJQ0FnWm5KdmJUb2dNQ3hjYmlBZ0lDQjBiem9nTVN4Y2JpQWdJQ0JtYkdsd09pQXdMRnh1SUNBZ0lHWnNhWEJEYjNWdWREb2dNQ3hjYmlBZ0lDQjViM2x2T2lBd0xGeHVJQ0FnSUhsdmVXOURiM1Z1ZERvZ01DeGNiaUFnSUNCc2IyOXdPaUF3TEZ4dUlDQWdJR3h2YjNCRGIzVnVkRG9nTUN4Y2JpQWdJQ0J3YkdGNVJHbHlaV04wYVc5dU9pQXhYRzRnSUgwN1hHNWNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1IxY21GMGFXOXVMQ0J3YkdGNVJHbHlaV04wYVc5dUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lEMGdLSEJzWVhsRWFYSmxZM1JwYjI0Z1BUMDlJREVwSUQ4Z01DQTZJR1IxY21GMGFXOXVPMXh1SUNBZ0lIUm9hWE11Y0hKdlozSmxjM01nUFNBd08xeHVJQ0I5WEc1Y2JpQWdkWEJrWVhSbEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1pIVnlZWFJwYjI0c0lHVmhjMlVzSUdaeWIyMHNJSFJ2TENCd2JHRjVSR2x5WldOMGFXOXVJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJQ3M5SUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNncElDb2djR3hoZVVScGNtVmpkR2x2Ymp0Y2JpQWdJQ0IwYUdsekxuQnliMmR5WlhOeklEMGdZMnhoYlhCUWNtOW5jbVZ6Y3loblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTZ3dMQ0JrZFhKaGRHbHZiaXdnZEdocGN5NWxiR0Z3YzJWa0tTazdYRzVjYmlBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9abkp2YlN3Z2RHOHNJR1ZoYzJVb2RHaHBjeTV3Y205bmNtVnpjeWtwTzF4dUlDQjlYRzVjYmlBZ2FYTkJZM1JwYjI1RGIyMXdiR1YwWlNncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdSMWNtRjBhVzl1TENCd2JHRjVSR2x5WldOMGFXOXVMQ0I1YjNsdkxDQnNiMjl3TENCbWJHbHdJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUd4bGRDQnBjME52YlhCc1pYUmxJRDBnS0hCc1lYbEVhWEpsWTNScGIyNGdQVDA5SURFcElEOGdLSFJvYVhNdVpXeGhjSE5sWkNBK1BTQmtkWEpoZEdsdmJpa2dPaUFvZEdocGN5NWxiR0Z3YzJWa0lEdzlJREFwTzF4dVhHNGdJQ0FnYVdZZ0tHbHpRMjl0Y0d4bGRHVWdKaVlnS0hsdmVXOGdmSHdnYkc5dmNDQjhmQ0JtYkdsd0tTa2dlMXh1SUNBZ0lDQWdiR1YwSUdselUzUmxjRlJoYTJWdUlEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCT1JWaFVYMU5VUlZCVEtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHNWxlSFJUZEdWd0lEMGdUa1ZZVkY5VFZFVlFVMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCamIzVnVkRkJ5YjNBZ1BTQnJaWGtnS3lBblEyOTFiblFuTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J6ZEdWd1RXRjRJRDBnZEdocGN5NW5aWFJRY205d0tHdGxlU2s3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE4wWlhCRGIzVnVkQ0E5SUhSb2FYTXVaMlYwVUhKdmNDaGpiM1Z1ZEZCeWIzQXBPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHpkR1Z3VFdGNElENGdjM1JsY0VOdmRXNTBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTV6WlhSUWNtOXdjeWg3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmJZMjkxYm5SUWNtOXdYVG9nYzNSbGNFTnZkVzUwSUNzZ01WeHVJQ0FnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNBZ0lHNWxlSFJUZEdWd0tIUm9hWE1wTzF4dUlDQWdJQ0FnSUNBZ0lHbHpVM1JsY0ZSaGEyVnVJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JwWmlBb2FYTlRkR1Z3VkdGclpXNHBJR2x6UTI5dGNHeGxkR1VnUFNCbVlXeHpaVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2FYTkRiMjF3YkdWMFpUdGNiaUFnZlZ4dVhHNGdJR2RsZEVWc1lYQnpaV1FvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVpXeGhjSE5sWkR0Y2JpQWdmVnh1WEc0Z0lHWnNhWEFvS1NCN1hHNGdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lEMGdkR2hwY3k1d2NtOXdjeTVrZFhKaGRHbHZiaUF0SUhSb2FYTXVaV3hoY0hObFpEdGNiaUFnSUNCYmRHaHBjeTV3Y205d2N5NW1jbTl0TENCMGFHbHpMbkJ5YjNCekxuUnZYU0E5SUZ0MGFHbHpMbkJ5YjNCekxuUnZMQ0IwYUdsekxuQnliM0J6TG1aeWIyMWRPMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnY21WMlpYSnpaU2dwSUh0Y2JpQWdJQ0IwYUdsekxuQnliM0J6TG5Cc1lYbEVhWEpsWTNScGIyNGdLajBnTFRFN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tDNHVMbUZ5WjNNcElEMCtJSHRjYmlBZ2FXWWdLR0Z5WjNNdWJHVnVaM1JvSUQwOVBTQXhLU0I3WEc0Z0lDQWdZMjl1YzNRZ1d5QndjbTl3Y3lCZElEMGdZWEpuY3p0Y2JpQWdJQ0J5WlhSMWNtNGdibVYzSUZSM1pXVnVLSEJ5YjNCektUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmpiMjV6ZENCYklHWnliMjBzSUhSdkxDQmtkWEpoZEdsdmJpd2daV0Z6WlN3Z2NISnZjSE1nWFNBOUlHRnlaM003WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJVZDJWbGJpaDdJR1p5YjIwc0lIUnZMQ0JrZFhKaGRHbHZiaXdnWldGelpTd2dMaTR1Y0hKdmNITWdmU2s3WEc0Z0lIMWNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NoYWluID0gcmVxdWlyZSgnLi9jaGFpbicpO1xuXG52YXIgX2NoYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoYWluKTtcblxudmFyIF9wYXJhbGxlbCA9IHJlcXVpcmUoJy4vcGFyYWxsZWwnKTtcblxudmFyIF9wYXJhbGxlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJhbGxlbCk7XG5cbnZhciBfZGVsYXkgPSByZXF1aXJlKCcuL2RlbGF5Jyk7XG5cbnZhciBfZGVsYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVsYXkpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBwYXJhbGxlbCBBY3Rpb24gY29tcG9zZWQgb2YgY2hhaW5lZFxuICogZGVsYXkgYW5kIGFjdGlvbnMuIEludGVydmFsIGNhbiBiZSBlaXRoZXIgYSBudW1iZXJcbiAqIHRvIG11bHRpcGx5IGJ5IGBpYCBvciBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBwcm92aWRlZCBgaWBcbiAqXG4gKiBTdHJhaWdodCBjcmliYmVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9ibG9iLzI0YzcyZjUxM2U0OGYwYmRjNDA4MjBiNDMyNjIzMjhmZTJjMzAxZDQvTGlicmFyaWVzL0FuaW1hdGVkL3NyYy9BbmltYXRlZEltcGxlbWVudGF0aW9uLmpzI0wyMDMxXG4gKiBeIFRoaXMgZnVuY3Rpb24gc29sZCBhIHByZXZpb3VzbHktY29uZmxpY3RlZCBtZSBvbiB0aGUgbWVyaXQgb2YgbW92aW5nIGZyb21cbiAqIGpRdWVyeS1zdHlsZSBtdWx0aS1wcm9wZXJ0eSBhbmltYXRpb25zIHRvIHNpbmdsZS1wcm9wZXJ0eS5cbiAqIEBwYXJhbSAge2FycmF5fSBhY3Rpb25zXG4gKiBAcGFyYW0gIHtmdW5jdGlvbiB8IG51bWJlcn0gaW50ZXJ2YWxcbiAqIEByZXR1cm4ge0FjdGlvbn1cbiAqL1xuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMsIGludGVydmFsLCBvbkNvbXBsZXRlKSB7XG4gIHZhciBpbnRlcnZhbElzRnVuY3Rpb24gPSAoMCwgX3V0aWxzLmlzRnVuYykoaW50ZXJ2YWwpO1xuXG4gIHJldHVybiAoMCwgX3BhcmFsbGVsMi5kZWZhdWx0KShhY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uLCBpKSB7XG4gICAgdmFyIHRpbWVUb0RlbGF5ID0gaW50ZXJ2YWxJc0Z1bmN0aW9uID8gaW50ZXJ2YWwoaSkgOiBpICogaW50ZXJ2YWw7XG4gICAgcmV0dXJuICgwLCBfY2hhaW4yLmRlZmF1bHQpKFsoMCwgX2RlbGF5Mi5kZWZhdWx0KSh0aW1lVG9EZWxheSksIGFjdGlvbl0pO1xuICB9KSwgeyBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNOMFlXZG5aWEl1YW5NaVhTd2libUZ0WlhNaU9sc2lZV04wYVc5dWN5SXNJbWx1ZEdWeWRtRnNJaXdpYjI1RGIyMXdiR1YwWlNJc0ltbHVkR1Z5ZG1Gc1NYTkdkVzVqZEdsdmJpSXNJbTFoY0NJc0ltRmpkR2x2YmlJc0lta2lMQ0owYVcxbFZHOUVaV3hoZVNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUlVFN096czdPenM3T3pzN096dHJRa0ZaWlN4VlFVRkRRU3hQUVVGRUxFVkJRVlZETEZGQlFWWXNSVUZCYjBKRExGVkJRWEJDTEVWQlFXMURPMEZCUTJoRUxFMUJRVTFETEhGQ1FVRnhRaXh0UWtGQlQwWXNVVUZCVUN4RFFVRXpRanM3UVVGRlFTeFRRVUZQTEhkQ1FVRlRSQ3hSUVVGUlNTeEhRVUZTTEVOQlFWa3NWVUZCUTBNc1RVRkJSQ3hGUVVGVFF5eERRVUZVTEVWQlFXVTdRVUZEZWtNc1VVRkJUVU1zWTBGQlpVb3NhMEpCUVVRc1IwRkJkVUpHTEZOQlFWTkxMRU5CUVZRc1EwRkJka0lzUjBGQmNVTkJMRWxCUVVsTUxGRkJRVGRFTzBGQlEwRXNWMEZCVHl4eFFrRkJUU3hEUVVOWUxIRkNRVUZOVFN4WFFVRk9MRU5CUkZjc1JVRkZXRVlzVFVGR1Z5eERRVUZPTEVOQlFWQTdRVUZKUkN4SFFVNWxMRU5CUVZRc1JVRk5TQ3hGUVVGRlNDeHpRa0ZCUml4RlFVNUhMRU5CUVZBN1FVRlBSQ3hESWl3aVptbHNaU0k2SW5OMFlXZG5aWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdZMmhoYVc0Z1puSnZiU0FuTGk5amFHRnBiaWM3WEc1cGJYQnZjblFnY0dGeVlXeHNaV3dnWm5KdmJTQW5MaTl3WVhKaGJHeGxiQ2M3WEc1cGJYQnZjblFnWkdWc1lYa2dabkp2YlNBbkxpOWtaV3hoZVNjN1hHNXBiWEJ2Y25RZ2V5QnBjMFoxYm1NZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaWE1nWVNCdVpYY2djR0Z5WVd4c1pXd2dRV04wYVc5dUlHTnZiWEJ2YzJWa0lHOW1JR05vWVdsdVpXUmNiaUFxSUdSbGJHRjVJR0Z1WkNCaFkzUnBiMjV6TGlCSmJuUmxjblpoYkNCallXNGdZbVVnWldsMGFHVnlJR0VnYm5WdFltVnlYRzRnS2lCMGJ5QnRkV3gwYVhCc2VTQmllU0JnYVdBZ2IzSWdZU0JtZFc1amRHbHZiaUIwYUdGMElIZHBiR3dnWW1VZ2NISnZkbWxrWldRZ1lHbGdYRzRnS2x4dUlDb2dVM1J5WVdsbmFIUWdZM0pwWW1KbFpDQm1jbTl0SUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5bVlXTmxZbTl2YXk5eVpXRmpkQzF1WVhScGRtVXZZbXh2WWk4eU5HTTNNbVkxTVRObE5EaG1NR0prWXpRd09ESXdZalF6TWpZeU16STRabVV5WXpNd01XUTBMMHhwWW5KaGNtbGxjeTlCYm1sdFlYUmxaQzl6Y21NdlFXNXBiV0YwWldSSmJYQnNaVzFsYm5SaGRHbHZiaTVxY3lOTU1qQXpNVnh1SUNvZ1hpQlVhR2x6SUdaMWJtTjBhVzl1SUhOdmJHUWdZU0J3Y21WMmFXOTFjMng1TFdOdmJtWnNhV04wWldRZ2JXVWdiMjRnZEdobElHMWxjbWwwSUc5bUlHMXZkbWx1WnlCbWNtOXRYRzRnS2lCcVVYVmxjbmt0YzNSNWJHVWdiWFZzZEdrdGNISnZjR1Z5ZEhrZ1lXNXBiV0YwYVc5dWN5QjBieUJ6YVc1bmJHVXRjSEp2Y0dWeWRIa3VYRzRnS2lCQWNHRnlZVzBnSUh0aGNuSmhlWDBnWVdOMGFXOXVjMXh1SUNvZ1FIQmhjbUZ0SUNCN1puVnVZM1JwYjI0Z2ZDQnVkVzFpWlhKOUlHbHVkR1Z5ZG1Gc1hHNGdLaUJBY21WMGRYSnVJSHRCWTNScGIyNTlYRzRnS2k5Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoaFkzUnBiMjV6TENCcGJuUmxjblpoYkN3Z2IyNURiMjF3YkdWMFpTa2dQVDRnZTF4dUlDQmpiMjV6ZENCcGJuUmxjblpoYkVselJuVnVZM1JwYjI0Z1BTQnBjMFoxYm1Nb2FXNTBaWEoyWVd3cE8xeHVYRzRnSUhKbGRIVnliaUJ3WVhKaGJHeGxiQ2hoWTNScGIyNXpMbTFoY0Nnb1lXTjBhVzl1TENCcEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2RHbHRaVlJ2UkdWc1lYa2dQU0FvYVc1MFpYSjJZV3hKYzBaMWJtTjBhVzl1S1NBL0lHbHVkR1Z5ZG1Gc0tHa3BJRG9nYVNBcUlHbHVkR1Z5ZG1Gc08xeHVJQ0FnSUhKbGRIVnliaUJqYUdGcGJpaGJYRzRnSUNBZ0lDQmtaV3hoZVNoMGFXMWxWRzlFWld4aGVTa3NYRzRnSUNBZ0lDQmhZM1JwYjI1Y2JpQWdJQ0JkS1R0Y2JpQWdmU2tzSUhzZ2IyNURiMjF3YkdWMFpTQjlLVHRjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3N0YWdnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFZhbHVlID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFZhbHVlLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBWYWx1ZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmFsdWUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBWYWx1ZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHYpIHtcbiAgICB0aGlzLnRvVXBkYXRlID0gdjtcbiAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gIH07XG5cbiAgVmFsdWUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy50b1VwZGF0ZTtcbiAgfTtcblxuICByZXR1cm4gVmFsdWU7XG59KF8yLmRlZmF1bHQpO1xuXG5WYWx1ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjdXJyZW50LCBvblVwZGF0ZSkge1xuICByZXR1cm4gbmV3IFZhbHVlKHsgY3VycmVudDogY3VycmVudCwgb25VcGRhdGU6IG9uVXBkYXRlIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNaaGJIVmxMbXB6SWwwc0ltNWhiV1Z6SWpwYklsWmhiSFZsSWl3aWMyVjBJaXdpZGlJc0luUnZWWEJrWVhSbElpd2ljMk5vWldSMWJHVmtWWEJrWVhSbElpd2lkWEJrWVhSbElpd2laR1ZtWVhWc2RGQnliM0J6SWl3aWNHRnpjMmwyWlNJc0ltTjFjbkpsYm5RaUxDSnZibFZ3WkdGMFpTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN096czdPenM3U1VGRlRVRXNTenM3T3pzN096czdPMnRDUVV0S1F5eEhMR2RDUVVGSlF5eERMRVZCUVVjN1FVRkRUQ3hUUVVGTFF5eFJRVUZNTEVkQlFXZENSQ3hEUVVGb1FqdEJRVU5CTEd0RFFVRmpMRXRCUVV0RkxHVkJRVzVDTzBGQlEwUXNSenM3YTBKQlJVUkRMRTBzY1VKQlFWTTdRVUZEVUN4WFFVRlBMRXRCUVV0R0xGRkJRVm83UVVGRFJDeEhPenM3T3p0QlFWcEhTQ3hMTEVOQlEwZE5MRmtzUjBGQlpUdEJRVU53UWtNc1YwRkJVenRCUVVSWExFTTdPMnRDUVdOVUxGVkJRVU5ETEU5QlFVUXNSVUZCVlVNc1VVRkJWanRCUVVGQkxGTkJRWFZDTEVsQlFVbFVMRXRCUVVvc1EwRkJWU3hGUVVGRlVTeG5Ra0ZCUml4RlFVRlhReXhyUWtGQldDeEZRVUZXTEVOQlFYWkNPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSjJZV3gxWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1YVcxd2IzSjBJSHNnYjI1R2NtRnRaVlZ3WkdGMFpTQjlJR1p5YjIwZ0p5NHVMMlp5WVcxbGMzbHVZeWM3WEc1Y2JtTnNZWE56SUZaaGJIVmxJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYzNSaGRHbGpJR1JsWm1GMWJIUlFjbTl3Y3lBOUlIdGNiaUFnSUNCd1lYTnphWFpsT2lCMGNuVmxYRzRnSUgwN1hHNWNiaUFnYzJWMEtIWXBJSHRjYmlBZ0lDQjBhR2x6TG5SdlZYQmtZWFJsSUQwZ2RqdGNiaUFnSUNCdmJrWnlZVzFsVlhCa1lYUmxLSFJvYVhNdWMyTm9aV1IxYkdWa1ZYQmtZWFJsS1R0Y2JpQWdmVnh1WEc0Z0lIVndaR0YwWlNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NTBiMVZ3WkdGMFpUdGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9ZM1Z5Y21WdWRDd2diMjVWY0dSaGRHVXBJRDArSUc1bGR5QldZV3gxWlNoN0lHTjFjbkpsYm5Rc0lHOXVWWEJrWVhSbElIMHBPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy92YWx1ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lRW5kID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBleHBvcnRzLm9uRnJhbWVFbmQgPSBleHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLm9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLm9uRnJhbWVTdGFydCA9IHVuZGVmaW5lZDtcblxudmFyIF9vbk5leHRGcmFtZSA9IHJlcXVpcmUoJy4vb24tbmV4dC1mcmFtZScpO1xuXG52YXIgX29uTmV4dEZyYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29uTmV4dEZyYW1lKTtcblxudmFyIF9jcmVhdGVSZW5kZXJTdGVwID0gcmVxdWlyZSgnLi9jcmVhdGUtcmVuZGVyLXN0ZXAnKTtcblxudmFyIF9jcmVhdGVSZW5kZXJTdGVwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVJlbmRlclN0ZXApO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB3aWxsUmVuZGVyTmV4dEZyYW1lID0gZmFsc2U7XG5cbi8qKlxuICogTWF4aW11bSBwZXJtaXR0ZWQgbXMgc2luY2UgbGFzdCBmcmFtZVxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIE1BWF9FTEFQU0VEID0gMjA7XG5cbi8qKlxuICogQ3VycmVudCBmcmFtZXN0YW1wXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgY3VycmVudEZyYW1lc3RhbXAgPSAoMCwgX3V0aWxzLmN1cnJlbnRUaW1lKSgpO1xuXG52YXIgZWxhcHNlZCA9IDA7XG5cbi8qKlxuICogRmFjdG9yIHRvIG11bHRpcGx5IGBlbGFwc2VkYCBieSAtIFxuICogMC41IHdvdWxkIGJlIHNsb3cgbW90aW9uLCAyIHdvdWxkIGJlIGZhc3RcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBkaWxhdGlvbiA9IDE7XG5cbmZ1bmN0aW9uIHN0YXJ0UmVuZGVyTG9vcCgpIHtcbiAgaWYgKCF3aWxsUmVuZGVyTmV4dEZyYW1lKSB7XG4gICAgd2lsbFJlbmRlck5leHRGcmFtZSA9IHRydWU7XG4gICAgKDAsIF9vbk5leHRGcmFtZTIuZGVmYXVsdCkocHJvY2Vzc0ZyYW1lKTtcbiAgfVxufVxuXG52YXIgZnJhbWVTdGFydCA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcbnZhciBmcmFtZVVwZGF0ZSA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcbnZhciBmcmFtZVJlbmRlciA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcbnZhciBmcmFtZUVuZCA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcblxuZnVuY3Rpb24gcHJvY2Vzc0ZyYW1lKGZyYW1lc3RhbXApIHtcbiAgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnRGcmFtZXN0YW1wLCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gIGN1cnJlbnRGcmFtZXN0YW1wID0gZnJhbWVzdGFtcDtcblxuICBmcmFtZVN0YXJ0LnByb2Nlc3MoKTtcbiAgZnJhbWVVcGRhdGUucHJvY2VzcygpO1xuICBmcmFtZVJlbmRlci5wcm9jZXNzKCk7XG4gIGZyYW1lRW5kLnByb2Nlc3MoKTtcbn1cblxudmFyIG9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5zY2hlZHVsZTtcbnZhciBvbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZnJhbWVVcGRhdGUuc2NoZWR1bGU7XG52YXIgb25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGZyYW1lUmVuZGVyLnNjaGVkdWxlO1xudmFyIG9uRnJhbWVFbmQgPSBleHBvcnRzLm9uRnJhbWVFbmQgPSBmcmFtZUVuZC5zY2hlZHVsZTtcbnZhciBjYW5jZWxPbkZyYW1lU3RhcnQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGZyYW1lUmVuZGVyLmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lRW5kID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lRW5kID0gZnJhbWVFbmQuY2FuY2VsO1xuXG52YXIgdGltZVNpbmNlTGFzdEZyYW1lID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBlbGFwc2VkO1xufTtcbnZhciBjdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLmN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGN1cnJlbnRGcmFtZXN0YW1wO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bWNtRnRaWE41Ym1NdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sc2lkMmxzYkZKbGJtUmxjazVsZUhSR2NtRnRaU0lzSWsxQldGOUZURUZRVTBWRUlpd2lZM1Z5Y21WdWRFWnlZVzFsYzNSaGJYQWlMQ0psYkdGd2MyVmtJaXdpWkdsc1lYUnBiMjRpTENKemRHRnlkRkpsYm1SbGNreHZiM0FpTENKd2NtOWpaWE56Um5KaGJXVWlMQ0ptY21GdFpWTjBZWEowSWl3aVpuSmhiV1ZWY0dSaGRHVWlMQ0ptY21GdFpWSmxibVJsY2lJc0ltWnlZVzFsUlc1a0lpd2labkpoYldWemRHRnRjQ0lzSWsxaGRHZ2lMQ0p0WVhnaUxDSnRhVzRpTENKd2NtOWpaWE56SWl3aWIyNUdjbUZ0WlZOMFlYSjBJaXdpYzJOb1pXUjFiR1VpTENKdmJrWnlZVzFsVlhCa1lYUmxJaXdpYjI1R2NtRnRaVkpsYm1SbGNpSXNJbTl1Um5KaGJXVkZibVFpTENKallXNWpaV3hQYmtaeVlXMWxVM1JoY25RaUxDSmpZVzVqWld3aUxDSmpZVzVqWld4UGJrWnlZVzFsVlhCa1lYUmxJaXdpWTJGdVkyVnNUMjVHY21GdFpWSmxibVJsY2lJc0ltTmhibU5sYkU5dVJuSmhiV1ZGYm1RaUxDSjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVWlMQ0pqZFhKeVpXNTBSbkpoYldWVWFXMWxjM1JoYlhBaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlJVRXNTVUZCU1VFc2MwSkJRWE5DTEV0QlFURkNPenRCUVVWQk96czdPMEZCU1VFc1NVRkJUVU1zWTBGQll5eEZRVUZ3UWpzN1FVRkZRVHM3T3p0QlFVbEJMRWxCUVVsRExHOUNRVUZ2UWl4NVFrRkJlRUk3TzBGQlJVRXNTVUZCU1VNc1ZVRkJWU3hEUVVGa096dEJRVVZCT3pzN096dEJRVXRCTEVsQlFVbERMRmRCUVZjc1EwRkJaanM3UVVGRlFTeFRRVUZUUXl4bFFVRlVMRWRCUVRKQ08wRkJRM3BDTEUxQlFVa3NRMEZCUTB3c2JVSkJRVXdzUlVGQk1FSTdRVUZEZUVKQkxEQkNRVUZ6UWl4SlFVRjBRanRCUVVOQkxDdENRVUZaVFN4WlFVRmFPMEZCUTBRN1FVRkRSanM3UVVGRlJDeEpRVUZOUXl4aFFVRmhMR2REUVVGcFFrWXNaVUZCYWtJc1EwRkJia0k3UVVGRFFTeEpRVUZOUnl4alFVRmpMR2REUVVGcFFrZ3NaVUZCYWtJc1EwRkJjRUk3UVVGRFFTeEpRVUZOU1N4alFVRmpMR2REUVVGcFFrb3NaVUZCYWtJc1EwRkJjRUk3UVVGRFFTeEpRVUZOU3l4WFFVRlhMR2REUVVGcFFrd3NaVUZCYWtJc1EwRkJha0k3TzBGQlJVRXNVMEZCVTBNc1dVRkJWQ3hEUVVGelFrc3NWVUZCZEVJc1JVRkJhME03UVVGRGFFTllMSGRDUVVGelFpeExRVUYwUWp0QlFVTkJSeXhaUVVGVlV5eExRVUZMUXl4SFFVRk1MRU5CUVZORUxFdEJRVXRGTEVkQlFVd3NRMEZCVTBnc1lVRkJZVlFzYVVKQlFYUkNMRVZCUVhsRFJDeFhRVUY2UXl4RFFVRlVMRVZCUVdkRkxFTkJRV2hGTEVsQlFYRkZSeXhSUVVFdlJUdEJRVU5CUml4elFrRkJiMEpUTEZWQlFYQkNPenRCUVVWQlNpeGhRVUZYVVN4UFFVRllPMEZCUTBGUUxHTkJRVmxQTEU5QlFWbzdRVUZEUVU0c1kwRkJXVTBzVDBGQldqdEJRVU5CVEN4WFFVRlRTeXhQUVVGVU8wRkJRMFE3TzBGQlJVMHNTVUZCVFVNc2MwTkJRV1ZVTEZkQlFWZFZMRkZCUVdoRE8wRkJRMEVzU1VGQlRVTXNkME5CUVdkQ1ZpeFpRVUZaVXl4UlFVRnNRenRCUVVOQkxFbEJRVTFGTEhkRFFVRm5RbFlzV1VGQldWRXNVVUZCYkVNN1FVRkRRU3hKUVVGTlJ5eHJRMEZCWVZZc1UwRkJVMDhzVVVGQk5VSTdRVUZEUVN4SlFVRk5TU3hyUkVGQmNVSmtMRmRCUVZkbExFMUJRWFJETzBGQlEwRXNTVUZCVFVNc2IwUkJRWE5DWml4WlFVRlpZeXhOUVVGNFF6dEJRVU5CTEVsQlFVMUZMRzlFUVVGelFtWXNXVUZCV1dFc1RVRkJlRU03UVVGRFFTeEpRVUZOUnl3NFEwRkJiVUptTEZOQlFWTlpMRTFCUVd4RE96dEJRVVZCTEVsQlFVMUpMR3RFUVVGeFFqdEJRVUZCTEZOQlFVMTJRaXhQUVVGT08wRkJRVUVzUTBGQk0wSTdRVUZEUVN4SlFVRk5kMElzZDBSQlFYZENPMEZCUVVFc1UwRkJUWHBDTEdsQ1FVRk9PMEZCUVVFc1EwRkJPVUlpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2IyNU9aWGgwUm5KaGJXVWdabkp2YlNBbkxpOXZiaTF1WlhoMExXWnlZVzFsSnp0Y2JtbHRjRzl5ZENCamNtVmhkR1ZTWlc1a1pYSlRkR1Z3SUdaeWIyMGdKeTR2WTNKbFlYUmxMWEpsYm1SbGNpMXpkR1Z3Snp0Y2JtbHRjRzl5ZENCN0lHTjFjbkpsYm5SVWFXMWxJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHViR1YwSUhkcGJHeFNaVzVrWlhKT1pYaDBSbkpoYldVZ1BTQm1ZV3h6WlR0Y2JseHVMeW9xWEc0Z0tpQk5ZWGhwYlhWdElIQmxjbTFwZEhSbFpDQnRjeUJ6YVc1alpTQnNZWE4wSUdaeVlXMWxYRzRnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNvdlhHNWpiMjV6ZENCTlFWaGZSVXhCVUZORlJDQTlJREl3TzF4dVhHNHZLaXBjYmlBcUlFTjFjbkpsYm5RZ1puSmhiV1Z6ZEdGdGNGeHVJQ29nUUhSNWNHVWdlMDUxYldKbGNuMWNiaUFxTDF4dWJHVjBJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdJRDBnWTNWeWNtVnVkRlJwYldVb0tUdGNibHh1YkdWMElHVnNZWEJ6WldRZ1BTQXdPMXh1WEc0dktpcGNiaUFxSUVaaFkzUnZjaUIwYnlCdGRXeDBhWEJzZVNCZ1pXeGhjSE5sWkdBZ1lua2dMU0JjYmlBcUlEQXVOU0IzYjNWc1pDQmlaU0J6Ykc5M0lHMXZkR2x2Yml3Z01pQjNiM1ZzWkNCaVpTQm1ZWE4wWEc0Z0tpQkFkSGx3WlNCN1RuVnRZbVZ5ZlZ4dUlDb3ZYRzVzWlhRZ1pHbHNZWFJwYjI0Z1BTQXhPMXh1WEc1bWRXNWpkR2x2YmlCemRHRnlkRkpsYm1SbGNreHZiM0FvS1NCN1hHNGdJR2xtSUNnaGQybHNiRkpsYm1SbGNrNWxlSFJHY21GdFpTa2dlMXh1SUNBZ0lIZHBiR3hTWlc1a1pYSk9aWGgwUm5KaGJXVWdQU0IwY25WbE8xeHVJQ0FnSUc5dVRtVjRkRVp5WVcxbEtIQnliMk5sYzNOR2NtRnRaU2s3WEc0Z0lIMWNibjFjYmx4dVkyOXVjM1FnWm5KaGJXVlRkR0Z5ZENBOUlHTnlaV0YwWlZKbGJtUmxjbE4wWlhBb2MzUmhjblJTWlc1a1pYSk1iMjl3S1R0Y2JtTnZibk4wSUdaeVlXMWxWWEJrWVhSbElEMGdZM0psWVhSbFVtVnVaR1Z5VTNSbGNDaHpkR0Z5ZEZKbGJtUmxja3h2YjNBcE8xeHVZMjl1YzNRZ1puSmhiV1ZTWlc1a1pYSWdQU0JqY21WaGRHVlNaVzVrWlhKVGRHVndLSE4wWVhKMFVtVnVaR1Z5VEc5dmNDazdYRzVqYjI1emRDQm1jbUZ0WlVWdVpDQTlJR055WldGMFpWSmxibVJsY2xOMFpYQW9jM1JoY25SU1pXNWtaWEpNYjI5d0tUdGNibHh1Wm5WdVkzUnBiMjRnY0hKdlkyVnpjMFp5WVcxbEtHWnlZVzFsYzNSaGJYQXBJSHRjYmlBZ2QybHNiRkpsYm1SbGNrNWxlSFJHY21GdFpTQTlJR1poYkhObE8xeHVJQ0JsYkdGd2MyVmtJRDBnVFdGMGFDNXRZWGdvVFdGMGFDNXRhVzRvWm5KaGJXVnpkR0Z0Y0NBdElHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd0xDQk5RVmhmUlV4QlVGTkZSQ2tzSURFcElDb2daR2xzWVhScGIyNDdYRzRnSUdOMWNuSmxiblJHY21GdFpYTjBZVzF3SUQwZ1puSmhiV1Z6ZEdGdGNEdGNibHh1SUNCbWNtRnRaVk4wWVhKMExuQnliMk5sYzNNb0tUdGNiaUFnWm5KaGJXVlZjR1JoZEdVdWNISnZZMlZ6Y3lncE8xeHVJQ0JtY21GdFpWSmxibVJsY2k1d2NtOWpaWE56S0NrN1hHNGdJR1p5WVcxbFJXNWtMbkJ5YjJObGMzTW9LVHRjYm4xY2JseHVaWGh3YjNKMElHTnZibk4wSUc5dVJuSmhiV1ZUZEdGeWRDQTlJR1p5WVcxbFUzUmhjblF1YzJOb1pXUjFiR1U3WEc1bGVIQnZjblFnWTI5dWMzUWdiMjVHY21GdFpWVndaR0YwWlNBOUlHWnlZVzFsVlhCa1lYUmxMbk5qYUdWa2RXeGxPMXh1Wlhod2IzSjBJR052Ym5OMElHOXVSbkpoYldWU1pXNWtaWElnUFNCbWNtRnRaVkpsYm1SbGNpNXpZMmhsWkhWc1pUdGNibVY0Y0c5eWRDQmpiMjV6ZENCdmJrWnlZVzFsUlc1a0lEMGdabkpoYldWRmJtUXVjMk5vWldSMWJHVTdYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyRnVZMlZzVDI1R2NtRnRaVk4wWVhKMElEMGdabkpoYldWVGRHRnlkQzVqWVc1alpXdzdYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyRnVZMlZzVDI1R2NtRnRaVlZ3WkdGMFpTQTlJR1p5WVcxbFZYQmtZWFJsTG1OaGJtTmxiRHRjYm1WNGNHOXlkQ0JqYjI1emRDQmpZVzVqWld4UGJrWnlZVzFsVW1WdVpHVnlJRDBnWm5KaGJXVlNaVzVrWlhJdVkyRnVZMlZzTzF4dVpYaHdiM0owSUdOdmJuTjBJR05oYm1ObGJFOXVSbkpoYldWRmJtUWdQU0JtY21GdFpVVnVaQzVqWVc1alpXdzdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVWdQU0FvS1NBOVBpQmxiR0Z3YzJWa08xeHVaWGh3YjNKMElHTnZibk4wSUdOMWNuSmxiblJHY21GdFpWUnBiV1Z6ZEdGdGNDQTlJQ2dwSUQwK0lHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd08xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mcmFtZXN5bmMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBY3Rpb24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uKTtcblxuICAgIHRoaXMuc2NoZWR1bGVkVXBkYXRlID0gdGhpcy5zY2hlZHVsZWRVcGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMpO1xuXG4gICAgdGhpcy5zZXRQcm9wcyhwcm9wcyk7XG5cbiAgICB0aGlzLmN1cnJlbnQgPSBwcm9wcy5jdXJyZW50IHx8IHByb3BzLmZyb20gfHwgMDtcbiAgfVxuXG4gIEFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25TdGFydCA9IF9wcm9wcy5vblN0YXJ0LFxuICAgICAgICBfb25TdGFydCA9IF9wcm9wcy5fb25TdGFydCxcbiAgICAgICAgcGFzc2l2ZSA9IF9wcm9wcy5wYXNzaXZlO1xuXG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB0aGlzLm9uU3RhcnQoKTtcbiAgICBpZiAob25TdGFydCkgb25TdGFydCh0aGlzKTtcbiAgICBpZiAoX29uU3RhcnQpIF9vblN0YXJ0KHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uU3RvcCA9IF9wcm9wczIub25TdG9wLFxuICAgICAgICBfb25TdG9wID0gX3Byb3BzMi5fb25TdG9wLFxuICAgICAgICBwYXNzaXZlID0gX3Byb3BzMi5wYXNzaXZlO1xuXG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdG9wKSB0aGlzLm9uU3RvcCgpO1xuICAgIGlmIChvblN0b3ApIG9uU3RvcCh0aGlzKTtcbiAgICBpZiAoX29uU3RvcCkgX29uU3RvcCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uQ29tcGxldGUgPSBfcHJvcHMzLm9uQ29tcGxldGUsXG4gICAgICAgIF9vbkNvbXBsZXRlID0gX3Byb3BzMy5fb25Db21wbGV0ZTtcblxuXG4gICAgdGhpcy5zdG9wKCk7XG5cbiAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSh0aGlzKTtcbiAgICBpZiAoX29uQ29tcGxldGUpIF9vbkNvbXBsZXRlKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZWRVcGRhdGUgPSBmdW5jdGlvbiBzY2hlZHVsZWRVcGRhdGUoKSB7XG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcbiAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uVXBkYXRlID0gX3Byb3BzNC5vblVwZGF0ZSxcbiAgICAgICAgcGFzc2l2ZSA9IF9wcm9wczQucGFzc2l2ZTtcblxuXG4gICAgaWYgKHRoaXMudXBkYXRlKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnVwZGF0ZSh0aGlzLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlmIChvblVwZGF0ZSkgb25VcGRhdGUodGhpcy5jdXJyZW50LCB0aGlzKTtcbiAgICB0aGlzLmZpcmVMaXN0ZW5lcnMoKTtcblxuICAgIGlmICghcGFzc2l2ZSAmJiB0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQWN0aW9uQ29tcGxldGUgJiYgdGhpcy5pc0FjdGlvbkNvbXBsZXRlKCkpIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24gc2V0UHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHByb3BzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHYpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0UHJvcCA9IGZ1bmN0aW9uIGdldFByb3Aoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHNba2V5XTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5zcGVlZFBlclNlY29uZCkodGhpcy5jdXJyZW50IC0gdGhpcy5wcmV2LCB0aGlzLmxhc3RVcGRhdGVkKTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMgfHwgW107XG4gICAgdGhpcy5udW1MaXN0ZW5lcnMgPSB0aGlzLm51bUxpc3RlbmVycyB8fCAwO1xuICAgIGlmICh0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMrKztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgdmFyIGxpc3RlbmVySW5kZXggPSB0aGlzLmxpc3RlbmVycyA/IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpIDogLTE7XG4gICAgaWYgKGxpc3RlbmVySW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycy0tO1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmZpcmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiBmaXJlTGlzdGVuZXJzKCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5nZXQoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtTGlzdGVuZXJzOyBpKyspIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzW2ldKGN1cnJlbnQsIHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gQWN0aW9uO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJa0ZqZEdsdmJpSXNJbkJ5YjNCeklpd2ljMk5vWldSMWJHVmtWWEJrWVhSbElpd2lZbWx1WkNJc0ltTnZibk4wY25WamRHOXlJaXdpWkdWbVlYVnNkRkJ5YjNCeklpd2ljMlYwVUhKdmNITWlMQ0pqZFhKeVpXNTBJaXdpWm5KdmJTSXNJbk4wWVhKMElpd2liMjVUZEdGeWRDSXNJbDl2YmxOMFlYSjBJaXdpY0dGemMybDJaU0lzSWw5cGMwRmpkR2wyWlNJc0luTjBiM0FpTENKdmJsTjBiM0FpTENKZmIyNVRkRzl3SWl3aVkyOXRjR3hsZEdVaUxDSnZia052YlhCc1pYUmxJaXdpWDI5dVEyOXRjR3hsZEdVaUxDSnNZWE4wVlhCa1lYUmxaQ0lzSW5CeVpYWWlMQ0p2YmxWd1pHRjBaU0lzSW5Wd1pHRjBaU0lzSW1acGNtVk1hWE4wWlc1bGNuTWlMQ0pwYzBGamRHbHZia052YlhCc1pYUmxJaXdpWjJWMElpd2ljMlYwSWl3aWRpSXNJbWRsZEZCeWIzQWlMQ0pyWlhraUxDSm5aWFJXWld4dlkybDBlU0lzSW1selFXTjBhWFpsSWl3aVlXUmtUR2x6ZEdWdVpYSWlMQ0pzYVhOMFpXNWxjaUlzSW14cGMzUmxibVZ5Y3lJc0ltNTFiVXhwYzNSbGJtVnljeUlzSW1sdVpHVjRUMllpTENKd2RYTm9JaXdpY21WdGIzWmxUR2x6ZEdWdVpYSWlMQ0pzYVhOMFpXNWxja2x1WkdWNElpd2ljM0JzYVdObElpd2lhU0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPMEZCUTBFN096czdTVUZGVFVFc1RUdEJRVU5LTEd0Q1FVRlpReXhMUVVGYUxFVkJRVzFDTzBGQlFVRTdPMEZCUTJwQ0xGTkJRVXRETEdWQlFVd3NSMEZCZFVJc1MwRkJTMEVzWlVGQlRDeERRVUZ4UWtNc1NVRkJja0lzUTBGQk1FSXNTVUZCTVVJc1EwRkJka0k3TzBGQlJVRXNVMEZCUzBZc1MwRkJUQ3huUWtGRFN5eExRVUZMUnl4WFFVRk1MRU5CUVdsQ1F5eFpRVVIwUWpzN1FVRkpRU3hUUVVGTFF5eFJRVUZNTEVOQlFXTk1MRXRCUVdRN08wRkJSVUVzVTBGQlMwMHNUMEZCVEN4SFFVRmxUaXhOUVVGTlRTeFBRVUZPTEVsQlFXbENUaXhOUVVGTlR5eEpRVUYyUWl4SlFVRXJRaXhEUVVFNVF6dEJRVU5FT3p0dFFrRkZSRU1zU3l4dlFrRkJVVHRCUVVGQkxHbENRVU5wUXl4TFFVRkxVaXhMUVVSMFF6dEJRVUZCTEZGQlEwVlRMRTlCUkVZc1ZVRkRSVUVzVDBGRVJqdEJRVUZCTEZGQlExZERMRkZCUkZnc1ZVRkRWMEVzVVVGRVdEdEJRVUZCTEZGQlEzRkNReXhQUVVSeVFpeFZRVU54UWtFc1QwRkVja0k3T3p0QlFVZE9MRkZCUVVrc1EwRkJRMEVzVDBGQlRDeEZRVUZqTzBGQlExb3NWMEZCUzBNc1UwRkJUQ3hIUVVGcFFpeEpRVUZxUWp0QlFVTkJMRzlEUVVGakxFdEJRVXRZTEdWQlFXNUNPMEZCUTBRN08wRkJSVVFzVVVGQlNTeExRVUZMVVN4UFFVRlVMRVZCUVd0Q0xFdEJRVXRCTEU5QlFVdzdRVUZEYkVJc1VVRkJTVUVzVDBGQlNpeEZRVUZoUVN4UlFVRlJMRWxCUVZJN1FVRkRZaXhSUVVGSlF5eFJRVUZLTEVWQlFXTkJMRk5CUVZNc1NVRkJWRHM3UVVGRlpDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkVjc1NTeHRRa0ZCVHp0QlFVRkJMR3RDUVVOblF5eExRVUZMWWl4TFFVUnlRenRCUVVGQkxGRkJRMGRqTEUxQlJFZ3NWMEZEUjBFc1RVRkVTRHRCUVVGQkxGRkJRMWRETEU5QlJGZ3NWMEZEVjBFc1QwRkVXRHRCUVVGQkxGRkJRMjlDU2l4UFFVUndRaXhYUVVOdlFrRXNUMEZFY0VJN096dEJRVWRNTEZGQlFVa3NRMEZCUTBFc1QwRkJUQ3hGUVVGak8wRkJRMW9zVjBGQlMwTXNVMEZCVEN4SFFVRnBRaXhMUVVGcVFqdEJRVU5CTERCRFFVRnZRaXhMUVVGTFdDeGxRVUY2UWp0QlFVTkVPenRCUVVWRUxGRkJRVWtzUzBGQlMyRXNUVUZCVkN4RlFVRnBRaXhMUVVGTFFTeE5RVUZNTzBGQlEycENMRkZCUVVsQkxFMUJRVW9zUlVGQldVRXNUMEZCVHl4SlFVRlFPMEZCUTFvc1VVRkJTVU1zVDBGQlNpeEZRVUZoUVN4UlFVRlJMRWxCUVZJN08wRkJSV0lzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YlVKQlJVUkRMRkVzZFVKQlFWYzdRVUZCUVN4clFrRkRNa0lzUzBGQlMyaENMRXRCUkdoRE8wRkJRVUVzVVVGRFJHbENMRlZCUkVNc1YwRkRSRUVzVlVGRVF6dEJRVUZCTEZGQlExZERMRmRCUkZnc1YwRkRWMEVzVjBGRVdEczdPMEZCUjFRc1UwRkJTMHdzU1VGQlREczdRVUZGUVN4UlFVRkpMRXRCUVV0SkxGVkJRVlFzUlVGQmNVSXNTMEZCUzBFc1ZVRkJURHRCUVVOeVFpeFJRVUZKUVN4VlFVRktMRVZCUVdkQ1FTeFhRVUZYTEVsQlFWZzdRVUZEYUVJc1VVRkJTVU1zVjBGQlNpeEZRVUZwUWtFc1dVRkJXU3hKUVVGYU96dEJRVVZxUWl4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSR3BDTEdVc09FSkJRV3RDTzBGQlEyaENMRk5CUVV0clFpeFhRVUZNTEVkQlFXMUNMRzlEUVVGdVFqdEJRVU5CTEZOQlFVdERMRWxCUVV3c1IwRkJXU3hMUVVGTFpDeFBRVUZxUWpzN1FVRkdaMElzYTBKQlNXTXNTMEZCUzA0c1MwRktia0k3UVVGQlFTeFJRVWxTY1VJc1VVRktVU3hYUVVsU1FTeFJRVXBSTzBGQlFVRXNVVUZKUlZZc1QwRktSaXhYUVVsRlFTeFBRVXBHT3pzN1FVRk5hRUlzVVVGQlNTeExRVUZMVnl4TlFVRlVMRVZCUVdsQ08wRkJRMllzVjBGQlMyaENMRTlCUVV3c1IwRkJaU3hMUVVGTFowSXNUVUZCVEN4RFFVRlpMRXRCUVV0b1FpeFBRVUZxUWl4RFFVRm1PMEZCUTBRN08wRkJSVVFzVVVGQlNXVXNVVUZCU2l4RlFVRmpRU3hUUVVGVExFdEJRVXRtTEU5QlFXUXNSVUZCZFVJc1NVRkJka0k3UVVGRFpDeFRRVUZMYVVJc1lVRkJURHM3UVVGRlFTeFJRVUZKTEVOQlFVTmFMRTlCUVVRc1NVRkJXU3hMUVVGTFF5eFRRVUZ5UWl4RlFVRm5RenRCUVVNNVFpeHZRMEZCWXl4TFFVRkxXQ3hsUVVGdVFqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1MwRkJTM1ZDTEdkQ1FVRk1MRWxCUVhsQ0xFdEJRVXRCTEdkQ1FVRk1MRVZCUVRkQ0xFVkJRWE5FTzBGQlEzQkVMRmRCUVV0U0xGRkJRVXc3UVVGRFJEczdRVUZGUkN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSRmdzVVN4eFFrRkJVMHdzU3l4RlFVRlBPMEZCUTJRc1UwRkJTMEVzUzBGQlRDeG5Ra0ZEU3l4TFFVRkxRU3hMUVVSV0xFVkJSVXRCTEV0QlJrdzdRVUZKUVN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSSGxDTEVjc2EwSkJRVTA3UVVGRFNpeFhRVUZQTEV0QlFVdHVRaXhQUVVGYU8wRkJRMFFzUnpzN2JVSkJSVVJ2UWl4SExHZENRVUZKUXl4RExFVkJRVWM3UVVGRFRDeFRRVUZMY2tJc1QwRkJUQ3hIUVVGbGNVSXNRMEZCWmp0QlFVTkJMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMjFDUVVWRVF5eFBMRzlDUVVGUlF5eEhMRVZCUVVzN1FVRkRXQ3hYUVVGUExFdEJRVXMzUWl4TFFVRk1MRU5CUVZjMlFpeEhRVUZZTEVOQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkVNc1Z5d3dRa0ZCWXp0QlFVTmFMRmRCUVU4c01FSkJRV1VzUzBGQlMzaENMRTlCUVV3c1IwRkJaU3hMUVVGTFl5eEpRVUZ1UXl4RlFVRjVReXhMUVVGTFJDeFhRVUU1UXl4RFFVRlFPMEZCUTBRc1J6czdiVUpCUlVSWkxGRXNkVUpCUVZjN1FVRkRWQ3hYUVVGUExFdEJRVXR1UWl4VFFVRmFPMEZCUTBRc1J6czdiVUpCUlVSdlFpeFhMSGRDUVVGWlF5eFJMRVZCUVZVN1FVRkRjRUlzVTBGQlMwTXNVMEZCVEN4SFFVRnBRaXhMUVVGTFFTeFRRVUZNTEVsQlFXdENMRVZCUVc1RE8wRkJRMEVzVTBGQlMwTXNXVUZCVEN4SFFVRnZRaXhMUVVGTFFTeFpRVUZNTEVsQlFYRkNMRU5CUVhwRE8wRkJRMEVzVVVGQlNTeExRVUZMUkN4VFFVRk1MRU5CUVdWRkxFOUJRV1lzUTBGQmRVSklMRkZCUVhaQ0xFMUJRWEZETEVOQlFVTXNRMEZCTVVNc1JVRkJOa003UVVGRE0wTXNWMEZCUzBNc1UwRkJUQ3hEUVVGbFJ5eEpRVUZtTEVOQlFXOUNTaXhSUVVGd1FqdEJRVU5CTEZkQlFVdEZMRmxCUVV3N1FVRkRSRHRCUVVORUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08yMUNRVVZFUnl4akxESkNRVUZsVEN4UkxFVkJRVlU3UVVGRGRrSXNVVUZCVFUwc1owSkJRV2xDTEV0QlFVdE1MRk5CUVU0c1IwRkJiVUlzUzBGQlMwRXNVMEZCVEN4RFFVRmxSU3hQUVVGbUxFTkJRWFZDU0N4UlFVRjJRaXhEUVVGdVFpeEhRVUZ6UkN4RFFVRkRMRU5CUVRkRk8wRkJRMEVzVVVGQlNVMHNhMEpCUVd0Q0xFTkJRVU1zUTBGQmRrSXNSVUZCTUVJN1FVRkRlRUlzVjBGQlMwb3NXVUZCVER0QlFVTkJMRmRCUVV0RUxGTkJRVXdzUTBGQlpVMHNUVUZCWml4RFFVRnpRa1FzWVVGQmRFSXNSVUZCY1VNc1EwRkJja003UVVGRFJEdEJRVU5FTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzIxQ1FVVkVhRUlzWVN3MFFrRkJaMEk3UVVGRFpDeFJRVUZOYWtJc1ZVRkJWU3hMUVVGTGJVSXNSMEZCVEN4RlFVRm9RanRCUVVOQkxGTkJRVXNzU1VGQlNXZENMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1N4TFFVRkxUaXhaUVVGNlFpeEZRVUYxUTAwc1IwRkJka01zUlVGQk5FTTdRVUZETVVNc1YwRkJTMUFzVTBGQlRDeERRVUZsVHl4RFFVRm1MRVZCUVd0Q2JrTXNUMEZCYkVJc1JVRkJNa0lzU1VGQk0wSTdRVUZEUkR0QlFVTkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPenM3TzJ0Q1FVZFpVQ3hOSWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2diMjVHY21GdFpWVndaR0YwWlN3Z1kyRnVZMlZzVDI1R2NtRnRaVlZ3WkdGMFpTd2dkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxJSDBnWm5KdmJTQW5MaTR2Wm5KaGJXVnplVzVqSnp0Y2JtbHRjRzl5ZENCN0lITndaV1ZrVUdWeVUyVmpiMjVrSUgwZ1puSnZiU0FuTGk0dmFXNWpMMk5oYkdNbk8xeHVYRzVqYkdGemN5QkJZM1JwYjI0Z2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeWtnZTF4dUlDQWdJSFJvYVhNdWMyTm9aV1IxYkdWa1ZYQmtZWFJsSUQwZ2RHaHBjeTV6WTJobFpIVnNaV1JWY0dSaGRHVXVZbWx1WkNoMGFHbHpLVHRjYmx4dUlDQWdJSFJvYVhNdWNISnZjSE1nUFNCN1hHNGdJQ0FnSUNBdUxpNTBhR2x6TG1OdmJuTjBjblZqZEc5eUxtUmxabUYxYkhSUWNtOXdjMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQjBhR2x6TG5ObGRGQnliM0J6S0hCeWIzQnpLVHRjYmx4dUlDQWdJSFJvYVhNdVkzVnljbVZ1ZENBOUlIQnliM0J6TG1OMWNuSmxiblFnZkh3Z2NISnZjSE11Wm5KdmJTQjhmQ0F3TzF4dUlDQjlYRzVjYmlBZ2MzUmhjblFvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJ2YmxOMFlYSjBMQ0JmYjI1VGRHRnlkQ3dnY0dGemMybDJaU0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNibHh1SUNBZ0lHbG1JQ2doY0dGemMybDJaU2tnZTF4dUlDQWdJQ0FnZEdocGN5NWZhWE5CWTNScGRtVWdQU0IwY25WbE8xeHVJQ0FnSUNBZ2IyNUdjbUZ0WlZWd1pHRjBaU2gwYUdsekxuTmphR1ZrZFd4bFpGVndaR0YwWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YjI1VGRHRnlkQ2tnZEdocGN5NXZibE4wWVhKMEtDazdYRzRnSUNBZ2FXWWdLRzl1VTNSaGNuUXBJRzl1VTNSaGNuUW9kR2hwY3lrN1hHNGdJQ0FnYVdZZ0tGOXZibE4wWVhKMEtTQmZiMjVUZEdGeWRDaDBhR2x6S1R0Y2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdjM1J2Y0NncElIdGNiaUFnSUNCamIyNXpkQ0I3SUc5dVUzUnZjQ3dnWDI5dVUzUnZjQ3dnY0dGemMybDJaU0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNibHh1SUNBZ0lHbG1JQ2doY0dGemMybDJaU2tnZTF4dUlDQWdJQ0FnZEdocGN5NWZhWE5CWTNScGRtVWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lHTmhibU5sYkU5dVJuSmhiV1ZWY0dSaGRHVW9kR2hwY3k1elkyaGxaSFZzWldSVmNHUmhkR1VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbTl1VTNSdmNDa2dkR2hwY3k1dmJsTjBiM0FvS1R0Y2JpQWdJQ0JwWmlBb2IyNVRkRzl3S1NCdmJsTjBiM0FvZEdocGN5azdYRzRnSUNBZ2FXWWdLRjl2YmxOMGIzQXBJRjl2YmxOMGIzQW9kR2hwY3lrN1hHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJR052YlhCc1pYUmxLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2diMjVEYjIxd2JHVjBaU3dnWDI5dVEyOXRjR3hsZEdVZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc1Y2JpQWdJQ0IwYUdsekxuTjBiM0FvS1R0Y2JseHVJQ0FnSUdsbUlDaDBhR2x6TG05dVEyOXRjR3hsZEdVcElIUm9hWE11YjI1RGIyMXdiR1YwWlNncE8xeHVJQ0FnSUdsbUlDaHZia052YlhCc1pYUmxLU0J2YmtOdmJYQnNaWFJsS0hSb2FYTXBPMXh1SUNBZ0lHbG1JQ2hmYjI1RGIyMXdiR1YwWlNrZ1gyOXVRMjl0Y0d4bGRHVW9kR2hwY3lrN1hHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJSE5qYUdWa2RXeGxaRlZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQjBhR2x6TG14aGMzUlZjR1JoZEdWa0lEMGdkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxLQ2s3WEc0Z0lDQWdkR2hwY3k1d2NtVjJJRDBnZEdocGN5NWpkWEp5Wlc1ME8xeHVYRzRnSUNBZ1kyOXVjM1FnZXlCdmJsVndaR0YwWlN3Z2NHRnpjMmwyWlNCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmx4dUlDQWdJR2xtSUNoMGFHbHpMblZ3WkdGMFpTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1amRYSnlaVzUwSUQwZ2RHaHBjeTUxY0dSaGRHVW9kR2hwY3k1amRYSnlaVzUwS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2IyNVZjR1JoZEdVcElHOXVWWEJrWVhSbEtIUm9hWE11WTNWeWNtVnVkQ3dnZEdocGN5azdYRzRnSUNBZ2RHaHBjeTVtYVhKbFRHbHpkR1Z1WlhKektDazdYRzVjYmlBZ0lDQnBaaUFvSVhCaGMzTnBkbVVnSmlZZ2RHaHBjeTVmYVhOQlkzUnBkbVVwSUh0Y2JpQWdJQ0FnSUc5dVJuSmhiV1ZWY0dSaGRHVW9kR2hwY3k1elkyaGxaSFZzWldSVmNHUmhkR1VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbWx6UVdOMGFXOXVRMjl0Y0d4bGRHVWdKaVlnZEdocGN5NXBjMEZqZEdsdmJrTnZiWEJzWlhSbEtDa3BJSHRjYmlBZ0lDQWdJSFJvYVhNdVkyOXRjR3hsZEdVb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJSE5sZEZCeWIzQnpLSEJ5YjNCektTQjdYRzRnSUNBZ2RHaHBjeTV3Y205d2N5QTlJSHRjYmlBZ0lDQWdJQzR1TG5Sb2FYTXVjSEp2Y0hNc1hHNGdJQ0FnSUNBdUxpNXdjbTl3YzF4dUlDQWdJSDA3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCblpYUW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WTNWeWNtVnVkRHRjYmlBZ2ZWeHVYRzRnSUhObGRDaDJLU0I3WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwSUQwZ2RqdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJR2RsZEZCeWIzQW9hMlY1S1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWNISnZjSE5iYTJWNVhUdGNiaUFnZlZ4dVhHNGdJR2RsZEZabGJHOWphWFI1S0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ6Y0dWbFpGQmxjbE5sWTI5dVpDaDBhR2x6TG1OMWNuSmxiblFnTFNCMGFHbHpMbkJ5WlhZc0lIUm9hWE11YkdGemRGVndaR0YwWldRcE8xeHVJQ0I5WEc1Y2JpQWdhWE5CWTNScGRtVW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDJselFXTjBhWFpsTzF4dUlDQjlYRzVjYmlBZ1lXUmtUR2x6ZEdWdVpYSW9iR2x6ZEdWdVpYSXBJSHRjYmlBZ0lDQjBhR2x6TG14cGMzUmxibVZ5Y3lBOUlIUm9hWE11YkdsemRHVnVaWEp6SUh4OElGdGRPMXh1SUNBZ0lIUm9hWE11Ym5WdFRHbHpkR1Z1WlhKeklEMGdkR2hwY3k1dWRXMU1hWE4wWlc1bGNuTWdmSHdnTUR0Y2JpQWdJQ0JwWmlBb2RHaHBjeTVzYVhOMFpXNWxjbk11YVc1a1pYaFBaaWhzYVhOMFpXNWxjaWtnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteHBjM1JsYm1WeWN5NXdkWE5vS0d4cGMzUmxibVZ5S1R0Y2JpQWdJQ0FnSUhSb2FYTXViblZ0VEdsemRHVnVaWEp6S3lzN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2NtVnRiM1psVEdsemRHVnVaWElvYkdsemRHVnVaWElwSUh0Y2JpQWdJQ0JqYjI1emRDQnNhWE4wWlc1bGNrbHVaR1Y0SUQwZ0tIUm9hWE11YkdsemRHVnVaWEp6S1NBL0lIUm9hWE11YkdsemRHVnVaWEp6TG1sdVpHVjRUMllvYkdsemRHVnVaWElwSURvZ0xURTdYRzRnSUNBZ2FXWWdLR3hwYzNSbGJtVnlTVzVrWlhnZ0lUMDlJQzB4S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbTUxYlV4cGMzUmxibVZ5Y3kwdE8xeHVJQ0FnSUNBZ2RHaHBjeTVzYVhOMFpXNWxjbk11YzNCc2FXTmxLR3hwYzNSbGJtVnlTVzVrWlhnc0lERXBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJR1pwY21WTWFYTjBaVzVsY25Nb0tTQjdYRzRnSUNBZ1kyOXVjM1FnWTNWeWNtVnVkQ0E5SUhSb2FYTXVaMlYwS0NrN1hHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbTUxYlV4cGMzUmxibVZ5Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteHBjM1JsYm1WeWMxdHBYU2hqZFhKeVpXNTBMQ0IwYUdsektUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1FXTjBhVzl1TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVuZGVyZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuZGVyZXIpO1xuXG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcywgcHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMuY2hhbmdlZFZhbHVlcyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IHN0YXRlLlxuICAgKiBJZiBga2V5YCBpcyBub3QgZGVmaW5lZCwgcmV0dXJuIGVudGlyZSBjYWNoZWQgc3RhdGUuXG4gICAqIElmIGBrZXlgIGlzIGRlZmluZWQsIHJldHVybiBjYWNoZWQgdmFsdWUgaWYgcHJlc2VudC5cbiAgICogSWYgYGtleWAgaXMgZGVmaW5lZCBhbmQgY2FjaGVkIHZhbHVlIGlzIG5vdCBwcmVzZW50LCByZWFkIGFuZCByZXR1cm4uXG4gICAqIEBwYXJhbSAge3N0cmluZ30gKG9wdGlvbmFsKSBrZXkgb2YgdmFsdWVcbiAgICogQHJldHVybiB7dmFsdWV9XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQoa2V5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZWFkIHZhbHVlIGFjY29yZGluZyB0byBgb25SZWFkYFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IE5hbWUgb2YgcHJvcGVydHkgdG8gcmVhZFxuICAgKiBAcmV0dXJuIHtbdHlwZV19XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiByZWFkKGtleSkge1xuICAgIGlmICh0aGlzLm9uUmVhZCkge1xuICAgICAgcmV0dXJuIHRoaXMub25SZWFkKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgYHN0YXRlYCB3aXRoIG5ldyB2YWx1ZXMgYW5kIHNjaGVkdWxlIGByZW5kZXJgLlxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzXG4gICAqIEBwYXJhbSB7dmFsdWV9IHZhbHVlIHRvc2V0XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgdmFsdWVzID0gYXJnc1swXTtcbiAgICAgIC8vIFNldCBtdWx0aXBsZSB2YWx1ZXNcblxuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICB0aGlzLnNldFZhbHVlKGtleSwgdmFsdWVzW2tleV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2tleTIgPSBhcmdzWzBdLFxuICAgICAgICAgIHZhbHVlID0gYXJnc1sxXTtcblxuICAgICAgdGhpcy5zZXRWYWx1ZShfa2V5MiwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVSZW5kZXIpKHRoaXMucmVuZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyA+IFdpbGV5IC0gNiBpbiB0aGUgTW9ybmluZ1xuICAvKipcbiAgICogU2V0IGEgc2luZ2xlIHZhbHVlXG4gICAqIElmIGEgc3RyaW5nIG9yIG51bWJlciwgc2V0IGRpcmVjdGx5LlxuICAgKiBJZiBhbiBvYmplY3Qgb3IgYXJyYXksIGNyZWF0ZSBuZXcgb2JqZWN0IG9yIGFycmF5XG4gICAqIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC4gVGhlbiBzaGFsbG93IGNvbXBhcmVcbiAgICogdG8gc2V0IGFuZCBjb21wYXJlIGluZGl2aWR1YWwgdmFsdWVzLlxuICAgKiBPbmUgb2YgdGhlIGNsZWFyZXIgZHJhd2JhY2tzIGFuZCBhbm5veWFuY2VzIHdpdGhcbiAgICogdXNpbmcgbXV0YWJsZSBpbnN0ZWFkIG9mIGltbXV0YWJsZSBzdGF0ZXMuXG4gICAqIEBwYXJhbSB7W3R5cGVdfSBrZXlcbiAgICogQHBhcmFtIHtbdHlwZV19IHZhbHVlXG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gc2V0VmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSB0aGlzLnN0YXRlW2tleV07XG5cbiAgICAvLyBJZiBudW1iZXIgb3Igc3RyaW5nLCBzZXQgZGlyZWN0bHlcbiAgICBpZiAoKDAsIF91dGlscy5pc051bSkodmFsdWUpIHx8ICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlKSkge1xuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLmlzQXJyYXkpKHZhbHVlKSkge1xuICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gW107XG4gICAgICB9XG5cbiAgICAgIHZhciBudW1WYWx1ZXMgPSB2YWx1ZS5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVZhbHVlczsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV1baV0gIT09IHZhbHVlW2ldKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldW2ldID0gdmFsdWVbaV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc09iaikodmFsdWUpKSB7XG4gICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgdmFsdWVLZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gIT09IHZhbHVlW3ZhbHVlS2V5XSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gPSB2YWx1ZVt2YWx1ZUtleV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5wdXNoKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBGaXJlcyBgb25SZW5kZXJgIGlmIHZhbHVlcyBoYXZlIGNoYW5nZWQgb3IgYGZvcmNlUmVuZGVyYFxuICAgKiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBmb3JjZVJlbmRlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICBpZiAoKGZvcmNlUmVuZGVyIHx8IHRoaXMuaGFzQ2hhbmdlZCkgJiYgdGhpcy5vblJlbmRlcikge1xuICAgICAgdGhpcy5vblJlbmRlcigpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIFJlbmRlcmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sc2lVbVZ1WkdWeVpYSWlMQ0p3Y205d2N5SXNJbkpsYm1SbGNpSXNJbUpwYm1RaUxDSmpiMjV6ZEhKMVkzUnZjaUlzSW1SbFptRjFiSFJRY205d2N5SXNJbk4wWVhSbElpd2lZMmhoYm1kbFpGWmhiSFZsY3lJc0ltZGxkQ0lzSW10bGVTSXNJblZ1WkdWbWFXNWxaQ0lzSW5KbFlXUWlMQ0p2YmxKbFlXUWlMQ0p6WlhRaUxDSmhjbWR6SWl3aWRtRnNkV1Z6SWl3aWMyVjBWbUZzZFdVaUxDSjJZV3gxWlNJc0ltaGhjME5vWVc1blpXUWlMQ0pqZFhKeVpXNTBWbUZzZFdVaUxDSnVkVzFXWVd4MVpYTWlMQ0pzWlc1bmRHZ2lMQ0pwSWl3aWRtRnNkV1ZMWlhraUxDSndkWE5vSWl3aVptOXlZMlZTWlc1a1pYSWlMQ0p2YmxKbGJtUmxjaUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPMEZCUTBFN096czdTVUZGVFVFc1VUdEJRVU5LTEc5Q1FVRlpReXhMUVVGYUxFVkJRVzFDTzBGQlFVRTdPMEZCUTJwQ0xGTkJRVXRETEUxQlFVd3NSMEZCWXl4TFFVRkxRU3hOUVVGTUxFTkJRVmxETEVsQlFWb3NRMEZCYVVJc1NVRkJha0lzUTBGQlpEczdRVUZGUVN4VFFVRkxSaXhMUVVGTUxHZENRVU5MTEV0QlFVdEhMRmRCUVV3c1EwRkJhVUpETEZsQlJIUkNMRVZCUlV0S0xFdEJSa3c3TzBGQlMwRXNVMEZCUzBzc1MwRkJUQ3hIUVVGaExFVkJRV0k3UVVGRFFTeFRRVUZMUXl4aFFVRk1MRWRCUVhGQ0xFVkJRWEpDTzBGQlEwUTdPMEZCUlVRN096czdPenM3T3pzN2NVSkJVVUZETEVjc1owSkJRVWxETEVjc1JVRkJTenRCUVVOUUxGRkJRVWxCTEVkQlFVb3NSVUZCVXp0QlFVTlFMRlZCUVVrc1MwRkJTMGdzUzBGQlRDeERRVUZYUnl4SFFVRllMRTFCUVc5Q1F5eFRRVUY0UWl4RlFVRnRRenRCUVVOcVF5eGxRVUZQTEV0QlFVdEtMRXRCUVV3c1EwRkJWMGNzUjBGQldDeERRVUZRTzBGQlEwUXNUMEZHUkN4TlFVVlBPMEZCUTB3c1pVRkJUeXhMUVVGTFJTeEpRVUZNTEVOQlFWVkdMRWRCUVZZc1EwRkJVRHRCUVVORU8wRkJRMFlzUzBGT1JDeE5RVTFQTzBGQlEwd3NZVUZCVHl4TFFVRkxTQ3hMUVVGYU8wRkJRMFE3UVVGRFJpeEhPenRCUVVWRU96czdPenM3TzNGQ1FVdEJTeXhKTEdsQ1FVRkxSaXhITEVWQlFVczdRVUZEVWl4UlFVRkpMRXRCUVV0SExFMUJRVlFzUlVGQmFVSTdRVUZEWml4aFFVRlBMRXRCUVV0QkxFMUJRVXdzUTBGQldVZ3NSMEZCV2l4RFFVRlFPMEZCUTBRN1FVRkRSaXhIT3p0QlFVVkVPenM3T3pzN08zRkNRVXRCU1N4SExHdENRVUZoTzBGQlFVRXNjME5CUVU1RExFbEJRVTA3UVVGQlRrRXNWVUZCVFR0QlFVRkJPenRCUVVOWUxGRkJRVWtzVDBGQlQwRXNTMEZCU3l4RFFVRk1MRU5CUVZBc1MwRkJiVUlzVjBGQmRrSXNSVUZCYjBNN1FVRkJRU3hWUVVNeFFrTXNUVUZFTUVJc1IwRkRaa1FzU1VGRVpUdEJRVVZzUXpzN1FVRkRRU3hYUVVGTExFbEJRVTFNTEVkQlFWZ3NTVUZCYTBKTkxFMUJRV3hDTEVWQlFUQkNPMEZCUTNoQ0xHRkJRVXRETEZGQlFVd3NRMEZCWTFBc1IwRkJaQ3hGUVVGdFFrMHNUMEZCVDA0c1IwRkJVQ3hEUVVGdVFqdEJRVU5FTzBGQlEwWXNTMEZPUkN4TlFVMVBPMEZCUVVFc1ZVRkRSMEVzUzBGRVNDeEhRVU5yUWtzc1NVRkViRUk3UVVGQlFTeFZRVU5SUnl4TFFVUlNMRWRCUTJ0Q1NDeEpRVVJzUWpzN1FVRkZUQ3hYUVVGTFJTeFJRVUZNTEVOQlFXTlFMRXRCUVdRc1JVRkJiVUpSTEV0QlFXNUNPMEZCUTBRN08wRkJSVVFzVVVGQlNTeExRVUZMUXl4VlFVRlVMRVZCUVhGQ08wRkJRMjVDTEc5RFFVRmpMRXRCUVV0b1FpeE5RVUZ1UWp0QlFVTkVPenRCUVVWRUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08wRkJSVVE3UVVGRFFUczdPenM3T3pzN096czdPenR4UWtGWFFXTXNVU3h4UWtGQlUxQXNSeXhGUVVGTFVTeExMRVZCUVU4N1FVRkRia0lzVVVGQlRVVXNaVUZCWlN4TFFVRkxZaXhMUVVGTUxFTkJRVmRITEVkQlFWZ3NRMEZCY2tJN08wRkJSVUU3UVVGRFFTeFJRVUZKTEd0Q1FVRk5VU3hMUVVGT0xFdEJRV2RDTEhGQ1FVRlRRU3hMUVVGVUxFTkJRWEJDTEVWQlFYRkRPMEZCUTI1RExGVkJRVWxGTEdsQ1FVRnBRa1lzUzBGQmNrSXNSVUZCTkVJN1FVRkRNVUlzWVVGQlMxZ3NTMEZCVEN4RFFVRlhSeXhIUVVGWUxFbEJRV3RDVVN4TFFVRnNRanRCUVVOQkxHRkJRVXRETEZWQlFVd3NSMEZCYTBJc1NVRkJiRUk3UVVGRFJEdEJRVU5HTEV0QlRFUXNUVUZMVHl4SlFVRkpMRzlDUVVGUlJDeExRVUZTTEVOQlFVb3NSVUZCYjBJN1FVRkRla0lzVlVGQlNTeERRVUZEUlN4WlFVRk1MRVZCUVcxQ08wRkJRMnBDTEdGQlFVdGlMRXRCUVV3c1EwRkJWMGNzUjBGQldDeEpRVUZyUWl4RlFVRnNRanRCUVVORU96dEJRVVZFTEZWQlFVMVhMRmxCUVZsSUxFMUJRVTFKTEUxQlFYaENPMEZCUTBFc1YwRkJTeXhKUVVGSlF5eEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWxHTEZOQlFYQkNMRVZCUVN0Q1JTeEhRVUV2UWl4RlFVRnZRenRCUVVOc1F5eFpRVUZKTEV0QlFVdG9RaXhMUVVGTUxFTkJRVmRITEVkQlFWZ3NSVUZCWjBKaExFTkJRV2hDTEUxQlFYVkNUQ3hOUVVGTlN5eERRVUZPTEVOQlFUTkNMRVZCUVhGRE8wRkJRMjVETEdWQlFVdG9RaXhMUVVGTUxFTkJRVmRITEVkQlFWZ3NSVUZCWjBKaExFTkJRV2hDTEVsQlFYRkNUQ3hOUVVGTlN5eERRVUZPTEVOQlFYSkNPMEZCUTBFc1pVRkJTMG9zVlVGQlRDeEhRVUZyUWl4SlFVRnNRanRCUVVORU8wRkJRMFk3UVVGRFJpeExRVnBOTEUxQldVRXNTVUZCU1N4clFrRkJUVVFzUzBGQlRpeERRVUZLTEVWQlFXdENPMEZCUTNaQ0xGVkJRVWtzUTBGQlEwVXNXVUZCVEN4RlFVRnRRanRCUVVOcVFpeGhRVUZMWWl4TFFVRk1MRU5CUVZkSExFZEJRVmdzU1VGQmEwSXNSVUZCYkVJN1FVRkRSRHM3UVVGRlJDeFhRVUZMTEVsQlFVbGpMRkZCUVZRc1NVRkJjVUpPTEV0QlFYSkNMRVZCUVRSQ08wRkJRekZDTEZsQlFVa3NTMEZCUzFnc1MwRkJUQ3hEUVVGWFJ5eEhRVUZZTEVWQlFXZENZeXhSUVVGb1FpeE5RVUU0UWs0c1RVRkJUVTBzVVVGQlRpeERRVUZzUXl4RlFVRnRSRHRCUVVOcVJDeGxRVUZMYWtJc1MwRkJUQ3hEUVVGWFJ5eEhRVUZZTEVWQlFXZENZeXhSUVVGb1FpeEpRVUUwUWs0c1RVRkJUVTBzVVVGQlRpeERRVUUxUWp0QlFVTkJMR1ZCUVV0TUxGVkJRVXdzUjBGQmEwSXNTVUZCYkVJN1FVRkRSRHRCUVVOR08wRkJRMFk3TzBGQlJVUXNVVUZCU1N4TFFVRkxRU3hWUVVGVUxFVkJRWEZDTzBGQlEyNUNMRmRCUVV0WUxHRkJRVXdzUTBGQmJVSnBRaXhKUVVGdVFpeERRVUYzUW1Zc1IwRkJlRUk3UVVGRFJEdEJRVU5HTEVjN08wRkJSVVE3T3pzN096czdjVUpCUzBGUUxFMHNjVUpCUVRSQ08wRkJRVUVzVVVGQmNrSjFRaXhYUVVGeFFpeDFSVUZCVUN4TFFVRlBPenRCUVVNeFFpeFJRVUZKTEVOQlFVTkJMR1ZCUVdVc1MwRkJTMUFzVlVGQmNrSXNTMEZCYjBNc1MwRkJTMUVzVVVGQk4wTXNSVUZCZFVRN1FVRkRja1FzVjBGQlMwRXNVVUZCVER0QlFVTkVPenRCUVVWRUxGTkJRVXR1UWl4aFFVRk1MRU5CUVcxQ1l5eE5RVUZ1UWl4SFFVRTBRaXhEUVVFMVFqdEJRVU5CTEZOQlFVdElMRlZCUVV3c1IwRkJhMElzUzBGQmJFSTdPMEZCUlVFc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN096czdhMEpCUjFsc1FpeFJJaXdpWm1sc1pTSTZJbWx1WkdWNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2IyNUdjbUZ0WlZKbGJtUmxjaUI5SUdaeWIyMGdKeTR1TDJaeVlXMWxjM2x1WXljN1hHNXBiWEJ2Y25RZ2V5QnBjMEZ5Y21GNUxDQnBjMDlpYWl3Z2FYTk9kVzBzSUdselUzUnlhVzVuSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTJ4aGMzTWdVbVZ1WkdWeVpYSWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVjbVZ1WkdWeUlEMGdkR2hwY3k1eVpXNWtaWEl1WW1sdVpDaDBhR2x6S1R0Y2JseHVJQ0FnSUhSb2FYTXVjSEp2Y0hNZ1BTQjdYRzRnSUNBZ0lDQXVMaTUwYUdsekxtTnZibk4wY25WamRHOXlMbVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUM0dUxuQnliM0J6WEc0Z0lDQWdmVHRjYmx4dUlDQWdJSFJvYVhNdWMzUmhkR1VnUFNCN2ZUdGNiaUFnSUNCMGFHbHpMbU5vWVc1blpXUldZV3gxWlhNZ1BTQmJYVHRjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCSFpYUWdZM1Z5Y21WdWRDQnpkR0YwWlM1Y2JpQWdJQ29nU1dZZ1lHdGxlV0FnYVhNZ2JtOTBJR1JsWm1sdVpXUXNJSEpsZEhWeWJpQmxiblJwY21VZ1kyRmphR1ZrSUhOMFlYUmxMbHh1SUNBZ0tpQkpaaUJnYTJWNVlDQnBjeUJrWldacGJtVmtMQ0J5WlhSMWNtNGdZMkZqYUdWa0lIWmhiSFZsSUdsbUlIQnlaWE5sYm5RdVhHNGdJQ0FxSUVsbUlHQnJaWGxnSUdseklHUmxabWx1WldRZ1lXNWtJR05oWTJobFpDQjJZV3gxWlNCcGN5QnViM1FnY0hKbGMyVnVkQ3dnY21WaFpDQmhibVFnY21WMGRYSnVMbHh1SUNBZ0tpQkFjR0Z5WVcwZ0lIdHpkSEpwYm1kOUlDaHZjSFJwYjI1aGJDa2dhMlY1SUc5bUlIWmhiSFZsWEc0Z0lDQXFJRUJ5WlhSMWNtNGdlM1poYkhWbGZWeHVJQ0FnS2k5Y2JpQWdaMlYwS0d0bGVTa2dlMXh1SUNBZ0lHbG1JQ2hyWlhrcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxuTjBZWFJsVzJ0bGVWMGdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV6ZEdGMFpWdHJaWGxkTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWNtVmhaQ2hyWlhrcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1emRHRjBaVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nVW1WaFpDQjJZV3gxWlNCaFkyTnZjbVJwYm1jZ2RHOGdZRzl1VW1WaFpHQmNiaUFnSUNvZ1FIQmhjbUZ0SUNCN2MzUnlhVzVuZlNCT1lXMWxJRzltSUhCeWIzQmxjblI1SUhSdklISmxZV1JjYmlBZ0lDb2dRSEpsZEhWeWJpQjdXM1I1Y0dWZGZWeHVJQ0FnS2k5Y2JpQWdjbVZoWkNoclpYa3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXZibEpsWVdRcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTl1VW1WaFpDaHJaWGtwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCVmNHUmhkR1VnWUhOMFlYUmxZQ0IzYVhSb0lHNWxkeUIyWVd4MVpYTWdZVzVrSUhOamFHVmtkV3hsSUdCeVpXNWtaWEpnTGx4dUlDQWdLaUJBY0dGeVlXMGdlMjlpYW1WamRIMGdkbUZzZFdWelhHNGdJQ0FxSUVCd1lYSmhiU0I3ZG1Gc2RXVjlJSFpoYkhWbElIUnZjMlYwWEc0Z0lDQXFMMXh1SUNCelpYUW9MaTR1WVhKbmN5a2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdZWEpuYzFzeFhTQTlQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBZ0lHTnZibk4wSUZzZ2RtRnNkV1Z6SUYwZ1BTQmhjbWR6TzF4dUlDQWdJQ0FnTHk4Z1UyVjBJRzExYkhScGNHeGxJSFpoYkhWbGMxeHVJQ0FnSUNBZ1ptOXlJQ2hqYjI1emRDQnJaWGtnYVc0Z2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJWMFZtRnNkV1VvYTJWNUxDQjJZV3gxWlhOYmEyVjVYU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHTnZibk4wSUZzZ2EyVjVMQ0IyWVd4MVpTQmRJRDBnWVhKbmN6dGNiaUFnSUNBZ0lIUm9hWE11YzJWMFZtRnNkV1VvYTJWNUxDQjJZV3gxWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YUdGelEyaGhibWRsWkNrZ2UxeHVJQ0FnSUNBZ2IyNUdjbUZ0WlZKbGJtUmxjaWgwYUdsekxuSmxibVJsY2lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQXZMeUErSUZkcGJHVjVJQzBnTmlCcGJpQjBhR1VnVFc5eWJtbHVaMXh1SUNBdktpcGNiaUFnSUNvZ1UyVjBJR0VnYzJsdVoyeGxJSFpoYkhWbFhHNGdJQ0FxSUVsbUlHRWdjM1J5YVc1bklHOXlJRzUxYldKbGNpd2djMlYwSUdScGNtVmpkR3g1TGx4dUlDQWdLaUJKWmlCaGJpQnZZbXBsWTNRZ2IzSWdZWEp5WVhrc0lHTnlaV0YwWlNCdVpYY2diMkpxWldOMElHOXlJR0Z5Y21GNVhHNGdJQ0FxSUdsbUlHbDBJR1J2WlhOdUozUWdZV3h5WldGa2VTQmxlR2x6ZEM0Z1ZHaGxiaUJ6YUdGc2JHOTNJR052YlhCaGNtVmNiaUFnSUNvZ2RHOGdjMlYwSUdGdVpDQmpiMjF3WVhKbElHbHVaR2wyYVdSMVlXd2dkbUZzZFdWekxseHVJQ0FnS2lCUGJtVWdiMllnZEdobElHTnNaV0Z5WlhJZ1pISmhkMkpoWTJ0eklHRnVaQ0JoYm01dmVXRnVZMlZ6SUhkcGRHaGNiaUFnSUNvZ2RYTnBibWNnYlhWMFlXSnNaU0JwYm5OMFpXRmtJRzltSUdsdGJYVjBZV0pzWlNCemRHRjBaWE11WEc0Z0lDQXFJRUJ3WVhKaGJTQjdXM1I1Y0dWZGZTQnJaWGxjYmlBZ0lDb2dRSEJoY21GdElIdGJkSGx3WlYxOUlIWmhiSFZsWEc0Z0lDQXFMMXh1SUNCelpYUldZV3gxWlNoclpYa3NJSFpoYkhWbEtTQjdYRzRnSUNBZ1kyOXVjM1FnWTNWeWNtVnVkRlpoYkhWbElEMGdkR2hwY3k1emRHRjBaVnRyWlhsZE8xeHVYRzRnSUNBZ0x5OGdTV1lnYm5WdFltVnlJRzl5SUhOMGNtbHVaeXdnYzJWMElHUnBjbVZqZEd4NVhHNGdJQ0FnYVdZZ0tHbHpUblZ0S0haaGJIVmxLU0I4ZkNCcGMxTjBjbWx1WnloMllXeDFaU2twSUh0Y2JpQWdJQ0FnSUdsbUlDaGpkWEp5Wlc1MFZtRnNkV1VnSVQwOUlIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFNBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhoYzBOb1lXNW5aV1FnUFNCMGNuVmxPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9hWE5CY25KaGVTaDJZV3gxWlNrcElIdGNiaUFnSUNBZ0lHbG1JQ2doWTNWeWNtVnVkRlpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1ZiYTJWNVhTQTlJRnRkTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCamIyNXpkQ0J1ZFcxV1lXeDFaWE1nUFNCMllXeDFaUzVzWlc1bmRHZzdYRzRnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlZaaGJIVmxjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbk4wWVhSbFcydGxlVjFiYVYwZ0lUMDlJSFpoYkhWbFcybGRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpWdHJaWGxkVzJsZElEMGdkbUZzZFdWYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9hWE5QWW1vb2RtRnNkV1VwS1NCN1hHNGdJQ0FnSUNCcFppQW9JV04xY25KbGJuUldZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYwZ1BTQjdmVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnWm05eUlDaHNaWFFnZG1Gc2RXVkxaWGtnYVc0Z2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWMzUmhkR1ZiYTJWNVhWdDJZV3gxWlV0bGVWMGdJVDA5SUhaaGJIVmxXM1poYkhWbFMyVjVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFZ0MllXeDFaVXRsZVYwZ1BTQjJZV3gxWlZ0MllXeDFaVXRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdkR2hwY3k1b1lYTkRhR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBhR2x6TG1oaGMwTm9ZVzVuWldRcElIdGNiaUFnSUNBZ0lIUm9hWE11WTJoaGJtZGxaRlpoYkhWbGN5NXdkWE5vS0d0bGVTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRVpwY21WeklHQnZibEpsYm1SbGNtQWdhV1lnZG1Gc2RXVnpJR2hoZG1VZ1kyaGhibWRsWkNCdmNpQmdabTl5WTJWU1pXNWtaWEpnWEc0Z0lDQXFJR2x6SUhObGRDQjBieUIwY25WbExseHVJQ0FnS2lCQWNtVjBkWEp1SUh0MGFHbHpmVnh1SUNBZ0tpOWNiaUFnY21WdVpHVnlLR1p2Y21ObFVtVnVaR1Z5SUQwZ1ptRnNjMlVwSUh0Y2JpQWdJQ0JwWmlBb0tHWnZjbU5sVW1WdVpHVnlJSHg4SUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ2tnSmlZZ2RHaHBjeTV2YmxKbGJtUmxjaWtnZTF4dUlDQWdJQ0FnZEdocGN5NXZibEpsYm1SbGNpZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIUm9hWE11WTJoaGJtZGxaRlpoYkhWbGN5NXNaVzVuZEdnZ1BTQXdPMXh1SUNBZ0lIUm9hWE11YUdGelEyaGhibWRsWkNBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1VtVnVaR1Z5WlhJN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDU1NSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudCxcbiAgICBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbjogdHJ1ZVxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9yZW5kZXIgPSByZXF1aXJlKCcuL3JlbmRlcicpO1xuXG52YXIgX3JlbmRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW5kZXIpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZXMpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ1NTUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhDU1NSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBDU1NSZW5kZXJlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ1NTUmVuZGVyZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENTU1JlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBlbGVtZW50ID0gX3Byb3BzLmVsZW1lbnQsXG4gICAgICAgIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uID0gX3Byb3BzLmVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uO1xuXG4gICAgKDAsIF9yZW5kZXIyLmRlZmF1bHQpKGVsZW1lbnQsIHRoaXMuc3RhdGUsIHRoaXMuY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pO1xuICB9O1xuXG4gIENTU1JlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgdmFyIHZhbHVlVHlwZSA9IF92YWx1ZVR5cGVzMi5kZWZhdWx0W2tleV07XG5cbiAgICBpZiAoIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgICAgdmFyIGRvbVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClbKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoa2V5KV0gfHwgMDtcbiAgICAgIHJldHVybiB2YWx1ZVR5cGUgJiYgdmFsdWVUeXBlLnBhcnNlID8gdmFsdWVUeXBlLnBhcnNlKGRvbVZhbHVlKSA6IGRvbVZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWVUeXBlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVR5cGUuZGVmYXVsdCB8fCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDU1NSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYkltVnNaVzFsYm5RaUxDSndjbTl3Y3lJc0lrTlRVMUpsYm1SbGNtVnlJaXdpWlc1aFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjRpTENKdmJsSmxibVJsY2lJc0luTjBZWFJsSWl3aVkyaGhibWRsWkZaaGJIVmxjeUlzSW05dVVtVmhaQ0lzSW10bGVTSXNJblpoYkhWbFZIbHdaU0lzSW1SdmJWWmhiSFZsSWl3aWQybHVaRzkzSWl3aVoyVjBRMjl0Y0hWMFpXUlRkSGxzWlNJc0luQmhjbk5sSWl3aVpHVm1ZWFZzZENKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08ydENRVFpDWlN4VlFVRlZRU3hQUVVGV0xFVkJRVzFDUXl4TFFVRnVRaXhGUVVFd1FqdEJRVU4yUXl4VFFVRlBMRWxCUVVsRExGZEJRVW83UVVGRFRFWXNiMEpCUkVzN1FVRkZURWNzWjBOQlFUUkNPMEZCUm5aQ0xFdEJSMFpHTEV0QlNFVXNSVUZCVUR0QlFVdEVMRU03TzBGQmJrTkVPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenM3T3pzN096dEpRVVZOUXl4WE96czdPenM3T3pzN2QwSkJRMHBGTEZFc2RVSkJRVmM3UVVGQlFTeHBRa0ZEZFVNc1MwRkJTMGdzUzBGRU5VTTdRVUZCUVN4UlFVTkVSQ3hQUVVSRExGVkJRMFJCTEU5QlJFTTdRVUZCUVN4UlFVTlJSeXd3UWtGRVVpeFZRVU5SUVN3d1FrRkVVanM3UVVGRlZDd3dRa0ZCVlVnc1QwRkJWaXhGUVVGdFFpeExRVUZMU3l4TFFVRjRRaXhGUVVFclFpeExRVUZMUXl4aFFVRndReXhGUVVGdFJFZ3NNRUpCUVc1RU8wRkJRMFFzUnpzN2QwSkJSVVJKTEUwc2JVSkJRVTlETEVjc1JVRkJTenRCUVVOV0xGRkJRVTFETEZsQlFWa3NjVUpCUVdORUxFZEJRV1FzUTBGQmJFSTdPMEZCUlVFc1VVRkJTU3hEUVVGRExIbENRVUZsUVN4SFFVRm1MRU5CUVV3c1JVRkJNRUk3UVVGQlFTeFZRVU5vUWxJc1QwRkVaMElzUjBGRFNpeExRVUZMUXl4TFFVUkVMRU5CUTJoQ1JDeFBRVVJuUWpzN1FVRkZlRUlzVlVGQlRWVXNWMEZCVjBNc1QwRkJUME1zWjBKQlFWQXNRMEZCZDBKYUxFOUJRWGhDTEVWQlFXbERMRWxCUVdwRExFVkJRWFZETEhkQ1FVRlRVU3hIUVVGVUxFTkJRWFpETEV0QlFYbEVMRU5CUVRGRk8wRkJRMEVzWVVGQlVVTXNZVUZCWVVFc1ZVRkJWVWtzUzBGQmVFSXNSMEZCYVVOS0xGVkJRVlZKTEV0QlFWWXNRMEZCWjBKSUxGRkJRV2hDTEVOQlFXcERMRWRCUVRaRVFTeFJRVUZ3UlR0QlFVTkVMRXRCU2tRc1RVRkpUenRCUVVOTUxGVkJRVWxFTEZOQlFVb3NSVUZCWlR0QlFVTmlMR1ZCUVU5QkxGVkJRVlZMTEU5QlFWWXNTVUZCY1VJc1EwRkJOVUk3UVVGRFJDeFBRVVpFTEUxQlJVODdRVUZEVEN4bFFVRlBMRU5CUVZBN1FVRkRSRHRCUVVOR08wRkJRMFlzUnlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlNaVzVrWlhKbGNpQm1jbTl0SUNjdUxpOG5PMXh1YVcxd2IzSjBJSEpsYm1SbGNrTlRVeUJtY205dElDY3VMM0psYm1SbGNpYzdYRzVwYlhCdmNuUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1puSnZiU0FuTGk5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUhaaGJIVmxWSGx3WlhOTllYQWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeWM3WEc1cGJYQnZjblFnY0hKbFptbDRaWElnWm5KdmJTQW5MaTl3Y21WbWFYaGxjaWM3WEc1Y2JtTnNZWE56SUVOVFUxSmxibVJsY21WeUlHVjRkR1Z1WkhNZ1VtVnVaR1Z5WlhJZ2UxeHVJQ0J2YmxKbGJtUmxjaWdwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1ZzWlcxbGJuUXNJR1Z1WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUhKbGJtUmxja05UVXlobGJHVnRaVzUwTENCMGFHbHpMbk4wWVhSbExDQjBhR2x6TG1Ob1lXNW5aV1JXWVd4MVpYTXNJR1Z1WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVLVHRjYmlBZ2ZWeHVYRzRnSUc5dVVtVmhaQ2hyWlhrcElIdGNiaUFnSUNCamIyNXpkQ0IyWVd4MVpWUjVjR1VnUFNCMllXeDFaVlI1Y0dWelRXRndXMnRsZVYwN1hHNWNiaUFnSUNCcFppQW9JWFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSHNnWld4bGJXVnVkQ0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNBZ0lHTnZibk4wSUdSdmJWWmhiSFZsSUQwZ2QybHVaRzkzTG1kbGRFTnZiWEIxZEdWa1UzUjViR1VvWld4bGJXVnVkQ3dnYm5Wc2JDbGJjSEpsWm1sNFpYSW9hMlY1S1YwZ2ZId2dNRHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW9kbUZzZFdWVWVYQmxJQ1ltSUhaaGJIVmxWSGx3WlM1d1lYSnpaU2tnUHlCMllXeDFaVlI1Y0dVdWNHRnljMlVvWkc5dFZtRnNkV1VwSURvZ1pHOXRWbUZzZFdVN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR2xtSUNoMllXeDFaVlI1Y0dVcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsVkhsd1pTNWtaV1poZFd4MElIeDhJREE3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdLR1ZzWlcxbGJuUXNJSEJ5YjNCektTQjdYRzRnSUhKbGRIVnliaUJ1WlhjZ1ExTlRVbVZ1WkdWeVpYSW9lMXh1SUNBZ0lHVnNaVzFsYm5Rc1hHNGdJQ0FnWlc1aFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjQ2SUhSeWRXVXNYRzRnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdmU2s3WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgU1ZHUmVuZGVyZXIoX2V4dGVuZHMoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU1ZHUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhTVkdSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBTVkdSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTVkdSZW5kZXJlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVuZGVyZXIuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgdmFyIF9wcm9wcyRlbGVtZW50JGdldEJCbyA9IHByb3BzLmVsZW1lbnQuZ2V0QkJveCgpLFxuICAgICAgICB4ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLngsXG4gICAgICAgIHkgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueSxcbiAgICAgICAgd2lkdGggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby5oZWlnaHQ7XG5cbiAgICBfdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHsgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFNWR1JlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgdmFyIGF0dHJzID0gKDAsIF9idWlsZDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgdGhpcy5lbGVtZW50RGltZW5zaW9ucyk7XG4gICAgKDAsIF91dGlscy5zZXRET01BdHRycykoZWxlbWVudCwgYXR0cnMpO1xuICB9O1xuXG4gIFNWR1JlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cblxuICAgIGlmICghX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmFsdWVUeXBlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRba2V5XTtcbiAgICAgIHJldHVybiB2YWx1ZVR5cGUgPyB2YWx1ZVR5cGUuZGVmYXVsdCA6IDA7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTVkdSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYkltVnNaVzFsYm5RaUxDSndjbTl3Y3lJc0lsTldSMUpsYm1SbGNtVnlJaXdpWjJWMFFrSnZlQ0lzSW5naUxDSjVJaXdpZDJsa2RHZ2lMQ0pvWldsbmFIUWlMQ0psYkdWdFpXNTBSR2x0Wlc1emFXOXVjeUlzSW05dVVtVnVaR1Z5SWl3aVlYUjBjbk1pTENKemRHRjBaU0lzSW05dVVtVmhaQ0lzSW10bGVTSXNJbWRsZEVGMGRISnBZblYwWlNJc0luWmhiSFZsVkhsd1pTSXNJbVJsWm1GMWJIUWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRyUWtGblEyVXNWVUZCVlVFc1QwRkJWaXhGUVVGdFFrTXNTMEZCYmtJc1JVRkJNRUk3UVVGRGRrTXNVMEZCVHl4SlFVRkpReXhYUVVGS08wRkJRMHhHTzBGQlJFc3NTMEZGUmtNc1MwRkdSU3hGUVVGUU8wRkJTVVFzUXpzN1FVRnlRMFE3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenM3T3pzN096dEpRVVZOUXl4WE96czdRVUZEU2l4MVFrRkJXVVFzUzBGQldpeEZRVUZ0UWp0QlFVRkJPenRCUVVGQkxHbEVRVU5xUWl4eFFrRkJUVUVzUzBGQlRpeERRVVJwUWpzN1FVRkJRU3huUTBGSFpVRXNUVUZCVFVRc1QwRkJUaXhEUVVGalJ5eFBRVUZrTEVWQlNHWTdRVUZCUVN4UlFVZFVReXhEUVVoVExIbENRVWRVUVN4RFFVaFRPMEZCUVVFc1VVRkhUa01zUTBGSVRTeDVRa0ZIVGtFc1EwRklUVHRCUVVGQkxGRkJSMGhETEV0QlNFY3NlVUpCUjBoQkxFdEJTRWM3UVVGQlFTeFJRVWRKUXl4TlFVaEtMSGxDUVVkSlFTeE5RVWhLT3p0QlFVbHFRaXhWUVVGTFF5eHBRa0ZCVEN4SFFVRjVRaXhGUVVGRlNpeEpRVUZHTEVWQlFVdERMRWxCUVV3c1JVRkJVVU1zV1VGQlVpeEZRVUZsUXl4alFVRm1MRVZCUVhwQ08wRkJTbWxDTzBGQlMyeENPenQzUWtGRlJFVXNVU3gxUWtGQlZ6dEJRVUZCTEZGQlEwUlVMRTlCUkVNc1IwRkRWeXhMUVVGTFF5eExRVVJvUWl4RFFVTkVSQ3hQUVVSRE96dEJRVVZVTEZGQlFVMVZMRkZCUVZFc2NVSkJRVTBzUzBGQlMwTXNTMEZCV0N4RlFVRnJRaXhMUVVGTFNDeHBRa0ZCZGtJc1EwRkJaRHRCUVVOQkxEUkNRVUZaVWl4UFFVRmFMRVZCUVhGQ1ZTeExRVUZ5UWp0QlFVTkVMRWM3TzNkQ1FVVkVSU3hOTEcxQ1FVRlBReXhITEVWQlFVczdRVUZCUVN4UlFVTkdZaXhQUVVSRkxFZEJRMVVzUzBGQlMwTXNTMEZFWml4RFFVTkdSQ3hQUVVSRk96czdRVUZIVml4UlFVRkpMRU5CUVVNc2VVSkJRV1ZoTEVkQlFXWXNRMEZCVEN4RlFVRXdRanRCUVVONFFpeGhRVUZQWWl4UlFVRlJZeXhaUVVGU0xFTkJRWEZDUkN4SFFVRnlRaXhEUVVGUU8wRkJRMFFzUzBGR1JDeE5RVVZQTzBGQlEwd3NWVUZCVFVVc1dVRkJXU3h4UWtGQllVWXNSMEZCWWl4RFFVRnNRanRCUVVOQkxHRkJRVkZGTEZOQlFVUXNSMEZCWTBFc1ZVRkJWVU1zVDBGQmVFSXNSMEZCYTBNc1EwRkJla003UVVGRFJEdEJRVU5HTEVjaUxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdVbVZ1WkdWeVpYSWdabkp2YlNBbkxpNHZKenRjYm1sdGNHOXlkQ0JpZFdsc1pDQm1jbTl0SUNjdUwySjFhV3hrSnp0Y2JtbHRjRzl5ZENCMGNtRnVjMlp2Y20xUWNtOXdjeUJtY205dElDY3VMaTlqYzNNdmRISmhibk5tYjNKdExYQnliM0J6Snp0Y2JtbHRjRzl5ZENCMllXeDFaVlI1Y0dWTllYQWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeWM3WEc1cGJYQnZjblFnZXlCelpYUkVUMDFCZEhSeWN5QjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU5zWVhOeklGTldSMUpsYm1SbGNtVnlJR1Y0ZEdWdVpITWdVbVZ1WkdWeVpYSWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhOMWNHVnlLSEJ5YjNCektUdGNibHh1SUNBZ0lHTnZibk4wSUhzZ2VDd2dlU3dnZDJsa2RHZ3NJR2hsYVdkb2RDQjlJRDBnY0hKdmNITXVaV3hsYldWdWRDNW5aWFJDUW05NEtDazdYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBSR2x0Wlc1emFXOXVjeUE5SUhzZ2VDd2dlU3dnZDJsa2RHZ3NJR2hsYVdkb2RDQjlPMXh1SUNCOVhHNWNiaUFnYjI1U1pXNWtaWElvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJsYkdWdFpXNTBJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJR0YwZEhKeklEMGdZblZwYkdRb2RHaHBjeTV6ZEdGMFpTd2dkR2hwY3k1bGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lrN1hHNGdJQ0FnYzJWMFJFOU5RWFIwY25Nb1pXeGxiV1Z1ZEN3Z1lYUjBjbk1wTzF4dUlDQjlYRzVjYmlBZ2IyNVNaV0ZrS0d0bGVTa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1pXeGxiV1Z1ZENCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmx4dUlDQWdJR2xtSUNnaGRISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHVnNaVzFsYm5RdVoyVjBRWFIwY21saWRYUmxLR3RsZVNrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR052Ym5OMElIWmhiSFZsVkhsd1pTQTlJSFpoYkhWbFZIbHdaVTFoY0Z0clpYbGRPMXh1SUNBZ0lDQWdjbVYwZFhKdUlDaDJZV3gxWlZSNWNHVXBJRDhnZG1Gc2RXVlVlWEJsTG1SbFptRjFiSFFnT2lBd08xeHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlBb1pXeGxiV1Z1ZEN3Z2NISnZjSE1wSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJUVmtkU1pXNWtaWEpsY2loN1hHNGdJQ0FnWld4bGJXVnVkQ3hjYmlBZ0lDQXVMaTV3Y205d2MxeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1BhdGhSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudFxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU1ZHUGF0aFJlbmRlcmVyID0gZnVuY3Rpb24gKF9SZW5kZXJlcikge1xuICBfaW5oZXJpdHMoU1ZHUGF0aFJlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIFNWR1BhdGhSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTVkdQYXRoUmVuZGVyZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIHZhciBfcHJvcHMkZWxlbWVudCRnZXRCQm8gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKSxcbiAgICAgICAgeCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby54LFxuICAgICAgICB5ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLnksXG4gICAgICAgIHdpZHRoID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8uaGVpZ2h0O1xuXG4gICAgX3RoaXMuZWxlbWVudERpbWVuc2lvbnMgPSB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeSxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgcGF0aExlbmd0aDogcHJvcHMuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBTVkdQYXRoUmVuZGVyZXIucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgdmFyIHBhdGhMZW5ndGggPSB0aGlzLmVsZW1lbnREaW1lbnNpb25zLnBhdGhMZW5ndGg7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICAoMCwgX3V0aWxzLnNldERPTUF0dHJzKShlbGVtZW50LCAoMCwgX2J1aWxkMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCBwYXRoTGVuZ3RoKSk7XG4gIH07XG5cbiAgU1ZHUGF0aFJlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgfTtcblxuICByZXR1cm4gU1ZHUGF0aFJlbmRlcmVyO1xufShfMi5kZWZhdWx0KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MWEJoZEdndmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sc2laV3hsYldWdWRDSXNJbkJ5YjNCeklpd2lVMVpIVUdGMGFGSmxibVJsY21WeUlpd2laMlYwUWtKdmVDSXNJbmdpTENKNUlpd2lkMmxrZEdnaUxDSm9aV2xuYUhRaUxDSmxiR1Z0Wlc1MFJHbHRaVzV6YVc5dWN5SXNJbkJoZEdoTVpXNW5kR2dpTENKblpYUlViM1JoYkV4bGJtZDBhQ0lzSW05dVVtVnVaR1Z5SWl3aWMzUmhkR1VpTENKdmJsSmxZV1FpTENKclpYa2lMQ0puWlhSQmRIUnlhV0oxZEdVaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dHJRa0UyUW1Vc1ZVRkJWVUVzVDBGQlZpeEZRVUZ0UWtNc1MwRkJia0lzUlVGQk1FSTdRVUZEZGtNc1UwRkJUeXhKUVVGSlF5eGxRVUZLTzBGQlEweEdPMEZCUkVzc1MwRkZSa01zUzBGR1JTeEZRVUZRTzBGQlNVUXNRenM3UVVGc1EwUTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3T3pzN08wbEJSVTFETEdVN096dEJRVU5LTERKQ1FVRlpSQ3hMUVVGYUxFVkJRVzFDTzBGQlFVRTdPMEZCUVVFc2FVUkJRMnBDTEhGQ1FVRk5RU3hMUVVGT0xFTkJSR2xDT3p0QlFVRkJMR2REUVVkbFFTeE5RVUZOUkN4UFFVRk9MRU5CUVdOSExFOUJRV1FzUlVGSVpqdEJRVUZCTEZGQlIxUkRMRU5CU0ZNc2VVSkJSMVJCTEVOQlNGTTdRVUZCUVN4UlFVZE9ReXhEUVVoTkxIbENRVWRPUVN4RFFVaE5PMEZCUVVFc1VVRkhTRU1zUzBGSVJ5eDVRa0ZIU0VFc1MwRklSenRCUVVGQkxGRkJSMGxETEUxQlNFb3NlVUpCUjBsQkxFMUJTRW83TzBGQlNXcENMRlZCUVV0RExHbENRVUZNTEVkQlFYbENPMEZCUTNaQ1NpeFZRVVIxUWp0QlFVVjJRa01zVlVGR2RVSTdRVUZIZGtKRExHdENRVWgxUWp0QlFVbDJRa01zYjBKQlNuVkNPMEZCUzNaQ1JTeHJRa0ZCV1ZJc1RVRkJUVVFzVDBGQlRpeERRVUZqVlN4alFVRmtPMEZCVEZjc1MwRkJla0k3UVVGS2FVSTdRVUZYYkVJN096UkNRVVZFUXl4UkxIVkNRVUZYTzBGQlFVRXNVVUZEUkVZc1ZVRkVReXhIUVVOakxFdEJRVXRFTEdsQ1FVUnVRaXhEUVVORVF5eFZRVVJETzBGQlFVRXNVVUZGUkZRc1QwRkdReXhIUVVWWExFdEJRVXRETEV0QlJtaENMRU5CUlVSRUxFOUJSa003TzBGQlIxUXNORUpCUVZsQkxFOUJRVm9zUlVGQmNVSXNjVUpCUVUwc1MwRkJTMWtzUzBGQldDeEZRVUZyUWtnc1ZVRkJiRUlzUTBGQmNrSTdRVUZEUkN4SE96czBRa0ZGUkVrc1RTeHRRa0ZCVDBNc1J5eEZRVUZMTzBGQlExWXNWMEZCVHl4TFFVRkxZaXhMUVVGTUxFTkJRVmRFTEU5QlFWZ3NRMEZCYlVKbExGbEJRVzVDTEVOQlFXZERSQ3hIUVVGb1F5eERRVUZRTzBGQlEwUXNSeUlzSW1acGJHVWlPaUpwYm1SbGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCU1pXNWtaWEpsY2lCbWNtOXRJQ2N1TGk4bk8xeHVhVzF3YjNKMElHSjFhV3hrSUdaeWIyMGdKeTR2WW5WcGJHUW5PMXh1YVcxd2IzSjBJSHNnYzJWMFJFOU5RWFIwY25NZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWpiR0Z6Y3lCVFZrZFFZWFJvVW1WdVpHVnlaWElnWlhoMFpXNWtjeUJTWlc1a1pYSmxjaUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ2MzVndaWElvY0hKdmNITXBPMXh1WEc0Z0lDQWdZMjl1YzNRZ2V5QjRMQ0I1TENCM2FXUjBhQ3dnYUdWcFoyaDBJSDBnUFNCd2NtOXdjeTVsYkdWdFpXNTBMbWRsZEVKQ2IzZ29LVHRjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblJFYVcxbGJuTnBiMjV6SUQwZ2UxeHVJQ0FnSUNBZ2VDeGNiaUFnSUNBZ0lIa3NYRzRnSUNBZ0lDQjNhV1IwYUN4Y2JpQWdJQ0FnSUdobGFXZG9kQ3hjYmlBZ0lDQWdJSEJoZEdoTVpXNW5kR2c2SUhCeWIzQnpMbVZzWlcxbGJuUXVaMlYwVkc5MFlXeE1aVzVuZEdnb0tWeHVJQ0FnSUgwN1hHNGdJSDFjYmx4dUlDQnZibEpsYm1SbGNpZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lIQmhkR2hNWlc1bmRHZ2dmU0E5SUhSb2FYTXVaV3hsYldWdWRFUnBiV1Z1YzJsdmJuTTdYRzRnSUNBZ1kyOXVjM1FnZXlCbGJHVnRaVzUwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lITmxkRVJQVFVGMGRISnpLR1ZzWlcxbGJuUXNJR0oxYVd4a0tIUm9hWE11YzNSaGRHVXNJSEJoZEdoTVpXNW5kR2dwS1R0Y2JpQWdmVnh1WEc0Z0lHOXVVbVZoWkNoclpYa3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV3Y205d2N5NWxiR1Z0Wlc1MExtZGxkRUYwZEhKcFluVjBaU2hyWlhrcE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlDaGxiR1Z0Wlc1MExDQndjbTl3Y3lrZ2UxeHVJQ0J5WlhSMWNtNGdibVYzSUZOV1IxQmhkR2hTWlc1a1pYSmxjaWg3WEc0Z0lDQWdaV3hsYldWdWRDeGNiaUFnSUNBdUxpNXdjbTl3YzF4dUlDQjlLVHRjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zcGxpdENvbG9yVmFsdWVzID0gc3BsaXRDb2xvclZhbHVlcztcbnZhciB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbn07XG5cbnZhciBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbnZhciBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbnZhciBIQVNfUEVSRk9STUFOQ0VfTk9XID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3c7XG5cbi8qXG4gIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNhbWVsVG9EYXNoID0gZXhwb3J0cy5jYW1lbFRvRGFzaCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qXG4gIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gIFxuICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xudmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy5jdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbnZhciBzZXRET01BdHRycyA9IGV4cG9ydHMuc2V0RE9NQXR0cnMgPSBmdW5jdGlvbiAoZWxlbWVudCwgYXR0cnMpIHtcbiAgZm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfVxuICB9XG59O1xuLypcbiAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRDb21tYURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRDb21tYURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBhbnkgYXJndW1lbnQgZm9yIGB0ZXJtYFxuICogYGNvbnRhaW5zKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xudmFyIGNvbnRhaW5zID0gZXhwb3J0cy5jb250YWlucyA9IGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBpc1N0cmluZyh0ZXJtKSAmJiB2LmluZGV4T2YodGVybSkgIT09IC0xO1xuICB9O1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayB0byBzZWUgaWYgYW4gYXJndW1lbnQgaXNcbiAqICB0aGUgZmlyc3QgY2hhcmFjdGVycyBpbiB0aGUgcHJvdmlkZWQgYHRlcm1gXG4gKiBgaXNGaXJzdENoYXJzKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xudmFyIGlzRmlyc3RDaGFycyA9IGV4cG9ydHMuaXNGaXJzdENoYXJzID0gZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSA9PT0gMDtcbiAgfTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgdW5pdCB2YWx1ZSB0eXBlXG4gKi9cbnZhciBjcmVhdGVVbml0VHlwZSA9IGV4cG9ydHMuY3JlYXRlVW5pdFR5cGUgPSBmdW5jdGlvbiAodHlwZSwgdHJhbnNmb3JtKSB7XG4gIHJldHVybiB7XG4gICAgdGVzdDogY29udGFpbnModHlwZSksXG4gICAgcGFyc2U6IHBhcnNlRmxvYXQsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgfTtcbn07XG5cbi8qXG4gIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbnZhciBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBzcGxpdCBjb2xvclxuICogdmFsdWVzIGZyb20gc3RyaW5nIGludG8gYW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcbiAqIGBtYXBBcnJheVRvT2JqZWN0KFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXSkoJ3JnYmEoMCwwLDApJylgXG4gKi9cbmZ1bmN0aW9uIHNwbGl0Q29sb3JWYWx1ZXModGVybXMpIHtcbiAgdmFyIG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICB2YXIgdmFsdWVzQXJyYXkgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHYpKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgdmFsdWVzW3Rlcm1zW2ldXSA9IHZhbHVlc0FycmF5W2ldICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KHZhbHVlc0FycmF5W2ldKSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcbn1cblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xudmFyIGlzQXJyYXkgPSBleHBvcnRzLmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbnZhciBpc0Z1bmMgPSBleHBvcnRzLmlzRnVuYyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG52YXIgaXNOdW0gPSBleHBvcnRzLmlzTnVtID0gZnVuY3Rpb24gKG51bSkge1xuICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbnZhciBpc09iaiA9IGV4cG9ydHMuaXNPYmogPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59O1xuXG52YXIgaXNIZXggPSBleHBvcnRzLmlzSGV4ID0gaXNGaXJzdENoYXJzKCcjJyk7XG52YXIgaXNSZ2IgPSBleHBvcnRzLmlzUmdiID0gaXNGaXJzdENoYXJzKCdyZ2InKTtcbnZhciBpc0hzbCA9IGV4cG9ydHMuaXNIc2wgPSBpc0ZpcnN0Q2hhcnMoJ2hzbCcpO1xudmFyIGlzQ29sb3IgPSBleHBvcnRzLmlzQ29sb3IgPSBmdW5jdGlvbiAodikge1xuICByZXR1cm4gaXNIZXgodikgfHwgaXNSZ2IodikgfHwgaXNIc2wodik7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRYUnBiSE11YW5NaVhTd2libUZ0WlhNaU9sc2ljM0JzYVhSRGIyeHZjbFpoYkhWbGN5SXNJblpoY2xSNWNHVWlMQ0oyWVhKcFlXSnNaU0lzSWs5aWFtVmpkQ0lzSW5CeWIzUnZkSGx3WlNJc0luUnZVM1J5YVc1bklpd2lZMkZzYkNJc0luTnNhV05sSWl3aVEwRk5SVXhmUTBGVFJWOVFRVlJVUlZKT0lpd2lVa1ZRVEVGRFJWOVVSVTFRVEVGVVJTSXNJa2hCVTE5UVJWSkdUMUpOUVU1RFJWOU9UMWNpTENKd1pYSm1iM0p0WVc1alpTSXNJbTV2ZHlJc0ltTmhiV1ZzVkc5RVlYTm9JaXdpYzNSeWFXNW5JaXdpY21Wd2JHRmpaU0lzSW5SdlRHOTNaWEpEWVhObElpd2lZM1Z5Y21WdWRGUnBiV1VpTENKRVlYUmxJaXdpWjJWMFZHbHRaU0lzSW5ObGRFUlBUVUYwZEhKeklpd2laV3hsYldWdWRDSXNJbUYwZEhKeklpd2lhMlY1SWl3aWFHRnpUM2R1VUhKdmNHVnlkSGtpTENKelpYUkJkSFJ5YVdKMWRHVWlMQ0p6Y0d4cGRFTnZiVzFoUkdWc2FXMXBkR1ZrSWl3aWRtRnNkV1VpTENKcGMxTjBjbWx1WnlJc0luTndiR2wwSWl3aVkyOXVkR0ZwYm5NaUxDSjBaWEp0SWl3aWRpSXNJbWx1WkdWNFQyWWlMQ0pwYzBacGNuTjBRMmhoY25NaUxDSmpjbVZoZEdWVmJtbDBWSGx3WlNJc0luUjVjR1VpTENKMGNtRnVjMlp2Y20waUxDSjBaWE4wSWl3aWNHRnljMlVpTENKd1lYSnpaVVpzYjJGMElpd2laMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY2lMQ0p6ZFdKemRISnBibWNpTENKc1lYTjBTVzVrWlhoUFppSXNJblJsY20xeklpd2liblZ0VkdWeWJYTWlMQ0pzWlc1bmRHZ2lMQ0oyWVd4MVpYTWlMQ0oyWVd4MVpYTkJjbkpoZVNJc0lta2lMQ0oxYm1SbFptbHVaV1FpTENKcGMwRnljbUY1SWl3aVlYSnlJaXdpYVhOR2RXNWpJaXdpYjJKcUlpd2lhWE5PZFcwaUxDSnVkVzBpTENKcGMwOWlhaUlzSW5OMGNpSXNJbWx6U0dWNElpd2lhWE5TWjJJaUxDSnBjMGh6YkNJc0ltbHpRMjlzYjNJaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0UlFUWkZaMEpCTEdkQ0xFZEJRVUZCTEdkQ08wRkJOMFZvUWl4SlFVRk5ReXhWUVVGVkxGVkJRVU5ETEZGQlFVUTdRVUZCUVN4VFFVRmpReXhQUVVGUFF5eFRRVUZRTEVOQlFXbENReXhSUVVGcVFpeERRVUV3UWtNc1NVRkJNVUlzUTBGQkswSktMRkZCUVM5Q0xFVkJRWGxEU3l4TFFVRjZReXhEUVVFclF5eERRVUV2UXl4RlFVRnJSQ3hEUVVGRExFTkJRVzVFTEVOQlFXUTdRVUZCUVN4RFFVRm9RanM3UVVGRlFTeEpRVUZOUXl4eFFrRkJjVUlzYVVKQlFUTkNPMEZCUTBFc1NVRkJUVU1zYlVKQlFXMUNMRTlCUVhwQ08wRkJRMEVzU1VGQlRVTXNjMEpCUVhWQ0xFOUJRVTlETEZkQlFWQXNTMEZCZFVJc1YwRkJka0lzU1VGQmMwTkJMRmxCUVZsRExFZEJRUzlGT3p0QlFVVkJPenM3T3pzN1FVRk5UeXhKUVVGTlF5eHZRMEZCWXl4VlFVRkRReXhOUVVGRU8wRkJRVUVzVTBGQldVRXNUMEZCVDBNc1QwRkJVQ3hEUVVGbFVDeHJRa0ZCWml4RlFVRnRRME1zWjBKQlFXNURMRVZCUVhGRVR5eFhRVUZ5UkN4RlFVRmFPMEZCUVVFc1EwRkJjRUk3TzBGQlJWQTdPenM3TzBGQlMwOHNTVUZCVFVNc2IwTkJRV05RTEhOQ1FVRnpRanRCUVVGQkxGTkJRVTFETEZsQlFWbERMRWRCUVZvc1JVRkJUanRCUVVGQkxFTkJRWFJDTEVkQlFXZEVPMEZCUVVFc1UwRkJUU3hKUVVGSlRTeEpRVUZLTEVkQlFWZERMRTlCUVZnc1JVRkJUanRCUVVGQkxFTkJRWEJGT3p0QlFVVkJMRWxCUVUxRExHOURRVUZqTEZWQlFVTkRMRTlCUVVRc1JVRkJWVU1zUzBGQlZpeEZRVUZ2UWp0QlFVTTNReXhQUVVGTExFbEJRVWxETEVkQlFWUXNTVUZCWjBKRUxFdEJRV2hDTEVWQlFYVkNPMEZCUTNKQ0xGRkJRVWxCTEUxQlFVMUZMR05CUVU0c1EwRkJjVUpFTEVkQlFYSkNMRU5CUVVvc1JVRkJLMEk3UVVGRE4wSkdMR05CUVZGSkxGbEJRVklzUTBGQmNVSkdMRWRCUVhKQ0xFVkJRVEJDUkN4TlFVRk5ReXhIUVVGT0xFTkJRVEZDTzBGQlEwUTdRVUZEUmp0QlFVTkdMRU5CVGswN1FVRlBVRHM3T3pzN096czdRVUZSVHl4SlFVRk5SeXh2UkVGQmMwSXNWVUZCUTBNc1MwRkJSRHRCUVVGQkxGTkJRVmRETEZOQlFWTkVMRXRCUVZRc1NVRkJhMEpCTEUxQlFVMUZMRXRCUVU0c1EwRkJXU3hOUVVGYUxFTkJRV3hDTEVkQlFYZERMRU5CUVVOR0xFdEJRVVFzUTBGQmJrUTdRVUZCUVN4RFFVRTFRanM3UVVGRlVEczdPenRCUVVsUExFbEJRVTFITERoQ1FVRlhMRlZCUVVORExFbEJRVVE3UVVGQlFTeFRRVUZWTEZWQlFVTkRMRU5CUVVRc1JVRkJUenRCUVVOMlF5eFhRVUZSU2l4VFFVRlRSeXhKUVVGVUxFdEJRV3RDUXl4RlFVRkZReXhQUVVGR0xFTkJRVlZHTEVsQlFWWXNUVUZCYjBJc1EwRkJReXhEUVVFdlF6dEJRVU5FTEVkQlJuVkNPMEZCUVVFc1EwRkJha0k3TzBGQlNWQTdPenM3TzBGQlMwOHNTVUZCVFVjc2MwTkJRV1VzVlVGQlEwZ3NTVUZCUkR0QlFVRkJMRk5CUVZVc1ZVRkJRME1zUTBGQlJDeEZRVUZQTzBGQlF6TkRMRmRCUVZGS0xGTkJRVk5ITEVsQlFWUXNTMEZCYTBKRExFVkJRVVZETEU5QlFVWXNRMEZCVlVZc1NVRkJWaXhOUVVGdlFpeERRVUU1UXp0QlFVTkVMRWRCUmpKQ08wRkJRVUVzUTBGQmNrSTdPMEZCU1ZBN096dEJRVWRQTEVsQlFVMUpMREJEUVVGcFFpeFZRVUZEUXl4SlFVRkVMRVZCUVU5RExGTkJRVkFzUlVGQmNVSTdRVUZEYWtRc1UwRkJUenRCUVVOTVF5eFZRVUZOVWl4VFFVRlRUU3hKUVVGVUxFTkJSRVE3UVVGRlRFY3NWMEZCVDBNc1ZVRkdSanRCUVVkTVNEdEJRVWhMTEVkQlFWQTdRVUZMUkN4RFFVNU5PenRCUVZGUU96czdPMEZCU1U4c1NVRkJUVWtzYTBWQlFUWkNMRlZCUVVOa0xFdEJRVVE3UVVGQlFTeFRRVUZYUVN4TlFVRk5aU3hUUVVGT0xFTkJRV2RDWml4TlFVRk5UU3hQUVVGT0xFTkJRV01zUjBGQlpDeEpRVUZ4UWl4RFFVRnlReXhGUVVGM1EwNHNUVUZCVFdkQ0xGZEJRVTRzUTBGQmEwSXNSMEZCYkVJc1EwRkJlRU1zUTBGQldEdEJRVUZCTEVOQlFXNURPenRCUVVWUU96czdPenRCUVV0UExGTkJRVk16UXl4blFrRkJWQ3hEUVVFd1FqUkRMRXRCUVRGQ0xFVkJRV2xETzBGQlEzUkRMRTFCUVUxRExGZEJRVmRFTEUxQlFVMUZMRTFCUVhaQ096dEJRVVZCTEZOQlFVOHNWVUZCVldRc1EwRkJWaXhGUVVGaE8wRkJRMnhDTEZGQlFVMWxMRk5CUVZNc1JVRkJaanRCUVVOQkxGRkJRVTFETEdOQlFXTjBRaXh2UWtGQmIwSmxMREpDUVVFeVFsUXNRMEZCTTBJc1EwRkJjRUlzUTBGQmNFSTdPMEZCUlVFc1UwRkJTeXhKUVVGSmFVSXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKU2l4UlFVRndRaXhGUVVFNFFra3NSMEZCT1VJc1JVRkJiVU03UVVGRGFrTkdMR0ZCUVU5SUxFMUJRVTFMTEVOQlFVNHNRMEZCVUN4SlFVRnZRa1FzV1VGQldVTXNRMEZCV2l4TlFVRnRRa01zVTBGQmNFSXNSMEZCYVVOV0xGZEJRVmRSTEZsQlFWbERMRU5CUVZvc1EwRkJXQ3hEUVVGcVF5eEhRVUU0UkN4RFFVRnFSanRCUVVORU96dEJRVVZFTEZkQlFVOUdMRTFCUVZBN1FVRkRSQ3hIUVZSRU8wRkJWVVE3TzBGQlJVUTdPenM3T3p0QlFVMVBMRWxCUVUxSkxEUkNRVUZWTEZWQlFVTkRMRWRCUVVRN1FVRkJRU3hUUVVGVGJrUXNVVUZCVVcxRUxFZEJRVklzVFVGQmFVSXNUMEZCTVVJN1FVRkJRU3hEUVVGb1FqczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVU1zTUVKQlFWTXNWVUZCUTBNc1IwRkJSRHRCUVVGQkxGTkJRVk55UkN4UlFVRlJjVVFzUjBGQlVpeE5RVUZwUWl4VlFVRXhRanRCUVVGQkxFTkJRV1k3TzBGQlJWQTdPenM3T3p0QlFVMVBMRWxCUVUxRExIZENRVUZSTEZWQlFVTkRMRWRCUVVRN1FVRkJRU3hUUVVGVExFOUJRVTlCTEVkQlFWQXNTMEZCWlN4UlFVRjRRanRCUVVGQkxFTkJRV1E3TzBGQlJWQTdPenM3T3p0QlFVMVBMRWxCUVUxRExIZENRVUZSTEZWQlFVTklMRWRCUVVRN1FVRkJRU3hUUVVGVExFOUJRVTlCTEVkQlFWQXNTMEZCWlN4UlFVRjRRanRCUVVGQkxFTkJRV1E3TzBGQlJWQTdPenM3T3p0QlFVMVBMRWxCUVUweFFpdzRRa0ZCVnl4VlFVRkRPRUlzUjBGQlJEdEJRVUZCTEZOQlFWTXNUMEZCVDBFc1IwRkJVQ3hMUVVGbExGRkJRWGhDTzBGQlFVRXNRMEZCYWtJN08wRkJSVUVzU1VGQlRVTXNkMEpCUVZGNlFpeGhRVUZoTEVkQlFXSXNRMEZCWkR0QlFVTkJMRWxCUVUwd1FpeDNRa0ZCVVRGQ0xHRkJRV0VzUzBGQllpeERRVUZrTzBGQlEwRXNTVUZCVFRKQ0xIZENRVUZSTTBJc1lVRkJZU3hMUVVGaUxFTkJRV1E3UVVGRFFTeEpRVUZOTkVJc05FSkJRVlVzVlVGQlF6bENMRU5CUVVRN1FVRkJRU3hUUVVGUk1rSXNUVUZCVFROQ0xFTkJRVTRzUzBGQldUUkNMRTFCUVUwMVFpeERRVUZPTEVOQlFWb3NTVUZCZDBJMlFpeE5RVUZOTjBJc1EwRkJUaXhEUVVGb1F6dEJRVUZCTEVOQlFXaENJaXdpWm1sc1pTSTZJblYwYVd4ekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVkyOXVjM1FnZG1GeVZIbHdaU0E5SUNoMllYSnBZV0pzWlNrZ1BUNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp5NWpZV3hzS0haaGNtbGhZbXhsS1M1emJHbGpaU2c0TENBdE1TazdYRzVjYm1OdmJuTjBJRU5CVFVWTVgwTkJVMFZmVUVGVVZFVlNUaUE5SUM4b1cyRXRlbDBwS0Z0QkxWcGRLUzluTzF4dVkyOXVjM1FnVWtWUVRFRkRSVjlVUlUxUVRFRlVSU0E5SUNja01TMGtNaWM3WEc1amIyNXpkQ0JJUVZOZlVFVlNSazlTVFVGT1EwVmZUazlYSUQwZ0tIUjVjR1Z2WmlCd1pYSm1iM0p0WVc1alpTQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdjR1Z5Wm05eWJXRnVZMlV1Ym05M0tUdGNibHh1THlwY2JpQWdRMjl1ZG1WeWRDQmpZVzFsYkVOaGMyVWdkRzhnWkdGemFDMWpZWE5sWEc1Y2JpQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJRUJ5WlhSMWNtNGdXM04wY21sdVoxMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdZMkZ0Wld4VWIwUmhjMmdnUFNBb2MzUnlhVzVuS1NBOVBpQnpkSEpwYm1jdWNtVndiR0ZqWlNoRFFVMUZURjlEUVZORlgxQkJWRlJGVWs0c0lGSkZVRXhCUTBWZlZFVk5VRXhCVkVVcExuUnZURzkzWlhKRFlYTmxLQ2s3WEc1Y2JpOHFYRzRnSUVkbGJtVnlZWFJsSUdOMWNuSmxiblFnZEdsdFpYTjBZVzF3WEc0Z0lGeHVJQ0JBY21WMGRYSnVJRnQwYVcxbGMzUmhiWEJkT2lCRGRYSnlaVzUwSUZWT1NWZ2dkR2x0WlhOMFlXMXdYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUlVhVzFsSUQwZ1NFRlRYMUJGVWtaUFVrMUJUa05GWDA1UFZ5QS9JQ2dwSUQwK0lIQmxjbVp2Y20xaGJtTmxMbTV2ZHlncElEb2dLQ2tnUFQ0Z2JtVjNJRVJoZEdVb0tTNW5aWFJVYVcxbEtDazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnpaWFJFVDAxQmRIUnljeUE5SUNobGJHVnRaVzUwTENCaGRIUnljeWtnUFQ0Z2UxeHVJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdZWFIwY25NcElIdGNiaUFnSUNCcFppQW9ZWFIwY25NdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdaV3hsYldWdWRDNXpaWFJCZEhSeWFXSjFkR1VvYTJWNUxDQmhkSFJ5YzF0clpYbGRLVHRjYmlBZ0lDQjlYRzRnSUgxY2JuMDdYRzR2S2x4dUlDQlRjR3hwZENCamIyMXRZUzFrWld4cGJXbDBaV1FnYzNSeWFXNW5YRzVjYmlBZ1hDSm1iMjhzWW1GeVhDSWdMVDRnVzF3aVptOXZYQ0lzSUZ3aVltRnlYQ0pkWEc1Y2JpQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJRUJ5WlhSMWNtNGdXMkZ5Y21GNVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR3hwZEVOdmJXMWhSR1ZzYVcxcGRHVmtJRDBnS0haaGJIVmxLU0E5UGlCcGMxTjBjbWx1WnloMllXeDFaU2tnUHlCMllXeDFaUzV6Y0d4cGRDZ3ZMRnhjY3lvdktTQTZJRnQyWVd4MVpWMDdYRzVjYmk4cUtseHVJQ29nSUZKbGRIVnlibk1nWVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z1kyaGxZMnNnWVc1NUlHRnlaM1Z0Wlc1MElHWnZjaUJnZEdWeWJXQmNiaUFxSUdCamIyNTBZV2x1Y3lnbmJtVmxaR3hsSnlrb0oyaGhlWE4wWVdOckp5bGdYRzRnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYjI1MFlXbHVjeUE5SUNoMFpYSnRLU0E5UGlBb2Rpa2dQVDRnZTF4dUlDQnlaWFIxY200Z0tHbHpVM1J5YVc1bktIUmxjbTBwSUNZbUlIWXVhVzVrWlhoUFppaDBaWEp0S1NBaFBUMGdMVEVwTzF4dWZUdGNibHh1THlvcVhHNGdLaUFnVW1WMGRYSnVjeUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdkMmxzYkNCamFHVmpheUIwYnlCelpXVWdhV1lnWVc0Z1lYSm5kVzFsYm5RZ2FYTmNiaUFxSUNCMGFHVWdabWx5YzNRZ1kyaGhjbUZqZEdWeWN5QnBiaUIwYUdVZ2NISnZkbWxrWldRZ1lIUmxjbTFnWEc0Z0tpQmdhWE5HYVhKemRFTm9ZWEp6S0NkdVpXVmtiR1VuS1NnbmFHRjVjM1JoWTJzbktXQmNiaUFxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6Um1seWMzUkRhR0Z5Y3lBOUlDaDBaWEp0S1NBOVBpQW9kaWtnUFQ0Z2UxeHVJQ0J5WlhSMWNtNGdLR2x6VTNSeWFXNW5LSFJsY20wcElDWW1JSFl1YVc1a1pYaFBaaWgwWlhKdEtTQTlQVDBnTUNrN1hHNTlPMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaU0JoSUhWdWFYUWdkbUZzZFdVZ2RIbHdaVnh1SUNvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxWVzVwZEZSNWNHVWdQU0FvZEhsd1pTd2dkSEpoYm5ObWIzSnRLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2RHVnpkRG9nWTI5dWRHRnBibk1vZEhsd1pTa3NYRzRnSUNBZ2NHRnljMlU2SUhCaGNuTmxSbXh2WVhRc1hHNGdJQ0FnZEhKaGJuTm1iM0p0WEc0Z0lIMDdYRzU5TzF4dVhHNHZLbHh1SUNCSFpYUWdkbUZzZFdVZ1puSnZiU0JtZFc1amRHbHZiaUJ6ZEhKcGJtZGNiaUFnWENKMGNtRnVjMnhoZEdWWUtESXdjSGdwWENJZ0xUNGdYQ0l5TUhCNFhDSmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY2dQU0FvZG1Gc2RXVXBJRDArSUhaaGJIVmxMbk4xWW5OMGNtbHVaeWgyWVd4MVpTNXBibVJsZUU5bUtDY29KeWtnS3lBeExDQjJZV3gxWlM1c1lYTjBTVzVrWlhoUFppZ25LU2NwS1R0Y2JseHVMeW9xWEc0Z0tpQkRjbVZoZEdWeklHRWdablZ1WTNScGIyNGdkR2hoZENCM2FXeHNJSE53YkdsMElHTnZiRzl5WEc0Z0tpQjJZV3gxWlhNZ1puSnZiU0J6ZEhKcGJtY2dhVzUwYnlCaGJpQnZZbXBsWTNRZ2IyWWdjSEp2Y0dWeWRHbGxjMXh1SUNvZ1lHMWhjRUZ5Y21GNVZHOVBZbXBsWTNRb1d5ZHlaV1FuTENBblozSmxaVzRuTENBbllteDFaU2RkS1NnbmNtZGlZU2d3TERBc01Da25LV0JjYmlBcUwxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlITndiR2wwUTI5c2IzSldZV3gxWlhNb2RHVnliWE1wSUh0Y2JpQWdZMjl1YzNRZ2JuVnRWR1Z5YlhNZ1BTQjBaWEp0Y3k1c1pXNW5kR2c3WEc1Y2JpQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDaDJLU0I3WEc0Z0lDQWdZMjl1YzNRZ2RtRnNkV1Z6SUQwZ2UzMDdYRzRnSUNBZ1kyOXVjM1FnZG1Gc2RXVnpRWEp5WVhrZ1BTQnpjR3hwZEVOdmJXMWhSR1ZzYVcxcGRHVmtLR2RsZEZaaGJIVmxSbkp2YlVaMWJtTjBhVzl1VTNSeWFXNW5LSFlwS1R0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JuVnRWR1Z5YlhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnZG1Gc2RXVnpXM1JsY20xelcybGRYU0E5SUNoMllXeDFaWE5CY25KaGVWdHBYU0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQS9JSEJoY25ObFJteHZZWFFvZG1Gc2RXVnpRWEp5WVhsYmFWMHBJRG9nTVR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkbUZzZFdWek8xeHVJQ0I5TzF4dWZWeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVc0Z1lYSnlZWGtnUHlCY2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhWMGFXeHpMblpoY2xSNWNHVWdQVDA5SUNkQmNuSmhlU2RjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOQmNuSmhlU0E5SUNoaGNuSXBJRDArSUhaaGNsUjVjR1VvWVhKeUtTQTlQVDBnSjBGeWNtRjVKenRjYmx4dUx5cGNiaUFnU1hNZ2RYUnBiSE1nZG1GeUlHRWdablZ1WTNScGIyNGdQeUJjYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFYwYVd4ekxuWmhjbFI1Y0dVZ1BUMDlJQ2RHZFc1amRHbHZiaWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOR2RXNWpJRDBnS0c5aWFpa2dQVDRnZG1GeVZIbHdaU2h2WW1vcElEMDlQU0FuUm5WdVkzUnBiMjRuTzF4dVhHNHZLbHh1SUNCSmN5QjFkR2xzY3lCMllYSWdZU0J1ZFcxaVpYSS9YRzRnSUZ4dUlDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBlWEJsYjJZZ1BUMDlJQ2R1ZFcxaVpYSW5YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VG5WdElEMGdLRzUxYlNrZ1BUNGdkSGx3Wlc5bUlHNTFiU0E5UFQwZ0oyNTFiV0psY2ljN1hHNWNiaThxWEc0Z0lFbHpJSFYwYVd4eklIWmhjaUJoYmlCdlltcGxZM1EvWEc0Z0lGeHVJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIwZVhCbGIyWWdQVDA5SUNkdlltcGxZM1FuWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselQySnFJRDBnS0c5aWFpa2dQVDRnZEhsd1pXOW1JRzlpYWlBOVBUMGdKMjlpYW1WamRDYzdYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaElITjBjbWx1WnlBL0lGeHVJQ0JjYmlBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RIbHdaVzltSUhOMGNpQTlQVDBnSjNOMGNtbHVaeWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOVGRISnBibWNnUFNBb2MzUnlLU0E5UGlCMGVYQmxiMllnYzNSeUlEMDlQU0FuYzNSeWFXNW5KenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR2x6U0dWNElEMGdhWE5HYVhKemRFTm9ZWEp6S0Njakp5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTlNaMklnUFNCcGMwWnBjbk4wUTJoaGNuTW9KM0puWWljcE8xeHVaWGh3YjNKMElHTnZibk4wSUdselNITnNJRDBnYVhOR2FYSnpkRU5vWVhKektDZG9jMnduS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzBOdmJHOXlJRDBnS0hZcElEMCtJQ2hwYzBobGVDaDJLU0I4ZkNCcGMxSm5ZaWgyS1NCOGZDQnBjMGh6YkNoMktTazdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29sb3IgPSBleHBvcnRzLmhzbGEgPSBleHBvcnRzLnJnYmEgPSBleHBvcnRzLmhleCA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIGhleCA9IGV4cG9ydHMuaGV4ID0gZnVuY3Rpb24gKHYpIHtcbiAgdmFyIHIgPSB2b2lkIDAsXG4gICAgICBnID0gdm9pZCAwLFxuICAgICAgYiA9IHZvaWQgMDtcblxuICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICBpZiAodi5sZW5ndGggPiA0KSB7XG4gICAgciA9IHYuc3Vic3RyKDEsIDIpO1xuICAgIGcgPSB2LnN1YnN0cigzLCAyKTtcbiAgICBiID0gdi5zdWJzdHIoNSwgMik7XG5cbiAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICB9IGVsc2Uge1xuICAgIHIgPSB2LnN1YnN0cigxLCAxKTtcbiAgICBnID0gdi5zdWJzdHIoMiwgMSk7XG4gICAgYiA9IHYuc3Vic3RyKDMsIDEpO1xuICAgIHIgKz0gcjtcbiAgICBnICs9IGc7XG4gICAgYiArPSBiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICBncmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgIGJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICBhbHBoYTogMVxuICB9O1xufTtcblxudmFyIHJnYmEgPSBleHBvcnRzLnJnYmEgPSAoMCwgX3V0aWxzLnNwbGl0Q29sb3JWYWx1ZXMpKFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAnYWxwaGEnXSk7XG5cbnZhciBoc2xhID0gZXhwb3J0cy5oc2xhID0gKDAsIF91dGlscy5zcGxpdENvbG9yVmFsdWVzKShbJ2h1ZScsICdzYXR1cmF0aW9uJywgJ2xpZ2h0bmVzcycsICdhbHBoYSddKTtcblxudmFyIGNvbG9yID0gZXhwb3J0cy5jb2xvciA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICgoMCwgX3V0aWxzLmlzUmdiKSh2KSkge1xuICAgIHJldHVybiByZ2JhKHYpO1xuICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNIZXgpKHYpKSB7XG4gICAgcmV0dXJuIGhleCh2KTtcbiAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLmlzSHNsKSh2KSkge1xuICAgIHJldHVybiBoc2xhKHYpO1xuICB9XG5cbiAgcmV0dXJuIHY7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmNHRnljMlZ5Y3k1cWN5SmRMQ0p1WVcxbGN5STZXeUpvWlhnaUxDSjJJaXdpY2lJc0ltY2lMQ0ppSWl3aWJHVnVaM1JvSWl3aWMzVmljM1J5SWl3aWNtVmtJaXdpY0dGeWMyVkpiblFpTENKbmNtVmxiaUlzSW1Kc2RXVWlMQ0poYkhCb1lTSXNJbkpuWW1FaUxDSm9jMnhoSWl3aVkyOXNiM0lpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRTdPMEZCUlU4c1NVRkJUVUVzYjBKQlFVMHNWVUZCUTBNc1EwRkJSQ3hGUVVGUE8wRkJRM2hDTEUxQlFVbERMRlZCUVVvN1FVRkJRU3hOUVVGUFF5eFZRVUZRTzBGQlFVRXNUVUZCVlVNc1ZVRkJWanM3UVVGRlFUdEJRVU5CTEUxQlFVbElMRVZCUVVWSkxFMUJRVVlzUjBGQlZ5eERRVUZtTEVWQlFXdENPMEZCUTJoQ1NDeFJRVUZKUkN4RlFVRkZTeXhOUVVGR0xFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFWb3NRMEZCU2p0QlFVTkJTQ3hSUVVGSlJpeEZRVUZGU3l4TlFVRkdMRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVm9zUTBGQlNqdEJRVU5CUml4UlFVRkpTQ3hGUVVGRlN5eE5RVUZHTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVZvc1EwRkJTanM3UVVGRlJqdEJRVU5ETEVkQlRrUXNUVUZOVHp0QlFVTk1TaXhSUVVGSlJDeEZRVUZGU3l4TlFVRkdMRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVm9zUTBGQlNqdEJRVU5CU0N4UlFVRkpSaXhGUVVGRlN5eE5RVUZHTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVZvc1EwRkJTanRCUVVOQlJpeFJRVUZKU0N4RlFVRkZTeXhOUVVGR0xFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFWb3NRMEZCU2p0QlFVTkJTaXhUUVVGTFFTeERRVUZNTzBGQlEwRkRMRk5CUVV0QkxFTkJRVXc3UVVGRFFVTXNVMEZCUzBFc1EwRkJURHRCUVVORU96dEJRVVZFTEZOQlFVODdRVUZEVEVjc1UwRkJTME1zVTBGQlUwNHNRMEZCVkN4RlFVRlpMRVZCUVZvc1EwRkVRVHRCUVVWTVR5eFhRVUZQUkN4VFFVRlRUQ3hEUVVGVUxFVkJRVmtzUlVGQldpeERRVVpHTzBGQlIweFBMRlZCUVUxR0xGTkJRVk5LTEVOQlFWUXNSVUZCV1N4RlFVRmFMRU5CU0VRN1FVRkpURThzVjBGQlR6dEJRVXBHTEVkQlFWQTdRVUZOUkN4RFFYcENUVHM3UVVFeVFrRXNTVUZCVFVNc2MwSkJRVThzTmtKQlFXbENMRU5CUVVNc1MwRkJSQ3hGUVVGUkxFOUJRVklzUlVGQmFVSXNUVUZCYWtJc1JVRkJlVUlzVDBGQmVrSXNRMEZCYWtJc1EwRkJZanM3UVVGRlFTeEpRVUZOUXl4elFrRkJUeXcyUWtGQmFVSXNRMEZCUXl4TFFVRkVMRVZCUVZFc1dVRkJVaXhGUVVGelFpeFhRVUYwUWl4RlFVRnRReXhQUVVGdVF5eERRVUZxUWl4RFFVRmlPenRCUVVWQkxFbEJRVTFETEhkQ1FVRlJMRlZCUVVOaUxFTkJRVVFzUlVGQlR6dEJRVU14UWl4TlFVRkpMR3RDUVVGTlFTeERRVUZPTEVOQlFVb3NSVUZCWXp0QlFVTmFMRmRCUVU5WExFdEJRVXRZTEVOQlFVd3NRMEZCVUR0QlFVTkVMRWRCUmtRc1RVRkZUeXhKUVVGSkxHdENRVUZOUVN4RFFVRk9MRU5CUVVvc1JVRkJZenRCUVVOdVFpeFhRVUZQUkN4SlFVRkpReXhEUVVGS0xFTkJRVkE3UVVGRFJDeEhRVVpOTEUxQlJVRXNTVUZCU1N4clFrRkJUVUVzUTBGQlRpeERRVUZLTEVWQlFXTTdRVUZEYmtJc1YwRkJUMWtzUzBGQlMxb3NRMEZCVEN4RFFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlQwRXNRMEZCVUR0QlFVTkVMRU5CVmswaUxDSm1hV3hsSWpvaWNHRnljMlZ5Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUhOd2JHbDBRMjlzYjNKV1lXeDFaWE1zSUdselVtZGlMQ0JwYzBobGVDd2dhWE5JYzJ3Z2ZTQm1jbTl0SUNjdUwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdobGVDQTlJQ2gyS1NBOVBpQjdYRzRnSUd4bGRDQnlMQ0JuTENCaU8xeHVYRzRnSUM4dklFbG1JSGRsSUdoaGRtVWdOaUJqYUdGeVlXTjBaWEp6TENCcFpTQWpSa1l3TURBd1hHNGdJR2xtSUNoMkxteGxibWQwYUNBK0lEUXBJSHRjYmlBZ0lDQnlJRDBnZGk1emRXSnpkSElvTVN3Z01pazdYRzRnSUNBZ1p5QTlJSFl1YzNWaWMzUnlLRE1zSURJcE8xeHVJQ0FnSUdJZ1BTQjJMbk4xWW5OMGNpZzFMQ0F5S1R0Y2JseHVJQ0F2THlCUGNpQjNaU0JvWVhabElETWdZMmhoY21GamRHVnljeXdnYVdVZ0kwWXdNRnh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSElnUFNCMkxuTjFZbk4wY2lneExDQXhLVHRjYmlBZ0lDQm5JRDBnZGk1emRXSnpkSElvTWl3Z01TazdYRzRnSUNBZ1lpQTlJSFl1YzNWaWMzUnlLRE1zSURFcE8xeHVJQ0FnSUhJZ0t6MGdjanRjYmlBZ0lDQm5JQ3M5SUdjN1hHNGdJQ0FnWWlBclBTQmlPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQnlaV1E2SUhCaGNuTmxTVzUwS0hJc0lERTJLU3hjYmlBZ0lDQm5jbVZsYmpvZ2NHRnljMlZKYm5Rb1p5d2dNVFlwTEZ4dUlDQWdJR0pzZFdVNklIQmhjbk5sU1c1MEtHSXNJREUyS1N4Y2JpQWdJQ0JoYkhCb1lUb2dNVnh1SUNCOU8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSEpuWW1FZ1BTQnpjR3hwZEVOdmJHOXlWbUZzZFdWektGc25jbVZrSnl3Z0oyZHlaV1Z1Snl3Z0oySnNkV1VuTENBbllXeHdhR0VuWFNrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCb2MyeGhJRDBnYzNCc2FYUkRiMnh2Y2xaaGJIVmxjeWhiSjJoMVpTY3NJQ2R6WVhSMWNtRjBhVzl1Snl3Z0oyeHBaMmgwYm1WemN5Y3NJQ2RoYkhCb1lTZGRLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR052Ykc5eUlEMGdLSFlwSUQwK0lIdGNiaUFnYVdZZ0tHbHpVbWRpS0hZcEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhKblltRW9kaWs3WEc0Z0lIMGdaV3h6WlNCcFppQW9hWE5JWlhnb2Rpa3BJSHRjYmlBZ0lDQnlaWFIxY200Z2FHVjRLSFlwTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLR2x6U0hOc0tIWXBLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHaHpiR0VvZGlrN1hHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2RqdGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9wYXJzZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG52YXIgaGFzUkFGID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRydWUgOiBmYWxzZTtcblxudmFyIG9uTmV4dEZyYW1lID0gdm9pZCAwO1xuXG5pZiAoaGFzUkFGKSB7XG4gIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9O1xufSBlbHNlIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvKlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgICBcbiAgICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcbiAgICAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgICBcbiAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgICAgXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgXG4gICAgICBNSVQgbGljZW5zZVxuICAgICovXG4gICAgdmFyIGxhc3RUaW1lID0gMDtcblxuICAgIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYuNyAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWUgKyB0aW1lVG9DYWxsO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGxhc3RUaW1lKTtcbiAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgIH07XG4gIH0pKCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9uTmV4dEZyYW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12YjI0dGJtVjRkQzFtY21GdFpTNXFjeUpkTENKdVlXMWxjeUk2V3lKb1lYTlNRVVlpTENKM2FXNWtiM2NpTENKeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVWlMQ0p2Yms1bGVIUkdjbUZ0WlNJc0ltTmhiR3hpWVdOcklpd2liR0Z6ZEZScGJXVWlMQ0pqZFhKeVpXNTBWR2x0WlNJc0lrUmhkR1VpTENKblpYUlVhVzFsSWl3aWRHbHRaVlJ2UTJGc2JDSXNJazFoZEdnaUxDSnRZWGdpTENKelpYUlVhVzFsYjNWMElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRVHM3TzBGQlIwRXNTVUZCVFVFc1UwRkJWU3hQUVVGUFF5eE5RVUZRTEV0QlFXdENMRmRCUVd4Q0xFbEJRV2xEUVN4UFFVRlBReXh4UWtGQmVrTXNSMEZCYTBVc1NVRkJiRVVzUjBGQmVVVXNTMEZCZUVZN08wRkJSVUVzU1VGQlNVTXNiMEpCUVVvN08wRkJSVUVzU1VGQlNVZ3NUVUZCU2l4RlFVRlpPMEZCUTFaSExHZENRVUZqTEZWQlFVTkRMRkZCUVVRN1FVRkJRU3hYUVVGalNDeFBRVUZQUXl4eFFrRkJVQ3hEUVVFMlFrVXNVVUZCTjBJc1EwRkJaRHRCUVVGQkxFZEJRV1E3UVVGRlJDeERRVWhFTEUxQlIwODdRVUZCUVR0QlFVTk1PenM3T3pzN096czdPenM3TzBGQlkwRXNVVUZCU1VNc1YwRkJWeXhEUVVGbU96dEJRVVZCUml4clFrRkJZeXhWUVVGRFF5eFJRVUZFTEVWQlFXTTdRVUZETVVJc1ZVRkJUVVVzWTBGQll5eEpRVUZKUXl4SlFVRktMRWRCUVZkRExFOUJRVmdzUlVGQmNFSTdRVUZEUVN4VlFVRk5ReXhoUVVGaFF5eExRVUZMUXl4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxGRkJRVkZNTEdOQlFXTkVMRkZCUVhSQ0xFTkJRVm9zUTBGQmJrSTdPMEZCUlVGQkxHbENRVUZYUXl4alFVRmpSeXhWUVVGNlFqczdRVUZGUVVjc2FVSkJRVmM3UVVGQlFTeGxRVUZOVWl4VFFVRlRReXhSUVVGVUxFTkJRVTQ3UVVGQlFTeFBRVUZZTEVWQlFYRkRTU3hWUVVGeVF6dEJRVU5FTEV0QlVFUTdRVUZxUWtzN1FVRjVRazQ3TzJ0Q1FVVmpUaXhYSWl3aVptbHNaU0k2SW05dUxXNWxlSFF0Wm5KaGJXVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNCRVpYUmxZM1FnWVc1a0lHeHZZV1FnWVc0Z1lYQndjbTl3Y21saGRHVWdZMnh2WTJzZ2MyVjBkR2x1WnlCbWIzSWdkR2hsSUdWdWRtbHliMjV0Wlc1MFhHNHFMMXh1WTI5dWMzUWdhR0Z6VWtGR0lEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVXBJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVYRzVzWlhRZ2IyNU9aWGgwUm5KaGJXVTdYRzVjYm1sbUlDaG9ZWE5TUVVZcElIdGNiaUFnYjI1T1pYaDBSbkpoYldVZ1BTQW9ZMkZzYkdKaFkyc3BJRDArSUhkcGJtUnZkeTV5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVb1kyRnNiR0poWTJzcE8xeHVYRzU5SUdWc2MyVWdlMXh1SUNBdktseHVJQ0FnSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTQndiMng1Wm1sc2JGeHVJQ0FnSUZ4dUlDQWdJRVp2Y2lCSlJUZ3ZPU0JHYkdsdWMzUnZibVZ6SUdGdVpDQnViMjR0WW5KdmQzTmxjaUJsYm5acGNtOXViV1Z1ZEhOY2JseHVJQ0FnSUZSaGEyVnVJR1p5YjIwZ1VHRjFiQ0JKY21semFDNGdWMlVuZG1VZ2MzUnlhWEJ3WldRZ2IzVjBJR05oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsSUdOb1pXTnJjeUJpWldOaGRYTmxJSGRsSUdSdmJpZDBJR1p2ZUNCM2FYUm9JSFJvWVhSY2JpQWdJQ0JjYmlBZ0lDQm9kSFJ3T2k4dmNHRjFiR2x5YVhOb0xtTnZiUzh5TURFeEwzSmxjWFZsYzNSaGJtbHRZWFJwYjI1bWNtRnRaUzFtYjNJdGMyMWhjblF0WVc1cGJXRjBhVzVuTDF4dUlDQWdJR2gwZEhBNkx5OXRlUzV2Y0dWeVlTNWpiMjB2WlcxdmJHeGxjaTlpYkc5bkx6SXdNVEV2TVRJdk1qQXZjbVZ4ZFdWemRHRnVhVzFoZEdsdmJtWnlZVzFsTFdadmNpMXpiV0Z5ZEMxbGNpMWhibWx0WVhScGJtZGNiaUFnSUNBZ1hHNGdJQ0FnY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbElIQnZiSGxtYVd4c0lHSjVJRVZ5YVdzZ1RjTzJiR3hsY2k0Z1ptbDRaWE1nWm5KdmJTQlFZWFZzSUVseWFYTm9JR0Z1WkNCVWFXNXZJRnBwYW1SbGJGeHVJQ0FnSUNCY2JpQWdJQ0JOU1ZRZ2JHbGpaVzV6WlZ4dUlDQXFMMXh1SUNCc1pYUWdiR0Z6ZEZScGJXVWdQU0F3TzF4dVhHNGdJRzl1VG1WNGRFWnlZVzFsSUQwZ0tHTmhiR3hpWVdOcktTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1kzVnljbVZ1ZEZScGJXVWdQU0J1WlhjZ1JHRjBaU2dwTG1kbGRGUnBiV1VvS1R0Y2JpQWdJQ0JqYjI1emRDQjBhVzFsVkc5RFlXeHNJRDBnVFdGMGFDNXRZWGdvTUN3Z01UWXVOeUF0SUNoamRYSnlaVzUwVkdsdFpTQXRJR3hoYzNSVWFXMWxLU2s3WEc1Y2JpQWdJQ0JzWVhOMFZHbHRaU0E5SUdOMWNuSmxiblJVYVcxbElDc2dkR2x0WlZSdlEyRnNiRHRjYmx4dUlDQWdJSE5sZEZScGJXVnZkWFFvS0NrZ1BUNGdZMkZzYkdKaFkyc29iR0Z6ZEZScGJXVXBMQ0IwYVcxbFZHOURZV3hzS1R0Y2JpQWdmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2IyNU9aWGgwUm5KaGJXVTdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVJlbmRlclN0ZXA7XG5mdW5jdGlvbiBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCkge1xuICAvKipcbiAgICogV2UgdXNlIHR3byBhcnJheXMsIG9uZSBmb3IgdGhpcyBmcmFtZSBhbmQgb25lIHRvIHF1ZXVlIGZvciB0aGVcbiAgICogbmV4dCBmcmFtZSwgcmV1c2luZyBlYWNoIHRvIGF2b2lkIEdDLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICB2YXIgZnVuY3Rpb25zVG9SdW4gPSBbXTtcbiAgdmFyIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICBzY2hlZHVsZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBzdGFydFJlbmRlckxvb3AoKTtcbiAgICAgIC8vIElmIHRoaXMgY2FsbGJhY2sgaXNuJ3QgYWxyZWFkeSBzY2hlZHVsZWQgdG8gcnVuIG5leHQgZnJhbWVcbiAgICAgIGlmIChmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUucHVzaChjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNhbmNlbDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgaW5kZXhPZkNhbGxiYWNrID0gZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaW5kZXhPZkNhbGxiYWNrICE9PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXhPZkNhbGxiYWNrLCAxKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAvLyBDbGVhciBuZXh0IGZyYW1lIGxpc3RcbiAgICAgIHZhciBfcmVmID0gW2Z1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLCBmdW5jdGlvbnNUb1J1bl07XG4gICAgICAvLyBTd2FwIHRoaXMgZnJhbWUgYW5kIG5leHQgZnJhbWUgYXJyYXlzIHRvIGF2b2lkIEdDXG5cbiAgICAgIGZ1bmN0aW9uc1RvUnVuID0gX3JlZlswXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gX3JlZlsxXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIEV4ZWN1dGUgYWxsIG9mIHRoaXMgZnJhbWUncyBmdW5jdGlvbnNcbiAgICAgIHZhciBudW1UaGlzRnJhbWUgPSBmdW5jdGlvbnNUb1J1bi5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRoaXNGcmFtZTsgaSsrKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuW2ldKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12WTNKbFlYUmxMWEpsYm1SbGNpMXpkR1Z3TG1weklsMHNJbTVoYldWeklqcGJJbU55WldGMFpWSmxibVJsY2xOMFpYQWlMQ0p6ZEdGeWRGSmxibVJsY2t4dmIzQWlMQ0ptZFc1amRHbHZibk5VYjFKMWJpSXNJbVoxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbElpd2ljMk5vWldSMWJHVWlMQ0pqWVd4c1ltRmpheUlzSW1sdVpHVjRUMllpTENKd2RYTm9JaXdpWTJGdVkyVnNJaXdpYVc1a1pYaFBaa05oYkd4aVlXTnJJaXdpYzNCc2FXTmxJaXdpY0hKdlkyVnpjeUlzSW14bGJtZDBhQ0lzSW01MWJWUm9hWE5HY21GdFpTSXNJbWtpWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGQmQwSkJMR2RDTzBGQlFWUXNVMEZCVTBFc1owSkJRVlFzUTBGQk1FSkRMR1ZCUVRGQ0xFVkJRVEpETzBGQlEzaEVPenM3T3p0QlFVdEJMRTFCUVVsRExHbENRVUZwUWl4RlFVRnlRanRCUVVOQkxFMUJRVWxETERCQ1FVRXdRaXhGUVVFNVFqczdRVUZGUVN4VFFVRlBPMEZCUTB4RExHTkJRVlVzVlVGQlEwTXNVVUZCUkN4RlFVRmpPMEZCUTNSQ1NqdEJRVU5CTzBGQlEwRXNWVUZCU1VVc2QwSkJRWGRDUnl4UFFVRjRRaXhEUVVGblEwUXNVVUZCYUVNc1RVRkJPRU1zUTBGQlF5eERRVUZ1UkN4RlFVRnpSRHRCUVVOd1JFWXNaME5CUVhkQ1NTeEpRVUY0UWl4RFFVRTJRa1lzVVVGQk4wSTdRVUZEUkR0QlFVTkdMRXRCVUVrN08wRkJVMHhITEZsQlFWRXNWVUZCUTBnc1VVRkJSQ3hGUVVGak8wRkJRM0JDTEZWQlFVMUpMR3RDUVVGclFrNHNkMEpCUVhkQ1J5eFBRVUY0UWl4RFFVRm5RMFFzVVVGQmFFTXNRMEZCZUVJN1FVRkRRU3hWUVVGSlNTeHZRa0ZCYjBJc1EwRkJReXhEUVVGNlFpeEZRVUUwUWp0QlFVTXhRazRzWjBOQlFYZENUeXhOUVVGNFFpeERRVUVyUWtRc1pVRkJMMElzUlVGQlowUXNRMEZCYUVRN1FVRkRSRHRCUVVOR0xFdEJaRWs3TzBGQlowSk1SU3hoUVVGVExGbEJRVTA3TzBGQlNXSTdRVUZLWVN4cFFrRkZLMElzUTBGQlExSXNkVUpCUVVRc1JVRkJNRUpFTEdOQlFURkNMRU5CUmk5Q08wRkJRMkk3TzBGQlEwTkJMRzlDUVVaWk8wRkJSVWxETERaQ1FVWktPMEZCUzJKQkxEaENRVUYzUWxNc1RVRkJlRUlzUjBGQmFVTXNRMEZCYWtNN08wRkJSVUU3UVVGRFFTeFZRVUZOUXl4bFFVRmxXQ3hsUVVGbFZTeE5RVUZ3UXp0QlFVTkJMRmRCUVVzc1NVRkJTVVVzU1VGQlNTeERRVUZpTEVWQlFXZENRU3hKUVVGSlJDeFpRVUZ3UWl4RlFVRnJRME1zUjBGQmJFTXNSVUZCZFVNN1FVRkRja05hTEhWQ1FVRmxXU3hEUVVGbU8wRkJRMFE3UVVGRFJqdEJRVFZDU1N4SFFVRlFPMEZCT0VKRUlpd2labWxzWlNJNkltTnlaV0YwWlMxeVpXNWtaWEl0YzNSbGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLU0I3WEc0Z0lDOHFLbHh1SUNBZ0tpQlhaU0IxYzJVZ2RIZHZJR0Z5Y21GNWN5d2diMjVsSUdadmNpQjBhR2x6SUdaeVlXMWxJR0Z1WkNCdmJtVWdkRzhnY1hWbGRXVWdabTl5SUhSb1pWeHVJQ0FnS2lCdVpYaDBJR1p5WVcxbExDQnlaWFZ6YVc1bklHVmhZMmdnZEc4Z1lYWnZhV1FnUjBNdVhHNGdJQ0FxSUVCMGVYQmxJSHRCY25KaGVYMWNiaUFnSUNvdlhHNGdJR3hsZENCbWRXNWpkR2x2Ym5OVWIxSjFiaUE5SUZ0ZE8xeHVJQ0JzWlhRZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1VnUFNCYlhUdGNibHh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJSE5qYUdWa2RXeGxPaUFvWTJGc2JHSmhZMnNwSUQwK0lIdGNiaUFnSUNBZ0lITjBZWEowVW1WdVpHVnlURzl2Y0NncE8xeHVJQ0FnSUNBZ0x5OGdTV1lnZEdocGN5QmpZV3hzWW1GamF5QnBjMjRuZENCaGJISmxZV1I1SUhOamFHVmtkV3hsWkNCMGJ5QnlkVzRnYm1WNGRDQm1jbUZ0WlZ4dUlDQWdJQ0FnYVdZZ0tHWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTG1sdVpHVjRUMllvWTJGc2JHSmhZMnNwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2Ym5OVWIxSjFiazVsZUhSR2NtRnRaUzV3ZFhOb0tHTmhiR3hpWVdOcktUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyRnVZMlZzT2lBb1kyRnNiR0poWTJzcElEMCtJSHRjYmlBZ0lDQWdJR052Ym5OMElHbHVaR1Y0VDJaRFlXeHNZbUZqYXlBOUlHWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTG1sdVpHVjRUMllvWTJGc2JHSmhZMnNwTzF4dUlDQWdJQ0FnYVdZZ0tHbHVaR1Y0VDJaRFlXeHNZbUZqYXlBaFBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YzNCc2FXTmxLR2x1WkdWNFQyWkRZV3hzWW1GamF5d2dNU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSEJ5YjJObGMzTTZJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDOHZJRk4zWVhBZ2RHaHBjeUJtY21GdFpTQmhibVFnYm1WNGRDQm1jbUZ0WlNCaGNuSmhlWE1nZEc4Z1lYWnZhV1FnUjBOY2JpQWdJQ0FnSUZ0bWRXNWpkR2x2Ym5OVWIxSjFiaXdnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVmRJRDBnVzJaMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxMQ0JtZFc1amRHbHZibk5VYjFKMWJsMDdYRzVjYmlBZ0lDQWdJQzh2SUVOc1pXRnlJRzVsZUhRZ1puSmhiV1VnYkdsemRGeHVJQ0FnSUNBZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YkdWdVozUm9JRDBnTUR0Y2JseHVJQ0FnSUNBZ0x5OGdSWGhsWTNWMFpTQmhiR3dnYjJZZ2RHaHBjeUJtY21GdFpTZHpJR1oxYm1OMGFXOXVjMXh1SUNBZ0lDQWdZMjl1YzNRZ2JuVnRWR2hwYzBaeVlXMWxJRDBnWm5WdVkzUnBiMjV6Vkc5U2RXNHViR1Z1WjNSb08xeHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFVYUdselJuSmhiV1U3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZibk5VYjFKMWJsdHBYU2dwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZUdGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL2NyZWF0ZS1yZW5kZXItc3RlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZFN0eWxlUHJvcGVydHlTdHJpbmc7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcbnZhciB0cmFuc2xhdGVNYXAgPSB7XG4gIHg6IFRSQU5TTEFURSArICdYJyxcbiAgeTogVFJBTlNMQVRFICsgJ1knLFxuICB6OiBUUkFOU0xBVEUgKyAnWidcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkU3R5bGVQcm9wZXJ0eVN0cmluZyhlbGVtZW50LCBzdGF0ZSwgY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgdmFyIHByb3BlcnR5U3RyaW5nID0gJyc7XG4gIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSAnJztcbiAgdmFyIGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICB2YXIgdHJhbnNmb3JtSGFzWiA9IGZhbHNlO1xuXG4gIC8vIEZpcnN0IGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgY2hhbmdlZCB0cmFuc2Zvcm0gdmFsdWVzXG4gIC8vIGFuZCBpZiB0cnVlIGFkZCBhbGwgdHJhbnNmb3JtIHZhbHVlc1xuICB2YXIgbnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNoYW5nZWRWYWx1ZXM7IGkrKykge1xuICAgIHZhciBrZXkgPSBjaGFuZ2VkVmFsdWVzW2ldO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBwcm9wZXJ0eSwgYWRkIGFsbCBvdGhlciB0cmFuc2Zvcm0gcHJvcHNcbiAgICAvLyB0byBjaGFuZ2VkVmFsdWVzIGFuZCB0aGVuIGJyZWFrXG4gICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuXG4gICAgICBmb3IgKHZhciBfa2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRbX2tleV0gJiYgY2hhbmdlZFZhbHVlcy5pbmRleE9mKF9rZXkpID09PSAtMSkge1xuICAgICAgICAgIGNoYW5nZWRWYWx1ZXMucHVzaChfa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgdG90YWxOdW1DaGFuZ2VkVmFsdWVzID0gY2hhbmdlZFZhbHVlcy5sZW5ndGg7XG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCB0b3RhbE51bUNoYW5nZWRWYWx1ZXM7IF9pKyspIHtcbiAgICB2YXIgX2tleTIgPSBjaGFuZ2VkVmFsdWVzW19pXTtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZVtfa2V5Ml07XG5cbiAgICBpZiAodHJhbnNsYXRlTWFwW19rZXkyXSkge1xuICAgICAgX2tleTIgPSB0cmFuc2xhdGVNYXBbX2tleTJdO1xuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSBudW1iZXIgb3Igb2JqZWN0IGFuZCB3ZSBoYXZlIGZpbHRlciwgYXBwbHkgZmlsdGVyXG4gICAgaWYgKF92YWx1ZVR5cGVzMi5kZWZhdWx0W19rZXkyXSAmJiAoKDAsIF91dGlscy5pc051bSkodmFsdWUpIHx8ICgwLCBfdXRpbHMuaXNPYmopKHZhbHVlKSkgJiYgX3ZhbHVlVHlwZXMyLmRlZmF1bHRbX2tleTJdLnRyYW5zZm9ybSkge1xuICAgICAgdmFsdWUgPSBfdmFsdWVUeXBlczIuZGVmYXVsdFtfa2V5Ml0udHJhbnNmb3JtKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W19rZXkyXSkge1xuICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IF9rZXkyICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgdHJhbnNmb3JtSGFzWiA9IF9rZXkyID09PSB0cmFuc2xhdGVNYXAueiA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShfa2V5MiwgdHJ1ZSkgKyAnOicgKyB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSBoYXZlIHRyYW5zZm9ybSBwcm9wcywgYnVpbGQgYSB0cmFuc2Zvcm0gc3RyaW5nXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSB0cmFuc2xhdGVNYXAueiArICcoMCknO1xuICAgIH1cblxuICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKCd0cmFuc2Zvcm0nLCB0cnVlKSArICc6JyArIHRyYW5zZm9ybVN0cmluZztcbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBwcm9wZXJ0eVN0cmluZztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM0psYm1SbGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKaWRXbHNaRk4wZVd4bFVISnZjR1Z5ZEhsVGRISnBibWNpTENKVVVrRk9VMHhCVkVVaUxDSjBjbUZ1YzJ4aGRHVk5ZWEFpTENKNElpd2llU0lzSW5vaUxDSmxiR1Z0Wlc1MElpd2ljM1JoZEdVaUxDSmphR0Z1WjJWa1ZtRnNkV1Z6SWl3aVpXNWhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0aUxDSndjbTl3WlhKMGVWTjBjbWx1WnlJc0luUnlZVzV6Wm05eWJWTjBjbWx1WnlJc0ltaGhjMVJ5WVc1elptOXliU0lzSW5SeVlXNXpabTl5YlVoaGMxb2lMQ0p1ZFcxRGFHRnVaMlZrVm1Gc2RXVnpJaXdpYkdWdVozUm9JaXdpYVNJc0ltdGxlU0lzSW1sdVpHVjRUMllpTENKd2RYTm9JaXdpZEc5MFlXeE9kVzFEYUdGdVoyVmtWbUZzZFdWeklpd2lkbUZzZFdVaUxDSjBjbUZ1YzJadmNtMGlMQ0p6ZEhsc1pTSXNJbU56YzFSbGVIUWlYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZaZDBKQkxIZENPenRCUVZwNFFqczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVVZCTEVsQlFVMURMRmxCUVZrc1YwRkJiRUk3UVVGRFFTeEpRVUZOUXl4bFFVRmxPMEZCUTI1Q1F5eExRVUZIUml4WlFVRlpMRWRCUkVrN1FVRkZia0pITEV0QlFVZElMRmxCUVZrc1IwRkdTVHRCUVVkdVFra3NTMEZCUjBvc1dVRkJXVHRCUVVoSkxFTkJRWEpDT3p0QlFVMWxMRk5CUVZORUxIZENRVUZVTEVOQlFXdERUU3hQUVVGc1F5eEZRVUV5UTBNc1MwRkJNME1zUlVGQmEwUkRMR0ZCUVd4RUxFVkJRV2xGUXl3d1FrRkJha1VzUlVGQk5rWTdRVUZETVVjc1RVRkJTVU1zYVVKQlFXbENMRVZCUVhKQ08wRkJRMEVzVFVGQlNVTXNhMEpCUVd0Q0xFVkJRWFJDTzBGQlEwRXNUVUZCU1VNc1pVRkJaU3hMUVVGdVFqdEJRVU5CTEUxQlFVbERMR2RDUVVGblFpeExRVUZ3UWpzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVFVGQlRVTXNiVUpCUVcxQ1RpeGpRVUZqVHl4TlFVRjJRenRCUVVOQkxFOUJRVXNzU1VGQlNVTXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKUml4blFrRkJjRUlzUlVGQmMwTkZMRWRCUVhSRExFVkJRVEpETzBGQlEzcERMRkZCUVUxRExFMUJRVTFVTEdOQlFXTlJMRU5CUVdRc1EwRkJXanM3UVVGRlFUdEJRVU5CTzBGQlEwRXNVVUZCU1N4NVFrRkJaVU1zUjBGQlppeERRVUZLTEVWQlFYbENPMEZCUTNaQ1RDeHhRa0ZCWlN4SlFVRm1PenRCUVVWQkxGZEJRVXNzU1VGQlNVc3NTVUZCVkN4SlFVRm5RbFlzUzBGQmFFSXNSVUZCZFVJN1FVRkRja0lzV1VGQlNTeDVRa0ZCWlZVc1NVRkJaaXhMUVVGMVFsUXNZMEZCWTFVc1QwRkJaQ3hEUVVGelFrUXNTVUZCZEVJc1RVRkJLMElzUTBGQlF5eERRVUV6UkN4RlFVRTRSRHRCUVVNMVJGUXNkMEpCUVdOWExFbEJRV1FzUTBGQmJVSkdMRWxCUVc1Q08wRkJRMFE3UVVGRFJqczdRVUZGUkR0QlFVTkVPMEZCUTBZN08wRkJSVVFzVFVGQlRVY3NkMEpCUVhkQ1dpeGpRVUZqVHl4TlFVRTFRenRCUVVOQkxFOUJRVXNzU1VGQlNVTXNTMEZCU1N4RFFVRmlMRVZCUVdkQ1FTeExRVUZKU1N4eFFrRkJjRUlzUlVGQk1rTktMRWxCUVRORExFVkJRV2RFTzBGQlF6bERMRkZCUVVsRExGRkJRVTFVTEdOQlFXTlJMRVZCUVdRc1EwRkJWanRCUVVOQkxGRkJRVWxMTEZGQlFWRmtMRTFCUVUxVkxFdEJRVTRzUTBGQldqczdRVUZGUVN4UlFVRkpaaXhoUVVGaFpTeExRVUZpTEVOQlFVb3NSVUZCZFVJN1FVRkRja0pCTEdOQlFVMW1MR0ZCUVdGbExFdEJRV0lzUTBGQlRqdEJRVU5FT3p0QlFVVkVPMEZCUTBFc1VVRkJTU3h4UWtGQlYwRXNTMEZCV0N4TlFVRnZRaXhyUWtGQlRVa3NTMEZCVGl4TFFVRm5RaXhyUWtGQlRVRXNTMEZCVGl4RFFVRndReXhMUVVGeFJDeHhRa0ZCVjBvc1MwRkJXQ3hGUVVGblFrc3NVMEZCZWtVc1JVRkJiMFk3UVVGRGJFWkVMR05CUVZFc2NVSkJRVmRLTEV0QlFWZ3NSVUZCWjBKTExGTkJRV2hDTEVOQlFUQkNSQ3hMUVVFeFFpeERRVUZTTzBGQlEwUTdPMEZCUlVRc1VVRkJTU3g1UWtGQlpVb3NTMEZCWml4RFFVRktMRVZCUVhsQ08wRkJRM1pDVGl4NVFrRkJiVUpOTEZGQlFVMHNSMEZCVGl4SFFVRlpTU3hMUVVGYUxFZEJRVzlDTEVsQlFYWkRPMEZCUTBGU0xITkNRVUZwUWtrc1ZVRkJVV1lzWVVGQllVY3NRMEZCZEVJc1IwRkJNa0lzU1VGQk0wSXNSMEZCYTBOUkxHRkJRV3hFTzBGQlJVUXNTMEZLUkN4TlFVbFBPMEZCUTB4SUxIZENRVUZyUWl4TlFVRk5MSGRDUVVGVFR5eExRVUZVTEVWQlFXTXNTVUZCWkN4RFFVRk9MRWRCUVRSQ0xFZEJRVFZDTEVkQlFXdERTU3hMUVVGd1JEdEJRVU5FTzBGQlEwWTdPMEZCUlVRN1FVRkRRU3hOUVVGSlZDeFpRVUZLTEVWQlFXdENPMEZCUTJoQ0xGRkJRVWtzUTBGQlEwTXNZVUZCUkN4SlFVRnJRa29zTUVKQlFYUkNMRVZCUVd0RU8wRkJRMmhFUlN4NVFrRkJiVUpVTEdGQlFXRkhMRU5CUVdJc1IwRkJhVUlzUzBGQmNFTTdRVUZEUkRzN1FVRkZSRXNzYzBKQlFXdENMRTFCUVUwc2QwSkJRVk1zVjBGQlZDeEZRVUZ6UWl4SlFVRjBRaXhEUVVGT0xFZEJRVzlETEVkQlFYQkRMRWRCUVRCRFF5eGxRVUUxUkR0QlFVTkVPenRCUVVWRVRDeFZRVUZSYVVJc1MwRkJVaXhEUVVGalF5eFBRVUZrTEVsQlFYbENaQ3hqUVVGNlFqdEJRVU5FSWl3aVptbHNaU0k2SW5KbGJtUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lCbWNtOXRJQ2N1TDNSeVlXNXpabTl5YlMxd2NtOXdjeWM3WEc1cGJYQnZjblFnZG1Gc2RXVlVlWEJsY3lCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekp6dGNibWx0Y0c5eWRDQndjbVZtYVhobGNpQm1jbTl0SUNjdUwzQnlaV1pwZUdWeUp6dGNibWx0Y0c5eWRDQjdJR2x6VG5WdExDQnBjMDlpYWlCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtTnZibk4wSUZSU1FVNVRURUZVUlNBOUlDZDBjbUZ1YzJ4aGRHVW5PMXh1WTI5dWMzUWdkSEpoYm5Oc1lYUmxUV0Z3SUQwZ2UxeHVJQ0I0T2lCVVVrRk9VMHhCVkVVZ0t5QW5XQ2NzWEc0Z0lIazZJRlJTUVU1VFRFRlVSU0FySUNkWkp5eGNiaUFnZWpvZ1ZGSkJUbE5NUVZSRklDc2dKMW9uWEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmlkV2xzWkZOMGVXeGxVSEp2Y0dWeWRIbFRkSEpwYm1jb1pXeGxiV1Z1ZEN3Z2MzUmhkR1VzSUdOb1lXNW5aV1JXWVd4MVpYTXNJR1Z1WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVLU0I3WEc0Z0lHeGxkQ0J3Y205d1pYSjBlVk4wY21sdVp5QTlJQ2NuTzF4dUlDQnNaWFFnZEhKaGJuTm1iM0p0VTNSeWFXNW5JRDBnSnljN1hHNGdJR3hsZENCb1lYTlVjbUZ1YzJadmNtMGdQU0JtWVd4elpUdGNiaUFnYkdWMElIUnlZVzV6Wm05eWJVaGhjMW9nUFNCbVlXeHpaVHRjYmx4dUlDQXZMeUJHYVhKemRDQmphR1ZqYXlCcFppQjBhR1Z5WlNCaGNtVWdZVzU1SUdOb1lXNW5aV1FnZEhKaGJuTm1iM0p0SUhaaGJIVmxjMXh1SUNBdkx5QmhibVFnYVdZZ2RISjFaU0JoWkdRZ1lXeHNJSFJ5WVc1elptOXliU0IyWVd4MVpYTmNiaUFnWTI5dWMzUWdiblZ0UTJoaGJtZGxaRlpoYkhWbGN5QTlJR05vWVc1blpXUldZV3gxWlhNdWJHVnVaM1JvTzF4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlVOb1lXNW5aV1JXWVd4MVpYTTdJR2tyS3lrZ2UxeHVJQ0FnSUdOdmJuTjBJR3RsZVNBOUlHTm9ZVzVuWldSV1lXeDFaWE5iYVYwN1hHNWNiaUFnSUNBdkx5QkpaaUIwYUdseklHbHpJR0VnZEhKaGJuTm1iM0p0SUhCeWIzQmxjblI1TENCaFpHUWdZV3hzSUc5MGFHVnlJSFJ5WVc1elptOXliU0J3Y205d2MxeHVJQ0FnSUM4dklIUnZJR05vWVc1blpXUldZV3gxWlhNZ1lXNWtJSFJvWlc0Z1luSmxZV3RjYmlBZ0lDQnBaaUFvZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ2FHRnpWSEpoYm5ObWIzSnRJRDBnZEhKMVpUdGNibHh1SUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlITjBZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTFRY205d2MxdHJaWGxkSUNZbUlHTm9ZVzVuWldSV1lXeDFaWE11YVc1a1pYaFBaaWhyWlhrcElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR05vWVc1blpXUldZV3gxWlhNdWNIVnphQ2hyWlhrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHTnZibk4wSUhSdmRHRnNUblZ0UTJoaGJtZGxaRlpoYkhWbGN5QTlJR05vWVc1blpXUldZV3gxWlhNdWJHVnVaM1JvTzF4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJ2ZEdGc1RuVnRRMmhoYm1kbFpGWmhiSFZsY3pzZ2FTc3JLU0I3WEc0Z0lDQWdiR1YwSUd0bGVTQTlJR05vWVc1blpXUldZV3gxWlhOYmFWMDdYRzRnSUNBZ2JHVjBJSFpoYkhWbElEMGdjM1JoZEdWYmEyVjVYVHRjYmx4dUlDQWdJR2xtSUNoMGNtRnVjMnhoZEdWTllYQmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ2EyVjVJRDBnZEhKaGJuTnNZWFJsVFdGd1cydGxlVjA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnU1dZZ2RHaHBjeUJwY3lCaElHNTFiV0psY2lCdmNpQnZZbXBsWTNRZ1lXNWtJSGRsSUdoaGRtVWdabWxzZEdWeUxDQmhjSEJzZVNCbWFXeDBaWEpjYmlBZ0lDQnBaaUFvZG1Gc2RXVlVlWEJsYzF0clpYbGRJQ1ltSUNocGMwNTFiU2gyWVd4MVpTa2dmSHdnYVhOUFltb29kbUZzZFdVcEtTQW1KaUIyWVd4MVpWUjVjR1Z6VzJ0bGVWMHVkSEpoYm5ObWIzSnRLU0I3WEc0Z0lDQWdJQ0IyWVd4MVpTQTlJSFpoYkhWbFZIbHdaWE5iYTJWNVhTNTBjbUZ1YzJadmNtMG9kbUZzZFdVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMVFjbTl3YzF0clpYbGRLU0I3WEc0Z0lDQWdJQ0IwY21GdWMyWnZjbTFUZEhKcGJtY2dLejBnYTJWNUlDc2dKeWduSUNzZ2RtRnNkV1VnS3lBbktTQW5PMXh1SUNBZ0lDQWdkSEpoYm5ObWIzSnRTR0Z6V2lBOUlDaHJaWGtnUFQwOUlIUnlZVzV6YkdGMFpVMWhjQzU2S1NBL0lIUnlkV1VnT2lCMGNtRnVjMlp2Y20xSVlYTmFPMXh1WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIQnliM0JsY25SNVUzUnlhVzVuSUNzOUlDYzdKeUFySUhCeVpXWnBlR1Z5S0d0bGVTd2dkSEoxWlNrZ0t5QW5PaWNnS3lCMllXeDFaVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2THlCSlppQjNaU0JvWVhabElIUnlZVzV6Wm05eWJTQndjbTl3Y3l3Z1luVnBiR1FnWVNCMGNtRnVjMlp2Y20wZ2MzUnlhVzVuWEc0Z0lHbG1JQ2hvWVhOVWNtRnVjMlp2Y20wcElIdGNiaUFnSUNCcFppQW9JWFJ5WVc1elptOXliVWhoYzFvZ0ppWWdaVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNHBJSHRjYmlBZ0lDQWdJSFJ5WVc1elptOXliVk4wY21sdVp5QXJQU0IwY21GdWMyeGhkR1ZOWVhBdWVpQXJJQ2NvTUNrbk8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhCeWIzQmxjblI1VTNSeWFXNW5JQ3M5SUNjN0p5QXJJSEJ5WldacGVHVnlLQ2QwY21GdWMyWnZjbTBuTENCMGNuVmxLU0FySUNjNkp5QXJJSFJ5WVc1elptOXliVk4wY21sdVp6dGNiaUFnZlZ4dVhHNGdJR1ZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBclBTQndjbTl3WlhKMGVWTjBjbWx1Wnp0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy9yZW5kZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGF4ZXMgPSBbJ1gnLCAnWScsICdaJ107XG5cbnZhciB0cmFuc2Zvcm1Qcm9wcyA9IHtcbiAgeDogdHJ1ZSxcbiAgeTogdHJ1ZSxcbiAgejogdHJ1ZVxufTtcblxudmFyIFNDQUxFID0gJ3NjYWxlJztcbnZhciBST1RBVEUgPSAncm90YXRlJztcbnZhciBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xudmFyIFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaChmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gYXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWU7XG4gIH0pO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zZm9ybVByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzUnlZVzV6Wm05eWJTMXdjbTl3Y3k1cWN5SmRMQ0p1WVcxbGN5STZXeUpoZUdWeklpd2lkSEpoYm5ObWIzSnRVSEp2Y0hNaUxDSjRJaXdpZVNJc0lub2lMQ0pUUTBGTVJTSXNJbEpQVkVGVVJTSXNJbFJTUVU1VFJrOVNUVjlRUlZKVFVFVkRWRWxXUlNJc0lsUkZVazFUSWl3aVptOXlSV0ZqYUNJc0luUmxjbTBpTENKaGVHbHpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4SlFVRk5RU3hQUVVGUExFTkJRVU1zUjBGQlJDeEZRVUZOTEVkQlFVNHNSVUZCVnl4SFFVRllMRU5CUVdJN08wRkJSVUVzU1VGQlNVTXNhVUpCUVdsQ08wRkJRMjVDUXl4TFFVRkhMRWxCUkdkQ08wRkJSVzVDUXl4TFFVRkhMRWxCUm1kQ08wRkJSMjVDUXl4TFFVRkhPMEZCU0dkQ0xFTkJRWEpDT3p0QlFVMUJMRWxCUVUxRExGRkJRVkVzVDBGQlpEdEJRVU5CTEVsQlFVMURMRk5CUVZNc1VVRkJaanRCUVVOQkxFbEJRVTFETEhkQ1FVRjNRaXh6UWtGQk9VSTdRVUZEUVN4SlFVRk5ReXhSUVVGUkxFTkJRVU1zVjBGQlJDeEZRVUZqU0N4TFFVRmtMRVZCUVhGQ1F5eE5RVUZ5UWl4RlFVRTJRaXhOUVVFM1FpeEZRVUZ4UTBNc2NVSkJRWEpETEVOQlFXUTdPMEZCUlVGT0xHVkJRV1ZMTEUxQlFXWXNTVUZCZVVKTUxHVkJRV1ZKTEV0QlFXWXNTVUZCZDBKS0xHVkJRV1ZOTEhGQ1FVRm1MRWxCUVhkRExFbEJRWHBHT3p0QlFVVkJReXhOUVVGTlF5eFBRVUZPTEVOQlFXTXNWVUZCUTBNc1NVRkJSRHRCUVVGQkxGTkJRVlZXTEV0QlFVdFRMRTlCUVV3c1EwRkJZU3hWUVVGRFJTeEpRVUZFTzBGQlFVRXNWMEZCVlZZc1pVRkJaVk1zVDBGQlQwTXNTVUZCZEVJc1NVRkJPRUlzU1VGQmVFTTdRVUZCUVN4SFFVRmlMRU5CUVZZN1FVRkJRU3hEUVVGa096dHJRa0ZGWlZZc1l5SXNJbVpwYkdVaU9pSjBjbUZ1YzJadmNtMHRjSEp2Y0hNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JoZUdWeklEMGdXeWRZSnl3Z0oxa25MQ0FuV2lkZE8xeHVYRzVzWlhRZ2RISmhibk5tYjNKdFVISnZjSE1nUFNCN1hHNGdJSGc2SUhSeWRXVXNYRzRnSUhrNklIUnlkV1VzWEc0Z0lIbzZJSFJ5ZFdWY2JuMDdYRzVjYm1OdmJuTjBJRk5EUVV4RklEMGdKM05qWVd4bEp6dGNibU52Ym5OMElGSlBWRUZVUlNBOUlDZHliM1JoZEdVbk8xeHVZMjl1YzNRZ1ZGSkJUbE5HVDFKTlgxQkZVbE5RUlVOVVNWWkZJRDBnSjNSeVlXNXpabTl5YlZCbGNuTndaV04wYVhabEp6dGNibU52Ym5OMElGUkZVazFUSUQwZ1d5ZDBjbUZ1YzJ4aGRHVW5MQ0JUUTBGTVJTd2dVazlVUVZSRkxDQW5jMnRsZHljc0lGUlNRVTVUUms5U1RWOVFSVkpUVUVWRFZFbFdSVjA3WEc1Y2JuUnlZVzV6Wm05eWJWQnliM0J6VzFKUFZFRlVSVjBnUFNCMGNtRnVjMlp2Y20xUWNtOXdjMXRUUTBGTVJWMGdQU0IwY21GdWMyWnZjbTFRY205d2MxdFVVa0ZPVTBaUFVrMWZVRVZTVTFCRlExUkpWa1ZkSUQwZ2RISjFaVHRjYmx4dVZFVlNUVk11Wm05eVJXRmphQ2dvZEdWeWJTa2dQVDRnWVhobGN5NW1iM0pGWVdOb0tDaGhlR2x6S1NBOVBpQjBjbUZ1YzJadmNtMVFjbTl3YzF0MFpYSnRJQ3NnWVhocGMxMGdQU0IwY25WbEtTazdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSFJ5WVc1elptOXliVkJ5YjNCek95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL3RyYW5zZm9ybS1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL2luYy92YWx1ZS10eXBlcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIC8vIENvbG9yIHByb3BzXG4gIGNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYmFja2dyb3VuZENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgb3V0bGluZUNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgZmlsbDogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIHN0cm9rZTogX3ZhbHVlVHlwZXMuY29sb3IsXG5cbiAgLy8gQm9yZGVyIHByb3BzXG4gIGJvcmRlckNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyVG9wQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJSaWdodENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyQm90dG9tQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJMZWZ0Q29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJSYWRpdXM6IF92YWx1ZVR5cGVzLnB4LFxuXG4gIC8vIFBvc2l0aW9uaW5nXG4gIHdpZHRoOiBfdmFsdWVUeXBlcy5weCxcbiAgaGVpZ2h0OiBfdmFsdWVUeXBlcy5weCxcblxuICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICByb3RhdGU6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVg6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVk6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVo6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHNjYWxlOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVYOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVZOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVaOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2tld1g6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHNrZXdZOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICBkaXN0YW5jZTogX3ZhbHVlVHlwZXMucHgsXG4gIHRyYW5zbGF0ZVg6IF92YWx1ZVR5cGVzLnB4LFxuICB0cmFuc2xhdGVZOiBfdmFsdWVUeXBlcy5weCxcbiAgdHJhbnNsYXRlWjogX3ZhbHVlVHlwZXMucHgsXG4gIHBlcnNwZWN0aXZlOiBfdmFsdWVUeXBlcy5weCxcbiAgb3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGFcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNaaGJIVmxMWFI1Y0dWekxtcHpJbDBzSW01aGJXVnpJanBiSW1OdmJHOXlJaXdpWW1GamEyZHliM1Z1WkVOdmJHOXlJaXdpYjNWMGJHbHVaVU52Ykc5eUlpd2labWxzYkNJc0luTjBjbTlyWlNJc0ltSnZjbVJsY2tOdmJHOXlJaXdpWW05eVpHVnlWRzl3UTI5c2IzSWlMQ0ppYjNKa1pYSlNhV2RvZEVOdmJHOXlJaXdpWW05eVpHVnlRbTkwZEc5dFEyOXNiM0lpTENKaWIzSmtaWEpNWldaMFEyOXNiM0lpTENKaWIzSmtaWEpTWVdScGRYTWlMQ0ozYVdSMGFDSXNJbWhsYVdkb2RDSXNJbkp2ZEdGMFpTSXNJbkp2ZEdGMFpWZ2lMQ0p5YjNSaGRHVlpJaXdpY205MFlYUmxXaUlzSW5OallXeGxJaXdpYzJOaGJHVllJaXdpYzJOaGJHVlpJaXdpYzJOaGJHVmFJaXdpYzJ0bGQxZ2lMQ0p6YTJWM1dTSXNJbVJwYzNSaGJtTmxJaXdpZEhKaGJuTnNZWFJsV0NJc0luUnlZVzV6YkdGMFpWa2lMQ0owY21GdWMyeGhkR1ZhSWl3aWNHVnljM0JsWTNScGRtVWlMQ0p2Y0dGamFYUjVJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN08ydENRVU5sTzBGQlEySTdRVUZEUVVFc01FSkJSbUU3UVVGSFlrTXNiME5CU0dFN1FVRkpZa01zYVVOQlNtRTdRVUZMWWtNc2VVSkJUR0U3UVVGTllrTXNNa0pCVG1FN08wRkJVV0k3UVVGRFFVTXNaME5CVkdFN1FVRlZZa01zYlVOQlZtRTdRVUZYWWtNc2NVTkJXR0U3UVVGWllrTXNjME5CV21FN1FVRmhZa01zYjBOQlltRTdRVUZqWWtNc09FSkJaR0U3TzBGQlowSmlPMEZCUTBGRExIVkNRV3BDWVR0QlFXdENZa01zZDBKQmJFSmhPenRCUVc5Q1lqdEJRVU5CUXl3MlFrRnlRbUU3UVVGelFtSkRMRGhDUVhSQ1lUdEJRWFZDWWtNc09FSkJka0poTzBGQmQwSmlReXc0UWtGNFFtRTdRVUY1UW1KRExEQkNRWHBDWVR0QlFUQkNZa01zTWtKQk1VSmhPMEZCTWtKaVF5d3lRa0V6UW1FN1FVRTBRbUpETERKQ1FUVkNZVHRCUVRaQ1lrTXNORUpCTjBKaE8wRkJPRUppUXl3MFFrRTVRbUU3UVVFclFtSkRMREJDUVM5Q1lUdEJRV2REWWtNc05FSkJhRU5oTzBGQmFVTmlReXcwUWtGcVEyRTdRVUZyUTJKRExEUkNRV3hEWVR0QlFXMURZa01zTmtKQmJrTmhPMEZCYjBOaVF6dEJRWEJEWVN4RElpd2labWxzWlNJNkluWmhiSFZsTFhSNWNHVnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZV3h3YUdFc0lHTnZiRzl5TENCa1pXZHlaV1Z6TENCelkyRnNaU3dnY0hnZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRtRnNkV1V0ZEhsd1pYTW5PeUJjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0x5OGdRMjlzYjNJZ2NISnZjSE5jYmlBZ1kyOXNiM0k2SUdOdmJHOXlMRnh1SUNCaVlXTnJaM0p2ZFc1a1EyOXNiM0k2SUdOdmJHOXlMRnh1SUNCdmRYUnNhVzVsUTI5c2IzSTZJR052Ykc5eUxGeHVJQ0JtYVd4c09pQmpiMnh2Y2l4Y2JpQWdjM1J5YjJ0bE9pQmpiMnh2Y2l4Y2JseHVJQ0F2THlCQ2IzSmtaWElnY0hKdmNITmNiaUFnWW05eVpHVnlRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQmliM0prWlhKVWIzQkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHSnZjbVJsY2xKcFoyaDBRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQmliM0prWlhKQ2IzUjBiMjFEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0p2Y21SbGNreGxablJEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0p2Y21SbGNsSmhaR2wxY3pvZ2NIZ3NYRzVjYmlBZ0x5OGdVRzl6YVhScGIyNXBibWRjYmlBZ2QybGtkR2c2SUhCNExGeHVJQ0JvWldsbmFIUTZJSEI0TENBZ1hHNWNiaUFnTHk4Z1ZISmhibk5tYjNKdElIQnliM0JsY25ScFpYTmNiaUFnY205MFlYUmxPaUJrWldkeVpXVnpMRnh1SUNCeWIzUmhkR1ZZT2lCa1pXZHlaV1Z6TEZ4dUlDQnliM1JoZEdWWk9pQmtaV2R5WldWekxGeHVJQ0J5YjNSaGRHVmFPaUJrWldkeVpXVnpMRnh1SUNCelkyRnNaVG9nYzJOaGJHVXNYRzRnSUhOallXeGxXRG9nYzJOaGJHVXNYRzRnSUhOallXeGxXVG9nYzJOaGJHVXNYRzRnSUhOallXeGxXam9nYzJOaGJHVXNYRzRnSUhOclpYZFlPaUJrWldkeVpXVnpMRnh1SUNCemEyVjNXVG9nWkdWbmNtVmxjeXhjYmlBZ1pHbHpkR0Z1WTJVNklIQjRMRnh1SUNCMGNtRnVjMnhoZEdWWU9pQndlQ3hjYmlBZ2RISmhibk5zWVhSbFdUb2djSGdzWEc0Z0lIUnlZVzV6YkdGMFpWbzZJSEI0TEZ4dUlDQndaWEp6Y0dWamRHbDJaVG9nY0hnc1hHNGdJRzl3WVdOcGRIazZJR0ZzY0doaFhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy92YWx1ZS10eXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIGNhbWVsQ2FjaGUgPSB7fTtcbnZhciBkYXNoQ2FjaGUgPSB7fTtcbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJywgJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHRlc3RFbGVtZW50ID0gdm9pZCAwO1xuXG4vKlxuICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gIFxuICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIHZhciBub1ByZWZpeCA9IHByZWZpeCA9PT0gJyc7XG4gICAgdmFyIHByZWZpeGVkUHJvcGVydHlOYW1lID0gbm9QcmVmaXggPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICBpZiAocHJlZml4ZWRQcm9wZXJ0eU5hbWUgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgIGNhbWVsQ2FjaGVba2V5XSA9IHByZWZpeGVkUHJvcGVydHlOYW1lO1xuICAgICAgZGFzaENhY2hlW2tleV0gPSAnJyArIChub1ByZWZpeCA/ICcnIDogJy0nKSArICgwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKHByZWZpeGVkUHJvcGVydHlOYW1lKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChrZXksIGFzRGFzaENhc2UpIHtcbiAgdmFyIGNhY2hlID0gYXNEYXNoQ2FzZSA/IGRhc2hDYWNoZSA6IGNhbWVsQ2FjaGU7XG5cbiAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgdGVzdFByZWZpeChrZXkpO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzQnlaV1pwZUdWeUxtcHpJbDBzSW01aGJXVnpJanBiSW1OaGJXVnNRMkZqYUdVaUxDSmtZWE5vUTJGamFHVWlMQ0p3Y21WbWFYaGxjeUlzSW01MWJWQnlaV1pwZUdWeklpd2liR1Z1WjNSb0lpd2lkR1Z6ZEVWc1pXMWxiblFpTENKMFpYTjBVSEpsWm1sNElpd2lhMlY1SWl3aVpHOWpkVzFsYm5RaUxDSmpjbVZoZEdWRmJHVnRaVzUwSWl3aWFTSXNJbkJ5WldacGVDSXNJbTV2VUhKbFptbDRJaXdpY0hKbFptbDRaV1JRY205d1pYSjBlVTVoYldVaUxDSmphR0Z5UVhRaUxDSjBiMVZ3Y0dWeVEyRnpaU0lzSW5Oc2FXTmxJaXdpYzNSNWJHVWlMQ0poYzBSaGMyaERZWE5sSWl3aVkyRmphR1VpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdRVUZGUVN4SlFVRk5RU3hoUVVGaExFVkJRVzVDTzBGQlEwRXNTVUZCVFVNc1dVRkJXU3hGUVVGc1FqdEJRVU5CTEVsQlFVMURMRmRCUVZjc1EwRkJReXhSUVVGRUxFVkJRVlVzUzBGQlZpeEZRVUZuUWl4SFFVRm9RaXhGUVVGdlFpeEpRVUZ3UWl4RlFVRXdRaXhGUVVFeFFpeERRVUZxUWp0QlFVTkJMRWxCUVUxRExHTkJRV05FTEZOQlFWTkZMRTFCUVRkQ08wRkJRMEVzU1VGQlNVTXNiMEpCUVVvN08wRkJSVUU3T3pzN096dEJRVTFCTEVsQlFVMURMR0ZCUVdFc1ZVRkJRME1zUjBGQlJDeEZRVUZUTzBGQlF6RkNSaXhuUWtGQlkwRXNaVUZCWlVjc1UwRkJVME1zWVVGQlZDeERRVUYxUWl4TFFVRjJRaXhEUVVFM1FqczdRVUZGUVN4UFFVRkxMRWxCUVVsRExFbEJRVWtzUTBGQllpeEZRVUZuUWtFc1NVRkJTVkFzVjBGQmNFSXNSVUZCYVVOUExFZEJRV3BETEVWQlFYTkRPMEZCUTNCRExGRkJRVTFETEZOQlFWTlVMRk5CUVZOUkxFTkJRVlFzUTBGQlpqdEJRVU5CTEZGQlFVMUZMRmRCUVZsRUxGZEJRVmNzUlVGQk4wSTdRVUZEUVN4UlFVRk5SU3gxUWtGQmRVSkVMRmRCUVZkTUxFZEJRVmdzUjBGQmFVSkpMRk5CUVZOS0xFbEJRVWxQTEUxQlFVb3NRMEZCVnl4RFFVRllMRVZCUVdORExGZEJRV1FzUlVGQlZDeEhRVUYxUTFJc1NVRkJTVk1zUzBGQlNpeERRVUZWTEVOQlFWWXNRMEZCY2tZN08wRkJSVUVzVVVGQlNVZ3NkMEpCUVhkQ1VpeFpRVUZaV1N4TFFVRjRReXhGUVVFclF6dEJRVU0zUTJwQ0xHbENRVUZYVHl4SFFVRllMRWxCUVd0Q1RTeHZRa0ZCYkVJN1FVRkRRVm9zWjBKQlFWVk5MRWRCUVZZc1ZVRkJjVUpMTEZkQlFWY3NSVUZCV0N4SFFVRm5RaXhIUVVGeVF5eEpRVUUwUXl4M1FrRkJXVU1zYjBKQlFWb3NRMEZCTlVNN1FVRkRSRHRCUVVOR08wRkJRMFlzUTBGaVJEczdhMEpCWldVc1ZVRkJRMDRzUjBGQlJDeEZRVUZOVnl4VlFVRk9MRVZCUVhGQ08wRkJRMnhETEUxQlFVMURMRkZCUVZGRUxHRkJRV0ZxUWl4VFFVRmlMRWRCUVhsQ1JDeFZRVUYyUXpzN1FVRkZRU3hOUVVGSkxFTkJRVU50UWl4TlFVRk5XaXhIUVVGT0xFTkJRVXdzUlVGQmFVSTdRVUZEWmtRc1pVRkJWME1zUjBGQldEdEJRVU5FT3p0QlFVVkVMRk5CUVU5WkxFMUJRVTFhTEVkQlFVNHNRMEZCVUR0QlFVTkVMRU1pTENKbWFXeGxJam9pY0hKbFptbDRaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJqWVcxbGJGUnZSR0Z6YUNCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtTnZibk4wSUdOaGJXVnNRMkZqYUdVZ1BTQjdmVHRjYm1OdmJuTjBJR1JoYzJoRFlXTm9aU0E5SUh0OU8xeHVZMjl1YzNRZ2NISmxabWw0WlhNZ1BTQmJKMWRsWW10cGRDY3NKMDF2ZWljc0owOG5MQ2R0Y3ljc0lDY25YVHRjYm1OdmJuTjBJRzUxYlZCeVpXWnBlR1Z6SUQwZ2NISmxabWw0WlhNdWJHVnVaM1JvTzF4dWJHVjBJSFJsYzNSRmJHVnRaVzUwTzF4dVhHNHZLbHh1SUNCVVpYTjBJSE4wZVd4bElIQnliM0JsY25SNUlHWnZjaUJ3Y21WbWFYaGxaQ0IyWlhKemFXOXVYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGTjBlV3hsSUhCeWIzQmxjblI1WEc0Z0lFQnlaWFIxY200Z1czTjBjbWx1WjEwNklFTmhZMmhsWkNCd2NtOXdaWEowZVNCdVlXMWxYRzRxTDF4dVkyOXVjM1FnZEdWemRGQnlaV1pwZUNBOUlDaHJaWGtwSUQwK0lIdGNiaUFnZEdWemRFVnNaVzFsYm5RZ1BTQjBaWE4wUld4bGJXVnVkQ0I4ZkNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ2RrYVhZbktUdGNibHh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVkJ5WldacGVHVnpPeUJwS3lzcElIdGNiaUFnSUNCamIyNXpkQ0J3Y21WbWFYZ2dQU0J3Y21WbWFYaGxjMXRwWFR0Y2JpQWdJQ0JqYjI1emRDQnViMUJ5WldacGVDQTlJQ2h3Y21WbWFYZ2dQVDA5SUNjbktUdGNiaUFnSUNCamIyNXpkQ0J3Y21WbWFYaGxaRkJ5YjNCbGNuUjVUbUZ0WlNBOUlHNXZVSEpsWm1sNElEOGdhMlY1SURvZ2NISmxabWw0SUNzZ2EyVjVMbU5vWVhKQmRDZ3dLUzUwYjFWd2NHVnlRMkZ6WlNncElDc2dhMlY1TG5Oc2FXTmxLREVwTzF4dVhHNGdJQ0FnYVdZZ0tIQnlaV1pwZUdWa1VISnZjR1Z5ZEhsT1lXMWxJR2x1SUhSbGMzUkZiR1Z0Wlc1MExuTjBlV3hsS1NCN1hHNGdJQ0FnSUNCallXMWxiRU5oWTJobFcydGxlVjBnUFNCd2NtVm1hWGhsWkZCeWIzQmxjblI1VG1GdFpUdGNiaUFnSUNBZ0lHUmhjMmhEWVdOb1pWdHJaWGxkSUQwZ1lDUjdLRzV2VUhKbFptbDRJRDhnSnljZ09pQW5MU2NwZlNSN1kyRnRaV3hVYjBSaGMyZ29jSEpsWm1sNFpXUlFjbTl3WlhKMGVVNWhiV1VwZldBN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2EyVjVMQ0JoYzBSaGMyaERZWE5sS1NBOVBpQjdYRzRnSUdOdmJuTjBJR05oWTJobElEMGdZWE5FWVhOb1EyRnpaU0EvSUdSaGMyaERZV05vWlNBNklHTmhiV1ZzUTJGamFHVTdYRzVjYmlBZ2FXWWdLQ0ZqWVdOb1pWdHJaWGxkS1NCN1hHNGdJQ0FnZEdWemRGQnlaV1pwZUNoclpYa3BPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJR05oWTJobFcydGxlVjA3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL3ByZWZpeGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnQsIGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCAqIGxlbmd0aCArICdweCc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RhdGUsIGxlbmd0aCkge1xuICB2YXIgc3R5bGVzID0ge307XG4gIHZhciBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgbGVuZ3RoOiAwLFxuICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgfTtcbiAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MWEJoZEdndlluVnBiR1F1YW5NaVhTd2libUZ0WlhNaU9sc2ljR1Z5WTJWdWRGUnZVR2w0Wld4eklpd2ljR1Z5WTJWdWRDSXNJbXhsYm1kMGFDSXNJbkJoY25ObFJteHZZWFFpTENKemRHRjBaU0lzSW5OMGVXeGxjeUlzSW1SaGMyaEJjbkpoZVZOMGVXeGxjeUlzSW5Od1lXTnBibWNpTENKb1lYTkVZWE5vUVhKeVlYa2lMQ0pyWlhraUxDSm9ZWE5QZDI1UWNtOXdaWEowZVNJc0luWmhiSFZsSWwwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFUczdPenM3TzBGQlRVRXNTVUZCVFVFc2EwSkJRV3RDTEZWQlFVTkRMRTlCUVVRc1JVRkJWVU1zVFVGQlZqdEJRVUZCTEZOQlFYTkNReXhYUVVGWFJpeFBRVUZZTEVsQlFYTkNMRWRCUVhaQ0xFZEJRVGhDUXl4TlFVRTVRaXhIUVVGMVF5eEpRVUUxUkR0QlFVRkJMRU5CUVhoQ096dHJRa0ZGWlN4VlFVRkRSU3hMUVVGRUxFVkJRVkZHTEUxQlFWSXNSVUZCYlVJN1FVRkRhRU1zVFVGQlRVY3NVMEZCVXl4RlFVRm1PMEZCUTBFc1RVRkJUVU1zYTBKQlFXdENPMEZCUTNSQ1NpeFpRVUZSTEVOQlJHTTdRVUZGZEVKTExHRkJRVk5NTEZOQlFWTTdRVUZHU1N4SFFVRjRRanRCUVVsQkxFMUJRVWxOTEdWQlFXVXNTMEZCYmtJN08wRkJSVUVzVDBGQlN5eEpRVUZKUXl4SFFVRlVMRWxCUVdkQ1RDeExRVUZvUWl4RlFVRjFRanRCUVVOeVFpeFJRVUZKUVN4TlFVRk5UU3hqUVVGT0xFTkJRWEZDUkN4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6ZENMRlZCUVUxRkxGRkJRVkZRTEUxQlFVMUxMRWRCUVU0c1EwRkJaRHM3UVVGRlFTeGpRVUZSUVN4SFFVRlNPMEZCUTBFc1lVRkJTeXhSUVVGTU8wRkJRMEVzWVVGQlN5eFRRVUZNTzBGQlEwVkVMSGxDUVVGbExFbEJRV1k3UVVGRFFVWXNNRUpCUVdkQ1J5eEhRVUZvUWl4SlFVRjFRbFFzWjBKQlFXZENWeXhMUVVGb1FpeEZRVUYxUWxRc1RVRkJka0lzUTBGQmRrSTdRVUZEUVR0QlFVTkdMR0ZCUVVzc1VVRkJURHRCUVVORlJ5eHBRa0ZCVHl4dFFrRkJVQ3hKUVVFNFFrd3NaMEpCUVdkQ0xFTkJRVU5YTEV0QlFXcENMRVZCUVhkQ1ZDeE5RVUY0UWl4RFFVRTVRanRCUVVOQk8wRkJRMFk3UVVGRFJVY3NhVUpCUVU5SkxFZEJRVkFzU1VGQlkwVXNTMEZCWkR0QlFWWkdPMEZCV1VRN1FVRkRSanM3UVVGRlJDeE5RVUZKU0N4WlFVRktMRVZCUVd0Q08wRkJRMmhDU0N4WFFVRlBMR3RDUVVGUUxFbEJRVFpDUXl4blFrRkJaMEpLTEUxQlFXaENMRWRCUVhsQ0xFZEJRWHBDTEVkQlFTdENTU3huUWtGQlowSkRMRTlCUVRWRk8wRkJRMFE3TzBGQlJVUXNVMEZCVDBZc1RVRkJVRHRCUVVORUxFTWlMQ0ptYVd4bElqb2lZblZwYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0JEYjI1MlpYSjBJSEJsY21ObGJuUmhaMlVnZEc4Z2NHbDRaV3h6WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJsY21ObGJuUmhaMlVnYjJZZ2RHOTBZV3dnYkdWdVozUm9YRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVkc5MFlXd2diR1Z1WjNSb1hHNHFMMXh1WTI5dWMzUWdjR1Z5WTJWdWRGUnZVR2w0Wld4eklEMGdLSEJsY21ObGJuUXNJR3hsYm1kMGFDa2dQVDRnS0hCaGNuTmxSbXh2WVhRb2NHVnlZMlZ1ZENrZ0x5QXhNREFwSUNvZ2JHVnVaM1JvSUNzZ0ozQjRKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hOMFlYUmxMQ0JzWlc1bmRHZ3BJRDArSUh0Y2JpQWdZMjl1YzNRZ2MzUjViR1Z6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJR1JoYzJoQmNuSmhlVk4wZVd4bGN5QTlJSHRjYmlBZ0lDQnNaVzVuZEdnNklEQXNYRzRnSUNBZ2MzQmhZMmx1WnpvZ2JHVnVaM1JvSUNzZ0ozQjRKMXh1SUNCOU8xeHVJQ0JzWlhRZ2FHRnpSR0Z6YUVGeWNtRjVJRDBnWm1Gc2MyVTdYRzVjYmlBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhOMFlYUmxLU0I3WEc0Z0lDQWdhV1lnS0hOMFlYUmxMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdjM1JoZEdWYmEyVjVYVHRjYmx4dUlDQWdJQ0FnYzNkcGRHTm9JQ2hyWlhrcElIdGNiaUFnSUNBZ0lHTmhjMlVnSjJ4bGJtZDBhQ2M2WEc0Z0lDQWdJQ0JqWVhObElDZHpjR0ZqYVc1bkp6cGNiaUFnSUNBZ0lDQWdhR0Z6UkdGemFFRnljbUY1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnWkdGemFFRnljbUY1VTNSNWJHVnpXMnRsZVYwZ1BTQndaWEpqWlc1MFZHOVFhWGhsYkhNb2RtRnNkV1VzSUd4bGJtZDBhQ2s3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdZMkZ6WlNBbmIyWm1jMlYwSnpwY2JpQWdJQ0FnSUNBZ2MzUjViR1Z6V3lkemRISnZhMlV0WkdGemFHOW1abk5sZENkZElEMGdjR1Z5WTJWdWRGUnZVR2w0Wld4ektDMTJZV3gxWlN3Z2JHVnVaM1JvS1R0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0JrWldaaGRXeDBPbHh1SUNBZ0lDQWdJQ0J6ZEhsc1pYTmJhMlY1WFNBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdsbUlDaG9ZWE5FWVhOb1FYSnlZWGtwSUh0Y2JpQWdJQ0J6ZEhsc1pYTmJKM04wY205clpTMWtZWE5vWVhKeVlYa25YU0E5SUdSaGMyaEJjbkpoZVZOMGVXeGxjeTVzWlc1bmRHZ2dLeUFuSUNjZ0t5QmtZWE5vUVhKeVlYbFRkSGxzWlhNdWMzQmhZMmx1Wnp0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCemRIbHNaWE03WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgZGF0YSkge1xuICB2YXIgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxO1xuICB2YXIgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDE7XG4gIHZhciB0cmFuc2Zvcm1PcmlnaW5YID0gZGF0YS53aWR0aCAqICgoc3RhdGUub3JpZ2luWCB8fCA1MCkgLyAxMDApICsgZGF0YS54O1xuICB2YXIgdHJhbnNmb3JtT3JpZ2luWSA9IGRhdGEuaGVpZ2h0ICogKChzdGF0ZS5vcmlnaW5ZIHx8IDUwKSAvIDEwMCkgKyBkYXRhLnk7XG4gIHZhciBzY2FsZVRyYW5zZm9ybVggPSAtdHJhbnNmb3JtT3JpZ2luWCAqIChzY2FsZSAqIDEpO1xuICB2YXIgc2NhbGVUcmFuc2Zvcm1ZID0gLXRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSk7XG4gIHZhciBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlO1xuICB2YXIgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVk7XG4gIHZhciB0cmFuc2Zvcm0gPSB7XG4gICAgdHJhbnNsYXRlOiAndHJhbnNsYXRlKCcgKyBzdGF0ZS50cmFuc2xhdGVYICsgJywgJyArIHN0YXRlLnRyYW5zbGF0ZVkgKyAnKSAnLFxuICAgIHNjYWxlOiAndHJhbnNsYXRlKCcgKyBzY2FsZVRyYW5zZm9ybVggKyAnLCAnICsgc2NhbGVUcmFuc2Zvcm1ZICsgJykgc2NhbGUoJyArIHNjYWxlICsgJywgJyArIHNjYWxlWSArICcpIHRyYW5zbGF0ZSgnICsgc2NhbGVSZXBsYWNlWCArICcsICcgKyBzY2FsZVJlcGxhY2VZICsgJykgJyxcbiAgICByb3RhdGU6ICdyb3RhdGUoJyArIHN0YXRlLnJvdGF0ZSArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5YICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblkgKyAnKSAnLFxuICAgIHNrZXdYOiAnc2tld1goJyArIHN0YXRlLnNrZXdYICsgJykgJyxcbiAgICBza2V3WTogJ3NrZXdZKCcgKyBzdGF0ZS5za2V3WSArICcpICdcbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wc1soMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgZm9yICh2YXIgX2tleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IF9rZXkgPT09ICdzY2FsZScgPyAnMScgOiAnMCc7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB0cmFuc2Zvcm1bX2tleV0ucmVwbGFjZSgvdW5kZWZpbmVkL2csIGRlZmF1bHRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwySjFhV3hrTG1weklsMHNJbTVoYldWeklqcGJJbUoxYVd4a0lpd2lXa1ZTVDE5T1QxUmZXa1ZTVHlJc0luTjBZWFJsSWl3aVpHRjBZU0lzSW1oaGMxUnlZVzV6Wm05eWJTSXNJbkJ5YjNCeklpd2ljMk5oYkdVaUxDSjFibVJsWm1sdVpXUWlMQ0p6WTJGc1pWZ2lMQ0p6WTJGc1pWa2lMQ0owY21GdWMyWnZjbTFQY21sbmFXNVlJaXdpZDJsa2RHZ2lMQ0p2Y21sbmFXNVlJaXdpZUNJc0luUnlZVzV6Wm05eWJVOXlhV2RwYmxraUxDSm9aV2xuYUhRaUxDSnZjbWxuYVc1Wklpd2llU0lzSW5OallXeGxWSEpoYm5ObWIzSnRXQ0lzSW5OallXeGxWSEpoYm5ObWIzSnRXU0lzSW5OallXeGxVbVZ3YkdGalpWZ2lMQ0p6WTJGc1pWSmxjR3hoWTJWWklpd2lkSEpoYm5ObWIzSnRJaXdpZEhKaGJuTnNZWFJsSWl3aWRISmhibk5zWVhSbFdDSXNJblJ5WVc1emJHRjBaVmtpTENKeWIzUmhkR1VpTENKemEyVjNXQ0lzSW5OclpYZFpJaXdpYTJWNUlpd2lhR0Z6VDNkdVVISnZjR1Z5ZEhraUxDSmtaV1poZFd4MFZtRnNkV1VpTENKeVpYQnNZV05sSWwwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlMzZENRU3hMT3p0QlFVeDRRanM3UVVGRFFUczdPenM3TzBGQlJVRXNTVUZCVFVNc1owSkJRV2RDTEUxQlFYUkNPenRCUVVWbExGTkJRVk5FTEV0QlFWUXNRMEZCWlVVc1MwRkJaaXhGUVVGelFrTXNTVUZCZEVJc1JVRkJORUk3UVVGRGVrTXNUVUZCU1VNc1pVRkJaU3hMUVVGdVFqdEJRVU5CTEUxQlFVMURMRkZCUVZFc1JVRkJaRHRCUVVOQkxFMUJRVTFETEZGQlFWRktMRTFCUVUxSkxFdEJRVTRzUzBGQlowSkRMRk5CUVdoQ0xFZEJRVFJDVEN4TlFVRk5TU3hMUVVGT0xFbEJRV1ZNTEdGQlFUTkRMRWRCUVRKRVF5eE5RVUZOVFN4TlFVRk9MRWxCUVdkQ0xFTkJRWHBHTzBGQlEwRXNUVUZCVFVNc1UwRkJVMUFzVFVGQlRVOHNUVUZCVGl4TFFVRnBRa1lzVTBGQmFrSXNSMEZCTmtKTUxFMUJRVTFQTEUxQlFVNHNTVUZCWjBKU0xHRkJRVGRETEVkQlFUWkVTeXhUUVVGVExFTkJRWEpHTzBGQlEwRXNUVUZCVFVrc2JVSkJRVzFDVUN4TFFVRkxVU3hMUVVGTUxFbEJRV01zUTBGQlExUXNUVUZCVFZVc1QwRkJUaXhKUVVGcFFpeEZRVUZzUWl4SlFVRjNRaXhIUVVGMFF5eEpRVUUyUTFRc1MwRkJTMVVzUTBGQk0wVTdRVUZEUVN4TlFVRk5ReXh0UWtGQmJVSllMRXRCUVV0WkxFMUJRVXdzU1VGQlpTeERRVUZEWWl4TlFVRk5ZeXhQUVVGT0xFbEJRV2xDTEVWQlFXeENMRWxCUVhkQ0xFZEJRWFpETEVsQlFUaERZaXhMUVVGTFl5eERRVUUxUlR0QlFVTkJMRTFCUVUxRExHdENRVUZyUWl4RFFVRkZVaXhuUWtGQlJpeEpRVUZ6UWtvc1VVRkJVU3hEUVVFNVFpeERRVUY0UWp0QlFVTkJMRTFCUVUxaExHdENRVUZyUWl4RFFVRkZUQ3huUWtGQlJpeEpRVUZ6UWt3c1UwRkJVeXhEUVVFdlFpeERRVUY0UWp0QlFVTkJMRTFCUVUxWExHZENRVUZuUWxZc2JVSkJRVzFDU2l4TFFVRjZRenRCUVVOQkxFMUJRVTFsTEdkQ1FVRm5RbEFzYlVKQlFXMUNUQ3hOUVVGNlF6dEJRVU5CTEUxQlFVMWhMRmxCUVZrN1FVRkRhRUpETERoQ1FVRjNRbkpDTEUxQlFVMXpRaXhWUVVFNVFpeFZRVUUyUTNSQ0xFMUJRVTExUWl4VlFVRnVSQ3hQUVVSblFqdEJRVVZvUW01Q0xEQkNRVUZ2UWxrc1pVRkJjRUlzVlVGQmQwTkRMR1ZCUVhoRExHZENRVUZyUldJc1MwRkJiRVVzVlVGQk5FVkhMRTFCUVRWRkxHOUNRVUZwUjFjc1lVRkJha2NzVlVGQmJVaERMR0ZCUVc1SUxFOUJSbWRDTzBGQlIyaENTeXgzUWtGQmEwSjRRaXhOUVVGTmQwSXNUVUZCZUVJc1ZVRkJiVU5vUWl4blFrRkJia01zVlVGQmQwUkpMR2RDUVVGNFJDeFBRVWhuUWp0QlFVbG9RbUVzYzBKQlFXZENla0lzVFVGQlRYbENMRXRCUVhSQ0xFOUJTbWRDTzBGQlMyaENReXh6UWtGQlowSXhRaXhOUVVGTk1FSXNTMEZCZEVJN1FVRk1aMElzUjBGQmJFSTdPMEZCVVVFc1QwRkJTeXhKUVVGSlF5eEhRVUZVTEVsQlFXZENNMElzUzBGQmFFSXNSVUZCZFVJN1FVRkRja0lzVVVGQlNVRXNUVUZCVFRSQ0xHTkJRVTRzUTBGQmNVSkVMRWRCUVhKQ0xFTkJRVW9zUlVGQkswSTdRVUZETjBJc1ZVRkJTU3g1UWtGQlpVRXNSMEZCWml4RFFVRktMRVZCUVhsQ08wRkJRM1pDZWtJc2RVSkJRV1VzU1VGQlpqdEJRVU5FTEU5QlJrUXNUVUZGVHp0QlFVTk1ReXhqUVVGTkxIZENRVUZaZDBJc1IwRkJXaXhEUVVGT0xFbEJRVEJDTTBJc1RVRkJUVEpDTEVkQlFVNHNRMEZCTVVJN1FVRkRSRHRCUVVOR08wRkJRMFk3TzBGQlJVUXNUVUZCU1hwQ0xGbEJRVW9zUlVGQmEwSTdRVUZEYUVKRExGVkJRVTFwUWl4VFFVRk9MRWRCUVd0Q0xFVkJRV3hDT3p0QlFVVkJMRk5CUVVzc1NVRkJTVThzU1VGQlZDeEpRVUZuUWxBc1UwRkJhRUlzUlVGQk1rSTdRVUZEZWtJc1ZVRkJTVUVzVlVGQlZWRXNZMEZCVml4RFFVRjVRa1FzU1VGQmVrSXNRMEZCU2l4RlFVRnRRenRCUVVOcVF5eFpRVUZOUlN4bFFVRm5Ra1lzVTBGQlVTeFBRVUZVTEVkQlFXOUNMRWRCUVhCQ0xFZEJRVEJDTEVkQlFTOURPMEZCUTBGNFFpeGpRVUZOYVVJc1UwRkJUaXhKUVVGdFFrRXNWVUZCVlU4c1NVRkJWaXhGUVVGbFJ5eFBRVUZtTEVOQlFYVkNMRmxCUVhaQ0xFVkJRWEZEUkN4WlFVRnlReXhEUVVGdVFqdEJRVU5FTzBGQlEwWTdRVUZEUmpzN1FVRkZSQ3hUUVVGUE1VSXNTMEZCVUR0QlFVTkVJaXdpWm1sc1pTSTZJbUoxYVd4a0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kyRnRaV3hVYjBSaGMyZ2dmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElIUnlZVzV6Wm05eWJWQnliM0J6SUdaeWIyMGdKeTR1TDJOemN5OTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVYRzVqYjI1emRDQmFSVkpQWDA1UFZGOWFSVkpQSUQwZ01DNHdNREF4TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCaWRXbHNaQ2h6ZEdGMFpTd2daR0YwWVNrZ2UxeHVJQ0JzWlhRZ2FHRnpWSEpoYm5ObWIzSnRJRDBnWm1Gc2MyVTdYRzRnSUdOdmJuTjBJSEJ5YjNCeklEMGdlMzA3WEc0Z0lHTnZibk4wSUhOallXeGxJRDBnYzNSaGRHVXVjMk5oYkdVZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhOMFlYUmxMbk5qWVd4bElIeDhJRnBGVWs5ZlRrOVVYMXBGVWs4Z09pQnpkR0YwWlM1elkyRnNaVmdnZkh3Z01UdGNiaUFnWTI5dWMzUWdjMk5oYkdWWklEMGdjM1JoZEdVdWMyTmhiR1ZaSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJ6ZEdGMFpTNXpZMkZzWlZrZ2ZId2dXa1ZTVDE5T1QxUmZXa1ZTVHlBNklITmpZV3hsSUh4OElERTdYRzRnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dQU0JrWVhSaExuZHBaSFJvSUNvZ0tDaHpkR0YwWlM1dmNtbG5hVzVZSUh4OElEVXdLU0F2SURFd01Da2dLeUJrWVhSaExuZzdYRzRnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsa2dQU0JrWVhSaExtaGxhV2RvZENBcUlDZ29jM1JoZEdVdWIzSnBaMmx1V1NCOGZDQTFNQ2tnTHlBeE1EQXBJQ3NnWkdGMFlTNTVPMXh1SUNCamIyNXpkQ0J6WTJGc1pWUnlZVzV6Wm05eWJWZ2dQU0F0SUhSeVlXNXpabTl5YlU5eWFXZHBibGdnS2lBb2MyTmhiR1VnS2lBeEtUdGNiaUFnWTI5dWMzUWdjMk5oYkdWVWNtRnVjMlp2Y20xWklEMGdMU0IwY21GdWMyWnZjbTFQY21sbmFXNVpJQ29nS0hOallXeGxXU0FxSURFcE8xeHVJQ0JqYjI1emRDQnpZMkZzWlZKbGNHeGhZMlZZSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V0NBdklITmpZV3hsTzF4dUlDQmpiMjV6ZENCelkyRnNaVkpsY0d4aFkyVlpJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0F2SUhOallXeGxXVHRjYmlBZ1kyOXVjM1FnZEhKaGJuTm1iM0p0SUQwZ2UxeHVJQ0FnSUhSeVlXNXpiR0YwWlRvZ1lIUnlZVzV6YkdGMFpTZ2tlM04wWVhSbExuUnlZVzV6YkdGMFpWaDlMQ0FrZTNOMFlYUmxMblJ5WVc1emJHRjBaVmw5S1NCZ0xGeHVJQ0FnSUhOallXeGxPaUJnZEhKaGJuTnNZWFJsS0NSN2MyTmhiR1ZVY21GdWMyWnZjbTFZZlN3Z0pIdHpZMkZzWlZSeVlXNXpabTl5YlZsOUtTQnpZMkZzWlNna2UzTmpZV3hsZlN3Z0pIdHpZMkZzWlZsOUtTQjBjbUZ1YzJ4aGRHVW9KSHR6WTJGc1pWSmxjR3hoWTJWWWZTd2dKSHR6WTJGc1pWSmxjR3hoWTJWWmZTa2dZQ3hjYmlBZ0lDQnliM1JoZEdVNklHQnliM1JoZEdVb0pIdHpkR0YwWlM1eWIzUmhkR1Y5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxoOUxDQWtlM1J5WVc1elptOXliVTl5YVdkcGJsbDlLU0JnTEZ4dUlDQWdJSE5yWlhkWU9pQmdjMnRsZDFnb0pIdHpkR0YwWlM1emEyVjNXSDBwSUdBc1hHNGdJQ0FnYzJ0bGQxazZJR0J6YTJWM1dTZ2tlM04wWVhSbExuTnJaWGRaZlNrZ1lGeHVJQ0I5TzF4dVhHNGdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQnpkR0YwWlNrZ2UxeHVJQ0FnSUdsbUlDaHpkR0YwWlM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQnBaaUFvZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ0lDQm9ZWE5VY21GdWMyWnZjbTBnUFNCMGNuVmxPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjSEp2Y0hOYlkyRnRaV3hVYjBSaGMyZ29hMlY1S1YwZ1BTQnpkR0YwWlZ0clpYbGRPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR2xtSUNob1lYTlVjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQndjbTl3Y3k1MGNtRnVjMlp2Y20wZ1BTQW5KenRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQWdJR2xtSUNoMGNtRnVjMlp2Y20wdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmtaV1poZFd4MFZtRnNkV1VnUFNBb2EyVjVJRDA5UFNBbmMyTmhiR1VuS1NBL0lDY3hKeUE2SUNjd0p6dGNiaUFnSUNBZ0lDQWdjSEp2Y0hNdWRISmhibk5tYjNKdElDczlJSFJ5WVc1elptOXliVnRyWlhsZExuSmxjR3hoWTJVb0wzVnVaR1ZtYVc1bFpDOW5MQ0JrWldaaGRXeDBWbUZzZFdVcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCd2NtOXdjenRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmcvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBmaWxsOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgc3Ryb2tlOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgc2NhbGU6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVg6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVk6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBkOiBfdmFsdWVUeXBlcy5jb21wbGV4LFxuICBwb2ludHM6IF92YWx1ZVR5cGVzLmNvbXBsZXgsXG4gIG9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhLFxuICBmaWxsT3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGEsXG4gIHN0cm9rZU9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwzWmhiSFZsTFhSNWNHVnpMbXB6SWwwc0ltNWhiV1Z6SWpwYkltWnBiR3dpTENKemRISnZhMlVpTENKelkyRnNaU0lzSW5OallXeGxXQ0lzSW5OallXeGxXU0lzSW1RaUxDSndiMmx1ZEhNaUxDSnZjR0ZqYVhSNUlpd2labWxzYkU5d1lXTnBkSGtpTENKemRISnZhMlZQY0dGamFYUjVJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN08ydENRVVZsTzBGQlEySkJMSGxDUVVSaE8wRkJSV0pETERKQ1FVWmhPMEZCUjJKRExEQkNRVWhoTzBGQlNXSkRMREpDUVVwaE8wRkJTMkpETERKQ1FVeGhPMEZCVFdKRExIZENRVTVoTzBGQlQySkRMRFpDUVZCaE8wRkJVV0pETERSQ1FWSmhPMEZCVTJKRExHZERRVlJoTzBGQlZXSkRPMEZCVm1Fc1F5SXNJbVpwYkdVaU9pSjJZV3gxWlMxMGVYQmxjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR0ZzY0doaExDQmpiMnh2Y2l3Z1kyOXRjR3hsZUN3Z2MyTmhiR1VnZlNCbWNtOXRJQ2N1TGk4dUxpOXBibU12ZG1Gc2RXVXRkSGx3WlhNbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUdacGJHdzZJR052Ykc5eUxGeHVJQ0J6ZEhKdmEyVTZJR052Ykc5eUxGeHVJQ0J6WTJGc1pUb2djMk5oYkdVc1hHNGdJSE5qWVd4bFdEb2djMk5oYkdVc1hHNGdJSE5qWVd4bFdUb2djMk5oYkdVc1hHNGdJR1E2SUdOdmJYQnNaWGdzWEc0Z0lIQnZhVzUwY3pvZ1kyOXRjR3hsZUN4Y2JpQWdiM0JoWTJsMGVUb2dZV3h3YUdFc1hHNGdJR1pwYkd4UGNHRmphWFI1T2lCaGJIQm9ZU3hjYmlBZ2MzUnliMnRsVDNCaFkybDBlVG9nWVd4d2FHRmNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy92YWx1ZS10eXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJwb3Btb3Rpb24uZ2xvYmFsLmpzIn0=