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
	exports.svgPath = exports.svg = exports.css = exports.Renderer = exports.value = exports.stagger = exports.track = exports.tween = exports.pointer = exports.physics = exports.parallel = exports.delay = exports.crossFade = exports.composite = exports.chain = exports.blendTweens = exports.Action = exports.valueTypes = exports.transformers = exports.easing = exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
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
	
	var _blendTweens2 = __webpack_require__(39);
	
	var _blendTweens3 = _interopRequireDefault(_blendTweens2);
	
	var _chain2 = __webpack_require__(9);
	
	var _chain3 = _interopRequireDefault(_chain2);
	
	var _composite2 = __webpack_require__(12);
	
	var _composite3 = _interopRequireDefault(_composite2);
	
	var _crossFade2 = __webpack_require__(11);
	
	var _crossFade3 = _interopRequireDefault(_crossFade2);
	
	var _delay2 = __webpack_require__(10);
	
	var _delay3 = _interopRequireDefault(_delay2);
	
	var _parallel2 = __webpack_require__(7);
	
	var _parallel3 = _interopRequireDefault(_parallel2);
	
	var _physics2 = __webpack_require__(6);
	
	var _physics3 = _interopRequireDefault(_physics2);
	
	var _pointer2 = __webpack_require__(8);
	
	var _pointer3 = _interopRequireDefault(_pointer2);
	
	var _tween2 = __webpack_require__(4);
	
	var _tween3 = _interopRequireDefault(_tween2);
	
	var _track2 = __webpack_require__(5);
	
	var _track3 = _interopRequireDefault(_track2);
	
	var _stagger2 = __webpack_require__(40);
	
	var _stagger3 = _interopRequireDefault(_stagger2);
	
	var _value2 = __webpack_require__(28);
	
	var _value3 = _interopRequireDefault(_value2);
	
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
	exports.blendTweens = _blendTweens3.default;
	exports.chain = _chain3.default;
	exports.composite = _composite3.default;
	exports.crossFade = _crossFade3.default;
	exports.delay = _delay3.default;
	exports.parallel = _parallel3.default;
	exports.physics = _physics3.default;
	exports.pointer = _pointer3.default;
	exports.tween = _tween3.default;
	exports.track = _track3.default;
	exports.stagger = _stagger3.default;
	exports.value = _value3.default;
	
	// Renderers
	
	exports.Renderer = _renderers2.default;
	exports.css = _css3.default;
	exports.svg = _svg3.default;
	exports.svgPath = _svgPath3.default;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOlsib25GcmFtZVN0YXJ0Iiwib25GcmFtZVVwZGF0ZSIsIm9uRnJhbWVSZW5kZXIiLCJvbkZyYW1lRW5kIiwiY2FuY2VsT25GcmFtZVN0YXJ0IiwiY2FuY2VsT25GcmFtZVVwZGF0ZSIsImNhbmNlbE9uRnJhbWVSZW5kZXIiLCJjYW5jZWxPbkZyYW1lRW5kIiwidGltZVNpbmNlTGFzdEZyYW1lIiwiY3VycmVudEZyYW1lVGltZXN0YW1wIiwiZWFzaW5nIiwidHJhbnNmb3JtZXJzIiwidmFsdWVUeXBlcyIsIkFjdGlvbiIsImJsZW5kVHdlZW5zIiwiY2hhaW4iLCJjb21wb3NpdGUiLCJjcm9zc0ZhZGUiLCJkZWxheSIsInBhcmFsbGVsIiwicGh5c2ljcyIsInBvaW50ZXIiLCJ0d2VlbiIsInRyYWNrIiwic3RhZ2dlciIsInZhbHVlIiwiUmVuZGVyZXIiLCJjc3MiLCJzdmciLCJzdmdQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3NCQUVFQSxZOzs7Ozs7c0JBQ0FDLGE7Ozs7OztzQkFDQUMsYTs7Ozs7O3NCQUNBQyxVOzs7Ozs7c0JBQ0FDLGtCOzs7Ozs7c0JBQ0FDLG1COzs7Ozs7c0JBQ0FDLG1COzs7Ozs7c0JBQ0FDLGdCOzs7Ozs7c0JBQ0FDLGtCOzs7Ozs7c0JBQ0FDLHFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBR1VDLE07UUFDQUMsWTtRQUNBQyxVOztBQUVaOztRQUNPQyxNO1FBQ0FDLFc7UUFDQUMsSztRQUNBQyxTO1FBQ0FDLFM7UUFDQUMsSztRQUNBQyxRO1FBQ0FDLE87UUFDQUMsTztRQUNBQyxLO1FBQ0FDLEs7UUFDQUMsTztRQUNBQyxLOztBQUVQOztRQUNPQyxRO1FBQ0FDLEc7UUFDQUMsRztRQUNBQyxPIiwiZmlsZSI6InBvcG1vdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZyYW1lc3luYyBzY2hlZHVsZXJzXG5leHBvcnQge1xuICBvbkZyYW1lU3RhcnQsXG4gIG9uRnJhbWVVcGRhdGUsXG4gIG9uRnJhbWVSZW5kZXIsXG4gIG9uRnJhbWVFbmQsXG4gIGNhbmNlbE9uRnJhbWVTdGFydCxcbiAgY2FuY2VsT25GcmFtZVVwZGF0ZSxcbiAgY2FuY2VsT25GcmFtZVJlbmRlcixcbiAgY2FuY2VsT25GcmFtZUVuZCxcbiAgdGltZVNpbmNlTGFzdEZyYW1lLFxuICBjdXJyZW50RnJhbWVUaW1lc3RhbXBcbn0gZnJvbSAnLi9mcmFtZXN5bmMnO1xuXG5leHBvcnQgKiBhcyBlYXNpbmcgZnJvbSAnLi9pbmMvZWFzaW5nJztcbmV4cG9ydCAqIGFzIHRyYW5zZm9ybWVycyBmcm9tICcuL2luYy90cmFuc2Zvcm1lcnMnO1xuZXhwb3J0ICogYXMgdmFsdWVUeXBlcyBmcm9tICcuL2luYy92YWx1ZS10eXBlcyc7XG5cbi8vIEFjdGlvbnNcbmV4cG9ydCBBY3Rpb24gZnJvbSAnLi9hY3Rpb25zJztcbmV4cG9ydCBibGVuZFR3ZWVucyBmcm9tICcuL2FjdGlvbnMvYmxlbmQtdHdlZW5zJztcbmV4cG9ydCBjaGFpbiBmcm9tICcuL2FjdGlvbnMvY2hhaW4nO1xuZXhwb3J0IGNvbXBvc2l0ZSBmcm9tICcuL2FjdGlvbnMvY29tcG9zaXRlJztcbmV4cG9ydCBjcm9zc0ZhZGUgZnJvbSAnLi9hY3Rpb25zL2Nyb3NzLWZhZGUnO1xuZXhwb3J0IGRlbGF5IGZyb20gJy4vYWN0aW9ucy9kZWxheSc7XG5leHBvcnQgcGFyYWxsZWwgZnJvbSAnLi9hY3Rpb25zL3BhcmFsbGVsJztcbmV4cG9ydCBwaHlzaWNzIGZyb20gJy4vYWN0aW9ucy9waHlzaWNzJztcbmV4cG9ydCBwb2ludGVyIGZyb20gJy4vYWN0aW9ucy9wb2ludGVyJztcbmV4cG9ydCB0d2VlbiBmcm9tICcuL2FjdGlvbnMvdHdlZW4nO1xuZXhwb3J0IHRyYWNrIGZyb20gJy4vYWN0aW9ucy90cmFjayc7XG5leHBvcnQgc3RhZ2dlciBmcm9tICcuL2FjdGlvbnMvc3RhZ2dlcic7XG5leHBvcnQgdmFsdWUgZnJvbSAnLi9hY3Rpb25zL3ZhbHVlJztcblxuLy8gUmVuZGVyZXJzXG5leHBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcnMnO1xuZXhwb3J0IGNzcyBmcm9tICcuL3JlbmRlcmVycy9jc3MnO1xuZXhwb3J0IHN2ZyBmcm9tICcuL3JlbmRlcmVycy9zdmcnO1xuZXhwb3J0IHN2Z1BhdGggZnJvbSAnLi9yZW5kZXJlcnMvc3ZnLXBhdGgnO1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvY2FsYy5qcyJdLCJuYW1lcyI6WyJ0b0RlY2ltYWwiLCJudW0iLCJwcmVjaXNpb24iLCJNYXRoIiwicm91bmQiLCJaRVJPX1BPSU5UIiwieCIsInkiLCJ6IiwiZGlzdGFuY2UxRCIsImEiLCJiIiwiYWJzIiwiYW5nbGUiLCJyYWRpYW5zVG9EZWdyZWVzIiwiYXRhbjIiLCJkZWdyZWVzVG9SYWRpYW5zIiwiZGVncmVlcyIsIlBJIiwiZGlsYXRlIiwiZGlsYXRpb24iLCJkaXN0YW5jZSIsInhEZWx0YSIsInlEZWx0YSIsInpEZWx0YSIsInNxcnQiLCJnZXRWYWx1ZUZyb21Qcm9ncmVzcyIsImZyb20iLCJ0byIsInByb2dyZXNzIiwiZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUiLCJ2YWx1ZSIsInBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UiLCJvcmlnaW4iLCJjb3MiLCJzaW4iLCJyYWRpYW5zIiwic21vb3RoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImR1cmF0aW9uIiwic21vb3RoaW5nIiwibWF4Iiwic3BlZWRQZXJGcmFtZSIsInhwcyIsImZyYW1lRHVyYXRpb24iLCJzcGVlZFBlclNlY29uZCIsInZlbG9jaXR5Iiwic3RlcFByb2dyZXNzIiwic3RlcHMiLCJzZWdtZW50IiwidGFyZ2V0IiwicHJvZ3Jlc3NPZlRhcmdldCIsIm1pbiIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOzs7Ozs7O0FBT0EsSUFBTUEsWUFBWSxVQUFDQyxHQUFELEVBQXdCO0FBQUEsTUFBbEJDLFNBQWtCLHVFQUFOLENBQU07O0FBQ3hDQSx1QkFBWSxFQUFaLEVBQWtCQSxTQUFsQjtBQUNBLFNBQU9DLEtBQUtDLEtBQUwsQ0FBV0gsTUFBTUMsU0FBakIsSUFBOEJBLFNBQXJDO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNRyxhQUFhO0FBQ2pCQyxLQUFHLENBRGM7QUFFakJDLEtBQUcsQ0FGYztBQUdqQkMsS0FBRztBQUhjLENBQW5COztBQU1BLElBQU1DLGFB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QUFLdUMsR0FBTCxDQUFTRCxTQUFULEVBQW9CRCxRQUFwQixDQUF6RCxDQUFqRDtBQUFBLENBQWY7O0FBRVA7Ozs7OztBQU1PLElBQU1HLHdDQUFnQixVQUFDQyxHQUFELEVBQU1DLGFBQU47QUFBQSxTQUF5QixrQkFBTUQsR0FBTixDQUFELEdBQWVBLE9BQU8sT0FBT0MsYUFBZCxDQUFmLEdBQThDLENBQXRFO0FBQUEsQ0FBdEI7O0FBRVA7Ozs7OztBQU1PLElBQU1DLDBDQUFpQixVQUFDQyxRQUFELEVBQVdGLGFBQVg7QUFBQSxTQUE2QkUsWUFBWSxPQUFPRixhQUFuQixDQUE3QjtBQUFBLENBQXZCOztBQUVQOzs7Ozs7O0FBT08sSUFBTUcsc0NBQWUsVUFBQ0MsS0FBRCxFQUFRcEIsUUFBUixFQUFxQjtBQUMvQyxNQUFNcUIsVUFBVSxLQUFLRCxRQUFRLENBQWIsQ0FBaEI7QUFDQSxNQUFNRSxTQUFTLElBQUssSUFBSUYsS0FBeEI7QUFDQSxNQUFNRyxtQkFBbUJqRCxLQUFLa0QsR0FBTCxDQUFTeEIsV0FBV3NCLE1BQXBCLEVBQTRCLENBQTVCLENBQXpCOztBQUVBLFNBQU9oRCxLQUFLbUQsS0FBTCxDQUFXRixtQkFBbUJGLE9BQTlCLElBQXlDQSxPQUFoRDtBQUNELENBTk0iLCJmaWxlIjoiY2FsYy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG5jb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gIHByZWNpc2lvbiA9IDEwICoqIHByZWNpc2lvbjtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG5cbmNvbnN0IFpFUk9fUE9JTlQgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHo6IDBcbn07XG5cbmNvbnN0IGRpc3RhbmNlMUQgPSAoYSwgYikgPT4gTWF0aC5hYnMoYSAtIGIpO1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICBcbiAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gIGFyZSBhdCAwLDBcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBhbmdsZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBkZWdyZWVzVG9SYWRpYW5zID0gKGRlZ3JlZXMpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuXG4vKlxuICBEaWxhdGVcbiAgXG4gIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICBcbiAgYSAtLS0tLS0tLS0gYlxuICBcbiAgdG9cbiAgXG4gIGEgLS0tLSBiXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbmV4cG9ydCBjb25zdCBkaWxhdGUgPSAoYSwgYiwgZGlsYXRpb24pID0+IGEgKyAoKGIgLSBhKSAqIGRpbGF0aW9uKTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IGRpc3RhbmNlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiB7XG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKGlzTnVtKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICBjb25zdCB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICBjb25zdCB6RGVsdGEgPSAoaXNOdW0oYS56KSkgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KCh4RGVsdGEgKiogMikgKyAoeURlbHRhICoqIDIpICsgKHpEZWx0YSAqKiAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IChmcm9tLCB0bywgcHJvZ3Jlc3MpID0+ICgtIHByb2dyZXNzICogZnJvbSkgKyAocHJvZ3Jlc3MgKiB0bykgKyBmcm9tO1xuXG4vKlxuICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG5leHBvcnQgY29uc3QgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSAoZnJvbSwgdG8sIHZhbHVlKSA9PiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG5leHBvcnQgY29uc3QgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkgPT4ge1xuICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gIHJldHVybiB7XG4gICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gIH07XG59O1xuXG4vKlxuICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG5leHBvcnQgY29uc3QgcmFkaWFuc1RvRGVncmVlcyA9IChyYWRpYW5zKSA9PiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbmV4cG9ydCBjb25zdCBzbW9vdGggPSAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nID0gMCkgPT4gdG9EZWNpbWFsKG9sZFZhbHVlICsgKGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpKTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlckZyYW1lID0gKHhwcywgZnJhbWVEdXJhdGlvbikgPT4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHN0ZXBQcm9ncmVzcyA9IChzdGVwcywgcHJvZ3Jlc3MpID0+IHtcbiAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgY29uc3QgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpO1xuICBjb25zdCBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuIl19

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
	
	var _easing = __webpack_require__(37);
	
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
	    }, function (v) {
	      return (0, _calc.getProgressFromValue)(0, duration, v);
	    }, clampProgress, ease, function (v) {
	      return (0, _calc.getValueFromProgress)(from, to, v);
	    });
	  };
	
	  Tween.prototype.isActionComplete = function isActionComplete() {
	    return this.elapsed >= this.props.duration;
	  };
	
	  Tween.prototype.getDuration = function getDuration() {
	    return this.props.duration;
	  };
	
	  Tween.prototype.getElapsed = function getElapsed() {
	    return this.elapsed;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3R3ZWVuLmpzIl0sIm5hbWVzIjpbImNsYW1wUHJvZ3Jlc3MiLCJUd2VlbiIsIm9uU3RhcnQiLCJwcm9wcyIsImR1cmF0aW9uIiwiZWFzZSIsImZyb20iLCJ0byIsImVsYXBzZWQiLCJvblVwZGF0ZSIsInYiLCJpc0FjdGlvbkNvbXBsZXRlIiwiZ2V0RHVyYXRpb24iLCJnZXRFbGFwc2VkIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQix5QkFBTSxDQUFOLEVBQVMsQ0FBVCxDQUF0Qjs7SUFFTUMsSzs7Ozs7Ozs7O2tCQVFKQyxPLHNCQUFVO0FBQUE7O0FBQUEsaUJBQzZCLEtBQUtDLEtBRGxDO0FBQUEsUUFDQUMsUUFEQSxVQUNBQSxRQURBO0FBQUEsUUFDVUMsSUFEVixVQUNVQSxJQURWO0FBQUEsUUFDZ0JDLElBRGhCLFVBQ2dCQSxJQURoQjtBQUFBLFFBQ3NCQyxFQUR0QixVQUNzQkEsRUFEdEI7OztBQUdSLFNBQUtDLE9BQUwsR0FBZSxDQUFmOztBQUVBLFNBQUtDLFFBQUwsR0FBZ0Isd0JBQ2Q7QUFBQSxhQUFNLE9BQUtELE9BQUwsSUFBZ0Isb0NBQXRCO0FBQUEsS0FEYyxFQUVkLFVBQUNFLENBQUQ7QUFBQSxhQUFPLGdDQUFxQixDQUFyQixFQUF3Qk4sUUFBeEIsRUFBa0NNLENBQWxDLENBQVA7QUFBQSxLQUZjLEVBR2RWLGFBSGMsRUFJZEssSUFKYyxFQUtkLFVBQUNLLENBQUQ7QUFBQSxhQUFPLGdDQUFxQkosSUFBckIsRUFBMkJDLEVBQTNCLEVBQStCRyxDQUEvQixDQUFQO0FBQUEsS0FMYyxDQUFoQjtBQU9ELEc7O2tCQUVEQyxnQiwrQkFBbUI7QUFDakIsV0FBUSxLQUFLSCxPQUFMLElBQWdCLEtBQUtMLEtBQUwsQ0FBV0MsUUFBbkM7QUFDRCxHOztrQkFFRFEsVywwQkFBYztBQUNaLFdBQU8sS0FBS1QsS0FBTCxDQUFXQyxRQUFsQjtBQUNELEc7O2tCQUVEUyxVLHlCQUFhO0FBQ1gsV0FBTyxLQUFLTCxPQUFaO0FBQ0QsRzs7Ozs7QUFoQ0dQLEssQ0FDR2EsWSxHQUFlO0FBQ3BCVixZQUFVLEdBRFU7QUFFcEJDLHVCQUZvQjtBQUdwQkMsUUFBTSxDQUhjO0FBSXBCQyxNQUFJO0FBSmdCLEM7O2tCQWtDVCxVQUFDSixLQUFEO0FBQUEsU0FBVyxJQUFJRixLQUFKLENBQVVFLEtBQVYsQ0FBWDtBQUFBLEMiLCJmaWxlIjoidHdlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IHRpbWVTaW5jZUxhc3RGcmFtZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBmbG93LCBjbGFtcCB9IGZyb20gJy4uL2luYy90cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgZWFzZU91dCB9IGZyb20gJy4uL2luYy9lYXNpbmcnO1xuXG5jb25zdCBjbGFtcFByb2dyZXNzID0gY2xhbXAoMCwgMSk7XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIGVhc2U6IGVhc2VPdXQsXG4gICAgZnJvbTogMCxcbiAgICB0bzogMVxuICB9O1xuXG4gIG9uU3RhcnQoKSB7XG4gICAgY29uc3QgeyBkdXJhdGlvbiwgZWFzZSwgZnJvbSwgdG8gfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLmVsYXBzZWQgPSAwO1xuXG4gICAgdGhpcy5vblVwZGF0ZSA9IGZsb3coXG4gICAgICAoKSA9PiB0aGlzLmVsYXBzZWQgKz0gdGltZVNpbmNlTGFzdEZyYW1lKCksXG4gICAgICAodikgPT4gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoMCwgZHVyYXRpb24sIHYpLFxuICAgICAgY2xhbXBQcm9ncmVzcyxcbiAgICAgIGVhc2UsXG4gICAgICAodikgPT4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZnJvbSwgdG8sIHYpXG4gICAgKTtcbiAgfVxuXG4gIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuICh0aGlzLmVsYXBzZWQgPj0gdGhpcy5wcm9wcy5kdXJhdGlvbik7XG4gIH1cblxuICBnZXREdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kdXJhdGlvbjtcbiAgfVxuXG4gIGdldEVsYXBzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IG5ldyBUd2Vlbihwcm9wcyk7XG4iXX0=

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
	    var autoStopSpeed = this.props.autoStopSpeed;
	
	    return !this.velocity || Math.abs(this.velocity) <= autoStopSpeed;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BoeXNpY3MuanMiXSwibmFtZXMiOlsiUGh5c2ljcyIsIm9uVXBkYXRlIiwicHJvcHMiLCJhY2NlbGVyYXRpb24iLCJmcmljdGlvbiIsInZlbG9jaXR5Iiwic3ByaW5nIiwidG8iLCJuZXdWZWxvY2l0eSIsImVsYXBzZWQiLCJ1bmRlZmluZWQiLCJkaXN0YW5jZVRvVGFyZ2V0IiwiY3VycmVudCIsImlzQWN0aW9uQ29tcGxldGUiLCJhdXRvU3RvcFNwZWVkIiwiTWF0aCIsImFicyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsTzs7Ozs7Ozs7O29CQVFKQyxRLHVCQUFXO0FBQUEsaUJBQ2dELEtBQUtDLEtBRHJEO0FBQUEsUUFDREMsWUFEQyxVQUNEQSxZQURDO0FBQUEsUUFDYUMsUUFEYixVQUNhQSxRQURiO0FBQUEsUUFDdUJDLFFBRHZCLFVBQ3VCQSxRQUR2QjtBQUFBLFFBQ2lDQyxNQURqQyxVQUNpQ0EsTUFEakM7QUFBQSxRQUN5Q0MsRUFEekMsVUFDeUNBLEVBRHpDOztBQUVULFFBQUlDLGNBQWNILFFBQWxCO0FBQ0EsUUFBTUksVUFBVSxvQ0FBaEI7O0FBRUE7QUFDQSxRQUFJTixZQUFKLEVBQWtCO0FBQ2hCSyxxQkFBZSx5QkFBY0wsWUFBZCxFQUE0Qk0sT0FBNUIsQ0FBZjtBQUNEOztBQUVEO0FBQ0EsUUFBSUwsUUFBSixFQUFjO0FBQ1pJLDhCQUFnQixJQUFJSixRQUFwQixFQUFrQ0ssVUFBVSxHQUE1QztBQUNEOztBQUVELFFBQUlILFVBQVVDLE9BQU9HLFNBQXJCLEVBQWdDO0FBQzlCLFVBQU1DLG1CQUFtQkosS0FBSyxLQUFLSyxPQUFuQztBQUNBSixxQkFBZUcsbUJBQW1CLHlCQUFjTCxNQUFkLEVBQXNCRyxPQUF0QixDQUFsQztBQUNEOztBQUVEO0FBQ0EsU0FBS0csT0FBTCxJQUFnQix5QkFBY0osV0FBZCxFQUEyQkMsT0FBM0IsQ0FBaEI7QUFDQSxTQUFLUCxLQUFMLENBQVdHLFFBQVgsR0FBc0JHLFdBQXRCOztBQUVBLFdBQU8sS0FBS0ksT0FBWjtBQUNELEc7O29CQUVEQyxnQiwrQkFBbUI7QUFBQSxRQUNUQyxhQURTLEdBQ1MsS0FBS1osS0FEZCxDQUNUWSxhQURTOztBQUVqQixXQUFRLENBQUMsS0FBS1QsUUFBTixJQUFrQlUsS0FBS0MsR0FBTCxDQUFTLEtBQUtYLFFBQWQsS0FBMkJTLGFBQXJEO0FBQ0QsRzs7Ozs7QUF0Q0dkLE8sQ0FDR2lCLFksR0FBZTtBQUNwQmQsZ0JBQWMsQ0FETTtBQUVwQkMsWUFBVSxDQUZVO0FBR3BCQyxZQUFVLENBSFU7QUFJcEJTLGlCQUFlO0FBSkssQzs7a0JBd0NULFVBQUNaLEtBQUQ7QUFBQSxTQUFXLElBQUlGLE9BQUosQ0FBWUUsS0FBWixDQUFYO0FBQUEsQyIsImZpbGUiOiJwaHlzaWNzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgeyB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuaW1wb3J0IHsgc3BlZWRQZXJGcmFtZSB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuY2xhc3MgUGh5c2ljcyBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWNjZWxlcmF0aW9uOiAwLFxuICAgIGZyaWN0aW9uOiAwLFxuICAgIHZlbG9jaXR5OiAwLFxuICAgIGF1dG9TdG9wU3BlZWQ6IDAuMDAxXG4gIH1cblxuICBvblVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGFjY2VsZXJhdGlvbiwgZnJpY3Rpb24sIHZlbG9jaXR5LCBzcHJpbmcsIHRvIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBuZXdWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgIGNvbnN0IGVsYXBzZWQgPSB0aW1lU2luY2VMYXN0RnJhbWUoKTtcblxuICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChhY2NlbGVyYXRpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9IHNwZWVkUGVyRnJhbWUoYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBmcmljdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChmcmljdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKj0gKDEgLSBmcmljdGlvbikgKiogKGVsYXBzZWQgLyAxMDApO1xuICAgIH1cblxuICAgIGlmIChzcHJpbmcgJiYgdG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZGlzdGFuY2VUb1RhcmdldCA9IHRvIC0gdGhpcy5jdXJyZW50O1xuICAgICAgbmV3VmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqIHNwZWVkUGVyRnJhbWUoc3ByaW5nLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB2ZWxvY2l0eVxuICAgIHRoaXMuY3VycmVudCArPSBzcGVlZFBlckZyYW1lKG5ld1ZlbG9jaXR5LCBlbGFwc2VkKTtcbiAgICB0aGlzLnByb3BzLnZlbG9jaXR5ID0gbmV3VmVsb2NpdHk7XG5cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICBjb25zdCB7IGF1dG9TdG9wU3BlZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuICghdGhpcy52ZWxvY2l0eSB8fCBNYXRoLmFicyh0aGlzLnZlbG9jaXR5KSA8PSBhdXRvU3RvcFNwZWVkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IG5ldyBQaHlzaWNzKHByb3BzKTsiXX0=

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
	
	var _easing = __webpack_require__(37);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanMiXSwibmFtZXMiOlsiQ3Jvc3NGYWRlIiwib25TdGFydCIsInByb3BzIiwiZHVyYXRpb24iLCJlYXNlIiwiZmFkZXIiLCJ0byIsInN0YXJ0Iiwib25VcGRhdGUiLCJmcm9tIiwiYmFsYW5jZSIsImdldCIsImxhdGVzdEZyb21WYWx1ZSIsImxhdGVzdFRvVmFsdWUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsUzs7Ozs7Ozs7O3NCQUtKQyxPLHNCQUFVO0FBQUEsaUJBQzBCLEtBQUtDLEtBRC9CO0FBQUEsUUFDQUMsUUFEQSxVQUNBQSxRQURBO0FBQUEsUUFDVUMsSUFEVixVQUNVQSxJQURWO0FBQUEsUUFDZ0JDLEtBRGhCLFVBQ2dCQSxLQURoQjs7O0FBR1IsU0FBS0EsS0FBTCxHQUFhQSxTQUFTLHFCQUFNO0FBQzFCQyxVQUFJLENBRHNCO0FBRTFCSCx3QkFGMEI7QUFHMUJDO0FBSDBCLEtBQU4sRUFJbkJHLEtBSm1CLEVBQXRCO0FBS0QsRzs7c0JBRURDLFEsdUJBQVc7QUFBQSxrQkFDWSxLQUFLTixLQURqQjtBQUFBLFFBQ0RPLElBREMsV0FDREEsSUFEQztBQUFBLFFBQ0tILEVBREwsV0FDS0EsRUFETDs7QUFFVCxRQUFNSSxVQUFVLEtBQUtMLEtBQUwsQ0FBV00sR0FBWCxFQUFoQjtBQUNBLFFBQU1DLGtCQUFrQkgsS0FBS0UsR0FBTCxFQUF4QjtBQUNBLFFBQU1FLGdCQUFnQlAsR0FBR0ssR0FBSCxFQUF0QjtBQUNBLFdBQU8sZ0NBQXFCQyxlQUFyQixFQUFzQ0MsYUFBdEMsRUFBcURILE9BQXJELENBQVA7QUFDRCxHOzs7OztBQXJCR1YsUyxDQUNHYyxZLEdBQWU7QUFDcEJWO0FBRG9CLEM7O2tCQXVCVCxVQUFDRixLQUFEO0FBQUEsU0FBVyxJQUFJRixTQUFKLENBQWNFLEtBQWQsQ0FBWDtBQUFBLEMiLCJmaWxlIjoiY3Jvc3MtZmFkZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHR3ZWVuIGZyb20gJy4vdHdlZW4nO1xuaW1wb3J0IHsgbGluZWFyIH0gZnJvbSAnLi4vaW5jL2Vhc2luZyc7XG5pbXBvcnQgeyBnZXRWYWx1ZUZyb21Qcm9ncmVzcyB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuY2xhc3MgQ3Jvc3NGYWRlIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBlYXNlOiBsaW5lYXJcbiAgfVxuXG4gIG9uU3RhcnQoKSB7XG4gICAgY29uc3QgeyBkdXJhdGlvbiwgZWFzZSwgZmFkZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLmZhZGVyID0gZmFkZXIgfHwgdHdlZW4oe1xuICAgICAgdG86IDEsXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGVhc2VcbiAgICB9KS5zdGFydCgpO1xuICB9XG5cbiAgb25VcGRhdGUoKSB7XG4gICAgY29uc3QgeyBmcm9tLCB0byB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBiYWxhbmNlID0gdGhpcy5mYWRlci5nZXQoKTtcbiAgICBjb25zdCBsYXRlc3RGcm9tVmFsdWUgPSBmcm9tLmdldCgpO1xuICAgIGNvbnN0IGxhdGVzdFRvVmFsdWUgPSB0by5nZXQoKTtcbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MobGF0ZXN0RnJvbVZhbHVlLCBsYXRlc3RUb1ZhbHVlLCBiYWxhbmNlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IG5ldyBDcm9zc0ZhZGUocHJvcHMpO1xuIl19

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
	
	  Action.prototype.getProp = function getProp(key) {
	    return this.props[key];
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFjdGlvbiIsInByb3BzIiwidXBkYXRlIiwiYmluZCIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdFByb3BzIiwic2V0UHJvcHMiLCJjdXJyZW50Iiwic3RhcnQiLCJvblN0YXJ0IiwiX29uU3RhcnQiLCJwYXNzaXZlIiwiaXNBY3RpdmUiLCJzdG9wIiwib25TdG9wIiwiX29uU3RvcCIsImNvbXBsZXRlIiwib25Db21wbGV0ZSIsIl9vbkNvbXBsZXRlIiwibGFzdFVwZGF0ZWQiLCJwcmV2Iiwib25VcGRhdGUiLCJmaXJlTGlzdGVuZXJzIiwiaXNBY3Rpb25Db21wbGV0ZSIsImdldCIsImdldFByb3AiLCJrZXkiLCJnZXRWZWxvY2l0eSIsImFkZExpc3RlbmVyIiwibGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJudW1MaXN0ZW5lcnMiLCJpbmRleE9mIiwicHVzaCIsInJlbW92ZUxpc3RlbmVyIiwibGlzdGVuZXJJbmRleCIsInNwbGljZSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0lBRU1BLE07QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQyxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQWQ7O0FBRUEsU0FBS0YsS0FBTCxnQkFDSyxLQUFLRyxXQUFMLENBQWlCQyxZQUR0Qjs7QUFJQSxTQUFLQyxRQUFMLENBQWNMLEtBQWQ7O0FBRUEsU0FBS00sT0FBTCxHQUFlTixNQUFNTSxPQUFOLElBQWlCLENBQWhDO0FBQ0Q7O21CQUVEQyxLLG9CQUFRO0FBQUEsaUJBQ2lDLEtBQUtQLEtBRHRDO0FBQUEsUUFDRVEsT0FERixVQUNFQSxPQURGO0FBQUEsUUFDV0MsUUFEWCxVQUNXQSxRQURYO0FBQUEsUUFDcUJDLE9BRHJCLFVBQ3FCQSxPQURyQjs7O0FBR04sUUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWixXQUFLQyxRQUFMLEdB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RUFBVTtBQUN2QixRQUFNTSxnQkFBaUIsS0FBS0wsU0FBTixHQUFtQixLQUFLQSxTQUFMLENBQWVFLE9BQWYsQ0FBdUJILFFBQXZCLENBQW5CLEdBQXNELENBQUMsQ0FBN0U7QUFDQSxRQUFJTSxrQkFBa0IsQ0FBQyxDQUF2QixFQUEwQjtBQUN4QixXQUFLSixZQUFMO0FBQ0EsV0FBS0QsU0FBTCxDQUFlTSxNQUFmLENBQXNCRCxhQUF0QixFQUFxQyxDQUFyQztBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0QsRzs7bUJBRURiLGEsNEJBQWdCO0FBQ2QsUUFBTWYsVUFBVSxLQUFLaUIsR0FBTCxFQUFoQjtBQUNBLFNBQUssSUFBSWEsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEtBQUtOLFlBQXpCLEVBQXVDTSxHQUF2QyxFQUE0QztBQUMxQyxXQUFLUCxTQUFMLENBQWVPLENBQWYsRUFBa0I5QixPQUFsQixFQUEyQixJQUEzQjtBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0QsRzs7Ozs7a0JBR1lQLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvbkZyYW1lVXBkYXRlLCBjYW5jZWxPbkZyYW1lVXBkYXRlLCB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuaW1wb3J0IHsgc3BlZWRQZXJTZWNvbmQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNsYXNzIEFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzXG4gICAgfTtcblxuICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuXG4gICAgdGhpcy5jdXJyZW50ID0gcHJvcHMuY3VycmVudCB8fCAwO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgY29uc3QgeyBvblN0YXJ0LCBfb25TdGFydCwgcGFzc2l2ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICBvbkZyYW1lVXBkYXRlKHRoaXMudXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB0aGlzLm9uU3RhcnQoKTtcbiAgICBpZiAob25TdGFydCkgb25TdGFydCh0aGlzKTtcbiAgICBpZiAoX29uU3RhcnQpIF9vblN0YXJ0KHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNvbnN0IHsgb25TdG9wLCBfb25TdG9wLCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICBjYW5jZWxPbkZyYW1lVXBkYXRlKHRoaXMudXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0b3ApIHRoaXMub25TdG9wKCk7XG4gICAgaWYgKG9uU3RvcCkgb25TdG9wKHRoaXMpO1xuICAgIGlmIChfb25TdG9wKSBfb25TdG9wKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICBjb25zdCB7IG9uQ29tcGxldGUsIF9vbkNvbXBsZXRlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHRoaXMub25Db21wbGV0ZSkgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUodGhpcyk7XG4gICAgaWYgKF9vbkNvbXBsZXRlKSBfb25Db21wbGV0ZSh0aGlzKTtcblxuICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9IHRpbWVTaW5jZUxhc3RGcmFtZSgpO1xuICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudDtcblxuICAgIGNvbnN0IHsgb25VcGRhdGUsIHBhc3NpdmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodGhpcy5vblVwZGF0ZSkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5vblVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGlmIChvblVwZGF0ZSkgb25VcGRhdGUodGhpcy5jdXJyZW50LCB0aGlzKTtcbiAgICB0aGlzLmZpcmVMaXN0ZW5lcnMoKTtcblxuICAgIGlmICghcGFzc2l2ZSAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICBvbkZyYW1lVXBkYXRlKHRoaXMudXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0FjdGlvbkNvbXBsZXRlICYmIHRoaXMuaXNBY3Rpb25Db21wbGV0ZSgpKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRQcm9wcyhwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICAuLi50aGlzLnByb3BzLFxuICAgICAgLi4ucHJvcHNcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH1cblxuICBnZXRQcm9wKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzW2tleV07XG4gIH1cblxuICBnZXRWZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gc3BlZWRQZXJTZWNvbmQodGhpcy5wcmV2IC0gdGhpcy5jdXJyZW50LCB0aGlzLmxhc3RVcGRhdGVkKTtcbiAgfVxuXG4gIGFkZExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycyB8fCBbXTtcbiAgICB0aGlzLm51bUxpc3RlbmVycyA9IHRoaXMubnVtTGlzdGVuZXJzIHx8IDA7XG4gICAgaWYgKHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpID09PSAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycysrO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgY29uc3QgbGlzdGVuZXJJbmRleCA9ICh0aGlzLmxpc3RlbmVycykgPyB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA6IC0xO1xuICAgIGlmIChsaXN0ZW5lckluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMtLTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmaXJlTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1MaXN0ZW5lcnM7IGkrKykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbaV0oY3VycmVudCwgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbjtcbiJdfQ==

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
	
	var _valueTypes = __webpack_require__(36);
	
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
	
	  // Shadows
	  textShadow: _valueTypes.shadow,
	  boxShadow: _valueTypes.shadow,
	
	  // Transform properties
	  rotate: _valueTypes.angle,
	  rotateX: _valueTypes.angle,
	  rotateY: _valueTypes.angle,
	  rotateZ: _valueTypes.angle,
	  scale: _valueTypes.scale,
	  scaleX: _valueTypes.scale,
	  scaleY: _valueTypes.scale,
	  scaleZ: _valueTypes.scale,
	  skewX: _valueTypes.angle,
	  skewY: _valueTypes.angle,
	  distance: _valueTypes.px,
	  x: _valueTypes.px,
	  y: _valueTypes.px,
	  z: _valueTypes.px,
	  perspective: _valueTypes.px,
	  opacity: _valueTypes.alpha
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwib3V0bGluZUNvbG9yIiwiZmlsbCIsInN0cm9rZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyVG9wQ29sb3IiLCJib3JkZXJSaWdodENvbG9yIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJib3JkZXJMZWZ0Q29sb3IiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImhlaWdodCIsInRleHRTaGFkb3ciLCJib3hTaGFkb3ciLCJyb3RhdGUiLCJyb3RhdGVYIiwicm90YXRlWSIsInJvdGF0ZVoiLCJzY2FsZSIsInNjYWxlWCIsInNjYWxlWSIsInNjYWxlWiIsInNrZXdYIiwic2tld1kiLCJkaXN0YW5jZSIsIngiLCJ5IiwieiIsInBlcnNwZWN0aXZlIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztrQkFDZTtBQUNiO0FBQ0FBLDBCQUZhO0FBR2JDLG9DQUhhO0FBSWJDLGlDQUphO0FBS2JDLHlCQUxhO0FBTWJDLDJCQU5hOztBQVFiO0FBQ0FDLGdDQVRhO0FBVWJDLG1DQVZhO0FBV2JDLHFDQVhhO0FBWWJDLHNDQVphO0FBYWJDLG9DQWJhO0FBY2JDLDhCQWRhOztBQWdCYjtBQUNBQyx1QkFqQmE7QUFrQmJDLHdCQWxCYTs7QUFvQmI7QUFDQUMsZ0NBckJhO0FBc0JiQywrQkF0QmE7O0FBd0JiO0FBQ0FDLDJCQXpCYTtBQTBCYkMsNEJBMUJhO0FBMkJiQyw0QkEzQmE7QUE0QmJDLDRCQTVCYTtBQTZCYkMsMEJBN0JhO0FBOEJiQywyQkE5QmE7QUErQmJDLDJCQS9CYTtBQWdDYkMsMkJBaENhO0FBaUNiQywwQkFqQ2E7QUFrQ2JDLDBCQWxDYTtBQW1DYkMsMEJBbkNhO0FBb0NiQyxtQkFwQ2E7QUFxQ2JDLG1CQXJDYTtBQXNDYkMsbUJBdENhO0FBdUNiQyw2QkF2Q2E7QUF3Q2JDO0FBeENhLEMiLCJmaWxlIjoidmFsdWUtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmdsZSwgYWxwaGEsIGNvbG9yLCBzY2FsZSwgc2hhZG93LCBweCB9IGZyb20gJy4uLy4uL2luYy92YWx1ZS10eXBlcyc7IFxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBDb2xvciBwcm9wc1xuICBjb2xvcjogY29sb3IsXG4gIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gIG91dGxpbmVDb2xvcjogY29sb3IsXG4gIGZpbGw6IGNvbG9yLFxuICBzdHJva2U6IGNvbG9yLFxuXG4gIC8vIEJvcmRlciBwcm9wc1xuICBib3JkZXJDb2xvcjogY29sb3IsXG4gIGJvcmRlclRvcENvbG9yOiBjb2xvcixcbiAgYm9yZGVyUmlnaHRDb2xvcjogY29sb3IsXG4gIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvcixcbiAgYm9yZGVyTGVmdENvbG9yOiBjb2xvcixcbiAgYm9yZGVyUmFkaXVzOiBweCxcblxuICAvLyBQb3NpdGlvbmluZ1xuICB3aWR0aDogcHgsXG4gIGhlaWdodDogcHgsXG5cbiAgLy8gU2hhZG93c1xuICB0ZXh0U2hhZG93OiBzaGFkb3csXG4gIGJveFNoYWRvdzogc2hhZG93LCAgIFxuXG4gIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gIHJvdGF0ZTogYW5nbGUsXG4gIHJvdGF0ZVg6IGFuZ2xlLFxuICByb3RhdGVZOiBhbmdsZSxcbiAgcm90YXRlWjogYW5nbGUsXG4gIHNjYWxlOiBzY2FsZSxcbiAgc2NhbGVYOiBzY2FsZSxcbiAgc2NhbGVZOiBzY2FsZSxcbiAgc2NhbGVaOiBzY2FsZSxcbiAgc2tld1g6IGFuZ2xlLFxuICBza2V3WTogYW5nbGUsXG4gIGRpc3RhbmNlOiBweCxcbiAgeDogcHgsXG4gIHk6IHB4LFxuICB6OiBweCxcbiAgcGVyc3BlY3RpdmU6IHB4LFxuICBvcGFjaXR5OiBhbHBoYVxufTtcbiJdfQ==

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
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.steps = exports.clamp = exports.clampOver = exports.clampUnder = exports.interpolate = exports.flow = exports.appendUnit = undefined;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbImFwcGVuZFVuaXQiLCJ1bml0IiwidiIsImZsb3ciLCJ0cmFuc2Zvcm1lcnMiLCJudW1UcmFuc2Zvcm1lcnMiLCJsZW5ndGgiLCJpIiwiYWNjIiwiYXJncyIsImludGVycG9sYXRlIiwiaW5wdXQiLCJvdXRwdXQiLCJyYW5nZUVhc2luZyIsInJhbmdlTGVuZ3RoIiwiZmluYWxJbmRleCIsInByb2dyZXNzSW5SYW5nZSIsImVhc2VkUHJvZ3Jlc3MiLCJjbGFtcFVuZGVyIiwibWF4IiwiTWF0aCIsIm1pbiIsImNsYW1wT3ZlciIsImNsYW1wIiwic3RlcHMiLCJwcm9ncmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQTs7Ozs7OztBQU9PLElBQU1BLGtDQUFhLFVBQUNDLElBQUQ7QUFBQSxTQUFVLFVBQUNDLENBQUQ7QUFBQSxnQkFBVUEsQ0FBVixHQUFjRCxJQUFkO0FBQUEsR0FBVjtBQUFBLENBQW5COztBQUVQOzs7Ozs7O0FBT08sSUFBTUUsc0JBQU8sWUFBcUI7QUFBQSxvQ0FBakJDLFlBQWlCO0FBQWpCQSxnQkFBaUI7QUFBQTs7QUFDdkMsTUFBTUMsa0JBQWtCRCxhQUFhRSxNQUFyQztBQUNBLE1BQUlDLElBQUksQ0FBUjs7QUFFQSxTQUFPLFVBQUNDLEdBQUQsRUFBa0I7QUFBQSx1Q0FBVEMsSUFBUztBQUFUQSxVQUFTO0FBQUE7O0FBQ3ZCLFFBQUlQLElBQUlNLEdBQVI7QUFDQSxTQUFLRCxJQUFJLENBQVQsRUFBWUEsSUFBSUYsZUFBaEIsRUFBaUNFLEdBQWpDLEVBQXNDO0FBQ3BDTCxVQUFJRSxhQUFhRyxDQUFiLHVCQUFnQkwsQ0FBaEIsU0FBc0JPLElBQXRCLEVBQUo7QUFDRDs7QUFFRCxXQUFPUCxDQUFQO0FBQ0QsR0FQRDtBQVFELENBWk07O0FBY0EsSUFBTVEsb0NBQWMsVUFBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQWdCQyxXQUFoQixFQUFnQztBQUN6RCxNQUFNQyxjQUFjSCxNQUFNTCxNQUExQjtBQUNBLE1BQU1TLGFBQWFELGNBQWMsQ0FBakM7O0FBRUEsU0FBTyxVQUFDWixDQUFELEVBQU87QUFDWjtBQUNBLFFBQUlBLEtBQUtTLE1BQU0sQ0FBTixDQUFULEVBQW1CO0FBQ2pCLGFBQU9DLE9BQU8sQ0FBUCxDQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJVixLQUFLUyxNQUFNSSxVQUFOLENBQVQsRUFBNEI7QUFDMUIsYUFBT0gsT0FBT0csVUFBUCxDQUFQO0FBQ0Q7O0FBRUQsUUFBSVIsSUFBSSxDQUFSOztBQUVBO0FBQ0EsV0FBT0EsSUFBSU8sV0FBWCxFQUF3QlAsR0FBeEIsRUFBNkI7QUFDM0IsVUFBSUksTUFBTUosQ0FBTixJQUFXTCxDQUFYLElBQWdCSyxNQUFNUSxVQUExQixFQUFzQztBQUNwQztBQUNEO0FBQ0Y7O0FBRUQsUUFBTUMsa0JBQWtCLGdDQUFxQkwsTUFBTUosSUFBSSxDQUFWLENBQXJCLEVBQW1DSSxNQUFNSixDQUFOLENBQW5DLEVBQTZDTCxDQUE3QyxDQUF4QjtBQUNBLFFBQU1lLGdCQUFpQkosV0FBRCxHQUFnQkEsWUFBWU4sQ0FBWixFQUFlUyxlQUFmLENBQWhCLEdBQWtEQSxlQUF4RTtBQUNBLFdBQU8sZ0NBQXFCSixPQUFPTCxJQUFJLENBQVgsQ0FBckIsRUFBb0NLLE9BQU9MLENBQVAsQ0FBcEMsRUFBK0NVLGFBQS9DLENBQVA7QUFDRCxHQXZCRDtBQXdCRCxDQTVCTTs7QUE4QlA7Ozs7Ozs7QUFPTyxJQUFNQyxrQ0FBYSxVQUFDQyxHQUFEO0FBQUEsU0FBUyxVQUFDakIsQ0FBRDtBQUFBLFdBQU9rQixLQUFLQyxHQUFMLENBQVNuQixDQUFULEVBQVlpQixHQUFaLENBQVA7QUFBQSxHQUFUO0FBQUEsQ0FBbkI7QUFDQSxJQUFNRyxnQ0FBWSxVQUFDRCxHQUFEO0FBQUEsU0FBUyxVQUFDbkIsQ0FBRDtBQUFBLFdBQU9rQixLQUFLRCxHQUFMLENBQVNqQixDQUFULEVBQVltQixHQUFaLENBQVA7QUFBQSxHQUFUO0FBQUEsQ0FBbEI7QUFDQSxJQUFNRSx3QkFBUSxVQUFDRixHQUFELEVBQU1GLEdBQU47QUFBQSxTQUFjaEIsS0FBS21CLFVBQVVELEdBQVYsQ0FBTCxFQUFxQkgsV0FBV0MsR0FBWCxDQUFyQixDQUFkO0FBQUEsQ0FBZDs7QUFFQSxJQUFNSyx3QkFBUSxVQUFDQSxLQUFELEVBQVFILEdBQVIsRUFBYUYsR0FBYjtBQUFBLFNBQXFCLFVBQUNqQixDQUFELEVBQU87QUFDL0MsUUFBTXVCLFdBQVcsZ0NBQXFCSixHQUFyQixFQUEwQkYsR0FBMUIsRUFBK0JqQixDQUEvQixDQUFqQjtBQUNBLFdBQU8sd0JBQWFzQixLQUFiLEVBQW9CQyxRQUFwQixDQUFQO0FBQ0QsR0FIb0I7QUFBQSxDQUFkIiwiZmlsZSI6InRyYW5zZm9ybWVycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcywgc3RlcFByb2dyZXNzIH0gZnJvbSAnLi9jYWxjJztcblxuLyoqXG4gKiBBcHBlbmQgVW5pdFxuICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYXBwZW5kXG4gKiBhcHBlbmRVbml0KCdweCcsIDIwKSAtPiAnMjBweCdcbiAqIEBwYXJhbSAge3N0cmluZ30gdW5pdClcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGVuZFVuaXQgPSAodW5pdCkgPT4gKHYpID0+IGAke3Z9JHt1bml0fWA7XG5cbi8qKlxuICogRmxvd1xuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogZmxvdyhtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgZmxvdyA9ICguLi50cmFuc2Zvcm1lcnMpID0+IHtcbiAgY29uc3QgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIHJldHVybiAoYWNjLCAuLi5hcmdzKSA9PiB7XG4gICAgbGV0IHYgPSBhY2M7XG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldKHYsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGludGVycG9sYXRlID0gKGlucHV0LCBvdXRwdXQsIHJhbmdlRWFzaW5nKSA9PiB7XG4gIGNvbnN0IHJhbmdlTGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICBjb25zdCBmaW5hbEluZGV4ID0gcmFuZ2VMZW5ndGggLSAxO1xuXG4gIHJldHVybiAodikgPT4ge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgbGV0IGkgPSAxO1xuXG4gICAgLy8gRmluZCBpbmRleCBvZiByYW5nZSBzdGFydFxuICAgIGZvciAoOyBpIDwgcmFuZ2VMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlucHV0W2ldID4gdiB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByb2dyZXNzSW5SYW5nZSA9IGdldFByb2dyZXNzRnJvbVZhbHVlKGlucHV0W2kgLSAxXSwgaW5wdXRbaV0sIHYpO1xuICAgIGNvbnN0IGVhc2VkUHJvZ3Jlc3MgPSAocmFuZ2VFYXNpbmcpID8gcmFuZ2VFYXNpbmdbaV0ocHJvZ3Jlc3NJblJhbmdlKSA6IHByb2dyZXNzSW5SYW5nZTtcbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3Mob3V0cHV0W2kgLSAxXSwgb3V0cHV0W2ldLCBlYXNlZFByb2dyZXNzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogQ2xhbXAgdmFsdWUgYmV0d2VlblxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXN0cmljdCBhIGdpdmVuIHZhbHVlIGJldHdlZW4gYG1pbmAgYW5kIGBtYXhgXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pblxuICogQHBhcmFtICB7bnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGNsYW1wVW5kZXIgPSAobWF4KSA9PiAodikgPT4gTWF0aC5taW4odiwgbWF4KTtcbmV4cG9ydCBjb25zdCBjbGFtcE92ZXIgPSAobWluKSA9PiAodikgPT4gTWF0aC5tYXgodiwgbWluKTtcbmV4cG9ydCBjb25zdCBjbGFtcCA9IChtaW4sIG1heCkgPT4gZmxvdyhjbGFtcE92ZXIobWluKSwgY2xhbXBVbmRlcihtYXgpKTtcblxuZXhwb3J0IGNvbnN0IHN0ZXBzID0gKHN0ZXBzLCBtaW4sIG1heCkgPT4gKHYpID0+IHtcbiAgY29uc3QgcHJvZ3Jlc3MgPSBnZXRQcm9ncmVzc0Zyb21WYWx1ZShtaW4sIG1heCwgdik7XG4gIHJldHVybiBzdGVwUHJvZ3Jlc3Moc3RlcHMsIHByb2dyZXNzKTtcbn07XG5cbiJdfQ==

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
	
	var _valueTypes = __webpack_require__(36);
	
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

/***/ },
/* 38 */,
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(15);
	
	var _2 = _interopRequireDefault(_);
	
	var _calc = __webpack_require__(2);
	
	var _transformers = __webpack_require__(27);
	
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
	
	  TweenBlend.prototype.onUpdate = function onUpdate() {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyJdLCJuYW1lcyI6WyJjbGFtcFByb2dyZXNzIiwiY2FsY1ZhbHVlQXRUaW1lIiwiZnJvbSIsInRvIiwiZHVyYXRpb24iLCJlbGFwc2VkIiwiZWFzZSIsInByb2dyZXNzQXRUaW1lIiwiVHdlZW5CbGVuZCIsIm9uU3RhcnQiLCJwcm9wcyIsImFjY3VyYWN5IiwiYSIsImIiLCJhRHVyYXRpb24iLCJnZXREdXJhdGlvbiIsImJEdXJhdGlvbiIsIk1hdGgiLCJtaW4iLCJnZXRFbGFwc2VkIiwiYUVhc2UiLCJnZXRQcm9wIiwiYkVhc2UiLCJhRnJvbSIsImJGcm9tIiwiYVRvIiwiYlRvIiwiYlZhbHVlQXRCbGVuZENvbXBsZXRlIiwiYlN0YXJ0c0hpZ2hlclRoYW5BIiwiZ2V0IiwiYmxlbmRQb2ludHMiLCJ0aW1lc3RlcCIsImZvdW5kUDEiLCJmb3VuZFAyIiwiaSIsInRvdGFsVGltZSIsImFWYWx1ZUF0VGltZSIsImJWYWx1ZUF0VGltZSIsImhhc0ludGVyc2VjdGVkIiwic3BsaWNlIiwiaGFzSW50ZXJzZWN0ZWRCIiwic3RhcnQiLCJvblVwZGF0ZSIsInByb2dyZXNzIiwiYVAiLCJiUCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IseUJBQU0sQ0FBTixFQUFTLENBQVQsQ0FBdEI7O0FBRUEsU0FBU0MsZUFBVCxDQUF5QkMsSUFBekIsRUFBK0JDLEVBQS9CLEVBQW1DQyxRQUFuQyxFQUE2Q0MsT0FBN0MsRUFBc0RDLElBQXRELEVBQTREO0FBQzFELE1BQU1DLGlCQUFpQkQsS0FBS04sY0FBYyxnQ0FBcUIsQ0FBckIsRUFBd0JJLFFBQXhCLEVBQWtDQyxPQUFsQyxDQUFkLENBQUwsQ0FBdkI7QUFDQSxTQUFPLGdDQUFxQkgsSUFBckIsRUFBMkJDLEVBQTNCLEVBQStCSSxjQUEvQixDQUFQO0FBQ0Q7O0lBRUtDLFU7Ozs7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S2hDLEtBRGpCO0FBQUEsUUFDRFIsSUFEQyxXQUNEQSxJQURDO0FBQUEsUUFDS0MsRUFETCxXQUNLQSxFQURMOztBQUVULFFBQU1TLElBQUlWLElBQVY7QUFDQSxRQUFNVyxJQUFJVixFQUFWOztBQUVBLFFBQU13QyxXQUFXM0MsY0FBYyxnQ0FBcUIsS0FBSzhCLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBckIsRUFBNkMsS0FBS0EsV0FBTCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUE3QyxFQUFxRWxCLEVBQUVPLFVBQUYsRUFBckUsQ0FBZCxDQUFqQjtBQUNBLFFBQUl3QixZQUFZLENBQWhCLEVBQW1CO0FBQ2pCLGFBQU85QixFQUFFZ0IsR0FBRixFQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBTWUsS0FBSyxnQ0FBcUIsS0FBS2QsV0FBTCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUFyQixFQUE2QyxLQUFLQSxXQUFMLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQTdDLEVBQXFFYSxRQUFyRSxDQUFYO0FBQ0EsVUFBTUUsS0FBSyxnQ0FBcUIsS0FBS2YsV0FBTCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUFyQixFQUE2QyxLQUFLQSxXQUFMLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQTdDLEVBQXFFYSxRQUFyRSxDQUFYO0FBQ0EsYUFBTyxnQ0FBcUJDLEVBQXJCLEVBQXlCQyxFQUF6QixFQUE2QkYsUUFBN0IsQ0FBUDtBQUNEO0FBQ0YsRzs7Ozs7QUFyRkduQyxVLENBQ0dzQyxZLEdBQWU7QUFDcEJuQyxZQUFVO0FBRFUsQzs7a0JBdUZULFVBQUNELEtBQUQ7QUFBQSxTQUFXLElBQUlGLFVBQUosQ0FBZUUsS0FBZixDQUFYO0FBQUEsQyIsImZpbGUiOiJibGVuZC10d2VlbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGNsYW1wIH0gZnJvbSAnLi4vaW5jL3RyYW5zZm9ybWVycyc7XG5cbmNvbnN0IGNsYW1wUHJvZ3Jlc3MgPSBjbGFtcCgwLCAxKTtcblxuZnVuY3Rpb24gY2FsY1ZhbHVlQXRUaW1lKGZyb20sIHRvLCBkdXJhdGlvbiwgZWxhcHNlZCwgZWFzZSkge1xuICBjb25zdCBwcm9ncmVzc0F0VGltZSA9IGVhc2UoY2xhbXBQcm9ncmVzcyhnZXRQcm9ncmVzc0Zyb21WYWx1ZSgwLCBkdXJhdGlvbiwgZWxhcHNlZCkpKTtcbiAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGZyb20sIHRvLCBwcm9ncmVzc0F0VGltZSk7XG59XG5cbmNsYXNzIFR3ZWVuQmxlbmQgZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFjY3VyYWN5OiA2MFxuICB9O1xuXG4gIG9uU3RhcnQoKSB7XG4gICAgY29uc3QgeyBmcm9tLCB0bywgZHVyYXRpb24sIGFjY3VyYWN5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGEgPSBmcm9tO1xuICAgIGNvbnN0IGIgPSB0bztcbiAgICBjb25zdCBhRHVyYXRpb24gPSBhLmdldER1cmF0aW9uKCk7XG4gICAgY29uc3QgYkR1cmF0aW9uID0gYi5nZXREdXJhdGlvbigpO1xuXG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uIHx8IE1hdGgubWluKFxuICAgICAgYUR1cmF0aW9uIC0gYS5nZXRFbGFwc2VkKCksXG4gICAgICBiRHVyYXRpb25cbiAgICApO1xuXG4gICAgY29uc3QgYUVhc2UgPSBhLmdldFByb3AoJ2Vhc2UnKTtcbiAgICBjb25zdCBiRWFzZSA9IGIuZ2V0UHJvcCgnZWFzZScpO1xuICAgIGNvbnN0IGFGcm9tID0gYS5nZXRQcm9wKCdmcm9tJyk7XG4gICAgY29uc3QgYkZyb20gPSBiLmdldFByb3AoJ2Zyb20nKTtcbiAgICBjb25zdCBhVG8gPSBhLmdldFByb3AoJ3RvJyk7XG4gICAgY29uc3QgYlRvID0gYi5nZXRQcm9wKCd0bycpO1xuICAgIGNvbnN0IGJWYWx1ZUF0QmxlbmRDb21wbGV0ZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIHRoaXMuZHVyYXRpb24sIGJFYXNlKTtcbiAgICBjb25zdCBiU3RhcnRzSGlnaGVyVGhhbkEgPSBiRnJvbSA+IGEuZ2V0KCk7XG5cbiAgICB0aGlzLmJsZW5kUG9pbnRzID0gW1xuICAgICAgWzAsIGEuZ2V0KCldLFxuICAgICAgW3RoaXMuZHVyYXRpb24sIGJWYWx1ZUF0QmxlbmRDb21wbGV0ZV1cbiAgICBdO1xuXG4gICAgLy8gRmluZCB0d2VlbiBpbnRlcnNlY3Rpb25cbiAgICBjb25zdCB0aW1lc3RlcCA9IHRoaXMuZHVyYXRpb24gLyBhY2N1cmFjeTtcblxuICAgIGxldCBmb3VuZFAxID0gZmFsc2U7XG4gICAgbGV0IGZvdW5kUDIgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjdXJhY3k7IGkrKykge1xuICAgICAgY29uc3QgdG90YWxUaW1lID0gaSAqIHRpbWVzdGVwO1xuXG4gICAgICBjb25zdCBhVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYUZyb20sIGFUbywgYUR1cmF0aW9uLCBhLmVsYXBzZWQgKyB0b3RhbFRpbWUsIGFFYXNlKTtcbiAgICAgIGNvbnN0IGJWYWx1ZUF0VGltZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIGIuZWxhcHNlZCArIHRvdGFsVGltZSwgYkVhc2UpO1xuXG4gICAgICBjb25zdCBoYXNJbnRlcnNlY3RlZCA9IChcbiAgICAgICAgKGJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPCBiVmFsdWVBdFRpbWUpIHx8XG4gICAgICAgICghYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA+IGJWYWx1ZUF0VGltZSlcbiAgICAgICk7XG5cbiAgICAgIGlmICghZm91bmRQMSAmJiBoYXNJbnRlcnNlY3RlZCkge1xuICAgICAgICB0aGlzLmJsZW5kUG9pbnRzLnNwbGljZSgwLCAxLCBbdG90YWxUaW1lLCBiVmFsdWVBdFRpbWVdKTtcbiAgICAgICAgZm91bmRQMSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE8gZ28gYmFjayB0aHJvdWdoIGFuZCBjb21tZW50XG4gICAgICBjb25zdCBoYXNJbnRlcnNlY3RlZEIgPSAoXG4gICAgICAgIChiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lIDwgYlZhbHVlQXRUaW1lKSB8fFxuICAgICAgICAoIWJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPiBiVmFsdWVBdFRpbWUpXG4gICAgICApO1xuXG4gICAgICBpZiAoZm91bmRQMSAmJiBoYXNJbnRlcnNlY3RlZEIpIHtcbiAgICAgICAgdGhpcy5ibGVuZFBvaW50c1syXSA9IFt0b3RhbFRpbWUsIGJWYWx1ZUF0VGltZV07XG4gICAgICAgIGZvdW5kUDIgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm91bmRQMikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG8uc3RhcnQoKTtcbiAgfVxuXG4gIG9uVXBkYXRlKCkge1xuICAgIGNvbnN0IHsgZnJvbSwgdG8gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYSA9IGZyb207XG4gICAgY29uc3QgYiA9IHRvO1xuXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBjbGFtcFByb2dyZXNzKGdldFByb2dyZXNzRnJvbVZhbHVlKHRoaXMuYmxlbmRQb2ludHNbMF1bMF0sIHRoaXMuYmxlbmRQb2ludHNbMl1bMF0sIGEuZ2V0RWxhcHNlZCgpKSk7XG4gICAgaWYgKHByb2dyZXNzID49IDEpIHtcbiAgICAgIHJldHVybiBiLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhUCA9IGdldFZhbHVlRnJvbVByb2dyZXNzKHRoaXMuYmxlbmRQb2ludHNbMF1bMV0sIHRoaXMuYmxlbmRQb2ludHNbMV1bMV0sIHByb2dyZXNzKTtcbiAgICAgIGNvbnN0IGJQID0gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3ModGhpcy5ibGVuZFBvaW50c1sxXVsxXSwgdGhpcy5ibGVuZFBvaW50c1syXVsxXSwgcHJvZ3Jlc3MpO1xuICAgICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGFQLCBiUCwgcHJvZ3Jlc3MpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IG5ldyBUd2VlbkJsZW5kKHByb3BzKTtcbiJdfQ==

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _chain = __webpack_require__(9);
	
	var _chain2 = _interopRequireDefault(_chain);
	
	var _parallel = __webpack_require__(7);
	
	var _parallel2 = _interopRequireDefault(_parallel);
	
	var _delay = __webpack_require__(10);
	
	var _delay2 = _interopRequireDefault(_delay);
	
	var _utils = __webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates a new parallel Action composed of chained
	 * delay and actions. Interval can be either a number
	 * to multiply by `i` or a function that will be provided `i`
	 * @param  {array} actions
	 * @param  {function | number} interval
	 * @return {Action}
	 */
	exports.default = function (actions, interval) {
	  var intervalIsFunction = (0, _utils.isFunc)(interval);
	
	  return (0, _parallel2.default)(actions.map(function (action, i) {
	    var timeToDelay = intervalIsFunction ? interval(i) : i * interval;
	    return (0, _chain2.default)([(0, _delay2.default)(timeToDelay), action]);
	  }));
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3N0YWdnZXIuanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsImludGVydmFsIiwiaW50ZXJ2YWxJc0Z1bmN0aW9uIiwibWFwIiwiYWN0aW9uIiwiaSIsInRpbWVUb0RlbGF5Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7a0JBUWUsVUFBQ0EsT0FBRCxFQUFVQyxRQUFWLEVBQXVCO0FBQ3BDLE1BQU1DLHFCQUFxQixtQkFBT0QsUUFBUCxDQUEzQjs7QUFFQSxTQUFPLHdCQUFTRCxRQUFRRyxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDekMsUUFBTUMsY0FBZUosa0JBQUQsR0FBdUJELFNBQVNJLENBQVQsQ0FBdkIsR0FBcUNBLElBQUlKLFFBQTdEO0FBQ0EsV0FBTyxxQkFBTSxDQUNYLHFCQUFNSyxXQUFOLENBRFcsRUFFWEYsTUFGVyxDQUFOLENBQVA7QUFJRCxHQU5lLENBQVQsQ0FBUDtBQU9ELEMiLCJmaWxlIjoic3RhZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGFpbiBmcm9tICcuL2NoYWluJztcbmltcG9ydCBwYXJhbGxlbCBmcm9tICcuL3BhcmFsbGVsJztcbmltcG9ydCBkZWxheSBmcm9tICcuL2RlbGF5JztcbmltcG9ydCB7IGlzRnVuYyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBwYXJhbGxlbCBBY3Rpb24gY29tcG9zZWQgb2YgY2hhaW5lZFxuICogZGVsYXkgYW5kIGFjdGlvbnMuIEludGVydmFsIGNhbiBiZSBlaXRoZXIgYSBudW1iZXJcbiAqIHRvIG11bHRpcGx5IGJ5IGBpYCBvciBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBwcm92aWRlZCBgaWBcbiAqIEBwYXJhbSAge2FycmF5fSBhY3Rpb25zXG4gKiBAcGFyYW0gIHtmdW5jdGlvbiB8IG51bWJlcn0gaW50ZXJ2YWxcbiAqIEByZXR1cm4ge0FjdGlvbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGFjdGlvbnMsIGludGVydmFsKSA9PiB7XG4gIGNvbnN0IGludGVydmFsSXNGdW5jdGlvbiA9IGlzRnVuYyhpbnRlcnZhbCk7XG5cbiAgcmV0dXJuIHBhcmFsbGVsKGFjdGlvbnMubWFwKChhY3Rpb24sIGkpID0+IHtcbiAgICBjb25zdCB0aW1lVG9EZWxheSA9IChpbnRlcnZhbElzRnVuY3Rpb24pID8gaW50ZXJ2YWwoaSkgOiBpICogaW50ZXJ2YWw7XG4gICAgcmV0dXJuIGNoYWluKFtcbiAgICAgIGRlbGF5KHRpbWVUb0RlbGF5KSxcbiAgICAgIGFjdGlvblxuICAgIF0pO1xuICB9KSk7XG59O1xuIl19

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjVlNWFlZDY1Mjk4YTUwZWUyMDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90cmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BhcmFsbGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY2hhaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZGVsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9vbi1uZXh0LWZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvdmFsdWUtdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90cmFuc2Zvcm1lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy92YWx1ZS10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdmFsdWUtdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9lYXNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvYmxlbmQtdHdlZW5zLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3N0YWdnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNRO0FBQ0EsNENBQTJDLG1aOzs7Ozs7QUNUM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNRO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywydUY7Ozs7OztBQ2xMM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLHV5Vjs7Ozs7OztBQ2pOM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FB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QUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQztBQUNELDRDQUEyQyx1aUY7Ozs7OztBQ3hFM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LCtxRCIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGY1ZTVhZWQ2NTI5OGE1MGVlMjA1XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3BvcG1vdGlvbiA9IHJlcXVpcmUoJy4vcG9wbW90aW9uJyk7XG5cbnZhciBwb3Btb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcG9wbW90aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxud2luZG93LnBvcG1vdGlvbiA9IHBvcG1vdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bmJHOWlZV3d1YW5NaVhTd2libUZ0WlhNaU9sc2ljRzl3Ylc5MGFXOXVJaXdpZDJsdVpHOTNJbDBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCT3p0SlFVRlpRU3hUT3pzN08wRkJRMXBETEU5QlFVOUVMRk5CUVZBc1IwRkJiVUpCTEZOQlFXNUNJaXdpWm1sc1pTSTZJbWRzYjJKaGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENBcUlHRnpJSEJ2Y0cxdmRHbHZiaUJtY205dElDY3VMM0J2Y0cxdmRHbHZiaWM3WEc1M2FXNWtiM2N1Y0c5d2JXOTBhVzl1SUQwZ2NHOXdiVzkwYVc5dU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN2Z1BhdGggPSBleHBvcnRzLnN2ZyA9IGV4cG9ydHMuY3NzID0gZXhwb3J0cy5SZW5kZXJlciA9IGV4cG9ydHMudmFsdWUgPSBleHBvcnRzLnN0YWdnZXIgPSBleHBvcnRzLnRyYWNrID0gZXhwb3J0cy50d2VlbiA9IGV4cG9ydHMucG9pbnRlciA9IGV4cG9ydHMucGh5c2ljcyA9IGV4cG9ydHMucGFyYWxsZWwgPSBleHBvcnRzLmRlbGF5ID0gZXhwb3J0cy5jcm9zc0ZhZGUgPSBleHBvcnRzLmNvbXBvc2l0ZSA9IGV4cG9ydHMuY2hhaW4gPSBleHBvcnRzLmJsZW5kVHdlZW5zID0gZXhwb3J0cy5BY3Rpb24gPSBleHBvcnRzLnZhbHVlVHlwZXMgPSBleHBvcnRzLnRyYW5zZm9ybWVycyA9IGV4cG9ydHMuZWFzaW5nID0gZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi9mcmFtZXN5bmMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lU3RhcnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVTdGFydDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVVcGRhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lUmVuZGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lUmVuZGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZUVuZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZUVuZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVTdGFydCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVN0YXJ0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZVVwZGF0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVVwZGF0ZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVSZW5kZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVSZW5kZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lRW5kJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lRW5kO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndGltZVNpbmNlTGFzdEZyYW1lJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjdXJyZW50RnJhbWVUaW1lc3RhbXAnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmN1cnJlbnRGcmFtZVRpbWVzdGFtcDtcbiAgfVxufSk7XG5cbnZhciBfZWFzaW5nMiA9IHJlcXVpcmUoJy4vaW5jL2Vhc2luZycpO1xuXG52YXIgX2Vhc2luZyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9lYXNpbmcyKTtcblxudmFyIF90cmFuc2Zvcm1lcnMyID0gcmVxdWlyZSgnLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3RyYW5zZm9ybWVyczIpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gcmVxdWlyZSgnLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3ZhbHVlVHlwZXMyKTtcblxudmFyIF9hY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zJyk7XG5cbnZhciBfYWN0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hY3Rpb25zKTtcblxudmFyIF9ibGVuZFR3ZWVuczIgPSByZXF1aXJlKCcuL2FjdGlvbnMvYmxlbmQtdHdlZW5zJyk7XG5cbnZhciBfYmxlbmRUd2VlbnMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmxlbmRUd2VlbnMyKTtcblxudmFyIF9jaGFpbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY2hhaW4nKTtcblxudmFyIF9jaGFpbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGFpbjIpO1xuXG52YXIgX2NvbXBvc2l0ZTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY29tcG9zaXRlJyk7XG5cbnZhciBfY29tcG9zaXRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2l0ZTIpO1xuXG52YXIgX2Nyb3NzRmFkZTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY3Jvc3MtZmFkZScpO1xuXG52YXIgX2Nyb3NzRmFkZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcm9zc0ZhZGUyKTtcblxudmFyIF9kZWxheTIgPSByZXF1aXJlKCcuL2FjdGlvbnMvZGVsYXknKTtcblxudmFyIF9kZWxheTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWxheTIpO1xuXG52YXIgX3BhcmFsbGVsMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9wYXJhbGxlbCcpO1xuXG52YXIgX3BhcmFsbGVsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcmFsbGVsMik7XG5cbnZhciBfcGh5c2ljczIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcGh5c2ljcycpO1xuXG52YXIgX3BoeXNpY3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGh5c2ljczIpO1xuXG52YXIgX3BvaW50ZXIyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BvaW50ZXInKTtcblxudmFyIF9wb2ludGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvaW50ZXIyKTtcblxudmFyIF90d2VlbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvdHdlZW4nKTtcblxudmFyIF90d2VlbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2VlbjIpO1xuXG52YXIgX3RyYWNrMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy90cmFjaycpO1xuXG52YXIgX3RyYWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYWNrMik7XG5cbnZhciBfc3RhZ2dlcjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvc3RhZ2dlcicpO1xuXG52YXIgX3N0YWdnZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhZ2dlcjIpO1xuXG52YXIgX3ZhbHVlMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy92YWx1ZScpO1xuXG52YXIgX3ZhbHVlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlMik7XG5cbnZhciBfcmVuZGVyZXJzID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMnKTtcblxudmFyIF9yZW5kZXJlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVuZGVyZXJzKTtcblxudmFyIF9jc3MyID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMvY3NzJyk7XG5cbnZhciBfY3NzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NzczIpO1xuXG52YXIgX3N2ZzIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9zdmcnKTtcblxudmFyIF9zdmczID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnMik7XG5cbnZhciBfc3ZnUGF0aDIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9zdmctcGF0aCcpO1xuXG52YXIgX3N2Z1BhdGgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnUGF0aDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5leHBvcnRzLmVhc2luZyA9IF9lYXNpbmc7XG5leHBvcnRzLnRyYW5zZm9ybWVycyA9IF90cmFuc2Zvcm1lcnM7XG5leHBvcnRzLnZhbHVlVHlwZXMgPSBfdmFsdWVUeXBlcztcblxuLy8gQWN0aW9uc1xuXG5leHBvcnRzLkFjdGlvbiA9IF9hY3Rpb25zMi5kZWZhdWx0O1xuZXhwb3J0cy5ibGVuZFR3ZWVucyA9IF9ibGVuZFR3ZWVuczMuZGVmYXVsdDtcbmV4cG9ydHMuY2hhaW4gPSBfY2hhaW4zLmRlZmF1bHQ7XG5leHBvcnRzLmNvbXBvc2l0ZSA9IF9jb21wb3NpdGUzLmRlZmF1bHQ7XG5leHBvcnRzLmNyb3NzRmFkZSA9IF9jcm9zc0ZhZGUzLmRlZmF1bHQ7XG5leHBvcnRzLmRlbGF5ID0gX2RlbGF5My5kZWZhdWx0O1xuZXhwb3J0cy5wYXJhbGxlbCA9IF9wYXJhbGxlbDMuZGVmYXVsdDtcbmV4cG9ydHMucGh5c2ljcyA9IF9waHlzaWNzMy5kZWZhdWx0O1xuZXhwb3J0cy5wb2ludGVyID0gX3BvaW50ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnR3ZWVuID0gX3R3ZWVuMy5kZWZhdWx0O1xuZXhwb3J0cy50cmFjayA9IF90cmFjazMuZGVmYXVsdDtcbmV4cG9ydHMuc3RhZ2dlciA9IF9zdGFnZ2VyMy5kZWZhdWx0O1xuZXhwb3J0cy52YWx1ZSA9IF92YWx1ZTMuZGVmYXVsdDtcblxuLy8gUmVuZGVyZXJzXG5cbmV4cG9ydHMuUmVuZGVyZXIgPSBfcmVuZGVyZXJzMi5kZWZhdWx0O1xuZXhwb3J0cy5jc3MgPSBfY3NzMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmcgPSBfc3ZnMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmdQYXRoID0gX3N2Z1BhdGgzLmRlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdiM0J0YjNScGIyNHVhbk1pWFN3aWJtRnRaWE1pT2xzaWIyNUdjbUZ0WlZOMFlYSjBJaXdpYjI1R2NtRnRaVlZ3WkdGMFpTSXNJbTl1Um5KaGJXVlNaVzVrWlhJaUxDSnZia1p5WVcxbFJXNWtJaXdpWTJGdVkyVnNUMjVHY21GdFpWTjBZWEowSWl3aVkyRnVZMlZzVDI1R2NtRnRaVlZ3WkdGMFpTSXNJbU5oYm1ObGJFOXVSbkpoYldWU1pXNWtaWElpTENKallXNWpaV3hQYmtaeVlXMWxSVzVrSWl3aWRHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbElpd2lZM1Z5Y21WdWRFWnlZVzFsVkdsdFpYTjBZVzF3SWl3aVpXRnphVzVuSWl3aWRISmhibk5tYjNKdFpYSnpJaXdpZG1Gc2RXVlVlWEJsY3lJc0lrRmpkR2x2YmlJc0ltSnNaVzVrVkhkbFpXNXpJaXdpWTJoaGFXNGlMQ0pqYjIxd2IzTnBkR1VpTENKamNtOXpjMFpoWkdVaUxDSmtaV3hoZVNJc0luQmhjbUZzYkdWc0lpd2ljR2g1YzJsamN5SXNJbkJ2YVc1MFpYSWlMQ0owZDJWbGJpSXNJblJ5WVdOcklpd2ljM1JoWjJkbGNpSXNJblpoYkhWbElpd2lVbVZ1WkdWeVpYSWlMQ0pqYzNNaUxDSnpkbWNpTENKemRtZFFZWFJvSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPM05DUVVWRlFTeFpPenM3T3pzN2MwSkJRMEZETEdFN096czdPenR6UWtGRFFVTXNZVHM3T3pzN08zTkNRVU5CUXl4Vk96czdPenM3YzBKQlEwRkRMR3RDT3pzN096czdjMEpCUTBGRExHMUNPenM3T3pzN2MwSkJRMEZETEcxQ096czdPenM3YzBKQlEwRkRMR2RDT3pzN096czdjMEpCUTBGRExHdENPenM3T3pzN2MwSkJRMEZETEhGQ096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzFGQlIxVkRMRTA3VVVGRFFVTXNXVHRSUVVOQlF5eFZPenRCUVVWYU96dFJRVU5QUXl4Tk8xRkJRMEZETEZjN1VVRkRRVU1zU3p0UlFVTkJReXhUTzFGQlEwRkRMRk03VVVGRFFVTXNTenRSUVVOQlF5eFJPMUZCUTBGRExFODdVVUZEUVVNc1R6dFJRVU5CUXl4TE8xRkJRMEZETEVzN1VVRkRRVU1zVHp0UlFVTkJReXhMT3p0QlFVVlFPenRSUVVOUFF5eFJPMUZCUTBGRExFYzdVVUZEUVVNc1J6dFJRVU5CUXl4UElpd2labWxzWlNJNkluQnZjRzF2ZEdsdmJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHZJRVp5WVcxbGMzbHVZeUJ6WTJobFpIVnNaWEp6WEc1bGVIQnZjblFnZTF4dUlDQnZia1p5WVcxbFUzUmhjblFzWEc0Z0lHOXVSbkpoYldWVmNHUmhkR1VzWEc0Z0lHOXVSbkpoYldWU1pXNWtaWElzWEc0Z0lHOXVSbkpoYldWRmJtUXNYRzRnSUdOaGJtTmxiRTl1Um5KaGJXVlRkR0Z5ZEN4Y2JpQWdZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU3hjYmlBZ1kyRnVZMlZzVDI1R2NtRnRaVkpsYm1SbGNpeGNiaUFnWTJGdVkyVnNUMjVHY21GdFpVVnVaQ3hjYmlBZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbExGeHVJQ0JqZFhKeVpXNTBSbkpoYldWVWFXMWxjM1JoYlhCY2JuMGdabkp2YlNBbkxpOW1jbUZ0WlhONWJtTW5PMXh1WEc1bGVIQnZjblFnS2lCaGN5QmxZWE5wYm1jZ1puSnZiU0FuTGk5cGJtTXZaV0Z6YVc1bkp6dGNibVY0Y0c5eWRDQXFJR0Z6SUhSeVlXNXpabTl5YldWeWN5Qm1jbTl0SUNjdUwybHVZeTkwY21GdWMyWnZjbTFsY25Nbk8xeHVaWGh3YjNKMElDb2dZWE1nZG1Gc2RXVlVlWEJsY3lCbWNtOXRJQ2N1TDJsdVl5OTJZV3gxWlMxMGVYQmxjeWM3WEc1Y2JpOHZJRUZqZEdsdmJuTmNibVY0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk5aFkzUnBiMjV6Snp0Y2JtVjRjRzl5ZENCaWJHVnVaRlIzWldWdWN5Qm1jbTl0SUNjdUwyRmpkR2x2Ym5NdllteGxibVF0ZEhkbFpXNXpKenRjYm1WNGNHOXlkQ0JqYUdGcGJpQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlkyaGhhVzRuTzF4dVpYaHdiM0owSUdOdmJYQnZjMmwwWlNCbWNtOXRJQ2N1TDJGamRHbHZibk12WTI5dGNHOXphWFJsSnp0Y2JtVjRjRzl5ZENCamNtOXpjMFpoWkdVZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDJOeWIzTnpMV1poWkdVbk8xeHVaWGh3YjNKMElHUmxiR0Y1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlrWld4aGVTYzdYRzVsZUhCdmNuUWdjR0Z5WVd4c1pXd2dabkp2YlNBbkxpOWhZM1JwYjI1ekwzQmhjbUZzYkdWc0p6dGNibVY0Y0c5eWRDQndhSGx6YVdOeklHWnliMjBnSnk0dllXTjBhVzl1Y3k5d2FIbHphV056Snp0Y2JtVjRjRzl5ZENCd2IybHVkR1Z5SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTl3YjJsdWRHVnlKenRjYm1WNGNHOXlkQ0IwZDJWbGJpQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdmRIZGxaVzRuTzF4dVpYaHdiM0owSUhSeVlXTnJJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OTBjbUZqYXljN1hHNWxlSEJ2Y25RZ2MzUmhaMmRsY2lCbWNtOXRJQ2N1TDJGamRHbHZibk12YzNSaFoyZGxjaWM3WEc1bGVIQnZjblFnZG1Gc2RXVWdabkp2YlNBbkxpOWhZM1JwYjI1ekwzWmhiSFZsSnp0Y2JseHVMeThnVW1WdVpHVnlaWEp6WEc1bGVIQnZjblFnVW1WdVpHVnlaWElnWm5KdmJTQW5MaTl5Wlc1a1pYSmxjbk1uTzF4dVpYaHdiM0owSUdOemN5Qm1jbTl0SUNjdUwzSmxibVJsY21WeWN5OWpjM01uTzF4dVpYaHdiM0owSUhOMlp5Qm1jbTl0SUNjdUwzSmxibVJsY21WeWN5OXpkbWNuTzF4dVpYaHdiM0owSUhOMloxQmhkR2dnWm5KdmJTQW5MaTl5Wlc1a1pYSmxjbk12YzNabkxYQmhkR2duTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG4vKlxuICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcmV0dXJuIFtudW1iZXJdXG4qL1xudmFyIHRvRGVjaW1hbCA9IGZ1bmN0aW9uIChudW0pIHtcbiAgdmFyIHByZWNpc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMjtcblxuICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG5cbnZhciBaRVJPX1BPSU5UID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB6OiAwXG59O1xuXG52YXIgZGlzdGFuY2UxRCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICBcbiAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gIGFyZSBhdCAwLDBcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbnZhciBhbmdsZSA9IGV4cG9ydHMuYW5nbGUgPSBmdW5jdGlvbiAoYSkge1xuICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogWkVST19QT0lOVDtcbiAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xufTtcblxuLypcbiAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xudmFyIGRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBmdW5jdGlvbiAoZGVncmVlcykge1xuICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG59O1xuXG4vKlxuICBEaWxhdGVcbiAgXG4gIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICBcbiAgYSAtLS0tLS0tLS0gYlxuICBcbiAgdG9cbiAgXG4gIGEgLS0tLSBiXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbnZhciBkaWxhdGUgPSBleHBvcnRzLmRpbGF0ZSA9IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICByZXR1cm4gYSArIChiIC0gYSkgKiBkaWxhdGlvbjtcbn07XG5cbi8qXG4gIERpc3RhbmNlXG4gIFxuICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbnZhciBkaXN0YW5jZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBmdW5jdGlvbiAoYSkge1xuICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogWkVST19QT0lOVDtcblxuICAvLyAxRCBkaW1lbnNpb25zXG4gIGlmICgoMCwgX3V0aWxzLmlzTnVtKShhKSkge1xuICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICB2YXIgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgdmFyIHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgIHZhciB6RGVsdGEgPSAoMCwgX3V0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGVsdGEsIDIpICsgTWF0aC5wb3coeURlbHRhLCAyKSArIE1hdGgucG93KHpEZWx0YSwgMikpO1xuICB9XG59O1xuXG4vKlxuICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG52YXIgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZnVuY3Rpb24gKGZyb20sIHRvLCBwcm9ncmVzcykge1xuICByZXR1cm4gLXByb2dyZXNzICogZnJvbSArIHByb2dyZXNzICogdG8gKyBmcm9tO1xufTtcblxuLypcbiAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xudmFyIGdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGZ1bmN0aW9uIChmcm9tLCB0bywgdmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG59O1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG52YXIgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGZ1bmN0aW9uIChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkge1xuICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gIHJldHVybiB7XG4gICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gIH07XG59O1xuXG4vKlxuICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG52YXIgcmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbn07XG5cbi8qXG4gIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbikge1xuICB2YXIgc21vb3RoaW5nID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuICByZXR1cm4gdG9EZWNpbWFsKG9sZFZhbHVlICsgZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh4cHMpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xufTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xudmFyIHN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gKHN0ZXBzLCBwcm9ncmVzcykge1xuICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgdmFyIHRhcmdldCA9IDEgLSAxIC8gc3RlcHM7XG4gIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlkyRnNZeTVxY3lKZExDSnVZVzFsY3lJNld5SjBiMFJsWTJsdFlXd2lMQ0p1ZFcwaUxDSndjbVZqYVhOcGIyNGlMQ0pOWVhSb0lpd2ljbTkxYm1RaUxDSmFSVkpQWDFCUFNVNVVJaXdpZUNJc0lua2lMQ0o2SWl3aVpHbHpkR0Z1WTJVeFJDSXNJbUVpTENKaUlpd2lZV0p6SWl3aVlXNW5iR1VpTENKeVlXUnBZVzV6Vkc5RVpXZHlaV1Z6SWl3aVlYUmhiaklpTENKa1pXZHlaV1Z6Vkc5U1lXUnBZVzV6SWl3aVpHVm5jbVZsY3lJc0lsQkpJaXdpWkdsc1lYUmxJaXdpWkdsc1lYUnBiMjRpTENKa2FYTjBZVzVqWlNJc0luaEVaV3gwWVNJc0lubEVaV3gwWVNJc0lucEVaV3gwWVNJc0luTnhjblFpTENKblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5SXNJbVp5YjIwaUxDSjBieUlzSW5CeWIyZHlaWE56SWl3aVoyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVWlMQ0oyWVd4MVpTSXNJbkJ2YVc1MFJuSnZiVUZ1WjJ4bFFXNWtSR2x6ZEdGdVkyVWlMQ0p2Y21sbmFXNGlMQ0pqYjNNaUxDSnphVzRpTENKeVlXUnBZVzV6SWl3aWMyMXZiM1JvSWl3aWJtVjNWbUZzZFdVaUxDSnZiR1JXWVd4MVpTSXNJbVIxY21GMGFXOXVJaXdpYzIxdmIzUm9hVzVuSWl3aWJXRjRJaXdpYzNCbFpXUlFaWEpHY21GdFpTSXNJbmh3Y3lJc0ltWnlZVzFsUkhWeVlYUnBiMjRpTENKemNHVmxaRkJsY2xObFkyOXVaQ0lzSW5abGJHOWphWFI1SWl3aWMzUmxjRkJ5YjJkeVpYTnpJaXdpYzNSbGNITWlMQ0p6WldkdFpXNTBJaXdpZEdGeVoyVjBJaXdpY0hKdlozSmxjM05QWmxSaGNtZGxkQ0lzSW0xcGJpSXNJbVpzYjI5eUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCT3p0QlFVVkJPenM3T3pzN08wRkJUMEVzU1VGQlRVRXNXVUZCV1N4VlFVRkRReXhIUVVGRUxFVkJRWGRDTzBGQlFVRXNUVUZCYkVKRExGTkJRV3RDTEhWRlFVRk9MRU5CUVUwN08wRkJRM2hEUVN4MVFrRkJXU3hGUVVGYUxFVkJRV3RDUVN4VFFVRnNRanRCUVVOQkxGTkJRVTlETEV0QlFVdERMRXRCUVV3c1EwRkJWMGdzVFVGQlRVTXNVMEZCYWtJc1NVRkJPRUpCTEZOQlFYSkRPMEZCUTBRc1EwRklSRHM3UVVGTFFTeEpRVUZOUnl4aFFVRmhPMEZCUTJwQ1F5eExRVUZITEVOQlJHTTdRVUZGYWtKRExFdEJRVWNzUTBGR1l6dEJRVWRxUWtNc1MwRkJSenRCUVVoakxFTkJRVzVDT3p0QlFVMUJMRWxCUVUxRExHRkJRV0VzVlVGQlEwTXNRMEZCUkN4RlFVRkpReXhEUVVGS08wRkJRVUVzVTBGQlZWSXNTMEZCUzFNc1IwRkJUQ3hEUVVGVFJpeEpRVUZKUXl4RFFVRmlMRU5CUVZZN1FVRkJRU3hEUVVGdVFqczdRVUZGUVRzN096czdPenM3T3p0QlFWVlBMRWxCUVUxRkxIZENRVUZSTEZWQlFVTklMRU5CUVVRN1FVRkJRU3hOUVVGSlF5eERRVUZLTEhWRlFVRlJUaXhWUVVGU08wRkJRVUVzVTBGQmRVSlRMR2xDUVVGcFFsZ3NTMEZCUzFrc1MwRkJUQ3hEUVVGWFRDeEZRVUZGU2l4RFFVRkdMRWRCUVUxTExFVkJRVVZNTEVOQlFXNUNMRVZCUVhOQ1NTeEZRVUZGU0N4RFFVRkdMRWRCUVUxSkxFVkJRVVZLTEVOQlFUbENMRU5CUVdwQ0xFTkJRWFpDTzBGQlFVRXNRMEZCWkRzN1FVRkZVRHM3T3pzN08wRkJUVThzU1VGQlRWTXNPRU5CUVcxQ0xGVkJRVU5ETEU5QlFVUTdRVUZCUVN4VFFVRmhRU3hWUVVGVlpDeExRVUZMWlN4RlFVRm1MRWRCUVc5Q0xFZEJRV3BETzBGQlFVRXNRMEZCZWtJN08wRkJSVkE3T3pzN096czdPenM3T3pzN096czdPenRCUVd0Q1R5eEpRVUZOUXl3d1FrRkJVeXhWUVVGRFZDeERRVUZFTEVWQlFVbERMRU5CUVVvc1JVRkJUMU1zVVVGQlVEdEJRVUZCTEZOQlFXOUNWaXhKUVVGTExFTkJRVU5ETEVsQlFVbEVMRU5CUVV3c1NVRkJWVlVzVVVGQmJrTTdRVUZCUVN4RFFVRm1PenRCUVVWUU96czdPenM3T3pzN1FVRlRUeXhKUVVGTlF5dzRRa0ZCVnl4VlFVRkRXQ3hEUVVGRUxFVkJRWFZDTzBGQlFVRXNUVUZCYmtKRExFTkJRVzFDTEhWRlFVRm1UaXhWUVVGbE96dEJRVU0zUXp0QlFVTkJMRTFCUVVrc2EwSkJRVTFMTEVOQlFVNHNRMEZCU2l4RlFVRmpPMEZCUTFvc1YwRkJUMFFzVjBGQlYwTXNRMEZCV0N4RlFVRmpReXhEUVVGa0xFTkJRVkE3TzBGQlJVWTdRVUZEUXl4SFFVcEVMRTFCU1U4N1FVRkRUQ3hSUVVGTlZ5eFRRVUZUWWl4WFFVRlhReXhGUVVGRlNpeERRVUZpTEVWQlFXZENTeXhGUVVGRlRDeERRVUZzUWl4RFFVRm1PMEZCUTBFc1VVRkJUV2xDTEZOQlFWTmtMRmRCUVZkRExFVkJRVVZJTEVOQlFXSXNSVUZCWjBKSkxFVkJRVVZLTEVOQlFXeENMRU5CUVdZN1FVRkRRU3hSUVVGTmFVSXNVMEZCVlN4clFrRkJUV1FzUlVGQlJVWXNRMEZCVWl4RFFVRkVMRWRCUVdWRExGZEJRVmRETEVWQlFVVkdMRU5CUVdJc1JVRkJaMEpITEVWQlFVVklMRU5CUVd4Q0xFTkJRV1lzUjBGQmMwTXNRMEZCY2tRN08wRkJSVUVzVjBGQlQwd3NTMEZCUzNOQ0xFbEJRVXdzUTBGQlZTeFRRVUZEU0N4TlFVRkVMRVZCUVZjc1EwRkJXQ3hoUVVGcFFrTXNUVUZCYWtJc1JVRkJNa0lzUTBGQk0wSXNZVUZCYVVORExFMUJRV3BETEVWQlFUSkRMRU5CUVRORExFTkJRVllzUTBGQlVEdEJRVU5FTzBGQlEwWXNRMEZpVFRzN1FVRmxVRHM3T3pzN096czdPenM3UVVGWFR5eEpRVUZOUlN4elJFRkJkVUlzVlVGQlEwTXNTVUZCUkN4RlFVRlBReXhGUVVGUUxFVkJRVmRETEZGQlFWZzdRVUZCUVN4VFFVRjVRaXhEUVVGRlFTeFJRVUZHTEVkQlFXRkdMRWxCUVdRc1IwRkJkVUpGTEZkQlFWZEVMRVZCUVd4RExFZEJRWGREUkN4SlFVRm9SVHRCUVVGQkxFTkJRVGRDT3p0QlFVVlFPenM3T3pzN096czdPenM3UVVGWlR5eEpRVUZOUnl4elJFRkJkVUlzVlVGQlEwZ3NTVUZCUkN4RlFVRlBReXhGUVVGUUxFVkJRVmRITEV0QlFWZzdRVUZCUVN4VFFVRnhRaXhEUVVGRFFTeFJRVUZSU2l4SlFVRlVMRXRCUVd0Q1F5eExRVUZMUkN4SlFVRjJRaXhEUVVGeVFqdEJRVUZCTEVOQlFUZENPenRCUVVWUU96czdPenM3T3p0QlFWRlBMRWxCUVUxTExHZEZRVUUwUWl4VlFVRkRReXhOUVVGRUxFVkJRVk53UWl4TFFVRlVMRVZCUVdkQ1VTeFJRVUZvUWl4RlFVRTJRanRCUVVOd1JWSXNWVUZCVVVjc2FVSkJRV2xDU0N4TFFVRnFRaXhEUVVGU096dEJRVVZCTEZOQlFVODdRVUZEVEZBc1QwRkJSMlVzVjBGQlYyeENMRXRCUVVzclFpeEhRVUZNTEVOQlFWTnlRaXhMUVVGVUxFTkJRVmdzUjBGQk5rSnZRaXhQUVVGUE0wSXNRMEZFYkVNN1FVRkZURU1zVDBGQlIyTXNWMEZCVjJ4Q0xFdEJRVXRuUXl4SFFVRk1MRU5CUVZOMFFpeExRVUZVTEVOQlFWZ3NSMEZCTmtKdlFpeFBRVUZQTVVJN1FVRkdiRU1zUjBGQlVEdEJRVWxFTEVOQlVFMDdPMEZCVTFBN096czdPenRCUVUxUExFbEJRVTFQTERoRFFVRnRRaXhWUVVGRGMwSXNUMEZCUkR0QlFVRkJMRk5CUVdGQkxGVkJRVlVzUjBGQlZpeEhRVUZuUW1wRExFdEJRVXRsTEVWQlFXeERPMEZCUVVFc1EwRkJla0k3TzBGQlJWQTdPenM3T3pzN08wRkJVVThzU1VGQlRXMUNMREJDUVVGVExGVkJRVU5ETEZGQlFVUXNSVUZCVjBNc1VVRkJXQ3hGUVVGeFFrTXNVVUZCY2tJN1FVRkJRU3hOUVVFclFrTXNVMEZCTDBJc2RVVkJRVEpETEVOQlFUTkRPMEZCUVVFc1UwRkJhVVI2UXl4VlFVRlZkVU1zVjBGQldVTXNXVUZCV1VZc1YwRkJWME1zVVVGQmRrSXNTVUZCYlVOd1F5eExRVUZMZFVNc1IwRkJUQ3hEUVVGVFJDeFRRVUZVTEVWQlFXOUNSQ3hSUVVGd1FpeERRVUY2UkN4RFFVRnFSRHRCUVVGQkxFTkJRV1k3TzBGQlJWQTdPenM3T3p0QlFVMVBMRWxCUVUxSExIZERRVUZuUWl4VlFVRkRReXhIUVVGRUxFVkJRVTFETEdGQlFVNDdRVUZCUVN4VFFVRjVRaXhyUWtGQlRVUXNSMEZCVGl4RFFVRkVMRWRCUVdWQkxFOUJRVThzVDBGQlQwTXNZVUZCWkN4RFFVRm1MRWRCUVRoRExFTkJRWFJGTzBGQlFVRXNRMEZCZEVJN08wRkJSVkE3T3pzN096dEJRVTFQTEVsQlFVMURMREJEUVVGcFFpeFZRVUZEUXl4UlFVRkVMRVZCUVZkR0xHRkJRVmc3UVVGQlFTeFRRVUUyUWtVc1dVRkJXU3hQUVVGUFJpeGhRVUZ1UWl4RFFVRTNRanRCUVVGQkxFTkJRWFpDT3p0QlFVVlFPenM3T3pzN08wRkJUMDhzU1VGQlRVY3NjME5CUVdVc1ZVRkJRME1zUzBGQlJDeEZRVUZSY0VJc1VVRkJVaXhGUVVGeFFqdEJRVU12UXl4TlFVRk5jVUlzVlVGQlZTeExRVUZMUkN4UlFVRlJMRU5CUVdJc1EwRkJhRUk3UVVGRFFTeE5RVUZOUlN4VFFVRlRMRWxCUVVzc1NVRkJTVVlzUzBGQmVFSTdRVUZEUVN4TlFVRk5SeXh0UWtGQmJVSnFSQ3hMUVVGTGEwUXNSMEZCVEN4RFFVRlRlRUlzVjBGQlYzTkNMRTFCUVhCQ0xFVkJRVFJDTEVOQlFUVkNMRU5CUVhwQ096dEJRVVZCTEZOQlFVOW9SQ3hMUVVGTGJVUXNTMEZCVEN4RFFVRlhSaXh0UWtGQmJVSkdMRTlCUVRsQ0xFbEJRWGxEUVN4UFFVRm9SRHRCUVVORUxFTkJUazBpTENKbWFXeGxJam9pWTJGc1l5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHbHpUblZ0SUgwZ1puSnZiU0FuTGk5MWRHbHNjeWM3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnYm5WdFltVnlJSFJ2SUhnZ1pHVmphVzFoYkNCd2JHRmpaWE5jYmx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wxY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMWNiaW92WEc1amIyNXpkQ0IwYjBSbFkybHRZV3dnUFNBb2JuVnRMQ0J3Y21WamFYTnBiMjRnUFNBeUtTQTlQaUI3WEc0Z0lIQnlaV05wYzJsdmJpQTlJREV3SUNvcUlIQnlaV05wYzJsdmJqdGNiaUFnY21WMGRYSnVJRTFoZEdndWNtOTFibVFvYm5WdElDb2djSEpsWTJsemFXOXVLU0F2SUhCeVpXTnBjMmx2Ymp0Y2JuMDdYRzVjYm1OdmJuTjBJRnBGVWs5ZlVFOUpUbFFnUFNCN1hHNGdJSGc2SURBc1hHNGdJSGs2SURBc1hHNGdJSG82SURCY2JuMDdYRzVjYm1OdmJuTjBJR1JwYzNSaGJtTmxNVVFnUFNBb1lTd2dZaWtnUFQ0Z1RXRjBhQzVoWW5Nb1lTQXRJR0lwTzF4dVhHNHZLbHh1SUNCQmJtZHNaU0JpWlhSM1pXVnVJSEJ2YVc1MGMxeHVJQ0JjYmlBZ1ZISmhibk5zWVhSbGN5QjBhR1VnYUhsd2IzUm9aWFJwWTJGc0lHeHBibVVnYzI4Z2RHaGhkQ0IwYUdVZ0oyWnliMjBuSUdOdmIzSmthVzVoZEdWelhHNGdJR0Z5WlNCaGRDQXdMREJjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dXQ0JoYm1RZ1dTQmpiMjl5WkdsdVlYUmxjeUJ2WmlCbWNtOXRJSEJ2YVc1MFhHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dXQ0JoYm1RZ1dTQmpiM0prYVc1aGRHVnpJRzltSUhSdklIQnZhVzUwWEc0Z0lFQnlaWFIxY200Z1czSmhaR2xoYmwwNklFRnVaMnhsSUdKbGRIZGxaVzRnZEdobElIUjNieUJ3YjJsdWRITWdhVzRnY21Ga2FXRnVjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JoYm1kc1pTQTlJQ2hoTENCaUlEMGdXa1ZTVDE5UVQwbE9WQ2tnUFQ0Z2NtRmthV0Z1YzFSdlJHVm5jbVZsY3loTllYUm9MbUYwWVc0eUtHRXVlQ0F0SUdJdWVDd2dZUzU1SUMwZ1lpNTVLU2s3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnWkdWbmNtVmxjeUIwYnlCeVlXUnBZVzV6WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJR1JsWjNKbFpYTmNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdhVzRnY21Ga2FXRnVjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrWldkeVpXVnpWRzlTWVdScFlXNXpJRDBnS0dSbFozSmxaWE1wSUQwK0lHUmxaM0psWlhNZ0tpQk5ZWFJvTGxCSklDOGdNVGd3TzF4dVhHNHZLbHh1SUNCRWFXeGhkR1ZjYmlBZ1hHNGdJRU5vWVc1blpTQjBhR1VnY0hKdlozSmxjM05wYjI0Z1ltVjBkMlZsYmlCaElHRnVaQ0JpSUdGalkyOXlaR2x1WnlCMGJ5QmthV3hoZEdsdmJpNWNiaUFnWEc0Z0lGTnZJR1JwYkdGMGFXOXVJRDBnTUM0MUlIZHZkV3hrSUdOb1lXNW5aVnh1SUNCY2JpQWdZU0F0TFMwdExTMHRMUzBnWWx4dUlDQmNiaUFnZEc5Y2JpQWdYRzRnSUdFZ0xTMHRMU0JpWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJ5WlhacGIzVnpJSFpoYkhWbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFUnBiR0YwWlNCd2NtOW5jbVZ6Y3lCaWVTQjRYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZCeVpYWnBiM1Z6SUhaaGJIVmxJSEJzZFhNZ2RHaGxJR1JwYkdGMFpXUWdaR2xtWm1WeVpXNWpaVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrYVd4aGRHVWdQU0FvWVN3Z1lpd2daR2xzWVhScGIyNHBJRDArSUdFZ0t5QW9LR0lnTFNCaEtTQXFJR1JwYkdGMGFXOXVLVHRjYmx4dUx5cGNiaUFnUkdsemRHRnVZMlZjYmlBZ1hHNGdJRkpsZEhWeWJuTWdkR2hsSUdScGMzUmhibU5sSUdKbGRIZGxaVzRnZEhkdklHNGdaR2x0Wlc1emFXOXVZV3dnY0c5cGJuUnpMbHh1SUNCY2JpQWdRSEJoY21GdElGdHZZbXBsWTNRdmJuVnRZbVZ5WFRvZ2VDQmhibVFnZVNCdmNpQnFkWE4wSUhnZ2IyWWdjRzlwYm5RZ1FWeHVJQ0JBY0dGeVlXMGdXMjlpYW1WamRDOXVkVzFpWlhKZE9pQW9iM0IwYVc5dVlXd3BPaUI0SUdGdVpDQjVJRzl5SUdwMWMzUWdlQ0J2WmlCd2IybHVkQ0JDWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGUm9aU0JrYVhOMFlXNWpaU0JpWlhSM1pXVnVJSFJvWlNCMGQyOGdjRzlwYm5SelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHUnBjM1JoYm1ObElEMGdLR0VzSUdJZ1BTQmFSVkpQWDFCUFNVNVVLU0E5UGlCN1hHNGdJQzh2SURGRUlHUnBiV1Z1YzJsdmJuTmNiaUFnYVdZZ0tHbHpUblZ0S0dFcEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdScGMzUmhibU5sTVVRb1lTd2dZaWs3WEc1Y2JpQWdMeThnVFhWc2RHa3RaR2x0Wlc1emFXOXVZV3hjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0JqYjI1emRDQjRSR1ZzZEdFZ1BTQmthWE4wWVc1alpURkVLR0V1ZUN3Z1lpNTRLVHRjYmlBZ0lDQmpiMjV6ZENCNVJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlU3dnWWk1NUtUdGNiaUFnSUNCamIyNXpkQ0I2UkdWc2RHRWdQU0FvYVhOT2RXMG9ZUzU2S1NrZ1B5QmthWE4wWVc1alpURkVLR0V1ZWl3Z1lpNTZLU0E2SURBN1hHNWNiaUFnSUNCeVpYUjFjbTRnVFdGMGFDNXpjWEowS0NoNFJHVnNkR0VnS2lvZ01pa2dLeUFvZVVSbGJIUmhJQ29xSURJcElDc2dLSHBFWld4MFlTQXFLaUF5S1NrN1hHNGdJSDFjYm4wN1hHNWNiaThxWEc0Z0lGWmhiSFZsSUdsdUlISmhibWRsSUdaeWIyMGdjSEp2WjNKbGMzTmNiaUFnWEc0Z0lFZHBkbVZ1SUdFZ2JHOTNaWElnYkdsdGFYUWdZVzVrSUdGdUlIVndjR1Z5SUd4cGJXbDBMQ0IzWlNCeVpYUjFjbTRnZEdobElIWmhiSFZsSUhkcGRHaHBibHh1SUNCMGFHRjBJSEpoYm1kbElHRnpJR1Y0Y0hKbGMzTmxaQ0JpZVNCd2NtOW5jbVZ6Y3lBb1lTQnVkVzFpWlhJZ1puSnZiU0F3TFRFcFhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4dmQyVnlJR3hwYldsMElHOW1JSEpoYm1kbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWWEJ3WlhJZ2JHbHRhWFFnYjJZZ2NtRnVaMlZjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVWFHVWdjSEp2WjNKbGMzTWdZbVYwZDJWbGJpQnNiM2RsY2lCaGJtUWdkWEJ3WlhJZ2JHbHRhWFJ6SUdWNGNISmxjM05sWkNBd0xURmNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdZWE1nWTJGc1kzVnNZWFJsWkNCbWNtOXRJSEJ5YjJkeVpYTnpJSGRwZEdocGJpQnlZVzVuWlNBb2JtOTBJR3hwYldsMFpXUWdkMmwwYUdsdUlISmhibWRsS1Z4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5QTlJQ2htY205dExDQjBieXdnY0hKdlozSmxjM01wSUQwK0lDZ3RJSEJ5YjJkeVpYTnpJQ29nWm5KdmJTa2dLeUFvY0hKdlozSmxjM01nS2lCMGJ5a2dLeUJtY205dE8xeHVYRzR2S2x4dUlDQlFjbTluY21WemN5QjNhWFJvYVc0Z1oybDJaVzRnY21GdVoyVmNiaUFnWEc0Z0lFZHBkbVZ1SUdFZ2JHOTNaWElnYkdsdGFYUWdZVzVrSUdGdUlIVndjR1Z5SUd4cGJXbDBMQ0IzWlNCeVpYUjFjbTRnZEdobElIQnliMmR5WlhOelhHNGdJQ2hsZUhCeVpYTnpaV1FnWVhNZ1lTQnVkVzFpWlhJZ01DMHhLU0J5WlhCeVpYTmxiblJsWkNCaWVTQjBhR1VnWjJsMlpXNGdkbUZzZFdVc0lHRnVaRnh1SUNCc2FXMXBkQ0IwYUdGMElIQnliMmR5WlhOeklIUnZJSGRwZEdocGJpQXdMVEV1WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVndjR1Z5SUd4cGJXbDBYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdkRzhnWm1sdVpDQndjbTluY21WemN5QjNhWFJvYVc0Z1oybDJaVzRnY21GdVoyVmNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVUhKdlozSmxjM01nYjJZZ2RtRnNkV1VnZDJsMGFHbHVJSEpoYm1kbElHRnpJR1Y0Y0hKbGMzTmxaQ0F3TFRGY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVWdQU0FvWm5KdmJTd2dkRzhzSUhaaGJIVmxLU0E5UGlBb2RtRnNkV1VnTFNCbWNtOXRLU0F2SUNoMGJ5QXRJR1p5YjIwcE8xeHVYRzR2S2x4dUlDQlFiMmx1ZENCbWNtOXRJR0Z1WjJ4bElHRnVaQ0JrYVhOMFlXNWpaVnh1SUNCY2JpQWdRSEJoY21GdElGdHZZbXBsWTNSZE9pQXlSQ0J3YjJsdWRDQnZaaUJ2Y21sbmFXNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJCYm1kc1pTQm1jbTl0SUc5eWFXZHBibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVScGMzUmhibU5sSUdaeWIyMGdiM0pwWjJsdVhHNGdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMDZJRU5oYkdOMWJHRjBaV1FnTWtRZ2NHOXBiblJjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY0c5cGJuUkdjbTl0UVc1bmJHVkJibVJFYVhOMFlXNWpaU0E5SUNodmNtbG5hVzRzSUdGdVoyeGxMQ0JrYVhOMFlXNWpaU2tnUFQ0Z2UxeHVJQ0JoYm1kc1pTQTlJR1JsWjNKbFpYTlViMUpoWkdsaGJuTW9ZVzVuYkdVcE8xeHVYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdlRG9nWkdsemRHRnVZMlVnS2lCTllYUm9MbU52Y3loaGJtZHNaU2tnS3lCdmNtbG5hVzR1ZUN4Y2JpQWdJQ0I1T2lCa2FYTjBZVzVqWlNBcUlFMWhkR2d1YzJsdUtHRnVaMnhsS1NBcklHOXlhV2RwYmk1NVhHNGdJSDA3WEc1OU8xeHVYRzR2S2x4dUlDQkRiMjUyWlhKMElISmhaR2xoYm5NZ2RHOGdaR1ZuY21WbGMxeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCeVlXUnBZVzV6WEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlHUmxaM0psWlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtRmthV0Z1YzFSdlJHVm5jbVZsY3lBOUlDaHlZV1JwWVc1ektTQTlQaUJ5WVdScFlXNXpJQ29nTVRnd0lDOGdUV0YwYUM1UVNUdGNibHh1THlwY2JpQWdSbkpoYldWeVlYUmxMV2x1WkdWd1pXNWtaVzUwSUhOdGIyOTBhR2x1WjF4dVhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUbVYzSUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVDJ4a0lIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkSUNodmNIUnBiMjVoYkNrNklGTnRiMjkwYUdsdVp5QW9NQ0JwY3lCdWIyNWxLVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Ylc5dmRHZ2dQU0FvYm1WM1ZtRnNkV1VzSUc5c1pGWmhiSFZsTENCa2RYSmhkR2x2Yml3Z2MyMXZiM1JvYVc1bklEMGdNQ2tnUFQ0Z2RHOUVaV05wYldGc0tHOXNaRlpoYkhWbElDc2dLR1IxY21GMGFXOXVJQ29nS0c1bGQxWmhiSFZsSUMwZ2IyeGtWbUZzZFdVcElDOGdUV0YwYUM1dFlYZ29jMjF2YjNSb2FXNW5MQ0JrZFhKaGRHbHZiaWtwS1R0Y2JseHVMeXBjYmlBZ1EyOXVkbVZ5ZENCNElIQmxjaUJ6WldOdmJtUWdkRzhnY0dWeUlHWnlZVzFsSUhabGJHOWphWFI1SUdKaGMyVmtJRzl1SUdad2MxeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmJtbDBJSEJsY2lCelpXTnZibVJjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCR2NtRnRaU0JrZFhKaGRHbHZiaUJwYmlCdGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR1ZsWkZCbGNrWnlZVzFsSUQwZ0tIaHdjeXdnWm5KaGJXVkVkWEpoZEdsdmJpa2dQVDRnS0dselRuVnRLSGh3Y3lrcElEOGdlSEJ6SUM4Z0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLU0E2SURBN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ2RtVnNiMk5wZEhrZ2FXNTBieUIyWld4cFkybDBlU0J3WlhJZ2MyVmpiMjVrWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ1YVhRZ2NHVnlJR1p5WVcxbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI0Z2FXNGdiWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCbFpXUlFaWEpUWldOdmJtUWdQU0FvZG1Wc2IyTnBkSGtzSUdaeVlXMWxSSFZ5WVhScGIyNHBJRDArSUhabGJHOWphWFI1SUNvZ0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLVHRjYmx4dUx5cGNiaUFnUTNKbFlYUmxJSE4wWlhCd1pXUWdkbVZ5YzJsdmJpQnZaaUF3TFRFZ2NISnZaM0psYzNOY2JpQWdYRzRnSUVCd1lYSmhiU0JiYVc1MFhUb2dUblZ0WW1WeUlHOW1JSE4wWlhCelhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlRkR1Z3Y0dWa0lIWmhiSFZsWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOMFpYQlFjbTluY21WemN5QTlJQ2h6ZEdWd2N5d2djSEp2WjNKbGMzTXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2MyVm5iV1Z1ZENBOUlERWdMeUFvYzNSbGNITWdMU0F4S1R0Y2JpQWdZMjl1YzNRZ2RHRnlaMlYwSUQwZ01TQXRJQ2d4SUM4Z2MzUmxjSE1wTzF4dUlDQmpiMjV6ZENCd2NtOW5jbVZ6YzA5bVZHRnlaMlYwSUQwZ1RXRjBhQzV0YVc0b2NISnZaM0psYzNNZ0x5QjBZWEpuWlhRc0lERXBPMXh1WEc0Z0lISmxkSFZ5YmlCTllYUm9MbVpzYjI5eUtIQnliMmR5WlhOelQyWlVZWEpuWlhRZ0x5QnpaV2R0Wlc1MEtTQXFJSE5sWjIxbGJuUTdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJy4uL2luYy9lYXNpbmcnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgY2xhbXBQcm9ncmVzcyA9ICgwLCBfdHJhbnNmb3JtZXJzLmNsYW1wKSgwLCAxKTtcblxudmFyIFR3ZWVuID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFR3ZWVuLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBUd2VlbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdlZW4pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBUd2Vlbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb24sXG4gICAgICAgIGVhc2UgPSBfcHJvcHMuZWFzZSxcbiAgICAgICAgZnJvbSA9IF9wcm9wcy5mcm9tLFxuICAgICAgICB0byA9IF9wcm9wcy50bztcblxuXG4gICAgdGhpcy5lbGFwc2VkID0gMDtcblxuICAgIHRoaXMub25VcGRhdGUgPSAoMCwgX3RyYW5zZm9ybWVycy5mbG93KShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLmVsYXBzZWQgKz0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpO1xuICAgIH0sIGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSgwLCBkdXJhdGlvbiwgdik7XG4gICAgfSwgY2xhbXBQcm9ncmVzcywgZWFzZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGZyb20sIHRvLCB2KTtcbiAgICB9KTtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZCA+PSB0aGlzLnByb3BzLmR1cmF0aW9uO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5nZXREdXJhdGlvbiA9IGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmR1cmF0aW9uO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5nZXRFbGFwc2VkID0gZnVuY3Rpb24gZ2V0RWxhcHNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGFwc2VkO1xuICB9O1xuXG4gIHJldHVybiBUd2Vlbjtcbn0oXzIuZGVmYXVsdCk7XG5cblR3ZWVuLmRlZmF1bHRQcm9wcyA9IHtcbiAgZHVyYXRpb246IDMwMCxcbiAgZWFzZTogX2Vhc2luZy5lYXNlT3V0LFxuICBmcm9tOiAwLFxuICB0bzogMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgVHdlZW4ocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNSM1pXVnVMbXB6SWwwc0ltNWhiV1Z6SWpwYkltTnNZVzF3VUhKdlozSmxjM01pTENKVWQyVmxiaUlzSW05dVUzUmhjblFpTENKd2NtOXdjeUlzSW1SMWNtRjBhVzl1SWl3aVpXRnpaU0lzSW1aeWIyMGlMQ0owYnlJc0ltVnNZWEJ6WldRaUxDSnZibFZ3WkdGMFpTSXNJbllpTENKcGMwRmpkR2x2YmtOdmJYQnNaWFJsSWl3aVoyVjBSSFZ5WVhScGIyNGlMQ0puWlhSRmJHRndjMlZrSWl3aVpHVm1ZWFZzZEZCeWIzQnpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN1FVRkRRVHM3UVVGRFFUczdRVUZEUVRzN096czdPenM3T3p0QlFVVkJMRWxCUVUxQkxHZENRVUZuUWl4NVFrRkJUU3hEUVVGT0xFVkJRVk1zUTBGQlZDeERRVUYwUWpzN1NVRkZUVU1zU3pzN096czdPenM3TzJ0Q1FWRktReXhQTEhOQ1FVRlZPMEZCUVVFN08wRkJRVUVzYVVKQlF6WkNMRXRCUVV0RExFdEJSR3hETzBGQlFVRXNVVUZEUVVNc1VVRkVRU3hWUVVOQlFTeFJRVVJCTzBGQlFVRXNVVUZEVlVNc1NVRkVWaXhWUVVOVlFTeEpRVVJXTzBGQlFVRXNVVUZEWjBKRExFbEJSR2hDTEZWQlEyZENRU3hKUVVSb1FqdEJRVUZCTEZGQlEzTkNReXhGUVVSMFFpeFZRVU56UWtFc1JVRkVkRUk3T3p0QlFVZFNMRk5CUVV0RExFOUJRVXdzUjBGQlpTeERRVUZtT3p0QlFVVkJMRk5CUVV0RExGRkJRVXdzUjBGQlowSXNkMEpCUTJRN1FVRkJRU3hoUVVGTkxFOUJRVXRFTEU5QlFVd3NTVUZCWjBJc2IwTkJRWFJDTzBGQlFVRXNTMEZFWXl4RlFVVmtMRlZCUVVORkxFTkJRVVE3UVVGQlFTeGhRVUZQTEdkRFFVRnhRaXhEUVVGeVFpeEZRVUYzUWs0c1VVRkJlRUlzUlVGQmEwTk5MRU5CUVd4RExFTkJRVkE3UVVGQlFTeExRVVpqTEVWQlIyUldMR0ZCU0dNc1JVRkpaRXNzU1VGS1l5eEZRVXRrTEZWQlFVTkxMRU5CUVVRN1FVRkJRU3hoUVVGUExHZERRVUZ4UWtvc1NVRkJja0lzUlVGQk1rSkRMRVZCUVROQ0xFVkJRU3RDUnl4RFFVRXZRaXhEUVVGUU8wRkJRVUVzUzBGTVl5eERRVUZvUWp0QlFVOUVMRWM3TzJ0Q1FVVkVReXhuUWl3clFrRkJiVUk3UVVGRGFrSXNWMEZCVVN4TFFVRkxTQ3hQUVVGTUxFbEJRV2RDTEV0QlFVdE1MRXRCUVV3c1EwRkJWME1zVVVGQmJrTTdRVUZEUkN4SE96dHJRa0ZGUkZFc1Z5d3dRa0ZCWXp0QlFVTmFMRmRCUVU4c1MwRkJTMVFzUzBGQlRDeERRVUZYUXl4UlFVRnNRanRCUVVORUxFYzdPMnRDUVVWRVV5eFZMSGxDUVVGaE8wRkJRMWdzVjBGQlR5eExRVUZMVEN4UFFVRmFPMEZCUTBRc1J6czdPenM3UVVGb1EwZFFMRXNzUTBGRFIyRXNXU3hIUVVGbE8wRkJRM0JDVml4WlFVRlZMRWRCUkZVN1FVRkZjRUpETEhWQ1FVWnZRanRCUVVkd1FrTXNVVUZCVFN4RFFVaGpPMEZCU1hCQ1F5eE5RVUZKTzBGQlNtZENMRU03TzJ0Q1FXdERWQ3hWUVVGRFNpeExRVUZFTzBGQlFVRXNVMEZCVnl4SlFVRkpSaXhMUVVGS0xFTkJRVlZGTEV0QlFWWXNRMEZCV0R0QlFVRkJMRU1pTENKbWFXeGxJam9pZEhkbFpXNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2Snp0Y2JtbHRjRzl5ZENCN0lIUnBiV1ZUYVc1alpVeGhjM1JHY21GdFpTQjlJR1p5YjIwZ0p5NHVMMlp5WVcxbGMzbHVZeWM3WEc1cGJYQnZjblFnZXlCbWJHOTNMQ0JqYkdGdGNDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MGNtRnVjMlp2Y20xbGNuTW5PMXh1YVcxd2IzSjBJSHNnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVc0lHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dWFXMXdiM0owSUhzZ1pXRnpaVTkxZENCOUlHWnliMjBnSnk0dUwybHVZeTlsWVhOcGJtY25PMXh1WEc1amIyNXpkQ0JqYkdGdGNGQnliMmR5WlhOeklEMGdZMnhoYlhBb01Dd2dNU2s3WEc1Y2JtTnNZWE56SUZSM1pXVnVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYzNSaGRHbGpJR1JsWm1GMWJIUlFjbTl3Y3lBOUlIdGNiaUFnSUNCa2RYSmhkR2x2YmpvZ016QXdMRnh1SUNBZ0lHVmhjMlU2SUdWaGMyVlBkWFFzWEc0Z0lDQWdabkp2YlRvZ01DeGNiaUFnSUNCMGJ6b2dNVnh1SUNCOU8xeHVYRzRnSUc5dVUzUmhjblFvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJrZFhKaGRHbHZiaXdnWldGelpTd2dabkp2YlN3Z2RHOGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCMGFHbHpMbVZzWVhCelpXUWdQU0F3TzF4dVhHNGdJQ0FnZEdocGN5NXZibFZ3WkdGMFpTQTlJR1pzYjNjb1hHNGdJQ0FnSUNBb0tTQTlQaUIwYUdsekxtVnNZWEJ6WldRZ0t6MGdkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxLQ2tzWEc0Z0lDQWdJQ0FvZGlrZ1BUNGdaMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvTUN3Z1pIVnlZWFJwYjI0c0lIWXBMRnh1SUNBZ0lDQWdZMnhoYlhCUWNtOW5jbVZ6Y3l4Y2JpQWdJQ0FnSUdWaGMyVXNYRzRnSUNBZ0lDQW9kaWtnUFQ0Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9abkp2YlN3Z2RHOHNJSFlwWEc0Z0lDQWdLVHRjYmlBZ2ZWeHVYRzRnSUdselFXTjBhVzl1UTI5dGNHeGxkR1VvS1NCN1hHNGdJQ0FnY21WMGRYSnVJQ2gwYUdsekxtVnNZWEJ6WldRZ1BqMGdkR2hwY3k1d2NtOXdjeTVrZFhKaGRHbHZiaWs3WEc0Z0lIMWNibHh1SUNCblpYUkVkWEpoZEdsdmJpZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV3Y205d2N5NWtkWEpoZEdsdmJqdGNiaUFnZlZ4dVhHNGdJR2RsZEVWc1lYQnpaV1FvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVpXeGhjSE5sWkR0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2NISnZjSE1wSUQwK0lHNWxkeUJVZDJWbGJpaHdjbTl3Y3lrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3R3ZWVuLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFRyYWNrID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFRyYWNrLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBUcmFjaygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBUcmFjay5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIGlucHV0ID0gdGhpcy5wcm9wcy5pbnB1dDtcblxuICAgIHRoaXMuaW5wdXRPcmlnaW4gPSBpbnB1dC5nZXQoKTtcbiAgICBpbnB1dC5hZGRMaXN0ZW5lcih0aGlzLnVwZGF0ZSk7XG4gIH07XG5cbiAgVHJhY2sucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB2YXIgaW5wdXQgPSB0aGlzLnByb3BzLmlucHV0O1xuXG4gICAgaW5wdXQucmVtb3ZlTGlzdGVuZXIodGhpcy51cGRhdGUpO1xuICB9O1xuXG4gIFRyYWNrLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBpbnB1dCA9IF9wcm9wcy5pbnB1dCxcbiAgICAgICAgZnJvbSA9IF9wcm9wcy5mcm9tO1xuXG4gICAgdmFyIG9mZnNldCA9IGlucHV0LmdldCgpIC0gdGhpcy5pbnB1dE9yaWdpbjtcbiAgICByZXR1cm4gZnJvbSArIG9mZnNldDtcbiAgfTtcblxuICByZXR1cm4gVHJhY2s7XG59KF8yLmRlZmF1bHQpO1xuXG5UcmFjay5kZWZhdWx0UHJvcHMgPSB7XG4gIGZyb206IDAsXG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIHByb3BzID0gYXJnc1swXTtcblxuICAgIHJldHVybiBuZXcgVHJhY2socHJvcHMpO1xuICB9IGVsc2Uge1xuICAgIHZhciBpbnB1dCA9IGFyZ3NbMF0sXG4gICAgICAgIG9uVXBkYXRlID0gYXJnc1sxXSxcbiAgICAgICAgX3Byb3BzMiA9IGFyZ3NbMl07XG5cbiAgICByZXR1cm4gbmV3IFRyYWNrKF9leHRlbmRzKHtcbiAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgIG9uVXBkYXRlOiBvblVwZGF0ZVxuICAgIH0sIF9wcm9wczIpKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNSeVlXTnJMbXB6SWwwc0ltNWhiV1Z6SWpwYklsUnlZV05ySWl3aWIyNVRkR0Z5ZENJc0ltbHVjSFYwSWl3aWNISnZjSE1pTENKcGJuQjFkRTl5YVdkcGJpSXNJbWRsZENJc0ltRmtaRXhwYzNSbGJtVnlJaXdpZFhCa1lYUmxJaXdpYjI1VGRHOXdJaXdpY21WdGIzWmxUR2x6ZEdWdVpYSWlMQ0p2YmxWd1pHRjBaU0lzSW1aeWIyMGlMQ0p2Wm1aelpYUWlMQ0prWldaaGRXeDBVSEp2Y0hNaUxDSndZWE56YVhabElpd2lZWEpuY3lJc0lteGxibWQwYUNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3T3pzN096czdPenM3T3p0SlFVVk5RU3hMT3pzN096czdPenM3YTBKQlRVcERMRThzYzBKQlFWVTdRVUZCUVN4UlFVTkJReXhMUVVSQkxFZEJRMVVzUzBGQlMwTXNTMEZFWml4RFFVTkJSQ3hMUVVSQk96dEJRVVZTTEZOQlFVdEZMRmRCUVV3c1IwRkJiVUpHTEUxQlFVMUhMRWRCUVU0c1JVRkJia0k3UVVGRFFVZ3NWVUZCVFVrc1YwRkJUaXhEUVVGclFpeExRVUZMUXl4TlFVRjJRanRCUVVORUxFYzdPMnRDUVVWRVF5eE5MSEZDUVVGVE8wRkJRVUVzVVVGRFEwNHNTMEZFUkN4SFFVTlhMRXRCUVV0RExFdEJSR2hDTEVOQlEwTkVMRXRCUkVRN08wRkJSVkJCTEZWQlFVMVBMR05CUVU0c1EwRkJjVUlzUzBGQlMwWXNUVUZCTVVJN1FVRkRSQ3hIT3p0clFrRkZSRWNzVVN4MVFrRkJWenRCUVVGQkxHbENRVU5sTEV0QlFVdFFMRXRCUkhCQ08wRkJRVUVzVVVGRFJFUXNTMEZFUXl4VlFVTkVRU3hMUVVSRE8wRkJRVUVzVVVGRFRWTXNTVUZFVGl4VlFVTk5RU3hKUVVST096dEJRVVZVTEZGQlFVMURMRk5CUVZOV0xFMUJRVTFITEVkQlFVNHNTMEZCWXl4TFFVRkxSQ3hYUVVGc1F6dEJRVU5CTEZkQlFVOVBMRTlCUVU5RExFMUJRV1E3UVVGRFJDeEhPenM3T3p0QlFYSkNSMW9zU3l4RFFVTkhZU3haTEVkQlFXVTdRVUZEY0VKR0xGRkJRVTBzUTBGRVl6dEJRVVZ3UWtjc1YwRkJVenRCUVVaWExFTTdPMnRDUVhWQ1ZDeFpRVUZoTzBGQlFVRXNiME5CUVZSRExFbEJRVk03UVVGQlZFRXNVVUZCVXp0QlFVRkJPenRCUVVNeFFpeE5RVUZKUVN4TFFVRkxReXhOUVVGTUxFdEJRV2RDTEVOQlFYQkNMRVZCUVhWQ08wRkJRVUVzVVVGRFltSXNTMEZFWVN4SFFVTklXU3hKUVVSSE96dEJRVVZ5UWl4WFFVRlBMRWxCUVVsbUxFdEJRVW9zUTBGQlZVY3NTMEZCVml4RFFVRlFPMEZCUTBRc1IwRklSQ3hOUVVkUE8wRkJRVUVzVVVGRFIwUXNTMEZFU0N4SFFVTTRRbUVzU1VGRU9VSTdRVUZCUVN4UlFVTlZUQ3hSUVVSV0xFZEJRemhDU3l4SlFVUTVRanRCUVVGQkxGRkJRMjlDV2l4UFFVUndRaXhIUVVNNFFsa3NTVUZFT1VJN08wRkJSVXdzVjBGQlR5eEpRVUZKWml4TFFVRktPMEZCUTB4RkxHdENRVVJMTzBGQlJVeFJPMEZCUmtzc1QwRkhSbEFzVDBGSVJTeEZRVUZRTzBGQlMwUTdRVUZEUml4RElpd2labWxzWlNJNkluUnlZV05yTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVjYm1Oc1lYTnpJRlJ5WVdOcklHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0JtY205dE9pQXdMRnh1SUNBZ0lIQmhjM05wZG1VNklIUnlkV1ZjYmlBZ2ZUdGNibHh1SUNCdmJsTjBZWEowS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYVc1d2RYUWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnZEdocGN5NXBibkIxZEU5eWFXZHBiaUE5SUdsdWNIVjBMbWRsZENncE8xeHVJQ0FnSUdsdWNIVjBMbUZrWkV4cGMzUmxibVZ5S0hSb2FYTXVkWEJrWVhSbEtUdGNiaUFnZlZ4dVhHNGdJRzl1VTNSdmNDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHbHVjSFYwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHbHVjSFYwTG5KbGJXOTJaVXhwYzNSbGJtVnlLSFJvYVhNdWRYQmtZWFJsS1R0Y2JpQWdmVnh1WEc0Z0lHOXVWWEJrWVhSbEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2FXNXdkWFFzSUdaeWIyMGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnWTI5dWMzUWdiMlptYzJWMElEMGdhVzV3ZFhRdVoyVjBLQ2tnTFNCMGFHbHpMbWx1Y0hWMFQzSnBaMmx1TzF4dUlDQWdJSEpsZEhWeWJpQm1jbTl0SUNzZ2IyWm1jMlYwTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNndUxpNWhjbWR6S1NBOVBpQjdYRzRnSUdsbUlDaGhjbWR6TG14bGJtZDBhQ0E5UFQwZ01Ta2dlMXh1SUNBZ0lHTnZibk4wSUZzZ2NISnZjSE1nWFNBOUlHRnlaM003WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJVY21GamF5aHdjbTl3Y3lrN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ1kyOXVjM1FnV3lCcGJuQjFkQ3dnYjI1VmNHUmhkR1VzSUhCeWIzQnpJRjBnUFNCaGNtZHpPMXh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dWSEpoWTJzb2UxeHVJQ0FnSUNBZ2FXNXdkWFFzWEc0Z0lDQWdJQ0J2YmxWd1pHRjBaU3hjYmlBZ0lDQWdJQzR1TG5CeWIzQnpYRzRnSUNBZ2ZTazdYRzRnSUgxY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90cmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQaHlzaWNzID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFBoeXNpY3MsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFBoeXNpY3MoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBoeXNpY3MpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBQaHlzaWNzLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY2NlbGVyYXRpb24gPSBfcHJvcHMuYWNjZWxlcmF0aW9uLFxuICAgICAgICBmcmljdGlvbiA9IF9wcm9wcy5mcmljdGlvbixcbiAgICAgICAgdmVsb2NpdHkgPSBfcHJvcHMudmVsb2NpdHksXG4gICAgICAgIHNwcmluZyA9IF9wcm9wcy5zcHJpbmcsXG4gICAgICAgIHRvID0gX3Byb3BzLnRvO1xuXG4gICAgdmFyIG5ld1ZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgdmFyIGVsYXBzZWQgPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCk7XG5cbiAgICAvLyBBcHBseSBhY2NlbGVyYXRpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoYWNjZWxlcmF0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkoYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBmcmljdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChmcmljdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKj0gTWF0aC5wb3coMSAtIGZyaWN0aW9uLCBlbGFwc2VkIC8gMTAwKTtcbiAgICB9XG5cbiAgICBpZiAoc3ByaW5nICYmIHRvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBkaXN0YW5jZVRvVGFyZ2V0ID0gdG8gLSB0aGlzLmN1cnJlbnQ7XG4gICAgICBuZXdWZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHNwcmluZywgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdmVsb2NpdHlcbiAgICB0aGlzLmN1cnJlbnQgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKG5ld1ZlbG9jaXR5LCBlbGFwc2VkKTtcbiAgICB0aGlzLnByb3BzLnZlbG9jaXR5ID0gbmV3VmVsb2NpdHk7XG5cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9O1xuXG4gIFBoeXNpY3MucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHZhciBhdXRvU3RvcFNwZWVkID0gdGhpcy5wcm9wcy5hdXRvU3RvcFNwZWVkO1xuXG4gICAgcmV0dXJuICF0aGlzLnZlbG9jaXR5IHx8IE1hdGguYWJzKHRoaXMudmVsb2NpdHkpIDw9IGF1dG9TdG9wU3BlZWQ7XG4gIH07XG5cbiAgcmV0dXJuIFBoeXNpY3M7XG59KF8yLmRlZmF1bHQpO1xuXG5QaHlzaWNzLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWNjZWxlcmF0aW9uOiAwLFxuICBmcmljdGlvbjogMCxcbiAgdmVsb2NpdHk6IDAsXG4gIGF1dG9TdG9wU3BlZWQ6IDAuMDAxXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBQaHlzaWNzKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQm9lWE5wWTNNdWFuTWlYU3dpYm1GdFpYTWlPbHNpVUdoNWMybGpjeUlzSW05dVZYQmtZWFJsSWl3aWNISnZjSE1pTENKaFkyTmxiR1Z5WVhScGIyNGlMQ0ptY21samRHbHZiaUlzSW5abGJHOWphWFI1SWl3aWMzQnlhVzVuSWl3aWRHOGlMQ0p1WlhkV1pXeHZZMmwwZVNJc0ltVnNZWEJ6WldRaUxDSjFibVJsWm1sdVpXUWlMQ0prYVhOMFlXNWpaVlJ2VkdGeVoyVjBJaXdpWTNWeWNtVnVkQ0lzSW1selFXTjBhVzl1UTI5dGNHeGxkR1VpTENKaGRYUnZVM1J2Y0ZOd1pXVmtJaXdpVFdGMGFDSXNJbUZpY3lJc0ltUmxabUYxYkhSUWNtOXdjeUpkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN08wRkJRMEU3T3pzN096czdPenM3U1VGRlRVRXNUenM3T3pzN096czdPMjlDUVZGS1F5eFJMSFZDUVVGWE8wRkJRVUVzYVVKQlEyZEVMRXRCUVV0RExFdEJSSEpFTzBGQlFVRXNVVUZEUkVNc1dVRkVReXhWUVVORVFTeFpRVVJETzBGQlFVRXNVVUZEWVVNc1VVRkVZaXhWUVVOaFFTeFJRVVJpTzBGQlFVRXNVVUZEZFVKRExGRkJSSFpDTEZWQlEzVkNRU3hSUVVSMlFqdEJRVUZCTEZGQlEybERReXhOUVVScVF5eFZRVU5wUTBFc1RVRkVha003UVVGQlFTeFJRVU41UTBNc1JVRkVla01zVlVGRGVVTkJMRVZCUkhwRE96dEJRVVZVTEZGQlFVbERMR05CUVdOSUxGRkJRV3hDTzBGQlEwRXNVVUZCVFVrc1ZVRkJWU3h2UTBGQmFFSTdPMEZCUlVFN1FVRkRRU3hSUVVGSlRpeFpRVUZLTEVWQlFXdENPMEZCUTJoQ1N5eHhRa0ZCWlN4NVFrRkJZMHdzV1VGQlpDeEZRVUUwUWswc1QwRkJOVUlzUTBGQlpqdEJRVU5FT3p0QlFVVkVPMEZCUTBFc1VVRkJTVXdzVVVGQlNpeEZRVUZqTzBGQlExcEpMRGhDUVVGblFpeEpRVUZKU2l4UlFVRndRaXhGUVVGclEwc3NWVUZCVlN4SFFVRTFRenRCUVVORU96dEJRVVZFTEZGQlFVbElMRlZCUVZWRExFOUJRVTlITEZOQlFYSkNMRVZCUVdkRE8wRkJRemxDTEZWQlFVMURMRzFDUVVGdFFrb3NTMEZCU3l4TFFVRkxTeXhQUVVGdVF6dEJRVU5CU2l4eFFrRkJaVWNzYlVKQlFXMUNMSGxDUVVGalRDeE5RVUZrTEVWQlFYTkNSeXhQUVVGMFFpeERRVUZzUXp0QlFVTkVPenRCUVVWRU8wRkJRMEVzVTBGQlMwY3NUMEZCVEN4SlFVRm5RaXg1UWtGQlkwb3NWMEZCWkN4RlFVRXlRa01zVDBGQk0wSXNRMEZCYUVJN1FVRkRRU3hUUVVGTFVDeExRVUZNTEVOQlFWZEhMRkZCUVZnc1IwRkJjMEpITEZkQlFYUkNPenRCUVVWQkxGZEJRVThzUzBGQlMwa3NUMEZCV2p0QlFVTkVMRWM3TzI5Q1FVVkVReXhuUWl3clFrRkJiVUk3UVVGQlFTeFJRVU5VUXl4aFFVUlRMRWRCUTFNc1MwRkJTMW9zUzBGRVpDeERRVU5VV1N4aFFVUlRPenRCUVVWcVFpeFhRVUZSTEVOQlFVTXNTMEZCUzFRc1VVRkJUaXhKUVVGclFsVXNTMEZCUzBNc1IwRkJUQ3hEUVVGVExFdEJRVXRZTEZGQlFXUXNTMEZCTWtKVExHRkJRWEpFTzBGQlEwUXNSenM3T3pzN1FVRjBRMGRrTEU4c1EwRkRSMmxDTEZrc1IwRkJaVHRCUVVOd1FtUXNaMEpCUVdNc1EwRkVUVHRCUVVWd1FrTXNXVUZCVlN4RFFVWlZPMEZCUjNCQ1F5eFpRVUZWTEVOQlNGVTdRVUZKY0VKVExHbENRVUZsTzBGQlNrc3NRenM3YTBKQmQwTlVMRlZCUVVOYUxFdEJRVVE3UVVGQlFTeFRRVUZYTEVsQlFVbEdMRTlCUVVvc1EwRkJXVVVzUzBGQldpeERRVUZZTzBGQlFVRXNReUlzSW1acGJHVWlPaUp3YUhsemFXTnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNXBiWEJ2Y25RZ2V5QjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVWdmU0JtY205dElDY3VMaTltY21GdFpYTjVibU1uTzF4dWFXMXdiM0owSUhzZ2MzQmxaV1JRWlhKR2NtRnRaU0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVZMnhoYzNNZ1VHaDVjMmxqY3lCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lITjBZWFJwWXlCa1pXWmhkV3gwVUhKdmNITWdQU0I3WEc0Z0lDQWdZV05qWld4bGNtRjBhVzl1T2lBd0xGeHVJQ0FnSUdaeWFXTjBhVzl1T2lBd0xGeHVJQ0FnSUhabGJHOWphWFI1T2lBd0xGeHVJQ0FnSUdGMWRHOVRkRzl3VTNCbFpXUTZJREF1TURBeFhHNGdJSDFjYmx4dUlDQnZibFZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHRmpZMlZzWlhKaGRHbHZiaXdnWm5KcFkzUnBiMjRzSUhabGJHOWphWFI1TENCemNISnBibWNzSUhSdklIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR3hsZENCdVpYZFdaV3h2WTJsMGVTQTlJSFpsYkc5amFYUjVPMXh1SUNBZ0lHTnZibk4wSUdWc1lYQnpaV1FnUFNCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVb0tUdGNibHh1SUNBZ0lDOHZJRUZ3Y0d4NUlHRmpZMlZzWlhKaGRHbHZiaUIwYnlCMlpXeHZZMmwwZVZ4dUlDQWdJR2xtSUNoaFkyTmxiR1Z5WVhScGIyNHBJSHRjYmlBZ0lDQWdJRzVsZDFabGJHOWphWFI1SUNzOUlITndaV1ZrVUdWeVJuSmhiV1VvWVdOalpXeGxjbUYwYVc5dUxDQmxiR0Z3YzJWa0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QkJjSEJzZVNCbWNtbGpkR2x2YmlCMGJ5QjJaV3h2WTJsMGVWeHVJQ0FnSUdsbUlDaG1jbWxqZEdsdmJpa2dlMXh1SUNBZ0lDQWdibVYzVm1Wc2IyTnBkSGtnS2owZ0tERWdMU0JtY21samRHbHZiaWtnS2lvZ0tHVnNZWEJ6WldRZ0x5QXhNREFwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoemNISnBibWNnSmlZZ2RHOGdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnWkdsemRHRnVZMlZVYjFSaGNtZGxkQ0E5SUhSdklDMGdkR2hwY3k1amRYSnlaVzUwTzF4dUlDQWdJQ0FnYm1WM1ZtVnNiMk5wZEhrZ0t6MGdaR2x6ZEdGdVkyVlViMVJoY21kbGRDQXFJSE53WldWa1VHVnlSbkpoYldVb2MzQnlhVzVuTENCbGJHRndjMlZrS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCQmNIQnNlU0IyWld4dlkybDBlVnh1SUNBZ0lIUm9hWE11WTNWeWNtVnVkQ0FyUFNCemNHVmxaRkJsY2taeVlXMWxLRzVsZDFabGJHOWphWFI1TENCbGJHRndjMlZrS1R0Y2JpQWdJQ0IwYUdsekxuQnliM0J6TG5abGJHOWphWFI1SUQwZ2JtVjNWbVZzYjJOcGRIazdYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVqZFhKeVpXNTBPMXh1SUNCOVhHNWNiaUFnYVhOQlkzUnBiMjVEYjIxd2JHVjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR0YxZEc5VGRHOXdVM0JsWldRZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdjbVYwZFhKdUlDZ2hkR2hwY3k1MlpXeHZZMmwwZVNCOGZDQk5ZWFJvTG1GaWN5aDBhR2x6TG5abGJHOWphWFI1S1NBOFBTQmhkWFJ2VTNSdmNGTndaV1ZrS1R0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2NISnZjSE1wSUQwK0lHNWxkeUJRYUhsemFXTnpLSEJ5YjNCektUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BoeXNpY3MuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGFyYWxsZWwgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoUGFyYWxsZWwsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFBhcmFsbGVsKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXJhbGxlbCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBhY3Rpb25zID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuXG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gYWN0aW9ucy5sZW5ndGg7XG5cbiAgICBhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgYWN0aW9uLnNldFByb3BzKHtcbiAgICAgICAgX29uU3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIubnVtQWN0aXZlQWN0aW9ucy0tO1xuICAgICAgICB9XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgcmV0dXJuIGFjdGlvbi5zdG9wKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLmFkZEFjdGlvbiA9IGZ1bmN0aW9uIGFkZEFjdGlvbihhY3Rpb24pIHtcbiAgICB2YXIgYWN0aW9ucyA9IHRoaXMucHJvcHMuYWN0aW9ucztcblxuXG4gICAgaWYgKGFjdGlvbnMuaW5kZXhPZihhY3Rpb24pID09PSAtMSkge1xuICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwO1xuICB9O1xuXG4gIHJldHVybiBQYXJhbGxlbDtcbn0oXzIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhY3Rpb25zKSB7XG4gIHJldHVybiBuZXcgUGFyYWxsZWwoeyBhY3Rpb25zOiBhY3Rpb25zIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNCaGNtRnNiR1ZzTG1weklsMHNJbTVoYldWeklqcGJJbEJoY21Gc2JHVnNJaXdpYjI1VGRHRnlkQ0lzSW1GamRHbHZibk1pTENKd2NtOXdjeUlzSW01MWJVRmpkR2wyWlVGamRHbHZibk1pTENKc1pXNW5kR2dpTENKbWIzSkZZV05vSWl3aVlXTjBhVzl1SWl3aWMyVjBVSEp2Y0hNaUxDSmZiMjVUZEc5d0lpd2ljM1JoY25RaUxDSnZibE4wYjNBaUxDSnpkRzl3SWl3aVlXUmtRV04wYVc5dUlpd2lhVzVrWlhoUFppSXNJbkIxYzJnaUxDSnBjMEZqZEdsdmJrTnZiWEJzWlhSbElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN096czdPenM3T3p0SlFVVk5RU3hST3pzN096czdPenM3Y1VKQlEwcERMRThzYzBKQlFWVTdRVUZCUVRzN1FVRkJRU3hSUVVOQlF5eFBRVVJCTEVkQlExa3NTMEZCUzBNc1MwRkVha0lzUTBGRFFVUXNUMEZFUVRzN1FVRkZVaXhUUVVGTFJTeG5Ra0ZCVEN4SFFVRjNRa1lzVVVGQlVVY3NUVUZCYUVNN08wRkJSVUZJTEZsQlFWRkpMRTlCUVZJc1EwRkJaMElzVlVGQlEwTXNUVUZCUkN4RlFVRlpPMEZCUXpGQ1FTeGhRVUZQUXl4UlFVRlFMRU5CUVdkQ08wRkJRMlJETEdsQ1FVRlRPMEZCUVVFc2FVSkJRVTBzVDBGQlMwd3NaMEpCUVV3c1JVRkJUanRCUVVGQk8wRkJSRXNzVDBGQmFFSXNSVUZGUjAwc1MwRkdTRHRCUVVkRUxFdEJTa1E3UVVGTFJDeEhPenR4UWtGRlJFTXNUU3h4UWtGQlV6dEJRVU5RTEZOQlFVdFNMRXRCUVV3c1EwRkJWMFFzVDBGQldDeERRVUZ0UWtrc1QwRkJia0lzUTBGQk1rSXNWVUZCUTBNc1RVRkJSRHRCUVVGQkxHRkJRVmxCTEU5QlFVOUxMRWxCUVZBc1JVRkJXanRCUVVGQkxFdEJRVE5DTzBGQlEwUXNSenM3Y1VKQlJVUkRMRk1zYzBKQlFWVk9MRTBzUlVGQlVUdEJRVUZCTEZGQlExSk1MRTlCUkZFc1IwRkRTU3hMUVVGTFF5eExRVVJVTEVOQlExSkVMRTlCUkZFN096dEJRVWRvUWl4UlFVRkpRU3hSUVVGUldTeFBRVUZTTEVOQlFXZENVQ3hOUVVGb1FpeE5RVUUwUWl4RFFVRkRMRU5CUVdwRExFVkJRVzlETzBGQlEyeERUQ3hqUVVGUllTeEpRVUZTTEVOQlFXRlNMRTFCUVdJN1FVRkRSRHRCUVVOR0xFYzdPM0ZDUVVWRVV5eG5RaXdyUWtGQmJVSTdRVUZEYWtJc1YwRkJVU3hMUVVGTFdpeG5Ra0ZCVEN4TFFVRXdRaXhEUVVGc1F6dEJRVU5FTEVjN096czdPMnRDUVVkWkxGVkJRVU5HTEU5QlFVUTdRVUZCUVN4VFFVRmhMRWxCUVVsR0xGRkJRVW9zUTBGQllTeEZRVUZGUlN4blFrRkJSaXhGUVVGaUxFTkJRV0k3UVVGQlFTeERJaXdpWm1sc1pTSTZJbkJoY21Gc2JHVnNMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNWNibU5zWVhOeklGQmhjbUZzYkdWc0lHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHRmpkR2x2Ym5NZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdkR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6SUQwZ1lXTjBhVzl1Y3k1c1pXNW5kR2c3WEc1Y2JpQWdJQ0JoWTNScGIyNXpMbVp2Y2tWaFkyZ29LR0ZqZEdsdmJpa2dQVDRnZTF4dUlDQWdJQ0FnWVdOMGFXOXVMbk5sZEZCeWIzQnpLSHRjYmlBZ0lDQWdJQ0FnWDI5dVUzUnZjRG9nS0NrZ1BUNGdkR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6TFMxY2JpQWdJQ0FnSUgwcExuTjBZWEowS0NrN1hHNGdJQ0FnZlNrN1hHNGdJSDFjYmx4dUlDQnZibE4wYjNBb0tTQjdYRzRnSUNBZ2RHaHBjeTV3Y205d2N5NWhZM1JwYjI1ekxtWnZja1ZoWTJnb0tHRmpkR2x2YmlrZ1BUNGdZV04wYVc5dUxuTjBiM0FvS1NrN1hHNGdJSDFjYmx4dUlDQmhaR1JCWTNScGIyNG9ZV04wYVc5dUtTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCaFkzUnBiMjV6SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdhV1lnS0dGamRHbHZibk11YVc1a1pYaFBaaWhoWTNScGIyNHBJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdZV04wYVc5dWN5NXdkWE5vS0dGamRHbHZiaWs3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYVhOQlkzUnBiMjVEYjIxd2JHVjBaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdLSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lBOVBUMGdNQ2s3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dGamRHbHZibk1wSUQwK0lHNWxkeUJRWVhKaGJHeGxiQ2g3SUdGamRHbHZibk1nZlNrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BhcmFsbGVsLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3ZhbHVlID0gcmVxdWlyZSgnLi92YWx1ZScpO1xuXG52YXIgX3ZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlKTtcblxudmFyIF9jb21wb3NpdGUgPSByZXF1aXJlKCcuL2NvbXBvc2l0ZScpO1xuXG52YXIgX2NvbXBvc2l0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvaW50ZXIoX3JlZjIsIF9yZWYpIHtcbiAgdmFyIHggPSBfcmVmMi54LFxuICAgICAgeSA9IF9yZWYyLnk7XG5cbiAgdmFyIGV2ZW50VG9Qb2ludHMgPSBfcmVmLmV2ZW50VG9Qb2ludHMsXG4gICAgICBtb3ZlRXZlbnQgPSBfcmVmLm1vdmVFdmVudCxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnZXZlbnRUb1BvaW50cycsICdtb3ZlRXZlbnQnXSk7XG5cbiAgdmFyIHBvaW50ZXIgPSAoMCwgX2NvbXBvc2l0ZTIuZGVmYXVsdCkoe1xuICAgIHg6ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHgpLFxuICAgIHk6ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHkpXG4gIH0sIF9leHRlbmRzKHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH0sIHByb3BzKSk7XG5cbiAgdmFyIHVwZGF0ZVBvaW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChwcm9wcy5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciBwb2ludHMgPSBldmVudFRvUG9pbnRzKGUpO1xuICAgIHBvaW50ZXIueC5zZXQocG9pbnRzLngpO1xuICAgIHBvaW50ZXIueS5zZXQocG9pbnRzLnkpO1xuICB9O1xuXG4gIHBvaW50ZXIuc2V0UHJvcHMoe1xuICAgIF9vblN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVQb2ludGVyKTtcbiAgICB9LFxuICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBvaW50ZXI7XG59XG5cbnZhciBtb3VzZUV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiB7XG4gICAgeDogZS5wYWdlWCxcbiAgICB5OiBlLnBhZ2VZXG4gIH07XG59O1xuXG52YXIgdG91Y2hFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgdmFyIGNoYW5nZWRUb3VjaGVzID0gX3JlZjMuY2hhbmdlZFRvdWNoZXM7XG4gIHJldHVybiB7XG4gICAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG4gIH07XG59O1xuXG52YXIgZ2V0TmF0aXZlRXZlbnQgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4gZS5vcmlnaW5hbEV2ZW50IHx8IGUubmF0aXZlRXZlbnQgfHwgZTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlLCBwcm9wcykge1xuICB2YXIgbmF0aXZlRXZlbnQgPSBnZXROYXRpdmVFdmVudChlKTtcbiAgcmV0dXJuIG5hdGl2ZUV2ZW50LnRvdWNoZXMgPyBjcmVhdGVQb2ludGVyKHRvdWNoRXZlbnRUb1BvaW50KGUpLCBfZXh0ZW5kcyh7XG4gICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICBldmVudFRvUG9pbnRzOiB0b3VjaEV2ZW50VG9Qb2ludFxuICB9LCBwcm9wcykpIDogY3JlYXRlUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwgX2V4dGVuZHMoe1xuICAgIG1vdmVFdmVudDogJ21vdXNlbW92ZScsXG4gICAgZXZlbnRUb1BvaW50czogbW91c2VFdmVudFRvUG9pbnRcbiAgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQnZhVzUwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHNpWTNKbFlYUmxVRzlwYm5SbGNpSXNJbmdpTENKNUlpd2laWFpsYm5SVWIxQnZhVzUwY3lJc0ltMXZkbVZGZG1WdWRDSXNJbkJ5YjNCeklpd2ljRzlwYm5SbGNpSXNJbkJoYzNOcGRtVWlMQ0oxY0dSaGRHVlFiMmx1ZEdWeUlpd2laU0lzSW5CeVpYWmxiblJFWldaaGRXeDBJaXdpY0c5cGJuUnpJaXdpYzJWMElpd2ljMlYwVUhKdmNITWlMQ0pmYjI1VGRHRnlkQ0lzSW1SdlkzVnRaVzUwSWl3aVpHOWpkVzFsYm5SRmJHVnRaVzUwSWl3aVlXUmtSWFpsYm5STWFYTjBaVzVsY2lJc0lsOXZibE4wYjNBaUxDSnlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlJaXdpYlc5MWMyVkZkbVZ1ZEZSdlVHOXBiblFpTENKd1lXZGxXQ0lzSW5CaFoyVlpJaXdpZEc5MVkyaEZkbVZ1ZEZSdlVHOXBiblFpTENKamFHRnVaMlZrVkc5MVkyaGxjeUlzSW1Oc2FXVnVkRmdpTENKamJHbGxiblJaSWl3aVoyVjBUbUYwYVhabFJYWmxiblFpTENKdmNtbG5hVzVoYkVWMlpXNTBJaXdpYm1GMGFYWmxSWFpsYm5RaUxDSjBiM1ZqYUdWeklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZCUVRzN096dEJRVU5CT3pzN096czdPenRCUVVWQkxGTkJRVk5CTEdGQlFWUXNZMEZCZVVVN1FVRkJRU3hOUVVGb1JFTXNRMEZCWjBRc1UwRkJhRVJCTEVOQlFXZEVPMEZCUVVFc1RVRkJOME5ETEVOQlFUWkRMRk5CUVRkRFFTeERRVUUyUXpzN1FVRkJRU3hOUVVGMFEwTXNZVUZCYzBNc1VVRkJkRU5CTEdGQlFYTkRPMEZCUVVFc1RVRkJka0pETEZOQlFYVkNMRkZCUVhaQ1FTeFRRVUYxUWp0QlFVRkJMRTFCUVZSRExFdEJRVk03TzBGQlEzWkZMRTFCUVUxRExGVkJRVlVzZVVKQlFWVTdRVUZEZUVKTUxFOUJRVWNzY1VKQlFVMUJMRU5CUVU0c1EwRkVjVUk3UVVGRmVFSkRMRTlCUVVjc2NVSkJRVTFCTEVOQlFVNDdRVUZHY1VJc1IwRkJWanRCUVVsa1N5eGhRVUZUTzBGQlNrc3NTMEZMV0VZc1MwRk1WeXhGUVVGb1FqczdRVUZSUVN4TlFVRk5SeXhuUWtGQlowSXNWVUZCUTBNc1EwRkJSQ3hGUVVGUE8wRkJRek5DTEZGQlFVbEtMRTFCUVUxTExHTkJRVllzUlVGQk1FSTdRVUZEZUVKRUxGRkJRVVZETEdOQlFVWTdRVUZEUkRzN1FVRkZSQ3hSUVVGTlF5eFRRVUZUVWl4alFVRmpUU3hEUVVGa0xFTkJRV1k3UVVGRFFVZ3NXVUZCVVV3c1EwRkJVaXhEUVVGVlZ5eEhRVUZXTEVOQlFXTkVMRTlCUVU5V0xFTkJRWEpDTzBGQlEwRkxMRmxCUVZGS0xFTkJRVklzUTBGQlZWVXNSMEZCVml4RFFVRmpSQ3hQUVVGUFZDeERRVUZ5UWp0QlFVTkVMRWRCVWtRN08wRkJWVUZKTEZWQlFWRlBMRkZCUVZJc1EwRkJhVUk3UVVGRFprTXNZMEZCVlR0QlFVRkJMR0ZCUVUxRExGTkJRVk5ETEdWQlFWUXNRMEZCZVVKRExHZENRVUY2UWl4RFFVRXdRMklzVTBGQk1VTXNSVUZCY1VSSkxHRkJRWEpFTEVOQlFVNDdRVUZCUVN4TFFVUkxPMEZCUldaVkxHRkJRVk03UVVGQlFTeGhRVUZOU0N4VFFVRlRReXhsUVVGVUxFTkJRWGxDUnl4dFFrRkJla0lzUTBGQk5rTm1MRk5CUVRkRExFVkJRWGRFU1N4aFFVRjRSQ3hEUVVGT08wRkJRVUU3UVVGR1RTeEhRVUZxUWpzN1FVRkxRU3hUUVVGUFJpeFBRVUZRTzBGQlEwUTdPMEZCUlVRc1NVRkJUV01zYjBKQlFXOUNMRlZCUVVOWUxFTkJRVVE3UVVGQlFTeFRRVUZSTzBGQlEyaERVaXhQUVVGSFVTeEZRVUZGV1N4TFFVUXlRanRCUVVWb1EyNUNMRTlCUVVkUExFVkJRVVZoTzBGQlJqSkNMRWRCUVZJN1FVRkJRU3hEUVVFeFFqczdRVUZMUVN4SlFVRk5ReXh2UWtGQmIwSTdRVUZCUVN4TlFVRkhReXhqUVVGSUxGTkJRVWRCTEdOQlFVZzdRVUZCUVN4VFFVRjVRanRCUVVOcVJIWkNMRTlCUVVkMVFpeGxRVUZsTEVOQlFXWXNSVUZCYTBKRExFOUJSRFJDTzBGQlJXcEVka0lzVDBGQlIzTkNMR1ZCUVdVc1EwRkJaaXhGUVVGclFrVTdRVUZHTkVJc1IwRkJla0k3UVVGQlFTeERRVUV4UWpzN1FVRkxRU3hKUVVGTlF5eHBRa0ZCYVVJc1ZVRkJRMnhDTEVOQlFVUTdRVUZCUVN4VFFVRlBRU3hGUVVGRmJVSXNZVUZCUml4SlFVRnRRbTVDTEVWQlFVVnZRaXhYUVVGeVFpeEpRVUZ2UTNCQ0xFTkJRVE5ETzBGQlFVRXNRMEZCZGtJN08ydENRVVZsTEZWQlFVTkJMRU5CUVVRc1JVRkJTVW9zUzBGQlNpeEZRVUZqTzBGQlF6TkNMRTFCUVUxM1FpeGpRVUZqUml4bFFVRmxiRUlzUTBGQlppeERRVUZ3UWp0QlFVTkJMRk5CUVZGdlFpeFpRVUZaUXl4UFFVRmlMRWRCUTB3NVFpeGpRVUZqZFVJc2EwSkJRV3RDWkN4RFFVRnNRaXhEUVVGa08wRkJRMFZNTEdWQlFWY3NWMEZFWWp0QlFVVkZSQ3h0UWtGQlpXOUNPMEZCUm1wQ0xFdEJSMHRzUWl4TFFVaE1MRVZCUkVzc1IwRk5URXdzWTBGQlkyOUNMR3RDUVVGclFsZ3NRMEZCYkVJc1EwRkJaRHRCUVVORlRDeGxRVUZYTEZkQlJHSTdRVUZGUlVRc2JVSkJRV1ZwUWp0QlFVWnFRaXhMUVVkTFppeExRVWhNTEVWQlRrWTdRVUZYUkN4RElpd2labWxzWlNJNkluQnZhVzUwWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZG1Gc2RXVWdabkp2YlNBbkxpOTJZV3gxWlNjN1hHNXBiWEJ2Y25RZ1kyOXRjRzl6YVhSbElHWnliMjBnSnk0dlkyOXRjRzl6YVhSbEp6dGNibHh1Wm5WdVkzUnBiMjRnWTNKbFlYUmxVRzlwYm5SbGNpaDdJSGdzSUhrZ2ZTd2dleUJsZG1WdWRGUnZVRzlwYm5SekxDQnRiM1psUlhabGJuUXNJQzR1TG5CeWIzQnpJSDBwSUh0Y2JpQWdZMjl1YzNRZ2NHOXBiblJsY2lBOUlHTnZiWEJ2YzJsMFpTaDdYRzRnSUNBZ2VEb2dkbUZzZFdVb2VDa3NYRzRnSUNBZ2VUb2dkbUZzZFdVb2VTbGNiaUFnZlN3Z2UxeHVJQ0FnSUhCaGMzTnBkbVU2SUhSeWRXVXNYRzRnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdmU2s3WEc1Y2JpQWdZMjl1YzNRZ2RYQmtZWFJsVUc5cGJuUmxjaUE5SUNobEtTQTlQaUI3WEc0Z0lDQWdhV1lnS0hCeWIzQnpMbkJ5WlhabGJuUkVaV1poZFd4MEtTQjdYRzRnSUNBZ0lDQmxMbkJ5WlhabGJuUkVaV1poZFd4MEtDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1kyOXVjM1FnY0c5cGJuUnpJRDBnWlhabGJuUlViMUJ2YVc1MGN5aGxLVHRjYmlBZ0lDQndiMmx1ZEdWeUxuZ3VjMlYwS0hCdmFXNTBjeTU0S1R0Y2JpQWdJQ0J3YjJsdWRHVnlMbmt1YzJWMEtIQnZhVzUwY3k1NUtUdGNiaUFnZlR0Y2JseHVJQ0J3YjJsdWRHVnlMbk5sZEZCeWIzQnpLSHRjYmlBZ0lDQmZiMjVUZEdGeWREb2dLQ2tnUFQ0Z1pHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvYlc5MlpVVjJaVzUwTENCMWNHUmhkR1ZRYjJsdWRHVnlLU3hjYmlBZ0lDQmZiMjVUZEc5d09pQW9LU0E5UGlCa2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lodGIzWmxSWFpsYm5Rc0lIVndaR0YwWlZCdmFXNTBaWElwWEc0Z0lIMHBPMXh1WEc0Z0lISmxkSFZ5YmlCd2IybHVkR1Z5TzF4dWZWeHVYRzVqYjI1emRDQnRiM1Z6WlVWMlpXNTBWRzlRYjJsdWRDQTlJQ2hsS1NBOVBpQW9lMXh1SUNCNE9pQmxMbkJoWjJWWUxGeHVJQ0I1T2lCbExuQmhaMlZaWEc1OUtUdGNibHh1WTI5dWMzUWdkRzkxWTJoRmRtVnVkRlJ2VUc5cGJuUWdQU0FvZXlCamFHRnVaMlZrVkc5MVkyaGxjeUI5S1NBOVBpQW9lMXh1SUNCNE9pQmphR0Z1WjJWa1ZHOTFZMmhsYzFzd1hTNWpiR2xsYm5SWUxGeHVJQ0I1T2lCamFHRnVaMlZrVkc5MVkyaGxjMXN3WFM1amJHbGxiblJaWEc1OUtUdGNibHh1WTI5dWMzUWdaMlYwVG1GMGFYWmxSWFpsYm5RZ1BTQW9aU2tnUFQ0Z1pTNXZjbWxuYVc1aGJFVjJaVzUwSUh4OElHVXVibUYwYVhabFJYWmxiblFnZkh3Z1pUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR1VzSUhCeWIzQnpLU0E5UGlCN1hHNGdJR052Ym5OMElHNWhkR2wyWlVWMlpXNTBJRDBnWjJWMFRtRjBhWFpsUlhabGJuUW9aU2s3WEc0Z0lISmxkSFZ5YmlBb2JtRjBhWFpsUlhabGJuUXVkRzkxWTJobGN5a2dQMXh1SUNBZ0lHTnlaV0YwWlZCdmFXNTBaWElvZEc5MVkyaEZkbVZ1ZEZSdlVHOXBiblFvWlNrc0lIdGNiaUFnSUNBZ0lHMXZkbVZGZG1WdWREb2dKM1J2ZFdOb2JXOTJaU2NzWEc0Z0lDQWdJQ0JsZG1WdWRGUnZVRzlwYm5Sek9pQjBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDeGNiaUFnSUNBZ0lDNHVMbkJ5YjNCelhHNGdJQ0FnZlNrZ09seHVJQ0FnSUdOeVpXRjBaVkJ2YVc1MFpYSW9iVzkxYzJWRmRtVnVkRlJ2VUc5cGJuUW9aU2tzSUh0Y2JpQWdJQ0FnSUcxdmRtVkZkbVZ1ZERvZ0oyMXZkWE5sYlc5MlpTY3NYRzRnSUNBZ0lDQmxkbVZ1ZEZSdlVHOXBiblJ6T2lCdGIzVnpaVVYyWlc1MFZHOVFiMmx1ZEN4Y2JpQWdJQ0FnSUM0dUxuQnliM0J6WEc0Z0lDQWdmU2s3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BvaW50ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ2hhaW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ2hhaW4sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENoYWluKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYWluKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMucGxheU5leHQgPSBfdGhpcy5wbGF5TmV4dC5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBDaGFpbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pID0gMDtcbiAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLnBsYXlOZXh0ID0gZnVuY3Rpb24gcGxheU5leHQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGkgPSBfcHJvcHMuaSxcbiAgICAgICAgb3JkZXIgPSBfcHJvcHMub3JkZXI7XG5cbiAgICBpZiAoaSA8IG9yZGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMucHJvcHMuaSsrO1xuICAgICAgdGhpcy5wbGF5Q3VycmVudCgpO1xuICAgIH1cbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUucGxheUN1cnJlbnQgPSBmdW5jdGlvbiBwbGF5Q3VycmVudCgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGkgPSBfcHJvcHMyLmksXG4gICAgICAgIG9yZGVyID0gX3Byb3BzMi5vcmRlcjtcblxuICAgIG9yZGVyW2ldLm9uQ29tcGxldGUgPSB0aGlzLnBsYXlOZXh0O1xuICAgIG9yZGVyW2ldLnN0YXJ0KCk7XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGkgPSBfcHJvcHMzLmksXG4gICAgICAgIG9yZGVyID0gX3Byb3BzMy5vcmRlcjtcblxuICAgIG9yZGVyW2ldLnN0b3AoKTtcbiAgfTtcblxuICByZXR1cm4gQ2hhaW47XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3JkZXIpIHtcbiAgcmV0dXJuIG5ldyBDaGFpbih7IG9yZGVyOiBvcmRlciB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTm9ZV2x1TG1weklsMHNJbTVoYldWeklqcGJJa05vWVdsdUlpd2ljSEp2Y0hNaUxDSndiR0Y1VG1WNGRDSXNJbUpwYm1RaUxDSnZibE4wWVhKMElpd2lhU0lzSW5Cc1lYbERkWEp5Wlc1MElpd2liM0prWlhJaUxDSnNaVzVuZEdnaUxDSnZia052YlhCc1pYUmxJaXdpYzNSaGNuUWlMQ0p2YmxOMGIzQWlMQ0p6ZEc5d0lsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN096czdPenM3T3p0SlFVVk5RU3hMT3pzN1FVRkRTaXhwUWtGQldVTXNTMEZCV2l4RlFVRnRRanRCUVVGQk96dEJRVUZCTEdsRVFVTnFRaXh0UWtGQlRVRXNTMEZCVGl4RFFVUnBRanM3UVVGRmFrSXNWVUZCUzBNc1VVRkJUQ3hIUVVGblFpeE5RVUZMUVN4UlFVRk1MRU5CUVdORExFbEJRV1FzVDBGQmFFSTdRVUZHYVVJN1FVRkhiRUk3TzJ0Q1FVVkVReXhQTEhOQ1FVRlZPMEZCUTFJc1UwRkJTMGdzUzBGQlRDeERRVUZYU1N4RFFVRllMRWRCUVdVc1EwRkJaanRCUVVOQkxGTkJRVXRETEZkQlFVdzdRVUZEUkN4SE96dHJRa0ZGUkVvc1VTeDFRa0ZCVnp0QlFVRkJMR2xDUVVOWkxFdEJRVXRFTEV0QlJHcENPMEZCUVVFc1VVRkRSRWtzUTBGRVF5eFZRVU5FUVN4RFFVUkRPMEZCUVVFc1VVRkRSVVVzUzBGRVJpeFZRVU5GUVN4TFFVUkdPenRCUVVWVUxGRkJRVWxHTEVsQlFVbEZMRTFCUVUxRExFMUJRVTRzUjBGQlpTeERRVUYyUWl4RlFVRXdRanRCUVVONFFpeFhRVUZMVUN4TFFVRk1MRU5CUVZkSkxFTkJRVmc3UVVGRFFTeFhRVUZMUXl4WFFVRk1PMEZCUTBRN1FVRkRSaXhIT3p0clFrRkZSRUVzVnl3d1FrRkJZenRCUVVGQkxHdENRVU5UTEV0QlFVdE1MRXRCUkdRN1FVRkJRU3hSUVVOS1NTeERRVVJKTEZkQlEwcEJMRU5CUkVrN1FVRkJRU3hSUVVORVJTeExRVVJETEZkQlEwUkJMRXRCUkVNN08wRkJSVnBCTEZWQlFVMUdMRU5CUVU0c1JVRkJVMGtzVlVGQlZDeEhRVUZ6UWl4TFFVRkxVQ3hSUVVFelFqdEJRVU5CU3l4VlFVRk5SaXhEUVVGT0xFVkJRVk5MTEV0QlFWUTdRVUZEUkN4SE96dHJRa0ZGUkVNc1RTeHhRa0ZCVXp0QlFVRkJMR3RDUVVOakxFdEJRVXRXTEV0QlJHNUNPMEZCUVVFc1VVRkRRMGtzUTBGRVJDeFhRVU5EUVN4RFFVUkVPMEZCUVVFc1VVRkRTVVVzUzBGRVNpeFhRVU5KUVN4TFFVUktPenRCUVVWUVFTeFZRVUZOUml4RFFVRk9MRVZCUVZOUExFbEJRVlE3UVVGRFJDeEhPenM3T3p0clFrRkhXU3hWUVVGRFRDeExRVUZFTzBGQlFVRXNVMEZCVnl4SlFVRkpVQ3hMUVVGS0xFTkJRVlVzUlVGQlJVOHNXVUZCUml4RlFVRldMRU5CUVZnN1FVRkJRU3hESWl3aVptbHNaU0k2SW1Ob1lXbHVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNWNibU5zWVhOeklFTm9ZV2x1SUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNCemRYQmxjaWh3Y205d2N5azdYRzRnSUNBZ2RHaHBjeTV3YkdGNVRtVjRkQ0E5SUhSb2FYTXVjR3hoZVU1bGVIUXVZbWx1WkNoMGFHbHpLVHRjYmlBZ2ZWeHVYRzRnSUc5dVUzUmhjblFvS1NCN1hHNGdJQ0FnZEdocGN5NXdjbTl3Y3k1cElEMGdNRHRjYmlBZ0lDQjBhR2x6TG5Cc1lYbERkWEp5Wlc1MEtDazdYRzRnSUgxY2JseHVJQ0J3YkdGNVRtVjRkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR2tzSUc5eVpHVnlJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdsbUlDaHBJRHdnYjNKa1pYSXViR1Z1WjNSb0lDMGdNU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXdjbTl3Y3k1cEt5czdYRzRnSUNBZ0lDQjBhR2x6TG5Cc1lYbERkWEp5Wlc1MEtDazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdjR3hoZVVOMWNuSmxiblFvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJwTENCdmNtUmxjaUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCdmNtUmxjbHRwWFM1dmJrTnZiWEJzWlhSbElEMGdkR2hwY3k1d2JHRjVUbVY0ZER0Y2JpQWdJQ0J2Y21SbGNsdHBYUzV6ZEdGeWRDZ3BPMXh1SUNCOVhHNWNiaUFnYjI1VGRHOXdLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dhU3dnYjNKa1pYSWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnYjNKa1pYSmJhVjB1YzNSdmNDZ3BPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2h2Y21SbGNpa2dQVDRnYm1WM0lFTm9ZV2x1S0hzZ2IzSmtaWElnZlNrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2NoYWluLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gIHJldHVybiAoMCwgX3R3ZWVuMi5kZWZhdWx0KSh7IGR1cmF0aW9uOiBkdXJhdGlvbiB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyUmxiR0Y1TG1weklsMHNJbTVoYldWeklqcGJJbVIxY21GMGFXOXVJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdPenRyUWtGRlpTeFZRVUZEUVN4UlFVRkVPMEZCUVVFc1UwRkJZeXh4UWtGQlRTeEZRVUZGUVN4clFrRkJSaXhGUVVGT0xFTkJRV1E3UVVGQlFTeERJaXdpWm1sc1pTSTZJbVJsYkdGNUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhSM1pXVnVJR1p5YjIwZ0p5NHZkSGRsWlc0bk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9aSFZ5WVhScGIyNHBJRDArSUhSM1pXVnVLSHNnWkhWeVlYUnBiMjRnZlNrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2RlbGF5LmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxudmFyIF9lYXNpbmcgPSByZXF1aXJlKCcuLi9pbmMvZWFzaW5nJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENyb3NzRmFkZSA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDcm9zc0ZhZGUsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENyb3NzRmFkZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ3Jvc3NGYWRlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ3Jvc3NGYWRlLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb24sXG4gICAgICAgIGVhc2UgPSBfcHJvcHMuZWFzZSxcbiAgICAgICAgZmFkZXIgPSBfcHJvcHMuZmFkZXI7XG5cblxuICAgIHRoaXMuZmFkZXIgPSBmYWRlciB8fCAoMCwgX3R3ZWVuMi5kZWZhdWx0KSh7XG4gICAgICB0bzogMSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGVhc2U6IGVhc2VcbiAgICB9KS5zdGFydCgpO1xuICB9O1xuXG4gIENyb3NzRmFkZS5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGZyb20gPSBfcHJvcHMyLmZyb20sXG4gICAgICAgIHRvID0gX3Byb3BzMi50bztcblxuICAgIHZhciBiYWxhbmNlID0gdGhpcy5mYWRlci5nZXQoKTtcbiAgICB2YXIgbGF0ZXN0RnJvbVZhbHVlID0gZnJvbS5nZXQoKTtcbiAgICB2YXIgbGF0ZXN0VG9WYWx1ZSA9IHRvLmdldCgpO1xuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGxhdGVzdEZyb21WYWx1ZSwgbGF0ZXN0VG9WYWx1ZSwgYmFsYW5jZSk7XG4gIH07XG5cbiAgcmV0dXJuIENyb3NzRmFkZTtcbn0oXzIuZGVmYXVsdCk7XG5cbkNyb3NzRmFkZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGVhc2U6IF9lYXNpbmcubGluZWFyXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDcm9zc0ZhZGUocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOeWIzTnpMV1poWkdVdWFuTWlYU3dpYm1GdFpYTWlPbHNpUTNKdmMzTkdZV1JsSWl3aWIyNVRkR0Z5ZENJc0luQnliM0J6SWl3aVpIVnlZWFJwYjI0aUxDSmxZWE5sSWl3aVptRmtaWElpTENKMGJ5SXNJbk4wWVhKMElpd2liMjVWY0dSaGRHVWlMQ0ptY205dElpd2lZbUZzWVc1alpTSXNJbWRsZENJc0lteGhkR1Z6ZEVaeWIyMVdZV3gxWlNJc0lteGhkR1Z6ZEZSdlZtRnNkV1VpTENKa1pXWmhkV3gwVUhKdmNITWlYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096dEJRVU5CT3pzN08wRkJRMEU3TzBGQlEwRTdPenM3T3pzN096czdTVUZGVFVFc1V6czdPenM3T3pzN08zTkNRVXRLUXl4UExITkNRVUZWTzBGQlFVRXNhVUpCUXpCQ0xFdEJRVXRETEV0QlJDOUNPMEZCUVVFc1VVRkRRVU1zVVVGRVFTeFZRVU5CUVN4UlFVUkJPMEZCUVVFc1VVRkRWVU1zU1VGRVZpeFZRVU5WUVN4SlFVUldPMEZCUVVFc1VVRkRaMEpETEV0QlJHaENMRlZCUTJkQ1FTeExRVVJvUWpzN08wRkJSMUlzVTBGQlMwRXNTMEZCVEN4SFFVRmhRU3hUUVVGVExIRkNRVUZOTzBGQlF6RkNReXhWUVVGSkxFTkJSSE5DTzBGQlJURkNTQ3gzUWtGR01FSTdRVUZITVVKRE8wRkJTREJDTEV0QlFVNHNSVUZKYmtKSExFdEJTbTFDTEVWQlFYUkNPMEZCUzBRc1J6czdjMEpCUlVSRExGRXNkVUpCUVZjN1FVRkJRU3hyUWtGRFdTeExRVUZMVGl4TFFVUnFRanRCUVVGQkxGRkJRMFJQTEVsQlJFTXNWMEZEUkVFc1NVRkVRenRCUVVGQkxGRkJRMHRJTEVWQlJFd3NWMEZEUzBFc1JVRkVURHM3UVVGRlZDeFJRVUZOU1N4VlFVRlZMRXRCUVV0TUxFdEJRVXdzUTBGQlYwMHNSMEZCV0N4RlFVRm9RanRCUVVOQkxGRkJRVTFETEd0Q1FVRnJRa2dzUzBGQlMwVXNSMEZCVEN4RlFVRjRRanRCUVVOQkxGRkJRVTFGTEdkQ1FVRm5RbEFzUjBGQlIwc3NSMEZCU0N4RlFVRjBRanRCUVVOQkxGZEJRVThzWjBOQlFYRkNReXhsUVVGeVFpeEZRVUZ6UTBNc1lVRkJkRU1zUlVGQmNVUklMRTlCUVhKRUxFTkJRVkE3UVVGRFJDeEhPenM3T3p0QlFYSkNSMVlzVXl4RFFVTkhZeXhaTEVkQlFXVTdRVUZEY0VKV08wRkJSRzlDTEVNN08ydENRWFZDVkN4VlFVRkRSaXhMUVVGRU8wRkJRVUVzVTBGQlZ5eEpRVUZKUml4VFFVRktMRU5CUVdORkxFdEJRV1FzUTBGQldEdEJRVUZCTEVNaUxDSm1hV3hsSWpvaVkzSnZjM010Wm1Ga1pTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaThuTzF4dWFXMXdiM0owSUhSM1pXVnVJR1p5YjIwZ0p5NHZkSGRsWlc0bk8xeHVhVzF3YjNKMElIc2diR2x1WldGeUlIMGdabkp2YlNBbkxpNHZhVzVqTDJWaGMybHVaeWM3WEc1cGJYQnZjblFnZXlCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYmx4dVkyeGhjM01nUTNKdmMzTkdZV1JsSUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ2MzUmhkR2xqSUdSbFptRjFiSFJRY205d2N5QTlJSHRjYmlBZ0lDQmxZWE5sT2lCc2FXNWxZWEpjYmlBZ2ZWeHVYRzRnSUc5dVUzUmhjblFvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJrZFhKaGRHbHZiaXdnWldGelpTd2dabUZrWlhJZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc1Y2JpQWdJQ0IwYUdsekxtWmhaR1Z5SUQwZ1ptRmtaWElnZkh3Z2RIZGxaVzRvZTF4dUlDQWdJQ0FnZEc4NklERXNYRzRnSUNBZ0lDQmtkWEpoZEdsdmJpeGNiaUFnSUNBZ0lHVmhjMlZjYmlBZ0lDQjlLUzV6ZEdGeWRDZ3BPMXh1SUNCOVhHNWNiaUFnYjI1VmNHUmhkR1VvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJtY205dExDQjBieUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCamIyNXpkQ0JpWVd4aGJtTmxJRDBnZEdocGN5NW1ZV1JsY2k1blpYUW9LVHRjYmlBZ0lDQmpiMjV6ZENCc1lYUmxjM1JHY205dFZtRnNkV1VnUFNCbWNtOXRMbWRsZENncE8xeHVJQ0FnSUdOdmJuTjBJR3hoZEdWemRGUnZWbUZzZFdVZ1BTQjBieTVuWlhRb0tUdGNiaUFnSUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb2JHRjBaWE4wUm5KdmJWWmhiSFZsTENCc1lYUmxjM1JVYjFaaGJIVmxMQ0JpWVd4aGJtTmxLVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvY0hKdmNITXBJRDArSUc1bGR5QkRjbTl6YzBaaFpHVW9jSEp2Y0hNcE8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ29tcG9zaXRlQWN0aW9uID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENvbXBvc2l0ZUFjdGlvbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ29tcG9zaXRlQWN0aW9uKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvc2l0ZUFjdGlvbik7XG5cbiAgICB2YXIgYWN0aW9ucyA9IHByb3BzLmFjdGlvbnMsXG4gICAgICAgIHJlbWFpbmluZ1Byb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ2FjdGlvbnMnXSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwodGhpcywgcmVtYWluaW5nUHJvcHMpKTtcblxuICAgIF90aGlzLmN1cnJlbnQgPSB7fTtcbiAgICBfdGhpcy5hY3Rpb25LZXlzID0gW107XG4gICAgX3RoaXMuYWRkQWN0aW9ucyhwcm9wcy5hY3Rpb25zKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmFkZEFjdGlvbnMgPSBmdW5jdGlvbiBhZGRBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChfdGhpczIuYWN0aW9uS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgIF90aGlzMi5hY3Rpb25LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMyW2tleV0gPSBhY3Rpb25zW2tleV07XG5cbiAgICAgIHZhciBvblVwZGF0ZSA9IGZ1bmN0aW9uICh2LCBhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5jdXJyZW50W2tleV0gPSBhY3Rpb24uZ2V0KCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpczJba2V5XS5zZXRQcm9wcyh7XG4gICAgICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuICAgICAgfSkuYWRkTGlzdGVuZXIob25VcGRhdGUpO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYWN0aW9ucykge1xuICAgICAgX2xvb3Aoa2V5KTtcbiAgICB9XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IHRoaXMuYWN0aW9uS2V5cy5sZW5ndGg7XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzM1trZXldLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXM0W2tleV0uc3RvcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciB2ZWxvY2l0eSA9IHt9O1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB2ZWxvY2l0eVtrZXldID0gX3RoaXM1W2tleV0uZ2V0VmVsb2NpdHkoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwO1xuICB9O1xuXG4gIHJldHVybiBDb21wb3NpdGVBY3Rpb247XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDb21wb3NpdGVBY3Rpb24oX2V4dGVuZHMoe1xuICAgIGFjdGlvbnM6IGFjdGlvbnNcbiAgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnZiWEJ2YzJsMFpTNXFjeUpkTENKdVlXMWxjeUk2V3lKRGIyMXdiM05wZEdWQlkzUnBiMjRpTENKd2NtOXdjeUlzSW1GamRHbHZibk1pTENKeVpXMWhhVzVwYm1kUWNtOXdjeUlzSW1OMWNuSmxiblFpTENKaFkzUnBiMjVMWlhseklpd2lZV1JrUVdOMGFXOXVjeUlzSW10bGVTSXNJbWx1WkdWNFQyWWlMQ0p3ZFhOb0lpd2liMjVWY0dSaGRHVWlMQ0oySWl3aVlXTjBhVzl1SWl3aVoyVjBJaXdpYzJWMFVISnZjSE1pTENKZmIyNVRkRzl3SWl3aWJuVnRRV04wYVhabFFXTjBhVzl1Y3lJc0ltRmtaRXhwYzNSbGJtVnlJaXdpYjI1VGRHRnlkQ0lzSW14bGJtZDBhQ0lzSW1admNrVmhZMmdpTENKemRHRnlkQ0lzSW05dVUzUnZjQ0lzSW5OMGIzQWlMQ0puWlhSV1pXeHZZMmwwZVNJc0luWmxiRzlqYVhSNUlpd2lhWE5CWTNScGIyNURiMjF3YkdWMFpTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVVFN096czdPenM3T3pzN096czdPMGxCUlUxQkxHVTdPenRCUVVOS0xESkNRVUZaUXl4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlFVRXNVVUZEVkVNc1QwRkVVeXhIUVVOelFrUXNTMEZFZEVJc1EwRkRWRU1zVDBGRVV6dEJRVUZCTEZGQlEwZERMR05CUkVnc05FSkJRM05DUml4TFFVUjBRanM3UVVGQlFTeHBSRUZGYWtJc2JVSkJRVTFGTEdOQlFVNHNRMEZHYVVJN08wRkJSMnBDTEZWQlFVdERMRTlCUVV3c1IwRkJaU3hGUVVGbU8wRkJRMEVzVlVGQlMwTXNWVUZCVEN4SFFVRnJRaXhGUVVGc1FqdEJRVU5CTEZWQlFVdERMRlZCUVV3c1EwRkJaMEpNTEUxQlFVMURMRTlCUVhSQ08wRkJUR2xDTzBGQlRXeENPenMwUWtGRlJFa3NWU3gxUWtGQlYwb3NUeXhGUVVGVE8wRkJRVUU3TzBGQlFVRXNNRUpCUTFCTExFZEJSRTg3UVVGRmFFSXNWVUZCU1N4UFFVRkxSaXhWUVVGTUxFTkJRV2RDUnl4UFFVRm9RaXhEUVVGM1FrUXNSMEZCZUVJc1RVRkJhVU1zUTBGQlF5eERRVUYwUXl4RlFVRjVRenRCUVVOMlF5eGxRVUZMUml4VlFVRk1MRU5CUVdkQ1NTeEpRVUZvUWl4RFFVRnhRa1lzUjBGQmNrSTdRVUZEUkRzN1FVRkZSQ3hoUVVGTFFTeEhRVUZNTEVsQlFWbE1MRkZCUVZGTExFZEJRVklzUTBGQldqczdRVUZGUVN4VlFVRk5SeXhYUVVGWExGVkJRVU5ETEVOQlFVUXNSVUZCU1VNc1RVRkJTanRCUVVGQkxHVkJRV1VzVDBGQlMxSXNUMEZCVEN4RFFVRmhSeXhIUVVGaUxFbEJRVzlDU3l4UFFVRlBReXhIUVVGUUxFVkJRVzVETzBGQlFVRXNUMEZCYWtJN08wRkJSVUVzWVVGQlMwNHNSMEZCVEN4RlFVTkhUeXhSUVVSSUxFTkJRMWs3UVVGRFVrTXNhVUpCUVZNN1FVRkJRU3hwUWtGQlRTeFBRVUZMUXl4blFrRkJUQ3hGUVVGT08wRkJRVUU3UVVGRVJDeFBRVVJhTEVWQlNVZERMRmRCU2tnc1EwRkpaVkFzVVVGS1pqdEJRVlpuUWpzN1FVRkRiRUlzVTBGQlN5eEpRVUZOU0N4SFFVRllMRWxCUVd0Q1RDeFBRVUZzUWl4RlFVRXlRanRCUVVGQkxGbEJRV2hDU3l4SFFVRm5RanRCUVdNeFFqdEJRVU5HTEVjN096UkNRVVZFVnl4UExITkNRVUZWTzBGQlFVRTdPMEZCUTFJc1UwRkJTMFlzWjBKQlFVd3NSMEZCZDBJc1MwRkJTMWdzVlVGQlRDeERRVUZuUW1Nc1RVRkJlRU03UVVGRFFTeFRRVUZMWkN4VlFVRk1MRU5CUVdkQ1pTeFBRVUZvUWl4RFFVRjNRaXhWUVVGRFlpeEhRVUZFTzBGQlFVRXNZVUZCVXl4UFFVRkxRU3hIUVVGTUxFVkJRVlZqTEV0QlFWWXNSVUZCVkR0QlFVRkJMRXRCUVhoQ08wRkJRMFFzUnpzN05FSkJSVVJETEUwc2NVSkJRVk03UVVGQlFUczdRVUZEVUN4VFFVRkxha0lzVlVGQlRDeERRVUZuUW1Vc1QwRkJhRUlzUTBGQmQwSXNWVUZCUTJJc1IwRkJSRHRCUVVGQkxHRkJRVk1zVDBGQlMwRXNSMEZCVEN4RlFVRlZaMElzU1VGQlZpeEZRVUZVTzBGQlFVRXNTMEZCZUVJN1FVRkRSQ3hIT3pzMFFrRkZSRU1zVnl3d1FrRkJZenRCUVVGQk96dEJRVU5hTEZGQlFVMURMRmRCUVZjc1JVRkJha0k3UVVGRFFTeFRRVUZMY0VJc1ZVRkJUQ3hEUVVGblFtVXNUMEZCYUVJc1EwRkJkMElzVlVGQlEySXNSMEZCUkR0QlFVRkJMR0ZCUVZOclFpeFRRVUZUYkVJc1IwRkJWQ3hKUVVGblFpeFBRVUZMUVN4SFFVRk1MRVZCUVZWcFFpeFhRVUZXTEVWQlFYcENPMEZCUVVFc1MwRkJlRUk3UVVGRFFTeFhRVUZQUXl4UlFVRlFPMEZCUTBRc1J6czdORUpCUlVSRExHZENMQ3RDUVVGdFFqdEJRVU5xUWl4WFFVRlJMRXRCUVV0V0xHZENRVUZNTEV0QlFUQkNMRU5CUVd4RE8wRkJRMFFzUnpzN096czdhMEpCUjFrc1ZVRkJRMlFzVDBGQlJDeEZRVUZWUkN4TFFVRldMRVZCUVc5Q08wRkJRMnBETEZOQlFVOHNTVUZCU1VRc1pVRkJTanRCUVVOTVJUdEJRVVJMTEV0QlJVWkVMRXRCUmtVc1JVRkJVRHRCUVVsRUxFTWlMQ0ptYVd4bElqb2lZMjl0Y0c5emFYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNWNibU5zWVhOeklFTnZiWEJ2YzJsMFpVRmpkR2x2YmlCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCaFkzUnBiMjV6TENBdUxpNXlaVzFoYVc1cGJtZFFjbTl3Y3lCOUlEMGdjSEp2Y0hNN1hHNGdJQ0FnYzNWd1pYSW9jbVZ0WVdsdWFXNW5VSEp2Y0hNcE8xeHVJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRDQTlJSHQ5TzF4dUlDQWdJSFJvYVhNdVlXTjBhVzl1UzJWNWN5QTlJRnRkTzF4dUlDQWdJSFJvYVhNdVlXUmtRV04wYVc5dWN5aHdjbTl3Y3k1aFkzUnBiMjV6S1R0Y2JpQWdmVnh1WEc0Z0lHRmtaRUZqZEdsdmJuTW9ZV04wYVc5dWN5a2dlMXh1SUNBZ0lHWnZjaUFvWTI5dWMzUWdhMlY1SUdsdUlHRmpkR2x2Ym5NcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtRmpkR2x2Ymt0bGVYTXVhVzVrWlhoUFppaHJaWGtwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbUZqZEdsdmJrdGxlWE11Y0hWemFDaHJaWGtwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCMGFHbHpXMnRsZVYwZ1BTQmhZM1JwYjI1elcydGxlVjA3WEc1Y2JpQWdJQ0FnSUdOdmJuTjBJRzl1VlhCa1lYUmxJRDBnS0hZc0lHRmpkR2x2YmlrZ1BUNGdkR2hwY3k1amRYSnlaVzUwVzJ0bGVWMGdQU0JoWTNScGIyNHVaMlYwS0NrN1hHNWNiaUFnSUNBZ0lIUm9hWE5iYTJWNVhWeHVJQ0FnSUNBZ0lDQXVjMlYwVUhKdmNITW9lMXh1SUNBZ0lDQWdJQ0FnSUY5dmJsTjBiM0E2SUNncElEMCtJSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3kwdFhHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQWdJQzVoWkdSTWFYTjBaVzVsY2lodmJsVndaR0YwWlNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTWdQU0IwYUdsekxtRmpkR2x2Ymt0bGVYTXViR1Z1WjNSb08xeHVJQ0FnSUhSb2FYTXVZV04wYVc5dVMyVjVjeTVtYjNKRllXTm9LQ2hyWlhrcElEMCtJSFJvYVhOYmEyVjVYUzV6ZEdGeWRDZ3BLVHRjYmlBZ2ZWeHVYRzRnSUc5dVUzUnZjQ2dwSUh0Y2JpQWdJQ0IwYUdsekxtRmpkR2x2Ymt0bGVYTXVabTl5UldGamFDZ29hMlY1S1NBOVBpQjBhR2x6VzJ0bGVWMHVjM1J2Y0NncEtUdGNiaUFnZlZ4dVhHNGdJR2RsZEZabGJHOWphWFI1S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSFpsYkc5amFYUjVJRDBnZTMwN1hHNGdJQ0FnZEdocGN5NWhZM1JwYjI1TFpYbHpMbVp2Y2tWaFkyZ29LR3RsZVNrZ1BUNGdkbVZzYjJOcGRIbGJhMlY1WFNBOUlIUm9hWE5iYTJWNVhTNW5aWFJXWld4dlkybDBlU2dwS1R0Y2JpQWdJQ0J5WlhSMWNtNGdkbVZzYjJOcGRIazdYRzRnSUgxY2JseHVJQ0JwYzBGamRHbHZia052YlhCc1pYUmxLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQW9kR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6SUQwOVBTQXdLVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWVdOMGFXOXVjeXdnY0hKdmNITXBJRDArSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJEYjIxd2IzTnBkR1ZCWTNScGIyNG9lMXh1SUNBZ0lHRmpkR2x2Ym5Nc1hHNGdJQ0FnTGk0dWNISnZjSE5jYmlBZ2ZTazdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY29tcG9zaXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX29uTmV4dEZyYW1lID0gcmVxdWlyZSgnLi9vbi1uZXh0LWZyYW1lJyk7XG5cbnZhciBfb25OZXh0RnJhbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb25OZXh0RnJhbWUpO1xuXG52YXIgX2NyZWF0ZVJlbmRlclN0ZXAgPSByZXF1aXJlKCcuL2NyZWF0ZS1yZW5kZXItc3RlcCcpO1xuXG52YXIgX2NyZWF0ZVJlbmRlclN0ZXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlUmVuZGVyU3RlcCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcblxuLyoqXG4gKiBNYXhpbXVtIHBlcm1pdHRlZCBtcyBzaW5jZSBsYXN0IGZyYW1lXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgTUFYX0VMQVBTRUQgPSAyMDtcblxuLyoqXG4gKiBDdXJyZW50IGZyYW1lc3RhbXBcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBjdXJyZW50RnJhbWVzdGFtcCA9ICgwLCBfdXRpbHMuY3VycmVudFRpbWUpKCk7XG5cbnZhciBlbGFwc2VkID0gMDtcblxuLyoqXG4gKiBGYWN0b3IgdG8gbXVsdGlwbHkgYGVsYXBzZWRgIGJ5IC0gXG4gKiAwLjUgd291bGQgYmUgc2xvdyBtb3Rpb24sIDIgd291bGQgYmUgZmFzdFxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIGRpbGF0aW9uID0gMTtcblxuZnVuY3Rpb24gc3RhcnRSZW5kZXJMb29wKCkge1xuICBpZiAoIXdpbGxSZW5kZXJOZXh0RnJhbWUpIHtcbiAgICB3aWxsUmVuZGVyTmV4dEZyYW1lID0gdHJ1ZTtcbiAgICAoMCwgX29uTmV4dEZyYW1lMi5kZWZhdWx0KShwcm9jZXNzRnJhbWUpO1xuICB9XG59XG5cbnZhciBmcmFtZVN0YXJ0ID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lVXBkYXRlID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lUmVuZGVyID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lRW5kID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xuXG5mdW5jdGlvbiBwcm9jZXNzRnJhbWUoZnJhbWVzdGFtcCkge1xuICB3aWxsUmVuZGVyTmV4dEZyYW1lID0gZmFsc2U7XG4gIGVsYXBzZWQgPSBNYXRoLm1heChNYXRoLm1pbihmcmFtZXN0YW1wIC0gY3VycmVudEZyYW1lc3RhbXAsIE1BWF9FTEFQU0VEKSwgMSkgKiBkaWxhdGlvbjtcbiAgY3VycmVudEZyYW1lc3RhbXAgPSBmcmFtZXN0YW1wO1xuXG4gIGZyYW1lU3RhcnQucHJvY2VzcygpO1xuICBmcmFtZVVwZGF0ZS5wcm9jZXNzKCk7XG4gIGZyYW1lUmVuZGVyLnByb2Nlc3MoKTtcbiAgZnJhbWVFbmQucHJvY2VzcygpO1xufVxuXG52YXIgb25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LnNjaGVkdWxlO1xudmFyIG9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLm9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5zY2hlZHVsZTtcbnZhciBvbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuc2NoZWR1bGU7XG52YXIgb25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGZyYW1lRW5kLnNjaGVkdWxlO1xudmFyIGNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBmcmFtZUVuZC5jYW5jZWw7XG5cbnZhciB0aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGVsYXBzZWQ7XG59O1xudmFyIGN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY3VycmVudEZyYW1lc3RhbXA7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2xzaWQybHNiRkpsYm1SbGNrNWxlSFJHY21GdFpTSXNJazFCV0Y5RlRFRlFVMFZFSWl3aVkzVnljbVZ1ZEVaeVlXMWxjM1JoYlhBaUxDSmxiR0Z3YzJWa0lpd2laR2xzWVhScGIyNGlMQ0p6ZEdGeWRGSmxibVJsY2t4dmIzQWlMQ0p3Y205alpYTnpSbkpoYldVaUxDSm1jbUZ0WlZOMFlYSjBJaXdpWm5KaGJXVlZjR1JoZEdVaUxDSm1jbUZ0WlZKbGJtUmxjaUlzSW1aeVlXMWxSVzVrSWl3aVpuSmhiV1Z6ZEdGdGNDSXNJazFoZEdnaUxDSnRZWGdpTENKdGFXNGlMQ0p3Y205alpYTnpJaXdpYjI1R2NtRnRaVk4wWVhKMElpd2ljMk5vWldSMWJHVWlMQ0p2YmtaeVlXMWxWWEJrWVhSbElpd2liMjVHY21GdFpWSmxibVJsY2lJc0ltOXVSbkpoYldWRmJtUWlMQ0pqWVc1alpXeFBia1p5WVcxbFUzUmhjblFpTENKallXNWpaV3dpTENKallXNWpaV3hQYmtaeVlXMWxWWEJrWVhSbElpd2lZMkZ1WTJWc1QyNUdjbUZ0WlZKbGJtUmxjaUlzSW1OaGJtTmxiRTl1Um5KaGJXVkZibVFpTENKMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVaUxDSmpkWEp5Wlc1MFJuSmhiV1ZVYVcxbGMzUmhiWEFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUlVFc1NVRkJTVUVzYzBKQlFYTkNMRXRCUVRGQ096dEJRVVZCT3pzN08wRkJTVUVzU1VGQlRVTXNZMEZCWXl4RlFVRndRanM3UVVGRlFUczdPenRCUVVsQkxFbEJRVWxETEc5Q1FVRnZRaXg1UWtGQmVFSTdPMEZCUlVFc1NVRkJTVU1zVlVGQlZTeERRVUZrT3p0QlFVVkJPenM3T3p0QlFVdEJMRWxCUVVsRExGZEJRVmNzUTBGQlpqczdRVUZGUVN4VFFVRlRReXhsUVVGVUxFZEJRVEpDTzBGQlEzcENMRTFCUVVrc1EwRkJRMHdzYlVKQlFVd3NSVUZCTUVJN1FVRkRlRUpCTERCQ1FVRnpRaXhKUVVGMFFqdEJRVU5CTEN0Q1FVRlpUU3haUVVGYU8wRkJRMFE3UVVGRFJqczdRVUZGUkN4SlFVRk5ReXhoUVVGaExHZERRVUZwUWtZc1pVRkJha0lzUTBGQmJrSTdRVUZEUVN4SlFVRk5SeXhqUVVGakxHZERRVUZwUWtnc1pVRkJha0lzUTBGQmNFSTdRVUZEUVN4SlFVRk5TU3hqUVVGakxHZERRVUZwUWtvc1pVRkJha0lzUTBGQmNFSTdRVUZEUVN4SlFVRk5TeXhYUVVGWExHZERRVUZwUWt3c1pVRkJha0lzUTBGQmFrSTdPMEZCUlVFc1UwRkJVME1zV1VGQlZDeERRVUZ6UWtzc1ZVRkJkRUlzUlVGQmEwTTdRVUZEYUVOWUxIZENRVUZ6UWl4TFFVRjBRanRCUVVOQlJ5eFpRVUZWVXl4TFFVRkxReXhIUVVGTUxFTkJRVk5FTEV0QlFVdEZMRWRCUVV3c1EwRkJVMGdzWVVGQllWUXNhVUpCUVhSQ0xFVkJRWGxEUkN4WFFVRjZReXhEUVVGVUxFVkJRV2RGTEVOQlFXaEZMRWxCUVhGRlJ5eFJRVUV2UlR0QlFVTkJSaXh6UWtGQmIwSlRMRlZCUVhCQ096dEJRVVZCU2l4aFFVRlhVU3hQUVVGWU8wRkJRMEZRTEdOQlFWbFBMRTlCUVZvN1FVRkRRVTRzWTBGQldVMHNUMEZCV2p0QlFVTkJUQ3hYUVVGVFN5eFBRVUZVTzBGQlEwUTdPMEZCUlUwc1NVRkJUVU1zYzBOQlFXVlVMRmRCUVZkVkxGRkJRV2hETzBGQlEwRXNTVUZCVFVNc2QwTkJRV2RDVml4WlFVRlpVeXhSUVVGc1F6dEJRVU5CTEVsQlFVMUZMSGREUVVGblFsWXNXVUZCV1ZFc1VVRkJiRU03UVVGRFFTeEpRVUZOUnl4clEwRkJZVllzVTBGQlUwOHNVVUZCTlVJN1FVRkRRU3hKUVVGTlNTeHJSRUZCY1VKa0xGZEJRVmRsTEUxQlFYUkRPMEZCUTBFc1NVRkJUVU1zYjBSQlFYTkNaaXhaUVVGWll5eE5RVUY0UXp0QlFVTkJMRWxCUVUxRkxHOUVRVUZ6UW1Zc1dVRkJXV0VzVFVGQmVFTTdRVUZEUVN4SlFVRk5SeXc0UTBGQmJVSm1MRk5CUVZOWkxFMUJRV3hET3p0QlFVVkJMRWxCUVUxSkxHdEVRVUZ4UWp0QlFVRkJMRk5CUVUxMlFpeFBRVUZPTzBGQlFVRXNRMEZCTTBJN1FVRkRRU3hKUVVGTmQwSXNkMFJCUVhkQ08wRkJRVUVzVTBGQlRYcENMR2xDUVVGT08wRkJRVUVzUTBGQk9VSWlMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnYjI1T1pYaDBSbkpoYldVZ1puSnZiU0FuTGk5dmJpMXVaWGgwTFdaeVlXMWxKenRjYm1sdGNHOXlkQ0JqY21WaGRHVlNaVzVrWlhKVGRHVndJR1p5YjIwZ0p5NHZZM0psWVhSbExYSmxibVJsY2kxemRHVndKenRjYm1sdGNHOXlkQ0I3SUdOMWNuSmxiblJVYVcxbElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dWJHVjBJSGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VnUFNCbVlXeHpaVHRjYmx4dUx5b3FYRzRnS2lCTllYaHBiWFZ0SUhCbGNtMXBkSFJsWkNCdGN5QnphVzVqWlNCc1lYTjBJR1p5WVcxbFhHNGdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ292WEc1amIyNXpkQ0JOUVZoZlJVeEJVRk5GUkNBOUlESXdPMXh1WEc0dktpcGNiaUFxSUVOMWNuSmxiblFnWm5KaGJXVnpkR0Z0Y0Z4dUlDb2dRSFI1Y0dVZ2UwNTFiV0psY24xY2JpQXFMMXh1YkdWMElHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd0lEMGdZM1Z5Y21WdWRGUnBiV1VvS1R0Y2JseHViR1YwSUdWc1lYQnpaV1FnUFNBd08xeHVYRzR2S2lwY2JpQXFJRVpoWTNSdmNpQjBieUJ0ZFd4MGFYQnNlU0JnWld4aGNITmxaR0FnWW5rZ0xTQmNiaUFxSURBdU5TQjNiM1ZzWkNCaVpTQnpiRzkzSUcxdmRHbHZiaXdnTWlCM2IzVnNaQ0JpWlNCbVlYTjBYRzRnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNvdlhHNXNaWFFnWkdsc1lYUnBiMjRnUFNBeE8xeHVYRzVtZFc1amRHbHZiaUJ6ZEdGeWRGSmxibVJsY2t4dmIzQW9LU0I3WEc0Z0lHbG1JQ2doZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNrZ2UxeHVJQ0FnSUhkcGJHeFNaVzVrWlhKT1pYaDBSbkpoYldVZ1BTQjBjblZsTzF4dUlDQWdJRzl1VG1WNGRFWnlZVzFsS0hCeWIyTmxjM05HY21GdFpTazdYRzRnSUgxY2JuMWNibHh1WTI5dWMzUWdabkpoYldWVGRHRnlkQ0E5SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLVHRjYm1OdmJuTjBJR1p5WVcxbFZYQmtZWFJsSUQwZ1kzSmxZWFJsVW1WdVpHVnlVM1JsY0NoemRHRnlkRkpsYm1SbGNreHZiM0FwTzF4dVkyOXVjM1FnWm5KaGJXVlNaVzVrWlhJZ1BTQmpjbVZoZEdWU1pXNWtaWEpUZEdWd0tITjBZWEowVW1WdVpHVnlURzl2Y0NrN1hHNWpiMjV6ZENCbWNtRnRaVVZ1WkNBOUlHTnlaV0YwWlZKbGJtUmxjbE4wWlhBb2MzUmhjblJTWlc1a1pYSk1iMjl3S1R0Y2JseHVablZ1WTNScGIyNGdjSEp2WTJWemMwWnlZVzFsS0daeVlXMWxjM1JoYlhBcElIdGNiaUFnZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNBOUlHWmhiSE5sTzF4dUlDQmxiR0Z3YzJWa0lEMGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9abkpoYldWemRHRnRjQ0F0SUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TENCTlFWaGZSVXhCVUZORlJDa3NJREVwSUNvZ1pHbHNZWFJwYjI0N1hHNGdJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdJRDBnWm5KaGJXVnpkR0Z0Y0R0Y2JseHVJQ0JtY21GdFpWTjBZWEowTG5CeWIyTmxjM01vS1R0Y2JpQWdabkpoYldWVmNHUmhkR1V1Y0hKdlkyVnpjeWdwTzF4dUlDQm1jbUZ0WlZKbGJtUmxjaTV3Y205alpYTnpLQ2s3WEc0Z0lHWnlZVzFsUlc1a0xuQnliMk5sYzNNb0tUdGNibjFjYmx4dVpYaHdiM0owSUdOdmJuTjBJRzl1Um5KaGJXVlRkR0Z5ZENBOUlHWnlZVzFsVTNSaGNuUXVjMk5vWldSMWJHVTdYRzVsZUhCdmNuUWdZMjl1YzNRZ2IyNUdjbUZ0WlZWd1pHRjBaU0E5SUdaeVlXMWxWWEJrWVhSbExuTmphR1ZrZFd4bE8xeHVaWGh3YjNKMElHTnZibk4wSUc5dVJuSmhiV1ZTWlc1a1pYSWdQU0JtY21GdFpWSmxibVJsY2k1elkyaGxaSFZzWlR0Y2JtVjRjRzl5ZENCamIyNXpkQ0J2YmtaeVlXMWxSVzVrSUQwZ1puSmhiV1ZGYm1RdWMyTm9aV1IxYkdVN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWTjBZWEowSUQwZ1puSmhiV1ZUZEdGeWRDNWpZVzVqWld3N1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlNBOUlHWnlZVzFsVlhCa1lYUmxMbU5oYm1ObGJEdGNibVY0Y0c5eWRDQmpiMjV6ZENCallXNWpaV3hQYmtaeVlXMWxVbVZ1WkdWeUlEMGdabkpoYldWU1pXNWtaWEl1WTJGdVkyVnNPMXh1Wlhod2IzSjBJR052Ym5OMElHTmhibU5sYkU5dVJuSmhiV1ZGYm1RZ1BTQm1jbUZ0WlVWdVpDNWpZVzVqWld3N1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ1BTQW9LU0E5UGlCbGJHRndjMlZrTzF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUkdjbUZ0WlZScGJXVnpkR0Z0Y0NBOUlDZ3BJRDArSUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFjdGlvbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyk7XG5cbiAgICB0aGlzLnNldFByb3BzKHByb3BzKTtcblxuICAgIHRoaXMuY3VycmVudCA9IHByb3BzLmN1cnJlbnQgfHwgMDtcbiAgfVxuXG4gIEFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25TdGFydCA9IF9wcm9wcy5vblN0YXJ0LFxuICAgICAgICBfb25TdGFydCA9IF9wcm9wcy5fb25TdGFydCxcbiAgICAgICAgcGFzc2l2ZSA9IF9wcm9wcy5wYXNzaXZlO1xuXG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy51cGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RhcnQpIHRoaXMub25TdGFydCgpO1xuICAgIGlmIChvblN0YXJ0KSBvblN0YXJ0KHRoaXMpO1xuICAgIGlmIChfb25TdGFydCkgX29uU3RhcnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25TdG9wID0gX3Byb3BzMi5vblN0b3AsXG4gICAgICAgIF9vblN0b3AgPSBfcHJvcHMyLl9vblN0b3AsXG4gICAgICAgIHBhc3NpdmUgPSBfcHJvcHMyLnBhc3NpdmU7XG5cblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgKDAsIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVVwZGF0ZSkodGhpcy51cGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RvcCkgdGhpcy5vblN0b3AoKTtcbiAgICBpZiAob25TdG9wKSBvblN0b3AodGhpcyk7XG4gICAgaWYgKF9vblN0b3ApIF9vblN0b3AodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICBvbkNvbXBsZXRlID0gX3Byb3BzMy5vbkNvbXBsZXRlLFxuICAgICAgICBfb25Db21wbGV0ZSA9IF9wcm9wczMuX29uQ29tcGxldGU7XG5cblxuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKHRoaXMpO1xuICAgIGlmIChfb25Db21wbGV0ZSkgX29uQ29tcGxldGUodGhpcyk7XG5cbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCk7XG4gICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50O1xuXG4gICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICBvblVwZGF0ZSA9IF9wcm9wczQub25VcGRhdGUsXG4gICAgICAgIHBhc3NpdmUgPSBfcHJvcHM0LnBhc3NpdmU7XG5cblxuICAgIGlmICh0aGlzLm9uVXBkYXRlKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLm9uVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKG9uVXBkYXRlKSBvblVwZGF0ZSh0aGlzLmN1cnJlbnQsIHRoaXMpO1xuICAgIHRoaXMuZmlyZUxpc3RlbmVycygpO1xuXG4gICAgaWYgKCFwYXNzaXZlICYmIHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKHRoaXMudXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0FjdGlvbkNvbXBsZXRlICYmIHRoaXMuaXNBY3Rpb25Db21wbGV0ZSgpKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zZXRQcm9wcyA9IGZ1bmN0aW9uIHNldFByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCBwcm9wcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldFByb3AgPSBmdW5jdGlvbiBnZXRQcm9wKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzW2tleV07XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXRWZWxvY2l0eSA9IGZ1bmN0aW9uIGdldFZlbG9jaXR5KCkge1xuICAgIHJldHVybiAoMCwgX2NhbGMuc3BlZWRQZXJTZWNvbmQpKHRoaXMucHJldiAtIHRoaXMuY3VycmVudCwgdGhpcy5sYXN0VXBkYXRlZCk7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycyB8fCBbXTtcbiAgICB0aGlzLm51bUxpc3RlbmVycyA9IHRoaXMubnVtTGlzdGVuZXJzIHx8IDA7XG4gICAgaWYgKHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpID09PSAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycysrO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB2YXIgbGlzdGVuZXJJbmRleCA9IHRoaXMubGlzdGVuZXJzID8gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgOiAtMTtcbiAgICBpZiAobGlzdGVuZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzLS07XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UobGlzdGVuZXJJbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZmlyZUxpc3RlbmVycyA9IGZ1bmN0aW9uIGZpcmVMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmdldCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1MaXN0ZW5lcnM7IGkrKykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbaV0oY3VycmVudCwgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBBY3Rpb247XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYklrRmpkR2x2YmlJc0luQnliM0J6SWl3aWRYQmtZWFJsSWl3aVltbHVaQ0lzSW1OdmJuTjBjblZqZEc5eUlpd2laR1ZtWVhWc2RGQnliM0J6SWl3aWMyVjBVSEp2Y0hNaUxDSmpkWEp5Wlc1MElpd2ljM1JoY25RaUxDSnZibE4wWVhKMElpd2lYMjl1VTNSaGNuUWlMQ0p3WVhOemFYWmxJaXdpYVhOQlkzUnBkbVVpTENKemRHOXdJaXdpYjI1VGRHOXdJaXdpWDI5dVUzUnZjQ0lzSW1OdmJYQnNaWFJsSWl3aWIyNURiMjF3YkdWMFpTSXNJbDl2YmtOdmJYQnNaWFJsSWl3aWJHRnpkRlZ3WkdGMFpXUWlMQ0p3Y21WMklpd2liMjVWY0dSaGRHVWlMQ0ptYVhKbFRHbHpkR1Z1WlhKeklpd2lhWE5CWTNScGIyNURiMjF3YkdWMFpTSXNJbWRsZENJc0ltZGxkRkJ5YjNBaUxDSnJaWGtpTENKblpYUldaV3h2WTJsMGVTSXNJbUZrWkV4cGMzUmxibVZ5SWl3aWJHbHpkR1Z1WlhJaUxDSnNhWE4wWlc1bGNuTWlMQ0p1ZFcxTWFYTjBaVzVsY25NaUxDSnBibVJsZUU5bUlpd2ljSFZ6YUNJc0luSmxiVzkyWlV4cGMzUmxibVZ5SWl3aWJHbHpkR1Z1WlhKSmJtUmxlQ0lzSW5Od2JHbGpaU0lzSW1raVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3p0QlFVTkJPenM3TzBsQlJVMUJMRTA3UVVGRFNpeHJRa0ZCV1VNc1MwRkJXaXhGUVVGdFFqdEJRVUZCT3p0QlFVTnFRaXhUUVVGTFF5eE5RVUZNTEVkQlFXTXNTMEZCUzBFc1RVRkJUQ3hEUVVGWlF5eEpRVUZhTEVOQlFXbENMRWxCUVdwQ0xFTkJRV1E3TzBGQlJVRXNVMEZCUzBZc1MwRkJUQ3huUWtGRFN5eExRVUZMUnl4WFFVRk1MRU5CUVdsQ1F5eFpRVVIwUWpzN1FVRkpRU3hUUVVGTFF5eFJRVUZNTEVOQlFXTk1MRXRCUVdRN08wRkJSVUVzVTBGQlMwMHNUMEZCVEN4SFFVRmxUaXhOUVVGTlRTeFBRVUZPTEVsQlFXbENMRU5CUVdoRE8wRkJRMFE3TzIxQ1FVVkVReXhMTEc5Q1FVRlJPMEZCUVVFc2FVSkJRMmxETEV0QlFVdFFMRXRCUkhSRE8wRkJRVUVzVVVGRFJWRXNUMEZFUml4VlFVTkZRU3hQUVVSR08wRkJRVUVzVVVGRFYwTXNVVUZFV0N4VlFVTlhRU3hSUVVSWU8wRkJRVUVzVVVGRGNVSkRMRTlCUkhKQ0xGVkJRM0ZDUVN4UFFVUnlRanM3TzBGQlIwNHNVVUZCU1N4RFFVRkRRU3hQUVVGTUxFVkJRV003UVVGRFdpeFhRVUZMUXl4UlFVRk1MRWRCUVdkQ0xFbEJRV2hDTzBGQlEwRXNiME5CUVdNc1MwRkJTMVlzVFVGQmJrSTdRVUZEUkRzN1FVRkZSQ3hSUVVGSkxFdEJRVXRQTEU5QlFWUXNSVUZCYTBJc1MwRkJTMEVzVDBGQlREdEJRVU5zUWl4UlFVRkpRU3hQUVVGS0xFVkJRV0ZCTEZGQlFWRXNTVUZCVWp0QlFVTmlMRkZCUVVsRExGRkJRVW9zUlVGQlkwRXNVMEZCVXl4SlFVRlVPenRCUVVWa0xGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08yMUNRVVZFUnl4SkxHMUNRVUZQTzBGQlFVRXNhMEpCUTJkRExFdEJRVXRhTEV0QlJISkRPMEZCUVVFc1VVRkRSMkVzVFVGRVNDeFhRVU5IUVN4TlFVUklPMEZCUVVFc1VVRkRWME1zVDBGRVdDeFhRVU5YUVN4UFFVUllPMEZCUVVFc1VVRkRiMEpLTEU5QlJIQkNMRmRCUTI5Q1FTeFBRVVJ3UWpzN08wRkJSMHdzVVVGQlNTeERRVUZEUVN4UFFVRk1MRVZCUVdNN1FVRkRXaXhYUVVGTFF5eFJRVUZNTEVkQlFXZENMRXRCUVdoQ08wRkJRMEVzTUVOQlFXOUNMRXRCUVV0V0xFMUJRWHBDTzBGQlEwUTdPMEZCUlVRc1VVRkJTU3hMUVVGTFdTeE5RVUZVTEVWQlFXbENMRXRCUVV0QkxFMUJRVXc3UVVGRGFrSXNVVUZCU1VFc1RVRkJTaXhGUVVGWlFTeFBRVUZQTEVsQlFWQTdRVUZEV2l4UlFVRkpReXhQUVVGS0xFVkJRV0ZCTEZGQlFWRXNTVUZCVWpzN1FVRkZZaXhYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJFTXNVU3gxUWtGQlZ6dEJRVUZCTEd0Q1FVTXlRaXhMUVVGTFppeExRVVJvUXp0QlFVRkJMRkZCUTBSblFpeFZRVVJETEZkQlEwUkJMRlZCUkVNN1FVRkJRU3hSUVVOWFF5eFhRVVJZTEZkQlExZEJMRmRCUkZnN096dEJRVWRVTEZGQlFVa3NTMEZCUzBRc1ZVRkJWQ3hGUVVGeFFpeExRVUZMUVN4VlFVRk1PMEZCUTNKQ0xGRkJRVWxCTEZWQlFVb3NSVUZCWjBKQkxGZEJRVmNzU1VGQldEdEJRVU5vUWl4UlFVRkpReXhYUVVGS0xFVkJRV2xDUVN4WlFVRlpMRWxCUVZvN08wRkJSV3BDTEZOQlFVdE1MRWxCUVV3N08wRkJSVUVzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YlVKQlJVUllMRTBzY1VKQlFWTTdRVUZEVUN4VFFVRkxhVUlzVjBGQlRDeEhRVUZ0UWl4dlEwRkJia0k3UVVGRFFTeFRRVUZMUXl4SlFVRk1MRWRCUVZrc1MwRkJTMklzVDBGQmFrSTdPMEZCUms4c2EwSkJTWFZDTEV0QlFVdE9MRXRCU2pWQ08wRkJRVUVzVVVGSlEyOUNMRkZCU2tRc1YwRkpRMEVzVVVGS1JEdEJRVUZCTEZGQlNWZFdMRTlCU2xnc1YwRkpWMEVzVDBGS1dEczdPMEZCVFZBc1VVRkJTU3hMUVVGTFZTeFJRVUZVTEVWQlFXMUNPMEZCUTJwQ0xGZEJRVXRrTEU5QlFVd3NSMEZCWlN4TFFVRkxZeXhSUVVGTUxFVkJRV1k3UVVGRFJEczdRVUZGUkN4UlFVRkpRU3hSUVVGS0xFVkJRV05CTEZOQlFWTXNTMEZCUzJRc1QwRkJaQ3hGUVVGMVFpeEpRVUYyUWp0QlFVTmtMRk5CUVV0bExHRkJRVXc3TzBGQlJVRXNVVUZCU1N4RFFVRkRXQ3hQUVVGRUxFbEJRVmtzUzBGQlMwTXNVVUZCY2tJc1JVRkJLMEk3UVVGRE4wSXNiME5CUVdNc1MwRkJTMVlzVFVGQmJrSTdRVUZEUkRzN1FVRkZSQ3hSUVVGSkxFdEJRVXR4UWl4blFrRkJUQ3hKUVVGNVFpeExRVUZMUVN4blFrRkJUQ3hGUVVFM1FpeEZRVUZ6UkR0QlFVTndSQ3hYUVVGTFVDeFJRVUZNTzBGQlEwUTdPMEZCUlVRc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN2JVSkJSVVJXTEZFc2NVSkJRVk5NTEVzc1JVRkJUenRCUVVOa0xGTkJRVXRCTEV0QlFVd3NaMEpCUTBzc1MwRkJTMEVzUzBGRVZpeEZRVVZMUVN4TFFVWk1PMEZCU1VFc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN2JVSkJSVVIxUWl4SExHdENRVUZOTzBGQlEwb3NWMEZCVHl4TFFVRkxha0lzVDBGQldqdEJRVU5FTEVjN08yMUNRVVZFYTBJc1R5eHZRa0ZCVVVNc1J5eEZRVUZMTzBGQlExZ3NWMEZCVHl4TFFVRkxla0lzUzBGQlRDeERRVUZYZVVJc1IwRkJXQ3hEUVVGUU8wRkJRMFFzUnpzN2JVSkJSVVJETEZjc01FSkJRV003UVVGRFdpeFhRVUZQTERCQ1FVRmxMRXRCUVV0UUxFbEJRVXdzUjBGQldTeExRVUZMWWl4UFFVRm9ReXhGUVVGNVF5eExRVUZMV1N4WFFVRTVReXhEUVVGUU8wRkJRMFFzUnpzN2JVSkJSVVJUTEZjc2QwSkJRVmxETEZFc1JVRkJWVHRCUVVOd1FpeFRRVUZMUXl4VFFVRk1MRWRCUVdsQ0xFdEJRVXRCTEZOQlFVd3NTVUZCYTBJc1JVRkJia003UVVGRFFTeFRRVUZMUXl4WlFVRk1MRWRCUVc5Q0xFdEJRVXRCTEZsQlFVd3NTVUZCY1VJc1EwRkJla003UVVGRFFTeFJRVUZKTEV0QlFVdEVMRk5CUVV3c1EwRkJaVVVzVDBGQlppeERRVUYxUWtnc1VVRkJka0lzVFVGQmNVTXNRMEZCUXl4RFFVRXhReXhGUVVFMlF6dEJRVU16UXl4WFFVRkxReXhUUVVGTUxFTkJRV1ZITEVsQlFXWXNRMEZCYjBKS0xGRkJRWEJDTzBGQlEwRXNWMEZCUzBVc1dVRkJURHRCUVVORU8wRkJRMFFzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YlVKQlJVUkhMR01zTWtKQlFXVk1MRkVzUlVGQlZUdEJRVU4yUWl4UlFVRk5UU3huUWtGQmFVSXNTMEZCUzB3c1UwRkJUaXhIUVVGdFFpeExRVUZMUVN4VFFVRk1MRU5CUVdWRkxFOUJRV1lzUTBGQmRVSklMRkZCUVhaQ0xFTkJRVzVDTEVkQlFYTkVMRU5CUVVNc1EwRkJOMFU3UVVGRFFTeFJRVUZKVFN4clFrRkJhMElzUTBGQlF5eERRVUYyUWl4RlFVRXdRanRCUVVONFFpeFhRVUZMU2l4WlFVRk1PMEZCUTBFc1YwRkJTMFFzVTBGQlRDeERRVUZsVFN4TlFVRm1MRU5CUVhOQ1JDeGhRVUYwUWl4RlFVRnhReXhEUVVGeVF6dEJRVU5FTzBGQlEwUXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdiVUpCUlVSaUxHRXNORUpCUVdkQ08wRkJRMlFzVVVGQlRXWXNWVUZCVlN4TFFVRkxhVUlzUjBGQlRDeEZRVUZvUWp0QlFVTkJMRk5CUVVzc1NVRkJTV0VzU1VGQlNTeERRVUZpTEVWQlFXZENRU3hKUVVGSkxFdEJRVXRPTEZsQlFYcENMRVZCUVhWRFRTeEhRVUYyUXl4RlFVRTBRenRCUVVNeFF5eFhRVUZMVUN4VFFVRk1MRU5CUVdWUExFTkJRV1lzUlVGQmEwSTVRaXhQUVVGc1FpeEZRVUV5UWl4SlFVRXpRanRCUVVORU8wRkJRMFFzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3T3pzN2EwSkJSMWxRTEUwaUxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJ2YmtaeVlXMWxWWEJrWVhSbExDQmpZVzVqWld4UGJrWnlZVzFsVlhCa1lYUmxMQ0IwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VnZlNCbWNtOXRJQ2N1TGk5bWNtRnRaWE41Ym1Nbk8xeHVhVzF3YjNKMElIc2djM0JsWldSUVpYSlRaV052Ym1RZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVjYm1Oc1lYTnpJRUZqZEdsdmJpQjdYRzRnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6S1NCN1hHNGdJQ0FnZEdocGN5NTFjR1JoZEdVZ1BTQjBhR2x6TG5Wd1pHRjBaUzVpYVc1a0tIUm9hWE1wTzF4dVhHNGdJQ0FnZEdocGN5NXdjbTl3Y3lBOUlIdGNiaUFnSUNBZ0lDNHVMblJvYVhNdVkyOXVjM1J5ZFdOMGIzSXVaR1ZtWVhWc2RGQnliM0J6WEc0Z0lDQWdmVHRjYmx4dUlDQWdJSFJvYVhNdWMyVjBVSEp2Y0hNb2NISnZjSE1wTzF4dVhHNGdJQ0FnZEdocGN5NWpkWEp5Wlc1MElEMGdjSEp2Y0hNdVkzVnljbVZ1ZENCOGZDQXdPMXh1SUNCOVhHNWNiaUFnYzNSaGNuUW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QnZibE4wWVhKMExDQmZiMjVUZEdGeWRDd2djR0Z6YzJsMlpTQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JseHVJQ0FnSUdsbUlDZ2hjR0Z6YzJsMlpTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1cGMwRmpkR2wyWlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0J2YmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11ZFhCa1lYUmxLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NXZibE4wWVhKMEtTQjBhR2x6TG05dVUzUmhjblFvS1R0Y2JpQWdJQ0JwWmlBb2IyNVRkR0Z5ZENrZ2IyNVRkR0Z5ZENoMGFHbHpLVHRjYmlBZ0lDQnBaaUFvWDI5dVUzUmhjblFwSUY5dmJsTjBZWEowS0hSb2FYTXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCemRHOXdLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2diMjVUZEc5d0xDQmZiMjVUZEc5d0xDQndZWE56YVhabElIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tDRndZWE56YVhabEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG1selFXTjBhWFpsSUQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0JqWVc1alpXeFBia1p5WVcxbFZYQmtZWFJsS0hSb2FYTXVkWEJrWVhSbEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9kR2hwY3k1dmJsTjBiM0FwSUhSb2FYTXViMjVUZEc5d0tDazdYRzRnSUNBZ2FXWWdLRzl1VTNSdmNDa2diMjVUZEc5d0tIUm9hWE1wTzF4dUlDQWdJR2xtSUNoZmIyNVRkRzl3S1NCZmIyNVRkRzl3S0hSb2FYTXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCamIyMXdiR1YwWlNncElIdGNiaUFnSUNCamIyNXpkQ0I3SUc5dVEyOXRjR3hsZEdVc0lGOXZia052YlhCc1pYUmxJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWIyNURiMjF3YkdWMFpTa2dkR2hwY3k1dmJrTnZiWEJzWlhSbEtDazdYRzRnSUNBZ2FXWWdLRzl1UTI5dGNHeGxkR1VwSUc5dVEyOXRjR3hsZEdVb2RHaHBjeWs3WEc0Z0lDQWdhV1lnS0Y5dmJrTnZiWEJzWlhSbEtTQmZiMjVEYjIxd2JHVjBaU2gwYUdsektUdGNibHh1SUNBZ0lIUm9hWE11YzNSdmNDZ3BPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCMWNHUmhkR1VvS1NCN1hHNGdJQ0FnZEdocGN5NXNZWE4wVlhCa1lYUmxaQ0E5SUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNncE8xeHVJQ0FnSUhSb2FYTXVjSEpsZGlBOUlIUm9hWE11WTNWeWNtVnVkRHRjYmx4dUlDQWdJR052Ym5OMElIc2diMjVWY0dSaGRHVXNJSEJoYzNOcGRtVWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCcFppQW9kR2hwY3k1dmJsVndaR0YwWlNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJRDBnZEdocGN5NXZibFZ3WkdGMFpTZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2h2YmxWd1pHRjBaU2tnYjI1VmNHUmhkR1VvZEdocGN5NWpkWEp5Wlc1MExDQjBhR2x6S1R0Y2JpQWdJQ0IwYUdsekxtWnBjbVZNYVhOMFpXNWxjbk1vS1R0Y2JseHVJQ0FnSUdsbUlDZ2hjR0Z6YzJsMlpTQW1KaUIwYUdsekxtbHpRV04wYVhabEtTQjdYRzRnSUNBZ0lDQnZia1p5WVcxbFZYQmtZWFJsS0hSb2FYTXVkWEJrWVhSbEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9kR2hwY3k1cGMwRmpkR2x2YmtOdmJYQnNaWFJsSUNZbUlIUm9hWE11YVhOQlkzUnBiMjVEYjIxd2JHVjBaU2dwS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbU52YlhCc1pYUmxLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCelpYUlFjbTl3Y3lod2NtOXdjeWtnZTF4dUlDQWdJSFJvYVhNdWNISnZjSE1nUFNCN1hHNGdJQ0FnSUNBdUxpNTBhR2x6TG5CeWIzQnpMRnh1SUNBZ0lDQWdMaTR1Y0hKdmNITmNiaUFnSUNCOU8xeHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdaMlYwS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtTjFjbkpsYm5RN1hHNGdJSDFjYmx4dUlDQm5aWFJRY205d0tHdGxlU2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5CeWIzQnpXMnRsZVYwN1hHNGdJSDFjYmx4dUlDQm5aWFJXWld4dlkybDBlU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjM0JsWldSUVpYSlRaV052Ym1Rb2RHaHBjeTV3Y21WMklDMGdkR2hwY3k1amRYSnlaVzUwTENCMGFHbHpMbXhoYzNSVmNHUmhkR1ZrS1R0Y2JpQWdmVnh1WEc0Z0lHRmtaRXhwYzNSbGJtVnlLR3hwYzNSbGJtVnlLU0I3WEc0Z0lDQWdkR2hwY3k1c2FYTjBaVzVsY25NZ1BTQjBhR2x6TG14cGMzUmxibVZ5Y3lCOGZDQmJYVHRjYmlBZ0lDQjBhR2x6TG01MWJVeHBjM1JsYm1WeWN5QTlJSFJvYVhNdWJuVnRUR2x6ZEdWdVpYSnpJSHg4SURBN1hHNGdJQ0FnYVdZZ0tIUm9hWE11YkdsemRHVnVaWEp6TG1sdVpHVjRUMllvYkdsemRHVnVaWElwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXNhWE4wWlc1bGNuTXVjSFZ6YUNoc2FYTjBaVzVsY2lrN1hHNGdJQ0FnSUNCMGFHbHpMbTUxYlV4cGMzUmxibVZ5Y3lzck8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lISmxiVzkyWlV4cGMzUmxibVZ5S0d4cGMzUmxibVZ5S1NCN1hHNGdJQ0FnWTI5dWMzUWdiR2x6ZEdWdVpYSkpibVJsZUNBOUlDaDBhR2x6TG14cGMzUmxibVZ5Y3lrZ1B5QjBhR2x6TG14cGMzUmxibVZ5Y3k1cGJtUmxlRTltS0d4cGMzUmxibVZ5S1NBNklDMHhPMXh1SUNBZ0lHbG1JQ2hzYVhOMFpXNWxja2x1WkdWNElDRTlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV1ZFcxTWFYTjBaVzVsY25NdExUdGNiaUFnSUNBZ0lIUm9hWE11YkdsemRHVnVaWEp6TG5Od2JHbGpaU2hzYVhOMFpXNWxja2x1WkdWNExDQXhLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0JtYVhKbFRHbHpkR1Z1WlhKektDa2dlMXh1SUNBZ0lHTnZibk4wSUdOMWNuSmxiblFnUFNCMGFHbHpMbWRsZENncE8xeHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTV1ZFcxTWFYTjBaVzVsY25NN0lHa3JLeWtnZTF4dUlDQWdJQ0FnZEdocGN5NXNhWE4wWlc1bGNuTmJhVjBvWTNWeWNtVnVkQ3dnZEdocGN5azdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFRmpkR2x2Ymp0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZW5kZXJlcik7XG5cbiAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzLCBwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge307XG4gICAgdGhpcy5jaGFuZ2VkVmFsdWVzID0gW107XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgc3RhdGUuXG4gICAqIElmIGBrZXlgIGlzIG5vdCBkZWZpbmVkLCByZXR1cm4gZW50aXJlIGNhY2hlZCBzdGF0ZS5cbiAgICogSWYgYGtleWAgaXMgZGVmaW5lZCwgcmV0dXJuIGNhY2hlZCB2YWx1ZSBpZiBwcmVzZW50LlxuICAgKiBJZiBga2V5YCBpcyBkZWZpbmVkIGFuZCBjYWNoZWQgdmFsdWUgaXMgbm90IHByZXNlbnQsIHJlYWQgYW5kIHJldHVybi5cbiAgICogQHBhcmFtICB7c3RyaW5nfSAob3B0aW9uYWwpIGtleSBvZiB2YWx1ZVxuICAgKiBAcmV0dXJuIHt2YWx1ZX1cbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZChrZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlYWQgdmFsdWUgYWNjb3JkaW5nIHRvIGBvblJlYWRgXG4gICAqIEBwYXJhbSAge3N0cmluZ30gTmFtZSBvZiBwcm9wZXJ0eSB0byByZWFkXG4gICAqIEByZXR1cm4ge1t0eXBlXX1cbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uIHJlYWQoa2V5KSB7XG4gICAgaWYgKHRoaXMub25SZWFkKSB7XG4gICAgICByZXR1cm4gdGhpcy5vblJlYWQoa2V5KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBgc3RhdGVgIHdpdGggbmV3IHZhbHVlcyBhbmQgc2NoZWR1bGUgYHJlbmRlcmAuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXNcbiAgICogQHBhcmFtIHt2YWx1ZX0gdmFsdWUgdG9zZXRcbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBhcmdzWzBdO1xuICAgICAgLy8gU2V0IG11bHRpcGxlIHZhbHVlc1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCB2YWx1ZXNba2V5XSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfa2V5MiA9IGFyZ3NbMF0sXG4gICAgICAgICAgdmFsdWUgPSBhcmdzWzFdO1xuXG4gICAgICB0aGlzLnNldFZhbHVlKF9rZXkyLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCkge1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVJlbmRlcikodGhpcy5yZW5kZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uIHNldFZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZVtrZXldICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5wdXNoKGtleSk7XG4gICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpcmVzIGBvblJlbmRlcmAgaWYgdmFsdWVzIGhhdmUgY2hhbmdlZCBvciBgZm9yY2VSZW5kZXJgXG4gICAqIGlzIHNldCB0byB0cnVlLlxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGZvcmNlUmVuZGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgIGlmICgoZm9yY2VSZW5kZXIgfHwgdGhpcy5oYXNDaGFuZ2VkKSAmJiB0aGlzLm9uUmVuZGVyKSB7XG4gICAgICB0aGlzLm9uUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VkVmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gUmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlcmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2xzaVVtVnVaR1Z5WlhJaUxDSndjbTl3Y3lJc0luSmxibVJsY2lJc0ltSnBibVFpTENKamIyNXpkSEoxWTNSdmNpSXNJbVJsWm1GMWJIUlFjbTl3Y3lJc0luTjBZWFJsSWl3aVkyaGhibWRsWkZaaGJIVmxjeUlzSW1kbGRDSXNJbXRsZVNJc0luVnVaR1ZtYVc1bFpDSXNJbkpsWVdRaUxDSnZibEpsWVdRaUxDSnpaWFFpTENKaGNtZHpJaXdpZG1Gc2RXVnpJaXdpYzJWMFZtRnNkV1VpTENKMllXeDFaU0lzSW1oaGMwTm9ZVzVuWldRaUxDSndkWE5vSWl3aVptOXlZMlZTWlc1a1pYSWlMQ0p2YmxKbGJtUmxjaUlzSW14bGJtZDBhQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPenM3U1VGRlRVRXNVVHRCUVVOS0xHOUNRVUZaUXl4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlEycENMRk5CUVV0RExFMUJRVXdzUjBGQll5eExRVUZMUVN4TlFVRk1MRU5CUVZsRExFbEJRVm9zUTBGQmFVSXNTVUZCYWtJc1EwRkJaRHM3UVVGRlFTeFRRVUZMUml4TFFVRk1MR2RDUVVOTExFdEJRVXRITEZkQlFVd3NRMEZCYVVKRExGbEJSSFJDTEVWQlJVdEtMRXRCUmt3N08wRkJTMEVzVTBGQlMwc3NTMEZCVEN4SFFVRmhMRVZCUVdJN1FVRkRRU3hUUVVGTFF5eGhRVUZNTEVkQlFYRkNMRVZCUVhKQ08wRkJRMFE3TzBGQlJVUTdPenM3T3pzN096czdjVUpCVVVGRExFY3NaMEpCUVVsRExFY3NSVUZCU3p0QlFVTlFMRkZCUVVsQkxFZEJRVW9zUlVGQlV6dEJRVU5RTEZWQlFVa3NTMEZCUzBnc1MwRkJUQ3hEUVVGWFJ5eEhRVUZZTEUxQlFXOUNReXhUUVVGNFFpeEZRVUZ0UXp0QlFVTnFReXhsUVVGUExFdEJRVXRLTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hEUVVGUU8wRkJRMFFzVDBGR1JDeE5RVVZQTzBGQlEwd3NaVUZCVHl4TFFVRkxSU3hKUVVGTUxFTkJRVlZHTEVkQlFWWXNRMEZCVUR0QlFVTkVPMEZCUTBZc1MwRk9SQ3hOUVUxUE8wRkJRMHdzWVVGQlR5eExRVUZMU0N4TFFVRmFPMEZCUTBRN1FVRkRSaXhIT3p0QlFVVkVPenM3T3pzN08zRkNRVXRCU3l4SkxHbENRVUZMUml4SExFVkJRVXM3UVVGRFVpeFJRVUZKTEV0QlFVdEhMRTFCUVZRc1JVRkJhVUk3UVVGRFppeGhRVUZQTEV0QlFVdEJMRTFCUVV3c1EwRkJXVWdzUjBGQldpeERRVUZRTzBGQlEwUTdRVUZEUml4SE96dEJRVVZFT3pzN096czdPM0ZDUVV0QlNTeEhMR3RDUVVGaE8wRkJRVUVzYzBOQlFVNURMRWxCUVUwN1FVRkJUa0VzVlVGQlRUdEJRVUZCT3p0QlFVTllMRkZCUVVrc1QwRkJUMEVzUzBGQlN5eERRVUZNTEVOQlFWQXNTMEZCYlVJc1YwRkJka0lzUlVGQmIwTTdRVUZCUVN4VlFVTXhRa01zVFVGRU1FSXNSMEZEWmtRc1NVRkVaVHRCUVVWc1F6czdRVUZEUVN4WFFVRkxMRWxCUVUxTUxFZEJRVmdzU1VGQmEwSk5MRTFCUVd4Q0xFVkJRVEJDTzBGQlEzaENMR0ZCUVV0RExGRkJRVXdzUTBGQlkxQXNSMEZCWkN4RlFVRnRRazBzVDBGQlQwNHNSMEZCVUN4RFFVRnVRanRCUVVORU8wRkJRMFlzUzBGT1JDeE5RVTFQTzBGQlFVRXNWVUZEUjBFc1MwRkVTQ3hIUVVOclFrc3NTVUZFYkVJN1FVRkJRU3hWUVVOUlJ5eExRVVJTTEVkQlEydENTQ3hKUVVSc1FqczdRVUZGVEN4WFFVRkxSU3hSUVVGTUxFTkJRV05RTEV0QlFXUXNSVUZCYlVKUkxFdEJRVzVDTzBGQlEwUTdPMEZCUlVRc1VVRkJTU3hMUVVGTFF5eFZRVUZVTEVWQlFYRkNPMEZCUTI1Q0xHOURRVUZqTEV0QlFVdG9RaXhOUVVGdVFqdEJRVU5FT3p0QlFVVkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPM0ZDUVVWRVl5eFJMSEZDUVVGVFVDeEhMRVZCUVV0UkxFc3NSVUZCVHp0QlFVTnVRaXhSUVVGSkxFdEJRVXRZTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hOUVVGdlFsRXNTMEZCZUVJc1JVRkJLMEk3UVVGRE4wSXNWMEZCUzBNc1ZVRkJUQ3hIUVVGclFpeEpRVUZzUWp0QlFVTkJMRmRCUVV0WUxHRkJRVXdzUTBGQmJVSlpMRWxCUVc1Q0xFTkJRWGRDVml4SFFVRjRRanRCUVVOQkxGZEJRVXRJTEV0QlFVd3NRMEZCVjBjc1IwRkJXQ3hKUVVGclFsRXNTMEZCYkVJN1FVRkRSRHRCUVVOR0xFYzdPMEZCUlVRN096czdPenM3Y1VKQlMwRm1MRTBzY1VKQlFUUkNPMEZCUVVFc1VVRkJja0pyUWl4WFFVRnhRaXgxUlVGQlVDeExRVUZQT3p0QlFVTXhRaXhSUVVGSkxFTkJRVU5CTEdWQlFXVXNTMEZCUzBZc1ZVRkJja0lzUzBGQmIwTXNTMEZCUzBjc1VVRkJOME1zUlVGQmRVUTdRVUZEY2tRc1YwRkJTMEVzVVVGQlREdEJRVU5FT3p0QlFVVkVMRk5CUVV0a0xHRkJRVXdzUTBGQmJVSmxMRTFCUVc1Q0xFZEJRVFJDTEVOQlFUVkNPMEZCUTBFc1UwRkJTMG9zVlVGQlRDeEhRVUZyUWl4TFFVRnNRanM3UVVGRlFTeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96czdPenRyUWtGSFdXeENMRkVpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnZia1p5WVcxbFVtVnVaR1Z5SUgwZ1puSnZiU0FuTGk0dlpuSmhiV1Z6ZVc1akp6dGNibHh1WTJ4aGMzTWdVbVZ1WkdWeVpYSWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVjbVZ1WkdWeUlEMGdkR2hwY3k1eVpXNWtaWEl1WW1sdVpDaDBhR2x6S1R0Y2JseHVJQ0FnSUhSb2FYTXVjSEp2Y0hNZ1BTQjdYRzRnSUNBZ0lDQXVMaTUwYUdsekxtTnZibk4wY25WamRHOXlMbVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUM0dUxuQnliM0J6WEc0Z0lDQWdmVHRjYmx4dUlDQWdJSFJvYVhNdWMzUmhkR1VnUFNCN2ZUdGNiaUFnSUNCMGFHbHpMbU5vWVc1blpXUldZV3gxWlhNZ1BTQmJYVHRjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCSFpYUWdZM1Z5Y21WdWRDQnpkR0YwWlM1Y2JpQWdJQ29nU1dZZ1lHdGxlV0FnYVhNZ2JtOTBJR1JsWm1sdVpXUXNJSEpsZEhWeWJpQmxiblJwY21VZ1kyRmphR1ZrSUhOMFlYUmxMbHh1SUNBZ0tpQkpaaUJnYTJWNVlDQnBjeUJrWldacGJtVmtMQ0J5WlhSMWNtNGdZMkZqYUdWa0lIWmhiSFZsSUdsbUlIQnlaWE5sYm5RdVhHNGdJQ0FxSUVsbUlHQnJaWGxnSUdseklHUmxabWx1WldRZ1lXNWtJR05oWTJobFpDQjJZV3gxWlNCcGN5QnViM1FnY0hKbGMyVnVkQ3dnY21WaFpDQmhibVFnY21WMGRYSnVMbHh1SUNBZ0tpQkFjR0Z5WVcwZ0lIdHpkSEpwYm1kOUlDaHZjSFJwYjI1aGJDa2dhMlY1SUc5bUlIWmhiSFZsWEc0Z0lDQXFJRUJ5WlhSMWNtNGdlM1poYkhWbGZWeHVJQ0FnS2k5Y2JpQWdaMlYwS0d0bGVTa2dlMXh1SUNBZ0lHbG1JQ2hyWlhrcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxuTjBZWFJsVzJ0bGVWMGdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV6ZEdGMFpWdHJaWGxkTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWNtVmhaQ2hyWlhrcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1emRHRjBaVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nVW1WaFpDQjJZV3gxWlNCaFkyTnZjbVJwYm1jZ2RHOGdZRzl1VW1WaFpHQmNiaUFnSUNvZ1FIQmhjbUZ0SUNCN2MzUnlhVzVuZlNCT1lXMWxJRzltSUhCeWIzQmxjblI1SUhSdklISmxZV1JjYmlBZ0lDb2dRSEpsZEhWeWJpQjdXM1I1Y0dWZGZWeHVJQ0FnS2k5Y2JpQWdjbVZoWkNoclpYa3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXZibEpsWVdRcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTl1VW1WaFpDaHJaWGtwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCVmNHUmhkR1VnWUhOMFlYUmxZQ0IzYVhSb0lHNWxkeUIyWVd4MVpYTWdZVzVrSUhOamFHVmtkV3hsSUdCeVpXNWtaWEpnTGx4dUlDQWdLaUJBY0dGeVlXMGdlMjlpYW1WamRIMGdkbUZzZFdWelhHNGdJQ0FxSUVCd1lYSmhiU0I3ZG1Gc2RXVjlJSFpoYkhWbElIUnZjMlYwWEc0Z0lDQXFMMXh1SUNCelpYUW9MaTR1WVhKbmN5a2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdZWEpuYzFzeFhTQTlQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBZ0lHTnZibk4wSUZzZ2RtRnNkV1Z6SUYwZ1BTQmhjbWR6TzF4dUlDQWdJQ0FnTHk4Z1UyVjBJRzExYkhScGNHeGxJSFpoYkhWbGMxeHVJQ0FnSUNBZ1ptOXlJQ2hqYjI1emRDQnJaWGtnYVc0Z2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJWMFZtRnNkV1VvYTJWNUxDQjJZV3gxWlhOYmEyVjVYU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHTnZibk4wSUZzZ2EyVjVMQ0IyWVd4MVpTQmRJRDBnWVhKbmN6dGNiaUFnSUNBZ0lIUm9hWE11YzJWMFZtRnNkV1VvYTJWNUxDQjJZV3gxWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YUdGelEyaGhibWRsWkNrZ2UxeHVJQ0FnSUNBZ2IyNUdjbUZ0WlZKbGJtUmxjaWgwYUdsekxuSmxibVJsY2lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnpaWFJXWVd4MVpTaHJaWGtzSUhaaGJIVmxLU0I3WEc0Z0lDQWdhV1lnS0hSb2FYTXVjM1JoZEdWYmEyVjVYU0FoUFQwZ2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQjBhR2x6TG1Ob1lXNW5aV1JXWVd4MVpYTXVjSFZ6YUNoclpYa3BPMXh1SUNBZ0lDQWdkR2hwY3k1emRHRjBaVnRyWlhsZElEMGdkbUZzZFdVN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ0x5b3FYRzRnSUNBcUlFWnBjbVZ6SUdCdmJsSmxibVJsY21BZ2FXWWdkbUZzZFdWeklHaGhkbVVnWTJoaGJtZGxaQ0J2Y2lCZ1ptOXlZMlZTWlc1a1pYSmdYRzRnSUNBcUlHbHpJSE5sZENCMGJ5QjBjblZsTGx4dUlDQWdLaUJBY21WMGRYSnVJSHQwYUdsemZWeHVJQ0FnS2k5Y2JpQWdjbVZ1WkdWeUtHWnZjbU5sVW1WdVpHVnlJRDBnWm1Gc2MyVXBJSHRjYmlBZ0lDQnBaaUFvS0dadmNtTmxVbVZ1WkdWeUlIeDhJSFJvYVhNdWFHRnpRMmhoYm1kbFpDa2dKaVlnZEdocGN5NXZibEpsYm1SbGNpa2dlMXh1SUNBZ0lDQWdkR2hwY3k1dmJsSmxibVJsY2lncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhSb2FYTXVZMmhoYm1kbFpGWmhiSFZsY3k1c1pXNW5kR2dnUFNBd08xeHVJQ0FnSUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ0E5SUdaaGJITmxPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVW1WdVpHVnlaWEk3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IENTU1JlbmRlcmVyKF9leHRlbmRzKHtcbiAgICBlbGVtZW50OiBlbGVtZW50XG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX3JlbmRlciA9IHJlcXVpcmUoJy4vcmVuZGVyJyk7XG5cbnZhciBfcmVuZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbmRlcik7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDU1NSZW5kZXJlciA9IGZ1bmN0aW9uIChfUmVuZGVyZXIpIHtcbiAgX2luaGVyaXRzKENTU1JlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIENTU1JlbmRlcmVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDU1NSZW5kZXJlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ1NTUmVuZGVyZXIucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGVsZW1lbnQgPSBfcHJvcHMuZWxlbWVudCxcbiAgICAgICAgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24gPSBfcHJvcHMuZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb247XG5cbiAgICAoMCwgX3JlbmRlcjIuZGVmYXVsdCkoZWxlbWVudCwgdGhpcy5zdGF0ZSwgdGhpcy5jaGFuZ2VkVmFsdWVzLCBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbik7XG4gIH07XG5cbiAgQ1NTUmVuZGVyZXIucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZChrZXkpIHtcbiAgICB2YXIgdmFsdWVUeXBlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRba2V5XTtcblxuICAgIGlmICghX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgICB2YXIgZG9tVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVsoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShrZXkpXSB8fCAwO1xuICAgICAgcmV0dXJuIHZhbHVlVHlwZSAmJiB2YWx1ZVR5cGUucGFyc2UgPyB2YWx1ZVR5cGUucGFyc2UoZG9tVmFsdWUpIDogZG9tVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZVR5cGUuZGVmYXVsdCB8fCAwO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ1NTUmVuZGVyZXI7XG59KF8yLmRlZmF1bHQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJbVZzWlcxbGJuUWlMQ0p3Y205d2N5SXNJa05UVTFKbGJtUmxjbVZ5SWl3aWIyNVNaVzVrWlhJaUxDSmxibUZpYkdWSVlYSmtkMkZ5WlVGalkyVnNaWEpoZEdsdmJpSXNJbk4wWVhSbElpd2lZMmhoYm1kbFpGWmhiSFZsY3lJc0ltOXVVbVZoWkNJc0ltdGxlU0lzSW5aaGJIVmxWSGx3WlNJc0ltUnZiVlpoYkhWbElpd2lkMmx1Wkc5M0lpd2laMlYwUTI5dGNIVjBaV1JUZEhsc1pTSXNJbkJoY25ObElpd2laR1ZtWVhWc2RDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMnRDUVhsQ1pTeFZRVUZWUVN4UFFVRldMRVZCUVcxQ1F5eExRVUZ1UWl4RlFVRXdRanRCUVVOMlF5eFRRVUZQTEVsQlFVbERMRmRCUVVvN1FVRkRURVk3UVVGRVN5eExRVVZHUXl4TFFVWkZMRVZCUVZBN1FVRkpSQ3hET3p0QlFUbENSRHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3T3pzN096czdTVUZGVFVNc1Z6czdPenM3T3pzN08zZENRVU5LUXl4UkxIVkNRVUZYTzBGQlFVRXNhVUpCUTNWRExFdEJRVXRHTEV0QlJEVkRPMEZCUVVFc1VVRkRSRVFzVDBGRVF5eFZRVU5FUVN4UFFVUkRPMEZCUVVFc1VVRkRVVWtzTUVKQlJGSXNWVUZEVVVFc01FSkJSRkk3TzBGQlJWUXNNRUpCUVZWS0xFOUJRVllzUlVGQmJVSXNTMEZCUzBzc1MwRkJlRUlzUlVGQkswSXNTMEZCUzBNc1lVRkJjRU1zUlVGQmJVUkdMREJDUVVGdVJEdEJRVU5FTEVjN08zZENRVVZFUnl4TkxHMUNRVUZQUXl4SExFVkJRVXM3UVVGRFZpeFJRVUZOUXl4WlFVRlpMSEZDUVVGalJDeEhRVUZrTEVOQlFXeENPenRCUVVWQkxGRkJRVWtzUTBGQlF5eDVRa0ZCWlVFc1IwRkJaaXhEUVVGTUxFVkJRVEJDTzBGQlFVRXNWVUZEYUVKU0xFOUJSR2RDTEVkQlEwb3NTMEZCUzBNc1MwRkVSQ3hEUVVOb1FrUXNUMEZFWjBJN08wRkJSWGhDTEZWQlFVMVZMRmRCUVZkRExFOUJRVTlETEdkQ1FVRlFMRU5CUVhkQ1dpeFBRVUY0UWl4RlFVRnBReXhKUVVGcVF5eEZRVUYxUXl4M1FrRkJVMUVzUjBGQlZDeERRVUYyUXl4TFFVRjVSQ3hEUVVFeFJUdEJRVU5CTEdGQlFWRkRMR0ZCUVdGQkxGVkJRVlZKTEV0QlFYaENMRWRCUVdsRFNpeFZRVUZWU1N4TFFVRldMRU5CUVdkQ1NDeFJRVUZvUWl4RFFVRnFReXhIUVVFMlJFRXNVVUZCY0VVN1FVRkRSQ3hMUVVwRUxFMUJTVTg3UVVGRFRDeGhRVUZQUkN4VlFVRlZTeXhQUVVGV0xFbEJRWEZDTEVOQlFUVkNPMEZCUTBRN1FVRkRSaXhISWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGSmxibVJsY21WeUlHWnliMjBnSnk0dUx5YzdYRzVwYlhCdmNuUWdjbVZ1WkdWeVExTlRJR1p5YjIwZ0p5NHZjbVZ1WkdWeUp6dGNibWx0Y0c5eWRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lCbWNtOXRJQ2N1TDNSeVlXNXpabTl5YlMxd2NtOXdjeWM3WEc1cGJYQnZjblFnZG1Gc2RXVlVlWEJsYzAxaGNDQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpKenRjYm1sdGNHOXlkQ0J3Y21WbWFYaGxjaUJtY205dElDY3VMM0J5WldacGVHVnlKenRjYmx4dVkyeGhjM01nUTFOVFVtVnVaR1Z5WlhJZ1pYaDBaVzVrY3lCU1pXNWtaWEpsY2lCN1hHNGdJRzl1VW1WdVpHVnlLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2daV3hsYldWdWRDd2daVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnY21WdVpHVnlRMU5US0dWc1pXMWxiblFzSUhSb2FYTXVjM1JoZEdVc0lIUm9hWE11WTJoaGJtZGxaRlpoYkhWbGN5d2daVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNHBPMXh1SUNCOVhHNWNiaUFnYjI1U1pXRmtLR3RsZVNrZ2UxeHVJQ0FnSUdOdmJuTjBJSFpoYkhWbFZIbHdaU0E5SUhaaGJIVmxWSGx3WlhOTllYQmJhMlY1WFR0Y2JseHVJQ0FnSUdsbUlDZ2hkSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnWTI5dWMzUWdleUJsYkdWdFpXNTBJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUNBZ1kyOXVjM1FnWkc5dFZtRnNkV1VnUFNCM2FXNWtiM2N1WjJWMFEyOXRjSFYwWldSVGRIbHNaU2hsYkdWdFpXNTBMQ0J1ZFd4c0tWdHdjbVZtYVhobGNpaHJaWGtwWFNCOGZDQXdPMXh1SUNBZ0lDQWdjbVYwZFhKdUlDaDJZV3gxWlZSNWNHVWdKaVlnZG1Gc2RXVlVlWEJsTG5CaGNuTmxLU0EvSUhaaGJIVmxWSGx3WlM1d1lYSnpaU2hrYjIxV1lXeDFaU2tnT2lCa2IyMVdZV3gxWlR0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsVkhsd1pTNWtaV1poZFd4MElIeDhJREE3WEc0Z0lDQWdmVnh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJQ2hsYkdWdFpXNTBMQ0J3Y205d2N5a2dlMXh1SUNCeVpYUjFjbTRnYm1WM0lFTlRVMUpsYm1SbGNtVnlLSHRjYmlBZ0lDQmxiR1Z0Wlc1MExGeHVJQ0FnSUM0dUxuQnliM0J6WEc0Z0lIMHBPMXh1ZlZ4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRDb2xvclZhbHVlcyA9IGV4cG9ydHMuZmluZFZhbHVlQW5kVW5pdCA9IGV4cG9ydHMuY3JlYXRlVW5pdFR5cGUgPSBleHBvcnRzLmlzRmlyc3RDaGFycyA9IGV4cG9ydHMuY29udGFpbnMgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNldERPTUF0dHJzID0gZXhwb3J0cy5pc1N0cmluZyA9IGV4cG9ydHMuaXNPYmogPSBleHBvcnRzLmlzTnVtID0gZXhwb3J0cy5pc0Z1bmMgPSBleHBvcnRzLmlzQXJyYXkgPSBleHBvcnRzLmhhc1Byb3BlcnR5ID0gZXhwb3J0cy5jdXJyZW50VGltZSA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSB1bmRlZmluZWQ7XG5leHBvcnRzLnNwbGl0Q29sb3JWYWx1ZXMgPSBzcGxpdENvbG9yVmFsdWVzO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbnZhciBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbnZhciBIQVNfUEVSRk9STUFOQ0VfTk9XID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3c7XG5cbi8qXG4gIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xufTtcblxuLypcbiAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY2FtZWxUb0Rhc2ggPSBleHBvcnRzLmNhbWVsVG9EYXNoID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuLypcbiAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgXG4gIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG52YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLmN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xufSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgQ2hlY2sgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eSBhbmQgaXQgaXNuJ3QgdW5kZWZpbmVkXG5cbiAgQHBhcmFtIFtvYmplY3RdXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtib29sZWFuXVxuKi9cbnZhciBoYXNQcm9wZXJ0eSA9IGV4cG9ydHMuaGFzUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpIHtcbiAgcmV0dXJuIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbnZhciBpc051bSA9IGV4cG9ydHMuaXNOdW0gPSBmdW5jdGlvbiAobnVtKSB7XG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xudmFyIGlzT2JqID0gZXhwb3J0cy5pc09iaiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbnZhciBpc1N0cmluZyA9IGV4cG9ydHMuaXNTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbnZhciBzZXRET01BdHRycyA9IGV4cG9ydHMuc2V0RE9NQXR0cnMgPSBmdW5jdGlvbiAoZWxlbWVudCwgYXR0cnMpIHtcbiAgZm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfVxuICB9XG59O1xuLypcbiAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRDb21tYURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRDb21tYURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBhbnkgYXJndW1lbnQgZm9yIGB0ZXJtYFxuICogYGNvbnRhaW5zKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xudmFyIGNvbnRhaW5zID0gZXhwb3J0cy5jb250YWlucyA9IGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBpc1N0cmluZyh0ZXJtKSAmJiB2LmluZGV4T2YodGVybSkgIT09IC0xO1xuICB9O1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayB0byBzZWUgaWYgYW4gYXJndW1lbnQgaXNcbiAqICB0aGUgZmlyc3QgY2hhcmFjdGVycyBpbiB0aGUgcHJvdmlkZWQgYHRlcm1gXG4gKiBgaXNGaXJzdENoYXJzKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xudmFyIGlzRmlyc3RDaGFycyA9IGV4cG9ydHMuaXNGaXJzdENoYXJzID0gZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSA9PT0gMDtcbiAgfTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgdW5pdCB2YWx1ZSB0eXBlXG4gKi9cbnZhciBjcmVhdGVVbml0VHlwZSA9IGV4cG9ydHMuY3JlYXRlVW5pdFR5cGUgPSBmdW5jdGlvbiAodHlwZSkge1xuICByZXR1cm4ge1xuICAgIHRlc3Q6IGNvbnRhaW5zKHR5cGUpLFxuICAgIHBhcnNlOiBwYXJzZUZsb2F0LFxuICAgIHRyYW5zZm9ybTogKDAsIF90cmFuc2Zvcm1lcnMuYXBwZW5kVW5pdCkodHlwZSlcbiAgfTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBzcGxpdCBjb2xvclxuICogdmFsdWVzIGZyb20gc3RyaW5nIGludG8gYW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcbiAqIGBzcGxpdENvbG9yVmFsdWVzKFsnUmVkJywgJ0dyZWVuJywgJ0JsdWUnXSkoJ3JnYmEoMCwwLDApJylgXG4gKi9cbmZ1bmN0aW9uIHNwbGl0Q29sb3JWYWx1ZXModGVybXMpIHtcbiAgdmFyIG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICB2YXIgdmFsdWVzQXJyYXkgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHYpKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgdmFsdWVzW3Rlcm1zW2ldXSA9IHZhbHVlc0FycmF5W2ldICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KHZhbHVlc0FycmF5W2ldKSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcbn1cblxuLypcbiAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgXG4gICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICBcbiAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuKi9cbnZhciBmaW5kVmFsdWVBbmRVbml0ID0gZXhwb3J0cy5maW5kVmFsdWVBbmRVbml0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh2YWx1ZS5tYXRjaCkge1xuICAgIHZhciBzcGxpdFZhbHVlID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3BsaXRWYWx1ZVsxXSksXG4gICAgICB1bml0OiBzcGxpdFZhbHVlWzJdXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgfTtcbiAgfVxufTtcblxuLypcbiAgU3BsaXQgY29sb3Igc3RyaW5nIGludG8gbWFwIG9mIGNvbG9yIHByb3BlcnRpZXNcblxuICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gIHsgUmVkOiAyNTUuLi4gfVxuKi9cbnZhciBnZXRDb2xvclZhbHVlcyA9IGV4cG9ydHMuZ2V0Q29sb3JWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWUsIGNvbG9yVGVybXMpIHtcbiAgdmFyIG51bUNvbG9yVGVybXMgPSBjb2xvclRlcm1zLmxlbmd0aDtcbiAgdmFyIGNvbG9yVmFsdWVzID0ge307XG4gIHZhciBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHZhbHVlKSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Db2xvclRlcm1zOyBpKyspIHtcbiAgICBjb2xvclZhbHVlc1tjb2xvclRlcm1zW2ldXSA9IGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkID8gY29sb3JzW2ldIDogMTtcbiAgfVxuXG4gIHJldHVybiBjb2xvclZhbHVlcztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZFhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2xzaWMzQnNhWFJEYjJ4dmNsWmhiSFZsY3lJc0lrTkJUVVZNWDBOQlUwVmZVRUZVVkVWU1RpSXNJbEpGVUV4QlEwVmZWRVZOVUV4QlZFVWlMQ0pJUVZOZlVFVlNSazlTVFVGT1EwVmZUazlYSWl3aWNHVnlabTl5YldGdVkyVWlMQ0p1YjNjaUxDSjJZWEpVZVhCbElpd2lkbUZ5YVdGaWJHVWlMQ0pQWW1wbFkzUWlMQ0p3Y205MGIzUjVjR1VpTENKMGIxTjBjbWx1WnlJc0ltTmhiR3dpTENKemJHbGpaU0lzSW1OaGJXVnNWRzlFWVhOb0lpd2ljM1J5YVc1bklpd2ljbVZ3YkdGalpTSXNJblJ2VEc5M1pYSkRZWE5sSWl3aVkzVnljbVZ1ZEZScGJXVWlMQ0pFWVhSbElpd2laMlYwVkdsdFpTSXNJbWhoYzFCeWIzQmxjblI1SWl3aWIySnFaV04wSWl3aWNISnZjR1Z5ZEhsT1lXMWxJaXdpYUdGelQzZHVVSEp2Y0dWeWRIa2lMQ0oxYm1SbFptbHVaV1FpTENKcGMwRnljbUY1SWl3aVlYSnlJaXdpYVhOR2RXNWpJaXdpYjJKcUlpd2lhWE5PZFcwaUxDSnVkVzBpTENKcGMwOWlhaUlzSW1selUzUnlhVzVuSWl3aWMzUnlJaXdpYzJWMFJFOU5RWFIwY25NaUxDSmxiR1Z0Wlc1MElpd2lZWFIwY25NaUxDSnJaWGtpTENKelpYUkJkSFJ5YVdKMWRHVWlMQ0p6Y0d4cGRFTnZiVzFoUkdWc2FXMXBkR1ZrSWl3aWRtRnNkV1VpTENKemNHeHBkQ0lzSW1OdmJuUmhhVzV6SWl3aWRHVnliU0lzSW5ZaUxDSnBibVJsZUU5bUlpd2lhWE5HYVhKemRFTm9ZWEp6SWl3aVkzSmxZWFJsVlc1cGRGUjVjR1VpTENKMGVYQmxJaXdpZEdWemRDSXNJbkJoY25ObElpd2ljR0Z5YzJWR2JHOWhkQ0lzSW5SeVlXNXpabTl5YlNJc0luUmxjbTF6SWl3aWJuVnRWR1Z5YlhNaUxDSnNaVzVuZEdnaUxDSjJZV3gxWlhNaUxDSjJZV3gxWlhOQmNuSmhlU0lzSW1kbGRGWmhiSFZsUm5KdmJVWjFibU4wYVc5dVUzUnlhVzVuSWl3aWFTSXNJbVpwYm1SV1lXeDFaVUZ1WkZWdWFYUWlMQ0p0WVhSamFDSXNJbk53YkdsMFZtRnNkV1VpTENKMWJtbDBJaXdpWjJWMFEyOXNiM0pXWVd4MVpYTWlMQ0pqYjJ4dmNsUmxjbTF6SWl3aWJuVnRRMjlzYjNKVVpYSnRjeUlzSW1OdmJHOXlWbUZzZFdWeklpd2lZMjlzYjNKeklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08xRkJaMGxuUWtFc1owSXNSMEZCUVVFc1owSTdPMEZCYUVsb1FqczdRVUZGUVN4SlFVRk5ReXh4UWtGQmNVSXNhVUpCUVROQ08wRkJRMEVzU1VGQlRVTXNiVUpCUVcxQ0xFOUJRWHBDTzBGQlEwRXNTVUZCVFVNc2MwSkJRWFZDTEU5QlFVOURMRmRCUVZBc1MwRkJkVUlzVjBGQmRrSXNTVUZCYzBOQkxGbEJRVmxETEVkQlFTOUZPenRCUVVWQk96czdPenM3UVVGTlFTeEpRVUZOUXl4VlFVRlZMRlZCUVVORExGRkJRVVE3UVVGQlFTeFRRVUZqUXl4UFFVRlBReXhUUVVGUUxFTkJRV2xDUXl4UlFVRnFRaXhEUVVFd1FrTXNTVUZCTVVJc1EwRkJLMEpLTEZGQlFTOUNMRVZCUVhsRFN5eExRVUY2UXl4RFFVRXJReXhEUVVFdlF5eEZRVUZyUkN4RFFVRkRMRU5CUVc1RUxFTkJRV1E3UVVGQlFTeERRVUZvUWpzN1FVRkZRVHM3T3pzN08wRkJUVThzU1VGQlRVTXNiME5CUVdNc1ZVRkJRME1zVFVGQlJEdEJRVUZCTEZOQlFWbEJMRTlCUVU5RExFOUJRVkFzUTBGQlpXUXNhMEpCUVdZc1JVRkJiVU5ETEdkQ1FVRnVReXhGUVVGeFJHTXNWMEZCY2tRc1JVRkJXanRCUVVGQkxFTkJRWEJDT3p0QlFVVlFPenM3T3p0QlFVdFBMRWxCUVUxRExHOURRVUZqWkN4elFrRkJjMEk3UVVGQlFTeFRRVUZOUXl4WlFVRlpReXhIUVVGYUxFVkJRVTQ3UVVGQlFTeERRVUYwUWl4SFFVRm5SRHRCUVVGQkxGTkJRVTBzU1VGQlNXRXNTVUZCU2l4SFFVRlhReXhQUVVGWUxFVkJRVTQ3UVVGQlFTeERRVUZ3UlRzN1FVRkZVRHM3T3pzN096dEJRVTlQTEVsQlFVMURMRzlEUVVGakxGVkJRVU5ETEUxQlFVUXNSVUZCVTBNc1dVRkJWRHRCUVVGQkxGTkJRVEJDUkN4UFFVRlBSU3hqUVVGUUxFTkJRWE5DUkN4WlFVRjBRaXhMUVVGMVEwUXNUMEZCVDBNc1dVRkJVQ3hOUVVGNVFrVXNVMEZCTVVZN1FVRkJRU3hEUVVGd1FqczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVU1zTkVKQlFWVXNWVUZCUTBNc1IwRkJSRHRCUVVGQkxGTkJRVk53UWl4UlFVRlJiMElzUjBGQlVpeE5RVUZwUWl4UFFVRXhRanRCUVVGQkxFTkJRV2hDT3p0QlFVVlFPenM3T3pzN1FVRk5UeXhKUVVGTlF5d3dRa0ZCVXl4VlFVRkRReXhIUVVGRU8wRkJRVUVzVTBGQlUzUkNMRkZCUVZGelFpeEhRVUZTTEUxQlFXbENMRlZCUVRGQ08wRkJRVUVzUTBGQlpqczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVU1zZDBKQlFWRXNWVUZCUTBNc1IwRkJSRHRCUVVGQkxGTkJRVk1zVDBGQlQwRXNSMEZCVUN4TFFVRmxMRkZCUVhoQ08wRkJRVUVzUTBGQlpEczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVU1zZDBKQlFWRXNWVUZCUTBnc1IwRkJSRHRCUVVGQkxGTkJRVk1zVDBGQlQwRXNSMEZCVUN4TFFVRmxMRkZCUVhoQ08wRkJRVUVzUTBGQlpEczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVWtzT0VKQlFWY3NWVUZCUTBNc1IwRkJSRHRCUVVGQkxGTkJRVk1zVDBGQlQwRXNSMEZCVUN4TFFVRmxMRkZCUVhoQ08wRkJRVUVzUTBGQmFrSTdPMEZCUlVFc1NVRkJUVU1zYjBOQlFXTXNWVUZCUTBNc1QwRkJSQ3hGUVVGVlF5eExRVUZXTEVWQlFXOUNPMEZCUXpkRExFOUJRVXNzU1VGQlNVTXNSMEZCVkN4SlFVRm5Ra1FzUzBGQmFFSXNSVUZCZFVJN1FVRkRja0lzVVVGQlNVRXNUVUZCVFdJc1kwRkJUaXhEUVVGeFFtTXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU0zUWtZc1kwRkJVVWNzV1VGQlVpeERRVUZ4UWtRc1IwRkJja0lzUlVGQk1FSkVMRTFCUVUxRExFZEJRVTRzUTBGQk1VSTdRVUZEUkR0QlFVTkdPMEZCUTBZc1EwRk9UVHRCUVU5UU96czdPenM3T3p0QlFWRlBMRWxCUVUxRkxHOUVRVUZ6UWl4VlFVRkRReXhMUVVGRU8wRkJRVUVzVTBGQlYxSXNVMEZCVTFFc1MwRkJWQ3hKUVVGclFrRXNUVUZCVFVNc1MwRkJUaXhEUVVGWkxFMUJRVm9zUTBGQmJFSXNSMEZCZDBNc1EwRkJRMFFzUzBGQlJDeERRVUZ1UkR0QlFVRkJMRU5CUVRWQ096dEJRVVZRT3pzN08wRkJTVThzU1VGQlRVVXNPRUpCUVZjc1ZVRkJRME1zU1VGQlJEdEJRVUZCTEZOQlFWVXNWVUZCUTBNc1EwRkJSQ3hGUVVGUE8wRkJRM1pETEZkQlFWRmFMRk5CUVZOWExFbEJRVlFzUzBGQmEwSkRMRVZCUVVWRExFOUJRVVlzUTBGQlZVWXNTVUZCVml4TlFVRnZRaXhEUVVGRExFTkJRUzlETzBGQlEwUXNSMEZHZFVJN1FVRkJRU3hEUVVGcVFqczdRVUZKVURzN096czdRVUZMVHl4SlFVRk5SeXh6UTBGQlpTeFZRVUZEU0N4SlFVRkVPMEZCUVVFc1UwRkJWU3hWUVVGRFF5eERRVUZFTEVWQlFVODdRVUZETTBNc1YwRkJVVm9zVTBGQlUxY3NTVUZCVkN4TFFVRnJRa01zUlVGQlJVTXNUMEZCUml4RFFVRlZSaXhKUVVGV0xFMUJRVzlDTEVOQlFUbERPMEZCUTBRc1IwRkdNa0k3UVVGQlFTeERRVUZ5UWpzN1FVRkpVRHM3TzBGQlIwOHNTVUZCVFVrc01FTkJRV2xDTEZWQlFVTkRMRWxCUVVRc1JVRkJWVHRCUVVOMFF5eFRRVUZQTzBGQlEweERMRlZCUVUxUUxGTkJRVk5OTEVsQlFWUXNRMEZFUkR0QlFVVk1SU3hYUVVGUFF5eFZRVVpHTzBGQlIweERMR1ZCUVZjc09FSkJRVmRLTEVsQlFWZzdRVUZJVGl4SFFVRlFPMEZCUzBRc1EwRk9UVHM3UVVGUlVEczdPenM3UVVGTFR5eFRRVUZUYUVRc1owSkJRVlFzUTBGQk1FSnhSQ3hMUVVFeFFpeEZRVUZwUXp0QlFVTjBReXhOUVVGTlF5eFhRVUZYUkN4TlFVRk5SU3hOUVVGMlFqczdRVUZGUVN4VFFVRlBMRlZCUVZWWUxFTkJRVllzUlVGQllUdEJRVU5zUWl4UlFVRk5XU3hUUVVGVExFVkJRV1k3UVVGRFFTeFJRVUZOUXl4alFVRmpiRUlzYjBKQlFXOUNiVUlzTWtKQlFUSkNaQ3hEUVVFelFpeERRVUZ3UWl4RFFVRndRanM3UVVGRlFTeFRRVUZMTEVsQlFVbGxMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1V3c1VVRkJjRUlzUlVGQk9FSkxMRWRCUVRsQ0xFVkJRVzFETzBGQlEycERTQ3hoUVVGUFNDeE5RVUZOVFN4RFFVRk9MRU5CUVZBc1NVRkJiMEpHTEZsQlFWbEZMRU5CUVZvc1RVRkJiVUp1UXl4VFFVRndRaXhIUVVGcFF6SkNMRmRCUVZkTkxGbEJRVmxGTEVOQlFWb3NRMEZCV0N4RFFVRnFReXhIUVVFNFJDeERRVUZxUmp0QlFVTkVPenRCUVVWRUxGZEJRVTlJTEUxQlFWQTdRVUZEUkN4SFFWUkVPMEZCVlVRN08wRkJSVVE3T3pzN096czdPMEZCVVU4c1NVRkJUVWtzT0VOQlFXMUNMRlZCUVVOd1FpeExRVUZFTEVWQlFWYzdRVUZEZWtNc1RVRkJTVUVzVFVGQlRYRkNMRXRCUVZZc1JVRkJhVUk3UVVGRFppeFJRVUZOUXl4aFFVRmhkRUlzVFVGQlRYRkNMRXRCUVU0c1EwRkJXU3h0UWtGQldpeERRVUZ1UWpzN1FVRkZRU3hYUVVGUE8wRkJRMHh5UWl4aFFVRlBWeXhYUVVGWFZ5eFhRVUZYTEVOQlFWZ3NRMEZCV0N4RFFVUkdPMEZCUlV4RExGbEJRVTlFTEZkQlFWY3NRMEZCV0R0QlFVWkdMRXRCUVZBN1FVRkpSQ3hIUVZCRUxFMUJUMDg3UVVGRFRDeFhRVUZQTEVWQlFVVjBRaXhaUVVGR0xFVkJRVkE3UVVGRFJEdEJRVU5HTEVOQldFMDdPMEZCWVZBN096czdPenM3UVVGUFR5eEpRVUZOZDBJc01FTkJRV2xDTEZWQlFVTjRRaXhMUVVGRUxFVkJRVkY1UWl4VlFVRlNMRVZCUVhWQ08wRkJRMjVFTEUxQlFVMURMR2RDUVVGblFrUXNWMEZCVjFZc1RVRkJha003UVVGRFFTeE5RVUZOV1N4alFVRmpMRVZCUVhCQ08wRkJRMEVzVFVGQlRVTXNVMEZCVXpkQ0xHOUNRVUZ2UW0xQ0xESkNRVUV5UW14Q0xFdEJRVE5DTEVOQlFYQkNMRU5CUVdZN08wRkJSVUVzVDBGQlN5eEpRVUZKYlVJc1NVRkJTU3hEUVVGaUxFVkJRV2RDUVN4SlFVRkpUeXhoUVVGd1FpeEZRVUZ0UTFBc1IwRkJia01zUlVGQmQwTTdRVUZEZEVOUkxHZENRVUZaUml4WFFVRlhUaXhEUVVGWUxFTkJRVm9zU1VGQk9FSlRMRTlCUVU5VUxFTkJRVkFzVFVGQlkyNURMRk5CUVdZc1IwRkJORUkwUXl4UFFVRlBWQ3hEUVVGUUxFTkJRVFZDTEVkQlFYZERMRU5CUVhKRk8wRkJRMFE3TzBGQlJVUXNVMEZCVDFFc1YwRkJVRHRCUVVORUxFTkJWazBpTENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmhjSEJsYm1SVmJtbDBJSDBnWm5KdmJTQW5MaTkwY21GdWMyWnZjbTFsY25Nbk8xeHVYRzVqYjI1emRDQkRRVTFGVEY5RFFWTkZYMUJCVkZSRlVrNGdQU0F2S0Z0aExYcGRLU2hiUVMxYVhTa3ZaenRjYm1OdmJuTjBJRkpGVUV4QlEwVmZWRVZOVUV4QlZFVWdQU0FuSkRFdEpESW5PMXh1WTI5dWMzUWdTRUZUWDFCRlVrWlBVazFCVGtORlgwNVBWeUE5SUNoMGVYQmxiMllnY0dWeVptOXliV0Z1WTJVZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIQmxjbVp2Y20xaGJtTmxMbTV2ZHlrN1hHNWNiaThxWEc0Z0lFZGxkQ0IyWVhJZ2RIbHdaU0JoY3lCemRISnBibWRjYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnR6ZEhKcGJtZGRPaUJTWlhSMWNtNXpMQ0JtYjNJZ2FXNXpkR0Z1WTJVZ0owOWlhbVZqZENjZ2FXWWdXMjlpYW1WamRDQlBZbXBsWTNSZFhHNHFMMXh1WTI5dWMzUWdkbUZ5Vkhsd1pTQTlJQ2gyWVhKcFlXSnNaU2tnUFQ0Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1MGIxTjBjbWx1Wnk1allXeHNLSFpoY21saFlteGxLUzV6YkdsalpTZzRMQ0F0TVNrN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ1kyRnRaV3hEWVhObElIUnZJR1JoYzJndFkyRnpaVnh1WEc0Z0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQkFjbVYwZFhKdUlGdHpkSEpwYm1kZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHTmhiV1ZzVkc5RVlYTm9JRDBnS0hOMGNtbHVaeWtnUFQ0Z2MzUnlhVzVuTG5KbGNHeGhZMlVvUTBGTlJVeGZRMEZUUlY5UVFWUlVSVkpPTENCU1JWQk1RVU5GWDFSRlRWQk1RVlJGS1M1MGIweHZkMlZ5UTJGelpTZ3BPMXh1WEc0dktseHVJQ0JIWlc1bGNtRjBaU0JqZFhKeVpXNTBJSFJwYldWemRHRnRjRnh1SUNCY2JpQWdRSEpsZEhWeWJpQmJkR2x0WlhOMFlXMXdYVG9nUTNWeWNtVnVkQ0JWVGtsWUlIUnBiV1Z6ZEdGdGNGeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpkWEp5Wlc1MFZHbHRaU0E5SUVoQlUxOVFSVkpHVDFKTlFVNURSVjlPVDFjZ1B5QW9LU0E5UGlCd1pYSm1iM0p0WVc1alpTNXViM2NvS1NBNklDZ3BJRDArSUc1bGR5QkVZWFJsS0NrdVoyVjBWR2x0WlNncE8xeHVYRzR2S2x4dUlDQkRhR1ZqYXlCcFppQnZZbXBsWTNRZ2FHRnpJSEJ5YjNCbGNuUjVJR0Z1WkNCcGRDQnBjMjRuZENCMWJtUmxabWx1WldSY2JseHVJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMWNiaUFnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdoaGMxQnliM0JsY25SNUlEMGdLRzlpYW1WamRDd2djSEp2Y0dWeWRIbE9ZVzFsS1NBOVBpQnZZbXBsWTNRdWFHRnpUM2R1VUhKdmNHVnlkSGtvY0hKdmNHVnlkSGxPWVcxbEtTQW1KaUJ2WW1wbFkzUmJjSEp2Y0dWeWRIbE9ZVzFsWFNBaFBUMGdkVzVrWldacGJtVmtPMXh1WEc0dktseHVJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lXNGdZWEp5WVhrZ1B5QmNiaUFnWEc0Z0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIVjBhV3h6TG5aaGNsUjVjR1VnUFQwOUlDZEJjbkpoZVNkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkJjbkpoZVNBOUlDaGhjbklwSUQwK0lIWmhjbFI1Y0dVb1lYSnlLU0E5UFQwZ0owRnljbUY1Snp0Y2JseHVMeXBjYmlBZ1NYTWdkWFJwYkhNZ2RtRnlJR0VnWm5WdVkzUnBiMjRnUHlCY2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhWMGFXeHpMblpoY2xSNWNHVWdQVDA5SUNkR2RXNWpkR2x2YmlkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkdkVzVqSUQwZ0tHOWlhaWtnUFQ0Z2RtRnlWSGx3WlNodlltb3BJRDA5UFNBblJuVnVZM1JwYjI0bk8xeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVNCdWRXMWlaWEkvWEc0Z0lGeHVJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIwZVhCbGIyWWdQVDA5SUNkdWRXMWlaWEluWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselRuVnRJRDBnS0c1MWJTa2dQVDRnZEhsd1pXOW1JRzUxYlNBOVBUMGdKMjUxYldKbGNpYzdYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaGJpQnZZbXBsWTNRL1hHNGdJRnh1SUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMGVYQmxiMllnUFQwOUlDZHZZbXBsWTNRblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpUMkpxSUQwZ0tHOWlhaWtnUFQ0Z2RIbHdaVzltSUc5aWFpQTlQVDBnSjI5aWFtVmpkQ2M3WEc1Y2JpOHFYRzRnSUVseklIVjBhV3h6SUhaaGNpQmhJSE4wY21sdVp5QS9JRnh1SUNCY2JpQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkSGx3Wlc5bUlITjBjaUE5UFQwZ0ozTjBjbWx1WnlkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTlRkSEpwYm1jZ1BTQW9jM1J5S1NBOVBpQjBlWEJsYjJZZ2MzUnlJRDA5UFNBbmMzUnlhVzVuSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhObGRFUlBUVUYwZEhKeklEMGdLR1ZzWlcxbGJuUXNJR0YwZEhKektTQTlQaUI3WEc0Z0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCaGRIUnljeWtnZTF4dUlDQWdJR2xtSUNoaGRIUnljeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNCbGJHVnRaVzUwTG5ObGRFRjBkSEpwWW5WMFpTaHJaWGtzSUdGMGRISnpXMnRsZVYwcE8xeHVJQ0FnSUgxY2JpQWdmVnh1ZlR0Y2JpOHFYRzRnSUZOd2JHbDBJR052YlcxaExXUmxiR2x0YVhSbFpDQnpkSEpwYm1kY2JseHVJQ0JjSW1admJ5eGlZWEpjSWlBdFBpQmJYQ0ptYjI5Y0lpd2dYQ0ppWVhKY0lsMWNibHh1SUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ1FISmxkSFZ5YmlCYllYSnlZWGxkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOd2JHbDBRMjl0YldGRVpXeHBiV2wwWldRZ1BTQW9kbUZzZFdVcElEMCtJR2x6VTNSeWFXNW5LSFpoYkhWbEtTQS9JSFpoYkhWbExuTndiR2wwS0M4c1hGeHpLaThwSURvZ1czWmhiSFZsWFR0Y2JseHVMeW9xWEc0Z0tpQWdVbVYwZFhKdWN5QmhJR1oxYm1OMGFXOXVJSFJvWVhRZ2QybHNiQ0JqYUdWamF5QmhibmtnWVhKbmRXMWxiblFnWm05eUlHQjBaWEp0WUZ4dUlDb2dZR052Ym5SaGFXNXpLQ2R1WldWa2JHVW5LU2duYUdGNWMzUmhZMnNuS1dCY2JpQXFMMXh1Wlhod2IzSjBJR052Ym5OMElHTnZiblJoYVc1eklEMGdLSFJsY20wcElEMCtJQ2gyS1NBOVBpQjdYRzRnSUhKbGRIVnliaUFvYVhOVGRISnBibWNvZEdWeWJTa2dKaVlnZGk1cGJtUmxlRTltS0hSbGNtMHBJQ0U5UFNBdE1TazdYRzU5TzF4dVhHNHZLaXBjYmlBcUlDQlNaWFIxY201eklHRWdablZ1WTNScGIyNGdkR2hoZENCM2FXeHNJR05vWldOcklIUnZJSE5sWlNCcFppQmhiaUJoY21kMWJXVnVkQ0JwYzF4dUlDb2dJSFJvWlNCbWFYSnpkQ0JqYUdGeVlXTjBaWEp6SUdsdUlIUm9aU0J3Y205MmFXUmxaQ0JnZEdWeWJXQmNiaUFxSUdCcGMwWnBjbk4wUTJoaGNuTW9KMjVsWldSc1pTY3BLQ2RvWVhsemRHRmpheWNwWUZ4dUlDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkdhWEp6ZEVOb1lYSnpJRDBnS0hSbGNtMHBJRDArSUNoMktTQTlQaUI3WEc0Z0lISmxkSFZ5YmlBb2FYTlRkSEpwYm1jb2RHVnliU2tnSmlZZ2RpNXBibVJsZUU5bUtIUmxjbTBwSUQwOVBTQXdLVHRjYm4wN1hHNWNiaThxS2x4dUlDb2dRM0psWVhSbElHRWdkVzVwZENCMllXeDFaU0IwZVhCbFhHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWVmJtbDBWSGx3WlNBOUlDaDBlWEJsS1NBOVBpQjdYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdkR1Z6ZERvZ1kyOXVkR0ZwYm5Nb2RIbHdaU2tzWEc0Z0lDQWdjR0Z5YzJVNklIQmhjbk5sUm14dllYUXNYRzRnSUNBZ2RISmhibk5tYjNKdE9pQmhjSEJsYm1SVmJtbDBLSFI1Y0dVcFhHNGdJSDA3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpYTWdZU0JtZFc1amRHbHZiaUIwYUdGMElIZHBiR3dnYzNCc2FYUWdZMjlzYjNKY2JpQXFJSFpoYkhWbGN5Qm1jbTl0SUhOMGNtbHVaeUJwYm5SdklHRnVJRzlpYW1WamRDQnZaaUJ3Y205d1pYSjBhV1Z6WEc0Z0tpQmdjM0JzYVhSRGIyeHZjbFpoYkhWbGN5aGJKMUpsWkNjc0lDZEhjbVZsYmljc0lDZENiSFZsSjEwcEtDZHlaMkpoS0RBc01Dd3dLU2NwWUZ4dUlDb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdjM0JzYVhSRGIyeHZjbFpoYkhWbGN5aDBaWEp0Y3lrZ2UxeHVJQ0JqYjI1emRDQnVkVzFVWlhKdGN5QTlJSFJsY20xekxteGxibWQwYUR0Y2JseHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdLSFlwSUh0Y2JpQWdJQ0JqYjI1emRDQjJZV3gxWlhNZ1BTQjdmVHRjYmlBZ0lDQmpiMjV6ZENCMllXeDFaWE5CY25KaGVTQTlJSE53YkdsMFEyOXRiV0ZFWld4cGJXbDBaV1FvWjJWMFZtRnNkV1ZHY205dFJuVnVZM1JwYjI1VGRISnBibWNvZGlrcE8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFVWlhKdGN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNCMllXeDFaWE5iZEdWeWJYTmJhVjFkSUQwZ0tIWmhiSFZsYzBGeWNtRjVXMmxkSUNFOVBTQjFibVJsWm1sdVpXUXBJRDhnY0dGeWMyVkdiRzloZENoMllXeDFaWE5CY25KaGVWdHBYU2tnT2lBeE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIyWVd4MVpYTTdYRzRnSUgwN1hHNTlYRzVjYmk4cVhHNGdJRk53YkdsMElHRWdkbUZzZFdVZ2FXNTBieUJoSUhaaGJIVmxMM1Z1YVhRZ2IySnFaV04wWEc0Z0lGeHVJQ0FnSUZ3aU1qQXdjSGhjSWlBdFBpQjdJSFpoYkhWbE9pQXlNREFzSUhWdWFYUTZJRndpY0hoY0lpQjlYRzRnSUNBZ1hHNGdJRUJ3WVhKaGJTQmJjM1J5YVc1blhUb2dWbUZzZFdVZ2RHOGdjM0JzYVhSY2JpQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhUb2dUMkpxWldOMElIZHBkR2dnZG1Gc2RXVWdZVzVrSUhWdWFYUWdjSEp2Y0hOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1ptbHVaRlpoYkhWbFFXNWtWVzVwZENBOUlDaDJZV3gxWlNrZ1BUNGdlMXh1SUNCcFppQW9kbUZzZFdVdWJXRjBZMmdwSUh0Y2JpQWdJQ0JqYjI1emRDQnpjR3hwZEZaaGJIVmxJRDBnZG1Gc2RXVXViV0YwWTJnb0x5Z3RQMXhjWkNwY1hDNC9YRnhrS2lrb0xpb3BMeWs3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdkbUZzZFdVNklIQmhjbk5sUm14dllYUW9jM0JzYVhSV1lXeDFaVnN4WFNrc1hHNGdJQ0FnSUNCMWJtbDBPaUFnYzNCc2FYUldZV3gxWlZzeVhWeHVJQ0FnSUgwN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2NtVjBkWEp1SUhzZ2RtRnNkV1VnZlR0Y2JpQWdmVnh1ZlR0Y2JseHVMeXBjYmlBZ1UzQnNhWFFnWTI5c2IzSWdjM1J5YVc1bklHbHVkRzhnYldGd0lHOW1JR052Ykc5eUlIQnliM0JsY25ScFpYTmNibHh1SUNCY0luSm5ZbUVvTWpVMUxDQXlOVFVzSURJMU5Td2dNQ2xjSWl3Z1cxd2lVbVZrWENJc0lDZEhjbVZsYmx3aUxDQmNJa0pzZFdWY0lpd2dYQ0pCYkhCb1lWd2lYVnh1WEc0Z0lIc2dVbVZrT2lBeU5UVXVMaTRnZlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUkRiMnh2Y2xaaGJIVmxjeUE5SUNoMllXeDFaU3dnWTI5c2IzSlVaWEp0Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0J1ZFcxRGIyeHZjbFJsY20xeklEMGdZMjlzYjNKVVpYSnRjeTVzWlc1bmRHZzdYRzRnSUdOdmJuTjBJR052Ykc5eVZtRnNkV1Z6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJR052Ykc5eWN5QTlJSE53YkdsMFEyOXRiV0ZFWld4cGJXbDBaV1FvWjJWMFZtRnNkV1ZHY205dFJuVnVZM1JwYjI1VGRISnBibWNvZG1Gc2RXVXBLVHRjYmx4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlVOdmJHOXlWR1Z5YlhNN0lHa3JLeWtnZTF4dUlDQWdJR052Ykc5eVZtRnNkV1Z6VzJOdmJHOXlWR1Z5YlhOYmFWMWRJRDBnS0dOdmJHOXljMXRwWFNBaFBUMGdkVzVrWldacGJtVmtLU0EvSUdOdmJHOXljMXRwWFNBNklERTdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdZMjlzYjNKV1lXeDFaWE03WEc1OU8xeHVYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG52YXIgaGFzUkFGID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRydWUgOiBmYWxzZTtcblxudmFyIG9uTmV4dEZyYW1lID0gdm9pZCAwO1xuXG5pZiAoaGFzUkFGKSB7XG4gIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9O1xufSBlbHNlIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvKlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgICBcbiAgICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcbiAgICAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgICBcbiAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgICAgXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgXG4gICAgICBNSVQgbGljZW5zZVxuICAgICovXG4gICAgdmFyIGxhc3RUaW1lID0gMDtcblxuICAgIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYuNyAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWUgKyB0aW1lVG9DYWxsO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGxhc3RUaW1lKTtcbiAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgIH07XG4gIH0pKCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9uTmV4dEZyYW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12YjI0dGJtVjRkQzFtY21GdFpTNXFjeUpkTENKdVlXMWxjeUk2V3lKb1lYTlNRVVlpTENKM2FXNWtiM2NpTENKeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVWlMQ0p2Yms1bGVIUkdjbUZ0WlNJc0ltTmhiR3hpWVdOcklpd2liR0Z6ZEZScGJXVWlMQ0pqZFhKeVpXNTBWR2x0WlNJc0lrUmhkR1VpTENKblpYUlVhVzFsSWl3aWRHbHRaVlJ2UTJGc2JDSXNJazFoZEdnaUxDSnRZWGdpTENKelpYUlVhVzFsYjNWMElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRVHM3TzBGQlIwRXNTVUZCVFVFc1UwRkJWU3hQUVVGUFF5eE5RVUZRTEV0QlFXdENMRmRCUVd4Q0xFbEJRV2xEUVN4UFFVRlBReXh4UWtGQmVrTXNSMEZCYTBVc1NVRkJiRVVzUjBGQmVVVXNTMEZCZUVZN08wRkJSVUVzU1VGQlNVTXNiMEpCUVVvN08wRkJSVUVzU1VGQlNVZ3NUVUZCU2l4RlFVRlpPMEZCUTFaSExHZENRVUZqTEZWQlFVTkRMRkZCUVVRN1FVRkJRU3hYUVVGalNDeFBRVUZQUXl4eFFrRkJVQ3hEUVVFMlFrVXNVVUZCTjBJc1EwRkJaRHRCUVVGQkxFZEJRV1E3UVVGRlJDeERRVWhFTEUxQlIwODdRVUZCUVR0QlFVTk1PenM3T3pzN096czdPenM3TzBGQlkwRXNVVUZCU1VNc1YwRkJWeXhEUVVGbU96dEJRVVZCUml4clFrRkJZeXhWUVVGRFF5eFJRVUZFTEVWQlFXTTdRVUZETVVJc1ZVRkJUVVVzWTBGQll5eEpRVUZKUXl4SlFVRktMRWRCUVZkRExFOUJRVmdzUlVGQmNFSTdRVUZEUVN4VlFVRk5ReXhoUVVGaFF5eExRVUZMUXl4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxGRkJRVkZNTEdOQlFXTkVMRkZCUVhSQ0xFTkJRVm9zUTBGQmJrSTdPMEZCUlVGQkxHbENRVUZYUXl4alFVRmpSeXhWUVVGNlFqczdRVUZGUVVjc2FVSkJRVmM3UVVGQlFTeGxRVUZOVWl4VFFVRlRReXhSUVVGVUxFTkJRVTQ3UVVGQlFTeFBRVUZZTEVWQlFYRkRTU3hWUVVGeVF6dEJRVU5FTEV0QlVFUTdRVUZxUWtzN1FVRjVRazQ3TzJ0Q1FVVmpUaXhYSWl3aVptbHNaU0k2SW05dUxXNWxlSFF0Wm5KaGJXVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNCRVpYUmxZM1FnWVc1a0lHeHZZV1FnWVc0Z1lYQndjbTl3Y21saGRHVWdZMnh2WTJzZ2MyVjBkR2x1WnlCbWIzSWdkR2hsSUdWdWRtbHliMjV0Wlc1MFhHNHFMMXh1WTI5dWMzUWdhR0Z6VWtGR0lEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVXBJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVYRzVzWlhRZ2IyNU9aWGgwUm5KaGJXVTdYRzVjYm1sbUlDaG9ZWE5TUVVZcElIdGNiaUFnYjI1T1pYaDBSbkpoYldVZ1BTQW9ZMkZzYkdKaFkyc3BJRDArSUhkcGJtUnZkeTV5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVb1kyRnNiR0poWTJzcE8xeHVYRzU5SUdWc2MyVWdlMXh1SUNBdktseHVJQ0FnSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTQndiMng1Wm1sc2JGeHVJQ0FnSUZ4dUlDQWdJRVp2Y2lCSlJUZ3ZPU0JHYkdsdWMzUnZibVZ6SUdGdVpDQnViMjR0WW5KdmQzTmxjaUJsYm5acGNtOXViV1Z1ZEhOY2JseHVJQ0FnSUZSaGEyVnVJR1p5YjIwZ1VHRjFiQ0JKY21semFDNGdWMlVuZG1VZ2MzUnlhWEJ3WldRZ2IzVjBJR05oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsSUdOb1pXTnJjeUJpWldOaGRYTmxJSGRsSUdSdmJpZDBJR1p2ZUNCM2FYUm9JSFJvWVhSY2JpQWdJQ0JjYmlBZ0lDQm9kSFJ3T2k4dmNHRjFiR2x5YVhOb0xtTnZiUzh5TURFeEwzSmxjWFZsYzNSaGJtbHRZWFJwYjI1bWNtRnRaUzFtYjNJdGMyMWhjblF0WVc1cGJXRjBhVzVuTDF4dUlDQWdJR2gwZEhBNkx5OXRlUzV2Y0dWeVlTNWpiMjB2WlcxdmJHeGxjaTlpYkc5bkx6SXdNVEV2TVRJdk1qQXZjbVZ4ZFdWemRHRnVhVzFoZEdsdmJtWnlZVzFsTFdadmNpMXpiV0Z5ZEMxbGNpMWhibWx0WVhScGJtZGNiaUFnSUNBZ1hHNGdJQ0FnY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbElIQnZiSGxtYVd4c0lHSjVJRVZ5YVdzZ1RjTzJiR3hsY2k0Z1ptbDRaWE1nWm5KdmJTQlFZWFZzSUVseWFYTm9JR0Z1WkNCVWFXNXZJRnBwYW1SbGJGeHVJQ0FnSUNCY2JpQWdJQ0JOU1ZRZ2JHbGpaVzV6WlZ4dUlDQXFMMXh1SUNCc1pYUWdiR0Z6ZEZScGJXVWdQU0F3TzF4dVhHNGdJRzl1VG1WNGRFWnlZVzFsSUQwZ0tHTmhiR3hpWVdOcktTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1kzVnljbVZ1ZEZScGJXVWdQU0J1WlhjZ1JHRjBaU2dwTG1kbGRGUnBiV1VvS1R0Y2JpQWdJQ0JqYjI1emRDQjBhVzFsVkc5RFlXeHNJRDBnVFdGMGFDNXRZWGdvTUN3Z01UWXVOeUF0SUNoamRYSnlaVzUwVkdsdFpTQXRJR3hoYzNSVWFXMWxLU2s3WEc1Y2JpQWdJQ0JzWVhOMFZHbHRaU0E5SUdOMWNuSmxiblJVYVcxbElDc2dkR2x0WlZSdlEyRnNiRHRjYmx4dUlDQWdJSE5sZEZScGJXVnZkWFFvS0NrZ1BUNGdZMkZzYkdKaFkyc29iR0Z6ZEZScGJXVXBMQ0IwYVcxbFZHOURZV3hzS1R0Y2JpQWdmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2IyNU9aWGgwUm5KaGJXVTdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVJlbmRlclN0ZXA7XG5mdW5jdGlvbiBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCkge1xuICAvKipcbiAgICogV2UgdXNlIHR3byBhcnJheXMsIG9uZSBmb3IgdGhpcyBmcmFtZSBhbmQgb25lIHRvIHF1ZXVlIGZvciB0aGVcbiAgICogbmV4dCBmcmFtZSwgcmV1c2luZyBlYWNoIHRvIGF2b2lkIEdDLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICB2YXIgZnVuY3Rpb25zVG9SdW4gPSBbXTtcbiAgdmFyIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICBzY2hlZHVsZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBzdGFydFJlbmRlckxvb3AoKTtcbiAgICAgIC8vIElmIHRoaXMgY2FsbGJhY2sgaXNuJ3QgYWxyZWFkeSBzY2hlZHVsZWQgdG8gcnVuIG5leHQgZnJhbWVcbiAgICAgIGlmIChmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUucHVzaChjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNhbmNlbDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgaW5kZXhPZkNhbGxiYWNrID0gZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaW5kZXhPZkNhbGxiYWNrICE9PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXhPZkNhbGxiYWNrLCAxKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAvLyBDbGVhciBuZXh0IGZyYW1lIGxpc3RcbiAgICAgIHZhciBfcmVmID0gW2Z1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLCBmdW5jdGlvbnNUb1J1bl07XG4gICAgICAvLyBTd2FwIHRoaXMgZnJhbWUgYW5kIG5leHQgZnJhbWUgYXJyYXlzIHRvIGF2b2lkIEdDXG5cbiAgICAgIGZ1bmN0aW9uc1RvUnVuID0gX3JlZlswXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gX3JlZlsxXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIEV4ZWN1dGUgYWxsIG9mIHRoaXMgZnJhbWUncyBmdW5jdGlvbnNcbiAgICAgIHZhciBudW1UaGlzRnJhbWUgPSBmdW5jdGlvbnNUb1J1bi5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRoaXNGcmFtZTsgaSsrKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuW2ldKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12WTNKbFlYUmxMWEpsYm1SbGNpMXpkR1Z3TG1weklsMHNJbTVoYldWeklqcGJJbU55WldGMFpWSmxibVJsY2xOMFpYQWlMQ0p6ZEdGeWRGSmxibVJsY2t4dmIzQWlMQ0ptZFc1amRHbHZibk5VYjFKMWJpSXNJbVoxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbElpd2ljMk5vWldSMWJHVWlMQ0pqWVd4c1ltRmpheUlzSW1sdVpHVjRUMllpTENKd2RYTm9JaXdpWTJGdVkyVnNJaXdpYVc1a1pYaFBaa05oYkd4aVlXTnJJaXdpYzNCc2FXTmxJaXdpY0hKdlkyVnpjeUlzSW14bGJtZDBhQ0lzSW01MWJWUm9hWE5HY21GdFpTSXNJbWtpWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGQmQwSkJMR2RDTzBGQlFWUXNVMEZCVTBFc1owSkJRVlFzUTBGQk1FSkRMR1ZCUVRGQ0xFVkJRVEpETzBGQlEzaEVPenM3T3p0QlFVdEJMRTFCUVVsRExHbENRVUZwUWl4RlFVRnlRanRCUVVOQkxFMUJRVWxETERCQ1FVRXdRaXhGUVVFNVFqczdRVUZGUVN4VFFVRlBPMEZCUTB4RExHTkJRVlVzVlVGQlEwTXNVVUZCUkN4RlFVRmpPMEZCUTNSQ1NqdEJRVU5CTzBGQlEwRXNWVUZCU1VVc2QwSkJRWGRDUnl4UFFVRjRRaXhEUVVGblEwUXNVVUZCYUVNc1RVRkJPRU1zUTBGQlF5eERRVUZ1UkN4RlFVRnpSRHRCUVVOd1JFWXNaME5CUVhkQ1NTeEpRVUY0UWl4RFFVRTJRa1lzVVVGQk4wSTdRVUZEUkR0QlFVTkdMRXRCVUVrN08wRkJVMHhITEZsQlFWRXNWVUZCUTBnc1VVRkJSQ3hGUVVGak8wRkJRM0JDTEZWQlFVMUpMR3RDUVVGclFrNHNkMEpCUVhkQ1J5eFBRVUY0UWl4RFFVRm5RMFFzVVVGQmFFTXNRMEZCZUVJN1FVRkRRU3hWUVVGSlNTeHZRa0ZCYjBJc1EwRkJReXhEUVVGNlFpeEZRVUUwUWp0QlFVTXhRazRzWjBOQlFYZENUeXhOUVVGNFFpeERRVUVyUWtRc1pVRkJMMElzUlVGQlowUXNRMEZCYUVRN1FVRkRSRHRCUVVOR0xFdEJaRWs3TzBGQlowSk1SU3hoUVVGVExGbEJRVTA3TzBGQlNXSTdRVUZLWVN4cFFrRkZLMElzUTBGQlExSXNkVUpCUVVRc1JVRkJNRUpFTEdOQlFURkNMRU5CUmk5Q08wRkJRMkk3TzBGQlEwTkJMRzlDUVVaWk8wRkJSVWxETERaQ1FVWktPMEZCUzJKQkxEaENRVUYzUWxNc1RVRkJlRUlzUjBGQmFVTXNRMEZCYWtNN08wRkJSVUU3UVVGRFFTeFZRVUZOUXl4bFFVRmxXQ3hsUVVGbFZTeE5RVUZ3UXp0QlFVTkJMRmRCUVVzc1NVRkJTVVVzU1VGQlNTeERRVUZpTEVWQlFXZENRU3hKUVVGSlJDeFpRVUZ3UWl4RlFVRnJRME1zUjBGQmJFTXNSVUZCZFVNN1FVRkRja05hTEhWQ1FVRmxXU3hEUVVGbU8wRkJRMFE3UVVGRFJqdEJRVFZDU1N4SFFVRlFPMEZCT0VKRUlpd2labWxzWlNJNkltTnlaV0YwWlMxeVpXNWtaWEl0YzNSbGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLU0I3WEc0Z0lDOHFLbHh1SUNBZ0tpQlhaU0IxYzJVZ2RIZHZJR0Z5Y21GNWN5d2diMjVsSUdadmNpQjBhR2x6SUdaeVlXMWxJR0Z1WkNCdmJtVWdkRzhnY1hWbGRXVWdabTl5SUhSb1pWeHVJQ0FnS2lCdVpYaDBJR1p5WVcxbExDQnlaWFZ6YVc1bklHVmhZMmdnZEc4Z1lYWnZhV1FnUjBNdVhHNGdJQ0FxSUVCMGVYQmxJSHRCY25KaGVYMWNiaUFnSUNvdlhHNGdJR3hsZENCbWRXNWpkR2x2Ym5OVWIxSjFiaUE5SUZ0ZE8xeHVJQ0JzWlhRZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1VnUFNCYlhUdGNibHh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJSE5qYUdWa2RXeGxPaUFvWTJGc2JHSmhZMnNwSUQwK0lIdGNiaUFnSUNBZ0lITjBZWEowVW1WdVpHVnlURzl2Y0NncE8xeHVJQ0FnSUNBZ0x5OGdTV1lnZEdocGN5QmpZV3hzWW1GamF5QnBjMjRuZENCaGJISmxZV1I1SUhOamFHVmtkV3hsWkNCMGJ5QnlkVzRnYm1WNGRDQm1jbUZ0WlZ4dUlDQWdJQ0FnYVdZZ0tHWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTG1sdVpHVjRUMllvWTJGc2JHSmhZMnNwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2Ym5OVWIxSjFiazVsZUhSR2NtRnRaUzV3ZFhOb0tHTmhiR3hpWVdOcktUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyRnVZMlZzT2lBb1kyRnNiR0poWTJzcElEMCtJSHRjYmlBZ0lDQWdJR052Ym5OMElHbHVaR1Y0VDJaRFlXeHNZbUZqYXlBOUlHWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTG1sdVpHVjRUMllvWTJGc2JHSmhZMnNwTzF4dUlDQWdJQ0FnYVdZZ0tHbHVaR1Y0VDJaRFlXeHNZbUZqYXlBaFBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YzNCc2FXTmxLR2x1WkdWNFQyWkRZV3hzWW1GamF5d2dNU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSEJ5YjJObGMzTTZJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDOHZJRk4zWVhBZ2RHaHBjeUJtY21GdFpTQmhibVFnYm1WNGRDQm1jbUZ0WlNCaGNuSmhlWE1nZEc4Z1lYWnZhV1FnUjBOY2JpQWdJQ0FnSUZ0bWRXNWpkR2x2Ym5OVWIxSjFiaXdnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVmRJRDBnVzJaMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxMQ0JtZFc1amRHbHZibk5VYjFKMWJsMDdYRzVjYmlBZ0lDQWdJQzh2SUVOc1pXRnlJRzVsZUhRZ1puSmhiV1VnYkdsemRGeHVJQ0FnSUNBZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YkdWdVozUm9JRDBnTUR0Y2JseHVJQ0FnSUNBZ0x5OGdSWGhsWTNWMFpTQmhiR3dnYjJZZ2RHaHBjeUJtY21GdFpTZHpJR1oxYm1OMGFXOXVjMXh1SUNBZ0lDQWdZMjl1YzNRZ2JuVnRWR2hwYzBaeVlXMWxJRDBnWm5WdVkzUnBiMjV6Vkc5U2RXNHViR1Z1WjNSb08xeHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFVYUdselJuSmhiV1U3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZibk5VYjFKMWJsdHBYU2dwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZUdGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL2NyZWF0ZS1yZW5kZXItc3RlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcbnZhciB0cmFuc2xhdGVNYXAgPSB7XG4gIHg6IFRSQU5TTEFURSArICdYJyxcbiAgeTogVFJBTlNMQVRFICsgJ1knLFxuICB6OiBUUkFOU0xBVEUgKyAnWidcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkU3R5bGVQcm9wZXJ0eVN0cmluZyhzdGF0ZSwgY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgdmFyIHByb3BlcnR5U3RyaW5nID0gJyc7XG4gIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSAnJztcbiAgdmFyIGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICB2YXIgdHJhbnNmb3JtSGFzWiA9IGZhbHNlO1xuXG4gIC8vIEZpcnN0IGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgY2hhbmdlZCB0cmFuc2Zvcm0gdmFsdWVzXG4gIC8vIGFuZCBpZiB0cnVlIGFkZCBhbGwgdHJhbnNmb3JtIHZhbHVlc1xuICB2YXIgbnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNoYW5nZWRWYWx1ZXM7IGkrKykge1xuICAgIHZhciBrZXkgPSBjaGFuZ2VkVmFsdWVzW2ldO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBwcm9wZXJ0eSwgYWRkIGFsbCBvdGhlciB0cmFuc2Zvcm0gcHJvcHNcbiAgICAvLyB0byBjaGFuZ2VkVmFsdWVzIGFuZCB0aGVuIGJyZWFrXG4gICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuXG4gICAgICBmb3IgKHZhciBfa2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRbX2tleV0gJiYgY2hhbmdlZFZhbHVlcy5pbmRleE9mKF9rZXkpID09PSAtMSkge1xuICAgICAgICAgIGNoYW5nZWRWYWx1ZXMucHVzaChfa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgdG90YWxOdW1DaGFuZ2VkVmFsdWVzID0gY2hhbmdlZFZhbHVlcy5sZW5ndGg7XG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCB0b3RhbE51bUNoYW5nZWRWYWx1ZXM7IF9pKyspIHtcbiAgICB2YXIgX2tleTIgPSBjaGFuZ2VkVmFsdWVzW19pXTtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZVtfa2V5Ml07XG5cbiAgICBpZiAodHJhbnNsYXRlTWFwW19rZXkyXSkge1xuICAgICAgX2tleTIgPSB0cmFuc2xhdGVNYXBbX2tleTJdO1xuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSBudW1iZXIgb3Igb2JqZWN0IGFuZCB3ZSBoYXZlIGZpbHRlciwgYXBwbHkgZmlsdGVyXG4gICAgaWYgKF92YWx1ZVR5cGVzMi5kZWZhdWx0W19rZXkyXSAmJiAoKDAsIF91dGlscy5pc051bSkodmFsdWUpIHx8ICgwLCBfdXRpbHMuaXNPYmopKHZhbHVlKSkgJiYgX3ZhbHVlVHlwZXMyLmRlZmF1bHRbX2tleTJdLnRyYW5zZm9ybSkge1xuICAgICAgdmFsdWUgPSBfdmFsdWVUeXBlczIuZGVmYXVsdFtfa2V5Ml0udHJhbnNmb3JtKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W19rZXkyXSkge1xuICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IF9rZXkyICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgdHJhbnNmb3JtSGFzWiA9IF9rZXkyID09PSB0cmFuc2xhdGVNYXAueiA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShfa2V5MiwgdHJ1ZSkgKyAnOicgKyB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSBoYXZlIHRyYW5zZm9ybSBwcm9wcywgYnVpbGQgYSB0cmFuc2Zvcm0gc3RyaW5nXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSB0cmFuc2xhdGVNYXAueiArICcoMCknO1xuICAgIH1cblxuICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKCd0cmFuc2Zvcm0nLCB0cnVlKSArICc6JyArIHRyYW5zZm9ybVN0cmluZztcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eVN0cmluZztcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlcywgY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgdmFyIHByb3BlcnR5U3RyaW5nID0gYnVpbGRTdHlsZVByb3BlcnR5U3RyaW5nKHZhbHVlcywgY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pO1xuICBlbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gcHJvcGVydHlTdHJpbmc7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzSmxibVJsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUpVVWtGT1UweEJWRVVpTENKMGNtRnVjMnhoZEdWTllYQWlMQ0o0SWl3aWVTSXNJbm9pTENKaWRXbHNaRk4wZVd4bFVISnZjR1Z5ZEhsVGRISnBibWNpTENKemRHRjBaU0lzSW1Ob1lXNW5aV1JXWVd4MVpYTWlMQ0psYm1GaWJHVklZWEprZDJGeVpVRmpZMlZzWlhKaGRHbHZiaUlzSW5CeWIzQmxjblI1VTNSeWFXNW5JaXdpZEhKaGJuTm1iM0p0VTNSeWFXNW5JaXdpYUdGelZISmhibk5tYjNKdElpd2lkSEpoYm5ObWIzSnRTR0Z6V2lJc0ltNTFiVU5vWVc1blpXUldZV3gxWlhNaUxDSnNaVzVuZEdnaUxDSnBJaXdpYTJWNUlpd2lhVzVrWlhoUFppSXNJbkIxYzJnaUxDSjBiM1JoYkU1MWJVTm9ZVzVuWldSV1lXeDFaWE1pTENKMllXeDFaU0lzSW5SeVlXNXpabTl5YlNJc0ltVnNaVzFsYm5RaUxDSjJZV3gxWlhNaUxDSnpkSGxzWlNJc0ltTnpjMVJsZUhRaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVWQkxFbEJRVTFCTEZsQlFWa3NWMEZCYkVJN1FVRkRRU3hKUVVGTlF5eGxRVUZsTzBGQlEyNUNReXhMUVVGSFJpeFpRVUZaTEVkQlJFazdRVUZGYmtKSExFdEJRVWRJTEZsQlFWa3NSMEZHU1R0QlFVZHVRa2tzUzBGQlIwb3NXVUZCV1R0QlFVaEpMRU5CUVhKQ096dEJRVTFCTEZOQlFWTkxMSGRDUVVGVUxFTkJRV3REUXl4TFFVRnNReXhGUVVGNVEwTXNZVUZCZWtNc1JVRkJkMFJETERCQ1FVRjRSQ3hGUVVGdlJqdEJRVU5zUml4TlFVRkpReXhwUWtGQmFVSXNSVUZCY2tJN1FVRkRRU3hOUVVGSlF5eHJRa0ZCYTBJc1JVRkJkRUk3UVVGRFFTeE5RVUZKUXl4bFFVRmxMRXRCUVc1Q08wRkJRMEVzVFVGQlNVTXNaMEpCUVdkQ0xFdEJRWEJDT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hOUVVGTlF5eHRRa0ZCYlVKT0xHTkJRV05QTEUxQlFYWkRPMEZCUTBFc1QwRkJTeXhKUVVGSlF5eEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWxHTEdkQ1FVRndRaXhGUVVGelEwVXNSMEZCZEVNc1JVRkJNa003UVVGRGVrTXNVVUZCVFVNc1RVRkJUVlFzWTBGQlkxRXNRMEZCWkN4RFFVRmFPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFJRVUZKTEhsQ1FVRmxReXhIUVVGbUxFTkJRVW9zUlVGQmVVSTdRVUZEZGtKTUxIRkNRVUZsTEVsQlFXWTdPMEZCUlVFc1YwRkJTeXhKUVVGSlN5eEpRVUZVTEVsQlFXZENWaXhMUVVGb1FpeEZRVUYxUWp0QlFVTnlRaXhaUVVGSkxIbENRVUZsVlN4SlFVRm1MRXRCUVhWQ1ZDeGpRVUZqVlN4UFFVRmtMRU5CUVhOQ1JDeEpRVUYwUWl4TlFVRXJRaXhEUVVGRExFTkJRVE5FTEVWQlFUaEVPMEZCUXpWRVZDeDNRa0ZCWTFjc1NVRkJaQ3hEUVVGdFFrWXNTVUZCYmtJN1FVRkRSRHRCUVVOR096dEJRVVZFTzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3hOUVVGTlJ5eDNRa0ZCZDBKYUxHTkJRV05QTEUxQlFUVkRPMEZCUTBFc1QwRkJTeXhKUVVGSlF5eExRVUZKTEVOQlFXSXNSVUZCWjBKQkxFdEJRVWxKTEhGQ1FVRndRaXhGUVVFeVEwb3NTVUZCTTBNc1JVRkJaMFE3UVVGRE9VTXNVVUZCU1VNc1VVRkJUVlFzWTBGQlkxRXNSVUZCWkN4RFFVRldPMEZCUTBFc1VVRkJTVXNzVVVGQlVXUXNUVUZCVFZVc1MwRkJUaXhEUVVGYU96dEJRVVZCTEZGQlFVbG1MR0ZCUVdGbExFdEJRV0lzUTBGQlNpeEZRVUYxUWp0QlFVTnlRa0VzWTBGQlRXWXNZVUZCWVdVc1MwRkJZaXhEUVVGT08wRkJRMFE3TzBGQlJVUTdRVUZEUVN4UlFVRkpMSEZDUVVGWFFTeExRVUZZTEUxQlFXOUNMR3RDUVVGTlNTeExRVUZPTEV0QlFXZENMR3RDUVVGTlFTeExRVUZPTEVOQlFYQkRMRXRCUVhGRUxIRkNRVUZYU2l4TFFVRllMRVZCUVdkQ1N5eFRRVUY2UlN4RlFVRnZSanRCUVVOc1JrUXNZMEZCVVN4eFFrRkJWMG9zUzBGQldDeEZRVUZuUWtzc1UwRkJhRUlzUTBGQk1FSkVMRXRCUVRGQ0xFTkJRVkk3UVVGRFJEczdRVUZGUkN4UlFVRkpMSGxDUVVGbFNpeExRVUZtTEVOQlFVb3NSVUZCZVVJN1FVRkRka0pPTEhsQ1FVRnRRazBzVVVGQlRTeEhRVUZPTEVkQlFWbEpMRXRCUVZvc1IwRkJiMElzU1VGQmRrTTdRVUZEUVZJc2MwSkJRV2xDU1N4VlFVRlJaaXhoUVVGaFJ5eERRVUYwUWl4SFFVRXlRaXhKUVVFelFpeEhRVUZyUTFFc1lVRkJiRVE3UVVGRlJDeExRVXBFTEUxQlNVODdRVUZEVEVnc2QwSkJRV3RDTEUxQlFVMHNkMEpCUVZOUExFdEJRVlFzUlVGQll5eEpRVUZrTEVOQlFVNHNSMEZCTkVJc1IwRkJOVUlzUjBGQmEwTkpMRXRCUVhCRU8wRkJRMFE3UVVGRFJqczdRVUZGUkR0QlFVTkJMRTFCUVVsVUxGbEJRVW9zUlVGQmEwSTdRVUZEYUVJc1VVRkJTU3hEUVVGRFF5eGhRVUZFTEVsQlFXdENTaXd3UWtGQmRFSXNSVUZCYTBRN1FVRkRhRVJGTEhsQ1FVRnRRbFFzWVVGQllVY3NRMEZCWWl4SFFVRnBRaXhMUVVGd1F6dEJRVU5FT3p0QlFVVkVTeXh6UWtGQmEwSXNUVUZCVFN4M1FrRkJVeXhYUVVGVUxFVkJRWE5DTEVsQlFYUkNMRU5CUVU0c1IwRkJiME1zUjBGQmNFTXNSMEZCTUVORExHVkJRVFZFTzBGQlEwUTdPMEZCUlVRc1UwRkJUMFFzWTBGQlVEdEJRVU5FT3p0clFrRkZZeXhWUVVGRFlTeFBRVUZFTEVWQlFWVkRMRTFCUVZZc1JVRkJhMEpvUWl4aFFVRnNRaXhGUVVGcFEwTXNNRUpCUVdwRExFVkJRV2RGTzBGQlF6ZEZMRTFCUVUxRExHbENRVUZwUWtvc2VVSkJRWGxDYTBJc1RVRkJla0lzUlVGQmFVTm9RaXhoUVVGcVF5eEZRVUZuUkVNc01FSkJRV2hFTEVOQlFYWkNPMEZCUTBGakxGVkJRVkZGTEV0QlFWSXNRMEZCWTBNc1QwRkJaQ3hKUVVGNVFtaENMR05CUVhwQ08wRkJRMFFzUXlJc0ltWnBiR1VpT2lKeVpXNWtaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1puSnZiU0FuTGk5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUhaaGJIVmxWSGx3WlhNZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5YzdYRzVwYlhCdmNuUWdjSEpsWm1sNFpYSWdabkp2YlNBbkxpOXdjbVZtYVhobGNpYzdYRzVwYlhCdmNuUWdleUJwYzA1MWJTd2dhWE5QWW1vZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCVVVrRk9VMHhCVkVVZ1BTQW5kSEpoYm5Oc1lYUmxKenRjYm1OdmJuTjBJSFJ5WVc1emJHRjBaVTFoY0NBOUlIdGNiaUFnZURvZ1ZGSkJUbE5NUVZSRklDc2dKMWduTEZ4dUlDQjVPaUJVVWtGT1UweEJWRVVnS3lBbldTY3NYRzRnSUhvNklGUlNRVTVUVEVGVVJTQXJJQ2RhSjF4dWZUdGNibHh1Wm5WdVkzUnBiMjRnWW5WcGJHUlRkSGxzWlZCeWIzQmxjblI1VTNSeWFXNW5LSE4wWVhSbExDQmphR0Z1WjJWa1ZtRnNkV1Z6TENCbGJtRmliR1ZJWVhKa2QyRnlaVUZqWTJWc1pYSmhkR2x2YmlrZ2UxeHVJQ0JzWlhRZ2NISnZjR1Z5ZEhsVGRISnBibWNnUFNBbkp6dGNiaUFnYkdWMElIUnlZVzV6Wm05eWJWTjBjbWx1WnlBOUlDY25PMXh1SUNCc1pYUWdhR0Z6VkhKaGJuTm1iM0p0SUQwZ1ptRnNjMlU3WEc0Z0lHeGxkQ0IwY21GdWMyWnZjbTFJWVhOYUlEMGdabUZzYzJVN1hHNWNiaUFnTHk4Z1JtbHljM1FnWTJobFkyc2dhV1lnZEdobGNtVWdZWEpsSUdGdWVTQmphR0Z1WjJWa0lIUnlZVzV6Wm05eWJTQjJZV3gxWlhOY2JpQWdMeThnWVc1a0lHbG1JSFJ5ZFdVZ1lXUmtJR0ZzYkNCMGNtRnVjMlp2Y20wZ2RtRnNkV1Z6WEc0Z0lHTnZibk4wSUc1MWJVTm9ZVzVuWldSV1lXeDFaWE1nUFNCamFHRnVaMlZrVm1Gc2RXVnpMbXhsYm1kMGFEdGNiaUFnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMURhR0Z1WjJWa1ZtRnNkV1Z6T3lCcEt5c3BJSHRjYmlBZ0lDQmpiMjV6ZENCclpYa2dQU0JqYUdGdVoyVmtWbUZzZFdWelcybGRPMXh1WEc0Z0lDQWdMeThnU1dZZ2RHaHBjeUJwY3lCaElIUnlZVzV6Wm05eWJTQndjbTl3WlhKMGVTd2dZV1JrSUdGc2JDQnZkR2hsY2lCMGNtRnVjMlp2Y20wZ2NISnZjSE5jYmlBZ0lDQXZMeUIwYnlCamFHRnVaMlZrVm1Gc2RXVnpJR0Z1WkNCMGFHVnVJR0p5WldGclhHNGdJQ0FnYVdZZ0tIUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJR2hoYzFSeVlXNXpabTl5YlNBOUlIUnlkV1U3WEc1Y2JpQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ6ZEdGMFpTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTQW1KaUJqYUdGdVoyVmtWbUZzZFdWekxtbHVaR1Y0VDJZb2EyVjVLU0E5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnSUNCamFHRnVaMlZrVm1Gc2RXVnpMbkIxYzJnb2EyVjVLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JqYjI1emRDQjBiM1JoYkU1MWJVTm9ZVzVuWldSV1lXeDFaWE1nUFNCamFHRnVaMlZrVm1Gc2RXVnpMbXhsYm1kMGFEdGNiaUFnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGIzUmhiRTUxYlVOb1lXNW5aV1JXWVd4MVpYTTdJR2tyS3lrZ2UxeHVJQ0FnSUd4bGRDQnJaWGtnUFNCamFHRnVaMlZrVm1Gc2RXVnpXMmxkTzF4dUlDQWdJR3hsZENCMllXeDFaU0E5SUhOMFlYUmxXMnRsZVYwN1hHNWNiaUFnSUNCcFppQW9kSEpoYm5Oc1lYUmxUV0Z3VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJR3RsZVNBOUlIUnlZVzV6YkdGMFpVMWhjRnRyWlhsZE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFbG1JSFJvYVhNZ2FYTWdZU0J1ZFcxaVpYSWdiM0lnYjJKcVpXTjBJR0Z1WkNCM1pTQm9ZWFpsSUdacGJIUmxjaXdnWVhCd2JIa2dabWxzZEdWeVhHNGdJQ0FnYVdZZ0tIWmhiSFZsVkhsd1pYTmJhMlY1WFNBbUppQW9hWE5PZFcwb2RtRnNkV1VwSUh4OElHbHpUMkpxS0haaGJIVmxLU2tnSmlZZ2RtRnNkV1ZVZVhCbGMxdHJaWGxkTG5SeVlXNXpabTl5YlNrZ2UxeHVJQ0FnSUNBZ2RtRnNkV1VnUFNCMllXeDFaVlI1Y0dWelcydGxlVjB1ZEhKaGJuTm1iM0p0S0haaGJIVmxLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ2RISmhibk5tYjNKdFUzUnlhVzVuSUNzOUlHdGxlU0FySUNjb0p5QXJJSFpoYkhWbElDc2dKeWtnSnp0Y2JpQWdJQ0FnSUhSeVlXNXpabTl5YlVoaGMxb2dQU0FvYTJWNUlEMDlQU0IwY21GdWMyeGhkR1ZOWVhBdWVpa2dQeUIwY25WbElEb2dkSEpoYm5ObWIzSnRTR0Z6V2p0Y2JseHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J3Y205d1pYSjBlVk4wY21sdVp5QXJQU0FuT3ljZ0t5QndjbVZtYVhobGNpaHJaWGtzSUhSeWRXVXBJQ3NnSnpvbklDc2dkbUZzZFdVN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ0x5OGdTV1lnZDJVZ2FHRjJaU0IwY21GdWMyWnZjbTBnY0hKdmNITXNJR0oxYVd4a0lHRWdkSEpoYm5ObWIzSnRJSE4wY21sdVoxeHVJQ0JwWmlBb2FHRnpWSEpoYm5ObWIzSnRLU0I3WEc0Z0lDQWdhV1lnS0NGMGNtRnVjMlp2Y20xSVlYTmFJQ1ltSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1NCN1hHNGdJQ0FnSUNCMGNtRnVjMlp2Y20xVGRISnBibWNnS3owZ2RISmhibk5zWVhSbFRXRndMbm9nS3lBbktEQXBKenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQndjbTl3WlhKMGVWTjBjbWx1WnlBclBTQW5PeWNnS3lCd2NtVm1hWGhsY2lnbmRISmhibk5tYjNKdEp5d2dkSEoxWlNrZ0t5QW5PaWNnS3lCMGNtRnVjMlp2Y20xVGRISnBibWM3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnY0hKdmNHVnlkSGxUZEhKcGJtYzdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNobGJHVnRaVzUwTENCMllXeDFaWE1zSUdOb1lXNW5aV1JXWVd4MVpYTXNJR1Z1WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVLU0E5UGlCN1hHNGdJR052Ym5OMElIQnliM0JsY25SNVUzUnlhVzVuSUQwZ1luVnBiR1JUZEhsc1pWQnliM0JsY25SNVUzUnlhVzVuS0haaGJIVmxjeXdnWTJoaGJtZGxaRlpoYkhWbGN5d2daVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNHBPMXh1SUNCbGJHVnRaVzUwTG5OMGVXeGxMbU56YzFSbGVIUWdLejBnY0hKdmNHVnlkSGxUZEhKcGJtYzdYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvcmVuZGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBheGVzID0gWydYJywgJ1knLCAnWiddO1xuXG52YXIgdHJhbnNmb3JtUHJvcHMgPSB7XG4gIHg6IHRydWUsXG4gIHk6IHRydWUsXG4gIHo6IHRydWVcbn07XG5cbnZhciBTQ0FMRSA9ICdzY2FsZSc7XG52YXIgUk9UQVRFID0gJ3JvdGF0ZSc7XG52YXIgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbnZhciBURVJNUyA9IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdO1xuXG50cmFuc2Zvcm1Qcm9wc1tST1RBVEVdID0gdHJhbnNmb3JtUHJvcHNbU0NBTEVdID0gdHJhbnNmb3JtUHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG5cblRFUk1TLmZvckVhY2goZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGF4ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXhpcykge1xuICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlO1xuICB9KTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2Zvcm1Qcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM1J5WVc1elptOXliUzF3Y205d2N5NXFjeUpkTENKdVlXMWxjeUk2V3lKaGVHVnpJaXdpZEhKaGJuTm1iM0p0VUhKdmNITWlMQ0o0SWl3aWVTSXNJbm9pTENKVFEwRk1SU0lzSWxKUFZFRlVSU0lzSWxSU1FVNVRSazlTVFY5UVJWSlRVRVZEVkVsV1JTSXNJbFJGVWsxVElpd2labTl5UldGamFDSXNJblJsY20waUxDSmhlR2x6SWwwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeEpRVUZOUVN4UFFVRlBMRU5CUVVNc1IwRkJSQ3hGUVVGTkxFZEJRVTRzUlVGQlZ5eEhRVUZZTEVOQlFXSTdPMEZCUlVFc1NVRkJTVU1zYVVKQlFXbENPMEZCUTI1Q1F5eExRVUZITEVsQlJHZENPMEZCUlc1Q1F5eExRVUZITEVsQlJtZENPMEZCUjI1Q1F5eExRVUZITzBGQlNHZENMRU5CUVhKQ096dEJRVTFCTEVsQlFVMURMRkZCUVZFc1QwRkJaRHRCUVVOQkxFbEJRVTFETEZOQlFWTXNVVUZCWmp0QlFVTkJMRWxCUVUxRExIZENRVUYzUWl4elFrRkJPVUk3UVVGRFFTeEpRVUZOUXl4UlFVRlJMRU5CUVVNc1YwRkJSQ3hGUVVGalNDeExRVUZrTEVWQlFYRkNReXhOUVVGeVFpeEZRVUUyUWl4TlFVRTNRaXhGUVVGeFEwTXNjVUpCUVhKRExFTkJRV1E3TzBGQlJVRk9MR1ZCUVdWTExFMUJRV1lzU1VGQmVVSk1MR1ZCUVdWSkxFdEJRV1lzU1VGQmQwSktMR1ZCUVdWTkxIRkNRVUZtTEVsQlFYZERMRWxCUVhwR096dEJRVVZCUXl4TlFVRk5ReXhQUVVGT0xFTkJRV01zVlVGQlEwTXNTVUZCUkR0QlFVRkJMRk5CUVZWV0xFdEJRVXRUTEU5QlFVd3NRMEZCWVN4VlFVRkRSU3hKUVVGRU8wRkJRVUVzVjBGQlZWWXNaVUZCWlZNc1QwRkJUME1zU1VGQmRFSXNTVUZCT0VJc1NVRkJlRU03UVVGQlFTeEhRVUZpTEVOQlFWWTdRVUZCUVN4RFFVRmtPenRyUWtGRlpWWXNZeUlzSW1acGJHVWlPaUowY21GdWMyWnZjbTB0Y0hKdmNITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCaGVHVnpJRDBnV3lkWUp5d2dKMWtuTENBbldpZGRPMXh1WEc1c1pYUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1BTQjdYRzRnSUhnNklIUnlkV1VzWEc0Z0lIazZJSFJ5ZFdVc1hHNGdJSG82SUhSeWRXVmNibjA3WEc1Y2JtTnZibk4wSUZORFFVeEZJRDBnSjNOallXeGxKenRjYm1OdmJuTjBJRkpQVkVGVVJTQTlJQ2R5YjNSaGRHVW5PMXh1WTI5dWMzUWdWRkpCVGxOR1QxSk5YMUJGVWxOUVJVTlVTVlpGSUQwZ0ozUnlZVzV6Wm05eWJWQmxjbk53WldOMGFYWmxKenRjYm1OdmJuTjBJRlJGVWsxVElEMGdXeWQwY21GdWMyeGhkR1VuTENCVFEwRk1SU3dnVWs5VVFWUkZMQ0FuYzJ0bGR5Y3NJRlJTUVU1VFJrOVNUVjlRUlZKVFVFVkRWRWxXUlYwN1hHNWNiblJ5WVc1elptOXliVkJ5YjNCelcxSlBWRUZVUlYwZ1BTQjBjbUZ1YzJadmNtMVFjbTl3YzF0VFEwRk1SVjBnUFNCMGNtRnVjMlp2Y20xUWNtOXdjMXRVVWtGT1UwWlBVazFmVUVWU1UxQkZRMVJKVmtWZElEMGdkSEoxWlR0Y2JseHVWRVZTVFZNdVptOXlSV0ZqYUNnb2RHVnliU2tnUFQ0Z1lYaGxjeTVtYjNKRllXTm9LQ2hoZUdsektTQTlQaUIwY21GdWMyWnZjbTFRY205d2MxdDBaWEp0SUNzZ1lYaHBjMTBnUFNCMGNuVmxLU2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUhSeVlXNXpabTl5YlZCeWIzQnpPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAvLyBDb2xvciBwcm9wc1xuICBjb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJhY2tncm91bmRDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIG91dGxpbmVDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGZpbGw6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzdHJva2U6IF92YWx1ZVR5cGVzLmNvbG9yLFxuXG4gIC8vIEJvcmRlciBwcm9wc1xuICBib3JkZXJDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlclRvcENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyUmlnaHRDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlckJvdHRvbUNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyTGVmdENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyUmFkaXVzOiBfdmFsdWVUeXBlcy5weCxcblxuICAvLyBQb3NpdGlvbmluZ1xuICB3aWR0aDogX3ZhbHVlVHlwZXMucHgsXG4gIGhlaWdodDogX3ZhbHVlVHlwZXMucHgsXG5cbiAgLy8gU2hhZG93c1xuICB0ZXh0U2hhZG93OiBfdmFsdWVUeXBlcy5zaGFkb3csXG4gIGJveFNoYWRvdzogX3ZhbHVlVHlwZXMuc2hhZG93LFxuXG4gIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gIHJvdGF0ZTogX3ZhbHVlVHlwZXMuYW5nbGUsXG4gIHJvdGF0ZVg6IF92YWx1ZVR5cGVzLmFuZ2xlLFxuICByb3RhdGVZOiBfdmFsdWVUeXBlcy5hbmdsZSxcbiAgcm90YXRlWjogX3ZhbHVlVHlwZXMuYW5nbGUsXG4gIHNjYWxlOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVYOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVZOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVaOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2tld1g6IF92YWx1ZVR5cGVzLmFuZ2xlLFxuICBza2V3WTogX3ZhbHVlVHlwZXMuYW5nbGUsXG4gIGRpc3RhbmNlOiBfdmFsdWVUeXBlcy5weCxcbiAgeDogX3ZhbHVlVHlwZXMucHgsXG4gIHk6IF92YWx1ZVR5cGVzLnB4LFxuICB6OiBfdmFsdWVUeXBlcy5weCxcbiAgcGVyc3BlY3RpdmU6IF92YWx1ZVR5cGVzLnB4LFxuICBvcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM1poYkhWbExYUjVjR1Z6TG1weklsMHNJbTVoYldWeklqcGJJbU52Ykc5eUlpd2lZbUZqYTJkeWIzVnVaRU52Ykc5eUlpd2liM1YwYkdsdVpVTnZiRzl5SWl3aVptbHNiQ0lzSW5OMGNtOXJaU0lzSW1KdmNtUmxja052Ykc5eUlpd2lZbTl5WkdWeVZHOXdRMjlzYjNJaUxDSmliM0prWlhKU2FXZG9kRU52Ykc5eUlpd2lZbTl5WkdWeVFtOTBkRzl0UTI5c2IzSWlMQ0ppYjNKa1pYSk1aV1owUTI5c2IzSWlMQ0ppYjNKa1pYSlNZV1JwZFhNaUxDSjNhV1IwYUNJc0ltaGxhV2RvZENJc0luUmxlSFJUYUdGa2IzY2lMQ0ppYjNoVGFHRmtiM2NpTENKeWIzUmhkR1VpTENKeWIzUmhkR1ZZSWl3aWNtOTBZWFJsV1NJc0luSnZkR0YwWlZvaUxDSnpZMkZzWlNJc0luTmpZV3hsV0NJc0luTmpZV3hsV1NJc0luTmpZV3hsV2lJc0luTnJaWGRZSWl3aWMydGxkMWtpTENKa2FYTjBZVzVqWlNJc0luZ2lMQ0o1SWl3aWVpSXNJbkJsY25Od1pXTjBhWFpsSWl3aWIzQmhZMmwwZVNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRyUWtGRFpUdEJRVU5pTzBGQlEwRkJMREJDUVVaaE8wRkJSMkpETEc5RFFVaGhPMEZCU1dKRExHbERRVXBoTzBGQlMySkRMSGxDUVV4aE8wRkJUV0pETERKQ1FVNWhPenRCUVZGaU8wRkJRMEZETEdkRFFWUmhPMEZCVldKRExHMURRVlpoTzBGQlYySkRMSEZEUVZoaE8wRkJXV0pETEhORFFWcGhPMEZCWVdKRExHOURRV0poTzBGQlkySkRMRGhDUVdSaE96dEJRV2RDWWp0QlFVTkJReXgxUWtGcVFtRTdRVUZyUW1KRExIZENRV3hDWVRzN1FVRnZRbUk3UVVGRFFVTXNaME5CY2tKaE8wRkJjMEppUXl3clFrRjBRbUU3TzBGQmQwSmlPMEZCUTBGRExESkNRWHBDWVR0QlFUQkNZa01zTkVKQk1VSmhPMEZCTWtKaVF5dzBRa0V6UW1FN1FVRTBRbUpETERSQ1FUVkNZVHRCUVRaQ1lrTXNNRUpCTjBKaE8wRkJPRUppUXl3eVFrRTVRbUU3UVVFclFtSkRMREpDUVM5Q1lUdEJRV2REWWtNc01rSkJhRU5oTzBGQmFVTmlReXd3UWtGcVEyRTdRVUZyUTJKRExEQkNRV3hEWVR0QlFXMURZa01zTUVKQmJrTmhPMEZCYjBOaVF5eHRRa0Z3UTJFN1FVRnhRMkpETEcxQ1FYSkRZVHRCUVhORFlrTXNiVUpCZEVOaE8wRkJkVU5pUXl3MlFrRjJRMkU3UVVGM1EySkRPMEZCZUVOaExFTWlMQ0ptYVd4bElqb2lkbUZzZFdVdGRIbHdaWE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJoYm1kc1pTd2dZV3h3YUdFc0lHTnZiRzl5TENCelkyRnNaU3dnYzJoaFpHOTNMQ0J3ZUNCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MllXeDFaUzEwZVhCbGN5YzdJRnh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBdkx5QkRiMnh2Y2lCd2NtOXdjMXh1SUNCamIyeHZjam9nWTI5c2IzSXNYRzRnSUdKaFkydG5jbTkxYm1SRGIyeHZjam9nWTI5c2IzSXNYRzRnSUc5MWRHeHBibVZEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR1pwYkd3NklHTnZiRzl5TEZ4dUlDQnpkSEp2YTJVNklHTnZiRzl5TEZ4dVhHNGdJQzh2SUVKdmNtUmxjaUJ3Y205d2MxeHVJQ0JpYjNKa1pYSkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHSnZjbVJsY2xSdmNFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ1ltOXlaR1Z5VW1sbmFIUkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHSnZjbVJsY2tKdmRIUnZiVU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdZbTl5WkdWeVRHVm1kRU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdZbTl5WkdWeVVtRmthWFZ6T2lCd2VDeGNibHh1SUNBdkx5QlFiM05wZEdsdmJtbHVaMXh1SUNCM2FXUjBhRG9nY0hnc1hHNGdJR2hsYVdkb2REb2djSGdzWEc1Y2JpQWdMeThnVTJoaFpHOTNjMXh1SUNCMFpYaDBVMmhoWkc5M09pQnphR0ZrYjNjc1hHNGdJR0p2ZUZOb1lXUnZkem9nYzJoaFpHOTNMQ0FnSUZ4dVhHNGdJQzh2SUZSeVlXNXpabTl5YlNCd2NtOXdaWEowYVdWelhHNGdJSEp2ZEdGMFpUb2dZVzVuYkdVc1hHNGdJSEp2ZEdGMFpWZzZJR0Z1WjJ4bExGeHVJQ0J5YjNSaGRHVlpPaUJoYm1kc1pTeGNiaUFnY205MFlYUmxXam9nWVc1bmJHVXNYRzRnSUhOallXeGxPaUJ6WTJGc1pTeGNiaUFnYzJOaGJHVllPaUJ6WTJGc1pTeGNiaUFnYzJOaGJHVlpPaUJ6WTJGc1pTeGNiaUFnYzJOaGJHVmFPaUJ6WTJGc1pTeGNiaUFnYzJ0bGQxZzZJR0Z1WjJ4bExGeHVJQ0J6YTJWM1dUb2dZVzVuYkdVc1hHNGdJR1JwYzNSaGJtTmxPaUJ3ZUN4Y2JpQWdlRG9nY0hnc1hHNGdJSGs2SUhCNExGeHVJQ0I2T2lCd2VDeGNiaUFnY0dWeWMzQmxZM1JwZG1VNklIQjRMRnh1SUNCdmNHRmphWFI1T2lCaGJIQm9ZVnh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgY2FtZWxDYWNoZSA9IHt9O1xudmFyIGRhc2hDYWNoZSA9IHt9O1xudmFyIHByZWZpeGVzID0gWydXZWJraXQnLCAnTW96JywgJ08nLCAnbXMnLCAnJ107XG52YXIgbnVtUHJlZml4ZXMgPSBwcmVmaXhlcy5sZW5ndGg7XG52YXIgdGVzdEVsZW1lbnQgPSB2b2lkIDA7XG5cbi8qXG4gIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgXG4gIEBwYXJhbSBbc3RyaW5nXTogU3R5bGUgcHJvcGVydHlcbiAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG52YXIgdGVzdFByZWZpeCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgdmFyIG5vUHJlZml4ID0gcHJlZml4ID09PSAnJztcbiAgICB2YXIgcHJlZml4ZWRQcm9wZXJ0eU5hbWUgPSBub1ByZWZpeCA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgIGlmIChwcmVmaXhlZFByb3BlcnR5TmFtZSBpbiB0ZXN0RWxlbWVudC5zdHlsZSkge1xuICAgICAgY2FtZWxDYWNoZVtrZXldID0gcHJlZml4ZWRQcm9wZXJ0eU5hbWU7XG4gICAgICBkYXNoQ2FjaGVba2V5XSA9ICcnICsgKG5vUHJlZml4ID8gJycgOiAnLScpICsgKDAsIF91dGlscy5jYW1lbFRvRGFzaCkocHJlZml4ZWRQcm9wZXJ0eU5hbWUpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGtleSwgYXNEYXNoQ2FzZSkge1xuICB2YXIgY2FjaGUgPSBhc0Rhc2hDYXNlID8gZGFzaENhY2hlIDogY2FtZWxDYWNoZTtcblxuICBpZiAoIWNhY2hlW2tleV0pIHtcbiAgICB0ZXN0UHJlZml4KGtleSk7XG4gIH1cblxuICByZXR1cm4gY2FjaGVba2V5XTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNCeVpXWnBlR1Z5TG1weklsMHNJbTVoYldWeklqcGJJbU5oYldWc1EyRmphR1VpTENKa1lYTm9RMkZqYUdVaUxDSndjbVZtYVhobGN5SXNJbTUxYlZCeVpXWnBlR1Z6SWl3aWJHVnVaM1JvSWl3aWRHVnpkRVZzWlcxbGJuUWlMQ0owWlhOMFVISmxabWw0SWl3aWEyVjVJaXdpWkc5amRXMWxiblFpTENKamNtVmhkR1ZGYkdWdFpXNTBJaXdpYVNJc0luQnlaV1pwZUNJc0ltNXZVSEpsWm1sNElpd2ljSEpsWm1sNFpXUlFjbTl3WlhKMGVVNWhiV1VpTENKamFHRnlRWFFpTENKMGIxVndjR1Z5UTJGelpTSXNJbk5zYVdObElpd2ljM1I1YkdVaUxDSmhjMFJoYzJoRFlYTmxJaXdpWTJGamFHVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN1FVRkZRU3hKUVVGTlFTeGhRVUZoTEVWQlFXNUNPMEZCUTBFc1NVRkJUVU1zV1VGQldTeEZRVUZzUWp0QlFVTkJMRWxCUVUxRExGZEJRVmNzUTBGQlF5eFJRVUZFTEVWQlFWVXNTMEZCVml4RlFVRm5RaXhIUVVGb1FpeEZRVUZ2UWl4SlFVRndRaXhGUVVFd1FpeEZRVUV4UWl4RFFVRnFRanRCUVVOQkxFbEJRVTFETEdOQlFXTkVMRk5CUVZORkxFMUJRVGRDTzBGQlEwRXNTVUZCU1VNc2IwSkJRVW83TzBGQlJVRTdPenM3T3p0QlFVMUJMRWxCUVUxRExHRkJRV0VzVlVGQlEwTXNSMEZCUkN4RlFVRlRPMEZCUXpGQ1JpeG5Ra0ZCWTBFc1pVRkJaVWNzVTBGQlUwTXNZVUZCVkN4RFFVRjFRaXhMUVVGMlFpeERRVUUzUWpzN1FVRkZRU3hQUVVGTExFbEJRVWxETEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNWQXNWMEZCY0VJc1JVRkJhVU5QTEVkQlFXcERMRVZCUVhORE8wRkJRM0JETEZGQlFVMURMRk5CUVZOVUxGTkJRVk5STEVOQlFWUXNRMEZCWmp0QlFVTkJMRkZCUVUxRkxGZEJRVmxFTEZkQlFWY3NSVUZCTjBJN1FVRkRRU3hSUVVGTlJTeDFRa0ZCZFVKRUxGZEJRVmRNTEVkQlFWZ3NSMEZCYVVKSkxGTkJRVk5LTEVsQlFVbFBMRTFCUVVvc1EwRkJWeXhEUVVGWUxFVkJRV05ETEZkQlFXUXNSVUZCVkN4SFFVRjFRMUlzU1VGQlNWTXNTMEZCU2l4RFFVRlZMRU5CUVZZc1EwRkJja1k3TzBGQlJVRXNVVUZCU1Vnc2QwSkJRWGRDVWl4WlFVRlpXU3hMUVVGNFF5eEZRVUVyUXp0QlFVTTNRMnBDTEdsQ1FVRlhUeXhIUVVGWUxFbEJRV3RDVFN4dlFrRkJiRUk3UVVGRFFWb3NaMEpCUVZWTkxFZEJRVllzVlVGQmNVSkxMRmRCUVZjc1JVRkJXQ3hIUVVGblFpeEhRVUZ5UXl4SlFVRTBReXgzUWtGQldVTXNiMEpCUVZvc1EwRkJOVU03UVVGRFJEdEJRVU5HTzBGQlEwWXNRMEZpUkRzN2EwSkJaV1VzVlVGQlEwNHNSMEZCUkN4RlFVRk5WeXhWUVVGT0xFVkJRWEZDTzBGQlEyeERMRTFCUVUxRExGRkJRVkZFTEdGQlFXRnFRaXhUUVVGaUxFZEJRWGxDUkN4VlFVRjJRenM3UVVGRlFTeE5RVUZKTEVOQlFVTnRRaXhOUVVGTldpeEhRVUZPTEVOQlFVd3NSVUZCYVVJN1FVRkRaa1FzWlVGQlYwTXNSMEZCV0R0QlFVTkVPenRCUVVWRUxGTkJRVTlaTEUxQlFVMWFMRWRCUVU0c1EwRkJVRHRCUVVORUxFTWlMQ0ptYVd4bElqb2ljSEpsWm1sNFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmpZVzFsYkZSdlJHRnphQ0I5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJR05oYldWc1EyRmphR1VnUFNCN2ZUdGNibU52Ym5OMElHUmhjMmhEWVdOb1pTQTlJSHQ5TzF4dVkyOXVjM1FnY0hKbFptbDRaWE1nUFNCYkoxZGxZbXRwZENjc0owMXZlaWNzSjA4bkxDZHRjeWNzSUNjblhUdGNibU52Ym5OMElHNTFiVkJ5WldacGVHVnpJRDBnY0hKbFptbDRaWE11YkdWdVozUm9PMXh1YkdWMElIUmxjM1JGYkdWdFpXNTBPMXh1WEc0dktseHVJQ0JVWlhOMElITjBlV3hsSUhCeWIzQmxjblI1SUdadmNpQndjbVZtYVhobFpDQjJaWEp6YVc5dVhHNGdJRnh1SUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUZOMGVXeGxJSEJ5YjNCbGNuUjVYRzRnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTA2SUVOaFkyaGxaQ0J3Y205d1pYSjBlU0J1WVcxbFhHNHFMMXh1WTI5dWMzUWdkR1Z6ZEZCeVpXWnBlQ0E5SUNoclpYa3BJRDArSUh0Y2JpQWdkR1Z6ZEVWc1pXMWxiblFnUFNCMFpYTjBSV3hsYldWdWRDQjhmQ0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZGthWFluS1R0Y2JseHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJWQnlaV1pwZUdWek95QnBLeXNwSUh0Y2JpQWdJQ0JqYjI1emRDQndjbVZtYVhnZ1BTQndjbVZtYVhobGMxdHBYVHRjYmlBZ0lDQmpiMjV6ZENCdWIxQnlaV1pwZUNBOUlDaHdjbVZtYVhnZ1BUMDlJQ2NuS1R0Y2JpQWdJQ0JqYjI1emRDQndjbVZtYVhobFpGQnliM0JsY25SNVRtRnRaU0E5SUc1dlVISmxabWw0SUQ4Z2EyVjVJRG9nY0hKbFptbDRJQ3NnYTJWNUxtTm9ZWEpCZENnd0tTNTBiMVZ3Y0dWeVEyRnpaU2dwSUNzZ2EyVjVMbk5zYVdObEtERXBPMXh1WEc0Z0lDQWdhV1lnS0hCeVpXWnBlR1ZrVUhKdmNHVnlkSGxPWVcxbElHbHVJSFJsYzNSRmJHVnRaVzUwTG5OMGVXeGxLU0I3WEc0Z0lDQWdJQ0JqWVcxbGJFTmhZMmhsVzJ0bGVWMGdQU0J3Y21WbWFYaGxaRkJ5YjNCbGNuUjVUbUZ0WlR0Y2JpQWdJQ0FnSUdSaGMyaERZV05vWlZ0clpYbGRJRDBnWUNSN0tHNXZVSEpsWm1sNElEOGdKeWNnT2lBbkxTY3BmU1I3WTJGdFpXeFViMFJoYzJnb2NISmxabWw0WldSUWNtOXdaWEowZVU1aGJXVXBmV0E3WEc0Z0lDQWdmVnh1SUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvYTJWNUxDQmhjMFJoYzJoRFlYTmxLU0E5UGlCN1hHNGdJR052Ym5OMElHTmhZMmhsSUQwZ1lYTkVZWE5vUTJGelpTQS9JR1JoYzJoRFlXTm9aU0E2SUdOaGJXVnNRMkZqYUdVN1hHNWNiaUFnYVdZZ0tDRmpZV05vWlZ0clpYbGRLU0I3WEc0Z0lDQWdkR1Z6ZEZCeVpXWnBlQ2hyWlhrcE8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlHTmhZMmhsVzJ0bGVWMDdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvcHJlZml4ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdGVwcyA9IGV4cG9ydHMuY2xhbXAgPSBleHBvcnRzLmNsYW1wT3ZlciA9IGV4cG9ydHMuY2xhbXBVbmRlciA9IGV4cG9ydHMuaW50ZXJwb2xhdGUgPSBleHBvcnRzLmZsb3cgPSBleHBvcnRzLmFwcGVuZFVuaXQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4vY2FsYycpO1xuXG4vKipcbiAqIEFwcGVuZCBVbml0XG4gKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBhcHBlbmRcbiAqIGFwcGVuZFVuaXQoJ3B4JywgMjApIC0+ICcyMHB4J1xuICogQHBhcmFtICB7c3RyaW5nfSB1bml0KVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgYXBwZW5kVW5pdCA9IGV4cG9ydHMuYXBwZW5kVW5pdCA9IGZ1bmN0aW9uICh1bml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiAnJyArIHYgKyB1bml0O1xuICB9O1xufTtcblxuLyoqXG4gKiBGbG93XG4gKiBDb21wb3NlIG90aGVyIHRyYW5zZm9ybWVycyB0byBydW4gbGluZWFyaWx5XG4gKiBmbG93KG1pbigyMCksIG1heCg0MCkpXG4gKiBAcGFyYW0gIHsuLi5mdW5jdGlvbnN9IHRyYW5zZm9ybWVyc1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbnZhciBmbG93ID0gZXhwb3J0cy5mbG93ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdHJhbnNmb3JtZXJzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdHJhbnNmb3JtZXJzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gIHZhciBpID0gMDtcblxuICByZXR1cm4gZnVuY3Rpb24gKGFjYykge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIHYgPSBhY2M7XG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldLmFwcGx5KHRyYW5zZm9ybWVycywgW3ZdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xuXG52YXIgaW50ZXJwb2xhdGUgPSBleHBvcnRzLmludGVycG9sYXRlID0gZnVuY3Rpb24gKGlucHV0LCBvdXRwdXQsIHJhbmdlRWFzaW5nKSB7XG4gIHZhciByYW5nZUxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgdmFyIGZpbmFsSW5kZXggPSByYW5nZUxlbmd0aCAtIDE7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtaW5pbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2IDw9IGlucHV0WzBdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0WzBdO1xuICAgIH1cblxuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA+PSBpbnB1dFtmaW5hbEluZGV4XSkge1xuICAgICAgcmV0dXJuIG91dHB1dFtmaW5hbEluZGV4XTtcbiAgICB9XG5cbiAgICB2YXIgaSA9IDE7XG5cbiAgICAvLyBGaW5kIGluZGV4IG9mIHJhbmdlIHN0YXJ0XG4gICAgZm9yICg7IGkgPCByYW5nZUxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5wdXRbaV0gPiB2IHx8IGkgPT09IGZpbmFsSW5kZXgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByb2dyZXNzSW5SYW5nZSA9ICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoaW5wdXRbaSAtIDFdLCBpbnB1dFtpXSwgdik7XG4gICAgdmFyIGVhc2VkUHJvZ3Jlc3MgPSByYW5nZUVhc2luZyA/IHJhbmdlRWFzaW5nW2ldKHByb2dyZXNzSW5SYW5nZSkgOiBwcm9ncmVzc0luUmFuZ2U7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykob3V0cHV0W2kgLSAxXSwgb3V0cHV0W2ldLCBlYXNlZFByb2dyZXNzKTtcbiAgfTtcbn07XG5cbi8qKlxuICogQ2xhbXAgdmFsdWUgYmV0d2VlblxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXN0cmljdCBhIGdpdmVuIHZhbHVlIGJldHdlZW4gYG1pbmAgYW5kIGBtYXhgXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pblxuICogQHBhcmFtICB7bnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGNsYW1wVW5kZXIgPSBleHBvcnRzLmNsYW1wVW5kZXIgPSBmdW5jdGlvbiAobWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBNYXRoLm1pbih2LCBtYXgpO1xuICB9O1xufTtcbnZhciBjbGFtcE92ZXIgPSBleHBvcnRzLmNsYW1wT3ZlciA9IGZ1bmN0aW9uIChtaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KHYsIG1pbik7XG4gIH07XG59O1xudmFyIGNsYW1wID0gZXhwb3J0cy5jbGFtcCA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICByZXR1cm4gZmxvdyhjbGFtcE92ZXIobWluKSwgY2xhbXBVbmRlcihtYXgpKTtcbn07XG5cbnZhciBzdGVwcyA9IGV4cG9ydHMuc3RlcHMgPSBmdW5jdGlvbiAoc3RlcHMsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciBwcm9ncmVzcyA9ICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkobWluLCBtYXgsIHYpO1xuICAgIHJldHVybiAoMCwgX2NhbGMuc3RlcFByb2dyZXNzKShzdGVwcywgcHJvZ3Jlc3MpO1xuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6TG1weklsMHNJbTVoYldWeklqcGJJbUZ3Y0dWdVpGVnVhWFFpTENKMWJtbDBJaXdpZGlJc0ltWnNiM2NpTENKMGNtRnVjMlp2Y20xbGNuTWlMQ0p1ZFcxVWNtRnVjMlp2Y20xbGNuTWlMQ0pzWlc1bmRHZ2lMQ0pwSWl3aVlXTmpJaXdpWVhKbmN5SXNJbWx1ZEdWeWNHOXNZWFJsSWl3aWFXNXdkWFFpTENKdmRYUndkWFFpTENKeVlXNW5aVVZoYzJsdVp5SXNJbkpoYm1kbFRHVnVaM1JvSWl3aVptbHVZV3hKYm1SbGVDSXNJbkJ5YjJkeVpYTnpTVzVTWVc1blpTSXNJbVZoYzJWa1VISnZaM0psYzNNaUxDSmpiR0Z0Y0ZWdVpHVnlJaXdpYldGNElpd2lUV0YwYUNJc0ltMXBiaUlzSW1Oc1lXMXdUM1psY2lJc0ltTnNZVzF3SWl3aWMzUmxjSE1pTENKd2NtOW5jbVZ6Y3lKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN1FVRkJRVHM3UVVGRlFUczdPenM3T3p0QlFVOVBMRWxCUVUxQkxHdERRVUZoTEZWQlFVTkRMRWxCUVVRN1FVRkJRU3hUUVVGVkxGVkJRVU5ETEVOQlFVUTdRVUZCUVN4blFrRkJWVUVzUTBGQlZpeEhRVUZqUkN4SlFVRmtPMEZCUVVFc1IwRkJWanRCUVVGQkxFTkJRVzVDT3p0QlFVVlFPenM3T3pzN08wRkJUMDhzU1VGQlRVVXNjMEpCUVU4c1dVRkJjVUk3UVVGQlFTeHZRMEZCYWtKRExGbEJRV2xDTzBGQlFXcENRU3huUWtGQmFVSTdRVUZCUVRzN1FVRkRka01zVFVGQlRVTXNhMEpCUVd0Q1JDeGhRVUZoUlN4TlFVRnlRenRCUVVOQkxFMUJRVWxETEVsQlFVa3NRMEZCVWpzN1FVRkZRU3hUUVVGUExGVkJRVU5ETEVkQlFVUXNSVUZCYTBJN1FVRkJRU3gxUTBGQlZFTXNTVUZCVXp0QlFVRlVRU3hWUVVGVE8wRkJRVUU3TzBGQlEzWkNMRkZCUVVsUUxFbEJRVWxOTEVkQlFWSTdRVUZEUVN4VFFVRkxSQ3hKUVVGSkxFTkJRVlFzUlVGQldVRXNTVUZCU1VZc1pVRkJhRUlzUlVGQmFVTkZMRWRCUVdwRExFVkJRWE5ETzBGQlEzQkRUQ3hWUVVGSlJTeGhRVUZoUnl4RFFVRmlMSFZDUVVGblFrd3NRMEZCYUVJc1UwRkJjMEpQTEVsQlFYUkNMRVZCUVVvN1FVRkRSRHM3UVVGRlJDeFhRVUZQVUN4RFFVRlFPMEZCUTBRc1IwRlFSRHRCUVZGRUxFTkJXazA3TzBGQlkwRXNTVUZCVFZFc2IwTkJRV01zVlVGQlEwTXNTMEZCUkN4RlFVRlJReXhOUVVGU0xFVkJRV2RDUXl4WFFVRm9RaXhGUVVGblF6dEJRVU42UkN4TlFVRk5ReXhqUVVGalNDeE5RVUZOVEN4TlFVRXhRanRCUVVOQkxFMUJRVTFUTEdGQlFXRkVMR05CUVdNc1EwRkJha003TzBGQlJVRXNVMEZCVHl4VlFVRkRXaXhEUVVGRUxFVkJRVTg3UVVGRFdqdEJRVU5CTEZGQlFVbEJMRXRCUVV0VExFMUJRVTBzUTBGQlRpeERRVUZVTEVWQlFXMUNPMEZCUTJwQ0xHRkJRVTlETEU5QlFVOHNRMEZCVUN4RFFVRlFPMEZCUTBRN08wRkJSVVE3UVVGRFFTeFJRVUZKVml4TFFVRkxVeXhOUVVGTlNTeFZRVUZPTEVOQlFWUXNSVUZCTkVJN1FVRkRNVUlzWVVGQlQwZ3NUMEZCVDBjc1ZVRkJVQ3hEUVVGUU8wRkJRMFE3TzBGQlJVUXNVVUZCU1ZJc1NVRkJTU3hEUVVGU096dEJRVVZCTzBGQlEwRXNWMEZCVDBFc1NVRkJTVThzVjBGQldDeEZRVUYzUWxBc1IwRkJlRUlzUlVGQk5rSTdRVUZETTBJc1ZVRkJTVWtzVFVGQlRVb3NRMEZCVGl4SlFVRlhUQ3hEUVVGWUxFbEJRV2RDU3l4TlFVRk5VU3hWUVVFeFFpeEZRVUZ6UXp0QlFVTndRenRCUVVORU8wRkJRMFk3TzBGQlJVUXNVVUZCVFVNc2EwSkJRV3RDTEdkRFFVRnhRa3dzVFVGQlRVb3NTVUZCU1N4RFFVRldMRU5CUVhKQ0xFVkJRVzFEU1N4TlFVRk5TaXhEUVVGT0xFTkJRVzVETEVWQlFUWkRUQ3hEUVVFM1F5eERRVUY0UWp0QlFVTkJMRkZCUVUxbExHZENRVUZwUWtvc1YwRkJSQ3hIUVVGblFrRXNXVUZCV1U0c1EwRkJXaXhGUVVGbFV5eGxRVUZtTEVOQlFXaENMRWRCUVd0RVFTeGxRVUY0UlR0QlFVTkJMRmRCUVU4c1owTkJRWEZDU2l4UFFVRlBUQ3hKUVVGSkxFTkJRVmdzUTBGQmNrSXNSVUZCYjBOTExFOUJRVTlNTEVOQlFWQXNRMEZCY0VNc1JVRkJLME5WTEdGQlFTOURMRU5CUVZBN1FVRkRSQ3hIUVhaQ1JEdEJRWGRDUkN4RFFUVkNUVHM3UVVFNFFsQTdPenM3T3pzN1FVRlBUeXhKUVVGTlF5eHJRMEZCWVN4VlFVRkRReXhIUVVGRU8wRkJRVUVzVTBGQlV5eFZRVUZEYWtJc1EwRkJSRHRCUVVGQkxGZEJRVTlyUWl4TFFVRkxReXhIUVVGTUxFTkJRVk51UWl4RFFVRlVMRVZCUVZscFFpeEhRVUZhTEVOQlFWQTdRVUZCUVN4SFFVRlVPMEZCUVVFc1EwRkJia0k3UVVGRFFTeEpRVUZOUnl4blEwRkJXU3hWUVVGRFJDeEhRVUZFTzBGQlFVRXNVMEZCVXl4VlFVRkRia0lzUTBGQlJEdEJRVUZCTEZkQlFVOXJRaXhMUVVGTFJDeEhRVUZNTEVOQlFWTnFRaXhEUVVGVUxFVkJRVmx0UWl4SFFVRmFMRU5CUVZBN1FVRkJRU3hIUVVGVU8wRkJRVUVzUTBGQmJFSTdRVUZEUVN4SlFVRk5SU3gzUWtGQlVTeFZRVUZEUml4SFFVRkVMRVZCUVUxR0xFZEJRVTQ3UVVGQlFTeFRRVUZqYUVJc1MwRkJTMjFDTEZWQlFWVkVMRWRCUVZZc1EwRkJUQ3hGUVVGeFFrZ3NWMEZCVjBNc1IwRkJXQ3hEUVVGeVFpeERRVUZrTzBGQlFVRXNRMEZCWkRzN1FVRkZRU3hKUVVGTlN5eDNRa0ZCVVN4VlFVRkRRU3hMUVVGRUxFVkJRVkZJTEVkQlFWSXNSVUZCWVVZc1IwRkJZanRCUVVGQkxGTkJRWEZDTEZWQlFVTnFRaXhEUVVGRUxFVkJRVTg3UVVGREwwTXNVVUZCVFhWQ0xGZEJRVmNzWjBOQlFYRkNTaXhIUVVGeVFpeEZRVUV3UWtZc1IwRkJNVUlzUlVGQkswSnFRaXhEUVVFdlFpeERRVUZxUWp0QlFVTkJMRmRCUVU4c2QwSkJRV0Z6UWl4TFFVRmlMRVZCUVc5Q1F5eFJRVUZ3UWl4RFFVRlFPMEZCUTBRc1IwRkliMEk3UVVGQlFTeERRVUZrSWl3aVptbHNaU0k2SW5SeVlXNXpabTl5YldWeWN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxMQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3l3Z2MzUmxjRkJ5YjJkeVpYTnpJSDBnWm5KdmJTQW5MaTlqWVd4akp6dGNibHh1THlvcVhHNGdLaUJCY0hCbGJtUWdWVzVwZEZ4dUlDb2dRU0JtZFc1amRHbHZiaUIwYUdGMElIZHBiR3dnWVhCd1pXNWtYRzRnS2lCaGNIQmxibVJWYm1sMEtDZHdlQ2NzSURJd0tTQXRQaUFuTWpCd2VDZGNiaUFxSUVCd1lYSmhiU0FnZTNOMGNtbHVaMzBnZFc1cGRDbGNiaUFxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjFjYmlBcUwxeHVaWGh3YjNKMElHTnZibk4wSUdGd2NHVnVaRlZ1YVhRZ1BTQW9kVzVwZENrZ1BUNGdLSFlwSUQwK0lHQWtlM1o5Skh0MWJtbDBmV0E3WEc1Y2JpOHFLbHh1SUNvZ1JteHZkMXh1SUNvZ1EyOXRjRzl6WlNCdmRHaGxjaUIwY21GdWMyWnZjbTFsY25NZ2RHOGdjblZ1SUd4cGJtVmhjbWxzZVZ4dUlDb2dabXh2ZHlodGFXNG9NakFwTENCdFlYZ29OREFwS1Z4dUlDb2dRSEJoY21GdElDQjdMaTR1Wm5WdVkzUnBiMjV6ZlNCMGNtRnVjMlp2Y20xbGNuTmNiaUFxSUVCeVpYUjFjbTRnZTJaMWJtTjBhVzl1ZlZ4dUlDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1pteHZkeUE5SUNndUxpNTBjbUZ1YzJadmNtMWxjbk1wSUQwK0lIdGNiaUFnWTI5dWMzUWdiblZ0VkhKaGJuTm1iM0p0WlhKeklEMGdkSEpoYm5ObWIzSnRaWEp6TG14bGJtZDBhRHRjYmlBZ2JHVjBJR2tnUFNBd08xeHVYRzRnSUhKbGRIVnliaUFvWVdOakxDQXVMaTVoY21kektTQTlQaUI3WEc0Z0lDQWdiR1YwSUhZZ1BTQmhZMk03WEc0Z0lDQWdabTl5SUNocElEMGdNRHNnYVNBOElHNTFiVlJ5WVc1elptOXliV1Z5Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0IySUQwZ2RISmhibk5tYjNKdFpYSnpXMmxkS0hZc0lDNHVMbUZ5WjNNcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIyTzF4dUlDQjlPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdsdWRHVnljRzlzWVhSbElEMGdLR2x1Y0hWMExDQnZkWFJ3ZFhRc0lISmhibWRsUldGemFXNW5LU0E5UGlCN1hHNGdJR052Ym5OMElISmhibWRsVEdWdVozUm9JRDBnYVc1d2RYUXViR1Z1WjNSb08xeHVJQ0JqYjI1emRDQm1hVzVoYkVsdVpHVjRJRDBnY21GdVoyVk1aVzVuZEdnZ0xTQXhPMXh1WEc0Z0lISmxkSFZ5YmlBb2Rpa2dQVDRnZTF4dUlDQWdJQzh2SUVsbUlIWmhiSFZsSUc5MWRITnBaR1VnYldsdWFXMTFiU0J5WVc1blpTd2djWFZwWTJ0c2VTQnlaWFIxY201Y2JpQWdJQ0JwWmlBb2RpQThQU0JwYm5CMWRGc3dYU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRzkxZEhCMWRGc3dYVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJKWmlCMllXeDFaU0J2ZFhSemFXUmxJRzFoZUdsdGRXMGdjbUZ1WjJVc0lIRjFhV05yYkhrZ2NtVjBkWEp1WEc0Z0lDQWdhV1lnS0hZZ1BqMGdhVzV3ZFhSYlptbHVZV3hKYm1SbGVGMHBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnZkWFJ3ZFhSYlptbHVZV3hKYm1SbGVGMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2JHVjBJR2tnUFNBeE8xeHVYRzRnSUNBZ0x5OGdSbWx1WkNCcGJtUmxlQ0J2WmlCeVlXNW5aU0J6ZEdGeWRGeHVJQ0FnSUdadmNpQW9PeUJwSUR3Z2NtRnVaMlZNWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2FXWWdLR2x1Y0hWMFcybGRJRDRnZGlCOGZDQnBJRDA5UFNCbWFXNWhiRWx1WkdWNEtTQjdYRzRnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdOdmJuTjBJSEJ5YjJkeVpYTnpTVzVTWVc1blpTQTlJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0dsdWNIVjBXMmtnTFNBeFhTd2dhVzV3ZFhSYmFWMHNJSFlwTzF4dUlDQWdJR052Ym5OMElHVmhjMlZrVUhKdlozSmxjM01nUFNBb2NtRnVaMlZGWVhOcGJtY3BJRDhnY21GdVoyVkZZWE5wYm1kYmFWMG9jSEp2WjNKbGMzTkpibEpoYm1kbEtTQTZJSEJ5YjJkeVpYTnpTVzVTWVc1blpUdGNiaUFnSUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb2IzVjBjSFYwVzJrZ0xTQXhYU3dnYjNWMGNIVjBXMmxkTENCbFlYTmxaRkJ5YjJkeVpYTnpLVHRjYmlBZ2ZUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1EyeGhiWEFnZG1Gc2RXVWdZbVYwZDJWbGJseHVJQ29nUTNKbFlYUmxjeUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdkMmxzYkNCeVpYTjBjbWxqZENCaElHZHBkbVZ1SUhaaGJIVmxJR0psZEhkbFpXNGdZRzFwYm1BZ1lXNWtJR0J0WVhoZ1hHNGdLaUJBY0dGeVlXMGdJSHR1ZFcxaVpYSjlJRzFwYmx4dUlDb2dRSEJoY21GdElDQjdiblZ0WW1WeWZTQnRZWGhjYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24xY2JpQXFMMXh1Wlhod2IzSjBJR052Ym5OMElHTnNZVzF3Vlc1a1pYSWdQU0FvYldGNEtTQTlQaUFvZGlrZ1BUNGdUV0YwYUM1dGFXNG9kaXdnYldGNEtUdGNibVY0Y0c5eWRDQmpiMjV6ZENCamJHRnRjRTkyWlhJZ1BTQW9iV2x1S1NBOVBpQW9kaWtnUFQ0Z1RXRjBhQzV0WVhnb2Rpd2diV2x1S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYkdGdGNDQTlJQ2h0YVc0c0lHMWhlQ2tnUFQ0Z1pteHZkeWhqYkdGdGNFOTJaWElvYldsdUtTd2dZMnhoYlhCVmJtUmxjaWh0WVhncEtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElITjBaWEJ6SUQwZ0tITjBaWEJ6TENCdGFXNHNJRzFoZUNrZ1BUNGdLSFlwSUQwK0lIdGNiaUFnWTI5dWMzUWdjSEp2WjNKbGMzTWdQU0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNodGFXNHNJRzFoZUN3Z2RpazdYRzRnSUhKbGRIVnliaUJ6ZEdWd1VISnZaM0psYzNNb2MzUmxjSE1zSUhCeWIyZHlaWE56S1R0Y2JuMDdYRzVjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy90cmFuc2Zvcm1lcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFZhbHVlID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFZhbHVlLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBWYWx1ZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmFsdWUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBWYWx1ZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHYpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB2O1xuICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKHRoaXMudXBkYXRlKTtcbiAgfTtcblxuICByZXR1cm4gVmFsdWU7XG59KF8yLmRlZmF1bHQpO1xuXG5WYWx1ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gIHJldHVybiBuZXcgVmFsdWUoeyBjdXJyZW50OiBjdXJyZW50IH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNaaGJIVmxMbXB6SWwwc0ltNWhiV1Z6SWpwYklsWmhiSFZsSWl3aWMyVjBJaXdpZGlJc0ltTjFjbkpsYm5RaUxDSjFjR1JoZEdVaUxDSmtaV1poZFd4MFVISnZjSE1pTENKd1lYTnphWFpsSWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenM3T3pzN096dEpRVVZOUVN4TE96czdPenM3T3pzN2EwSkJTMHBETEVjc1owSkJRVWxETEVNc1JVRkJSenRCUVVOTUxGTkJRVXRETEU5QlFVd3NSMEZCWlVRc1EwRkJaanRCUVVOQkxHdERRVUZqTEV0QlFVdEZMRTFCUVc1Q08wRkJRMFFzUnpzN096czdRVUZTUjBvc1N5eERRVU5IU3l4WkxFZEJRV1U3UVVGRGNFSkRMRmRCUVZNN1FVRkVWeXhET3p0clFrRlZWQ3hWUVVGRFNDeFBRVUZFTzBGQlFVRXNVMEZCWVN4SlFVRkpTQ3hMUVVGS0xFTkJRVlVzUlVGQlJVY3NaMEpCUVVZc1JVRkJWaXhEUVVGaU8wRkJRVUVzUXlJc0ltWnBiR1VpT2lKMllXeDFaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk4bk8xeHVhVzF3YjNKMElIc2diMjVHY21GdFpWVndaR0YwWlNCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVjYm1Oc1lYTnpJRlpoYkhWbElHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0J3WVhOemFYWmxPaUIwY25WbFhHNGdJSDA3WEc1Y2JpQWdjMlYwS0hZcElIdGNiaUFnSUNCMGFHbHpMbU4xY25KbGJuUWdQU0IyTzF4dUlDQWdJRzl1Um5KaGJXVlZjR1JoZEdVb2RHaHBjeTUxY0dSaGRHVXBPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hqZFhKeVpXNTBLU0E5UGlCdVpYY2dWbUZzZFdVb2V5QmpkWEp5Wlc1MElIMHBPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy92YWx1ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1JlbmRlcmVyKF9leHRlbmRzKHtcbiAgICBlbGVtZW50OiBlbGVtZW50XG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZXMpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFNWR1JlbmRlcmVyID0gZnVuY3Rpb24gKF9SZW5kZXJlcikge1xuICBfaW5oZXJpdHMoU1ZHUmVuZGVyZXIsIF9SZW5kZXJlcik7XG5cbiAgZnVuY3Rpb24gU1ZHUmVuZGVyZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU1ZHUmVuZGVyZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIHZhciBfcHJvcHMkZWxlbWVudCRnZXRCQm8gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKSxcbiAgICAgICAgeCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby54LFxuICAgICAgICB5ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLnksXG4gICAgICAgIHdpZHRoID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8uaGVpZ2h0O1xuXG4gICAgX3RoaXMuZWxlbWVudERpbWVuc2lvbnMgPSB7IHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBTVkdSZW5kZXJlci5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgIHZhciBhdHRycyA9ICgwLCBfYnVpbGQyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIHRoaXMuZWxlbWVudERpbWVuc2lvbnMpO1xuICAgICgwLCBfdXRpbHMuc2V0RE9NQXR0cnMpKGVsZW1lbnQsIGF0dHJzKTtcbiAgfTtcblxuICBTVkdSZW5kZXJlci5wcm90b3R5cGUub25SZWFkID0gZnVuY3Rpb24gb25SZWFkKGtleSkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG5cbiAgICBpZiAoIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZhbHVlVHlwZSA9IF92YWx1ZVR5cGVzMi5kZWZhdWx0W2tleV07XG4gICAgICByZXR1cm4gdmFsdWVUeXBlID8gdmFsdWVUeXBlLmRlZmF1bHQgOiAwO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU1ZHUmVuZGVyZXI7XG59KF8yLmRlZmF1bHQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJJbVZzWlcxbGJuUWlMQ0p3Y205d2N5SXNJbE5XUjFKbGJtUmxjbVZ5SWl3aVoyVjBRa0p2ZUNJc0luZ2lMQ0o1SWl3aWQybGtkR2dpTENKb1pXbG5hSFFpTENKbGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lJc0ltOXVVbVZ1WkdWeUlpd2lZWFIwY25NaUxDSnpkR0YwWlNJc0ltOXVVbVZoWkNJc0ltdGxlU0lzSW1kbGRFRjBkSEpwWW5WMFpTSXNJblpoYkhWbFZIbHdaU0lzSW1SbFptRjFiSFFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0clFrRm5RMlVzVlVGQlZVRXNUMEZCVml4RlFVRnRRa01zUzBGQmJrSXNSVUZCTUVJN1FVRkRka01zVTBGQlR5eEpRVUZKUXl4WFFVRktPMEZCUTB4R08wRkJSRXNzUzBGRlJrTXNTMEZHUlN4RlFVRlFPMEZCU1VRc1F6czdRVUZ5UTBRN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN096czdPenRKUVVWTlF5eFhPenM3UVVGRFNpeDFRa0ZCV1VRc1MwRkJXaXhGUVVGdFFqdEJRVUZCT3p0QlFVRkJMR2xFUVVOcVFpeHhRa0ZCVFVFc1MwRkJUaXhEUVVScFFqczdRVUZCUVN4blEwRkhaVUVzVFVGQlRVUXNUMEZCVGl4RFFVRmpSeXhQUVVGa0xFVkJTR1k3UVVGQlFTeFJRVWRVUXl4RFFVaFRMSGxDUVVkVVFTeERRVWhUTzBGQlFVRXNVVUZIVGtNc1EwRklUU3g1UWtGSFRrRXNRMEZJVFR0QlFVRkJMRkZCUjBoRExFdEJTRWNzZVVKQlIwaEJMRXRCU0VjN1FVRkJRU3hSUVVkSlF5eE5RVWhLTEhsQ1FVZEpRU3hOUVVoS096dEJRVWxxUWl4VlFVRkxReXhwUWtGQlRDeEhRVUY1UWl4RlFVRkZTaXhKUVVGR0xFVkJRVXRETEVsQlFVd3NSVUZCVVVNc1dVRkJVaXhGUVVGbFF5eGpRVUZtTEVWQlFYcENPMEZCU21sQ08wRkJTMnhDT3p0M1FrRkZSRVVzVVN4MVFrRkJWenRCUVVGQkxGRkJRMFJVTEU5QlJFTXNSMEZEVnl4TFFVRkxReXhMUVVSb1FpeERRVU5FUkN4UFFVUkRPenRCUVVWVUxGRkJRVTFWTEZGQlFWRXNjVUpCUVUwc1MwRkJTME1zUzBGQldDeEZRVUZyUWl4TFFVRkxTQ3hwUWtGQmRrSXNRMEZCWkR0QlFVTkJMRFJDUVVGWlVpeFBRVUZhTEVWQlFYRkNWU3hMUVVGeVFqdEJRVU5FTEVjN08zZENRVVZFUlN4TkxHMUNRVUZQUXl4SExFVkJRVXM3UVVGQlFTeFJRVU5HWWl4UFFVUkZMRWRCUTFVc1MwRkJTME1zUzBGRVppeERRVU5HUkN4UFFVUkZPenM3UVVGSFZpeFJRVUZKTEVOQlFVTXNlVUpCUVdWaExFZEJRV1lzUTBGQlRDeEZRVUV3UWp0QlFVTjRRaXhoUVVGUFlpeFJRVUZSWXl4WlFVRlNMRU5CUVhGQ1JDeEhRVUZ5UWl4RFFVRlFPMEZCUTBRc1MwRkdSQ3hOUVVWUE8wRkJRMHdzVlVGQlRVVXNXVUZCV1N4eFFrRkJZVVlzUjBGQllpeERRVUZzUWp0QlFVTkJMR0ZCUVZGRkxGTkJRVVFzUjBGQlkwRXNWVUZCVlVNc1QwRkJlRUlzUjBGQmEwTXNRMEZCZWtNN1FVRkRSRHRCUVVOR0xFY2lMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVW1WdVpHVnlaWElnWm5KdmJTQW5MaTR2Snp0Y2JtbHRjRzl5ZENCaWRXbHNaQ0JtY205dElDY3VMMkoxYVd4a0p6dGNibWx0Y0c5eWRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lCbWNtOXRJQ2N1TGk5amMzTXZkSEpoYm5ObWIzSnRMWEJ5YjNCekp6dGNibWx0Y0c5eWRDQjJZV3gxWlZSNWNHVk5ZWEFnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3ljN1hHNXBiWEJ2Y25RZ2V5QnpaWFJFVDAxQmRIUnljeUI5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1Oc1lYTnpJRk5XUjFKbGJtUmxjbVZ5SUdWNGRHVnVaSE1nVW1WdVpHVnlaWElnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lITjFjR1Z5S0hCeWIzQnpLVHRjYmx4dUlDQWdJR052Ym5OMElIc2dlQ3dnZVN3Z2QybGtkR2dzSUdobGFXZG9kQ0I5SUQwZ2NISnZjSE11Wld4bGJXVnVkQzVuWlhSQ1FtOTRLQ2s3WEc0Z0lDQWdkR2hwY3k1bGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lBOUlIc2dlQ3dnZVN3Z2QybGtkR2dzSUdobGFXZG9kQ0I5TzF4dUlDQjlYRzVjYmlBZ2IyNVNaVzVrWlhJb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCbGJHVnRaVzUwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHTnZibk4wSUdGMGRISnpJRDBnWW5WcGJHUW9kR2hwY3k1emRHRjBaU3dnZEdocGN5NWxiR1Z0Wlc1MFJHbHRaVzV6YVc5dWN5azdYRzRnSUNBZ2MyVjBSRTlOUVhSMGNuTW9aV3hsYldWdWRDd2dZWFIwY25NcE8xeHVJQ0I5WEc1Y2JpQWdiMjVTWldGa0tHdGxlU2tnZTF4dUlDQWdJR052Ym5OMElIc2daV3hsYldWdWRDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JseHVJQ0FnSUdsbUlDZ2hkSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR1ZzWlcxbGJuUXVaMlYwUVhSMGNtbGlkWFJsS0d0bGVTazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbFZIbHdaU0E5SUhaaGJIVmxWSGx3WlUxaGNGdHJaWGxkTzF4dUlDQWdJQ0FnY21WMGRYSnVJQ2gyWVd4MVpWUjVjR1VwSUQ4Z2RtRnNkV1ZVZVhCbExtUmxabUYxYkhRZ09pQXdPMXh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQW9aV3hsYldWdWRDd2djSEp2Y0hNcElIdGNiaUFnY21WMGRYSnVJRzVsZHlCVFZrZFNaVzVrWlhKbGNpaDdYRzRnSUNBZ1pXeGxiV1Z1ZEN4Y2JpQWdJQ0F1TGk1d2NtOXdjMXh1SUNCOUtUdGNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmcvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBTVkdQYXRoUmVuZGVyZXIoX2V4dGVuZHMoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFNWR1BhdGhSZW5kZXJlciA9IGZ1bmN0aW9uIChfUmVuZGVyZXIpIHtcbiAgX2luaGVyaXRzKFNWR1BhdGhSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBTVkdQYXRoUmVuZGVyZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU1ZHUGF0aFJlbmRlcmVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICB2YXIgX3Byb3BzJGVsZW1lbnQkZ2V0QkJvID0gcHJvcHMuZWxlbWVudC5nZXRCQm94KCksXG4gICAgICAgIHggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueCxcbiAgICAgICAgeSA9IF9wcm9wcyRlbGVtZW50JGdldEJCby55LFxuICAgICAgICB3aWR0aCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLmhlaWdodDtcblxuICAgIF90aGlzLmVsZW1lbnREaW1lbnNpb25zID0ge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHksXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHBhdGhMZW5ndGg6IHByb3BzLmVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU1ZHUGF0aFJlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBwYXRoTGVuZ3RoID0gdGhpcy5lbGVtZW50RGltZW5zaW9ucy5wYXRoTGVuZ3RoO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgKDAsIF91dGlscy5zZXRET01BdHRycykoZWxlbWVudCwgKDAsIF9idWlsZDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgcGF0aExlbmd0aCkpO1xuICB9O1xuXG4gIFNWR1BhdGhSZW5kZXJlci5wcm90b3R5cGUub25SZWFkID0gZnVuY3Rpb24gb25SZWFkKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gIH07XG5cbiAgcmV0dXJuIFNWR1BhdGhSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTFhCaGRHZ3ZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHNpWld4bGJXVnVkQ0lzSW5CeWIzQnpJaXdpVTFaSFVHRjBhRkpsYm1SbGNtVnlJaXdpWjJWMFFrSnZlQ0lzSW5naUxDSjVJaXdpZDJsa2RHZ2lMQ0pvWldsbmFIUWlMQ0psYkdWdFpXNTBSR2x0Wlc1emFXOXVjeUlzSW5CaGRHaE1aVzVuZEdnaUxDSm5aWFJVYjNSaGJFeGxibWQwYUNJc0ltOXVVbVZ1WkdWeUlpd2ljM1JoZEdVaUxDSnZibEpsWVdRaUxDSnJaWGtpTENKblpYUkJkSFJ5YVdKMWRHVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRyUWtFMlFtVXNWVUZCVlVFc1QwRkJWaXhGUVVGdFFrTXNTMEZCYmtJc1JVRkJNRUk3UVVGRGRrTXNVMEZCVHl4SlFVRkpReXhsUVVGS08wRkJRMHhHTzBGQlJFc3NTMEZGUmtNc1MwRkdSU3hGUVVGUU8wRkJTVVFzUXpzN1FVRnNRMFE3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN096czdPMGxCUlUxRExHVTdPenRCUVVOS0xESkNRVUZaUkN4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlFVRXNhVVJCUTJwQ0xIRkNRVUZOUVN4TFFVRk9MRU5CUkdsQ096dEJRVUZCTEdkRFFVZGxRU3hOUVVGTlJDeFBRVUZPTEVOQlFXTkhMRTlCUVdRc1JVRklaanRCUVVGQkxGRkJSMVJETEVOQlNGTXNlVUpCUjFSQkxFTkJTRk03UVVGQlFTeFJRVWRPUXl4RFFVaE5MSGxDUVVkT1FTeERRVWhOTzBGQlFVRXNVVUZIU0VNc1MwRklSeXg1UWtGSFNFRXNTMEZJUnp0QlFVRkJMRkZCUjBsRExFMUJTRW9zZVVKQlIwbEJMRTFCU0VvN08wRkJTV3BDTEZWQlFVdERMR2xDUVVGTUxFZEJRWGxDTzBGQlEzWkNTaXhWUVVSMVFqdEJRVVYyUWtNc1ZVRkdkVUk3UVVGSGRrSkRMR3RDUVVoMVFqdEJRVWwyUWtNc2IwSkJTblZDTzBGQlMzWkNSU3hyUWtGQldWSXNUVUZCVFVRc1QwRkJUaXhEUVVGalZTeGpRVUZrTzBGQlRGY3NTMEZCZWtJN1FVRkthVUk3UVVGWGJFSTdPelJDUVVWRVF5eFJMSFZDUVVGWE8wRkJRVUVzVVVGRFJFWXNWVUZFUXl4SFFVTmpMRXRCUVV0RUxHbENRVVJ1UWl4RFFVTkVReXhWUVVSRE8wRkJRVUVzVVVGRlJGUXNUMEZHUXl4SFFVVlhMRXRCUVV0RExFdEJSbWhDTEVOQlJVUkVMRTlCUmtNN08wRkJSMVFzTkVKQlFWbEJMRTlCUVZvc1JVRkJjVUlzY1VKQlFVMHNTMEZCUzFrc1MwRkJXQ3hGUVVGclFrZ3NWVUZCYkVJc1EwRkJja0k3UVVGRFJDeEhPenMwUWtGRlJFa3NUU3h0UWtGQlQwTXNSeXhGUVVGTE8wRkJRMVlzVjBGQlR5eExRVUZMWWl4TFFVRk1MRU5CUVZkRUxFOUJRVmdzUTBGQmJVSmxMRmxCUVc1Q0xFTkJRV2REUkN4SFFVRm9ReXhEUVVGUU8wRkJRMFFzUnlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlNaVzVrWlhKbGNpQm1jbTl0SUNjdUxpOG5PMXh1YVcxd2IzSjBJR0oxYVd4a0lHWnliMjBnSnk0dlluVnBiR1FuTzF4dWFXMXdiM0owSUhzZ2MyVjBSRTlOUVhSMGNuTWdmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVqYkdGemN5QlRWa2RRWVhSb1VtVnVaR1Z5WlhJZ1pYaDBaVzVrY3lCU1pXNWtaWEpsY2lCN1hHNGdJR052Ym5OMGNuVmpkRzl5S0hCeWIzQnpLU0I3WEc0Z0lDQWdjM1Z3WlhJb2NISnZjSE1wTzF4dVhHNGdJQ0FnWTI5dWMzUWdleUI0TENCNUxDQjNhV1IwYUN3Z2FHVnBaMmgwSUgwZ1BTQndjbTl3Y3k1bGJHVnRaVzUwTG1kbGRFSkNiM2dvS1R0Y2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5SRWFXMWxibk5wYjI1eklEMGdlMXh1SUNBZ0lDQWdlQ3hjYmlBZ0lDQWdJSGtzWEc0Z0lDQWdJQ0IzYVdSMGFDeGNiaUFnSUNBZ0lHaGxhV2RvZEN4Y2JpQWdJQ0FnSUhCaGRHaE1aVzVuZEdnNklIQnliM0J6TG1Wc1pXMWxiblF1WjJWMFZHOTBZV3hNWlc1bmRHZ29LVnh1SUNBZ0lIMDdYRzRnSUgxY2JseHVJQ0J2YmxKbGJtUmxjaWdwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJSEJoZEdoTVpXNW5kR2dnZlNBOUlIUm9hWE11Wld4bGJXVnVkRVJwYldWdWMybHZibk03WEc0Z0lDQWdZMjl1YzNRZ2V5QmxiR1Z0Wlc1MElIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJSE5sZEVSUFRVRjBkSEp6S0dWc1pXMWxiblFzSUdKMWFXeGtLSFJvYVhNdWMzUmhkR1VzSUhCaGRHaE1aVzVuZEdncEtUdGNiaUFnZlZ4dVhHNGdJRzl1VW1WaFpDaHJaWGtwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1d2NtOXdjeTVsYkdWdFpXNTBMbWRsZEVGMGRISnBZblYwWlNoclpYa3BPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJQ2hsYkdWdFpXNTBMQ0J3Y205d2N5a2dlMXh1SUNCeVpYUjFjbTRnYm1WM0lGTldSMUJoZEdoU1pXNWtaWEpsY2loN1hHNGdJQ0FnWld4bGJXVnVkQ3hjYmlBZ0lDQXVMaTV3Y205d2MxeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgWkVST19OT1RfWkVSTyA9IDAuMDAwMTtcblxuZnVuY3Rpb24gYnVpbGQoc3RhdGUsIGRhdGEpIHtcbiAgdmFyIGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIHNjYWxlID0gc3RhdGUuc2NhbGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlIHx8IFpFUk9fTk9UX1pFUk8gOiBzdGF0ZS5zY2FsZVggfHwgMTtcbiAgdmFyIHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxO1xuICB2YXIgdHJhbnNmb3JtT3JpZ2luWCA9IGRhdGEud2lkdGggKiAoKHN0YXRlLm9yaWdpblggfHwgNTApIC8gMTAwKSArIGRhdGEueDtcbiAgdmFyIHRyYW5zZm9ybU9yaWdpblkgPSBkYXRhLmhlaWdodCAqICgoc3RhdGUub3JpZ2luWSB8fCA1MCkgLyAxMDApICsgZGF0YS55O1xuICB2YXIgc2NhbGVUcmFuc2Zvcm1YID0gLXRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKTtcbiAgdmFyIHNjYWxlVHJhbnNmb3JtWSA9IC10cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpO1xuICB2YXIgc2NhbGVSZXBsYWNlWCA9IHRyYW5zZm9ybU9yaWdpblggLyBzY2FsZTtcbiAgdmFyIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZO1xuICB2YXIgdHJhbnNmb3JtID0ge1xuICAgIHRyYW5zbGF0ZTogJ3RyYW5zbGF0ZSgnICsgc3RhdGUudHJhbnNsYXRlWCArICcsICcgKyBzdGF0ZS50cmFuc2xhdGVZICsgJykgJyxcbiAgICBzY2FsZTogJ3RyYW5zbGF0ZSgnICsgc2NhbGVUcmFuc2Zvcm1YICsgJywgJyArIHNjYWxlVHJhbnNmb3JtWSArICcpIHNjYWxlKCcgKyBzY2FsZSArICcsICcgKyBzY2FsZVkgKyAnKSB0cmFuc2xhdGUoJyArIHNjYWxlUmVwbGFjZVggKyAnLCAnICsgc2NhbGVSZXBsYWNlWSArICcpICcsXG4gICAgcm90YXRlOiAncm90YXRlKCcgKyBzdGF0ZS5yb3RhdGUgKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWCArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5ZICsgJykgJyxcbiAgICBza2V3WDogJ3NrZXdYKCcgKyBzdGF0ZS5za2V3WCArICcpICcsXG4gICAgc2tld1k6ICdza2V3WSgnICsgc3RhdGUuc2tld1kgKyAnKSAnXG4gIH07XG5cbiAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHNbKDAsIF91dGlscy5jYW1lbFRvRGFzaCkoa2V5KV0gPSBzdGF0ZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgIGZvciAodmFyIF9rZXkgaW4gdHJhbnNmb3JtKSB7XG4gICAgICBpZiAodHJhbnNmb3JtLmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBfa2V5ID09PSAnc2NhbGUnID8gJzEnIDogJzAnO1xuICAgICAgICBwcm9wcy50cmFuc2Zvcm0gKz0gdHJhbnNmb3JtW19rZXldLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MMkoxYVd4a0xtcHpJbDBzSW01aGJXVnpJanBiSW1KMWFXeGtJaXdpV2tWU1QxOU9UMVJmV2tWU1R5SXNJbk4wWVhSbElpd2laR0YwWVNJc0ltaGhjMVJ5WVc1elptOXliU0lzSW5CeWIzQnpJaXdpYzJOaGJHVWlMQ0oxYm1SbFptbHVaV1FpTENKelkyRnNaVmdpTENKelkyRnNaVmtpTENKMGNtRnVjMlp2Y20xUGNtbG5hVzVZSWl3aWQybGtkR2dpTENKdmNtbG5hVzVZSWl3aWVDSXNJblJ5WVc1elptOXliVTl5YVdkcGJsa2lMQ0pvWldsbmFIUWlMQ0p2Y21sbmFXNVpJaXdpZVNJc0luTmpZV3hsVkhKaGJuTm1iM0p0V0NJc0luTmpZV3hsVkhKaGJuTm1iM0p0V1NJc0luTmpZV3hsVW1Wd2JHRmpaVmdpTENKelkyRnNaVkpsY0d4aFkyVlpJaXdpZEhKaGJuTm1iM0p0SWl3aWRISmhibk5zWVhSbElpd2lkSEpoYm5Oc1lYUmxXQ0lzSW5SeVlXNXpiR0YwWlZraUxDSnliM1JoZEdVaUxDSnphMlYzV0NJc0luTnJaWGRaSWl3aWEyVjVJaXdpYUdGelQzZHVVSEp2Y0dWeWRIa2lMQ0prWldaaGRXeDBWbUZzZFdVaUxDSnlaWEJzWVdObElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJTM2RDUVN4TE96dEJRVXg0UWpzN1FVRkRRVHM3T3pzN08wRkJSVUVzU1VGQlRVTXNaMEpCUVdkQ0xFMUJRWFJDT3p0QlFVVmxMRk5CUVZORUxFdEJRVlFzUTBGQlpVVXNTMEZCWml4RlFVRnpRa01zU1VGQmRFSXNSVUZCTkVJN1FVRkRla01zVFVGQlNVTXNaVUZCWlN4TFFVRnVRanRCUVVOQkxFMUJRVTFETEZGQlFWRXNSVUZCWkR0QlFVTkJMRTFCUVUxRExGRkJRVkZLTEUxQlFVMUpMRXRCUVU0c1MwRkJaMEpETEZOQlFXaENMRWRCUVRSQ1RDeE5RVUZOU1N4TFFVRk9MRWxCUVdWTUxHRkJRVE5ETEVkQlFUSkVReXhOUVVGTlRTeE5RVUZPTEVsQlFXZENMRU5CUVhwR08wRkJRMEVzVFVGQlRVTXNVMEZCVTFBc1RVRkJUVThzVFVGQlRpeExRVUZwUWtZc1UwRkJha0lzUjBGQk5rSk1MRTFCUVUxUExFMUJRVTRzU1VGQlowSlNMR0ZCUVRkRExFZEJRVFpFU3l4VFFVRlRMRU5CUVhKR08wRkJRMEVzVFVGQlRVa3NiVUpCUVcxQ1VDeExRVUZMVVN4TFFVRk1MRWxCUVdNc1EwRkJRMVFzVFVGQlRWVXNUMEZCVGl4SlFVRnBRaXhGUVVGc1FpeEpRVUYzUWl4SFFVRjBReXhKUVVFMlExUXNTMEZCUzFVc1EwRkJNMFU3UVVGRFFTeE5RVUZOUXl4dFFrRkJiVUpZTEV0QlFVdFpMRTFCUVV3c1NVRkJaU3hEUVVGRFlpeE5RVUZOWXl4UFFVRk9MRWxCUVdsQ0xFVkJRV3hDTEVsQlFYZENMRWRCUVhaRExFbEJRVGhEWWl4TFFVRkxZeXhEUVVFMVJUdEJRVU5CTEUxQlFVMURMR3RDUVVGclFpeERRVUZGVWl4blFrRkJSaXhKUVVGelFrb3NVVUZCVVN4RFFVRTVRaXhEUVVGNFFqdEJRVU5CTEUxQlFVMWhMR3RDUVVGclFpeERRVUZGVEN4blFrRkJSaXhKUVVGelFrd3NVMEZCVXl4RFFVRXZRaXhEUVVGNFFqdEJRVU5CTEUxQlFVMVhMR2RDUVVGblFsWXNiVUpCUVcxQ1NpeExRVUY2UXp0QlFVTkJMRTFCUVUxbExHZENRVUZuUWxBc2JVSkJRVzFDVEN4TlFVRjZRenRCUVVOQkxFMUJRVTFoTEZsQlFWazdRVUZEYUVKRExEaENRVUYzUW5KQ0xFMUJRVTF6UWl4VlFVRTVRaXhWUVVFMlEzUkNMRTFCUVUxMVFpeFZRVUZ1UkN4UFFVUm5RanRCUVVWb1FtNUNMREJDUVVGdlFsa3NaVUZCY0VJc1ZVRkJkME5ETEdWQlFYaERMR2RDUVVGclJXSXNTMEZCYkVVc1ZVRkJORVZITEUxQlFUVkZMRzlDUVVGcFIxY3NZVUZCYWtjc1ZVRkJiVWhETEdGQlFXNUlMRTlCUm1kQ08wRkJSMmhDU3l4M1FrRkJhMEo0UWl4TlFVRk5kMElzVFVGQmVFSXNWVUZCYlVOb1FpeG5Ra0ZCYmtNc1ZVRkJkMFJKTEdkQ1FVRjRSQ3hQUVVoblFqdEJRVWxvUW1Fc2MwSkJRV2RDZWtJc1RVRkJUWGxDTEV0QlFYUkNMRTlCU21kQ08wRkJTMmhDUXl4elFrRkJaMEl4UWl4TlFVRk5NRUlzUzBGQmRFSTdRVUZNWjBJc1IwRkJiRUk3TzBGQlVVRXNUMEZCU3l4SlFVRkpReXhIUVVGVUxFbEJRV2RDTTBJc1MwRkJhRUlzUlVGQmRVSTdRVUZEY2tJc1VVRkJTVUVzVFVGQlRUUkNMR05CUVU0c1EwRkJjVUpFTEVkQlFYSkNMRU5CUVVvc1JVRkJLMEk3UVVGRE4wSXNWVUZCU1N4NVFrRkJaVUVzUjBGQlppeERRVUZLTEVWQlFYbENPMEZCUTNaQ2VrSXNkVUpCUVdVc1NVRkJaanRCUVVORUxFOUJSa1FzVFVGRlR6dEJRVU5NUXl4alFVRk5MSGRDUVVGWmQwSXNSMEZCV2l4RFFVRk9MRWxCUVRCQ00wSXNUVUZCVFRKQ0xFZEJRVTRzUTBGQk1VSTdRVUZEUkR0QlFVTkdPMEZCUTBZN08wRkJSVVFzVFVGQlNYcENMRmxCUVVvc1JVRkJhMEk3UVVGRGFFSkRMRlZCUVUxcFFpeFRRVUZPTEVkQlFXdENMRVZCUVd4Q096dEJRVVZCTEZOQlFVc3NTVUZCU1U4c1NVRkJWQ3hKUVVGblFsQXNVMEZCYUVJc1JVRkJNa0k3UVVGRGVrSXNWVUZCU1VFc1ZVRkJWVkVzWTBGQlZpeERRVUY1UWtRc1NVRkJla0lzUTBGQlNpeEZRVUZ0UXp0QlFVTnFReXhaUVVGTlJTeGxRVUZuUWtZc1UwRkJVU3hQUVVGVUxFZEJRVzlDTEVkQlFYQkNMRWRCUVRCQ0xFZEJRUzlETzBGQlEwRjRRaXhqUVVGTmFVSXNVMEZCVGl4SlFVRnRRa0VzVlVGQlZVOHNTVUZCVml4RlFVRmxSeXhQUVVGbUxFTkJRWFZDTEZsQlFYWkNMRVZCUVhGRFJDeFpRVUZ5UXl4RFFVRnVRanRCUVVORU8wRkJRMFk3UVVGRFJqczdRVUZGUkN4VFFVRlBNVUlzUzBGQlVEdEJRVU5FSWl3aVptbHNaU0k2SW1KMWFXeGtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZMkZ0Wld4VWIwUmhjMmdnZlNCbWNtOXRJQ2N1TGk4dUxpOXBibU12ZFhScGJITW5PMXh1YVcxd2IzSjBJSFJ5WVc1elptOXliVkJ5YjNCeklHWnliMjBnSnk0dUwyTnpjeTkwY21GdWMyWnZjbTB0Y0hKdmNITW5PMXh1WEc1amIyNXpkQ0JhUlZKUFgwNVBWRjlhUlZKUElEMGdNQzR3TURBeE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmlkV2xzWkNoemRHRjBaU3dnWkdGMFlTa2dlMXh1SUNCc1pYUWdhR0Z6VkhKaGJuTm1iM0p0SUQwZ1ptRnNjMlU3WEc0Z0lHTnZibk4wSUhCeWIzQnpJRDBnZTMwN1hHNGdJR052Ym5OMElITmpZV3hsSUQwZ2MzUmhkR1V1YzJOaGJHVWdJVDA5SUhWdVpHVm1hVzVsWkNBL0lITjBZWFJsTG5OallXeGxJSHg4SUZwRlVrOWZUazlVWDFwRlVrOGdPaUJ6ZEdGMFpTNXpZMkZzWlZnZ2ZId2dNVHRjYmlBZ1kyOXVjM1FnYzJOaGJHVlpJRDBnYzNSaGRHVXVjMk5oYkdWWklDRTlQU0IxYm1SbFptbHVaV1FnUHlCemRHRjBaUzV6WTJGc1pWa2dmSHdnV2tWU1QxOU9UMVJmV2tWU1R5QTZJSE5qWVd4bElIeDhJREU3WEc0Z0lHTnZibk4wSUhSeVlXNXpabTl5YlU5eWFXZHBibGdnUFNCa1lYUmhMbmRwWkhSb0lDb2dLQ2h6ZEdGMFpTNXZjbWxuYVc1WUlIeDhJRFV3S1NBdklERXdNQ2tnS3lCa1lYUmhMbmc3WEc0Z0lHTnZibk4wSUhSeVlXNXpabTl5YlU5eWFXZHBibGtnUFNCa1lYUmhMbWhsYVdkb2RDQXFJQ2dvYzNSaGRHVXViM0pwWjJsdVdTQjhmQ0ExTUNrZ0x5QXhNREFwSUNzZ1pHRjBZUzU1TzF4dUlDQmpiMjV6ZENCelkyRnNaVlJ5WVc1elptOXliVmdnUFNBdElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ0tpQW9jMk5oYkdVZ0tpQXhLVHRjYmlBZ1kyOXVjM1FnYzJOaGJHVlVjbUZ1YzJadmNtMVpJRDBnTFNCMGNtRnVjMlp2Y20xUGNtbG5hVzVaSUNvZ0tITmpZV3hsV1NBcUlERXBPMXh1SUNCamIyNXpkQ0J6WTJGc1pWSmxjR3hoWTJWWUlEMGdkSEpoYm5ObWIzSnRUM0pwWjJsdVdDQXZJSE5qWVd4bE8xeHVJQ0JqYjI1emRDQnpZMkZzWlZKbGNHeGhZMlZaSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V1NBdklITmpZV3hsV1R0Y2JpQWdZMjl1YzNRZ2RISmhibk5tYjNKdElEMGdlMXh1SUNBZ0lIUnlZVzV6YkdGMFpUb2dZSFJ5WVc1emJHRjBaU2drZTNOMFlYUmxMblJ5WVc1emJHRjBaVmg5TENBa2UzTjBZWFJsTG5SeVlXNXpiR0YwWlZsOUtTQmdMRnh1SUNBZ0lITmpZV3hsT2lCZ2RISmhibk5zWVhSbEtDUjdjMk5oYkdWVWNtRnVjMlp2Y20xWWZTd2dKSHR6WTJGc1pWUnlZVzV6Wm05eWJWbDlLU0J6WTJGc1pTZ2tlM05qWVd4bGZTd2dKSHR6WTJGc1pWbDlLU0IwY21GdWMyeGhkR1VvSkh0elkyRnNaVkpsY0d4aFkyVllmU3dnSkh0elkyRnNaVkpsY0d4aFkyVlpmU2tnWUN4Y2JpQWdJQ0J5YjNSaGRHVTZJR0J5YjNSaGRHVW9KSHR6ZEdGMFpTNXliM1JoZEdWOUxDQWtlM1J5WVc1elptOXliVTl5YVdkcGJsaDlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGw5S1NCZ0xGeHVJQ0FnSUhOclpYZFlPaUJnYzJ0bGQxZ29KSHR6ZEdGMFpTNXphMlYzV0gwcElHQXNYRzRnSUNBZ2MydGxkMWs2SUdCemEyVjNXU2drZTNOMFlYUmxMbk5yWlhkWmZTa2dZRnh1SUNCOU8xeHVYRzRnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ6ZEdGMFpTa2dlMXh1SUNBZ0lHbG1JQ2h6ZEdGMFpTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0JwWmlBb2RISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTa2dlMXh1SUNBZ0lDQWdJQ0JvWVhOVWNtRnVjMlp2Y20wZ1BTQjBjblZsTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnY0hKdmNITmJZMkZ0Wld4VWIwUmhjMmdvYTJWNUtWMGdQU0J6ZEdGMFpWdHJaWGxkTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdsbUlDaG9ZWE5VY21GdWMyWnZjbTBwSUh0Y2JpQWdJQ0J3Y205d2N5NTBjbUZ1YzJadmNtMGdQU0FuSnp0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIwY21GdWMyWnZjbTBwSUh0Y2JpQWdJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMHVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JrWldaaGRXeDBWbUZzZFdVZ1BTQW9hMlY1SUQwOVBTQW5jMk5oYkdVbktTQS9JQ2N4SnlBNklDY3dKenRjYmlBZ0lDQWdJQ0FnY0hKdmNITXVkSEpoYm5ObWIzSnRJQ3M5SUhSeVlXNXpabTl5YlZ0clpYbGRMbkpsY0d4aFkyVW9MM1Z1WkdWbWFXNWxaQzluTENCa1pXWmhkV3gwVm1Gc2RXVXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQndjbTl3Y3p0Y2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3ZhbHVlLXR5cGVzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZmlsbDogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIHN0cm9rZTogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIHNjYWxlOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVYOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVZOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgZDogX3ZhbHVlVHlwZXMuY29tcGxleCxcbiAgcG9pbnRzOiBfdmFsdWVUeXBlcy5jb21wbGV4LFxuICBvcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYSxcbiAgZmlsbE9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhLFxuICBzdHJva2VPcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MM1poYkhWbExYUjVjR1Z6TG1weklsMHNJbTVoYldWeklqcGJJbVpwYkd3aUxDSnpkSEp2YTJVaUxDSnpZMkZzWlNJc0luTmpZV3hsV0NJc0luTmpZV3hsV1NJc0ltUWlMQ0p3YjJsdWRITWlMQ0p2Y0dGamFYUjVJaXdpWm1sc2JFOXdZV05wZEhraUxDSnpkSEp2YTJWUGNHRmphWFI1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPMnRDUVVWbE8wRkJRMkpCTEhsQ1FVUmhPMEZCUldKRExESkNRVVpoTzBGQlIySkRMREJDUVVoaE8wRkJTV0pETERKQ1FVcGhPMEZCUzJKRExESkNRVXhoTzBGQlRXSkRMSGRDUVU1aE8wRkJUMkpETERaQ1FWQmhPMEZCVVdKRExEUkNRVkpoTzBGQlUySkRMR2REUVZSaE8wRkJWV0pETzBGQlZtRXNReUlzSW1acGJHVWlPaUoyWVd4MVpTMTBlWEJsY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdGc2NHaGhMQ0JqYjJ4dmNpd2dZMjl0Y0d4bGVDd2djMk5oYkdVZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRtRnNkV1V0ZEhsd1pYTW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lHWnBiR3c2SUdOdmJHOXlMRnh1SUNCemRISnZhMlU2SUdOdmJHOXlMRnh1SUNCelkyRnNaVG9nYzJOaGJHVXNYRzRnSUhOallXeGxXRG9nYzJOaGJHVXNYRzRnSUhOallXeGxXVG9nYzJOaGJHVXNYRzRnSUdRNklHTnZiWEJzWlhnc1hHNGdJSEJ2YVc1MGN6b2dZMjl0Y0d4bGVDeGNiaUFnYjNCaFkybDBlVG9nWVd4d2FHRXNYRzRnSUdacGJHeFBjR0ZqYVhSNU9pQmhiSEJvWVN4Y2JpQWdjM1J5YjJ0bFQzQmhZMmwwZVRvZ1lXeHdhR0ZjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmcvdmFsdWUtdHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQZXJjZW50YWdlIG9mIHRvdGFsIGxlbmd0aFxuICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbnZhciBwZXJjZW50VG9QaXhlbHMgPSBmdW5jdGlvbiAocGVyY2VudCwgbGVuZ3RoKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KHBlcmNlbnQpIC8gMTAwICogbGVuZ3RoICsgJ3B4Jztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdGF0ZSwgbGVuZ3RoKSB7XG4gIHZhciBzdHlsZXMgPSB7fTtcbiAgdmFyIGRhc2hBcnJheVN0eWxlcyA9IHtcbiAgICBsZW5ndGg6IDAsXG4gICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICB9O1xuICB2YXIgaGFzRGFzaEFycmF5ID0gZmFsc2U7XG5cbiAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICBzdHlsZXNbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGRhc2hBcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBkYXNoQXJyYXlTdHlsZXMuc3BhY2luZztcbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkxYQmhkR2d2WW5WcGJHUXVhbk1pWFN3aWJtRnRaWE1pT2xzaWNHVnlZMlZ1ZEZSdlVHbDRaV3h6SWl3aWNHVnlZMlZ1ZENJc0lteGxibWQwYUNJc0luQmhjbk5sUm14dllYUWlMQ0p6ZEdGMFpTSXNJbk4wZVd4bGN5SXNJbVJoYzJoQmNuSmhlVk4wZVd4bGN5SXNJbk53WVdOcGJtY2lMQ0pvWVhORVlYTm9RWEp5WVhraUxDSnJaWGtpTENKb1lYTlBkMjVRY205d1pYSjBlU0lzSW5aaGJIVmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVRzN096czdPMEZCVFVFc1NVRkJUVUVzYTBKQlFXdENMRlZCUVVORExFOUJRVVFzUlVGQlZVTXNUVUZCVmp0QlFVRkJMRk5CUVhOQ1F5eFhRVUZYUml4UFFVRllMRWxCUVhOQ0xFZEJRWFpDTEVkQlFUaENReXhOUVVFNVFpeEhRVUYxUXl4SlFVRTFSRHRCUVVGQkxFTkJRWGhDT3p0clFrRkZaU3hWUVVGRFJTeExRVUZFTEVWQlFWRkdMRTFCUVZJc1JVRkJiVUk3UVVGRGFFTXNUVUZCVFVjc1UwRkJVeXhGUVVGbU8wRkJRMEVzVFVGQlRVTXNhMEpCUVd0Q08wRkJRM1JDU2l4WlFVRlJMRU5CUkdNN1FVRkZkRUpMTEdGQlFWTk1MRk5CUVZNN1FVRkdTU3hIUVVGNFFqdEJRVWxCTEUxQlFVbE5MR1ZCUVdVc1MwRkJia0k3TzBGQlJVRXNUMEZCU3l4SlFVRkpReXhIUVVGVUxFbEJRV2RDVEN4TFFVRm9RaXhGUVVGMVFqdEJRVU55UWl4UlFVRkpRU3hOUVVGTlRTeGpRVUZPTEVOQlFYRkNSQ3hIUVVGeVFpeERRVUZLTEVWQlFTdENPMEZCUXpkQ0xGVkJRVTFGTEZGQlFWRlFMRTFCUVUxTExFZEJRVTRzUTBGQlpEczdRVUZGUVN4alFVRlJRU3hIUVVGU08wRkJRMEVzWVVGQlN5eFJRVUZNTzBGQlEwRXNZVUZCU3l4VFFVRk1PMEZCUTBWRUxIbENRVUZsTEVsQlFXWTdRVUZEUVVZc01FSkJRV2RDUnl4SFFVRm9RaXhKUVVGMVFsUXNaMEpCUVdkQ1Z5eExRVUZvUWl4RlFVRjFRbFFzVFVGQmRrSXNRMEZCZGtJN1FVRkRRVHRCUVVOR0xHRkJRVXNzVVVGQlREdEJRVU5GUnl4cFFrRkJUeXh0UWtGQlVDeEpRVUU0UWt3c1owSkJRV2RDTEVOQlFVTlhMRXRCUVdwQ0xFVkJRWGRDVkN4TlFVRjRRaXhEUVVFNVFqdEJRVU5CTzBGQlEwWTdRVUZEUlVjc2FVSkJRVTlKTEVkQlFWQXNTVUZCWTBVc1MwRkJaRHRCUVZaR08wRkJXVVE3UVVGRFJqczdRVUZGUkN4TlFVRkpTQ3haUVVGS0xFVkJRV3RDTzBGQlEyaENTQ3hYUVVGUExHdENRVUZRTEVsQlFUWkNReXhuUWtGQlowSktMRTFCUVdoQ0xFZEJRWGxDTEVkQlFYcENMRWRCUVN0Q1NTeG5Ra0ZCWjBKRExFOUJRVFZGTzBGQlEwUTdPMEZCUlVRc1UwRkJUMFlzVFVGQlVEdEJRVU5FTEVNaUxDSm1hV3hsSWpvaVluVnBiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDQkRiMjUyWlhKMElIQmxjbU5sYm5SaFoyVWdkRzhnY0dsNFpXeHpYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQmxjbU5sYm5SaFoyVWdiMllnZEc5MFlXd2diR1Z1WjNSb1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWRzkwWVd3Z2JHVnVaM1JvWEc0cUwxeHVZMjl1YzNRZ2NHVnlZMlZ1ZEZSdlVHbDRaV3h6SUQwZ0tIQmxjbU5sYm5Rc0lHeGxibWQwYUNrZ1BUNGdLSEJoY25ObFJteHZZWFFvY0dWeVkyVnVkQ2tnTHlBeE1EQXBJQ29nYkdWdVozUm9JQ3NnSjNCNEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSE4wWVhSbExDQnNaVzVuZEdncElEMCtJSHRjYmlBZ1kyOXVjM1FnYzNSNWJHVnpJRDBnZTMwN1hHNGdJR052Ym5OMElHUmhjMmhCY25KaGVWTjBlV3hsY3lBOUlIdGNiaUFnSUNCc1pXNW5kR2c2SURBc1hHNGdJQ0FnYzNCaFkybHVaem9nYkdWdVozUm9JQ3NnSjNCNEoxeHVJQ0I5TzF4dUlDQnNaWFFnYUdGelJHRnphRUZ5Y21GNUlEMGdabUZzYzJVN1hHNWNiaUFnWm05eUlDaHNaWFFnYTJWNUlHbHVJSE4wWVhSbEtTQjdYRzRnSUNBZ2FXWWdLSE4wWVhSbExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2MzUmhkR1ZiYTJWNVhUdGNibHh1SUNBZ0lDQWdjM2RwZEdOb0lDaHJaWGtwSUh0Y2JpQWdJQ0FnSUdOaGMyVWdKMnhsYm1kMGFDYzZYRzRnSUNBZ0lDQmpZWE5sSUNkemNHRmphVzVuSnpwY2JpQWdJQ0FnSUNBZ2FHRnpSR0Z6YUVGeWNtRjVJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdaR0Z6YUVGeWNtRjVVM1I1YkdWelcydGxlVjBnUFNCd1pYSmpaVzUwVkc5UWFYaGxiSE1vZG1Gc2RXVXNJR3hsYm1kMGFDazdYRzRnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ1kyRnpaU0FuYjJabWMyVjBKenBjYmlBZ0lDQWdJQ0FnYzNSNWJHVnpXeWR6ZEhKdmEyVXRaR0Z6YUc5bVpuTmxkQ2RkSUQwZ2NHVnlZMlZ1ZEZSdlVHbDRaV3h6S0MxMllXeDFaU3dnYkdWdVozUm9LVHRjYmlBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQmtaV1poZFd4ME9seHVJQ0FnSUNBZ0lDQnpkSGxzWlhOYmEyVjVYU0E5SUhaaGJIVmxPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR2xtSUNob1lYTkVZWE5vUVhKeVlYa3BJSHRjYmlBZ0lDQnpkSGxzWlhOYkozTjBjbTlyWlMxa1lYTm9ZWEp5WVhrblhTQTlJR1JoYzJoQmNuSmhlVk4wZVd4bGN5NXNaVzVuZEdnZ0t5QW5JQ2NnS3lCa1lYTm9RWEp5WVhsVGRIbHNaWE11YzNCaFkybHVaenRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ6ZEhsc1pYTTdYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNvbG9yID0gZXhwb3J0cy5oc2xhID0gZXhwb3J0cy5oZXggPSBleHBvcnRzLnJnYmEgPSBleHBvcnRzLnJnYlVuaXQgPSBleHBvcnRzLnNjYWxlID0gZXhwb3J0cy5weCA9IGV4cG9ydHMucGVyY2VudCA9IGV4cG9ydHMuZGVncmVlcyA9IGV4cG9ydHMuYWxwaGEgPSBleHBvcnRzLm51bWJlciA9IHVuZGVmaW5lZDtcblxudmFyIF9jaGlsZFR5cGVzLCBfY2hpbGRUeXBlczI7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVmFsdWUgdHlwZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBhbHBoYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogZGVncmVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBoc2xhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBwZXJjZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBweFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmdiVW5pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmdiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzY2FsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMyID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbi8vIFN0cmluZyBwcm9wZXJ0aWVzXG52YXIgUkVEID0gJ1JlZCc7XG52YXIgR1JFRU4gPSAnR3JlZW4nO1xudmFyIEJMVUUgPSAnQmx1ZSc7XG52YXIgQUxQSEEgPSAnQWxwaGEnO1xudmFyIEhVRSA9ICdIdWUnO1xudmFyIFNBVFVSQVRJT04gPSAnU2F0dXJhdGlvbic7XG52YXIgTElHSFRORVNTID0gJ0xpZ2h0bmVzcyc7XG5cbi8vIFRlbXBsYXRlc1xudmFyIHJnYmFUZW1wbGF0ZSA9IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgcmV0dXJuICdyZ2JhKCcgKyBjb2xvcnNbUkVEXSArICcsICcgKyBjb2xvcnNbR1JFRU5dICsgJywgJyArIGNvbG9yc1tCTFVFXSArICcsICcgKyBjb2xvcnNbQUxQSEFdICsgJyknO1xufTtcbnZhciBoc2xhVGVtcGxhdGUgPSBmdW5jdGlvbiAoY29sb3JzKSB7XG4gIHJldHVybiAnaHNsYSgnICsgY29sb3JzW0hVRV0gKyAnLCAnICsgY29sb3JzW1NBVFVSQVRJT05dICsgJywgJyArIGNvbG9yc1tMSUdIVE5FU1NdICsgJywgJyArIGNvbG9yc1tBTFBIQV0gKyAnKSc7XG59O1xuXG52YXIgbnVtYmVyID0gZXhwb3J0cy5udW1iZXIgPSB7XG4gIHRlc3Q6IF91dGlsczIuaXNOdW0sXG4gIHBhcnNlOiBwYXJzZUZsb2F0XG59O1xuXG4vLyBWYWx1ZSB0eXBlc1xudmFyIGFscGhhID0gZXhwb3J0cy5hbHBoYSA9IF9leHRlbmRzKHt9LCBudW1iZXIsIHtcbiAgdHJhbnNmb3JtOiAoMCwgX3RyYW5zZm9ybWVycy5jbGFtcCkoMCwgMSlcbn0pO1xuXG52YXIgZGVncmVlcyA9IGV4cG9ydHMuZGVncmVlcyA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCdkZWcnKTtcbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJyUnKTtcbnZhciBweCA9IGV4cG9ydHMucHggPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgncHgnKTtcblxudmFyIHNjYWxlID0gZXhwb3J0cy5zY2FsZSA9IF9leHRlbmRzKHt9LCBudW1iZXIsIHtcbiAgZGVmYXVsdDogMVxufSk7XG5cbnZhciByZ2JVbml0ID0gZXhwb3J0cy5yZ2JVbml0ID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICB0cmFuc2Zvcm06ICgwLCBfdHJhbnNmb3JtZXJzLmZsb3cpKFxuICAvL2h0dHA6Ly9jb2RlcGVuLmlvL29zdWJsYWtlL2Z1bGwveEdWVmFOL1xuICAvLyAodiwgdmFsdWUsIGFjdGlvbikgPT4ge1xuICAvLyAgIGlmIChhY3Rpb24pIHtcbiAgLy8gICAgIGNvbnN0IGZyb21Db2xvciA9IGFjdGlvbi5mcm9tICogYWN0aW9uLmZyb207XG4gIC8vICAgICBjb25zdCB0b0NvbG9yID0gYWN0aW9uLnRvICogYWN0aW9uLnRvO1xuICAvLyAgICAgcmV0dXJuIE1hdGguc3FydChhY3Rpb24ucHJvZ3Jlc3MgKiAodG9Db2xvciAtIGZyb21Db2xvcikgKyBmcm9tQ29sb3IpO1xuICAvLyAgIH1cblxuICAvLyAgIHJldHVybiB2O1xuICAvLyB9LFxuICAoMCwgX3RyYW5zZm9ybWVycy5jbGFtcCkoMCwgMjU1KSwgTWF0aC5yb3VuZClcbn0pO1xuXG52YXIgcmdiYSA9IGV4cG9ydHMucmdiYSA9IHtcbiAgY2hpbGRUeXBlczogKF9jaGlsZFR5cGVzID0ge30sIF9jaGlsZFR5cGVzW1JFRF0gPSByZ2JVbml0LCBfY2hpbGRUeXBlc1tHUkVFTl0gPSByZ2JVbml0LCBfY2hpbGRUeXBlc1tCTFVFXSA9IHJnYlVuaXQsIF9jaGlsZFR5cGVzW0FMUEhBXSA9IGFscGhhLCBfY2hpbGRUeXBlcyksXG5cbiAgdGVzdDogKDAsIF91dGlscy5pc0ZpcnN0Q2hhcnMpKCdyZ2InKSxcblxuICBwYXJzZTogKDAsIF91dGlscy5zcGxpdENvbG9yVmFsdWVzKShbUkVELCBHUkVFTiwgQkxVRSwgQUxQSEFdKSxcblxuICB0cmFuc2Zvcm06IHJnYmFUZW1wbGF0ZVxufTtcblxudmFyIGhleCA9IGV4cG9ydHMuaGV4ID0gX2V4dGVuZHMoe30sIHJnYmEsIHtcblxuICB0ZXN0OiAoMCwgX3V0aWxzLmlzRmlyc3RDaGFycykoJyMnKSxcblxuICBwYXJzZTogZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgciA9IHZvaWQgMCxcbiAgICAgICAgZyA9IHZvaWQgMCxcbiAgICAgICAgYiA9IHZvaWQgMDtcblxuICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgaWYgKHYubGVuZ3RoID4gNCkge1xuICAgICAgciA9IHYuc3Vic3RyKDEsIDIpO1xuICAgICAgZyA9IHYuc3Vic3RyKDMsIDIpO1xuICAgICAgYiA9IHYuc3Vic3RyKDUsIDIpO1xuXG4gICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgIH0gZWxzZSB7XG4gICAgICByID0gdi5zdWJzdHIoMSwgMSk7XG4gICAgICBnID0gdi5zdWJzdHIoMiwgMSk7XG4gICAgICBiID0gdi5zdWJzdHIoMywgMSk7XG4gICAgICByICs9IHI7XG4gICAgICBnICs9IGc7XG4gICAgICBiICs9IGI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgIEFscGhhOiAxXG4gICAgfTtcbiAgfVxufSk7XG5cbnZhciBoc2xhID0gZXhwb3J0cy5oc2xhID0ge1xuICBjaGlsZFR5cGVzOiAoX2NoaWxkVHlwZXMyID0ge30sIF9jaGlsZFR5cGVzMltIVUVdID0gbnVtYmVyLCBfY2hpbGRUeXBlczJbU0FUVVJBVElPTl0gPSBwZXJjZW50LCBfY2hpbGRUeXBlczJbTElHSFRORVNTXSA9IHBlcmNlbnQsIF9jaGlsZFR5cGVzMltBTFBIQV0gPSBhbHBoYSwgX2NoaWxkVHlwZXMyKSxcblxuICB0ZXN0OiAoMCwgX3V0aWxzLmlzRmlyc3RDaGFycykoJ2hzbCcpLFxuXG4gIHBhcnNlOiAoMCwgX3V0aWxzLnNwbGl0Q29sb3JWYWx1ZXMpKFtIVUUsIFNBVFVSQVRJT04sIExJR0hUTkVTUywgQUxQSEFdKSxcblxuICBjb21iaW5lOiBoc2xhVGVtcGxhdGVcbn07XG5cbnZhciBjb2xvciA9IGV4cG9ydHMuY29sb3IgPSB7XG4gIGNoaWxkVHlwZXM6IF9leHRlbmRzKHt9LCBoc2xhLmNoaWxkVHlwZXMsIHJnYmEuY2hpbGRUeXBlcyksXG5cbiAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHJnYmEudGVzdCh2YWx1ZSkgfHwgaGV4LnRlc3QodmFsdWUpIHx8IGhzbGEudGVzdCh2YWx1ZSk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZG1Gc2RXVXRkSGx3WlhNdWFuTWlYU3dpYm1GdFpYTWlPbHNpVWtWRUlpd2lSMUpGUlU0aUxDSkNURlZGSWl3aVFVeFFTRUVpTENKSVZVVWlMQ0pUUVZSVlVrRlVTVTlPSWl3aVRFbEhTRlJPUlZOVElpd2ljbWRpWVZSbGJYQnNZWFJsSWl3aVkyOXNiM0p6SWl3aWFITnNZVlJsYlhCc1lYUmxJaXdpYm5WdFltVnlJaXdpZEdWemRDSXNJbkJoY25ObElpd2ljR0Z5YzJWR2JHOWhkQ0lzSW1Gc2NHaGhJaXdpZEhKaGJuTm1iM0p0SWl3aVpHVm5jbVZsY3lJc0luQmxjbU5sYm5RaUxDSndlQ0lzSW5OallXeGxJaXdpWkdWbVlYVnNkQ0lzSW5KbllsVnVhWFFpTENKTllYUm9JaXdpY205MWJtUWlMQ0p5WjJKaElpd2lZMmhwYkdSVWVYQmxjeUlzSW1obGVDSXNJbllpTENKeUlpd2laeUlzSW1JaUxDSnNaVzVuZEdnaUxDSnpkV0p6ZEhJaUxDSlNaV1FpTENKd1lYSnpaVWx1ZENJc0lrZHlaV1Z1SWl3aVFteDFaU0lzSWtGc2NHaGhJaXdpYUhOc1lTSXNJbU52YldKcGJtVWlMQ0pqYjJ4dmNpSXNJblpoYkhWbElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPMnRSUVVGQk96czdPenM3T3pzN096czdPenM3UVVGaFFUczdRVUZEUVRzN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEVsQlFVMUJMRTFCUVUwc1MwRkJXanRCUVVOQkxFbEJRVTFETEZGQlFWRXNUMEZCWkR0QlFVTkJMRWxCUVUxRExFOUJRVThzVFVGQllqdEJRVU5CTEVsQlFVMURMRkZCUVZFc1QwRkJaRHRCUVVOQkxFbEJRVTFETEUxQlFVMHNTMEZCV2p0QlFVTkJMRWxCUVUxRExHRkJRV0VzV1VGQmJrSTdRVUZEUVN4SlFVRk5ReXhaUVVGWkxGZEJRV3hDT3p0QlFVVkJPMEZCUTBFc1NVRkJUVU1zWlVGQlpTeFZRVUZEUXl4TlFVRkVPMEZCUVVFc2JVSkJRVzlDUVN4UFFVRlBVaXhIUVVGUUxFTkJRWEJDTEZWQlFXOURVU3hQUVVGUFVDeExRVUZRTEVOQlFYQkRMRlZCUVhORVR5eFBRVUZQVGl4SlFVRlFMRU5CUVhSRUxGVkJRWFZGVFN4UFFVRlBUQ3hMUVVGUUxFTkJRWFpGTzBGQlFVRXNRMEZCY2tJN1FVRkRRU3hKUVVGTlRTeGxRVUZsTEZWQlFVTkVMRTFCUVVRN1FVRkJRU3h0UWtGQmIwSkJMRTlCUVU5S0xFZEJRVkFzUTBGQmNFSXNWVUZCYjBOSkxFOUJRVTlJTEZWQlFWQXNRMEZCY0VNc1ZVRkJNa1JITEU5QlFVOUdMRk5CUVZBc1EwRkJNMFFzVlVGQmFVWkZMRTlCUVU5TUxFdEJRVkFzUTBGQmFrWTdRVUZCUVN4RFFVRnlRanM3UVVGRlR5eEpRVUZOVHl3d1FrRkJVenRCUVVOd1FrTXNjVUpCUkc5Q08wRkJSWEJDUXl4VFFVRlBRenRCUVVaaExFTkJRV1k3TzBGQlMxQTdRVUZEVHl4SlFVRk5ReXh4UTBGRFVrb3NUVUZFVVR0QlFVVllTeXhoUVVGWExIbENRVUZOTEVOQlFVNHNSVUZCVXl4RFFVRlVPMEZCUmtFc1JVRkJUanM3UVVGTFFTeEpRVUZOUXl3MFFrRkJWU3d5UWtGQlpTeExRVUZtTEVOQlFXaENPMEZCUTBFc1NVRkJUVU1zTkVKQlFWVXNNa0pCUVdVc1IwRkJaaXhEUVVGb1FqdEJRVU5CTEVsQlFVMURMR3RDUVVGTExESkNRVUZsTEVsQlFXWXNRMEZCV0RzN1FVRkZRU3hKUVVGTlF5eHhRMEZEVWxRc1RVRkVVVHRCUVVWWVZTeFhRVUZUTzBGQlJrVXNSVUZCVGpzN1FVRkxRU3hKUVVGTlF5eDVRMEZEVWxnc1RVRkVVVHRCUVVWWVN5eGhRVUZYTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMREpDUVVGTkxFTkJRVTRzUlVGQlV5eEhRVUZVTEVOQldGTXNSVUZaVkU4c1MwRkJTME1zUzBGYVNUdEJRVVpCTEVWQlFVNDdPMEZCYTBKQkxFbEJRVTFETEhOQ1FVRlBPMEZCUTJ4Q1F5dzJRMEZEUjNwQ0xFZEJSRWdzU1VGRFUzRkNMRTlCUkZRc1kwRkZSM0JDTEV0QlJrZ3NTVUZGVjI5Q0xFOUJSbGdzWTBGSFIyNUNMRWxCU0Vnc1NVRkhWVzFDTEU5QlNGWXNZMEZKUjJ4Q0xFdEJTa2dzU1VGSlYxY3NTMEZLV0N4alFVUnJRanM3UVVGUmJFSklMRkZCUVUwc2VVSkJRV0VzUzBGQllpeERRVkpaT3p0QlFWVnNRa01zVTBGQlR5dzJRa0ZCYVVJc1EwRkJRMW9zUjBGQlJDeEZRVUZOUXl4TFFVRk9MRVZCUVdGRExFbEJRV0lzUlVGQmJVSkRMRXRCUVc1Q0xFTkJRV3BDTEVOQlZsYzdPMEZCV1d4Q1dTeGhRVUZYVWp0QlFWcFBMRU5CUVdJN08wRkJaVUVzU1VGQlRXMUNMR2xEUVVOU1JpeEpRVVJST3p0QlFVZFlZaXhSUVVGTkxIbENRVUZoTEVkQlFXSXNRMEZJU3pzN1FVRkxXRU1zVTBGQlR5eFZRVUZEWlN4RFFVRkVMRVZCUVU4N1FVRkRXaXhSUVVGSlF5eFZRVUZLTzBGQlFVRXNVVUZCVDBNc1ZVRkJVRHRCUVVGQkxGRkJRVlZETEZWQlFWWTdPMEZCUlVFN1FVRkRRU3hSUVVGSlNDeEZRVUZGU1N4TlFVRkdMRWRCUVZjc1EwRkJaaXhGUVVGclFqdEJRVU5vUWtnc1ZVRkJTVVFzUlVGQlJVc3NUVUZCUml4RFFVRlRMRU5CUVZRc1JVRkJXU3hEUVVGYUxFTkJRVW83UVVGRFFVZ3NWVUZCU1VZc1JVRkJSVXNzVFVGQlJpeERRVUZUTEVOQlFWUXNSVUZCV1N4RFFVRmFMRU5CUVVvN1FVRkRRVVlzVlVGQlNVZ3NSVUZCUlVzc1RVRkJSaXhEUVVGVExFTkJRVlFzUlVGQldTeERRVUZhTEVOQlFVbzdPMEZCUlVZN1FVRkRReXhMUVU1RUxFMUJUVTg3UVVGRFRFb3NWVUZCU1VRc1JVRkJSVXNzVFVGQlJpeERRVUZUTEVOQlFWUXNSVUZCV1N4RFFVRmFMRU5CUVVvN1FVRkRRVWdzVlVGQlNVWXNSVUZCUlVzc1RVRkJSaXhEUVVGVExFTkJRVlFzUlVGQldTeERRVUZhTEVOQlFVbzdRVUZEUVVZc1ZVRkJTVWdzUlVGQlJVc3NUVUZCUml4RFFVRlRMRU5CUVZRc1JVRkJXU3hEUVVGYUxFTkJRVW83UVVGRFFVb3NWMEZCUzBFc1EwRkJURHRCUVVOQlF5eFhRVUZMUVN4RFFVRk1PMEZCUTBGRExGZEJRVXRCTEVOQlFVdzdRVUZEUkRzN1FVRkZSQ3hYUVVGUE8wRkJRMHhITEZkQlFVdERMRk5CUVZOT0xFTkJRVlFzUlVGQldTeEZRVUZhTEVOQlJFRTdRVUZGVEU4c1lVRkJUMFFzVTBGQlUwd3NRMEZCVkN4RlFVRlpMRVZCUVZvc1EwRkdSanRCUVVkTVR5eFpRVUZOUml4VFFVRlRTaXhEUVVGVUxFVkJRVmtzUlVGQldpeERRVWhFTzBGQlNVeFBMR0ZCUVU4N1FVRktSaXhMUVVGUU8wRkJUVVE3UVVFNVFsVXNSVUZCVGpzN1FVRnBRMEVzU1VGQlRVTXNjMEpCUVU4N1FVRkRiRUppTEN0RFFVTkhja0lzUjBGRVNDeEpRVU5UVFN4TlFVUlVMR1ZCUlVkTUxGVkJSa2dzU1VGRlowSlpMRTlCUm1oQ0xHVkJSMGRZTEZOQlNFZ3NTVUZIWlZjc1QwRklaaXhsUVVsSFpDeExRVXBJTEVsQlNWZFhMRXRCU2xnc1pVRkVhMEk3TzBGQlVXeENTQ3hSUVVGTkxIbENRVUZoTEV0QlFXSXNRMEZTV1RzN1FVRlZiRUpETEZOQlFVOHNOa0pCUVdsQ0xFTkJRVU5TTEVkQlFVUXNSVUZCVFVNc1ZVRkJUaXhGUVVGclFrTXNVMEZCYkVJc1JVRkJOa0pJTEV0QlFUZENMRU5CUVdwQ0xFTkJWbGM3TzBGQldXeENiME1zVjBGQlV6bENPMEZCV2xNc1EwRkJZanM3UVVGbFFTeEpRVUZOSzBJc2QwSkJRVkU3UVVGRGJrSm1MREpDUVVOTFlTeExRVUZMWWl4VlFVUldMRVZCUlV0RUxFdEJRVXRETEZWQlJsWXNRMEZFYlVJN08wRkJUVzVDWkN4UlFVRk5MRlZCUVVNNFFpeExRVUZFTzBGQlFVRXNWMEZCVjJwQ0xFdEJRVXRpTEVsQlFVd3NRMEZCVlRoQ0xFdEJRVllzUzBGQmIwSm1MRWxCUVVsbUxFbEJRVW9zUTBGQlV6aENMRXRCUVZRc1EwRkJjRUlzU1VGQmRVTklMRXRCUVVzelFpeEpRVUZNTEVOQlFWVTRRaXhMUVVGV0xFTkJRV3hFTzBGQlFVRTdRVUZPWVN4RFFVRmtJaXdpWm1sc1pTSTZJblpoYkhWbExYUjVjR1Z6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcVhHNGdLaUJXWVd4MVpTQjBlWEJsYzF4dUlDcGNiaUFxSUdGc2NHaGhYRzRnS2lCa1pXZHlaV1Z6WEc0Z0tpQm9aWGhjYmlBcUlHaHpiR0ZjYmlBcUlIQmxjbU5sYm5SY2JpQXFJSEI0WEc0Z0tpQnlaMkpWYm1sMFhHNGdLaUJ5WjJKY2JpQXFJSE5qWVd4bFhHNGdLaTljYm1sdGNHOXlkQ0I3SUdOc1lXMXdMQ0JtYkc5M0lIMGdabkp2YlNBbkxpNHZhVzVqTDNSeVlXNXpabTl5YldWeWN5YzdYRzVwYlhCdmNuUWdleUJqY21WaGRHVlZibWwwVkhsd1pTd2dhWE5HYVhKemRFTm9ZWEp6TENCemNHeHBkRU52Ykc5eVZtRnNkV1Z6SUgwZ1puSnZiU0FuTGk5MWRHbHNjeWM3WEc1cGJYQnZjblFnZXlCcGMwNTFiU0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNiaTh2SUZOMGNtbHVaeUJ3Y205d1pYSjBhV1Z6WEc1amIyNXpkQ0JTUlVRZ1BTQW5VbVZrSnp0Y2JtTnZibk4wSUVkU1JVVk9JRDBnSjBkeVpXVnVKenRjYm1OdmJuTjBJRUpNVlVVZ1BTQW5RbXgxWlNjN1hHNWpiMjV6ZENCQlRGQklRU0E5SUNkQmJIQm9ZU2M3WEc1amIyNXpkQ0JJVlVVZ1BTQW5TSFZsSnp0Y2JtTnZibk4wSUZOQlZGVlNRVlJKVDA0Z1BTQW5VMkYwZFhKaGRHbHZiaWM3WEc1amIyNXpkQ0JNU1VkSVZFNUZVMU1nUFNBblRHbG5hSFJ1WlhOekp6dGNibHh1THk4Z1ZHVnRjR3hoZEdWelhHNWpiMjV6ZENCeVoySmhWR1Z0Y0d4aGRHVWdQU0FvWTI5c2IzSnpLU0E5UGlCZ2NtZGlZU2drZTJOdmJHOXljMXRTUlVSZGZTd2dKSHRqYjJ4dmNuTmJSMUpGUlU1ZGZTd2dKSHRqYjJ4dmNuTmJRa3hWUlYxOUxDQWtlMk52Ykc5eWMxdEJURkJJUVYxOUtXQTdYRzVqYjI1emRDQm9jMnhoVkdWdGNHeGhkR1VnUFNBb1kyOXNiM0p6S1NBOVBpQmdhSE5zWVNna2UyTnZiRzl5YzF0SVZVVmRmU3dnSkh0amIyeHZjbk5iVTBGVVZWSkJWRWxQVGwxOUxDQWtlMk52Ykc5eWMxdE1TVWRJVkU1RlUxTmRmU3dnSkh0amIyeHZjbk5iUVV4UVNFRmRmU2xnTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYm5WdFltVnlJRDBnZTF4dUlDQjBaWE4wT2lCcGMwNTFiU3hjYmlBZ2NHRnljMlU2SUhCaGNuTmxSbXh2WVhSY2JuMDdYRzVjYmk4dklGWmhiSFZsSUhSNWNHVnpYRzVsZUhCdmNuUWdZMjl1YzNRZ1lXeHdhR0VnUFNCN1hHNGdJQzR1TG01MWJXSmxjaXhjYmlBZ2RISmhibk5tYjNKdE9pQmpiR0Z0Y0Nnd0xDQXhLVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdSbFozSmxaWE1nUFNCamNtVmhkR1ZWYm1sMFZIbHdaU2duWkdWbkp5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NHVnlZMlZ1ZENBOUlHTnlaV0YwWlZWdWFYUlVlWEJsS0NjbEp5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NIZ2dQU0JqY21WaGRHVlZibWwwVkhsd1pTZ25jSGduS1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhOallXeGxJRDBnZTF4dUlDQXVMaTV1ZFcxaVpYSXNYRzRnSUdSbFptRjFiSFE2SURGY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnlaMkpWYm1sMElEMGdlMXh1SUNBdUxpNXVkVzFpWlhJc1hHNGdJSFJ5WVc1elptOXliVG9nWm14dmR5aGNiaUFnSUNBdkwyaDBkSEE2THk5amIyUmxjR1Z1TG1sdkwyOXpkV0pzWVd0bEwyWjFiR3d2ZUVkV1ZtRk9MMXh1SUNBZ0lDOHZJQ2gyTENCMllXeDFaU3dnWVdOMGFXOXVLU0E5UGlCN1hHNGdJQ0FnTHk4Z0lDQnBaaUFvWVdOMGFXOXVLU0I3WEc0Z0lDQWdMeThnSUNBZ0lHTnZibk4wSUdaeWIyMURiMnh2Y2lBOUlHRmpkR2x2Ymk1bWNtOXRJQ29nWVdOMGFXOXVMbVp5YjIwN1hHNGdJQ0FnTHk4Z0lDQWdJR052Ym5OMElIUnZRMjlzYjNJZ1BTQmhZM1JwYjI0dWRHOGdLaUJoWTNScGIyNHVkRzg3WEc0Z0lDQWdMeThnSUNBZ0lISmxkSFZ5YmlCTllYUm9Mbk54Y25Rb1lXTjBhVzl1TG5CeWIyZHlaWE56SUNvZ0tIUnZRMjlzYjNJZ0xTQm1jbTl0UTI5c2IzSXBJQ3NnWm5KdmJVTnZiRzl5S1R0Y2JpQWdJQ0F2THlBZ0lIMWNibHh1SUNBZ0lDOHZJQ0FnY21WMGRYSnVJSFk3WEc0Z0lDQWdMeThnZlN4Y2JpQWdJQ0JqYkdGdGNDZ3dMQ0F5TlRVcExGeHVJQ0FnSUUxaGRHZ3VjbTkxYm1SY2JpQWdLVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhKblltRWdQU0I3WEc0Z0lHTm9hV3hrVkhsd1pYTTZJSHRjYmlBZ0lDQmJVa1ZFWFRvZ2NtZGlWVzVwZEN4Y2JpQWdJQ0JiUjFKRlJVNWRPaUJ5WjJKVmJtbDBMRnh1SUNBZ0lGdENURlZGWFRvZ2NtZGlWVzVwZEN4Y2JpQWdJQ0JiUVV4UVNFRmRPaUJoYkhCb1lWeHVJQ0I5TEZ4dVhHNGdJSFJsYzNRNklHbHpSbWx5YzNSRGFHRnljeWduY21kaUp5a3NYRzVjYmlBZ2NHRnljMlU2SUhOd2JHbDBRMjlzYjNKV1lXeDFaWE1vVzFKRlJDd2dSMUpGUlU0c0lFSk1WVVVzSUVGTVVFaEJYU2tzWEc1Y2JpQWdkSEpoYm5ObWIzSnRPaUJ5WjJKaFZHVnRjR3hoZEdWY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQm9aWGdnUFNCN1hHNGdJQzR1TG5KblltRXNYRzVjYmlBZ2RHVnpkRG9nYVhOR2FYSnpkRU5vWVhKektDY2pKeWtzWEc1Y2JpQWdjR0Z5YzJVNklDaDJLU0E5UGlCN1hHNGdJQ0FnYkdWMElISXNJR2NzSUdJN1hHNWNiaUFnSUNBdkx5QkpaaUIzWlNCb1lYWmxJRFlnWTJoaGNtRmpkR1Z5Y3l3Z2FXVWdJMFpHTURBd01GeHVJQ0FnSUdsbUlDaDJMbXhsYm1kMGFDQStJRFFwSUh0Y2JpQWdJQ0FnSUhJZ1BTQjJMbk4xWW5OMGNpZ3hMQ0F5S1R0Y2JpQWdJQ0FnSUdjZ1BTQjJMbk4xWW5OMGNpZ3pMQ0F5S1R0Y2JpQWdJQ0FnSUdJZ1BTQjJMbk4xWW5OMGNpZzFMQ0F5S1R0Y2JseHVJQ0FnSUM4dklFOXlJSGRsSUdoaGRtVWdNeUJqYUdGeVlXTjBaWEp6TENCcFpTQWpSakF3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lISWdQU0IyTG5OMVluTjBjaWd4TENBeEtUdGNiaUFnSUNBZ0lHY2dQU0IyTG5OMVluTjBjaWd5TENBeEtUdGNiaUFnSUNBZ0lHSWdQU0IyTG5OMVluTjBjaWd6TENBeEtUdGNiaUFnSUNBZ0lISWdLejBnY2p0Y2JpQWdJQ0FnSUdjZ0t6MGdaenRjYmlBZ0lDQWdJR0lnS3owZ1lqdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnVW1Wa09pQndZWEp6WlVsdWRDaHlMQ0F4Tmlrc1hHNGdJQ0FnSUNCSGNtVmxiam9nY0dGeWMyVkpiblFvWnl3Z01UWXBMRnh1SUNBZ0lDQWdRbXgxWlRvZ2NHRnljMlZKYm5Rb1lpd2dNVFlwTEZ4dUlDQWdJQ0FnUVd4d2FHRTZJREZjYmlBZ0lDQjlPMXh1SUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdhSE5zWVNBOUlIdGNiaUFnWTJocGJHUlVlWEJsY3pvZ2UxeHVJQ0FnSUZ0SVZVVmRPaUJ1ZFcxaVpYSXNYRzRnSUNBZ1cxTkJWRlZTUVZSSlQwNWRPaUJ3WlhKalpXNTBMRnh1SUNBZ0lGdE1TVWRJVkU1RlUxTmRPaUJ3WlhKalpXNTBMRnh1SUNBZ0lGdEJURkJJUVYwNklHRnNjR2hoWEc0Z0lIMHNYRzVjYmlBZ2RHVnpkRG9nYVhOR2FYSnpkRU5vWVhKektDZG9jMnduS1N4Y2JseHVJQ0J3WVhKelpUb2djM0JzYVhSRGIyeHZjbFpoYkhWbGN5aGJTRlZGTENCVFFWUlZVa0ZVU1U5T0xDQk1TVWRJVkU1RlUxTXNJRUZNVUVoQlhTa3NYRzVjYmlBZ1kyOXRZbWx1WlRvZ2FITnNZVlJsYlhCc1lYUmxYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTI5c2IzSWdQU0I3WEc0Z0lHTm9hV3hrVkhsd1pYTTZJSHRjYmlBZ0lDQXVMaTVvYzJ4aExtTm9hV3hrVkhsd1pYTXNYRzRnSUNBZ0xpNHVjbWRpWVM1amFHbHNaRlI1Y0dWelhHNGdJSDBzWEc1Y2JpQWdkR1Z6ZERvZ0tIWmhiSFZsS1NBOVBpQnlaMkpoTG5SbGMzUW9kbUZzZFdVcElIeDhJR2hsZUM1MFpYTjBLSFpoYkhWbEtTQjhmQ0JvYzJ4aExuUmxjM1FvZG1Gc2RXVXBYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy92YWx1ZS10eXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCA9IDEuNTI1O1xuXG52YXIgY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZVJldmVyc2VkRWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2luZygxIC0gcCk7XG4gIH07XG59O1xudmFyIGNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVNaXJyb3JlZEVhc2luZyA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPD0gMC41ID8gZWFzaW5nKDIgKiBwKSAvIDIgOiAoMiAtIGVhc2luZygyICogKDEgLSBwKSkpIC8gMjtcbiAgfTtcbn07XG5cbnZhciBsaW5lYXIgPSBleHBvcnRzLmxpbmVhciA9IGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwO1xufTtcblxudmFyIGNyZWF0ZUVhc2VJbiA9IGV4cG9ydHMuY3JlYXRlRWFzZUluID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBNYXRoLnBvdyhwLCBwb3dlcik7XG4gIH07XG59O1xudmFyIGVhc2VJbiA9IGV4cG9ydHMuZWFzZUluID0gY3JlYXRlRWFzZUluKDIpO1xudmFyIGVhc2VPdXQgPSBleHBvcnRzLmVhc2VPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNlSW4pO1xudmFyIGVhc2VJbk91dCA9IGV4cG9ydHMuZWFzZUluT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoZWFzZUluKTtcblxudmFyIGNpcmNJbiA9IGV4cG9ydHMuY2lyY0luID0gZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocCkpO1xufTtcbnZhciBjaXJjT3V0ID0gZXhwb3J0cy5jaXJjT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoY2lyY0luKTtcbnZhciBjaXJjSW5PdXQgPSBleHBvcnRzLmNpcmNJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGNpcmNPdXQpO1xuXG52YXIgY3JlYXRlQmFja0luID0gZXhwb3J0cy5jcmVhdGVCYWNrSW4gPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgKiBwICogKChwb3dlciArIDEpICogcCAtIHBvd2VyKTtcbiAgfTtcbn07XG52YXIgYmFja0luID0gZXhwb3J0cy5iYWNrSW4gPSBjcmVhdGVCYWNrSW4oREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xudmFyIGJhY2tPdXQgPSBleHBvcnRzLmJhY2tPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhiYWNrSW4pO1xudmFyIGJhY2tJbk91dCA9IGV4cG9ydHMuYmFja0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoYmFja0luKTtcblxudmFyIGNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgdmFyIGJhY2tFYXNpbmcgPSBjcmVhdGVCYWNrSW4ocG93ZXIpO1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gKHAgKj0gMikgPCAxID8gMC41ICogYmFja0Vhc2luZyhwKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHAgLSAxKSkpO1xuICB9O1xufTtcblxudmFyIGFudGljaXBhdGUgPSBleHBvcnRzLmFudGljaXBhdGUgPSBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZaV0Z6YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiSWtSRlJrRlZURlJmVDFaRlVsTklUMDlVWDFOVVVrVk9SMVJJSWl3aVkzSmxZWFJsVW1WMlpYSnpaV1JGWVhOcGJtY2lMQ0psWVhOcGJtY2lMQ0p3SWl3aVkzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY2lMQ0pzYVc1bFlYSWlMQ0pqY21WaGRHVkZZWE5sU1c0aUxDSndiM2RsY2lJc0ltVmhjMlZKYmlJc0ltVmhjMlZQZFhRaUxDSmxZWE5sU1c1UGRYUWlMQ0pqYVhKalNXNGlMQ0pOWVhSb0lpd2ljMmx1SWl3aVlXTnZjeUlzSW1OcGNtTlBkWFFpTENKamFYSmpTVzVQZFhRaUxDSmpjbVZoZEdWQ1lXTnJTVzRpTENKaVlXTnJTVzRpTENKaVlXTnJUM1YwSWl3aVltRmphMGx1VDNWMElpd2lZM0psWVhSbFFXNTBhV05wY0dGMFpVVmhjMmx1WnlJc0ltSmhZMnRGWVhOcGJtY2lMQ0p3YjNjaUxDSmhiblJwWTJsd1lYUmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4SlFVRk5RU3cyUWtGQk5rSXNTMEZCYmtNN08wRkJSVThzU1VGQlRVTXNjMFJCUVhWQ0xGVkJRVU5ETEUxQlFVUTdRVUZCUVN4VFFVRlpMRlZCUVVORExFTkJRVVE3UVVGQlFTeFhRVUZQTEVsQlFVbEVMRTlCUVU4c1NVRkJTVU1zUTBGQldDeERRVUZZTzBGQlFVRXNSMEZCV2p0QlFVRkJMRU5CUVRkQ08wRkJRMEVzU1VGQlRVTXNjMFJCUVhWQ0xGVkJRVU5HTEUxQlFVUTdRVUZCUVN4VFFVRlpMRlZCUVVORExFTkJRVVE3UVVGQlFTeFhRVUZSUVN4TFFVRkxMRWRCUVU0c1IwRkJZVVFzVDBGQlR5eEpRVUZKUXl4RFFVRllMRWxCUVdkQ0xFTkJRVGRDTEVkQlFXbERMRU5CUVVNc1NVRkJTVVFzVDBGQlR5eExRVUZMTEVsQlFVbERMRU5CUVZRc1EwRkJVQ3hEUVVGTUxFbEJRVFJDTEVOQlFYQkZPMEZCUVVFc1IwRkJXanRCUVVGQkxFTkJRVGRDT3p0QlFVVkJMRWxCUVUxRkxEQkNRVUZUTEZWQlFVTkdMRU5CUVVRN1FVRkJRU3hUUVVGUFFTeERRVUZRTzBGQlFVRXNRMEZCWmpzN1FVRkZRU3hKUVVGTlJ5eHpRMEZCWlN4VlFVRkRReXhMUVVGRU8wRkJRVUVzVTBGQlZ5eFZRVUZEU2l4RFFVRkVPMEZCUVVFc2IwSkJRVTlCTEVOQlFWQXNSVUZCV1Vrc1MwRkJXanRCUVVGQkxFZEJRVmc3UVVGQlFTeERRVUZ5UWp0QlFVTkJMRWxCUVUxRExEQkNRVUZUUml4aFFVRmhMRU5CUVdJc1EwRkJaanRCUVVOQkxFbEJRVTFITERSQ1FVRlZVaXh4UWtGQmNVSlBMRTFCUVhKQ0xFTkJRV2hDTzBGQlEwRXNTVUZCVFVVc1owTkJRVmxPTEhGQ1FVRnhRa2tzVFVGQmNrSXNRMEZCYkVJN08wRkJSVUVzU1VGQlRVY3NNRUpCUVZNc1ZVRkJRMUlzUTBGQlJEdEJRVUZCTEZOQlFVOHNTVUZCU1ZNc1MwRkJTME1zUjBGQlRDeERRVUZUUkN4TFFVRkxSU3hKUVVGTUxFTkJRVlZZTEVOQlFWWXNRMEZCVkN4RFFVRllPMEZCUVVFc1EwRkJaanRCUVVOQkxFbEJRVTFaTERSQ1FVRlZaQ3h4UWtGQmNVSlZMRTFCUVhKQ0xFTkJRV2hDTzBGQlEwRXNTVUZCVFVzc1owTkJRVmxhTEhGQ1FVRnhRbGNzVDBGQmNrSXNRMEZCYkVJN08wRkJSVUVzU1VGQlRVVXNjME5CUVdVc1ZVRkJRMVlzUzBGQlJEdEJRVUZCTEZOQlFWY3NWVUZCUTBvc1EwRkJSRHRCUVVGQkxGZEJRVkZCTEVsQlFVbEJMRU5CUVV3c1NVRkJWeXhEUVVGRFNTeFJRVUZSTEVOQlFWUXNTVUZCWTBvc1EwRkJaQ3hIUVVGclFra3NTMEZCTjBJc1EwRkJVRHRCUVVGQkxFZEJRVmc3UVVGQlFTeERRVUZ5UWp0QlFVTkJMRWxCUVUxWExEQkNRVUZUUkN4aFFVRmhha0lzTUVKQlFXSXNRMEZCWmp0QlFVTkJMRWxCUVUxdFFpdzBRa0ZCVld4Q0xIRkNRVUZ4UW1sQ0xFMUJRWEpDTEVOQlFXaENPMEZCUTBFc1NVRkJUVVVzWjBOQlFWbG9RaXh4UWtGQmNVSmpMRTFCUVhKQ0xFTkJRV3hDT3p0QlFVVkJMRWxCUVUxSExEQkVRVUY1UWl4VlFVRkRaQ3hMUVVGRUxFVkJRVmM3UVVGREwwTXNUVUZCVFdVc1lVRkJZVXdzWVVGQllWWXNTMEZCWWl4RFFVRnVRanRCUVVOQkxGTkJRVThzVlVGQlEwb3NRMEZCUkR0QlFVRkJMRmRCUVZFc1EwRkJRMEVzUzBGQlN5eERRVUZPTEVsQlFWY3NRMEZCV2l4SFFVRnBRaXhOUVVGTmJVSXNWMEZCVjI1Q0xFTkJRVmdzUTBGQmRrSXNSMEZCZFVNc1QwRkJUeXhKUVVGSlV5eExRVUZMVnl4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVU1zUlVGQlJDeEpRVUZQY0VJc1NVRkJTU3hEUVVGWUxFTkJRVm9zUTBGQldDeERRVUU1UXp0QlFVRkJMRWRCUVZBN1FVRkRSQ3hEUVVoTk96dEJRVXRCTEVsQlFVMXhRaXhyUTBGQllVZ3NkVUpCUVhWQ2NrSXNNRUpCUVhaQ0xFTkJRVzVDSWl3aVptbHNaU0k2SW1WaGMybHVaeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbU52Ym5OMElFUkZSa0ZWVEZSZlQxWkZVbE5JVDA5VVgxTlVVa1ZPUjFSSUlEMGdNUzQxTWpVN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZTWlhabGNuTmxaRVZoYzJsdVp5QTlJQ2hsWVhOcGJtY3BJRDArSUNod0tTQTlQaUF4SUMwZ1pXRnphVzVuS0RFZ0xTQndLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWTmFYSnliM0psWkVWaGMybHVaeUE5SUNobFlYTnBibWNwSUQwK0lDaHdLU0E5UGlBb2NDQThQU0F3TGpVcElEOGdaV0Z6YVc1bktESWdLaUJ3S1NBdklESWdPaUFvTWlBdElHVmhjMmx1WnlneUlDb2dLREVnTFNCd0tTa3BJQzhnTWp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUd4cGJtVmhjaUE5SUNod0tTQTlQaUJ3TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxSV0Z6WlVsdUlEMGdLSEJ2ZDJWeUtTQTlQaUFvY0NrZ1BUNGdjQ0FxS2lCd2IzZGxjanRjYm1WNGNHOXlkQ0JqYjI1emRDQmxZWE5sU1c0Z1BTQmpjbVZoZEdWRllYTmxTVzRvTWlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWldGelpVOTFkQ0E5SUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bktHVmhjMlZKYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWldGelpVbHVUM1YwSUQwZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY29aV0Z6WlVsdUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnBjbU5KYmlBOUlDaHdLU0E5UGlBeElDMGdUV0YwYUM1emFXNG9UV0YwYUM1aFkyOXpLSEFwS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYVhKalQzVjBJRDBnWTNKbFlYUmxVbVYyWlhKelpXUkZZWE5wYm1jb1kybHlZMGx1S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYVhKalNXNVBkWFFnUFNCamNtVmhkR1ZOYVhKeWIzSmxaRVZoYzJsdVp5aGphWEpqVDNWMEtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVKaFkydEpiaUE5SUNod2IzZGxjaWtnUFQ0Z0tIQXBJRDArSUNod0lDb2djQ2tnS2lBb0tIQnZkMlZ5SUNzZ01Ta2dLaUJ3SUMwZ2NHOTNaWElwTzF4dVpYaHdiM0owSUdOdmJuTjBJR0poWTJ0SmJpQTlJR055WldGMFpVSmhZMnRKYmloRVJVWkJWVXhVWDA5V1JWSlRTRTlQVkY5VFZGSkZUa2RVU0NrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWW1GamEwOTFkQ0E5SUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bktHSmhZMnRKYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWW1GamEwbHVUM1YwSUQwZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY29ZbUZqYTBsdUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVGdWRHbGphWEJoZEdWRllYTnBibWNnUFNBb2NHOTNaWElwSUQwK0lIdGNiaUFnWTI5dWMzUWdZbUZqYTBWaGMybHVaeUE5SUdOeVpXRjBaVUpoWTJ0SmJpaHdiM2RsY2lrN1hHNGdJSEpsZEhWeWJpQW9jQ2tnUFQ0Z0tDaHdJQ285SURJcElEd2dNU2tnUHlBd0xqVWdLaUJpWVdOclJXRnphVzVuS0hBcElEb2dNQzQxSUNvZ0tESWdMU0JOWVhSb0xuQnZkeWd5TENBdE1UQWdLaUFvY0NBdElERXBLU2s3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1lXNTBhV05wY0dGMFpTQTlJR055WldGMFpVRnVkR2xqYVhCaGRHVkZZWE5wYm1jb1JFVkdRVlZNVkY5UFZrVlNVMGhQVDFSZlUxUlNSVTVIVkVncE8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL2luYy90cmFuc2Zvcm1lcnMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgY2xhbXBQcm9ncmVzcyA9ICgwLCBfdHJhbnNmb3JtZXJzLmNsYW1wKSgwLCAxKTtcblxuZnVuY3Rpb24gY2FsY1ZhbHVlQXRUaW1lKGZyb20sIHRvLCBkdXJhdGlvbiwgZWxhcHNlZCwgZWFzZSkge1xuICB2YXIgcHJvZ3Jlc3NBdFRpbWUgPSBlYXNlKGNsYW1wUHJvZ3Jlc3MoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSgwLCBkdXJhdGlvbiwgZWxhcHNlZCkpKTtcbiAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZnJvbSwgdG8sIHByb2dyZXNzQXRUaW1lKTtcbn1cblxudmFyIFR3ZWVuQmxlbmQgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVHdlZW5CbGVuZCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVHdlZW5CbGVuZCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdlZW5CbGVuZCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFR3ZWVuQmxlbmQucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBmcm9tID0gX3Byb3BzLmZyb20sXG4gICAgICAgIHRvID0gX3Byb3BzLnRvLFxuICAgICAgICBkdXJhdGlvbiA9IF9wcm9wcy5kdXJhdGlvbixcbiAgICAgICAgYWNjdXJhY3kgPSBfcHJvcHMuYWNjdXJhY3k7XG5cbiAgICB2YXIgYSA9IGZyb207XG4gICAgdmFyIGIgPSB0bztcbiAgICB2YXIgYUR1cmF0aW9uID0gYS5nZXREdXJhdGlvbigpO1xuICAgIHZhciBiRHVyYXRpb24gPSBiLmdldER1cmF0aW9uKCk7XG5cbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb24gfHwgTWF0aC5taW4oYUR1cmF0aW9uIC0gYS5nZXRFbGFwc2VkKCksIGJEdXJhdGlvbik7XG5cbiAgICB2YXIgYUVhc2UgPSBhLmdldFByb3AoJ2Vhc2UnKTtcbiAgICB2YXIgYkVhc2UgPSBiLmdldFByb3AoJ2Vhc2UnKTtcbiAgICB2YXIgYUZyb20gPSBhLmdldFByb3AoJ2Zyb20nKTtcbiAgICB2YXIgYkZyb20gPSBiLmdldFByb3AoJ2Zyb20nKTtcbiAgICB2YXIgYVRvID0gYS5nZXRQcm9wKCd0bycpO1xuICAgIHZhciBiVG8gPSBiLmdldFByb3AoJ3RvJyk7XG4gICAgdmFyIGJWYWx1ZUF0QmxlbmRDb21wbGV0ZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIHRoaXMuZHVyYXRpb24sIGJFYXNlKTtcbiAgICB2YXIgYlN0YXJ0c0hpZ2hlclRoYW5BID0gYkZyb20gPiBhLmdldCgpO1xuXG4gICAgdGhpcy5ibGVuZFBvaW50cyA9IFtbMCwgYS5nZXQoKV0sIFt0aGlzLmR1cmF0aW9uLCBiVmFsdWVBdEJsZW5kQ29tcGxldGVdXTtcblxuICAgIC8vIEZpbmQgdHdlZW4gaW50ZXJzZWN0aW9uXG4gICAgdmFyIHRpbWVzdGVwID0gdGhpcy5kdXJhdGlvbiAvIGFjY3VyYWN5O1xuXG4gICAgdmFyIGZvdW5kUDEgPSBmYWxzZTtcbiAgICB2YXIgZm91bmRQMiA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY2N1cmFjeTsgaSsrKSB7XG4gICAgICB2YXIgdG90YWxUaW1lID0gaSAqIHRpbWVzdGVwO1xuXG4gICAgICB2YXIgYVZhbHVlQXRUaW1lID0gY2FsY1ZhbHVlQXRUaW1lKGFGcm9tLCBhVG8sIGFEdXJhdGlvbiwgYS5lbGFwc2VkICsgdG90YWxUaW1lLCBhRWFzZSk7XG4gICAgICB2YXIgYlZhbHVlQXRUaW1lID0gY2FsY1ZhbHVlQXRUaW1lKGJGcm9tLCBiVG8sIGJEdXJhdGlvbiwgYi5lbGFwc2VkICsgdG90YWxUaW1lLCBiRWFzZSk7XG5cbiAgICAgIHZhciBoYXNJbnRlcnNlY3RlZCA9IGJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPCBiVmFsdWVBdFRpbWUgfHwgIWJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPiBiVmFsdWVBdFRpbWU7XG5cbiAgICAgIGlmICghZm91bmRQMSAmJiBoYXNJbnRlcnNlY3RlZCkge1xuICAgICAgICB0aGlzLmJsZW5kUG9pbnRzLnNwbGljZSgwLCAxLCBbdG90YWxUaW1lLCBiVmFsdWVBdFRpbWVdKTtcbiAgICAgICAgZm91bmRQMSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE8gZ28gYmFjayB0aHJvdWdoIGFuZCBjb21tZW50XG4gICAgICB2YXIgaGFzSW50ZXJzZWN0ZWRCID0gYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA8IGJWYWx1ZUF0VGltZSB8fCAhYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA+IGJWYWx1ZUF0VGltZTtcblxuICAgICAgaWYgKGZvdW5kUDEgJiYgaGFzSW50ZXJzZWN0ZWRCKSB7XG4gICAgICAgIHRoaXMuYmxlbmRQb2ludHNbMl0gPSBbdG90YWxUaW1lLCBiVmFsdWVBdFRpbWVdO1xuICAgICAgICBmb3VuZFAyID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvdW5kUDIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRvLnN0YXJ0KCk7XG4gIH07XG5cbiAgVHdlZW5CbGVuZC5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGZyb20gPSBfcHJvcHMyLmZyb20sXG4gICAgICAgIHRvID0gX3Byb3BzMi50bztcblxuICAgIHZhciBhID0gZnJvbTtcbiAgICB2YXIgYiA9IHRvO1xuXG4gICAgdmFyIHByb2dyZXNzID0gY2xhbXBQcm9ncmVzcygoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHRoaXMuYmxlbmRQb2ludHNbMF1bMF0sIHRoaXMuYmxlbmRQb2ludHNbMl1bMF0sIGEuZ2V0RWxhcHNlZCgpKSk7XG4gICAgaWYgKHByb2dyZXNzID49IDEpIHtcbiAgICAgIHJldHVybiBiLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYVAgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKHRoaXMuYmxlbmRQb2ludHNbMF1bMV0sIHRoaXMuYmxlbmRQb2ludHNbMV1bMV0sIHByb2dyZXNzKTtcbiAgICAgIHZhciBiUCA9ICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykodGhpcy5ibGVuZFBvaW50c1sxXVsxXSwgdGhpcy5ibGVuZFBvaW50c1syXVsxXSwgcHJvZ3Jlc3MpO1xuICAgICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoYVAsIGJQLCBwcm9ncmVzcyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBUd2VlbkJsZW5kO1xufShfMi5kZWZhdWx0KTtcblxuVHdlZW5CbGVuZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjY3VyYWN5OiA2MFxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgVHdlZW5CbGVuZChwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMkpzWlc1a0xYUjNaV1Z1Y3k1cWN5SmRMQ0p1WVcxbGN5STZXeUpqYkdGdGNGQnliMmR5WlhOeklpd2lZMkZzWTFaaGJIVmxRWFJVYVcxbElpd2labkp2YlNJc0luUnZJaXdpWkhWeVlYUnBiMjRpTENKbGJHRndjMlZrSWl3aVpXRnpaU0lzSW5CeWIyZHlaWE56UVhSVWFXMWxJaXdpVkhkbFpXNUNiR1Z1WkNJc0ltOXVVM1JoY25RaUxDSndjbTl3Y3lJc0ltRmpZM1Z5WVdONUlpd2lZU0lzSW1JaUxDSmhSSFZ5WVhScGIyNGlMQ0puWlhSRWRYSmhkR2x2YmlJc0ltSkVkWEpoZEdsdmJpSXNJazFoZEdnaUxDSnRhVzRpTENKblpYUkZiR0Z3YzJWa0lpd2lZVVZoYzJVaUxDSm5aWFJRY205d0lpd2lZa1ZoYzJVaUxDSmhSbkp2YlNJc0ltSkdjbTl0SWl3aVlWUnZJaXdpWWxSdklpd2lZbFpoYkhWbFFYUkNiR1Z1WkVOdmJYQnNaWFJsSWl3aVlsTjBZWEowYzBocFoyaGxjbFJvWVc1Qklpd2laMlYwSWl3aVlteGxibVJRYjJsdWRITWlMQ0owYVcxbGMzUmxjQ0lzSW1admRXNWtVREVpTENKbWIzVnVaRkF5SWl3aWFTSXNJblJ2ZEdGc1ZHbHRaU0lzSW1GV1lXeDFaVUYwVkdsdFpTSXNJbUpXWVd4MVpVRjBWR2x0WlNJc0ltaGhjMGx1ZEdWeWMyVmpkR1ZrSWl3aWMzQnNhV05sSWl3aWFHRnpTVzUwWlhKelpXTjBaV1JDSWl3aWMzUmhjblFpTENKdmJsVndaR0YwWlNJc0luQnliMmR5WlhOeklpd2lZVkFpTENKaVVDSXNJbVJsWm1GMWJIUlFjbTl3Y3lKZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPMEZCUTBFN096czdPenM3T3pzN1FVRkZRU3hKUVVGTlFTeG5Ra0ZCWjBJc2VVSkJRVTBzUTBGQlRpeEZRVUZUTEVOQlFWUXNRMEZCZEVJN08wRkJSVUVzVTBGQlUwTXNaVUZCVkN4RFFVRjVRa01zU1VGQmVrSXNSVUZCSzBKRExFVkJRUzlDTEVWQlFXMURReXhSUVVGdVF5eEZRVUUyUTBNc1QwRkJOME1zUlVGQmMwUkRMRWxCUVhSRUxFVkJRVFJFTzBGQlF6RkVMRTFCUVUxRExHbENRVUZwUWtRc1MwRkJTMDRzWTBGQll5eG5RMEZCY1VJc1EwRkJja0lzUlVGQmQwSkpMRkZCUVhoQ0xFVkJRV3REUXl4UFFVRnNReXhEUVVGa0xFTkJRVXdzUTBGQmRrSTdRVUZEUVN4VFFVRlBMR2REUVVGeFFrZ3NTVUZCY2tJc1JVRkJNa0pETEVWQlFUTkNMRVZCUVN0Q1NTeGpRVUV2UWl4RFFVRlFPMEZCUTBRN08wbEJSVXRETEZVN096czdPenM3T3p0MVFrRkxTa01zVHl4elFrRkJWVHRCUVVGQkxHbENRVU5wUXl4TFFVRkxReXhMUVVSMFF6dEJRVUZCTEZGQlEwRlNMRWxCUkVFc1ZVRkRRVUVzU1VGRVFUdEJRVUZCTEZGQlEwMURMRVZCUkU0c1ZVRkRUVUVzUlVGRVRqdEJRVUZCTEZGQlExVkRMRkZCUkZZc1ZVRkRWVUVzVVVGRVZqdEJRVUZCTEZGQlEyOUNUeXhSUVVSd1FpeFZRVU52UWtFc1VVRkVjRUk3TzBGQlJWSXNVVUZCVFVNc1NVRkJTVllzU1VGQlZqdEJRVU5CTEZGQlFVMVhMRWxCUVVsV0xFVkJRVlk3UVVGRFFTeFJRVUZOVnl4WlFVRlpSaXhGUVVGRlJ5eFhRVUZHTEVWQlFXeENPMEZCUTBFc1VVRkJUVU1zV1VGQldVZ3NSVUZCUlVVc1YwRkJSaXhGUVVGc1FqczdRVUZGUVN4VFFVRkxXQ3hSUVVGTUxFZEJRV2RDUVN4WlFVRlpZU3hMUVVGTFF5eEhRVUZNTEVOQlF6RkNTaXhaUVVGWlJpeEZRVUZGVHl4VlFVRkdMRVZCUkdNc1JVRkZNVUpJTEZOQlJqQkNMRU5CUVRWQ096dEJRVXRCTEZGQlFVMUpMRkZCUVZGU0xFVkJRVVZUTEU5QlFVWXNRMEZCVlN4TlFVRldMRU5CUVdRN1FVRkRRU3hSUVVGTlF5eFJRVUZSVkN4RlFVRkZVU3hQUVVGR0xFTkJRVlVzVFVGQlZpeERRVUZrTzBGQlEwRXNVVUZCVFVVc1VVRkJVVmdzUlVGQlJWTXNUMEZCUml4RFFVRlZMRTFCUVZZc1EwRkJaRHRCUVVOQkxGRkJRVTFITEZGQlFWRllMRVZCUVVWUkxFOUJRVVlzUTBGQlZTeE5RVUZXTEVOQlFXUTdRVUZEUVN4UlFVRk5TU3hOUVVGTllpeEZRVUZGVXl4UFFVRkdMRU5CUVZVc1NVRkJWaXhEUVVGYU8wRkJRMEVzVVVGQlRVc3NUVUZCVFdJc1JVRkJSVkVzVDBGQlJpeERRVUZWTEVsQlFWWXNRMEZCV2p0QlFVTkJMRkZCUVUxTkxIZENRVUYzUWpGQ0xHZENRVUZuUW5WQ0xFdEJRV2hDTEVWQlFYVkNSU3hIUVVGMlFpeEZRVUUwUWxZc1UwRkJOVUlzUlVGQmRVTXNTMEZCUzFvc1VVRkJOVU1zUlVGQmMwUnJRaXhMUVVGMFJDeERRVUU1UWp0QlFVTkJMRkZCUVUxTkxIRkNRVUZ4UWtvc1VVRkJVVm9zUlVGQlJXbENMRWRCUVVZc1JVRkJia003TzBGQlJVRXNVMEZCUzBNc1YwRkJUQ3hIUVVGdFFpeERRVU5xUWl4RFFVRkRMRU5CUVVRc1JVRkJTV3hDTEVWQlFVVnBRaXhIUVVGR0xFVkJRVW9zUTBGRWFVSXNSVUZGYWtJc1EwRkJReXhMUVVGTGVrSXNVVUZCVGl4RlFVRm5RblZDTEhGQ1FVRm9RaXhEUVVacFFpeERRVUZ1UWpzN1FVRkxRVHRCUVVOQkxGRkJRVTFKTEZkQlFWY3NTMEZCU3pOQ0xGRkJRVXdzUjBGQlowSlBMRkZCUVdwRE96dEJRVVZCTEZGQlFVbHhRaXhWUVVGVkxFdEJRV1E3UVVGRFFTeFJRVUZKUXl4VlFVRlZMRXRCUVdRN08wRkJSVUVzVTBGQlN5eEpRVUZKUXl4SlFVRkpMRU5CUVdJc1JVRkJaMEpCTEVsQlFVbDJRaXhSUVVGd1FpeEZRVUU0UW5WQ0xFZEJRVGxDTEVWQlFXMURPMEZCUTJwRExGVkJRVTFETEZsQlFWbEVMRWxCUVVsSUxGRkJRWFJDT3p0QlFVVkJMRlZCUVUxTExHVkJRV1Z1UXl4blFrRkJaMEp6UWl4TFFVRm9RaXhGUVVGMVFrVXNSMEZCZGtJc1JVRkJORUpZTEZOQlFUVkNMRVZCUVhWRFJpeEZRVUZGVUN4UFFVRkdMRWRCUVZrNFFpeFRRVUZ1UkN4RlFVRTRSR1lzUzBGQk9VUXNRMEZCY2tJN1FVRkRRU3hWUVVGTmFVSXNaVUZCWlhCRExHZENRVUZuUW5WQ0xFdEJRV2hDTEVWQlFYVkNSU3hIUVVGMlFpeEZRVUUwUWxZc1UwRkJOVUlzUlVGQmRVTklMRVZCUVVWU0xFOUJRVVlzUjBGQldUaENMRk5CUVc1RUxFVkJRVGhFWWl4TFFVRTVSQ3hEUVVGeVFqczdRVUZGUVN4VlFVRk5aMElzYVVKQlEwaFdMSE5DUVVGelFsRXNaVUZCWlVNc1dVRkJkRU1zU1VGRFF5eERRVUZEVkN4clFrRkJSQ3hKUVVGMVFsRXNaVUZCWlVNc1dVRkdla003TzBGQlMwRXNWVUZCU1N4RFFVRkRUQ3hQUVVGRUxFbEJRVmxOTEdOQlFXaENMRVZCUVdkRE8wRkJRemxDTEdGQlFVdFNMRmRCUVV3c1EwRkJhVUpUTEUxQlFXcENMRU5CUVhkQ0xFTkJRWGhDTEVWQlFUSkNMRU5CUVROQ0xFVkJRVGhDTEVOQlFVTktMRk5CUVVRc1JVRkJXVVVzV1VGQldpeERRVUU1UWp0QlFVTkJUQ3hyUWtGQlZTeEpRVUZXTzBGQlEwUTdPMEZCUlVRN1FVRkRRU3hWUVVGTlVTeHJRa0ZEU0Zvc2MwSkJRWE5DVVN4bFFVRmxReXhaUVVGMFF5eEpRVU5ETEVOQlFVTlVMR3RDUVVGRUxFbEJRWFZDVVN4bFFVRmxReXhaUVVaNlF6czdRVUZMUVN4VlFVRkpUQ3hYUVVGWFVTeGxRVUZtTEVWQlFXZERPMEZCUXpsQ0xHRkJRVXRXTEZkQlFVd3NRMEZCYVVJc1EwRkJha0lzU1VGQmMwSXNRMEZCUTBzc1UwRkJSQ3hGUVVGWlJTeFpRVUZhTEVOQlFYUkNPMEZCUTBGS0xHdENRVUZWTEVsQlFWWTdRVUZEUkRzN1FVRkZSQ3hWUVVGSlFTeFBRVUZLTEVWQlFXRTdRVUZEV0R0QlFVTkVPMEZCUTBZN08wRkJSVVE1UWl4UFFVRkhjME1zUzBGQlNEdEJRVU5FTEVjN08zVkNRVVZFUXl4UkxIVkNRVUZYTzBGQlFVRXNhMEpCUTFrc1MwRkJTMmhETEV0QlJHcENPMEZCUVVFc1VVRkRSRklzU1VGRVF5eFhRVU5FUVN4SlFVUkRPMEZCUVVFc1VVRkRTME1zUlVGRVRDeFhRVU5MUVN4RlFVUk1PenRCUVVWVUxGRkJRVTFUTEVsQlFVbFdMRWxCUVZZN1FVRkRRU3hSUVVGTlZ5eEpRVUZKVml4RlFVRldPenRCUVVWQkxGRkJRVTEzUXl4WFFVRlhNME1zWTBGQll5eG5RMEZCY1VJc1MwRkJTemhDTEZkQlFVd3NRMEZCYVVJc1EwRkJha0lzUlVGQmIwSXNRMEZCY0VJc1EwRkJja0lzUlVGQk5rTXNTMEZCUzBFc1YwRkJUQ3hEUVVGcFFpeERRVUZxUWl4RlFVRnZRaXhEUVVGd1FpeERRVUUzUXl4RlFVRnhSV3hDTEVWQlFVVlBMRlZCUVVZc1JVRkJja1VzUTBGQlpDeERRVUZxUWp0QlFVTkJMRkZCUVVsM1FpeFpRVUZaTEVOQlFXaENMRVZCUVcxQ08wRkJRMnBDTEdGQlFVODVRaXhGUVVGRlowSXNSMEZCUml4RlFVRlFPMEZCUTBRc1MwRkdSQ3hOUVVWUE8wRkJRMHdzVlVGQlRXVXNTMEZCU3l4blEwRkJjVUlzUzBGQlMyUXNWMEZCVEN4RFFVRnBRaXhEUVVGcVFpeEZRVUZ2UWl4RFFVRndRaXhEUVVGeVFpeEZRVUUyUXl4TFFVRkxRU3hYUVVGTUxFTkJRV2xDTEVOQlFXcENMRVZCUVc5Q0xFTkJRWEJDTEVOQlFUZERMRVZCUVhGRllTeFJRVUZ5UlN4RFFVRllPMEZCUTBFc1ZVRkJUVVVzUzBGQlN5eG5RMEZCY1VJc1MwRkJTMllzVjBGQlRDeERRVUZwUWl4RFFVRnFRaXhGUVVGdlFpeERRVUZ3UWl4RFFVRnlRaXhGUVVFMlF5eExRVUZMUVN4WFFVRk1MRU5CUVdsQ0xFTkJRV3BDTEVWQlFXOUNMRU5CUVhCQ0xFTkJRVGRETEVWQlFYRkZZU3hSUVVGeVJTeERRVUZZTzBGQlEwRXNZVUZCVHl4blEwRkJjVUpETEVWQlFYSkNMRVZCUVhsQ1F5eEZRVUY2UWl4RlFVRTJRa1lzVVVGQk4wSXNRMEZCVUR0QlFVTkVPMEZCUTBZc1J6czdPenM3UVVGeVJrZHVReXhWTEVOQlEwZHpReXhaTEVkQlFXVTdRVUZEY0VKdVF5eFpRVUZWTzBGQlJGVXNRenM3YTBKQmRVWlVMRlZCUVVORUxFdEJRVVE3UVVGQlFTeFRRVUZYTEVsQlFVbEdMRlZCUVVvc1EwRkJaVVVzUzBGQlppeERRVUZZTzBGQlFVRXNReUlzSW1acGJHVWlPaUppYkdWdVpDMTBkMlZsYm5NdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYm1sdGNHOXlkQ0I3SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbExDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeUI5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JtbHRjRzl5ZENCN0lHTnNZVzF3SUgwZ1puSnZiU0FuTGk0dmFXNWpMM1J5WVc1elptOXliV1Z5Y3ljN1hHNWNibU52Ym5OMElHTnNZVzF3VUhKdlozSmxjM01nUFNCamJHRnRjQ2d3TENBeEtUdGNibHh1Wm5WdVkzUnBiMjRnWTJGc1kxWmhiSFZsUVhSVWFXMWxLR1p5YjIwc0lIUnZMQ0JrZFhKaGRHbHZiaXdnWld4aGNITmxaQ3dnWldGelpTa2dlMXh1SUNCamIyNXpkQ0J3Y205bmNtVnpjMEYwVkdsdFpTQTlJR1ZoYzJVb1kyeGhiWEJRY205bmNtVnpjeWhuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNnd0xDQmtkWEpoZEdsdmJpd2daV3hoY0hObFpDa3BLVHRjYmlBZ2NtVjBkWEp1SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektHWnliMjBzSUhSdkxDQndjbTluY21WemMwRjBWR2x0WlNrN1hHNTlYRzVjYm1Oc1lYTnpJRlIzWldWdVFteGxibVFnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCemRHRjBhV01nWkdWbVlYVnNkRkJ5YjNCeklEMGdlMXh1SUNBZ0lHRmpZM1Z5WVdONU9pQTJNRnh1SUNCOU8xeHVYRzRnSUc5dVUzUmhjblFvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJtY205dExDQjBieXdnWkhWeVlYUnBiMjRzSUdGalkzVnlZV041SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHTnZibk4wSUdFZ1BTQm1jbTl0TzF4dUlDQWdJR052Ym5OMElHSWdQU0IwYnp0Y2JpQWdJQ0JqYjI1emRDQmhSSFZ5WVhScGIyNGdQU0JoTG1kbGRFUjFjbUYwYVc5dUtDazdYRzRnSUNBZ1kyOXVjM1FnWWtSMWNtRjBhVzl1SUQwZ1lpNW5aWFJFZFhKaGRHbHZiaWdwTzF4dVhHNGdJQ0FnZEdocGN5NWtkWEpoZEdsdmJpQTlJR1IxY21GMGFXOXVJSHg4SUUxaGRHZ3ViV2x1S0Z4dUlDQWdJQ0FnWVVSMWNtRjBhVzl1SUMwZ1lTNW5aWFJGYkdGd2MyVmtLQ2tzWEc0Z0lDQWdJQ0JpUkhWeVlYUnBiMjVjYmlBZ0lDQXBPMXh1WEc0Z0lDQWdZMjl1YzNRZ1lVVmhjMlVnUFNCaExtZGxkRkJ5YjNBb0oyVmhjMlVuS1R0Y2JpQWdJQ0JqYjI1emRDQmlSV0Z6WlNBOUlHSXVaMlYwVUhKdmNDZ25aV0Z6WlNjcE8xeHVJQ0FnSUdOdmJuTjBJR0ZHY205dElEMGdZUzVuWlhSUWNtOXdLQ2RtY205dEp5azdYRzRnSUNBZ1kyOXVjM1FnWWtaeWIyMGdQU0JpTG1kbGRGQnliM0FvSjJaeWIyMG5LVHRjYmlBZ0lDQmpiMjV6ZENCaFZHOGdQU0JoTG1kbGRGQnliM0FvSjNSdkp5azdYRzRnSUNBZ1kyOXVjM1FnWWxSdklEMGdZaTVuWlhSUWNtOXdLQ2QwYnljcE8xeHVJQ0FnSUdOdmJuTjBJR0pXWVd4MVpVRjBRbXhsYm1SRGIyMXdiR1YwWlNBOUlHTmhiR05XWVd4MVpVRjBWR2x0WlNoaVJuSnZiU3dnWWxSdkxDQmlSSFZ5WVhScGIyNHNJSFJvYVhNdVpIVnlZWFJwYjI0c0lHSkZZWE5sS1R0Y2JpQWdJQ0JqYjI1emRDQmlVM1JoY25SelNHbG5hR1Z5VkdoaGJrRWdQU0JpUm5KdmJTQStJR0V1WjJWMEtDazdYRzVjYmlBZ0lDQjBhR2x6TG1Kc1pXNWtVRzlwYm5SeklEMGdXMXh1SUNBZ0lDQWdXekFzSUdFdVoyVjBLQ2xkTEZ4dUlDQWdJQ0FnVzNSb2FYTXVaSFZ5WVhScGIyNHNJR0pXWVd4MVpVRjBRbXhsYm1SRGIyMXdiR1YwWlYxY2JpQWdJQ0JkTzF4dVhHNGdJQ0FnTHk4Z1JtbHVaQ0IwZDJWbGJpQnBiblJsY25ObFkzUnBiMjVjYmlBZ0lDQmpiMjV6ZENCMGFXMWxjM1JsY0NBOUlIUm9hWE11WkhWeVlYUnBiMjRnTHlCaFkyTjFjbUZqZVR0Y2JseHVJQ0FnSUd4bGRDQm1iM1Z1WkZBeElEMGdabUZzYzJVN1hHNGdJQ0FnYkdWMElHWnZkVzVrVURJZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1lXTmpkWEpoWTNrN0lHa3JLeWtnZTF4dUlDQWdJQ0FnWTI5dWMzUWdkRzkwWVd4VWFXMWxJRDBnYVNBcUlIUnBiV1Z6ZEdWd08xeHVYRzRnSUNBZ0lDQmpiMjV6ZENCaFZtRnNkV1ZCZEZScGJXVWdQU0JqWVd4alZtRnNkV1ZCZEZScGJXVW9ZVVp5YjIwc0lHRlVieXdnWVVSMWNtRjBhVzl1TENCaExtVnNZWEJ6WldRZ0t5QjBiM1JoYkZScGJXVXNJR0ZGWVhObEtUdGNiaUFnSUNBZ0lHTnZibk4wSUdKV1lXeDFaVUYwVkdsdFpTQTlJR05oYkdOV1lXeDFaVUYwVkdsdFpTaGlSbkp2YlN3Z1lsUnZMQ0JpUkhWeVlYUnBiMjRzSUdJdVpXeGhjSE5sWkNBcklIUnZkR0ZzVkdsdFpTd2dZa1ZoYzJVcE8xeHVYRzRnSUNBZ0lDQmpiMjV6ZENCb1lYTkpiblJsY25ObFkzUmxaQ0E5SUNoY2JpQWdJQ0FnSUNBZ0tHSlRkR0Z5ZEhOSWFXZG9aWEpVYUdGdVFTQW1KaUJoVm1Gc2RXVkJkRlJwYldVZ1BDQmlWbUZzZFdWQmRGUnBiV1VwSUh4OFhHNGdJQ0FnSUNBZ0lDZ2hZbE4wWVhKMGMwaHBaMmhsY2xSb1lXNUJJQ1ltSUdGV1lXeDFaVUYwVkdsdFpTQStJR0pXWVd4MVpVRjBWR2x0WlNsY2JpQWdJQ0FnSUNrN1hHNWNiaUFnSUNBZ0lHbG1JQ2doWm05MWJtUlFNU0FtSmlCb1lYTkpiblJsY25ObFkzUmxaQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbUpzWlc1a1VHOXBiblJ6TG5Od2JHbGpaU2d3TENBeExDQmJkRzkwWVd4VWFXMWxMQ0JpVm1Gc2RXVkJkRlJwYldWZEtUdGNiaUFnSUNBZ0lDQWdabTkxYm1SUU1TQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRlJQUkU4Z1oyOGdZbUZqYXlCMGFISnZkV2RvSUdGdVpDQmpiMjF0Wlc1MFhHNGdJQ0FnSUNCamIyNXpkQ0JvWVhOSmJuUmxjbk5sWTNSbFpFSWdQU0FvWEc0Z0lDQWdJQ0FnSUNoaVUzUmhjblJ6U0dsbmFHVnlWR2hoYmtFZ0ppWWdZVlpoYkhWbFFYUlVhVzFsSUR3Z1lsWmhiSFZsUVhSVWFXMWxLU0I4ZkZ4dUlDQWdJQ0FnSUNBb0lXSlRkR0Z5ZEhOSWFXZG9aWEpVYUdGdVFTQW1KaUJoVm1Gc2RXVkJkRlJwYldVZ1BpQmlWbUZzZFdWQmRGUnBiV1VwWEc0Z0lDQWdJQ0FwTzF4dVhHNGdJQ0FnSUNCcFppQW9abTkxYm1SUU1TQW1KaUJvWVhOSmJuUmxjbk5sWTNSbFpFSXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWliR1Z1WkZCdmFXNTBjMXN5WFNBOUlGdDBiM1JoYkZScGJXVXNJR0pXWVd4MVpVRjBWR2x0WlYwN1hHNGdJQ0FnSUNBZ0lHWnZkVzVrVURJZ1BTQjBjblZsTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCcFppQW9abTkxYm1SUU1pa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RHOHVjM1JoY25Rb0tUdGNiaUFnZlZ4dVhHNGdJRzl1VlhCa1lYUmxLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dabkp2YlN3Z2RHOGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnWTI5dWMzUWdZU0E5SUdaeWIyMDdYRzRnSUNBZ1kyOXVjM1FnWWlBOUlIUnZPMXh1WEc0Z0lDQWdZMjl1YzNRZ2NISnZaM0psYzNNZ1BTQmpiR0Z0Y0ZCeWIyZHlaWE56S0dkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtIUm9hWE11WW14bGJtUlFiMmx1ZEhOYk1GMWJNRjBzSUhSb2FYTXVZbXhsYm1SUWIybHVkSE5iTWwxYk1GMHNJR0V1WjJWMFJXeGhjSE5sWkNncEtTazdYRzRnSUNBZ2FXWWdLSEJ5YjJkeVpYTnpJRDQ5SURFcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCaUxtZGxkQ2dwTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCaFVDQTlJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56S0hSb2FYTXVZbXhsYm1SUWIybHVkSE5iTUYxYk1WMHNJSFJvYVhNdVlteGxibVJRYjJsdWRITmJNVjFiTVYwc0lIQnliMmR5WlhOektUdGNiaUFnSUNBZ0lHTnZibk4wSUdKUUlEMGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vZEdocGN5NWliR1Z1WkZCdmFXNTBjMXN4WFZzeFhTd2dkR2hwY3k1aWJHVnVaRkJ2YVc1MGMxc3lYVnN4WFN3Z2NISnZaM0psYzNNcE8xeHVJQ0FnSUNBZ2NtVjBkWEp1SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektHRlFMQ0JpVUN3Z2NISnZaM0psYzNNcE8xeHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2NISnZjSE1wSUQwK0lHNWxkeUJVZDJWbGJrSnNaVzVrS0hCeWIzQnpLVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvYmxlbmQtdHdlZW5zLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jaGFpbiA9IHJlcXVpcmUoJy4vY2hhaW4nKTtcblxudmFyIF9jaGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGFpbik7XG5cbnZhciBfcGFyYWxsZWwgPSByZXF1aXJlKCcuL3BhcmFsbGVsJyk7XG5cbnZhciBfcGFyYWxsZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyYWxsZWwpO1xuXG52YXIgX2RlbGF5ID0gcmVxdWlyZSgnLi9kZWxheScpO1xuXG52YXIgX2RlbGF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlbGF5KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcGFyYWxsZWwgQWN0aW9uIGNvbXBvc2VkIG9mIGNoYWluZWRcbiAqIGRlbGF5IGFuZCBhY3Rpb25zLiBJbnRlcnZhbCBjYW4gYmUgZWl0aGVyIGEgbnVtYmVyXG4gKiB0byBtdWx0aXBseSBieSBgaWAgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgYGlgXG4gKiBAcGFyYW0gIHthcnJheX0gYWN0aW9uc1xuICogQHBhcmFtICB7ZnVuY3Rpb24gfCBudW1iZXJ9IGludGVydmFsXG4gKiBAcmV0dXJuIHtBY3Rpb259XG4gKi9cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhY3Rpb25zLCBpbnRlcnZhbCkge1xuICB2YXIgaW50ZXJ2YWxJc0Z1bmN0aW9uID0gKDAsIF91dGlscy5pc0Z1bmMpKGludGVydmFsKTtcblxuICByZXR1cm4gKDAsIF9wYXJhbGxlbDIuZGVmYXVsdCkoYWN0aW9ucy5tYXAoZnVuY3Rpb24gKGFjdGlvbiwgaSkge1xuICAgIHZhciB0aW1lVG9EZWxheSA9IGludGVydmFsSXNGdW5jdGlvbiA/IGludGVydmFsKGkpIDogaSAqIGludGVydmFsO1xuICAgIHJldHVybiAoMCwgX2NoYWluMi5kZWZhdWx0KShbKDAsIF9kZWxheTIuZGVmYXVsdCkodGltZVRvRGVsYXkpLCBhY3Rpb25dKTtcbiAgfSkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNOMFlXZG5aWEl1YW5NaVhTd2libUZ0WlhNaU9sc2lZV04wYVc5dWN5SXNJbWx1ZEdWeWRtRnNJaXdpYVc1MFpYSjJZV3hKYzBaMWJtTjBhVzl1SWl3aWJXRndJaXdpWVdOMGFXOXVJaXdpYVNJc0luUnBiV1ZVYjBSbGJHRjVJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkZRVHM3T3pzN096czdhMEpCVVdVc1ZVRkJRMEVzVDBGQlJDeEZRVUZWUXl4UlFVRldMRVZCUVhWQ08wRkJRM0JETEUxQlFVMURMSEZDUVVGeFFpeHRRa0ZCVDBRc1VVRkJVQ3hEUVVFelFqczdRVUZGUVN4VFFVRlBMSGRDUVVGVFJDeFJRVUZSUnl4SFFVRlNMRU5CUVZrc1ZVRkJRME1zVFVGQlJDeEZRVUZUUXl4RFFVRlVMRVZCUVdVN1FVRkRla01zVVVGQlRVTXNZMEZCWlVvc2EwSkJRVVFzUjBGQmRVSkVMRk5CUVZOSkxFTkJRVlFzUTBGQmRrSXNSMEZCY1VOQkxFbEJRVWxLTEZGQlFUZEVPMEZCUTBFc1YwRkJUeXh4UWtGQlRTeERRVU5ZTEhGQ1FVRk5TeXhYUVVGT0xFTkJSRmNzUlVGRldFWXNUVUZHVnl4RFFVRk9MRU5CUVZBN1FVRkpSQ3hIUVU1bExFTkJRVlFzUTBGQlVEdEJRVTlFTEVNaUxDSm1hV3hsSWpvaWMzUmhaMmRsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JqYUdGcGJpQm1jbTl0SUNjdUwyTm9ZV2x1Snp0Y2JtbHRjRzl5ZENCd1lYSmhiR3hsYkNCbWNtOXRJQ2N1TDNCaGNtRnNiR1ZzSnp0Y2JtbHRjRzl5ZENCa1pXeGhlU0JtY205dElDY3VMMlJsYkdGNUp6dGNibWx0Y0c5eWRDQjdJR2x6Um5WdVl5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JpOHFLbHh1SUNvZ1EzSmxZWFJsY3lCaElHNWxkeUJ3WVhKaGJHeGxiQ0JCWTNScGIyNGdZMjl0Y0c5elpXUWdiMllnWTJoaGFXNWxaRnh1SUNvZ1pHVnNZWGtnWVc1a0lHRmpkR2x2Ym5NdUlFbHVkR1Z5ZG1Gc0lHTmhiaUJpWlNCbGFYUm9aWElnWVNCdWRXMWlaWEpjYmlBcUlIUnZJRzExYkhScGNHeDVJR0o1SUdCcFlDQnZjaUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdkMmxzYkNCaVpTQndjbTkyYVdSbFpDQmdhV0JjYmlBcUlFQndZWEpoYlNBZ2UyRnljbUY1ZlNCaFkzUnBiMjV6WEc0Z0tpQkFjR0Z5WVcwZ0lIdG1kVzVqZEdsdmJpQjhJRzUxYldKbGNuMGdhVzUwWlhKMllXeGNiaUFxSUVCeVpYUjFjbTRnZTBGamRHbHZibjFjYmlBcUwxeHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHRmpkR2x2Ym5Nc0lHbHVkR1Z5ZG1Gc0tTQTlQaUI3WEc0Z0lHTnZibk4wSUdsdWRHVnlkbUZzU1hOR2RXNWpkR2x2YmlBOUlHbHpSblZ1WXlocGJuUmxjblpoYkNrN1hHNWNiaUFnY21WMGRYSnVJSEJoY21Gc2JHVnNLR0ZqZEdsdmJuTXViV0Z3S0NoaFkzUnBiMjRzSUdrcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCMGFXMWxWRzlFWld4aGVTQTlJQ2hwYm5SbGNuWmhiRWx6Um5WdVkzUnBiMjRwSUQ4Z2FXNTBaWEoyWVd3b2FTa2dPaUJwSUNvZ2FXNTBaWEoyWVd3N1hHNGdJQ0FnY21WMGRYSnVJR05vWVdsdUtGdGNiaUFnSUNBZ0lHUmxiR0Y1S0hScGJXVlViMFJsYkdGNUtTeGNiaUFnSUNBZ0lHRmpkR2x2Ymx4dUlDQWdJRjBwTzF4dUlDQjlLU2s3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3N0YWdnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9