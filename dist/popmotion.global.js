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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbImFwcGVuZFVuaXQiLCJ1bml0IiwidiIsImNsYW1wTWF4IiwibWF4IiwiTWF0aCIsIm1pbiIsImNsYW1wTWluIiwiY2xhbXAiLCJfbWluIiwiX21heCIsImZsb3ciLCJ0cmFuc2Zvcm1lcnMiLCJudW1UcmFuc2Zvcm1lcnMiLCJsZW5ndGgiLCJpIiwiYWNjIiwiYXJncyIsImludGVycG9sYXRlIiwiaW5wdXQiLCJvdXRwdXQiLCJyYW5nZUVhc2luZyIsInJhbmdlTGVuZ3RoIiwiZmluYWxJbmRleCIsInByb2dyZXNzSW5SYW5nZSIsImVhc2VkUHJvZ3Jlc3MiLCJ3cmFwIiwicmFuZ2VTaXplIiwic3RlcHMiLCJwcm9ncmVzcyIsInRyYW5zZm9ybUNoaWxkVmFsdWVzIiwiY2hpbGRUcmFuc2Zvcm1lcnMiLCJrZXkiLCJjaGlsZFRyYW5zZm9ybWVyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOzs7Ozs7O0FBT08sSUFBTUEsa0NBQWEsVUFBQ0MsSUFBRDtBQUFBLFNBQVUsVUFBQ0MsQ0FBRDtBQUFBLGdCQUFVQSxDQUFWLEdBQWNELElBQWQ7QUFBQSxHQUFWO0FBQUEsQ0FBbkI7O0FBRVA7Ozs7Ozs7QUFPTyxJQUFNRSw4QkFBVyxVQUFDQyxHQUFEO0FBQUEsU0FBUyxVQUFDRixDQUFEO0FBQUEsV0FBT0csS0FBS0MsR0FBTCxDQUFTSixDQUFULEVBQVlFLEdBQVosQ0FBUDtBQUFBLEdBQVQ7QUFBQSxDQUFqQjtBQUNBLElBQU1HLDhCQUFXLFVBQUNELEdBQUQ7QUFBQSxTQUFTLFVBQUNKLENBQUQ7QUFBQSxXQUFPRyxLQUFLRCxHQUFMLENBQVNGLENBQVQsRUFBWUksR0FBWixDQUFQO0FBQUEsR0FBVDtBQUFBLENBQWpCO0FBQ0EsSUFBTUUsd0JBQVEsVUFBQ0YsR0FBRCxFQUFNRixHQUFOLEVBQWM7QUFDakMsTUFBTUssT0FBT0YsU0FBU0QsR0FBVCxDQUFiO0FBQ0EsTUFBTUksT0FBT1AsU0FBU0MsR0FBVCxDQUFiO0FBQ0EsU0FBTyxVQUFDRixDQUFEO0FBQUEsV0FBT08sS0FBS0MsS0FBS1IsQ0FBTCxDQUFMLENBQVA7QUFBQSxHQUFQO0FBQ0QsQ0FKTTs7QUFNUDs7Ozs7OztBQU9PLElBQU1TLHNCQUFPLFlBQXFCO0FBQUEsb0NBQWpCQyxZQUFpQjtBQUFqQkEsZ0JBQWlCO0FBQUE7O0FBQ3ZDLE1BQU1DLGtCQUFrQkQsYUFBYUUsTUFBckM7QUFDQSxNQUFJQyxJQUFJLENBQVI7O0FBRUEsU0FBTyxVQUFDQyxHQUFELEVBQWtCO0FBQUEsdUNBQVRDLElBQVM7QUFBVEEsVUFBUztBQUFBOztBQUN2QixRQUFJZixJQUFJYyxHQUFSO0FBQ0EsU0FBS0QsSUFBSSxDQUFULEVBQVlBLElBQUlGLGVBQWhCLEVBQWlDRSxHQUFqQyxFQUFzQztBQUNwQ2IsVUFBSVUsYUFBYUcsQ0FBYix1QkFBZ0JiLENBQWhCLFNBQXNCZSxJQUF0QixFQUFKO0FBQ0Q7O0FBRUQsV0FBT2YsQ0FBUDtBQUNELEdBUEQ7QUFRRCxDQVpNOztBQWNBLElBQU1nQixvQ0FBYyxVQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBZ0JDLFdBQWhCLEVBQWdDO0FBQ3pELE1BQU1DLGNBQWNILE1BQU1MLE1BQTFCO0FBQ0EsTUFBTVMsYUFBYUQsY0FBYyxDQUFqQzs7QUFFQSxTQUFPLFVBQUNwQixDQUFELEVBQU87QUFDWjtBQUNBLFFBQUlBLEtBQUtpQixNQUFNLENBQU4sQ0FBVCxFQUFtQjtBQUNqQixhQUFPQyxPQUFPLENBQVAsQ0FBUDtBQUNEOztBQUVEO0FBQ0EsUUFBSWxCLEtBQUtpQixNQUFNSSxVQUFOLENBQVQsRUFBNEI7QUFDMUIsYUFBT0gsT0FBT0csVUFBUCxDQUFQO0FBQ0Q7O0FBRUQsUUFBSVIsSUFBSSxDQUFSOztBQUVBO0FBQ0EsV0FBT0EsSUFBSU8sV0FBWCxFQUF3QlAsR0FBeEIsRUFBNkI7QUFDM0IsVUFBSUksTUFBTUosQ0FBTixJQUFXYixDQUFYLElBQWdCYSxNQUFNUSxVQUExQixFQUFzQztBQUNwQztBQUNEO0FBQ0Y7O0FBRUQsUUFBTUMsa0JBQWtCLGdDQUFxQkwsTUFBTUosSUFBSSxDQUFWLENBQXJCLEVBQW1DSSxNQUFNSixDQUFOLENBQW5DLEVBQTZDYixDQUE3QyxDQUF4QjtBQUNBLFFBQU11QixnQkFBaUJKLFdBQUQsR0FBZ0JBLFlBQVlOLENBQVosRUFBZVMsZUFBZixDQUFoQixHQUFrREEsZUFBeEU7QUFDQSxXQUFPLGdDQUFxQkosT0FBT0wsSUFBSSxDQUFYLENBQXJCLEVBQW9DSyxPQUFPTCxDQUFQLENBQXBDLEVBQStDVSxhQUEvQyxDQUFQO0FBQ0QsR0F2QkQ7QUF3QkQsQ0E1Qk07O0FBOEJBLElBQU1DLHNCQUFPLFVBQUNwQixHQUFELEVBQU1GLEdBQU47QUFBQSxTQUFjLFVBQUNGLENBQUQsRUFBTztBQUN2QyxRQUFNeUIsWUFBWXZCLE1BQU1FLEdBQXhCO0FBQ0EsV0FBTyxDQUFDLENBQUNKLElBQUlJLEdBQUwsSUFBWXFCLFNBQVosR0FBd0JBLFNBQXpCLElBQXNDQSxTQUF0QyxHQUFrRHJCLEdBQXpEO0FBQ0QsR0FIbUI7QUFBQSxDQUFiOztBQUtBLElBQU1zQix3QkFBUSxVQUFDQSxLQUFELEVBQVF0QixHQUFSLEVBQWFGLEdBQWI7QUFBQSxTQUFxQixVQUFDRixDQUFELEVBQU87QUFDL0MsUUFBTTJCLFdBQVcsZ0NBQXFCdkIsR0FBckIsRUFBMEJGLEdBQTFCLEVBQStCRixDQUEvQixDQUFqQjtBQUNBLFdBQU8sd0JBQWEwQixLQUFiLEVBQW9CQyxRQUFwQixDQUFQO0FBQ0QsR0FIb0I7QUFBQSxDQUFkOztBQUtBLElBQU1DLHNEQUF1QixVQUFDQyxpQkFBRDtBQUFBLFNBQXVCLFVBQUM3QixDQUFELEVBQU87QUFDaEUsU0FBSyxJQUFJOEIsR0FBVCxJQUFnQjlCLENBQWhCLEVBQW1CO0FBQ2pCLFVBQU0rQixtQkFBbUJGLGtCQUFrQkMsR0FBbEIsQ0FBekI7QUFDQSxVQUFJQyxnQkFBSixFQUFzQjtBQUNwQi9CLFVBQUU4QixHQUFGLElBQVNDLGlCQUFpQi9CLEVBQUU4QixHQUFGLENBQWpCLENBQVQ7QUFDRDtBQUNGOztBQUVELFdBQU85QixDQUFQO0FBQ0QsR0FUbUM7QUFBQSxDQUE3QiIsImZpbGUiOiJ0cmFuc2Zvcm1lcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MsIHN0ZXBQcm9ncmVzcyB9IGZyb20gJy4vY2FsYyc7XG5cbi8qKlxuICogQXBwZW5kIFVuaXRcbiAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGVuZFxuICogYXBwZW5kVW5pdCgncHgnLCAyMCkgLT4gJzIwcHgnXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVuaXQpXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBhcHBlbmRVbml0ID0gKHVuaXQpID0+ICh2KSA9PiBgJHt2fSR7dW5pdH1gO1xuXG4vKipcbiAqIENsYW1wIHZhbHVlIGJldHdlZW5cbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVzdHJpY3QgYSBnaXZlbiB2YWx1ZSBiZXR3ZWVuIGBtaW5gIGFuZCBgbWF4YFxuICogQHBhcmFtICB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBjbGFtcE1heCA9IChtYXgpID0+ICh2KSA9PiBNYXRoLm1pbih2LCBtYXgpO1xuZXhwb3J0IGNvbnN0IGNsYW1wTWluID0gKG1pbikgPT4gKHYpID0+IE1hdGgubWF4KHYsIG1pbik7XG5leHBvcnQgY29uc3QgY2xhbXAgPSAobWluLCBtYXgpID0+IHtcbiAgY29uc3QgX21pbiA9IGNsYW1wTWluKG1pbik7XG4gIGNvbnN0IF9tYXggPSBjbGFtcE1heChtYXgpO1xuICByZXR1cm4gKHYpID0+IF9taW4oX21heCh2KSk7XG59O1xuXG4vKipcbiAqIEZsb3dcbiAqIENvbXBvc2Ugb3RoZXIgdHJhbnNmb3JtZXJzIHRvIHJ1biBsaW5lYXJpbHlcbiAqIGZsb3cobWluKDIwKSwgbWF4KDQwKSlcbiAqIEBwYXJhbSAgey4uLmZ1bmN0aW9uc30gdHJhbnNmb3JtZXJzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGZsb3cgPSAoLi4udHJhbnNmb3JtZXJzKSA9PiB7XG4gIGNvbnN0IG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gIGxldCBpID0gMDtcblxuICByZXR1cm4gKGFjYywgLi4uYXJncykgPT4ge1xuICAgIGxldCB2ID0gYWNjO1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbnRlcnBvbGF0ZSA9IChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykgPT4ge1xuICBjb25zdCByYW5nZUxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgY29uc3QgZmluYWxJbmRleCA9IHJhbmdlTGVuZ3RoIC0gMTtcblxuICByZXR1cm4gKHYpID0+IHtcbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1pbmltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPD0gaW5wdXRbMF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbMF07XG4gICAgfVxuXG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtYXhpbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2ID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgIH1cblxuICAgIGxldCBpID0gMTtcblxuICAgIC8vIEZpbmQgaW5kZXggb2YgcmFuZ2Ugc3RhcnRcbiAgICBmb3IgKDsgaSA8IHJhbmdlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpbnB1dFtpXSA+IHYgfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzc0luUmFuZ2UgPSBnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbnB1dFtpIC0gMV0sIGlucHV0W2ldLCB2KTtcbiAgICBjb25zdCBlYXNlZFByb2dyZXNzID0gKHJhbmdlRWFzaW5nKSA/IHJhbmdlRWFzaW5nW2ldKHByb2dyZXNzSW5SYW5nZSkgOiBwcm9ncmVzc0luUmFuZ2U7XG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKG91dHB1dFtpIC0gMV0sIG91dHB1dFtpXSwgZWFzZWRQcm9ncmVzcyk7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgd3JhcCA9IChtaW4sIG1heCkgPT4gKHYpID0+IHtcbiAgY29uc3QgcmFuZ2VTaXplID0gbWF4IC0gbWluO1xuICByZXR1cm4gKCh2IC0gbWluKSAlIHJhbmdlU2l6ZSArIHJhbmdlU2l6ZSkgJSByYW5nZVNpemUgKyBtaW47XG59O1xuXG5leHBvcnQgY29uc3Qgc3RlcHMgPSAoc3RlcHMsIG1pbiwgbWF4KSA9PiAodikgPT4ge1xuICBjb25zdCBwcm9ncmVzcyA9IGdldFByb2dyZXNzRnJvbVZhbHVlKG1pbiwgbWF4LCB2KTtcbiAgcmV0dXJuIHN0ZXBQcm9ncmVzcyhzdGVwcywgcHJvZ3Jlc3MpO1xufTtcblxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybUNoaWxkVmFsdWVzID0gKGNoaWxkVHJhbnNmb3JtZXJzKSA9PiAodikgPT4ge1xuICBmb3IgKGxldCBrZXkgaW4gdikge1xuICAgIGNvbnN0IGNoaWxkVHJhbnNmb3JtZXIgPSBjaGlsZFRyYW5zZm9ybWVyc1trZXldO1xuICAgIGlmIChjaGlsZFRyYW5zZm9ybWVyKSB7XG4gICAgICB2W2tleV0gPSBjaGlsZFRyYW5zZm9ybWVyKHZba2V5XSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHY7XG59O1xuIl19

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
	    _Action.prototype.set.call(this, v);
	    (0, _framesync.onFrameUpdate)(this.scheduledUpdate);
	  };
	
	  return Value;
	}(_2.default);
	
	Value.defaultProps = {
	  passive: true
	};
	
	exports.default = function (current, onUpdate) {
	  return new Value({ current: current, onUpdate: onUpdate });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3ZhbHVlLmpzIl0sIm5hbWVzIjpbIlZhbHVlIiwic2V0IiwidiIsInNjaGVkdWxlZFVwZGF0ZSIsImRlZmF1bHRQcm9wcyIsInBhc3NpdmUiLCJjdXJyZW50Iiwib25VcGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLEs7Ozs7Ozs7OztrQkFLSkMsRyxnQkFBSUMsQyxFQUFHO0FBQ0wsc0JBQU1ELEdBQU4sWUFBVUMsQ0FBVjtBQUNBLGtDQUFjLEtBQUtDLGVBQW5CO0FBQ0QsRzs7Ozs7QUFSR0gsSyxDQUNHSSxZLEdBQWU7QUFDcEJDLFdBQVM7QUFEVyxDOztrQkFVVCxVQUFDQyxPQUFELEVBQVVDLFFBQVY7QUFBQSxTQUF1QixJQUFJUCxLQUFKLENBQVUsRUFBRU0sZ0JBQUYsRUFBV0Msa0JBQVgsRUFBVixDQUF2QjtBQUFBLEMiLCJmaWxlIjoidmFsdWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IG9uRnJhbWVVcGRhdGUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuXG5jbGFzcyBWYWx1ZSBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcGFzc2l2ZTogdHJ1ZVxuICB9O1xuXG4gIHNldCh2KSB7XG4gICAgc3VwZXIuc2V0KHYpO1xuICAgIG9uRnJhbWVVcGRhdGUodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXJyZW50LCBvblVwZGF0ZSkgPT4gbmV3IFZhbHVlKHsgY3VycmVudCwgb25VcGRhdGUgfSk7XG4iXX0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjlmN2IyM2ZlMzJkOTQ3NWVhMjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGFyYWxsZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wb2ludGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL29uLW5leHQtZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9jcmVhdGUtcmVuZGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy92YWx1ZS10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy9wcmVmaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy92YWx1ZS10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7O0FDdENBOztBQUVBOztBQUVBOztBQUVBLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUTtBQUNBLDRDQUEyQyxtWjs7Ozs7O0FDVDNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxtekY7Ozs7OztBQ3ZMM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLHV5Vjs7Ozs7O0FDak4zQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLGNBQWM7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxhQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLG1pVzs7Ozs7O0FDdE4zQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtB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Q0E7QUFDQSw0Q0FBMkMsKzVCOzs7Ozs7QUNsQjNDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsK3NGIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMjlmN2IyM2ZlMzJkOTQ3NWVhMjZcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi9wb3Btb3Rpb24nKTtcblxudmFyIHBvcG1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wb3Btb3Rpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG53aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTluYkc5aVlXd3Vhbk1pWFN3aWJtRnRaWE1pT2xzaWNHOXdiVzkwYVc5dUlpd2lkMmx1Wkc5M0lsMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJPenRKUVVGWlFTeFRPenM3TzBGQlExcERMRTlCUVU5RUxGTkJRVkFzUjBGQmJVSkJMRk5CUVc1Q0lpd2labWxzWlNJNkltZHNiMkpoYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0FxSUdGeklIQnZjRzF2ZEdsdmJpQm1jbTl0SUNjdUwzQnZjRzF2ZEdsdmJpYzdYRzUzYVc1a2IzY3VjRzl3Ylc5MGFXOXVJRDBnY0c5d2JXOTBhVzl1TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3ZnUGF0aCA9IGV4cG9ydHMuc3ZnID0gZXhwb3J0cy5jc3MgPSBleHBvcnRzLlJlbmRlcmVyID0gZXhwb3J0cy52YWx1ZSA9IGV4cG9ydHMuc3RhZ2dlciA9IGV4cG9ydHMudHdlZW4gPSBleHBvcnRzLnBvaW50ZXIgPSBleHBvcnRzLnBoeXNpY3MgPSBleHBvcnRzLnBhcmFsbGVsID0gZXhwb3J0cy5vZmZzZXQgPSBleHBvcnRzLmRlbGF5ID0gZXhwb3J0cy5jcm9zc0ZhZGUgPSBleHBvcnRzLmNvbXBvc2l0ZSA9IGV4cG9ydHMuY2hhaW4gPSBleHBvcnRzLmJsZW5kVHdlZW5zID0gZXhwb3J0cy5BY3Rpb24gPSBleHBvcnRzLnZhbHVlVHlwZXMgPSBleHBvcnRzLnRyYW5zZm9ybSA9IGV4cG9ydHMuZWFzaW5nID0gZXhwb3J0cy5jYWxjID0gZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi9mcmFtZXN5bmMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lU3RhcnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVTdGFydDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVVcGRhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lUmVuZGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lUmVuZGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZUVuZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZUVuZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVTdGFydCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVN0YXJ0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZVVwZGF0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVVwZGF0ZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVSZW5kZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVSZW5kZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lRW5kJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lRW5kO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndGltZVNpbmNlTGFzdEZyYW1lJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjdXJyZW50RnJhbWVUaW1lc3RhbXAnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmN1cnJlbnRGcmFtZVRpbWVzdGFtcDtcbiAgfVxufSk7XG5cbnZhciBfY2FsYzIgPSByZXF1aXJlKCcuL2luYy9jYWxjJyk7XG5cbnZhciBfY2FsYyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jYWxjMik7XG5cbnZhciBfZWFzaW5nMiA9IHJlcXVpcmUoJy4vaW5jL2Vhc2luZycpO1xuXG52YXIgX2Vhc2luZyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9lYXNpbmcyKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF90cmFuc2Zvcm0gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHJhbnNmb3JtZXJzKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IHJlcXVpcmUoJy4vaW5jL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF92YWx1ZVR5cGVzMik7XG5cbnZhciBfYWN0aW9ucyA9IHJlcXVpcmUoJy4vYWN0aW9ucycpO1xuXG52YXIgX2FjdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWN0aW9ucyk7XG5cbnZhciBfYmxlbmRUd2VlbnMyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2JsZW5kLXR3ZWVucycpO1xuXG52YXIgX2JsZW5kVHdlZW5zMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JsZW5kVHdlZW5zMik7XG5cbnZhciBfY2hhaW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NoYWluJyk7XG5cbnZhciBfY2hhaW4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hhaW4yKTtcblxudmFyIF9jb21wb3NpdGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NvbXBvc2l0ZScpO1xuXG52YXIgX2NvbXBvc2l0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGUyKTtcblxudmFyIF9jcm9zc0ZhZGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Nyb3NzLWZhZGUnKTtcblxudmFyIF9jcm9zc0ZhZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3Jvc3NGYWRlMik7XG5cbnZhciBfZGVsYXkyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2RlbGF5Jyk7XG5cbnZhciBfZGVsYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVsYXkyKTtcblxudmFyIF9vZmZzZXQyID0gcmVxdWlyZSgnLi9hY3Rpb25zL29mZnNldCcpO1xuXG52YXIgX29mZnNldDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vZmZzZXQyKTtcblxudmFyIF9wYXJhbGxlbDIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcGFyYWxsZWwnKTtcblxudmFyIF9wYXJhbGxlbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJhbGxlbDIpO1xuXG52YXIgX3BoeXNpY3MyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BoeXNpY3MnKTtcblxudmFyIF9waHlzaWNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BoeXNpY3MyKTtcblxudmFyIF9wb2ludGVyMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9wb2ludGVyJyk7XG5cbnZhciBfcG9pbnRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb2ludGVyMik7XG5cbnZhciBfdHdlZW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4yKTtcblxudmFyIF9zdGFnZ2VyMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9zdGFnZ2VyJyk7XG5cbnZhciBfc3RhZ2dlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGFnZ2VyMik7XG5cbnZhciBfdmFsdWUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3ZhbHVlJyk7XG5cbnZhciBfdmFsdWUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWUyKTtcblxudmFyIF9yZW5kZXJlcnMgPSByZXF1aXJlKCcuL3JlbmRlcmVycycpO1xuXG52YXIgX3JlbmRlcmVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW5kZXJlcnMpO1xuXG52YXIgX2NzczIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9jc3MnKTtcblxudmFyIF9jc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzMik7XG5cbnZhciBfc3ZnMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL3N2ZycpO1xuXG52YXIgX3N2ZzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmcyKTtcblxudmFyIF9zdmdQYXRoMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL3N2Zy1wYXRoJyk7XG5cbnZhciBfc3ZnUGF0aDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmV4cG9ydHMuY2FsYyA9IF9jYWxjO1xuZXhwb3J0cy5lYXNpbmcgPSBfZWFzaW5nO1xuZXhwb3J0cy50cmFuc2Zvcm0gPSBfdHJhbnNmb3JtO1xuZXhwb3J0cy52YWx1ZVR5cGVzID0gX3ZhbHVlVHlwZXM7XG5cbi8vIEFjdGlvbnNcblxuZXhwb3J0cy5BY3Rpb24gPSBfYWN0aW9uczIuZGVmYXVsdDtcbmV4cG9ydHMuYmxlbmRUd2VlbnMgPSBfYmxlbmRUd2VlbnMzLmRlZmF1bHQ7XG5leHBvcnRzLmNoYWluID0gX2NoYWluMy5kZWZhdWx0O1xuZXhwb3J0cy5jb21wb3NpdGUgPSBfY29tcG9zaXRlMy5kZWZhdWx0O1xuZXhwb3J0cy5jcm9zc0ZhZGUgPSBfY3Jvc3NGYWRlMy5kZWZhdWx0O1xuZXhwb3J0cy5kZWxheSA9IF9kZWxheTMuZGVmYXVsdDtcbmV4cG9ydHMub2Zmc2V0ID0gX29mZnNldDMuZGVmYXVsdDtcbmV4cG9ydHMucGFyYWxsZWwgPSBfcGFyYWxsZWwzLmRlZmF1bHQ7XG5leHBvcnRzLnBoeXNpY3MgPSBfcGh5c2ljczMuZGVmYXVsdDtcbmV4cG9ydHMucG9pbnRlciA9IF9wb2ludGVyMy5kZWZhdWx0O1xuZXhwb3J0cy50d2VlbiA9IF90d2VlbjMuZGVmYXVsdDtcbmV4cG9ydHMuc3RhZ2dlciA9IF9zdGFnZ2VyMy5kZWZhdWx0O1xuZXhwb3J0cy52YWx1ZSA9IF92YWx1ZTMuZGVmYXVsdDtcblxuLy8gUmVuZGVyZXJzXG5cbmV4cG9ydHMuUmVuZGVyZXIgPSBfcmVuZGVyZXJzMi5kZWZhdWx0O1xuZXhwb3J0cy5jc3MgPSBfY3NzMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmcgPSBfc3ZnMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmdQYXRoID0gX3N2Z1BhdGgzLmRlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdiM0J0YjNScGIyNHVhbk1pWFN3aWJtRnRaWE1pT2xzaWIyNUdjbUZ0WlZOMFlYSjBJaXdpYjI1R2NtRnRaVlZ3WkdGMFpTSXNJbTl1Um5KaGJXVlNaVzVrWlhJaUxDSnZia1p5WVcxbFJXNWtJaXdpWTJGdVkyVnNUMjVHY21GdFpWTjBZWEowSWl3aVkyRnVZMlZzVDI1R2NtRnRaVlZ3WkdGMFpTSXNJbU5oYm1ObGJFOXVSbkpoYldWU1pXNWtaWElpTENKallXNWpaV3hQYmtaeVlXMWxSVzVrSWl3aWRHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbElpd2lZM1Z5Y21WdWRFWnlZVzFsVkdsdFpYTjBZVzF3SWl3aVkyRnNZeUlzSW1WaGMybHVaeUlzSW5SeVlXNXpabTl5YlNJc0luWmhiSFZsVkhsd1pYTWlMQ0pCWTNScGIyNGlMQ0ppYkdWdVpGUjNaV1Z1Y3lJc0ltTm9ZV2x1SWl3aVkyOXRjRzl6YVhSbElpd2lZM0p2YzNOR1lXUmxJaXdpWkdWc1lYa2lMQ0p2Wm1aelpYUWlMQ0p3WVhKaGJHeGxiQ0lzSW5Cb2VYTnBZM01pTENKd2IybHVkR1Z5SWl3aWRIZGxaVzRpTENKemRHRm5aMlZ5SWl3aWRtRnNkV1VpTENKU1pXNWtaWEpsY2lJc0ltTnpjeUlzSW5OMlp5SXNJbk4yWjFCaGRHZ2lYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN2MwSkJSVVZCTEZrN096czdPenR6UWtGRFFVTXNZVHM3T3pzN08zTkNRVU5CUXl4aE96czdPenM3YzBKQlEwRkRMRlU3T3pzN096dHpRa0ZEUVVNc2EwSTdPenM3T3p0elFrRkRRVU1zYlVJN096czdPenR6UWtGRFFVTXNiVUk3T3pzN096dHpRa0ZEUVVNc1owSTdPenM3T3p0elFrRkRRVU1zYTBJN096czdPenR6UWtGRFFVTXNjVUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzFGQlIxVkRMRWs3VVVGRFFVTXNUVHRSUVVOQlF5eFRPMUZCUTBGRExGVTdPMEZCUlZvN08xRkJRMDlETEUwN1VVRkRRVU1zVnp0UlFVTkJReXhMTzFGQlEwRkRMRk03VVVGRFFVTXNVenRSUVVOQlF5eExPMUZCUTBGRExFMDdVVUZEUVVNc1VUdFJRVU5CUXl4UE8xRkJRMEZETEU4N1VVRkRRVU1zU3p0UlFVTkJReXhQTzFGQlEwRkRMRXM3TzBGQlJWQTdPMUZCUTA5RExGRTdVVUZEUVVNc1J6dFJRVU5CUXl4SE8xRkJRMEZETEU4aUxDSm1hV3hsSWpvaWNHOXdiVzkwYVc5dUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5OGdSbkpoYldWemVXNWpJSE5qYUdWa2RXeGxjbk5jYm1WNGNHOXlkQ0I3WEc0Z0lHOXVSbkpoYldWVGRHRnlkQ3hjYmlBZ2IyNUdjbUZ0WlZWd1pHRjBaU3hjYmlBZ2IyNUdjbUZ0WlZKbGJtUmxjaXhjYmlBZ2IyNUdjbUZ0WlVWdVpDeGNiaUFnWTJGdVkyVnNUMjVHY21GdFpWTjBZWEowTEZ4dUlDQmpZVzVqWld4UGJrWnlZVzFsVlhCa1lYUmxMRnh1SUNCallXNWpaV3hQYmtaeVlXMWxVbVZ1WkdWeUxGeHVJQ0JqWVc1alpXeFBia1p5WVcxbFJXNWtMRnh1SUNCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVc1hHNGdJR04xY25KbGJuUkdjbUZ0WlZScGJXVnpkR0Z0Y0Z4dWZTQm1jbTl0SUNjdUwyWnlZVzFsYzNsdVl5YzdYRzVjYm1WNGNHOXlkQ0FxSUdGeklHTmhiR01nWm5KdmJTQW5MaTlwYm1NdlkyRnNZeWM3WEc1bGVIQnZjblFnS2lCaGN5QmxZWE5wYm1jZ1puSnZiU0FuTGk5cGJtTXZaV0Z6YVc1bkp6dGNibVY0Y0c5eWRDQXFJR0Z6SUhSeVlXNXpabTl5YlNCbWNtOXRJQ2N1TDJsdVl5OTBjbUZ1YzJadmNtMWxjbk1uTzF4dVpYaHdiM0owSUNvZ1lYTWdkbUZzZFdWVWVYQmxjeUJtY205dElDY3VMMmx1WXk5MllXeDFaUzEwZVhCbGN5YzdYRzVjYmk4dklFRmpkR2x2Ym5OY2JtVjRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaTloWTNScGIyNXpKenRjYm1WNGNHOXlkQ0JpYkdWdVpGUjNaV1Z1Y3lCbWNtOXRJQ2N1TDJGamRHbHZibk12WW14bGJtUXRkSGRsWlc1ekp6dGNibVY0Y0c5eWRDQmphR0ZwYmlCbWNtOXRJQ2N1TDJGamRHbHZibk12WTJoaGFXNG5PMXh1Wlhod2IzSjBJR052YlhCdmMybDBaU0JtY205dElDY3VMMkZqZEdsdmJuTXZZMjl0Y0c5emFYUmxKenRjYm1WNGNHOXlkQ0JqY205emMwWmhaR1VnWm5KdmJTQW5MaTloWTNScGIyNXpMMk55YjNOekxXWmhaR1VuTzF4dVpYaHdiM0owSUdSbGJHRjVJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OWtaV3hoZVNjN1hHNWxlSEJ2Y25RZ2IyWm1jMlYwSUdaeWIyMGdKeTR2WVdOMGFXOXVjeTl2Wm1aelpYUW5PMXh1Wlhod2IzSjBJSEJoY21Gc2JHVnNJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OXdZWEpoYkd4bGJDYzdYRzVsZUhCdmNuUWdjR2g1YzJsamN5Qm1jbTl0SUNjdUwyRmpkR2x2Ym5NdmNHaDVjMmxqY3ljN1hHNWxlSEJ2Y25RZ2NHOXBiblJsY2lCbWNtOXRJQ2N1TDJGamRHbHZibk12Y0c5cGJuUmxjaWM3WEc1bGVIQnZjblFnZEhkbFpXNGdabkp2YlNBbkxpOWhZM1JwYjI1ekwzUjNaV1Z1Snp0Y2JtVjRjRzl5ZENCemRHRm5aMlZ5SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTl6ZEdGbloyVnlKenRjYm1WNGNHOXlkQ0IyWVd4MVpTQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdmRtRnNkV1VuTzF4dVhHNHZMeUJTWlc1a1pYSmxjbk5jYm1WNGNHOXlkQ0JTWlc1a1pYSmxjaUJtY205dElDY3VMM0psYm1SbGNtVnljeWM3WEc1bGVIQnZjblFnWTNOeklHWnliMjBnSnk0dmNtVnVaR1Z5WlhKekwyTnpjeWM3WEc1bGVIQnZjblFnYzNabklHWnliMjBnSnk0dmNtVnVaR1Z5WlhKekwzTjJaeWM3WEc1bGVIQnZjblFnYzNablVHRjBhQ0JtY205dElDY3VMM0psYm1SbGNtVnljeTl6ZG1jdGNHRjBhQ2M3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG4vKlxuICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcmV0dXJuIFtudW1iZXJdXG4qL1xudmFyIHRvRGVjaW1hbCA9IGZ1bmN0aW9uIChudW0pIHtcbiAgdmFyIHByZWNpc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMjtcblxuICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG5cbnZhciBaRVJPX1BPSU5UID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB6OiAwXG59O1xuXG52YXIgZGlzdGFuY2UxRCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICBcbiAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gIGFyZSBhdCAwLDBcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbnZhciBhbmdsZSA9IGV4cG9ydHMuYW5nbGUgPSBmdW5jdGlvbiAoYSkge1xuICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogWkVST19QT0lOVDtcbiAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xufTtcblxuLypcbiAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xudmFyIGRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBmdW5jdGlvbiAoZGVncmVlcykge1xuICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG59O1xuXG4vKlxuICBEaWxhdGVcbiAgXG4gIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICBcbiAgYSAtLS0tLS0tLS0gYlxuICBcbiAgdG9cbiAgXG4gIGEgLS0tLSBiXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbnZhciBkaWxhdGUgPSBleHBvcnRzLmRpbGF0ZSA9IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICByZXR1cm4gYSArIChiIC0gYSkgKiBkaWxhdGlvbjtcbn07XG5cbi8qXG4gIERpc3RhbmNlXG4gIFxuICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbnZhciBkaXN0YW5jZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBmdW5jdGlvbiAoYSkge1xuICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogWkVST19QT0lOVDtcblxuICAvLyAxRCBkaW1lbnNpb25zXG4gIGlmICgoMCwgX3V0aWxzLmlzTnVtKShhKSkge1xuICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICB2YXIgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgdmFyIHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgIHZhciB6RGVsdGEgPSAoMCwgX3V0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGVsdGEsIDIpICsgTWF0aC5wb3coeURlbHRhLCAyKSArIE1hdGgucG93KHpEZWx0YSwgMikpO1xuICB9XG59O1xuXG4vKlxuICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG52YXIgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZnVuY3Rpb24gKGZyb20sIHRvLCB2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcbn07XG5cbi8qXG4gIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbnZhciBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHByb2dyZXNzKSB7XG4gIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG52YXIgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGZ1bmN0aW9uIChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkge1xuICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gIHJldHVybiB7XG4gICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gIH07XG59O1xuXG4vKlxuICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG52YXIgcmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbn07XG5cbi8qXG4gIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbikge1xuICB2YXIgc21vb3RoaW5nID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuICByZXR1cm4gdG9EZWNpbWFsKG9sZFZhbHVlICsgZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh4cHMpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xufTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xudmFyIHN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gKHN0ZXBzLCBwcm9ncmVzcykge1xuICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgdmFyIHRhcmdldCA9IDEgLSAxIC8gc3RlcHM7XG4gIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlkyRnNZeTVxY3lKZExDSnVZVzFsY3lJNld5SjBiMFJsWTJsdFlXd2lMQ0p1ZFcwaUxDSndjbVZqYVhOcGIyNGlMQ0pOWVhSb0lpd2ljbTkxYm1RaUxDSmFSVkpQWDFCUFNVNVVJaXdpZUNJc0lua2lMQ0o2SWl3aVpHbHpkR0Z1WTJVeFJDSXNJbUVpTENKaUlpd2lZV0p6SWl3aVlXNW5iR1VpTENKeVlXUnBZVzV6Vkc5RVpXZHlaV1Z6SWl3aVlYUmhiaklpTENKa1pXZHlaV1Z6Vkc5U1lXUnBZVzV6SWl3aVpHVm5jbVZsY3lJc0lsQkpJaXdpWkdsc1lYUmxJaXdpWkdsc1lYUnBiMjRpTENKa2FYTjBZVzVqWlNJc0luaEVaV3gwWVNJc0lubEVaV3gwWVNJc0lucEVaV3gwWVNJc0luTnhjblFpTENKblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTSXNJbVp5YjIwaUxDSjBieUlzSW5aaGJIVmxJaXdpWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNaUxDSndjbTluY21WemN5SXNJbkJ2YVc1MFJuSnZiVUZ1WjJ4bFFXNWtSR2x6ZEdGdVkyVWlMQ0p2Y21sbmFXNGlMQ0pqYjNNaUxDSnphVzRpTENKeVlXUnBZVzV6SWl3aWMyMXZiM1JvSWl3aWJtVjNWbUZzZFdVaUxDSnZiR1JXWVd4MVpTSXNJbVIxY21GMGFXOXVJaXdpYzIxdmIzUm9hVzVuSWl3aWJXRjRJaXdpYzNCbFpXUlFaWEpHY21GdFpTSXNJbmh3Y3lJc0ltWnlZVzFsUkhWeVlYUnBiMjRpTENKemNHVmxaRkJsY2xObFkyOXVaQ0lzSW5abGJHOWphWFI1SWl3aWMzUmxjRkJ5YjJkeVpYTnpJaXdpYzNSbGNITWlMQ0p6WldkdFpXNTBJaXdpZEdGeVoyVjBJaXdpY0hKdlozSmxjM05QWmxSaGNtZGxkQ0lzSW0xcGJpSXNJbVpzYjI5eUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCT3p0QlFVVkJPenM3T3pzN08wRkJUMEVzU1VGQlRVRXNXVUZCV1N4VlFVRkRReXhIUVVGRUxFVkJRWGRDTzBGQlFVRXNUVUZCYkVKRExGTkJRV3RDTEhWRlFVRk9MRU5CUVUwN08wRkJRM2hEUVN4MVFrRkJXU3hGUVVGYUxFVkJRV3RDUVN4VFFVRnNRanRCUVVOQkxGTkJRVTlETEV0QlFVdERMRXRCUVV3c1EwRkJWMGdzVFVGQlRVTXNVMEZCYWtJc1NVRkJPRUpCTEZOQlFYSkRPMEZCUTBRc1EwRklSRHM3UVVGTFFTeEpRVUZOUnl4aFFVRmhPMEZCUTJwQ1F5eExRVUZITEVOQlJHTTdRVUZGYWtKRExFdEJRVWNzUTBGR1l6dEJRVWRxUWtNc1MwRkJSenRCUVVoakxFTkJRVzVDT3p0QlFVMUJMRWxCUVUxRExHRkJRV0VzVlVGQlEwTXNRMEZCUkN4RlFVRkpReXhEUVVGS08wRkJRVUVzVTBGQlZWSXNTMEZCUzFNc1IwRkJUQ3hEUVVGVFJpeEpRVUZKUXl4RFFVRmlMRU5CUVZZN1FVRkJRU3hEUVVGdVFqczdRVUZGUVRzN096czdPenM3T3p0QlFWVlBMRWxCUVUxRkxIZENRVUZSTEZWQlFVTklMRU5CUVVRN1FVRkJRU3hOUVVGSlF5eERRVUZLTEhWRlFVRlJUaXhWUVVGU08wRkJRVUVzVTBGQmRVSlRMR2xDUVVGcFFsZ3NTMEZCUzFrc1MwRkJUQ3hEUVVGWFRDeEZRVUZGU2l4RFFVRkdMRWRCUVUxTExFVkJRVVZNTEVOQlFXNUNMRVZCUVhOQ1NTeEZRVUZGU0N4RFFVRkdMRWRCUVUxSkxFVkJRVVZLTEVOQlFUbENMRU5CUVdwQ0xFTkJRWFpDTzBGQlFVRXNRMEZCWkRzN1FVRkZVRHM3T3pzN08wRkJUVThzU1VGQlRWTXNPRU5CUVcxQ0xGVkJRVU5ETEU5QlFVUTdRVUZCUVN4VFFVRmhRU3hWUVVGVlpDeExRVUZMWlN4RlFVRm1MRWRCUVc5Q0xFZEJRV3BETzBGQlFVRXNRMEZCZWtJN08wRkJSVkE3T3pzN096czdPenM3T3pzN096czdPenRCUVd0Q1R5eEpRVUZOUXl3d1FrRkJVeXhWUVVGRFZDeERRVUZFTEVWQlFVbERMRU5CUVVvc1JVRkJUMU1zVVVGQlVEdEJRVUZCTEZOQlFXOUNWaXhKUVVGTExFTkJRVU5ETEVsQlFVbEVMRU5CUVV3c1NVRkJWVlVzVVVGQmJrTTdRVUZCUVN4RFFVRm1PenRCUVVWUU96czdPenM3T3pzN1FVRlRUeXhKUVVGTlF5dzRRa0ZCVnl4VlFVRkRXQ3hEUVVGRUxFVkJRWFZDTzBGQlFVRXNUVUZCYmtKRExFTkJRVzFDTEhWRlFVRm1UaXhWUVVGbE96dEJRVU0zUXp0QlFVTkJMRTFCUVVrc2EwSkJRVTFMTEVOQlFVNHNRMEZCU2l4RlFVRmpPMEZCUTFvc1YwRkJUMFFzVjBGQlYwTXNRMEZCV0N4RlFVRmpReXhEUVVGa0xFTkJRVkE3TzBGQlJVWTdRVUZEUXl4SFFVcEVMRTFCU1U4N1FVRkRUQ3hSUVVGTlZ5eFRRVUZUWWl4WFFVRlhReXhGUVVGRlNpeERRVUZpTEVWQlFXZENTeXhGUVVGRlRDeERRVUZzUWl4RFFVRm1PMEZCUTBFc1VVRkJUV2xDTEZOQlFWTmtMRmRCUVZkRExFVkJRVVZJTEVOQlFXSXNSVUZCWjBKSkxFVkJRVVZLTEVOQlFXeENMRU5CUVdZN1FVRkRRU3hSUVVGTmFVSXNVMEZCVlN4clFrRkJUV1FzUlVGQlJVWXNRMEZCVWl4RFFVRkVMRWRCUVdWRExGZEJRVmRETEVWQlFVVkdMRU5CUVdJc1JVRkJaMEpITEVWQlFVVklMRU5CUVd4Q0xFTkJRV1lzUjBGQmMwTXNRMEZCY2tRN08wRkJSVUVzVjBGQlQwd3NTMEZCUzNOQ0xFbEJRVXdzUTBGQlZTeFRRVUZEU0N4TlFVRkVMRVZCUVZjc1EwRkJXQ3hoUVVGcFFrTXNUVUZCYWtJc1JVRkJNa0lzUTBGQk0wSXNZVUZCYVVORExFMUJRV3BETEVWQlFUSkRMRU5CUVRORExFTkJRVllzUTBGQlVEdEJRVU5FTzBGQlEwWXNRMEZpVFRzN1FVRmxVRHM3T3pzN096czdPenM3TzBGQldVOHNTVUZCVFVVc2MwUkJRWFZDTEZWQlFVTkRMRWxCUVVRc1JVRkJUME1zUlVGQlVDeEZRVUZYUXl4TFFVRllPMEZCUVVFc1UwRkJjVUlzUTBGQlEwRXNVVUZCVVVZc1NVRkJWQ3hMUVVGclFrTXNTMEZCUzBRc1NVRkJka0lzUTBGQmNrSTdRVUZCUVN4RFFVRTNRanM3UVVGRlVEczdPenM3T3pzN096czdRVUZYVHl4SlFVRk5SeXh6UkVGQmRVSXNWVUZCUTBnc1NVRkJSQ3hGUVVGUFF5eEZRVUZRTEVWQlFWZEhMRkZCUVZnN1FVRkJRU3hUUVVGNVFpeERRVUZGUVN4UlFVRkdMRWRCUVdGS0xFbEJRV1FzUjBGQmRVSkpMRmRCUVZkSUxFVkJRV3hETEVkQlFYZERSQ3hKUVVGb1JUdEJRVUZCTEVOQlFUZENPenRCUVVWUU96czdPenM3T3p0QlFWRlBMRWxCUVUxTExHZEZRVUUwUWl4VlFVRkRReXhOUVVGRUxFVkJRVk53UWl4TFFVRlVMRVZCUVdkQ1VTeFJRVUZvUWl4RlFVRTJRanRCUVVOd1JWSXNWVUZCVVVjc2FVSkJRV2xDU0N4TFFVRnFRaXhEUVVGU096dEJRVVZCTEZOQlFVODdRVUZEVEZBc1QwRkJSMlVzVjBGQlYyeENMRXRCUVVzclFpeEhRVUZNTEVOQlFWTnlRaXhMUVVGVUxFTkJRVmdzUjBGQk5rSnZRaXhQUVVGUE0wSXNRMEZFYkVNN1FVRkZURU1zVDBGQlIyTXNWMEZCVjJ4Q0xFdEJRVXRuUXl4SFFVRk1MRU5CUVZOMFFpeExRVUZVTEVOQlFWZ3NSMEZCTmtKdlFpeFBRVUZQTVVJN1FVRkdiRU1zUjBGQlVEdEJRVWxFTEVOQlVFMDdPMEZCVTFBN096czdPenRCUVUxUExFbEJRVTFQTERoRFFVRnRRaXhWUVVGRGMwSXNUMEZCUkR0QlFVRkJMRk5CUVdGQkxGVkJRVlVzUjBGQlZpeEhRVUZuUW1wRExFdEJRVXRsTEVWQlFXeERPMEZCUVVFc1EwRkJla0k3TzBGQlJWQTdPenM3T3pzN08wRkJVVThzU1VGQlRXMUNMREJDUVVGVExGVkJRVU5ETEZGQlFVUXNSVUZCVjBNc1VVRkJXQ3hGUVVGeFFrTXNVVUZCY2tJN1FVRkJRU3hOUVVFclFrTXNVMEZCTDBJc2RVVkJRVEpETEVOQlFUTkRPMEZCUVVFc1UwRkJhVVI2UXl4VlFVRlZkVU1zVjBGQldVTXNXVUZCV1VZc1YwRkJWME1zVVVGQmRrSXNTVUZCYlVOd1F5eExRVUZMZFVNc1IwRkJUQ3hEUVVGVFJDeFRRVUZVTEVWQlFXOUNSQ3hSUVVGd1FpeERRVUY2UkN4RFFVRnFSRHRCUVVGQkxFTkJRV1k3TzBGQlJWQTdPenM3T3p0QlFVMVBMRWxCUVUxSExIZERRVUZuUWl4VlFVRkRReXhIUVVGRUxFVkJRVTFETEdGQlFVNDdRVUZCUVN4VFFVRjVRaXhyUWtGQlRVUXNSMEZCVGl4RFFVRkVMRWRCUVdWQkxFOUJRVThzVDBGQlQwTXNZVUZCWkN4RFFVRm1MRWRCUVRoRExFTkJRWFJGTzBGQlFVRXNRMEZCZEVJN08wRkJSVkE3T3pzN096dEJRVTFQTEVsQlFVMURMREJEUVVGcFFpeFZRVUZEUXl4UlFVRkVMRVZCUVZkR0xHRkJRVmc3UVVGQlFTeFRRVUUyUWtVc1dVRkJXU3hQUVVGUFJpeGhRVUZ1UWl4RFFVRTNRanRCUVVGQkxFTkJRWFpDT3p0QlFVVlFPenM3T3pzN08wRkJUMDhzU1VGQlRVY3NjME5CUVdVc1ZVRkJRME1zUzBGQlJDeEZRVUZSYkVJc1VVRkJVaXhGUVVGeFFqdEJRVU12UXl4TlFVRk5iVUlzVlVGQlZTeExRVUZMUkN4UlFVRlJMRU5CUVdJc1EwRkJhRUk3UVVGRFFTeE5RVUZOUlN4VFFVRlRMRWxCUVVzc1NVRkJTVVlzUzBGQmVFSTdRVUZEUVN4TlFVRk5SeXh0UWtGQmJVSnFSQ3hMUVVGTGEwUXNSMEZCVEN4RFFVRlRkRUlzVjBGQlYyOUNMRTFCUVhCQ0xFVkJRVFJDTEVOQlFUVkNMRU5CUVhwQ096dEJRVVZCTEZOQlFVOW9SQ3hMUVVGTGJVUXNTMEZCVEN4RFFVRlhSaXh0UWtGQmJVSkdMRTlCUVRsQ0xFbEJRWGxEUVN4UFFVRm9SRHRCUVVORUxFTkJUazBpTENKbWFXeGxJam9pWTJGc1l5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHbHpUblZ0SUgwZ1puSnZiU0FuTGk5MWRHbHNjeWM3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnYm5WdFltVnlJSFJ2SUhnZ1pHVmphVzFoYkNCd2JHRmpaWE5jYmx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wxY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMWNiaW92WEc1amIyNXpkQ0IwYjBSbFkybHRZV3dnUFNBb2JuVnRMQ0J3Y21WamFYTnBiMjRnUFNBeUtTQTlQaUI3WEc0Z0lIQnlaV05wYzJsdmJpQTlJREV3SUNvcUlIQnlaV05wYzJsdmJqdGNiaUFnY21WMGRYSnVJRTFoZEdndWNtOTFibVFvYm5WdElDb2djSEpsWTJsemFXOXVLU0F2SUhCeVpXTnBjMmx2Ymp0Y2JuMDdYRzVjYm1OdmJuTjBJRnBGVWs5ZlVFOUpUbFFnUFNCN1hHNGdJSGc2SURBc1hHNGdJSGs2SURBc1hHNGdJSG82SURCY2JuMDdYRzVjYm1OdmJuTjBJR1JwYzNSaGJtTmxNVVFnUFNBb1lTd2dZaWtnUFQ0Z1RXRjBhQzVoWW5Nb1lTQXRJR0lwTzF4dVhHNHZLbHh1SUNCQmJtZHNaU0JpWlhSM1pXVnVJSEJ2YVc1MGMxeHVJQ0JjYmlBZ1ZISmhibk5zWVhSbGN5QjBhR1VnYUhsd2IzUm9aWFJwWTJGc0lHeHBibVVnYzI4Z2RHaGhkQ0IwYUdVZ0oyWnliMjBuSUdOdmIzSmthVzVoZEdWelhHNGdJR0Z5WlNCaGRDQXdMREJjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dXQ0JoYm1RZ1dTQmpiMjl5WkdsdVlYUmxjeUJ2WmlCbWNtOXRJSEJ2YVc1MFhHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dXQ0JoYm1RZ1dTQmpiM0prYVc1aGRHVnpJRzltSUhSdklIQnZhVzUwWEc0Z0lFQnlaWFIxY200Z1czSmhaR2xoYmwwNklFRnVaMnhsSUdKbGRIZGxaVzRnZEdobElIUjNieUJ3YjJsdWRITWdhVzRnY21Ga2FXRnVjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JoYm1kc1pTQTlJQ2hoTENCaUlEMGdXa1ZTVDE5UVQwbE9WQ2tnUFQ0Z2NtRmthV0Z1YzFSdlJHVm5jbVZsY3loTllYUm9MbUYwWVc0eUtHRXVlQ0F0SUdJdWVDd2dZUzU1SUMwZ1lpNTVLU2s3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnWkdWbmNtVmxjeUIwYnlCeVlXUnBZVzV6WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJR1JsWjNKbFpYTmNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdhVzRnY21Ga2FXRnVjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrWldkeVpXVnpWRzlTWVdScFlXNXpJRDBnS0dSbFozSmxaWE1wSUQwK0lHUmxaM0psWlhNZ0tpQk5ZWFJvTGxCSklDOGdNVGd3TzF4dVhHNHZLbHh1SUNCRWFXeGhkR1ZjYmlBZ1hHNGdJRU5vWVc1blpTQjBhR1VnY0hKdlozSmxjM05wYjI0Z1ltVjBkMlZsYmlCaElHRnVaQ0JpSUdGalkyOXlaR2x1WnlCMGJ5QmthV3hoZEdsdmJpNWNiaUFnWEc0Z0lGTnZJR1JwYkdGMGFXOXVJRDBnTUM0MUlIZHZkV3hrSUdOb1lXNW5aVnh1SUNCY2JpQWdZU0F0TFMwdExTMHRMUzBnWWx4dUlDQmNiaUFnZEc5Y2JpQWdYRzRnSUdFZ0xTMHRMU0JpWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJ5WlhacGIzVnpJSFpoYkhWbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFUnBiR0YwWlNCd2NtOW5jbVZ6Y3lCaWVTQjRYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZCeVpYWnBiM1Z6SUhaaGJIVmxJSEJzZFhNZ2RHaGxJR1JwYkdGMFpXUWdaR2xtWm1WeVpXNWpaVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrYVd4aGRHVWdQU0FvWVN3Z1lpd2daR2xzWVhScGIyNHBJRDArSUdFZ0t5QW9LR0lnTFNCaEtTQXFJR1JwYkdGMGFXOXVLVHRjYmx4dUx5cGNiaUFnUkdsemRHRnVZMlZjYmlBZ1hHNGdJRkpsZEhWeWJuTWdkR2hsSUdScGMzUmhibU5sSUdKbGRIZGxaVzRnZEhkdklHNGdaR2x0Wlc1emFXOXVZV3dnY0c5cGJuUnpMbHh1SUNCY2JpQWdRSEJoY21GdElGdHZZbXBsWTNRdmJuVnRZbVZ5WFRvZ2VDQmhibVFnZVNCdmNpQnFkWE4wSUhnZ2IyWWdjRzlwYm5RZ1FWeHVJQ0JBY0dGeVlXMGdXMjlpYW1WamRDOXVkVzFpWlhKZE9pQW9iM0IwYVc5dVlXd3BPaUI0SUdGdVpDQjVJRzl5SUdwMWMzUWdlQ0J2WmlCd2IybHVkQ0JDWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGUm9aU0JrYVhOMFlXNWpaU0JpWlhSM1pXVnVJSFJvWlNCMGQyOGdjRzlwYm5SelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHUnBjM1JoYm1ObElEMGdLR0VzSUdJZ1BTQmFSVkpQWDFCUFNVNVVLU0E5UGlCN1hHNGdJQzh2SURGRUlHUnBiV1Z1YzJsdmJuTmNiaUFnYVdZZ0tHbHpUblZ0S0dFcEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdScGMzUmhibU5sTVVRb1lTd2dZaWs3WEc1Y2JpQWdMeThnVFhWc2RHa3RaR2x0Wlc1emFXOXVZV3hjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0JqYjI1emRDQjRSR1ZzZEdFZ1BTQmthWE4wWVc1alpURkVLR0V1ZUN3Z1lpNTRLVHRjYmlBZ0lDQmpiMjV6ZENCNVJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlU3dnWWk1NUtUdGNiaUFnSUNCamIyNXpkQ0I2UkdWc2RHRWdQU0FvYVhOT2RXMG9ZUzU2S1NrZ1B5QmthWE4wWVc1alpURkVLR0V1ZWl3Z1lpNTZLU0E2SURBN1hHNWNiaUFnSUNCeVpYUjFjbTRnVFdGMGFDNXpjWEowS0NoNFJHVnNkR0VnS2lvZ01pa2dLeUFvZVVSbGJIUmhJQ29xSURJcElDc2dLSHBFWld4MFlTQXFLaUF5S1NrN1hHNGdJSDFjYm4wN1hHNWNiaThxWEc0Z0lGQnliMmR5WlhOeklIZHBkR2hwYmlCbmFYWmxiaUJ5WVc1blpWeHVJQ0JjYmlBZ1IybDJaVzRnWVNCc2IzZGxjaUJzYVcxcGRDQmhibVFnWVc0Z2RYQndaWElnYkdsdGFYUXNJSGRsSUhKbGRIVnliaUIwYUdVZ2NISnZaM0psYzNOY2JpQWdLR1Y0Y0hKbGMzTmxaQ0JoY3lCaElHNTFiV0psY2lBd0xURXBJSEpsY0hKbGMyVnVkR1ZrSUdKNUlIUm9aU0JuYVhabGJpQjJZV3gxWlN3Z1lXNWtYRzRnSUd4cGJXbDBJSFJvWVhRZ2NISnZaM0psYzNNZ2RHOGdkMmwwYUdsdUlEQXRNUzVjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dURzkzWlhJZ2JHbHRhWFFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZYQndaWElnYkdsdGFYUmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQjBieUJtYVc1a0lIQnliMmR5WlhOeklIZHBkR2hwYmlCbmFYWmxiaUJ5WVc1blpWeHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJRY205bmNtVnpjeUJ2WmlCMllXeDFaU0IzYVhSb2FXNGdjbUZ1WjJVZ1lYTWdaWGh3Y21WemMyVmtJREF0TVZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTQTlJQ2htY205dExDQjBieXdnZG1Gc2RXVXBJRDArSUNoMllXeDFaU0F0SUdaeWIyMHBJQzhnS0hSdklDMGdabkp2YlNrN1hHNWNiaThxWEc0Z0lGWmhiSFZsSUdsdUlISmhibWRsSUdaeWIyMGdjSEp2WjNKbGMzTmNiaUFnWEc0Z0lFZHBkbVZ1SUdFZ2JHOTNaWElnYkdsdGFYUWdZVzVrSUdGdUlIVndjR1Z5SUd4cGJXbDBMQ0IzWlNCeVpYUjFjbTRnZEdobElIWmhiSFZsSUhkcGRHaHBibHh1SUNCMGFHRjBJSEpoYm1kbElHRnpJR1Y0Y0hKbGMzTmxaQ0JpZVNCd2NtOW5jbVZ6Y3lBb1lTQnVkVzFpWlhJZ1puSnZiU0F3TFRFcFhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4dmQyVnlJR3hwYldsMElHOW1JSEpoYm1kbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWWEJ3WlhJZ2JHbHRhWFFnYjJZZ2NtRnVaMlZjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVWFHVWdjSEp2WjNKbGMzTWdZbVYwZDJWbGJpQnNiM2RsY2lCaGJtUWdkWEJ3WlhJZ2JHbHRhWFJ6SUdWNGNISmxjM05sWkNBd0xURmNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdZWE1nWTJGc1kzVnNZWFJsWkNCbWNtOXRJSEJ5YjJkeVpYTnpJSGRwZEdocGJpQnlZVzVuWlNBb2JtOTBJR3hwYldsMFpXUWdkMmwwYUdsdUlISmhibWRsS1Z4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5QTlJQ2htY205dExDQjBieXdnY0hKdlozSmxjM01wSUQwK0lDZ3RJSEJ5YjJkeVpYTnpJQ29nWm5KdmJTa2dLeUFvY0hKdlozSmxjM01nS2lCMGJ5a2dLeUJtY205dE8xeHVYRzR2S2x4dUlDQlFiMmx1ZENCbWNtOXRJR0Z1WjJ4bElHRnVaQ0JrYVhOMFlXNWpaVnh1SUNCY2JpQWdRSEJoY21GdElGdHZZbXBsWTNSZE9pQXlSQ0J3YjJsdWRDQnZaaUJ2Y21sbmFXNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJCYm1kc1pTQm1jbTl0SUc5eWFXZHBibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVScGMzUmhibU5sSUdaeWIyMGdiM0pwWjJsdVhHNGdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMDZJRU5oYkdOMWJHRjBaV1FnTWtRZ2NHOXBiblJjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY0c5cGJuUkdjbTl0UVc1bmJHVkJibVJFYVhOMFlXNWpaU0E5SUNodmNtbG5hVzRzSUdGdVoyeGxMQ0JrYVhOMFlXNWpaU2tnUFQ0Z2UxeHVJQ0JoYm1kc1pTQTlJR1JsWjNKbFpYTlViMUpoWkdsaGJuTW9ZVzVuYkdVcE8xeHVYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdlRG9nWkdsemRHRnVZMlVnS2lCTllYUm9MbU52Y3loaGJtZHNaU2tnS3lCdmNtbG5hVzR1ZUN4Y2JpQWdJQ0I1T2lCa2FYTjBZVzVqWlNBcUlFMWhkR2d1YzJsdUtHRnVaMnhsS1NBcklHOXlhV2RwYmk1NVhHNGdJSDA3WEc1OU8xeHVYRzR2S2x4dUlDQkRiMjUyWlhKMElISmhaR2xoYm5NZ2RHOGdaR1ZuY21WbGMxeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCeVlXUnBZVzV6WEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlHUmxaM0psWlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtRmthV0Z1YzFSdlJHVm5jbVZsY3lBOUlDaHlZV1JwWVc1ektTQTlQaUJ5WVdScFlXNXpJQ29nTVRnd0lDOGdUV0YwYUM1UVNUdGNibHh1THlwY2JpQWdSbkpoYldWeVlYUmxMV2x1WkdWd1pXNWtaVzUwSUhOdGIyOTBhR2x1WjF4dVhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUbVYzSUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVDJ4a0lIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkSUNodmNIUnBiMjVoYkNrNklGTnRiMjkwYUdsdVp5QW9NQ0JwY3lCdWIyNWxLVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Ylc5dmRHZ2dQU0FvYm1WM1ZtRnNkV1VzSUc5c1pGWmhiSFZsTENCa2RYSmhkR2x2Yml3Z2MyMXZiM1JvYVc1bklEMGdNQ2tnUFQ0Z2RHOUVaV05wYldGc0tHOXNaRlpoYkhWbElDc2dLR1IxY21GMGFXOXVJQ29nS0c1bGQxWmhiSFZsSUMwZ2IyeGtWbUZzZFdVcElDOGdUV0YwYUM1dFlYZ29jMjF2YjNSb2FXNW5MQ0JrZFhKaGRHbHZiaWtwS1R0Y2JseHVMeXBjYmlBZ1EyOXVkbVZ5ZENCNElIQmxjaUJ6WldOdmJtUWdkRzhnY0dWeUlHWnlZVzFsSUhabGJHOWphWFI1SUdKaGMyVmtJRzl1SUdad2MxeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmJtbDBJSEJsY2lCelpXTnZibVJjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCR2NtRnRaU0JrZFhKaGRHbHZiaUJwYmlCdGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR1ZsWkZCbGNrWnlZVzFsSUQwZ0tIaHdjeXdnWm5KaGJXVkVkWEpoZEdsdmJpa2dQVDRnS0dselRuVnRLSGh3Y3lrcElEOGdlSEJ6SUM4Z0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLU0E2SURBN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ2RtVnNiMk5wZEhrZ2FXNTBieUIyWld4cFkybDBlU0J3WlhJZ2MyVmpiMjVrWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ1YVhRZ2NHVnlJR1p5WVcxbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI0Z2FXNGdiWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCbFpXUlFaWEpUWldOdmJtUWdQU0FvZG1Wc2IyTnBkSGtzSUdaeVlXMWxSSFZ5WVhScGIyNHBJRDArSUhabGJHOWphWFI1SUNvZ0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLVHRjYmx4dUx5cGNiaUFnUTNKbFlYUmxJSE4wWlhCd1pXUWdkbVZ5YzJsdmJpQnZaaUF3TFRFZ2NISnZaM0psYzNOY2JpQWdYRzRnSUVCd1lYSmhiU0JiYVc1MFhUb2dUblZ0WW1WeUlHOW1JSE4wWlhCelhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlRkR1Z3Y0dWa0lIWmhiSFZsWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOMFpYQlFjbTluY21WemN5QTlJQ2h6ZEdWd2N5d2djSEp2WjNKbGMzTXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2MyVm5iV1Z1ZENBOUlERWdMeUFvYzNSbGNITWdMU0F4S1R0Y2JpQWdZMjl1YzNRZ2RHRnlaMlYwSUQwZ01TQXRJQ2d4SUM4Z2MzUmxjSE1wTzF4dUlDQmpiMjV6ZENCd2NtOW5jbVZ6YzA5bVZHRnlaMlYwSUQwZ1RXRjBhQzV0YVc0b2NISnZaM0psYzNNZ0x5QjBZWEpuWlhRc0lERXBPMXh1WEc0Z0lISmxkSFZ5YmlCTllYUm9MbVpzYjI5eUtIQnliMmR5WlhOelQyWlVZWEpuWlhRZ0x5QnpaV2R0Wlc1MEtTQXFJSE5sWjIxbGJuUTdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEggPSAxLjUyNTtcblxudmFyIGNyZWF0ZVJldmVyc2VkRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVSZXZlcnNlZEVhc2luZyA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNpbmcoMSAtIHApO1xuICB9O1xufTtcbnZhciBjcmVhdGVNaXJyb3JlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlTWlycm9yZWRFYXNpbmcgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwIDw9IDAuNSA/IGVhc2luZygyICogcCkgLyAyIDogKDIgLSBlYXNpbmcoMiAqICgxIC0gcCkpKSAvIDI7XG4gIH07XG59O1xuXG52YXIgbGluZWFyID0gZXhwb3J0cy5saW5lYXIgPSBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcDtcbn07XG5cbnZhciBjcmVhdGVFeHBvSW4gPSBleHBvcnRzLmNyZWF0ZUV4cG9JbiA9IGZ1bmN0aW9uIChwb3dlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gTWF0aC5wb3cocCwgcG93ZXIpO1xuICB9O1xufTtcbnZhciBlYXNlSW4gPSBleHBvcnRzLmVhc2VJbiA9IGNyZWF0ZUV4cG9JbigyKTtcbnZhciBlYXNlT3V0ID0gZXhwb3J0cy5lYXNlT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoZWFzZUluKTtcbnZhciBlYXNlSW5PdXQgPSBleHBvcnRzLmVhc2VJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGVhc2VJbik7XG5cbnZhciBjaXJjSW4gPSBleHBvcnRzLmNpcmNJbiA9IGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHApKTtcbn07XG52YXIgY2lyY091dCA9IGV4cG9ydHMuY2lyY091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGNpcmNJbik7XG52YXIgY2lyY0luT3V0ID0gZXhwb3J0cy5jaXJjSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhjaXJjT3V0KTtcblxudmFyIGNyZWF0ZUJhY2tJbiA9IGV4cG9ydHMuY3JlYXRlQmFja0luID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwICogcCAqICgocG93ZXIgKyAxKSAqIHAgLSBwb3dlcik7XG4gIH07XG59O1xudmFyIGJhY2tJbiA9IGV4cG9ydHMuYmFja0luID0gY3JlYXRlQmFja0luKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcbnZhciBiYWNrT3V0ID0gZXhwb3J0cy5iYWNrT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoYmFja0luKTtcbnZhciBiYWNrSW5PdXQgPSBleHBvcnRzLmJhY2tJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGJhY2tJbik7XG5cbnZhciBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHZhciBiYWNrRWFzaW5nID0gY3JlYXRlQmFja0luKHBvd2VyKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIChwICo9IDIpIDwgMSA/IDAuNSAqIGJhY2tFYXNpbmcocCkgOiAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwIC0gMSkpKTtcbiAgfTtcbn07XG5cbnZhciBhbnRpY2lwYXRlID0gZXhwb3J0cy5hbnRpY2lwYXRlID0gY3JlYXRlQW50aWNpcGF0ZUVhc2luZyhERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYklrUkZSa0ZWVEZSZlQxWkZVbE5JVDA5VVgxTlVVa1ZPUjFSSUlpd2lZM0psWVhSbFVtVjJaWEp6WldSRllYTnBibWNpTENKbFlYTnBibWNpTENKd0lpd2lZM0psWVhSbFRXbHljbTl5WldSRllYTnBibWNpTENKc2FXNWxZWElpTENKamNtVmhkR1ZGZUhCdlNXNGlMQ0p3YjNkbGNpSXNJbVZoYzJWSmJpSXNJbVZoYzJWUGRYUWlMQ0psWVhObFNXNVBkWFFpTENKamFYSmpTVzRpTENKTllYUm9JaXdpYzJsdUlpd2lZV052Y3lJc0ltTnBjbU5QZFhRaUxDSmphWEpqU1c1UGRYUWlMQ0pqY21WaGRHVkNZV05yU1c0aUxDSmlZV05yU1c0aUxDSmlZV05yVDNWMElpd2lZbUZqYTBsdVQzVjBJaXdpWTNKbFlYUmxRVzUwYVdOcGNHRjBaVVZoYzJsdVp5SXNJbUpoWTJ0RllYTnBibWNpTENKd2IzY2lMQ0poYm5ScFkybHdZWFJsSWwwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeEpRVUZOUVN3MlFrRkJOa0lzUzBGQmJrTTdPMEZCUlU4c1NVRkJUVU1zYzBSQlFYVkNMRlZCUVVORExFMUJRVVE3UVVGQlFTeFRRVUZaTEZWQlFVTkRMRU5CUVVRN1FVRkJRU3hYUVVGUExFbEJRVWxFTEU5QlFVOHNTVUZCU1VNc1EwRkJXQ3hEUVVGWU8wRkJRVUVzUjBGQldqdEJRVUZCTEVOQlFUZENPMEZCUTBFc1NVRkJUVU1zYzBSQlFYVkNMRlZCUVVOR0xFMUJRVVE3UVVGQlFTeFRRVUZaTEZWQlFVTkRMRU5CUVVRN1FVRkJRU3hYUVVGUlFTeExRVUZMTEVkQlFVNHNSMEZCWVVRc1QwRkJUeXhKUVVGSlF5eERRVUZZTEVsQlFXZENMRU5CUVRkQ0xFZEJRV2xETEVOQlFVTXNTVUZCU1VRc1QwRkJUeXhMUVVGTExFbEJRVWxETEVOQlFWUXNRMEZCVUN4RFFVRk1MRWxCUVRSQ0xFTkJRWEJGTzBGQlFVRXNSMEZCV2p0QlFVRkJMRU5CUVRkQ096dEJRVVZCTEVsQlFVMUZMREJDUVVGVExGVkJRVU5HTEVOQlFVUTdRVUZCUVN4VFFVRlBRU3hEUVVGUU8wRkJRVUVzUTBGQlpqczdRVUZGUVN4SlFVRk5SeXh6UTBGQlpTeFZRVUZEUXl4TFFVRkVPMEZCUVVFc1UwRkJWeXhWUVVGRFNpeERRVUZFTzBGQlFVRXNiMEpCUVU5QkxFTkJRVkFzUlVGQldVa3NTMEZCV2p0QlFVRkJMRWRCUVZnN1FVRkJRU3hEUVVGeVFqdEJRVU5CTEVsQlFVMURMREJDUVVGVFJpeGhRVUZoTEVOQlFXSXNRMEZCWmp0QlFVTkJMRWxCUVUxSExEUkNRVUZWVWl4eFFrRkJjVUpQTEUxQlFYSkNMRU5CUVdoQ08wRkJRMEVzU1VGQlRVVXNaME5CUVZsT0xIRkNRVUZ4UWtrc1RVRkJja0lzUTBGQmJFSTdPMEZCUlVFc1NVRkJUVWNzTUVKQlFWTXNWVUZCUTFJc1EwRkJSRHRCUVVGQkxGTkJRVThzU1VGQlNWTXNTMEZCUzBNc1IwRkJUQ3hEUVVGVFJDeExRVUZMUlN4SlFVRk1MRU5CUVZWWUxFTkJRVllzUTBGQlZDeERRVUZZTzBGQlFVRXNRMEZCWmp0QlFVTkJMRWxCUVUxWkxEUkNRVUZWWkN4eFFrRkJjVUpWTEUxQlFYSkNMRU5CUVdoQ08wRkJRMEVzU1VGQlRVc3NaME5CUVZsYUxIRkNRVUZ4UWxjc1QwRkJja0lzUTBGQmJFSTdPMEZCUlVFc1NVRkJUVVVzYzBOQlFXVXNWVUZCUTFZc1MwRkJSRHRCUVVGQkxGTkJRVmNzVlVGQlEwb3NRMEZCUkR0QlFVRkJMRmRCUVZGQkxFbEJRVWxCTEVOQlFVd3NTVUZCVnl4RFFVRkRTU3hSUVVGUkxFTkJRVlFzU1VGQlkwb3NRMEZCWkN4SFFVRnJRa2tzUzBGQk4wSXNRMEZCVUR0QlFVRkJMRWRCUVZnN1FVRkJRU3hEUVVGeVFqdEJRVU5CTEVsQlFVMVhMREJDUVVGVFJDeGhRVUZoYWtJc01FSkJRV0lzUTBGQlpqdEJRVU5CTEVsQlFVMXRRaXcwUWtGQlZXeENMSEZDUVVGeFFtbENMRTFCUVhKQ0xFTkJRV2hDTzBGQlEwRXNTVUZCVFVVc1owTkJRVmxvUWl4eFFrRkJjVUpqTEUxQlFYSkNMRU5CUVd4Q096dEJRVVZCTEVsQlFVMUhMREJFUVVGNVFpeFZRVUZEWkN4TFFVRkVMRVZCUVZjN1FVRkRMME1zVFVGQlRXVXNZVUZCWVV3c1lVRkJZVllzUzBGQllpeERRVUZ1UWp0QlFVTkJMRk5CUVU4c1ZVRkJRMG9zUTBGQlJEdEJRVUZCTEZkQlFWRXNRMEZCUTBFc1MwRkJTeXhEUVVGT0xFbEJRVmNzUTBGQldpeEhRVUZwUWl4TlFVRk5iVUlzVjBGQlYyNUNMRU5CUVZnc1EwRkJka0lzUjBGQmRVTXNUMEZCVHl4SlFVRkpVeXhMUVVGTFZ5eEhRVUZNTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVVNc1JVRkJSQ3hKUVVGUGNFSXNTVUZCU1N4RFFVRllMRU5CUVZvc1EwRkJXQ3hEUVVFNVF6dEJRVUZCTEVkQlFWQTdRVUZEUkN4RFFVaE5PenRCUVV0QkxFbEJRVTF4UWl4clEwRkJZVWdzZFVKQlFYVkNja0lzTUVKQlFYWkNMRU5CUVc1Q0lpd2labWxzWlNJNkltVmhjMmx1Wnk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1OdmJuTjBJRVJGUmtGVlRGUmZUMVpGVWxOSVQwOVVYMU5VVWtWT1IxUklJRDBnTVM0MU1qVTdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWU1pYWmxjbk5sWkVWaGMybHVaeUE5SUNobFlYTnBibWNwSUQwK0lDaHdLU0E5UGlBeElDMGdaV0Z6YVc1bktERWdMU0J3S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVk5hWEp5YjNKbFpFVmhjMmx1WnlBOUlDaGxZWE5wYm1jcElEMCtJQ2h3S1NBOVBpQW9jQ0E4UFNBd0xqVXBJRDhnWldGemFXNW5LRElnS2lCd0tTQXZJRElnT2lBb01pQXRJR1ZoYzJsdVp5Z3lJQ29nS0RFZ0xTQndLU2twSUM4Z01qdGNibHh1Wlhod2IzSjBJR052Ym5OMElHeHBibVZoY2lBOUlDaHdLU0E5UGlCd08xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzSmxZWFJsUlhod2IwbHVJRDBnS0hCdmQyVnlLU0E5UGlBb2NDa2dQVDRnY0NBcUtpQndiM2RsY2p0Y2JtVjRjRzl5ZENCamIyNXpkQ0JsWVhObFNXNGdQU0JqY21WaGRHVkZlSEJ2U1c0b01pazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1pXRnpaVTkxZENBOUlHTnlaV0YwWlZKbGRtVnljMlZrUldGemFXNW5LR1ZoYzJWSmJpazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1pXRnpaVWx1VDNWMElEMGdZM0psWVhSbFRXbHljbTl5WldSRllYTnBibWNvWldGelpVbHVLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR05wY21OSmJpQTlJQ2h3S1NBOVBpQXhJQzBnVFdGMGFDNXphVzRvVFdGMGFDNWhZMjl6S0hBcEtUdGNibVY0Y0c5eWRDQmpiMjV6ZENCamFYSmpUM1YwSUQwZ1kzSmxZWFJsVW1WMlpYSnpaV1JGWVhOcGJtY29ZMmx5WTBsdUtUdGNibVY0Y0c5eWRDQmpiMjV6ZENCamFYSmpTVzVQZFhRZ1BTQmpjbVZoZEdWTmFYSnliM0psWkVWaGMybHVaeWhqYVhKalQzVjBLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR055WldGMFpVSmhZMnRKYmlBOUlDaHdiM2RsY2lrZ1BUNGdLSEFwSUQwK0lDaHdJQ29nY0NrZ0tpQW9LSEJ2ZDJWeUlDc2dNU2tnS2lCd0lDMGdjRzkzWlhJcE8xeHVaWGh3YjNKMElHTnZibk4wSUdKaFkydEpiaUE5SUdOeVpXRjBaVUpoWTJ0SmJpaEVSVVpCVlV4VVgwOVdSVkpUU0U5UFZGOVRWRkpGVGtkVVNDazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1ltRmphMDkxZENBOUlHTnlaV0YwWlZKbGRtVnljMlZrUldGemFXNW5LR0poWTJ0SmJpazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1ltRmphMGx1VDNWMElEMGdZM0psWVhSbFRXbHljbTl5WldSRllYTnBibWNvWW1GamEwbHVLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR055WldGMFpVRnVkR2xqYVhCaGRHVkZZWE5wYm1jZ1BTQW9jRzkzWlhJcElEMCtJSHRjYmlBZ1kyOXVjM1FnWW1GamEwVmhjMmx1WnlBOUlHTnlaV0YwWlVKaFkydEpiaWh3YjNkbGNpazdYRzRnSUhKbGRIVnliaUFvY0NrZ1BUNGdLQ2h3SUNvOUlESXBJRHdnTVNrZ1B5QXdMalVnS2lCaVlXTnJSV0Z6YVc1bktIQXBJRG9nTUM0MUlDb2dLRElnTFNCTllYUm9MbkJ2ZHlneUxDQXRNVEFnS2lBb2NDQXRJREVwS1NrN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdZVzUwYVdOcGNHRjBaU0E5SUdOeVpXRjBaVUZ1ZEdsamFYQmhkR1ZGWVhOcGJtY29SRVZHUVZWTVZGOVBWa1ZTVTBoUFQxUmZVMVJTUlU1SFZFZ3BPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2Vhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMudHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSBleHBvcnRzLnN0ZXBzID0gZXhwb3J0cy53cmFwID0gZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGV4cG9ydHMuZmxvdyA9IGV4cG9ydHMuY2xhbXAgPSBleHBvcnRzLmNsYW1wTWluID0gZXhwb3J0cy5jbGFtcE1heCA9IGV4cG9ydHMuYXBwZW5kVW5pdCA9IHVuZGVmaW5lZDtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi9jYWxjJyk7XG5cbi8qKlxuICogQXBwZW5kIFVuaXRcbiAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGVuZFxuICogYXBwZW5kVW5pdCgncHgnLCAyMCkgLT4gJzIwcHgnXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVuaXQpXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBhcHBlbmRVbml0ID0gZXhwb3J0cy5hcHBlbmRVbml0ID0gZnVuY3Rpb24gKHVuaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuICcnICsgdiArIHVuaXQ7XG4gIH07XG59O1xuXG4vKipcbiAqIENsYW1wIHZhbHVlIGJldHdlZW5cbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVzdHJpY3QgYSBnaXZlbiB2YWx1ZSBiZXR3ZWVuIGBtaW5gIGFuZCBgbWF4YFxuICogQHBhcmFtICB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBjbGFtcE1heCA9IGV4cG9ydHMuY2xhbXBNYXggPSBmdW5jdGlvbiAobWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBNYXRoLm1pbih2LCBtYXgpO1xuICB9O1xufTtcbnZhciBjbGFtcE1pbiA9IGV4cG9ydHMuY2xhbXBNaW4gPSBmdW5jdGlvbiAobWluKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBNYXRoLm1heCh2LCBtaW4pO1xuICB9O1xufTtcbnZhciBjbGFtcCA9IGV4cG9ydHMuY2xhbXAgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgdmFyIF9taW4gPSBjbGFtcE1pbihtaW4pO1xuICB2YXIgX21heCA9IGNsYW1wTWF4KG1heCk7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBfbWluKF9tYXgodikpO1xuICB9O1xufTtcblxuLyoqXG4gKiBGbG93XG4gKiBDb21wb3NlIG90aGVyIHRyYW5zZm9ybWVycyB0byBydW4gbGluZWFyaWx5XG4gKiBmbG93KG1pbigyMCksIG1heCg0MCkpXG4gKiBAcGFyYW0gIHsuLi5mdW5jdGlvbnN9IHRyYW5zZm9ybWVyc1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbnZhciBmbG93ID0gZXhwb3J0cy5mbG93ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdHJhbnNmb3JtZXJzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdHJhbnNmb3JtZXJzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gIHZhciBpID0gMDtcblxuICByZXR1cm4gZnVuY3Rpb24gKGFjYykge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIHYgPSBhY2M7XG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldLmFwcGx5KHRyYW5zZm9ybWVycywgW3ZdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xuXG52YXIgaW50ZXJwb2xhdGUgPSBleHBvcnRzLmludGVycG9sYXRlID0gZnVuY3Rpb24gKGlucHV0LCBvdXRwdXQsIHJhbmdlRWFzaW5nKSB7XG4gIHZhciByYW5nZUxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgdmFyIGZpbmFsSW5kZXggPSByYW5nZUxlbmd0aCAtIDE7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtaW5pbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2IDw9IGlucHV0WzBdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0WzBdO1xuICAgIH1cblxuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA+PSBpbnB1dFtmaW5hbEluZGV4XSkge1xuICAgICAgcmV0dXJuIG91dHB1dFtmaW5hbEluZGV4XTtcbiAgICB9XG5cbiAgICB2YXIgaSA9IDE7XG5cbiAgICAvLyBGaW5kIGluZGV4IG9mIHJhbmdlIHN0YXJ0XG4gICAgZm9yICg7IGkgPCByYW5nZUxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5wdXRbaV0gPiB2IHx8IGkgPT09IGZpbmFsSW5kZXgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByb2dyZXNzSW5SYW5nZSA9ICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoaW5wdXRbaSAtIDFdLCBpbnB1dFtpXSwgdik7XG4gICAgdmFyIGVhc2VkUHJvZ3Jlc3MgPSByYW5nZUVhc2luZyA/IHJhbmdlRWFzaW5nW2ldKHByb2dyZXNzSW5SYW5nZSkgOiBwcm9ncmVzc0luUmFuZ2U7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykob3V0cHV0W2kgLSAxXSwgb3V0cHV0W2ldLCBlYXNlZFByb2dyZXNzKTtcbiAgfTtcbn07XG5cbnZhciB3cmFwID0gZXhwb3J0cy53cmFwID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciByYW5nZVNpemUgPSBtYXggLSBtaW47XG4gICAgcmV0dXJuICgodiAtIG1pbikgJSByYW5nZVNpemUgKyByYW5nZVNpemUpICUgcmFuZ2VTaXplICsgbWluO1xuICB9O1xufTtcblxudmFyIHN0ZXBzID0gZXhwb3J0cy5zdGVwcyA9IGZ1bmN0aW9uIChzdGVwcywgbWluLCBtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHByb2dyZXNzID0gKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShtaW4sIG1heCwgdik7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5zdGVwUHJvZ3Jlc3MpKHN0ZXBzLCBwcm9ncmVzcyk7XG4gIH07XG59O1xuXG52YXIgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSBleHBvcnRzLnRyYW5zZm9ybUNoaWxkVmFsdWVzID0gZnVuY3Rpb24gKGNoaWxkVHJhbnNmb3JtZXJzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGZvciAodmFyIGtleSBpbiB2KSB7XG4gICAgICB2YXIgY2hpbGRUcmFuc2Zvcm1lciA9IGNoaWxkVHJhbnNmb3JtZXJzW2tleV07XG4gICAgICBpZiAoY2hpbGRUcmFuc2Zvcm1lcikge1xuICAgICAgICB2W2tleV0gPSBjaGlsZFRyYW5zZm9ybWVyKHZba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRISmhibk5tYjNKdFpYSnpMbXB6SWwwc0ltNWhiV1Z6SWpwYkltRndjR1Z1WkZWdWFYUWlMQ0oxYm1sMElpd2lkaUlzSW1Oc1lXMXdUV0Y0SWl3aWJXRjRJaXdpVFdGMGFDSXNJbTFwYmlJc0ltTnNZVzF3VFdsdUlpd2lZMnhoYlhBaUxDSmZiV2x1SWl3aVgyMWhlQ0lzSW1ac2IzY2lMQ0owY21GdWMyWnZjbTFsY25NaUxDSnVkVzFVY21GdWMyWnZjbTFsY25NaUxDSnNaVzVuZEdnaUxDSnBJaXdpWVdOaklpd2lZWEpuY3lJc0ltbHVkR1Z5Y0c5c1lYUmxJaXdpYVc1d2RYUWlMQ0p2ZFhSd2RYUWlMQ0p5WVc1blpVVmhjMmx1WnlJc0luSmhibWRsVEdWdVozUm9JaXdpWm1sdVlXeEpibVJsZUNJc0luQnliMmR5WlhOelNXNVNZVzVuWlNJc0ltVmhjMlZrVUhKdlozSmxjM01pTENKM2NtRndJaXdpY21GdVoyVlRhWHBsSWl3aWMzUmxjSE1pTENKd2NtOW5jbVZ6Y3lJc0luUnlZVzV6Wm05eWJVTm9hV3hrVm1Gc2RXVnpJaXdpWTJocGJHUlVjbUZ1YzJadmNtMWxjbk1pTENKclpYa2lMQ0pqYUdsc1pGUnlZVzV6Wm05eWJXVnlJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96dEJRVVZCT3pzN096czdPMEZCVDA4c1NVRkJUVUVzYTBOQlFXRXNWVUZCUTBNc1NVRkJSRHRCUVVGQkxGTkJRVlVzVlVGQlEwTXNRMEZCUkR0QlFVRkJMR2RDUVVGVlFTeERRVUZXTEVkQlFXTkVMRWxCUVdRN1FVRkJRU3hIUVVGV08wRkJRVUVzUTBGQmJrSTdPMEZCUlZBN096czdPenM3UVVGUFR5eEpRVUZOUlN3NFFrRkJWeXhWUVVGRFF5eEhRVUZFTzBGQlFVRXNVMEZCVXl4VlFVRkRSaXhEUVVGRU8wRkJRVUVzVjBGQlQwY3NTMEZCUzBNc1IwRkJUQ3hEUVVGVFNpeERRVUZVTEVWQlFWbEZMRWRCUVZvc1EwRkJVRHRCUVVGQkxFZEJRVlE3UVVGQlFTeERRVUZxUWp0QlFVTkJMRWxCUVUxSExEaENRVUZYTEZWQlFVTkVMRWRCUVVRN1FVRkJRU3hUUVVGVExGVkJRVU5LTEVOQlFVUTdRVUZCUVN4WFFVRlBSeXhMUVVGTFJDeEhRVUZNTEVOQlFWTkdMRU5CUVZRc1JVRkJXVWtzUjBGQldpeERRVUZRTzBGQlFVRXNSMEZCVkR0QlFVRkJMRU5CUVdwQ08wRkJRMEVzU1VGQlRVVXNkMEpCUVZFc1ZVRkJRMFlzUjBGQlJDeEZRVUZOUml4SFFVRk9MRVZCUVdNN1FVRkRha01zVFVGQlRVc3NUMEZCVDBZc1UwRkJVMFFzUjBGQlZDeERRVUZpTzBGQlEwRXNUVUZCVFVrc1QwRkJUMUFzVTBGQlUwTXNSMEZCVkN4RFFVRmlPMEZCUTBFc1UwRkJUeXhWUVVGRFJpeERRVUZFTzBGQlFVRXNWMEZCVDA4c1MwRkJTME1zUzBGQlMxSXNRMEZCVEN4RFFVRk1MRU5CUVZBN1FVRkJRU3hIUVVGUU8wRkJRMFFzUTBGS1RUczdRVUZOVURzN096czdPenRCUVU5UExFbEJRVTFUTEhOQ1FVRlBMRmxCUVhGQ08wRkJRVUVzYjBOQlFXcENReXhaUVVGcFFqdEJRVUZxUWtFc1owSkJRV2xDTzBGQlFVRTdPMEZCUTNaRExFMUJRVTFETEd0Q1FVRnJRa1FzWVVGQllVVXNUVUZCY2tNN1FVRkRRU3hOUVVGSlF5eEpRVUZKTEVOQlFWSTdPMEZCUlVFc1UwRkJUeXhWUVVGRFF5eEhRVUZFTEVWQlFXdENPMEZCUVVFc2RVTkJRVlJETEVsQlFWTTdRVUZCVkVFc1ZVRkJVenRCUVVGQk96dEJRVU4yUWl4UlFVRkpaaXhKUVVGSll5eEhRVUZTTzBGQlEwRXNVMEZCUzBRc1NVRkJTU3hEUVVGVUxFVkJRVmxCTEVsQlFVbEdMR1ZCUVdoQ0xFVkJRV2xEUlN4SFFVRnFReXhGUVVGelF6dEJRVU53UTJJc1ZVRkJTVlVzWVVGQllVY3NRMEZCWWl4MVFrRkJaMEppTEVOQlFXaENMRk5CUVhOQ1pTeEpRVUYwUWl4RlFVRktPMEZCUTBRN08wRkJSVVFzVjBGQlQyWXNRMEZCVUR0QlFVTkVMRWRCVUVRN1FVRlJSQ3hEUVZwTk96dEJRV05CTEVsQlFVMW5RaXh2UTBGQll5eFZRVUZEUXl4TFFVRkVMRVZCUVZGRExFMUJRVklzUlVGQlowSkRMRmRCUVdoQ0xFVkJRV2RETzBGQlEzcEVMRTFCUVUxRExHTkJRV05JTEUxQlFVMU1MRTFCUVRGQ08wRkJRMEVzVFVGQlRWTXNZVUZCWVVRc1kwRkJZeXhEUVVGcVF6czdRVUZGUVN4VFFVRlBMRlZCUVVOd1FpeERRVUZFTEVWQlFVODdRVUZEV2p0QlFVTkJMRkZCUVVsQkxFdEJRVXRwUWl4TlFVRk5MRU5CUVU0c1EwRkJWQ3hGUVVGdFFqdEJRVU5xUWl4aFFVRlBReXhQUVVGUExFTkJRVkFzUTBGQlVEdEJRVU5FT3p0QlFVVkVPMEZCUTBFc1VVRkJTV3hDTEV0QlFVdHBRaXhOUVVGTlNTeFZRVUZPTEVOQlFWUXNSVUZCTkVJN1FVRkRNVUlzWVVGQlQwZ3NUMEZCVDBjc1ZVRkJVQ3hEUVVGUU8wRkJRMFE3TzBGQlJVUXNVVUZCU1ZJc1NVRkJTU3hEUVVGU096dEJRVVZCTzBGQlEwRXNWMEZCVDBFc1NVRkJTVThzVjBGQldDeEZRVUYzUWxBc1IwRkJlRUlzUlVGQk5rSTdRVUZETTBJc1ZVRkJTVWtzVFVGQlRVb3NRMEZCVGl4SlFVRlhZaXhEUVVGWUxFbEJRV2RDWVN4TlFVRk5VU3hWUVVFeFFpeEZRVUZ6UXp0QlFVTndRenRCUVVORU8wRkJRMFk3TzBGQlJVUXNVVUZCVFVNc2EwSkJRV3RDTEdkRFFVRnhRa3dzVFVGQlRVb3NTVUZCU1N4RFFVRldMRU5CUVhKQ0xFVkJRVzFEU1N4TlFVRk5TaXhEUVVGT0xFTkJRVzVETEVWQlFUWkRZaXhEUVVFM1F5eERRVUY0UWp0QlFVTkJMRkZCUVUxMVFpeG5Ra0ZCYVVKS0xGZEJRVVFzUjBGQlowSkJMRmxCUVZsT0xFTkJRVm9zUlVGQlpWTXNaVUZCWml4RFFVRm9RaXhIUVVGclJFRXNaVUZCZUVVN1FVRkRRU3hYUVVGUExHZERRVUZ4UWtvc1QwRkJUMHdzU1VGQlNTeERRVUZZTEVOQlFYSkNMRVZCUVc5RFN5eFBRVUZQVEN4RFFVRlFMRU5CUVhCRExFVkJRU3REVlN4aFFVRXZReXhEUVVGUU8wRkJRMFFzUjBGMlFrUTdRVUYzUWtRc1EwRTFRazA3TzBGQk9FSkJMRWxCUVUxRExITkNRVUZQTEZWQlFVTndRaXhIUVVGRUxFVkJRVTFHTEVkQlFVNDdRVUZCUVN4VFFVRmpMRlZCUVVOR0xFTkJRVVFzUlVGQlR6dEJRVU4yUXl4UlFVRk5lVUlzV1VGQldYWkNMRTFCUVUxRkxFZEJRWGhDTzBGQlEwRXNWMEZCVHl4RFFVRkRMRU5CUVVOS0xFbEJRVWxKTEVkQlFVd3NTVUZCV1hGQ0xGTkJRVm9zUjBGQmQwSkJMRk5CUVhwQ0xFbEJRWE5EUVN4VFFVRjBReXhIUVVGclJISkNMRWRCUVhwRU8wRkJRMFFzUjBGSWJVSTdRVUZCUVN4RFFVRmlPenRCUVV0QkxFbEJRVTF6UWl4M1FrRkJVU3hWUVVGRFFTeExRVUZFTEVWQlFWRjBRaXhIUVVGU0xFVkJRV0ZHTEVkQlFXSTdRVUZCUVN4VFFVRnhRaXhWUVVGRFJpeERRVUZFTEVWQlFVODdRVUZETDBNc1VVRkJUVEpDTEZkQlFWY3NaME5CUVhGQ2RrSXNSMEZCY2tJc1JVRkJNRUpHTEVkQlFURkNMRVZCUVN0Q1JpeERRVUV2UWl4RFFVRnFRanRCUVVOQkxGZEJRVThzZDBKQlFXRXdRaXhMUVVGaUxFVkJRVzlDUXl4UlFVRndRaXhEUVVGUU8wRkJRMFFzUjBGSWIwSTdRVUZCUVN4RFFVRmtPenRCUVV0QkxFbEJRVTFETEhORVFVRjFRaXhWUVVGRFF5eHBRa0ZCUkR0QlFVRkJMRk5CUVhWQ0xGVkJRVU0zUWl4RFFVRkVMRVZCUVU4N1FVRkRhRVVzVTBGQlN5eEpRVUZKT0VJc1IwRkJWQ3hKUVVGblFqbENMRU5CUVdoQ0xFVkJRVzFDTzBGQlEycENMRlZCUVUwclFpeHRRa0ZCYlVKR0xHdENRVUZyUWtNc1IwRkJiRUlzUTBGQmVrSTdRVUZEUVN4VlFVRkpReXhuUWtGQlNpeEZRVUZ6UWp0QlFVTndRaTlDTEZWQlFVVTRRaXhIUVVGR0xFbEJRVk5ETEdsQ1FVRnBRaTlDTEVWQlFVVTRRaXhIUVVGR0xFTkJRV3BDTEVOQlFWUTdRVUZEUkR0QlFVTkdPenRCUVVWRUxGZEJRVTg1UWl4RFFVRlFPMEZCUTBRc1IwRlViVU03UVVGQlFTeERRVUUzUWlJc0ltWnBiR1VpT2lKMGNtRnVjMlp2Y20xbGNuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5Qm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU3dnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNc0lITjBaWEJRY205bmNtVnpjeUI5SUdaeWIyMGdKeTR2WTJGc1l5YzdYRzVjYmk4cUtseHVJQ29nUVhCd1pXNWtJRlZ1YVhSY2JpQXFJRUVnWm5WdVkzUnBiMjRnZEdoaGRDQjNhV3hzSUdGd2NHVnVaRnh1SUNvZ1lYQndaVzVrVlc1cGRDZ25jSGduTENBeU1Da2dMVDRnSnpJd2NIZ25YRzRnS2lCQWNHRnlZVzBnSUh0emRISnBibWQ5SUhWdWFYUXBYRzRnS2lCQWNtVjBkWEp1SUh0dWRXMWlaWEo5WEc0Z0tpOWNibVY0Y0c5eWRDQmpiMjV6ZENCaGNIQmxibVJWYm1sMElEMGdLSFZ1YVhRcElEMCtJQ2gyS1NBOVBpQmdKSHQyZlNSN2RXNXBkSDFnTzF4dVhHNHZLaXBjYmlBcUlFTnNZVzF3SUhaaGJIVmxJR0psZEhkbFpXNWNiaUFxSUVOeVpXRjBaWE1nWVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z2NtVnpkSEpwWTNRZ1lTQm5hWFpsYmlCMllXeDFaU0JpWlhSM1pXVnVJR0J0YVc1Z0lHRnVaQ0JnYldGNFlGeHVJQ29nUUhCaGNtRnRJQ0I3Ym5WdFltVnlmU0J0YVc1Y2JpQXFJRUJ3WVhKaGJTQWdlMjUxYldKbGNuMGdiV0Y0WEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOVhHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpiR0Z0Y0UxaGVDQTlJQ2h0WVhncElEMCtJQ2gyS1NBOVBpQk5ZWFJvTG0xcGJpaDJMQ0J0WVhncE8xeHVaWGh3YjNKMElHTnZibk4wSUdOc1lXMXdUV2x1SUQwZ0tHMXBiaWtnUFQ0Z0tIWXBJRDArSUUxaGRHZ3ViV0Y0S0hZc0lHMXBiaWs3WEc1bGVIQnZjblFnWTI5dWMzUWdZMnhoYlhBZ1BTQW9iV2x1TENCdFlYZ3BJRDArSUh0Y2JpQWdZMjl1YzNRZ1gyMXBiaUE5SUdOc1lXMXdUV2x1S0cxcGJpazdYRzRnSUdOdmJuTjBJRjl0WVhnZ1BTQmpiR0Z0Y0UxaGVDaHRZWGdwTzF4dUlDQnlaWFIxY200Z0tIWXBJRDArSUY5dGFXNG9YMjFoZUNoMktTazdYRzU5TzF4dVhHNHZLaXBjYmlBcUlFWnNiM2RjYmlBcUlFTnZiWEJ2YzJVZ2IzUm9aWElnZEhKaGJuTm1iM0p0WlhKeklIUnZJSEoxYmlCc2FXNWxZWEpwYkhsY2JpQXFJR1pzYjNjb2JXbHVLREl3S1N3Z2JXRjRLRFF3S1NsY2JpQXFJRUJ3WVhKaGJTQWdleTR1TG1aMWJtTjBhVzl1YzMwZ2RISmhibk5tYjNKdFpYSnpYRzRnS2lCQWNtVjBkWEp1SUh0bWRXNWpkR2x2Ym4xY2JpQXFMMXh1Wlhod2IzSjBJR052Ym5OMElHWnNiM2NnUFNBb0xpNHVkSEpoYm5ObWIzSnRaWEp6S1NBOVBpQjdYRzRnSUdOdmJuTjBJRzUxYlZSeVlXNXpabTl5YldWeWN5QTlJSFJ5WVc1elptOXliV1Z5Y3k1c1pXNW5kR2c3WEc0Z0lHeGxkQ0JwSUQwZ01EdGNibHh1SUNCeVpYUjFjbTRnS0dGall5d2dMaTR1WVhKbmN5a2dQVDRnZTF4dUlDQWdJR3hsZENCMklEMGdZV05qTzF4dUlDQWdJR1p2Y2lBb2FTQTlJREE3SUdrZ1BDQnVkVzFVY21GdWMyWnZjbTFsY25NN0lHa3JLeWtnZTF4dUlDQWdJQ0FnZGlBOUlIUnlZVzV6Wm05eWJXVnljMXRwWFNoMkxDQXVMaTVoY21kektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZGp0Y2JpQWdmVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCcGJuUmxjbkJ2YkdGMFpTQTlJQ2hwYm5CMWRDd2diM1YwY0hWMExDQnlZVzVuWlVWaGMybHVaeWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQnlZVzVuWlV4bGJtZDBhQ0E5SUdsdWNIVjBMbXhsYm1kMGFEdGNiaUFnWTI5dWMzUWdabWx1WVd4SmJtUmxlQ0E5SUhKaGJtZGxUR1Z1WjNSb0lDMGdNVHRjYmx4dUlDQnlaWFIxY200Z0tIWXBJRDArSUh0Y2JpQWdJQ0F2THlCSlppQjJZV3gxWlNCdmRYUnphV1JsSUcxcGJtbHRkVzBnY21GdVoyVXNJSEYxYVdOcmJIa2djbVYwZFhKdVhHNGdJQ0FnYVdZZ0tIWWdQRDBnYVc1d2RYUmJNRjBwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ2ZFhSd2RYUmJNRjA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnU1dZZ2RtRnNkV1VnYjNWMGMybGtaU0J0WVhocGJYVnRJSEpoYm1kbExDQnhkV2xqYTJ4NUlISmxkSFZ5Ymx4dUlDQWdJR2xtSUNoMklENDlJR2x1Y0hWMFcyWnBibUZzU1c1a1pYaGRLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdiM1YwY0hWMFcyWnBibUZzU1c1a1pYaGRPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHeGxkQ0JwSUQwZ01UdGNibHh1SUNBZ0lDOHZJRVpwYm1RZ2FXNWtaWGdnYjJZZ2NtRnVaMlVnYzNSaGNuUmNiaUFnSUNCbWIzSWdLRHNnYVNBOElISmhibWRsVEdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lHbG1JQ2hwYm5CMWRGdHBYU0ErSUhZZ2ZId2dhU0E5UFQwZ1ptbHVZV3hKYm1SbGVDa2dlMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCamIyNXpkQ0J3Y205bmNtVnpjMGx1VW1GdVoyVWdQU0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNocGJuQjFkRnRwSUMwZ01WMHNJR2x1Y0hWMFcybGRMQ0IyS1R0Y2JpQWdJQ0JqYjI1emRDQmxZWE5sWkZCeWIyZHlaWE56SUQwZ0tISmhibWRsUldGemFXNW5LU0EvSUhKaGJtZGxSV0Z6YVc1blcybGRLSEJ5YjJkeVpYTnpTVzVTWVc1blpTa2dPaUJ3Y205bmNtVnpjMGx1VW1GdVoyVTdYRzRnSUNBZ2NtVjBkWEp1SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektHOTFkSEIxZEZ0cElDMGdNVjBzSUc5MWRIQjFkRnRwWFN3Z1pXRnpaV1JRY205bmNtVnpjeWs3WEc0Z0lIMDdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnZDNKaGNDQTlJQ2h0YVc0c0lHMWhlQ2tnUFQ0Z0tIWXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2NtRnVaMlZUYVhwbElEMGdiV0Y0SUMwZ2JXbHVPMXh1SUNCeVpYUjFjbTRnS0NoMklDMGdiV2x1S1NBbElISmhibWRsVTJsNlpTQXJJSEpoYm1kbFUybDZaU2tnSlNCeVlXNW5aVk5wZW1VZ0t5QnRhVzQ3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzUmxjSE1nUFNBb2MzUmxjSE1zSUcxcGJpd2diV0Y0S1NBOVBpQW9kaWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQndjbTluY21WemN5QTlJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0cxcGJpd2diV0Y0TENCMktUdGNiaUFnY21WMGRYSnVJSE4wWlhCUWNtOW5jbVZ6Y3loemRHVndjeXdnY0hKdlozSmxjM01wTzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElIUnlZVzV6Wm05eWJVTm9hV3hrVm1Gc2RXVnpJRDBnS0dOb2FXeGtWSEpoYm5ObWIzSnRaWEp6S1NBOVBpQW9kaWtnUFQ0Z2UxeHVJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkaWtnZTF4dUlDQWdJR052Ym5OMElHTm9hV3hrVkhKaGJuTm1iM0p0WlhJZ1BTQmphR2xzWkZSeVlXNXpabTl5YldWeWMxdHJaWGxkTzF4dUlDQWdJR2xtSUNoamFHbHNaRlJ5WVc1elptOXliV1Z5S1NCN1hHNGdJQ0FnSUNCMlcydGxlVjBnUFNCamFHbHNaRlJ5WVc1elptOXliV1Z5S0haYmEyVjVYU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSFk3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb2xvciA9IGV4cG9ydHMuaHNsYSA9IGV4cG9ydHMuaGV4ID0gZXhwb3J0cy5yZ2JhID0gZXhwb3J0cy5yZ2JVbml0ID0gZXhwb3J0cy5zY2FsZSA9IGV4cG9ydHMucHggPSBleHBvcnRzLnBlcmNlbnQgPSBleHBvcnRzLmRlZ3JlZXMgPSBleHBvcnRzLmFscGhhID0gZXhwb3J0cy5udW1iZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfdHJhbnNmb3JtQ2hpbGRWYWx1ZXMsIF90cmFuc2Zvcm1DaGlsZFZhbHVlczI7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVmFsdWUgdHlwZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBhbHBoYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogZGVncmVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBoc2xhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBwZXJjZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBweFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmdiVW5pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmdiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzY2FsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbi8vIFN0cmluZyBwcm9wZXJ0aWVzXG52YXIgUkVEID0gJ3JlZCc7XG52YXIgR1JFRU4gPSAnZ3JlZW4nO1xudmFyIEJMVUUgPSAnYmx1ZSc7XG52YXIgQUxQSEEgPSAnYWxwaGEnO1xudmFyIEhVRSA9ICdodWUnO1xudmFyIFNBVFVSQVRJT04gPSAnc2F0dXJhdGlvbic7XG52YXIgTElHSFRORVNTID0gJ2xpZ2h0bmVzcyc7XG5cbi8vIFRlbXBsYXRlc1xudmFyIHJnYmFUZW1wbGF0ZSA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciByZWQgPSBfcmVmLnJlZCxcbiAgICAgIGdyZWVuID0gX3JlZi5ncmVlbixcbiAgICAgIGJsdWUgPSBfcmVmLmJsdWUsXG4gICAgICBfcmVmJGFscGhhID0gX3JlZi5hbHBoYSxcbiAgICAgIGFscGhhID0gX3JlZiRhbHBoYSA9PT0gdW5kZWZpbmVkID8gMSA6IF9yZWYkYWxwaGE7XG4gIHJldHVybiAncmdiYSgnICsgcmVkICsgJywgJyArIGdyZWVuICsgJywgJyArIGJsdWUgKyAnLCAnICsgYWxwaGEgKyAnKSc7XG59O1xuXG52YXIgaHNsYVRlbXBsYXRlID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gIHZhciBodWUgPSBfcmVmMi5odWUsXG4gICAgICBzYXR1cmF0aW9uID0gX3JlZjIuc2F0dXJhdGlvbixcbiAgICAgIGxpZ2h0bmVzcyA9IF9yZWYyLmxpZ2h0bmVzcyxcbiAgICAgIF9yZWYyJGFscGhhID0gX3JlZjIuYWxwaGEsXG4gICAgICBhbHBoYSA9IF9yZWYyJGFscGhhID09PSB1bmRlZmluZWQgPyAxIDogX3JlZjIkYWxwaGE7XG4gIHJldHVybiAnaHNsYSgnICsgaHVlICsgJywgJyArIHNhdHVyYXRpb24gKyAnLCAnICsgbGlnaHRuZXNzICsgJywgJyArIGFscGhhICsgJyknO1xufTtcblxudmFyIG51bWJlciA9IGV4cG9ydHMubnVtYmVyID0ge1xuICB0ZXN0OiBfdXRpbHMyLmlzTnVtLFxuICBwYXJzZTogcGFyc2VGbG9hdFxufTtcblxuLy8gVmFsdWUgdHlwZXNcbnZhciBhbHBoYSA9IGV4cG9ydHMuYWxwaGEgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIHRyYW5zZm9ybTogKDAsIF90cmFuc2Zvcm1lcnMuY2xhbXApKDAsIDEpXG59KTtcblxudmFyIGRlZ3JlZXMgPSBleHBvcnRzLmRlZ3JlZXMgPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgnZGVnJyk7XG52YXIgcGVyY2VudCA9IGV4cG9ydHMucGVyY2VudCA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCclJyk7XG52YXIgcHggPSBleHBvcnRzLnB4ID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJ3B4Jyk7XG5cbnZhciBzY2FsZSA9IGV4cG9ydHMuc2NhbGUgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIGRlZmF1bHQ6IDFcbn0pO1xuXG52YXIgcmdiVW5pdCA9IGV4cG9ydHMucmdiVW5pdCA9IF9leHRlbmRzKHt9LCBudW1iZXIsIHtcbiAgdHJhbnNmb3JtOiAoMCwgX3RyYW5zZm9ybWVycy5mbG93KShcbiAgLy9odHRwOi8vY29kZXBlbi5pby9vc3VibGFrZS9mdWxsL3hHVlZhTi9cbiAgLy8gKHYsIHZhbHVlLCBhY3Rpb24pID0+IHtcbiAgLy8gICBpZiAoYWN0aW9uKSB7XG4gIC8vICAgICBjb25zdCBmcm9tQ29sb3IgPSBhY3Rpb24uZnJvbSAqIGFjdGlvbi5mcm9tO1xuICAvLyAgICAgY29uc3QgdG9Db2xvciA9IGFjdGlvbi50byAqIGFjdGlvbi50bztcbiAgLy8gICAgIHJldHVybiBNYXRoLnNxcnQoYWN0aW9uLnByb2dyZXNzICogKHRvQ29sb3IgLSBmcm9tQ29sb3IpICsgZnJvbUNvbG9yKTtcbiAgLy8gICB9XG5cbiAgLy8gICByZXR1cm4gdjtcbiAgLy8gfSxcbiAgKDAsIF90cmFuc2Zvcm1lcnMuY2xhbXApKDAsIDI1NSksIE1hdGgucm91bmQpXG59KTtcblxudmFyIHJnYmEgPSBleHBvcnRzLnJnYmEgPSB7XG4gIHRlc3Q6ICgwLCBfdXRpbHMuaXNGaXJzdENoYXJzKSgncmdiJyksXG5cbiAgcGFyc2U6ICgwLCBfdXRpbHMuc3BsaXRDb2xvclZhbHVlcykoW1JFRCwgR1JFRU4sIEJMVUUsIEFMUEhBXSksXG5cbiAgdHJhbnNmb3JtOiAoMCwgX3RyYW5zZm9ybWVycy5mbG93KSgoMCwgX3RyYW5zZm9ybWVycy50cmFuc2Zvcm1DaGlsZFZhbHVlcykoKF90cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IHt9LCBfdHJhbnNmb3JtQ2hpbGRWYWx1ZXNbUkVEXSA9IHJnYlVuaXQudHJhbnNmb3JtLCBfdHJhbnNmb3JtQ2hpbGRWYWx1ZXNbR1JFRU5dID0gcmdiVW5pdC50cmFuc2Zvcm0sIF90cmFuc2Zvcm1DaGlsZFZhbHVlc1tCTFVFXSA9IHJnYlVuaXQudHJhbnNmb3JtLCBfdHJhbnNmb3JtQ2hpbGRWYWx1ZXNbQUxQSEFdID0gYWxwaGEudHJhbnNmb3JtLCBfdHJhbnNmb3JtQ2hpbGRWYWx1ZXMpKSwgcmdiYVRlbXBsYXRlKVxufTtcblxudmFyIGhleCA9IGV4cG9ydHMuaGV4ID0gX2V4dGVuZHMoe30sIHJnYmEsIHtcblxuICB0ZXN0OiAoMCwgX3V0aWxzLmlzRmlyc3RDaGFycykoJyMnKSxcblxuICBwYXJzZTogZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgX3JlZjM7XG5cbiAgICB2YXIgciA9IHZvaWQgMCxcbiAgICAgICAgZyA9IHZvaWQgMCxcbiAgICAgICAgYiA9IHZvaWQgMDtcblxuICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgaWYgKHYubGVuZ3RoID4gNCkge1xuICAgICAgciA9IHYuc3Vic3RyKDEsIDIpO1xuICAgICAgZyA9IHYuc3Vic3RyKDMsIDIpO1xuICAgICAgYiA9IHYuc3Vic3RyKDUsIDIpO1xuXG4gICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgIH0gZWxzZSB7XG4gICAgICByID0gdi5zdWJzdHIoMSwgMSk7XG4gICAgICBnID0gdi5zdWJzdHIoMiwgMSk7XG4gICAgICBiID0gdi5zdWJzdHIoMywgMSk7XG4gICAgICByICs9IHI7XG4gICAgICBnICs9IGc7XG4gICAgICBiICs9IGI7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWYzID0ge30sIF9yZWYzW1JFRF0gPSBwYXJzZUludChyLCAxNiksIF9yZWYzW0dSRUVOXSA9IHBhcnNlSW50KGcsIDE2KSwgX3JlZjNbQkxVRV0gPSBwYXJzZUludChiLCAxNiksIF9yZWYzW0FMUEhBXSA9IDEsIF9yZWYzO1xuICB9XG59KTtcblxudmFyIGhzbGEgPSBleHBvcnRzLmhzbGEgPSB7XG4gIHRlc3Q6ICgwLCBfdXRpbHMuaXNGaXJzdENoYXJzKSgnaHNsJyksXG5cbiAgcGFyc2U6ICgwLCBfdXRpbHMuc3BsaXRDb2xvclZhbHVlcykoW0hVRSwgU0FUVVJBVElPTiwgTElHSFRORVNTLCBBTFBIQV0pLFxuXG4gIHRyYW5zZm9ybTogKDAsIF90cmFuc2Zvcm1lcnMuZmxvdykoKDAsIF90cmFuc2Zvcm1lcnMudHJhbnNmb3JtQ2hpbGRWYWx1ZXMpKChfdHJhbnNmb3JtQ2hpbGRWYWx1ZXMyID0ge30sIF90cmFuc2Zvcm1DaGlsZFZhbHVlczJbSFVFXSA9IG51bWJlci50cmFuc2Zvcm0sIF90cmFuc2Zvcm1DaGlsZFZhbHVlczJbU0FUVVJBVElPTl0gPSBwZXJjZW50LnRyYW5zZm9ybSwgX3RyYW5zZm9ybUNoaWxkVmFsdWVzMltMSUdIVE5FU1NdID0gcGVyY2VudC50cmFuc2Zvcm0sIF90cmFuc2Zvcm1DaGlsZFZhbHVlczJbQUxQSEFdID0gYWxwaGEudHJhbnNmb3JtLCBfdHJhbnNmb3JtQ2hpbGRWYWx1ZXMyKSksIGhzbGFUZW1wbGF0ZSlcbn07XG5cbnZhciBjb2xvciA9IGV4cG9ydHMuY29sb3IgPSB7XG4gIGNoaWxkVHlwZXM6IF9leHRlbmRzKHt9LCBoc2xhLmNoaWxkVHlwZXMsIHJnYmEuY2hpbGRUeXBlcyksXG5cbiAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHJnYmEudGVzdCh2YWx1ZSkgfHwgaGV4LnRlc3QodmFsdWUpIHx8IGhzbGEudGVzdCh2YWx1ZSk7XG4gIH0sXG5cbiAgdHJhbnNmb3JtOiBmdW5jdGlvbiAodikge1xuICAgIGlmICh2Lmhhc093blByb3BlcnR5KCdyZWQnKSkge1xuICAgICAgcmV0dXJuIHJnYmEudHJhbnNmb3JtKHYpO1xuICAgIH0gZWxzZSBpZiAodi5oYXNPd25Qcm9wZXJ0eSgnaHVlJykpIHtcbiAgICAgIHJldHVybiBoc2xhLnRyYW5zZm9ybSh2KTtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZG1Gc2RXVXRkSGx3WlhNdWFuTWlYU3dpYm1GdFpYTWlPbHNpVWtWRUlpd2lSMUpGUlU0aUxDSkNURlZGSWl3aVFVeFFTRUVpTENKSVZVVWlMQ0pUUVZSVlVrRlVTVTlPSWl3aVRFbEhTRlJPUlZOVElpd2ljbWRpWVZSbGJYQnNZWFJsSWl3aWNtVmtJaXdpWjNKbFpXNGlMQ0ppYkhWbElpd2lZV3h3YUdFaUxDSm9jMnhoVkdWdGNHeGhkR1VpTENKb2RXVWlMQ0p6WVhSMWNtRjBhVzl1SWl3aWJHbG5hSFJ1WlhOeklpd2liblZ0WW1WeUlpd2lkR1Z6ZENJc0luQmhjbk5sSWl3aWNHRnljMlZHYkc5aGRDSXNJblJ5WVc1elptOXliU0lzSW1SbFozSmxaWE1pTENKd1pYSmpaVzUwSWl3aWNIZ2lMQ0p6WTJGc1pTSXNJbVJsWm1GMWJIUWlMQ0p5WjJKVmJtbDBJaXdpVFdGMGFDSXNJbkp2ZFc1a0lpd2ljbWRpWVNJc0ltaGxlQ0lzSW5ZaUxDSnlJaXdpWnlJc0ltSWlMQ0pzWlc1bmRHZ2lMQ0p6ZFdKemRISWlMQ0p3WVhKelpVbHVkQ0lzSW1oemJHRWlMQ0pqYjJ4dmNpSXNJbU5vYVd4a1ZIbHdaWE1pTENKMllXeDFaU0lzSW1oaGMwOTNibEJ5YjNCbGNuUjVJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3TzJ0UlFVRkJPenM3T3pzN096czdPenM3T3pzN1FVRmhRVHM3UVVGRFFUczdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFbEJRVTFCTEUxQlFVMHNTMEZCV2p0QlFVTkJMRWxCUVUxRExGRkJRVkVzVDBGQlpEdEJRVU5CTEVsQlFVMURMRTlCUVU4c1RVRkJZanRCUVVOQkxFbEJRVTFETEZGQlFWRXNUMEZCWkR0QlFVTkJMRWxCUVUxRExFMUJRVTBzUzBGQldqdEJRVU5CTEVsQlFVMURMR0ZCUVdFc1dVRkJia0k3UVVGRFFTeEpRVUZOUXl4WlFVRlpMRmRCUVd4Q096dEJRVVZCTzBGQlEwRXNTVUZCVFVNc1pVRkJaVHRCUVVGQkxFMUJRVWRETEVkQlFVZ3NVVUZCUjBFc1IwRkJTRHRCUVVGQkxFMUJRVkZETEV0QlFWSXNVVUZCVVVFc1MwRkJVanRCUVVGQkxFMUJRV1ZETEVsQlFXWXNVVUZCWlVFc1NVRkJaanRCUVVGQkxIZENRVUZ4UWtNc1MwRkJja0k3UVVGQlFTeE5RVUZ4UWtFc1MwRkJja0lzT0VKQlFUWkNMRU5CUVRkQ08wRkJRVUVzYlVKQlExaElMRWRCUkZjc1ZVRkRTRU1zUzBGRVJ5eFZRVU5QUXl4SlFVUlFMRlZCUTJkQ1F5eExRVVJvUWp0QlFVRkJMRU5CUVhKQ096dEJRVWRCTEVsQlFVMURMR1ZCUVdVN1FVRkJRU3hOUVVGSFF5eEhRVUZJTEZOQlFVZEJMRWRCUVVnN1FVRkJRU3hOUVVGUlF5eFZRVUZTTEZOQlFWRkJMRlZCUVZJN1FVRkJRU3hOUVVGdlFrTXNVMEZCY0VJc1UwRkJiMEpCTEZOQlFYQkNPMEZCUVVFc01FSkJRU3RDU2l4TFFVRXZRanRCUVVGQkxFMUJRU3RDUVN4TFFVRXZRaXdyUWtGQmRVTXNRMEZCZGtNN1FVRkJRU3h0UWtGRFdFVXNSMEZFVnl4VlFVTklReXhWUVVSSExGVkJRMWxETEZOQlJGb3NWVUZETUVKS0xFdEJSREZDTzBGQlFVRXNRMEZCY2tJN08wRkJSMDhzU1VGQlRVc3NNRUpCUVZNN1FVRkRjRUpETEhGQ1FVUnZRanRCUVVWd1FrTXNVMEZCVDBNN1FVRkdZU3hEUVVGbU96dEJRVXRRTzBGQlEwOHNTVUZCVFZJc2NVTkJRMUpMTEUxQlJGRTdRVUZGV0Vrc1lVRkJWeXg1UWtGQlRTeERRVUZPTEVWQlFWTXNRMEZCVkR0QlFVWkJMRVZCUVU0N08wRkJTMEVzU1VGQlRVTXNORUpCUVZVc01rSkJRV1VzUzBGQlppeERRVUZvUWp0QlFVTkJMRWxCUVUxRExEUkNRVUZWTERKQ1FVRmxMRWRCUVdZc1EwRkJhRUk3UVVGRFFTeEpRVUZOUXl4clFrRkJTeXd5UWtGQlpTeEpRVUZtTEVOQlFWZzdPMEZCUlVFc1NVRkJUVU1zY1VOQlExSlNMRTFCUkZFN1FVRkZXRk1zVjBGQlV6dEJRVVpGTEVWQlFVNDdPMEZCUzBFc1NVRkJUVU1zZVVOQlExSldMRTFCUkZFN1FVRkZXRWtzWVVGQlZ6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN3eVFrRkJUU3hEUVVGT0xFVkJRVk1zUjBGQlZDeERRVmhUTEVWQldWUlBMRXRCUVV0RExFdEJXa2s3UVVGR1FTeEZRVUZPT3p0QlFXdENRU3hKUVVGTlF5eHpRa0ZCVHp0QlFVTnNRbG9zVVVGQlRTeDVRa0ZCWVN4TFFVRmlMRU5CUkZrN08wRkJSMnhDUXl4VFFVRlBMRFpDUVVGcFFpeERRVUZEYkVJc1IwRkJSQ3hGUVVGTlF5eExRVUZPTEVWQlFXRkRMRWxCUVdJc1JVRkJiVUpETEV0QlFXNUNMRU5CUVdwQ0xFTkJTRmM3TzBGQlMyeENhVUlzWVVGQlZ5eDNRa0ZEVkN3eVJrRkRSM0JDTEVkQlJFZ3NTVUZEVXpCQ0xGRkJRVkZPTEZOQlJHcENMSGRDUVVWSGJrSXNTMEZHU0N4SlFVVlhlVUlzVVVGQlVVNHNVMEZHYmtJc2QwSkJSMGRzUWl4SlFVaElMRWxCUjFWM1FpeFJRVUZSVGl4VFFVaHNRaXgzUWtGSlIycENMRXRCU2tnc1NVRkpWMUVzVFVGQlRWTXNVMEZLYWtJc2VVSkJSRk1zUlVGUFZHSXNXVUZRVXp0QlFVeFBMRU5CUVdJN08wRkJaMEpCTEVsQlFVMTFRaXhwUTBGRFVrUXNTVUZFVVRzN1FVRkhXRm9zVVVGQlRTeDVRa0ZCWVN4SFFVRmlMRU5CU0VzN08wRkJTMWhETEZOQlFVOHNWVUZCUTJFc1EwRkJSQ3hGUVVGUE8wRkJRVUU3TzBGQlExb3NVVUZCU1VNc1ZVRkJTanRCUVVGQkxGRkJRVTlETEZWQlFWQTdRVUZCUVN4UlFVRlZReXhWUVVGV096dEJRVVZCTzBGQlEwRXNVVUZCU1Vnc1JVRkJSVWtzVFVGQlJpeEhRVUZYTEVOQlFXWXNSVUZCYTBJN1FVRkRhRUpJTEZWQlFVbEVMRVZCUVVWTExFMUJRVVlzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCV2l4RFFVRktPMEZCUTBGSUxGVkJRVWxHTEVWQlFVVkxMRTFCUVVZc1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQldpeERRVUZLTzBGQlEwRkdMRlZCUVVsSUxFVkJRVVZMTEUxQlFVWXNRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhEUVVGS096dEJRVVZHTzBGQlEwTXNTMEZPUkN4TlFVMVBPMEZCUTB4S0xGVkJRVWxFTEVWQlFVVkxMRTFCUVVZc1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQldpeERRVUZLTzBGQlEwRklMRlZCUVVsR0xFVkJRVVZMTEUxQlFVWXNRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhEUVVGS08wRkJRMEZHTEZWQlFVbElMRVZCUVVWTExFMUJRVVlzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCV2l4RFFVRktPMEZCUTBGS0xGZEJRVXRCTEVOQlFVdzdRVUZEUVVNc1YwRkJTMEVzUTBGQlREdEJRVU5CUXl4WFFVRkxRU3hEUVVGTU8wRkJRMFE3TzBGQlJVUXNOa0pCUTBkc1F5eEhRVVJJTEVsQlExTnhReXhUUVVGVFRDeERRVUZVTEVWQlFWa3NSVUZCV2l4RFFVUlVMRkZCUlVjdlFpeExRVVpJTEVsQlJWZHZReXhUUVVGVFNpeERRVUZVTEVWQlFWa3NSVUZCV2l4RFFVWllMRkZCUjBjdlFpeEpRVWhJTEVsQlIxVnRReXhUUVVGVFNDeERRVUZVTEVWQlFWa3NSVUZCV2l4RFFVaFdMRkZCU1VjdlFpeExRVXBJTEVsQlNWY3NRMEZLV0R0QlFVMUVPMEZCT1VKVkxFVkJRVTQ3TzBGQmFVTkJMRWxCUVUxdFF5eHpRa0ZCVHp0QlFVTnNRbkpDTEZGQlFVMHNlVUpCUVdFc1MwRkJZaXhEUVVSWk96dEJRVWRzUWtNc1UwRkJUeXcyUWtGQmFVSXNRMEZCUTJRc1IwRkJSQ3hGUVVGTlF5eFZRVUZPTEVWQlFXdENReXhUUVVGc1FpeEZRVUUyUWtnc1MwRkJOMElzUTBGQmFrSXNRMEZJVnpzN1FVRkxiRUpwUWl4aFFVRlhMSGRDUVVOVUxEWkdRVU5IYUVJc1IwRkVTQ3hKUVVOVFdTeFBRVUZQU1N4VFFVUm9RaXg1UWtGRlIyWXNWVUZHU0N4SlFVVm5RbWxDTEZGQlFWRkdMRk5CUm5oQ0xIbENRVWRIWkN4VFFVaElMRWxCUjJWblFpeFJRVUZSUml4VFFVaDJRaXg1UWtGSlIycENMRXRCU2tnc1NVRkpWMUVzVFVGQlRWTXNVMEZLYWtJc01FSkJSRk1zUlVGUFZGSXNXVUZRVXp0QlFVeFBMRU5CUVdJN08wRkJaMEpCTEVsQlFVMHlRaXgzUWtGQlVUdEJRVU51UWtNc01rSkJRMHRHTEV0QlFVdEZMRlZCUkZZc1JVRkZTMWdzUzBGQlMxY3NWVUZHVml4RFFVUnRRanM3UVVGTmJrSjJRaXhSUVVGTkxGVkJRVU4zUWl4TFFVRkVPMEZCUVVFc1YwRkJWMW9zUzBGQlMxb3NTVUZCVEN4RFFVRlZkMElzUzBGQlZpeExRVUZ2UWxnc1NVRkJTV0lzU1VGQlNpeERRVUZUZDBJc1MwRkJWQ3hEUVVGd1FpeEpRVUYxUTBnc1MwRkJTM0pDTEVsQlFVd3NRMEZCVlhkQ0xFdEJRVllzUTBGQmJFUTdRVUZCUVN4SFFVNWhPenRCUVZGdVFuSkNMR0ZCUVZjc1ZVRkJRMWNzUTBGQlJDeEZRVUZQTzBGQlEyaENMRkZCUVVsQkxFVkJRVVZYTEdOQlFVWXNRMEZCYVVJc1MwRkJha0lzUTBGQlNpeEZRVUUyUWp0QlFVTXpRaXhoUVVGUFlpeExRVUZMVkN4VFFVRk1MRU5CUVdWWExFTkJRV1lzUTBGQlVEdEJRVU5FTEV0QlJrUXNUVUZGVHl4SlFVRkpRU3hGUVVGRlZ5eGpRVUZHTEVOQlFXbENMRXRCUVdwQ0xFTkJRVW9zUlVGQk5rSTdRVUZEYkVNc1lVRkJUMG9zUzBGQlMyeENMRk5CUVV3c1EwRkJaVmNzUTBGQlppeERRVUZRTzBGQlEwUTdRVUZEUkN4WFFVRlBRU3hEUVVGUU8wRkJRMFE3UVVGbWEwSXNRMEZCWkNJc0ltWnBiR1VpT2lKMllXeDFaUzEwZVhCbGN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLbHh1SUNvZ1ZtRnNkV1VnZEhsd1pYTmNiaUFxWEc0Z0tpQmhiSEJvWVZ4dUlDb2daR1ZuY21WbGMxeHVJQ29nYUdWNFhHNGdLaUJvYzJ4aFhHNGdLaUJ3WlhKalpXNTBYRzRnS2lCd2VGeHVJQ29nY21kaVZXNXBkRnh1SUNvZ2NtZGlYRzRnS2lCelkyRnNaVnh1SUNvdlhHNXBiWEJ2Y25RZ2V5QmpiR0Z0Y0N3Z1pteHZkeXdnZEhKaGJuTm1iM0p0UTJocGJHUldZV3gxWlhNZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZEhKaGJuTm1iM0p0WlhKekp6dGNibWx0Y0c5eWRDQjdJR055WldGMFpWVnVhWFJVZVhCbExDQnBjMFpwY25OMFEyaGhjbk1zSUhOd2JHbDBRMjlzYjNKV1lXeDFaWE1nZlNCbWNtOXRJQ2N1TDNWMGFXeHpKenRjYm1sdGNHOXlkQ0I3SUdselRuVnRJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVMeThnVTNSeWFXNW5JSEJ5YjNCbGNuUnBaWE5jYm1OdmJuTjBJRkpGUkNBOUlDZHlaV1FuTzF4dVkyOXVjM1FnUjFKRlJVNGdQU0FuWjNKbFpXNG5PMXh1WTI5dWMzUWdRa3hWUlNBOUlDZGliSFZsSnp0Y2JtTnZibk4wSUVGTVVFaEJJRDBnSjJGc2NHaGhKenRjYm1OdmJuTjBJRWhWUlNBOUlDZG9kV1VuTzF4dVkyOXVjM1FnVTBGVVZWSkJWRWxQVGlBOUlDZHpZWFIxY21GMGFXOXVKenRjYm1OdmJuTjBJRXhKUjBoVVRrVlRVeUE5SUNkc2FXZG9kRzVsYzNNbk8xeHVYRzR2THlCVVpXMXdiR0YwWlhOY2JtTnZibk4wSUhKblltRlVaVzF3YkdGMFpTQTlJQ2g3SUhKbFpDd2daM0psWlc0c0lHSnNkV1VzSUdGc2NHaGhJRDBnTVNCOUtTQTlQaUJjYmlBZ1lISm5ZbUVvSkh0eVpXUjlMQ0FrZTJkeVpXVnVmU3dnSkh0aWJIVmxmU3dnSkh0aGJIQm9ZWDBwWUR0Y2JseHVZMjl1YzNRZ2FITnNZVlJsYlhCc1lYUmxJRDBnS0hzZ2FIVmxMQ0J6WVhSMWNtRjBhVzl1TENCc2FXZG9kRzVsYzNNc0lHRnNjR2hoSUQwZ01TQjlLU0E5UGlCY2JpQWdZR2h6YkdFb0pIdG9kV1Y5TENBa2UzTmhkSFZ5WVhScGIyNTlMQ0FrZTJ4cFoyaDBibVZ6YzMwc0lDUjdZV3h3YUdGOUtXQTdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnVkVzFpWlhJZ1BTQjdYRzRnSUhSbGMzUTZJR2x6VG5WdExGeHVJQ0J3WVhKelpUb2djR0Z5YzJWR2JHOWhkRnh1ZlR0Y2JseHVMeThnVm1Gc2RXVWdkSGx3WlhOY2JtVjRjRzl5ZENCamIyNXpkQ0JoYkhCb1lTQTlJSHRjYmlBZ0xpNHViblZ0WW1WeUxGeHVJQ0IwY21GdWMyWnZjbTA2SUdOc1lXMXdLREFzSURFcFhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdaR1ZuY21WbGN5QTlJR055WldGMFpWVnVhWFJVZVhCbEtDZGtaV2NuS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0J3WlhKalpXNTBJRDBnWTNKbFlYUmxWVzVwZEZSNWNHVW9KeVVuS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0J3ZUNBOUlHTnlaV0YwWlZWdWFYUlVlWEJsS0Nkd2VDY3BPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjMk5oYkdVZ1BTQjdYRzRnSUM0dUxtNTFiV0psY2l4Y2JpQWdaR1ZtWVhWc2REb2dNVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhKbllsVnVhWFFnUFNCN1hHNGdJQzR1TG01MWJXSmxjaXhjYmlBZ2RISmhibk5tYjNKdE9pQm1iRzkzS0Z4dUlDQWdJQzh2YUhSMGNEb3ZMMk52WkdWd1pXNHVhVzh2YjNOMVlteGhhMlV2Wm5Wc2JDOTRSMVpXWVU0dlhHNGdJQ0FnTHk4Z0tIWXNJSFpoYkhWbExDQmhZM1JwYjI0cElEMCtJSHRjYmlBZ0lDQXZMeUFnSUdsbUlDaGhZM1JwYjI0cElIdGNiaUFnSUNBdkx5QWdJQ0FnWTI5dWMzUWdabkp2YlVOdmJHOXlJRDBnWVdOMGFXOXVMbVp5YjIwZ0tpQmhZM1JwYjI0dVpuSnZiVHRjYmlBZ0lDQXZMeUFnSUNBZ1kyOXVjM1FnZEc5RGIyeHZjaUE5SUdGamRHbHZiaTUwYnlBcUlHRmpkR2x2Ymk1MGJ6dGNiaUFnSUNBdkx5QWdJQ0FnY21WMGRYSnVJRTFoZEdndWMzRnlkQ2hoWTNScGIyNHVjSEp2WjNKbGMzTWdLaUFvZEc5RGIyeHZjaUF0SUdaeWIyMURiMnh2Y2lrZ0t5Qm1jbTl0UTI5c2IzSXBPMXh1SUNBZ0lDOHZJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z0lDQnlaWFIxY200Z2RqdGNiaUFnSUNBdkx5QjlMRnh1SUNBZ0lHTnNZVzF3S0RBc0lESTFOU2tzWEc0Z0lDQWdUV0YwYUM1eWIzVnVaRnh1SUNBcFhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjbWRpWVNBOUlIdGNiaUFnZEdWemREb2dhWE5HYVhKemRFTm9ZWEp6S0NkeVoySW5LU3hjYmx4dUlDQndZWEp6WlRvZ2MzQnNhWFJEYjJ4dmNsWmhiSFZsY3loYlVrVkVMQ0JIVWtWRlRpd2dRa3hWUlN3Z1FVeFFTRUZkS1N4Y2JseHVJQ0IwY21GdWMyWnZjbTA2SUdac2IzY29YRzRnSUNBZ2RISmhibk5tYjNKdFEyaHBiR1JXWVd4MVpYTW9lMXh1SUNBZ0lDQWdXMUpGUkYwNklISm5ZbFZ1YVhRdWRISmhibk5tYjNKdExGeHVJQ0FnSUNBZ1cwZFNSVVZPWFRvZ2NtZGlWVzVwZEM1MGNtRnVjMlp2Y20wc1hHNGdJQ0FnSUNCYlFreFZSVjA2SUhKbllsVnVhWFF1ZEhKaGJuTm1iM0p0TEZ4dUlDQWdJQ0FnVzBGTVVFaEJYVG9nWVd4d2FHRXVkSEpoYm5ObWIzSnRYRzRnSUNBZ2ZTa3NYRzRnSUNBZ2NtZGlZVlJsYlhCc1lYUmxYRzRnSUNsY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQm9aWGdnUFNCN1hHNGdJQzR1TG5KblltRXNYRzVjYmlBZ2RHVnpkRG9nYVhOR2FYSnpkRU5vWVhKektDY2pKeWtzWEc1Y2JpQWdjR0Z5YzJVNklDaDJLU0E5UGlCN1hHNGdJQ0FnYkdWMElISXNJR2NzSUdJN1hHNWNiaUFnSUNBdkx5QkpaaUIzWlNCb1lYWmxJRFlnWTJoaGNtRmpkR1Z5Y3l3Z2FXVWdJMFpHTURBd01GeHVJQ0FnSUdsbUlDaDJMbXhsYm1kMGFDQStJRFFwSUh0Y2JpQWdJQ0FnSUhJZ1BTQjJMbk4xWW5OMGNpZ3hMQ0F5S1R0Y2JpQWdJQ0FnSUdjZ1BTQjJMbk4xWW5OMGNpZ3pMQ0F5S1R0Y2JpQWdJQ0FnSUdJZ1BTQjJMbk4xWW5OMGNpZzFMQ0F5S1R0Y2JseHVJQ0FnSUM4dklFOXlJSGRsSUdoaGRtVWdNeUJqYUdGeVlXTjBaWEp6TENCcFpTQWpSakF3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lISWdQU0IyTG5OMVluTjBjaWd4TENBeEtUdGNiaUFnSUNBZ0lHY2dQU0IyTG5OMVluTjBjaWd5TENBeEtUdGNiaUFnSUNBZ0lHSWdQU0IyTG5OMVluTjBjaWd6TENBeEtUdGNiaUFnSUNBZ0lISWdLejBnY2p0Y2JpQWdJQ0FnSUdjZ0t6MGdaenRjYmlBZ0lDQWdJR0lnS3owZ1lqdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnVzFKRlJGMDZJSEJoY25ObFNXNTBLSElzSURFMktTeGNiaUFnSUNBZ0lGdEhVa1ZGVGwwNklIQmhjbk5sU1c1MEtHY3NJREUyS1N4Y2JpQWdJQ0FnSUZ0Q1RGVkZYVG9nY0dGeWMyVkpiblFvWWl3Z01UWXBMRnh1SUNBZ0lDQWdXMEZNVUVoQlhUb2dNVnh1SUNBZ0lIMDdYRzRnSUgxY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQm9jMnhoSUQwZ2UxeHVJQ0IwWlhOME9pQnBjMFpwY25OMFEyaGhjbk1vSjJoemJDY3BMRnh1WEc0Z0lIQmhjbk5sT2lCemNHeHBkRU52Ykc5eVZtRnNkV1Z6S0Z0SVZVVXNJRk5CVkZWU1FWUkpUMDRzSUV4SlIwaFVUa1ZUVXl3Z1FVeFFTRUZkS1N4Y2JseHVJQ0IwY21GdWMyWnZjbTA2SUdac2IzY29YRzRnSUNBZ2RISmhibk5tYjNKdFEyaHBiR1JXWVd4MVpYTW9lMXh1SUNBZ0lDQWdXMGhWUlYwNklHNTFiV0psY2k1MGNtRnVjMlp2Y20wc1hHNGdJQ0FnSUNCYlUwRlVWVkpCVkVsUFRsMDZJSEJsY21ObGJuUXVkSEpoYm5ObWIzSnRMRnh1SUNBZ0lDQWdXMHhKUjBoVVRrVlRVMTA2SUhCbGNtTmxiblF1ZEhKaGJuTm1iM0p0TEZ4dUlDQWdJQ0FnVzBGTVVFaEJYVG9nWVd4d2FHRXVkSEpoYm5ObWIzSnRYRzRnSUNBZ2ZTa3NYRzRnSUNBZ2FITnNZVlJsYlhCc1lYUmxYRzRnSUNsY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpiMnh2Y2lBOUlIdGNiaUFnWTJocGJHUlVlWEJsY3pvZ2UxeHVJQ0FnSUM0dUxtaHpiR0V1WTJocGJHUlVlWEJsY3l4Y2JpQWdJQ0F1TGk1eVoySmhMbU5vYVd4a1ZIbHdaWE5jYmlBZ2ZTeGNibHh1SUNCMFpYTjBPaUFvZG1Gc2RXVXBJRDArSUhKblltRXVkR1Z6ZENoMllXeDFaU2tnZkh3Z2FHVjRMblJsYzNRb2RtRnNkV1VwSUh4OElHaHpiR0V1ZEdWemRDaDJZV3gxWlNrc1hHNWNiaUFnZEhKaGJuTm1iM0p0T2lBb2Rpa2dQVDRnZTF4dUlDQWdJR2xtSUNoMkxtaGhjMDkzYmxCeWIzQmxjblI1S0NkeVpXUW5LU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSEpuWW1FdWRISmhibk5tYjNKdEtIWXBPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9kaTVvWVhOUGQyNVFjbTl3WlhKMGVTZ25hSFZsSnlrcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCb2MyeGhMblJ5WVc1elptOXliU2gyS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlIWTdYRzRnSUgxY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3ZhbHVlLXR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBjbGFtcFByb2dyZXNzID0gKDAsIF90cmFuc2Zvcm1lcnMuY2xhbXApKDAsIDEpO1xuXG5mdW5jdGlvbiBjYWxjVmFsdWVBdFRpbWUoZnJvbSwgdG8sIGR1cmF0aW9uLCBlbGFwc2VkLCBlYXNlKSB7XG4gIHZhciBwcm9ncmVzc0F0VGltZSA9IGVhc2UoY2xhbXBQcm9ncmVzcygoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKDAsIGR1cmF0aW9uLCBlbGFwc2VkKSkpO1xuICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShmcm9tLCB0bywgcHJvZ3Jlc3NBdFRpbWUpO1xufVxuXG52YXIgVHdlZW5CbGVuZCA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhUd2VlbkJsZW5kLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBUd2VlbkJsZW5kKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2VlbkJsZW5kKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVHdlZW5CbGVuZC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGZyb20gPSBfcHJvcHMuZnJvbSxcbiAgICAgICAgdG8gPSBfcHJvcHMudG8sXG4gICAgICAgIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uLFxuICAgICAgICBhY2N1cmFjeSA9IF9wcm9wcy5hY2N1cmFjeTtcblxuICAgIHZhciBhID0gZnJvbTtcbiAgICB2YXIgYiA9IHRvO1xuICAgIHZhciBhRHVyYXRpb24gPSBhLmdldER1cmF0aW9uKCk7XG4gICAgdmFyIGJEdXJhdGlvbiA9IGIuZ2V0RHVyYXRpb24oKTtcblxuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbiB8fCBNYXRoLm1pbihhRHVyYXRpb24gLSBhLmdldEVsYXBzZWQoKSwgYkR1cmF0aW9uKTtcblxuICAgIHZhciBhRWFzZSA9IGEuZ2V0UHJvcCgnZWFzZScpO1xuICAgIHZhciBiRWFzZSA9IGIuZ2V0UHJvcCgnZWFzZScpO1xuICAgIHZhciBhRnJvbSA9IGEuZ2V0UHJvcCgnZnJvbScpO1xuICAgIHZhciBiRnJvbSA9IGIuZ2V0UHJvcCgnZnJvbScpO1xuICAgIHZhciBhVG8gPSBhLmdldFByb3AoJ3RvJyk7XG4gICAgdmFyIGJUbyA9IGIuZ2V0UHJvcCgndG8nKTtcbiAgICB2YXIgYlZhbHVlQXRCbGVuZENvbXBsZXRlID0gY2FsY1ZhbHVlQXRUaW1lKGJGcm9tLCBiVG8sIGJEdXJhdGlvbiwgdGhpcy5kdXJhdGlvbiwgYkVhc2UpO1xuICAgIHZhciBiU3RhcnRzSGlnaGVyVGhhbkEgPSBiRnJvbSA+IGEuZ2V0KCk7XG5cbiAgICB0aGlzLmJsZW5kUG9pbnRzID0gW1swLCBhLmdldCgpXSwgW3RoaXMuZHVyYXRpb24sIGJWYWx1ZUF0QmxlbmRDb21wbGV0ZV1dO1xuXG4gICAgLy8gRmluZCB0d2VlbiBpbnRlcnNlY3Rpb25cbiAgICB2YXIgdGltZXN0ZXAgPSB0aGlzLmR1cmF0aW9uIC8gYWNjdXJhY3k7XG5cbiAgICB2YXIgZm91bmRQMSA9IGZhbHNlO1xuICAgIHZhciBmb3VuZFAyID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjY3VyYWN5OyBpKyspIHtcbiAgICAgIHZhciB0b3RhbFRpbWUgPSBpICogdGltZXN0ZXA7XG5cbiAgICAgIHZhciBhVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYUZyb20sIGFUbywgYUR1cmF0aW9uLCBhLmVsYXBzZWQgKyB0b3RhbFRpbWUsIGFFYXNlKTtcbiAgICAgIHZhciBiVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYkZyb20sIGJUbywgYkR1cmF0aW9uLCBiLmVsYXBzZWQgKyB0b3RhbFRpbWUsIGJFYXNlKTtcblxuICAgICAgdmFyIGhhc0ludGVyc2VjdGVkID0gYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA8IGJWYWx1ZUF0VGltZSB8fCAhYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA+IGJWYWx1ZUF0VGltZTtcblxuICAgICAgaWYgKCFmb3VuZFAxICYmIGhhc0ludGVyc2VjdGVkKSB7XG4gICAgICAgIHRoaXMuYmxlbmRQb2ludHMuc3BsaWNlKDAsIDEsIFt0b3RhbFRpbWUsIGJWYWx1ZUF0VGltZV0pO1xuICAgICAgICBmb3VuZFAxID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETyBnbyBiYWNrIHRocm91Z2ggYW5kIGNvbW1lbnRcbiAgICAgIHZhciBoYXNJbnRlcnNlY3RlZEIgPSBiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lIDwgYlZhbHVlQXRUaW1lIHx8ICFiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lID4gYlZhbHVlQXRUaW1lO1xuXG4gICAgICBpZiAoZm91bmRQMSAmJiBoYXNJbnRlcnNlY3RlZEIpIHtcbiAgICAgICAgdGhpcy5ibGVuZFBvaW50c1syXSA9IFt0b3RhbFRpbWUsIGJWYWx1ZUF0VGltZV07XG4gICAgICAgIGZvdW5kUDIgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm91bmRQMikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG8uc3RhcnQoKTtcbiAgfTtcblxuICBUd2VlbkJsZW5kLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBmcm9tID0gX3Byb3BzMi5mcm9tLFxuICAgICAgICB0byA9IF9wcm9wczIudG87XG5cbiAgICB2YXIgYSA9IGZyb207XG4gICAgdmFyIGIgPSB0bztcblxuICAgIHZhciBwcm9ncmVzcyA9IGNsYW1wUHJvZ3Jlc3MoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh0aGlzLmJsZW5kUG9pbnRzWzBdWzBdLCB0aGlzLmJsZW5kUG9pbnRzWzJdWzBdLCBhLmdldEVsYXBzZWQoKSkpO1xuICAgIGlmIChwcm9ncmVzcyA+PSAxKSB7XG4gICAgICByZXR1cm4gYi5nZXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFQID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKSh0aGlzLmJsZW5kUG9pbnRzWzBdWzFdLCB0aGlzLmJsZW5kUG9pbnRzWzFdWzFdLCBwcm9ncmVzcyk7XG4gICAgICB2YXIgYlAgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKHRoaXMuYmxlbmRQb2ludHNbMV1bMV0sIHRoaXMuYmxlbmRQb2ludHNbMl1bMV0sIHByb2dyZXNzKTtcbiAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGFQLCBiUCwgcHJvZ3Jlc3MpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVHdlZW5CbGVuZDtcbn0oXzIuZGVmYXVsdCk7XG5cblR3ZWVuQmxlbmQuZGVmYXVsdFByb3BzID0ge1xuICBhY2N1cmFjeTogNjBcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IFR3ZWVuQmxlbmQocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJKc1pXNWtMWFIzWldWdWN5NXFjeUpkTENKdVlXMWxjeUk2V3lKamJHRnRjRkJ5YjJkeVpYTnpJaXdpWTJGc1kxWmhiSFZsUVhSVWFXMWxJaXdpWm5KdmJTSXNJblJ2SWl3aVpIVnlZWFJwYjI0aUxDSmxiR0Z3YzJWa0lpd2laV0Z6WlNJc0luQnliMmR5WlhOelFYUlVhVzFsSWl3aVZIZGxaVzVDYkdWdVpDSXNJbTl1VTNSaGNuUWlMQ0p3Y205d2N5SXNJbUZqWTNWeVlXTjVJaXdpWVNJc0ltSWlMQ0poUkhWeVlYUnBiMjRpTENKblpYUkVkWEpoZEdsdmJpSXNJbUpFZFhKaGRHbHZiaUlzSWsxaGRHZ2lMQ0p0YVc0aUxDSm5aWFJGYkdGd2MyVmtJaXdpWVVWaGMyVWlMQ0puWlhSUWNtOXdJaXdpWWtWaGMyVWlMQ0poUm5KdmJTSXNJbUpHY205dElpd2lZVlJ2SWl3aVlsUnZJaXdpWWxaaGJIVmxRWFJDYkdWdVpFTnZiWEJzWlhSbElpd2lZbE4wWVhKMGMwaHBaMmhsY2xSb1lXNUJJaXdpWjJWMElpd2lZbXhsYm1SUWIybHVkSE1pTENKMGFXMWxjM1JsY0NJc0ltWnZkVzVrVURFaUxDSm1iM1Z1WkZBeUlpd2lhU0lzSW5SdmRHRnNWR2x0WlNJc0ltRldZV3gxWlVGMFZHbHRaU0lzSW1KV1lXeDFaVUYwVkdsdFpTSXNJbWhoYzBsdWRHVnljMlZqZEdWa0lpd2ljM0JzYVdObElpd2lhR0Z6U1c1MFpYSnpaV04wWldSQ0lpd2ljM1JoY25RaUxDSjFjR1JoZEdVaUxDSndjbTluY21WemN5SXNJbUZRSWl3aVlsQWlMQ0prWldaaGRXeDBVSEp2Y0hNaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenRCUVVOQk96czdPenM3T3pzN08wRkJSVUVzU1VGQlRVRXNaMEpCUVdkQ0xIbENRVUZOTEVOQlFVNHNSVUZCVXl4RFFVRlVMRU5CUVhSQ096dEJRVVZCTEZOQlFWTkRMR1ZCUVZRc1EwRkJlVUpETEVsQlFYcENMRVZCUVN0Q1F5eEZRVUV2UWl4RlFVRnRRME1zVVVGQmJrTXNSVUZCTmtORExFOUJRVGRETEVWQlFYTkVReXhKUVVGMFJDeEZRVUUwUkR0QlFVTXhSQ3hOUVVGTlF5eHBRa0ZCYVVKRUxFdEJRVXRPTEdOQlFXTXNaME5CUVhGQ0xFTkJRWEpDTEVWQlFYZENTU3hSUVVGNFFpeEZRVUZyUTBNc1QwRkJiRU1zUTBGQlpDeERRVUZNTEVOQlFYWkNPMEZCUTBFc1UwRkJUeXhuUTBGQmNVSklMRWxCUVhKQ0xFVkJRVEpDUXl4RlFVRXpRaXhGUVVFclFra3NZMEZCTDBJc1EwRkJVRHRCUVVORU96dEpRVVZMUXl4Vk96czdPenM3T3pzN2RVSkJTMHBETEU4c2MwSkJRVlU3UVVGQlFTeHBRa0ZEYVVNc1MwRkJTME1zUzBGRWRFTTdRVUZCUVN4UlFVTkJVaXhKUVVSQkxGVkJRMEZCTEVsQlJFRTdRVUZCUVN4UlFVTk5ReXhGUVVST0xGVkJRMDFCTEVWQlJFNDdRVUZCUVN4UlFVTlZReXhSUVVSV0xGVkJRMVZCTEZGQlJGWTdRVUZCUVN4UlFVTnZRazhzVVVGRWNFSXNWVUZEYjBKQkxGRkJSSEJDT3p0QlFVVlNMRkZCUVUxRExFbEJRVWxXTEVsQlFWWTdRVUZEUVN4UlFVRk5WeXhKUVVGSlZpeEZRVUZXTzBGQlEwRXNVVUZCVFZjc1dVRkJXVVlzUlVGQlJVY3NWMEZCUml4RlFVRnNRanRCUVVOQkxGRkJRVTFETEZsQlFWbElMRVZCUVVWRkxGZEJRVVlzUlVGQmJFSTdPMEZCUlVFc1UwRkJTMWdzVVVGQlRDeEhRVUZuUWtFc1dVRkJXV0VzUzBGQlMwTXNSMEZCVEN4RFFVTXhRa29zV1VGQldVWXNSVUZCUlU4c1ZVRkJSaXhGUVVSakxFVkJSVEZDU0N4VFFVWXdRaXhEUVVFMVFqczdRVUZMUVN4UlFVRk5TU3hSUVVGUlVpeEZRVUZGVXl4UFFVRkdMRU5CUVZVc1RVRkJWaXhEUVVGa08wRkJRMEVzVVVGQlRVTXNVVUZCVVZRc1JVRkJSVkVzVDBGQlJpeERRVUZWTEUxQlFWWXNRMEZCWkR0QlFVTkJMRkZCUVUxRkxGRkJRVkZZTEVWQlFVVlRMRTlCUVVZc1EwRkJWU3hOUVVGV0xFTkJRV1E3UVVGRFFTeFJRVUZOUnl4UlFVRlJXQ3hGUVVGRlVTeFBRVUZHTEVOQlFWVXNUVUZCVml4RFFVRmtPMEZCUTBFc1VVRkJUVWtzVFVGQlRXSXNSVUZCUlZNc1QwRkJSaXhEUVVGVkxFbEJRVllzUTBGQldqdEJRVU5CTEZGQlFVMUxMRTFCUVUxaUxFVkJRVVZSTEU5QlFVWXNRMEZCVlN4SlFVRldMRU5CUVZvN1FVRkRRU3hSUVVGTlRTeDNRa0ZCZDBJeFFpeG5Ra0ZCWjBKMVFpeExRVUZvUWl4RlFVRjFRa1VzUjBGQmRrSXNSVUZCTkVKV0xGTkJRVFZDTEVWQlFYVkRMRXRCUVV0YUxGRkJRVFZETEVWQlFYTkVhMElzUzBGQmRFUXNRMEZCT1VJN1FVRkRRU3hSUVVGTlRTeHhRa0ZCY1VKS0xGRkJRVkZhTEVWQlFVVnBRaXhIUVVGR0xFVkJRVzVET3p0QlFVVkJMRk5CUVV0RExGZEJRVXdzUjBGQmJVSXNRMEZEYWtJc1EwRkJReXhEUVVGRUxFVkJRVWxzUWl4RlFVRkZhVUlzUjBGQlJpeEZRVUZLTEVOQlJHbENMRVZCUldwQ0xFTkJRVU1zUzBGQlMzcENMRkZCUVU0c1JVRkJaMEoxUWl4eFFrRkJhRUlzUTBGR2FVSXNRMEZCYmtJN08wRkJTMEU3UVVGRFFTeFJRVUZOU1N4WFFVRlhMRXRCUVVzelFpeFJRVUZNTEVkQlFXZENUeXhSUVVGcVF6czdRVUZGUVN4UlFVRkpjVUlzVlVGQlZTeExRVUZrTzBGQlEwRXNVVUZCU1VNc1ZVRkJWU3hMUVVGa096dEJRVVZCTEZOQlFVc3NTVUZCU1VNc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpka0lzVVVGQmNFSXNSVUZCT0VKMVFpeEhRVUU1UWl4RlFVRnRRenRCUVVOcVF5eFZRVUZOUXl4WlFVRlpSQ3hKUVVGSlNDeFJRVUYwUWpzN1FVRkZRU3hWUVVGTlN5eGxRVUZsYmtNc1owSkJRV2RDYzBJc1MwRkJhRUlzUlVGQmRVSkZMRWRCUVhaQ0xFVkJRVFJDV0N4VFFVRTFRaXhGUVVGMVEwWXNSVUZCUlZBc1QwRkJSaXhIUVVGWk9FSXNVMEZCYmtRc1JVRkJPRVJtTEV0QlFUbEVMRU5CUVhKQ08wRkJRMEVzVlVGQlRXbENMR1ZCUVdWd1F5eG5Ra0ZCWjBKMVFpeExRVUZvUWl4RlFVRjFRa1VzUjBGQmRrSXNSVUZCTkVKV0xGTkJRVFZDTEVWQlFYVkRTQ3hGUVVGRlVpeFBRVUZHTEVkQlFWazRRaXhUUVVGdVJDeEZRVUU0UkdJc1MwRkJPVVFzUTBGQmNrSTdPMEZCUlVFc1ZVRkJUV2RDTEdsQ1FVTklWaXh6UWtGQmMwSlJMR1ZCUVdWRExGbEJRWFJETEVsQlEwTXNRMEZCUTFRc2EwSkJRVVFzU1VGQmRVSlJMR1ZCUVdWRExGbEJSbnBET3p0QlFVdEJMRlZCUVVrc1EwRkJRMHdzVDBGQlJDeEpRVUZaVFN4alFVRm9RaXhGUVVGblF6dEJRVU01UWl4aFFVRkxVaXhYUVVGTUxFTkJRV2xDVXl4TlFVRnFRaXhEUVVGM1FpeERRVUY0UWl4RlFVRXlRaXhEUVVFelFpeEZRVUU0UWl4RFFVRkRTaXhUUVVGRUxFVkJRVmxGTEZsQlFWb3NRMEZCT1VJN1FVRkRRVXdzYTBKQlFWVXNTVUZCVmp0QlFVTkVPenRCUVVWRU8wRkJRMEVzVlVGQlRWRXNhMEpCUTBoYUxITkNRVUZ6UWxFc1pVRkJaVU1zV1VGQmRFTXNTVUZEUXl4RFFVRkRWQ3hyUWtGQlJDeEpRVUYxUWxFc1pVRkJaVU1zV1VGR2VrTTdPMEZCUzBFc1ZVRkJTVXdzVjBGQlYxRXNaVUZCWml4RlFVRm5RenRCUVVNNVFpeGhRVUZMVml4WFFVRk1MRU5CUVdsQ0xFTkJRV3BDTEVsQlFYTkNMRU5CUVVOTExGTkJRVVFzUlVGQldVVXNXVUZCV2l4RFFVRjBRanRCUVVOQlNpeHJRa0ZCVlN4SlFVRldPMEZCUTBRN08wRkJSVVFzVlVGQlNVRXNUMEZCU2l4RlFVRmhPMEZCUTFnN1FVRkRSRHRCUVVOR096dEJRVVZFT1VJc1QwRkJSM05ETEV0QlFVZzdRVUZEUkN4SE96dDFRa0ZGUkVNc1RTeHhRa0ZCVXp0QlFVRkJMR3RDUVVOakxFdEJRVXRvUXl4TFFVUnVRanRCUVVGQkxGRkJRME5TTEVsQlJFUXNWMEZEUTBFc1NVRkVSRHRCUVVGQkxGRkJRMDlETEVWQlJGQXNWMEZEVDBFc1JVRkVVRHM3UVVGRlVDeFJRVUZOVXl4SlFVRkpWaXhKUVVGV08wRkJRMEVzVVVGQlRWY3NTVUZCU1ZZc1JVRkJWanM3UVVGRlFTeFJRVUZOZDBNc1YwRkJWek5ETEdOQlFXTXNaME5CUVhGQ0xFdEJRVXM0UWl4WFFVRk1MRU5CUVdsQ0xFTkJRV3BDTEVWQlFXOUNMRU5CUVhCQ0xFTkJRWEpDTEVWQlFUWkRMRXRCUVV0QkxGZEJRVXdzUTBGQmFVSXNRMEZCYWtJc1JVRkJiMElzUTBGQmNFSXNRMEZCTjBNc1JVRkJjVVZzUWl4RlFVRkZUeXhWUVVGR0xFVkJRWEpGTEVOQlFXUXNRMEZCYWtJN1FVRkRRU3hSUVVGSmQwSXNXVUZCV1N4RFFVRm9RaXhGUVVGdFFqdEJRVU5xUWl4aFFVRlBPVUlzUlVGQlJXZENMRWRCUVVZc1JVRkJVRHRCUVVORUxFdEJSa1FzVFVGRlR6dEJRVU5NTEZWQlFVMWxMRXRCUVVzc1owTkJRWEZDTEV0QlFVdGtMRmRCUVV3c1EwRkJhVUlzUTBGQmFrSXNSVUZCYjBJc1EwRkJjRUlzUTBGQmNrSXNSVUZCTmtNc1MwRkJTMEVzVjBGQlRDeERRVUZwUWl4RFFVRnFRaXhGUVVGdlFpeERRVUZ3UWl4RFFVRTNReXhGUVVGeFJXRXNVVUZCY2tVc1EwRkJXRHRCUVVOQkxGVkJRVTFGTEV0QlFVc3NaME5CUVhGQ0xFdEJRVXRtTEZkQlFVd3NRMEZCYVVJc1EwRkJha0lzUlVGQmIwSXNRMEZCY0VJc1EwRkJja0lzUlVGQk5rTXNTMEZCUzBFc1YwRkJUQ3hEUVVGcFFpeERRVUZxUWl4RlFVRnZRaXhEUVVGd1FpeERRVUUzUXl4RlFVRnhSV0VzVVVGQmNrVXNRMEZCV0R0QlFVTkJMR0ZCUVU4c1owTkJRWEZDUXl4RlFVRnlRaXhGUVVGNVFrTXNSVUZCZWtJc1JVRkJOa0pHTEZGQlFUZENMRU5CUVZBN1FVRkRSRHRCUVVOR0xFYzdPenM3TzBGQmNrWkhia01zVlN4RFFVTkhjME1zV1N4SFFVRmxPMEZCUTNCQ2JrTXNXVUZCVlR0QlFVUlZMRU03TzJ0Q1FYVkdWQ3hWUVVGRFJDeExRVUZFTzBGQlFVRXNVMEZCVnl4SlFVRkpSaXhWUVVGS0xFTkJRV1ZGTEV0QlFXWXNRMEZCV0R0QlFVRkJMRU1pTENKbWFXeGxJam9pWW14bGJtUXRkSGRsWlc1ekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMeWM3WEc1cGJYQnZjblFnZXlCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTd2daMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01nZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNXBiWEJ2Y25RZ2V5QmpiR0Z0Y0NCOUlHWnliMjBnSnk0dUwybHVZeTkwY21GdWMyWnZjbTFsY25Nbk8xeHVYRzVqYjI1emRDQmpiR0Z0Y0ZCeWIyZHlaWE56SUQwZ1kyeGhiWEFvTUN3Z01TazdYRzVjYm1aMWJtTjBhVzl1SUdOaGJHTldZV3gxWlVGMFZHbHRaU2htY205dExDQjBieXdnWkhWeVlYUnBiMjRzSUdWc1lYQnpaV1FzSUdWaGMyVXBJSHRjYmlBZ1kyOXVjM1FnY0hKdlozSmxjM05CZEZScGJXVWdQU0JsWVhObEtHTnNZVzF3VUhKdlozSmxjM01vWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb01Dd2daSFZ5WVhScGIyNHNJR1ZzWVhCelpXUXBLU2s3WEc0Z0lISmxkSFZ5YmlCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aG1jbTl0TENCMGJ5d2djSEp2WjNKbGMzTkJkRlJwYldVcE8xeHVmVnh1WEc1amJHRnpjeUJVZDJWbGJrSnNaVzVrSUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ2MzUmhkR2xqSUdSbFptRjFiSFJRY205d2N5QTlJSHRjYmlBZ0lDQmhZMk4xY21GamVUb2dOakJjYmlBZ2ZUdGNibHh1SUNCdmJsTjBZWEowS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWm5KdmJTd2dkRzhzSUdSMWNtRjBhVzl1TENCaFkyTjFjbUZqZVNCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQmpiMjV6ZENCaElEMGdabkp2YlR0Y2JpQWdJQ0JqYjI1emRDQmlJRDBnZEc4N1hHNGdJQ0FnWTI5dWMzUWdZVVIxY21GMGFXOXVJRDBnWVM1blpYUkVkWEpoZEdsdmJpZ3BPMXh1SUNBZ0lHTnZibk4wSUdKRWRYSmhkR2x2YmlBOUlHSXVaMlYwUkhWeVlYUnBiMjRvS1R0Y2JseHVJQ0FnSUhSb2FYTXVaSFZ5WVhScGIyNGdQU0JrZFhKaGRHbHZiaUI4ZkNCTllYUm9MbTFwYmloY2JpQWdJQ0FnSUdGRWRYSmhkR2x2YmlBdElHRXVaMlYwUld4aGNITmxaQ2dwTEZ4dUlDQWdJQ0FnWWtSMWNtRjBhVzl1WEc0Z0lDQWdLVHRjYmx4dUlDQWdJR052Ym5OMElHRkZZWE5sSUQwZ1lTNW5aWFJRY205d0tDZGxZWE5sSnlrN1hHNGdJQ0FnWTI5dWMzUWdZa1ZoYzJVZ1BTQmlMbWRsZEZCeWIzQW9KMlZoYzJVbktUdGNiaUFnSUNCamIyNXpkQ0JoUm5KdmJTQTlJR0V1WjJWMFVISnZjQ2duWm5KdmJTY3BPMXh1SUNBZ0lHTnZibk4wSUdKR2NtOXRJRDBnWWk1blpYUlFjbTl3S0NkbWNtOXRKeWs3WEc0Z0lDQWdZMjl1YzNRZ1lWUnZJRDBnWVM1blpYUlFjbTl3S0NkMGJ5Y3BPMXh1SUNBZ0lHTnZibk4wSUdKVWJ5QTlJR0l1WjJWMFVISnZjQ2duZEc4bktUdGNiaUFnSUNCamIyNXpkQ0JpVm1Gc2RXVkJkRUpzWlc1a1EyOXRjR3hsZEdVZ1BTQmpZV3hqVm1Gc2RXVkJkRlJwYldVb1lrWnliMjBzSUdKVWJ5d2dZa1IxY21GMGFXOXVMQ0IwYUdsekxtUjFjbUYwYVc5dUxDQmlSV0Z6WlNrN1hHNGdJQ0FnWTI5dWMzUWdZbE4wWVhKMGMwaHBaMmhsY2xSb1lXNUJJRDBnWWtaeWIyMGdQaUJoTG1kbGRDZ3BPMXh1WEc0Z0lDQWdkR2hwY3k1aWJHVnVaRkJ2YVc1MGN5QTlJRnRjYmlBZ0lDQWdJRnN3TENCaExtZGxkQ2dwWFN4Y2JpQWdJQ0FnSUZ0MGFHbHpMbVIxY21GMGFXOXVMQ0JpVm1Gc2RXVkJkRUpzWlc1a1EyOXRjR3hsZEdWZFhHNGdJQ0FnWFR0Y2JseHVJQ0FnSUM4dklFWnBibVFnZEhkbFpXNGdhVzUwWlhKelpXTjBhVzl1WEc0Z0lDQWdZMjl1YzNRZ2RHbHRaWE4wWlhBZ1BTQjBhR2x6TG1SMWNtRjBhVzl1SUM4Z1lXTmpkWEpoWTNrN1hHNWNiaUFnSUNCc1pYUWdabTkxYm1SUU1TQTlJR1poYkhObE8xeHVJQ0FnSUd4bGRDQm1iM1Z1WkZBeUlEMGdabUZzYzJVN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHRmpZM1Z5WVdONU95QnBLeXNwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSFJ2ZEdGc1ZHbHRaU0E5SUdrZ0tpQjBhVzFsYzNSbGNEdGNibHh1SUNBZ0lDQWdZMjl1YzNRZ1lWWmhiSFZsUVhSVWFXMWxJRDBnWTJGc1kxWmhiSFZsUVhSVWFXMWxLR0ZHY205dExDQmhWRzhzSUdGRWRYSmhkR2x2Yml3Z1lTNWxiR0Z3YzJWa0lDc2dkRzkwWVd4VWFXMWxMQ0JoUldGelpTazdYRzRnSUNBZ0lDQmpiMjV6ZENCaVZtRnNkV1ZCZEZScGJXVWdQU0JqWVd4alZtRnNkV1ZCZEZScGJXVW9Za1p5YjIwc0lHSlVieXdnWWtSMWNtRjBhVzl1TENCaUxtVnNZWEJ6WldRZ0t5QjBiM1JoYkZScGJXVXNJR0pGWVhObEtUdGNibHh1SUNBZ0lDQWdZMjl1YzNRZ2FHRnpTVzUwWlhKelpXTjBaV1FnUFNBb1hHNGdJQ0FnSUNBZ0lDaGlVM1JoY25SelNHbG5hR1Z5VkdoaGJrRWdKaVlnWVZaaGJIVmxRWFJVYVcxbElEd2dZbFpoYkhWbFFYUlVhVzFsS1NCOGZGeHVJQ0FnSUNBZ0lDQW9JV0pUZEdGeWRITklhV2RvWlhKVWFHRnVRU0FtSmlCaFZtRnNkV1ZCZEZScGJXVWdQaUJpVm1Gc2RXVkJkRlJwYldVcFhHNGdJQ0FnSUNBcE8xeHVYRzRnSUNBZ0lDQnBaaUFvSVdadmRXNWtVREVnSmlZZ2FHRnpTVzUwWlhKelpXTjBaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYkdWdVpGQnZhVzUwY3k1emNHeHBZMlVvTUN3Z01Td2dXM1J2ZEdGc1ZHbHRaU3dnWWxaaGJIVmxRWFJVYVcxbFhTazdYRzRnSUNBZ0lDQWdJR1p2ZFc1a1VERWdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQXZMeUJVVDBSUElHZHZJR0poWTJzZ2RHaHliM1ZuYUNCaGJtUWdZMjl0YldWdWRGeHVJQ0FnSUNBZ1kyOXVjM1FnYUdGelNXNTBaWEp6WldOMFpXUkNJRDBnS0Z4dUlDQWdJQ0FnSUNBb1lsTjBZWEowYzBocFoyaGxjbFJvWVc1QklDWW1JR0ZXWVd4MVpVRjBWR2x0WlNBOElHSldZV3gxWlVGMFZHbHRaU2tnZkh4Y2JpQWdJQ0FnSUNBZ0tDRmlVM1JoY25SelNHbG5hR1Z5VkdoaGJrRWdKaVlnWVZaaGJIVmxRWFJVYVcxbElENGdZbFpoYkhWbFFYUlVhVzFsS1Z4dUlDQWdJQ0FnS1R0Y2JseHVJQ0FnSUNBZ2FXWWdLR1p2ZFc1a1VERWdKaVlnYUdGelNXNTBaWEp6WldOMFpXUkNLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbXhsYm1SUWIybHVkSE5iTWwwZ1BTQmJkRzkwWVd4VWFXMWxMQ0JpVm1Gc2RXVkJkRlJwYldWZE8xeHVJQ0FnSUNBZ0lDQm1iM1Z1WkZBeUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2FXWWdLR1p2ZFc1a1VESXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lIUnZMbk4wWVhKMEtDazdYRzRnSUgxY2JseHVJQ0IxY0dSaGRHVW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5Qm1jbTl0TENCMGJ5QjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0JqYjI1emRDQmhJRDBnWm5KdmJUdGNiaUFnSUNCamIyNXpkQ0JpSUQwZ2RHODdYRzVjYmlBZ0lDQmpiMjV6ZENCd2NtOW5jbVZ6Y3lBOUlHTnNZVzF3VUhKdlozSmxjM01vWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb2RHaHBjeTVpYkdWdVpGQnZhVzUwYzFzd1hWc3dYU3dnZEdocGN5NWliR1Z1WkZCdmFXNTBjMXN5WFZzd1hTd2dZUzVuWlhSRmJHRndjMlZrS0NrcEtUdGNiaUFnSUNCcFppQW9jSEp2WjNKbGMzTWdQajBnTVNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdJdVoyVjBLQ2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHTnZibk4wSUdGUUlEMGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vZEdocGN5NWliR1Z1WkZCdmFXNTBjMXN3WFZzeFhTd2dkR2hwY3k1aWJHVnVaRkJ2YVc1MGMxc3hYVnN4WFN3Z2NISnZaM0psYzNNcE8xeHVJQ0FnSUNBZ1kyOXVjM1FnWWxBZ1BTQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWgwYUdsekxtSnNaVzVrVUc5cGJuUnpXekZkV3pGZExDQjBhR2x6TG1Kc1pXNWtVRzlwYm5Seld6SmRXekZkTENCd2NtOW5jbVZ6Y3lrN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb1lWQXNJR0pRTENCd2NtOW5jbVZ6Y3lrN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNod2NtOXdjeWtnUFQ0Z2JtVjNJRlIzWldWdVFteGxibVFvY0hKdmNITXBPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9ibGVuZC10d2VlbnMuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ2hhaW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ2hhaW4sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENoYWluKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYWluKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMucGxheU5leHQgPSBfdGhpcy5wbGF5TmV4dC5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBDaGFpbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pID0gMDtcbiAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLnBsYXlOZXh0ID0gZnVuY3Rpb24gcGxheU5leHQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGkgPSBfcHJvcHMuaSxcbiAgICAgICAgb3JkZXIgPSBfcHJvcHMub3JkZXI7XG5cbiAgICBpZiAoaSA8IG9yZGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMucHJvcHMuaSsrO1xuICAgICAgdGhpcy5wbGF5Q3VycmVudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIENoYWluLnByb3RvdHlwZS5wbGF5Q3VycmVudCA9IGZ1bmN0aW9uIHBsYXlDdXJyZW50KCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaSA9IF9wcm9wczIuaSxcbiAgICAgICAgb3JkZXIgPSBfcHJvcHMyLm9yZGVyO1xuXG4gICAgb3JkZXJbaV0ucHJvcHMuX29uQ29tcGxldGUgPSB0aGlzLnBsYXlOZXh0O1xuICAgIG9yZGVyW2ldLnN0YXJ0KCk7XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGkgPSBfcHJvcHMzLmksXG4gICAgICAgIG9yZGVyID0gX3Byb3BzMy5vcmRlcjtcblxuICAgIG9yZGVyW2ldLnN0b3AoKTtcbiAgfTtcblxuICByZXR1cm4gQ2hhaW47XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3JkZXIsIG9uQ29tcGxldGUpIHtcbiAgcmV0dXJuIG5ldyBDaGFpbih7IG9yZGVyOiBvcmRlciwgb25Db21wbGV0ZTogb25Db21wbGV0ZSB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTm9ZV2x1TG1weklsMHNJbTVoYldWeklqcGJJa05vWVdsdUlpd2ljSEp2Y0hNaUxDSndiR0Y1VG1WNGRDSXNJbUpwYm1RaUxDSnZibE4wWVhKMElpd2lhU0lzSW5Cc1lYbERkWEp5Wlc1MElpd2liM0prWlhJaUxDSnNaVzVuZEdnaUxDSmpiMjF3YkdWMFpTSXNJbDl2YmtOdmJYQnNaWFJsSWl3aWMzUmhjblFpTENKdmJsTjBiM0FpTENKemRHOXdJaXdpYjI1RGIyMXdiR1YwWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3T3pzN096czdPenM3U1VGRlRVRXNTenM3TzBGQlEwb3NhVUpCUVZsRExFdEJRVm9zUlVGQmJVSTdRVUZCUVRzN1FVRkJRU3hwUkVGRGFrSXNiVUpCUVUxQkxFdEJRVTRzUTBGRWFVSTdPMEZCUldwQ0xGVkJRVXRETEZGQlFVd3NSMEZCWjBJc1RVRkJTMEVzVVVGQlRDeERRVUZqUXl4SlFVRmtMRTlCUVdoQ08wRkJSbWxDTzBGQlIyeENPenRyUWtGRlJFTXNUeXh6UWtGQlZUdEJRVU5TTEZOQlFVdElMRXRCUVV3c1EwRkJWMGtzUTBGQldDeEhRVUZsTEVOQlFXWTdRVUZEUVN4VFFVRkxReXhYUVVGTU8wRkJRMFFzUnpzN2EwSkJSVVJLTEZFc2RVSkJRVmM3UVVGQlFTeHBRa0ZEV1N4TFFVRkxSQ3hMUVVScVFqdEJRVUZCTEZGQlEwUkpMRU5CUkVNc1ZVRkRSRUVzUTBGRVF6dEJRVUZCTEZGQlEwVkZMRXRCUkVZc1ZVRkRSVUVzUzBGRVJqczdRVUZGVkN4UlFVRkpSaXhKUVVGSlJTeE5RVUZOUXl4TlFVRk9MRWRCUVdVc1EwRkJka0lzUlVGQk1FSTdRVUZEZUVJc1YwRkJTMUFzUzBGQlRDeERRVUZYU1N4RFFVRllPMEZCUTBFc1YwRkJTME1zVjBGQlREdEJRVU5FTEV0QlNFUXNUVUZIVHp0QlFVTk1MRmRCUVV0SExGRkJRVXc3UVVGRFJEdEJRVU5HTEVjN08ydENRVVZFU0N4WExEQkNRVUZqTzBGQlFVRXNhMEpCUTFNc1MwRkJTMHdzUzBGRVpEdEJRVUZCTEZGQlEwcEpMRU5CUkVrc1YwRkRTa0VzUTBGRVNUdEJRVUZCTEZGQlEwUkZMRXRCUkVNc1YwRkRSRUVzUzBGRVF6czdRVUZGV2tFc1ZVRkJUVVlzUTBGQlRpeEZRVUZUU2l4TFFVRlVMRU5CUVdWVExGZEJRV1lzUjBGQk5rSXNTMEZCUzFJc1VVRkJiRU03UVVGRFFVc3NWVUZCVFVZc1EwRkJUaXhGUVVGVFRTeExRVUZVTzBGQlEwUXNSenM3YTBKQlJVUkRMRTBzY1VKQlFWTTdRVUZCUVN4clFrRkRZeXhMUVVGTFdDeExRVVJ1UWp0QlFVRkJMRkZCUTBOSkxFTkJSRVFzVjBGRFEwRXNRMEZFUkR0QlFVRkJMRkZCUTBsRkxFdEJSRW9zVjBGRFNVRXNTMEZFU2pzN1FVRkZVRUVzVlVGQlRVWXNRMEZCVGl4RlFVRlRVU3hKUVVGVU8wRkJRMFFzUnpzN096czdhMEpCUjFrc1ZVRkJRMDRzUzBGQlJDeEZRVUZSVHl4VlFVRlNPMEZCUVVFc1UwRkJkVUlzU1VGQlNXUXNTMEZCU2l4RFFVRlZMRVZCUVVWUExGbEJRVVlzUlVGQlUwOHNjMEpCUVZRc1JVRkJWaXhEUVVGMlFqdEJRVUZCTEVNaUxDSm1hV3hsSWpvaVkyaGhhVzR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dkp6dGNibHh1WTJ4aGMzTWdRMmhoYVc0Z1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lITjFjR1Z5S0hCeWIzQnpLVHRjYmlBZ0lDQjBhR2x6TG5Cc1lYbE9aWGgwSUQwZ2RHaHBjeTV3YkdGNVRtVjRkQzVpYVc1a0tIUm9hWE1wTzF4dUlDQjlYRzVjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCMGFHbHpMbkJ5YjNCekxta2dQU0F3TzF4dUlDQWdJSFJvYVhNdWNHeGhlVU4xY25KbGJuUW9LVHRjYmlBZ2ZWeHVYRzRnSUhCc1lYbE9aWGgwS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYVN3Z2IzSmtaWElnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ2FXWWdLR2tnUENCdmNtUmxjaTVzWlc1bmRHZ2dMU0F4S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbkJ5YjNCekxta3JLenRjYmlBZ0lDQWdJSFJvYVhNdWNHeGhlVU4xY25KbGJuUW9LVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVqYjIxd2JHVjBaU2dwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhCc1lYbERkWEp5Wlc1MEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2FTd2diM0prWlhJZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdiM0prWlhKYmFWMHVjSEp2Y0hNdVgyOXVRMjl0Y0d4bGRHVWdQU0IwYUdsekxuQnNZWGxPWlhoME8xeHVJQ0FnSUc5eVpHVnlXMmxkTG5OMFlYSjBLQ2s3WEc0Z0lIMWNibHh1SUNCdmJsTjBiM0FvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJwTENCdmNtUmxjaUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCdmNtUmxjbHRwWFM1emRHOXdLQ2s3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0c5eVpHVnlMQ0J2YmtOdmJYQnNaWFJsS1NBOVBpQnVaWGNnUTJoaGFXNG9leUJ2Y21SbGNpd2diMjVEYjIxd2JHVjBaU0I5S1R0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2NoYWluLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ29tcG9zaXRlQWN0aW9uID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENvbXBvc2l0ZUFjdGlvbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ29tcG9zaXRlQWN0aW9uKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvc2l0ZUFjdGlvbik7XG5cbiAgICB2YXIgYWN0aW9ucyA9IHByb3BzLmFjdGlvbnMsXG4gICAgICAgIHJlbWFpbmluZ1Byb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ2FjdGlvbnMnXSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwodGhpcywgcmVtYWluaW5nUHJvcHMpKTtcblxuICAgIF90aGlzLmN1cnJlbnQgPSB7fTtcbiAgICBfdGhpcy5hY3Rpb25LZXlzID0gW107XG4gICAgX3RoaXMuYWRkQWN0aW9ucyhwcm9wcy5hY3Rpb25zKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmFkZEFjdGlvbnMgPSBmdW5jdGlvbiBhZGRBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChfdGhpczIuYWN0aW9uS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgIF90aGlzMi5hY3Rpb25LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMyW2tleV0gPSBhY3Rpb25zW2tleV07XG5cbiAgICAgIHZhciBvblVwZGF0ZSA9IGZ1bmN0aW9uICh2LCBhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5jdXJyZW50W2tleV0gPSBhY3Rpb24uZ2V0KCk7XG4gICAgICB9O1xuXG4gICAgICAvLyBJbW1lZGlhdGVseSB1cGRhdGUgd2l0aCB0aGUgY3VycmVudCBhY3Rpb24gc3RhdGVcbiAgICAgIG9uVXBkYXRlKG51bGwsIF90aGlzMltrZXldKTtcblxuICAgICAgX3RoaXMyW2tleV0uc2V0UHJvcHMoe1xuICAgICAgICBfb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cbiAgICAgIH0pLmFkZExpc3RlbmVyKG9uVXBkYXRlKTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIGFjdGlvbnMpIHtcbiAgICAgIF9sb29wKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSB0aGlzLmFjdGlvbktleXMubGVuZ3RoO1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczNba2V5XS5zdGFydCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzNFtrZXldLnN0b3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gZ2V0VmVsb2NpdHkoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB2YXIgdmVsb2NpdHkgPSB7fTtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gdmVsb2NpdHlba2V5XSA9IF90aGlzNVtrZXldLmdldFZlbG9jaXR5KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZlbG9jaXR5O1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMDtcbiAgfTtcblxuICByZXR1cm4gQ29tcG9zaXRlQWN0aW9uO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ29tcG9zaXRlQWN0aW9uKF9leHRlbmRzKHtcbiAgICBhY3Rpb25zOiBhY3Rpb25zXG4gIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk52YlhCdmMybDBaUzVxY3lKZExDSnVZVzFsY3lJNld5SkRiMjF3YjNOcGRHVkJZM1JwYjI0aUxDSndjbTl3Y3lJc0ltRmpkR2x2Ym5NaUxDSnlaVzFoYVc1cGJtZFFjbTl3Y3lJc0ltTjFjbkpsYm5RaUxDSmhZM1JwYjI1TFpYbHpJaXdpWVdSa1FXTjBhVzl1Y3lJc0ltdGxlU0lzSW1sdVpHVjRUMllpTENKd2RYTm9JaXdpYjI1VmNHUmhkR1VpTENKMklpd2lZV04wYVc5dUlpd2laMlYwSWl3aWMyVjBVSEp2Y0hNaUxDSmZiMjVUZEc5d0lpd2liblZ0UVdOMGFYWmxRV04wYVc5dWN5SXNJbUZrWkV4cGMzUmxibVZ5SWl3aWIyNVRkR0Z5ZENJc0lteGxibWQwYUNJc0ltWnZja1ZoWTJnaUxDSnpkR0Z5ZENJc0ltOXVVM1J2Y0NJc0luTjBiM0FpTENKblpYUldaV3h2WTJsMGVTSXNJblpsYkc5amFYUjVJaXdpYVhOQlkzUnBiMjVEYjIxd2JHVjBaU0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPenM3T3pzN096czdPenM3TzBsQlJVMUJMR1U3T3p0QlFVTktMREpDUVVGWlF5eExRVUZhTEVWQlFXMUNPMEZCUVVFN08wRkJRVUVzVVVGRFZFTXNUMEZFVXl4SFFVTnpRa1FzUzBGRWRFSXNRMEZEVkVNc1QwRkVVenRCUVVGQkxGRkJRMGRETEdOQlJFZ3NORUpCUTNOQ1JpeExRVVIwUWpzN1FVRkJRU3hwUkVGRmFrSXNiVUpCUVUxRkxHTkJRVTRzUTBGR2FVSTdPMEZCUjJwQ0xGVkJRVXRETEU5QlFVd3NSMEZCWlN4RlFVRm1PMEZCUTBFc1ZVRkJTME1zVlVGQlRDeEhRVUZyUWl4RlFVRnNRanRCUVVOQkxGVkJRVXRETEZWQlFVd3NRMEZCWjBKTUxFMUJRVTFETEU5QlFYUkNPMEZCVEdsQ08wRkJUV3hDT3pzMFFrRkZSRWtzVlN4MVFrRkJWMG9zVHl4RlFVRlRPMEZCUVVFN08wRkJRVUVzTUVKQlExQkxMRWRCUkU4N1FVRkZhRUlzVlVGQlNTeFBRVUZMUml4VlFVRk1MRU5CUVdkQ1J5eFBRVUZvUWl4RFFVRjNRa1FzUjBGQmVFSXNUVUZCYVVNc1EwRkJReXhEUVVGMFF5eEZRVUY1UXp0QlFVTjJReXhsUVVGTFJpeFZRVUZNTEVOQlFXZENTU3hKUVVGb1FpeERRVUZ4UWtZc1IwRkJja0k3UVVGRFJEczdRVUZGUkN4aFFVRkxRU3hIUVVGTUxFbEJRVmxNTEZGQlFWRkxMRWRCUVZJc1EwRkJXanM3UVVGRlFTeFZRVUZOUnl4WFFVRlhMRlZCUVVORExFTkJRVVFzUlVGQlNVTXNUVUZCU2p0QlFVRkJMR1ZCUVdVc1QwRkJTMUlzVDBGQlRDeERRVUZoUnl4SFFVRmlMRWxCUVc5Q1N5eFBRVUZQUXl4SFFVRlFMRVZCUVc1RE8wRkJRVUVzVDBGQmFrSTdPMEZCUlVFN1FVRkRRVWdzWlVGQlV5eEpRVUZVTEVWQlFXVXNUMEZCUzBnc1IwRkJUQ3hEUVVGbU96dEJRVVZCTEdGQlFVdEJMRWRCUVV3c1JVRkRSMDhzVVVGRVNDeERRVU5aTzBGQlExSkRMR2xDUVVGVE8wRkJRVUVzYVVKQlFVMHNUMEZCUzBNc1owSkJRVXdzUlVGQlRqdEJRVUZCTzBGQlJFUXNUMEZFV2l4RlFVbEhReXhYUVVwSUxFTkJTV1ZRTEZGQlNtWTdRVUZpWjBJN08wRkJRMnhDTEZOQlFVc3NTVUZCVFVnc1IwRkJXQ3hKUVVGclFrd3NUMEZCYkVJc1JVRkJNa0k3UVVGQlFTeFpRVUZvUWtzc1IwRkJaMEk3UVVGcFFqRkNPMEZCUTBZc1J6czdORUpCUlVSWExFOHNjMEpCUVZVN1FVRkJRVHM3UVVGRFVpeFRRVUZMUml4blFrRkJUQ3hIUVVGM1FpeExRVUZMV0N4VlFVRk1MRU5CUVdkQ1l5eE5RVUY0UXp0QlFVTkJMRk5CUVV0a0xGVkJRVXdzUTBGQlowSmxMRTlCUVdoQ0xFTkJRWGRDTEZWQlFVTmlMRWRCUVVRN1FVRkJRU3hoUVVGVExFOUJRVXRCTEVkQlFVd3NSVUZCVldNc1MwRkJWaXhGUVVGVU8wRkJRVUVzUzBGQmVFSTdRVUZEUkN4SE96czBRa0ZGUkVNc1RTeHhRa0ZCVXp0QlFVRkJPenRCUVVOUUxGTkJRVXRxUWl4VlFVRk1MRU5CUVdkQ1pTeFBRVUZvUWl4RFFVRjNRaXhWUVVGRFlpeEhRVUZFTzBGQlFVRXNZVUZCVXl4UFFVRkxRU3hIUVVGTUxFVkJRVlZuUWl4SlFVRldMRVZCUVZRN1FVRkJRU3hMUVVGNFFqdEJRVU5FTEVjN096UkNRVVZFUXl4WExEQkNRVUZqTzBGQlFVRTdPMEZCUTFvc1VVRkJUVU1zVjBGQlZ5eEZRVUZxUWp0QlFVTkJMRk5CUVV0d1FpeFZRVUZNTEVOQlFXZENaU3hQUVVGb1FpeERRVUYzUWl4VlFVRkRZaXhIUVVGRU8wRkJRVUVzWVVGQlUydENMRk5CUVZOc1FpeEhRVUZVTEVsQlFXZENMRTlCUVV0QkxFZEJRVXdzUlVGQlZXbENMRmRCUVZZc1JVRkJla0k3UVVGQlFTeExRVUY0UWp0QlFVTkJMRmRCUVU5RExGRkJRVkE3UVVGRFJDeEhPenMwUWtGRlJFTXNaMElzSzBKQlFXMUNPMEZCUTJwQ0xGZEJRVkVzUzBGQlMxWXNaMEpCUVV3c1MwRkJNRUlzUTBGQmJFTTdRVUZEUkN4SE96czdPenRyUWtGSFdTeFZRVUZEWkN4UFFVRkVMRVZCUVZWRUxFdEJRVllzUlVGQmIwSTdRVUZEYWtNc1UwRkJUeXhKUVVGSlJDeGxRVUZLTzBGQlEweEZPMEZCUkVzc1MwRkZSa1FzUzBGR1JTeEZRVUZRTzBGQlNVUXNReUlzSW1acGJHVWlPaUpqYjIxd2IzTnBkR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dkp6dGNibHh1WTJ4aGMzTWdRMjl0Y0c5emFYUmxRV04wYVc5dUlHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITXBJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHRmpkR2x2Ym5Nc0lDNHVMbkpsYldGcGJtbHVaMUJ5YjNCeklIMGdQU0J3Y205d2N6dGNiaUFnSUNCemRYQmxjaWh5WlcxaGFXNXBibWRRY205d2N5azdYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJRDBnZTMwN1hHNGdJQ0FnZEdocGN5NWhZM1JwYjI1TFpYbHpJRDBnVzEwN1hHNGdJQ0FnZEdocGN5NWhaR1JCWTNScGIyNXpLSEJ5YjNCekxtRmpkR2x2Ym5NcE8xeHVJQ0I5WEc1Y2JpQWdZV1JrUVdOMGFXOXVjeWhoWTNScGIyNXpLU0I3WEc0Z0lDQWdabTl5SUNoamIyNXpkQ0JyWlhrZ2FXNGdZV04wYVc5dWN5a2dlMXh1SUNBZ0lDQWdhV1lnS0hSb2FYTXVZV04wYVc5dVMyVjVjeTVwYm1SbGVFOW1LR3RsZVNrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WVdOMGFXOXVTMlY1Y3k1d2RYTm9LR3RsZVNrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lIUm9hWE5iYTJWNVhTQTlJR0ZqZEdsdmJuTmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ1kyOXVjM1FnYjI1VmNHUmhkR1VnUFNBb2Rpd2dZV04wYVc5dUtTQTlQaUIwYUdsekxtTjFjbkpsYm5SYmEyVjVYU0E5SUdGamRHbHZiaTVuWlhRb0tUdGNibHh1SUNBZ0lDQWdMeThnU1cxdFpXUnBZWFJsYkhrZ2RYQmtZWFJsSUhkcGRHZ2dkR2hsSUdOMWNuSmxiblFnWVdOMGFXOXVJSE4wWVhSbFhHNGdJQ0FnSUNCdmJsVndaR0YwWlNodWRXeHNMQ0IwYUdselcydGxlVjBwTzF4dVhHNGdJQ0FnSUNCMGFHbHpXMnRsZVYxY2JpQWdJQ0FnSUNBZ0xuTmxkRkJ5YjNCektIdGNiaUFnSUNBZ0lDQWdJQ0JmYjI1VGRHOXdPaUFvS1NBOVBpQjBhR2x6TG01MWJVRmpkR2wyWlVGamRHbHZibk10TFZ4dUlDQWdJQ0FnSUNCOUtWeHVJQ0FnSUNBZ0lDQXVZV1JrVEdsemRHVnVaWElvYjI1VmNHUmhkR1VwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUc5dVUzUmhjblFvS1NCN1hHNGdJQ0FnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1eklEMGdkR2hwY3k1aFkzUnBiMjVMWlhsekxteGxibWQwYUR0Y2JpQWdJQ0IwYUdsekxtRmpkR2x2Ymt0bGVYTXVabTl5UldGamFDZ29hMlY1S1NBOVBpQjBhR2x6VzJ0bGVWMHVjM1JoY25Rb0tTazdYRzRnSUgxY2JseHVJQ0J2YmxOMGIzQW9LU0I3WEc0Z0lDQWdkR2hwY3k1aFkzUnBiMjVMWlhsekxtWnZja1ZoWTJnb0tHdGxlU2tnUFQ0Z2RHaHBjMXRyWlhsZExuTjBiM0FvS1NrN1hHNGdJSDFjYmx4dUlDQm5aWFJXWld4dlkybDBlU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjJaV3h2WTJsMGVTQTlJSHQ5TzF4dUlDQWdJSFJvYVhNdVlXTjBhVzl1UzJWNWN5NW1iM0pGWVdOb0tDaHJaWGtwSUQwK0lIWmxiRzlqYVhSNVcydGxlVjBnUFNCMGFHbHpXMnRsZVYwdVoyVjBWbVZzYjJOcGRIa29LU2s3WEc0Z0lDQWdjbVYwZFhKdUlIWmxiRzlqYVhSNU8xeHVJQ0I5WEc1Y2JpQWdhWE5CWTNScGIyNURiMjF3YkdWMFpTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z0tIUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeUE5UFQwZ01DazdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR0ZqZEdsdmJuTXNJSEJ5YjNCektTQTlQaUI3WEc0Z0lISmxkSFZ5YmlCdVpYY2dRMjl0Y0c5emFYUmxRV04wYVc5dUtIdGNiaUFnSUNCaFkzUnBiMjV6TEZ4dUlDQWdJQzR1TG5CeWIzQnpYRzRnSUgwcE8xeHVmVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY29tcG9zaXRlLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJy4uL2luYy9lYXNpbmcnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ3Jvc3NGYWRlID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENyb3NzRmFkZSwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ3Jvc3NGYWRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDcm9zc0ZhZGUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDcm9zc0ZhZGUucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBkdXJhdGlvbiA9IF9wcm9wcy5kdXJhdGlvbixcbiAgICAgICAgZWFzZSA9IF9wcm9wcy5lYXNlLFxuICAgICAgICBmYWRlciA9IF9wcm9wcy5mYWRlcjtcblxuXG4gICAgdGhpcy5mYWRlciA9IGZhZGVyIHx8ICgwLCBfdHdlZW4yLmRlZmF1bHQpKHtcbiAgICAgIHRvOiAxLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZWFzZTogZWFzZVxuICAgIH0pLnN0YXJ0KCk7XG4gIH07XG5cbiAgQ3Jvc3NGYWRlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBmcm9tID0gX3Byb3BzMi5mcm9tLFxuICAgICAgICB0byA9IF9wcm9wczIudG87XG5cbiAgICB2YXIgYmFsYW5jZSA9IHRoaXMuZmFkZXIuZ2V0KCk7XG4gICAgdmFyIGxhdGVzdEZyb21WYWx1ZSA9IGZyb20uZ2V0KCk7XG4gICAgdmFyIGxhdGVzdFRvVmFsdWUgPSB0by5nZXQoKTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShsYXRlc3RGcm9tVmFsdWUsIGxhdGVzdFRvVmFsdWUsIGJhbGFuY2UpO1xuICB9O1xuXG4gIHJldHVybiBDcm9zc0ZhZGU7XG59KF8yLmRlZmF1bHQpO1xuXG5Dcm9zc0ZhZGUuZGVmYXVsdFByb3BzID0ge1xuICBlYXNlOiBfZWFzaW5nLmxpbmVhclxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ3Jvc3NGYWRlKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnliM056TFdaaFpHVXVhbk1pWFN3aWJtRnRaWE1pT2xzaVEzSnZjM05HWVdSbElpd2liMjVUZEdGeWRDSXNJbkJ5YjNCeklpd2laSFZ5WVhScGIyNGlMQ0psWVhObElpd2labUZrWlhJaUxDSjBieUlzSW5OMFlYSjBJaXdpZFhCa1lYUmxJaXdpWm5KdmJTSXNJbUpoYkdGdVkyVWlMQ0puWlhRaUxDSnNZWFJsYzNSR2NtOXRWbUZzZFdVaUxDSnNZWFJsYzNSVWIxWmhiSFZsSWl3aVpHVm1ZWFZzZEZCeWIzQnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3p0QlFVTkJPenM3T3pzN096czdPMGxCUlUxQkxGTTdPenM3T3pzN096dHpRa0ZMU2tNc1R5eHpRa0ZCVlR0QlFVRkJMR2xDUVVNd1FpeExRVUZMUXl4TFFVUXZRanRCUVVGQkxGRkJRMEZETEZGQlJFRXNWVUZEUVVFc1VVRkVRVHRCUVVGQkxGRkJRMVZETEVsQlJGWXNWVUZEVlVFc1NVRkVWanRCUVVGQkxGRkJRMmRDUXl4TFFVUm9RaXhWUVVOblFrRXNTMEZFYUVJN096dEJRVWRTTEZOQlFVdEJMRXRCUVV3c1IwRkJZVUVzVTBGQlV5eHhRa0ZCVFR0QlFVTXhRa01zVlVGQlNTeERRVVJ6UWp0QlFVVXhRa2dzZDBKQlJqQkNPMEZCUnpGQ1F6dEJRVWd3UWl4TFFVRk9MRVZCU1c1Q1J5eExRVXB0UWl4RlFVRjBRanRCUVV0RUxFYzdPM05DUVVWRVF5eE5MSEZDUVVGVE8wRkJRVUVzYTBKQlEyTXNTMEZCUzA0c1MwRkVia0k3UVVGQlFTeFJRVU5EVHl4SlFVUkVMRmRCUTBOQkxFbEJSRVE3UVVGQlFTeFJRVU5QU0N4RlFVUlFMRmRCUTA5QkxFVkJSRkE3TzBGQlJWQXNVVUZCVFVrc1ZVRkJWU3hMUVVGTFRDeExRVUZNTEVOQlFWZE5MRWRCUVZnc1JVRkJhRUk3UVVGRFFTeFJRVUZOUXl4clFrRkJhMEpJTEV0QlFVdEZMRWRCUVV3c1JVRkJlRUk3UVVGRFFTeFJRVUZOUlN4blFrRkJaMEpRTEVkQlFVZExMRWRCUVVnc1JVRkJkRUk3UVVGRFFTeFhRVUZQTEdkRFFVRnhRa01zWlVGQmNrSXNSVUZCYzBORExHRkJRWFJETEVWQlFYRkVTQ3hQUVVGeVJDeERRVUZRTzBGQlEwUXNSenM3T3pzN1FVRnlRa2RXTEZNc1EwRkRSMk1zV1N4SFFVRmxPMEZCUTNCQ1ZqdEJRVVJ2UWl4RE96dHJRa0YxUWxRc1ZVRkJRMFlzUzBGQlJEdEJRVUZCTEZOQlFWY3NTVUZCU1VZc1UwRkJTaXhEUVVGalJTeExRVUZrTEVOQlFWZzdRVUZCUVN4RElpd2labWxzWlNJNkltTnliM056TFdaaFpHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2Snp0Y2JtbHRjRzl5ZENCMGQyVmxiaUJtY205dElDY3VMM1IzWldWdUp6dGNibWx0Y0c5eWRDQjdJR3hwYm1WaGNpQjlJR1p5YjIwZ0p5NHVMMmx1WXk5bFlYTnBibWNuTzF4dWFXMXdiM0owSUhzZ1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JtTnNZWE56SUVOeWIzTnpSbUZrWlNCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lITjBZWFJwWXlCa1pXWmhkV3gwVUhKdmNITWdQU0I3WEc0Z0lDQWdaV0Z6WlRvZ2JHbHVaV0Z5WEc0Z0lIMWNibHh1SUNCdmJsTjBZWEowS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWkhWeVlYUnBiMjRzSUdWaGMyVXNJR1poWkdWeUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnZEdocGN5NW1ZV1JsY2lBOUlHWmhaR1Z5SUh4OElIUjNaV1Z1S0h0Y2JpQWdJQ0FnSUhSdk9pQXhMRnh1SUNBZ0lDQWdaSFZ5WVhScGIyNHNYRzRnSUNBZ0lDQmxZWE5sWEc0Z0lDQWdmU2t1YzNSaGNuUW9LVHRjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1p5YjIwc0lIUnZJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJR0poYkdGdVkyVWdQU0IwYUdsekxtWmhaR1Z5TG1kbGRDZ3BPMXh1SUNBZ0lHTnZibk4wSUd4aGRHVnpkRVp5YjIxV1lXeDFaU0E5SUdaeWIyMHVaMlYwS0NrN1hHNGdJQ0FnWTI5dWMzUWdiR0YwWlhOMFZHOVdZV3gxWlNBOUlIUnZMbWRsZENncE8xeHVJQ0FnSUhKbGRIVnliaUJuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3loc1lYUmxjM1JHY205dFZtRnNkV1VzSUd4aGRHVnpkRlJ2Vm1Gc2RXVXNJR0poYkdGdVkyVXBPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2h3Y205d2N5a2dQVDRnYm1WM0lFTnliM056Um1Ga1pTaHdjbTl3Y3lrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgcmV0dXJuICgwLCBfdHdlZW4yLmRlZmF1bHQpKHsgZHVyYXRpb246IGR1cmF0aW9uIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJSbGJHRjVMbXB6SWwwc0ltNWhiV1Z6SWpwYkltUjFjbUYwYVc5dUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN096dHJRa0ZGWlN4VlFVRkRRU3hSUVVGRU8wRkJRVUVzVTBGQll5eHhRa0ZCVFN4RlFVRkZRU3hyUWtGQlJpeEZRVUZPTEVOQlFXUTdRVUZCUVN4RElpd2labWxzWlNJNkltUmxiR0Y1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSFIzWldWdUlHWnliMjBnSnk0dmRIZGxaVzRuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1pIVnlZWFJwYjI0cElEMCtJSFIzWldWdUtIc2daSFZ5WVhScGIyNGdmU2s3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZGVsYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE9mZnNldCA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhPZmZzZXQsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIE9mZnNldCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT2Zmc2V0KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgT2Zmc2V0LnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBpbnB1dCA9IHRoaXMucHJvcHMuaW5wdXQ7XG5cbiAgICB0aGlzLmlucHV0T3JpZ2luID0gaW5wdXQuZ2V0KCk7XG5cbiAgICB0aGlzLnNjaGVkdWxlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkoX3RoaXMyLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfTtcblxuICAgIGlucHV0LmFkZExpc3RlbmVyKHRoaXMuc2NoZWR1bGVVcGRhdGUpO1xuICB9O1xuXG4gIE9mZnNldC5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHZhciBpbnB1dCA9IHRoaXMucHJvcHMuaW5wdXQ7XG5cbiAgICBpbnB1dC5yZW1vdmVMaXN0ZW5lcih0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgfTtcblxuICBPZmZzZXQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaW5wdXQgPSBfcHJvcHMuaW5wdXQsXG4gICAgICAgIGZyb20gPSBfcHJvcHMuZnJvbTtcblxuICAgIHZhciBvZmZzZXQgPSBpbnB1dC5nZXQoKSAtIHRoaXMuaW5wdXRPcmlnaW47XG4gICAgcmV0dXJuIGZyb20gKyBvZmZzZXQ7XG4gIH07XG5cbiAgcmV0dXJuIE9mZnNldDtcbn0oXzIuZGVmYXVsdCk7XG5cbk9mZnNldC5kZWZhdWx0UHJvcHMgPSB7XG4gIGZyb206IDAsXG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIHByb3BzID0gYXJnc1swXTtcblxuICAgIHJldHVybiBuZXcgT2Zmc2V0KHByb3BzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5wdXQgPSBhcmdzWzBdLFxuICAgICAgICBvblVwZGF0ZSA9IGFyZ3NbMV0sXG4gICAgICAgIF9wcm9wczIgPSBhcmdzWzJdO1xuXG4gICAgcmV0dXJuIG5ldyBPZmZzZXQoX2V4dGVuZHMoe1xuICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgb25VcGRhdGU6IG9uVXBkYXRlXG4gICAgfSwgX3Byb3BzMikpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMjltWm5ObGRDNXFjeUpkTENKdVlXMWxjeUk2V3lKUFptWnpaWFFpTENKdmJsTjBZWEowSWl3aWFXNXdkWFFpTENKd2NtOXdjeUlzSW1sdWNIVjBUM0pwWjJsdUlpd2laMlYwSWl3aWMyTm9aV1IxYkdWVmNHUmhkR1VpTENKelkyaGxaSFZzWldSVmNHUmhkR1VpTENKaFpHUk1hWE4wWlc1bGNpSXNJbTl1VTNSdmNDSXNJbkpsYlc5MlpVeHBjM1JsYm1WeUlpd2lkWEJrWVhSbElpd2labkp2YlNJc0ltOW1abk5sZENJc0ltUmxabUYxYkhSUWNtOXdjeUlzSW5CaGMzTnBkbVVpTENKaGNtZHpJaXdpYkdWdVozUm9JaXdpYjI1VmNHUmhkR1VpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3T3pzN096czdTVUZGVFVFc1RUczdPenM3T3pzN08yMUNRVTFLUXl4UExITkNRVUZWTzBGQlFVRTdPMEZCUVVFc1VVRkRRVU1zUzBGRVFTeEhRVU5WTEV0QlFVdERMRXRCUkdZc1EwRkRRVVFzUzBGRVFUczdRVUZGVWl4VFFVRkxSU3hYUVVGTUxFZEJRVzFDUml4TlFVRk5SeXhIUVVGT0xFVkJRVzVDT3p0QlFVVkJMRk5CUVV0RExHTkJRVXdzUjBGQmMwSXNXVUZCVFR0QlFVTXhRaXh2UTBGQll5eFBRVUZMUXl4bFFVRnVRanRCUVVORUxFdEJSa1E3TzBGQlNVRk1MRlZCUVUxTkxGZEJRVTRzUTBGQmEwSXNTMEZCUzBZc1kwRkJka0k3UVVGRFJDeEhPenR0UWtGRlJFY3NUU3h4UWtGQlV6dEJRVUZCTEZGQlEwTlFMRXRCUkVRc1IwRkRWeXhMUVVGTFF5eExRVVJvUWl4RFFVTkRSQ3hMUVVSRU96dEJRVVZRUVN4VlFVRk5VU3hqUVVGT0xFTkJRWEZDTEV0QlFVdEtMR05CUVRGQ08wRkJRMFFzUnpzN2JVSkJSVVJMTEUwc2NVSkJRVk03UVVGQlFTeHBRa0ZEYVVJc1MwRkJTMUlzUzBGRWRFSTdRVUZCUVN4UlFVTkRSQ3hMUVVSRUxGVkJRME5CTEV0QlJFUTdRVUZCUVN4UlFVTlJWU3hKUVVSU0xGVkJRMUZCTEVsQlJGSTdPMEZCUlZBc1VVRkJUVU1zVTBGQlUxZ3NUVUZCVFVjc1IwRkJUaXhMUVVGakxFdEJRVXRFTEZkQlFXeERPMEZCUTBFc1YwRkJUMUVzVDBGQlQwTXNUVUZCWkR0QlFVTkVMRWM3T3pzN08wRkJNVUpIWWl4TkxFTkJRMGRqTEZrc1IwRkJaVHRCUVVOd1FrWXNVVUZCVFN4RFFVUmpPMEZCUlhCQ1J5eFhRVUZUTzBGQlJsY3NRenM3YTBKQk5FSlVMRmxCUVdFN1FVRkJRU3h2UTBGQlZFTXNTVUZCVXp0QlFVRlVRU3hSUVVGVE8wRkJRVUU3TzBGQlF6RkNMRTFCUVVsQkxFdEJRVXRETEUxQlFVd3NTMEZCWjBJc1EwRkJjRUlzUlVGQmRVSTdRVUZCUVN4UlFVTmlaQ3hMUVVSaExFZEJRMGhoTEVsQlJFYzdPMEZCUlhKQ0xGZEJRVThzU1VGQlNXaENMRTFCUVVvc1EwRkJWMGNzUzBGQldDeERRVUZRTzBGQlEwUXNSMEZJUkN4TlFVZFBPMEZCUVVFc1VVRkRSMFFzUzBGRVNDeEhRVU00UW1Nc1NVRkVPVUk3UVVGQlFTeFJRVU5WUlN4UlFVUldMRWRCUXpoQ1JpeEpRVVE1UWp0QlFVRkJMRkZCUTI5Q1lpeFBRVVJ3UWl4SFFVTTRRbUVzU1VGRU9VSTdPMEZCUlV3c1YwRkJUeXhKUVVGSmFFSXNUVUZCU2p0QlFVTk1SU3hyUWtGRVN6dEJRVVZNWjBJN1FVRkdTeXhQUVVkR1ppeFBRVWhGTEVWQlFWQTdRVUZMUkR0QlFVTkdMRU1pTENKbWFXeGxJam9pYjJabWMyVjBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNXBiWEJ2Y25RZ2V5QnZia1p5WVcxbFZYQmtZWFJsSUgwZ1puSnZiU0FuTGk0dlpuSmhiV1Z6ZVc1akp6dGNibHh1WTJ4aGMzTWdUMlptYzJWMElHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0JtY205dE9pQXdMRnh1SUNBZ0lIQmhjM05wZG1VNklIUnlkV1ZjYmlBZ2ZUdGNibHh1SUNCdmJsTjBZWEowS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYVc1d2RYUWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnZEdocGN5NXBibkIxZEU5eWFXZHBiaUE5SUdsdWNIVjBMbWRsZENncE8xeHVYRzRnSUNBZ2RHaHBjeTV6WTJobFpIVnNaVlZ3WkdGMFpTQTlJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lHOXVSbkpoYldWVmNHUmhkR1VvZEdocGN5NXpZMmhsWkhWc1pXUlZjR1JoZEdVcE8xeHVJQ0FnSUgwN1hHNWNiaUFnSUNCcGJuQjFkQzVoWkdSTWFYTjBaVzVsY2loMGFHbHpMbk5qYUdWa2RXeGxWWEJrWVhSbEtUdGNiaUFnZlZ4dVhHNGdJRzl1VTNSdmNDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHbHVjSFYwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHbHVjSFYwTG5KbGJXOTJaVXhwYzNSbGJtVnlLSFJvYVhNdWMyTm9aV1IxYkdWVmNHUmhkR1VwTzF4dUlDQjlYRzVjYmlBZ2RYQmtZWFJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYVc1d2RYUXNJR1p5YjIwZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdZMjl1YzNRZ2IyWm1jMlYwSUQwZ2FXNXdkWFF1WjJWMEtDa2dMU0IwYUdsekxtbHVjSFYwVDNKcFoybHVPMXh1SUNBZ0lISmxkSFZ5YmlCbWNtOXRJQ3NnYjJabWMyVjBPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2d1TGk1aGNtZHpLU0E5UGlCN1hHNGdJR2xtSUNoaGNtZHpMbXhsYm1kMGFDQTlQVDBnTVNrZ2UxeHVJQ0FnSUdOdmJuTjBJRnNnY0hKdmNITWdYU0E5SUdGeVozTTdYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QlBabVp6WlhRb2NISnZjSE1wTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUdOdmJuTjBJRnNnYVc1d2RYUXNJRzl1VlhCa1lYUmxMQ0J3Y205d2N5QmRJRDBnWVhKbmN6dGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lFOW1abk5sZENoN1hHNGdJQ0FnSUNCcGJuQjFkQ3hjYmlBZ0lDQWdJRzl1VlhCa1lYUmxMRnh1SUNBZ0lDQWdMaTR1Y0hKdmNITmNiaUFnSUNCOUtUdGNiaUFnZlZ4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9vZmZzZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBhcmFsbGVsID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFBhcmFsbGVsLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBQYXJhbGxlbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFyYWxsZWwpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBQYXJhbGxlbC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgYWN0aW9ucyA9IHRoaXMucHJvcHMuYWN0aW9ucztcblxuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IGFjdGlvbnMubGVuZ3RoO1xuXG4gICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIGFjdGlvbi5zZXRQcm9wcyh7XG4gICAgICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIHJldHVybiBhY3Rpb24uc3RvcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5hZGRBY3Rpb24gPSBmdW5jdGlvbiBhZGRBY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLnByb3BzLmFjdGlvbnM7XG5cblxuICAgIGlmIChhY3Rpb25zLmluZGV4T2YoYWN0aW9uKSA9PT0gLTEpIHtcbiAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMDtcbiAgfTtcblxuICByZXR1cm4gUGFyYWxsZWw7XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBQYXJhbGxlbChfZXh0ZW5kcyh7IGFjdGlvbnM6IGFjdGlvbnMgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQmhjbUZzYkdWc0xtcHpJbDBzSW01aGJXVnpJanBiSWxCaGNtRnNiR1ZzSWl3aWIyNVRkR0Z5ZENJc0ltRmpkR2x2Ym5NaUxDSndjbTl3Y3lJc0ltNTFiVUZqZEdsMlpVRmpkR2x2Ym5NaUxDSnNaVzVuZEdnaUxDSm1iM0pGWVdOb0lpd2lZV04wYVc5dUlpd2ljMlYwVUhKdmNITWlMQ0pmYjI1VGRHOXdJaXdpYzNSaGNuUWlMQ0p2YmxOMGIzQWlMQ0p6ZEc5d0lpd2lZV1JrUVdOMGFXOXVJaXdpYVc1a1pYaFBaaUlzSW5CMWMyZ2lMQ0pwYzBGamRHbHZia052YlhCc1pYUmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenM3T3pzN096czdPMGxCUlUxQkxGRTdPenM3T3pzN096dHhRa0ZEU2tNc1R5eHpRa0ZCVlR0QlFVRkJPenRCUVVGQkxGRkJRMEZETEU5QlJFRXNSMEZEV1N4TFFVRkxReXhMUVVScVFpeERRVU5CUkN4UFFVUkJPenRCUVVWU0xGTkJRVXRGTEdkQ1FVRk1MRWRCUVhkQ1JpeFJRVUZSUnl4TlFVRm9RenM3UVVGRlFVZ3NXVUZCVVVrc1QwRkJVaXhEUVVGblFpeFZRVUZEUXl4TlFVRkVMRVZCUVZrN1FVRkRNVUpCTEdGQlFVOURMRkZCUVZBc1EwRkJaMEk3UVVGRFpFTXNhVUpCUVZNN1FVRkJRU3hwUWtGQlRTeFBRVUZMVEN4blFrRkJUQ3hGUVVGT08wRkJRVUU3UVVGRVN5eFBRVUZvUWl4RlFVVkhUU3hMUVVaSU8wRkJSMFFzUzBGS1JEdEJRVXRFTEVjN08zRkNRVVZFUXl4TkxIRkNRVUZUTzBGQlExQXNVMEZCUzFJc1MwRkJUQ3hEUVVGWFJDeFBRVUZZTEVOQlFXMUNTU3hQUVVGdVFpeERRVUV5UWl4VlFVRkRReXhOUVVGRU8wRkJRVUVzWVVGQldVRXNUMEZCVDBzc1NVRkJVQ3hGUVVGYU8wRkJRVUVzUzBGQk0wSTdRVUZEUkN4SE96dHhRa0ZGUkVNc1V5eHpRa0ZCVlU0c1RTeEZRVUZSTzBGQlFVRXNVVUZEVWt3c1QwRkVVU3hIUVVOSkxFdEJRVXRETEV0QlJGUXNRMEZEVWtRc1QwRkVVVHM3TzBGQlIyaENMRkZCUVVsQkxGRkJRVkZaTEU5QlFWSXNRMEZCWjBKUUxFMUJRV2hDTEUxQlFUUkNMRU5CUVVNc1EwRkJha01zUlVGQmIwTTdRVUZEYkVOTUxHTkJRVkZoTEVsQlFWSXNRMEZCWVZJc1RVRkJZanRCUVVORU8wRkJRMFlzUnpzN2NVSkJSVVJUTEdkQ0xDdENRVUZ0UWp0QlFVTnFRaXhYUVVGUkxFdEJRVXRhTEdkQ1FVRk1MRXRCUVRCQ0xFTkJRV3hETzBGQlEwUXNSenM3T3pzN2EwSkJSMWtzVlVGQlEwWXNUMEZCUkN4RlFVRlZReXhMUVVGV08wRkJRVUVzVTBGQmIwSXNTVUZCU1Vnc1VVRkJTaXhaUVVGbFJTeG5Ra0ZCWml4SlFVRXlRa01zUzBGQk0wSXNSVUZCY0VJN1FVRkJRU3hESWl3aVptbHNaU0k2SW5CaGNtRnNiR1ZzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVjYm1Oc1lYTnpJRkJoY21Gc2JHVnNJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR0ZqZEdsdmJuTWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1eklEMGdZV04wYVc5dWN5NXNaVzVuZEdnN1hHNWNiaUFnSUNCaFkzUnBiMjV6TG1admNrVmhZMmdvS0dGamRHbHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ1lXTjBhVzl1TG5ObGRGQnliM0J6S0h0Y2JpQWdJQ0FnSUNBZ1gyOXVVM1J2Y0RvZ0tDa2dQVDRnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1ekxTMWNiaUFnSUNBZ0lIMHBMbk4wWVhKMEtDazdYRzRnSUNBZ2ZTazdYRzRnSUgxY2JseHVJQ0J2YmxOMGIzQW9LU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTVoWTNScGIyNXpMbVp2Y2tWaFkyZ29LR0ZqZEdsdmJpa2dQVDRnWVdOMGFXOXVMbk4wYjNBb0tTazdYRzRnSUgxY2JseHVJQ0JoWkdSQlkzUnBiMjRvWVdOMGFXOXVLU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmhZM1JwYjI1eklIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tHRmpkR2x2Ym5NdWFXNWtaWGhQWmloaFkzUnBiMjRwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnWVdOMGFXOXVjeTV3ZFhOb0tHRmpkR2x2YmlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FYTkJZM1JwYjI1RGIyMXdiR1YwWlNncElIdGNiaUFnSUNCeVpYUjFjbTRnS0hSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5QTlQVDBnTUNrN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHRmpkR2x2Ym5Nc0lIQnliM0J6S1NBOVBpQnVaWGNnVUdGeVlXeHNaV3dvZXlCaFkzUnBiMjV6TENBdUxpNXdjbTl3Y3lCOUtUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wYXJhbGxlbC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGh5c2ljcyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQaHlzaWNzLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBQaHlzaWNzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaHlzaWNzKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUGh5c2ljcy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhdXRvU3RvcFNwZWVkID0gX3Byb3BzLmF1dG9TdG9wU3BlZWQsXG4gICAgICAgIGFjY2VsZXJhdGlvbiA9IF9wcm9wcy5hY2NlbGVyYXRpb24sXG4gICAgICAgIGZyaWN0aW9uID0gX3Byb3BzLmZyaWN0aW9uLFxuICAgICAgICB2ZWxvY2l0eSA9IF9wcm9wcy52ZWxvY2l0eSxcbiAgICAgICAgc3ByaW5nID0gX3Byb3BzLnNwcmluZyxcbiAgICAgICAgdG8gPSBfcHJvcHMudG87XG5cbiAgICB2YXIgbmV3VmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICB2YXIgZWxhcHNlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcblxuICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChhY2NlbGVyYXRpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShhY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGZyaWN0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGZyaWN0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSAqPSBNYXRoLnBvdygxIC0gZnJpY3Rpb24sIGVsYXBzZWQgLyAxMDApO1xuICAgIH1cblxuICAgIGlmIChzcHJpbmcgJiYgdG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGRpc3RhbmNlVG9UYXJnZXQgPSB0byAtIHRoaXMuY3VycmVudDtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkoc3ByaW5nLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB2ZWxvY2l0eVxuICAgIHRoaXMuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkobmV3VmVsb2NpdHksIGVsYXBzZWQpO1xuICAgIHRoaXMucHJvcHMudmVsb2NpdHkgPSBuZXdWZWxvY2l0eTtcblxuICAgIC8vIENoZWNrIGlmIHNpbXVsYXRpb24gaXMgY29tcGxldGVcbiAgICAvLyBXZSBkbyB0aGlzIGhlcmUgaW5zdGVhZCBvZiBgaXNBY3Rpb25Db21wbGV0ZWAgYXMgaXQgYWxsb3dzIHVzXG4gICAgLy8gdG8gY2xhbXAgZHVyaW5nIHRoaXMgdXBkYXRlXG4gICAgdGhpcy5pc0NvbXBsZXRlID0gYXV0b1N0b3BTcGVlZCAhPT0gZmFsc2UgJiYgKCFuZXdWZWxvY2l0eSB8fCBNYXRoLmFicyhuZXdWZWxvY2l0eSkgPD0gYXV0b1N0b3BTcGVlZCk7XG5cbiAgICBpZiAodGhpcy5pc0NvbXBsZXRlICYmIHNwcmluZykge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdG87XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBQaHlzaWNzLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICB9O1xuXG4gIHJldHVybiBQaHlzaWNzO1xufShfMi5kZWZhdWx0KTtcblxuUGh5c2ljcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjY2VsZXJhdGlvbjogMCxcbiAgZnJpY3Rpb246IDAsXG4gIHZlbG9jaXR5OiAwLFxuICBhdXRvU3RvcFNwZWVkOiAwLjAwMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGh5c2ljcyhwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0JvZVhOcFkzTXVhbk1pWFN3aWJtRnRaWE1pT2xzaVVHaDVjMmxqY3lJc0luVndaR0YwWlNJc0luQnliM0J6SWl3aVlYVjBiMU4wYjNCVGNHVmxaQ0lzSW1GalkyVnNaWEpoZEdsdmJpSXNJbVp5YVdOMGFXOXVJaXdpZG1Wc2IyTnBkSGtpTENKemNISnBibWNpTENKMGJ5SXNJbTVsZDFabGJHOWphWFI1SWl3aVpXeGhjSE5sWkNJc0luVnVaR1ZtYVc1bFpDSXNJbVJwYzNSaGJtTmxWRzlVWVhKblpYUWlMQ0pqZFhKeVpXNTBJaXdpYVhORGIyMXdiR1YwWlNJc0lrMWhkR2dpTENKaFluTWlMQ0pwYzBGamRHbHZia052YlhCc1pYUmxJaXdpWkdWbVlYVnNkRkJ5YjNCeklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3UVVGRFFUczdPenM3T3pzN096dEpRVVZOUVN4UE96czdPenM3T3pzN2IwSkJVVXBETEUwc2NVSkJRVk03UVVGQlFTeHBRa0ZEYVVVc1MwRkJTME1zUzBGRWRFVTdRVUZCUVN4UlFVTkRReXhoUVVSRUxGVkJRME5CTEdGQlJFUTdRVUZCUVN4UlFVTm5Ra01zV1VGRWFFSXNWVUZEWjBKQkxGbEJSR2hDTzBGQlFVRXNVVUZET0VKRExGRkJSRGxDTEZWQlF6aENRU3hSUVVRNVFqdEJRVUZCTEZGQlEzZERReXhSUVVSNFF5eFZRVU4zUTBFc1VVRkVlRU03UVVGQlFTeFJRVU5yUkVNc1RVRkViRVFzVlVGRGEwUkJMRTFCUkd4RU8wRkJRVUVzVVVGRE1FUkRMRVZCUkRGRUxGVkJRekJFUVN4RlFVUXhSRHM3UVVGRlVDeFJRVUZKUXl4alFVRmpTQ3hSUVVGc1FqdEJRVU5CTEZGQlFVMUpMRlZCUVZVc2IwTkJRV2hDT3p0QlFVVkJPMEZCUTBFc1VVRkJTVTRzV1VGQlNpeEZRVUZyUWp0QlFVTm9Ra3NzY1VKQlFXVXNlVUpCUVdOTUxGbEJRV1FzUlVGQk5FSk5MRTlCUVRWQ0xFTkJRV1k3UVVGRFJEczdRVUZGUkR0QlFVTkJMRkZCUVVsTUxGRkJRVW9zUlVGQll6dEJRVU5hU1N3NFFrRkJaMElzU1VGQlNVb3NVVUZCY0VJc1JVRkJhME5MTEZWQlFWVXNSMEZCTlVNN1FVRkRSRHM3UVVGRlJDeFJRVUZKU0N4VlFVRlZReXhQUVVGUFJ5eFRRVUZ5UWl4RlFVRm5RenRCUVVNNVFpeFZRVUZOUXl4dFFrRkJiVUpLTEV0QlFVc3NTMEZCUzBzc1QwRkJia003UVVGRFFVb3NjVUpCUVdWSExHMUNRVUZ0UWl4NVFrRkJZMHdzVFVGQlpDeEZRVUZ6UWtjc1QwRkJkRUlzUTBGQmJFTTdRVUZEUkRzN1FVRkZSRHRCUVVOQkxGTkJRVXRITEU5QlFVd3NTVUZCWjBJc2VVSkJRV05LTEZkQlFXUXNSVUZCTWtKRExFOUJRVE5DTEVOQlFXaENPMEZCUTBFc1UwRkJTMUlzUzBGQlRDeERRVUZYU1N4UlFVRllMRWRCUVhOQ1J5eFhRVUYwUWpzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZMU3l4VlFVRk1MRWRCUVcxQ1dDeHJRa0ZCYTBJc1MwRkJiRUlzUzBGQk5FSXNRMEZCUTAwc1YwRkJSQ3hKUVVGblFrMHNTMEZCUzBNc1IwRkJUQ3hEUVVGVFVDeFhRVUZVTEV0QlFYbENUaXhoUVVGeVJTeERRVUZ1UWpzN1FVRkZRU3hSUVVGSkxFdEJRVXRYTEZWQlFVd3NTVUZCYlVKUUxFMUJRWFpDTEVWQlFTdENPMEZCUXpkQ0xGZEJRVXROTEU5QlFVd3NSMEZCWlV3c1JVRkJaanRCUVVORU96dEJRVVZFTEZkQlFVOHNTMEZCUzBzc1QwRkJXanRCUVVORUxFYzdPMjlDUVVWRVNTeG5RaXdyUWtGQmJVSTdRVUZEYWtJc1YwRkJUeXhMUVVGTFNDeFZRVUZhTzBGQlEwUXNSenM3T3pzN1FVRTVRMGRrTEU4c1EwRkRSMnRDTEZrc1IwRkJaVHRCUVVOd1FtUXNaMEpCUVdNc1EwRkVUVHRCUVVWd1FrTXNXVUZCVlN4RFFVWlZPMEZCUjNCQ1F5eFpRVUZWTEVOQlNGVTdRVUZKY0VKSUxHbENRVUZsTzBGQlNrc3NRenM3YTBKQlowUlVMRlZCUVVORUxFdEJRVVE3UVVGQlFTeFRRVUZYTEVsQlFVbEdMRTlCUVVvc1EwRkJXVVVzUzBGQldpeERRVUZZTzBGQlFVRXNReUlzSW1acGJHVWlPaUp3YUhsemFXTnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNXBiWEJ2Y25RZ2V5QjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVWdmU0JtY205dElDY3VMaTltY21GdFpYTjVibU1uTzF4dWFXMXdiM0owSUhzZ2MzQmxaV1JRWlhKR2NtRnRaU0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVZMnhoYzNNZ1VHaDVjMmxqY3lCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lITjBZWFJwWXlCa1pXWmhkV3gwVUhKdmNITWdQU0I3WEc0Z0lDQWdZV05qWld4bGNtRjBhVzl1T2lBd0xGeHVJQ0FnSUdaeWFXTjBhVzl1T2lBd0xGeHVJQ0FnSUhabGJHOWphWFI1T2lBd0xGeHVJQ0FnSUdGMWRHOVRkRzl3VTNCbFpXUTZJREF1TURBeFhHNGdJSDFjYmx4dUlDQjFjR1JoZEdVb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCaGRYUnZVM1J2Y0ZOd1pXVmtMQ0JoWTJObGJHVnlZWFJwYjI0c0lHWnlhV04wYVc5dUxDQjJaV3h2WTJsMGVTd2djM0J5YVc1bkxDQjBieUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCc1pYUWdibVYzVm1Wc2IyTnBkSGtnUFNCMlpXeHZZMmwwZVR0Y2JpQWdJQ0JqYjI1emRDQmxiR0Z3YzJWa0lEMGdkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxLQ2s3WEc1Y2JpQWdJQ0F2THlCQmNIQnNlU0JoWTJObGJHVnlZWFJwYjI0Z2RHOGdkbVZzYjJOcGRIbGNiaUFnSUNCcFppQW9ZV05qWld4bGNtRjBhVzl1S1NCN1hHNGdJQ0FnSUNCdVpYZFdaV3h2WTJsMGVTQXJQU0J6Y0dWbFpGQmxja1p5WVcxbEtHRmpZMlZzWlhKaGRHbHZiaXdnWld4aGNITmxaQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnUVhCd2JIa2dabkpwWTNScGIyNGdkRzhnZG1Wc2IyTnBkSGxjYmlBZ0lDQnBaaUFvWm5KcFkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUc1bGQxWmxiRzlqYVhSNUlDbzlJQ2d4SUMwZ1puSnBZM1JwYjI0cElDb3FJQ2hsYkdGd2MyVmtJQzhnTVRBd0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9jM0J5YVc1bklDWW1JSFJ2SUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJR052Ym5OMElHUnBjM1JoYm1ObFZHOVVZWEpuWlhRZ1BTQjBieUF0SUhSb2FYTXVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lHNWxkMVpsYkc5amFYUjVJQ3M5SUdScGMzUmhibU5sVkc5VVlYSm5aWFFnS2lCemNHVmxaRkJsY2taeVlXMWxLSE53Y21sdVp5d2daV3hoY0hObFpDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdRWEJ3YkhrZ2RtVnNiMk5wZEhsY2JpQWdJQ0IwYUdsekxtTjFjbkpsYm5RZ0t6MGdjM0JsWldSUVpYSkdjbUZ0WlNodVpYZFdaV3h2WTJsMGVTd2daV3hoY0hObFpDazdYRzRnSUNBZ2RHaHBjeTV3Y205d2N5NTJaV3h2WTJsMGVTQTlJRzVsZDFabGJHOWphWFI1TzF4dVhHNGdJQ0FnTHk4Z1EyaGxZMnNnYVdZZ2MybHRkV3hoZEdsdmJpQnBjeUJqYjIxd2JHVjBaVnh1SUNBZ0lDOHZJRmRsSUdSdklIUm9hWE1nYUdWeVpTQnBibk4wWldGa0lHOW1JR0JwYzBGamRHbHZia052YlhCc1pYUmxZQ0JoY3lCcGRDQmhiR3h2ZDNNZ2RYTmNiaUFnSUNBdkx5QjBieUJqYkdGdGNDQmtkWEpwYm1jZ2RHaHBjeUIxY0dSaGRHVmNiaUFnSUNCMGFHbHpMbWx6UTI5dGNHeGxkR1VnUFNBb1lYVjBiMU4wYjNCVGNHVmxaQ0FoUFQwZ1ptRnNjMlVnSmlZZ0tDRnVaWGRXWld4dlkybDBlU0I4ZkNCTllYUm9MbUZpY3lodVpYZFdaV3h2WTJsMGVTa2dQRDBnWVhWMGIxTjBiM0JUY0dWbFpDa3BPMXh1WEc0Z0lDQWdhV1lnS0hSb2FYTXVhWE5EYjIxd2JHVjBaU0FtSmlCemNISnBibWNwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRDQTlJSFJ2TzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1OMWNuSmxiblE3WEc0Z0lIMWNibHh1SUNCcGMwRmpkR2x2YmtOdmJYQnNaWFJsS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtbHpRMjl0Y0d4bGRHVTdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSEJ5YjNCektTQTlQaUJ1WlhjZ1VHaDVjMmxqY3lod2NtOXdjeWs3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF92YWx1ZSA9IHJlcXVpcmUoJy4vdmFsdWUnKTtcblxudmFyIF92YWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZSk7XG5cbnZhciBfY29tcG9zaXRlID0gcmVxdWlyZSgnLi9jb21wb3NpdGUnKTtcblxudmFyIF9jb21wb3NpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBjcmVhdGVQb2ludGVyKF9yZWYyLCBfcmVmKSB7XG4gIHZhciB4ID0gX3JlZjIueCxcbiAgICAgIHkgPSBfcmVmMi55O1xuXG4gIHZhciBldmVudFRvUG9pbnRzID0gX3JlZi5ldmVudFRvUG9pbnRzLFxuICAgICAgbW92ZUV2ZW50ID0gX3JlZi5tb3ZlRXZlbnQsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2V2ZW50VG9Qb2ludHMnLCAnbW92ZUV2ZW50J10pO1xuXG4gIHZhciBwb2ludGVyID0gKDAsIF9jb21wb3NpdGUyLmRlZmF1bHQpKHtcbiAgICB4OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh4KSxcbiAgICB5OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh5KVxuICB9LCBfZXh0ZW5kcyh7XG4gICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZVxuICB9LCBwcm9wcykpO1xuXG4gIHZhciB1cGRhdGVQb2ludGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAocHJvcHMucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgcG9pbnRzID0gZXZlbnRUb1BvaW50cyhlKTtcbiAgICBwb2ludGVyLnguc2V0KHBvaW50cy54KTtcbiAgICBwb2ludGVyLnkuc2V0KHBvaW50cy55KTtcbiAgfTtcblxuICBwb2ludGVyLnNldFByb3BzKHtcbiAgICBfb25TdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlcik7XG4gICAgfSxcbiAgICBfb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVQb2ludGVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwb2ludGVyO1xufVxuXG52YXIgbW91c2VFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4ge1xuICAgIHg6IGUucGFnZVgsXG4gICAgeTogZS5wYWdlWVxuICB9O1xufTtcblxudmFyIHRvdWNoRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKF9yZWYzKSB7XG4gIHZhciBjaGFuZ2VkVG91Y2hlcyA9IF9yZWYzLmNoYW5nZWRUb3VjaGVzO1xuICByZXR1cm4ge1xuICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICB9O1xufTtcblxudmFyIGdldE5hdGl2ZUV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlLm5hdGl2ZUV2ZW50IHx8IGU7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZSwgcHJvcHMpIHtcbiAgdmFyIG5hdGl2ZUV2ZW50ID0gZ2V0TmF0aXZlRXZlbnQoZSk7XG4gIHJldHVybiBuYXRpdmVFdmVudC50b3VjaGVzID8gY3JlYXRlUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwgX2V4dGVuZHMoe1xuICAgIG1vdmVFdmVudDogJ3RvdWNobW92ZScsXG4gICAgZXZlbnRUb1BvaW50czogdG91Y2hFdmVudFRvUG9pbnRcbiAgfSwgcHJvcHMpKSA6IGNyZWF0ZVBvaW50ZXIobW91c2VFdmVudFRvUG9pbnQoZSksIF9leHRlbmRzKHtcbiAgICBtb3ZlRXZlbnQ6ICdtb3VzZW1vdmUnLFxuICAgIGV2ZW50VG9Qb2ludHM6IG1vdXNlRXZlbnRUb1BvaW50XG4gIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0J2YVc1MFpYSXVhbk1pWFN3aWJtRnRaWE1pT2xzaVkzSmxZWFJsVUc5cGJuUmxjaUlzSW5naUxDSjVJaXdpWlhabGJuUlViMUJ2YVc1MGN5SXNJbTF2ZG1WRmRtVnVkQ0lzSW5CeWIzQnpJaXdpY0c5cGJuUmxjaUlzSW5CaGMzTnBkbVVpTENKd2NtVjJaVzUwUkdWbVlYVnNkQ0lzSW5Wd1pHRjBaVkJ2YVc1MFpYSWlMQ0psSWl3aWNHOXBiblJ6SWl3aWMyVjBJaXdpYzJWMFVISnZjSE1pTENKZmIyNVRkR0Z5ZENJc0ltUnZZM1Z0Wlc1MElpd2laRzlqZFcxbGJuUkZiR1Z0Wlc1MElpd2lZV1JrUlhabGJuUk1hWE4wWlc1bGNpSXNJbDl2YmxOMGIzQWlMQ0p5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5SWl3aWJXOTFjMlZGZG1WdWRGUnZVRzlwYm5RaUxDSndZV2RsV0NJc0luQmhaMlZaSWl3aWRHOTFZMmhGZG1WdWRGUnZVRzlwYm5RaUxDSmphR0Z1WjJWa1ZHOTFZMmhsY3lJc0ltTnNhV1Z1ZEZnaUxDSmpiR2xsYm5SWklpd2laMlYwVG1GMGFYWmxSWFpsYm5RaUxDSnZjbWxuYVc1aGJFVjJaVzUwSWl3aWJtRjBhWFpsUlhabGJuUWlMQ0owYjNWamFHVnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenRCUVVOQk96czdPenM3T3p0QlFVVkJMRk5CUVZOQkxHRkJRVlFzWTBGQmVVVTdRVUZCUVN4TlFVRm9SRU1zUTBGQlowUXNVMEZCYUVSQkxFTkJRV2RFTzBGQlFVRXNUVUZCTjBORExFTkJRVFpETEZOQlFUZERRU3hEUVVFMlF6czdRVUZCUVN4TlFVRjBRME1zWVVGQmMwTXNVVUZCZEVOQkxHRkJRWE5ETzBGQlFVRXNUVUZCZGtKRExGTkJRWFZDTEZGQlFYWkNRU3hUUVVGMVFqdEJRVUZCTEUxQlFWUkRMRXRCUVZNN08wRkJRM1pGTEUxQlFVMURMRlZCUVZVc2VVSkJRVlU3UVVGRGVFSk1MRTlCUVVjc2NVSkJRVTFCTEVOQlFVNHNRMEZFY1VJN1FVRkZlRUpETEU5QlFVY3NjVUpCUVUxQkxFTkJRVTQ3UVVGR2NVSXNSMEZCVmp0QlFVbGtTeXhoUVVGVExFbEJTa3M3UVVGTFpFTXNiMEpCUVdkQ08wRkJURVlzUzBGTldFZ3NTMEZPVnl4RlFVRm9RanM3UVVGVFFTeE5RVUZOU1N4blFrRkJaMElzVlVGQlEwTXNRMEZCUkN4RlFVRlBPMEZCUXpOQ0xGRkJRVWxNTEUxQlFVMUhMR05CUVZZc1JVRkJNRUk3UVVGRGVFSkZMRkZCUVVWR0xHTkJRVVk3UVVGRFJEczdRVUZGUkN4UlFVRk5SeXhUUVVGVFVpeGpRVUZqVHl4RFFVRmtMRU5CUVdZN1FVRkRRVW9zV1VGQlVVd3NRMEZCVWl4RFFVRlZWeXhIUVVGV0xFTkJRV05FTEU5QlFVOVdMRU5CUVhKQ08wRkJRMEZMTEZsQlFWRktMRU5CUVZJc1EwRkJWVlVzUjBGQlZpeERRVUZqUkN4UFFVRlBWQ3hEUVVGeVFqdEJRVU5FTEVkQlVrUTdPMEZCVlVGSkxGVkJRVkZQTEZGQlFWSXNRMEZCYVVJN1FVRkRaa01zWTBGQlZUdEJRVUZCTEdGQlFVMURMRk5CUVZORExHVkJRVlFzUTBGQmVVSkRMR2RDUVVGNlFpeERRVUV3UTJJc1UwRkJNVU1zUlVGQmNVUkxMR0ZCUVhKRUxFTkJRVTQ3UVVGQlFTeExRVVJMTzBGQlJXWlRMR0ZCUVZNN1FVRkJRU3hoUVVGTlNDeFRRVUZUUXl4bFFVRlVMRU5CUVhsQ1J5eHRRa0ZCZWtJc1EwRkJOa05tTEZOQlFUZERMRVZCUVhkRVN5eGhRVUY0UkN4RFFVRk9PMEZCUVVFN1FVRkdUU3hIUVVGcVFqczdRVUZMUVN4VFFVRlBTQ3hQUVVGUU8wRkJRMFE3TzBGQlJVUXNTVUZCVFdNc2IwSkJRVzlDTEZWQlFVTldMRU5CUVVRN1FVRkJRU3hUUVVGUk8wRkJRMmhEVkN4UFFVRkhVeXhGUVVGRlZ5eExRVVF5UWp0QlFVVm9RMjVDTEU5QlFVZFJMRVZCUVVWWk8wRkJSakpDTEVkQlFWSTdRVUZCUVN4RFFVRXhRanM3UVVGTFFTeEpRVUZOUXl4dlFrRkJiMEk3UVVGQlFTeE5RVUZIUXl4alFVRklMRk5CUVVkQkxHTkJRVWc3UVVGQlFTeFRRVUY1UWp0QlFVTnFSSFpDTEU5QlFVZDFRaXhsUVVGbExFTkJRV1lzUlVGQmEwSkRMRTlCUkRSQ08wRkJSV3BFZGtJc1QwRkJSM05DTEdWQlFXVXNRMEZCWml4RlFVRnJRa1U3UVVGR05FSXNSMEZCZWtJN1FVRkJRU3hEUVVFeFFqczdRVUZMUVN4SlFVRk5ReXhwUWtGQmFVSXNWVUZCUTJwQ0xFTkJRVVE3UVVGQlFTeFRRVUZQUVN4RlFVRkZhMElzWVVGQlJpeEpRVUZ0UW14Q0xFVkJRVVZ0UWl4WFFVRnlRaXhKUVVGdlEyNUNMRU5CUVRORE8wRkJRVUVzUTBGQmRrSTdPMnRDUVVWbExGVkJRVU5CTEVOQlFVUXNSVUZCU1V3c1MwRkJTaXhGUVVGak8wRkJRek5DTEUxQlFVMTNRaXhqUVVGalJpeGxRVUZsYWtJc1EwRkJaaXhEUVVGd1FqdEJRVU5CTEZOQlFWRnRRaXhaUVVGWlF5eFBRVUZpTEVkQlEwdzVRaXhqUVVGamRVSXNhMEpCUVd0Q1lpeERRVUZzUWl4RFFVRmtPMEZCUTBWT0xHVkJRVmNzVjBGRVlqdEJRVVZGUkN4dFFrRkJaVzlDTzBGQlJtcENMRXRCUjB0c1FpeExRVWhNTEVWQlJFc3NSMEZOVEV3c1kwRkJZMjlDTEd0Q1FVRnJRbFlzUTBGQmJFSXNRMEZCWkR0QlFVTkZUaXhsUVVGWExGZEJSR0k3UVVGRlJVUXNiVUpCUVdWcFFqdEJRVVpxUWl4TFFVZExaaXhMUVVoTUxFVkJUa1k3UVVGWFJDeERJaXdpWm1sc1pTSTZJbkJ2YVc1MFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RtRnNkV1VnWm5KdmJTQW5MaTkyWVd4MVpTYzdYRzVwYlhCdmNuUWdZMjl0Y0c5emFYUmxJR1p5YjIwZ0p5NHZZMjl0Y0c5emFYUmxKenRjYmx4dVpuVnVZM1JwYjI0Z1kzSmxZWFJsVUc5cGJuUmxjaWg3SUhnc0lIa2dmU3dnZXlCbGRtVnVkRlJ2VUc5cGJuUnpMQ0J0YjNabFJYWmxiblFzSUM0dUxuQnliM0J6SUgwcElIdGNiaUFnWTI5dWMzUWdjRzlwYm5SbGNpQTlJR052YlhCdmMybDBaU2g3WEc0Z0lDQWdlRG9nZG1Gc2RXVW9lQ2tzWEc0Z0lDQWdlVG9nZG1Gc2RXVW9lU2xjYmlBZ2ZTd2dlMXh1SUNBZ0lIQmhjM05wZG1VNklIUnlkV1VzWEc0Z0lDQWdjSEpsZG1WdWRFUmxabUYxYkhRNklIUnlkV1VzWEc0Z0lDQWdMaTR1Y0hKdmNITmNiaUFnZlNrN1hHNWNiaUFnWTI5dWMzUWdkWEJrWVhSbFVHOXBiblJsY2lBOUlDaGxLU0E5UGlCN1hHNGdJQ0FnYVdZZ0tIQnliM0J6TG5CeVpYWmxiblJFWldaaGRXeDBLU0I3WEc0Z0lDQWdJQ0JsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZMjl1YzNRZ2NHOXBiblJ6SUQwZ1pYWmxiblJVYjFCdmFXNTBjeWhsS1R0Y2JpQWdJQ0J3YjJsdWRHVnlMbmd1YzJWMEtIQnZhVzUwY3k1NEtUdGNiaUFnSUNCd2IybHVkR1Z5TG5rdWMyVjBLSEJ2YVc1MGN5NTVLVHRjYmlBZ2ZUdGNibHh1SUNCd2IybHVkR1Z5TG5ObGRGQnliM0J6S0h0Y2JpQWdJQ0JmYjI1VGRHRnlkRG9nS0NrZ1BUNGdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb2JXOTJaVVYyWlc1MExDQjFjR1JoZEdWUWIybHVkR1Z5S1N4Y2JpQWdJQ0JmYjI1VGRHOXdPaUFvS1NBOVBpQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpaHRiM1psUlhabGJuUXNJSFZ3WkdGMFpWQnZhVzUwWlhJcFhHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQndiMmx1ZEdWeU8xeHVmVnh1WEc1amIyNXpkQ0J0YjNWelpVVjJaVzUwVkc5UWIybHVkQ0E5SUNobEtTQTlQaUFvZTF4dUlDQjRPaUJsTG5CaFoyVllMRnh1SUNCNU9pQmxMbkJoWjJWWlhHNTlLVHRjYmx4dVkyOXVjM1FnZEc5MVkyaEZkbVZ1ZEZSdlVHOXBiblFnUFNBb2V5QmphR0Z1WjJWa1ZHOTFZMmhsY3lCOUtTQTlQaUFvZTF4dUlDQjRPaUJqYUdGdVoyVmtWRzkxWTJobGMxc3dYUzVqYkdsbGJuUllMRnh1SUNCNU9pQmphR0Z1WjJWa1ZHOTFZMmhsYzFzd1hTNWpiR2xsYm5SWlhHNTlLVHRjYmx4dVkyOXVjM1FnWjJWMFRtRjBhWFpsUlhabGJuUWdQU0FvWlNrZ1BUNGdaUzV2Y21sbmFXNWhiRVYyWlc1MElIeDhJR1V1Ym1GMGFYWmxSWFpsYm5RZ2ZId2daVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dVc0lIQnliM0J6S1NBOVBpQjdYRzRnSUdOdmJuTjBJRzVoZEdsMlpVVjJaVzUwSUQwZ1oyVjBUbUYwYVhabFJYWmxiblFvWlNrN1hHNGdJSEpsZEhWeWJpQW9ibUYwYVhabFJYWmxiblF1ZEc5MVkyaGxjeWtnUDF4dUlDQWdJR055WldGMFpWQnZhVzUwWlhJb2RHOTFZMmhGZG1WdWRGUnZVRzlwYm5Rb1pTa3NJSHRjYmlBZ0lDQWdJRzF2ZG1WRmRtVnVkRG9nSjNSdmRXTm9iVzkyWlNjc1hHNGdJQ0FnSUNCbGRtVnVkRlJ2VUc5cGJuUnpPaUIwYjNWamFFVjJaVzUwVkc5UWIybHVkQ3hjYmlBZ0lDQWdJQzR1TG5CeWIzQnpYRzRnSUNBZ2ZTa2dPbHh1SUNBZ0lHTnlaV0YwWlZCdmFXNTBaWElvYlc5MWMyVkZkbVZ1ZEZSdlVHOXBiblFvWlNrc0lIdGNiaUFnSUNBZ0lHMXZkbVZGZG1WdWREb2dKMjF2ZFhObGJXOTJaU2NzWEc0Z0lDQWdJQ0JsZG1WdWRGUnZVRzlwYm5Sek9pQnRiM1Z6WlVWMlpXNTBWRzlRYjJsdWRDeGNiaUFnSUNBZ0lDNHVMbkJ5YjNCelhHNGdJQ0FnZlNrN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wb2ludGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF9lYXNpbmcgPSByZXF1aXJlKCcuLi9pbmMvZWFzaW5nJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGNsYW1wUHJvZ3Jlc3MgPSAoMCwgX3RyYW5zZm9ybWVycy5jbGFtcCkoMCwgMSk7XG5cbnZhciBORVhUX1NURVBTID0ge1xuICBsb29wOiBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICByZXR1cm4gdHdlZW4uc3RhcnQoKTtcbiAgfSxcbiAgeW95bzogZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgcmV0dXJuIHR3ZWVuLnJldmVyc2UoKS5zdGFydCgpO1xuICB9LFxuICBmbGlwOiBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICByZXR1cm4gdHdlZW4uZmxpcCgpLnN0YXJ0KCk7XG4gIH1cbn07XG5cbnZhciBUd2VlbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhUd2VlbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3ZWVuKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVHdlZW4ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBkdXJhdGlvbiA9IF9wcm9wcy5kdXJhdGlvbixcbiAgICAgICAgcGxheURpcmVjdGlvbiA9IF9wcm9wcy5wbGF5RGlyZWN0aW9uO1xuXG5cbiAgICB0aGlzLmVsYXBzZWQgPSBwbGF5RGlyZWN0aW9uID09PSAxID8gMCA6IGR1cmF0aW9uO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBkdXJhdGlvbiA9IF9wcm9wczIuZHVyYXRpb24sXG4gICAgICAgIGVhc2UgPSBfcHJvcHMyLmVhc2UsXG4gICAgICAgIGZyb20gPSBfcHJvcHMyLmZyb20sXG4gICAgICAgIHRvID0gX3Byb3BzMi50byxcbiAgICAgICAgcGxheURpcmVjdGlvbiA9IF9wcm9wczIucGxheURpcmVjdGlvbjtcblxuXG4gICAgdGhpcy5lbGFwc2VkICs9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKSAqIHBsYXlEaXJlY3Rpb247XG5cbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShmcm9tLCB0bywgZWFzZShjbGFtcFByb2dyZXNzKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoMCwgZHVyYXRpb24sIHRoaXMuZWxhcHNlZCkpKSk7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMzLmR1cmF0aW9uLFxuICAgICAgICBwbGF5RGlyZWN0aW9uID0gX3Byb3BzMy5wbGF5RGlyZWN0aW9uLFxuICAgICAgICB5b3lvID0gX3Byb3BzMy55b3lvLFxuICAgICAgICBsb29wID0gX3Byb3BzMy5sb29wLFxuICAgICAgICBmbGlwID0gX3Byb3BzMy5mbGlwO1xuXG4gICAgdmFyIGlzQ29tcGxldGUgPSBwbGF5RGlyZWN0aW9uID09PSAxID8gdGhpcy5lbGFwc2VkID49IGR1cmF0aW9uIDogdGhpcy5lbGFwc2VkIDw9IDA7XG5cbiAgICBpZiAoaXNDb21wbGV0ZSAmJiAoeW95byB8fCBsb29wIHx8IGZsaXApKSB7XG4gICAgICB2YXIgaXNTdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIE5FWFRfU1RFUFMpIHtcbiAgICAgICAgdmFyIG5leHRTdGVwID0gTkVYVF9TVEVQU1trZXldO1xuICAgICAgICB2YXIgY291bnRQcm9wID0ga2V5ICsgJ0NvdW50JztcbiAgICAgICAgdmFyIHN0ZXBNYXggPSB0aGlzLmdldFByb3Aoa2V5KTtcbiAgICAgICAgdmFyIHN0ZXBDb3VudCA9IHRoaXMuZ2V0UHJvcChjb3VudFByb3ApO1xuXG4gICAgICAgIGlmIChzdGVwTWF4ID4gc3RlcENvdW50KSB7XG4gICAgICAgICAgdmFyIF9zZXRQcm9wcztcblxuICAgICAgICAgIHRoaXMuc2V0UHJvcHMoKF9zZXRQcm9wcyA9IHt9LCBfc2V0UHJvcHNbY291bnRQcm9wXSA9IHN0ZXBDb3VudCArIDEsIF9zZXRQcm9wcykpO1xuICAgICAgICAgIG5leHRTdGVwKHRoaXMpO1xuICAgICAgICAgIGlzU3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdGVwVGFrZW4pIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNDb21wbGV0ZTtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuZ2V0RWxhcHNlZCA9IGZ1bmN0aW9uIGdldEVsYXBzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZDtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuZmxpcCA9IGZ1bmN0aW9uIGZsaXAoKSB7XG4gICAgdGhpcy5lbGFwc2VkID0gdGhpcy5wcm9wcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcbiAgICB2YXIgX3JlZiA9IFt0aGlzLnByb3BzLnRvLCB0aGlzLnByb3BzLmZyb21dO1xuICAgIHRoaXMucHJvcHMuZnJvbSA9IF9yZWZbMF07XG4gICAgdGhpcy5wcm9wcy50byA9IF9yZWZbMV07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgdGhpcy5wcm9wcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBUd2Vlbjtcbn0oXzIuZGVmYXVsdCk7XG5cblR3ZWVuLmRlZmF1bHRQcm9wcyA9IHtcbiAgZHVyYXRpb246IDMwMCxcbiAgZWFzZTogX2Vhc2luZy5lYXNlT3V0LFxuICBmcm9tOiAwLFxuICB0bzogMSxcbiAgZmxpcDogMCxcbiAgZmxpcENvdW50OiAwLFxuICB5b3lvOiAwLFxuICB5b3lvQ291bnQ6IDAsXG4gIGxvb3A6IDAsXG4gIGxvb3BDb3VudDogMCxcbiAgcGxheURpcmVjdGlvbjogMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmdzWzBdO1xuXG4gICAgcmV0dXJuIG5ldyBUd2Vlbihwcm9wcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGZyb20gPSBhcmdzWzBdLFxuICAgICAgICB0byA9IGFyZ3NbMV0sXG4gICAgICAgIGR1cmF0aW9uID0gYXJnc1syXSxcbiAgICAgICAgZWFzZSA9IGFyZ3NbM10sXG4gICAgICAgIF9wcm9wczQgPSBhcmdzWzRdO1xuXG4gICAgcmV0dXJuIG5ldyBUd2VlbihfZXh0ZW5kcyh7IGZyb206IGZyb20sIHRvOiB0bywgZHVyYXRpb246IGR1cmF0aW9uLCBlYXNlOiBlYXNlIH0sIF9wcm9wczQpKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNSM1pXVnVMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTnNZVzF3VUhKdlozSmxjM01pTENKT1JWaFVYMU5VUlZCVElpd2liRzl2Y0NJc0luUjNaV1Z1SWl3aWMzUmhjblFpTENKNWIzbHZJaXdpY21WMlpYSnpaU0lzSW1ac2FYQWlMQ0pVZDJWbGJpSXNJbTl1VTNSaGNuUWlMQ0p3Y205d2N5SXNJbVIxY21GMGFXOXVJaXdpY0d4aGVVUnBjbVZqZEdsdmJpSXNJbVZzWVhCelpXUWlMQ0oxY0dSaGRHVWlMQ0psWVhObElpd2labkp2YlNJc0luUnZJaXdpYVhOQlkzUnBiMjVEYjIxd2JHVjBaU0lzSW1selEyOXRjR3hsZEdVaUxDSnBjMU4wWlhCVVlXdGxiaUlzSW10bGVTSXNJbTVsZUhSVGRHVndJaXdpWTI5MWJuUlFjbTl3SWl3aWMzUmxjRTFoZUNJc0ltZGxkRkJ5YjNBaUxDSnpkR1Z3UTI5MWJuUWlMQ0p6WlhSUWNtOXdjeUlzSW1kbGRFVnNZWEJ6WldRaUxDSmtaV1poZFd4MFVISnZjSE1pTENKbWJHbHdRMjkxYm5RaUxDSjViM2x2UTI5MWJuUWlMQ0pzYjI5d1EyOTFiblFpTENKaGNtZHpJaXdpYkdWdVozUm9JbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenRCUVVOQk96dEJRVU5CT3p0QlFVTkJPenRCUVVOQk96czdPenM3T3pzN08wRkJSVUVzU1VGQlRVRXNaMEpCUVdkQ0xIbENRVUZOTEVOQlFVNHNSVUZCVXl4RFFVRlVMRU5CUVhSQ096dEJRVVZCTEVsQlFVMURMR0ZCUVdFN1FVRkRha0pETEZGQlFVMHNWVUZCUTBNc1MwRkJSRHRCUVVGQkxGZEJRVmRCTEUxQlFVMURMRXRCUVU0c1JVRkJXRHRCUVVGQkxFZEJSRmM3UVVGRmFrSkRMRkZCUVUwc1ZVRkJRMFlzUzBGQlJEdEJRVUZCTEZkQlFWZEJMRTFCUVUxSExFOUJRVTRzUjBGQlowSkdMRXRCUVdoQ0xFVkJRVmc3UVVGQlFTeEhRVVpYTzBGQlIycENSeXhSUVVGTkxGVkJRVU5LTEV0QlFVUTdRVUZCUVN4WFFVRlhRU3hOUVVGTlNTeEpRVUZPTEVkQlFXRklMRXRCUVdJc1JVRkJXRHRCUVVGQk8wRkJTRmNzUTBGQmJrSTdPMGxCVFUxSkxFczdPenM3T3pzN096dHJRa0ZsU2tNc1R5eHpRa0ZCVlR0QlFVRkJMR2xDUVVNMFFpeExRVUZMUXl4TFFVUnFRenRCUVVGQkxGRkJRMEZETEZGQlJFRXNWVUZEUVVFc1VVRkVRVHRCUVVGQkxGRkJRMVZETEdGQlJGWXNWVUZEVlVFc1lVRkVWanM3TzBGQlIxSXNVMEZCUzBNc1QwRkJUQ3hIUVVGblFrUXNhMEpCUVd0Q0xFTkJRVzVDTEVkQlFYZENMRU5CUVhoQ0xFZEJRVFJDUkN4UlFVRXpRenRCUVVORUxFYzdPMnRDUVVWRVJ5eE5MSEZDUVVGVE8wRkJRVUVzYTBKQlF6WkRMRXRCUVV0S0xFdEJSR3hFTzBGQlFVRXNVVUZEUTBNc1VVRkVSQ3hYUVVORFFTeFJRVVJFTzBGQlFVRXNVVUZEVjBrc1NVRkVXQ3hYUVVOWFFTeEpRVVJZTzBGQlFVRXNVVUZEYVVKRExFbEJSR3BDTEZkQlEybENRU3hKUVVScVFqdEJRVUZCTEZGQlEzVkNReXhGUVVSMlFpeFhRVU4xUWtFc1JVRkVka0k3UVVGQlFTeFJRVU15UWt3c1lVRkVNMElzVjBGRE1rSkJMR0ZCUkROQ096czdRVUZIVUN4VFFVRkxReXhQUVVGTUxFbEJRV2RDTEhWRFFVRjFRa1FzWVVGQmRrTTdPMEZCUlVFc1YwRkJUeXhuUTBGQmNVSkpMRWxCUVhKQ0xFVkJRVEpDUXl4RlFVRXpRaXhGUVVFclFrWXNTMEZCUzJZc1kwRkJZeXhuUTBGQmNVSXNRMEZCY2tJc1JVRkJkMEpYTEZGQlFYaENMRVZCUVd0RExFdEJRVXRGTEU5QlFYWkRMRU5CUVdRc1EwRkJUQ3hEUVVFdlFpeERRVUZRTzBGQlEwUXNSenM3YTBKQlJVUkxMR2RDTEN0Q1FVRnRRanRCUVVGQkxHdENRVU54UXl4TFFVRkxVaXhMUVVReFF6dEJRVUZCTEZGQlExUkRMRkZCUkZNc1YwRkRWRUVzVVVGRVV6dEJRVUZCTEZGQlEwTkRMR0ZCUkVRc1YwRkRRMEVzWVVGRVJEdEJRVUZCTEZGQlEyZENVQ3hKUVVSb1FpeFhRVU5uUWtFc1NVRkVhRUk3UVVGQlFTeFJRVU56UWtnc1NVRkVkRUlzVjBGRGMwSkJMRWxCUkhSQ08wRkJRVUVzVVVGRE5FSkxMRWxCUkRWQ0xGZEJRelJDUVN4SlFVUTFRanM3UVVGRmFrSXNVVUZCU1Zrc1lVRkJZMUFzYTBKQlFXdENMRU5CUVc1Q0xFZEJRWGxDTEV0QlFVdERMRTlCUVV3c1NVRkJaMEpHTEZGQlFYcERMRWRCUVhORUxFdEJRVXRGTEU5QlFVd3NTVUZCWjBJc1EwRkJka1k3TzBGQlJVRXNVVUZCU1Uwc1pVRkJaV1FzVVVGQlVVZ3NTVUZCVWl4SlFVRm5Ra3NzU1VGQkwwSXNRMEZCU2l4RlFVRXdRenRCUVVONFF5eFZRVUZKWVN4alFVRmpMRXRCUVd4Q096dEJRVVZCTEZkQlFVc3NTVUZCU1VNc1IwRkJWQ3hKUVVGblFuQkNMRlZCUVdoQ0xFVkJRVFJDTzBGQlF6RkNMRmxCUVUxeFFpeFhRVUZYY2tJc1YwRkJWMjlDTEVkQlFWZ3NRMEZCYWtJN1FVRkRRU3haUVVGTlJTeFpRVUZaUml4TlFVRk5MRTlCUVhoQ08wRkJRMEVzV1VGQlRVY3NWVUZCVlN4TFFVRkxReXhQUVVGTUxFTkJRV0ZLTEVkQlFXSXNRMEZCYUVJN1FVRkRRU3haUVVGTlN5eFpRVUZaTEV0QlFVdEVMRTlCUVV3c1EwRkJZVVlzVTBGQllpeERRVUZzUWpzN1FVRkZRU3haUVVGSlF5eFZRVUZWUlN4VFFVRmtMRVZCUVhsQ08wRkJRVUU3TzBGQlEzWkNMR1ZCUVV0RExGRkJRVXdzTkVKQlEwZEtMRk5CUkVnc1NVRkRaVWNzV1VGQldTeERRVVF6UWp0QlFVZEJTaXh0UWtGQlV5eEpRVUZVTzBGQlEwRkdMSGRDUVVGakxFbEJRV1E3UVVGRFJEdEJRVU5HT3p0QlFVVkVMRlZCUVVsQkxGZEJRVW9zUlVGQmFVSkVMR0ZCUVdFc1MwRkJZanRCUVVOc1FqczdRVUZGUkN4WFFVRlBRU3hWUVVGUU8wRkJRMFFzUnpzN2EwSkJSVVJUTEZVc2VVSkJRV0U3UVVGRFdDeFhRVUZQTEV0QlFVdG1MRTlCUVZvN1FVRkRSQ3hIT3p0clFrRkZSRTRzU1N4dFFrRkJUenRCUVVOTUxGTkJRVXROTEU5QlFVd3NSMEZCWlN4TFFVRkxTQ3hMUVVGTUxFTkJRVmRETEZGQlFWZ3NSMEZCYzBJc1MwRkJTMFVzVDBGQk1VTTdRVUZFU3l4bFFVVTRRaXhEUVVGRExFdEJRVXRJTEV0QlFVd3NRMEZCVjA4c1JVRkJXaXhGUVVGblFpeExRVUZMVUN4TFFVRk1MRU5CUVZkTkxFbEJRVE5DTEVOQlJqbENPMEZCUlVvc1UwRkJTMDRzUzBGQlRDeERRVUZYVFN4SlFVWlFPMEZCUldFc1UwRkJTMDRzUzBGQlRDeERRVUZYVHl4RlFVWjRRanM3UVVGSFRDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHJRa0ZGUkZnc1R5eHpRa0ZCVlR0QlFVTlNMRk5CUVV0SkxFdEJRVXdzUTBGQlYwVXNZVUZCV0N4SlFVRTBRaXhEUVVGRExFTkJRVGRDTzBGQlEwRXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdPenM3UVVGMFJVZEtMRXNzUTBGRFIzRkNMRmtzUjBGQlpUdEJRVU53UW14Q0xGbEJRVlVzUjBGRVZUdEJRVVZ3UWtrc2RVSkJSbTlDTzBGQlIzQkNReXhSUVVGTkxFTkJTR003UVVGSmNFSkRMRTFCUVVrc1EwRktaMEk3UVVGTGNFSldMRkZCUVUwc1EwRk1ZenRCUVUxd1FuVkNMR0ZCUVZjc1EwRk9VenRCUVU5d1FucENMRkZCUVUwc1EwRlFZenRCUVZGd1FqQkNMR0ZCUVZjc1EwRlNVenRCUVZOd1FqZENMRkZCUVUwc1EwRlVZenRCUVZWd1FqaENMR0ZCUVZjc1EwRldVenRCUVZkd1FuQkNMR2xDUVVGbE8wRkJXRXNzUXpzN2EwSkJkMFZVTEZsQlFXRTdRVUZCUVN4dlEwRkJWSEZDTEVsQlFWTTdRVUZCVkVFc1VVRkJVenRCUVVGQk96dEJRVU14UWl4TlFVRkpRU3hMUVVGTFF5eE5RVUZNTEV0QlFXZENMRU5CUVhCQ0xFVkJRWFZDTzBGQlFVRXNVVUZEWW5oQ0xFdEJSR0VzUjBGRFNIVkNMRWxCUkVjN08wRkJSWEpDTEZkQlFVOHNTVUZCU1hwQ0xFdEJRVW9zUTBGQlZVVXNTMEZCVml4RFFVRlFPMEZCUTBRc1IwRklSQ3hOUVVkUE8wRkJRVUVzVVVGRFIwMHNTVUZFU0N4SFFVTjFRMmxDTEVsQlJIWkRPMEZCUVVFc1VVRkRVMmhDTEVWQlJGUXNSMEZEZFVOblFpeEpRVVIyUXp0QlFVRkJMRkZCUTJGMFFpeFJRVVJpTEVkQlEzVkRjMElzU1VGRWRrTTdRVUZCUVN4UlFVTjFRbXhDTEVsQlJIWkNMRWRCUTNWRGEwSXNTVUZFZGtNN1FVRkJRU3hSUVVNMlFuWkNMRTlCUkRkQ0xFZEJRM1ZEZFVJc1NVRkVka003TzBGQlJVd3NWMEZCVHl4SlFVRkpla0lzUzBGQlNpeFpRVUZaVVN4VlFVRmFMRVZCUVd0Q1F5eE5RVUZzUWl4RlFVRnpRazRzYTBKQlFYUkNMRVZCUVdkRFNTeFZRVUZvUXl4SlFVRjVRMHdzVDBGQmVrTXNSVUZCVUR0QlFVTkVPMEZCUTBZc1F5SXNJbVpwYkdVaU9pSjBkMlZsYmk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1YVcxd2IzSjBJSHNnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsSUgwZ1puSnZiU0FuTGk0dlpuSmhiV1Z6ZVc1akp6dGNibWx0Y0c5eWRDQjdJR05zWVcxd0lIMGdabkp2YlNBbkxpNHZhVzVqTDNSeVlXNXpabTl5YldWeWN5YzdYRzVwYlhCdmNuUWdleUJuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlN3Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1cGJYQnZjblFnZXlCbFlYTmxUM1YwSUgwZ1puSnZiU0FuTGk0dmFXNWpMMlZoYzJsdVp5YzdYRzVjYm1OdmJuTjBJR05zWVcxd1VISnZaM0psYzNNZ1BTQmpiR0Z0Y0Nnd0xDQXhLVHRjYmx4dVkyOXVjM1FnVGtWWVZGOVRWRVZRVXlBOUlIdGNiaUFnYkc5dmNEb2dLSFIzWldWdUtTQTlQaUIwZDJWbGJpNXpkR0Z5ZENncExGeHVJQ0I1YjNsdk9pQW9kSGRsWlc0cElEMCtJSFIzWldWdUxuSmxkbVZ5YzJVb0tTNXpkR0Z5ZENncExGeHVJQ0JtYkdsd09pQW9kSGRsWlc0cElEMCtJSFIzWldWdUxtWnNhWEFvS1M1emRHRnlkQ2dwWEc1OU8xeHVYRzVqYkdGemN5QlVkMlZsYmlCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lITjBZWFJwWXlCa1pXWmhkV3gwVUhKdmNITWdQU0I3WEc0Z0lDQWdaSFZ5WVhScGIyNDZJRE13TUN4Y2JpQWdJQ0JsWVhObE9pQmxZWE5sVDNWMExGeHVJQ0FnSUdaeWIyMDZJREFzWEc0Z0lDQWdkRzg2SURFc1hHNGdJQ0FnWm14cGNEb2dNQ3hjYmlBZ0lDQm1iR2x3UTI5MWJuUTZJREFzWEc0Z0lDQWdlVzk1YnpvZ01DeGNiaUFnSUNCNWIzbHZRMjkxYm5RNklEQXNYRzRnSUNBZ2JHOXZjRG9nTUN4Y2JpQWdJQ0JzYjI5d1EyOTFiblE2SURBc1hHNGdJQ0FnY0d4aGVVUnBjbVZqZEdsdmJqb2dNVnh1SUNCOU8xeHVYRzRnSUc5dVUzUmhjblFvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJrZFhKaGRHbHZiaXdnY0d4aGVVUnBjbVZqZEdsdmJpQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JseHVJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQTlJQ2h3YkdGNVJHbHlaV04wYVc5dUlEMDlQU0F4S1NBL0lEQWdPaUJrZFhKaGRHbHZianRjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1IxY21GMGFXOXVMQ0JsWVhObExDQm1jbTl0TENCMGJ5d2djR3hoZVVScGNtVmpkR2x2YmlCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmx4dUlDQWdJSFJvYVhNdVpXeGhjSE5sWkNBclBTQjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVW9LU0FxSUhCc1lYbEVhWEpsWTNScGIyNDdYRzVjYmlBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9abkp2YlN3Z2RHOHNJR1ZoYzJVb1kyeGhiWEJRY205bmNtVnpjeWhuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNnd0xDQmtkWEpoZEdsdmJpd2dkR2hwY3k1bGJHRndjMlZrS1NrcEtUdGNiaUFnZlZ4dVhHNGdJR2x6UVdOMGFXOXVRMjl0Y0d4bGRHVW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmtkWEpoZEdsdmJpd2djR3hoZVVScGNtVmpkR2x2Yml3Z2VXOTVieXdnYkc5dmNDd2dabXhwY0NCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQnNaWFFnYVhORGIyMXdiR1YwWlNBOUlDaHdiR0Y1UkdseVpXTjBhVzl1SUQwOVBTQXhLU0EvSUNoMGFHbHpMbVZzWVhCelpXUWdQajBnWkhWeVlYUnBiMjRwSURvZ0tIUm9hWE11Wld4aGNITmxaQ0E4UFNBd0tUdGNibHh1SUNBZ0lHbG1JQ2hwYzBOdmJYQnNaWFJsSUNZbUlDaDViM2x2SUh4OElHeHZiM0FnZkh3Z1pteHBjQ2twSUh0Y2JpQWdJQ0FnSUd4bGRDQnBjMU4wWlhCVVlXdGxiaUE5SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdUa1ZZVkY5VFZFVlFVeWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J1WlhoMFUzUmxjQ0E5SUU1RldGUmZVMVJGVUZOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdZMjkxYm5SUWNtOXdJRDBnYTJWNUlDc2dKME52ZFc1MEp6dGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2MzUmxjRTFoZUNBOUlIUm9hWE11WjJWMFVISnZjQ2hyWlhrcE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCemRHVndRMjkxYm5RZ1BTQjBhR2x6TG1kbGRGQnliM0FvWTI5MWJuUlFjbTl3S1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvYzNSbGNFMWhlQ0ErSUhOMFpYQkRiM1Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMyVjBVSEp2Y0hNb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnVzJOdmRXNTBVSEp2Y0YwNklITjBaWEJEYjNWdWRDQXJJREZjYmlBZ0lDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdJQ0J1WlhoMFUzUmxjQ2gwYUdsektUdGNiaUFnSUNBZ0lDQWdJQ0JwYzFOMFpYQlVZV3RsYmlBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2FXWWdLR2x6VTNSbGNGUmhhMlZ1S1NCcGMwTnZiWEJzWlhSbElEMGdabUZzYzJVN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJR2x6UTI5dGNHeGxkR1U3WEc0Z0lIMWNibHh1SUNCblpYUkZiR0Z3YzJWa0tDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbVZzWVhCelpXUTdYRzRnSUgxY2JseHVJQ0JtYkdsd0tDa2dlMXh1SUNBZ0lIUm9hWE11Wld4aGNITmxaQ0E5SUhSb2FYTXVjSEp2Y0hNdVpIVnlZWFJwYjI0Z0xTQjBhR2x6TG1Wc1lYQnpaV1E3WEc0Z0lDQWdXM1JvYVhNdWNISnZjSE11Wm5KdmJTd2dkR2hwY3k1d2NtOXdjeTUwYjEwZ1BTQmJkR2hwY3k1d2NtOXdjeTUwYnl3Z2RHaHBjeTV3Y205d2N5NW1jbTl0WFR0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lISmxkbVZ5YzJVb0tTQjdYRzRnSUNBZ2RHaHBjeTV3Y205d2N5NXdiR0Y1UkdseVpXTjBhVzl1SUNvOUlDMHhPMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2d1TGk1aGNtZHpLU0E5UGlCN1hHNGdJR2xtSUNoaGNtZHpMbXhsYm1kMGFDQTlQVDBnTVNrZ2UxeHVJQ0FnSUdOdmJuTjBJRnNnY0hKdmNITWdYU0E5SUdGeVozTTdYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QlVkMlZsYmlod2NtOXdjeWs3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnWTI5dWMzUWdXeUJtY205dExDQjBieXdnWkhWeVlYUnBiMjRzSUdWaGMyVXNJSEJ5YjNCeklGMGdQU0JoY21kek8xeHVJQ0FnSUhKbGRIVnliaUJ1WlhjZ1ZIZGxaVzRvZXlCbWNtOXRMQ0IwYnl3Z1pIVnlZWFJwYjI0c0lHVmhjMlVzSUM0dUxuQnliM0J6SUgwcE8xeHVJQ0I5WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3R3ZWVuLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jaGFpbiA9IHJlcXVpcmUoJy4vY2hhaW4nKTtcblxudmFyIF9jaGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGFpbik7XG5cbnZhciBfcGFyYWxsZWwgPSByZXF1aXJlKCcuL3BhcmFsbGVsJyk7XG5cbnZhciBfcGFyYWxsZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyYWxsZWwpO1xuXG52YXIgX2RlbGF5ID0gcmVxdWlyZSgnLi9kZWxheScpO1xuXG52YXIgX2RlbGF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlbGF5KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcGFyYWxsZWwgQWN0aW9uIGNvbXBvc2VkIG9mIGNoYWluZWRcbiAqIGRlbGF5IGFuZCBhY3Rpb25zLiBJbnRlcnZhbCBjYW4gYmUgZWl0aGVyIGEgbnVtYmVyXG4gKiB0byBtdWx0aXBseSBieSBgaWAgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgYGlgXG4gKlxuICogU3RyYWlnaHQgY3JpYmJlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi8yNGM3MmY1MTNlNDhmMGJkYzQwODIwYjQzMjYyMzI4ZmUyYzMwMWQ0L0xpYnJhcmllcy9BbmltYXRlZC9zcmMvQW5pbWF0ZWRJbXBsZW1lbnRhdGlvbi5qcyNMMjAzMVxuICogXiBUaGlzIGZ1bmN0aW9uIHNvbGQgYSBwcmV2aW91c2x5LWNvbmZsaWN0ZWQgbWUgb24gdGhlIG1lcml0IG9mIG1vdmluZyBmcm9tXG4gKiBqUXVlcnktc3R5bGUgbXVsdGktcHJvcGVydHkgYW5pbWF0aW9ucyB0byBzaW5nbGUtcHJvcGVydHkuXG4gKiBAcGFyYW0gIHthcnJheX0gYWN0aW9uc1xuICogQHBhcmFtICB7ZnVuY3Rpb24gfCBudW1iZXJ9IGludGVydmFsXG4gKiBAcmV0dXJuIHtBY3Rpb259XG4gKi9cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhY3Rpb25zLCBpbnRlcnZhbCwgb25Db21wbGV0ZSkge1xuICB2YXIgaW50ZXJ2YWxJc0Z1bmN0aW9uID0gKDAsIF91dGlscy5pc0Z1bmMpKGludGVydmFsKTtcblxuICByZXR1cm4gKDAsIF9wYXJhbGxlbDIuZGVmYXVsdCkoYWN0aW9ucy5tYXAoZnVuY3Rpb24gKGFjdGlvbiwgaSkge1xuICAgIHZhciB0aW1lVG9EZWxheSA9IGludGVydmFsSXNGdW5jdGlvbiA/IGludGVydmFsKGkpIDogaSAqIGludGVydmFsO1xuICAgIHJldHVybiAoMCwgX2NoYWluMi5kZWZhdWx0KShbKDAsIF9kZWxheTIuZGVmYXVsdCkodGltZVRvRGVsYXkpLCBhY3Rpb25dKTtcbiAgfSksIHsgb25Db21wbGV0ZTogb25Db21wbGV0ZSB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzTjBZV2RuWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHNpWVdOMGFXOXVjeUlzSW1sdWRHVnlkbUZzSWl3aWIyNURiMjF3YkdWMFpTSXNJbWx1ZEdWeWRtRnNTWE5HZFc1amRHbHZiaUlzSW0xaGNDSXNJbUZqZEdsdmJpSXNJbWtpTENKMGFXMWxWRzlFWld4aGVTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlJVRTdPenM3T3pzN096czdPenRyUWtGWlpTeFZRVUZEUVN4UFFVRkVMRVZCUVZWRExGRkJRVllzUlVGQmIwSkRMRlZCUVhCQ0xFVkJRVzFETzBGQlEyaEVMRTFCUVUxRExIRkNRVUZ4UWl4dFFrRkJUMFlzVVVGQlVDeERRVUV6UWpzN1FVRkZRU3hUUVVGUExIZENRVUZUUkN4UlFVRlJTU3hIUVVGU0xFTkJRVmtzVlVGQlEwTXNUVUZCUkN4RlFVRlRReXhEUVVGVUxFVkJRV1U3UVVGRGVrTXNVVUZCVFVNc1kwRkJaVW9zYTBKQlFVUXNSMEZCZFVKR0xGTkJRVk5MTEVOQlFWUXNRMEZCZGtJc1IwRkJjVU5CTEVsQlFVbE1MRkZCUVRkRU8wRkJRMEVzVjBGQlR5eHhRa0ZCVFN4RFFVTllMSEZDUVVGTlRTeFhRVUZPTEVOQlJGY3NSVUZGV0VZc1RVRkdWeXhEUVVGT0xFTkJRVkE3UVVGSlJDeEhRVTVsTEVOQlFWUXNSVUZOU0N4RlFVRkZTQ3h6UWtGQlJpeEZRVTVITEVOQlFWQTdRVUZQUkN4RElpd2labWxzWlNJNkluTjBZV2RuWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnWTJoaGFXNGdabkp2YlNBbkxpOWphR0ZwYmljN1hHNXBiWEJ2Y25RZ2NHRnlZV3hzWld3Z1puSnZiU0FuTGk5d1lYSmhiR3hsYkNjN1hHNXBiWEJ2Y25RZ1pHVnNZWGtnWm5KdmJTQW5MaTlrWld4aGVTYzdYRzVwYlhCdmNuUWdleUJwYzBaMWJtTWdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNHZLaXBjYmlBcUlFTnlaV0YwWlhNZ1lTQnVaWGNnY0dGeVlXeHNaV3dnUVdOMGFXOXVJR052YlhCdmMyVmtJRzltSUdOb1lXbHVaV1JjYmlBcUlHUmxiR0Y1SUdGdVpDQmhZM1JwYjI1ekxpQkpiblJsY25aaGJDQmpZVzRnWW1VZ1pXbDBhR1Z5SUdFZ2JuVnRZbVZ5WEc0Z0tpQjBieUJ0ZFd4MGFYQnNlU0JpZVNCZ2FXQWdiM0lnWVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z1ltVWdjSEp2ZG1sa1pXUWdZR2xnWEc0Z0tseHVJQ29nVTNSeVlXbG5hSFFnWTNKcFltSmxaQ0JtY205dElHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW1ZV05sWW05dmF5OXlaV0ZqZEMxdVlYUnBkbVV2WW14dllpOHlOR00zTW1ZMU1UTmxORGhtTUdKa1l6UXdPREl3WWpRek1qWXlNekk0Wm1VeVl6TXdNV1EwTDB4cFluSmhjbWxsY3k5QmJtbHRZWFJsWkM5emNtTXZRVzVwYldGMFpXUkpiWEJzWlcxbGJuUmhkR2x2Ymk1cWN5Tk1NakF6TVZ4dUlDb2dYaUJVYUdseklHWjFibU4wYVc5dUlITnZiR1FnWVNCd2NtVjJhVzkxYzJ4NUxXTnZibVpzYVdOMFpXUWdiV1VnYjI0Z2RHaGxJRzFsY21sMElHOW1JRzF2ZG1sdVp5Qm1jbTl0WEc0Z0tpQnFVWFZsY25rdGMzUjViR1VnYlhWc2RHa3RjSEp2Y0dWeWRIa2dZVzVwYldGMGFXOXVjeUIwYnlCemFXNW5iR1V0Y0hKdmNHVnlkSGt1WEc0Z0tpQkFjR0Z5WVcwZ0lIdGhjbkpoZVgwZ1lXTjBhVzl1YzF4dUlDb2dRSEJoY21GdElDQjdablZ1WTNScGIyNGdmQ0J1ZFcxaVpYSjlJR2x1ZEdWeWRtRnNYRzRnS2lCQWNtVjBkWEp1SUh0QlkzUnBiMjU5WEc0Z0tpOWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaGhZM1JwYjI1ekxDQnBiblJsY25aaGJDd2diMjVEYjIxd2JHVjBaU2tnUFQ0Z2UxeHVJQ0JqYjI1emRDQnBiblJsY25aaGJFbHpSblZ1WTNScGIyNGdQU0JwYzBaMWJtTW9hVzUwWlhKMllXd3BPMXh1WEc0Z0lISmxkSFZ5YmlCd1lYSmhiR3hsYkNoaFkzUnBiMjV6TG0xaGNDZ29ZV04wYVc5dUxDQnBLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdkR2x0WlZSdlJHVnNZWGtnUFNBb2FXNTBaWEoyWVd4SmMwWjFibU4wYVc5dUtTQS9JR2x1ZEdWeWRtRnNLR2twSURvZ2FTQXFJR2x1ZEdWeWRtRnNPMXh1SUNBZ0lISmxkSFZ5YmlCamFHRnBiaWhiWEc0Z0lDQWdJQ0JrWld4aGVTaDBhVzFsVkc5RVpXeGhlU2tzWEc0Z0lDQWdJQ0JoWTNScGIyNWNiaUFnSUNCZEtUdGNiaUFnZlNrc0lIc2diMjVEYjIxd2JHVjBaU0I5S1R0Y2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9zdGFnZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBWYWx1ZSA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhWYWx1ZSwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVmFsdWUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZhbHVlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVmFsdWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgX0FjdGlvbi5wcm90b3R5cGUuc2V0LmNhbGwodGhpcywgdik7XG4gICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICB9O1xuXG4gIHJldHVybiBWYWx1ZTtcbn0oXzIuZGVmYXVsdCk7XG5cblZhbHVlLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGN1cnJlbnQsIG9uVXBkYXRlKSB7XG4gIHJldHVybiBuZXcgVmFsdWUoeyBjdXJyZW50OiBjdXJyZW50LCBvblVwZGF0ZTogb25VcGRhdGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1poYkhWbExtcHpJbDBzSW01aGJXVnpJanBiSWxaaGJIVmxJaXdpYzJWMElpd2lkaUlzSW5OamFHVmtkV3hsWkZWd1pHRjBaU0lzSW1SbFptRjFiSFJRY205d2N5SXNJbkJoYzNOcGRtVWlMQ0pqZFhKeVpXNTBJaXdpYjI1VmNHUmhkR1VpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenRCUVVOQk96czdPenM3T3pzN08wbEJSVTFCTEVzN096czdPenM3T3p0clFrRkxTa01zUnl4blFrRkJTVU1zUXl4RlFVRkhPMEZCUTB3c2MwSkJRVTFFTEVkQlFVNHNXVUZCVlVNc1EwRkJWanRCUVVOQkxHdERRVUZqTEV0QlFVdERMR1ZCUVc1Q08wRkJRMFFzUnpzN096czdRVUZTUjBnc1N5eERRVU5IU1N4WkxFZEJRV1U3UVVGRGNFSkRMRmRCUVZNN1FVRkVWeXhET3p0clFrRlZWQ3hWUVVGRFF5eFBRVUZFTEVWQlFWVkRMRkZCUVZZN1FVRkJRU3hUUVVGMVFpeEpRVUZKVUN4TFFVRktMRU5CUVZVc1JVRkJSVTBzWjBKQlFVWXNSVUZCVjBNc2EwSkJRVmdzUlVGQlZpeERRVUYyUWp0QlFVRkJMRU1pTENKbWFXeGxJam9pZG1Gc2RXVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2Snp0Y2JtbHRjRzl5ZENCN0lHOXVSbkpoYldWVmNHUmhkR1VnZlNCbWNtOXRJQ2N1TGk5bWNtRnRaWE41Ym1Nbk8xeHVYRzVqYkdGemN5QldZV3gxWlNCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lITjBZWFJwWXlCa1pXWmhkV3gwVUhKdmNITWdQU0I3WEc0Z0lDQWdjR0Z6YzJsMlpUb2dkSEoxWlZ4dUlDQjlPMXh1WEc0Z0lITmxkQ2gyS1NCN1hHNGdJQ0FnYzNWd1pYSXVjMlYwS0hZcE8xeHVJQ0FnSUc5dVJuSmhiV1ZWY0dSaGRHVW9kR2hwY3k1elkyaGxaSFZzWldSVmNHUmhkR1VwTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoamRYSnlaVzUwTENCdmJsVndaR0YwWlNrZ1BUNGdibVYzSUZaaGJIVmxLSHNnWTNWeWNtVnVkQ3dnYjI1VmNHUmhkR1VnZlNrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3ZhbHVlLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX29uTmV4dEZyYW1lID0gcmVxdWlyZSgnLi9vbi1uZXh0LWZyYW1lJyk7XG5cbnZhciBfb25OZXh0RnJhbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb25OZXh0RnJhbWUpO1xuXG52YXIgX2NyZWF0ZVJlbmRlclN0ZXAgPSByZXF1aXJlKCcuL2NyZWF0ZS1yZW5kZXItc3RlcCcpO1xuXG52YXIgX2NyZWF0ZVJlbmRlclN0ZXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlUmVuZGVyU3RlcCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcblxuLyoqXG4gKiBNYXhpbXVtIHBlcm1pdHRlZCBtcyBzaW5jZSBsYXN0IGZyYW1lXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgTUFYX0VMQVBTRUQgPSAyMDtcblxuLyoqXG4gKiBDdXJyZW50IGZyYW1lc3RhbXBcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBjdXJyZW50RnJhbWVzdGFtcCA9ICgwLCBfdXRpbHMuY3VycmVudFRpbWUpKCk7XG5cbnZhciBlbGFwc2VkID0gMDtcblxuLyoqXG4gKiBGYWN0b3IgdG8gbXVsdGlwbHkgYGVsYXBzZWRgIGJ5IC0gXG4gKiAwLjUgd291bGQgYmUgc2xvdyBtb3Rpb24sIDIgd291bGQgYmUgZmFzdFxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIGRpbGF0aW9uID0gMTtcblxuZnVuY3Rpb24gc3RhcnRSZW5kZXJMb29wKCkge1xuICBpZiAoIXdpbGxSZW5kZXJOZXh0RnJhbWUpIHtcbiAgICB3aWxsUmVuZGVyTmV4dEZyYW1lID0gdHJ1ZTtcbiAgICAoMCwgX29uTmV4dEZyYW1lMi5kZWZhdWx0KShwcm9jZXNzRnJhbWUpO1xuICB9XG59XG5cbnZhciBmcmFtZVN0YXJ0ID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lVXBkYXRlID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lUmVuZGVyID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lRW5kID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xuXG5mdW5jdGlvbiBwcm9jZXNzRnJhbWUoZnJhbWVzdGFtcCkge1xuICB3aWxsUmVuZGVyTmV4dEZyYW1lID0gZmFsc2U7XG4gIGVsYXBzZWQgPSBNYXRoLm1heChNYXRoLm1pbihmcmFtZXN0YW1wIC0gY3VycmVudEZyYW1lc3RhbXAsIE1BWF9FTEFQU0VEKSwgMSkgKiBkaWxhdGlvbjtcbiAgY3VycmVudEZyYW1lc3RhbXAgPSBmcmFtZXN0YW1wO1xuXG4gIGZyYW1lU3RhcnQucHJvY2VzcygpO1xuICBmcmFtZVVwZGF0ZS5wcm9jZXNzKCk7XG4gIGZyYW1lUmVuZGVyLnByb2Nlc3MoKTtcbiAgZnJhbWVFbmQucHJvY2VzcygpO1xufVxuXG52YXIgb25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LnNjaGVkdWxlO1xudmFyIG9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLm9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5zY2hlZHVsZTtcbnZhciBvbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuc2NoZWR1bGU7XG52YXIgb25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGZyYW1lRW5kLnNjaGVkdWxlO1xudmFyIGNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBmcmFtZUVuZC5jYW5jZWw7XG5cbnZhciB0aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGVsYXBzZWQ7XG59O1xudmFyIGN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY3VycmVudEZyYW1lc3RhbXA7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2xzaWQybHNiRkpsYm1SbGNrNWxlSFJHY21GdFpTSXNJazFCV0Y5RlRFRlFVMFZFSWl3aVkzVnljbVZ1ZEVaeVlXMWxjM1JoYlhBaUxDSmxiR0Z3YzJWa0lpd2laR2xzWVhScGIyNGlMQ0p6ZEdGeWRGSmxibVJsY2t4dmIzQWlMQ0p3Y205alpYTnpSbkpoYldVaUxDSm1jbUZ0WlZOMFlYSjBJaXdpWm5KaGJXVlZjR1JoZEdVaUxDSm1jbUZ0WlZKbGJtUmxjaUlzSW1aeVlXMWxSVzVrSWl3aVpuSmhiV1Z6ZEdGdGNDSXNJazFoZEdnaUxDSnRZWGdpTENKdGFXNGlMQ0p3Y205alpYTnpJaXdpYjI1R2NtRnRaVk4wWVhKMElpd2ljMk5vWldSMWJHVWlMQ0p2YmtaeVlXMWxWWEJrWVhSbElpd2liMjVHY21GdFpWSmxibVJsY2lJc0ltOXVSbkpoYldWRmJtUWlMQ0pqWVc1alpXeFBia1p5WVcxbFUzUmhjblFpTENKallXNWpaV3dpTENKallXNWpaV3hQYmtaeVlXMWxWWEJrWVhSbElpd2lZMkZ1WTJWc1QyNUdjbUZ0WlZKbGJtUmxjaUlzSW1OaGJtTmxiRTl1Um5KaGJXVkZibVFpTENKMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVaUxDSmpkWEp5Wlc1MFJuSmhiV1ZVYVcxbGMzUmhiWEFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUlVFc1NVRkJTVUVzYzBKQlFYTkNMRXRCUVRGQ096dEJRVVZCT3pzN08wRkJTVUVzU1VGQlRVTXNZMEZCWXl4RlFVRndRanM3UVVGRlFUczdPenRCUVVsQkxFbEJRVWxETEc5Q1FVRnZRaXg1UWtGQmVFSTdPMEZCUlVFc1NVRkJTVU1zVlVGQlZTeERRVUZrT3p0QlFVVkJPenM3T3p0QlFVdEJMRWxCUVVsRExGZEJRVmNzUTBGQlpqczdRVUZGUVN4VFFVRlRReXhsUVVGVUxFZEJRVEpDTzBGQlEzcENMRTFCUVVrc1EwRkJRMHdzYlVKQlFVd3NSVUZCTUVJN1FVRkRlRUpCTERCQ1FVRnpRaXhKUVVGMFFqdEJRVU5CTEN0Q1FVRlpUU3haUVVGYU8wRkJRMFE3UVVGRFJqczdRVUZGUkN4SlFVRk5ReXhoUVVGaExHZERRVUZwUWtZc1pVRkJha0lzUTBGQmJrSTdRVUZEUVN4SlFVRk5SeXhqUVVGakxHZERRVUZwUWtnc1pVRkJha0lzUTBGQmNFSTdRVUZEUVN4SlFVRk5TU3hqUVVGakxHZERRVUZwUWtvc1pVRkJha0lzUTBGQmNFSTdRVUZEUVN4SlFVRk5TeXhYUVVGWExHZERRVUZwUWt3c1pVRkJha0lzUTBGQmFrSTdPMEZCUlVFc1UwRkJVME1zV1VGQlZDeERRVUZ6UWtzc1ZVRkJkRUlzUlVGQmEwTTdRVUZEYUVOWUxIZENRVUZ6UWl4TFFVRjBRanRCUVVOQlJ5eFpRVUZWVXl4TFFVRkxReXhIUVVGTUxFTkJRVk5FTEV0QlFVdEZMRWRCUVV3c1EwRkJVMGdzWVVGQllWUXNhVUpCUVhSQ0xFVkJRWGxEUkN4WFFVRjZReXhEUVVGVUxFVkJRV2RGTEVOQlFXaEZMRWxCUVhGRlJ5eFJRVUV2UlR0QlFVTkJSaXh6UWtGQmIwSlRMRlZCUVhCQ096dEJRVVZCU2l4aFFVRlhVU3hQUVVGWU8wRkJRMEZRTEdOQlFWbFBMRTlCUVZvN1FVRkRRVTRzWTBGQldVMHNUMEZCV2p0QlFVTkJUQ3hYUVVGVFN5eFBRVUZVTzBGQlEwUTdPMEZCUlUwc1NVRkJUVU1zYzBOQlFXVlVMRmRCUVZkVkxGRkJRV2hETzBGQlEwRXNTVUZCVFVNc2QwTkJRV2RDVml4WlFVRlpVeXhSUVVGc1F6dEJRVU5CTEVsQlFVMUZMSGREUVVGblFsWXNXVUZCV1ZFc1VVRkJiRU03UVVGRFFTeEpRVUZOUnl4clEwRkJZVllzVTBGQlUwOHNVVUZCTlVJN1FVRkRRU3hKUVVGTlNTeHJSRUZCY1VKa0xGZEJRVmRsTEUxQlFYUkRPMEZCUTBFc1NVRkJUVU1zYjBSQlFYTkNaaXhaUVVGWll5eE5RVUY0UXp0QlFVTkJMRWxCUVUxRkxHOUVRVUZ6UW1Zc1dVRkJXV0VzVFVGQmVFTTdRVUZEUVN4SlFVRk5SeXc0UTBGQmJVSm1MRk5CUVZOWkxFMUJRV3hET3p0QlFVVkJMRWxCUVUxSkxHdEVRVUZ4UWp0QlFVRkJMRk5CUVUxMlFpeFBRVUZPTzBGQlFVRXNRMEZCTTBJN1FVRkRRU3hKUVVGTmQwSXNkMFJCUVhkQ08wRkJRVUVzVTBGQlRYcENMR2xDUVVGT08wRkJRVUVzUTBGQk9VSWlMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnYjI1T1pYaDBSbkpoYldVZ1puSnZiU0FuTGk5dmJpMXVaWGgwTFdaeVlXMWxKenRjYm1sdGNHOXlkQ0JqY21WaGRHVlNaVzVrWlhKVGRHVndJR1p5YjIwZ0p5NHZZM0psWVhSbExYSmxibVJsY2kxemRHVndKenRjYm1sdGNHOXlkQ0I3SUdOMWNuSmxiblJVYVcxbElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dWJHVjBJSGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VnUFNCbVlXeHpaVHRjYmx4dUx5b3FYRzRnS2lCTllYaHBiWFZ0SUhCbGNtMXBkSFJsWkNCdGN5QnphVzVqWlNCc1lYTjBJR1p5WVcxbFhHNGdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ292WEc1amIyNXpkQ0JOUVZoZlJVeEJVRk5GUkNBOUlESXdPMXh1WEc0dktpcGNiaUFxSUVOMWNuSmxiblFnWm5KaGJXVnpkR0Z0Y0Z4dUlDb2dRSFI1Y0dVZ2UwNTFiV0psY24xY2JpQXFMMXh1YkdWMElHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd0lEMGdZM1Z5Y21WdWRGUnBiV1VvS1R0Y2JseHViR1YwSUdWc1lYQnpaV1FnUFNBd08xeHVYRzR2S2lwY2JpQXFJRVpoWTNSdmNpQjBieUJ0ZFd4MGFYQnNlU0JnWld4aGNITmxaR0FnWW5rZ0xTQmNiaUFxSURBdU5TQjNiM1ZzWkNCaVpTQnpiRzkzSUcxdmRHbHZiaXdnTWlCM2IzVnNaQ0JpWlNCbVlYTjBYRzRnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNvdlhHNXNaWFFnWkdsc1lYUnBiMjRnUFNBeE8xeHVYRzVtZFc1amRHbHZiaUJ6ZEdGeWRGSmxibVJsY2t4dmIzQW9LU0I3WEc0Z0lHbG1JQ2doZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNrZ2UxeHVJQ0FnSUhkcGJHeFNaVzVrWlhKT1pYaDBSbkpoYldVZ1BTQjBjblZsTzF4dUlDQWdJRzl1VG1WNGRFWnlZVzFsS0hCeWIyTmxjM05HY21GdFpTazdYRzRnSUgxY2JuMWNibHh1WTI5dWMzUWdabkpoYldWVGRHRnlkQ0E5SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLVHRjYm1OdmJuTjBJR1p5WVcxbFZYQmtZWFJsSUQwZ1kzSmxZWFJsVW1WdVpHVnlVM1JsY0NoemRHRnlkRkpsYm1SbGNreHZiM0FwTzF4dVkyOXVjM1FnWm5KaGJXVlNaVzVrWlhJZ1BTQmpjbVZoZEdWU1pXNWtaWEpUZEdWd0tITjBZWEowVW1WdVpHVnlURzl2Y0NrN1hHNWpiMjV6ZENCbWNtRnRaVVZ1WkNBOUlHTnlaV0YwWlZKbGJtUmxjbE4wWlhBb2MzUmhjblJTWlc1a1pYSk1iMjl3S1R0Y2JseHVablZ1WTNScGIyNGdjSEp2WTJWemMwWnlZVzFsS0daeVlXMWxjM1JoYlhBcElIdGNiaUFnZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNBOUlHWmhiSE5sTzF4dUlDQmxiR0Z3YzJWa0lEMGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9abkpoYldWemRHRnRjQ0F0SUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TENCTlFWaGZSVXhCVUZORlJDa3NJREVwSUNvZ1pHbHNZWFJwYjI0N1hHNGdJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdJRDBnWm5KaGJXVnpkR0Z0Y0R0Y2JseHVJQ0JtY21GdFpWTjBZWEowTG5CeWIyTmxjM01vS1R0Y2JpQWdabkpoYldWVmNHUmhkR1V1Y0hKdlkyVnpjeWdwTzF4dUlDQm1jbUZ0WlZKbGJtUmxjaTV3Y205alpYTnpLQ2s3WEc0Z0lHWnlZVzFsUlc1a0xuQnliMk5sYzNNb0tUdGNibjFjYmx4dVpYaHdiM0owSUdOdmJuTjBJRzl1Um5KaGJXVlRkR0Z5ZENBOUlHWnlZVzFsVTNSaGNuUXVjMk5vWldSMWJHVTdYRzVsZUhCdmNuUWdZMjl1YzNRZ2IyNUdjbUZ0WlZWd1pHRjBaU0E5SUdaeVlXMWxWWEJrWVhSbExuTmphR1ZrZFd4bE8xeHVaWGh3YjNKMElHTnZibk4wSUc5dVJuSmhiV1ZTWlc1a1pYSWdQU0JtY21GdFpWSmxibVJsY2k1elkyaGxaSFZzWlR0Y2JtVjRjRzl5ZENCamIyNXpkQ0J2YmtaeVlXMWxSVzVrSUQwZ1puSmhiV1ZGYm1RdWMyTm9aV1IxYkdVN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWTjBZWEowSUQwZ1puSmhiV1ZUZEdGeWRDNWpZVzVqWld3N1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlNBOUlHWnlZVzFsVlhCa1lYUmxMbU5oYm1ObGJEdGNibVY0Y0c5eWRDQmpiMjV6ZENCallXNWpaV3hQYmtaeVlXMWxVbVZ1WkdWeUlEMGdabkpoYldWU1pXNWtaWEl1WTJGdVkyVnNPMXh1Wlhod2IzSjBJR052Ym5OMElHTmhibU5sYkU5dVJuSmhiV1ZGYm1RZ1BTQm1jbUZ0WlVWdVpDNWpZVzVqWld3N1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ1BTQW9LU0E5UGlCbGJHRndjMlZrTzF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUkdjbUZ0WlZScGJXVnpkR0Z0Y0NBOUlDZ3BJRDArSUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFjdGlvbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgdGhpcy5zY2hlZHVsZWRVcGRhdGUgPSB0aGlzLnNjaGVkdWxlZFVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyk7XG5cbiAgICB0aGlzLnNldFByb3BzKHByb3BzKTtcblxuICAgIHRoaXMuY3VycmVudCA9IHByb3BzLmN1cnJlbnQgfHwgcHJvcHMuZnJvbSB8fCAwO1xuICB9XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBvblN0YXJ0ID0gX3Byb3BzLm9uU3RhcnQsXG4gICAgICAgIF9vblN0YXJ0ID0gX3Byb3BzLl9vblN0YXJ0LFxuICAgICAgICBwYXNzaXZlID0gX3Byb3BzLnBhc3NpdmU7XG5cblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdGFydCkgdGhpcy5vblN0YXJ0KCk7XG4gICAgaWYgKG9uU3RhcnQpIG9uU3RhcnQodGhpcyk7XG4gICAgaWYgKF9vblN0YXJ0KSBfb25TdGFydCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBvblN0b3AgPSBfcHJvcHMyLm9uU3RvcCxcbiAgICAgICAgX29uU3RvcCA9IF9wcm9wczIuX29uU3RvcCxcbiAgICAgICAgcGFzc2l2ZSA9IF9wcm9wczIucGFzc2l2ZTtcblxuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdG9wKSB0aGlzLm9uU3RvcCgpO1xuICAgIGlmIChvblN0b3ApIG9uU3RvcCh0aGlzKTtcbiAgICBpZiAoX29uU3RvcCkgX29uU3RvcCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uQ29tcGxldGUgPSBfcHJvcHMzLm9uQ29tcGxldGUsXG4gICAgICAgIF9vbkNvbXBsZXRlID0gX3Byb3BzMy5fb25Db21wbGV0ZTtcblxuXG4gICAgdGhpcy5zdG9wKCk7XG5cbiAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSh0aGlzKTtcbiAgICBpZiAoX29uQ29tcGxldGUpIF9vbkNvbXBsZXRlKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZWRVcGRhdGUgPSBmdW5jdGlvbiBzY2hlZHVsZWRVcGRhdGUoKSB7XG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcbiAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uVXBkYXRlID0gX3Byb3BzNC5vblVwZGF0ZSxcbiAgICAgICAgcGFzc2l2ZSA9IF9wcm9wczQucGFzc2l2ZTtcblxuXG4gICAgaWYgKHRoaXMudXBkYXRlKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnVwZGF0ZSh0aGlzLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlmIChvblVwZGF0ZSkgb25VcGRhdGUodGhpcy5jdXJyZW50LCB0aGlzKTtcbiAgICB0aGlzLmZpcmVMaXN0ZW5lcnMoKTtcblxuICAgIGlmICghcGFzc2l2ZSAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiB0aGlzLmlzQWN0aW9uQ29tcGxldGUoKSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbiBzZXRQcm9wcyhwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgcHJvcHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQodikge1xuICAgIHRoaXMuY3VycmVudCA9IHY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXRQcm9wID0gZnVuY3Rpb24gZ2V0UHJvcChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wc1trZXldO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gKDAsIF9jYWxjLnNwZWVkUGVyU2Vjb25kKSh0aGlzLmN1cnJlbnQgLSB0aGlzLnByZXYsIHRoaXMubGFzdFVwZGF0ZWQpO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IFtdO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gdGhpcy5udW1MaXN0ZW5lcnMgfHwgMDtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzKys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHZhciBsaXN0ZW5lckluZGV4ID0gdGhpcy5saXN0ZW5lcnMgPyB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA6IC0xO1xuICAgIGlmIChsaXN0ZW5lckluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMtLTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5maXJlTGlzdGVuZXJzID0gZnVuY3Rpb24gZmlyZUxpc3RlbmVycygpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuZ2V0KCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bUxpc3RlbmVyczsgaSsrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tpXShjdXJyZW50LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIEFjdGlvbjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSWtGamRHbHZiaUlzSW5CeWIzQnpJaXdpYzJOb1pXUjFiR1ZrVlhCa1lYUmxJaXdpWW1sdVpDSXNJbU52Ym5OMGNuVmpkRzl5SWl3aVpHVm1ZWFZzZEZCeWIzQnpJaXdpYzJWMFVISnZjSE1pTENKamRYSnlaVzUwSWl3aVpuSnZiU0lzSW5OMFlYSjBJaXdpYjI1VGRHRnlkQ0lzSWw5dmJsTjBZWEowSWl3aWNHRnpjMmwyWlNJc0ltbHpRV04wYVhabElpd2ljM1J2Y0NJc0ltOXVVM1J2Y0NJc0lsOXZibE4wYjNBaUxDSmpiMjF3YkdWMFpTSXNJbTl1UTI5dGNHeGxkR1VpTENKZmIyNURiMjF3YkdWMFpTSXNJbXhoYzNSVmNHUmhkR1ZrSWl3aWNISmxkaUlzSW05dVZYQmtZWFJsSWl3aWRYQmtZWFJsSWl3aVptbHlaVXhwYzNSbGJtVnljeUlzSW1selFXTjBhVzl1UTI5dGNHeGxkR1VpTENKblpYUWlMQ0p6WlhRaUxDSjJJaXdpWjJWMFVISnZjQ0lzSW10bGVTSXNJbWRsZEZabGJHOWphWFI1SWl3aVlXUmtUR2x6ZEdWdVpYSWlMQ0pzYVhOMFpXNWxjaUlzSW14cGMzUmxibVZ5Y3lJc0ltNTFiVXhwYzNSbGJtVnljeUlzSW1sdVpHVjRUMllpTENKd2RYTm9JaXdpY21WdGIzWmxUR2x6ZEdWdVpYSWlMQ0pzYVhOMFpXNWxja2x1WkdWNElpd2ljM0JzYVdObElpd2lhU0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPMEZCUTBFN096czdTVUZGVFVFc1RUdEJRVU5LTEd0Q1FVRlpReXhMUVVGYUxFVkJRVzFDTzBGQlFVRTdPMEZCUTJwQ0xGTkJRVXRETEdWQlFVd3NSMEZCZFVJc1MwRkJTMEVzWlVGQlRDeERRVUZ4UWtNc1NVRkJja0lzUTBGQk1FSXNTVUZCTVVJc1EwRkJka0k3TzBGQlJVRXNVMEZCUzBZc1MwRkJUQ3huUWtGRFN5eExRVUZMUnl4WFFVRk1MRU5CUVdsQ1F5eFpRVVIwUWpzN1FVRkpRU3hUUVVGTFF5eFJRVUZNTEVOQlFXTk1MRXRCUVdRN08wRkJSVUVzVTBGQlMwMHNUMEZCVEN4SFFVRmxUaXhOUVVGTlRTeFBRVUZPTEVsQlFXbENUaXhOUVVGTlR5eEpRVUYyUWl4SlFVRXJRaXhEUVVFNVF6dEJRVU5FT3p0dFFrRkZSRU1zU3l4dlFrRkJVVHRCUVVGQkxHbENRVU5wUXl4TFFVRkxVaXhMUVVSMFF6dEJRVUZCTEZGQlEwVlRMRTlCUkVZc1ZVRkRSVUVzVDBGRVJqdEJRVUZCTEZGQlExZERMRkZCUkZnc1ZVRkRWMEVzVVVGRVdEdEJRVUZCTEZGQlEzRkNReXhQUVVSeVFpeFZRVU54UWtFc1QwRkVja0k3T3p0QlFVZE9MRkZCUVVrc1EwRkJRMEVzVDBGQlRDeEZRVUZqTzBGQlExb3NWMEZCUzBNc1VVRkJUQ3hIUVVGblFpeEpRVUZvUWp0QlFVTkJMRzlEUVVGakxFdEJRVXRZTEdWQlFXNUNPMEZCUTBRN08wRkJSVVFzVVVGQlNTeExRVUZMVVN4UFFVRlVMRVZCUVd0Q0xFdEJRVXRCTEU5QlFVdzdRVUZEYkVJc1VVRkJTVUVzVDBGQlNpeEZRVUZoUVN4UlFVRlJMRWxCUVZJN1FVRkRZaXhSUVVGSlF5eFJRVUZLTEVWQlFXTkJMRk5CUVZNc1NVRkJWRHM3UVVGRlpDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkVjc1NTeHRRa0ZCVHp0QlFVRkJMR3RDUVVOblF5eExRVUZMWWl4TFFVUnlRenRCUVVGQkxGRkJRMGRqTEUxQlJFZ3NWMEZEUjBFc1RVRkVTRHRCUVVGQkxGRkJRMWRETEU5QlJGZ3NWMEZEVjBFc1QwRkVXRHRCUVVGQkxGRkJRMjlDU2l4UFFVUndRaXhYUVVOdlFrRXNUMEZFY0VJN096dEJRVWRNTEZGQlFVa3NRMEZCUTBFc1QwRkJUQ3hGUVVGak8wRkJRMW9zVjBGQlMwTXNVVUZCVEN4SFFVRm5RaXhMUVVGb1FqdEJRVU5CTERCRFFVRnZRaXhMUVVGTFdDeGxRVUY2UWp0QlFVTkVPenRCUVVWRUxGRkJRVWtzUzBGQlMyRXNUVUZCVkN4RlFVRnBRaXhMUVVGTFFTeE5RVUZNTzBGQlEycENMRkZCUVVsQkxFMUJRVW9zUlVGQldVRXNUMEZCVHl4SlFVRlFPMEZCUTFvc1VVRkJTVU1zVDBGQlNpeEZRVUZoUVN4UlFVRlJMRWxCUVZJN08wRkJSV0lzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YlVKQlJVUkRMRkVzZFVKQlFWYzdRVUZCUVN4clFrRkRNa0lzUzBGQlMyaENMRXRCUkdoRE8wRkJRVUVzVVVGRFJHbENMRlZCUkVNc1YwRkRSRUVzVlVGRVF6dEJRVUZCTEZGQlExZERMRmRCUkZnc1YwRkRWMEVzVjBGRVdEczdPMEZCUjFRc1UwRkJTMHdzU1VGQlREczdRVUZGUVN4UlFVRkpMRXRCUVV0SkxGVkJRVlFzUlVGQmNVSXNTMEZCUzBFc1ZVRkJURHRCUVVOeVFpeFJRVUZKUVN4VlFVRktMRVZCUVdkQ1FTeFhRVUZYTEVsQlFWZzdRVUZEYUVJc1VVRkJTVU1zVjBGQlNpeEZRVUZwUWtFc1dVRkJXU3hKUVVGYU96dEJRVVZxUWl4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSR3BDTEdVc09FSkJRV3RDTzBGQlEyaENMRk5CUVV0clFpeFhRVUZNTEVkQlFXMUNMRzlEUVVGdVFqdEJRVU5CTEZOQlFVdERMRWxCUVV3c1IwRkJXU3hMUVVGTFpDeFBRVUZxUWpzN1FVRkdaMElzYTBKQlNXTXNTMEZCUzA0c1MwRktia0k3UVVGQlFTeFJRVWxTY1VJc1VVRktVU3hYUVVsU1FTeFJRVXBSTzBGQlFVRXNVVUZKUlZZc1QwRktSaXhYUVVsRlFTeFBRVXBHT3pzN1FVRk5hRUlzVVVGQlNTeExRVUZMVnl4TlFVRlVMRVZCUVdsQ08wRkJRMllzVjBGQlMyaENMRTlCUVV3c1IwRkJaU3hMUVVGTFowSXNUVUZCVEN4RFFVRlpMRXRCUVV0b1FpeFBRVUZxUWl4RFFVRm1PMEZCUTBRN08wRkJSVVFzVVVGQlNXVXNVVUZCU2l4RlFVRmpRU3hUUVVGVExFdEJRVXRtTEU5QlFXUXNSVUZCZFVJc1NVRkJka0k3UVVGRFpDeFRRVUZMYVVJc1lVRkJURHM3UVVGRlFTeFJRVUZKTEVOQlFVTmFMRTlCUVVRc1NVRkJXU3hMUVVGTFF5eFJRVUZ5UWl4RlFVRXJRanRCUVVNM1FpeHZRMEZCWXl4TFFVRkxXQ3hsUVVGdVFqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1MwRkJTM1ZDTEdkQ1FVRk1MRWxCUVhsQ0xFdEJRVXRCTEdkQ1FVRk1MRVZCUVRkQ0xFVkJRWE5FTzBGQlEzQkVMRmRCUVV0U0xGRkJRVXc3UVVGRFJEczdRVUZGUkN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSRmdzVVN4eFFrRkJVMHdzU3l4RlFVRlBPMEZCUTJRc1UwRkJTMEVzUzBGQlRDeG5Ra0ZEU3l4TFFVRkxRU3hMUVVSV0xFVkJSVXRCTEV0QlJrdzdRVUZKUVN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSSGxDTEVjc2EwSkJRVTA3UVVGRFNpeFhRVUZQTEV0QlFVdHVRaXhQUVVGYU8wRkJRMFFzUnpzN2JVSkJSVVJ2UWl4SExHZENRVUZKUXl4RExFVkJRVWM3UVVGRFRDeFRRVUZMY2tJc1QwRkJUQ3hIUVVGbGNVSXNRMEZCWmp0QlFVTkJMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMjFDUVVWRVF5eFBMRzlDUVVGUlF5eEhMRVZCUVVzN1FVRkRXQ3hYUVVGUExFdEJRVXMzUWl4TFFVRk1MRU5CUVZjMlFpeEhRVUZZTEVOQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkVNc1Z5d3dRa0ZCWXp0QlFVTmFMRmRCUVU4c01FSkJRV1VzUzBGQlMzaENMRTlCUVV3c1IwRkJaU3hMUVVGTFl5eEpRVUZ1UXl4RlFVRjVReXhMUVVGTFJDeFhRVUU1UXl4RFFVRlFPMEZCUTBRc1J6czdiVUpCUlVSUUxGRXNkVUpCUVZjN1FVRkRWQ3hYUVVGUExFdEJRVXRCTEZGQlFWbzdRVUZEUkN4SE96dHRRa0ZGUkcxQ0xGY3NkMEpCUVZsRExGRXNSVUZCVlR0QlFVTndRaXhUUVVGTFF5eFRRVUZNTEVkQlFXbENMRXRCUVV0QkxGTkJRVXdzU1VGQmEwSXNSVUZCYmtNN1FVRkRRU3hUUVVGTFF5eFpRVUZNTEVkQlFXOUNMRXRCUVV0QkxGbEJRVXdzU1VGQmNVSXNRMEZCZWtNN1FVRkRRU3hSUVVGSkxFdEJRVXRFTEZOQlFVd3NRMEZCWlVVc1QwRkJaaXhEUVVGMVFrZ3NVVUZCZGtJc1RVRkJjVU1zUTBGQlF5eERRVUV4UXl4RlFVRTJRenRCUVVNelF5eFhRVUZMUXl4VFFVRk1MRU5CUVdWSExFbEJRV1lzUTBGQmIwSktMRkZCUVhCQ08wRkJRMEVzVjBGQlMwVXNXVUZCVER0QlFVTkVPMEZCUTBRc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN2JVSkJSVVJITEdNc01rSkJRV1ZNTEZFc1JVRkJWVHRCUVVOMlFpeFJRVUZOVFN4blFrRkJhVUlzUzBGQlMwd3NVMEZCVGl4SFFVRnRRaXhMUVVGTFFTeFRRVUZNTEVOQlFXVkZMRTlCUVdZc1EwRkJkVUpJTEZGQlFYWkNMRU5CUVc1Q0xFZEJRWE5FTEVOQlFVTXNRMEZCTjBVN1FVRkRRU3hSUVVGSlRTeHJRa0ZCYTBJc1EwRkJReXhEUVVGMlFpeEZRVUV3UWp0QlFVTjRRaXhYUVVGTFNpeFpRVUZNTzBGQlEwRXNWMEZCUzBRc1UwRkJUQ3hEUVVGbFRTeE5RVUZtTEVOQlFYTkNSQ3hoUVVGMFFpeEZRVUZ4UXl4RFFVRnlRenRCUVVORU8wRkJRMFFzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YlVKQlJVUm1MR0VzTkVKQlFXZENPMEZCUTJRc1VVRkJUV3BDTEZWQlFWVXNTMEZCUzIxQ0xFZEJRVXdzUlVGQmFFSTdRVUZEUVN4VFFVRkxMRWxCUVVsbExFbEJRVWtzUTBGQllpeEZRVUZuUWtFc1NVRkJTU3hMUVVGTFRpeFpRVUY2UWl4RlFVRjFRMDBzUjBGQmRrTXNSVUZCTkVNN1FVRkRNVU1zVjBGQlMxQXNVMEZCVEN4RFFVRmxUeXhEUVVGbUxFVkJRV3RDYkVNc1QwRkJiRUlzUlVGQk1rSXNTVUZCTTBJN1FVRkRSRHRCUVVORUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN096czdPMnRDUVVkWlVDeE5JaXdpWm1sc1pTSTZJbWx1WkdWNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2IyNUdjbUZ0WlZWd1pHRjBaU3dnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlN3Z2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbElIMGdabkp2YlNBbkxpNHZabkpoYldWemVXNWpKenRjYm1sdGNHOXlkQ0I3SUhOd1pXVmtVR1Z5VTJWamIyNWtJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dVhHNWpiR0Z6Y3lCQlkzUnBiMjRnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lIUm9hWE11YzJOb1pXUjFiR1ZrVlhCa1lYUmxJRDBnZEdocGN5NXpZMmhsWkhWc1pXUlZjR1JoZEdVdVltbHVaQ2gwYUdsektUdGNibHh1SUNBZ0lIUm9hWE11Y0hKdmNITWdQU0I3WEc0Z0lDQWdJQ0F1TGk1MGFHbHpMbU52Ym5OMGNuVmpkRzl5TG1SbFptRjFiSFJRY205d2MxeHVJQ0FnSUgwN1hHNWNiaUFnSUNCMGFHbHpMbk5sZEZCeWIzQnpLSEJ5YjNCektUdGNibHh1SUNBZ0lIUm9hWE11WTNWeWNtVnVkQ0E5SUhCeWIzQnpMbU4xY25KbGJuUWdmSHdnY0hKdmNITXVabkp2YlNCOGZDQXdPMXh1SUNCOVhHNWNiaUFnYzNSaGNuUW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QnZibE4wWVhKMExDQmZiMjVUZEdGeWRDd2djR0Z6YzJsMlpTQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JseHVJQ0FnSUdsbUlDZ2hjR0Z6YzJsMlpTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1cGMwRmpkR2wyWlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0J2YmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11YzJOb1pXUjFiR1ZrVlhCa1lYUmxLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NXZibE4wWVhKMEtTQjBhR2x6TG05dVUzUmhjblFvS1R0Y2JpQWdJQ0JwWmlBb2IyNVRkR0Z5ZENrZ2IyNVRkR0Z5ZENoMGFHbHpLVHRjYmlBZ0lDQnBaaUFvWDI5dVUzUmhjblFwSUY5dmJsTjBZWEowS0hSb2FYTXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCemRHOXdLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2diMjVUZEc5d0xDQmZiMjVUZEc5d0xDQndZWE56YVhabElIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tDRndZWE56YVhabEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG1selFXTjBhWFpsSUQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0JqWVc1alpXeFBia1p5WVcxbFZYQmtZWFJsS0hSb2FYTXVjMk5vWldSMWJHVmtWWEJrWVhSbEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9kR2hwY3k1dmJsTjBiM0FwSUhSb2FYTXViMjVUZEc5d0tDazdYRzRnSUNBZ2FXWWdLRzl1VTNSdmNDa2diMjVUZEc5d0tIUm9hWE1wTzF4dUlDQWdJR2xtSUNoZmIyNVRkRzl3S1NCZmIyNVRkRzl3S0hSb2FYTXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCamIyMXdiR1YwWlNncElIdGNiaUFnSUNCamIyNXpkQ0I3SUc5dVEyOXRjR3hsZEdVc0lGOXZia052YlhCc1pYUmxJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2RHaHBjeTV6ZEc5d0tDazdYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NXZia052YlhCc1pYUmxLU0IwYUdsekxtOXVRMjl0Y0d4bGRHVW9LVHRjYmlBZ0lDQnBaaUFvYjI1RGIyMXdiR1YwWlNrZ2IyNURiMjF3YkdWMFpTaDBhR2x6S1R0Y2JpQWdJQ0JwWmlBb1gyOXVRMjl0Y0d4bGRHVXBJRjl2YmtOdmJYQnNaWFJsS0hSb2FYTXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCelkyaGxaSFZzWldSVmNHUmhkR1VvS1NCN1hHNGdJQ0FnZEdocGN5NXNZWE4wVlhCa1lYUmxaQ0E5SUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNncE8xeHVJQ0FnSUhSb2FYTXVjSEpsZGlBOUlIUm9hWE11WTNWeWNtVnVkRHRjYmx4dUlDQWdJR052Ym5OMElIc2diMjVWY0dSaGRHVXNJSEJoYzNOcGRtVWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCcFppQW9kR2hwY3k1MWNHUmhkR1VwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRDQTlJSFJvYVhNdWRYQmtZWFJsS0hSb2FYTXVZM1Z5Y21WdWRDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLRzl1VlhCa1lYUmxLU0J2YmxWd1pHRjBaU2gwYUdsekxtTjFjbkpsYm5Rc0lIUm9hWE1wTzF4dUlDQWdJSFJvYVhNdVptbHlaVXhwYzNSbGJtVnljeWdwTzF4dVhHNGdJQ0FnYVdZZ0tDRndZWE56YVhabElDWW1JSFJvYVhNdWFYTkJZM1JwZG1VcElIdGNiaUFnSUNBZ0lHOXVSbkpoYldWVmNHUmhkR1VvZEdocGN5NXpZMmhsWkhWc1pXUlZjR1JoZEdVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBhR2x6TG1selFXTjBhVzl1UTI5dGNHeGxkR1VnSmlZZ2RHaHBjeTVwYzBGamRHbHZia052YlhCc1pYUmxLQ2twSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZMjl0Y0d4bGRHVW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUhObGRGQnliM0J6S0hCeWIzQnpLU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeUE5SUh0Y2JpQWdJQ0FnSUM0dUxuUm9hWE11Y0hKdmNITXNYRzRnSUNBZ0lDQXVMaTV3Y205d2MxeHVJQ0FnSUgwN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQm5aWFFvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVkzVnljbVZ1ZER0Y2JpQWdmVnh1WEc0Z0lITmxkQ2gyS1NCN1hHNGdJQ0FnZEdocGN5NWpkWEp5Wlc1MElEMGdkanRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUdkbGRGQnliM0FvYTJWNUtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjSEp2Y0hOYmEyVjVYVHRjYmlBZ2ZWeHVYRzRnSUdkbGRGWmxiRzlqYVhSNUtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCemNHVmxaRkJsY2xObFkyOXVaQ2gwYUdsekxtTjFjbkpsYm5RZ0xTQjBhR2x6TG5CeVpYWXNJSFJvYVhNdWJHRnpkRlZ3WkdGMFpXUXBPMXh1SUNCOVhHNWNiaUFnYVhOQlkzUnBkbVVvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWFYTkJZM1JwZG1VN1hHNGdJSDFjYmx4dUlDQmhaR1JNYVhOMFpXNWxjaWhzYVhOMFpXNWxjaWtnZTF4dUlDQWdJSFJvYVhNdWJHbHpkR1Z1WlhKeklEMGdkR2hwY3k1c2FYTjBaVzVsY25NZ2ZId2dXMTA3WEc0Z0lDQWdkR2hwY3k1dWRXMU1hWE4wWlc1bGNuTWdQU0IwYUdsekxtNTFiVXhwYzNSbGJtVnljeUI4ZkNBd08xeHVJQ0FnSUdsbUlDaDBhR2x6TG14cGMzUmxibVZ5Y3k1cGJtUmxlRTltS0d4cGMzUmxibVZ5S1NBOVBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViR2x6ZEdWdVpYSnpMbkIxYzJnb2JHbHpkR1Z1WlhJcE8xeHVJQ0FnSUNBZ2RHaHBjeTV1ZFcxTWFYTjBaVzVsY25Nckt6dGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnlaVzF2ZG1WTWFYTjBaVzVsY2loc2FYTjBaVzVsY2lrZ2UxeHVJQ0FnSUdOdmJuTjBJR3hwYzNSbGJtVnlTVzVrWlhnZ1BTQW9kR2hwY3k1c2FYTjBaVzVsY25NcElEOGdkR2hwY3k1c2FYTjBaVzVsY25NdWFXNWtaWGhQWmloc2FYTjBaVzVsY2lrZ09pQXRNVHRjYmlBZ0lDQnBaaUFvYkdsemRHVnVaWEpKYm1SbGVDQWhQVDBnTFRFcElIdGNiaUFnSUNBZ0lIUm9hWE11Ym5WdFRHbHpkR1Z1WlhKekxTMDdYRzRnSUNBZ0lDQjBhR2x6TG14cGMzUmxibVZ5Y3k1emNHeHBZMlVvYkdsemRHVnVaWEpKYm1SbGVDd2dNU2s3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnWm1seVpVeHBjM1JsYm1WeWN5Z3BJSHRjYmlBZ0lDQmpiMjV6ZENCamRYSnlaVzUwSUQwZ2RHaHBjeTVuWlhRb0tUdGNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11Ym5WdFRHbHpkR1Z1WlhKek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViR2x6ZEdWdVpYSnpXMmxkS0dOMWNuSmxiblFzSUhSb2FYTXBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkJZM1JwYjI0N1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJlbmRlcmVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbmRlcmVyKTtcblxuICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMsIHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLmNoYW5nZWRWYWx1ZXMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBzdGF0ZS5cbiAgICogSWYgYGtleWAgaXMgbm90IGRlZmluZWQsIHJldHVybiBlbnRpcmUgY2FjaGVkIHN0YXRlLlxuICAgKiBJZiBga2V5YCBpcyBkZWZpbmVkLCByZXR1cm4gY2FjaGVkIHZhbHVlIGlmIHByZXNlbnQuXG4gICAqIElmIGBrZXlgIGlzIGRlZmluZWQgYW5kIGNhY2hlZCB2YWx1ZSBpcyBub3QgcHJlc2VudCwgcmVhZCBhbmQgcmV0dXJuLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IChvcHRpb25hbCkga2V5IG9mIHZhbHVlXG4gICAqIEByZXR1cm4ge3ZhbHVlfVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkKGtleSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVhZCB2YWx1ZSBhY2NvcmRpbmcgdG8gYG9uUmVhZGBcbiAgICogQHBhcmFtICB7c3RyaW5nfSBOYW1lIG9mIHByb3BlcnR5IHRvIHJlYWRcbiAgICogQHJldHVybiB7W3R5cGVdfVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gcmVhZChrZXkpIHtcbiAgICBpZiAodGhpcy5vblJlYWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uUmVhZChrZXkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIGBzdGF0ZWAgd2l0aCBuZXcgdmFsdWVzIGFuZCBzY2hlZHVsZSBgcmVuZGVyYC5cbiAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlc1xuICAgKiBAcGFyYW0ge3ZhbHVlfSB2YWx1ZSB0b3NldFxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHZhbHVlcyA9IGFyZ3NbMF07XG4gICAgICAvLyBTZXQgbXVsdGlwbGUgdmFsdWVzXG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShrZXksIHZhbHVlc1trZXldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9rZXkyID0gYXJnc1swXSxcbiAgICAgICAgICB2YWx1ZSA9IGFyZ3NbMV07XG5cbiAgICAgIHRoaXMuc2V0VmFsdWUoX2tleTIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKSB7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lUmVuZGVyKSh0aGlzLnJlbmRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gPiBXaWxleSAtIDYgaW4gdGhlIE1vcm5pbmdcbiAgLyoqXG4gICAqIFNldCBhIHNpbmdsZSB2YWx1ZVxuICAgKiBJZiBhIHN0cmluZyBvciBudW1iZXIsIHNldCBkaXJlY3RseS5cbiAgICogSWYgYW4gb2JqZWN0IG9yIGFycmF5LCBjcmVhdGUgbmV3IG9iamVjdCBvciBhcnJheVxuICAgKiBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3QuIFRoZW4gc2hhbGxvdyBjb21wYXJlXG4gICAqIHRvIHNldCBhbmQgY29tcGFyZSBpbmRpdmlkdWFsIHZhbHVlcy5cbiAgICogT25lIG9mIHRoZSBjbGVhcmVyIGRyYXdiYWNrcyBhbmQgYW5ub3lhbmNlcyB3aXRoXG4gICAqIHVzaW5nIG11dGFibGUgaW5zdGVhZCBvZiBpbW11dGFibGUgc3RhdGVzLlxuICAgKiBAcGFyYW0ge1t0eXBlXX0ga2V5XG4gICAqIEBwYXJhbSB7W3R5cGVdfSB2YWx1ZVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uIHNldFZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgY3VycmVudFZhbHVlID0gdGhpcy5zdGF0ZVtrZXldO1xuXG4gICAgLy8gSWYgbnVtYmVyIG9yIHN0cmluZywgc2V0IGRpcmVjdGx5XG4gICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlKSB8fCAoMCwgX3V0aWxzLmlzU3RyaW5nKSh2YWx1ZSkpIHtcbiAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc0FycmF5KSh2YWx1ZSkpIHtcbiAgICAgIGlmICghY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IFtdO1xuICAgICAgfVxuXG4gICAgICB2YXIgbnVtVmFsdWVzID0gdmFsdWUubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1WYWx1ZXM7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZVtrZXldW2ldICE9PSB2YWx1ZVtpXSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVtpXSA9IHZhbHVlW2ldO1xuICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNPYmopKHZhbHVlKSkge1xuICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0ge307XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIHZhbHVlS2V5IGluIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV1bdmFsdWVLZXldICE9PSB2YWx1ZVt2YWx1ZUtleV0pIHtcbiAgICAgICAgICB0aGlzLnN0YXRlW2tleV1bdmFsdWVLZXldID0gdmFsdWVbdmFsdWVLZXldO1xuICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNoYW5nZWRWYWx1ZXMucHVzaChrZXkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRmlyZXMgYG9uUmVuZGVyYCBpZiB2YWx1ZXMgaGF2ZSBjaGFuZ2VkIG9yIGBmb3JjZVJlbmRlcmBcbiAgICogaXMgc2V0IHRvIHRydWUuXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgZm9yY2VSZW5kZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgaWYgKChmb3JjZVJlbmRlciB8fCB0aGlzLmhhc0NoYW5nZWQpICYmIHRoaXMub25SZW5kZXIpIHtcbiAgICAgIHRoaXMub25SZW5kZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZWRWYWx1ZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHNpVW1WdVpHVnlaWElpTENKd2NtOXdjeUlzSW5KbGJtUmxjaUlzSW1KcGJtUWlMQ0pqYjI1emRISjFZM1J2Y2lJc0ltUmxabUYxYkhSUWNtOXdjeUlzSW5OMFlYUmxJaXdpWTJoaGJtZGxaRlpoYkhWbGN5SXNJbWRsZENJc0ltdGxlU0lzSW5WdVpHVm1hVzVsWkNJc0luSmxZV1FpTENKdmJsSmxZV1FpTENKelpYUWlMQ0poY21keklpd2lkbUZzZFdWeklpd2ljMlYwVm1Gc2RXVWlMQ0oyWVd4MVpTSXNJbWhoYzBOb1lXNW5aV1FpTENKamRYSnlaVzUwVm1Gc2RXVWlMQ0p1ZFcxV1lXeDFaWE1pTENKc1pXNW5kR2dpTENKcElpd2lkbUZzZFdWTFpYa2lMQ0p3ZFhOb0lpd2labTl5WTJWU1pXNWtaWElpTENKdmJsSmxibVJsY2lKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3TzBGQlEwRTdPenM3U1VGRlRVRXNVVHRCUVVOS0xHOUNRVUZaUXl4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlEycENMRk5CUVV0RExFMUJRVXdzUjBGQll5eExRVUZMUVN4TlFVRk1MRU5CUVZsRExFbEJRVm9zUTBGQmFVSXNTVUZCYWtJc1EwRkJaRHM3UVVGRlFTeFRRVUZMUml4TFFVRk1MR2RDUVVOTExFdEJRVXRITEZkQlFVd3NRMEZCYVVKRExGbEJSSFJDTEVWQlJVdEtMRXRCUmt3N08wRkJTMEVzVTBGQlMwc3NTMEZCVEN4SFFVRmhMRVZCUVdJN1FVRkRRU3hUUVVGTFF5eGhRVUZNTEVkQlFYRkNMRVZCUVhKQ08wRkJRMFE3TzBGQlJVUTdPenM3T3pzN096czdjVUpCVVVGRExFY3NaMEpCUVVsRExFY3NSVUZCU3p0QlFVTlFMRkZCUVVsQkxFZEJRVW9zUlVGQlV6dEJRVU5RTEZWQlFVa3NTMEZCUzBnc1MwRkJUQ3hEUVVGWFJ5eEhRVUZZTEUxQlFXOUNReXhUUVVGNFFpeEZRVUZ0UXp0QlFVTnFReXhsUVVGUExFdEJRVXRLTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hEUVVGUU8wRkJRMFFzVDBGR1JDeE5RVVZQTzBGQlEwd3NaVUZCVHl4TFFVRkxSU3hKUVVGTUxFTkJRVlZHTEVkQlFWWXNRMEZCVUR0QlFVTkVPMEZCUTBZc1MwRk9SQ3hOUVUxUE8wRkJRMHdzWVVGQlR5eExRVUZMU0N4TFFVRmFPMEZCUTBRN1FVRkRSaXhIT3p0QlFVVkVPenM3T3pzN08zRkNRVXRCU3l4SkxHbENRVUZMUml4SExFVkJRVXM3UVVGRFVpeFJRVUZKTEV0QlFVdEhMRTFCUVZRc1JVRkJhVUk3UVVGRFppeGhRVUZQTEV0QlFVdEJMRTFCUVV3c1EwRkJXVWdzUjBGQldpeERRVUZRTzBGQlEwUTdRVUZEUml4SE96dEJRVVZFT3pzN096czdPM0ZDUVV0QlNTeEhMR3RDUVVGaE8wRkJRVUVzYzBOQlFVNURMRWxCUVUwN1FVRkJUa0VzVlVGQlRUdEJRVUZCT3p0QlFVTllMRkZCUVVrc1QwRkJUMEVzUzBGQlN5eERRVUZNTEVOQlFWQXNTMEZCYlVJc1YwRkJka0lzUlVGQmIwTTdRVUZCUVN4VlFVTXhRa01zVFVGRU1FSXNSMEZEWmtRc1NVRkVaVHRCUVVWc1F6czdRVUZEUVN4WFFVRkxMRWxCUVUxTUxFZEJRVmdzU1VGQmEwSk5MRTFCUVd4Q0xFVkJRVEJDTzBGQlEzaENMR0ZCUVV0RExGRkJRVXdzUTBGQlkxQXNSMEZCWkN4RlFVRnRRazBzVDBGQlQwNHNSMEZCVUN4RFFVRnVRanRCUVVORU8wRkJRMFlzUzBGT1JDeE5RVTFQTzBGQlFVRXNWVUZEUjBFc1MwRkVTQ3hIUVVOclFrc3NTVUZFYkVJN1FVRkJRU3hWUVVOUlJ5eExRVVJTTEVkQlEydENTQ3hKUVVSc1FqczdRVUZGVEN4WFFVRkxSU3hSUVVGTUxFTkJRV05RTEV0QlFXUXNSVUZCYlVKUkxFdEJRVzVDTzBGQlEwUTdPMEZCUlVRc1VVRkJTU3hMUVVGTFF5eFZRVUZVTEVWQlFYRkNPMEZCUTI1Q0xHOURRVUZqTEV0QlFVdG9RaXhOUVVGdVFqdEJRVU5FT3p0QlFVVkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMEZCUlVRN1FVRkRRVHM3T3pzN096czdPenM3T3p0eFFrRlhRV01zVVN4eFFrRkJVMUFzUnl4RlFVRkxVU3hMTEVWQlFVODdRVUZEYmtJc1VVRkJUVVVzWlVGQlpTeExRVUZMWWl4TFFVRk1MRU5CUVZkSExFZEJRVmdzUTBGQmNrSTdPMEZCUlVFN1FVRkRRU3hSUVVGSkxHdENRVUZOVVN4TFFVRk9MRXRCUVdkQ0xIRkNRVUZUUVN4TFFVRlVMRU5CUVhCQ0xFVkJRWEZETzBGQlEyNURMRlZCUVVsRkxHbENRVUZwUWtZc1MwRkJja0lzUlVGQk5FSTdRVUZETVVJc1lVRkJTMWdzUzBGQlRDeERRVUZYUnl4SFFVRllMRWxCUVd0Q1VTeExRVUZzUWp0QlFVTkJMR0ZCUVV0RExGVkJRVXdzUjBGQmEwSXNTVUZCYkVJN1FVRkRSRHRCUVVOR0xFdEJURVFzVFVGTFR5eEpRVUZKTEc5Q1FVRlJSQ3hMUVVGU0xFTkJRVW9zUlVGQmIwSTdRVUZEZWtJc1ZVRkJTU3hEUVVGRFJTeFpRVUZNTEVWQlFXMUNPMEZCUTJwQ0xHRkJRVXRpTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hKUVVGclFpeEZRVUZzUWp0QlFVTkVPenRCUVVWRUxGVkJRVTFYTEZsQlFWbElMRTFCUVUxSkxFMUJRWGhDTzBGQlEwRXNWMEZCU3l4SlFVRkpReXhKUVVGSkxFTkJRV0lzUlVGQlowSkJMRWxCUVVsR0xGTkJRWEJDTEVWQlFTdENSU3hIUVVFdlFpeEZRVUZ2UXp0QlFVTnNReXhaUVVGSkxFdEJRVXRvUWl4TFFVRk1MRU5CUVZkSExFZEJRVmdzUlVGQlowSmhMRU5CUVdoQ0xFMUJRWFZDVEN4TlFVRk5TeXhEUVVGT0xFTkJRVE5DTEVWQlFYRkRPMEZCUTI1RExHVkJRVXRvUWl4TFFVRk1MRU5CUVZkSExFZEJRVmdzUlVGQlowSmhMRU5CUVdoQ0xFbEJRWEZDVEN4TlFVRk5TeXhEUVVGT0xFTkJRWEpDTzBGQlEwRXNaVUZCUzBvc1ZVRkJUQ3hIUVVGclFpeEpRVUZzUWp0QlFVTkVPMEZCUTBZN1FVRkRSaXhMUVZwTkxFMUJXVUVzU1VGQlNTeHJRa0ZCVFVRc1MwRkJUaXhEUVVGS0xFVkJRV3RDTzBGQlEzWkNMRlZCUVVrc1EwRkJRMFVzV1VGQlRDeEZRVUZ0UWp0QlFVTnFRaXhoUVVGTFlpeExRVUZNTEVOQlFWZEhMRWRCUVZnc1NVRkJhMElzUlVGQmJFSTdRVUZEUkRzN1FVRkZSQ3hYUVVGTExFbEJRVWxqTEZGQlFWUXNTVUZCY1VKT0xFdEJRWEpDTEVWQlFUUkNPMEZCUXpGQ0xGbEJRVWtzUzBGQlMxZ3NTMEZCVEN4RFFVRlhSeXhIUVVGWUxFVkJRV2RDWXl4UlFVRm9RaXhOUVVFNFFrNHNUVUZCVFUwc1VVRkJUaXhEUVVGc1F5eEZRVUZ0UkR0QlFVTnFSQ3hsUVVGTGFrSXNTMEZCVEN4RFFVRlhSeXhIUVVGWUxFVkJRV2RDWXl4UlFVRm9RaXhKUVVFMFFrNHNUVUZCVFUwc1VVRkJUaXhEUVVFMVFqdEJRVU5CTEdWQlFVdE1MRlZCUVV3c1IwRkJhMElzU1VGQmJFSTdRVUZEUkR0QlFVTkdPMEZCUTBZN08wRkJSVVFzVVVGQlNTeExRVUZMUVN4VlFVRlVMRVZCUVhGQ08wRkJRMjVDTEZkQlFVdFlMR0ZCUVV3c1EwRkJiVUpwUWl4SlFVRnVRaXhEUVVGM1FtWXNSMEZCZUVJN1FVRkRSRHRCUVVOR0xFYzdPMEZCUlVRN096czdPenM3Y1VKQlMwRlFMRTBzY1VKQlFUUkNPMEZCUVVFc1VVRkJja0oxUWl4WFFVRnhRaXgxUlVGQlVDeExRVUZQT3p0QlFVTXhRaXhSUVVGSkxFTkJRVU5CTEdWQlFXVXNTMEZCUzFBc1ZVRkJja0lzUzBGQmIwTXNTMEZCUzFFc1VVRkJOME1zUlVGQmRVUTdRVUZEY2tRc1YwRkJTMEVzVVVGQlREdEJRVU5FT3p0QlFVVkVMRk5CUVV0dVFpeGhRVUZNTEVOQlFXMUNZeXhOUVVGdVFpeEhRVUUwUWl4RFFVRTFRanRCUVVOQkxGTkJRVXRJTEZWQlFVd3NSMEZCYTBJc1MwRkJiRUk3TzBGQlJVRXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdPenM3YTBKQlIxbHNRaXhSSWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2diMjVHY21GdFpWSmxibVJsY2lCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVwYlhCdmNuUWdleUJwYzBGeWNtRjVMQ0JwYzA5aWFpd2dhWE5PZFcwc0lHbHpVM1J5YVc1bklIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyeGhjM01nVW1WdVpHVnlaWElnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lIUm9hWE11Y21WdVpHVnlJRDBnZEdocGN5NXlaVzVrWlhJdVltbHVaQ2gwYUdsektUdGNibHh1SUNBZ0lIUm9hWE11Y0hKdmNITWdQU0I3WEc0Z0lDQWdJQ0F1TGk1MGFHbHpMbU52Ym5OMGNuVmpkRzl5TG1SbFptRjFiSFJRY205d2N5eGNiaUFnSUNBZ0lDNHVMbkJ5YjNCelhHNGdJQ0FnZlR0Y2JseHVJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQjdmVHRjYmlBZ0lDQjBhR2x6TG1Ob1lXNW5aV1JXWVd4MVpYTWdQU0JiWFR0Y2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkhaWFFnWTNWeWNtVnVkQ0J6ZEdGMFpTNWNiaUFnSUNvZ1NXWWdZR3RsZVdBZ2FYTWdibTkwSUdSbFptbHVaV1FzSUhKbGRIVnliaUJsYm5ScGNtVWdZMkZqYUdWa0lITjBZWFJsTGx4dUlDQWdLaUJKWmlCZ2EyVjVZQ0JwY3lCa1pXWnBibVZrTENCeVpYUjFjbTRnWTJGamFHVmtJSFpoYkhWbElHbG1JSEJ5WlhObGJuUXVYRzRnSUNBcUlFbG1JR0JyWlhsZ0lHbHpJR1JsWm1sdVpXUWdZVzVrSUdOaFkyaGxaQ0IyWVd4MVpTQnBjeUJ1YjNRZ2NISmxjMlZ1ZEN3Z2NtVmhaQ0JoYm1RZ2NtVjBkWEp1TGx4dUlDQWdLaUJBY0dGeVlXMGdJSHR6ZEhKcGJtZDlJQ2h2Y0hScGIyNWhiQ2tnYTJWNUlHOW1JSFpoYkhWbFhHNGdJQ0FxSUVCeVpYUjFjbTRnZTNaaGJIVmxmVnh1SUNBZ0tpOWNiaUFnWjJWMEtHdGxlU2tnZTF4dUlDQWdJR2xtSUNoclpYa3BJSHRjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbk4wWVhSbFcydGxlVjBnSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1emRHRjBaVnRyWlhsZE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjbVZoWkNoclpYa3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXpkR0YwWlR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdktpcGNiaUFnSUNvZ1VtVmhaQ0IyWVd4MVpTQmhZMk52Y21ScGJtY2dkRzhnWUc5dVVtVmhaR0JjYmlBZ0lDb2dRSEJoY21GdElDQjdjM1J5YVc1bmZTQk9ZVzFsSUc5bUlIQnliM0JsY25SNUlIUnZJSEpsWVdSY2JpQWdJQ29nUUhKbGRIVnliaUI3VzNSNWNHVmRmVnh1SUNBZ0tpOWNiaUFnY21WaFpDaHJaWGtwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTV2YmxKbFlXUXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG05dVVtVmhaQ2hyWlhrcE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQlZjR1JoZEdVZ1lITjBZWFJsWUNCM2FYUm9JRzVsZHlCMllXeDFaWE1nWVc1a0lITmphR1ZrZFd4bElHQnlaVzVrWlhKZ0xseHVJQ0FnS2lCQWNHRnlZVzBnZTI5aWFtVmpkSDBnZG1Gc2RXVnpYRzRnSUNBcUlFQndZWEpoYlNCN2RtRnNkV1Y5SUhaaGJIVmxJSFJ2YzJWMFhHNGdJQ0FxTDF4dUlDQnpaWFFvTGk0dVlYSm5jeWtnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnWVhKbmMxc3hYU0E5UFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQWdJR052Ym5OMElGc2dkbUZzZFdWeklGMGdQU0JoY21kek8xeHVJQ0FnSUNBZ0x5OGdVMlYwSUcxMWJIUnBjR3hsSUhaaGJIVmxjMXh1SUNBZ0lDQWdabTl5SUNoamIyNXpkQ0JyWlhrZ2FXNGdkbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyVjBWbUZzZFdVb2EyVjVMQ0IyWVd4MVpYTmJhMlY1WFNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR052Ym5OMElGc2dhMlY1TENCMllXeDFaU0JkSUQwZ1lYSm5jenRjYmlBZ0lDQWdJSFJvYVhNdWMyVjBWbUZzZFdVb2EyVjVMQ0IyWVd4MVpTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWFHRnpRMmhoYm1kbFpDa2dlMXh1SUNBZ0lDQWdiMjVHY21GdFpWSmxibVJsY2loMGFHbHpMbkpsYm1SbGNpazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0F2THlBK0lGZHBiR1Y1SUMwZ05pQnBiaUIwYUdVZ1RXOXlibWx1WjF4dUlDQXZLaXBjYmlBZ0lDb2dVMlYwSUdFZ2MybHVaMnhsSUhaaGJIVmxYRzRnSUNBcUlFbG1JR0VnYzNSeWFXNW5JRzl5SUc1MWJXSmxjaXdnYzJWMElHUnBjbVZqZEd4NUxseHVJQ0FnS2lCSlppQmhiaUJ2WW1wbFkzUWdiM0lnWVhKeVlYa3NJR055WldGMFpTQnVaWGNnYjJKcVpXTjBJRzl5SUdGeWNtRjVYRzRnSUNBcUlHbG1JR2wwSUdSdlpYTnVKM1FnWVd4eVpXRmtlU0JsZUdsemRDNGdWR2hsYmlCemFHRnNiRzkzSUdOdmJYQmhjbVZjYmlBZ0lDb2dkRzhnYzJWMElHRnVaQ0JqYjIxd1lYSmxJR2x1WkdsMmFXUjFZV3dnZG1Gc2RXVnpMbHh1SUNBZ0tpQlBibVVnYjJZZ2RHaGxJR05zWldGeVpYSWdaSEpoZDJKaFkydHpJR0Z1WkNCaGJtNXZlV0Z1WTJWeklIZHBkR2hjYmlBZ0lDb2dkWE5wYm1jZ2JYVjBZV0pzWlNCcGJuTjBaV0ZrSUc5bUlHbHRiWFYwWVdKc1pTQnpkR0YwWlhNdVhHNGdJQ0FxSUVCd1lYSmhiU0I3VzNSNWNHVmRmU0JyWlhsY2JpQWdJQ29nUUhCaGNtRnRJSHRiZEhsd1pWMTlJSFpoYkhWbFhHNGdJQ0FxTDF4dUlDQnpaWFJXWVd4MVpTaHJaWGtzSUhaaGJIVmxLU0I3WEc0Z0lDQWdZMjl1YzNRZ1kzVnljbVZ1ZEZaaGJIVmxJRDBnZEdocGN5NXpkR0YwWlZ0clpYbGRPMXh1WEc0Z0lDQWdMeThnU1dZZ2JuVnRZbVZ5SUc5eUlITjBjbWx1Wnl3Z2MyVjBJR1JwY21WamRHeDVYRzRnSUNBZ2FXWWdLR2x6VG5WdEtIWmhiSFZsS1NCOGZDQnBjMU4wY21sdVp5aDJZV3gxWlNrcElIdGNiaUFnSUNBZ0lHbG1JQ2hqZFhKeVpXNTBWbUZzZFdVZ0lUMDlJSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1ZiYTJWNVhTQTlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1oaGMwTm9ZVzVuWldRZ1BTQjBjblZsTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBnWld4elpTQnBaaUFvYVhOQmNuSmhlU2gyWVd4MVpTa3BJSHRjYmlBZ0lDQWdJR2xtSUNnaFkzVnljbVZ1ZEZaaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdWYmEyVjVYU0E5SUZ0ZE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQmpiMjV6ZENCdWRXMVdZV3gxWlhNZ1BTQjJZV3gxWlM1c1pXNW5kR2c3WEc0Z0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJWWmhiSFZsY3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5OMFlYUmxXMnRsZVYxYmFWMGdJVDA5SUhaaGJIVmxXMmxkS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRjBaVnRyWlhsZFcybGRJRDBnZG1Gc2RXVmJhVjA3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTVvWVhORGFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBnWld4elpTQnBaaUFvYVhOUFltb29kbUZzZFdVcEtTQjdYRzRnSUNBZ0lDQnBaaUFvSVdOMWNuSmxiblJXWVd4MVpTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsVzJ0bGVWMGdQU0I3ZlR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2RtRnNkV1ZMWlhrZ2FXNGdkbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjM1JoZEdWYmEyVjVYVnQyWVd4MVpVdGxlVjBnSVQwOUlIWmhiSFZsVzNaaGJIVmxTMlY1WFNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1ZiYTJWNVhWdDJZV3gxWlV0bGVWMGdQU0IyWVd4MVpWdDJZV3gxWlV0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtaGhjME5vWVc1blpXUXBJSHRjYmlBZ0lDQWdJSFJvYVhNdVkyaGhibWRsWkZaaGJIVmxjeTV3ZFhOb0tHdGxlU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTHlvcVhHNGdJQ0FxSUVacGNtVnpJR0J2YmxKbGJtUmxjbUFnYVdZZ2RtRnNkV1Z6SUdoaGRtVWdZMmhoYm1kbFpDQnZjaUJnWm05eVkyVlNaVzVrWlhKZ1hHNGdJQ0FxSUdseklITmxkQ0IwYnlCMGNuVmxMbHh1SUNBZ0tpQkFjbVYwZFhKdUlIdDBhR2x6ZlZ4dUlDQWdLaTljYmlBZ2NtVnVaR1Z5S0dadmNtTmxVbVZ1WkdWeUlEMGdabUZzYzJVcElIdGNiaUFnSUNCcFppQW9LR1p2Y21ObFVtVnVaR1Z5SUh4OElIUm9hWE11YUdGelEyaGhibWRsWkNrZ0ppWWdkR2hwY3k1dmJsSmxibVJsY2lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV2YmxKbGJtUmxjaWdwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSFJvYVhNdVkyaGhibWRsWkZaaGJIVmxjeTVzWlc1bmRHZ2dQU0F3TzF4dUlDQWdJSFJvYVhNdWFHRnpRMmhoYm1kbFpDQTlJR1poYkhObE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdVbVZ1WkdWeVpYSTdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ1NTUmVuZGVyZXIoX2V4dGVuZHMoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb246IHRydWVcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfcmVuZGVyID0gcmVxdWlyZSgnLi9yZW5kZXInKTtcblxudmFyIF9yZW5kZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVuZGVyKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVzKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENTU1JlbmRlcmVyID0gZnVuY3Rpb24gKF9SZW5kZXJlcikge1xuICBfaW5oZXJpdHMoQ1NTUmVuZGVyZXIsIF9SZW5kZXJlcik7XG5cbiAgZnVuY3Rpb24gQ1NTUmVuZGVyZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENTU1JlbmRlcmVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVuZGVyZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDU1NSZW5kZXJlci5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZWxlbWVudCA9IF9wcm9wcy5lbGVtZW50LFxuICAgICAgICBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiA9IF9wcm9wcy5lbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbjtcblxuICAgICgwLCBfcmVuZGVyMi5kZWZhdWx0KShlbGVtZW50LCB0aGlzLnN0YXRlLCB0aGlzLmNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKTtcbiAgfTtcblxuICBDU1NSZW5kZXJlci5wcm90b3R5cGUub25SZWFkID0gZnVuY3Rpb24gb25SZWFkKGtleSkge1xuICAgIHZhciB2YWx1ZVR5cGUgPSBfdmFsdWVUeXBlczIuZGVmYXVsdFtrZXldO1xuXG4gICAgaWYgKCFfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICAgIHZhciBkb21WYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpWygwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKGtleSldIHx8IDA7XG4gICAgICByZXR1cm4gdmFsdWVUeXBlICYmIHZhbHVlVHlwZS5wYXJzZSA/IHZhbHVlVHlwZS5wYXJzZShkb21WYWx1ZSkgOiBkb21WYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbHVlVHlwZSkge1xuICAgICAgICByZXR1cm4gdmFsdWVUeXBlLmRlZmF1bHQgfHwgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ1NTUmVuZGVyZXI7XG59KF8yLmRlZmF1bHQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJbVZzWlcxbGJuUWlMQ0p3Y205d2N5SXNJa05UVTFKbGJtUmxjbVZ5SWl3aVpXNWhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0aUxDSnZibEpsYm1SbGNpSXNJbk4wWVhSbElpd2lZMmhoYm1kbFpGWmhiSFZsY3lJc0ltOXVVbVZoWkNJc0ltdGxlU0lzSW5aaGJIVmxWSGx3WlNJc0ltUnZiVlpoYkhWbElpd2lkMmx1Wkc5M0lpd2laMlYwUTI5dGNIVjBaV1JUZEhsc1pTSXNJbkJoY25ObElpd2laR1ZtWVhWc2RDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMnRDUVRaQ1pTeFZRVUZWUVN4UFFVRldMRVZCUVcxQ1F5eExRVUZ1UWl4RlFVRXdRanRCUVVOMlF5eFRRVUZQTEVsQlFVbERMRmRCUVVvN1FVRkRURVlzYjBKQlJFczdRVUZGVEVjc1owTkJRVFJDTzBGQlJuWkNMRXRCUjBaR0xFdEJTRVVzUlVGQlVEdEJRVXRFTEVNN08wRkJia05FT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3pzN096czdPenRKUVVWTlF5eFhPenM3T3pzN096czdkMEpCUTBwRkxGRXNkVUpCUVZjN1FVRkJRU3hwUWtGRGRVTXNTMEZCUzBnc1MwRkVOVU03UVVGQlFTeFJRVU5FUkN4UFFVUkRMRlZCUTBSQkxFOUJSRU03UVVGQlFTeFJRVU5SUnl3d1FrRkVVaXhWUVVOUlFTd3dRa0ZFVWpzN1FVRkZWQ3d3UWtGQlZVZ3NUMEZCVml4RlFVRnRRaXhMUVVGTFN5eExRVUY0UWl4RlFVRXJRaXhMUVVGTFF5eGhRVUZ3UXl4RlFVRnRSRWdzTUVKQlFXNUVPMEZCUTBRc1J6czdkMEpCUlVSSkxFMHNiVUpCUVU5RExFY3NSVUZCU3p0QlFVTldMRkZCUVUxRExGbEJRVmtzY1VKQlFXTkVMRWRCUVdRc1EwRkJiRUk3TzBGQlJVRXNVVUZCU1N4RFFVRkRMSGxDUVVGbFFTeEhRVUZtTEVOQlFVd3NSVUZCTUVJN1FVRkJRU3hWUVVOb1FsSXNUMEZFWjBJc1IwRkRTaXhMUVVGTFF5eExRVVJFTEVOQlEyaENSQ3hQUVVSblFqczdRVUZGZUVJc1ZVRkJUVlVzVjBGQlYwTXNUMEZCVDBNc1owSkJRVkFzUTBGQmQwSmFMRTlCUVhoQ0xFVkJRV2xETEVsQlFXcERMRVZCUVhWRExIZENRVUZUVVN4SFFVRlVMRU5CUVhaRExFdEJRWGxFTEVOQlFURkZPMEZCUTBFc1lVRkJVVU1zWVVGQllVRXNWVUZCVlVrc1MwRkJlRUlzUjBGQmFVTktMRlZCUVZWSkxFdEJRVllzUTBGQlowSklMRkZCUVdoQ0xFTkJRV3BETEVkQlFUWkVRU3hSUVVGd1JUdEJRVU5FTEV0QlNrUXNUVUZKVHp0QlFVTk1MRlZCUVVsRUxGTkJRVW9zUlVGQlpUdEJRVU5pTEdWQlFVOUJMRlZCUVZWTExFOUJRVllzU1VGQmNVSXNRMEZCTlVJN1FVRkRSQ3hQUVVaRUxFMUJSVTg3UVVGRFRDeGxRVUZQTEVOQlFWQTdRVUZEUkR0QlFVTkdPMEZCUTBZc1J5SXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JTWlc1a1pYSmxjaUJtY205dElDY3VMaThuTzF4dWFXMXdiM0owSUhKbGJtUmxja05UVXlCbWNtOXRJQ2N1TDNKbGJtUmxjaWM3WEc1cGJYQnZjblFnZEhKaGJuTm1iM0p0VUhKdmNITWdabkp2YlNBbkxpOTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVhVzF3YjNKMElIWmhiSFZsVkhsd1pYTk5ZWEFnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3ljN1hHNXBiWEJ2Y25RZ2NISmxabWw0WlhJZ1puSnZiU0FuTGk5d2NtVm1hWGhsY2ljN1hHNWNibU5zWVhOeklFTlRVMUpsYm1SbGNtVnlJR1Y0ZEdWdVpITWdVbVZ1WkdWeVpYSWdlMXh1SUNCdmJsSmxibVJsY2lncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdWc1pXMWxiblFzSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lISmxibVJsY2tOVFV5aGxiR1Z0Wlc1MExDQjBhR2x6TG5OMFlYUmxMQ0IwYUdsekxtTm9ZVzVuWldSV1lXeDFaWE1zSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1R0Y2JpQWdmVnh1WEc0Z0lHOXVVbVZoWkNoclpYa3BJSHRjYmlBZ0lDQmpiMjV6ZENCMllXeDFaVlI1Y0dVZ1BTQjJZV3gxWlZSNWNHVnpUV0Z3VzJ0bGVWMDdYRzVjYmlBZ0lDQnBaaUFvSVhSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElIdGNiaUFnSUNBZ0lHTnZibk4wSUhzZ1pXeGxiV1Z1ZENCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQWdJR052Ym5OMElHUnZiVlpoYkhWbElEMGdkMmx1Wkc5M0xtZGxkRU52YlhCMWRHVmtVM1I1YkdVb1pXeGxiV1Z1ZEN3Z2JuVnNiQ2xiY0hKbFptbDRaWElvYTJWNUtWMGdmSHdnTUR0Y2JpQWdJQ0FnSUhKbGRIVnliaUFvZG1Gc2RXVlVlWEJsSUNZbUlIWmhiSFZsVkhsd1pTNXdZWEp6WlNrZ1B5QjJZV3gxWlZSNWNHVXVjR0Z5YzJVb1pHOXRWbUZzZFdVcElEb2daRzl0Vm1Gc2RXVTdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdsbUlDaDJZV3gxWlZSNWNHVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFpoYkhWbFZIbHdaUzVrWldaaGRXeDBJSHg4SURBN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTUR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnS0dWc1pXMWxiblFzSUhCeWIzQnpLU0I3WEc0Z0lISmxkSFZ5YmlCdVpYY2dRMU5UVW1WdVpHVnlaWElvZTF4dUlDQWdJR1ZzWlcxbGJuUXNYRzRnSUNBZ1pXNWhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0NklIUnlkV1VzWEc0Z0lDQWdMaTR1Y0hKdmNITmNiaUFnZlNrN1hHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1JlbmRlcmVyKF9leHRlbmRzKHtcbiAgICBlbGVtZW50OiBlbGVtZW50XG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZXMpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFNWR1JlbmRlcmVyID0gZnVuY3Rpb24gKF9SZW5kZXJlcikge1xuICBfaW5oZXJpdHMoU1ZHUmVuZGVyZXIsIF9SZW5kZXJlcik7XG5cbiAgZnVuY3Rpb24gU1ZHUmVuZGVyZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU1ZHUmVuZGVyZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIHZhciBfcHJvcHMkZWxlbWVudCRnZXRCQm8gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKSxcbiAgICAgICAgeCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby54LFxuICAgICAgICB5ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLnksXG4gICAgICAgIHdpZHRoID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8uaGVpZ2h0O1xuXG4gICAgX3RoaXMuZWxlbWVudERpbWVuc2lvbnMgPSB7IHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBTVkdSZW5kZXJlci5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgIHZhciBhdHRycyA9ICgwLCBfYnVpbGQyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIHRoaXMuZWxlbWVudERpbWVuc2lvbnMpO1xuICAgICgwLCBfdXRpbHMuc2V0RE9NQXR0cnMpKGVsZW1lbnQsIGF0dHJzKTtcbiAgfTtcblxuICBTVkdSZW5kZXJlci5wcm90b3R5cGUub25SZWFkID0gZnVuY3Rpb24gb25SZWFkKGtleSkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG5cbiAgICBpZiAoIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZhbHVlVHlwZSA9IF92YWx1ZVR5cGVzMi5kZWZhdWx0W2tleV07XG4gICAgICByZXR1cm4gdmFsdWVUeXBlID8gdmFsdWVUeXBlLmRlZmF1bHQgOiAwO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU1ZHUmVuZGVyZXI7XG59KF8yLmRlZmF1bHQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJbVZzWlcxbGJuUWlMQ0p3Y205d2N5SXNJbE5XUjFKbGJtUmxjbVZ5SWl3aVoyVjBRa0p2ZUNJc0luZ2lMQ0o1SWl3aWQybGtkR2dpTENKb1pXbG5hSFFpTENKbGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lJc0ltOXVVbVZ1WkdWeUlpd2lZWFIwY25NaUxDSnpkR0YwWlNJc0ltOXVVbVZoWkNJc0ltdGxlU0lzSW1kbGRFRjBkSEpwWW5WMFpTSXNJblpoYkhWbFZIbHdaU0lzSW1SbFptRjFiSFFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0clFrRm5RMlVzVlVGQlZVRXNUMEZCVml4RlFVRnRRa01zUzBGQmJrSXNSVUZCTUVJN1FVRkRka01zVTBGQlR5eEpRVUZKUXl4WFFVRktPMEZCUTB4R08wRkJSRXNzUzBGRlJrTXNTMEZHUlN4RlFVRlFPMEZCU1VRc1F6czdRVUZ5UTBRN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN096czdPenRKUVVWTlF5eFhPenM3UVVGRFNpeDFRa0ZCV1VRc1MwRkJXaXhGUVVGdFFqdEJRVUZCT3p0QlFVRkJMR2xFUVVOcVFpeHhRa0ZCVFVFc1MwRkJUaXhEUVVScFFqczdRVUZCUVN4blEwRkhaVUVzVFVGQlRVUXNUMEZCVGl4RFFVRmpSeXhQUVVGa0xFVkJTR1k3UVVGQlFTeFJRVWRVUXl4RFFVaFRMSGxDUVVkVVFTeERRVWhUTzBGQlFVRXNVVUZIVGtNc1EwRklUU3g1UWtGSFRrRXNRMEZJVFR0QlFVRkJMRkZCUjBoRExFdEJTRWNzZVVKQlIwaEJMRXRCU0VjN1FVRkJRU3hSUVVkSlF5eE5RVWhLTEhsQ1FVZEpRU3hOUVVoS096dEJRVWxxUWl4VlFVRkxReXhwUWtGQlRDeEhRVUY1UWl4RlFVRkZTaXhKUVVGR0xFVkJRVXRETEVsQlFVd3NSVUZCVVVNc1dVRkJVaXhGUVVGbFF5eGpRVUZtTEVWQlFYcENPMEZCU21sQ08wRkJTMnhDT3p0M1FrRkZSRVVzVVN4MVFrRkJWenRCUVVGQkxGRkJRMFJVTEU5QlJFTXNSMEZEVnl4TFFVRkxReXhMUVVSb1FpeERRVU5FUkN4UFFVUkRPenRCUVVWVUxGRkJRVTFWTEZGQlFWRXNjVUpCUVUwc1MwRkJTME1zUzBGQldDeEZRVUZyUWl4TFFVRkxTQ3hwUWtGQmRrSXNRMEZCWkR0QlFVTkJMRFJDUVVGWlVpeFBRVUZhTEVWQlFYRkNWU3hMUVVGeVFqdEJRVU5FTEVjN08zZENRVVZFUlN4TkxHMUNRVUZQUXl4SExFVkJRVXM3UVVGQlFTeFJRVU5HWWl4UFFVUkZMRWRCUTFVc1MwRkJTME1zUzBGRVppeERRVU5HUkN4UFFVUkZPenM3UVVGSFZpeFJRVUZKTEVOQlFVTXNlVUpCUVdWaExFZEJRV1lzUTBGQlRDeEZRVUV3UWp0QlFVTjRRaXhoUVVGUFlpeFJRVUZSWXl4WlFVRlNMRU5CUVhGQ1JDeEhRVUZ5UWl4RFFVRlFPMEZCUTBRc1MwRkdSQ3hOUVVWUE8wRkJRMHdzVlVGQlRVVXNXVUZCV1N4eFFrRkJZVVlzUjBGQllpeERRVUZzUWp0QlFVTkJMR0ZCUVZGRkxGTkJRVVFzUjBGQlkwRXNWVUZCVlVNc1QwRkJlRUlzUjBGQmEwTXNRMEZCZWtNN1FVRkRSRHRCUVVOR0xFY2lMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVW1WdVpHVnlaWElnWm5KdmJTQW5MaTR2Snp0Y2JtbHRjRzl5ZENCaWRXbHNaQ0JtY205dElDY3VMMkoxYVd4a0p6dGNibWx0Y0c5eWRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lCbWNtOXRJQ2N1TGk5amMzTXZkSEpoYm5ObWIzSnRMWEJ5YjNCekp6dGNibWx0Y0c5eWRDQjJZV3gxWlZSNWNHVk5ZWEFnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3ljN1hHNXBiWEJ2Y25RZ2V5QnpaWFJFVDAxQmRIUnljeUI5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1Oc1lYTnpJRk5XUjFKbGJtUmxjbVZ5SUdWNGRHVnVaSE1nVW1WdVpHVnlaWElnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lITjFjR1Z5S0hCeWIzQnpLVHRjYmx4dUlDQWdJR052Ym5OMElIc2dlQ3dnZVN3Z2QybGtkR2dzSUdobGFXZG9kQ0I5SUQwZ2NISnZjSE11Wld4bGJXVnVkQzVuWlhSQ1FtOTRLQ2s3WEc0Z0lDQWdkR2hwY3k1bGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lBOUlIc2dlQ3dnZVN3Z2QybGtkR2dzSUdobGFXZG9kQ0I5TzF4dUlDQjlYRzVjYmlBZ2IyNVNaVzVrWlhJb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCbGJHVnRaVzUwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHTnZibk4wSUdGMGRISnpJRDBnWW5WcGJHUW9kR2hwY3k1emRHRjBaU3dnZEdocGN5NWxiR1Z0Wlc1MFJHbHRaVzV6YVc5dWN5azdYRzRnSUNBZ2MyVjBSRTlOUVhSMGNuTW9aV3hsYldWdWRDd2dZWFIwY25NcE8xeHVJQ0I5WEc1Y2JpQWdiMjVTWldGa0tHdGxlU2tnZTF4dUlDQWdJR052Ym5OMElIc2daV3hsYldWdWRDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JseHVJQ0FnSUdsbUlDZ2hkSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR1ZzWlcxbGJuUXVaMlYwUVhSMGNtbGlkWFJsS0d0bGVTazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbFZIbHdaU0E5SUhaaGJIVmxWSGx3WlUxaGNGdHJaWGxkTzF4dUlDQWdJQ0FnY21WMGRYSnVJQ2gyWVd4MVpWUjVjR1VwSUQ4Z2RtRnNkV1ZVZVhCbExtUmxabUYxYkhRZ09pQXdPMXh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQW9aV3hsYldWdWRDd2djSEp2Y0hNcElIdGNiaUFnY21WMGRYSnVJRzVsZHlCVFZrZFNaVzVrWlhKbGNpaDdYRzRnSUNBZ1pXeGxiV1Z1ZEN4Y2JpQWdJQ0F1TGk1d2NtOXdjMXh1SUNCOUtUdGNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmcvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBTVkdQYXRoUmVuZGVyZXIoX2V4dGVuZHMoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFNWR1BhdGhSZW5kZXJlciA9IGZ1bmN0aW9uIChfUmVuZGVyZXIpIHtcbiAgX2luaGVyaXRzKFNWR1BhdGhSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBTVkdQYXRoUmVuZGVyZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU1ZHUGF0aFJlbmRlcmVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICB2YXIgX3Byb3BzJGVsZW1lbnQkZ2V0QkJvID0gcHJvcHMuZWxlbWVudC5nZXRCQm94KCksXG4gICAgICAgIHggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueCxcbiAgICAgICAgeSA9IF9wcm9wcyRlbGVtZW50JGdldEJCby55LFxuICAgICAgICB3aWR0aCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLmhlaWdodDtcblxuICAgIF90aGlzLmVsZW1lbnREaW1lbnNpb25zID0ge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHksXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHBhdGhMZW5ndGg6IHByb3BzLmVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU1ZHUGF0aFJlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBwYXRoTGVuZ3RoID0gdGhpcy5lbGVtZW50RGltZW5zaW9ucy5wYXRoTGVuZ3RoO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgKDAsIF91dGlscy5zZXRET01BdHRycykoZWxlbWVudCwgKDAsIF9idWlsZDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgcGF0aExlbmd0aCkpO1xuICB9O1xuXG4gIFNWR1BhdGhSZW5kZXJlci5wcm90b3R5cGUub25SZWFkID0gZnVuY3Rpb24gb25SZWFkKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gIH07XG5cbiAgcmV0dXJuIFNWR1BhdGhSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTFhCaGRHZ3ZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHNpWld4bGJXVnVkQ0lzSW5CeWIzQnpJaXdpVTFaSFVHRjBhRkpsYm1SbGNtVnlJaXdpWjJWMFFrSnZlQ0lzSW5naUxDSjVJaXdpZDJsa2RHZ2lMQ0pvWldsbmFIUWlMQ0psYkdWdFpXNTBSR2x0Wlc1emFXOXVjeUlzSW5CaGRHaE1aVzVuZEdnaUxDSm5aWFJVYjNSaGJFeGxibWQwYUNJc0ltOXVVbVZ1WkdWeUlpd2ljM1JoZEdVaUxDSnZibEpsWVdRaUxDSnJaWGtpTENKblpYUkJkSFJ5YVdKMWRHVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRyUWtFMlFtVXNWVUZCVlVFc1QwRkJWaXhGUVVGdFFrTXNTMEZCYmtJc1JVRkJNRUk3UVVGRGRrTXNVMEZCVHl4SlFVRkpReXhsUVVGS08wRkJRMHhHTzBGQlJFc3NTMEZGUmtNc1MwRkdSU3hGUVVGUU8wRkJTVVFzUXpzN1FVRnNRMFE3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN096czdPMGxCUlUxRExHVTdPenRCUVVOS0xESkNRVUZaUkN4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlFVRXNhVVJCUTJwQ0xIRkNRVUZOUVN4TFFVRk9MRU5CUkdsQ096dEJRVUZCTEdkRFFVZGxRU3hOUVVGTlJDeFBRVUZPTEVOQlFXTkhMRTlCUVdRc1JVRklaanRCUVVGQkxGRkJSMVJETEVOQlNGTXNlVUpCUjFSQkxFTkJTRk03UVVGQlFTeFJRVWRPUXl4RFFVaE5MSGxDUVVkT1FTeERRVWhOTzBGQlFVRXNVVUZIU0VNc1MwRklSeXg1UWtGSFNFRXNTMEZJUnp0QlFVRkJMRkZCUjBsRExFMUJTRW9zZVVKQlIwbEJMRTFCU0VvN08wRkJTV3BDTEZWQlFVdERMR2xDUVVGTUxFZEJRWGxDTzBGQlEzWkNTaXhWUVVSMVFqdEJRVVYyUWtNc1ZVRkdkVUk3UVVGSGRrSkRMR3RDUVVoMVFqdEJRVWwyUWtNc2IwSkJTblZDTzBGQlMzWkNSU3hyUWtGQldWSXNUVUZCVFVRc1QwRkJUaXhEUVVGalZTeGpRVUZrTzBGQlRGY3NTMEZCZWtJN1FVRkthVUk3UVVGWGJFSTdPelJDUVVWRVF5eFJMSFZDUVVGWE8wRkJRVUVzVVVGRFJFWXNWVUZFUXl4SFFVTmpMRXRCUVV0RUxHbENRVVJ1UWl4RFFVTkVReXhWUVVSRE8wRkJRVUVzVVVGRlJGUXNUMEZHUXl4SFFVVlhMRXRCUVV0RExFdEJSbWhDTEVOQlJVUkVMRTlCUmtNN08wRkJSMVFzTkVKQlFWbEJMRTlCUVZvc1JVRkJjVUlzY1VKQlFVMHNTMEZCUzFrc1MwRkJXQ3hGUVVGclFrZ3NWVUZCYkVJc1EwRkJja0k3UVVGRFJDeEhPenMwUWtGRlJFa3NUU3h0UWtGQlQwTXNSeXhGUVVGTE8wRkJRMVlzVjBGQlR5eExRVUZMWWl4TFFVRk1MRU5CUVZkRUxFOUJRVmdzUTBGQmJVSmxMRmxCUVc1Q0xFTkJRV2REUkN4SFFVRm9ReXhEUVVGUU8wRkJRMFFzUnlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlNaVzVrWlhKbGNpQm1jbTl0SUNjdUxpOG5PMXh1YVcxd2IzSjBJR0oxYVd4a0lHWnliMjBnSnk0dlluVnBiR1FuTzF4dWFXMXdiM0owSUhzZ2MyVjBSRTlOUVhSMGNuTWdmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVqYkdGemN5QlRWa2RRWVhSb1VtVnVaR1Z5WlhJZ1pYaDBaVzVrY3lCU1pXNWtaWEpsY2lCN1hHNGdJR052Ym5OMGNuVmpkRzl5S0hCeWIzQnpLU0I3WEc0Z0lDQWdjM1Z3WlhJb2NISnZjSE1wTzF4dVhHNGdJQ0FnWTI5dWMzUWdleUI0TENCNUxDQjNhV1IwYUN3Z2FHVnBaMmgwSUgwZ1BTQndjbTl3Y3k1bGJHVnRaVzUwTG1kbGRFSkNiM2dvS1R0Y2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5SRWFXMWxibk5wYjI1eklEMGdlMXh1SUNBZ0lDQWdlQ3hjYmlBZ0lDQWdJSGtzWEc0Z0lDQWdJQ0IzYVdSMGFDeGNiaUFnSUNBZ0lHaGxhV2RvZEN4Y2JpQWdJQ0FnSUhCaGRHaE1aVzVuZEdnNklIQnliM0J6TG1Wc1pXMWxiblF1WjJWMFZHOTBZV3hNWlc1bmRHZ29LVnh1SUNBZ0lIMDdYRzRnSUgxY2JseHVJQ0J2YmxKbGJtUmxjaWdwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJSEJoZEdoTVpXNW5kR2dnZlNBOUlIUm9hWE11Wld4bGJXVnVkRVJwYldWdWMybHZibk03WEc0Z0lDQWdZMjl1YzNRZ2V5QmxiR1Z0Wlc1MElIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJSE5sZEVSUFRVRjBkSEp6S0dWc1pXMWxiblFzSUdKMWFXeGtLSFJvYVhNdWMzUmhkR1VzSUhCaGRHaE1aVzVuZEdncEtUdGNiaUFnZlZ4dVhHNGdJRzl1VW1WaFpDaHJaWGtwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1d2NtOXdjeTVsYkdWdFpXNTBMbWRsZEVGMGRISnBZblYwWlNoclpYa3BPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJQ2hsYkdWdFpXNTBMQ0J3Y205d2N5a2dlMXh1SUNCeVpYUjFjbTRnYm1WM0lGTldSMUJoZEdoU1pXNWtaWEpsY2loN1hHNGdJQ0FnWld4bGJXVnVkQ3hjYmlBZ0lDQXVMaTV3Y205d2MxeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0Q29sb3JWYWx1ZXMgPSBleHBvcnRzLmZpbmRWYWx1ZUFuZFVuaXQgPSBleHBvcnRzLmNyZWF0ZVVuaXRUeXBlID0gZXhwb3J0cy5pc0ZpcnN0Q2hhcnMgPSBleHBvcnRzLmNvbnRhaW5zID0gZXhwb3J0cy5zcGxpdENvbW1hRGVsaW1pdGVkID0gZXhwb3J0cy5zZXRET01BdHRycyA9IGV4cG9ydHMuaXNTdHJpbmcgPSBleHBvcnRzLmlzT2JqID0gZXhwb3J0cy5pc051bSA9IGV4cG9ydHMuaXNGdW5jID0gZXhwb3J0cy5pc0FycmF5ID0gZXhwb3J0cy5oYXNQcm9wZXJ0eSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBleHBvcnRzLmNhbWVsVG9EYXNoID0gdW5kZWZpbmVkO1xuZXhwb3J0cy5zcGxpdENvbG9yVmFsdWVzID0gc3BsaXRDb2xvclZhbHVlcztcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybWVycycpO1xuXG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbnZhciB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNhbWVsVG9EYXNoID0gZXhwb3J0cy5jYW1lbFRvRGFzaCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qXG4gIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gIFxuICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xudmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy5jdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbi8qXG4gIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gIEBwYXJhbSBbb2JqZWN0XVxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYm9vbGVhbl1cbiovXG52YXIgaGFzUHJvcGVydHkgPSBleHBvcnRzLmhhc1Byb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHlOYW1lKSB7XG4gIHJldHVybiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xudmFyIGlzQXJyYXkgPSBleHBvcnRzLmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbnZhciBpc0Z1bmMgPSBleHBvcnRzLmlzRnVuYyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG52YXIgaXNOdW0gPSBleHBvcnRzLmlzTnVtID0gZnVuY3Rpb24gKG51bSkge1xuICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbnZhciBpc09iaiA9IGV4cG9ydHMuaXNPYmogPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59O1xuXG52YXIgc2V0RE9NQXR0cnMgPSBleHBvcnRzLnNldERPTUF0dHJzID0gZnVuY3Rpb24gKGVsZW1lbnQsIGF0dHJzKSB7XG4gIGZvciAodmFyIGtleSBpbiBhdHRycykge1xuICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuICAgIH1cbiAgfVxufTtcbi8qXG4gIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcbn07XG5cbi8qKlxuICogIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgYW55IGFyZ3VtZW50IGZvciBgdGVybWBcbiAqIGBjb250YWlucygnbmVlZGxlJykoJ2hheXN0YWNrJylgXG4gKi9cbnZhciBjb250YWlucyA9IGV4cG9ydHMuY29udGFpbnMgPSBmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pICE9PSAtMTtcbiAgfTtcbn07XG5cbi8qKlxuICogIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgdG8gc2VlIGlmIGFuIGFyZ3VtZW50IGlzXG4gKiAgdGhlIGZpcnN0IGNoYXJhY3RlcnMgaW4gdGhlIHByb3ZpZGVkIGB0ZXJtYFxuICogYGlzRmlyc3RDaGFycygnbmVlZGxlJykoJ2hheXN0YWNrJylgXG4gKi9cbnZhciBpc0ZpcnN0Q2hhcnMgPSBleHBvcnRzLmlzRmlyc3RDaGFycyA9IGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBpc1N0cmluZyh0ZXJtKSAmJiB2LmluZGV4T2YodGVybSkgPT09IDA7XG4gIH07XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHVuaXQgdmFsdWUgdHlwZVxuICovXG52YXIgY3JlYXRlVW5pdFR5cGUgPSBleHBvcnRzLmNyZWF0ZVVuaXRUeXBlID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0ZXN0OiBjb250YWlucyh0eXBlKSxcbiAgICBwYXJzZTogcGFyc2VGbG9hdCxcbiAgICB0cmFuc2Zvcm06ICgwLCBfdHJhbnNmb3JtZXJzLmFwcGVuZFVuaXQpKHR5cGUpXG4gIH07XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgc3BsaXQgY29sb3JcbiAqIHZhbHVlcyBmcm9tIHN0cmluZyBpbnRvIGFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXG4gKiBgc3BsaXRDb2xvclZhbHVlcyhbJ1JlZCcsICdHcmVlbicsICdCbHVlJ10pKCdyZ2JhKDAsMCwwKScpYFxuICovXG5mdW5jdGlvbiBzcGxpdENvbG9yVmFsdWVzKHRlcm1zKSB7XG4gIHZhciBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcblxuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgdmFsdWVzID0ge307XG4gICAgdmFyIHZhbHVlc0FycmF5ID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2KSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgIHZhbHVlc1t0ZXJtc1tpXV0gPSB2YWx1ZXNBcnJheVtpXSAhPT0gdW5kZWZpbmVkID8gcGFyc2VGbG9hdCh2YWx1ZXNBcnJheVtpXSkgOiAxO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH07XG59XG5cbi8qXG4gIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gIFxuICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgXG4gIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG52YXIgZmluZFZhbHVlQW5kVW5pdCA9IGV4cG9ydHMuZmluZFZhbHVlQW5kVW5pdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodmFsdWUubWF0Y2gpIHtcbiAgICB2YXIgc3BsaXRWYWx1ZSA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsdWVbMV0pLFxuICAgICAgdW5pdDogc3BsaXRWYWx1ZVsyXVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlIH07XG4gIH1cbn07XG5cbi8qXG4gIFNwbGl0IGNvbG9yIHN0cmluZyBpbnRvIG1hcCBvZiBjb2xvciBwcm9wZXJ0aWVzXG5cbiAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICB7IFJlZDogMjU1Li4uIH1cbiovXG52YXIgZ2V0Q29sb3JWYWx1ZXMgPSBleHBvcnRzLmdldENvbG9yVmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlLCBjb2xvclRlcm1zKSB7XG4gIHZhciBudW1Db2xvclRlcm1zID0gY29sb3JUZXJtcy5sZW5ndGg7XG4gIHZhciBjb2xvclZhbHVlcyA9IHt9O1xuICB2YXIgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2YWx1ZSkpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29sb3JUZXJtczsgaSsrKSB7XG4gICAgY29sb3JWYWx1ZXNbY29sb3JUZXJtc1tpXV0gPSBjb2xvcnNbaV0gIT09IHVuZGVmaW5lZCA/IGNvbG9yc1tpXSA6IDE7XG4gIH1cblxuICByZXR1cm4gY29sb3JWYWx1ZXM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRYUnBiSE11YW5NaVhTd2libUZ0WlhNaU9sc2ljM0JzYVhSRGIyeHZjbFpoYkhWbGN5SXNJa05CVFVWTVgwTkJVMFZmVUVGVVZFVlNUaUlzSWxKRlVFeEJRMFZmVkVWTlVFeEJWRVVpTENKSVFWTmZVRVZTUms5U1RVRk9RMFZmVGs5WElpd2ljR1Z5Wm05eWJXRnVZMlVpTENKdWIzY2lMQ0oyWVhKVWVYQmxJaXdpZG1GeWFXRmliR1VpTENKUFltcGxZM1FpTENKd2NtOTBiM1I1Y0dVaUxDSjBiMU4wY21sdVp5SXNJbU5oYkd3aUxDSnpiR2xqWlNJc0ltTmhiV1ZzVkc5RVlYTm9JaXdpYzNSeWFXNW5JaXdpY21Wd2JHRmpaU0lzSW5SdlRHOTNaWEpEWVhObElpd2lZM1Z5Y21WdWRGUnBiV1VpTENKRVlYUmxJaXdpWjJWMFZHbHRaU0lzSW1oaGMxQnliM0JsY25SNUlpd2liMkpxWldOMElpd2ljSEp2Y0dWeWRIbE9ZVzFsSWl3aWFHRnpUM2R1VUhKdmNHVnlkSGtpTENKMWJtUmxabWx1WldRaUxDSnBjMEZ5Y21GNUlpd2lZWEp5SWl3aWFYTkdkVzVqSWl3aWIySnFJaXdpYVhOT2RXMGlMQ0p1ZFcwaUxDSnBjMDlpYWlJc0ltbHpVM1J5YVc1bklpd2ljM1J5SWl3aWMyVjBSRTlOUVhSMGNuTWlMQ0psYkdWdFpXNTBJaXdpWVhSMGNuTWlMQ0pyWlhraUxDSnpaWFJCZEhSeWFXSjFkR1VpTENKemNHeHBkRU52YlcxaFJHVnNhVzFwZEdWa0lpd2lkbUZzZFdVaUxDSnpjR3hwZENJc0ltTnZiblJoYVc1eklpd2lkR1Z5YlNJc0luWWlMQ0pwYm1SbGVFOW1JaXdpYVhOR2FYSnpkRU5vWVhKeklpd2lZM0psWVhSbFZXNXBkRlI1Y0dVaUxDSjBlWEJsSWl3aWRHVnpkQ0lzSW5CaGNuTmxJaXdpY0dGeWMyVkdiRzloZENJc0luUnlZVzV6Wm05eWJTSXNJblJsY20xeklpd2liblZ0VkdWeWJYTWlMQ0pzWlc1bmRHZ2lMQ0oyWVd4MVpYTWlMQ0oyWVd4MVpYTkJjbkpoZVNJc0ltZGxkRlpoYkhWbFJuSnZiVVoxYm1OMGFXOXVVM1J5YVc1bklpd2lhU0lzSW1acGJtUldZV3gxWlVGdVpGVnVhWFFpTENKdFlYUmphQ0lzSW5Od2JHbDBWbUZzZFdVaUxDSjFibWwwSWl3aVoyVjBRMjlzYjNKV1lXeDFaWE1pTENKamIyeHZjbFJsY20xeklpd2liblZ0UTI5c2IzSlVaWEp0Y3lJc0ltTnZiRzl5Vm1Gc2RXVnpJaXdpWTI5c2IzSnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMUZCWjBsblFrRXNaMElzUjBGQlFVRXNaMEk3TzBGQmFFbG9RanM3UVVGRlFTeEpRVUZOUXl4eFFrRkJjVUlzYVVKQlFUTkNPMEZCUTBFc1NVRkJUVU1zYlVKQlFXMUNMRTlCUVhwQ08wRkJRMEVzU1VGQlRVTXNjMEpCUVhWQ0xFOUJRVTlETEZkQlFWQXNTMEZCZFVJc1YwRkJka0lzU1VGQmMwTkJMRmxCUVZsRExFZEJRUzlGT3p0QlFVVkJPenM3T3pzN1FVRk5RU3hKUVVGTlF5eFZRVUZWTEZWQlFVTkRMRkZCUVVRN1FVRkJRU3hUUVVGalF5eFBRVUZQUXl4VFFVRlFMRU5CUVdsQ1F5eFJRVUZxUWl4RFFVRXdRa01zU1VGQk1VSXNRMEZCSzBKS0xGRkJRUzlDTEVWQlFYbERTeXhMUVVGNlF5eERRVUVyUXl4RFFVRXZReXhGUVVGclJDeERRVUZETEVOQlFXNUVMRU5CUVdRN1FVRkJRU3hEUVVGb1FqczdRVUZGUVRzN096czdPMEZCVFU4c1NVRkJUVU1zYjBOQlFXTXNWVUZCUTBNc1RVRkJSRHRCUVVGQkxGTkJRVmxCTEU5QlFVOURMRTlCUVZBc1EwRkJaV1FzYTBKQlFXWXNSVUZCYlVORExHZENRVUZ1UXl4RlFVRnhSR01zVjBGQmNrUXNSVUZCV2p0QlFVRkJMRU5CUVhCQ096dEJRVVZRT3pzN096dEJRVXRQTEVsQlFVMURMRzlEUVVGalpDeHpRa0ZCYzBJN1FVRkJRU3hUUVVGTlF5eFpRVUZaUXl4SFFVRmFMRVZCUVU0N1FVRkJRU3hEUVVGMFFpeEhRVUZuUkR0QlFVRkJMRk5CUVUwc1NVRkJTV0VzU1VGQlNpeEhRVUZYUXl4UFFVRllMRVZCUVU0N1FVRkJRU3hEUVVGd1JUczdRVUZGVURzN096czdPenRCUVU5UExFbEJRVTFETEc5RFFVRmpMRlZCUVVORExFMUJRVVFzUlVGQlUwTXNXVUZCVkR0QlFVRkJMRk5CUVRCQ1JDeFBRVUZQUlN4alFVRlFMRU5CUVhOQ1JDeFpRVUYwUWl4TFFVRjFRMFFzVDBGQlQwTXNXVUZCVUN4TlFVRjVRa1VzVTBGQk1VWTdRVUZCUVN4RFFVRndRanM3UVVGRlVEczdPenM3TzBGQlRVOHNTVUZCVFVNc05FSkJRVlVzVlVGQlEwTXNSMEZCUkR0QlFVRkJMRk5CUVZOd1FpeFJRVUZSYjBJc1IwRkJVaXhOUVVGcFFpeFBRVUV4UWp0QlFVRkJMRU5CUVdoQ096dEJRVVZRT3pzN096czdRVUZOVHl4SlFVRk5ReXd3UWtGQlV5eFZRVUZEUXl4SFFVRkVPMEZCUVVFc1UwRkJVM1JDTEZGQlFWRnpRaXhIUVVGU0xFMUJRV2xDTEZWQlFURkNPMEZCUVVFc1EwRkJaanM3UVVGRlVEczdPenM3TzBGQlRVOHNTVUZCVFVNc2QwSkJRVkVzVlVGQlEwTXNSMEZCUkR0QlFVRkJMRk5CUVZNc1QwRkJUMEVzUjBGQlVDeExRVUZsTEZGQlFYaENPMEZCUVVFc1EwRkJaRHM3UVVGRlVEczdPenM3TzBGQlRVOHNTVUZCVFVNc2QwSkJRVkVzVlVGQlEwZ3NSMEZCUkR0QlFVRkJMRk5CUVZNc1QwRkJUMEVzUjBGQlVDeExRVUZsTEZGQlFYaENPMEZCUVVFc1EwRkJaRHM3UVVGRlVEczdPenM3TzBGQlRVOHNTVUZCVFVrc09FSkJRVmNzVlVGQlEwTXNSMEZCUkR0QlFVRkJMRk5CUVZNc1QwRkJUMEVzUjBGQlVDeExRVUZsTEZGQlFYaENPMEZCUVVFc1EwRkJha0k3TzBGQlJVRXNTVUZCVFVNc2IwTkJRV01zVlVGQlEwTXNUMEZCUkN4RlFVRlZReXhMUVVGV0xFVkJRVzlDTzBGQlF6ZERMRTlCUVVzc1NVRkJTVU1zUjBGQlZDeEpRVUZuUWtRc1MwRkJhRUlzUlVGQmRVSTdRVUZEY2tJc1VVRkJTVUVzVFVGQlRXSXNZMEZCVGl4RFFVRnhRbU1zUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNM1FrWXNZMEZCVVVjc1dVRkJVaXhEUVVGeFFrUXNSMEZCY2tJc1JVRkJNRUpFTEUxQlFVMURMRWRCUVU0c1EwRkJNVUk3UVVGRFJEdEJRVU5HTzBGQlEwWXNRMEZPVFR0QlFVOVFPenM3T3pzN096dEJRVkZQTEVsQlFVMUZMRzlFUVVGelFpeFZRVUZEUXl4TFFVRkVPMEZCUVVFc1UwRkJWMUlzVTBGQlUxRXNTMEZCVkN4SlFVRnJRa0VzVFVGQlRVTXNTMEZCVGl4RFFVRlpMRTFCUVZvc1EwRkJiRUlzUjBGQmQwTXNRMEZCUTBRc1MwRkJSQ3hEUVVGdVJEdEJRVUZCTEVOQlFUVkNPenRCUVVWUU96czdPMEZCU1U4c1NVRkJUVVVzT0VKQlFWY3NWVUZCUTBNc1NVRkJSRHRCUVVGQkxGTkJRVlVzVlVGQlEwTXNRMEZCUkN4RlFVRlBPMEZCUTNaRExGZEJRVkZhTEZOQlFWTlhMRWxCUVZRc1MwRkJhMEpETEVWQlFVVkRMRTlCUVVZc1EwRkJWVVlzU1VGQlZpeE5RVUZ2UWl4RFFVRkRMRU5CUVM5RE8wRkJRMFFzUjBGR2RVSTdRVUZCUVN4RFFVRnFRanM3UVVGSlVEczdPenM3UVVGTFR5eEpRVUZOUnl4elEwRkJaU3hWUVVGRFNDeEpRVUZFTzBGQlFVRXNVMEZCVlN4VlFVRkRReXhEUVVGRUxFVkJRVTg3UVVGRE0wTXNWMEZCVVZvc1UwRkJVMWNzU1VGQlZDeExRVUZyUWtNc1JVRkJSVU1zVDBGQlJpeERRVUZWUml4SlFVRldMRTFCUVc5Q0xFTkJRVGxETzBGQlEwUXNSMEZHTWtJN1FVRkJRU3hEUVVGeVFqczdRVUZKVURzN08wRkJSMDhzU1VGQlRVa3NNRU5CUVdsQ0xGVkJRVU5ETEVsQlFVUXNSVUZCVlR0QlFVTjBReXhUUVVGUE8wRkJRMHhETEZWQlFVMVFMRk5CUVZOTkxFbEJRVlFzUTBGRVJEdEJRVVZNUlN4WFFVRlBReXhWUVVaR08wRkJSMHhETEdWQlFWY3NPRUpCUVZkS0xFbEJRVmc3UVVGSVRpeEhRVUZRTzBGQlMwUXNRMEZPVFRzN1FVRlJVRHM3T3pzN1FVRkxUeXhUUVVGVGFFUXNaMEpCUVZRc1EwRkJNRUp4UkN4TFFVRXhRaXhGUVVGcFF6dEJRVU4wUXl4TlFVRk5ReXhYUVVGWFJDeE5RVUZOUlN4TlFVRjJRanM3UVVGRlFTeFRRVUZQTEZWQlFWVllMRU5CUVZZc1JVRkJZVHRCUVVOc1FpeFJRVUZOV1N4VFFVRlRMRVZCUVdZN1FVRkRRU3hSUVVGTlF5eGpRVUZqYkVJc2IwSkJRVzlDYlVJc01rSkJRVEpDWkN4RFFVRXpRaXhEUVVGd1FpeERRVUZ3UWpzN1FVRkZRU3hUUVVGTExFbEJRVWxsTEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNVd3NVVUZCY0VJc1JVRkJPRUpMTEVkQlFUbENMRVZCUVcxRE8wRkJRMnBEU0N4aFFVRlBTQ3hOUVVGTlRTeERRVUZPTEVOQlFWQXNTVUZCYjBKR0xGbEJRVmxGTEVOQlFWb3NUVUZCYlVKdVF5eFRRVUZ3UWl4SFFVRnBRekpDTEZkQlFWZE5MRmxCUVZsRkxFTkJRVm9zUTBGQldDeERRVUZxUXl4SFFVRTRSQ3hEUVVGcVJqdEJRVU5FT3p0QlFVVkVMRmRCUVU5SUxFMUJRVkE3UVVGRFJDeEhRVlJFTzBGQlZVUTdPMEZCUlVRN096czdPenM3TzBGQlVVOHNTVUZCVFVrc09FTkJRVzFDTEZWQlFVTndRaXhMUVVGRUxFVkJRVmM3UVVGRGVrTXNUVUZCU1VFc1RVRkJUWEZDTEV0QlFWWXNSVUZCYVVJN1FVRkRaaXhSUVVGTlF5eGhRVUZoZEVJc1RVRkJUWEZDTEV0QlFVNHNRMEZCV1N4dFFrRkJXaXhEUVVGdVFqczdRVUZGUVN4WFFVRlBPMEZCUTB4eVFpeGhRVUZQVnl4WFFVRlhWeXhYUVVGWExFTkJRVmdzUTBGQldDeERRVVJHTzBGQlJVeERMRmxCUVU5RUxGZEJRVmNzUTBGQldEdEJRVVpHTEV0QlFWQTdRVUZKUkN4SFFWQkVMRTFCVDA4N1FVRkRUQ3hYUVVGUExFVkJRVVYwUWl4WlFVRkdMRVZCUVZBN1FVRkRSRHRCUVVOR0xFTkJXRTA3TzBGQllWQTdPenM3T3pzN1FVRlBUeXhKUVVGTmQwSXNNRU5CUVdsQ0xGVkJRVU40UWl4TFFVRkVMRVZCUVZGNVFpeFZRVUZTTEVWQlFYVkNPMEZCUTI1RUxFMUJRVTFETEdkQ1FVRm5Ra1FzVjBGQlYxWXNUVUZCYWtNN1FVRkRRU3hOUVVGTldTeGpRVUZqTEVWQlFYQkNPMEZCUTBFc1RVRkJUVU1zVTBGQlV6ZENMRzlDUVVGdlFtMUNMREpDUVVFeVFteENMRXRCUVROQ0xFTkJRWEJDTEVOQlFXWTdPMEZCUlVFc1QwRkJTeXhKUVVGSmJVSXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKVHl4aFFVRndRaXhGUVVGdFExQXNSMEZCYmtNc1JVRkJkME03UVVGRGRFTlJMR2RDUVVGWlJpeFhRVUZYVGl4RFFVRllMRU5CUVZvc1NVRkJPRUpUTEU5QlFVOVVMRU5CUVZBc1RVRkJZMjVETEZOQlFXWXNSMEZCTkVJMFF5eFBRVUZQVkN4RFFVRlFMRU5CUVRWQ0xFZEJRWGRETEVOQlFYSkZPMEZCUTBRN08wRkJSVVFzVTBGQlQxRXNWMEZCVUR0QlFVTkVMRU5CVmswaUxDSm1hV3hsSWpvaWRYUnBiSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJoY0hCbGJtUlZibWwwSUgwZ1puSnZiU0FuTGk5MGNtRnVjMlp2Y20xbGNuTW5PMXh1WEc1amIyNXpkQ0JEUVUxRlRGOURRVk5GWDFCQlZGUkZVazRnUFNBdktGdGhMWHBkS1NoYlFTMWFYU2t2Wnp0Y2JtTnZibk4wSUZKRlVFeEJRMFZmVkVWTlVFeEJWRVVnUFNBbkpERXRKREluTzF4dVkyOXVjM1FnU0VGVFgxQkZVa1pQVWsxQlRrTkZYMDVQVnlBOUlDaDBlWEJsYjJZZ2NHVnlabTl5YldGdVkyVWdJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JSEJsY21admNtMWhibU5sTG01dmR5azdYRzVjYmk4cVhHNGdJRWRsZENCMllYSWdkSGx3WlNCaGN5QnpkSEpwYm1kY2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0emRISnBibWRkT2lCU1pYUjFjbTV6TENCbWIzSWdhVzV6ZEdGdVkyVWdKMDlpYW1WamRDY2dhV1lnVzI5aWFtVmpkQ0JQWW1wbFkzUmRYRzRxTDF4dVkyOXVjM1FnZG1GeVZIbHdaU0E5SUNoMllYSnBZV0pzWlNrZ1BUNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp5NWpZV3hzS0haaGNtbGhZbXhsS1M1emJHbGpaU2c0TENBdE1TazdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdZMkZ0Wld4RFlYTmxJSFJ2SUdSaGMyZ3RZMkZ6WlZ4dVhHNGdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0JBY21WMGRYSnVJRnR6ZEhKcGJtZGRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR05oYldWc1ZHOUVZWE5vSUQwZ0tITjBjbWx1WnlrZ1BUNGdjM1J5YVc1bkxuSmxjR3hoWTJVb1EwRk5SVXhmUTBGVFJWOVFRVlJVUlZKT0xDQlNSVkJNUVVORlgxUkZUVkJNUVZSRktTNTBiMHh2ZDJWeVEyRnpaU2dwTzF4dVhHNHZLbHh1SUNCSFpXNWxjbUYwWlNCamRYSnlaVzUwSUhScGJXVnpkR0Z0Y0Z4dUlDQmNiaUFnUUhKbGRIVnliaUJiZEdsdFpYTjBZVzF3WFRvZ1EzVnljbVZ1ZENCVlRrbFlJSFJwYldWemRHRnRjRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqZFhKeVpXNTBWR2x0WlNBOUlFaEJVMTlRUlZKR1QxSk5RVTVEUlY5T1QxY2dQeUFvS1NBOVBpQndaWEptYjNKdFlXNWpaUzV1YjNjb0tTQTZJQ2dwSUQwK0lHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BPMXh1WEc0dktseHVJQ0JEYUdWamF5QnBaaUJ2WW1wbFkzUWdhR0Z6SUhCeWIzQmxjblI1SUdGdVpDQnBkQ0JwYzI0bmRDQjFibVJsWm1sdVpXUmNibHh1SUNCQWNHRnlZVzBnVzI5aWFtVmpkRjFjYmlBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHaGhjMUJ5YjNCbGNuUjVJRDBnS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGxPWVcxbEtTQTlQaUJ2WW1wbFkzUXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2NISnZjR1Z5ZEhsT1lXMWxLU0FtSmlCdlltcGxZM1JiY0hKdmNHVnlkSGxPWVcxbFhTQWhQVDBnZFc1a1pXWnBibVZrTzF4dVhHNHZLbHh1SUNCSmN5QjFkR2xzY3lCMllYSWdZVzRnWVhKeVlYa2dQeUJjYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFYwYVd4ekxuWmhjbFI1Y0dVZ1BUMDlJQ2RCY25KaGVTZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5CY25KaGVTQTlJQ2hoY25JcElEMCtJSFpoY2xSNWNHVW9ZWEp5S1NBOVBUMGdKMEZ5Y21GNUp6dGNibHh1THlwY2JpQWdTWE1nZFhScGJITWdkbUZ5SUdFZ1puVnVZM1JwYjI0Z1B5QmNiaUFnWEc0Z0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIVjBhV3h6TG5aaGNsUjVjR1VnUFQwOUlDZEdkVzVqZEdsdmJpZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5HZFc1aklEMGdLRzlpYWlrZ1BUNGdkbUZ5Vkhsd1pTaHZZbW9wSUQwOVBTQW5SblZ1WTNScGIyNG5PMXh1WEc0dktseHVJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lTQnVkVzFpWlhJL1hHNGdJRnh1SUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMGVYQmxiMllnUFQwOUlDZHVkVzFpWlhJblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpUblZ0SUQwZ0tHNTFiU2tnUFQ0Z2RIbHdaVzltSUc1MWJTQTlQVDBnSjI1MWJXSmxjaWM3WEc1Y2JpOHFYRzRnSUVseklIVjBhV3h6SUhaaGNpQmhiaUJ2WW1wbFkzUS9YRzRnSUZ4dUlDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBlWEJsYjJZZ1BUMDlJQ2R2WW1wbFkzUW5YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VDJKcUlEMGdLRzlpYWlrZ1BUNGdkSGx3Wlc5bUlHOWlhaUE5UFQwZ0oyOWlhbVZqZENjN1hHNWNiaThxWEc0Z0lFbHpJSFYwYVd4eklIWmhjaUJoSUhOMGNtbHVaeUEvSUZ4dUlDQmNiaUFnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZEhsd1pXOW1JSE4wY2lBOVBUMGdKM04wY21sdVp5ZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5UZEhKcGJtY2dQU0FvYzNSeUtTQTlQaUIwZVhCbGIyWWdjM1J5SUQwOVBTQW5jM1J5YVc1bkp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElITmxkRVJQVFVGMGRISnpJRDBnS0dWc1pXMWxiblFzSUdGMGRISnpLU0E5UGlCN1hHNGdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQmhkSFJ5Y3lrZ2UxeHVJQ0FnSUdsbUlDaGhkSFJ5Y3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQmxiR1Z0Wlc1MExuTmxkRUYwZEhKcFluVjBaU2hyWlhrc0lHRjBkSEp6VzJ0bGVWMHBPMXh1SUNBZ0lIMWNiaUFnZlZ4dWZUdGNiaThxWEc0Z0lGTndiR2wwSUdOdmJXMWhMV1JsYkdsdGFYUmxaQ0J6ZEhKcGJtZGNibHh1SUNCY0ltWnZieXhpWVhKY0lpQXRQaUJiWENKbWIyOWNJaXdnWENKaVlYSmNJbDFjYmx4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdRSEpsZEhWeWJpQmJZWEp5WVhsZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITndiR2wwUTI5dGJXRkVaV3hwYldsMFpXUWdQU0FvZG1Gc2RXVXBJRDArSUdselUzUnlhVzVuS0haaGJIVmxLU0EvSUhaaGJIVmxMbk53YkdsMEtDOHNYRnh6S2k4cElEb2dXM1poYkhWbFhUdGNibHh1THlvcVhHNGdLaUFnVW1WMGRYSnVjeUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdkMmxzYkNCamFHVmpheUJoYm5rZ1lYSm5kVzFsYm5RZ1ptOXlJR0IwWlhKdFlGeHVJQ29nWUdOdmJuUmhhVzV6S0NkdVpXVmtiR1VuS1NnbmFHRjVjM1JoWTJzbktXQmNiaUFxTDF4dVpYaHdiM0owSUdOdmJuTjBJR052Ym5SaGFXNXpJRDBnS0hSbGNtMHBJRDArSUNoMktTQTlQaUI3WEc0Z0lISmxkSFZ5YmlBb2FYTlRkSEpwYm1jb2RHVnliU2tnSmlZZ2RpNXBibVJsZUU5bUtIUmxjbTBwSUNFOVBTQXRNU2s3WEc1OU8xeHVYRzR2S2lwY2JpQXFJQ0JTWlhSMWNtNXpJR0VnWm5WdVkzUnBiMjRnZEdoaGRDQjNhV3hzSUdOb1pXTnJJSFJ2SUhObFpTQnBaaUJoYmlCaGNtZDFiV1Z1ZENCcGMxeHVJQ29nSUhSb1pTQm1hWEp6ZENCamFHRnlZV04wWlhKeklHbHVJSFJvWlNCd2NtOTJhV1JsWkNCZ2RHVnliV0JjYmlBcUlHQnBjMFpwY25OMFEyaGhjbk1vSjI1bFpXUnNaU2NwS0Nkb1lYbHpkR0ZqYXljcFlGeHVJQ292WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5HYVhKemRFTm9ZWEp6SUQwZ0tIUmxjbTBwSUQwK0lDaDJLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQW9hWE5UZEhKcGJtY29kR1Z5YlNrZ0ppWWdkaTVwYm1SbGVFOW1LSFJsY20wcElEMDlQU0F3S1R0Y2JuMDdYRzVjYmk4cUtseHVJQ29nUTNKbFlYUmxJR0VnZFc1cGRDQjJZV3gxWlNCMGVYQmxYRzRnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVlZibWwwVkhsd1pTQTlJQ2gwZVhCbEtTQTlQaUI3WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnZEdWemREb2dZMjl1ZEdGcGJuTW9kSGx3WlNrc1hHNGdJQ0FnY0dGeWMyVTZJSEJoY25ObFJteHZZWFFzWEc0Z0lDQWdkSEpoYm5ObWIzSnRPaUJoY0hCbGJtUlZibWwwS0hSNWNHVXBYRzRnSUgwN1hHNTlPMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaWE1nWVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z2MzQnNhWFFnWTI5c2IzSmNiaUFxSUhaaGJIVmxjeUJtY205dElITjBjbWx1WnlCcGJuUnZJR0Z1SUc5aWFtVmpkQ0J2WmlCd2NtOXdaWEowYVdWelhHNGdLaUJnYzNCc2FYUkRiMnh2Y2xaaGJIVmxjeWhiSjFKbFpDY3NJQ2RIY21WbGJpY3NJQ2RDYkhWbEoxMHBLQ2R5WjJKaEtEQXNNQ3d3S1NjcFlGeHVJQ292WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnYzNCc2FYUkRiMnh2Y2xaaGJIVmxjeWgwWlhKdGN5a2dlMXh1SUNCamIyNXpkQ0J1ZFcxVVpYSnRjeUE5SUhSbGNtMXpMbXhsYm1kMGFEdGNibHh1SUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnS0hZcElIdGNiaUFnSUNCamIyNXpkQ0IyWVd4MVpYTWdQU0I3ZlR0Y2JpQWdJQ0JqYjI1emRDQjJZV3gxWlhOQmNuSmhlU0E5SUhOd2JHbDBRMjl0YldGRVpXeHBiV2wwWldRb1oyVjBWbUZzZFdWR2NtOXRSblZ1WTNScGIyNVRkSEpwYm1jb2Rpa3BPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxVVpYSnRjenNnYVNzcktTQjdYRzRnSUNBZ0lDQjJZV3gxWlhOYmRHVnliWE5iYVYxZElEMGdLSFpoYkhWbGMwRnljbUY1VzJsZElDRTlQU0IxYm1SbFptbHVaV1FwSUQ4Z2NHRnljMlZHYkc5aGRDaDJZV3gxWlhOQmNuSmhlVnRwWFNrZ09pQXhPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMllXeDFaWE03WEc0Z0lIMDdYRzU5WEc1Y2JpOHFYRzRnSUZOd2JHbDBJR0VnZG1Gc2RXVWdhVzUwYnlCaElIWmhiSFZsTDNWdWFYUWdiMkpxWldOMFhHNGdJRnh1SUNBZ0lGd2lNakF3Y0hoY0lpQXRQaUI3SUhaaGJIVmxPaUF5TURBc0lIVnVhWFE2SUZ3aWNIaGNJaUI5WEc0Z0lDQWdYRzRnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nVm1Gc2RXVWdkRzhnYzNCc2FYUmNiaUFnUUhKbGRIVnliaUJiYjJKcVpXTjBYVG9nVDJKcVpXTjBJSGRwZEdnZ2RtRnNkV1VnWVc1a0lIVnVhWFFnY0hKdmNITmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdabWx1WkZaaGJIVmxRVzVrVlc1cGRDQTlJQ2gyWVd4MVpTa2dQVDRnZTF4dUlDQnBaaUFvZG1Gc2RXVXViV0YwWTJncElIdGNiaUFnSUNCamIyNXpkQ0J6Y0d4cGRGWmhiSFZsSUQwZ2RtRnNkV1V1YldGMFkyZ29MeWd0UDF4Y1pDcGNYQzQvWEZ4a0tpa29MaW9wTHlrN1hHNWNiaUFnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnZG1Gc2RXVTZJSEJoY25ObFJteHZZWFFvYzNCc2FYUldZV3gxWlZzeFhTa3NYRzRnSUNBZ0lDQjFibWwwT2lBZ2MzQnNhWFJXWVd4MVpWc3lYVnh1SUNBZ0lIMDdYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdjbVYwZFhKdUlIc2dkbUZzZFdVZ2ZUdGNiaUFnZlZ4dWZUdGNibHh1THlwY2JpQWdVM0JzYVhRZ1kyOXNiM0lnYzNSeWFXNW5JR2x1ZEc4Z2JXRndJRzltSUdOdmJHOXlJSEJ5YjNCbGNuUnBaWE5jYmx4dUlDQmNJbkpuWW1Fb01qVTFMQ0F5TlRVc0lESTFOU3dnTUNsY0lpd2dXMXdpVW1Wa1hDSXNJQ2RIY21WbGJsd2lMQ0JjSWtKc2RXVmNJaXdnWENKQmJIQm9ZVndpWFZ4dVhHNGdJSHNnVW1Wa09pQXlOVFV1TGk0Z2ZWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFJEYjJ4dmNsWmhiSFZsY3lBOUlDaDJZV3gxWlN3Z1kyOXNiM0pVWlhKdGN5a2dQVDRnZTF4dUlDQmpiMjV6ZENCdWRXMURiMnh2Y2xSbGNtMXpJRDBnWTI5c2IzSlVaWEp0Y3k1c1pXNW5kR2c3WEc0Z0lHTnZibk4wSUdOdmJHOXlWbUZzZFdWeklEMGdlMzA3WEc0Z0lHTnZibk4wSUdOdmJHOXljeUE5SUhOd2JHbDBRMjl0YldGRVpXeHBiV2wwWldRb1oyVjBWbUZzZFdWR2NtOXRSblZ1WTNScGIyNVRkSEpwYm1jb2RtRnNkV1VwS1R0Y2JseHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJVTnZiRzl5VkdWeWJYTTdJR2tyS3lrZ2UxeHVJQ0FnSUdOdmJHOXlWbUZzZFdWelcyTnZiRzl5VkdWeWJYTmJhVjFkSUQwZ0tHTnZiRzl5YzF0cFhTQWhQVDBnZFc1a1pXWnBibVZrS1NBL0lHTnZiRzl5YzF0cFhTQTZJREU3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnWTI5c2IzSldZV3gxWlhNN1hHNTlPMXh1WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICBEZXRlY3QgYW5kIGxvYWQgYW4gYXBwcm9wcmlhdGUgY2xvY2sgc2V0dGluZyBmb3IgdGhlIGVudmlyb25tZW50XG4qL1xudmFyIGhhc1JBRiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB0cnVlIDogZmFsc2U7XG5cbnZhciBvbk5leHRGcmFtZSA9IHZvaWQgMDtcblxuaWYgKGhhc1JBRikge1xuICBvbk5leHRGcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgfTtcbn0gZWxzZSB7XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgXG4gICAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG4gICAgICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgICAgXG4gICAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICAgIFxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICAgIFxuICAgICAgTUlUIGxpY2Vuc2VcbiAgICAqL1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgICBvbk5leHRGcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2LjcgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhsYXN0VGltZSk7XG4gICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICB9O1xuICB9KSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBvbk5leHRGcmFtZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bWNtRnRaWE41Ym1NdmIyNHRibVY0ZEMxbWNtRnRaUzVxY3lKZExDSnVZVzFsY3lJNld5Sm9ZWE5TUVVZaUxDSjNhVzVrYjNjaUxDSnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VpTENKdmJrNWxlSFJHY21GdFpTSXNJbU5oYkd4aVlXTnJJaXdpYkdGemRGUnBiV1VpTENKamRYSnlaVzUwVkdsdFpTSXNJa1JoZEdVaUxDSm5aWFJVYVcxbElpd2lkR2x0WlZSdlEyRnNiQ0lzSWsxaGRHZ2lMQ0p0WVhnaUxDSnpaWFJVYVcxbGIzVjBJbDBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVRzN08wRkJSMEVzU1VGQlRVRXNVMEZCVlN4UFFVRlBReXhOUVVGUUxFdEJRV3RDTEZkQlFXeENMRWxCUVdsRFFTeFBRVUZQUXl4eFFrRkJla01zUjBGQmEwVXNTVUZCYkVVc1IwRkJlVVVzUzBGQmVFWTdPMEZCUlVFc1NVRkJTVU1zYjBKQlFVbzdPMEZCUlVFc1NVRkJTVWdzVFVGQlNpeEZRVUZaTzBGQlExWkhMR2RDUVVGakxGVkJRVU5ETEZGQlFVUTdRVUZCUVN4WFFVRmpTQ3hQUVVGUFF5eHhRa0ZCVUN4RFFVRTJRa1VzVVVGQk4wSXNRMEZCWkR0QlFVRkJMRWRCUVdRN1FVRkZSQ3hEUVVoRUxFMUJSMDg3UVVGQlFUdEJRVU5NT3pzN096czdPenM3T3pzN08wRkJZMEVzVVVGQlNVTXNWMEZCVnl4RFFVRm1PenRCUVVWQlJpeHJRa0ZCWXl4VlFVRkRReXhSUVVGRUxFVkJRV003UVVGRE1VSXNWVUZCVFVVc1kwRkJZeXhKUVVGSlF5eEpRVUZLTEVkQlFWZERMRTlCUVZnc1JVRkJjRUk3UVVGRFFTeFZRVUZOUXl4aFFVRmhReXhMUVVGTFF5eEhRVUZNTEVOQlFWTXNRMEZCVkN4RlFVRlpMRkZCUVZGTUxHTkJRV05FTEZGQlFYUkNMRU5CUVZvc1EwRkJia0k3TzBGQlJVRkJMR2xDUVVGWFF5eGpRVUZqUnl4VlFVRjZRanM3UVVGRlFVY3NhVUpCUVZjN1FVRkJRU3hsUVVGTlVpeFRRVUZUUXl4UlFVRlVMRU5CUVU0N1FVRkJRU3hQUVVGWUxFVkJRWEZEU1N4VlFVRnlRenRCUVVORUxFdEJVRVE3UVVGcVFrczdRVUY1UWs0N08ydENRVVZqVGl4WElpd2labWxzWlNJNkltOXVMVzVsZUhRdFpuSmhiV1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDQkVaWFJsWTNRZ1lXNWtJR3h2WVdRZ1lXNGdZWEJ3Y205d2NtbGhkR1VnWTJ4dlkyc2djMlYwZEdsdVp5Qm1iM0lnZEdobElHVnVkbWx5YjI1dFpXNTBYRzRxTDF4dVkyOXVjM1FnYUdGelVrRkdJRDBnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JSGRwYm1SdmR5NXlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VwSUQ4Z2RISjFaU0E2SUdaaGJITmxPMXh1WEc1c1pYUWdiMjVPWlhoMFJuSmhiV1U3WEc1Y2JtbG1JQ2hvWVhOU1FVWXBJSHRjYmlBZ2IyNU9aWGgwUm5KaGJXVWdQU0FvWTJGc2JHSmhZMnNwSUQwK0lIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVW9ZMkZzYkdKaFkyc3BPMXh1WEc1OUlHVnNjMlVnZTF4dUlDQXZLbHh1SUNBZ0lISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0J3YjJ4NVptbHNiRnh1SUNBZ0lGeHVJQ0FnSUVadmNpQkpSVGd2T1NCR2JHbHVjM1J2Ym1WeklHRnVaQ0J1YjI0dFluSnZkM05sY2lCbGJuWnBjbTl1YldWdWRITmNibHh1SUNBZ0lGUmhhMlZ1SUdaeWIyMGdVR0YxYkNCSmNtbHphQzRnVjJVbmRtVWdjM1J5YVhCd1pXUWdiM1YwSUdOaGJtTmxiRUZ1YVcxaGRHbHZia1p5WVcxbElHTm9aV05yY3lCaVpXTmhkWE5sSUhkbElHUnZiaWQwSUdadmVDQjNhWFJvSUhSb1lYUmNiaUFnSUNCY2JpQWdJQ0JvZEhSd09pOHZjR0YxYkdseWFYTm9MbU52YlM4eU1ERXhMM0psY1hWbGMzUmhibWx0WVhScGIyNW1jbUZ0WlMxbWIzSXRjMjFoY25RdFlXNXBiV0YwYVc1bkwxeHVJQ0FnSUdoMGRIQTZMeTl0ZVM1dmNHVnlZUzVqYjIwdlpXMXZiR3hsY2k5aWJHOW5Mekl3TVRFdk1USXZNakF2Y21WeGRXVnpkR0Z1YVcxaGRHbHZibVp5WVcxbExXWnZjaTF6YldGeWRDMWxjaTFoYm1sdFlYUnBibWRjYmlBZ0lDQWdYRzRnSUNBZ2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxJSEJ2YkhsbWFXeHNJR0o1SUVWeWFXc2dUY08yYkd4bGNpNGdabWw0WlhNZ1puSnZiU0JRWVhWc0lFbHlhWE5vSUdGdVpDQlVhVzV2SUZwcGFtUmxiRnh1SUNBZ0lDQmNiaUFnSUNCTlNWUWdiR2xqWlc1elpWeHVJQ0FxTDF4dUlDQnNaWFFnYkdGemRGUnBiV1VnUFNBd08xeHVYRzRnSUc5dVRtVjRkRVp5WVcxbElEMGdLR05oYkd4aVlXTnJLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdZM1Z5Y21WdWRGUnBiV1VnUFNCdVpYY2dSR0YwWlNncExtZGxkRlJwYldVb0tUdGNiaUFnSUNCamIyNXpkQ0IwYVcxbFZHOURZV3hzSUQwZ1RXRjBhQzV0WVhnb01Dd2dNVFl1TnlBdElDaGpkWEp5Wlc1MFZHbHRaU0F0SUd4aGMzUlVhVzFsS1NrN1hHNWNiaUFnSUNCc1lYTjBWR2x0WlNBOUlHTjFjbkpsYm5SVWFXMWxJQ3NnZEdsdFpWUnZRMkZzYkR0Y2JseHVJQ0FnSUhObGRGUnBiV1Z2ZFhRb0tDa2dQVDRnWTJGc2JHSmhZMnNvYkdGemRGUnBiV1VwTENCMGFXMWxWRzlEWVd4c0tUdGNiaUFnZlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdiMjVPWlhoMFJuSmhiV1U3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL29uLW5leHQtZnJhbWUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVSZW5kZXJTdGVwO1xuZnVuY3Rpb24gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApIHtcbiAgLyoqXG4gICAqIFdlIHVzZSB0d28gYXJyYXlzLCBvbmUgZm9yIHRoaXMgZnJhbWUgYW5kIG9uZSB0byBxdWV1ZSBmb3IgdGhlXG4gICAqIG5leHQgZnJhbWUsIHJldXNpbmcgZWFjaCB0byBhdm9pZCBHQy5cbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgdmFyIGZ1bmN0aW9uc1RvUnVuID0gW107XG4gIHZhciBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgc2NoZWR1bGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgc3RhcnRSZW5kZXJMb29wKCk7XG4gICAgICAvLyBJZiB0aGlzIGNhbGxiYWNrIGlzbid0IGFscmVhZHkgc2NoZWR1bGVkIHRvIHJ1biBuZXh0IGZyYW1lXG4gICAgICBpZiAoZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLnB1c2goY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjYW5jZWw6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdmFyIGluZGV4T2ZDYWxsYmFjayA9IGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgaWYgKGluZGV4T2ZDYWxsYmFjayAhPT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuc3BsaWNlKGluZGV4T2ZDYWxsYmFjaywgMSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHByb2Nlc3M6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgLy8gQ2xlYXIgbmV4dCBmcmFtZSBsaXN0XG4gICAgICB2YXIgX3JlZiA9IFtmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSwgZnVuY3Rpb25zVG9SdW5dO1xuICAgICAgLy8gU3dhcCB0aGlzIGZyYW1lIGFuZCBuZXh0IGZyYW1lIGFycmF5cyB0byBhdm9pZCBHQ1xuXG4gICAgICBmdW5jdGlvbnNUb1J1biA9IF9yZWZbMF07XG4gICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSA9IF9yZWZbMV07XG4gICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5sZW5ndGggPSAwO1xuXG4gICAgICAvLyBFeGVjdXRlIGFsbCBvZiB0aGlzIGZyYW1lJ3MgZnVuY3Rpb25zXG4gICAgICB2YXIgbnVtVGhpc0ZyYW1lID0gZnVuY3Rpb25zVG9SdW4ubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UaGlzRnJhbWU7IGkrKykge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bltpXSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bWNtRnRaWE41Ym1NdlkzSmxZWFJsTFhKbGJtUmxjaTF6ZEdWd0xtcHpJbDBzSW01aGJXVnpJanBiSW1OeVpXRjBaVkpsYm1SbGNsTjBaWEFpTENKemRHRnlkRkpsYm1SbGNreHZiM0FpTENKbWRXNWpkR2x2Ym5OVWIxSjFiaUlzSW1aMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxJaXdpYzJOb1pXUjFiR1VpTENKallXeHNZbUZqYXlJc0ltbHVaR1Y0VDJZaUxDSndkWE5vSWl3aVkyRnVZMlZzSWl3aWFXNWtaWGhQWmtOaGJHeGlZV05ySWl3aWMzQnNhV05sSWl3aWNISnZZMlZ6Y3lJc0lteGxibWQwYUNJc0ltNTFiVlJvYVhOR2NtRnRaU0lzSW1raVhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRkJkMEpCTEdkQ08wRkJRVlFzVTBGQlUwRXNaMEpCUVZRc1EwRkJNRUpETEdWQlFURkNMRVZCUVRKRE8wRkJRM2hFT3pzN096dEJRVXRCTEUxQlFVbERMR2xDUVVGcFFpeEZRVUZ5UWp0QlFVTkJMRTFCUVVsRExEQkNRVUV3UWl4RlFVRTVRanM3UVVGRlFTeFRRVUZQTzBGQlEweERMR05CUVZVc1ZVRkJRME1zVVVGQlJDeEZRVUZqTzBGQlEzUkNTanRCUVVOQk8wRkJRMEVzVlVGQlNVVXNkMEpCUVhkQ1J5eFBRVUY0UWl4RFFVRm5RMFFzVVVGQmFFTXNUVUZCT0VNc1EwRkJReXhEUVVGdVJDeEZRVUZ6UkR0QlFVTndSRVlzWjBOQlFYZENTU3hKUVVGNFFpeERRVUUyUWtZc1VVRkJOMEk3UVVGRFJEdEJRVU5HTEV0QlVFazdPMEZCVTB4SExGbEJRVkVzVlVGQlEwZ3NVVUZCUkN4RlFVRmpPMEZCUTNCQ0xGVkJRVTFKTEd0Q1FVRnJRazRzZDBKQlFYZENSeXhQUVVGNFFpeERRVUZuUTBRc1VVRkJhRU1zUTBGQmVFSTdRVUZEUVN4VlFVRkpTU3h2UWtGQmIwSXNRMEZCUXl4RFFVRjZRaXhGUVVFMFFqdEJRVU14UWs0c1owTkJRWGRDVHl4TlFVRjRRaXhEUVVFclFrUXNaVUZCTDBJc1JVRkJaMFFzUTBGQmFFUTdRVUZEUkR0QlFVTkdMRXRCWkVrN08wRkJaMEpNUlN4aFFVRlRMRmxCUVUwN08wRkJTV0k3UVVGS1lTeHBRa0ZGSzBJc1EwRkJRMUlzZFVKQlFVUXNSVUZCTUVKRUxHTkJRVEZDTEVOQlJpOUNPMEZCUTJJN08wRkJRME5CTEc5Q1FVWlpPMEZCUlVsRExEWkNRVVpLTzBGQlMySkJMRGhDUVVGM1FsTXNUVUZCZUVJc1IwRkJhVU1zUTBGQmFrTTdPMEZCUlVFN1FVRkRRU3hWUVVGTlF5eGxRVUZsV0N4bFFVRmxWU3hOUVVGd1F6dEJRVU5CTEZkQlFVc3NTVUZCU1VVc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpSQ3haUVVGd1FpeEZRVUZyUTBNc1IwRkJiRU1zUlVGQmRVTTdRVUZEY2tOYUxIVkNRVUZsV1N4RFFVRm1PMEZCUTBRN1FVRkRSanRCUVRWQ1NTeEhRVUZRTzBGQk9FSkVJaXdpWm1sc1pTSTZJbU55WldGMFpTMXlaVzVrWlhJdGMzUmxjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlHTnlaV0YwWlZKbGJtUmxjbE4wWlhBb2MzUmhjblJTWlc1a1pYSk1iMjl3S1NCN1hHNGdJQzhxS2x4dUlDQWdLaUJYWlNCMWMyVWdkSGR2SUdGeWNtRjVjeXdnYjI1bElHWnZjaUIwYUdseklHWnlZVzFsSUdGdVpDQnZibVVnZEc4Z2NYVmxkV1VnWm05eUlIUm9aVnh1SUNBZ0tpQnVaWGgwSUdaeVlXMWxMQ0J5WlhWemFXNW5JR1ZoWTJnZ2RHOGdZWFp2YVdRZ1IwTXVYRzRnSUNBcUlFQjBlWEJsSUh0QmNuSmhlWDFjYmlBZ0lDb3ZYRzRnSUd4bGRDQm1kVzVqZEdsdmJuTlViMUoxYmlBOUlGdGRPMXh1SUNCc1pYUWdablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldVZ1BTQmJYVHRjYmx4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUhOamFHVmtkV3hsT2lBb1kyRnNiR0poWTJzcElEMCtJSHRjYmlBZ0lDQWdJSE4wWVhKMFVtVnVaR1Z5VEc5dmNDZ3BPMXh1SUNBZ0lDQWdMeThnU1dZZ2RHaHBjeUJqWVd4c1ltRmpheUJwYzI0bmRDQmhiSEpsWVdSNUlITmphR1ZrZFd4bFpDQjBieUJ5ZFc0Z2JtVjRkQ0JtY21GdFpWeHVJQ0FnSUNBZ2FXWWdLR1oxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbExtbHVaR1Y0VDJZb1kyRnNiR0poWTJzcElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQm1kVzVqZEdsdmJuTlViMUoxYms1bGVIUkdjbUZ0WlM1d2RYTm9LR05oYkd4aVlXTnJLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdZMkZ1WTJWc09pQW9ZMkZzYkdKaFkyc3BJRDArSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR2x1WkdWNFQyWkRZV3hzWW1GamF5QTlJR1oxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbExtbHVaR1Y0VDJZb1kyRnNiR0poWTJzcE8xeHVJQ0FnSUNBZ2FXWWdLR2x1WkdWNFQyWkRZV3hzWW1GamF5QWhQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldVdWMzQnNhV05sS0dsdVpHVjRUMlpEWVd4c1ltRmpheXdnTVNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhCeWIyTmxjM002SUNncElEMCtJSHRjYmlBZ0lDQWdJQzh2SUZOM1lYQWdkR2hwY3lCbWNtRnRaU0JoYm1RZ2JtVjRkQ0JtY21GdFpTQmhjbkpoZVhNZ2RHOGdZWFp2YVdRZ1IwTmNiaUFnSUNBZ0lGdG1kVzVqZEdsdmJuTlViMUoxYml3Z1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1ZkSUQwZ1cyWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTENCbWRXNWpkR2x2Ym5OVWIxSjFibDA3WEc1Y2JpQWdJQ0FnSUM4dklFTnNaV0Z5SUc1bGVIUWdabkpoYldVZ2JHbHpkRnh1SUNBZ0lDQWdablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldVdWJHVnVaM1JvSUQwZ01EdGNibHh1SUNBZ0lDQWdMeThnUlhobFkzVjBaU0JoYkd3Z2IyWWdkR2hwY3lCbWNtRnRaU2R6SUdaMWJtTjBhVzl1YzF4dUlDQWdJQ0FnWTI5dWMzUWdiblZ0VkdocGMwWnlZVzFsSUQwZ1puVnVZM1JwYjI1elZHOVNkVzR1YkdWdVozUm9PMXh1SUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxVWFHbHpSbkpoYldVN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2Ym5OVWIxSjFibHRwWFNncE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVHRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9jcmVhdGUtcmVuZGVyLXN0ZXAuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGRTdHlsZVByb3BlcnR5U3RyaW5nO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZXMpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVFJBTlNMQVRFID0gJ3RyYW5zbGF0ZSc7XG52YXIgdHJhbnNsYXRlTWFwID0ge1xuICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gIHk6IFRSQU5TTEFURSArICdZJyxcbiAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuXG5mdW5jdGlvbiBidWlsZFN0eWxlUHJvcGVydHlTdHJpbmcoZWxlbWVudCwgc3RhdGUsIGNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gIHZhciBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gIHZhciBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgdmFyIHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAvLyBGaXJzdCBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGNoYW5nZWQgdHJhbnNmb3JtIHZhbHVlc1xuICAvLyBhbmQgaWYgdHJ1ZSBhZGQgYWxsIHRyYW5zZm9ybSB2YWx1ZXNcbiAgdmFyIG51bUNoYW5nZWRWYWx1ZXMgPSBjaGFuZ2VkVmFsdWVzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1DaGFuZ2VkVmFsdWVzOyBpKyspIHtcbiAgICB2YXIga2V5ID0gY2hhbmdlZFZhbHVlc1tpXTtcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0cmFuc2Zvcm0gcHJvcGVydHksIGFkZCBhbGwgb3RoZXIgdHJhbnNmb3JtIHByb3BzXG4gICAgLy8gdG8gY2hhbmdlZFZhbHVlcyBhbmQgdGhlbiBicmVha1xuICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcblxuICAgICAgZm9yICh2YXIgX2tleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W19rZXldICYmIGNoYW5nZWRWYWx1ZXMuaW5kZXhPZihfa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjaGFuZ2VkVmFsdWVzLnB1c2goX2tleSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIHRvdGFsTnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdG90YWxOdW1DaGFuZ2VkVmFsdWVzOyBfaSsrKSB7XG4gICAgdmFyIF9rZXkyID0gY2hhbmdlZFZhbHVlc1tfaV07XG4gICAgdmFyIHZhbHVlID0gc3RhdGVbX2tleTJdO1xuXG4gICAgaWYgKHRyYW5zbGF0ZU1hcFtfa2V5Ml0pIHtcbiAgICAgIF9rZXkyID0gdHJhbnNsYXRlTWFwW19rZXkyXTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgbnVtYmVyIG9yIG9iamVjdCBhbmQgd2UgaGF2ZSBmaWx0ZXIsIGFwcGx5IGZpbHRlclxuICAgIGlmIChfdmFsdWVUeXBlczIuZGVmYXVsdFtfa2V5Ml0gJiYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlKSB8fCAoMCwgX3V0aWxzLmlzT2JqKSh2YWx1ZSkpICYmIF92YWx1ZVR5cGVzMi5kZWZhdWx0W19rZXkyXS50cmFuc2Zvcm0pIHtcbiAgICAgIHZhbHVlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRbX2tleTJdLnRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtfa2V5Ml0pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBfa2V5MiArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgIHRyYW5zZm9ybUhhc1ogPSBfa2V5MiA9PT0gdHJhbnNsYXRlTWFwLnogPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoX2tleTIsIHRydWUpICsgJzonICsgdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgd2UgaGF2ZSB0cmFuc2Zvcm0gcHJvcHMsIGJ1aWxkIGEgdHJhbnNmb3JtIHN0cmluZ1xuICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gdHJhbnNsYXRlTWFwLnogKyAnKDApJztcbiAgICB9XG5cbiAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgndHJhbnNmb3JtJywgdHJ1ZSkgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gIH1cblxuICBlbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gcHJvcGVydHlTdHJpbmc7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNKbGJtUmxjaTVxY3lKZExDSnVZVzFsY3lJNld5SmlkV2xzWkZOMGVXeGxVSEp2Y0dWeWRIbFRkSEpwYm1jaUxDSlVVa0ZPVTB4QlZFVWlMQ0owY21GdWMyeGhkR1ZOWVhBaUxDSjRJaXdpZVNJc0lub2lMQ0psYkdWdFpXNTBJaXdpYzNSaGRHVWlMQ0pqYUdGdVoyVmtWbUZzZFdWeklpd2laVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNGlMQ0p3Y205d1pYSjBlVk4wY21sdVp5SXNJblJ5WVc1elptOXliVk4wY21sdVp5SXNJbWhoYzFSeVlXNXpabTl5YlNJc0luUnlZVzV6Wm05eWJVaGhjMW9pTENKdWRXMURhR0Z1WjJWa1ZtRnNkV1Z6SWl3aWJHVnVaM1JvSWl3aWFTSXNJbXRsZVNJc0ltbHVaR1Y0VDJZaUxDSndkWE5vSWl3aWRHOTBZV3hPZFcxRGFHRnVaMlZrVm1Gc2RXVnpJaXdpZG1Gc2RXVWlMQ0owY21GdWMyWnZjbTBpTENKemRIbHNaU0lzSW1OemMxUmxlSFFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGWmQwSkJMSGRDT3p0QlFWcDRRanM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVWQkxFbEJRVTFETEZsQlFWa3NWMEZCYkVJN1FVRkRRU3hKUVVGTlF5eGxRVUZsTzBGQlEyNUNReXhMUVVGSFJpeFpRVUZaTEVkQlJFazdRVUZGYmtKSExFdEJRVWRJTEZsQlFWa3NSMEZHU1R0QlFVZHVRa2tzUzBGQlIwb3NXVUZCV1R0QlFVaEpMRU5CUVhKQ096dEJRVTFsTEZOQlFWTkVMSGRDUVVGVUxFTkJRV3REVFN4UFFVRnNReXhGUVVFeVEwTXNTMEZCTTBNc1JVRkJhMFJETEdGQlFXeEVMRVZCUVdsRlF5d3dRa0ZCYWtVc1JVRkJOa1k3UVVGRE1VY3NUVUZCU1VNc2FVSkJRV2xDTEVWQlFYSkNPMEZCUTBFc1RVRkJTVU1zYTBKQlFXdENMRVZCUVhSQ08wRkJRMEVzVFVGQlNVTXNaVUZCWlN4TFFVRnVRanRCUVVOQkxFMUJRVWxETEdkQ1FVRm5RaXhMUVVGd1FqczdRVUZGUVR0QlFVTkJPMEZCUTBFc1RVRkJUVU1zYlVKQlFXMUNUaXhqUVVGalR5eE5RVUYyUXp0QlFVTkJMRTlCUVVzc1NVRkJTVU1zU1VGQlNTeERRVUZpTEVWQlFXZENRU3hKUVVGSlJpeG5Ra0ZCY0VJc1JVRkJjME5GTEVkQlFYUkRMRVZCUVRKRE8wRkJRM3BETEZGQlFVMURMRTFCUVUxVUxHTkJRV05STEVOQlFXUXNRMEZCV2pzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVVVGQlNTeDVRa0ZCWlVNc1IwRkJaaXhEUVVGS0xFVkJRWGxDTzBGQlEzWkNUQ3h4UWtGQlpTeEpRVUZtT3p0QlFVVkJMRmRCUVVzc1NVRkJTVXNzU1VGQlZDeEpRVUZuUWxZc1MwRkJhRUlzUlVGQmRVSTdRVUZEY2tJc1dVRkJTU3g1UWtGQlpWVXNTVUZCWml4TFFVRjFRbFFzWTBGQlkxVXNUMEZCWkN4RFFVRnpRa1FzU1VGQmRFSXNUVUZCSzBJc1EwRkJReXhEUVVFelJDeEZRVUU0UkR0QlFVTTFSRlFzZDBKQlFXTlhMRWxCUVdRc1EwRkJiVUpHTEVsQlFXNUNPMEZCUTBRN1FVRkRSanM3UVVGRlJEdEJRVU5FTzBGQlEwWTdPMEZCUlVRc1RVRkJUVWNzZDBKQlFYZENXaXhqUVVGalR5eE5RVUUxUXp0QlFVTkJMRTlCUVVzc1NVRkJTVU1zUzBGQlNTeERRVUZpTEVWQlFXZENRU3hMUVVGSlNTeHhRa0ZCY0VJc1JVRkJNa05LTEVsQlFUTkRMRVZCUVdkRU8wRkJRemxETEZGQlFVbERMRkZCUVUxVUxHTkJRV05STEVWQlFXUXNRMEZCVmp0QlFVTkJMRkZCUVVsTExGRkJRVkZrTEUxQlFVMVZMRXRCUVU0c1EwRkJXanM3UVVGRlFTeFJRVUZKWml4aFFVRmhaU3hMUVVGaUxFTkJRVW9zUlVGQmRVSTdRVUZEY2tKQkxHTkJRVTFtTEdGQlFXRmxMRXRCUVdJc1EwRkJUanRCUVVORU96dEJRVVZFTzBGQlEwRXNVVUZCU1N4eFFrRkJWMEVzUzBGQldDeE5RVUZ2UWl4clFrRkJUVWtzUzBGQlRpeExRVUZuUWl4clFrRkJUVUVzUzBGQlRpeERRVUZ3UXl4TFFVRnhSQ3h4UWtGQlYwb3NTMEZCV0N4RlFVRm5Ra3NzVTBGQmVrVXNSVUZCYjBZN1FVRkRiRVpFTEdOQlFWRXNjVUpCUVZkS0xFdEJRVmdzUlVGQlowSkxMRk5CUVdoQ0xFTkJRVEJDUkN4TFFVRXhRaXhEUVVGU08wRkJRMFE3TzBGQlJVUXNVVUZCU1N4NVFrRkJaVW9zUzBGQlppeERRVUZLTEVWQlFYbENPMEZCUTNaQ1RpeDVRa0ZCYlVKTkxGRkJRVTBzUjBGQlRpeEhRVUZaU1N4TFFVRmFMRWRCUVc5Q0xFbEJRWFpETzBGQlEwRlNMSE5DUVVGcFFra3NWVUZCVVdZc1lVRkJZVWNzUTBGQmRFSXNSMEZCTWtJc1NVRkJNMElzUjBGQmEwTlJMR0ZCUVd4RU8wRkJSVVFzUzBGS1JDeE5RVWxQTzBGQlEweElMSGRDUVVGclFpeE5RVUZOTEhkQ1FVRlRUeXhMUVVGVUxFVkJRV01zU1VGQlpDeERRVUZPTEVkQlFUUkNMRWRCUVRWQ0xFZEJRV3REU1N4TFFVRndSRHRCUVVORU8wRkJRMFk3TzBGQlJVUTdRVUZEUVN4TlFVRkpWQ3haUVVGS0xFVkJRV3RDTzBGQlEyaENMRkZCUVVrc1EwRkJRME1zWVVGQlJDeEpRVUZyUWtvc01FSkJRWFJDTEVWQlFXdEVPMEZCUTJoRVJTeDVRa0ZCYlVKVUxHRkJRV0ZITEVOQlFXSXNSMEZCYVVJc1MwRkJjRU03UVVGRFJEczdRVUZGUkVzc2MwSkJRV3RDTEUxQlFVMHNkMEpCUVZNc1YwRkJWQ3hGUVVGelFpeEpRVUYwUWl4RFFVRk9MRWRCUVc5RExFZEJRWEJETEVkQlFUQkRReXhsUVVFMVJEdEJRVU5FT3p0QlFVVkVUQ3hWUVVGUmFVSXNTMEZCVWl4RFFVRmpReXhQUVVGa0xFbEJRWGxDWkN4alFVRjZRanRCUVVORUlpd2labWxzWlNJNkluSmxibVJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IwY21GdWMyWnZjbTFRY205d2N5Qm1jbTl0SUNjdUwzUnlZVzV6Wm05eWJTMXdjbTl3Y3ljN1hHNXBiWEJ2Y25RZ2RtRnNkV1ZVZVhCbGN5Qm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpKenRjYm1sdGNHOXlkQ0J3Y21WbWFYaGxjaUJtY205dElDY3VMM0J5WldacGVHVnlKenRjYm1sdGNHOXlkQ0I3SUdselRuVnRMQ0JwYzA5aWFpQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU52Ym5OMElGUlNRVTVUVEVGVVJTQTlJQ2QwY21GdWMyeGhkR1VuTzF4dVkyOXVjM1FnZEhKaGJuTnNZWFJsVFdGd0lEMGdlMXh1SUNCNE9pQlVVa0ZPVTB4QlZFVWdLeUFuV0Njc1hHNGdJSGs2SUZSU1FVNVRURUZVUlNBcklDZFpKeXhjYmlBZ2Vqb2dWRkpCVGxOTVFWUkZJQ3NnSjFvblhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJpZFdsc1pGTjBlV3hsVUhKdmNHVnlkSGxUZEhKcGJtY29aV3hsYldWdWRDd2djM1JoZEdVc0lHTm9ZVzVuWldSV1lXeDFaWE1zSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1NCN1hHNGdJR3hsZENCd2NtOXdaWEowZVZOMGNtbHVaeUE5SUNjbk8xeHVJQ0JzWlhRZ2RISmhibk5tYjNKdFUzUnlhVzVuSUQwZ0p5YzdYRzRnSUd4bGRDQm9ZWE5VY21GdWMyWnZjbTBnUFNCbVlXeHpaVHRjYmlBZ2JHVjBJSFJ5WVc1elptOXliVWhoYzFvZ1BTQm1ZV3h6WlR0Y2JseHVJQ0F2THlCR2FYSnpkQ0JqYUdWamF5QnBaaUIwYUdWeVpTQmhjbVVnWVc1NUlHTm9ZVzVuWldRZ2RISmhibk5tYjNKdElIWmhiSFZsYzF4dUlDQXZMeUJoYm1RZ2FXWWdkSEoxWlNCaFpHUWdZV3hzSUhSeVlXNXpabTl5YlNCMllXeDFaWE5jYmlBZ1kyOXVjM1FnYm5WdFEyaGhibWRsWkZaaGJIVmxjeUE5SUdOb1lXNW5aV1JXWVd4MVpYTXViR1Z1WjNSb08xeHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJVTm9ZVzVuWldSV1lXeDFaWE03SUdrckt5a2dlMXh1SUNBZ0lHTnZibk4wSUd0bGVTQTlJR05vWVc1blpXUldZV3gxWlhOYmFWMDdYRzVjYmlBZ0lDQXZMeUJKWmlCMGFHbHpJR2x6SUdFZ2RISmhibk5tYjNKdElIQnliM0JsY25SNUxDQmhaR1FnWVd4c0lHOTBhR1Z5SUhSeVlXNXpabTl5YlNCd2NtOXdjMXh1SUNBZ0lDOHZJSFJ2SUdOb1lXNW5aV1JXWVd4MVpYTWdZVzVrSUhSb1pXNGdZbkpsWVd0Y2JpQWdJQ0JwWmlBb2RISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTa2dlMXh1SUNBZ0lDQWdhR0Z6VkhKaGJuTm1iM0p0SUQwZ2RISjFaVHRjYmx4dUlDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSE4wWVhSbEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGNtRnVjMlp2Y20xUWNtOXdjMXRyWlhsZElDWW1JR05vWVc1blpXUldZV3gxWlhNdWFXNWtaWGhQWmloclpYa3BJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUdOb1lXNW5aV1JXWVd4MVpYTXVjSFZ6YUNoclpYa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR052Ym5OMElIUnZkR0ZzVG5WdFEyaGhibWRsWkZaaGJIVmxjeUE5SUdOb1lXNW5aV1JXWVd4MVpYTXViR1Z1WjNSb08xeHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSdmRHRnNUblZ0UTJoaGJtZGxaRlpoYkhWbGN6c2dhU3NyS1NCN1hHNGdJQ0FnYkdWMElHdGxlU0E5SUdOb1lXNW5aV1JXWVd4MVpYTmJhVjA3WEc0Z0lDQWdiR1YwSUhaaGJIVmxJRDBnYzNSaGRHVmJhMlY1WFR0Y2JseHVJQ0FnSUdsbUlDaDBjbUZ1YzJ4aGRHVk5ZWEJiYTJWNVhTa2dlMXh1SUNBZ0lDQWdhMlY1SUQwZ2RISmhibk5zWVhSbFRXRndXMnRsZVYwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1NXWWdkR2hwY3lCcGN5QmhJRzUxYldKbGNpQnZjaUJ2WW1wbFkzUWdZVzVrSUhkbElHaGhkbVVnWm1sc2RHVnlMQ0JoY0hCc2VTQm1hV3gwWlhKY2JpQWdJQ0JwWmlBb2RtRnNkV1ZVZVhCbGMxdHJaWGxkSUNZbUlDaHBjMDUxYlNoMllXeDFaU2tnZkh3Z2FYTlBZbW9vZG1Gc2RXVXBLU0FtSmlCMllXeDFaVlI1Y0dWelcydGxlVjB1ZEhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNCMllXeDFaU0E5SUhaaGJIVmxWSGx3WlhOYmEyVjVYUzUwY21GdWMyWnZjbTBvZG1Gc2RXVXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTFRY205d2MxdHJaWGxkS1NCN1hHNGdJQ0FnSUNCMGNtRnVjMlp2Y20xVGRISnBibWNnS3owZ2EyVjVJQ3NnSnlnbklDc2dkbUZzZFdVZ0t5QW5LU0FuTzF4dUlDQWdJQ0FnZEhKaGJuTm1iM0p0U0dGeldpQTlJQ2hyWlhrZ1BUMDlJSFJ5WVc1emJHRjBaVTFoY0M1NktTQS9JSFJ5ZFdVZ09pQjBjbUZ1YzJadmNtMUlZWE5hTzF4dVhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSEJ5YjNCbGNuUjVVM1J5YVc1bklDczlJQ2M3SnlBcklIQnlaV1pwZUdWeUtHdGxlU3dnZEhKMVpTa2dLeUFuT2ljZ0t5QjJZV3gxWlR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdkx5QkpaaUIzWlNCb1lYWmxJSFJ5WVc1elptOXliU0J3Y205d2N5d2dZblZwYkdRZ1lTQjBjbUZ1YzJadmNtMGdjM1J5YVc1blhHNGdJR2xtSUNob1lYTlVjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQnBaaUFvSVhSeVlXNXpabTl5YlVoaGMxb2dKaVlnWlc1aFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjRwSUh0Y2JpQWdJQ0FnSUhSeVlXNXpabTl5YlZOMGNtbHVaeUFyUFNCMGNtRnVjMnhoZEdWTllYQXVlaUFySUNjb01Da25PMXh1SUNBZ0lIMWNibHh1SUNBZ0lIQnliM0JsY25SNVUzUnlhVzVuSUNzOUlDYzdKeUFySUhCeVpXWnBlR1Z5S0NkMGNtRnVjMlp2Y20wbkxDQjBjblZsS1NBcklDYzZKeUFySUhSeVlXNXpabTl5YlZOMGNtbHVaenRjYmlBZ2ZWeHVYRzRnSUdWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQXJQU0J3Y205d1pYSjBlVk4wY21sdVp6dGNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvcmVuZGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBheGVzID0gWydYJywgJ1knLCAnWiddO1xuXG52YXIgdHJhbnNmb3JtUHJvcHMgPSB7XG4gIHg6IHRydWUsXG4gIHk6IHRydWUsXG4gIHo6IHRydWVcbn07XG5cbnZhciBTQ0FMRSA9ICdzY2FsZSc7XG52YXIgUk9UQVRFID0gJ3JvdGF0ZSc7XG52YXIgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbnZhciBURVJNUyA9IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdO1xuXG50cmFuc2Zvcm1Qcm9wc1tST1RBVEVdID0gdHJhbnNmb3JtUHJvcHNbU0NBTEVdID0gdHJhbnNmb3JtUHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG5cblRFUk1TLmZvckVhY2goZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGF4ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXhpcykge1xuICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlO1xuICB9KTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2Zvcm1Qcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM1J5WVc1elptOXliUzF3Y205d2N5NXFjeUpkTENKdVlXMWxjeUk2V3lKaGVHVnpJaXdpZEhKaGJuTm1iM0p0VUhKdmNITWlMQ0o0SWl3aWVTSXNJbm9pTENKVFEwRk1SU0lzSWxKUFZFRlVSU0lzSWxSU1FVNVRSazlTVFY5UVJWSlRVRVZEVkVsV1JTSXNJbFJGVWsxVElpd2labTl5UldGamFDSXNJblJsY20waUxDSmhlR2x6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeEpRVUZOUVN4UFFVRlBMRU5CUVVNc1IwRkJSQ3hGUVVGTkxFZEJRVTRzUlVGQlZ5eEhRVUZZTEVOQlFXSTdPMEZCUlVFc1NVRkJTVU1zYVVKQlFXbENPMEZCUTI1Q1F5eExRVUZITEVsQlJHZENPMEZCUlc1Q1F5eExRVUZITEVsQlJtZENPMEZCUjI1Q1F5eExRVUZITzBGQlNHZENMRU5CUVhKQ096dEJRVTFCTEVsQlFVMURMRkZCUVZFc1QwRkJaRHRCUVVOQkxFbEJRVTFETEZOQlFWTXNVVUZCWmp0QlFVTkJMRWxCUVUxRExIZENRVUYzUWl4elFrRkJPVUk3UVVGRFFTeEpRVUZOUXl4UlFVRlJMRU5CUVVNc1YwRkJSQ3hGUVVGalNDeExRVUZrTEVWQlFYRkNReXhOUVVGeVFpeEZRVUUyUWl4TlFVRTNRaXhGUVVGeFEwTXNjVUpCUVhKRExFTkJRV1E3TzBGQlJVRk9MR1ZCUVdWTExFMUJRV1lzU1VGQmVVSk1MR1ZCUVdWSkxFdEJRV1lzU1VGQmQwSktMR1ZCUVdWTkxIRkNRVUZtTEVsQlFYZERMRWxCUVhwR096dEJRVVZCUXl4TlFVRk5ReXhQUVVGT0xFTkJRV01zVlVGQlEwTXNTVUZCUkR0QlFVRkJMRk5CUVZWV0xFdEJRVXRUTEU5QlFVd3NRMEZCWVN4VlFVRkRSU3hKUVVGRU8wRkJRVUVzVjBGQlZWWXNaVUZCWlZNc1QwRkJUME1zU1VGQmRFSXNTVUZCT0VJc1NVRkJlRU03UVVGQlFTeEhRVUZpTEVOQlFWWTdRVUZCUVN4RFFVRmtPenRyUWtGRlpWWXNZeUlzSW1acGJHVWlPaUowY21GdWMyWnZjbTB0Y0hKdmNITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCaGVHVnpJRDBnV3lkWUp5d2dKMWtuTENBbldpZGRPMXh1WEc1c1pYUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1BTQjdYRzRnSUhnNklIUnlkV1VzWEc0Z0lIazZJSFJ5ZFdVc1hHNGdJSG82SUhSeWRXVmNibjA3WEc1Y2JtTnZibk4wSUZORFFVeEZJRDBnSjNOallXeGxKenRjYm1OdmJuTjBJRkpQVkVGVVJTQTlJQ2R5YjNSaGRHVW5PMXh1WTI5dWMzUWdWRkpCVGxOR1QxSk5YMUJGVWxOUVJVTlVTVlpGSUQwZ0ozUnlZVzV6Wm05eWJWQmxjbk53WldOMGFYWmxKenRjYm1OdmJuTjBJRlJGVWsxVElEMGdXeWQwY21GdWMyeGhkR1VuTENCVFEwRk1SU3dnVWs5VVFWUkZMQ0FuYzJ0bGR5Y3NJRlJTUVU1VFJrOVNUVjlRUlZKVFVFVkRWRWxXUlYwN1hHNWNiblJ5WVc1elptOXliVkJ5YjNCelcxSlBWRUZVUlYwZ1BTQjBjbUZ1YzJadmNtMVFjbTl3YzF0VFEwRk1SVjBnUFNCMGNtRnVjMlp2Y20xUWNtOXdjMXRVVWtGT1UwWlBVazFmVUVWU1UxQkZRMVJKVmtWZElEMGdkSEoxWlR0Y2JseHVWRVZTVFZNdVptOXlSV0ZqYUNnb2RHVnliU2tnUFQ0Z1lYaGxjeTVtYjNKRllXTm9LQ2hoZUdsektTQTlQaUIwY21GdWMyWnZjbTFRY205d2MxdDBaWEp0SUNzZ1lYaHBjMTBnUFNCMGNuVmxLU2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUhSeVlXNXpabTl5YlZCeWIzQnpPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAvLyBDb2xvciBwcm9wc1xuICBjb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJhY2tncm91bmRDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIG91dGxpbmVDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGZpbGw6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzdHJva2U6IF92YWx1ZVR5cGVzLmNvbG9yLFxuXG4gIC8vIEJvcmRlciBwcm9wc1xuICBib3JkZXJDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlclRvcENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyUmlnaHRDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlckJvdHRvbUNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyTGVmdENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyUmFkaXVzOiBfdmFsdWVUeXBlcy5weCxcblxuICAvLyBQb3NpdGlvbmluZ1xuICB3aWR0aDogX3ZhbHVlVHlwZXMucHgsXG4gIGhlaWdodDogX3ZhbHVlVHlwZXMucHgsXG5cbiAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgcm90YXRlOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICByb3RhdGVYOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICByb3RhdGVZOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICByb3RhdGVaOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICBzY2FsZTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWDogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWjogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNrZXdYOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICBza2V3WTogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgZGlzdGFuY2U6IF92YWx1ZVR5cGVzLnB4LFxuICB0cmFuc2xhdGVYOiBfdmFsdWVUeXBlcy5weCxcbiAgdHJhbnNsYXRlWTogX3ZhbHVlVHlwZXMucHgsXG4gIHRyYW5zbGF0ZVo6IF92YWx1ZVR5cGVzLnB4LFxuICBwZXJzcGVjdGl2ZTogX3ZhbHVlVHlwZXMucHgsXG4gIG9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzWmhiSFZsTFhSNWNHVnpMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTnZiRzl5SWl3aVltRmphMmR5YjNWdVpFTnZiRzl5SWl3aWIzVjBiR2x1WlVOdmJHOXlJaXdpWm1sc2JDSXNJbk4wY205clpTSXNJbUp2Y21SbGNrTnZiRzl5SWl3aVltOXlaR1Z5Vkc5d1EyOXNiM0lpTENKaWIzSmtaWEpTYVdkb2RFTnZiRzl5SWl3aVltOXlaR1Z5UW05MGRHOXRRMjlzYjNJaUxDSmliM0prWlhKTVpXWjBRMjlzYjNJaUxDSmliM0prWlhKU1lXUnBkWE1pTENKM2FXUjBhQ0lzSW1obGFXZG9kQ0lzSW5KdmRHRjBaU0lzSW5KdmRHRjBaVmdpTENKeWIzUmhkR1ZaSWl3aWNtOTBZWFJsV2lJc0luTmpZV3hsSWl3aWMyTmhiR1ZZSWl3aWMyTmhiR1ZaSWl3aWMyTmhiR1ZhSWl3aWMydGxkMWdpTENKemEyVjNXU0lzSW1ScGMzUmhibU5sSWl3aWRISmhibk5zWVhSbFdDSXNJblJ5WVc1emJHRjBaVmtpTENKMGNtRnVjMnhoZEdWYUlpd2ljR1Z5YzNCbFkzUnBkbVVpTENKdmNHRmphWFI1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPMnRDUVVObE8wRkJRMkk3UVVGRFFVRXNNRUpCUm1FN1FVRkhZa01zYjBOQlNHRTdRVUZKWWtNc2FVTkJTbUU3UVVGTFlrTXNlVUpCVEdFN1FVRk5Za01zTWtKQlRtRTdPMEZCVVdJN1FVRkRRVU1zWjBOQlZHRTdRVUZWWWtNc2JVTkJWbUU3UVVGWFlrTXNjVU5CV0dFN1FVRlpZa01zYzBOQldtRTdRVUZoWWtNc2IwTkJZbUU3UVVGallrTXNPRUpCWkdFN08wRkJaMEppTzBGQlEwRkRMSFZDUVdwQ1lUdEJRV3RDWWtNc2QwSkJiRUpoT3p0QlFXOUNZanRCUVVOQlF5dzJRa0Z5UW1FN1FVRnpRbUpETERoQ1FYUkNZVHRCUVhWQ1lrTXNPRUpCZGtKaE8wRkJkMEppUXl3NFFrRjRRbUU3UVVGNVFtSkRMREJDUVhwQ1lUdEJRVEJDWWtNc01rSkJNVUpoTzBGQk1rSmlReXd5UWtFelFtRTdRVUUwUW1KRExESkNRVFZDWVR0QlFUWkNZa01zTkVKQk4wSmhPMEZCT0VKaVF5dzBRa0U1UW1FN1FVRXJRbUpETERCQ1FTOUNZVHRCUVdkRFlrTXNORUpCYUVOaE8wRkJhVU5pUXl3MFFrRnFRMkU3UVVGclEySkRMRFJDUVd4RFlUdEJRVzFEWWtNc05rSkJia05oTzBGQmIwTmlRenRCUVhCRFlTeERJaXdpWm1sc1pTSTZJblpoYkhWbExYUjVjR1Z6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWVd4d2FHRXNJR052Ykc5eUxDQmtaV2R5WldWekxDQnpZMkZzWlN3Z2NIZ2dmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkbUZzZFdVdGRIbHdaWE1uT3lCY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdMeThnUTI5c2IzSWdjSEp2Y0hOY2JpQWdZMjlzYjNJNklHTnZiRzl5TEZ4dUlDQmlZV05yWjNKdmRXNWtRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQnZkWFJzYVc1bFEyOXNiM0k2SUdOdmJHOXlMRnh1SUNCbWFXeHNPaUJqYjJ4dmNpeGNiaUFnYzNSeWIydGxPaUJqYjJ4dmNpeGNibHh1SUNBdkx5QkNiM0prWlhJZ2NISnZjSE5jYmlBZ1ltOXlaR1Z5UTI5c2IzSTZJR052Ykc5eUxGeHVJQ0JpYjNKa1pYSlViM0JEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0p2Y21SbGNsSnBaMmgwUTI5c2IzSTZJR052Ykc5eUxGeHVJQ0JpYjNKa1pYSkNiM1IwYjIxRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdKdmNtUmxja3hsWm5SRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdKdmNtUmxjbEpoWkdsMWN6b2djSGdzWEc1Y2JpQWdMeThnVUc5emFYUnBiMjVwYm1kY2JpQWdkMmxrZEdnNklIQjRMRnh1SUNCb1pXbG5hSFE2SUhCNExDQWdYRzVjYmlBZ0x5OGdWSEpoYm5ObWIzSnRJSEJ5YjNCbGNuUnBaWE5jYmlBZ2NtOTBZWFJsT2lCa1pXZHlaV1Z6TEZ4dUlDQnliM1JoZEdWWU9pQmtaV2R5WldWekxGeHVJQ0J5YjNSaGRHVlpPaUJrWldkeVpXVnpMRnh1SUNCeWIzUmhkR1ZhT2lCa1pXZHlaV1Z6TEZ4dUlDQnpZMkZzWlRvZ2MyTmhiR1VzWEc0Z0lITmpZV3hsV0RvZ2MyTmhiR1VzWEc0Z0lITmpZV3hsV1RvZ2MyTmhiR1VzWEc0Z0lITmpZV3hsV2pvZ2MyTmhiR1VzWEc0Z0lITnJaWGRZT2lCa1pXZHlaV1Z6TEZ4dUlDQnphMlYzV1RvZ1pHVm5jbVZsY3l4Y2JpQWdaR2x6ZEdGdVkyVTZJSEI0TEZ4dUlDQjBjbUZ1YzJ4aGRHVllPaUJ3ZUN4Y2JpQWdkSEpoYm5Oc1lYUmxXVG9nY0hnc1hHNGdJSFJ5WVc1emJHRjBaVm82SUhCNExGeHVJQ0J3WlhKemNHVmpkR2wyWlRvZ2NIZ3NYRzRnSUc5d1lXTnBkSGs2SUdGc2NHaGhYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvdmFsdWUtdHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBjYW1lbENhY2hlID0ge307XG52YXIgZGFzaENhY2hlID0ge307XG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcycsICcnXTtcbnZhciBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbnZhciB0ZXN0RWxlbWVudCA9IHZvaWQgMDtcblxuLypcbiAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbnZhciB0ZXN0UHJlZml4ID0gZnVuY3Rpb24gKGtleSkge1xuICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICB2YXIgbm9QcmVmaXggPSBwcmVmaXggPT09ICcnO1xuICAgIHZhciBwcmVmaXhlZFByb3BlcnR5TmFtZSA9IG5vUHJlZml4ID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgaWYgKHByZWZpeGVkUHJvcGVydHlOYW1lIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICBjYW1lbENhY2hlW2tleV0gPSBwcmVmaXhlZFByb3BlcnR5TmFtZTtcbiAgICAgIGRhc2hDYWNoZVtrZXldID0gJycgKyAobm9QcmVmaXggPyAnJyA6ICctJykgKyAoMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShwcmVmaXhlZFByb3BlcnR5TmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoa2V5LCBhc0Rhc2hDYXNlKSB7XG4gIHZhciBjYWNoZSA9IGFzRGFzaENhc2UgPyBkYXNoQ2FjaGUgOiBjYW1lbENhY2hlO1xuXG4gIGlmICghY2FjaGVba2V5XSkge1xuICAgIHRlc3RQcmVmaXgoa2V5KTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZVtrZXldO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM0J5WldacGVHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTmhiV1ZzUTJGamFHVWlMQ0prWVhOb1EyRmphR1VpTENKd2NtVm1hWGhsY3lJc0ltNTFiVkJ5WldacGVHVnpJaXdpYkdWdVozUm9JaXdpZEdWemRFVnNaVzFsYm5RaUxDSjBaWE4wVUhKbFptbDRJaXdpYTJWNUlpd2laRzlqZFcxbGJuUWlMQ0pqY21WaGRHVkZiR1Z0Wlc1MElpd2lhU0lzSW5CeVpXWnBlQ0lzSW01dlVISmxabWw0SWl3aWNISmxabWw0WldSUWNtOXdaWEowZVU1aGJXVWlMQ0pqYUdGeVFYUWlMQ0owYjFWd2NHVnlRMkZ6WlNJc0luTnNhV05sSWl3aWMzUjViR1VpTENKaGMwUmhjMmhEWVhObElpd2lZMkZqYUdVaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3UVVGRlFTeEpRVUZOUVN4aFFVRmhMRVZCUVc1Q08wRkJRMEVzU1VGQlRVTXNXVUZCV1N4RlFVRnNRanRCUVVOQkxFbEJRVTFETEZkQlFWY3NRMEZCUXl4UlFVRkVMRVZCUVZVc1MwRkJWaXhGUVVGblFpeEhRVUZvUWl4RlFVRnZRaXhKUVVGd1FpeEZRVUV3UWl4RlFVRXhRaXhEUVVGcVFqdEJRVU5CTEVsQlFVMURMR05CUVdORUxGTkJRVk5GTEUxQlFUZENPMEZCUTBFc1NVRkJTVU1zYjBKQlFVbzdPMEZCUlVFN096czdPenRCUVUxQkxFbEJRVTFETEdGQlFXRXNWVUZCUTBNc1IwRkJSQ3hGUVVGVE8wRkJRekZDUml4blFrRkJZMEVzWlVGQlpVY3NVMEZCVTBNc1lVRkJWQ3hEUVVGMVFpeExRVUYyUWl4RFFVRTNRanM3UVVGRlFTeFBRVUZMTEVsQlFVbERMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1ZBc1YwRkJjRUlzUlVGQmFVTlBMRWRCUVdwRExFVkJRWE5ETzBGQlEzQkRMRkZCUVUxRExGTkJRVk5VTEZOQlFWTlJMRU5CUVZRc1EwRkJaanRCUVVOQkxGRkJRVTFGTEZkQlFWbEVMRmRCUVZjc1JVRkJOMEk3UVVGRFFTeFJRVUZOUlN4MVFrRkJkVUpFTEZkQlFWZE1MRWRCUVZnc1IwRkJhVUpKTEZOQlFWTktMRWxCUVVsUExFMUJRVW9zUTBGQlZ5eERRVUZZTEVWQlFXTkRMRmRCUVdRc1JVRkJWQ3hIUVVGMVExSXNTVUZCU1ZNc1MwRkJTaXhEUVVGVkxFTkJRVllzUTBGQmNrWTdPMEZCUlVFc1VVRkJTVWdzZDBKQlFYZENVaXhaUVVGWldTeExRVUY0UXl4RlFVRXJRenRCUVVNM1EycENMR2xDUVVGWFR5eEhRVUZZTEVsQlFXdENUU3h2UWtGQmJFSTdRVUZEUVZvc1owSkJRVlZOTEVkQlFWWXNWVUZCY1VKTExGZEJRVmNzUlVGQldDeEhRVUZuUWl4SFFVRnlReXhKUVVFMFF5eDNRa0ZCV1VNc2IwSkJRVm9zUTBGQk5VTTdRVUZEUkR0QlFVTkdPMEZCUTBZc1EwRmlSRHM3YTBKQlpXVXNWVUZCUTA0c1IwRkJSQ3hGUVVGTlZ5eFZRVUZPTEVWQlFYRkNPMEZCUTJ4RExFMUJRVTFETEZGQlFWRkVMR0ZCUVdGcVFpeFRRVUZpTEVkQlFYbENSQ3hWUVVGMlF6czdRVUZGUVN4TlFVRkpMRU5CUVVOdFFpeE5RVUZOV2l4SFFVRk9MRU5CUVV3c1JVRkJhVUk3UVVGRFprUXNaVUZCVjBNc1IwRkJXRHRCUVVORU96dEJRVVZFTEZOQlFVOVpMRTFCUVUxYUxFZEJRVTRzUTBGQlVEdEJRVU5FTEVNaUxDSm1hV3hsSWpvaWNISmxabWw0WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCallXMWxiRlJ2UkdGemFDQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU52Ym5OMElHTmhiV1ZzUTJGamFHVWdQU0I3ZlR0Y2JtTnZibk4wSUdSaGMyaERZV05vWlNBOUlIdDlPMXh1WTI5dWMzUWdjSEpsWm1sNFpYTWdQU0JiSjFkbFltdHBkQ2NzSjAxdmVpY3NKMDhuTENkdGN5Y3NJQ2NuWFR0Y2JtTnZibk4wSUc1MWJWQnlaV1pwZUdWeklEMGdjSEpsWm1sNFpYTXViR1Z1WjNSb08xeHViR1YwSUhSbGMzUkZiR1Z0Wlc1ME8xeHVYRzR2S2x4dUlDQlVaWE4wSUhOMGVXeGxJSEJ5YjNCbGNuUjVJR1p2Y2lCd2NtVm1hWGhsWkNCMlpYSnphVzl1WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRk4wZVd4bElIQnliM0JsY25SNVhHNGdJRUJ5WlhSMWNtNGdXM04wY21sdVoxMDZJRU5oWTJobFpDQndjbTl3WlhKMGVTQnVZVzFsWEc0cUwxeHVZMjl1YzNRZ2RHVnpkRkJ5WldacGVDQTlJQ2hyWlhrcElEMCtJSHRjYmlBZ2RHVnpkRVZzWlcxbGJuUWdQU0IwWlhOMFJXeGxiV1Z1ZENCOGZDQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nka2FYWW5LVHRjYmx4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlZCeVpXWnBlR1Z6T3lCcEt5c3BJSHRjYmlBZ0lDQmpiMjV6ZENCd2NtVm1hWGdnUFNCd2NtVm1hWGhsYzF0cFhUdGNiaUFnSUNCamIyNXpkQ0J1YjFCeVpXWnBlQ0E5SUNod2NtVm1hWGdnUFQwOUlDY25LVHRjYmlBZ0lDQmpiMjV6ZENCd2NtVm1hWGhsWkZCeWIzQmxjblI1VG1GdFpTQTlJRzV2VUhKbFptbDRJRDhnYTJWNUlEb2djSEpsWm1sNElDc2dhMlY1TG1Ob1lYSkJkQ2d3S1M1MGIxVndjR1Z5UTJGelpTZ3BJQ3NnYTJWNUxuTnNhV05sS0RFcE8xeHVYRzRnSUNBZ2FXWWdLSEJ5WldacGVHVmtVSEp2Y0dWeWRIbE9ZVzFsSUdsdUlIUmxjM1JGYkdWdFpXNTBMbk4wZVd4bEtTQjdYRzRnSUNBZ0lDQmpZVzFsYkVOaFkyaGxXMnRsZVYwZ1BTQndjbVZtYVhobFpGQnliM0JsY25SNVRtRnRaVHRjYmlBZ0lDQWdJR1JoYzJoRFlXTm9aVnRyWlhsZElEMGdZQ1I3S0c1dlVISmxabWw0SUQ4Z0p5Y2dPaUFuTFNjcGZTUjdZMkZ0Wld4VWIwUmhjMmdvY0hKbFptbDRaV1JRY205d1pYSjBlVTVoYldVcGZXQTdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hMlY1TENCaGMwUmhjMmhEWVhObEtTQTlQaUI3WEc0Z0lHTnZibk4wSUdOaFkyaGxJRDBnWVhORVlYTm9RMkZ6WlNBL0lHUmhjMmhEWVdOb1pTQTZJR05oYldWc1EyRmphR1U3WEc1Y2JpQWdhV1lnS0NGallXTm9aVnRyWlhsZEtTQjdYRzRnSUNBZ2RHVnpkRkJ5WldacGVDaHJaWGtwTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdOaFkyaGxXMnRsZVYwN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy9wcmVmaXhlci5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBkYXRhKSB7XG4gIHZhciBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDE7XG4gIHZhciBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMTtcbiAgdmFyIHRyYW5zZm9ybU9yaWdpblggPSBkYXRhLndpZHRoICogKChzdGF0ZS5vcmlnaW5YIHx8IDUwKSAvIDEwMCkgKyBkYXRhLng7XG4gIHZhciB0cmFuc2Zvcm1PcmlnaW5ZID0gZGF0YS5oZWlnaHQgKiAoKHN0YXRlLm9yaWdpblkgfHwgNTApIC8gMTAwKSArIGRhdGEueTtcbiAgdmFyIHNjYWxlVHJhbnNmb3JtWCA9IC10cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSk7XG4gIHZhciBzY2FsZVRyYW5zZm9ybVkgPSAtdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKTtcbiAgdmFyIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGU7XG4gIHZhciBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWTtcbiAgdmFyIHRyYW5zZm9ybSA9IHtcbiAgICB0cmFuc2xhdGU6ICd0cmFuc2xhdGUoJyArIHN0YXRlLnRyYW5zbGF0ZVggKyAnLCAnICsgc3RhdGUudHJhbnNsYXRlWSArICcpICcsXG4gICAgc2NhbGU6ICd0cmFuc2xhdGUoJyArIHNjYWxlVHJhbnNmb3JtWCArICcsICcgKyBzY2FsZVRyYW5zZm9ybVkgKyAnKSBzY2FsZSgnICsgc2NhbGUgKyAnLCAnICsgc2NhbGVZICsgJykgdHJhbnNsYXRlKCcgKyBzY2FsZVJlcGxhY2VYICsgJywgJyArIHNjYWxlUmVwbGFjZVkgKyAnKSAnLFxuICAgIHJvdGF0ZTogJ3JvdGF0ZSgnICsgc3RhdGUucm90YXRlICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblggKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWSArICcpICcsXG4gICAgc2tld1g6ICdza2V3WCgnICsgc3RhdGUuc2tld1ggKyAnKSAnLFxuICAgIHNrZXdZOiAnc2tld1koJyArIHN0YXRlLnNrZXdZICsgJykgJ1xuICB9O1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzWygwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICBmb3IgKHZhciBfa2V5IGluIHRyYW5zZm9ybSkge1xuICAgICAgaWYgKHRyYW5zZm9ybS5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gX2tleSA9PT0gJ3NjYWxlJyA/ICcxJyA6ICcwJztcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtfa2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDJKMWFXeGtMbXB6SWwwc0ltNWhiV1Z6SWpwYkltSjFhV3hrSWl3aVdrVlNUMTlPVDFSZldrVlNUeUlzSW5OMFlYUmxJaXdpWkdGMFlTSXNJbWhoYzFSeVlXNXpabTl5YlNJc0luQnliM0J6SWl3aWMyTmhiR1VpTENKMWJtUmxabWx1WldRaUxDSnpZMkZzWlZnaUxDSnpZMkZzWlZraUxDSjBjbUZ1YzJadmNtMVBjbWxuYVc1WUlpd2lkMmxrZEdnaUxDSnZjbWxuYVc1WUlpd2llQ0lzSW5SeVlXNXpabTl5YlU5eWFXZHBibGtpTENKb1pXbG5hSFFpTENKdmNtbG5hVzVaSWl3aWVTSXNJbk5qWVd4bFZISmhibk5tYjNKdFdDSXNJbk5qWVd4bFZISmhibk5tYjNKdFdTSXNJbk5qWVd4bFVtVndiR0ZqWlZnaUxDSnpZMkZzWlZKbGNHeGhZMlZaSWl3aWRISmhibk5tYjNKdElpd2lkSEpoYm5Oc1lYUmxJaXdpZEhKaGJuTnNZWFJsV0NJc0luUnlZVzV6YkdGMFpWa2lMQ0p5YjNSaGRHVWlMQ0p6YTJWM1dDSXNJbk5yWlhkWklpd2lhMlY1SWl3aWFHRnpUM2R1VUhKdmNHVnlkSGtpTENKa1pXWmhkV3gwVm1Gc2RXVWlMQ0p5WlhCc1lXTmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUzNkQ1FTeExPenRCUVV4NFFqczdRVUZEUVRzN096czdPMEZCUlVFc1NVRkJUVU1zWjBKQlFXZENMRTFCUVhSQ096dEJRVVZsTEZOQlFWTkVMRXRCUVZRc1EwRkJaVVVzUzBGQlppeEZRVUZ6UWtNc1NVRkJkRUlzUlVGQk5FSTdRVUZEZWtNc1RVRkJTVU1zWlVGQlpTeExRVUZ1UWp0QlFVTkJMRTFCUVUxRExGRkJRVkVzUlVGQlpEdEJRVU5CTEUxQlFVMURMRkZCUVZGS0xFMUJRVTFKTEV0QlFVNHNTMEZCWjBKRExGTkJRV2hDTEVkQlFUUkNUQ3hOUVVGTlNTeExRVUZPTEVsQlFXVk1MR0ZCUVRORExFZEJRVEpFUXl4TlFVRk5UU3hOUVVGT0xFbEJRV2RDTEVOQlFYcEdPMEZCUTBFc1RVRkJUVU1zVTBGQlUxQXNUVUZCVFU4c1RVRkJUaXhMUVVGcFFrWXNVMEZCYWtJc1IwRkJOa0pNTEUxQlFVMVBMRTFCUVU0c1NVRkJaMEpTTEdGQlFUZERMRWRCUVRaRVN5eFRRVUZUTEVOQlFYSkdPMEZCUTBFc1RVRkJUVWtzYlVKQlFXMUNVQ3hMUVVGTFVTeExRVUZNTEVsQlFXTXNRMEZCUTFRc1RVRkJUVlVzVDBGQlRpeEpRVUZwUWl4RlFVRnNRaXhKUVVGM1FpeEhRVUYwUXl4SlFVRTJRMVFzUzBGQlMxVXNRMEZCTTBVN1FVRkRRU3hOUVVGTlF5eHRRa0ZCYlVKWUxFdEJRVXRaTEUxQlFVd3NTVUZCWlN4RFFVRkRZaXhOUVVGTll5eFBRVUZPTEVsQlFXbENMRVZCUVd4Q0xFbEJRWGRDTEVkQlFYWkRMRWxCUVRoRFlpeExRVUZMWXl4RFFVRTFSVHRCUVVOQkxFMUJRVTFETEd0Q1FVRnJRaXhEUVVGRlVpeG5Ra0ZCUml4SlFVRnpRa29zVVVGQlVTeERRVUU1UWl4RFFVRjRRanRCUVVOQkxFMUJRVTFoTEd0Q1FVRnJRaXhEUVVGRlRDeG5Ra0ZCUml4SlFVRnpRa3dzVTBGQlV5eERRVUV2UWl4RFFVRjRRanRCUVVOQkxFMUJRVTFYTEdkQ1FVRm5RbFlzYlVKQlFXMUNTaXhMUVVGNlF6dEJRVU5CTEUxQlFVMWxMR2RDUVVGblFsQXNiVUpCUVcxQ1RDeE5RVUY2UXp0QlFVTkJMRTFCUVUxaExGbEJRVms3UVVGRGFFSkRMRGhDUVVGM1FuSkNMRTFCUVUxelFpeFZRVUU1UWl4VlFVRTJRM1JDTEUxQlFVMTFRaXhWUVVGdVJDeFBRVVJuUWp0QlFVVm9RbTVDTERCQ1FVRnZRbGtzWlVGQmNFSXNWVUZCZDBORExHVkJRWGhETEdkQ1FVRnJSV0lzUzBGQmJFVXNWVUZCTkVWSExFMUJRVFZGTEc5Q1FVRnBSMWNzWVVGQmFrY3NWVUZCYlVoRExHRkJRVzVJTEU5QlJtZENPMEZCUjJoQ1N5eDNRa0ZCYTBKNFFpeE5RVUZOZDBJc1RVRkJlRUlzVlVGQmJVTm9RaXhuUWtGQmJrTXNWVUZCZDBSSkxHZENRVUY0UkN4UFFVaG5RanRCUVVsb1FtRXNjMEpCUVdkQ2VrSXNUVUZCVFhsQ0xFdEJRWFJDTEU5QlNtZENPMEZCUzJoQ1F5eHpRa0ZCWjBJeFFpeE5RVUZOTUVJc1MwRkJkRUk3UVVGTVowSXNSMEZCYkVJN08wRkJVVUVzVDBGQlN5eEpRVUZKUXl4SFFVRlVMRWxCUVdkQ00wSXNTMEZCYUVJc1JVRkJkVUk3UVVGRGNrSXNVVUZCU1VFc1RVRkJUVFJDTEdOQlFVNHNRMEZCY1VKRUxFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkROMElzVlVGQlNTeDVRa0ZCWlVFc1IwRkJaaXhEUVVGS0xFVkJRWGxDTzBGQlEzWkNla0lzZFVKQlFXVXNTVUZCWmp0QlFVTkVMRTlCUmtRc1RVRkZUenRCUVVOTVF5eGpRVUZOTEhkQ1FVRlpkMElzUjBGQldpeERRVUZPTEVsQlFUQkNNMElzVFVGQlRUSkNMRWRCUVU0c1EwRkJNVUk3UVVGRFJEdEJRVU5HTzBGQlEwWTdPMEZCUlVRc1RVRkJTWHBDTEZsQlFVb3NSVUZCYTBJN1FVRkRhRUpETEZWQlFVMXBRaXhUUVVGT0xFZEJRV3RDTEVWQlFXeENPenRCUVVWQkxGTkJRVXNzU1VGQlNVOHNTVUZCVkN4SlFVRm5RbEFzVTBGQmFFSXNSVUZCTWtJN1FVRkRla0lzVlVGQlNVRXNWVUZCVlZFc1kwRkJWaXhEUVVGNVFrUXNTVUZCZWtJc1EwRkJTaXhGUVVGdFF6dEJRVU5xUXl4WlFVRk5SU3hsUVVGblFrWXNVMEZCVVN4UFFVRlVMRWRCUVc5Q0xFZEJRWEJDTEVkQlFUQkNMRWRCUVM5RE8wRkJRMEY0UWl4alFVRk5hVUlzVTBGQlRpeEpRVUZ0UWtFc1ZVRkJWVThzU1VGQlZpeEZRVUZsUnl4UFFVRm1MRU5CUVhWQ0xGbEJRWFpDTEVWQlFYRkRSQ3haUVVGeVF5eERRVUZ1UWp0QlFVTkVPMEZCUTBZN1FVRkRSanM3UVVGRlJDeFRRVUZQTVVJc1MwRkJVRHRCUVVORUlpd2labWxzWlNJNkltSjFhV3hrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWTJGdFpXeFViMFJoYzJnZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRYUnBiSE1uTzF4dWFXMXdiM0owSUhSeVlXNXpabTl5YlZCeWIzQnpJR1p5YjIwZ0p5NHVMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dVhHNWpiMjV6ZENCYVJWSlBYMDVQVkY5YVJWSlBJRDBnTUM0d01EQXhPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJpZFdsc1pDaHpkR0YwWlN3Z1pHRjBZU2tnZTF4dUlDQnNaWFFnYUdGelZISmhibk5tYjNKdElEMGdabUZzYzJVN1hHNGdJR052Ym5OMElIQnliM0J6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJSE5qWVd4bElEMGdjM1JoZEdVdWMyTmhiR1VnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JSE4wWVhSbExuTmpZV3hsSUh4OElGcEZVazlmVGs5VVgxcEZVazhnT2lCemRHRjBaUzV6WTJGc1pWZ2dmSHdnTVR0Y2JpQWdZMjl1YzNRZ2MyTmhiR1ZaSUQwZ2MzUmhkR1V1YzJOaGJHVlpJQ0U5UFNCMWJtUmxabWx1WldRZ1B5QnpkR0YwWlM1elkyRnNaVmtnZkh3Z1drVlNUMTlPVDFSZldrVlNUeUE2SUhOallXeGxJSHg4SURFN1hHNGdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ1BTQmtZWFJoTG5kcFpIUm9JQ29nS0NoemRHRjBaUzV2Y21sbmFXNVlJSHg4SURVd0tTQXZJREV3TUNrZ0t5QmtZWFJoTG5nN1hHNGdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxrZ1BTQmtZWFJoTG1obGFXZG9kQ0FxSUNnb2MzUmhkR1V1YjNKcFoybHVXU0I4ZkNBMU1Da2dMeUF4TURBcElDc2daR0YwWVM1NU8xeHVJQ0JqYjI1emRDQnpZMkZzWlZSeVlXNXpabTl5YlZnZ1BTQXRJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dLaUFvYzJOaGJHVWdLaUF4S1R0Y2JpQWdZMjl1YzNRZ2MyTmhiR1ZVY21GdWMyWnZjbTFaSUQwZ0xTQjBjbUZ1YzJadmNtMVBjbWxuYVc1WklDb2dLSE5qWVd4bFdTQXFJREVwTzF4dUlDQmpiMjV6ZENCelkyRnNaVkpsY0d4aFkyVllJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXQ0F2SUhOallXeGxPMXh1SUNCamIyNXpkQ0J6WTJGc1pWSmxjR3hoWTJWWklEMGdkSEpoYm5ObWIzSnRUM0pwWjJsdVdTQXZJSE5qWVd4bFdUdGNiaUFnWTI5dWMzUWdkSEpoYm5ObWIzSnRJRDBnZTF4dUlDQWdJSFJ5WVc1emJHRjBaVG9nWUhSeVlXNXpiR0YwWlNna2UzTjBZWFJsTG5SeVlXNXpiR0YwWlZoOUxDQWtlM04wWVhSbExuUnlZVzV6YkdGMFpWbDlLU0JnTEZ4dUlDQWdJSE5qWVd4bE9pQmdkSEpoYm5Oc1lYUmxLQ1I3YzJOaGJHVlVjbUZ1YzJadmNtMVlmU3dnSkh0elkyRnNaVlJ5WVc1elptOXliVmw5S1NCelkyRnNaU2drZTNOallXeGxmU3dnSkh0elkyRnNaVmw5S1NCMGNtRnVjMnhoZEdVb0pIdHpZMkZzWlZKbGNHeGhZMlZZZlN3Z0pIdHpZMkZzWlZKbGNHeGhZMlZaZlNrZ1lDeGNiaUFnSUNCeWIzUmhkR1U2SUdCeWIzUmhkR1VvSkh0emRHRjBaUzV5YjNSaGRHVjlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGg5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxsOUtTQmdMRnh1SUNBZ0lITnJaWGRZT2lCZ2MydGxkMWdvSkh0emRHRjBaUzV6YTJWM1dIMHBJR0FzWEc0Z0lDQWdjMnRsZDFrNklHQnphMlYzV1Nna2UzTjBZWFJsTG5OclpYZFpmU2tnWUZ4dUlDQjlPMXh1WEc0Z0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJR2xtSUNoemRHRjBaUzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNCcFppQW9kSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNCb1lYTlVjbUZ1YzJadmNtMGdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NISnZjSE5iWTJGdFpXeFViMFJoYzJnb2EyVjVLVjBnUFNCemRHRjBaVnRyWlhsZE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHbG1JQ2hvWVhOVWNtRnVjMlp2Y20wcElIdGNiaUFnSUNCd2NtOXdjeTUwY21GdWMyWnZjbTBnUFNBbkp6dGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGNtRnVjMlp2Y20wcElIdGNiaUFnSUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTB1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCa1pXWmhkV3gwVm1Gc2RXVWdQU0FvYTJWNUlEMDlQU0FuYzJOaGJHVW5LU0EvSUNjeEp5QTZJQ2N3Snp0Y2JpQWdJQ0FnSUNBZ2NISnZjSE11ZEhKaGJuTm1iM0p0SUNzOUlIUnlZVzV6Wm05eWJWdHJaWGxkTG5KbGNHeGhZMlVvTDNWdVpHVm1hVzVsWkM5bkxDQmtaV1poZFd4MFZtRnNkV1VwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ3Y205d2N6dGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL2luYy92YWx1ZS10eXBlcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGZpbGw6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzdHJva2U6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzY2FsZTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWDogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIGQ6IF92YWx1ZVR5cGVzLmNvbXBsZXgsXG4gIHBvaW50czogX3ZhbHVlVHlwZXMuY29tcGxleCxcbiAgb3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGEsXG4gIGZpbGxPcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYSxcbiAgc3Ryb2tlT3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGFcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDNaaGJIVmxMWFI1Y0dWekxtcHpJbDBzSW01aGJXVnpJanBiSW1acGJHd2lMQ0p6ZEhKdmEyVWlMQ0p6WTJGc1pTSXNJbk5qWVd4bFdDSXNJbk5qWVd4bFdTSXNJbVFpTENKd2IybHVkSE1pTENKdmNHRmphWFI1SWl3aVptbHNiRTl3WVdOcGRIa2lMQ0p6ZEhKdmEyVlBjR0ZqYVhSNUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3TzJ0Q1FVVmxPMEZCUTJKQkxIbENRVVJoTzBGQlJXSkRMREpDUVVaaE8wRkJSMkpETERCQ1FVaGhPMEZCU1dKRExESkNRVXBoTzBGQlMySkRMREpDUVV4aE8wRkJUV0pETEhkQ1FVNWhPMEZCVDJKRExEWkNRVkJoTzBGQlVXSkRMRFJDUVZKaE8wRkJVMkpETEdkRFFWUmhPMEZCVldKRE8wRkJWbUVzUXlJc0ltWnBiR1VpT2lKMllXeDFaUzEwZVhCbGN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHRnNjR2hoTENCamIyeHZjaXdnWTI5dGNHeGxlQ3dnYzJOaGJHVWdmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkbUZzZFdVdGRIbHdaWE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJR1pwYkd3NklHTnZiRzl5TEZ4dUlDQnpkSEp2YTJVNklHTnZiRzl5TEZ4dUlDQnpZMkZzWlRvZ2MyTmhiR1VzWEc0Z0lITmpZV3hsV0RvZ2MyTmhiR1VzWEc0Z0lITmpZV3hsV1RvZ2MyTmhiR1VzWEc0Z0lHUTZJR052YlhCc1pYZ3NYRzRnSUhCdmFXNTBjem9nWTI5dGNHeGxlQ3hjYmlBZ2IzQmhZMmwwZVRvZ1lXeHdhR0VzWEc0Z0lHWnBiR3hQY0dGamFYUjVPaUJoYkhCb1lTeGNiaUFnYzNSeWIydGxUM0JoWTJsMGVUb2dZV3h3YUdGY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnQsIGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCAqIGxlbmd0aCArICdweCc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RhdGUsIGxlbmd0aCkge1xuICB2YXIgc3R5bGVzID0ge307XG4gIHZhciBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgbGVuZ3RoOiAwLFxuICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgfTtcbiAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MWEJoZEdndlluVnBiR1F1YW5NaVhTd2libUZ0WlhNaU9sc2ljR1Z5WTJWdWRGUnZVR2w0Wld4eklpd2ljR1Z5WTJWdWRDSXNJbXhsYm1kMGFDSXNJbkJoY25ObFJteHZZWFFpTENKemRHRjBaU0lzSW5OMGVXeGxjeUlzSW1SaGMyaEJjbkpoZVZOMGVXeGxjeUlzSW5Od1lXTnBibWNpTENKb1lYTkVZWE5vUVhKeVlYa2lMQ0pyWlhraUxDSm9ZWE5QZDI1UWNtOXdaWEowZVNJc0luWmhiSFZsSWwwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFUczdPenM3TzBGQlRVRXNTVUZCVFVFc2EwSkJRV3RDTEZWQlFVTkRMRTlCUVVRc1JVRkJWVU1zVFVGQlZqdEJRVUZCTEZOQlFYTkNReXhYUVVGWFJpeFBRVUZZTEVsQlFYTkNMRWRCUVhaQ0xFZEJRVGhDUXl4TlFVRTVRaXhIUVVGMVF5eEpRVUUxUkR0QlFVRkJMRU5CUVhoQ096dHJRa0ZGWlN4VlFVRkRSU3hMUVVGRUxFVkJRVkZHTEUxQlFWSXNSVUZCYlVJN1FVRkRhRU1zVFVGQlRVY3NVMEZCVXl4RlFVRm1PMEZCUTBFc1RVRkJUVU1zYTBKQlFXdENPMEZCUTNSQ1NpeFpRVUZSTEVOQlJHTTdRVUZGZEVKTExHRkJRVk5NTEZOQlFWTTdRVUZHU1N4SFFVRjRRanRCUVVsQkxFMUJRVWxOTEdWQlFXVXNTMEZCYmtJN08wRkJSVUVzVDBGQlN5eEpRVUZKUXl4SFFVRlVMRWxCUVdkQ1RDeExRVUZvUWl4RlFVRjFRanRCUVVOeVFpeFJRVUZKUVN4TlFVRk5UU3hqUVVGT0xFTkJRWEZDUkN4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6ZENMRlZCUVUxRkxGRkJRVkZRTEUxQlFVMUxMRWRCUVU0c1EwRkJaRHM3UVVGRlFTeGpRVUZSUVN4SFFVRlNPMEZCUTBFc1lVRkJTeXhSUVVGTU8wRkJRMEVzWVVGQlN5eFRRVUZNTzBGQlEwVkVMSGxDUVVGbExFbEJRV1k3UVVGRFFVWXNNRUpCUVdkQ1J5eEhRVUZvUWl4SlFVRjFRbFFzWjBKQlFXZENWeXhMUVVGb1FpeEZRVUYxUWxRc1RVRkJka0lzUTBGQmRrSTdRVUZEUVR0QlFVTkdMR0ZCUVVzc1VVRkJURHRCUVVORlJ5eHBRa0ZCVHl4dFFrRkJVQ3hKUVVFNFFrd3NaMEpCUVdkQ0xFTkJRVU5YTEV0QlFXcENMRVZCUVhkQ1ZDeE5RVUY0UWl4RFFVRTVRanRCUVVOQk8wRkJRMFk3UVVGRFJVY3NhVUpCUVU5SkxFZEJRVkFzU1VGQlkwVXNTMEZCWkR0QlFWWkdPMEZCV1VRN1FVRkRSanM3UVVGRlJDeE5RVUZKU0N4WlFVRktMRVZCUVd0Q08wRkJRMmhDU0N4WFFVRlBMR3RDUVVGUUxFbEJRVFpDUXl4blFrRkJaMEpLTEUxQlFXaENMRWRCUVhsQ0xFZEJRWHBDTEVkQlFTdENTU3huUWtGQlowSkRMRTlCUVRWRk8wRkJRMFE3TzBGQlJVUXNVMEZCVDBZc1RVRkJVRHRCUVVORUxFTWlMQ0ptYVd4bElqb2lZblZwYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0JEYjI1MlpYSjBJSEJsY21ObGJuUmhaMlVnZEc4Z2NHbDRaV3h6WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJsY21ObGJuUmhaMlVnYjJZZ2RHOTBZV3dnYkdWdVozUm9YRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVkc5MFlXd2diR1Z1WjNSb1hHNHFMMXh1WTI5dWMzUWdjR1Z5WTJWdWRGUnZVR2w0Wld4eklEMGdLSEJsY21ObGJuUXNJR3hsYm1kMGFDa2dQVDRnS0hCaGNuTmxSbXh2WVhRb2NHVnlZMlZ1ZENrZ0x5QXhNREFwSUNvZ2JHVnVaM1JvSUNzZ0ozQjRKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hOMFlYUmxMQ0JzWlc1bmRHZ3BJRDArSUh0Y2JpQWdZMjl1YzNRZ2MzUjViR1Z6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJR1JoYzJoQmNuSmhlVk4wZVd4bGN5QTlJSHRjYmlBZ0lDQnNaVzVuZEdnNklEQXNYRzRnSUNBZ2MzQmhZMmx1WnpvZ2JHVnVaM1JvSUNzZ0ozQjRKMXh1SUNCOU8xeHVJQ0JzWlhRZ2FHRnpSR0Z6YUVGeWNtRjVJRDBnWm1Gc2MyVTdYRzVjYmlBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhOMFlYUmxLU0I3WEc0Z0lDQWdhV1lnS0hOMFlYUmxMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdjM1JoZEdWYmEyVjVYVHRjYmx4dUlDQWdJQ0FnYzNkcGRHTm9JQ2hyWlhrcElIdGNiaUFnSUNBZ0lHTmhjMlVnSjJ4bGJtZDBhQ2M2WEc0Z0lDQWdJQ0JqWVhObElDZHpjR0ZqYVc1bkp6cGNiaUFnSUNBZ0lDQWdhR0Z6UkdGemFFRnljbUY1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnWkdGemFFRnljbUY1VTNSNWJHVnpXMnRsZVYwZ1BTQndaWEpqWlc1MFZHOVFhWGhsYkhNb2RtRnNkV1VzSUd4bGJtZDBhQ2s3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdZMkZ6WlNBbmIyWm1jMlYwSnpwY2JpQWdJQ0FnSUNBZ2MzUjViR1Z6V3lkemRISnZhMlV0WkdGemFHOW1abk5sZENkZElEMGdjR1Z5WTJWdWRGUnZVR2w0Wld4ektDMTJZV3gxWlN3Z2JHVnVaM1JvS1R0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0JrWldaaGRXeDBPbHh1SUNBZ0lDQWdJQ0J6ZEhsc1pYTmJhMlY1WFNBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdsbUlDaG9ZWE5FWVhOb1FYSnlZWGtwSUh0Y2JpQWdJQ0J6ZEhsc1pYTmJKM04wY205clpTMWtZWE5vWVhKeVlYa25YU0E5SUdSaGMyaEJjbkpoZVZOMGVXeGxjeTVzWlc1bmRHZ2dLeUFuSUNjZ0t5QmtZWE5vUVhKeVlYbFRkSGxzWlhNdWMzQmhZMmx1Wnp0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCemRIbHNaWE03WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9