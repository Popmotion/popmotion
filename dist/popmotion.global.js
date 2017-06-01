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
	  var precision = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
	
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
	  var smoothing = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvY2FsYy5qcyJdLCJuYW1lcyI6WyJ0b0RlY2ltYWwiLCJudW0iLCJwcmVjaXNpb24iLCJNYXRoIiwicm91bmQiLCJaRVJPX1BPSU5UIiwieCIsInkiLCJ6IiwiZGlzdGFuY2UxRCIsImEiLCJiIiwiYWJzIiwiYW5nbGUiLCJyYWRpYW5zVG9EZWdyZWVzIiwiYXRhbjIiLCJkZWdyZWVzVG9SYWRpYW5zIiwiZGVncmVlcyIsIlBJIiwiZGlsYXRlIiwiZGlsYXRpb24iLCJkaXN0YW5jZSIsInhEZWx0YSIsInlEZWx0YSIsInpEZWx0YSIsInNxcnQiLCJnZXRQcm9ncmVzc0Zyb21WYWx1ZSIsImZyb20iLCJ0byIsInZhbHVlIiwiZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MiLCJwcm9ncmVzcyIsInBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UiLCJvcmlnaW4iLCJjb3MiLCJzaW4iLCJyYWRpYW5zIiwic21vb3RoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImR1cmF0aW9uIiwic21vb3RoaW5nIiwibWF4Iiwic3BlZWRQZXJGcmFtZSIsInhwcyIsImZyYW1lRHVyYXRpb24iLCJzcGVlZFBlclNlY29uZCIsInZlbG9jaXR5Iiwic3RlcFByb2dyZXNzIiwic3RlcHMiLCJzZWdtZW50IiwidGFyZ2V0IiwicHJvZ3Jlc3NPZlRhcmdldCIsIm1pbiIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOzs7Ozs7O0FBT0EsSUFBTUEsWUFBWSxVQUFDQyxHQUFELEVBQXdCO0FBQUEsTUFBbEJDLFNBQWtCLHlEQUFOLENBQU07O0FBQ3hDQSx1QkFBWSxFQUFaLEVBQWtCQSxTQUFsQjtBQUNBLFNBQU9DLEtBQUtDLEtBQUwsQ0FBV0gsTUFBTUMsU0FBakIsSUFBOEJBLFNBQXJDO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNRyxhQUFhO0FBQ2pCQyxLQUFHLENBRGM7QUFFakJDLEtBQUcsQ0FGYztBQUdqQkMsS0FBRztBQUhjLENBQW5COztBQU1BLElBQU1DLGFB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QUFLdUMsR0FBTCxDQUFTRCxTQUFULEVBQW9CRCxRQUFwQixDQUF6RCxDQUFqRDtBQUFBLENBQWY7O0FBRVA7Ozs7OztBQU1PLElBQU1HLHdDQUFnQixVQUFDQyxHQUFELEVBQU1DLGFBQU47QUFBQSxTQUF5QixrQkFBTUQsR0FBTixDQUFELEdBQWVBLE9BQU8sT0FBT0MsYUFBZCxDQUFmLEdBQThDLENBQXRFO0FBQUEsQ0FBdEI7O0FBRVA7Ozs7OztBQU1PLElBQU1DLDBDQUFpQixVQUFDQyxRQUFELEVBQVdGLGFBQVg7QUFBQSxTQUE2QkUsWUFBWSxPQUFPRixhQUFuQixDQUE3QjtBQUFBLENBQXZCOztBQUVQOzs7Ozs7O0FBT08sSUFBTUcsc0NBQWUsVUFBQ0MsS0FBRCxFQUFRbEIsUUFBUixFQUFxQjtBQUMvQyxNQUFNbUIsVUFBVSxLQUFLRCxRQUFRLENBQWIsQ0FBaEI7QUFDQSxNQUFNRSxTQUFTLElBQUssSUFBSUYsS0FBeEI7QUFDQSxNQUFNRyxtQkFBbUJqRCxLQUFLa0QsR0FBTCxDQUFTdEIsV0FBV29CLE1BQXBCLEVBQTRCLENBQTVCLENBQXpCOztBQUVBLFNBQU9oRCxLQUFLbUQsS0FBTCxDQUFXRixtQkFBbUJGLE9BQTlCLElBQXlDQSxPQUFoRDtBQUNELENBTk0iLCJmaWxlIjoiY2FsYy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG5jb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gIHByZWNpc2lvbiA9IDEwICoqIHByZWNpc2lvbjtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG5cbmNvbnN0IFpFUk9fUE9JTlQgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHo6IDBcbn07XG5cbmNvbnN0IGRpc3RhbmNlMUQgPSAoYSwgYikgPT4gTWF0aC5hYnMoYSAtIGIpO1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICBcbiAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gIGFyZSBhdCAwLDBcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBhbmdsZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBkZWdyZWVzVG9SYWRpYW5zID0gKGRlZ3JlZXMpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuXG4vKlxuICBEaWxhdGVcbiAgXG4gIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICBcbiAgYSAtLS0tLS0tLS0gYlxuICBcbiAgdG9cbiAgXG4gIGEgLS0tLSBiXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbmV4cG9ydCBjb25zdCBkaWxhdGUgPSAoYSwgYiwgZGlsYXRpb24pID0+IGEgKyAoKGIgLSBhKSAqIGRpbGF0aW9uKTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IGRpc3RhbmNlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiB7XG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKGlzTnVtKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICBjb25zdCB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICBjb25zdCB6RGVsdGEgPSAoaXNOdW0oYS56KSkgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KCh4RGVsdGEgKiogMikgKyAoeURlbHRhICoqIDIpICsgKHpEZWx0YSAqKiAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbmV4cG9ydCBjb25zdCBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IChmcm9tLCB0bywgdmFsdWUpID0+ICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG5cbi8qXG4gIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IChmcm9tLCB0bywgcHJvZ3Jlc3MpID0+ICgtIHByb2dyZXNzICogZnJvbSkgKyAocHJvZ3Jlc3MgKiB0bykgKyBmcm9tO1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG5leHBvcnQgY29uc3QgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkgPT4ge1xuICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gIHJldHVybiB7XG4gICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gIH07XG59O1xuXG4vKlxuICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG5leHBvcnQgY29uc3QgcmFkaWFuc1RvRGVncmVlcyA9IChyYWRpYW5zKSA9PiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbmV4cG9ydCBjb25zdCBzbW9vdGggPSAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nID0gMCkgPT4gdG9EZWNpbWFsKG9sZFZhbHVlICsgKGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpKTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlckZyYW1lID0gKHhwcywgZnJhbWVEdXJhdGlvbikgPT4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHN0ZXBQcm9ncmVzcyA9IChzdGVwcywgcHJvZ3Jlc3MpID0+IHtcbiAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgY29uc3QgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpO1xuICBjb25zdCBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvZWFzaW5nLmpzIl0sIm5hbWVzIjpbIkRFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIIiwiY3JlYXRlUmV2ZXJzZWRFYXNpbmciLCJlYXNpbmciLCJwIiwiY3JlYXRlTWlycm9yZWRFYXNpbmciLCJsaW5lYXIiLCJjcmVhdGVFeHBvSW4iLCJwb3dlciIsImVhc2VJbiIsImVhc2VPdXQiLCJlYXNlSW5PdXQiLCJjaXJjSW4iLCJNYXRoIiwic2luIiwiYWNvcyIsImNpcmNPdXQiLCJjaXJjSW5PdXQiLCJjcmVhdGVCYWNrSW4iLCJiYWNrSW4iLCJiYWNrT3V0IiwiYmFja0luT3V0IiwiY3JlYXRlQW50aWNpcGF0ZUVhc2luZyIsImJhY2tFYXNpbmciLCJwb3ciLCJhbnRpY2lwYXRlIiwiY3ViaWNCZXppZXIiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInhCZXppZXIiLCJ5QmV6aWVyIiwidCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxJQUFNQSw2QkFBNkIsS0FBbkM7O0FBRU8sSUFBTUMsc0RBQXVCLFVBQUNDLE1BQUQ7QUFBQSxTQUFZLFVBQUNDLENBQUQ7QUFBQSxXQUFPLElBQUlELE9BQU8sSUFBSUMsQ0FBWCxDQUFYO0FBQUEsR0FBWjtBQUFBLENBQTdCO0FBQ0EsSUFBTUMsc0RBQXVCLFVBQUNGLE1BQUQ7QUFBQSxTQUFZLFVBQUNDLENBQUQ7QUFBQSxXQUFRQSxLQUFLLEdBQU4sR0FBYUQsT0FBTyxJQUFJQyxDQUFYLElBQWdCLENBQTdCLEdBQWlDLENBQUMsSUFBSUQsT0FBTyxLQUFLLElBQUlDLENBQVQsQ0FBUCxDQUFMLElBQTRCLENBQXBFO0FBQUEsR0FBWjtBQUFBLENBQTdCOztBQUVBLElBQU1FLDBCQUFTLFVBQUNGLENBQUQ7QUFBQSxTQUFPQSxDQUFQO0FBQUEsQ0FBZjs7QUFFQSxJQUFNRyxzQ0FBZSxVQUFDQyxLQUFEO0FBQUEsU0FBVyxVQUFDSixDQUFEO0FBQUEsb0JBQU9BLENBQVAsRUFBWUksS0FBWjtBQUFBLEdBQVg7QUFBQSxDQUFyQjtBQUNBLElBQU1DLDBCQUFTRixhQUFhLENBQWIsQ0FBZjtBQUNBLElBQU1HLDRCQUFVUixxQkFBcUJPLE1BQXJCLENBQWhCO0FBQ0EsSUFBTUUsZ0NBQVlOLHFCQUFxQkksTUFBckIsQ0FBbEI7O0FBRUEsSUFBTUcsMEJBQVMsVUFBQ1IsQ0FBRDtBQUFBLFNBQU8sSUFBSVMsS0FBS0MsR0FBTCxDQUFTRCxLQUFLRSxJQUFMLENBQVVYLENBQVYsQ0FBVCxDQUFYO0FBQUEsQ0FBZjtBQUNBLElBQU1ZLDRCQUFVZCxxQkFBcUJVLE1BQXJCLENBQWhCO0FBQ0EsSUFBTUssZ0NBQVlaLHFCQUFxQlcsT0FBckIsQ0FBbEI7O0FBRUEsSUFBTUUsc0NBQWUsVUFBQ1YsS0FBRDtBQUFBLFNBQVcsVUFBQ0osQ0FBRDtBQUFBLFdBQVFBLElBQUlBLENBQUwsSUFBVyxDQUFDSSxRQUFRLENBQVQsSUFBY0osQ0FBZCxHQUFrQkksS0FBN0IsQ0FBUDtBQUFBLEdBQVg7QUFBQSxDQUFyQjtBQUNBLElBQU1XLDBCQUFTRCxhQUFhakIsMEJBQWIsQ0FBZjtBQUNBLElBQU1tQiw0QkFBVWxCLHFCQUFxQmlCLE1BQXJCLENBQWhCO0FBQ0EsSUFBTUUsZ0NBQVloQixxQkFBcUJjLE1BQXJCLENBQWxCOztBQUVBLElBQU1HLDBEQUF5QixVQUFDZCxLQUFELEVBQVc7QUFDL0MsTUFBTWUsYUFBYUwsYUFBYVYsS0FBYixDQUFuQjtBQUNBLFNBQU8sVUFBQ0osQ0FBRDtBQUFBLFdBQVEsQ0FBQ0EsS0FBSyxDQUFOLElBQVcsQ0FBWixHQUFpQixNQUFNbUIsV0FBV25CLENBQVgsQ0FBdkIsR0FBdUMsT0FBTyxJQUFJUyxLQUFLVyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxJQUFPcEIsSUFBSSxDQUFYLENBQVosQ0FBWCxDQUE5QztBQUFBLEdBQVA7QUFDRCxDQUhNOztBQUtBLElBQU1xQixrQ0FBYUgsdUJBQXVCckIsMEJBQXZCLENBQW5COztBQUVBLElBQU15QixvQ0FBYyxVQUFDQyxFQUFELEVBQUtDLEVBQUwsRUFBU0MsRUFBVCxFQUFhQyxFQUFiLEVBQW9CO0FBQzdDLE1BQU1DLFVBQVUsMEJBQU8sQ0FBUCxFQUFVSixFQUFWLEVBQWNFLEVBQWQsRUFBa0IsQ0FBbEIsQ0FBaEI7QUFDQSxNQUFNRyxVQUFVLDBCQUFPLENBQVAsRUFBVUosRUFBVixFQUFjRSxFQUFkLEVBQWtCLENBQWxCLENBQWhCOztBQUVBLFNBQU8sVUFBQ0csQ0FBRDtBQUFBLFdBQU9ELFFBQVFELFFBQVFFLENBQVIsQ0FBUixDQUFQO0FBQUEsR0FBUDtBQUNELENBTE0iLCJmaWxlIjoiZWFzaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmV6aWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMnO1xuXG5jb25zdCBERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCA9IDEuNTI1O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSAoZWFzaW5nKSA9PiAocCkgPT4gMSAtIGVhc2luZygxIC0gcCk7XG5leHBvcnQgY29uc3QgY3JlYXRlTWlycm9yZWRFYXNpbmcgPSAoZWFzaW5nKSA9PiAocCkgPT4gKHAgPD0gMC41KSA/IGVhc2luZygyICogcCkgLyAyIDogKDIgLSBlYXNpbmcoMiAqICgxIC0gcCkpKSAvIDI7XG5cbmV4cG9ydCBjb25zdCBsaW5lYXIgPSAocCkgPT4gcDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUV4cG9JbiA9IChwb3dlcikgPT4gKHApID0+IHAgKiogcG93ZXI7XG5leHBvcnQgY29uc3QgZWFzZUluID0gY3JlYXRlRXhwb0luKDIpO1xuZXhwb3J0IGNvbnN0IGVhc2VPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNlSW4pO1xuZXhwb3J0IGNvbnN0IGVhc2VJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGVhc2VJbik7XG5cbmV4cG9ydCBjb25zdCBjaXJjSW4gPSAocCkgPT4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwKSk7XG5leHBvcnQgY29uc3QgY2lyY091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGNpcmNJbik7XG5leHBvcnQgY29uc3QgY2lyY0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoY2lyY091dCk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCYWNrSW4gPSAocG93ZXIpID0+IChwKSA9PiAocCAqIHApICogKChwb3dlciArIDEpICogcCAtIHBvd2VyKTtcbmV4cG9ydCBjb25zdCBiYWNrSW4gPSBjcmVhdGVCYWNrSW4oREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xuZXhwb3J0IGNvbnN0IGJhY2tPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhiYWNrSW4pO1xuZXhwb3J0IGNvbnN0IGJhY2tJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGJhY2tJbik7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gKHBvd2VyKSA9PiB7XG4gIGNvbnN0IGJhY2tFYXNpbmcgPSBjcmVhdGVCYWNrSW4ocG93ZXIpO1xuICByZXR1cm4gKHApID0+ICgocCAqPSAyKSA8IDEpID8gMC41ICogYmFja0Vhc2luZyhwKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHAgLSAxKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFudGljaXBhdGUgPSBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcblxuZXhwb3J0IGNvbnN0IGN1YmljQmV6aWVyID0gKHgxLCB5MSwgeDIsIHkyKSA9PiB7XG4gIGNvbnN0IHhCZXppZXIgPSBiZXppZXIoMCwgeDEsIHgyLCAxKTtcbiAgY29uc3QgeUJlemllciA9IGJlemllcigwLCB5MSwgeTIsIDEpO1xuXG4gIHJldHVybiAodCkgPT4geUJlemllcih4QmV6aWVyKHQpKTtcbn07XG4iXX0=

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.bezier = exports.blendColor = exports.alpha = exports.color = exports.hsla = exports.rgba = exports.rgbUnit = exports.px = exports.degrees = exports.percent = exports.transformChildValues = exports.steps = exports.smooth = exports.wrap = exports.nonlinearSpring = exports.spring = exports.generateNonIntergratedSpring = exports.multiply = exports.divide = exports.add = exports.subtract = exports.interpolate = exports.flow = exports.conditional = exports.clamp = exports.clampMin = exports.clampMax = exports.applyOffset = exports.appendUnit = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _calc = __webpack_require__(2);
	
	var _utils = __webpack_require__(24);
	
	var _parsers = __webpack_require__(25);
	
	var _framesync = __webpack_require__(18);
	
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
	 * Apply offset
	 * A function that, given a value, will get the offset from `from`
	 * and apply it to `to`
	 * @param  {number} from
	 * @param  {number} to
	 * @return {function}
	 */
	var applyOffset = exports.applyOffset = function (from, to) {
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
	  var ifFalse = arguments.length <= 2 || arguments[2] === undefined ? noop : arguments[2];
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
	    var easedProgress = rangeEasing ? rangeEasing[i - 1](progressInRange) : progressInRange;
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
	  var alterDisplacement = arguments.length <= 0 || arguments[0] === undefined ? noop : arguments[0];
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
	  var strength = arguments.length <= 0 || arguments[0] === undefined ? 50 : arguments[0];
	
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
	  var red = _ref.red;
	  var green = _ref.green;
	  var blue = _ref.blue;
	  var _ref$alpha = _ref.alpha;
	  var alpha = _ref$alpha === undefined ? 1 : _ref$alpha;
	  return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
	};
	
	var rgba = exports.rgba = flow(transformChildValues({
	  red: rgbUnit,
	  green: rgbUnit,
	  blue: rgbUnit,
	  alpha: alpha
	}), rgbaTemplate);
	
	var hslaTemplate = function (_ref2) {
	  var hue = _ref2.hue;
	  var saturation = _ref2.saturation;
	  var lightness = _ref2.lightness;
	  var _ref2$alpha = _ref2.alpha;
	  var alpha = _ref2$alpha === undefined ? 1 : _ref2$alpha;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJ2IiwiYXBwZW5kVW5pdCIsInVuaXQiLCJhcHBseU9mZnNldCIsImZyb20iLCJ0byIsImdldE9mZnNldCIsInN1YnRyYWN0IiwiYXBwbHlPZmZzZXRUbyIsImFkZCIsImNsYW1wTWF4IiwibWF4IiwiTWF0aCIsIm1pbiIsImNsYW1wTWluIiwiY2xhbXAiLCJfbWluIiwiX21heCIsImNvbmRpdGlvbmFsIiwiY29uZGl0aW9uIiwiaWZUcnVlIiwiaWZGYWxzZSIsImFjdGlvbiIsImZsb3ciLCJ0cmFuc2Zvcm1lcnMiLCJudW1UcmFuc2Zvcm1lcnMiLCJsZW5ndGgiLCJpIiwiYWNjIiwiYXJncyIsImludGVycG9sYXRlIiwiaW5wdXQiLCJvdXRwdXQiLCJyYW5nZUVhc2luZyIsInJhbmdlTGVuZ3RoIiwiZmluYWxJbmRleCIsInByb2dyZXNzSW5SYW5nZSIsImVhc2VkUHJvZ3Jlc3MiLCJvcmlnaW4iLCJkaXZpZGUiLCJtdWx0aXBseSIsImdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmciLCJhbHRlckRpc3BsYWNlbWVudCIsImNvbnN0YW50IiwiZGlzcGxhY2VtZW50Iiwic3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQiLCJhYnMiLCJzcHJpbmciLCJub25saW5lYXJTcHJpbmciLCJzcXJ0Iiwid3JhcCIsInJhbmdlU2l6ZSIsInNtb290aCIsInN0cmVuZ3RoIiwicHJldmlvdXNWYWx1ZSIsImhhc1Ntb290aGVkIiwiY3VycmVudFZhbHVlIiwibmV3VmFsdWUiLCJzdGVwcyIsInByb2dyZXNzIiwidHJhbnNmb3JtQ2hpbGRWYWx1ZXMiLCJjaGlsZFRyYW5zZm9ybWVycyIsIm11dGFibGVTdGF0ZSIsImtleSIsImNoaWxkVHJhbnNmb3JtZXIiLCJwZXJjZW50IiwiZGVncmVlcyIsInB4IiwicmdiVW5pdCIsInJvdW5kIiwicmdiYVRlbXBsYXRlIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYWxwaGEiLCJyZ2JhIiwiaHNsYVRlbXBsYXRlIiwiaHVlIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsImhzbGEiLCJwYXJzZUZsb2F0IiwiY29sb3IiLCJoYXNPd25Qcm9wZXJ0eSIsImJsZW5kIiwiZnJvbUV4cG8iLCJ0b0V4cG8iLCJibGVuZENvbG9yIiwiZnJvbUNvbG9yIiwidG9Db2xvciIsImJsZW5kZWQiLCJyZXNvbHZlMyIsInBvaW50cyIsInQiLCJ1dCIsInJlc29sdmU0IiwiYTEiLCJiZXppZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLFVBQUNDLENBQUQ7QUFBQSxTQUFPQSxDQUFQO0FBQUEsQ0FBYjs7QUFFQTs7Ozs7OztBQU9PLElBQU1DLGtDQUFhLFVBQUNDLElBQUQ7QUFBQSxTQUFVLFVBQUNGLENBQUQ7QUFBQSxnQkFBVUEsQ0FBVixHQUFjRSxJQUFkO0FBQUEsR0FBVjtBQUFBLENBQW5COztBQUVQOzs7Ozs7OztBQVFPLElBQU1DLG9DQUFjLFVBQUNDLElBQUQsRUFBT0MsRUFBUCxFQUFjO0FBQ3ZDLE1BQU1DLFlBQVlDLFNBQVNILElBQVQsQ0FBbEI7QUFDQSxNQUFNSSxnQkFBZ0JDLElBQUlKLEVBQUosQ0FBdEI7QUFDQSxTQUFPLFVBQUNMLENBQUQ7QUFBQSxXQUFPUSxjQUFjRixVQUFVTixDQUFWLENBQWQsQ0FBUDtBQUFBLEdBQVA7QUFDRCxDQUpNOztBQU1QOzs7Ozs7O0FBT08sSUFBTVUsOEJBQVcsVUFBQ0MsR0FBRDtBQUFBLFNBQVMsVUFBQ1gsQ0FBRDtBQUFBLFdBQU9ZLEtBQUtDLEdBQUwsQ0FBU2IsQ0FBVCxFQUFZVyxHQUFaLENBQVA7QUFBQSxHQUFUO0FBQUEsQ0FBakI7QUFDQSxJQUFNRyw4QkFBVyxVQUFDRCxHQUFEO0FBQUEsU0FBUyxVQUFDYixDQUFEO0FBQUEsV0FBT1ksS0FBS0QsR0FBTCxDQUFTWCxDQUFULEVBQVlhLEdBQVosQ0FBUDtBQUFBLEdBQVQ7QUFBQSxDQUFqQjtBQUNBLElBQU1FLHdCQUFRLFVBQUNGLEdBQUQsRUFBTUYsR0FBTixFQUFjO0FBQ2pDLE1BQU1LLE9BQU9GLFNBQVNELEdBQVQsQ0FBYjtBQUNBLE1BQU1JLE9BQU9QLFNBQVNDLEdBQVQsQ0FBYjtBQUNBLFNBQU8sVUFBQ1gsQ0FBRDtBQUFBLFdBQU9nQixLQUFLQyxLQUFLakIsQ0FBTCxDQUFMLENBQVA7QUFBQSxHQUFQO0FBQ0QsQ0FKTTs7QUFNQSxJQUFNa0Isb0NBQWMsVUFBQ0MsU0FBRCxFQUFZQyxNQUFaO0FBQUEsTUFBb0JDLE9BQXBCLHlEQUE4QnRCLElBQTlCO0FBQUEsU0FBdUMsVUFBQ0MsQ0FBRCxFQUFJc0IsTUFBSixFQUFlO0FBQy9FLFdBQU9ILFVBQVVuQixDQUFWLEVBQWFzQixNQUFiLElBQXVCRixPQUFPcEIsQ0FBUCxFQUFVc0IsTUFBVixDQUF2QixHQUEyQ0QsUUFBUXJCLENBQVIsRUFBV3NCLE1BQVgsQ0FBbEQ7QUFDRCxHQUYwQjtBQUFBLENBQXBCOztBQUlQOzs7Ozs7O0FBT08sSUFBTUMsc0JBQU8sWUFBcUI7QUFBQSxvQ0FBakJDLFlBQWlCO0FBQWpCQSxnQkFBaUI7QUFBQTs7QUFDdkMsTUFBTUMsa0JBQWtCRCxhQUFhRSxNQUFyQztBQUNBLE1BQUlDLElBQUksQ0FBUjs7QUFFQSxTQUFPLFVBQUNDLEdBQUQsRUFBa0I7QUFBQSx1Q0FBVEMsSUFBUztBQUFUQSxVQUFTO0FBQUE7O0FBQ3ZCLFFBQUk3QixJQUFJNEIsR0FBUjtBQUNBLFNBQUtELElBQUksQ0FBVCxFQUFZQSxJQUFJRixlQUFoQixFQUFpQ0UsR0FBakMsRUFBc0M7QUFDcEMzQixVQUFJd0IsYUFBYUcsQ0FBYix1QkFBZ0IzQixDQUFoQixTQUFzQjZCLElBQXRCLEVBQUo7QUFDRDs7QUFFRCxXQUFPN0IsQ0FBUDtBQUNELEdBUEQ7QUFRRCxDQVpNOztBQWNQOzs7Ozs7O0FBT08sSUFBTThCLG9DQUFjLFVBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFnQkMsV0FBaEIsRUFBZ0M7QUFDekQsTUFBTUMsY0FBY0gsTUFBTUwsTUFBMUI7QUFDQSxNQUFNUyxhQUFhRCxjQUFjLENBQWpDOztBQUVBLFNBQU8sVUFBQ2xDLENBQUQsRUFBTztBQUNaO0FBQ0EsUUFBSUEsS0FBSytCLE1BQU0sQ0FBTixDQUFULEVBQW1CO0FBQ2pCLGFBQU9DLE9BQU8sQ0FBUCxDQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJaEMsS0FBSytCLE1BQU1JLFVBQU4sQ0FBVCxFQUE0QjtBQUMxQixhQUFPSCxPQUFPRyxVQUFQLENBQVA7QUFDRDs7QUFFRCxRQUFJUixJQUFJLENBQVI7O0FBRUE7QUFDQSxXQUFPQSxJQUFJTyxXQUFYLEVBQXdCUCxHQUF4QixFQUE2QjtBQUMzQixVQUFJSSxNQUFNSixDQUFOLElBQVczQixDQUFYLElBQWdCMkIsTUFBTVEsVUFBMUIsRUFBc0M7QUFDcEM7QUFDRDtBQUNGOztBQUVELFFBQU1DLGtCQUFrQixnQ0FBcUJMLE1BQU1KLElBQUksQ0FBVixDQUFyQixFQUFtQ0ksTUFBTUosQ0FBTixDQUFuQyxFQUE2QzNCLENBQTdDLENBQXhCO0FBQ0EsUUFBTXFDLGdCQUFpQkosV0FBRCxHQUFnQkEsWUFBWU4sSUFBSSxDQUFoQixFQUFtQlMsZUFBbkIsQ0FBaEIsR0FBc0RBLGVBQTVFO0FBQ0EsV0FBTyxnQ0FBcUJKLE9BQU9MLElBQUksQ0FBWCxDQUFyQixFQUFvQ0ssT0FBT0wsQ0FBUCxDQUFwQyxFQUErQ1UsYUFBL0MsQ0FBUDtBQUNELEdBdkJEO0FBd0JELENBNUJNOztBQThCQSxJQUFNOUIsOEJBQVcsVUFBQytCLE1BQUQ7QUFBQSxTQUFZLFVBQUN0QyxDQUFEO0FBQUEsV0FBT0EsSUFBSXNDLE1BQVg7QUFBQSxHQUFaO0FBQUEsQ0FBakI7QUFDQSxJQUFNN0Isb0JBQU0sVUFBQzZCLE1BQUQ7QUFBQSxTQUFZLFVBQUN0QyxDQUFEO0FBQUEsV0FBT0EsSUFBSXNDLE1BQVg7QUFBQSxHQUFaO0FBQUEsQ0FBWjtBQUNBLElBQU1DLDBCQUFTLFVBQUNELE1BQUQ7QUFBQSxTQUFZLFVBQUN0QyxDQUFEO0FBQUEsV0FBT0EsSUFBSXNDLE1BQVg7QUFBQSxHQUFaO0FBQUEsQ0FBZjtBQUNBLElBQU1FLDhCQUFXLFVBQUNGLE1BQUQ7QUFBQSxTQUFZLFVBQUN0QyxDQUFEO0FBQUEsV0FBT0EsSUFBSXNDLE1BQVg7QUFBQSxHQUFaO0FBQUEsQ0FBakI7O0FBRUEsSUFBTUcsc0VBQStCO0FBQUEsTUFBQ0MsaUJBQUQseURBQXFCM0MsSUFBckI7QUFBQSxTQUE4QixVQUFDNEMsUUFBRCxFQUFXTCxNQUFYO0FBQUEsV0FBc0IsVUFBQ3RDLENBQUQsRUFBTztBQUNyRyxVQUFNNEMsZUFBZU4sU0FBU3RDLENBQTlCO0FBQ0EsVUFBTTZDLDZCQUE2QixDQUFFRixRQUFGLElBQWMsSUFBSUQsa0JBQWtCOUIsS0FBS2tDLEdBQUwsQ0FBU0YsWUFBVCxDQUFsQixDQUFsQixDQUFuQztBQUNBLGFBQVFBLGdCQUFnQixDQUFqQixHQUFzQk4sU0FBU08sMEJBQS9CLEdBQTREUCxTQUFTTywwQkFBNUU7QUFDRCxLQUp5RTtBQUFBLEdBQTlCO0FBQUEsQ0FBckM7O0FBTUEsSUFBTUUsMEJBQVNOLDhCQUFmO0FBQ0EsSUFBTU8sNENBQWtCUCw2QkFBNkI3QixLQUFLcUMsSUFBbEMsQ0FBeEI7O0FBRUEsSUFBTUMsc0JBQU8sVUFBQ3JDLEdBQUQsRUFBTUYsR0FBTjtBQUFBLFNBQWMsVUFBQ1gsQ0FBRCxFQUFPO0FBQ3ZDLFFBQU1tRCxZQUFZeEMsTUFBTUUsR0FBeEI7QUFDQSxXQUFPLENBQUMsQ0FBQ2IsSUFBSWEsR0FBTCxJQUFZc0MsU0FBWixHQUF3QkEsU0FBekIsSUFBc0NBLFNBQXRDLEdBQWtEdEMsR0FBekQ7QUFDRCxHQUhtQjtBQUFBLENBQWI7O0FBS0EsSUFBTXVDLDBCQUFTLFlBQW1CO0FBQUEsTUFBbEJDLFFBQWtCLHlEQUFQLEVBQU87O0FBQ3ZDLE1BQUlDLGdCQUFnQixDQUFwQjtBQUNBLE1BQUlDLGNBQWMsS0FBbEI7O0FBRUEsU0FBTyxVQUFDdkQsQ0FBRCxFQUFPO0FBQ1osUUFBTXdELGVBQWdCRCxXQUFELEdBQWdCRCxhQUFoQixHQUFnQ3RELENBQXJEO0FBQ0EsUUFBTXlELFdBQVcsa0JBQWNELFlBQWQsRUFBNEJGLGFBQTVCLEVBQTJDLG9DQUEzQyxFQUFpRUQsUUFBakUsQ0FBakI7QUFDQUMsb0JBQWdCRyxRQUFoQjtBQUNBRixrQkFBYyxJQUFkO0FBQ0EsV0FBT0UsUUFBUDtBQUNELEdBTkQ7QUFPRCxDQVhNOztBQWFBLElBQU1DLHdCQUFRLFVBQUNBLEtBQUQsRUFBUTdDLEdBQVIsRUFBYUYsR0FBYjtBQUFBLFNBQXFCLFVBQUNYLENBQUQsRUFBTztBQUMvQyxRQUFNMkQsV0FBVyxnQ0FBcUI5QyxHQUFyQixFQUEwQkYsR0FBMUIsRUFBK0JYLENBQS9CLENBQWpCO0FBQ0EsV0FBTyx3QkFBYTBELEtBQWIsRUFBb0JDLFFBQXBCLENBQVA7QUFDRCxHQUhvQjtBQUFBLENBQWQ7O0FBS0EsSUFBTUMsc0RBQXVCLFVBQUNDLGlCQUFELEVBQXVCO0FBQ3pELE1BQU1DLGVBQWUsRUFBckI7QUFDQSxTQUFPLFVBQUM5RCxDQUFELEVBQU87QUFDWixTQUFLLElBQUkrRCxHQUFULElBQWdCL0QsQ0FBaEIsRUFBbUI7QUFDakIsVUFBTWdFLG1CQUFtQkgsa0JBQWtCRSxHQUFsQixDQUF6QjtBQUNBLFVBQUlDLGdCQUFKLEVBQXNCO0FBQ3BCRixxQkFBYUMsR0FBYixJQUFvQkMsaUJBQWlCaEUsRUFBRStELEdBQUYsQ0FBakIsQ0FBcEI7QUFDRDtBQUNGOztBQUVELFdBQU9ELFlBQVA7QUFDRCxHQVREO0FBVUQsQ0FaTTs7QUFjUDtBQUNPLElBQU1HLDRCQUFVaEUsV0FBVyxHQUFYLENBQWhCO0FBQ0EsSUFBTWlFLDRCQUFVakUsV0FBVyxLQUFYLENBQWhCO0FBQ0EsSUFBTWtFLGtCQUFLbEUsV0FBVyxJQUFYLENBQVg7O0FBRUEsSUFBTW1FLDRCQUFVN0MsS0FDckJSLE1BQU0sQ0FBTixFQUFTLEdBQVQsQ0FEcUIsRUFFckJILEtBQUt5RCxLQUZnQixDQUFoQjs7QUFLUCxJQUFNQyxlQUFlO0FBQUEsTUFBR0MsR0FBSCxRQUFHQSxHQUFIO0FBQUEsTUFBUUMsS0FBUixRQUFRQSxLQUFSO0FBQUEsTUFBZUMsSUFBZixRQUFlQSxJQUFmO0FBQUEsd0JBQXFCQyxLQUFyQjtBQUFBLE1BQXFCQSxLQUFyQiw4QkFBNkIsQ0FBN0I7QUFBQSxtQkFDWEgsR0FEVyxVQUNIQyxLQURHLFVBQ09DLElBRFAsVUFDZ0JDLEtBRGhCO0FBQUEsQ0FBckI7O0FBR08sSUFBTUMsc0JBQU9wRCxLQUNsQnFDLHFCQUFxQjtBQUNuQlcsT0FBS0gsT0FEYztBQUVuQkksU0FBT0osT0FGWTtBQUduQkssUUFBTUwsT0FIYTtBQUluQk07QUFKbUIsQ0FBckIsQ0FEa0IsRUFPbEJKLFlBUGtCLENBQWI7O0FBVVAsSUFBTU0sZUFBZTtBQUFBLE1BQUdDLEdBQUgsU0FBR0EsR0FBSDtBQUFBLE1BQVFDLFVBQVIsU0FBUUEsVUFBUjtBQUFBLE1BQW9CQyxTQUFwQixTQUFvQkEsU0FBcEI7QUFBQSwwQkFBK0JMLEtBQS9CO0FBQUEsTUFBK0JBLEtBQS9CLCtCQUF1QyxDQUF2QztBQUFBLG1CQUNYRyxHQURXLFVBQ0hDLFVBREcsVUFDWUMsU0FEWixVQUMwQkwsS0FEMUI7QUFBQSxDQUFyQjs7QUFHTyxJQUFNTSxzQkFBT3pELEtBQ2xCcUMscUJBQXFCO0FBQ25CaUIsT0FBS0ksVUFEYztBQUVuQkgsY0FBWWIsT0FGTztBQUduQmMsYUFBV2QsT0FIUTtBQUluQlM7QUFKbUIsQ0FBckIsQ0FEa0IsRUFPbEJFLFlBUGtCLENBQWI7O0FBVUEsSUFBTU0sd0JBQVEsVUFBQ2xGLENBQUQsRUFBTztBQUMxQixNQUFJQSxFQUFFbUYsY0FBRixDQUFpQixLQUFqQixDQUFKLEVBQTZCO0FBQzNCLFdBQU9SLEtBQUszRSxDQUFMLENBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUEsRUFBRW1GLGNBQUYsQ0FBaUIsS0FBakIsQ0FBSixFQUE2QjtBQUNsQyxXQUFPSCxLQUFLaEYsQ0FBTCxDQUFQO0FBQ0Q7QUFDRCxTQUFPQSxDQUFQO0FBQ0QsQ0FQTTs7QUFTQSxJQUFNMEUsd0JBQVEzRCxNQUFNLENBQU4sRUFBUyxDQUFULENBQWQ7O0FBRVAsSUFBTXFFLFFBQVEsVUFBQ2hGLElBQUQsRUFBT0MsRUFBUCxFQUFXTCxDQUFYLEVBQWlCO0FBQzdCLE1BQU1xRixXQUFXakYsT0FBT0EsSUFBeEI7QUFDQSxNQUFNa0YsU0FBU2pGLEtBQUtBLEVBQXBCO0FBQ0EsU0FBT08sS0FBS3FDLElBQUwsQ0FBVWpELEtBQUtzRixTQUFTRCxRQUFkLElBQTBCQSxRQUFwQyxDQUFQO0FBQ0QsQ0FKRDtBQUtBO0FBQ08sSUFBTUUsa0NBQWEsVUFBQ25GLElBQUQsRUFBT0MsRUFBUCxFQUFjO0FBQ3RDLE1BQU1tRixZQUFZLHFCQUFTcEYsSUFBVCxJQUFpQixvQkFBV0EsSUFBWCxDQUFqQixHQUFvQ0EsSUFBdEQ7QUFDQSxNQUFNcUYsVUFBVSxxQkFBU3BGLEVBQVQsSUFBZSxvQkFBV0EsRUFBWCxDQUFmLEdBQStCQSxFQUEvQzs7QUFFQSxNQUFNcUYsdUJBQWVGLFNBQWYsQ0FBTjs7QUFFQSxTQUFPLFVBQUN4RixDQUFELEVBQU87QUFDWixTQUFLLElBQUkrRCxHQUFULElBQWdCMkIsT0FBaEIsRUFBeUI7QUFDdkJBLGNBQVEzQixHQUFSLElBQWVxQixNQUFNSSxVQUFVekIsR0FBVixDQUFOLEVBQXNCMEIsUUFBUTFCLEdBQVIsQ0FBdEIsRUFBb0MvRCxDQUFwQyxDQUFmO0FBQ0Q7QUFDRDBGLFlBQVFuQixHQUFSLEdBQWNhLE1BQU1JLFVBQVVqQixHQUFoQixFQUFxQmtCLFFBQVFsQixHQUE3QixFQUFrQ3ZFLENBQWxDLENBQWQ7QUFDQTBGLFlBQVFsQixLQUFSLEdBQWdCWSxNQUFNSSxVQUFVaEIsS0FBaEIsRUFBdUJpQixRQUFRakIsS0FBL0IsRUFBc0N4RSxDQUF0QyxDQUFoQjtBQUNBMEYsWUFBUWpCLElBQVIsR0FBZVcsTUFBTUksVUFBVWYsSUFBaEIsRUFBc0JnQixRQUFRaEIsSUFBOUIsRUFBb0N6RSxDQUFwQyxDQUFmO0FBQ0EwRixZQUFRaEIsS0FBUixHQUFnQixnQ0FBcUJjLFVBQVVkLEtBQS9CLEVBQXNDZSxRQUFRZixLQUE5QyxFQUFxRDFFLENBQXJELENBQWhCO0FBQ0EsV0FBTzBGLE9BQVA7QUFDRCxHQVREO0FBVUQsQ0FoQk07O0FBa0JQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEsSUFBTUMsV0FBVyxVQUFDQyxNQUFEO0FBQUEsU0FBWSxVQUFDQyxDQUFELEVBQU87QUFDbEMsUUFBTUMsS0FBSyxJQUFJRCxDQUFmO0FBQ0EsV0FBTyxDQUFDRCxPQUFPLENBQVAsSUFBWUUsRUFBWixHQUFpQkYsT0FBTyxDQUFQLElBQVlDLENBQTlCLElBQW1DQyxFQUFuQyxHQUF3QyxDQUFDRixPQUFPLENBQVAsSUFBWUUsRUFBWixHQUFpQkYsT0FBTyxDQUFQLElBQVlDLENBQTlCLElBQW1DQSxDQUFsRjtBQUNELEdBSGdCO0FBQUEsQ0FBakI7O0FBS0EsSUFBTUUsV0FBVyxVQUFDSCxNQUFEO0FBQUEsU0FBWSxVQUFDQyxDQUFELEVBQU87QUFDbEMsUUFBTUMsS0FBSyxJQUFJRCxDQUFmO0FBQ0EsUUFBTUcsS0FBS0osT0FBTyxDQUFQLElBQVlFLEVBQVosR0FBaUJGLE9BQU8sQ0FBUCxJQUFZQyxDQUF4QztBQUNBLFdBQU8sQ0FBQyxDQUFDRCxPQUFPLENBQVAsSUFBWUUsRUFBWixHQUFpQkYsT0FBTyxDQUFQLElBQVlDLENBQTlCLElBQW1DQyxFQUFuQyxHQUF3Q0UsS0FBS0gsQ0FBOUMsSUFBbURDLEVBQW5ELEdBQXdELENBQUNFLEtBQUtGLEVBQUwsR0FBVSxDQUFDRixPQUFPLENBQVAsSUFBWUUsRUFBWixHQUFpQkYsT0FBTyxDQUFQLElBQVlDLENBQTlCLElBQW1DQSxDQUE5QyxJQUFtREEsQ0FBbEg7QUFDRCxHQUpnQjtBQUFBLENBQWpCOztBQU1PLElBQU1JLDBCQUFTLFVBQUNMLE1BQUQ7QUFBQSxTQUNuQkEsT0FBT2xFLE1BQVAsS0FBa0IsQ0FBbkIsR0FBd0JpRSxTQUFTQyxNQUFULENBQXhCLEdBQTJDRyxTQUFTSCxNQUFULENBRHZCO0FBQUEsQ0FBZiIsImZpbGUiOiJ0cmFuc2Zvcm1lcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MsIHN0ZXBQcm9ncmVzcywgc21vb3RoIGFzIGNhbGNTbW9vdGhpbmcgfSBmcm9tICcuL2NhbGMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNvbG9yIGFzIHBhcnNlQ29sb3IgfSBmcm9tICcuL3BhcnNlcnMnO1xuaW1wb3J0IHsgdGltZVNpbmNlTGFzdEZyYW1lIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcblxuY29uc3Qgbm9vcCA9ICh2KSA9PiB2O1xuXG4vKipcbiAqIEFwcGVuZCBVbml0XG4gKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBhcHBlbmRcbiAqIGFwcGVuZFVuaXQoJ3B4JywgMjApIC0+ICcyMHB4J1xuICogQHBhcmFtICB7c3RyaW5nfSB1bml0KVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgYXBwZW5kVW5pdCA9ICh1bml0KSA9PiAodikgPT4gYCR7dn0ke3VuaXR9YDtcblxuLyoqXG4gKiBBcHBseSBvZmZzZXRcbiAqIEEgZnVuY3Rpb24gdGhhdCwgZ2l2ZW4gYSB2YWx1ZSwgd2lsbCBnZXQgdGhlIG9mZnNldCBmcm9tIGBmcm9tYFxuICogYW5kIGFwcGx5IGl0IHRvIGB0b2BcbiAqIEBwYXJhbSAge251bWJlcn0gZnJvbVxuICogQHBhcmFtICB7bnVtYmVyfSB0b1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCBhcHBseU9mZnNldCA9IChmcm9tLCB0bykgPT4ge1xuICBjb25zdCBnZXRPZmZzZXQgPSBzdWJ0cmFjdChmcm9tKTtcbiAgY29uc3QgYXBwbHlPZmZzZXRUbyA9IGFkZCh0byk7XG4gIHJldHVybiAodikgPT4gYXBwbHlPZmZzZXRUbyhnZXRPZmZzZXQodikpO1xufTtcblxuLyoqXG4gKiBDbGFtcCB2YWx1ZSBiZXR3ZWVuXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlc3RyaWN0IGEgZ2l2ZW4gdmFsdWUgYmV0d2VlbiBgbWluYCBhbmQgYG1heGBcbiAqIEBwYXJhbSAge251bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgY2xhbXBNYXggPSAobWF4KSA9PiAodikgPT4gTWF0aC5taW4odiwgbWF4KTtcbmV4cG9ydCBjb25zdCBjbGFtcE1pbiA9IChtaW4pID0+ICh2KSA9PiBNYXRoLm1heCh2LCBtaW4pO1xuZXhwb3J0IGNvbnN0IGNsYW1wID0gKG1pbiwgbWF4KSA9PiB7XG4gIGNvbnN0IF9taW4gPSBjbGFtcE1pbihtaW4pO1xuICBjb25zdCBfbWF4ID0gY2xhbXBNYXgobWF4KTtcbiAgcmV0dXJuICh2KSA9PiBfbWluKF9tYXgodikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbmRpdGlvbmFsID0gKGNvbmRpdGlvbiwgaWZUcnVlLCBpZkZhbHNlID0gbm9vcCkgPT4gKHYsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gY29uZGl0aW9uKHYsIGFjdGlvbikgPyBpZlRydWUodiwgYWN0aW9uKSA6IGlmRmFsc2UodiwgYWN0aW9uKTtcbn07XG5cbi8qKlxuICogRmxvd1xuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogZmxvdyhtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgZmxvdyA9ICguLi50cmFuc2Zvcm1lcnMpID0+IHtcbiAgY29uc3QgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIHJldHVybiAoYWNjLCAuLi5hcmdzKSA9PiB7XG4gICAgbGV0IHYgPSBhY2M7XG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldKHYsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcblxuLyoqXG4gKiBJbnRlcnBvbGF0ZSBmcm9tIHNldCBvZiB2YWx1ZXMgdG8gYW5vdGhlclxuICogQHBhcmFtICB7QXJyYXl9IGlucHV0IGFycmF5XG4gKiBAcGFyYW0gIHtBcnJheX0gb3V0cHV0XG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gcmFuZ2VFYXNpbmdcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgaW50ZXJwb2xhdGUgPSAoaW5wdXQsIG91dHB1dCwgcmFuZ2VFYXNpbmcpID0+IHtcbiAgY29uc3QgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIGNvbnN0IGZpbmFsSW5kZXggPSByYW5nZUxlbmd0aCAtIDE7XG5cbiAgcmV0dXJuICh2KSA9PiB7XG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtaW5pbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2IDw9IGlucHV0WzBdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0WzBdO1xuICAgIH1cblxuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA+PSBpbnB1dFtmaW5hbEluZGV4XSkge1xuICAgICAgcmV0dXJuIG91dHB1dFtmaW5hbEluZGV4XTtcbiAgICB9XG5cbiAgICBsZXQgaSA9IDE7XG5cbiAgICAvLyBGaW5kIGluZGV4IG9mIHJhbmdlIHN0YXJ0XG4gICAgZm9yICg7IGkgPCByYW5nZUxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5wdXRbaV0gPiB2IHx8IGkgPT09IGZpbmFsSW5kZXgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJvZ3Jlc3NJblJhbmdlID0gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoaW5wdXRbaSAtIDFdLCBpbnB1dFtpXSwgdik7XG4gICAgY29uc3QgZWFzZWRQcm9ncmVzcyA9IChyYW5nZUVhc2luZykgPyByYW5nZUVhc2luZ1tpIC0gMV0ocHJvZ3Jlc3NJblJhbmdlKSA6IHByb2dyZXNzSW5SYW5nZTtcbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3Mob3V0cHV0W2kgLSAxXSwgb3V0cHV0W2ldLCBlYXNlZFByb2dyZXNzKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdWJ0cmFjdCA9IChvcmlnaW4pID0+ICh2KSA9PiB2IC0gb3JpZ2luO1xuZXhwb3J0IGNvbnN0IGFkZCA9IChvcmlnaW4pID0+ICh2KSA9PiB2ICsgb3JpZ2luO1xuZXhwb3J0IGNvbnN0IGRpdmlkZSA9IChvcmlnaW4pID0+ICh2KSA9PiB2IC8gb3JpZ2luO1xuZXhwb3J0IGNvbnN0IG11bHRpcGx5ID0gKG9yaWdpbikgPT4gKHYpID0+IHYgKiBvcmlnaW47XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gKGFsdGVyRGlzcGxhY2VtZW50ID0gbm9vcCkgPT4gKGNvbnN0YW50LCBvcmlnaW4pID0+ICh2KSA9PiB7XG4gIGNvbnN0IGRpc3BsYWNlbWVudCA9IG9yaWdpbiAtIHY7XG4gIGNvbnN0IHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50ID0gLSBjb25zdGFudCAqICgwIC0gYWx0ZXJEaXNwbGFjZW1lbnQoTWF0aC5hYnMoZGlzcGxhY2VtZW50KSkpO1xuICByZXR1cm4gKGRpc3BsYWNlbWVudCA8PSAwKSA/IG9yaWdpbiArIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50IDogb3JpZ2luIC0gc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQ7XG59O1xuXG5leHBvcnQgY29uc3Qgc3ByaW5nID0gZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZygpO1xuZXhwb3J0IGNvbnN0IG5vbmxpbmVhclNwcmluZyA9IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcoTWF0aC5zcXJ0KTtcblxuZXhwb3J0IGNvbnN0IHdyYXAgPSAobWluLCBtYXgpID0+ICh2KSA9PiB7XG4gIGNvbnN0IHJhbmdlU2l6ZSA9IG1heCAtIG1pbjtcbiAgcmV0dXJuICgodiAtIG1pbikgJSByYW5nZVNpemUgKyByYW5nZVNpemUpICUgcmFuZ2VTaXplICsgbWluO1xufTtcblxuZXhwb3J0IGNvbnN0IHNtb290aCA9IChzdHJlbmd0aCA9IDUwKSA9PiB7XG4gIGxldCBwcmV2aW91c1ZhbHVlID0gMDtcbiAgbGV0IGhhc1Ntb290aGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuICh2KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gKGhhc1Ntb290aGVkKSA/IHByZXZpb3VzVmFsdWUgOiB2O1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gY2FsY1Ntb290aGluZyhjdXJyZW50VmFsdWUsIHByZXZpb3VzVmFsdWUsIHRpbWVTaW5jZUxhc3RGcmFtZSgpLCBzdHJlbmd0aCk7XG4gICAgcHJldmlvdXNWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgIGhhc1Ntb290aGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gbmV3VmFsdWU7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc3RlcHMgPSAoc3RlcHMsIG1pbiwgbWF4KSA9PiAodikgPT4ge1xuICBjb25zdCBwcm9ncmVzcyA9IGdldFByb2dyZXNzRnJvbVZhbHVlKG1pbiwgbWF4LCB2KTtcbiAgcmV0dXJuIHN0ZXBQcm9ncmVzcyhzdGVwcywgcHJvZ3Jlc3MpO1xufTtcblxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybUNoaWxkVmFsdWVzID0gKGNoaWxkVHJhbnNmb3JtZXJzKSA9PiB7XG4gIGNvbnN0IG11dGFibGVTdGF0ZSA9IHt9O1xuICByZXR1cm4gKHYpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdikge1xuICAgICAgY29uc3QgY2hpbGRUcmFuc2Zvcm1lciA9IGNoaWxkVHJhbnNmb3JtZXJzW2tleV07XG4gICAgICBpZiAoY2hpbGRUcmFuc2Zvcm1lcikge1xuICAgICAgICBtdXRhYmxlU3RhdGVba2V5XSA9IGNoaWxkVHJhbnNmb3JtZXIodltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbXV0YWJsZVN0YXRlO1xuICB9O1xufTtcblxuLy8gVW5pdCB0cmFuc2Zvcm1lcnNcbmV4cG9ydCBjb25zdCBwZXJjZW50ID0gYXBwZW5kVW5pdCgnJScpO1xuZXhwb3J0IGNvbnN0IGRlZ3JlZXMgPSBhcHBlbmRVbml0KCdkZWcnKTtcbmV4cG9ydCBjb25zdCBweCA9IGFwcGVuZFVuaXQoJ3B4Jyk7XG5cbmV4cG9ydCBjb25zdCByZ2JVbml0ID0gZmxvdyhcbiAgY2xhbXAoMCwgMjU1KSxcbiAgTWF0aC5yb3VuZFxuKTtcblxuY29uc3QgcmdiYVRlbXBsYXRlID0gKHsgcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEgPSAxIH0pID0+IFxuICBgcmdiYSgke3JlZH0sICR7Z3JlZW59LCAke2JsdWV9LCAke2FscGhhfSlgO1xuXG5leHBvcnQgY29uc3QgcmdiYSA9IGZsb3coXG4gIHRyYW5zZm9ybUNoaWxkVmFsdWVzKHtcbiAgICByZWQ6IHJnYlVuaXQsXG4gICAgZ3JlZW46IHJnYlVuaXQsXG4gICAgYmx1ZTogcmdiVW5pdCxcbiAgICBhbHBoYVxuICB9KSxcbiAgcmdiYVRlbXBsYXRlXG4pO1xuXG5jb25zdCBoc2xhVGVtcGxhdGUgPSAoeyBodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYWxwaGEgPSAxIH0pID0+IFxuICBgaHNsYSgke2h1ZX0sICR7c2F0dXJhdGlvbn0sICR7bGlnaHRuZXNzfSwgJHthbHBoYX0pYDtcblxuZXhwb3J0IGNvbnN0IGhzbGEgPSBmbG93KFxuICB0cmFuc2Zvcm1DaGlsZFZhbHVlcyh7XG4gICAgaHVlOiBwYXJzZUZsb2F0LFxuICAgIHNhdHVyYXRpb246IHBlcmNlbnQsXG4gICAgbGlnaHRuZXNzOiBwZXJjZW50LFxuICAgIGFscGhhXG4gIH0pLFxuICBoc2xhVGVtcGxhdGVcbik7XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9ICh2KSA9PiB7XG4gIGlmICh2Lmhhc093blByb3BlcnR5KCdyZWQnKSkge1xuICAgIHJldHVybiByZ2JhKHYpO1xuICB9IGVsc2UgaWYgKHYuaGFzT3duUHJvcGVydHkoJ2h1ZScpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cbiAgcmV0dXJuIHY7XG59O1xuXG5leHBvcnQgY29uc3QgYWxwaGEgPSBjbGFtcCgwLCAxKTtcblxuY29uc3QgYmxlbmQgPSAoZnJvbSwgdG8sIHYpID0+IHtcbiAgY29uc3QgZnJvbUV4cG8gPSBmcm9tICogZnJvbTtcbiAgY29uc3QgdG9FeHBvID0gdG8gKiB0bztcbiAgcmV0dXJuIE1hdGguc3FydCh2ICogKHRvRXhwbyAtIGZyb21FeHBvKSArIGZyb21FeHBvKTtcbn07XG4vLyBodHRwOi8vY29kZXBlbi5pby9vc3VibGFrZS9wZW4veEdWVmFOXG5leHBvcnQgY29uc3QgYmxlbmRDb2xvciA9IChmcm9tLCB0bykgPT4ge1xuICBjb25zdCBmcm9tQ29sb3IgPSBpc1N0cmluZyhmcm9tKSA/IHBhcnNlQ29sb3IoZnJvbSkgOiBmcm9tO1xuICBjb25zdCB0b0NvbG9yID0gaXNTdHJpbmcodG8pID8gcGFyc2VDb2xvcih0byk6IHRvO1xuXG4gIGNvbnN0IGJsZW5kZWQgPSB7IC4uLmZyb21Db2xvciB9O1xuXG4gIHJldHVybiAodikgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiBibGVuZGVkKSB7XG4gICAgICBibGVuZGVkW2tleV0gPSBibGVuZChmcm9tQ29sb3Jba2V5XSwgdG9Db2xvcltrZXldLCB2KTtcbiAgICB9XG4gICAgYmxlbmRlZC5yZWQgPSBibGVuZChmcm9tQ29sb3IucmVkLCB0b0NvbG9yLnJlZCwgdik7XG4gICAgYmxlbmRlZC5ncmVlbiA9IGJsZW5kKGZyb21Db2xvci5ncmVlbiwgdG9Db2xvci5ncmVlbiwgdik7XG4gICAgYmxlbmRlZC5ibHVlID0gYmxlbmQoZnJvbUNvbG9yLmJsdWUsIHRvQ29sb3IuYmx1ZSwgdik7XG4gICAgYmxlbmRlZC5hbHBoYSA9IGdldFZhbHVlRnJvbVByb2dyZXNzKGZyb21Db2xvci5hbHBoYSwgdG9Db2xvci5hbHBoYSwgdik7XG4gICAgcmV0dXJuIGJsZW5kZWQ7XG4gIH07XG59O1xuXG4vLyBCZXppZXIgcmVzb2x2ZXJcbi8vIFJlZmFjdG9yZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vaHVnaHNrL2Jlemllci9ibG9iL21hc3Rlci9pbmRleC5qc1xuLyoqXG4jIyBUaGUgTUlUIExpY2Vuc2UgKE1JVCkgIyNcblxuQ29weXJpZ2h0IChjKSAyMDEzIEh1Z2ggS2VubmVkeVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG4gKi9cbmNvbnN0IHJlc29sdmUzID0gKHBvaW50cykgPT4gKHQpID0+IHtcbiAgY29uc3QgdXQgPSAxIC0gdDtcbiAgcmV0dXJuIChwb2ludHNbMF0gKiB1dCArIHBvaW50c1sxXSAqIHQpICogdXQgKyAocG9pbnRzWzFdICogdXQgKyBwb2ludHNbMl0gKiB0KSAqIHQ7XG59O1xuXG5jb25zdCByZXNvbHZlNCA9IChwb2ludHMpID0+ICh0KSA9PiB7XG4gIGNvbnN0IHV0ID0gMSAtIHQ7XG4gIGNvbnN0IGExID0gcG9pbnRzWzFdICogdXQgKyBwb2ludHNbMl0gKiB0O1xuICByZXR1cm4gKChwb2ludHNbMF0gKiB1dCArIHBvaW50c1sxXSAqIHQpICogdXQgKyBhMSAqIHQpICogdXQgKyAoYTEgKiB1dCArIChwb2ludHNbMl0gKiB1dCArIHBvaW50c1szXSAqIHQpICogdCkgKiB0O1xufTtcblxuZXhwb3J0IGNvbnN0IGJlemllciA9IChwb2ludHMpID0+XG4gIChwb2ludHMubGVuZ3RoID09PSAzKSA/IHJlc29sdmUzKHBvaW50cykgOiByZXNvbHZlNChwb2ludHMpO1xuIl19

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
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _tween = __webpack_require__(15);
	
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
	  var from = _ref.from;
	  var to = _ref.to;
	  var onUpdate = _ref.onUpdate;
	  var _ref$accuracy = _ref.accuracy;
	  var accuracy = _ref$accuracy === undefined ? 60 : _ref$accuracy;
	
	  var props = _objectWithoutProperties(_ref, ['from', 'to', 'onUpdate', 'accuracy']);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyJdLCJuYW1lcyI6WyJjbGFtcFByb2dyZXNzIiwiY2FsY1ZhbHVlQXRUaW1lIiwiZnJvbSIsInRvIiwiZHVyYXRpb24iLCJlbGFwc2VkIiwiZWFzZSIsInByb2dyZXNzQXRUaW1lIiwib25VcGRhdGUiLCJhY2N1cmFjeSIsInByb3BzIiwiYSIsImIiLCJhQ3VycmVudCIsImdldCIsImFEdXJhdGlvbiIsImdldFByb3AiLCJiRHVyYXRpb24iLCJhRWFzZSIsImJFYXNlIiwiYUZyb20iLCJiRnJvbSIsImFUbyIsImJUbyIsIm92ZXJsYXBEdXJhdGlvbiIsIk1hdGgiLCJtaW4iLCJnZXRFbGFwc2VkIiwiYlZhbHVlQXRUd2Vlbk92ZXJsYXBDb21wbGV0ZSIsImJTdGFydHNIaWdoZXJUaGFuQSIsImJFbmRzSGlnaGVyVGhhbkEiLCJQMSIsImJsZW5kUG9pbnRzIiwidHdlZW5zSW50ZXJzZWN0IiwidGltZXN0ZXAiLCJpIiwicnVubmluZ1RpbWUiLCJhVmFsdWVBdFRpbWUiLCJiVmFsdWVBdFRpbWUiLCJoYXNJbnRlcnNlY3RlZCIsIlAyIiwicHVzaCIsIlAzIiwiUDQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGdCQUFnQix5QkFBTSxDQUFOLEVBQVMsQ0FBVCxDQUF0Qjs7QUFFQSxTQUFTQyxlQUFULENBQXlCQyxJQUF6QixFQUErQkMsRUFBL0IsRUFBbUNDLFFBQW5DLEVBQTZDQyxPQUE3QyxFQUFzREMsSUFBdEQsRUFBNEQ7QUFDMUQsTUFBTUMsaUJBQWlCRCxLQUFLTixjQUFjLGdDQUFxQixDQUFyQixFQUF3QkksUUFBeEIsRUFBa0NDLE9BQWxDLENBQWQsQ0FBTCxDQUF2QjtBQUNBLFNBQU8sZ0NBQXFCSCxJQUFyQixFQUEyQkMsRUFBM0IsRUFBK0JJLGNBQS9CLENBQVA7QUFDRDs7a0JBRWMsZ0JBQXFEO0FBQUEsTUFBbERMLElBQWtELFFBQWxEQSxJQUFrRDtBQUFBLE1BQTVDQyxFQUE0QyxRQUE1Q0EsRUFBNEM7QUFBQSxNQUF4Q0ssUUFBd0MsUUFBeENBLFFBQXdDO0FBQUEsMkJBQTlCQyxRQUE4QjtBQUFBLE1BQTlCQSxRQUE4QixpQ0FBbkIsRUFBbUI7O0FBQUEsTUFBWkMsS0FBWTs7QUFDbEU7QUFDQSxNQUFNQyxJQUFJVCxJQUFWO0FBQ0EsTUFBTVUsSUFBSVQsRUFBVjtBQUNBLE1BQU1VLFdBQVdGLEVBQUVHLEdBQUYsRUFBakI7QUFDQSxNQUFNQyxZQUFZSixFQUFFSyxPQUFGLENBQVUsVUFBVixDQUFsQjtBQUNBLE1BQU1DLFlBQVlMLEVBQUVJLE9BQUYsQ0FBVSxVQUFWLENBQWxCO0FBQ0EsTUFBTUUsUUFBUVAsRUFBRUssT0FBRixDQUFVLE1BQVYsQ0FBZDtBQUNBLE1BQU1HLFFBQVFQLEVBQUVJLE9BQUYsQ0FBVSxNQUFWLENBQWQ7QUFDQSxNQUFNSSxRQUFRVCxFQUFFSyxPQUFGLENBQVUsTUFBVixDQUFkO0FBQ0EsTUFBTUssUUFBUVQsRUFBRUksT0FBRixDQUFVLE1BQVYsQ0FBZDtBQUNBLE1BQU1NLE1BQU1YLEVBQUVLLE9BQUYsQ0FBVSxJQUFWLENBQVo7QUFDQSxNQUFNTyxNQUFNWCxFQUFFSSxPQUFGLENBQVUsSUFBVixDQUFaOztBQUVBO0FBQ0EsTUFBTVEsa0JBQWtCQyxLQUFLQyxHQUFMLENBQVNYLFlBQVlKLEVBQUVnQixVQUFGLEVBQXJCLEVBQXFDVixTQUFyQyxDQUF4QjtBQUNBLE1BQU1XLCtCQUErQjNCLGdCQUFnQm9CLEtBQWhCLEVBQXVCRSxHQUF2QixFQUE0Qk4sU0FBNUIsRUFBdUNPLGVBQXZDLEVBQXdETCxLQUF4RCxDQUFyQztBQUNBLE1BQU1VLHFCQUFzQlIsUUFBUVIsUUFBcEM7QUFDQSxNQUFNaUIsbUJBQW9CRiwrQkFBK0JOLEdBQXpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU1TLEtBQUtsQixRQUFYO0FBQ0EsTUFBTW1CLGNBQWMsQ0FBQ0QsRUFBRCxDQUFwQjs7QUFFQTtBQUNBO0FBQ0EsTUFBTUUsa0JBQW1CSix1QkFBdUJDLGdCQUFoRDtBQUNBLE1BQUlHLGVBQUosRUFBcUI7QUFDbkIsUUFBSUMsV0FBV1Ysa0JBQWtCZixRQUFqQzs7QUFFQSxTQUFLLElBQUkwQixJQUFJLENBQWIsRUFBZ0JBLElBQUkxQixRQUFwQixFQUE4QjBCLEdBQTlCLEVBQW1DO0FBQ2pDLFVBQU1DLGNBQWNELElBQUlELFFBQXhCOztBQUVBLFVBQU1HLGVBQWVwQyxnQkFBZ0JtQixLQUFoQixFQUF1QkUsR0FBdkIsRUFBNEJQLFNBQTVCLEVBQXVDSixFQUFFTixPQUFGLEdBQVkrQixXQUFuRCxFQUFnRWxCLEtBQWhFLENBQXJCO0FBQ0EsVUFBTW9CLGVBQWVyQyxnQkFBZ0JvQixLQUFoQixFQUF1QkUsR0FBdkIsRUFBNEJOLFNBQTVCLEVBQXVDTCxFQUFFUCxPQUFGLEdBQVkrQixXQUFuRCxFQUFnRWpCLEtBQWhFLENBQXJCOztBQUVBLFVBQU1vQixpQkFDSFYsc0JBQXNCUSxlQUFlQyxZQUF0QyxJQUNDLENBQUNULGtCQUFELElBQXVCUSxlQUFlQyxZQUZ6Qzs7QUFLQSxVQUFJQyxjQUFKLEVBQW9CO0FBQ2xCLFlBQU1DLEtBQUtGLFlBQVg7QUFDQU4sb0JBQVlTLElBQVosQ0FBaUJELEVBQWpCO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7QUFDQTtBQUNBLE1BQU1FLEtBQUtkLDRCQUFYO0FBQ0FJLGNBQVlTLElBQVosQ0FBaUJDLEVBQWpCOztBQUVBO0FBQ0EsTUFBTUMsS0FBS3BCLEdBQVg7QUFDQVMsY0FBWVMsSUFBWixDQUFpQkUsRUFBakI7O0FBRUEsU0FBTyxrQ0FDRmpDLEtBREU7QUFFTE4sY0FBVWEsU0FGTDtBQUdMWCx3QkFISztBQUlMRSxjQUFVLHdCQUNSLDBCQUFPd0IsV0FBUCxDQURRLEVBRVJ4QixRQUZRO0FBSkwsS0FBUDtBQVNELEMiLCJmaWxlIjoiYmxlbmQtdHdlZW5zLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR3ZWVuIGZyb20gJy4vdHdlZW4nO1xuaW1wb3J0IHsgbGluZWFyIH0gZnJvbSAnLi4vaW5jL2Vhc2luZyc7XG5pbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBmbG93LCBjbGFtcCwgYmV6aWVyIH0gZnJvbSAnLi4vaW5jL3RyYW5zZm9ybWVycyc7XG5cbmNvbnN0IGNsYW1wUHJvZ3Jlc3MgPSBjbGFtcCgwLCAxKTtcblxuZnVuY3Rpb24gY2FsY1ZhbHVlQXRUaW1lKGZyb20sIHRvLCBkdXJhdGlvbiwgZWxhcHNlZCwgZWFzZSkge1xuICBjb25zdCBwcm9ncmVzc0F0VGltZSA9IGVhc2UoY2xhbXBQcm9ncmVzcyhnZXRQcm9ncmVzc0Zyb21WYWx1ZSgwLCBkdXJhdGlvbiwgZWxhcHNlZCkpKTtcbiAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGZyb20sIHRvLCBwcm9ncmVzc0F0VGltZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGZyb20sIHRvLCBvblVwZGF0ZSwgYWNjdXJhY3kgPSA2MCwgLi4ucHJvcHMgfSkgPT4ge1xuICAvLyBHZXQgdHdlZW4gcHJvcGVydGllc1xuICBjb25zdCBhID0gZnJvbTtcbiAgY29uc3QgYiA9IHRvO1xuICBjb25zdCBhQ3VycmVudCA9IGEuZ2V0KCk7XG4gIGNvbnN0IGFEdXJhdGlvbiA9IGEuZ2V0UHJvcCgnZHVyYXRpb24nKTtcbiAgY29uc3QgYkR1cmF0aW9uID0gYi5nZXRQcm9wKCdkdXJhdGlvbicpO1xuICBjb25zdCBhRWFzZSA9IGEuZ2V0UHJvcCgnZWFzZScpO1xuICBjb25zdCBiRWFzZSA9IGIuZ2V0UHJvcCgnZWFzZScpO1xuICBjb25zdCBhRnJvbSA9IGEuZ2V0UHJvcCgnZnJvbScpO1xuICBjb25zdCBiRnJvbSA9IGIuZ2V0UHJvcCgnZnJvbScpO1xuICBjb25zdCBhVG8gPSBhLmdldFByb3AoJ3RvJyk7XG4gIGNvbnN0IGJUbyA9IGIuZ2V0UHJvcCgndG8nKTtcblxuICAvLyBBbmFseXNlIHR3ZWVuc1xuICBjb25zdCBvdmVybGFwRHVyYXRpb24gPSBNYXRoLm1pbihhRHVyYXRpb24gLSBhLmdldEVsYXBzZWQoKSwgYkR1cmF0aW9uKTtcbiAgY29uc3QgYlZhbHVlQXRUd2Vlbk92ZXJsYXBDb21wbGV0ZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIG92ZXJsYXBEdXJhdGlvbiwgYkVhc2UpO1xuICBjb25zdCBiU3RhcnRzSGlnaGVyVGhhbkEgPSAoYkZyb20gPiBhQ3VycmVudCk7XG4gIGNvbnN0IGJFbmRzSGlnaGVyVGhhbkEgPSAoYlZhbHVlQXRUd2Vlbk92ZXJsYXBDb21wbGV0ZSA+IGFUbyk7XG5cbiAgLy8gQmxlbmQgcG9pbnRzIGFyZSBkZWZpbmVkIGFzIFt0ID0gdGltZSwgdiA9IHZhbHVlQXRUaW1lXVxuICAvLyBQMVxuICAvLyBUaGUgc3RhcnQgb2YgdGhlIHR3ZWVuIGJsZW5kXG4gIGNvbnN0IFAxID0gYUN1cnJlbnQ7XG4gIGNvbnN0IGJsZW5kUG9pbnRzID0gW1AxXTtcblxuICAvLyBGaW5kIFAyXG4gIC8vIFRoZSBwb3NzaWJsZSBpbnRlcnNlY3Rpb24gcG9pbnQgYmV0d2VlbiB0aGUgdHdvIHR3ZWVuc1xuICBjb25zdCB0d2VlbnNJbnRlcnNlY3QgPSAoYlN0YXJ0c0hpZ2hlclRoYW5BICE9PSBiRW5kc0hpZ2hlclRoYW5BKTtcbiAgaWYgKHR3ZWVuc0ludGVyc2VjdCkge1xuICAgIGxldCB0aW1lc3RlcCA9IG92ZXJsYXBEdXJhdGlvbiAvIGFjY3VyYWN5O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY2N1cmFjeTsgaSsrKSB7XG4gICAgICBjb25zdCBydW5uaW5nVGltZSA9IGkgKiB0aW1lc3RlcDtcblxuICAgICAgY29uc3QgYVZhbHVlQXRUaW1lID0gY2FsY1ZhbHVlQXRUaW1lKGFGcm9tLCBhVG8sIGFEdXJhdGlvbiwgYS5lbGFwc2VkICsgcnVubmluZ1RpbWUsIGFFYXNlKTtcbiAgICAgIGNvbnN0IGJWYWx1ZUF0VGltZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIGIuZWxhcHNlZCArIHJ1bm5pbmdUaW1lLCBiRWFzZSk7XG5cbiAgICAgIGNvbnN0IGhhc0ludGVyc2VjdGVkID0gKFxuICAgICAgICAoYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA+IGJWYWx1ZUF0VGltZSkgfHxcbiAgICAgICAgKCFiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lIDwgYlZhbHVlQXRUaW1lKVxuICAgICAgKTtcblxuICAgICAgaWYgKGhhc0ludGVyc2VjdGVkKSB7XG4gICAgICAgIGNvbnN0IFAyID0gYlZhbHVlQXRUaW1lO1xuICAgICAgICBibGVuZFBvaW50cy5wdXNoKFAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUDNcbiAgLy8gVGhlIHBvaW50cyB0aGUgdHdvIHR3ZWVucyBzdG9wIG92ZXJsYXBwaW5nXG4gIGNvbnN0IFAzID0gYlZhbHVlQXRUd2Vlbk92ZXJsYXBDb21wbGV0ZTtcbiAgYmxlbmRQb2ludHMucHVzaChQMyk7XG5cbiAgLy8gUHVzaCB0aGUgZW5kIHN0YXRlIG9mIGIgdHdlZW4gYXMgZmluYWwgY29udHJvbCBwb2ludFxuICBjb25zdCBQNCA9IGJUbztcbiAgYmxlbmRQb2ludHMucHVzaChQNCk7XG5cbiAgcmV0dXJuIHR3ZWVuKHtcbiAgICAuLi5wcm9wcyxcbiAgICBkdXJhdGlvbjogYkR1cmF0aW9uLFxuICAgIGVhc2U6IGxpbmVhcixcbiAgICBvblVwZGF0ZTogZmxvdyhcbiAgICAgIGJlemllcihibGVuZFBvaW50cyksXG4gICAgICBvblVwZGF0ZVxuICAgIClcbiAgfSk7XG59O1xuIl19

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
	    var _props = this.props;
	    var i = _props.i;
	    var order = _props.order;
	
	    if (i < order.length - 1) {
	      this.props.i++;
	      this.playCurrent();
	    } else {
	      this.complete();
	    }
	  };
	
	  Chain.prototype.playCurrent = function playCurrent() {
	    var _props2 = this.props;
	    var i = _props2.i;
	    var order = _props2.order;
	
	    order[i].props._onComplete = this.playNext;
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
	
	      var onUpdate = function (v) {
	        return _this2.current[key] = v;
	      };
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qcyJdLCJuYW1lcyI6WyJDb21wb3NpdGVBY3Rpb24iLCJwcm9wcyIsImFjdGlvbnMiLCJyZW1haW5pbmdQcm9wcyIsImN1cnJlbnQiLCJhY3Rpb25LZXlzIiwiYWRkQWN0aW9ucyIsImtleSIsImluZGV4T2YiLCJwdXNoIiwib25VcGRhdGUiLCJ2IiwiZ2V0Iiwic2V0UHJvcHMiLCJfb25TdG9wIiwibnVtQWN0aXZlQWN0aW9ucyIsImFkZExpc3RlbmVyIiwib25TdGFydCIsImxlbmd0aCIsImZvckVhY2giLCJzdGFydCIsIm9uU3RvcCIsInN0b3AiLCJnZXRWZWxvY2l0eSIsInZlbG9jaXR5IiwiaXNBY3Rpb25Db21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGU7OztBQUNKLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsUUFDVEMsT0FEUyxHQUNzQkQsS0FEdEIsQ0FDVEMsT0FEUzs7QUFBQSxRQUNHQyxjQURILDRCQUNzQkYsS0FEdEI7O0FBQUEsaURBRWpCLG1CQUFNRSxjQUFOLENBRmlCOztBQUdqQixVQUFLQyxPQUFMLEdBQWUsRUFBZjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxVQUFLQyxVQUFMLENBQWdCTCxNQUFNQyxPQUF0QjtBQUxpQjtBQU1sQjs7NEJBRURJLFUsdUJBQVdKLE8sRUFBUztBQUFBOztBQUFBLDBCQUNQSyxHQURPO0FBRWhCLFVBQUksT0FBS0YsVUFBTCxDQUFnQkcsT0FBaEIsQ0FBd0JELEdBQXhCLE1BQWlDLENBQUMsQ0FBdEMsRUFBeUM7QUFDdkMsZUFBS0YsVUFBTCxDQUFnQkksSUFBaEIsQ0FBcUJGLEdBQXJCO0FBQ0Q7O0FBRUQsYUFBS0EsR0FBTCxJQUFZTCxRQUFRSyxHQUFSLENBQVo7O0FBRUEsVUFBTUcsV0FBVyxVQUFDQyxDQUFEO0FBQUEsZUFBTyxPQUFLUCxPQUFMLENBQWFHLEdBQWIsSUFBb0JJLENBQTNCO0FBQUEsT0FBakI7O0FBRUE7QUFDQUQsZUFBUyxPQUFLSCxHQUFMLEVBQVVLLEdBQVYsRUFBVDs7QUFFQSxhQUFLTCxHQUFMLEVBQ0dNLFFBREgsQ0FDWTtBQUNSQyxpQkFBUztBQUFBLGlCQUFNLE9BQUtDLGdCQUFMLEVBQU47QUFBQTtBQURELE9BRFosRUFJR0MsV0FKSCxDQUllTixRQUpmO0FBYmdCOztBQUNsQixTQUFLLElBQU1ILEdBQVgsSUFBa0JMLE9BQWxCLEVBQTJCO0FBQUEsWUFBaEJLLEdBQWdCO0FBaUIxQjtBQUNGLEc7OzRCQUVEVSxPLHNCQUFVO0FBQUE7O0FBQ1IsU0FBS0YsZ0JBQUwsR0FBd0IsS0FBS1YsVUFBTCxDQUFnQmEsTUFBeEM7QUFDQSxTQUFLYixVQUFMLENBQWdCYyxPQUFoQixDQUF3QixVQUFDWixHQUFEO0FBQUEsYUFBUyxPQUFLQSxHQUFMLEVBQVVhLEtBQVYsRUFBVDtBQUFBLEtBQXhCO0FBQ0QsRzs7NEJBRURDLE0scUJBQVM7QUFBQTs7QUFDUCxTQUFLaEIsVUFBTCxDQUFnQmMsT0FBaEIsQ0FBd0IsVUFBQ1osR0FBRDtBQUFBLGFBQVMsT0FBS0EsR0FBTCxFQUFVZSxJQUFWLEVBQVQ7QUFBQSxLQUF4QjtBQUNELEc7OzRCQUVEQyxXLDBCQUFjO0FBQUE7O0FBQ1osUUFBTUMsV0FBVyxFQUFqQjtBQUNBLFNBQUtuQixVQUFMLENBQWdCYyxPQUFoQixDQUF3QixVQUFDWixHQUFEO0FBQUEsYUFBU2lCLFNBQVNqQixHQUFULElBQWdCLE9BQUtBLEdBQUwsRUFBVWdCLFdBQVYsRUFBekI7QUFBQSxLQUF4QjtBQUNBLFdBQU9DLFFBQVA7QUFDRCxHOzs0QkFFREMsZ0IsK0JBQW1CO0FBQ2pCLFdBQVEsS0FBS1YsZ0JBQUwsS0FBMEIsQ0FBbEM7QUFDRCxHOzs7OztrQkFHWSxVQUFDYixPQUFELEVBQVVELEtBQVYsRUFBb0I7QUFDakMsU0FBTyxJQUFJRCxlQUFKO0FBQ0xFO0FBREssS0FFRkQsS0FGRSxFQUFQO0FBSUQsQyIsImZpbGUiOiJjb21wb3NpdGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcblxuY2xhc3MgQ29tcG9zaXRlQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBjb25zdCB7IGFjdGlvbnMsIC4uLnJlbWFpbmluZ1Byb3BzIH0gPSBwcm9wcztcbiAgICBzdXBlcihyZW1haW5pbmdQcm9wcyk7XG4gICAgdGhpcy5jdXJyZW50ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzID0gW107XG4gICAgdGhpcy5hZGRBY3Rpb25zKHByb3BzLmFjdGlvbnMpO1xuICB9XG5cbiAgYWRkQWN0aW9ucyhhY3Rpb25zKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYWN0aW9ucykge1xuICAgICAgaWYgKHRoaXMuYWN0aW9uS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uS2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXNba2V5XSA9IGFjdGlvbnNba2V5XTtcblxuICAgICAgY29uc3Qgb25VcGRhdGUgPSAodikgPT4gdGhpcy5jdXJyZW50W2tleV0gPSB2O1xuXG4gICAgICAvLyBJbW1lZGlhdGVseSB1cGRhdGUgd2l0aCB0aGUgY3VycmVudCBhY3Rpb24gc3RhdGVcbiAgICAgIG9uVXBkYXRlKHRoaXNba2V5XS5nZXQoKSk7XG5cbiAgICAgIHRoaXNba2V5XVxuICAgICAgICAuc2V0UHJvcHMoe1xuICAgICAgICAgIF9vblN0b3A6ICgpID0+IHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tXG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRMaXN0ZW5lcihvblVwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSB0aGlzLmFjdGlvbktleXMubGVuZ3RoO1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKChrZXkpID0+IHRoaXNba2V5XS5zdGFydCgpKTtcbiAgfVxuXG4gIG9uU3RvcCgpIHtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaCgoa2V5KSA9PiB0aGlzW2tleV0uc3RvcCgpKTtcbiAgfVxuXG4gIGdldFZlbG9jaXR5KCkge1xuICAgIGNvbnN0IHZlbG9jaXR5ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goKGtleSkgPT4gdmVsb2NpdHlba2V5XSA9IHRoaXNba2V5XS5nZXRWZWxvY2l0eSgpKTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH1cblxuICBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiAodGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoYWN0aW9ucywgcHJvcHMpID0+IHtcbiAgcmV0dXJuIG5ldyBDb21wb3NpdGVBY3Rpb24oe1xuICAgIGFjdGlvbnMsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG59O1xuIl19

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
	
	  CrossFade.prototype.update = function update() {
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
	    var _props = this.props;
	    var autoStopSpeed = _props.autoStopSpeed;
	    var acceleration = _props.acceleration;
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
	  var x = _ref2.x;
	  var y = _ref2.y;
	  var eventToPoints = _ref.eventToPoints;
	  var moveEvent = _ref.moveEvent;
	
	  var props = _objectWithoutProperties(_ref, ['eventToPoints', 'moveEvent']);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BvaW50ZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlUG9pbnRlciIsIngiLCJ5IiwiZXZlbnRUb1BvaW50cyIsIm1vdmVFdmVudCIsInByb3BzIiwicG9pbnRlciIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlUG9pbnRlciIsImUiLCJwb2ludHMiLCJzZXQiLCJzZXRQcm9wcyIsIl9vblN0YXJ0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX29uU3RvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtb3VzZUV2ZW50VG9Qb2ludCIsInBhZ2VYIiwicGFnZVkiLCJ0b3VjaEV2ZW50VG9Qb2ludCIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJnZXROYXRpdmVFdmVudCIsIm9yaWdpbmFsRXZlbnQiLCJuYXRpdmVFdmVudCIsInRvdWNoZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsU0FBU0EsYUFBVCxjQUF5RTtBQUFBLE1BQWhEQyxDQUFnRCxTQUFoREEsQ0FBZ0Q7QUFBQSxNQUE3Q0MsQ0FBNkMsU0FBN0NBLENBQTZDO0FBQUEsTUFBdENDLGFBQXNDLFFBQXRDQSxhQUFzQztBQUFBLE1BQXZCQyxTQUF1QixRQUF2QkEsU0FBdUI7O0FBQUEsTUFBVEMsS0FBUzs7QUFDdkUsTUFBTUMsVUFBVSx5QkFBVTtBQUN4QkwsT0FBRyxxQkFBTUEsQ0FBTixDQURxQjtBQUV4QkMsT0FBRyxxQkFBTUEsQ0FBTjtBQUZxQixHQUFWO0FBSWRLLG9CQUFnQjtBQUpGLEtBS1hGLEtBTFcsRUFBaEI7O0FBUUEsTUFBTUcsZ0JBQWdCLFVBQUNDLENBQUQsRUFBTztBQUMzQixRQUFJSixNQUFNRSxjQUFWLEVBQTBCO0FBQ3hCRSxRQUFFRixjQUFGO0FBQ0Q7O0FBRUQsUUFBTUcsU0FBU1AsY0FBY00sQ0FBZCxDQUFmO0FBQ0FILFlBQVFMLENBQVIsQ0FBVVUsR0FBVixDQUFjRCxPQUFPVCxDQUFyQjtBQUNBSyxZQUFRSixDQUFSLENBQVVTLEdBQVYsQ0FBY0QsT0FBT1IsQ0FBckI7QUFDRCxHQVJEOztBQVVBSSxVQUFRTSxRQUFSLENBQWlCO0FBQ2ZDLGNBQVU7QUFBQSxhQUFNQyxTQUFTQyxlQUFULENBQXlCQyxnQkFBekIsQ0FBMENaLFNBQTFDLEVBQXFESSxhQUFyRCxDQUFOO0FBQUEsS0FESztBQUVmUyxhQUFTO0FBQUEsYUFBTUgsU0FBU0MsZUFBVCxDQUF5QkcsbUJBQXpCLENBQTZDZCxTQUE3QyxFQUF3REksYUFBeEQsQ0FBTjtBQUFBO0FBRk0sR0FBakI7O0FBS0EsU0FBT0YsT0FBUDtBQUNEOztBQUVELElBQU1hLG9CQUFvQixVQUFDVixDQUFEO0FBQUEsU0FBUTtBQUNoQ1IsT0FBR1EsRUFBRVcsS0FEMkI7QUFFaENsQixPQUFHTyxFQUFFWTtBQUYyQixHQUFSO0FBQUEsQ0FBMUI7O0FBS0EsSUFBTUMsb0JBQW9CO0FBQUEsTUFBR0MsY0FBSCxTQUFHQSxjQUFIO0FBQUEsU0FBeUI7QUFDakR0QixPQUFHc0IsZUFBZSxDQUFmLEVBQWtCQyxPQUQ0QjtBQUVqRHRCLE9BQUdxQixlQUFlLENBQWYsRUFBa0JFO0FBRjRCLEdBQXpCO0FBQUEsQ0FBMUI7O0FBS0EsSUFBTUMsaUJBQWlCLFVBQUNqQixDQUFEO0FBQUEsU0FBT0EsRUFBRWtCLGFBQUYsSUFBbUJsQixFQUFFbUIsV0FBckIsSUFBb0NuQixDQUEzQztBQUFBLENBQXZCOztrQkFFZSxVQUFDQSxDQUFELEVBQUlKLEtBQUosRUFBYztBQUMzQixNQUFNdUIsY0FBY0YsZUFBZWpCLENBQWYsQ0FBcEI7QUFDQSxTQUFRbUIsWUFBWUMsT0FBYixHQUNMN0IsY0FBY3NCLGtCQUFrQmIsQ0FBbEIsQ0FBZDtBQUNFTCxlQUFXLFdBRGI7QUFFRUQsbUJBQWVtQjtBQUZqQixLQUdLakIsS0FITCxFQURLLEdBTUxMLGNBQWNtQixrQkFBa0JWLENBQWxCLENBQWQ7QUFDRUwsZUFBVyxXQURiO0FBRUVELG1CQUFlZ0I7QUFGakIsS0FHS2QsS0FITCxFQU5GO0FBV0QsQyIsImZpbGUiOiJwb2ludGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZhbHVlIGZyb20gJy4vdmFsdWUnO1xuaW1wb3J0IGNvbXBvc2l0ZSBmcm9tICcuL2NvbXBvc2l0ZSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvaW50ZXIoeyB4LCB5IH0sIHsgZXZlbnRUb1BvaW50cywgbW92ZUV2ZW50LCAuLi5wcm9wcyB9KSB7XG4gIGNvbnN0IHBvaW50ZXIgPSBjb21wb3NpdGUoe1xuICAgIHg6IHZhbHVlKHgpLFxuICAgIHk6IHZhbHVlKHkpXG4gIH0sIHtcbiAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZSxcbiAgICAuLi5wcm9wc1xuICB9KTtcblxuICBjb25zdCB1cGRhdGVQb2ludGVyID0gKGUpID0+IHtcbiAgICBpZiAocHJvcHMucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludHMgPSBldmVudFRvUG9pbnRzKGUpO1xuICAgIHBvaW50ZXIueC5zZXQocG9pbnRzLngpO1xuICAgIHBvaW50ZXIueS5zZXQocG9pbnRzLnkpO1xuICB9O1xuXG4gIHBvaW50ZXIuc2V0UHJvcHMoe1xuICAgIF9vblN0YXJ0OiAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpLFxuICAgIF9vblN0b3A6ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlcilcbiAgfSk7XG5cbiAgcmV0dXJuIHBvaW50ZXI7XG59XG5cbmNvbnN0IG1vdXNlRXZlbnRUb1BvaW50ID0gKGUpID0+ICh7XG4gIHg6IGUucGFnZVgsXG4gIHk6IGUucGFnZVlcbn0pO1xuXG5jb25zdCB0b3VjaEV2ZW50VG9Qb2ludCA9ICh7IGNoYW5nZWRUb3VjaGVzIH0pID0+ICh7XG4gIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbn0pO1xuXG5jb25zdCBnZXROYXRpdmVFdmVudCA9IChlKSA9PiBlLm9yaWdpbmFsRXZlbnQgfHwgZS5uYXRpdmVFdmVudCB8fCBlO1xuXG5leHBvcnQgZGVmYXVsdCAoZSwgcHJvcHMpID0+IHtcbiAgY29uc3QgbmF0aXZlRXZlbnQgPSBnZXROYXRpdmVFdmVudChlKTtcbiAgcmV0dXJuIChuYXRpdmVFdmVudC50b3VjaGVzKSA/XG4gICAgY3JlYXRlUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwge1xuICAgICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICAgIGV2ZW50VG9Qb2ludHM6IHRvdWNoRXZlbnRUb1BvaW50LFxuICAgICAgLi4ucHJvcHNcbiAgICB9KSA6XG4gICAgY3JlYXRlUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwge1xuICAgICAgbW92ZUV2ZW50OiAnbW91c2Vtb3ZlJyxcbiAgICAgIGV2ZW50VG9Qb2ludHM6IG1vdXNlRXZlbnRUb1BvaW50LFxuICAgICAgLi4ucHJvcHNcbiAgICB9KTtcbn07XG4iXX0=

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
	    var _props = this.props;
	    var duration = _props.duration;
	    var playDirection = _props.playDirection;
	
	
	    this.elapsed = playDirection === 1 ? 0 : duration;
	    this.progress = 0;
	  };
	
	  Tween.prototype.update = function update() {
	    var _props2 = this.props;
	    var duration = _props2.duration;
	    var ease = _props2.ease;
	    var from = _props2.from;
	    var to = _props2.to;
	    var playDirection = _props2.playDirection;
	
	
	    this.elapsed += (0, _framesync.timeSinceLastFrame)() * playDirection;
	    this.progress = clampProgress((0, _calc.getProgressFromValue)(0, duration, this.elapsed));
	
	    return (0, _calc.getValueFromProgress)(from, to, ease(this.progress));
	  };
	
	  Tween.prototype.isActionComplete = function isActionComplete() {
	    var _props3 = this.props;
	    var duration = _props3.duration;
	    var playDirection = _props3.playDirection;
	    var yoyo = _props3.yoyo;
	    var loop = _props3.loop;
	    var flip = _props3.flip;
	
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
	    var from = args[0];
	    var to = args[1];
	    var duration = args[2];
	    var ease = args[3];
	    var _props4 = args[4];
	
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
	  // lawsuit - sorry
	  function Action(props) {
	    _classCallCheck(this, Action);
	
	    this.scheduledUpdate = this.scheduledUpdate.bind(this);
	
	    this.props = _extends({}, this.constructor.defaultProps);
	
	    this.setProps(props);
	
	    this.current = props.current || props.from || 0;
	  }
	
	  Action.prototype.start = function start() {
	    var _props = this.props;
	    var onStart = _props.onStart;
	    var _onStart = _props._onStart;
	    var passive = _props.passive;
	
	
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
	    var _props2 = this.props;
	    var onStop = _props2.onStop;
	    var _onStop = _props2._onStop;
	    var passive = _props2.passive;
	
	
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
	    var _props3 = this.props;
	    var onComplete = _props3.onComplete;
	    var _onComplete = _props3._onComplete;
	
	
	    this.stop();
	
	    if (this.onComplete) this.onComplete();
	    if (onComplete) onComplete(this);
	    if (_onComplete) _onComplete(this);
	
	    return this;
	  };
	
	  Action.prototype.scheduledUpdate = function scheduledUpdate() {
	    this.lastUpdated = (0, _framesync.timeSinceLastFrame)();
	    this.prev = this.current;
	
	    var _props4 = this.props;
	    var onUpdate = _props4.onUpdate;
	    var passive = _props4.passive;
	
	
	    if (this.update) {
	      this.current = this.update(this.current);
	    }
	
	    if (onUpdate) onUpdate(this.get(), this);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFjdGlvbiIsInByb3BzIiwic2NoZWR1bGVkVXBkYXRlIiwiYmluZCIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdFByb3BzIiwic2V0UHJvcHMiLCJjdXJyZW50IiwiZnJvbSIsInN0YXJ0Iiwib25TdGFydCIsIl9vblN0YXJ0IiwicGFzc2l2ZSIsIl9pc0FjdGl2ZSIsInN0b3AiLCJvblN0b3AiLCJfb25TdG9wIiwiY29tcGxldGUiLCJvbkNvbXBsZXRlIiwiX29uQ29tcGxldGUiLCJsYXN0VXBkYXRlZCIsInByZXYiLCJvblVwZGF0ZSIsInVwZGF0ZSIsImdldCIsImZpcmVMaXN0ZW5lcnMiLCJpc0FjdGlvbkNvbXBsZXRlIiwib3V0cHV0IiwiZnVuYyIsInRyYW5zZm9ybSIsImdldEJlZm9yZVRyYW5zZm9ybSIsInNldCIsInYiLCJnZXRQcm9wIiwia2V5IiwiZ2V0VmVsb2NpdHkiLCJpc0FjdGl2ZSIsImFkZExpc3RlbmVyIiwibGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJudW1MaXN0ZW5lcnMiLCJpbmRleE9mIiwicHVzaCIsInJlbW92ZUxpc3RlbmVyIiwibGlzdGVuZXJJbmRleCIsInNwbGljZSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0lBRU1BLE07QUFBUztBQUNiLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtDLGVBQUwsR0FBdUIsS0FBS0EsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkI7O0FBRUEsU0FBS0YsS0FBTCxnQkFDSyxLQUFLRyxXQUFMLENBQWlCQyxZQUR0Qjs7QUFJQSxTQUFLQyxRQUFMLENBQWNMLEtBQWQ7O0FBRUEsU0FBS00sT0FBTCxHQUFlTixNQUFNTSxPQUFOLElBQWlCTixNQUFNTyxJQUF2QixJQUErQixDQUE5QztBQUNEOzttQkFFREMsSyxvQkFBUTtBQUFBLGlCQUNpQyxLQUFLUixLQUR0QztBQUFBLFFB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M0I7QUFDRDtBQUNELFdBQU8sSUFBUDtBQUNELEc7Ozs7O2tCQUdZUCxNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb25GcmFtZVVwZGF0ZSwgY2FuY2VsT25GcmFtZVVwZGF0ZSwgdGltZVNpbmNlTGFzdEZyYW1lIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcbmltcG9ydCB7IHNwZWVkUGVyU2Vjb25kIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jbGFzcyBBY3Rpb24geyAvLyBsYXdzdWl0IC0gc29ycnlcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnNjaGVkdWxlZFVwZGF0ZSA9IHRoaXMuc2NoZWR1bGVkVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnByb3BzID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHNcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRQcm9wcyhwcm9wcyk7XG5cbiAgICB0aGlzLmN1cnJlbnQgPSBwcm9wcy5jdXJyZW50IHx8IHByb3BzLmZyb20gfHwgMDtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGNvbnN0IHsgb25TdGFydCwgX29uU3RhcnQsIHBhc3NpdmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICAgIG9uRnJhbWVVcGRhdGUodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RhcnQpIHRoaXMub25TdGFydCgpO1xuICAgIGlmIChvblN0YXJ0KSBvblN0YXJ0KHRoaXMpO1xuICAgIGlmIChfb25TdGFydCkgX29uU3RhcnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgY29uc3QgeyBvblN0b3AsIF9vblN0b3AsIHBhc3NpdmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICBjYW5jZWxPbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0b3ApIHRoaXMub25TdG9wKCk7XG4gICAgaWYgKG9uU3RvcCkgb25TdG9wKHRoaXMpO1xuICAgIGlmIChfb25TdG9wKSBfb25TdG9wKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICBjb25zdCB7IG9uQ29tcGxldGUsIF9vbkNvbXBsZXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5zdG9wKCk7XG5cbiAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSh0aGlzKTtcbiAgICBpZiAoX29uQ29tcGxldGUpIF9vbkNvbXBsZXRlKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzY2hlZHVsZWRVcGRhdGUoKSB7XG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9IHRpbWVTaW5jZUxhc3RGcmFtZSgpO1xuICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudDtcblxuICAgIGNvbnN0IHsgb25VcGRhdGUsIHBhc3NpdmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodGhpcy51cGRhdGUpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMudXBkYXRlKHRoaXMuY3VycmVudCk7XG4gICAgfVxuXG4gICAgaWYgKG9uVXBkYXRlKSBvblVwZGF0ZSh0aGlzLmdldCgpLCB0aGlzKTtcbiAgICB0aGlzLmZpcmVMaXN0ZW5lcnMoKTtcblxuICAgIGlmICghcGFzc2l2ZSAmJiB0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgb25GcmFtZVVwZGF0ZSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiB0aGlzLmlzQWN0aW9uQ29tcGxldGUoKSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0UHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0ge1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG91dHB1dChmdW5jKSB7XG4gICAgdGhpcy5wcm9wcy5vblVwZGF0ZSA9IGZ1bmM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgY29uc3QgeyB0cmFuc2Zvcm0gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIHRyYW5zZm9ybSA/IHRyYW5zZm9ybSh0aGlzLmN1cnJlbnQpIDogdGhpcy5jdXJyZW50O1xuICB9XG5cbiAgZ2V0QmVmb3JlVHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH1cblxuICBzZXQodikge1xuICAgIHRoaXMuY3VycmVudCA9IHY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRQcm9wKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzW2tleV07XG4gIH1cblxuICBnZXRWZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gc3BlZWRQZXJTZWNvbmQodGhpcy5jdXJyZW50IC0gdGhpcy5wcmV2LCB0aGlzLmxhc3RVcGRhdGVkKTtcbiAgfVxuXG4gIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgfVxuXG4gIGFkZExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycyB8fCBbXTtcbiAgICB0aGlzLm51bUxpc3RlbmVycyA9IHRoaXMubnVtTGlzdGVuZXJzIHx8IDA7XG4gICAgaWYgKHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpID09PSAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycysrO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgY29uc3QgbGlzdGVuZXJJbmRleCA9ICh0aGlzLmxpc3RlbmVycykgPyB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA6IC0xO1xuICAgIGlmIChsaXN0ZW5lckluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMtLTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmaXJlTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1MaXN0ZW5lcnM7IGkrKykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbaV0oY3VycmVudCwgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbjtcbiJdfQ==

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
	      var _key2 = args[0];
	      var value = args[1];
	
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
	    var forceRender = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
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
	    var _props = this.props;
	    var element = _props.element;
	    var enableHardwareAcceleration = _props.enableHardwareAcceleration;
	
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
	
	    var _props$element$getBBo = props.element.getBBox();
	
	    var x = _props$element$getBBo.x;
	    var y = _props$element$getBBo.y;
	    var width = _props$element$getBBo.width;
	    var height = _props$element$getBBo.height;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzIl0sIm5hbWVzIjpbImVsZW1lbnQiLCJwcm9wcyIsIlNWR1JlbmRlcmVyIiwiZ2V0QkJveCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJlbGVtZW50RGltZW5zaW9ucyIsIm9uUmVuZGVyIiwiYXR0cnMiLCJzdGF0ZSIsIm9uUmVhZCIsImtleSIsImdldEF0dHJpYnV0ZSIsInZhbHVlVHlwZSIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFnQ2UsVUFBVUEsT0FBVixFQUFtQkMsS0FBbkIsRUFBMEI7QUFDdkMsU0FBTyxJQUFJQyxXQUFKO0FBQ0xGO0FBREssS0FFRkMsS0FGRSxFQUFQO0FBSUQsQzs7QUFyQ0Q7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQyxXOzs7QUFDSix1QkFBWUQsS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixxQkFBTUEsS0FBTixDQURpQjs7QUFBQSxnQ0FHZUEsTUFBTUQsT0FBTixDQUFjRyxPQUFkLEVBSGY7O0FBQUEsUUFHVEMsQ0FIUyx5QkFHVEEsQ0FIUztBQUFBLFFBR05DLENBSE0seUJBR05BLENBSE07QUFBQSxRQUdIQyxLQUhHLHlCQUdIQSxLQUhHO0FBQUEsUUFHSUMsTUFISix5QkFHSUEsTUFISjs7QUFJakIsVUFBS0MsaUJBQUwsR0FBeUIsRUFBRUosSUFBRixFQUFLQyxJQUFMLEVBQVFDLFlBQVIsRUFBZUMsY0FBZixFQUF6QjtBQUppQjtBQUtsQjs7d0JBRURFLFEsdUJBQVc7QUFBQSxRQUNEVCxPQURDLEdBQ1csS0FBS0MsS0FEaEIsQ0FDREQsT0FEQzs7QUFFVCxRQUFNVSxRQUFRLHFCQUFNLEtBQUtDLEtBQVgsRUFBa0IsS0FBS0gsaUJBQXZCLENBQWQ7QUFDQSw0QkFBWVIsT0FBWixFQUFxQlUsS0FBckI7QUFDRCxHOzt3QkFFREUsTSxtQkFBT0MsRyxFQUFLO0FBQUEsUUFDRmIsT0FERSxHQUNVLEtBQUtDLEtBRGYsQ0FDRkQsT0FERTs7O0FBR1YsUUFBSSxDQUFDLHlCQUFlYSxHQUFmLENBQUwsRUFBMEI7QUFDeEIsYUFBT2IsUUFBUWMsWUFBUixDQUFxQkQsR0FBckIsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLFVBQU1FLFlBQVkscUJBQWFGLEdBQWIsQ0FBbEI7QUFDQSxhQUFRRSxTQUFELEdBQWNBLFVBQVVDLE9BQXhCLEdBQWtDLENBQXpDO0FBQ0Q7QUFDRixHIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4uLyc7XG5pbXBvcnQgYnVpbGQgZnJvbSAnLi9idWlsZCc7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcyc7XG5pbXBvcnQgdmFsdWVUeXBlTWFwIGZyb20gJy4vdmFsdWUtdHlwZXMnO1xuaW1wb3J0IHsgc2V0RE9NQXR0cnMgfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuXG5jbGFzcyBTVkdSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IHByb3BzLmVsZW1lbnQuZ2V0QkJveCgpO1xuICAgIHRoaXMuZWxlbWVudERpbWVuc2lvbnMgPSB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfTtcbiAgfVxuXG4gIG9uUmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhdHRycyA9IGJ1aWxkKHRoaXMuc3RhdGUsIHRoaXMuZWxlbWVudERpbWVuc2lvbnMpO1xuICAgIHNldERPTUF0dHJzKGVsZW1lbnQsIGF0dHJzKTtcbiAgfVxuXG4gIG9uUmVhZChrZXkpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZVR5cGVNYXBba2V5XTtcbiAgICAgIHJldHVybiAodmFsdWVUeXBlKSA/IHZhbHVlVHlwZS5kZWZhdWx0IDogMDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgU1ZHUmVuZGVyZXIoe1xuICAgIGVsZW1lbnQsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG59XG4iXX0=

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
	
	    var _props$element$getBBo = props.element.getBBox();
	
	    var x = _props$element$getBBo.x;
	    var y = _props$element$getBBo.y;
	    var width = _props$element$getBBo.width;
	    var height = _props$element$getBBo.height;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanMiXSwibmFtZXMiOlsiZWxlbWVudCIsInByb3BzIiwiU1ZHUGF0aFJlbmRlcmVyIiwiZ2V0QkJveCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJlbGVtZW50RGltZW5zaW9ucyIsInBhdGhMZW5ndGgiLCJnZXRUb3RhbExlbmd0aCIsIm9uUmVuZGVyIiwic3RhdGUiLCJvblJlYWQiLCJrZXkiLCJnZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkE2QmUsVUFBVUEsT0FBVixFQUFtQkMsS0FBbkIsRUFBMEI7QUFDdkMsU0FBTyxJQUFJQyxlQUFKO0FBQ0xGO0FBREssS0FFRkMsS0FGRSxFQUFQO0FBSUQsQzs7QUFsQ0Q7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1DLGU7OztBQUNKLDJCQUFZRCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLHFCQUFNQSxLQUFOLENBRGlCOztBQUFBLGdDQUdlQSxNQUFNRCxPQUFOLENBQWNHLE9BQWQsRUFIZjs7QUFBQSxRQUdUQyxDQUhTLHlCQUdUQSxDQUhTO0FBQUEsUUFHTkMsQ0FITSx5QkFHTkEsQ0FITTtBQUFBLFFBR0hDLEtBSEcseUJBR0hBLEtBSEc7QUFBQSxRQUdJQyxNQUhKLHlCQUdJQSxNQUhKOztBQUlqQixVQUFLQyxpQkFBTCxHQUF5QjtBQUN2QkosVUFEdUI7QUFFdkJDLFVBRnVCO0FBR3ZCQyxrQkFIdUI7QUFJdkJDLG9CQUp1QjtBQUt2QkUsa0JBQVlSLE1BQU1ELE9BQU4sQ0FBY1UsY0FBZDtBQUxXLEtBQXpCO0FBSmlCO0FBV2xCOzs0QkFFREMsUSx1QkFBVztBQUFBLFFBQ0RGLFVBREMsR0FDYyxLQUFLRCxpQkFEbkIsQ0FDREMsVUFEQztBQUFBLFFBRURULE9BRkMsR0FFVyxLQUFLQyxLQUZoQixDQUVERCxPQUZDOztBQUdULDRCQUFZQSxPQUFaLEVBQXFCLHFCQUFNLEtBQUtZLEtBQVgsRUFBa0JILFVBQWxCLENBQXJCO0FBQ0QsRzs7NEJBRURJLE0sbUJBQU9DLEcsRUFBSztBQUNWLFdBQU8sS0FBS2IsS0FBTCxDQUFXRCxPQUFYLENBQW1CZSxZQUFuQixDQUFnQ0QsR0FBaEMsQ0FBUDtBQUNELEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi4vJztcbmltcG9ydCBidWlsZCBmcm9tICcuL2J1aWxkJztcbmltcG9ydCB7IHNldERPTUF0dHJzIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuY2xhc3MgU1ZHUGF0aFJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gcHJvcHMuZWxlbWVudC5nZXRCQm94KCk7XG4gICAgdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYXRoTGVuZ3RoOiBwcm9wcy5lbGVtZW50LmdldFRvdGFsTGVuZ3RoKClcbiAgICB9O1xuICB9XG5cbiAgb25SZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYXRoTGVuZ3RoIH0gPSB0aGlzLmVsZW1lbnREaW1lbnNpb25zO1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBzZXRET01BdHRycyhlbGVtZW50LCBidWlsZCh0aGlzLnN0YXRlLCBwYXRoTGVuZ3RoKSk7XG4gIH1cblxuICBvblJlYWQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBTVkdQYXRoUmVuZGVyZXIoe1xuICAgIGVsZW1lbnQsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG59XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib3V0bGluZUNvbG9yIiwiZmlsbCIsInN0cm9rZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyVG9wQ29sb3IiLCJib3JkZXJSaWdodENvbG9yIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJib3JkZXJMZWZ0Q29sb3IiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsInJvdGF0ZSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsInNjYWxlIiwic2NhbGVYIiwic2NhbGVZIiwic2NhbGVaIiwic2tld1giLCJza2V3WSIsImRpc3RhbmNlIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJ0cmFuc2xhdGVaIiwicGVyc3BlY3RpdmUiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O2tCQUNlO0FBQ2I7QUFDQUEsMEJBRmE7QUFHYkMsb0NBSGE7QUFJYkMsaUNBSmE7QUFLYkMseUJBTGE7QUFNYkMsMkJBTmE7O0FBUWI7QUFDQUMsZ0NBVGE7QUFVYkMsbUNBVmE7QUFXYkMscUNBWGE7QUFZYkMsc0NBWmE7QUFhYkMsb0NBYmE7QUFjYkMsOEJBZGE7O0FBZ0JiO0FBQ0FDLHVCQWpCYTtBQWtCYkMsd0JBbEJhO0FBbUJiQyxxQkFuQmE7QUFvQmJDLHNCQXBCYTtBQXFCYkMsd0JBckJhO0FBc0JiQyx1QkF0QmE7O0FBd0JiO0FBQ0FDLDZCQXpCYTtBQTBCYkMsOEJBMUJhO0FBMkJiQyw4QkEzQmE7QUE0QmJDLDhCQTVCYTtBQTZCYkMsMEJBN0JhO0FBOEJiQywyQkE5QmE7QUErQmJDLDJCQS9CYTtBQWdDYkMsMkJBaENhO0FBaUNiQyw0QkFqQ2E7QUFrQ2JDLDRCQWxDYTtBQW1DYkMsMEJBbkNhO0FBb0NiQyw0QkFwQ2E7QUFxQ2JDLDRCQXJDYTtBQXNDYkMsNEJBdENhO0FBdUNiQyw2QkF2Q2E7QUF3Q2JDO0FBeENhLEMiLCJmaWxlIjoidmFsdWUtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbHBoYSwgY29sb3IsIGRlZ3JlZXMsIHNjYWxlLCBweCB9IGZyb20gJy4uLy4uL2luYy92YWx1ZS10eXBlcyc7IFxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBDb2xvciBwcm9wc1xuICBjb2xvcjogY29sb3IsXG4gIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gIG91dGxpbmVDb2xvcjogY29sb3IsXG4gIGZpbGw6IGNvbG9yLFxuICBzdHJva2U6IGNvbG9yLFxuXG4gIC8vIEJvcmRlciBwcm9wc1xuICBib3JkZXJDb2xvcjogY29sb3IsXG4gIGJvcmRlclRvcENvbG9yOiBjb2xvcixcbiAgYm9yZGVyUmlnaHRDb2xvcjogY29sb3IsXG4gIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvcixcbiAgYm9yZGVyTGVmdENvbG9yOiBjb2xvcixcbiAgYm9yZGVyUmFkaXVzOiBweCxcblxuICAvLyBQb3NpdGlvbmluZ1xuICB3aWR0aDogcHgsXG4gIGhlaWdodDogcHgsICBcbiAgdG9wOiBweCxcbiAgbGVmdDogcHgsXG4gIGJvdHRvbTogcHgsXG4gIHJpZ2h0OiBweCxcblxuICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICByb3RhdGU6IGRlZ3JlZXMsXG4gIHJvdGF0ZVg6IGRlZ3JlZXMsXG4gIHJvdGF0ZVk6IGRlZ3JlZXMsXG4gIHJvdGF0ZVo6IGRlZ3JlZXMsXG4gIHNjYWxlOiBzY2FsZSxcbiAgc2NhbGVYOiBzY2FsZSxcbiAgc2NhbGVZOiBzY2FsZSxcbiAgc2NhbGVaOiBzY2FsZSxcbiAgc2tld1g6IGRlZ3JlZXMsXG4gIHNrZXdZOiBkZWdyZWVzLFxuICBkaXN0YW5jZTogcHgsXG4gIHRyYW5zbGF0ZVg6IHB4LFxuICB0cmFuc2xhdGVZOiBweCxcbiAgdHJhbnNsYXRlWjogcHgsXG4gIHBlcnNwZWN0aXZlOiBweCxcbiAgb3BhY2l0eTogYWxwaGFcbn07XG4iXX0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjIwOGFiYTA3ZGE0N2Q2Y2Y1ODkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb2xvci10d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wYXJhbGxlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvc3RhZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvcGFyc2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL29uLW5leHQtZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9jcmVhdGUtcmVuZGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy92YWx1ZS10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy9wcmVmaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7O0FDdENBOztBQUVBOztBQUVBOztBQUVBLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUTtBQUNBLDRDQUEyQyxtWjs7Ozs7O0FDVDNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxtMEY7Ozs7OztBQ3ZMM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLHV5Vjs7Ozs7O0FDak4zQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLG1wSjs7Ozs7O0FDakUzQzs7QUFFQTtBQUNBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVksT0FBTztBQUNuQixhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxPQUFPO0FBQ25CLGFBQVksT0FBTztBQUNuQixhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFZLE9BQU87QUFDbkIsYUFBWSxPQUFPO0FBQ25CLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWSxhQUFhO0FBQ3pCLGFBQVk7QUFDWjtBQUNBO0FBQ0EsMEVBQXlFLGFBQWE7QUFDdEY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkZBQTBGLGVBQWU7QUFDekc7QUFDQTs7QUFFQTtBQUNBLGdCQUFlLHFCQUFxQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBWSxNQUFNO0FBQ2xCLGFBQVksTUFBTTtBQUNsQixhQUFZLFNBQVM7QUFDckIsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxXQUFVLGlCQUFpQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLHUrRjs7Ozs7O0FDMUMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLCtzRjs7Ozs7O0FDOUMzQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLG0vSjs7Ozs7O0FDekQzQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsKzVCIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMjIwOGFiYTA3ZGE0N2Q2Y2Y1ODlcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi9wb3Btb3Rpb24nKTtcblxudmFyIHBvcG1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wb3Btb3Rpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG53aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTluYkc5aVlXd3Vhbk1pWFN3aWJtRnRaWE1pT2xzaWNHOXdiVzkwYVc5dUlpd2lkMmx1Wkc5M0lsMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJPenRKUVVGWlFTeFRPenM3TzBGQlExcERMRTlCUVU5RUxGTkJRVkFzUjBGQmJVSkJMRk5CUVc1Q0lpd2labWxzWlNJNkltZHNiMkpoYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0FxSUdGeklIQnZjRzF2ZEdsdmJpQm1jbTl0SUNjdUwzQnZjRzF2ZEdsdmJpYzdYRzUzYVc1a2IzY3VjRzl3Ylc5MGFXOXVJRDBnY0c5d2JXOTBhVzl1TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3ZnUGF0aCA9IGV4cG9ydHMuc3ZnID0gZXhwb3J0cy5jc3MgPSBleHBvcnRzLlJlbmRlcmVyID0gZXhwb3J0cy52YWx1ZSA9IGV4cG9ydHMuc3RhZ2dlciA9IGV4cG9ydHMudHdlZW4gPSBleHBvcnRzLnBvaW50ZXIgPSBleHBvcnRzLnBoeXNpY3MgPSBleHBvcnRzLnBhcmFsbGVsID0gZXhwb3J0cy5kZWxheSA9IGV4cG9ydHMuY3Jvc3NGYWRlID0gZXhwb3J0cy5jb21wb3NpdGUgPSBleHBvcnRzLmNvbG9yVHdlZW4gPSBleHBvcnRzLmNoYWluID0gZXhwb3J0cy5ibGVuZFR3ZWVucyA9IGV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy52YWx1ZVR5cGVzID0gZXhwb3J0cy50cmFuc2Zvcm0gPSBleHBvcnRzLmVhc2luZyA9IGV4cG9ydHMuY2FsYyA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4vZnJhbWVzeW5jJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVN0YXJ0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lU3RhcnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lVXBkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVJlbmRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVJlbmRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVFbmQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVFbmQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lU3RhcnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVTdGFydDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVVcGRhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVVcGRhdGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lUmVuZGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lUmVuZGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZUVuZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZUVuZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3RpbWVTaW5jZUxhc3RGcmFtZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3VycmVudEZyYW1lVGltZXN0YW1wJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jdXJyZW50RnJhbWVUaW1lc3RhbXA7XG4gIH1cbn0pO1xuXG52YXIgX2NhbGMyID0gcmVxdWlyZSgnLi9pbmMvY2FsYycpO1xuXG52YXIgX2NhbGMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY2FsYzIpO1xuXG52YXIgX2Vhc2luZzIgPSByZXF1aXJlKCcuL2luYy9lYXNpbmcnKTtcblxudmFyIF9lYXNpbmcgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfZWFzaW5nMik7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdHJhbnNmb3JtID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3RyYW5zZm9ybWVycyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSByZXF1aXJlKCcuL2luYy92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdmFsdWVUeXBlczIpO1xuXG52YXIgX2FjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMnKTtcblxudmFyIF9hY3Rpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FjdGlvbnMpO1xuXG52YXIgX2JsZW5kVHdlZW5zMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9ibGVuZC10d2VlbnMnKTtcblxudmFyIF9ibGVuZFR3ZWVuczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ibGVuZFR3ZWVuczIpO1xuXG52YXIgX2NoYWluMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jaGFpbicpO1xuXG52YXIgX2NoYWluMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoYWluMik7XG5cbnZhciBfY29sb3JUd2VlbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY29sb3ItdHdlZW4nKTtcblxudmFyIF9jb2xvclR3ZWVuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yVHdlZW4yKTtcblxudmFyIF9jb21wb3NpdGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NvbXBvc2l0ZScpO1xuXG52YXIgX2NvbXBvc2l0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGUyKTtcblxudmFyIF9jcm9zc0ZhZGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Nyb3NzLWZhZGUnKTtcblxudmFyIF9jcm9zc0ZhZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3Jvc3NGYWRlMik7XG5cbnZhciBfZGVsYXkyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2RlbGF5Jyk7XG5cbnZhciBfZGVsYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVsYXkyKTtcblxudmFyIF9wYXJhbGxlbDIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcGFyYWxsZWwnKTtcblxudmFyIF9wYXJhbGxlbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJhbGxlbDIpO1xuXG52YXIgX3BoeXNpY3MyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BoeXNpY3MnKTtcblxudmFyIF9waHlzaWNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BoeXNpY3MyKTtcblxudmFyIF9wb2ludGVyMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9wb2ludGVyJyk7XG5cbnZhciBfcG9pbnRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb2ludGVyMik7XG5cbnZhciBfdHdlZW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4yKTtcblxudmFyIF9zdGFnZ2VyMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9zdGFnZ2VyJyk7XG5cbnZhciBfc3RhZ2dlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGFnZ2VyMik7XG5cbnZhciBfdmFsdWUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3ZhbHVlJyk7XG5cbnZhciBfdmFsdWUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWUyKTtcblxudmFyIF9yZW5kZXJlcnMgPSByZXF1aXJlKCcuL3JlbmRlcmVycycpO1xuXG52YXIgX3JlbmRlcmVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW5kZXJlcnMpO1xuXG52YXIgX2NzczIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9jc3MnKTtcblxudmFyIF9jc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzMik7XG5cbnZhciBfc3ZnMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL3N2ZycpO1xuXG52YXIgX3N2ZzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmcyKTtcblxudmFyIF9zdmdQYXRoMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL3N2Zy1wYXRoJyk7XG5cbnZhciBfc3ZnUGF0aDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmV4cG9ydHMuY2FsYyA9IF9jYWxjO1xuZXhwb3J0cy5lYXNpbmcgPSBfZWFzaW5nO1xuZXhwb3J0cy50cmFuc2Zvcm0gPSBfdHJhbnNmb3JtO1xuZXhwb3J0cy52YWx1ZVR5cGVzID0gX3ZhbHVlVHlwZXM7XG5cbi8vIEFjdGlvbnNcblxuZXhwb3J0cy5BY3Rpb24gPSBfYWN0aW9uczIuZGVmYXVsdDtcbmV4cG9ydHMuYmxlbmRUd2VlbnMgPSBfYmxlbmRUd2VlbnMzLmRlZmF1bHQ7XG5leHBvcnRzLmNoYWluID0gX2NoYWluMy5kZWZhdWx0O1xuZXhwb3J0cy5jb2xvclR3ZWVuID0gX2NvbG9yVHdlZW4zLmRlZmF1bHQ7XG5leHBvcnRzLmNvbXBvc2l0ZSA9IF9jb21wb3NpdGUzLmRlZmF1bHQ7XG5leHBvcnRzLmNyb3NzRmFkZSA9IF9jcm9zc0ZhZGUzLmRlZmF1bHQ7XG5leHBvcnRzLmRlbGF5ID0gX2RlbGF5My5kZWZhdWx0O1xuZXhwb3J0cy5wYXJhbGxlbCA9IF9wYXJhbGxlbDMuZGVmYXVsdDtcbmV4cG9ydHMucGh5c2ljcyA9IF9waHlzaWNzMy5kZWZhdWx0O1xuZXhwb3J0cy5wb2ludGVyID0gX3BvaW50ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnR3ZWVuID0gX3R3ZWVuMy5kZWZhdWx0O1xuZXhwb3J0cy5zdGFnZ2VyID0gX3N0YWdnZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnZhbHVlID0gX3ZhbHVlMy5kZWZhdWx0O1xuXG4vLyBSZW5kZXJlcnNcblxuZXhwb3J0cy5SZW5kZXJlciA9IF9yZW5kZXJlcnMyLmRlZmF1bHQ7XG5leHBvcnRzLmNzcyA9IF9jc3MzLmRlZmF1bHQ7XG5leHBvcnRzLnN2ZyA9IF9zdmczLmRlZmF1bHQ7XG5leHBvcnRzLnN2Z1BhdGggPSBfc3ZnUGF0aDMuZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2IzQnRiM1JwYjI0dWFuTWlYU3dpYm1GdFpYTWlPbHNpYjI1R2NtRnRaVk4wWVhKMElpd2liMjVHY21GdFpWVndaR0YwWlNJc0ltOXVSbkpoYldWU1pXNWtaWElpTENKdmJrWnlZVzFsUlc1a0lpd2lZMkZ1WTJWc1QyNUdjbUZ0WlZOMFlYSjBJaXdpWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlNJc0ltTmhibU5sYkU5dVJuSmhiV1ZTWlc1a1pYSWlMQ0pqWVc1alpXeFBia1p5WVcxbFJXNWtJaXdpZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsSWl3aVkzVnljbVZ1ZEVaeVlXMWxWR2x0WlhOMFlXMXdJaXdpWTJGc1l5SXNJbVZoYzJsdVp5SXNJblJ5WVc1elptOXliU0lzSW5aaGJIVmxWSGx3WlhNaUxDSkJZM1JwYjI0aUxDSmliR1Z1WkZSM1pXVnVjeUlzSW1Ob1lXbHVJaXdpWTI5c2IzSlVkMlZsYmlJc0ltTnZiWEJ2YzJsMFpTSXNJbU55YjNOelJtRmtaU0lzSW1SbGJHRjVJaXdpY0dGeVlXeHNaV3dpTENKd2FIbHphV056SWl3aWNHOXBiblJsY2lJc0luUjNaV1Z1SWl3aWMzUmhaMmRsY2lJc0luWmhiSFZsSWl3aVVtVnVaR1Z5WlhJaUxDSmpjM01pTENKemRtY2lMQ0p6ZG1kUVlYUm9JbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN08zTkNRVVZGUVN4Wk96czdPenM3YzBKQlEwRkRMR0U3T3pzN096dHpRa0ZEUVVNc1lUczdPenM3TzNOQ1FVTkJReXhWT3pzN096czdjMEpCUTBGRExHdENPenM3T3pzN2MwSkJRMEZETEcxQ096czdPenM3YzBKQlEwRkRMRzFDT3pzN096czdjMEpCUTBGRExHZENPenM3T3pzN2MwSkJRMEZETEd0Q096czdPenM3YzBKQlEwRkRMSEZDT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0UlFVZFZReXhKTzFGQlEwRkRMRTA3VVVGRFFVTXNVenRSUVVOQlF5eFZPenRCUVVWYU96dFJRVU5QUXl4Tk8xRkJRMEZETEZjN1VVRkRRVU1zU3p0UlFVTkJReXhWTzFGQlEwRkRMRk03VVVGRFFVTXNVenRSUVVOQlF5eExPMUZCUTBGRExGRTdVVUZEUVVNc1R6dFJRVU5CUXl4UE8xRkJRMEZETEVzN1VVRkRRVU1zVHp0UlFVTkJReXhMT3p0QlFVVlFPenRSUVVOUFF5eFJPMUZCUTBGRExFYzdVVUZEUVVNc1J6dFJRVU5CUXl4UElpd2labWxzWlNJNkluQnZjRzF2ZEdsdmJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHZJRVp5WVcxbGMzbHVZeUJ6WTJobFpIVnNaWEp6WEc1bGVIQnZjblFnZTF4dUlDQnZia1p5WVcxbFUzUmhjblFzWEc0Z0lHOXVSbkpoYldWVmNHUmhkR1VzWEc0Z0lHOXVSbkpoYldWU1pXNWtaWElzWEc0Z0lHOXVSbkpoYldWRmJtUXNYRzRnSUdOaGJtTmxiRTl1Um5KaGJXVlRkR0Z5ZEN4Y2JpQWdZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU3hjYmlBZ1kyRnVZMlZzVDI1R2NtRnRaVkpsYm1SbGNpeGNiaUFnWTJGdVkyVnNUMjVHY21GdFpVVnVaQ3hjYmlBZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbExGeHVJQ0JqZFhKeVpXNTBSbkpoYldWVWFXMWxjM1JoYlhCY2JuMGdabkp2YlNBbkxpOW1jbUZ0WlhONWJtTW5PMXh1WEc1bGVIQnZjblFnS2lCaGN5QmpZV3hqSUdaeWIyMGdKeTR2YVc1akwyTmhiR01uTzF4dVpYaHdiM0owSUNvZ1lYTWdaV0Z6YVc1bklHWnliMjBnSnk0dmFXNWpMMlZoYzJsdVp5YzdYRzVsZUhCdmNuUWdLaUJoY3lCMGNtRnVjMlp2Y20wZ1puSnZiU0FuTGk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6Snp0Y2JtVjRjRzl5ZENBcUlHRnpJSFpoYkhWbFZIbHdaWE1nWm5KdmJTQW5MaTlwYm1NdmRtRnNkV1V0ZEhsd1pYTW5PMXh1WEc0dkx5QkJZM1JwYjI1elhHNWxlSEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeWM3WEc1bGVIQnZjblFnWW14bGJtUlVkMlZsYm5NZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDJKc1pXNWtMWFIzWldWdWN5YzdYRzVsZUhCdmNuUWdZMmhoYVc0Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDJOb1lXbHVKenRjYm1WNGNHOXlkQ0JqYjJ4dmNsUjNaV1Z1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlqYjJ4dmNpMTBkMlZsYmljN1hHNWxlSEJ2Y25RZ1kyOXRjRzl6YVhSbElHWnliMjBnSnk0dllXTjBhVzl1Y3k5amIyMXdiM05wZEdVbk8xeHVaWGh3YjNKMElHTnliM056Um1Ga1pTQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlkzSnZjM010Wm1Ga1pTYzdYRzVsZUhCdmNuUWdaR1ZzWVhrZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDJSbGJHRjVKenRjYm1WNGNHOXlkQ0J3WVhKaGJHeGxiQ0JtY205dElDY3VMMkZqZEdsdmJuTXZjR0Z5WVd4c1pXd25PMXh1Wlhod2IzSjBJSEJvZVhOcFkzTWdabkp2YlNBbkxpOWhZM1JwYjI1ekwzQm9lWE5wWTNNbk8xeHVaWGh3YjNKMElIQnZhVzUwWlhJZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDNCdmFXNTBaWEluTzF4dVpYaHdiM0owSUhSM1pXVnVJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OTBkMlZsYmljN1hHNWxlSEJ2Y25RZ2MzUmhaMmRsY2lCbWNtOXRJQ2N1TDJGamRHbHZibk12YzNSaFoyZGxjaWM3WEc1bGVIQnZjblFnZG1Gc2RXVWdabkp2YlNBbkxpOWhZM1JwYjI1ekwzWmhiSFZsSnp0Y2JseHVMeThnVW1WdVpHVnlaWEp6WEc1bGVIQnZjblFnVW1WdVpHVnlaWElnWm5KdmJTQW5MaTl5Wlc1a1pYSmxjbk1uTzF4dVpYaHdiM0owSUdOemN5Qm1jbTl0SUNjdUwzSmxibVJsY21WeWN5OWpjM01uTzF4dVpYaHdiM0owSUhOMlp5Qm1jbTl0SUNjdUwzSmxibVJsY21WeWN5OXpkbWNuTzF4dVpYaHdiM0owSUhOMloxQmhkR2dnWm5KdmJTQW5MaTl5Wlc1a1pYSmxjbk12YzNabkxYQmhkR2duTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG4vKlxuICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcmV0dXJuIFtudW1iZXJdXG4qL1xudmFyIHRvRGVjaW1hbCA9IGZ1bmN0aW9uIChudW0pIHtcbiAgdmFyIHByZWNpc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDIgOiBhcmd1bWVudHNbMV07XG5cbiAgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufTtcblxuLypcbiAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgXG4gIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICBhcmUgYXQgMCwwXG4gIFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbn07XG5cbi8qXG4gIERpbGF0ZVxuICBcbiAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICBcbiAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gIFxuICBhIC0tLS0tLS0tLSBiXG4gIFxuICB0b1xuICBcbiAgYSAtLS0tIGJcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xudmFyIGRpbGF0ZSA9IGV4cG9ydHMuZGlsYXRlID0gZnVuY3Rpb24gKGEsIGIsIGRpbGF0aW9uKSB7XG4gIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xudmFyIGRpc3RhbmNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGZ1bmN0aW9uIChhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gWkVST19QT0lOVCA6IGFyZ3VtZW50c1sxXTtcblxuICAvLyAxRCBkaW1lbnNpb25zXG4gIGlmICgoMCwgX3V0aWxzLmlzTnVtKShhKSkge1xuICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICB2YXIgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgdmFyIHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgIHZhciB6RGVsdGEgPSAoMCwgX3V0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGVsdGEsIDIpICsgTWF0aC5wb3coeURlbHRhLCAyKSArIE1hdGgucG93KHpEZWx0YSwgMikpO1xuICB9XG59O1xuXG4vKlxuICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG52YXIgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZnVuY3Rpb24gKGZyb20sIHRvLCB2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcbn07XG5cbi8qXG4gIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbnZhciBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHByb2dyZXNzKSB7XG4gIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG52YXIgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGZ1bmN0aW9uIChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkge1xuICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gIHJldHVybiB7XG4gICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gIH07XG59O1xuXG4vKlxuICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG52YXIgcmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbn07XG5cbi8qXG4gIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbikge1xuICB2YXIgc21vb3RoaW5nID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1szXTtcbiAgcmV0dXJuIHRvRGVjaW1hbChvbGRWYWx1ZSArIGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpO1xufTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZnVuY3Rpb24gKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gKDAsIF91dGlscy5pc051bSkoeHBzKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xufTtcblxuLypcbiAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgcmV0dXJuIHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcbn07XG5cbi8qXG4gIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gIFxuICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbnZhciBzdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGZ1bmN0aW9uIChzdGVwcywgcHJvZ3Jlc3MpIHtcbiAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gIHZhciB0YXJnZXQgPSAxIC0gMSAvIHN0ZXBzO1xuICB2YXIgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZZMkZzWXk1cWN5SmRMQ0p1WVcxbGN5STZXeUowYjBSbFkybHRZV3dpTENKdWRXMGlMQ0p3Y21WamFYTnBiMjRpTENKTllYUm9JaXdpY205MWJtUWlMQ0phUlZKUFgxQlBTVTVVSWl3aWVDSXNJbmtpTENKNklpd2laR2x6ZEdGdVkyVXhSQ0lzSW1FaUxDSmlJaXdpWVdKeklpd2lZVzVuYkdVaUxDSnlZV1JwWVc1elZHOUVaV2R5WldWeklpd2lZWFJoYmpJaUxDSmtaV2R5WldWelZHOVNZV1JwWVc1eklpd2laR1ZuY21WbGN5SXNJbEJKSWl3aVpHbHNZWFJsSWl3aVpHbHNZWFJwYjI0aUxDSmthWE4wWVc1alpTSXNJbmhFWld4MFlTSXNJbmxFWld4MFlTSXNJbnBFWld4MFlTSXNJbk54Y25RaUxDSm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU0lzSW1aeWIyMGlMQ0owYnlJc0luWmhiSFZsSWl3aVoyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTWlMQ0p3Y205bmNtVnpjeUlzSW5CdmFXNTBSbkp2YlVGdVoyeGxRVzVrUkdsemRHRnVZMlVpTENKdmNtbG5hVzRpTENKamIzTWlMQ0p6YVc0aUxDSnlZV1JwWVc1eklpd2ljMjF2YjNSb0lpd2libVYzVm1Gc2RXVWlMQ0p2YkdSV1lXeDFaU0lzSW1SMWNtRjBhVzl1SWl3aWMyMXZiM1JvYVc1bklpd2liV0Y0SWl3aWMzQmxaV1JRWlhKR2NtRnRaU0lzSW5od2N5SXNJbVp5WVcxbFJIVnlZWFJwYjI0aUxDSnpjR1ZsWkZCbGNsTmxZMjl1WkNJc0luWmxiRzlqYVhSNUlpd2ljM1JsY0ZCeWIyZHlaWE56SWl3aWMzUmxjSE1pTENKelpXZHRaVzUwSWl3aWRHRnlaMlYwSWl3aWNISnZaM0psYzNOUFpsUmhjbWRsZENJc0ltMXBiaUlzSW1ac2IyOXlJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96dEJRVVZCT3pzN096czdPMEZCVDBFc1NVRkJUVUVzV1VGQldTeFZRVUZEUXl4SFFVRkVMRVZCUVhkQ08wRkJRVUVzVFVGQmJFSkRMRk5CUVd0Q0xIbEVRVUZPTEVOQlFVMDdPMEZCUTNoRFFTeDFRa0ZCV1N4RlFVRmFMRVZCUVd0Q1FTeFRRVUZzUWp0QlFVTkJMRk5CUVU5RExFdEJRVXRETEV0QlFVd3NRMEZCVjBnc1RVRkJUVU1zVTBGQmFrSXNTVUZCT0VKQkxGTkJRWEpETzBGQlEwUXNRMEZJUkRzN1FVRkxRU3hKUVVGTlJ5eGhRVUZoTzBGQlEycENReXhMUVVGSExFTkJSR003UVVGRmFrSkRMRXRCUVVjc1EwRkdZenRCUVVkcVFrTXNTMEZCUnp0QlFVaGpMRU5CUVc1Q096dEJRVTFCTEVsQlFVMURMR0ZCUVdFc1ZVRkJRME1zUTBGQlJDeEZRVUZKUXl4RFFVRktPMEZCUVVFc1UwRkJWVklzUzBGQlMxTXNSMEZCVEN4RFFVRlRSaXhKUVVGSlF5eERRVUZpTEVOQlFWWTdRVUZCUVN4RFFVRnVRanM3UVVGRlFUczdPenM3T3pzN096dEJRVlZQTEVsQlFVMUZMSGRDUVVGUkxGVkJRVU5JTEVOQlFVUTdRVUZCUVN4TlFVRkpReXhEUVVGS0xIbEVRVUZSVGl4VlFVRlNPMEZCUVVFc1UwRkJkVUpUTEdsQ1FVRnBRbGdzUzBGQlMxa3NTMEZCVEN4RFFVRlhUQ3hGUVVGRlNpeERRVUZHTEVkQlFVMUxMRVZCUVVWTUxFTkJRVzVDTEVWQlFYTkNTU3hGUVVGRlNDeERRVUZHTEVkQlFVMUpMRVZCUVVWS0xFTkJRVGxDTEVOQlFXcENMRU5CUVhaQ08wRkJRVUVzUTBGQlpEczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVk1zT0VOQlFXMUNMRlZCUVVORExFOUJRVVE3UVVGQlFTeFRRVUZoUVN4VlFVRlZaQ3hMUVVGTFpTeEZRVUZtTEVkQlFXOUNMRWRCUVdwRE8wRkJRVUVzUTBGQmVrSTdPMEZCUlZBN096czdPenM3T3pzN096czdPenM3T3p0QlFXdENUeXhKUVVGTlF5d3dRa0ZCVXl4VlFVRkRWQ3hEUVVGRUxFVkJRVWxETEVOQlFVb3NSVUZCVDFNc1VVRkJVRHRCUVVGQkxGTkJRVzlDVml4SlFVRkxMRU5CUVVORExFbEJRVWxFTEVOQlFVd3NTVUZCVlZVc1VVRkJia003UVVGQlFTeERRVUZtT3p0QlFVVlFPenM3T3pzN096czdRVUZUVHl4SlFVRk5ReXc0UWtGQlZ5eFZRVUZEV0N4RFFVRkVMRVZCUVhWQ08wRkJRVUVzVFVGQmJrSkRMRU5CUVcxQ0xIbEVRVUZtVGl4VlFVRmxPenRCUVVNM1F6dEJRVU5CTEUxQlFVa3NhMEpCUVUxTExFTkJRVTRzUTBGQlNpeEZRVUZqTzBGQlExb3NWMEZCVDBRc1YwRkJWME1zUTBGQldDeEZRVUZqUXl4RFFVRmtMRU5CUVZBN08wRkJSVVk3UVVGRFF5eEhRVXBFTEUxQlNVODdRVUZEVEN4UlFVRk5WeXhUUVVGVFlpeFhRVUZYUXl4RlFVRkZTaXhEUVVGaUxFVkJRV2RDU3l4RlFVRkZUQ3hEUVVGc1FpeERRVUZtTzBGQlEwRXNVVUZCVFdsQ0xGTkJRVk5rTEZkQlFWZERMRVZCUVVWSUxFTkJRV0lzUlVGQlowSkpMRVZCUVVWS0xFTkJRV3hDTEVOQlFXWTdRVUZEUVN4UlFVRk5hVUlzVTBGQlZTeHJRa0ZCVFdRc1JVRkJSVVlzUTBGQlVpeERRVUZFTEVkQlFXVkRMRmRCUVZkRExFVkJRVVZHTEVOQlFXSXNSVUZCWjBKSExFVkJRVVZJTEVOQlFXeENMRU5CUVdZc1IwRkJjME1zUTBGQmNrUTdPMEZCUlVFc1YwRkJUMHdzUzBGQlMzTkNMRWxCUVV3c1EwRkJWU3hUUVVGRFNDeE5RVUZFTEVWQlFWY3NRMEZCV0N4aFFVRnBRa01zVFVGQmFrSXNSVUZCTWtJc1EwRkJNMElzWVVGQmFVTkRMRTFCUVdwRExFVkJRVEpETEVOQlFUTkRMRU5CUVZZc1EwRkJVRHRCUVVORU8wRkJRMFlzUTBGaVRUczdRVUZsVURzN096czdPenM3T3pzN08wRkJXVThzU1VGQlRVVXNjMFJCUVhWQ0xGVkJRVU5ETEVsQlFVUXNSVUZCVDBNc1JVRkJVQ3hGUVVGWFF5eExRVUZZTzBGQlFVRXNVMEZCY1VJc1EwRkJRMEVzVVVGQlVVWXNTVUZCVkN4TFFVRnJRa01zUzBGQlMwUXNTVUZCZGtJc1EwRkJja0k3UVVGQlFTeERRVUUzUWpzN1FVRkZVRHM3T3pzN096czdPenM3UVVGWFR5eEpRVUZOUnl4elJFRkJkVUlzVlVGQlEwZ3NTVUZCUkN4RlFVRlBReXhGUVVGUUxFVkJRVmRITEZGQlFWZzdRVUZCUVN4VFFVRjVRaXhEUVVGRlFTeFJRVUZHTEVkQlFXRktMRWxCUVdRc1IwRkJkVUpKTEZkQlFWZElMRVZCUVd4RExFZEJRWGREUkN4SlFVRm9SVHRCUVVGQkxFTkJRVGRDT3p0QlFVVlFPenM3T3pzN096dEJRVkZQTEVsQlFVMUxMR2RGUVVFMFFpeFZRVUZEUXl4TlFVRkVMRVZCUVZOd1FpeExRVUZVTEVWQlFXZENVU3hSUVVGb1FpeEZRVUUyUWp0QlFVTndSVklzVlVGQlVVY3NhVUpCUVdsQ1NDeExRVUZxUWl4RFFVRlNPenRCUVVWQkxGTkJRVTg3UVVGRFRGQXNUMEZCUjJVc1YwRkJWMnhDTEV0QlFVc3JRaXhIUVVGTUxFTkJRVk55UWl4TFFVRlVMRU5CUVZnc1IwRkJOa0p2UWl4UFFVRlBNMElzUTBGRWJFTTdRVUZGVEVNc1QwRkJSMk1zVjBGQlYyeENMRXRCUVV0blF5eEhRVUZNTEVOQlFWTjBRaXhMUVVGVUxFTkJRVmdzUjBGQk5rSnZRaXhQUVVGUE1VSTdRVUZHYkVNc1IwRkJVRHRCUVVsRUxFTkJVRTA3TzBGQlUxQTdPenM3T3p0QlFVMVBMRWxCUVUxUExEaERRVUZ0UWl4VlFVRkRjMElzVDBGQlJEdEJRVUZCTEZOQlFXRkJMRlZCUVZVc1IwRkJWaXhIUVVGblFtcERMRXRCUVV0bExFVkJRV3hETzBGQlFVRXNRMEZCZWtJN08wRkJSVkE3T3pzN096czdPMEZCVVU4c1NVRkJUVzFDTERCQ1FVRlRMRlZCUVVORExGRkJRVVFzUlVGQlYwTXNVVUZCV0N4RlFVRnhRa01zVVVGQmNrSTdRVUZCUVN4TlFVRXJRa01zVTBGQkwwSXNlVVJCUVRKRExFTkJRVE5ETzBGQlFVRXNVMEZCYVVSNlF5eFZRVUZWZFVNc1YwRkJXVU1zV1VGQldVWXNWMEZCVjBNc1VVRkJka0lzU1VGQmJVTndReXhMUVVGTGRVTXNSMEZCVEN4RFFVRlRSQ3hUUVVGVUxFVkJRVzlDUkN4UlFVRndRaXhEUVVGNlJDeERRVUZxUkR0QlFVRkJMRU5CUVdZN08wRkJSVkE3T3pzN096dEJRVTFQTEVsQlFVMUhMSGREUVVGblFpeFZRVUZEUXl4SFFVRkVMRVZCUVUxRExHRkJRVTQ3UVVGQlFTeFRRVUY1UWl4clFrRkJUVVFzUjBGQlRpeERRVUZFTEVkQlFXVkJMRTlCUVU4c1QwRkJUME1zWVVGQlpDeERRVUZtTEVkQlFUaERMRU5CUVhSRk8wRkJRVUVzUTBGQmRFSTdPMEZCUlZBN096czdPenRCUVUxUExFbEJRVTFETERCRFFVRnBRaXhWUVVGRFF5eFJRVUZFTEVWQlFWZEdMR0ZCUVZnN1FVRkJRU3hUUVVFMlFrVXNXVUZCV1N4UFFVRlBSaXhoUVVGdVFpeERRVUUzUWp0QlFVRkJMRU5CUVhaQ096dEJRVVZRT3pzN096czdPMEZCVDA4c1NVRkJUVWNzYzBOQlFXVXNWVUZCUTBNc1MwRkJSQ3hGUVVGUmJFSXNVVUZCVWl4RlFVRnhRanRCUVVNdlF5eE5RVUZOYlVJc1ZVRkJWU3hMUVVGTFJDeFJRVUZSTEVOQlFXSXNRMEZCYUVJN1FVRkRRU3hOUVVGTlJTeFRRVUZUTEVsQlFVc3NTVUZCU1VZc1MwRkJlRUk3UVVGRFFTeE5RVUZOUnl4dFFrRkJiVUpxUkN4TFFVRkxhMFFzUjBGQlRDeERRVUZUZEVJc1YwRkJWMjlDTEUxQlFYQkNMRVZCUVRSQ0xFTkJRVFZDTEVOQlFYcENPenRCUVVWQkxGTkJRVTlvUkN4TFFVRkxiVVFzUzBGQlRDeERRVUZYUml4dFFrRkJiVUpHTEU5QlFUbENMRWxCUVhsRFFTeFBRVUZvUkR0QlFVTkVMRU5CVGswaUxDSm1hV3hsSWpvaVkyRnNZeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR2x6VG5WdElIMGdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ2JuVnRZbVZ5SUhSdklIZ2daR1ZqYVcxaGJDQndiR0ZqWlhOY2JseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDFjYmlvdlhHNWpiMjV6ZENCMGIwUmxZMmx0WVd3Z1BTQW9iblZ0TENCd2NtVmphWE5wYjI0Z1BTQXlLU0E5UGlCN1hHNGdJSEJ5WldOcGMybHZiaUE5SURFd0lDb3FJSEJ5WldOcGMybHZianRjYmlBZ2NtVjBkWEp1SUUxaGRHZ3VjbTkxYm1Rb2JuVnRJQ29nY0hKbFkybHphVzl1S1NBdklIQnlaV05wYzJsdmJqdGNibjA3WEc1Y2JtTnZibk4wSUZwRlVrOWZVRTlKVGxRZ1BTQjdYRzRnSUhnNklEQXNYRzRnSUhrNklEQXNYRzRnSUhvNklEQmNibjA3WEc1Y2JtTnZibk4wSUdScGMzUmhibU5sTVVRZ1BTQW9ZU3dnWWlrZ1BUNGdUV0YwYUM1aFluTW9ZU0F0SUdJcE8xeHVYRzR2S2x4dUlDQkJibWRzWlNCaVpYUjNaV1Z1SUhCdmFXNTBjMXh1SUNCY2JpQWdWSEpoYm5Oc1lYUmxjeUIwYUdVZ2FIbHdiM1JvWlhScFkyRnNJR3hwYm1VZ2MyOGdkR2hoZENCMGFHVWdKMlp5YjIwbklHTnZiM0prYVc1aGRHVnpYRzRnSUdGeVpTQmhkQ0F3TERCY2JpQWdYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjI5eVpHbHVZWFJsY3lCdlppQm1jbTl0SUhCdmFXNTBYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjNKa2FXNWhkR1Z6SUc5bUlIUnZJSEJ2YVc1MFhHNGdJRUJ5WlhSMWNtNGdXM0poWkdsaGJsMDZJRUZ1WjJ4bElHSmxkSGRsWlc0Z2RHaGxJSFIzYnlCd2IybHVkSE1nYVc0Z2NtRmthV0Z1YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCaGJtZHNaU0E5SUNoaExDQmlJRDBnV2tWU1QxOVFUMGxPVkNrZ1BUNGdjbUZrYVdGdWMxUnZSR1ZuY21WbGN5aE5ZWFJvTG1GMFlXNHlLR0V1ZUNBdElHSXVlQ3dnWVM1NUlDMGdZaTU1S1NrN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ1pHVm5jbVZsY3lCMGJ5QnlZV1JwWVc1elhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUdSbFozSmxaWE5jYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z2NtRmthV0Z1YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa1pXZHlaV1Z6Vkc5U1lXUnBZVzV6SUQwZ0tHUmxaM0psWlhNcElEMCtJR1JsWjNKbFpYTWdLaUJOWVhSb0xsQkpJQzhnTVRnd08xeHVYRzR2S2x4dUlDQkVhV3hoZEdWY2JpQWdYRzRnSUVOb1lXNW5aU0IwYUdVZ2NISnZaM0psYzNOcGIyNGdZbVYwZDJWbGJpQmhJR0Z1WkNCaUlHRmpZMjl5WkdsdVp5QjBieUJrYVd4aGRHbHZiaTVjYmlBZ1hHNGdJRk52SUdScGJHRjBhVzl1SUQwZ01DNDFJSGR2ZFd4a0lHTm9ZVzVuWlZ4dUlDQmNiaUFnWVNBdExTMHRMUzB0TFMwZ1lseHVJQ0JjYmlBZ2RHOWNiaUFnWEc0Z0lHRWdMUzB0TFNCaVhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeVpYWnBiM1Z6SUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVJwYkdGMFpTQndjbTluY21WemN5QmllU0I0WEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsSUhCc2RYTWdkR2hsSUdScGJHRjBaV1FnWkdsbVptVnlaVzVqWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa2FXeGhkR1VnUFNBb1lTd2dZaXdnWkdsc1lYUnBiMjRwSUQwK0lHRWdLeUFvS0dJZ0xTQmhLU0FxSUdScGJHRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ1JHbHpkR0Z1WTJWY2JpQWdYRzRnSUZKbGRIVnlibk1nZEdobElHUnBjM1JoYm1ObElHSmxkSGRsWlc0Z2RIZHZJRzRnWkdsdFpXNXphVzl1WVd3Z2NHOXBiblJ6TGx4dUlDQmNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUXZiblZ0WW1WeVhUb2dlQ0JoYm1RZ2VTQnZjaUJxZFhOMElIZ2diMllnY0c5cGJuUWdRVnh1SUNCQWNHRnlZVzBnVzI5aWFtVmpkQzl1ZFcxaVpYSmRPaUFvYjNCMGFXOXVZV3dwT2lCNElHRnVaQ0I1SUc5eUlHcDFjM1FnZUNCdlppQndiMmx1ZENCQ1hHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlJvWlNCa2FYTjBZVzVqWlNCaVpYUjNaV1Z1SUhSb1pTQjBkMjhnY0c5cGJuUnpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1JwYzNSaGJtTmxJRDBnS0dFc0lHSWdQU0JhUlZKUFgxQlBTVTVVS1NBOVBpQjdYRzRnSUM4dklERkVJR1JwYldWdWMybHZibk5jYmlBZ2FXWWdLR2x6VG5WdEtHRXBLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHUnBjM1JoYm1ObE1VUW9ZU3dnWWlrN1hHNWNiaUFnTHk4Z1RYVnNkR2t0WkdsdFpXNXphVzl1WVd4Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCamIyNXpkQ0I0UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVDd2dZaTU0S1R0Y2JpQWdJQ0JqYjI1emRDQjVSR1ZzZEdFZ1BTQmthWE4wWVc1alpURkVLR0V1ZVN3Z1lpNTVLVHRjYmlBZ0lDQmpiMjV6ZENCNlJHVnNkR0VnUFNBb2FYTk9kVzBvWVM1NktTa2dQeUJrYVhOMFlXNWpaVEZFS0dFdWVpd2dZaTU2S1NBNklEQTdYRzVjYmlBZ0lDQnlaWFIxY200Z1RXRjBhQzV6Y1hKMEtDaDRSR1ZzZEdFZ0tpb2dNaWtnS3lBb2VVUmxiSFJoSUNvcUlESXBJQ3NnS0hwRVpXeDBZU0FxS2lBeUtTazdYRzRnSUgxY2JuMDdYRzVjYmk4cVhHNGdJRkJ5YjJkeVpYTnpJSGRwZEdocGJpQm5hWFpsYmlCeVlXNW5aVnh1SUNCY2JpQWdSMmwyWlc0Z1lTQnNiM2RsY2lCc2FXMXBkQ0JoYm1RZ1lXNGdkWEJ3WlhJZ2JHbHRhWFFzSUhkbElISmxkSFZ5YmlCMGFHVWdjSEp2WjNKbGMzTmNiaUFnS0dWNGNISmxjM05sWkNCaGN5QmhJRzUxYldKbGNpQXdMVEVwSUhKbGNISmxjMlZ1ZEdWa0lHSjVJSFJvWlNCbmFYWmxiaUIyWVd4MVpTd2dZVzVrWEc0Z0lHeHBiV2wwSUhSb1lYUWdjSEp2WjNKbGMzTWdkRzhnZDJsMGFHbHVJREF0TVM1Y2JpQWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEc5M1pYSWdiR2x0YVhRZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWWEJ3WlhJZ2JHbHRhWFJjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0IwYnlCbWFXNWtJSEJ5YjJkeVpYTnpJSGRwZEdocGJpQm5hWFpsYmlCeVlXNW5aVnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCUWNtOW5jbVZ6Y3lCdlppQjJZV3gxWlNCM2FYUm9hVzRnY21GdVoyVWdZWE1nWlhod2NtVnpjMlZrSURBdE1WeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU0E5SUNobWNtOXRMQ0IwYnl3Z2RtRnNkV1VwSUQwK0lDaDJZV3gxWlNBdElHWnliMjBwSUM4Z0tIUnZJQzBnWm5KdmJTazdYRzVjYmk4cVhHNGdJRlpoYkhWbElHbHVJSEpoYm1kbElHWnliMjBnY0hKdlozSmxjM05jYmlBZ1hHNGdJRWRwZG1WdUlHRWdiRzkzWlhJZ2JHbHRhWFFnWVc1a0lHRnVJSFZ3Y0dWeUlHeHBiV2wwTENCM1pTQnlaWFIxY200Z2RHaGxJSFpoYkhWbElIZHBkR2hwYmx4dUlDQjBhR0YwSUhKaGJtZGxJR0Z6SUdWNGNISmxjM05sWkNCaWVTQndjbTluY21WemN5QW9ZU0J1ZFcxaVpYSWdabkp2YlNBd0xURXBYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeHZkMlZ5SUd4cGJXbDBJRzltSUhKaGJtZGxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlhCd1pYSWdiR2x0YVhRZ2IyWWdjbUZ1WjJWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlVhR1VnY0hKdlozSmxjM01nWW1WMGQyVmxiaUJzYjNkbGNpQmhibVFnZFhCd1pYSWdiR2x0YVhSeklHVjRjSEpsYzNObFpDQXdMVEZjYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnWVhNZ1kyRnNZM1ZzWVhSbFpDQm1jbTl0SUhCeWIyZHlaWE56SUhkcGRHaHBiaUJ5WVc1blpTQW9ibTkwSUd4cGJXbDBaV1FnZDJsMGFHbHVJSEpoYm1kbEtWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeUE5SUNobWNtOXRMQ0IwYnl3Z2NISnZaM0psYzNNcElEMCtJQ2d0SUhCeWIyZHlaWE56SUNvZ1puSnZiU2tnS3lBb2NISnZaM0psYzNNZ0tpQjBieWtnS3lCbWNtOXRPMXh1WEc0dktseHVJQ0JRYjJsdWRDQm1jbTl0SUdGdVoyeGxJR0Z1WkNCa2FYTjBZVzVqWlZ4dUlDQmNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUF5UkNCd2IybHVkQ0J2WmlCdmNtbG5hVzVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCQmJtZHNaU0JtY205dElHOXlhV2RwYmx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFUnBjM1JoYm1ObElHWnliMjBnYjNKcFoybHVYRzRnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjA2SUVOaGJHTjFiR0YwWldRZ01rUWdjRzlwYm5SY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NHOXBiblJHY205dFFXNW5iR1ZCYm1SRWFYTjBZVzVqWlNBOUlDaHZjbWxuYVc0c0lHRnVaMnhsTENCa2FYTjBZVzVqWlNrZ1BUNGdlMXh1SUNCaGJtZHNaU0E5SUdSbFozSmxaWE5VYjFKaFpHbGhibk1vWVc1bmJHVXBPMXh1WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnZURvZ1pHbHpkR0Z1WTJVZ0tpQk5ZWFJvTG1OdmN5aGhibWRzWlNrZ0t5QnZjbWxuYVc0dWVDeGNiaUFnSUNCNU9pQmthWE4wWVc1alpTQXFJRTFoZEdndWMybHVLR0Z1WjJ4bEtTQXJJRzl5YVdkcGJpNTVYRzRnSUgwN1hHNTlPMXh1WEc0dktseHVJQ0JEYjI1MlpYSjBJSEpoWkdsaGJuTWdkRzhnWkdWbmNtVmxjMXh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCcGJpQnlZV1JwWVc1elhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJR1JsWjNKbFpYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjbUZrYVdGdWMxUnZSR1ZuY21WbGN5QTlJQ2h5WVdScFlXNXpLU0E5UGlCeVlXUnBZVzV6SUNvZ01UZ3dJQzhnVFdGMGFDNVFTVHRjYmx4dUx5cGNiaUFnUm5KaGJXVnlZWFJsTFdsdVpHVndaVzVrWlc1MElITnRiMjkwYUdsdVoxeHVYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVG1WM0lIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1QyeGtJSFpoYkhWbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZElDaHZjSFJwYjI1aGJDazZJRk50YjI5MGFHbHVaeUFvTUNCcGN5QnViMjVsS1Z4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemJXOXZkR2dnUFNBb2JtVjNWbUZzZFdVc0lHOXNaRlpoYkhWbExDQmtkWEpoZEdsdmJpd2djMjF2YjNSb2FXNW5JRDBnTUNrZ1BUNGdkRzlFWldOcGJXRnNLRzlzWkZaaGJIVmxJQ3NnS0dSMWNtRjBhVzl1SUNvZ0tHNWxkMVpoYkhWbElDMGdiMnhrVm1Gc2RXVXBJQzhnVFdGMGFDNXRZWGdvYzIxdmIzUm9hVzVuTENCa2RYSmhkR2x2YmlrcEtUdGNibHh1THlwY2JpQWdRMjl1ZG1WeWRDQjRJSEJsY2lCelpXTnZibVFnZEc4Z2NHVnlJR1p5WVcxbElIWmxiRzlqYVhSNUlHSmhjMlZrSUc5dUlHWndjMXh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZibWwwSUhCbGNpQnpaV052Ym1SY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkdjbUZ0WlNCa2RYSmhkR2x2YmlCcGJpQnRjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Y0dWbFpGQmxja1p5WVcxbElEMGdLSGh3Y3l3Z1puSmhiV1ZFZFhKaGRHbHZiaWtnUFQ0Z0tHbHpUblZ0S0hod2N5a3BJRDhnZUhCeklDOGdLREV3TURBZ0x5Qm1jbUZ0WlVSMWNtRjBhVzl1S1NBNklEQTdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdkbVZzYjJOcGRIa2dhVzUwYnlCMlpXeHBZMmwwZVNCd1pYSWdjMlZqYjI1a1hHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWdWFYUWdjR1Z5SUdaeVlXMWxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNGdhVzRnYlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQmxaV1JRWlhKVFpXTnZibVFnUFNBb2RtVnNiMk5wZEhrc0lHWnlZVzFsUkhWeVlYUnBiMjRwSUQwK0lIWmxiRzlqYVhSNUlDb2dLREV3TURBZ0x5Qm1jbUZ0WlVSMWNtRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ1EzSmxZWFJsSUhOMFpYQndaV1FnZG1WeWMybHZiaUJ2WmlBd0xURWdjSEp2WjNKbGMzTmNiaUFnWEc0Z0lFQndZWEpoYlNCYmFXNTBYVG9nVG5WdFltVnlJRzltSUhOMFpYQnpYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJUZEdWd2NHVmtJSFpoYkhWbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITjBaWEJRY205bmNtVnpjeUE5SUNoemRHVndjeXdnY0hKdlozSmxjM01wSUQwK0lIdGNiaUFnWTI5dWMzUWdjMlZuYldWdWRDQTlJREVnTHlBb2MzUmxjSE1nTFNBeEtUdGNiaUFnWTI5dWMzUWdkR0Z5WjJWMElEMGdNU0F0SUNneElDOGdjM1JsY0hNcE8xeHVJQ0JqYjI1emRDQndjbTluY21WemMwOW1WR0Z5WjJWMElEMGdUV0YwYUM1dGFXNG9jSEp2WjNKbGMzTWdMeUIwWVhKblpYUXNJREVwTzF4dVhHNGdJSEpsZEhWeWJpQk5ZWFJvTG1ac2IyOXlLSEJ5YjJkeVpYTnpUMlpVWVhKblpYUWdMeUJ6WldkdFpXNTBLU0FxSUhObFoyMWxiblE3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3ViaWNCZXppZXIgPSBleHBvcnRzLmFudGljaXBhdGUgPSBleHBvcnRzLmNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBleHBvcnRzLmJhY2tJbk91dCA9IGV4cG9ydHMuYmFja091dCA9IGV4cG9ydHMuYmFja0luID0gZXhwb3J0cy5jcmVhdGVCYWNrSW4gPSBleHBvcnRzLmNpcmNJbk91dCA9IGV4cG9ydHMuY2lyY091dCA9IGV4cG9ydHMuY2lyY0luID0gZXhwb3J0cy5lYXNlSW5PdXQgPSBleHBvcnRzLmVhc2VPdXQgPSBleHBvcnRzLmVhc2VJbiA9IGV4cG9ydHMuY3JlYXRlRXhwb0luID0gZXhwb3J0cy5saW5lYXIgPSBleHBvcnRzLmNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVSZXZlcnNlZEVhc2luZyA9IHVuZGVmaW5lZDtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybWVycycpO1xuXG52YXIgREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEggPSAxLjUyNTtcblxudmFyIGNyZWF0ZVJldmVyc2VkRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVSZXZlcnNlZEVhc2luZyA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNpbmcoMSAtIHApO1xuICB9O1xufTtcbnZhciBjcmVhdGVNaXJyb3JlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlTWlycm9yZWRFYXNpbmcgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwIDw9IDAuNSA/IGVhc2luZygyICogcCkgLyAyIDogKDIgLSBlYXNpbmcoMiAqICgxIC0gcCkpKSAvIDI7XG4gIH07XG59O1xuXG52YXIgbGluZWFyID0gZXhwb3J0cy5saW5lYXIgPSBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcDtcbn07XG5cbnZhciBjcmVhdGVFeHBvSW4gPSBleHBvcnRzLmNyZWF0ZUV4cG9JbiA9IGZ1bmN0aW9uIChwb3dlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gTWF0aC5wb3cocCwgcG93ZXIpO1xuICB9O1xufTtcbnZhciBlYXNlSW4gPSBleHBvcnRzLmVhc2VJbiA9IGNyZWF0ZUV4cG9JbigyKTtcbnZhciBlYXNlT3V0ID0gZXhwb3J0cy5lYXNlT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoZWFzZUluKTtcbnZhciBlYXNlSW5PdXQgPSBleHBvcnRzLmVhc2VJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGVhc2VJbik7XG5cbnZhciBjaXJjSW4gPSBleHBvcnRzLmNpcmNJbiA9IGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHApKTtcbn07XG52YXIgY2lyY091dCA9IGV4cG9ydHMuY2lyY091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGNpcmNJbik7XG52YXIgY2lyY0luT3V0ID0gZXhwb3J0cy5jaXJjSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhjaXJjT3V0KTtcblxudmFyIGNyZWF0ZUJhY2tJbiA9IGV4cG9ydHMuY3JlYXRlQmFja0luID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwICogcCAqICgocG93ZXIgKyAxKSAqIHAgLSBwb3dlcik7XG4gIH07XG59O1xudmFyIGJhY2tJbiA9IGV4cG9ydHMuYmFja0luID0gY3JlYXRlQmFja0luKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcbnZhciBiYWNrT3V0ID0gZXhwb3J0cy5iYWNrT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoYmFja0luKTtcbnZhciBiYWNrSW5PdXQgPSBleHBvcnRzLmJhY2tJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGJhY2tJbik7XG5cbnZhciBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHZhciBiYWNrRWFzaW5nID0gY3JlYXRlQmFja0luKHBvd2VyKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIChwICo9IDIpIDwgMSA/IDAuNSAqIGJhY2tFYXNpbmcocCkgOiAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwIC0gMSkpKTtcbiAgfTtcbn07XG5cbnZhciBhbnRpY2lwYXRlID0gZXhwb3J0cy5hbnRpY2lwYXRlID0gY3JlYXRlQW50aWNpcGF0ZUVhc2luZyhERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG5cbnZhciBjdWJpY0JlemllciA9IGV4cG9ydHMuY3ViaWNCZXppZXIgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIpIHtcbiAgdmFyIHhCZXppZXIgPSAoMCwgX3RyYW5zZm9ybWVycy5iZXppZXIpKDAsIHgxLCB4MiwgMSk7XG4gIHZhciB5QmV6aWVyID0gKDAsIF90cmFuc2Zvcm1lcnMuYmV6aWVyKSgwLCB5MSwgeTIsIDEpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB5QmV6aWVyKHhCZXppZXIodCkpO1xuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZaV0Z6YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiSWtSRlJrRlZURlJmVDFaRlVsTklUMDlVWDFOVVVrVk9SMVJJSWl3aVkzSmxZWFJsVW1WMlpYSnpaV1JGWVhOcGJtY2lMQ0psWVhOcGJtY2lMQ0p3SWl3aVkzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY2lMQ0pzYVc1bFlYSWlMQ0pqY21WaGRHVkZlSEJ2U1c0aUxDSndiM2RsY2lJc0ltVmhjMlZKYmlJc0ltVmhjMlZQZFhRaUxDSmxZWE5sU1c1UGRYUWlMQ0pqYVhKalNXNGlMQ0pOWVhSb0lpd2ljMmx1SWl3aVlXTnZjeUlzSW1OcGNtTlBkWFFpTENKamFYSmpTVzVQZFhRaUxDSmpjbVZoZEdWQ1lXTnJTVzRpTENKaVlXTnJTVzRpTENKaVlXTnJUM1YwSWl3aVltRmphMGx1VDNWMElpd2lZM0psWVhSbFFXNTBhV05wY0dGMFpVVmhjMmx1WnlJc0ltSmhZMnRGWVhOcGJtY2lMQ0p3YjNjaUxDSmhiblJwWTJsd1lYUmxJaXdpWTNWaWFXTkNaWHBwWlhJaUxDSjRNU0lzSW5reElpd2llRElpTENKNU1pSXNJbmhDWlhwcFpYSWlMQ0o1UW1WNmFXVnlJaXdpZENKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN1FVRkJRVHM3UVVGRlFTeEpRVUZOUVN3MlFrRkJOa0lzUzBGQmJrTTdPMEZCUlU4c1NVRkJUVU1zYzBSQlFYVkNMRlZCUVVORExFMUJRVVE3UVVGQlFTeFRRVUZaTEZWQlFVTkRMRU5CUVVRN1FVRkJRU3hYUVVGUExFbEJRVWxFTEU5QlFVOHNTVUZCU1VNc1EwRkJXQ3hEUVVGWU8wRkJRVUVzUjBGQldqdEJRVUZCTEVOQlFUZENPMEZCUTBFc1NVRkJUVU1zYzBSQlFYVkNMRlZCUVVOR0xFMUJRVVE3UVVGQlFTeFRRVUZaTEZWQlFVTkRMRU5CUVVRN1FVRkJRU3hYUVVGUlFTeExRVUZMTEVkQlFVNHNSMEZCWVVRc1QwRkJUeXhKUVVGSlF5eERRVUZZTEVsQlFXZENMRU5CUVRkQ0xFZEJRV2xETEVOQlFVTXNTVUZCU1VRc1QwRkJUeXhMUVVGTExFbEJRVWxETEVOQlFWUXNRMEZCVUN4RFFVRk1MRWxCUVRSQ0xFTkJRWEJGTzBGQlFVRXNSMEZCV2p0QlFVRkJMRU5CUVRkQ096dEJRVVZCTEVsQlFVMUZMREJDUVVGVExGVkJRVU5HTEVOQlFVUTdRVUZCUVN4VFFVRlBRU3hEUVVGUU8wRkJRVUVzUTBGQlpqczdRVUZGUVN4SlFVRk5SeXh6UTBGQlpTeFZRVUZEUXl4TFFVRkVPMEZCUVVFc1UwRkJWeXhWUVVGRFNpeERRVUZFTzBGQlFVRXNiMEpCUVU5QkxFTkJRVkFzUlVGQldVa3NTMEZCV2p0QlFVRkJMRWRCUVZnN1FVRkJRU3hEUVVGeVFqdEJRVU5CTEVsQlFVMURMREJDUVVGVFJpeGhRVUZoTEVOQlFXSXNRMEZCWmp0QlFVTkJMRWxCUVUxSExEUkNRVUZWVWl4eFFrRkJjVUpQTEUxQlFYSkNMRU5CUVdoQ08wRkJRMEVzU1VGQlRVVXNaME5CUVZsT0xIRkNRVUZ4UWtrc1RVRkJja0lzUTBGQmJFSTdPMEZCUlVFc1NVRkJUVWNzTUVKQlFWTXNWVUZCUTFJc1EwRkJSRHRCUVVGQkxGTkJRVThzU1VGQlNWTXNTMEZCUzBNc1IwRkJUQ3hEUVVGVFJDeExRVUZMUlN4SlFVRk1MRU5CUVZWWUxFTkJRVllzUTBGQlZDeERRVUZZTzBGQlFVRXNRMEZCWmp0QlFVTkJMRWxCUVUxWkxEUkNRVUZWWkN4eFFrRkJjVUpWTEUxQlFYSkNMRU5CUVdoQ08wRkJRMEVzU1VGQlRVc3NaME5CUVZsYUxIRkNRVUZ4UWxjc1QwRkJja0lzUTBGQmJFSTdPMEZCUlVFc1NVRkJUVVVzYzBOQlFXVXNWVUZCUTFZc1MwRkJSRHRCUVVGQkxGTkJRVmNzVlVGQlEwb3NRMEZCUkR0QlFVRkJMRmRCUVZGQkxFbEJRVWxCTEVOQlFVd3NTVUZCVnl4RFFVRkRTU3hSUVVGUkxFTkJRVlFzU1VGQlkwb3NRMEZCWkN4SFFVRnJRa2tzUzBGQk4wSXNRMEZCVUR0QlFVRkJMRWRCUVZnN1FVRkJRU3hEUVVGeVFqdEJRVU5CTEVsQlFVMVhMREJDUVVGVFJDeGhRVUZoYWtJc01FSkJRV0lzUTBGQlpqdEJRVU5CTEVsQlFVMXRRaXcwUWtGQlZXeENMSEZDUVVGeFFtbENMRTFCUVhKQ0xFTkJRV2hDTzBGQlEwRXNTVUZCVFVVc1owTkJRVmxvUWl4eFFrRkJjVUpqTEUxQlFYSkNMRU5CUVd4Q096dEJRVVZCTEVsQlFVMUhMREJFUVVGNVFpeFZRVUZEWkN4TFFVRkVMRVZCUVZjN1FVRkRMME1zVFVGQlRXVXNZVUZCWVV3c1lVRkJZVllzUzBGQllpeERRVUZ1UWp0QlFVTkJMRk5CUVU4c1ZVRkJRMG9zUTBGQlJEdEJRVUZCTEZkQlFWRXNRMEZCUTBFc1MwRkJTeXhEUVVGT0xFbEJRVmNzUTBGQldpeEhRVUZwUWl4TlFVRk5iVUlzVjBGQlYyNUNMRU5CUVZnc1EwRkJka0lzUjBGQmRVTXNUMEZCVHl4SlFVRkpVeXhMUVVGTFZ5eEhRVUZNTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVVNc1JVRkJSQ3hKUVVGUGNFSXNTVUZCU1N4RFFVRllMRU5CUVZvc1EwRkJXQ3hEUVVFNVF6dEJRVUZCTEVkQlFWQTdRVUZEUkN4RFFVaE5PenRCUVV0QkxFbEJRVTF4UWl4clEwRkJZVWdzZFVKQlFYVkNja0lzTUVKQlFYWkNMRU5CUVc1Q096dEJRVVZCTEVsQlFVMTVRaXh2UTBGQll5eFZRVUZEUXl4RlFVRkVMRVZCUVV0RExFVkJRVXdzUlVGQlUwTXNSVUZCVkN4RlFVRmhReXhGUVVGaUxFVkJRVzlDTzBGQlF6ZERMRTFCUVUxRExGVkJRVlVzTUVKQlFVOHNRMEZCVUN4RlFVRlZTaXhGUVVGV0xFVkJRV05GTEVWQlFXUXNSVUZCYTBJc1EwRkJiRUlzUTBGQmFFSTdRVUZEUVN4TlFVRk5SeXhWUVVGVkxEQkNRVUZQTEVOQlFWQXNSVUZCVlVvc1JVRkJWaXhGUVVGalJTeEZRVUZrTEVWQlFXdENMRU5CUVd4Q0xFTkJRV2hDT3p0QlFVVkJMRk5CUVU4c1ZVRkJRMGNzUTBGQlJEdEJRVUZCTEZkQlFVOUVMRkZCUVZGRUxGRkJRVkZGTEVOQlFWSXNRMEZCVWl4RFFVRlFPMEZCUVVFc1IwRkJVRHRCUVVORUxFTkJURTBpTENKbWFXeGxJam9pWldGemFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZbVY2YVdWeUlIMGdabkp2YlNBbkxpOTBjbUZ1YzJadmNtMWxjbk1uTzF4dVhHNWpiMjV6ZENCRVJVWkJWVXhVWDA5V1JWSlRTRTlQVkY5VFZGSkZUa2RVU0NBOUlERXVOVEkxTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxVbVYyWlhKelpXUkZZWE5wYm1jZ1BTQW9aV0Z6YVc1bktTQTlQaUFvY0NrZ1BUNGdNU0F0SUdWaGMybHVaeWd4SUMwZ2NDazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY2dQU0FvWldGemFXNW5LU0E5UGlBb2NDa2dQVDRnS0hBZ1BEMGdNQzQxS1NBL0lHVmhjMmx1WnlneUlDb2djQ2tnTHlBeUlEb2dLRElnTFNCbFlYTnBibWNvTWlBcUlDZ3hJQzBnY0NrcEtTQXZJREk3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JzYVc1bFlYSWdQU0FvY0NrZ1BUNGdjRHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR055WldGMFpVVjRjRzlKYmlBOUlDaHdiM2RsY2lrZ1BUNGdLSEFwSUQwK0lIQWdLaW9nY0c5M1pYSTdYRzVsZUhCdmNuUWdZMjl1YzNRZ1pXRnpaVWx1SUQwZ1kzSmxZWFJsUlhod2IwbHVLRElwTzF4dVpYaHdiM0owSUdOdmJuTjBJR1ZoYzJWUGRYUWdQU0JqY21WaGRHVlNaWFpsY25ObFpFVmhjMmx1WnlobFlYTmxTVzRwTzF4dVpYaHdiM0owSUdOdmJuTjBJR1ZoYzJWSmJrOTFkQ0E5SUdOeVpXRjBaVTFwY25KdmNtVmtSV0Z6YVc1bktHVmhjMlZKYmlrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamFYSmpTVzRnUFNBb2NDa2dQVDRnTVNBdElFMWhkR2d1YzJsdUtFMWhkR2d1WVdOdmN5aHdLU2s3WEc1bGVIQnZjblFnWTI5dWMzUWdZMmx5WTA5MWRDQTlJR055WldGMFpWSmxkbVZ5YzJWa1JXRnphVzVuS0dOcGNtTkpiaWs3WEc1bGVIQnZjblFnWTI5dWMzUWdZMmx5WTBsdVQzVjBJRDBnWTNKbFlYUmxUV2x5Y205eVpXUkZZWE5wYm1jb1kybHlZMDkxZENrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZDWVdOclNXNGdQU0FvY0c5M1pYSXBJRDArSUNod0tTQTlQaUFvY0NBcUlIQXBJQ29nS0Nod2IzZGxjaUFySURFcElDb2djQ0F0SUhCdmQyVnlLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmlZV05yU1c0Z1BTQmpjbVZoZEdWQ1lXTnJTVzRvUkVWR1FWVk1WRjlQVmtWU1UwaFBUMVJmVTFSU1JVNUhWRWdwTzF4dVpYaHdiM0owSUdOdmJuTjBJR0poWTJ0UGRYUWdQU0JqY21WaGRHVlNaWFpsY25ObFpFVmhjMmx1WnloaVlXTnJTVzRwTzF4dVpYaHdiM0owSUdOdmJuTjBJR0poWTJ0SmJrOTFkQ0E5SUdOeVpXRjBaVTFwY25KdmNtVmtSV0Z6YVc1bktHSmhZMnRKYmlrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZCYm5ScFkybHdZWFJsUldGemFXNW5JRDBnS0hCdmQyVnlLU0E5UGlCN1hHNGdJR052Ym5OMElHSmhZMnRGWVhOcGJtY2dQU0JqY21WaGRHVkNZV05yU1c0b2NHOTNaWElwTzF4dUlDQnlaWFIxY200Z0tIQXBJRDArSUNnb2NDQXFQU0F5S1NBOElERXBJRDhnTUM0MUlDb2dZbUZqYTBWaGMybHVaeWh3S1NBNklEQXVOU0FxSUNneUlDMGdUV0YwYUM1d2IzY29NaXdnTFRFd0lDb2dLSEFnTFNBeEtTa3BPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdGdWRHbGphWEJoZEdVZ1BTQmpjbVZoZEdWQmJuUnBZMmx3WVhSbFJXRnphVzVuS0VSRlJrRlZURlJmVDFaRlVsTklUMDlVWDFOVVVrVk9SMVJJS1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOMVltbGpRbVY2YVdWeUlEMGdLSGd4TENCNU1Td2dlRElzSUhreUtTQTlQaUI3WEc0Z0lHTnZibk4wSUhoQ1pYcHBaWElnUFNCaVpYcHBaWElvTUN3Z2VERXNJSGd5TENBeEtUdGNiaUFnWTI5dWMzUWdlVUpsZW1sbGNpQTlJR0psZW1sbGNpZ3dMQ0I1TVN3Z2VUSXNJREVwTzF4dVhHNGdJSEpsZEhWeWJpQW9kQ2tnUFQ0Z2VVSmxlbWxsY2loNFFtVjZhV1Z5S0hRcEtUdGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9lYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmJlemllciA9IGV4cG9ydHMuYmxlbmRDb2xvciA9IGV4cG9ydHMuYWxwaGEgPSBleHBvcnRzLmNvbG9yID0gZXhwb3J0cy5oc2xhID0gZXhwb3J0cy5yZ2JhID0gZXhwb3J0cy5yZ2JVbml0ID0gZXhwb3J0cy5weCA9IGV4cG9ydHMuZGVncmVlcyA9IGV4cG9ydHMucGVyY2VudCA9IGV4cG9ydHMudHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSBleHBvcnRzLnN0ZXBzID0gZXhwb3J0cy5zbW9vdGggPSBleHBvcnRzLndyYXAgPSBleHBvcnRzLm5vbmxpbmVhclNwcmluZyA9IGV4cG9ydHMuc3ByaW5nID0gZXhwb3J0cy5nZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gZXhwb3J0cy5tdWx0aXBseSA9IGV4cG9ydHMuZGl2aWRlID0gZXhwb3J0cy5hZGQgPSBleHBvcnRzLnN1YnRyYWN0ID0gZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGV4cG9ydHMuZmxvdyA9IGV4cG9ydHMuY29uZGl0aW9uYWwgPSBleHBvcnRzLmNsYW1wID0gZXhwb3J0cy5jbGFtcE1pbiA9IGV4cG9ydHMuY2xhbXBNYXggPSBleHBvcnRzLmFwcGx5T2Zmc2V0ID0gZXhwb3J0cy5hcHBlbmRVbml0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuL2NhbGMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF9wYXJzZXJzID0gcmVxdWlyZSgnLi9wYXJzZXJzJyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBub29wID0gZnVuY3Rpb24gKHYpIHtcbiAgcmV0dXJuIHY7XG59O1xuXG4vKipcbiAqIEFwcGVuZCBVbml0XG4gKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBhcHBlbmRcbiAqIGFwcGVuZFVuaXQoJ3B4JywgMjApIC0+ICcyMHB4J1xuICogQHBhcmFtICB7c3RyaW5nfSB1bml0KVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgYXBwZW5kVW5pdCA9IGV4cG9ydHMuYXBwZW5kVW5pdCA9IGZ1bmN0aW9uICh1bml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiAnJyArIHYgKyB1bml0O1xuICB9O1xufTtcblxuLyoqXG4gKiBBcHBseSBvZmZzZXRcbiAqIEEgZnVuY3Rpb24gdGhhdCwgZ2l2ZW4gYSB2YWx1ZSwgd2lsbCBnZXQgdGhlIG9mZnNldCBmcm9tIGBmcm9tYFxuICogYW5kIGFwcGx5IGl0IHRvIGB0b2BcbiAqIEBwYXJhbSAge251bWJlcn0gZnJvbVxuICogQHBhcmFtICB7bnVtYmVyfSB0b1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbnZhciBhcHBseU9mZnNldCA9IGV4cG9ydHMuYXBwbHlPZmZzZXQgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgdmFyIGdldE9mZnNldCA9IHN1YnRyYWN0KGZyb20pO1xuICB2YXIgYXBwbHlPZmZzZXRUbyA9IGFkZCh0byk7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBhcHBseU9mZnNldFRvKGdldE9mZnNldCh2KSk7XG4gIH07XG59O1xuXG4vKipcbiAqIENsYW1wIHZhbHVlIGJldHdlZW5cbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVzdHJpY3QgYSBnaXZlbiB2YWx1ZSBiZXR3ZWVuIGBtaW5gIGFuZCBgbWF4YFxuICogQHBhcmFtICB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBjbGFtcE1heCA9IGV4cG9ydHMuY2xhbXBNYXggPSBmdW5jdGlvbiAobWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBNYXRoLm1pbih2LCBtYXgpO1xuICB9O1xufTtcbnZhciBjbGFtcE1pbiA9IGV4cG9ydHMuY2xhbXBNaW4gPSBmdW5jdGlvbiAobWluKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBNYXRoLm1heCh2LCBtaW4pO1xuICB9O1xufTtcbnZhciBjbGFtcCA9IGV4cG9ydHMuY2xhbXAgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgdmFyIF9taW4gPSBjbGFtcE1pbihtaW4pO1xuICB2YXIgX21heCA9IGNsYW1wTWF4KG1heCk7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBfbWluKF9tYXgodikpO1xuICB9O1xufTtcblxudmFyIGNvbmRpdGlvbmFsID0gZXhwb3J0cy5jb25kaXRpb25hbCA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGlmVHJ1ZSkge1xuICB2YXIgaWZGYWxzZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IG5vb3AgOiBhcmd1bWVudHNbMl07XG4gIHJldHVybiBmdW5jdGlvbiAodiwgYWN0aW9uKSB7XG4gICAgcmV0dXJuIGNvbmRpdGlvbih2LCBhY3Rpb24pID8gaWZUcnVlKHYsIGFjdGlvbikgOiBpZkZhbHNlKHYsIGFjdGlvbik7XG4gIH07XG59O1xuXG4vKipcbiAqIEZsb3dcbiAqIENvbXBvc2Ugb3RoZXIgdHJhbnNmb3JtZXJzIHRvIHJ1biBsaW5lYXJpbHlcbiAqIGZsb3cobWluKDIwKSwgbWF4KDQwKSlcbiAqIEBwYXJhbSAgey4uLmZ1bmN0aW9uc30gdHJhbnNmb3JtZXJzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xudmFyIGZsb3cgPSBleHBvcnRzLmZsb3cgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB0cmFuc2Zvcm1lcnMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB0cmFuc2Zvcm1lcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoYWNjKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgdiA9IGFjYztcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0uYXBwbHkodHJhbnNmb3JtZXJzLCBbdl0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG5cbi8qKlxuICogSW50ZXJwb2xhdGUgZnJvbSBzZXQgb2YgdmFsdWVzIHRvIGFub3RoZXJcbiAqIEBwYXJhbSAge0FycmF5fSBpbnB1dCBhcnJheVxuICogQHBhcmFtICB7QXJyYXl9IG91dHB1dFxuICogQHBhcmFtICB7RnVuY3Rpb259IHJhbmdlRWFzaW5nXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xudmFyIGludGVycG9sYXRlID0gZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykge1xuICB2YXIgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIHZhciBmaW5hbEluZGV4ID0gcmFuZ2VMZW5ndGggLSAxO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgdmFyIGkgPSAxO1xuXG4gICAgLy8gRmluZCBpbmRleCBvZiByYW5nZSBzdGFydFxuICAgIGZvciAoOyBpIDwgcmFuZ2VMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlucHV0W2ldID4gdiB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9ncmVzc0luUmFuZ2UgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGlucHV0W2kgLSAxXSwgaW5wdXRbaV0sIHYpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gcmFuZ2VFYXNpbmcgPyByYW5nZUVhc2luZ1tpIC0gMV0ocHJvZ3Jlc3NJblJhbmdlKSA6IHByb2dyZXNzSW5SYW5nZTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShvdXRwdXRbaSAtIDFdLCBvdXRwdXRbaV0sIGVhc2VkUHJvZ3Jlc3MpO1xuICB9O1xufTtcblxudmFyIHN1YnRyYWN0ID0gZXhwb3J0cy5zdWJ0cmFjdCA9IGZ1bmN0aW9uIChvcmlnaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYgLSBvcmlnaW47XG4gIH07XG59O1xudmFyIGFkZCA9IGV4cG9ydHMuYWRkID0gZnVuY3Rpb24gKG9yaWdpbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdiArIG9yaWdpbjtcbiAgfTtcbn07XG52YXIgZGl2aWRlID0gZXhwb3J0cy5kaXZpZGUgPSBmdW5jdGlvbiAob3JpZ2luKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2IC8gb3JpZ2luO1xuICB9O1xufTtcbnZhciBtdWx0aXBseSA9IGV4cG9ydHMubXVsdGlwbHkgPSBmdW5jdGlvbiAob3JpZ2luKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2ICogb3JpZ2luO1xuICB9O1xufTtcblxudmFyIGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcgPSBleHBvcnRzLmdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhbHRlckRpc3BsYWNlbWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IG5vb3AgOiBhcmd1bWVudHNbMF07XG4gIHJldHVybiBmdW5jdGlvbiAoY29uc3RhbnQsIG9yaWdpbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgdmFyIGRpc3BsYWNlbWVudCA9IG9yaWdpbiAtIHY7XG4gICAgICB2YXIgc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQgPSAtY29uc3RhbnQgKiAoMCAtIGFsdGVyRGlzcGxhY2VtZW50KE1hdGguYWJzKGRpc3BsYWNlbWVudCkpKTtcbiAgICAgIHJldHVybiBkaXNwbGFjZW1lbnQgPD0gMCA/IG9yaWdpbiArIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50IDogb3JpZ2luIC0gc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQ7XG4gICAgfTtcbiAgfTtcbn07XG5cbnZhciBzcHJpbmcgPSBleHBvcnRzLnNwcmluZyA9IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcoKTtcbnZhciBub25saW5lYXJTcHJpbmcgPSBleHBvcnRzLm5vbmxpbmVhclNwcmluZyA9IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcoTWF0aC5zcXJ0KTtcblxudmFyIHdyYXAgPSBleHBvcnRzLndyYXAgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHJhbmdlU2l6ZSA9IG1heCAtIG1pbjtcbiAgICByZXR1cm4gKCh2IC0gbWluKSAlIHJhbmdlU2l6ZSArIHJhbmdlU2l6ZSkgJSByYW5nZVNpemUgKyBtaW47XG4gIH07XG59O1xuXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdHJlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDUwIDogYXJndW1lbnRzWzBdO1xuXG4gIHZhciBwcmV2aW91c1ZhbHVlID0gMDtcbiAgdmFyIGhhc1Ntb290aGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9IGhhc1Ntb290aGVkID8gcHJldmlvdXNWYWx1ZSA6IHY7XG4gICAgdmFyIG5ld1ZhbHVlID0gKDAsIF9jYWxjLnNtb290aCkoY3VycmVudFZhbHVlLCBwcmV2aW91c1ZhbHVlLCAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCksIHN0cmVuZ3RoKTtcbiAgICBwcmV2aW91c1ZhbHVlID0gbmV3VmFsdWU7XG4gICAgaGFzU21vb3RoZWQgPSB0cnVlO1xuICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgfTtcbn07XG5cbnZhciBzdGVwcyA9IGV4cG9ydHMuc3RlcHMgPSBmdW5jdGlvbiAoc3RlcHMsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciBwcm9ncmVzcyA9ICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkobWluLCBtYXgsIHYpO1xuICAgIHJldHVybiAoMCwgX2NhbGMuc3RlcFByb2dyZXNzKShzdGVwcywgcHJvZ3Jlc3MpO1xuICB9O1xufTtcblxudmFyIHRyYW5zZm9ybUNoaWxkVmFsdWVzID0gZXhwb3J0cy50cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IGZ1bmN0aW9uIChjaGlsZFRyYW5zZm9ybWVycykge1xuICB2YXIgbXV0YWJsZVN0YXRlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGZvciAodmFyIGtleSBpbiB2KSB7XG4gICAgICB2YXIgY2hpbGRUcmFuc2Zvcm1lciA9IGNoaWxkVHJhbnNmb3JtZXJzW2tleV07XG4gICAgICBpZiAoY2hpbGRUcmFuc2Zvcm1lcikge1xuICAgICAgICBtdXRhYmxlU3RhdGVba2V5XSA9IGNoaWxkVHJhbnNmb3JtZXIodltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbXV0YWJsZVN0YXRlO1xuICB9O1xufTtcblxuLy8gVW5pdCB0cmFuc2Zvcm1lcnNcbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0gYXBwZW5kVW5pdCgnJScpO1xudmFyIGRlZ3JlZXMgPSBleHBvcnRzLmRlZ3JlZXMgPSBhcHBlbmRVbml0KCdkZWcnKTtcbnZhciBweCA9IGV4cG9ydHMucHggPSBhcHBlbmRVbml0KCdweCcpO1xuXG52YXIgcmdiVW5pdCA9IGV4cG9ydHMucmdiVW5pdCA9IGZsb3coY2xhbXAoMCwgMjU1KSwgTWF0aC5yb3VuZCk7XG5cbnZhciByZ2JhVGVtcGxhdGUgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgcmVkID0gX3JlZi5yZWQ7XG4gIHZhciBncmVlbiA9IF9yZWYuZ3JlZW47XG4gIHZhciBibHVlID0gX3JlZi5ibHVlO1xuICB2YXIgX3JlZiRhbHBoYSA9IF9yZWYuYWxwaGE7XG4gIHZhciBhbHBoYSA9IF9yZWYkYWxwaGEgPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmJGFscGhhO1xuICByZXR1cm4gJ3JnYmEoJyArIHJlZCArICcsICcgKyBncmVlbiArICcsICcgKyBibHVlICsgJywgJyArIGFscGhhICsgJyknO1xufTtcblxudmFyIHJnYmEgPSBleHBvcnRzLnJnYmEgPSBmbG93KHRyYW5zZm9ybUNoaWxkVmFsdWVzKHtcbiAgcmVkOiByZ2JVbml0LFxuICBncmVlbjogcmdiVW5pdCxcbiAgYmx1ZTogcmdiVW5pdCxcbiAgYWxwaGE6IGFscGhhXG59KSwgcmdiYVRlbXBsYXRlKTtcblxudmFyIGhzbGFUZW1wbGF0ZSA9IGZ1bmN0aW9uIChfcmVmMikge1xuICB2YXIgaHVlID0gX3JlZjIuaHVlO1xuICB2YXIgc2F0dXJhdGlvbiA9IF9yZWYyLnNhdHVyYXRpb247XG4gIHZhciBsaWdodG5lc3MgPSBfcmVmMi5saWdodG5lc3M7XG4gIHZhciBfcmVmMiRhbHBoYSA9IF9yZWYyLmFscGhhO1xuICB2YXIgYWxwaGEgPSBfcmVmMiRhbHBoYSA9PT0gdW5kZWZpbmVkID8gMSA6IF9yZWYyJGFscGhhO1xuICByZXR1cm4gJ2hzbGEoJyArIGh1ZSArICcsICcgKyBzYXR1cmF0aW9uICsgJywgJyArIGxpZ2h0bmVzcyArICcsICcgKyBhbHBoYSArICcpJztcbn07XG5cbnZhciBoc2xhID0gZXhwb3J0cy5oc2xhID0gZmxvdyh0cmFuc2Zvcm1DaGlsZFZhbHVlcyh7XG4gIGh1ZTogcGFyc2VGbG9hdCxcbiAgc2F0dXJhdGlvbjogcGVyY2VudCxcbiAgbGlnaHRuZXNzOiBwZXJjZW50LFxuICBhbHBoYTogYWxwaGFcbn0pLCBoc2xhVGVtcGxhdGUpO1xuXG52YXIgY29sb3IgPSBleHBvcnRzLmNvbG9yID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKHYuaGFzT3duUHJvcGVydHkoJ3JlZCcpKSB7XG4gICAgcmV0dXJuIHJnYmEodik7XG4gIH0gZWxzZSBpZiAodi5oYXNPd25Qcm9wZXJ0eSgnaHVlJykpIHtcbiAgICByZXR1cm4gaHNsYSh2KTtcbiAgfVxuICByZXR1cm4gdjtcbn07XG5cbnZhciBhbHBoYSA9IGV4cG9ydHMuYWxwaGEgPSBjbGFtcCgwLCAxKTtcblxudmFyIGJsZW5kID0gZnVuY3Rpb24gKGZyb20sIHRvLCB2KSB7XG4gIHZhciBmcm9tRXhwbyA9IGZyb20gKiBmcm9tO1xuICB2YXIgdG9FeHBvID0gdG8gKiB0bztcbiAgcmV0dXJuIE1hdGguc3FydCh2ICogKHRvRXhwbyAtIGZyb21FeHBvKSArIGZyb21FeHBvKTtcbn07XG4vLyBodHRwOi8vY29kZXBlbi5pby9vc3VibGFrZS9wZW4veEdWVmFOXG52YXIgYmxlbmRDb2xvciA9IGV4cG9ydHMuYmxlbmRDb2xvciA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICB2YXIgZnJvbUNvbG9yID0gKDAsIF91dGlscy5pc1N0cmluZykoZnJvbSkgPyAoMCwgX3BhcnNlcnMuY29sb3IpKGZyb20pIDogZnJvbTtcbiAgdmFyIHRvQ29sb3IgPSAoMCwgX3V0aWxzLmlzU3RyaW5nKSh0bykgPyAoMCwgX3BhcnNlcnMuY29sb3IpKHRvKSA6IHRvO1xuXG4gIHZhciBibGVuZGVkID0gX2V4dGVuZHMoe30sIGZyb21Db2xvcik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZm9yICh2YXIga2V5IGluIGJsZW5kZWQpIHtcbiAgICAgIGJsZW5kZWRba2V5XSA9IGJsZW5kKGZyb21Db2xvcltrZXldLCB0b0NvbG9yW2tleV0sIHYpO1xuICAgIH1cbiAgICBibGVuZGVkLnJlZCA9IGJsZW5kKGZyb21Db2xvci5yZWQsIHRvQ29sb3IucmVkLCB2KTtcbiAgICBibGVuZGVkLmdyZWVuID0gYmxlbmQoZnJvbUNvbG9yLmdyZWVuLCB0b0NvbG9yLmdyZWVuLCB2KTtcbiAgICBibGVuZGVkLmJsdWUgPSBibGVuZChmcm9tQ29sb3IuYmx1ZSwgdG9Db2xvci5ibHVlLCB2KTtcbiAgICBibGVuZGVkLmFscGhhID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShmcm9tQ29sb3IuYWxwaGEsIHRvQ29sb3IuYWxwaGEsIHYpO1xuICAgIHJldHVybiBibGVuZGVkO1xuICB9O1xufTtcblxuLy8gQmV6aWVyIHJlc29sdmVyXG4vLyBSZWZhY3RvcmVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2h1Z2hzay9iZXppZXIvYmxvYi9tYXN0ZXIvaW5kZXguanNcbi8qKlxuIyMgVGhlIE1JVCBMaWNlbnNlIChNSVQpICMjXG5cbkNvcHlyaWdodCAoYykgMjAxMyBIdWdoIEtlbm5lZHlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuICovXG52YXIgcmVzb2x2ZTMgPSBmdW5jdGlvbiAocG9pbnRzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgIHZhciB1dCA9IDEgLSB0O1xuICAgIHJldHVybiAocG9pbnRzWzBdICogdXQgKyBwb2ludHNbMV0gKiB0KSAqIHV0ICsgKHBvaW50c1sxXSAqIHV0ICsgcG9pbnRzWzJdICogdCkgKiB0O1xuICB9O1xufTtcblxudmFyIHJlc29sdmU0ID0gZnVuY3Rpb24gKHBvaW50cykge1xuICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgdXQgPSAxIC0gdDtcbiAgICB2YXIgYTEgPSBwb2ludHNbMV0gKiB1dCArIHBvaW50c1syXSAqIHQ7XG4gICAgcmV0dXJuICgocG9pbnRzWzBdICogdXQgKyBwb2ludHNbMV0gKiB0KSAqIHV0ICsgYTEgKiB0KSAqIHV0ICsgKGExICogdXQgKyAocG9pbnRzWzJdICogdXQgKyBwb2ludHNbM10gKiB0KSAqIHQpICogdDtcbiAgfTtcbn07XG5cbnZhciBiZXppZXIgPSBleHBvcnRzLmJlemllciA9IGZ1bmN0aW9uIChwb2ludHMpIHtcbiAgcmV0dXJuIHBvaW50cy5sZW5ndGggPT09IDMgPyByZXNvbHZlMyhwb2ludHMpIDogcmVzb2x2ZTQocG9pbnRzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEhKaGJuTm1iM0p0WlhKekxtcHpJbDBzSW01aGJXVnpJanBiSW01dmIzQWlMQ0oySWl3aVlYQndaVzVrVlc1cGRDSXNJblZ1YVhRaUxDSmhjSEJzZVU5bVpuTmxkQ0lzSW1aeWIyMGlMQ0owYnlJc0ltZGxkRTltWm5ObGRDSXNJbk4xWW5SeVlXTjBJaXdpWVhCd2JIbFBabVp6WlhSVWJ5SXNJbUZrWkNJc0ltTnNZVzF3VFdGNElpd2liV0Y0SWl3aVRXRjBhQ0lzSW0xcGJpSXNJbU5zWVcxd1RXbHVJaXdpWTJ4aGJYQWlMQ0pmYldsdUlpd2lYMjFoZUNJc0ltTnZibVJwZEdsdmJtRnNJaXdpWTI5dVpHbDBhVzl1SWl3aWFXWlVjblZsSWl3aWFXWkdZV3h6WlNJc0ltRmpkR2x2YmlJc0ltWnNiM2NpTENKMGNtRnVjMlp2Y20xbGNuTWlMQ0p1ZFcxVWNtRnVjMlp2Y20xbGNuTWlMQ0pzWlc1bmRHZ2lMQ0pwSWl3aVlXTmpJaXdpWVhKbmN5SXNJbWx1ZEdWeWNHOXNZWFJsSWl3aWFXNXdkWFFpTENKdmRYUndkWFFpTENKeVlXNW5aVVZoYzJsdVp5SXNJbkpoYm1kbFRHVnVaM1JvSWl3aVptbHVZV3hKYm1SbGVDSXNJbkJ5YjJkeVpYTnpTVzVTWVc1blpTSXNJbVZoYzJWa1VISnZaM0psYzNNaUxDSnZjbWxuYVc0aUxDSmthWFpwWkdVaUxDSnRkV3gwYVhCc2VTSXNJbWRsYm1WeVlYUmxUbTl1U1c1MFpYSm5jbUYwWldSVGNISnBibWNpTENKaGJIUmxja1JwYzNCc1lXTmxiV1Z1ZENJc0ltTnZibk4wWVc1MElpd2laR2x6Y0d4aFkyVnRaVzUwSWl3aWMzQnlhVzVuVFc5a2FXWnBaV1JFYVhOd2JHRmpaVzFsYm5RaUxDSmhZbk1pTENKemNISnBibWNpTENKdWIyNXNhVzVsWVhKVGNISnBibWNpTENKemNYSjBJaXdpZDNKaGNDSXNJbkpoYm1kbFUybDZaU0lzSW5OdGIyOTBhQ0lzSW5OMGNtVnVaM1JvSWl3aWNISmxkbWx2ZFhOV1lXeDFaU0lzSW1oaGMxTnRiMjkwYUdWa0lpd2lZM1Z5Y21WdWRGWmhiSFZsSWl3aWJtVjNWbUZzZFdVaUxDSnpkR1Z3Y3lJc0luQnliMmR5WlhOeklpd2lkSEpoYm5ObWIzSnRRMmhwYkdSV1lXeDFaWE1pTENKamFHbHNaRlJ5WVc1elptOXliV1Z5Y3lJc0ltMTFkR0ZpYkdWVGRHRjBaU0lzSW10bGVTSXNJbU5vYVd4a1ZISmhibk5tYjNKdFpYSWlMQ0p3WlhKalpXNTBJaXdpWkdWbmNtVmxjeUlzSW5CNElpd2ljbWRpVlc1cGRDSXNJbkp2ZFc1a0lpd2ljbWRpWVZSbGJYQnNZWFJsSWl3aWNtVmtJaXdpWjNKbFpXNGlMQ0ppYkhWbElpd2lZV3h3YUdFaUxDSnlaMkpoSWl3aWFITnNZVlJsYlhCc1lYUmxJaXdpYUhWbElpd2ljMkYwZFhKaGRHbHZiaUlzSW14cFoyaDBibVZ6Y3lJc0ltaHpiR0VpTENKd1lYSnpaVVpzYjJGMElpd2lZMjlzYjNJaUxDSm9ZWE5QZDI1UWNtOXdaWEowZVNJc0ltSnNaVzVrSWl3aVpuSnZiVVY0Y0c4aUxDSjBiMFY0Y0c4aUxDSmliR1Z1WkVOdmJHOXlJaXdpWm5KdmJVTnZiRzl5SWl3aWRHOURiMnh2Y2lJc0ltSnNaVzVrWldRaUxDSnlaWE52YkhabE15SXNJbkJ2YVc1MGN5SXNJblFpTENKMWRDSXNJbkpsYzI5c2RtVTBJaXdpWVRFaUxDSmlaWHBwWlhJaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdRVUZCUVRzN1FVRkRRVHM3UVVGRFFUczdRVUZEUVRzN1FVRkZRU3hKUVVGTlFTeFBRVUZQTEZWQlFVTkRMRU5CUVVRN1FVRkJRU3hUUVVGUFFTeERRVUZRTzBGQlFVRXNRMEZCWWpzN1FVRkZRVHM3T3pzN096dEJRVTlQTEVsQlFVMURMR3REUVVGaExGVkJRVU5ETEVsQlFVUTdRVUZCUVN4VFFVRlZMRlZCUVVOR0xFTkJRVVE3UVVGQlFTeG5Ra0ZCVlVFc1EwRkJWaXhIUVVGalJTeEpRVUZrTzBGQlFVRXNSMEZCVmp0QlFVRkJMRU5CUVc1Q096dEJRVVZRT3pzN096czdPenRCUVZGUExFbEJRVTFETEc5RFFVRmpMRlZCUVVORExFbEJRVVFzUlVGQlQwTXNSVUZCVUN4RlFVRmpPMEZCUTNaRExFMUJRVTFETEZsQlFWbERMRk5CUVZOSUxFbEJRVlFzUTBGQmJFSTdRVUZEUVN4TlFVRk5TU3huUWtGQlowSkRMRWxCUVVsS0xFVkJRVW9zUTBGQmRFSTdRVUZEUVN4VFFVRlBMRlZCUVVOTUxFTkJRVVE3UVVGQlFTeFhRVUZQVVN4alFVRmpSaXhWUVVGVlRpeERRVUZXTEVOQlFXUXNRMEZCVUR0QlFVRkJMRWRCUVZBN1FVRkRSQ3hEUVVwTk96dEJRVTFRT3pzN096czdPMEZCVDA4c1NVRkJUVlVzT0VKQlFWY3NWVUZCUTBNc1IwRkJSRHRCUVVGQkxGTkJRVk1zVlVGQlExZ3NRMEZCUkR0QlFVRkJMRmRCUVU5WkxFdEJRVXRETEVkQlFVd3NRMEZCVTJJc1EwRkJWQ3hGUVVGWlZ5eEhRVUZhTEVOQlFWQTdRVUZCUVN4SFFVRlVPMEZCUVVFc1EwRkJha0k3UVVGRFFTeEpRVUZOUnl3NFFrRkJWeXhWUVVGRFJDeEhRVUZFTzBGQlFVRXNVMEZCVXl4VlFVRkRZaXhEUVVGRU8wRkJRVUVzVjBGQlQxa3NTMEZCUzBRc1IwRkJUQ3hEUVVGVFdDeERRVUZVTEVWQlFWbGhMRWRCUVZvc1EwRkJVRHRCUVVGQkxFZEJRVlE3UVVGQlFTeERRVUZxUWp0QlFVTkJMRWxCUVUxRkxIZENRVUZSTEZWQlFVTkdMRWRCUVVRc1JVRkJUVVlzUjBGQlRpeEZRVUZqTzBGQlEycERMRTFCUVUxTExFOUJRVTlHTEZOQlFWTkVMRWRCUVZRc1EwRkJZanRCUVVOQkxFMUJRVTFKTEU5QlFVOVFMRk5CUVZORExFZEJRVlFzUTBGQllqdEJRVU5CTEZOQlFVOHNWVUZCUTFnc1EwRkJSRHRCUVVGQkxGZEJRVTluUWl4TFFVRkxReXhMUVVGTGFrSXNRMEZCVEN4RFFVRk1MRU5CUVZBN1FVRkJRU3hIUVVGUU8wRkJRMFFzUTBGS1RUczdRVUZOUVN4SlFVRk5hMElzYjBOQlFXTXNWVUZCUTBNc1UwRkJSQ3hGUVVGWlF5eE5RVUZhTzBGQlFVRXNUVUZCYjBKRExFOUJRWEJDTEhsRVFVRTRRblJDTEVsQlFUbENPMEZCUVVFc1UwRkJkVU1zVlVGQlEwTXNRMEZCUkN4RlFVRkpjMElzVFVGQlNpeEZRVUZsTzBGQlF5OUZMRmRCUVU5SUxGVkJRVlZ1UWl4RFFVRldMRVZCUVdGelFpeE5RVUZpTEVsQlFYVkNSaXhQUVVGUGNFSXNRMEZCVUN4RlFVRlZjMElzVFVGQlZpeERRVUYyUWl4SFFVRXlRMFFzVVVGQlVYSkNMRU5CUVZJc1JVRkJWM05DTEUxQlFWZ3NRMEZCYkVRN1FVRkRSQ3hIUVVZd1FqdEJRVUZCTEVOQlFYQkNPenRCUVVsUU96czdPenM3TzBGQlQwOHNTVUZCVFVNc2MwSkJRVThzV1VGQmNVSTdRVUZCUVN4dlEwRkJha0pETEZsQlFXbENPMEZCUVdwQ1FTeG5Ra0ZCYVVJN1FVRkJRVHM3UVVGRGRrTXNUVUZCVFVNc2EwSkJRV3RDUkN4aFFVRmhSU3hOUVVGeVF6dEJRVU5CTEUxQlFVbERMRWxCUVVrc1EwRkJVanM3UVVGRlFTeFRRVUZQTEZWQlFVTkRMRWRCUVVRc1JVRkJhMEk3UVVGQlFTeDFRMEZCVkVNc1NVRkJVenRCUVVGVVFTeFZRVUZUTzBGQlFVRTdPMEZCUTNaQ0xGRkJRVWszUWl4SlFVRkpORUlzUjBGQlVqdEJRVU5CTEZOQlFVdEVMRWxCUVVrc1EwRkJWQ3hGUVVGWlFTeEpRVUZKUml4bFFVRm9RaXhGUVVGcFEwVXNSMEZCYWtNc1JVRkJjME03UVVGRGNFTXpRaXhWUVVGSmQwSXNZVUZCWVVjc1EwRkJZaXgxUWtGQlowSXpRaXhEUVVGb1FpeFRRVUZ6UWpaQ0xFbEJRWFJDTEVWQlFVbzdRVUZEUkRzN1FVRkZSQ3hYUVVGUE4wSXNRMEZCVUR0QlFVTkVMRWRCVUVRN1FVRlJSQ3hEUVZwTk96dEJRV05RT3pzN096czdPMEZCVDA4c1NVRkJUVGhDTEc5RFFVRmpMRlZCUVVORExFdEJRVVFzUlVGQlVVTXNUVUZCVWl4RlFVRm5Ra01zVjBGQmFFSXNSVUZCWjBNN1FVRkRla1FzVFVGQlRVTXNZMEZCWTBnc1RVRkJUVXdzVFVGQk1VSTdRVUZEUVN4TlFVRk5VeXhoUVVGaFJDeGpRVUZqTEVOQlFXcERPenRCUVVWQkxGTkJRVThzVlVGQlEyeERMRU5CUVVRc1JVRkJUenRCUVVOYU8wRkJRMEVzVVVGQlNVRXNTMEZCU3l0Q0xFMUJRVTBzUTBGQlRpeERRVUZVTEVWQlFXMUNPMEZCUTJwQ0xHRkJRVTlETEU5QlFVOHNRMEZCVUN4RFFVRlFPMEZCUTBRN08wRkJSVVE3UVVGRFFTeFJRVUZKYUVNc1MwRkJTeXRDTEUxQlFVMUpMRlZCUVU0c1EwRkJWQ3hGUVVFMFFqdEJRVU14UWl4aFFVRlBTQ3hQUVVGUFJ5eFZRVUZRTEVOQlFWQTdRVUZEUkRzN1FVRkZSQ3hSUVVGSlVpeEpRVUZKTEVOQlFWSTdPMEZCUlVFN1FVRkRRU3hYUVVGUFFTeEpRVUZKVHl4WFFVRllMRVZCUVhkQ1VDeEhRVUY0UWl4RlFVRTJRanRCUVVNelFpeFZRVUZKU1N4TlFVRk5TaXhEUVVGT0xFbEJRVmN6UWl4RFFVRllMRWxCUVdkQ01rSXNUVUZCVFZFc1ZVRkJNVUlzUlVGQmMwTTdRVUZEY0VNN1FVRkRSRHRCUVVOR096dEJRVVZFTEZGQlFVMURMR3RDUVVGclFpeG5RMEZCY1VKTUxFMUJRVTFLTEVsQlFVa3NRMEZCVml4RFFVRnlRaXhGUVVGdFEwa3NUVUZCVFVvc1EwRkJUaXhEUVVGdVF5eEZRVUUyUXpOQ0xFTkJRVGRETEVOQlFYaENPMEZCUTBFc1VVRkJUWEZETEdkQ1FVRnBRa29zVjBGQlJDeEhRVUZuUWtFc1dVRkJXVTRzU1VGQlNTeERRVUZvUWl4RlFVRnRRbE1zWlVGQmJrSXNRMEZCYUVJc1IwRkJjMFJCTEdWQlFUVkZPMEZCUTBFc1YwRkJUeXhuUTBGQmNVSktMRTlCUVU5TUxFbEJRVWtzUTBGQldDeERRVUZ5UWl4RlFVRnZRMHNzVDBGQlQwd3NRMEZCVUN4RFFVRndReXhGUVVFclExVXNZVUZCTDBNc1EwRkJVRHRCUVVORUxFZEJka0pFTzBGQmQwSkVMRU5CTlVKTk96dEJRVGhDUVN4SlFVRk5PVUlzT0VKQlFWY3NWVUZCUXl0Q0xFMUJRVVE3UVVGQlFTeFRRVUZaTEZWQlFVTjBReXhEUVVGRU8wRkJRVUVzVjBGQlQwRXNTVUZCU1hORExFMUJRVmc3UVVGQlFTeEhRVUZhTzBGQlFVRXNRMEZCYWtJN1FVRkRRU3hKUVVGTk4wSXNiMEpCUVUwc1ZVRkJRelpDTEUxQlFVUTdRVUZCUVN4VFFVRlpMRlZCUVVOMFF5eERRVUZFTzBGQlFVRXNWMEZCVDBFc1NVRkJTWE5ETEUxQlFWZzdRVUZCUVN4SFFVRmFPMEZCUVVFc1EwRkJXanRCUVVOQkxFbEJRVTFETERCQ1FVRlRMRlZCUVVORUxFMUJRVVE3UVVGQlFTeFRRVUZaTEZWQlFVTjBReXhEUVVGRU8wRkJRVUVzVjBGQlQwRXNTVUZCU1hORExFMUJRVmc3UVVGQlFTeEhRVUZhTzBGQlFVRXNRMEZCWmp0QlFVTkJMRWxCUVUxRkxEaENRVUZYTEZWQlFVTkdMRTFCUVVRN1FVRkJRU3hUUVVGWkxGVkJRVU4wUXl4RFFVRkVPMEZCUVVFc1YwRkJUMEVzU1VGQlNYTkRMRTFCUVZnN1FVRkJRU3hIUVVGYU8wRkJRVUVzUTBGQmFrSTdPMEZCUlVFc1NVRkJUVWNzYzBWQlFTdENPMEZCUVVFc1RVRkJRME1zYVVKQlFVUXNlVVJCUVhGQ00wTXNTVUZCY2tJN1FVRkJRU3hUUVVFNFFpeFZRVUZETkVNc1VVRkJSQ3hGUVVGWFRDeE5RVUZZTzBGQlFVRXNWMEZCYzBJc1ZVRkJRM1JETEVOQlFVUXNSVUZCVHp0QlFVTnlSeXhWUVVGTk5FTXNaVUZCWlU0c1UwRkJVM1JETEVOQlFUbENPMEZCUTBFc1ZVRkJUVFpETERaQ1FVRTJRaXhEUVVGRlJpeFJRVUZHTEVsQlFXTXNTVUZCU1VRc2EwSkJRV3RDT1VJc1MwRkJTMnRETEVkQlFVd3NRMEZCVTBZc1dVRkJWQ3hEUVVGc1FpeERRVUZzUWl4RFFVRnVRenRCUVVOQkxHRkJRVkZCTEdkQ1FVRm5RaXhEUVVGcVFpeEhRVUZ6UWs0c1UwRkJVMDhzTUVKQlFTOUNMRWRCUVRSRVVDeFRRVUZUVHl3d1FrRkJOVVU3UVVGRFJDeExRVXA1UlR0QlFVRkJMRWRCUVRsQ08wRkJRVUVzUTBGQmNrTTdPMEZCVFVFc1NVRkJUVVVzTUVKQlFWTk9MRGhDUVVGbU8wRkJRMEVzU1VGQlRVOHNORU5CUVd0Q1VDdzJRa0ZCTmtJM1FpeExRVUZMY1VNc1NVRkJiRU1zUTBGQmVFSTdPMEZCUlVFc1NVRkJUVU1zYzBKQlFVOHNWVUZCUTNKRExFZEJRVVFzUlVGQlRVWXNSMEZCVGp0QlFVRkJMRk5CUVdNc1ZVRkJRMWdzUTBGQlJDeEZRVUZQTzBGQlEzWkRMRkZCUVUxdFJDeFpRVUZaZUVNc1RVRkJUVVVzUjBGQmVFSTdRVUZEUVN4WFFVRlBMRU5CUVVNc1EwRkJRMklzU1VGQlNXRXNSMEZCVEN4SlFVRlpjME1zVTBGQldpeEhRVUYzUWtFc1UwRkJla0lzU1VGQmMwTkJMRk5CUVhSRExFZEJRV3RFZEVNc1IwRkJla1E3UVVGRFJDeEhRVWh0UWp0QlFVRkJMRU5CUVdJN08wRkJTMEVzU1VGQlRYVkRMREJDUVVGVExGbEJRVzFDTzBGQlFVRXNUVUZCYkVKRExGRkJRV3RDTEhsRVFVRlFMRVZCUVU4N08wRkJRM1pETEUxQlFVbERMR2RDUVVGblFpeERRVUZ3UWp0QlFVTkJMRTFCUVVsRExHTkJRV01zUzBGQmJFSTdPMEZCUlVFc1UwRkJUeXhWUVVGRGRrUXNRMEZCUkN4RlFVRlBPMEZCUTFvc1VVRkJUWGRFTEdWQlFXZENSQ3hYUVVGRUxFZEJRV2RDUkN4aFFVRm9RaXhIUVVGblEzUkVMRU5CUVhKRU8wRkJRMEVzVVVGQlRYbEVMRmRCUVZjc2EwSkJRV05FTEZsQlFXUXNSVUZCTkVKR0xHRkJRVFZDTEVWQlFUSkRMRzlEUVVFelF5eEZRVUZwUlVRc1VVRkJha1VzUTBGQmFrSTdRVUZEUVVNc2IwSkJRV2RDUnl4UlFVRm9RanRCUVVOQlJpeHJRa0ZCWXl4SlFVRmtPMEZCUTBFc1YwRkJUMFVzVVVGQlVEdEJRVU5FTEVkQlRrUTdRVUZQUkN4RFFWaE5PenRCUVdGQkxFbEJRVTFETEhkQ1FVRlJMRlZCUVVOQkxFdEJRVVFzUlVGQlVUZERMRWRCUVZJc1JVRkJZVVlzUjBGQllqdEJRVUZCTEZOQlFYRkNMRlZCUVVOWUxFTkJRVVFzUlVGQlR6dEJRVU12UXl4UlFVRk5Na1FzVjBGQlZ5eG5RMEZCY1VJNVF5eEhRVUZ5UWl4RlFVRXdRa1lzUjBGQk1VSXNSVUZCSzBKWUxFTkJRUzlDTEVOQlFXcENPMEZCUTBFc1YwRkJUeXgzUWtGQllUQkVMRXRCUVdJc1JVRkJiMEpETEZGQlFYQkNMRU5CUVZBN1FVRkRSQ3hIUVVodlFqdEJRVUZCTEVOQlFXUTdPMEZCUzBFc1NVRkJUVU1zYzBSQlFYVkNMRlZCUVVORExHbENRVUZFTEVWQlFYVkNPMEZCUTNwRUxFMUJRVTFETEdWQlFXVXNSVUZCY2tJN1FVRkRRU3hUUVVGUExGVkJRVU01UkN4RFFVRkVMRVZCUVU4N1FVRkRXaXhUUVVGTExFbEJRVWtyUkN4SFFVRlVMRWxCUVdkQ0wwUXNRMEZCYUVJc1JVRkJiVUk3UVVGRGFrSXNWVUZCVFdkRkxHMUNRVUZ0UWtnc2EwSkJRV3RDUlN4SFFVRnNRaXhEUVVGNlFqdEJRVU5CTEZWQlFVbERMR2RDUVVGS0xFVkJRWE5DTzBGQlEzQkNSaXh4UWtGQllVTXNSMEZCWWl4SlFVRnZRa01zYVVKQlFXbENhRVVzUlVGQlJTdEVMRWRCUVVZc1EwRkJha0lzUTBGQmNFSTdRVUZEUkR0QlFVTkdPenRCUVVWRUxGZEJRVTlFTEZsQlFWQTdRVUZEUkN4SFFWUkVPMEZCVlVRc1EwRmFUVHM3UVVGalVEdEJRVU5QTEVsQlFVMUhMRFJDUVVGVmFFVXNWMEZCVnl4SFFVRllMRU5CUVdoQ08wRkJRMEVzU1VGQlRXbEZMRFJDUVVGVmFrVXNWMEZCVnl4TFFVRllMRU5CUVdoQ08wRkJRMEVzU1VGQlRXdEZMR3RDUVVGTGJFVXNWMEZCVnl4SlFVRllMRU5CUVZnN08wRkJSVUVzU1VGQlRXMUZMRFJDUVVGVk4wTXNTMEZEY2tKU0xFMUJRVTBzUTBGQlRpeEZRVUZUTEVkQlFWUXNRMEZFY1VJc1JVRkZja0pJTEV0QlFVdDVSQ3hMUVVablFpeERRVUZvUWpzN1FVRkxVQ3hKUVVGTlF5eGxRVUZsTzBGQlFVRXNUVUZCUjBNc1IwRkJTQ3hSUVVGSFFTeEhRVUZJTzBGQlFVRXNUVUZCVVVNc1MwRkJVaXhSUVVGUlFTeExRVUZTTzBGQlFVRXNUVUZCWlVNc1NVRkJaaXhSUVVGbFFTeEpRVUZtTzBGQlFVRXNkMEpCUVhGQ1F5eExRVUZ5UWp0QlFVRkJMRTFCUVhGQ1FTeExRVUZ5UWl3NFFrRkJOa0lzUTBGQk4wSTdRVUZCUVN4dFFrRkRXRWdzUjBGRVZ5eFZRVU5JUXl4TFFVUkhMRlZCUTA5RExFbEJSRkFzVlVGRFowSkRMRXRCUkdoQ08wRkJRVUVzUTBGQmNrSTdPMEZCUjA4c1NVRkJUVU1zYzBKQlFVOXdSQ3hMUVVOc1FuRkRMSEZDUVVGeFFqdEJRVU51UWxjc1QwRkJTMGdzVDBGRVl6dEJRVVZ1UWtrc1UwRkJUMG9zVDBGR1dUdEJRVWR1UWtzc1VVRkJUVXdzVDBGSVlUdEJRVWx1UWswN1FVRktiVUlzUTBGQmNrSXNRMEZFYTBJc1JVRlBiRUpLTEZsQlVHdENMRU5CUVdJN08wRkJWVkFzU1VGQlRVMHNaVUZCWlR0QlFVRkJMRTFCUVVkRExFZEJRVWdzVTBGQlIwRXNSMEZCU0R0QlFVRkJMRTFCUVZGRExGVkJRVklzVTBGQlVVRXNWVUZCVWp0QlFVRkJMRTFCUVc5Q1F5eFRRVUZ3UWl4VFFVRnZRa0VzVTBGQmNFSTdRVUZCUVN3d1FrRkJLMEpNTEV0QlFTOUNPMEZCUVVFc1RVRkJLMEpCTEV0QlFTOUNMQ3RDUVVGMVF5eERRVUYyUXp0QlFVRkJMRzFDUVVOWVJ5eEhRVVJYTEZWQlEwaERMRlZCUkVjc1ZVRkRXVU1zVTBGRVdpeFZRVU13UWt3c1MwRkVNVUk3UVVGQlFTeERRVUZ5UWpzN1FVRkhUeXhKUVVGTlRTeHpRa0ZCVDNwRUxFdEJRMnhDY1VNc2NVSkJRWEZDTzBGQlEyNUNhVUlzVDBGQlMwa3NWVUZFWXp0QlFVVnVRa2dzWTBGQldXSXNUMEZHVHp0QlFVZHVRbU1zWVVGQlYyUXNUMEZJVVR0QlFVbHVRbE03UVVGS2JVSXNRMEZCY2tJc1EwRkVhMElzUlVGUGJFSkZMRmxCVUd0Q0xFTkJRV0k3TzBGQlZVRXNTVUZCVFUwc2QwSkJRVkVzVlVGQlEyeEdMRU5CUVVRc1JVRkJUenRCUVVNeFFpeE5RVUZKUVN4RlFVRkZiVVlzWTBGQlJpeERRVUZwUWl4TFFVRnFRaXhEUVVGS0xFVkJRVFpDTzBGQlF6TkNMRmRCUVU5U0xFdEJRVXN6UlN4RFFVRk1MRU5CUVZBN1FVRkRSQ3hIUVVaRUxFMUJSVThzU1VGQlNVRXNSVUZCUlcxR0xHTkJRVVlzUTBGQmFVSXNTMEZCYWtJc1EwRkJTaXhGUVVFMlFqdEJRVU5zUXl4WFFVRlBTQ3hMUVVGTGFFWXNRMEZCVEN4RFFVRlFPMEZCUTBRN1FVRkRSQ3hUUVVGUFFTeERRVUZRTzBGQlEwUXNRMEZRVFRzN1FVRlRRU3hKUVVGTk1FVXNkMEpCUVZFelJDeE5RVUZOTEVOQlFVNHNSVUZCVXl4RFFVRlVMRU5CUVdRN08wRkJSVkFzU1VGQlRYRkZMRkZCUVZFc1ZVRkJRMmhHTEVsQlFVUXNSVUZCVDBNc1JVRkJVQ3hGUVVGWFRDeERRVUZZTEVWQlFXbENPMEZCUXpkQ0xFMUJRVTF4Uml4WFFVRlhha1lzVDBGQlQwRXNTVUZCZUVJN1FVRkRRU3hOUVVGTmEwWXNVMEZCVTJwR0xFdEJRVXRCTEVWQlFYQkNPMEZCUTBFc1UwRkJUMDhzUzBGQlMzRkRMRWxCUVV3c1EwRkJWV3BFTEV0QlFVdHpSaXhUUVVGVFJDeFJRVUZrTEVsQlFUQkNRU3hSUVVGd1F5eERRVUZRTzBGQlEwUXNRMEZLUkR0QlFVdEJPMEZCUTA4c1NVRkJUVVVzYTBOQlFXRXNWVUZCUTI1R0xFbEJRVVFzUlVGQlQwTXNSVUZCVUN4RlFVRmpPMEZCUTNSRExFMUJRVTF0Uml4WlFVRlpMSEZDUVVGVGNFWXNTVUZCVkN4SlFVRnBRaXh2UWtGQlYwRXNTVUZCV0N4RFFVRnFRaXhIUVVGdlEwRXNTVUZCZEVRN1FVRkRRU3hOUVVGTmNVWXNWVUZCVlN4eFFrRkJVM0JHTEVWQlFWUXNTVUZCWlN4dlFrRkJWMEVzUlVGQldDeERRVUZtTEVkQlFTdENRU3hGUVVFdlF6czdRVUZGUVN4TlFVRk5jVVlzZFVKQlFXVkdMRk5CUVdZc1EwRkJUanM3UVVGRlFTeFRRVUZQTEZWQlFVTjRSaXhEUVVGRUxFVkJRVTg3UVVGRFdpeFRRVUZMTEVsQlFVa3JSQ3hIUVVGVUxFbEJRV2RDTWtJc1QwRkJhRUlzUlVGQmVVSTdRVUZEZGtKQkxHTkJRVkV6UWl4SFFVRlNMRWxCUVdWeFFpeE5RVUZOU1N4VlFVRlZla0lzUjBGQlZpeERRVUZPTEVWQlFYTkNNRUlzVVVGQlVURkNMRWRCUVZJc1EwRkJkRUlzUlVGQmIwTXZSQ3hEUVVGd1F5eERRVUZtTzBGQlEwUTdRVUZEUkRCR0xGbEJRVkZ1UWl4SFFVRlNMRWRCUVdOaExFMUJRVTFKTEZWQlFWVnFRaXhIUVVGb1FpeEZRVUZ4UW10Q0xGRkJRVkZzUWl4SFFVRTNRaXhGUVVGclEzWkZMRU5CUVd4RExFTkJRV1E3UVVGRFFUQkdMRmxCUVZGc1FpeExRVUZTTEVkQlFXZENXU3hOUVVGTlNTeFZRVUZWYUVJc1MwRkJhRUlzUlVGQmRVSnBRaXhSUVVGUmFrSXNTMEZCTDBJc1JVRkJjME40UlN4RFFVRjBReXhEUVVGb1FqdEJRVU5CTUVZc1dVRkJVV3BDTEVsQlFWSXNSMEZCWlZjc1RVRkJUVWtzVlVGQlZXWXNTVUZCYUVJc1JVRkJjMEpuUWl4UlFVRlJhRUlzU1VGQk9VSXNSVUZCYjBONlJTeERRVUZ3UXl4RFFVRm1PMEZCUTBFd1JpeFpRVUZSYUVJc1MwRkJVaXhIUVVGblFpeG5RMEZCY1VKakxGVkJRVlZrTEV0QlFTOUNMRVZCUVhORFpTeFJRVUZSWml4TFFVRTVReXhGUVVGeFJERkZMRU5CUVhKRUxFTkJRV2hDTzBGQlEwRXNWMEZCVHpCR0xFOUJRVkE3UVVGRFJDeEhRVlJFTzBGQlZVUXNRMEZvUWswN08wRkJhMEpRTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUYxUWtFc1NVRkJUVU1zVjBGQlZ5eFZRVUZEUXl4TlFVRkVPMEZCUVVFc1UwRkJXU3hWUVVGRFF5eERRVUZFTEVWQlFVODdRVUZEYkVNc1VVRkJUVU1zUzBGQlN5eEpRVUZKUkN4RFFVRm1PMEZCUTBFc1YwRkJUeXhEUVVGRFJDeFBRVUZQTEVOQlFWQXNTVUZCV1VVc1JVRkJXaXhIUVVGcFFrWXNUMEZCVHl4RFFVRlFMRWxCUVZsRExFTkJRVGxDTEVsQlFXMURReXhGUVVGdVF5eEhRVUYzUXl4RFFVRkRSaXhQUVVGUExFTkJRVkFzU1VGQldVVXNSVUZCV2l4SFFVRnBRa1lzVDBGQlR5eERRVUZRTEVsQlFWbERMRU5CUVRsQ0xFbEJRVzFEUVN4RFFVRnNSanRCUVVORUxFZEJTR2RDTzBGQlFVRXNRMEZCYWtJN08wRkJTMEVzU1VGQlRVVXNWMEZCVnl4VlFVRkRTQ3hOUVVGRU8wRkJRVUVzVTBGQldTeFZRVUZEUXl4RFFVRkVMRVZCUVU4N1FVRkRiRU1zVVVGQlRVTXNTMEZCU3l4SlFVRkpSQ3hEUVVGbU8wRkJRMEVzVVVGQlRVY3NTMEZCUzBvc1QwRkJUeXhEUVVGUUxFbEJRVmxGTEVWQlFWb3NSMEZCYVVKR0xFOUJRVThzUTBGQlVDeEpRVUZaUXl4RFFVRjRRenRCUVVOQkxGZEJRVThzUTBGQlF5eERRVUZEUkN4UFFVRlBMRU5CUVZBc1NVRkJXVVVzUlVGQldpeEhRVUZwUWtZc1QwRkJUeXhEUVVGUUxFbEJRVmxETEVOQlFUbENMRWxCUVcxRFF5eEZRVUZ1UXl4SFFVRjNRMFVzUzBGQlMwZ3NRMEZCT1VNc1NVRkJiVVJETEVWQlFXNUVMRWRCUVhkRUxFTkJRVU5GTEV0QlFVdEdMRVZCUVV3c1IwRkJWU3hEUVVGRFJpeFBRVUZQTEVOQlFWQXNTVUZCV1VVc1JVRkJXaXhIUVVGcFFrWXNUMEZCVHl4RFFVRlFMRWxCUVZsRExFTkJRVGxDTEVsQlFXMURRU3hEUVVFNVF5eEpRVUZ0UkVFc1EwRkJiRWc3UVVGRFJDeEhRVXBuUWp0QlFVRkJMRU5CUVdwQ096dEJRVTFQTEVsQlFVMUpMREJDUVVGVExGVkJRVU5NTEUxQlFVUTdRVUZCUVN4VFFVTnVRa0VzVDBGQlQyeEZMRTFCUVZBc1MwRkJhMElzUTBGQmJrSXNSMEZCZDBKcFJTeFRRVUZUUXl4TlFVRlVMRU5CUVhoQ0xFZEJRVEpEUnl4VFFVRlRTQ3hOUVVGVUxFTkJSSFpDTzBGQlFVRXNRMEZCWmlJc0ltWnBiR1VpT2lKMGNtRnVjMlp2Y20xbGNuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5Qm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU3dnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNc0lITjBaWEJRY205bmNtVnpjeXdnYzIxdmIzUm9JR0Z6SUdOaGJHTlRiVzl2ZEdocGJtY2dmU0JtY205dElDY3VMMk5oYkdNbk8xeHVhVzF3YjNKMElIc2dhWE5UZEhKcGJtY2dmU0JtY205dElDY3VMM1YwYVd4ekp6dGNibWx0Y0c5eWRDQjdJR052Ykc5eUlHRnpJSEJoY25ObFEyOXNiM0lnZlNCbWNtOXRJQ2N1TDNCaGNuTmxjbk1uTzF4dWFXMXdiM0owSUhzZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbElIMGdabkp2YlNBbkxpNHZabkpoYldWemVXNWpKenRjYmx4dVkyOXVjM1FnYm05dmNDQTlJQ2gyS1NBOVBpQjJPMXh1WEc0dktpcGNiaUFxSUVGd2NHVnVaQ0JWYm1sMFhHNGdLaUJCSUdaMWJtTjBhVzl1SUhSb1lYUWdkMmxzYkNCaGNIQmxibVJjYmlBcUlHRndjR1Z1WkZWdWFYUW9KM0I0Snl3Z01qQXBJQzArSUNjeU1IQjRKMXh1SUNvZ1FIQmhjbUZ0SUNCN2MzUnlhVzVuZlNCMWJtbDBLVnh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlZ4dUlDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1lYQndaVzVrVlc1cGRDQTlJQ2gxYm1sMEtTQTlQaUFvZGlrZ1BUNGdZQ1I3ZG4wa2UzVnVhWFI5WUR0Y2JseHVMeW9xWEc0Z0tpQkJjSEJzZVNCdlptWnpaWFJjYmlBcUlFRWdablZ1WTNScGIyNGdkR2hoZEN3Z1oybDJaVzRnWVNCMllXeDFaU3dnZDJsc2JDQm5aWFFnZEdobElHOW1abk5sZENCbWNtOXRJR0JtY205dFlGeHVJQ29nWVc1a0lHRndjR3g1SUdsMElIUnZJR0IwYjJCY2JpQXFJRUJ3WVhKaGJTQWdlMjUxYldKbGNuMGdabkp2YlZ4dUlDb2dRSEJoY21GdElDQjdiblZ0WW1WeWZTQjBiMXh1SUNvZ1FISmxkSFZ5YmlCN1puVnVZM1JwYjI1OVhHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmhjSEJzZVU5bVpuTmxkQ0E5SUNobWNtOXRMQ0IwYnlrZ1BUNGdlMXh1SUNCamIyNXpkQ0JuWlhSUFptWnpaWFFnUFNCemRXSjBjbUZqZENobWNtOXRLVHRjYmlBZ1kyOXVjM1FnWVhCd2JIbFBabVp6WlhSVWJ5QTlJR0ZrWkNoMGJ5azdYRzRnSUhKbGRIVnliaUFvZGlrZ1BUNGdZWEJ3YkhsUFptWnpaWFJVYnloblpYUlBabVp6WlhRb2Rpa3BPMXh1ZlR0Y2JseHVMeW9xWEc0Z0tpQkRiR0Z0Y0NCMllXeDFaU0JpWlhSM1pXVnVYRzRnS2lCRGNtVmhkR1Z6SUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ0IzYVd4c0lISmxjM1J5YVdOMElHRWdaMmwyWlc0Z2RtRnNkV1VnWW1WMGQyVmxiaUJnYldsdVlDQmhibVFnWUcxaGVHQmNiaUFxSUVCd1lYSmhiU0FnZTI1MWJXSmxjbjBnYldsdVhHNGdLaUJBY0dGeVlXMGdJSHR1ZFcxaVpYSjlJRzFoZUZ4dUlDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZWeHVJQ292WEc1bGVIQnZjblFnWTI5dWMzUWdZMnhoYlhCTllYZ2dQU0FvYldGNEtTQTlQaUFvZGlrZ1BUNGdUV0YwYUM1dGFXNG9kaXdnYldGNEtUdGNibVY0Y0c5eWRDQmpiMjV6ZENCamJHRnRjRTFwYmlBOUlDaHRhVzRwSUQwK0lDaDJLU0E5UGlCTllYUm9MbTFoZUNoMkxDQnRhVzRwTzF4dVpYaHdiM0owSUdOdmJuTjBJR05zWVcxd0lEMGdLRzFwYml3Z2JXRjRLU0E5UGlCN1hHNGdJR052Ym5OMElGOXRhVzRnUFNCamJHRnRjRTFwYmlodGFXNHBPMXh1SUNCamIyNXpkQ0JmYldGNElEMGdZMnhoYlhCTllYZ29iV0Y0S1R0Y2JpQWdjbVYwZFhKdUlDaDJLU0E5UGlCZmJXbHVLRjl0WVhnb2Rpa3BPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOdmJtUnBkR2x2Ym1Gc0lEMGdLR052Ym1ScGRHbHZiaXdnYVdaVWNuVmxMQ0JwWmtaaGJITmxJRDBnYm05dmNDa2dQVDRnS0hZc0lHRmpkR2x2YmlrZ1BUNGdlMXh1SUNCeVpYUjFjbTRnWTI5dVpHbDBhVzl1S0hZc0lHRmpkR2x2YmlrZ1B5QnBabFJ5ZFdVb2Rpd2dZV04wYVc5dUtTQTZJR2xtUm1Gc2MyVW9kaXdnWVdOMGFXOXVLVHRjYm4wN1hHNWNiaThxS2x4dUlDb2dSbXh2ZDF4dUlDb2dRMjl0Y0c5elpTQnZkR2hsY2lCMGNtRnVjMlp2Y20xbGNuTWdkRzhnY25WdUlHeHBibVZoY21sc2VWeHVJQ29nWm14dmR5aHRhVzRvTWpBcExDQnRZWGdvTkRBcEtWeHVJQ29nUUhCaGNtRnRJQ0I3TGk0dVpuVnVZM1JwYjI1emZTQjBjbUZ1YzJadmNtMWxjbk5jYmlBcUlFQnlaWFIxY200Z2UyWjFibU4wYVc5dWZWeHVJQ292WEc1bGVIQnZjblFnWTI5dWMzUWdabXh2ZHlBOUlDZ3VMaTUwY21GdWMyWnZjbTFsY25NcElEMCtJSHRjYmlBZ1kyOXVjM1FnYm5WdFZISmhibk5tYjNKdFpYSnpJRDBnZEhKaGJuTm1iM0p0WlhKekxteGxibWQwYUR0Y2JpQWdiR1YwSUdrZ1BTQXdPMXh1WEc0Z0lISmxkSFZ5YmlBb1lXTmpMQ0F1TGk1aGNtZHpLU0E5UGlCN1hHNGdJQ0FnYkdWMElIWWdQU0JoWTJNN1hHNGdJQ0FnWm05eUlDaHBJRDBnTURzZ2FTQThJRzUxYlZSeVlXNXpabTl5YldWeWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNCMklEMGdkSEpoYm5ObWIzSnRaWEp6VzJsZEtIWXNJQzR1TG1GeVozTXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMk8xeHVJQ0I5TzF4dWZUdGNibHh1THlvcVhHNGdLaUJKYm5SbGNuQnZiR0YwWlNCbWNtOXRJSE5sZENCdlppQjJZV3gxWlhNZ2RHOGdZVzV2ZEdobGNseHVJQ29nUUhCaGNtRnRJQ0I3UVhKeVlYbDlJR2x1Y0hWMElHRnljbUY1WEc0Z0tpQkFjR0Z5WVcwZ0lIdEJjbkpoZVgwZ2IzVjBjSFYwWEc0Z0tpQkFjR0Z5WVcwZ0lIdEdkVzVqZEdsdmJuMGdjbUZ1WjJWRllYTnBibWRjYmlBcUlFQnlaWFIxY200Z2UwWjFibU4wYVc5dWZWeHVJQ292WEc1bGVIQnZjblFnWTI5dWMzUWdhVzUwWlhKd2IyeGhkR1VnUFNBb2FXNXdkWFFzSUc5MWRIQjFkQ3dnY21GdVoyVkZZWE5wYm1jcElEMCtJSHRjYmlBZ1kyOXVjM1FnY21GdVoyVk1aVzVuZEdnZ1BTQnBibkIxZEM1c1pXNW5kR2c3WEc0Z0lHTnZibk4wSUdacGJtRnNTVzVrWlhnZ1BTQnlZVzVuWlV4bGJtZDBhQ0F0SURFN1hHNWNiaUFnY21WMGRYSnVJQ2gyS1NBOVBpQjdYRzRnSUNBZ0x5OGdTV1lnZG1Gc2RXVWdiM1YwYzJsa1pTQnRhVzVwYlhWdElISmhibWRsTENCeGRXbGphMng1SUhKbGRIVnlibHh1SUNBZ0lHbG1JQ2gySUR3OUlHbHVjSFYwV3pCZEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2IzVjBjSFYwV3pCZE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFbG1JSFpoYkhWbElHOTFkSE5wWkdVZ2JXRjRhVzExYlNCeVlXNW5aU3dnY1hWcFkydHNlU0J5WlhSMWNtNWNiaUFnSUNCcFppQW9kaUErUFNCcGJuQjFkRnRtYVc1aGJFbHVaR1Y0WFNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUc5MWRIQjFkRnRtYVc1aGJFbHVaR1Y0WFR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JzWlhRZ2FTQTlJREU3WEc1Y2JpQWdJQ0F2THlCR2FXNWtJR2x1WkdWNElHOW1JSEpoYm1kbElITjBZWEowWEc0Z0lDQWdabTl5SUNnN0lHa2dQQ0J5WVc1blpVeGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JwWmlBb2FXNXdkWFJiYVYwZ1BpQjJJSHg4SUdrZ1BUMDlJR1pwYm1Gc1NXNWtaWGdwSUh0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZMjl1YzNRZ2NISnZaM0psYzNOSmJsSmhibWRsSUQwZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9hVzV3ZFhSYmFTQXRJREZkTENCcGJuQjFkRnRwWFN3Z2RpazdYRzRnSUNBZ1kyOXVjM1FnWldGelpXUlFjbTluY21WemN5QTlJQ2h5WVc1blpVVmhjMmx1WnlrZ1B5QnlZVzVuWlVWaGMybHVaMXRwSUMwZ01WMG9jSEp2WjNKbGMzTkpibEpoYm1kbEtTQTZJSEJ5YjJkeVpYTnpTVzVTWVc1blpUdGNiaUFnSUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb2IzVjBjSFYwVzJrZ0xTQXhYU3dnYjNWMGNIVjBXMmxkTENCbFlYTmxaRkJ5YjJkeVpYTnpLVHRjYmlBZ2ZUdGNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J6ZFdKMGNtRmpkQ0E5SUNodmNtbG5hVzRwSUQwK0lDaDJLU0E5UGlCMklDMGdiM0pwWjJsdU8xeHVaWGh3YjNKMElHTnZibk4wSUdGa1pDQTlJQ2h2Y21sbmFXNHBJRDArSUNoMktTQTlQaUIySUNzZ2IzSnBaMmx1TzF4dVpYaHdiM0owSUdOdmJuTjBJR1JwZG1sa1pTQTlJQ2h2Y21sbmFXNHBJRDArSUNoMktTQTlQaUIySUM4Z2IzSnBaMmx1TzF4dVpYaHdiM0owSUdOdmJuTjBJRzExYkhScGNHeDVJRDBnS0c5eWFXZHBiaWtnUFQ0Z0tIWXBJRDArSUhZZ0tpQnZjbWxuYVc0N1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCblpXNWxjbUYwWlU1dmJrbHVkR1Z5WjNKaGRHVmtVM0J5YVc1bklEMGdLR0ZzZEdWeVJHbHpjR3hoWTJWdFpXNTBJRDBnYm05dmNDa2dQVDRnS0dOdmJuTjBZVzUwTENCdmNtbG5hVzRwSUQwK0lDaDJLU0E5UGlCN1hHNGdJR052Ym5OMElHUnBjM0JzWVdObGJXVnVkQ0E5SUc5eWFXZHBiaUF0SUhZN1hHNGdJR052Ym5OMElITndjbWx1WjAxdlpHbG1hV1ZrUkdsemNHeGhZMlZ0Wlc1MElEMGdMU0JqYjI1emRHRnVkQ0FxSUNnd0lDMGdZV3gwWlhKRWFYTndiR0ZqWlcxbGJuUW9UV0YwYUM1aFluTW9aR2x6Y0d4aFkyVnRaVzUwS1NrcE8xeHVJQ0J5WlhSMWNtNGdLR1JwYzNCc1lXTmxiV1Z1ZENBOFBTQXdLU0EvSUc5eWFXZHBiaUFySUhOd2NtbHVaMDF2WkdsbWFXVmtSR2x6Y0d4aFkyVnRaVzUwSURvZ2IzSnBaMmx1SUMwZ2MzQnlhVzVuVFc5a2FXWnBaV1JFYVhOd2JHRmpaVzFsYm5RN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjM0J5YVc1bklEMGdaMlZ1WlhKaGRHVk9iMjVKYm5SbGNtZHlZWFJsWkZOd2NtbHVaeWdwTzF4dVpYaHdiM0owSUdOdmJuTjBJRzV2Ym14cGJtVmhjbE53Y21sdVp5QTlJR2RsYm1WeVlYUmxUbTl1U1c1MFpYSm5jbUYwWldSVGNISnBibWNvVFdGMGFDNXpjWEowS1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhkeVlYQWdQU0FvYldsdUxDQnRZWGdwSUQwK0lDaDJLU0E5UGlCN1hHNGdJR052Ym5OMElISmhibWRsVTJsNlpTQTlJRzFoZUNBdElHMXBianRjYmlBZ2NtVjBkWEp1SUNnb2RpQXRJRzFwYmlrZ0pTQnlZVzVuWlZOcGVtVWdLeUJ5WVc1blpWTnBlbVVwSUNVZ2NtRnVaMlZUYVhwbElDc2diV2x1TzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElITnRiMjkwYUNBOUlDaHpkSEpsYm1kMGFDQTlJRFV3S1NBOVBpQjdYRzRnSUd4bGRDQndjbVYyYVc5MWMxWmhiSFZsSUQwZ01EdGNiaUFnYkdWMElHaGhjMU50YjI5MGFHVmtJRDBnWm1Gc2MyVTdYRzVjYmlBZ2NtVjBkWEp1SUNoMktTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1kzVnljbVZ1ZEZaaGJIVmxJRDBnS0doaGMxTnRiMjkwYUdWa0tTQS9JSEJ5WlhacGIzVnpWbUZzZFdVZ09pQjJPMXh1SUNBZ0lHTnZibk4wSUc1bGQxWmhiSFZsSUQwZ1kyRnNZMU50YjI5MGFHbHVaeWhqZFhKeVpXNTBWbUZzZFdVc0lIQnlaWFpwYjNWelZtRnNkV1VzSUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNncExDQnpkSEpsYm1kMGFDazdYRzRnSUNBZ2NISmxkbWx2ZFhOV1lXeDFaU0E5SUc1bGQxWmhiSFZsTzF4dUlDQWdJR2hoYzFOdGIyOTBhR1ZrSUQwZ2RISjFaVHRjYmlBZ0lDQnlaWFIxY200Z2JtVjNWbUZzZFdVN1hHNGdJSDA3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzUmxjSE1nUFNBb2MzUmxjSE1zSUcxcGJpd2diV0Y0S1NBOVBpQW9kaWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQndjbTluY21WemN5QTlJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0cxcGJpd2diV0Y0TENCMktUdGNiaUFnY21WMGRYSnVJSE4wWlhCUWNtOW5jbVZ6Y3loemRHVndjeXdnY0hKdlozSmxjM01wTzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElIUnlZVzV6Wm05eWJVTm9hV3hrVm1Gc2RXVnpJRDBnS0dOb2FXeGtWSEpoYm5ObWIzSnRaWEp6S1NBOVBpQjdYRzRnSUdOdmJuTjBJRzExZEdGaWJHVlRkR0YwWlNBOUlIdDlPMXh1SUNCeVpYUjFjbTRnS0hZcElEMCtJSHRjYmlBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2Rpa2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ1kyaHBiR1JVY21GdWMyWnZjbTFsY2lBOUlHTm9hV3hrVkhKaGJuTm1iM0p0WlhKelcydGxlVjA3WEc0Z0lDQWdJQ0JwWmlBb1kyaHBiR1JVY21GdWMyWnZjbTFsY2lrZ2UxeHVJQ0FnSUNBZ0lDQnRkWFJoWW14bFUzUmhkR1ZiYTJWNVhTQTlJR05vYVd4a1ZISmhibk5tYjNKdFpYSW9kbHRyWlhsZEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnYlhWMFlXSnNaVk4wWVhSbE8xeHVJQ0I5TzF4dWZUdGNibHh1THk4Z1ZXNXBkQ0IwY21GdWMyWnZjbTFsY25OY2JtVjRjRzl5ZENCamIyNXpkQ0J3WlhKalpXNTBJRDBnWVhCd1pXNWtWVzVwZENnbkpTY3BPMXh1Wlhod2IzSjBJR052Ym5OMElHUmxaM0psWlhNZ1BTQmhjSEJsYm1SVmJtbDBLQ2RrWldjbktUdGNibVY0Y0c5eWRDQmpiMjV6ZENCd2VDQTlJR0Z3Y0dWdVpGVnVhWFFvSjNCNEp5azdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnlaMkpWYm1sMElEMGdabXh2ZHloY2JpQWdZMnhoYlhBb01Dd2dNalUxS1N4Y2JpQWdUV0YwYUM1eWIzVnVaRnh1S1R0Y2JseHVZMjl1YzNRZ2NtZGlZVlJsYlhCc1lYUmxJRDBnS0hzZ2NtVmtMQ0JuY21WbGJpd2dZbXgxWlN3Z1lXeHdhR0VnUFNBeElIMHBJRDArSUZ4dUlDQmdjbWRpWVNna2UzSmxaSDBzSUNSN1ozSmxaVzU5TENBa2UySnNkV1Y5TENBa2UyRnNjR2hoZlNsZ08xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtZGlZU0E5SUdac2IzY29YRzRnSUhSeVlXNXpabTl5YlVOb2FXeGtWbUZzZFdWektIdGNiaUFnSUNCeVpXUTZJSEpuWWxWdWFYUXNYRzRnSUNBZ1ozSmxaVzQ2SUhKbllsVnVhWFFzWEc0Z0lDQWdZbXgxWlRvZ2NtZGlWVzVwZEN4Y2JpQWdJQ0JoYkhCb1lWeHVJQ0I5S1N4Y2JpQWdjbWRpWVZSbGJYQnNZWFJsWEc0cE8xeHVYRzVqYjI1emRDQm9jMnhoVkdWdGNHeGhkR1VnUFNBb2V5Qm9kV1VzSUhOaGRIVnlZWFJwYjI0c0lHeHBaMmgwYm1WemN5d2dZV3h3YUdFZ1BTQXhJSDBwSUQwK0lGeHVJQ0JnYUhOc1lTZ2tlMmgxWlgwc0lDUjdjMkYwZFhKaGRHbHZibjBzSUNSN2JHbG5hSFJ1WlhOemZTd2dKSHRoYkhCb1lYMHBZRHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR2h6YkdFZ1BTQm1iRzkzS0Z4dUlDQjBjbUZ1YzJadmNtMURhR2xzWkZaaGJIVmxjeWg3WEc0Z0lDQWdhSFZsT2lCd1lYSnpaVVpzYjJGMExGeHVJQ0FnSUhOaGRIVnlZWFJwYjI0NklIQmxjbU5sYm5Rc1hHNGdJQ0FnYkdsbmFIUnVaWE56T2lCd1pYSmpaVzUwTEZ4dUlDQWdJR0ZzY0doaFhHNGdJSDBwTEZ4dUlDQm9jMnhoVkdWdGNHeGhkR1ZjYmlrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamIyeHZjaUE5SUNoMktTQTlQaUI3WEc0Z0lHbG1JQ2gyTG1oaGMwOTNibEJ5YjNCbGNuUjVLQ2R5WldRbktTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCeVoySmhLSFlwTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLSFl1YUdGelQzZHVVSEp2Y0dWeWRIa29KMmgxWlNjcEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdoemJHRW9kaWs3WEc0Z0lIMWNiaUFnY21WMGRYSnVJSFk3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1lXeHdhR0VnUFNCamJHRnRjQ2d3TENBeEtUdGNibHh1WTI5dWMzUWdZbXhsYm1RZ1BTQW9abkp2YlN3Z2RHOHNJSFlwSUQwK0lIdGNiaUFnWTI5dWMzUWdabkp2YlVWNGNHOGdQU0JtY205dElDb2dabkp2YlR0Y2JpQWdZMjl1YzNRZ2RHOUZlSEJ2SUQwZ2RHOGdLaUIwYnp0Y2JpQWdjbVYwZFhKdUlFMWhkR2d1YzNGeWRDaDJJQ29nS0hSdlJYaHdieUF0SUdaeWIyMUZlSEJ2S1NBcklHWnliMjFGZUhCdktUdGNibjA3WEc0dkx5Qm9kSFJ3T2k4dlkyOWtaWEJsYmk1cGJ5OXZjM1ZpYkdGclpTOXdaVzR2ZUVkV1ZtRk9YRzVsZUhCdmNuUWdZMjl1YzNRZ1lteGxibVJEYjJ4dmNpQTlJQ2htY205dExDQjBieWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQm1jbTl0UTI5c2IzSWdQU0JwYzFOMGNtbHVaeWhtY205dEtTQS9JSEJoY25ObFEyOXNiM0lvWm5KdmJTa2dPaUJtY205dE8xeHVJQ0JqYjI1emRDQjBiME52Ykc5eUlEMGdhWE5UZEhKcGJtY29kRzhwSUQ4Z2NHRnljMlZEYjJ4dmNpaDBieWs2SUhSdk8xeHVYRzRnSUdOdmJuTjBJR0pzWlc1a1pXUWdQU0I3SUM0dUxtWnliMjFEYjJ4dmNpQjlPMXh1WEc0Z0lISmxkSFZ5YmlBb2Rpa2dQVDRnZTF4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQmliR1Z1WkdWa0tTQjdYRzRnSUNBZ0lDQmliR1Z1WkdWa1cydGxlVjBnUFNCaWJHVnVaQ2htY205dFEyOXNiM0piYTJWNVhTd2dkRzlEYjJ4dmNsdHJaWGxkTENCMktUdGNiaUFnSUNCOVhHNGdJQ0FnWW14bGJtUmxaQzV5WldRZ1BTQmliR1Z1WkNobWNtOXRRMjlzYjNJdWNtVmtMQ0IwYjBOdmJHOXlMbkpsWkN3Z2RpazdYRzRnSUNBZ1lteGxibVJsWkM1bmNtVmxiaUE5SUdKc1pXNWtLR1p5YjIxRGIyeHZjaTVuY21WbGJpd2dkRzlEYjJ4dmNpNW5jbVZsYml3Z2RpazdYRzRnSUNBZ1lteGxibVJsWkM1aWJIVmxJRDBnWW14bGJtUW9abkp2YlVOdmJHOXlMbUpzZFdVc0lIUnZRMjlzYjNJdVlteDFaU3dnZGlrN1hHNGdJQ0FnWW14bGJtUmxaQzVoYkhCb1lTQTlJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56S0daeWIyMURiMnh2Y2k1aGJIQm9ZU3dnZEc5RGIyeHZjaTVoYkhCb1lTd2dkaWs3WEc0Z0lDQWdjbVYwZFhKdUlHSnNaVzVrWldRN1hHNGdJSDA3WEc1OU8xeHVYRzR2THlCQ1pYcHBaWElnY21WemIyeDJaWEpjYmk4dklGSmxabUZqZEc5eVpXUWdabkp2YlNCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmFIVm5hSE5yTDJKbGVtbGxjaTlpYkc5aUwyMWhjM1JsY2k5cGJtUmxlQzVxYzF4dUx5b3FYRzRqSXlCVWFHVWdUVWxVSUV4cFkyVnVjMlVnS0UxSlZDa2dJeU5jYmx4dVEyOXdlWEpwWjJoMElDaGpLU0F5TURFeklFaDFaMmdnUzJWdWJtVmtlVnh1WEc1UVpYSnRhWE56YVc5dUlHbHpJR2hsY21WaWVTQm5jbUZ1ZEdWa0xDQm1jbVZsSUc5bUlHTm9ZWEpuWlN3Z2RHOGdZVzU1SUhCbGNuTnZiaUJ2WW5SaGFXNXBibWNnWVNCamIzQjVYRzV2WmlCMGFHbHpJSE52Wm5SM1lYSmxJR0Z1WkNCaGMzTnZZMmxoZEdWa0lHUnZZM1Z0Wlc1MFlYUnBiMjRnWm1sc1pYTWdLSFJvWlNCY0lsTnZablIzWVhKbFhDSXBMQ0IwYnlCa1pXRnNYRzVwYmlCMGFHVWdVMjltZEhkaGNtVWdkMmwwYUc5MWRDQnlaWE4wY21samRHbHZiaXdnYVc1amJIVmthVzVuSUhkcGRHaHZkWFFnYkdsdGFYUmhkR2x2YmlCMGFHVWdjbWxuYUhSelhHNTBieUIxYzJVc0lHTnZjSGtzSUcxdlpHbG1lU3dnYldWeVoyVXNJSEIxWW14cGMyZ3NJR1JwYzNSeWFXSjFkR1VzSUhOMVlteHBZMlZ1YzJVc0lHRnVaQzl2Y2lCelpXeHNYRzVqYjNCcFpYTWdiMllnZEdobElGTnZablIzWVhKbExDQmhibVFnZEc4Z2NHVnliV2wwSUhCbGNuTnZibk1nZEc4Z2QyaHZiU0IwYUdVZ1UyOW1kSGRoY21VZ2FYTmNibVoxY201cGMyaGxaQ0IwYnlCa2J5QnpieXdnYzNWaWFtVmpkQ0IwYnlCMGFHVWdabTlzYkc5M2FXNW5JR052Ym1ScGRHbHZibk02WEc1Y2JsUm9aU0JoWW05MlpTQmpiM0I1Y21sbmFIUWdibTkwYVdObElHRnVaQ0IwYUdseklIQmxjbTFwYzNOcGIyNGdibTkwYVdObElITm9ZV3hzSUdKbElHbHVZMngxWkdWa0lHbHVYRzVoYkd3Z1kyOXdhV1Z6SUc5eUlITjFZbk4wWVc1MGFXRnNJSEJ2Y25ScGIyNXpJRzltSUhSb1pTQlRiMlowZDJGeVpTNWNibHh1VkVoRklGTlBSbFJYUVZKRklFbFRJRkJTVDFaSlJFVkVJRndpUVZNZ1NWTmNJaXdnVjBsVVNFOVZWQ0JYUVZKU1FVNVVXU0JQUmlCQlRsa2dTMGxPUkN3Z1JWaFFVa1ZUVXlCUFVseHVTVTFRVEVsRlJDd2dTVTVEVEZWRVNVNUhJRUpWVkNCT1QxUWdURWxOU1ZSRlJDQlVUeUJVU0VVZ1YwRlNVa0ZPVkVsRlV5QlBSaUJOUlZKRFNFRk9WRUZDU1V4SlZGa3NYRzVHU1ZST1JWTlRJRVpQVWlCQklGQkJVbFJKUTFWTVFWSWdVRlZTVUU5VFJTQkJUa1FnVGs5T1NVNUdVa2xPUjBWTlJVNVVMaUJKVGlCT1R5QkZWa1ZPVkNCVFNFRk1UQ0JVU0VWY2JrRlZWRWhQVWxNZ1QxSWdRMDlRV1ZKSlIwaFVJRWhQVEVSRlVsTWdRa1VnVEVsQlFreEZJRVpQVWlCQlRsa2dRMHhCU1Uwc0lFUkJUVUZIUlZNZ1QxSWdUMVJJUlZKY2JreEpRVUpKVEVsVVdTd2dWMGhGVkVoRlVpQkpUaUJCVGlCQlExUkpUMDRnVDBZZ1EwOU9WRkpCUTFRc0lGUlBVbFFnVDFJZ1QxUklSVkpYU1ZORkxDQkJVa2xUU1U1SElFWlNUMDBzWEc1UFZWUWdUMFlnVDFJZ1NVNGdRMDlPVGtWRFZFbFBUaUJYU1ZSSUlGUklSU0JUVDBaVVYwRlNSU0JQVWlCVVNFVWdWVk5GSUU5U0lFOVVTRVZTSUVSRlFVeEpUa2RUSUVsT1hHNVVTRVVnVTA5R1ZGZEJVa1V1WEc0Z0tpOWNibU52Ym5OMElISmxjMjlzZG1VeklEMGdLSEJ2YVc1MGN5a2dQVDRnS0hRcElEMCtJSHRjYmlBZ1kyOXVjM1FnZFhRZ1BTQXhJQzBnZER0Y2JpQWdjbVYwZFhKdUlDaHdiMmx1ZEhOYk1GMGdLaUIxZENBcklIQnZhVzUwYzFzeFhTQXFJSFFwSUNvZ2RYUWdLeUFvY0c5cGJuUnpXekZkSUNvZ2RYUWdLeUJ3YjJsdWRITmJNbDBnS2lCMEtTQXFJSFE3WEc1OU8xeHVYRzVqYjI1emRDQnlaWE52YkhabE5DQTlJQ2h3YjJsdWRITXBJRDArSUNoMEtTQTlQaUI3WEc0Z0lHTnZibk4wSUhWMElEMGdNU0F0SUhRN1hHNGdJR052Ym5OMElHRXhJRDBnY0c5cGJuUnpXekZkSUNvZ2RYUWdLeUJ3YjJsdWRITmJNbDBnS2lCME8xeHVJQ0J5WlhSMWNtNGdLQ2h3YjJsdWRITmJNRjBnS2lCMWRDQXJJSEJ2YVc1MGMxc3hYU0FxSUhRcElDb2dkWFFnS3lCaE1TQXFJSFFwSUNvZ2RYUWdLeUFvWVRFZ0tpQjFkQ0FySUNod2IybHVkSE5iTWwwZ0tpQjFkQ0FySUhCdmFXNTBjMXN6WFNBcUlIUXBJQ29nZENrZ0tpQjBPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdKbGVtbGxjaUE5SUNod2IybHVkSE1wSUQwK1hHNGdJQ2h3YjJsdWRITXViR1Z1WjNSb0lEMDlQU0F6S1NBL0lISmxjMjlzZG1VektIQnZhVzUwY3lrZ09pQnlaWE52YkhabE5DaHdiMmx1ZEhNcE8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb2xvciA9IGV4cG9ydHMuaHNsYSA9IGV4cG9ydHMuaGV4ID0gZXhwb3J0cy5yZ2JhID0gZXhwb3J0cy5yZ2JVbml0ID0gZXhwb3J0cy5zY2FsZSA9IGV4cG9ydHMucHggPSBleHBvcnRzLnBlcmNlbnQgPSBleHBvcnRzLmRlZ3JlZXMgPSBleHBvcnRzLmFscGhhID0gZXhwb3J0cy5udW1iZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVmFsdWUgdHlwZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBhbHBoYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogZGVncmVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBoc2xhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBwZXJjZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBweFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmdiVW5pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmdiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzY2FsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3BhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIG51bWJlciA9IGV4cG9ydHMubnVtYmVyID0ge1xuICB0ZXN0OiBfdXRpbHMuaXNOdW0sXG4gIHBhcnNlOiBwYXJzZUZsb2F0XG59O1xuXG4vLyBWYWx1ZSB0eXBlc1xudmFyIGFscGhhID0gZXhwb3J0cy5hbHBoYSA9IF9leHRlbmRzKHt9LCBudW1iZXIsIHtcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLmFscGhhXG59KTtcblxudmFyIGRlZ3JlZXMgPSBleHBvcnRzLmRlZ3JlZXMgPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgnZGVnJywgX3RyYW5zZm9ybWVycy5kZWdyZWVzKTtcbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJyUnLCBfdHJhbnNmb3JtZXJzLnBlcmNlbnQpO1xudmFyIHB4ID0gZXhwb3J0cy5weCA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCdweCcsIF90cmFuc2Zvcm1lcnMucHgpO1xuXG52YXIgc2NhbGUgPSBleHBvcnRzLnNjYWxlID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICBkZWZhdWx0OiAxXG59KTtcblxudmFyIHJnYlVuaXQgPSBleHBvcnRzLnJnYlVuaXQgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5yZ2JVbml0XG59KTtcblxudmFyIHJnYmEgPSBleHBvcnRzLnJnYmEgPSB7XG4gIHRlc3Q6IF91dGlscy5pc1JnYixcbiAgcGFyc2U6IF9wYXJzZXJzLnJnYmEsXG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5yZ2JhXG59O1xuXG52YXIgaGV4ID0gZXhwb3J0cy5oZXggPSBfZXh0ZW5kcyh7fSwgcmdiYSwge1xuICB0ZXN0OiBfdXRpbHMuaXNIZXgsXG4gIHBhcnNlOiBfcGFyc2Vycy5oZXhcbn0pO1xuXG52YXIgaHNsYSA9IGV4cG9ydHMuaHNsYSA9IHtcbiAgdGVzdDogX3V0aWxzLmlzSHNsLFxuICBwYXJzZTogX3BhcnNlcnMuaHNsYSxcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLmhzbGFcbn07XG5cbnZhciBjb2xvciA9IGV4cG9ydHMuY29sb3IgPSB7XG4gIHBhcnNlOiBfcGFyc2Vycy5jb2xvcixcbiAgdGVzdDogX3V0aWxzLmlzQ29sb3IsXG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5jb2xvclxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkbUZzZFdVdGRIbHdaWE11YW5NaVhTd2libUZ0WlhNaU9sc2liblZ0WW1WeUlpd2lkR1Z6ZENJc0luQmhjbk5sSWl3aWNHRnljMlZHYkc5aGRDSXNJbUZzY0doaElpd2lkSEpoYm5ObWIzSnRJaXdpWkdWbmNtVmxjeUlzSW5CbGNtTmxiblFpTENKd2VDSXNJbk5qWVd4bElpd2laR1ZtWVhWc2RDSXNJbkpuWWxWdWFYUWlMQ0p5WjJKaElpd2lhR1Y0SWl3aWFITnNZU0lzSW1OdmJHOXlJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenRyVVVGQlFUczdPenM3T3pzN096czdPenM3TzBGQllVRTdPMEZCVlVFN08wRkJUVUU3TzBGQlUwOHNTVUZCVFVFc01FSkJRVk03UVVGRGNFSkRMRzlDUVVSdlFqdEJRVVZ3UWtNc1UwRkJUME03UVVGR1lTeERRVUZtT3p0QlFVdFFPMEZCUTA4c1NVRkJUVU1zY1VOQlExSktMRTFCUkZFN1FVRkZXRXM3UVVGR1Z5eEZRVUZPT3p0QlFVdEJMRWxCUVUxRExEUkNRVUZWTERKQ1FVRmxMRXRCUVdZc2QwSkJRV2hDTzBGQlEwRXNTVUZCVFVNc05FSkJRVlVzTWtKQlFXVXNSMEZCWml4M1FrRkJhRUk3UVVGRFFTeEpRVUZOUXl4clFrRkJTeXd5UWtGQlpTeEpRVUZtTEcxQ1FVRllPenRCUVVWQkxFbEJRVTFETEhGRFFVTlNWQ3hOUVVSUk8wRkJSVmhWTEZkQlFWTTdRVUZHUlN4RlFVRk9PenRCUVV0QkxFbEJRVTFETEhsRFFVTlNXQ3hOUVVSUk8wRkJSVmhMTzBGQlJsY3NSVUZCVGpzN1FVRkxRU3hKUVVGTlR5eHpRa0ZCVHp0QlFVTnNRbGdzYjBKQlJHdENPMEZCUld4Q1F5eHpRa0ZHYTBJN1FVRkhiRUpITzBGQlNHdENMRU5CUVdJN08wRkJUVUVzU1VGQlRWRXNhVU5CUTFKRUxFbEJSRkU3UVVGRldGZ3NiMEpCUmxjN1FVRkhXRU03UVVGSVZ5eEZRVUZPT3p0QlFVMUJMRWxCUVUxWkxITkNRVUZQTzBGQlEyeENZaXh2UWtGRWEwSTdRVUZGYkVKRExITkNRVVpyUWp0QlFVZHNRa2M3UVVGSWEwSXNRMEZCWWpzN1FVRk5RU3hKUVVGTlZTeDNRa0ZCVVR0QlFVTnVRbUlzZFVKQlJHMUNPMEZCUlc1Q1JDeHpRa0ZHYlVJN1FVRkhia0pKTzBGQlNHMUNMRU5CUVdRaUxDSm1hV3hsSWpvaWRtRnNkV1V0ZEhsd1pYTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaXBjYmlBcUlGWmhiSFZsSUhSNWNHVnpYRzRnS2x4dUlDb2dZV3h3YUdGY2JpQXFJR1JsWjNKbFpYTmNiaUFxSUdobGVGeHVJQ29nYUhOc1lWeHVJQ29nY0dWeVkyVnVkRnh1SUNvZ2NIaGNiaUFxSUhKbllsVnVhWFJjYmlBcUlISm5ZbHh1SUNvZ2MyTmhiR1ZjYmlBcUwxeHVhVzF3YjNKMElIdGNiaUFnY21kaVZXNXBkQ0JoY3lCMGNtRnVjMlp2Y20xU1IwSlZibWwwTEZ4dUlDQnlaMkpoSUdGeklIUnlZVzV6Wm05eWJWSm5ZbUVzWEc0Z0lHRnNjR2hoSUdGeklIUnlZVzV6Wm05eWJVRnNjR2hoTEZ4dUlDQm9jMnhoSUdGeklIUnlZVzV6Wm05eWJVaHpiR0VzWEc0Z0lHTnZiRzl5SUdGeklIUnlZVzV6Wm05eWJVTnZiRzl5TEZ4dUlDQndlQ0JoY3lCMGNtRnVjMlp2Y20xUWVDeGNiaUFnY0dWeVkyVnVkQ0JoY3lCMGNtRnVjMlp2Y20xUVpYSmpaVzUwTEZ4dUlDQmtaV2R5WldWeklHRnpJSFJ5WVc1elptOXliVVJsWjNKbFpYTmNibjBnWm5KdmJTQW5MaTkwY21GdWMyWnZjbTFsY25Nbk8xeHVhVzF3YjNKMElIdGNiaUFnYUdWNElHRnpJSEJoY25ObFNHVjRMRnh1SUNCeVoySmhJR0Z6SUhCaGNuTmxVbWRpWVN4Y2JpQWdhSE5zWVNCaGN5QndZWEp6WlVoemJHRXNYRzRnSUdOdmJHOXlJR0Z6SUhCaGNuTmxRMjlzYjNKY2JuMGdabkp2YlNBbkxpOXdZWEp6WlhKekp6dGNibWx0Y0c5eWRDQjdYRzRnSUdOeVpXRjBaVlZ1YVhSVWVYQmxMRnh1SUNCcGMwNTFiU3hjYmlBZ2FYTlNaMklzWEc0Z0lHbHpTSE5zTEZ4dUlDQnBjMGhsZUN4Y2JpQWdhWE5EYjJ4dmNseHVmU0JtY205dElDY3VMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElHNTFiV0psY2lBOUlIdGNiaUFnZEdWemREb2dhWE5PZFcwc1hHNGdJSEJoY25ObE9pQndZWEp6WlVac2IyRjBYRzU5TzF4dVhHNHZMeUJXWVd4MVpTQjBlWEJsYzF4dVpYaHdiM0owSUdOdmJuTjBJR0ZzY0doaElEMGdlMXh1SUNBdUxpNXVkVzFpWlhJc1hHNGdJSFJ5WVc1elptOXliVG9nZEhKaGJuTm1iM0p0UVd4d2FHRmNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JrWldkeVpXVnpJRDBnWTNKbFlYUmxWVzVwZEZSNWNHVW9KMlJsWnljc0lIUnlZVzV6Wm05eWJVUmxaM0psWlhNcE8xeHVaWGh3YjNKMElHTnZibk4wSUhCbGNtTmxiblFnUFNCamNtVmhkR1ZWYm1sMFZIbHdaU2duSlNjc0lIUnlZVzV6Wm05eWJWQmxjbU5sYm5RcE8xeHVaWGh3YjNKMElHTnZibk4wSUhCNElEMGdZM0psWVhSbFZXNXBkRlI1Y0dVb0ozQjRKeXdnZEhKaGJuTm1iM0p0VUhncE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2MyTmhiR1VnUFNCN1hHNGdJQzR1TG01MWJXSmxjaXhjYmlBZ1pHVm1ZWFZzZERvZ01WeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSEpuWWxWdWFYUWdQU0I3WEc0Z0lDNHVMbTUxYldKbGNpeGNiaUFnZEhKaGJuTm1iM0p0T2lCMGNtRnVjMlp2Y20xU1IwSlZibWwwWEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtZGlZU0E5SUh0Y2JpQWdkR1Z6ZERvZ2FYTlNaMklzWEc0Z0lIQmhjbk5sT2lCd1lYSnpaVkpuWW1Fc1hHNGdJSFJ5WVc1elptOXliVG9nZEhKaGJuTm1iM0p0VW1kaVlWeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR2hsZUNBOUlIdGNiaUFnTGk0dWNtZGlZU3hjYmlBZ2RHVnpkRG9nYVhOSVpYZ3NYRzRnSUhCaGNuTmxPaUJ3WVhKelpVaGxlRnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdoemJHRWdQU0I3WEc0Z0lIUmxjM1E2SUdselNITnNMRnh1SUNCd1lYSnpaVG9nY0dGeWMyVkljMnhoTEZ4dUlDQjBjbUZ1YzJadmNtMDZJSFJ5WVc1elptOXliVWh6YkdGY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpiMnh2Y2lBOUlIdGNiaUFnY0dGeWMyVTZJSEJoY25ObFEyOXNiM0lzWEc0Z0lIUmxjM1E2SUdselEyOXNiM0lzWEc0Z0lIUnlZVzV6Wm05eWJUb2dkSEpoYm5ObWIzSnRRMjlzYjNKY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3ZhbHVlLXR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxudmFyIF9lYXNpbmcgPSByZXF1aXJlKCcuLi9pbmMvZWFzaW5nJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBjbGFtcFByb2dyZXNzID0gKDAsIF90cmFuc2Zvcm1lcnMuY2xhbXApKDAsIDEpO1xuXG5mdW5jdGlvbiBjYWxjVmFsdWVBdFRpbWUoZnJvbSwgdG8sIGR1cmF0aW9uLCBlbGFwc2VkLCBlYXNlKSB7XG4gIHZhciBwcm9ncmVzc0F0VGltZSA9IGVhc2UoY2xhbXBQcm9ncmVzcygoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKDAsIGR1cmF0aW9uLCBlbGFwc2VkKSkpO1xuICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShmcm9tLCB0bywgcHJvZ3Jlc3NBdFRpbWUpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgZnJvbSA9IF9yZWYuZnJvbTtcbiAgdmFyIHRvID0gX3JlZi50bztcbiAgdmFyIG9uVXBkYXRlID0gX3JlZi5vblVwZGF0ZTtcbiAgdmFyIF9yZWYkYWNjdXJhY3kgPSBfcmVmLmFjY3VyYWN5O1xuICB2YXIgYWNjdXJhY3kgPSBfcmVmJGFjY3VyYWN5ID09PSB1bmRlZmluZWQgPyA2MCA6IF9yZWYkYWNjdXJhY3k7XG5cbiAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnZnJvbScsICd0bycsICdvblVwZGF0ZScsICdhY2N1cmFjeSddKTtcblxuICAvLyBHZXQgdHdlZW4gcHJvcGVydGllc1xuICB2YXIgYSA9IGZyb207XG4gIHZhciBiID0gdG87XG4gIHZhciBhQ3VycmVudCA9IGEuZ2V0KCk7XG4gIHZhciBhRHVyYXRpb24gPSBhLmdldFByb3AoJ2R1cmF0aW9uJyk7XG4gIHZhciBiRHVyYXRpb24gPSBiLmdldFByb3AoJ2R1cmF0aW9uJyk7XG4gIHZhciBhRWFzZSA9IGEuZ2V0UHJvcCgnZWFzZScpO1xuICB2YXIgYkVhc2UgPSBiLmdldFByb3AoJ2Vhc2UnKTtcbiAgdmFyIGFGcm9tID0gYS5nZXRQcm9wKCdmcm9tJyk7XG4gIHZhciBiRnJvbSA9IGIuZ2V0UHJvcCgnZnJvbScpO1xuICB2YXIgYVRvID0gYS5nZXRQcm9wKCd0bycpO1xuICB2YXIgYlRvID0gYi5nZXRQcm9wKCd0bycpO1xuXG4gIC8vIEFuYWx5c2UgdHdlZW5zXG4gIHZhciBvdmVybGFwRHVyYXRpb24gPSBNYXRoLm1pbihhRHVyYXRpb24gLSBhLmdldEVsYXBzZWQoKSwgYkR1cmF0aW9uKTtcbiAgdmFyIGJWYWx1ZUF0VHdlZW5PdmVybGFwQ29tcGxldGUgPSBjYWxjVmFsdWVBdFRpbWUoYkZyb20sIGJUbywgYkR1cmF0aW9uLCBvdmVybGFwRHVyYXRpb24sIGJFYXNlKTtcbiAgdmFyIGJTdGFydHNIaWdoZXJUaGFuQSA9IGJGcm9tID4gYUN1cnJlbnQ7XG4gIHZhciBiRW5kc0hpZ2hlclRoYW5BID0gYlZhbHVlQXRUd2Vlbk92ZXJsYXBDb21wbGV0ZSA+IGFUbztcblxuICAvLyBCbGVuZCBwb2ludHMgYXJlIGRlZmluZWQgYXMgW3QgPSB0aW1lLCB2ID0gdmFsdWVBdFRpbWVdXG4gIC8vIFAxXG4gIC8vIFRoZSBzdGFydCBvZiB0aGUgdHdlZW4gYmxlbmRcbiAgdmFyIFAxID0gYUN1cnJlbnQ7XG4gIHZhciBibGVuZFBvaW50cyA9IFtQMV07XG5cbiAgLy8gRmluZCBQMlxuICAvLyBUaGUgcG9zc2libGUgaW50ZXJzZWN0aW9uIHBvaW50IGJldHdlZW4gdGhlIHR3byB0d2VlbnNcbiAgdmFyIHR3ZWVuc0ludGVyc2VjdCA9IGJTdGFydHNIaWdoZXJUaGFuQSAhPT0gYkVuZHNIaWdoZXJUaGFuQTtcbiAgaWYgKHR3ZWVuc0ludGVyc2VjdCkge1xuICAgIHZhciB0aW1lc3RlcCA9IG92ZXJsYXBEdXJhdGlvbiAvIGFjY3VyYWN5O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY2N1cmFjeTsgaSsrKSB7XG4gICAgICB2YXIgcnVubmluZ1RpbWUgPSBpICogdGltZXN0ZXA7XG5cbiAgICAgIHZhciBhVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYUZyb20sIGFUbywgYUR1cmF0aW9uLCBhLmVsYXBzZWQgKyBydW5uaW5nVGltZSwgYUVhc2UpO1xuICAgICAgdmFyIGJWYWx1ZUF0VGltZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIGIuZWxhcHNlZCArIHJ1bm5pbmdUaW1lLCBiRWFzZSk7XG5cbiAgICAgIHZhciBoYXNJbnRlcnNlY3RlZCA9IGJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPiBiVmFsdWVBdFRpbWUgfHwgIWJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPCBiVmFsdWVBdFRpbWU7XG5cbiAgICAgIGlmIChoYXNJbnRlcnNlY3RlZCkge1xuICAgICAgICB2YXIgUDIgPSBiVmFsdWVBdFRpbWU7XG4gICAgICAgIGJsZW5kUG9pbnRzLnB1c2goUDIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQM1xuICAvLyBUaGUgcG9pbnRzIHRoZSB0d28gdHdlZW5zIHN0b3Agb3ZlcmxhcHBpbmdcbiAgdmFyIFAzID0gYlZhbHVlQXRUd2Vlbk92ZXJsYXBDb21wbGV0ZTtcbiAgYmxlbmRQb2ludHMucHVzaChQMyk7XG5cbiAgLy8gUHVzaCB0aGUgZW5kIHN0YXRlIG9mIGIgdHdlZW4gYXMgZmluYWwgY29udHJvbCBwb2ludFxuICB2YXIgUDQgPSBiVG87XG4gIGJsZW5kUG9pbnRzLnB1c2goUDQpO1xuXG4gIHJldHVybiAoMCwgX3R3ZWVuMi5kZWZhdWx0KShfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBkdXJhdGlvbjogYkR1cmF0aW9uLFxuICAgIGVhc2U6IF9lYXNpbmcubGluZWFyLFxuICAgIG9uVXBkYXRlOiAoMCwgX3RyYW5zZm9ybWVycy5mbG93KSgoMCwgX3RyYW5zZm9ybWVycy5iZXppZXIpKGJsZW5kUG9pbnRzKSwgb25VcGRhdGUpXG4gIH0pKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwySnNaVzVrTFhSM1pXVnVjeTVxY3lKZExDSnVZVzFsY3lJNld5SmpiR0Z0Y0ZCeWIyZHlaWE56SWl3aVkyRnNZMVpoYkhWbFFYUlVhVzFsSWl3aVpuSnZiU0lzSW5Sdklpd2laSFZ5WVhScGIyNGlMQ0psYkdGd2MyVmtJaXdpWldGelpTSXNJbkJ5YjJkeVpYTnpRWFJVYVcxbElpd2liMjVWY0dSaGRHVWlMQ0poWTJOMWNtRmplU0lzSW5CeWIzQnpJaXdpWVNJc0ltSWlMQ0poUTNWeWNtVnVkQ0lzSW1kbGRDSXNJbUZFZFhKaGRHbHZiaUlzSW1kbGRGQnliM0FpTENKaVJIVnlZWFJwYjI0aUxDSmhSV0Z6WlNJc0ltSkZZWE5sSWl3aVlVWnliMjBpTENKaVJuSnZiU0lzSW1GVWJ5SXNJbUpVYnlJc0ltOTJaWEpzWVhCRWRYSmhkR2x2YmlJc0lrMWhkR2dpTENKdGFXNGlMQ0puWlhSRmJHRndjMlZrSWl3aVlsWmhiSFZsUVhSVWQyVmxiazkyWlhKc1lYQkRiMjF3YkdWMFpTSXNJbUpUZEdGeWRITklhV2RvWlhKVWFHRnVRU0lzSW1KRmJtUnpTR2xuYUdWeVZHaGhia0VpTENKUU1TSXNJbUpzWlc1a1VHOXBiblJ6SWl3aWRIZGxaVzV6U1c1MFpYSnpaV04wSWl3aWRHbHRaWE4wWlhBaUxDSnBJaXdpY25WdWJtbHVaMVJwYldVaUxDSmhWbUZzZFdWQmRGUnBiV1VpTENKaVZtRnNkV1ZCZEZScGJXVWlMQ0pvWVhOSmJuUmxjbk5sWTNSbFpDSXNJbEF5SWl3aWNIVnphQ0lzSWxBeklpd2lVRFFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenM3TzBGQlEwRTdPMEZCUTBFN08wRkJRMEU3T3pzN096dEJRVVZCTEVsQlFVMUJMR2RDUVVGblFpeDVRa0ZCVFN4RFFVRk9MRVZCUVZNc1EwRkJWQ3hEUVVGMFFqczdRVUZGUVN4VFFVRlRReXhsUVVGVUxFTkJRWGxDUXl4SlFVRjZRaXhGUVVFclFrTXNSVUZCTDBJc1JVRkJiVU5ETEZGQlFXNURMRVZCUVRaRFF5eFBRVUUzUXl4RlFVRnpSRU1zU1VGQmRFUXNSVUZCTkVRN1FVRkRNVVFzVFVGQlRVTXNhVUpCUVdsQ1JDeExRVUZMVGl4alFVRmpMR2REUVVGeFFpeERRVUZ5UWl4RlFVRjNRa2tzVVVGQmVFSXNSVUZCYTBORExFOUJRV3hETEVOQlFXUXNRMEZCVEN4RFFVRjJRanRCUVVOQkxGTkJRVThzWjBOQlFYRkNTQ3hKUVVGeVFpeEZRVUV5UWtNc1JVRkJNMElzUlVGQkswSkpMR05CUVM5Q0xFTkJRVkE3UVVGRFJEczdhMEpCUldNc1owSkJRWEZFTzBGQlFVRXNUVUZCYkVSTUxFbEJRV3RFTEZGQlFXeEVRU3hKUVVGclJEdEJRVUZCTEUxQlFUVkRReXhGUVVFMFF5eFJRVUUxUTBFc1JVRkJORU03UVVGQlFTeE5RVUY0UTBzc1VVRkJkME1zVVVGQmVFTkJMRkZCUVhkRE8wRkJRVUVzTWtKQlFUbENReXhSUVVFNFFqdEJRVUZCTEUxQlFUbENRU3hSUVVFNFFpeHBRMEZCYmtJc1JVRkJiVUk3TzBGQlFVRXNUVUZCV2tNc1MwRkJXVHM3UVVGRGJFVTdRVUZEUVN4TlFVRk5ReXhKUVVGSlZDeEpRVUZXTzBGQlEwRXNUVUZCVFZVc1NVRkJTVlFzUlVGQlZqdEJRVU5CTEUxQlFVMVZMRmRCUVZkR0xFVkJRVVZITEVkQlFVWXNSVUZCYWtJN1FVRkRRU3hOUVVGTlF5eFpRVUZaU2l4RlFVRkZTeXhQUVVGR0xFTkJRVlVzVlVGQlZpeERRVUZzUWp0QlFVTkJMRTFCUVUxRExGbEJRVmxNTEVWQlFVVkpMRTlCUVVZc1EwRkJWU3hWUVVGV0xFTkJRV3hDTzBGQlEwRXNUVUZCVFVVc1VVRkJVVkFzUlVGQlJVc3NUMEZCUml4RFFVRlZMRTFCUVZZc1EwRkJaRHRCUVVOQkxFMUJRVTFITEZGQlFWRlFMRVZCUVVWSkxFOUJRVVlzUTBGQlZTeE5RVUZXTEVOQlFXUTdRVUZEUVN4TlFVRk5TU3hSUVVGUlZDeEZRVUZGU3l4UFFVRkdMRU5CUVZVc1RVRkJWaXhEUVVGa08wRkJRMEVzVFVGQlRVc3NVVUZCVVZRc1JVRkJSVWtzVDBGQlJpeERRVUZWTEUxQlFWWXNRMEZCWkR0QlFVTkJMRTFCUVUxTkxFMUJRVTFZTEVWQlFVVkxMRTlCUVVZc1EwRkJWU3hKUVVGV0xFTkJRVm83UVVGRFFTeE5RVUZOVHl4TlFVRk5XQ3hGUVVGRlNTeFBRVUZHTEVOQlFWVXNTVUZCVml4RFFVRmFPenRCUVVWQk8wRkJRMEVzVFVGQlRWRXNhMEpCUVd0Q1F5eExRVUZMUXl4SFFVRk1MRU5CUVZOWUxGbEJRVmxLTEVWQlFVVm5RaXhWUVVGR0xFVkJRWEpDTEVWQlFYRkRWaXhUUVVGeVF5eERRVUY0UWp0QlFVTkJMRTFCUVUxWExDdENRVUVyUWpOQ0xHZENRVUZuUW05Q0xFdEJRV2hDTEVWQlFYVkNSU3hIUVVGMlFpeEZRVUUwUWs0c1UwRkJOVUlzUlVGQmRVTlBMR1ZCUVhaRExFVkJRWGRFVEN4TFFVRjRSQ3hEUVVGeVF6dEJRVU5CTEUxQlFVMVZMSEZDUVVGelFsSXNVVUZCVVZJc1VVRkJjRU03UVVGRFFTeE5RVUZOYVVJc2JVSkJRVzlDUml3clFrRkJLMEpPTEVkQlFYcEVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEUxQlFVMVRMRXRCUVV0c1FpeFJRVUZZTzBGQlEwRXNUVUZCVFcxQ0xHTkJRV01zUTBGQlEwUXNSVUZCUkN4RFFVRndRanM3UVVGRlFUdEJRVU5CTzBGQlEwRXNUVUZCVFVVc2EwSkJRVzFDU2l4MVFrRkJkVUpETEdkQ1FVRm9SRHRCUVVOQkxFMUJRVWxITEdWQlFVb3NSVUZCY1VJN1FVRkRia0lzVVVGQlNVTXNWMEZCVjFZc2EwSkJRV3RDWml4UlFVRnFRenM3UVVGRlFTeFRRVUZMTEVsQlFVa3dRaXhKUVVGSkxFTkJRV0lzUlVGQlowSkJMRWxCUVVreFFpeFJRVUZ3UWl4RlFVRTRRakJDTEVkQlFUbENMRVZCUVcxRE8wRkJRMnBETEZWQlFVMURMR05CUVdORUxFbEJRVWxFTEZGQlFYaENPenRCUVVWQkxGVkJRVTFITEdWQlFXVndReXhuUWtGQlowSnRRaXhMUVVGb1FpeEZRVUYxUWtVc1IwRkJka0lzUlVGQk5FSlFMRk5CUVRWQ0xFVkJRWFZEU2l4RlFVRkZUaXhQUVVGR0xFZEJRVmtyUWl4WFFVRnVSQ3hGUVVGblJXeENMRXRCUVdoRkxFTkJRWEpDTzBGQlEwRXNWVUZCVFc5Q0xHVkJRV1Z5UXl4blFrRkJaMEp2UWl4TFFVRm9RaXhGUVVGMVFrVXNSMEZCZGtJc1JVRkJORUpPTEZOQlFUVkNMRVZCUVhWRFRDeEZRVUZGVUN4UFFVRkdMRWRCUVZrclFpeFhRVUZ1UkN4RlFVRm5SV3BDTEV0QlFXaEZMRU5CUVhKQ096dEJRVVZCTEZWQlFVMXZRaXhwUWtGRFNGWXNjMEpCUVhOQ1VTeGxRVUZsUXl4WlFVRjBReXhKUVVORExFTkJRVU5VTEd0Q1FVRkVMRWxCUVhWQ1VTeGxRVUZsUXl4WlFVWjZRenM3UVVGTFFTeFZRVUZKUXl4alFVRktMRVZCUVc5Q08wRkJRMnhDTEZsQlFVMURMRXRCUVV0R0xGbEJRVmc3UVVGRFFVNHNiMEpCUVZsVExFbEJRVm9zUTBGQmFVSkVMRVZCUVdwQ08wRkJRMEU3UVVGRFJEdEJRVU5HTzBGQlEwWTdPMEZCUlVRN1FVRkRRVHRCUVVOQkxFMUJRVTFGTEV0QlFVdGtMRFJDUVVGWU8wRkJRMEZKTEdOQlFWbFRMRWxCUVZvc1EwRkJhVUpETEVWQlFXcENPenRCUVVWQk8wRkJRMEVzVFVGQlRVTXNTMEZCUzNCQ0xFZEJRVmc3UVVGRFFWTXNZMEZCV1ZNc1NVRkJXaXhEUVVGcFFrVXNSVUZCYWtJN08wRkJSVUVzVTBGQlR5eHJRMEZEUm1wRExFdEJSRVU3UVVGRlRFNHNZMEZCVldFc1UwRkdURHRCUVVkTVdDeDNRa0ZJU3p0QlFVbE1SU3hqUVVGVkxIZENRVU5TTERCQ1FVRlBkMElzVjBGQlVDeERRVVJSTEVWQlJWSjRRaXhSUVVaUk8wRkJTa3dzUzBGQlVEdEJRVk5FTEVNaUxDSm1hV3hsSWpvaVlteGxibVF0ZEhkbFpXNXpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIUjNaV1Z1SUdaeWIyMGdKeTR2ZEhkbFpXNG5PMXh1YVcxd2IzSjBJSHNnYkdsdVpXRnlJSDBnWm5KdmJTQW5MaTR2YVc1akwyVmhjMmx1WnljN1hHNXBiWEJ2Y25RZ2V5Qm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU3dnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVwYlhCdmNuUWdleUJtYkc5M0xDQmpiR0Z0Y0N3Z1ltVjZhV1Z5SUgwZ1puSnZiU0FuTGk0dmFXNWpMM1J5WVc1elptOXliV1Z5Y3ljN1hHNWNibU52Ym5OMElHTnNZVzF3VUhKdlozSmxjM01nUFNCamJHRnRjQ2d3TENBeEtUdGNibHh1Wm5WdVkzUnBiMjRnWTJGc1kxWmhiSFZsUVhSVWFXMWxLR1p5YjIwc0lIUnZMQ0JrZFhKaGRHbHZiaXdnWld4aGNITmxaQ3dnWldGelpTa2dlMXh1SUNCamIyNXpkQ0J3Y205bmNtVnpjMEYwVkdsdFpTQTlJR1ZoYzJVb1kyeGhiWEJRY205bmNtVnpjeWhuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNnd0xDQmtkWEpoZEdsdmJpd2daV3hoY0hObFpDa3BLVHRjYmlBZ2NtVjBkWEp1SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektHWnliMjBzSUhSdkxDQndjbTluY21WemMwRjBWR2x0WlNrN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2g3SUdaeWIyMHNJSFJ2TENCdmJsVndaR0YwWlN3Z1lXTmpkWEpoWTNrZ1BTQTJNQ3dnTGk0dWNISnZjSE1nZlNrZ1BUNGdlMXh1SUNBdkx5QkhaWFFnZEhkbFpXNGdjSEp2Y0dWeWRHbGxjMXh1SUNCamIyNXpkQ0JoSUQwZ1puSnZiVHRjYmlBZ1kyOXVjM1FnWWlBOUlIUnZPMXh1SUNCamIyNXpkQ0JoUTNWeWNtVnVkQ0E5SUdFdVoyVjBLQ2s3WEc0Z0lHTnZibk4wSUdGRWRYSmhkR2x2YmlBOUlHRXVaMlYwVUhKdmNDZ25aSFZ5WVhScGIyNG5LVHRjYmlBZ1kyOXVjM1FnWWtSMWNtRjBhVzl1SUQwZ1lpNW5aWFJRY205d0tDZGtkWEpoZEdsdmJpY3BPMXh1SUNCamIyNXpkQ0JoUldGelpTQTlJR0V1WjJWMFVISnZjQ2duWldGelpTY3BPMXh1SUNCamIyNXpkQ0JpUldGelpTQTlJR0l1WjJWMFVISnZjQ2duWldGelpTY3BPMXh1SUNCamIyNXpkQ0JoUm5KdmJTQTlJR0V1WjJWMFVISnZjQ2duWm5KdmJTY3BPMXh1SUNCamIyNXpkQ0JpUm5KdmJTQTlJR0l1WjJWMFVISnZjQ2duWm5KdmJTY3BPMXh1SUNCamIyNXpkQ0JoVkc4Z1BTQmhMbWRsZEZCeWIzQW9KM1J2SnlrN1hHNGdJR052Ym5OMElHSlVieUE5SUdJdVoyVjBVSEp2Y0NnbmRHOG5LVHRjYmx4dUlDQXZMeUJCYm1Gc2VYTmxJSFIzWldWdWMxeHVJQ0JqYjI1emRDQnZkbVZ5YkdGd1JIVnlZWFJwYjI0Z1BTQk5ZWFJvTG0xcGJpaGhSSFZ5WVhScGIyNGdMU0JoTG1kbGRFVnNZWEJ6WldRb0tTd2dZa1IxY21GMGFXOXVLVHRjYmlBZ1kyOXVjM1FnWWxaaGJIVmxRWFJVZDJWbGJrOTJaWEpzWVhCRGIyMXdiR1YwWlNBOUlHTmhiR05XWVd4MVpVRjBWR2x0WlNoaVJuSnZiU3dnWWxSdkxDQmlSSFZ5WVhScGIyNHNJRzkyWlhKc1lYQkVkWEpoZEdsdmJpd2dZa1ZoYzJVcE8xeHVJQ0JqYjI1emRDQmlVM1JoY25SelNHbG5hR1Z5VkdoaGJrRWdQU0FvWWtaeWIyMGdQaUJoUTNWeWNtVnVkQ2s3WEc0Z0lHTnZibk4wSUdKRmJtUnpTR2xuYUdWeVZHaGhia0VnUFNBb1lsWmhiSFZsUVhSVWQyVmxiazkyWlhKc1lYQkRiMjF3YkdWMFpTQStJR0ZVYnlrN1hHNWNiaUFnTHk4Z1FteGxibVFnY0c5cGJuUnpJR0Z5WlNCa1pXWnBibVZrSUdGeklGdDBJRDBnZEdsdFpTd2dkaUE5SUhaaGJIVmxRWFJVYVcxbFhWeHVJQ0F2THlCUU1WeHVJQ0F2THlCVWFHVWdjM1JoY25RZ2IyWWdkR2hsSUhSM1pXVnVJR0pzWlc1a1hHNGdJR052Ym5OMElGQXhJRDBnWVVOMWNuSmxiblE3WEc0Z0lHTnZibk4wSUdKc1pXNWtVRzlwYm5SeklEMGdXMUF4WFR0Y2JseHVJQ0F2THlCR2FXNWtJRkF5WEc0Z0lDOHZJRlJvWlNCd2IzTnphV0pzWlNCcGJuUmxjbk5sWTNScGIyNGdjRzlwYm5RZ1ltVjBkMlZsYmlCMGFHVWdkSGR2SUhSM1pXVnVjMXh1SUNCamIyNXpkQ0IwZDJWbGJuTkpiblJsY25ObFkzUWdQU0FvWWxOMFlYSjBjMGhwWjJobGNsUm9ZVzVCSUNFOVBTQmlSVzVrYzBocFoyaGxjbFJvWVc1QktUdGNiaUFnYVdZZ0tIUjNaV1Z1YzBsdWRHVnljMlZqZENrZ2UxeHVJQ0FnSUd4bGRDQjBhVzFsYzNSbGNDQTlJRzkyWlhKc1lYQkVkWEpoZEdsdmJpQXZJR0ZqWTNWeVlXTjVPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JoWTJOMWNtRmplVHNnYVNzcktTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCeWRXNXVhVzVuVkdsdFpTQTlJR2tnS2lCMGFXMWxjM1JsY0R0Y2JseHVJQ0FnSUNBZ1kyOXVjM1FnWVZaaGJIVmxRWFJVYVcxbElEMGdZMkZzWTFaaGJIVmxRWFJVYVcxbEtHRkdjbTl0TENCaFZHOHNJR0ZFZFhKaGRHbHZiaXdnWVM1bGJHRndjMlZrSUNzZ2NuVnVibWx1WjFScGJXVXNJR0ZGWVhObEtUdGNiaUFnSUNBZ0lHTnZibk4wSUdKV1lXeDFaVUYwVkdsdFpTQTlJR05oYkdOV1lXeDFaVUYwVkdsdFpTaGlSbkp2YlN3Z1lsUnZMQ0JpUkhWeVlYUnBiMjRzSUdJdVpXeGhjSE5sWkNBcklISjFibTVwYm1kVWFXMWxMQ0JpUldGelpTazdYRzVjYmlBZ0lDQWdJR052Ym5OMElHaGhjMGx1ZEdWeWMyVmpkR1ZrSUQwZ0tGeHVJQ0FnSUNBZ0lDQW9ZbE4wWVhKMGMwaHBaMmhsY2xSb1lXNUJJQ1ltSUdGV1lXeDFaVUYwVkdsdFpTQStJR0pXWVd4MVpVRjBWR2x0WlNrZ2ZIeGNiaUFnSUNBZ0lDQWdLQ0ZpVTNSaGNuUnpTR2xuYUdWeVZHaGhia0VnSmlZZ1lWWmhiSFZsUVhSVWFXMWxJRHdnWWxaaGJIVmxRWFJVYVcxbEtWeHVJQ0FnSUNBZ0tUdGNibHh1SUNBZ0lDQWdhV1lnS0doaGMwbHVkR1Z5YzJWamRHVmtLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRkF5SUQwZ1lsWmhiSFZsUVhSVWFXMWxPMXh1SUNBZ0lDQWdJQ0JpYkdWdVpGQnZhVzUwY3k1d2RYTm9LRkF5S1R0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTHk4Z1VETmNiaUFnTHk4Z1ZHaGxJSEJ2YVc1MGN5QjBhR1VnZEhkdklIUjNaV1Z1Y3lCemRHOXdJRzkyWlhKc1lYQndhVzVuWEc0Z0lHTnZibk4wSUZBeklEMGdZbFpoYkhWbFFYUlVkMlZsYms5MlpYSnNZWEJEYjIxd2JHVjBaVHRjYmlBZ1lteGxibVJRYjJsdWRITXVjSFZ6YUNoUU15azdYRzVjYmlBZ0x5OGdVSFZ6YUNCMGFHVWdaVzVrSUhOMFlYUmxJRzltSUdJZ2RIZGxaVzRnWVhNZ1ptbHVZV3dnWTI5dWRISnZiQ0J3YjJsdWRGeHVJQ0JqYjI1emRDQlFOQ0E5SUdKVWJ6dGNiaUFnWW14bGJtUlFiMmx1ZEhNdWNIVnphQ2hRTkNrN1hHNWNiaUFnY21WMGRYSnVJSFIzWldWdUtIdGNiaUFnSUNBdUxpNXdjbTl3Y3l4Y2JpQWdJQ0JrZFhKaGRHbHZiam9nWWtSMWNtRjBhVzl1TEZ4dUlDQWdJR1ZoYzJVNklHeHBibVZoY2l4Y2JpQWdJQ0J2YmxWd1pHRjBaVG9nWm14dmR5aGNiaUFnSUNBZ0lHSmxlbWxsY2loaWJHVnVaRkJ2YVc1MGN5a3NYRzRnSUNBZ0lDQnZibFZ3WkdGMFpWeHVJQ0FnSUNsY2JpQWdmU2s3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDaGFpbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDaGFpbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ2hhaW4ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhaW4pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5wbGF5TmV4dCA9IF90aGlzLnBsYXlOZXh0LmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIENoYWluLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB0aGlzLnByb3BzLmkgPSAwO1xuICAgIHRoaXMucGxheUN1cnJlbnQoKTtcbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUucGxheU5leHQgPSBmdW5jdGlvbiBwbGF5TmV4dCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgaSA9IF9wcm9wcy5pO1xuICAgIHZhciBvcmRlciA9IF9wcm9wcy5vcmRlcjtcblxuICAgIGlmIChpIDwgb3JkZXIubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5wcm9wcy5pKys7XG4gICAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLnBsYXlDdXJyZW50ID0gZnVuY3Rpb24gcGxheUN1cnJlbnQoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBpID0gX3Byb3BzMi5pO1xuICAgIHZhciBvcmRlciA9IF9wcm9wczIub3JkZXI7XG5cbiAgICBvcmRlcltpXS5wcm9wcy5fb25Db21wbGV0ZSA9IHRoaXMucGxheU5leHQ7XG4gICAgb3JkZXJbaV0uc3RhcnQoKTtcbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgaSA9IF9wcm9wczMuaTtcbiAgICB2YXIgb3JkZXIgPSBfcHJvcHMzLm9yZGVyO1xuXG4gICAgb3JkZXJbaV0uc3RvcCgpO1xuICB9O1xuXG4gIHJldHVybiBDaGFpbjtcbn0oXzIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcmRlciwgb25Db21wbGV0ZSkge1xuICByZXR1cm4gbmV3IENoYWluKHsgb3JkZXI6IG9yZGVyLCBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOb1lXbHVMbXB6SWwwc0ltNWhiV1Z6SWpwYklrTm9ZV2x1SWl3aWNISnZjSE1pTENKd2JHRjVUbVY0ZENJc0ltSnBibVFpTENKdmJsTjBZWEowSWl3aWFTSXNJbkJzWVhsRGRYSnlaVzUwSWl3aWIzSmtaWElpTENKc1pXNW5kR2dpTENKamIyMXdiR1YwWlNJc0lsOXZia052YlhCc1pYUmxJaXdpYzNSaGNuUWlMQ0p2YmxOMGIzQWlMQ0p6ZEc5d0lpd2liMjVEYjIxd2JHVjBaU0pkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPenM3T3pzN096czdTVUZGVFVFc1N6czdPMEZCUTBvc2FVSkJRVmxETEV0QlFWb3NSVUZCYlVJN1FVRkJRVHM3UVVGQlFTeHBSRUZEYWtJc2JVSkJRVTFCTEV0QlFVNHNRMEZFYVVJN08wRkJSV3BDTEZWQlFVdERMRkZCUVV3c1IwRkJaMElzVFVGQlMwRXNVVUZCVEN4RFFVRmpReXhKUVVGa0xFOUJRV2hDTzBGQlJtbENPMEZCUjJ4Q096dHJRa0ZGUkVNc1R5eHpRa0ZCVlR0QlFVTlNMRk5CUVV0SUxFdEJRVXdzUTBGQlYwa3NRMEZCV0N4SFFVRmxMRU5CUVdZN1FVRkRRU3hUUVVGTFF5eFhRVUZNTzBGQlEwUXNSenM3YTBKQlJVUktMRkVzZFVKQlFWYzdRVUZCUVN4cFFrRkRXU3hMUVVGTFJDeExRVVJxUWp0QlFVRkJMRkZCUTBSSkxFTkJSRU1zVlVGRFJFRXNRMEZFUXp0QlFVRkJMRkZCUTBWRkxFdEJSRVlzVlVGRFJVRXNTMEZFUmpzN1FVRkZWQ3hSUVVGSlJpeEpRVUZKUlN4TlFVRk5ReXhOUVVGT0xFZEJRV1VzUTBGQmRrSXNSVUZCTUVJN1FVRkRlRUlzVjBGQlMxQXNTMEZCVEN4RFFVRlhTU3hEUVVGWU8wRkJRMEVzVjBGQlMwTXNWMEZCVER0QlFVTkVMRXRCU0VRc1RVRkhUenRCUVVOTUxGZEJRVXRITEZGQlFVdzdRVUZEUkR0QlFVTkdMRWM3TzJ0Q1FVVkVTQ3hYTERCQ1FVRmpPMEZCUVVFc2EwSkJRMU1zUzBGQlMwd3NTMEZFWkR0QlFVRkJMRkZCUTBwSkxFTkJSRWtzVjBGRFNrRXNRMEZFU1R0QlFVRkJMRkZCUTBSRkxFdEJSRU1zVjBGRFJFRXNTMEZFUXpzN1FVRkZXa0VzVlVGQlRVWXNRMEZCVGl4RlFVRlRTaXhMUVVGVUxFTkJRV1ZUTEZkQlFXWXNSMEZCTmtJc1MwRkJTMUlzVVVGQmJFTTdRVUZEUVVzc1ZVRkJUVVlzUTBGQlRpeEZRVUZUVFN4TFFVRlVPMEZCUTBRc1J6czdhMEpCUlVSRExFMHNjVUpCUVZNN1FVRkJRU3hyUWtGRFl5eExRVUZMV0N4TFFVUnVRanRCUVVGQkxGRkJRME5KTEVOQlJFUXNWMEZEUTBFc1EwRkVSRHRCUVVGQkxGRkJRMGxGTEV0QlJFb3NWMEZEU1VFc1MwRkVTanM3UVVGRlVFRXNWVUZCVFVZc1EwRkJUaXhGUVVGVFVTeEpRVUZVTzBGQlEwUXNSenM3T3pzN2EwSkJSMWtzVlVGQlEwNHNTMEZCUkN4RlFVRlJUeXhWUVVGU08wRkJRVUVzVTBGQmRVSXNTVUZCU1dRc1MwRkJTaXhEUVVGVkxFVkJRVVZQTEZsQlFVWXNSVUZCVTA4c2MwSkJRVlFzUlVGQlZpeERRVUYyUWp0QlFVRkJMRU1pTENKbWFXeGxJam9pWTJoaGFXNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2Snp0Y2JseHVZMnhoYzNNZ1EyaGhhVzRnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhOMWNHVnlLSEJ5YjNCektUdGNiaUFnSUNCMGFHbHpMbkJzWVhsT1pYaDBJRDBnZEdocGN5NXdiR0Y1VG1WNGRDNWlhVzVrS0hSb2FYTXBPMXh1SUNCOVhHNWNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0IwYUdsekxuQnliM0J6TG1rZ1BTQXdPMXh1SUNBZ0lIUm9hWE11Y0d4aGVVTjFjbkpsYm5Rb0tUdGNiaUFnZlZ4dVhHNGdJSEJzWVhsT1pYaDBLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dhU3dnYjNKa1pYSWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnYVdZZ0tHa2dQQ0J2Y21SbGNpNXNaVzVuZEdnZ0xTQXhLU0I3WEc0Z0lDQWdJQ0IwYUdsekxuQnliM0J6TG1rckt6dGNiaUFnSUNBZ0lIUm9hWE11Y0d4aGVVTjFjbkpsYm5Rb0tUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnZEdocGN5NWpiMjF3YkdWMFpTZ3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEJzWVhsRGRYSnlaVzUwS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYVN3Z2IzSmtaWElnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ2IzSmtaWEpiYVYwdWNISnZjSE11WDI5dVEyOXRjR3hsZEdVZ1BTQjBhR2x6TG5Cc1lYbE9aWGgwTzF4dUlDQWdJRzl5WkdWeVcybGRMbk4wWVhKMEtDazdYRzRnSUgxY2JseHVJQ0J2YmxOMGIzQW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QnBMQ0J2Y21SbGNpQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0J2Y21SbGNsdHBYUzV6ZEc5d0tDazdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLRzl5WkdWeUxDQnZia052YlhCc1pYUmxLU0E5UGlCdVpYY2dRMmhoYVc0b2V5QnZjbVJsY2l3Z2IyNURiMjF3YkdWMFpTQjlLVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY2hhaW4uanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi4vaW5jL3ZhbHVlLXR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBub29wID0gZnVuY3Rpb24gKCkge307XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gKDAsIF90d2VlbjIuZGVmYXVsdCkoX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgZnJvbTogMCxcbiAgICB0bzogMSxcbiAgICBvblVwZGF0ZTogKDAsIF90cmFuc2Zvcm1lcnMuZmxvdykoKDAsIF90cmFuc2Zvcm1lcnMuYmxlbmRDb2xvcikocHJvcHMuZnJvbSwgcHJvcHMudG8pLCBfdmFsdWVUeXBlcy5jb2xvci50cmFuc2Zvcm0sIHByb3BzLm9uVXBkYXRlIHx8IG5vb3ApXG4gIH0pKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnZiRzl5TFhSM1pXVnVMbXB6SWwwc0ltNWhiV1Z6SWpwYkltNXZiM0FpTENKd2NtOXdjeUlzSW1aeWIyMGlMQ0owYnlJc0ltOXVWWEJrWVhSbElpd2lkSEpoYm5ObWIzSnRJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenRCUVVOQk96dEJRVU5CT3pzN08wRkJSVUVzU1VGQlRVRXNUMEZCVHl4WlFVRk5MRU5CUVVVc1EwRkJja0k3TzJ0Q1FVVmxMRlZCUVVORExFdEJRVVFzUlVGQlZ6dEJRVU40UWl4VFFVRlBMR3REUVVOR1FTeExRVVJGTzBGQlJVeERMRlZCUVUwc1EwRkdSRHRCUVVkTVF5eFJRVUZKTEVOQlNFTTdRVUZKVEVNc1kwRkJWU3gzUWtGRFVpdzRRa0ZCVjBnc1RVRkJUVU1zU1VGQmFrSXNSVUZCZFVKRUxFMUJRVTFGTEVWQlFUZENMRU5CUkZFc1JVRkZVaXhyUWtGQlRVVXNVMEZHUlN4RlFVZFNTaXhOUVVGTlJ5eFJRVUZPTEVsQlFXdENTaXhKUVVoV08wRkJTa3dzUzBGQlVEdEJRVlZFTEVNaUxDSm1hV3hsSWpvaVkyOXNiM0l0ZEhkbFpXNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RIZGxaVzRnWm5KdmJTQW5MaTkwZDJWbGJpYzdYRzVwYlhCdmNuUWdleUJpYkdWdVpFTnZiRzl5TENCbWJHOTNJSDBnWm5KdmJTQW5MaTR2YVc1akwzUnlZVzV6Wm05eWJXVnljeWM3WEc1cGJYQnZjblFnZXlCamIyeHZjaUI5SUdaeWIyMGdKeTR1TDJsdVl5OTJZV3gxWlMxMGVYQmxjeWM3WEc1Y2JtTnZibk4wSUc1dmIzQWdQU0FvS1NBOVBpQjdmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hCeWIzQnpLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQjBkMlZsYmloN1hHNGdJQ0FnTGk0dWNISnZjSE1zWEc0Z0lDQWdabkp2YlRvZ01DeGNiaUFnSUNCMGJ6b2dNU3hjYmlBZ0lDQnZibFZ3WkdGMFpUb2dabXh2ZHloY2JpQWdJQ0FnSUdKc1pXNWtRMjlzYjNJb2NISnZjSE11Wm5KdmJTd2djSEp2Y0hNdWRHOHBMRnh1SUNBZ0lDQWdZMjlzYjNJdWRISmhibk5tYjNKdExGeHVJQ0FnSUNBZ2NISnZjSE11YjI1VmNHUmhkR1VnZkh3Z2JtOXZjRnh1SUNBZ0lDbGNiaUFnZlNrN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9jb2xvci10d2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENvbXBvc2l0ZUFjdGlvbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDb21wb3NpdGVBY3Rpb24sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENvbXBvc2l0ZUFjdGlvbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb3NpdGVBY3Rpb24pO1xuXG4gICAgdmFyIGFjdGlvbnMgPSBwcm9wcy5hY3Rpb25zO1xuXG4gICAgdmFyIHJlbWFpbmluZ1Byb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ2FjdGlvbnMnXSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwodGhpcywgcmVtYWluaW5nUHJvcHMpKTtcblxuICAgIF90aGlzLmN1cnJlbnQgPSB7fTtcbiAgICBfdGhpcy5hY3Rpb25LZXlzID0gW107XG4gICAgX3RoaXMuYWRkQWN0aW9ucyhwcm9wcy5hY3Rpb25zKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmFkZEFjdGlvbnMgPSBmdW5jdGlvbiBhZGRBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChfdGhpczIuYWN0aW9uS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgIF90aGlzMi5hY3Rpb25LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMyW2tleV0gPSBhY3Rpb25zW2tleV07XG5cbiAgICAgIHZhciBvblVwZGF0ZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuY3VycmVudFtrZXldID0gdjtcbiAgICAgIH07XG5cbiAgICAgIC8vIEltbWVkaWF0ZWx5IHVwZGF0ZSB3aXRoIHRoZSBjdXJyZW50IGFjdGlvbiBzdGF0ZVxuICAgICAgb25VcGRhdGUoX3RoaXMyW2tleV0uZ2V0KCkpO1xuXG4gICAgICBfdGhpczJba2V5XS5zZXRQcm9wcyh7XG4gICAgICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuICAgICAgfSkuYWRkTGlzdGVuZXIob25VcGRhdGUpO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYWN0aW9ucykge1xuICAgICAgX2xvb3Aoa2V5KTtcbiAgICB9XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IHRoaXMuYWN0aW9uS2V5cy5sZW5ndGg7XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzM1trZXldLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXM0W2tleV0uc3RvcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciB2ZWxvY2l0eSA9IHt9O1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB2ZWxvY2l0eVtrZXldID0gX3RoaXM1W2tleV0uZ2V0VmVsb2NpdHkoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwO1xuICB9O1xuXG4gIHJldHVybiBDb21wb3NpdGVBY3Rpb247XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDb21wb3NpdGVBY3Rpb24oX2V4dGVuZHMoe1xuICAgIGFjdGlvbnM6IGFjdGlvbnNcbiAgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnZiWEJ2YzJsMFpTNXFjeUpkTENKdVlXMWxjeUk2V3lKRGIyMXdiM05wZEdWQlkzUnBiMjRpTENKd2NtOXdjeUlzSW1GamRHbHZibk1pTENKeVpXMWhhVzVwYm1kUWNtOXdjeUlzSW1OMWNuSmxiblFpTENKaFkzUnBiMjVMWlhseklpd2lZV1JrUVdOMGFXOXVjeUlzSW10bGVTSXNJbWx1WkdWNFQyWWlMQ0p3ZFhOb0lpd2liMjVWY0dSaGRHVWlMQ0oySWl3aVoyVjBJaXdpYzJWMFVISnZjSE1pTENKZmIyNVRkRzl3SWl3aWJuVnRRV04wYVhabFFXTjBhVzl1Y3lJc0ltRmtaRXhwYzNSbGJtVnlJaXdpYjI1VGRHRnlkQ0lzSW14bGJtZDBhQ0lzSW1admNrVmhZMmdpTENKemRHRnlkQ0lzSW05dVUzUnZjQ0lzSW5OMGIzQWlMQ0puWlhSV1pXeHZZMmwwZVNJc0luWmxiRzlqYVhSNUlpd2lhWE5CWTNScGIyNURiMjF3YkdWMFpTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVVFN096czdPenM3T3pzN096czdPMGxCUlUxQkxHVTdPenRCUVVOS0xESkNRVUZaUXl4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlFVRXNVVUZEVkVNc1QwRkVVeXhIUVVOelFrUXNTMEZFZEVJc1EwRkRWRU1zVDBGRVV6czdRVUZCUVN4UlFVTkhReXhqUVVSSUxEUkNRVU56UWtZc1MwRkVkRUk3TzBGQlFVRXNhVVJCUldwQ0xHMUNRVUZOUlN4alFVRk9MRU5CUm1sQ096dEJRVWRxUWl4VlFVRkxReXhQUVVGTUxFZEJRV1VzUlVGQlpqdEJRVU5CTEZWQlFVdERMRlZCUVV3c1IwRkJhMElzUlVGQmJFSTdRVUZEUVN4VlFVRkxReXhWUVVGTUxFTkJRV2RDVEN4TlFVRk5ReXhQUVVGMFFqdEJRVXhwUWp0QlFVMXNRanM3TkVKQlJVUkpMRlVzZFVKQlFWZEtMRThzUlVGQlV6dEJRVUZCT3p0QlFVRkJMREJDUVVOUVN5eEhRVVJQTzBGQlJXaENMRlZCUVVrc1QwRkJTMFlzVlVGQlRDeERRVUZuUWtjc1QwRkJhRUlzUTBGQmQwSkVMRWRCUVhoQ0xFMUJRV2xETEVOQlFVTXNRMEZCZEVNc1JVRkJlVU03UVVGRGRrTXNaVUZCUzBZc1ZVRkJUQ3hEUVVGblFra3NTVUZCYUVJc1EwRkJjVUpHTEVkQlFYSkNPMEZCUTBRN08wRkJSVVFzWVVGQlMwRXNSMEZCVEN4SlFVRlpUQ3hSUVVGUlN5eEhRVUZTTEVOQlFWbzdPMEZCUlVFc1ZVRkJUVWNzVjBGQlZ5eFZRVUZEUXl4RFFVRkVPMEZCUVVFc1pVRkJUeXhQUVVGTFVDeFBRVUZNTEVOQlFXRkhMRWRCUVdJc1NVRkJiMEpKTEVOQlFUTkNPMEZCUVVFc1QwRkJha0k3TzBGQlJVRTdRVUZEUVVRc1pVRkJVeXhQUVVGTFNDeEhRVUZNTEVWQlFWVkxMRWRCUVZZc1JVRkJWRHM3UVVGRlFTeGhRVUZMVEN4SFFVRk1MRVZCUTBkTkxGRkJSRWdzUTBGRFdUdEJRVU5TUXl4cFFrRkJVenRCUVVGQkxHbENRVUZOTEU5QlFVdERMR2RDUVVGTUxFVkJRVTQ3UVVGQlFUdEJRVVJFTEU5QlJGb3NSVUZKUjBNc1YwRktTQ3hEUVVsbFRpeFJRVXBtTzBGQlltZENPenRCUVVOc1FpeFRRVUZMTEVsQlFVMUlMRWRCUVZnc1NVRkJhMEpNTEU5QlFXeENMRVZCUVRKQ08wRkJRVUVzV1VGQmFFSkxMRWRCUVdkQ08wRkJhVUl4UWp0QlFVTkdMRWM3T3pSQ1FVVkVWU3hQTEhOQ1FVRlZPMEZCUVVFN08wRkJRMUlzVTBGQlMwWXNaMEpCUVV3c1IwRkJkMElzUzBGQlMxWXNWVUZCVEN4RFFVRm5RbUVzVFVGQmVFTTdRVUZEUVN4VFFVRkxZaXhWUVVGTUxFTkJRV2RDWXl4UFFVRm9RaXhEUVVGM1FpeFZRVUZEV2l4SFFVRkVPMEZCUVVFc1lVRkJVeXhQUVVGTFFTeEhRVUZNTEVWQlFWVmhMRXRCUVZZc1JVRkJWRHRCUVVGQkxFdEJRWGhDTzBGQlEwUXNSenM3TkVKQlJVUkRMRTBzY1VKQlFWTTdRVUZCUVRzN1FVRkRVQ3hUUVVGTGFFSXNWVUZCVEN4RFFVRm5RbU1zVDBGQmFFSXNRMEZCZDBJc1ZVRkJRMW9zUjBGQlJEdEJRVUZCTEdGQlFWTXNUMEZCUzBFc1IwRkJUQ3hGUVVGVlpTeEpRVUZXTEVWQlFWUTdRVUZCUVN4TFFVRjRRanRCUVVORUxFYzdPelJDUVVWRVF5eFhMREJDUVVGak8wRkJRVUU3TzBGQlExb3NVVUZCVFVNc1YwRkJWeXhGUVVGcVFqdEJRVU5CTEZOQlFVdHVRaXhWUVVGTUxFTkJRV2RDWXl4UFFVRm9RaXhEUVVGM1FpeFZRVUZEV2l4SFFVRkVPMEZCUVVFc1lVRkJVMmxDTEZOQlFWTnFRaXhIUVVGVUxFbEJRV2RDTEU5QlFVdEJMRWRCUVV3c1JVRkJWV2RDTEZkQlFWWXNSVUZCZWtJN1FVRkJRU3hMUVVGNFFqdEJRVU5CTEZkQlFVOURMRkZCUVZBN1FVRkRSQ3hIT3pzMFFrRkZSRU1zWjBJc0swSkJRVzFDTzBGQlEycENMRmRCUVZFc1MwRkJTMVlzWjBKQlFVd3NTMEZCTUVJc1EwRkJiRU03UVVGRFJDeEhPenM3T3p0clFrRkhXU3hWUVVGRFlpeFBRVUZFTEVWQlFWVkVMRXRCUVZZc1JVRkJiMEk3UVVGRGFrTXNVMEZCVHl4SlFVRkpSQ3hsUVVGS08wRkJRMHhGTzBGQlJFc3NTMEZGUmtRc1MwRkdSU3hGUVVGUU8wRkJTVVFzUXlJc0ltWnBiR1VpT2lKamIyMXdiM05wZEdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYmx4dVkyeGhjM01nUTI5dGNHOXphWFJsUVdOMGFXOXVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnWTI5dWMzUnlkV04wYjNJb2NISnZjSE1wSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR0ZqZEdsdmJuTXNJQzR1TG5KbGJXRnBibWx1WjFCeWIzQnpJSDBnUFNCd2NtOXdjenRjYmlBZ0lDQnpkWEJsY2loeVpXMWhhVzVwYm1kUWNtOXdjeWs3WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwSUQwZ2UzMDdYRzRnSUNBZ2RHaHBjeTVoWTNScGIyNUxaWGx6SUQwZ1cxMDdYRzRnSUNBZ2RHaHBjeTVoWkdSQlkzUnBiMjV6S0hCeWIzQnpMbUZqZEdsdmJuTXBPMXh1SUNCOVhHNWNiaUFnWVdSa1FXTjBhVzl1Y3loaFkzUnBiMjV6S1NCN1hHNGdJQ0FnWm05eUlDaGpiMjV6ZENCclpYa2dhVzRnWVdOMGFXOXVjeWtnZTF4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11WVdOMGFXOXVTMlY1Y3k1cGJtUmxlRTltS0d0bGVTa2dQVDA5SUMweEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXTjBhVzl1UzJWNWN5NXdkWE5vS0d0bGVTazdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSFJvYVhOYmEyVjVYU0E5SUdGamRHbHZibk5iYTJWNVhUdGNibHh1SUNBZ0lDQWdZMjl1YzNRZ2IyNVZjR1JoZEdVZ1BTQW9kaWtnUFQ0Z2RHaHBjeTVqZFhKeVpXNTBXMnRsZVYwZ1BTQjJPMXh1WEc0Z0lDQWdJQ0F2THlCSmJXMWxaR2xoZEdWc2VTQjFjR1JoZEdVZ2QybDBhQ0IwYUdVZ1kzVnljbVZ1ZENCaFkzUnBiMjRnYzNSaGRHVmNiaUFnSUNBZ0lHOXVWWEJrWVhSbEtIUm9hWE5iYTJWNVhTNW5aWFFvS1NrN1hHNWNiaUFnSUNBZ0lIUm9hWE5iYTJWNVhWeHVJQ0FnSUNBZ0lDQXVjMlYwVUhKdmNITW9lMXh1SUNBZ0lDQWdJQ0FnSUY5dmJsTjBiM0E2SUNncElEMCtJSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3kwdFhHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQWdJQzVoWkdSTWFYTjBaVzVsY2lodmJsVndaR0YwWlNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTWdQU0IwYUdsekxtRmpkR2x2Ymt0bGVYTXViR1Z1WjNSb08xeHVJQ0FnSUhSb2FYTXVZV04wYVc5dVMyVjVjeTVtYjNKRllXTm9LQ2hyWlhrcElEMCtJSFJvYVhOYmEyVjVYUzV6ZEdGeWRDZ3BLVHRjYmlBZ2ZWeHVYRzRnSUc5dVUzUnZjQ2dwSUh0Y2JpQWdJQ0IwYUdsekxtRmpkR2x2Ymt0bGVYTXVabTl5UldGamFDZ29hMlY1S1NBOVBpQjBhR2x6VzJ0bGVWMHVjM1J2Y0NncEtUdGNiaUFnZlZ4dVhHNGdJR2RsZEZabGJHOWphWFI1S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSFpsYkc5amFYUjVJRDBnZTMwN1hHNGdJQ0FnZEdocGN5NWhZM1JwYjI1TFpYbHpMbVp2Y2tWaFkyZ29LR3RsZVNrZ1BUNGdkbVZzYjJOcGRIbGJhMlY1WFNBOUlIUm9hWE5iYTJWNVhTNW5aWFJXWld4dlkybDBlU2dwS1R0Y2JpQWdJQ0J5WlhSMWNtNGdkbVZzYjJOcGRIazdYRzRnSUgxY2JseHVJQ0JwYzBGamRHbHZia052YlhCc1pYUmxLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQW9kR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6SUQwOVBTQXdLVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWVdOMGFXOXVjeXdnY0hKdmNITXBJRDArSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJEYjIxd2IzTnBkR1ZCWTNScGIyNG9lMXh1SUNBZ0lHRmpkR2x2Ym5Nc1hHNGdJQ0FnTGk0dWNISnZjSE5jYmlBZ2ZTazdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY29tcG9zaXRlLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJy4uL2luYy9lYXNpbmcnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ3Jvc3NGYWRlID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENyb3NzRmFkZSwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ3Jvc3NGYWRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDcm9zc0ZhZGUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDcm9zc0ZhZGUucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkdXJhdGlvbiA9IF9wcm9wcy5kdXJhdGlvbjtcbiAgICB2YXIgZWFzZSA9IF9wcm9wcy5lYXNlO1xuICAgIHZhciBmYWRlciA9IF9wcm9wcy5mYWRlcjtcblxuXG4gICAgdGhpcy5mYWRlciA9IGZhZGVyIHx8ICgwLCBfdHdlZW4yLmRlZmF1bHQpKHtcbiAgICAgIHRvOiAxLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZWFzZTogZWFzZVxuICAgIH0pLnN0YXJ0KCk7XG4gIH07XG5cbiAgQ3Jvc3NGYWRlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmcm9tID0gX3Byb3BzMi5mcm9tO1xuICAgIHZhciB0byA9IF9wcm9wczIudG87XG5cbiAgICB2YXIgYmFsYW5jZSA9IHRoaXMuZmFkZXIuZ2V0KCk7XG4gICAgdmFyIGxhdGVzdEZyb21WYWx1ZSA9IGZyb20uZ2V0KCk7XG4gICAgdmFyIGxhdGVzdFRvVmFsdWUgPSB0by5nZXQoKTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShsYXRlc3RGcm9tVmFsdWUsIGxhdGVzdFRvVmFsdWUsIGJhbGFuY2UpO1xuICB9O1xuXG4gIHJldHVybiBDcm9zc0ZhZGU7XG59KF8yLmRlZmF1bHQpO1xuXG5Dcm9zc0ZhZGUuZGVmYXVsdFByb3BzID0ge1xuICBlYXNlOiBfZWFzaW5nLmxpbmVhclxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ3Jvc3NGYWRlKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnliM056TFdaaFpHVXVhbk1pWFN3aWJtRnRaWE1pT2xzaVEzSnZjM05HWVdSbElpd2liMjVUZEdGeWRDSXNJbkJ5YjNCeklpd2laSFZ5WVhScGIyNGlMQ0psWVhObElpd2labUZrWlhJaUxDSjBieUlzSW5OMFlYSjBJaXdpZFhCa1lYUmxJaXdpWm5KdmJTSXNJbUpoYkdGdVkyVWlMQ0puWlhRaUxDSnNZWFJsYzNSR2NtOXRWbUZzZFdVaUxDSnNZWFJsYzNSVWIxWmhiSFZsSWl3aVpHVm1ZWFZzZEZCeWIzQnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3p0QlFVTkJPenM3T3pzN096czdPMGxCUlUxQkxGTTdPenM3T3pzN096dHpRa0ZMU2tNc1R5eHpRa0ZCVlR0QlFVRkJMR2xDUVVNd1FpeExRVUZMUXl4TFFVUXZRanRCUVVGQkxGRkJRMEZETEZGQlJFRXNWVUZEUVVFc1VVRkVRVHRCUVVGQkxGRkJRMVZETEVsQlJGWXNWVUZEVlVFc1NVRkVWanRCUVVGQkxGRkJRMmRDUXl4TFFVUm9RaXhWUVVOblFrRXNTMEZFYUVJN096dEJRVWRTTEZOQlFVdEJMRXRCUVV3c1IwRkJZVUVzVTBGQlV5eHhRa0ZCVFR0QlFVTXhRa01zVlVGQlNTeERRVVJ6UWp0QlFVVXhRa2dzZDBKQlJqQkNPMEZCUnpGQ1F6dEJRVWd3UWl4TFFVRk9MRVZCU1c1Q1J5eExRVXB0UWl4RlFVRjBRanRCUVV0RUxFYzdPM05DUVVWRVF5eE5MSEZDUVVGVE8wRkJRVUVzYTBKQlEyTXNTMEZCUzA0c1MwRkVia0k3UVVGQlFTeFJRVU5EVHl4SlFVUkVMRmRCUTBOQkxFbEJSRVE3UVVGQlFTeFJRVU5QU0N4RlFVUlFMRmRCUTA5QkxFVkJSRkE3TzBGQlJWQXNVVUZCVFVrc1ZVRkJWU3hMUVVGTFRDeExRVUZNTEVOQlFWZE5MRWRCUVZnc1JVRkJhRUk3UVVGRFFTeFJRVUZOUXl4clFrRkJhMEpJTEV0QlFVdEZMRWRCUVV3c1JVRkJlRUk3UVVGRFFTeFJRVUZOUlN4blFrRkJaMEpRTEVkQlFVZExMRWRCUVVnc1JVRkJkRUk3UVVGRFFTeFhRVUZQTEdkRFFVRnhRa01zWlVGQmNrSXNSVUZCYzBORExHRkJRWFJETEVWQlFYRkVTQ3hQUVVGeVJDeERRVUZRTzBGQlEwUXNSenM3T3pzN1FVRnlRa2RXTEZNc1EwRkRSMk1zV1N4SFFVRmxPMEZCUTNCQ1ZqdEJRVVJ2UWl4RE96dHJRa0YxUWxRc1ZVRkJRMFlzUzBGQlJEdEJRVUZCTEZOQlFWY3NTVUZCU1VZc1UwRkJTaXhEUVVGalJTeExRVUZrTEVOQlFWZzdRVUZCUVN4RElpd2labWxzWlNJNkltTnliM056TFdaaFpHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2Snp0Y2JtbHRjRzl5ZENCMGQyVmxiaUJtY205dElDY3VMM1IzWldWdUp6dGNibWx0Y0c5eWRDQjdJR3hwYm1WaGNpQjlJR1p5YjIwZ0p5NHVMMmx1WXk5bFlYTnBibWNuTzF4dWFXMXdiM0owSUhzZ1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JtTnNZWE56SUVOeWIzTnpSbUZrWlNCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lITjBZWFJwWXlCa1pXWmhkV3gwVUhKdmNITWdQU0I3WEc0Z0lDQWdaV0Z6WlRvZ2JHbHVaV0Z5WEc0Z0lIMWNibHh1SUNCdmJsTjBZWEowS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWkhWeVlYUnBiMjRzSUdWaGMyVXNJR1poWkdWeUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnZEdocGN5NW1ZV1JsY2lBOUlHWmhaR1Z5SUh4OElIUjNaV1Z1S0h0Y2JpQWdJQ0FnSUhSdk9pQXhMRnh1SUNBZ0lDQWdaSFZ5WVhScGIyNHNYRzRnSUNBZ0lDQmxZWE5sWEc0Z0lDQWdmU2t1YzNSaGNuUW9LVHRjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1p5YjIwc0lIUnZJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJR0poYkdGdVkyVWdQU0IwYUdsekxtWmhaR1Z5TG1kbGRDZ3BPMXh1SUNBZ0lHTnZibk4wSUd4aGRHVnpkRVp5YjIxV1lXeDFaU0E5SUdaeWIyMHVaMlYwS0NrN1hHNGdJQ0FnWTI5dWMzUWdiR0YwWlhOMFZHOVdZV3gxWlNBOUlIUnZMbWRsZENncE8xeHVJQ0FnSUhKbGRIVnliaUJuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3loc1lYUmxjM1JHY205dFZtRnNkV1VzSUd4aGRHVnpkRlJ2Vm1Gc2RXVXNJR0poYkdGdVkyVXBPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2h3Y205d2N5a2dQVDRnYm1WM0lFTnliM056Um1Ga1pTaHdjbTl3Y3lrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGR1cmF0aW9uLCBvbkNvbXBsZXRlKSB7XG4gIHJldHVybiAoMCwgX3R3ZWVuMi5kZWZhdWx0KSh7IGR1cmF0aW9uOiBkdXJhdGlvbiwgb25Db21wbGV0ZTogb25Db21wbGV0ZSB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyUmxiR0Y1TG1weklsMHNJbTVoYldWeklqcGJJbVIxY21GMGFXOXVJaXdpYjI1RGIyMXdiR1YwWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3T3pzN2EwSkJSV1VzVlVGQlEwRXNVVUZCUkN4RlFVRlhReXhWUVVGWU8wRkJRVUVzVTBGQk1FSXNjVUpCUVUwc1JVRkJSVVFzYTBKQlFVWXNSVUZCV1VNc2MwSkJRVm9zUlVGQlRpeERRVUV4UWp0QlFVRkJMRU1pTENKbWFXeGxJam9pWkdWc1lYa3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RIZGxaVzRnWm5KdmJTQW5MaTkwZDJWbGJpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hrZFhKaGRHbHZiaXdnYjI1RGIyMXdiR1YwWlNrZ1BUNGdkSGRsWlc0b2V5QmtkWEpoZEdsdmJpd2diMjVEYjIxd2JHVjBaU0I5S1R0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2RlbGF5LmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQYXJhbGxlbCA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQYXJhbGxlbCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGFyYWxsZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhcmFsbGVsKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLnByb3BzLmFjdGlvbnM7XG5cbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSBhY3Rpb25zLmxlbmd0aDtcblxuICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICBhY3Rpb24uc2V0UHJvcHMoe1xuICAgICAgICBfb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLnN0b3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUuYWRkQWN0aW9uID0gZnVuY3Rpb24gYWRkQWN0aW9uKGFjdGlvbikge1xuICAgIHZhciBhY3Rpb25zID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuXG5cbiAgICBpZiAoYWN0aW9ucy5pbmRleE9mKGFjdGlvbikgPT09IC0xKSB7XG4gICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDA7XG4gIH07XG5cbiAgcmV0dXJuIFBhcmFsbGVsO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGFyYWxsZWwoX2V4dGVuZHMoeyBhY3Rpb25zOiBhY3Rpb25zIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0JoY21Gc2JHVnNMbXB6SWwwc0ltNWhiV1Z6SWpwYklsQmhjbUZzYkdWc0lpd2liMjVUZEdGeWRDSXNJbUZqZEdsdmJuTWlMQ0p3Y205d2N5SXNJbTUxYlVGamRHbDJaVUZqZEdsdmJuTWlMQ0pzWlc1bmRHZ2lMQ0ptYjNKRllXTm9JaXdpWVdOMGFXOXVJaXdpYzJWMFVISnZjSE1pTENKZmIyNVRkRzl3SWl3aWMzUmhjblFpTENKdmJsTjBiM0FpTENKemRHOXdJaXdpWVdSa1FXTjBhVzl1SWl3aWFXNWtaWGhQWmlJc0luQjFjMmdpTENKcGMwRmpkR2x2YmtOdmJYQnNaWFJsSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3pzN096czdPenM3TzBsQlJVMUJMRkU3T3pzN096czdPenR4UWtGRFNrTXNUeXh6UWtGQlZUdEJRVUZCT3p0QlFVRkJMRkZCUTBGRExFOUJSRUVzUjBGRFdTeExRVUZMUXl4TFFVUnFRaXhEUVVOQlJDeFBRVVJCT3p0QlFVVlNMRk5CUVV0RkxHZENRVUZNTEVkQlFYZENSaXhSUVVGUlJ5eE5RVUZvUXpzN1FVRkZRVWdzV1VGQlVVa3NUMEZCVWl4RFFVRm5RaXhWUVVGRFF5eE5RVUZFTEVWQlFWazdRVUZETVVKQkxHRkJRVTlETEZGQlFWQXNRMEZCWjBJN1FVRkRaRU1zYVVKQlFWTTdRVUZCUVN4cFFrRkJUU3hQUVVGTFRDeG5Ra0ZCVEN4RlFVRk9PMEZCUVVFN1FVRkVTeXhQUVVGb1FpeEZRVVZIVFN4TFFVWklPMEZCUjBRc1MwRktSRHRCUVV0RUxFYzdPM0ZDUVVWRVF5eE5MSEZDUVVGVE8wRkJRMUFzVTBGQlMxSXNTMEZCVEN4RFFVRlhSQ3hQUVVGWUxFTkJRVzFDU1N4UFFVRnVRaXhEUVVFeVFpeFZRVUZEUXl4TlFVRkVPMEZCUVVFc1lVRkJXVUVzVDBGQlQwc3NTVUZCVUN4RlFVRmFPMEZCUVVFc1MwRkJNMEk3UVVGRFJDeEhPenR4UWtGRlJFTXNVeXh6UWtGQlZVNHNUU3hGUVVGUk8wRkJRVUVzVVVGRFVrd3NUMEZFVVN4SFFVTkpMRXRCUVV0RExFdEJSRlFzUTBGRFVrUXNUMEZFVVRzN08wRkJSMmhDTEZGQlFVbEJMRkZCUVZGWkxFOUJRVklzUTBGQlowSlFMRTFCUVdoQ0xFMUJRVFJDTEVOQlFVTXNRMEZCYWtNc1JVRkJiME03UVVGRGJFTk1MR05CUVZGaExFbEJRVklzUTBGQllWSXNUVUZCWWp0QlFVTkVPMEZCUTBZc1J6czdjVUpCUlVSVExHZENMQ3RDUVVGdFFqdEJRVU5xUWl4WFFVRlJMRXRCUVV0YUxHZENRVUZNTEV0QlFUQkNMRU5CUVd4RE8wRkJRMFFzUnpzN096czdhMEpCUjFrc1ZVRkJRMFlzVDBGQlJDeEZRVUZWUXl4TFFVRldPMEZCUVVFc1UwRkJiMElzU1VGQlNVZ3NVVUZCU2l4WlFVRmxSU3huUWtGQlppeEpRVUV5UWtNc1MwRkJNMElzUlVGQmNFSTdRVUZCUVN4RElpd2labWxzWlNJNkluQmhjbUZzYkdWc0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMeWM3WEc1Y2JtTnNZWE56SUZCaGNtRnNiR1ZzSUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdGamRHbHZibk1nZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpJRDBnWVdOMGFXOXVjeTVzWlc1bmRHZzdYRzVjYmlBZ0lDQmhZM1JwYjI1ekxtWnZja1ZoWTJnb0tHRmpkR2x2YmlrZ1BUNGdlMXh1SUNBZ0lDQWdZV04wYVc5dUxuTmxkRkJ5YjNCektIdGNiaUFnSUNBZ0lDQWdYMjl1VTNSdmNEb2dLQ2tnUFQ0Z2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpMUzFjYmlBZ0lDQWdJSDBwTG5OMFlYSjBLQ2s3WEc0Z0lDQWdmU2s3WEc0Z0lIMWNibHh1SUNCdmJsTjBiM0FvS1NCN1hHNGdJQ0FnZEdocGN5NXdjbTl3Y3k1aFkzUnBiMjV6TG1admNrVmhZMmdvS0dGamRHbHZiaWtnUFQ0Z1lXTjBhVzl1TG5OMGIzQW9LU2s3WEc0Z0lIMWNibHh1SUNCaFpHUkJZM1JwYjI0b1lXTjBhVzl1S1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJoWTNScGIyNXpJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2FXWWdLR0ZqZEdsdmJuTXVhVzVrWlhoUFppaGhZM1JwYjI0cElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ1lXTjBhVzl1Y3k1d2RYTm9LR0ZqZEdsdmJpazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdhWE5CWTNScGIyNURiMjF3YkdWMFpTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z0tIUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeUE5UFQwZ01DazdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR0ZqZEdsdmJuTXNJSEJ5YjNCektTQTlQaUJ1WlhjZ1VHRnlZV3hzWld3b2V5QmhZM1JwYjI1ekxDQXVMaTV3Y205d2N5QjlLVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGFyYWxsZWwuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBoeXNpY3MgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoUGh5c2ljcywgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGh5c2ljcyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFBoeXNpY3MucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgYXV0b1N0b3BTcGVlZCA9IF9wcm9wcy5hdXRvU3RvcFNwZWVkO1xuICAgIHZhciBhY2NlbGVyYXRpb24gPSBfcHJvcHMuYWNjZWxlcmF0aW9uO1xuICAgIHZhciBmcmljdGlvbiA9IF9wcm9wcy5mcmljdGlvbjtcbiAgICB2YXIgdmVsb2NpdHkgPSBfcHJvcHMudmVsb2NpdHk7XG4gICAgdmFyIHNwcmluZyA9IF9wcm9wcy5zcHJpbmc7XG4gICAgdmFyIHRvID0gX3Byb3BzLnRvO1xuXG4gICAgdmFyIG5ld1ZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgdmFyIGVsYXBzZWQgPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCk7XG5cbiAgICAvLyBBcHBseSBhY2NlbGVyYXRpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoYWNjZWxlcmF0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkoYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBmcmljdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChmcmljdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKj0gTWF0aC5wb3coMSAtIGZyaWN0aW9uLCBlbGFwc2VkIC8gMTAwKTtcbiAgICB9XG5cbiAgICBpZiAoc3ByaW5nICYmIHRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBkaXN0YW5jZVRvVGFyZ2V0ID0gdG8gLSB0aGlzLmN1cnJlbnQ7XG4gICAgICBuZXdWZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHNwcmluZywgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdmVsb2NpdHlcbiAgICB0aGlzLmN1cnJlbnQgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKG5ld1ZlbG9jaXR5LCBlbGFwc2VkKTtcbiAgICB0aGlzLnByb3BzLnZlbG9jaXR5ID0gbmV3VmVsb2NpdHk7XG5cbiAgICAvLyBDaGVjayBpZiBzaW11bGF0aW9uIGlzIGNvbXBsZXRlXG4gICAgLy8gV2UgZG8gdGhpcyBoZXJlIGluc3RlYWQgb2YgYGlzQWN0aW9uQ29tcGxldGVgIGFzIGl0IGFsbG93cyB1c1xuICAgIC8vIHRvIGNsYW1wIGR1cmluZyB0aGlzIHVwZGF0ZVxuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGF1dG9TdG9wU3BlZWQgIT09IGZhbHNlICYmICghbmV3VmVsb2NpdHkgfHwgTWF0aC5hYnMobmV3VmVsb2NpdHkpIDw9IGF1dG9TdG9wU3BlZWQpO1xuXG4gICAgaWYgKHRoaXMuaXNDb21wbGV0ZSAmJiBzcHJpbmcpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRvO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH07XG5cbiAgUGh5c2ljcy5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgfTtcblxuICByZXR1cm4gUGh5c2ljcztcbn0oXzIuZGVmYXVsdCk7XG5cblBoeXNpY3MuZGVmYXVsdFByb3BzID0ge1xuICBhY2NlbGVyYXRpb246IDAsXG4gIGZyaWN0aW9uOiAwLFxuICB2ZWxvY2l0eTogMCxcbiAgYXV0b1N0b3BTcGVlZDogMC4wMDFcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IFBoeXNpY3MocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sc2lVR2g1YzJsamN5SXNJblZ3WkdGMFpTSXNJbkJ5YjNCeklpd2lZWFYwYjFOMGIzQlRjR1ZsWkNJc0ltRmpZMlZzWlhKaGRHbHZiaUlzSW1aeWFXTjBhVzl1SWl3aWRtVnNiMk5wZEhraUxDSnpjSEpwYm1jaUxDSjBieUlzSW01bGQxWmxiRzlqYVhSNUlpd2laV3hoY0hObFpDSXNJblZ1WkdWbWFXNWxaQ0lzSW1ScGMzUmhibU5sVkc5VVlYSm5aWFFpTENKamRYSnlaVzUwSWl3aWFYTkRiMjF3YkdWMFpTSXNJazFoZEdnaUxDSmhZbk1pTENKcGMwRmpkR2x2YmtOdmJYQnNaWFJsSWl3aVpHVm1ZWFZzZEZCeWIzQnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN1FVRkRRVHM3T3pzN096czdPenRKUVVWTlFTeFBPenM3T3pzN096czdiMEpCVVVwRExFMHNjVUpCUVZNN1FVRkJRU3hwUWtGRGFVVXNTMEZCUzBNc1MwRkVkRVU3UVVGQlFTeFJRVU5EUXl4aFFVUkVMRlZCUTBOQkxHRkJSRVE3UVVGQlFTeFJRVU5uUWtNc1dVRkVhRUlzVlVGRFowSkJMRmxCUkdoQ08wRkJRVUVzVVVGRE9FSkRMRkZCUkRsQ0xGVkJRemhDUVN4UlFVUTVRanRCUVVGQkxGRkJRM2REUXl4UlFVUjRReXhWUVVOM1EwRXNVVUZFZUVNN1FVRkJRU3hSUVVOclJFTXNUVUZFYkVRc1ZVRkRhMFJCTEUxQlJHeEVPMEZCUVVFc1VVRkRNRVJETEVWQlJERkVMRlZCUXpCRVFTeEZRVVF4UkRzN1FVRkZVQ3hSUVVGSlF5eGpRVUZqU0N4UlFVRnNRanRCUVVOQkxGRkJRVTFKTEZWQlFWVXNiME5CUVdoQ096dEJRVVZCTzBGQlEwRXNVVUZCU1U0c1dVRkJTaXhGUVVGclFqdEJRVU5vUWtzc2NVSkJRV1VzZVVKQlFXTk1MRmxCUVdRc1JVRkJORUpOTEU5QlFUVkNMRU5CUVdZN1FVRkRSRHM3UVVGRlJEdEJRVU5CTEZGQlFVbE1MRkZCUVVvc1JVRkJZenRCUVVOYVNTdzRRa0ZCWjBJc1NVRkJTVW9zVVVGQmNFSXNSVUZCYTBOTExGVkJRVlVzUjBGQk5VTTdRVUZEUkRzN1FVRkZSQ3hSUVVGSlNDeFZRVUZWUXl4UFFVRlBSeXhUUVVGeVFpeEZRVUZuUXp0QlFVTTVRaXhWUVVGTlF5eHRRa0ZCYlVKS0xFdEJRVXNzUzBGQlMwc3NUMEZCYmtNN1FVRkRRVW9zY1VKQlFXVkhMRzFDUVVGdFFpeDVRa0ZCWTB3c1RVRkJaQ3hGUVVGelFrY3NUMEZCZEVJc1EwRkJiRU03UVVGRFJEczdRVUZGUkR0QlFVTkJMRk5CUVV0SExFOUJRVXdzU1VGQlowSXNlVUpCUVdOS0xGZEJRV1FzUlVGQk1rSkRMRTlCUVROQ0xFTkJRV2hDTzBGQlEwRXNVMEZCUzFJc1MwRkJUQ3hEUVVGWFNTeFJRVUZZTEVkQlFYTkNSeXhYUVVGMFFqczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGTFN5eFZRVUZNTEVkQlFXMUNXQ3hyUWtGQmEwSXNTMEZCYkVJc1MwRkJORUlzUTBGQlEwMHNWMEZCUkN4SlFVRm5RazBzUzBGQlMwTXNSMEZCVEN4RFFVRlRVQ3hYUVVGVUxFdEJRWGxDVGl4aFFVRnlSU3hEUVVGdVFqczdRVUZGUVN4UlFVRkpMRXRCUVV0WExGVkJRVXdzU1VGQmJVSlFMRTFCUVhaQ0xFVkJRU3RDTzBGQlF6ZENMRmRCUVV0TkxFOUJRVXdzUjBGQlpVd3NSVUZCWmp0QlFVTkVPenRCUVVWRUxGZEJRVThzUzBGQlMwc3NUMEZCV2p0QlFVTkVMRWM3TzI5Q1FVVkVTU3huUWl3clFrRkJiVUk3UVVGRGFrSXNWMEZCVHl4TFFVRkxTQ3hWUVVGYU8wRkJRMFFzUnpzN096czdRVUU1UTBka0xFOHNRMEZEUjJ0Q0xGa3NSMEZCWlR0QlFVTndRbVFzWjBKQlFXTXNRMEZFVFR0QlFVVndRa01zV1VGQlZTeERRVVpWTzBGQlIzQkNReXhaUVVGVkxFTkJTRlU3UVVGSmNFSklMR2xDUVVGbE8wRkJTa3NzUXpzN2EwSkJaMFJVTEZWQlFVTkVMRXRCUVVRN1FVRkJRU3hUUVVGWExFbEJRVWxHTEU5QlFVb3NRMEZCV1VVc1MwRkJXaXhEUVVGWU8wRkJRVUVzUXlJc0ltWnBiR1VpT2lKd2FIbHphV056TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVwYlhCdmNuUWdleUIwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VnZlNCbWNtOXRJQ2N1TGk5bWNtRnRaWE41Ym1Nbk8xeHVhVzF3YjNKMElIc2djM0JsWldSUVpYSkdjbUZ0WlNCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibHh1WTJ4aGMzTWdVR2g1YzJsamN5QmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJSE4wWVhScFl5QmtaV1poZFd4MFVISnZjSE1nUFNCN1hHNGdJQ0FnWVdOalpXeGxjbUYwYVc5dU9pQXdMRnh1SUNBZ0lHWnlhV04wYVc5dU9pQXdMRnh1SUNBZ0lIWmxiRzlqYVhSNU9pQXdMRnh1SUNBZ0lHRjFkRzlUZEc5d1UzQmxaV1E2SURBdU1EQXhYRzRnSUgxY2JseHVJQ0IxY0dSaGRHVW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmhkWFJ2VTNSdmNGTndaV1ZrTENCaFkyTmxiR1Z5WVhScGIyNHNJR1p5YVdOMGFXOXVMQ0IyWld4dlkybDBlU3dnYzNCeWFXNW5MQ0IwYnlCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQnNaWFFnYm1WM1ZtVnNiMk5wZEhrZ1BTQjJaV3h2WTJsMGVUdGNiaUFnSUNCamIyNXpkQ0JsYkdGd2MyVmtJRDBnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsS0NrN1hHNWNiaUFnSUNBdkx5QkJjSEJzZVNCaFkyTmxiR1Z5WVhScGIyNGdkRzhnZG1Wc2IyTnBkSGxjYmlBZ0lDQnBaaUFvWVdOalpXeGxjbUYwYVc5dUtTQjdYRzRnSUNBZ0lDQnVaWGRXWld4dlkybDBlU0FyUFNCemNHVmxaRkJsY2taeVlXMWxLR0ZqWTJWc1pYSmhkR2x2Yml3Z1pXeGhjSE5sWkNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1FYQndiSGtnWm5KcFkzUnBiMjRnZEc4Z2RtVnNiMk5wZEhsY2JpQWdJQ0JwWmlBb1puSnBZM1JwYjI0cElIdGNiaUFnSUNBZ0lHNWxkMVpsYkc5amFYUjVJQ285SUNneElDMGdabkpwWTNScGIyNHBJQ29xSUNobGJHRndjMlZrSUM4Z01UQXdLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYzNCeWFXNW5JQ1ltSUhSdklDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR1JwYzNSaGJtTmxWRzlVWVhKblpYUWdQU0IwYnlBdElIUm9hWE11WTNWeWNtVnVkRHRjYmlBZ0lDQWdJRzVsZDFabGJHOWphWFI1SUNzOUlHUnBjM1JoYm1ObFZHOVVZWEpuWlhRZ0tpQnpjR1ZsWkZCbGNrWnlZVzFsS0hOd2NtbHVaeXdnWld4aGNITmxaQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnUVhCd2JIa2dkbVZzYjJOcGRIbGNiaUFnSUNCMGFHbHpMbU4xY25KbGJuUWdLejBnYzNCbFpXUlFaWEpHY21GdFpTaHVaWGRXWld4dlkybDBlU3dnWld4aGNITmxaQ2s3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTUyWld4dlkybDBlU0E5SUc1bGQxWmxiRzlqYVhSNU8xeHVYRzRnSUNBZ0x5OGdRMmhsWTJzZ2FXWWdjMmx0ZFd4aGRHbHZiaUJwY3lCamIyMXdiR1YwWlZ4dUlDQWdJQzh2SUZkbElHUnZJSFJvYVhNZ2FHVnlaU0JwYm5OMFpXRmtJRzltSUdCcGMwRmpkR2x2YmtOdmJYQnNaWFJsWUNCaGN5QnBkQ0JoYkd4dmQzTWdkWE5jYmlBZ0lDQXZMeUIwYnlCamJHRnRjQ0JrZFhKcGJtY2dkR2hwY3lCMWNHUmhkR1ZjYmlBZ0lDQjBhR2x6TG1selEyOXRjR3hsZEdVZ1BTQW9ZWFYwYjFOMGIzQlRjR1ZsWkNBaFBUMGdabUZzYzJVZ0ppWWdLQ0Z1WlhkV1pXeHZZMmwwZVNCOGZDQk5ZWFJvTG1GaWN5aHVaWGRXWld4dlkybDBlU2tnUEQwZ1lYVjBiMU4wYjNCVGNHVmxaQ2twTzF4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YVhORGIyMXdiR1YwWlNBbUppQnpjSEpwYm1jcElIdGNiaUFnSUNBZ0lIUm9hWE11WTNWeWNtVnVkQ0E5SUhSdk8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtTjFjbkpsYm5RN1hHNGdJSDFjYmx4dUlDQnBjMEZqZEdsdmJrTnZiWEJzWlhSbEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbWx6UTI5dGNHeGxkR1U3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hCeWIzQnpLU0E5UGlCdVpYY2dVR2g1YzJsamN5aHdjbTl3Y3lrN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGh5c2ljcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdmFsdWUgPSByZXF1aXJlKCcuL3ZhbHVlJyk7XG5cbnZhciBfdmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWUpO1xuXG52YXIgX2NvbXBvc2l0ZSA9IHJlcXVpcmUoJy4vY29tcG9zaXRlJyk7XG5cbnZhciBfY29tcG9zaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2l0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gY3JlYXRlUG9pbnRlcihfcmVmMiwgX3JlZikge1xuICB2YXIgeCA9IF9yZWYyLng7XG4gIHZhciB5ID0gX3JlZjIueTtcbiAgdmFyIGV2ZW50VG9Qb2ludHMgPSBfcmVmLmV2ZW50VG9Qb2ludHM7XG4gIHZhciBtb3ZlRXZlbnQgPSBfcmVmLm1vdmVFdmVudDtcblxuICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydldmVudFRvUG9pbnRzJywgJ21vdmVFdmVudCddKTtcblxuICB2YXIgcG9pbnRlciA9ICgwLCBfY29tcG9zaXRlMi5kZWZhdWx0KSh7XG4gICAgeDogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeCksXG4gICAgeTogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeSlcbiAgfSwgX2V4dGVuZHMoe1xuICAgIHByZXZlbnREZWZhdWx0OiB0cnVlXG4gIH0sIHByb3BzKSk7XG5cbiAgdmFyIHVwZGF0ZVBvaW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChwcm9wcy5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciBwb2ludHMgPSBldmVudFRvUG9pbnRzKGUpO1xuICAgIHBvaW50ZXIueC5zZXQocG9pbnRzLngpO1xuICAgIHBvaW50ZXIueS5zZXQocG9pbnRzLnkpO1xuICB9O1xuXG4gIHBvaW50ZXIuc2V0UHJvcHMoe1xuICAgIF9vblN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVQb2ludGVyKTtcbiAgICB9LFxuICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBvaW50ZXI7XG59XG5cbnZhciBtb3VzZUV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiB7XG4gICAgeDogZS5wYWdlWCxcbiAgICB5OiBlLnBhZ2VZXG4gIH07XG59O1xuXG52YXIgdG91Y2hFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgdmFyIGNoYW5nZWRUb3VjaGVzID0gX3JlZjMuY2hhbmdlZFRvdWNoZXM7XG4gIHJldHVybiB7XG4gICAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG4gIH07XG59O1xuXG52YXIgZ2V0TmF0aXZlRXZlbnQgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4gZS5vcmlnaW5hbEV2ZW50IHx8IGUubmF0aXZlRXZlbnQgfHwgZTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlLCBwcm9wcykge1xuICB2YXIgbmF0aXZlRXZlbnQgPSBnZXROYXRpdmVFdmVudChlKTtcbiAgcmV0dXJuIG5hdGl2ZUV2ZW50LnRvdWNoZXMgPyBjcmVhdGVQb2ludGVyKHRvdWNoRXZlbnRUb1BvaW50KGUpLCBfZXh0ZW5kcyh7XG4gICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICBldmVudFRvUG9pbnRzOiB0b3VjaEV2ZW50VG9Qb2ludFxuICB9LCBwcm9wcykpIDogY3JlYXRlUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwgX2V4dGVuZHMoe1xuICAgIG1vdmVFdmVudDogJ21vdXNlbW92ZScsXG4gICAgZXZlbnRUb1BvaW50czogbW91c2VFdmVudFRvUG9pbnRcbiAgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQnZhVzUwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHNpWTNKbFlYUmxVRzlwYm5SbGNpSXNJbmdpTENKNUlpd2laWFpsYm5SVWIxQnZhVzUwY3lJc0ltMXZkbVZGZG1WdWRDSXNJbkJ5YjNCeklpd2ljRzlwYm5SbGNpSXNJbkJ5WlhabGJuUkVaV1poZFd4MElpd2lkWEJrWVhSbFVHOXBiblJsY2lJc0ltVWlMQ0p3YjJsdWRITWlMQ0p6WlhRaUxDSnpaWFJRY205d2N5SXNJbDl2YmxOMFlYSjBJaXdpWkc5amRXMWxiblFpTENKa2IyTjFiV1Z1ZEVWc1pXMWxiblFpTENKaFpHUkZkbVZ1ZEV4cGMzUmxibVZ5SWl3aVgyOXVVM1J2Y0NJc0luSmxiVzkyWlVWMlpXNTBUR2x6ZEdWdVpYSWlMQ0p0YjNWelpVVjJaVzUwVkc5UWIybHVkQ0lzSW5CaFoyVllJaXdpY0dGblpWa2lMQ0owYjNWamFFVjJaVzUwVkc5UWIybHVkQ0lzSW1Ob1lXNW5aV1JVYjNWamFHVnpJaXdpWTJ4cFpXNTBXQ0lzSW1Oc2FXVnVkRmtpTENKblpYUk9ZWFJwZG1WRmRtVnVkQ0lzSW05eWFXZHBibUZzUlhabGJuUWlMQ0p1WVhScGRtVkZkbVZ1ZENJc0luUnZkV05vWlhNaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN096czdPMEZCUlVFc1UwRkJVMEVzWVVGQlZDeGpRVUY1UlR0QlFVRkJMRTFCUVdoRVF5eERRVUZuUkN4VFFVRm9SRUVzUTBGQlowUTdRVUZCUVN4TlFVRTNRME1zUTBGQk5rTXNVMEZCTjBOQkxFTkJRVFpETzBGQlFVRXNUVUZCZEVORExHRkJRWE5ETEZGQlFYUkRRU3hoUVVGelF6dEJRVUZCTEUxQlFYWkNReXhUUVVGMVFpeFJRVUYyUWtFc1UwRkJkVUk3TzBGQlFVRXNUVUZCVkVNc1MwRkJVenM3UVVGRGRrVXNUVUZCVFVNc1ZVRkJWU3g1UWtGQlZUdEJRVU40UWt3c1QwRkJSeXh4UWtGQlRVRXNRMEZCVGl4RFFVUnhRanRCUVVWNFFrTXNUMEZCUnl4eFFrRkJUVUVzUTBGQlRqdEJRVVp4UWl4SFFVRldPMEZCU1dSTExHOUNRVUZuUWp0QlFVcEdMRXRCUzFoR0xFdEJURmNzUlVGQmFFSTdPMEZCVVVFc1RVRkJUVWNzWjBKQlFXZENMRlZCUVVORExFTkJRVVFzUlVGQlR6dEJRVU16UWl4UlFVRkpTaXhOUVVGTlJTeGpRVUZXTEVWQlFUQkNPMEZCUTNoQ1JTeFJRVUZGUml4alFVRkdPMEZCUTBRN08wRkJSVVFzVVVGQlRVY3NVMEZCVTFBc1kwRkJZMDBzUTBGQlpDeERRVUZtTzBGQlEwRklMRmxCUVZGTUxFTkJRVklzUTBGQlZWVXNSMEZCVml4RFFVRmpSQ3hQUVVGUFZDeERRVUZ5UWp0QlFVTkJTeXhaUVVGUlNpeERRVUZTTEVOQlFWVlRMRWRCUVZZc1EwRkJZMFFzVDBGQlQxSXNRMEZCY2tJN1FVRkRSQ3hIUVZKRU96dEJRVlZCU1N4VlFVRlJUU3hSUVVGU0xFTkJRV2xDTzBGQlEyWkRMR05CUVZVN1FVRkJRU3hoUVVGTlF5eFRRVUZUUXl4bFFVRlVMRU5CUVhsQ1F5eG5Ra0ZCZWtJc1EwRkJNRU5hTEZOQlFURkRMRVZCUVhGRVNTeGhRVUZ5UkN4RFFVRk9PMEZCUVVFc1MwRkVTenRCUVVWbVV5eGhRVUZUTzBGQlFVRXNZVUZCVFVnc1UwRkJVME1zWlVGQlZDeERRVUY1UWtjc2JVSkJRWHBDTEVOQlFUWkRaQ3hUUVVFM1F5eEZRVUYzUkVrc1lVRkJlRVFzUTBGQlRqdEJRVUZCTzBGQlJrMHNSMEZCYWtJN08wRkJTMEVzVTBGQlQwWXNUMEZCVUR0QlFVTkVPenRCUVVWRUxFbEJRVTFoTEc5Q1FVRnZRaXhWUVVGRFZpeERRVUZFTzBGQlFVRXNVMEZCVVR0QlFVTm9RMUlzVDBGQlIxRXNSVUZCUlZjc1MwRkVNa0k3UVVGRmFFTnNRaXhQUVVGSFR5eEZRVUZGV1R0QlFVWXlRaXhIUVVGU08wRkJRVUVzUTBGQk1VSTdPMEZCUzBFc1NVRkJUVU1zYjBKQlFXOUNPMEZCUVVFc1RVRkJSME1zWTBGQlNDeFRRVUZIUVN4alFVRklPMEZCUVVFc1UwRkJlVUk3UVVGRGFrUjBRaXhQUVVGSGMwSXNaVUZCWlN4RFFVRm1MRVZCUVd0Q1F5eFBRVVEwUWp0QlFVVnFSSFJDTEU5QlFVZHhRaXhsUVVGbExFTkJRV1lzUlVGQmEwSkZPMEZCUmpSQ0xFZEJRWHBDTzBGQlFVRXNRMEZCTVVJN08wRkJTMEVzU1VGQlRVTXNhVUpCUVdsQ0xGVkJRVU5xUWl4RFFVRkVPMEZCUVVFc1UwRkJUMEVzUlVGQlJXdENMR0ZCUVVZc1NVRkJiVUpzUWl4RlFVRkZiVUlzVjBGQmNrSXNTVUZCYjBOdVFpeERRVUV6UXp0QlFVRkJMRU5CUVhaQ096dHJRa0ZGWlN4VlFVRkRRU3hEUVVGRUxFVkJRVWxLTEV0QlFVb3NSVUZCWXp0QlFVTXpRaXhOUVVGTmRVSXNZMEZCWTBZc1pVRkJaV3BDTEVOQlFXWXNRMEZCY0VJN1FVRkRRU3hUUVVGUmJVSXNXVUZCV1VNc1QwRkJZaXhIUVVOTU4wSXNZMEZCWTNOQ0xHdENRVUZyUW1Jc1EwRkJiRUlzUTBGQlpEdEJRVU5GVEN4bFFVRlhMRmRCUkdJN1FVRkZSVVFzYlVKQlFXVnRRanRCUVVacVFpeExRVWRMYWtJc1MwRklUQ3hGUVVSTExFZEJUVXhNTEdOQlFXTnRRaXhyUWtGQmEwSldMRU5CUVd4Q0xFTkJRV1E3UVVGRFJVd3NaVUZCVnl4WFFVUmlPMEZCUlVWRUxHMUNRVUZsWjBJN1FVRkdha0lzUzBGSFMyUXNTMEZJVEN4RlFVNUdPMEZCVjBRc1F5SXNJbVpwYkdVaU9pSndiMmx1ZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhaaGJIVmxJR1p5YjIwZ0p5NHZkbUZzZFdVbk8xeHVhVzF3YjNKMElHTnZiWEJ2YzJsMFpTQm1jbTl0SUNjdUwyTnZiWEJ2YzJsMFpTYzdYRzVjYm1aMWJtTjBhVzl1SUdOeVpXRjBaVkJ2YVc1MFpYSW9leUI0TENCNUlIMHNJSHNnWlhabGJuUlViMUJ2YVc1MGN5d2diVzkyWlVWMlpXNTBMQ0F1TGk1d2NtOXdjeUI5S1NCN1hHNGdJR052Ym5OMElIQnZhVzUwWlhJZ1BTQmpiMjF3YjNOcGRHVW9lMXh1SUNBZ0lIZzZJSFpoYkhWbEtIZ3BMRnh1SUNBZ0lIazZJSFpoYkhWbEtIa3BYRzRnSUgwc0lIdGNiaUFnSUNCd2NtVjJaVzUwUkdWbVlYVnNkRG9nZEhKMVpTeGNiaUFnSUNBdUxpNXdjbTl3YzF4dUlDQjlLVHRjYmx4dUlDQmpiMjV6ZENCMWNHUmhkR1ZRYjJsdWRHVnlJRDBnS0dVcElEMCtJSHRjYmlBZ0lDQnBaaUFvY0hKdmNITXVjSEpsZG1WdWRFUmxabUYxYkhRcElIdGNiaUFnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCamIyNXpkQ0J3YjJsdWRITWdQU0JsZG1WdWRGUnZVRzlwYm5SektHVXBPMXh1SUNBZ0lIQnZhVzUwWlhJdWVDNXpaWFFvY0c5cGJuUnpMbmdwTzF4dUlDQWdJSEJ2YVc1MFpYSXVlUzV6WlhRb2NHOXBiblJ6TG5rcE8xeHVJQ0I5TzF4dVhHNGdJSEJ2YVc1MFpYSXVjMlYwVUhKdmNITW9lMXh1SUNBZ0lGOXZibE4wWVhKME9pQW9LU0E5UGlCa2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWh0YjNabFJYWmxiblFzSUhWd1pHRjBaVkJ2YVc1MFpYSXBMRnh1SUNBZ0lGOXZibE4wYjNBNklDZ3BJRDArSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0cxdmRtVkZkbVZ1ZEN3Z2RYQmtZWFJsVUc5cGJuUmxjaWxjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUhCdmFXNTBaWEk3WEc1OVhHNWNibU52Ym5OMElHMXZkWE5sUlhabGJuUlViMUJ2YVc1MElEMGdLR1VwSUQwK0lDaDdYRzRnSUhnNklHVXVjR0ZuWlZnc1hHNGdJSGs2SUdVdWNHRm5aVmxjYm4wcE8xeHVYRzVqYjI1emRDQjBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDQTlJQ2g3SUdOb1lXNW5aV1JVYjNWamFHVnpJSDBwSUQwK0lDaDdYRzRnSUhnNklHTm9ZVzVuWldSVWIzVmphR1Z6V3pCZExtTnNhV1Z1ZEZnc1hHNGdJSGs2SUdOb1lXNW5aV1JVYjNWamFHVnpXekJkTG1Oc2FXVnVkRmxjYm4wcE8xeHVYRzVqYjI1emRDQm5aWFJPWVhScGRtVkZkbVZ1ZENBOUlDaGxLU0E5UGlCbExtOXlhV2RwYm1Gc1JYWmxiblFnZkh3Z1pTNXVZWFJwZG1WRmRtVnVkQ0I4ZkNCbE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9aU3dnY0hKdmNITXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2JtRjBhWFpsUlhabGJuUWdQU0JuWlhST1lYUnBkbVZGZG1WdWRDaGxLVHRjYmlBZ2NtVjBkWEp1SUNodVlYUnBkbVZGZG1WdWRDNTBiM1ZqYUdWektTQS9YRzRnSUNBZ1kzSmxZWFJsVUc5cGJuUmxjaWgwYjNWamFFVjJaVzUwVkc5UWIybHVkQ2hsS1N3Z2UxeHVJQ0FnSUNBZ2JXOTJaVVYyWlc1ME9pQW5kRzkxWTJodGIzWmxKeXhjYmlBZ0lDQWdJR1YyWlc1MFZHOVFiMmx1ZEhNNklIUnZkV05vUlhabGJuUlViMUJ2YVc1MExGeHVJQ0FnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdJQ0I5S1NBNlhHNGdJQ0FnWTNKbFlYUmxVRzlwYm5SbGNpaHRiM1Z6WlVWMlpXNTBWRzlRYjJsdWRDaGxLU3dnZTF4dUlDQWdJQ0FnYlc5MlpVVjJaVzUwT2lBbmJXOTFjMlZ0YjNabEp5eGNiaUFnSUNBZ0lHVjJaVzUwVkc5UWIybHVkSE02SUcxdmRYTmxSWFpsYm5SVWIxQnZhVzUwTEZ4dUlDQWdJQ0FnTGk0dWNISnZjSE5jYmlBZ0lDQjlLVHRjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BvaW50ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJy4uL2luYy9lYXNpbmcnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgY2xhbXBQcm9ncmVzcyA9ICgwLCBfdHJhbnNmb3JtZXJzLmNsYW1wKSgwLCAxKTtcblxudmFyIE5FWFRfU1RFUFMgPSB7XG4gIGxvb3A6IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgIHJldHVybiB0d2Vlbi5zdGFydCgpO1xuICB9LFxuICB5b3lvOiBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICByZXR1cm4gdHdlZW4ucmV2ZXJzZSgpLnN0YXJ0KCk7XG4gIH0sXG4gIGZsaXA6IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgIHJldHVybiB0d2Vlbi5mbGlwKCkuc3RhcnQoKTtcbiAgfVxufTtcblxudmFyIFR3ZWVuID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFR3ZWVuLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBUd2VlbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdlZW4pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBUd2Vlbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uO1xuICAgIHZhciBwbGF5RGlyZWN0aW9uID0gX3Byb3BzLnBsYXlEaXJlY3Rpb247XG5cblxuICAgIHRoaXMuZWxhcHNlZCA9IHBsYXlEaXJlY3Rpb24gPT09IDEgPyAwIDogZHVyYXRpb247XG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGR1cmF0aW9uID0gX3Byb3BzMi5kdXJhdGlvbjtcbiAgICB2YXIgZWFzZSA9IF9wcm9wczIuZWFzZTtcbiAgICB2YXIgZnJvbSA9IF9wcm9wczIuZnJvbTtcbiAgICB2YXIgdG8gPSBfcHJvcHMyLnRvO1xuICAgIHZhciBwbGF5RGlyZWN0aW9uID0gX3Byb3BzMi5wbGF5RGlyZWN0aW9uO1xuXG5cbiAgICB0aGlzLmVsYXBzZWQgKz0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpICogcGxheURpcmVjdGlvbjtcbiAgICB0aGlzLnByb2dyZXNzID0gY2xhbXBQcm9ncmVzcygoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKDAsIGR1cmF0aW9uLCB0aGlzLmVsYXBzZWQpKTtcblxuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGZyb20sIHRvLCBlYXNlKHRoaXMucHJvZ3Jlc3MpKTtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkdXJhdGlvbiA9IF9wcm9wczMuZHVyYXRpb247XG4gICAgdmFyIHBsYXlEaXJlY3Rpb24gPSBfcHJvcHMzLnBsYXlEaXJlY3Rpb247XG4gICAgdmFyIHlveW8gPSBfcHJvcHMzLnlveW87XG4gICAgdmFyIGxvb3AgPSBfcHJvcHMzLmxvb3A7XG4gICAgdmFyIGZsaXAgPSBfcHJvcHMzLmZsaXA7XG5cbiAgICB2YXIgaXNDb21wbGV0ZSA9IHBsYXlEaXJlY3Rpb24gPT09IDEgPyB0aGlzLmVsYXBzZWQgPj0gZHVyYXRpb24gOiB0aGlzLmVsYXBzZWQgPD0gMDtcblxuICAgIGlmIChpc0NvbXBsZXRlICYmICh5b3lvIHx8IGxvb3AgfHwgZmxpcCkpIHtcbiAgICAgIHZhciBpc1N0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gTkVYVF9TVEVQUykge1xuICAgICAgICB2YXIgbmV4dFN0ZXAgPSBORVhUX1NURVBTW2tleV07XG4gICAgICAgIHZhciBjb3VudFByb3AgPSBrZXkgKyAnQ291bnQnO1xuICAgICAgICB2YXIgc3RlcE1heCA9IHRoaXMuZ2V0UHJvcChrZXkpO1xuICAgICAgICB2YXIgc3RlcENvdW50ID0gdGhpcy5nZXRQcm9wKGNvdW50UHJvcCk7XG5cbiAgICAgICAgaWYgKHN0ZXBNYXggPiBzdGVwQ291bnQpIHtcbiAgICAgICAgICB2YXIgX3NldFByb3BzO1xuXG4gICAgICAgICAgdGhpcy5zZXRQcm9wcygoX3NldFByb3BzID0ge30sIF9zZXRQcm9wc1tjb3VudFByb3BdID0gc3RlcENvdW50ICsgMSwgX3NldFByb3BzKSk7XG4gICAgICAgICAgbmV4dFN0ZXAodGhpcyk7XG4gICAgICAgICAgaXNTdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1N0ZXBUYWtlbikgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0NvbXBsZXRlO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5nZXRFbGFwc2VkID0gZnVuY3Rpb24gZ2V0RWxhcHNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGFwc2VkO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5mbGlwID0gZnVuY3Rpb24gZmxpcCgpIHtcbiAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLnByb3BzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuICAgIHZhciBfcmVmID0gW3RoaXMucHJvcHMudG8sIHRoaXMucHJvcHMuZnJvbV07XG4gICAgdGhpcy5wcm9wcy5mcm9tID0gX3JlZlswXTtcbiAgICB0aGlzLnByb3BzLnRvID0gX3JlZlsxXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICB0aGlzLnByb3BzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuO1xufShfMi5kZWZhdWx0KTtcblxuVHdlZW4uZGVmYXVsdFByb3BzID0ge1xuICBkdXJhdGlvbjogMzAwLFxuICBlYXNlOiBfZWFzaW5nLmVhc2VPdXQsXG4gIGZyb206IDAsXG4gIHRvOiAxLFxuICBmbGlwOiAwLFxuICBmbGlwQ291bnQ6IDAsXG4gIHlveW86IDAsXG4gIHlveW9Db3VudDogMCxcbiAgbG9vcDogMCxcbiAgbG9vcENvdW50OiAwLFxuICBwbGF5RGlyZWN0aW9uOiAxXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBwcm9wcyA9IGFyZ3NbMF07XG5cbiAgICByZXR1cm4gbmV3IFR3ZWVuKHByb3BzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZnJvbSA9IGFyZ3NbMF07XG4gICAgdmFyIHRvID0gYXJnc1sxXTtcbiAgICB2YXIgZHVyYXRpb24gPSBhcmdzWzJdO1xuICAgIHZhciBlYXNlID0gYXJnc1szXTtcbiAgICB2YXIgX3Byb3BzNCA9IGFyZ3NbNF07XG5cbiAgICByZXR1cm4gbmV3IFR3ZWVuKF9leHRlbmRzKHsgZnJvbTogZnJvbSwgdG86IHRvLCBkdXJhdGlvbjogZHVyYXRpb24sIGVhc2U6IGVhc2UgfSwgX3Byb3BzNCkpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1IzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiSW1Oc1lXMXdVSEp2WjNKbGMzTWlMQ0pPUlZoVVgxTlVSVkJUSWl3aWJHOXZjQ0lzSW5SM1pXVnVJaXdpYzNSaGNuUWlMQ0o1YjNsdklpd2ljbVYyWlhKelpTSXNJbVpzYVhBaUxDSlVkMlZsYmlJc0ltOXVVM1JoY25RaUxDSndjbTl3Y3lJc0ltUjFjbUYwYVc5dUlpd2ljR3hoZVVScGNtVmpkR2x2YmlJc0ltVnNZWEJ6WldRaUxDSndjbTluY21WemN5SXNJblZ3WkdGMFpTSXNJbVZoYzJVaUxDSm1jbTl0SWl3aWRHOGlMQ0pwYzBGamRHbHZia052YlhCc1pYUmxJaXdpYVhORGIyMXdiR1YwWlNJc0ltbHpVM1JsY0ZSaGEyVnVJaXdpYTJWNUlpd2libVY0ZEZOMFpYQWlMQ0pqYjNWdWRGQnliM0FpTENKemRHVndUV0Y0SWl3aVoyVjBVSEp2Y0NJc0luTjBaWEJEYjNWdWRDSXNJbk5sZEZCeWIzQnpJaXdpWjJWMFJXeGhjSE5sWkNJc0ltUmxabUYxYkhSUWNtOXdjeUlzSW1ac2FYQkRiM1Z1ZENJc0lubHZlVzlEYjNWdWRDSXNJbXh2YjNCRGIzVnVkQ0lzSW1GeVozTWlMQ0pzWlc1bmRHZ2lYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGQk96czdPMEZCUTBFN08wRkJRMEU3TzBGQlEwRTdPMEZCUTBFN096czdPenM3T3pzN1FVRkZRU3hKUVVGTlFTeG5Ra0ZCWjBJc2VVSkJRVTBzUTBGQlRpeEZRVUZUTEVOQlFWUXNRMEZCZEVJN08wRkJSVUVzU1VGQlRVTXNZVUZCWVR0QlFVTnFRa01zVVVGQlRTeFZRVUZEUXl4TFFVRkVPMEZCUVVFc1YwRkJWMEVzVFVGQlRVTXNTMEZCVGl4RlFVRllPMEZCUVVFc1IwRkVWenRCUVVWcVFrTXNVVUZCVFN4VlFVRkRSaXhMUVVGRU8wRkJRVUVzVjBGQlYwRXNUVUZCVFVjc1QwRkJUaXhIUVVGblFrWXNTMEZCYUVJc1JVRkJXRHRCUVVGQkxFZEJSbGM3UVVGSGFrSkhMRkZCUVUwc1ZVRkJRMG9zUzBGQlJEdEJRVUZCTEZkQlFWZEJMRTFCUVUxSkxFbEJRVTRzUjBGQllVZ3NTMEZCWWl4RlFVRllPMEZCUVVFN1FVRklWeXhEUVVGdVFqczdTVUZOVFVrc1N6czdPenM3T3pzN08ydENRV1ZLUXl4UExITkNRVUZWTzBGQlFVRXNhVUpCUXpSQ0xFdEJRVXRETEV0QlJHcERPMEZCUVVFc1VVRkRRVU1zVVVGRVFTeFZRVU5CUVN4UlFVUkJPMEZCUVVFc1VVRkRWVU1zWVVGRVZpeFZRVU5WUVN4aFFVUldPenM3UVVGSFVpeFRRVUZMUXl4UFFVRk1MRWRCUVdkQ1JDeHJRa0ZCYTBJc1EwRkJia0lzUjBGQmQwSXNRMEZCZUVJc1IwRkJORUpFTEZGQlFUTkRPMEZCUTBFc1UwRkJTMGNzVVVGQlRDeEhRVUZuUWl4RFFVRm9RanRCUVVORUxFYzdPMnRDUVVWRVF5eE5MSEZDUVVGVE8wRkJRVUVzYTBKQlF6WkRMRXRCUVV0TUxFdEJSR3hFTzBGQlFVRXNVVUZEUTBNc1VVRkVSQ3hYUVVORFFTeFJRVVJFTzBGQlFVRXNVVUZEVjBzc1NVRkVXQ3hYUVVOWFFTeEpRVVJZTzBGQlFVRXNVVUZEYVVKRExFbEJSR3BDTEZkQlEybENRU3hKUVVScVFqdEJRVUZCTEZGQlEzVkNReXhGUVVSMlFpeFhRVU4xUWtFc1JVRkVka0k3UVVGQlFTeFJRVU15UWs0c1lVRkVNMElzVjBGRE1rSkJMR0ZCUkROQ096czdRVUZIVUN4VFFVRkxReXhQUVVGTUxFbEJRV2RDTEhWRFFVRjFRa1FzWVVGQmRrTTdRVUZEUVN4VFFVRkxSU3hSUVVGTUxFZEJRV2RDWkN4alFVRmpMR2REUVVGeFFpeERRVUZ5UWl4RlFVRjNRbGNzVVVGQmVFSXNSVUZCYTBNc1MwRkJTMFVzVDBGQmRrTXNRMEZCWkN4RFFVRm9RanM3UVVGRlFTeFhRVUZQTEdkRFFVRnhRa2tzU1VGQmNrSXNSVUZCTWtKRExFVkJRVE5DTEVWQlFTdENSaXhMUVVGTExFdEJRVXRHTEZGQlFWWXNRMEZCTDBJc1EwRkJVRHRCUVVORUxFYzdPMnRDUVVWRVN5eG5RaXdyUWtGQmJVSTdRVUZCUVN4clFrRkRjVU1zUzBGQlMxUXNTMEZFTVVNN1FVRkJRU3hSUVVOVVF5eFJRVVJUTEZkQlExUkJMRkZCUkZNN1FVRkJRU3hSUVVORFF5eGhRVVJFTEZkQlEwTkJMR0ZCUkVRN1FVRkJRU3hSUVVOblFsQXNTVUZFYUVJc1YwRkRaMEpCTEVsQlJHaENPMEZCUVVFc1VVRkRjMEpJTEVsQlJIUkNMRmRCUTNOQ1FTeEpRVVIwUWp0QlFVRkJMRkZCUXpSQ1N5eEpRVVExUWl4WFFVTTBRa0VzU1VGRU5VSTdPMEZCUldwQ0xGRkJRVWxoTEdGQlFXTlNMR3RDUVVGclFpeERRVUZ1UWl4SFFVRjVRaXhMUVVGTFF5eFBRVUZNTEVsQlFXZENSaXhSUVVGNlF5eEhRVUZ6UkN4TFFVRkxSU3hQUVVGTUxFbEJRV2RDTEVOQlFYWkdPenRCUVVWQkxGRkJRVWxQTEdWQlFXVm1MRkZCUVZGSUxFbEJRVklzU1VGQlowSkxMRWxCUVM5Q0xFTkJRVW9zUlVGQk1FTTdRVUZEZUVNc1ZVRkJTV01zWTBGQll5eExRVUZzUWpzN1FVRkZRU3hYUVVGTExFbEJRVWxETEVkQlFWUXNTVUZCWjBKeVFpeFZRVUZvUWl4RlFVRTBRanRCUVVNeFFpeFpRVUZOYzBJc1YwRkJWM1JDTEZkQlFWZHhRaXhIUVVGWUxFTkJRV3BDTzBGQlEwRXNXVUZCVFVVc1dVRkJXVVlzVFVGQlRTeFBRVUY0UWp0QlFVTkJMRmxCUVUxSExGVkJRVlVzUzBGQlMwTXNUMEZCVEN4RFFVRmhTaXhIUVVGaUxFTkJRV2hDTzBGQlEwRXNXVUZCVFVzc1dVRkJXU3hMUVVGTFJDeFBRVUZNTEVOQlFXRkdMRk5CUVdJc1EwRkJiRUk3TzBGQlJVRXNXVUZCU1VNc1ZVRkJWVVVzVTBGQlpDeEZRVUY1UWp0QlFVRkJPenRCUVVOMlFpeGxRVUZMUXl4UlFVRk1MRFJDUVVOSFNpeFRRVVJJTEVsQlEyVkhMRmxCUVZrc1EwRkVNMEk3UVVGSFFVb3NiVUpCUVZNc1NVRkJWRHRCUVVOQlJpeDNRa0ZCWXl4SlFVRmtPMEZCUTBRN1FVRkRSanM3UVVGRlJDeFZRVUZKUVN4WFFVRktMRVZCUVdsQ1JDeGhRVUZoTEV0QlFXSTdRVUZEYkVJN08wRkJSVVFzVjBGQlQwRXNWVUZCVUR0QlFVTkVMRWM3TzJ0Q1FVVkVVeXhWTEhsQ1FVRmhPMEZCUTFnc1YwRkJUeXhMUVVGTGFFSXNUMEZCV2p0QlFVTkVMRWM3TzJ0Q1FVVkVUaXhKTEcxQ1FVRlBPMEZCUTB3c1UwRkJTMDBzVDBGQlRDeEhRVUZsTEV0QlFVdElMRXRCUVV3c1EwRkJWME1zVVVGQldDeEhRVUZ6UWl4TFFVRkxSU3hQUVVFeFF6dEJRVVJMTEdWQlJUaENMRU5CUVVNc1MwRkJTMGdzUzBGQlRDeERRVUZYVVN4RlFVRmFMRVZCUVdkQ0xFdEJRVXRTTEV0QlFVd3NRMEZCVjA4c1NVRkJNMElzUTBGR09VSTdRVUZGU2l4VFFVRkxVQ3hMUVVGTUxFTkJRVmRQTEVsQlJsQTdRVUZGWVN4VFFVRkxVQ3hMUVVGTUxFTkJRVmRSTEVWQlJuaENPenRCUVVkTUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08ydENRVVZFV2l4UExITkNRVUZWTzBGQlExSXNVMEZCUzBrc1MwRkJUQ3hEUVVGWFJTeGhRVUZZTEVsQlFUUkNMRU5CUVVNc1EwRkJOMEk3UVVGRFFTeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96czdPenRCUVhoRlIwb3NTeXhEUVVOSGMwSXNXU3hIUVVGbE8wRkJRM0JDYmtJc1dVRkJWU3hIUVVSVk8wRkJSWEJDU3l4MVFrRkdiMEk3UVVGSGNFSkRMRkZCUVUwc1EwRklZenRCUVVsd1FrTXNUVUZCU1N4RFFVcG5RanRCUVV0d1FsZ3NVVUZCVFN4RFFVeGpPMEZCVFhCQ2QwSXNZVUZCVnl4RFFVNVRPMEZCVDNCQ01VSXNVVUZCVFN4RFFWQmpPMEZCVVhCQ01rSXNZVUZCVnl4RFFWSlRPMEZCVTNCQ09VSXNVVUZCVFN4RFFWUmpPMEZCVlhCQ0swSXNZVUZCVnl4RFFWWlRPMEZCVjNCQ2NrSXNhVUpCUVdVN1FVRllTeXhET3p0clFrRXdSVlFzV1VGQllUdEJRVUZCTEc5RFFVRlVjMElzU1VGQlV6dEJRVUZVUVN4UlFVRlRPMEZCUVVFN08wRkJRekZDTEUxQlFVbEJMRXRCUVV0RExFMUJRVXdzUzBGQlowSXNRMEZCY0VJc1JVRkJkVUk3UVVGQlFTeFJRVU5pZWtJc1MwRkVZU3hIUVVOSWQwSXNTVUZFUnpzN1FVRkZja0lzVjBGQlR5eEpRVUZKTVVJc1MwRkJTaXhEUVVGVlJTeExRVUZXTEVOQlFWQTdRVUZEUkN4SFFVaEVMRTFCUjA4N1FVRkJRU3hSUVVOSFR5eEpRVVJJTEVkQlEzVkRhVUlzU1VGRWRrTTdRVUZCUVN4UlFVTlRhRUlzUlVGRVZDeEhRVU4xUTJkQ0xFbEJSSFpETzBGQlFVRXNVVUZEWVhaQ0xGRkJSR0lzUjBGRGRVTjFRaXhKUVVSMlF6dEJRVUZCTEZGQlEzVkNiRUlzU1VGRWRrSXNSMEZEZFVOclFpeEpRVVIyUXp0QlFVRkJMRkZCUXpaQ2VFSXNUMEZFTjBJc1IwRkRkVU4zUWl4SlFVUjJRenM3UVVGRlRDeFhRVUZQTEVsQlFVa3hRaXhMUVVGS0xGbEJRVmxUTEZWQlFWb3NSVUZCYTBKRExFMUJRV3hDTEVWQlFYTkNVQ3hyUWtGQmRFSXNSVUZCWjBOTExGVkJRV2hETEVsQlFYbERUaXhQUVVGNlF5eEZRVUZRTzBGQlEwUTdRVUZEUml4RElpd2labWxzWlNJNkluUjNaV1Z1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVwYlhCdmNuUWdleUIwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VnZlNCbWNtOXRJQ2N1TGk5bWNtRnRaWE41Ym1Nbk8xeHVhVzF3YjNKMElIc2dZMnhoYlhBZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZEhKaGJuTm1iM0p0WlhKekp6dGNibWx0Y0c5eWRDQjdJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsTENCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYm1sdGNHOXlkQ0I3SUdWaGMyVlBkWFFnZlNCbWNtOXRJQ2N1TGk5cGJtTXZaV0Z6YVc1bkp6dGNibHh1WTI5dWMzUWdZMnhoYlhCUWNtOW5jbVZ6Y3lBOUlHTnNZVzF3S0RBc0lERXBPMXh1WEc1amIyNXpkQ0JPUlZoVVgxTlVSVkJUSUQwZ2UxeHVJQ0JzYjI5d09pQW9kSGRsWlc0cElEMCtJSFIzWldWdUxuTjBZWEowS0Nrc1hHNGdJSGx2ZVc4NklDaDBkMlZsYmlrZ1BUNGdkSGRsWlc0dWNtVjJaWEp6WlNncExuTjBZWEowS0Nrc1hHNGdJR1pzYVhBNklDaDBkMlZsYmlrZ1BUNGdkSGRsWlc0dVpteHBjQ2dwTG5OMFlYSjBLQ2xjYm4wN1hHNWNibU5zWVhOeklGUjNaV1Z1SUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ2MzUmhkR2xqSUdSbFptRjFiSFJRY205d2N5QTlJSHRjYmlBZ0lDQmtkWEpoZEdsdmJqb2dNekF3TEZ4dUlDQWdJR1ZoYzJVNklHVmhjMlZQZFhRc1hHNGdJQ0FnWm5KdmJUb2dNQ3hjYmlBZ0lDQjBiem9nTVN4Y2JpQWdJQ0JtYkdsd09pQXdMRnh1SUNBZ0lHWnNhWEJEYjNWdWREb2dNQ3hjYmlBZ0lDQjViM2x2T2lBd0xGeHVJQ0FnSUhsdmVXOURiM1Z1ZERvZ01DeGNiaUFnSUNCc2IyOXdPaUF3TEZ4dUlDQWdJR3h2YjNCRGIzVnVkRG9nTUN4Y2JpQWdJQ0J3YkdGNVJHbHlaV04wYVc5dU9pQXhYRzRnSUgwN1hHNWNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1IxY21GMGFXOXVMQ0J3YkdGNVJHbHlaV04wYVc5dUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lEMGdLSEJzWVhsRWFYSmxZM1JwYjI0Z1BUMDlJREVwSUQ4Z01DQTZJR1IxY21GMGFXOXVPMXh1SUNBZ0lIUm9hWE11Y0hKdlozSmxjM01nUFNBd08xeHVJQ0I5WEc1Y2JpQWdkWEJrWVhSbEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1pIVnlZWFJwYjI0c0lHVmhjMlVzSUdaeWIyMHNJSFJ2TENCd2JHRjVSR2x5WldOMGFXOXVJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJQ3M5SUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNncElDb2djR3hoZVVScGNtVmpkR2x2Ymp0Y2JpQWdJQ0IwYUdsekxuQnliMmR5WlhOeklEMGdZMnhoYlhCUWNtOW5jbVZ6Y3loblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTZ3dMQ0JrZFhKaGRHbHZiaXdnZEdocGN5NWxiR0Z3YzJWa0tTazdYRzVjYmlBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9abkp2YlN3Z2RHOHNJR1ZoYzJVb2RHaHBjeTV3Y205bmNtVnpjeWtwTzF4dUlDQjlYRzVjYmlBZ2FYTkJZM1JwYjI1RGIyMXdiR1YwWlNncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdSMWNtRjBhVzl1TENCd2JHRjVSR2x5WldOMGFXOXVMQ0I1YjNsdkxDQnNiMjl3TENCbWJHbHdJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUd4bGRDQnBjME52YlhCc1pYUmxJRDBnS0hCc1lYbEVhWEpsWTNScGIyNGdQVDA5SURFcElEOGdLSFJvYVhNdVpXeGhjSE5sWkNBK1BTQmtkWEpoZEdsdmJpa2dPaUFvZEdocGN5NWxiR0Z3YzJWa0lEdzlJREFwTzF4dVhHNGdJQ0FnYVdZZ0tHbHpRMjl0Y0d4bGRHVWdKaVlnS0hsdmVXOGdmSHdnYkc5dmNDQjhmQ0JtYkdsd0tTa2dlMXh1SUNBZ0lDQWdiR1YwSUdselUzUmxjRlJoYTJWdUlEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCT1JWaFVYMU5VUlZCVEtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHNWxlSFJUZEdWd0lEMGdUa1ZZVkY5VFZFVlFVMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCamIzVnVkRkJ5YjNBZ1BTQnJaWGtnS3lBblEyOTFiblFuTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J6ZEdWd1RXRjRJRDBnZEdocGN5NW5aWFJRY205d0tHdGxlU2s3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE4wWlhCRGIzVnVkQ0E5SUhSb2FYTXVaMlYwVUhKdmNDaGpiM1Z1ZEZCeWIzQXBPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHpkR1Z3VFdGNElENGdjM1JsY0VOdmRXNTBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTV6WlhSUWNtOXdjeWg3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmJZMjkxYm5SUWNtOXdYVG9nYzNSbGNFTnZkVzUwSUNzZ01WeHVJQ0FnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNBZ0lHNWxlSFJUZEdWd0tIUm9hWE1wTzF4dUlDQWdJQ0FnSUNBZ0lHbHpVM1JsY0ZSaGEyVnVJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JwWmlBb2FYTlRkR1Z3VkdGclpXNHBJR2x6UTI5dGNHeGxkR1VnUFNCbVlXeHpaVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2FYTkRiMjF3YkdWMFpUdGNiaUFnZlZ4dVhHNGdJR2RsZEVWc1lYQnpaV1FvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVpXeGhjSE5sWkR0Y2JpQWdmVnh1WEc0Z0lHWnNhWEFvS1NCN1hHNGdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lEMGdkR2hwY3k1d2NtOXdjeTVrZFhKaGRHbHZiaUF0SUhSb2FYTXVaV3hoY0hObFpEdGNiaUFnSUNCYmRHaHBjeTV3Y205d2N5NW1jbTl0TENCMGFHbHpMbkJ5YjNCekxuUnZYU0E5SUZ0MGFHbHpMbkJ5YjNCekxuUnZMQ0IwYUdsekxuQnliM0J6TG1aeWIyMWRPMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnY21WMlpYSnpaU2dwSUh0Y2JpQWdJQ0IwYUdsekxuQnliM0J6TG5Cc1lYbEVhWEpsWTNScGIyNGdLajBnTFRFN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tDNHVMbUZ5WjNNcElEMCtJSHRjYmlBZ2FXWWdLR0Z5WjNNdWJHVnVaM1JvSUQwOVBTQXhLU0I3WEc0Z0lDQWdZMjl1YzNRZ1d5QndjbTl3Y3lCZElEMGdZWEpuY3p0Y2JpQWdJQ0J5WlhSMWNtNGdibVYzSUZSM1pXVnVLSEJ5YjNCektUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmpiMjV6ZENCYklHWnliMjBzSUhSdkxDQmtkWEpoZEdsdmJpd2daV0Z6WlN3Z2NISnZjSE1nWFNBOUlHRnlaM003WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJVZDJWbGJpaDdJR1p5YjIwc0lIUnZMQ0JrZFhKaGRHbHZiaXdnWldGelpTd2dMaTR1Y0hKdmNITWdmU2s3WEc0Z0lIMWNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NoYWluID0gcmVxdWlyZSgnLi9jaGFpbicpO1xuXG52YXIgX2NoYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoYWluKTtcblxudmFyIF9wYXJhbGxlbCA9IHJlcXVpcmUoJy4vcGFyYWxsZWwnKTtcblxudmFyIF9wYXJhbGxlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJhbGxlbCk7XG5cbnZhciBfZGVsYXkgPSByZXF1aXJlKCcuL2RlbGF5Jyk7XG5cbnZhciBfZGVsYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVsYXkpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBwYXJhbGxlbCBBY3Rpb24gY29tcG9zZWQgb2YgY2hhaW5lZFxuICogZGVsYXkgYW5kIGFjdGlvbnMuIEludGVydmFsIGNhbiBiZSBlaXRoZXIgYSBudW1iZXJcbiAqIHRvIG11bHRpcGx5IGJ5IGBpYCBvciBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBwcm92aWRlZCBgaWBcbiAqXG4gKiBTdHJhaWdodCBjcmliYmVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9ibG9iLzI0YzcyZjUxM2U0OGYwYmRjNDA4MjBiNDMyNjIzMjhmZTJjMzAxZDQvTGlicmFyaWVzL0FuaW1hdGVkL3NyYy9BbmltYXRlZEltcGxlbWVudGF0aW9uLmpzI0wyMDMxXG4gKiBeIFRoaXMgZnVuY3Rpb24gc29sZCBhIHByZXZpb3VzbHktY29uZmxpY3RlZCBtZSBvbiB0aGUgbWVyaXQgb2YgbW92aW5nIGZyb21cbiAqIGpRdWVyeS1zdHlsZSBtdWx0aS1wcm9wZXJ0eSBhbmltYXRpb25zIHRvIHNpbmdsZS1wcm9wZXJ0eS5cbiAqIEBwYXJhbSAge2FycmF5fSBhY3Rpb25zXG4gKiBAcGFyYW0gIHtmdW5jdGlvbiB8IG51bWJlcn0gaW50ZXJ2YWxcbiAqIEByZXR1cm4ge0FjdGlvbn1cbiAqL1xuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMsIGludGVydmFsLCBvbkNvbXBsZXRlKSB7XG4gIHZhciBpbnRlcnZhbElzRnVuY3Rpb24gPSAoMCwgX3V0aWxzLmlzRnVuYykoaW50ZXJ2YWwpO1xuXG4gIHJldHVybiAoMCwgX3BhcmFsbGVsMi5kZWZhdWx0KShhY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uLCBpKSB7XG4gICAgdmFyIHRpbWVUb0RlbGF5ID0gaW50ZXJ2YWxJc0Z1bmN0aW9uID8gaW50ZXJ2YWwoaSkgOiBpICogaW50ZXJ2YWw7XG4gICAgcmV0dXJuICgwLCBfY2hhaW4yLmRlZmF1bHQpKFsoMCwgX2RlbGF5Mi5kZWZhdWx0KSh0aW1lVG9EZWxheSksIGFjdGlvbl0pO1xuICB9KSwgeyBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNOMFlXZG5aWEl1YW5NaVhTd2libUZ0WlhNaU9sc2lZV04wYVc5dWN5SXNJbWx1ZEdWeWRtRnNJaXdpYjI1RGIyMXdiR1YwWlNJc0ltbHVkR1Z5ZG1Gc1NYTkdkVzVqZEdsdmJpSXNJbTFoY0NJc0ltRmpkR2x2YmlJc0lta2lMQ0owYVcxbFZHOUVaV3hoZVNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUlVFN096czdPenM3T3pzN096dHJRa0ZaWlN4VlFVRkRRU3hQUVVGRUxFVkJRVlZETEZGQlFWWXNSVUZCYjBKRExGVkJRWEJDTEVWQlFXMURPMEZCUTJoRUxFMUJRVTFETEhGQ1FVRnhRaXh0UWtGQlQwWXNVVUZCVUN4RFFVRXpRanM3UVVGRlFTeFRRVUZQTEhkQ1FVRlRSQ3hSUVVGUlNTeEhRVUZTTEVOQlFWa3NWVUZCUTBNc1RVRkJSQ3hGUVVGVFF5eERRVUZVTEVWQlFXVTdRVUZEZWtNc1VVRkJUVU1zWTBGQlpVb3NhMEpCUVVRc1IwRkJkVUpHTEZOQlFWTkxMRU5CUVZRc1EwRkJka0lzUjBGQmNVTkJMRWxCUVVsTUxGRkJRVGRFTzBGQlEwRXNWMEZCVHl4eFFrRkJUU3hEUVVOWUxIRkNRVUZOVFN4WFFVRk9MRU5CUkZjc1JVRkZXRVlzVFVGR1Z5eERRVUZPTEVOQlFWQTdRVUZKUkN4SFFVNWxMRU5CUVZRc1JVRk5TQ3hGUVVGRlNDeHpRa0ZCUml4RlFVNUhMRU5CUVZBN1FVRlBSQ3hESWl3aVptbHNaU0k2SW5OMFlXZG5aWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdZMmhoYVc0Z1puSnZiU0FuTGk5amFHRnBiaWM3WEc1cGJYQnZjblFnY0dGeVlXeHNaV3dnWm5KdmJTQW5MaTl3WVhKaGJHeGxiQ2M3WEc1cGJYQnZjblFnWkdWc1lYa2dabkp2YlNBbkxpOWtaV3hoZVNjN1hHNXBiWEJ2Y25RZ2V5QnBjMFoxYm1NZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaWE1nWVNCdVpYY2djR0Z5WVd4c1pXd2dRV04wYVc5dUlHTnZiWEJ2YzJWa0lHOW1JR05vWVdsdVpXUmNiaUFxSUdSbGJHRjVJR0Z1WkNCaFkzUnBiMjV6TGlCSmJuUmxjblpoYkNCallXNGdZbVVnWldsMGFHVnlJR0VnYm5WdFltVnlYRzRnS2lCMGJ5QnRkV3gwYVhCc2VTQmllU0JnYVdBZ2IzSWdZU0JtZFc1amRHbHZiaUIwYUdGMElIZHBiR3dnWW1VZ2NISnZkbWxrWldRZ1lHbGdYRzRnS2x4dUlDb2dVM1J5WVdsbmFIUWdZM0pwWW1KbFpDQm1jbTl0SUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5bVlXTmxZbTl2YXk5eVpXRmpkQzF1WVhScGRtVXZZbXh2WWk4eU5HTTNNbVkxTVRObE5EaG1NR0prWXpRd09ESXdZalF6TWpZeU16STRabVV5WXpNd01XUTBMMHhwWW5KaGNtbGxjeTlCYm1sdFlYUmxaQzl6Y21NdlFXNXBiV0YwWldSSmJYQnNaVzFsYm5SaGRHbHZiaTVxY3lOTU1qQXpNVnh1SUNvZ1hpQlVhR2x6SUdaMWJtTjBhVzl1SUhOdmJHUWdZU0J3Y21WMmFXOTFjMng1TFdOdmJtWnNhV04wWldRZ2JXVWdiMjRnZEdobElHMWxjbWwwSUc5bUlHMXZkbWx1WnlCbWNtOXRYRzRnS2lCcVVYVmxjbmt0YzNSNWJHVWdiWFZzZEdrdGNISnZjR1Z5ZEhrZ1lXNXBiV0YwYVc5dWN5QjBieUJ6YVc1bmJHVXRjSEp2Y0dWeWRIa3VYRzRnS2lCQWNHRnlZVzBnSUh0aGNuSmhlWDBnWVdOMGFXOXVjMXh1SUNvZ1FIQmhjbUZ0SUNCN1puVnVZM1JwYjI0Z2ZDQnVkVzFpWlhKOUlHbHVkR1Z5ZG1Gc1hHNGdLaUJBY21WMGRYSnVJSHRCWTNScGIyNTlYRzRnS2k5Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoaFkzUnBiMjV6TENCcGJuUmxjblpoYkN3Z2IyNURiMjF3YkdWMFpTa2dQVDRnZTF4dUlDQmpiMjV6ZENCcGJuUmxjblpoYkVselJuVnVZM1JwYjI0Z1BTQnBjMFoxYm1Nb2FXNTBaWEoyWVd3cE8xeHVYRzRnSUhKbGRIVnliaUJ3WVhKaGJHeGxiQ2hoWTNScGIyNXpMbTFoY0Nnb1lXTjBhVzl1TENCcEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2RHbHRaVlJ2UkdWc1lYa2dQU0FvYVc1MFpYSjJZV3hKYzBaMWJtTjBhVzl1S1NBL0lHbHVkR1Z5ZG1Gc0tHa3BJRG9nYVNBcUlHbHVkR1Z5ZG1Gc08xeHVJQ0FnSUhKbGRIVnliaUJqYUdGcGJpaGJYRzRnSUNBZ0lDQmtaV3hoZVNoMGFXMWxWRzlFWld4aGVTa3NYRzRnSUNBZ0lDQmhZM1JwYjI1Y2JpQWdJQ0JkS1R0Y2JpQWdmU2tzSUhzZ2IyNURiMjF3YkdWMFpTQjlLVHRjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3N0YWdnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFZhbHVlID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFZhbHVlLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBWYWx1ZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmFsdWUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBWYWx1ZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHYpIHtcbiAgICB0aGlzLnRvVXBkYXRlID0gdjtcbiAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gIH07XG5cbiAgVmFsdWUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy50b1VwZGF0ZTtcbiAgfTtcblxuICByZXR1cm4gVmFsdWU7XG59KF8yLmRlZmF1bHQpO1xuXG5WYWx1ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjdXJyZW50LCBvblVwZGF0ZSkge1xuICByZXR1cm4gbmV3IFZhbHVlKHsgY3VycmVudDogY3VycmVudCwgb25VcGRhdGU6IG9uVXBkYXRlIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNaaGJIVmxMbXB6SWwwc0ltNWhiV1Z6SWpwYklsWmhiSFZsSWl3aWMyVjBJaXdpZGlJc0luUnZWWEJrWVhSbElpd2ljMk5vWldSMWJHVmtWWEJrWVhSbElpd2lkWEJrWVhSbElpd2laR1ZtWVhWc2RGQnliM0J6SWl3aWNHRnpjMmwyWlNJc0ltTjFjbkpsYm5RaUxDSnZibFZ3WkdGMFpTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN096czdPenM3U1VGRlRVRXNTenM3T3pzN096czdPMnRDUVV0S1F5eEhMR2RDUVVGSlF5eERMRVZCUVVjN1FVRkRUQ3hUUVVGTFF5eFJRVUZNTEVkQlFXZENSQ3hEUVVGb1FqdEJRVU5CTEd0RFFVRmpMRXRCUVV0RkxHVkJRVzVDTzBGQlEwUXNSenM3YTBKQlJVUkRMRTBzY1VKQlFWTTdRVUZEVUN4WFFVRlBMRXRCUVV0R0xGRkJRVm83UVVGRFJDeEhPenM3T3p0QlFWcEhTQ3hMTEVOQlEwZE5MRmtzUjBGQlpUdEJRVU53UWtNc1YwRkJVenRCUVVSWExFTTdPMnRDUVdOVUxGVkJRVU5ETEU5QlFVUXNSVUZCVlVNc1VVRkJWanRCUVVGQkxGTkJRWFZDTEVsQlFVbFVMRXRCUVVvc1EwRkJWU3hGUVVGRlVTeG5Ra0ZCUml4RlFVRlhReXhyUWtGQldDeEZRVUZXTEVOQlFYWkNPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSjJZV3gxWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1YVcxd2IzSjBJSHNnYjI1R2NtRnRaVlZ3WkdGMFpTQjlJR1p5YjIwZ0p5NHVMMlp5WVcxbGMzbHVZeWM3WEc1Y2JtTnNZWE56SUZaaGJIVmxJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYzNSaGRHbGpJR1JsWm1GMWJIUlFjbTl3Y3lBOUlIdGNiaUFnSUNCd1lYTnphWFpsT2lCMGNuVmxYRzRnSUgwN1hHNWNiaUFnYzJWMEtIWXBJSHRjYmlBZ0lDQjBhR2x6TG5SdlZYQmtZWFJsSUQwZ2RqdGNiaUFnSUNCdmJrWnlZVzFsVlhCa1lYUmxLSFJvYVhNdWMyTm9aV1IxYkdWa1ZYQmtZWFJsS1R0Y2JpQWdmVnh1WEc0Z0lIVndaR0YwWlNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NTBiMVZ3WkdGMFpUdGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9ZM1Z5Y21WdWRDd2diMjVWY0dSaGRHVXBJRDArSUc1bGR5QldZV3gxWlNoN0lHTjFjbkpsYm5Rc0lHOXVWWEJrWVhSbElIMHBPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy92YWx1ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lRW5kID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBleHBvcnRzLm9uRnJhbWVFbmQgPSBleHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLm9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLm9uRnJhbWVTdGFydCA9IHVuZGVmaW5lZDtcblxudmFyIF9vbk5leHRGcmFtZSA9IHJlcXVpcmUoJy4vb24tbmV4dC1mcmFtZScpO1xuXG52YXIgX29uTmV4dEZyYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29uTmV4dEZyYW1lKTtcblxudmFyIF9jcmVhdGVSZW5kZXJTdGVwID0gcmVxdWlyZSgnLi9jcmVhdGUtcmVuZGVyLXN0ZXAnKTtcblxudmFyIF9jcmVhdGVSZW5kZXJTdGVwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVJlbmRlclN0ZXApO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB3aWxsUmVuZGVyTmV4dEZyYW1lID0gZmFsc2U7XG5cbi8qKlxuICogTWF4aW11bSBwZXJtaXR0ZWQgbXMgc2luY2UgbGFzdCBmcmFtZVxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIE1BWF9FTEFQU0VEID0gMjA7XG5cbi8qKlxuICogQ3VycmVudCBmcmFtZXN0YW1wXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgY3VycmVudEZyYW1lc3RhbXAgPSAoMCwgX3V0aWxzLmN1cnJlbnRUaW1lKSgpO1xuXG52YXIgZWxhcHNlZCA9IDA7XG5cbi8qKlxuICogRmFjdG9yIHRvIG11bHRpcGx5IGBlbGFwc2VkYCBieSAtIFxuICogMC41IHdvdWxkIGJlIHNsb3cgbW90aW9uLCAyIHdvdWxkIGJlIGZhc3RcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBkaWxhdGlvbiA9IDE7XG5cbmZ1bmN0aW9uIHN0YXJ0UmVuZGVyTG9vcCgpIHtcbiAgaWYgKCF3aWxsUmVuZGVyTmV4dEZyYW1lKSB7XG4gICAgd2lsbFJlbmRlck5leHRGcmFtZSA9IHRydWU7XG4gICAgKDAsIF9vbk5leHRGcmFtZTIuZGVmYXVsdCkocHJvY2Vzc0ZyYW1lKTtcbiAgfVxufVxuXG52YXIgZnJhbWVTdGFydCA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcbnZhciBmcmFtZVVwZGF0ZSA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcbnZhciBmcmFtZVJlbmRlciA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcbnZhciBmcmFtZUVuZCA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcblxuZnVuY3Rpb24gcHJvY2Vzc0ZyYW1lKGZyYW1lc3RhbXApIHtcbiAgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnRGcmFtZXN0YW1wLCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gIGN1cnJlbnRGcmFtZXN0YW1wID0gZnJhbWVzdGFtcDtcblxuICBmcmFtZVN0YXJ0LnByb2Nlc3MoKTtcbiAgZnJhbWVVcGRhdGUucHJvY2VzcygpO1xuICBmcmFtZVJlbmRlci5wcm9jZXNzKCk7XG4gIGZyYW1lRW5kLnByb2Nlc3MoKTtcbn1cblxudmFyIG9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5zY2hlZHVsZTtcbnZhciBvbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZnJhbWVVcGRhdGUuc2NoZWR1bGU7XG52YXIgb25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGZyYW1lUmVuZGVyLnNjaGVkdWxlO1xudmFyIG9uRnJhbWVFbmQgPSBleHBvcnRzLm9uRnJhbWVFbmQgPSBmcmFtZUVuZC5zY2hlZHVsZTtcbnZhciBjYW5jZWxPbkZyYW1lU3RhcnQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGZyYW1lUmVuZGVyLmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lRW5kID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lRW5kID0gZnJhbWVFbmQuY2FuY2VsO1xuXG52YXIgdGltZVNpbmNlTGFzdEZyYW1lID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBlbGFwc2VkO1xufTtcbnZhciBjdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLmN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGN1cnJlbnRGcmFtZXN0YW1wO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bWNtRnRaWE41Ym1NdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sc2lkMmxzYkZKbGJtUmxjazVsZUhSR2NtRnRaU0lzSWsxQldGOUZURUZRVTBWRUlpd2lZM1Z5Y21WdWRFWnlZVzFsYzNSaGJYQWlMQ0psYkdGd2MyVmtJaXdpWkdsc1lYUnBiMjRpTENKemRHRnlkRkpsYm1SbGNreHZiM0FpTENKd2NtOWpaWE56Um5KaGJXVWlMQ0ptY21GdFpWTjBZWEowSWl3aVpuSmhiV1ZWY0dSaGRHVWlMQ0ptY21GdFpWSmxibVJsY2lJc0ltWnlZVzFsUlc1a0lpd2labkpoYldWemRHRnRjQ0lzSWsxaGRHZ2lMQ0p0WVhnaUxDSnRhVzRpTENKd2NtOWpaWE56SWl3aWIyNUdjbUZ0WlZOMFlYSjBJaXdpYzJOb1pXUjFiR1VpTENKdmJrWnlZVzFsVlhCa1lYUmxJaXdpYjI1R2NtRnRaVkpsYm1SbGNpSXNJbTl1Um5KaGJXVkZibVFpTENKallXNWpaV3hQYmtaeVlXMWxVM1JoY25RaUxDSmpZVzVqWld3aUxDSmpZVzVqWld4UGJrWnlZVzFsVlhCa1lYUmxJaXdpWTJGdVkyVnNUMjVHY21GdFpWSmxibVJsY2lJc0ltTmhibU5sYkU5dVJuSmhiV1ZGYm1RaUxDSjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVWlMQ0pqZFhKeVpXNTBSbkpoYldWVWFXMWxjM1JoYlhBaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlJVRXNTVUZCU1VFc2MwSkJRWE5DTEV0QlFURkNPenRCUVVWQk96czdPMEZCU1VFc1NVRkJUVU1zWTBGQll5eEZRVUZ3UWpzN1FVRkZRVHM3T3p0QlFVbEJMRWxCUVVsRExHOUNRVUZ2UWl4NVFrRkJlRUk3TzBGQlJVRXNTVUZCU1VNc1ZVRkJWU3hEUVVGa096dEJRVVZCT3pzN096dEJRVXRCTEVsQlFVbERMRmRCUVZjc1EwRkJaanM3UVVGRlFTeFRRVUZUUXl4bFFVRlVMRWRCUVRKQ08wRkJRM3BDTEUxQlFVa3NRMEZCUTB3c2JVSkJRVXdzUlVGQk1FSTdRVUZEZUVKQkxEQkNRVUZ6UWl4SlFVRjBRanRCUVVOQkxDdENRVUZaVFN4WlFVRmFPMEZCUTBRN1FVRkRSanM3UVVGRlJDeEpRVUZOUXl4aFFVRmhMR2REUVVGcFFrWXNaVUZCYWtJc1EwRkJia0k3UVVGRFFTeEpRVUZOUnl4alFVRmpMR2REUVVGcFFrZ3NaVUZCYWtJc1EwRkJjRUk3UVVGRFFTeEpRVUZOU1N4alFVRmpMR2REUVVGcFFrb3NaVUZCYWtJc1EwRkJjRUk3UVVGRFFTeEpRVUZOU3l4WFFVRlhMR2REUVVGcFFrd3NaVUZCYWtJc1EwRkJha0k3TzBGQlJVRXNVMEZCVTBNc1dVRkJWQ3hEUVVGelFrc3NWVUZCZEVJc1JVRkJhME03UVVGRGFFTllMSGRDUVVGelFpeExRVUYwUWp0QlFVTkJSeXhaUVVGVlV5eExRVUZMUXl4SFFVRk1MRU5CUVZORUxFdEJRVXRGTEVkQlFVd3NRMEZCVTBnc1lVRkJZVlFzYVVKQlFYUkNMRVZCUVhsRFJDeFhRVUY2UXl4RFFVRlVMRVZCUVdkRkxFTkJRV2hGTEVsQlFYRkZSeXhSUVVFdlJUdEJRVU5CUml4elFrRkJiMEpUTEZWQlFYQkNPenRCUVVWQlNpeGhRVUZYVVN4UFFVRllPMEZCUTBGUUxHTkJRVmxQTEU5QlFWbzdRVUZEUVU0c1kwRkJXVTBzVDBGQldqdEJRVU5CVEN4WFFVRlRTeXhQUVVGVU8wRkJRMFE3TzBGQlJVMHNTVUZCVFVNc2MwTkJRV1ZVTEZkQlFWZFZMRkZCUVdoRE8wRkJRMEVzU1VGQlRVTXNkME5CUVdkQ1ZpeFpRVUZaVXl4UlFVRnNRenRCUVVOQkxFbEJRVTFGTEhkRFFVRm5RbFlzV1VGQldWRXNVVUZCYkVNN1FVRkRRU3hKUVVGTlJ5eHJRMEZCWVZZc1UwRkJVMDhzVVVGQk5VSTdRVUZEUVN4SlFVRk5TU3hyUkVGQmNVSmtMRmRCUVZkbExFMUJRWFJETzBGQlEwRXNTVUZCVFVNc2IwUkJRWE5DWml4WlFVRlpZeXhOUVVGNFF6dEJRVU5CTEVsQlFVMUZMRzlFUVVGelFtWXNXVUZCV1dFc1RVRkJlRU03UVVGRFFTeEpRVUZOUnl3NFEwRkJiVUptTEZOQlFWTlpMRTFCUVd4RE96dEJRVVZCTEVsQlFVMUpMR3RFUVVGeFFqdEJRVUZCTEZOQlFVMTJRaXhQUVVGT08wRkJRVUVzUTBGQk0wSTdRVUZEUVN4SlFVRk5kMElzZDBSQlFYZENPMEZCUVVFc1UwRkJUWHBDTEdsQ1FVRk9PMEZCUVVFc1EwRkJPVUlpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2IyNU9aWGgwUm5KaGJXVWdabkp2YlNBbkxpOXZiaTF1WlhoMExXWnlZVzFsSnp0Y2JtbHRjRzl5ZENCamNtVmhkR1ZTWlc1a1pYSlRkR1Z3SUdaeWIyMGdKeTR2WTNKbFlYUmxMWEpsYm1SbGNpMXpkR1Z3Snp0Y2JtbHRjRzl5ZENCN0lHTjFjbkpsYm5SVWFXMWxJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHViR1YwSUhkcGJHeFNaVzVrWlhKT1pYaDBSbkpoYldVZ1BTQm1ZV3h6WlR0Y2JseHVMeW9xWEc0Z0tpQk5ZWGhwYlhWdElIQmxjbTFwZEhSbFpDQnRjeUJ6YVc1alpTQnNZWE4wSUdaeVlXMWxYRzRnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNvdlhHNWpiMjV6ZENCTlFWaGZSVXhCVUZORlJDQTlJREl3TzF4dVhHNHZLaXBjYmlBcUlFTjFjbkpsYm5RZ1puSmhiV1Z6ZEdGdGNGeHVJQ29nUUhSNWNHVWdlMDUxYldKbGNuMWNiaUFxTDF4dWJHVjBJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdJRDBnWTNWeWNtVnVkRlJwYldVb0tUdGNibHh1YkdWMElHVnNZWEJ6WldRZ1BTQXdPMXh1WEc0dktpcGNiaUFxSUVaaFkzUnZjaUIwYnlCdGRXeDBhWEJzZVNCZ1pXeGhjSE5sWkdBZ1lua2dMU0JjYmlBcUlEQXVOU0IzYjNWc1pDQmlaU0J6Ykc5M0lHMXZkR2x2Yml3Z01pQjNiM1ZzWkNCaVpTQm1ZWE4wWEc0Z0tpQkFkSGx3WlNCN1RuVnRZbVZ5ZlZ4dUlDb3ZYRzVzWlhRZ1pHbHNZWFJwYjI0Z1BTQXhPMXh1WEc1bWRXNWpkR2x2YmlCemRHRnlkRkpsYm1SbGNreHZiM0FvS1NCN1hHNGdJR2xtSUNnaGQybHNiRkpsYm1SbGNrNWxlSFJHY21GdFpTa2dlMXh1SUNBZ0lIZHBiR3hTWlc1a1pYSk9aWGgwUm5KaGJXVWdQU0IwY25WbE8xeHVJQ0FnSUc5dVRtVjRkRVp5WVcxbEtIQnliMk5sYzNOR2NtRnRaU2s3WEc0Z0lIMWNibjFjYmx4dVkyOXVjM1FnWm5KaGJXVlRkR0Z5ZENBOUlHTnlaV0YwWlZKbGJtUmxjbE4wWlhBb2MzUmhjblJTWlc1a1pYSk1iMjl3S1R0Y2JtTnZibk4wSUdaeVlXMWxWWEJrWVhSbElEMGdZM0psWVhSbFVtVnVaR1Z5VTNSbGNDaHpkR0Z5ZEZKbGJtUmxja3h2YjNBcE8xeHVZMjl1YzNRZ1puSmhiV1ZTWlc1a1pYSWdQU0JqY21WaGRHVlNaVzVrWlhKVGRHVndLSE4wWVhKMFVtVnVaR1Z5VEc5dmNDazdYRzVqYjI1emRDQm1jbUZ0WlVWdVpDQTlJR055WldGMFpWSmxibVJsY2xOMFpYQW9jM1JoY25SU1pXNWtaWEpNYjI5d0tUdGNibHh1Wm5WdVkzUnBiMjRnY0hKdlkyVnpjMFp5WVcxbEtHWnlZVzFsYzNSaGJYQXBJSHRjYmlBZ2QybHNiRkpsYm1SbGNrNWxlSFJHY21GdFpTQTlJR1poYkhObE8xeHVJQ0JsYkdGd2MyVmtJRDBnVFdGMGFDNXRZWGdvVFdGMGFDNXRhVzRvWm5KaGJXVnpkR0Z0Y0NBdElHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd0xDQk5RVmhmUlV4QlVGTkZSQ2tzSURFcElDb2daR2xzWVhScGIyNDdYRzRnSUdOMWNuSmxiblJHY21GdFpYTjBZVzF3SUQwZ1puSmhiV1Z6ZEdGdGNEdGNibHh1SUNCbWNtRnRaVk4wWVhKMExuQnliMk5sYzNNb0tUdGNiaUFnWm5KaGJXVlZjR1JoZEdVdWNISnZZMlZ6Y3lncE8xeHVJQ0JtY21GdFpWSmxibVJsY2k1d2NtOWpaWE56S0NrN1hHNGdJR1p5WVcxbFJXNWtMbkJ5YjJObGMzTW9LVHRjYm4xY2JseHVaWGh3YjNKMElHTnZibk4wSUc5dVJuSmhiV1ZUZEdGeWRDQTlJR1p5WVcxbFUzUmhjblF1YzJOb1pXUjFiR1U3WEc1bGVIQnZjblFnWTI5dWMzUWdiMjVHY21GdFpWVndaR0YwWlNBOUlHWnlZVzFsVlhCa1lYUmxMbk5qYUdWa2RXeGxPMXh1Wlhod2IzSjBJR052Ym5OMElHOXVSbkpoYldWU1pXNWtaWElnUFNCbWNtRnRaVkpsYm1SbGNpNXpZMmhsWkhWc1pUdGNibVY0Y0c5eWRDQmpiMjV6ZENCdmJrWnlZVzFsUlc1a0lEMGdabkpoYldWRmJtUXVjMk5vWldSMWJHVTdYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyRnVZMlZzVDI1R2NtRnRaVk4wWVhKMElEMGdabkpoYldWVGRHRnlkQzVqWVc1alpXdzdYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyRnVZMlZzVDI1R2NtRnRaVlZ3WkdGMFpTQTlJR1p5WVcxbFZYQmtZWFJsTG1OaGJtTmxiRHRjYm1WNGNHOXlkQ0JqYjI1emRDQmpZVzVqWld4UGJrWnlZVzFsVW1WdVpHVnlJRDBnWm5KaGJXVlNaVzVrWlhJdVkyRnVZMlZzTzF4dVpYaHdiM0owSUdOdmJuTjBJR05oYm1ObGJFOXVSbkpoYldWRmJtUWdQU0JtY21GdFpVVnVaQzVqWVc1alpXdzdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVWdQU0FvS1NBOVBpQmxiR0Z3YzJWa08xeHVaWGh3YjNKMElHTnZibk4wSUdOMWNuSmxiblJHY21GdFpWUnBiV1Z6ZEdGdGNDQTlJQ2dwSUQwK0lHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd08xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mcmFtZXN5bmMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAvLyBsYXdzdWl0IC0gc29ycnlcbiAgZnVuY3Rpb24gQWN0aW9uKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbik7XG5cbiAgICB0aGlzLnNjaGVkdWxlZFVwZGF0ZSA9IHRoaXMuc2NoZWR1bGVkVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzKTtcblxuICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuXG4gICAgdGhpcy5jdXJyZW50ID0gcHJvcHMuY3VycmVudCB8fCBwcm9wcy5mcm9tIHx8IDA7XG4gIH1cblxuICBBY3Rpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG9uU3RhcnQgPSBfcHJvcHMub25TdGFydDtcbiAgICB2YXIgX29uU3RhcnQgPSBfcHJvcHMuX29uU3RhcnQ7XG4gICAgdmFyIHBhc3NpdmUgPSBfcHJvcHMucGFzc2l2ZTtcblxuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdGFydCkgdGhpcy5vblN0YXJ0KCk7XG4gICAgaWYgKG9uU3RhcnQpIG9uU3RhcnQodGhpcyk7XG4gICAgaWYgKF9vblN0YXJ0KSBfb25TdGFydCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvblN0b3AgPSBfcHJvcHMyLm9uU3RvcDtcbiAgICB2YXIgX29uU3RvcCA9IF9wcm9wczIuX29uU3RvcDtcbiAgICB2YXIgcGFzc2l2ZSA9IF9wcm9wczIucGFzc2l2ZTtcblxuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgKDAsIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVVwZGF0ZSkodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RvcCkgdGhpcy5vblN0b3AoKTtcbiAgICBpZiAob25TdG9wKSBvblN0b3AodGhpcyk7XG4gICAgaWYgKF9vblN0b3ApIF9vblN0b3AodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvbkNvbXBsZXRlID0gX3Byb3BzMy5vbkNvbXBsZXRlO1xuICAgIHZhciBfb25Db21wbGV0ZSA9IF9wcm9wczMuX29uQ29tcGxldGU7XG5cblxuICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgaWYgKHRoaXMub25Db21wbGV0ZSkgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUodGhpcyk7XG4gICAgaWYgKF9vbkNvbXBsZXRlKSBfb25Db21wbGV0ZSh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2NoZWR1bGVkVXBkYXRlID0gZnVuY3Rpb24gc2NoZWR1bGVkVXBkYXRlKCkge1xuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCk7XG4gICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50O1xuXG4gICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvblVwZGF0ZSA9IF9wcm9wczQub25VcGRhdGU7XG4gICAgdmFyIHBhc3NpdmUgPSBfcHJvcHM0LnBhc3NpdmU7XG5cblxuICAgIGlmICh0aGlzLnVwZGF0ZSkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy51cGRhdGUodGhpcy5jdXJyZW50KTtcbiAgICB9XG5cbiAgICBpZiAob25VcGRhdGUpIG9uVXBkYXRlKHRoaXMuZ2V0KCksIHRoaXMpO1xuICAgIHRoaXMuZmlyZUxpc3RlbmVycygpO1xuXG4gICAgaWYgKCFwYXNzaXZlICYmIHRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiB0aGlzLmlzQWN0aW9uQ29tcGxldGUoKSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbiBzZXRQcm9wcyhwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgcHJvcHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUub3V0cHV0ID0gZnVuY3Rpb24gb3V0cHV0KGZ1bmMpIHtcbiAgICB0aGlzLnByb3BzLm9uVXBkYXRlID0gZnVuYztcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCgpIHtcbiAgICB2YXIgdHJhbnNmb3JtID0gdGhpcy5wcm9wcy50cmFuc2Zvcm07XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtID8gdHJhbnNmb3JtKHRoaXMuY3VycmVudCkgOiB0aGlzLmN1cnJlbnQ7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXRCZWZvcmVUcmFuc2Zvcm0gPSBmdW5jdGlvbiBnZXRCZWZvcmVUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldFByb3AgPSBmdW5jdGlvbiBnZXRQcm9wKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzW2tleV07XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXRWZWxvY2l0eSA9IGZ1bmN0aW9uIGdldFZlbG9jaXR5KCkge1xuICAgIHJldHVybiAoMCwgX2NhbGMuc3BlZWRQZXJTZWNvbmQpKHRoaXMuY3VycmVudCAtIHRoaXMucHJldiwgdGhpcy5sYXN0VXBkYXRlZCk7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IFtdO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gdGhpcy5udW1MaXN0ZW5lcnMgfHwgMDtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzKys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHZhciBsaXN0ZW5lckluZGV4ID0gdGhpcy5saXN0ZW5lcnMgPyB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA6IC0xO1xuICAgIGlmIChsaXN0ZW5lckluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMtLTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5maXJlTGlzdGVuZXJzID0gZnVuY3Rpb24gZmlyZUxpc3RlbmVycygpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuZ2V0KCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bUxpc3RlbmVyczsgaSsrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tpXShjdXJyZW50LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIEFjdGlvbjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSWtGamRHbHZiaUlzSW5CeWIzQnpJaXdpYzJOb1pXUjFiR1ZrVlhCa1lYUmxJaXdpWW1sdVpDSXNJbU52Ym5OMGNuVmpkRzl5SWl3aVpHVm1ZWFZzZEZCeWIzQnpJaXdpYzJWMFVISnZjSE1pTENKamRYSnlaVzUwSWl3aVpuSnZiU0lzSW5OMFlYSjBJaXdpYjI1VGRHRnlkQ0lzSWw5dmJsTjBZWEowSWl3aWNHRnpjMmwyWlNJc0lsOXBjMEZqZEdsMlpTSXNJbk4wYjNBaUxDSnZibE4wYjNBaUxDSmZiMjVUZEc5d0lpd2lZMjl0Y0d4bGRHVWlMQ0p2YmtOdmJYQnNaWFJsSWl3aVgyOXVRMjl0Y0d4bGRHVWlMQ0pzWVhOMFZYQmtZWFJsWkNJc0luQnlaWFlpTENKdmJsVndaR0YwWlNJc0luVndaR0YwWlNJc0ltZGxkQ0lzSW1acGNtVk1hWE4wWlc1bGNuTWlMQ0pwYzBGamRHbHZia052YlhCc1pYUmxJaXdpYjNWMGNIVjBJaXdpWm5WdVl5SXNJblJ5WVc1elptOXliU0lzSW1kbGRFSmxabTl5WlZSeVlXNXpabTl5YlNJc0luTmxkQ0lzSW5ZaUxDSm5aWFJRY205d0lpd2lhMlY1SWl3aVoyVjBWbVZzYjJOcGRIa2lMQ0pwYzBGamRHbDJaU0lzSW1Ga1pFeHBjM1JsYm1WeUlpd2liR2x6ZEdWdVpYSWlMQ0pzYVhOMFpXNWxjbk1pTENKdWRXMU1hWE4wWlc1bGNuTWlMQ0pwYm1SbGVFOW1JaXdpY0hWemFDSXNJbkpsYlc5MlpVeHBjM1JsYm1WeUlpd2liR2x6ZEdWdVpYSkpibVJsZUNJc0luTndiR2xqWlNJc0lta2lYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGQk96dEJRVU5CT3pzN08wbEJSVTFCTEUwN1FVRkJVenRCUVVOaUxHdENRVUZaUXl4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlEycENMRk5CUVV0RExHVkJRVXdzUjBGQmRVSXNTMEZCUzBFc1pVRkJUQ3hEUVVGeFFrTXNTVUZCY2tJc1EwRkJNRUlzU1VGQk1VSXNRMEZCZGtJN08wRkJSVUVzVTBGQlMwWXNTMEZCVEN4blFrRkRTeXhMUVVGTFJ5eFhRVUZNTEVOQlFXbENReXhaUVVSMFFqczdRVUZKUVN4VFFVRkxReXhSUVVGTUxFTkJRV05NTEV0QlFXUTdPMEZCUlVFc1UwRkJTMDBzVDBGQlRDeEhRVUZsVGl4TlFVRk5UU3hQUVVGT0xFbEJRV2xDVGl4TlFVRk5UeXhKUVVGMlFpeEpRVUVyUWl4RFFVRTVRenRCUVVORU96dHRRa0ZGUkVNc1N5eHZRa0ZCVVR0QlFVRkJMR2xDUVVOcFF5eExRVUZMVWl4TFFVUjBRenRCUVVGQkxGRkJRMFZUTEU5QlJFWXNWVUZEUlVFc1QwRkVSanRCUVVGQkxGRkJRMWRETEZGQlJGZ3NWVUZEVjBFc1VVRkVXRHRCUVVGQkxGRkJRM0ZDUXl4UFFVUnlRaXhWUVVOeFFrRXNUMEZFY2tJN096dEJRVWRPTEZGQlFVa3NRMEZCUTBFc1QwRkJUQ3hGUVVGak8wRkJRMW9zVjBGQlMwTXNVMEZCVEN4SFFVRnBRaXhKUVVGcVFqdEJRVU5CTEc5RFFVRmpMRXRCUVV0WUxHVkJRVzVDTzBGQlEwUTdPMEZCUlVRc1VVRkJTU3hMUVVGTFVTeFBRVUZVTEVWQlFXdENMRXRCUVV0QkxFOUJRVXc3UVVGRGJFSXNVVUZCU1VFc1QwRkJTaXhGUVVGaFFTeFJRVUZSTEVsQlFWSTdRVUZEWWl4UlFVRkpReXhSUVVGS0xFVkJRV05CTEZOQlFWTXNTVUZCVkRzN1FVRkZaQ3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJFY3NTU3h0UWtGQlR6dEJRVUZCTEd0Q1FVTm5ReXhMUVVGTFlpeExRVVJ5UXp0QlFVRkJMRkZCUTBkakxFMUJSRWdzVjBGRFIwRXNUVUZFU0R0QlFVRkJMRkZCUTFkRExFOUJSRmdzVjBGRFYwRXNUMEZFV0R0QlFVRkJMRkZCUTI5Q1NpeFBRVVJ3UWl4WFFVTnZRa0VzVDBGRWNFSTdPenRCUVVkTUxGRkJRVWtzUTBGQlEwRXNUMEZCVEN4RlFVRmpPMEZCUTFvc1YwRkJTME1zVTBGQlRDeEhRVUZwUWl4TFFVRnFRanRCUVVOQkxEQkRRVUZ2UWl4TFFVRkxXQ3hsUVVGNlFqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1MwRkJTMkVzVFVGQlZDeEZRVUZwUWl4TFFVRkxRU3hOUVVGTU8wRkJRMnBDTEZGQlFVbEJMRTFCUVVvc1JVRkJXVUVzVDBGQlR5eEpRVUZRTzBGQlExb3NVVUZCU1VNc1QwRkJTaXhGUVVGaFFTeFJRVUZSTEVsQlFWSTdPMEZCUldJc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN2JVSkJSVVJETEZFc2RVSkJRVmM3UVVGQlFTeHJRa0ZETWtJc1MwRkJTMmhDTEV0QlJHaERPMEZCUVVFc1VVRkRSR2xDTEZWQlJFTXNWMEZEUkVFc1ZVRkVRenRCUVVGQkxGRkJRMWRETEZkQlJGZ3NWMEZEVjBFc1YwRkVXRHM3TzBGQlIxUXNVMEZCUzB3c1NVRkJURHM3UVVGRlFTeFJRVUZKTEV0QlFVdEpMRlZCUVZRc1JVRkJjVUlzUzBGQlMwRXNWVUZCVER0QlFVTnlRaXhSUVVGSlFTeFZRVUZLTEVWQlFXZENRU3hYUVVGWExFbEJRVmc3UVVGRGFFSXNVVUZCU1VNc1YwRkJTaXhGUVVGcFFrRXNXVUZCV1N4SlFVRmFPenRCUVVWcVFpeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkdwQ0xHVXNPRUpCUVd0Q08wRkJRMmhDTEZOQlFVdHJRaXhYUVVGTUxFZEJRVzFDTEc5RFFVRnVRanRCUVVOQkxGTkJRVXRETEVsQlFVd3NSMEZCV1N4TFFVRkxaQ3hQUVVGcVFqczdRVUZHWjBJc2EwSkJTV01zUzBGQlMwNHNTMEZLYmtJN1FVRkJRU3hSUVVsU2NVSXNVVUZLVVN4WFFVbFNRU3hSUVVwUk8wRkJRVUVzVVVGSlJWWXNUMEZLUml4WFFVbEZRU3hQUVVwR096czdRVUZOYUVJc1VVRkJTU3hMUVVGTFZ5eE5RVUZVTEVWQlFXbENPMEZCUTJZc1YwRkJTMmhDTEU5QlFVd3NSMEZCWlN4TFFVRkxaMElzVFVGQlRDeERRVUZaTEV0QlFVdG9RaXhQUVVGcVFpeERRVUZtTzBGQlEwUTdPMEZCUlVRc1VVRkJTV1VzVVVGQlNpeEZRVUZqUVN4VFFVRlRMRXRCUVV0RkxFZEJRVXdzUlVGQlZDeEZRVUZ4UWl4SlFVRnlRanRCUVVOa0xGTkJRVXRETEdGQlFVdzdPMEZCUlVFc1VVRkJTU3hEUVVGRFlpeFBRVUZFTEVsQlFWa3NTMEZCUzBNc1UwRkJja0lzUlVGQlowTTdRVUZET1VJc2IwTkJRV01zUzBGQlMxZ3NaVUZCYmtJN1FVRkRSRHM3UVVGRlJDeFJRVUZKTEV0QlFVdDNRaXhuUWtGQlRDeEpRVUY1UWl4TFFVRkxRU3huUWtGQlRDeEZRVUUzUWl4RlFVRnpSRHRCUVVOd1JDeFhRVUZMVkN4UlFVRk1PMEZCUTBRN08wRkJSVVFzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YlVKQlJVUllMRkVzY1VKQlFWTk1MRXNzUlVGQlR6dEJRVU5rTEZOQlFVdEJMRXRCUVV3c1owSkJRMHNzUzBGQlMwRXNTMEZFVml4RlFVVkxRU3hMUVVaTU8wRkJTVUVzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YlVKQlJVUXdRaXhOTEcxQ1FVRlBReXhKTEVWQlFVMDdRVUZEV0N4VFFVRkxNMElzUzBGQlRDeERRVUZYY1VJc1VVRkJXQ3hIUVVGelFrMHNTVUZCZEVJN1FVRkRRU3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJFb3NSeXhyUWtGQlRUdEJRVUZCTEZGQlEwbExMRk5CUkVvc1IwRkRhMElzUzBGQlN6VkNMRXRCUkhaQ0xFTkJRMGswUWl4VFFVUktPenRCUVVWS0xGZEJRVTlCTEZsQlFWbEJMRlZCUVZVc1MwRkJTM1JDTEU5QlFXWXNRMEZCV2l4SFFVRnpReXhMUVVGTFFTeFBRVUZzUkR0QlFVTkVMRWM3TzIxQ1FVVkVkVUlzYTBJc2FVTkJRWEZDTzBGQlEyNUNMRmRCUVU4c1MwRkJTM1pDTEU5QlFWbzdRVUZEUkN4SE96dHRRa0ZGUkhkQ0xFY3NaMEpCUVVsRExFTXNSVUZCUnp0QlFVTk1MRk5CUVV0NlFpeFBRVUZNTEVkQlFXVjVRaXhEUVVGbU8wRkJRMEVzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YlVKQlJVUkRMRThzYjBKQlFWRkRMRWNzUlVGQlN6dEJRVU5ZTEZkQlFVOHNTMEZCUzJwRExFdEJRVXdzUTBGQlYybERMRWRCUVZnc1EwRkJVRHRCUVVORUxFYzdPMjFDUVVWRVF5eFhMREJDUVVGak8wRkJRMW9zVjBGQlR5d3dRa0ZCWlN4TFFVRkxOVUlzVDBGQlRDeEhRVUZsTEV0QlFVdGpMRWxCUVc1RExFVkJRWGxETEV0QlFVdEVMRmRCUVRsRExFTkJRVkE3UVVGRFJDeEhPenR0UWtGRlJHZENMRkVzZFVKQlFWYzdRVUZEVkN4WFFVRlBMRXRCUVV0MlFpeFRRVUZhTzBGQlEwUXNSenM3YlVKQlJVUjNRaXhYTEhkQ1FVRlpReXhSTEVWQlFWVTdRVUZEY0VJc1UwRkJTME1zVTBGQlRDeEhRVUZwUWl4TFFVRkxRU3hUUVVGTUxFbEJRV3RDTEVWQlFXNURPMEZCUTBFc1UwRkJTME1zV1VGQlRDeEhRVUZ2UWl4TFFVRkxRU3haUVVGTUxFbEJRWEZDTEVOQlFYcERPMEZCUTBFc1VVRkJTU3hMUVVGTFJDeFRRVUZNTEVOQlFXVkZMRTlCUVdZc1EwRkJkVUpJTEZGQlFYWkNMRTFCUVhGRExFTkJRVU1zUTBGQk1VTXNSVUZCTmtNN1FVRkRNME1zVjBGQlMwTXNVMEZCVEN4RFFVRmxSeXhKUVVGbUxFTkJRVzlDU2l4UlFVRndRanRCUVVOQkxGZEJRVXRGTEZsQlFVdzdRVUZEUkR0QlFVTkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMjFDUVVWRVJ5eGpMREpDUVVGbFRDeFJMRVZCUVZVN1FVRkRka0lzVVVGQlRVMHNaMEpCUVdsQ0xFdEJRVXRNTEZOQlFVNHNSMEZCYlVJc1MwRkJTMEVzVTBGQlRDeERRVUZsUlN4UFFVRm1MRU5CUVhWQ1NDeFJRVUYyUWl4RFFVRnVRaXhIUVVGelJDeERRVUZETEVOQlFUZEZPMEZCUTBFc1VVRkJTVTBzYTBKQlFXdENMRU5CUVVNc1EwRkJka0lzUlVGQk1FSTdRVUZEZUVJc1YwRkJTMG9zV1VGQlREdEJRVU5CTEZkQlFVdEVMRk5CUVV3c1EwRkJaVTBzVFVGQlppeERRVUZ6UWtRc1lVRkJkRUlzUlVGQmNVTXNRMEZCY2tNN1FVRkRSRHRCUVVORUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08yMUNRVVZFYmtJc1lTdzBRa0ZCWjBJN1FVRkRaQ3hSUVVGTmJFSXNWVUZCVlN4TFFVRkxhVUlzUjBGQlRDeEZRVUZvUWp0QlFVTkJMRk5CUVVzc1NVRkJTWE5DTEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNTeExRVUZMVGl4WlFVRjZRaXhGUVVGMVEwMHNSMEZCZGtNc1JVRkJORU03UVVGRE1VTXNWMEZCUzFBc1UwRkJUQ3hEUVVGbFR5eERRVUZtTEVWQlFXdENka01zVDBGQmJFSXNSVUZCTWtJc1NVRkJNMEk3UVVGRFJEdEJRVU5FTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3T3pzN08ydENRVWRaVUN4Tklpd2labWxzWlNJNkltbHVaR1Y0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnYjI1R2NtRnRaVlZ3WkdGMFpTd2dZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU3dnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsSUgwZ1puSnZiU0FuTGk0dlpuSmhiV1Z6ZVc1akp6dGNibWx0Y0c5eWRDQjdJSE53WldWa1VHVnlVMlZqYjI1a0lIMGdabkp2YlNBbkxpNHZhVzVqTDJOaGJHTW5PMXh1WEc1amJHRnpjeUJCWTNScGIyNGdleUF2THlCc1lYZHpkV2wwSUMwZ2MyOXljbmxjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNCMGFHbHpMbk5qYUdWa2RXeGxaRlZ3WkdGMFpTQTlJSFJvYVhNdWMyTm9aV1IxYkdWa1ZYQmtZWFJsTG1KcGJtUW9kR2hwY3lrN1hHNWNiaUFnSUNCMGFHbHpMbkJ5YjNCeklEMGdlMXh1SUNBZ0lDQWdMaTR1ZEdocGN5NWpiMjV6ZEhKMVkzUnZjaTVrWldaaGRXeDBVSEp2Y0hOY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnZEdocGN5NXpaWFJRY205d2N5aHdjbTl3Y3lrN1hHNWNiaUFnSUNCMGFHbHpMbU4xY25KbGJuUWdQU0J3Y205d2N5NWpkWEp5Wlc1MElIeDhJSEJ5YjNCekxtWnliMjBnZkh3Z01EdGNiaUFnZlZ4dVhHNGdJSE4wWVhKMEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2IyNVRkR0Z5ZEN3Z1gyOXVVM1JoY25Rc0lIQmhjM05wZG1VZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc1Y2JpQWdJQ0JwWmlBb0lYQmhjM05wZG1VcElIdGNiaUFnSUNBZ0lIUm9hWE11WDJselFXTjBhWFpsSUQwZ2RISjFaVHRjYmlBZ0lDQWdJRzl1Um5KaGJXVlZjR1JoZEdVb2RHaHBjeTV6WTJobFpIVnNaV1JWY0dSaGRHVXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtOXVVM1JoY25RcElIUm9hWE11YjI1VGRHRnlkQ2dwTzF4dUlDQWdJR2xtSUNodmJsTjBZWEowS1NCdmJsTjBZWEowS0hSb2FYTXBPMXh1SUNBZ0lHbG1JQ2hmYjI1VGRHRnlkQ2tnWDI5dVUzUmhjblFvZEdocGN5azdYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUhOMGIzQW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QnZibE4wYjNBc0lGOXZibE4wYjNBc0lIQmhjM05wZG1VZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc1Y2JpQWdJQ0JwWmlBb0lYQmhjM05wZG1VcElIdGNiaUFnSUNBZ0lIUm9hWE11WDJselFXTjBhWFpsSUQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0JqWVc1alpXeFBia1p5WVcxbFZYQmtZWFJsS0hSb2FYTXVjMk5vWldSMWJHVmtWWEJrWVhSbEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9kR2hwY3k1dmJsTjBiM0FwSUhSb2FYTXViMjVUZEc5d0tDazdYRzRnSUNBZ2FXWWdLRzl1VTNSdmNDa2diMjVUZEc5d0tIUm9hWE1wTzF4dUlDQWdJR2xtSUNoZmIyNVRkRzl3S1NCZmIyNVRkRzl3S0hSb2FYTXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCamIyMXdiR1YwWlNncElIdGNiaUFnSUNCamIyNXpkQ0I3SUc5dVEyOXRjR3hsZEdVc0lGOXZia052YlhCc1pYUmxJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2RHaHBjeTV6ZEc5d0tDazdYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NXZia052YlhCc1pYUmxLU0IwYUdsekxtOXVRMjl0Y0d4bGRHVW9LVHRjYmlBZ0lDQnBaaUFvYjI1RGIyMXdiR1YwWlNrZ2IyNURiMjF3YkdWMFpTaDBhR2x6S1R0Y2JpQWdJQ0JwWmlBb1gyOXVRMjl0Y0d4bGRHVXBJRjl2YmtOdmJYQnNaWFJsS0hSb2FYTXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCelkyaGxaSFZzWldSVmNHUmhkR1VvS1NCN1hHNGdJQ0FnZEdocGN5NXNZWE4wVlhCa1lYUmxaQ0E5SUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNncE8xeHVJQ0FnSUhSb2FYTXVjSEpsZGlBOUlIUm9hWE11WTNWeWNtVnVkRHRjYmx4dUlDQWdJR052Ym5OMElIc2diMjVWY0dSaGRHVXNJSEJoYzNOcGRtVWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCcFppQW9kR2hwY3k1MWNHUmhkR1VwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRDQTlJSFJvYVhNdWRYQmtZWFJsS0hSb2FYTXVZM1Z5Y21WdWRDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLRzl1VlhCa1lYUmxLU0J2YmxWd1pHRjBaU2gwYUdsekxtZGxkQ2dwTENCMGFHbHpLVHRjYmlBZ0lDQjBhR2x6TG1acGNtVk1hWE4wWlc1bGNuTW9LVHRjYmx4dUlDQWdJR2xtSUNnaGNHRnpjMmwyWlNBbUppQjBhR2x6TGw5cGMwRmpkR2wyWlNrZ2UxeHVJQ0FnSUNBZ2IyNUdjbUZ0WlZWd1pHRjBaU2gwYUdsekxuTmphR1ZrZFd4bFpGVndaR0YwWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YVhOQlkzUnBiMjVEYjIxd2JHVjBaU0FtSmlCMGFHbHpMbWx6UVdOMGFXOXVRMjl0Y0d4bGRHVW9LU2tnZTF4dUlDQWdJQ0FnZEdocGN5NWpiMjF3YkdWMFpTZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnYzJWMFVISnZjSE1vY0hKdmNITXBJSHRjYmlBZ0lDQjBhR2x6TG5CeWIzQnpJRDBnZTF4dUlDQWdJQ0FnTGk0dWRHaHBjeTV3Y205d2N5eGNiaUFnSUNBZ0lDNHVMbkJ5YjNCelhHNGdJQ0FnZlR0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lHOTFkSEIxZENobWRXNWpLU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTV2YmxWd1pHRjBaU0E5SUdaMWJtTTdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0JuWlhRb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCMGNtRnVjMlp2Y20wZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdjbVYwZFhKdUlIUnlZVzV6Wm05eWJTQS9JSFJ5WVc1elptOXliU2gwYUdsekxtTjFjbkpsYm5RcElEb2dkR2hwY3k1amRYSnlaVzUwTzF4dUlDQjlYRzVjYmlBZ1oyVjBRbVZtYjNKbFZISmhibk5tYjNKdEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbU4xY25KbGJuUTdYRzRnSUgxY2JseHVJQ0J6WlhRb2Rpa2dlMXh1SUNBZ0lIUm9hWE11WTNWeWNtVnVkQ0E5SUhZN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQm5aWFJRY205d0tHdGxlU2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5CeWIzQnpXMnRsZVYwN1hHNGdJSDFjYmx4dUlDQm5aWFJXWld4dlkybDBlU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjM0JsWldSUVpYSlRaV052Ym1Rb2RHaHBjeTVqZFhKeVpXNTBJQzBnZEdocGN5NXdjbVYyTENCMGFHbHpMbXhoYzNSVmNHUmhkR1ZrS1R0Y2JpQWdmVnh1WEc0Z0lHbHpRV04wYVhabEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDlwYzBGamRHbDJaVHRjYmlBZ2ZWeHVYRzRnSUdGa1pFeHBjM1JsYm1WeUtHeHBjM1JsYm1WeUtTQjdYRzRnSUNBZ2RHaHBjeTVzYVhOMFpXNWxjbk1nUFNCMGFHbHpMbXhwYzNSbGJtVnljeUI4ZkNCYlhUdGNiaUFnSUNCMGFHbHpMbTUxYlV4cGMzUmxibVZ5Y3lBOUlIUm9hWE11Ym5WdFRHbHpkR1Z1WlhKeklIeDhJREE3WEc0Z0lDQWdhV1lnS0hSb2FYTXViR2x6ZEdWdVpYSnpMbWx1WkdWNFQyWW9iR2x6ZEdWdVpYSXBJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdkR2hwY3k1c2FYTjBaVzVsY25NdWNIVnphQ2hzYVhOMFpXNWxjaWs3WEc0Z0lDQWdJQ0IwYUdsekxtNTFiVXhwYzNSbGJtVnljeXNyTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUhKbGJXOTJaVXhwYzNSbGJtVnlLR3hwYzNSbGJtVnlLU0I3WEc0Z0lDQWdZMjl1YzNRZ2JHbHpkR1Z1WlhKSmJtUmxlQ0E5SUNoMGFHbHpMbXhwYzNSbGJtVnljeWtnUHlCMGFHbHpMbXhwYzNSbGJtVnljeTVwYm1SbGVFOW1LR3hwYzNSbGJtVnlLU0E2SUMweE8xeHVJQ0FnSUdsbUlDaHNhWE4wWlc1bGNrbHVaR1Y0SUNFOVBTQXRNU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXVkVzFNYVhOMFpXNWxjbk10TFR0Y2JpQWdJQ0FnSUhSb2FYTXViR2x6ZEdWdVpYSnpMbk53YkdsalpTaHNhWE4wWlc1bGNrbHVaR1Y0TENBeEtUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQm1hWEpsVEdsemRHVnVaWEp6S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJR04xY25KbGJuUWdQU0IwYUdsekxtZGxkQ2dwTzF4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXVkVzFNYVhOMFpXNWxjbk03SUdrckt5a2dlMXh1SUNBZ0lDQWdkR2hwY3k1c2FYTjBaVzVsY25OYmFWMG9ZM1Z5Y21WdWRDd2dkR2hwY3lrN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVGamRHbHZianRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVuZGVyZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuZGVyZXIpO1xuXG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcywgcHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMuY2hhbmdlZFZhbHVlcyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IHN0YXRlLlxuICAgKiBJZiBga2V5YCBpcyBub3QgZGVmaW5lZCwgcmV0dXJuIGVudGlyZSBjYWNoZWQgc3RhdGUuXG4gICAqIElmIGBrZXlgIGlzIGRlZmluZWQsIHJldHVybiBjYWNoZWQgdmFsdWUgaWYgcHJlc2VudC5cbiAgICogSWYgYGtleWAgaXMgZGVmaW5lZCBhbmQgY2FjaGVkIHZhbHVlIGlzIG5vdCBwcmVzZW50LCByZWFkIGFuZCByZXR1cm4uXG4gICAqIEBwYXJhbSAge3N0cmluZ30gKG9wdGlvbmFsKSBrZXkgb2YgdmFsdWVcbiAgICogQHJldHVybiB7dmFsdWV9XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQoa2V5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZWFkIHZhbHVlIGFjY29yZGluZyB0byBgb25SZWFkYFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IE5hbWUgb2YgcHJvcGVydHkgdG8gcmVhZFxuICAgKiBAcmV0dXJuIHtbdHlwZV19XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiByZWFkKGtleSkge1xuICAgIGlmICh0aGlzLm9uUmVhZCkge1xuICAgICAgcmV0dXJuIHRoaXMub25SZWFkKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgYHN0YXRlYCB3aXRoIG5ldyB2YWx1ZXMgYW5kIHNjaGVkdWxlIGByZW5kZXJgLlxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzXG4gICAqIEBwYXJhbSB7dmFsdWV9IHZhbHVlIHRvc2V0XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgdmFsdWVzID0gYXJnc1swXTtcbiAgICAgIC8vIFNldCBtdWx0aXBsZSB2YWx1ZXNcblxuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICB0aGlzLnNldFZhbHVlKGtleSwgdmFsdWVzW2tleV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2tleTIgPSBhcmdzWzBdO1xuICAgICAgdmFyIHZhbHVlID0gYXJnc1sxXTtcblxuICAgICAgdGhpcy5zZXRWYWx1ZShfa2V5MiwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVSZW5kZXIpKHRoaXMucmVuZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyA+IFdpbGV5IC0gNiBpbiB0aGUgTW9ybmluZ1xuICAvKipcbiAgICogU2V0IGEgc2luZ2xlIHZhbHVlXG4gICAqIElmIGEgc3RyaW5nIG9yIG51bWJlciwgc2V0IGRpcmVjdGx5LlxuICAgKiBJZiBhbiBvYmplY3Qgb3IgYXJyYXksIGNyZWF0ZSBuZXcgb2JqZWN0IG9yIGFycmF5XG4gICAqIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC4gVGhlbiBzaGFsbG93IGNvbXBhcmVcbiAgICogdG8gc2V0IGFuZCBjb21wYXJlIGluZGl2aWR1YWwgdmFsdWVzLlxuICAgKiBPbmUgb2YgdGhlIGNsZWFyZXIgZHJhd2JhY2tzIGFuZCBhbm5veWFuY2VzIHdpdGhcbiAgICogdXNpbmcgbXV0YWJsZSBpbnN0ZWFkIG9mIGltbXV0YWJsZSBzdGF0ZXMuXG4gICAqIEBwYXJhbSB7W3R5cGVdfSBrZXlcbiAgICogQHBhcmFtIHtbdHlwZV19IHZhbHVlXG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gc2V0VmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSB0aGlzLnN0YXRlW2tleV07XG5cbiAgICAvLyBJZiBudW1iZXIgb3Igc3RyaW5nLCBzZXQgZGlyZWN0bHlcbiAgICBpZiAoKDAsIF91dGlscy5pc051bSkodmFsdWUpIHx8ICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlKSkge1xuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLmlzQXJyYXkpKHZhbHVlKSkge1xuICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gW107XG4gICAgICB9XG5cbiAgICAgIHZhciBudW1WYWx1ZXMgPSB2YWx1ZS5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVZhbHVlczsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV1baV0gIT09IHZhbHVlW2ldKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldW2ldID0gdmFsdWVbaV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc09iaikodmFsdWUpKSB7XG4gICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgdmFsdWVLZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gIT09IHZhbHVlW3ZhbHVlS2V5XSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gPSB2YWx1ZVt2YWx1ZUtleV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5wdXNoKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBGaXJlcyBgb25SZW5kZXJgIGlmIHZhbHVlcyBoYXZlIGNoYW5nZWQgb3IgYGZvcmNlUmVuZGVyYFxuICAgKiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBmb3JjZVJlbmRlciA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogYXJndW1lbnRzWzBdO1xuXG4gICAgaWYgKChmb3JjZVJlbmRlciB8fCB0aGlzLmhhc0NoYW5nZWQpICYmIHRoaXMub25SZW5kZXIpIHtcbiAgICAgIHRoaXMub25SZW5kZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZWRWYWx1ZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHNpVW1WdVpHVnlaWElpTENKd2NtOXdjeUlzSW5KbGJtUmxjaUlzSW1KcGJtUWlMQ0pqYjI1emRISjFZM1J2Y2lJc0ltUmxabUYxYkhSUWNtOXdjeUlzSW5OMFlYUmxJaXdpWTJoaGJtZGxaRlpoYkhWbGN5SXNJbWRsZENJc0ltdGxlU0lzSW5WdVpHVm1hVzVsWkNJc0luSmxZV1FpTENKdmJsSmxZV1FpTENKelpYUWlMQ0poY21keklpd2lkbUZzZFdWeklpd2ljMlYwVm1Gc2RXVWlMQ0oyWVd4MVpTSXNJbWhoYzBOb1lXNW5aV1FpTENKamRYSnlaVzUwVm1Gc2RXVWlMQ0p1ZFcxV1lXeDFaWE1pTENKc1pXNW5kR2dpTENKcElpd2lkbUZzZFdWTFpYa2lMQ0p3ZFhOb0lpd2labTl5WTJWU1pXNWtaWElpTENKdmJsSmxibVJsY2lKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3TzBGQlEwRTdPenM3U1VGRlRVRXNVVHRCUVVOS0xHOUNRVUZaUXl4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlEycENMRk5CUVV0RExFMUJRVXdzUjBGQll5eExRVUZMUVN4TlFVRk1MRU5CUVZsRExFbEJRVm9zUTBGQmFVSXNTVUZCYWtJc1EwRkJaRHM3UVVGRlFTeFRRVUZMUml4TFFVRk1MR2RDUVVOTExFdEJRVXRITEZkQlFVd3NRMEZCYVVKRExGbEJSSFJDTEVWQlJVdEtMRXRCUmt3N08wRkJTMEVzVTBGQlMwc3NTMEZCVEN4SFFVRmhMRVZCUVdJN1FVRkRRU3hUUVVGTFF5eGhRVUZNTEVkQlFYRkNMRVZCUVhKQ08wRkJRMFE3TzBGQlJVUTdPenM3T3pzN096czdjVUpCVVVGRExFY3NaMEpCUVVsRExFY3NSVUZCU3p0QlFVTlFMRkZCUVVsQkxFZEJRVW9zUlVGQlV6dEJRVU5RTEZWQlFVa3NTMEZCUzBnc1MwRkJUQ3hEUVVGWFJ5eEhRVUZZTEUxQlFXOUNReXhUUVVGNFFpeEZRVUZ0UXp0QlFVTnFReXhsUVVGUExFdEJRVXRLTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hEUVVGUU8wRkJRMFFzVDBGR1JDeE5RVVZQTzBGQlEwd3NaVUZCVHl4TFFVRkxSU3hKUVVGTUxFTkJRVlZHTEVkQlFWWXNRMEZCVUR0QlFVTkVPMEZCUTBZc1MwRk9SQ3hOUVUxUE8wRkJRMHdzWVVGQlR5eExRVUZMU0N4TFFVRmFPMEZCUTBRN1FVRkRSaXhIT3p0QlFVVkVPenM3T3pzN08zRkNRVXRCU3l4SkxHbENRVUZMUml4SExFVkJRVXM3UVVGRFVpeFJRVUZKTEV0QlFVdEhMRTFCUVZRc1JVRkJhVUk3UVVGRFppeGhRVUZQTEV0QlFVdEJMRTFCUVV3c1EwRkJXVWdzUjBGQldpeERRVUZRTzBGQlEwUTdRVUZEUml4SE96dEJRVVZFT3pzN096czdPM0ZDUVV0QlNTeEhMR3RDUVVGaE8wRkJRVUVzYzBOQlFVNURMRWxCUVUwN1FVRkJUa0VzVlVGQlRUdEJRVUZCT3p0QlFVTllMRkZCUVVrc1QwRkJUMEVzUzBGQlN5eERRVUZNTEVOQlFWQXNTMEZCYlVJc1YwRkJka0lzUlVGQmIwTTdRVUZCUVN4VlFVTXhRa01zVFVGRU1FSXNSMEZEWmtRc1NVRkVaVHRCUVVWc1F6czdRVUZEUVN4WFFVRkxMRWxCUVUxTUxFZEJRVmdzU1VGQmEwSk5MRTFCUVd4Q0xFVkJRVEJDTzBGQlEzaENMR0ZCUVV0RExGRkJRVXdzUTBGQlkxQXNSMEZCWkN4RlFVRnRRazBzVDBGQlQwNHNSMEZCVUN4RFFVRnVRanRCUVVORU8wRkJRMFlzUzBGT1JDeE5RVTFQTzBGQlFVRXNWVUZEUjBFc1MwRkVTQ3hIUVVOclFrc3NTVUZFYkVJN1FVRkJRU3hWUVVOUlJ5eExRVVJTTEVkQlEydENTQ3hKUVVSc1FqczdRVUZGVEN4WFFVRkxSU3hSUVVGTUxFTkJRV05RTEV0QlFXUXNSVUZCYlVKUkxFdEJRVzVDTzBGQlEwUTdPMEZCUlVRc1VVRkJTU3hMUVVGTFF5eFZRVUZVTEVWQlFYRkNPMEZCUTI1Q0xHOURRVUZqTEV0QlFVdG9RaXhOUVVGdVFqdEJRVU5FT3p0QlFVVkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMEZCUlVRN1FVRkRRVHM3T3pzN096czdPenM3T3p0eFFrRlhRV01zVVN4eFFrRkJVMUFzUnl4RlFVRkxVU3hMTEVWQlFVODdRVUZEYmtJc1VVRkJUVVVzWlVGQlpTeExRVUZMWWl4TFFVRk1MRU5CUVZkSExFZEJRVmdzUTBGQmNrSTdPMEZCUlVFN1FVRkRRU3hSUVVGSkxHdENRVUZOVVN4TFFVRk9MRXRCUVdkQ0xIRkNRVUZUUVN4TFFVRlVMRU5CUVhCQ0xFVkJRWEZETzBGQlEyNURMRlZCUVVsRkxHbENRVUZwUWtZc1MwRkJja0lzUlVGQk5FSTdRVUZETVVJc1lVRkJTMWdzUzBGQlRDeERRVUZYUnl4SFFVRllMRWxCUVd0Q1VTeExRVUZzUWp0QlFVTkJMR0ZCUVV0RExGVkJRVXdzUjBGQmEwSXNTVUZCYkVJN1FVRkRSRHRCUVVOR0xFdEJURVFzVFVGTFR5eEpRVUZKTEc5Q1FVRlJSQ3hMUVVGU0xFTkJRVW9zUlVGQmIwSTdRVUZEZWtJc1ZVRkJTU3hEUVVGRFJTeFpRVUZNTEVWQlFXMUNPMEZCUTJwQ0xHRkJRVXRpTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hKUVVGclFpeEZRVUZzUWp0QlFVTkVPenRCUVVWRUxGVkJRVTFYTEZsQlFWbElMRTFCUVUxSkxFMUJRWGhDTzBGQlEwRXNWMEZCU3l4SlFVRkpReXhKUVVGSkxFTkJRV0lzUlVGQlowSkJMRWxCUVVsR0xGTkJRWEJDTEVWQlFTdENSU3hIUVVFdlFpeEZRVUZ2UXp0QlFVTnNReXhaUVVGSkxFdEJRVXRvUWl4TFFVRk1MRU5CUVZkSExFZEJRVmdzUlVGQlowSmhMRU5CUVdoQ0xFMUJRWFZDVEN4TlFVRk5TeXhEUVVGT0xFTkJRVE5DTEVWQlFYRkRPMEZCUTI1RExHVkJRVXRvUWl4TFFVRk1MRU5CUVZkSExFZEJRVmdzUlVGQlowSmhMRU5CUVdoQ0xFbEJRWEZDVEN4TlFVRk5TeXhEUVVGT0xFTkJRWEpDTzBGQlEwRXNaVUZCUzBvc1ZVRkJUQ3hIUVVGclFpeEpRVUZzUWp0QlFVTkVPMEZCUTBZN1FVRkRSaXhMUVZwTkxFMUJXVUVzU1VGQlNTeHJRa0ZCVFVRc1MwRkJUaXhEUVVGS0xFVkJRV3RDTzBGQlEzWkNMRlZCUVVrc1EwRkJRMFVzV1VGQlRDeEZRVUZ0UWp0QlFVTnFRaXhoUVVGTFlpeExRVUZNTEVOQlFWZEhMRWRCUVZnc1NVRkJhMElzUlVGQmJFSTdRVUZEUkRzN1FVRkZSQ3hYUVVGTExFbEJRVWxqTEZGQlFWUXNTVUZCY1VKT0xFdEJRWEpDTEVWQlFUUkNPMEZCUXpGQ0xGbEJRVWtzUzBGQlMxZ3NTMEZCVEN4RFFVRlhSeXhIUVVGWUxFVkJRV2RDWXl4UlFVRm9RaXhOUVVFNFFrNHNUVUZCVFUwc1VVRkJUaXhEUVVGc1F5eEZRVUZ0UkR0QlFVTnFSQ3hsUVVGTGFrSXNTMEZCVEN4RFFVRlhSeXhIUVVGWUxFVkJRV2RDWXl4UlFVRm9RaXhKUVVFMFFrNHNUVUZCVFUwc1VVRkJUaXhEUVVFMVFqdEJRVU5CTEdWQlFVdE1MRlZCUVV3c1IwRkJhMElzU1VGQmJFSTdRVUZEUkR0QlFVTkdPMEZCUTBZN08wRkJSVVFzVVVGQlNTeExRVUZMUVN4VlFVRlVMRVZCUVhGQ08wRkJRMjVDTEZkQlFVdFlMR0ZCUVV3c1EwRkJiVUpwUWl4SlFVRnVRaXhEUVVGM1FtWXNSMEZCZUVJN1FVRkRSRHRCUVVOR0xFYzdPMEZCUlVRN096czdPenM3Y1VKQlMwRlFMRTBzY1VKQlFUUkNPMEZCUVVFc1VVRkJja0oxUWl4WFFVRnhRaXg1UkVGQlVDeExRVUZQT3p0QlFVTXhRaXhSUVVGSkxFTkJRVU5CTEdWQlFXVXNTMEZCUzFBc1ZVRkJja0lzUzBGQmIwTXNTMEZCUzFFc1VVRkJOME1zUlVGQmRVUTdRVUZEY2tRc1YwRkJTMEVzVVVGQlREdEJRVU5FT3p0QlFVVkVMRk5CUVV0dVFpeGhRVUZNTEVOQlFXMUNZeXhOUVVGdVFpeEhRVUUwUWl4RFFVRTFRanRCUVVOQkxGTkJRVXRJTEZWQlFVd3NSMEZCYTBJc1MwRkJiRUk3TzBGQlJVRXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdPenM3YTBKQlIxbHNRaXhSSWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2diMjVHY21GdFpWSmxibVJsY2lCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVwYlhCdmNuUWdleUJwYzBGeWNtRjVMQ0JwYzA5aWFpd2dhWE5PZFcwc0lHbHpVM1J5YVc1bklIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyeGhjM01nVW1WdVpHVnlaWElnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lIUm9hWE11Y21WdVpHVnlJRDBnZEdocGN5NXlaVzVrWlhJdVltbHVaQ2gwYUdsektUdGNibHh1SUNBZ0lIUm9hWE11Y0hKdmNITWdQU0I3WEc0Z0lDQWdJQ0F1TGk1MGFHbHpMbU52Ym5OMGNuVmpkRzl5TG1SbFptRjFiSFJRY205d2N5eGNiaUFnSUNBZ0lDNHVMbkJ5YjNCelhHNGdJQ0FnZlR0Y2JseHVJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQjdmVHRjYmlBZ0lDQjBhR2x6TG1Ob1lXNW5aV1JXWVd4MVpYTWdQU0JiWFR0Y2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkhaWFFnWTNWeWNtVnVkQ0J6ZEdGMFpTNWNiaUFnSUNvZ1NXWWdZR3RsZVdBZ2FYTWdibTkwSUdSbFptbHVaV1FzSUhKbGRIVnliaUJsYm5ScGNtVWdZMkZqYUdWa0lITjBZWFJsTGx4dUlDQWdLaUJKWmlCZ2EyVjVZQ0JwY3lCa1pXWnBibVZrTENCeVpYUjFjbTRnWTJGamFHVmtJSFpoYkhWbElHbG1JSEJ5WlhObGJuUXVYRzRnSUNBcUlFbG1JR0JyWlhsZ0lHbHpJR1JsWm1sdVpXUWdZVzVrSUdOaFkyaGxaQ0IyWVd4MVpTQnBjeUJ1YjNRZ2NISmxjMlZ1ZEN3Z2NtVmhaQ0JoYm1RZ2NtVjBkWEp1TGx4dUlDQWdLaUJBY0dGeVlXMGdJSHR6ZEhKcGJtZDlJQ2h2Y0hScGIyNWhiQ2tnYTJWNUlHOW1JSFpoYkhWbFhHNGdJQ0FxSUVCeVpYUjFjbTRnZTNaaGJIVmxmVnh1SUNBZ0tpOWNiaUFnWjJWMEtHdGxlU2tnZTF4dUlDQWdJR2xtSUNoclpYa3BJSHRjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbk4wWVhSbFcydGxlVjBnSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1emRHRjBaVnRyWlhsZE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjbVZoWkNoclpYa3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXpkR0YwWlR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdktpcGNiaUFnSUNvZ1VtVmhaQ0IyWVd4MVpTQmhZMk52Y21ScGJtY2dkRzhnWUc5dVVtVmhaR0JjYmlBZ0lDb2dRSEJoY21GdElDQjdjM1J5YVc1bmZTQk9ZVzFsSUc5bUlIQnliM0JsY25SNUlIUnZJSEpsWVdSY2JpQWdJQ29nUUhKbGRIVnliaUI3VzNSNWNHVmRmVnh1SUNBZ0tpOWNiaUFnY21WaFpDaHJaWGtwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTV2YmxKbFlXUXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG05dVVtVmhaQ2hyWlhrcE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlZjR1JoZEdVZ1lITjBZWFJsWUNCM2FYUm9JRzVsZHlCMllXeDFaWE1nWVc1a0lITmphR1ZrZFd4bElHQnlaVzVrWlhKZ0xseHVJQ0FnS2lCQWNHRnlZVzBnZTI5aWFtVmpkSDBnZG1Gc2RXVnpYRzRnSUNBcUlFQndZWEpoYlNCN2RtRnNkV1Y5SUhaaGJIVmxJSFJ2YzJWMFhHNGdJQ0FxTDF4dUlDQnpaWFFvTGk0dVlYSm5jeWtnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnWVhKbmMxc3hYU0E5UFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQWdJR052Ym5OMElGc2dkbUZzZFdWeklGMGdQU0JoY21kek8xeHVJQ0FnSUNBZ0x5OGdVMlYwSUcxMWJIUnBjR3hsSUhaaGJIVmxjMXh1SUNBZ0lDQWdabTl5SUNoamIyNXpkQ0JyWlhrZ2FXNGdkbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyVjBWbUZzZFdVb2EyVjVMQ0IyWVd4MVpYTmJhMlY1WFNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR052Ym5OMElGc2dhMlY1TENCMllXeDFaU0JkSUQwZ1lYSm5jenRjYmlBZ0lDQWdJSFJvYVhNdWMyVjBWbUZzZFdVb2EyVjVMQ0IyWVd4MVpTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWFHRnpRMmhoYm1kbFpDa2dlMXh1SUNBZ0lDQWdiMjVHY21GdFpWSmxibVJsY2loMGFHbHpMbkpsYm1SbGNpazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0F2THlBK0lGZHBiR1Y1SUMwZ05pQnBiaUIwYUdVZ1RXOXlibWx1WjF4dUlDQXZLaXBjYmlBZ0lDb2dVMlYwSUdFZ2MybHVaMnhsSUhaaGJIVmxYRzRnSUNBcUlFbG1JR0VnYzNSeWFXNW5JRzl5SUc1MWJXSmxjaXdnYzJWMElHUnBjbVZqZEd4NUxseHVJQ0FnS2lCSlppQmhiaUJ2WW1wbFkzUWdiM0lnWVhKeVlYa3NJR055WldGMFpTQnVaWGNnYjJKcVpXTjBJRzl5SUdGeWNtRjVYRzRnSUNBcUlHbG1JR2wwSUdSdlpYTnVKM1FnWVd4eVpXRmtlU0JsZUdsemRDNGdWR2hsYmlCemFHRnNiRzkzSUdOdmJYQmhjbVZjYmlBZ0lDb2dkRzhnYzJWMElHRnVaQ0JqYjIxd1lYSmxJR2x1WkdsMmFXUjFZV3dnZG1Gc2RXVnpMbHh1SUNBZ0tpQlBibVVnYjJZZ2RHaGxJR05zWldGeVpYSWdaSEpoZDJKaFkydHpJR0Z1WkNCaGJtNXZlV0Z1WTJWeklIZHBkR2hjYmlBZ0lDb2dkWE5wYm1jZ2JYVjBZV0pzWlNCcGJuTjBaV0ZrSUc5bUlHbHRiWFYwWVdKc1pTQnpkR0YwWlhNdVhHNGdJQ0FxSUVCd1lYSmhiU0I3VzNSNWNHVmRmU0JyWlhsY2JpQWdJQ29nUUhCaGNtRnRJSHRiZEhsd1pWMTlJSFpoYkhWbFhHNGdJQ0FxTDF4dUlDQnpaWFJXWVd4MVpTaHJaWGtzSUhaaGJIVmxLU0I3WEc0Z0lDQWdZMjl1YzNRZ1kzVnljbVZ1ZEZaaGJIVmxJRDBnZEdocGN5NXpkR0YwWlZ0clpYbGRPMXh1WEc0Z0lDQWdMeThnU1dZZ2JuVnRZbVZ5SUc5eUlITjBjbWx1Wnl3Z2MyVjBJR1JwY21WamRHeDVYRzRnSUNBZ2FXWWdLR2x6VG5WdEtIWmhiSFZsS1NCOGZDQnBjMU4wY21sdVp5aDJZV3gxWlNrcElIdGNiaUFnSUNBZ0lHbG1JQ2hqZFhKeVpXNTBWbUZzZFdVZ0lUMDlJSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1ZiYTJWNVhTQTlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1oaGMwTm9ZVzVuWldRZ1BTQjBjblZsTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBnWld4elpTQnBaaUFvYVhOQmNuSmhlU2gyWVd4MVpTa3BJSHRjYmlBZ0lDQWdJR2xtSUNnaFkzVnljbVZ1ZEZaaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdWYmEyVjVYU0E5SUZ0ZE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQmpiMjV6ZENCdWRXMVdZV3gxWlhNZ1BTQjJZV3gxWlM1c1pXNW5kR2c3WEc0Z0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJWWmhiSFZsY3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5OMFlYUmxXMnRsZVYxYmFWMGdJVDA5SUhaaGJIVmxXMmxkS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRjBaVnRyWlhsZFcybGRJRDBnZG1Gc2RXVmJhVjA3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTVvWVhORGFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBnWld4elpTQnBaaUFvYVhOUFltb29kbUZzZFdVcEtTQjdYRzRnSUNBZ0lDQnBaaUFvSVdOMWNuSmxiblJXWVd4MVpTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsVzJ0bGVWMGdQU0I3ZlR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2RtRnNkV1ZMWlhrZ2FXNGdkbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjM1JoZEdWYmEyVjVYVnQyWVd4MVpVdGxlVjBnSVQwOUlIWmhiSFZsVzNaaGJIVmxTMlY1WFNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1ZiYTJWNVhWdDJZV3gxWlV0bGVWMGdQU0IyWVd4MVpWdDJZV3gxWlV0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtaGhjME5vWVc1blpXUXBJSHRjYmlBZ0lDQWdJSFJvYVhNdVkyaGhibWRsWkZaaGJIVmxjeTV3ZFhOb0tHdGxlU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTHlvcVhHNGdJQ0FxSUVacGNtVnpJR0J2YmxKbGJtUmxjbUFnYVdZZ2RtRnNkV1Z6SUdoaGRtVWdZMmhoYm1kbFpDQnZjaUJnWm05eVkyVlNaVzVrWlhKZ1hHNGdJQ0FxSUdseklITmxkQ0IwYnlCMGNuVmxMbHh1SUNBZ0tpQkFjbVYwZFhKdUlIdDBhR2x6ZlZ4dUlDQWdLaTljYmlBZ2NtVnVaR1Z5S0dadmNtTmxVbVZ1WkdWeUlEMGdabUZzYzJVcElIdGNiaUFnSUNCcFppQW9LR1p2Y21ObFVtVnVaR1Z5SUh4OElIUm9hWE11YUdGelEyaGhibWRsWkNrZ0ppWWdkR2hwY3k1dmJsSmxibVJsY2lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV2YmxKbGJtUmxjaWdwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSFJvYVhNdVkyaGhibWRsWkZaaGJIVmxjeTVzWlc1bmRHZ2dQU0F3TzF4dUlDQWdJSFJvYVhNdWFHRnpRMmhoYm1kbFpDQTlJR1poYkhObE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVbVZ1WkdWeVpYSTdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ1NTUmVuZGVyZXIoX2V4dGVuZHMoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb246IHRydWVcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfcmVuZGVyID0gcmVxdWlyZSgnLi9yZW5kZXInKTtcblxudmFyIF9yZW5kZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVuZGVyKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVzKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENTU1JlbmRlcmVyID0gZnVuY3Rpb24gKF9SZW5kZXJlcikge1xuICBfaW5oZXJpdHMoQ1NTUmVuZGVyZXIsIF9SZW5kZXJlcik7XG5cbiAgZnVuY3Rpb24gQ1NTUmVuZGVyZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENTU1JlbmRlcmVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVuZGVyZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDU1NSZW5kZXJlci5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZWxlbWVudCA9IF9wcm9wcy5lbGVtZW50O1xuICAgIHZhciBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiA9IF9wcm9wcy5lbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbjtcblxuICAgICgwLCBfcmVuZGVyMi5kZWZhdWx0KShlbGVtZW50LCB0aGlzLnN0YXRlLCB0aGlzLmNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKTtcbiAgfTtcblxuICBDU1NSZW5kZXJlci5wcm90b3R5cGUub25SZWFkID0gZnVuY3Rpb24gb25SZWFkKGtleSkge1xuICAgIHZhciB2YWx1ZVR5cGUgPSBfdmFsdWVUeXBlczIuZGVmYXVsdFtrZXldO1xuXG4gICAgaWYgKCFfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICAgIHZhciBkb21WYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpWygwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKGtleSldIHx8IDA7XG4gICAgICByZXR1cm4gdmFsdWVUeXBlICYmIHZhbHVlVHlwZS5wYXJzZSA/IHZhbHVlVHlwZS5wYXJzZShkb21WYWx1ZSkgOiBkb21WYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbHVlVHlwZSkge1xuICAgICAgICByZXR1cm4gdmFsdWVUeXBlLmRlZmF1bHQgfHwgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ1NTUmVuZGVyZXI7XG59KF8yLmRlZmF1bHQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJbVZzWlcxbGJuUWlMQ0p3Y205d2N5SXNJa05UVTFKbGJtUmxjbVZ5SWl3aVpXNWhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0aUxDSnZibEpsYm1SbGNpSXNJbk4wWVhSbElpd2lZMmhoYm1kbFpGWmhiSFZsY3lJc0ltOXVVbVZoWkNJc0ltdGxlU0lzSW5aaGJIVmxWSGx3WlNJc0ltUnZiVlpoYkhWbElpd2lkMmx1Wkc5M0lpd2laMlYwUTI5dGNIVjBaV1JUZEhsc1pTSXNJbkJoY25ObElpd2laR1ZtWVhWc2RDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMnRDUVRaQ1pTeFZRVUZWUVN4UFFVRldMRVZCUVcxQ1F5eExRVUZ1UWl4RlFVRXdRanRCUVVOMlF5eFRRVUZQTEVsQlFVbERMRmRCUVVvN1FVRkRURVlzYjBKQlJFczdRVUZGVEVjc1owTkJRVFJDTzBGQlJuWkNMRXRCUjBaR0xFdEJTRVVzUlVGQlVEdEJRVXRFTEVNN08wRkJia05FT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3pzN096czdPenRKUVVWTlF5eFhPenM3T3pzN096czdkMEpCUTBwRkxGRXNkVUpCUVZjN1FVRkJRU3hwUWtGRGRVTXNTMEZCUzBnc1MwRkVOVU03UVVGQlFTeFJRVU5FUkN4UFFVUkRMRlZCUTBSQkxFOUJSRU03UVVGQlFTeFJRVU5SUnl3d1FrRkVVaXhWUVVOUlFTd3dRa0ZFVWpzN1FVRkZWQ3d3UWtGQlZVZ3NUMEZCVml4RlFVRnRRaXhMUVVGTFN5eExRVUY0UWl4RlFVRXJRaXhMUVVGTFF5eGhRVUZ3UXl4RlFVRnRSRWdzTUVKQlFXNUVPMEZCUTBRc1J6czdkMEpCUlVSSkxFMHNiVUpCUVU5RExFY3NSVUZCU3p0QlFVTldMRkZCUVUxRExGbEJRVmtzY1VKQlFXTkVMRWRCUVdRc1EwRkJiRUk3TzBGQlJVRXNVVUZCU1N4RFFVRkRMSGxDUVVGbFFTeEhRVUZtTEVOQlFVd3NSVUZCTUVJN1FVRkJRU3hWUVVOb1FsSXNUMEZFWjBJc1IwRkRTaXhMUVVGTFF5eExRVVJFTEVOQlEyaENSQ3hQUVVSblFqczdRVUZGZUVJc1ZVRkJUVlVzVjBGQlYwTXNUMEZCVDBNc1owSkJRVkFzUTBGQmQwSmFMRTlCUVhoQ0xFVkJRV2xETEVsQlFXcERMRVZCUVhWRExIZENRVUZUVVN4SFFVRlVMRU5CUVhaRExFdEJRWGxFTEVOQlFURkZPMEZCUTBFc1lVRkJVVU1zWVVGQllVRXNWVUZCVlVrc1MwRkJlRUlzUjBGQmFVTktMRlZCUVZWSkxFdEJRVllzUTBGQlowSklMRkZCUVdoQ0xFTkJRV3BETEVkQlFUWkVRU3hSUVVGd1JUdEJRVU5FTEV0QlNrUXNUVUZKVHp0QlFVTk1MRlZCUVVsRUxGTkJRVW9zUlVGQlpUdEJRVU5pTEdWQlFVOUJMRlZCUVZWTExFOUJRVllzU1VGQmNVSXNRMEZCTlVJN1FVRkRSQ3hQUVVaRUxFMUJSVTg3UVVGRFRDeGxRVUZQTEVOQlFWQTdRVUZEUkR0QlFVTkdPMEZCUTBZc1J5SXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JTWlc1a1pYSmxjaUJtY205dElDY3VMaThuTzF4dWFXMXdiM0owSUhKbGJtUmxja05UVXlCbWNtOXRJQ2N1TDNKbGJtUmxjaWM3WEc1cGJYQnZjblFnZEhKaGJuTm1iM0p0VUhKdmNITWdabkp2YlNBbkxpOTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVhVzF3YjNKMElIWmhiSFZsVkhsd1pYTk5ZWEFnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3ljN1hHNXBiWEJ2Y25RZ2NISmxabWw0WlhJZ1puSnZiU0FuTGk5d2NtVm1hWGhsY2ljN1hHNWNibU5zWVhOeklFTlRVMUpsYm1SbGNtVnlJR1Y0ZEdWdVpITWdVbVZ1WkdWeVpYSWdlMXh1SUNCdmJsSmxibVJsY2lncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdWc1pXMWxiblFzSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lISmxibVJsY2tOVFV5aGxiR1Z0Wlc1MExDQjBhR2x6TG5OMFlYUmxMQ0IwYUdsekxtTm9ZVzVuWldSV1lXeDFaWE1zSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1R0Y2JpQWdmVnh1WEc0Z0lHOXVVbVZoWkNoclpYa3BJSHRjYmlBZ0lDQmpiMjV6ZENCMllXeDFaVlI1Y0dVZ1BTQjJZV3gxWlZSNWNHVnpUV0Z3VzJ0bGVWMDdYRzVjYmlBZ0lDQnBaaUFvSVhSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElIdGNiaUFnSUNBZ0lHTnZibk4wSUhzZ1pXeGxiV1Z1ZENCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQWdJR052Ym5OMElHUnZiVlpoYkhWbElEMGdkMmx1Wkc5M0xtZGxkRU52YlhCMWRHVmtVM1I1YkdVb1pXeGxiV1Z1ZEN3Z2JuVnNiQ2xiY0hKbFptbDRaWElvYTJWNUtWMGdmSHdnTUR0Y2JpQWdJQ0FnSUhKbGRIVnliaUFvZG1Gc2RXVlVlWEJsSUNZbUlIWmhiSFZsVkhsd1pTNXdZWEp6WlNrZ1B5QjJZV3gxWlZSNWNHVXVjR0Z5YzJVb1pHOXRWbUZzZFdVcElEb2daRzl0Vm1Gc2RXVTdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdsbUlDaDJZV3gxWlZSNWNHVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFpoYkhWbFZIbHdaUzVrWldaaGRXeDBJSHg4SURBN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTUR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnS0dWc1pXMWxiblFzSUhCeWIzQnpLU0I3WEc0Z0lISmxkSFZ5YmlCdVpYY2dRMU5UVW1WdVpHVnlaWElvZTF4dUlDQWdJR1ZzWlcxbGJuUXNYRzRnSUNBZ1pXNWhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0NklIUnlkV1VzWEc0Z0lDQWdMaTR1Y0hKdmNITmNiaUFnZlNrN1hHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1JlbmRlcmVyKF9leHRlbmRzKHtcbiAgICBlbGVtZW50OiBlbGVtZW50XG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZXMpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFNWR1JlbmRlcmVyID0gZnVuY3Rpb24gKF9SZW5kZXJlcikge1xuICBfaW5oZXJpdHMoU1ZHUmVuZGVyZXIsIF9SZW5kZXJlcik7XG5cbiAgZnVuY3Rpb24gU1ZHUmVuZGVyZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU1ZHUmVuZGVyZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIHZhciBfcHJvcHMkZWxlbWVudCRnZXRCQm8gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKTtcblxuICAgIHZhciB4ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLng7XG4gICAgdmFyIHkgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueTtcbiAgICB2YXIgd2lkdGggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ud2lkdGg7XG4gICAgdmFyIGhlaWdodCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby5oZWlnaHQ7XG5cbiAgICBfdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHsgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFNWR1JlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgdmFyIGF0dHJzID0gKDAsIF9idWlsZDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgdGhpcy5lbGVtZW50RGltZW5zaW9ucyk7XG4gICAgKDAsIF91dGlscy5zZXRET01BdHRycykoZWxlbWVudCwgYXR0cnMpO1xuICB9O1xuXG4gIFNWR1JlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cblxuICAgIGlmICghX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmFsdWVUeXBlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRba2V5XTtcbiAgICAgIHJldHVybiB2YWx1ZVR5cGUgPyB2YWx1ZVR5cGUuZGVmYXVsdCA6IDA7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTVkdSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYkltVnNaVzFsYm5RaUxDSndjbTl3Y3lJc0lsTldSMUpsYm1SbGNtVnlJaXdpWjJWMFFrSnZlQ0lzSW5naUxDSjVJaXdpZDJsa2RHZ2lMQ0pvWldsbmFIUWlMQ0psYkdWdFpXNTBSR2x0Wlc1emFXOXVjeUlzSW05dVVtVnVaR1Z5SWl3aVlYUjBjbk1pTENKemRHRjBaU0lzSW05dVVtVmhaQ0lzSW10bGVTSXNJbWRsZEVGMGRISnBZblYwWlNJc0luWmhiSFZsVkhsd1pTSXNJbVJsWm1GMWJIUWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRyUWtGblEyVXNWVUZCVlVFc1QwRkJWaXhGUVVGdFFrTXNTMEZCYmtJc1JVRkJNRUk3UVVGRGRrTXNVMEZCVHl4SlFVRkpReXhYUVVGS08wRkJRMHhHTzBGQlJFc3NTMEZGUmtNc1MwRkdSU3hGUVVGUU8wRkJTVVFzUXpzN1FVRnlRMFE3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenM3T3pzN096dEpRVVZOUXl4WE96czdRVUZEU2l4MVFrRkJXVVFzUzBGQldpeEZRVUZ0UWp0QlFVRkJPenRCUVVGQkxHbEVRVU5xUWl4eFFrRkJUVUVzUzBGQlRpeERRVVJwUWpzN1FVRkJRU3huUTBGSFpVRXNUVUZCVFVRc1QwRkJUaXhEUVVGalJ5eFBRVUZrTEVWQlNHWTdPMEZCUVVFc1VVRkhWRU1zUTBGSVV5eDVRa0ZIVkVFc1EwRklVenRCUVVGQkxGRkJSMDVETEVOQlNFMHNlVUpCUjA1QkxFTkJTRTA3UVVGQlFTeFJRVWRJUXl4TFFVaEhMSGxDUVVkSVFTeExRVWhITzBGQlFVRXNVVUZIU1VNc1RVRklTaXg1UWtGSFNVRXNUVUZJU2pzN1FVRkpha0lzVlVGQlMwTXNhVUpCUVV3c1IwRkJlVUlzUlVGQlJVb3NTVUZCUml4RlFVRkxReXhKUVVGTUxFVkJRVkZETEZsQlFWSXNSVUZCWlVNc1kwRkJaaXhGUVVGNlFqdEJRVXBwUWp0QlFVdHNRanM3ZDBKQlJVUkZMRkVzZFVKQlFWYzdRVUZCUVN4UlFVTkVWQ3hQUVVSRExFZEJRMWNzUzBGQlMwTXNTMEZFYUVJc1EwRkRSRVFzVDBGRVF6czdRVUZGVkN4UlFVRk5WU3hSUVVGUkxIRkNRVUZOTEV0QlFVdERMRXRCUVZnc1JVRkJhMElzUzBGQlMwZ3NhVUpCUVhaQ0xFTkJRV1E3UVVGRFFTdzBRa0ZCV1ZJc1QwRkJXaXhGUVVGeFFsVXNTMEZCY2tJN1FVRkRSQ3hIT3p0M1FrRkZSRVVzVFN4dFFrRkJUME1zUnl4RlFVRkxPMEZCUVVFc1VVRkRSbUlzVDBGRVJTeEhRVU5WTEV0QlFVdERMRXRCUkdZc1EwRkRSa1FzVDBGRVJUczdPMEZCUjFZc1VVRkJTU3hEUVVGRExIbENRVUZsWVN4SFFVRm1MRU5CUVV3c1JVRkJNRUk3UVVGRGVFSXNZVUZCVDJJc1VVRkJVV01zV1VGQlVpeERRVUZ4UWtRc1IwRkJja0lzUTBGQlVEdEJRVU5FTEV0QlJrUXNUVUZGVHp0QlFVTk1MRlZCUVUxRkxGbEJRVmtzY1VKQlFXRkdMRWRCUVdJc1EwRkJiRUk3UVVGRFFTeGhRVUZSUlN4VFFVRkVMRWRCUVdOQkxGVkJRVlZETEU5QlFYaENMRWRCUVd0RExFTkJRWHBETzBGQlEwUTdRVUZEUml4SElpd2labWxzWlNJNkltbHVaR1Y0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRkpsYm1SbGNtVnlJR1p5YjIwZ0p5NHVMeWM3WEc1cGJYQnZjblFnWW5WcGJHUWdabkp2YlNBbkxpOWlkV2xzWkNjN1hHNXBiWEJ2Y25RZ2RISmhibk5tYjNKdFVISnZjSE1nWm5KdmJTQW5MaTR2WTNOekwzUnlZVzV6Wm05eWJTMXdjbTl3Y3ljN1hHNXBiWEJ2Y25RZ2RtRnNkV1ZVZVhCbFRXRndJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE1uTzF4dWFXMXdiM0owSUhzZ2MyVjBSRTlOUVhSMGNuTWdmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVqYkdGemN5QlRWa2RTWlc1a1pYSmxjaUJsZUhSbGJtUnpJRkpsYm1SbGNtVnlJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNCemRYQmxjaWh3Y205d2N5azdYRzVjYmlBZ0lDQmpiMjV6ZENCN0lIZ3NJSGtzSUhkcFpIUm9MQ0JvWldsbmFIUWdmU0E5SUhCeWIzQnpMbVZzWlcxbGJuUXVaMlYwUWtKdmVDZ3BPMXh1SUNBZ0lIUm9hWE11Wld4bGJXVnVkRVJwYldWdWMybHZibk1nUFNCN0lIZ3NJSGtzSUhkcFpIUm9MQ0JvWldsbmFIUWdmVHRjYmlBZ2ZWeHVYRzRnSUc5dVVtVnVaR1Z5S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWld4bGJXVnVkQ0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCamIyNXpkQ0JoZEhSeWN5QTlJR0oxYVd4a0tIUm9hWE11YzNSaGRHVXNJSFJvYVhNdVpXeGxiV1Z1ZEVScGJXVnVjMmx2Ym5NcE8xeHVJQ0FnSUhObGRFUlBUVUYwZEhKektHVnNaVzFsYm5Rc0lHRjBkSEp6S1R0Y2JpQWdmVnh1WEc0Z0lHOXVVbVZoWkNoclpYa3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHVnNaVzFsYm5RZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc1Y2JpQWdJQ0JwWmlBb0lYUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQmxiR1Z0Wlc1MExtZGxkRUYwZEhKcFluVjBaU2hyWlhrcE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQjJZV3gxWlZSNWNHVWdQU0IyWVd4MVpWUjVjR1ZOWVhCYmEyVjVYVHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW9kbUZzZFdWVWVYQmxLU0EvSUhaaGJIVmxWSGx3WlM1a1pXWmhkV3gwSURvZ01EdGNiaUFnSUNCOVhHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z0tHVnNaVzFsYm5Rc0lIQnliM0J6S1NCN1hHNGdJSEpsZEhWeWJpQnVaWGNnVTFaSFVtVnVaR1Z5WlhJb2UxeHVJQ0FnSUdWc1pXMWxiblFzWEc0Z0lDQWdMaTR1Y0hKdmNITmNiaUFnZlNrN1hHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1BhdGhSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudFxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU1ZHUGF0aFJlbmRlcmVyID0gZnVuY3Rpb24gKF9SZW5kZXJlcikge1xuICBfaW5oZXJpdHMoU1ZHUGF0aFJlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIFNWR1BhdGhSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTVkdQYXRoUmVuZGVyZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIHZhciBfcHJvcHMkZWxlbWVudCRnZXRCQm8gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKTtcblxuICAgIHZhciB4ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLng7XG4gICAgdmFyIHkgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueTtcbiAgICB2YXIgd2lkdGggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ud2lkdGg7XG4gICAgdmFyIGhlaWdodCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby5oZWlnaHQ7XG5cbiAgICBfdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5LFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBwYXRoTGVuZ3RoOiBwcm9wcy5lbGVtZW50LmdldFRvdGFsTGVuZ3RoKClcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFNWR1BhdGhSZW5kZXJlci5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICB2YXIgcGF0aExlbmd0aCA9IHRoaXMuZWxlbWVudERpbWVuc2lvbnMucGF0aExlbmd0aDtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgICgwLCBfdXRpbHMuc2V0RE9NQXR0cnMpKGVsZW1lbnQsICgwLCBfYnVpbGQyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIHBhdGhMZW5ndGgpKTtcbiAgfTtcblxuICBTVkdQYXRoUmVuZGVyZXIucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5lbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICB9O1xuXG4gIHJldHVybiBTVkdQYXRoUmVuZGVyZXI7XG59KF8yLmRlZmF1bHQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkxYQmhkR2d2YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2xzaVpXeGxiV1Z1ZENJc0luQnliM0J6SWl3aVUxWkhVR0YwYUZKbGJtUmxjbVZ5SWl3aVoyVjBRa0p2ZUNJc0luZ2lMQ0o1SWl3aWQybGtkR2dpTENKb1pXbG5hSFFpTENKbGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lJc0luQmhkR2hNWlc1bmRHZ2lMQ0puWlhSVWIzUmhiRXhsYm1kMGFDSXNJbTl1VW1WdVpHVnlJaXdpYzNSaGRHVWlMQ0p2YmxKbFlXUWlMQ0pyWlhraUxDSm5aWFJCZEhSeWFXSjFkR1VpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0clFrRTJRbVVzVlVGQlZVRXNUMEZCVml4RlFVRnRRa01zUzBGQmJrSXNSVUZCTUVJN1FVRkRka01zVTBGQlR5eEpRVUZKUXl4bFFVRktPMEZCUTB4R08wRkJSRXNzUzBGRlJrTXNTMEZHUlN4RlFVRlFPMEZCU1VRc1F6czdRVUZzUTBRN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdPenM3TzBsQlJVMURMR1U3T3p0QlFVTktMREpDUVVGWlJDeExRVUZhTEVWQlFXMUNPMEZCUVVFN08wRkJRVUVzYVVSQlEycENMSEZDUVVGTlFTeExRVUZPTEVOQlJHbENPenRCUVVGQkxHZERRVWRsUVN4TlFVRk5SQ3hQUVVGT0xFTkJRV05ITEU5QlFXUXNSVUZJWmpzN1FVRkJRU3hSUVVkVVF5eERRVWhUTEhsQ1FVZFVRU3hEUVVoVE8wRkJRVUVzVVVGSFRrTXNRMEZJVFN4NVFrRkhUa0VzUTBGSVRUdEJRVUZCTEZGQlIwaERMRXRCU0Vjc2VVSkJSMGhCTEV0QlNFYzdRVUZCUVN4UlFVZEpReXhOUVVoS0xIbENRVWRKUVN4TlFVaEtPenRCUVVscVFpeFZRVUZMUXl4cFFrRkJUQ3hIUVVGNVFqdEJRVU4yUWtvc1ZVRkVkVUk3UVVGRmRrSkRMRlZCUm5WQ08wRkJSM1pDUXl4clFrRklkVUk3UVVGSmRrSkRMRzlDUVVwMVFqdEJRVXQyUWtVc2EwSkJRVmxTTEUxQlFVMUVMRTlCUVU0c1EwRkJZMVVzWTBGQlpEdEJRVXhYTEV0QlFYcENPMEZCU21sQ08wRkJWMnhDT3pzMFFrRkZSRU1zVVN4MVFrRkJWenRCUVVGQkxGRkJRMFJHTEZWQlJFTXNSMEZEWXl4TFFVRkxSQ3hwUWtGRWJrSXNRMEZEUkVNc1ZVRkVRenRCUVVGQkxGRkJSVVJVTEU5QlJrTXNSMEZGVnl4TFFVRkxReXhMUVVab1FpeERRVVZFUkN4UFFVWkRPenRCUVVkVUxEUkNRVUZaUVN4UFFVRmFMRVZCUVhGQ0xIRkNRVUZOTEV0QlFVdFpMRXRCUVZnc1JVRkJhMEpJTEZWQlFXeENMRU5CUVhKQ08wRkJRMFFzUnpzN05FSkJSVVJKTEUwc2JVSkJRVTlETEVjc1JVRkJTenRCUVVOV0xGZEJRVThzUzBGQlMySXNTMEZCVEN4RFFVRlhSQ3hQUVVGWUxFTkJRVzFDWlN4WlFVRnVRaXhEUVVGblEwUXNSMEZCYUVNc1EwRkJVRHRCUVVORUxFY2lMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVW1WdVpHVnlaWElnWm5KdmJTQW5MaTR2Snp0Y2JtbHRjRzl5ZENCaWRXbHNaQ0JtY205dElDY3VMMkoxYVd4a0p6dGNibWx0Y0c5eWRDQjdJSE5sZEVSUFRVRjBkSEp6SUgwZ1puSnZiU0FuTGk0dkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyeGhjM01nVTFaSFVHRjBhRkpsYm1SbGNtVnlJR1Y0ZEdWdVpITWdVbVZ1WkdWeVpYSWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhOMWNHVnlLSEJ5YjNCektUdGNibHh1SUNBZ0lHTnZibk4wSUhzZ2VDd2dlU3dnZDJsa2RHZ3NJR2hsYVdkb2RDQjlJRDBnY0hKdmNITXVaV3hsYldWdWRDNW5aWFJDUW05NEtDazdYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBSR2x0Wlc1emFXOXVjeUE5SUh0Y2JpQWdJQ0FnSUhnc1hHNGdJQ0FnSUNCNUxGeHVJQ0FnSUNBZ2QybGtkR2dzWEc0Z0lDQWdJQ0JvWldsbmFIUXNYRzRnSUNBZ0lDQndZWFJvVEdWdVozUm9PaUJ3Y205d2N5NWxiR1Z0Wlc1MExtZGxkRlJ2ZEdGc1RHVnVaM1JvS0NsY2JpQWdJQ0I5TzF4dUlDQjlYRzVjYmlBZ2IyNVNaVzVrWlhJb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCd1lYUm9UR1Z1WjNSb0lIMGdQU0IwYUdsekxtVnNaVzFsYm5SRWFXMWxibk5wYjI1ek8xeHVJQ0FnSUdOdmJuTjBJSHNnWld4bGJXVnVkQ0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCelpYUkVUMDFCZEhSeWN5aGxiR1Z0Wlc1MExDQmlkV2xzWkNoMGFHbHpMbk4wWVhSbExDQndZWFJvVEdWdVozUm9LU2s3WEc0Z0lIMWNibHh1SUNCdmJsSmxZV1FvYTJWNUtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjSEp2Y0hNdVpXeGxiV1Z1ZEM1blpYUkJkSFJ5YVdKMWRHVW9hMlY1S1R0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlBb1pXeGxiV1Z1ZEN3Z2NISnZjSE1wSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJUVmtkUVlYUm9VbVZ1WkdWeVpYSW9lMXh1SUNBZ0lHVnNaVzFsYm5Rc1hHNGdJQ0FnTGk0dWNISnZjSE5jYmlBZ2ZTazdYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNwbGl0Q29sb3JWYWx1ZXMgPSBzcGxpdENvbG9yVmFsdWVzO1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xufTtcblxudmFyIENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xudmFyIFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xudmFyIEhBU19QRVJGT1JNQU5DRV9OT1cgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdztcblxuLypcbiAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY2FtZWxUb0Rhc2ggPSBleHBvcnRzLmNhbWVsVG9EYXNoID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuLypcbiAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgXG4gIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG52YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLmN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xufSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxudmFyIHNldERPTUF0dHJzID0gZXhwb3J0cy5zZXRET01BdHRycyA9IGZ1bmN0aW9uIChlbGVtZW50LCBhdHRycykge1xuICBmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG4gIH1cbn07XG4vKlxuICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgXCJmb28sYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdENvbW1hRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG59O1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIGFueSBhcmd1bWVudCBmb3IgYHRlcm1gXG4gKiBgY29udGFpbnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG52YXIgY29udGFpbnMgPSBleHBvcnRzLmNvbnRhaW5zID0gZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSAhPT0gLTE7XG4gIH07XG59O1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIHRvIHNlZSBpZiBhbiBhcmd1bWVudCBpc1xuICogIHRoZSBmaXJzdCBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBgdGVybWBcbiAqIGBpc0ZpcnN0Q2hhcnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG52YXIgaXNGaXJzdENoYXJzID0gZXhwb3J0cy5pc0ZpcnN0Q2hhcnMgPSBmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pID09PSAwO1xuICB9O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSB1bml0IHZhbHVlIHR5cGVcbiAqL1xudmFyIGNyZWF0ZVVuaXRUeXBlID0gZXhwb3J0cy5jcmVhdGVVbml0VHlwZSA9IGZ1bmN0aW9uICh0eXBlLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIHtcbiAgICB0ZXN0OiBjb250YWlucyh0eXBlKSxcbiAgICBwYXJzZTogcGFyc2VGbG9hdCxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICB9O1xufTtcblxuLypcbiAgR2V0IHZhbHVlIGZyb20gZnVuY3Rpb24gc3RyaW5nXG4gIFwidHJhbnNsYXRlWCgyMHB4KVwiIC0+IFwiMjBweFwiXG4qL1xudmFyIGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHNwbGl0IGNvbG9yXG4gKiB2YWx1ZXMgZnJvbSBzdHJpbmcgaW50byBhbiBvYmplY3Qgb2YgcHJvcGVydGllc1xuICogYG1hcEFycmF5VG9PYmplY3QoWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddKSgncmdiYSgwLDAsMCknKWBcbiAqL1xuZnVuY3Rpb24gc3BsaXRDb2xvclZhbHVlcyh0ZXJtcykge1xuICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHZhbHVlcyA9IHt9O1xuICAgIHZhciB2YWx1ZXNBcnJheSA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodikpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICB2YWx1ZXNbdGVybXNbaV1dID0gdmFsdWVzQXJyYXlbaV0gIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQodmFsdWVzQXJyYXlbaV0pIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xufVxuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbnZhciBpc051bSA9IGV4cG9ydHMuaXNOdW0gPSBmdW5jdGlvbiAobnVtKSB7XG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xudmFyIGlzT2JqID0gZXhwb3J0cy5pc09iaiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbnZhciBpc1N0cmluZyA9IGV4cG9ydHMuaXNTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbnZhciBpc0hleCA9IGV4cG9ydHMuaXNIZXggPSBpc0ZpcnN0Q2hhcnMoJyMnKTtcbnZhciBpc1JnYiA9IGV4cG9ydHMuaXNSZ2IgPSBpc0ZpcnN0Q2hhcnMoJ3JnYicpO1xudmFyIGlzSHNsID0gZXhwb3J0cy5pc0hzbCA9IGlzRmlyc3RDaGFycygnaHNsJyk7XG52YXIgaXNDb2xvciA9IGV4cG9ydHMuaXNDb2xvciA9IGZ1bmN0aW9uICh2KSB7XG4gIHJldHVybiBpc0hleCh2KSB8fCBpc1JnYih2KSB8fCBpc0hzbCh2KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZFhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2xzaWMzQnNhWFJEYjJ4dmNsWmhiSFZsY3lJc0luWmhjbFI1Y0dVaUxDSjJZWEpwWVdKc1pTSXNJazlpYW1WamRDSXNJbkJ5YjNSdmRIbHdaU0lzSW5SdlUzUnlhVzVuSWl3aVkyRnNiQ0lzSW5Oc2FXTmxJaXdpUTBGTlJVeGZRMEZUUlY5UVFWUlVSVkpPSWl3aVVrVlFURUZEUlY5VVJVMVFURUZVUlNJc0lraEJVMTlRUlZKR1QxSk5RVTVEUlY5T1QxY2lMQ0p3WlhKbWIzSnRZVzVqWlNJc0ltNXZkeUlzSW1OaGJXVnNWRzlFWVhOb0lpd2ljM1J5YVc1bklpd2ljbVZ3YkdGalpTSXNJblJ2VEc5M1pYSkRZWE5sSWl3aVkzVnljbVZ1ZEZScGJXVWlMQ0pFWVhSbElpd2laMlYwVkdsdFpTSXNJbk5sZEVSUFRVRjBkSEp6SWl3aVpXeGxiV1Z1ZENJc0ltRjBkSEp6SWl3aWEyVjVJaXdpYUdGelQzZHVVSEp2Y0dWeWRIa2lMQ0p6WlhSQmRIUnlhV0oxZEdVaUxDSnpjR3hwZEVOdmJXMWhSR1ZzYVcxcGRHVmtJaXdpZG1Gc2RXVWlMQ0pwYzFOMGNtbHVaeUlzSW5Od2JHbDBJaXdpWTI5dWRHRnBibk1pTENKMFpYSnRJaXdpZGlJc0ltbHVaR1Y0VDJZaUxDSnBjMFpwY25OMFEyaGhjbk1pTENKamNtVmhkR1ZWYm1sMFZIbHdaU0lzSW5SNWNHVWlMQ0owY21GdWMyWnZjbTBpTENKMFpYTjBJaXdpY0dGeWMyVWlMQ0p3WVhKelpVWnNiMkYwSWl3aVoyVjBWbUZzZFdWR2NtOXRSblZ1WTNScGIyNVRkSEpwYm1jaUxDSnpkV0p6ZEhKcGJtY2lMQ0pzWVhOMFNXNWtaWGhQWmlJc0luUmxjbTF6SWl3aWJuVnRWR1Z5YlhNaUxDSnNaVzVuZEdnaUxDSjJZV3gxWlhNaUxDSjJZV3gxWlhOQmNuSmhlU0lzSW1raUxDSjFibVJsWm1sdVpXUWlMQ0pwYzBGeWNtRjVJaXdpWVhKeUlpd2lhWE5HZFc1aklpd2liMkpxSWl3aWFYTk9kVzBpTENKdWRXMGlMQ0pwYzA5aWFpSXNJbk4wY2lJc0ltbHpTR1Y0SWl3aWFYTlNaMklpTENKcGMwaHpiQ0lzSW1selEyOXNiM0lpWFN3aWJXRndjR2x1WjNNaU9pSTdPenRSUVRaRlowSkJMR2RDTEVkQlFVRkJMR2RDTzBGQk4wVm9RaXhKUVVGTlF5eFZRVUZWTEZWQlFVTkRMRkZCUVVRN1FVRkJRU3hUUVVGalF5eFBRVUZQUXl4VFFVRlFMRU5CUVdsQ1F5eFJRVUZxUWl4RFFVRXdRa01zU1VGQk1VSXNRMEZCSzBKS0xGRkJRUzlDTEVWQlFYbERTeXhMUVVGNlF5eERRVUVyUXl4RFFVRXZReXhGUVVGclJDeERRVUZETEVOQlFXNUVMRU5CUVdRN1FVRkJRU3hEUVVGb1FqczdRVUZGUVN4SlFVRk5ReXh4UWtGQmNVSXNhVUpCUVROQ08wRkJRMEVzU1VGQlRVTXNiVUpCUVcxQ0xFOUJRWHBDTzBGQlEwRXNTVUZCVFVNc2MwSkJRWFZDTEU5QlFVOURMRmRCUVZBc1MwRkJkVUlzVjBGQmRrSXNTVUZCYzBOQkxGbEJRVmxETEVkQlFTOUZPenRCUVVWQk96czdPenM3UVVGTlR5eEpRVUZOUXl4dlEwRkJZeXhWUVVGRFF5eE5RVUZFTzBGQlFVRXNVMEZCV1VFc1QwRkJUME1zVDBGQlVDeERRVUZsVUN4clFrRkJaaXhGUVVGdFEwTXNaMEpCUVc1RExFVkJRWEZFVHl4WFFVRnlSQ3hGUVVGYU8wRkJRVUVzUTBGQmNFSTdPMEZCUlZBN096czdPMEZCUzA4c1NVRkJUVU1zYjBOQlFXTlFMSE5DUVVGelFqdEJRVUZCTEZOQlFVMURMRmxCUVZsRExFZEJRVm9zUlVGQlRqdEJRVUZCTEVOQlFYUkNMRWRCUVdkRU8wRkJRVUVzVTBGQlRTeEpRVUZKVFN4SlFVRktMRWRCUVZkRExFOUJRVmdzUlVGQlRqdEJRVUZCTEVOQlFYQkZPenRCUVVWQkxFbEJRVTFETEc5RFFVRmpMRlZCUVVORExFOUJRVVFzUlVGQlZVTXNTMEZCVml4RlFVRnZRanRCUVVNM1F5eFBRVUZMTEVsQlFVbERMRWRCUVZRc1NVRkJaMEpFTEV0QlFXaENMRVZCUVhWQ08wRkJRM0pDTEZGQlFVbEJMRTFCUVUxRkxHTkJRVTRzUTBGQmNVSkVMRWRCUVhKQ0xFTkJRVW9zUlVGQkswSTdRVUZETjBKR0xHTkJRVkZKTEZsQlFWSXNRMEZCY1VKR0xFZEJRWEpDTEVWQlFUQkNSQ3hOUVVGTlF5eEhRVUZPTEVOQlFURkNPMEZCUTBRN1FVRkRSanRCUVVOR0xFTkJUazA3UVVGUFVEczdPenM3T3pzN1FVRlJUeXhKUVVGTlJ5eHZSRUZCYzBJc1ZVRkJRME1zUzBGQlJEdEJRVUZCTEZOQlFWZERMRk5CUVZORUxFdEJRVlFzU1VGQmEwSkJMRTFCUVUxRkxFdEJRVTRzUTBGQldTeE5RVUZhTEVOQlFXeENMRWRCUVhkRExFTkJRVU5HTEV0QlFVUXNRMEZCYmtRN1FVRkJRU3hEUVVFMVFqczdRVUZGVURzN096dEJRVWxQTEVsQlFVMUhMRGhDUVVGWExGVkJRVU5ETEVsQlFVUTdRVUZCUVN4VFFVRlZMRlZCUVVORExFTkJRVVFzUlVGQlR6dEJRVU4yUXl4WFFVRlJTaXhUUVVGVFJ5eEpRVUZVTEV0QlFXdENReXhGUVVGRlF5eFBRVUZHTEVOQlFWVkdMRWxCUVZZc1RVRkJiMElzUTBGQlF5eERRVUV2UXp0QlFVTkVMRWRCUm5WQ08wRkJRVUVzUTBGQmFrSTdPMEZCU1ZBN096czdPMEZCUzA4c1NVRkJUVWNzYzBOQlFXVXNWVUZCUTBnc1NVRkJSRHRCUVVGQkxGTkJRVlVzVlVGQlEwTXNRMEZCUkN4RlFVRlBPMEZCUXpORExGZEJRVkZLTEZOQlFWTkhMRWxCUVZRc1MwRkJhMEpETEVWQlFVVkRMRTlCUVVZc1EwRkJWVVlzU1VGQlZpeE5RVUZ2UWl4RFFVRTVRenRCUVVORUxFZEJSakpDTzBGQlFVRXNRMEZCY2tJN08wRkJTVkE3T3p0QlFVZFBMRWxCUVUxSkxEQkRRVUZwUWl4VlFVRkRReXhKUVVGRUxFVkJRVTlETEZOQlFWQXNSVUZCY1VJN1FVRkRha1FzVTBGQlR6dEJRVU5NUXl4VlFVRk5VaXhUUVVGVFRTeEpRVUZVTEVOQlJFUTdRVUZGVEVjc1YwRkJUME1zVlVGR1JqdEJRVWRNU0R0QlFVaExMRWRCUVZBN1FVRkxSQ3hEUVU1Tk96dEJRVkZRT3pzN08wRkJTVThzU1VGQlRVa3NhMFZCUVRaQ0xGVkJRVU5rTEV0QlFVUTdRVUZCUVN4VFFVRlhRU3hOUVVGTlpTeFRRVUZPTEVOQlFXZENaaXhOUVVGTlRTeFBRVUZPTEVOQlFXTXNSMEZCWkN4SlFVRnhRaXhEUVVGeVF5eEZRVUYzUTA0c1RVRkJUV2RDTEZkQlFVNHNRMEZCYTBJc1IwRkJiRUlzUTBGQmVFTXNRMEZCV0R0QlFVRkJMRU5CUVc1RE96dEJRVVZRT3pzN096dEJRVXRQTEZOQlFWTXpReXhuUWtGQlZDeERRVUV3UWpSRExFdEJRVEZDTEVWQlFXbERPMEZCUTNSRExFMUJRVTFETEZkQlFWZEVMRTFCUVUxRkxFMUJRWFpDT3p0QlFVVkJMRk5CUVU4c1ZVRkJWV1FzUTBGQlZpeEZRVUZoTzBGQlEyeENMRkZCUVUxbExGTkJRVk1zUlVGQlpqdEJRVU5CTEZGQlFVMURMR05CUVdOMFFpeHZRa0ZCYjBKbExESkNRVUV5UWxRc1EwRkJNMElzUTBGQmNFSXNRMEZCY0VJN08wRkJSVUVzVTBGQlN5eEpRVUZKYVVJc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpTaXhSUVVGd1FpeEZRVUU0UWtrc1IwRkJPVUlzUlVGQmJVTTdRVUZEYWtOR0xHRkJRVTlJTEUxQlFVMUxMRU5CUVU0c1EwRkJVQ3hKUVVGdlFrUXNXVUZCV1VNc1EwRkJXaXhOUVVGdFFrTXNVMEZCY0VJc1IwRkJhVU5XTEZkQlFWZFJMRmxCUVZsRExFTkJRVm9zUTBGQldDeERRVUZxUXl4SFFVRTRSQ3hEUVVGcVJqdEJRVU5FT3p0QlFVVkVMRmRCUVU5R0xFMUJRVkE3UVVGRFJDeEhRVlJFTzBGQlZVUTdPMEZCUlVRN096czdPenRCUVUxUExFbEJRVTFKTERSQ1FVRlZMRlZCUVVORExFZEJRVVE3UVVGQlFTeFRRVUZUYmtRc1VVRkJVVzFFTEVkQlFWSXNUVUZCYVVJc1QwRkJNVUk3UVVGQlFTeERRVUZvUWpzN1FVRkZVRHM3T3pzN08wRkJUVThzU1VGQlRVTXNNRUpCUVZNc1ZVRkJRME1zUjBGQlJEdEJRVUZCTEZOQlFWTnlSQ3hSUVVGUmNVUXNSMEZCVWl4TlFVRnBRaXhWUVVFeFFqdEJRVUZCTEVOQlFXWTdPMEZCUlZBN096czdPenRCUVUxUExFbEJRVTFETEhkQ1FVRlJMRlZCUVVORExFZEJRVVE3UVVGQlFTeFRRVUZUTEU5QlFVOUJMRWRCUVZBc1MwRkJaU3hSUVVGNFFqdEJRVUZCTEVOQlFXUTdPMEZCUlZBN096czdPenRCUVUxUExFbEJRVTFETEhkQ1FVRlJMRlZCUVVOSUxFZEJRVVE3UVVGQlFTeFRRVUZUTEU5QlFVOUJMRWRCUVZBc1MwRkJaU3hSUVVGNFFqdEJRVUZCTEVOQlFXUTdPMEZCUlZBN096czdPenRCUVUxUExFbEJRVTB4UWl3NFFrRkJWeXhWUVVGRE9FSXNSMEZCUkR0QlFVRkJMRk5CUVZNc1QwRkJUMEVzUjBGQlVDeExRVUZsTEZGQlFYaENPMEZCUVVFc1EwRkJha0k3TzBGQlJVRXNTVUZCVFVNc2QwSkJRVkY2UWl4aFFVRmhMRWRCUVdJc1EwRkJaRHRCUVVOQkxFbEJRVTB3UWl4M1FrRkJVVEZDTEdGQlFXRXNTMEZCWWl4RFFVRmtPMEZCUTBFc1NVRkJUVEpDTEhkQ1FVRlJNMElzWVVGQllTeExRVUZpTEVOQlFXUTdRVUZEUVN4SlFVRk5ORUlzTkVKQlFWVXNWVUZCUXpsQ0xFTkJRVVE3UVVGQlFTeFRRVUZSTWtJc1RVRkJUVE5DTEVOQlFVNHNTMEZCV1RSQ0xFMUJRVTAxUWl4RFFVRk9MRU5CUVZvc1NVRkJkMEkyUWl4TlFVRk5OMElzUTBGQlRpeERRVUZvUXp0QlFVRkJMRU5CUVdoQ0lpd2labWxzWlNJNkluVjBhV3h6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWTI5dWMzUWdkbUZ5Vkhsd1pTQTlJQ2gyWVhKcFlXSnNaU2tnUFQ0Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1MGIxTjBjbWx1Wnk1allXeHNLSFpoY21saFlteGxLUzV6YkdsalpTZzRMQ0F0TVNrN1hHNWNibU52Ym5OMElFTkJUVVZNWDBOQlUwVmZVRUZVVkVWU1RpQTlJQzhvVzJFdGVsMHBLRnRCTFZwZEtTOW5PMXh1WTI5dWMzUWdVa1ZRVEVGRFJWOVVSVTFRVEVGVVJTQTlJQ2NrTVMwa01pYzdYRzVqYjI1emRDQklRVk5mVUVWU1JrOVNUVUZPUTBWZlRrOVhJRDBnS0hSNWNHVnZaaUJ3WlhKbWIzSnRZVzVqWlNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2NHVnlabTl5YldGdVkyVXVibTkzS1R0Y2JseHVMeXBjYmlBZ1EyOXVkbVZ5ZENCallXMWxiRU5oYzJVZ2RHOGdaR0Z6YUMxallYTmxYRzVjYmlBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lFQnlaWFIxY200Z1czTjBjbWx1WjExY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyRnRaV3hVYjBSaGMyZ2dQU0FvYzNSeWFXNW5LU0E5UGlCemRISnBibWN1Y21Wd2JHRmpaU2hEUVUxRlRGOURRVk5GWDFCQlZGUkZVazRzSUZKRlVFeEJRMFZmVkVWTlVFeEJWRVVwTG5SdlRHOTNaWEpEWVhObEtDazdYRzVjYmk4cVhHNGdJRWRsYm1WeVlYUmxJR04xY25KbGJuUWdkR2x0WlhOMFlXMXdYRzRnSUZ4dUlDQkFjbVYwZFhKdUlGdDBhVzFsYzNSaGJYQmRPaUJEZFhKeVpXNTBJRlZPU1ZnZ2RHbHRaWE4wWVcxd1hHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHTjFjbkpsYm5SVWFXMWxJRDBnU0VGVFgxQkZVa1pQVWsxQlRrTkZYMDVQVnlBL0lDZ3BJRDArSUhCbGNtWnZjbTFoYm1ObExtNXZkeWdwSURvZ0tDa2dQVDRnYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsS0NrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCelpYUkVUMDFCZEhSeWN5QTlJQ2hsYkdWdFpXNTBMQ0JoZEhSeWN5a2dQVDRnZTF4dUlDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z1lYUjBjbk1wSUh0Y2JpQWdJQ0JwWmlBb1lYUjBjbk11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ1pXeGxiV1Z1ZEM1elpYUkJkSFJ5YVdKMWRHVW9hMlY1TENCaGRIUnljMXRyWlhsZEtUdGNiaUFnSUNCOVhHNGdJSDFjYm4wN1hHNHZLbHh1SUNCVGNHeHBkQ0JqYjIxdFlTMWtaV3hwYldsMFpXUWdjM1J5YVc1blhHNWNiaUFnWENKbWIyOHNZbUZ5WENJZ0xUNGdXMXdpWm05dlhDSXNJRndpWW1GeVhDSmRYRzVjYmlBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lFQnlaWFIxY200Z1cyRnljbUY1WFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemNHeHBkRU52YlcxaFJHVnNhVzFwZEdWa0lEMGdLSFpoYkhWbEtTQTlQaUJwYzFOMGNtbHVaeWgyWVd4MVpTa2dQeUIyWVd4MVpTNXpjR3hwZENndkxGeGNjeW92S1NBNklGdDJZV3gxWlYwN1hHNWNiaThxS2x4dUlDb2dJRkpsZEhWeWJuTWdZU0JtZFc1amRHbHZiaUIwYUdGMElIZHBiR3dnWTJobFkyc2dZVzU1SUdGeVozVnRaVzUwSUdadmNpQmdkR1Z5YldCY2JpQXFJR0JqYjI1MFlXbHVjeWduYm1WbFpHeGxKeWtvSjJoaGVYTjBZV05ySnlsZ1hHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpiMjUwWVdsdWN5QTlJQ2gwWlhKdEtTQTlQaUFvZGlrZ1BUNGdlMXh1SUNCeVpYUjFjbTRnS0dselUzUnlhVzVuS0hSbGNtMHBJQ1ltSUhZdWFXNWtaWGhQWmloMFpYSnRLU0FoUFQwZ0xURXBPMXh1ZlR0Y2JseHVMeW9xWEc0Z0tpQWdVbVYwZFhKdWN5QmhJR1oxYm1OMGFXOXVJSFJvWVhRZ2QybHNiQ0JqYUdWamF5QjBieUJ6WldVZ2FXWWdZVzRnWVhKbmRXMWxiblFnYVhOY2JpQXFJQ0IwYUdVZ1ptbHljM1FnWTJoaGNtRmpkR1Z5Y3lCcGJpQjBhR1VnY0hKdmRtbGtaV1FnWUhSbGNtMWdYRzRnS2lCZ2FYTkdhWEp6ZEVOb1lYSnpLQ2R1WldWa2JHVW5LU2duYUdGNWMzUmhZMnNuS1dCY2JpQXFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpSbWx5YzNSRGFHRnljeUE5SUNoMFpYSnRLU0E5UGlBb2Rpa2dQVDRnZTF4dUlDQnlaWFIxY200Z0tHbHpVM1J5YVc1bktIUmxjbTBwSUNZbUlIWXVhVzVrWlhoUFppaDBaWEp0S1NBOVBUMGdNQ2s3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpTQmhJSFZ1YVhRZ2RtRnNkV1VnZEhsd1pWeHVJQ292WEc1bGVIQnZjblFnWTI5dWMzUWdZM0psWVhSbFZXNXBkRlI1Y0dVZ1BTQW9kSGx3WlN3Z2RISmhibk5tYjNKdEtTQTlQaUI3WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnZEdWemREb2dZMjl1ZEdGcGJuTW9kSGx3WlNrc1hHNGdJQ0FnY0dGeWMyVTZJSEJoY25ObFJteHZZWFFzWEc0Z0lDQWdkSEpoYm5ObWIzSnRYRzRnSUgwN1hHNTlPMXh1WEc0dktseHVJQ0JIWlhRZ2RtRnNkV1VnWm5KdmJTQm1kVzVqZEdsdmJpQnpkSEpwYm1kY2JpQWdYQ0owY21GdWMyeGhkR1ZZS0RJd2NIZ3BYQ0lnTFQ0Z1hDSXlNSEI0WENKY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBWbUZzZFdWR2NtOXRSblZ1WTNScGIyNVRkSEpwYm1jZ1BTQW9kbUZzZFdVcElEMCtJSFpoYkhWbExuTjFZbk4wY21sdVp5aDJZV3gxWlM1cGJtUmxlRTltS0Njb0p5a2dLeUF4TENCMllXeDFaUzVzWVhOMFNXNWtaWGhQWmlnbktTY3BLVHRjYmx4dUx5b3FYRzRnS2lCRGNtVmhkR1Z6SUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ0IzYVd4c0lITndiR2wwSUdOdmJHOXlYRzRnS2lCMllXeDFaWE1nWm5KdmJTQnpkSEpwYm1jZ2FXNTBieUJoYmlCdlltcGxZM1FnYjJZZ2NISnZjR1Z5ZEdsbGMxeHVJQ29nWUcxaGNFRnljbUY1Vkc5UFltcGxZM1FvV3lkeVpXUW5MQ0FuWjNKbFpXNG5MQ0FuWW14MVpTZGRLU2duY21kaVlTZ3dMREFzTUNrbktXQmNiaUFxTDF4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUhOd2JHbDBRMjlzYjNKV1lXeDFaWE1vZEdWeWJYTXBJSHRjYmlBZ1kyOXVjM1FnYm5WdFZHVnliWE1nUFNCMFpYSnRjeTVzWlc1bmRHZzdYRzVjYmlBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUNoMktTQjdYRzRnSUNBZ1kyOXVjM1FnZG1Gc2RXVnpJRDBnZTMwN1hHNGdJQ0FnWTI5dWMzUWdkbUZzZFdWelFYSnlZWGtnUFNCemNHeHBkRU52YlcxaFJHVnNhVzFwZEdWa0tHZGxkRlpoYkhWbFJuSnZiVVoxYm1OMGFXOXVVM1J5YVc1bktIWXBLVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYm5WdFZHVnliWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdkbUZzZFdWelczUmxjbTF6VzJsZFhTQTlJQ2gyWVd4MVpYTkJjbkpoZVZ0cFhTQWhQVDBnZFc1a1pXWnBibVZrS1NBL0lIQmhjbk5sUm14dllYUW9kbUZzZFdWelFYSnlZWGxiYVYwcElEb2dNVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RtRnNkV1Z6TzF4dUlDQjlPMXh1ZlZ4dVhHNHZLbHh1SUNCSmN5QjFkR2xzY3lCMllYSWdZVzRnWVhKeVlYa2dQeUJjYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFYwYVd4ekxuWmhjbFI1Y0dVZ1BUMDlJQ2RCY25KaGVTZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5CY25KaGVTQTlJQ2hoY25JcElEMCtJSFpoY2xSNWNHVW9ZWEp5S1NBOVBUMGdKMEZ5Y21GNUp6dGNibHh1THlwY2JpQWdTWE1nZFhScGJITWdkbUZ5SUdFZ1puVnVZM1JwYjI0Z1B5QmNiaUFnWEc0Z0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIVjBhV3h6TG5aaGNsUjVjR1VnUFQwOUlDZEdkVzVqZEdsdmJpZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5HZFc1aklEMGdLRzlpYWlrZ1BUNGdkbUZ5Vkhsd1pTaHZZbW9wSUQwOVBTQW5SblZ1WTNScGIyNG5PMXh1WEc0dktseHVJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lTQnVkVzFpWlhJL1hHNGdJRnh1SUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMGVYQmxiMllnUFQwOUlDZHVkVzFpWlhJblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpUblZ0SUQwZ0tHNTFiU2tnUFQ0Z2RIbHdaVzltSUc1MWJTQTlQVDBnSjI1MWJXSmxjaWM3WEc1Y2JpOHFYRzRnSUVseklIVjBhV3h6SUhaaGNpQmhiaUJ2WW1wbFkzUS9YRzRnSUZ4dUlDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBlWEJsYjJZZ1BUMDlJQ2R2WW1wbFkzUW5YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VDJKcUlEMGdLRzlpYWlrZ1BUNGdkSGx3Wlc5bUlHOWlhaUE5UFQwZ0oyOWlhbVZqZENjN1hHNWNiaThxWEc0Z0lFbHpJSFYwYVd4eklIWmhjaUJoSUhOMGNtbHVaeUEvSUZ4dUlDQmNiaUFnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZEhsd1pXOW1JSE4wY2lBOVBUMGdKM04wY21sdVp5ZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5UZEhKcGJtY2dQU0FvYzNSeUtTQTlQaUIwZVhCbGIyWWdjM1J5SUQwOVBTQW5jM1J5YVc1bkp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElHbHpTR1Y0SUQwZ2FYTkdhWEp6ZEVOb1lYSnpLQ2NqSnlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOU1oySWdQU0JwYzBacGNuTjBRMmhoY25Nb0ozSm5ZaWNwTzF4dVpYaHdiM0owSUdOdmJuTjBJR2x6U0hOc0lEMGdhWE5HYVhKemRFTm9ZWEp6S0Nkb2Myd25LVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnBjME52Ykc5eUlEMGdLSFlwSUQwK0lDaHBjMGhsZUNoMktTQjhmQ0JwYzFKbllpaDJLU0I4ZkNCcGMwaHpiQ2gyS1NrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb2xvciA9IGV4cG9ydHMuaHNsYSA9IGV4cG9ydHMucmdiYSA9IGV4cG9ydHMuaGV4ID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgaGV4ID0gZXhwb3J0cy5oZXggPSBmdW5jdGlvbiAodikge1xuICB2YXIgciA9IHZvaWQgMCxcbiAgICAgIGcgPSB2b2lkIDAsXG4gICAgICBiID0gdm9pZCAwO1xuXG4gIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gIGlmICh2Lmxlbmd0aCA+IDQpIHtcbiAgICByID0gdi5zdWJzdHIoMSwgMik7XG4gICAgZyA9IHYuc3Vic3RyKDMsIDIpO1xuICAgIGIgPSB2LnN1YnN0cig1LCAyKTtcblxuICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gIH0gZWxzZSB7XG4gICAgciA9IHYuc3Vic3RyKDEsIDEpO1xuICAgIGcgPSB2LnN1YnN0cigyLCAxKTtcbiAgICBiID0gdi5zdWJzdHIoMywgMSk7XG4gICAgciArPSByO1xuICAgIGcgKz0gZztcbiAgICBiICs9IGI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgIGdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgYmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgIGFscGhhOiAxXG4gIH07XG59O1xuXG52YXIgcmdiYSA9IGV4cG9ydHMucmdiYSA9ICgwLCBfdXRpbHMuc3BsaXRDb2xvclZhbHVlcykoWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZScsICdhbHBoYSddKTtcblxudmFyIGhzbGEgPSBleHBvcnRzLmhzbGEgPSAoMCwgX3V0aWxzLnNwbGl0Q29sb3JWYWx1ZXMpKFsnaHVlJywgJ3NhdHVyYXRpb24nLCAnbGlnaHRuZXNzJywgJ2FscGhhJ10pO1xuXG52YXIgY29sb3IgPSBleHBvcnRzLmNvbG9yID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCgwLCBfdXRpbHMuaXNSZ2IpKHYpKSB7XG4gICAgcmV0dXJuIHJnYmEodik7XG4gIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc0hleCkodikpIHtcbiAgICByZXR1cm4gaGV4KHYpO1xuICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNIc2wpKHYpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cblxuICByZXR1cm4gdjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12Y0dGeWMyVnljeTVxY3lKZExDSnVZVzFsY3lJNld5Sm9aWGdpTENKMklpd2ljaUlzSW1jaUxDSmlJaXdpYkdWdVozUm9JaXdpYzNWaWMzUnlJaXdpY21Wa0lpd2ljR0Z5YzJWSmJuUWlMQ0puY21WbGJpSXNJbUpzZFdVaUxDSmhiSEJvWVNJc0luSm5ZbUVpTENKb2MyeGhJaXdpWTI5c2IzSWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN08wRkJSVThzU1VGQlRVRXNiMEpCUVUwc1ZVRkJRME1zUTBGQlJDeEZRVUZQTzBGQlEzaENMRTFCUVVsRExGVkJRVW83UVVGQlFTeE5RVUZQUXl4VlFVRlFPMEZCUVVFc1RVRkJWVU1zVlVGQlZqczdRVUZGUVR0QlFVTkJMRTFCUVVsSUxFVkJRVVZKTEUxQlFVWXNSMEZCVnl4RFFVRm1MRVZCUVd0Q08wRkJRMmhDU0N4UlFVRkpSQ3hGUVVGRlN5eE5RVUZHTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVZvc1EwRkJTanRCUVVOQlNDeFJRVUZKUml4RlFVRkZTeXhOUVVGR0xFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFWb3NRMEZCU2p0QlFVTkJSaXhSUVVGSlNDeEZRVUZGU3l4TlFVRkdMRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVm9zUTBGQlNqczdRVUZGUmp0QlFVTkRMRWRCVGtRc1RVRk5UenRCUVVOTVNpeFJRVUZKUkN4RlFVRkZTeXhOUVVGR0xFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFWb3NRMEZCU2p0QlFVTkJTQ3hSUVVGSlJpeEZRVUZGU3l4TlFVRkdMRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVm9zUTBGQlNqdEJRVU5CUml4UlFVRkpTQ3hGUVVGRlN5eE5RVUZHTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVZvc1EwRkJTanRCUVVOQlNpeFRRVUZMUVN4RFFVRk1PMEZCUTBGRExGTkJRVXRCTEVOQlFVdzdRVUZEUVVNc1UwRkJTMEVzUTBGQlREdEJRVU5FT3p0QlFVVkVMRk5CUVU4N1FVRkRURWNzVTBGQlMwTXNVMEZCVTA0c1EwRkJWQ3hGUVVGWkxFVkJRVm9zUTBGRVFUdEJRVVZNVHl4WFFVRlBSQ3hUUVVGVFRDeERRVUZVTEVWQlFWa3NSVUZCV2l4RFFVWkdPMEZCUjB4UExGVkJRVTFHTEZOQlFWTktMRU5CUVZRc1JVRkJXU3hGUVVGYUxFTkJTRVE3UVVGSlRFOHNWMEZCVHp0QlFVcEdMRWRCUVZBN1FVRk5SQ3hEUVhwQ1RUczdRVUV5UWtFc1NVRkJUVU1zYzBKQlFVOHNOa0pCUVdsQ0xFTkJRVU1zUzBGQlJDeEZRVUZSTEU5QlFWSXNSVUZCYVVJc1RVRkJha0lzUlVGQmVVSXNUMEZCZWtJc1EwRkJha0lzUTBGQllqczdRVUZGUVN4SlFVRk5ReXh6UWtGQlR5dzJRa0ZCYVVJc1EwRkJReXhMUVVGRUxFVkJRVkVzV1VGQlVpeEZRVUZ6UWl4WFFVRjBRaXhGUVVGdFF5eFBRVUZ1UXl4RFFVRnFRaXhEUVVGaU96dEJRVVZCTEVsQlFVMURMSGRDUVVGUkxGVkJRVU5pTEVOQlFVUXNSVUZCVHp0QlFVTXhRaXhOUVVGSkxHdENRVUZOUVN4RFFVRk9MRU5CUVVvc1JVRkJZenRCUVVOYUxGZEJRVTlYTEV0QlFVdFlMRU5CUVV3c1EwRkJVRHRCUVVORUxFZEJSa1FzVFVGRlR5eEpRVUZKTEd0Q1FVRk5RU3hEUVVGT0xFTkJRVW9zUlVGQll6dEJRVU51UWl4WFFVRlBSQ3hKUVVGSlF5eERRVUZLTEVOQlFWQTdRVUZEUkN4SFFVWk5MRTFCUlVFc1NVRkJTU3hyUWtGQlRVRXNRMEZCVGl4RFFVRktMRVZCUVdNN1FVRkRia0lzVjBGQlQxa3NTMEZCUzFvc1EwRkJUQ3hEUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVDBFc1EwRkJVRHRCUVVORUxFTkJWazBpTENKbWFXeGxJam9pY0dGeWMyVnljeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJSE53YkdsMFEyOXNiM0pXWVd4MVpYTXNJR2x6VW1kaUxDQnBjMGhsZUN3Z2FYTkljMndnZlNCbWNtOXRJQ2N1TDNWMGFXeHpKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR2hsZUNBOUlDaDJLU0E5UGlCN1hHNGdJR3hsZENCeUxDQm5MQ0JpTzF4dVhHNGdJQzh2SUVsbUlIZGxJR2hoZG1VZ05pQmphR0Z5WVdOMFpYSnpMQ0JwWlNBalJrWXdNREF3WEc0Z0lHbG1JQ2gyTG14bGJtZDBhQ0ErSURRcElIdGNiaUFnSUNCeUlEMGdkaTV6ZFdKemRISW9NU3dnTWlrN1hHNGdJQ0FnWnlBOUlIWXVjM1ZpYzNSeUtETXNJRElwTzF4dUlDQWdJR0lnUFNCMkxuTjFZbk4wY2lnMUxDQXlLVHRjYmx4dUlDQXZMeUJQY2lCM1pTQm9ZWFpsSURNZ1kyaGhjbUZqZEdWeWN5d2dhV1VnSTBZd01GeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lISWdQU0IyTG5OMVluTjBjaWd4TENBeEtUdGNiaUFnSUNCbklEMGdkaTV6ZFdKemRISW9NaXdnTVNrN1hHNGdJQ0FnWWlBOUlIWXVjM1ZpYzNSeUtETXNJREVwTzF4dUlDQWdJSElnS3owZ2NqdGNiaUFnSUNCbklDczlJR2M3WEc0Z0lDQWdZaUFyUFNCaU8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNCeVpXUTZJSEJoY25ObFNXNTBLSElzSURFMktTeGNiaUFnSUNCbmNtVmxiam9nY0dGeWMyVkpiblFvWnl3Z01UWXBMRnh1SUNBZ0lHSnNkV1U2SUhCaGNuTmxTVzUwS0dJc0lERTJLU3hjYmlBZ0lDQmhiSEJvWVRvZ01WeHVJQ0I5TzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElISm5ZbUVnUFNCemNHeHBkRU52Ykc5eVZtRnNkV1Z6S0ZzbmNtVmtKeXdnSjJkeVpXVnVKeXdnSjJKc2RXVW5MQ0FuWVd4d2FHRW5YU2s3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JvYzJ4aElEMGdjM0JzYVhSRGIyeHZjbFpoYkhWbGN5aGJKMmgxWlNjc0lDZHpZWFIxY21GMGFXOXVKeXdnSjJ4cFoyaDBibVZ6Y3ljc0lDZGhiSEJvWVNkZEtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnZiRzl5SUQwZ0tIWXBJRDArSUh0Y2JpQWdhV1lnS0dselVtZGlLSFlwS1NCN1hHNGdJQ0FnY21WMGRYSnVJSEpuWW1Fb2RpazdYRzRnSUgwZ1pXeHpaU0JwWmlBb2FYTklaWGdvZGlrcElIdGNiaUFnSUNCeVpYUjFjbTRnYUdWNEtIWXBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tHbHpTSE5zS0hZcEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdoemJHRW9kaWs3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnZGp0Y2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3BhcnNlcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cbnZhciBoYXNSQUYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gdHJ1ZSA6IGZhbHNlO1xuXG52YXIgb25OZXh0RnJhbWUgPSB2b2lkIDA7XG5cbmlmIChoYXNSQUYpIHtcbiAgb25OZXh0RnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gIH07XG59IGVsc2Uge1xuICAoZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgIFxuICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgIFxuICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICBcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICBcbiAgICAgIE1JVCBsaWNlbnNlXG4gICAgKi9cbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuXG4gICAgb25OZXh0RnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNi43IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobGFzdFRpbWUpO1xuICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgfTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gb25OZXh0RnJhbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZiMjR0Ym1WNGRDMW1jbUZ0WlM1cWN5SmRMQ0p1WVcxbGN5STZXeUpvWVhOU1FVWWlMQ0ozYVc1a2IzY2lMQ0p5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVaUxDSnZiazVsZUhSR2NtRnRaU0lzSW1OaGJHeGlZV05ySWl3aWJHRnpkRlJwYldVaUxDSmpkWEp5Wlc1MFZHbHRaU0lzSWtSaGRHVWlMQ0puWlhSVWFXMWxJaXdpZEdsdFpWUnZRMkZzYkNJc0lrMWhkR2dpTENKdFlYZ2lMQ0p6WlhSVWFXMWxiM1YwSWwwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFUczdPMEZCUjBFc1NVRkJUVUVzVTBGQlZTeFBRVUZQUXl4TlFVRlFMRXRCUVd0Q0xGZEJRV3hDTEVsQlFXbERRU3hQUVVGUFF5eHhRa0ZCZWtNc1IwRkJhMFVzU1VGQmJFVXNSMEZCZVVVc1MwRkJlRVk3TzBGQlJVRXNTVUZCU1VNc2IwSkJRVW83TzBGQlJVRXNTVUZCU1Vnc1RVRkJTaXhGUVVGWk8wRkJRMVpITEdkQ1FVRmpMRlZCUVVORExGRkJRVVE3UVVGQlFTeFhRVUZqU0N4UFFVRlBReXh4UWtGQlVDeERRVUUyUWtVc1VVRkJOMElzUTBGQlpEdEJRVUZCTEVkQlFXUTdRVUZGUkN4RFFVaEVMRTFCUjA4N1FVRkJRVHRCUVVOTU96czdPenM3T3pzN096czdPMEZCWTBFc1VVRkJTVU1zVjBGQlZ5eERRVUZtT3p0QlFVVkJSaXhyUWtGQll5eFZRVUZEUXl4UlFVRkVMRVZCUVdNN1FVRkRNVUlzVlVGQlRVVXNZMEZCWXl4SlFVRkpReXhKUVVGS0xFZEJRVmRETEU5QlFWZ3NSVUZCY0VJN1FVRkRRU3hWUVVGTlF5eGhRVUZoUXl4TFFVRkxReXhIUVVGTUxFTkJRVk1zUTBGQlZDeEZRVUZaTEZGQlFWRk1MR05CUVdORUxGRkJRWFJDTEVOQlFWb3NRMEZCYmtJN08wRkJSVUZCTEdsQ1FVRlhReXhqUVVGalJ5eFZRVUY2UWpzN1FVRkZRVWNzYVVKQlFWYzdRVUZCUVN4bFFVRk5VaXhUUVVGVFF5eFJRVUZVTEVOQlFVNDdRVUZCUVN4UFFVRllMRVZCUVhGRFNTeFZRVUZ5UXp0QlFVTkVMRXRCVUVRN1FVRnFRa3M3UVVGNVFrNDdPMnRDUVVWalRpeFhJaXdpWm1sc1pTSTZJbTl1TFc1bGVIUXRabkpoYldVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0JFWlhSbFkzUWdZVzVrSUd4dllXUWdZVzRnWVhCd2NtOXdjbWxoZEdVZ1kyeHZZMnNnYzJWMGRHbHVaeUJtYjNJZ2RHaGxJR1Z1ZG1seWIyNXRaVzUwWEc0cUwxeHVZMjl1YzNRZ2FHRnpVa0ZHSUQwZ0tIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhkcGJtUnZkeTV5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVcElEOGdkSEoxWlNBNklHWmhiSE5sTzF4dVhHNXNaWFFnYjI1T1pYaDBSbkpoYldVN1hHNWNibWxtSUNob1lYTlNRVVlwSUh0Y2JpQWdiMjVPWlhoMFJuSmhiV1VnUFNBb1kyRnNiR0poWTJzcElEMCtJSGRwYm1SdmR5NXlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VvWTJGc2JHSmhZMnNwTzF4dVhHNTlJR1ZzYzJVZ2UxeHVJQ0F2S2x4dUlDQWdJSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNCd2IyeDVabWxzYkZ4dUlDQWdJRnh1SUNBZ0lFWnZjaUJKUlRndk9TQkdiR2x1YzNSdmJtVnpJR0Z1WkNCdWIyNHRZbkp2ZDNObGNpQmxiblpwY205dWJXVnVkSE5jYmx4dUlDQWdJRlJoYTJWdUlHWnliMjBnVUdGMWJDQkpjbWx6YUM0Z1YyVW5kbVVnYzNSeWFYQndaV1FnYjNWMElHTmhibU5sYkVGdWFXMWhkR2x2YmtaeVlXMWxJR05vWldOcmN5QmlaV05oZFhObElIZGxJR1J2YmlkMElHWnZlQ0IzYVhSb0lIUm9ZWFJjYmlBZ0lDQmNiaUFnSUNCb2RIUndPaTh2Y0dGMWJHbHlhWE5vTG1OdmJTOHlNREV4TDNKbGNYVmxjM1JoYm1sdFlYUnBiMjVtY21GdFpTMW1iM0l0YzIxaGNuUXRZVzVwYldGMGFXNW5MMXh1SUNBZ0lHaDBkSEE2THk5dGVTNXZjR1Z5WVM1amIyMHZaVzF2Ykd4bGNpOWliRzluTHpJd01URXZNVEl2TWpBdmNtVnhkV1Z6ZEdGdWFXMWhkR2x2Ym1aeVlXMWxMV1p2Y2kxemJXRnlkQzFsY2kxaGJtbHRZWFJwYm1kY2JpQWdJQ0FnWEc0Z0lDQWdjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsSUhCdmJIbG1hV3hzSUdKNUlFVnlhV3NnVGNPMmJHeGxjaTRnWm1sNFpYTWdabkp2YlNCUVlYVnNJRWx5YVhOb0lHRnVaQ0JVYVc1dklGcHBhbVJsYkZ4dUlDQWdJQ0JjYmlBZ0lDQk5TVlFnYkdsalpXNXpaVnh1SUNBcUwxeHVJQ0JzWlhRZ2JHRnpkRlJwYldVZ1BTQXdPMXh1WEc0Z0lHOXVUbVY0ZEVaeVlXMWxJRDBnS0dOaGJHeGlZV05yS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnWTNWeWNtVnVkRlJwYldVZ1BTQnVaWGNnUkdGMFpTZ3BMbWRsZEZScGJXVW9LVHRjYmlBZ0lDQmpiMjV6ZENCMGFXMWxWRzlEWVd4c0lEMGdUV0YwYUM1dFlYZ29NQ3dnTVRZdU55QXRJQ2hqZFhKeVpXNTBWR2x0WlNBdElHeGhjM1JVYVcxbEtTazdYRzVjYmlBZ0lDQnNZWE4wVkdsdFpTQTlJR04xY25KbGJuUlVhVzFsSUNzZ2RHbHRaVlJ2UTJGc2JEdGNibHh1SUNBZ0lITmxkRlJwYldWdmRYUW9LQ2tnUFQ0Z1kyRnNiR0poWTJzb2JHRnpkRlJwYldVcExDQjBhVzFsVkc5RFlXeHNLVHRjYmlBZ2ZUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnYjI1T1pYaDBSbkpoYldVN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9vbi1uZXh0LWZyYW1lLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUmVuZGVyU3RlcDtcbmZ1bmN0aW9uIGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKSB7XG4gIC8qKlxuICAgKiBXZSB1c2UgdHdvIGFycmF5cywgb25lIGZvciB0aGlzIGZyYW1lIGFuZCBvbmUgdG8gcXVldWUgZm9yIHRoZVxuICAgKiBuZXh0IGZyYW1lLCByZXVzaW5nIGVhY2ggdG8gYXZvaWQgR0MuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gIHZhciBmdW5jdGlvbnNUb1J1biA9IFtdO1xuICB2YXIgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUgPSBbXTtcblxuICByZXR1cm4ge1xuICAgIHNjaGVkdWxlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHN0YXJ0UmVuZGVyTG9vcCgpO1xuICAgICAgLy8gSWYgdGhpcyBjYWxsYmFjayBpc24ndCBhbHJlYWR5IHNjaGVkdWxlZCB0byBydW4gbmV4dCBmcmFtZVxuICAgICAgaWYgKGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spID09PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2FuY2VsOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciBpbmRleE9mQ2FsbGJhY2sgPSBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgIGlmIChpbmRleE9mQ2FsbGJhY2sgIT09IC0xKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLnNwbGljZShpbmRleE9mQ2FsbGJhY2ssIDEpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBwcm9jZXNzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIC8vIENsZWFyIG5leHQgZnJhbWUgbGlzdFxuICAgICAgdmFyIF9yZWYgPSBbZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUsIGZ1bmN0aW9uc1RvUnVuXTtcbiAgICAgIC8vIFN3YXAgdGhpcyBmcmFtZSBhbmQgbmV4dCBmcmFtZSBhcnJheXMgdG8gYXZvaWQgR0NcblxuICAgICAgZnVuY3Rpb25zVG9SdW4gPSBfcmVmWzBdO1xuICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUgPSBfcmVmWzFdO1xuICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUubGVuZ3RoID0gMDtcblxuICAgICAgLy8gRXhlY3V0ZSBhbGwgb2YgdGhpcyBmcmFtZSdzIGZ1bmN0aW9uc1xuICAgICAgdmFyIG51bVRoaXNGcmFtZSA9IGZ1bmN0aW9uc1RvUnVuLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGhpc0ZyYW1lOyBpKyspIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5baV0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZZM0psWVhSbExYSmxibVJsY2kxemRHVndMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTnlaV0YwWlZKbGJtUmxjbE4wWlhBaUxDSnpkR0Z5ZEZKbGJtUmxja3h2YjNBaUxDSm1kVzVqZEdsdmJuTlViMUoxYmlJc0ltWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsSWl3aWMyTm9aV1IxYkdVaUxDSmpZV3hzWW1GamF5SXNJbWx1WkdWNFQyWWlMQ0p3ZFhOb0lpd2lZMkZ1WTJWc0lpd2lhVzVrWlhoUFprTmhiR3hpWVdOcklpd2ljM0JzYVdObElpd2ljSEp2WTJWemN5SXNJbXhsYm1kMGFDSXNJbTUxYlZSb2FYTkdjbUZ0WlNJc0lta2lYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZCZDBKQkxHZENPMEZCUVZRc1UwRkJVMEVzWjBKQlFWUXNRMEZCTUVKRExHVkJRVEZDTEVWQlFUSkRPMEZCUTNoRU96czdPenRCUVV0QkxFMUJRVWxETEdsQ1FVRnBRaXhGUVVGeVFqdEJRVU5CTEUxQlFVbERMREJDUVVFd1FpeEZRVUU1UWpzN1FVRkZRU3hUUVVGUE8wRkJRMHhETEdOQlFWVXNWVUZCUTBNc1VVRkJSQ3hGUVVGak8wRkJRM1JDU2p0QlFVTkJPMEZCUTBFc1ZVRkJTVVVzZDBKQlFYZENSeXhQUVVGNFFpeERRVUZuUTBRc1VVRkJhRU1zVFVGQk9FTXNRMEZCUXl4RFFVRnVSQ3hGUVVGelJEdEJRVU53UkVZc1owTkJRWGRDU1N4SlFVRjRRaXhEUVVFMlFrWXNVVUZCTjBJN1FVRkRSRHRCUVVOR0xFdEJVRWs3TzBGQlUweEhMRmxCUVZFc1ZVRkJRMGdzVVVGQlJDeEZRVUZqTzBGQlEzQkNMRlZCUVUxSkxHdENRVUZyUWs0c2QwSkJRWGRDUnl4UFFVRjRRaXhEUVVGblEwUXNVVUZCYUVNc1EwRkJlRUk3UVVGRFFTeFZRVUZKU1N4dlFrRkJiMElzUTBGQlF5eERRVUY2UWl4RlFVRTBRanRCUVVNeFFrNHNaME5CUVhkQ1R5eE5RVUY0UWl4RFFVRXJRa1FzWlVGQkwwSXNSVUZCWjBRc1EwRkJhRVE3UVVGRFJEdEJRVU5HTEV0QlpFazdPMEZCWjBKTVJTeGhRVUZUTEZsQlFVMDdPMEZCU1dJN1FVRktZU3hwUWtGRkswSXNRMEZCUTFJc2RVSkJRVVFzUlVGQk1FSkVMR05CUVRGQ0xFTkJSaTlDTzBGQlEySTdPMEZCUTBOQkxHOUNRVVpaTzBGQlJVbERMRFpDUVVaS08wRkJTMkpCTERoQ1FVRjNRbE1zVFVGQmVFSXNSMEZCYVVNc1EwRkJha003TzBGQlJVRTdRVUZEUVN4VlFVRk5ReXhsUVVGbFdDeGxRVUZsVlN4TlFVRndRenRCUVVOQkxGZEJRVXNzU1VGQlNVVXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKUkN4WlFVRndRaXhGUVVGclEwTXNSMEZCYkVNc1JVRkJkVU03UVVGRGNrTmFMSFZDUVVGbFdTeERRVUZtTzBGQlEwUTdRVUZEUmp0QlFUVkNTU3hIUVVGUU8wRkJPRUpFSWl3aVptbHNaU0k2SW1OeVpXRjBaUzF5Wlc1a1pYSXRjM1JsY0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJR055WldGMFpWSmxibVJsY2xOMFpYQW9jM1JoY25SU1pXNWtaWEpNYjI5d0tTQjdYRzRnSUM4cUtseHVJQ0FnS2lCWFpTQjFjMlVnZEhkdklHRnljbUY1Y3l3Z2IyNWxJR1p2Y2lCMGFHbHpJR1p5WVcxbElHRnVaQ0J2Ym1VZ2RHOGdjWFZsZFdVZ1ptOXlJSFJvWlZ4dUlDQWdLaUJ1WlhoMElHWnlZVzFsTENCeVpYVnphVzVuSUdWaFkyZ2dkRzhnWVhadmFXUWdSME11WEc0Z0lDQXFJRUIwZVhCbElIdEJjbkpoZVgxY2JpQWdJQ292WEc0Z0lHeGxkQ0JtZFc1amRHbHZibk5VYjFKMWJpQTlJRnRkTzF4dUlDQnNaWFFnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVWdQU0JiWFR0Y2JseHVJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lITmphR1ZrZFd4bE9pQW9ZMkZzYkdKaFkyc3BJRDArSUh0Y2JpQWdJQ0FnSUhOMFlYSjBVbVZ1WkdWeVRHOXZjQ2dwTzF4dUlDQWdJQ0FnTHk4Z1NXWWdkR2hwY3lCallXeHNZbUZqYXlCcGMyNG5kQ0JoYkhKbFlXUjVJSE5qYUdWa2RXeGxaQ0IwYnlCeWRXNGdibVY0ZENCbWNtRnRaVnh1SUNBZ0lDQWdhV1lnS0daMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxMbWx1WkdWNFQyWW9ZMkZzYkdKaFkyc3BJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZibk5VYjFKMWJrNWxlSFJHY21GdFpTNXdkWE5vS0dOaGJHeGlZV05yS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnWTJGdVkyVnNPaUFvWTJGc2JHSmhZMnNwSUQwK0lIdGNiaUFnSUNBZ0lHTnZibk4wSUdsdVpHVjRUMlpEWVd4c1ltRmpheUE5SUdaMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxMbWx1WkdWNFQyWW9ZMkZzYkdKaFkyc3BPMXh1SUNBZ0lDQWdhV1lnS0dsdVpHVjRUMlpEWVd4c1ltRmpheUFoUFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVXVjM0JzYVdObEtHbHVaR1Y0VDJaRFlXeHNZbUZqYXl3Z01TazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lIQnliMk5sYzNNNklDZ3BJRDArSUh0Y2JpQWdJQ0FnSUM4dklGTjNZWEFnZEdocGN5Qm1jbUZ0WlNCaGJtUWdibVY0ZENCbWNtRnRaU0JoY25KaGVYTWdkRzhnWVhadmFXUWdSME5jYmlBZ0lDQWdJRnRtZFc1amRHbHZibk5VYjFKMWJpd2dablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldWZElEMGdXMloxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbExDQm1kVzVqZEdsdmJuTlViMUoxYmwwN1hHNWNiaUFnSUNBZ0lDOHZJRU5zWldGeUlHNWxlSFFnWm5KaGJXVWdiR2x6ZEZ4dUlDQWdJQ0FnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVXViR1Z1WjNSb0lEMGdNRHRjYmx4dUlDQWdJQ0FnTHk4Z1JYaGxZM1YwWlNCaGJHd2diMllnZEdocGN5Qm1jbUZ0WlNkeklHWjFibU4wYVc5dWMxeHVJQ0FnSUNBZ1kyOXVjM1FnYm5WdFZHaHBjMFp5WVcxbElEMGdablZ1WTNScGIyNXpWRzlTZFc0dWJHVnVaM1JvTzF4dUlDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMVVhR2x6Um5KaGJXVTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQm1kVzVqZEdsdmJuTlViMUoxYmx0cFhTZ3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlR0Y2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkU3R5bGVQcm9wZXJ0eVN0cmluZztcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVzKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xudmFyIHRyYW5zbGF0ZU1hcCA9IHtcbiAgeDogVFJBTlNMQVRFICsgJ1gnLFxuICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gIHo6IFRSQU5TTEFURSArICdaJ1xufTtcblxuZnVuY3Rpb24gYnVpbGRTdHlsZVByb3BlcnR5U3RyaW5nKGVsZW1lbnQsIHN0YXRlLCBjaGFuZ2VkVmFsdWVzLCBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICB2YXIgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICB2YXIgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIHZhciB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgLy8gRmlyc3QgY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBjaGFuZ2VkIHRyYW5zZm9ybSB2YWx1ZXNcbiAgLy8gYW5kIGlmIHRydWUgYWRkIGFsbCB0cmFuc2Zvcm0gdmFsdWVzXG4gIHZhciBudW1DaGFuZ2VkVmFsdWVzID0gY2hhbmdlZFZhbHVlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ2hhbmdlZFZhbHVlczsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGNoYW5nZWRWYWx1ZXNbaV07XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdHJhbnNmb3JtIHByb3BlcnR5LCBhZGQgYWxsIG90aGVyIHRyYW5zZm9ybSBwcm9wc1xuICAgIC8vIHRvIGNoYW5nZWRWYWx1ZXMgYW5kIHRoZW4gYnJlYWtcbiAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG5cbiAgICAgIGZvciAodmFyIF9rZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtfa2V5XSAmJiBjaGFuZ2VkVmFsdWVzLmluZGV4T2YoX2tleSkgPT09IC0xKSB7XG4gICAgICAgICAgY2hhbmdlZFZhbHVlcy5wdXNoKF9rZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0b3RhbE51bUNoYW5nZWRWYWx1ZXMgPSBjaGFuZ2VkVmFsdWVzLmxlbmd0aDtcbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRvdGFsTnVtQ2hhbmdlZFZhbHVlczsgX2krKykge1xuICAgIHZhciBfa2V5MiA9IGNoYW5nZWRWYWx1ZXNbX2ldO1xuICAgIHZhciB2YWx1ZSA9IHN0YXRlW19rZXkyXTtcblxuICAgIGlmICh0cmFuc2xhdGVNYXBbX2tleTJdKSB7XG4gICAgICBfa2V5MiA9IHRyYW5zbGF0ZU1hcFtfa2V5Ml07XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIG51bWJlciBvciBvYmplY3QgYW5kIHdlIGhhdmUgZmlsdGVyLCBhcHBseSBmaWx0ZXJcbiAgICBpZiAoX3ZhbHVlVHlwZXMyLmRlZmF1bHRbX2tleTJdICYmICgoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZSkgfHwgKDAsIF91dGlscy5pc09iaikodmFsdWUpKSAmJiBfdmFsdWVUeXBlczIuZGVmYXVsdFtfa2V5Ml0udHJhbnNmb3JtKSB7XG4gICAgICB2YWx1ZSA9IF92YWx1ZVR5cGVzMi5kZWZhdWx0W19rZXkyXS50cmFuc2Zvcm0odmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRbX2tleTJdKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gX2tleTIgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgICB0cmFuc2Zvcm1IYXNaID0gX2tleTIgPT09IHRyYW5zbGF0ZU1hcC56ID8gdHJ1ZSA6IHRyYW5zZm9ybUhhc1o7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKF9rZXkyLCB0cnVlKSArICc6JyArIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHdlIGhhdmUgdHJhbnNmb3JtIHByb3BzLCBidWlsZCBhIHRyYW5zZm9ybSBzdHJpbmdcbiAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgIGlmICghdHJhbnNmb3JtSGFzWiAmJiBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IHRyYW5zbGF0ZU1hcC56ICsgJygwKSc7XG4gICAgfVxuXG4gICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoJ3RyYW5zZm9ybScsIHRydWUpICsgJzonICsgdHJhbnNmb3JtU3RyaW5nO1xuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IHByb3BlcnR5U3RyaW5nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzSmxibVJsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUppZFdsc1pGTjBlV3hsVUhKdmNHVnlkSGxUZEhKcGJtY2lMQ0pVVWtGT1UweEJWRVVpTENKMGNtRnVjMnhoZEdWTllYQWlMQ0o0SWl3aWVTSXNJbm9pTENKbGJHVnRaVzUwSWl3aWMzUmhkR1VpTENKamFHRnVaMlZrVm1Gc2RXVnpJaXdpWlc1aFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjRpTENKd2NtOXdaWEowZVZOMGNtbHVaeUlzSW5SeVlXNXpabTl5YlZOMGNtbHVaeUlzSW1oaGMxUnlZVzV6Wm05eWJTSXNJblJ5WVc1elptOXliVWhoYzFvaUxDSnVkVzFEYUdGdVoyVmtWbUZzZFdWeklpd2liR1Z1WjNSb0lpd2lhU0lzSW10bGVTSXNJbWx1WkdWNFQyWWlMQ0p3ZFhOb0lpd2lkRzkwWVd4T2RXMURhR0Z1WjJWa1ZtRnNkV1Z6SWl3aWRtRnNkV1VpTENKMGNtRnVjMlp2Y20waUxDSnpkSGxzWlNJc0ltTnpjMVJsZUhRaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRlpkMEpCTEhkQ096dEJRVnA0UWpzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVVkJMRWxCUVUxRExGbEJRVmtzVjBGQmJFSTdRVUZEUVN4SlFVRk5ReXhsUVVGbE8wRkJRMjVDUXl4TFFVRkhSaXhaUVVGWkxFZEJSRWs3UVVGRmJrSkhMRXRCUVVkSUxGbEJRVmtzUjBGR1NUdEJRVWR1UWtrc1MwRkJSMG9zV1VGQldUdEJRVWhKTEVOQlFYSkNPenRCUVUxbExGTkJRVk5FTEhkQ1FVRlVMRU5CUVd0RFRTeFBRVUZzUXl4RlFVRXlRME1zUzBGQk0wTXNSVUZCYTBSRExHRkJRV3hFTEVWQlFXbEZReXd3UWtGQmFrVXNSVUZCTmtZN1FVRkRNVWNzVFVGQlNVTXNhVUpCUVdsQ0xFVkJRWEpDTzBGQlEwRXNUVUZCU1VNc2EwSkJRV3RDTEVWQlFYUkNPMEZCUTBFc1RVRkJTVU1zWlVGQlpTeExRVUZ1UWp0QlFVTkJMRTFCUVVsRExHZENRVUZuUWl4TFFVRndRanM3UVVGRlFUdEJRVU5CTzBGQlEwRXNUVUZCVFVNc2JVSkJRVzFDVGl4alFVRmpUeXhOUVVGMlF6dEJRVU5CTEU5QlFVc3NTVUZCU1VNc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpSaXhuUWtGQmNFSXNSVUZCYzBORkxFZEJRWFJETEVWQlFUSkRPMEZCUTNwRExGRkJRVTFETEUxQlFVMVVMR05CUVdOUkxFTkJRV1FzUTBGQldqczdRVUZGUVR0QlFVTkJPMEZCUTBFc1VVRkJTU3g1UWtGQlpVTXNSMEZCWml4RFFVRktMRVZCUVhsQ08wRkJRM1pDVEN4eFFrRkJaU3hKUVVGbU96dEJRVVZCTEZkQlFVc3NTVUZCU1Vzc1NVRkJWQ3hKUVVGblFsWXNTMEZCYUVJc1JVRkJkVUk3UVVGRGNrSXNXVUZCU1N4NVFrRkJaVlVzU1VGQlppeExRVUYxUWxRc1kwRkJZMVVzVDBGQlpDeERRVUZ6UWtRc1NVRkJkRUlzVFVGQkswSXNRMEZCUXl4RFFVRXpSQ3hGUVVFNFJEdEJRVU0xUkZRc2QwSkJRV05YTEVsQlFXUXNRMEZCYlVKR0xFbEJRVzVDTzBGQlEwUTdRVUZEUmpzN1FVRkZSRHRCUVVORU8wRkJRMFk3TzBGQlJVUXNUVUZCVFVjc2QwSkJRWGRDV2l4alFVRmpUeXhOUVVFMVF6dEJRVU5CTEU5QlFVc3NTVUZCU1VNc1MwRkJTU3hEUVVGaUxFVkJRV2RDUVN4TFFVRkpTU3h4UWtGQmNFSXNSVUZCTWtOS0xFbEJRVE5ETEVWQlFXZEVPMEZCUXpsRExGRkJRVWxETEZGQlFVMVVMR05CUVdOUkxFVkJRV1FzUTBGQlZqdEJRVU5CTEZGQlFVbExMRkZCUVZGa0xFMUJRVTFWTEV0QlFVNHNRMEZCV2pzN1FVRkZRU3hSUVVGSlppeGhRVUZoWlN4TFFVRmlMRU5CUVVvc1JVRkJkVUk3UVVGRGNrSkJMR05CUVUxbUxHRkJRV0ZsTEV0QlFXSXNRMEZCVGp0QlFVTkVPenRCUVVWRU8wRkJRMEVzVVVGQlNTeHhRa0ZCVjBFc1MwRkJXQ3hOUVVGdlFpeHJRa0ZCVFVrc1MwRkJUaXhMUVVGblFpeHJRa0ZCVFVFc1MwRkJUaXhEUVVGd1F5eExRVUZ4UkN4eFFrRkJWMG9zUzBGQldDeEZRVUZuUWtzc1UwRkJla1VzUlVGQmIwWTdRVUZEYkVaRUxHTkJRVkVzY1VKQlFWZEtMRXRCUVZnc1JVRkJaMEpMTEZOQlFXaENMRU5CUVRCQ1JDeExRVUV4UWl4RFFVRlNPMEZCUTBRN08wRkJSVVFzVVVGQlNTeDVRa0ZCWlVvc1MwRkJaaXhEUVVGS0xFVkJRWGxDTzBGQlEzWkNUaXg1UWtGQmJVSk5MRkZCUVUwc1IwRkJUaXhIUVVGWlNTeExRVUZhTEVkQlFXOUNMRWxCUVhaRE8wRkJRMEZTTEhOQ1FVRnBRa2tzVlVGQlVXWXNZVUZCWVVjc1EwRkJkRUlzUjBGQk1rSXNTVUZCTTBJc1IwRkJhME5STEdGQlFXeEVPMEZCUlVRc1MwRktSQ3hOUVVsUE8wRkJRMHhJTEhkQ1FVRnJRaXhOUVVGTkxIZENRVUZUVHl4TFFVRlVMRVZCUVdNc1NVRkJaQ3hEUVVGT0xFZEJRVFJDTEVkQlFUVkNMRWRCUVd0RFNTeExRVUZ3UkR0QlFVTkVPMEZCUTBZN08wRkJSVVE3UVVGRFFTeE5RVUZKVkN4WlFVRktMRVZCUVd0Q08wRkJRMmhDTEZGQlFVa3NRMEZCUTBNc1lVRkJSQ3hKUVVGclFrb3NNRUpCUVhSQ0xFVkJRV3RFTzBGQlEyaEVSU3g1UWtGQmJVSlVMR0ZCUVdGSExFTkJRV0lzUjBGQmFVSXNTMEZCY0VNN1FVRkRSRHM3UVVGRlJFc3NjMEpCUVd0Q0xFMUJRVTBzZDBKQlFWTXNWMEZCVkN4RlFVRnpRaXhKUVVGMFFpeERRVUZPTEVkQlFXOURMRWRCUVhCRExFZEJRVEJEUXl4bFFVRTFSRHRCUVVORU96dEJRVVZFVEN4VlFVRlJhVUlzUzBGQlVpeERRVUZqUXl4UFFVRmtMRWxCUVhsQ1pDeGpRVUY2UWp0QlFVTkVJaXdpWm1sc1pTSTZJbkpsYm1SbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCMGNtRnVjMlp2Y20xUWNtOXdjeUJtY205dElDY3VMM1J5WVc1elptOXliUzF3Y205d2N5YzdYRzVwYlhCdmNuUWdkbUZzZFdWVWVYQmxjeUJtY205dElDY3VMM1poYkhWbExYUjVjR1Z6Snp0Y2JtbHRjRzl5ZENCd2NtVm1hWGhsY2lCbWNtOXRJQ2N1TDNCeVpXWnBlR1Z5Snp0Y2JtbHRjRzl5ZENCN0lHbHpUblZ0TENCcGMwOWlhaUI5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJRlJTUVU1VFRFRlVSU0E5SUNkMGNtRnVjMnhoZEdVbk8xeHVZMjl1YzNRZ2RISmhibk5zWVhSbFRXRndJRDBnZTF4dUlDQjRPaUJVVWtGT1UweEJWRVVnS3lBbldDY3NYRzRnSUhrNklGUlNRVTVUVEVGVVJTQXJJQ2RaSnl4Y2JpQWdlam9nVkZKQlRsTk1RVlJGSUNzZ0oxb25YRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCaWRXbHNaRk4wZVd4bFVISnZjR1Z5ZEhsVGRISnBibWNvWld4bGJXVnVkQ3dnYzNSaGRHVXNJR05vWVc1blpXUldZV3gxWlhNc0lHVnVZV0pzWlVoaGNtUjNZWEpsUVdOalpXeGxjbUYwYVc5dUtTQjdYRzRnSUd4bGRDQndjbTl3WlhKMGVWTjBjbWx1WnlBOUlDY25PMXh1SUNCc1pYUWdkSEpoYm5ObWIzSnRVM1J5YVc1bklEMGdKeWM3WEc0Z0lHeGxkQ0JvWVhOVWNtRnVjMlp2Y20wZ1BTQm1ZV3h6WlR0Y2JpQWdiR1YwSUhSeVlXNXpabTl5YlVoaGMxb2dQU0JtWVd4elpUdGNibHh1SUNBdkx5QkdhWEp6ZENCamFHVmpheUJwWmlCMGFHVnlaU0JoY21VZ1lXNTVJR05vWVc1blpXUWdkSEpoYm5ObWIzSnRJSFpoYkhWbGMxeHVJQ0F2THlCaGJtUWdhV1lnZEhKMVpTQmhaR1FnWVd4c0lIUnlZVzV6Wm05eWJTQjJZV3gxWlhOY2JpQWdZMjl1YzNRZ2JuVnRRMmhoYm1kbFpGWmhiSFZsY3lBOUlHTm9ZVzVuWldSV1lXeDFaWE11YkdWdVozUm9PMXh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVU5vWVc1blpXUldZV3gxWlhNN0lHa3JLeWtnZTF4dUlDQWdJR052Ym5OMElHdGxlU0E5SUdOb1lXNW5aV1JXWVd4MVpYTmJhVjA3WEc1Y2JpQWdJQ0F2THlCSlppQjBhR2x6SUdseklHRWdkSEpoYm5ObWIzSnRJSEJ5YjNCbGNuUjVMQ0JoWkdRZ1lXeHNJRzkwYUdWeUlIUnlZVzV6Wm05eWJTQndjbTl3YzF4dUlDQWdJQzh2SUhSdklHTm9ZVzVuWldSV1lXeDFaWE1nWVc1a0lIUm9aVzRnWW5KbFlXdGNiaUFnSUNCcFppQW9kSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnYUdGelZISmhibk5tYjNKdElEMGdkSEoxWlR0Y2JseHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhOMFlYUmxLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMVFjbTl3YzF0clpYbGRJQ1ltSUdOb1lXNW5aV1JXWVd4MVpYTXVhVzVrWlhoUFppaHJaWGtwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHTm9ZVzVuWldSV1lXeDFaWE11Y0hWemFDaHJaWGtwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdOdmJuTjBJSFJ2ZEdGc1RuVnRRMmhoYm1kbFpGWmhiSFZsY3lBOUlHTm9ZVzVuWldSV1lXeDFaWE11YkdWdVozUm9PMXh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUnZkR0ZzVG5WdFEyaGhibWRsWkZaaGJIVmxjenNnYVNzcktTQjdYRzRnSUNBZ2JHVjBJR3RsZVNBOUlHTm9ZVzVuWldSV1lXeDFaWE5iYVYwN1hHNGdJQ0FnYkdWMElIWmhiSFZsSUQwZ2MzUmhkR1ZiYTJWNVhUdGNibHh1SUNBZ0lHbG1JQ2gwY21GdWMyeGhkR1ZOWVhCYmEyVjVYU2tnZTF4dUlDQWdJQ0FnYTJWNUlEMGdkSEpoYm5Oc1lYUmxUV0Z3VzJ0bGVWMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdTV1lnZEdocGN5QnBjeUJoSUc1MWJXSmxjaUJ2Y2lCdlltcGxZM1FnWVc1a0lIZGxJR2hoZG1VZ1ptbHNkR1Z5TENCaGNIQnNlU0JtYVd4MFpYSmNiaUFnSUNCcFppQW9kbUZzZFdWVWVYQmxjMXRyWlhsZElDWW1JQ2hwYzA1MWJTaDJZV3gxWlNrZ2ZId2dhWE5QWW1vb2RtRnNkV1VwS1NBbUppQjJZV3gxWlZSNWNHVnpXMnRsZVYwdWRISmhibk5tYjNKdEtTQjdYRzRnSUNBZ0lDQjJZV3gxWlNBOUlIWmhiSFZsVkhsd1pYTmJhMlY1WFM1MGNtRnVjMlp2Y20wb2RtRnNkV1VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGNtRnVjMlp2Y20xUWNtOXdjMXRyWlhsZEtTQjdYRzRnSUNBZ0lDQjBjbUZ1YzJadmNtMVRkSEpwYm1jZ0t6MGdhMlY1SUNzZ0p5Z25JQ3NnZG1Gc2RXVWdLeUFuS1NBbk8xeHVJQ0FnSUNBZ2RISmhibk5tYjNKdFNHRnpXaUE5SUNoclpYa2dQVDA5SUhSeVlXNXpiR0YwWlUxaGNDNTZLU0EvSUhSeWRXVWdPaUIwY21GdWMyWnZjbTFJWVhOYU8xeHVYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhCeWIzQmxjblI1VTNSeWFXNW5JQ3M5SUNjN0p5QXJJSEJ5WldacGVHVnlLR3RsZVN3Z2RISjFaU2tnS3lBbk9pY2dLeUIyWVd4MVpUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQXZMeUJKWmlCM1pTQm9ZWFpsSUhSeVlXNXpabTl5YlNCd2NtOXdjeXdnWW5WcGJHUWdZU0IwY21GdWMyWnZjbTBnYzNSeWFXNW5YRzRnSUdsbUlDaG9ZWE5VY21GdWMyWnZjbTBwSUh0Y2JpQWdJQ0JwWmlBb0lYUnlZVzV6Wm05eWJVaGhjMW9nSmlZZ1pXNWhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0cElIdGNiaUFnSUNBZ0lIUnlZVzV6Wm05eWJWTjBjbWx1WnlBclBTQjBjbUZ1YzJ4aGRHVk5ZWEF1ZWlBcklDY29NQ2tuTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEJ5YjNCbGNuUjVVM1J5YVc1bklDczlJQ2M3SnlBcklIQnlaV1pwZUdWeUtDZDBjbUZ1YzJadmNtMG5MQ0IwY25WbEtTQXJJQ2M2SnlBcklIUnlZVzV6Wm05eWJWTjBjbWx1Wnp0Y2JpQWdmVnh1WEc0Z0lHVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0FyUFNCd2NtOXdaWEowZVZOMGNtbHVaenRjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL3JlbmRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgYXhlcyA9IFsnWCcsICdZJywgJ1onXTtcblxudmFyIHRyYW5zZm9ybVByb3BzID0ge1xuICB4OiB0cnVlLFxuICB5OiB0cnVlLFxuICB6OiB0cnVlXG59O1xuXG52YXIgU0NBTEUgPSAnc2NhbGUnO1xudmFyIFJPVEFURSA9ICdyb3RhdGUnO1xudmFyIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSc7XG52YXIgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBheGVzLmZvckVhY2goZnVuY3Rpb24gKGF4aXMpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtUHJvcHNbdGVybSArIGF4aXNdID0gdHJ1ZTtcbiAgfSk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNmb3JtUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNSeVlXNXpabTl5YlMxd2NtOXdjeTVxY3lKZExDSnVZVzFsY3lJNld5SmhlR1Z6SWl3aWRISmhibk5tYjNKdFVISnZjSE1pTENKNElpd2llU0lzSW5vaUxDSlRRMEZNUlNJc0lsSlBWRUZVUlNJc0lsUlNRVTVUUms5U1RWOVFSVkpUVUVWRFZFbFdSU0lzSWxSRlVrMVRJaXdpWm05eVJXRmphQ0lzSW5SbGNtMGlMQ0poZUdseklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hKUVVGTlFTeFBRVUZQTEVOQlFVTXNSMEZCUkN4RlFVRk5MRWRCUVU0c1JVRkJWeXhIUVVGWUxFTkJRV0k3TzBGQlJVRXNTVUZCU1VNc2FVSkJRV2xDTzBGQlEyNUNReXhMUVVGSExFbEJSR2RDTzBGQlJXNUNReXhMUVVGSExFbEJSbWRDTzBGQlIyNUNReXhMUVVGSE8wRkJTR2RDTEVOQlFYSkNPenRCUVUxQkxFbEJRVTFETEZGQlFWRXNUMEZCWkR0QlFVTkJMRWxCUVUxRExGTkJRVk1zVVVGQlpqdEJRVU5CTEVsQlFVMURMSGRDUVVGM1FpeHpRa0ZCT1VJN1FVRkRRU3hKUVVGTlF5eFJRVUZSTEVOQlFVTXNWMEZCUkN4RlFVRmpTQ3hMUVVGa0xFVkJRWEZDUXl4TlFVRnlRaXhGUVVFMlFpeE5RVUUzUWl4RlFVRnhRME1zY1VKQlFYSkRMRU5CUVdRN08wRkJSVUZPTEdWQlFXVkxMRTFCUVdZc1NVRkJlVUpNTEdWQlFXVkpMRXRCUVdZc1NVRkJkMEpLTEdWQlFXVk5MSEZDUVVGbUxFbEJRWGRETEVsQlFYcEdPenRCUVVWQlF5eE5RVUZOUXl4UFFVRk9MRU5CUVdNc1ZVRkJRME1zU1VGQlJEdEJRVUZCTEZOQlFWVldMRXRCUVV0VExFOUJRVXdzUTBGQllTeFZRVUZEUlN4SlFVRkVPMEZCUVVFc1YwRkJWVllzWlVGQlpWTXNUMEZCVDBNc1NVRkJkRUlzU1VGQk9FSXNTVUZCZUVNN1FVRkJRU3hIUVVGaUxFTkJRVlk3UVVGQlFTeERRVUZrT3p0clFrRkZaVllzWXlJc0ltWnBiR1VpT2lKMGNtRnVjMlp2Y20wdGNISnZjSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQmhlR1Z6SUQwZ1d5ZFlKeXdnSjFrbkxDQW5XaWRkTzF4dVhHNXNaWFFnZEhKaGJuTm1iM0p0VUhKdmNITWdQU0I3WEc0Z0lIZzZJSFJ5ZFdVc1hHNGdJSGs2SUhSeWRXVXNYRzRnSUhvNklIUnlkV1ZjYm4wN1hHNWNibU52Ym5OMElGTkRRVXhGSUQwZ0ozTmpZV3hsSnp0Y2JtTnZibk4wSUZKUFZFRlVSU0E5SUNkeWIzUmhkR1VuTzF4dVkyOXVjM1FnVkZKQlRsTkdUMUpOWDFCRlVsTlFSVU5VU1ZaRklEMGdKM1J5WVc1elptOXliVkJsY25Od1pXTjBhWFpsSnp0Y2JtTnZibk4wSUZSRlVrMVRJRDBnV3lkMGNtRnVjMnhoZEdVbkxDQlRRMEZNUlN3Z1VrOVVRVlJGTENBbmMydGxkeWNzSUZSU1FVNVRSazlTVFY5UVJWSlRVRVZEVkVsV1JWMDdYRzVjYm5SeVlXNXpabTl5YlZCeWIzQnpXMUpQVkVGVVJWMGdQU0IwY21GdWMyWnZjbTFRY205d2MxdFRRMEZNUlYwZ1BTQjBjbUZ1YzJadmNtMVFjbTl3YzF0VVVrRk9VMFpQVWsxZlVFVlNVMUJGUTFSSlZrVmRJRDBnZEhKMVpUdGNibHh1VkVWU1RWTXVabTl5UldGamFDZ29kR1Z5YlNrZ1BUNGdZWGhsY3k1bWIzSkZZV05vS0NoaGVHbHpLU0E5UGlCMGNtRnVjMlp2Y20xUWNtOXdjMXQwWlhKdElDc2dZWGhwYzEwZ1BTQjBjblZsS1NrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIUnlZVzV6Wm05eWJWQnliM0J6T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvdHJhbnNmb3JtLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3ZhbHVlLXR5cGVzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgLy8gQ29sb3IgcHJvcHNcbiAgY29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBiYWNrZ3JvdW5kQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBvdXRsaW5lQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBmaWxsOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgc3Ryb2tlOiBfdmFsdWVUeXBlcy5jb2xvcixcblxuICAvLyBCb3JkZXIgcHJvcHNcbiAgYm9yZGVyQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJUb3BDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlclJpZ2h0Q29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJCb3R0b21Db2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlckxlZnRDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlclJhZGl1czogX3ZhbHVlVHlwZXMucHgsXG5cbiAgLy8gUG9zaXRpb25pbmdcbiAgd2lkdGg6IF92YWx1ZVR5cGVzLnB4LFxuICBoZWlnaHQ6IF92YWx1ZVR5cGVzLnB4LFxuICB0b3A6IF92YWx1ZVR5cGVzLnB4LFxuICBsZWZ0OiBfdmFsdWVUeXBlcy5weCxcbiAgYm90dG9tOiBfdmFsdWVUeXBlcy5weCxcbiAgcmlnaHQ6IF92YWx1ZVR5cGVzLnB4LFxuXG4gIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gIHJvdGF0ZTogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgcm90YXRlWDogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgcm90YXRlWTogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgcm90YXRlWjogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgc2NhbGU6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVg6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVk6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVo6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBza2V3WDogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgc2tld1k6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIGRpc3RhbmNlOiBfdmFsdWVUeXBlcy5weCxcbiAgdHJhbnNsYXRlWDogX3ZhbHVlVHlwZXMucHgsXG4gIHRyYW5zbGF0ZVk6IF92YWx1ZVR5cGVzLnB4LFxuICB0cmFuc2xhdGVaOiBfdmFsdWVUeXBlcy5weCxcbiAgcGVyc3BlY3RpdmU6IF92YWx1ZVR5cGVzLnB4LFxuICBvcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM1poYkhWbExYUjVjR1Z6TG1weklsMHNJbTVoYldWeklqcGJJbU52Ykc5eUlpd2lZbUZqYTJkeWIzVnVaRU52Ykc5eUlpd2liM1YwYkdsdVpVTnZiRzl5SWl3aVptbHNiQ0lzSW5OMGNtOXJaU0lzSW1KdmNtUmxja052Ykc5eUlpd2lZbTl5WkdWeVZHOXdRMjlzYjNJaUxDSmliM0prWlhKU2FXZG9kRU52Ykc5eUlpd2lZbTl5WkdWeVFtOTBkRzl0UTI5c2IzSWlMQ0ppYjNKa1pYSk1aV1owUTI5c2IzSWlMQ0ppYjNKa1pYSlNZV1JwZFhNaUxDSjNhV1IwYUNJc0ltaGxhV2RvZENJc0luUnZjQ0lzSW14bFpuUWlMQ0ppYjNSMGIyMGlMQ0p5YVdkb2RDSXNJbkp2ZEdGMFpTSXNJbkp2ZEdGMFpWZ2lMQ0p5YjNSaGRHVlpJaXdpY205MFlYUmxXaUlzSW5OallXeGxJaXdpYzJOaGJHVllJaXdpYzJOaGJHVlpJaXdpYzJOaGJHVmFJaXdpYzJ0bGQxZ2lMQ0p6YTJWM1dTSXNJbVJwYzNSaGJtTmxJaXdpZEhKaGJuTnNZWFJsV0NJc0luUnlZVzV6YkdGMFpWa2lMQ0owY21GdWMyeGhkR1ZhSWl3aWNHVnljM0JsWTNScGRtVWlMQ0p2Y0dGamFYUjVJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN08ydENRVU5sTzBGQlEySTdRVUZEUVVFc01FSkJSbUU3UVVGSFlrTXNiME5CU0dFN1FVRkpZa01zYVVOQlNtRTdRVUZMWWtNc2VVSkJUR0U3UVVGTllrTXNNa0pCVG1FN08wRkJVV0k3UVVGRFFVTXNaME5CVkdFN1FVRlZZa01zYlVOQlZtRTdRVUZYWWtNc2NVTkJXR0U3UVVGWllrTXNjME5CV21FN1FVRmhZa01zYjBOQlltRTdRVUZqWWtNc09FSkJaR0U3TzBGQlowSmlPMEZCUTBGRExIVkNRV3BDWVR0QlFXdENZa01zZDBKQmJFSmhPMEZCYlVKaVF5eHhRa0Z1UW1FN1FVRnZRbUpETEhOQ1FYQkNZVHRCUVhGQ1lrTXNkMEpCY2tKaE8wRkJjMEppUXl4MVFrRjBRbUU3TzBGQmQwSmlPMEZCUTBGRExEWkNRWHBDWVR0QlFUQkNZa01zT0VKQk1VSmhPMEZCTWtKaVF5dzRRa0V6UW1FN1FVRTBRbUpETERoQ1FUVkNZVHRCUVRaQ1lrTXNNRUpCTjBKaE8wRkJPRUppUXl3eVFrRTVRbUU3UVVFclFtSkRMREpDUVM5Q1lUdEJRV2REWWtNc01rSkJhRU5oTzBGQmFVTmlReXcwUWtGcVEyRTdRVUZyUTJKRExEUkNRV3hEWVR0QlFXMURZa01zTUVKQmJrTmhPMEZCYjBOaVF5dzBRa0Z3UTJFN1FVRnhRMkpETERSQ1FYSkRZVHRCUVhORFlrTXNORUpCZEVOaE8wRkJkVU5pUXl3MlFrRjJRMkU3UVVGM1EySkRPMEZCZUVOaExFTWlMQ0ptYVd4bElqb2lkbUZzZFdVdGRIbHdaWE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJoYkhCb1lTd2dZMjlzYjNJc0lHUmxaM0psWlhNc0lITmpZV3hsTENCd2VDQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTJZV3gxWlMxMGVYQmxjeWM3SUZ4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQXZMeUJEYjJ4dmNpQndjbTl3YzF4dUlDQmpiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHSmhZMnRuY205MWJtUkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHOTFkR3hwYm1WRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdacGJHdzZJR052Ykc5eUxGeHVJQ0J6ZEhKdmEyVTZJR052Ykc5eUxGeHVYRzRnSUM4dklFSnZjbVJsY2lCd2NtOXdjMXh1SUNCaWIzSmtaWEpEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0p2Y21SbGNsUnZjRU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdZbTl5WkdWeVVtbG5hSFJEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0p2Y21SbGNrSnZkSFJ2YlVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnWW05eVpHVnlUR1ZtZEVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnWW05eVpHVnlVbUZrYVhWek9pQndlQ3hjYmx4dUlDQXZMeUJRYjNOcGRHbHZibWx1WjF4dUlDQjNhV1IwYURvZ2NIZ3NYRzRnSUdobGFXZG9kRG9nY0hnc0lDQmNiaUFnZEc5d09pQndlQ3hjYmlBZ2JHVm1kRG9nY0hnc1hHNGdJR0p2ZEhSdmJUb2djSGdzWEc0Z0lISnBaMmgwT2lCd2VDeGNibHh1SUNBdkx5QlVjbUZ1YzJadmNtMGdjSEp2Y0dWeWRHbGxjMXh1SUNCeWIzUmhkR1U2SUdSbFozSmxaWE1zWEc0Z0lISnZkR0YwWlZnNklHUmxaM0psWlhNc1hHNGdJSEp2ZEdGMFpWazZJR1JsWjNKbFpYTXNYRzRnSUhKdmRHRjBaVm82SUdSbFozSmxaWE1zWEc0Z0lITmpZV3hsT2lCelkyRnNaU3hjYmlBZ2MyTmhiR1ZZT2lCelkyRnNaU3hjYmlBZ2MyTmhiR1ZaT2lCelkyRnNaU3hjYmlBZ2MyTmhiR1ZhT2lCelkyRnNaU3hjYmlBZ2MydGxkMWc2SUdSbFozSmxaWE1zWEc0Z0lITnJaWGRaT2lCa1pXZHlaV1Z6TEZ4dUlDQmthWE4wWVc1alpUb2djSGdzWEc0Z0lIUnlZVzV6YkdGMFpWZzZJSEI0TEZ4dUlDQjBjbUZ1YzJ4aGRHVlpPaUJ3ZUN4Y2JpQWdkSEpoYm5Oc1lYUmxXam9nY0hnc1hHNGdJSEJsY25Od1pXTjBhWFpsT2lCd2VDeGNiaUFnYjNCaFkybDBlVG9nWVd4d2FHRmNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvdmFsdWUtdHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBjYW1lbENhY2hlID0ge307XG52YXIgZGFzaENhY2hlID0ge307XG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcycsICcnXTtcbnZhciBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbnZhciB0ZXN0RWxlbWVudCA9IHZvaWQgMDtcblxuLypcbiAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbnZhciB0ZXN0UHJlZml4ID0gZnVuY3Rpb24gKGtleSkge1xuICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICB2YXIgbm9QcmVmaXggPSBwcmVmaXggPT09ICcnO1xuICAgIHZhciBwcmVmaXhlZFByb3BlcnR5TmFtZSA9IG5vUHJlZml4ID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgaWYgKHByZWZpeGVkUHJvcGVydHlOYW1lIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICBjYW1lbENhY2hlW2tleV0gPSBwcmVmaXhlZFByb3BlcnR5TmFtZTtcbiAgICAgIGRhc2hDYWNoZVtrZXldID0gJycgKyAobm9QcmVmaXggPyAnJyA6ICctJykgKyAoMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShwcmVmaXhlZFByb3BlcnR5TmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoa2V5LCBhc0Rhc2hDYXNlKSB7XG4gIHZhciBjYWNoZSA9IGFzRGFzaENhc2UgPyBkYXNoQ2FjaGUgOiBjYW1lbENhY2hlO1xuXG4gIGlmICghY2FjaGVba2V5XSkge1xuICAgIHRlc3RQcmVmaXgoa2V5KTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZVtrZXldO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM0J5WldacGVHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTmhiV1ZzUTJGamFHVWlMQ0prWVhOb1EyRmphR1VpTENKd2NtVm1hWGhsY3lJc0ltNTFiVkJ5WldacGVHVnpJaXdpYkdWdVozUm9JaXdpZEdWemRFVnNaVzFsYm5RaUxDSjBaWE4wVUhKbFptbDRJaXdpYTJWNUlpd2laRzlqZFcxbGJuUWlMQ0pqY21WaGRHVkZiR1Z0Wlc1MElpd2lhU0lzSW5CeVpXWnBlQ0lzSW01dlVISmxabWw0SWl3aWNISmxabWw0WldSUWNtOXdaWEowZVU1aGJXVWlMQ0pqYUdGeVFYUWlMQ0owYjFWd2NHVnlRMkZ6WlNJc0luTnNhV05sSWl3aWMzUjViR1VpTENKaGMwUmhjMmhEWVhObElpd2lZMkZqYUdVaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3UVVGRlFTeEpRVUZOUVN4aFFVRmhMRVZCUVc1Q08wRkJRMEVzU1VGQlRVTXNXVUZCV1N4RlFVRnNRanRCUVVOQkxFbEJRVTFETEZkQlFWY3NRMEZCUXl4UlFVRkVMRVZCUVZVc1MwRkJWaXhGUVVGblFpeEhRVUZvUWl4RlFVRnZRaXhKUVVGd1FpeEZRVUV3UWl4RlFVRXhRaXhEUVVGcVFqdEJRVU5CTEVsQlFVMURMR05CUVdORUxGTkJRVk5GTEUxQlFUZENPMEZCUTBFc1NVRkJTVU1zYjBKQlFVbzdPMEZCUlVFN096czdPenRCUVUxQkxFbEJRVTFETEdGQlFXRXNWVUZCUTBNc1IwRkJSQ3hGUVVGVE8wRkJRekZDUml4blFrRkJZMEVzWlVGQlpVY3NVMEZCVTBNc1lVRkJWQ3hEUVVGMVFpeExRVUYyUWl4RFFVRTNRanM3UVVGRlFTeFBRVUZMTEVsQlFVbERMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1ZBc1YwRkJjRUlzUlVGQmFVTlBMRWRCUVdwRExFVkJRWE5ETzBGQlEzQkRMRkZCUVUxRExGTkJRVk5VTEZOQlFWTlJMRU5CUVZRc1EwRkJaanRCUVVOQkxGRkJRVTFGTEZkQlFWbEVMRmRCUVZjc1JVRkJOMEk3UVVGRFFTeFJRVUZOUlN4MVFrRkJkVUpFTEZkQlFWZE1MRWRCUVZnc1IwRkJhVUpKTEZOQlFWTktMRWxCUVVsUExFMUJRVW9zUTBGQlZ5eERRVUZZTEVWQlFXTkRMRmRCUVdRc1JVRkJWQ3hIUVVGMVExSXNTVUZCU1ZNc1MwRkJTaXhEUVVGVkxFTkJRVllzUTBGQmNrWTdPMEZCUlVFc1VVRkJTVWdzZDBKQlFYZENVaXhaUVVGWldTeExRVUY0UXl4RlFVRXJRenRCUVVNM1EycENMR2xDUVVGWFR5eEhRVUZZTEVsQlFXdENUU3h2UWtGQmJFSTdRVUZEUVZvc1owSkJRVlZOTEVkQlFWWXNWVUZCY1VKTExGZEJRVmNzUlVGQldDeEhRVUZuUWl4SFFVRnlReXhKUVVFMFF5eDNRa0ZCV1VNc2IwSkJRVm9zUTBGQk5VTTdRVUZEUkR0QlFVTkdPMEZCUTBZc1EwRmlSRHM3YTBKQlpXVXNWVUZCUTA0c1IwRkJSQ3hGUVVGTlZ5eFZRVUZPTEVWQlFYRkNPMEZCUTJ4RExFMUJRVTFETEZGQlFWRkVMR0ZCUVdGcVFpeFRRVUZpTEVkQlFYbENSQ3hWUVVGMlF6czdRVUZGUVN4TlFVRkpMRU5CUVVOdFFpeE5RVUZOV2l4SFFVRk9MRU5CUVV3c1JVRkJhVUk3UVVGRFprUXNaVUZCVjBNc1IwRkJXRHRCUVVORU96dEJRVVZFTEZOQlFVOVpMRTFCUVUxYUxFZEJRVTRzUTBGQlVEdEJRVU5FTEVNaUxDSm1hV3hsSWpvaWNISmxabWw0WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCallXMWxiRlJ2UkdGemFDQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU52Ym5OMElHTmhiV1ZzUTJGamFHVWdQU0I3ZlR0Y2JtTnZibk4wSUdSaGMyaERZV05vWlNBOUlIdDlPMXh1WTI5dWMzUWdjSEpsWm1sNFpYTWdQU0JiSjFkbFltdHBkQ2NzSjAxdmVpY3NKMDhuTENkdGN5Y3NJQ2NuWFR0Y2JtTnZibk4wSUc1MWJWQnlaV1pwZUdWeklEMGdjSEpsWm1sNFpYTXViR1Z1WjNSb08xeHViR1YwSUhSbGMzUkZiR1Z0Wlc1ME8xeHVYRzR2S2x4dUlDQlVaWE4wSUhOMGVXeGxJSEJ5YjNCbGNuUjVJR1p2Y2lCd2NtVm1hWGhsWkNCMlpYSnphVzl1WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRk4wZVd4bElIQnliM0JsY25SNVhHNGdJRUJ5WlhSMWNtNGdXM04wY21sdVoxMDZJRU5oWTJobFpDQndjbTl3WlhKMGVTQnVZVzFsWEc0cUwxeHVZMjl1YzNRZ2RHVnpkRkJ5WldacGVDQTlJQ2hyWlhrcElEMCtJSHRjYmlBZ2RHVnpkRVZzWlcxbGJuUWdQU0IwWlhOMFJXeGxiV1Z1ZENCOGZDQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nka2FYWW5LVHRjYmx4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlZCeVpXWnBlR1Z6T3lCcEt5c3BJSHRjYmlBZ0lDQmpiMjV6ZENCd2NtVm1hWGdnUFNCd2NtVm1hWGhsYzF0cFhUdGNiaUFnSUNCamIyNXpkQ0J1YjFCeVpXWnBlQ0E5SUNod2NtVm1hWGdnUFQwOUlDY25LVHRjYmlBZ0lDQmpiMjV6ZENCd2NtVm1hWGhsWkZCeWIzQmxjblI1VG1GdFpTQTlJRzV2VUhKbFptbDRJRDhnYTJWNUlEb2djSEpsWm1sNElDc2dhMlY1TG1Ob1lYSkJkQ2d3S1M1MGIxVndjR1Z5UTJGelpTZ3BJQ3NnYTJWNUxuTnNhV05sS0RFcE8xeHVYRzRnSUNBZ2FXWWdLSEJ5WldacGVHVmtVSEp2Y0dWeWRIbE9ZVzFsSUdsdUlIUmxjM1JGYkdWdFpXNTBMbk4wZVd4bEtTQjdYRzRnSUNBZ0lDQmpZVzFsYkVOaFkyaGxXMnRsZVYwZ1BTQndjbVZtYVhobFpGQnliM0JsY25SNVRtRnRaVHRjYmlBZ0lDQWdJR1JoYzJoRFlXTm9aVnRyWlhsZElEMGdZQ1I3S0c1dlVISmxabWw0SUQ4Z0p5Y2dPaUFuTFNjcGZTUjdZMkZ0Wld4VWIwUmhjMmdvY0hKbFptbDRaV1JRY205d1pYSjBlVTVoYldVcGZXQTdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hMlY1TENCaGMwUmhjMmhEWVhObEtTQTlQaUI3WEc0Z0lHTnZibk4wSUdOaFkyaGxJRDBnWVhORVlYTm9RMkZ6WlNBL0lHUmhjMmhEWVdOb1pTQTZJR05oYldWc1EyRmphR1U3WEc1Y2JpQWdhV1lnS0NGallXTm9aVnRyWlhsZEtTQjdYRzRnSUNBZ2RHVnpkRkJ5WldacGVDaHJaWGtwTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdOaFkyaGxXMnRsZVYwN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy9wcmVmaXhlci5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50LCBsZW5ndGgpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDAgKiBsZW5ndGggKyAncHgnO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBsZW5ndGgpIHtcbiAgdmFyIHN0eWxlcyA9IHt9O1xuICB2YXIgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgIGxlbmd0aDogMCxcbiAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gIH07XG4gIHZhciBoYXNEYXNoQXJyYXkgPSBmYWxzZTtcblxuICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFyIHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTFhCaGRHZ3ZZblZwYkdRdWFuTWlYU3dpYm1GdFpYTWlPbHNpY0dWeVkyVnVkRlJ2VUdsNFpXeHpJaXdpY0dWeVkyVnVkQ0lzSW14bGJtZDBhQ0lzSW5CaGNuTmxSbXh2WVhRaUxDSnpkR0YwWlNJc0luTjBlV3hsY3lJc0ltUmhjMmhCY25KaGVWTjBlV3hsY3lJc0luTndZV05wYm1jaUxDSm9ZWE5FWVhOb1FYSnlZWGtpTENKclpYa2lMQ0pvWVhOUGQyNVFjbTl3WlhKMGVTSXNJblpoYkhWbElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRVHM3T3pzN08wRkJUVUVzU1VGQlRVRXNhMEpCUVd0Q0xGVkJRVU5ETEU5QlFVUXNSVUZCVlVNc1RVRkJWanRCUVVGQkxGTkJRWE5DUXl4WFFVRlhSaXhQUVVGWUxFbEJRWE5DTEVkQlFYWkNMRWRCUVRoQ1F5eE5RVUU1UWl4SFFVRjFReXhKUVVFMVJEdEJRVUZCTEVOQlFYaENPenRyUWtGRlpTeFZRVUZEUlN4TFFVRkVMRVZCUVZGR0xFMUJRVklzUlVGQmJVSTdRVUZEYUVNc1RVRkJUVWNzVTBGQlV5eEZRVUZtTzBGQlEwRXNUVUZCVFVNc2EwSkJRV3RDTzBGQlEzUkNTaXhaUVVGUkxFTkJSR003UVVGRmRFSkxMR0ZCUVZOTUxGTkJRVk03UVVGR1NTeEhRVUY0UWp0QlFVbEJMRTFCUVVsTkxHVkJRV1VzUzBGQmJrSTdPMEZCUlVFc1QwRkJTeXhKUVVGSlF5eEhRVUZVTEVsQlFXZENUQ3hMUVVGb1FpeEZRVUYxUWp0QlFVTnlRaXhSUVVGSlFTeE5RVUZOVFN4alFVRk9MRU5CUVhGQ1JDeEhRVUZ5UWl4RFFVRktMRVZCUVN0Q08wRkJRemRDTEZWQlFVMUZMRkZCUVZGUUxFMUJRVTFMTEVkQlFVNHNRMEZCWkRzN1FVRkZRU3hqUVVGUlFTeEhRVUZTTzBGQlEwRXNZVUZCU3l4UlFVRk1PMEZCUTBFc1lVRkJTeXhUUVVGTU8wRkJRMFZFTEhsQ1FVRmxMRWxCUVdZN1FVRkRRVVlzTUVKQlFXZENSeXhIUVVGb1FpeEpRVUYxUWxRc1owSkJRV2RDVnl4TFFVRm9RaXhGUVVGMVFsUXNUVUZCZGtJc1EwRkJka0k3UVVGRFFUdEJRVU5HTEdGQlFVc3NVVUZCVER0QlFVTkZSeXhwUWtGQlR5eHRRa0ZCVUN4SlFVRTRRa3dzWjBKQlFXZENMRU5CUVVOWExFdEJRV3BDTEVWQlFYZENWQ3hOUVVGNFFpeERRVUU1UWp0QlFVTkJPMEZCUTBZN1FVRkRSVWNzYVVKQlFVOUpMRWRCUVZBc1NVRkJZMFVzUzBGQlpEdEJRVlpHTzBGQldVUTdRVUZEUmpzN1FVRkZSQ3hOUVVGSlNDeFpRVUZLTEVWQlFXdENPMEZCUTJoQ1NDeFhRVUZQTEd0Q1FVRlFMRWxCUVRaQ1F5eG5Ra0ZCWjBKS0xFMUJRV2hDTEVkQlFYbENMRWRCUVhwQ0xFZEJRU3RDU1N4blFrRkJaMEpETEU5QlFUVkZPMEZCUTBRN08wRkJSVVFzVTBGQlQwWXNUVUZCVUR0QlFVTkVMRU1pTENKbWFXeGxJam9pWW5WcGJHUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNCRGIyNTJaWEowSUhCbGNtTmxiblJoWjJVZ2RHOGdjR2w0Wld4elhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCbGNtTmxiblJoWjJVZ2IyWWdkRzkwWVd3Z2JHVnVaM1JvWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZHOTBZV3dnYkdWdVozUm9YRzRxTDF4dVkyOXVjM1FnY0dWeVkyVnVkRlJ2VUdsNFpXeHpJRDBnS0hCbGNtTmxiblFzSUd4bGJtZDBhQ2tnUFQ0Z0tIQmhjbk5sUm14dllYUW9jR1Z5WTJWdWRDa2dMeUF4TURBcElDb2diR1Z1WjNSb0lDc2dKM0I0Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tITjBZWFJsTENCc1pXNW5kR2dwSUQwK0lIdGNiaUFnWTI5dWMzUWdjM1I1YkdWeklEMGdlMzA3WEc0Z0lHTnZibk4wSUdSaGMyaEJjbkpoZVZOMGVXeGxjeUE5SUh0Y2JpQWdJQ0JzWlc1bmRHZzZJREFzWEc0Z0lDQWdjM0JoWTJsdVp6b2diR1Z1WjNSb0lDc2dKM0I0SjF4dUlDQjlPMXh1SUNCc1pYUWdhR0Z6UkdGemFFRnljbUY1SUQwZ1ptRnNjMlU3WEc1Y2JpQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlITjBZWFJsS1NCN1hHNGdJQ0FnYVdZZ0tITjBZWFJsTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnYzNSaGRHVmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ2MzZHBkR05vSUNoclpYa3BJSHRjYmlBZ0lDQWdJR05oYzJVZ0oyeGxibWQwYUNjNlhHNGdJQ0FnSUNCallYTmxJQ2R6Y0dGamFXNW5KenBjYmlBZ0lDQWdJQ0FnYUdGelJHRnphRUZ5Y21GNUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ1pHRnphRUZ5Y21GNVUzUjViR1Z6VzJ0bGVWMGdQU0J3WlhKalpXNTBWRzlRYVhobGJITW9kbUZzZFdVc0lHeGxibWQwYUNrN1hHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnWTJGelpTQW5iMlptYzJWMEp6cGNiaUFnSUNBZ0lDQWdjM1I1YkdWeld5ZHpkSEp2YTJVdFpHRnphRzltWm5ObGRDZGRJRDBnY0dWeVkyVnVkRlJ2VUdsNFpXeHpLQzEyWVd4MVpTd2diR1Z1WjNSb0tUdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNCa1pXWmhkV3gwT2x4dUlDQWdJQ0FnSUNCemRIbHNaWE5iYTJWNVhTQTlJSFpoYkhWbE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHbG1JQ2hvWVhORVlYTm9RWEp5WVhrcElIdGNiaUFnSUNCemRIbHNaWE5iSjNOMGNtOXJaUzFrWVhOb1lYSnlZWGtuWFNBOUlHUmhjMmhCY25KaGVWTjBlV3hsY3k1c1pXNW5kR2dnS3lBbklDY2dLeUJrWVhOb1FYSnlZWGxUZEhsc1pYTXVjM0JoWTJsdVp6dGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnpkSGxzWlhNN1hHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgWkVST19OT1RfWkVSTyA9IDAuMDAwMTtcblxuZnVuY3Rpb24gYnVpbGQoc3RhdGUsIGRhdGEpIHtcbiAgdmFyIGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIHNjYWxlID0gc3RhdGUuc2NhbGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlIHx8IFpFUk9fTk9UX1pFUk8gOiBzdGF0ZS5zY2FsZVggfHwgMTtcbiAgdmFyIHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxO1xuICB2YXIgdHJhbnNmb3JtT3JpZ2luWCA9IGRhdGEud2lkdGggKiAoKHN0YXRlLm9yaWdpblggfHwgNTApIC8gMTAwKSArIGRhdGEueDtcbiAgdmFyIHRyYW5zZm9ybU9yaWdpblkgPSBkYXRhLmhlaWdodCAqICgoc3RhdGUub3JpZ2luWSB8fCA1MCkgLyAxMDApICsgZGF0YS55O1xuICB2YXIgc2NhbGVUcmFuc2Zvcm1YID0gLXRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKTtcbiAgdmFyIHNjYWxlVHJhbnNmb3JtWSA9IC10cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpO1xuICB2YXIgc2NhbGVSZXBsYWNlWCA9IHRyYW5zZm9ybU9yaWdpblggLyBzY2FsZTtcbiAgdmFyIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZO1xuICB2YXIgdHJhbnNmb3JtID0ge1xuICAgIHRyYW5zbGF0ZTogJ3RyYW5zbGF0ZSgnICsgc3RhdGUudHJhbnNsYXRlWCArICcsICcgKyBzdGF0ZS50cmFuc2xhdGVZICsgJykgJyxcbiAgICBzY2FsZTogJ3RyYW5zbGF0ZSgnICsgc2NhbGVUcmFuc2Zvcm1YICsgJywgJyArIHNjYWxlVHJhbnNmb3JtWSArICcpIHNjYWxlKCcgKyBzY2FsZSArICcsICcgKyBzY2FsZVkgKyAnKSB0cmFuc2xhdGUoJyArIHNjYWxlUmVwbGFjZVggKyAnLCAnICsgc2NhbGVSZXBsYWNlWSArICcpICcsXG4gICAgcm90YXRlOiAncm90YXRlKCcgKyBzdGF0ZS5yb3RhdGUgKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWCArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5ZICsgJykgJyxcbiAgICBza2V3WDogJ3NrZXdYKCcgKyBzdGF0ZS5za2V3WCArICcpICcsXG4gICAgc2tld1k6ICdza2V3WSgnICsgc3RhdGUuc2tld1kgKyAnKSAnXG4gIH07XG5cbiAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHNbKDAsIF91dGlscy5jYW1lbFRvRGFzaCkoa2V5KV0gPSBzdGF0ZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgIGZvciAodmFyIF9rZXkgaW4gdHJhbnNmb3JtKSB7XG4gICAgICBpZiAodHJhbnNmb3JtLmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBfa2V5ID09PSAnc2NhbGUnID8gJzEnIDogJzAnO1xuICAgICAgICBwcm9wcy50cmFuc2Zvcm0gKz0gdHJhbnNmb3JtW19rZXldLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MMkoxYVd4a0xtcHpJbDBzSW01aGJXVnpJanBiSW1KMWFXeGtJaXdpV2tWU1QxOU9UMVJmV2tWU1R5SXNJbk4wWVhSbElpd2laR0YwWVNJc0ltaGhjMVJ5WVc1elptOXliU0lzSW5CeWIzQnpJaXdpYzJOaGJHVWlMQ0oxYm1SbFptbHVaV1FpTENKelkyRnNaVmdpTENKelkyRnNaVmtpTENKMGNtRnVjMlp2Y20xUGNtbG5hVzVZSWl3aWQybGtkR2dpTENKdmNtbG5hVzVZSWl3aWVDSXNJblJ5WVc1elptOXliVTl5YVdkcGJsa2lMQ0pvWldsbmFIUWlMQ0p2Y21sbmFXNVpJaXdpZVNJc0luTmpZV3hsVkhKaGJuTm1iM0p0V0NJc0luTmpZV3hsVkhKaGJuTm1iM0p0V1NJc0luTmpZV3hsVW1Wd2JHRmpaVmdpTENKelkyRnNaVkpsY0d4aFkyVlpJaXdpZEhKaGJuTm1iM0p0SWl3aWRISmhibk5zWVhSbElpd2lkSEpoYm5Oc1lYUmxXQ0lzSW5SeVlXNXpiR0YwWlZraUxDSnliM1JoZEdVaUxDSnphMlYzV0NJc0luTnJaWGRaSWl3aWEyVjVJaXdpYUdGelQzZHVVSEp2Y0dWeWRIa2lMQ0prWldaaGRXeDBWbUZzZFdVaUxDSnlaWEJzWVdObElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJTM2RDUVN4TE96dEJRVXg0UWpzN1FVRkRRVHM3T3pzN08wRkJSVUVzU1VGQlRVTXNaMEpCUVdkQ0xFMUJRWFJDT3p0QlFVVmxMRk5CUVZORUxFdEJRVlFzUTBGQlpVVXNTMEZCWml4RlFVRnpRa01zU1VGQmRFSXNSVUZCTkVJN1FVRkRla01zVFVGQlNVTXNaVUZCWlN4TFFVRnVRanRCUVVOQkxFMUJRVTFETEZGQlFWRXNSVUZCWkR0QlFVTkJMRTFCUVUxRExGRkJRVkZLTEUxQlFVMUpMRXRCUVU0c1MwRkJaMEpETEZOQlFXaENMRWRCUVRSQ1RDeE5RVUZOU1N4TFFVRk9MRWxCUVdWTUxHRkJRVE5ETEVkQlFUSkVReXhOUVVGTlRTeE5RVUZPTEVsQlFXZENMRU5CUVhwR08wRkJRMEVzVFVGQlRVTXNVMEZCVTFBc1RVRkJUVThzVFVGQlRpeExRVUZwUWtZc1UwRkJha0lzUjBGQk5rSk1MRTFCUVUxUExFMUJRVTRzU1VGQlowSlNMR0ZCUVRkRExFZEJRVFpFU3l4VFFVRlRMRU5CUVhKR08wRkJRMEVzVFVGQlRVa3NiVUpCUVcxQ1VDeExRVUZMVVN4TFFVRk1MRWxCUVdNc1EwRkJRMVFzVFVGQlRWVXNUMEZCVGl4SlFVRnBRaXhGUVVGc1FpeEpRVUYzUWl4SFFVRjBReXhKUVVFMlExUXNTMEZCUzFVc1EwRkJNMFU3UVVGRFFTeE5RVUZOUXl4dFFrRkJiVUpZTEV0QlFVdFpMRTFCUVV3c1NVRkJaU3hEUVVGRFlpeE5RVUZOWXl4UFFVRk9MRWxCUVdsQ0xFVkJRV3hDTEVsQlFYZENMRWRCUVhaRExFbEJRVGhEWWl4TFFVRkxZeXhEUVVFMVJUdEJRVU5CTEUxQlFVMURMR3RDUVVGclFpeERRVUZGVWl4blFrRkJSaXhKUVVGelFrb3NVVUZCVVN4RFFVRTVRaXhEUVVGNFFqdEJRVU5CTEUxQlFVMWhMR3RDUVVGclFpeERRVUZGVEN4blFrRkJSaXhKUVVGelFrd3NVMEZCVXl4RFFVRXZRaXhEUVVGNFFqdEJRVU5CTEUxQlFVMVhMR2RDUVVGblFsWXNiVUpCUVcxQ1NpeExRVUY2UXp0QlFVTkJMRTFCUVUxbExHZENRVUZuUWxBc2JVSkJRVzFDVEN4TlFVRjZRenRCUVVOQkxFMUJRVTFoTEZsQlFWazdRVUZEYUVKRExEaENRVUYzUW5KQ0xFMUJRVTF6UWl4VlFVRTVRaXhWUVVFMlEzUkNMRTFCUVUxMVFpeFZRVUZ1UkN4UFFVUm5RanRCUVVWb1FtNUNMREJDUVVGdlFsa3NaVUZCY0VJc1ZVRkJkME5ETEdWQlFYaERMR2RDUVVGclJXSXNTMEZCYkVVc1ZVRkJORVZITEUxQlFUVkZMRzlDUVVGcFIxY3NZVUZCYWtjc1ZVRkJiVWhETEdGQlFXNUlMRTlCUm1kQ08wRkJSMmhDU3l4M1FrRkJhMEo0UWl4TlFVRk5kMElzVFVGQmVFSXNWVUZCYlVOb1FpeG5Ra0ZCYmtNc1ZVRkJkMFJKTEdkQ1FVRjRSQ3hQUVVoblFqdEJRVWxvUW1Fc2MwSkJRV2RDZWtJc1RVRkJUWGxDTEV0QlFYUkNMRTlCU21kQ08wRkJTMmhDUXl4elFrRkJaMEl4UWl4TlFVRk5NRUlzUzBGQmRFSTdRVUZNWjBJc1IwRkJiRUk3TzBGQlVVRXNUMEZCU3l4SlFVRkpReXhIUVVGVUxFbEJRV2RDTTBJc1MwRkJhRUlzUlVGQmRVSTdRVUZEY2tJc1VVRkJTVUVzVFVGQlRUUkNMR05CUVU0c1EwRkJjVUpFTEVkQlFYSkNMRU5CUVVvc1JVRkJLMEk3UVVGRE4wSXNWVUZCU1N4NVFrRkJaVUVzUjBGQlppeERRVUZLTEVWQlFYbENPMEZCUTNaQ2VrSXNkVUpCUVdVc1NVRkJaanRCUVVORUxFOUJSa1FzVFVGRlR6dEJRVU5NUXl4alFVRk5MSGRDUVVGWmQwSXNSMEZCV2l4RFFVRk9MRWxCUVRCQ00wSXNUVUZCVFRKQ0xFZEJRVTRzUTBGQk1VSTdRVUZEUkR0QlFVTkdPMEZCUTBZN08wRkJSVVFzVFVGQlNYcENMRmxCUVVvc1JVRkJhMEk3UVVGRGFFSkRMRlZCUVUxcFFpeFRRVUZPTEVkQlFXdENMRVZCUVd4Q096dEJRVVZCTEZOQlFVc3NTVUZCU1U4c1NVRkJWQ3hKUVVGblFsQXNVMEZCYUVJc1JVRkJNa0k3UVVGRGVrSXNWVUZCU1VFc1ZVRkJWVkVzWTBGQlZpeERRVUY1UWtRc1NVRkJla0lzUTBGQlNpeEZRVUZ0UXp0QlFVTnFReXhaUVVGTlJTeGxRVUZuUWtZc1UwRkJVU3hQUVVGVUxFZEJRVzlDTEVkQlFYQkNMRWRCUVRCQ0xFZEJRUzlETzBGQlEwRjRRaXhqUVVGTmFVSXNVMEZCVGl4SlFVRnRRa0VzVlVGQlZVOHNTVUZCVml4RlFVRmxSeXhQUVVGbUxFTkJRWFZDTEZsQlFYWkNMRVZCUVhGRFJDeFpRVUZ5UXl4RFFVRnVRanRCUVVORU8wRkJRMFk3UVVGRFJqczdRVUZGUkN4VFFVRlBNVUlzUzBGQlVEdEJRVU5FSWl3aVptbHNaU0k2SW1KMWFXeGtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZMkZ0Wld4VWIwUmhjMmdnZlNCbWNtOXRJQ2N1TGk4dUxpOXBibU12ZFhScGJITW5PMXh1YVcxd2IzSjBJSFJ5WVc1elptOXliVkJ5YjNCeklHWnliMjBnSnk0dUwyTnpjeTkwY21GdWMyWnZjbTB0Y0hKdmNITW5PMXh1WEc1amIyNXpkQ0JhUlZKUFgwNVBWRjlhUlZKUElEMGdNQzR3TURBeE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmlkV2xzWkNoemRHRjBaU3dnWkdGMFlTa2dlMXh1SUNCc1pYUWdhR0Z6VkhKaGJuTm1iM0p0SUQwZ1ptRnNjMlU3WEc0Z0lHTnZibk4wSUhCeWIzQnpJRDBnZTMwN1hHNGdJR052Ym5OMElITmpZV3hsSUQwZ2MzUmhkR1V1YzJOaGJHVWdJVDA5SUhWdVpHVm1hVzVsWkNBL0lITjBZWFJsTG5OallXeGxJSHg4SUZwRlVrOWZUazlVWDFwRlVrOGdPaUJ6ZEdGMFpTNXpZMkZzWlZnZ2ZId2dNVHRjYmlBZ1kyOXVjM1FnYzJOaGJHVlpJRDBnYzNSaGRHVXVjMk5oYkdWWklDRTlQU0IxYm1SbFptbHVaV1FnUHlCemRHRjBaUzV6WTJGc1pWa2dmSHdnV2tWU1QxOU9UMVJmV2tWU1R5QTZJSE5qWVd4bElIeDhJREU3WEc0Z0lHTnZibk4wSUhSeVlXNXpabTl5YlU5eWFXZHBibGdnUFNCa1lYUmhMbmRwWkhSb0lDb2dLQ2h6ZEdGMFpTNXZjbWxuYVc1WUlIeDhJRFV3S1NBdklERXdNQ2tnS3lCa1lYUmhMbmc3WEc0Z0lHTnZibk4wSUhSeVlXNXpabTl5YlU5eWFXZHBibGtnUFNCa1lYUmhMbWhsYVdkb2RDQXFJQ2dvYzNSaGRHVXViM0pwWjJsdVdTQjhmQ0ExTUNrZ0x5QXhNREFwSUNzZ1pHRjBZUzU1TzF4dUlDQmpiMjV6ZENCelkyRnNaVlJ5WVc1elptOXliVmdnUFNBdElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ0tpQW9jMk5oYkdVZ0tpQXhLVHRjYmlBZ1kyOXVjM1FnYzJOaGJHVlVjbUZ1YzJadmNtMVpJRDBnTFNCMGNtRnVjMlp2Y20xUGNtbG5hVzVaSUNvZ0tITmpZV3hsV1NBcUlERXBPMXh1SUNCamIyNXpkQ0J6WTJGc1pWSmxjR3hoWTJWWUlEMGdkSEpoYm5ObWIzSnRUM0pwWjJsdVdDQXZJSE5qWVd4bE8xeHVJQ0JqYjI1emRDQnpZMkZzWlZKbGNHeGhZMlZaSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V1NBdklITmpZV3hsV1R0Y2JpQWdZMjl1YzNRZ2RISmhibk5tYjNKdElEMGdlMXh1SUNBZ0lIUnlZVzV6YkdGMFpUb2dZSFJ5WVc1emJHRjBaU2drZTNOMFlYUmxMblJ5WVc1emJHRjBaVmg5TENBa2UzTjBZWFJsTG5SeVlXNXpiR0YwWlZsOUtTQmdMRnh1SUNBZ0lITmpZV3hsT2lCZ2RISmhibk5zWVhSbEtDUjdjMk5oYkdWVWNtRnVjMlp2Y20xWWZTd2dKSHR6WTJGc1pWUnlZVzV6Wm05eWJWbDlLU0J6WTJGc1pTZ2tlM05qWVd4bGZTd2dKSHR6WTJGc1pWbDlLU0IwY21GdWMyeGhkR1VvSkh0elkyRnNaVkpsY0d4aFkyVllmU3dnSkh0elkyRnNaVkpsY0d4aFkyVlpmU2tnWUN4Y2JpQWdJQ0J5YjNSaGRHVTZJR0J5YjNSaGRHVW9KSHR6ZEdGMFpTNXliM1JoZEdWOUxDQWtlM1J5WVc1elptOXliVTl5YVdkcGJsaDlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGw5S1NCZ0xGeHVJQ0FnSUhOclpYZFlPaUJnYzJ0bGQxZ29KSHR6ZEdGMFpTNXphMlYzV0gwcElHQXNYRzRnSUNBZ2MydGxkMWs2SUdCemEyVjNXU2drZTNOMFlYUmxMbk5yWlhkWmZTa2dZRnh1SUNCOU8xeHVYRzRnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ6ZEdGMFpTa2dlMXh1SUNBZ0lHbG1JQ2h6ZEdGMFpTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0JwWmlBb2RISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTa2dlMXh1SUNBZ0lDQWdJQ0JvWVhOVWNtRnVjMlp2Y20wZ1BTQjBjblZsTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnY0hKdmNITmJZMkZ0Wld4VWIwUmhjMmdvYTJWNUtWMGdQU0J6ZEdGMFpWdHJaWGxkTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdsbUlDaG9ZWE5VY21GdWMyWnZjbTBwSUh0Y2JpQWdJQ0J3Y205d2N5NTBjbUZ1YzJadmNtMGdQU0FuSnp0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIwY21GdWMyWnZjbTBwSUh0Y2JpQWdJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMHVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JrWldaaGRXeDBWbUZzZFdVZ1BTQW9hMlY1SUQwOVBTQW5jMk5oYkdVbktTQS9JQ2N4SnlBNklDY3dKenRjYmlBZ0lDQWdJQ0FnY0hKdmNITXVkSEpoYm5ObWIzSnRJQ3M5SUhSeVlXNXpabTl5YlZ0clpYbGRMbkpsY0d4aFkyVW9MM1Z1WkdWbWFXNWxaQzluTENCa1pXWmhkV3gwVm1Gc2RXVXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQndjbTl3Y3p0Y2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3ZhbHVlLXR5cGVzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZmlsbDogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIHN0cm9rZTogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIHNjYWxlOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVYOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVZOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgZDogX3ZhbHVlVHlwZXMuY29tcGxleCxcbiAgcG9pbnRzOiBfdmFsdWVUeXBlcy5jb21wbGV4LFxuICBvcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYSxcbiAgZmlsbE9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhLFxuICBzdHJva2VPcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MM1poYkhWbExYUjVjR1Z6TG1weklsMHNJbTVoYldWeklqcGJJbVpwYkd3aUxDSnpkSEp2YTJVaUxDSnpZMkZzWlNJc0luTmpZV3hsV0NJc0luTmpZV3hsV1NJc0ltUWlMQ0p3YjJsdWRITWlMQ0p2Y0dGamFYUjVJaXdpWm1sc2JFOXdZV05wZEhraUxDSnpkSEp2YTJWUGNHRmphWFI1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPMnRDUVVWbE8wRkJRMkpCTEhsQ1FVUmhPMEZCUldKRExESkNRVVpoTzBGQlIySkRMREJDUVVoaE8wRkJTV0pETERKQ1FVcGhPMEZCUzJKRExESkNRVXhoTzBGQlRXSkRMSGRDUVU1aE8wRkJUMkpETERaQ1FWQmhPMEZCVVdKRExEUkNRVkpoTzBGQlUySkRMR2REUVZSaE8wRkJWV0pETzBGQlZtRXNReUlzSW1acGJHVWlPaUoyWVd4MVpTMTBlWEJsY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdGc2NHaGhMQ0JqYjJ4dmNpd2dZMjl0Y0d4bGVDd2djMk5oYkdVZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRtRnNkV1V0ZEhsd1pYTW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lHWnBiR3c2SUdOdmJHOXlMRnh1SUNCemRISnZhMlU2SUdOdmJHOXlMRnh1SUNCelkyRnNaVG9nYzJOaGJHVXNYRzRnSUhOallXeGxXRG9nYzJOaGJHVXNYRzRnSUhOallXeGxXVG9nYzJOaGJHVXNYRzRnSUdRNklHTnZiWEJzWlhnc1hHNGdJSEJ2YVc1MGN6b2dZMjl0Y0d4bGVDeGNiaUFnYjNCaFkybDBlVG9nWVd4d2FHRXNYRzRnSUdacGJHeFBjR0ZqYVhSNU9pQmhiSEJvWVN4Y2JpQWdjM1J5YjJ0bFQzQmhZMmwwZVRvZ1lXeHdhR0ZjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmcvdmFsdWUtdHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9