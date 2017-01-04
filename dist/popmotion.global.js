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
	exports.svgPath = exports.svg = exports.css = exports.Renderer = exports.value = exports.stagger = exports.tween = exports.pointer = exports.physics = exports.parallel = exports.offset = exports.delay = exports.crossFade = exports.composite = exports.chain = exports.blendTweens = exports.Action = exports.valueTypes = exports.transform = exports.easing = exports.calc = exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
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
	
	var _composite2 = __webpack_require__(8);
	
	var _composite3 = _interopRequireDefault(_composite2);
	
	var _crossFade2 = __webpack_require__(9);
	
	var _crossFade3 = _interopRequireDefault(_crossFade2);
	
	var _delay2 = __webpack_require__(10);
	
	var _delay3 = _interopRequireDefault(_delay2);
	
	var _offset2 = __webpack_require__(11);
	
	var _offset3 = _interopRequireDefault(_offset2);
	
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
	exports.composite = _composite3.default;
	exports.crossFade = _crossFade3.default;
	exports.delay = _delay3.default;
	exports.offset = _offset3.default;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOlsib25GcmFtZVN0YXJ0Iiwib25GcmFtZVVwZGF0ZSIsIm9uRnJhbWVSZW5kZXIiLCJvbkZyYW1lRW5kIiwiY2FuY2VsT25GcmFtZVN0YXJ0IiwiY2FuY2VsT25GcmFtZVVwZGF0ZSIsImNhbmNlbE9uRnJhbWVSZW5kZXIiLCJjYW5jZWxPbkZyYW1lRW5kIiwidGltZVNpbmNlTGFzdEZyYW1lIiwiY3VycmVudEZyYW1lVGltZXN0YW1wIiwiY2FsYyIsImVhc2luZyIsInRyYW5zZm9ybSIsInZhbHVlVHlwZXMiLCJBY3Rpb24iLCJibGVuZFR3ZWVucyIsImNoYWluIiwiY29tcG9zaXRlIiwiY3Jvc3NGYWRlIiwiZGVsYXkiLCJvZmZzZXQiLCJwYXJhbGxlbCIsInBoeXNpY3MiLCJwb2ludGVyIiwidHdlZW4iLCJzdGFnZ2VyIiwidmFsdWUiLCJSZW5kZXJlciIsImNzcyIsInN2ZyIsInN2Z1BhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7c0JBRUVBLFk7Ozs7OztzQkFDQUMsYTs7Ozs7O3NCQUNBQyxhOzs7Ozs7c0JBQ0FDLFU7Ozs7OztzQkFDQUMsa0I7Ozs7OztzQkFDQUMsbUI7Ozs7OztzQkFDQUMsbUI7Ozs7OztzQkFDQUMsZ0I7Ozs7OztzQkFDQUMsa0I7Ozs7OztzQkFDQUMscUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBR1VDLEk7UUFDQUMsTTtRQUNBQyxTO1FBQ0FDLFU7O0FBRVo7O1FBQ09DLE07UUFDQUMsVztRQUNBQyxLO1FBQ0FDLFM7UUFDQUMsUztRQUNBQyxLO1FBQ0FDLE07UUFDQUMsUTtRQUNBQyxPO1FBQ0FDLE87UUFDQUMsSztRQUNBQyxPO1FBQ0FDLEs7O0FBRVA7O1FBQ09DLFE7UUFDQUMsRztRQUNBQyxHO1FBQ0FDLE8iLCJmaWxlIjoicG9wbW90aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRnJhbWVzeW5jIHNjaGVkdWxlcnNcbmV4cG9ydCB7XG4gIG9uRnJhbWVTdGFydCxcbiAgb25GcmFtZVVwZGF0ZSxcbiAgb25GcmFtZVJlbmRlcixcbiAgb25GcmFtZUVuZCxcbiAgY2FuY2VsT25GcmFtZVN0YXJ0LFxuICBjYW5jZWxPbkZyYW1lVXBkYXRlLFxuICBjYW5jZWxPbkZyYW1lUmVuZGVyLFxuICBjYW5jZWxPbkZyYW1lRW5kLFxuICB0aW1lU2luY2VMYXN0RnJhbWUsXG4gIGN1cnJlbnRGcmFtZVRpbWVzdGFtcFxufSBmcm9tICcuL2ZyYW1lc3luYyc7XG5cbmV4cG9ydCAqIGFzIGNhbGMgZnJvbSAnLi9pbmMvY2FsYyc7XG5leHBvcnQgKiBhcyBlYXNpbmcgZnJvbSAnLi9pbmMvZWFzaW5nJztcbmV4cG9ydCAqIGFzIHRyYW5zZm9ybSBmcm9tICcuL2luYy90cmFuc2Zvcm1lcnMnO1xuZXhwb3J0ICogYXMgdmFsdWVUeXBlcyBmcm9tICcuL2luYy92YWx1ZS10eXBlcyc7XG5cbi8vIEFjdGlvbnNcbmV4cG9ydCBBY3Rpb24gZnJvbSAnLi9hY3Rpb25zJztcbmV4cG9ydCBibGVuZFR3ZWVucyBmcm9tICcuL2FjdGlvbnMvYmxlbmQtdHdlZW5zJztcbmV4cG9ydCBjaGFpbiBmcm9tICcuL2FjdGlvbnMvY2hhaW4nO1xuZXhwb3J0IGNvbXBvc2l0ZSBmcm9tICcuL2FjdGlvbnMvY29tcG9zaXRlJztcbmV4cG9ydCBjcm9zc0ZhZGUgZnJvbSAnLi9hY3Rpb25zL2Nyb3NzLWZhZGUnO1xuZXhwb3J0IGRlbGF5IGZyb20gJy4vYWN0aW9ucy9kZWxheSc7XG5leHBvcnQgb2Zmc2V0IGZyb20gJy4vYWN0aW9ucy9vZmZzZXQnO1xuZXhwb3J0IHBhcmFsbGVsIGZyb20gJy4vYWN0aW9ucy9wYXJhbGxlbCc7XG5leHBvcnQgcGh5c2ljcyBmcm9tICcuL2FjdGlvbnMvcGh5c2ljcyc7XG5leHBvcnQgcG9pbnRlciBmcm9tICcuL2FjdGlvbnMvcG9pbnRlcic7XG5leHBvcnQgdHdlZW4gZnJvbSAnLi9hY3Rpb25zL3R3ZWVuJztcbmV4cG9ydCBzdGFnZ2VyIGZyb20gJy4vYWN0aW9ucy9zdGFnZ2VyJztcbmV4cG9ydCB2YWx1ZSBmcm9tICcuL2FjdGlvbnMvdmFsdWUnO1xuXG4vLyBSZW5kZXJlcnNcbmV4cG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVycyc7XG5leHBvcnQgY3NzIGZyb20gJy4vcmVuZGVyZXJzL2Nzcyc7XG5leHBvcnQgc3ZnIGZyb20gJy4vcmVuZGVyZXJzL3N2Zyc7XG5leHBvcnQgc3ZnUGF0aCBmcm9tICcuL3JlbmRlcmVycy9zdmctcGF0aCc7XG4iXX0=

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
	exports.transformChildValues = exports.steps = exports.wrap = exports.interpolate = exports.flow = exports.clamp = exports.clampMin = exports.clampMax = exports.appendUnit = undefined;
	
	var _calc = __webpack_require__(2);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbImFwcGVuZFVuaXQiLCJ1bml0IiwidiIsImNsYW1wTWF4IiwibWF4IiwiTWF0aCIsIm1pbiIsImNsYW1wTWluIiwiY2xhbXAiLCJfbWluIiwiX21heCIsImZsb3ciLCJ0cmFuc2Zvcm1lcnMiLCJudW1UcmFuc2Zvcm1lcnMiLCJsZW5ndGgiLCJpIiwiYWNjIiwiYXJncyIsImludGVycG9sYXRlIiwiaW5wdXQiLCJvdXRwdXQiLCJyYW5nZUVhc2luZyIsInJhbmdlTGVuZ3RoIiwiZmluYWxJbmRleCIsInByb2dyZXNzSW5SYW5nZSIsImVhc2VkUHJvZ3Jlc3MiLCJ3cmFwIiwicmFuZ2VTaXplIiwic3RlcHMiLCJwcm9ncmVzcyIsInRyYW5zZm9ybUNoaWxkVmFsdWVzIiwiY2hpbGRUcmFuc2Zvcm1lcnMiLCJrZXkiLCJjaGlsZFRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOzs7Ozs7O0FBT08sSUFBTUEsa0NBQWEsVUFBQ0MsSUFBRDtBQUFBLFNBQVUsVUFBQ0MsQ0FBRDtBQUFBLGdCQUFVQSxDQUFWLEdBQWNELElBQWQ7QUFBQSxHQUFWO0FBQUEsQ0FBbkI7O0FBRVA7Ozs7Ozs7QUFPTyxJQUFNRSw4QkFBVyxVQUFDQyxHQUFEO0FBQUEsU0FBUyxVQUFDRixDQUFEO0FBQUEsV0FBT0csS0FBS0MsR0FBTCxDQUFTSixDQUFULEVBQVlFLEdBQVosQ0FBUDtBQUFBLEdBQVQ7QUFBQSxDQUFqQjtBQUNBLElBQU1HLDhCQUFXLFVBQUNELEdBQUQ7QUFBQSxTQUFTLFVBQUNKLENBQUQ7QUFBQSxXQUFPRyxLQUFLRCxHQUFMLENBQVNGLENBQVQsRUFBWUksR0FBWixDQUFQO0FBQUEsR0FBVDtBQUFBLENBQWpCO0FBQ0EsSUFBTUUsd0JBQVEsVUFBQ0YsR0FBRCxFQUFNRixHQUFOLEVBQWM7QUFDakMsTUFBTUssT0FBT0YsU0FBU0QsR0FBVCxDQUFiO0FBQ0EsTUFBTUksT0FB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QixHQUFGLENBQWpCLENBQVQ7QUFDRDtBQUNGOztBQUVELFdBQU85QixDQUFQO0FBQ0QsR0FUbUM7QUFBQSxDQUE3QiIsImZpbGUiOiJ0cmFuc2Zvcm1lcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MsIHN0ZXBQcm9ncmVzcyB9IGZyb20gJy4vY2FsYyc7XG5cbi8qKlxuICogQXBwZW5kIFVuaXRcbiAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGVuZFxuICogYXBwZW5kVW5pdCgncHgnLCAyMCkgLT4gJzIwcHgnXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVuaXQpXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBhcHBlbmRVbml0ID0gKHVuaXQpID0+ICh2KSA9PiBgJHt2fSR7dW5pdH1gO1xuXG4vKipcbiAqIENsYW1wIHZhbHVlIGJldHdlZW5cbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVzdHJpY3QgYSBnaXZlbiB2YWx1ZSBiZXR3ZWVuIGBtaW5gIGFuZCBgbWF4YFxuICogQHBhcmFtICB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBjbGFtcE1heCA9IChtYXgpID0+ICh2KSA9PiBNYXRoLm1pbih2LCBtYXgpO1xuZXhwb3J0IGNvbnN0IGNsYW1wTWluID0gKG1pbikgPT4gKHYpID0+IE1hdGgubWF4KHYsIG1pbik7XG5leHBvcnQgY29uc3QgY2xhbXAgPSAobWluLCBtYXgpID0+IHtcbiAgY29uc3QgX21pbiA9IGNsYW1wTWluKG1pbik7XG4gIGNvbnN0IF9tYXggPSBjbGFtcE1heChtYXgpO1xuICByZXR1cm4gKHYpID0+IF9taW4oX21heCh2KSk7XG59O1xuXG4vKipcbiAqIEZsb3dcbiAqIENvbXBvc2Ugb3RoZXIgdHJhbnNmb3JtZXJzIHRvIHJ1biBsaW5lYXJpbHlcbiAqIGZsb3cobWluKDIwKSwgbWF4KDQwKSlcbiAqIEBwYXJhbSAgey4uLmZ1bmN0aW9uc30gdHJhbnNmb3JtZXJzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGZsb3cgPSAoLi4udHJhbnNmb3JtZXJzKSA9PiB7XG4gIGNvbnN0IG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICByZXR1cm4gKGFjYywgLi4uYXJncykgPT4ge1xuICAgIGxldCB2ID0gYWNjO1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbnRlcnBvbGF0ZSA9IChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykgPT4ge1xuICBjb25zdCByYW5nZUxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgY29uc3QgZmluYWxJbmRleCA9IHJhbmdlTGVuZ3RoIC0gMTtcblxuICByZXR1cm4gKHYpID0+IHtcbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1pbmltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPD0gaW5wdXRbMF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbMF07XG4gICAgfVxuXG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtYXhpbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2ID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgIH1cblxuICAgIGxldCBpID0gMTtcblxuICAgIC8vIEZpbmQgaW5kZXggb2YgcmFuZ2Ugc3RhcnRcbiAgICBmb3IgKDsgaSA8IHJhbmdlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpbnB1dFtpXSA+IHYgfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzc0luUmFuZ2UgPSBnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbnB1dFtpIC0gMV0sIGlucHV0W2ldLCB2KTtcbiAgICBjb25zdCBlYXNlZFByb2dyZXNzID0gKHJhbmdlRWFzaW5nKSA/IHJhbmdlRWFzaW5nW2ldKHByb2dyZXNzSW5SYW5nZSkgOiBwcm9ncmVzc0luUmFuZ2U7XG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKG91dHB1dFtpIC0gMV0sIG91dHB1dFtpXSwgZWFzZWRQcm9ncmVzcyk7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgd3JhcCA9IChtaW4sIG1heCkgPT4gKHYpID0+IHtcbiAgY29uc3QgcmFuZ2VTaXplID0gbWF4IC0gbWluO1xuICByZXR1cm4gKCh2IC0gbWluKSAlIHJhbmdlU2l6ZSArIHJhbmdlU2l6ZSkgJSByYW5nZVNpemUgKyBtaW47XG59O1xuXG5leHBvcnQgY29uc3Qgc3RlcHMgPSAoc3RlcHMsIG1pbiwgbWF4KSA9PiAodikgPT4ge1xuICBjb25zdCBwcm9ncmVzcyA9IGdldFByb2dyZXNzRnJvbVZhbHVlKG1pbiwgbWF4LCB2KTtcbiAgcmV0dXJuIHN0ZXBQcm9ncmVzcyhzdGVwcywgcHJvZ3Jlc3MpO1xufTtcblxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybUNoaWxkVmFsdWVzID0gKGNoaWxkVHJhbnNmb3JtZXJzKSA9PiAodikgPT4ge1xuICBmb3IgKGxldCBrZXkgaW4gdikge1xuICAgIGNvbnN0IGNoaWxkVHJhbnNmb3JtZXIgPSBjaGlsZFRyYW5zZm9ybWVyc1trZXldO1xuICAgIGlmIChjaGlsZFRyYW5zZm9ybWVyKSB7XG4gICAgICB2W2tleV0gPSBjaGlsZFRyYW5zZm9ybWVyKHZba2V5XSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHY7XG59O1xuIl19

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.color = exports.hsla = exports.hex = exports.rgba = exports.rgbUnit = exports.scale = exports.px = exports.percent = exports.degrees = exports.alpha = exports.number = undefined;
	
	var _transformChildValues, _transformChildValues2;
	
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
	
	var _utils = __webpack_require__(24);
	
	var _utils2 = __webpack_require__(24);
	
	// String properties
	var RED = 'red';
	var GREEN = 'green';
	var BLUE = 'blue';
	var ALPHA = 'alpha';
	var HUE = 'hue';
	var SATURATION = 'saturation';
	var LIGHTNESS = 'lightness';
	
	// Templates
	var rgbaTemplate = function (_ref) {
	  var red = _ref.red,
	      green = _ref.green,
	      blue = _ref.blue,
	      _ref$alpha = _ref.alpha,
	      alpha = _ref$alpha === undefined ? 1 : _ref$alpha;
	  return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
	};
	
	var hslaTemplate = function (_ref2) {
	  var hue = _ref2.hue,
	      saturation = _ref2.saturation,
	      lightness = _ref2.lightness,
	      _ref2$alpha = _ref2.alpha,
	      alpha = _ref2$alpha === undefined ? 1 : _ref2$alpha;
	  return 'hsla(' + hue + ', ' + saturation + ', ' + lightness + ', ' + alpha + ')';
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
	  test: (0, _utils.isFirstChars)('rgb'),
	
	  parse: (0, _utils.splitColorValues)([RED, GREEN, BLUE, ALPHA]),
	
	  transform: (0, _transformers.flow)((0, _transformers.transformChildValues)((_transformChildValues = {}, _transformChildValues[RED] = rgbUnit.transform, _transformChildValues[GREEN] = rgbUnit.transform, _transformChildValues[BLUE] = rgbUnit.transform, _transformChildValues[ALPHA] = alpha.transform, _transformChildValues)), rgbaTemplate)
	};
	
	var hex = exports.hex = _extends({}, rgba, {
	
	  test: (0, _utils.isFirstChars)('#'),
	
	  parse: function (v) {
	    var _ref3;
	
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
	
	    return _ref3 = {}, _ref3[RED] = parseInt(r, 16), _ref3[GREEN] = parseInt(g, 16), _ref3[BLUE] = parseInt(b, 16), _ref3[ALPHA] = 1, _ref3;
	  }
	});
	
	var hsla = exports.hsla = {
	  test: (0, _utils.isFirstChars)('hsl'),
	
	  parse: (0, _utils.splitColorValues)([HUE, SATURATION, LIGHTNESS, ALPHA]),
	
	  transform: (0, _transformers.flow)((0, _transformers.transformChildValues)((_transformChildValues2 = {}, _transformChildValues2[HUE] = number.transform, _transformChildValues2[SATURATION] = percent.transform, _transformChildValues2[LIGHTNESS] = percent.transform, _transformChildValues2[ALPHA] = alpha.transform, _transformChildValues2)), hslaTemplate)
	};
	
	var color = exports.color = {
	  childTypes: _extends({}, hsla.childTypes, rgba.childTypes),
	
	  test: function (value) {
	    return rgba.test(value) || hex.test(value) || hsla.test(value);
	  },
	
	  transform: function (v) {
	    if (v.hasOwnProperty('red')) {
	      return rgba.transform(v);
	    } else if (v.hasOwnProperty('hue')) {
	      return hsla.transform(v);
	    }
	    return v;
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdmFsdWUtdHlwZXMuanMiXSwibmFtZXMiOlsiUkVEIiwiR1JFRU4iLCJCTFVFIiwiQUxQSEEiLCJIVUUiLCJTQVRVUkFUSU9OIiwiTElHSFRORVNTIiwicmdiYVRlbXBsYXRlIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYWxwaGEiLCJoc2xhVGVtcGxhdGUiLCJodWUiLCJzYXR1cmF0aW9uIiwibGlnaHRuZXNzIiwibnVtYmVyIiwidGVzdCIsInBhcnNlIiwicGFyc2VGbG9hdCIsInRyYW5zZm9ybSIsImRlZ3JlZXMiLCJwZXJjZW50IiwicHgiLCJzY2FsZSIsImRlZmF1bHQiLCJyZ2JVbml0IiwiTWF0aCIsInJvdW5kIiwicmdiYSIsImhleCIsInYiLCJyIiwiZyIsImIiLCJsZW5ndGgiLCJzdWJzdHIiLCJwYXJzZUludCIsImhzbGEiLCJjb2xvciIsImNoaWxkVHlwZXMiLCJ2YWx1ZSIsImhhc093blByb3BlcnR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O2tRQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBLElBQU1BLE1BQU0sS0FBWjtBQUNBLElBQU1DLFFBQVEsT0FBZDtBQUNBLElBQU1DLE9BQU8sTUFBYjtBQUNBLElBQU1DLFFBQVEsT0FBZDtBQUNBLElBQU1DLE1BQU0sS0FBWjtBQUNBLElBQU1DLGFBQWEsWUFBbkI7QUFDQSxJQUFNQyxZQUFZLFdBQWxCOztBQUVBO0FBQ0EsSUFBTUMsZUFBZTtBQUFBLE1BQUdDLEdBQUgsUUFBR0EsR0FBSDtBQUFBLE1BQVFDLEtBQVIsUUFBUUEsS0FBUjtBQUFBLE1BQWVDLElBQWYsUUFBZUEsSUFBZjtBQUFBLHdCQUFxQkMsS0FBckI7QUFBQSxNQUFxQkEsS0FBckIsOEJBQTZCLENBQTdCO0FBQUEsbUJBQ1hILEdBRFcsVUFDSEMsS0FERyxVQUNPQyxJQURQLFVBQ2dCQyxLQURoQjtBQUFBLENBQXJCOztBQUdBLElBQU1DLGVBQWU7QUFBQSxNQUFHQyxHQUFILFNB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R2YsVUFGSCxJQUVnQmlCLFFBQVFGLFNBRnhCLHlCQUdHZCxTQUhILElBR2VnQixRQUFRRixTQUh2Qix5QkFJR2pCLEtBSkgsSUFJV1EsTUFBTVMsU0FKakIsMEJBRFMsRUFPVFIsWUFQUztBQUxPLENBQWI7O0FBZ0JBLElBQU0yQix3QkFBUTtBQUNuQkMsMkJBQ0tGLEtBQUtFLFVBRFYsRUFFS1gsS0FBS1csVUFGVixDQURtQjs7QUFNbkJ2QixRQUFNLFVBQUN3QixLQUFEO0FBQUEsV0FBV1osS0FBS1osSUFBTCxDQUFVd0IsS0FBVixLQUFvQlgsSUFBSWIsSUFBSixDQUFTd0IsS0FBVCxDQUFwQixJQUF1Q0gsS0FBS3JCLElBQUwsQ0FBVXdCLEtBQVYsQ0FBbEQ7QUFBQSxHQU5hOztBQVFuQnJCLGFBQVcsVUFBQ1csQ0FBRCxFQUFPO0FBQ2hCLFFBQUlBLEVBQUVXLGNBQUYsQ0FBaUIsS0FBakIsQ0FBSixFQUE2QjtBQUMzQixhQUFPYixLQUFLVCxTQUFMLENBQWVXLENBQWYsQ0FBUDtBQUNELEtBRkQsTUFFTyxJQUFJQSxFQUFFVyxjQUFGLENBQWlCLEtBQWpCLENBQUosRUFBNkI7QUFDbEMsYUFBT0osS0FBS2xCLFNBQUwsQ0FBZVcsQ0FBZixDQUFQO0FBQ0Q7QUFDRCxXQUFPQSxDQUFQO0FBQ0Q7QUFma0IsQ0FBZCIsImZpbGUiOiJ2YWx1ZS10eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVmFsdWUgdHlwZXNcbiAqXG4gKiBhbHBoYVxuICogZGVncmVlc1xuICogaGV4XG4gKiBoc2xhXG4gKiBwZXJjZW50XG4gKiBweFxuICogcmdiVW5pdFxuICogcmdiXG4gKiBzY2FsZVxuICovXG5pbXBvcnQgeyBjbGFtcCwgZmxvdywgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMgfSBmcm9tICcuLi9pbmMvdHJhbnNmb3JtZXJzJztcbmltcG9ydCB7IGNyZWF0ZVVuaXRUeXBlLCBpc0ZpcnN0Q2hhcnMsIHNwbGl0Q29sb3JWYWx1ZXMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuLy8gU3RyaW5nIHByb3BlcnRpZXNcbmNvbnN0IFJFRCA9ICdyZWQnO1xuY29uc3QgR1JFRU4gPSAnZ3JlZW4nO1xuY29uc3QgQkxVRSA9ICdibHVlJztcbmNvbnN0IEFMUEhBID0gJ2FscGhhJztcbmNvbnN0IEhVRSA9ICdodWUnO1xuY29uc3QgU0FUVVJBVElPTiA9ICdzYXR1cmF0aW9uJztcbmNvbnN0IExJR0hUTkVTUyA9ICdsaWdodG5lc3MnO1xuXG4vLyBUZW1wbGF0ZXNcbmNvbnN0IHJnYmFUZW1wbGF0ZSA9ICh7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhID0gMSB9KSA9PiBcbiAgYHJnYmEoJHtyZWR9LCAke2dyZWVufSwgJHtibHVlfSwgJHthbHBoYX0pYDtcblxuY29uc3QgaHNsYVRlbXBsYXRlID0gKHsgaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGFscGhhID0gMSB9KSA9PiBcbiAgYGhzbGEoJHtodWV9LCAke3NhdHVyYXRpb259LCAke2xpZ2h0bmVzc30sICR7YWxwaGF9KWA7XG5cbmV4cG9ydCBjb25zdCBudW1iZXIgPSB7XG4gIHRlc3Q6IGlzTnVtLFxuICBwYXJzZTogcGFyc2VGbG9hdFxufTtcblxuLy8gVmFsdWUgdHlwZXNcbmV4cG9ydCBjb25zdCBhbHBoYSA9IHtcbiAgLi4ubnVtYmVyLFxuICB0cmFuc2Zvcm06IGNsYW1wKDAsIDEpXG59O1xuXG5leHBvcnQgY29uc3QgZGVncmVlcyA9IGNyZWF0ZVVuaXRUeXBlKCdkZWcnKTtcbmV4cG9ydCBjb25zdCBwZXJjZW50ID0gY3JlYXRlVW5pdFR5cGUoJyUnKTtcbmV4cG9ydCBjb25zdCBweCA9IGNyZWF0ZVVuaXRUeXBlKCdweCcpO1xuXG5leHBvcnQgY29uc3Qgc2NhbGUgPSB7XG4gIC4uLm51bWJlcixcbiAgZGVmYXVsdDogMVxufTtcblxuZXhwb3J0IGNvbnN0IHJnYlVuaXQgPSB7XG4gIC4uLm51bWJlcixcbiAgdHJhbnNmb3JtOiBmbG93KFxuICAgIC8vaHR0cDovL2NvZGVwZW4uaW8vb3N1Ymxha2UvZnVsbC94R1ZWYU4vXG4gICAgLy8gKHYsIHZhbHVlLCBhY3Rpb24pID0+IHtcbiAgICAvLyAgIGlmIChhY3Rpb24pIHtcbiAgICAvLyAgICAgY29uc3QgZnJvbUNvbG9yID0gYWN0aW9uLmZyb20gKiBhY3Rpb24uZnJvbTtcbiAgICAvLyAgICAgY29uc3QgdG9Db2xvciA9IGFjdGlvbi50byAqIGFjdGlvbi50bztcbiAgICAvLyAgICAgcmV0dXJuIE1hdGguc3FydChhY3Rpb24ucHJvZ3Jlc3MgKiAodG9Db2xvciAtIGZyb21Db2xvcikgKyBmcm9tQ29sb3IpO1xuICAgIC8vICAgfVxuXG4gICAgLy8gICByZXR1cm4gdjtcbiAgICAvLyB9LFxuICAgIGNsYW1wKDAsIDI1NSksXG4gICAgTWF0aC5yb3VuZFxuICApXG59O1xuXG5leHBvcnQgY29uc3QgcmdiYSA9IHtcbiAgdGVzdDogaXNGaXJzdENoYXJzKCdyZ2InKSxcblxuICBwYXJzZTogc3BsaXRDb2xvclZhbHVlcyhbUkVELCBHUkVFTiwgQkxVRSwgQUxQSEFdKSxcblxuICB0cmFuc2Zvcm06IGZsb3coXG4gICAgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMoe1xuICAgICAgW1JFRF06IHJnYlVuaXQudHJhbnNmb3JtLFxuICAgICAgW0dSRUVOXTogcmdiVW5pdC50cmFuc2Zvcm0sXG4gICAgICBbQkxVRV06IHJnYlVuaXQudHJhbnNmb3JtLFxuICAgICAgW0FMUEhBXTogYWxwaGEudHJhbnNmb3JtXG4gICAgfSksXG4gICAgcmdiYVRlbXBsYXRlXG4gIClcbn07XG5cbmV4cG9ydCBjb25zdCBoZXggPSB7XG4gIC4uLnJnYmEsXG5cbiAgdGVzdDogaXNGaXJzdENoYXJzKCcjJyksXG5cbiAgcGFyc2U6ICh2KSA9PiB7XG4gICAgbGV0IHIsIGcsIGI7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgIGlmICh2Lmxlbmd0aCA+IDQpIHtcbiAgICAgIHIgPSB2LnN1YnN0cigxLCAyKTtcbiAgICAgIGcgPSB2LnN1YnN0cigzLCAyKTtcbiAgICAgIGIgPSB2LnN1YnN0cig1LCAyKTtcblxuICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSB2LnN1YnN0cigxLCAxKTtcbiAgICAgIGcgPSB2LnN1YnN0cigyLCAxKTtcbiAgICAgIGIgPSB2LnN1YnN0cigzLCAxKTtcbiAgICAgIHIgKz0gcjtcbiAgICAgIGcgKz0gZztcbiAgICAgIGIgKz0gYjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgW1JFRF06IHBhcnNlSW50KHIsIDE2KSxcbiAgICAgIFtHUkVFTl06IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgIFtCTFVFXTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgW0FMUEhBXTogMVxuICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBoc2xhID0ge1xuICB0ZXN0OiBpc0ZpcnN0Q2hhcnMoJ2hzbCcpLFxuXG4gIHBhcnNlOiBzcGxpdENvbG9yVmFsdWVzKFtIVUUsIFNBVFVSQVRJT04sIExJR0hUTkVTUywgQUxQSEFdKSxcblxuICB0cmFuc2Zvcm06IGZsb3coXG4gICAgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMoe1xuICAgICAgW0hVRV06IG51bWJlci50cmFuc2Zvcm0sXG4gICAgICBbU0FUVVJBVElPTl06IHBlcmNlbnQudHJhbnNmb3JtLFxuICAgICAgW0xJR0hUTkVTU106IHBlcmNlbnQudHJhbnNmb3JtLFxuICAgICAgW0FMUEhBXTogYWxwaGEudHJhbnNmb3JtXG4gICAgfSksXG4gICAgaHNsYVRlbXBsYXRlXG4gIClcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9IHtcbiAgY2hpbGRUeXBlczoge1xuICAgIC4uLmhzbGEuY2hpbGRUeXBlcyxcbiAgICAuLi5yZ2JhLmNoaWxkVHlwZXNcbiAgfSxcblxuICB0ZXN0OiAodmFsdWUpID0+IHJnYmEudGVzdCh2YWx1ZSkgfHwgaGV4LnRlc3QodmFsdWUpIHx8IGhzbGEudGVzdCh2YWx1ZSksXG5cbiAgdHJhbnNmb3JtOiAodikgPT4ge1xuICAgIGlmICh2Lmhhc093blByb3BlcnR5KCdyZWQnKSkge1xuICAgICAgcmV0dXJuIHJnYmEudHJhbnNmb3JtKHYpO1xuICAgIH0gZWxzZSBpZiAodi5oYXNPd25Qcm9wZXJ0eSgnaHVlJykpIHtcbiAgICAgIHJldHVybiBoc2xhLnRyYW5zZm9ybSh2KTtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG4gIH1cbn07XG4iXX0=

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
	    var aDuration = a.getDuration();
	    var bDuration = b.getDuration();
	
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
	
	      var hasIntersected = bStartsHigherThanA && aValueAtTime < bValueAtTime || !bStartsHigherThanA && aValueAtTime > bValueAtTime;
	
	      if (!foundP1 && hasIntersected) {
	        this.blendPoints.splice(0, 1, [totalTime, bValueAtTime]);
	        foundP1 = true;
	      }
	
	      // TODO go back through and comment
	      var hasIntersectedB = bStartsHigherThanA && aValueAtTime < bValueAtTime || !bStartsHigherThanA && aValueAtTime > bValueAtTime;
	
	      if (foundP1 && hasIntersectedB) {
	        this.blendPoints[2] = [totalTime, bValueAtTime];
	        foundP2 = true;
	      }
	
	      if (foundP2) {
	        return;
	      }
	    }
	
	    to.start();
	  };
	
	  TweenBlend.prototype.update = function update() {
	    var _props2 = this.props,
	        from = _props2.from,
	        to = _props2.to;
	
	    var a = from;
	    var b = to;
	
	    var progress = clampProgress((0, _calc.getProgressFromValue)(this.blendPoints[0][0], this.blendPoints[2][0], a.getElapsed()));
	    if (progress >= 1) {
	      return b.get();
	    } else {
	      var aP = (0, _calc.getValueFromProgress)(this.blendPoints[0][1], this.blendPoints[1][1], progress);
	      var bP = (0, _calc.getValueFromProgress)(this.blendPoints[1][1], this.blendPoints[2][1], progress);
	      return (0, _calc.getValueFromProgress)(aP, bP, progress);
	    }
	  };
	
	  return TweenBlend;
	}(_2.default);
	
	TweenBlend.defaultProps = {
	  accuracy: 60
	};
	
	exports.default = function (props) {
	  return new TweenBlend(props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyJdLCJuYW1lcyI6WyJjbGFtcFByb2dyZXNzIiwiY2FsY1ZhbHVlQXRUaW1lIiwiZnJvbSIsInRvIiwiZHVyYXRpb24iLCJlbGFwc2VkIiwiZWFzZSIsInByb2dyZXNzQXRUaW1lIiwiVHdlZW5CbGVuZCIsIm9uU3RhcnQiLCJwcm9wcyIsImFjY3VyYWN5IiwiYSIsImIiLCJhRHVyYXRpb24iLCJnZXREdXJhdGlvbiIsImJEdXJhdGlvbiIsIk1hdGgiLCJtaW4iLCJnZXRFbGFwc2VkIiwiYUVhc2UiLCJnZXRQcm9wIiwiYkVhc2UiLCJhRnJvbSIsImJGcm9tIiwiYVRvIiwiYlRvIiwiYlZhbHVlQXRCbGVuZENvbXBsZXRlIiwiYlN0YXJ0c0hpZ2hlclRoYW5BIiwiZ2V0IiwiYmxlbmRQb2ludHMiLCJ0aW1lc3RlcCIsImZvdW5kUDEiLCJmb3VuZFAyIiwiaSIsInRvdGFsVGltZSIsImFWYWx1ZUF0VGltZSIsImJWYWx1ZUF0VGltZSIsImhhc0ludGVyc2VjdGVkIiwic3BsaWNlIiwiaGFzSW50ZXJzZWN0ZWRCIiwic3RhcnQiLCJ1cGRhdGUiLCJwcm9ncmVzcyIsImFQIiwiYlAiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLHlCQUFNLENBQU4sRUFBUyxDQUFULENBQXRCOztBQUVBLFNBQVNDLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStCQyxFQUEvQixFQUFtQ0MsUUFBbkMsRUFBNkNDLE9BQTdDLEVBQXNEQyxJQUF0RCxFQUE0RDtBQUMxRCxNQUFNQyxpQkFBaUJELEtBQUtOLGNBQWMsZ0NBQXFCLENBQXJCLEVBQXdCSSxRQUF4QixFQUFrQ0MsT0FBbEMsQ0FBZCxDQUFMLENBQXZCO0FBQ0EsU0FBTyxnQ0FBcUJILElBQXJCLEVBQTJCQyxFQUEzQixFQUErQkksY0FBL0IsQ0FBUDtBQUNEOztJQUVLQyxVOzs7Ozs7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QyxLQURuQjtBQUFBLFFBQ0NSLElBREQsV0FDQ0EsSUFERDtBQUFBLFFBQ09DLEVBRFAsV0FDT0EsRUFEUDs7QUFFUCxRQUFNUyxJQUFJVixJQUFWO0FBQ0EsUUFBTVcsSUFBSVYsRUFBVjs7QUFFQSxRQUFNd0MsV0FBVzNDLGNBQWMsZ0NBQXFCLEtBQUs4QixXQUFMLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQXJCLEVBQTZDLEtBQUtBLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBN0MsRUFBcUVsQixFQUFFTyxVQUFGLEVBQXJFLENBQWQsQ0FBakI7QUFDQSxRQUFJd0IsWUFBWSxDQUFoQixFQUFtQjtBQUNqQixhQUFPOUIsRUFBRWdCLEdBQUYsRUFBUDtBQUNELEtBRkQsTUFFTztBQUNMLFVBQU1lLEtBQUssZ0NBQXFCLEtBQUtkLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBckIsRUFBNkMsS0FBS0EsV0FBTCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUE3QyxFQUFxRWEsUUFBckUsQ0FBWDtBQUNBLFVBQU1FLEtBQUssZ0NBQXFCLEtBQUtmLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBckIsRUFBNkMsS0FBS0EsV0FBTCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUE3QyxFQUFxRWEsUUFBckUsQ0FBWDtBQUNBLGFBQU8sZ0NBQXFCQyxFQUFyQixFQUF5QkMsRUFBekIsRUFBNkJGLFFBQTdCLENBQVA7QUFDRDtBQUNGLEc7Ozs7O0FBckZHbkMsVSxDQUNHc0MsWSxHQUFlO0FBQ3BCbkMsWUFBVTtBQURVLEM7O2tCQXVGVCxVQUFDRCxLQUFEO0FBQUEsU0FBVyxJQUFJRixVQUFKLENBQWVFLEtBQWYsQ0FBWDtBQUFBLEMiLCJmaWxlIjoiYmxlbmQtdHdlZW5zLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gJy4uL2luYy90cmFuc2Zvcm1lcnMnO1xuXG5jb25zdCBjbGFtcFByb2dyZXNzID0gY2xhbXAoMCwgMSk7XG5cbmZ1bmN0aW9uIGNhbGNWYWx1ZUF0VGltZShmcm9tLCB0bywgZHVyYXRpb24sIGVsYXBzZWQsIGVhc2UpIHtcbiAgY29uc3QgcHJvZ3Jlc3NBdFRpbWUgPSBlYXNlKGNsYW1wUHJvZ3Jlc3MoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoMCwgZHVyYXRpb24sIGVsYXBzZWQpKSk7XG4gIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhmcm9tLCB0bywgcHJvZ3Jlc3NBdFRpbWUpO1xufVxuXG5jbGFzcyBUd2VlbkJsZW5kIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhY2N1cmFjeTogNjBcbiAgfTtcblxuICBvblN0YXJ0KCkge1xuICAgIGNvbnN0IHsgZnJvbSwgdG8sIGR1cmF0aW9uLCBhY2N1cmFjeSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhID0gZnJvbTtcbiAgICBjb25zdCBiID0gdG87XG4gICAgY29uc3QgYUR1cmF0aW9uID0gYS5nZXREdXJhdGlvbigpO1xuICAgIGNvbnN0IGJEdXJhdGlvbiA9IGIuZ2V0RHVyYXRpb24oKTtcblxuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbiB8fCBNYXRoLm1pbihcbiAgICAgIGFEdXJhdGlvbiAtIGEuZ2V0RWxhcHNlZCgpLFxuICAgICAgYkR1cmF0aW9uXG4gICAgKTtcblxuICAgIGNvbnN0IGFFYXNlID0gYS5nZXRQcm9wKCdlYXNlJyk7XG4gICAgY29uc3QgYkVhc2UgPSBiLmdldFByb3AoJ2Vhc2UnKTtcbiAgICBjb25zdCBhRnJvbSA9IGEuZ2V0UHJvcCgnZnJvbScpO1xuICAgIGNvbnN0IGJGcm9tID0gYi5nZXRQcm9wKCdmcm9tJyk7XG4gICAgY29uc3QgYVRvID0gYS5nZXRQcm9wKCd0bycpO1xuICAgIGNvbnN0IGJUbyA9IGIuZ2V0UHJvcCgndG8nKTtcbiAgICBjb25zdCBiVmFsdWVBdEJsZW5kQ29tcGxldGUgPSBjYWxjVmFsdWVBdFRpbWUoYkZyb20sIGJUbywgYkR1cmF0aW9uLCB0aGlzLmR1cmF0aW9uLCBiRWFzZSk7XG4gICAgY29uc3QgYlN0YXJ0c0hpZ2hlclRoYW5BID0gYkZyb20gPiBhLmdldCgpO1xuXG4gICAgdGhpcy5ibGVuZFBvaW50cyA9IFtcbiAgICAgIFswLCBhLmdldCgpXSxcbiAgICAgIFt0aGlzLmR1cmF0aW9uLCBiVmFsdWVBdEJsZW5kQ29tcGxldGVdXG4gICAgXTtcblxuICAgIC8vIEZpbmQgdHdlZW4gaW50ZXJzZWN0aW9uXG4gICAgY29uc3QgdGltZXN0ZXAgPSB0aGlzLmR1cmF0aW9uIC8gYWNjdXJhY3k7XG5cbiAgICBsZXQgZm91bmRQMSA9IGZhbHNlO1xuICAgIGxldCBmb3VuZFAyID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY3VyYWN5OyBpKyspIHtcbiAgICAgIGNvbnN0IHRvdGFsVGltZSA9IGkgKiB0aW1lc3RlcDtcblxuICAgICAgY29uc3QgYVZhbHVlQXRUaW1lID0gY2FsY1ZhbHVlQXRUaW1lKGFGcm9tLCBhVG8sIGFEdXJhdGlvbiwgYS5lbGFwc2VkICsgdG90YWxUaW1lLCBhRWFzZSk7XG4gICAgICBjb25zdCBiVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYkZyb20sIGJUbywgYkR1cmF0aW9uLCBiLmVsYXBzZWQgKyB0b3RhbFRpbWUsIGJFYXNlKTtcblxuICAgICAgY29uc3QgaGFzSW50ZXJzZWN0ZWQgPSAoXG4gICAgICAgIChiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lIDwgYlZhbHVlQXRUaW1lKSB8fFxuICAgICAgICAoIWJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPiBiVmFsdWVBdFRpbWUpXG4gICAgICApO1xuXG4gICAgICBpZiAoIWZvdW5kUDEgJiYgaGFzSW50ZXJzZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5ibGVuZFBvaW50cy5zcGxpY2UoMCwgMSwgW3RvdGFsVGltZSwgYlZhbHVlQXRUaW1lXSk7XG4gICAgICAgIGZvdW5kUDEgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPIGdvIGJhY2sgdGhyb3VnaCBhbmQgY29tbWVudFxuICAgICAgY29uc3QgaGFzSW50ZXJzZWN0ZWRCID0gKFxuICAgICAgICAoYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA8IGJWYWx1ZUF0VGltZSkgfHxcbiAgICAgICAgKCFiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lID4gYlZhbHVlQXRUaW1lKVxuICAgICAgKTtcblxuICAgICAgaWYgKGZvdW5kUDEgJiYgaGFzSW50ZXJzZWN0ZWRCKSB7XG4gICAgICAgIHRoaXMuYmxlbmRQb2ludHNbMl0gPSBbdG90YWxUaW1lLCBiVmFsdWVBdFRpbWVdO1xuICAgICAgICBmb3VuZFAyID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvdW5kUDIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRvLnN0YXJ0KCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeyBmcm9tLCB0byB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhID0gZnJvbTtcbiAgICBjb25zdCBiID0gdG87XG5cbiAgICBjb25zdCBwcm9ncmVzcyA9IGNsYW1wUHJvZ3Jlc3MoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUodGhpcy5ibGVuZFBvaW50c1swXVswXSwgdGhpcy5ibGVuZFBvaW50c1syXVswXSwgYS5nZXRFbGFwc2VkKCkpKTtcbiAgICBpZiAocHJvZ3Jlc3MgPj0gMSkge1xuICAgICAgcmV0dXJuIGIuZ2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFQID0gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3ModGhpcy5ibGVuZFBvaW50c1swXVsxXSwgdGhpcy5ibGVuZFBvaW50c1sxXVsxXSwgcHJvZ3Jlc3MpO1xuICAgICAgY29uc3QgYlAgPSBnZXRWYWx1ZUZyb21Qcm9ncmVzcyh0aGlzLmJsZW5kUG9pbnRzWzFdWzFdLCB0aGlzLmJsZW5kUG9pbnRzWzJdWzFdLCBwcm9ncmVzcyk7XG4gICAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoYVAsIGJQLCBwcm9ncmVzcyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gbmV3IFR3ZWVuQmxlbmQocHJvcHMpO1xuIl19

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
	
	      // Immediately update with the current action state
	      onUpdate(null, _this2[key]);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qcyJdLCJuYW1lcyI6WyJDb21wb3NpdGVBY3Rpb24iLCJwcm9wcyIsImFjdGlvbnMiLCJyZW1haW5pbmdQcm9wcyIsImN1cnJlbnQiLCJhY3Rpb25LZXlzIiwiYWRkQWN0aW9ucyIsImtleSIsImluZGV4T2YiLCJwdXNoIiwib25VcGRhdGUiLCJ2IiwiYWN0aW9uIiwiZ2V0Iiwic2V0UHJvcHMiLCJfb25TdG9wIiwibnVtQWN0aXZlQWN0aW9ucyIsImFkZExpc3RlbmVyIiwib25TdGFydCIsImxlbmd0aCIsImZvckVhY2giLCJzdGFydCIsIm9uU3RvcCIsInN0b3AiLCJnZXRWZWxvY2l0eSIsInZlbG9jaXR5IiwiaXNBY3Rpb25Db21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGU7OztBQUNKLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsUUFDVEMsT0FEUyxHQUNzQkQsS0FEdEIsQ0FDVEMsT0FEUztBQUFBLFFBQ0dDLGNBREgsNEJBQ3NCRixLQUR0Qjs7QUFBQSxpREFFakIsbUJBQU1FLGNBQU4sQ0FGaUI7O0FBR2pCLFVBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFVBQUtDLFVBQUwsQ0FBZ0JMLE1BQU1DLE9BQXRCO0FBTGlCO0FBTWxCOzs0QkFFREksVSx1QkFBV0osTyxFQUFTO0FBQUE7O0FBQUEsMEJBQ1BLLEdBRE87QUFFaEIsVUFBSSxPQUFLRixVQUFMLENBQWdCRyxPQUFoQixDQUF3QkQsR0FBeEIsTUFBaUMsQ0FBQyxDQUF0QyxFQUF5QztBQUN2QyxlQUFLRixVQUFMLENBQWdCSSxJQUFoQixDQUFxQkYsR0FBckI7QUFDRDs7QUFFRCxhQUFLQSxHQUFMLElBQVlMLFFBQVFLLEdBQVIsQ0FBWjs7QUFFQSxVQUFNRyxXQUFXLFVBQUNDLENBQUQsRUFBSUMsTUFBSjtBQUFBLGVBQWUsT0FBS1IsT0FBTCxDQUFhRyxHQUFiLElBQW9CSyxPQUFPQyxHQUFQLEVBQW5DO0FBQUEsT0FBakI7O0FBRUE7QUFDQUgsZUFBUyxJQUFULEVBQWUsT0FBS0gsR0FBTCxDQUFmOztBQUVBLGFBQUtBLEdBQUwsRUFDR08sUUFESCxDQUNZO0FBQ1JDLGlCQUFTO0FBQUEsaUJBQU0sT0FBS0MsZ0JBQUwsRUFBTjtBQUFBO0FBREQsT0FEWixFQUlHQyxXQUpILENBSWVQLFFBSmY7QUFiZ0I7O0FBQ2xCLFNBQUssSUFBTUgsR0FBWCxJQUFrQkwsT0FBbEIsRUFBMkI7QUFBQSxZQUFoQkssR0FBZ0I7QUFpQjFCO0FBQ0YsRzs7NEJBRURXLE8sc0JBQVU7QUFBQTs7QUFDUixTQUFLRixnQkFBTCxHQUF3QixLQUFLWCxVQUFMLENBQWdCYyxNQUF4QztBQUNBLFNBQUtkLFVBQUwsQ0FBZ0JlLE9BQWhCLENBQXdCLFVBQUNiLEdBQUQ7QUFBQSxhQUFTLE9BQUtBLEdBQUwsRUFBVWMsS0FBVixFQUFUO0FBQUEsS0FBeEI7QUFDRCxHOzs0QkFFREMsTSxxQkFBUztBQUFBOztBQUNQLFNBQUtqQixVQUFMLENBQWdCZSxPQUFoQixDQUF3QixVQUFDYixHQUFEO0FBQUEsYUFBUyxPQUFLQSxHQUFMLEVBQVVnQixJQUFWLEVBQVQ7QUFBQSxLQUF4QjtBQUNELEc7OzRCQUVEQyxXLDBCQUFjO0FBQUE7O0FBQ1osUUFBTUMsV0FBVyxFQUFqQjtBQUNBLFNBQUtwQixVQUFMLENBQWdCZSxPQUFoQixDQUF3QixVQUFDYixHQUFEO0FBQUEsYUFBU2tCLFNBQVNsQixHQUFULElBQWdCLE9BQUtBLEdBQUwsRUFBVWlCLFdBQVYsRUFBekI7QUFBQSxLQUF4QjtBQUNBLFdBQU9DLFFBQVA7QUFDRCxHOzs0QkFFREMsZ0IsK0JBQW1CO0FBQ2pCLFdBQVEsS0FBS1YsZ0JBQUwsS0FBMEIsQ0FBbEM7QUFDRCxHOzs7OztrQkFHWSxVQUFDZCxPQUFELEVBQVVELEtBQVYsRUFBb0I7QUFDakMsU0FBTyxJQUFJRCxlQUFKO0FBQ0xFO0FBREssS0FFRkQsS0FGRSxFQUFQO0FBSUQsQyIsImZpbGUiOiJjb21wb3NpdGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcblxuY2xhc3MgQ29tcG9zaXRlQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBjb25zdCB7IGFjdGlvbnMsIC4uLnJlbWFpbmluZ1Byb3BzIH0gPSBwcm9wcztcbiAgICBzdXBlcihyZW1haW5pbmdQcm9wcyk7XG4gICAgdGhpcy5jdXJyZW50ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzID0gW107XG4gICAgdGhpcy5hZGRBY3Rpb25zKHByb3BzLmFjdGlvbnMpO1xuICB9XG5cbiAgYWRkQWN0aW9ucyhhY3Rpb25zKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYWN0aW9ucykge1xuICAgICAgaWYgKHRoaXMuYWN0aW9uS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uS2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXNba2V5XSA9IGFjdGlvbnNba2V5XTtcblxuICAgICAgY29uc3Qgb25VcGRhdGUgPSAodiwgYWN0aW9uKSA9PiB0aGlzLmN1cnJlbnRba2V5XSA9IGFjdGlvbi5nZXQoKTtcblxuICAgICAgLy8gSW1tZWRpYXRlbHkgdXBkYXRlIHdpdGggdGhlIGN1cnJlbnQgYWN0aW9uIHN0YXRlXG4gICAgICBvblVwZGF0ZShudWxsLCB0aGlzW2tleV0pO1xuXG4gICAgICB0aGlzW2tleV1cbiAgICAgICAgLnNldFByb3BzKHtcbiAgICAgICAgICBfb25TdG9wOiAoKSA9PiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLVxuICAgICAgICB9KVxuICAgICAgICAuYWRkTGlzdGVuZXIob25VcGRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gdGhpcy5hY3Rpb25LZXlzLmxlbmd0aDtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaCgoa2V5KSA9PiB0aGlzW2tleV0uc3RhcnQoKSk7XG4gIH1cblxuICBvblN0b3AoKSB7XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goKGtleSkgPT4gdGhpc1trZXldLnN0b3AoKSk7XG4gIH1cblxuICBnZXRWZWxvY2l0eSgpIHtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IHt9O1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKChrZXkpID0+IHZlbG9jaXR5W2tleV0gPSB0aGlzW2tleV0uZ2V0VmVsb2NpdHkoKSk7XG4gICAgcmV0dXJuIHZlbG9jaXR5O1xuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gKHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGFjdGlvbnMsIHByb3BzKSA9PiB7XG4gIHJldHVybiBuZXcgQ29tcG9zaXRlQWN0aW9uKHtcbiAgICBhY3Rpb25zLFxuICAgIC4uLnByb3BzXG4gIH0pO1xufTtcbiJdfQ==

/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _tween = __webpack_require__(15);
	
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
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Offset = function (_Action) {
	  _inherits(Offset, _Action);
	
	  function Offset() {
	    _classCallCheck(this, Offset);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Offset.prototype.onStart = function onStart() {
	    var _this2 = this;
	
	    var input = this.props.input;
	
	    this.inputOrigin = input.get();
	
	    this.scheduleUpdate = function () {
	      (0, _framesync.onFrameUpdate)(_this2.scheduledUpdate);
	    };
	
	    input.addListener(this.scheduleUpdate);
	  };
	
	  Offset.prototype.onStop = function onStop() {
	    var input = this.props.input;
	
	    input.removeListener(this.scheduleUpdate);
	  };
	
	  Offset.prototype.update = function update() {
	    var _props = this.props,
	        input = _props.input,
	        from = _props.from;
	
	    var offset = input.get() - this.inputOrigin;
	    return from + offset;
	  };
	
	  return Offset;
	}(_2.default);
	
	Offset.defaultProps = {
	  from: 0,
	  passive: true
	};
	
	exports.default = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  if (args.length === 1) {
	    var props = args[0];
	
	    return new Offset(props);
	  } else {
	    var input = args[0],
	        onUpdate = args[1],
	        _props2 = args[2];
	
	    return new Offset(_extends({
	      input: input,
	      onUpdate: onUpdate
	    }, _props2));
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL29mZnNldC5qcyJdLCJuYW1lcyI6WyJPZmZzZXQiLCJvblN0YXJ0IiwiaW5wdXQiLCJwcm9wcyIsImlucHV0T3JpZ2luIiwiZ2V0Iiwic2NoZWR1bGVVcGRhdGUiLCJzY2hlZHVsZWRVcGRhdGUiLCJhZGRMaXN0ZW5lciIsIm9uU3RvcCIsInJlbW92ZUxpc3RlbmVyIiwidXBkYXRlIiwiZnJvbSIsIm9mZnNldCIsImRlZmF1bHRQcm9wcyIsInBhc3NpdmUiLCJhcmdzIiwibGVuZ3RoIiwib25VcGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsTTs7Ozs7Ozs7O21CQU1KQyxPLHNCQUFVO0FBQUE7O0FBQUEsUUFDQUMsS0FEQSxHQUNVLEtBQUtDLEtBRGYsQ0FDQUQsS0FEQTs7QUFFUixTQUFLRSxXQUFMLEdBQW1CRixNQUFNRyxHQUFOLEVBQW5COztBQUVBLFNBQUtDLGNBQUwsR0FBc0IsWUFBTTtBQUMxQixvQ0FBYyxPQUFLQyxlQUFuQjtBQUNELEtBRkQ7O0FBSUFMLFVBQU1NLFdBQU4sQ0FBa0IsS0FBS0YsY0FBdkI7QUFDRCxHOzttQkFFREcsTSxxQkFBUztBQUFBLFFBQ0NQLEtBREQsR0FDVyxLQUFLQyxLQURoQixDQUNDRCxLQUREOztBQUVQQSxVQUFNUSxjQUFOLENBQXFCLEtBQUtKLGNBQTFCO0FBQ0QsRzs7bUJBRURLLE0scUJBQVM7QUFBQSxpQkFDaUIsS0FBS1IsS0FEdEI7QUFBQSxRQUNDRCxLQURELFVBQ0NBLEtBREQ7QUFBQSxRQUNRVSxJQURSLFVBQ1FBLElBRFI7O0FBRVAsUUFBTUMsU0FBU1gsTUFBTUcsR0FBTixLQUFjLEtBQUtELFdBQWxDO0FBQ0EsV0FBT1EsT0FBT0MsTUFBZDtBQUNELEc7Ozs7O0FBMUJHYixNLENBQ0djLFksR0FBZTtBQUNwQkYsUUFBTSxDQURjO0FBRXBCRyxXQUFTO0FBRlcsQzs7a0JBNEJULFlBQWE7QUFBQSxvQ0FBVEMsSUFBUztBQUFUQSxRQUFTO0FBQUE7O0FBQzFCLE1BQUlBLEtBQUtDLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFBQSxRQUNiZCxLQURhLEdBQ0hhLElBREc7O0FBRXJCLFdBQU8sSUFBSWhCLE1BQUosQ0FBV0csS0FBWCxDQUFQO0FBQ0QsR0FIRCxNQUdPO0FBQUEsUUFDR0QsS0FESCxHQUM4QmMsSUFEOUI7QUFBQSxRQUNVRSxRQURWLEdBQzhCRixJQUQ5QjtBQUFBLFFBQ29CYixPQURwQixHQUM4QmEsSUFEOUI7O0FBRUwsV0FBTyxJQUFJaEIsTUFBSjtBQUNMRSxrQkFESztBQUVMZ0I7QUFGSyxPQUdGZixPQUhFLEVBQVA7QUFLRDtBQUNGLEMiLCJmaWxlIjoib2Zmc2V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgeyBvbkZyYW1lVXBkYXRlIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcblxuY2xhc3MgT2Zmc2V0IGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBmcm9tOiAwLFxuICAgIHBhc3NpdmU6IHRydWVcbiAgfTtcblxuICBvblN0YXJ0KCkge1xuICAgIGNvbnN0IHsgaW5wdXQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5pbnB1dE9yaWdpbiA9IGlucHV0LmdldCgpO1xuXG4gICAgdGhpcy5zY2hlZHVsZVVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIG9uRnJhbWVVcGRhdGUodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH07XG5cbiAgICBpbnB1dC5hZGRMaXN0ZW5lcih0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgfVxuXG4gIG9uU3RvcCgpIHtcbiAgICBjb25zdCB7IGlucHV0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlucHV0LnJlbW92ZUxpc3RlbmVyKHRoaXMuc2NoZWR1bGVVcGRhdGUpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHsgaW5wdXQsIGZyb20gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgb2Zmc2V0ID0gaW5wdXQuZ2V0KCkgLSB0aGlzLmlucHV0T3JpZ2luO1xuICAgIHJldHVybiBmcm9tICsgb2Zmc2V0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICguLi5hcmdzKSA9PiB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IFsgcHJvcHMgXSA9IGFyZ3M7XG4gICAgcmV0dXJuIG5ldyBPZmZzZXQocHJvcHMpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IFsgaW5wdXQsIG9uVXBkYXRlLCBwcm9wcyBdID0gYXJncztcbiAgICByZXR1cm4gbmV3IE9mZnNldCh7XG4gICAgICBpbnB1dCxcbiAgICAgIG9uVXBkYXRlLFxuICAgICAgLi4ucHJvcHNcbiAgICB9KTtcbiAgfVxufTtcbiJdfQ==

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
	
	var _composite = __webpack_require__(8);
	
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
	    passive: true,
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BvaW50ZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlUG9pbnRlciIsIngiLCJ5IiwiZXZlbnRUb1BvaW50cyIsIm1vdmVFdmVudCIsInByb3BzIiwicG9pbnRlciIsInBhc3NpdmUiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZVBvaW50ZXIiLCJlIiwicG9pbnRzIiwic2V0Iiwic2V0UHJvcHMiLCJfb25TdGFydCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9vblN0b3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibW91c2VFdmVudFRvUG9pbnQiLCJwYWdlWCIsInBhZ2VZIiwidG91Y2hFdmVudFRvUG9pbnQiLCJjaGFuZ2VkVG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwiZ2V0TmF0aXZlRXZlbnQiLCJvcmlnaW5hbEV2ZW50IiwibmF0aXZlRXZlbnQiLCJ0b3VjaGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztBQUVBLFNBQVNBLGFBQVQsY0FBeUU7QUFBQSxNQUFoREMsQ0FBZ0QsU0FBaERBLENBQWdEO0FBQUEsTUFBN0NDLENBQTZDLFNBQTdDQSxDQUE2Qzs7QUFBQSxNQUF0Q0MsYUFBc0MsUUFBdENBLGFBQXNDO0FBQUEsTUFBdkJDLFNBQXVCLFFBQXZCQSxTQUF1QjtBQUFBLE1BQVRDLEtBQVM7O0FBQ3ZFLE1BQU1DLFVBQVUseUJBQVU7QUFDeEJMLE9BQUcscUJBQU1BLENBQU4sQ0FEcUI7QUFFeEJDLE9BQUcscUJBQU1BLENBQU47QUFGcUIsR0FBVjtBQUlkSyxhQUFTLElBSks7QUFLZEMsb0JBQWdCO0FBTEYsS0FNWEgsS0FOVyxFQUFoQjs7QUFTQSxNQUFNSSxnQkFBZ0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQzNCLFFBQUlMLE1BQU1HLGNBQVYsRUFBMEI7QUFDeEJFLFFBQUVGLGNBQUY7QUFDRDs7QUFFRCxRQUFNRyxTQUFTUixjQUFjTyxDQUFkLENBQWY7QUFDQUosWUFBUUwsQ0FBUixDQUFVVyxHQUFWLENBQWNELE9BQU9WLENBQXJCO0FBQ0FLLFlBQVFKLENBQVIsQ0FBVVUsR0FBVixDQUFjRCxPQUFPVCxDQUFyQjtBQUNELEdBUkQ7O0FBVUFJLFVBQVFPLFFBQVIsQ0FBaUI7QUFDZkMsY0FBVTtBQUFBLGFBQU1DLFNBQVNDLGVBQVQsQ0FBeUJDLGdCQUF6QixDQUEwQ2IsU0FBMUMsRUFBcURLLGFBQXJELENBQU47QUFBQSxLQURLO0FBRWZTLGFBQVM7QUFBQSxhQUFNSCxTQUFTQyxlQUFULENBQXlCRyxtQkFBekIsQ0FBNkNmLFNBQTdDLEVBQXdESyxhQUF4RCxDQUFOO0FBQUE7QUFGTSxHQUFqQjs7QUFLQSxTQUFPSCxPQUFQO0FBQ0Q7O0FBRUQsSUFBTWMsb0JBQW9CLFVBQUNWLENBQUQ7QUFBQSxTQUFRO0FBQ2hDVCxPQUFHUyxFQUFFVyxLQUQyQjtBQUVoQ25CLE9BQUdRLEVBQUVZO0FBRjJCLEdBQVI7QUFBQSxDQUExQjs7QUFLQSxJQUFNQyxvQkFBb0I7QUFBQSxNQUFHQyxjQUFILFNBQUdBLGNBQUg7QUFBQSxTQUF5QjtBQUNqRHZCLE9BQUd1QixlQUFlLENBQWYsRUFBa0JDLE9BRDRCO0FBRWpEdkIsT0FBR3NCLGVBQWUsQ0FBZixFQUFrQkU7QUFGNEIsR0FBekI7QUFBQSxDQUExQjs7QUFLQSxJQUFNQyxpQkFBaUIsVUFBQ2pCLENBQUQ7QUFBQSxTQUFPQSxFQUFFa0IsYUFBRixJQUFtQmxCLEVBQUVtQixXQUFyQixJQUFvQ25CLENBQTNDO0FBQUEsQ0FBdkI7O2tCQUVlLFVBQUNBLENBQUQsRUFBSUwsS0FBSixFQUFjO0FBQzNCLE1BQU13QixjQUFjRixlQUFlakIsQ0FBZixDQUFwQjtBQUNBLFNBQVFtQixZQUFZQyxPQUFiLEdBQ0w5QixjQUFjdUIsa0JBQWtCYixDQUFsQixDQUFkO0FBQ0VOLGVBQVcsV0FEYjtBQUVFRCxtQkFBZW9CO0FBRmpCLEtBR0tsQixLQUhMLEVBREssR0FNTEwsY0FBY29CLGtCQUFrQlYsQ0FBbEIsQ0FBZDtBQUNFTixlQUFXLFdBRGI7QUFFRUQsbUJBQWVpQjtBQUZqQixLQUdLZixLQUhMLEVBTkY7QUFXRCxDIiwiZmlsZSI6InBvaW50ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFsdWUgZnJvbSAnLi92YWx1ZSc7XG5pbXBvcnQgY29tcG9zaXRlIGZyb20gJy4vY29tcG9zaXRlJztcblxuZnVuY3Rpb24gY3JlYXRlUG9pbnRlcih7IHgsIHkgfSwgeyBldmVudFRvUG9pbnRzLCBtb3ZlRXZlbnQsIC4uLnByb3BzIH0pIHtcbiAgY29uc3QgcG9pbnRlciA9IGNvbXBvc2l0ZSh7XG4gICAgeDogdmFsdWUoeCksXG4gICAgeTogdmFsdWUoeSlcbiAgfSwge1xuICAgIHBhc3NpdmU6IHRydWUsXG4gICAgcHJldmVudERlZmF1bHQ6IHRydWUsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG5cbiAgY29uc3QgdXBkYXRlUG9pbnRlciA9IChlKSA9PiB7XG4gICAgaWYgKHByb3BzLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRzID0gZXZlbnRUb1BvaW50cyhlKTtcbiAgICBwb2ludGVyLnguc2V0KHBvaW50cy54KTtcbiAgICBwb2ludGVyLnkuc2V0KHBvaW50cy55KTtcbiAgfTtcblxuICBwb2ludGVyLnNldFByb3BzKHtcbiAgICBfb25TdGFydDogKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVQb2ludGVyKSxcbiAgICBfb25TdG9wOiAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpXG4gIH0pO1xuXG4gIHJldHVybiBwb2ludGVyO1xufVxuXG5jb25zdCBtb3VzZUV2ZW50VG9Qb2ludCA9IChlKSA9PiAoe1xuICB4OiBlLnBhZ2VYLFxuICB5OiBlLnBhZ2VZXG59KTtcblxuY29uc3QgdG91Y2hFdmVudFRvUG9pbnQgPSAoeyBjaGFuZ2VkVG91Y2hlcyB9KSA9PiAoe1xuICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG59KTtcblxuY29uc3QgZ2V0TmF0aXZlRXZlbnQgPSAoZSkgPT4gZS5vcmlnaW5hbEV2ZW50IHx8IGUubmF0aXZlRXZlbnQgfHwgZTtcblxuZXhwb3J0IGRlZmF1bHQgKGUsIHByb3BzKSA9PiB7XG4gIGNvbnN0IG5hdGl2ZUV2ZW50ID0gZ2V0TmF0aXZlRXZlbnQoZSk7XG4gIHJldHVybiAobmF0aXZlRXZlbnQudG91Y2hlcykgP1xuICAgIGNyZWF0ZVBvaW50ZXIodG91Y2hFdmVudFRvUG9pbnQoZSksIHtcbiAgICAgIG1vdmVFdmVudDogJ3RvdWNobW92ZScsXG4gICAgICBldmVudFRvUG9pbnRzOiB0b3VjaEV2ZW50VG9Qb2ludCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSkgOlxuICAgIGNyZWF0ZVBvaW50ZXIobW91c2VFdmVudFRvUG9pbnQoZSksIHtcbiAgICAgIG1vdmVFdmVudDogJ21vdXNlbW92ZScsXG4gICAgICBldmVudFRvUG9pbnRzOiBtb3VzZUV2ZW50VG9Qb2ludCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSk7XG59O1xuIl19

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
	  };
	
	  Tween.prototype.update = function update() {
	    var _props2 = this.props,
	        duration = _props2.duration,
	        ease = _props2.ease,
	        from = _props2.from,
	        to = _props2.to,
	        playDirection = _props2.playDirection;
	
	
	    this.elapsed += (0, _framesync.timeSinceLastFrame)() * playDirection;
	
	    return (0, _calc.getValueFromProgress)(from, to, ease(clampProgress((0, _calc.getProgressFromValue)(0, duration, this.elapsed))));
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3R3ZWVuLmpzIl0sIm5hbWVzIjpbImNsYW1wUHJvZ3Jlc3MiLCJORVhUX1NURVBTIiwibG9vcCIsInR3ZWVuIiwic3RhcnQiLCJ5b3lvIiwicmV2ZXJzZSIsImZsaXAiLCJUd2VlbiIsIm9uU3RhcnQiLCJwcm9wcyIsImR1cmF0aW9uIiwicGxheURpcmVjdGlvbiIsImVsYXBzZWQiLCJ1cGRhdGUiLCJlYXNlIiwiZnJvbSIsInRvIiwiaXNBY3Rpb25Db21wbGV0ZSIsImlzQ29tcGxldGUiLCJpc1N0ZXBUYWtlbiIsImtleSIsIm5leHRTdGVwIiwiY291bnRQcm9wIiwic3RlcE1heCIsImdldFByb3AiLCJzdGVwQ291bnQiLCJzZXRQcm9wcyIsImdldEVsYXBzZWQiLCJkZWZhdWx0UHJvcHMiLCJmbGlwQ291bnQiLCJ5b3lvQ291bnQiLCJsb29wQ291bnQiLCJhcmdzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLHlCQUFNLENBQU4sRUFBUyxDQUFULENBQXRCOztBQUVBLElBQU1DLGFBQWE7QUFDakJDLFFBQU0sVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLE1BQU1DLEtBQU4sRUFBWDtBQUFBLEdBRFc7QUFFakJDLFFBQU0sVUFBQ0YsS0FBRDtBQUFBLFdBQVdBLE1BQU1HLE9BQU4sR0FBZ0JGLEtBQWhCLEVBQVg7QUFBQSxHQUZXO0FBR2pCRyxRQUFNLFVBQUNKLEtBQUQ7QUFBQSxXQUFXQSxNQUFNSSxJQUFOLEdBQWFILEtBQWIsRUFBWDtBQUFBO0FBSFcsQ0FBbkI7O0lBTU1JLEs7Ozs7Ozs7OztrQkFlSkMsTyxzQkFBVTtBQUFBLGlCQUM0QixLQUFLQyxLQURqQztBQUFBLFFBQ0FDLFFBREEsVUFDQUEsUUFEQTtBQUFBLFFBQ1VDLGFBRFYsVUFDVUEsYUFEVjs7O0FBR1IsU0FBS0MsT0FBTCxHQUFnQkQsa0JBQWtCLENBQW5C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YnhCLEtBRGEsR0FDSHVCLElBREc7O0FBRXJCLFdBQU8sSUFBSXpCLEtBQUosQ0FBVUUsS0FBVixDQUFQO0FBQ0QsR0FIRCxNQUdPO0FBQUEsUUFDR00sSUFESCxHQUN1Q2lCLElBRHZDO0FBQUEsUUFDU2hCLEVBRFQsR0FDdUNnQixJQUR2QztBQUFBLFFBQ2F0QixRQURiLEdBQ3VDc0IsSUFEdkM7QUFBQSxRQUN1QmxCLElBRHZCLEdBQ3VDa0IsSUFEdkM7QUFBQSxRQUM2QnZCLE9BRDdCLEdBQ3VDdUIsSUFEdkM7O0FBRUwsV0FBTyxJQUFJekIsS0FBSixZQUFZUSxVQUFaLEVBQWtCQyxNQUFsQixFQUFzQk4sa0JBQXRCLEVBQWdDSSxVQUFoQyxJQUF5Q0wsT0FBekMsRUFBUDtBQUNEO0FBQ0YsQyIsImZpbGUiOiJ0d2Vlbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgdGltZVNpbmNlTGFzdEZyYW1lIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcbmltcG9ydCB7IGNsYW1wIH0gZnJvbSAnLi4vaW5jL3RyYW5zZm9ybWVycyc7XG5pbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBlYXNlT3V0IH0gZnJvbSAnLi4vaW5jL2Vhc2luZyc7XG5cbmNvbnN0IGNsYW1wUHJvZ3Jlc3MgPSBjbGFtcCgwLCAxKTtcblxuY29uc3QgTkVYVF9TVEVQUyA9IHtcbiAgbG9vcDogKHR3ZWVuKSA9PiB0d2Vlbi5zdGFydCgpLFxuICB5b3lvOiAodHdlZW4pID0+IHR3ZWVuLnJldmVyc2UoKS5zdGFydCgpLFxuICBmbGlwOiAodHdlZW4pID0+IHR3ZWVuLmZsaXAoKS5zdGFydCgpXG59O1xuXG5jbGFzcyBUd2VlbiBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZHVyYXRpb246IDMwMCxcbiAgICBlYXNlOiBlYXNlT3V0LFxuICAgIGZyb206IDAsXG4gICAgdG86IDEsXG4gICAgZmxpcDogMCxcbiAgICBmbGlwQ291bnQ6IDAsXG4gICAgeW95bzogMCxcbiAgICB5b3lvQ291bnQ6IDAsXG4gICAgbG9vcDogMCxcbiAgICBsb29wQ291bnQ6IDAsXG4gICAgcGxheURpcmVjdGlvbjogMVxuICB9O1xuXG4gIG9uU3RhcnQoKSB7XG4gICAgY29uc3QgeyBkdXJhdGlvbiwgcGxheURpcmVjdGlvbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuZWxhcHNlZCA9IChwbGF5RGlyZWN0aW9uID09PSAxKSA/IDAgOiBkdXJhdGlvbjtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGR1cmF0aW9uLCBlYXNlLCBmcm9tLCB0bywgcGxheURpcmVjdGlvbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuZWxhcHNlZCArPSB0aW1lU2luY2VMYXN0RnJhbWUoKSAqIHBsYXlEaXJlY3Rpb247XG5cbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZnJvbSwgdG8sIGVhc2UoY2xhbXBQcm9ncmVzcyhnZXRQcm9ncmVzc0Zyb21WYWx1ZSgwLCBkdXJhdGlvbiwgdGhpcy5lbGFwc2VkKSkpKTtcbiAgfVxuXG4gIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgY29uc3QgeyBkdXJhdGlvbiwgcGxheURpcmVjdGlvbiwgeW95bywgbG9vcCwgZmxpcCB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgaXNDb21wbGV0ZSA9IChwbGF5RGlyZWN0aW9uID09PSAxKSA/ICh0aGlzLmVsYXBzZWQgPj0gZHVyYXRpb24pIDogKHRoaXMuZWxhcHNlZCA8PSAwKTtcblxuICAgIGlmIChpc0NvbXBsZXRlICYmICh5b3lvIHx8IGxvb3AgfHwgZmxpcCkpIHtcbiAgICAgIGxldCBpc1N0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBrZXkgaW4gTkVYVF9TVEVQUykge1xuICAgICAgICBjb25zdCBuZXh0U3RlcCA9IE5FWFRfU1RFUFNba2V5XTtcbiAgICAgICAgY29uc3QgY291bnRQcm9wID0ga2V5ICsgJ0NvdW50JztcbiAgICAgICAgY29uc3Qgc3RlcE1heCA9IHRoaXMuZ2V0UHJvcChrZXkpO1xuICAgICAgICBjb25zdCBzdGVwQ291bnQgPSB0aGlzLmdldFByb3AoY291bnRQcm9wKTtcblxuICAgICAgICBpZiAoc3RlcE1heCA+IHN0ZXBDb3VudCkge1xuICAgICAgICAgIHRoaXMuc2V0UHJvcHMoe1xuICAgICAgICAgICAgW2NvdW50UHJvcF06IHN0ZXBDb3VudCArIDFcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBuZXh0U3RlcCh0aGlzKTtcbiAgICAgICAgICBpc1N0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzU3RlcFRha2VuKSBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzQ29tcGxldGU7XG4gIH1cblxuICBnZXRFbGFwc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmVsYXBzZWQ7XG4gIH1cblxuICBmbGlwKCkge1xuICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMucHJvcHMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG4gICAgW3RoaXMucHJvcHMuZnJvbSwgdGhpcy5wcm9wcy50b10gPSBbdGhpcy5wcm9wcy50bywgdGhpcy5wcm9wcy5mcm9tXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldmVyc2UoKSB7XG4gICAgdGhpcy5wcm9wcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICguLi5hcmdzKSA9PiB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IFsgcHJvcHMgXSA9IGFyZ3M7XG4gICAgcmV0dXJuIG5ldyBUd2Vlbihwcm9wcyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgWyBmcm9tLCB0bywgZHVyYXRpb24sIGVhc2UsIHByb3BzIF0gPSBhcmdzO1xuICAgIHJldHVybiBuZXcgVHdlZW4oeyBmcm9tLCB0bywgZHVyYXRpb24sIGVhc2UsIC4uLnByb3BzIH0pO1xuICB9XG59O1xuIl19

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _chain = __webpack_require__(7);
	
	var _chain2 = _interopRequireDefault(_chain);
	
	var _parallel = __webpack_require__(12);
	
	var _parallel2 = _interopRequireDefault(_parallel);
	
	var _delay = __webpack_require__(10);
	
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
	
	var _onNextFrame = __webpack_require__(25);
	
	var _onNextFrame2 = _interopRequireDefault(_onNextFrame);
	
	var _createRenderStep = __webpack_require__(26);
	
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
	      this.isActive = true;
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
	      this.isActive = false;
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
	
	    if (!passive && this.isActive) {
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
	    return this.isActive;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFjdGlvbiIsInByb3BzIiwic2NoZWR1bGVkVXBkYXRlIiwiYmluZCIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdFByb3BzIiwic2V0UHJvcHMiLCJjdXJyZW50IiwiZnJvbSIsInN0YXJ0Iiwib25TdGFydCIsIl9vblN0YXJ0IiwicGFzc2l2ZSIsImlzQWN0aXZlIiwic3RvcCIsIm9uU3RvcCIsIl9vblN0b3AiLCJjb21wbGV0ZSIsIm9uQ29tcGxldGUiLCJfb25Db21wbGV0ZSIsImxhc3RVcGRhdGVkIiwicHJldiIsIm9uVXBkYXRlIiwidXBkYXRlIiwiZmlyZUxpc3RlbmVycyIsImlzQWN0aW9uQ29tcGxldGUiLCJnZXQiLCJzZXQiLCJ2IiwiZ2V0UHJvcCIsImtleSIsImdldFZlbG9jaXR5IiwiYWRkTGlzdGVuZXIiLCJsaXN0ZW5lciIsImxpc3RlbmVycyIsIm51bUxpc3RlbmVycyIsImluZGV4T2YiLCJwdXNoIiwicmVtb3ZlTGlzdGVuZXIiLCJsaXN0ZW5lckluZGV4Iiwic3BsaWNlIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUFFTUEsTTtBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtDLGVBQUwsR0FBdUIsS0FBS0EsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkI7O0FBRUEsU0FBS0YsS0FBTCxnQkFDSyxLQUFLRyxXQUFMLENBQWlCQyxZQUR0Qjs7QUFJQSxTQUFLQyxRQUFMLENBQWNMLEtBQWQ7O0FBRUEsU0FBS00sT0FBTCxHQUFlTixNQUFNTSxPQUFOLElBQWlCTixNQUFNTyxJQUF2QixJQUErQixDQUE5QztBQUNEOzttQkFFREMsSyxvQkFBUTtBQUFBLGlCQUNpQyxLQUFLUixLQUR0QztBQUFBLFFBQ0VTLE9BREYsVUFDRUEsT0FERjtBQUFBLFFBQ1dDLFFBRFgsVUFDV0EsUUFEWDtBQUFBLFFBQ3FCQyxPQURyQixV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QUFMLEdBQW9CLEtBQUtBLFlBQUwsSUFBcUIsQ0FBekM7QUFDQSxRQUFJLEtBQUtELFNBQUwsQ0FBZUUsT0FBZixDQUF1QkgsUUFBdkIsTUFBcUMsQ0FBQyxDQUExQyxFQUE2QztBQUMzQyxXQUFLQyxTQUFMLENBQWVHLElBQWYsQ0FBb0JKLFFBQXBCO0FBQ0EsV0FBS0UsWUFBTDtBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0QsRzs7bUJBRURHLGMsMkJBQWVMLFEsRUFBVTtBQUN2QixRQUFNTSxnQkFBaUIsS0FBS0wsU0FBTixHQUFtQixLQUFLQSxTQUFMLENBQWVFLE9BQWYsQ0FBdUJILFFBQXZCLENBQW5CLEdBQXNELENBQUMsQ0FBN0U7QUFDQSxRQUFJTSxrQkFBa0IsQ0FBQyxDQUF2QixFQUEwQjtBQUN4QixXQUFLSixZQUFMO0FBQ0EsV0FBS0QsU0FBTCxDQUFlTSxNQUFmLENBQXNCRCxhQUF0QixFQUFxQyxDQUFyQztBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0QsRzs7bUJBRURmLGEsNEJBQWdCO0FBQ2QsUUFBTWpCLFVBQVUsS0FBS21CLEdBQUwsRUFBaEI7QUFDQSxTQUFLLElBQUllLElBQUksQ0FBYixFQUFnQkEsSUFBSSxLQUFLTixZQUF6QixFQUF1Q00sR0FBdkMsRUFBNEM7QUFDMUMsV0FBS1AsU0FBTCxDQUFlTyxDQUFmLEVBQWtCbEMsT0FBbEIsRUFBMkIsSUFBM0I7QUFDRDtBQUNELFdBQU8sSUFBUDtBQUNELEc7Ozs7O2tCQUdZUCxNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb25GcmFtZVVwZGF0ZSwgY2FuY2VsT25GcmFtZVVwZGF0ZSwgdGltZVNpbmNlTGFzdEZyYW1lIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcbmltcG9ydCB7IHNwZWVkUGVyU2Vjb25kIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jbGFzcyBBY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMuc2NoZWR1bGVkVXBkYXRlID0gdGhpcy5zY2hlZHVsZWRVcGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wc1xuICAgIH07XG5cbiAgICB0aGlzLnNldFByb3BzKHByb3BzKTtcblxuICAgIHRoaXMuY3VycmVudCA9IHByb3BzLmN1cnJlbnQgfHwgcHJvcHMuZnJvbSB8fCAwO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgY29uc3QgeyBvblN0YXJ0LCBfb25TdGFydCwgcGFzc2l2ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICBvbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB0aGlzLm9uU3RhcnQoKTtcbiAgICBpZiAob25TdGFydCkgb25TdGFydCh0aGlzKTtcbiAgICBpZiAoX29uU3RhcnQpIF9vblN0YXJ0KHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNvbnN0IHsgb25TdG9wLCBfb25TdG9wLCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICBjYW5jZWxPbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0b3ApIHRoaXMub25TdG9wKCk7XG4gICAgaWYgKG9uU3RvcCkgb25TdG9wKHRoaXMpO1xuICAgIGlmIChfb25TdG9wKSBfb25TdG9wKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICBjb25zdCB7IG9uQ29tcGxldGUsIF9vbkNvbXBsZXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5zdG9wKCk7XG5cbiAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSh0aGlzKTtcbiAgICBpZiAoX29uQ29tcGxldGUpIF9vbkNvbXBsZXRlKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzY2hlZHVsZWRVcGRhdGUoKSB7XG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9IHRpbWVTaW5jZUxhc3RGcmFtZSgpO1xuICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudDtcblxuICAgIGNvbnN0IHsgb25VcGRhdGUsIHBhc3NpdmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodGhpcy51cGRhdGUpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMudXBkYXRlKHRoaXMuY3VycmVudCk7XG4gICAgfVxuXG4gICAgaWYgKG9uVXBkYXRlKSBvblVwZGF0ZSh0aGlzLmN1cnJlbnQsIHRoaXMpO1xuICAgIHRoaXMuZmlyZUxpc3RlbmVycygpO1xuXG4gICAgaWYgKCFwYXNzaXZlICYmIHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIG9uRnJhbWVVcGRhdGUodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQWN0aW9uQ29tcGxldGUgJiYgdGhpcy5pc0FjdGlvbkNvbXBsZXRlKCkpIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICAuLi5wcm9wc1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfVxuXG4gIHNldCh2KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFByb3Aoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHNba2V5XTtcbiAgfVxuXG4gIGdldFZlbG9jaXR5KCkge1xuICAgIHJldHVybiBzcGVlZFBlclNlY29uZCh0aGlzLmN1cnJlbnQgLSB0aGlzLnByZXYsIHRoaXMubGFzdFVwZGF0ZWQpO1xuICB9XG5cbiAgaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNBY3RpdmU7XG4gIH1cblxuICBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMgfHwgW107XG4gICAgdGhpcy5udW1MaXN0ZW5lcnMgPSB0aGlzLm51bUxpc3RlbmVycyB8fCAwO1xuICAgIGlmICh0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMrKztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIGNvbnN0IGxpc3RlbmVySW5kZXggPSAodGhpcy5saXN0ZW5lcnMpID8gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgOiAtMTtcbiAgICBpZiAobGlzdGVuZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzLS07XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UobGlzdGVuZXJJbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZmlyZUxpc3RlbmVycygpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5nZXQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtTGlzdGVuZXJzOyBpKyspIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzW2ldKGN1cnJlbnQsIHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb247XG4iXX0=

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
	
	var _render = __webpack_require__(27);
	
	var _render2 = _interopRequireDefault(_render);
	
	var _transformProps = __webpack_require__(28);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(29);
	
	var _valueTypes2 = _interopRequireDefault(_valueTypes);
	
	var _prefixer = __webpack_require__(30);
	
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
	
	var _build = __webpack_require__(31);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _transformProps = __webpack_require__(28);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(32);
	
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
	
	var _build = __webpack_require__(33);
	
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
	exports.getColorValues = exports.findValueAndUnit = exports.createUnitType = exports.isFirstChars = exports.contains = exports.splitCommaDelimited = exports.setDOMAttrs = exports.isString = exports.isObj = exports.isNum = exports.isFunc = exports.isArray = exports.hasProperty = exports.currentTime = exports.camelToDash = undefined;
	exports.splitColorValues = splitColorValues;
	
	var _transformers = __webpack_require__(4);
	
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
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = buildStylePropertyString;
	
	var _transformProps = __webpack_require__(28);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(29);
	
	var _valueTypes2 = _interopRequireDefault(_valueTypes);
	
	var _prefixer = __webpack_require__(30);
	
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
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(24);
	
	var _transformProps = __webpack_require__(28);
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzg2MWE2MzM5ZjBlOTQ5MWFkZGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGFyYWxsZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wb2ludGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL29uLW5leHQtZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9jcmVhdGUtcmVuZGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy92YWx1ZS10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy9wcmVmaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy92YWx1ZS10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7O0FDdENBOztBQUVBOztBQUVBOztBQUVBLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUTtBQUNBLDRDQUEyQyxtWjs7Ozs7O0FDVDNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxtekY7Ozs7OztBQ3ZMM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLHV5Vjs7Ozs7O0FDak4zQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLCs1Qjs7Ozs7O0FDbEIzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLCtzRiIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDM4NjFhNjMzOWYwZTk0OTFhZGRjXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3BvcG1vdGlvbiA9IHJlcXVpcmUoJy4vcG9wbW90aW9uJyk7XG5cbnZhciBwb3Btb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcG9wbW90aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxud2luZG93LnBvcG1vdGlvbiA9IHBvcG1vdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bmJHOWlZV3d1YW5NaVhTd2libUZ0WlhNaU9sc2ljRzl3Ylc5MGFXOXVJaXdpZDJsdVpHOTNJbDBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCT3p0SlFVRlpRU3hUT3pzN08wRkJRMXBETEU5QlFVOUVMRk5CUVZBc1IwRkJiVUpCTEZOQlFXNUNJaXdpWm1sc1pTSTZJbWRzYjJKaGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENBcUlHRnpJSEJ2Y0cxdmRHbHZiaUJtY205dElDY3VMM0J2Y0cxdmRHbHZiaWM3WEc1M2FXNWtiM2N1Y0c5d2JXOTBhVzl1SUQwZ2NHOXdiVzkwYVc5dU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN2Z1BhdGggPSBleHBvcnRzLnN2ZyA9IGV4cG9ydHMuY3NzID0gZXhwb3J0cy5SZW5kZXJlciA9IGV4cG9ydHMudmFsdWUgPSBleHBvcnRzLnN0YWdnZXIgPSBleHBvcnRzLnR3ZWVuID0gZXhwb3J0cy5wb2ludGVyID0gZXhwb3J0cy5waHlzaWNzID0gZXhwb3J0cy5wYXJhbGxlbCA9IGV4cG9ydHMub2Zmc2V0ID0gZXhwb3J0cy5kZWxheSA9IGV4cG9ydHMuY3Jvc3NGYWRlID0gZXhwb3J0cy5jb21wb3NpdGUgPSBleHBvcnRzLmNoYWluID0gZXhwb3J0cy5ibGVuZFR3ZWVucyA9IGV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy52YWx1ZVR5cGVzID0gZXhwb3J0cy50cmFuc2Zvcm0gPSBleHBvcnRzLmVhc2luZyA9IGV4cG9ydHMuY2FsYyA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4vZnJhbWVzeW5jJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVN0YXJ0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lU3RhcnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lVXBkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVJlbmRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVJlbmRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVFbmQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVFbmQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lU3RhcnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVTdGFydDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVVcGRhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVVcGRhdGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lUmVuZGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lUmVuZGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZUVuZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZUVuZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3RpbWVTaW5jZUxhc3RGcmFtZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3VycmVudEZyYW1lVGltZXN0YW1wJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jdXJyZW50RnJhbWVUaW1lc3RhbXA7XG4gIH1cbn0pO1xuXG52YXIgX2NhbGMyID0gcmVxdWlyZSgnLi9pbmMvY2FsYycpO1xuXG52YXIgX2NhbGMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY2FsYzIpO1xuXG52YXIgX2Vhc2luZzIgPSByZXF1aXJlKCcuL2luYy9lYXNpbmcnKTtcblxudmFyIF9lYXNpbmcgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfZWFzaW5nMik7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdHJhbnNmb3JtID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3RyYW5zZm9ybWVycyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSByZXF1aXJlKCcuL2luYy92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdmFsdWVUeXBlczIpO1xuXG52YXIgX2FjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMnKTtcblxudmFyIF9hY3Rpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FjdGlvbnMpO1xuXG52YXIgX2JsZW5kVHdlZW5zMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9ibGVuZC10d2VlbnMnKTtcblxudmFyIF9ibGVuZFR3ZWVuczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ibGVuZFR3ZWVuczIpO1xuXG52YXIgX2NoYWluMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jaGFpbicpO1xuXG52YXIgX2NoYWluMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoYWluMik7XG5cbnZhciBfY29tcG9zaXRlMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jb21wb3NpdGUnKTtcblxudmFyIF9jb21wb3NpdGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRlMik7XG5cbnZhciBfY3Jvc3NGYWRlMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jcm9zcy1mYWRlJyk7XG5cbnZhciBfY3Jvc3NGYWRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nyb3NzRmFkZTIpO1xuXG52YXIgX2RlbGF5MiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9kZWxheScpO1xuXG52YXIgX2RlbGF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlbGF5Mik7XG5cbnZhciBfb2Zmc2V0MiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9vZmZzZXQnKTtcblxudmFyIF9vZmZzZXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2Zmc2V0Mik7XG5cbnZhciBfcGFyYWxsZWwyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BhcmFsbGVsJyk7XG5cbnZhciBfcGFyYWxsZWwzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyYWxsZWwyKTtcblxudmFyIF9waHlzaWNzMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9waHlzaWNzJyk7XG5cbnZhciBfcGh5c2ljczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9waHlzaWNzMik7XG5cbnZhciBfcG9pbnRlcjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcG9pbnRlcicpO1xuXG52YXIgX3BvaW50ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9pbnRlcjIpO1xuXG52YXIgX3R3ZWVuMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy90d2VlbicpO1xuXG52YXIgX3R3ZWVuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuMik7XG5cbnZhciBfc3RhZ2dlcjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvc3RhZ2dlcicpO1xuXG52YXIgX3N0YWdnZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhZ2dlcjIpO1xuXG52YXIgX3ZhbHVlMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy92YWx1ZScpO1xuXG52YXIgX3ZhbHVlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlMik7XG5cbnZhciBfcmVuZGVyZXJzID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMnKTtcblxudmFyIF9yZW5kZXJlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVuZGVyZXJzKTtcblxudmFyIF9jc3MyID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMvY3NzJyk7XG5cbnZhciBfY3NzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NzczIpO1xuXG52YXIgX3N2ZzIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9zdmcnKTtcblxudmFyIF9zdmczID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnMik7XG5cbnZhciBfc3ZnUGF0aDIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9zdmctcGF0aCcpO1xuXG52YXIgX3N2Z1BhdGgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnUGF0aDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5leHBvcnRzLmNhbGMgPSBfY2FsYztcbmV4cG9ydHMuZWFzaW5nID0gX2Vhc2luZztcbmV4cG9ydHMudHJhbnNmb3JtID0gX3RyYW5zZm9ybTtcbmV4cG9ydHMudmFsdWVUeXBlcyA9IF92YWx1ZVR5cGVzO1xuXG4vLyBBY3Rpb25zXG5cbmV4cG9ydHMuQWN0aW9uID0gX2FjdGlvbnMyLmRlZmF1bHQ7XG5leHBvcnRzLmJsZW5kVHdlZW5zID0gX2JsZW5kVHdlZW5zMy5kZWZhdWx0O1xuZXhwb3J0cy5jaGFpbiA9IF9jaGFpbjMuZGVmYXVsdDtcbmV4cG9ydHMuY29tcG9zaXRlID0gX2NvbXBvc2l0ZTMuZGVmYXVsdDtcbmV4cG9ydHMuY3Jvc3NGYWRlID0gX2Nyb3NzRmFkZTMuZGVmYXVsdDtcbmV4cG9ydHMuZGVsYXkgPSBfZGVsYXkzLmRlZmF1bHQ7XG5leHBvcnRzLm9mZnNldCA9IF9vZmZzZXQzLmRlZmF1bHQ7XG5leHBvcnRzLnBhcmFsbGVsID0gX3BhcmFsbGVsMy5kZWZhdWx0O1xuZXhwb3J0cy5waHlzaWNzID0gX3BoeXNpY3MzLmRlZmF1bHQ7XG5leHBvcnRzLnBvaW50ZXIgPSBfcG9pbnRlcjMuZGVmYXVsdDtcbmV4cG9ydHMudHdlZW4gPSBfdHdlZW4zLmRlZmF1bHQ7XG5leHBvcnRzLnN0YWdnZXIgPSBfc3RhZ2dlcjMuZGVmYXVsdDtcbmV4cG9ydHMudmFsdWUgPSBfdmFsdWUzLmRlZmF1bHQ7XG5cbi8vIFJlbmRlcmVyc1xuXG5leHBvcnRzLlJlbmRlcmVyID0gX3JlbmRlcmVyczIuZGVmYXVsdDtcbmV4cG9ydHMuY3NzID0gX2NzczMuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnID0gX3N2ZzMuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnUGF0aCA9IF9zdmdQYXRoMy5kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3YjNCdGIzUnBiMjR1YW5NaVhTd2libUZ0WlhNaU9sc2liMjVHY21GdFpWTjBZWEowSWl3aWIyNUdjbUZ0WlZWd1pHRjBaU0lzSW05dVJuSmhiV1ZTWlc1a1pYSWlMQ0p2YmtaeVlXMWxSVzVrSWl3aVkyRnVZMlZzVDI1R2NtRnRaVk4wWVhKMElpd2lZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU0lzSW1OaGJtTmxiRTl1Um5KaGJXVlNaVzVrWlhJaUxDSmpZVzVqWld4UGJrWnlZVzFsUlc1a0lpd2lkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxJaXdpWTNWeWNtVnVkRVp5WVcxbFZHbHRaWE4wWVcxd0lpd2lZMkZzWXlJc0ltVmhjMmx1WnlJc0luUnlZVzV6Wm05eWJTSXNJblpoYkhWbFZIbHdaWE1pTENKQlkzUnBiMjRpTENKaWJHVnVaRlIzWldWdWN5SXNJbU5vWVdsdUlpd2lZMjl0Y0c5emFYUmxJaXdpWTNKdmMzTkdZV1JsSWl3aVpHVnNZWGtpTENKdlptWnpaWFFpTENKd1lYSmhiR3hsYkNJc0luQm9lWE5wWTNNaUxDSndiMmx1ZEdWeUlpd2lkSGRsWlc0aUxDSnpkR0ZuWjJWeUlpd2lkbUZzZFdVaUxDSlNaVzVrWlhKbGNpSXNJbU56Y3lJc0luTjJaeUlzSW5OMloxQmhkR2dpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdjMEpCUlVWQkxGazdPenM3T3p0elFrRkRRVU1zWVRzN096czdPM05DUVVOQlF5eGhPenM3T3pzN2MwSkJRMEZETEZVN096czdPenR6UWtGRFFVTXNhMEk3T3pzN096dHpRa0ZEUVVNc2JVSTdPenM3T3p0elFrRkRRVU1zYlVJN096czdPenR6UWtGRFFVTXNaMEk3T3pzN096dHpRa0ZEUVVNc2EwSTdPenM3T3p0elFrRkRRVU1zY1VJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08xRkJSMVZETEVrN1VVRkRRVU1zVFR0UlFVTkJReXhUTzFGQlEwRkRMRlU3TzBGQlJWbzdPMUZCUTA5RExFMDdVVUZEUVVNc1Z6dFJRVU5CUXl4TE8xRkJRMEZETEZNN1VVRkRRVU1zVXp0UlFVTkJReXhMTzFGQlEwRkRMRTA3VVVGRFFVTXNVVHRSUVVOQlF5eFBPMUZCUTBGRExFODdVVUZEUVVNc1N6dFJRVU5CUXl4UE8xRkJRMEZETEVzN08wRkJSVkE3TzFGQlEwOURMRkU3VVVGRFFVTXNSenRSUVVOQlF5eEhPMUZCUTBGRExFOGlMQ0ptYVd4bElqb2ljRzl3Ylc5MGFXOXVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeThnUm5KaGJXVnplVzVqSUhOamFHVmtkV3hsY25OY2JtVjRjRzl5ZENCN1hHNGdJRzl1Um5KaGJXVlRkR0Z5ZEN4Y2JpQWdiMjVHY21GdFpWVndaR0YwWlN4Y2JpQWdiMjVHY21GdFpWSmxibVJsY2l4Y2JpQWdiMjVHY21GdFpVVnVaQ3hjYmlBZ1kyRnVZMlZzVDI1R2NtRnRaVk4wWVhKMExGeHVJQ0JqWVc1alpXeFBia1p5WVcxbFZYQmtZWFJsTEZ4dUlDQmpZVzVqWld4UGJrWnlZVzFsVW1WdVpHVnlMRnh1SUNCallXNWpaV3hQYmtaeVlXMWxSVzVrTEZ4dUlDQjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVXNYRzRnSUdOMWNuSmxiblJHY21GdFpWUnBiV1Z6ZEdGdGNGeHVmU0JtY205dElDY3VMMlp5WVcxbGMzbHVZeWM3WEc1Y2JtVjRjRzl5ZENBcUlHRnpJR05oYkdNZ1puSnZiU0FuTGk5cGJtTXZZMkZzWXljN1hHNWxlSEJ2Y25RZ0tpQmhjeUJsWVhOcGJtY2dabkp2YlNBbkxpOXBibU12WldGemFXNW5KenRjYm1WNGNHOXlkQ0FxSUdGeklIUnlZVzV6Wm05eWJTQm1jbTl0SUNjdUwybHVZeTkwY21GdWMyWnZjbTFsY25Nbk8xeHVaWGh3YjNKMElDb2dZWE1nZG1Gc2RXVlVlWEJsY3lCbWNtOXRJQ2N1TDJsdVl5OTJZV3gxWlMxMGVYQmxjeWM3WEc1Y2JpOHZJRUZqZEdsdmJuTmNibVY0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk5aFkzUnBiMjV6Snp0Y2JtVjRjRzl5ZENCaWJHVnVaRlIzWldWdWN5Qm1jbTl0SUNjdUwyRmpkR2x2Ym5NdllteGxibVF0ZEhkbFpXNXpKenRjYm1WNGNHOXlkQ0JqYUdGcGJpQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlkyaGhhVzRuTzF4dVpYaHdiM0owSUdOdmJYQnZjMmwwWlNCbWNtOXRJQ2N1TDJGamRHbHZibk12WTI5dGNHOXphWFJsSnp0Y2JtVjRjRzl5ZENCamNtOXpjMFpoWkdVZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDJOeWIzTnpMV1poWkdVbk8xeHVaWGh3YjNKMElHUmxiR0Y1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlrWld4aGVTYzdYRzVsZUhCdmNuUWdiMlptYzJWMElHWnliMjBnSnk0dllXTjBhVzl1Y3k5dlptWnpaWFFuTzF4dVpYaHdiM0owSUhCaGNtRnNiR1ZzSUdaeWIyMGdKeTR2WVdOMGFXOXVjeTl3WVhKaGJHeGxiQ2M3WEc1bGVIQnZjblFnY0doNWMybGpjeUJtY205dElDY3VMMkZqZEdsdmJuTXZjR2g1YzJsamN5YzdYRzVsZUhCdmNuUWdjRzlwYm5SbGNpQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdmNHOXBiblJsY2ljN1hHNWxlSEJ2Y25RZ2RIZGxaVzRnWm5KdmJTQW5MaTloWTNScGIyNXpMM1IzWldWdUp6dGNibVY0Y0c5eWRDQnpkR0ZuWjJWeUlHWnliMjBnSnk0dllXTjBhVzl1Y3k5emRHRm5aMlZ5Snp0Y2JtVjRjRzl5ZENCMllXeDFaU0JtY205dElDY3VMMkZqZEdsdmJuTXZkbUZzZFdVbk8xeHVYRzR2THlCU1pXNWtaWEpsY25OY2JtVjRjRzl5ZENCU1pXNWtaWEpsY2lCbWNtOXRJQ2N1TDNKbGJtUmxjbVZ5Y3ljN1hHNWxlSEJ2Y25RZ1kzTnpJR1p5YjIwZ0p5NHZjbVZ1WkdWeVpYSnpMMk56Y3ljN1hHNWxlSEJ2Y25RZ2MzWm5JR1p5YjIwZ0p5NHZjbVZ1WkdWeVpYSnpMM04yWnljN1hHNWxlSEJ2Y25RZ2MzWm5VR0YwYUNCbWNtOXRJQ2N1TDNKbGJtUmxjbVZ5Y3k5emRtY3RjR0YwYUNjN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNtb290aCA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGV4cG9ydHMuZGlsYXRlID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5hbmdsZSA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuLypcbiAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcGFyYW0gW251bWJlcl1cbiAgQHJldHVybiBbbnVtYmVyXVxuKi9cbnZhciB0b0RlY2ltYWwgPSBmdW5jdGlvbiAobnVtKSB7XG4gIHZhciBwcmVjaXNpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDI7XG5cbiAgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufTtcblxuLypcbiAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgXG4gIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICBhcmUgYXQgMCwwXG4gIFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFpFUk9fUE9JTlQ7XG4gIHJldHVybiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbnZhciBkZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgRGlsYXRlXG4gIFxuICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gIFxuICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgXG4gIGEgLS0tLS0tLS0tIGJcbiAgXG4gIHRvXG4gIFxuICBhIC0tLS0gYlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG52YXIgZGlsYXRlID0gZXhwb3J0cy5kaWxhdGUgPSBmdW5jdGlvbiAoYSwgYiwgZGlsYXRpb24pIHtcbiAgcmV0dXJuIGEgKyAoYiAtIGEpICogZGlsYXRpb247XG59O1xuXG4vKlxuICBEaXN0YW5jZVxuICBcbiAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG4gIFxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG52YXIgZGlzdGFuY2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24gKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFpFUk9fUE9JTlQ7XG5cbiAgLy8gMUQgZGltZW5zaW9uc1xuICBpZiAoKDAsIF91dGlscy5pc051bSkoYSkpIHtcbiAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gIH0gZWxzZSB7XG4gICAgdmFyIHhEZWx0YSA9IGRpc3RhbmNlMUQoYS54LCBiLngpO1xuICAgIHZhciB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICB2YXIgekRlbHRhID0gKDAsIF91dGlscy5pc051bSkoYS56KSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coeERlbHRhLCAyKSArIE1hdGgucG93KHlEZWx0YSwgMikgKyBNYXRoLnBvdyh6RGVsdGEsIDIpKTtcbiAgfVxufTtcblxuLypcbiAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xudmFyIGdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGZ1bmN0aW9uIChmcm9tLCB0bywgdmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG59O1xuXG4vKlxuICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG52YXIgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZnVuY3Rpb24gKGZyb20sIHRvLCBwcm9ncmVzcykge1xuICByZXR1cm4gLXByb2dyZXNzICogZnJvbSArIHByb2dyZXNzICogdG8gKyBmcm9tO1xufTtcblxuLypcbiAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xudmFyIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICByZXR1cm4ge1xuICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICB9O1xufTtcblxuLypcbiAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xudmFyIHJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBmdW5jdGlvbiAocmFkaWFucykge1xuICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKlxuICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xudmFyIHNtb290aCA9IGV4cG9ydHMuc21vb3RoID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24pIHtcbiAgdmFyIHNtb290aGluZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcbiAgcmV0dXJuIHRvRGVjaW1hbChvbGRWYWx1ZSArIGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpO1xufTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZnVuY3Rpb24gKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gKDAsIF91dGlscy5pc051bSkoeHBzKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xufTtcblxuLypcbiAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgcmV0dXJuIHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcbn07XG5cbi8qXG4gIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gIFxuICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbnZhciBzdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGZ1bmN0aW9uIChzdGVwcywgcHJvZ3Jlc3MpIHtcbiAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gIHZhciB0YXJnZXQgPSAxIC0gMSAvIHN0ZXBzO1xuICB2YXIgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZZMkZzWXk1cWN5SmRMQ0p1WVcxbGN5STZXeUowYjBSbFkybHRZV3dpTENKdWRXMGlMQ0p3Y21WamFYTnBiMjRpTENKTllYUm9JaXdpY205MWJtUWlMQ0phUlZKUFgxQlBTVTVVSWl3aWVDSXNJbmtpTENKNklpd2laR2x6ZEdGdVkyVXhSQ0lzSW1FaUxDSmlJaXdpWVdKeklpd2lZVzVuYkdVaUxDSnlZV1JwWVc1elZHOUVaV2R5WldWeklpd2lZWFJoYmpJaUxDSmtaV2R5WldWelZHOVNZV1JwWVc1eklpd2laR1ZuY21WbGN5SXNJbEJKSWl3aVpHbHNZWFJsSWl3aVpHbHNZWFJwYjI0aUxDSmthWE4wWVc1alpTSXNJbmhFWld4MFlTSXNJbmxFWld4MFlTSXNJbnBFWld4MFlTSXNJbk54Y25RaUxDSm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU0lzSW1aeWIyMGlMQ0owYnlJc0luWmhiSFZsSWl3aVoyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTWlMQ0p3Y205bmNtVnpjeUlzSW5CdmFXNTBSbkp2YlVGdVoyeGxRVzVrUkdsemRHRnVZMlVpTENKdmNtbG5hVzRpTENKamIzTWlMQ0p6YVc0aUxDSnlZV1JwWVc1eklpd2ljMjF2YjNSb0lpd2libVYzVm1Gc2RXVWlMQ0p2YkdSV1lXeDFaU0lzSW1SMWNtRjBhVzl1SWl3aWMyMXZiM1JvYVc1bklpd2liV0Y0SWl3aWMzQmxaV1JRWlhKR2NtRnRaU0lzSW5od2N5SXNJbVp5WVcxbFJIVnlZWFJwYjI0aUxDSnpjR1ZsWkZCbGNsTmxZMjl1WkNJc0luWmxiRzlqYVhSNUlpd2ljM1JsY0ZCeWIyZHlaWE56SWl3aWMzUmxjSE1pTENKelpXZHRaVzUwSWl3aWRHRnlaMlYwSWl3aWNISnZaM0psYzNOUFpsUmhjbWRsZENJc0ltMXBiaUlzSW1ac2IyOXlJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96dEJRVVZCT3pzN096czdPMEZCVDBFc1NVRkJUVUVzV1VGQldTeFZRVUZEUXl4SFFVRkVMRVZCUVhkQ08wRkJRVUVzVFVGQmJFSkRMRk5CUVd0Q0xIVkZRVUZPTEVOQlFVMDdPMEZCUTNoRFFTeDFRa0ZCV1N4RlFVRmFMRVZCUVd0Q1FTeFRRVUZzUWp0QlFVTkJMRk5CUVU5RExFdEJRVXRETEV0QlFVd3NRMEZCVjBnc1RVRkJUVU1zVTBGQmFrSXNTVUZCT0VKQkxGTkJRWEpETzBGQlEwUXNRMEZJUkRzN1FVRkxRU3hKUVVGTlJ5eGhRVUZoTzBGQlEycENReXhMUVVGSExFTkJSR003UVVGRmFrSkRMRXRCUVVjc1EwRkdZenRCUVVkcVFrTXNTMEZCUnp0QlFVaGpMRU5CUVc1Q096dEJRVTFCTEVsQlFVMURMR0ZCUVdFc1ZVRkJRME1zUTBGQlJDeEZRVUZKUXl4RFFVRktPMEZCUVVFc1UwRkJWVklzUzBGQlMxTXNSMEZCVEN4RFFVRlRSaXhKUVVGSlF5eERRVUZpTEVOQlFWWTdRVUZCUVN4RFFVRnVRanM3UVVGRlFUczdPenM3T3pzN096dEJRVlZQTEVsQlFVMUZMSGRDUVVGUkxGVkJRVU5JTEVOQlFVUTdRVUZCUVN4TlFVRkpReXhEUVVGS0xIVkZRVUZSVGl4VlFVRlNPMEZCUVVFc1UwRkJkVUpUTEdsQ1FVRnBRbGdzUzBGQlMxa3NTMEZCVEN4RFFVRlhUQ3hGUVVGRlNpeERRVUZHTEVkQlFVMUxMRVZCUVVWTUxFTkJRVzVDTEVWQlFYTkNTU3hGUVVGRlNDeERRVUZHTEVkQlFVMUpMRVZCUVVWS0xFTkJRVGxDTEVOQlFXcENMRU5CUVhaQ08wRkJRVUVzUTBGQlpEczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVk1zT0VOQlFXMUNMRlZCUVVORExFOUJRVVE3UVVGQlFTeFRRVUZoUVN4VlFVRlZaQ3hMUVVGTFpTeEZRVUZtTEVkQlFXOUNMRWRCUVdwRE8wRkJRVUVzUTBGQmVrSTdPMEZCUlZBN096czdPenM3T3pzN096czdPenM3T3p0QlFXdENUeXhKUVVGTlF5d3dRa0ZCVXl4VlFVRkRWQ3hEUVVGRUxFVkJRVWxETEVOQlFVb3NSVUZCVDFNc1VVRkJVRHRCUVVGQkxGTkJRVzlDVml4SlFVRkxMRU5CUVVORExFbEJRVWxFTEVOQlFVd3NTVUZCVlZVc1VVRkJia003UVVGQlFTeERRVUZtT3p0QlFVVlFPenM3T3pzN096czdRVUZUVHl4SlFVRk5ReXc0UWtGQlZ5eFZRVUZEV0N4RFFVRkVMRVZCUVhWQ08wRkJRVUVzVFVGQmJrSkRMRU5CUVcxQ0xIVkZRVUZtVGl4VlFVRmxPenRCUVVNM1F6dEJRVU5CTEUxQlFVa3NhMEpCUVUxTExFTkJRVTRzUTBGQlNpeEZRVUZqTzBGQlExb3NWMEZCVDBRc1YwRkJWME1zUTBGQldDeEZRVUZqUXl4RFFVRmtMRU5CUVZBN08wRkJSVVk3UVVGRFF5eEhRVXBFTEUxQlNVODdRVUZEVEN4UlFVRk5WeXhUUVVGVFlpeFhRVUZYUXl4RlFVRkZTaXhEUVVGaUxFVkJRV2RDU3l4RlFVRkZUQ3hEUVVGc1FpeERRVUZtTzBGQlEwRXNVVUZCVFdsQ0xGTkJRVk5rTEZkQlFWZERMRVZCUVVWSUxFTkJRV0lzUlVGQlowSkpMRVZCUVVWS0xFTkJRV3hDTEVOQlFXWTdRVUZEUVN4UlFVRk5hVUlzVTBGQlZTeHJRa0ZCVFdRc1JVRkJSVVlzUTBGQlVpeERRVUZFTEVkQlFXVkRMRmRCUVZkRExFVkJRVVZHTEVOQlFXSXNSVUZCWjBKSExFVkJRVVZJTEVOQlFXeENMRU5CUVdZc1IwRkJjME1zUTBGQmNrUTdPMEZCUlVFc1YwRkJUMHdzUzBGQlMzTkNMRWxCUVV3c1EwRkJWU3hUUVVGRFNDeE5RVUZFTEVWQlFWY3NRMEZCV0N4aFFVRnBRa01zVFVGQmFrSXNSVUZCTWtJc1EwRkJNMElzWVVGQmFVTkRMRTFCUVdwRExFVkJRVEpETEVOQlFUTkRMRU5CUVZZc1EwRkJVRHRCUVVORU8wRkJRMFlzUTBGaVRUczdRVUZsVURzN096czdPenM3T3pzN08wRkJXVThzU1VGQlRVVXNjMFJCUVhWQ0xGVkJRVU5ETEVsQlFVUXNSVUZCVDBNc1JVRkJVQ3hGUVVGWFF5eExRVUZZTzBGQlFVRXNVMEZCY1VJc1EwRkJRMEVzVVVGQlVVWXNTVUZCVkN4TFFVRnJRa01zUzBGQlMwUXNTVUZCZGtJc1EwRkJja0k3UVVGQlFTeERRVUUzUWpzN1FVRkZVRHM3T3pzN096czdPenM3UVVGWFR5eEpRVUZOUnl4elJFRkJkVUlzVlVGQlEwZ3NTVUZCUkN4RlFVRlBReXhGUVVGUUxFVkJRVmRITEZGQlFWZzdRVUZCUVN4VFFVRjVRaXhEUVVGRlFTeFJRVUZHTEVkQlFXRktMRWxCUVdRc1IwRkJkVUpKTEZkQlFWZElMRVZCUVd4RExFZEJRWGREUkN4SlFVRm9SVHRCUVVGQkxFTkJRVGRDT3p0QlFVVlFPenM3T3pzN096dEJRVkZQTEVsQlFVMUxMR2RGUVVFMFFpeFZRVUZEUXl4TlFVRkVMRVZCUVZOd1FpeExRVUZVTEVWQlFXZENVU3hSUVVGb1FpeEZRVUUyUWp0QlFVTndSVklzVlVGQlVVY3NhVUpCUVdsQ1NDeExRVUZxUWl4RFFVRlNPenRCUVVWQkxGTkJRVTg3UVVGRFRGQXNUMEZCUjJVc1YwRkJWMnhDTEV0QlFVc3JRaXhIUVVGTUxFTkJRVk55UWl4TFFVRlVMRU5CUVZnc1IwRkJOa0p2UWl4UFFVRlBNMElzUTBGRWJFTTdRVUZGVEVNc1QwRkJSMk1zVjBGQlYyeENMRXRCUVV0blF5eEhRVUZNTEVOQlFWTjBRaXhMUVVGVUxFTkJRVmdzUjBGQk5rSnZRaXhQUVVGUE1VSTdRVUZHYkVNc1IwRkJVRHRCUVVsRUxFTkJVRTA3TzBGQlUxQTdPenM3T3p0QlFVMVBMRWxCUVUxUExEaERRVUZ0UWl4VlFVRkRjMElzVDBGQlJEdEJRVUZCTEZOQlFXRkJMRlZCUVZVc1IwRkJWaXhIUVVGblFtcERMRXRCUVV0bExFVkJRV3hETzBGQlFVRXNRMEZCZWtJN08wRkJSVkE3T3pzN096czdPMEZCVVU4c1NVRkJUVzFDTERCQ1FVRlRMRlZCUVVORExGRkJRVVFzUlVGQlYwTXNVVUZCV0N4RlFVRnhRa01zVVVGQmNrSTdRVUZCUVN4TlFVRXJRa01zVTBGQkwwSXNkVVZCUVRKRExFTkJRVE5ETzBGQlFVRXNVMEZCYVVSNlF5eFZRVUZWZFVNc1YwRkJXVU1zV1VGQldVWXNWMEZCVjBNc1VVRkJka0lzU1VGQmJVTndReXhMUVVGTGRVTXNSMEZCVEN4RFFVRlRSQ3hUUVVGVUxFVkJRVzlDUkN4UlFVRndRaXhEUVVGNlJDeERRVUZxUkR0QlFVRkJMRU5CUVdZN08wRkJSVkE3T3pzN096dEJRVTFQTEVsQlFVMUhMSGREUVVGblFpeFZRVUZEUXl4SFFVRkVMRVZCUVUxRExHRkJRVTQ3UVVGQlFTeFRRVUY1UWl4clFrRkJUVVFzUjBGQlRpeERRVUZFTEVkQlFXVkJMRTlCUVU4c1QwRkJUME1zWVVGQlpDeERRVUZtTEVkQlFUaERMRU5CUVhSRk8wRkJRVUVzUTBGQmRFSTdPMEZCUlZBN096czdPenRCUVUxUExFbEJRVTFETERCRFFVRnBRaXhWUVVGRFF5eFJRVUZFTEVWQlFWZEdMR0ZCUVZnN1FVRkJRU3hUUVVFMlFrVXNXVUZCV1N4UFFVRlBSaXhoUVVGdVFpeERRVUUzUWp0QlFVRkJMRU5CUVhaQ096dEJRVVZRT3pzN096czdPMEZCVDA4c1NVRkJUVWNzYzBOQlFXVXNWVUZCUTBNc1MwRkJSQ3hGUVVGUmJFSXNVVUZCVWl4RlFVRnhRanRCUVVNdlF5eE5RVUZOYlVJc1ZVRkJWU3hMUVVGTFJDeFJRVUZSTEVOQlFXSXNRMEZCYUVJN1FVRkRRU3hOUVVGTlJTeFRRVUZUTEVsQlFVc3NTVUZCU1VZc1MwRkJlRUk3UVVGRFFTeE5RVUZOUnl4dFFrRkJiVUpxUkN4TFFVRkxhMFFzUjBGQlRDeERRVUZUZEVJc1YwRkJWMjlDTEUxQlFYQkNMRVZCUVRSQ0xFTkJRVFZDTEVOQlFYcENPenRCUVVWQkxGTkJRVTlvUkN4TFFVRkxiVVFzUzBGQlRDeERRVUZYUml4dFFrRkJiVUpHTEU5QlFUbENMRWxCUVhsRFFTeFBRVUZvUkR0QlFVTkVMRU5CVGswaUxDSm1hV3hsSWpvaVkyRnNZeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR2x6VG5WdElIMGdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ2JuVnRZbVZ5SUhSdklIZ2daR1ZqYVcxaGJDQndiR0ZqWlhOY2JseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDFjYmlvdlhHNWpiMjV6ZENCMGIwUmxZMmx0WVd3Z1BTQW9iblZ0TENCd2NtVmphWE5wYjI0Z1BTQXlLU0E5UGlCN1hHNGdJSEJ5WldOcGMybHZiaUE5SURFd0lDb3FJSEJ5WldOcGMybHZianRjYmlBZ2NtVjBkWEp1SUUxaGRHZ3VjbTkxYm1Rb2JuVnRJQ29nY0hKbFkybHphVzl1S1NBdklIQnlaV05wYzJsdmJqdGNibjA3WEc1Y2JtTnZibk4wSUZwRlVrOWZVRTlKVGxRZ1BTQjdYRzRnSUhnNklEQXNYRzRnSUhrNklEQXNYRzRnSUhvNklEQmNibjA3WEc1Y2JtTnZibk4wSUdScGMzUmhibU5sTVVRZ1BTQW9ZU3dnWWlrZ1BUNGdUV0YwYUM1aFluTW9ZU0F0SUdJcE8xeHVYRzR2S2x4dUlDQkJibWRzWlNCaVpYUjNaV1Z1SUhCdmFXNTBjMXh1SUNCY2JpQWdWSEpoYm5Oc1lYUmxjeUIwYUdVZ2FIbHdiM1JvWlhScFkyRnNJR3hwYm1VZ2MyOGdkR2hoZENCMGFHVWdKMlp5YjIwbklHTnZiM0prYVc1aGRHVnpYRzRnSUdGeVpTQmhkQ0F3TERCY2JpQWdYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjI5eVpHbHVZWFJsY3lCdlppQm1jbTl0SUhCdmFXNTBYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjNKa2FXNWhkR1Z6SUc5bUlIUnZJSEJ2YVc1MFhHNGdJRUJ5WlhSMWNtNGdXM0poWkdsaGJsMDZJRUZ1WjJ4bElHSmxkSGRsWlc0Z2RHaGxJSFIzYnlCd2IybHVkSE1nYVc0Z2NtRmthV0Z1YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCaGJtZHNaU0E5SUNoaExDQmlJRDBnV2tWU1QxOVFUMGxPVkNrZ1BUNGdjbUZrYVdGdWMxUnZSR1ZuY21WbGN5aE5ZWFJvTG1GMFlXNHlLR0V1ZUNBdElHSXVlQ3dnWVM1NUlDMGdZaTU1S1NrN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ1pHVm5jbVZsY3lCMGJ5QnlZV1JwWVc1elhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUdSbFozSmxaWE5jYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z2NtRmthV0Z1YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa1pXZHlaV1Z6Vkc5U1lXUnBZVzV6SUQwZ0tHUmxaM0psWlhNcElEMCtJR1JsWjNKbFpYTWdLaUJOWVhSb0xsQkpJQzhnTVRnd08xeHVYRzR2S2x4dUlDQkVhV3hoZEdWY2JpQWdYRzRnSUVOb1lXNW5aU0IwYUdVZ2NISnZaM0psYzNOcGIyNGdZbVYwZDJWbGJpQmhJR0Z1WkNCaUlHRmpZMjl5WkdsdVp5QjBieUJrYVd4aGRHbHZiaTVjYmlBZ1hHNGdJRk52SUdScGJHRjBhVzl1SUQwZ01DNDFJSGR2ZFd4a0lHTm9ZVzVuWlZ4dUlDQmNiaUFnWVNBdExTMHRMUzB0TFMwZ1lseHVJQ0JjYmlBZ2RHOWNiaUFnWEc0Z0lHRWdMUzB0TFNCaVhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeVpYWnBiM1Z6SUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVJwYkdGMFpTQndjbTluY21WemN5QmllU0I0WEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsSUhCc2RYTWdkR2hsSUdScGJHRjBaV1FnWkdsbVptVnlaVzVqWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa2FXeGhkR1VnUFNBb1lTd2dZaXdnWkdsc1lYUnBiMjRwSUQwK0lHRWdLeUFvS0dJZ0xTQmhLU0FxSUdScGJHRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ1JHbHpkR0Z1WTJWY2JpQWdYRzRnSUZKbGRIVnlibk1nZEdobElHUnBjM1JoYm1ObElHSmxkSGRsWlc0Z2RIZHZJRzRnWkdsdFpXNXphVzl1WVd3Z2NHOXBiblJ6TGx4dUlDQmNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUXZiblZ0WW1WeVhUb2dlQ0JoYm1RZ2VTQnZjaUJxZFhOMElIZ2diMllnY0c5cGJuUWdRVnh1SUNCQWNHRnlZVzBnVzI5aWFtVmpkQzl1ZFcxaVpYSmRPaUFvYjNCMGFXOXVZV3dwT2lCNElHRnVaQ0I1SUc5eUlHcDFjM1FnZUNCdlppQndiMmx1ZENCQ1hHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlJvWlNCa2FYTjBZVzVqWlNCaVpYUjNaV1Z1SUhSb1pTQjBkMjhnY0c5cGJuUnpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1JwYzNSaGJtTmxJRDBnS0dFc0lHSWdQU0JhUlZKUFgxQlBTVTVVS1NBOVBpQjdYRzRnSUM4dklERkVJR1JwYldWdWMybHZibk5jYmlBZ2FXWWdLR2x6VG5WdEtHRXBLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHUnBjM1JoYm1ObE1VUW9ZU3dnWWlrN1hHNWNiaUFnTHk4Z1RYVnNkR2t0WkdsdFpXNXphVzl1WVd4Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCamIyNXpkQ0I0UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVDd2dZaTU0S1R0Y2JpQWdJQ0JqYjI1emRDQjVSR1ZzZEdFZ1BTQmthWE4wWVc1alpURkVLR0V1ZVN3Z1lpNTVLVHRjYmlBZ0lDQmpiMjV6ZENCNlJHVnNkR0VnUFNBb2FYTk9kVzBvWVM1NktTa2dQeUJrYVhOMFlXNWpaVEZFS0dFdWVpd2dZaTU2S1NBNklEQTdYRzVjYmlBZ0lDQnlaWFIxY200Z1RXRjBhQzV6Y1hKMEtDaDRSR1ZzZEdFZ0tpb2dNaWtnS3lBb2VVUmxiSFJoSUNvcUlESXBJQ3NnS0hwRVpXeDBZU0FxS2lBeUtTazdYRzRnSUgxY2JuMDdYRzVjYmk4cVhHNGdJRkJ5YjJkeVpYTnpJSGRwZEdocGJpQm5hWFpsYmlCeVlXNW5aVnh1SUNCY2JpQWdSMmwyWlc0Z1lTQnNiM2RsY2lCc2FXMXBkQ0JoYm1RZ1lXNGdkWEJ3WlhJZ2JHbHRhWFFzSUhkbElISmxkSFZ5YmlCMGFHVWdjSEp2WjNKbGMzTmNiaUFnS0dWNGNISmxjM05sWkNCaGN5QmhJRzUxYldKbGNpQXdMVEVwSUhKbGNISmxjMlZ1ZEdWa0lHSjVJSFJvWlNCbmFYWmxiaUIyWVd4MVpTd2dZVzVrWEc0Z0lHeHBiV2wwSUhSb1lYUWdjSEp2WjNKbGMzTWdkRzhnZDJsMGFHbHVJREF0TVM1Y2JpQWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEc5M1pYSWdiR2x0YVhRZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWWEJ3WlhJZ2JHbHRhWFJjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0IwYnlCbWFXNWtJSEJ5YjJkeVpYTnpJSGRwZEdocGJpQm5hWFpsYmlCeVlXNW5aVnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCUWNtOW5jbVZ6Y3lCdlppQjJZV3gxWlNCM2FYUm9hVzRnY21GdVoyVWdZWE1nWlhod2NtVnpjMlZrSURBdE1WeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU0E5SUNobWNtOXRMQ0IwYnl3Z2RtRnNkV1VwSUQwK0lDaDJZV3gxWlNBdElHWnliMjBwSUM4Z0tIUnZJQzBnWm5KdmJTazdYRzVjYmk4cVhHNGdJRlpoYkhWbElHbHVJSEpoYm1kbElHWnliMjBnY0hKdlozSmxjM05jYmlBZ1hHNGdJRWRwZG1WdUlHRWdiRzkzWlhJZ2JHbHRhWFFnWVc1a0lHRnVJSFZ3Y0dWeUlHeHBiV2wwTENCM1pTQnlaWFIxY200Z2RHaGxJSFpoYkhWbElIZHBkR2hwYmx4dUlDQjBhR0YwSUhKaGJtZGxJR0Z6SUdWNGNISmxjM05sWkNCaWVTQndjbTluY21WemN5QW9ZU0J1ZFcxaVpYSWdabkp2YlNBd0xURXBYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeHZkMlZ5SUd4cGJXbDBJRzltSUhKaGJtZGxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlhCd1pYSWdiR2x0YVhRZ2IyWWdjbUZ1WjJWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlVhR1VnY0hKdlozSmxjM01nWW1WMGQyVmxiaUJzYjNkbGNpQmhibVFnZFhCd1pYSWdiR2x0YVhSeklHVjRjSEpsYzNObFpDQXdMVEZjYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnWVhNZ1kyRnNZM1ZzWVhSbFpDQm1jbTl0SUhCeWIyZHlaWE56SUhkcGRHaHBiaUJ5WVc1blpTQW9ibTkwSUd4cGJXbDBaV1FnZDJsMGFHbHVJSEpoYm1kbEtWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeUE5SUNobWNtOXRMQ0IwYnl3Z2NISnZaM0psYzNNcElEMCtJQ2d0SUhCeWIyZHlaWE56SUNvZ1puSnZiU2tnS3lBb2NISnZaM0psYzNNZ0tpQjBieWtnS3lCbWNtOXRPMXh1WEc0dktseHVJQ0JRYjJsdWRDQm1jbTl0SUdGdVoyeGxJR0Z1WkNCa2FYTjBZVzVqWlZ4dUlDQmNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUF5UkNCd2IybHVkQ0J2WmlCdmNtbG5hVzVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCQmJtZHNaU0JtY205dElHOXlhV2RwYmx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFUnBjM1JoYm1ObElHWnliMjBnYjNKcFoybHVYRzRnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjA2SUVOaGJHTjFiR0YwWldRZ01rUWdjRzlwYm5SY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NHOXBiblJHY205dFFXNW5iR1ZCYm1SRWFYTjBZVzVqWlNBOUlDaHZjbWxuYVc0c0lHRnVaMnhsTENCa2FYTjBZVzVqWlNrZ1BUNGdlMXh1SUNCaGJtZHNaU0E5SUdSbFozSmxaWE5VYjFKaFpHbGhibk1vWVc1bmJHVXBPMXh1WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnZURvZ1pHbHpkR0Z1WTJVZ0tpQk5ZWFJvTG1OdmN5aGhibWRzWlNrZ0t5QnZjbWxuYVc0dWVDeGNiaUFnSUNCNU9pQmthWE4wWVc1alpTQXFJRTFoZEdndWMybHVLR0Z1WjJ4bEtTQXJJRzl5YVdkcGJpNTVYRzRnSUgwN1hHNTlPMXh1WEc0dktseHVJQ0JEYjI1MlpYSjBJSEpoWkdsaGJuTWdkRzhnWkdWbmNtVmxjMXh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCcGJpQnlZV1JwWVc1elhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJR1JsWjNKbFpYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjbUZrYVdGdWMxUnZSR1ZuY21WbGN5QTlJQ2h5WVdScFlXNXpLU0E5UGlCeVlXUnBZVzV6SUNvZ01UZ3dJQzhnVFdGMGFDNVFTVHRjYmx4dUx5cGNiaUFnUm5KaGJXVnlZWFJsTFdsdVpHVndaVzVrWlc1MElITnRiMjkwYUdsdVoxeHVYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVG1WM0lIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1QyeGtJSFpoYkhWbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZElDaHZjSFJwYjI1aGJDazZJRk50YjI5MGFHbHVaeUFvTUNCcGN5QnViMjVsS1Z4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemJXOXZkR2dnUFNBb2JtVjNWbUZzZFdVc0lHOXNaRlpoYkhWbExDQmtkWEpoZEdsdmJpd2djMjF2YjNSb2FXNW5JRDBnTUNrZ1BUNGdkRzlFWldOcGJXRnNLRzlzWkZaaGJIVmxJQ3NnS0dSMWNtRjBhVzl1SUNvZ0tHNWxkMVpoYkhWbElDMGdiMnhrVm1Gc2RXVXBJQzhnVFdGMGFDNXRZWGdvYzIxdmIzUm9hVzVuTENCa2RYSmhkR2x2YmlrcEtUdGNibHh1THlwY2JpQWdRMjl1ZG1WeWRDQjRJSEJsY2lCelpXTnZibVFnZEc4Z2NHVnlJR1p5WVcxbElIWmxiRzlqYVhSNUlHSmhjMlZrSUc5dUlHWndjMXh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZibWwwSUhCbGNpQnpaV052Ym1SY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkdjbUZ0WlNCa2RYSmhkR2x2YmlCcGJpQnRjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Y0dWbFpGQmxja1p5WVcxbElEMGdLSGh3Y3l3Z1puSmhiV1ZFZFhKaGRHbHZiaWtnUFQ0Z0tHbHpUblZ0S0hod2N5a3BJRDhnZUhCeklDOGdLREV3TURBZ0x5Qm1jbUZ0WlVSMWNtRjBhVzl1S1NBNklEQTdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdkbVZzYjJOcGRIa2dhVzUwYnlCMlpXeHBZMmwwZVNCd1pYSWdjMlZqYjI1a1hHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWdWFYUWdjR1Z5SUdaeVlXMWxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNGdhVzRnYlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQmxaV1JRWlhKVFpXTnZibVFnUFNBb2RtVnNiMk5wZEhrc0lHWnlZVzFsUkhWeVlYUnBiMjRwSUQwK0lIWmxiRzlqYVhSNUlDb2dLREV3TURBZ0x5Qm1jbUZ0WlVSMWNtRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ1EzSmxZWFJsSUhOMFpYQndaV1FnZG1WeWMybHZiaUJ2WmlBd0xURWdjSEp2WjNKbGMzTmNiaUFnWEc0Z0lFQndZWEpoYlNCYmFXNTBYVG9nVG5WdFltVnlJRzltSUhOMFpYQnpYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJUZEdWd2NHVmtJSFpoYkhWbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITjBaWEJRY205bmNtVnpjeUE5SUNoemRHVndjeXdnY0hKdlozSmxjM01wSUQwK0lIdGNiaUFnWTI5dWMzUWdjMlZuYldWdWRDQTlJREVnTHlBb2MzUmxjSE1nTFNBeEtUdGNiaUFnWTI5dWMzUWdkR0Z5WjJWMElEMGdNU0F0SUNneElDOGdjM1JsY0hNcE8xeHVJQ0JqYjI1emRDQndjbTluY21WemMwOW1WR0Z5WjJWMElEMGdUV0YwYUM1dGFXNG9jSEp2WjNKbGMzTWdMeUIwWVhKblpYUXNJREVwTzF4dVhHNGdJSEpsZEhWeWJpQk5ZWFJvTG1ac2IyOXlLSEJ5YjJkeVpYTnpUMlpVWVhKblpYUWdMeUJ6WldkdFpXNTBLU0FxSUhObFoyMWxiblE3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIID0gMS41MjU7XG5cbnZhciBjcmVhdGVSZXZlcnNlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzaW5nKDEgLSBwKTtcbiAgfTtcbn07XG52YXIgY3JlYXRlTWlycm9yZWRFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8PSAwLjUgPyBlYXNpbmcoMiAqIHApIC8gMiA6ICgyIC0gZWFzaW5nKDIgKiAoMSAtIHApKSkgLyAyO1xuICB9O1xufTtcblxudmFyIGxpbmVhciA9IGV4cG9ydHMubGluZWFyID0gZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHA7XG59O1xuXG52YXIgY3JlYXRlRXhwb0luID0gZXhwb3J0cy5jcmVhdGVFeHBvSW4gPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHAsIHBvd2VyKTtcbiAgfTtcbn07XG52YXIgZWFzZUluID0gZXhwb3J0cy5lYXNlSW4gPSBjcmVhdGVFeHBvSW4oMik7XG52YXIgZWFzZU91dCA9IGV4cG9ydHMuZWFzZU91dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGVhc2VJbik7XG52YXIgZWFzZUluT3V0ID0gZXhwb3J0cy5lYXNlSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhlYXNlSW4pO1xuXG52YXIgY2lyY0luID0gZXhwb3J0cy5jaXJjSW4gPSBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwKSk7XG59O1xudmFyIGNpcmNPdXQgPSBleHBvcnRzLmNpcmNPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhjaXJjSW4pO1xudmFyIGNpcmNJbk91dCA9IGV4cG9ydHMuY2lyY0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoY2lyY091dCk7XG5cbnZhciBjcmVhdGVCYWNrSW4gPSBleHBvcnRzLmNyZWF0ZUJhY2tJbiA9IGZ1bmN0aW9uIChwb3dlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCAqIHAgKiAoKHBvd2VyICsgMSkgKiBwIC0gcG93ZXIpO1xuICB9O1xufTtcbnZhciBiYWNrSW4gPSBleHBvcnRzLmJhY2tJbiA9IGNyZWF0ZUJhY2tJbihERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG52YXIgYmFja091dCA9IGV4cG9ydHMuYmFja091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGJhY2tJbik7XG52YXIgYmFja0luT3V0ID0gZXhwb3J0cy5iYWNrSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhiYWNrSW4pO1xuXG52YXIgY3JlYXRlQW50aWNpcGF0ZUVhc2luZyA9IGV4cG9ydHMuY3JlYXRlQW50aWNpcGF0ZUVhc2luZyA9IGZ1bmN0aW9uIChwb3dlcikge1xuICB2YXIgYmFja0Vhc2luZyA9IGNyZWF0ZUJhY2tJbihwb3dlcik7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAocCAqPSAyKSA8IDEgPyAwLjUgKiBiYWNrRWFzaW5nKHApIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocCAtIDEpKSk7XG4gIH07XG59O1xuXG52YXIgYW50aWNpcGF0ZSA9IGV4cG9ydHMuYW50aWNpcGF0ZSA9IGNyZWF0ZUFudGljaXBhdGVFYXNpbmcoREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJJa1JGUmtGVlRGUmZUMVpGVWxOSVQwOVVYMU5VVWtWT1IxUklJaXdpWTNKbFlYUmxVbVYyWlhKelpXUkZZWE5wYm1jaUxDSmxZWE5wYm1jaUxDSndJaXdpWTNKbFlYUmxUV2x5Y205eVpXUkZZWE5wYm1jaUxDSnNhVzVsWVhJaUxDSmpjbVZoZEdWRmVIQnZTVzRpTENKd2IzZGxjaUlzSW1WaGMyVkpiaUlzSW1WaGMyVlBkWFFpTENKbFlYTmxTVzVQZFhRaUxDSmphWEpqU1c0aUxDSk5ZWFJvSWl3aWMybHVJaXdpWVdOdmN5SXNJbU5wY21OUGRYUWlMQ0pqYVhKalNXNVBkWFFpTENKamNtVmhkR1ZDWVdOclNXNGlMQ0ppWVdOclNXNGlMQ0ppWVdOclQzVjBJaXdpWW1GamEwbHVUM1YwSWl3aVkzSmxZWFJsUVc1MGFXTnBjR0YwWlVWaGMybHVaeUlzSW1KaFkydEZZWE5wYm1jaUxDSndiM2NpTENKaGJuUnBZMmx3WVhSbElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hKUVVGTlFTdzJRa0ZCTmtJc1MwRkJia003TzBGQlJVOHNTVUZCVFVNc2MwUkJRWFZDTEZWQlFVTkRMRTFCUVVRN1FVRkJRU3hUUVVGWkxGVkJRVU5ETEVOQlFVUTdRVUZCUVN4WFFVRlBMRWxCUVVsRUxFOUJRVThzU1VGQlNVTXNRMEZCV0N4RFFVRllPMEZCUVVFc1IwRkJXanRCUVVGQkxFTkJRVGRDTzBGQlEwRXNTVUZCVFVNc2MwUkJRWFZDTEZWQlFVTkdMRTFCUVVRN1FVRkJRU3hUUVVGWkxGVkJRVU5ETEVOQlFVUTdRVUZCUVN4WFFVRlJRU3hMUVVGTExFZEJRVTRzUjBGQllVUXNUMEZCVHl4SlFVRkpReXhEUVVGWUxFbEJRV2RDTEVOQlFUZENMRWRCUVdsRExFTkJRVU1zU1VGQlNVUXNUMEZCVHl4TFFVRkxMRWxCUVVsRExFTkJRVlFzUTBGQlVDeERRVUZNTEVsQlFUUkNMRU5CUVhCRk8wRkJRVUVzUjBGQldqdEJRVUZCTEVOQlFUZENPenRCUVVWQkxFbEJRVTFGTERCQ1FVRlRMRlZCUVVOR0xFTkJRVVE3UVVGQlFTeFRRVUZQUVN4RFFVRlFPMEZCUVVFc1EwRkJaanM3UVVGRlFTeEpRVUZOUnl4elEwRkJaU3hWUVVGRFF5eExRVUZFTzBGQlFVRXNVMEZCVnl4VlFVRkRTaXhEUVVGRU8wRkJRVUVzYjBKQlFVOUJMRU5CUVZBc1JVRkJXVWtzUzBGQldqdEJRVUZCTEVkQlFWZzdRVUZCUVN4RFFVRnlRanRCUVVOQkxFbEJRVTFETERCQ1FVRlRSaXhoUVVGaExFTkJRV0lzUTBGQlpqdEJRVU5CTEVsQlFVMUhMRFJDUVVGVlVpeHhRa0ZCY1VKUExFMUJRWEpDTEVOQlFXaENPMEZCUTBFc1NVRkJUVVVzWjBOQlFWbE9MSEZDUVVGeFFra3NUVUZCY2tJc1EwRkJiRUk3TzBGQlJVRXNTVUZCVFVjc01FSkJRVk1zVlVGQlExSXNRMEZCUkR0QlFVRkJMRk5CUVU4c1NVRkJTVk1zUzBGQlMwTXNSMEZCVEN4RFFVRlRSQ3hMUVVGTFJTeEpRVUZNTEVOQlFWVllMRU5CUVZZc1EwRkJWQ3hEUVVGWU8wRkJRVUVzUTBGQlpqdEJRVU5CTEVsQlFVMVpMRFJDUVVGVlpDeHhRa0ZCY1VKVkxFMUJRWEpDTEVOQlFXaENPMEZCUTBFc1NVRkJUVXNzWjBOQlFWbGFMSEZDUVVGeFFsY3NUMEZCY2tJc1EwRkJiRUk3TzBGQlJVRXNTVUZCVFVVc2MwTkJRV1VzVlVGQlExWXNTMEZCUkR0QlFVRkJMRk5CUVZjc1ZVRkJRMG9zUTBGQlJEdEJRVUZCTEZkQlFWRkJMRWxCUVVsQkxFTkJRVXdzU1VGQlZ5eERRVUZEU1N4UlFVRlJMRU5CUVZRc1NVRkJZMG9zUTBGQlpDeEhRVUZyUWtrc1MwRkJOMElzUTBGQlVEdEJRVUZCTEVkQlFWZzdRVUZCUVN4RFFVRnlRanRCUVVOQkxFbEJRVTFYTERCQ1FVRlRSQ3hoUVVGaGFrSXNNRUpCUVdJc1EwRkJaanRCUVVOQkxFbEJRVTF0UWl3MFFrRkJWV3hDTEhGQ1FVRnhRbWxDTEUxQlFYSkNMRU5CUVdoQ08wRkJRMEVzU1VGQlRVVXNaME5CUVZsb1FpeHhRa0ZCY1VKakxFMUJRWEpDTEVOQlFXeENPenRCUVVWQkxFbEJRVTFITERCRVFVRjVRaXhWUVVGRFpDeExRVUZFTEVWQlFWYzdRVUZETDBNc1RVRkJUV1VzWVVGQllVd3NZVUZCWVZZc1MwRkJZaXhEUVVGdVFqdEJRVU5CTEZOQlFVOHNWVUZCUTBvc1EwRkJSRHRCUVVGQkxGZEJRVkVzUTBGQlEwRXNTMEZCU3l4RFFVRk9MRWxCUVZjc1EwRkJXaXhIUVVGcFFpeE5RVUZOYlVJc1YwRkJWMjVDTEVOQlFWZ3NRMEZCZGtJc1IwRkJkVU1zVDBGQlR5eEpRVUZKVXl4TFFVRkxWeXhIUVVGTUxFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFVTXNSVUZCUkN4SlFVRlBjRUlzU1VGQlNTeERRVUZZTEVOQlFWb3NRMEZCV0N4RFFVRTVRenRCUVVGQkxFZEJRVkE3UVVGRFJDeERRVWhOT3p0QlFVdEJMRWxCUVUxeFFpeHJRMEZCWVVnc2RVSkJRWFZDY2tJc01FSkJRWFpDTEVOQlFXNUNJaXdpWm1sc1pTSTZJbVZoYzJsdVp5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltTnZibk4wSUVSRlJrRlZURlJmVDFaRlVsTklUMDlVWDFOVVVrVk9SMVJJSUQwZ01TNDFNalU3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVlNaWFpsY25ObFpFVmhjMmx1WnlBOUlDaGxZWE5wYm1jcElEMCtJQ2h3S1NBOVBpQXhJQzBnWldGemFXNW5LREVnTFNCd0tUdGNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZOYVhKeWIzSmxaRVZoYzJsdVp5QTlJQ2hsWVhOcGJtY3BJRDArSUNod0tTQTlQaUFvY0NBOFBTQXdMalVwSUQ4Z1pXRnphVzVuS0RJZ0tpQndLU0F2SURJZ09pQW9NaUF0SUdWaGMybHVaeWd5SUNvZ0tERWdMU0J3S1NrcElDOGdNanRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR3hwYm1WaGNpQTlJQ2h3S1NBOVBpQndPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdZM0psWVhSbFJYaHdiMGx1SUQwZ0tIQnZkMlZ5S1NBOVBpQW9jQ2tnUFQ0Z2NDQXFLaUJ3YjNkbGNqdGNibVY0Y0c5eWRDQmpiMjV6ZENCbFlYTmxTVzRnUFNCamNtVmhkR1ZGZUhCdlNXNG9NaWs3WEc1bGVIQnZjblFnWTI5dWMzUWdaV0Z6WlU5MWRDQTlJR055WldGMFpWSmxkbVZ5YzJWa1JXRnphVzVuS0dWaGMyVkpiaWs3WEc1bGVIQnZjblFnWTI5dWMzUWdaV0Z6WlVsdVQzVjBJRDBnWTNKbFlYUmxUV2x5Y205eVpXUkZZWE5wYm1jb1pXRnpaVWx1S1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOcGNtTkpiaUE5SUNod0tTQTlQaUF4SUMwZ1RXRjBhQzV6YVc0b1RXRjBhQzVoWTI5ektIQXBLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmphWEpqVDNWMElEMGdZM0psWVhSbFVtVjJaWEp6WldSRllYTnBibWNvWTJseVkwbHVLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmphWEpqU1c1UGRYUWdQU0JqY21WaGRHVk5hWEp5YjNKbFpFVmhjMmx1WnloamFYSmpUM1YwS1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVUpoWTJ0SmJpQTlJQ2h3YjNkbGNpa2dQVDRnS0hBcElEMCtJQ2h3SUNvZ2NDa2dLaUFvS0hCdmQyVnlJQ3NnTVNrZ0tpQndJQzBnY0c5M1pYSXBPMXh1Wlhod2IzSjBJR052Ym5OMElHSmhZMnRKYmlBOUlHTnlaV0YwWlVKaFkydEpiaWhFUlVaQlZVeFVYMDlXUlZKVFNFOVBWRjlUVkZKRlRrZFVTQ2s3WEc1bGVIQnZjblFnWTI5dWMzUWdZbUZqYTA5MWRDQTlJR055WldGMFpWSmxkbVZ5YzJWa1JXRnphVzVuS0dKaFkydEpiaWs3WEc1bGVIQnZjblFnWTI5dWMzUWdZbUZqYTBsdVQzVjBJRDBnWTNKbFlYUmxUV2x5Y205eVpXUkZZWE5wYm1jb1ltRmphMGx1S1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVUZ1ZEdsamFYQmhkR1ZGWVhOcGJtY2dQU0FvY0c5M1pYSXBJRDArSUh0Y2JpQWdZMjl1YzNRZ1ltRmphMFZoYzJsdVp5QTlJR055WldGMFpVSmhZMnRKYmlod2IzZGxjaWs3WEc0Z0lISmxkSFZ5YmlBb2NDa2dQVDRnS0Nod0lDbzlJRElwSUR3Z01Ta2dQeUF3TGpVZ0tpQmlZV05yUldGemFXNW5LSEFwSURvZ01DNDFJQ29nS0RJZ0xTQk5ZWFJvTG5CdmR5Z3lMQ0F0TVRBZ0tpQW9jQ0F0SURFcEtTazdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWVc1MGFXTnBjR0YwWlNBOUlHTnlaV0YwWlVGdWRHbGphWEJoZEdWRllYTnBibWNvUkVWR1FWVk1WRjlQVmtWU1UwaFBUMVJmVTFSU1JVNUhWRWdwTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9lYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnRyYW5zZm9ybUNoaWxkVmFsdWVzID0gZXhwb3J0cy5zdGVwcyA9IGV4cG9ydHMud3JhcCA9IGV4cG9ydHMuaW50ZXJwb2xhdGUgPSBleHBvcnRzLmZsb3cgPSBleHBvcnRzLmNsYW1wID0gZXhwb3J0cy5jbGFtcE1pbiA9IGV4cG9ydHMuY2xhbXBNYXggPSBleHBvcnRzLmFwcGVuZFVuaXQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4vY2FsYycpO1xuXG4vKipcbiAqIEFwcGVuZCBVbml0XG4gKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBhcHBlbmRcbiAqIGFwcGVuZFVuaXQoJ3B4JywgMjApIC0+ICcyMHB4J1xuICogQHBhcmFtICB7c3RyaW5nfSB1bml0KVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgYXBwZW5kVW5pdCA9IGV4cG9ydHMuYXBwZW5kVW5pdCA9IGZ1bmN0aW9uICh1bml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiAnJyArIHYgKyB1bml0O1xuICB9O1xufTtcblxuLyoqXG4gKiBDbGFtcCB2YWx1ZSBiZXR3ZWVuXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlc3RyaWN0IGEgZ2l2ZW4gdmFsdWUgYmV0d2VlbiBgbWluYCBhbmQgYG1heGBcbiAqIEBwYXJhbSAge251bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgY2xhbXBNYXggPSBleHBvcnRzLmNsYW1wTWF4ID0gZnVuY3Rpb24gKG1heCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odiwgbWF4KTtcbiAgfTtcbn07XG52YXIgY2xhbXBNaW4gPSBleHBvcnRzLmNsYW1wTWluID0gZnVuY3Rpb24gKG1pbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgodiwgbWluKTtcbiAgfTtcbn07XG52YXIgY2xhbXAgPSBleHBvcnRzLmNsYW1wID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIHZhciBfbWluID0gY2xhbXBNaW4obWluKTtcbiAgdmFyIF9tYXggPSBjbGFtcE1heChtYXgpO1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gX21pbihfbWF4KHYpKTtcbiAgfTtcbn07XG5cbi8qKlxuICogRmxvd1xuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogZmxvdyhtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG52YXIgZmxvdyA9IGV4cG9ydHMuZmxvdyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRyYW5zZm9ybWVycyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHRyYW5zZm9ybWVyc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhY2MpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHZhciB2ID0gYWNjO1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXS5hcHBseSh0cmFuc2Zvcm1lcnMsIFt2XS5jb25jYXQoYXJncykpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcblxudmFyIGludGVycG9sYXRlID0gZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykge1xuICB2YXIgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIHZhciBmaW5hbEluZGV4ID0gcmFuZ2VMZW5ndGggLSAxO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgdmFyIGkgPSAxO1xuXG4gICAgLy8gRmluZCBpbmRleCBvZiByYW5nZSBzdGFydFxuICAgIGZvciAoOyBpIDwgcmFuZ2VMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlucHV0W2ldID4gdiB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9ncmVzc0luUmFuZ2UgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGlucHV0W2kgLSAxXSwgaW5wdXRbaV0sIHYpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gcmFuZ2VFYXNpbmcgPyByYW5nZUVhc2luZ1tpXShwcm9ncmVzc0luUmFuZ2UpIDogcHJvZ3Jlc3NJblJhbmdlO1xuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKG91dHB1dFtpIC0gMV0sIG91dHB1dFtpXSwgZWFzZWRQcm9ncmVzcyk7XG4gIH07XG59O1xuXG52YXIgd3JhcCA9IGV4cG9ydHMud3JhcCA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgcmFuZ2VTaXplID0gbWF4IC0gbWluO1xuICAgIHJldHVybiAoKHYgLSBtaW4pICUgcmFuZ2VTaXplICsgcmFuZ2VTaXplKSAlIHJhbmdlU2l6ZSArIG1pbjtcbiAgfTtcbn07XG5cbnZhciBzdGVwcyA9IGV4cG9ydHMuc3RlcHMgPSBmdW5jdGlvbiAoc3RlcHMsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciBwcm9ncmVzcyA9ICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkobWluLCBtYXgsIHYpO1xuICAgIHJldHVybiAoMCwgX2NhbGMuc3RlcFByb2dyZXNzKShzdGVwcywgcHJvZ3Jlc3MpO1xuICB9O1xufTtcblxudmFyIHRyYW5zZm9ybUNoaWxkVmFsdWVzID0gZXhwb3J0cy50cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IGZ1bmN0aW9uIChjaGlsZFRyYW5zZm9ybWVycykge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdikge1xuICAgICAgdmFyIGNoaWxkVHJhbnNmb3JtZXIgPSBjaGlsZFRyYW5zZm9ybWVyc1trZXldO1xuICAgICAgaWYgKGNoaWxkVHJhbnNmb3JtZXIpIHtcbiAgICAgICAgdltrZXldID0gY2hpbGRUcmFuc2Zvcm1lcih2W2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6TG1weklsMHNJbTVoYldWeklqcGJJbUZ3Y0dWdVpGVnVhWFFpTENKMWJtbDBJaXdpZGlJc0ltTnNZVzF3VFdGNElpd2liV0Y0SWl3aVRXRjBhQ0lzSW0xcGJpSXNJbU5zWVcxd1RXbHVJaXdpWTJ4aGJYQWlMQ0pmYldsdUlpd2lYMjFoZUNJc0ltWnNiM2NpTENKMGNtRnVjMlp2Y20xbGNuTWlMQ0p1ZFcxVWNtRnVjMlp2Y20xbGNuTWlMQ0pzWlc1bmRHZ2lMQ0pwSWl3aVlXTmpJaXdpWVhKbmN5SXNJbWx1ZEdWeWNHOXNZWFJsSWl3aWFXNXdkWFFpTENKdmRYUndkWFFpTENKeVlXNW5aVVZoYzJsdVp5SXNJbkpoYm1kbFRHVnVaM1JvSWl3aVptbHVZV3hKYm1SbGVDSXNJbkJ5YjJkeVpYTnpTVzVTWVc1blpTSXNJbVZoYzJWa1VISnZaM0psYzNNaUxDSjNjbUZ3SWl3aWNtRnVaMlZUYVhwbElpd2ljM1JsY0hNaUxDSndjbTluY21WemN5SXNJblJ5WVc1elptOXliVU5vYVd4a1ZtRnNkV1Z6SWl3aVkyaHBiR1JVY21GdWMyWnZjbTFsY25NaUxDSnJaWGtpTENKamFHbHNaRlJ5WVc1elptOXliV1Z5SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJPenRCUVVWQk96czdPenM3TzBGQlQwOHNTVUZCVFVFc2EwTkJRV0VzVlVGQlEwTXNTVUZCUkR0QlFVRkJMRk5CUVZVc1ZVRkJRME1zUTBGQlJEdEJRVUZCTEdkQ1FVRlZRU3hEUVVGV0xFZEJRV05FTEVsQlFXUTdRVUZCUVN4SFFVRldPMEZCUVVFc1EwRkJia0k3TzBGQlJWQTdPenM3T3pzN1FVRlBUeXhKUVVGTlJTdzRRa0ZCVnl4VlFVRkRReXhIUVVGRU8wRkJRVUVzVTBGQlV5eFZRVUZEUml4RFFVRkVPMEZCUVVFc1YwRkJUMGNzUzBGQlMwTXNSMEZCVEN4RFFVRlRTaXhEUVVGVUxFVkJRVmxGTEVkQlFWb3NRMEZCVUR0QlFVRkJMRWRCUVZRN1FVRkJRU3hEUVVGcVFqdEJRVU5CTEVsQlFVMUhMRGhDUVVGWExGVkJRVU5FTEVkQlFVUTdRVUZCUVN4VFFVRlRMRlZCUVVOS0xFTkJRVVE3UVVGQlFTeFhRVUZQUnl4TFFVRkxSQ3hIUVVGTUxFTkJRVk5HTEVOQlFWUXNSVUZCV1Vrc1IwRkJXaXhEUVVGUU8wRkJRVUVzUjBGQlZEdEJRVUZCTEVOQlFXcENPMEZCUTBFc1NVRkJUVVVzZDBKQlFWRXNWVUZCUTBZc1IwRkJSQ3hGUVVGTlJpeEhRVUZPTEVWQlFXTTdRVUZEYWtNc1RVRkJUVXNzVDBGQlQwWXNVMEZCVTBRc1IwRkJWQ3hEUVVGaU8wRkJRMEVzVFVGQlRVa3NUMEZCVDFBc1UwRkJVME1zUjBGQlZDeERRVUZpTzBGQlEwRXNVMEZCVHl4VlFVRkRSaXhEUVVGRU8wRkJRVUVzVjBGQlQwOHNTMEZCUzBNc1MwRkJTMUlzUTBGQlRDeERRVUZNTEVOQlFWQTdRVUZCUVN4SFFVRlFPMEZCUTBRc1EwRktUVHM3UVVGTlVEczdPenM3T3p0QlFVOVBMRWxCUVUxVExITkNRVUZQTEZsQlFYRkNPMEZCUVVFc2IwTkJRV3BDUXl4WlFVRnBRanRCUVVGcVFrRXNaMEpCUVdsQ08wRkJRVUU3TzBGQlEzWkRMRTFCUVUxRExHdENRVUZyUWtRc1lVRkJZVVVzVFVGQmNrTTdRVUZEUVN4TlFVRkpReXhKUVVGSkxFTkJRVkk3TzBGQlJVRXNVMEZCVHl4VlFVRkRReXhIUVVGRUxFVkJRV3RDTzBGQlFVRXNkVU5CUVZSRExFbEJRVk03UVVGQlZFRXNWVUZCVXp0QlFVRkJPenRCUVVOMlFpeFJRVUZKWml4SlFVRkpZeXhIUVVGU08wRkJRMEVzVTBGQlMwUXNTVUZCU1N4RFFVRlVMRVZCUVZsQkxFbEJRVWxHTEdWQlFXaENMRVZCUVdsRFJTeEhRVUZxUXl4RlFVRnpRenRCUVVOd1EySXNWVUZCU1ZVc1lVRkJZVWNzUTBGQllpeDFRa0ZCWjBKaUxFTkJRV2hDTEZOQlFYTkNaU3hKUVVGMFFpeEZRVUZLTzBGQlEwUTdPMEZCUlVRc1YwRkJUMllzUTBGQlVEdEJRVU5FTEVkQlVFUTdRVUZSUkN4RFFWcE5PenRCUVdOQkxFbEJRVTFuUWl4dlEwRkJZeXhWUVVGRFF5eExRVUZFTEVWQlFWRkRMRTFCUVZJc1JVRkJaMEpETEZkQlFXaENMRVZCUVdkRE8wRkJRM3BFTEUxQlFVMURMR05CUVdOSUxFMUJRVTFNTEUxQlFURkNPMEZCUTBFc1RVRkJUVk1zWVVGQllVUXNZMEZCWXl4RFFVRnFRenM3UVVGRlFTeFRRVUZQTEZWQlFVTndRaXhEUVVGRUxFVkJRVTg3UVVGRFdqdEJRVU5CTEZGQlFVbEJMRXRCUVV0cFFpeE5RVUZOTEVOQlFVNHNRMEZCVkN4RlFVRnRRanRCUVVOcVFpeGhRVUZQUXl4UFFVRlBMRU5CUVZBc1EwRkJVRHRCUVVORU96dEJRVVZFTzBGQlEwRXNVVUZCU1d4Q0xFdEJRVXRwUWl4TlFVRk5TU3hWUVVGT0xFTkJRVlFzUlVGQk5FSTdRVUZETVVJc1lVRkJUMGdzVDBGQlQwY3NWVUZCVUN4RFFVRlFPMEZCUTBRN08wRkJSVVFzVVVGQlNWSXNTVUZCU1N4RFFVRlNPenRCUVVWQk8wRkJRMEVzVjBGQlQwRXNTVUZCU1U4c1YwRkJXQ3hGUVVGM1FsQXNSMEZCZUVJc1JVRkJOa0k3UVVGRE0wSXNWVUZCU1Vrc1RVRkJUVW9zUTBGQlRpeEpRVUZYWWl4RFFVRllMRWxCUVdkQ1lTeE5RVUZOVVN4VlFVRXhRaXhGUVVGelF6dEJRVU53UXp0QlFVTkVPMEZCUTBZN08wRkJSVVFzVVVGQlRVTXNhMEpCUVd0Q0xHZERRVUZ4UWt3c1RVRkJUVW9zU1VGQlNTeERRVUZXTEVOQlFYSkNMRVZCUVcxRFNTeE5RVUZOU2l4RFFVRk9MRU5CUVc1RExFVkJRVFpEWWl4RFFVRTNReXhEUVVGNFFqdEJRVU5CTEZGQlFVMTFRaXhuUWtGQmFVSktMRmRCUVVRc1IwRkJaMEpCTEZsQlFWbE9MRU5CUVZvc1JVRkJaVk1zWlVGQlppeERRVUZvUWl4SFFVRnJSRUVzWlVGQmVFVTdRVUZEUVN4WFFVRlBMR2REUVVGeFFrb3NUMEZCVDB3c1NVRkJTU3hEUVVGWUxFTkJRWEpDTEVWQlFXOURTeXhQUVVGUFRDeERRVUZRTEVOQlFYQkRMRVZCUVN0RFZTeGhRVUV2UXl4RFFVRlFPMEZCUTBRc1IwRjJRa1E3UVVGM1FrUXNRMEUxUWswN08wRkJPRUpCTEVsQlFVMURMSE5DUVVGUExGVkJRVU53UWl4SFFVRkVMRVZCUVUxR0xFZEJRVTQ3UVVGQlFTeFRRVUZqTEZWQlFVTkdMRU5CUVVRc1JVRkJUenRCUVVOMlF5eFJRVUZOZVVJc1dVRkJXWFpDTEUxQlFVMUZMRWRCUVhoQ08wRkJRMEVzVjBGQlR5eERRVUZETEVOQlFVTktMRWxCUVVsSkxFZEJRVXdzU1VGQldYRkNMRk5CUVZvc1IwRkJkMEpCTEZOQlFYcENMRWxCUVhORFFTeFRRVUYwUXl4SFFVRnJSSEpDTEVkQlFYcEVPMEZCUTBRc1IwRkliVUk3UVVGQlFTeERRVUZpT3p0QlFVdEJMRWxCUVUxelFpeDNRa0ZCVVN4VlFVRkRRU3hMUVVGRUxFVkJRVkYwUWl4SFFVRlNMRVZCUVdGR0xFZEJRV0k3UVVGQlFTeFRRVUZ4UWl4VlFVRkRSaXhEUVVGRUxFVkJRVTg3UVVGREwwTXNVVUZCVFRKQ0xGZEJRVmNzWjBOQlFYRkNka0lzUjBGQmNrSXNSVUZCTUVKR0xFZEJRVEZDTEVWQlFTdENSaXhEUVVFdlFpeERRVUZxUWp0QlFVTkJMRmRCUVU4c2QwSkJRV0V3UWl4TFFVRmlMRVZCUVc5Q1F5eFJRVUZ3UWl4RFFVRlFPMEZCUTBRc1IwRkliMEk3UVVGQlFTeERRVUZrT3p0QlFVdEJMRWxCUVUxRExITkVRVUYxUWl4VlFVRkRReXhwUWtGQlJEdEJRVUZCTEZOQlFYVkNMRlZCUVVNM1FpeERRVUZFTEVWQlFVODdRVUZEYUVVc1UwRkJTeXhKUVVGSk9FSXNSMEZCVkN4SlFVRm5RamxDTEVOQlFXaENMRVZCUVcxQ08wRkJRMnBDTEZWQlFVMHJRaXh0UWtGQmJVSkdMR3RDUVVGclFrTXNSMEZCYkVJc1EwRkJla0k3UVVGRFFTeFZRVUZKUXl4blFrRkJTaXhGUVVGelFqdEJRVU53UWk5Q0xGVkJRVVU0UWl4SFFVRkdMRWxCUVZORExHbENRVUZwUWk5Q0xFVkJRVVU0UWl4SFFVRkdMRU5CUVdwQ0xFTkJRVlE3UVVGRFJEdEJRVU5HT3p0QlFVVkVMRmRCUVU4NVFpeERRVUZRTzBGQlEwUXNSMEZVYlVNN1FVRkJRU3hEUVVFM1FpSXNJbVpwYkdVaU9pSjBjbUZ1YzJadmNtMWxjbk11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlN3Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTXNJSE4wWlhCUWNtOW5jbVZ6Y3lCOUlHWnliMjBnSnk0dlkyRnNZeWM3WEc1Y2JpOHFLbHh1SUNvZ1FYQndaVzVrSUZWdWFYUmNiaUFxSUVFZ1puVnVZM1JwYjI0Z2RHaGhkQ0IzYVd4c0lHRndjR1Z1WkZ4dUlDb2dZWEJ3Wlc1a1ZXNXBkQ2duY0hnbkxDQXlNQ2tnTFQ0Z0p6SXdjSGduWEc0Z0tpQkFjR0Z5WVcwZ0lIdHpkSEpwYm1kOUlIVnVhWFFwWEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOVhHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmhjSEJsYm1SVmJtbDBJRDBnS0hWdWFYUXBJRDArSUNoMktTQTlQaUJnSkh0MmZTUjdkVzVwZEgxZ08xeHVYRzR2S2lwY2JpQXFJRU5zWVcxd0lIWmhiSFZsSUdKbGRIZGxaVzVjYmlBcUlFTnlaV0YwWlhNZ1lTQm1kVzVqZEdsdmJpQjBhR0YwSUhkcGJHd2djbVZ6ZEhKcFkzUWdZU0JuYVhabGJpQjJZV3gxWlNCaVpYUjNaV1Z1SUdCdGFXNWdJR0Z1WkNCZ2JXRjRZRnh1SUNvZ1FIQmhjbUZ0SUNCN2JuVnRZbVZ5ZlNCdGFXNWNiaUFxSUVCd1lYSmhiU0FnZTI1MWJXSmxjbjBnYldGNFhHNGdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlYRzRnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYkdGdGNFMWhlQ0E5SUNodFlYZ3BJRDArSUNoMktTQTlQaUJOWVhSb0xtMXBiaWgyTENCdFlYZ3BPMXh1Wlhod2IzSjBJR052Ym5OMElHTnNZVzF3VFdsdUlEMGdLRzFwYmlrZ1BUNGdLSFlwSUQwK0lFMWhkR2d1YldGNEtIWXNJRzFwYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJ4aGJYQWdQU0FvYldsdUxDQnRZWGdwSUQwK0lIdGNiaUFnWTI5dWMzUWdYMjFwYmlBOUlHTnNZVzF3VFdsdUtHMXBiaWs3WEc0Z0lHTnZibk4wSUY5dFlYZ2dQU0JqYkdGdGNFMWhlQ2h0WVhncE8xeHVJQ0J5WlhSMWNtNGdLSFlwSUQwK0lGOXRhVzRvWDIxaGVDaDJLU2s3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRVpzYjNkY2JpQXFJRU52YlhCdmMyVWdiM1JvWlhJZ2RISmhibk5tYjNKdFpYSnpJSFJ2SUhKMWJpQnNhVzVsWVhKcGJIbGNiaUFxSUdac2IzY29iV2x1S0RJd0tTd2diV0Y0S0RRd0tTbGNiaUFxSUVCd1lYSmhiU0FnZXk0dUxtWjFibU4wYVc5dWMzMGdkSEpoYm5ObWIzSnRaWEp6WEc0Z0tpQkFjbVYwZFhKdUlIdG1kVzVqZEdsdmJuMWNiaUFxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1pzYjNjZ1BTQW9MaTR1ZEhKaGJuTm1iM0p0WlhKektTQTlQaUI3WEc0Z0lHTnZibk4wSUc1MWJWUnlZVzV6Wm05eWJXVnljeUE5SUhSeVlXNXpabTl5YldWeWN5NXNaVzVuZEdnN1hHNGdJR3hsZENCcElEMGdNRHRjYmx4dUlDQnlaWFIxY200Z0tHRmpZeXdnTGk0dVlYSm5jeWtnUFQ0Z2UxeHVJQ0FnSUd4bGRDQjJJRDBnWVdOak8xeHVJQ0FnSUdadmNpQW9hU0E5SURBN0lHa2dQQ0J1ZFcxVWNtRnVjMlp2Y20xbGNuTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2RpQTlJSFJ5WVc1elptOXliV1Z5YzF0cFhTaDJMQ0F1TGk1aGNtZHpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RqdGNiaUFnZlR0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnBiblJsY25CdmJHRjBaU0E5SUNocGJuQjFkQ3dnYjNWMGNIVjBMQ0J5WVc1blpVVmhjMmx1WnlrZ1BUNGdlMXh1SUNCamIyNXpkQ0J5WVc1blpVeGxibWQwYUNBOUlHbHVjSFYwTG14bGJtZDBhRHRjYmlBZ1kyOXVjM1FnWm1sdVlXeEpibVJsZUNBOUlISmhibWRsVEdWdVozUm9JQzBnTVR0Y2JseHVJQ0J5WlhSMWNtNGdLSFlwSUQwK0lIdGNiaUFnSUNBdkx5QkpaaUIyWVd4MVpTQnZkWFJ6YVdSbElHMXBibWx0ZFcwZ2NtRnVaMlVzSUhGMWFXTnJiSGtnY21WMGRYSnVYRzRnSUNBZ2FXWWdLSFlnUEQwZ2FXNXdkWFJiTUYwcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCdmRYUndkWFJiTUYwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1NXWWdkbUZzZFdVZ2IzVjBjMmxrWlNCdFlYaHBiWFZ0SUhKaGJtZGxMQ0J4ZFdsamEyeDVJSEpsZEhWeWJseHVJQ0FnSUdsbUlDaDJJRDQ5SUdsdWNIVjBXMlpwYm1Gc1NXNWtaWGhkS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYjNWMGNIVjBXMlpwYm1Gc1NXNWtaWGhkTzF4dUlDQWdJSDFjYmx4dUlDQWdJR3hsZENCcElEMGdNVHRjYmx4dUlDQWdJQzh2SUVacGJtUWdhVzVrWlhnZ2IyWWdjbUZ1WjJVZ2MzUmhjblJjYmlBZ0lDQm1iM0lnS0RzZ2FTQThJSEpoYm1kbFRHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJR2xtSUNocGJuQjFkRnRwWFNBK0lIWWdmSHdnYVNBOVBUMGdabWx1WVd4SmJtUmxlQ2tnZTF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQmpiMjV6ZENCd2NtOW5jbVZ6YzBsdVVtRnVaMlVnUFNCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTaHBibkIxZEZ0cElDMGdNVjBzSUdsdWNIVjBXMmxkTENCMktUdGNiaUFnSUNCamIyNXpkQ0JsWVhObFpGQnliMmR5WlhOeklEMGdLSEpoYm1kbFJXRnphVzVuS1NBL0lISmhibWRsUldGemFXNW5XMmxkS0hCeWIyZHlaWE56U1c1U1lXNW5aU2tnT2lCd2NtOW5jbVZ6YzBsdVVtRnVaMlU3WEc0Z0lDQWdjbVYwZFhKdUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLRzkxZEhCMWRGdHBJQzBnTVYwc0lHOTFkSEIxZEZ0cFhTd2daV0Z6WldSUWNtOW5jbVZ6Y3lrN1hHNGdJSDA3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2QzSmhjQ0E5SUNodGFXNHNJRzFoZUNrZ1BUNGdLSFlwSUQwK0lIdGNiaUFnWTI5dWMzUWdjbUZ1WjJWVGFYcGxJRDBnYldGNElDMGdiV2x1TzF4dUlDQnlaWFIxY200Z0tDaDJJQzBnYldsdUtTQWxJSEpoYm1kbFUybDZaU0FySUhKaGJtZGxVMmw2WlNrZ0pTQnlZVzVuWlZOcGVtVWdLeUJ0YVc0N1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjM1JsY0hNZ1BTQW9jM1JsY0hNc0lHMXBiaXdnYldGNEtTQTlQaUFvZGlrZ1BUNGdlMXh1SUNCamIyNXpkQ0J3Y205bmNtVnpjeUE5SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtHMXBiaXdnYldGNExDQjJLVHRjYmlBZ2NtVjBkWEp1SUhOMFpYQlFjbTluY21WemN5aHpkR1Z3Y3l3Z2NISnZaM0psYzNNcE8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSFJ5WVc1elptOXliVU5vYVd4a1ZtRnNkV1Z6SUQwZ0tHTm9hV3hrVkhKaGJuTm1iM0p0WlhKektTQTlQaUFvZGlrZ1BUNGdlMXh1SUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZGlrZ2UxeHVJQ0FnSUdOdmJuTjBJR05vYVd4a1ZISmhibk5tYjNKdFpYSWdQU0JqYUdsc1pGUnlZVzV6Wm05eWJXVnljMXRyWlhsZE8xeHVJQ0FnSUdsbUlDaGphR2xzWkZSeVlXNXpabTl5YldWeUtTQjdYRzRnSUNBZ0lDQjJXMnRsZVYwZ1BTQmphR2xzWkZSeVlXNXpabTl5YldWeUtIWmJhMlY1WFNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhZN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29sb3IgPSBleHBvcnRzLmhzbGEgPSBleHBvcnRzLmhleCA9IGV4cG9ydHMucmdiYSA9IGV4cG9ydHMucmdiVW5pdCA9IGV4cG9ydHMuc2NhbGUgPSBleHBvcnRzLnB4ID0gZXhwb3J0cy5wZXJjZW50ID0gZXhwb3J0cy5kZWdyZWVzID0gZXhwb3J0cy5hbHBoYSA9IGV4cG9ydHMubnVtYmVyID0gdW5kZWZpbmVkO1xuXG52YXIgX3RyYW5zZm9ybUNoaWxkVmFsdWVzLCBfdHJhbnNmb3JtQ2hpbGRWYWx1ZXMyO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFZhbHVlIHR5cGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogYWxwaGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGRlZ3JlZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGhleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogaHNsYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcGVyY2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHJnYlVuaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHJnYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogc2NhbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3V0aWxzMiA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG4vLyBTdHJpbmcgcHJvcGVydGllc1xudmFyIFJFRCA9ICdyZWQnO1xudmFyIEdSRUVOID0gJ2dyZWVuJztcbnZhciBCTFVFID0gJ2JsdWUnO1xudmFyIEFMUEhBID0gJ2FscGhhJztcbnZhciBIVUUgPSAnaHVlJztcbnZhciBTQVRVUkFUSU9OID0gJ3NhdHVyYXRpb24nO1xudmFyIExJR0hUTkVTUyA9ICdsaWdodG5lc3MnO1xuXG4vLyBUZW1wbGF0ZXNcbnZhciByZ2JhVGVtcGxhdGUgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgcmVkID0gX3JlZi5yZWQsXG4gICAgICBncmVlbiA9IF9yZWYuZ3JlZW4sXG4gICAgICBibHVlID0gX3JlZi5ibHVlLFxuICAgICAgX3JlZiRhbHBoYSA9IF9yZWYuYWxwaGEsXG4gICAgICBhbHBoYSA9IF9yZWYkYWxwaGEgPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmJGFscGhhO1xuICByZXR1cm4gJ3JnYmEoJyArIHJlZCArICcsICcgKyBncmVlbiArICcsICcgKyBibHVlICsgJywgJyArIGFscGhhICsgJyknO1xufTtcblxudmFyIGhzbGFUZW1wbGF0ZSA9IGZ1bmN0aW9uIChfcmVmMikge1xuICB2YXIgaHVlID0gX3JlZjIuaHVlLFxuICAgICAgc2F0dXJhdGlvbiA9IF9yZWYyLnNhdHVyYXRpb24sXG4gICAgICBsaWdodG5lc3MgPSBfcmVmMi5saWdodG5lc3MsXG4gICAgICBfcmVmMiRhbHBoYSA9IF9yZWYyLmFscGhhLFxuICAgICAgYWxwaGEgPSBfcmVmMiRhbHBoYSA9PT0gdW5kZWZpbmVkID8gMSA6IF9yZWYyJGFscGhhO1xuICByZXR1cm4gJ2hzbGEoJyArIGh1ZSArICcsICcgKyBzYXR1cmF0aW9uICsgJywgJyArIGxpZ2h0bmVzcyArICcsICcgKyBhbHBoYSArICcpJztcbn07XG5cbnZhciBudW1iZXIgPSBleHBvcnRzLm51bWJlciA9IHtcbiAgdGVzdDogX3V0aWxzMi5pc051bSxcbiAgcGFyc2U6IHBhcnNlRmxvYXRcbn07XG5cbi8vIFZhbHVlIHR5cGVzXG52YXIgYWxwaGEgPSBleHBvcnRzLmFscGhhID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICB0cmFuc2Zvcm06ICgwLCBfdHJhbnNmb3JtZXJzLmNsYW1wKSgwLCAxKVxufSk7XG5cbnZhciBkZWdyZWVzID0gZXhwb3J0cy5kZWdyZWVzID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJ2RlZycpO1xudmFyIHBlcmNlbnQgPSBleHBvcnRzLnBlcmNlbnQgPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgnJScpO1xudmFyIHB4ID0gZXhwb3J0cy5weCA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCdweCcpO1xuXG52YXIgc2NhbGUgPSBleHBvcnRzLnNjYWxlID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICBkZWZhdWx0OiAxXG59KTtcblxudmFyIHJnYlVuaXQgPSBleHBvcnRzLnJnYlVuaXQgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIHRyYW5zZm9ybTogKDAsIF90cmFuc2Zvcm1lcnMuZmxvdykoXG4gIC8vaHR0cDovL2NvZGVwZW4uaW8vb3N1Ymxha2UvZnVsbC94R1ZWYU4vXG4gIC8vICh2LCB2YWx1ZSwgYWN0aW9uKSA9PiB7XG4gIC8vICAgaWYgKGFjdGlvbikge1xuICAvLyAgICAgY29uc3QgZnJvbUNvbG9yID0gYWN0aW9uLmZyb20gKiBhY3Rpb24uZnJvbTtcbiAgLy8gICAgIGNvbnN0IHRvQ29sb3IgPSBhY3Rpb24udG8gKiBhY3Rpb24udG87XG4gIC8vICAgICByZXR1cm4gTWF0aC5zcXJ0KGFjdGlvbi5wcm9ncmVzcyAqICh0b0NvbG9yIC0gZnJvbUNvbG9yKSArIGZyb21Db2xvcik7XG4gIC8vICAgfVxuXG4gIC8vICAgcmV0dXJuIHY7XG4gIC8vIH0sXG4gICgwLCBfdHJhbnNmb3JtZXJzLmNsYW1wKSgwLCAyNTUpLCBNYXRoLnJvdW5kKVxufSk7XG5cbnZhciByZ2JhID0gZXhwb3J0cy5yZ2JhID0ge1xuICB0ZXN0OiAoMCwgX3V0aWxzLmlzRmlyc3RDaGFycykoJ3JnYicpLFxuXG4gIHBhcnNlOiAoMCwgX3V0aWxzLnNwbGl0Q29sb3JWYWx1ZXMpKFtSRUQsIEdSRUVOLCBCTFVFLCBBTFBIQV0pLFxuXG4gIHRyYW5zZm9ybTogKDAsIF90cmFuc2Zvcm1lcnMuZmxvdykoKDAsIF90cmFuc2Zvcm1lcnMudHJhbnNmb3JtQ2hpbGRWYWx1ZXMpKChfdHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSB7fSwgX3RyYW5zZm9ybUNoaWxkVmFsdWVzW1JFRF0gPSByZ2JVbml0LnRyYW5zZm9ybSwgX3RyYW5zZm9ybUNoaWxkVmFsdWVzW0dSRUVOXSA9IHJnYlVuaXQudHJhbnNmb3JtLCBfdHJhbnNmb3JtQ2hpbGRWYWx1ZXNbQkxVRV0gPSByZ2JVbml0LnRyYW5zZm9ybSwgX3RyYW5zZm9ybUNoaWxkVmFsdWVzW0FMUEhBXSA9IGFscGhhLnRyYW5zZm9ybSwgX3RyYW5zZm9ybUNoaWxkVmFsdWVzKSksIHJnYmFUZW1wbGF0ZSlcbn07XG5cbnZhciBoZXggPSBleHBvcnRzLmhleCA9IF9leHRlbmRzKHt9LCByZ2JhLCB7XG5cbiAgdGVzdDogKDAsIF91dGlscy5pc0ZpcnN0Q2hhcnMpKCcjJyksXG5cbiAgcGFyc2U6IGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIF9yZWYzO1xuXG4gICAgdmFyIHIgPSB2b2lkIDAsXG4gICAgICAgIGcgPSB2b2lkIDAsXG4gICAgICAgIGIgPSB2b2lkIDA7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgIGlmICh2Lmxlbmd0aCA+IDQpIHtcbiAgICAgIHIgPSB2LnN1YnN0cigxLCAyKTtcbiAgICAgIGcgPSB2LnN1YnN0cigzLCAyKTtcbiAgICAgIGIgPSB2LnN1YnN0cig1LCAyKTtcblxuICAgICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICB9IGVsc2Uge1xuICAgICAgciA9IHYuc3Vic3RyKDEsIDEpO1xuICAgICAgZyA9IHYuc3Vic3RyKDIsIDEpO1xuICAgICAgYiA9IHYuc3Vic3RyKDMsIDEpO1xuICAgICAgciArPSByO1xuICAgICAgZyArPSBnO1xuICAgICAgYiArPSBiO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVmMyA9IHt9LCBfcmVmM1tSRURdID0gcGFyc2VJbnQociwgMTYpLCBfcmVmM1tHUkVFTl0gPSBwYXJzZUludChnLCAxNiksIF9yZWYzW0JMVUVdID0gcGFyc2VJbnQoYiwgMTYpLCBfcmVmM1tBTFBIQV0gPSAxLCBfcmVmMztcbiAgfVxufSk7XG5cbnZhciBoc2xhID0gZXhwb3J0cy5oc2xhID0ge1xuICB0ZXN0OiAoMCwgX3V0aWxzLmlzRmlyc3RDaGFycykoJ2hzbCcpLFxuXG4gIHBhcnNlOiAoMCwgX3V0aWxzLnNwbGl0Q29sb3JWYWx1ZXMpKFtIVUUsIFNBVFVSQVRJT04sIExJR0hUTkVTUywgQUxQSEFdKSxcblxuICB0cmFuc2Zvcm06ICgwLCBfdHJhbnNmb3JtZXJzLmZsb3cpKCgwLCBfdHJhbnNmb3JtZXJzLnRyYW5zZm9ybUNoaWxkVmFsdWVzKSgoX3RyYW5zZm9ybUNoaWxkVmFsdWVzMiA9IHt9LCBfdHJhbnNmb3JtQ2hpbGRWYWx1ZXMyW0hVRV0gPSBudW1iZXIudHJhbnNmb3JtLCBfdHJhbnNmb3JtQ2hpbGRWYWx1ZXMyW1NBVFVSQVRJT05dID0gcGVyY2VudC50cmFuc2Zvcm0sIF90cmFuc2Zvcm1DaGlsZFZhbHVlczJbTElHSFRORVNTXSA9IHBlcmNlbnQudHJhbnNmb3JtLCBfdHJhbnNmb3JtQ2hpbGRWYWx1ZXMyW0FMUEhBXSA9IGFscGhhLnRyYW5zZm9ybSwgX3RyYW5zZm9ybUNoaWxkVmFsdWVzMikpLCBoc2xhVGVtcGxhdGUpXG59O1xuXG52YXIgY29sb3IgPSBleHBvcnRzLmNvbG9yID0ge1xuICBjaGlsZFR5cGVzOiBfZXh0ZW5kcyh7fSwgaHNsYS5jaGlsZFR5cGVzLCByZ2JhLmNoaWxkVHlwZXMpLFxuXG4gIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiByZ2JhLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2xhLnRlc3QodmFsdWUpO1xuICB9LFxuXG4gIHRyYW5zZm9ybTogZnVuY3Rpb24gKHYpIHtcbiAgICBpZiAodi5oYXNPd25Qcm9wZXJ0eSgncmVkJykpIHtcbiAgICAgIHJldHVybiByZ2JhLnRyYW5zZm9ybSh2KTtcbiAgICB9IGVsc2UgaWYgKHYuaGFzT3duUHJvcGVydHkoJ2h1ZScpKSB7XG4gICAgICByZXR1cm4gaHNsYS50cmFuc2Zvcm0odik7XG4gICAgfVxuICAgIHJldHVybiB2O1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRtRnNkV1V0ZEhsd1pYTXVhbk1pWFN3aWJtRnRaWE1pT2xzaVVrVkVJaXdpUjFKRlJVNGlMQ0pDVEZWRklpd2lRVXhRU0VFaUxDSklWVVVpTENKVFFWUlZVa0ZVU1U5T0lpd2lURWxIU0ZST1JWTlRJaXdpY21kaVlWUmxiWEJzWVhSbElpd2ljbVZrSWl3aVozSmxaVzRpTENKaWJIVmxJaXdpWVd4d2FHRWlMQ0pvYzJ4aFZHVnRjR3hoZEdVaUxDSm9kV1VpTENKellYUjFjbUYwYVc5dUlpd2liR2xuYUhSdVpYTnpJaXdpYm5WdFltVnlJaXdpZEdWemRDSXNJbkJoY25ObElpd2ljR0Z5YzJWR2JHOWhkQ0lzSW5SeVlXNXpabTl5YlNJc0ltUmxaM0psWlhNaUxDSndaWEpqWlc1MElpd2ljSGdpTENKelkyRnNaU0lzSW1SbFptRjFiSFFpTENKeVoySlZibWwwSWl3aVRXRjBhQ0lzSW5KdmRXNWtJaXdpY21kaVlTSXNJbWhsZUNJc0luWWlMQ0p5SWl3aVp5SXNJbUlpTENKc1pXNW5kR2dpTENKemRXSnpkSElpTENKd1lYSnpaVWx1ZENJc0ltaHpiR0VpTENKamIyeHZjaUlzSW1Ob2FXeGtWSGx3WlhNaUxDSjJZV3gxWlNJc0ltaGhjMDkzYmxCeWIzQmxjblI1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08ydFJRVUZCT3pzN096czdPenM3T3pzN096czdRVUZoUVRzN1FVRkRRVHM3UVVGRFFUczdRVUZGUVR0QlFVTkJMRWxCUVUxQkxFMUJRVTBzUzBGQldqdEJRVU5CTEVsQlFVMURMRkZCUVZFc1QwRkJaRHRCUVVOQkxFbEJRVTFETEU5QlFVOHNUVUZCWWp0QlFVTkJMRWxCUVUxRExGRkJRVkVzVDBGQlpEdEJRVU5CTEVsQlFVMURMRTFCUVUwc1MwRkJXanRCUVVOQkxFbEJRVTFETEdGQlFXRXNXVUZCYmtJN1FVRkRRU3hKUVVGTlF5eFpRVUZaTEZkQlFXeENPenRCUVVWQk8wRkJRMEVzU1VGQlRVTXNaVUZCWlR0QlFVRkJMRTFCUVVkRExFZEJRVWdzVVVGQlIwRXNSMEZCU0R0QlFVRkJMRTFCUVZGRExFdEJRVklzVVVGQlVVRXNTMEZCVWp0QlFVRkJMRTFCUVdWRExFbEJRV1lzVVVGQlpVRXNTVUZCWmp0QlFVRkJMSGRDUVVGeFFrTXNTMEZCY2tJN1FVRkJRU3hOUVVGeFFrRXNTMEZCY2tJc09FSkJRVFpDTEVOQlFUZENPMEZCUVVFc2JVSkJRMWhJTEVkQlJGY3NWVUZEU0VNc1MwRkVSeXhWUVVOUFF5eEpRVVJRTEZWQlEyZENReXhMUVVSb1FqdEJRVUZCTEVOQlFYSkNPenRCUVVkQkxFbEJRVTFETEdWQlFXVTdRVUZCUVN4TlFVRkhReXhIUVVGSUxGTkJRVWRCTEVkQlFVZzdRVUZCUVN4TlFVRlJReXhWUVVGU0xGTkJRVkZCTEZWQlFWSTdRVUZCUVN4TlFVRnZRa01zVTBGQmNFSXNVMEZCYjBKQkxGTkJRWEJDTzBGQlFVRXNNRUpCUVN0Q1NpeExRVUV2UWp0QlFVRkJMRTFCUVN0Q1FTeExRVUV2UWl3clFrRkJkVU1zUTBGQmRrTTdRVUZCUVN4dFFrRkRXRVVzUjBGRVZ5eFZRVU5JUXl4VlFVUkhMRlZCUTFsRExGTkJSRm9zVlVGRE1FSktMRXRCUkRGQ08wRkJRVUVzUTBGQmNrSTdPMEZCUjA4c1NVRkJUVXNzTUVKQlFWTTdRVUZEY0VKRExIRkNRVVJ2UWp0QlFVVndRa01zVTBGQlQwTTdRVUZHWVN4RFFVRm1PenRCUVV0UU8wRkJRMDhzU1VGQlRWSXNjVU5CUTFKTExFMUJSRkU3UVVGRldFa3NZVUZCVnl4NVFrRkJUU3hEUVVGT0xFVkJRVk1zUTBGQlZEdEJRVVpCTEVWQlFVNDdPMEZCUzBFc1NVRkJUVU1zTkVKQlFWVXNNa0pCUVdVc1MwRkJaaXhEUVVGb1FqdEJRVU5CTEVsQlFVMURMRFJDUVVGVkxESkNRVUZsTEVkQlFXWXNRMEZCYUVJN1FVRkRRU3hKUVVGTlF5eHJRa0ZCU3l3eVFrRkJaU3hKUVVGbUxFTkJRVmc3TzBGQlJVRXNTVUZCVFVNc2NVTkJRMUpTTEUxQlJGRTdRVUZGV0ZNc1YwRkJVenRCUVVaRkxFVkJRVTQ3TzBGQlMwRXNTVUZCVFVNc2VVTkJRMUpXTEUxQlJGRTdRVUZGV0Vrc1lVRkJWenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTd3lRa0ZCVFN4RFFVRk9MRVZCUVZNc1IwRkJWQ3hEUVZoVExFVkJXVlJQTEV0QlFVdERMRXRCV2trN1FVRkdRU3hGUVVGT096dEJRV3RDUVN4SlFVRk5ReXh6UWtGQlR6dEJRVU5zUWxvc1VVRkJUU3g1UWtGQllTeExRVUZpTEVOQlJGazdPMEZCUjJ4Q1F5eFRRVUZQTERaQ1FVRnBRaXhEUVVGRGJFSXNSMEZCUkN4RlFVRk5ReXhMUVVGT0xFVkJRV0ZETEVsQlFXSXNSVUZCYlVKRExFdEJRVzVDTEVOQlFXcENMRU5CU0ZjN08wRkJTMnhDYVVJc1lVRkJWeXgzUWtGRFZDd3lSa0ZEUjNCQ0xFZEJSRWdzU1VGRFV6QkNMRkZCUVZGT0xGTkJSR3BDTEhkQ1FVVkhia0lzUzBGR1NDeEpRVVZYZVVJc1VVRkJVVTRzVTBGR2JrSXNkMEpCUjBkc1FpeEpRVWhJTEVsQlIxVjNRaXhSUVVGUlRpeFRRVWhzUWl4M1FrRkpSMnBDTEV0QlNrZ3NTVUZKVjFFc1RVRkJUVk1zVTBGS2FrSXNlVUpCUkZNc1JVRlBWR0lzV1VGUVV6dEJRVXhQTEVOQlFXSTdPMEZCWjBKQkxFbEJRVTExUWl4cFEwRkRVa1FzU1VGRVVUczdRVUZIV0Zvc1VVRkJUU3g1UWtGQllTeEhRVUZpTEVOQlNFczdPMEZCUzFoRExGTkJRVThzVlVGQlEyRXNRMEZCUkN4RlFVRlBPMEZCUVVFN08wRkJRMW9zVVVGQlNVTXNWVUZCU2p0QlFVRkJMRkZCUVU5RExGVkJRVkE3UVVGQlFTeFJRVUZWUXl4VlFVRldPenRCUVVWQk8wRkJRMEVzVVVGQlNVZ3NSVUZCUlVrc1RVRkJSaXhIUVVGWExFTkJRV1lzUlVGQmEwSTdRVUZEYUVKSUxGVkJRVWxFTEVWQlFVVkxMRTFCUVVZc1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQldpeERRVUZLTzBGQlEwRklMRlZCUVVsR0xFVkJRVVZMTEUxQlFVWXNRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhEUVVGS08wRkJRMEZHTEZWQlFVbElMRVZCUVVWTExFMUJRVVlzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCV2l4RFFVRktPenRCUVVWR08wRkJRME1zUzBGT1JDeE5RVTFQTzBGQlEweEtMRlZCUVVsRUxFVkJRVVZMTEUxQlFVWXNRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhEUVVGS08wRkJRMEZJTEZWQlFVbEdMRVZCUVVWTExFMUJRVVlzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCV2l4RFFVRktPMEZCUTBGR0xGVkJRVWxJTEVWQlFVVkxMRTFCUVVZc1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQldpeERRVUZLTzBGQlEwRktMRmRCUVV0QkxFTkJRVXc3UVVGRFFVTXNWMEZCUzBFc1EwRkJURHRCUVVOQlF5eFhRVUZMUVN4RFFVRk1PMEZCUTBRN08wRkJSVVFzTmtKQlEwZHNReXhIUVVSSUxFbEJRMU54UXl4VFFVRlRUQ3hEUVVGVUxFVkJRVmtzUlVGQldpeERRVVJVTEZGQlJVY3ZRaXhMUVVaSUxFbEJSVmR2UXl4VFFVRlRTaXhEUVVGVUxFVkJRVmtzUlVGQldpeERRVVpZTEZGQlIwY3ZRaXhKUVVoSUxFbEJSMVZ0UXl4VFFVRlRTQ3hEUVVGVUxFVkJRVmtzUlVGQldpeERRVWhXTEZGQlNVY3ZRaXhMUVVwSUxFbEJTVmNzUTBGS1dEdEJRVTFFTzBGQk9VSlZMRVZCUVU0N08wRkJhVU5CTEVsQlFVMXRReXh6UWtGQlR6dEJRVU5zUW5KQ0xGRkJRVTBzZVVKQlFXRXNTMEZCWWl4RFFVUlpPenRCUVVkc1FrTXNVMEZCVHl3MlFrRkJhVUlzUTBGQlEyUXNSMEZCUkN4RlFVRk5ReXhWUVVGT0xFVkJRV3RDUXl4VFFVRnNRaXhGUVVFMlFrZ3NTMEZCTjBJc1EwRkJha0lzUTBGSVZ6czdRVUZMYkVKcFFpeGhRVUZYTEhkQ1FVTlVMRFpHUVVOSGFFSXNSMEZFU0N4SlFVTlRXU3hQUVVGUFNTeFRRVVJvUWl4NVFrRkZSMllzVlVGR1NDeEpRVVZuUW1sQ0xGRkJRVkZHTEZOQlJuaENMSGxDUVVkSFpDeFRRVWhJTEVsQlIyVm5RaXhSUVVGUlJpeFRRVWgyUWl4NVFrRkpSMnBDTEV0QlNrZ3NTVUZKVjFFc1RVRkJUVk1zVTBGS2FrSXNNRUpCUkZNc1JVRlBWRklzV1VGUVV6dEJRVXhQTEVOQlFXSTdPMEZCWjBKQkxFbEJRVTB5UWl4M1FrRkJVVHRCUVVOdVFrTXNNa0pCUTB0R0xFdEJRVXRGTEZWQlJGWXNSVUZGUzFnc1MwRkJTMWNzVlVGR1ZpeERRVVJ0UWpzN1FVRk5ia0oyUWl4UlFVRk5MRlZCUVVOM1FpeExRVUZFTzBGQlFVRXNWMEZCVjFvc1MwRkJTMW9zU1VGQlRDeERRVUZWZDBJc1MwRkJWaXhMUVVGdlFsZ3NTVUZCU1dJc1NVRkJTaXhEUVVGVGQwSXNTMEZCVkN4RFFVRndRaXhKUVVGMVEwZ3NTMEZCUzNKQ0xFbEJRVXdzUTBGQlZYZENMRXRCUVZZc1EwRkJiRVE3UVVGQlFTeEhRVTVoT3p0QlFWRnVRbkpDTEdGQlFWY3NWVUZCUTFjc1EwRkJSQ3hGUVVGUE8wRkJRMmhDTEZGQlFVbEJMRVZCUVVWWExHTkJRVVlzUTBGQmFVSXNTMEZCYWtJc1EwRkJTaXhGUVVFMlFqdEJRVU16UWl4aFFVRlBZaXhMUVVGTFZDeFRRVUZNTEVOQlFXVlhMRU5CUVdZc1EwRkJVRHRCUVVORUxFdEJSa1FzVFVGRlR5eEpRVUZKUVN4RlFVRkZWeXhqUVVGR0xFTkJRV2xDTEV0QlFXcENMRU5CUVVvc1JVRkJOa0k3UVVGRGJFTXNZVUZCVDBvc1MwRkJTMnhDTEZOQlFVd3NRMEZCWlZjc1EwRkJaaXhEUVVGUU8wRkJRMFE3UVVGRFJDeFhRVUZQUVN4RFFVRlFPMEZCUTBRN1FVRm1hMElzUTBGQlpDSXNJbVpwYkdVaU9pSjJZV3gxWlMxMGVYQmxjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2x4dUlDb2dWbUZzZFdVZ2RIbHdaWE5jYmlBcVhHNGdLaUJoYkhCb1lWeHVJQ29nWkdWbmNtVmxjMXh1SUNvZ2FHVjRYRzRnS2lCb2MyeGhYRzRnS2lCd1pYSmpaVzUwWEc0Z0tpQndlRnh1SUNvZ2NtZGlWVzVwZEZ4dUlDb2djbWRpWEc0Z0tpQnpZMkZzWlZ4dUlDb3ZYRzVwYlhCdmNuUWdleUJqYkdGdGNDd2dabXh2ZHl3Z2RISmhibk5tYjNKdFEyaHBiR1JXWVd4MVpYTWdmU0JtY205dElDY3VMaTlwYm1NdmRISmhibk5tYjNKdFpYSnpKenRjYm1sdGNHOXlkQ0I3SUdOeVpXRjBaVlZ1YVhSVWVYQmxMQ0JwYzBacGNuTjBRMmhoY25Nc0lITndiR2wwUTI5c2IzSldZV3gxWlhNZ2ZTQm1jbTl0SUNjdUwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENCN0lHbHpUblZ0SUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1THk4Z1UzUnlhVzVuSUhCeWIzQmxjblJwWlhOY2JtTnZibk4wSUZKRlJDQTlJQ2R5WldRbk8xeHVZMjl1YzNRZ1IxSkZSVTRnUFNBblozSmxaVzRuTzF4dVkyOXVjM1FnUWt4VlJTQTlJQ2RpYkhWbEp6dGNibU52Ym5OMElFRk1VRWhCSUQwZ0oyRnNjR2hoSnp0Y2JtTnZibk4wSUVoVlJTQTlJQ2RvZFdVbk8xeHVZMjl1YzNRZ1UwRlVWVkpCVkVsUFRpQTlJQ2R6WVhSMWNtRjBhVzl1Snp0Y2JtTnZibk4wSUV4SlIwaFVUa1ZUVXlBOUlDZHNhV2RvZEc1bGMzTW5PMXh1WEc0dkx5QlVaVzF3YkdGMFpYTmNibU52Ym5OMElISm5ZbUZVWlcxd2JHRjBaU0E5SUNoN0lISmxaQ3dnWjNKbFpXNHNJR0pzZFdVc0lHRnNjR2hoSUQwZ01TQjlLU0E5UGlCY2JpQWdZSEpuWW1Fb0pIdHlaV1I5TENBa2UyZHlaV1Z1ZlN3Z0pIdGliSFZsZlN3Z0pIdGhiSEJvWVgwcFlEdGNibHh1WTI5dWMzUWdhSE5zWVZSbGJYQnNZWFJsSUQwZ0tIc2dhSFZsTENCellYUjFjbUYwYVc5dUxDQnNhV2RvZEc1bGMzTXNJR0ZzY0doaElEMGdNU0I5S1NBOVBpQmNiaUFnWUdoemJHRW9KSHRvZFdWOUxDQWtlM05oZEhWeVlYUnBiMjU5TENBa2UyeHBaMmgwYm1WemMzMHNJQ1I3WVd4d2FHRjlLV0E3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J1ZFcxaVpYSWdQU0I3WEc0Z0lIUmxjM1E2SUdselRuVnRMRnh1SUNCd1lYSnpaVG9nY0dGeWMyVkdiRzloZEZ4dWZUdGNibHh1THk4Z1ZtRnNkV1VnZEhsd1pYTmNibVY0Y0c5eWRDQmpiMjV6ZENCaGJIQm9ZU0E5SUh0Y2JpQWdMaTR1Ym5WdFltVnlMRnh1SUNCMGNtRnVjMlp2Y20wNklHTnNZVzF3S0RBc0lERXBYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdWbmNtVmxjeUE5SUdOeVpXRjBaVlZ1YVhSVWVYQmxLQ2RrWldjbktUdGNibVY0Y0c5eWRDQmpiMjV6ZENCd1pYSmpaVzUwSUQwZ1kzSmxZWFJsVlc1cGRGUjVjR1VvSnlVbktUdGNibVY0Y0c5eWRDQmpiMjV6ZENCd2VDQTlJR055WldGMFpWVnVhWFJVZVhCbEtDZHdlQ2NwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzJOaGJHVWdQU0I3WEc0Z0lDNHVMbTUxYldKbGNpeGNiaUFnWkdWbVlYVnNkRG9nTVZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElISm5ZbFZ1YVhRZ1BTQjdYRzRnSUM0dUxtNTFiV0psY2l4Y2JpQWdkSEpoYm5ObWIzSnRPaUJtYkc5M0tGeHVJQ0FnSUM4dmFIUjBjRG92TDJOdlpHVndaVzR1YVc4dmIzTjFZbXhoYTJVdlpuVnNiQzk0UjFaV1lVNHZYRzRnSUNBZ0x5OGdLSFlzSUhaaGJIVmxMQ0JoWTNScGIyNHBJRDArSUh0Y2JpQWdJQ0F2THlBZ0lHbG1JQ2hoWTNScGIyNHBJSHRjYmlBZ0lDQXZMeUFnSUNBZ1kyOXVjM1FnWm5KdmJVTnZiRzl5SUQwZ1lXTjBhVzl1TG1aeWIyMGdLaUJoWTNScGIyNHVabkp2YlR0Y2JpQWdJQ0F2THlBZ0lDQWdZMjl1YzNRZ2RHOURiMnh2Y2lBOUlHRmpkR2x2Ymk1MGJ5QXFJR0ZqZEdsdmJpNTBienRjYmlBZ0lDQXZMeUFnSUNBZ2NtVjBkWEp1SUUxaGRHZ3VjM0Z5ZENoaFkzUnBiMjR1Y0hKdlozSmxjM01nS2lBb2RHOURiMnh2Y2lBdElHWnliMjFEYjJ4dmNpa2dLeUJtY205dFEyOXNiM0lwTzF4dUlDQWdJQzh2SUNBZ2ZWeHVYRzRnSUNBZ0x5OGdJQ0J5WlhSMWNtNGdkanRjYmlBZ0lDQXZMeUI5TEZ4dUlDQWdJR05zWVcxd0tEQXNJREkxTlNrc1hHNGdJQ0FnVFdGMGFDNXliM1Z1WkZ4dUlDQXBYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21kaVlTQTlJSHRjYmlBZ2RHVnpkRG9nYVhOR2FYSnpkRU5vWVhKektDZHlaMkluS1N4Y2JseHVJQ0J3WVhKelpUb2djM0JzYVhSRGIyeHZjbFpoYkhWbGN5aGJVa1ZFTENCSFVrVkZUaXdnUWt4VlJTd2dRVXhRU0VGZEtTeGNibHh1SUNCMGNtRnVjMlp2Y20wNklHWnNiM2NvWEc0Z0lDQWdkSEpoYm5ObWIzSnRRMmhwYkdSV1lXeDFaWE1vZTF4dUlDQWdJQ0FnVzFKRlJGMDZJSEpuWWxWdWFYUXVkSEpoYm5ObWIzSnRMRnh1SUNBZ0lDQWdXMGRTUlVWT1hUb2djbWRpVlc1cGRDNTBjbUZ1YzJadmNtMHNYRzRnSUNBZ0lDQmJRa3hWUlYwNklISm5ZbFZ1YVhRdWRISmhibk5tYjNKdExGeHVJQ0FnSUNBZ1cwRk1VRWhCWFRvZ1lXeHdhR0V1ZEhKaGJuTm1iM0p0WEc0Z0lDQWdmU2tzWEc0Z0lDQWdjbWRpWVZSbGJYQnNZWFJsWEc0Z0lDbGNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JvWlhnZ1BTQjdYRzRnSUM0dUxuSm5ZbUVzWEc1Y2JpQWdkR1Z6ZERvZ2FYTkdhWEp6ZEVOb1lYSnpLQ2NqSnlrc1hHNWNiaUFnY0dGeWMyVTZJQ2gyS1NBOVBpQjdYRzRnSUNBZ2JHVjBJSElzSUdjc0lHSTdYRzVjYmlBZ0lDQXZMeUJKWmlCM1pTQm9ZWFpsSURZZ1kyaGhjbUZqZEdWeWN5d2dhV1VnSTBaR01EQXdNRnh1SUNBZ0lHbG1JQ2gyTG14bGJtZDBhQ0ErSURRcElIdGNiaUFnSUNBZ0lISWdQU0IyTG5OMVluTjBjaWd4TENBeUtUdGNiaUFnSUNBZ0lHY2dQU0IyTG5OMVluTjBjaWd6TENBeUtUdGNiaUFnSUNBZ0lHSWdQU0IyTG5OMVluTjBjaWcxTENBeUtUdGNibHh1SUNBZ0lDOHZJRTl5SUhkbElHaGhkbVVnTXlCamFHRnlZV04wWlhKekxDQnBaU0FqUmpBd1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSElnUFNCMkxuTjFZbk4wY2lneExDQXhLVHRjYmlBZ0lDQWdJR2NnUFNCMkxuTjFZbk4wY2lneUxDQXhLVHRjYmlBZ0lDQWdJR0lnUFNCMkxuTjFZbk4wY2lnekxDQXhLVHRjYmlBZ0lDQWdJSElnS3owZ2NqdGNiaUFnSUNBZ0lHY2dLejBnWnp0Y2JpQWdJQ0FnSUdJZ0t6MGdZanRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ1cxSkZSRjA2SUhCaGNuTmxTVzUwS0hJc0lERTJLU3hjYmlBZ0lDQWdJRnRIVWtWRlRsMDZJSEJoY25ObFNXNTBLR2NzSURFMktTeGNiaUFnSUNBZ0lGdENURlZGWFRvZ2NHRnljMlZKYm5Rb1lpd2dNVFlwTEZ4dUlDQWdJQ0FnVzBGTVVFaEJYVG9nTVZ4dUlDQWdJSDA3WEc0Z0lIMWNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JvYzJ4aElEMGdlMXh1SUNCMFpYTjBPaUJwYzBacGNuTjBRMmhoY25Nb0oyaHpiQ2NwTEZ4dVhHNGdJSEJoY25ObE9pQnpjR3hwZEVOdmJHOXlWbUZzZFdWektGdElWVVVzSUZOQlZGVlNRVlJKVDA0c0lFeEpSMGhVVGtWVFV5d2dRVXhRU0VGZEtTeGNibHh1SUNCMGNtRnVjMlp2Y20wNklHWnNiM2NvWEc0Z0lDQWdkSEpoYm5ObWIzSnRRMmhwYkdSV1lXeDFaWE1vZTF4dUlDQWdJQ0FnVzBoVlJWMDZJRzUxYldKbGNpNTBjbUZ1YzJadmNtMHNYRzRnSUNBZ0lDQmJVMEZVVlZKQlZFbFBUbDA2SUhCbGNtTmxiblF1ZEhKaGJuTm1iM0p0TEZ4dUlDQWdJQ0FnVzB4SlIwaFVUa1ZUVTEwNklIQmxjbU5sYm5RdWRISmhibk5tYjNKdExGeHVJQ0FnSUNBZ1cwRk1VRWhCWFRvZ1lXeHdhR0V1ZEhKaGJuTm1iM0p0WEc0Z0lDQWdmU2tzWEc0Z0lDQWdhSE5zWVZSbGJYQnNZWFJsWEc0Z0lDbGNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYjJ4dmNpQTlJSHRjYmlBZ1kyaHBiR1JVZVhCbGN6b2dlMXh1SUNBZ0lDNHVMbWh6YkdFdVkyaHBiR1JVZVhCbGN5eGNiaUFnSUNBdUxpNXlaMkpoTG1Ob2FXeGtWSGx3WlhOY2JpQWdmU3hjYmx4dUlDQjBaWE4wT2lBb2RtRnNkV1VwSUQwK0lISm5ZbUV1ZEdWemRDaDJZV3gxWlNrZ2ZId2dhR1Y0TG5SbGMzUW9kbUZzZFdVcElIeDhJR2h6YkdFdWRHVnpkQ2gyWVd4MVpTa3NYRzVjYmlBZ2RISmhibk5tYjNKdE9pQW9kaWtnUFQ0Z2UxeHVJQ0FnSUdsbUlDaDJMbWhoYzA5M2JsQnliM0JsY25SNUtDZHlaV1FuS1NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhKblltRXVkSEpoYm5ObWIzSnRLSFlwTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvZGk1b1lYTlBkMjVRY205d1pYSjBlU2duYUhWbEp5a3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQm9jMnhoTG5SeVlXNXpabTl5YlNoMktUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSFk3WEc0Z0lIMWNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy92YWx1ZS10eXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL2luYy90cmFuc2Zvcm1lcnMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgY2xhbXBQcm9ncmVzcyA9ICgwLCBfdHJhbnNmb3JtZXJzLmNsYW1wKSgwLCAxKTtcblxuZnVuY3Rpb24gY2FsY1ZhbHVlQXRUaW1lKGZyb20sIHRvLCBkdXJhdGlvbiwgZWxhcHNlZCwgZWFzZSkge1xuICB2YXIgcHJvZ3Jlc3NBdFRpbWUgPSBlYXNlKGNsYW1wUHJvZ3Jlc3MoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSgwLCBkdXJhdGlvbiwgZWxhcHNlZCkpKTtcbiAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZnJvbSwgdG8sIHByb2dyZXNzQXRUaW1lKTtcbn1cblxudmFyIFR3ZWVuQmxlbmQgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVHdlZW5CbGVuZCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVHdlZW5CbGVuZCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdlZW5CbGVuZCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFR3ZWVuQmxlbmQucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBmcm9tID0gX3Byb3BzLmZyb20sXG4gICAgICAgIHRvID0gX3Byb3BzLnRvLFxuICAgICAgICBkdXJhdGlvbiA9IF9wcm9wcy5kdXJhdGlvbixcbiAgICAgICAgYWNjdXJhY3kgPSBfcHJvcHMuYWNjdXJhY3k7XG5cbiAgICB2YXIgYSA9IGZyb207XG4gICAgdmFyIGIgPSB0bztcbiAgICB2YXIgYUR1cmF0aW9uID0gYS5nZXREdXJhdGlvbigpO1xuICAgIHZhciBiRHVyYXRpb24gPSBiLmdldER1cmF0aW9uKCk7XG5cbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb24gfHwgTWF0aC5taW4oYUR1cmF0aW9uIC0gYS5nZXRFbGFwc2VkKCksIGJEdXJhdGlvbik7XG5cbiAgICB2YXIgYUVhc2UgPSBhLmdldFByb3AoJ2Vhc2UnKTtcbiAgICB2YXIgYkVhc2UgPSBiLmdldFByb3AoJ2Vhc2UnKTtcbiAgICB2YXIgYUZyb20gPSBhLmdldFByb3AoJ2Zyb20nKTtcbiAgICB2YXIgYkZyb20gPSBiLmdldFByb3AoJ2Zyb20nKTtcbiAgICB2YXIgYVRvID0gYS5nZXRQcm9wKCd0bycpO1xuICAgIHZhciBiVG8gPSBiLmdldFByb3AoJ3RvJyk7XG4gICAgdmFyIGJWYWx1ZUF0QmxlbmRDb21wbGV0ZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIHRoaXMuZHVyYXRpb24sIGJFYXNlKTtcbiAgICB2YXIgYlN0YXJ0c0hpZ2hlclRoYW5BID0gYkZyb20gPiBhLmdldCgpO1xuXG4gICAgdGhpcy5ibGVuZFBvaW50cyA9IFtbMCwgYS5nZXQoKV0sIFt0aGlzLmR1cmF0aW9uLCBiVmFsdWVBdEJsZW5kQ29tcGxldGVdXTtcblxuICAgIC8vIEZpbmQgdHdlZW4gaW50ZXJzZWN0aW9uXG4gICAgdmFyIHRpbWVzdGVwID0gdGhpcy5kdXJhdGlvbiAvIGFjY3VyYWN5O1xuXG4gICAgdmFyIGZvdW5kUDEgPSBmYWxzZTtcbiAgICB2YXIgZm91bmRQMiA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY2N1cmFjeTsgaSsrKSB7XG4gICAgICB2YXIgdG90YWxUaW1lID0gaSAqIHRpbWVzdGVwO1xuXG4gICAgICB2YXIgYVZhbHVlQXRUaW1lID0gY2FsY1ZhbHVlQXRUaW1lKGFGcm9tLCBhVG8sIGFEdXJhdGlvbiwgYS5lbGFwc2VkICsgdG90YWxUaW1lLCBhRWFzZSk7XG4gICAgICB2YXIgYlZhbHVlQXRUaW1lID0gY2FsY1ZhbHVlQXRUaW1lKGJGcm9tLCBiVG8sIGJEdXJhdGlvbiwgYi5lbGFwc2VkICsgdG90YWxUaW1lLCBiRWFzZSk7XG5cbiAgICAgIHZhciBoYXNJbnRlcnNlY3RlZCA9IGJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPCBiVmFsdWVBdFRpbWUgfHwgIWJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPiBiVmFsdWVBdFRpbWU7XG5cbiAgICAgIGlmICghZm91bmRQMSAmJiBoYXNJbnRlcnNlY3RlZCkge1xuICAgICAgICB0aGlzLmJsZW5kUG9pbnRzLnNwbGljZSgwLCAxLCBbdG90YWxUaW1lLCBiVmFsdWVBdFRpbWVdKTtcbiAgICAgICAgZm91bmRQMSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE8gZ28gYmFjayB0aHJvdWdoIGFuZCBjb21tZW50XG4gICAgICB2YXIgaGFzSW50ZXJzZWN0ZWRCID0gYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA8IGJWYWx1ZUF0VGltZSB8fCAhYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA+IGJWYWx1ZUF0VGltZTtcblxuICAgICAgaWYgKGZvdW5kUDEgJiYgaGFzSW50ZXJzZWN0ZWRCKSB7XG4gICAgICAgIHRoaXMuYmxlbmRQb2ludHNbMl0gPSBbdG90YWxUaW1lLCBiVmFsdWVBdFRpbWVdO1xuICAgICAgICBmb3VuZFAyID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvdW5kUDIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRvLnN0YXJ0KCk7XG4gIH07XG5cbiAgVHdlZW5CbGVuZC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZnJvbSA9IF9wcm9wczIuZnJvbSxcbiAgICAgICAgdG8gPSBfcHJvcHMyLnRvO1xuXG4gICAgdmFyIGEgPSBmcm9tO1xuICAgIHZhciBiID0gdG87XG5cbiAgICB2YXIgcHJvZ3Jlc3MgPSBjbGFtcFByb2dyZXNzKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGhpcy5ibGVuZFBvaW50c1swXVswXSwgdGhpcy5ibGVuZFBvaW50c1syXVswXSwgYS5nZXRFbGFwc2VkKCkpKTtcbiAgICBpZiAocHJvZ3Jlc3MgPj0gMSkge1xuICAgICAgcmV0dXJuIGIuZ2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhUCA9ICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykodGhpcy5ibGVuZFBvaW50c1swXVsxXSwgdGhpcy5ibGVuZFBvaW50c1sxXVsxXSwgcHJvZ3Jlc3MpO1xuICAgICAgdmFyIGJQID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKSh0aGlzLmJsZW5kUG9pbnRzWzFdWzFdLCB0aGlzLmJsZW5kUG9pbnRzWzJdWzFdLCBwcm9ncmVzcyk7XG4gICAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShhUCwgYlAsIHByb2dyZXNzKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuQmxlbmQ7XG59KF8yLmRlZmF1bHQpO1xuXG5Ud2VlbkJsZW5kLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWNjdXJhY3k6IDYwXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBUd2VlbkJsZW5kKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwySnNaVzVrTFhSM1pXVnVjeTVxY3lKZExDSnVZVzFsY3lJNld5SmpiR0Z0Y0ZCeWIyZHlaWE56SWl3aVkyRnNZMVpoYkhWbFFYUlVhVzFsSWl3aVpuSnZiU0lzSW5Sdklpd2laSFZ5WVhScGIyNGlMQ0psYkdGd2MyVmtJaXdpWldGelpTSXNJbkJ5YjJkeVpYTnpRWFJVYVcxbElpd2lWSGRsWlc1Q2JHVnVaQ0lzSW05dVUzUmhjblFpTENKd2NtOXdjeUlzSW1GalkzVnlZV041SWl3aVlTSXNJbUlpTENKaFJIVnlZWFJwYjI0aUxDSm5aWFJFZFhKaGRHbHZiaUlzSW1KRWRYSmhkR2x2YmlJc0lrMWhkR2dpTENKdGFXNGlMQ0puWlhSRmJHRndjMlZrSWl3aVlVVmhjMlVpTENKblpYUlFjbTl3SWl3aVlrVmhjMlVpTENKaFJuSnZiU0lzSW1KR2NtOXRJaXdpWVZSdklpd2lZbFJ2SWl3aVlsWmhiSFZsUVhSQ2JHVnVaRU52YlhCc1pYUmxJaXdpWWxOMFlYSjBjMGhwWjJobGNsUm9ZVzVCSWl3aVoyVjBJaXdpWW14bGJtUlFiMmx1ZEhNaUxDSjBhVzFsYzNSbGNDSXNJbVp2ZFc1a1VERWlMQ0ptYjNWdVpGQXlJaXdpYVNJc0luUnZkR0ZzVkdsdFpTSXNJbUZXWVd4MVpVRjBWR2x0WlNJc0ltSldZV3gxWlVGMFZHbHRaU0lzSW1oaGMwbHVkR1Z5YzJWamRHVmtJaXdpYzNCc2FXTmxJaXdpYUdGelNXNTBaWEp6WldOMFpXUkNJaXdpYzNSaGNuUWlMQ0oxY0dSaGRHVWlMQ0p3Y205bmNtVnpjeUlzSW1GUUlpd2lZbEFpTENKa1pXWmhkV3gwVUhKdmNITWlYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096dEJRVU5CT3p0QlFVTkJPenM3T3pzN096czdPMEZCUlVFc1NVRkJUVUVzWjBKQlFXZENMSGxDUVVGTkxFTkJRVTRzUlVGQlV5eERRVUZVTEVOQlFYUkNPenRCUVVWQkxGTkJRVk5ETEdWQlFWUXNRMEZCZVVKRExFbEJRWHBDTEVWQlFTdENReXhGUVVFdlFpeEZRVUZ0UTBNc1VVRkJia01zUlVGQk5rTkRMRTlCUVRkRExFVkJRWE5FUXl4SlFVRjBSQ3hGUVVFMFJEdEJRVU14UkN4TlFVRk5ReXhwUWtGQmFVSkVMRXRCUVV0T0xHTkJRV01zWjBOQlFYRkNMRU5CUVhKQ0xFVkJRWGRDU1N4UlFVRjRRaXhGUVVGclEwTXNUMEZCYkVNc1EwRkJaQ3hEUVVGTUxFTkJRWFpDTzBGQlEwRXNVMEZCVHl4blEwRkJjVUpJTEVsQlFYSkNMRVZCUVRKQ1F5eEZRVUV6UWl4RlFVRXJRa2tzWTBGQkwwSXNRMEZCVUR0QlFVTkVPenRKUVVWTFF5eFZPenM3T3pzN096czdkVUpCUzBwRExFOHNjMEpCUVZVN1FVRkJRU3hwUWtGRGFVTXNTMEZCUzBNc1MwRkVkRU03UVVGQlFTeFJRVU5CVWl4SlFVUkJMRlZCUTBGQkxFbEJSRUU3UVVGQlFTeFJRVU5OUXl4RlFVUk9MRlZCUTAxQkxFVkJSRTQ3UVVGQlFTeFJRVU5WUXl4UlFVUldMRlZCUTFWQkxGRkJSRlk3UVVGQlFTeFJRVU52UWs4c1VVRkVjRUlzVlVGRGIwSkJMRkZCUkhCQ096dEJRVVZTTEZGQlFVMURMRWxCUVVsV0xFbEJRVlk3UVVGRFFTeFJRVUZOVnl4SlFVRkpWaXhGUVVGV08wRkJRMEVzVVVGQlRWY3NXVUZCV1VZc1JVRkJSVWNzVjBGQlJpeEZRVUZzUWp0QlFVTkJMRkZCUVUxRExGbEJRVmxJTEVWQlFVVkZMRmRCUVVZc1JVRkJiRUk3TzBGQlJVRXNVMEZCUzFnc1VVRkJUQ3hIUVVGblFrRXNXVUZCV1dFc1MwRkJTME1zUjBGQlRDeERRVU14UWtvc1dVRkJXVVlzUlVGQlJVOHNWVUZCUml4RlFVUmpMRVZCUlRGQ1NDeFRRVVl3UWl4RFFVRTFRanM3UVVGTFFTeFJRVUZOU1N4UlFVRlJVaXhGUVVGRlV5eFBRVUZHTEVOQlFWVXNUVUZCVml4RFFVRmtPMEZCUTBFc1VVRkJUVU1zVVVGQlVWUXNSVUZCUlZFc1QwRkJSaXhEUVVGVkxFMUJRVllzUTBGQlpEdEJRVU5CTEZGQlFVMUZMRkZCUVZGWUxFVkJRVVZUTEU5QlFVWXNRMEZCVlN4TlFVRldMRU5CUVdRN1FVRkRRU3hSUVVGTlJ5eFJRVUZSV0N4RlFVRkZVU3hQUVVGR0xFTkJRVlVzVFVGQlZpeERRVUZrTzBGQlEwRXNVVUZCVFVrc1RVRkJUV0lzUlVGQlJWTXNUMEZCUml4RFFVRlZMRWxCUVZZc1EwRkJXanRCUVVOQkxGRkJRVTFMTEUxQlFVMWlMRVZCUVVWUkxFOUJRVVlzUTBGQlZTeEpRVUZXTEVOQlFWbzdRVUZEUVN4UlFVRk5UU3gzUWtGQmQwSXhRaXhuUWtGQlowSjFRaXhMUVVGb1FpeEZRVUYxUWtVc1IwRkJka0lzUlVGQk5FSldMRk5CUVRWQ0xFVkJRWFZETEV0QlFVdGFMRkZCUVRWRExFVkJRWE5FYTBJc1MwRkJkRVFzUTBGQk9VSTdRVUZEUVN4UlFVRk5UU3h4UWtGQmNVSktMRkZCUVZGYUxFVkJRVVZwUWl4SFFVRkdMRVZCUVc1RE96dEJRVVZCTEZOQlFVdERMRmRCUVV3c1IwRkJiVUlzUTBGRGFrSXNRMEZCUXl4RFFVRkVMRVZCUVVsc1FpeEZRVUZGYVVJc1IwRkJSaXhGUVVGS0xFTkJSR2xDTEVWQlJXcENMRU5CUVVNc1MwRkJTM3BDTEZGQlFVNHNSVUZCWjBKMVFpeHhRa0ZCYUVJc1EwRkdhVUlzUTBGQmJrSTdPMEZCUzBFN1FVRkRRU3hSUVVGTlNTeFhRVUZYTEV0QlFVc3pRaXhSUVVGTUxFZEJRV2RDVHl4UlFVRnFRenM3UVVGRlFTeFJRVUZKY1VJc1ZVRkJWU3hMUVVGa08wRkJRMEVzVVVGQlNVTXNWVUZCVlN4TFFVRmtPenRCUVVWQkxGTkJRVXNzU1VGQlNVTXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKZGtJc1VVRkJjRUlzUlVGQk9FSjFRaXhIUVVFNVFpeEZRVUZ0UXp0QlFVTnFReXhWUVVGTlF5eFpRVUZaUkN4SlFVRkpTQ3hSUVVGMFFqczdRVUZGUVN4VlFVRk5TeXhsUVVGbGJrTXNaMEpCUVdkQ2MwSXNTMEZCYUVJc1JVRkJkVUpGTEVkQlFYWkNMRVZCUVRSQ1dDeFRRVUUxUWl4RlFVRjFRMFlzUlVGQlJWQXNUMEZCUml4SFFVRlpPRUlzVTBGQmJrUXNSVUZCT0VSbUxFdEJRVGxFTEVOQlFYSkNPMEZCUTBFc1ZVRkJUV2xDTEdWQlFXVndReXhuUWtGQlowSjFRaXhMUVVGb1FpeEZRVUYxUWtVc1IwRkJka0lzUlVGQk5FSldMRk5CUVRWQ0xFVkJRWFZEU0N4RlFVRkZVaXhQUVVGR0xFZEJRVms0UWl4VFFVRnVSQ3hGUVVFNFJHSXNTMEZCT1VRc1EwRkJja0k3TzBGQlJVRXNWVUZCVFdkQ0xHbENRVU5JVml4elFrRkJjMEpSTEdWQlFXVkRMRmxCUVhSRExFbEJRME1zUTBGQlExUXNhMEpCUVVRc1NVRkJkVUpSTEdWQlFXVkRMRmxCUm5wRE96dEJRVXRCTEZWQlFVa3NRMEZCUTB3c1QwRkJSQ3hKUVVGWlRTeGpRVUZvUWl4RlFVRm5RenRCUVVNNVFpeGhRVUZMVWl4WFFVRk1MRU5CUVdsQ1V5eE5RVUZxUWl4RFFVRjNRaXhEUVVGNFFpeEZRVUV5UWl4RFFVRXpRaXhGUVVFNFFpeERRVUZEU2l4VFFVRkVMRVZCUVZsRkxGbEJRVm9zUTBGQk9VSTdRVUZEUVV3c2EwSkJRVlVzU1VGQlZqdEJRVU5FT3p0QlFVVkVPMEZCUTBFc1ZVRkJUVkVzYTBKQlEwaGFMSE5DUVVGelFsRXNaVUZCWlVNc1dVRkJkRU1zU1VGRFF5eERRVUZEVkN4clFrRkJSQ3hKUVVGMVFsRXNaVUZCWlVNc1dVRkdla003TzBGQlMwRXNWVUZCU1V3c1YwRkJWMUVzWlVGQlppeEZRVUZuUXp0QlFVTTVRaXhoUVVGTFZpeFhRVUZNTEVOQlFXbENMRU5CUVdwQ0xFbEJRWE5DTEVOQlFVTkxMRk5CUVVRc1JVRkJXVVVzV1VGQldpeERRVUYwUWp0QlFVTkJTaXhyUWtGQlZTeEpRVUZXTzBGQlEwUTdPMEZCUlVRc1ZVRkJTVUVzVDBGQlNpeEZRVUZoTzBGQlExZzdRVUZEUkR0QlFVTkdPenRCUVVWRU9VSXNUMEZCUjNORExFdEJRVWc3UVVGRFJDeEhPenQxUWtGRlJFTXNUU3h4UWtGQlV6dEJRVUZCTEd0Q1FVTmpMRXRCUVV0b1F5eExRVVJ1UWp0QlFVRkJMRkZCUTBOU0xFbEJSRVFzVjBGRFEwRXNTVUZFUkR0QlFVRkJMRkZCUTA5RExFVkJSRkFzVjBGRFQwRXNSVUZFVURzN1FVRkZVQ3hSUVVGTlV5eEpRVUZKVml4SlFVRldPMEZCUTBFc1VVRkJUVmNzU1VGQlNWWXNSVUZCVmpzN1FVRkZRU3hSUVVGTmQwTXNWMEZCVnpORExHTkJRV01zWjBOQlFYRkNMRXRCUVVzNFFpeFhRVUZNTEVOQlFXbENMRU5CUVdwQ0xFVkJRVzlDTEVOQlFYQkNMRU5CUVhKQ0xFVkJRVFpETEV0QlFVdEJMRmRCUVV3c1EwRkJhVUlzUTBGQmFrSXNSVUZCYjBJc1EwRkJjRUlzUTBGQk4wTXNSVUZCY1VWc1FpeEZRVUZGVHl4VlFVRkdMRVZCUVhKRkxFTkJRV1FzUTBGQmFrSTdRVUZEUVN4UlFVRkpkMElzV1VGQldTeERRVUZvUWl4RlFVRnRRanRCUVVOcVFpeGhRVUZQT1VJc1JVRkJSV2RDTEVkQlFVWXNSVUZCVUR0QlFVTkVMRXRCUmtRc1RVRkZUenRCUVVOTUxGVkJRVTFsTEV0QlFVc3NaME5CUVhGQ0xFdEJRVXRrTEZkQlFVd3NRMEZCYVVJc1EwRkJha0lzUlVGQmIwSXNRMEZCY0VJc1EwRkJja0lzUlVGQk5rTXNTMEZCUzBFc1YwRkJUQ3hEUVVGcFFpeERRVUZxUWl4RlFVRnZRaXhEUVVGd1FpeERRVUUzUXl4RlFVRnhSV0VzVVVGQmNrVXNRMEZCV0R0QlFVTkJMRlZCUVUxRkxFdEJRVXNzWjBOQlFYRkNMRXRCUVV0bUxGZEJRVXdzUTBGQmFVSXNRMEZCYWtJc1JVRkJiMElzUTBGQmNFSXNRMEZCY2tJc1JVRkJOa01zUzBGQlMwRXNWMEZCVEN4RFFVRnBRaXhEUVVGcVFpeEZRVUZ2UWl4RFFVRndRaXhEUVVFM1F5eEZRVUZ4UldFc1VVRkJja1VzUTBGQldEdEJRVU5CTEdGQlFVOHNaME5CUVhGQ1F5eEZRVUZ5UWl4RlFVRjVRa01zUlVGQmVrSXNSVUZCTmtKR0xGRkJRVGRDTEVOQlFWQTdRVUZEUkR0QlFVTkdMRWM3T3pzN08wRkJja1pIYmtNc1ZTeERRVU5IYzBNc1dTeEhRVUZsTzBGQlEzQkNia01zV1VGQlZUdEJRVVJWTEVNN08ydENRWFZHVkN4VlFVRkRSQ3hMUVVGRU8wRkJRVUVzVTBGQlZ5eEpRVUZKUml4VlFVRktMRU5CUVdWRkxFdEJRV1lzUTBGQldEdEJRVUZCTEVNaUxDSm1hV3hsSWpvaVlteGxibVF0ZEhkbFpXNXpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNXBiWEJ2Y25RZ2V5Qm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU3dnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVwYlhCdmNuUWdleUJqYkdGdGNDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MGNtRnVjMlp2Y20xbGNuTW5PMXh1WEc1amIyNXpkQ0JqYkdGdGNGQnliMmR5WlhOeklEMGdZMnhoYlhBb01Dd2dNU2s3WEc1Y2JtWjFibU4wYVc5dUlHTmhiR05XWVd4MVpVRjBWR2x0WlNobWNtOXRMQ0IwYnl3Z1pIVnlZWFJwYjI0c0lHVnNZWEJ6WldRc0lHVmhjMlVwSUh0Y2JpQWdZMjl1YzNRZ2NISnZaM0psYzNOQmRGUnBiV1VnUFNCbFlYTmxLR05zWVcxd1VISnZaM0psYzNNb1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9NQ3dnWkhWeVlYUnBiMjRzSUdWc1lYQnpaV1FwS1NrN1hHNGdJSEpsZEhWeWJpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWhtY205dExDQjBieXdnY0hKdlozSmxjM05CZEZScGJXVXBPMXh1ZlZ4dVhHNWpiR0Z6Y3lCVWQyVmxia0pzWlc1a0lHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0JoWTJOMWNtRmplVG9nTmpCY2JpQWdmVHRjYmx4dUlDQnZibE4wWVhKMEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1puSnZiU3dnZEc4c0lHUjFjbUYwYVc5dUxDQmhZMk4xY21GamVTQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0JqYjI1emRDQmhJRDBnWm5KdmJUdGNiaUFnSUNCamIyNXpkQ0JpSUQwZ2RHODdYRzRnSUNBZ1kyOXVjM1FnWVVSMWNtRjBhVzl1SUQwZ1lTNW5aWFJFZFhKaGRHbHZiaWdwTzF4dUlDQWdJR052Ym5OMElHSkVkWEpoZEdsdmJpQTlJR0l1WjJWMFJIVnlZWFJwYjI0b0tUdGNibHh1SUNBZ0lIUm9hWE11WkhWeVlYUnBiMjRnUFNCa2RYSmhkR2x2YmlCOGZDQk5ZWFJvTG0xcGJpaGNiaUFnSUNBZ0lHRkVkWEpoZEdsdmJpQXRJR0V1WjJWMFJXeGhjSE5sWkNncExGeHVJQ0FnSUNBZ1lrUjFjbUYwYVc5dVhHNGdJQ0FnS1R0Y2JseHVJQ0FnSUdOdmJuTjBJR0ZGWVhObElEMGdZUzVuWlhSUWNtOXdLQ2RsWVhObEp5azdYRzRnSUNBZ1kyOXVjM1FnWWtWaGMyVWdQU0JpTG1kbGRGQnliM0FvSjJWaGMyVW5LVHRjYmlBZ0lDQmpiMjV6ZENCaFJuSnZiU0E5SUdFdVoyVjBVSEp2Y0NnblpuSnZiU2NwTzF4dUlDQWdJR052Ym5OMElHSkdjbTl0SUQwZ1lpNW5aWFJRY205d0tDZG1jbTl0SnlrN1hHNGdJQ0FnWTI5dWMzUWdZVlJ2SUQwZ1lTNW5aWFJRY205d0tDZDBieWNwTzF4dUlDQWdJR052Ym5OMElHSlVieUE5SUdJdVoyVjBVSEp2Y0NnbmRHOG5LVHRjYmlBZ0lDQmpiMjV6ZENCaVZtRnNkV1ZCZEVKc1pXNWtRMjl0Y0d4bGRHVWdQU0JqWVd4alZtRnNkV1ZCZEZScGJXVW9Za1p5YjIwc0lHSlVieXdnWWtSMWNtRjBhVzl1TENCMGFHbHpMbVIxY21GMGFXOXVMQ0JpUldGelpTazdYRzRnSUNBZ1kyOXVjM1FnWWxOMFlYSjBjMGhwWjJobGNsUm9ZVzVCSUQwZ1lrWnliMjBnUGlCaExtZGxkQ2dwTzF4dVhHNGdJQ0FnZEdocGN5NWliR1Z1WkZCdmFXNTBjeUE5SUZ0Y2JpQWdJQ0FnSUZzd0xDQmhMbWRsZENncFhTeGNiaUFnSUNBZ0lGdDBhR2x6TG1SMWNtRjBhVzl1TENCaVZtRnNkV1ZCZEVKc1pXNWtRMjl0Y0d4bGRHVmRYRzRnSUNBZ1hUdGNibHh1SUNBZ0lDOHZJRVpwYm1RZ2RIZGxaVzRnYVc1MFpYSnpaV04wYVc5dVhHNGdJQ0FnWTI5dWMzUWdkR2x0WlhOMFpYQWdQU0IwYUdsekxtUjFjbUYwYVc5dUlDOGdZV05qZFhKaFkzazdYRzVjYmlBZ0lDQnNaWFFnWm05MWJtUlFNU0E5SUdaaGJITmxPMXh1SUNBZ0lHeGxkQ0JtYjNWdVpGQXlJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJR0ZqWTNWeVlXTjVPeUJwS3lzcElIdGNiaUFnSUNBZ0lHTnZibk4wSUhSdmRHRnNWR2x0WlNBOUlHa2dLaUIwYVcxbGMzUmxjRHRjYmx4dUlDQWdJQ0FnWTI5dWMzUWdZVlpoYkhWbFFYUlVhVzFsSUQwZ1kyRnNZMVpoYkhWbFFYUlVhVzFsS0dGR2NtOXRMQ0JoVkc4c0lHRkVkWEpoZEdsdmJpd2dZUzVsYkdGd2MyVmtJQ3NnZEc5MFlXeFVhVzFsTENCaFJXRnpaU2s3WEc0Z0lDQWdJQ0JqYjI1emRDQmlWbUZzZFdWQmRGUnBiV1VnUFNCallXeGpWbUZzZFdWQmRGUnBiV1VvWWtaeWIyMHNJR0pVYnl3Z1lrUjFjbUYwYVc5dUxDQmlMbVZzWVhCelpXUWdLeUIwYjNSaGJGUnBiV1VzSUdKRllYTmxLVHRjYmx4dUlDQWdJQ0FnWTI5dWMzUWdhR0Z6U1c1MFpYSnpaV04wWldRZ1BTQW9YRzRnSUNBZ0lDQWdJQ2hpVTNSaGNuUnpTR2xuYUdWeVZHaGhia0VnSmlZZ1lWWmhiSFZsUVhSVWFXMWxJRHdnWWxaaGJIVmxRWFJVYVcxbEtTQjhmRnh1SUNBZ0lDQWdJQ0FvSVdKVGRHRnlkSE5JYVdkb1pYSlVhR0Z1UVNBbUppQmhWbUZzZFdWQmRGUnBiV1VnUGlCaVZtRnNkV1ZCZEZScGJXVXBYRzRnSUNBZ0lDQXBPMXh1WEc0Z0lDQWdJQ0JwWmlBb0lXWnZkVzVrVURFZ0ppWWdhR0Z6U1c1MFpYSnpaV04wWldRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWJHVnVaRkJ2YVc1MGN5NXpjR3hwWTJVb01Dd2dNU3dnVzNSdmRHRnNWR2x0WlN3Z1lsWmhiSFZsUVhSVWFXMWxYU2s3WEc0Z0lDQWdJQ0FnSUdadmRXNWtVREVnUFNCMGNuVmxPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0F2THlCVVQwUlBJR2R2SUdKaFkyc2dkR2h5YjNWbmFDQmhibVFnWTI5dGJXVnVkRnh1SUNBZ0lDQWdZMjl1YzNRZ2FHRnpTVzUwWlhKelpXTjBaV1JDSUQwZ0tGeHVJQ0FnSUNBZ0lDQW9ZbE4wWVhKMGMwaHBaMmhsY2xSb1lXNUJJQ1ltSUdGV1lXeDFaVUYwVkdsdFpTQThJR0pXWVd4MVpVRjBWR2x0WlNrZ2ZIeGNiaUFnSUNBZ0lDQWdLQ0ZpVTNSaGNuUnpTR2xuYUdWeVZHaGhia0VnSmlZZ1lWWmhiSFZsUVhSVWFXMWxJRDRnWWxaaGJIVmxRWFJVYVcxbEtWeHVJQ0FnSUNBZ0tUdGNibHh1SUNBZ0lDQWdhV1lnS0dadmRXNWtVREVnSmlZZ2FHRnpTVzUwWlhKelpXTjBaV1JDS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW14bGJtUlFiMmx1ZEhOYk1sMGdQU0JiZEc5MFlXeFVhVzFsTENCaVZtRnNkV1ZCZEZScGJXVmRPMXh1SUNBZ0lDQWdJQ0JtYjNWdVpGQXlJRDBnZEhKMVpUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lnS0dadmRXNWtVRElwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSFJ2TG5OMFlYSjBLQ2s3WEc0Z0lIMWNibHh1SUNCMWNHUmhkR1VvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJtY205dExDQjBieUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCamIyNXpkQ0JoSUQwZ1puSnZiVHRjYmlBZ0lDQmpiMjV6ZENCaUlEMGdkRzg3WEc1Y2JpQWdJQ0JqYjI1emRDQndjbTluY21WemN5QTlJR05zWVcxd1VISnZaM0psYzNNb1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9kR2hwY3k1aWJHVnVaRkJ2YVc1MGMxc3dYVnN3WFN3Z2RHaHBjeTVpYkdWdVpGQnZhVzUwYzFzeVhWc3dYU3dnWVM1blpYUkZiR0Z3YzJWa0tDa3BLVHRjYmlBZ0lDQnBaaUFvY0hKdlozSmxjM01nUGowZ01Ta2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHSXVaMlYwS0NrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR052Ym5OMElHRlFJRDBnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb2RHaHBjeTVpYkdWdVpGQnZhVzUwYzFzd1hWc3hYU3dnZEdocGN5NWliR1Z1WkZCdmFXNTBjMXN4WFZzeFhTd2djSEp2WjNKbGMzTXBPMXh1SUNBZ0lDQWdZMjl1YzNRZ1lsQWdQU0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3loMGFHbHpMbUpzWlc1a1VHOXBiblJ6V3pGZFd6RmRMQ0IwYUdsekxtSnNaVzVrVUc5cGJuUnpXekpkV3pGZExDQndjbTluY21WemN5azdYRzRnSUNBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9ZVkFzSUdKUUxDQndjbTluY21WemN5azdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaHdjbTl3Y3lrZ1BUNGdibVYzSUZSM1pXVnVRbXhsYm1Rb2NISnZjSE1wTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvYmxlbmQtdHdlZW5zLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENoYWluID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENoYWluLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBDaGFpbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaGFpbik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnBsYXlOZXh0ID0gX3RoaXMucGxheU5leHQuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgQ2hhaW4ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHRoaXMucHJvcHMuaSA9IDA7XG4gICAgdGhpcy5wbGF5Q3VycmVudCgpO1xuICB9O1xuXG4gIENoYWluLnByb3RvdHlwZS5wbGF5TmV4dCA9IGZ1bmN0aW9uIHBsYXlOZXh0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBpID0gX3Byb3BzLmksXG4gICAgICAgIG9yZGVyID0gX3Byb3BzLm9yZGVyO1xuXG4gICAgaWYgKGkgPCBvcmRlci5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnByb3BzLmkrKztcbiAgICAgIHRoaXMucGxheUN1cnJlbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUucGxheUN1cnJlbnQgPSBmdW5jdGlvbiBwbGF5Q3VycmVudCgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGkgPSBfcHJvcHMyLmksXG4gICAgICAgIG9yZGVyID0gX3Byb3BzMi5vcmRlcjtcblxuICAgIG9yZGVyW2ldLnByb3BzLl9vbkNvbXBsZXRlID0gdGhpcy5wbGF5TmV4dDtcbiAgICBvcmRlcltpXS5zdGFydCgpO1xuICB9O1xuXG4gIENoYWluLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICBpID0gX3Byb3BzMy5pLFxuICAgICAgICBvcmRlciA9IF9wcm9wczMub3JkZXI7XG5cbiAgICBvcmRlcltpXS5zdG9wKCk7XG4gIH07XG5cbiAgcmV0dXJuIENoYWluO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9yZGVyLCBvbkNvbXBsZXRlKSB7XG4gIHJldHVybiBuZXcgQ2hhaW4oeyBvcmRlcjogb3JkZXIsIG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk5vWVdsdUxtcHpJbDBzSW01aGJXVnpJanBiSWtOb1lXbHVJaXdpY0hKdmNITWlMQ0p3YkdGNVRtVjRkQ0lzSW1KcGJtUWlMQ0p2YmxOMFlYSjBJaXdpYVNJc0luQnNZWGxEZFhKeVpXNTBJaXdpYjNKa1pYSWlMQ0pzWlc1bmRHZ2lMQ0pqYjIxd2JHVjBaU0lzSWw5dmJrTnZiWEJzWlhSbElpd2ljM1JoY25RaUxDSnZibE4wYjNBaUxDSnpkRzl3SWl3aWIyNURiMjF3YkdWMFpTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN096czdPenM3T3pzN1NVRkZUVUVzU3pzN08wRkJRMG9zYVVKQlFWbERMRXRCUVZvc1JVRkJiVUk3UVVGQlFUczdRVUZCUVN4cFJFRkRha0lzYlVKQlFVMUJMRXRCUVU0c1EwRkVhVUk3TzBGQlJXcENMRlZCUVV0RExGRkJRVXdzUjBGQlowSXNUVUZCUzBFc1VVRkJUQ3hEUVVGalF5eEpRVUZrTEU5QlFXaENPMEZCUm1sQ08wRkJSMnhDT3p0clFrRkZSRU1zVHl4elFrRkJWVHRCUVVOU0xGTkJRVXRJTEV0QlFVd3NRMEZCVjBrc1EwRkJXQ3hIUVVGbExFTkJRV1k3UVVGRFFTeFRRVUZMUXl4WFFVRk1PMEZCUTBRc1J6czdhMEpCUlVSS0xGRXNkVUpCUVZjN1FVRkJRU3hwUWtGRFdTeExRVUZMUkN4TFFVUnFRanRCUVVGQkxGRkJRMFJKTEVOQlJFTXNWVUZEUkVFc1EwRkVRenRCUVVGQkxGRkJRMFZGTEV0QlJFWXNWVUZEUlVFc1MwRkVSanM3UVVGRlZDeFJRVUZKUml4SlFVRkpSU3hOUVVGTlF5eE5RVUZPTEVkQlFXVXNRMEZCZGtJc1JVRkJNRUk3UVVGRGVFSXNWMEZCUzFBc1MwRkJUQ3hEUVVGWFNTeERRVUZZTzBGQlEwRXNWMEZCUzBNc1YwRkJURHRCUVVORUxFdEJTRVFzVFVGSFR6dEJRVU5NTEZkQlFVdEhMRkZCUVV3N1FVRkRSRHRCUVVOR0xFYzdPMnRDUVVWRVNDeFhMREJDUVVGak8wRkJRVUVzYTBKQlExTXNTMEZCUzB3c1MwRkVaRHRCUVVGQkxGRkJRMHBKTEVOQlJFa3NWMEZEU2tFc1EwRkVTVHRCUVVGQkxGRkJRMFJGTEV0QlJFTXNWMEZEUkVFc1MwRkVRenM3UVVGRldrRXNWVUZCVFVZc1EwRkJUaXhGUVVGVFNpeExRVUZVTEVOQlFXVlRMRmRCUVdZc1IwRkJOa0lzUzBGQlMxSXNVVUZCYkVNN1FVRkRRVXNzVlVGQlRVWXNRMEZCVGl4RlFVRlRUU3hMUVVGVU8wRkJRMFFzUnpzN2EwSkJSVVJETEUwc2NVSkJRVk03UVVGQlFTeHJRa0ZEWXl4TFFVRkxXQ3hMUVVSdVFqdEJRVUZCTEZGQlEwTkpMRU5CUkVRc1YwRkRRMEVzUTBGRVJEdEJRVUZCTEZGQlEwbEZMRXRCUkVvc1YwRkRTVUVzUzBGRVNqczdRVUZGVUVFc1ZVRkJUVVlzUTBGQlRpeEZRVUZUVVN4SlFVRlVPMEZCUTBRc1J6czdPenM3YTBKQlIxa3NWVUZCUTA0c1MwRkJSQ3hGUVVGUlR5eFZRVUZTTzBGQlFVRXNVMEZCZFVJc1NVRkJTV1FzUzBGQlNpeERRVUZWTEVWQlFVVlBMRmxCUVVZc1JVRkJVMDhzYzBKQlFWUXNSVUZCVml4RFFVRjJRanRCUVVGQkxFTWlMQ0ptYVd4bElqb2lZMmhoYVc0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYmx4dVkyeGhjM01nUTJoaGFXNGdaWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeWtnZTF4dUlDQWdJSE4xY0dWeUtIQnliM0J6S1R0Y2JpQWdJQ0IwYUdsekxuQnNZWGxPWlhoMElEMGdkR2hwY3k1d2JHRjVUbVY0ZEM1aWFXNWtLSFJvYVhNcE8xeHVJQ0I5WEc1Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQjBhR2x6TG5CeWIzQnpMbWtnUFNBd08xeHVJQ0FnSUhSb2FYTXVjR3hoZVVOMWNuSmxiblFvS1R0Y2JpQWdmVnh1WEc0Z0lIQnNZWGxPWlhoMEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2FTd2diM0prWlhJZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdhV1lnS0drZ1BDQnZjbVJsY2k1c1pXNW5kR2dnTFNBeEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG5CeWIzQnpMbWtyS3p0Y2JpQWdJQ0FnSUhSb2FYTXVjR3hoZVVOMWNuSmxiblFvS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdkR2hwY3k1amIyMXdiR1YwWlNncE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lIQnNZWGxEZFhKeVpXNTBLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dhU3dnYjNKa1pYSWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnYjNKa1pYSmJhVjB1Y0hKdmNITXVYMjl1UTI5dGNHeGxkR1VnUFNCMGFHbHpMbkJzWVhsT1pYaDBPMXh1SUNBZ0lHOXlaR1Z5VzJsZExuTjBZWEowS0NrN1hHNGdJSDFjYmx4dUlDQnZibE4wYjNBb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCcExDQnZjbVJsY2lCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQnZjbVJsY2x0cFhTNXpkRzl3S0NrN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHOXlaR1Z5TENCdmJrTnZiWEJzWlhSbEtTQTlQaUJ1WlhjZ1EyaGhhVzRvZXlCdmNtUmxjaXdnYjI1RGIyMXdiR1YwWlNCOUtUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9jaGFpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENvbXBvc2l0ZUFjdGlvbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDb21wb3NpdGVBY3Rpb24sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENvbXBvc2l0ZUFjdGlvbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb3NpdGVBY3Rpb24pO1xuXG4gICAgdmFyIGFjdGlvbnMgPSBwcm9wcy5hY3Rpb25zLFxuICAgICAgICByZW1haW5pbmdQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWydhY3Rpb25zJ10pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHJlbWFpbmluZ1Byb3BzKSk7XG5cbiAgICBfdGhpcy5jdXJyZW50ID0ge307XG4gICAgX3RoaXMuYWN0aW9uS2V5cyA9IFtdO1xuICAgIF90aGlzLmFkZEFjdGlvbnMocHJvcHMuYWN0aW9ucyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5hZGRBY3Rpb25zID0gZnVuY3Rpb24gYWRkQWN0aW9ucyhhY3Rpb25zKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoX3RoaXMyLmFjdGlvbktleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICBfdGhpczIuYWN0aW9uS2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzMltrZXldID0gYWN0aW9uc1trZXldO1xuXG4gICAgICB2YXIgb25VcGRhdGUgPSBmdW5jdGlvbiAodiwgYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuY3VycmVudFtrZXldID0gYWN0aW9uLmdldCgpO1xuICAgICAgfTtcblxuICAgICAgLy8gSW1tZWRpYXRlbHkgdXBkYXRlIHdpdGggdGhlIGN1cnJlbnQgYWN0aW9uIHN0YXRlXG4gICAgICBvblVwZGF0ZShudWxsLCBfdGhpczJba2V5XSk7XG5cbiAgICAgIF90aGlzMltrZXldLnNldFByb3BzKHtcbiAgICAgICAgX29uU3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIubnVtQWN0aXZlQWN0aW9ucy0tO1xuICAgICAgICB9XG4gICAgICB9KS5hZGRMaXN0ZW5lcihvblVwZGF0ZSk7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGtleSBpbiBhY3Rpb25zKSB7XG4gICAgICBfbG9vcChrZXkpO1xuICAgIH1cbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gdGhpcy5hY3Rpb25LZXlzLmxlbmd0aDtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXMzW2tleV0uc3RhcnQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczRba2V5XS5zdG9wKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5nZXRWZWxvY2l0eSA9IGZ1bmN0aW9uIGdldFZlbG9jaXR5KCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIHZlbG9jaXR5ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHZlbG9jaXR5W2tleV0gPSBfdGhpczVba2V5XS5nZXRWZWxvY2l0eSgpO1xuICAgIH0pO1xuICAgIHJldHVybiB2ZWxvY2l0eTtcbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDA7XG4gIH07XG5cbiAgcmV0dXJuIENvbXBvc2l0ZUFjdGlvbjtcbn0oXzIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhY3Rpb25zLCBwcm9wcykge1xuICByZXR1cm4gbmV3IENvbXBvc2l0ZUFjdGlvbihfZXh0ZW5kcyh7XG4gICAgYWN0aW9uczogYWN0aW9uc1xuICB9LCBwcm9wcykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOdmJYQnZjMmwwWlM1cWN5SmRMQ0p1WVcxbGN5STZXeUpEYjIxd2IzTnBkR1ZCWTNScGIyNGlMQ0p3Y205d2N5SXNJbUZqZEdsdmJuTWlMQ0p5WlcxaGFXNXBibWRRY205d2N5SXNJbU4xY25KbGJuUWlMQ0poWTNScGIyNUxaWGx6SWl3aVlXUmtRV04wYVc5dWN5SXNJbXRsZVNJc0ltbHVaR1Y0VDJZaUxDSndkWE5vSWl3aWIyNVZjR1JoZEdVaUxDSjJJaXdpWVdOMGFXOXVJaXdpWjJWMElpd2ljMlYwVUhKdmNITWlMQ0pmYjI1VGRHOXdJaXdpYm5WdFFXTjBhWFpsUVdOMGFXOXVjeUlzSW1Ga1pFeHBjM1JsYm1WeUlpd2liMjVUZEdGeWRDSXNJbXhsYm1kMGFDSXNJbVp2Y2tWaFkyZ2lMQ0p6ZEdGeWRDSXNJbTl1VTNSdmNDSXNJbk4wYjNBaUxDSm5aWFJXWld4dlkybDBlU0lzSW5abGJHOWphWFI1SWl3aWFYTkJZM1JwYjI1RGIyMXdiR1YwWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3T3pzN096czdPenM3T3pzN08wbEJSVTFCTEdVN096dEJRVU5LTERKQ1FVRlpReXhMUVVGYUxFVkJRVzFDTzBGQlFVRTdPMEZCUVVFc1VVRkRWRU1zVDBGRVV5eEhRVU56UWtRc1MwRkVkRUlzUTBGRFZFTXNUMEZFVXp0QlFVRkJMRkZCUTBkRExHTkJSRWdzTkVKQlEzTkNSaXhMUVVSMFFqczdRVUZCUVN4cFJFRkZha0lzYlVKQlFVMUZMR05CUVU0c1EwRkdhVUk3TzBGQlIycENMRlZCUVV0RExFOUJRVXdzUjBGQlpTeEZRVUZtTzBGQlEwRXNWVUZCUzBNc1ZVRkJUQ3hIUVVGclFpeEZRVUZzUWp0QlFVTkJMRlZCUVV0RExGVkJRVXdzUTBGQlowSk1MRTFCUVUxRExFOUJRWFJDTzBGQlRHbENPMEZCVFd4Q096czBRa0ZGUkVrc1ZTeDFRa0ZCVjBvc1R5eEZRVUZUTzBGQlFVRTdPMEZCUVVFc01FSkJRMUJMTEVkQlJFODdRVUZGYUVJc1ZVRkJTU3hQUVVGTFJpeFZRVUZNTEVOQlFXZENSeXhQUVVGb1FpeERRVUYzUWtRc1IwRkJlRUlzVFVGQmFVTXNRMEZCUXl4RFFVRjBReXhGUVVGNVF6dEJRVU4yUXl4bFFVRkxSaXhWUVVGTUxFTkJRV2RDU1N4SlFVRm9RaXhEUVVGeFFrWXNSMEZCY2tJN1FVRkRSRHM3UVVGRlJDeGhRVUZMUVN4SFFVRk1MRWxCUVZsTUxGRkJRVkZMTEVkQlFWSXNRMEZCV2pzN1FVRkZRU3hWUVVGTlJ5eFhRVUZYTEZWQlFVTkRMRU5CUVVRc1JVRkJTVU1zVFVGQlNqdEJRVUZCTEdWQlFXVXNUMEZCUzFJc1QwRkJUQ3hEUVVGaFJ5eEhRVUZpTEVsQlFXOUNTeXhQUVVGUFF5eEhRVUZRTEVWQlFXNURPMEZCUVVFc1QwRkJha0k3TzBGQlJVRTdRVUZEUVVnc1pVRkJVeXhKUVVGVUxFVkJRV1VzVDBGQlMwZ3NSMEZCVEN4RFFVRm1PenRCUVVWQkxHRkJRVXRCTEVkQlFVd3NSVUZEUjA4c1VVRkVTQ3hEUVVOWk8wRkJRMUpETEdsQ1FVRlRPMEZCUVVFc2FVSkJRVTBzVDBGQlMwTXNaMEpCUVV3c1JVRkJUanRCUVVGQk8wRkJSRVFzVDBGRVdpeEZRVWxIUXl4WFFVcElMRU5CU1dWUUxGRkJTbVk3UVVGaVowSTdPMEZCUTJ4Q0xGTkJRVXNzU1VGQlRVZ3NSMEZCV0N4SlFVRnJRa3dzVDBGQmJFSXNSVUZCTWtJN1FVRkJRU3haUVVGb1Frc3NSMEZCWjBJN1FVRnBRakZDTzBGQlEwWXNSenM3TkVKQlJVUlhMRThzYzBKQlFWVTdRVUZCUVRzN1FVRkRVaXhUUVVGTFJpeG5Ra0ZCVEN4SFFVRjNRaXhMUVVGTFdDeFZRVUZNTEVOQlFXZENZeXhOUVVGNFF6dEJRVU5CTEZOQlFVdGtMRlZCUVV3c1EwRkJaMEpsTEU5QlFXaENMRU5CUVhkQ0xGVkJRVU5pTEVkQlFVUTdRVUZCUVN4aFFVRlRMRTlCUVV0QkxFZEJRVXdzUlVGQlZXTXNTMEZCVml4RlFVRlVPMEZCUVVFc1MwRkJlRUk3UVVGRFJDeEhPenMwUWtGRlJFTXNUU3h4UWtGQlV6dEJRVUZCT3p0QlFVTlFMRk5CUVV0cVFpeFZRVUZNTEVOQlFXZENaU3hQUVVGb1FpeERRVUYzUWl4VlFVRkRZaXhIUVVGRU8wRkJRVUVzWVVGQlV5eFBRVUZMUVN4SFFVRk1MRVZCUVZWblFpeEpRVUZXTEVWQlFWUTdRVUZCUVN4TFFVRjRRanRCUVVORUxFYzdPelJDUVVWRVF5eFhMREJDUVVGak8wRkJRVUU3TzBGQlExb3NVVUZCVFVNc1YwRkJWeXhGUVVGcVFqdEJRVU5CTEZOQlFVdHdRaXhWUVVGTUxFTkJRV2RDWlN4UFFVRm9RaXhEUVVGM1FpeFZRVUZEWWl4SFFVRkVPMEZCUVVFc1lVRkJVMnRDTEZOQlFWTnNRaXhIUVVGVUxFbEJRV2RDTEU5QlFVdEJMRWRCUVV3c1JVRkJWV2xDTEZkQlFWWXNSVUZCZWtJN1FVRkJRU3hMUVVGNFFqdEJRVU5CTEZkQlFVOURMRkZCUVZBN1FVRkRSQ3hIT3pzMFFrRkZSRU1zWjBJc0swSkJRVzFDTzBGQlEycENMRmRCUVZFc1MwRkJTMVlzWjBKQlFVd3NTMEZCTUVJc1EwRkJiRU03UVVGRFJDeEhPenM3T3p0clFrRkhXU3hWUVVGRFpDeFBRVUZFTEVWQlFWVkVMRXRCUVZZc1JVRkJiMEk3UVVGRGFrTXNVMEZCVHl4SlFVRkpSQ3hsUVVGS08wRkJRMHhGTzBGQlJFc3NTMEZGUmtRc1MwRkdSU3hGUVVGUU8wRkJTVVFzUXlJc0ltWnBiR1VpT2lKamIyMXdiM05wZEdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYmx4dVkyeGhjM01nUTI5dGNHOXphWFJsUVdOMGFXOXVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnWTI5dWMzUnlkV04wYjNJb2NISnZjSE1wSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR0ZqZEdsdmJuTXNJQzR1TG5KbGJXRnBibWx1WjFCeWIzQnpJSDBnUFNCd2NtOXdjenRjYmlBZ0lDQnpkWEJsY2loeVpXMWhhVzVwYm1kUWNtOXdjeWs3WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwSUQwZ2UzMDdYRzRnSUNBZ2RHaHBjeTVoWTNScGIyNUxaWGx6SUQwZ1cxMDdYRzRnSUNBZ2RHaHBjeTVoWkdSQlkzUnBiMjV6S0hCeWIzQnpMbUZqZEdsdmJuTXBPMXh1SUNCOVhHNWNiaUFnWVdSa1FXTjBhVzl1Y3loaFkzUnBiMjV6S1NCN1hHNGdJQ0FnWm05eUlDaGpiMjV6ZENCclpYa2dhVzRnWVdOMGFXOXVjeWtnZTF4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11WVdOMGFXOXVTMlY1Y3k1cGJtUmxlRTltS0d0bGVTa2dQVDA5SUMweEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXTjBhVzl1UzJWNWN5NXdkWE5vS0d0bGVTazdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSFJvYVhOYmEyVjVYU0E5SUdGamRHbHZibk5iYTJWNVhUdGNibHh1SUNBZ0lDQWdZMjl1YzNRZ2IyNVZjR1JoZEdVZ1BTQW9kaXdnWVdOMGFXOXVLU0E5UGlCMGFHbHpMbU4xY25KbGJuUmJhMlY1WFNBOUlHRmpkR2x2Ymk1blpYUW9LVHRjYmx4dUlDQWdJQ0FnTHk4Z1NXMXRaV1JwWVhSbGJIa2dkWEJrWVhSbElIZHBkR2dnZEdobElHTjFjbkpsYm5RZ1lXTjBhVzl1SUhOMFlYUmxYRzRnSUNBZ0lDQnZibFZ3WkdGMFpTaHVkV3hzTENCMGFHbHpXMnRsZVYwcE8xeHVYRzRnSUNBZ0lDQjBhR2x6VzJ0bGVWMWNiaUFnSUNBZ0lDQWdMbk5sZEZCeWIzQnpLSHRjYmlBZ0lDQWdJQ0FnSUNCZmIyNVRkRzl3T2lBb0tTQTlQaUIwYUdsekxtNTFiVUZqZEdsMlpVRmpkR2x2Ym5NdExWeHVJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0F1WVdSa1RHbHpkR1Z1WlhJb2IyNVZjR1JoZEdVcE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHOXVVM1JoY25Rb0tTQjdYRzRnSUNBZ2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpJRDBnZEdocGN5NWhZM1JwYjI1TFpYbHpMbXhsYm1kMGFEdGNiaUFnSUNCMGFHbHpMbUZqZEdsdmJrdGxlWE11Wm05eVJXRmphQ2dvYTJWNUtTQTlQaUIwYUdselcydGxlVjB1YzNSaGNuUW9LU2s3WEc0Z0lIMWNibHh1SUNCdmJsTjBiM0FvS1NCN1hHNGdJQ0FnZEdocGN5NWhZM1JwYjI1TFpYbHpMbVp2Y2tWaFkyZ29LR3RsZVNrZ1BUNGdkR2hwYzF0clpYbGRMbk4wYjNBb0tTazdYRzRnSUgxY2JseHVJQ0JuWlhSV1pXeHZZMmwwZVNncElIdGNiaUFnSUNCamIyNXpkQ0IyWld4dlkybDBlU0E5SUh0OU8xeHVJQ0FnSUhSb2FYTXVZV04wYVc5dVMyVjVjeTVtYjNKRllXTm9LQ2hyWlhrcElEMCtJSFpsYkc5amFYUjVXMnRsZVYwZ1BTQjBhR2x6VzJ0bGVWMHVaMlYwVm1Wc2IyTnBkSGtvS1NrN1hHNGdJQ0FnY21WMGRYSnVJSFpsYkc5amFYUjVPMXh1SUNCOVhHNWNiaUFnYVhOQlkzUnBiMjVEYjIxd2JHVjBaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdLSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lBOVBUMGdNQ2s3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dGamRHbHZibk1zSUhCeWIzQnpLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQnVaWGNnUTI5dGNHOXphWFJsUVdOMGFXOXVLSHRjYmlBZ0lDQmhZM1JwYjI1ekxGeHVJQ0FnSUM0dUxuQnliM0J6WEc0Z0lIMHBPMXh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxudmFyIF9lYXNpbmcgPSByZXF1aXJlKCcuLi9pbmMvZWFzaW5nJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENyb3NzRmFkZSA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDcm9zc0ZhZGUsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENyb3NzRmFkZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ3Jvc3NGYWRlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ3Jvc3NGYWRlLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb24sXG4gICAgICAgIGVhc2UgPSBfcHJvcHMuZWFzZSxcbiAgICAgICAgZmFkZXIgPSBfcHJvcHMuZmFkZXI7XG5cblxuICAgIHRoaXMuZmFkZXIgPSBmYWRlciB8fCAoMCwgX3R3ZWVuMi5kZWZhdWx0KSh7XG4gICAgICB0bzogMSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGVhc2U6IGVhc2VcbiAgICB9KS5zdGFydCgpO1xuICB9O1xuXG4gIENyb3NzRmFkZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZnJvbSA9IF9wcm9wczIuZnJvbSxcbiAgICAgICAgdG8gPSBfcHJvcHMyLnRvO1xuXG4gICAgdmFyIGJhbGFuY2UgPSB0aGlzLmZhZGVyLmdldCgpO1xuICAgIHZhciBsYXRlc3RGcm9tVmFsdWUgPSBmcm9tLmdldCgpO1xuICAgIHZhciBsYXRlc3RUb1ZhbHVlID0gdG8uZ2V0KCk7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykobGF0ZXN0RnJvbVZhbHVlLCBsYXRlc3RUb1ZhbHVlLCBiYWxhbmNlKTtcbiAgfTtcblxuICByZXR1cm4gQ3Jvc3NGYWRlO1xufShfMi5kZWZhdWx0KTtcblxuQ3Jvc3NGYWRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZWFzZTogX2Vhc2luZy5saW5lYXJcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IENyb3NzRmFkZShwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk55YjNOekxXWmhaR1V1YW5NaVhTd2libUZ0WlhNaU9sc2lRM0p2YzNOR1lXUmxJaXdpYjI1VGRHRnlkQ0lzSW5CeWIzQnpJaXdpWkhWeVlYUnBiMjRpTENKbFlYTmxJaXdpWm1Ga1pYSWlMQ0owYnlJc0luTjBZWEowSWl3aWRYQmtZWFJsSWl3aVpuSnZiU0lzSW1KaGJHRnVZMlVpTENKblpYUWlMQ0pzWVhSbGMzUkdjbTl0Vm1Gc2RXVWlMQ0pzWVhSbGMzUlViMVpoYkhWbElpd2laR1ZtWVhWc2RGQnliM0J6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVOQk96dEJRVU5CT3pzN096czdPenM3TzBsQlJVMUJMRk03T3pzN096czdPenR6UWtGTFNrTXNUeXh6UWtGQlZUdEJRVUZCTEdsQ1FVTXdRaXhMUVVGTFF5eExRVVF2UWp0QlFVRkJMRkZCUTBGRExGRkJSRUVzVlVGRFFVRXNVVUZFUVR0QlFVRkJMRkZCUTFWRExFbEJSRllzVlVGRFZVRXNTVUZFVmp0QlFVRkJMRkZCUTJkQ1F5eExRVVJvUWl4VlFVTm5Ra0VzUzBGRWFFSTdPenRCUVVkU0xGTkJRVXRCTEV0QlFVd3NSMEZCWVVFc1UwRkJVeXh4UWtGQlRUdEJRVU14UWtNc1ZVRkJTU3hEUVVSelFqdEJRVVV4UWtnc2QwSkJSakJDTzBGQlJ6RkNRenRCUVVnd1FpeExRVUZPTEVWQlNXNUNSeXhMUVVwdFFpeEZRVUYwUWp0QlFVdEVMRWM3TzNOQ1FVVkVReXhOTEhGQ1FVRlRPMEZCUVVFc2EwSkJRMk1zUzBGQlMwNHNTMEZFYmtJN1FVRkJRU3hSUVVORFR5eEpRVVJFTEZkQlEwTkJMRWxCUkVRN1FVRkJRU3hSUVVOUFNDeEZRVVJRTEZkQlEwOUJMRVZCUkZBN08wRkJSVkFzVVVGQlRVa3NWVUZCVlN4TFFVRkxUQ3hMUVVGTUxFTkJRVmROTEVkQlFWZ3NSVUZCYUVJN1FVRkRRU3hSUVVGTlF5eHJRa0ZCYTBKSUxFdEJRVXRGTEVkQlFVd3NSVUZCZUVJN1FVRkRRU3hSUVVGTlJTeG5Ra0ZCWjBKUUxFZEJRVWRMTEVkQlFVZ3NSVUZCZEVJN1FVRkRRU3hYUVVGUExHZERRVUZ4UWtNc1pVRkJja0lzUlVGQmMwTkRMR0ZCUVhSRExFVkJRWEZFU0N4UFFVRnlSQ3hEUVVGUU8wRkJRMFFzUnpzN096czdRVUZ5UWtkV0xGTXNRMEZEUjJNc1dTeEhRVUZsTzBGQlEzQkNWanRCUVVSdlFpeERPenRyUWtGMVFsUXNWVUZCUTBZc1MwRkJSRHRCUVVGQkxGTkJRVmNzU1VGQlNVWXNVMEZCU2l4RFFVRmpSU3hMUVVGa0xFTkJRVmc3UVVGQlFTeERJaXdpWm1sc1pTSTZJbU55YjNOekxXWmhaR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dkp6dGNibWx0Y0c5eWRDQjBkMlZsYmlCbWNtOXRJQ2N1TDNSM1pXVnVKenRjYm1sdGNHOXlkQ0I3SUd4cGJtVmhjaUI5SUdaeWIyMGdKeTR1TDJsdVl5OWxZWE5wYm1jbk8xeHVhVzF3YjNKMElIc2daMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01nZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNWNibU5zWVhOeklFTnliM056Um1Ga1pTQmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJSE4wWVhScFl5QmtaV1poZFd4MFVISnZjSE1nUFNCN1hHNGdJQ0FnWldGelpUb2diR2x1WldGeVhHNGdJSDFjYmx4dUlDQnZibE4wWVhKMEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1pIVnlZWFJwYjI0c0lHVmhjMlVzSUdaaFpHVnlJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2RHaHBjeTVtWVdSbGNpQTlJR1poWkdWeUlIeDhJSFIzWldWdUtIdGNiaUFnSUNBZ0lIUnZPaUF4TEZ4dUlDQWdJQ0FnWkhWeVlYUnBiMjRzWEc0Z0lDQWdJQ0JsWVhObFhHNGdJQ0FnZlNrdWMzUmhjblFvS1R0Y2JpQWdmVnh1WEc0Z0lIVndaR0YwWlNncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdaeWIyMHNJSFJ2SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHTnZibk4wSUdKaGJHRnVZMlVnUFNCMGFHbHpMbVpoWkdWeUxtZGxkQ2dwTzF4dUlDQWdJR052Ym5OMElHeGhkR1Z6ZEVaeWIyMVdZV3gxWlNBOUlHWnliMjB1WjJWMEtDazdYRzRnSUNBZ1kyOXVjM1FnYkdGMFpYTjBWRzlXWVd4MVpTQTlJSFJ2TG1kbGRDZ3BPMXh1SUNBZ0lISmxkSFZ5YmlCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aHNZWFJsYzNSR2NtOXRWbUZzZFdVc0lHeGhkR1Z6ZEZSdlZtRnNkV1VzSUdKaGJHRnVZMlVwTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNod2NtOXdjeWtnUFQ0Z2JtVjNJRU55YjNOelJtRmtaU2h3Y205d2N5azdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9jcm9zcy1mYWRlLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gIHJldHVybiAoMCwgX3R3ZWVuMi5kZWZhdWx0KSh7IGR1cmF0aW9uOiBkdXJhdGlvbiB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyUmxiR0Y1TG1weklsMHNJbTVoYldWeklqcGJJbVIxY21GMGFXOXVJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdPenRyUWtGRlpTeFZRVUZEUVN4UlFVRkVPMEZCUVVFc1UwRkJZeXh4UWtGQlRTeEZRVUZGUVN4clFrRkJSaXhGUVVGT0xFTkJRV1E3UVVGQlFTeERJaXdpWm1sc1pTSTZJbVJsYkdGNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhSM1pXVnVJR1p5YjIwZ0p5NHZkSGRsWlc0bk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9aSFZ5WVhScGIyNHBJRDArSUhSM1pXVnVLSHNnWkhWeVlYUnBiMjRnZlNrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2RlbGF5LmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBPZmZzZXQgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoT2Zmc2V0LCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBPZmZzZXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9mZnNldCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIE9mZnNldC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgaW5wdXQgPSB0aGlzLnByb3BzLmlucHV0O1xuXG4gICAgdGhpcy5pbnB1dE9yaWdpbiA9IGlucHV0LmdldCgpO1xuXG4gICAgdGhpcy5zY2hlZHVsZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKF90aGlzMi5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH07XG5cbiAgICBpbnB1dC5hZGRMaXN0ZW5lcih0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgfTtcblxuICBPZmZzZXQucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB2YXIgaW5wdXQgPSB0aGlzLnByb3BzLmlucHV0O1xuXG4gICAgaW5wdXQucmVtb3ZlTGlzdGVuZXIodGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gIH07XG5cbiAgT2Zmc2V0LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGlucHV0ID0gX3Byb3BzLmlucHV0LFxuICAgICAgICBmcm9tID0gX3Byb3BzLmZyb207XG5cbiAgICB2YXIgb2Zmc2V0ID0gaW5wdXQuZ2V0KCkgLSB0aGlzLmlucHV0T3JpZ2luO1xuICAgIHJldHVybiBmcm9tICsgb2Zmc2V0O1xuICB9O1xuXG4gIHJldHVybiBPZmZzZXQ7XG59KF8yLmRlZmF1bHQpO1xuXG5PZmZzZXQuZGVmYXVsdFByb3BzID0ge1xuICBmcm9tOiAwLFxuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBwcm9wcyA9IGFyZ3NbMF07XG5cbiAgICByZXR1cm4gbmV3IE9mZnNldChwcm9wcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGlucHV0ID0gYXJnc1swXSxcbiAgICAgICAgb25VcGRhdGUgPSBhcmdzWzFdLFxuICAgICAgICBfcHJvcHMyID0gYXJnc1syXTtcblxuICAgIHJldHVybiBuZXcgT2Zmc2V0KF9leHRlbmRzKHtcbiAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgIG9uVXBkYXRlOiBvblVwZGF0ZVxuICAgIH0sIF9wcm9wczIpKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDI5bVpuTmxkQzVxY3lKZExDSnVZVzFsY3lJNld5SlBabVp6WlhRaUxDSnZibE4wWVhKMElpd2lhVzV3ZFhRaUxDSndjbTl3Y3lJc0ltbHVjSFYwVDNKcFoybHVJaXdpWjJWMElpd2ljMk5vWldSMWJHVlZjR1JoZEdVaUxDSnpZMmhsWkhWc1pXUlZjR1JoZEdVaUxDSmhaR1JNYVhOMFpXNWxjaUlzSW05dVUzUnZjQ0lzSW5KbGJXOTJaVXhwYzNSbGJtVnlJaXdpZFhCa1lYUmxJaXdpWm5KdmJTSXNJbTltWm5ObGRDSXNJbVJsWm1GMWJIUlFjbTl3Y3lJc0luQmhjM05wZG1VaUxDSmhjbWR6SWl3aWJHVnVaM1JvSWl3aWIyNVZjR1JoZEdVaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN096czdPenM3U1VGRlRVRXNUVHM3T3pzN096czdPMjFDUVUxS1F5eFBMSE5DUVVGVk8wRkJRVUU3TzBGQlFVRXNVVUZEUVVNc1MwRkVRU3hIUVVOVkxFdEJRVXRETEV0QlJHWXNRMEZEUVVRc1MwRkVRVHM3UVVGRlVpeFRRVUZMUlN4WFFVRk1MRWRCUVcxQ1JpeE5RVUZOUnl4SFFVRk9MRVZCUVc1Q096dEJRVVZCTEZOQlFVdERMR05CUVV3c1IwRkJjMElzV1VGQlRUdEJRVU14UWl4dlEwRkJZeXhQUVVGTFF5eGxRVUZ1UWp0QlFVTkVMRXRCUmtRN08wRkJTVUZNTEZWQlFVMU5MRmRCUVU0c1EwRkJhMElzUzBGQlMwWXNZMEZCZGtJN1FVRkRSQ3hIT3p0dFFrRkZSRWNzVFN4eFFrRkJVenRCUVVGQkxGRkJRME5RTEV0QlJFUXNSMEZEVnl4TFFVRkxReXhMUVVSb1FpeERRVU5EUkN4TFFVUkVPenRCUVVWUVFTeFZRVUZOVVN4alFVRk9MRU5CUVhGQ0xFdEJRVXRLTEdOQlFURkNPMEZCUTBRc1J6czdiVUpCUlVSTExFMHNjVUpCUVZNN1FVRkJRU3hwUWtGRGFVSXNTMEZCUzFJc1MwRkVkRUk3UVVGQlFTeFJRVU5EUkN4TFFVUkVMRlZCUTBOQkxFdEJSRVE3UVVGQlFTeFJRVU5SVlN4SlFVUlNMRlZCUTFGQkxFbEJSRkk3TzBGQlJWQXNVVUZCVFVNc1UwRkJVMWdzVFVGQlRVY3NSMEZCVGl4TFFVRmpMRXRCUVV0RUxGZEJRV3hETzBGQlEwRXNWMEZCVDFFc1QwRkJUME1zVFVGQlpEdEJRVU5FTEVjN096czdPMEZCTVVKSFlpeE5MRU5CUTBkakxGa3NSMEZCWlR0QlFVTndRa1lzVVVGQlRTeERRVVJqTzBGQlJYQkNSeXhYUVVGVE8wRkJSbGNzUXpzN2EwSkJORUpVTEZsQlFXRTdRVUZCUVN4dlEwRkJWRU1zU1VGQlV6dEJRVUZVUVN4UlFVRlRPMEZCUVVFN08wRkJRekZDTEUxQlFVbEJMRXRCUVV0RExFMUJRVXdzUzBGQlowSXNRMEZCY0VJc1JVRkJkVUk3UVVGQlFTeFJRVU5pWkN4TFFVUmhMRWRCUTBoaExFbEJSRWM3TzBGQlJYSkNMRmRCUVU4c1NVRkJTV2hDTEUxQlFVb3NRMEZCVjBjc1MwRkJXQ3hEUVVGUU8wRkJRMFFzUjBGSVJDeE5RVWRQTzBGQlFVRXNVVUZEUjBRc1MwRkVTQ3hIUVVNNFFtTXNTVUZFT1VJN1FVRkJRU3hSUVVOVlJTeFJRVVJXTEVkQlF6aENSaXhKUVVRNVFqdEJRVUZCTEZGQlEyOUNZaXhQUVVSd1FpeEhRVU00UW1Fc1NVRkVPVUk3TzBGQlJVd3NWMEZCVHl4SlFVRkphRUlzVFVGQlNqdEJRVU5NUlN4clFrRkVTenRCUVVWTVowSTdRVUZHU3l4UFFVZEdaaXhQUVVoRkxFVkJRVkE3UVVGTFJEdEJRVU5HTEVNaUxDSm1hV3hsSWpvaWIyWm1jMlYwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVwYlhCdmNuUWdleUJ2YmtaeVlXMWxWWEJrWVhSbElIMGdabkp2YlNBbkxpNHZabkpoYldWemVXNWpKenRjYmx4dVkyeGhjM01nVDJabWMyVjBJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYzNSaGRHbGpJR1JsWm1GMWJIUlFjbTl3Y3lBOUlIdGNiaUFnSUNCbWNtOXRPaUF3TEZ4dUlDQWdJSEJoYzNOcGRtVTZJSFJ5ZFdWY2JpQWdmVHRjYmx4dUlDQnZibE4wWVhKMEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2FXNXdkWFFnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ2RHaHBjeTVwYm5CMWRFOXlhV2RwYmlBOUlHbHVjSFYwTG1kbGRDZ3BPMXh1WEc0Z0lDQWdkR2hwY3k1elkyaGxaSFZzWlZWd1pHRjBaU0E5SUNncElEMCtJSHRjYmlBZ0lDQWdJRzl1Um5KaGJXVlZjR1JoZEdVb2RHaHBjeTV6WTJobFpIVnNaV1JWY0dSaGRHVXBPMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQnBibkIxZEM1aFpHUk1hWE4wWlc1bGNpaDBhR2x6TG5OamFHVmtkV3hsVlhCa1lYUmxLVHRjYmlBZ2ZWeHVYRzRnSUc5dVUzUnZjQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR2x1Y0hWMElIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR2x1Y0hWMExuSmxiVzkyWlV4cGMzUmxibVZ5S0hSb2FYTXVjMk5vWldSMWJHVlZjR1JoZEdVcE8xeHVJQ0I5WEc1Y2JpQWdkWEJrWVhSbEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2FXNXdkWFFzSUdaeWIyMGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnWTI5dWMzUWdiMlptYzJWMElEMGdhVzV3ZFhRdVoyVjBLQ2tnTFNCMGFHbHpMbWx1Y0hWMFQzSnBaMmx1TzF4dUlDQWdJSEpsZEhWeWJpQm1jbTl0SUNzZ2IyWm1jMlYwTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNndUxpNWhjbWR6S1NBOVBpQjdYRzRnSUdsbUlDaGhjbWR6TG14bGJtZDBhQ0E5UFQwZ01Ta2dlMXh1SUNBZ0lHTnZibk4wSUZzZ2NISnZjSE1nWFNBOUlHRnlaM003WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJQWm1aelpYUW9jSEp2Y0hNcE8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lHTnZibk4wSUZzZ2FXNXdkWFFzSUc5dVZYQmtZWFJsTENCd2NtOXdjeUJkSUQwZ1lYSm5jenRjYmlBZ0lDQnlaWFIxY200Z2JtVjNJRTltWm5ObGRDaDdYRzRnSUNBZ0lDQnBibkIxZEN4Y2JpQWdJQ0FnSUc5dVZYQmtZWFJsTEZ4dUlDQWdJQ0FnTGk0dWNISnZjSE5jYmlBZ0lDQjlLVHRjYmlBZ2ZWeHVmVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvb2Zmc2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQYXJhbGxlbCA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQYXJhbGxlbCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGFyYWxsZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhcmFsbGVsKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLnByb3BzLmFjdGlvbnM7XG5cbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSBhY3Rpb25zLmxlbmd0aDtcblxuICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICBhY3Rpb24uc2V0UHJvcHMoe1xuICAgICAgICBfb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLnN0b3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUuYWRkQWN0aW9uID0gZnVuY3Rpb24gYWRkQWN0aW9uKGFjdGlvbikge1xuICAgIHZhciBhY3Rpb25zID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuXG5cbiAgICBpZiAoYWN0aW9ucy5pbmRleE9mKGFjdGlvbikgPT09IC0xKSB7XG4gICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDA7XG4gIH07XG5cbiAgcmV0dXJuIFBhcmFsbGVsO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGFyYWxsZWwoX2V4dGVuZHMoeyBhY3Rpb25zOiBhY3Rpb25zIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0JoY21Gc2JHVnNMbXB6SWwwc0ltNWhiV1Z6SWpwYklsQmhjbUZzYkdWc0lpd2liMjVUZEdGeWRDSXNJbUZqZEdsdmJuTWlMQ0p3Y205d2N5SXNJbTUxYlVGamRHbDJaVUZqZEdsdmJuTWlMQ0pzWlc1bmRHZ2lMQ0ptYjNKRllXTm9JaXdpWVdOMGFXOXVJaXdpYzJWMFVISnZjSE1pTENKZmIyNVRkRzl3SWl3aWMzUmhjblFpTENKdmJsTjBiM0FpTENKemRHOXdJaXdpWVdSa1FXTjBhVzl1SWl3aWFXNWtaWGhQWmlJc0luQjFjMmdpTENKcGMwRmpkR2x2YmtOdmJYQnNaWFJsSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3pzN096czdPenM3TzBsQlJVMUJMRkU3T3pzN096czdPenR4UWtGRFNrTXNUeXh6UWtGQlZUdEJRVUZCT3p0QlFVRkJMRkZCUTBGRExFOUJSRUVzUjBGRFdTeExRVUZMUXl4TFFVUnFRaXhEUVVOQlJDeFBRVVJCT3p0QlFVVlNMRk5CUVV0RkxHZENRVUZNTEVkQlFYZENSaXhSUVVGUlJ5eE5RVUZvUXpzN1FVRkZRVWdzV1VGQlVVa3NUMEZCVWl4RFFVRm5RaXhWUVVGRFF5eE5RVUZFTEVWQlFWazdRVUZETVVKQkxHRkJRVTlETEZGQlFWQXNRMEZCWjBJN1FVRkRaRU1zYVVKQlFWTTdRVUZCUVN4cFFrRkJUU3hQUVVGTFRDeG5Ra0ZCVEN4RlFVRk9PMEZCUVVFN1FVRkVTeXhQUVVGb1FpeEZRVVZIVFN4TFFVWklPMEZCUjBRc1MwRktSRHRCUVV0RUxFYzdPM0ZDUVVWRVF5eE5MSEZDUVVGVE8wRkJRMUFzVTBGQlMxSXNTMEZCVEN4RFFVRlhSQ3hQUVVGWUxFTkJRVzFDU1N4UFFVRnVRaXhEUVVFeVFpeFZRVUZEUXl4TlFVRkVPMEZCUVVFc1lVRkJXVUVzVDBGQlQwc3NTVUZCVUN4RlFVRmFPMEZCUVVFc1MwRkJNMEk3UVVGRFJDeEhPenR4UWtGRlJFTXNVeXh6UWtGQlZVNHNUU3hGUVVGUk8wRkJRVUVzVVVGRFVrd3NUMEZFVVN4SFFVTkpMRXRCUVV0RExFdEJSRlFzUTBGRFVrUXNUMEZFVVRzN08wRkJSMmhDTEZGQlFVbEJMRkZCUVZGWkxFOUJRVklzUTBGQlowSlFMRTFCUVdoQ0xFMUJRVFJDTEVOQlFVTXNRMEZCYWtNc1JVRkJiME03UVVGRGJFTk1MR05CUVZGaExFbEJRVklzUTBGQllWSXNUVUZCWWp0QlFVTkVPMEZCUTBZc1J6czdjVUpCUlVSVExHZENMQ3RDUVVGdFFqdEJRVU5xUWl4WFFVRlJMRXRCUVV0YUxHZENRVUZNTEV0QlFUQkNMRU5CUVd4RE8wRkJRMFFzUnpzN096czdhMEpCUjFrc1ZVRkJRMFlzVDBGQlJDeEZRVUZWUXl4TFFVRldPMEZCUVVFc1UwRkJiMElzU1VGQlNVZ3NVVUZCU2l4WlFVRmxSU3huUWtGQlppeEpRVUV5UWtNc1MwRkJNMElzUlVGQmNFSTdRVUZCUVN4RElpd2labWxzWlNJNkluQmhjbUZzYkdWc0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMeWM3WEc1Y2JtTnNZWE56SUZCaGNtRnNiR1ZzSUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdGamRHbHZibk1nZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpJRDBnWVdOMGFXOXVjeTVzWlc1bmRHZzdYRzVjYmlBZ0lDQmhZM1JwYjI1ekxtWnZja1ZoWTJnb0tHRmpkR2x2YmlrZ1BUNGdlMXh1SUNBZ0lDQWdZV04wYVc5dUxuTmxkRkJ5YjNCektIdGNiaUFnSUNBZ0lDQWdYMjl1VTNSdmNEb2dLQ2tnUFQ0Z2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpMUzFjYmlBZ0lDQWdJSDBwTG5OMFlYSjBLQ2s3WEc0Z0lDQWdmU2s3WEc0Z0lIMWNibHh1SUNCdmJsTjBiM0FvS1NCN1hHNGdJQ0FnZEdocGN5NXdjbTl3Y3k1aFkzUnBiMjV6TG1admNrVmhZMmdvS0dGamRHbHZiaWtnUFQ0Z1lXTjBhVzl1TG5OMGIzQW9LU2s3WEc0Z0lIMWNibHh1SUNCaFpHUkJZM1JwYjI0b1lXTjBhVzl1S1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJoWTNScGIyNXpJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2FXWWdLR0ZqZEdsdmJuTXVhVzVrWlhoUFppaGhZM1JwYjI0cElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ1lXTjBhVzl1Y3k1d2RYTm9LR0ZqZEdsdmJpazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdhWE5CWTNScGIyNURiMjF3YkdWMFpTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z0tIUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeUE5UFQwZ01DazdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR0ZqZEdsdmJuTXNJSEJ5YjNCektTQTlQaUJ1WlhjZ1VHRnlZV3hzWld3b2V5QmhZM1JwYjI1ekxDQXVMaTV3Y205d2N5QjlLVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGFyYWxsZWwuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBoeXNpY3MgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoUGh5c2ljcywgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGh5c2ljcyk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFBoeXNpY3MucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYXV0b1N0b3BTcGVlZCA9IF9wcm9wcy5hdXRvU3RvcFNwZWVkLFxuICAgICAgICBhY2NlbGVyYXRpb24gPSBfcHJvcHMuYWNjZWxlcmF0aW9uLFxuICAgICAgICBmcmljdGlvbiA9IF9wcm9wcy5mcmljdGlvbixcbiAgICAgICAgdmVsb2NpdHkgPSBfcHJvcHMudmVsb2NpdHksXG4gICAgICAgIHNwcmluZyA9IF9wcm9wcy5zcHJpbmcsXG4gICAgICAgIHRvID0gX3Byb3BzLnRvO1xuXG4gICAgdmFyIG5ld1ZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgdmFyIGVsYXBzZWQgPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCk7XG5cbiAgICAvLyBBcHBseSBhY2NlbGVyYXRpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoYWNjZWxlcmF0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkoYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBmcmljdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChmcmljdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKj0gTWF0aC5wb3coMSAtIGZyaWN0aW9uLCBlbGFwc2VkIC8gMTAwKTtcbiAgICB9XG5cbiAgICBpZiAoc3ByaW5nICYmIHRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBkaXN0YW5jZVRvVGFyZ2V0ID0gdG8gLSB0aGlzLmN1cnJlbnQ7XG4gICAgICBuZXdWZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHNwcmluZywgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdmVsb2NpdHlcbiAgICB0aGlzLmN1cnJlbnQgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKG5ld1ZlbG9jaXR5LCBlbGFwc2VkKTtcbiAgICB0aGlzLnByb3BzLnZlbG9jaXR5ID0gbmV3VmVsb2NpdHk7XG5cbiAgICAvLyBDaGVjayBpZiBzaW11bGF0aW9uIGlzIGNvbXBsZXRlXG4gICAgLy8gV2UgZG8gdGhpcyBoZXJlIGluc3RlYWQgb2YgYGlzQWN0aW9uQ29tcGxldGVgIGFzIGl0IGFsbG93cyB1c1xuICAgIC8vIHRvIGNsYW1wIGR1cmluZyB0aGlzIHVwZGF0ZVxuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGF1dG9TdG9wU3BlZWQgIT09IGZhbHNlICYmICghbmV3VmVsb2NpdHkgfHwgTWF0aC5hYnMobmV3VmVsb2NpdHkpIDw9IGF1dG9TdG9wU3BlZWQpO1xuXG4gICAgaWYgKHRoaXMuaXNDb21wbGV0ZSAmJiBzcHJpbmcpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRvO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH07XG5cbiAgUGh5c2ljcy5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZTtcbiAgfTtcblxuICByZXR1cm4gUGh5c2ljcztcbn0oXzIuZGVmYXVsdCk7XG5cblBoeXNpY3MuZGVmYXVsdFByb3BzID0ge1xuICBhY2NlbGVyYXRpb246IDAsXG4gIGZyaWN0aW9uOiAwLFxuICB2ZWxvY2l0eTogMCxcbiAgYXV0b1N0b3BTcGVlZDogMC4wMDFcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IFBoeXNpY3MocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sc2lVR2g1YzJsamN5SXNJblZ3WkdGMFpTSXNJbkJ5YjNCeklpd2lZWFYwYjFOMGIzQlRjR1ZsWkNJc0ltRmpZMlZzWlhKaGRHbHZiaUlzSW1aeWFXTjBhVzl1SWl3aWRtVnNiMk5wZEhraUxDSnpjSEpwYm1jaUxDSjBieUlzSW01bGQxWmxiRzlqYVhSNUlpd2laV3hoY0hObFpDSXNJblZ1WkdWbWFXNWxaQ0lzSW1ScGMzUmhibU5sVkc5VVlYSm5aWFFpTENKamRYSnlaVzUwSWl3aWFYTkRiMjF3YkdWMFpTSXNJazFoZEdnaUxDSmhZbk1pTENKcGMwRmpkR2x2YmtOdmJYQnNaWFJsSWl3aVpHVm1ZWFZzZEZCeWIzQnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN1FVRkRRVHM3T3pzN096czdPenRKUVVWTlFTeFBPenM3T3pzN096czdiMEpCVVVwRExFMHNjVUpCUVZNN1FVRkJRU3hwUWtGRGFVVXNTMEZCUzBNc1MwRkVkRVU3UVVGQlFTeFJRVU5EUXl4aFFVUkVMRlZCUTBOQkxHRkJSRVE3UVVGQlFTeFJRVU5uUWtNc1dVRkVhRUlzVlVGRFowSkJMRmxCUkdoQ08wRkJRVUVzVVVGRE9FSkRMRkZCUkRsQ0xGVkJRemhDUVN4UlFVUTVRanRCUVVGQkxGRkJRM2REUXl4UlFVUjRReXhWUVVOM1EwRXNVVUZFZUVNN1FVRkJRU3hSUVVOclJFTXNUVUZFYkVRc1ZVRkRhMFJCTEUxQlJHeEVPMEZCUVVFc1VVRkRNRVJETEVWQlJERkVMRlZCUXpCRVFTeEZRVVF4UkRzN1FVRkZVQ3hSUVVGSlF5eGpRVUZqU0N4UlFVRnNRanRCUVVOQkxGRkJRVTFKTEZWQlFWVXNiME5CUVdoQ096dEJRVVZCTzBGQlEwRXNVVUZCU1U0c1dVRkJTaXhGUVVGclFqdEJRVU5vUWtzc2NVSkJRV1VzZVVKQlFXTk1MRmxCUVdRc1JVRkJORUpOTEU5QlFUVkNMRU5CUVdZN1FVRkRSRHM3UVVGRlJEdEJRVU5CTEZGQlFVbE1MRkZCUVVvc1JVRkJZenRCUVVOYVNTdzRRa0ZCWjBJc1NVRkJTVW9zVVVGQmNFSXNSVUZCYTBOTExGVkJRVlVzUjBGQk5VTTdRVUZEUkRzN1FVRkZSQ3hSUVVGSlNDeFZRVUZWUXl4UFFVRlBSeXhUUVVGeVFpeEZRVUZuUXp0QlFVTTVRaXhWUVVGTlF5eHRRa0ZCYlVKS0xFdEJRVXNzUzBGQlMwc3NUMEZCYmtNN1FVRkRRVW9zY1VKQlFXVkhMRzFDUVVGdFFpeDVRa0ZCWTB3c1RVRkJaQ3hGUVVGelFrY3NUMEZCZEVJc1EwRkJiRU03UVVGRFJEczdRVUZGUkR0QlFVTkJMRk5CUVV0SExFOUJRVXdzU1VGQlowSXNlVUpCUVdOS0xGZEJRV1FzUlVGQk1rSkRMRTlCUVROQ0xFTkJRV2hDTzBGQlEwRXNVMEZCUzFJc1MwRkJUQ3hEUVVGWFNTeFJRVUZZTEVkQlFYTkNSeXhYUVVGMFFqczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hUUVVGTFN5eFZRVUZNTEVkQlFXMUNXQ3hyUWtGQmEwSXNTMEZCYkVJc1MwRkJORUlzUTBGQlEwMHNWMEZCUkN4SlFVRm5RazBzUzBGQlMwTXNSMEZCVEN4RFFVRlRVQ3hYUVVGVUxFdEJRWGxDVGl4aFFVRnlSU3hEUVVGdVFqczdRVUZGUVN4UlFVRkpMRXRCUVV0WExGVkJRVXdzU1VGQmJVSlFMRTFCUVhaQ0xFVkJRU3RDTzBGQlF6ZENMRmRCUVV0TkxFOUJRVXdzUjBGQlpVd3NSVUZCWmp0QlFVTkVPenRCUVVWRUxGZEJRVThzUzBGQlMwc3NUMEZCV2p0QlFVTkVMRWM3TzI5Q1FVVkVTU3huUWl3clFrRkJiVUk3UVVGRGFrSXNWMEZCVHl4TFFVRkxTQ3hWUVVGYU8wRkJRMFFzUnpzN096czdRVUU1UTBka0xFOHNRMEZEUjJ0Q0xGa3NSMEZCWlR0QlFVTndRbVFzWjBKQlFXTXNRMEZFVFR0QlFVVndRa01zV1VGQlZTeERRVVpWTzBGQlIzQkNReXhaUVVGVkxFTkJTRlU3UVVGSmNFSklMR2xDUVVGbE8wRkJTa3NzUXpzN2EwSkJaMFJVTEZWQlFVTkVMRXRCUVVRN1FVRkJRU3hUUVVGWExFbEJRVWxHTEU5QlFVb3NRMEZCV1VVc1MwRkJXaXhEUVVGWU8wRkJRVUVzUXlJc0ltWnBiR1VpT2lKd2FIbHphV056TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVwYlhCdmNuUWdleUIwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VnZlNCbWNtOXRJQ2N1TGk5bWNtRnRaWE41Ym1Nbk8xeHVhVzF3YjNKMElIc2djM0JsWldSUVpYSkdjbUZ0WlNCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibHh1WTJ4aGMzTWdVR2g1YzJsamN5QmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJSE4wWVhScFl5QmtaV1poZFd4MFVISnZjSE1nUFNCN1hHNGdJQ0FnWVdOalpXeGxjbUYwYVc5dU9pQXdMRnh1SUNBZ0lHWnlhV04wYVc5dU9pQXdMRnh1SUNBZ0lIWmxiRzlqYVhSNU9pQXdMRnh1SUNBZ0lHRjFkRzlUZEc5d1UzQmxaV1E2SURBdU1EQXhYRzRnSUgxY2JseHVJQ0IxY0dSaGRHVW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmhkWFJ2VTNSdmNGTndaV1ZrTENCaFkyTmxiR1Z5WVhScGIyNHNJR1p5YVdOMGFXOXVMQ0IyWld4dlkybDBlU3dnYzNCeWFXNW5MQ0IwYnlCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQnNaWFFnYm1WM1ZtVnNiMk5wZEhrZ1BTQjJaV3h2WTJsMGVUdGNiaUFnSUNCamIyNXpkQ0JsYkdGd2MyVmtJRDBnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsS0NrN1hHNWNiaUFnSUNBdkx5QkJjSEJzZVNCaFkyTmxiR1Z5WVhScGIyNGdkRzhnZG1Wc2IyTnBkSGxjYmlBZ0lDQnBaaUFvWVdOalpXeGxjbUYwYVc5dUtTQjdYRzRnSUNBZ0lDQnVaWGRXWld4dlkybDBlU0FyUFNCemNHVmxaRkJsY2taeVlXMWxLR0ZqWTJWc1pYSmhkR2x2Yml3Z1pXeGhjSE5sWkNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1FYQndiSGtnWm5KcFkzUnBiMjRnZEc4Z2RtVnNiMk5wZEhsY2JpQWdJQ0JwWmlBb1puSnBZM1JwYjI0cElIdGNiaUFnSUNBZ0lHNWxkMVpsYkc5amFYUjVJQ285SUNneElDMGdabkpwWTNScGIyNHBJQ29xSUNobGJHRndjMlZrSUM4Z01UQXdLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYzNCeWFXNW5JQ1ltSUhSdklDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR1JwYzNSaGJtTmxWRzlVWVhKblpYUWdQU0IwYnlBdElIUm9hWE11WTNWeWNtVnVkRHRjYmlBZ0lDQWdJRzVsZDFabGJHOWphWFI1SUNzOUlHUnBjM1JoYm1ObFZHOVVZWEpuWlhRZ0tpQnpjR1ZsWkZCbGNrWnlZVzFsS0hOd2NtbHVaeXdnWld4aGNITmxaQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnUVhCd2JIa2dkbVZzYjJOcGRIbGNiaUFnSUNCMGFHbHpMbU4xY25KbGJuUWdLejBnYzNCbFpXUlFaWEpHY21GdFpTaHVaWGRXWld4dlkybDBlU3dnWld4aGNITmxaQ2s3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTUyWld4dlkybDBlU0E5SUc1bGQxWmxiRzlqYVhSNU8xeHVYRzRnSUNBZ0x5OGdRMmhsWTJzZ2FXWWdjMmx0ZFd4aGRHbHZiaUJwY3lCamIyMXdiR1YwWlZ4dUlDQWdJQzh2SUZkbElHUnZJSFJvYVhNZ2FHVnlaU0JwYm5OMFpXRmtJRzltSUdCcGMwRmpkR2x2YmtOdmJYQnNaWFJsWUNCaGN5QnBkQ0JoYkd4dmQzTWdkWE5jYmlBZ0lDQXZMeUIwYnlCamJHRnRjQ0JrZFhKcGJtY2dkR2hwY3lCMWNHUmhkR1ZjYmlBZ0lDQjBhR2x6TG1selEyOXRjR3hsZEdVZ1BTQW9ZWFYwYjFOMGIzQlRjR1ZsWkNBaFBUMGdabUZzYzJVZ0ppWWdLQ0Z1WlhkV1pXeHZZMmwwZVNCOGZDQk5ZWFJvTG1GaWN5aHVaWGRXWld4dlkybDBlU2tnUEQwZ1lYVjBiMU4wYjNCVGNHVmxaQ2twTzF4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YVhORGIyMXdiR1YwWlNBbUppQnpjSEpwYm1jcElIdGNiaUFnSUNBZ0lIUm9hWE11WTNWeWNtVnVkQ0E5SUhSdk8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtTjFjbkpsYm5RN1hHNGdJSDFjYmx4dUlDQnBjMEZqZEdsdmJrTnZiWEJzWlhSbEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbWx6UTI5dGNHeGxkR1U3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hCeWIzQnpLU0E5UGlCdVpYY2dVR2g1YzJsamN5aHdjbTl3Y3lrN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGh5c2ljcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdmFsdWUgPSByZXF1aXJlKCcuL3ZhbHVlJyk7XG5cbnZhciBfdmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWUpO1xuXG52YXIgX2NvbXBvc2l0ZSA9IHJlcXVpcmUoJy4vY29tcG9zaXRlJyk7XG5cbnZhciBfY29tcG9zaXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2l0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gY3JlYXRlUG9pbnRlcihfcmVmMiwgX3JlZikge1xuICB2YXIgeCA9IF9yZWYyLngsXG4gICAgICB5ID0gX3JlZjIueTtcblxuICB2YXIgZXZlbnRUb1BvaW50cyA9IF9yZWYuZXZlbnRUb1BvaW50cyxcbiAgICAgIG1vdmVFdmVudCA9IF9yZWYubW92ZUV2ZW50LFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydldmVudFRvUG9pbnRzJywgJ21vdmVFdmVudCddKTtcblxuICB2YXIgcG9pbnRlciA9ICgwLCBfY29tcG9zaXRlMi5kZWZhdWx0KSh7XG4gICAgeDogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeCksXG4gICAgeTogKDAsIF92YWx1ZTIuZGVmYXVsdCkoeSlcbiAgfSwgX2V4dGVuZHMoe1xuICAgIHBhc3NpdmU6IHRydWUsXG4gICAgcHJldmVudERlZmF1bHQ6IHRydWVcbiAgfSwgcHJvcHMpKTtcblxuICB2YXIgdXBkYXRlUG9pbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHByb3BzLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyIHBvaW50cyA9IGV2ZW50VG9Qb2ludHMoZSk7XG4gICAgcG9pbnRlci54LnNldChwb2ludHMueCk7XG4gICAgcG9pbnRlci55LnNldChwb2ludHMueSk7XG4gIH07XG5cbiAgcG9pbnRlci5zZXRQcm9wcyh7XG4gICAgX29uU3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpO1xuICAgIH0sXG4gICAgX29uU3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcG9pbnRlcjtcbn1cblxudmFyIG1vdXNlRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIHtcbiAgICB4OiBlLnBhZ2VYLFxuICAgIHk6IGUucGFnZVlcbiAgfTtcbn07XG5cbnZhciB0b3VjaEV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChfcmVmMykge1xuICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBfcmVmMy5jaGFuZ2VkVG91Y2hlcztcbiAgcmV0dXJuIHtcbiAgICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbiAgfTtcbn07XG5cbnZhciBnZXROYXRpdmVFdmVudCA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiBlLm9yaWdpbmFsRXZlbnQgfHwgZS5uYXRpdmVFdmVudCB8fCBlO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGUsIHByb3BzKSB7XG4gIHZhciBuYXRpdmVFdmVudCA9IGdldE5hdGl2ZUV2ZW50KGUpO1xuICByZXR1cm4gbmF0aXZlRXZlbnQudG91Y2hlcyA/IGNyZWF0ZVBvaW50ZXIodG91Y2hFdmVudFRvUG9pbnQoZSksIF9leHRlbmRzKHtcbiAgICBtb3ZlRXZlbnQ6ICd0b3VjaG1vdmUnLFxuICAgIGV2ZW50VG9Qb2ludHM6IHRvdWNoRXZlbnRUb1BvaW50XG4gIH0sIHByb3BzKSkgOiBjcmVhdGVQb2ludGVyKG1vdXNlRXZlbnRUb1BvaW50KGUpLCBfZXh0ZW5kcyh7XG4gICAgbW92ZUV2ZW50OiAnbW91c2Vtb3ZlJyxcbiAgICBldmVudFRvUG9pbnRzOiBtb3VzZUV2ZW50VG9Qb2ludFxuICB9LCBwcm9wcykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNCdmFXNTBaWEl1YW5NaVhTd2libUZ0WlhNaU9sc2lZM0psWVhSbFVHOXBiblJsY2lJc0luZ2lMQ0o1SWl3aVpYWmxiblJVYjFCdmFXNTBjeUlzSW0xdmRtVkZkbVZ1ZENJc0luQnliM0J6SWl3aWNHOXBiblJsY2lJc0luQmhjM05wZG1VaUxDSndjbVYyWlc1MFJHVm1ZWFZzZENJc0luVndaR0YwWlZCdmFXNTBaWElpTENKbElpd2ljRzlwYm5Seklpd2ljMlYwSWl3aWMyVjBVSEp2Y0hNaUxDSmZiMjVUZEdGeWRDSXNJbVJ2WTNWdFpXNTBJaXdpWkc5amRXMWxiblJGYkdWdFpXNTBJaXdpWVdSa1JYWmxiblJNYVhOMFpXNWxjaUlzSWw5dmJsTjBiM0FpTENKeVpXMXZkbVZGZG1WdWRFeHBjM1JsYm1WeUlpd2liVzkxYzJWRmRtVnVkRlJ2VUc5cGJuUWlMQ0p3WVdkbFdDSXNJbkJoWjJWWklpd2lkRzkxWTJoRmRtVnVkRlJ2VUc5cGJuUWlMQ0pqYUdGdVoyVmtWRzkxWTJobGN5SXNJbU5zYVdWdWRGZ2lMQ0pqYkdsbGJuUlpJaXdpWjJWMFRtRjBhWFpsUlhabGJuUWlMQ0p2Y21sbmFXNWhiRVYyWlc1MElpd2libUYwYVhabFJYWmxiblFpTENKMGIzVmphR1Z6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3T3pzN096dEJRVVZCTEZOQlFWTkJMR0ZCUVZRc1kwRkJlVVU3UVVGQlFTeE5RVUZvUkVNc1EwRkJaMFFzVTBGQmFFUkJMRU5CUVdkRU8wRkJRVUVzVFVGQk4wTkRMRU5CUVRaRExGTkJRVGREUVN4RFFVRTJRenM3UVVGQlFTeE5RVUYwUTBNc1lVRkJjME1zVVVGQmRFTkJMR0ZCUVhORE8wRkJRVUVzVFVGQmRrSkRMRk5CUVhWQ0xGRkJRWFpDUVN4VFFVRjFRanRCUVVGQkxFMUJRVlJETEV0QlFWTTdPMEZCUTNaRkxFMUJRVTFETEZWQlFWVXNlVUpCUVZVN1FVRkRlRUpNTEU5QlFVY3NjVUpCUVUxQkxFTkJRVTRzUTBGRWNVSTdRVUZGZUVKRExFOUJRVWNzY1VKQlFVMUJMRU5CUVU0N1FVRkdjVUlzUjBGQlZqdEJRVWxrU3l4aFFVRlRMRWxCU2tzN1FVRkxaRU1zYjBKQlFXZENPMEZCVEVZc1MwRk5XRWdzUzBGT1Z5eEZRVUZvUWpzN1FVRlRRU3hOUVVGTlNTeG5Ra0ZCWjBJc1ZVRkJRME1zUTBGQlJDeEZRVUZQTzBGQlF6TkNMRkZCUVVsTUxFMUJRVTFITEdOQlFWWXNSVUZCTUVJN1FVRkRlRUpGTEZGQlFVVkdMR05CUVVZN1FVRkRSRHM3UVVGRlJDeFJRVUZOUnl4VFFVRlRVaXhqUVVGalR5eERRVUZrTEVOQlFXWTdRVUZEUVVvc1dVRkJVVXdzUTBGQlVpeERRVUZWVnl4SFFVRldMRU5CUVdORUxFOUJRVTlXTEVOQlFYSkNPMEZCUTBGTExGbEJRVkZLTEVOQlFWSXNRMEZCVlZVc1IwRkJWaXhEUVVGalJDeFBRVUZQVkN4RFFVRnlRanRCUVVORUxFZEJVa1E3TzBGQlZVRkpMRlZCUVZGUExGRkJRVklzUTBGQmFVSTdRVUZEWmtNc1kwRkJWVHRCUVVGQkxHRkJRVTFETEZOQlFWTkRMR1ZCUVZRc1EwRkJlVUpETEdkQ1FVRjZRaXhEUVVFd1EySXNVMEZCTVVNc1JVRkJjVVJMTEdGQlFYSkVMRU5CUVU0N1FVRkJRU3hMUVVSTE8wRkJSV1pUTEdGQlFWTTdRVUZCUVN4aFFVRk5TQ3hUUVVGVFF5eGxRVUZVTEVOQlFYbENSeXh0UWtGQmVrSXNRMEZCTmtObUxGTkJRVGRETEVWQlFYZEVTeXhoUVVGNFJDeERRVUZPTzBGQlFVRTdRVUZHVFN4SFFVRnFRanM3UVVGTFFTeFRRVUZQU0N4UFFVRlFPMEZCUTBRN08wRkJSVVFzU1VGQlRXTXNiMEpCUVc5Q0xGVkJRVU5XTEVOQlFVUTdRVUZCUVN4VFFVRlJPMEZCUTJoRFZDeFBRVUZIVXl4RlFVRkZWeXhMUVVReVFqdEJRVVZvUTI1Q0xFOUJRVWRSTEVWQlFVVlpPMEZCUmpKQ0xFZEJRVkk3UVVGQlFTeERRVUV4UWpzN1FVRkxRU3hKUVVGTlF5eHZRa0ZCYjBJN1FVRkJRU3hOUVVGSFF5eGpRVUZJTEZOQlFVZEJMR05CUVVnN1FVRkJRU3hUUVVGNVFqdEJRVU5xUkhaQ0xFOUJRVWQxUWl4bFFVRmxMRU5CUVdZc1JVRkJhMEpETEU5QlJEUkNPMEZCUldwRWRrSXNUMEZCUjNOQ0xHVkJRV1VzUTBGQlppeEZRVUZyUWtVN1FVRkdORUlzUjBGQmVrSTdRVUZCUVN4RFFVRXhRanM3UVVGTFFTeEpRVUZOUXl4cFFrRkJhVUlzVlVGQlEycENMRU5CUVVRN1FVRkJRU3hUUVVGUFFTeEZRVUZGYTBJc1lVRkJSaXhKUVVGdFFteENMRVZCUVVWdFFpeFhRVUZ5UWl4SlFVRnZRMjVDTEVOQlFUTkRPMEZCUVVFc1EwRkJka0k3TzJ0Q1FVVmxMRlZCUVVOQkxFTkJRVVFzUlVGQlNVd3NTMEZCU2l4RlFVRmpPMEZCUXpOQ0xFMUJRVTEzUWl4alFVRmpSaXhsUVVGbGFrSXNRMEZCWml4RFFVRndRanRCUVVOQkxGTkJRVkZ0UWl4WlFVRlpReXhQUVVGaUxFZEJRMHc1UWl4alFVRmpkVUlzYTBKQlFXdENZaXhEUVVGc1FpeERRVUZrTzBGQlEwVk9MR1ZCUVZjc1YwRkVZanRCUVVWRlJDeHRRa0ZCWlc5Q08wRkJSbXBDTEV0QlIwdHNRaXhMUVVoTUxFVkJSRXNzUjBGTlRFd3NZMEZCWTI5Q0xHdENRVUZyUWxZc1EwRkJiRUlzUTBGQlpEdEJRVU5GVGl4bFFVRlhMRmRCUkdJN1FVRkZSVVFzYlVKQlFXVnBRanRCUVVacVFpeExRVWRMWml4TFFVaE1MRVZCVGtZN1FVRlhSQ3hESWl3aVptbHNaU0k2SW5CdmFXNTBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkbUZzZFdVZ1puSnZiU0FuTGk5MllXeDFaU2M3WEc1cGJYQnZjblFnWTI5dGNHOXphWFJsSUdaeWIyMGdKeTR2WTI5dGNHOXphWFJsSnp0Y2JseHVablZ1WTNScGIyNGdZM0psWVhSbFVHOXBiblJsY2loN0lIZ3NJSGtnZlN3Z2V5QmxkbVZ1ZEZSdlVHOXBiblJ6TENCdGIzWmxSWFpsYm5Rc0lDNHVMbkJ5YjNCeklIMHBJSHRjYmlBZ1kyOXVjM1FnY0c5cGJuUmxjaUE5SUdOdmJYQnZjMmwwWlNoN1hHNGdJQ0FnZURvZ2RtRnNkV1VvZUNrc1hHNGdJQ0FnZVRvZ2RtRnNkV1VvZVNsY2JpQWdmU3dnZTF4dUlDQWdJSEJoYzNOcGRtVTZJSFJ5ZFdVc1hHNGdJQ0FnY0hKbGRtVnVkRVJsWm1GMWJIUTZJSFJ5ZFdVc1hHNGdJQ0FnTGk0dWNISnZjSE5jYmlBZ2ZTazdYRzVjYmlBZ1kyOXVjM1FnZFhCa1lYUmxVRzlwYm5SbGNpQTlJQ2hsS1NBOVBpQjdYRzRnSUNBZ2FXWWdLSEJ5YjNCekxuQnlaWFpsYm5SRVpXWmhkV3gwS1NCN1hHNGdJQ0FnSUNCbExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTI5dWMzUWdjRzlwYm5SeklEMGdaWFpsYm5SVWIxQnZhVzUwY3lobEtUdGNiaUFnSUNCd2IybHVkR1Z5TG5ndWMyVjBLSEJ2YVc1MGN5NTRLVHRjYmlBZ0lDQndiMmx1ZEdWeUxua3VjMlYwS0hCdmFXNTBjeTU1S1R0Y2JpQWdmVHRjYmx4dUlDQndiMmx1ZEdWeUxuTmxkRkJ5YjNCektIdGNiaUFnSUNCZmIyNVRkR0Z5ZERvZ0tDa2dQVDRnWkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9iVzkyWlVWMlpXNTBMQ0IxY0dSaGRHVlFiMmx1ZEdWeUtTeGNiaUFnSUNCZmIyNVRkRzl3T2lBb0tTQTlQaUJrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWh0YjNabFJYWmxiblFzSUhWd1pHRjBaVkJ2YVc1MFpYSXBYRzRnSUgwcE8xeHVYRzRnSUhKbGRIVnliaUJ3YjJsdWRHVnlPMXh1ZlZ4dVhHNWpiMjV6ZENCdGIzVnpaVVYyWlc1MFZHOVFiMmx1ZENBOUlDaGxLU0E5UGlBb2UxeHVJQ0I0T2lCbExuQmhaMlZZTEZ4dUlDQjVPaUJsTG5CaFoyVlpYRzU5S1R0Y2JseHVZMjl1YzNRZ2RHOTFZMmhGZG1WdWRGUnZVRzlwYm5RZ1BTQW9leUJqYUdGdVoyVmtWRzkxWTJobGN5QjlLU0E5UGlBb2UxeHVJQ0I0T2lCamFHRnVaMlZrVkc5MVkyaGxjMXN3WFM1amJHbGxiblJZTEZ4dUlDQjVPaUJqYUdGdVoyVmtWRzkxWTJobGMxc3dYUzVqYkdsbGJuUlpYRzU5S1R0Y2JseHVZMjl1YzNRZ1oyVjBUbUYwYVhabFJYWmxiblFnUFNBb1pTa2dQVDRnWlM1dmNtbG5hVzVoYkVWMlpXNTBJSHg4SUdVdWJtRjBhWFpsUlhabGJuUWdmSHdnWlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHVXNJSEJ5YjNCektTQTlQaUI3WEc0Z0lHTnZibk4wSUc1aGRHbDJaVVYyWlc1MElEMGdaMlYwVG1GMGFYWmxSWFpsYm5Rb1pTazdYRzRnSUhKbGRIVnliaUFvYm1GMGFYWmxSWFpsYm5RdWRHOTFZMmhsY3lrZ1AxeHVJQ0FnSUdOeVpXRjBaVkJ2YVc1MFpYSW9kRzkxWTJoRmRtVnVkRlJ2VUc5cGJuUW9aU2tzSUh0Y2JpQWdJQ0FnSUcxdmRtVkZkbVZ1ZERvZ0ozUnZkV05vYlc5MlpTY3NYRzRnSUNBZ0lDQmxkbVZ1ZEZSdlVHOXBiblJ6T2lCMGIzVmphRVYyWlc1MFZHOVFiMmx1ZEN4Y2JpQWdJQ0FnSUM0dUxuQnliM0J6WEc0Z0lDQWdmU2tnT2x4dUlDQWdJR055WldGMFpWQnZhVzUwWlhJb2JXOTFjMlZGZG1WdWRGUnZVRzlwYm5Rb1pTa3NJSHRjYmlBZ0lDQWdJRzF2ZG1WRmRtVnVkRG9nSjIxdmRYTmxiVzkyWlNjc1hHNGdJQ0FnSUNCbGRtVnVkRlJ2VUc5cGJuUnpPaUJ0YjNWelpVVjJaVzUwVkc5UWIybHVkQ3hjYmlBZ0lDQWdJQzR1TG5CeWIzQnpYRzRnSUNBZ2ZTazdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcG9pbnRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfZWFzaW5nID0gcmVxdWlyZSgnLi4vaW5jL2Vhc2luZycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBjbGFtcFByb2dyZXNzID0gKDAsIF90cmFuc2Zvcm1lcnMuY2xhbXApKDAsIDEpO1xuXG52YXIgTkVYVF9TVEVQUyA9IHtcbiAgbG9vcDogZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgcmV0dXJuIHR3ZWVuLnN0YXJ0KCk7XG4gIH0sXG4gIHlveW86IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgIHJldHVybiB0d2Vlbi5yZXZlcnNlKCkuc3RhcnQoKTtcbiAgfSxcbiAgZmxpcDogZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgcmV0dXJuIHR3ZWVuLmZsaXAoKS5zdGFydCgpO1xuICB9XG59O1xuXG52YXIgVHdlZW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFR3ZWVuKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFR3ZWVuLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb24sXG4gICAgICAgIHBsYXlEaXJlY3Rpb24gPSBfcHJvcHMucGxheURpcmVjdGlvbjtcblxuXG4gICAgdGhpcy5lbGFwc2VkID0gcGxheURpcmVjdGlvbiA9PT0gMSA/IDAgOiBkdXJhdGlvbjtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMyLmR1cmF0aW9uLFxuICAgICAgICBlYXNlID0gX3Byb3BzMi5lYXNlLFxuICAgICAgICBmcm9tID0gX3Byb3BzMi5mcm9tLFxuICAgICAgICB0byA9IF9wcm9wczIudG8sXG4gICAgICAgIHBsYXlEaXJlY3Rpb24gPSBfcHJvcHMyLnBsYXlEaXJlY3Rpb247XG5cblxuICAgIHRoaXMuZWxhcHNlZCArPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCkgKiBwbGF5RGlyZWN0aW9uO1xuXG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZnJvbSwgdG8sIGVhc2UoY2xhbXBQcm9ncmVzcygoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKDAsIGR1cmF0aW9uLCB0aGlzLmVsYXBzZWQpKSkpO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uID0gX3Byb3BzMy5kdXJhdGlvbixcbiAgICAgICAgcGxheURpcmVjdGlvbiA9IF9wcm9wczMucGxheURpcmVjdGlvbixcbiAgICAgICAgeW95byA9IF9wcm9wczMueW95byxcbiAgICAgICAgbG9vcCA9IF9wcm9wczMubG9vcCxcbiAgICAgICAgZmxpcCA9IF9wcm9wczMuZmxpcDtcblxuICAgIHZhciBpc0NvbXBsZXRlID0gcGxheURpcmVjdGlvbiA9PT0gMSA/IHRoaXMuZWxhcHNlZCA+PSBkdXJhdGlvbiA6IHRoaXMuZWxhcHNlZCA8PSAwO1xuXG4gICAgaWYgKGlzQ29tcGxldGUgJiYgKHlveW8gfHwgbG9vcCB8fCBmbGlwKSkge1xuICAgICAgdmFyIGlzU3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgIHZhciBuZXh0U3RlcCA9IE5FWFRfU1RFUFNba2V5XTtcbiAgICAgICAgdmFyIGNvdW50UHJvcCA9IGtleSArICdDb3VudCc7XG4gICAgICAgIHZhciBzdGVwTWF4ID0gdGhpcy5nZXRQcm9wKGtleSk7XG4gICAgICAgIHZhciBzdGVwQ291bnQgPSB0aGlzLmdldFByb3AoY291bnRQcm9wKTtcblxuICAgICAgICBpZiAoc3RlcE1heCA+IHN0ZXBDb3VudCkge1xuICAgICAgICAgIHZhciBfc2V0UHJvcHM7XG5cbiAgICAgICAgICB0aGlzLnNldFByb3BzKChfc2V0UHJvcHMgPSB7fSwgX3NldFByb3BzW2NvdW50UHJvcF0gPSBzdGVwQ291bnQgKyAxLCBfc2V0UHJvcHMpKTtcbiAgICAgICAgICBuZXh0U3RlcCh0aGlzKTtcbiAgICAgICAgICBpc1N0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzU3RlcFRha2VuKSBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzQ29tcGxldGU7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLmdldEVsYXBzZWQgPSBmdW5jdGlvbiBnZXRFbGFwc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmVsYXBzZWQ7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLmZsaXAgPSBmdW5jdGlvbiBmbGlwKCkge1xuICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMucHJvcHMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG4gICAgdmFyIF9yZWYgPSBbdGhpcy5wcm9wcy50bywgdGhpcy5wcm9wcy5mcm9tXTtcbiAgICB0aGlzLnByb3BzLmZyb20gPSBfcmVmWzBdO1xuICAgIHRoaXMucHJvcHMudG8gPSBfcmVmWzFdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgIHRoaXMucHJvcHMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gVHdlZW47XG59KF8yLmRlZmF1bHQpO1xuXG5Ud2Vlbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGR1cmF0aW9uOiAzMDAsXG4gIGVhc2U6IF9lYXNpbmcuZWFzZU91dCxcbiAgZnJvbTogMCxcbiAgdG86IDEsXG4gIGZsaXA6IDAsXG4gIGZsaXBDb3VudDogMCxcbiAgeW95bzogMCxcbiAgeW95b0NvdW50OiAwLFxuICBsb29wOiAwLFxuICBsb29wQ291bnQ6IDAsXG4gIHBsYXlEaXJlY3Rpb246IDFcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIHByb3BzID0gYXJnc1swXTtcblxuICAgIHJldHVybiBuZXcgVHdlZW4ocHJvcHMpO1xuICB9IGVsc2Uge1xuICAgIHZhciBmcm9tID0gYXJnc1swXSxcbiAgICAgICAgdG8gPSBhcmdzWzFdLFxuICAgICAgICBkdXJhdGlvbiA9IGFyZ3NbMl0sXG4gICAgICAgIGVhc2UgPSBhcmdzWzNdLFxuICAgICAgICBfcHJvcHM0ID0gYXJnc1s0XTtcblxuICAgIHJldHVybiBuZXcgVHdlZW4oX2V4dGVuZHMoeyBmcm9tOiBmcm9tLCB0bzogdG8sIGR1cmF0aW9uOiBkdXJhdGlvbiwgZWFzZTogZWFzZSB9LCBfcHJvcHM0KSk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJJbU5zWVcxd1VISnZaM0psYzNNaUxDSk9SVmhVWDFOVVJWQlRJaXdpYkc5dmNDSXNJblIzWldWdUlpd2ljM1JoY25RaUxDSjViM2x2SWl3aWNtVjJaWEp6WlNJc0ltWnNhWEFpTENKVWQyVmxiaUlzSW05dVUzUmhjblFpTENKd2NtOXdjeUlzSW1SMWNtRjBhVzl1SWl3aWNHeGhlVVJwY21WamRHbHZiaUlzSW1Wc1lYQnpaV1FpTENKMWNHUmhkR1VpTENKbFlYTmxJaXdpWm5KdmJTSXNJblJ2SWl3aWFYTkJZM1JwYjI1RGIyMXdiR1YwWlNJc0ltbHpRMjl0Y0d4bGRHVWlMQ0pwYzFOMFpYQlVZV3RsYmlJc0ltdGxlU0lzSW01bGVIUlRkR1Z3SWl3aVkyOTFiblJRY205d0lpd2ljM1JsY0UxaGVDSXNJbWRsZEZCeWIzQWlMQ0p6ZEdWd1EyOTFiblFpTENKelpYUlFjbTl3Y3lJc0ltZGxkRVZzWVhCelpXUWlMQ0prWldaaGRXeDBVSEp2Y0hNaUxDSm1iR2x3UTI5MWJuUWlMQ0o1YjNsdlEyOTFiblFpTENKc2IyOXdRMjkxYm5RaUxDSmhjbWR6SWl3aWJHVnVaM1JvSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenRCUVVOQk96dEJRVU5CT3p0QlFVTkJPenM3T3pzN096czdPMEZCUlVFc1NVRkJUVUVzWjBKQlFXZENMSGxDUVVGTkxFTkJRVTRzUlVGQlV5eERRVUZVTEVOQlFYUkNPenRCUVVWQkxFbEJRVTFETEdGQlFXRTdRVUZEYWtKRExGRkJRVTBzVlVGQlEwTXNTMEZCUkR0QlFVRkJMRmRCUVZkQkxFMUJRVTFETEV0QlFVNHNSVUZCV0R0QlFVRkJMRWRCUkZjN1FVRkZha0pETEZGQlFVMHNWVUZCUTBZc1MwRkJSRHRCUVVGQkxGZEJRVmRCTEUxQlFVMUhMRTlCUVU0c1IwRkJaMEpHTEV0QlFXaENMRVZCUVZnN1FVRkJRU3hIUVVaWE8wRkJSMnBDUnl4UlFVRk5MRlZCUVVOS0xFdEJRVVE3UVVGQlFTeFhRVUZYUVN4TlFVRk5TU3hKUVVGT0xFZEJRV0ZJTEV0QlFXSXNSVUZCV0R0QlFVRkJPMEZCU0Zjc1EwRkJia0k3TzBsQlRVMUpMRXM3T3pzN096czdPenRyUWtGbFNrTXNUeXh6UWtGQlZUdEJRVUZCTEdsQ1FVTTBRaXhMUVVGTFF5eExRVVJxUXp0QlFVRkJMRkZCUTBGRExGRkJSRUVzVlVGRFFVRXNVVUZFUVR0QlFVRkJMRkZCUTFWRExHRkJSRllzVlVGRFZVRXNZVUZFVmpzN08wRkJSMUlzVTBGQlMwTXNUMEZCVEN4SFFVRm5Ra1FzYTBKQlFXdENMRU5CUVc1Q0xFZEJRWGRDTEVOQlFYaENMRWRCUVRSQ1JDeFJRVUV6UXp0QlFVTkVMRWM3TzJ0Q1FVVkVSeXhOTEhGQ1FVRlRPMEZCUVVFc2EwSkJRelpETEV0QlFVdEtMRXRCUkd4RU8wRkJRVUVzVVVGRFEwTXNVVUZFUkN4WFFVTkRRU3hSUVVSRU8wRkJRVUVzVVVGRFYwa3NTVUZFV0N4WFFVTlhRU3hKUVVSWU8wRkJRVUVzVVVGRGFVSkRMRWxCUkdwQ0xGZEJRMmxDUVN4SlFVUnFRanRCUVVGQkxGRkJRM1ZDUXl4RlFVUjJRaXhYUVVOMVFrRXNSVUZFZGtJN1FVRkJRU3hSUVVNeVFrd3NZVUZFTTBJc1YwRkRNa0pCTEdGQlJETkNPenM3UVVGSFVDeFRRVUZMUXl4UFFVRk1MRWxCUVdkQ0xIVkRRVUYxUWtRc1lVRkJka003TzBGQlJVRXNWMEZCVHl4blEwRkJjVUpKTEVsQlFYSkNMRVZCUVRKQ1F5eEZRVUV6UWl4RlFVRXJRa1lzUzBGQlMyWXNZMEZCWXl4blEwRkJjVUlzUTBGQmNrSXNSVUZCZDBKWExGRkJRWGhDTEVWQlFXdERMRXRCUVV0RkxFOUJRWFpETEVOQlFXUXNRMEZCVEN4RFFVRXZRaXhEUVVGUU8wRkJRMFFzUnpzN2EwSkJSVVJMTEdkQ0xDdENRVUZ0UWp0QlFVRkJMR3RDUVVOeFF5eExRVUZMVWl4TFFVUXhRenRCUVVGQkxGRkJRMVJETEZGQlJGTXNWMEZEVkVFc1VVRkVVenRCUVVGQkxGRkJRME5ETEdGQlJFUXNWMEZEUTBFc1lVRkVSRHRCUVVGQkxGRkJRMmRDVUN4SlFVUm9RaXhYUVVOblFrRXNTVUZFYUVJN1FVRkJRU3hSUVVOelFrZ3NTVUZFZEVJc1YwRkRjMEpCTEVsQlJIUkNPMEZCUVVFc1VVRkRORUpMTEVsQlJEVkNMRmRCUXpSQ1FTeEpRVVExUWpzN1FVRkZha0lzVVVGQlNWa3NZVUZCWTFBc2EwSkJRV3RDTEVOQlFXNUNMRWRCUVhsQ0xFdEJRVXRETEU5QlFVd3NTVUZCWjBKR0xGRkJRWHBETEVkQlFYTkVMRXRCUVV0RkxFOUJRVXdzU1VGQlowSXNRMEZCZGtZN08wRkJSVUVzVVVGQlNVMHNaVUZCWldRc1VVRkJVVWdzU1VGQlVpeEpRVUZuUWtzc1NVRkJMMElzUTBGQlNpeEZRVUV3UXp0QlFVTjRReXhWUVVGSllTeGpRVUZqTEV0QlFXeENPenRCUVVWQkxGZEJRVXNzU1VGQlNVTXNSMEZCVkN4SlFVRm5RbkJDTEZWQlFXaENMRVZCUVRSQ08wRkJRekZDTEZsQlFVMXhRaXhYUVVGWGNrSXNWMEZCVjI5Q0xFZEJRVmdzUTBGQmFrSTdRVUZEUVN4WlFVRk5SU3haUVVGWlJpeE5RVUZOTEU5QlFYaENPMEZCUTBFc1dVRkJUVWNzVlVGQlZTeExRVUZMUXl4UFFVRk1MRU5CUVdGS0xFZEJRV0lzUTBGQmFFSTdRVUZEUVN4WlFVRk5TeXhaUVVGWkxFdEJRVXRFTEU5QlFVd3NRMEZCWVVZc1UwRkJZaXhEUVVGc1FqczdRVUZGUVN4WlFVRkpReXhWUVVGVlJTeFRRVUZrTEVWQlFYbENPMEZCUVVFN08wRkJRM1pDTEdWQlFVdERMRkZCUVV3c05FSkJRMGRLTEZOQlJFZ3NTVUZEWlVjc1dVRkJXU3hEUVVRelFqdEJRVWRCU2l4dFFrRkJVeXhKUVVGVU8wRkJRMEZHTEhkQ1FVRmpMRWxCUVdRN1FVRkRSRHRCUVVOR096dEJRVVZFTEZWQlFVbEJMRmRCUVVvc1JVRkJhVUpFTEdGQlFXRXNTMEZCWWp0QlFVTnNRanM3UVVGRlJDeFhRVUZQUVN4VlFVRlFPMEZCUTBRc1J6czdhMEpCUlVSVExGVXNlVUpCUVdFN1FVRkRXQ3hYUVVGUExFdEJRVXRtTEU5QlFWbzdRVUZEUkN4SE96dHJRa0ZGUkU0c1NTeHRRa0ZCVHp0QlFVTk1MRk5CUVV0TkxFOUJRVXdzUjBGQlpTeExRVUZMU0N4TFFVRk1MRU5CUVZkRExGRkJRVmdzUjBGQmMwSXNTMEZCUzBVc1QwRkJNVU03UVVGRVN5eGxRVVU0UWl4RFFVRkRMRXRCUVV0SUxFdEJRVXdzUTBGQlYwOHNSVUZCV2l4RlFVRm5RaXhMUVVGTFVDeExRVUZNTEVOQlFWZE5MRWxCUVROQ0xFTkJSamxDTzBGQlJVb3NVMEZCUzA0c1MwRkJUQ3hEUVVGWFRTeEpRVVpRTzBGQlJXRXNVMEZCUzA0c1MwRkJUQ3hEUVVGWFR5eEZRVVo0UWpzN1FVRkhUQ3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenRyUWtGRlJGZ3NUeXh6UWtGQlZUdEJRVU5TTEZOQlFVdEpMRXRCUVV3c1EwRkJWMFVzWVVGQldDeEpRVUUwUWl4RFFVRkRMRU5CUVRkQ08wRkJRMEVzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3T3pzN1FVRjBSVWRLTEVzc1EwRkRSM0ZDTEZrc1IwRkJaVHRCUVVOd1FteENMRmxCUVZVc1IwRkVWVHRCUVVWd1Fra3NkVUpCUm05Q08wRkJSM0JDUXl4UlFVRk5MRU5CU0dNN1FVRkpjRUpETEUxQlFVa3NRMEZLWjBJN1FVRkxjRUpXTEZGQlFVMHNRMEZNWXp0QlFVMXdRblZDTEdGQlFWY3NRMEZPVXp0QlFVOXdRbnBDTEZGQlFVMHNRMEZRWXp0QlFWRndRakJDTEdGQlFWY3NRMEZTVXp0QlFWTndRamRDTEZGQlFVMHNRMEZVWXp0QlFWVndRamhDTEdGQlFWY3NRMEZXVXp0QlFWZHdRbkJDTEdsQ1FVRmxPMEZCV0Vzc1F6czdhMEpCZDBWVUxGbEJRV0U3UVVGQlFTeHZRMEZCVkhGQ0xFbEJRVk03UVVGQlZFRXNVVUZCVXp0QlFVRkJPenRCUVVNeFFpeE5RVUZKUVN4TFFVRkxReXhOUVVGTUxFdEJRV2RDTEVOQlFYQkNMRVZCUVhWQ08wRkJRVUVzVVVGRFluaENMRXRCUkdFc1IwRkRTSFZDTEVsQlJFYzdPMEZCUlhKQ0xGZEJRVThzU1VGQlNYcENMRXRCUVVvc1EwRkJWVVVzUzBGQlZpeERRVUZRTzBGQlEwUXNSMEZJUkN4TlFVZFBPMEZCUVVFc1VVRkRSMDBzU1VGRVNDeEhRVU4xUTJsQ0xFbEJSSFpETzBGQlFVRXNVVUZEVTJoQ0xFVkJSRlFzUjBGRGRVTm5RaXhKUVVSMlF6dEJRVUZCTEZGQlEyRjBRaXhSUVVSaUxFZEJRM1ZEYzBJc1NVRkVka003UVVGQlFTeFJRVU4xUW14Q0xFbEJSSFpDTEVkQlEzVkRhMElzU1VGRWRrTTdRVUZCUVN4UlFVTTJRblpDTEU5QlJEZENMRWRCUTNWRGRVSXNTVUZFZGtNN08wRkJSVXdzVjBGQlR5eEpRVUZKZWtJc1MwRkJTaXhaUVVGWlVTeFZRVUZhTEVWQlFXdENReXhOUVVGc1FpeEZRVUZ6UWs0c2EwSkJRWFJDTEVWQlFXZERTU3hWUVVGb1F5eEpRVUY1UTB3c1QwRkJla01zUlVGQlVEdEJRVU5FTzBGQlEwWXNReUlzSW1acGJHVWlPaUowZDJWbGJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaThuTzF4dWFXMXdiM0owSUhzZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbElIMGdabkp2YlNBbkxpNHZabkpoYldWemVXNWpKenRjYm1sdGNHOXlkQ0I3SUdOc1lXMXdJSDBnWm5KdmJTQW5MaTR2YVc1akwzUnlZVzV6Wm05eWJXVnljeWM3WEc1cGJYQnZjblFnZXlCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTd2daMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01nZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNXBiWEJ2Y25RZ2V5QmxZWE5sVDNWMElIMGdabkp2YlNBbkxpNHZhVzVqTDJWaGMybHVaeWM3WEc1Y2JtTnZibk4wSUdOc1lXMXdVSEp2WjNKbGMzTWdQU0JqYkdGdGNDZ3dMQ0F4S1R0Y2JseHVZMjl1YzNRZ1RrVllWRjlUVkVWUVV5QTlJSHRjYmlBZ2JHOXZjRG9nS0hSM1pXVnVLU0E5UGlCMGQyVmxiaTV6ZEdGeWRDZ3BMRnh1SUNCNWIzbHZPaUFvZEhkbFpXNHBJRDArSUhSM1pXVnVMbkpsZG1WeWMyVW9LUzV6ZEdGeWRDZ3BMRnh1SUNCbWJHbHdPaUFvZEhkbFpXNHBJRDArSUhSM1pXVnVMbVpzYVhBb0tTNXpkR0Z5ZENncFhHNTlPMXh1WEc1amJHRnpjeUJVZDJWbGJpQmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJSE4wWVhScFl5QmtaV1poZFd4MFVISnZjSE1nUFNCN1hHNGdJQ0FnWkhWeVlYUnBiMjQ2SURNd01DeGNiaUFnSUNCbFlYTmxPaUJsWVhObFQzVjBMRnh1SUNBZ0lHWnliMjA2SURBc1hHNGdJQ0FnZEc4NklERXNYRzRnSUNBZ1pteHBjRG9nTUN4Y2JpQWdJQ0JtYkdsd1EyOTFiblE2SURBc1hHNGdJQ0FnZVc5NWJ6b2dNQ3hjYmlBZ0lDQjViM2x2UTI5MWJuUTZJREFzWEc0Z0lDQWdiRzl2Y0RvZ01DeGNiaUFnSUNCc2IyOXdRMjkxYm5RNklEQXNYRzRnSUNBZ2NHeGhlVVJwY21WamRHbHZiam9nTVZ4dUlDQjlPMXh1WEc0Z0lHOXVVM1JoY25Rb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCa2RYSmhkR2x2Yml3Z2NHeGhlVVJwY21WamRHbHZiaUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNibHh1SUNBZ0lIUm9hWE11Wld4aGNITmxaQ0E5SUNod2JHRjVSR2x5WldOMGFXOXVJRDA5UFNBeEtTQS9JREFnT2lCa2RYSmhkR2x2Ymp0Y2JpQWdmVnh1WEc0Z0lIVndaR0YwWlNncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdSMWNtRjBhVzl1TENCbFlYTmxMQ0JtY205dExDQjBieXdnY0d4aGVVUnBjbVZqZEdsdmJpQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JseHVJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQXJQU0IwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VvS1NBcUlIQnNZWGxFYVhKbFkzUnBiMjQ3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vWm5KdmJTd2dkRzhzSUdWaGMyVW9ZMnhoYlhCUWNtOW5jbVZ6Y3loblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTZ3dMQ0JrZFhKaGRHbHZiaXdnZEdocGN5NWxiR0Z3YzJWa0tTa3BLVHRjYmlBZ2ZWeHVYRzRnSUdselFXTjBhVzl1UTI5dGNHeGxkR1VvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJrZFhKaGRHbHZiaXdnY0d4aGVVUnBjbVZqZEdsdmJpd2dlVzk1Ynl3Z2JHOXZjQ3dnWm14cGNDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0JzWlhRZ2FYTkRiMjF3YkdWMFpTQTlJQ2h3YkdGNVJHbHlaV04wYVc5dUlEMDlQU0F4S1NBL0lDaDBhR2x6TG1Wc1lYQnpaV1FnUGowZ1pIVnlZWFJwYjI0cElEb2dLSFJvYVhNdVpXeGhjSE5sWkNBOFBTQXdLVHRjYmx4dUlDQWdJR2xtSUNocGMwTnZiWEJzWlhSbElDWW1JQ2g1YjNsdklIeDhJR3h2YjNBZ2ZId2dabXhwY0NrcElIdGNiaUFnSUNBZ0lHeGxkQ0JwYzFOMFpYQlVZV3RsYmlBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnVGtWWVZGOVRWRVZRVXlrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCdVpYaDBVM1JsY0NBOUlFNUZXRlJmVTFSRlVGTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWTI5MWJuUlFjbTl3SUQwZ2EyVjVJQ3NnSjBOdmRXNTBKenRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjM1JsY0UxaGVDQTlJSFJvYVhNdVoyVjBVSEp2Y0NoclpYa3BPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnpkR1Z3UTI5MWJuUWdQU0IwYUdsekxtZGxkRkJ5YjNBb1kyOTFiblJRY205d0tUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2MzUmxjRTFoZUNBK0lITjBaWEJEYjNWdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXVjMlYwVUhKdmNITW9lMXh1SUNBZ0lDQWdJQ0FnSUNBZ1cyTnZkVzUwVUhKdmNGMDZJSE4wWlhCRGIzVnVkQ0FySURGY2JpQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnSUNCdVpYaDBVM1JsY0NoMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnSUNCcGMxTjBaWEJVWVd0bGJpQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lnS0dselUzUmxjRlJoYTJWdUtTQnBjME52YlhCc1pYUmxJRDBnWm1Gc2MyVTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUdselEyOXRjR3hsZEdVN1hHNGdJSDFjYmx4dUlDQm5aWFJGYkdGd2MyVmtLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1Wc1lYQnpaV1E3WEc0Z0lIMWNibHh1SUNCbWJHbHdLQ2tnZTF4dUlDQWdJSFJvYVhNdVpXeGhjSE5sWkNBOUlIUm9hWE11Y0hKdmNITXVaSFZ5WVhScGIyNGdMU0IwYUdsekxtVnNZWEJ6WldRN1hHNGdJQ0FnVzNSb2FYTXVjSEp2Y0hNdVpuSnZiU3dnZEdocGN5NXdjbTl3Y3k1MGIxMGdQU0JiZEdocGN5NXdjbTl3Y3k1MGJ5d2dkR2hwY3k1d2NtOXdjeTVtY205dFhUdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJSEpsZG1WeWMyVW9LU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTV3YkdGNVJHbHlaV04wYVc5dUlDbzlJQzB4TzF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNndUxpNWhjbWR6S1NBOVBpQjdYRzRnSUdsbUlDaGhjbWR6TG14bGJtZDBhQ0E5UFQwZ01Ta2dlMXh1SUNBZ0lHTnZibk4wSUZzZ2NISnZjSE1nWFNBOUlHRnlaM003WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJVZDJWbGJpaHdjbTl3Y3lrN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ1kyOXVjM1FnV3lCbWNtOXRMQ0IwYnl3Z1pIVnlZWFJwYjI0c0lHVmhjMlVzSUhCeWIzQnpJRjBnUFNCaGNtZHpPMXh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dWSGRsWlc0b2V5Qm1jbTl0TENCMGJ5d2daSFZ5WVhScGIyNHNJR1ZoYzJVc0lDNHVMbkJ5YjNCeklIMHBPMXh1SUNCOVhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY2hhaW4gPSByZXF1aXJlKCcuL2NoYWluJyk7XG5cbnZhciBfY2hhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hhaW4pO1xuXG52YXIgX3BhcmFsbGVsID0gcmVxdWlyZSgnLi9wYXJhbGxlbCcpO1xuXG52YXIgX3BhcmFsbGVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcmFsbGVsKTtcblxudmFyIF9kZWxheSA9IHJlcXVpcmUoJy4vZGVsYXknKTtcblxudmFyIF9kZWxheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWxheSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHBhcmFsbGVsIEFjdGlvbiBjb21wb3NlZCBvZiBjaGFpbmVkXG4gKiBkZWxheSBhbmQgYWN0aW9ucy4gSW50ZXJ2YWwgY2FuIGJlIGVpdGhlciBhIG51bWJlclxuICogdG8gbXVsdGlwbHkgYnkgYGlgIG9yIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHByb3ZpZGVkIGBpYFxuICpcbiAqIFN0cmFpZ2h0IGNyaWJiZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL2Jsb2IvMjRjNzJmNTEzZTQ4ZjBiZGM0MDgyMGI0MzI2MjMyOGZlMmMzMDFkNC9MaWJyYXJpZXMvQW5pbWF0ZWQvc3JjL0FuaW1hdGVkSW1wbGVtZW50YXRpb24uanMjTDIwMzFcbiAqIF4gVGhpcyBmdW5jdGlvbiBzb2xkIGEgcHJldmlvdXNseS1jb25mbGljdGVkIG1lIG9uIHRoZSBtZXJpdCBvZiBtb3ZpbmcgZnJvbVxuICogalF1ZXJ5LXN0eWxlIG11bHRpLXByb3BlcnR5IGFuaW1hdGlvbnMgdG8gc2luZ2xlLXByb3BlcnR5LlxuICogQHBhcmFtICB7YXJyYXl9IGFjdGlvbnNcbiAqIEBwYXJhbSAge2Z1bmN0aW9uIHwgbnVtYmVyfSBpbnRlcnZhbFxuICogQHJldHVybiB7QWN0aW9ufVxuICovXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgaW50ZXJ2YWwsIG9uQ29tcGxldGUpIHtcbiAgdmFyIGludGVydmFsSXNGdW5jdGlvbiA9ICgwLCBfdXRpbHMuaXNGdW5jKShpbnRlcnZhbCk7XG5cbiAgcmV0dXJuICgwLCBfcGFyYWxsZWwyLmRlZmF1bHQpKGFjdGlvbnMubWFwKGZ1bmN0aW9uIChhY3Rpb24sIGkpIHtcbiAgICB2YXIgdGltZVRvRGVsYXkgPSBpbnRlcnZhbElzRnVuY3Rpb24gPyBpbnRlcnZhbChpKSA6IGkgKiBpbnRlcnZhbDtcbiAgICByZXR1cm4gKDAsIF9jaGFpbjIuZGVmYXVsdCkoWygwLCBfZGVsYXkyLmRlZmF1bHQpKHRpbWVUb0RlbGF5KSwgYWN0aW9uXSk7XG4gIH0pLCB7IG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM04wWVdkblpYSXVhbk1pWFN3aWJtRnRaWE1pT2xzaVlXTjBhVzl1Y3lJc0ltbHVkR1Z5ZG1Gc0lpd2liMjVEYjIxd2JHVjBaU0lzSW1sdWRHVnlkbUZzU1hOR2RXNWpkR2x2YmlJc0ltMWhjQ0lzSW1GamRHbHZiaUlzSW1raUxDSjBhVzFsVkc5RVpXeGhlU0pkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJSVUU3T3pzN096czdPenM3T3p0clFrRlpaU3hWUVVGRFFTeFBRVUZFTEVWQlFWVkRMRkZCUVZZc1JVRkJiMEpETEZWQlFYQkNMRVZCUVcxRE8wRkJRMmhFTEUxQlFVMURMSEZDUVVGeFFpeHRRa0ZCVDBZc1VVRkJVQ3hEUVVFelFqczdRVUZGUVN4VFFVRlBMSGRDUVVGVFJDeFJRVUZSU1N4SFFVRlNMRU5CUVZrc1ZVRkJRME1zVFVGQlJDeEZRVUZUUXl4RFFVRlVMRVZCUVdVN1FVRkRla01zVVVGQlRVTXNZMEZCWlVvc2EwSkJRVVFzUjBGQmRVSkdMRk5CUVZOTExFTkJRVlFzUTBGQmRrSXNSMEZCY1VOQkxFbEJRVWxNTEZGQlFUZEVPMEZCUTBFc1YwRkJUeXh4UWtGQlRTeERRVU5ZTEhGQ1FVRk5UU3hYUVVGT0xFTkJSRmNzUlVGRldFWXNUVUZHVnl4RFFVRk9MRU5CUVZBN1FVRkpSQ3hIUVU1bExFTkJRVlFzUlVGTlNDeEZRVUZGU0N4elFrRkJSaXhGUVU1SExFTkJRVkE3UVVGUFJDeERJaXdpWm1sc1pTSTZJbk4wWVdkblpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1kyaGhhVzRnWm5KdmJTQW5MaTlqYUdGcGJpYzdYRzVwYlhCdmNuUWdjR0Z5WVd4c1pXd2dabkp2YlNBbkxpOXdZWEpoYkd4bGJDYzdYRzVwYlhCdmNuUWdaR1ZzWVhrZ1puSnZiU0FuTGk5a1pXeGhlU2M3WEc1cGJYQnZjblFnZXlCcGMwWjFibU1nZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpYTWdZU0J1WlhjZ2NHRnlZV3hzWld3Z1FXTjBhVzl1SUdOdmJYQnZjMlZrSUc5bUlHTm9ZV2x1WldSY2JpQXFJR1JsYkdGNUlHRnVaQ0JoWTNScGIyNXpMaUJKYm5SbGNuWmhiQ0JqWVc0Z1ltVWdaV2wwYUdWeUlHRWdiblZ0WW1WeVhHNGdLaUIwYnlCdGRXeDBhWEJzZVNCaWVTQmdhV0FnYjNJZ1lTQm1kVzVqZEdsdmJpQjBhR0YwSUhkcGJHd2dZbVVnY0hKdmRtbGtaV1FnWUdsZ1hHNGdLbHh1SUNvZ1UzUnlZV2xuYUhRZ1kzSnBZbUpsWkNCbWNtOXRJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzltWVdObFltOXZheTl5WldGamRDMXVZWFJwZG1VdllteHZZaTh5TkdNM01tWTFNVE5sTkRobU1HSmtZelF3T0RJd1lqUXpNall5TXpJNFptVXlZek13TVdRMEwweHBZbkpoY21sbGN5OUJibWx0WVhSbFpDOXpjbU12UVc1cGJXRjBaV1JKYlhCc1pXMWxiblJoZEdsdmJpNXFjeU5NTWpBek1WeHVJQ29nWGlCVWFHbHpJR1oxYm1OMGFXOXVJSE52YkdRZ1lTQndjbVYyYVc5MWMyeDVMV052Ym1ac2FXTjBaV1FnYldVZ2IyNGdkR2hsSUcxbGNtbDBJRzltSUcxdmRtbHVaeUJtY205dFhHNGdLaUJxVVhWbGNua3RjM1I1YkdVZ2JYVnNkR2t0Y0hKdmNHVnlkSGtnWVc1cGJXRjBhVzl1Y3lCMGJ5QnphVzVuYkdVdGNISnZjR1Z5ZEhrdVhHNGdLaUJBY0dGeVlXMGdJSHRoY25KaGVYMGdZV04wYVc5dWMxeHVJQ29nUUhCaGNtRnRJQ0I3Wm5WdVkzUnBiMjRnZkNCdWRXMWlaWEo5SUdsdWRHVnlkbUZzWEc0Z0tpQkFjbVYwZFhKdUlIdEJZM1JwYjI1OVhHNGdLaTljYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hoWTNScGIyNXpMQ0JwYm5SbGNuWmhiQ3dnYjI1RGIyMXdiR1YwWlNrZ1BUNGdlMXh1SUNCamIyNXpkQ0JwYm5SbGNuWmhiRWx6Um5WdVkzUnBiMjRnUFNCcGMwWjFibU1vYVc1MFpYSjJZV3dwTzF4dVhHNGdJSEpsZEhWeWJpQndZWEpoYkd4bGJDaGhZM1JwYjI1ekxtMWhjQ2dvWVdOMGFXOXVMQ0JwS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnZEdsdFpWUnZSR1ZzWVhrZ1BTQW9hVzUwWlhKMllXeEpjMFoxYm1OMGFXOXVLU0EvSUdsdWRHVnlkbUZzS0drcElEb2dhU0FxSUdsdWRHVnlkbUZzTzF4dUlDQWdJSEpsZEhWeWJpQmphR0ZwYmloYlhHNGdJQ0FnSUNCa1pXeGhlU2gwYVcxbFZHOUVaV3hoZVNrc1hHNGdJQ0FnSUNCaFkzUnBiMjVjYmlBZ0lDQmRLVHRjYmlBZ2ZTa3NJSHNnYjI1RGIyMXdiR1YwWlNCOUtUdGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvc3RhZ2dlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVmFsdWUgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVmFsdWUsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFZhbHVlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWYWx1ZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFZhbHVlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQodikge1xuICAgIHRoaXMudG9VcGRhdGUgPSB2O1xuICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgfTtcblxuICBWYWx1ZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnRvVXBkYXRlO1xuICB9O1xuXG4gIHJldHVybiBWYWx1ZTtcbn0oXzIuZGVmYXVsdCk7XG5cblZhbHVlLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGN1cnJlbnQsIG9uVXBkYXRlKSB7XG4gIHJldHVybiBuZXcgVmFsdWUoeyBjdXJyZW50OiBjdXJyZW50LCBvblVwZGF0ZTogb25VcGRhdGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1poYkhWbExtcHpJbDBzSW01aGJXVnpJanBiSWxaaGJIVmxJaXdpYzJWMElpd2lkaUlzSW5SdlZYQmtZWFJsSWl3aWMyTm9aV1IxYkdWa1ZYQmtZWFJsSWl3aWRYQmtZWFJsSWl3aVpHVm1ZWFZzZEZCeWIzQnpJaXdpY0dGemMybDJaU0lzSW1OMWNuSmxiblFpTENKdmJsVndaR0YwWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3T3pzN096czdTVUZGVFVFc1N6czdPenM3T3pzN08ydENRVXRLUXl4SExHZENRVUZKUXl4RExFVkJRVWM3UVVGRFRDeFRRVUZMUXl4UlFVRk1MRWRCUVdkQ1JDeERRVUZvUWp0QlFVTkJMR3REUVVGakxFdEJRVXRGTEdWQlFXNUNPMEZCUTBRc1J6czdhMEpCUlVSRExFMHNjVUpCUVZNN1FVRkRVQ3hYUVVGUExFdEJRVXRHTEZGQlFWbzdRVUZEUkN4SE96czdPenRCUVZwSFNDeExMRU5CUTBkTkxGa3NSMEZCWlR0QlFVTndRa01zVjBGQlV6dEJRVVJYTEVNN08ydENRV05VTEZWQlFVTkRMRTlCUVVRc1JVRkJWVU1zVVVGQlZqdEJRVUZCTEZOQlFYVkNMRWxCUVVsVUxFdEJRVW9zUTBGQlZTeEZRVUZGVVN4blFrRkJSaXhGUVVGWFF5eHJRa0ZCV0N4RlFVRldMRU5CUVhaQ08wRkJRVUVzUXlJc0ltWnBiR1VpT2lKMllXeDFaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk4bk8xeHVhVzF3YjNKMElIc2diMjVHY21GdFpWVndaR0YwWlNCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVjYm1Oc1lYTnpJRlpoYkhWbElHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0J3WVhOemFYWmxPaUIwY25WbFhHNGdJSDA3WEc1Y2JpQWdjMlYwS0hZcElIdGNiaUFnSUNCMGFHbHpMblJ2VlhCa1lYUmxJRDBnZGp0Y2JpQWdJQ0J2YmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11YzJOb1pXUjFiR1ZrVlhCa1lYUmxLVHRjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1MGIxVndaR0YwWlR0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1kzVnljbVZ1ZEN3Z2IyNVZjR1JoZEdVcElEMCtJRzVsZHlCV1lXeDFaU2g3SUdOMWNuSmxiblFzSUc5dVZYQmtZWFJsSUgwcE8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3ZhbHVlLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX29uTmV4dEZyYW1lID0gcmVxdWlyZSgnLi9vbi1uZXh0LWZyYW1lJyk7XG5cbnZhciBfb25OZXh0RnJhbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb25OZXh0RnJhbWUpO1xuXG52YXIgX2NyZWF0ZVJlbmRlclN0ZXAgPSByZXF1aXJlKCcuL2NyZWF0ZS1yZW5kZXItc3RlcCcpO1xuXG52YXIgX2NyZWF0ZVJlbmRlclN0ZXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlUmVuZGVyU3RlcCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcblxuLyoqXG4gKiBNYXhpbXVtIHBlcm1pdHRlZCBtcyBzaW5jZSBsYXN0IGZyYW1lXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgTUFYX0VMQVBTRUQgPSAyMDtcblxuLyoqXG4gKiBDdXJyZW50IGZyYW1lc3RhbXBcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBjdXJyZW50RnJhbWVzdGFtcCA9ICgwLCBfdXRpbHMuY3VycmVudFRpbWUpKCk7XG5cbnZhciBlbGFwc2VkID0gMDtcblxuLyoqXG4gKiBGYWN0b3IgdG8gbXVsdGlwbHkgYGVsYXBzZWRgIGJ5IC0gXG4gKiAwLjUgd291bGQgYmUgc2xvdyBtb3Rpb24sIDIgd291bGQgYmUgZmFzdFxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIGRpbGF0aW9uID0gMTtcblxuZnVuY3Rpb24gc3RhcnRSZW5kZXJMb29wKCkge1xuICBpZiAoIXdpbGxSZW5kZXJOZXh0RnJhbWUpIHtcbiAgICB3aWxsUmVuZGVyTmV4dEZyYW1lID0gdHJ1ZTtcbiAgICAoMCwgX29uTmV4dEZyYW1lMi5kZWZhdWx0KShwcm9jZXNzRnJhbWUpO1xuICB9XG59XG5cbnZhciBmcmFtZVN0YXJ0ID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lVXBkYXRlID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lUmVuZGVyID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lRW5kID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xuXG5mdW5jdGlvbiBwcm9jZXNzRnJhbWUoZnJhbWVzdGFtcCkge1xuICB3aWxsUmVuZGVyTmV4dEZyYW1lID0gZmFsc2U7XG4gIGVsYXBzZWQgPSBNYXRoLm1heChNYXRoLm1pbihmcmFtZXN0YW1wIC0gY3VycmVudEZyYW1lc3RhbXAsIE1BWF9FTEFQU0VEKSwgMSkgKiBkaWxhdGlvbjtcbiAgY3VycmVudEZyYW1lc3RhbXAgPSBmcmFtZXN0YW1wO1xuXG4gIGZyYW1lU3RhcnQucHJvY2VzcygpO1xuICBmcmFtZVVwZGF0ZS5wcm9jZXNzKCk7XG4gIGZyYW1lUmVuZGVyLnByb2Nlc3MoKTtcbiAgZnJhbWVFbmQucHJvY2VzcygpO1xufVxuXG52YXIgb25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LnNjaGVkdWxlO1xudmFyIG9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLm9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5zY2hlZHVsZTtcbnZhciBvbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuc2NoZWR1bGU7XG52YXIgb25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGZyYW1lRW5kLnNjaGVkdWxlO1xudmFyIGNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBmcmFtZUVuZC5jYW5jZWw7XG5cbnZhciB0aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGVsYXBzZWQ7XG59O1xudmFyIGN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY3VycmVudEZyYW1lc3RhbXA7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2xzaWQybHNiRkpsYm1SbGNrNWxlSFJHY21GdFpTSXNJazFCV0Y5RlRFRlFVMFZFSWl3aVkzVnljbVZ1ZEVaeVlXMWxjM1JoYlhBaUxDSmxiR0Z3YzJWa0lpd2laR2xzWVhScGIyNGlMQ0p6ZEdGeWRGSmxibVJsY2t4dmIzQWlMQ0p3Y205alpYTnpSbkpoYldVaUxDSm1jbUZ0WlZOMFlYSjBJaXdpWm5KaGJXVlZjR1JoZEdVaUxDSm1jbUZ0WlZKbGJtUmxjaUlzSW1aeVlXMWxSVzVrSWl3aVpuSmhiV1Z6ZEdGdGNDSXNJazFoZEdnaUxDSnRZWGdpTENKdGFXNGlMQ0p3Y205alpYTnpJaXdpYjI1R2NtRnRaVk4wWVhKMElpd2ljMk5vWldSMWJHVWlMQ0p2YmtaeVlXMWxWWEJrWVhSbElpd2liMjVHY21GdFpWSmxibVJsY2lJc0ltOXVSbkpoYldWRmJtUWlMQ0pqWVc1alpXeFBia1p5WVcxbFUzUmhjblFpTENKallXNWpaV3dpTENKallXNWpaV3hQYmtaeVlXMWxWWEJrWVhSbElpd2lZMkZ1WTJWc1QyNUdjbUZ0WlZKbGJtUmxjaUlzSW1OaGJtTmxiRTl1Um5KaGJXVkZibVFpTENKMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVaUxDSmpkWEp5Wlc1MFJuSmhiV1ZVYVcxbGMzUmhiWEFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUlVFc1NVRkJTVUVzYzBKQlFYTkNMRXRCUVRGQ096dEJRVVZCT3pzN08wRkJTVUVzU1VGQlRVTXNZMEZCWXl4RlFVRndRanM3UVVGRlFUczdPenRCUVVsQkxFbEJRVWxETEc5Q1FVRnZRaXg1UWtGQmVFSTdPMEZCUlVFc1NVRkJTVU1zVlVGQlZTeERRVUZrT3p0QlFVVkJPenM3T3p0QlFVdEJMRWxCUVVsRExGZEJRVmNzUTBGQlpqczdRVUZGUVN4VFFVRlRReXhsUVVGVUxFZEJRVEpDTzBGQlEzcENMRTFCUVVrc1EwRkJRMHdzYlVKQlFVd3NSVUZCTUVJN1FVRkRlRUpCTERCQ1FVRnpRaXhKUVVGMFFqdEJRVU5CTEN0Q1FVRlpUU3haUVVGYU8wRkJRMFE3UVVGRFJqczdRVUZGUkN4SlFVRk5ReXhoUVVGaExHZERRVUZwUWtZc1pVRkJha0lzUTBGQmJrSTdRVUZEUVN4SlFVRk5SeXhqUVVGakxHZERRVUZwUWtnc1pVRkJha0lzUTBGQmNFSTdRVUZEUVN4SlFVRk5TU3hqUVVGakxHZERRVUZwUWtvc1pVRkJha0lzUTBGQmNFSTdRVUZEUVN4SlFVRk5TeXhYUVVGWExHZERRVUZwUWt3c1pVRkJha0lzUTBGQmFrSTdPMEZCUlVFc1UwRkJVME1zV1VGQlZDeERRVUZ6UWtzc1ZVRkJkRUlzUlVGQmEwTTdRVUZEYUVOWUxIZENRVUZ6UWl4TFFVRjBRanRCUVVOQlJ5eFpRVUZWVXl4TFFVRkxReXhIUVVGTUxFTkJRVk5FTEV0QlFVdEZMRWRCUVV3c1EwRkJVMGdzWVVGQllWUXNhVUpCUVhSQ0xFVkJRWGxEUkN4WFFVRjZReXhEUVVGVUxFVkJRV2RGTEVOQlFXaEZMRWxCUVhGRlJ5eFJRVUV2UlR0QlFVTkJSaXh6UWtGQmIwSlRMRlZCUVhCQ096dEJRVVZCU2l4aFFVRlhVU3hQUVVGWU8wRkJRMEZRTEdOQlFWbFBMRTlCUVZvN1FVRkRRVTRzWTBGQldVMHNUMEZCV2p0QlFVTkJUQ3hYUVVGVFN5eFBRVUZVTzBGQlEwUTdPMEZCUlUwc1NVRkJUVU1zYzBOQlFXVlVMRmRCUVZkVkxGRkJRV2hETzBGQlEwRXNTVUZCVFVNc2QwTkJRV2RDVml4WlFVRlpVeXhSUVVGc1F6dEJRVU5CTEVsQlFVMUZMSGREUVVGblFsWXNXVUZCV1ZFc1VVRkJiRU03UVVGRFFTeEpRVUZOUnl4clEwRkJZVllzVTBGQlUwOHNVVUZCTlVJN1FVRkRRU3hKUVVGTlNTeHJSRUZCY1VKa0xGZEJRVmRsTEUxQlFYUkRPMEZCUTBFc1NVRkJUVU1zYjBSQlFYTkNaaXhaUVVGWll5eE5RVUY0UXp0QlFVTkJMRWxCUVUxRkxHOUVRVUZ6UW1Zc1dVRkJXV0VzVFVGQmVFTTdRVUZEUVN4SlFVRk5SeXc0UTBGQmJVSm1MRk5CUVZOWkxFMUJRV3hET3p0QlFVVkJMRWxCUVUxSkxHdEVRVUZ4UWp0QlFVRkJMRk5CUVUxMlFpeFBRVUZPTzBGQlFVRXNRMEZCTTBJN1FVRkRRU3hKUVVGTmQwSXNkMFJCUVhkQ08wRkJRVUVzVTBGQlRYcENMR2xDUVVGT08wRkJRVUVzUTBGQk9VSWlMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnYjI1T1pYaDBSbkpoYldVZ1puSnZiU0FuTGk5dmJpMXVaWGgwTFdaeVlXMWxKenRjYm1sdGNHOXlkQ0JqY21WaGRHVlNaVzVrWlhKVGRHVndJR1p5YjIwZ0p5NHZZM0psWVhSbExYSmxibVJsY2kxemRHVndKenRjYm1sdGNHOXlkQ0I3SUdOMWNuSmxiblJVYVcxbElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dWJHVjBJSGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VnUFNCbVlXeHpaVHRjYmx4dUx5b3FYRzRnS2lCTllYaHBiWFZ0SUhCbGNtMXBkSFJsWkNCdGN5QnphVzVqWlNCc1lYTjBJR1p5WVcxbFhHNGdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ292WEc1amIyNXpkQ0JOUVZoZlJVeEJVRk5GUkNBOUlESXdPMXh1WEc0dktpcGNiaUFxSUVOMWNuSmxiblFnWm5KaGJXVnpkR0Z0Y0Z4dUlDb2dRSFI1Y0dVZ2UwNTFiV0psY24xY2JpQXFMMXh1YkdWMElHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd0lEMGdZM1Z5Y21WdWRGUnBiV1VvS1R0Y2JseHViR1YwSUdWc1lYQnpaV1FnUFNBd08xeHVYRzR2S2lwY2JpQXFJRVpoWTNSdmNpQjBieUJ0ZFd4MGFYQnNlU0JnWld4aGNITmxaR0FnWW5rZ0xTQmNiaUFxSURBdU5TQjNiM1ZzWkNCaVpTQnpiRzkzSUcxdmRHbHZiaXdnTWlCM2IzVnNaQ0JpWlNCbVlYTjBYRzRnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNvdlhHNXNaWFFnWkdsc1lYUnBiMjRnUFNBeE8xeHVYRzVtZFc1amRHbHZiaUJ6ZEdGeWRGSmxibVJsY2t4dmIzQW9LU0I3WEc0Z0lHbG1JQ2doZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNrZ2UxeHVJQ0FnSUhkcGJHeFNaVzVrWlhKT1pYaDBSbkpoYldVZ1BTQjBjblZsTzF4dUlDQWdJRzl1VG1WNGRFWnlZVzFsS0hCeWIyTmxjM05HY21GdFpTazdYRzRnSUgxY2JuMWNibHh1WTI5dWMzUWdabkpoYldWVGRHRnlkQ0E5SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLVHRjYm1OdmJuTjBJR1p5WVcxbFZYQmtZWFJsSUQwZ1kzSmxZWFJsVW1WdVpHVnlVM1JsY0NoemRHRnlkRkpsYm1SbGNreHZiM0FwTzF4dVkyOXVjM1FnWm5KaGJXVlNaVzVrWlhJZ1BTQmpjbVZoZEdWU1pXNWtaWEpUZEdWd0tITjBZWEowVW1WdVpHVnlURzl2Y0NrN1hHNWpiMjV6ZENCbWNtRnRaVVZ1WkNBOUlHTnlaV0YwWlZKbGJtUmxjbE4wWlhBb2MzUmhjblJTWlc1a1pYSk1iMjl3S1R0Y2JseHVablZ1WTNScGIyNGdjSEp2WTJWemMwWnlZVzFsS0daeVlXMWxjM1JoYlhBcElIdGNiaUFnZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNBOUlHWmhiSE5sTzF4dUlDQmxiR0Z3YzJWa0lEMGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9abkpoYldWemRHRnRjQ0F0SUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TENCTlFWaGZSVXhCVUZORlJDa3NJREVwSUNvZ1pHbHNZWFJwYjI0N1hHNGdJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdJRDBnWm5KaGJXVnpkR0Z0Y0R0Y2JseHVJQ0JtY21GdFpWTjBZWEowTG5CeWIyTmxjM01vS1R0Y2JpQWdabkpoYldWVmNHUmhkR1V1Y0hKdlkyVnpjeWdwTzF4dUlDQm1jbUZ0WlZKbGJtUmxjaTV3Y205alpYTnpLQ2s3WEc0Z0lHWnlZVzFsUlc1a0xuQnliMk5sYzNNb0tUdGNibjFjYmx4dVpYaHdiM0owSUdOdmJuTjBJRzl1Um5KaGJXVlRkR0Z5ZENBOUlHWnlZVzFsVTNSaGNuUXVjMk5vWldSMWJHVTdYRzVsZUhCdmNuUWdZMjl1YzNRZ2IyNUdjbUZ0WlZWd1pHRjBaU0E5SUdaeVlXMWxWWEJrWVhSbExuTmphR1ZrZFd4bE8xeHVaWGh3YjNKMElHTnZibk4wSUc5dVJuSmhiV1ZTWlc1a1pYSWdQU0JtY21GdFpWSmxibVJsY2k1elkyaGxaSFZzWlR0Y2JtVjRjRzl5ZENCamIyNXpkQ0J2YmtaeVlXMWxSVzVrSUQwZ1puSmhiV1ZGYm1RdWMyTm9aV1IxYkdVN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWTjBZWEowSUQwZ1puSmhiV1ZUZEdGeWRDNWpZVzVqWld3N1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlNBOUlHWnlZVzFsVlhCa1lYUmxMbU5oYm1ObGJEdGNibVY0Y0c5eWRDQmpiMjV6ZENCallXNWpaV3hQYmtaeVlXMWxVbVZ1WkdWeUlEMGdabkpoYldWU1pXNWtaWEl1WTJGdVkyVnNPMXh1Wlhod2IzSjBJR052Ym5OMElHTmhibU5sYkU5dVJuSmhiV1ZGYm1RZ1BTQm1jbUZ0WlVWdVpDNWpZVzVqWld3N1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ1BTQW9LU0E5UGlCbGJHRndjMlZrTzF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUkdjbUZ0WlZScGJXVnpkR0Z0Y0NBOUlDZ3BJRDArSUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFjdGlvbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgdGhpcy5zY2hlZHVsZWRVcGRhdGUgPSB0aGlzLnNjaGVkdWxlZFVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyk7XG5cbiAgICB0aGlzLnNldFByb3BzKHByb3BzKTtcblxuICAgIHRoaXMuY3VycmVudCA9IHByb3BzLmN1cnJlbnQgfHwgcHJvcHMuZnJvbSB8fCAwO1xuICB9XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBvblN0YXJ0ID0gX3Byb3BzLm9uU3RhcnQsXG4gICAgICAgIF9vblN0YXJ0ID0gX3Byb3BzLl9vblN0YXJ0LFxuICAgICAgICBwYXNzaXZlID0gX3Byb3BzLnBhc3NpdmU7XG5cblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdGFydCkgdGhpcy5vblN0YXJ0KCk7XG4gICAgaWYgKG9uU3RhcnQpIG9uU3RhcnQodGhpcyk7XG4gICAgaWYgKF9vblN0YXJ0KSBfb25TdGFydCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBvblN0b3AgPSBfcHJvcHMyLm9uU3RvcCxcbiAgICAgICAgX29uU3RvcCA9IF9wcm9wczIuX29uU3RvcCxcbiAgICAgICAgcGFzc2l2ZSA9IF9wcm9wczIucGFzc2l2ZTtcblxuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdG9wKSB0aGlzLm9uU3RvcCgpO1xuICAgIGlmIChvblN0b3ApIG9uU3RvcCh0aGlzKTtcbiAgICBpZiAoX29uU3RvcCkgX29uU3RvcCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uQ29tcGxldGUgPSBfcHJvcHMzLm9uQ29tcGxldGUsXG4gICAgICAgIF9vbkNvbXBsZXRlID0gX3Byb3BzMy5fb25Db21wbGV0ZTtcblxuXG4gICAgdGhpcy5zdG9wKCk7XG5cbiAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSh0aGlzKTtcbiAgICBpZiAoX29uQ29tcGxldGUpIF9vbkNvbXBsZXRlKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZWRVcGRhdGUgPSBmdW5jdGlvbiBzY2hlZHVsZWRVcGRhdGUoKSB7XG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcbiAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uVXBkYXRlID0gX3Byb3BzNC5vblVwZGF0ZSxcbiAgICAgICAgcGFzc2l2ZSA9IF9wcm9wczQucGFzc2l2ZTtcblxuXG4gICAgaWYgKHRoaXMudXBkYXRlKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnVwZGF0ZSh0aGlzLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlmIChvblVwZGF0ZSkgb25VcGRhdGUodGhpcy5jdXJyZW50LCB0aGlzKTtcbiAgICB0aGlzLmZpcmVMaXN0ZW5lcnMoKTtcblxuICAgIGlmICghcGFzc2l2ZSAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiB0aGlzLmlzQWN0aW9uQ29tcGxldGUoKSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbiBzZXRQcm9wcyhwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgcHJvcHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQodikge1xuICAgIHRoaXMuY3VycmVudCA9IHY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXRQcm9wID0gZnVuY3Rpb24gZ2V0UHJvcChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wc1trZXldO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gKDAsIF9jYWxjLnNwZWVkUGVyU2Vjb25kKSh0aGlzLmN1cnJlbnQgLSB0aGlzLnByZXYsIHRoaXMubGFzdFVwZGF0ZWQpO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IFtdO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gdGhpcy5udW1MaXN0ZW5lcnMgfHwgMDtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzKys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHZhciBsaXN0ZW5lckluZGV4ID0gdGhpcy5saXN0ZW5lcnMgPyB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA6IC0xO1xuICAgIGlmIChsaXN0ZW5lckluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMtLTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5maXJlTGlzdGVuZXJzID0gZnVuY3Rpb24gZmlyZUxpc3RlbmVycygpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuZ2V0KCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bUxpc3RlbmVyczsgaSsrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tpXShjdXJyZW50LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIEFjdGlvbjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSWtGamRHbHZiaUlzSW5CeWIzQnpJaXdpYzJOb1pXUjFiR1ZrVlhCa1lYUmxJaXdpWW1sdVpDSXNJbU52Ym5OMGNuVmpkRzl5SWl3aVpHVm1ZWFZzZEZCeWIzQnpJaXdpYzJWMFVISnZjSE1pTENKamRYSnlaVzUwSWl3aVpuSnZiU0lzSW5OMFlYSjBJaXdpYjI1VGRHRnlkQ0lzSWw5dmJsTjBZWEowSWl3aWNHRnpjMmwyWlNJc0ltbHpRV04wYVhabElpd2ljM1J2Y0NJc0ltOXVVM1J2Y0NJc0lsOXZibE4wYjNBaUxDSmpiMjF3YkdWMFpTSXNJbTl1UTI5dGNHeGxkR1VpTENKZmIyNURiMjF3YkdWMFpTSXNJbXhoYzNSVmNHUmhkR1ZrSWl3aWNISmxkaUlzSW05dVZYQmtZWFJsSWl3aWRYQmtZWFJsSWl3aVptbHlaVXhwYzNSbGJtVnljeUlzSW1selFXTjBhVzl1UTI5dGNHeGxkR1VpTENKblpYUWlMQ0p6WlhRaUxDSjJJaXdpWjJWMFVISnZjQ0lzSW10bGVTSXNJbWRsZEZabGJHOWphWFI1SWl3aVlXUmtUR2x6ZEdWdVpYSWlMQ0pzYVhOMFpXNWxjaUlzSW14cGMzUmxibVZ5Y3lJc0ltNTFiVXhwYzNSbGJtVnljeUlzSW1sdVpHVjRUMllpTENKd2RYTm9JaXdpY21WdGIzWmxUR2x6ZEdWdVpYSWlMQ0pzYVhOMFpXNWxja2x1WkdWNElpd2ljM0JzYVdObElpd2lhU0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPMEZCUTBFN096czdTVUZGVFVFc1RUdEJRVU5LTEd0Q1FVRlpReXhMUVVGYUxFVkJRVzFDTzBGQlFVRTdPMEZCUTJwQ0xGTkJRVXRETEdWQlFVd3NSMEZCZFVJc1MwRkJTMEVzWlVGQlRDeERRVUZ4UWtNc1NVRkJja0lzUTBGQk1FSXNTVUZCTVVJc1EwRkJka0k3TzBGQlJVRXNVMEZCUzBZc1MwRkJUQ3huUWtGRFN5eExRVUZMUnl4WFFVRk1MRU5CUVdsQ1F5eFpRVVIwUWpzN1FVRkpRU3hUUVVGTFF5eFJRVUZNTEVOQlFXTk1MRXRCUVdRN08wRkJSVUVzVTBGQlMwMHNUMEZCVEN4SFFVRmxUaXhOUVVGTlRTeFBRVUZPTEVsQlFXbENUaXhOUVVGTlR5eEpRVUYyUWl4SlFVRXJRaXhEUVVFNVF6dEJRVU5FT3p0dFFrRkZSRU1zU3l4dlFrRkJVVHRCUVVGQkxHbENRVU5wUXl4TFFVRkxVaXhMUVVSMFF6dEJRVUZCTEZGQlEwVlRMRTlCUkVZc1ZVRkRSVUVzVDBGRVJqdEJRVUZCTEZGQlExZERMRkZCUkZnc1ZVRkRWMEVzVVVGRVdEdEJRVUZCTEZGQlEzRkNReXhQUVVSeVFpeFZRVU54UWtFc1QwRkVja0k3T3p0QlFVZE9MRkZCUVVrc1EwRkJRMEVzVDBGQlRDeEZRVUZqTzBGQlExb3NWMEZCUzBNc1VVRkJUQ3hIUVVGblFpeEpRVUZvUWp0QlFVTkJMRzlEUVVGakxFdEJRVXRZTEdWQlFXNUNPMEZCUTBRN08wRkJSVVFzVVVGQlNTeExRVUZMVVN4UFFVRlVMRVZCUVd0Q0xFdEJRVXRCTEU5QlFVdzdRVUZEYkVJc1VVRkJTVUVzVDBGQlNpeEZRVUZoUVN4UlFVRlJMRWxCUVZJN1FVRkRZaXhSUVVGSlF5eFJRVUZLTEVWQlFXTkJMRk5CUVZNc1NVRkJWRHM3UVVGRlpDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkVjc1NTeHRRa0ZCVHp0QlFVRkJMR3RDUVVOblF5eExRVUZMWWl4TFFVUnlRenRCUVVGQkxGRkJRMGRqTEUxQlJFZ3NWMEZEUjBFc1RVRkVTRHRCUVVGQkxGRkJRMWRETEU5QlJGZ3NWMEZEVjBFc1QwRkVXRHRCUVVGQkxGRkJRMjlDU2l4UFFVUndRaXhYUVVOdlFrRXNUMEZFY0VJN096dEJRVWRNTEZGQlFVa3NRMEZCUTBFc1QwRkJUQ3hGUVVGak8wRkJRMW9zVjBGQlMwTXNVVUZCVEN4SFFVRm5RaXhMUVVGb1FqdEJRVU5CTERCRFFVRnZRaXhMUVVGTFdDeGxRVUY2UWp0QlFVTkVPenRCUVVWRUxGRkJRVWtzUzBGQlMyRXNUVUZCVkN4RlFVRnBRaXhMUVVGTFFTeE5RVUZNTzBGQlEycENMRkZCUVVsQkxFMUJRVW9zUlVGQldVRXNUMEZCVHl4SlFVRlFPMEZCUTFvc1VVRkJTVU1zVDBGQlNpeEZRVUZoUVN4UlFVRlJMRWxCUVZJN08wRkJSV0lzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YlVKQlJVUkRMRkVzZFVKQlFWYzdRVUZCUVN4clFrRkRNa0lzUzBGQlMyaENMRXRCUkdoRE8wRkJRVUVzVVVGRFJHbENMRlZCUkVNc1YwRkRSRUVzVlVGRVF6dEJRVUZCTEZGQlExZERMRmRCUkZnc1YwRkRWMEVzVjBGRVdEczdPMEZCUjFRc1UwRkJTMHdzU1VGQlREczdRVUZGUVN4UlFVRkpMRXRCUVV0SkxGVkJRVlFzUlVGQmNVSXNTMEZCUzBFc1ZVRkJURHRCUVVOeVFpeFJRVUZKUVN4VlFVRktMRVZCUVdkQ1FTeFhRVUZYTEVsQlFWZzdRVUZEYUVJc1VVRkJTVU1zVjBGQlNpeEZRVUZwUWtFc1dVRkJXU3hKUVVGYU96dEJRVVZxUWl4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSR3BDTEdVc09FSkJRV3RDTzBGQlEyaENMRk5CUVV0clFpeFhRVUZNTEVkQlFXMUNMRzlEUVVGdVFqdEJRVU5CTEZOQlFVdERMRWxCUVV3c1IwRkJXU3hMUVVGTFpDeFBRVUZxUWpzN1FVRkdaMElzYTBKQlNXTXNTMEZCUzA0c1MwRktia0k3UVVGQlFTeFJRVWxTY1VJc1VVRktVU3hYUVVsU1FTeFJRVXBSTzBGQlFVRXNVVUZKUlZZc1QwRktSaXhYUVVsRlFTeFBRVXBHT3pzN1FVRk5hRUlzVVVGQlNTeExRVUZMVnl4TlFVRlVMRVZCUVdsQ08wRkJRMllzVjBGQlMyaENMRTlCUVV3c1IwRkJaU3hMUVVGTFowSXNUVUZCVEN4RFFVRlpMRXRCUVV0b1FpeFBRVUZxUWl4RFFVRm1PMEZCUTBRN08wRkJSVVFzVVVGQlNXVXNVVUZCU2l4RlFVRmpRU3hUUVVGVExFdEJRVXRtTEU5QlFXUXNSVUZCZFVJc1NVRkJka0k3UVVGRFpDeFRRVUZMYVVJc1lVRkJURHM3UVVGRlFTeFJRVUZKTEVOQlFVTmFMRTlCUVVRc1NVRkJXU3hMUVVGTFF5eFJRVUZ5UWl4RlFVRXJRanRCUVVNM1FpeHZRMEZCWXl4TFFVRkxXQ3hsUVVGdVFqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1MwRkJTM1ZDTEdkQ1FVRk1MRWxCUVhsQ0xFdEJRVXRCTEdkQ1FVRk1MRVZCUVRkQ0xFVkJRWE5FTzBGQlEzQkVMRmRCUVV0U0xGRkJRVXc3UVVGRFJEczdRVUZGUkN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSRmdzVVN4eFFrRkJVMHdzU3l4RlFVRlBPMEZCUTJRc1UwRkJTMEVzUzBGQlRDeG5Ra0ZEU3l4TFFVRkxRU3hMUVVSV0xFVkJSVXRCTEV0QlJrdzdRVUZKUVN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSSGxDTEVjc2EwSkJRVTA3UVVGRFNpeFhRVUZQTEV0QlFVdHVRaXhQUVVGYU8wRkJRMFFzUnpzN2JVSkJSVVJ2UWl4SExHZENRVUZKUXl4RExFVkJRVWM3UVVGRFRDeFRRVUZMY2tJc1QwRkJUQ3hIUVVGbGNVSXNRMEZCWmp0QlFVTkJMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMjFDUVVWRVF5eFBMRzlDUVVGUlF5eEhMRVZCUVVzN1FVRkRXQ3hYUVVGUExFdEJRVXMzUWl4TFFVRk1MRU5CUVZjMlFpeEhRVUZZTEVOQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkVNc1Z5d3dRa0ZCWXp0QlFVTmFMRmRCUVU4c01FSkJRV1VzUzBGQlMzaENMRTlCUVV3c1IwRkJaU3hMUVVGTFl5eEpRVUZ1UXl4RlFVRjVReXhMUVVGTFJDeFhRVUU1UXl4RFFVRlFPMEZCUTBRc1J6czdiVUpCUlVSUUxGRXNkVUpCUVZjN1FVRkRWQ3hYUVVGUExFdEJRVXRCTEZGQlFWbzdRVUZEUkN4SE96dHRRa0ZGUkcxQ0xGY3NkMEpCUVZsRExGRXNSVUZCVlR0QlFVTndRaXhUUVVGTFF5eFRRVUZNTEVkQlFXbENMRXRCUVV0QkxGTkJRVXdzU1VGQmEwSXNSVUZCYmtNN1FVRkRRU3hUUVVGTFF5eFpRVUZNTEVkQlFXOUNMRXRCUVV0QkxGbEJRVXdzU1VGQmNVSXNRMEZCZWtNN1FVRkRRU3hSUVVGSkxFdEJRVXRFTEZOQlFVd3NRMEZCWlVVc1QwRkJaaXhEUVVGMVFrZ3NVVUZCZGtJc1RVRkJjVU1zUTBGQlF5eERRVUV4UXl4RlFVRTJRenRCUVVNelF5eFhRVUZMUXl4VFFVRk1MRU5CUVdWSExFbEJRV1lzUTBGQmIwSktMRkZCUVhCQ08wRkJRMEVzVjBGQlMwVXNXVUZCVER0QlFVTkVPMEZCUTBRc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN2JVSkJSVVJITEdNc01rSkJRV1ZNTEZFc1JVRkJWVHRCUVVOMlFpeFJRVUZOVFN4blFrRkJhVUlzUzBGQlMwd3NVMEZCVGl4SFFVRnRRaXhMUVVGTFFTeFRRVUZNTEVOQlFXVkZMRTlCUVdZc1EwRkJkVUpJTEZGQlFYWkNMRU5CUVc1Q0xFZEJRWE5FTEVOQlFVTXNRMEZCTjBVN1FVRkRRU3hSUVVGSlRTeHJRa0ZCYTBJc1EwRkJReXhEUVVGMlFpeEZRVUV3UWp0QlFVTjRRaXhYUVVGTFNpeFpRVUZNTzBGQlEwRXNWMEZCUzBRc1UwRkJUQ3hEUVVGbFRTeE5RVUZtTEVOQlFYTkNSQ3hoUVVGMFFpeEZRVUZ4UXl4RFFVRnlRenRCUVVORU8wRkJRMFFzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YlVKQlJVUm1MR0VzTkVKQlFXZENPMEZCUTJRc1VVRkJUV3BDTEZWQlFWVXNTMEZCUzIxQ0xFZEJRVXdzUlVGQmFFSTdRVUZEUVN4VFFVRkxMRWxCUVVsbExFbEJRVWtzUTBGQllpeEZRVUZuUWtFc1NVRkJTU3hMUVVGTFRpeFpRVUY2UWl4RlFVRjFRMDBzUjBGQmRrTXNSVUZCTkVNN1FVRkRNVU1zVjBGQlMxQXNVMEZCVEN4RFFVRmxUeXhEUVVGbUxFVkJRV3RDYkVNc1QwRkJiRUlzUlVGQk1rSXNTVUZCTTBJN1FVRkRSRHRCUVVORUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN096czdPMnRDUVVkWlVDeE5JaXdpWm1sc1pTSTZJbWx1WkdWNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2IyNUdjbUZ0WlZWd1pHRjBaU3dnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlN3Z2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbElIMGdabkp2YlNBbkxpNHZabkpoYldWemVXNWpKenRjYm1sdGNHOXlkQ0I3SUhOd1pXVmtVR1Z5VTJWamIyNWtJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dVhHNWpiR0Z6Y3lCQlkzUnBiMjRnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lIUm9hWE11YzJOb1pXUjFiR1ZrVlhCa1lYUmxJRDBnZEdocGN5NXpZMmhsWkhWc1pXUlZjR1JoZEdVdVltbHVaQ2gwYUdsektUdGNibHh1SUNBZ0lIUm9hWE11Y0hKdmNITWdQU0I3WEc0Z0lDQWdJQ0F1TGk1MGFHbHpMbU52Ym5OMGNuVmpkRzl5TG1SbFptRjFiSFJRY205d2MxeHVJQ0FnSUgwN1hHNWNiaUFnSUNCMGFHbHpMbk5sZEZCeWIzQnpLSEJ5YjNCektUdGNibHh1SUNBZ0lIUm9hWE11WTNWeWNtVnVkQ0E5SUhCeWIzQnpMbU4xY25KbGJuUWdmSHdnY0hKdmNITXVabkp2YlNCOGZDQXdPMXh1SUNCOVhHNWNiaUFnYzNSaGNuUW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QnZibE4wWVhKMExDQmZiMjVUZEdGeWRDd2djR0Z6YzJsMlpTQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JseHVJQ0FnSUdsbUlDZ2hjR0Z6YzJsMlpTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1cGMwRmpkR2wyWlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0J2YmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11YzJOb1pXUjFiR1ZrVlhCa1lYUmxLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NXZibE4wWVhKMEtTQjBhR2x6TG05dVUzUmhjblFvS1R0Y2JpQWdJQ0JwWmlBb2IyNVRkR0Z5ZENrZ2IyNVRkR0Z5ZENoMGFHbHpLVHRjYmlBZ0lDQnBaaUFvWDI5dVUzUmhjblFwSUY5dmJsTjBZWEowS0hSb2FYTXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCemRHOXdLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2diMjVUZEc5d0xDQmZiMjVUZEc5d0xDQndZWE56YVhabElIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tDRndZWE56YVhabEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG1selFXTjBhWFpsSUQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0JqWVc1alpXeFBia1p5WVcxbFZYQmtZWFJsS0hSb2FYTXVjMk5vWldSMWJHVmtWWEJrWVhSbEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9kR2hwY3k1dmJsTjBiM0FwSUhSb2FYTXViMjVUZEc5d0tDazdYRzRnSUNBZ2FXWWdLRzl1VTNSdmNDa2diMjVUZEc5d0tIUm9hWE1wTzF4dUlDQWdJR2xtSUNoZmIyNVRkRzl3S1NCZmIyNVRkRzl3S0hSb2FYTXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCamIyMXdiR1YwWlNncElIdGNiaUFnSUNCamIyNXpkQ0I3SUc5dVEyOXRjR3hsZEdVc0lGOXZia052YlhCc1pYUmxJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2RHaHBjeTV6ZEc5d0tDazdYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NXZia052YlhCc1pYUmxLU0IwYUdsekxtOXVRMjl0Y0d4bGRHVW9LVHRjYmlBZ0lDQnBaaUFvYjI1RGIyMXdiR1YwWlNrZ2IyNURiMjF3YkdWMFpTaDBhR2x6S1R0Y2JpQWdJQ0JwWmlBb1gyOXVRMjl0Y0d4bGRHVXBJRjl2YmtOdmJYQnNaWFJsS0hSb2FYTXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCelkyaGxaSFZzWldSVmNHUmhkR1VvS1NCN1hHNGdJQ0FnZEdocGN5NXNZWE4wVlhCa1lYUmxaQ0E5SUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNncE8xeHVJQ0FnSUhSb2FYTXVjSEpsZGlBOUlIUm9hWE11WTNWeWNtVnVkRHRjYmx4dUlDQWdJR052Ym5OMElIc2diMjVWY0dSaGRHVXNJSEJoYzNOcGRtVWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCcFppQW9kR2hwY3k1MWNHUmhkR1VwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRDQTlJSFJvYVhNdWRYQmtZWFJsS0hSb2FYTXVZM1Z5Y21WdWRDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLRzl1VlhCa1lYUmxLU0J2YmxWd1pHRjBaU2gwYUdsekxtTjFjbkpsYm5Rc0lIUm9hWE1wTzF4dUlDQWdJSFJvYVhNdVptbHlaVXhwYzNSbGJtVnljeWdwTzF4dVhHNGdJQ0FnYVdZZ0tDRndZWE56YVhabElDWW1JSFJvYVhNdWFYTkJZM1JwZG1VcElIdGNiaUFnSUNBZ0lHOXVSbkpoYldWVmNHUmhkR1VvZEdocGN5NXpZMmhsWkhWc1pXUlZjR1JoZEdVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBhR2x6TG1selFXTjBhVzl1UTI5dGNHeGxkR1VnSmlZZ2RHaHBjeTVwYzBGamRHbHZia052YlhCc1pYUmxLQ2twSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZMjl0Y0d4bGRHVW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUhObGRGQnliM0J6S0hCeWIzQnpLU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeUE5SUh0Y2JpQWdJQ0FnSUM0dUxuUm9hWE11Y0hKdmNITXNYRzRnSUNBZ0lDQXVMaTV3Y205d2MxeHVJQ0FnSUgwN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQm5aWFFvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVkzVnljbVZ1ZER0Y2JpQWdmVnh1WEc0Z0lITmxkQ2gyS1NCN1hHNGdJQ0FnZEdocGN5NWpkWEp5Wlc1MElEMGdkanRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUdkbGRGQnliM0FvYTJWNUtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjSEp2Y0hOYmEyVjVYVHRjYmlBZ2ZWeHVYRzRnSUdkbGRGWmxiRzlqYVhSNUtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCemNHVmxaRkJsY2xObFkyOXVaQ2gwYUdsekxtTjFjbkpsYm5RZ0xTQjBhR2x6TG5CeVpYWXNJSFJvYVhNdWJHRnpkRlZ3WkdGMFpXUXBPMXh1SUNCOVhHNWNiaUFnYVhOQlkzUnBkbVVvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWFYTkJZM1JwZG1VN1hHNGdJSDFjYmx4dUlDQmhaR1JNYVhOMFpXNWxjaWhzYVhOMFpXNWxjaWtnZTF4dUlDQWdJSFJvYVhNdWJHbHpkR1Z1WlhKeklEMGdkR2hwY3k1c2FYTjBaVzVsY25NZ2ZId2dXMTA3WEc0Z0lDQWdkR2hwY3k1dWRXMU1hWE4wWlc1bGNuTWdQU0IwYUdsekxtNTFiVXhwYzNSbGJtVnljeUI4ZkNBd08xeHVJQ0FnSUdsbUlDaDBhR2x6TG14cGMzUmxibVZ5Y3k1cGJtUmxlRTltS0d4cGMzUmxibVZ5S1NBOVBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViR2x6ZEdWdVpYSnpMbkIxYzJnb2JHbHpkR1Z1WlhJcE8xeHVJQ0FnSUNBZ2RHaHBjeTV1ZFcxTWFYTjBaVzVsY25Nckt6dGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnlaVzF2ZG1WTWFYTjBaVzVsY2loc2FYTjBaVzVsY2lrZ2UxeHVJQ0FnSUdOdmJuTjBJR3hwYzNSbGJtVnlTVzVrWlhnZ1BTQW9kR2hwY3k1c2FYTjBaVzVsY25NcElEOGdkR2hwY3k1c2FYTjBaVzVsY25NdWFXNWtaWGhQWmloc2FYTjBaVzVsY2lrZ09pQXRNVHRjYmlBZ0lDQnBaaUFvYkdsemRHVnVaWEpKYm1SbGVDQWhQVDBnTFRFcElIdGNiaUFnSUNBZ0lIUm9hWE11Ym5WdFRHbHpkR1Z1WlhKekxTMDdYRzRnSUNBZ0lDQjBhR2x6TG14cGMzUmxibVZ5Y3k1emNHeHBZMlVvYkdsemRHVnVaWEpKYm1SbGVDd2dNU2s3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnWm1seVpVeHBjM1JsYm1WeWN5Z3BJSHRjYmlBZ0lDQmpiMjV6ZENCamRYSnlaVzUwSUQwZ2RHaHBjeTVuWlhRb0tUdGNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11Ym5WdFRHbHpkR1Z1WlhKek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViR2x6ZEdWdVpYSnpXMmxkS0dOMWNuSmxiblFzSUhSb2FYTXBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkJZM1JwYjI0N1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJlbmRlcmVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbmRlcmVyKTtcblxuICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMsIHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLmNoYW5nZWRWYWx1ZXMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBzdGF0ZS5cbiAgICogSWYgYGtleWAgaXMgbm90IGRlZmluZWQsIHJldHVybiBlbnRpcmUgY2FjaGVkIHN0YXRlLlxuICAgKiBJZiBga2V5YCBpcyBkZWZpbmVkLCByZXR1cm4gY2FjaGVkIHZhbHVlIGlmIHByZXNlbnQuXG4gICAqIElmIGBrZXlgIGlzIGRlZmluZWQgYW5kIGNhY2hlZCB2YWx1ZSBpcyBub3QgcHJlc2VudCwgcmVhZCBhbmQgcmV0dXJuLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IChvcHRpb25hbCkga2V5IG9mIHZhbHVlXG4gICAqIEByZXR1cm4ge3ZhbHVlfVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkKGtleSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVhZCB2YWx1ZSBhY2NvcmRpbmcgdG8gYG9uUmVhZGBcbiAgICogQHBhcmFtICB7c3RyaW5nfSBOYW1lIG9mIHByb3BlcnR5IHRvIHJlYWRcbiAgICogQHJldHVybiB7W3R5cGVdfVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gcmVhZChrZXkpIHtcbiAgICBpZiAodGhpcy5vblJlYWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uUmVhZChrZXkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIGBzdGF0ZWAgd2l0aCBuZXcgdmFsdWVzIGFuZCBzY2hlZHVsZSBgcmVuZGVyYC5cbiAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlc1xuICAgKiBAcGFyYW0ge3ZhbHVlfSB2YWx1ZSB0b3NldFxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHZhbHVlcyA9IGFyZ3NbMF07XG4gICAgICAvLyBTZXQgbXVsdGlwbGUgdmFsdWVzXG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShrZXksIHZhbHVlc1trZXldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9rZXkyID0gYXJnc1swXSxcbiAgICAgICAgICB2YWx1ZSA9IGFyZ3NbMV07XG5cbiAgICAgIHRoaXMuc2V0VmFsdWUoX2tleTIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKSB7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lUmVuZGVyKSh0aGlzLnJlbmRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gPiBXaWxleSAtIDYgaW4gdGhlIE1vcm5pbmdcbiAgLyoqXG4gICAqIFNldCBhIHNpbmdsZSB2YWx1ZVxuICAgKiBJZiBhIHN0cmluZyBvciBudW1iZXIsIHNldCBkaXJlY3RseS5cbiAgICogSWYgYW4gb2JqZWN0IG9yIGFycmF5LCBjcmVhdGUgbmV3IG9iamVjdCBvciBhcnJheVxuICAgKiBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3QuIFRoZW4gc2hhbGxvdyBjb21wYXJlXG4gICAqIHRvIHNldCBhbmQgY29tcGFyZSBpbmRpdmlkdWFsIHZhbHVlcy5cbiAgICogT25lIG9mIHRoZSBjbGVhcmVyIGRyYXdiYWNrcyBhbmQgYW5ub3lhbmNlcyB3aXRoXG4gICAqIHVzaW5nIG11dGFibGUgaW5zdGVhZCBvZiBpbW11dGFibGUgc3RhdGVzLlxuICAgKiBAcGFyYW0ge1t0eXBlXX0ga2V5XG4gICAqIEBwYXJhbSB7W3R5cGVdfSB2YWx1ZVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uIHNldFZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgY3VycmVudFZhbHVlID0gdGhpcy5zdGF0ZVtrZXldO1xuXG4gICAgLy8gSWYgbnVtYmVyIG9yIHN0cmluZywgc2V0IGRpcmVjdGx5XG4gICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlKSB8fCAoMCwgX3V0aWxzLmlzU3RyaW5nKSh2YWx1ZSkpIHtcbiAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc0FycmF5KSh2YWx1ZSkpIHtcbiAgICAgIGlmICghY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IFtdO1xuICAgICAgfVxuXG4gICAgICB2YXIgbnVtVmFsdWVzID0gdmFsdWUubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1WYWx1ZXM7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZVtrZXldW2ldICE9PSB2YWx1ZVtpXSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVtpXSA9IHZhbHVlW2ldO1xuICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNPYmopKHZhbHVlKSkge1xuICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0ge307XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIHZhbHVlS2V5IGluIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV1bdmFsdWVLZXldICE9PSB2YWx1ZVt2YWx1ZUtleV0pIHtcbiAgICAgICAgICB0aGlzLnN0YXRlW2tleV1bdmFsdWVLZXldID0gdmFsdWVbdmFsdWVLZXldO1xuICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNoYW5nZWRWYWx1ZXMucHVzaChrZXkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRmlyZXMgYG9uUmVuZGVyYCBpZiB2YWx1ZXMgaGF2ZSBjaGFuZ2VkIG9yIGBmb3JjZVJlbmRlcmBcbiAgICogaXMgc2V0IHRvIHRydWUuXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgZm9yY2VSZW5kZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgaWYgKChmb3JjZVJlbmRlciB8fCB0aGlzLmhhc0NoYW5nZWQpICYmIHRoaXMub25SZW5kZXIpIHtcbiAgICAgIHRoaXMub25SZW5kZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZWRWYWx1ZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHNpVW1WdVpHVnlaWElpTENKd2NtOXdjeUlzSW5KbGJtUmxjaUlzSW1KcGJtUWlMQ0pqYjI1emRISjFZM1J2Y2lJc0ltUmxabUYxYkhSUWNtOXdjeUlzSW5OMFlYUmxJaXdpWTJoaGJtZGxaRlpoYkhWbGN5SXNJbWRsZENJc0ltdGxlU0lzSW5WdVpHVm1hVzVsWkNJc0luSmxZV1FpTENKdmJsSmxZV1FpTENKelpYUWlMQ0poY21keklpd2lkbUZzZFdWeklpd2ljMlYwVm1Gc2RXVWlMQ0oyWVd4MVpTSXNJbWhoYzBOb1lXNW5aV1FpTENKamRYSnlaVzUwVm1Gc2RXVWlMQ0p1ZFcxV1lXeDFaWE1pTENKc1pXNW5kR2dpTENKcElpd2lkbUZzZFdWTFpYa2lMQ0p3ZFhOb0lpd2labTl5WTJWU1pXNWtaWElpTENKdmJsSmxibVJsY2lKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3TzBGQlEwRTdPenM3U1VGRlRVRXNVVHRCUVVOS0xHOUNRVUZaUXl4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlEycENMRk5CUVV0RExFMUJRVXdzUjBGQll5eExRVUZMUVN4TlFVRk1MRU5CUVZsRExFbEJRVm9zUTBGQmFVSXNTVUZCYWtJc1EwRkJaRHM3UVVGRlFTeFRRVUZMUml4TFFVRk1MR2RDUVVOTExFdEJRVXRITEZkQlFVd3NRMEZCYVVKRExGbEJSSFJDTEVWQlJVdEtMRXRCUmt3N08wRkJTMEVzVTBGQlMwc3NTMEZCVEN4SFFVRmhMRVZCUVdJN1FVRkRRU3hUUVVGTFF5eGhRVUZNTEVkQlFYRkNMRVZCUVhKQ08wRkJRMFE3TzBGQlJVUTdPenM3T3pzN096czdjVUpCVVVGRExFY3NaMEpCUVVsRExFY3NSVUZCU3p0QlFVTlFMRkZCUVVsQkxFZEJRVW9zUlVGQlV6dEJRVU5RTEZWQlFVa3NTMEZCUzBnc1MwRkJUQ3hEUVVGWFJ5eEhRVUZZTEUxQlFXOUNReXhUUVVGNFFpeEZRVUZ0UXp0QlFVTnFReXhsUVVGUExFdEJRVXRLTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hEUVVGUU8wRkJRMFFzVDBGR1JDeE5RVVZQTzBGQlEwd3NaVUZCVHl4TFFVRkxSU3hKUVVGTUxFTkJRVlZHTEVkQlFWWXNRMEZCVUR0QlFVTkVPMEZCUTBZc1MwRk9SQ3hOUVUxUE8wRkJRMHdzWVVGQlR5eExRVUZMU0N4TFFVRmFPMEZCUTBRN1FVRkRSaXhIT3p0QlFVVkVPenM3T3pzN08zRkNRVXRCU3l4SkxHbENRVUZMUml4SExFVkJRVXM3UVVGRFVpeFJRVUZKTEV0QlFVdEhMRTFCUVZRc1JVRkJhVUk3UVVGRFppeGhRVUZQTEV0QlFVdEJMRTFCUVV3c1EwRkJXVWdzUjBGQldpeERRVUZRTzBGQlEwUTdRVUZEUml4SE96dEJRVVZFT3pzN096czdPM0ZDUVV0QlNTeEhMR3RDUVVGaE8wRkJRVUVzYzBOQlFVNURMRWxCUVUwN1FVRkJUa0VzVlVGQlRUdEJRVUZCT3p0QlFVTllMRkZCUVVrc1QwRkJUMEVzUzBGQlN5eERRVUZNTEVOQlFWQXNTMEZCYlVJc1YwRkJka0lzUlVGQmIwTTdRVUZCUVN4VlFVTXhRa01zVFVGRU1FSXNSMEZEWmtRc1NVRkVaVHRCUVVWc1F6czdRVUZEUVN4WFFVRkxMRWxCUVUxTUxFZEJRVmdzU1VGQmEwSk5MRTFCUVd4Q0xFVkJRVEJDTzBGQlEzaENMR0ZCUVV0RExGRkJRVXdzUTBGQlkxQXNSMEZCWkN4RlFVRnRRazBzVDBGQlQwNHNSMEZCVUN4RFFVRnVRanRCUVVORU8wRkJRMFlzUzBGT1JDeE5RVTFQTzBGQlFVRXNWVUZEUjBFc1MwRkVTQ3hIUVVOclFrc3NTVUZFYkVJN1FVRkJRU3hWUVVOUlJ5eExRVVJTTEVkQlEydENTQ3hKUVVSc1FqczdRVUZGVEN4WFFVRkxSU3hSUVVGTUxFTkJRV05RTEV0QlFXUXNSVUZCYlVKUkxFdEJRVzVDTzBGQlEwUTdPMEZCUlVRc1VVRkJTU3hMUVVGTFF5eFZRVUZVTEVWQlFYRkNPMEZCUTI1Q0xHOURRVUZqTEV0QlFVdG9RaXhOUVVGdVFqdEJRVU5FT3p0QlFVVkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMEZCUlVRN1FVRkRRVHM3T3pzN096czdPenM3T3p0eFFrRlhRV01zVVN4eFFrRkJVMUFzUnl4RlFVRkxVU3hMTEVWQlFVODdRVUZEYmtJc1VVRkJUVVVzWlVGQlpTeExRVUZMWWl4TFFVRk1MRU5CUVZkSExFZEJRVmdzUTBGQmNrSTdPMEZCUlVFN1FVRkRRU3hSUVVGSkxHdENRVUZOVVN4TFFVRk9MRXRCUVdkQ0xIRkNRVUZUUVN4TFFVRlVMRU5CUVhCQ0xFVkJRWEZETzBGQlEyNURMRlZCUVVsRkxHbENRVUZwUWtZc1MwRkJja0lzUlVGQk5FSTdRVUZETVVJc1lVRkJTMWdzUzBGQlRDeERRVUZYUnl4SFFVRllMRWxCUVd0Q1VTeExRVUZzUWp0QlFVTkJMR0ZCUVV0RExGVkJRVXdzUjBGQmEwSXNTVUZCYkVJN1FVRkRSRHRCUVVOR0xFdEJURVFzVFVGTFR5eEpRVUZKTEc5Q1FVRlJSQ3hMUVVGU0xFTkJRVW9zUlVGQmIwSTdRVUZEZWtJc1ZVRkJTU3hEUVVGRFJTeFpRVUZNTEVWQlFXMUNPMEZCUTJwQ0xHRkJRVXRpTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hKUVVGclFpeEZRVUZzUWp0QlFVTkVPenRCUVVWRUxGVkJRVTFYTEZsQlFWbElMRTFCUVUxSkxFMUJRWGhDTzBGQlEwRXNWMEZCU3l4SlFVRkpReXhKUVVGSkxFTkJRV0lzUlVGQlowSkJMRWxCUVVsR0xGTkJRWEJDTEVWQlFTdENSU3hIUVVFdlFpeEZRVUZ2UXp0QlFVTnNReXhaUVVGSkxFdEJRVXRvUWl4TFFVRk1MRU5CUVZkSExFZEJRVmdzUlVGQlowSmhMRU5CUVdoQ0xFMUJRWFZDVEN4TlFVRk5TeXhEUVVGT0xFTkJRVE5DTEVWQlFYRkRPMEZCUTI1RExHVkJRVXRvUWl4TFFVRk1MRU5CUVZkSExFZEJRVmdzUlVGQlowSmhMRU5CUVdoQ0xFbEJRWEZDVEN4TlFVRk5TeXhEUVVGT0xFTkJRWEpDTzBGQlEwRXNaVUZCUzBvc1ZVRkJUQ3hIUVVGclFpeEpRVUZzUWp0QlFVTkVPMEZCUTBZN1FVRkRSaXhMUVZwTkxFMUJXVUVzU1VGQlNTeHJRa0ZCVFVRc1MwRkJUaXhEUVVGS0xFVkJRV3RDTzBGQlEzWkNMRlZCUVVrc1EwRkJRMFVzV1VGQlRDeEZRVUZ0UWp0QlFVTnFRaXhoUVVGTFlpeExRVUZNTEVOQlFWZEhMRWRCUVZnc1NVRkJhMElzUlVGQmJFSTdRVUZEUkRzN1FVRkZSQ3hYUVVGTExFbEJRVWxqTEZGQlFWUXNTVUZCY1VKT0xFdEJRWEpDTEVWQlFUUkNPMEZCUXpGQ0xGbEJRVWtzUzBGQlMxZ3NTMEZCVEN4RFFVRlhSeXhIUVVGWUxFVkJRV2RDWXl4UlFVRm9RaXhOUVVFNFFrNHNUVUZCVFUwc1VVRkJUaXhEUVVGc1F5eEZRVUZ0UkR0QlFVTnFSQ3hsUVVGTGFrSXNTMEZCVEN4RFFVRlhSeXhIUVVGWUxFVkJRV2RDWXl4UlFVRm9RaXhKUVVFMFFrNHNUVUZCVFUwc1VVRkJUaXhEUVVFMVFqdEJRVU5CTEdWQlFVdE1MRlZCUVV3c1IwRkJhMElzU1VGQmJFSTdRVUZEUkR0QlFVTkdPMEZCUTBZN08wRkJSVVFzVVVGQlNTeExRVUZMUVN4VlFVRlVMRVZCUVhGQ08wRkJRMjVDTEZkQlFVdFlMR0ZCUVV3c1EwRkJiVUpwUWl4SlFVRnVRaXhEUVVGM1FtWXNSMEZCZUVJN1FVRkRSRHRCUVVOR0xFYzdPMEZCUlVRN096czdPenM3Y1VKQlMwRlFMRTBzY1VKQlFUUkNPMEZCUVVFc1VVRkJja0oxUWl4WFFVRnhRaXgxUlVGQlVDeExRVUZQT3p0QlFVTXhRaXhSUVVGSkxFTkJRVU5CTEdWQlFXVXNTMEZCUzFBc1ZVRkJja0lzUzBGQmIwTXNTMEZCUzFFc1VVRkJOME1zUlVGQmRVUTdRVUZEY2tRc1YwRkJTMEVzVVVGQlREdEJRVU5FT3p0QlFVVkVMRk5CUVV0dVFpeGhRVUZNTEVOQlFXMUNZeXhOUVVGdVFpeEhRVUUwUWl4RFFVRTFRanRCUVVOQkxGTkJRVXRJTEZWQlFVd3NSMEZCYTBJc1MwRkJiRUk3TzBGQlJVRXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdPenM3YTBKQlIxbHNRaXhSSWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2diMjVHY21GdFpWSmxibVJsY2lCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVwYlhCdmNuUWdleUJwYzBGeWNtRjVMQ0JwYzA5aWFpd2dhWE5PZFcwc0lHbHpVM1J5YVc1bklIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyeGhjM01nVW1WdVpHVnlaWElnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lIUm9hWE11Y21WdVpHVnlJRDBnZEdocGN5NXlaVzVrWlhJdVltbHVaQ2gwYUdsektUdGNibHh1SUNBZ0lIUm9hWE11Y0hKdmNITWdQU0I3WEc0Z0lDQWdJQ0F1TGk1MGFHbHpMbU52Ym5OMGNuVmpkRzl5TG1SbFptRjFiSFJRY205d2N5eGNiaUFnSUNBZ0lDNHVMbkJ5YjNCelhHNGdJQ0FnZlR0Y2JseHVJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQjdmVHRjYmlBZ0lDQjBhR2x6TG1Ob1lXNW5aV1JXWVd4MVpYTWdQU0JiWFR0Y2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkhaWFFnWTNWeWNtVnVkQ0J6ZEdGMFpTNWNiaUFnSUNvZ1NXWWdZR3RsZVdBZ2FYTWdibTkwSUdSbFptbHVaV1FzSUhKbGRIVnliaUJsYm5ScGNtVWdZMkZqYUdWa0lITjBZWFJsTGx4dUlDQWdLaUJKWmlCZ2EyVjVZQ0JwY3lCa1pXWnBibVZrTENCeVpYUjFjbTRnWTJGamFHVmtJSFpoYkhWbElHbG1JSEJ5WlhObGJuUXVYRzRnSUNBcUlFbG1JR0JyWlhsZ0lHbHpJR1JsWm1sdVpXUWdZVzVrSUdOaFkyaGxaQ0IyWVd4MVpTQnBjeUJ1YjNRZ2NISmxjMlZ1ZEN3Z2NtVmhaQ0JoYm1RZ2NtVjBkWEp1TGx4dUlDQWdLaUJBY0dGeVlXMGdJSHR6ZEhKcGJtZDlJQ2h2Y0hScGIyNWhiQ2tnYTJWNUlHOW1JSFpoYkhWbFhHNGdJQ0FxSUVCeVpYUjFjbTRnZTNaaGJIVmxmVnh1SUNBZ0tpOWNiaUFnWjJWMEtHdGxlU2tnZTF4dUlDQWdJR2xtSUNoclpYa3BJSHRjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbk4wWVhSbFcydGxlVjBnSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1emRHRjBaVnRyWlhsZE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjbVZoWkNoclpYa3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXpkR0YwWlR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdktpcGNiaUFnSUNvZ1VtVmhaQ0IyWVd4MVpTQmhZMk52Y21ScGJtY2dkRzhnWUc5dVVtVmhaR0JjYmlBZ0lDb2dRSEJoY21GdElDQjdjM1J5YVc1bmZTQk9ZVzFsSUc5bUlIQnliM0JsY25SNUlIUnZJSEpsWVdSY2JpQWdJQ29nUUhKbGRIVnliaUI3VzNSNWNHVmRmVnh1SUNBZ0tpOWNiaUFnY21WaFpDaHJaWGtwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTV2YmxKbFlXUXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG05dVVtVmhaQ2hyWlhrcE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlZjR1JoZEdVZ1lITjBZWFJsWUNCM2FYUm9JRzVsZHlCMllXeDFaWE1nWVc1a0lITmphR1ZrZFd4bElHQnlaVzVrWlhKZ0xseHVJQ0FnS2lCQWNHRnlZVzBnZTI5aWFtVmpkSDBnZG1Gc2RXVnpYRzRnSUNBcUlFQndZWEpoYlNCN2RtRnNkV1Y5SUhaaGJIVmxJSFJ2YzJWMFhHNGdJQ0FxTDF4dUlDQnpaWFFvTGk0dVlYSm5jeWtnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnWVhKbmMxc3hYU0E5UFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQWdJR052Ym5OMElGc2dkbUZzZFdWeklGMGdQU0JoY21kek8xeHVJQ0FnSUNBZ0x5OGdVMlYwSUcxMWJIUnBjR3hsSUhaaGJIVmxjMXh1SUNBZ0lDQWdabTl5SUNoamIyNXpkQ0JyWlhrZ2FXNGdkbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyVjBWbUZzZFdVb2EyVjVMQ0IyWVd4MVpYTmJhMlY1WFNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR052Ym5OMElGc2dhMlY1TENCMllXeDFaU0JkSUQwZ1lYSm5jenRjYmlBZ0lDQWdJSFJvYVhNdWMyVjBWbUZzZFdVb2EyVjVMQ0IyWVd4MVpTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWFHRnpRMmhoYm1kbFpDa2dlMXh1SUNBZ0lDQWdiMjVHY21GdFpWSmxibVJsY2loMGFHbHpMbkpsYm1SbGNpazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0F2THlBK0lGZHBiR1Y1SUMwZ05pQnBiaUIwYUdVZ1RXOXlibWx1WjF4dUlDQXZLaXBjYmlBZ0lDb2dVMlYwSUdFZ2MybHVaMnhsSUhaaGJIVmxYRzRnSUNBcUlFbG1JR0VnYzNSeWFXNW5JRzl5SUc1MWJXSmxjaXdnYzJWMElHUnBjbVZqZEd4NUxseHVJQ0FnS2lCSlppQmhiaUJ2WW1wbFkzUWdiM0lnWVhKeVlYa3NJR055WldGMFpTQnVaWGNnYjJKcVpXTjBJRzl5SUdGeWNtRjVYRzRnSUNBcUlHbG1JR2wwSUdSdlpYTnVKM1FnWVd4eVpXRmtlU0JsZUdsemRDNGdWR2hsYmlCemFHRnNiRzkzSUdOdmJYQmhjbVZjYmlBZ0lDb2dkRzhnYzJWMElHRnVaQ0JqYjIxd1lYSmxJR2x1WkdsMmFXUjFZV3dnZG1Gc2RXVnpMbHh1SUNBZ0tpQlBibVVnYjJZZ2RHaGxJR05zWldGeVpYSWdaSEpoZDJKaFkydHpJR0Z1WkNCaGJtNXZlV0Z1WTJWeklIZHBkR2hjYmlBZ0lDb2dkWE5wYm1jZ2JYVjBZV0pzWlNCcGJuTjBaV0ZrSUc5bUlHbHRiWFYwWVdKc1pTQnpkR0YwWlhNdVhHNGdJQ0FxSUVCd1lYSmhiU0I3VzNSNWNHVmRmU0JyWlhsY2JpQWdJQ29nUUhCaGNtRnRJSHRiZEhsd1pWMTlJSFpoYkhWbFhHNGdJQ0FxTDF4dUlDQnpaWFJXWVd4MVpTaHJaWGtzSUhaaGJIVmxLU0I3WEc0Z0lDQWdZMjl1YzNRZ1kzVnljbVZ1ZEZaaGJIVmxJRDBnZEdocGN5NXpkR0YwWlZ0clpYbGRPMXh1WEc0Z0lDQWdMeThnU1dZZ2JuVnRZbVZ5SUc5eUlITjBjbWx1Wnl3Z2MyVjBJR1JwY21WamRHeDVYRzRnSUNBZ2FXWWdLR2x6VG5WdEtIWmhiSFZsS1NCOGZDQnBjMU4wY21sdVp5aDJZV3gxWlNrcElIdGNiaUFnSUNBZ0lHbG1JQ2hqZFhKeVpXNTBWbUZzZFdVZ0lUMDlJSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1ZiYTJWNVhTQTlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1oaGMwTm9ZVzVuWldRZ1BTQjBjblZsTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBnWld4elpTQnBaaUFvYVhOQmNuSmhlU2gyWVd4MVpTa3BJSHRjYmlBZ0lDQWdJR2xtSUNnaFkzVnljbVZ1ZEZaaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdWYmEyVjVYU0E5SUZ0ZE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQmpiMjV6ZENCdWRXMVdZV3gxWlhNZ1BTQjJZV3gxWlM1c1pXNW5kR2c3WEc0Z0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJWWmhiSFZsY3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5OMFlYUmxXMnRsZVYxYmFWMGdJVDA5SUhaaGJIVmxXMmxkS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRjBaVnRyWlhsZFcybGRJRDBnZG1Gc2RXVmJhVjA3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTVvWVhORGFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBnWld4elpTQnBaaUFvYVhOUFltb29kbUZzZFdVcEtTQjdYRzRnSUNBZ0lDQnBaaUFvSVdOMWNuSmxiblJXWVd4MVpTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsVzJ0bGVWMGdQU0I3ZlR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2RtRnNkV1ZMWlhrZ2FXNGdkbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjM1JoZEdWYmEyVjVYVnQyWVd4MVpVdGxlVjBnSVQwOUlIWmhiSFZsVzNaaGJIVmxTMlY1WFNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1ZiYTJWNVhWdDJZV3gxWlV0bGVWMGdQU0IyWVd4MVpWdDJZV3gxWlV0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtaGhjME5vWVc1blpXUXBJSHRjYmlBZ0lDQWdJSFJvYVhNdVkyaGhibWRsWkZaaGJIVmxjeTV3ZFhOb0tHdGxlU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTHlvcVhHNGdJQ0FxSUVacGNtVnpJR0J2YmxKbGJtUmxjbUFnYVdZZ2RtRnNkV1Z6SUdoaGRtVWdZMmhoYm1kbFpDQnZjaUJnWm05eVkyVlNaVzVrWlhKZ1hHNGdJQ0FxSUdseklITmxkQ0IwYnlCMGNuVmxMbHh1SUNBZ0tpQkFjbVYwZFhKdUlIdDBhR2x6ZlZ4dUlDQWdLaTljYmlBZ2NtVnVaR1Z5S0dadmNtTmxVbVZ1WkdWeUlEMGdabUZzYzJVcElIdGNiaUFnSUNCcFppQW9LR1p2Y21ObFVtVnVaR1Z5SUh4OElIUm9hWE11YUdGelEyaGhibWRsWkNrZ0ppWWdkR2hwY3k1dmJsSmxibVJsY2lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV2YmxKbGJtUmxjaWdwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSFJvYVhNdVkyaGhibWRsWkZaaGJIVmxjeTVzWlc1bmRHZ2dQU0F3TzF4dUlDQWdJSFJvYVhNdWFHRnpRMmhoYm1kbFpDQTlJR1poYkhObE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVbVZ1WkdWeVpYSTdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ1NTUmVuZGVyZXIoX2V4dGVuZHMoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb246IHRydWVcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfcmVuZGVyID0gcmVxdWlyZSgnLi9yZW5kZXInKTtcblxudmFyIF9yZW5kZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVuZGVyKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVzKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENTU1JlbmRlcmVyID0gZnVuY3Rpb24gKF9SZW5kZXJlcikge1xuICBfaW5oZXJpdHMoQ1NTUmVuZGVyZXIsIF9SZW5kZXJlcik7XG5cbiAgZnVuY3Rpb24gQ1NTUmVuZGVyZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENTU1JlbmRlcmVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVuZGVyZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDU1NSZW5kZXJlci5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZWxlbWVudCA9IF9wcm9wcy5lbGVtZW50LFxuICAgICAgICBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiA9IF9wcm9wcy5lbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbjtcblxuICAgICgwLCBfcmVuZGVyMi5kZWZhdWx0KShlbGVtZW50LCB0aGlzLnN0YXRlLCB0aGlzLmNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKTtcbiAgfTtcblxuICBDU1NSZW5kZXJlci5wcm90b3R5cGUub25SZWFkID0gZnVuY3Rpb24gb25SZWFkKGtleSkge1xuICAgIHZhciB2YWx1ZVR5cGUgPSBfdmFsdWVUeXBlczIuZGVmYXVsdFtrZXldO1xuXG4gICAgaWYgKCFfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICAgIHZhciBkb21WYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpWygwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKGtleSldIHx8IDA7XG4gICAgICByZXR1cm4gdmFsdWVUeXBlICYmIHZhbHVlVHlwZS5wYXJzZSA/IHZhbHVlVHlwZS5wYXJzZShkb21WYWx1ZSkgOiBkb21WYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbHVlVHlwZSkge1xuICAgICAgICByZXR1cm4gdmFsdWVUeXBlLmRlZmF1bHQgfHwgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ1NTUmVuZGVyZXI7XG59KF8yLmRlZmF1bHQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJbVZzWlcxbGJuUWlMQ0p3Y205d2N5SXNJa05UVTFKbGJtUmxjbVZ5SWl3aVpXNWhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0aUxDSnZibEpsYm1SbGNpSXNJbk4wWVhSbElpd2lZMmhoYm1kbFpGWmhiSFZsY3lJc0ltOXVVbVZoWkNJc0ltdGxlU0lzSW5aaGJIVmxWSGx3WlNJc0ltUnZiVlpoYkhWbElpd2lkMmx1Wkc5M0lpd2laMlYwUTI5dGNIVjBaV1JUZEhsc1pTSXNJbkJoY25ObElpd2laR1ZtWVhWc2RDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMnRDUVRaQ1pTeFZRVUZWUVN4UFFVRldMRVZCUVcxQ1F5eExRVUZ1UWl4RlFVRXdRanRCUVVOMlF5eFRRVUZQTEVsQlFVbERMRmRCUVVvN1FVRkRURVlzYjBKQlJFczdRVUZGVEVjc1owTkJRVFJDTzBGQlJuWkNMRXRCUjBaR0xFdEJTRVVzUlVGQlVEdEJRVXRFTEVNN08wRkJia05FT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3pzN096czdPenRKUVVWTlF5eFhPenM3T3pzN096czdkMEpCUTBwRkxGRXNkVUpCUVZjN1FVRkJRU3hwUWtGRGRVTXNTMEZCUzBnc1MwRkVOVU03UVVGQlFTeFJRVU5FUkN4UFFVUkRMRlZCUTBSQkxFOUJSRU03UVVGQlFTeFJRVU5SUnl3d1FrRkVVaXhWUVVOUlFTd3dRa0ZFVWpzN1FVRkZWQ3d3UWtGQlZVZ3NUMEZCVml4RlFVRnRRaXhMUVVGTFN5eExRVUY0UWl4RlFVRXJRaXhMUVVGTFF5eGhRVUZ3UXl4RlFVRnRSRWdzTUVKQlFXNUVPMEZCUTBRc1J6czdkMEpCUlVSSkxFMHNiVUpCUVU5RExFY3NSVUZCU3p0QlFVTldMRkZCUVUxRExGbEJRVmtzY1VKQlFXTkVMRWRCUVdRc1EwRkJiRUk3TzBGQlJVRXNVVUZCU1N4RFFVRkRMSGxDUVVGbFFTeEhRVUZtTEVOQlFVd3NSVUZCTUVJN1FVRkJRU3hWUVVOb1FsSXNUMEZFWjBJc1IwRkRTaXhMUVVGTFF5eExRVVJFTEVOQlEyaENSQ3hQUVVSblFqczdRVUZGZUVJc1ZVRkJUVlVzVjBGQlYwTXNUMEZCVDBNc1owSkJRVkFzUTBGQmQwSmFMRTlCUVhoQ0xFVkJRV2xETEVsQlFXcERMRVZCUVhWRExIZENRVUZUVVN4SFFVRlVMRU5CUVhaRExFdEJRWGxFTEVOQlFURkZPMEZCUTBFc1lVRkJVVU1zWVVGQllVRXNWVUZCVlVrc1MwRkJlRUlzUjBGQmFVTktMRlZCUVZWSkxFdEJRVllzUTBGQlowSklMRkZCUVdoQ0xFTkJRV3BETEVkQlFUWkVRU3hSUVVGd1JUdEJRVU5FTEV0QlNrUXNUVUZKVHp0QlFVTk1MRlZCUVVsRUxGTkJRVW9zUlVGQlpUdEJRVU5pTEdWQlFVOUJMRlZCUVZWTExFOUJRVllzU1VGQmNVSXNRMEZCTlVJN1FVRkRSQ3hQUVVaRUxFMUJSVTg3UVVGRFRDeGxRVUZQTEVOQlFWQTdRVUZEUkR0QlFVTkdPMEZCUTBZc1J5SXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JTWlc1a1pYSmxjaUJtY205dElDY3VMaThuTzF4dWFXMXdiM0owSUhKbGJtUmxja05UVXlCbWNtOXRJQ2N1TDNKbGJtUmxjaWM3WEc1cGJYQnZjblFnZEhKaGJuTm1iM0p0VUhKdmNITWdabkp2YlNBbkxpOTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVhVzF3YjNKMElIWmhiSFZsVkhsd1pYTk5ZWEFnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3ljN1hHNXBiWEJ2Y25RZ2NISmxabWw0WlhJZ1puSnZiU0FuTGk5d2NtVm1hWGhsY2ljN1hHNWNibU5zWVhOeklFTlRVMUpsYm1SbGNtVnlJR1Y0ZEdWdVpITWdVbVZ1WkdWeVpYSWdlMXh1SUNCdmJsSmxibVJsY2lncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdWc1pXMWxiblFzSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lISmxibVJsY2tOVFV5aGxiR1Z0Wlc1MExDQjBhR2x6TG5OMFlYUmxMQ0IwYUdsekxtTm9ZVzVuWldSV1lXeDFaWE1zSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1R0Y2JpQWdmVnh1WEc0Z0lHOXVVbVZoWkNoclpYa3BJSHRjYmlBZ0lDQmpiMjV6ZENCMllXeDFaVlI1Y0dVZ1BTQjJZV3gxWlZSNWNHVnpUV0Z3VzJ0bGVWMDdYRzVjYmlBZ0lDQnBaaUFvSVhSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElIdGNiaUFnSUNBZ0lHTnZibk4wSUhzZ1pXeGxiV1Z1ZENCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQWdJR052Ym5OMElHUnZiVlpoYkhWbElEMGdkMmx1Wkc5M0xtZGxkRU52YlhCMWRHVmtVM1I1YkdVb1pXeGxiV1Z1ZEN3Z2JuVnNiQ2xiY0hKbFptbDRaWElvYTJWNUtWMGdmSHdnTUR0Y2JpQWdJQ0FnSUhKbGRIVnliaUFvZG1Gc2RXVlVlWEJsSUNZbUlIWmhiSFZsVkhsd1pTNXdZWEp6WlNrZ1B5QjJZV3gxWlZSNWNHVXVjR0Z5YzJVb1pHOXRWbUZzZFdVcElEb2daRzl0Vm1Gc2RXVTdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdsbUlDaDJZV3gxWlZSNWNHVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFpoYkhWbFZIbHdaUzVrWldaaGRXeDBJSHg4SURBN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTUR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnS0dWc1pXMWxiblFzSUhCeWIzQnpLU0I3WEc0Z0lISmxkSFZ5YmlCdVpYY2dRMU5UVW1WdVpHVnlaWElvZTF4dUlDQWdJR1ZzWlcxbGJuUXNYRzRnSUNBZ1pXNWhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0NklIUnlkV1VzWEc0Z0lDQWdMaTR1Y0hKdmNITmNiaUFnZlNrN1hHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1JlbmRlcmVyKF9leHRlbmRzKHtcbiAgICBlbGVtZW50OiBlbGVtZW50XG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZXMpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFNWR1JlbmRlcmVyID0gZnVuY3Rpb24gKF9SZW5kZXJlcikge1xuICBfaW5oZXJpdHMoU1ZHUmVuZGVyZXIsIF9SZW5kZXJlcik7XG5cbiAgZnVuY3Rpb24gU1ZHUmVuZGVyZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU1ZHUmVuZGVyZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIHZhciBfcHJvcHMkZWxlbWVudCRnZXRCQm8gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKSxcbiAgICAgICAgeCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby54LFxuICAgICAgICB5ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLnksXG4gICAgICAgIHdpZHRoID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8uaGVpZ2h0O1xuXG4gICAgX3RoaXMuZWxlbWVudERpbWVuc2lvbnMgPSB7IHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBTVkdSZW5kZXJlci5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgIHZhciBhdHRycyA9ICgwLCBfYnVpbGQyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIHRoaXMuZWxlbWVudERpbWVuc2lvbnMpO1xuICAgICgwLCBfdXRpbHMuc2V0RE9NQXR0cnMpKGVsZW1lbnQsIGF0dHJzKTtcbiAgfTtcblxuICBTVkdSZW5kZXJlci5wcm90b3R5cGUub25SZWFkID0gZnVuY3Rpb24gb25SZWFkKGtleSkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG5cbiAgICBpZiAoIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZhbHVlVHlwZSA9IF92YWx1ZVR5cGVzMi5kZWZhdWx0W2tleV07XG4gICAgICByZXR1cm4gdmFsdWVUeXBlID8gdmFsdWVUeXBlLmRlZmF1bHQgOiAwO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU1ZHUmVuZGVyZXI7XG59KF8yLmRlZmF1bHQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJbVZzWlcxbGJuUWlMQ0p3Y205d2N5SXNJbE5XUjFKbGJtUmxjbVZ5SWl3aVoyVjBRa0p2ZUNJc0luZ2lMQ0o1SWl3aWQybGtkR2dpTENKb1pXbG5hSFFpTENKbGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lJc0ltOXVVbVZ1WkdWeUlpd2lZWFIwY25NaUxDSnpkR0YwWlNJc0ltOXVVbVZoWkNJc0ltdGxlU0lzSW1kbGRFRjBkSEpwWW5WMFpTSXNJblpoYkhWbFZIbHdaU0lzSW1SbFptRjFiSFFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0clFrRm5RMlVzVlVGQlZVRXNUMEZCVml4RlFVRnRRa01zUzBGQmJrSXNSVUZCTUVJN1FVRkRka01zVTBGQlR5eEpRVUZKUXl4WFFVRktPMEZCUTB4R08wRkJSRXNzUzBGRlJrTXNTMEZHUlN4RlFVRlFPMEZCU1VRc1F6czdRVUZ5UTBRN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN096czdPenRKUVVWTlF5eFhPenM3UVVGRFNpeDFRa0ZCV1VRc1MwRkJXaXhGUVVGdFFqdEJRVUZCT3p0QlFVRkJMR2xFUVVOcVFpeHhRa0ZCVFVFc1MwRkJUaXhEUVVScFFqczdRVUZCUVN4blEwRkhaVUVzVFVGQlRVUXNUMEZCVGl4RFFVRmpSeXhQUVVGa0xFVkJTR1k3UVVGQlFTeFJRVWRVUXl4RFFVaFRMSGxDUVVkVVFTeERRVWhUTzBGQlFVRXNVVUZIVGtNc1EwRklUU3g1UWtGSFRrRXNRMEZJVFR0QlFVRkJMRkZCUjBoRExFdEJTRWNzZVVKQlIwaEJMRXRCU0VjN1FVRkJRU3hSUVVkSlF5eE5RVWhLTEhsQ1FVZEpRU3hOUVVoS096dEJRVWxxUWl4VlFVRkxReXhwUWtGQlRDeEhRVUY1UWl4RlFVRkZTaXhKUVVGR0xFVkJRVXRETEVsQlFVd3NSVUZCVVVNc1dVRkJVaXhGUVVGbFF5eGpRVUZtTEVWQlFYcENPMEZCU21sQ08wRkJTMnhDT3p0M1FrRkZSRVVzVVN4MVFrRkJWenRCUVVGQkxGRkJRMFJVTEU5QlJFTXNSMEZEVnl4TFFVRkxReXhMUVVSb1FpeERRVU5FUkN4UFFVUkRPenRCUVVWVUxGRkJRVTFWTEZGQlFWRXNjVUpCUVUwc1MwRkJTME1zUzBGQldDeEZRVUZyUWl4TFFVRkxTQ3hwUWtGQmRrSXNRMEZCWkR0QlFVTkJMRFJDUVVGWlVpeFBRVUZhTEVWQlFYRkNWU3hMUVVGeVFqdEJRVU5FTEVjN08zZENRVVZFUlN4TkxHMUNRVUZQUXl4SExFVkJRVXM3UVVGQlFTeFJRVU5HWWl4UFFVUkZMRWRCUTFVc1MwRkJTME1zUzBGRVppeERRVU5HUkN4UFFVUkZPenM3UVVGSFZpeFJRVUZKTEVOQlFVTXNlVUpCUVdWaExFZEJRV1lzUTBGQlRDeEZRVUV3UWp0QlFVTjRRaXhoUVVGUFlpeFJRVUZSWXl4WlFVRlNMRU5CUVhGQ1JDeEhRVUZ5UWl4RFFVRlFPMEZCUTBRc1MwRkdSQ3hOUVVWUE8wRkJRMHdzVlVGQlRVVXNXVUZCV1N4eFFrRkJZVVlzUjBGQllpeERRVUZzUWp0QlFVTkJMR0ZCUVZGRkxGTkJRVVFzUjBGQlkwRXNWVUZCVlVNc1QwRkJlRUlzUjBGQmEwTXNRMEZCZWtNN1FVRkRSRHRCUVVOR0xFY2lMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVW1WdVpHVnlaWElnWm5KdmJTQW5MaTR2Snp0Y2JtbHRjRzl5ZENCaWRXbHNaQ0JtY205dElDY3VMMkoxYVd4a0p6dGNibWx0Y0c5eWRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lCbWNtOXRJQ2N1TGk5amMzTXZkSEpoYm5ObWIzSnRMWEJ5YjNCekp6dGNibWx0Y0c5eWRDQjJZV3gxWlZSNWNHVk5ZWEFnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3ljN1hHNXBiWEJ2Y25RZ2V5QnpaWFJFVDAxQmRIUnljeUI5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1Oc1lYTnpJRk5XUjFKbGJtUmxjbVZ5SUdWNGRHVnVaSE1nVW1WdVpHVnlaWElnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lITjFjR1Z5S0hCeWIzQnpLVHRjYmx4dUlDQWdJR052Ym5OMElIc2dlQ3dnZVN3Z2QybGtkR2dzSUdobGFXZG9kQ0I5SUQwZ2NISnZjSE11Wld4bGJXVnVkQzVuWlhSQ1FtOTRLQ2s3WEc0Z0lDQWdkR2hwY3k1bGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lBOUlIc2dlQ3dnZVN3Z2QybGtkR2dzSUdobGFXZG9kQ0I5TzF4dUlDQjlYRzVjYmlBZ2IyNVNaVzVrWlhJb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCbGJHVnRaVzUwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHTnZibk4wSUdGMGRISnpJRDBnWW5WcGJHUW9kR2hwY3k1emRHRjBaU3dnZEdocGN5NWxiR1Z0Wlc1MFJHbHRaVzV6YVc5dWN5azdYRzRnSUNBZ2MyVjBSRTlOUVhSMGNuTW9aV3hsYldWdWRDd2dZWFIwY25NcE8xeHVJQ0I5WEc1Y2JpQWdiMjVTWldGa0tHdGxlU2tnZTF4dUlDQWdJR052Ym5OMElIc2daV3hsYldWdWRDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JseHVJQ0FnSUdsbUlDZ2hkSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR1ZzWlcxbGJuUXVaMlYwUVhSMGNtbGlkWFJsS0d0bGVTazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbFZIbHdaU0E5SUhaaGJIVmxWSGx3WlUxaGNGdHJaWGxkTzF4dUlDQWdJQ0FnY21WMGRYSnVJQ2gyWVd4MVpWUjVjR1VwSUQ4Z2RtRnNkV1ZVZVhCbExtUmxabUYxYkhRZ09pQXdPMXh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQW9aV3hsYldWdWRDd2djSEp2Y0hNcElIdGNiaUFnY21WMGRYSnVJRzVsZHlCVFZrZFNaVzVrWlhKbGNpaDdYRzRnSUNBZ1pXeGxiV1Z1ZEN4Y2JpQWdJQ0F1TGk1d2NtOXdjMXh1SUNCOUtUdGNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmcvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBTVkdQYXRoUmVuZGVyZXIoX2V4dGVuZHMoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFNWR1BhdGhSZW5kZXJlciA9IGZ1bmN0aW9uIChfUmVuZGVyZXIpIHtcbiAgX2luaGVyaXRzKFNWR1BhdGhSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBTVkdQYXRoUmVuZGVyZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU1ZHUGF0aFJlbmRlcmVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICB2YXIgX3Byb3BzJGVsZW1lbnQkZ2V0QkJvID0gcHJvcHMuZWxlbWVudC5nZXRCQm94KCksXG4gICAgICAgIHggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueCxcbiAgICAgICAgeSA9IF9wcm9wcyRlbGVtZW50JGdldEJCby55LFxuICAgICAgICB3aWR0aCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLmhlaWdodDtcblxuICAgIF90aGlzLmVsZW1lbnREaW1lbnNpb25zID0ge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHksXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHBhdGhMZW5ndGg6IHByb3BzLmVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU1ZHUGF0aFJlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBwYXRoTGVuZ3RoID0gdGhpcy5lbGVtZW50RGltZW5zaW9ucy5wYXRoTGVuZ3RoO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgKDAsIF91dGlscy5zZXRET01BdHRycykoZWxlbWVudCwgKDAsIF9idWlsZDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgcGF0aExlbmd0aCkpO1xuICB9O1xuXG4gIFNWR1BhdGhSZW5kZXJlci5wcm90b3R5cGUub25SZWFkID0gZnVuY3Rpb24gb25SZWFkKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gIH07XG5cbiAgcmV0dXJuIFNWR1BhdGhSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTFhCaGRHZ3ZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHNpWld4bGJXVnVkQ0lzSW5CeWIzQnpJaXdpVTFaSFVHRjBhRkpsYm1SbGNtVnlJaXdpWjJWMFFrSnZlQ0lzSW5naUxDSjVJaXdpZDJsa2RHZ2lMQ0pvWldsbmFIUWlMQ0psYkdWdFpXNTBSR2x0Wlc1emFXOXVjeUlzSW5CaGRHaE1aVzVuZEdnaUxDSm5aWFJVYjNSaGJFeGxibWQwYUNJc0ltOXVVbVZ1WkdWeUlpd2ljM1JoZEdVaUxDSnZibEpsWVdRaUxDSnJaWGtpTENKblpYUkJkSFJ5YVdKMWRHVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRyUWtFMlFtVXNWVUZCVlVFc1QwRkJWaXhGUVVGdFFrTXNTMEZCYmtJc1JVRkJNRUk3UVVGRGRrTXNVMEZCVHl4SlFVRkpReXhsUVVGS08wRkJRMHhHTzBGQlJFc3NTMEZGUmtNc1MwRkdSU3hGUVVGUU8wRkJTVVFzUXpzN1FVRnNRMFE3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN096czdPMGxCUlUxRExHVTdPenRCUVVOS0xESkNRVUZaUkN4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlFVRXNhVVJCUTJwQ0xIRkNRVUZOUVN4TFFVRk9MRU5CUkdsQ096dEJRVUZCTEdkRFFVZGxRU3hOUVVGTlJDeFBRVUZPTEVOQlFXTkhMRTlCUVdRc1JVRklaanRCUVVGQkxGRkJSMVJETEVOQlNGTXNlVUpCUjFSQkxFTkJTRk03UVVGQlFTeFJRVWRPUXl4RFFVaE5MSGxDUVVkT1FTeERRVWhOTzBGQlFVRXNVVUZIU0VNc1MwRklSeXg1UWtGSFNFRXNTMEZJUnp0QlFVRkJMRkZCUjBsRExFMUJTRW9zZVVKQlIwbEJMRTFCU0VvN08wRkJTV3BDTEZWQlFVdERMR2xDUVVGTUxFZEJRWGxDTzBGQlEzWkNTaXhWUVVSMVFqdEJRVVYyUWtNc1ZVRkdkVUk3UVVGSGRrSkRMR3RDUVVoMVFqdEJRVWwyUWtNc2IwSkJTblZDTzBGQlMzWkNSU3hyUWtGQldWSXNUVUZCVFVRc1QwRkJUaXhEUVVGalZTeGpRVUZrTzBGQlRGY3NTMEZCZWtJN1FVRkthVUk3UVVGWGJFSTdPelJDUVVWRVF5eFJMSFZDUVVGWE8wRkJRVUVzVVVGRFJFWXNWVUZFUXl4SFFVTmpMRXRCUVV0RUxHbENRVVJ1UWl4RFFVTkVReXhWUVVSRE8wRkJRVUVzVVVGRlJGUXNUMEZHUXl4SFFVVlhMRXRCUVV0RExFdEJSbWhDTEVOQlJVUkVMRTlCUmtNN08wRkJSMVFzTkVKQlFWbEJMRTlCUVZvc1JVRkJjVUlzY1VKQlFVMHNTMEZCUzFrc1MwRkJXQ3hGUVVGclFrZ3NWVUZCYkVJc1EwRkJja0k3UVVGRFJDeEhPenMwUWtGRlJFa3NUU3h0UWtGQlQwTXNSeXhGUVVGTE8wRkJRMVlzVjBGQlR5eExRVUZMWWl4TFFVRk1MRU5CUVZkRUxFOUJRVmdzUTBGQmJVSmxMRmxCUVc1Q0xFTkJRV2REUkN4SFFVRm9ReXhEUVVGUU8wRkJRMFFzUnlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlNaVzVrWlhKbGNpQm1jbTl0SUNjdUxpOG5PMXh1YVcxd2IzSjBJR0oxYVd4a0lHWnliMjBnSnk0dlluVnBiR1FuTzF4dWFXMXdiM0owSUhzZ2MyVjBSRTlOUVhSMGNuTWdmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVqYkdGemN5QlRWa2RRWVhSb1VtVnVaR1Z5WlhJZ1pYaDBaVzVrY3lCU1pXNWtaWEpsY2lCN1hHNGdJR052Ym5OMGNuVmpkRzl5S0hCeWIzQnpLU0I3WEc0Z0lDQWdjM1Z3WlhJb2NISnZjSE1wTzF4dVhHNGdJQ0FnWTI5dWMzUWdleUI0TENCNUxDQjNhV1IwYUN3Z2FHVnBaMmgwSUgwZ1BTQndjbTl3Y3k1bGJHVnRaVzUwTG1kbGRFSkNiM2dvS1R0Y2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5SRWFXMWxibk5wYjI1eklEMGdlMXh1SUNBZ0lDQWdlQ3hjYmlBZ0lDQWdJSGtzWEc0Z0lDQWdJQ0IzYVdSMGFDeGNiaUFnSUNBZ0lHaGxhV2RvZEN4Y2JpQWdJQ0FnSUhCaGRHaE1aVzVuZEdnNklIQnliM0J6TG1Wc1pXMWxiblF1WjJWMFZHOTBZV3hNWlc1bmRHZ29LVnh1SUNBZ0lIMDdYRzRnSUgxY2JseHVJQ0J2YmxKbGJtUmxjaWdwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJSEJoZEdoTVpXNW5kR2dnZlNBOUlIUm9hWE11Wld4bGJXVnVkRVJwYldWdWMybHZibk03WEc0Z0lDQWdZMjl1YzNRZ2V5QmxiR1Z0Wlc1MElIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJSE5sZEVSUFRVRjBkSEp6S0dWc1pXMWxiblFzSUdKMWFXeGtLSFJvYVhNdWMzUmhkR1VzSUhCaGRHaE1aVzVuZEdncEtUdGNiaUFnZlZ4dVhHNGdJRzl1VW1WaFpDaHJaWGtwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1d2NtOXdjeTVsYkdWdFpXNTBMbWRsZEVGMGRISnBZblYwWlNoclpYa3BPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJQ2hsYkdWdFpXNTBMQ0J3Y205d2N5a2dlMXh1SUNCeVpYUjFjbTRnYm1WM0lGTldSMUJoZEdoU1pXNWtaWEpsY2loN1hHNGdJQ0FnWld4bGJXVnVkQ3hjYmlBZ0lDQXVMaTV3Y205d2MxeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0Q29sb3JWYWx1ZXMgPSBleHBvcnRzLmZpbmRWYWx1ZUFuZFVuaXQgPSBleHBvcnRzLmNyZWF0ZVVuaXRUeXBlID0gZXhwb3J0cy5pc0ZpcnN0Q2hhcnMgPSBleHBvcnRzLmNvbnRhaW5zID0gZXhwb3J0cy5zcGxpdENvbW1hRGVsaW1pdGVkID0gZXhwb3J0cy5zZXRET01BdHRycyA9IGV4cG9ydHMuaXNTdHJpbmcgPSBleHBvcnRzLmlzT2JqID0gZXhwb3J0cy5pc051bSA9IGV4cG9ydHMuaXNGdW5jID0gZXhwb3J0cy5pc0FycmF5ID0gZXhwb3J0cy5oYXNQcm9wZXJ0eSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBleHBvcnRzLmNhbWVsVG9EYXNoID0gdW5kZWZpbmVkO1xuZXhwb3J0cy5zcGxpdENvbG9yVmFsdWVzID0gc3BsaXRDb2xvclZhbHVlcztcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybWVycycpO1xuXG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbnZhciB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNhbWVsVG9EYXNoID0gZXhwb3J0cy5jYW1lbFRvRGFzaCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qXG4gIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gIFxuICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xudmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy5jdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbi8qXG4gIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gIEBwYXJhbSBbb2JqZWN0XVxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYm9vbGVhbl1cbiovXG52YXIgaGFzUHJvcGVydHkgPSBleHBvcnRzLmhhc1Byb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHlOYW1lKSB7XG4gIHJldHVybiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xudmFyIGlzQXJyYXkgPSBleHBvcnRzLmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbnZhciBpc0Z1bmMgPSBleHBvcnRzLmlzRnVuYyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG52YXIgaXNOdW0gPSBleHBvcnRzLmlzTnVtID0gZnVuY3Rpb24gKG51bSkge1xuICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbnZhciBpc09iaiA9IGV4cG9ydHMuaXNPYmogPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59O1xuXG52YXIgc2V0RE9NQXR0cnMgPSBleHBvcnRzLnNldERPTUF0dHJzID0gZnVuY3Rpb24gKGVsZW1lbnQsIGF0dHJzKSB7XG4gIGZvciAodmFyIGtleSBpbiBhdHRycykge1xuICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuICAgIH1cbiAgfVxufTtcbi8qXG4gIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcbn07XG5cbi8qKlxuICogIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgYW55IGFyZ3VtZW50IGZvciBgdGVybWBcbiAqIGBjb250YWlucygnbmVlZGxlJykoJ2hheXN0YWNrJylgXG4gKi9cbnZhciBjb250YWlucyA9IGV4cG9ydHMuY29udGFpbnMgPSBmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pICE9PSAtMTtcbiAgfTtcbn07XG5cbi8qKlxuICogIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgdG8gc2VlIGlmIGFuIGFyZ3VtZW50IGlzXG4gKiAgdGhlIGZpcnN0IGNoYXJhY3RlcnMgaW4gdGhlIHByb3ZpZGVkIGB0ZXJtYFxuICogYGlzRmlyc3RDaGFycygnbmVlZGxlJykoJ2hheXN0YWNrJylgXG4gKi9cbnZhciBpc0ZpcnN0Q2hhcnMgPSBleHBvcnRzLmlzRmlyc3RDaGFycyA9IGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBpc1N0cmluZyh0ZXJtKSAmJiB2LmluZGV4T2YodGVybSkgPT09IDA7XG4gIH07XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHVuaXQgdmFsdWUgdHlwZVxuICovXG52YXIgY3JlYXRlVW5pdFR5cGUgPSBleHBvcnRzLmNyZWF0ZVVuaXRUeXBlID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0ZXN0OiBjb250YWlucyh0eXBlKSxcbiAgICBwYXJzZTogcGFyc2VGbG9hdCxcbiAgICB0cmFuc2Zvcm06ICgwLCBfdHJhbnNmb3JtZXJzLmFwcGVuZFVuaXQpKHR5cGUpXG4gIH07XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgc3BsaXQgY29sb3JcbiAqIHZhbHVlcyBmcm9tIHN0cmluZyBpbnRvIGFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXG4gKiBgc3BsaXRDb2xvclZhbHVlcyhbJ1JlZCcsICdHcmVlbicsICdCbHVlJ10pKCdyZ2JhKDAsMCwwKScpYFxuICovXG5mdW5jdGlvbiBzcGxpdENvbG9yVmFsdWVzKHRlcm1zKSB7XG4gIHZhciBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcblxuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgdmFsdWVzID0ge307XG4gICAgdmFyIHZhbHVlc0FycmF5ID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2KSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgIHZhbHVlc1t0ZXJtc1tpXV0gPSB2YWx1ZXNBcnJheVtpXSAhPT0gdW5kZWZpbmVkID8gcGFyc2VGbG9hdCh2YWx1ZXNBcnJheVtpXSkgOiAxO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH07XG59XG5cbi8qXG4gIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gIFxuICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgXG4gIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG52YXIgZmluZFZhbHVlQW5kVW5pdCA9IGV4cG9ydHMuZmluZFZhbHVlQW5kVW5pdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodmFsdWUubWF0Y2gpIHtcbiAgICB2YXIgc3BsaXRWYWx1ZSA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsdWVbMV0pLFxuICAgICAgdW5pdDogc3BsaXRWYWx1ZVsyXVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlIH07XG4gIH1cbn07XG5cbi8qXG4gIFNwbGl0IGNvbG9yIHN0cmluZyBpbnRvIG1hcCBvZiBjb2xvciBwcm9wZXJ0aWVzXG5cbiAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICB7IFJlZDogMjU1Li4uIH1cbiovXG52YXIgZ2V0Q29sb3JWYWx1ZXMgPSBleHBvcnRzLmdldENvbG9yVmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlLCBjb2xvclRlcm1zKSB7XG4gIHZhciBudW1Db2xvclRlcm1zID0gY29sb3JUZXJtcy5sZW5ndGg7XG4gIHZhciBjb2xvclZhbHVlcyA9IHt9O1xuICB2YXIgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2YWx1ZSkpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29sb3JUZXJtczsgaSsrKSB7XG4gICAgY29sb3JWYWx1ZXNbY29sb3JUZXJtc1tpXV0gPSBjb2xvcnNbaV0gIT09IHVuZGVmaW5lZCA/IGNvbG9yc1tpXSA6IDE7XG4gIH1cblxuICByZXR1cm4gY29sb3JWYWx1ZXM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRYUnBiSE11YW5NaVhTd2libUZ0WlhNaU9sc2ljM0JzYVhSRGIyeHZjbFpoYkhWbGN5SXNJa05CVFVWTVgwTkJVMFZmVUVGVVZFVlNUaUlzSWxKRlVFeEJRMFZmVkVWTlVFeEJWRVVpTENKSVFWTmZVRVZTUms5U1RVRk9RMFZmVGs5WElpd2ljR1Z5Wm05eWJXRnVZMlVpTENKdWIzY2lMQ0oyWVhKVWVYQmxJaXdpZG1GeWFXRmliR1VpTENKUFltcGxZM1FpTENKd2NtOTBiM1I1Y0dVaUxDSjBiMU4wY21sdVp5SXNJbU5oYkd3aUxDSnpiR2xqWlNJc0ltTmhiV1ZzVkc5RVlYTm9JaXdpYzNSeWFXNW5JaXdpY21Wd2JHRmpaU0lzSW5SdlRHOTNaWEpEWVhObElpd2lZM1Z5Y21WdWRGUnBiV1VpTENKRVlYUmxJaXdpWjJWMFZHbHRaU0lzSW1oaGMxQnliM0JsY25SNUlpd2liMkpxWldOMElpd2ljSEp2Y0dWeWRIbE9ZVzFsSWl3aWFHRnpUM2R1VUhKdmNHVnlkSGtpTENKMWJtUmxabWx1WldRaUxDSnBjMEZ5Y21GNUlpd2lZWEp5SWl3aWFYTkdkVzVqSWl3aWIySnFJaXdpYVhOT2RXMGlMQ0p1ZFcwaUxDSnBjMDlpYWlJc0ltbHpVM1J5YVc1bklpd2ljM1J5SWl3aWMyVjBSRTlOUVhSMGNuTWlMQ0psYkdWdFpXNTBJaXdpWVhSMGNuTWlMQ0pyWlhraUxDSnpaWFJCZEhSeWFXSjFkR1VpTENKemNHeHBkRU52YlcxaFJHVnNhVzFwZEdWa0lpd2lkbUZzZFdVaUxDSnpjR3hwZENJc0ltTnZiblJoYVc1eklpd2lkR1Z5YlNJc0luWWlMQ0pwYm1SbGVFOW1JaXdpYVhOR2FYSnpkRU5vWVhKeklpd2lZM0psWVhSbFZXNXBkRlI1Y0dVaUxDSjBlWEJsSWl3aWRHVnpkQ0lzSW5CaGNuTmxJaXdpY0dGeWMyVkdiRzloZENJc0luUnlZVzV6Wm05eWJTSXNJblJsY20xeklpd2liblZ0VkdWeWJYTWlMQ0pzWlc1bmRHZ2lMQ0oyWVd4MVpYTWlMQ0oyWVd4MVpYTkJjbkpoZVNJc0ltZGxkRlpoYkhWbFJuSnZiVVoxYm1OMGFXOXVVM1J5YVc1bklpd2lhU0lzSW1acGJtUldZV3gxWlVGdVpGVnVhWFFpTENKdFlYUmphQ0lzSW5Od2JHbDBWbUZzZFdVaUxDSjFibWwwSWl3aVoyVjBRMjlzYjNKV1lXeDFaWE1pTENKamIyeHZjbFJsY20xeklpd2liblZ0UTI5c2IzSlVaWEp0Y3lJc0ltTnZiRzl5Vm1Gc2RXVnpJaXdpWTI5c2IzSnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMUZCWjBsblFrRXNaMElzUjBGQlFVRXNaMEk3TzBGQmFFbG9RanM3UVVGRlFTeEpRVUZOUXl4eFFrRkJjVUlzYVVKQlFUTkNPMEZCUTBFc1NVRkJUVU1zYlVKQlFXMUNMRTlCUVhwQ08wRkJRMEVzU1VGQlRVTXNjMEpCUVhWQ0xFOUJRVTlETEZkQlFWQXNTMEZCZFVJc1YwRkJka0lzU1VGQmMwTkJMRmxCUVZsRExFZEJRUzlGT3p0QlFVVkJPenM3T3pzN1FVRk5RU3hKUVVGTlF5eFZRVUZWTEZWQlFVTkRMRkZCUVVRN1FVRkJRU3hUUVVGalF5eFBRVUZQUXl4VFFVRlFMRU5CUVdsQ1F5eFJRVUZxUWl4RFFVRXdRa01zU1VGQk1VSXNRMEZCSzBKS0xGRkJRUzlDTEVWQlFYbERTeXhMUVVGNlF5eERRVUVyUXl4RFFVRXZReXhGUVVGclJDeERRVUZETEVOQlFXNUVMRU5CUVdRN1FVRkJRU3hEUVVGb1FqczdRVUZGUVRzN096czdPMEZCVFU4c1NVRkJUVU1zYjBOQlFXTXNWVUZCUTBNc1RVRkJSRHRCUVVGQkxGTkJRVmxCTEU5QlFVOURMRTlCUVZBc1EwRkJaV1FzYTBKQlFXWXNSVUZCYlVORExHZENRVUZ1UXl4RlFVRnhSR01zVjBGQmNrUXNSVUZCV2p0QlFVRkJMRU5CUVhCQ096dEJRVVZRT3pzN096dEJRVXRQTEVsQlFVMURMRzlEUVVGalpDeHpRa0ZCYzBJN1FVRkJRU3hUUVVGTlF5eFpRVUZaUXl4SFFVRmFMRVZCUVU0N1FVRkJRU3hEUVVGMFFpeEhRVUZuUkR0QlFVRkJMRk5CUVUwc1NVRkJTV0VzU1VGQlNpeEhRVUZYUXl4UFFVRllMRVZCUVU0N1FVRkJRU3hEUVVGd1JUczdRVUZGVURzN096czdPenRCUVU5UExFbEJRVTFETEc5RFFVRmpMRlZCUVVORExFMUJRVVFzUlVGQlUwTXNXVUZCVkR0QlFVRkJMRk5CUVRCQ1JDeFBRVUZQUlN4alFVRlFMRU5CUVhOQ1JDeFpRVUYwUWl4TFFVRjFRMFFzVDBGQlQwTXNXVUZCVUN4TlFVRjVRa1VzVTBGQk1VWTdRVUZCUVN4RFFVRndRanM3UVVGRlVEczdPenM3TzBGQlRVOHNTVUZCVFVNc05FSkJRVlVzVlVGQlEwTXNSMEZCUkR0QlFVRkJMRk5CUVZOd1FpeFJRVUZSYjBJc1IwRkJVaXhOUVVGcFFpeFBRVUV4UWp0QlFVRkJMRU5CUVdoQ096dEJRVVZRT3pzN096czdRVUZOVHl4SlFVRk5ReXd3UWtGQlV5eFZRVUZEUXl4SFFVRkVPMEZCUVVFc1UwRkJVM1JDTEZGQlFWRnpRaXhIUVVGU0xFMUJRV2xDTEZWQlFURkNPMEZCUVVFc1EwRkJaanM3UVVGRlVEczdPenM3TzBGQlRVOHNTVUZCVFVNc2QwSkJRVkVzVlVGQlEwTXNSMEZCUkR0QlFVRkJMRk5CUVZNc1QwRkJUMEVzUjBGQlVDeExRVUZsTEZGQlFYaENPMEZCUVVFc1EwRkJaRHM3UVVGRlVEczdPenM3TzBGQlRVOHNTVUZCVFVNc2QwSkJRVkVzVlVGQlEwZ3NSMEZCUkR0QlFVRkJMRk5CUVZNc1QwRkJUMEVzUjBGQlVDeExRVUZsTEZGQlFYaENPMEZCUVVFc1EwRkJaRHM3UVVGRlVEczdPenM3TzBGQlRVOHNTVUZCVFVrc09FSkJRVmNzVlVGQlEwTXNSMEZCUkR0QlFVRkJMRk5CUVZNc1QwRkJUMEVzUjBGQlVDeExRVUZsTEZGQlFYaENPMEZCUVVFc1EwRkJha0k3TzBGQlJVRXNTVUZCVFVNc2IwTkJRV01zVlVGQlEwTXNUMEZCUkN4RlFVRlZReXhMUVVGV0xFVkJRVzlDTzBGQlF6ZERMRTlCUVVzc1NVRkJTVU1zUjBGQlZDeEpRVUZuUWtRc1MwRkJhRUlzUlVGQmRVSTdRVUZEY2tJc1VVRkJTVUVzVFVGQlRXSXNZMEZCVGl4RFFVRnhRbU1zUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNM1FrWXNZMEZCVVVjc1dVRkJVaXhEUVVGeFFrUXNSMEZCY2tJc1JVRkJNRUpFTEUxQlFVMURMRWRCUVU0c1EwRkJNVUk3UVVGRFJEdEJRVU5HTzBGQlEwWXNRMEZPVFR0QlFVOVFPenM3T3pzN096dEJRVkZQTEVsQlFVMUZMRzlFUVVGelFpeFZRVUZEUXl4TFFVRkVPMEZCUVVFc1UwRkJWMUlzVTBGQlUxRXNTMEZCVkN4SlFVRnJRa0VzVFVGQlRVTXNTMEZCVGl4RFFVRlpMRTFCUVZvc1EwRkJiRUlzUjBGQmQwTXNRMEZCUTBRc1MwRkJSQ3hEUVVGdVJEdEJRVUZCTEVOQlFUVkNPenRCUVVWUU96czdPMEZCU1U4c1NVRkJUVVVzT0VKQlFWY3NWVUZCUTBNc1NVRkJSRHRCUVVGQkxGTkJRVlVzVlVGQlEwTXNRMEZCUkN4RlFVRlBPMEZCUTNaRExGZEJRVkZhTEZOQlFWTlhMRWxCUVZRc1MwRkJhMEpETEVWQlFVVkRMRTlCUVVZc1EwRkJWVVlzU1VGQlZpeE5RVUZ2UWl4RFFVRkRMRU5CUVM5RE8wRkJRMFFzUjBGR2RVSTdRVUZCUVN4RFFVRnFRanM3UVVGSlVEczdPenM3UVVGTFR5eEpRVUZOUnl4elEwRkJaU3hWUVVGRFNDeEpRVUZFTzBGQlFVRXNVMEZCVlN4VlFVRkRReXhEUVVGRUxFVkJRVTg3UVVGRE0wTXNWMEZCVVZvc1UwRkJVMWNzU1VGQlZDeExRVUZyUWtNc1JVRkJSVU1zVDBGQlJpeERRVUZWUml4SlFVRldMRTFCUVc5Q0xFTkJRVGxETzBGQlEwUXNSMEZHTWtJN1FVRkJRU3hEUVVGeVFqczdRVUZKVURzN08wRkJSMDhzU1VGQlRVa3NNRU5CUVdsQ0xGVkJRVU5ETEVsQlFVUXNSVUZCVlR0QlFVTjBReXhUUVVGUE8wRkJRMHhETEZWQlFVMVFMRk5CUVZOTkxFbEJRVlFzUTBGRVJEdEJRVVZNUlN4WFFVRlBReXhWUVVaR08wRkJSMHhETEdWQlFWY3NPRUpCUVZkS0xFbEJRVmc3UVVGSVRpeEhRVUZRTzBGQlMwUXNRMEZPVFRzN1FVRlJVRHM3T3pzN1FVRkxUeXhUUVVGVGFFUXNaMEpCUVZRc1EwRkJNRUp4UkN4TFFVRXhRaXhGUVVGcFF6dEJRVU4wUXl4TlFVRk5ReXhYUVVGWFJDeE5RVUZOUlN4TlFVRjJRanM3UVVGRlFTeFRRVUZQTEZWQlFWVllMRU5CUVZZc1JVRkJZVHRCUVVOc1FpeFJRVUZOV1N4VFFVRlRMRVZCUVdZN1FVRkRRU3hSUVVGTlF5eGpRVUZqYkVJc2IwSkJRVzlDYlVJc01rSkJRVEpDWkN4RFFVRXpRaXhEUVVGd1FpeERRVUZ3UWpzN1FVRkZRU3hUUVVGTExFbEJRVWxsTEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNVd3NVVUZCY0VJc1JVRkJPRUpMTEVkQlFUbENMRVZCUVcxRE8wRkJRMnBEU0N4aFFVRlBTQ3hOUVVGTlRTeERRVUZPTEVOQlFWQXNTVUZCYjBKR0xGbEJRVmxGTEVOQlFWb3NUVUZCYlVKdVF5eFRRVUZ3UWl4SFFVRnBRekpDTEZkQlFWZE5MRmxCUVZsRkxFTkJRVm9zUTBGQldDeERRVUZxUXl4SFFVRTRSQ3hEUVVGcVJqdEJRVU5FT3p0QlFVVkVMRmRCUVU5SUxFMUJRVkE3UVVGRFJDeEhRVlJFTzBGQlZVUTdPMEZCUlVRN096czdPenM3TzBGQlVVOHNTVUZCVFVrc09FTkJRVzFDTEZWQlFVTndRaXhMUVVGRUxFVkJRVmM3UVVGRGVrTXNUVUZCU1VFc1RVRkJUWEZDTEV0QlFWWXNSVUZCYVVJN1FVRkRaaXhSUVVGTlF5eGhRVUZoZEVJc1RVRkJUWEZDTEV0QlFVNHNRMEZCV1N4dFFrRkJXaXhEUVVGdVFqczdRVUZGUVN4WFFVRlBPMEZCUTB4eVFpeGhRVUZQVnl4WFFVRlhWeXhYUVVGWExFTkJRVmdzUTBGQldDeERRVVJHTzBGQlJVeERMRmxCUVU5RUxGZEJRVmNzUTBGQldEdEJRVVpHTEV0QlFWQTdRVUZKUkN4SFFWQkVMRTFCVDA4N1FVRkRUQ3hYUVVGUExFVkJRVVYwUWl4WlFVRkdMRVZCUVZBN1FVRkRSRHRCUVVOR0xFTkJXRTA3TzBGQllWQTdPenM3T3pzN1FVRlBUeXhKUVVGTmQwSXNNRU5CUVdsQ0xGVkJRVU40UWl4TFFVRkVMRVZCUVZGNVFpeFZRVUZTTEVWQlFYVkNPMEZCUTI1RUxFMUJRVTFETEdkQ1FVRm5Ra1FzVjBGQlYxWXNUVUZCYWtNN1FVRkRRU3hOUVVGTldTeGpRVUZqTEVWQlFYQkNPMEZCUTBFc1RVRkJUVU1zVTBGQlV6ZENMRzlDUVVGdlFtMUNMREpDUVVFeVFteENMRXRCUVROQ0xFTkJRWEJDTEVOQlFXWTdPMEZCUlVFc1QwRkJTeXhKUVVGSmJVSXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKVHl4aFFVRndRaXhGUVVGdFExQXNSMEZCYmtNc1JVRkJkME03UVVGRGRFTlJMR2RDUVVGWlJpeFhRVUZYVGl4RFFVRllMRU5CUVZvc1NVRkJPRUpUTEU5QlFVOVVMRU5CUVZBc1RVRkJZMjVETEZOQlFXWXNSMEZCTkVJMFF5eFBRVUZQVkN4RFFVRlFMRU5CUVRWQ0xFZEJRWGRETEVOQlFYSkZPMEZCUTBRN08wRkJSVVFzVTBGQlQxRXNWMEZCVUR0QlFVTkVMRU5CVmswaUxDSm1hV3hsSWpvaWRYUnBiSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJoY0hCbGJtUlZibWwwSUgwZ1puSnZiU0FuTGk5MGNtRnVjMlp2Y20xbGNuTW5PMXh1WEc1amIyNXpkQ0JEUVUxRlRGOURRVk5GWDFCQlZGUkZVazRnUFNBdktGdGhMWHBkS1NoYlFTMWFYU2t2Wnp0Y2JtTnZibk4wSUZKRlVFeEJRMFZmVkVWTlVFeEJWRVVnUFNBbkpERXRKREluTzF4dVkyOXVjM1FnU0VGVFgxQkZVa1pQVWsxQlRrTkZYMDVQVnlBOUlDaDBlWEJsYjJZZ2NHVnlabTl5YldGdVkyVWdJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JSEJsY21admNtMWhibU5sTG01dmR5azdYRzVjYmk4cVhHNGdJRWRsZENCMllYSWdkSGx3WlNCaGN5QnpkSEpwYm1kY2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0emRISnBibWRkT2lCU1pYUjFjbTV6TENCbWIzSWdhVzV6ZEdGdVkyVWdKMDlpYW1WamRDY2dhV1lnVzI5aWFtVmpkQ0JQWW1wbFkzUmRYRzRxTDF4dVkyOXVjM1FnZG1GeVZIbHdaU0E5SUNoMllYSnBZV0pzWlNrZ1BUNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp5NWpZV3hzS0haaGNtbGhZbXhsS1M1emJHbGpaU2c0TENBdE1TazdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdZMkZ0Wld4RFlYTmxJSFJ2SUdSaGMyZ3RZMkZ6WlZ4dVhHNGdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0JBY21WMGRYSnVJRnR6ZEhKcGJtZGRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR05oYldWc1ZHOUVZWE5vSUQwZ0tITjBjbWx1WnlrZ1BUNGdjM1J5YVc1bkxuSmxjR3hoWTJVb1EwRk5SVXhmUTBGVFJWOVFRVlJVUlZKT0xDQlNSVkJNUVVORlgxUkZUVkJNUVZSRktTNTBiMHh2ZDJWeVEyRnpaU2dwTzF4dVhHNHZLbHh1SUNCSFpXNWxjbUYwWlNCamRYSnlaVzUwSUhScGJXVnpkR0Z0Y0Z4dUlDQmNiaUFnUUhKbGRIVnliaUJiZEdsdFpYTjBZVzF3WFRvZ1EzVnljbVZ1ZENCVlRrbFlJSFJwYldWemRHRnRjRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqZFhKeVpXNTBWR2x0WlNBOUlFaEJVMTlRUlZKR1QxSk5RVTVEUlY5T1QxY2dQeUFvS1NBOVBpQndaWEptYjNKdFlXNWpaUzV1YjNjb0tTQTZJQ2dwSUQwK0lHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BPMXh1WEc0dktseHVJQ0JEYUdWamF5QnBaaUJ2WW1wbFkzUWdhR0Z6SUhCeWIzQmxjblI1SUdGdVpDQnBkQ0JwYzI0bmRDQjFibVJsWm1sdVpXUmNibHh1SUNCQWNHRnlZVzBnVzI5aWFtVmpkRjFjYmlBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHaGhjMUJ5YjNCbGNuUjVJRDBnS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGxPWVcxbEtTQTlQaUJ2WW1wbFkzUXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2NISnZjR1Z5ZEhsT1lXMWxLU0FtSmlCdlltcGxZM1JiY0hKdmNHVnlkSGxPWVcxbFhTQWhQVDBnZFc1a1pXWnBibVZrTzF4dVhHNHZLbHh1SUNCSmN5QjFkR2xzY3lCMllYSWdZVzRnWVhKeVlYa2dQeUJjYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFYwYVd4ekxuWmhjbFI1Y0dVZ1BUMDlJQ2RCY25KaGVTZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5CY25KaGVTQTlJQ2hoY25JcElEMCtJSFpoY2xSNWNHVW9ZWEp5S1NBOVBUMGdKMEZ5Y21GNUp6dGNibHh1THlwY2JpQWdTWE1nZFhScGJITWdkbUZ5SUdFZ1puVnVZM1JwYjI0Z1B5QmNiaUFnWEc0Z0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIVjBhV3h6TG5aaGNsUjVjR1VnUFQwOUlDZEdkVzVqZEdsdmJpZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5HZFc1aklEMGdLRzlpYWlrZ1BUNGdkbUZ5Vkhsd1pTaHZZbW9wSUQwOVBTQW5SblZ1WTNScGIyNG5PMXh1WEc0dktseHVJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lTQnVkVzFpWlhJL1hHNGdJRnh1SUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMGVYQmxiMllnUFQwOUlDZHVkVzFpWlhJblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpUblZ0SUQwZ0tHNTFiU2tnUFQ0Z2RIbHdaVzltSUc1MWJTQTlQVDBnSjI1MWJXSmxjaWM3WEc1Y2JpOHFYRzRnSUVseklIVjBhV3h6SUhaaGNpQmhiaUJ2WW1wbFkzUS9YRzRnSUZ4dUlDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBlWEJsYjJZZ1BUMDlJQ2R2WW1wbFkzUW5YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VDJKcUlEMGdLRzlpYWlrZ1BUNGdkSGx3Wlc5bUlHOWlhaUE5UFQwZ0oyOWlhbVZqZENjN1hHNWNiaThxWEc0Z0lFbHpJSFYwYVd4eklIWmhjaUJoSUhOMGNtbHVaeUEvSUZ4dUlDQmNiaUFnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZEhsd1pXOW1JSE4wY2lBOVBUMGdKM04wY21sdVp5ZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5UZEhKcGJtY2dQU0FvYzNSeUtTQTlQaUIwZVhCbGIyWWdjM1J5SUQwOVBTQW5jM1J5YVc1bkp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElITmxkRVJQVFVGMGRISnpJRDBnS0dWc1pXMWxiblFzSUdGMGRISnpLU0E5UGlCN1hHNGdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQmhkSFJ5Y3lrZ2UxeHVJQ0FnSUdsbUlDaGhkSFJ5Y3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQmxiR1Z0Wlc1MExuTmxkRUYwZEhKcFluVjBaU2hyWlhrc0lHRjBkSEp6VzJ0bGVWMHBPMXh1SUNBZ0lIMWNiaUFnZlZ4dWZUdGNiaThxWEc0Z0lGTndiR2wwSUdOdmJXMWhMV1JsYkdsdGFYUmxaQ0J6ZEhKcGJtZGNibHh1SUNCY0ltWnZieXhpWVhKY0lpQXRQaUJiWENKbWIyOWNJaXdnWENKaVlYSmNJbDFjYmx4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdRSEpsZEhWeWJpQmJZWEp5WVhsZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITndiR2wwUTI5dGJXRkVaV3hwYldsMFpXUWdQU0FvZG1Gc2RXVXBJRDArSUdselUzUnlhVzVuS0haaGJIVmxLU0EvSUhaaGJIVmxMbk53YkdsMEtDOHNYRnh6S2k4cElEb2dXM1poYkhWbFhUdGNibHh1THlvcVhHNGdLaUFnVW1WMGRYSnVjeUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdkMmxzYkNCamFHVmpheUJoYm5rZ1lYSm5kVzFsYm5RZ1ptOXlJR0IwWlhKdFlGeHVJQ29nWUdOdmJuUmhhVzV6S0NkdVpXVmtiR1VuS1NnbmFHRjVjM1JoWTJzbktXQmNiaUFxTDF4dVpYaHdiM0owSUdOdmJuTjBJR052Ym5SaGFXNXpJRDBnS0hSbGNtMHBJRDArSUNoMktTQTlQaUI3WEc0Z0lISmxkSFZ5YmlBb2FYTlRkSEpwYm1jb2RHVnliU2tnSmlZZ2RpNXBibVJsZUU5bUtIUmxjbTBwSUNFOVBTQXRNU2s3WEc1OU8xeHVYRzR2S2lwY2JpQXFJQ0JTWlhSMWNtNXpJR0VnWm5WdVkzUnBiMjRnZEdoaGRDQjNhV3hzSUdOb1pXTnJJSFJ2SUhObFpTQnBaaUJoYmlCaGNtZDFiV1Z1ZENCcGMxeHVJQ29nSUhSb1pTQm1hWEp6ZENCamFHRnlZV04wWlhKeklHbHVJSFJvWlNCd2NtOTJhV1JsWkNCZ2RHVnliV0JjYmlBcUlHQnBjMFpwY25OMFEyaGhjbk1vSjI1bFpXUnNaU2NwS0Nkb1lYbHpkR0ZqYXljcFlGeHVJQ292WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5HYVhKemRFTm9ZWEp6SUQwZ0tIUmxjbTBwSUQwK0lDaDJLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQW9hWE5UZEhKcGJtY29kR1Z5YlNrZ0ppWWdkaTVwYm1SbGVFOW1LSFJsY20wcElEMDlQU0F3S1R0Y2JuMDdYRzVjYmk4cUtseHVJQ29nUTNKbFlYUmxJR0VnZFc1cGRDQjJZV3gxWlNCMGVYQmxYRzRnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVlZibWwwVkhsd1pTQTlJQ2gwZVhCbEtTQTlQaUI3WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnZEdWemREb2dZMjl1ZEdGcGJuTW9kSGx3WlNrc1hHNGdJQ0FnY0dGeWMyVTZJSEJoY25ObFJteHZZWFFzWEc0Z0lDQWdkSEpoYm5ObWIzSnRPaUJoY0hCbGJtUlZibWwwS0hSNWNHVXBYRzRnSUgwN1hHNTlPMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaWE1nWVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z2MzQnNhWFFnWTI5c2IzSmNiaUFxSUhaaGJIVmxjeUJtY205dElITjBjbWx1WnlCcGJuUnZJR0Z1SUc5aWFtVmpkQ0J2WmlCd2NtOXdaWEowYVdWelhHNGdLaUJnYzNCc2FYUkRiMnh2Y2xaaGJIVmxjeWhiSjFKbFpDY3NJQ2RIY21WbGJpY3NJQ2RDYkhWbEoxMHBLQ2R5WjJKaEtEQXNNQ3d3S1NjcFlGeHVJQ292WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnYzNCc2FYUkRiMnh2Y2xaaGJIVmxjeWgwWlhKdGN5a2dlMXh1SUNCamIyNXpkQ0J1ZFcxVVpYSnRjeUE5SUhSbGNtMXpMbXhsYm1kMGFEdGNibHh1SUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnS0hZcElIdGNiaUFnSUNCamIyNXpkQ0IyWVd4MVpYTWdQU0I3ZlR0Y2JpQWdJQ0JqYjI1emRDQjJZV3gxWlhOQmNuSmhlU0E5SUhOd2JHbDBRMjl0YldGRVpXeHBiV2wwWldRb1oyVjBWbUZzZFdWR2NtOXRSblZ1WTNScGIyNVRkSEpwYm1jb2Rpa3BPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxVVpYSnRjenNnYVNzcktTQjdYRzRnSUNBZ0lDQjJZV3gxWlhOYmRHVnliWE5iYVYxZElEMGdLSFpoYkhWbGMwRnljbUY1VzJsZElDRTlQU0IxYm1SbFptbHVaV1FwSUQ4Z2NHRnljMlZHYkc5aGRDaDJZV3gxWlhOQmNuSmhlVnRwWFNrZ09pQXhPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMllXeDFaWE03WEc0Z0lIMDdYRzU5WEc1Y2JpOHFYRzRnSUZOd2JHbDBJR0VnZG1Gc2RXVWdhVzUwYnlCaElIWmhiSFZsTDNWdWFYUWdiMkpxWldOMFhHNGdJRnh1SUNBZ0lGd2lNakF3Y0hoY0lpQXRQaUI3SUhaaGJIVmxPaUF5TURBc0lIVnVhWFE2SUZ3aWNIaGNJaUI5WEc0Z0lDQWdYRzRnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nVm1Gc2RXVWdkRzhnYzNCc2FYUmNiaUFnUUhKbGRIVnliaUJiYjJKcVpXTjBYVG9nVDJKcVpXTjBJSGRwZEdnZ2RtRnNkV1VnWVc1a0lIVnVhWFFnY0hKdmNITmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdabWx1WkZaaGJIVmxRVzVrVlc1cGRDQTlJQ2gyWVd4MVpTa2dQVDRnZTF4dUlDQnBaaUFvZG1Gc2RXVXViV0YwWTJncElIdGNiaUFnSUNCamIyNXpkQ0J6Y0d4cGRGWmhiSFZsSUQwZ2RtRnNkV1V1YldGMFkyZ29MeWd0UDF4Y1pDcGNYQzQvWEZ4a0tpa29MaW9wTHlrN1hHNWNiaUFnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnZG1Gc2RXVTZJSEJoY25ObFJteHZZWFFvYzNCc2FYUldZV3gxWlZzeFhTa3NYRzRnSUNBZ0lDQjFibWwwT2lBZ2MzQnNhWFJXWVd4MVpWc3lYVnh1SUNBZ0lIMDdYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdjbVYwZFhKdUlIc2dkbUZzZFdVZ2ZUdGNiaUFnZlZ4dWZUdGNibHh1THlwY2JpQWdVM0JzYVhRZ1kyOXNiM0lnYzNSeWFXNW5JR2x1ZEc4Z2JXRndJRzltSUdOdmJHOXlJSEJ5YjNCbGNuUnBaWE5jYmx4dUlDQmNJbkpuWW1Fb01qVTFMQ0F5TlRVc0lESTFOU3dnTUNsY0lpd2dXMXdpVW1Wa1hDSXNJQ2RIY21WbGJsd2lMQ0JjSWtKc2RXVmNJaXdnWENKQmJIQm9ZVndpWFZ4dVhHNGdJSHNnVW1Wa09pQXlOVFV1TGk0Z2ZWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFJEYjJ4dmNsWmhiSFZsY3lBOUlDaDJZV3gxWlN3Z1kyOXNiM0pVWlhKdGN5a2dQVDRnZTF4dUlDQmpiMjV6ZENCdWRXMURiMnh2Y2xSbGNtMXpJRDBnWTI5c2IzSlVaWEp0Y3k1c1pXNW5kR2c3WEc0Z0lHTnZibk4wSUdOdmJHOXlWbUZzZFdWeklEMGdlMzA3WEc0Z0lHTnZibk4wSUdOdmJHOXljeUE5SUhOd2JHbDBRMjl0YldGRVpXeHBiV2wwWldRb1oyVjBWbUZzZFdWR2NtOXRSblZ1WTNScGIyNVRkSEpwYm1jb2RtRnNkV1VwS1R0Y2JseHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJVTnZiRzl5VkdWeWJYTTdJR2tyS3lrZ2UxeHVJQ0FnSUdOdmJHOXlWbUZzZFdWelcyTnZiRzl5VkdWeWJYTmJhVjFkSUQwZ0tHTnZiRzl5YzF0cFhTQWhQVDBnZFc1a1pXWnBibVZrS1NBL0lHTnZiRzl5YzF0cFhTQTZJREU3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnWTI5c2IzSldZV3gxWlhNN1hHNTlPMXh1WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICBEZXRlY3QgYW5kIGxvYWQgYW4gYXBwcm9wcmlhdGUgY2xvY2sgc2V0dGluZyBmb3IgdGhlIGVudmlyb25tZW50XG4qL1xudmFyIGhhc1JBRiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB0cnVlIDogZmFsc2U7XG5cbnZhciBvbk5leHRGcmFtZSA9IHZvaWQgMDtcblxuaWYgKGhhc1JBRikge1xuICBvbk5leHRGcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgfTtcbn0gZWxzZSB7XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgXG4gICAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG4gICAgICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgICAgXG4gICAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICAgIFxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICAgIFxuICAgICAgTUlUIGxpY2Vuc2VcbiAgICAqL1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgICBvbk5leHRGcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2LjcgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhsYXN0VGltZSk7XG4gICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICB9O1xuICB9KSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBvbk5leHRGcmFtZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bWNtRnRaWE41Ym1NdmIyNHRibVY0ZEMxbWNtRnRaUzVxY3lKZExDSnVZVzFsY3lJNld5Sm9ZWE5TUVVZaUxDSjNhVzVrYjNjaUxDSnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VpTENKdmJrNWxlSFJHY21GdFpTSXNJbU5oYkd4aVlXTnJJaXdpYkdGemRGUnBiV1VpTENKamRYSnlaVzUwVkdsdFpTSXNJa1JoZEdVaUxDSm5aWFJVYVcxbElpd2lkR2x0WlZSdlEyRnNiQ0lzSWsxaGRHZ2lMQ0p0WVhnaUxDSnpaWFJVYVcxbGIzVjBJbDBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVRzN08wRkJSMEVzU1VGQlRVRXNVMEZCVlN4UFFVRlBReXhOUVVGUUxFdEJRV3RDTEZkQlFXeENMRWxCUVdsRFFTeFBRVUZQUXl4eFFrRkJla01zUjBGQmEwVXNTVUZCYkVVc1IwRkJlVVVzUzBGQmVFWTdPMEZCUlVFc1NVRkJTVU1zYjBKQlFVbzdPMEZCUlVFc1NVRkJTVWdzVFVGQlNpeEZRVUZaTzBGQlExWkhMR2RDUVVGakxGVkJRVU5ETEZGQlFVUTdRVUZCUVN4WFFVRmpTQ3hQUVVGUFF5eHhRa0ZCVUN4RFFVRTJRa1VzVVVGQk4wSXNRMEZCWkR0QlFVRkJMRWRCUVdRN1FVRkZSQ3hEUVVoRUxFMUJSMDg3UVVGQlFUdEJRVU5NT3pzN096czdPenM3T3pzN08wRkJZMEVzVVVGQlNVTXNWMEZCVnl4RFFVRm1PenRCUVVWQlJpeHJRa0ZCWXl4VlFVRkRReXhSUVVGRUxFVkJRV003UVVGRE1VSXNWVUZCVFVVc1kwRkJZeXhKUVVGSlF5eEpRVUZLTEVkQlFWZERMRTlCUVZnc1JVRkJjRUk3UVVGRFFTeFZRVUZOUXl4aFFVRmhReXhMUVVGTFF5eEhRVUZNTEVOQlFWTXNRMEZCVkN4RlFVRlpMRkZCUVZGTUxHTkJRV05FTEZGQlFYUkNMRU5CUVZvc1EwRkJia0k3TzBGQlJVRkJMR2xDUVVGWFF5eGpRVUZqUnl4VlFVRjZRanM3UVVGRlFVY3NhVUpCUVZjN1FVRkJRU3hsUVVGTlVpeFRRVUZUUXl4UlFVRlVMRU5CUVU0N1FVRkJRU3hQUVVGWUxFVkJRWEZEU1N4VlFVRnlRenRCUVVORUxFdEJVRVE3UVVGcVFrczdRVUY1UWs0N08ydENRVVZqVGl4WElpd2labWxzWlNJNkltOXVMVzVsZUhRdFpuSmhiV1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDQkVaWFJsWTNRZ1lXNWtJR3h2WVdRZ1lXNGdZWEJ3Y205d2NtbGhkR1VnWTJ4dlkyc2djMlYwZEdsdVp5Qm1iM0lnZEdobElHVnVkbWx5YjI1dFpXNTBYRzRxTDF4dVkyOXVjM1FnYUdGelVrRkdJRDBnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JSGRwYm1SdmR5NXlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VwSUQ4Z2RISjFaU0E2SUdaaGJITmxPMXh1WEc1c1pYUWdiMjVPWlhoMFJuSmhiV1U3WEc1Y2JtbG1JQ2hvWVhOU1FVWXBJSHRjYmlBZ2IyNU9aWGgwUm5KaGJXVWdQU0FvWTJGc2JHSmhZMnNwSUQwK0lIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVW9ZMkZzYkdKaFkyc3BPMXh1WEc1OUlHVnNjMlVnZTF4dUlDQXZLbHh1SUNBZ0lISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0J3YjJ4NVptbHNiRnh1SUNBZ0lGeHVJQ0FnSUVadmNpQkpSVGd2T1NCR2JHbHVjM1J2Ym1WeklHRnVaQ0J1YjI0dFluSnZkM05sY2lCbGJuWnBjbTl1YldWdWRITmNibHh1SUNBZ0lGUmhhMlZ1SUdaeWIyMGdVR0YxYkNCSmNtbHphQzRnVjJVbmRtVWdjM1J5YVhCd1pXUWdiM1YwSUdOaGJtTmxiRUZ1YVcxaGRHbHZia1p5WVcxbElHTm9aV05yY3lCaVpXTmhkWE5sSUhkbElHUnZiaWQwSUdadmVDQjNhWFJvSUhSb1lYUmNiaUFnSUNCY2JpQWdJQ0JvZEhSd09pOHZjR0YxYkdseWFYTm9MbU52YlM4eU1ERXhMM0psY1hWbGMzUmhibWx0WVhScGIyNW1jbUZ0WlMxbWIzSXRjMjFoY25RdFlXNXBiV0YwYVc1bkwxeHVJQ0FnSUdoMGRIQTZMeTl0ZVM1dmNHVnlZUzVqYjIwdlpXMXZiR3hsY2k5aWJHOW5Mekl3TVRFdk1USXZNakF2Y21WeGRXVnpkR0Z1YVcxaGRHbHZibVp5WVcxbExXWnZjaTF6YldGeWRDMWxjaTFoYm1sdFlYUnBibWRjYmlBZ0lDQWdYRzRnSUNBZ2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxJSEJ2YkhsbWFXeHNJR0o1SUVWeWFXc2dUY08yYkd4bGNpNGdabWw0WlhNZ1puSnZiU0JRWVhWc0lFbHlhWE5vSUdGdVpDQlVhVzV2SUZwcGFtUmxiRnh1SUNBZ0lDQmNiaUFnSUNCTlNWUWdiR2xqWlc1elpWeHVJQ0FxTDF4dUlDQnNaWFFnYkdGemRGUnBiV1VnUFNBd08xeHVYRzRnSUc5dVRtVjRkRVp5WVcxbElEMGdLR05oYkd4aVlXTnJLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdZM1Z5Y21WdWRGUnBiV1VnUFNCdVpYY2dSR0YwWlNncExtZGxkRlJwYldVb0tUdGNiaUFnSUNCamIyNXpkQ0IwYVcxbFZHOURZV3hzSUQwZ1RXRjBhQzV0WVhnb01Dd2dNVFl1TnlBdElDaGpkWEp5Wlc1MFZHbHRaU0F0SUd4aGMzUlVhVzFsS1NrN1hHNWNiaUFnSUNCc1lYTjBWR2x0WlNBOUlHTjFjbkpsYm5SVWFXMWxJQ3NnZEdsdFpWUnZRMkZzYkR0Y2JseHVJQ0FnSUhObGRGUnBiV1Z2ZFhRb0tDa2dQVDRnWTJGc2JHSmhZMnNvYkdGemRGUnBiV1VwTENCMGFXMWxWRzlEWVd4c0tUdGNiaUFnZlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdiMjVPWlhoMFJuSmhiV1U3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL29uLW5leHQtZnJhbWUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVSZW5kZXJTdGVwO1xuZnVuY3Rpb24gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApIHtcbiAgLyoqXG4gICAqIFdlIHVzZSB0d28gYXJyYXlzLCBvbmUgZm9yIHRoaXMgZnJhbWUgYW5kIG9uZSB0byBxdWV1ZSBmb3IgdGhlXG4gICAqIG5leHQgZnJhbWUsIHJldXNpbmcgZWFjaCB0byBhdm9pZCBHQy5cbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgdmFyIGZ1bmN0aW9uc1RvUnVuID0gW107XG4gIHZhciBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgc2NoZWR1bGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgc3RhcnRSZW5kZXJMb29wKCk7XG4gICAgICAvLyBJZiB0aGlzIGNhbGxiYWNrIGlzbid0IGFscmVhZHkgc2NoZWR1bGVkIHRvIHJ1biBuZXh0IGZyYW1lXG4gICAgICBpZiAoZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLnB1c2goY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjYW5jZWw6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdmFyIGluZGV4T2ZDYWxsYmFjayA9IGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgaWYgKGluZGV4T2ZDYWxsYmFjayAhPT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuc3BsaWNlKGluZGV4T2ZDYWxsYmFjaywgMSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHByb2Nlc3M6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgLy8gQ2xlYXIgbmV4dCBmcmFtZSBsaXN0XG4gICAgICB2YXIgX3JlZiA9IFtmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSwgZnVuY3Rpb25zVG9SdW5dO1xuICAgICAgLy8gU3dhcCB0aGlzIGZyYW1lIGFuZCBuZXh0IGZyYW1lIGFycmF5cyB0byBhdm9pZCBHQ1xuXG4gICAgICBmdW5jdGlvbnNUb1J1biA9IF9yZWZbMF07XG4gICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSA9IF9yZWZbMV07XG4gICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5sZW5ndGggPSAwO1xuXG4gICAgICAvLyBFeGVjdXRlIGFsbCBvZiB0aGlzIGZyYW1lJ3MgZnVuY3Rpb25zXG4gICAgICB2YXIgbnVtVGhpc0ZyYW1lID0gZnVuY3Rpb25zVG9SdW4ubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UaGlzRnJhbWU7IGkrKykge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bltpXSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bWNtRnRaWE41Ym1NdlkzSmxZWFJsTFhKbGJtUmxjaTF6ZEdWd0xtcHpJbDBzSW01aGJXVnpJanBiSW1OeVpXRjBaVkpsYm1SbGNsTjBaWEFpTENKemRHRnlkRkpsYm1SbGNreHZiM0FpTENKbWRXNWpkR2x2Ym5OVWIxSjFiaUlzSW1aMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxJaXdpYzJOb1pXUjFiR1VpTENKallXeHNZbUZqYXlJc0ltbHVaR1Y0VDJZaUxDSndkWE5vSWl3aVkyRnVZMlZzSWl3aWFXNWtaWGhQWmtOaGJHeGlZV05ySWl3aWMzQnNhV05sSWl3aWNISnZZMlZ6Y3lJc0lteGxibWQwYUNJc0ltNTFiVlJvYVhOR2NtRnRaU0lzSW1raVhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRkJkMEpCTEdkQ08wRkJRVlFzVTBGQlUwRXNaMEpCUVZRc1EwRkJNRUpETEdWQlFURkNMRVZCUVRKRE8wRkJRM2hFT3pzN096dEJRVXRCTEUxQlFVbERMR2xDUVVGcFFpeEZRVUZ5UWp0QlFVTkJMRTFCUVVsRExEQkNRVUV3UWl4RlFVRTVRanM3UVVGRlFTeFRRVUZQTzBGQlEweERMR05CUVZVc1ZVRkJRME1zVVVGQlJDeEZRVUZqTzBGQlEzUkNTanRCUVVOQk8wRkJRMEVzVlVGQlNVVXNkMEpCUVhkQ1J5eFBRVUY0UWl4RFFVRm5RMFFzVVVGQmFFTXNUVUZCT0VNc1EwRkJReXhEUVVGdVJDeEZRVUZ6UkR0QlFVTndSRVlzWjBOQlFYZENTU3hKUVVGNFFpeERRVUUyUWtZc1VVRkJOMEk3UVVGRFJEdEJRVU5HTEV0QlVFazdPMEZCVTB4SExGbEJRVkVzVlVGQlEwZ3NVVUZCUkN4RlFVRmpPMEZCUTNCQ0xGVkJRVTFKTEd0Q1FVRnJRazRzZDBKQlFYZENSeXhQUVVGNFFpeERRVUZuUTBRc1VVRkJhRU1zUTBGQmVFSTdRVUZEUVN4VlFVRkpTU3h2UWtGQmIwSXNRMEZCUXl4RFFVRjZRaXhGUVVFMFFqdEJRVU14UWs0c1owTkJRWGRDVHl4TlFVRjRRaXhEUVVFclFrUXNaVUZCTDBJc1JVRkJaMFFzUTBGQmFFUTdRVUZEUkR0QlFVTkdMRXRCWkVrN08wRkJaMEpNUlN4aFFVRlRMRmxCUVUwN08wRkJTV0k3UVVGS1lTeHBRa0ZGSzBJc1EwRkJRMUlzZFVKQlFVUXNSVUZCTUVKRUxHTkJRVEZDTEVOQlJpOUNPMEZCUTJJN08wRkJRME5CTEc5Q1FVWlpPMEZCUlVsRExEWkNRVVpLTzBGQlMySkJMRGhDUVVGM1FsTXNUVUZCZUVJc1IwRkJhVU1zUTBGQmFrTTdPMEZCUlVFN1FVRkRRU3hWUVVGTlF5eGxRVUZsV0N4bFFVRmxWU3hOUVVGd1F6dEJRVU5CTEZkQlFVc3NTVUZCU1VVc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpSQ3haUVVGd1FpeEZRVUZyUTBNc1IwRkJiRU1zUlVGQmRVTTdRVUZEY2tOYUxIVkNRVUZsV1N4RFFVRm1PMEZCUTBRN1FVRkRSanRCUVRWQ1NTeEhRVUZRTzBGQk9FSkVJaXdpWm1sc1pTSTZJbU55WldGMFpTMXlaVzVrWlhJdGMzUmxjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlHTnlaV0YwWlZKbGJtUmxjbE4wWlhBb2MzUmhjblJTWlc1a1pYSk1iMjl3S1NCN1hHNGdJQzhxS2x4dUlDQWdLaUJYWlNCMWMyVWdkSGR2SUdGeWNtRjVjeXdnYjI1bElHWnZjaUIwYUdseklHWnlZVzFsSUdGdVpDQnZibVVnZEc4Z2NYVmxkV1VnWm05eUlIUm9aVnh1SUNBZ0tpQnVaWGgwSUdaeVlXMWxMQ0J5WlhWemFXNW5JR1ZoWTJnZ2RHOGdZWFp2YVdRZ1IwTXVYRzRnSUNBcUlFQjBlWEJsSUh0QmNuSmhlWDFjYmlBZ0lDb3ZYRzRnSUd4bGRDQm1kVzVqZEdsdmJuTlViMUoxYmlBOUlGdGRPMXh1SUNCc1pYUWdablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldVZ1BTQmJYVHRjYmx4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUhOamFHVmtkV3hsT2lBb1kyRnNiR0poWTJzcElEMCtJSHRjYmlBZ0lDQWdJSE4wWVhKMFVtVnVaR1Z5VEc5dmNDZ3BPMXh1SUNBZ0lDQWdMeThnU1dZZ2RHaHBjeUJqWVd4c1ltRmpheUJwYzI0bmRDQmhiSEpsWVdSNUlITmphR1ZrZFd4bFpDQjBieUJ5ZFc0Z2JtVjRkQ0JtY21GdFpWeHVJQ0FnSUNBZ2FXWWdLR1oxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbExtbHVaR1Y0VDJZb1kyRnNiR0poWTJzcElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQm1kVzVqZEdsdmJuTlViMUoxYms1bGVIUkdjbUZ0WlM1d2RYTm9LR05oYkd4aVlXTnJLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdZMkZ1WTJWc09pQW9ZMkZzYkdKaFkyc3BJRDArSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR2x1WkdWNFQyWkRZV3hzWW1GamF5QTlJR1oxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbExtbHVaR1Y0VDJZb1kyRnNiR0poWTJzcE8xeHVJQ0FnSUNBZ2FXWWdLR2x1WkdWNFQyWkRZV3hzWW1GamF5QWhQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldVdWMzQnNhV05sS0dsdVpHVjRUMlpEWVd4c1ltRmpheXdnTVNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhCeWIyTmxjM002SUNncElEMCtJSHRjYmlBZ0lDQWdJQzh2SUZOM1lYQWdkR2hwY3lCbWNtRnRaU0JoYm1RZ2JtVjRkQ0JtY21GdFpTQmhjbkpoZVhNZ2RHOGdZWFp2YVdRZ1IwTmNiaUFnSUNBZ0lGdG1kVzVqZEdsdmJuTlViMUoxYml3Z1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1ZkSUQwZ1cyWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTENCbWRXNWpkR2x2Ym5OVWIxSjFibDA3WEc1Y2JpQWdJQ0FnSUM4dklFTnNaV0Z5SUc1bGVIUWdabkpoYldVZ2JHbHpkRnh1SUNBZ0lDQWdablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldVdWJHVnVaM1JvSUQwZ01EdGNibHh1SUNBZ0lDQWdMeThnUlhobFkzVjBaU0JoYkd3Z2IyWWdkR2hwY3lCbWNtRnRaU2R6SUdaMWJtTjBhVzl1YzF4dUlDQWdJQ0FnWTI5dWMzUWdiblZ0VkdocGMwWnlZVzFsSUQwZ1puVnVZM1JwYjI1elZHOVNkVzR1YkdWdVozUm9PMXh1SUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxVWFHbHpSbkpoYldVN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2Ym5OVWIxSjFibHRwWFNncE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVHRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9jcmVhdGUtcmVuZGVyLXN0ZXAuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGRTdHlsZVByb3BlcnR5U3RyaW5nO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZXMpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVFJBTlNMQVRFID0gJ3RyYW5zbGF0ZSc7XG52YXIgdHJhbnNsYXRlTWFwID0ge1xuICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gIHk6IFRSQU5TTEFURSArICdZJyxcbiAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuXG5mdW5jdGlvbiBidWlsZFN0eWxlUHJvcGVydHlTdHJpbmcoZWxlbWVudCwgc3RhdGUsIGNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gIHZhciBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gIHZhciBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgdmFyIHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAvLyBGaXJzdCBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGNoYW5nZWQgdHJhbnNmb3JtIHZhbHVlc1xuICAvLyBhbmQgaWYgdHJ1ZSBhZGQgYWxsIHRyYW5zZm9ybSB2YWx1ZXNcbiAgdmFyIG51bUNoYW5nZWRWYWx1ZXMgPSBjaGFuZ2VkVmFsdWVzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1DaGFuZ2VkVmFsdWVzOyBpKyspIHtcbiAgICB2YXIga2V5ID0gY2hhbmdlZFZhbHVlc1tpXTtcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0cmFuc2Zvcm0gcHJvcGVydHksIGFkZCBhbGwgb3RoZXIgdHJhbnNmb3JtIHByb3BzXG4gICAgLy8gdG8gY2hhbmdlZFZhbHVlcyBhbmQgdGhlbiBicmVha1xuICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcblxuICAgICAgZm9yICh2YXIgX2tleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W19rZXldICYmIGNoYW5nZWRWYWx1ZXMuaW5kZXhPZihfa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjaGFuZ2VkVmFsdWVzLnB1c2goX2tleSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIHRvdGFsTnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdG90YWxOdW1DaGFuZ2VkVmFsdWVzOyBfaSsrKSB7XG4gICAgdmFyIF9rZXkyID0gY2hhbmdlZFZhbHVlc1tfaV07XG4gICAgdmFyIHZhbHVlID0gc3RhdGVbX2tleTJdO1xuXG4gICAgaWYgKHRyYW5zbGF0ZU1hcFtfa2V5Ml0pIHtcbiAgICAgIF9rZXkyID0gdHJhbnNsYXRlTWFwW19rZXkyXTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgbnVtYmVyIG9yIG9iamVjdCBhbmQgd2UgaGF2ZSBmaWx0ZXIsIGFwcGx5IGZpbHRlclxuICAgIGlmIChfdmFsdWVUeXBlczIuZGVmYXVsdFtfa2V5Ml0gJiYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlKSB8fCAoMCwgX3V0aWxzLmlzT2JqKSh2YWx1ZSkpICYmIF92YWx1ZVR5cGVzMi5kZWZhdWx0W19rZXkyXS50cmFuc2Zvcm0pIHtcbiAgICAgIHZhbHVlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRbX2tleTJdLnRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtfa2V5Ml0pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBfa2V5MiArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgIHRyYW5zZm9ybUhhc1ogPSBfa2V5MiA9PT0gdHJhbnNsYXRlTWFwLnogPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoX2tleTIsIHRydWUpICsgJzonICsgdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgd2UgaGF2ZSB0cmFuc2Zvcm0gcHJvcHMsIGJ1aWxkIGEgdHJhbnNmb3JtIHN0cmluZ1xuICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gdHJhbnNsYXRlTWFwLnogKyAnKDApJztcbiAgICB9XG5cbiAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgndHJhbnNmb3JtJywgdHJ1ZSkgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gIH1cblxuICBlbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gcHJvcGVydHlTdHJpbmc7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNKbGJtUmxjaTVxY3lKZExDSnVZVzFsY3lJNld5SmlkV2xzWkZOMGVXeGxVSEp2Y0dWeWRIbFRkSEpwYm1jaUxDSlVVa0ZPVTB4QlZFVWlMQ0owY21GdWMyeGhkR1ZOWVhBaUxDSjRJaXdpZVNJc0lub2lMQ0psYkdWdFpXNTBJaXdpYzNSaGRHVWlMQ0pqYUdGdVoyVmtWbUZzZFdWeklpd2laVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNGlMQ0p3Y205d1pYSjBlVk4wY21sdVp5SXNJblJ5WVc1elptOXliVk4wY21sdVp5SXNJbWhoYzFSeVlXNXpabTl5YlNJc0luUnlZVzV6Wm05eWJVaGhjMW9pTENKdWRXMURhR0Z1WjJWa1ZtRnNkV1Z6SWl3aWJHVnVaM1JvSWl3aWFTSXNJbXRsZVNJc0ltbHVaR1Y0VDJZaUxDSndkWE5vSWl3aWRHOTBZV3hPZFcxRGFHRnVaMlZrVm1Gc2RXVnpJaXdpZG1Gc2RXVWlMQ0owY21GdWMyWnZjbTBpTENKemRIbHNaU0lzSW1OemMxUmxlSFFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGWmQwSkJMSGRDT3p0QlFWcDRRanM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVWQkxFbEJRVTFETEZsQlFWa3NWMEZCYkVJN1FVRkRRU3hKUVVGTlF5eGxRVUZsTzBGQlEyNUNReXhMUVVGSFJpeFpRVUZaTEVkQlJFazdRVUZGYmtKSExFdEJRVWRJTEZsQlFWa3NSMEZHU1R0QlFVZHVRa2tzUzBGQlIwb3NXVUZCV1R0QlFVaEpMRU5CUVhKQ096dEJRVTFsTEZOQlFWTkVMSGRDUVVGVUxFTkJRV3REVFN4UFFVRnNReXhGUVVFeVEwTXNTMEZCTTBNc1JVRkJhMFJETEdGQlFXeEVMRVZCUVdsRlF5d3dRa0ZCYWtVc1JVRkJOa1k3UVVGRE1VY3NUVUZCU1VNc2FVSkJRV2xDTEVWQlFYSkNPMEZCUTBFc1RVRkJTVU1zYTBKQlFXdENMRVZCUVhSQ08wRkJRMEVzVFVGQlNVTXNaVUZCWlN4TFFVRnVRanRCUVVOQkxFMUJRVWxETEdkQ1FVRm5RaXhMUVVGd1FqczdRVUZGUVR0QlFVTkJPMEZCUTBFc1RVRkJUVU1zYlVKQlFXMUNUaXhqUVVGalR5eE5RVUYyUXp0QlFVTkJMRTlCUVVzc1NVRkJTVU1zU1VGQlNTeERRVUZpTEVWQlFXZENRU3hKUVVGSlJpeG5Ra0ZCY0VJc1JVRkJjME5GTEVkQlFYUkRMRVZCUVRKRE8wRkJRM3BETEZGQlFVMURMRTFCUVUxVUxHTkJRV05STEVOQlFXUXNRMEZCV2pzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVVVGQlNTeDVRa0ZCWlVNc1IwRkJaaXhEUVVGS0xFVkJRWGxDTzBGQlEzWkNUQ3h4UWtGQlpTeEpRVUZtT3p0QlFVVkJMRmRCUVVzc1NVRkJTVXNzU1VGQlZDeEpRVUZuUWxZc1MwRkJhRUlzUlVGQmRVSTdRVUZEY2tJc1dVRkJTU3g1UWtGQlpWVXNTVUZCWml4TFFVRjFRbFFzWTBGQlkxVXNUMEZCWkN4RFFVRnpRa1FzU1VGQmRFSXNUVUZCSzBJc1EwRkJReXhEUVVFelJDeEZRVUU0UkR0QlFVTTFSRlFzZDBKQlFXTlhMRWxCUVdRc1EwRkJiVUpHTEVsQlFXNUNPMEZCUTBRN1FVRkRSanM3UVVGRlJEdEJRVU5FTzBGQlEwWTdPMEZCUlVRc1RVRkJUVWNzZDBKQlFYZENXaXhqUVVGalR5eE5RVUUxUXp0QlFVTkJMRTlCUVVzc1NVRkJTVU1zUzBGQlNTeERRVUZpTEVWQlFXZENRU3hMUVVGSlNTeHhRa0ZCY0VJc1JVRkJNa05LTEVsQlFUTkRMRVZCUVdkRU8wRkJRemxETEZGQlFVbERMRkZCUVUxVUxHTkJRV05STEVWQlFXUXNRMEZCVmp0QlFVTkJMRkZCUVVsTExGRkJRVkZrTEUxQlFVMVZMRXRCUVU0c1EwRkJXanM3UVVGRlFTeFJRVUZKWml4aFFVRmhaU3hMUVVGaUxFTkJRVW9zUlVGQmRVSTdRVUZEY2tKQkxHTkJRVTFtTEdGQlFXRmxMRXRCUVdJc1EwRkJUanRCUVVORU96dEJRVVZFTzBGQlEwRXNVVUZCU1N4eFFrRkJWMEVzUzBGQldDeE5RVUZ2UWl4clFrRkJUVWtzUzBGQlRpeExRVUZuUWl4clFrRkJUVUVzUzBGQlRpeERRVUZ3UXl4TFFVRnhSQ3h4UWtGQlYwb3NTMEZCV0N4RlFVRm5Ra3NzVTBGQmVrVXNSVUZCYjBZN1FVRkRiRVpFTEdOQlFWRXNjVUpCUVZkS0xFdEJRVmdzUlVGQlowSkxMRk5CUVdoQ0xFTkJRVEJDUkN4TFFVRXhRaXhEUVVGU08wRkJRMFE3TzBGQlJVUXNVVUZCU1N4NVFrRkJaVW9zUzBGQlppeERRVUZLTEVWQlFYbENPMEZCUTNaQ1RpeDVRa0ZCYlVKTkxGRkJRVTBzUjBGQlRpeEhRVUZaU1N4TFFVRmFMRWRCUVc5Q0xFbEJRWFpETzBGQlEwRlNMSE5DUVVGcFFra3NWVUZCVVdZc1lVRkJZVWNzUTBGQmRFSXNSMEZCTWtJc1NVRkJNMElzUjBGQmEwTlJMR0ZCUVd4RU8wRkJSVVFzUzBGS1JDeE5RVWxQTzBGQlEweElMSGRDUVVGclFpeE5RVUZOTEhkQ1FVRlRUeXhMUVVGVUxFVkJRV01zU1VGQlpDeERRVUZPTEVkQlFUUkNMRWRCUVRWQ0xFZEJRV3REU1N4TFFVRndSRHRCUVVORU8wRkJRMFk3TzBGQlJVUTdRVUZEUVN4TlFVRkpWQ3haUVVGS0xFVkJRV3RDTzBGQlEyaENMRkZCUVVrc1EwRkJRME1zWVVGQlJDeEpRVUZyUWtvc01FSkJRWFJDTEVWQlFXdEVPMEZCUTJoRVJTeDVRa0ZCYlVKVUxHRkJRV0ZITEVOQlFXSXNSMEZCYVVJc1MwRkJjRU03UVVGRFJEczdRVUZGUkVzc2MwSkJRV3RDTEUxQlFVMHNkMEpCUVZNc1YwRkJWQ3hGUVVGelFpeEpRVUYwUWl4RFFVRk9MRWRCUVc5RExFZEJRWEJETEVkQlFUQkRReXhsUVVFMVJEdEJRVU5FT3p0QlFVVkVUQ3hWUVVGUmFVSXNTMEZCVWl4RFFVRmpReXhQUVVGa0xFbEJRWGxDWkN4alFVRjZRanRCUVVORUlpd2labWxzWlNJNkluSmxibVJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IwY21GdWMyWnZjbTFRY205d2N5Qm1jbTl0SUNjdUwzUnlZVzV6Wm05eWJTMXdjbTl3Y3ljN1hHNXBiWEJ2Y25RZ2RtRnNkV1ZVZVhCbGN5Qm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpKenRjYm1sdGNHOXlkQ0J3Y21WbWFYaGxjaUJtY205dElDY3VMM0J5WldacGVHVnlKenRjYm1sdGNHOXlkQ0I3SUdselRuVnRMQ0JwYzA5aWFpQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU52Ym5OMElGUlNRVTVUVEVGVVJTQTlJQ2QwY21GdWMyeGhkR1VuTzF4dVkyOXVjM1FnZEhKaGJuTnNZWFJsVFdGd0lEMGdlMXh1SUNCNE9pQlVVa0ZPVTB4QlZFVWdLeUFuV0Njc1hHNGdJSGs2SUZSU1FVNVRURUZVUlNBcklDZFpKeXhjYmlBZ2Vqb2dWRkpCVGxOTVFWUkZJQ3NnSjFvblhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJpZFdsc1pGTjBlV3hsVUhKdmNHVnlkSGxUZEhKcGJtY29aV3hsYldWdWRDd2djM1JoZEdVc0lHTm9ZVzVuWldSV1lXeDFaWE1zSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1NCN1hHNGdJR3hsZENCd2NtOXdaWEowZVZOMGNtbHVaeUE5SUNjbk8xeHVJQ0JzWlhRZ2RISmhibk5tYjNKdFUzUnlhVzVuSUQwZ0p5YzdYRzRnSUd4bGRDQm9ZWE5VY21GdWMyWnZjbTBnUFNCbVlXeHpaVHRjYmlBZ2JHVjBJSFJ5WVc1elptOXliVWhoYzFvZ1BTQm1ZV3h6WlR0Y2JseHVJQ0F2THlCR2FYSnpkQ0JqYUdWamF5QnBaaUIwYUdWeVpTQmhjbVVnWVc1NUlHTm9ZVzVuWldRZ2RISmhibk5tYjNKdElIWmhiSFZsYzF4dUlDQXZMeUJoYm1RZ2FXWWdkSEoxWlNCaFpHUWdZV3hzSUhSeVlXNXpabTl5YlNCMllXeDFaWE5jYmlBZ1kyOXVjM1FnYm5WdFEyaGhibWRsWkZaaGJIVmxjeUE5SUdOb1lXNW5aV1JXWVd4MVpYTXViR1Z1WjNSb08xeHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJVTm9ZVzVuWldSV1lXeDFaWE03SUdrckt5a2dlMXh1SUNBZ0lHTnZibk4wSUd0bGVTQTlJR05vWVc1blpXUldZV3gxWlhOYmFWMDdYRzVjYmlBZ0lDQXZMeUJKWmlCMGFHbHpJR2x6SUdFZ2RISmhibk5tYjNKdElIQnliM0JsY25SNUxDQmhaR1FnWVd4c0lHOTBhR1Z5SUhSeVlXNXpabTl5YlNCd2NtOXdjMXh1SUNBZ0lDOHZJSFJ2SUdOb1lXNW5aV1JXWVd4MVpYTWdZVzVrSUhSb1pXNGdZbkpsWVd0Y2JpQWdJQ0JwWmlBb2RISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTa2dlMXh1SUNBZ0lDQWdhR0Z6VkhKaGJuTm1iM0p0SUQwZ2RISjFaVHRjYmx4dUlDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSE4wWVhSbEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGNtRnVjMlp2Y20xUWNtOXdjMXRyWlhsZElDWW1JR05vWVc1blpXUldZV3gxWlhNdWFXNWtaWGhQWmloclpYa3BJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUdOb1lXNW5aV1JXWVd4MVpYTXVjSFZ6YUNoclpYa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR052Ym5OMElIUnZkR0ZzVG5WdFEyaGhibWRsWkZaaGJIVmxjeUE5SUdOb1lXNW5aV1JXWVd4MVpYTXViR1Z1WjNSb08xeHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSdmRHRnNUblZ0UTJoaGJtZGxaRlpoYkhWbGN6c2dhU3NyS1NCN1hHNGdJQ0FnYkdWMElHdGxlU0E5SUdOb1lXNW5aV1JXWVd4MVpYTmJhVjA3WEc0Z0lDQWdiR1YwSUhaaGJIVmxJRDBnYzNSaGRHVmJhMlY1WFR0Y2JseHVJQ0FnSUdsbUlDaDBjbUZ1YzJ4aGRHVk5ZWEJiYTJWNVhTa2dlMXh1SUNBZ0lDQWdhMlY1SUQwZ2RISmhibk5zWVhSbFRXRndXMnRsZVYwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1NXWWdkR2hwY3lCcGN5QmhJRzUxYldKbGNpQnZjaUJ2WW1wbFkzUWdZVzVrSUhkbElHaGhkbVVnWm1sc2RHVnlMQ0JoY0hCc2VTQm1hV3gwWlhKY2JpQWdJQ0JwWmlBb2RtRnNkV1ZVZVhCbGMxdHJaWGxkSUNZbUlDaHBjMDUxYlNoMllXeDFaU2tnZkh3Z2FYTlBZbW9vZG1Gc2RXVXBLU0FtSmlCMllXeDFaVlI1Y0dWelcydGxlVjB1ZEhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNCMllXeDFaU0E5SUhaaGJIVmxWSGx3WlhOYmEyVjVYUzUwY21GdWMyWnZjbTBvZG1Gc2RXVXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTFRY205d2MxdHJaWGxkS1NCN1hHNGdJQ0FnSUNCMGNtRnVjMlp2Y20xVGRISnBibWNnS3owZ2EyVjVJQ3NnSnlnbklDc2dkbUZzZFdVZ0t5QW5LU0FuTzF4dUlDQWdJQ0FnZEhKaGJuTm1iM0p0U0dGeldpQTlJQ2hyWlhrZ1BUMDlJSFJ5WVc1emJHRjBaVTFoY0M1NktTQS9JSFJ5ZFdVZ09pQjBjbUZ1YzJadmNtMUlZWE5hTzF4dVhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSEJ5YjNCbGNuUjVVM1J5YVc1bklDczlJQ2M3SnlBcklIQnlaV1pwZUdWeUtHdGxlU3dnZEhKMVpTa2dLeUFuT2ljZ0t5QjJZV3gxWlR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdkx5QkpaaUIzWlNCb1lYWmxJSFJ5WVc1elptOXliU0J3Y205d2N5d2dZblZwYkdRZ1lTQjBjbUZ1YzJadmNtMGdjM1J5YVc1blhHNGdJR2xtSUNob1lYTlVjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQnBaaUFvSVhSeVlXNXpabTl5YlVoaGMxb2dKaVlnWlc1aFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjRwSUh0Y2JpQWdJQ0FnSUhSeVlXNXpabTl5YlZOMGNtbHVaeUFyUFNCMGNtRnVjMnhoZEdWTllYQXVlaUFySUNjb01Da25PMXh1SUNBZ0lIMWNibHh1SUNBZ0lIQnliM0JsY25SNVUzUnlhVzVuSUNzOUlDYzdKeUFySUhCeVpXWnBlR1Z5S0NkMGNtRnVjMlp2Y20wbkxDQjBjblZsS1NBcklDYzZKeUFySUhSeVlXNXpabTl5YlZOMGNtbHVaenRjYmlBZ2ZWeHVYRzRnSUdWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQXJQU0J3Y205d1pYSjBlVk4wY21sdVp6dGNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvcmVuZGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBheGVzID0gWydYJywgJ1knLCAnWiddO1xuXG52YXIgdHJhbnNmb3JtUHJvcHMgPSB7XG4gIHg6IHRydWUsXG4gIHk6IHRydWUsXG4gIHo6IHRydWVcbn07XG5cbnZhciBTQ0FMRSA9ICdzY2FsZSc7XG52YXIgUk9UQVRFID0gJ3JvdGF0ZSc7XG52YXIgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbnZhciBURVJNUyA9IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdO1xuXG50cmFuc2Zvcm1Qcm9wc1tST1RBVEVdID0gdHJhbnNmb3JtUHJvcHNbU0NBTEVdID0gdHJhbnNmb3JtUHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG5cblRFUk1TLmZvckVhY2goZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGF4ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXhpcykge1xuICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlO1xuICB9KTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2Zvcm1Qcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM1J5WVc1elptOXliUzF3Y205d2N5NXFjeUpkTENKdVlXMWxjeUk2V3lKaGVHVnpJaXdpZEhKaGJuTm1iM0p0VUhKdmNITWlMQ0o0SWl3aWVTSXNJbm9pTENKVFEwRk1SU0lzSWxKUFZFRlVSU0lzSWxSU1FVNVRSazlTVFY5UVJWSlRVRVZEVkVsV1JTSXNJbFJGVWsxVElpd2labTl5UldGamFDSXNJblJsY20waUxDSmhlR2x6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeEpRVUZOUVN4UFFVRlBMRU5CUVVNc1IwRkJSQ3hGUVVGTkxFZEJRVTRzUlVGQlZ5eEhRVUZZTEVOQlFXSTdPMEZCUlVFc1NVRkJTVU1zYVVKQlFXbENPMEZCUTI1Q1F5eExRVUZITEVsQlJHZENPMEZCUlc1Q1F5eExRVUZITEVsQlJtZENPMEZCUjI1Q1F5eExRVUZITzBGQlNHZENMRU5CUVhKQ096dEJRVTFCTEVsQlFVMURMRkZCUVZFc1QwRkJaRHRCUVVOQkxFbEJRVTFETEZOQlFWTXNVVUZCWmp0QlFVTkJMRWxCUVUxRExIZENRVUYzUWl4elFrRkJPVUk3UVVGRFFTeEpRVUZOUXl4UlFVRlJMRU5CUVVNc1YwRkJSQ3hGUVVGalNDeExRVUZrTEVWQlFYRkNReXhOUVVGeVFpeEZRVUUyUWl4TlFVRTNRaXhGUVVGeFEwTXNjVUpCUVhKRExFTkJRV1E3TzBGQlJVRk9MR1ZCUVdWTExFMUJRV1lzU1VGQmVVSk1MR1ZCUVdWSkxFdEJRV1lzU1VGQmQwSktMR1ZCUVdWTkxIRkNRVUZtTEVsQlFYZERMRWxCUVhwR096dEJRVVZCUXl4TlFVRk5ReXhQUVVGT0xFTkJRV01zVlVGQlEwTXNTVUZCUkR0QlFVRkJMRk5CUVZWV0xFdEJRVXRUTEU5QlFVd3NRMEZCWVN4VlFVRkRSU3hKUVVGRU8wRkJRVUVzVjBGQlZWWXNaVUZCWlZNc1QwRkJUME1zU1VGQmRFSXNTVUZCT0VJc1NVRkJlRU03UVVGQlFTeEhRVUZpTEVOQlFWWTdRVUZCUVN4RFFVRmtPenRyUWtGRlpWWXNZeUlzSW1acGJHVWlPaUowY21GdWMyWnZjbTB0Y0hKdmNITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCaGVHVnpJRDBnV3lkWUp5d2dKMWtuTENBbldpZGRPMXh1WEc1c1pYUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1BTQjdYRzRnSUhnNklIUnlkV1VzWEc0Z0lIazZJSFJ5ZFdVc1hHNGdJSG82SUhSeWRXVmNibjA3WEc1Y2JtTnZibk4wSUZORFFVeEZJRDBnSjNOallXeGxKenRjYm1OdmJuTjBJRkpQVkVGVVJTQTlJQ2R5YjNSaGRHVW5PMXh1WTI5dWMzUWdWRkpCVGxOR1QxSk5YMUJGVWxOUVJVTlVTVlpGSUQwZ0ozUnlZVzV6Wm05eWJWQmxjbk53WldOMGFYWmxKenRjYm1OdmJuTjBJRlJGVWsxVElEMGdXeWQwY21GdWMyeGhkR1VuTENCVFEwRk1SU3dnVWs5VVFWUkZMQ0FuYzJ0bGR5Y3NJRlJTUVU1VFJrOVNUVjlRUlZKVFVFVkRWRWxXUlYwN1hHNWNiblJ5WVc1elptOXliVkJ5YjNCelcxSlBWRUZVUlYwZ1BTQjBjbUZ1YzJadmNtMVFjbTl3YzF0VFEwRk1SVjBnUFNCMGNtRnVjMlp2Y20xUWNtOXdjMXRVVWtGT1UwWlBVazFmVUVWU1UxQkZRMVJKVmtWZElEMGdkSEoxWlR0Y2JseHVWRVZTVFZNdVptOXlSV0ZqYUNnb2RHVnliU2tnUFQ0Z1lYaGxjeTVtYjNKRllXTm9LQ2hoZUdsektTQTlQaUIwY21GdWMyWnZjbTFRY205d2MxdDBaWEp0SUNzZ1lYaHBjMTBnUFNCMGNuVmxLU2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUhSeVlXNXpabTl5YlZCeWIzQnpPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAvLyBDb2xvciBwcm9wc1xuICBjb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJhY2tncm91bmRDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIG91dGxpbmVDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGZpbGw6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzdHJva2U6IF92YWx1ZVR5cGVzLmNvbG9yLFxuXG4gIC8vIEJvcmRlciBwcm9wc1xuICBib3JkZXJDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlclRvcENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyUmlnaHRDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlckJvdHRvbUNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyTGVmdENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyUmFkaXVzOiBfdmFsdWVUeXBlcy5weCxcblxuICAvLyBQb3NpdGlvbmluZ1xuICB3aWR0aDogX3ZhbHVlVHlwZXMucHgsXG4gIGhlaWdodDogX3ZhbHVlVHlwZXMucHgsXG5cbiAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgcm90YXRlOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICByb3RhdGVYOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICByb3RhdGVZOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICByb3RhdGVaOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICBzY2FsZTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWDogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWjogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNrZXdYOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICBza2V3WTogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgZGlzdGFuY2U6IF92YWx1ZVR5cGVzLnB4LFxuICB0cmFuc2xhdGVYOiBfdmFsdWVUeXBlcy5weCxcbiAgdHJhbnNsYXRlWTogX3ZhbHVlVHlwZXMucHgsXG4gIHRyYW5zbGF0ZVo6IF92YWx1ZVR5cGVzLnB4LFxuICBwZXJzcGVjdGl2ZTogX3ZhbHVlVHlwZXMucHgsXG4gIG9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzWmhiSFZsTFhSNWNHVnpMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTnZiRzl5SWl3aVltRmphMmR5YjNWdVpFTnZiRzl5SWl3aWIzVjBiR2x1WlVOdmJHOXlJaXdpWm1sc2JDSXNJbk4wY205clpTSXNJbUp2Y21SbGNrTnZiRzl5SWl3aVltOXlaR1Z5Vkc5d1EyOXNiM0lpTENKaWIzSmtaWEpTYVdkb2RFTnZiRzl5SWl3aVltOXlaR1Z5UW05MGRHOXRRMjlzYjNJaUxDSmliM0prWlhKTVpXWjBRMjlzYjNJaUxDSmliM0prWlhKU1lXUnBkWE1pTENKM2FXUjBhQ0lzSW1obGFXZG9kQ0lzSW5KdmRHRjBaU0lzSW5KdmRHRjBaVmdpTENKeWIzUmhkR1ZaSWl3aWNtOTBZWFJsV2lJc0luTmpZV3hsSWl3aWMyTmhiR1ZZSWl3aWMyTmhiR1ZaSWl3aWMyTmhiR1ZhSWl3aWMydGxkMWdpTENKemEyVjNXU0lzSW1ScGMzUmhibU5sSWl3aWRISmhibk5zWVhSbFdDSXNJblJ5WVc1emJHRjBaVmtpTENKMGNtRnVjMnhoZEdWYUlpd2ljR1Z5YzNCbFkzUnBkbVVpTENKdmNHRmphWFI1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPMnRDUVVObE8wRkJRMkk3UVVGRFFVRXNNRUpCUm1FN1FVRkhZa01zYjBOQlNHRTdRVUZKWWtNc2FVTkJTbUU3UVVGTFlrTXNlVUpCVEdFN1FVRk5Za01zTWtKQlRtRTdPMEZCVVdJN1FVRkRRVU1zWjBOQlZHRTdRVUZWWWtNc2JVTkJWbUU3UVVGWFlrTXNjVU5CV0dFN1FVRlpZa01zYzBOQldtRTdRVUZoWWtNc2IwTkJZbUU3UVVGallrTXNPRUpCWkdFN08wRkJaMEppTzBGQlEwRkRMSFZDUVdwQ1lUdEJRV3RDWWtNc2QwSkJiRUpoT3p0QlFXOUNZanRCUVVOQlF5dzJRa0Z5UW1FN1FVRnpRbUpETERoQ1FYUkNZVHRCUVhWQ1lrTXNPRUpCZGtKaE8wRkJkMEppUXl3NFFrRjRRbUU3UVVGNVFtSkRMREJDUVhwQ1lUdEJRVEJDWWtNc01rSkJNVUpoTzBGQk1rSmlReXd5UWtFelFtRTdRVUUwUW1KRExESkNRVFZDWVR0QlFUWkNZa01zTkVKQk4wSmhPMEZCT0VKaVF5dzBRa0U1UW1FN1FVRXJRbUpETERCQ1FTOUNZVHRCUVdkRFlrTXNORUpCYUVOaE8wRkJhVU5pUXl3MFFrRnFRMkU3UVVGclEySkRMRFJDUVd4RFlUdEJRVzFEWWtNc05rSkJia05oTzBGQmIwTmlRenRCUVhCRFlTeERJaXdpWm1sc1pTSTZJblpoYkhWbExYUjVjR1Z6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWVd4d2FHRXNJR052Ykc5eUxDQmtaV2R5WldWekxDQnpZMkZzWlN3Z2NIZ2dmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkbUZzZFdVdGRIbHdaWE1uT3lCY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdMeThnUTI5c2IzSWdjSEp2Y0hOY2JpQWdZMjlzYjNJNklHTnZiRzl5TEZ4dUlDQmlZV05yWjNKdmRXNWtRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQnZkWFJzYVc1bFEyOXNiM0k2SUdOdmJHOXlMRnh1SUNCbWFXeHNPaUJqYjJ4dmNpeGNiaUFnYzNSeWIydGxPaUJqYjJ4dmNpeGNibHh1SUNBdkx5QkNiM0prWlhJZ2NISnZjSE5jYmlBZ1ltOXlaR1Z5UTI5c2IzSTZJR052Ykc5eUxGeHVJQ0JpYjNKa1pYSlViM0JEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0p2Y21SbGNsSnBaMmgwUTI5c2IzSTZJR052Ykc5eUxGeHVJQ0JpYjNKa1pYSkNiM1IwYjIxRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdKdmNtUmxja3hsWm5SRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdKdmNtUmxjbEpoWkdsMWN6b2djSGdzWEc1Y2JpQWdMeThnVUc5emFYUnBiMjVwYm1kY2JpQWdkMmxrZEdnNklIQjRMRnh1SUNCb1pXbG5hSFE2SUhCNExDQWdYRzVjYmlBZ0x5OGdWSEpoYm5ObWIzSnRJSEJ5YjNCbGNuUnBaWE5jYmlBZ2NtOTBZWFJsT2lCa1pXZHlaV1Z6TEZ4dUlDQnliM1JoZEdWWU9pQmtaV2R5WldWekxGeHVJQ0J5YjNSaGRHVlpPaUJrWldkeVpXVnpMRnh1SUNCeWIzUmhkR1ZhT2lCa1pXZHlaV1Z6TEZ4dUlDQnpZMkZzWlRvZ2MyTmhiR1VzWEc0Z0lITmpZV3hsV0RvZ2MyTmhiR1VzWEc0Z0lITmpZV3hsV1RvZ2MyTmhiR1VzWEc0Z0lITmpZV3hsV2pvZ2MyTmhiR1VzWEc0Z0lITnJaWGRZT2lCa1pXZHlaV1Z6TEZ4dUlDQnphMlYzV1RvZ1pHVm5jbVZsY3l4Y2JpQWdaR2x6ZEdGdVkyVTZJSEI0TEZ4dUlDQjBjbUZ1YzJ4aGRHVllPaUJ3ZUN4Y2JpQWdkSEpoYm5Oc1lYUmxXVG9nY0hnc1hHNGdJSFJ5WVc1emJHRjBaVm82SUhCNExGeHVJQ0J3WlhKemNHVmpkR2wyWlRvZ2NIZ3NYRzRnSUc5d1lXTnBkSGs2SUdGc2NHaGhYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvdmFsdWUtdHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBjYW1lbENhY2hlID0ge307XG52YXIgZGFzaENhY2hlID0ge307XG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcycsICcnXTtcbnZhciBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbnZhciB0ZXN0RWxlbWVudCA9IHZvaWQgMDtcblxuLypcbiAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbnZhciB0ZXN0UHJlZml4ID0gZnVuY3Rpb24gKGtleSkge1xuICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICB2YXIgbm9QcmVmaXggPSBwcmVmaXggPT09ICcnO1xuICAgIHZhciBwcmVmaXhlZFByb3BlcnR5TmFtZSA9IG5vUHJlZml4ID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgaWYgKHByZWZpeGVkUHJvcGVydHlOYW1lIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICBjYW1lbENhY2hlW2tleV0gPSBwcmVmaXhlZFByb3BlcnR5TmFtZTtcbiAgICAgIGRhc2hDYWNoZVtrZXldID0gJycgKyAobm9QcmVmaXggPyAnJyA6ICctJykgKyAoMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShwcmVmaXhlZFByb3BlcnR5TmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoa2V5LCBhc0Rhc2hDYXNlKSB7XG4gIHZhciBjYWNoZSA9IGFzRGFzaENhc2UgPyBkYXNoQ2FjaGUgOiBjYW1lbENhY2hlO1xuXG4gIGlmICghY2FjaGVba2V5XSkge1xuICAgIHRlc3RQcmVmaXgoa2V5KTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZVtrZXldO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM0J5WldacGVHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTmhiV1ZzUTJGamFHVWlMQ0prWVhOb1EyRmphR1VpTENKd2NtVm1hWGhsY3lJc0ltNTFiVkJ5WldacGVHVnpJaXdpYkdWdVozUm9JaXdpZEdWemRFVnNaVzFsYm5RaUxDSjBaWE4wVUhKbFptbDRJaXdpYTJWNUlpd2laRzlqZFcxbGJuUWlMQ0pqY21WaGRHVkZiR1Z0Wlc1MElpd2lhU0lzSW5CeVpXWnBlQ0lzSW01dlVISmxabWw0SWl3aWNISmxabWw0WldSUWNtOXdaWEowZVU1aGJXVWlMQ0pqYUdGeVFYUWlMQ0owYjFWd2NHVnlRMkZ6WlNJc0luTnNhV05sSWl3aWMzUjViR1VpTENKaGMwUmhjMmhEWVhObElpd2lZMkZqYUdVaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3UVVGRlFTeEpRVUZOUVN4aFFVRmhMRVZCUVc1Q08wRkJRMEVzU1VGQlRVTXNXVUZCV1N4RlFVRnNRanRCUVVOQkxFbEJRVTFETEZkQlFWY3NRMEZCUXl4UlFVRkVMRVZCUVZVc1MwRkJWaXhGUVVGblFpeEhRVUZvUWl4RlFVRnZRaXhKUVVGd1FpeEZRVUV3UWl4RlFVRXhRaXhEUVVGcVFqdEJRVU5CTEVsQlFVMURMR05CUVdORUxGTkJRVk5GTEUxQlFUZENPMEZCUTBFc1NVRkJTVU1zYjBKQlFVbzdPMEZCUlVFN096czdPenRCUVUxQkxFbEJRVTFETEdGQlFXRXNWVUZCUTBNc1IwRkJSQ3hGUVVGVE8wRkJRekZDUml4blFrRkJZMEVzWlVGQlpVY3NVMEZCVTBNc1lVRkJWQ3hEUVVGMVFpeExRVUYyUWl4RFFVRTNRanM3UVVGRlFTeFBRVUZMTEVsQlFVbERMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1ZBc1YwRkJjRUlzUlVGQmFVTlBMRWRCUVdwRExFVkJRWE5ETzBGQlEzQkRMRkZCUVUxRExGTkJRVk5VTEZOQlFWTlJMRU5CUVZRc1EwRkJaanRCUVVOQkxGRkJRVTFGTEZkQlFWbEVMRmRCUVZjc1JVRkJOMEk3UVVGRFFTeFJRVUZOUlN4MVFrRkJkVUpFTEZkQlFWZE1MRWRCUVZnc1IwRkJhVUpKTEZOQlFWTktMRWxCUVVsUExFMUJRVW9zUTBGQlZ5eERRVUZZTEVWQlFXTkRMRmRCUVdRc1JVRkJWQ3hIUVVGMVExSXNTVUZCU1ZNc1MwRkJTaXhEUVVGVkxFTkJRVllzUTBGQmNrWTdPMEZCUlVFc1VVRkJTVWdzZDBKQlFYZENVaXhaUVVGWldTeExRVUY0UXl4RlFVRXJRenRCUVVNM1EycENMR2xDUVVGWFR5eEhRVUZZTEVsQlFXdENUU3h2UWtGQmJFSTdRVUZEUVZvc1owSkJRVlZOTEVkQlFWWXNWVUZCY1VKTExGZEJRVmNzUlVGQldDeEhRVUZuUWl4SFFVRnlReXhKUVVFMFF5eDNRa0ZCV1VNc2IwSkJRVm9zUTBGQk5VTTdRVUZEUkR0QlFVTkdPMEZCUTBZc1EwRmlSRHM3YTBKQlpXVXNWVUZCUTA0c1IwRkJSQ3hGUVVGTlZ5eFZRVUZPTEVWQlFYRkNPMEZCUTJ4RExFMUJRVTFETEZGQlFWRkVMR0ZCUVdGcVFpeFRRVUZpTEVkQlFYbENSQ3hWUVVGMlF6czdRVUZGUVN4TlFVRkpMRU5CUVVOdFFpeE5RVUZOV2l4SFFVRk9MRU5CUVV3c1JVRkJhVUk3UVVGRFprUXNaVUZCVjBNc1IwRkJXRHRCUVVORU96dEJRVVZFTEZOQlFVOVpMRTFCUVUxYUxFZEJRVTRzUTBGQlVEdEJRVU5FTEVNaUxDSm1hV3hsSWpvaWNISmxabWw0WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCallXMWxiRlJ2UkdGemFDQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU52Ym5OMElHTmhiV1ZzUTJGamFHVWdQU0I3ZlR0Y2JtTnZibk4wSUdSaGMyaERZV05vWlNBOUlIdDlPMXh1WTI5dWMzUWdjSEpsWm1sNFpYTWdQU0JiSjFkbFltdHBkQ2NzSjAxdmVpY3NKMDhuTENkdGN5Y3NJQ2NuWFR0Y2JtTnZibk4wSUc1MWJWQnlaV1pwZUdWeklEMGdjSEpsWm1sNFpYTXViR1Z1WjNSb08xeHViR1YwSUhSbGMzUkZiR1Z0Wlc1ME8xeHVYRzR2S2x4dUlDQlVaWE4wSUhOMGVXeGxJSEJ5YjNCbGNuUjVJR1p2Y2lCd2NtVm1hWGhsWkNCMlpYSnphVzl1WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRk4wZVd4bElIQnliM0JsY25SNVhHNGdJRUJ5WlhSMWNtNGdXM04wY21sdVoxMDZJRU5oWTJobFpDQndjbTl3WlhKMGVTQnVZVzFsWEc0cUwxeHVZMjl1YzNRZ2RHVnpkRkJ5WldacGVDQTlJQ2hyWlhrcElEMCtJSHRjYmlBZ2RHVnpkRVZzWlcxbGJuUWdQU0IwWlhOMFJXeGxiV1Z1ZENCOGZDQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nka2FYWW5LVHRjYmx4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlZCeVpXWnBlR1Z6T3lCcEt5c3BJSHRjYmlBZ0lDQmpiMjV6ZENCd2NtVm1hWGdnUFNCd2NtVm1hWGhsYzF0cFhUdGNiaUFnSUNCamIyNXpkQ0J1YjFCeVpXWnBlQ0E5SUNod2NtVm1hWGdnUFQwOUlDY25LVHRjYmlBZ0lDQmpiMjV6ZENCd2NtVm1hWGhsWkZCeWIzQmxjblI1VG1GdFpTQTlJRzV2VUhKbFptbDRJRDhnYTJWNUlEb2djSEpsWm1sNElDc2dhMlY1TG1Ob1lYSkJkQ2d3S1M1MGIxVndjR1Z5UTJGelpTZ3BJQ3NnYTJWNUxuTnNhV05sS0RFcE8xeHVYRzRnSUNBZ2FXWWdLSEJ5WldacGVHVmtVSEp2Y0dWeWRIbE9ZVzFsSUdsdUlIUmxjM1JGYkdWdFpXNTBMbk4wZVd4bEtTQjdYRzRnSUNBZ0lDQmpZVzFsYkVOaFkyaGxXMnRsZVYwZ1BTQndjbVZtYVhobFpGQnliM0JsY25SNVRtRnRaVHRjYmlBZ0lDQWdJR1JoYzJoRFlXTm9aVnRyWlhsZElEMGdZQ1I3S0c1dlVISmxabWw0SUQ4Z0p5Y2dPaUFuTFNjcGZTUjdZMkZ0Wld4VWIwUmhjMmdvY0hKbFptbDRaV1JRY205d1pYSjBlVTVoYldVcGZXQTdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hMlY1TENCaGMwUmhjMmhEWVhObEtTQTlQaUI3WEc0Z0lHTnZibk4wSUdOaFkyaGxJRDBnWVhORVlYTm9RMkZ6WlNBL0lHUmhjMmhEWVdOb1pTQTZJR05oYldWc1EyRmphR1U3WEc1Y2JpQWdhV1lnS0NGallXTm9aVnRyWlhsZEtTQjdYRzRnSUNBZ2RHVnpkRkJ5WldacGVDaHJaWGtwTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdOaFkyaGxXMnRsZVYwN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy9wcmVmaXhlci5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBkYXRhKSB7XG4gIHZhciBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDE7XG4gIHZhciBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMTtcbiAgdmFyIHRyYW5zZm9ybU9yaWdpblggPSBkYXRhLndpZHRoICogKChzdGF0ZS5vcmlnaW5YIHx8IDUwKSAvIDEwMCkgKyBkYXRhLng7XG4gIHZhciB0cmFuc2Zvcm1PcmlnaW5ZID0gZGF0YS5oZWlnaHQgKiAoKHN0YXRlLm9yaWdpblkgfHwgNTApIC8gMTAwKSArIGRhdGEueTtcbiAgdmFyIHNjYWxlVHJhbnNmb3JtWCA9IC10cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSk7XG4gIHZhciBzY2FsZVRyYW5zZm9ybVkgPSAtdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKTtcbiAgdmFyIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGU7XG4gIHZhciBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWTtcbiAgdmFyIHRyYW5zZm9ybSA9IHtcbiAgICB0cmFuc2xhdGU6ICd0cmFuc2xhdGUoJyArIHN0YXRlLnRyYW5zbGF0ZVggKyAnLCAnICsgc3RhdGUudHJhbnNsYXRlWSArICcpICcsXG4gICAgc2NhbGU6ICd0cmFuc2xhdGUoJyArIHNjYWxlVHJhbnNmb3JtWCArICcsICcgKyBzY2FsZVRyYW5zZm9ybVkgKyAnKSBzY2FsZSgnICsgc2NhbGUgKyAnLCAnICsgc2NhbGVZICsgJykgdHJhbnNsYXRlKCcgKyBzY2FsZVJlcGxhY2VYICsgJywgJyArIHNjYWxlUmVwbGFjZVkgKyAnKSAnLFxuICAgIHJvdGF0ZTogJ3JvdGF0ZSgnICsgc3RhdGUucm90YXRlICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblggKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWSArICcpICcsXG4gICAgc2tld1g6ICdza2V3WCgnICsgc3RhdGUuc2tld1ggKyAnKSAnLFxuICAgIHNrZXdZOiAnc2tld1koJyArIHN0YXRlLnNrZXdZICsgJykgJ1xuICB9O1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzWygwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICBmb3IgKHZhciBfa2V5IGluIHRyYW5zZm9ybSkge1xuICAgICAgaWYgKHRyYW5zZm9ybS5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gX2tleSA9PT0gJ3NjYWxlJyA/ICcxJyA6ICcwJztcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtfa2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDJKMWFXeGtMbXB6SWwwc0ltNWhiV1Z6SWpwYkltSjFhV3hrSWl3aVdrVlNUMTlPVDFSZldrVlNUeUlzSW5OMFlYUmxJaXdpWkdGMFlTSXNJbWhoYzFSeVlXNXpabTl5YlNJc0luQnliM0J6SWl3aWMyTmhiR1VpTENKMWJtUmxabWx1WldRaUxDSnpZMkZzWlZnaUxDSnpZMkZzWlZraUxDSjBjbUZ1YzJadmNtMVBjbWxuYVc1WUlpd2lkMmxrZEdnaUxDSnZjbWxuYVc1WUlpd2llQ0lzSW5SeVlXNXpabTl5YlU5eWFXZHBibGtpTENKb1pXbG5hSFFpTENKdmNtbG5hVzVaSWl3aWVTSXNJbk5qWVd4bFZISmhibk5tYjNKdFdDSXNJbk5qWVd4bFZISmhibk5tYjNKdFdTSXNJbk5qWVd4bFVtVndiR0ZqWlZnaUxDSnpZMkZzWlZKbGNHeGhZMlZaSWl3aWRISmhibk5tYjNKdElpd2lkSEpoYm5Oc1lYUmxJaXdpZEhKaGJuTnNZWFJsV0NJc0luUnlZVzV6YkdGMFpWa2lMQ0p5YjNSaGRHVWlMQ0p6YTJWM1dDSXNJbk5yWlhkWklpd2lhMlY1SWl3aWFHRnpUM2R1VUhKdmNHVnlkSGtpTENKa1pXWmhkV3gwVm1Gc2RXVWlMQ0p5WlhCc1lXTmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUzNkQ1FTeExPenRCUVV4NFFqczdRVUZEUVRzN096czdPMEZCUlVFc1NVRkJUVU1zWjBKQlFXZENMRTFCUVhSQ096dEJRVVZsTEZOQlFWTkVMRXRCUVZRc1EwRkJaVVVzUzBGQlppeEZRVUZ6UWtNc1NVRkJkRUlzUlVGQk5FSTdRVUZEZWtNc1RVRkJTVU1zWlVGQlpTeExRVUZ1UWp0QlFVTkJMRTFCUVUxRExGRkJRVkVzUlVGQlpEdEJRVU5CTEUxQlFVMURMRkZCUVZGS0xFMUJRVTFKTEV0QlFVNHNTMEZCWjBKRExGTkJRV2hDTEVkQlFUUkNUQ3hOUVVGTlNTeExRVUZPTEVsQlFXVk1MR0ZCUVRORExFZEJRVEpFUXl4TlFVRk5UU3hOUVVGT0xFbEJRV2RDTEVOQlFYcEdPMEZCUTBFc1RVRkJUVU1zVTBGQlUxQXNUVUZCVFU4c1RVRkJUaXhMUVVGcFFrWXNVMEZCYWtJc1IwRkJOa0pNTEUxQlFVMVBMRTFCUVU0c1NVRkJaMEpTTEdGQlFUZERMRWRCUVRaRVN5eFRRVUZUTEVOQlFYSkdPMEZCUTBFc1RVRkJUVWtzYlVKQlFXMUNVQ3hMUVVGTFVTeExRVUZNTEVsQlFXTXNRMEZCUTFRc1RVRkJUVlVzVDBGQlRpeEpRVUZwUWl4RlFVRnNRaXhKUVVGM1FpeEhRVUYwUXl4SlFVRTJRMVFzUzBGQlMxVXNRMEZCTTBVN1FVRkRRU3hOUVVGTlF5eHRRa0ZCYlVKWUxFdEJRVXRaTEUxQlFVd3NTVUZCWlN4RFFVRkRZaXhOUVVGTll5eFBRVUZPTEVsQlFXbENMRVZCUVd4Q0xFbEJRWGRDTEVkQlFYWkRMRWxCUVRoRFlpeExRVUZMWXl4RFFVRTFSVHRCUVVOQkxFMUJRVTFETEd0Q1FVRnJRaXhEUVVGRlVpeG5Ra0ZCUml4SlFVRnpRa29zVVVGQlVTeERRVUU1UWl4RFFVRjRRanRCUVVOQkxFMUJRVTFoTEd0Q1FVRnJRaXhEUVVGRlRDeG5Ra0ZCUml4SlFVRnpRa3dzVTBGQlV5eERRVUV2UWl4RFFVRjRRanRCUVVOQkxFMUJRVTFYTEdkQ1FVRm5RbFlzYlVKQlFXMUNTaXhMUVVGNlF6dEJRVU5CTEUxQlFVMWxMR2RDUVVGblFsQXNiVUpCUVcxQ1RDeE5RVUY2UXp0QlFVTkJMRTFCUVUxaExGbEJRVms3UVVGRGFFSkRMRGhDUVVGM1FuSkNMRTFCUVUxelFpeFZRVUU1UWl4VlFVRTJRM1JDTEUxQlFVMTFRaXhWUVVGdVJDeFBRVVJuUWp0QlFVVm9RbTVDTERCQ1FVRnZRbGtzWlVGQmNFSXNWVUZCZDBORExHVkJRWGhETEdkQ1FVRnJSV0lzUzBGQmJFVXNWVUZCTkVWSExFMUJRVFZGTEc5Q1FVRnBSMWNzWVVGQmFrY3NWVUZCYlVoRExHRkJRVzVJTEU5QlJtZENPMEZCUjJoQ1N5eDNRa0ZCYTBKNFFpeE5RVUZOZDBJc1RVRkJlRUlzVlVGQmJVTm9RaXhuUWtGQmJrTXNWVUZCZDBSSkxHZENRVUY0UkN4UFFVaG5RanRCUVVsb1FtRXNjMEpCUVdkQ2VrSXNUVUZCVFhsQ0xFdEJRWFJDTEU5QlNtZENPMEZCUzJoQ1F5eHpRa0ZCWjBJeFFpeE5RVUZOTUVJc1MwRkJkRUk3UVVGTVowSXNSMEZCYkVJN08wRkJVVUVzVDBGQlN5eEpRVUZKUXl4SFFVRlVMRWxCUVdkQ00wSXNTMEZCYUVJc1JVRkJkVUk3UVVGRGNrSXNVVUZCU1VFc1RVRkJUVFJDTEdOQlFVNHNRMEZCY1VKRUxFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkROMElzVlVGQlNTeDVRa0ZCWlVFc1IwRkJaaXhEUVVGS0xFVkJRWGxDTzBGQlEzWkNla0lzZFVKQlFXVXNTVUZCWmp0QlFVTkVMRTlCUmtRc1RVRkZUenRCUVVOTVF5eGpRVUZOTEhkQ1FVRlpkMElzUjBGQldpeERRVUZPTEVsQlFUQkNNMElzVFVGQlRUSkNMRWRCUVU0c1EwRkJNVUk3UVVGRFJEdEJRVU5HTzBGQlEwWTdPMEZCUlVRc1RVRkJTWHBDTEZsQlFVb3NSVUZCYTBJN1FVRkRhRUpETEZWQlFVMXBRaXhUUVVGT0xFZEJRV3RDTEVWQlFXeENPenRCUVVWQkxGTkJRVXNzU1VGQlNVOHNTVUZCVkN4SlFVRm5RbEFzVTBGQmFFSXNSVUZCTWtJN1FVRkRla0lzVlVGQlNVRXNWVUZCVlZFc1kwRkJWaXhEUVVGNVFrUXNTVUZCZWtJc1EwRkJTaXhGUVVGdFF6dEJRVU5xUXl4WlFVRk5SU3hsUVVGblFrWXNVMEZCVVN4UFFVRlVMRWRCUVc5Q0xFZEJRWEJDTEVkQlFUQkNMRWRCUVM5RE8wRkJRMEY0UWl4alFVRk5hVUlzVTBGQlRpeEpRVUZ0UWtFc1ZVRkJWVThzU1VGQlZpeEZRVUZsUnl4UFFVRm1MRU5CUVhWQ0xGbEJRWFpDTEVWQlFYRkRSQ3haUVVGeVF5eERRVUZ1UWp0QlFVTkVPMEZCUTBZN1FVRkRSanM3UVVGRlJDeFRRVUZQTVVJc1MwRkJVRHRCUVVORUlpd2labWxzWlNJNkltSjFhV3hrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWTJGdFpXeFViMFJoYzJnZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRYUnBiSE1uTzF4dWFXMXdiM0owSUhSeVlXNXpabTl5YlZCeWIzQnpJR1p5YjIwZ0p5NHVMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dVhHNWpiMjV6ZENCYVJWSlBYMDVQVkY5YVJWSlBJRDBnTUM0d01EQXhPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJpZFdsc1pDaHpkR0YwWlN3Z1pHRjBZU2tnZTF4dUlDQnNaWFFnYUdGelZISmhibk5tYjNKdElEMGdabUZzYzJVN1hHNGdJR052Ym5OMElIQnliM0J6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJSE5qWVd4bElEMGdjM1JoZEdVdWMyTmhiR1VnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JSE4wWVhSbExuTmpZV3hsSUh4OElGcEZVazlmVGs5VVgxcEZVazhnT2lCemRHRjBaUzV6WTJGc1pWZ2dmSHdnTVR0Y2JpQWdZMjl1YzNRZ2MyTmhiR1ZaSUQwZ2MzUmhkR1V1YzJOaGJHVlpJQ0U5UFNCMWJtUmxabWx1WldRZ1B5QnpkR0YwWlM1elkyRnNaVmtnZkh3Z1drVlNUMTlPVDFSZldrVlNUeUE2SUhOallXeGxJSHg4SURFN1hHNGdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ1BTQmtZWFJoTG5kcFpIUm9JQ29nS0NoemRHRjBaUzV2Y21sbmFXNVlJSHg4SURVd0tTQXZJREV3TUNrZ0t5QmtZWFJoTG5nN1hHNGdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxrZ1BTQmtZWFJoTG1obGFXZG9kQ0FxSUNnb2MzUmhkR1V1YjNKcFoybHVXU0I4ZkNBMU1Da2dMeUF4TURBcElDc2daR0YwWVM1NU8xeHVJQ0JqYjI1emRDQnpZMkZzWlZSeVlXNXpabTl5YlZnZ1BTQXRJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dLaUFvYzJOaGJHVWdLaUF4S1R0Y2JpQWdZMjl1YzNRZ2MyTmhiR1ZVY21GdWMyWnZjbTFaSUQwZ0xTQjBjbUZ1YzJadmNtMVBjbWxuYVc1WklDb2dLSE5qWVd4bFdTQXFJREVwTzF4dUlDQmpiMjV6ZENCelkyRnNaVkpsY0d4aFkyVllJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXQ0F2SUhOallXeGxPMXh1SUNCamIyNXpkQ0J6WTJGc1pWSmxjR3hoWTJWWklEMGdkSEpoYm5ObWIzSnRUM0pwWjJsdVdTQXZJSE5qWVd4bFdUdGNiaUFnWTI5dWMzUWdkSEpoYm5ObWIzSnRJRDBnZTF4dUlDQWdJSFJ5WVc1emJHRjBaVG9nWUhSeVlXNXpiR0YwWlNna2UzTjBZWFJsTG5SeVlXNXpiR0YwWlZoOUxDQWtlM04wWVhSbExuUnlZVzV6YkdGMFpWbDlLU0JnTEZ4dUlDQWdJSE5qWVd4bE9pQmdkSEpoYm5Oc1lYUmxLQ1I3YzJOaGJHVlVjbUZ1YzJadmNtMVlmU3dnSkh0elkyRnNaVlJ5WVc1elptOXliVmw5S1NCelkyRnNaU2drZTNOallXeGxmU3dnSkh0elkyRnNaVmw5S1NCMGNtRnVjMnhoZEdVb0pIdHpZMkZzWlZKbGNHeGhZMlZZZlN3Z0pIdHpZMkZzWlZKbGNHeGhZMlZaZlNrZ1lDeGNiaUFnSUNCeWIzUmhkR1U2SUdCeWIzUmhkR1VvSkh0emRHRjBaUzV5YjNSaGRHVjlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGg5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxsOUtTQmdMRnh1SUNBZ0lITnJaWGRZT2lCZ2MydGxkMWdvSkh0emRHRjBaUzV6YTJWM1dIMHBJR0FzWEc0Z0lDQWdjMnRsZDFrNklHQnphMlYzV1Nna2UzTjBZWFJsTG5OclpYZFpmU2tnWUZ4dUlDQjlPMXh1WEc0Z0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJR2xtSUNoemRHRjBaUzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNCcFppQW9kSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNCb1lYTlVjbUZ1YzJadmNtMGdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NISnZjSE5iWTJGdFpXeFViMFJoYzJnb2EyVjVLVjBnUFNCemRHRjBaVnRyWlhsZE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHbG1JQ2hvWVhOVWNtRnVjMlp2Y20wcElIdGNiaUFnSUNCd2NtOXdjeTUwY21GdWMyWnZjbTBnUFNBbkp6dGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGNtRnVjMlp2Y20wcElIdGNiaUFnSUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTB1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCa1pXWmhkV3gwVm1Gc2RXVWdQU0FvYTJWNUlEMDlQU0FuYzJOaGJHVW5LU0EvSUNjeEp5QTZJQ2N3Snp0Y2JpQWdJQ0FnSUNBZ2NISnZjSE11ZEhKaGJuTm1iM0p0SUNzOUlIUnlZVzV6Wm05eWJWdHJaWGxkTG5KbGNHeGhZMlVvTDNWdVpHVm1hVzVsWkM5bkxDQmtaV1poZFd4MFZtRnNkV1VwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ3Y205d2N6dGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL2luYy92YWx1ZS10eXBlcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGZpbGw6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzdHJva2U6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzY2FsZTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWDogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIGQ6IF92YWx1ZVR5cGVzLmNvbXBsZXgsXG4gIHBvaW50czogX3ZhbHVlVHlwZXMuY29tcGxleCxcbiAgb3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGEsXG4gIGZpbGxPcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYSxcbiAgc3Ryb2tlT3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGFcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDNaaGJIVmxMWFI1Y0dWekxtcHpJbDBzSW01aGJXVnpJanBiSW1acGJHd2lMQ0p6ZEhKdmEyVWlMQ0p6WTJGc1pTSXNJbk5qWVd4bFdDSXNJbk5qWVd4bFdTSXNJbVFpTENKd2IybHVkSE1pTENKdmNHRmphWFI1SWl3aVptbHNiRTl3WVdOcGRIa2lMQ0p6ZEhKdmEyVlBjR0ZqYVhSNUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3TzJ0Q1FVVmxPMEZCUTJKQkxIbENRVVJoTzBGQlJXSkRMREpDUVVaaE8wRkJSMkpETERCQ1FVaGhPMEZCU1dKRExESkNRVXBoTzBGQlMySkRMREpDUVV4aE8wRkJUV0pETEhkQ1FVNWhPMEZCVDJKRExEWkNRVkJoTzBGQlVXSkRMRFJDUVZKaE8wRkJVMkpETEdkRFFWUmhPMEZCVldKRE8wRkJWbUVzUXlJc0ltWnBiR1VpT2lKMllXeDFaUzEwZVhCbGN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHRnNjR2hoTENCamIyeHZjaXdnWTI5dGNHeGxlQ3dnYzJOaGJHVWdmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkbUZzZFdVdGRIbHdaWE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJR1pwYkd3NklHTnZiRzl5TEZ4dUlDQnpkSEp2YTJVNklHTnZiRzl5TEZ4dUlDQnpZMkZzWlRvZ2MyTmhiR1VzWEc0Z0lITmpZV3hsV0RvZ2MyTmhiR1VzWEc0Z0lITmpZV3hsV1RvZ2MyTmhiR1VzWEc0Z0lHUTZJR052YlhCc1pYZ3NYRzRnSUhCdmFXNTBjem9nWTI5dGNHeGxlQ3hjYmlBZ2IzQmhZMmwwZVRvZ1lXeHdhR0VzWEc0Z0lHWnBiR3hQY0dGamFYUjVPaUJoYkhCb1lTeGNiaUFnYzNSeWIydGxUM0JoWTJsMGVUb2dZV3h3YUdGY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnQsIGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCAqIGxlbmd0aCArICdweCc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RhdGUsIGxlbmd0aCkge1xuICB2YXIgc3R5bGVzID0ge307XG4gIHZhciBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgbGVuZ3RoOiAwLFxuICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgfTtcbiAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MWEJoZEdndlluVnBiR1F1YW5NaVhTd2libUZ0WlhNaU9sc2ljR1Z5WTJWdWRGUnZVR2w0Wld4eklpd2ljR1Z5WTJWdWRDSXNJbXhsYm1kMGFDSXNJbkJoY25ObFJteHZZWFFpTENKemRHRjBaU0lzSW5OMGVXeGxjeUlzSW1SaGMyaEJjbkpoZVZOMGVXeGxjeUlzSW5Od1lXTnBibWNpTENKb1lYTkVZWE5vUVhKeVlYa2lMQ0pyWlhraUxDSm9ZWE5QZDI1UWNtOXdaWEowZVNJc0luWmhiSFZsSWwwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFUczdPenM3TzBGQlRVRXNTVUZCVFVFc2EwSkJRV3RDTEZWQlFVTkRMRTlCUVVRc1JVRkJWVU1zVFVGQlZqdEJRVUZCTEZOQlFYTkNReXhYUVVGWFJpeFBRVUZZTEVsQlFYTkNMRWRCUVhaQ0xFZEJRVGhDUXl4TlFVRTVRaXhIUVVGMVF5eEpRVUUxUkR0QlFVRkJMRU5CUVhoQ096dHJRa0ZGWlN4VlFVRkRSU3hMUVVGRUxFVkJRVkZHTEUxQlFWSXNSVUZCYlVJN1FVRkRhRU1zVFVGQlRVY3NVMEZCVXl4RlFVRm1PMEZCUTBFc1RVRkJUVU1zYTBKQlFXdENPMEZCUTNSQ1NpeFpRVUZSTEVOQlJHTTdRVUZGZEVKTExHRkJRVk5NTEZOQlFWTTdRVUZHU1N4SFFVRjRRanRCUVVsQkxFMUJRVWxOTEdWQlFXVXNTMEZCYmtJN08wRkJSVUVzVDBGQlN5eEpRVUZKUXl4SFFVRlVMRWxCUVdkQ1RDeExRVUZvUWl4RlFVRjFRanRCUVVOeVFpeFJRVUZKUVN4TlFVRk5UU3hqUVVGT0xFTkJRWEZDUkN4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6ZENMRlZCUVUxRkxGRkJRVkZRTEUxQlFVMUxMRWRCUVU0c1EwRkJaRHM3UVVGRlFTeGpRVUZSUVN4SFFVRlNPMEZCUTBFc1lVRkJTeXhSUVVGTU8wRkJRMEVzWVVGQlN5eFRRVUZNTzBGQlEwVkVMSGxDUVVGbExFbEJRV1k3UVVGRFFVWXNNRUpCUVdkQ1J5eEhRVUZvUWl4SlFVRjFRbFFzWjBKQlFXZENWeXhMUVVGb1FpeEZRVUYxUWxRc1RVRkJka0lzUTBGQmRrSTdRVUZEUVR0QlFVTkdMR0ZCUVVzc1VVRkJURHRCUVVORlJ5eHBRa0ZCVHl4dFFrRkJVQ3hKUVVFNFFrd3NaMEpCUVdkQ0xFTkJRVU5YTEV0QlFXcENMRVZCUVhkQ1ZDeE5RVUY0UWl4RFFVRTVRanRCUVVOQk8wRkJRMFk3UVVGRFJVY3NhVUpCUVU5SkxFZEJRVkFzU1VGQlkwVXNTMEZCWkR0QlFWWkdPMEZCV1VRN1FVRkRSanM3UVVGRlJDeE5RVUZKU0N4WlFVRktMRVZCUVd0Q08wRkJRMmhDU0N4WFFVRlBMR3RDUVVGUUxFbEJRVFpDUXl4blFrRkJaMEpLTEUxQlFXaENMRWRCUVhsQ0xFZEJRWHBDTEVkQlFTdENTU3huUWtGQlowSkRMRTlCUVRWRk8wRkJRMFE3TzBGQlJVUXNVMEZCVDBZc1RVRkJVRHRCUVVORUxFTWlMQ0ptYVd4bElqb2lZblZwYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0JEYjI1MlpYSjBJSEJsY21ObGJuUmhaMlVnZEc4Z2NHbDRaV3h6WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJsY21ObGJuUmhaMlVnYjJZZ2RHOTBZV3dnYkdWdVozUm9YRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVkc5MFlXd2diR1Z1WjNSb1hHNHFMMXh1WTI5dWMzUWdjR1Z5WTJWdWRGUnZVR2w0Wld4eklEMGdLSEJsY21ObGJuUXNJR3hsYm1kMGFDa2dQVDRnS0hCaGNuTmxSbXh2WVhRb2NHVnlZMlZ1ZENrZ0x5QXhNREFwSUNvZ2JHVnVaM1JvSUNzZ0ozQjRKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hOMFlYUmxMQ0JzWlc1bmRHZ3BJRDArSUh0Y2JpQWdZMjl1YzNRZ2MzUjViR1Z6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJR1JoYzJoQmNuSmhlVk4wZVd4bGN5QTlJSHRjYmlBZ0lDQnNaVzVuZEdnNklEQXNYRzRnSUNBZ2MzQmhZMmx1WnpvZ2JHVnVaM1JvSUNzZ0ozQjRKMXh1SUNCOU8xeHVJQ0JzWlhRZ2FHRnpSR0Z6YUVGeWNtRjVJRDBnWm1Gc2MyVTdYRzVjYmlBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhOMFlYUmxLU0I3WEc0Z0lDQWdhV1lnS0hOMFlYUmxMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdjM1JoZEdWYmEyVjVYVHRjYmx4dUlDQWdJQ0FnYzNkcGRHTm9JQ2hyWlhrcElIdGNiaUFnSUNBZ0lHTmhjMlVnSjJ4bGJtZDBhQ2M2WEc0Z0lDQWdJQ0JqWVhObElDZHpjR0ZqYVc1bkp6cGNiaUFnSUNBZ0lDQWdhR0Z6UkdGemFFRnljbUY1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnWkdGemFFRnljbUY1VTNSNWJHVnpXMnRsZVYwZ1BTQndaWEpqWlc1MFZHOVFhWGhsYkhNb2RtRnNkV1VzSUd4bGJtZDBhQ2s3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdZMkZ6WlNBbmIyWm1jMlYwSnpwY2JpQWdJQ0FnSUNBZ2MzUjViR1Z6V3lkemRISnZhMlV0WkdGemFHOW1abk5sZENkZElEMGdjR1Z5WTJWdWRGUnZVR2w0Wld4ektDMTJZV3gxWlN3Z2JHVnVaM1JvS1R0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0JrWldaaGRXeDBPbHh1SUNBZ0lDQWdJQ0J6ZEhsc1pYTmJhMlY1WFNBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdsbUlDaG9ZWE5FWVhOb1FYSnlZWGtwSUh0Y2JpQWdJQ0J6ZEhsc1pYTmJKM04wY205clpTMWtZWE5vWVhKeVlYa25YU0E5SUdSaGMyaEJjbkpoZVZOMGVXeGxjeTVzWlc1bmRHZ2dLeUFuSUNjZ0t5QmtZWE5vUVhKeVlYbFRkSGxzWlhNdWMzQmhZMmx1Wnp0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCemRIbHNaWE03WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9