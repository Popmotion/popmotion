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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7SUFBWSxTOzs7O0FBQ1osT0FBTyxTQUFQLEdBQW1CLFNBQW5CIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBvcG1vdGlvbiBmcm9tICcuL3BvcG1vdGlvbic7XG53aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuIl19

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.svgPath = exports.svg = exports.css = exports.Renderer = exports.value = exports.stagger = exports.tween = exports.pointer = exports.physics = exports.parallel = exports.offset = exports.delay = exports.crossFade = exports.composite = exports.colorTween = exports.chain = exports.blendTweens = exports.Action = exports.valueTypes = exports.transform = exports.easing = exports.calc = exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;
	
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
	
	var _offset2 = __webpack_require__(12);
	
	var _offset3 = _interopRequireDefault(_offset2);
	
	var _parallel2 = __webpack_require__(13);
	
	var _parallel3 = _interopRequireDefault(_parallel2);
	
	var _physics2 = __webpack_require__(14);
	
	var _physics3 = _interopRequireDefault(_physics2);
	
	var _pointer2 = __webpack_require__(15);
	
	var _pointer3 = _interopRequireDefault(_pointer2);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzQkFFRSxZOzs7Ozs7c0JBQ0EsYTs7Ozs7O3NCQUNBLGE7Ozs7OztzQkFDQSxVOzs7Ozs7c0JBQ0Esa0I7Ozs7OztzQkFDQSxtQjs7Ozs7O3NCQUNBLG1COzs7Ozs7c0JBQ0EsZ0I7Ozs7OztzQkFDQSxrQjs7Ozs7O3NCQUNBLHFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFHVSxJO1FBQ0EsTTtRQUNBLFM7UUFDQSxVOzs7O1FBR0wsTTtRQUNBLFc7UUFDQSxLO1FBQ0EsVTtRQUNBLFM7UUFDQSxTO1FBQ0EsSztRQUNBLE07UUFDQSxRO1FBQ0EsTztRQUNBLE87UUFDQSxLO1FBQ0EsTztRQUNBLEs7Ozs7UUFHQSxRO1FBQ0EsRztRQUNBLEc7UUFDQSxPIiwiZmlsZSI6InBvcG1vdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZyYW1lc3luYyBzY2hlZHVsZXJzXG5leHBvcnQge1xuICBvbkZyYW1lU3RhcnQsXG4gIG9uRnJhbWVVcGRhdGUsXG4gIG9uRnJhbWVSZW5kZXIsXG4gIG9uRnJhbWVFbmQsXG4gIGNhbmNlbE9uRnJhbWVTdGFydCxcbiAgY2FuY2VsT25GcmFtZVVwZGF0ZSxcbiAgY2FuY2VsT25GcmFtZVJlbmRlcixcbiAgY2FuY2VsT25GcmFtZUVuZCxcbiAgdGltZVNpbmNlTGFzdEZyYW1lLFxuICBjdXJyZW50RnJhbWVUaW1lc3RhbXBcbn0gZnJvbSAnLi9mcmFtZXN5bmMnO1xuXG5leHBvcnQgKiBhcyBjYWxjIGZyb20gJy4vaW5jL2NhbGMnO1xuZXhwb3J0ICogYXMgZWFzaW5nIGZyb20gJy4vaW5jL2Vhc2luZyc7XG5leHBvcnQgKiBhcyB0cmFuc2Zvcm0gZnJvbSAnLi9pbmMvdHJhbnNmb3JtZXJzJztcbmV4cG9ydCAqIGFzIHZhbHVlVHlwZXMgZnJvbSAnLi9pbmMvdmFsdWUtdHlwZXMnO1xuXG4vLyBBY3Rpb25zXG5leHBvcnQgQWN0aW9uIGZyb20gJy4vYWN0aW9ucyc7XG5leHBvcnQgYmxlbmRUd2VlbnMgZnJvbSAnLi9hY3Rpb25zL2JsZW5kLXR3ZWVucyc7XG5leHBvcnQgY2hhaW4gZnJvbSAnLi9hY3Rpb25zL2NoYWluJztcbmV4cG9ydCBjb2xvclR3ZWVuIGZyb20gJy4vYWN0aW9ucy9jb2xvci10d2Vlbic7XG5leHBvcnQgY29tcG9zaXRlIGZyb20gJy4vYWN0aW9ucy9jb21wb3NpdGUnO1xuZXhwb3J0IGNyb3NzRmFkZSBmcm9tICcuL2FjdGlvbnMvY3Jvc3MtZmFkZSc7XG5leHBvcnQgZGVsYXkgZnJvbSAnLi9hY3Rpb25zL2RlbGF5JztcbmV4cG9ydCBvZmZzZXQgZnJvbSAnLi9hY3Rpb25zL29mZnNldCc7XG5leHBvcnQgcGFyYWxsZWwgZnJvbSAnLi9hY3Rpb25zL3BhcmFsbGVsJztcbmV4cG9ydCBwaHlzaWNzIGZyb20gJy4vYWN0aW9ucy9waHlzaWNzJztcbmV4cG9ydCBwb2ludGVyIGZyb20gJy4vYWN0aW9ucy9wb2ludGVyJztcbmV4cG9ydCB0d2VlbiBmcm9tICcuL2FjdGlvbnMvdHdlZW4nO1xuZXhwb3J0IHN0YWdnZXIgZnJvbSAnLi9hY3Rpb25zL3N0YWdnZXInO1xuZXhwb3J0IHZhbHVlIGZyb20gJy4vYWN0aW9ucy92YWx1ZSc7XG5cbi8vIFJlbmRlcmVyc1xuZXhwb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXJzJztcbmV4cG9ydCBjc3MgZnJvbSAnLi9yZW5kZXJlcnMvY3NzJztcbmV4cG9ydCBzdmcgZnJvbSAnLi9yZW5kZXJlcnMvc3ZnJztcbmV4cG9ydCBzdmdQYXRoIGZyb20gJy4vcmVuZGVyZXJzL3N2Zy1wYXRoJztcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,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Ozs7Ozs7OztBQVVBLElBQU0sMEJBQVMsVUFBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixRQUFyQjtBQUFBLE1BQStCLFNBQS9CLHlEQUEyQyxDQUEzQztBQUFBLFNBQWlELFVBQVUsV0FBWSxZQUFZLFdBQVcsUUFBdkIsSUFBbUMsS0FBSyxHQUFMLENBQVMsU0FBVCxFQUFvQixRQUFwQixDQUF6RCxDQUFqRDtBQUFBLENBQWY7Ozs7Ozs7O0FBUUEsSUFBTSx3Q0FBZ0IsVUFBQyxHQUFELEVBQU0sYUFBTjtBQUFBLFNBQXlCLGtCQUFNLEdBQU4sQ0FBRCxHQUFlLE9BQU8sT0FBTyxhQUFkLENBQWYsR0FBOEMsQ0FBdEU7QUFBQSxDQUF0Qjs7Ozs7Ozs7QUFRQSxJQUFNLDBDQUFpQixVQUFDLFFBQUQsRUFBVyxhQUFYO0FBQUEsU0FBNkIsWUFBWSxPQUFPLGFBQW5CLENBQTdCO0FBQUEsQ0FBdkI7Ozs7Ozs7OztBQVNBLElBQU0sc0NBQWUsVUFBQyxLQUFELEVBQVEsUUFBUixFQUFxQjtBQUMvQyxNQUFNLFVBQVUsS0FBSyxRQUFRLENBQWIsQ0FBaEI7QUFDQSxNQUFNLFNBQVMsSUFBSyxJQUFJLEtBQXhCO0FBQ0EsTUFBTSxtQkFBbUIsS0FBSyxHQUFMLENBQVMsV0FBVyxNQUFwQixFQUE0QixDQUE1QixDQUF6Qjs7QUFFQSxTQUFPLEtBQUssS0FBTCxDQUFXLG1CQUFtQixPQUE5QixJQUF5QyxPQUFoRDtBQUNELENBTk0iLCJmaWxlIjoiY2FsYy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG5jb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gIHByZWNpc2lvbiA9IDEwICoqIHByZWNpc2lvbjtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG5cbmNvbnN0IFpFUk9fUE9JTlQgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHo6IDBcbn07XG5cbmNvbnN0IGRpc3RhbmNlMUQgPSAoYSwgYikgPT4gTWF0aC5hYnMoYSAtIGIpO1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICBcbiAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gIGFyZSBhdCAwLDBcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBhbmdsZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBkZWdyZWVzVG9SYWRpYW5zID0gKGRlZ3JlZXMpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuXG4vKlxuICBEaWxhdGVcbiAgXG4gIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICBcbiAgYSAtLS0tLS0tLS0gYlxuICBcbiAgdG9cbiAgXG4gIGEgLS0tLSBiXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbmV4cG9ydCBjb25zdCBkaWxhdGUgPSAoYSwgYiwgZGlsYXRpb24pID0+IGEgKyAoKGIgLSBhKSAqIGRpbGF0aW9uKTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IGRpc3RhbmNlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiB7XG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKGlzTnVtKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICBjb25zdCB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICBjb25zdCB6RGVsdGEgPSAoaXNOdW0oYS56KSkgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KCh4RGVsdGEgKiogMikgKyAoeURlbHRhICoqIDIpICsgKHpEZWx0YSAqKiAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbmV4cG9ydCBjb25zdCBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IChmcm9tLCB0bywgdmFsdWUpID0+ICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG5cbi8qXG4gIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IChmcm9tLCB0bywgcHJvZ3Jlc3MpID0+ICgtIHByb2dyZXNzICogZnJvbSkgKyAocHJvZ3Jlc3MgKiB0bykgKyBmcm9tO1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG5leHBvcnQgY29uc3QgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkgPT4ge1xuICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gIHJldHVybiB7XG4gICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gIH07XG59O1xuXG4vKlxuICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG5leHBvcnQgY29uc3QgcmFkaWFuc1RvRGVncmVlcyA9IChyYWRpYW5zKSA9PiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbmV4cG9ydCBjb25zdCBzbW9vdGggPSAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nID0gMCkgPT4gdG9EZWNpbWFsKG9sZFZhbHVlICsgKGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpKTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlckZyYW1lID0gKHhwcywgZnJhbWVEdXJhdGlvbikgPT4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHN0ZXBQcm9ncmVzcyA9IChzdGVwcywgcHJvZ3Jlc3MpID0+IHtcbiAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgY29uc3QgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpO1xuICBjb25zdCBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sNkJBQTZCLEtBQW5DOztBQUVPLElBQU0sc0RBQXVCLFVBQUMsTUFBRDtBQUFBLFNBQVksVUFBQyxDQUFEO0FBQUEsV0FBTyxJQUFJLE9BQU8sSUFBSSxDQUFYLENBQVg7QUFBQSxHQUFaO0FBQUEsQ0FBN0I7QUFDQSxJQUFNLHNEQUF1QixVQUFDLE1BQUQ7QUFBQSxTQUFZLFVBQUMsQ0FBRDtBQUFBLFdBQVEsS0FBSyxHQUFOLEdBQWEsT0FBTyxJQUFJLENBQVgsSUFBZ0IsQ0FBN0IsR0FBaUMsQ0FBQyxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQVQsQ0FBUCxDQUFMLElBQTRCLENBQXBFO0FBQUEsR0FBWjtBQUFBLENBQTdCOztBQUVBLElBQU0sMEJBQVMsVUFBQyxDQUFEO0FBQUEsU0FBTyxDQUFQO0FBQUEsQ0FBZjs7QUFFQSxJQUFNLHNDQUFlLFVBQUMsS0FBRDtBQUFBLFNBQVcsVUFBQyxDQUFEO0FBQUEsb0JBQU8sQ0FBUCxFQUFZLEtBQVo7QUFBQSxHQUFYO0FBQUEsQ0FBckI7QUFDQSxJQUFNLDBCQUFTLGFBQWEsQ0FBYixDQUFmO0FBQ0EsSUFBTSw0QkFBVSxxQkFBcUIsTUFBckIsQ0FBaEI7QUFDQSxJQUFNLGdDQUFZLHFCQUFxQixNQUFyQixDQUFsQjs7QUFFQSxJQUFNLDBCQUFTLFVBQUMsQ0FBRDtBQUFBLFNBQU8sSUFBSSxLQUFLLEdBQUwsQ0FBUyxLQUFLLElBQUwsQ0FBVSxDQUFWLENBQVQsQ0FBWDtBQUFBLENBQWY7QUFDQSxJQUFNLDRCQUFVLHFCQUFxQixNQUFyQixDQUFoQjtBQUNBLElBQU0sZ0NBQVkscUJBQXFCLE9BQXJCLENBQWxCOztBQUVBLElBQU0sc0NBQWUsVUFBQyxLQUFEO0FBQUEsU0FBVyxVQUFDLENBQUQ7QUFBQSxXQUFRLElBQUksQ0FBTCxJQUFXLENBQUMsUUFBUSxDQUFULElBQWMsQ0FBZCxHQUFrQixLQUE3QixDQUFQO0FBQUEsR0FBWDtBQUFBLENBQXJCO0FBQ0EsSUFBTSwwQkFBUyxhQUFhLDBCQUFiLENBQWY7QUFDQSxJQUFNLDRCQUFVLHFCQUFxQixNQUFyQixDQUFoQjtBQUNBLElBQU0sZ0NBQVkscUJBQXFCLE1BQXJCLENBQWxCOztBQUVBLElBQU0sMERBQXlCLFVBQUMsS0FBRCxFQUFXO0FBQy9DLE1BQU0sYUFBYSxhQUFhLEtBQWIsQ0FBbkI7QUFDQSxTQUFPLFVBQUMsQ0FBRDtBQUFBLFdBQVEsQ0FBQyxLQUFLLENBQU4sSUFBVyxDQUFaLEdBQWlCLE1BQU0sV0FBVyxDQUFYLENBQXZCLEdBQXVDLE9BQU8sSUFBSSxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELElBQU8sSUFBSSxDQUFYLENBQVosQ0FBWCxDQUE5QztBQUFBLEdBQVA7QUFDRCxDQUhNOztBQUtBLElBQU0sa0NBQWEsdUJBQXVCLDBCQUF2QixDQUFuQiIsImZpbGUiOiJlYXNpbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCA9IDEuNTI1O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSAoZWFzaW5nKSA9PiAocCkgPT4gMSAtIGVhc2luZygxIC0gcCk7XG5leHBvcnQgY29uc3QgY3JlYXRlTWlycm9yZWRFYXNpbmcgPSAoZWFzaW5nKSA9PiAocCkgPT4gKHAgPD0gMC41KSA/IGVhc2luZygyICogcCkgLyAyIDogKDIgLSBlYXNpbmcoMiAqICgxIC0gcCkpKSAvIDI7XG5cbmV4cG9ydCBjb25zdCBsaW5lYXIgPSAocCkgPT4gcDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUV4cG9JbiA9IChwb3dlcikgPT4gKHApID0+IHAgKiogcG93ZXI7XG5leHBvcnQgY29uc3QgZWFzZUluID0gY3JlYXRlRXhwb0luKDIpO1xuZXhwb3J0IGNvbnN0IGVhc2VPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNlSW4pO1xuZXhwb3J0IGNvbnN0IGVhc2VJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGVhc2VJbik7XG5cbmV4cG9ydCBjb25zdCBjaXJjSW4gPSAocCkgPT4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwKSk7XG5leHBvcnQgY29uc3QgY2lyY091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGNpcmNJbik7XG5leHBvcnQgY29uc3QgY2lyY0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoY2lyY091dCk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCYWNrSW4gPSAocG93ZXIpID0+IChwKSA9PiAocCAqIHApICogKChwb3dlciArIDEpICogcCAtIHBvd2VyKTtcbmV4cG9ydCBjb25zdCBiYWNrSW4gPSBjcmVhdGVCYWNrSW4oREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xuZXhwb3J0IGNvbnN0IGJhY2tPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhiYWNrSW4pO1xuZXhwb3J0IGNvbnN0IGJhY2tJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGJhY2tJbik7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gKHBvd2VyKSA9PiB7XG4gIGNvbnN0IGJhY2tFYXNpbmcgPSBjcmVhdGVCYWNrSW4ocG93ZXIpO1xuICByZXR1cm4gKHApID0+ICgocCAqPSAyKSA8IDEpID8gMC41ICogYmFja0Vhc2luZyhwKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHAgLSAxKSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFudGljaXBhdGUgPSBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcbiJdfQ==

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.blendColor = exports.alpha = exports.color = exports.hsla = exports.rgba = exports.rgbUnit = exports.px = exports.degrees = exports.percent = exports.transformChildValues = exports.steps = exports.wrap = exports.nonlinearSpring = exports.spring = exports.generateNonIntergratedSpring = exports.offset = exports.interpolate = exports.flow = exports.conditional = exports.clamp = exports.clampMin = exports.clampMax = exports.appendUnit = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _calc = __webpack_require__(2);
	
	var _utils = __webpack_require__(25);
	
	var _parsers = __webpack_require__(26);
	
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
	  var ifFalse = arguments.length <= 2 || arguments[2] === undefined ? noop : arguments[2];
	  return function (v) {
	    return condition(v) ? ifTrue(v) : ifFalse(v);
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
	
	var offset = exports.offset = function (origin) {
	  return function (v) {
	    return v - origin;
	  };
	};
	
	var generateNonIntergratedSpring = exports.generateNonIntergratedSpring = function () {
	  var alterDisplacement = arguments.length <= 0 || arguments[0] === undefined ? noop : arguments[0];
	  return function (constant, origin) {
	    return function (v) {
	      var displacement = Math.abs(origin - v);
	      var springModifier = -constant * (0 - alterDisplacement(displacement));
	      return displacement - springModifier;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNLE9BQU8sVUFBQyxDQUFEO0FBQUEsU0FBTyxDQUFQO0FBQUEsQ0FBYjs7Ozs7Ozs7O0FBU08sSUFBTSxrQ0FBYSxVQUFDLElBQUQ7QUFBQSxTQUFVLFVBQUMsQ0FBRDtBQUFBLGdCQUFVLENBQVYsR0FBYyxJQUFkO0FBQUEsR0FBVjtBQUFBLENBQW5COzs7Ozs7Ozs7QUFTQSxJQUFNLDhCQUFXLFVBQUMsR0FBRDtBQUFBLFNBQVMsVUFBQyxDQUFEO0FBQUEsV0FBTyxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksR0FBWixDQUFQO0FBQUEsR0FBVDtBQUFBLENBQWpCO0FBQ0EsSUFBTSw4QkFBVyxVQUFDLEdBQUQ7QUFBQSxTQUFTLFVBQUMsQ0FBRDtBQUFBLFdBQU8sS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLEdBQVosQ0FBUDtBQUFBLEdBQVQ7QUFBQSxDQUFqQjtBQUNBLElBQU0sd0JBQVEsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFjO0FBQ2pDLE1BQU0sT0FBTyxTQUFTLEdBQVQsQ0FBYjtBQUNBLE1BQU0sT0FBTyxTQUFTLEdBQVQsQ0FBYjtBQUNBLFNBQU8sVUFBQyxDQUFEO0FBQUEsV0FBTyxLQUFLLEtBQUssQ0FBTCxDQUFMLENBQVA7QUFBQSxHQUFQO0FBQ0QsQ0FKTTs7QUFNQSxJQUFNLG9DQUFjLFVBQUMsU0FBRCxFQUFZLE1BQVo7QUFBQSxNQUFvQixPQUFwQix5REFBOEIsSUFBOUI7QUFBQSxTQUF1QyxVQUFDLENBQUQsRUFBTztBQUN2RSxXQUFPLFVBQVUsQ0FBVixJQUFlLE9BQU8sQ0FBUCxDQUFmLEdBQTJCLFFBQVEsQ0FBUixDQUFsQztBQUNELEdBRjBCO0FBQUEsQ0FBcEI7Ozs7Ozs7OztBQVdBLElBQU0sc0JBQU8sWUFBcUI7QUFBQSxvQ0FBakIsWUFBaUI7QUFBakIsZ0JBQWlCO0FB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LFFBQVEsR0FBN0IsRUFBa0MsQ0FBbEMsQ0FBZDtBQUNBLFlBQVEsS0FBUixHQUFnQixNQUFNLFVBQVUsS0FBaEIsRUFBdUIsUUFBUSxLQUEvQixFQUFzQyxDQUF0QyxDQUFoQjtBQUNBLFlBQVEsSUFBUixHQUFlLE1BQU0sVUFBVSxJQUFoQixFQUFzQixRQUFRLElBQTlCLEVBQW9DLENBQXBDLENBQWY7QUFDQSxZQUFRLEtBQVIsR0FBZ0IsZ0NBQXFCLFVBQVUsS0FBL0IsRUFBc0MsUUFBUSxLQUE5QyxFQUFxRCxDQUFyRCxDQUFoQjtBQUNBLFdBQU8sT0FBUDtBQUNELEdBVEQ7QUFVRCxDQWhCTSIsImZpbGUiOiJ0cmFuc2Zvcm1lcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MsIHN0ZXBQcm9ncmVzcyB9IGZyb20gJy4vY2FsYyc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgY29sb3IgYXMgcGFyc2VDb2xvciB9IGZyb20gJy4vcGFyc2Vycyc7XG5cbmNvbnN0IG5vb3AgPSAodikgPT4gdjtcblxuLyoqXG4gKiBBcHBlbmQgVW5pdFxuICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYXBwZW5kXG4gKiBhcHBlbmRVbml0KCdweCcsIDIwKSAtPiAnMjBweCdcbiAqIEBwYXJhbSAge3N0cmluZ30gdW5pdClcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGVuZFVuaXQgPSAodW5pdCkgPT4gKHYpID0+IGAke3Z9JHt1bml0fWA7XG5cbi8qKlxuICogQ2xhbXAgdmFsdWUgYmV0d2VlblxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXN0cmljdCBhIGdpdmVuIHZhbHVlIGJldHdlZW4gYG1pbmAgYW5kIGBtYXhgXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pblxuICogQHBhcmFtICB7bnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGNsYW1wTWF4ID0gKG1heCkgPT4gKHYpID0+IE1hdGgubWluKHYsIG1heCk7XG5leHBvcnQgY29uc3QgY2xhbXBNaW4gPSAobWluKSA9PiAodikgPT4gTWF0aC5tYXgodiwgbWluKTtcbmV4cG9ydCBjb25zdCBjbGFtcCA9IChtaW4sIG1heCkgPT4ge1xuICBjb25zdCBfbWluID0gY2xhbXBNaW4obWluKTtcbiAgY29uc3QgX21heCA9IGNsYW1wTWF4KG1heCk7XG4gIHJldHVybiAodikgPT4gX21pbihfbWF4KHYpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb25kaXRpb25hbCA9IChjb25kaXRpb24sIGlmVHJ1ZSwgaWZGYWxzZSA9IG5vb3ApID0+ICh2KSA9PiB7XG4gIHJldHVybiBjb25kaXRpb24odikgPyBpZlRydWUodikgOiBpZkZhbHNlKHYpO1xufTtcblxuLyoqXG4gKiBGbG93XG4gKiBDb21wb3NlIG90aGVyIHRyYW5zZm9ybWVycyB0byBydW4gbGluZWFyaWx5XG4gKiBmbG93KG1pbigyMCksIG1heCg0MCkpXG4gKiBAcGFyYW0gIHsuLi5mdW5jdGlvbnN9IHRyYW5zZm9ybWVyc1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCBmbG93ID0gKC4uLnRyYW5zZm9ybWVycykgPT4ge1xuICBjb25zdCBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAgcmV0dXJuIChhY2MsIC4uLmFyZ3MpID0+IHtcbiAgICBsZXQgdiA9IGFjYztcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0odiwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xuXG4vKipcbiAqIEludGVycG9sYXRlIGZyb20gc2V0IG9mIHZhbHVlcyB0byBhbm90aGVyXG4gKiBAcGFyYW0gIHtBcnJheX0gaW5wdXQgYXJyYXlcbiAqIEBwYXJhbSAge0FycmF5fSBvdXRwdXRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSByYW5nZUVhc2luZ1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCBpbnRlcnBvbGF0ZSA9IChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykgPT4ge1xuICBjb25zdCByYW5nZUxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgY29uc3QgZmluYWxJbmRleCA9IHJhbmdlTGVuZ3RoIC0gMTtcblxuICByZXR1cm4gKHYpID0+IHtcbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1pbmltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPD0gaW5wdXRbMF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbMF07XG4gICAgfVxuXG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtYXhpbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2ID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgIH1cblxuICAgIGxldCBpID0gMTtcblxuICAgIC8vIEZpbmQgaW5kZXggb2YgcmFuZ2Ugc3RhcnRcbiAgICBmb3IgKDsgaSA8IHJhbmdlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpbnB1dFtpXSA+IHYgfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzc0luUmFuZ2UgPSBnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbnB1dFtpIC0gMV0sIGlucHV0W2ldLCB2KTtcbiAgICBjb25zdCBlYXNlZFByb2dyZXNzID0gKHJhbmdlRWFzaW5nKSA/IHJhbmdlRWFzaW5nW2ldKHByb2dyZXNzSW5SYW5nZSkgOiBwcm9ncmVzc0luUmFuZ2U7XG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKG91dHB1dFtpIC0gMV0sIG91dHB1dFtpXSwgZWFzZWRQcm9ncmVzcyk7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgb2Zmc2V0ID0gKG9yaWdpbikgPT4gKHYpID0+IHYgLSBvcmlnaW47XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gKGFsdGVyRGlzcGxhY2VtZW50ID0gbm9vcCkgPT4gKGNvbnN0YW50LCBvcmlnaW4pID0+ICh2KSA9PiB7XG4gIGNvbnN0IGRpc3BsYWNlbWVudCA9IE1hdGguYWJzKG9yaWdpbiAtIHYpO1xuICBjb25zdCBzcHJpbmdNb2RpZmllciA9IC0gY29uc3RhbnQgKiAoMCAtIGFsdGVyRGlzcGxhY2VtZW50KGRpc3BsYWNlbWVudCkpO1xuICByZXR1cm4gZGlzcGxhY2VtZW50IC0gc3ByaW5nTW9kaWZpZXI7XG59O1xuXG5leHBvcnQgY29uc3Qgc3ByaW5nID0gZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZygpO1xuZXhwb3J0IGNvbnN0IG5vbmxpbmVhclNwcmluZyA9IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcoTWF0aC5zcXJ0KTtcblxuZXhwb3J0IGNvbnN0IHdyYXAgPSAobWluLCBtYXgpID0+ICh2KSA9PiB7XG4gIGNvbnN0IHJhbmdlU2l6ZSA9IG1heCAtIG1pbjtcbiAgcmV0dXJuICgodiAtIG1pbikgJSByYW5nZVNpemUgKyByYW5nZVNpemUpICUgcmFuZ2VTaXplICsgbWluO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0ZXBzID0gKHN0ZXBzLCBtaW4sIG1heCkgPT4gKHYpID0+IHtcbiAgY29uc3QgcHJvZ3Jlc3MgPSBnZXRQcm9ncmVzc0Zyb21WYWx1ZShtaW4sIG1heCwgdik7XG4gIHJldHVybiBzdGVwUHJvZ3Jlc3Moc3RlcHMsIHByb2dyZXNzKTtcbn07XG5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IChjaGlsZFRyYW5zZm9ybWVycykgPT4gKHYpID0+IHtcbiAgZm9yIChsZXQga2V5IGluIHYpIHtcbiAgICBjb25zdCBjaGlsZFRyYW5zZm9ybWVyID0gY2hpbGRUcmFuc2Zvcm1lcnNba2V5XTtcbiAgICBpZiAoY2hpbGRUcmFuc2Zvcm1lcikge1xuICAgICAgdltrZXldID0gY2hpbGRUcmFuc2Zvcm1lcih2W2tleV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2O1xufTtcblxuLy8gVW5pdCB0cmFuc2Zvcm1lcnNcbmV4cG9ydCBjb25zdCBwZXJjZW50ID0gYXBwZW5kVW5pdCgnJScpO1xuZXhwb3J0IGNvbnN0IGRlZ3JlZXMgPSBhcHBlbmRVbml0KCdkZWcnKTtcbmV4cG9ydCBjb25zdCBweCA9IGFwcGVuZFVuaXQoJ3B4Jyk7XG5cbmV4cG9ydCBjb25zdCByZ2JVbml0ID0gZmxvdyhcbiAgY2xhbXAoMCwgMjU1KSxcbiAgTWF0aC5yb3VuZFxuKTtcblxuY29uc3QgcmdiYVRlbXBsYXRlID0gKHsgcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEgPSAxIH0pID0+IFxuICBgcmdiYSgke3JlZH0sICR7Z3JlZW59LCAke2JsdWV9LCAke2FscGhhfSlgO1xuXG5leHBvcnQgY29uc3QgcmdiYSA9IGZsb3coXG4gIHRyYW5zZm9ybUNoaWxkVmFsdWVzKHtcbiAgICByZWQ6IHJnYlVuaXQsXG4gICAgZ3JlZW46IHJnYlVuaXQsXG4gICAgYmx1ZTogcmdiVW5pdCxcbiAgICBhbHBoYVxuICB9KSxcbiAgcmdiYVRlbXBsYXRlXG4pO1xuXG5jb25zdCBoc2xhVGVtcGxhdGUgPSAoeyBodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYWxwaGEgPSAxIH0pID0+IFxuICBgaHNsYSgke2h1ZX0sICR7c2F0dXJhdGlvbn0sICR7bGlnaHRuZXNzfSwgJHthbHBoYX0pYDtcblxuZXhwb3J0IGNvbnN0IGhzbGEgPSBmbG93KFxuICB0cmFuc2Zvcm1DaGlsZFZhbHVlcyh7XG4gICAgaHVlOiBwYXJzZUZsb2F0LFxuICAgIHNhdHVyYXRpb246IHBlcmNlbnQsXG4gICAgbGlnaHRuZXNzOiBwZXJjZW50LFxuICAgIGFscGhhXG4gIH0pLFxuICBoc2xhVGVtcGxhdGVcbik7XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9ICh2KSA9PiB7XG4gIGlmICh2Lmhhc093blByb3BlcnR5KCdyZWQnKSkge1xuICAgIHJldHVybiByZ2JhKHYpO1xuICB9IGVsc2UgaWYgKHYuaGFzT3duUHJvcGVydHkoJ2h1ZScpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cbiAgcmV0dXJuIHY7XG59O1xuXG5leHBvcnQgY29uc3QgYWxwaGEgPSBjbGFtcCgwLCAxKTtcblxuY29uc3QgYmxlbmQgPSAoZnJvbSwgdG8sIHYpID0+IHtcbiAgY29uc3QgZnJvbUV4cG8gPSBmcm9tICogZnJvbTtcbiAgY29uc3QgdG9FeHBvID0gdG8gKiB0bztcbiAgcmV0dXJuIE1hdGguc3FydCh2ICogKHRvRXhwbyAtIGZyb21FeHBvKSArIGZyb21FeHBvKTtcbn07XG4vLyBodHRwOi8vY29kZXBlbi5pby9vc3VibGFrZS9wZW4veEdWVmFOXG5leHBvcnQgY29uc3QgYmxlbmRDb2xvciA9IChmcm9tLCB0bykgPT4ge1xuICBjb25zdCBmcm9tQ29sb3IgPSBpc1N0cmluZyhmcm9tKSA/IHBhcnNlQ29sb3IoZnJvbSkgOiBmcm9tO1xuICBjb25zdCB0b0NvbG9yID0gaXNTdHJpbmcodG8pID8gcGFyc2VDb2xvcih0byk6IHRvO1xuXG4gIGNvbnN0IGJsZW5kZWQgPSB7IC4uLmZyb21Db2xvciB9O1xuXG4gIHJldHVybiAodikgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiBibGVuZGVkKSB7XG4gICAgICBibGVuZGVkW2tleV0gPSBibGVuZChmcm9tQ29sb3Jba2V5XSwgdG9Db2xvcltrZXldLCB2KTtcbiAgICB9XG4gICAgYmxlbmRlZC5yZWQgPSBibGVuZChmcm9tQ29sb3IucmVkLCB0b0NvbG9yLnJlZCwgdik7XG4gICAgYmxlbmRlZC5ncmVlbiA9IGJsZW5kKGZyb21Db2xvci5ncmVlbiwgdG9Db2xvci5ncmVlbiwgdik7XG4gICAgYmxlbmRlZC5ibHVlID0gYmxlbmQoZnJvbUNvbG9yLmJsdWUsIHRvQ29sb3IuYmx1ZSwgdik7XG4gICAgYmxlbmRlZC5hbHBoYSA9IGdldFZhbHVlRnJvbVByb2dyZXNzKGZyb21Db2xvci5hbHBoYSwgdG9Db2xvci5hbHBoYSwgdik7XG4gICAgcmV0dXJuIGJsZW5kZWQ7XG4gIH07XG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdmFsdWUtdHlwZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7QUFVQTs7QUFNQTs7QUFTTyxJQUFNLDBCQUFTO0FBQ3BCLG9CQURvQjtBQUVwQixTQUFPO0FBRmEsQ0FBZjs7O0FBTUEsSUFBTSxxQ0FDUixNQURRO0FBRVg7QUFGVyxFQUFOOztBQUtBLElBQU0sNEJBQVUsMkJBQWUsS0FBZix3QkFBaEI7QUFDQSxJQUFNLDRCQUFVLDJCQUFlLEdBQWYsd0JBQWhCO0FBQ0EsSUFBTSxrQkFBSywyQkFBZSxJQUFmLG1CQUFYOztBQUVBLElBQU0scUNBQ1IsTUFEUTtBQUVYLFdBQVM7QUFGRSxFQUFOOztBQUtBLElBQU0seUNBQ1IsTUFEUTtBQUVYO0FBRlcsRUFBTjs7QUFLQSxJQUFNLHNCQUFPO0FBQ2xCLG9CQURrQjtBQUVsQixzQkFGa0I7QUFHbEI7QUFIa0IsQ0FBYjs7QUFNQSxJQUFNLGlDQUNSLElBRFE7QUFFWCxvQkFGVztBQUdYO0FBSFcsRUFBTjs7QUFNQSxJQUFNLHNCQUFPO0FBQ2xCLG9CQURrQjtBQUVsQixzQkFGa0I7QUFHbEI7QUFIa0IsQ0FBYjs7QUFNQSxJQUFNLHdCQUFRO0FBQ25CLHVCQURtQjtBQUVuQixzQkFGbUI7QUFHbkI7QUFIbUIsQ0FBZCIsImZpbGUiOiJ2YWx1ZS10eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVmFsdWUgdHlwZXNcbiAqXG4gKiBhbHBoYVxuICogZGVncmVlc1xuICogaGV4XG4gKiBoc2xhXG4gKiBwZXJjZW50XG4gKiBweFxuICogcmdiVW5pdFxuICogcmdiXG4gKiBzY2FsZVxuICovXG5pbXBvcnQge1xuICByZ2JVbml0IGFzIHRyYW5zZm9ybVJHQlVuaXQsXG4gIHJnYmEgYXMgdHJhbnNmb3JtUmdiYSxcbiAgYWxwaGEgYXMgdHJhbnNmb3JtQWxwaGEsXG4gIGhzbGEgYXMgdHJhbnNmb3JtSHNsYSxcbiAgY29sb3IgYXMgdHJhbnNmb3JtQ29sb3IsXG4gIHB4IGFzIHRyYW5zZm9ybVB4LFxuICBwZXJjZW50IGFzIHRyYW5zZm9ybVBlcmNlbnQsXG4gIGRlZ3JlZXMgYXMgdHJhbnNmb3JtRGVncmVlc1xufSBmcm9tICcuL3RyYW5zZm9ybWVycyc7XG5pbXBvcnQge1xuICBoZXggYXMgcGFyc2VIZXgsXG4gIHJnYmEgYXMgcGFyc2VSZ2JhLFxuICBoc2xhIGFzIHBhcnNlSHNsYSxcbiAgY29sb3IgYXMgcGFyc2VDb2xvclxufSBmcm9tICcuL3BhcnNlcnMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlVW5pdFR5cGUsXG4gIGlzTnVtLFxuICBpc1JnYixcbiAgaXNIc2wsXG4gIGlzSGV4LFxuICBpc0NvbG9yXG59IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgbnVtYmVyID0ge1xuICB0ZXN0OiBpc051bSxcbiAgcGFyc2U6IHBhcnNlRmxvYXRcbn07XG5cbi8vIFZhbHVlIHR5cGVzXG5leHBvcnQgY29uc3QgYWxwaGEgPSB7XG4gIC4uLm51bWJlcixcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1BbHBoYVxufTtcblxuZXhwb3J0IGNvbnN0IGRlZ3JlZXMgPSBjcmVhdGVVbml0VHlwZSgnZGVnJywgdHJhbnNmb3JtRGVncmVlcyk7XG5leHBvcnQgY29uc3QgcGVyY2VudCA9IGNyZWF0ZVVuaXRUeXBlKCclJywgdHJhbnNmb3JtUGVyY2VudCk7XG5leHBvcnQgY29uc3QgcHggPSBjcmVhdGVVbml0VHlwZSgncHgnLCB0cmFuc2Zvcm1QeCk7XG5cbmV4cG9ydCBjb25zdCBzY2FsZSA9IHtcbiAgLi4ubnVtYmVyLFxuICBkZWZhdWx0OiAxXG59O1xuXG5leHBvcnQgY29uc3QgcmdiVW5pdCA9IHtcbiAgLi4ubnVtYmVyLFxuICB0cmFuc2Zvcm06IHRyYW5zZm9ybVJHQlVuaXRcbn07XG5cbmV4cG9ydCBjb25zdCByZ2JhID0ge1xuICB0ZXN0OiBpc1JnYixcbiAgcGFyc2U6IHBhcnNlUmdiYSxcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1SZ2JhXG59O1xuXG5leHBvcnQgY29uc3QgaGV4ID0ge1xuICAuLi5yZ2JhLFxuICB0ZXN0OiBpc0hleCxcbiAgcGFyc2U6IHBhcnNlSGV4XG59O1xuXG5leHBvcnQgY29uc3QgaHNsYSA9IHtcbiAgdGVzdDogaXNIc2wsXG4gIHBhcnNlOiBwYXJzZUhzbGEsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtSHNsYVxufTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yID0ge1xuICBwYXJzZTogcGFyc2VDb2xvcixcbiAgdGVzdDogaXNDb2xvcixcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1Db2xvclxufTtcbiJdfQ==

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(20);
	
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
	    var _props = this.props;
	    var from = _props.from;
	    var to = _props.to;
	    var duration = _props.duration;
	    var accuracy = _props.accuracy;
	
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
	    var _props2 = this.props;
	    var from = _props2.from;
	    var to = _props2.to;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLHlCQUFNLENBQU4sRUFBUyxDQUFULENBQXRCOztBQUVBLFNBQVMsZUFBVCxDQUF5QixJQUF6QixFQUErQixFQUEvQixFQUFtQyxRQUFuQyxFQUE2QyxPQUE3QyxFQUFzRCxJQUF0RCxFQUE0RDtBQUMxRCxNQUFNLGlCQUFpQixLQUFLLGNBQWMsZ0NBQXFCLENBQXJCLEVBQXdCLFFBQXhCLEVBQWtDLE9BQWxDLENBQWQsQ0FBTCxDQUF2QjtBQUNBLFNBQU8sZ0NBQXFCLElBQXJCLEVBQTJCLEVBQTNCLEVBQStCLGNBQS9CLENBQVA7QUFDRDs7SUFFSyxVOzs7Ozs7Ozs7dUJBS0osTyxzQkFBVTtBQUFBLGlCQUNpQyxLQUFLLEtBRHRDO0FBQUEsUUFDQSxJQURBLFVBQ0EsSUFEQTtBQUFBLFFBQ00sRUFETixVQUNNLEVBRE47QUFBQSxRQUNVLFFBRFYsVUFDVSxRQURWO0FBQUEsUUFDb0IsUUFEcEIsVUFDb0IsUUFEcEI7O0FBRVIsUUFBTSxJQUFJLElBQVY7QUFDQSxRQUFNLElBQUksRUFBVjtBQUNBLFFBQU0sWUFBWSxFQUFFLFdBQUYsRUFBbEI7QUFDQSxRQUFNLFlBQVksRUFBRSxXQUFGLEVBQWxCOztBQUVBLFNBQUssUUFBTCxHQUFnQixZQUFZLEtBQUssR0FBTCxDQUMxQixZQUFZLEVBQUUsVUFBRixFQURjLEVBRTFCLFNBRjBCLENBQTVCOztBQUtBLFFBQU0sUUFBUSxFQUFFLE9BQUYsQ0FBVSxNQUFWLENBQWQ7QUFDQSxRQUFNLFFBQVEsRUFBRSxPQUFGLENBQVUsTUFBVixDQUFkO0FBQ0EsUUFBTSxRQUFRLEVBQUUsT0FBRixDQUFVLE1BQVYsQ0FBZDtBQUNBLFFBQU0sUUFBUSxFQUFFLE9BQUYsQ0FBVSxNQUFWLENBQWQ7QUFDQSxRQUFNLE1BQU0sRUFBRSxPQUFGLENBQVUsSUFBVixDQUFaO0FBQ0EsUUFBTSxNQUFNLEVBQUUsT0FBRixDQUFVLElBQVYsQ0FBWjtBQUNBLFFBQU0sd0JBQXdCLGdCQUFnQixLQUFoQixFQUF1QixHQUF2QixFQUE0QixTQUE1QixFQUF1QyxLQUFLLFFBQTVDLEVBQXNELEtBQXRELENBQTlCO0FBQ0EsUUFBTSxxQkFBcUIsUUFBUSxFQUFFLEdBQUYsRUFBbkM7O0FBRUEsU0FBSyxXQUFMLEdBQW1CLENBQ2pCLENBQUMsQ0FBRCxFQUFJLEVBQUUsR0FBRixFQUFKLENBRGlCLEVBRWpCLENBQUMsS0FBSyxRQUFOLEVBQWdCLHFCQUFoQixDQUZpQixDQUFuQjs7O0FBTUEsUUFBTSxXQUFXLEtBQUssUUFBTCxHQUFnQixRQUFqQzs7QUFFQSxRQUFJLFVBQVUsS0FBZDtBQUNBLFFBQUksVUFBVSxLQUFkOztBQUVBLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxRQUFwQixFQUE4QixHQUE5QixFQUFtQztBQUNqQyxVQUFNLFlBQVksSUFBSSxRQUF0Qjs7QUFFQSxVQUFNLGVBQWUsZ0JBQWdCLEtBQWhCLEVBQXVCLEdBQXZCLEVBQTRCLFNBQTVCLEVBQXVDLEVBQUUsT0FBRixHQUFZLFNBQW5ELEVBQThELEtBQTlELENBQXJCO0FBQ0EsVUFBTSxlQUFlLGdCQUFnQixLQUFoQixFQUF1QixHQUF2QixFQUE0QixTQUE1QixFQUF1QyxFQUFFLE9BQUYsR0FBWSxTQUFuRCxFQUE4RCxLQUE5RCxDQUFyQjs7QUFFQSxVQUFNLGlCQUNILHNCQUFzQixlQUFlLFlBQXRDLElBQ0MsQ0FBQyxrQkFBRCxJQUF1QixlQUFlLFlBRnpDOztBQUtBLFVBQUksQ0FBQyxPQUFELElBQVksY0FBaEIsRUFBZ0M7QUFDOUIsYUFBSyxXQUFMLENBQWlCLE1BQWpCLENBQXdCLENBQXhCLEVBQTJCLENBQTNCLEVBQThCLENBQUMsU0FBRCxFQUFZLFlBQVosQ0FBOUI7QUFDQSxrQkFBVSxJQUFWO0FBQ0Q7OztBQUdELFVBQU0sa0JBQ0gsc0JBQXNCLGVBQWUsWUFBdEMsSUFDQyxDQUFDLGtCQUFELElBQXVCLGVBQWUsWUFGekM7O0FBS0EsVUFBSSxXQUFXLGVBQWYsRUFBZ0M7QUFDOUIsYUFBSyxXQUFMLENBQWlCLENBQWpCLElBQXNCLENBQUMsU0FBRCxFQUFZLFlBQVosQ0FBdEI7QUFDQSxrQkFBVSxJQUFWO0FBQ0Q7O0FBRUQsVUFBSSxPQUFKLEVBQWE7QUFDWDtBQUNEO0FBQ0Y7O0FBRUQsT0FBRyxLQUFIO0FBQ0QsRzs7dUJBRUQsTSxxQkFBUztBQUFBLGtCQUNjLEtBQUssS0FEbkI7QUFBQSxRQUNDLElBREQsV0FDQyxJQUREO0FBQUEsUUFDTyxFQURQLFdBQ08sRUFEUDs7QUFFUCxRQUFNLElBQUksSUFBVjtBQUNBLFFBQU0sSUFBSSxFQUFWOztBQUVBLFFBQU0sV0FBVyxjQUFjLGdDQUFxQixLQUFLLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBckIsRUFBNkMsS0FBSyxXQUFMLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQTdDLEVBQXFFLEVBQUUsVUFBRixFQUFyRSxDQUFkLENBQWpCO0FBQ0EsUUFBSSxZQUFZLENBQWhCLEVBQW1CO0FBQ2pCLGFBQU8sRUFBRSxHQUFGLEVBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFNLEtBQUssZ0NBQXFCLEtBQUssV0FBTCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUFyQixFQUE2QyxLQUFLLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBN0MsRUFBcUUsUUFBckUsQ0FBWDtBQUNBLFVBQU0sS0FBSyxnQ0FBcUIsS0FBSyxXQUFMLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQXJCLEVBQTZDLEtBQUssV0FBTCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUE3QyxFQUFxRSxRQUFyRSxDQUFYO0FBQ0EsYUFBTyxnQ0FBcUIsRUFBckIsRUFBeUIsRUFBekIsRUFBNkIsUUFBN0IsQ0FBUDtBQUNEO0FBQ0YsRzs7Ozs7QUFyRkcsVSxDQUNHLFksR0FBZTtBQUNwQixZQUFVO0FBRFUsQzs7a0JBdUZULFVBQUMsS0FBRDtBQUFBLFNBQVcsSUFBSSxVQUFKLENBQWUsS0FBZixDQUFYO0FBQUEsQyIsImZpbGUiOiJibGVuZC10d2VlbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGNsYW1wIH0gZnJvbSAnLi4vaW5jL3RyYW5zZm9ybWVycyc7XG5cbmNvbnN0IGNsYW1wUHJvZ3Jlc3MgPSBjbGFtcCgwLCAxKTtcblxuZnVuY3Rpb24gY2FsY1ZhbHVlQXRUaW1lKGZyb20sIHRvLCBkdXJhdGlvbiwgZWxhcHNlZCwgZWFzZSkge1xuICBjb25zdCBwcm9ncmVzc0F0VGltZSA9IGVhc2UoY2xhbXBQcm9ncmVzcyhnZXRQcm9ncmVzc0Zyb21WYWx1ZSgwLCBkdXJhdGlvbiwgZWxhcHNlZCkpKTtcbiAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGZyb20sIHRvLCBwcm9ncmVzc0F0VGltZSk7XG59XG5cbmNsYXNzIFR3ZWVuQmxlbmQgZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFjY3VyYWN5OiA2MFxuICB9O1xuXG4gIG9uU3RhcnQoKSB7XG4gICAgY29uc3QgeyBmcm9tLCB0bywgZHVyYXRpb24sIGFjY3VyYWN5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGEgPSBmcm9tO1xuICAgIGNvbnN0IGIgPSB0bztcbiAgICBjb25zdCBhRHVyYXRpb24gPSBhLmdldER1cmF0aW9uKCk7XG4gICAgY29uc3QgYkR1cmF0aW9uID0gYi5nZXREdXJhdGlvbigpO1xuXG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uIHx8IE1hdGgubWluKFxuICAgICAgYUR1cmF0aW9uIC0gYS5nZXRFbGFwc2VkKCksXG4gICAgICBiRHVyYXRpb25cbiAgICApO1xuXG4gICAgY29uc3QgYUVhc2UgPSBhLmdldFByb3AoJ2Vhc2UnKTtcbiAgICBjb25zdCBiRWFzZSA9IGIuZ2V0UHJvcCgnZWFzZScpO1xuICAgIGNvbnN0IGFGcm9tID0gYS5nZXRQcm9wKCdmcm9tJyk7XG4gICAgY29uc3QgYkZyb20gPSBiLmdldFByb3AoJ2Zyb20nKTtcbiAgICBjb25zdCBhVG8gPSBhLmdldFByb3AoJ3RvJyk7XG4gICAgY29uc3QgYlRvID0gYi5nZXRQcm9wKCd0bycpO1xuICAgIGNvbnN0IGJWYWx1ZUF0QmxlbmRDb21wbGV0ZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIHRoaXMuZHVyYXRpb24sIGJFYXNlKTtcbiAgICBjb25zdCBiU3RhcnRzSGlnaGVyVGhhbkEgPSBiRnJvbSA+IGEuZ2V0KCk7XG5cbiAgICB0aGlzLmJsZW5kUG9pbnRzID0gW1xuICAgICAgWzAsIGEuZ2V0KCldLFxuICAgICAgW3RoaXMuZHVyYXRpb24sIGJWYWx1ZUF0QmxlbmRDb21wbGV0ZV1cbiAgICBdO1xuXG4gICAgLy8gRmluZCB0d2VlbiBpbnRlcnNlY3Rpb25cbiAgICBjb25zdCB0aW1lc3RlcCA9IHRoaXMuZHVyYXRpb24gLyBhY2N1cmFjeTtcblxuICAgIGxldCBmb3VuZFAxID0gZmFsc2U7XG4gICAgbGV0IGZvdW5kUDIgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjdXJhY3k7IGkrKykge1xuICAgICAgY29uc3QgdG90YWxUaW1lID0gaSAqIHRpbWVzdGVwO1xuXG4gICAgICBjb25zdCBhVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYUZyb20sIGFUbywgYUR1cmF0aW9uLCBhLmVsYXBzZWQgKyB0b3RhbFRpbWUsIGFFYXNlKTtcbiAgICAgIGNvbnN0IGJWYWx1ZUF0VGltZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIGIuZWxhcHNlZCArIHRvdGFsVGltZSwgYkVhc2UpO1xuXG4gICAgICBjb25zdCBoYXNJbnRlcnNlY3RlZCA9IChcbiAgICAgICAgKGJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPCBiVmFsdWVBdFRpbWUpIHx8XG4gICAgICAgICghYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA+IGJWYWx1ZUF0VGltZSlcbiAgICAgICk7XG5cbiAgICAgIGlmICghZm91bmRQMSAmJiBoYXNJbnRlcnNlY3RlZCkge1xuICAgICAgICB0aGlzLmJsZW5kUG9pbnRzLnNwbGljZSgwLCAxLCBbdG90YWxUaW1lLCBiVmFsdWVBdFRpbWVdKTtcbiAgICAgICAgZm91bmRQMSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE8gZ28gYmFjayB0aHJvdWdoIGFuZCBjb21tZW50XG4gICAgICBjb25zdCBoYXNJbnRlcnNlY3RlZEIgPSAoXG4gICAgICAgIChiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lIDwgYlZhbHVlQXRUaW1lKSB8fFxuICAgICAgICAoIWJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPiBiVmFsdWVBdFRpbWUpXG4gICAgICApO1xuXG4gICAgICBpZiAoZm91bmRQMSAmJiBoYXNJbnRlcnNlY3RlZEIpIHtcbiAgICAgICAgdGhpcy5ibGVuZFBvaW50c1syXSA9IFt0b3RhbFRpbWUsIGJWYWx1ZUF0VGltZV07XG4gICAgICAgIGZvdW5kUDIgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm91bmRQMikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG8uc3RhcnQoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGZyb20sIHRvIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGEgPSBmcm9tO1xuICAgIGNvbnN0IGIgPSB0bztcblxuICAgIGNvbnN0IHByb2dyZXNzID0gY2xhbXBQcm9ncmVzcyhnZXRQcm9ncmVzc0Zyb21WYWx1ZSh0aGlzLmJsZW5kUG9pbnRzWzBdWzBdLCB0aGlzLmJsZW5kUG9pbnRzWzJdWzBdLCBhLmdldEVsYXBzZWQoKSkpO1xuICAgIGlmIChwcm9ncmVzcyA+PSAxKSB7XG4gICAgICByZXR1cm4gYi5nZXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYVAgPSBnZXRWYWx1ZUZyb21Qcm9ncmVzcyh0aGlzLmJsZW5kUG9pbnRzWzBdWzFdLCB0aGlzLmJsZW5kUG9pbnRzWzFdWzFdLCBwcm9ncmVzcyk7XG4gICAgICBjb25zdCBiUCA9IGdldFZhbHVlRnJvbVByb2dyZXNzKHRoaXMuYmxlbmRQb2ludHNbMV1bMV0sIHRoaXMuYmxlbmRQb2ludHNbMl1bMV0sIHByb2dyZXNzKTtcbiAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhhUCwgYlAsIHByb2dyZXNzKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgVHdlZW5CbGVuZChwcm9wcyk7XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NoYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRU0sSzs7O0FBQ0osaUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixtQkFBTSxLQUFOLENBRGlCOztBQUVqQixVQUFLLFFBQUwsR0FBZ0IsTUFBSyxRQUFMLENBQWMsSUFBZCxPQUFoQjtBQUZpQjtBQUdsQjs7a0JBRUQsTyxzQkFBVTtBQUNSLFNBQUssS0FBTCxDQUFXLENBQVgsR0FBZSxDQUFmO0FBQ0EsU0FBSyxXQUFMO0FBQ0QsRzs7a0JBRUQsUSx1QkFBVztBQUFBLGlCQUNZLEtBQUssS0FEakI7QUFBQSxRQUNELENBREMsVUFDRCxDQURDO0FBQUEsUUFDRSxLQURGLFVBQ0UsS0FERjs7QUFFVCxRQUFJLElBQUksTUFBTSxNQUFOLEdBQWUsQ0FBdkIsRUFBMEI7QUFDeEIsV0FBSyxLQUFMLENBQVcsQ0FBWDtBQUNBLFdBQUssV0FBTDtBQUNELEtBSEQsTUFHTztBQUNMLFdBQUssUUFBTDtBQUNEO0FBQ0YsRzs7a0JBRUQsVywwQkFBYztBQUFBLGtCQUNTLEtBQUssS0FEZDtBQUFBLFFBQ0osQ0FESSxXQUNKLENBREk7QUFBQSxRQUNELEtBREMsV0FDRCxLQURDOztBQUVaLFVBQU0sQ0FBTixFQUFTLEtBQVQsQ0FBZSxXQUFmLEdBQTZCLEtBQUssUUFBbEM7QUFDQSxVQUFNLENBQU4sRUFBUyxLQUFUO0FBQ0QsRzs7a0JBRUQsTSxxQkFBUztBQUFBLGtCQUNjLEtBQUssS0FEbkI7QUFBQSxRQUNDLENBREQsV0FDQyxDQUREO0FBQUEsUUFDSSxLQURKLFdBQ0ksS0FESjs7QUFFUCxVQUFNLENBQU4sRUFBUyxJQUFUO0FBQ0QsRzs7Ozs7a0JBR1ksVUFBQyxLQUFELEVBQVEsVUFBUjtBQUFBLFNBQXVCLElBQUksS0FBSixDQUFVLEVBQUUsWUFBRixFQUFTLHNCQUFULEVBQVYsQ0FBdkI7QUFBQSxDIiwiZmlsZSI6ImNoYWluLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5cbmNsYXNzIENoYWluIGV4dGVuZHMgQWN0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wbGF5TmV4dCA9IHRoaXMucGxheU5leHQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pID0gMDtcbiAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gIH1cblxuICBwbGF5TmV4dCgpIHtcbiAgICBjb25zdCB7IGksIG9yZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpIDwgb3JkZXIubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5wcm9wcy5pKys7XG4gICAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBwbGF5Q3VycmVudCgpIHtcbiAgICBjb25zdCB7IGksIG9yZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIG9yZGVyW2ldLnByb3BzLl9vbkNvbXBsZXRlID0gdGhpcy5wbGF5TmV4dDtcbiAgICBvcmRlcltpXS5zdGFydCgpO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIGNvbnN0IHsgaSwgb3JkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgb3JkZXJbaV0uc3RvcCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChvcmRlciwgb25Db21wbGV0ZSkgPT4gbmV3IENoYWluKHsgb3JkZXIsIG9uQ29tcGxldGUgfSk7XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbG9yLXR3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNLE9BQU8sWUFBTSxDQUFFLENBQXJCOztrQkFFZSxVQUFDLEtBQUQsRUFBVztBQUN4QixTQUFPLGtDQUNGLEtBREU7QUFFTCxVQUFNLENBRkQ7QUFHTCxRQUFJLENBSEM7QUFJTCxjQUFVLHdCQUNSLDhCQUFXLE1BQU0sSUFBakIsRUFBdUIsTUFBTSxFQUE3QixDQURRLEVBRVIsa0JBQU0sU0FGRSxFQUdSLE1BQU0sUUFBTixJQUFrQixJQUhWO0FBSkwsS0FBUDtBQVVELEMiLCJmaWxlIjoiY29sb3ItdHdlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHdlZW4gZnJvbSAnLi90d2Vlbic7XG5pbXBvcnQgeyBibGVuZENvbG9yLCBmbG93IH0gZnJvbSAnLi4vaW5jL3RyYW5zZm9ybWVycyc7XG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uL2luYy92YWx1ZS10eXBlcyc7XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIHJldHVybiB0d2Vlbih7XG4gICAgLi4ucHJvcHMsXG4gICAgZnJvbTogMCxcbiAgICB0bzogMSxcbiAgICBvblVwZGF0ZTogZmxvdyhcbiAgICAgIGJsZW5kQ29sb3IocHJvcHMuZnJvbSwgcHJvcHMudG8pLFxuICAgICAgY29sb3IudHJhbnNmb3JtLFxuICAgICAgcHJvcHMub25VcGRhdGUgfHwgbm9vcFxuICAgIClcbiAgfSk7XG59O1xuIl19

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(20);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFFTSxlOzs7QUFDSiwyQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsUUFDVCxPQURTLEdBQ3NCLEtBRHRCLENBQ1QsT0FEUzs7QUFBQSxRQUNHLGNBREgsNEJBQ3NCLEtBRHRCOztBQUFBLGlEQUVqQixtQkFBTSxjQUFOLENBRmlCOztBQUdqQixVQUFLLE9BQUwsR0FBZSxFQUFmO0FBQ0EsVUFBSyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsVUFBSyxVQUFMLENBQWdCLE1BQU0sT0FBdEI7QUFMaUI7QUFNbEI7OzRCQUVELFUsdUJBQVcsTyxFQUFTO0FBQUE7O0FBQUEsMEJBQ1AsR0FETztBQUVoQixVQUFJLE9BQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixHQUF4QixNQUFpQyxDQUFDLENBQXRDLEVBQXlDO0FBQ3ZDLGVBQUssVUFBTCxDQUFnQixJQUFoQixDQUFxQixHQUFyQjtBQUNEOztBQUVELGFBQUssR0FBTCxJQUFZLFFBQVEsR0FBUixDQUFaOztBQUVBLFVBQU0sV0FBVyxVQUFDLENBQUQsRUFBSSxNQUFKO0FBQUEsZUFBZSxPQUFLLE9BQUwsQ0FBYSxHQUFiLElBQW9CLE9BQU8sR0FBUCxFQUFuQztBQUFBLE9BQWpCOzs7QUFHQSxlQUFTLElBQVQsRUFBZSxPQUFLLEdBQUwsQ0FBZjs7QUFFQSxhQUFLLEdBQUwsRUFDRyxRQURILENBQ1k7QUFDUixpQkFBUztBQUFBLGlCQUFNLE9BQUssZ0JBQUwsRUFBTjtBQUFBO0FBREQsT0FEWixFQUlHLFdBSkgsQ0FJZSxRQUpmO0FBYmdCOztBQUNsQixTQUFLLElBQU0sR0FBWCxJQUFrQixPQUFsQixFQUEyQjtBQUFBLFlBQWhCLEdBQWdCO0FBaUIxQjtBQUNGLEc7OzRCQUVELE8sc0JBQVU7QUFBQTs7QUFDUixTQUFLLGdCQUFMLEdBQXdCLEtBQUssVUFBTCxDQUFnQixNQUF4QztBQUNBLFNBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixVQUFDLEdBQUQ7QUFBQSxhQUFTLE9BQUssR0FBTCxFQUFVLEtBQVYsRUFBVDtBQUFBLEtBQXhCO0FBQ0QsRzs7NEJBRUQsTSxxQkFBUztBQUFBOztBQUNQLFNBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixVQUFDLEdBQUQ7QUFBQSxhQUFTLE9BQUssR0FBTCxFQUFVLElBQVYsRUFBVDtBQUFBLEtBQXhCO0FBQ0QsRzs7NEJBRUQsVywwQkFBYztBQUFBOztBQUNaLFFBQU0sV0FBVyxFQUFqQjtBQUNBLFNBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixVQUFDLEdBQUQ7QUFBQSxhQUFTLFNBQVMsR0FBVCxJQUFnQixPQUFLLEdBQUwsRUFBVSxXQUFWLEVBQXpCO0FBQUEsS0FBeEI7QUFDQSxXQUFPLFFBQVA7QUFDRCxHOzs0QkFFRCxnQiwrQkFBbUI7QUFDakIsV0FBUSxLQUFLLGdCQUFMLEtBQTBCLENBQWxDO0FBQ0QsRzs7Ozs7a0JBR1ksVUFBQyxPQUFELEVBQVUsS0FBVixFQUFvQjtBQUNqQyxTQUFPLElBQUksZUFBSjtBQUNMO0FBREssS0FFRixLQUZFLEVBQVA7QUFJRCxDIiwiZmlsZSI6ImNvbXBvc2l0ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuXG5jbGFzcyBDb21wb3NpdGVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIGNvbnN0IHsgYWN0aW9ucywgLi4ucmVtYWluaW5nUHJvcHMgfSA9IHByb3BzO1xuICAgIHN1cGVyKHJlbWFpbmluZ1Byb3BzKTtcbiAgICB0aGlzLmN1cnJlbnQgPSB7fTtcbiAgICB0aGlzLmFjdGlvbktleXMgPSBbXTtcbiAgICB0aGlzLmFkZEFjdGlvbnMocHJvcHMuYWN0aW9ucyk7XG4gIH1cblxuICBhZGRBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhY3Rpb25zKSB7XG4gICAgICBpZiAodGhpcy5hY3Rpb25LZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cblxuICAgICAgdGhpc1trZXldID0gYWN0aW9uc1trZXldO1xuXG4gICAgICBjb25zdCBvblVwZGF0ZSA9ICh2LCBhY3Rpb24pID0+IHRoaXMuY3VycmVudFtrZXldID0gYWN0aW9uLmdldCgpO1xuXG4gICAgICAvLyBJbW1lZGlhdGVseSB1cGRhdGUgd2l0aCB0aGUgY3VycmVudCBhY3Rpb24gc3RhdGVcbiAgICAgIG9uVXBkYXRlKG51bGwsIHRoaXNba2V5XSk7XG5cbiAgICAgIHRoaXNba2V5XVxuICAgICAgICAuc2V0UHJvcHMoe1xuICAgICAgICAgIF9vblN0b3A6ICgpID0+IHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tXG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRMaXN0ZW5lcihvblVwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSB0aGlzLmFjdGlvbktleXMubGVuZ3RoO1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKChrZXkpID0+IHRoaXNba2V5XS5zdGFydCgpKTtcbiAgfVxuXG4gIG9uU3RvcCgpIHtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaCgoa2V5KSA9PiB0aGlzW2tleV0uc3RvcCgpKTtcbiAgfVxuXG4gIGdldFZlbG9jaXR5KCkge1xuICAgIGNvbnN0IHZlbG9jaXR5ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goKGtleSkgPT4gdmVsb2NpdHlba2V5XSA9IHRoaXNba2V5XS5nZXRWZWxvY2l0eSgpKTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH1cblxuICBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiAodGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoYWN0aW9ucywgcHJvcHMpID0+IHtcbiAgcmV0dXJuIG5ldyBDb21wb3NpdGVBY3Rpb24oe1xuICAgIGFjdGlvbnMsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVNLFM7Ozs7Ozs7OztzQkFLSixPLHNCQUFVO0FBQUEsaUJBQzBCLEtBQUssS0FEL0I7QUFBQSxRQUNBLFFBREEsVUFDQSxRQURBO0FBQUEsUUFDVSxJQURWLFVBQ1UsSUFEVjtBQUFBLFFBQ2dCLEtBRGhCLFVBQ2dCLEtBRGhCOzs7QUFHUixTQUFLLEtBQUwsR0FBYSxTQUFTLHFCQUFNO0FBQzFCLFVBQUksQ0FEc0I7QUFFMUIsd0JBRjBCO0FBRzFCO0FBSDBCLEtBQU4sRUFJbkIsS0FKbUIsRUFBdEI7QUFLRCxHOztzQkFFRCxNLHFCQUFTO0FBQUEsa0JBQ2MsS0FBSyxLQURuQjtBQUFBLFFBQ0MsSUFERCxXQUNDLElBREQ7QUFBQSxRQUNPLEVBRFAsV0FDTyxFQURQOztBQUVQLFFBQU0sVUFBVSxLQUFLLEtBQUwsQ0FBVyxHQUFYLEVBQWhCO0FBQ0EsUUFBTSxrQkFBa0IsS0FBSyxHQUFMLEVBQXhCO0FBQ0EsUUFBTSxnQkFBZ0IsR0FBRyxHQUFILEVBQXRCO0FBQ0EsV0FBTyxnQ0FBcUIsZUFBckIsRUFBc0MsYUFBdEMsRUFBcUQsT0FBckQsQ0FBUDtBQUNELEc7Ozs7O0FBckJHLFMsQ0FDRyxZLEdBQWU7QUFDcEI7QUFEb0IsQzs7a0JBdUJULFVBQUMsS0FBRDtBQUFBLFNBQVcsSUFBSSxTQUFKLENBQWMsS0FBZCxDQUFYO0FBQUEsQyIsImZpbGUiOiJjcm9zcy1mYWRlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgdHdlZW4gZnJvbSAnLi90d2Vlbic7XG5pbXBvcnQgeyBsaW5lYXIgfSBmcm9tICcuLi9pbmMvZWFzaW5nJztcbmltcG9ydCB7IGdldFZhbHVlRnJvbVByb2dyZXNzIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jbGFzcyBDcm9zc0ZhZGUgZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGVhc2U6IGxpbmVhclxuICB9XG5cbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IGR1cmF0aW9uLCBlYXNlLCBmYWRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuZmFkZXIgPSBmYWRlciB8fCB0d2Vlbih7XG4gICAgICB0bzogMSxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgZWFzZVxuICAgIH0pLnN0YXJ0KCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeyBmcm9tLCB0byB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBiYWxhbmNlID0gdGhpcy5mYWRlci5nZXQoKTtcbiAgICBjb25zdCBsYXRlc3RGcm9tVmFsdWUgPSBmcm9tLmdldCgpO1xuICAgIGNvbnN0IGxhdGVzdFRvVmFsdWUgPSB0by5nZXQoKTtcbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MobGF0ZXN0RnJvbVZhbHVlLCBsYXRlc3RUb1ZhbHVlLCBiYWxhbmNlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IG5ldyBDcm9zc0ZhZGUocHJvcHMpO1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2RlbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O2tCQUVlLFVBQUMsUUFBRCxFQUFXLFVBQVg7QUFBQSxTQUEwQixxQkFBTSxFQUFFLGtCQUFGLEVBQVksc0JBQVosRUFBTixDQUExQjtBQUFBLEMiLCJmaWxlIjoiZGVsYXkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHdlZW4gZnJvbSAnLi90d2Vlbic7XG5cbmV4cG9ydCBkZWZhdWx0IChkdXJhdGlvbiwgb25Db21wbGV0ZSkgPT4gdHdlZW4oeyBkdXJhdGlvbiwgb25Db21wbGV0ZSB9KTtcbiJdfQ==

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(20);
	
	var _2 = _interopRequireDefault(_);
	
	var _framesync = __webpack_require__(19);
	
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
	    var _props = this.props;
	    var input = _props.input;
	    var from = _props.from;
	
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
	    var input = args[0];
	    var onUpdate = args[1];
	    var _props2 = args[2];
	
	    return new Offset(_extends({
	      input: input,
	      onUpdate: onUpdate
	    }, _props2));
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL29mZnNldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU0sTTs7Ozs7Ozs7O21CQU1KLE8sc0JBQVU7QUFBQTs7QUFBQSxRQUNBLEtBREEsR0FDVSxLQUFLLEtBRGYsQ0FDQSxLQURBOztBQUVSLFNBQUssV0FBTCxHQUFtQixNQUFNLEdBQU4sRUFBbkI7O0FBRUEsU0FBSyxjQUFMLEdBQXNCLFlBQU07QUFDMUIsb0NBQWMsT0FBSyxlQUFuQjtBQUNELEtBRkQ7O0FBSUEsVUFBTSxXQUFOLENBQWtCLEtBQUssY0FBdkI7QUFDRCxHOzttQkFFRCxNLHFCQUFTO0FBQUEsUUFDQyxLQURELEdBQ1csS0FBSyxLQURoQixDQUNDLEtBREQ7O0FBRVAsVUFBTSxjQUFOLENBQXFCLEtBQUssY0FBMUI7QUFDRCxHOzttQkFFRCxNLHFCQUFTO0FBQUEsaUJBQ2lCLEtBQUssS0FEdEI7QUFBQSxRQUNDLEtBREQsVUFDQyxLQUREO0FBQUEsUUFDUSxJQURSLFVBQ1EsSUFEUjs7QUFFUCxRQUFNLFNBQVMsTUFBTSxHQUFOLEtBQWMsS0FBSyxXQUFsQztBQUNBLFdBQU8sT0FBTyxNQUFkO0FBQ0QsRzs7Ozs7QUExQkcsTSxDQUNHLFksR0FBZTtBQUNwQixRQUFNLENBRGM7QUFFcEIsV0FBUztBQUZXLEM7O2tCQTRCVCxZQUFhO0FBQUEsb0NBQVQsSUFBUztBQUFULFFBQVM7QUFBQTs7QUFDMUIsTUFBSSxLQUFLLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFBQSxRQUNiLEtBRGEsR0FDSCxJQURHOztBQUVyQixXQUFPLElBQUksTUFBSixDQUFXLEtBQVgsQ0FBUDtBQUNELEdBSEQsTUFHTztBQUFBLFFBQ0csS0FESCxHQUM4QixJQUQ5QjtBQUFBLFFBQ1UsUUFEVixHQUM4QixJQUQ5QjtBQUFBLFFBQ29CLE9BRHBCLEdBQzhCLElBRDlCOztBQUVMLFdBQU8sSUFBSSxNQUFKO0FBQ0wsa0JBREs7QUFFTDtBQUZLLE9BR0YsT0FIRSxFQUFQO0FBS0Q7QUFDRixDIiwiZmlsZSI6Im9mZnNldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgb25GcmFtZVVwZGF0ZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5cbmNsYXNzIE9mZnNldCBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZnJvbTogMCxcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH07XG5cbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IGlucHV0IH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuaW5wdXRPcmlnaW4gPSBpbnB1dC5nZXQoKTtcblxuICAgIHRoaXMuc2NoZWR1bGVVcGRhdGUgPSAoKSA9PiB7XG4gICAgICBvbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9O1xuXG4gICAgaW5wdXQuYWRkTGlzdGVuZXIodGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gIH1cblxuICBvblN0b3AoKSB7XG4gICAgY29uc3QgeyBpbnB1dCB9ID0gdGhpcy5wcm9wcztcbiAgICBpbnB1dC5yZW1vdmVMaXN0ZW5lcih0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGlucHV0LCBmcm9tIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG9mZnNldCA9IGlucHV0LmdldCgpIC0gdGhpcy5pbnB1dE9yaWdpbjtcbiAgICByZXR1cm4gZnJvbSArIG9mZnNldDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoLi4uYXJncykgPT4ge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBbIHByb3BzIF0gPSBhcmdzO1xuICAgIHJldHVybiBuZXcgT2Zmc2V0KHByb3BzKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBbIGlucHV0LCBvblVwZGF0ZSwgcHJvcHMgXSA9IGFyZ3M7XG4gICAgcmV0dXJuIG5ldyBPZmZzZXQoe1xuICAgICAgaW5wdXQsXG4gICAgICBvblVwZGF0ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSk7XG4gIH1cbn07XG4iXX0=

/***/ },
/* 13 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BhcmFsbGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFFTSxROzs7Ozs7Ozs7cUJBQ0osTyxzQkFBVTtBQUFBOztBQUFBLFFBQ0EsT0FEQSxHQUNZLEtBQUssS0FEakIsQ0FDQSxPQURBOztBQUVSLFNBQUssZ0JBQUwsR0FBd0IsUUFBUSxNQUFoQzs7QUFFQSxZQUFRLE9BQVIsQ0FBZ0IsVUFBQyxNQUFELEVBQVk7QUFDMUIsYUFBTyxRQUFQLENBQWdCO0FBQ2QsaUJBQVM7QUFBQSxpQkFBTSxPQUFLLGdCQUFMLEVBQU47QUFBQTtBQURLLE9BQWhCLEVBRUcsS0FGSDtBQUdELEtBSkQ7QUFLRCxHOztxQkFFRCxNLHFCQUFTO0FBQ1AsU0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixPQUFuQixDQUEyQixVQUFDLE1BQUQ7QUFBQSxhQUFZLE9BQU8sSUFBUCxFQUFaO0FBQUEsS0FBM0I7QUFDRCxHOztxQkFFRCxTLHNCQUFVLE0sRUFBUTtBQUFBLFFBQ1IsT0FEUSxHQUNJLEtBQUssS0FEVCxDQUNSLE9BRFE7OztBQUdoQixRQUFJLFFBQVEsT0FBUixDQUFnQixNQUFoQixNQUE0QixDQUFDLENBQWpDLEVBQW9DO0FBQ2xDLGNBQVEsSUFBUixDQUFhLE1BQWI7QUFDRDtBQUNGLEc7O3FCQUVELGdCLCtCQUFtQjtBQUNqQixXQUFRLEtBQUssZ0JBQUwsS0FBMEIsQ0FBbEM7QUFDRCxHOzs7OztrQkFHWSxVQUFDLE9BQUQsRUFBVSxLQUFWO0FBQUEsU0FBb0IsSUFBSSxRQUFKLFlBQWUsZ0JBQWYsSUFBMkIsS0FBM0IsRUFBcEI7QUFBQSxDIiwiZmlsZSI6InBhcmFsbGVsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5cbmNsYXNzIFBhcmFsbGVsIGV4dGVuZHMgQWN0aW9uIHtcbiAgb25TdGFydCgpIHtcbiAgICBjb25zdCB7IGFjdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gYWN0aW9ucy5sZW5ndGg7XG5cbiAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xuICAgICAgYWN0aW9uLnNldFByb3BzKHtcbiAgICAgICAgX29uU3RvcDogKCkgPT4gdGhpcy5udW1BY3RpdmVBY3Rpb25zLS1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH1cblxuICBvblN0b3AoKSB7XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4gYWN0aW9uLnN0b3AoKSk7XG4gIH1cblxuICBhZGRBY3Rpb24oYWN0aW9uKSB7XG4gICAgY29uc3QgeyBhY3Rpb25zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGFjdGlvbnMuaW5kZXhPZihhY3Rpb24pID09PSAtMSkge1xuICAgICAgYWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgfVxuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gKHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGFjdGlvbnMsIHByb3BzKSA9PiBuZXcgUGFyYWxsZWwoeyBhY3Rpb25zLCAuLi5wcm9wcyB9KTtcbiJdfQ==

/***/ },
/* 14 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BoeXNpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTSxPOzs7Ozs7Ozs7b0JBUUosTSxxQkFBUztBQUFBLGlCQUNpRSxLQUFLLEtBRHRFO0FBQUEsUUFDQyxhQURELFVBQ0MsYUFERDtBQUFBLFFBQ2dCLFlBRGhCLFVBQ2dCLFlBRGhCO0FBQUEsUUFDOEIsUUFEOUIsVUFDOEIsUUFEOUI7QUFBQSxRQUN3QyxRQUR4QyxVQUN3QyxRQUR4QztBQUFBLFFBQ2tELE1BRGxELFVBQ2tELE1BRGxEO0FBQUEsUUFDMEQsRUFEMUQsVUFDMEQsRUFEMUQ7O0FBRVAsUUFBSSxjQUFjLFFBQWxCO0FBQ0EsUUFBTSxVQUFVLG9DQUFoQjs7O0FBR0EsUUFBSSxZQUFKLEVBQWtCO0FBQ2hCLHFCQUFlLHlCQUFjLFlBQWQsRUFBNEIsT0FBNUIsQ0FBZjtBQUNEOzs7QUFHRCxRQUFJLFFBQUosRUFBYztBQUNaLDhCQUFnQixJQUFJLFFBQXBCLEVBQWtDLFVBQVUsR0FBNUM7QUFDRDs7QUFFRCxRQUFJLFVBQVUsT0FBTyxTQUFyQixFQUFnQztBQUM5QixVQUFNLG1CQUFtQixLQUFLLEtBQUssT0FBbkM7QUFDQSxxQkFBZSxtQkFBbUIseUJBQWMsTUFBZCxFQUFzQixPQUF0QixDQUFsQztBQUNEOzs7QUFHRCxTQUFLLE9BQUwsSUFBZ0IseUJBQWMsV0FBZCxFQUEyQixPQUEzQixDQUFoQjtBQUNBLFNBQUssS0FBTCxDQUFXLFFBQVgsR0FBc0IsV0FBdEI7Ozs7O0FBS0EsU0FBSyxVQUFMLEdBQW1CLGtCQUFrQixLQUFsQixLQUE0QixDQUFDLFdBQUQsSUFBZ0IsS0FBSyxHQUFMLENBQVMsV0FBVCxLQUF5QixhQUFyRSxDQUFuQjs7QUFFQSxRQUFJLEtBQUssVUFBTCxJQUFtQixNQUF2QixFQUErQjtBQUM3QixXQUFLLE9BQUwsR0FBZSxFQUFmO0FBQ0Q7O0FBRUQsV0FBTyxLQUFLLE9BQVo7QUFDRCxHOztvQkFFRCxnQiwrQkFBbUI7QUFDakIsV0FBTyxLQUFLLFVBQVo7QUFDRCxHOzs7OztBQTlDRyxPLENBQ0csWSxHQUFlO0FBQ3BCLGdCQUFjLENBRE07QUFFcEIsWUFBVSxDQUZVO0FBR3BCLFlBQVUsQ0FIVTtBQUlwQixpQkFBZTtBQUpLLEM7O2tCQWdEVCxVQUFDLEtBQUQ7QUFBQSxTQUFXLElBQUksT0FBSixDQUFZLEtBQVosQ0FBWDtBQUFBLEMiLCJmaWxlIjoicGh5c2ljcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgdGltZVNpbmNlTGFzdEZyYW1lIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcbmltcG9ydCB7IHNwZWVkUGVyRnJhbWUgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNsYXNzIFBoeXNpY3MgZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFjY2VsZXJhdGlvbjogMCxcbiAgICBmcmljdGlvbjogMCxcbiAgICB2ZWxvY2l0eTogMCxcbiAgICBhdXRvU3RvcFNwZWVkOiAwLjAwMVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHsgYXV0b1N0b3BTcGVlZCwgYWNjZWxlcmF0aW9uLCBmcmljdGlvbiwgdmVsb2NpdHksIHNwcmluZywgdG8gfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IG5ld1ZlbG9jaXR5ID0gdmVsb2NpdHk7XG4gICAgY29uc3QgZWxhcHNlZCA9IHRpbWVTaW5jZUxhc3RGcmFtZSgpO1xuXG4gICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGFjY2VsZXJhdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKz0gc3BlZWRQZXJGcmFtZShhY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGZyaWN0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGZyaWN0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSAqPSAoMSAtIGZyaWN0aW9uKSAqKiAoZWxhcHNlZCAvIDEwMCk7XG4gICAgfVxuXG4gICAgaWYgKHNwcmluZyAmJiB0byAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBkaXN0YW5jZVRvVGFyZ2V0ID0gdG8gLSB0aGlzLmN1cnJlbnQ7XG4gICAgICBuZXdWZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogc3BlZWRQZXJGcmFtZShzcHJpbmcsIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHZlbG9jaXR5XG4gICAgdGhpcy5jdXJyZW50ICs9IHNwZWVkUGVyRnJhbWUobmV3VmVsb2NpdHksIGVsYXBzZWQpO1xuICAgIHRoaXMucHJvcHMudmVsb2NpdHkgPSBuZXdWZWxvY2l0eTtcblxuICAgIC8vIENoZWNrIGlmIHNpbXVsYXRpb24gaXMgY29tcGxldGVcbiAgICAvLyBXZSBkbyB0aGlzIGhlcmUgaW5zdGVhZCBvZiBgaXNBY3Rpb25Db21wbGV0ZWAgYXMgaXQgYWxsb3dzIHVzXG4gICAgLy8gdG8gY2xhbXAgZHVyaW5nIHRoaXMgdXBkYXRlXG4gICAgdGhpcy5pc0NvbXBsZXRlID0gKGF1dG9TdG9wU3BlZWQgIT09IGZhbHNlICYmICghbmV3VmVsb2NpdHkgfHwgTWF0aC5hYnMobmV3VmVsb2NpdHkpIDw9IGF1dG9TdG9wU3BlZWQpKTtcblxuICAgIGlmICh0aGlzLmlzQ29tcGxldGUgJiYgc3ByaW5nKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0bztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gbmV3IFBoeXNpY3MocHJvcHMpOyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BvaW50ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFTLGFBQVQsY0FBeUU7QUFBQSxNQUFoRCxDQUFnRCxTQUFoRCxDQUFnRDtBQUFBLE1BQTdDLENBQTZDLFNBQTdDLENBQTZDO0FBQUEsTUFBdEMsYUFBc0MsUUFBdEMsYUFBc0M7QUFBQSxNQUF2QixTQUF1QixRQUF2QixTQUF1Qjs7QUFBQSxNQUFULEtBQVM7O0FBQ3ZFLE1BQU0sVUFBVSx5QkFBVTtBQUN4QixPQUFHLHFCQUFNLENBQU4sQ0FEcUI7QUFFeEIsT0FBRyxxQkFBTSxDQUFOO0FBRnFCLEdBQVY7QUFJZCxhQUFTLElBSks7QUFLZCxvQkFBZ0I7QUFMRixLQU1YLEtBTlcsRUFBaEI7O0FBU0EsTUFBTSxnQkFBZ0IsVUFBQyxDQUFELEVBQU87QUFDM0IsUUFBSSxNQUFNLGNBQVYsRUFBMEI7QUFDeEIsUUFBRSxjQUFGO0FBQ0Q7O0FBRUQsUUFBTSxTQUFTLGNBQWMsQ0FBZCxDQUFmO0FBQ0EsWUFBUSxDQUFSLENBQVUsR0FBVixDQUFjLE9BQU8sQ0FBckI7QUFDQSxZQUFRLENBQVIsQ0FBVSxHQUFWLENBQWMsT0FBTyxDQUFyQjtBQUNELEdBUkQ7O0FBVUEsVUFBUSxRQUFSLENBQWlCO0FBQ2YsY0FBVTtBQUFBLGFBQU0sU0FBUyxlQUFULENBQXlCLGdCQUF6QixDQUEwQyxTQUExQyxFQUFxRCxhQUFyRCxDQUFOO0FBQUEsS0FESztBQUVmLGFBQVM7QUFBQSxhQUFNLFNBQVMsZUFBVCxDQUF5QixtQkFBekIsQ0FBNkMsU0FBN0MsRUFBd0QsYUFBeEQsQ0FBTjtBQUFBO0FBRk0sR0FBakI7O0FBS0EsU0FBTyxPQUFQO0FBQ0Q7O0FBRUQsSUFBTSxvQkFBb0IsVUFBQyxDQUFEO0FBQUEsU0FBUTtBQUNoQyxPQUFHLEVBQUUsS0FEMkI7QUFFaEMsT0FBRyxFQUFFO0FBRjJCLEdBQVI7QUFBQSxDQUExQjs7QUFLQSxJQUFNLG9CQUFvQjtBQUFBLE1BQUcsY0FBSCxTQUFHLGNBQUg7QUFBQSxTQUF5QjtBQUNqRCxPQUFHLGVBQWUsQ0FBZixFQUFrQixPQUQ0QjtBQUVqRCxPQUFHLGVBQWUsQ0FBZixFQUFrQjtBQUY0QixHQUF6QjtBQUFBLENBQTFCOztBQUtBLElBQU0saUJBQWlCLFVBQUMsQ0FBRDtBQUFBLFNBQU8sRUFBRSxhQUFGLElBQW1CLEVBQUUsV0FBckIsSUFBb0MsQ0FBM0M7QUFBQSxDQUF2Qjs7a0JBRWUsVUFBQyxDQUFELEVBQUksS0FBSixFQUFjO0FBQzNCLE1BQU0sY0FBYyxlQUFlLENBQWYsQ0FBcEI7QUFDQSxTQUFRLFlBQVksT0FBYixHQUNMLGNBQWMsa0JBQWtCLENBQWxCLENBQWQ7QUFDRSxlQUFXLFdBRGI7QUFFRSxtQkFBZTtBQUZqQixLQUdLLEtBSEwsRUFESyxHQU1MLGNBQWMsa0JBQWtCLENBQWxCLENBQWQ7QUFDRSxlQUFXLFdBRGI7QUFFRSxtQkFBZTtBQUZqQixLQUdLLEtBSEwsRUFORjtBQVdELEMiLCJmaWxlIjoicG9pbnRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2YWx1ZSBmcm9tICcuL3ZhbHVlJztcbmltcG9ydCBjb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuXG5mdW5jdGlvbiBjcmVhdGVQb2ludGVyKHsgeCwgeSB9LCB7IGV2ZW50VG9Qb2ludHMsIG1vdmVFdmVudCwgLi4ucHJvcHMgfSkge1xuICBjb25zdCBwb2ludGVyID0gY29tcG9zaXRlKHtcbiAgICB4OiB2YWx1ZSh4KSxcbiAgICB5OiB2YWx1ZSh5KVxuICB9LCB7XG4gICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZSxcbiAgICAuLi5wcm9wc1xuICB9KTtcblxuICBjb25zdCB1cGRhdGVQb2ludGVyID0gKGUpID0+IHtcbiAgICBpZiAocHJvcHMucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwb2ludHMgPSBldmVudFRvUG9pbnRzKGUpO1xuICAgIHBvaW50ZXIueC5zZXQocG9pbnRzLngpO1xuICAgIHBvaW50ZXIueS5zZXQocG9pbnRzLnkpO1xuICB9O1xuXG4gIHBvaW50ZXIuc2V0UHJvcHMoe1xuICAgIF9vblN0YXJ0OiAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpLFxuICAgIF9vblN0b3A6ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlcilcbiAgfSk7XG5cbiAgcmV0dXJuIHBvaW50ZXI7XG59XG5cbmNvbnN0IG1vdXNlRXZlbnRUb1BvaW50ID0gKGUpID0+ICh7XG4gIHg6IGUucGFnZVgsXG4gIHk6IGUucGFnZVlcbn0pO1xuXG5jb25zdCB0b3VjaEV2ZW50VG9Qb2ludCA9ICh7IGNoYW5nZWRUb3VjaGVzIH0pID0+ICh7XG4gIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbn0pO1xuXG5jb25zdCBnZXROYXRpdmVFdmVudCA9IChlKSA9PiBlLm9yaWdpbmFsRXZlbnQgfHwgZS5uYXRpdmVFdmVudCB8fCBlO1xuXG5leHBvcnQgZGVmYXVsdCAoZSwgcHJvcHMpID0+IHtcbiAgY29uc3QgbmF0aXZlRXZlbnQgPSBnZXROYXRpdmVFdmVudChlKTtcbiAgcmV0dXJuIChuYXRpdmVFdmVudC50b3VjaGVzKSA/XG4gICAgY3JlYXRlUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwge1xuICAgICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICAgIGV2ZW50VG9Qb2ludHM6IHRvdWNoRXZlbnRUb1BvaW50LFxuICAgICAgLi4ucHJvcHNcbiAgICB9KSA6XG4gICAgY3JlYXRlUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwge1xuICAgICAgbW92ZUV2ZW50OiAnbW91c2Vtb3ZlJyxcbiAgICAgIGV2ZW50VG9Qb2ludHM6IG1vdXNlRXZlbnRUb1BvaW50LFxuICAgICAgLi4ucHJvcHNcbiAgICB9KTtcbn07XG4iXX0=

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
	    var _props = this.props;
	    var duration = _props.duration;
	    var playDirection = _props.playDirection;
	
	
	    this.elapsed = playDirection === 1 ? 0 : duration;
	  };
	
	  Tween.prototype.update = function update() {
	    var _props2 = this.props;
	    var duration = _props2.duration;
	    var ease = _props2.ease;
	    var from = _props2.from;
	    var to = _props2.to;
	    var playDirection = _props2.playDirection;
	
	
	    this.elapsed += (0, _framesync.timeSinceLastFrame)() * playDirection;
	
	    return (0, _calc.getValueFromProgress)(from, to, ease(clampProgress((0, _calc.getProgressFromValue)(0, duration, this.elapsed))));
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
	//# sourceMappingURL=data:application/json;base64,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Qjs7QUFHTCxXQUFPLElBQVA7QUFDRCxHOztrQkFFRCxPLHNCQUFVO0FBQ1IsU0FBSyxLQUFMLENBQVcsYUFBWCxJQUE0QixDQUFDLENBQTdCO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsRzs7Ozs7QUF0RUcsSyxDQUNHLFksR0FBZTtBQUNwQixZQUFVLEdBRFU7QUFFcEIsdUJBRm9CO0FBR3BCLFFBQU0sQ0FIYztBQUlwQixNQUFJLENBSmdCO0FBS3BCLFFBQU0sQ0FMYztBQU1wQixhQUFXLENBTlM7QUFPcEIsUUFBTSxDQVBjO0FBUXBCLGFBQVcsQ0FSUztBQVNwQixRQUFNLENBVGM7QUFVcEIsYUFBVyxDQVZTO0FBV3BCLGlCQUFlO0FBWEssQzs7a0JBd0VULFlBQWE7QUFBQSxvQ0FBVCxJQUFTO0FBQVQsUUFBUztBQUFBOztBQUMxQixNQUFJLEtBQUssTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUFBLFFBQ2IsS0FEYSxHQUNILElBREc7O0FBRXJCLFdBQU8sSUFBSSxLQUFKLENBQVUsS0FBVixDQUFQO0FBQ0QsR0FIRCxNQUdPO0FBQUEsUUFDRyxJQURILEdBQ3VDLElBRHZDO0FBQUEsUUFDUyxFQURULEdBQ3VDLElBRHZDO0FBQUEsUUFDYSxRQURiLEdBQ3VDLElBRHZDO0FBQUEsUUFDdUIsSUFEdkIsR0FDdUMsSUFEdkM7QUFBQSxRQUM2QixPQUQ3QixHQUN1QyxJQUR2Qzs7QUFFTCxXQUFPLElBQUksS0FBSixZQUFZLFVBQVosRUFBa0IsTUFBbEIsRUFBc0Isa0JBQXRCLEVBQWdDLFVBQWhDLElBQXlDLE9BQXpDLEVBQVA7QUFDRDtBQUNGLEMiLCJmaWxlIjoidHdlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IHRpbWVTaW5jZUxhc3RGcmFtZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gJy4uL2luYy90cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgZWFzZU91dCB9IGZyb20gJy4uL2luYy9lYXNpbmcnO1xuXG5jb25zdCBjbGFtcFByb2dyZXNzID0gY2xhbXAoMCwgMSk7XG5cbmNvbnN0IE5FWFRfU1RFUFMgPSB7XG4gIGxvb3A6ICh0d2VlbikgPT4gdHdlZW4uc3RhcnQoKSxcbiAgeW95bzogKHR3ZWVuKSA9PiB0d2Vlbi5yZXZlcnNlKCkuc3RhcnQoKSxcbiAgZmxpcDogKHR3ZWVuKSA9PiB0d2Vlbi5mbGlwKCkuc3RhcnQoKVxufTtcblxuY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgZWFzZTogZWFzZU91dCxcbiAgICBmcm9tOiAwLFxuICAgIHRvOiAxLFxuICAgIGZsaXA6IDAsXG4gICAgZmxpcENvdW50OiAwLFxuICAgIHlveW86IDAsXG4gICAgeW95b0NvdW50OiAwLFxuICAgIGxvb3A6IDAsXG4gICAgbG9vcENvdW50OiAwLFxuICAgIHBsYXlEaXJlY3Rpb246IDFcbiAgfTtcblxuICBvblN0YXJ0KCkge1xuICAgIGNvbnN0IHsgZHVyYXRpb24sIHBsYXlEaXJlY3Rpb24gfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLmVsYXBzZWQgPSAocGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogZHVyYXRpb247XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeyBkdXJhdGlvbiwgZWFzZSwgZnJvbSwgdG8sIHBsYXlEaXJlY3Rpb24gfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLmVsYXBzZWQgKz0gdGltZVNpbmNlTGFzdEZyYW1lKCkgKiBwbGF5RGlyZWN0aW9uO1xuXG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGZyb20sIHRvLCBlYXNlKGNsYW1wUHJvZ3Jlc3MoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoMCwgZHVyYXRpb24sIHRoaXMuZWxhcHNlZCkpKSk7XG4gIH1cblxuICBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIGNvbnN0IHsgZHVyYXRpb24sIHBsYXlEaXJlY3Rpb24sIHlveW8sIGxvb3AsIGZsaXAgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGlzQ29tcGxldGUgPSAocGxheURpcmVjdGlvbiA9PT0gMSkgPyAodGhpcy5lbGFwc2VkID49IGR1cmF0aW9uKSA6ICh0aGlzLmVsYXBzZWQgPD0gMCk7XG5cbiAgICBpZiAoaXNDb21wbGV0ZSAmJiAoeW95byB8fCBsb29wIHx8IGZsaXApKSB7XG4gICAgICBsZXQgaXNTdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIE5FWFRfU1RFUFMpIHtcbiAgICAgICAgY29uc3QgbmV4dFN0ZXAgPSBORVhUX1NURVBTW2tleV07XG4gICAgICAgIGNvbnN0IGNvdW50UHJvcCA9IGtleSArICdDb3VudCc7XG4gICAgICAgIGNvbnN0IHN0ZXBNYXggPSB0aGlzLmdldFByb3Aoa2V5KTtcbiAgICAgICAgY29uc3Qgc3RlcENvdW50ID0gdGhpcy5nZXRQcm9wKGNvdW50UHJvcCk7XG5cbiAgICAgICAgaWYgKHN0ZXBNYXggPiBzdGVwQ291bnQpIHtcbiAgICAgICAgICB0aGlzLnNldFByb3BzKHtcbiAgICAgICAgICAgIFtjb3VudFByb3BdOiBzdGVwQ291bnQgKyAxXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbmV4dFN0ZXAodGhpcyk7XG4gICAgICAgICAgaXNTdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1N0ZXBUYWtlbikgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0NvbXBsZXRlO1xuICB9XG5cbiAgZ2V0RWxhcHNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGFwc2VkO1xuICB9XG5cbiAgZmxpcCgpIHtcbiAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLnByb3BzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuICAgIFt0aGlzLnByb3BzLmZyb20sIHRoaXMucHJvcHMudG9dID0gW3RoaXMucHJvcHMudG8sIHRoaXMucHJvcHMuZnJvbV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXZlcnNlKCkge1xuICAgIHRoaXMucHJvcHMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoLi4uYXJncykgPT4ge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBbIHByb3BzIF0gPSBhcmdzO1xuICAgIHJldHVybiBuZXcgVHdlZW4ocHJvcHMpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IFsgZnJvbSwgdG8sIGR1cmF0aW9uLCBlYXNlLCBwcm9wcyBdID0gYXJncztcbiAgICByZXR1cm4gbmV3IFR3ZWVuKHsgZnJvbSwgdG8sIGR1cmF0aW9uLCBlYXNlLCAuLi5wcm9wcyB9KTtcbiAgfVxufTtcbiJdfQ==

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _chain = __webpack_require__(7);
	
	var _chain2 = _interopRequireDefault(_chain);
	
	var _parallel = __webpack_require__(13);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3N0YWdnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztrQkFjZSxVQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLFVBQXBCLEVBQW1DO0FBQ2hELE1BQU0scUJBQXFCLG1CQUFPLFFBQVAsQ0FBM0I7O0FBRUEsU0FBTyx3QkFBUyxRQUFRLEdBQVIsQ0FBWSxVQUFDLE1BQUQsRUFBUyxDQUFULEVBQWU7QUFDekMsUUFBTSxjQUFlLGtCQUFELEdBQXVCLFNBQVMsQ0FBVCxDQUF2QixHQUFxQyxJQUFJLFFBQTdEO0FBQ0EsV0FBTyxxQkFBTSxDQUNYLHFCQUFNLFdBQU4sQ0FEVyxFQUVYLE1BRlcsQ0FBTixDQUFQO0FBSUQsR0FOZSxDQUFULEVBTUgsRUFBRSxzQkFBRixFQU5HLENBQVA7QUFPRCxDIiwiZmlsZSI6InN0YWdnZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhaW4gZnJvbSAnLi9jaGFpbic7XG5pbXBvcnQgcGFyYWxsZWwgZnJvbSAnLi9wYXJhbGxlbCc7XG5pbXBvcnQgZGVsYXkgZnJvbSAnLi9kZWxheSc7XG5pbXBvcnQgeyBpc0Z1bmMgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcGFyYWxsZWwgQWN0aW9uIGNvbXBvc2VkIG9mIGNoYWluZWRcbiAqIGRlbGF5IGFuZCBhY3Rpb25zLiBJbnRlcnZhbCBjYW4gYmUgZWl0aGVyIGEgbnVtYmVyXG4gKiB0byBtdWx0aXBseSBieSBgaWAgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgYGlgXG4gKlxuICogU3RyYWlnaHQgY3JpYmJlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi8yNGM3MmY1MTNlNDhmMGJkYzQwODIwYjQzMjYyMzI4ZmUyYzMwMWQ0L0xpYnJhcmllcy9BbmltYXRlZC9zcmMvQW5pbWF0ZWRJbXBsZW1lbnRhdGlvbi5qcyNMMjAzMVxuICogXiBUaGlzIGZ1bmN0aW9uIHNvbGQgYSBwcmV2aW91c2x5LWNvbmZsaWN0ZWQgbWUgb24gdGhlIG1lcml0IG9mIG1vdmluZyBmcm9tXG4gKiBqUXVlcnktc3R5bGUgbXVsdGktcHJvcGVydHkgYW5pbWF0aW9ucyB0byBzaW5nbGUtcHJvcGVydHkuXG4gKiBAcGFyYW0gIHthcnJheX0gYWN0aW9uc1xuICogQHBhcmFtICB7ZnVuY3Rpb24gfCBudW1iZXJ9IGludGVydmFsXG4gKiBAcmV0dXJuIHtBY3Rpb259XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChhY3Rpb25zLCBpbnRlcnZhbCwgb25Db21wbGV0ZSkgPT4ge1xuICBjb25zdCBpbnRlcnZhbElzRnVuY3Rpb24gPSBpc0Z1bmMoaW50ZXJ2YWwpO1xuXG4gIHJldHVybiBwYXJhbGxlbChhY3Rpb25zLm1hcCgoYWN0aW9uLCBpKSA9PiB7XG4gICAgY29uc3QgdGltZVRvRGVsYXkgPSAoaW50ZXJ2YWxJc0Z1bmN0aW9uKSA/IGludGVydmFsKGkpIDogaSAqIGludGVydmFsO1xuICAgIHJldHVybiBjaGFpbihbXG4gICAgICBkZWxheSh0aW1lVG9EZWxheSksXG4gICAgICBhY3Rpb25cbiAgICBdKTtcbiAgfSksIHsgb25Db21wbGV0ZSB9KTtcbn07XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3ZhbHVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU0sSzs7Ozs7Ozs7O2tCQUtKLEcsZ0JBQUksQyxFQUFHO0FBQ0wsU0FBSyxRQUFMLEdBQWdCLENBQWhCO0FBQ0Esa0NBQWMsS0FBSyxlQUFuQjtBQUNELEc7O2tCQUVELE0scUJBQVM7QUFDUCxXQUFPLEtBQUssUUFBWjtBQUNELEc7Ozs7O0FBWkcsSyxDQUNHLFksR0FBZTtBQUNwQixXQUFTO0FBRFcsQzs7a0JBY1QsVUFBQyxPQUFELEVBQVUsUUFBVjtBQUFBLFNBQXVCLElBQUksS0FBSixDQUFVLEVBQUUsZ0JBQUYsRUFBVyxrQkFBWCxFQUFWLENBQXZCO0FBQUEsQyIsImZpbGUiOiJ2YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuaW1wb3J0IHsgb25GcmFtZVVwZGF0ZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5cbmNsYXNzIFZhbHVlIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH07XG5cbiAgc2V0KHYpIHtcbiAgICB0aGlzLnRvVXBkYXRlID0gdjtcbiAgICBvbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy50b1VwZGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VycmVudCwgb25VcGRhdGUpID0+IG5ldyBWYWx1ZSh7IGN1cnJlbnQsIG9uVXBkYXRlIH0pO1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFJLHNCQUFzQixLQUExQjs7Ozs7O0FBTUEsSUFBTSxjQUFjLEVBQXBCOzs7Ozs7QUFNQSxJQUFJLG9CQUFvQix5QkFBeEI7O0FBRUEsSUFBSSxVQUFVLENBQWQ7Ozs7Ozs7QUFPQSxJQUFJLFdBQVcsQ0FBZjs7QUFFQSxTQUFTLGVBQVQsR0FBMkI7QUFDekIsTUFBSSxDQUFDLG1CQUFMLEVBQTBCO0FBQ3hCLDBCQUFzQixJQUF0QjtBQUNBLCtCQUFZLFlBQVo7QUFDRDtBQUNGOztBQUVELElBQU0sYUFBYSxnQ0FBaUIsZUFBakIsQ0FBbkI7QUFDQSxJQUFNLGNBQWMsZ0NBQWlCLGVBQWpCLENBQXBCO0FBQ0EsSUFBTSxjQUFjLGdDQUFpQixlQUFqQixDQUFwQjtBQUNBLElBQU0sV0FBVyxnQ0FBaUIsZUFBakIsQ0FBakI7O0FBRUEsU0FBUyxZQUFULENBQXNCLFVBQXRCLEVBQWtDO0FBQ2hDLHdCQUFzQixLQUF0QjtBQUNBLFlBQVUsS0FBSyxHQUFMLENBQVMsS0FBSyxHQUFMLENBQVMsYUFBYSxpQkFBdEIsRUFBeUMsV0FBekMsQ0FBVCxFQUFnRSxDQUFoRSxJQUFxRSxRQUEvRTtBQUNBLHNCQUFvQixVQUFwQjs7QUFFQSxhQUFXLE9BQVg7QUFDQSxjQUFZLE9BQVo7QUFDQSxjQUFZLE9BQVo7QUFDQSxXQUFTLE9BQVQ7QUFDRDs7QUFFTSxJQUFNLHNDQUFlLFdBQVcsUUFBaEM7QUFDQSxJQUFNLHdDQUFnQixZQUFZLFFBQWxDO0FBQ0EsSUFBTSx3Q0FBZ0IsWUFBWSxRQUFsQztBQUNBLElBQU0sa0NBQWEsU0FBUyxRQUE1QjtBQUNBLElBQU0sa0RBQXFCLFdBQVcsTUFBdEM7QUFDQSxJQUFNLG9EQUFzQixZQUFZLE1BQXhDO0FBQ0EsSUFBTSxvREFBc0IsWUFBWSxNQUF4QztBQUNBLElBQU0sOENBQW1CLFNBQVMsTUFBbEM7O0FBRUEsSUFBTSxrREFBcUI7QUFBQSxTQUFNLE9BQU47QUFBQSxDQUEzQjtBQUNBLElBQU0sd0RBQXdCO0FBQUEsU0FBTSxpQkFBTjtBQUFBLENBQTlCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9uTmV4dEZyYW1lIGZyb20gJy4vb24tbmV4dC1mcmFtZSc7XG5pbXBvcnQgY3JlYXRlUmVuZGVyU3RlcCBmcm9tICcuL2NyZWF0ZS1yZW5kZXItc3RlcCc7XG5pbXBvcnQgeyBjdXJyZW50VGltZSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmxldCB3aWxsUmVuZGVyTmV4dEZyYW1lID0gZmFsc2U7XG5cbi8qKlxuICogTWF4aW11bSBwZXJtaXR0ZWQgbXMgc2luY2UgbGFzdCBmcmFtZVxuICogQHR5cGUge051bWJlcn1cbiAqL1xuY29uc3QgTUFYX0VMQVBTRUQgPSAyMDtcblxuLyoqXG4gKiBDdXJyZW50IGZyYW1lc3RhbXBcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbmxldCBjdXJyZW50RnJhbWVzdGFtcCA9IGN1cnJlbnRUaW1lKCk7XG5cbmxldCBlbGFwc2VkID0gMDtcblxuLyoqXG4gKiBGYWN0b3IgdG8gbXVsdGlwbHkgYGVsYXBzZWRgIGJ5IC0gXG4gKiAwLjUgd291bGQgYmUgc2xvdyBtb3Rpb24sIDIgd291bGQgYmUgZmFzdFxuICogQHR5cGUge051bWJlcn1cbiAqL1xubGV0IGRpbGF0aW9uID0gMTtcblxuZnVuY3Rpb24gc3RhcnRSZW5kZXJMb29wKCkge1xuICBpZiAoIXdpbGxSZW5kZXJOZXh0RnJhbWUpIHtcbiAgICB3aWxsUmVuZGVyTmV4dEZyYW1lID0gdHJ1ZTtcbiAgICBvbk5leHRGcmFtZShwcm9jZXNzRnJhbWUpO1xuICB9XG59XG5cbmNvbnN0IGZyYW1lU3RhcnQgPSBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCk7XG5jb25zdCBmcmFtZVVwZGF0ZSA9IGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKTtcbmNvbnN0IGZyYW1lUmVuZGVyID0gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApO1xuY29uc3QgZnJhbWVFbmQgPSBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NGcmFtZShmcmFtZXN0YW1wKSB7XG4gIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcbiAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50RnJhbWVzdGFtcCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICBjdXJyZW50RnJhbWVzdGFtcCA9IGZyYW1lc3RhbXA7XG5cbiAgZnJhbWVTdGFydC5wcm9jZXNzKCk7XG4gIGZyYW1lVXBkYXRlLnByb2Nlc3MoKTtcbiAgZnJhbWVSZW5kZXIucHJvY2VzcygpO1xuICBmcmFtZUVuZC5wcm9jZXNzKCk7XG59XG5cbmV4cG9ydCBjb25zdCBvbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LnNjaGVkdWxlO1xuZXhwb3J0IGNvbnN0IG9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5zY2hlZHVsZTtcbmV4cG9ydCBjb25zdCBvbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuc2NoZWR1bGU7XG5leHBvcnQgY29uc3Qgb25GcmFtZUVuZCA9IGZyYW1lRW5kLnNjaGVkdWxlO1xuZXhwb3J0IGNvbnN0IGNhbmNlbE9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuY2FuY2VsO1xuZXhwb3J0IGNvbnN0IGNhbmNlbE9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5jYW5jZWw7XG5leHBvcnQgY29uc3QgY2FuY2VsT25GcmFtZVJlbmRlciA9IGZyYW1lUmVuZGVyLmNhbmNlbDtcbmV4cG9ydCBjb25zdCBjYW5jZWxPbkZyYW1lRW5kID0gZnJhbWVFbmQuY2FuY2VsO1xuXG5leHBvcnQgY29uc3QgdGltZVNpbmNlTGFzdEZyYW1lID0gKCkgPT4gZWxhcHNlZDtcbmV4cG9ydCBjb25zdCBjdXJyZW50RnJhbWVUaW1lc3RhbXAgPSAoKSA9PiBjdXJyZW50RnJhbWVzdGFtcDtcbiJdfQ==

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
	      this.isActive = true;
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
	      this.isActive = false;
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
	//# sourceMappingURL=data:application/json;base64,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RDtBQUNELFdBQU8sSUFBUDtBQUNELEc7Ozs7O2tCQUdZLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvbkZyYW1lVXBkYXRlLCBjYW5jZWxPbkZyYW1lVXBkYXRlLCB0aW1lU2luY2VMYXN0RnJhbWUgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuaW1wb3J0IHsgc3BlZWRQZXJTZWNvbmQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNsYXNzIEFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5zY2hlZHVsZWRVcGRhdGUgPSB0aGlzLnNjaGVkdWxlZFVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzXG4gICAgfTtcblxuICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuXG4gICAgdGhpcy5jdXJyZW50ID0gcHJvcHMuY3VycmVudCB8fCBwcm9wcy5mcm9tIHx8IDA7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBjb25zdCB7IG9uU3RhcnQsIF9vblN0YXJ0LCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgIG9uRnJhbWVVcGRhdGUodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RhcnQpIHRoaXMub25TdGFydCgpO1xuICAgIGlmIChvblN0YXJ0KSBvblN0YXJ0KHRoaXMpO1xuICAgIGlmIChfb25TdGFydCkgX29uU3RhcnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgY29uc3QgeyBvblN0b3AsIF9vblN0b3AsIHBhc3NpdmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGNhbmNlbE9uRnJhbWVVcGRhdGUodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RvcCkgdGhpcy5vblN0b3AoKTtcbiAgICBpZiAob25TdG9wKSBvblN0b3AodGhpcyk7XG4gICAgaWYgKF9vblN0b3ApIF9vblN0b3AodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIGNvbnN0IHsgb25Db21wbGV0ZSwgX29uQ29tcGxldGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKHRoaXMpO1xuICAgIGlmIChfb25Db21wbGV0ZSkgX29uQ29tcGxldGUodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNjaGVkdWxlZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmxhc3RVcGRhdGVkID0gdGltZVNpbmNlTGFzdEZyYW1lKCk7XG4gICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50O1xuXG4gICAgY29uc3QgeyBvblVwZGF0ZSwgcGFzc2l2ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh0aGlzLnVwZGF0ZSkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy51cGRhdGUodGhpcy5jdXJyZW50KTtcbiAgICB9XG5cbiAgICBpZiAob25VcGRhdGUpIG9uVXBkYXRlKHRoaXMuY3VycmVudCwgdGhpcyk7XG4gICAgdGhpcy5maXJlTGlzdGVuZXJzKCk7XG5cbiAgICBpZiAoIXBhc3NpdmUgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgb25GcmFtZVVwZGF0ZSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiB0aGlzLmlzQWN0aW9uQ29tcGxldGUoKSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0UHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0ge1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9XG5cbiAgc2V0KHYpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0UHJvcChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wc1trZXldO1xuICB9XG5cbiAgZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuIHNwZWVkUGVyU2Vjb25kKHRoaXMuY3VycmVudCAtIHRoaXMucHJldiwgdGhpcy5sYXN0VXBkYXRlZCk7XG4gIH1cblxuICBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZTtcbiAgfVxuXG4gIGFkZExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycyB8fCBbXTtcbiAgICB0aGlzLm51bUxpc3RlbmVycyA9IHRoaXMubnVtTGlzdGVuZXJzIHx8IDA7XG4gICAgaWYgKHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpID09PSAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycysrO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgY29uc3QgbGlzdGVuZXJJbmRleCA9ICh0aGlzLmxpc3RlbmVycykgPyB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA6IC0xO1xuICAgIGlmIChsaXN0ZW5lckluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMtLTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmaXJlTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldCgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1MaXN0ZW5lcnM7IGkrKykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbaV0oY3VycmVudCwgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbjtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7SUFFTSxRO0FBQ0osb0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBQWQ7O0FBRUEsU0FBSyxLQUFMLGdCQUNLLEtBQUssV0FBTCxDQUFpQixZQUR0QixFQUVLLEtBRkw7O0FBS0EsU0FBSyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUssYUFBTCxHQUFxQixFQUFyQjtBQUNEOzs7Ozs7Ozs7Ozs7cUJBVUQsRyxnQkFBSSxHLEVBQUs7QUFDUCxRQUFJLEdBQUosRUFBUztBQUNQLFVBQUksS0FBSyxLQUFMLENBQVcsR0FBWCxNQUFvQixTQUF4QixFQUFtQztBQUNqQyxlQUFPLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU8sS0FBSyxJQUFMLENBQVUsR0FBVixDQUFQO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFDTCxhQUFPLEtBQUssS0FBWjtBQUNEO0FBQ0YsRzs7Ozs7Ozs7O3FCQU9ELEksaUJBQUssRyxFQUFLO0FBQ1IsUUFBSSxLQUFLLE1BQVQsRUFBaUI7QUFDZixhQUFPLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBUDtBQUNEO0FBQ0YsRzs7Ozs7Ozs7O3FCQU9ELEcsa0JBQWE7QUFBQSxzQ0FBTixJQUFNO0FBQU4sVUFBTTtBQUFBOztBQUNYLFFBQUksT0FBTyxLQUFLLENBQUwsQ0FBUCxLQUFtQixXQUF2QixFQUFvQztBQUFBLFVBQzFCLE1BRDBCLEdBQ2YsSUFEZTs7O0FBR2xDLFdBQUssSUFBTSxHQUFYLElBQWtCLE1BQWxCLEVBQTBCO0FBQ3hCLGFBQUssUUFBTCxDQUFjLEdBQWQsRUFBbUIsT0FBTyxHQUFQLENBQW5CO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFBQSxVQUNHLEtBREgsR0FDa0IsSUFEbEI7QUFBQSxVQUNRLEtBRFIsR0FDa0IsSUFEbEI7O0FBRUwsV0FBSyxRQUFMLENBQWMsS0FBZCxFQUFtQixLQUFuQjtBQUNEOztBQUVELFFBQUksS0FBSyxVQUFULEVBQXFCO0FBQ25CLG9DQUFjLEtBQUssTUFBbkI7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDRCxHOzs7Ozs7Ozs7Ozs7Ozs7O3FCQWNELFEscUJBQVMsRyxFQUFLLEssRUFBTztBQUNuQixRQUFNLGVBQWUsS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFyQjs7O0FBR0EsUUFBSSxrQkFBTSxLQUFOLEtBQWdCLHFCQUFTLEtBQVQsQ0FBcEIsRUFBcUM7QUFDbkMsVUFBSSxpQkFBaUIsS0FBckIsRUFBNEI7QUFDMUIsYUFBSyxLQUFMLENBQVcsR0FBWCxJQUFrQixLQUFsQjtBQUNBLGFBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNEO0FBQ0YsS0FMRCxNQUtPLElBQUksb0JBQVEsS0FBUixDQUFKLEVBQW9CO0FBQ3pCLFVBQUksQ0FBQyxZQUFMLEVBQW1CO0FBQ2pCLGFBQUssS0FBTCxDQUFXLEdBQVgsSUFBa0IsRUFBbEI7QUFDRDs7QUFFRCxVQUFNLFlBQVksTUFBTSxNQUF4QjtBQUNBLFdBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxTQUFwQixFQUErQixHQUEvQixFQUFvQztBQUNsQyxZQUFJLEtBQUssS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsTUFBdUIsTUFBTSxDQUFOLENBQTNCLEVBQXFDO0FBQ25DLGVBQUssS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsSUFBcUIsTUFBTSxDQUFOLENBQXJCO0FBQ0EsZUFBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7QUFDRjtBQUNGLEtBWk0sTUFZQSxJQUFJLGtCQUFNLEtBQU4sQ0FBSixFQUFrQjtBQUN2QixVQUFJLENBQUMsWUFBTCxFQUFtQjtBQUNqQixhQUFLLEtBQUwsQ0FBVyxHQUFYLElBQWtCLEVBQWxCO0FBQ0Q7O0FBRUQsV0FBSyxJQUFJLFFBQVQsSUFBcUIsS0FBckIsRUFBNEI7QUFDMUIsWUFBSSxLQUFLLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLFFBQWhCLE1BQThCLE1BQU0sUUFBTixDQUFsQyxFQUFtRDtBQUNqRCxlQUFLLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLFFBQWhCLElBQTRCLE1BQU0sUUFBTixDQUE1QjtBQUNBLGVBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxRQUFJLEtBQUssVUFBVCxFQUFxQjtBQUNuQixXQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsR0FBeEI7QUFDRDtBQUNGLEc7Ozs7Ozs7OztxQkFPRCxNLHFCQUE0QjtBQUFBLFFBQXJCLFdBQXFCLHlEQUFQLEtBQU87O0FBQzFCLFFBQUksQ0FBQyxlQUFlLEtBQUssVUFBckIsS0FBb0MsS0FBSyxRQUE3QyxFQUF1RDtBQUNyRCxXQUFLLFFBQUw7QUFDRDs7QUFFRCxTQUFLLGFBQUwsQ0FBbUIsTUFBbkIsR0FBNEIsQ0FBNUI7QUFDQSxTQUFLLFVBQUwsR0FBa0IsS0FBbEI7O0FBRUEsV0FBTyxJQUFQO0FBQ0QsRzs7Ozs7a0JBR1ksUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9uRnJhbWVSZW5kZXIgfSBmcm9tICcuLi9mcmFtZXN5bmMnO1xuaW1wb3J0IHsgaXNBcnJheSwgaXNPYmosIGlzTnVtLCBpc1N0cmluZyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnByb3BzID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMsXG4gICAgICAuLi5wcm9wc1xuICAgIH07XG5cbiAgICB0aGlzLnN0YXRlID0ge307XG4gICAgdGhpcy5jaGFuZ2VkVmFsdWVzID0gW107XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgc3RhdGUuXG4gICAqIElmIGBrZXlgIGlzIG5vdCBkZWZpbmVkLCByZXR1cm4gZW50aXJlIGNhY2hlZCBzdGF0ZS5cbiAgICogSWYgYGtleWAgaXMgZGVmaW5lZCwgcmV0dXJuIGNhY2hlZCB2YWx1ZSBpZiBwcmVzZW50LlxuICAgKiBJZiBga2V5YCBpcyBkZWZpbmVkIGFuZCBjYWNoZWQgdmFsdWUgaXMgbm90IHByZXNlbnQsIHJlYWQgYW5kIHJldHVybi5cbiAgICogQHBhcmFtICB7c3RyaW5nfSAob3B0aW9uYWwpIGtleSBvZiB2YWx1ZVxuICAgKiBAcmV0dXJuIHt2YWx1ZX1cbiAgICovXG4gIGdldChrZXkpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQoa2V5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgdmFsdWUgYWNjb3JkaW5nIHRvIGBvblJlYWRgXG4gICAqIEBwYXJhbSAge3N0cmluZ30gTmFtZSBvZiBwcm9wZXJ0eSB0byByZWFkXG4gICAqIEByZXR1cm4ge1t0eXBlXX1cbiAgICovXG4gIHJlYWQoa2V5KSB7XG4gICAgaWYgKHRoaXMub25SZWFkKSB7XG4gICAgICByZXR1cm4gdGhpcy5vblJlYWQoa2V5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGBzdGF0ZWAgd2l0aCBuZXcgdmFsdWVzIGFuZCBzY2hlZHVsZSBgcmVuZGVyYC5cbiAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlc1xuICAgKiBAcGFyYW0ge3ZhbHVlfSB2YWx1ZSB0b3NldFxuICAgKi9cbiAgc2V0KC4uLmFyZ3MpIHtcbiAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBbIHZhbHVlcyBdID0gYXJncztcbiAgICAgIC8vIFNldCBtdWx0aXBsZSB2YWx1ZXNcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlcykge1xuICAgICAgICB0aGlzLnNldFZhbHVlKGtleSwgdmFsdWVzW2tleV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBbIGtleSwgdmFsdWUgXSA9IGFyZ3M7XG4gICAgICB0aGlzLnNldFZhbHVlKGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgIG9uRnJhbWVSZW5kZXIodGhpcy5yZW5kZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gPiBXaWxleSAtIDYgaW4gdGhlIE1vcm5pbmdcbiAgLyoqXG4gICAqIFNldCBhIHNpbmdsZSB2YWx1ZVxuICAgKiBJZiBhIHN0cmluZyBvciBudW1iZXIsIHNldCBkaXJlY3RseS5cbiAgICogSWYgYW4gb2JqZWN0IG9yIGFycmF5LCBjcmVhdGUgbmV3IG9iamVjdCBvciBhcnJheVxuICAgKiBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3QuIFRoZW4gc2hhbGxvdyBjb21wYXJlXG4gICAqIHRvIHNldCBhbmQgY29tcGFyZSBpbmRpdmlkdWFsIHZhbHVlcy5cbiAgICogT25lIG9mIHRoZSBjbGVhcmVyIGRyYXdiYWNrcyBhbmQgYW5ub3lhbmNlcyB3aXRoXG4gICAqIHVzaW5nIG11dGFibGUgaW5zdGVhZCBvZiBpbW11dGFibGUgc3RhdGVzLlxuICAgKiBAcGFyYW0ge1t0eXBlXX0ga2V5XG4gICAqIEBwYXJhbSB7W3R5cGVdfSB2YWx1ZVxuICAgKi9cbiAgc2V0VmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuc3RhdGVba2V5XTtcblxuICAgIC8vIElmIG51bWJlciBvciBzdHJpbmcsIHNldCBkaXJlY3RseVxuICAgIGlmIChpc051bSh2YWx1ZSkgfHwgaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICBpZiAoY3VycmVudFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbnVtVmFsdWVzID0gdmFsdWUubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1WYWx1ZXM7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZVtrZXldW2ldICE9PSB2YWx1ZVtpXSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVtpXSA9IHZhbHVlW2ldO1xuICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzT2JqKHZhbHVlKSkge1xuICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0ge307XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IHZhbHVlS2V5IGluIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV1bdmFsdWVLZXldICE9PSB2YWx1ZVt2YWx1ZUtleV0pIHtcbiAgICAgICAgICB0aGlzLnN0YXRlW2tleV1bdmFsdWVLZXldID0gdmFsdWVbdmFsdWVLZXldO1xuICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNoYW5nZWRWYWx1ZXMucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBgb25SZW5kZXJgIGlmIHZhbHVlcyBoYXZlIGNoYW5nZWQgb3IgYGZvcmNlUmVuZGVyYFxuICAgKiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG4gIHJlbmRlcihmb3JjZVJlbmRlciA9IGZhbHNlKSB7XG4gICAgaWYgKChmb3JjZVJlbmRlciB8fCB0aGlzLmhhc0NoYW5nZWQpICYmIHRoaXMub25SZW5kZXIpIHtcbiAgICAgIHRoaXMub25SZW5kZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZWRWYWx1ZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztrQkE2QmUsVUFBVSxPQUFWLEVBQW1CLEtBQW5CLEVBQTBCO0FBQ3ZDLFNBQU8sSUFBSSxXQUFKO0FBQ0wsb0JBREs7QUFFTCxnQ0FBNEI7QUFGdkIsS0FHRixLQUhFLEVBQVA7QUFLRCxDOztBQW5DRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxXOzs7Ozs7Ozs7d0JBQ0osUSx1QkFBVztBQUFBLGlCQUN1QyxLQUFLLEtBRDVDO0FBQUEsUUFDRCxPQURDLFVBQ0QsT0FEQztBQUFBLFFBQ1EsMEJBRFIsVUFDUSwwQkFEUjs7QUFFVCwwQkFBVSxPQUFWLEVBQW1CLEtBQUssS0FBeEIsRUFBK0IsS0FBSyxhQUFwQyxFQUFtRCwwQkFBbkQ7QUFDRCxHOzt3QkFFRCxNLG1CQUFPLEcsRUFBSztBQUNWLFFBQU0sWUFBWSxxQkFBYyxHQUFkLENBQWxCOztBQUVBLFFBQUksQ0FBQyx5QkFBZSxHQUFmLENBQUwsRUFBMEI7QUFBQSxVQUNoQixPQURnQixHQUNKLEtBQUssS0FERCxDQUNoQixPQURnQjs7QUFFeEIsVUFBTSxXQUFXLE9BQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsSUFBakMsRUFBdUMsd0JBQVMsR0FBVCxDQUF2QyxLQUF5RCxDQUExRTtBQUNBLGFBQVEsYUFBYSxVQUFVLEtBQXhCLEdBQWlDLFVBQVUsS0FBVixDQUFnQixRQUFoQixDQUFqQyxHQUE2RCxRQUFwRTtBQUNELEtBSkQsTUFJTztBQUNMLFVBQUksU0FBSixFQUFlO0FBQ2IsZUFBTyxVQUFVLE9BQVYsSUFBcUIsQ0FBNUI7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLENBQVA7QUFDRDtBQUNGO0FBQ0YsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZW5kZXJlciBmcm9tICcuLi8nO1xuaW1wb3J0IHJlbmRlckNTUyBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IHZhbHVlVHlwZXNNYXAgZnJvbSAnLi92YWx1ZS10eXBlcyc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9wcmVmaXhlcic7XG5cbmNsYXNzIENTU1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBvblJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIHJlbmRlckNTUyhlbGVtZW50LCB0aGlzLnN0YXRlLCB0aGlzLmNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKTtcbiAgfVxuXG4gIG9uUmVhZChrZXkpIHtcbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZVR5cGVzTWFwW2tleV07XG5cbiAgICBpZiAoIXRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGRvbVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClbcHJlZml4ZXIoa2V5KV0gfHwgMDtcbiAgICAgIHJldHVybiAodmFsdWVUeXBlICYmIHZhbHVlVHlwZS5wYXJzZSkgPyB2YWx1ZVR5cGUucGFyc2UoZG9tVmFsdWUpIDogZG9tVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlVHlwZS5kZWZhdWx0IHx8IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ1NTUmVuZGVyZXIoe1xuICAgIGVsZW1lbnQsXG4gICAgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb246IHRydWUsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG59XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFnQ2UsVUFBVSxPQUFWLEVBQW1CLEtBQW5CLEVBQTBCO0FBQ3ZDLFNBQU8sSUFBSSxXQUFKO0FBQ0w7QUFESyxLQUVGLEtBRkUsRUFBUDtBQUlELEM7O0FBckNEOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTSxXOzs7QUFDSix1QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLHFCQUFNLEtBQU4sQ0FEaUI7O0FBQUEsZ0NBR2UsTUFBTSxPQUFOLENBQWMsT0FBZCxFQUhmOztBQUFBLFFBR1QsQ0FIUyx5QkFHVCxDQUhTO0FBQUEsUUFHTixDQUhNLHlCQUdOLENBSE07QUFBQSxRQUdILEtBSEcseUJBR0gsS0FIRztBQUFBLFFBR0ksTUFISix5QkFHSSxNQUhKOztBQUlqQixVQUFLLGlCQUFMLEdBQXlCLEVBQUUsSUFBRixFQUFLLElBQUwsRUFBUSxZQUFSLEVBQWUsY0FBZixFQUF6QjtBQUppQjtBQUtsQjs7d0JBRUQsUSx1QkFBVztBQUFBLFFBQ0QsT0FEQyxHQUNXLEtBQUssS0FEaEIsQ0FDRCxPQURDOztBQUVULFFBQU0sUUFBUSxxQkFBTSxLQUFLLEtBQVgsRUFBa0IsS0FBSyxpQkFBdkIsQ0FBZDtBQUNBLDRCQUFZLE9BQVosRUFBcUIsS0FBckI7QUFDRCxHOzt3QkFFRCxNLG1CQUFPLEcsRUFBSztBQUFBLFFBQ0YsT0FERSxHQUNVLEtBQUssS0FEZixDQUNGLE9BREU7OztBQUdWLFFBQUksQ0FBQyx5QkFBZSxHQUFmLENBQUwsRUFBMEI7QUFDeEIsYUFBTyxRQUFRLFlBQVIsQ0FBcUIsR0FBckIsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLFVBQU0sWUFBWSxxQkFBYSxHQUFiLENBQWxCO0FBQ0EsYUFBUSxTQUFELEdBQWMsVUFBVSxPQUF4QixHQUFrQyxDQUF6QztBQUNEO0FBQ0YsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZW5kZXJlciBmcm9tICcuLi8nO1xuaW1wb3J0IGJ1aWxkIGZyb20gJy4vYnVpbGQnO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL3ZhbHVlLXR5cGVzJztcbmltcG9ydCB7IHNldERPTUF0dHJzIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuY2xhc3MgU1ZHUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKTtcbiAgICB0aGlzLmVsZW1lbnREaW1lbnNpb25zID0geyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH07XG4gIH1cblxuICBvblJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYXR0cnMgPSBidWlsZCh0aGlzLnN0YXRlLCB0aGlzLmVsZW1lbnREaW1lbnNpb25zKTtcbiAgICBzZXRET01BdHRycyhlbGVtZW50LCBhdHRycyk7XG4gIH1cblxuICBvblJlYWQoa2V5KSB7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCF0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWVUeXBlTWFwW2tleV07XG4gICAgICByZXR1cm4gKHZhbHVlVHlwZSkgPyB2YWx1ZVR5cGUuZGVmYXVsdCA6IDA7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1JlbmRlcmVyKHtcbiAgICBlbGVtZW50LFxuICAgIC4uLnByb3BzXG4gIH0pO1xufVxuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQTZCZSxVQUFVLE9BQVYsRUFBbUIsS0FBbkIsRUFBMEI7QUFDdkMsU0FBTyxJQUFJLGVBQUo7QUFDTDtBQURLLEtBRUYsS0FGRSxFQUFQO0FBSUQsQzs7QUFsQ0Q7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU0sZTs7O0FBQ0osMkJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLGlEQUNqQixxQkFBTSxLQUFOLENBRGlCOztBQUFBLGdDQUdlLE1BQU0sT0FBTixDQUFjLE9BQWQsRUFIZjs7QUFBQSxRQUdULENBSFMseUJBR1QsQ0FIUztBQUFBLFFBR04sQ0FITSx5QkFHTixDQUhNO0FBQUEsUUFHSCxLQUhHLHlCQUdILEtBSEc7QUFBQSxRQUdJLE1BSEoseUJBR0ksTUFISjs7QUFJakIsVUFBSyxpQkFBTCxHQUF5QjtBQUN2QixVQUR1QjtBQUV2QixVQUZ1QjtBQUd2QixrQkFIdUI7QUFJdkIsb0JBSnVCO0FBS3ZCLGtCQUFZLE1BQU0sT0FBTixDQUFjLGNBQWQ7QUFMVyxLQUF6QjtBQUppQjtBQVdsQjs7NEJBRUQsUSx1QkFBVztBQUFBLFFBQ0QsVUFEQyxHQUNjLEtBQUssaUJBRG5CLENBQ0QsVUFEQztBQUFBLFFBRUQsT0FGQyxHQUVXLEtBQUssS0FGaEIsQ0FFRCxPQUZDOztBQUdULDRCQUFZLE9BQVosRUFBcUIscUJBQU0sS0FBSyxLQUFYLEVBQWtCLFVBQWxCLENBQXJCO0FBQ0QsRzs7NEJBRUQsTSxtQkFBTyxHLEVBQUs7QUFDVixXQUFPLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsWUFBbkIsQ0FBZ0MsR0FBaEMsQ0FBUDtBQUNELEciLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi4vJztcbmltcG9ydCBidWlsZCBmcm9tICcuL2J1aWxkJztcbmltcG9ydCB7IHNldERPTUF0dHJzIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuY2xhc3MgU1ZHUGF0aFJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gcHJvcHMuZWxlbWVudC5nZXRCQm94KCk7XG4gICAgdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYXRoTGVuZ3RoOiBwcm9wcy5lbGVtZW50LmdldFRvdGFsTGVuZ3RoKClcbiAgICB9O1xuICB9XG5cbiAgb25SZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwYXRoTGVuZ3RoIH0gPSB0aGlzLmVsZW1lbnREaW1lbnNpb25zO1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICBzZXRET01BdHRycyhlbGVtZW50LCBidWlsZCh0aGlzLnN0YXRlLCBwYXRoTGVuZ3RoKSk7XG4gIH1cblxuICBvblJlYWQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBTVkdQYXRoUmVuZGVyZXIoe1xuICAgIGVsZW1lbnQsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG59XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,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RDtBQUFBLFNBQVMsUUFBUSxHQUFSLE1BQWlCLE9BQTFCO0FBQUEsQ0FBaEI7Ozs7Ozs7O0FBUUEsSUFBTSwwQkFBUyxVQUFDLEdBQUQ7QUFBQSxTQUFTLFFBQVEsR0FBUixNQUFpQixVQUExQjtBQUFBLENBQWY7Ozs7Ozs7O0FBUUEsSUFBTSx3QkFBUSxVQUFDLEdBQUQ7QUFBQSxTQUFTLE9BQU8sR0FBUCxLQUFlLFFBQXhCO0FBQUEsQ0FBZDs7Ozs7Ozs7QUFRQSxJQUFNLHdCQUFRLFVBQUMsR0FBRDtBQUFBLFNBQVMsT0FBTyxHQUFQLEtBQWUsUUFBeEI7QUFBQSxDQUFkOzs7Ozs7OztBQVFBLElBQU0sOEJBQVcsVUFBQyxHQUFEO0FBQUEsU0FBUyxPQUFPLEdBQVAsS0FBZSxRQUF4QjtBQUFBLENBQWpCOztBQUVBLElBQU0sd0JBQVEsYUFBYSxHQUFiLENBQWQ7QUFDQSxJQUFNLHdCQUFRLGFBQWEsS0FBYixDQUFkO0FBQ0EsSUFBTSx3QkFBUSxhQUFhLEtBQWIsQ0FBZDtBQUNBLElBQU0sNEJBQVUsVUFBQyxDQUFEO0FBQUEsU0FBUSxNQUFNLENBQU4sS0FBWSxNQUFNLENBQU4sQ0FBWixJQUF3QixNQUFNLENBQU4sQ0FBaEM7QUFBQSxDQUFoQiIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHZhclR5cGUgPSAodmFyaWFibGUpID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xuXG5jb25zdCBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbmNvbnN0IFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xuY29uc3QgSEFTX1BFUkZPUk1BTkNFX05PVyA9ICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdyk7XG5cbi8qXG4gIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtzdHJpbmddXG4qL1xuZXhwb3J0IGNvbnN0IGNhbWVsVG9EYXNoID0gKHN0cmluZykgPT4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xuXG4vKlxuICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICBcbiAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbmV4cG9ydCBjb25zdCBjdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyAoKSA9PiBwZXJmb3JtYW5jZS5ub3coKSA6ICgpID0+IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG5leHBvcnQgY29uc3Qgc2V0RE9NQXR0cnMgPSAoZWxlbWVudCwgYXR0cnMpID0+IHtcbiAgZm9yIChsZXQga2V5IGluIGF0dHJzKSB7XG4gICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfVxuICB9XG59O1xuLypcbiAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc3BsaXRDb21tYURlbGltaXRlZCA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIGFueSBhcmd1bWVudCBmb3IgYHRlcm1gXG4gKiBgY29udGFpbnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG5leHBvcnQgY29uc3QgY29udGFpbnMgPSAodGVybSkgPT4gKHYpID0+IHtcbiAgcmV0dXJuIChpc1N0cmluZyh0ZXJtKSAmJiB2LmluZGV4T2YodGVybSkgIT09IC0xKTtcbn07XG5cbi8qKlxuICogIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgdG8gc2VlIGlmIGFuIGFyZ3VtZW50IGlzXG4gKiAgdGhlIGZpcnN0IGNoYXJhY3RlcnMgaW4gdGhlIHByb3ZpZGVkIGB0ZXJtYFxuICogYGlzRmlyc3RDaGFycygnbmVlZGxlJykoJ2hheXN0YWNrJylgXG4gKi9cbmV4cG9ydCBjb25zdCBpc0ZpcnN0Q2hhcnMgPSAodGVybSkgPT4gKHYpID0+IHtcbiAgcmV0dXJuIChpc1N0cmluZyh0ZXJtKSAmJiB2LmluZGV4T2YodGVybSkgPT09IDApO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSB1bml0IHZhbHVlIHR5cGVcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVVuaXRUeXBlID0gKHR5cGUsIHRyYW5zZm9ybSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRlc3Q6IGNvbnRhaW5zKHR5cGUpLFxuICAgIHBhcnNlOiBwYXJzZUZsb2F0LFxuICAgIHRyYW5zZm9ybVxuICB9O1xufTtcblxuLypcbiAgR2V0IHZhbHVlIGZyb20gZnVuY3Rpb24gc3RyaW5nXG4gIFwidHJhbnNsYXRlWCgyMHB4KVwiIC0+IFwiMjBweFwiXG4qL1xuZXhwb3J0IGNvbnN0IGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gKHZhbHVlKSA9PiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBzcGxpdCBjb2xvclxuICogdmFsdWVzIGZyb20gc3RyaW5nIGludG8gYW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcbiAqIGBtYXBBcnJheVRvT2JqZWN0KFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXSkoJ3JnYmEoMCwwLDApJylgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdENvbG9yVmFsdWVzKHRlcm1zKSB7XG4gIGNvbnN0IG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGNvbnN0IHZhbHVlcyA9IHt9O1xuICAgIGNvbnN0IHZhbHVlc0FycmF5ID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2KSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgIHZhbHVlc1t0ZXJtc1tpXV0gPSAodmFsdWVzQXJyYXlbaV0gIT09IHVuZGVmaW5lZCkgPyBwYXJzZUZsb2F0KHZhbHVlc0FycmF5W2ldKSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcbn1cblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAoYXJyKSA9PiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xuZXhwb3J0IGNvbnN0IGlzRnVuYyA9IChvYmopID0+IHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJztcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbmV4cG9ydCBjb25zdCBpc051bSA9IChudW0pID0+IHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbmV4cG9ydCBjb25zdCBpc09iaiA9IChvYmopID0+IHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHN0cikgPT4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG5cbmV4cG9ydCBjb25zdCBpc0hleCA9IGlzRmlyc3RDaGFycygnIycpO1xuZXhwb3J0IGNvbnN0IGlzUmdiID0gaXNGaXJzdENoYXJzKCdyZ2InKTtcbmV4cG9ydCBjb25zdCBpc0hzbCA9IGlzRmlyc3RDaGFycygnaHNsJyk7XG5leHBvcnQgY29uc3QgaXNDb2xvciA9ICh2KSA9PiAoaXNIZXgodikgfHwgaXNSZ2IodikgfHwgaXNIc2wodikpO1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvcGFyc2Vycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVPLElBQU0sb0JBQU0sVUFBQyxDQUFELEVBQU87QUFDeEIsTUFBSSxVQUFKO0FBQUEsTUFBTyxVQUFQO0FBQUEsTUFBVSxVQUFWOzs7QUFHQSxNQUFJLEVBQUUsTUFBRixHQUFXLENBQWYsRUFBa0I7QUFDaEIsUUFBSSxFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUFKO0FBQ0EsUUFBSSxFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUFKO0FBQ0EsUUFBSSxFQUFFLE1BQUYsQ0FBUyxDQUFULEVBQVksQ0FBWixDQUFKOzs7QUFHRCxHQU5ELE1BTU87QUFDTCxRQUFJLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBWSxDQUFaLENBQUo7QUFDQSxRQUFJLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBWSxDQUFaLENBQUo7QUFDQSxRQUFJLEVBQUUsTUFBRixDQUFTLENBQVQsRUFBWSxDQUFaLENBQUo7QUFDQSxTQUFLLENBQUw7QUFDQSxTQUFLLENBQUw7QUFDQSxTQUFLLENBQUw7QUFDRDs7QUFFRCxTQUFPO0FBQ0wsU0FBSyxTQUFTLENBQVQsRUFBWSxFQUFaLENBREE7QUFFTCxXQUFPLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FGRjtBQUdMLFVBQU0sU0FBUyxDQUFULEVBQVksRUFBWixDQUhEO0FBSUwsV0FBTztBQUpGLEdBQVA7QUFNRCxDQXpCTTs7QUEyQkEsSUFBTSxzQkFBTyw2QkFBaUIsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixNQUFqQixFQUF5QixPQUF6QixDQUFqQixDQUFiOztBQUVBLElBQU0sc0JBQU8sNkJBQWlCLENBQUMsS0FBRCxFQUFRLFlBQVIsRUFBc0IsV0FBdEIsRUFBbUMsT0FBbkMsQ0FBakIsQ0FBYjs7QUFFQSxJQUFNLHdCQUFRLFVBQUMsQ0FBRCxFQUFPO0FBQzFCLE1BQUksa0JBQU0sQ0FBTixDQUFKLEVBQWM7QUFDWixXQUFPLEtBQUssQ0FBTCxDQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUksa0JBQU0sQ0FBTixDQUFKLEVBQWM7QUFDbkIsV0FBTyxJQUFJLENBQUosQ0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJLGtCQUFNLENBQU4sQ0FBSixFQUFjO0FBQ25CLFdBQU8sS0FBSyxDQUFMLENBQVA7QUFDRDs7QUFFRCxTQUFPLENBQVA7QUFDRCxDQVZNIiwiZmlsZSI6InBhcnNlcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcGxpdENvbG9yVmFsdWVzLCBpc1JnYiwgaXNIZXgsIGlzSHNsIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBoZXggPSAodikgPT4ge1xuICBsZXQgciwgZywgYjtcblxuICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICBpZiAodi5sZW5ndGggPiA0KSB7XG4gICAgciA9IHYuc3Vic3RyKDEsIDIpO1xuICAgIGcgPSB2LnN1YnN0cigzLCAyKTtcbiAgICBiID0gdi5zdWJzdHIoNSwgMik7XG5cbiAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgfSBlbHNlIHtcbiAgICByID0gdi5zdWJzdHIoMSwgMSk7XG4gICAgZyA9IHYuc3Vic3RyKDIsIDEpO1xuICAgIGIgPSB2LnN1YnN0cigzLCAxKTtcbiAgICByICs9IHI7XG4gICAgZyArPSBnO1xuICAgIGIgKz0gYjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgZ3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICBibHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgYWxwaGE6IDFcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZ2JhID0gc3BsaXRDb2xvclZhbHVlcyhbJ3JlZCcsICdncmVlbicsICdibHVlJywgJ2FscGhhJ10pO1xuXG5leHBvcnQgY29uc3QgaHNsYSA9IHNwbGl0Q29sb3JWYWx1ZXMoWydodWUnLCAnc2F0dXJhdGlvbicsICdsaWdodG5lc3MnLCAnYWxwaGEnXSk7XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9ICh2KSA9PiB7XG4gIGlmIChpc1JnYih2KSkge1xuICAgIHJldHVybiByZ2JhKHYpO1xuICB9IGVsc2UgaWYgKGlzSGV4KHYpKSB7XG4gICAgcmV0dXJuIGhleCh2KTtcbiAgfSBlbHNlIGlmIChpc0hzbCh2KSkge1xuICAgIHJldHVybiBoc2xhKHYpO1xuICB9XG5cbiAgcmV0dXJuIHY7XG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxJQUFNLFNBQVUsT0FBTyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLE9BQU8scUJBQXpDLEdBQWtFLElBQWxFLEdBQXlFLEtBQXhGOztBQUVBLElBQUksb0JBQUo7O0FBRUEsSUFBSSxNQUFKLEVBQVk7QUFDVixnQkFBYyxVQUFDLFFBQUQ7QUFBQSxXQUFjLE9BQU8scUJBQVAsQ0FBNkIsUUFBN0IsQ0FBZDtBQUFBLEdBQWQ7QUFFRCxDQUhELE1BR087QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFlTCxRQUFJLFdBQVcsQ0FBZjs7QUFFQSxrQkFBYyxVQUFDLFFBQUQsRUFBYztBQUMxQixVQUFNLGNBQWMsSUFBSSxJQUFKLEdBQVcsT0FBWCxFQUFwQjtBQUNBLFVBQU0sYUFBYSxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksUUFBUSxjQUFjLFFBQXRCLENBQVosQ0FBbkI7O0FBRUEsaUJBQVcsY0FBYyxVQUF6Qjs7QUFFQSxpQkFBVztBQUFBLGVBQU0sU0FBUyxRQUFULENBQU47QUFBQSxPQUFYLEVBQXFDLFVBQXJDO0FBQ0QsS0FQRDtBQWpCSztBQXlCTjs7a0JBRWMsVyIsImZpbGUiOiJvbi1uZXh0LWZyYW1lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cbmNvbnN0IGhhc1JBRiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSA/IHRydWUgOiBmYWxzZTtcblxubGV0IG9uTmV4dEZyYW1lO1xuXG5pZiAoaGFzUkFGKSB7XG4gIG9uTmV4dEZyYW1lID0gKGNhbGxiYWNrKSA9PiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcblxufSBlbHNlIHtcbiAgLypcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICBcbiAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG5cbiAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgXG4gICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgXG4gICAgTUlUIGxpY2Vuc2VcbiAgKi9cbiAgbGV0IGxhc3RUaW1lID0gMDtcblxuICBvbk5leHRGcmFtZSA9IChjYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2LjcgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKGxhc3RUaW1lKSwgdGltZVRvQ2FsbCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9uTmV4dEZyYW1lOyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFBd0IsZ0I7QUFBVCxTQUFTLGdCQUFULENBQTBCLGVBQTFCLEVBQTJDOzs7Ozs7QUFNeEQsTUFBSSxpQkFBaUIsRUFBckI7QUFDQSxNQUFJLDBCQUEwQixFQUE5Qjs7QUFFQSxTQUFPO0FBQ0wsY0FBVSxVQUFDLFFBQUQsRUFBYztBQUN0Qjs7QUFFQSxVQUFJLHdCQUF3QixPQUF4QixDQUFnQyxRQUFoQyxNQUE4QyxDQUFDLENBQW5ELEVBQXNEO0FBQ3BELGdDQUF3QixJQUF4QixDQUE2QixRQUE3QjtBQUNEO0FBQ0YsS0FQSTs7QUFTTCxZQUFRLFVBQUMsUUFBRCxFQUFjO0FBQ3BCLFVBQU0sa0JBQWtCLHdCQUF3QixPQUF4QixDQUFnQyxRQUFoQyxDQUF4QjtBQUNBLFVBQUksb0JBQW9CLENBQUMsQ0FBekIsRUFBNEI7QUFDMUIsZ0NBQXdCLE1BQXhCLENBQStCLGVBQS9CLEVBQWdELENBQWhEO0FBQ0Q7QUFDRixLQWRJOztBQWdCTCxhQUFTLFlBQU07OztBQUFBLGlCQUUrQixDQUFDLHVCQUFELEVBQTBCLGNBQTFCLENBRi9COzs7QUFFWixvQkFGWTtBQUVJLDZCQUZKO0FBS2IsOEJBQXdCLE1BQXhCLEdBQWlDLENBQWpDOzs7QUFHQSxVQUFNLGVBQWUsZUFBZSxNQUFwQztBQUNBLFdBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxZQUFwQixFQUFrQyxHQUFsQyxFQUF1QztBQUNyQyx1QkFBZSxDQUFmO0FBQ0Q7QUFDRjtBQTVCSSxHQUFQO0FBOEJEIiwiZmlsZSI6ImNyZWF0ZS1yZW5kZXItc3RlcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKSB7XG4gIC8qKlxuICAgKiBXZSB1c2UgdHdvIGFycmF5cywgb25lIGZvciB0aGlzIGZyYW1lIGFuZCBvbmUgdG8gcXVldWUgZm9yIHRoZVxuICAgKiBuZXh0IGZyYW1lLCByZXVzaW5nIGVhY2ggdG8gYXZvaWQgR0MuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gIGxldCBmdW5jdGlvbnNUb1J1biA9IFtdO1xuICBsZXQgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUgPSBbXTtcblxuICByZXR1cm4ge1xuICAgIHNjaGVkdWxlOiAoY2FsbGJhY2spID0+IHtcbiAgICAgIHN0YXJ0UmVuZGVyTG9vcCgpO1xuICAgICAgLy8gSWYgdGhpcyBjYWxsYmFjayBpc24ndCBhbHJlYWR5IHNjaGVkdWxlZCB0byBydW4gbmV4dCBmcmFtZVxuICAgICAgaWYgKGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spID09PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2FuY2VsOiAoY2FsbGJhY2spID0+IHtcbiAgICAgIGNvbnN0IGluZGV4T2ZDYWxsYmFjayA9IGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgaWYgKGluZGV4T2ZDYWxsYmFjayAhPT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuc3BsaWNlKGluZGV4T2ZDYWxsYmFjaywgMSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHByb2Nlc3M6ICgpID0+IHtcbiAgICAgIC8vIFN3YXAgdGhpcyBmcmFtZSBhbmQgbmV4dCBmcmFtZSBhcnJheXMgdG8gYXZvaWQgR0NcbiAgICAgIFtmdW5jdGlvbnNUb1J1biwgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWVdID0gW2Z1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLCBmdW5jdGlvbnNUb1J1bl07XG5cbiAgICAgIC8vIENsZWFyIG5leHQgZnJhbWUgbGlzdFxuICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUubGVuZ3RoID0gMDtcblxuICAgICAgLy8gRXhlY3V0ZSBhbGwgb2YgdGhpcyBmcmFtZSdzIGZ1bmN0aW9uc1xuICAgICAgY29uc3QgbnVtVGhpc0ZyYW1lID0gZnVuY3Rpb25zVG9SdW4ubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UaGlzRnJhbWU7IGkrKykge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bltpXSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3JlbmRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBWXdCLHdCOztBQVp4Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU0sWUFBWSxXQUFsQjtBQUNBLElBQU0sZUFBZTtBQUNuQixLQUFHLFlBQVksR0FESTtBQUVuQixLQUFHLFlBQVksR0FGSTtBQUduQixLQUFHLFlBQVk7QUFISSxDQUFyQjs7QUFNZSxTQUFTLHdCQUFULENBQWtDLE9BQWxDLEVBQTJDLEtBQTNDLEVBQWtELGFBQWxELEVBQWlFLDBCQUFqRSxFQUE2RjtBQUMxRyxNQUFJLGlCQUFpQixFQUFyQjtBQUNBLE1BQUksa0JBQWtCLEVBQXRCO0FBQ0EsTUFBSSxlQUFlLEtBQW5CO0FBQ0EsTUFBSSxnQkFBZ0IsS0FBcEI7Ozs7QUFJQSxNQUFNLG1CQUFtQixjQUFjLE1BQXZDO0FBQ0EsT0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLGdCQUFwQixFQUFzQyxHQUF0QyxFQUEyQztBQUN6QyxRQUFNLE1BQU0sY0FBYyxDQUFkLENBQVo7Ozs7QUFJQSxRQUFJLHlCQUFlLEdBQWYsQ0FBSixFQUF5QjtBQUN2QixxQkFBZSxJQUFmOztBQUVBLFdBQUssSUFBSSxJQUFULElBQWdCLEtBQWhCLEVBQXVCO0FBQ3JCLFlBQUkseUJBQWUsSUFBZixLQUF1QixjQUFjLE9BQWQsQ0FBc0IsSUFBdEIsTUFBK0IsQ0FBQyxDQUEzRCxFQUE4RDtBQUM1RCx3QkFBYyxJQUFkLENBQW1CLElBQW5CO0FBQ0Q7QUFDRjs7QUFFRDtBQUNEO0FBQ0Y7O0FBRUQsTUFBTSx3QkFBd0IsY0FBYyxNQUE1QztBQUNBLE9BQUssSUFBSSxLQUFJLENBQWIsRUFBZ0IsS0FBSSxxQkFBcEIsRUFBMkMsSUFBM0MsRUFBZ0Q7QUFDOUMsUUFBSSxRQUFNLGNBQWMsRUFBZCxDQUFWO0FBQ0EsUUFBSSxRQUFRLE1BQU0sS0FBTixDQUFaOztBQUVBLFFBQUksYUFBYSxLQUFiLENBQUosRUFBdUI7QUFDckIsY0FBTSxhQUFhLEtBQWIsQ0FBTjtBQUNEOzs7QUFHRCxRQUFJLHFCQUFXLEtBQVgsTUFBb0Isa0JBQU0sS0FBTixLQUFnQixrQkFBTSxLQUFOLENBQXBDLEtBQXFELHFCQUFXLEtBQVgsRUFBZ0IsU0FBekUsRUFBb0Y7QUFDbEYsY0FBUSxxQkFBVyxLQUFYLEVBQWdCLFNBQWhCLENBQTBCLEtBQTFCLENBQVI7QUFDRDs7QUFFRCxRQUFJLHlCQUFlLEtBQWYsQ0FBSixFQUF5QjtBQUN2Qix5QkFBbUIsUUFBTSxHQUFOLEdBQVksS0FBWixHQUFvQixJQUF2QztBQUNBLHNCQUFpQixVQUFRLGFBQWEsQ0FBdEIsR0FBMkIsSUFBM0IsR0FBa0MsYUFBbEQ7QUFFRCxLQUpELE1BSU87QUFDTCx3QkFBa0IsTUFBTSx3QkFBUyxLQUFULEVBQWMsSUFBZCxDQUFOLEdBQTRCLEdBQTVCLEdBQWtDLEtBQXBEO0FBQ0Q7QUFDRjs7O0FBR0QsTUFBSSxZQUFKLEVBQWtCO0FBQ2hCLFFBQUksQ0FBQyxhQUFELElBQWtCLDBCQUF0QixFQUFrRDtBQUNoRCx5QkFBbUIsYUFBYSxDQUFiLEdBQWlCLEtBQXBDO0FBQ0Q7O0FBRUQsc0JBQWtCLE1BQU0sd0JBQVMsV0FBVCxFQUFzQixJQUF0QixDQUFOLEdBQW9DLEdBQXBDLEdBQTBDLGVBQTVEO0FBQ0Q7O0FBRUQsVUFBUSxLQUFSLENBQWMsT0FBZCxJQUF5QixjQUF6QjtBQUNEIiwiZmlsZSI6InJlbmRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL3RyYW5zZm9ybS1wcm9wcyc7XG5pbXBvcnQgdmFsdWVUeXBlcyBmcm9tICcuL3ZhbHVlLXR5cGVzJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcbmltcG9ydCB7IGlzTnVtLCBpc09iaiB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5cbmNvbnN0IFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuY29uc3QgdHJhbnNsYXRlTWFwID0ge1xuICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gIHk6IFRSQU5TTEFURSArICdZJyxcbiAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZFN0eWxlUHJvcGVydHlTdHJpbmcoZWxlbWVudCwgc3RhdGUsIGNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gIGxldCBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICBsZXQgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gIGxldCBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgbGV0IHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAvLyBGaXJzdCBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGNoYW5nZWQgdHJhbnNmb3JtIHZhbHVlc1xuICAvLyBhbmQgaWYgdHJ1ZSBhZGQgYWxsIHRyYW5zZm9ybSB2YWx1ZXNcbiAgY29uc3QgbnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNoYW5nZWRWYWx1ZXM7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNoYW5nZWRWYWx1ZXNbaV07XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdHJhbnNmb3JtIHByb3BlcnR5LCBhZGQgYWxsIG90aGVyIHRyYW5zZm9ybSBwcm9wc1xuICAgIC8vIHRvIGNoYW5nZWRWYWx1ZXMgYW5kIHRoZW4gYnJlYWtcbiAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldICYmIGNoYW5nZWRWYWx1ZXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNoYW5nZWRWYWx1ZXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRvdGFsTnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsTnVtQ2hhbmdlZFZhbHVlczsgaSsrKSB7XG4gICAgbGV0IGtleSA9IGNoYW5nZWRWYWx1ZXNbaV07XG4gICAgbGV0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgIGlmICh0cmFuc2xhdGVNYXBba2V5XSkge1xuICAgICAga2V5ID0gdHJhbnNsYXRlTWFwW2tleV07XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIG51bWJlciBvciBvYmplY3QgYW5kIHdlIGhhdmUgZmlsdGVyLCBhcHBseSBmaWx0ZXJcbiAgICBpZiAodmFsdWVUeXBlc1trZXldICYmIChpc051bSh2YWx1ZSkgfHwgaXNPYmoodmFsdWUpKSAmJiB2YWx1ZVR5cGVzW2tleV0udHJhbnNmb3JtKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlVHlwZXNba2V5XS50cmFuc2Zvcm0odmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IHRyYW5zbGF0ZU1hcC56KSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIHByZWZpeGVyKGtleSwgdHJ1ZSkgKyAnOicgKyB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSBoYXZlIHRyYW5zZm9ybSBwcm9wcywgYnVpbGQgYSB0cmFuc2Zvcm0gc3RyaW5nXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSB0cmFuc2xhdGVNYXAueiArICcoMCknO1xuICAgIH1cblxuICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIHByZWZpeGVyKCd0cmFuc2Zvcm0nLCB0cnVlKSArICc6JyArIHRyYW5zZm9ybVN0cmluZztcbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBwcm9wZXJ0eVN0cmluZztcbn1cbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNLE9BQU8sQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBYjs7QUFFQSxJQUFJLGlCQUFpQjtBQUNuQixLQUFHLElBRGdCO0FBRW5CLEtBQUcsSUFGZ0I7QUFHbkIsS0FBRztBQUhnQixDQUFyQjs7QUFNQSxJQUFNLFFBQVEsT0FBZDtBQUNBLElBQU0sU0FBUyxRQUFmO0FBQ0EsSUFBTSx3QkFBd0Isc0JBQTlCO0FBQ0EsSUFBTSxRQUFRLENBQUMsV0FBRCxFQUFjLEtBQWQsRUFBcUIsTUFBckIsRUFBNkIsTUFBN0IsRUFBcUMscUJBQXJDLENBQWQ7O0FBRUEsZUFBZSxNQUFmLElBQXlCLGVBQWUsS0FBZixJQUF3QixlQUFlLHFCQUFmLElBQXdDLElBQXpGOztBQUVBLE1BQU0sT0FBTixDQUFjLFVBQUMsSUFBRDtBQUFBLFNBQVUsS0FBSyxPQUFMLENBQWEsVUFBQyxJQUFEO0FBQUEsV0FBVSxlQUFlLE9BQU8sSUFBdEIsSUFBOEIsSUFBeEM7QUFBQSxHQUFiLENBQVY7QUFBQSxDQUFkOztrQkFFZSxjIiwiZmlsZSI6InRyYW5zZm9ybS1wcm9wcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4ZXMgPSBbJ1gnLCAnWScsICdaJ107XG5cbmxldCB0cmFuc2Zvcm1Qcm9wcyA9IHtcbiAgeDogdHJ1ZSxcbiAgeTogdHJ1ZSxcbiAgejogdHJ1ZVxufTtcblxuY29uc3QgU0NBTEUgPSAnc2NhbGUnO1xuY29uc3QgUk9UQVRFID0gJ3JvdGF0ZSc7XG5jb25zdCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xuY29uc3QgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKCh0ZXJtKSA9PiBheGVzLmZvckVhY2goKGF4aXMpID0+IHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWUpKTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNmb3JtUHJvcHM7Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7a0JBQ2U7O0FBRWIsMEJBRmE7QUFHYixvQ0FIYTtBQUliLGlDQUphO0FBS2IseUJBTGE7QUFNYiwyQkFOYTs7O0FBU2IsZ0NBVGE7QUFVYixtQ0FWYTtBQVdiLHFDQVhhO0FBWWIsc0NBWmE7QUFhYixvQ0FiYTtBQWNiLDhCQWRhOzs7QUFpQmIsdUJBakJhO0FBa0JiLHdCQWxCYTs7O0FBcUJiLDZCQXJCYTtBQXNCYiw4QkF0QmE7QUF1QmIsOEJBdkJhO0FBd0JiLDhCQXhCYTtBQXlCYiwwQkF6QmE7QUEwQmIsMkJBMUJhO0FBMkJiLDJCQTNCYTtBQTRCYiwyQkE1QmE7QUE2QmIsNEJBN0JhO0FBOEJiLDRCQTlCYTtBQStCYiwwQkEvQmE7QUFnQ2IsNEJBaENhO0FBaUNiLDRCQWpDYTtBQWtDYiw0QkFsQ2E7QUFtQ2IsNkJBbkNhO0FBb0NiO0FBcENhLEMiLCJmaWxlIjoidmFsdWUtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbHBoYSwgY29sb3IsIGRlZ3JlZXMsIHNjYWxlLCBweCB9IGZyb20gJy4uLy4uL2luYy92YWx1ZS10eXBlcyc7IFxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBDb2xvciBwcm9wc1xuICBjb2xvcjogY29sb3IsXG4gIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gIG91dGxpbmVDb2xvcjogY29sb3IsXG4gIGZpbGw6IGNvbG9yLFxuICBzdHJva2U6IGNvbG9yLFxuXG4gIC8vIEJvcmRlciBwcm9wc1xuICBib3JkZXJDb2xvcjogY29sb3IsXG4gIGJvcmRlclRvcENvbG9yOiBjb2xvcixcbiAgYm9yZGVyUmlnaHRDb2xvcjogY29sb3IsXG4gIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvcixcbiAgYm9yZGVyTGVmdENvbG9yOiBjb2xvcixcbiAgYm9yZGVyUmFkaXVzOiBweCxcblxuICAvLyBQb3NpdGlvbmluZ1xuICB3aWR0aDogcHgsXG4gIGhlaWdodDogcHgsICBcblxuICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICByb3RhdGU6IGRlZ3JlZXMsXG4gIHJvdGF0ZVg6IGRlZ3JlZXMsXG4gIHJvdGF0ZVk6IGRlZ3JlZXMsXG4gIHJvdGF0ZVo6IGRlZ3JlZXMsXG4gIHNjYWxlOiBzY2FsZSxcbiAgc2NhbGVYOiBzY2FsZSxcbiAgc2NhbGVZOiBzY2FsZSxcbiAgc2NhbGVaOiBzY2FsZSxcbiAgc2tld1g6IGRlZ3JlZXMsXG4gIHNrZXdZOiBkZWdyZWVzLFxuICBkaXN0YW5jZTogcHgsXG4gIHRyYW5zbGF0ZVg6IHB4LFxuICB0cmFuc2xhdGVZOiBweCxcbiAgdHJhbnNsYXRlWjogcHgsXG4gIHBlcnNwZWN0aXZlOiBweCxcbiAgb3BhY2l0eTogYWxwaGFcbn07XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3ByZWZpeGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxJQUFNLGFBQWEsRUFBbkI7QUFDQSxJQUFNLFlBQVksRUFBbEI7QUFDQSxJQUFNLFdBQVcsQ0FBQyxRQUFELEVBQVUsS0FBVixFQUFnQixHQUFoQixFQUFvQixJQUFwQixFQUEwQixFQUExQixDQUFqQjtBQUNBLElBQU0sY0FBYyxTQUFTLE1BQTdCO0FBQ0EsSUFBSSxvQkFBSjs7Ozs7Ozs7QUFRQSxJQUFNLGFBQWEsVUFBQyxHQUFELEVBQVM7QUFDMUIsZ0JBQWMsZUFBZSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBN0I7O0FBRUEsT0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFdBQXBCLEVBQWlDLEdBQWpDLEVBQXNDO0FBQ3BDLFFBQU0sU0FBUyxTQUFTLENBQVQsQ0FBZjtBQUNBLFFBQU0sV0FBWSxXQUFXLEVBQTdCO0FBQ0EsUUFBTSx1QkFBdUIsV0FBVyxHQUFYLEdBQWlCLFNBQVMsSUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLFdBQWQsRUFBVCxHQUF1QyxJQUFJLEtBQUosQ0FBVSxDQUFWLENBQXJGOztBQUVBLFFBQUksd0JBQXdCLFlBQVksS0FBeEMsRUFBK0M7QUFDN0MsaUJBQVcsR0FBWCxJQUFrQixvQkFBbEI7QUFDQSxnQkFBVSxHQUFWLFVBQXFCLFdBQVcsRUFBWCxHQUFnQixHQUFyQyxJQUE0Qyx3QkFBWSxvQkFBWixDQUE1QztBQUNEO0FBQ0Y7QUFDRixDQWJEOztrQkFlZSxVQUFDLEdBQUQsRUFBTSxVQUFOLEVBQXFCO0FBQ2xDLE1BQU0sUUFBUSxhQUFhLFNBQWIsR0FBeUIsVUFBdkM7O0FBRUEsTUFBSSxDQUFDLE1BQU0sR0FBTixDQUFMLEVBQWlCO0FBQ2YsZUFBVyxHQUFYO0FBQ0Q7O0FBRUQsU0FBTyxNQUFNLEdBQU4sQ0FBUDtBQUNELEMiLCJmaWxlIjoicHJlZml4ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW1lbFRvRGFzaCB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5cbmNvbnN0IGNhbWVsQ2FjaGUgPSB7fTtcbmNvbnN0IGRhc2hDYWNoZSA9IHt9O1xuY29uc3QgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsJ01veicsJ08nLCdtcycsICcnXTtcbmNvbnN0IG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xubGV0IHRlc3RFbGVtZW50O1xuXG4vKlxuICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gIFxuICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xuY29uc3QgdGVzdFByZWZpeCA9IChrZXkpID0+IHtcbiAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICBjb25zdCBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICBjb25zdCBub1ByZWZpeCA9IChwcmVmaXggPT09ICcnKTtcbiAgICBjb25zdCBwcmVmaXhlZFByb3BlcnR5TmFtZSA9IG5vUHJlZml4ID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgaWYgKHByZWZpeGVkUHJvcGVydHlOYW1lIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICBjYW1lbENhY2hlW2tleV0gPSBwcmVmaXhlZFByb3BlcnR5TmFtZTtcbiAgICAgIGRhc2hDYWNoZVtrZXldID0gYCR7KG5vUHJlZml4ID8gJycgOiAnLScpfSR7Y2FtZWxUb0Rhc2gocHJlZml4ZWRQcm9wZXJ0eU5hbWUpfWA7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoa2V5LCBhc0Rhc2hDYXNlKSA9PiB7XG4gIGNvbnN0IGNhY2hlID0gYXNEYXNoQ2FzZSA/IGRhc2hDYWNoZSA6IGNhbWVsQ2FjaGU7XG5cbiAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgdGVzdFByZWZpeChrZXkpO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFLd0IsSzs7QUFMeEI7O0FBQ0E7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLE1BQXRCOztBQUVlLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0IsSUFBdEIsRUFBNEI7QUFDekMsTUFBSSxlQUFlLEtBQW5CO0FBQ0EsTUFBTSxRQUFRLEVBQWQ7QUFDQSxNQUFNLFFBQVEsTUFBTSxLQUFOLEtBQWdCLFNBQWhCLEdBQTRCLE1BQU0sS0FBTixJQUFlLGFBQTNDLEdBQTJELE1BQU0sTUFBTixJQUFnQixDQUF6RjtBQUNBLE1BQU0sU0FBUyxNQUFNLE1BQU4sS0FBaUIsU0FBakIsR0FBNkIsTUFBTSxNQUFOLElBQWdCLGFBQTdDLEdBQTZELFNBQVMsQ0FBckY7QUFDQSxNQUFNLG1CQUFtQixLQUFLLEtBQUwsSUFBYyxDQUFDLE1BQU0sT0FBTixJQUFpQixFQUFsQixJQUF3QixHQUF0QyxJQUE2QyxLQUFLLENBQTNFO0FBQ0EsTUFBTSxtQkFBbUIsS0FBSyxNQUFMLElBQWUsQ0FBQyxNQUFNLE9BQU4sSUFBaUIsRUFBbEIsSUFBd0IsR0FBdkMsSUFBOEMsS0FBSyxDQUE1RTtBQUNBLE1BQU0sa0JBQWtCLENBQUUsZ0JBQUYsSUFBc0IsUUFBUSxDQUE5QixDQUF4QjtBQUNBLE1BQU0sa0JBQWtCLENBQUUsZ0JBQUYsSUFBc0IsU0FBUyxDQUEvQixDQUF4QjtBQUNBLE1BQU0sZ0JBQWdCLG1CQUFtQixLQUF6QztBQUNBLE1BQU0sZ0JBQWdCLG1CQUFtQixNQUF6QztBQUNBLE1BQU0sWUFBWTtBQUNoQiw4QkFBd0IsTUFBTSxVQUE5QixVQUE2QyxNQUFNLFVBQW5ELE9BRGdCO0FBRWhCLDBCQUFvQixlQUFwQixVQUF3QyxlQUF4QyxnQkFBa0UsS0FBbEUsVUFBNEUsTUFBNUUsb0JBQWlHLGFBQWpHLFVBQW1ILGFBQW5ILE9BRmdCO0FBR2hCLHdCQUFrQixNQUFNLE1BQXhCLFVBQW1DLGdCQUFuQyxVQUF3RCxnQkFBeEQsT0FIZ0I7QUFJaEIsc0JBQWdCLE1BQU0sS0FBdEIsT0FKZ0I7QUFLaEIsc0JBQWdCLE1BQU0sS0FBdEI7QUFMZ0IsR0FBbEI7O0FBUUEsT0FBSyxJQUFJLEdBQVQsSUFBZ0IsS0FBaEIsRUFBdUI7QUFDckIsUUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUM3QixVQUFJLHlCQUFlLEdBQWYsQ0FBSixFQUF5QjtBQUN2Qix1QkFBZSxJQUFmO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsY0FBTSx3QkFBWSxHQUFaLENBQU4sSUFBMEIsTUFBTSxHQUFOLENBQTFCO0FBQ0Q7QUFDRjtBQUNGOztBQUVELE1BQUksWUFBSixFQUFrQjtBQUNoQixVQUFNLFNBQU4sR0FBa0IsRUFBbEI7O0FBRUEsU0FBSyxJQUFJLElBQVQsSUFBZ0IsU0FBaEIsRUFBMkI7QUFDekIsVUFBSSxVQUFVLGNBQVYsQ0FBeUIsSUFBekIsQ0FBSixFQUFtQztBQUNqQyxZQUFNLGVBQWdCLFNBQVEsT0FBVCxHQUFvQixHQUFwQixHQUEwQixHQUEvQztBQUNBLGNBQU0sU0FBTixJQUFtQixVQUFVLElBQVYsRUFBZSxPQUFmLENBQXVCLFlBQXZCLEVBQXFDLFlBQXJDLENBQW5CO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQU8sS0FBUDtBQUNEIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxUb0Rhc2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuXG5jb25zdCBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZChzdGF0ZSwgZGF0YSkge1xuICBsZXQgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIGNvbnN0IHByb3BzID0ge307XG4gIGNvbnN0IHNjYWxlID0gc3RhdGUuc2NhbGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlIHx8IFpFUk9fTk9UX1pFUk8gOiBzdGF0ZS5zY2FsZVggfHwgMTtcbiAgY29uc3Qgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDE7XG4gIGNvbnN0IHRyYW5zZm9ybU9yaWdpblggPSBkYXRhLndpZHRoICogKChzdGF0ZS5vcmlnaW5YIHx8IDUwKSAvIDEwMCkgKyBkYXRhLng7XG4gIGNvbnN0IHRyYW5zZm9ybU9yaWdpblkgPSBkYXRhLmhlaWdodCAqICgoc3RhdGUub3JpZ2luWSB8fCA1MCkgLyAxMDApICsgZGF0YS55O1xuICBjb25zdCBzY2FsZVRyYW5zZm9ybVggPSAtIHRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKTtcbiAgY29uc3Qgc2NhbGVUcmFuc2Zvcm1ZID0gLSB0cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpO1xuICBjb25zdCBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlO1xuICBjb25zdCBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWTtcbiAgY29uc3QgdHJhbnNmb3JtID0ge1xuICAgIHRyYW5zbGF0ZTogYHRyYW5zbGF0ZSgke3N0YXRlLnRyYW5zbGF0ZVh9LCAke3N0YXRlLnRyYW5zbGF0ZVl9KSBgLFxuICAgIHNjYWxlOiBgdHJhbnNsYXRlKCR7c2NhbGVUcmFuc2Zvcm1YfSwgJHtzY2FsZVRyYW5zZm9ybVl9KSBzY2FsZSgke3NjYWxlfSwgJHtzY2FsZVl9KSB0cmFuc2xhdGUoJHtzY2FsZVJlcGxhY2VYfSwgJHtzY2FsZVJlcGxhY2VZfSkgYCxcbiAgICByb3RhdGU6IGByb3RhdGUoJHtzdGF0ZS5yb3RhdGV9LCAke3RyYW5zZm9ybU9yaWdpblh9LCAke3RyYW5zZm9ybU9yaWdpbll9KSBgLFxuICAgIHNrZXdYOiBgc2tld1goJHtzdGF0ZS5za2V3WH0pIGAsXG4gICAgc2tld1k6IGBza2V3WSgke3N0YXRlLnNrZXdZfSkgYFxuICB9O1xuXG4gIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHNbY2FtZWxUb0Rhc2goa2V5KV0gPSBzdGF0ZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgIGZvciAobGV0IGtleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSAoa2V5ID09PSAnc2NhbGUnKSA/ICcxJyA6ICcwJztcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtrZXldLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn0iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7a0JBRWU7QUFDYix5QkFEYTtBQUViLDJCQUZhO0FBR2IsMEJBSGE7QUFJYiwyQkFKYTtBQUtiLDJCQUxhO0FBTWIsd0JBTmE7QUFPYiw2QkFQYTtBQVFiLDRCQVJhO0FBU2IsZ0NBVGE7QUFVYjtBQVZhLEMiLCJmaWxlIjoidmFsdWUtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbHBoYSwgY29sb3IsIGNvbXBsZXgsIHNjYWxlIH0gZnJvbSAnLi4vLi4vaW5jL3ZhbHVlLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaWxsOiBjb2xvcixcbiAgc3Ryb2tlOiBjb2xvcixcbiAgc2NhbGU6IHNjYWxlLFxuICBzY2FsZVg6IHNjYWxlLFxuICBzY2FsZVk6IHNjYWxlLFxuICBkOiBjb21wbGV4LFxuICBwb2ludHM6IGNvbXBsZXgsXG4gIG9wYWNpdHk6IGFscGhhLFxuICBmaWxsT3BhY2l0eTogYWxwaGEsXG4gIHN0cm9rZU9wYWNpdHk6IGFscGhhXG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvYnVpbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTUEsSUFBTSxrQkFBa0IsVUFBQyxPQUFELEVBQVUsTUFBVjtBQUFBLFNBQXNCLFdBQVcsT0FBWCxJQUFzQixHQUF2QixHQUE4QixNQUE5QixHQUF1QyxJQUE1RDtBQUFBLENBQXhCOztrQkFFZSxVQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQ2hDLE1BQU0sU0FBUyxFQUFmO0FBQ0EsTUFBTSxrQkFBa0I7QUFDdEIsWUFBUSxDQURjO0FBRXRCLGFBQVMsU0FBUztBQUZJLEdBQXhCO0FBSUEsTUFBSSxlQUFlLEtBQW5COztBQUVBLE9BQUssSUFBSSxHQUFULElBQWdCLEtBQWhCLEVBQXVCO0FBQ3JCLFFBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDN0IsVUFBTSxRQUFRLE1BQU0sR0FBTixDQUFkOztBQUVBLGNBQVEsR0FBUjtBQUNBLGFBQUssUUFBTDtBQUNBLGFBQUssU0FBTDtBQUNFLHlCQUFlLElBQWY7QUFDQSwwQkFBZ0IsR0FBaEIsSUFBdUIsZ0JBQWdCLEtBQWhCLEVBQXVCLE1BQXZCLENBQXZCO0FBQ0E7QUFDRixhQUFLLFFBQUw7QUFDRSxpQkFBTyxtQkFBUCxJQUE4QixnQkFBZ0IsQ0FBQyxLQUFqQixFQUF3QixNQUF4QixDQUE5QjtBQUNBO0FBQ0Y7QUFDRSxpQkFBTyxHQUFQLElBQWMsS0FBZDtBQVZGO0FBWUQ7QUFDRjs7QUFFRCxNQUFJLFlBQUosRUFBa0I7QUFDaEIsV0FBTyxrQkFBUCxJQUE2QixnQkFBZ0IsTUFBaEIsR0FBeUIsR0FBekIsR0FBK0IsZ0JBQWdCLE9BQTVFO0FBQ0Q7O0FBRUQsU0FBTyxNQUFQO0FBQ0QsQyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG5jb25zdCBwZXJjZW50VG9QaXhlbHMgPSAocGVyY2VudCwgbGVuZ3RoKSA9PiAocGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCkgKiBsZW5ndGggKyAncHgnO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGxlbmd0aCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB7fTtcbiAgY29uc3QgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgIGxlbmd0aDogMCxcbiAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gIH07XG4gIGxldCBoYXNEYXNoQXJyYXkgPSBmYWxzZTtcblxuICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn07Il19

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDk2MmQxNjkxNDNhODAxMTM2YWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb2xvci10d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGFyYWxsZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wb2ludGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3BhcnNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9vbi1uZXh0LWZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvdmFsdWUtdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmcvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmcvdmFsdWUtdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7QUFDQSw0Q0FBMkMsbVg7Ozs7OztBQ1QzQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rix3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyx1MEU7Ozs7OztBQzVMM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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ZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMDk2MmQxNjkxNDNhODAxMTM2YWNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi9wb3Btb3Rpb24nKTtcblxudmFyIHBvcG1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wb3Btb3Rpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG53aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTluYkc5aVlXd3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFUczdTVUZCV1N4VE96czdPMEZCUTFvc1QwRkJUeXhUUVVGUUxFZEJRVzFDTEZOQlFXNUNJaXdpWm1sc1pTSTZJbWRzYjJKaGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENBcUlHRnpJSEJ2Y0cxdmRHbHZiaUJtY205dElDY3VMM0J2Y0cxdmRHbHZiaWM3WEc1M2FXNWtiM2N1Y0c5d2JXOTBhVzl1SUQwZ2NHOXdiVzkwYVc5dU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN2Z1BhdGggPSBleHBvcnRzLnN2ZyA9IGV4cG9ydHMuY3NzID0gZXhwb3J0cy5SZW5kZXJlciA9IGV4cG9ydHMudmFsdWUgPSBleHBvcnRzLnN0YWdnZXIgPSBleHBvcnRzLnR3ZWVuID0gZXhwb3J0cy5wb2ludGVyID0gZXhwb3J0cy5waHlzaWNzID0gZXhwb3J0cy5wYXJhbGxlbCA9IGV4cG9ydHMub2Zmc2V0ID0gZXhwb3J0cy5kZWxheSA9IGV4cG9ydHMuY3Jvc3NGYWRlID0gZXhwb3J0cy5jb21wb3NpdGUgPSBleHBvcnRzLmNvbG9yVHdlZW4gPSBleHBvcnRzLmNoYWluID0gZXhwb3J0cy5ibGVuZFR3ZWVucyA9IGV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy52YWx1ZVR5cGVzID0gZXhwb3J0cy50cmFuc2Zvcm0gPSBleHBvcnRzLmVhc2luZyA9IGV4cG9ydHMuY2FsYyA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4vZnJhbWVzeW5jJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVN0YXJ0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lU3RhcnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lVXBkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVJlbmRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVJlbmRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVFbmQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVFbmQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lU3RhcnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVTdGFydDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVVcGRhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVVcGRhdGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lUmVuZGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lUmVuZGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZUVuZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZUVuZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3RpbWVTaW5jZUxhc3RGcmFtZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3VycmVudEZyYW1lVGltZXN0YW1wJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jdXJyZW50RnJhbWVUaW1lc3RhbXA7XG4gIH1cbn0pO1xuXG52YXIgX2NhbGMyID0gcmVxdWlyZSgnLi9pbmMvY2FsYycpO1xuXG52YXIgX2NhbGMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY2FsYzIpO1xuXG52YXIgX2Vhc2luZzIgPSByZXF1aXJlKCcuL2luYy9lYXNpbmcnKTtcblxudmFyIF9lYXNpbmcgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfZWFzaW5nMik7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdHJhbnNmb3JtID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3RyYW5zZm9ybWVycyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSByZXF1aXJlKCcuL2luYy92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdmFsdWVUeXBlczIpO1xuXG52YXIgX2FjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMnKTtcblxudmFyIF9hY3Rpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FjdGlvbnMpO1xuXG52YXIgX2JsZW5kVHdlZW5zMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9ibGVuZC10d2VlbnMnKTtcblxudmFyIF9ibGVuZFR3ZWVuczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ibGVuZFR3ZWVuczIpO1xuXG52YXIgX2NoYWluMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jaGFpbicpO1xuXG52YXIgX2NoYWluMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoYWluMik7XG5cbnZhciBfY29sb3JUd2VlbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY29sb3ItdHdlZW4nKTtcblxudmFyIF9jb2xvclR3ZWVuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yVHdlZW4yKTtcblxudmFyIF9jb21wb3NpdGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NvbXBvc2l0ZScpO1xuXG52YXIgX2NvbXBvc2l0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGUyKTtcblxudmFyIF9jcm9zc0ZhZGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Nyb3NzLWZhZGUnKTtcblxudmFyIF9jcm9zc0ZhZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3Jvc3NGYWRlMik7XG5cbnZhciBfZGVsYXkyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2RlbGF5Jyk7XG5cbnZhciBfZGVsYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVsYXkyKTtcblxudmFyIF9vZmZzZXQyID0gcmVxdWlyZSgnLi9hY3Rpb25zL29mZnNldCcpO1xuXG52YXIgX29mZnNldDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vZmZzZXQyKTtcblxudmFyIF9wYXJhbGxlbDIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcGFyYWxsZWwnKTtcblxudmFyIF9wYXJhbGxlbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJhbGxlbDIpO1xuXG52YXIgX3BoeXNpY3MyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BoeXNpY3MnKTtcblxudmFyIF9waHlzaWNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BoeXNpY3MyKTtcblxudmFyIF9wb2ludGVyMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9wb2ludGVyJyk7XG5cbnZhciBfcG9pbnRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb2ludGVyMik7XG5cbnZhciBfdHdlZW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4yKTtcblxudmFyIF9zdGFnZ2VyMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9zdGFnZ2VyJyk7XG5cbnZhciBfc3RhZ2dlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGFnZ2VyMik7XG5cbnZhciBfdmFsdWUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3ZhbHVlJyk7XG5cbnZhciBfdmFsdWUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWUyKTtcblxudmFyIF9yZW5kZXJlcnMgPSByZXF1aXJlKCcuL3JlbmRlcmVycycpO1xuXG52YXIgX3JlbmRlcmVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW5kZXJlcnMpO1xuXG52YXIgX2NzczIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9jc3MnKTtcblxudmFyIF9jc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzMik7XG5cbnZhciBfc3ZnMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL3N2ZycpO1xuXG52YXIgX3N2ZzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmcyKTtcblxudmFyIF9zdmdQYXRoMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL3N2Zy1wYXRoJyk7XG5cbnZhciBfc3ZnUGF0aDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmV4cG9ydHMuY2FsYyA9IF9jYWxjO1xuZXhwb3J0cy5lYXNpbmcgPSBfZWFzaW5nO1xuZXhwb3J0cy50cmFuc2Zvcm0gPSBfdHJhbnNmb3JtO1xuZXhwb3J0cy52YWx1ZVR5cGVzID0gX3ZhbHVlVHlwZXM7XG5cbi8vIEFjdGlvbnNcblxuZXhwb3J0cy5BY3Rpb24gPSBfYWN0aW9uczIuZGVmYXVsdDtcbmV4cG9ydHMuYmxlbmRUd2VlbnMgPSBfYmxlbmRUd2VlbnMzLmRlZmF1bHQ7XG5leHBvcnRzLmNoYWluID0gX2NoYWluMy5kZWZhdWx0O1xuZXhwb3J0cy5jb2xvclR3ZWVuID0gX2NvbG9yVHdlZW4zLmRlZmF1bHQ7XG5leHBvcnRzLmNvbXBvc2l0ZSA9IF9jb21wb3NpdGUzLmRlZmF1bHQ7XG5leHBvcnRzLmNyb3NzRmFkZSA9IF9jcm9zc0ZhZGUzLmRlZmF1bHQ7XG5leHBvcnRzLmRlbGF5ID0gX2RlbGF5My5kZWZhdWx0O1xuZXhwb3J0cy5vZmZzZXQgPSBfb2Zmc2V0My5kZWZhdWx0O1xuZXhwb3J0cy5wYXJhbGxlbCA9IF9wYXJhbGxlbDMuZGVmYXVsdDtcbmV4cG9ydHMucGh5c2ljcyA9IF9waHlzaWNzMy5kZWZhdWx0O1xuZXhwb3J0cy5wb2ludGVyID0gX3BvaW50ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnR3ZWVuID0gX3R3ZWVuMy5kZWZhdWx0O1xuZXhwb3J0cy5zdGFnZ2VyID0gX3N0YWdnZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnZhbHVlID0gX3ZhbHVlMy5kZWZhdWx0O1xuXG4vLyBSZW5kZXJlcnNcblxuZXhwb3J0cy5SZW5kZXJlciA9IF9yZW5kZXJlcnMyLmRlZmF1bHQ7XG5leHBvcnRzLmNzcyA9IF9jc3MzLmRlZmF1bHQ7XG5leHBvcnRzLnN2ZyA9IF9zdmczLmRlZmF1bHQ7XG5leHBvcnRzLnN2Z1BhdGggPSBfc3ZnUGF0aDMuZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2IzQnRiM1JwYjI0dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHpRa0ZGUlN4Wk96czdPenM3YzBKQlEwRXNZVHM3T3pzN08zTkNRVU5CTEdFN096czdPenR6UWtGRFFTeFZPenM3T3pzN2MwSkJRMEVzYTBJN096czdPenR6UWtGRFFTeHRRanM3T3pzN08zTkNRVU5CTEcxQ096czdPenM3YzBKQlEwRXNaMEk3T3pzN096dHpRa0ZEUVN4clFqczdPenM3TzNOQ1FVTkJMSEZDT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdVVUZIVlN4Sk8xRkJRMEVzVFR0UlFVTkJMRk03VVVGRFFTeFZPenM3TzFGQlIwd3NUVHRSUVVOQkxGYzdVVUZEUVN4TE8xRkJRMEVzVlR0UlFVTkJMRk03VVVGRFFTeFRPMUZCUTBFc1N6dFJRVU5CTEUwN1VVRkRRU3hSTzFGQlEwRXNUenRSUVVOQkxFODdVVUZEUVN4TE8xRkJRMEVzVHp0UlFVTkJMRXM3T3pzN1VVRkhRU3hSTzFGQlEwRXNSenRSUVVOQkxFYzdVVUZEUVN4UElpd2labWxzWlNJNkluQnZjRzF2ZEdsdmJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHZJRVp5WVcxbGMzbHVZeUJ6WTJobFpIVnNaWEp6WEc1bGVIQnZjblFnZTF4dUlDQnZia1p5WVcxbFUzUmhjblFzWEc0Z0lHOXVSbkpoYldWVmNHUmhkR1VzWEc0Z0lHOXVSbkpoYldWU1pXNWtaWElzWEc0Z0lHOXVSbkpoYldWRmJtUXNYRzRnSUdOaGJtTmxiRTl1Um5KaGJXVlRkR0Z5ZEN4Y2JpQWdZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU3hjYmlBZ1kyRnVZMlZzVDI1R2NtRnRaVkpsYm1SbGNpeGNiaUFnWTJGdVkyVnNUMjVHY21GdFpVVnVaQ3hjYmlBZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbExGeHVJQ0JqZFhKeVpXNTBSbkpoYldWVWFXMWxjM1JoYlhCY2JuMGdabkp2YlNBbkxpOW1jbUZ0WlhONWJtTW5PMXh1WEc1bGVIQnZjblFnS2lCaGN5QmpZV3hqSUdaeWIyMGdKeTR2YVc1akwyTmhiR01uTzF4dVpYaHdiM0owSUNvZ1lYTWdaV0Z6YVc1bklHWnliMjBnSnk0dmFXNWpMMlZoYzJsdVp5YzdYRzVsZUhCdmNuUWdLaUJoY3lCMGNtRnVjMlp2Y20wZ1puSnZiU0FuTGk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6Snp0Y2JtVjRjRzl5ZENBcUlHRnpJSFpoYkhWbFZIbHdaWE1nWm5KdmJTQW5MaTlwYm1NdmRtRnNkV1V0ZEhsd1pYTW5PMXh1WEc0dkx5QkJZM1JwYjI1elhHNWxlSEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeWM3WEc1bGVIQnZjblFnWW14bGJtUlVkMlZsYm5NZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDJKc1pXNWtMWFIzWldWdWN5YzdYRzVsZUhCdmNuUWdZMmhoYVc0Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDJOb1lXbHVKenRjYm1WNGNHOXlkQ0JqYjJ4dmNsUjNaV1Z1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlqYjJ4dmNpMTBkMlZsYmljN1hHNWxlSEJ2Y25RZ1kyOXRjRzl6YVhSbElHWnliMjBnSnk0dllXTjBhVzl1Y3k5amIyMXdiM05wZEdVbk8xeHVaWGh3YjNKMElHTnliM056Um1Ga1pTQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlkzSnZjM010Wm1Ga1pTYzdYRzVsZUhCdmNuUWdaR1ZzWVhrZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDJSbGJHRjVKenRjYm1WNGNHOXlkQ0J2Wm1aelpYUWdabkp2YlNBbkxpOWhZM1JwYjI1ekwyOW1abk5sZENjN1hHNWxlSEJ2Y25RZ2NHRnlZV3hzWld3Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDNCaGNtRnNiR1ZzSnp0Y2JtVjRjRzl5ZENCd2FIbHphV056SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTl3YUhsemFXTnpKenRjYm1WNGNHOXlkQ0J3YjJsdWRHVnlJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OXdiMmx1ZEdWeUp6dGNibVY0Y0c5eWRDQjBkMlZsYmlCbWNtOXRJQ2N1TDJGamRHbHZibk12ZEhkbFpXNG5PMXh1Wlhod2IzSjBJSE4wWVdkblpYSWdabkp2YlNBbkxpOWhZM1JwYjI1ekwzTjBZV2RuWlhJbk8xeHVaWGh3YjNKMElIWmhiSFZsSUdaeWIyMGdKeTR2WVdOMGFXOXVjeTkyWVd4MVpTYzdYRzVjYmk4dklGSmxibVJsY21WeWMxeHVaWGh3YjNKMElGSmxibVJsY21WeUlHWnliMjBnSnk0dmNtVnVaR1Z5WlhKekp6dGNibVY0Y0c5eWRDQmpjM01nWm5KdmJTQW5MaTl5Wlc1a1pYSmxjbk12WTNOekp6dGNibVY0Y0c5eWRDQnpkbWNnWm5KdmJTQW5MaTl5Wlc1a1pYSmxjbk12YzNabkp6dGNibVY0Y0c5eWRDQnpkbWRRWVhSb0lHWnliMjBnSnk0dmNtVnVaR1Z5WlhKekwzTjJaeTF3WVhSb0p6dGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcG9wbW90aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zbW9vdGggPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBleHBvcnRzLmRpbGF0ZSA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuYW5nbGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG52YXIgdG9EZWNpbWFsID0gZnVuY3Rpb24gKG51bSkge1xuICB2YXIgcHJlY2lzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMiA6IGFyZ3VtZW50c1sxXTtcblxuICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG5cbnZhciBaRVJPX1BPSU5UID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB6OiAwXG59O1xuXG52YXIgZGlzdGFuY2UxRCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICBcbiAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gIGFyZSBhdCAwLDBcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbnZhciBhbmdsZSA9IGV4cG9ydHMuYW5nbGUgPSBmdW5jdGlvbiAoYSkge1xuICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG4gIHJldHVybiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbnZhciBkZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgRGlsYXRlXG4gIFxuICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gIFxuICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgXG4gIGEgLS0tLS0tLS0tIGJcbiAgXG4gIHRvXG4gIFxuICBhIC0tLS0gYlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG52YXIgZGlsYXRlID0gZXhwb3J0cy5kaWxhdGUgPSBmdW5jdGlvbiAoYSwgYiwgZGlsYXRpb24pIHtcbiAgcmV0dXJuIGEgKyAoYiAtIGEpICogZGlsYXRpb247XG59O1xuXG4vKlxuICBEaXN0YW5jZVxuICBcbiAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG4gIFxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG52YXIgZGlzdGFuY2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24gKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuXG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICB9IGVsc2Uge1xuICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICB2YXIgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgdmFyIHpEZWx0YSA9ICgwLCBfdXRpbHMuaXNOdW0pKGEueikgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xufTtcblxuLypcbiAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xudmFyIGdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGZ1bmN0aW9uIChmcm9tLCB0bywgcHJvZ3Jlc3MpIHtcbiAgcmV0dXJuIC1wcm9ncmVzcyAqIGZyb20gKyBwcm9ncmVzcyAqIHRvICsgZnJvbTtcbn07XG5cbi8qXG4gIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gIFxuICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbnZhciBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgfTtcbn07XG5cbi8qXG4gIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xufTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbnZhciBzbW9vdGggPSBleHBvcnRzLnNtb290aCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uKSB7XG4gIHZhciBzbW9vdGhpbmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzNdO1xuICByZXR1cm4gdG9EZWNpbWFsKG9sZFZhbHVlICsgZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh4cHMpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xufTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xudmFyIHN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gKHN0ZXBzLCBwcm9ncmVzcykge1xuICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgdmFyIHRhcmdldCA9IDEgLSAxIC8gc3RlcHM7XG4gIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlkyRnNZeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCT3pzN096czdPenM3UVVGVFFTeEpRVUZOTEZsQlFWa3NWVUZCUXl4SFFVRkVMRVZCUVhkQ08wRkJRVUVzVFVGQmJFSXNVMEZCYTBJc2VVUkJRVTRzUTBGQlRUczdRVUZEZUVNc2RVSkJRVmtzUlVGQldpeEZRVUZyUWl4VFFVRnNRanRCUVVOQkxGTkJRVThzUzBGQlN5eExRVUZNTEVOQlFWY3NUVUZCVFN4VFFVRnFRaXhKUVVFNFFpeFRRVUZ5UXp0QlFVTkVMRU5CU0VRN08wRkJTMEVzU1VGQlRTeGhRVUZoTzBGQlEycENMRXRCUVVjc1EwRkVZenRCUVVWcVFpeExRVUZITEVOQlJtTTdRVUZIYWtJc1MwRkJSenRCUVVoakxFTkJRVzVDT3p0QlFVMUJMRWxCUVUwc1lVRkJZU3hWUVVGRExFTkJRVVFzUlVGQlNTeERRVUZLTzBGQlFVRXNVMEZCVlN4TFFVRkxMRWRCUVV3c1EwRkJVeXhKUVVGSkxFTkJRV0lzUTBGQlZqdEJRVUZCTEVOQlFXNUNPenM3T3pzN096czdPenM3UVVGWlR5eEpRVUZOTEhkQ1FVRlJMRlZCUVVNc1EwRkJSRHRCUVVGQkxFMUJRVWtzUTBGQlNpeDVSRUZCVVN4VlFVRlNPMEZCUVVFc1UwRkJkVUlzYVVKQlFXbENMRXRCUVVzc1MwRkJUQ3hEUVVGWExFVkJRVVVzUTBGQlJpeEhRVUZOTEVWQlFVVXNRMEZCYmtJc1JVRkJjMElzUlVGQlJTeERRVUZHTEVkQlFVMHNSVUZCUlN4RFFVRTVRaXhEUVVGcVFpeERRVUYyUWp0QlFVRkJMRU5CUVdRN096czdPenM3TzBGQlVVRXNTVUZCVFN3NFEwRkJiVUlzVlVGQlF5eFBRVUZFTzBGQlFVRXNVMEZCWVN4VlFVRlZMRXRCUVVzc1JVRkJaaXhIUVVGdlFpeEhRVUZxUXp0QlFVRkJMRU5CUVhwQ096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVzlDUVN4SlFVRk5MREJDUVVGVExGVkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVb3NSVUZCVHl4UlFVRlFPMEZCUVVFc1UwRkJiMElzU1VGQlN5eERRVUZETEVsQlFVa3NRMEZCVEN4SlFVRlZMRkZCUVc1RE8wRkJRVUVzUTBGQlpqczdPenM3T3pzN096czdRVUZYUVN4SlFVRk5MRGhDUVVGWExGVkJRVU1zUTBGQlJDeEZRVUYxUWp0QlFVRkJMRTFCUVc1Q0xFTkJRVzFDTEhsRVFVRm1MRlZCUVdVN096dEJRVVUzUXl4TlFVRkpMR3RDUVVGTkxFTkJRVTRzUTBGQlNpeEZRVUZqTzBGQlExb3NWMEZCVHl4WFFVRlhMRU5CUVZnc1JVRkJZeXhEUVVGa0xFTkJRVkE3T3p0QlFVZEVMRWRCU2tRc1RVRkpUenRCUVVOTUxGRkJRVTBzVTBGQlV5eFhRVUZYTEVWQlFVVXNRMEZCWWl4RlFVRm5RaXhGUVVGRkxFTkJRV3hDTEVOQlFXWTdRVUZEUVN4UlFVRk5MRk5CUVZNc1YwRkJWeXhGUVVGRkxFTkJRV0lzUlVGQlowSXNSVUZCUlN4RFFVRnNRaXhEUVVGbU8wRkJRMEVzVVVGQlRTeFRRVUZWTEd0Q1FVRk5MRVZCUVVVc1EwRkJVaXhEUVVGRUxFZEJRV1VzVjBGQlZ5eEZRVUZGTEVOQlFXSXNSVUZCWjBJc1JVRkJSU3hEUVVGc1FpeERRVUZtTEVkQlFYTkRMRU5CUVhKRU96dEJRVVZCTEZkQlFVOHNTMEZCU3l4SlFVRk1MRU5CUVZVc1UwRkJReXhOUVVGRUxFVkJRVmNzUTBGQldDeGhRVUZwUWl4TlFVRnFRaXhGUVVFeVFpeERRVUV6UWl4aFFVRnBReXhOUVVGcVF5eEZRVUV5UXl4RFFVRXpReXhEUVVGV0xFTkJRVkE3UVVGRFJEdEJRVU5HTEVOQllrMDdPenM3T3pzN096czdPenM3TzBGQk1rSkJMRWxCUVUwc2MwUkJRWFZDTEZWQlFVTXNTVUZCUkN4RlFVRlBMRVZCUVZBc1JVRkJWeXhMUVVGWU8wRkJRVUVzVTBGQmNVSXNRMEZCUXl4UlFVRlJMRWxCUVZRc1MwRkJhMElzUzBGQlN5eEpRVUYyUWl4RFFVRnlRanRCUVVGQkxFTkJRVGRDT3pzN096czdPenM3T3pzN08wRkJZVUVzU1VGQlRTeHpSRUZCZFVJc1ZVRkJReXhKUVVGRUxFVkJRVThzUlVGQlVDeEZRVUZYTEZGQlFWZzdRVUZCUVN4VFFVRjVRaXhEUVVGRkxGRkJRVVlzUjBGQllTeEpRVUZrTEVkQlFYVkNMRmRCUVZjc1JVRkJiRU1zUjBGQmQwTXNTVUZCYUVVN1FVRkJRU3hEUVVFM1FqczdPenM3T3pzN096dEJRVlZCTEVsQlFVMHNaMFZCUVRSQ0xGVkJRVU1zVFVGQlJDeEZRVUZUTEV0QlFWUXNSVUZCWjBJc1VVRkJhRUlzUlVGQk5rSTdRVUZEY0VVc1ZVRkJVU3hwUWtGQmFVSXNTMEZCYWtJc1EwRkJVanM3UVVGRlFTeFRRVUZQTzBGQlEwd3NUMEZCUnl4WFFVRlhMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQldDeEhRVUUyUWl4UFFVRlBMRU5CUkd4RE8wRkJSVXdzVDBGQlJ5eFhRVUZYTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJXQ3hIUVVFMlFpeFBRVUZQTzBGQlJteERMRWRCUVZBN1FVRkpSQ3hEUVZCTk96czdPenM3T3p0QlFXVkJMRWxCUVUwc09FTkJRVzFDTEZWQlFVTXNUMEZCUkR0QlFVRkJMRk5CUVdFc1ZVRkJWU3hIUVVGV0xFZEJRV2RDTEV0QlFVc3NSVUZCYkVNN1FVRkJRU3hEUVVGNlFqczdPenM3T3pzN096dEJRVlZCTEVsQlFVMHNNRUpCUVZNc1ZVRkJReXhSUVVGRUxFVkJRVmNzVVVGQldDeEZRVUZ4UWl4UlFVRnlRanRCUVVGQkxFMUJRU3RDTEZOQlFTOUNMSGxFUVVFeVF5eERRVUV6UXp0QlFVRkJMRk5CUVdsRUxGVkJRVlVzVjBGQldTeFpRVUZaTEZkQlFWY3NVVUZCZGtJc1NVRkJiVU1zUzBGQlN5eEhRVUZNTEVOQlFWTXNVMEZCVkN4RlFVRnZRaXhSUVVGd1FpeERRVUY2UkN4RFFVRnFSRHRCUVVGQkxFTkJRV1k3T3pzN096czdPMEZCVVVFc1NVRkJUU3gzUTBGQlowSXNWVUZCUXl4SFFVRkVMRVZCUVUwc1lVRkJUanRCUVVGQkxGTkJRWGxDTEd0Q1FVRk5MRWRCUVU0c1EwRkJSQ3hIUVVGbExFOUJRVThzVDBGQlR5eGhRVUZrTEVOQlFXWXNSMEZCT0VNc1EwRkJkRVU3UVVGQlFTeERRVUYwUWpzN096czdPenM3UVVGUlFTeEpRVUZOTERCRFFVRnBRaXhWUVVGRExGRkJRVVFzUlVGQlZ5eGhRVUZZTzBGQlFVRXNVMEZCTmtJc1dVRkJXU3hQUVVGUExHRkJRVzVDTEVOQlFUZENPMEZCUVVFc1EwRkJka0k3T3pzN096czdPenRCUVZOQkxFbEJRVTBzYzBOQlFXVXNWVUZCUXl4TFFVRkVMRVZCUVZFc1VVRkJVaXhGUVVGeFFqdEJRVU12UXl4TlFVRk5MRlZCUVZVc1MwRkJTeXhSUVVGUkxFTkJRV0lzUTBGQmFFSTdRVUZEUVN4TlFVRk5MRk5CUVZNc1NVRkJTeXhKUVVGSkxFdEJRWGhDTzBGQlEwRXNUVUZCVFN4dFFrRkJiVUlzUzBGQlN5eEhRVUZNTEVOQlFWTXNWMEZCVnl4TlFVRndRaXhGUVVFMFFpeERRVUUxUWl4RFFVRjZRanM3UVVGRlFTeFRRVUZQTEV0QlFVc3NTMEZCVEN4RFFVRlhMRzFDUVVGdFFpeFBRVUU1UWl4SlFVRjVReXhQUVVGb1JEdEJRVU5FTEVOQlRrMGlMQ0ptYVd4bElqb2lZMkZzWXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdselRuVnRJSDBnWm5KdmJTQW5MaTkxZEdsc2N5YzdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdiblZ0WW1WeUlIUnZJSGdnWkdWamFXMWhiQ0J3YkdGalpYTmNibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wxY2Jpb3ZYRzVqYjI1emRDQjBiMFJsWTJsdFlXd2dQU0FvYm5WdExDQndjbVZqYVhOcGIyNGdQU0F5S1NBOVBpQjdYRzRnSUhCeVpXTnBjMmx2YmlBOUlERXdJQ29xSUhCeVpXTnBjMmx2Ymp0Y2JpQWdjbVYwZFhKdUlFMWhkR2d1Y205MWJtUW9iblZ0SUNvZ2NISmxZMmx6YVc5dUtTQXZJSEJ5WldOcGMybHZianRjYm4wN1hHNWNibU52Ym5OMElGcEZVazlmVUU5SlRsUWdQU0I3WEc0Z0lIZzZJREFzWEc0Z0lIazZJREFzWEc0Z0lIbzZJREJjYm4wN1hHNWNibU52Ym5OMElHUnBjM1JoYm1ObE1VUWdQU0FvWVN3Z1lpa2dQVDRnVFdGMGFDNWhZbk1vWVNBdElHSXBPMXh1WEc0dktseHVJQ0JCYm1kc1pTQmlaWFIzWldWdUlIQnZhVzUwYzF4dUlDQmNiaUFnVkhKaGJuTnNZWFJsY3lCMGFHVWdhSGx3YjNSb1pYUnBZMkZzSUd4cGJtVWdjMjhnZEdoaGRDQjBhR1VnSjJaeWIyMG5JR052YjNKa2FXNWhkR1Z6WEc0Z0lHRnlaU0JoZENBd0xEQmNiaUFnWEc0Z0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1dDQmhibVFnV1NCamIyOXlaR2x1WVhSbGN5QnZaaUJtY205dElIQnZhVzUwWEc0Z0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1dDQmhibVFnV1NCamIzSmthVzVoZEdWeklHOW1JSFJ2SUhCdmFXNTBYRzRnSUVCeVpYUjFjbTRnVzNKaFpHbGhibDA2SUVGdVoyeGxJR0psZEhkbFpXNGdkR2hsSUhSM2J5QndiMmx1ZEhNZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmhibWRzWlNBOUlDaGhMQ0JpSUQwZ1drVlNUMTlRVDBsT1ZDa2dQVDRnY21Ga2FXRnVjMVJ2UkdWbmNtVmxjeWhOWVhSb0xtRjBZVzR5S0dFdWVDQXRJR0l1ZUN3Z1lTNTVJQzBnWWk1NUtTazdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdaR1ZuY21WbGN5QjBieUJ5WVdScFlXNXpYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlHUmxaM0psWlhOY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmtaV2R5WldWelZHOVNZV1JwWVc1eklEMGdLR1JsWjNKbFpYTXBJRDArSUdSbFozSmxaWE1nS2lCTllYUm9MbEJKSUM4Z01UZ3dPMXh1WEc0dktseHVJQ0JFYVd4aGRHVmNiaUFnWEc0Z0lFTm9ZVzVuWlNCMGFHVWdjSEp2WjNKbGMzTnBiMjRnWW1WMGQyVmxiaUJoSUdGdVpDQmlJR0ZqWTI5eVpHbHVaeUIwYnlCa2FXeGhkR2x2Ymk1Y2JpQWdYRzRnSUZOdklHUnBiR0YwYVc5dUlEMGdNQzQxSUhkdmRXeGtJR05vWVc1blpWeHVJQ0JjYmlBZ1lTQXRMUzB0TFMwdExTMGdZbHh1SUNCY2JpQWdkRzljYmlBZ1hHNGdJR0VnTFMwdExTQmlYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVScGJHRjBaU0J3Y205bmNtVnpjeUJpZVNCNFhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRkJ5WlhacGIzVnpJSFpoYkhWbElIQnNkWE1nZEdobElHUnBiR0YwWldRZ1pHbG1abVZ5Wlc1alpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmthV3hoZEdVZ1BTQW9ZU3dnWWl3Z1pHbHNZWFJwYjI0cElEMCtJR0VnS3lBb0tHSWdMU0JoS1NBcUlHUnBiR0YwYVc5dUtUdGNibHh1THlwY2JpQWdSR2x6ZEdGdVkyVmNiaUFnWEc0Z0lGSmxkSFZ5Ym5NZ2RHaGxJR1JwYzNSaGJtTmxJR0psZEhkbFpXNGdkSGR2SUc0Z1pHbHRaVzV6YVc5dVlXd2djRzlwYm5SekxseHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dlltcGxZM1F2Ym5WdFltVnlYVG9nZUNCaGJtUWdlU0J2Y2lCcWRYTjBJSGdnYjJZZ2NHOXBiblFnUVZ4dUlDQkFjR0Z5WVcwZ1cyOWlhbVZqZEM5dWRXMWlaWEpkT2lBb2IzQjBhVzl1WVd3cE9pQjRJR0Z1WkNCNUlHOXlJR3AxYzNRZ2VDQnZaaUJ3YjJsdWRDQkNYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZSb1pTQmthWE4wWVc1alpTQmlaWFIzWldWdUlIUm9aU0IwZDI4Z2NHOXBiblJ6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdScGMzUmhibU5sSUQwZ0tHRXNJR0lnUFNCYVJWSlBYMUJQU1U1VUtTQTlQaUI3WEc0Z0lDOHZJREZFSUdScGJXVnVjMmx2Ym5OY2JpQWdhV1lnS0dselRuVnRLR0VwS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1JwYzNSaGJtTmxNVVFvWVN3Z1lpazdYRzVjYmlBZ0x5OGdUWFZzZEdrdFpHbHRaVzV6YVc5dVlXeGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmpiMjV6ZENCNFJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlQ3dnWWk1NEtUdGNiaUFnSUNCamIyNXpkQ0I1UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVTd2dZaTU1S1R0Y2JpQWdJQ0JqYjI1emRDQjZSR1ZzZEdFZ1BTQW9hWE5PZFcwb1lTNTZLU2tnUHlCa2FYTjBZVzVqWlRGRUtHRXVlaXdnWWk1NktTQTZJREE3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdUV0YwYUM1emNYSjBLQ2g0UkdWc2RHRWdLaW9nTWlrZ0t5QW9lVVJsYkhSaElDb3FJRElwSUNzZ0tIcEVaV3gwWVNBcUtpQXlLU2s3WEc0Z0lIMWNibjA3WEc1Y2JpOHFYRzRnSUZCeWIyZHlaWE56SUhkcGRHaHBiaUJuYVhabGJpQnlZVzVuWlZ4dUlDQmNiaUFnUjJsMlpXNGdZU0JzYjNkbGNpQnNhVzFwZENCaGJtUWdZVzRnZFhCd1pYSWdiR2x0YVhRc0lIZGxJSEpsZEhWeWJpQjBhR1VnY0hKdlozSmxjM05jYmlBZ0tHVjRjSEpsYzNObFpDQmhjeUJoSUc1MWJXSmxjaUF3TFRFcElISmxjSEpsYzJWdWRHVmtJR0o1SUhSb1pTQm5hWFpsYmlCMllXeDFaU3dnWVc1a1hHNGdJR3hwYldsMElIUm9ZWFFnY0hKdlozSmxjM01nZEc4Z2QybDBhR2x1SURBdE1TNWNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RHOTNaWElnYkdsdGFYUWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlhCd1pYSWdiR2x0YVhSY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCMGJ5Qm1hVzVrSUhCeWIyZHlaWE56SUhkcGRHaHBiaUJuYVhabGJpQnlZVzVuWlZ4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlFjbTluY21WemN5QnZaaUIyWVd4MVpTQjNhWFJvYVc0Z2NtRnVaMlVnWVhNZ1pYaHdjbVZ6YzJWa0lEQXRNVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNBOUlDaG1jbTl0TENCMGJ5d2dkbUZzZFdVcElEMCtJQ2gyWVd4MVpTQXRJR1p5YjIwcElDOGdLSFJ2SUMwZ1puSnZiU2s3WEc1Y2JpOHFYRzRnSUZaaGJIVmxJR2x1SUhKaGJtZGxJR1p5YjIwZ2NISnZaM0psYzNOY2JpQWdYRzRnSUVkcGRtVnVJR0VnYkc5M1pYSWdiR2x0YVhRZ1lXNWtJR0Z1SUhWd2NHVnlJR3hwYldsMExDQjNaU0J5WlhSMWNtNGdkR2hsSUhaaGJIVmxJSGRwZEdocGJseHVJQ0IwYUdGMElISmhibWRsSUdGeklHVjRjSEpsYzNObFpDQmllU0J3Y205bmNtVnpjeUFvWVNCdWRXMWlaWElnWm5KdmJTQXdMVEVwWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZYQndaWElnYkdsdGFYUWdiMllnY21GdVoyVmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJVYUdVZ2NISnZaM0psYzNNZ1ltVjBkMlZsYmlCc2IzZGxjaUJoYm1RZ2RYQndaWElnYkdsdGFYUnpJR1Y0Y0hKbGMzTmxaQ0F3TFRGY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ1lYTWdZMkZzWTNWc1lYUmxaQ0JtY205dElIQnliMmR5WlhOeklIZHBkR2hwYmlCeVlXNW5aU0FvYm05MElHeHBiV2wwWldRZ2QybDBhR2x1SUhKaGJtZGxLVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lBOUlDaG1jbTl0TENCMGJ5d2djSEp2WjNKbGMzTXBJRDArSUNndElIQnliMmR5WlhOeklDb2dabkp2YlNrZ0t5QW9jSEp2WjNKbGMzTWdLaUIwYnlrZ0t5Qm1jbTl0TzF4dVhHNHZLbHh1SUNCUWIybHVkQ0JtY205dElHRnVaMnhsSUdGdVpDQmthWE4wWVc1alpWeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lBeVJDQndiMmx1ZENCdlppQnZjbWxuYVc1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkJibWRzWlNCbWNtOXRJRzl5YVdkcGJseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVJwYzNSaGJtTmxJR1p5YjIwZ2IzSnBaMmx1WEc0Z0lFQnlaWFIxY200Z1cyOWlhbVZqZEYwNklFTmhiR04xYkdGMFpXUWdNa1FnY0c5cGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjRzlwYm5SR2NtOXRRVzVuYkdWQmJtUkVhWE4wWVc1alpTQTlJQ2h2Y21sbmFXNHNJR0Z1WjJ4bExDQmthWE4wWVc1alpTa2dQVDRnZTF4dUlDQmhibWRzWlNBOUlHUmxaM0psWlhOVWIxSmhaR2xoYm5Nb1lXNW5iR1VwTzF4dVhHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2VEb2daR2x6ZEdGdVkyVWdLaUJOWVhSb0xtTnZjeWhoYm1kc1pTa2dLeUJ2Y21sbmFXNHVlQ3hjYmlBZ0lDQjVPaUJrYVhOMFlXNWpaU0FxSUUxaGRHZ3VjMmx1S0dGdVoyeGxLU0FySUc5eWFXZHBiaTU1WEc0Z0lIMDdYRzU5TzF4dVhHNHZLbHh1SUNCRGIyNTJaWEowSUhKaFpHbGhibk1nZEc4Z1pHVm5jbVZsYzF4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJ5WVdScFlXNXpYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUdSbFozSmxaWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21Ga2FXRnVjMVJ2UkdWbmNtVmxjeUE5SUNoeVlXUnBZVzV6S1NBOVBpQnlZV1JwWVc1eklDb2dNVGd3SUM4Z1RXRjBhQzVRU1R0Y2JseHVMeXBjYmlBZ1JuSmhiV1Z5WVhSbExXbHVaR1Z3Wlc1a1pXNTBJSE50YjI5MGFHbHVaMXh1WEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RtVjNJSFpoYkhWbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUMnhrSUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRJQ2h2Y0hScGIyNWhiQ2s2SUZOdGIyOTBhR2x1WnlBb01DQnBjeUJ1YjI1bEtWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpiVzl2ZEdnZ1BTQW9ibVYzVm1Gc2RXVXNJRzlzWkZaaGJIVmxMQ0JrZFhKaGRHbHZiaXdnYzIxdmIzUm9hVzVuSUQwZ01Da2dQVDRnZEc5RVpXTnBiV0ZzS0c5c1pGWmhiSFZsSUNzZ0tHUjFjbUYwYVc5dUlDb2dLRzVsZDFaaGJIVmxJQzBnYjJ4a1ZtRnNkV1VwSUM4Z1RXRjBhQzV0WVhnb2MyMXZiM1JvYVc1bkxDQmtkWEpoZEdsdmJpa3BLVHRjYmx4dUx5cGNiaUFnUTI5dWRtVnlkQ0I0SUhCbGNpQnpaV052Ym1RZ2RHOGdjR1Z5SUdaeVlXMWxJSFpsYkc5amFYUjVJR0poYzJWa0lHOXVJR1p3YzF4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWYm1sMElIQmxjaUJ6WldOdmJtUmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJHY21GdFpTQmtkWEpoZEdsdmJpQnBiaUJ0YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemNHVmxaRkJsY2taeVlXMWxJRDBnS0hod2N5d2dabkpoYldWRWRYSmhkR2x2YmlrZ1BUNGdLR2x6VG5WdEtIaHdjeWtwSUQ4Z2VIQnpJQzhnS0RFd01EQWdMeUJtY21GdFpVUjFjbUYwYVc5dUtTQTZJREE3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnZG1Wc2IyTnBkSGtnYVc1MGJ5QjJaV3hwWTJsMGVTQndaWElnYzJWamIyNWtYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVnVhWFFnY0dWeUlHWnlZVzFsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjRnYVc0Z2JYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JsWldSUVpYSlRaV052Ym1RZ1BTQW9kbVZzYjJOcGRIa3NJR1p5WVcxbFJIVnlZWFJwYjI0cElEMCtJSFpsYkc5amFYUjVJQ29nS0RFd01EQWdMeUJtY21GdFpVUjFjbUYwYVc5dUtUdGNibHh1THlwY2JpQWdRM0psWVhSbElITjBaWEJ3WldRZ2RtVnljMmx2YmlCdlppQXdMVEVnY0hKdlozSmxjM05jYmlBZ1hHNGdJRUJ3WVhKaGJTQmJhVzUwWFRvZ1RuVnRZbVZ5SUc5bUlITjBaWEJ6WEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCVGRHVndjR1ZrSUhaaGJIVmxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE4wWlhCUWNtOW5jbVZ6Y3lBOUlDaHpkR1Z3Y3l3Z2NISnZaM0psYzNNcElEMCtJSHRjYmlBZ1kyOXVjM1FnYzJWbmJXVnVkQ0E5SURFZ0x5QW9jM1JsY0hNZ0xTQXhLVHRjYmlBZ1kyOXVjM1FnZEdGeVoyVjBJRDBnTVNBdElDZ3hJQzhnYzNSbGNITXBPMXh1SUNCamIyNXpkQ0J3Y205bmNtVnpjMDltVkdGeVoyVjBJRDBnVFdGMGFDNXRhVzRvY0hKdlozSmxjM01nTHlCMFlYSm5aWFFzSURFcE8xeHVYRzRnSUhKbGRIVnliaUJOWVhSb0xtWnNiMjl5S0hCeWIyZHlaWE56VDJaVVlYSm5aWFFnTHlCelpXZHRaVzUwS1NBcUlITmxaMjFsYm5RN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2NhbGMuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCA9IDEuNTI1O1xuXG52YXIgY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZVJldmVyc2VkRWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2luZygxIC0gcCk7XG4gIH07XG59O1xudmFyIGNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVNaXJyb3JlZEVhc2luZyA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPD0gMC41ID8gZWFzaW5nKDIgKiBwKSAvIDIgOiAoMiAtIGVhc2luZygyICogKDEgLSBwKSkpIC8gMjtcbiAgfTtcbn07XG5cbnZhciBsaW5lYXIgPSBleHBvcnRzLmxpbmVhciA9IGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwO1xufTtcblxudmFyIGNyZWF0ZUV4cG9JbiA9IGV4cG9ydHMuY3JlYXRlRXhwb0luID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBNYXRoLnBvdyhwLCBwb3dlcik7XG4gIH07XG59O1xudmFyIGVhc2VJbiA9IGV4cG9ydHMuZWFzZUluID0gY3JlYXRlRXhwb0luKDIpO1xudmFyIGVhc2VPdXQgPSBleHBvcnRzLmVhc2VPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNlSW4pO1xudmFyIGVhc2VJbk91dCA9IGV4cG9ydHMuZWFzZUluT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoZWFzZUluKTtcblxudmFyIGNpcmNJbiA9IGV4cG9ydHMuY2lyY0luID0gZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocCkpO1xufTtcbnZhciBjaXJjT3V0ID0gZXhwb3J0cy5jaXJjT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoY2lyY0luKTtcbnZhciBjaXJjSW5PdXQgPSBleHBvcnRzLmNpcmNJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGNpcmNPdXQpO1xuXG52YXIgY3JlYXRlQmFja0luID0gZXhwb3J0cy5jcmVhdGVCYWNrSW4gPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgKiBwICogKChwb3dlciArIDEpICogcCAtIHBvd2VyKTtcbiAgfTtcbn07XG52YXIgYmFja0luID0gZXhwb3J0cy5iYWNrSW4gPSBjcmVhdGVCYWNrSW4oREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xudmFyIGJhY2tPdXQgPSBleHBvcnRzLmJhY2tPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhiYWNrSW4pO1xudmFyIGJhY2tJbk91dCA9IGV4cG9ydHMuYmFja0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoYmFja0luKTtcblxudmFyIGNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgdmFyIGJhY2tFYXNpbmcgPSBjcmVhdGVCYWNrSW4ocG93ZXIpO1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gKHAgKj0gMikgPCAxID8gMC41ICogYmFja0Vhc2luZyhwKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHAgLSAxKSkpO1xuICB9O1xufTtcblxudmFyIGFudGljaXBhdGUgPSBleHBvcnRzLmFudGljaXBhdGUgPSBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZaV0Z6YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxFbEJRVTBzTmtKQlFUWkNMRXRCUVc1RE96dEJRVVZQTEVsQlFVMHNjMFJCUVhWQ0xGVkJRVU1zVFVGQlJEdEJRVUZCTEZOQlFWa3NWVUZCUXl4RFFVRkVPMEZCUVVFc1YwRkJUeXhKUVVGSkxFOUJRVThzU1VGQlNTeERRVUZZTEVOQlFWZzdRVUZCUVN4SFFVRmFPMEZCUVVFc1EwRkJOMEk3UVVGRFFTeEpRVUZOTEhORVFVRjFRaXhWUVVGRExFMUJRVVE3UVVGQlFTeFRRVUZaTEZWQlFVTXNRMEZCUkR0QlFVRkJMRmRCUVZFc1MwRkJTeXhIUVVGT0xFZEJRV0VzVDBGQlR5eEpRVUZKTEVOQlFWZ3NTVUZCWjBJc1EwRkJOMElzUjBGQmFVTXNRMEZCUXl4SlFVRkpMRTlCUVU4c1MwRkJTeXhKUVVGSkxFTkJRVlFzUTBGQlVDeERRVUZNTEVsQlFUUkNMRU5CUVhCRk8wRkJRVUVzUjBGQldqdEJRVUZCTEVOQlFUZENPenRCUVVWQkxFbEJRVTBzTUVKQlFWTXNWVUZCUXl4RFFVRkVPMEZCUVVFc1UwRkJUeXhEUVVGUU8wRkJRVUVzUTBGQlpqczdRVUZGUVN4SlFVRk5MSE5EUVVGbExGVkJRVU1zUzBGQlJEdEJRVUZCTEZOQlFWY3NWVUZCUXl4RFFVRkVPMEZCUVVFc2IwSkJRVThzUTBGQlVDeEZRVUZaTEV0QlFWbzdRVUZCUVN4SFFVRllPMEZCUVVFc1EwRkJja0k3UVVGRFFTeEpRVUZOTERCQ1FVRlRMR0ZCUVdFc1EwRkJZaXhEUVVGbU8wRkJRMEVzU1VGQlRTdzBRa0ZCVlN4eFFrRkJjVUlzVFVGQmNrSXNRMEZCYUVJN1FVRkRRU3hKUVVGTkxHZERRVUZaTEhGQ1FVRnhRaXhOUVVGeVFpeERRVUZzUWpzN1FVRkZRU3hKUVVGTkxEQkNRVUZUTEZWQlFVTXNRMEZCUkR0QlFVRkJMRk5CUVU4c1NVRkJTU3hMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZMTEVsQlFVd3NRMEZCVlN4RFFVRldMRU5CUVZRc1EwRkJXRHRCUVVGQkxFTkJRV1k3UVVGRFFTeEpRVUZOTERSQ1FVRlZMSEZDUVVGeFFpeE5RVUZ5UWl4RFFVRm9RanRCUVVOQkxFbEJRVTBzWjBOQlFWa3NjVUpCUVhGQ0xFOUJRWEpDTEVOQlFXeENPenRCUVVWQkxFbEJRVTBzYzBOQlFXVXNWVUZCUXl4TFFVRkVPMEZCUVVFc1UwRkJWeXhWUVVGRExFTkJRVVE3UVVGQlFTeFhRVUZSTEVsQlFVa3NRMEZCVEN4SlFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGVUxFbEJRV01zUTBGQlpDeEhRVUZyUWl4TFFVRTNRaXhEUVVGUU8wRkJRVUVzUjBGQldEdEJRVUZCTEVOQlFYSkNPMEZCUTBFc1NVRkJUU3d3UWtGQlV5eGhRVUZoTERCQ1FVRmlMRU5CUVdZN1FVRkRRU3hKUVVGTkxEUkNRVUZWTEhGQ1FVRnhRaXhOUVVGeVFpeERRVUZvUWp0QlFVTkJMRWxCUVUwc1owTkJRVmtzY1VKQlFYRkNMRTFCUVhKQ0xFTkJRV3hDT3p0QlFVVkJMRWxCUVUwc01FUkJRWGxDTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUXk5RExFMUJRVTBzWVVGQllTeGhRVUZoTEV0QlFXSXNRMEZCYmtJN1FVRkRRU3hUUVVGUExGVkJRVU1zUTBGQlJEdEJRVUZCTEZkQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVU0c1NVRkJWeXhEUVVGYUxFZEJRV2xDTEUxQlFVMHNWMEZCVnl4RFFVRllMRU5CUVhaQ0xFZEJRWFZETEU5QlFVOHNTVUZCU1N4TFFVRkxMRWRCUVV3c1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQlF5eEZRVUZFTEVsQlFVOHNTVUZCU1N4RFFVRllMRU5CUVZvc1EwRkJXQ3hEUVVFNVF6dEJRVUZCTEVkQlFWQTdRVUZEUkN4RFFVaE5PenRCUVV0QkxFbEJRVTBzYTBOQlFXRXNkVUpCUVhWQ0xEQkNRVUYyUWl4RFFVRnVRaUlzSW1acGJHVWlPaUpsWVhOcGJtY3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCRVJVWkJWVXhVWDA5V1JWSlRTRTlQVkY5VFZGSkZUa2RVU0NBOUlERXVOVEkxTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxVbVYyWlhKelpXUkZZWE5wYm1jZ1BTQW9aV0Z6YVc1bktTQTlQaUFvY0NrZ1BUNGdNU0F0SUdWaGMybHVaeWd4SUMwZ2NDazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY2dQU0FvWldGemFXNW5LU0E5UGlBb2NDa2dQVDRnS0hBZ1BEMGdNQzQxS1NBL0lHVmhjMmx1WnlneUlDb2djQ2tnTHlBeUlEb2dLRElnTFNCbFlYTnBibWNvTWlBcUlDZ3hJQzBnY0NrcEtTQXZJREk3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JzYVc1bFlYSWdQU0FvY0NrZ1BUNGdjRHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR055WldGMFpVVjRjRzlKYmlBOUlDaHdiM2RsY2lrZ1BUNGdLSEFwSUQwK0lIQWdLaW9nY0c5M1pYSTdYRzVsZUhCdmNuUWdZMjl1YzNRZ1pXRnpaVWx1SUQwZ1kzSmxZWFJsUlhod2IwbHVLRElwTzF4dVpYaHdiM0owSUdOdmJuTjBJR1ZoYzJWUGRYUWdQU0JqY21WaGRHVlNaWFpsY25ObFpFVmhjMmx1WnlobFlYTmxTVzRwTzF4dVpYaHdiM0owSUdOdmJuTjBJR1ZoYzJWSmJrOTFkQ0E5SUdOeVpXRjBaVTFwY25KdmNtVmtSV0Z6YVc1bktHVmhjMlZKYmlrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamFYSmpTVzRnUFNBb2NDa2dQVDRnTVNBdElFMWhkR2d1YzJsdUtFMWhkR2d1WVdOdmN5aHdLU2s3WEc1bGVIQnZjblFnWTI5dWMzUWdZMmx5WTA5MWRDQTlJR055WldGMFpWSmxkbVZ5YzJWa1JXRnphVzVuS0dOcGNtTkpiaWs3WEc1bGVIQnZjblFnWTI5dWMzUWdZMmx5WTBsdVQzVjBJRDBnWTNKbFlYUmxUV2x5Y205eVpXUkZZWE5wYm1jb1kybHlZMDkxZENrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZDWVdOclNXNGdQU0FvY0c5M1pYSXBJRDArSUNod0tTQTlQaUFvY0NBcUlIQXBJQ29nS0Nod2IzZGxjaUFySURFcElDb2djQ0F0SUhCdmQyVnlLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmlZV05yU1c0Z1BTQmpjbVZoZEdWQ1lXTnJTVzRvUkVWR1FWVk1WRjlQVmtWU1UwaFBUMVJmVTFSU1JVNUhWRWdwTzF4dVpYaHdiM0owSUdOdmJuTjBJR0poWTJ0UGRYUWdQU0JqY21WaGRHVlNaWFpsY25ObFpFVmhjMmx1WnloaVlXTnJTVzRwTzF4dVpYaHdiM0owSUdOdmJuTjBJR0poWTJ0SmJrOTFkQ0E5SUdOeVpXRjBaVTFwY25KdmNtVmtSV0Z6YVc1bktHSmhZMnRKYmlrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZCYm5ScFkybHdZWFJsUldGemFXNW5JRDBnS0hCdmQyVnlLU0E5UGlCN1hHNGdJR052Ym5OMElHSmhZMnRGWVhOcGJtY2dQU0JqY21WaGRHVkNZV05yU1c0b2NHOTNaWElwTzF4dUlDQnlaWFIxY200Z0tIQXBJRDArSUNnb2NDQXFQU0F5S1NBOElERXBJRDhnTUM0MUlDb2dZbUZqYTBWaGMybHVaeWh3S1NBNklEQXVOU0FxSUNneUlDMGdUV0YwYUM1d2IzY29NaXdnTFRFd0lDb2dLSEFnTFNBeEtTa3BPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdGdWRHbGphWEJoZEdVZ1BTQmpjbVZoZEdWQmJuUnBZMmx3WVhSbFJXRnphVzVuS0VSRlJrRlZURlJmVDFaRlVsTklUMDlVWDFOVVVrVk9SMVJJS1R0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5ibGVuZENvbG9yID0gZXhwb3J0cy5hbHBoYSA9IGV4cG9ydHMuY29sb3IgPSBleHBvcnRzLmhzbGEgPSBleHBvcnRzLnJnYmEgPSBleHBvcnRzLnJnYlVuaXQgPSBleHBvcnRzLnB4ID0gZXhwb3J0cy5kZWdyZWVzID0gZXhwb3J0cy5wZXJjZW50ID0gZXhwb3J0cy50cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IGV4cG9ydHMuc3RlcHMgPSBleHBvcnRzLndyYXAgPSBleHBvcnRzLm5vbmxpbmVhclNwcmluZyA9IGV4cG9ydHMuc3ByaW5nID0gZXhwb3J0cy5nZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gZXhwb3J0cy5vZmZzZXQgPSBleHBvcnRzLmludGVycG9sYXRlID0gZXhwb3J0cy5mbG93ID0gZXhwb3J0cy5jb25kaXRpb25hbCA9IGV4cG9ydHMuY2xhbXAgPSBleHBvcnRzLmNsYW1wTWluID0gZXhwb3J0cy5jbGFtcE1heCA9IGV4cG9ydHMuYXBwZW5kVW5pdCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uICh2KSB7XG4gIHJldHVybiB2O1xufTtcblxuLyoqXG4gKiBBcHBlbmQgVW5pdFxuICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYXBwZW5kXG4gKiBhcHBlbmRVbml0KCdweCcsIDIwKSAtPiAnMjBweCdcbiAqIEBwYXJhbSAge3N0cmluZ30gdW5pdClcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGFwcGVuZFVuaXQgPSBleHBvcnRzLmFwcGVuZFVuaXQgPSBmdW5jdGlvbiAodW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gJycgKyB2ICsgdW5pdDtcbiAgfTtcbn07XG5cbi8qKlxuICogQ2xhbXAgdmFsdWUgYmV0d2VlblxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXN0cmljdCBhIGdpdmVuIHZhbHVlIGJldHdlZW4gYG1pbmAgYW5kIGBtYXhgXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pblxuICogQHBhcmFtICB7bnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGNsYW1wTWF4ID0gZXhwb3J0cy5jbGFtcE1heCA9IGZ1bmN0aW9uIChtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHYsIG1heCk7XG4gIH07XG59O1xudmFyIGNsYW1wTWluID0gZXhwb3J0cy5jbGFtcE1pbiA9IGZ1bmN0aW9uIChtaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KHYsIG1pbik7XG4gIH07XG59O1xudmFyIGNsYW1wID0gZXhwb3J0cy5jbGFtcCA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICB2YXIgX21pbiA9IGNsYW1wTWluKG1pbik7XG4gIHZhciBfbWF4ID0gY2xhbXBNYXgobWF4KTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIF9taW4oX21heCh2KSk7XG4gIH07XG59O1xuXG52YXIgY29uZGl0aW9uYWwgPSBleHBvcnRzLmNvbmRpdGlvbmFsID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgaWZUcnVlKSB7XG4gIHZhciBpZkZhbHNlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gbm9vcCA6IGFyZ3VtZW50c1syXTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGNvbmRpdGlvbih2KSA/IGlmVHJ1ZSh2KSA6IGlmRmFsc2Uodik7XG4gIH07XG59O1xuXG4vKipcbiAqIEZsb3dcbiAqIENvbXBvc2Ugb3RoZXIgdHJhbnNmb3JtZXJzIHRvIHJ1biBsaW5lYXJpbHlcbiAqIGZsb3cobWluKDIwKSwgbWF4KDQwKSlcbiAqIEBwYXJhbSAgey4uLmZ1bmN0aW9uc30gdHJhbnNmb3JtZXJzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xudmFyIGZsb3cgPSBleHBvcnRzLmZsb3cgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB0cmFuc2Zvcm1lcnMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB0cmFuc2Zvcm1lcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoYWNjKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgdiA9IGFjYztcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0uYXBwbHkodHJhbnNmb3JtZXJzLCBbdl0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG5cbi8qKlxuICogSW50ZXJwb2xhdGUgZnJvbSBzZXQgb2YgdmFsdWVzIHRvIGFub3RoZXJcbiAqIEBwYXJhbSAge0FycmF5fSBpbnB1dCBhcnJheVxuICogQHBhcmFtICB7QXJyYXl9IG91dHB1dFxuICogQHBhcmFtICB7RnVuY3Rpb259IHJhbmdlRWFzaW5nXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xudmFyIGludGVycG9sYXRlID0gZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykge1xuICB2YXIgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIHZhciBmaW5hbEluZGV4ID0gcmFuZ2VMZW5ndGggLSAxO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgdmFyIGkgPSAxO1xuXG4gICAgLy8gRmluZCBpbmRleCBvZiByYW5nZSBzdGFydFxuICAgIGZvciAoOyBpIDwgcmFuZ2VMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlucHV0W2ldID4gdiB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9ncmVzc0luUmFuZ2UgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGlucHV0W2kgLSAxXSwgaW5wdXRbaV0sIHYpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gcmFuZ2VFYXNpbmcgPyByYW5nZUVhc2luZ1tpXShwcm9ncmVzc0luUmFuZ2UpIDogcHJvZ3Jlc3NJblJhbmdlO1xuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKG91dHB1dFtpIC0gMV0sIG91dHB1dFtpXSwgZWFzZWRQcm9ncmVzcyk7XG4gIH07XG59O1xuXG52YXIgb2Zmc2V0ID0gZXhwb3J0cy5vZmZzZXQgPSBmdW5jdGlvbiAob3JpZ2luKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2IC0gb3JpZ2luO1xuICB9O1xufTtcblxudmFyIGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcgPSBleHBvcnRzLmdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhbHRlckRpc3BsYWNlbWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IG5vb3AgOiBhcmd1bWVudHNbMF07XG4gIHJldHVybiBmdW5jdGlvbiAoY29uc3RhbnQsIG9yaWdpbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgdmFyIGRpc3BsYWNlbWVudCA9IE1hdGguYWJzKG9yaWdpbiAtIHYpO1xuICAgICAgdmFyIHNwcmluZ01vZGlmaWVyID0gLWNvbnN0YW50ICogKDAgLSBhbHRlckRpc3BsYWNlbWVudChkaXNwbGFjZW1lbnQpKTtcbiAgICAgIHJldHVybiBkaXNwbGFjZW1lbnQgLSBzcHJpbmdNb2RpZmllcjtcbiAgICB9O1xuICB9O1xufTtcblxudmFyIHNwcmluZyA9IGV4cG9ydHMuc3ByaW5nID0gZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZygpO1xudmFyIG5vbmxpbmVhclNwcmluZyA9IGV4cG9ydHMubm9ubGluZWFyU3ByaW5nID0gZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZyhNYXRoLnNxcnQpO1xuXG52YXIgd3JhcCA9IGV4cG9ydHMud3JhcCA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgcmFuZ2VTaXplID0gbWF4IC0gbWluO1xuICAgIHJldHVybiAoKHYgLSBtaW4pICUgcmFuZ2VTaXplICsgcmFuZ2VTaXplKSAlIHJhbmdlU2l6ZSArIG1pbjtcbiAgfTtcbn07XG5cbnZhciBzdGVwcyA9IGV4cG9ydHMuc3RlcHMgPSBmdW5jdGlvbiAoc3RlcHMsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciBwcm9ncmVzcyA9ICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkobWluLCBtYXgsIHYpO1xuICAgIHJldHVybiAoMCwgX2NhbGMuc3RlcFByb2dyZXNzKShzdGVwcywgcHJvZ3Jlc3MpO1xuICB9O1xufTtcblxudmFyIHRyYW5zZm9ybUNoaWxkVmFsdWVzID0gZXhwb3J0cy50cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IGZ1bmN0aW9uIChjaGlsZFRyYW5zZm9ybWVycykge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdikge1xuICAgICAgdmFyIGNoaWxkVHJhbnNmb3JtZXIgPSBjaGlsZFRyYW5zZm9ybWVyc1trZXldO1xuICAgICAgaWYgKGNoaWxkVHJhbnNmb3JtZXIpIHtcbiAgICAgICAgdltrZXldID0gY2hpbGRUcmFuc2Zvcm1lcih2W2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcblxuLy8gVW5pdCB0cmFuc2Zvcm1lcnNcbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0gYXBwZW5kVW5pdCgnJScpO1xudmFyIGRlZ3JlZXMgPSBleHBvcnRzLmRlZ3JlZXMgPSBhcHBlbmRVbml0KCdkZWcnKTtcbnZhciBweCA9IGV4cG9ydHMucHggPSBhcHBlbmRVbml0KCdweCcpO1xuXG52YXIgcmdiVW5pdCA9IGV4cG9ydHMucmdiVW5pdCA9IGZsb3coY2xhbXAoMCwgMjU1KSwgTWF0aC5yb3VuZCk7XG5cbnZhciByZ2JhVGVtcGxhdGUgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgcmVkID0gX3JlZi5yZWQ7XG4gIHZhciBncmVlbiA9IF9yZWYuZ3JlZW47XG4gIHZhciBibHVlID0gX3JlZi5ibHVlO1xuICB2YXIgX3JlZiRhbHBoYSA9IF9yZWYuYWxwaGE7XG4gIHZhciBhbHBoYSA9IF9yZWYkYWxwaGEgPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmJGFscGhhO1xuICByZXR1cm4gJ3JnYmEoJyArIHJlZCArICcsICcgKyBncmVlbiArICcsICcgKyBibHVlICsgJywgJyArIGFscGhhICsgJyknO1xufTtcblxudmFyIHJnYmEgPSBleHBvcnRzLnJnYmEgPSBmbG93KHRyYW5zZm9ybUNoaWxkVmFsdWVzKHtcbiAgcmVkOiByZ2JVbml0LFxuICBncmVlbjogcmdiVW5pdCxcbiAgYmx1ZTogcmdiVW5pdCxcbiAgYWxwaGE6IGFscGhhXG59KSwgcmdiYVRlbXBsYXRlKTtcblxudmFyIGhzbGFUZW1wbGF0ZSA9IGZ1bmN0aW9uIChfcmVmMikge1xuICB2YXIgaHVlID0gX3JlZjIuaHVlO1xuICB2YXIgc2F0dXJhdGlvbiA9IF9yZWYyLnNhdHVyYXRpb247XG4gIHZhciBsaWdodG5lc3MgPSBfcmVmMi5saWdodG5lc3M7XG4gIHZhciBfcmVmMiRhbHBoYSA9IF9yZWYyLmFscGhhO1xuICB2YXIgYWxwaGEgPSBfcmVmMiRhbHBoYSA9PT0gdW5kZWZpbmVkID8gMSA6IF9yZWYyJGFscGhhO1xuICByZXR1cm4gJ2hzbGEoJyArIGh1ZSArICcsICcgKyBzYXR1cmF0aW9uICsgJywgJyArIGxpZ2h0bmVzcyArICcsICcgKyBhbHBoYSArICcpJztcbn07XG5cbnZhciBoc2xhID0gZXhwb3J0cy5oc2xhID0gZmxvdyh0cmFuc2Zvcm1DaGlsZFZhbHVlcyh7XG4gIGh1ZTogcGFyc2VGbG9hdCxcbiAgc2F0dXJhdGlvbjogcGVyY2VudCxcbiAgbGlnaHRuZXNzOiBwZXJjZW50LFxuICBhbHBoYTogYWxwaGFcbn0pLCBoc2xhVGVtcGxhdGUpO1xuXG52YXIgY29sb3IgPSBleHBvcnRzLmNvbG9yID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKHYuaGFzT3duUHJvcGVydHkoJ3JlZCcpKSB7XG4gICAgcmV0dXJuIHJnYmEodik7XG4gIH0gZWxzZSBpZiAodi5oYXNPd25Qcm9wZXJ0eSgnaHVlJykpIHtcbiAgICByZXR1cm4gaHNsYSh2KTtcbiAgfVxuICByZXR1cm4gdjtcbn07XG5cbnZhciBhbHBoYSA9IGV4cG9ydHMuYWxwaGEgPSBjbGFtcCgwLCAxKTtcblxudmFyIGJsZW5kID0gZnVuY3Rpb24gKGZyb20sIHRvLCB2KSB7XG4gIHZhciBmcm9tRXhwbyA9IGZyb20gKiBmcm9tO1xuICB2YXIgdG9FeHBvID0gdG8gKiB0bztcbiAgcmV0dXJuIE1hdGguc3FydCh2ICogKHRvRXhwbyAtIGZyb21FeHBvKSArIGZyb21FeHBvKTtcbn07XG4vLyBodHRwOi8vY29kZXBlbi5pby9vc3VibGFrZS9wZW4veEdWVmFOXG52YXIgYmxlbmRDb2xvciA9IGV4cG9ydHMuYmxlbmRDb2xvciA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICB2YXIgZnJvbUNvbG9yID0gKDAsIF91dGlscy5pc1N0cmluZykoZnJvbSkgPyAoMCwgX3BhcnNlcnMuY29sb3IpKGZyb20pIDogZnJvbTtcbiAgdmFyIHRvQ29sb3IgPSAoMCwgX3V0aWxzLmlzU3RyaW5nKSh0bykgPyAoMCwgX3BhcnNlcnMuY29sb3IpKHRvKSA6IHRvO1xuXG4gIHZhciBibGVuZGVkID0gX2V4dGVuZHMoe30sIGZyb21Db2xvcik7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZm9yICh2YXIga2V5IGluIGJsZW5kZWQpIHtcbiAgICAgIGJsZW5kZWRba2V5XSA9IGJsZW5kKGZyb21Db2xvcltrZXldLCB0b0NvbG9yW2tleV0sIHYpO1xuICAgIH1cbiAgICBibGVuZGVkLnJlZCA9IGJsZW5kKGZyb21Db2xvci5yZWQsIHRvQ29sb3IucmVkLCB2KTtcbiAgICBibGVuZGVkLmdyZWVuID0gYmxlbmQoZnJvbUNvbG9yLmdyZWVuLCB0b0NvbG9yLmdyZWVuLCB2KTtcbiAgICBibGVuZGVkLmJsdWUgPSBibGVuZChmcm9tQ29sb3IuYmx1ZSwgdG9Db2xvci5ibHVlLCB2KTtcbiAgICBibGVuZGVkLmFscGhhID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShmcm9tQ29sb3IuYWxwaGEsIHRvQ29sb3IuYWxwaGEsIHYpO1xuICAgIHJldHVybiBibGVuZGVkO1xuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3UVVGQlFUczdRVUZEUVRzN1FVRkRRVHM3UVVGRlFTeEpRVUZOTEU5QlFVOHNWVUZCUXl4RFFVRkVPMEZCUVVFc1UwRkJUeXhEUVVGUU8wRkJRVUVzUTBGQllqczdPenM3T3pzN08wRkJVMDhzU1VGQlRTeHJRMEZCWVN4VlFVRkRMRWxCUVVRN1FVRkJRU3hUUVVGVkxGVkJRVU1zUTBGQlJEdEJRVUZCTEdkQ1FVRlZMRU5CUVZZc1IwRkJZeXhKUVVGa08wRkJRVUVzUjBGQlZqdEJRVUZCTEVOQlFXNUNPenM3T3pzN096czdRVUZUUVN4SlFVRk5MRGhDUVVGWExGVkJRVU1zUjBGQlJEdEJRVUZCTEZOQlFWTXNWVUZCUXl4RFFVRkVPMEZCUVVFc1YwRkJUeXhMUVVGTExFZEJRVXdzUTBGQlV5eERRVUZVTEVWQlFWa3NSMEZCV2l4RFFVRlFPMEZCUVVFc1IwRkJWRHRCUVVGQkxFTkJRV3BDTzBGQlEwRXNTVUZCVFN3NFFrRkJWeXhWUVVGRExFZEJRVVE3UVVGQlFTeFRRVUZUTEZWQlFVTXNRMEZCUkR0QlFVRkJMRmRCUVU4c1MwRkJTeXhIUVVGTUxFTkJRVk1zUTBGQlZDeEZRVUZaTEVkQlFWb3NRMEZCVUR0QlFVRkJMRWRCUVZRN1FVRkJRU3hEUVVGcVFqdEJRVU5CTEVsQlFVMHNkMEpCUVZFc1ZVRkJReXhIUVVGRUxFVkJRVTBzUjBGQlRpeEZRVUZqTzBGQlEycERMRTFCUVUwc1QwRkJUeXhUUVVGVExFZEJRVlFzUTBGQllqdEJRVU5CTEUxQlFVMHNUMEZCVHl4VFFVRlRMRWRCUVZRc1EwRkJZanRCUVVOQkxGTkJRVThzVlVGQlF5eERRVUZFTzBGQlFVRXNWMEZCVHl4TFFVRkxMRXRCUVVzc1EwRkJUQ3hEUVVGTUxFTkJRVkE3UVVGQlFTeEhRVUZRTzBGQlEwUXNRMEZLVFRzN1FVRk5RU3hKUVVGTkxHOURRVUZqTEZWQlFVTXNVMEZCUkN4RlFVRlpMRTFCUVZvN1FVRkJRU3hOUVVGdlFpeFBRVUZ3UWl4NVJFRkJPRUlzU1VGQk9VSTdRVUZCUVN4VFFVRjFReXhWUVVGRExFTkJRVVFzUlVGQlR6dEJRVU4yUlN4WFFVRlBMRlZCUVZVc1EwRkJWaXhKUVVGbExFOUJRVThzUTBGQlVDeERRVUZtTEVkQlFUSkNMRkZCUVZFc1EwRkJVaXhEUVVGc1F6dEJRVU5FTEVkQlJqQkNPMEZCUVVFc1EwRkJjRUk3T3pzN096czdPenRCUVZkQkxFbEJRVTBzYzBKQlFVOHNXVUZCY1VJN1FVRkJRU3h2UTBGQmFrSXNXVUZCYVVJN1FVRkJha0lzWjBKQlFXbENPMEZCUVVFN08wRkJRM1pETEUxQlFVMHNhMEpCUVd0Q0xHRkJRV0VzVFVGQmNrTTdRVUZEUVN4TlFVRkpMRWxCUVVrc1EwRkJVanM3UVVGRlFTeFRRVUZQTEZWQlFVTXNSMEZCUkN4RlFVRnJRanRCUVVGQkxIVkRRVUZVTEVsQlFWTTdRVUZCVkN4VlFVRlRPMEZCUVVFN08wRkJRM1pDTEZGQlFVa3NTVUZCU1N4SFFVRlNPMEZCUTBFc1UwRkJTeXhKUVVGSkxFTkJRVlFzUlVGQldTeEpRVUZKTEdWQlFXaENMRVZCUVdsRExFZEJRV3BETEVWQlFYTkRPMEZCUTNCRExGVkJRVWtzWVVGQllTeERRVUZpTEhWQ1FVRm5RaXhEUVVGb1FpeFRRVUZ6UWl4SlFVRjBRaXhGUVVGS08wRkJRMFE3TzBGQlJVUXNWMEZCVHl4RFFVRlFPMEZCUTBRc1IwRlFSRHRCUVZGRUxFTkJXazA3T3pzN096czdPenRCUVhGQ1FTeEpRVUZOTEc5RFFVRmpMRlZCUVVNc1MwRkJSQ3hGUVVGUkxFMUJRVklzUlVGQlowSXNWMEZCYUVJc1JVRkJaME03UVVGRGVrUXNUVUZCVFN4alFVRmpMRTFCUVUwc1RVRkJNVUk3UVVGRFFTeE5RVUZOTEdGQlFXRXNZMEZCWXl4RFFVRnFRenM3UVVGRlFTeFRRVUZQTEZWQlFVTXNRMEZCUkN4RlFVRlBPenRCUVVWYUxGRkJRVWtzUzBGQlN5eE5RVUZOTEVOQlFVNHNRMEZCVkN4RlFVRnRRanRCUVVOcVFpeGhRVUZQTEU5QlFVOHNRMEZCVUN4RFFVRlFPMEZCUTBRN096dEJRVWRFTEZGQlFVa3NTMEZCU3l4TlFVRk5MRlZCUVU0c1EwRkJWQ3hGUVVFMFFqdEJRVU14UWl4aFFVRlBMRTlCUVU4c1ZVRkJVQ3hEUVVGUU8wRkJRMFE3TzBGQlJVUXNVVUZCU1N4SlFVRkpMRU5CUVZJN096dEJRVWRCTEZkQlFVOHNTVUZCU1N4WFFVRllMRVZCUVhkQ0xFZEJRWGhDTEVWQlFUWkNPMEZCUXpOQ0xGVkJRVWtzVFVGQlRTeERRVUZPTEVsQlFWY3NRMEZCV0N4SlFVRm5RaXhOUVVGTkxGVkJRVEZDTEVWQlFYTkRPMEZCUTNCRE8wRkJRMFE3UVVGRFJqczdRVUZGUkN4UlFVRk5MR3RDUVVGclFpeG5RMEZCY1VJc1RVRkJUU3hKUVVGSkxFTkJRVllzUTBGQmNrSXNSVUZCYlVNc1RVRkJUU3hEUVVGT0xFTkJRVzVETEVWQlFUWkRMRU5CUVRkRExFTkJRWGhDTzBGQlEwRXNVVUZCVFN4blFrRkJhVUlzVjBGQlJDeEhRVUZuUWl4WlFVRlpMRU5CUVZvc1JVRkJaU3hsUVVGbUxFTkJRV2hDTEVkQlFXdEVMR1ZCUVhoRk8wRkJRMEVzVjBGQlR5eG5RMEZCY1VJc1QwRkJUeXhKUVVGSkxFTkJRVmdzUTBGQmNrSXNSVUZCYjBNc1QwRkJUeXhEUVVGUUxFTkJRWEJETEVWQlFTdERMR0ZCUVM5RExFTkJRVkE3UVVGRFJDeEhRWFpDUkR0QlFYZENSQ3hEUVRWQ1RUczdRVUU0UWtFc1NVRkJUU3d3UWtGQlV5eFZRVUZETEUxQlFVUTdRVUZCUVN4VFFVRlpMRlZCUVVNc1EwRkJSRHRCUVVGQkxGZEJRVThzU1VGQlNTeE5RVUZZTzBGQlFVRXNSMEZCV2p0QlFVRkJMRU5CUVdZN08wRkJSVUVzU1VGQlRTeHpSVUZCSzBJN1FVRkJRU3hOUVVGRExHbENRVUZFTEhsRVFVRnhRaXhKUVVGeVFqdEJRVUZCTEZOQlFUaENMRlZCUVVNc1VVRkJSQ3hGUVVGWExFMUJRVmc3UVVGQlFTeFhRVUZ6UWl4VlFVRkRMRU5CUVVRc1JVRkJUenRCUVVOeVJ5eFZRVUZOTEdWQlFXVXNTMEZCU3l4SFFVRk1MRU5CUVZNc1UwRkJVeXhEUVVGc1FpeERRVUZ5UWp0QlFVTkJMRlZCUVUwc2FVSkJRV2xDTEVOQlFVVXNVVUZCUml4SlFVRmpMRWxCUVVrc2EwSkJRV3RDTEZsQlFXeENMRU5CUVd4Q0xFTkJRWFpDTzBGQlEwRXNZVUZCVHl4bFFVRmxMR05CUVhSQ08wRkJRMFFzUzBGS2VVVTdRVUZCUVN4SFFVRTVRanRCUVVGQkxFTkJRWEpET3p0QlFVMUJMRWxCUVUwc01FSkJRVk1zT0VKQlFXWTdRVUZEUVN4SlFVRk5MRFJEUVVGclFpdzJRa0ZCTmtJc1MwRkJTeXhKUVVGc1F5eERRVUY0UWpzN1FVRkZRU3hKUVVGTkxITkNRVUZQTEZWQlFVTXNSMEZCUkN4RlFVRk5MRWRCUVU0N1FVRkJRU3hUUVVGakxGVkJRVU1zUTBGQlJDeEZRVUZQTzBGQlEzWkRMRkZCUVUwc1dVRkJXU3hOUVVGTkxFZEJRWGhDTzBGQlEwRXNWMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hIUVVGTUxFbEJRVmtzVTBGQldpeEhRVUYzUWl4VFFVRjZRaXhKUVVGelF5eFRRVUYwUXl4SFFVRnJSQ3hIUVVGNlJEdEJRVU5FTEVkQlNHMUNPMEZCUVVFc1EwRkJZanM3UVVGTFFTeEpRVUZOTEhkQ1FVRlJMRlZCUVVNc1MwRkJSQ3hGUVVGUkxFZEJRVklzUlVGQllTeEhRVUZpTzBGQlFVRXNVMEZCY1VJc1ZVRkJReXhEUVVGRUxFVkJRVTg3UVVGREwwTXNVVUZCVFN4WFFVRlhMR2REUVVGeFFpeEhRVUZ5UWl4RlFVRXdRaXhIUVVFeFFpeEZRVUVyUWl4RFFVRXZRaXhEUVVGcVFqdEJRVU5CTEZkQlFVOHNkMEpCUVdFc1MwRkJZaXhGUVVGdlFpeFJRVUZ3UWl4RFFVRlFPMEZCUTBRc1IwRkliMEk3UVVGQlFTeERRVUZrT3p0QlFVdEJMRWxCUVUwc2MwUkJRWFZDTEZWQlFVTXNhVUpCUVVRN1FVRkJRU3hUUVVGMVFpeFZRVUZETEVOQlFVUXNSVUZCVHp0QlFVTm9SU3hUUVVGTExFbEJRVWtzUjBGQlZDeEpRVUZuUWl4RFFVRm9RaXhGUVVGdFFqdEJRVU5xUWl4VlFVRk5MRzFDUVVGdFFpeHJRa0ZCYTBJc1IwRkJiRUlzUTBGQmVrSTdRVUZEUVN4VlFVRkpMR2RDUVVGS0xFVkJRWE5DTzBGQlEzQkNMRlZCUVVVc1IwRkJSaXhKUVVGVExHbENRVUZwUWl4RlFVRkZMRWRCUVVZc1EwRkJha0lzUTBGQlZEdEJRVU5FTzBGQlEwWTdPMEZCUlVRc1YwRkJUeXhEUVVGUU8wRkJRMFFzUjBGVWJVTTdRVUZCUVN4RFFVRTNRanM3TzBGQldVRXNTVUZCVFN3MFFrRkJWU3hYUVVGWExFZEJRVmdzUTBGQmFFSTdRVUZEUVN4SlFVRk5MRFJDUVVGVkxGZEJRVmNzUzBGQldDeERRVUZvUWp0QlFVTkJMRWxCUVUwc2EwSkJRVXNzVjBGQlZ5eEpRVUZZTEVOQlFWZzdPMEZCUlVFc1NVRkJUU3cwUWtGQlZTeExRVU55UWl4TlFVRk5MRU5CUVU0c1JVRkJVeXhIUVVGVUxFTkJSSEZDTEVWQlJYSkNMRXRCUVVzc1MwRkdaMElzUTBGQmFFSTdPMEZCUzFBc1NVRkJUU3hsUVVGbE8wRkJRVUVzVFVGQlJ5eEhRVUZJTEZGQlFVY3NSMEZCU0R0QlFVRkJMRTFCUVZFc1MwRkJVaXhSUVVGUkxFdEJRVkk3UVVGQlFTeE5RVUZsTEVsQlFXWXNVVUZCWlN4SlFVRm1PMEZCUVVFc2QwSkJRWEZDTEV0QlFYSkNPMEZCUVVFc1RVRkJjVUlzUzBGQmNrSXNPRUpCUVRaQ0xFTkJRVGRDTzBGQlFVRXNiVUpCUTFnc1IwRkVWeXhWUVVOSUxFdEJSRWNzVlVGRFR5eEpRVVJRTEZWQlEyZENMRXRCUkdoQ08wRkJRVUVzUTBGQmNrSTdPMEZCUjA4c1NVRkJUU3h6UWtGQlR5eExRVU5zUWl4eFFrRkJjVUk3UVVGRGJrSXNUMEZCU3l4UFFVUmpPMEZCUlc1Q0xGTkJRVThzVDBGR1dUdEJRVWR1UWl4UlFVRk5MRTlCU0dFN1FVRkpia0k3UVVGS2JVSXNRMEZCY2tJc1EwRkVhMElzUlVGUGJFSXNXVUZRYTBJc1EwRkJZanM3UVVGVlVDeEpRVUZOTEdWQlFXVTdRVUZCUVN4TlFVRkhMRWRCUVVnc1UwRkJSeXhIUVVGSU8wRkJRVUVzVFVGQlVTeFZRVUZTTEZOQlFWRXNWVUZCVWp0QlFVRkJMRTFCUVc5Q0xGTkJRWEJDTEZOQlFXOUNMRk5CUVhCQ08wRkJRVUVzTUVKQlFTdENMRXRCUVM5Q08wRkJRVUVzVFVGQkswSXNTMEZCTDBJc0swSkJRWFZETEVOQlFYWkRPMEZCUVVFc2JVSkJRMWdzUjBGRVZ5eFZRVU5JTEZWQlJFY3NWVUZEV1N4VFFVUmFMRlZCUXpCQ0xFdEJSREZDTzBGQlFVRXNRMEZCY2tJN08wRkJSMDhzU1VGQlRTeHpRa0ZCVHl4TFFVTnNRaXh4UWtGQmNVSTdRVUZEYmtJc1QwRkJTeXhWUVVSak8wRkJSVzVDTEdOQlFWa3NUMEZHVHp0QlFVZHVRaXhoUVVGWExFOUJTRkU3UVVGSmJrSTdRVUZLYlVJc1EwRkJja0lzUTBGRWEwSXNSVUZQYkVJc1dVRlFhMElzUTBGQllqczdRVUZWUVN4SlFVRk5MSGRDUVVGUkxGVkJRVU1zUTBGQlJDeEZRVUZQTzBGQlF6RkNMRTFCUVVrc1JVRkJSU3hqUVVGR0xFTkJRV2xDTEV0QlFXcENMRU5CUVVvc1JVRkJOa0k3UVVGRE0wSXNWMEZCVHl4TFFVRkxMRU5CUVV3c1EwRkJVRHRCUVVORUxFZEJSa1FzVFVGRlR5eEpRVUZKTEVWQlFVVXNZMEZCUml4RFFVRnBRaXhMUVVGcVFpeERRVUZLTEVWQlFUWkNPMEZCUTJ4RExGZEJRVThzUzBGQlN5eERRVUZNTEVOQlFWQTdRVUZEUkR0QlFVTkVMRk5CUVU4c1EwRkJVRHRCUVVORUxFTkJVRTA3TzBGQlUwRXNTVUZCVFN4M1FrRkJVU3hOUVVGTkxFTkJRVTRzUlVGQlV5eERRVUZVTEVOQlFXUTdPMEZCUlZBc1NVRkJUU3hSUVVGUkxGVkJRVU1zU1VGQlJDeEZRVUZQTEVWQlFWQXNSVUZCVnl4RFFVRllMRVZCUVdsQ08wRkJRemRDTEUxQlFVMHNWMEZCVnl4UFFVRlBMRWxCUVhoQ08wRkJRMEVzVFVGQlRTeFRRVUZUTEV0QlFVc3NSVUZCY0VJN1FVRkRRU3hUUVVGUExFdEJRVXNzU1VGQlRDeERRVUZWTEV0QlFVc3NVMEZCVXl4UlFVRmtMRWxCUVRCQ0xGRkJRWEJETEVOQlFWQTdRVUZEUkN4RFFVcEVPenRCUVUxUExFbEJRVTBzYTBOQlFXRXNWVUZCUXl4SlFVRkVMRVZCUVU4c1JVRkJVQ3hGUVVGak8wRkJRM1JETEUxQlFVMHNXVUZCV1N4eFFrRkJVeXhKUVVGVUxFbEJRV2xDTEc5Q1FVRlhMRWxCUVZnc1EwRkJha0lzUjBGQmIwTXNTVUZCZEVRN1FVRkRRU3hOUVVGTkxGVkJRVlVzY1VKQlFWTXNSVUZCVkN4SlFVRmxMRzlDUVVGWExFVkJRVmdzUTBGQlppeEhRVUVyUWl4RlFVRXZRenM3UVVGRlFTeE5RVUZOTEhWQ1FVRmxMRk5CUVdZc1EwRkJUanM3UVVGRlFTeFRRVUZQTEZWQlFVTXNRMEZCUkN4RlFVRlBPMEZCUTFvc1UwRkJTeXhKUVVGSkxFZEJRVlFzU1VGQlowSXNUMEZCYUVJc1JVRkJlVUk3UVVGRGRrSXNZMEZCVVN4SFFVRlNMRWxCUVdVc1RVRkJUU3hWUVVGVkxFZEJRVllzUTBGQlRpeEZRVUZ6UWl4UlFVRlJMRWRCUVZJc1EwRkJkRUlzUlVGQmIwTXNRMEZCY0VNc1EwRkJaanRCUVVORU8wRkJRMFFzV1VGQlVTeEhRVUZTTEVkQlFXTXNUVUZCVFN4VlFVRlZMRWRCUVdoQ0xFVkJRWEZDTEZGQlFWRXNSMEZCTjBJc1JVRkJhME1zUTBGQmJFTXNRMEZCWkR0QlFVTkJMRmxCUVZFc1MwRkJVaXhIUVVGblFpeE5RVUZOTEZWQlFWVXNTMEZCYUVJc1JVRkJkVUlzVVVGQlVTeExRVUV2UWl4RlFVRnpReXhEUVVGMFF5eERRVUZvUWp0QlFVTkJMRmxCUVZFc1NVRkJVaXhIUVVGbExFMUJRVTBzVlVGQlZTeEpRVUZvUWl4RlFVRnpRaXhSUVVGUkxFbEJRVGxDTEVWQlFXOURMRU5CUVhCRExFTkJRV1k3UVVGRFFTeFpRVUZSTEV0QlFWSXNSMEZCWjBJc1owTkJRWEZDTEZWQlFWVXNTMEZCTDBJc1JVRkJjME1zVVVGQlVTeExRVUU1UXl4RlFVRnhSQ3hEUVVGeVJDeERRVUZvUWp0QlFVTkJMRmRCUVU4c1QwRkJVRHRCUVVORUxFZEJWRVE3UVVGVlJDeERRV2hDVFNJc0ltWnBiR1VpT2lKMGNtRnVjMlp2Y20xbGNuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5Qm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU3dnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNc0lITjBaWEJRY205bmNtVnpjeUI5SUdaeWIyMGdKeTR2WTJGc1l5YzdYRzVwYlhCdmNuUWdleUJwYzFOMGNtbHVaeUI5SUdaeWIyMGdKeTR2ZFhScGJITW5PMXh1YVcxd2IzSjBJSHNnWTI5c2IzSWdZWE1nY0dGeWMyVkRiMnh2Y2lCOUlHWnliMjBnSnk0dmNHRnljMlZ5Y3ljN1hHNWNibU52Ym5OMElHNXZiM0FnUFNBb2Rpa2dQVDRnZGp0Y2JseHVMeW9xWEc0Z0tpQkJjSEJsYm1RZ1ZXNXBkRnh1SUNvZ1FTQm1kVzVqZEdsdmJpQjBhR0YwSUhkcGJHd2dZWEJ3Wlc1a1hHNGdLaUJoY0hCbGJtUlZibWwwS0Nkd2VDY3NJREl3S1NBdFBpQW5NakJ3ZUNkY2JpQXFJRUJ3WVhKaGJTQWdlM04wY21sdVozMGdkVzVwZENsY2JpQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMWNiaUFxTDF4dVpYaHdiM0owSUdOdmJuTjBJR0Z3Y0dWdVpGVnVhWFFnUFNBb2RXNXBkQ2tnUFQ0Z0tIWXBJRDArSUdBa2UzWjlKSHQxYm1sMGZXQTdYRzVjYmk4cUtseHVJQ29nUTJ4aGJYQWdkbUZzZFdVZ1ltVjBkMlZsYmx4dUlDb2dRM0psWVhSbGN5QmhJR1oxYm1OMGFXOXVJSFJvWVhRZ2QybHNiQ0J5WlhOMGNtbGpkQ0JoSUdkcGRtVnVJSFpoYkhWbElHSmxkSGRsWlc0Z1lHMXBibUFnWVc1a0lHQnRZWGhnWEc0Z0tpQkFjR0Z5WVcwZ0lIdHVkVzFpWlhKOUlHMXBibHh1SUNvZ1FIQmhjbUZ0SUNCN2JuVnRZbVZ5ZlNCdFlYaGNiaUFxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjFjYmlBcUwxeHVaWGh3YjNKMElHTnZibk4wSUdOc1lXMXdUV0Y0SUQwZ0tHMWhlQ2tnUFQ0Z0tIWXBJRDArSUUxaGRHZ3ViV2x1S0hZc0lHMWhlQ2s3WEc1bGVIQnZjblFnWTI5dWMzUWdZMnhoYlhCTmFXNGdQU0FvYldsdUtTQTlQaUFvZGlrZ1BUNGdUV0YwYUM1dFlYZ29kaXdnYldsdUtUdGNibVY0Y0c5eWRDQmpiMjV6ZENCamJHRnRjQ0E5SUNodGFXNHNJRzFoZUNrZ1BUNGdlMXh1SUNCamIyNXpkQ0JmYldsdUlEMGdZMnhoYlhCTmFXNG9iV2x1S1R0Y2JpQWdZMjl1YzNRZ1gyMWhlQ0E5SUdOc1lXMXdUV0Y0S0cxaGVDazdYRzRnSUhKbGRIVnliaUFvZGlrZ1BUNGdYMjFwYmloZmJXRjRLSFlwS1R0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpiMjVrYVhScGIyNWhiQ0E5SUNoamIyNWthWFJwYjI0c0lHbG1WSEoxWlN3Z2FXWkdZV3h6WlNBOUlHNXZiM0FwSUQwK0lDaDJLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQmpiMjVrYVhScGIyNG9kaWtnUHlCcFpsUnlkV1VvZGlrZ09pQnBaa1poYkhObEtIWXBPMXh1ZlR0Y2JseHVMeW9xWEc0Z0tpQkdiRzkzWEc0Z0tpQkRiMjF3YjNObElHOTBhR1Z5SUhSeVlXNXpabTl5YldWeWN5QjBieUJ5ZFc0Z2JHbHVaV0Z5YVd4NVhHNGdLaUJtYkc5M0tHMXBiaWd5TUNrc0lHMWhlQ2cwTUNrcFhHNGdLaUJBY0dGeVlXMGdJSHN1TGk1bWRXNWpkR2x2Ym5OOUlIUnlZVzV6Wm05eWJXVnljMXh1SUNvZ1FISmxkSFZ5YmlCN1puVnVZM1JwYjI1OVhHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm1iRzkzSUQwZ0tDNHVMblJ5WVc1elptOXliV1Z5Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0J1ZFcxVWNtRnVjMlp2Y20xbGNuTWdQU0IwY21GdWMyWnZjbTFsY25NdWJHVnVaM1JvTzF4dUlDQnNaWFFnYVNBOUlEQTdYRzVjYmlBZ2NtVjBkWEp1SUNoaFkyTXNJQzR1TG1GeVozTXBJRDArSUh0Y2JpQWdJQ0JzWlhRZ2RpQTlJR0ZqWXp0Y2JpQWdJQ0JtYjNJZ0tHa2dQU0F3T3lCcElEd2diblZ0VkhKaGJuTm1iM0p0WlhKek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUhZZ1BTQjBjbUZ1YzJadmNtMWxjbk5iYVYwb2Rpd2dMaTR1WVhKbmN5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhZN1hHNGdJSDA3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRWx1ZEdWeWNHOXNZWFJsSUdaeWIyMGdjMlYwSUc5bUlIWmhiSFZsY3lCMGJ5QmhibTkwYUdWeVhHNGdLaUJBY0dGeVlXMGdJSHRCY25KaGVYMGdhVzV3ZFhRZ1lYSnlZWGxjYmlBcUlFQndZWEpoYlNBZ2UwRnljbUY1ZlNCdmRYUndkWFJjYmlBcUlFQndZWEpoYlNBZ2UwWjFibU4wYVc5dWZTQnlZVzVuWlVWaGMybHVaMXh1SUNvZ1FISmxkSFZ5YmlCN1JuVnVZM1JwYjI1OVhHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBiblJsY25CdmJHRjBaU0E5SUNocGJuQjFkQ3dnYjNWMGNIVjBMQ0J5WVc1blpVVmhjMmx1WnlrZ1BUNGdlMXh1SUNCamIyNXpkQ0J5WVc1blpVeGxibWQwYUNBOUlHbHVjSFYwTG14bGJtZDBhRHRjYmlBZ1kyOXVjM1FnWm1sdVlXeEpibVJsZUNBOUlISmhibWRsVEdWdVozUm9JQzBnTVR0Y2JseHVJQ0J5WlhSMWNtNGdLSFlwSUQwK0lIdGNiaUFnSUNBdkx5QkpaaUIyWVd4MVpTQnZkWFJ6YVdSbElHMXBibWx0ZFcwZ2NtRnVaMlVzSUhGMWFXTnJiSGtnY21WMGRYSnVYRzRnSUNBZ2FXWWdLSFlnUEQwZ2FXNXdkWFJiTUYwcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCdmRYUndkWFJiTUYwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1NXWWdkbUZzZFdVZ2IzVjBjMmxrWlNCdFlYaHBiWFZ0SUhKaGJtZGxMQ0J4ZFdsamEyeDVJSEpsZEhWeWJseHVJQ0FnSUdsbUlDaDJJRDQ5SUdsdWNIVjBXMlpwYm1Gc1NXNWtaWGhkS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYjNWMGNIVjBXMlpwYm1Gc1NXNWtaWGhkTzF4dUlDQWdJSDFjYmx4dUlDQWdJR3hsZENCcElEMGdNVHRjYmx4dUlDQWdJQzh2SUVacGJtUWdhVzVrWlhnZ2IyWWdjbUZ1WjJVZ2MzUmhjblJjYmlBZ0lDQm1iM0lnS0RzZ2FTQThJSEpoYm1kbFRHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJR2xtSUNocGJuQjFkRnRwWFNBK0lIWWdmSHdnYVNBOVBUMGdabWx1WVd4SmJtUmxlQ2tnZTF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQmpiMjV6ZENCd2NtOW5jbVZ6YzBsdVVtRnVaMlVnUFNCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTaHBibkIxZEZ0cElDMGdNVjBzSUdsdWNIVjBXMmxkTENCMktUdGNiaUFnSUNCamIyNXpkQ0JsWVhObFpGQnliMmR5WlhOeklEMGdLSEpoYm1kbFJXRnphVzVuS1NBL0lISmhibWRsUldGemFXNW5XMmxkS0hCeWIyZHlaWE56U1c1U1lXNW5aU2tnT2lCd2NtOW5jbVZ6YzBsdVVtRnVaMlU3WEc0Z0lDQWdjbVYwZFhKdUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLRzkxZEhCMWRGdHBJQzBnTVYwc0lHOTFkSEIxZEZ0cFhTd2daV0Z6WldSUWNtOW5jbVZ6Y3lrN1hHNGdJSDA3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2IyWm1jMlYwSUQwZ0tHOXlhV2RwYmlrZ1BUNGdLSFlwSUQwK0lIWWdMU0J2Y21sbmFXNDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQm5aVzVsY21GMFpVNXZia2x1ZEdWeVozSmhkR1ZrVTNCeWFXNW5JRDBnS0dGc2RHVnlSR2x6Y0d4aFkyVnRaVzUwSUQwZ2JtOXZjQ2tnUFQ0Z0tHTnZibk4wWVc1MExDQnZjbWxuYVc0cElEMCtJQ2gyS1NBOVBpQjdYRzRnSUdOdmJuTjBJR1JwYzNCc1lXTmxiV1Z1ZENBOUlFMWhkR2d1WVdKektHOXlhV2RwYmlBdElIWXBPMXh1SUNCamIyNXpkQ0J6Y0hKcGJtZE5iMlJwWm1sbGNpQTlJQzBnWTI5dWMzUmhiblFnS2lBb01DQXRJR0ZzZEdWeVJHbHpjR3hoWTJWdFpXNTBLR1JwYzNCc1lXTmxiV1Z1ZENrcE8xeHVJQ0J5WlhSMWNtNGdaR2x6Y0d4aFkyVnRaVzUwSUMwZ2MzQnlhVzVuVFc5a2FXWnBaWEk3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQnlhVzVuSUQwZ1oyVnVaWEpoZEdWT2IyNUpiblJsY21keVlYUmxaRk53Y21sdVp5Z3BPMXh1Wlhod2IzSjBJR052Ym5OMElHNXZibXhwYm1WaGNsTndjbWx1WnlBOUlHZGxibVZ5WVhSbFRtOXVTVzUwWlhKbmNtRjBaV1JUY0hKcGJtY29UV0YwYUM1emNYSjBLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSGR5WVhBZ1BTQW9iV2x1TENCdFlYZ3BJRDArSUNoMktTQTlQaUI3WEc0Z0lHTnZibk4wSUhKaGJtZGxVMmw2WlNBOUlHMWhlQ0F0SUcxcGJqdGNiaUFnY21WMGRYSnVJQ2dvZGlBdElHMXBiaWtnSlNCeVlXNW5aVk5wZW1VZ0t5QnlZVzVuWlZOcGVtVXBJQ1VnY21GdVoyVlRhWHBsSUNzZ2JXbHVPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhOMFpYQnpJRDBnS0hOMFpYQnpMQ0J0YVc0c0lHMWhlQ2tnUFQ0Z0tIWXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2NISnZaM0psYzNNZ1BTQm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2h0YVc0c0lHMWhlQ3dnZGlrN1hHNGdJSEpsZEhWeWJpQnpkR1Z3VUhKdlozSmxjM01vYzNSbGNITXNJSEJ5YjJkeVpYTnpLVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCMGNtRnVjMlp2Y20xRGFHbHNaRlpoYkhWbGN5QTlJQ2hqYUdsc1pGUnlZVzV6Wm05eWJXVnljeWtnUFQ0Z0tIWXBJRDArSUh0Y2JpQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIWXBJSHRjYmlBZ0lDQmpiMjV6ZENCamFHbHNaRlJ5WVc1elptOXliV1Z5SUQwZ1kyaHBiR1JVY21GdWMyWnZjbTFsY25OYmEyVjVYVHRjYmlBZ0lDQnBaaUFvWTJocGJHUlVjbUZ1YzJadmNtMWxjaWtnZTF4dUlDQWdJQ0FnZGx0clpYbGRJRDBnWTJocGJHUlVjbUZ1YzJadmNtMWxjaWgyVzJ0bGVWMHBPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQjJPMXh1ZlR0Y2JseHVMeThnVlc1cGRDQjBjbUZ1YzJadmNtMWxjbk5jYm1WNGNHOXlkQ0JqYjI1emRDQndaWEpqWlc1MElEMGdZWEJ3Wlc1a1ZXNXBkQ2duSlNjcE8xeHVaWGh3YjNKMElHTnZibk4wSUdSbFozSmxaWE1nUFNCaGNIQmxibVJWYm1sMEtDZGtaV2NuS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0J3ZUNBOUlHRndjR1Z1WkZWdWFYUW9KM0I0SnlrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCeVoySlZibWwwSUQwZ1pteHZkeWhjYmlBZ1kyeGhiWEFvTUN3Z01qVTFLU3hjYmlBZ1RXRjBhQzV5YjNWdVpGeHVLVHRjYmx4dVkyOXVjM1FnY21kaVlWUmxiWEJzWVhSbElEMGdLSHNnY21Wa0xDQm5jbVZsYml3Z1lteDFaU3dnWVd4d2FHRWdQU0F4SUgwcElEMCtJRnh1SUNCZ2NtZGlZU2drZTNKbFpIMHNJQ1I3WjNKbFpXNTlMQ0FrZTJKc2RXVjlMQ0FrZTJGc2NHaGhmU2xnTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21kaVlTQTlJR1pzYjNjb1hHNGdJSFJ5WVc1elptOXliVU5vYVd4a1ZtRnNkV1Z6S0h0Y2JpQWdJQ0J5WldRNklISm5ZbFZ1YVhRc1hHNGdJQ0FnWjNKbFpXNDZJSEpuWWxWdWFYUXNYRzRnSUNBZ1lteDFaVG9nY21kaVZXNXBkQ3hjYmlBZ0lDQmhiSEJvWVZ4dUlDQjlLU3hjYmlBZ2NtZGlZVlJsYlhCc1lYUmxYRzRwTzF4dVhHNWpiMjV6ZENCb2MyeGhWR1Z0Y0d4aGRHVWdQU0FvZXlCb2RXVXNJSE5oZEhWeVlYUnBiMjRzSUd4cFoyaDBibVZ6Y3l3Z1lXeHdhR0VnUFNBeElIMHBJRDArSUZ4dUlDQmdhSE5zWVNna2UyaDFaWDBzSUNSN2MyRjBkWEpoZEdsdmJuMHNJQ1I3YkdsbmFIUnVaWE56ZlN3Z0pIdGhiSEJvWVgwcFlEdGNibHh1Wlhod2IzSjBJR052Ym5OMElHaHpiR0VnUFNCbWJHOTNLRnh1SUNCMGNtRnVjMlp2Y20xRGFHbHNaRlpoYkhWbGN5aDdYRzRnSUNBZ2FIVmxPaUJ3WVhKelpVWnNiMkYwTEZ4dUlDQWdJSE5oZEhWeVlYUnBiMjQ2SUhCbGNtTmxiblFzWEc0Z0lDQWdiR2xuYUhSdVpYTnpPaUJ3WlhKalpXNTBMRnh1SUNBZ0lHRnNjR2hoWEc0Z0lIMHBMRnh1SUNCb2MyeGhWR1Z0Y0d4aGRHVmNiaWs3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYjJ4dmNpQTlJQ2gyS1NBOVBpQjdYRzRnSUdsbUlDaDJMbWhoYzA5M2JsQnliM0JsY25SNUtDZHlaV1FuS1NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ5WjJKaEtIWXBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tIWXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb0oyaDFaU2NwS1NCN1hHNGdJQ0FnY21WMGRYSnVJR2h6YkdFb2RpazdYRzRnSUgxY2JpQWdjbVYwZFhKdUlIWTdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWVd4d2FHRWdQU0JqYkdGdGNDZ3dMQ0F4S1R0Y2JseHVZMjl1YzNRZ1lteGxibVFnUFNBb1puSnZiU3dnZEc4c0lIWXBJRDArSUh0Y2JpQWdZMjl1YzNRZ1puSnZiVVY0Y0c4Z1BTQm1jbTl0SUNvZ1puSnZiVHRjYmlBZ1kyOXVjM1FnZEc5RmVIQnZJRDBnZEc4Z0tpQjBienRjYmlBZ2NtVjBkWEp1SUUxaGRHZ3VjM0Z5ZENoMklDb2dLSFJ2Ulhod2J5QXRJR1p5YjIxRmVIQnZLU0FySUdaeWIyMUZlSEJ2S1R0Y2JuMDdYRzR2THlCb2RIUndPaTh2WTI5a1pYQmxiaTVwYnk5dmMzVmliR0ZyWlM5d1pXNHZlRWRXVm1GT1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWW14bGJtUkRiMnh2Y2lBOUlDaG1jbTl0TENCMGJ5a2dQVDRnZTF4dUlDQmpiMjV6ZENCbWNtOXRRMjlzYjNJZ1BTQnBjMU4wY21sdVp5aG1jbTl0S1NBL0lIQmhjbk5sUTI5c2IzSW9abkp2YlNrZ09pQm1jbTl0TzF4dUlDQmpiMjV6ZENCMGIwTnZiRzl5SUQwZ2FYTlRkSEpwYm1jb2RHOHBJRDhnY0dGeWMyVkRiMnh2Y2loMGJ5azZJSFJ2TzF4dVhHNGdJR052Ym5OMElHSnNaVzVrWldRZ1BTQjdJQzR1TG1aeWIyMURiMnh2Y2lCOU8xeHVYRzRnSUhKbGRIVnliaUFvZGlrZ1BUNGdlMXh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCaWJHVnVaR1ZrS1NCN1hHNGdJQ0FnSUNCaWJHVnVaR1ZrVzJ0bGVWMGdQU0JpYkdWdVpDaG1jbTl0UTI5c2IzSmJhMlY1WFN3Z2RHOURiMnh2Y2x0clpYbGRMQ0IyS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdZbXhsYm1SbFpDNXlaV1FnUFNCaWJHVnVaQ2htY205dFEyOXNiM0l1Y21Wa0xDQjBiME52Ykc5eUxuSmxaQ3dnZGlrN1hHNGdJQ0FnWW14bGJtUmxaQzVuY21WbGJpQTlJR0pzWlc1a0tHWnliMjFEYjJ4dmNpNW5jbVZsYml3Z2RHOURiMnh2Y2k1bmNtVmxiaXdnZGlrN1hHNGdJQ0FnWW14bGJtUmxaQzVpYkhWbElEMGdZbXhsYm1Rb1puSnZiVU52Ykc5eUxtSnNkV1VzSUhSdlEyOXNiM0l1WW14MVpTd2dkaWs3WEc0Z0lDQWdZbXhsYm1SbFpDNWhiSEJvWVNBOUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLR1p5YjIxRGIyeHZjaTVoYkhCb1lTd2dkRzlEYjJ4dmNpNWhiSEJvWVN3Z2RpazdYRzRnSUNBZ2NtVjBkWEp1SUdKc1pXNWtaV1E3WEc0Z0lIMDdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy90cmFuc2Zvcm1lcnMuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNvbG9yID0gZXhwb3J0cy5oc2xhID0gZXhwb3J0cy5oZXggPSBleHBvcnRzLnJnYmEgPSBleHBvcnRzLnJnYlVuaXQgPSBleHBvcnRzLnNjYWxlID0gZXhwb3J0cy5weCA9IGV4cG9ydHMucGVyY2VudCA9IGV4cG9ydHMuZGVncmVlcyA9IGV4cG9ydHMuYWxwaGEgPSBleHBvcnRzLm51bWJlciA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBWYWx1ZSB0eXBlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGFscGhhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBkZWdyZWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBoZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGhzbGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHBlcmNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHB4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiByZ2JVbml0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiByZ2JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHNjYWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgbnVtYmVyID0gZXhwb3J0cy5udW1iZXIgPSB7XG4gIHRlc3Q6IF91dGlscy5pc051bSxcbiAgcGFyc2U6IHBhcnNlRmxvYXRcbn07XG5cbi8vIFZhbHVlIHR5cGVzXG52YXIgYWxwaGEgPSBleHBvcnRzLmFscGhhID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICB0cmFuc2Zvcm06IF90cmFuc2Zvcm1lcnMuYWxwaGFcbn0pO1xuXG52YXIgZGVncmVlcyA9IGV4cG9ydHMuZGVncmVlcyA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCdkZWcnLCBfdHJhbnNmb3JtZXJzLmRlZ3JlZXMpO1xudmFyIHBlcmNlbnQgPSBleHBvcnRzLnBlcmNlbnQgPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgnJScsIF90cmFuc2Zvcm1lcnMucGVyY2VudCk7XG52YXIgcHggPSBleHBvcnRzLnB4ID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJ3B4JywgX3RyYW5zZm9ybWVycy5weCk7XG5cbnZhciBzY2FsZSA9IGV4cG9ydHMuc2NhbGUgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIGRlZmF1bHQ6IDFcbn0pO1xuXG52YXIgcmdiVW5pdCA9IGV4cG9ydHMucmdiVW5pdCA9IF9leHRlbmRzKHt9LCBudW1iZXIsIHtcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLnJnYlVuaXRcbn0pO1xuXG52YXIgcmdiYSA9IGV4cG9ydHMucmdiYSA9IHtcbiAgdGVzdDogX3V0aWxzLmlzUmdiLFxuICBwYXJzZTogX3BhcnNlcnMucmdiYSxcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLnJnYmFcbn07XG5cbnZhciBoZXggPSBleHBvcnRzLmhleCA9IF9leHRlbmRzKHt9LCByZ2JhLCB7XG4gIHRlc3Q6IF91dGlscy5pc0hleCxcbiAgcGFyc2U6IF9wYXJzZXJzLmhleFxufSk7XG5cbnZhciBoc2xhID0gZXhwb3J0cy5oc2xhID0ge1xuICB0ZXN0OiBfdXRpbHMuaXNIc2wsXG4gIHBhcnNlOiBfcGFyc2Vycy5oc2xhLFxuICB0cmFuc2Zvcm06IF90cmFuc2Zvcm1lcnMuaHNsYVxufTtcblxudmFyIGNvbG9yID0gZXhwb3J0cy5jb2xvciA9IHtcbiAgcGFyc2U6IF9wYXJzZXJzLmNvbG9yLFxuICB0ZXN0OiBfdXRpbHMuaXNDb2xvcixcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLmNvbG9yXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRtRnNkV1V0ZEhsd1pYTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGaFFUczdRVUZWUVRzN1FVRk5RVHM3UVVGVFR5eEpRVUZOTERCQ1FVRlRPMEZCUTNCQ0xHOUNRVVJ2UWp0QlFVVndRaXhUUVVGUE8wRkJSbUVzUTBGQlpqczdPMEZCVFVFc1NVRkJUU3h4UTBGRFVpeE5RVVJSTzBGQlJWZzdRVUZHVnl4RlFVRk9PenRCUVV0QkxFbEJRVTBzTkVKQlFWVXNNa0pCUVdVc1MwRkJaaXgzUWtGQmFFSTdRVUZEUVN4SlFVRk5MRFJDUVVGVkxESkNRVUZsTEVkQlFXWXNkMEpCUVdoQ08wRkJRMEVzU1VGQlRTeHJRa0ZCU3l3eVFrRkJaU3hKUVVGbUxHMUNRVUZZT3p0QlFVVkJMRWxCUVUwc2NVTkJRMUlzVFVGRVVUdEJRVVZZTEZkQlFWTTdRVUZHUlN4RlFVRk9PenRCUVV0QkxFbEJRVTBzZVVOQlExSXNUVUZFVVR0QlFVVllPMEZCUmxjc1JVRkJUanM3UVVGTFFTeEpRVUZOTEhOQ1FVRlBPMEZCUTJ4Q0xHOUNRVVJyUWp0QlFVVnNRaXh6UWtGR2EwSTdRVUZIYkVJN1FVRklhMElzUTBGQllqczdRVUZOUVN4SlFVRk5MR2xEUVVOU0xFbEJSRkU3UVVGRldDeHZRa0ZHVnp0QlFVZFlPMEZCU0Zjc1JVRkJUanM3UVVGTlFTeEpRVUZOTEhOQ1FVRlBPMEZCUTJ4Q0xHOUNRVVJyUWp0QlFVVnNRaXh6UWtGR2EwSTdRVUZIYkVJN1FVRklhMElzUTBGQllqczdRVUZOUVN4SlFVRk5MSGRDUVVGUk8wRkJRMjVDTEhWQ1FVUnRRanRCUVVWdVFpeHpRa0ZHYlVJN1FVRkhia0k3UVVGSWJVSXNRMEZCWkNJc0ltWnBiR1VpT2lKMllXeDFaUzEwZVhCbGN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLbHh1SUNvZ1ZtRnNkV1VnZEhsd1pYTmNiaUFxWEc0Z0tpQmhiSEJvWVZ4dUlDb2daR1ZuY21WbGMxeHVJQ29nYUdWNFhHNGdLaUJvYzJ4aFhHNGdLaUJ3WlhKalpXNTBYRzRnS2lCd2VGeHVJQ29nY21kaVZXNXBkRnh1SUNvZ2NtZGlYRzRnS2lCelkyRnNaVnh1SUNvdlhHNXBiWEJ2Y25RZ2UxeHVJQ0J5WjJKVmJtbDBJR0Z6SUhSeVlXNXpabTl5YlZKSFFsVnVhWFFzWEc0Z0lISm5ZbUVnWVhNZ2RISmhibk5tYjNKdFVtZGlZU3hjYmlBZ1lXeHdhR0VnWVhNZ2RISmhibk5tYjNKdFFXeHdhR0VzWEc0Z0lHaHpiR0VnWVhNZ2RISmhibk5tYjNKdFNITnNZU3hjYmlBZ1kyOXNiM0lnWVhNZ2RISmhibk5tYjNKdFEyOXNiM0lzWEc0Z0lIQjRJR0Z6SUhSeVlXNXpabTl5YlZCNExGeHVJQ0J3WlhKalpXNTBJR0Z6SUhSeVlXNXpabTl5YlZCbGNtTmxiblFzWEc0Z0lHUmxaM0psWlhNZ1lYTWdkSEpoYm5ObWIzSnRSR1ZuY21WbGMxeHVmU0JtY205dElDY3VMM1J5WVc1elptOXliV1Z5Y3ljN1hHNXBiWEJ2Y25RZ2UxeHVJQ0JvWlhnZ1lYTWdjR0Z5YzJWSVpYZ3NYRzRnSUhKblltRWdZWE1nY0dGeWMyVlNaMkpoTEZ4dUlDQm9jMnhoSUdGeklIQmhjbk5sU0hOc1lTeGNiaUFnWTI5c2IzSWdZWE1nY0dGeWMyVkRiMnh2Y2x4dWZTQm1jbTl0SUNjdUwzQmhjbk5sY25Nbk8xeHVhVzF3YjNKMElIdGNiaUFnWTNKbFlYUmxWVzVwZEZSNWNHVXNYRzRnSUdselRuVnRMRnh1SUNCcGMxSm5ZaXhjYmlBZ2FYTkljMndzWEc0Z0lHbHpTR1Y0TEZ4dUlDQnBjME52Ykc5eVhHNTlJR1p5YjIwZ0p5NHZkWFJwYkhNbk8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2JuVnRZbVZ5SUQwZ2UxeHVJQ0IwWlhOME9pQnBjMDUxYlN4Y2JpQWdjR0Z5YzJVNklIQmhjbk5sUm14dllYUmNibjA3WEc1Y2JpOHZJRlpoYkhWbElIUjVjR1Z6WEc1bGVIQnZjblFnWTI5dWMzUWdZV3h3YUdFZ1BTQjdYRzRnSUM0dUxtNTFiV0psY2l4Y2JpQWdkSEpoYm5ObWIzSnRPaUIwY21GdWMyWnZjbTFCYkhCb1lWeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR1JsWjNKbFpYTWdQU0JqY21WaGRHVlZibWwwVkhsd1pTZ25aR1ZuSnl3Z2RISmhibk5tYjNKdFJHVm5jbVZsY3lrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnY0dWeVkyVnVkQ0E5SUdOeVpXRjBaVlZ1YVhSVWVYQmxLQ2NsSnl3Z2RISmhibk5tYjNKdFVHVnlZMlZ1ZENrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnY0hnZ1BTQmpjbVZoZEdWVmJtbDBWSGx3WlNnbmNIZ25MQ0IwY21GdWMyWnZjbTFRZUNrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCelkyRnNaU0E5SUh0Y2JpQWdMaTR1Ym5WdFltVnlMRnh1SUNCa1pXWmhkV3gwT2lBeFhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjbWRpVlc1cGRDQTlJSHRjYmlBZ0xpNHViblZ0WW1WeUxGeHVJQ0IwY21GdWMyWnZjbTA2SUhSeVlXNXpabTl5YlZKSFFsVnVhWFJjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCeVoySmhJRDBnZTF4dUlDQjBaWE4wT2lCcGMxSm5ZaXhjYmlBZ2NHRnljMlU2SUhCaGNuTmxVbWRpWVN4Y2JpQWdkSEpoYm5ObWIzSnRPaUIwY21GdWMyWnZjbTFTWjJKaFhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdhR1Y0SUQwZ2UxeHVJQ0F1TGk1eVoySmhMRnh1SUNCMFpYTjBPaUJwYzBobGVDeGNiaUFnY0dGeWMyVTZJSEJoY25ObFNHVjRYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUhOc1lTQTlJSHRjYmlBZ2RHVnpkRG9nYVhOSWMyd3NYRzRnSUhCaGNuTmxPaUJ3WVhKelpVaHpiR0VzWEc0Z0lIUnlZVzV6Wm05eWJUb2dkSEpoYm5ObWIzSnRTSE5zWVZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnZiRzl5SUQwZ2UxeHVJQ0J3WVhKelpUb2djR0Z5YzJWRGIyeHZjaXhjYmlBZ2RHVnpkRG9nYVhORGIyeHZjaXhjYmlBZ2RISmhibk5tYjNKdE9pQjBjbUZ1YzJadmNtMURiMnh2Y2x4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3ZhbHVlLXR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBjbGFtcFByb2dyZXNzID0gKDAsIF90cmFuc2Zvcm1lcnMuY2xhbXApKDAsIDEpO1xuXG5mdW5jdGlvbiBjYWxjVmFsdWVBdFRpbWUoZnJvbSwgdG8sIGR1cmF0aW9uLCBlbGFwc2VkLCBlYXNlKSB7XG4gIHZhciBwcm9ncmVzc0F0VGltZSA9IGVhc2UoY2xhbXBQcm9ncmVzcygoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKDAsIGR1cmF0aW9uLCBlbGFwc2VkKSkpO1xuICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShmcm9tLCB0bywgcHJvZ3Jlc3NBdFRpbWUpO1xufVxuXG52YXIgVHdlZW5CbGVuZCA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhUd2VlbkJsZW5kLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBUd2VlbkJsZW5kKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2VlbkJsZW5kKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVHdlZW5CbGVuZC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZyb20gPSBfcHJvcHMuZnJvbTtcbiAgICB2YXIgdG8gPSBfcHJvcHMudG87XG4gICAgdmFyIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uO1xuICAgIHZhciBhY2N1cmFjeSA9IF9wcm9wcy5hY2N1cmFjeTtcblxuICAgIHZhciBhID0gZnJvbTtcbiAgICB2YXIgYiA9IHRvO1xuICAgIHZhciBhRHVyYXRpb24gPSBhLmdldER1cmF0aW9uKCk7XG4gICAgdmFyIGJEdXJhdGlvbiA9IGIuZ2V0RHVyYXRpb24oKTtcblxuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbiB8fCBNYXRoLm1pbihhRHVyYXRpb24gLSBhLmdldEVsYXBzZWQoKSwgYkR1cmF0aW9uKTtcblxuICAgIHZhciBhRWFzZSA9IGEuZ2V0UHJvcCgnZWFzZScpO1xuICAgIHZhciBiRWFzZSA9IGIuZ2V0UHJvcCgnZWFzZScpO1xuICAgIHZhciBhRnJvbSA9IGEuZ2V0UHJvcCgnZnJvbScpO1xuICAgIHZhciBiRnJvbSA9IGIuZ2V0UHJvcCgnZnJvbScpO1xuICAgIHZhciBhVG8gPSBhLmdldFByb3AoJ3RvJyk7XG4gICAgdmFyIGJUbyA9IGIuZ2V0UHJvcCgndG8nKTtcbiAgICB2YXIgYlZhbHVlQXRCbGVuZENvbXBsZXRlID0gY2FsY1ZhbHVlQXRUaW1lKGJGcm9tLCBiVG8sIGJEdXJhdGlvbiwgdGhpcy5kdXJhdGlvbiwgYkVhc2UpO1xuICAgIHZhciBiU3RhcnRzSGlnaGVyVGhhbkEgPSBiRnJvbSA+IGEuZ2V0KCk7XG5cbiAgICB0aGlzLmJsZW5kUG9pbnRzID0gW1swLCBhLmdldCgpXSwgW3RoaXMuZHVyYXRpb24sIGJWYWx1ZUF0QmxlbmRDb21wbGV0ZV1dO1xuXG4gICAgLy8gRmluZCB0d2VlbiBpbnRlcnNlY3Rpb25cbiAgICB2YXIgdGltZXN0ZXAgPSB0aGlzLmR1cmF0aW9uIC8gYWNjdXJhY3k7XG5cbiAgICB2YXIgZm91bmRQMSA9IGZhbHNlO1xuICAgIHZhciBmb3VuZFAyID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjY3VyYWN5OyBpKyspIHtcbiAgICAgIHZhciB0b3RhbFRpbWUgPSBpICogdGltZXN0ZXA7XG5cbiAgICAgIHZhciBhVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYUZyb20sIGFUbywgYUR1cmF0aW9uLCBhLmVsYXBzZWQgKyB0b3RhbFRpbWUsIGFFYXNlKTtcbiAgICAgIHZhciBiVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYkZyb20sIGJUbywgYkR1cmF0aW9uLCBiLmVsYXBzZWQgKyB0b3RhbFRpbWUsIGJFYXNlKTtcblxuICAgICAgdmFyIGhhc0ludGVyc2VjdGVkID0gYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA8IGJWYWx1ZUF0VGltZSB8fCAhYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA+IGJWYWx1ZUF0VGltZTtcblxuICAgICAgaWYgKCFmb3VuZFAxICYmIGhhc0ludGVyc2VjdGVkKSB7XG4gICAgICAgIHRoaXMuYmxlbmRQb2ludHMuc3BsaWNlKDAsIDEsIFt0b3RhbFRpbWUsIGJWYWx1ZUF0VGltZV0pO1xuICAgICAgICBmb3VuZFAxID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETyBnbyBiYWNrIHRocm91Z2ggYW5kIGNvbW1lbnRcbiAgICAgIHZhciBoYXNJbnRlcnNlY3RlZEIgPSBiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lIDwgYlZhbHVlQXRUaW1lIHx8ICFiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lID4gYlZhbHVlQXRUaW1lO1xuXG4gICAgICBpZiAoZm91bmRQMSAmJiBoYXNJbnRlcnNlY3RlZEIpIHtcbiAgICAgICAgdGhpcy5ibGVuZFBvaW50c1syXSA9IFt0b3RhbFRpbWUsIGJWYWx1ZUF0VGltZV07XG4gICAgICAgIGZvdW5kUDIgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm91bmRQMikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG8uc3RhcnQoKTtcbiAgfTtcblxuICBUd2VlbkJsZW5kLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmcm9tID0gX3Byb3BzMi5mcm9tO1xuICAgIHZhciB0byA9IF9wcm9wczIudG87XG5cbiAgICB2YXIgYSA9IGZyb207XG4gICAgdmFyIGIgPSB0bztcblxuICAgIHZhciBwcm9ncmVzcyA9IGNsYW1wUHJvZ3Jlc3MoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh0aGlzLmJsZW5kUG9pbnRzWzBdWzBdLCB0aGlzLmJsZW5kUG9pbnRzWzJdWzBdLCBhLmdldEVsYXBzZWQoKSkpO1xuICAgIGlmIChwcm9ncmVzcyA+PSAxKSB7XG4gICAgICByZXR1cm4gYi5nZXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFQID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKSh0aGlzLmJsZW5kUG9pbnRzWzBdWzFdLCB0aGlzLmJsZW5kUG9pbnRzWzFdWzFdLCBwcm9ncmVzcyk7XG4gICAgICB2YXIgYlAgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKHRoaXMuYmxlbmRQb2ludHNbMV1bMV0sIHRoaXMuYmxlbmRQb2ludHNbMl1bMV0sIHByb2dyZXNzKTtcbiAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGFQLCBiUCwgcHJvZ3Jlc3MpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVHdlZW5CbGVuZDtcbn0oXzIuZGVmYXVsdCk7XG5cblR3ZWVuQmxlbmQuZGVmYXVsdFByb3BzID0ge1xuICBhY2N1cmFjeTogNjBcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IFR3ZWVuQmxlbmQocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJKc1pXNWtMWFIzWldWdWN5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3UVVGRFFUczdRVUZEUVRzN096czdPenM3T3p0QlFVVkJMRWxCUVUwc1owSkJRV2RDTEhsQ1FVRk5MRU5CUVU0c1JVRkJVeXhEUVVGVUxFTkJRWFJDT3p0QlFVVkJMRk5CUVZNc1pVRkJWQ3hEUVVGNVFpeEpRVUY2UWl4RlFVRXJRaXhGUVVFdlFpeEZRVUZ0UXl4UlFVRnVReXhGUVVFMlF5eFBRVUUzUXl4RlFVRnpSQ3hKUVVGMFJDeEZRVUUwUkR0QlFVTXhSQ3hOUVVGTkxHbENRVUZwUWl4TFFVRkxMR05CUVdNc1owTkJRWEZDTEVOQlFYSkNMRVZCUVhkQ0xGRkJRWGhDTEVWQlFXdERMRTlCUVd4RExFTkJRV1FzUTBGQlRDeERRVUYyUWp0QlFVTkJMRk5CUVU4c1owTkJRWEZDTEVsQlFYSkNMRVZCUVRKQ0xFVkJRVE5DTEVWQlFTdENMR05CUVM5Q0xFTkJRVkE3UVVGRFJEczdTVUZGU3l4Vk96czdPenM3T3pzN2RVSkJTMG9zVHl4elFrRkJWVHRCUVVGQkxHbENRVU5wUXl4TFFVRkxMRXRCUkhSRE8wRkJRVUVzVVVGRFFTeEpRVVJCTEZWQlEwRXNTVUZFUVR0QlFVRkJMRkZCUTAwc1JVRkVUaXhWUVVOTkxFVkJSRTQ3UVVGQlFTeFJRVU5WTEZGQlJGWXNWVUZEVlN4UlFVUldPMEZCUVVFc1VVRkRiMElzVVVGRWNFSXNWVUZEYjBJc1VVRkVjRUk3TzBGQlJWSXNVVUZCVFN4SlFVRkpMRWxCUVZZN1FVRkRRU3hSUVVGTkxFbEJRVWtzUlVGQlZqdEJRVU5CTEZGQlFVMHNXVUZCV1N4RlFVRkZMRmRCUVVZc1JVRkJiRUk3UVVGRFFTeFJRVUZOTEZsQlFWa3NSVUZCUlN4WFFVRkdMRVZCUVd4Q096dEJRVVZCTEZOQlFVc3NVVUZCVEN4SFFVRm5RaXhaUVVGWkxFdEJRVXNzUjBGQlRDeERRVU14UWl4WlFVRlpMRVZCUVVVc1ZVRkJSaXhGUVVSakxFVkJSVEZDTEZOQlJqQkNMRU5CUVRWQ096dEJRVXRCTEZGQlFVMHNVVUZCVVN4RlFVRkZMRTlCUVVZc1EwRkJWU3hOUVVGV0xFTkJRV1E3UVVGRFFTeFJRVUZOTEZGQlFWRXNSVUZCUlN4UFFVRkdMRU5CUVZVc1RVRkJWaXhEUVVGa08wRkJRMEVzVVVGQlRTeFJRVUZSTEVWQlFVVXNUMEZCUml4RFFVRlZMRTFCUVZZc1EwRkJaRHRCUVVOQkxGRkJRVTBzVVVGQlVTeEZRVUZGTEU5QlFVWXNRMEZCVlN4TlFVRldMRU5CUVdRN1FVRkRRU3hSUVVGTkxFMUJRVTBzUlVGQlJTeFBRVUZHTEVOQlFWVXNTVUZCVml4RFFVRmFPMEZCUTBFc1VVRkJUU3hOUVVGTkxFVkJRVVVzVDBGQlJpeERRVUZWTEVsQlFWWXNRMEZCV2p0QlFVTkJMRkZCUVUwc2QwSkJRWGRDTEdkQ1FVRm5RaXhMUVVGb1FpeEZRVUYxUWl4SFFVRjJRaXhGUVVFMFFpeFRRVUUxUWl4RlFVRjFReXhMUVVGTExGRkJRVFZETEVWQlFYTkVMRXRCUVhSRUxFTkJRVGxDTzBGQlEwRXNVVUZCVFN4eFFrRkJjVUlzVVVGQlVTeEZRVUZGTEVkQlFVWXNSVUZCYmtNN08wRkJSVUVzVTBGQlN5eFhRVUZNTEVkQlFXMUNMRU5CUTJwQ0xFTkJRVU1zUTBGQlJDeEZRVUZKTEVWQlFVVXNSMEZCUml4RlFVRktMRU5CUkdsQ0xFVkJSV3BDTEVOQlFVTXNTMEZCU3l4UlFVRk9MRVZCUVdkQ0xIRkNRVUZvUWl4RFFVWnBRaXhEUVVGdVFqczdPMEZCVFVFc1VVRkJUU3hYUVVGWExFdEJRVXNzVVVGQlRDeEhRVUZuUWl4UlFVRnFRenM3UVVGRlFTeFJRVUZKTEZWQlFWVXNTMEZCWkR0QlFVTkJMRkZCUVVrc1ZVRkJWU3hMUVVGa096dEJRVVZCTEZOQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVdJc1JVRkJaMElzU1VGQlNTeFJRVUZ3UWl4RlFVRTRRaXhIUVVFNVFpeEZRVUZ0UXp0QlFVTnFReXhWUVVGTkxGbEJRVmtzU1VGQlNTeFJRVUYwUWpzN1FVRkZRU3hWUVVGTkxHVkJRV1VzWjBKQlFXZENMRXRCUVdoQ0xFVkJRWFZDTEVkQlFYWkNMRVZCUVRSQ0xGTkJRVFZDTEVWQlFYVkRMRVZCUVVVc1QwRkJSaXhIUVVGWkxGTkJRVzVFTEVWQlFUaEVMRXRCUVRsRUxFTkJRWEpDTzBGQlEwRXNWVUZCVFN4bFFVRmxMR2RDUVVGblFpeExRVUZvUWl4RlFVRjFRaXhIUVVGMlFpeEZRVUUwUWl4VFFVRTFRaXhGUVVGMVF5eEZRVUZGTEU5QlFVWXNSMEZCV1N4VFFVRnVSQ3hGUVVFNFJDeExRVUU1UkN4RFFVRnlRanM3UVVGRlFTeFZRVUZOTEdsQ1FVTklMSE5DUVVGelFpeGxRVUZsTEZsQlFYUkRMRWxCUTBNc1EwRkJReXhyUWtGQlJDeEpRVUYxUWl4bFFVRmxMRmxCUm5wRE96dEJRVXRCTEZWQlFVa3NRMEZCUXl4UFFVRkVMRWxCUVZrc1kwRkJhRUlzUlVGQlowTTdRVUZET1VJc1lVRkJTeXhYUVVGTUxFTkJRV2xDTEUxQlFXcENMRU5CUVhkQ0xFTkJRWGhDTEVWQlFUSkNMRU5CUVROQ0xFVkJRVGhDTEVOQlFVTXNVMEZCUkN4RlFVRlpMRmxCUVZvc1EwRkJPVUk3UVVGRFFTeHJRa0ZCVlN4SlFVRldPMEZCUTBRN096dEJRVWRFTEZWQlFVMHNhMEpCUTBnc2MwSkJRWE5DTEdWQlFXVXNXVUZCZEVNc1NVRkRReXhEUVVGRExHdENRVUZFTEVsQlFYVkNMR1ZCUVdVc1dVRkdla003TzBGQlMwRXNWVUZCU1N4WFFVRlhMR1ZCUVdZc1JVRkJaME03UVVGRE9VSXNZVUZCU3l4WFFVRk1MRU5CUVdsQ0xFTkJRV3BDTEVsQlFYTkNMRU5CUVVNc1UwRkJSQ3hGUVVGWkxGbEJRVm9zUTBGQmRFSTdRVUZEUVN4clFrRkJWU3hKUVVGV08wRkJRMFE3TzBGQlJVUXNWVUZCU1N4UFFVRktMRVZCUVdFN1FVRkRXRHRCUVVORU8wRkJRMFk3TzBGQlJVUXNUMEZCUnl4TFFVRklPMEZCUTBRc1J6czdkVUpCUlVRc1RTeHhRa0ZCVXp0QlFVRkJMR3RDUVVOakxFdEJRVXNzUzBGRWJrSTdRVUZCUVN4UlFVTkRMRWxCUkVRc1YwRkRReXhKUVVSRU8wRkJRVUVzVVVGRFR5eEZRVVJRTEZkQlEwOHNSVUZFVURzN1FVRkZVQ3hSUVVGTkxFbEJRVWtzU1VGQlZqdEJRVU5CTEZGQlFVMHNTVUZCU1N4RlFVRldPenRCUVVWQkxGRkJRVTBzVjBGQlZ5eGpRVUZqTEdkRFFVRnhRaXhMUVVGTExGZEJRVXdzUTBGQmFVSXNRMEZCYWtJc1JVRkJiMElzUTBGQmNFSXNRMEZCY2tJc1JVRkJOa01zUzBGQlN5eFhRVUZNTEVOQlFXbENMRU5CUVdwQ0xFVkJRVzlDTEVOQlFYQkNMRU5CUVRkRExFVkJRWEZGTEVWQlFVVXNWVUZCUml4RlFVRnlSU3hEUVVGa0xFTkJRV3BDTzBGQlEwRXNVVUZCU1N4WlFVRlpMRU5CUVdoQ0xFVkJRVzFDTzBGQlEycENMR0ZCUVU4c1JVRkJSU3hIUVVGR0xFVkJRVkE3UVVGRFJDeExRVVpFTEUxQlJVODdRVUZEVEN4VlFVRk5MRXRCUVVzc1owTkJRWEZDTEV0QlFVc3NWMEZCVEN4RFFVRnBRaXhEUVVGcVFpeEZRVUZ2UWl4RFFVRndRaXhEUVVGeVFpeEZRVUUyUXl4TFFVRkxMRmRCUVV3c1EwRkJhVUlzUTBGQmFrSXNSVUZCYjBJc1EwRkJjRUlzUTBGQk4wTXNSVUZCY1VVc1VVRkJja1VzUTBGQldEdEJRVU5CTEZWQlFVMHNTMEZCU3l4blEwRkJjVUlzUzBGQlN5eFhRVUZNTEVOQlFXbENMRU5CUVdwQ0xFVkJRVzlDTEVOQlFYQkNMRU5CUVhKQ0xFVkJRVFpETEV0QlFVc3NWMEZCVEN4RFFVRnBRaXhEUVVGcVFpeEZRVUZ2UWl4RFFVRndRaXhEUVVFM1F5eEZRVUZ4UlN4UlFVRnlSU3hEUVVGWU8wRkJRMEVzWVVGQlR5eG5RMEZCY1VJc1JVRkJja0lzUlVGQmVVSXNSVUZCZWtJc1JVRkJOa0lzVVVGQk4wSXNRMEZCVUR0QlFVTkVPMEZCUTBZc1J6czdPenM3UVVGeVJrY3NWU3hEUVVOSExGa3NSMEZCWlR0QlFVTndRaXhaUVVGVk8wRkJSRlVzUXpzN2EwSkJkVVpVTEZWQlFVTXNTMEZCUkR0QlFVRkJMRk5CUVZjc1NVRkJTU3hWUVVGS0xFTkJRV1VzUzBGQlppeERRVUZZTzBGQlFVRXNReUlzSW1acGJHVWlPaUppYkdWdVpDMTBkMlZsYm5NdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYm1sdGNHOXlkQ0I3SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbExDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeUI5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JtbHRjRzl5ZENCN0lHTnNZVzF3SUgwZ1puSnZiU0FuTGk0dmFXNWpMM1J5WVc1elptOXliV1Z5Y3ljN1hHNWNibU52Ym5OMElHTnNZVzF3VUhKdlozSmxjM01nUFNCamJHRnRjQ2d3TENBeEtUdGNibHh1Wm5WdVkzUnBiMjRnWTJGc1kxWmhiSFZsUVhSVWFXMWxLR1p5YjIwc0lIUnZMQ0JrZFhKaGRHbHZiaXdnWld4aGNITmxaQ3dnWldGelpTa2dlMXh1SUNCamIyNXpkQ0J3Y205bmNtVnpjMEYwVkdsdFpTQTlJR1ZoYzJVb1kyeGhiWEJRY205bmNtVnpjeWhuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNnd0xDQmtkWEpoZEdsdmJpd2daV3hoY0hObFpDa3BLVHRjYmlBZ2NtVjBkWEp1SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektHWnliMjBzSUhSdkxDQndjbTluY21WemMwRjBWR2x0WlNrN1hHNTlYRzVjYm1Oc1lYTnpJRlIzWldWdVFteGxibVFnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCemRHRjBhV01nWkdWbVlYVnNkRkJ5YjNCeklEMGdlMXh1SUNBZ0lHRmpZM1Z5WVdONU9pQTJNRnh1SUNCOU8xeHVYRzRnSUc5dVUzUmhjblFvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJtY205dExDQjBieXdnWkhWeVlYUnBiMjRzSUdGalkzVnlZV041SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHTnZibk4wSUdFZ1BTQm1jbTl0TzF4dUlDQWdJR052Ym5OMElHSWdQU0IwYnp0Y2JpQWdJQ0JqYjI1emRDQmhSSFZ5WVhScGIyNGdQU0JoTG1kbGRFUjFjbUYwYVc5dUtDazdYRzRnSUNBZ1kyOXVjM1FnWWtSMWNtRjBhVzl1SUQwZ1lpNW5aWFJFZFhKaGRHbHZiaWdwTzF4dVhHNGdJQ0FnZEdocGN5NWtkWEpoZEdsdmJpQTlJR1IxY21GMGFXOXVJSHg4SUUxaGRHZ3ViV2x1S0Z4dUlDQWdJQ0FnWVVSMWNtRjBhVzl1SUMwZ1lTNW5aWFJGYkdGd2MyVmtLQ2tzWEc0Z0lDQWdJQ0JpUkhWeVlYUnBiMjVjYmlBZ0lDQXBPMXh1WEc0Z0lDQWdZMjl1YzNRZ1lVVmhjMlVnUFNCaExtZGxkRkJ5YjNBb0oyVmhjMlVuS1R0Y2JpQWdJQ0JqYjI1emRDQmlSV0Z6WlNBOUlHSXVaMlYwVUhKdmNDZ25aV0Z6WlNjcE8xeHVJQ0FnSUdOdmJuTjBJR0ZHY205dElEMGdZUzVuWlhSUWNtOXdLQ2RtY205dEp5azdYRzRnSUNBZ1kyOXVjM1FnWWtaeWIyMGdQU0JpTG1kbGRGQnliM0FvSjJaeWIyMG5LVHRjYmlBZ0lDQmpiMjV6ZENCaFZHOGdQU0JoTG1kbGRGQnliM0FvSjNSdkp5azdYRzRnSUNBZ1kyOXVjM1FnWWxSdklEMGdZaTVuWlhSUWNtOXdLQ2QwYnljcE8xeHVJQ0FnSUdOdmJuTjBJR0pXWVd4MVpVRjBRbXhsYm1SRGIyMXdiR1YwWlNBOUlHTmhiR05XWVd4MVpVRjBWR2x0WlNoaVJuSnZiU3dnWWxSdkxDQmlSSFZ5WVhScGIyNHNJSFJvYVhNdVpIVnlZWFJwYjI0c0lHSkZZWE5sS1R0Y2JpQWdJQ0JqYjI1emRDQmlVM1JoY25SelNHbG5hR1Z5VkdoaGJrRWdQU0JpUm5KdmJTQStJR0V1WjJWMEtDazdYRzVjYmlBZ0lDQjBhR2x6TG1Kc1pXNWtVRzlwYm5SeklEMGdXMXh1SUNBZ0lDQWdXekFzSUdFdVoyVjBLQ2xkTEZ4dUlDQWdJQ0FnVzNSb2FYTXVaSFZ5WVhScGIyNHNJR0pXWVd4MVpVRjBRbXhsYm1SRGIyMXdiR1YwWlYxY2JpQWdJQ0JkTzF4dVhHNGdJQ0FnTHk4Z1JtbHVaQ0IwZDJWbGJpQnBiblJsY25ObFkzUnBiMjVjYmlBZ0lDQmpiMjV6ZENCMGFXMWxjM1JsY0NBOUlIUm9hWE11WkhWeVlYUnBiMjRnTHlCaFkyTjFjbUZqZVR0Y2JseHVJQ0FnSUd4bGRDQm1iM1Z1WkZBeElEMGdabUZzYzJVN1hHNGdJQ0FnYkdWMElHWnZkVzVrVURJZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1lXTmpkWEpoWTNrN0lHa3JLeWtnZTF4dUlDQWdJQ0FnWTI5dWMzUWdkRzkwWVd4VWFXMWxJRDBnYVNBcUlIUnBiV1Z6ZEdWd08xeHVYRzRnSUNBZ0lDQmpiMjV6ZENCaFZtRnNkV1ZCZEZScGJXVWdQU0JqWVd4alZtRnNkV1ZCZEZScGJXVW9ZVVp5YjIwc0lHRlVieXdnWVVSMWNtRjBhVzl1TENCaExtVnNZWEJ6WldRZ0t5QjBiM1JoYkZScGJXVXNJR0ZGWVhObEtUdGNiaUFnSUNBZ0lHTnZibk4wSUdKV1lXeDFaVUYwVkdsdFpTQTlJR05oYkdOV1lXeDFaVUYwVkdsdFpTaGlSbkp2YlN3Z1lsUnZMQ0JpUkhWeVlYUnBiMjRzSUdJdVpXeGhjSE5sWkNBcklIUnZkR0ZzVkdsdFpTd2dZa1ZoYzJVcE8xeHVYRzRnSUNBZ0lDQmpiMjV6ZENCb1lYTkpiblJsY25ObFkzUmxaQ0E5SUNoY2JpQWdJQ0FnSUNBZ0tHSlRkR0Z5ZEhOSWFXZG9aWEpVYUdGdVFTQW1KaUJoVm1Gc2RXVkJkRlJwYldVZ1BDQmlWbUZzZFdWQmRGUnBiV1VwSUh4OFhHNGdJQ0FnSUNBZ0lDZ2hZbE4wWVhKMGMwaHBaMmhsY2xSb1lXNUJJQ1ltSUdGV1lXeDFaVUYwVkdsdFpTQStJR0pXWVd4MVpVRjBWR2x0WlNsY2JpQWdJQ0FnSUNrN1hHNWNiaUFnSUNBZ0lHbG1JQ2doWm05MWJtUlFNU0FtSmlCb1lYTkpiblJsY25ObFkzUmxaQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbUpzWlc1a1VHOXBiblJ6TG5Od2JHbGpaU2d3TENBeExDQmJkRzkwWVd4VWFXMWxMQ0JpVm1Gc2RXVkJkRlJwYldWZEtUdGNiaUFnSUNBZ0lDQWdabTkxYm1SUU1TQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRlJQUkU4Z1oyOGdZbUZqYXlCMGFISnZkV2RvSUdGdVpDQmpiMjF0Wlc1MFhHNGdJQ0FnSUNCamIyNXpkQ0JvWVhOSmJuUmxjbk5sWTNSbFpFSWdQU0FvWEc0Z0lDQWdJQ0FnSUNoaVUzUmhjblJ6U0dsbmFHVnlWR2hoYmtFZ0ppWWdZVlpoYkhWbFFYUlVhVzFsSUR3Z1lsWmhiSFZsUVhSVWFXMWxLU0I4ZkZ4dUlDQWdJQ0FnSUNBb0lXSlRkR0Z5ZEhOSWFXZG9aWEpVYUdGdVFTQW1KaUJoVm1Gc2RXVkJkRlJwYldVZ1BpQmlWbUZzZFdWQmRGUnBiV1VwWEc0Z0lDQWdJQ0FwTzF4dVhHNGdJQ0FnSUNCcFppQW9abTkxYm1SUU1TQW1KaUJvWVhOSmJuUmxjbk5sWTNSbFpFSXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWliR1Z1WkZCdmFXNTBjMXN5WFNBOUlGdDBiM1JoYkZScGJXVXNJR0pXWVd4MVpVRjBWR2x0WlYwN1hHNGdJQ0FnSUNBZ0lHWnZkVzVrVURJZ1BTQjBjblZsTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCcFppQW9abTkxYm1SUU1pa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RHOHVjM1JoY25Rb0tUdGNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHWnliMjBzSUhSdklIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR052Ym5OMElHRWdQU0JtY205dE8xeHVJQ0FnSUdOdmJuTjBJR0lnUFNCMGJ6dGNibHh1SUNBZ0lHTnZibk4wSUhCeWIyZHlaWE56SUQwZ1kyeGhiWEJRY205bmNtVnpjeWhuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNoMGFHbHpMbUpzWlc1a1VHOXBiblJ6V3pCZFd6QmRMQ0IwYUdsekxtSnNaVzVrVUc5cGJuUnpXekpkV3pCZExDQmhMbWRsZEVWc1lYQnpaV1FvS1NrcE8xeHVJQ0FnSUdsbUlDaHdjbTluY21WemN5QStQU0F4S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWWk1blpYUW9LVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnWVZBZ1BTQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWgwYUdsekxtSnNaVzVrVUc5cGJuUnpXekJkV3pGZExDQjBhR2x6TG1Kc1pXNWtVRzlwYm5Seld6RmRXekZkTENCd2NtOW5jbVZ6Y3lrN1hHNGdJQ0FnSUNCamIyNXpkQ0JpVUNBOUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLSFJvYVhNdVlteGxibVJRYjJsdWRITmJNVjFiTVYwc0lIUm9hWE11WW14bGJtUlFiMmx1ZEhOYk1sMWJNVjBzSUhCeWIyZHlaWE56S1R0Y2JpQWdJQ0FnSUhKbGRIVnliaUJuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3loaFVDd2dZbEFzSUhCeWIyZHlaWE56S1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hCeWIzQnpLU0E5UGlCdVpYY2dWSGRsWlc1Q2JHVnVaQ2h3Y205d2N5azdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9ibGVuZC10d2VlbnMuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ2hhaW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ2hhaW4sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENoYWluKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYWluKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMucGxheU5leHQgPSBfdGhpcy5wbGF5TmV4dC5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBDaGFpbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pID0gMDtcbiAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLnBsYXlOZXh0ID0gZnVuY3Rpb24gcGxheU5leHQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGkgPSBfcHJvcHMuaTtcbiAgICB2YXIgb3JkZXIgPSBfcHJvcHMub3JkZXI7XG5cbiAgICBpZiAoaSA8IG9yZGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMucHJvcHMuaSsrO1xuICAgICAgdGhpcy5wbGF5Q3VycmVudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIENoYWluLnByb3RvdHlwZS5wbGF5Q3VycmVudCA9IGZ1bmN0aW9uIHBsYXlDdXJyZW50KCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgaSA9IF9wcm9wczIuaTtcbiAgICB2YXIgb3JkZXIgPSBfcHJvcHMyLm9yZGVyO1xuXG4gICAgb3JkZXJbaV0ucHJvcHMuX29uQ29tcGxldGUgPSB0aGlzLnBsYXlOZXh0O1xuICAgIG9yZGVyW2ldLnN0YXJ0KCk7XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGkgPSBfcHJvcHMzLmk7XG4gICAgdmFyIG9yZGVyID0gX3Byb3BzMy5vcmRlcjtcblxuICAgIG9yZGVyW2ldLnN0b3AoKTtcbiAgfTtcblxuICByZXR1cm4gQ2hhaW47XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3JkZXIsIG9uQ29tcGxldGUpIHtcbiAgcmV0dXJuIG5ldyBDaGFpbih7IG9yZGVyOiBvcmRlciwgb25Db21wbGV0ZTogb25Db21wbGV0ZSB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTm9ZV2x1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096czdPenM3T3pzN08wbEJSVTBzU3pzN08wRkJRMG9zYVVKQlFWa3NTMEZCV2l4RlFVRnRRanRCUVVGQk96dEJRVUZCTEdsRVFVTnFRaXh0UWtGQlRTeExRVUZPTEVOQlJHbENPenRCUVVWcVFpeFZRVUZMTEZGQlFVd3NSMEZCWjBJc1RVRkJTeXhSUVVGTUxFTkJRV01zU1VGQlpDeFBRVUZvUWp0QlFVWnBRanRCUVVkc1FqczdhMEpCUlVRc1R5eHpRa0ZCVlR0QlFVTlNMRk5CUVVzc1MwRkJUQ3hEUVVGWExFTkJRVmdzUjBGQlpTeERRVUZtTzBGQlEwRXNVMEZCU3l4WFFVRk1PMEZCUTBRc1J6czdhMEpCUlVRc1VTeDFRa0ZCVnp0QlFVRkJMR2xDUVVOWkxFdEJRVXNzUzBGRWFrSTdRVUZCUVN4UlFVTkVMRU5CUkVNc1ZVRkRSQ3hEUVVSRE8wRkJRVUVzVVVGRFJTeExRVVJHTEZWQlEwVXNTMEZFUmpzN1FVRkZWQ3hSUVVGSkxFbEJRVWtzVFVGQlRTeE5RVUZPTEVkQlFXVXNRMEZCZGtJc1JVRkJNRUk3UVVGRGVFSXNWMEZCU3l4TFFVRk1MRU5CUVZjc1EwRkJXRHRCUVVOQkxGZEJRVXNzVjBGQlREdEJRVU5FTEV0QlNFUXNUVUZIVHp0QlFVTk1MRmRCUVVzc1VVRkJURHRCUVVORU8wRkJRMFlzUnpzN2EwSkJSVVFzVnl3d1FrRkJZenRCUVVGQkxHdENRVU5UTEV0QlFVc3NTMEZFWkR0QlFVRkJMRkZCUTBvc1EwRkVTU3hYUVVOS0xFTkJSRWs3UVVGQlFTeFJRVU5FTEV0QlJFTXNWMEZEUkN4TFFVUkRPenRCUVVWYUxGVkJRVTBzUTBGQlRpeEZRVUZUTEV0QlFWUXNRMEZCWlN4WFFVRm1MRWRCUVRaQ0xFdEJRVXNzVVVGQmJFTTdRVUZEUVN4VlFVRk5MRU5CUVU0c1JVRkJVeXhMUVVGVU8wRkJRMFFzUnpzN2EwSkJSVVFzVFN4eFFrRkJVenRCUVVGQkxHdENRVU5qTEV0QlFVc3NTMEZFYmtJN1FVRkJRU3hSUVVORExFTkJSRVFzVjBGRFF5eERRVVJFTzBGQlFVRXNVVUZEU1N4TFFVUktMRmRCUTBrc1MwRkVTanM3UVVGRlVDeFZRVUZOTEVOQlFVNHNSVUZCVXl4SlFVRlVPMEZCUTBRc1J6czdPenM3YTBKQlIxa3NWVUZCUXl4TFFVRkVMRVZCUVZFc1ZVRkJVanRCUVVGQkxGTkJRWFZDTEVsQlFVa3NTMEZCU2l4RFFVRlZMRVZCUVVVc1dVRkJSaXhGUVVGVExITkNRVUZVTEVWQlFWWXNRMEZCZGtJN1FVRkJRU3hESWl3aVptbHNaU0k2SW1Ob1lXbHVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNWNibU5zWVhOeklFTm9ZV2x1SUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNCemRYQmxjaWh3Y205d2N5azdYRzRnSUNBZ2RHaHBjeTV3YkdGNVRtVjRkQ0E5SUhSb2FYTXVjR3hoZVU1bGVIUXVZbWx1WkNoMGFHbHpLVHRjYmlBZ2ZWeHVYRzRnSUc5dVUzUmhjblFvS1NCN1hHNGdJQ0FnZEdocGN5NXdjbTl3Y3k1cElEMGdNRHRjYmlBZ0lDQjBhR2x6TG5Cc1lYbERkWEp5Wlc1MEtDazdYRzRnSUgxY2JseHVJQ0J3YkdGNVRtVjRkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR2tzSUc5eVpHVnlJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdsbUlDaHBJRHdnYjNKa1pYSXViR1Z1WjNSb0lDMGdNU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXdjbTl3Y3k1cEt5czdYRzRnSUNBZ0lDQjBhR2x6TG5Cc1lYbERkWEp5Wlc1MEtDazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZMjl0Y0d4bGRHVW9LVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J3YkdGNVEzVnljbVZ1ZENncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdrc0lHOXlaR1Z5SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHOXlaR1Z5VzJsZExuQnliM0J6TGw5dmJrTnZiWEJzWlhSbElEMGdkR2hwY3k1d2JHRjVUbVY0ZER0Y2JpQWdJQ0J2Y21SbGNsdHBYUzV6ZEdGeWRDZ3BPMXh1SUNCOVhHNWNiaUFnYjI1VGRHOXdLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dhU3dnYjNKa1pYSWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnYjNKa1pYSmJhVjB1YzNSdmNDZ3BPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2h2Y21SbGNpd2diMjVEYjIxd2JHVjBaU2tnUFQ0Z2JtVjNJRU5vWVdsdUtIc2diM0prWlhJc0lHOXVRMjl0Y0d4bGRHVWdmU2s3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY2hhaW4uanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi4vaW5jL3ZhbHVlLXR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBub29wID0gZnVuY3Rpb24gKCkge307XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gKDAsIF90d2VlbjIuZGVmYXVsdCkoX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgZnJvbTogMCxcbiAgICB0bzogMSxcbiAgICBvblVwZGF0ZTogKDAsIF90cmFuc2Zvcm1lcnMuZmxvdykoKDAsIF90cmFuc2Zvcm1lcnMuYmxlbmRDb2xvcikocHJvcHMuZnJvbSwgcHJvcHMudG8pLCBfdmFsdWVUeXBlcy5jb2xvci50cmFuc2Zvcm0sIHByb3BzLm9uVXBkYXRlIHx8IG5vb3ApXG4gIH0pKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnZiRzl5TFhSM1pXVnVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3pzN08wRkJRMEU3TzBGQlEwRTdPenM3UVVGRlFTeEpRVUZOTEU5QlFVOHNXVUZCVFN4RFFVRkZMRU5CUVhKQ096dHJRa0ZGWlN4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVONFFpeFRRVUZQTEd0RFFVTkdMRXRCUkVVN1FVRkZUQ3hWUVVGTkxFTkJSa1E3UVVGSFRDeFJRVUZKTEVOQlNFTTdRVUZKVEN4alFVRlZMSGRDUVVOU0xEaENRVUZYTEUxQlFVMHNTVUZCYWtJc1JVRkJkVUlzVFVGQlRTeEZRVUUzUWl4RFFVUlJMRVZCUlZJc2EwSkJRVTBzVTBGR1JTeEZRVWRTTEUxQlFVMHNVVUZCVGl4SlFVRnJRaXhKUVVoV08wRkJTa3dzUzBGQlVEdEJRVlZFTEVNaUxDSm1hV3hsSWpvaVkyOXNiM0l0ZEhkbFpXNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RIZGxaVzRnWm5KdmJTQW5MaTkwZDJWbGJpYzdYRzVwYlhCdmNuUWdleUJpYkdWdVpFTnZiRzl5TENCbWJHOTNJSDBnWm5KdmJTQW5MaTR2YVc1akwzUnlZVzV6Wm05eWJXVnljeWM3WEc1cGJYQnZjblFnZXlCamIyeHZjaUI5SUdaeWIyMGdKeTR1TDJsdVl5OTJZV3gxWlMxMGVYQmxjeWM3WEc1Y2JtTnZibk4wSUc1dmIzQWdQU0FvS1NBOVBpQjdmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hCeWIzQnpLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQjBkMlZsYmloN1hHNGdJQ0FnTGk0dWNISnZjSE1zWEc0Z0lDQWdabkp2YlRvZ01DeGNiaUFnSUNCMGJ6b2dNU3hjYmlBZ0lDQnZibFZ3WkdGMFpUb2dabXh2ZHloY2JpQWdJQ0FnSUdKc1pXNWtRMjlzYjNJb2NISnZjSE11Wm5KdmJTd2djSEp2Y0hNdWRHOHBMRnh1SUNBZ0lDQWdZMjlzYjNJdWRISmhibk5tYjNKdExGeHVJQ0FnSUNBZ2NISnZjSE11YjI1VmNHUmhkR1VnZkh3Z2JtOXZjRnh1SUNBZ0lDbGNiaUFnZlNrN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9jb2xvci10d2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENvbXBvc2l0ZUFjdGlvbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDb21wb3NpdGVBY3Rpb24sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENvbXBvc2l0ZUFjdGlvbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb3NpdGVBY3Rpb24pO1xuXG4gICAgdmFyIGFjdGlvbnMgPSBwcm9wcy5hY3Rpb25zO1xuXG4gICAgdmFyIHJlbWFpbmluZ1Byb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ2FjdGlvbnMnXSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwodGhpcywgcmVtYWluaW5nUHJvcHMpKTtcblxuICAgIF90aGlzLmN1cnJlbnQgPSB7fTtcbiAgICBfdGhpcy5hY3Rpb25LZXlzID0gW107XG4gICAgX3RoaXMuYWRkQWN0aW9ucyhwcm9wcy5hY3Rpb25zKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmFkZEFjdGlvbnMgPSBmdW5jdGlvbiBhZGRBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChfdGhpczIuYWN0aW9uS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgIF90aGlzMi5hY3Rpb25LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMyW2tleV0gPSBhY3Rpb25zW2tleV07XG5cbiAgICAgIHZhciBvblVwZGF0ZSA9IGZ1bmN0aW9uICh2LCBhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5jdXJyZW50W2tleV0gPSBhY3Rpb24uZ2V0KCk7XG4gICAgICB9O1xuXG4gICAgICAvLyBJbW1lZGlhdGVseSB1cGRhdGUgd2l0aCB0aGUgY3VycmVudCBhY3Rpb24gc3RhdGVcbiAgICAgIG9uVXBkYXRlKG51bGwsIF90aGlzMltrZXldKTtcblxuICAgICAgX3RoaXMyW2tleV0uc2V0UHJvcHMoe1xuICAgICAgICBfb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cbiAgICAgIH0pLmFkZExpc3RlbmVyKG9uVXBkYXRlKTtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIGFjdGlvbnMpIHtcbiAgICAgIF9sb29wKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSB0aGlzLmFjdGlvbktleXMubGVuZ3RoO1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczNba2V5XS5zdGFydCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzNFtrZXldLnN0b3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gZ2V0VmVsb2NpdHkoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB2YXIgdmVsb2NpdHkgPSB7fTtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gdmVsb2NpdHlba2V5XSA9IF90aGlzNVtrZXldLmdldFZlbG9jaXR5KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZlbG9jaXR5O1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMDtcbiAgfTtcblxuICByZXR1cm4gQ29tcG9zaXRlQWN0aW9uO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ29tcG9zaXRlQWN0aW9uKF9leHRlbmRzKHtcbiAgICBhY3Rpb25zOiBhY3Rpb25zXG4gIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk52YlhCdmMybDBaUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZCUVRzN096czdPenM3T3pzN096czdTVUZGVFN4bE96czdRVUZEU2l3eVFrRkJXU3hMUVVGYUxFVkJRVzFDTzBGQlFVRTdPMEZCUVVFc1VVRkRWQ3hQUVVSVExFZEJRM05DTEV0QlJIUkNMRU5CUTFRc1QwRkVVenM3UVVGQlFTeFJRVU5ITEdOQlJFZ3NORUpCUTNOQ0xFdEJSSFJDT3p0QlFVRkJMR2xFUVVWcVFpeHRRa0ZCVFN4alFVRk9MRU5CUm1sQ096dEJRVWRxUWl4VlFVRkxMRTlCUVV3c1IwRkJaU3hGUVVGbU8wRkJRMEVzVlVGQlN5eFZRVUZNTEVkQlFXdENMRVZCUVd4Q08wRkJRMEVzVlVGQlN5eFZRVUZNTEVOQlFXZENMRTFCUVUwc1QwRkJkRUk3UVVGTWFVSTdRVUZOYkVJN096UkNRVVZFTEZVc2RVSkJRVmNzVHl4RlFVRlRPMEZCUVVFN08wRkJRVUVzTUVKQlExQXNSMEZFVHp0QlFVVm9RaXhWUVVGSkxFOUJRVXNzVlVGQlRDeERRVUZuUWl4UFFVRm9RaXhEUVVGM1FpeEhRVUY0UWl4TlFVRnBReXhEUVVGRExFTkJRWFJETEVWQlFYbERPMEZCUTNaRExHVkJRVXNzVlVGQlRDeERRVUZuUWl4SlFVRm9RaXhEUVVGeFFpeEhRVUZ5UWp0QlFVTkVPenRCUVVWRUxHRkJRVXNzUjBGQlRDeEpRVUZaTEZGQlFWRXNSMEZCVWl4RFFVRmFPenRCUVVWQkxGVkJRVTBzVjBGQlZ5eFZRVUZETEVOQlFVUXNSVUZCU1N4TlFVRktPMEZCUVVFc1pVRkJaU3hQUVVGTExFOUJRVXdzUTBGQllTeEhRVUZpTEVsQlFXOUNMRTlCUVU4c1IwRkJVQ3hGUVVGdVF6dEJRVUZCTEU5QlFXcENPenM3UVVGSFFTeGxRVUZUTEVsQlFWUXNSVUZCWlN4UFFVRkxMRWRCUVV3c1EwRkJaanM3UVVGRlFTeGhRVUZMTEVkQlFVd3NSVUZEUnl4UlFVUklMRU5CUTFrN1FVRkRVaXhwUWtGQlV6dEJRVUZCTEdsQ1FVRk5MRTlCUVVzc1owSkJRVXdzUlVGQlRqdEJRVUZCTzBGQlJFUXNUMEZFV2l4RlFVbEhMRmRCU2tnc1EwRkpaU3hSUVVwbU8wRkJZbWRDT3p0QlFVTnNRaXhUUVVGTExFbEJRVTBzUjBGQldDeEpRVUZyUWl4UFFVRnNRaXhGUVVFeVFqdEJRVUZCTEZsQlFXaENMRWRCUVdkQ08wRkJhVUl4UWp0QlFVTkdMRWM3T3pSQ1FVVkVMRThzYzBKQlFWVTdRVUZCUVRzN1FVRkRVaXhUUVVGTExHZENRVUZNTEVkQlFYZENMRXRCUVVzc1ZVRkJUQ3hEUVVGblFpeE5RVUY0UXp0QlFVTkJMRk5CUVVzc1ZVRkJUQ3hEUVVGblFpeFBRVUZvUWl4RFFVRjNRaXhWUVVGRExFZEJRVVE3UVVGQlFTeGhRVUZUTEU5QlFVc3NSMEZCVEN4RlFVRlZMRXRCUVZZc1JVRkJWRHRCUVVGQkxFdEJRWGhDTzBGQlEwUXNSenM3TkVKQlJVUXNUU3h4UWtGQlV6dEJRVUZCT3p0QlFVTlFMRk5CUVVzc1ZVRkJUQ3hEUVVGblFpeFBRVUZvUWl4RFFVRjNRaXhWUVVGRExFZEJRVVE3UVVGQlFTeGhRVUZUTEU5QlFVc3NSMEZCVEN4RlFVRlZMRWxCUVZZc1JVRkJWRHRCUVVGQkxFdEJRWGhDTzBGQlEwUXNSenM3TkVKQlJVUXNWeXd3UWtGQll6dEJRVUZCT3p0QlFVTmFMRkZCUVUwc1YwRkJWeXhGUVVGcVFqdEJRVU5CTEZOQlFVc3NWVUZCVEN4RFFVRm5RaXhQUVVGb1FpeERRVUYzUWl4VlFVRkRMRWRCUVVRN1FVRkJRU3hoUVVGVExGTkJRVk1zUjBGQlZDeEpRVUZuUWl4UFFVRkxMRWRCUVV3c1JVRkJWU3hYUVVGV0xFVkJRWHBDTzBGQlFVRXNTMEZCZUVJN1FVRkRRU3hYUVVGUExGRkJRVkE3UVVGRFJDeEhPenMwUWtGRlJDeG5RaXdyUWtGQmJVSTdRVUZEYWtJc1YwRkJVU3hMUVVGTExHZENRVUZNTEV0QlFUQkNMRU5CUVd4RE8wRkJRMFFzUnpzN096czdhMEpCUjFrc1ZVRkJReXhQUVVGRUxFVkJRVlVzUzBGQlZpeEZRVUZ2UWp0QlFVTnFReXhUUVVGUExFbEJRVWtzWlVGQlNqdEJRVU5NTzBGQlJFc3NTMEZGUml4TFFVWkZMRVZCUVZBN1FVRkpSQ3hESWl3aVptbHNaU0k2SW1OdmJYQnZjMmwwWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1WEc1amJHRnpjeUJEYjIxd2IzTnBkR1ZCWTNScGIyNGdaWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeWtnZTF4dUlDQWdJR052Ym5OMElIc2dZV04wYVc5dWN5d2dMaTR1Y21WdFlXbHVhVzVuVUhKdmNITWdmU0E5SUhCeWIzQnpPMXh1SUNBZ0lITjFjR1Z5S0hKbGJXRnBibWx1WjFCeWIzQnpLVHRjYmlBZ0lDQjBhR2x6TG1OMWNuSmxiblFnUFNCN2ZUdGNiaUFnSUNCMGFHbHpMbUZqZEdsdmJrdGxlWE1nUFNCYlhUdGNiaUFnSUNCMGFHbHpMbUZrWkVGamRHbHZibk1vY0hKdmNITXVZV04wYVc5dWN5azdYRzRnSUgxY2JseHVJQ0JoWkdSQlkzUnBiMjV6S0dGamRHbHZibk1wSUh0Y2JpQWdJQ0JtYjNJZ0tHTnZibk4wSUd0bGVTQnBiaUJoWTNScGIyNXpLU0I3WEc0Z0lDQWdJQ0JwWmlBb2RHaHBjeTVoWTNScGIyNUxaWGx6TG1sdVpHVjRUMllvYTJWNUtTQTlQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aFkzUnBiMjVMWlhsekxuQjFjMmdvYTJWNUtUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdkR2hwYzF0clpYbGRJRDBnWVdOMGFXOXVjMXRyWlhsZE8xeHVYRzRnSUNBZ0lDQmpiMjV6ZENCdmJsVndaR0YwWlNBOUlDaDJMQ0JoWTNScGIyNHBJRDArSUhSb2FYTXVZM1Z5Y21WdWRGdHJaWGxkSUQwZ1lXTjBhVzl1TG1kbGRDZ3BPMXh1WEc0Z0lDQWdJQ0F2THlCSmJXMWxaR2xoZEdWc2VTQjFjR1JoZEdVZ2QybDBhQ0IwYUdVZ1kzVnljbVZ1ZENCaFkzUnBiMjRnYzNSaGRHVmNiaUFnSUNBZ0lHOXVWWEJrWVhSbEtHNTFiR3dzSUhSb2FYTmJhMlY1WFNrN1hHNWNiaUFnSUNBZ0lIUm9hWE5iYTJWNVhWeHVJQ0FnSUNBZ0lDQXVjMlYwVUhKdmNITW9lMXh1SUNBZ0lDQWdJQ0FnSUY5dmJsTjBiM0E2SUNncElEMCtJSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3kwdFhHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQWdJQzVoWkdSTWFYTjBaVzVsY2lodmJsVndaR0YwWlNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTWdQU0IwYUdsekxtRmpkR2x2Ymt0bGVYTXViR1Z1WjNSb08xeHVJQ0FnSUhSb2FYTXVZV04wYVc5dVMyVjVjeTVtYjNKRllXTm9LQ2hyWlhrcElEMCtJSFJvYVhOYmEyVjVYUzV6ZEdGeWRDZ3BLVHRjYmlBZ2ZWeHVYRzRnSUc5dVUzUnZjQ2dwSUh0Y2JpQWdJQ0IwYUdsekxtRmpkR2x2Ymt0bGVYTXVabTl5UldGamFDZ29hMlY1S1NBOVBpQjBhR2x6VzJ0bGVWMHVjM1J2Y0NncEtUdGNiaUFnZlZ4dVhHNGdJR2RsZEZabGJHOWphWFI1S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSFpsYkc5amFYUjVJRDBnZTMwN1hHNGdJQ0FnZEdocGN5NWhZM1JwYjI1TFpYbHpMbVp2Y2tWaFkyZ29LR3RsZVNrZ1BUNGdkbVZzYjJOcGRIbGJhMlY1WFNBOUlIUm9hWE5iYTJWNVhTNW5aWFJXWld4dlkybDBlU2dwS1R0Y2JpQWdJQ0J5WlhSMWNtNGdkbVZzYjJOcGRIazdYRzRnSUgxY2JseHVJQ0JwYzBGamRHbHZia052YlhCc1pYUmxLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQW9kR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6SUQwOVBTQXdLVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWVdOMGFXOXVjeXdnY0hKdmNITXBJRDArSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJEYjIxd2IzTnBkR1ZCWTNScGIyNG9lMXh1SUNBZ0lHRmpkR2x2Ym5Nc1hHNGdJQ0FnTGk0dWNISnZjSE5jYmlBZ2ZTazdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY29tcG9zaXRlLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJy4uL2luYy9lYXNpbmcnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ3Jvc3NGYWRlID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENyb3NzRmFkZSwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ3Jvc3NGYWRlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDcm9zc0ZhZGUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDcm9zc0ZhZGUucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkdXJhdGlvbiA9IF9wcm9wcy5kdXJhdGlvbjtcbiAgICB2YXIgZWFzZSA9IF9wcm9wcy5lYXNlO1xuICAgIHZhciBmYWRlciA9IF9wcm9wcy5mYWRlcjtcblxuXG4gICAgdGhpcy5mYWRlciA9IGZhZGVyIHx8ICgwLCBfdHdlZW4yLmRlZmF1bHQpKHtcbiAgICAgIHRvOiAxLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZWFzZTogZWFzZVxuICAgIH0pLnN0YXJ0KCk7XG4gIH07XG5cbiAgQ3Jvc3NGYWRlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmcm9tID0gX3Byb3BzMi5mcm9tO1xuICAgIHZhciB0byA9IF9wcm9wczIudG87XG5cbiAgICB2YXIgYmFsYW5jZSA9IHRoaXMuZmFkZXIuZ2V0KCk7XG4gICAgdmFyIGxhdGVzdEZyb21WYWx1ZSA9IGZyb20uZ2V0KCk7XG4gICAgdmFyIGxhdGVzdFRvVmFsdWUgPSB0by5nZXQoKTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShsYXRlc3RGcm9tVmFsdWUsIGxhdGVzdFRvVmFsdWUsIGJhbGFuY2UpO1xuICB9O1xuXG4gIHJldHVybiBDcm9zc0ZhZGU7XG59KF8yLmRlZmF1bHQpO1xuXG5Dcm9zc0ZhZGUuZGVmYXVsdFByb3BzID0ge1xuICBlYXNlOiBfZWFzaW5nLmxpbmVhclxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ3Jvc3NGYWRlKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnliM056TFdaaFpHVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdRVUZEUVRzN096czdPenM3T3p0SlFVVk5MRk03T3pzN096czdPenR6UWtGTFNpeFBMSE5DUVVGVk8wRkJRVUVzYVVKQlF6QkNMRXRCUVVzc1MwRkVMMEk3UVVGQlFTeFJRVU5CTEZGQlJFRXNWVUZEUVN4UlFVUkJPMEZCUVVFc1VVRkRWU3hKUVVSV0xGVkJRMVVzU1VGRVZqdEJRVUZCTEZGQlEyZENMRXRCUkdoQ0xGVkJRMmRDTEV0QlJHaENPenM3UVVGSFVpeFRRVUZMTEV0QlFVd3NSMEZCWVN4VFFVRlRMSEZDUVVGTk8wRkJRekZDTEZWQlFVa3NRMEZFYzBJN1FVRkZNVUlzZDBKQlJqQkNPMEZCUnpGQ08wRkJTREJDTEV0QlFVNHNSVUZKYmtJc1MwRktiVUlzUlVGQmRFSTdRVUZMUkN4SE96dHpRa0ZGUkN4TkxIRkNRVUZUTzBGQlFVRXNhMEpCUTJNc1MwRkJTeXhMUVVSdVFqdEJRVUZCTEZGQlEwTXNTVUZFUkN4WFFVTkRMRWxCUkVRN1FVRkJRU3hSUVVOUExFVkJSRkFzVjBGRFR5eEZRVVJRT3p0QlFVVlFMRkZCUVUwc1ZVRkJWU3hMUVVGTExFdEJRVXdzUTBGQlZ5eEhRVUZZTEVWQlFXaENPMEZCUTBFc1VVRkJUU3hyUWtGQmEwSXNTMEZCU3l4SFFVRk1MRVZCUVhoQ08wRkJRMEVzVVVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhIUVVGSUxFVkJRWFJDTzBGQlEwRXNWMEZCVHl4blEwRkJjVUlzWlVGQmNrSXNSVUZCYzBNc1lVRkJkRU1zUlVGQmNVUXNUMEZCY2tRc1EwRkJVRHRCUVVORUxFYzdPenM3TzBGQmNrSkhMRk1zUTBGRFJ5eFpMRWRCUVdVN1FVRkRjRUk3UVVGRWIwSXNRenM3YTBKQmRVSlVMRlZCUVVNc1MwRkJSRHRCUVVGQkxGTkJRVmNzU1VGQlNTeFRRVUZLTEVOQlFXTXNTMEZCWkN4RFFVRllPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSmpjbTl6Y3kxbVlXUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNXBiWEJ2Y25RZ2RIZGxaVzRnWm5KdmJTQW5MaTkwZDJWbGJpYzdYRzVwYlhCdmNuUWdleUJzYVc1bFlYSWdmU0JtY205dElDY3VMaTlwYm1NdlpXRnphVzVuSnp0Y2JtbHRjRzl5ZENCN0lHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dVhHNWpiR0Z6Y3lCRGNtOXpjMFpoWkdVZ1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQnpkR0YwYVdNZ1pHVm1ZWFZzZEZCeWIzQnpJRDBnZTF4dUlDQWdJR1ZoYzJVNklHeHBibVZoY2x4dUlDQjlYRzVjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdSMWNtRjBhVzl1TENCbFlYTmxMQ0JtWVdSbGNpQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JseHVJQ0FnSUhSb2FYTXVabUZrWlhJZ1BTQm1ZV1JsY2lCOGZDQjBkMlZsYmloN1hHNGdJQ0FnSUNCMGJ6b2dNU3hjYmlBZ0lDQWdJR1IxY21GMGFXOXVMRnh1SUNBZ0lDQWdaV0Z6WlZ4dUlDQWdJSDBwTG5OMFlYSjBLQ2s3WEc0Z0lIMWNibHh1SUNCMWNHUmhkR1VvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJtY205dExDQjBieUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCamIyNXpkQ0JpWVd4aGJtTmxJRDBnZEdocGN5NW1ZV1JsY2k1blpYUW9LVHRjYmlBZ0lDQmpiMjV6ZENCc1lYUmxjM1JHY205dFZtRnNkV1VnUFNCbWNtOXRMbWRsZENncE8xeHVJQ0FnSUdOdmJuTjBJR3hoZEdWemRGUnZWbUZzZFdVZ1BTQjBieTVuWlhRb0tUdGNiaUFnSUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb2JHRjBaWE4wUm5KdmJWWmhiSFZsTENCc1lYUmxjM1JVYjFaaGJIVmxMQ0JpWVd4aGJtTmxLVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvY0hKdmNITXBJRDArSUc1bGR5QkRjbTl6YzBaaFpHVW9jSEp2Y0hNcE8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Nyb3NzLWZhZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGR1cmF0aW9uLCBvbkNvbXBsZXRlKSB7XG4gIHJldHVybiAoMCwgX3R3ZWVuMi5kZWZhdWx0KSh7IGR1cmF0aW9uOiBkdXJhdGlvbiwgb25Db21wbGV0ZTogb25Db21wbGV0ZSB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyUmxiR0Y1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096czdPMnRDUVVWbExGVkJRVU1zVVVGQlJDeEZRVUZYTEZWQlFWZzdRVUZCUVN4VFFVRXdRaXh4UWtGQlRTeEZRVUZGTEd0Q1FVRkdMRVZCUVZrc2MwSkJRVm9zUlVGQlRpeERRVUV4UWp0QlFVRkJMRU1pTENKbWFXeGxJam9pWkdWc1lYa3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RIZGxaVzRnWm5KdmJTQW5MaTkwZDJWbGJpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hrZFhKaGRHbHZiaXdnYjI1RGIyMXdiR1YwWlNrZ1BUNGdkSGRsWlc0b2V5QmtkWEpoZEdsdmJpd2diMjVEYjIxd2JHVjBaU0I5S1R0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2RlbGF5LmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBPZmZzZXQgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoT2Zmc2V0LCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBPZmZzZXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9mZnNldCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIE9mZnNldC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgaW5wdXQgPSB0aGlzLnByb3BzLmlucHV0O1xuXG4gICAgdGhpcy5pbnB1dE9yaWdpbiA9IGlucHV0LmdldCgpO1xuXG4gICAgdGhpcy5zY2hlZHVsZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKF90aGlzMi5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH07XG5cbiAgICBpbnB1dC5hZGRMaXN0ZW5lcih0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgfTtcblxuICBPZmZzZXQucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB2YXIgaW5wdXQgPSB0aGlzLnByb3BzLmlucHV0O1xuXG4gICAgaW5wdXQucmVtb3ZlTGlzdGVuZXIodGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gIH07XG5cbiAgT2Zmc2V0LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGlucHV0ID0gX3Byb3BzLmlucHV0O1xuICAgIHZhciBmcm9tID0gX3Byb3BzLmZyb207XG5cbiAgICB2YXIgb2Zmc2V0ID0gaW5wdXQuZ2V0KCkgLSB0aGlzLmlucHV0T3JpZ2luO1xuICAgIHJldHVybiBmcm9tICsgb2Zmc2V0O1xuICB9O1xuXG4gIHJldHVybiBPZmZzZXQ7XG59KF8yLmRlZmF1bHQpO1xuXG5PZmZzZXQuZGVmYXVsdFByb3BzID0ge1xuICBmcm9tOiAwLFxuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBwcm9wcyA9IGFyZ3NbMF07XG5cbiAgICByZXR1cm4gbmV3IE9mZnNldChwcm9wcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGlucHV0ID0gYXJnc1swXTtcbiAgICB2YXIgb25VcGRhdGUgPSBhcmdzWzFdO1xuICAgIHZhciBfcHJvcHMyID0gYXJnc1syXTtcblxuICAgIHJldHVybiBuZXcgT2Zmc2V0KF9leHRlbmRzKHtcbiAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgIG9uVXBkYXRlOiBvblVwZGF0ZVxuICAgIH0sIF9wcm9wczIpKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDI5bVpuTmxkQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZCUVRzN096dEJRVU5CT3pzN096czdPenM3TzBsQlJVMHNUVHM3T3pzN096czdPMjFDUVUxS0xFOHNjMEpCUVZVN1FVRkJRVHM3UVVGQlFTeFJRVU5CTEV0QlJFRXNSMEZEVlN4TFFVRkxMRXRCUkdZc1EwRkRRU3hMUVVSQk96dEJRVVZTTEZOQlFVc3NWMEZCVEN4SFFVRnRRaXhOUVVGTkxFZEJRVTRzUlVGQmJrSTdPMEZCUlVFc1UwRkJTeXhqUVVGTUxFZEJRWE5DTEZsQlFVMDdRVUZETVVJc2IwTkJRV01zVDBGQlN5eGxRVUZ1UWp0QlFVTkVMRXRCUmtRN08wRkJTVUVzVlVGQlRTeFhRVUZPTEVOQlFXdENMRXRCUVVzc1kwRkJka0k3UVVGRFJDeEhPenR0UWtGRlJDeE5MSEZDUVVGVE8wRkJRVUVzVVVGRFF5eExRVVJFTEVkQlExY3NTMEZCU3l4TFFVUm9RaXhEUVVORExFdEJSRVE3TzBGQlJWQXNWVUZCVFN4alFVRk9MRU5CUVhGQ0xFdEJRVXNzWTBGQk1VSTdRVUZEUkN4SE96dHRRa0ZGUkN4TkxIRkNRVUZUTzBGQlFVRXNhVUpCUTJsQ0xFdEJRVXNzUzBGRWRFSTdRVUZCUVN4UlFVTkRMRXRCUkVRc1ZVRkRReXhMUVVSRU8wRkJRVUVzVVVGRFVTeEpRVVJTTEZWQlExRXNTVUZFVWpzN1FVRkZVQ3hSUVVGTkxGTkJRVk1zVFVGQlRTeEhRVUZPTEV0QlFXTXNTMEZCU3l4WFFVRnNRenRCUVVOQkxGZEJRVThzVDBGQlR5eE5RVUZrTzBGQlEwUXNSenM3T3pzN1FVRXhRa2NzVFN4RFFVTkhMRmtzUjBGQlpUdEJRVU53UWl4UlFVRk5MRU5CUkdNN1FVRkZjRUlzVjBGQlV6dEJRVVpYTEVNN08ydENRVFJDVkN4WlFVRmhPMEZCUVVFc2IwTkJRVlFzU1VGQlV6dEJRVUZVTEZGQlFWTTdRVUZCUVRzN1FVRkRNVUlzVFVGQlNTeExRVUZMTEUxQlFVd3NTMEZCWjBJc1EwRkJjRUlzUlVGQmRVSTdRVUZCUVN4UlFVTmlMRXRCUkdFc1IwRkRTQ3hKUVVSSE96dEJRVVZ5UWl4WFFVRlBMRWxCUVVrc1RVRkJTaXhEUVVGWExFdEJRVmdzUTBGQlVEdEJRVU5FTEVkQlNFUXNUVUZIVHp0QlFVRkJMRkZCUTBjc1MwRkVTQ3hIUVVNNFFpeEpRVVE1UWp0QlFVRkJMRkZCUTFVc1VVRkVWaXhIUVVNNFFpeEpRVVE1UWp0QlFVRkJMRkZCUTI5Q0xFOUJSSEJDTEVkQlF6aENMRWxCUkRsQ096dEJRVVZNTEZkQlFVOHNTVUZCU1N4TlFVRktPMEZCUTB3c2EwSkJSRXM3UVVGRlREdEJRVVpMTEU5QlIwWXNUMEZJUlN4RlFVRlFPMEZCUzBRN1FVRkRSaXhESWl3aVptbHNaU0k2SW05bVpuTmxkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk4bk8xeHVhVzF3YjNKMElIc2diMjVHY21GdFpWVndaR0YwWlNCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVjYm1Oc1lYTnpJRTltWm5ObGRDQmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJSE4wWVhScFl5QmtaV1poZFd4MFVISnZjSE1nUFNCN1hHNGdJQ0FnWm5KdmJUb2dNQ3hjYmlBZ0lDQndZWE56YVhabE9pQjBjblZsWEc0Z0lIMDdYRzVjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdsdWNIVjBJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUhSb2FYTXVhVzV3ZFhSUGNtbG5hVzRnUFNCcGJuQjFkQzVuWlhRb0tUdGNibHh1SUNBZ0lIUm9hWE11YzJOb1pXUjFiR1ZWY0dSaGRHVWdQU0FvS1NBOVBpQjdYRzRnSUNBZ0lDQnZia1p5WVcxbFZYQmtZWFJsS0hSb2FYTXVjMk5vWldSMWJHVmtWWEJrWVhSbEtUdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ2FXNXdkWFF1WVdSa1RHbHpkR1Z1WlhJb2RHaHBjeTV6WTJobFpIVnNaVlZ3WkdGMFpTazdYRzRnSUgxY2JseHVJQ0J2YmxOMGIzQW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QnBibkIxZENCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQnBibkIxZEM1eVpXMXZkbVZNYVhOMFpXNWxjaWgwYUdsekxuTmphR1ZrZFd4bFZYQmtZWFJsS1R0Y2JpQWdmVnh1WEc0Z0lIVndaR0YwWlNncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdsdWNIVjBMQ0JtY205dElIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR052Ym5OMElHOW1abk5sZENBOUlHbHVjSFYwTG1kbGRDZ3BJQzBnZEdocGN5NXBibkIxZEU5eWFXZHBianRjYmlBZ0lDQnlaWFIxY200Z1puSnZiU0FySUc5bVpuTmxkRHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvTGk0dVlYSm5jeWtnUFQ0Z2UxeHVJQ0JwWmlBb1lYSm5jeTVzWlc1bmRHZ2dQVDA5SURFcElIdGNiaUFnSUNCamIyNXpkQ0JiSUhCeWIzQnpJRjBnUFNCaGNtZHpPMXh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dUMlptYzJWMEtIQnliM0J6S1R0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCamIyNXpkQ0JiSUdsdWNIVjBMQ0J2YmxWd1pHRjBaU3dnY0hKdmNITWdYU0E5SUdGeVozTTdYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QlBabVp6WlhRb2UxeHVJQ0FnSUNBZ2FXNXdkWFFzWEc0Z0lDQWdJQ0J2YmxWd1pHRjBaU3hjYmlBZ0lDQWdJQzR1TG5CeWIzQnpYRzRnSUNBZ2ZTazdYRzRnSUgxY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9vZmZzZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBhcmFsbGVsID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFBhcmFsbGVsLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBQYXJhbGxlbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFyYWxsZWwpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBQYXJhbGxlbC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgYWN0aW9ucyA9IHRoaXMucHJvcHMuYWN0aW9ucztcblxuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IGFjdGlvbnMubGVuZ3RoO1xuXG4gICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIGFjdGlvbi5zZXRQcm9wcyh7XG4gICAgICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIHJldHVybiBhY3Rpb24uc3RvcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5hZGRBY3Rpb24gPSBmdW5jdGlvbiBhZGRBY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLnByb3BzLmFjdGlvbnM7XG5cblxuICAgIGlmIChhY3Rpb25zLmluZGV4T2YoYWN0aW9uKSA9PT0gLTEpIHtcbiAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMDtcbiAgfTtcblxuICByZXR1cm4gUGFyYWxsZWw7XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBQYXJhbGxlbChfZXh0ZW5kcyh7IGFjdGlvbnM6IGFjdGlvbnMgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQmhjbUZzYkdWc0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenM3T3pzN096czdPenM3U1VGRlRTeFJPenM3T3pzN096czdjVUpCUTBvc1R5eHpRa0ZCVlR0QlFVRkJPenRCUVVGQkxGRkJRMEVzVDBGRVFTeEhRVU5aTEV0QlFVc3NTMEZFYWtJc1EwRkRRU3hQUVVSQk96dEJRVVZTTEZOQlFVc3NaMEpCUVV3c1IwRkJkMElzVVVGQlVTeE5RVUZvUXpzN1FVRkZRU3haUVVGUkxFOUJRVklzUTBGQlowSXNWVUZCUXl4TlFVRkVMRVZCUVZrN1FVRkRNVUlzWVVGQlR5eFJRVUZRTEVOQlFXZENPMEZCUTJRc2FVSkJRVk03UVVGQlFTeHBRa0ZCVFN4UFFVRkxMR2RDUVVGTUxFVkJRVTQ3UVVGQlFUdEJRVVJMTEU5QlFXaENMRVZCUlVjc1MwRkdTRHRCUVVkRUxFdEJTa1E3UVVGTFJDeEhPenR4UWtGRlJDeE5MSEZDUVVGVE8wRkJRMUFzVTBGQlN5eExRVUZNTEVOQlFWY3NUMEZCV0N4RFFVRnRRaXhQUVVGdVFpeERRVUV5UWl4VlFVRkRMRTFCUVVRN1FVRkJRU3hoUVVGWkxFOUJRVThzU1VGQlVDeEZRVUZhTzBGQlFVRXNTMEZCTTBJN1FVRkRSQ3hIT3p0eFFrRkZSQ3hUTEhOQ1FVRlZMRTBzUlVGQlVUdEJRVUZCTEZGQlExSXNUMEZFVVN4SFFVTkpMRXRCUVVzc1MwRkVWQ3hEUVVOU0xFOUJSRkU3T3p0QlFVZG9RaXhSUVVGSkxGRkJRVkVzVDBGQlVpeERRVUZuUWl4TlFVRm9RaXhOUVVFMFFpeERRVUZETEVOQlFXcERMRVZCUVc5RE8wRkJRMnhETEdOQlFWRXNTVUZCVWl4RFFVRmhMRTFCUVdJN1FVRkRSRHRCUVVOR0xFYzdPM0ZDUVVWRUxHZENMQ3RDUVVGdFFqdEJRVU5xUWl4WFFVRlJMRXRCUVVzc1owSkJRVXdzUzBGQk1FSXNRMEZCYkVNN1FVRkRSQ3hIT3pzN096dHJRa0ZIV1N4VlFVRkRMRTlCUVVRc1JVRkJWU3hMUVVGV08wRkJRVUVzVTBGQmIwSXNTVUZCU1N4UlFVRktMRmxCUVdVc1owSkJRV1lzU1VGQk1rSXNTMEZCTTBJc1JVRkJjRUk3UVVGQlFTeERJaXdpWm1sc1pTSTZJbkJoY21Gc2JHVnNMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNWNibU5zWVhOeklGQmhjbUZzYkdWc0lHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHRmpkR2x2Ym5NZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdkR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6SUQwZ1lXTjBhVzl1Y3k1c1pXNW5kR2c3WEc1Y2JpQWdJQ0JoWTNScGIyNXpMbVp2Y2tWaFkyZ29LR0ZqZEdsdmJpa2dQVDRnZTF4dUlDQWdJQ0FnWVdOMGFXOXVMbk5sZEZCeWIzQnpLSHRjYmlBZ0lDQWdJQ0FnWDI5dVUzUnZjRG9nS0NrZ1BUNGdkR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6TFMxY2JpQWdJQ0FnSUgwcExuTjBZWEowS0NrN1hHNGdJQ0FnZlNrN1hHNGdJSDFjYmx4dUlDQnZibE4wYjNBb0tTQjdYRzRnSUNBZ2RHaHBjeTV3Y205d2N5NWhZM1JwYjI1ekxtWnZja1ZoWTJnb0tHRmpkR2x2YmlrZ1BUNGdZV04wYVc5dUxuTjBiM0FvS1NrN1hHNGdJSDFjYmx4dUlDQmhaR1JCWTNScGIyNG9ZV04wYVc5dUtTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCaFkzUnBiMjV6SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdhV1lnS0dGamRHbHZibk11YVc1a1pYaFBaaWhoWTNScGIyNHBJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdZV04wYVc5dWN5NXdkWE5vS0dGamRHbHZiaWs3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYVhOQlkzUnBiMjVEYjIxd2JHVjBaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdLSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lBOVBUMGdNQ2s3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dGamRHbHZibk1zSUhCeWIzQnpLU0E5UGlCdVpYY2dVR0Z5WVd4c1pXd29leUJoWTNScGIyNXpMQ0F1TGk1d2NtOXdjeUI5S1R0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BhcmFsbGVsLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQaHlzaWNzID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFBoeXNpY3MsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFBoeXNpY3MoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBoeXNpY3MpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBQaHlzaWNzLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGF1dG9TdG9wU3BlZWQgPSBfcHJvcHMuYXV0b1N0b3BTcGVlZDtcbiAgICB2YXIgYWNjZWxlcmF0aW9uID0gX3Byb3BzLmFjY2VsZXJhdGlvbjtcbiAgICB2YXIgZnJpY3Rpb24gPSBfcHJvcHMuZnJpY3Rpb247XG4gICAgdmFyIHZlbG9jaXR5ID0gX3Byb3BzLnZlbG9jaXR5O1xuICAgIHZhciBzcHJpbmcgPSBfcHJvcHMuc3ByaW5nO1xuICAgIHZhciB0byA9IF9wcm9wcy50bztcblxuICAgIHZhciBuZXdWZWxvY2l0eSA9IHZlbG9jaXR5O1xuICAgIHZhciBlbGFwc2VkID0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpO1xuXG4gICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGFjY2VsZXJhdGlvbikge1xuICAgICAgbmV3VmVsb2NpdHkgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKGFjY2VsZXJhdGlvbiwgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgZnJpY3Rpb24gdG8gdmVsb2NpdHlcbiAgICBpZiAoZnJpY3Rpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICo9IE1hdGgucG93KDEgLSBmcmljdGlvbiwgZWxhcHNlZCAvIDEwMCk7XG4gICAgfVxuXG4gICAgaWYgKHNwcmluZyAmJiB0byAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZGlzdGFuY2VUb1RhcmdldCA9IHRvIC0gdGhpcy5jdXJyZW50O1xuICAgICAgbmV3VmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShzcHJpbmcsIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHZlbG9jaXR5XG4gICAgdGhpcy5jdXJyZW50ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShuZXdWZWxvY2l0eSwgZWxhcHNlZCk7XG4gICAgdGhpcy5wcm9wcy52ZWxvY2l0eSA9IG5ld1ZlbG9jaXR5O1xuXG4gICAgLy8gQ2hlY2sgaWYgc2ltdWxhdGlvbiBpcyBjb21wbGV0ZVxuICAgIC8vIFdlIGRvIHRoaXMgaGVyZSBpbnN0ZWFkIG9mIGBpc0FjdGlvbkNvbXBsZXRlYCBhcyBpdCBhbGxvd3MgdXNcbiAgICAvLyB0byBjbGFtcCBkdXJpbmcgdGhpcyB1cGRhdGVcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBhdXRvU3RvcFNwZWVkICE9PSBmYWxzZSAmJiAoIW5ld1ZlbG9jaXR5IHx8IE1hdGguYWJzKG5ld1ZlbG9jaXR5KSA8PSBhdXRvU3RvcFNwZWVkKTtcblxuICAgIGlmICh0aGlzLmlzQ29tcGxldGUgJiYgc3ByaW5nKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0bztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9O1xuXG4gIFBoeXNpY3MucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGU7XG4gIH07XG5cbiAgcmV0dXJuIFBoeXNpY3M7XG59KF8yLmRlZmF1bHQpO1xuXG5QaHlzaWNzLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWNjZWxlcmF0aW9uOiAwLFxuICBmcmljdGlvbjogMCxcbiAgdmVsb2NpdHk6IDAsXG4gIGF1dG9TdG9wU3BlZWQ6IDAuMDAxXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBQaHlzaWNzKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQm9lWE5wWTNNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN08wRkJRMEU3T3pzN096czdPenM3U1VGRlRTeFBPenM3T3pzN096czdiMEpCVVVvc1RTeHhRa0ZCVXp0QlFVRkJMR2xDUVVOcFJTeExRVUZMTEV0QlJIUkZPMEZCUVVFc1VVRkRReXhoUVVSRUxGVkJRME1zWVVGRVJEdEJRVUZCTEZGQlEyZENMRmxCUkdoQ0xGVkJRMmRDTEZsQlJHaENPMEZCUVVFc1VVRkRPRUlzVVVGRU9VSXNWVUZET0VJc1VVRkVPVUk3UVVGQlFTeFJRVU4zUXl4UlFVUjRReXhWUVVOM1F5eFJRVVI0UXp0QlFVRkJMRkZCUTJ0RUxFMUJSR3hFTEZWQlEydEVMRTFCUkd4RU8wRkJRVUVzVVVGRE1FUXNSVUZFTVVRc1ZVRkRNRVFzUlVGRU1VUTdPMEZCUlZBc1VVRkJTU3hqUVVGakxGRkJRV3hDTzBGQlEwRXNVVUZCVFN4VlFVRlZMRzlEUVVGb1FqczdPMEZCUjBFc1VVRkJTU3haUVVGS0xFVkJRV3RDTzBGQlEyaENMSEZDUVVGbExIbENRVUZqTEZsQlFXUXNSVUZCTkVJc1QwRkJOVUlzUTBGQlpqdEJRVU5FT3pzN1FVRkhSQ3hSUVVGSkxGRkJRVW9zUlVGQll6dEJRVU5hTERoQ1FVRm5RaXhKUVVGSkxGRkJRWEJDTEVWQlFXdERMRlZCUVZVc1IwRkJOVU03UVVGRFJEczdRVUZGUkN4UlFVRkpMRlZCUVZVc1QwRkJUeXhUUVVGeVFpeEZRVUZuUXp0QlFVTTVRaXhWUVVGTkxHMUNRVUZ0UWl4TFFVRkxMRXRCUVVzc1QwRkJia003UVVGRFFTeHhRa0ZCWlN4dFFrRkJiVUlzZVVKQlFXTXNUVUZCWkN4RlFVRnpRaXhQUVVGMFFpeERRVUZzUXp0QlFVTkVPenM3UVVGSFJDeFRRVUZMTEU5QlFVd3NTVUZCWjBJc2VVSkJRV01zVjBGQlpDeEZRVUV5UWl4UFFVRXpRaXhEUVVGb1FqdEJRVU5CTEZOQlFVc3NTMEZCVEN4RFFVRlhMRkZCUVZnc1IwRkJjMElzVjBGQmRFSTdPenM3TzBGQlMwRXNVMEZCU3l4VlFVRk1MRWRCUVcxQ0xHdENRVUZyUWl4TFFVRnNRaXhMUVVFMFFpeERRVUZETEZkQlFVUXNTVUZCWjBJc1MwRkJTeXhIUVVGTUxFTkJRVk1zVjBGQlZDeExRVUY1UWl4aFFVRnlSU3hEUVVGdVFqczdRVUZGUVN4UlFVRkpMRXRCUVVzc1ZVRkJUQ3hKUVVGdFFpeE5RVUYyUWl4RlFVRXJRanRCUVVNM1FpeFhRVUZMTEU5QlFVd3NSMEZCWlN4RlFVRm1PMEZCUTBRN08wRkJSVVFzVjBGQlR5eExRVUZMTEU5QlFWbzdRVUZEUkN4SE96dHZRa0ZGUkN4blFpd3JRa0ZCYlVJN1FVRkRha0lzVjBGQlR5eExRVUZMTEZWQlFWbzdRVUZEUkN4SE96czdPenRCUVRsRFJ5eFBMRU5CUTBjc1dTeEhRVUZsTzBGQlEzQkNMR2RDUVVGakxFTkJSRTA3UVVGRmNFSXNXVUZCVlN4RFFVWlZPMEZCUjNCQ0xGbEJRVlVzUTBGSVZUdEJRVWx3UWl4cFFrRkJaVHRCUVVwTExFTTdPMnRDUVdkRVZDeFZRVUZETEV0QlFVUTdRVUZCUVN4VFFVRlhMRWxCUVVrc1QwRkJTaXhEUVVGWkxFdEJRVm9zUTBGQldEdEJRVUZCTEVNaUxDSm1hV3hsSWpvaWNHaDVjMmxqY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1YVcxd2IzSjBJSHNnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsSUgwZ1puSnZiU0FuTGk0dlpuSmhiV1Z6ZVc1akp6dGNibWx0Y0c5eWRDQjdJSE53WldWa1VHVnlSbkpoYldVZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVjYm1Oc1lYTnpJRkJvZVhOcFkzTWdaWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0J6ZEdGMGFXTWdaR1ZtWVhWc2RGQnliM0J6SUQwZ2UxeHVJQ0FnSUdGalkyVnNaWEpoZEdsdmJqb2dNQ3hjYmlBZ0lDQm1jbWxqZEdsdmJqb2dNQ3hjYmlBZ0lDQjJaV3h2WTJsMGVUb2dNQ3hjYmlBZ0lDQmhkWFJ2VTNSdmNGTndaV1ZrT2lBd0xqQXdNVnh1SUNCOVhHNWNiaUFnZFhCa1lYUmxLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dZWFYwYjFOMGIzQlRjR1ZsWkN3Z1lXTmpaV3hsY21GMGFXOXVMQ0JtY21samRHbHZiaXdnZG1Wc2IyTnBkSGtzSUhOd2NtbHVaeXdnZEc4Z2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdiR1YwSUc1bGQxWmxiRzlqYVhSNUlEMGdkbVZzYjJOcGRIazdYRzRnSUNBZ1kyOXVjM1FnWld4aGNITmxaQ0E5SUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNncE8xeHVYRzRnSUNBZ0x5OGdRWEJ3YkhrZ1lXTmpaV3hsY21GMGFXOXVJSFJ2SUhabGJHOWphWFI1WEc0Z0lDQWdhV1lnS0dGalkyVnNaWEpoZEdsdmJpa2dlMXh1SUNBZ0lDQWdibVYzVm1Wc2IyTnBkSGtnS3owZ2MzQmxaV1JRWlhKR2NtRnRaU2hoWTJObGJHVnlZWFJwYjI0c0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFRndjR3g1SUdaeWFXTjBhVzl1SUhSdklIWmxiRzlqYVhSNVhHNGdJQ0FnYVdZZ0tHWnlhV04wYVc5dUtTQjdYRzRnSUNBZ0lDQnVaWGRXWld4dlkybDBlU0FxUFNBb01TQXRJR1p5YVdOMGFXOXVLU0FxS2lBb1pXeGhjSE5sWkNBdklERXdNQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hOd2NtbHVaeUFtSmlCMGJ5QWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0JrYVhOMFlXNWpaVlJ2VkdGeVoyVjBJRDBnZEc4Z0xTQjBhR2x6TG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0J1WlhkV1pXeHZZMmwwZVNBclBTQmthWE4wWVc1alpWUnZWR0Z5WjJWMElDb2djM0JsWldSUVpYSkdjbUZ0WlNoemNISnBibWNzSUdWc1lYQnpaV1FwTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUVGd2NHeDVJSFpsYkc5amFYUjVYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJQ3M5SUhOd1pXVmtVR1Z5Um5KaGJXVW9ibVYzVm1Wc2IyTnBkSGtzSUdWc1lYQnpaV1FwTzF4dUlDQWdJSFJvYVhNdWNISnZjSE11ZG1Wc2IyTnBkSGtnUFNCdVpYZFdaV3h2WTJsMGVUdGNibHh1SUNBZ0lDOHZJRU5vWldOcklHbG1JSE5wYlhWc1lYUnBiMjRnYVhNZ1kyOXRjR3hsZEdWY2JpQWdJQ0F2THlCWFpTQmtieUIwYUdseklHaGxjbVVnYVc1emRHVmhaQ0J2WmlCZ2FYTkJZM1JwYjI1RGIyMXdiR1YwWldBZ1lYTWdhWFFnWVd4c2IzZHpJSFZ6WEc0Z0lDQWdMeThnZEc4Z1kyeGhiWEFnWkhWeWFXNW5JSFJvYVhNZ2RYQmtZWFJsWEc0Z0lDQWdkR2hwY3k1cGMwTnZiWEJzWlhSbElEMGdLR0YxZEc5VGRHOXdVM0JsWldRZ0lUMDlJR1poYkhObElDWW1JQ2doYm1WM1ZtVnNiMk5wZEhrZ2ZId2dUV0YwYUM1aFluTW9ibVYzVm1Wc2IyTnBkSGtwSUR3OUlHRjFkRzlUZEc5d1UzQmxaV1FwS1R0Y2JseHVJQ0FnSUdsbUlDaDBhR2x6TG1selEyOXRjR3hsZEdVZ0ppWWdjM0J5YVc1bktTQjdYRzRnSUNBZ0lDQjBhR2x6TG1OMWNuSmxiblFnUFNCMGJ6dGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWpkWEp5Wlc1ME8xeHVJQ0I5WEc1Y2JpQWdhWE5CWTNScGIyNURiMjF3YkdWMFpTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVwYzBOdmJYQnNaWFJsTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNod2NtOXdjeWtnUFQ0Z2JtVjNJRkJvZVhOcFkzTW9jSEp2Y0hNcE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BoeXNpY3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3ZhbHVlID0gcmVxdWlyZSgnLi92YWx1ZScpO1xuXG52YXIgX3ZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlKTtcblxudmFyIF9jb21wb3NpdGUgPSByZXF1aXJlKCcuL2NvbXBvc2l0ZScpO1xuXG52YXIgX2NvbXBvc2l0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvaW50ZXIoX3JlZjIsIF9yZWYpIHtcbiAgdmFyIHggPSBfcmVmMi54O1xuICB2YXIgeSA9IF9yZWYyLnk7XG4gIHZhciBldmVudFRvUG9pbnRzID0gX3JlZi5ldmVudFRvUG9pbnRzO1xuICB2YXIgbW92ZUV2ZW50ID0gX3JlZi5tb3ZlRXZlbnQ7XG5cbiAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnZXZlbnRUb1BvaW50cycsICdtb3ZlRXZlbnQnXSk7XG5cbiAgdmFyIHBvaW50ZXIgPSAoMCwgX2NvbXBvc2l0ZTIuZGVmYXVsdCkoe1xuICAgIHg6ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHgpLFxuICAgIHk6ICgwLCBfdmFsdWUyLmRlZmF1bHQpKHkpXG4gIH0sIF9leHRlbmRzKHtcbiAgICBwYXNzaXZlOiB0cnVlLFxuICAgIHByZXZlbnREZWZhdWx0OiB0cnVlXG4gIH0sIHByb3BzKSk7XG5cbiAgdmFyIHVwZGF0ZVBvaW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChwcm9wcy5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciBwb2ludHMgPSBldmVudFRvUG9pbnRzKGUpO1xuICAgIHBvaW50ZXIueC5zZXQocG9pbnRzLngpO1xuICAgIHBvaW50ZXIueS5zZXQocG9pbnRzLnkpO1xuICB9O1xuXG4gIHBvaW50ZXIuc2V0UHJvcHMoe1xuICAgIF9vblN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVQb2ludGVyKTtcbiAgICB9LFxuICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBvaW50ZXI7XG59XG5cbnZhciBtb3VzZUV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiB7XG4gICAgeDogZS5wYWdlWCxcbiAgICB5OiBlLnBhZ2VZXG4gIH07XG59O1xuXG52YXIgdG91Y2hFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgdmFyIGNoYW5nZWRUb3VjaGVzID0gX3JlZjMuY2hhbmdlZFRvdWNoZXM7XG4gIHJldHVybiB7XG4gICAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG4gIH07XG59O1xuXG52YXIgZ2V0TmF0aXZlRXZlbnQgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4gZS5vcmlnaW5hbEV2ZW50IHx8IGUubmF0aXZlRXZlbnQgfHwgZTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlLCBwcm9wcykge1xuICB2YXIgbmF0aXZlRXZlbnQgPSBnZXROYXRpdmVFdmVudChlKTtcbiAgcmV0dXJuIG5hdGl2ZUV2ZW50LnRvdWNoZXMgPyBjcmVhdGVQb2ludGVyKHRvdWNoRXZlbnRUb1BvaW50KGUpLCBfZXh0ZW5kcyh7XG4gICAgbW92ZUV2ZW50OiAndG91Y2htb3ZlJyxcbiAgICBldmVudFRvUG9pbnRzOiB0b3VjaEV2ZW50VG9Qb2ludFxuICB9LCBwcm9wcykpIDogY3JlYXRlUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwgX2V4dGVuZHMoe1xuICAgIG1vdmVFdmVudDogJ21vdXNlbW92ZScsXG4gICAgZXZlbnRUb1BvaW50czogbW91c2VFdmVudFRvUG9pbnRcbiAgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQnZhVzUwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenM3T3pzN1FVRkZRU3hUUVVGVExHRkJRVlFzWTBGQmVVVTdRVUZCUVN4TlFVRm9SQ3hEUVVGblJDeFRRVUZvUkN4RFFVRm5SRHRCUVVGQkxFMUJRVGRETEVOQlFUWkRMRk5CUVRkRExFTkJRVFpETzBGQlFVRXNUVUZCZEVNc1lVRkJjME1zVVVGQmRFTXNZVUZCYzBNN1FVRkJRU3hOUVVGMlFpeFRRVUYxUWl4UlFVRjJRaXhUUVVGMVFqczdRVUZCUVN4TlFVRlVMRXRCUVZNN08wRkJRM1pGTEUxQlFVMHNWVUZCVlN4NVFrRkJWVHRCUVVONFFpeFBRVUZITEhGQ1FVRk5MRU5CUVU0c1EwRkVjVUk3UVVGRmVFSXNUMEZCUnl4eFFrRkJUU3hEUVVGT08wRkJSbkZDTEVkQlFWWTdRVUZKWkN4aFFVRlRMRWxCU2tzN1FVRkxaQ3h2UWtGQlowSTdRVUZNUml4TFFVMVlMRXRCVGxjc1JVRkJhRUk3TzBGQlUwRXNUVUZCVFN4blFrRkJaMElzVlVGQlF5eERRVUZFTEVWQlFVODdRVUZETTBJc1VVRkJTU3hOUVVGTkxHTkJRVllzUlVGQk1FSTdRVUZEZUVJc1VVRkJSU3hqUVVGR08wRkJRMFE3TzBGQlJVUXNVVUZCVFN4VFFVRlRMR05CUVdNc1EwRkJaQ3hEUVVGbU8wRkJRMEVzV1VGQlVTeERRVUZTTEVOQlFWVXNSMEZCVml4RFFVRmpMRTlCUVU4c1EwRkJja0k3UVVGRFFTeFpRVUZSTEVOQlFWSXNRMEZCVlN4SFFVRldMRU5CUVdNc1QwRkJUeXhEUVVGeVFqdEJRVU5FTEVkQlVrUTdPMEZCVlVFc1ZVRkJVU3hSUVVGU0xFTkJRV2xDTzBGQlEyWXNZMEZCVlR0QlFVRkJMR0ZCUVUwc1UwRkJVeXhsUVVGVUxFTkJRWGxDTEdkQ1FVRjZRaXhEUVVFd1F5eFRRVUV4UXl4RlFVRnhSQ3hoUVVGeVJDeERRVUZPTzBGQlFVRXNTMEZFU3p0QlFVVm1MR0ZCUVZNN1FVRkJRU3hoUVVGTkxGTkJRVk1zWlVGQlZDeERRVUY1UWl4dFFrRkJla0lzUTBGQk5rTXNVMEZCTjBNc1JVRkJkMFFzWVVGQmVFUXNRMEZCVGp0QlFVRkJPMEZCUmswc1IwRkJha0k3TzBGQlMwRXNVMEZCVHl4UFFVRlFPMEZCUTBRN08wRkJSVVFzU1VGQlRTeHZRa0ZCYjBJc1ZVRkJReXhEUVVGRU8wRkJRVUVzVTBGQlVUdEJRVU5vUXl4UFFVRkhMRVZCUVVVc1MwRkVNa0k3UVVGRmFFTXNUMEZCUnl4RlFVRkZPMEZCUmpKQ0xFZEJRVkk3UVVGQlFTeERRVUV4UWpzN1FVRkxRU3hKUVVGTkxHOUNRVUZ2UWp0QlFVRkJMRTFCUVVjc1kwRkJTQ3hUUVVGSExHTkJRVWc3UVVGQlFTeFRRVUY1UWp0QlFVTnFSQ3hQUVVGSExHVkJRV1VzUTBGQlppeEZRVUZyUWl4UFFVUTBRanRCUVVWcVJDeFBRVUZITEdWQlFXVXNRMEZCWml4RlFVRnJRanRCUVVZMFFpeEhRVUY2UWp0QlFVRkJMRU5CUVRGQ096dEJRVXRCTEVsQlFVMHNhVUpCUVdsQ0xGVkJRVU1zUTBGQlJEdEJRVUZCTEZOQlFVOHNSVUZCUlN4aFFVRkdMRWxCUVcxQ0xFVkJRVVVzVjBGQmNrSXNTVUZCYjBNc1EwRkJNME03UVVGQlFTeERRVUYyUWpzN2EwSkJSV1VzVlVGQlF5eERRVUZFTEVWQlFVa3NTMEZCU2l4RlFVRmpPMEZCUXpOQ0xFMUJRVTBzWTBGQll5eGxRVUZsTEVOQlFXWXNRMEZCY0VJN1FVRkRRU3hUUVVGUkxGbEJRVmtzVDBGQllpeEhRVU5NTEdOQlFXTXNhMEpCUVd0Q0xFTkJRV3hDTEVOQlFXUTdRVUZEUlN4bFFVRlhMRmRCUkdJN1FVRkZSU3h0UWtGQlpUdEJRVVpxUWl4TFFVZExMRXRCU0V3c1JVRkVTeXhIUVUxTUxHTkJRV01zYTBKQlFXdENMRU5CUVd4Q0xFTkJRV1E3UVVGRFJTeGxRVUZYTEZkQlJHSTdRVUZGUlN4dFFrRkJaVHRCUVVacVFpeExRVWRMTEV0QlNFd3NSVUZPUmp0QlFWZEVMRU1pTENKbWFXeGxJam9pY0c5cGJuUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjJZV3gxWlNCbWNtOXRJQ2N1TDNaaGJIVmxKenRjYm1sdGNHOXlkQ0JqYjIxd2IzTnBkR1VnWm5KdmJTQW5MaTlqYjIxd2IzTnBkR1VuTzF4dVhHNW1kVzVqZEdsdmJpQmpjbVZoZEdWUWIybHVkR1Z5S0hzZ2VDd2dlU0I5TENCN0lHVjJaVzUwVkc5UWIybHVkSE1zSUcxdmRtVkZkbVZ1ZEN3Z0xpNHVjSEp2Y0hNZ2ZTa2dlMXh1SUNCamIyNXpkQ0J3YjJsdWRHVnlJRDBnWTI5dGNHOXphWFJsS0h0Y2JpQWdJQ0I0T2lCMllXeDFaU2g0S1N4Y2JpQWdJQ0I1T2lCMllXeDFaU2g1S1Z4dUlDQjlMQ0I3WEc0Z0lDQWdjR0Z6YzJsMlpUb2dkSEoxWlN4Y2JpQWdJQ0J3Y21WMlpXNTBSR1ZtWVhWc2REb2dkSEoxWlN4Y2JpQWdJQ0F1TGk1d2NtOXdjMXh1SUNCOUtUdGNibHh1SUNCamIyNXpkQ0IxY0dSaGRHVlFiMmx1ZEdWeUlEMGdLR1VwSUQwK0lIdGNiaUFnSUNCcFppQW9jSEp2Y0hNdWNISmxkbVZ1ZEVSbFptRjFiSFFwSUh0Y2JpQWdJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JqYjI1emRDQndiMmx1ZEhNZ1BTQmxkbVZ1ZEZSdlVHOXBiblJ6S0dVcE8xeHVJQ0FnSUhCdmFXNTBaWEl1ZUM1elpYUW9jRzlwYm5SekxuZ3BPMXh1SUNBZ0lIQnZhVzUwWlhJdWVTNXpaWFFvY0c5cGJuUnpMbmtwTzF4dUlDQjlPMXh1WEc0Z0lIQnZhVzUwWlhJdWMyVjBVSEp2Y0hNb2UxeHVJQ0FnSUY5dmJsTjBZWEowT2lBb0tTQTlQaUJrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpaHRiM1psUlhabGJuUXNJSFZ3WkdGMFpWQnZhVzUwWlhJcExGeHVJQ0FnSUY5dmJsTjBiM0E2SUNncElEMCtJR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLRzF2ZG1WRmRtVnVkQ3dnZFhCa1lYUmxVRzlwYm5SbGNpbGNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJSEJ2YVc1MFpYSTdYRzU5WEc1Y2JtTnZibk4wSUcxdmRYTmxSWFpsYm5SVWIxQnZhVzUwSUQwZ0tHVXBJRDArSUNoN1hHNGdJSGc2SUdVdWNHRm5aVmdzWEc0Z0lIazZJR1V1Y0dGblpWbGNibjBwTzF4dVhHNWpiMjV6ZENCMGIzVmphRVYyWlc1MFZHOVFiMmx1ZENBOUlDaDdJR05vWVc1blpXUlViM1ZqYUdWeklIMHBJRDArSUNoN1hHNGdJSGc2SUdOb1lXNW5aV1JVYjNWamFHVnpXekJkTG1Oc2FXVnVkRmdzWEc0Z0lIazZJR05vWVc1blpXUlViM1ZqYUdWeld6QmRMbU5zYVdWdWRGbGNibjBwTzF4dVhHNWpiMjV6ZENCblpYUk9ZWFJwZG1WRmRtVnVkQ0E5SUNobEtTQTlQaUJsTG05eWFXZHBibUZzUlhabGJuUWdmSHdnWlM1dVlYUnBkbVZGZG1WdWRDQjhmQ0JsTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1pTd2djSEp2Y0hNcElEMCtJSHRjYmlBZ1kyOXVjM1FnYm1GMGFYWmxSWFpsYm5RZ1BTQm5aWFJPWVhScGRtVkZkbVZ1ZENobEtUdGNiaUFnY21WMGRYSnVJQ2h1WVhScGRtVkZkbVZ1ZEM1MGIzVmphR1Z6S1NBL1hHNGdJQ0FnWTNKbFlYUmxVRzlwYm5SbGNpaDBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDaGxLU3dnZTF4dUlDQWdJQ0FnYlc5MlpVVjJaVzUwT2lBbmRHOTFZMmh0YjNabEp5eGNiaUFnSUNBZ0lHVjJaVzUwVkc5UWIybHVkSE02SUhSdmRXTm9SWFpsYm5SVWIxQnZhVzUwTEZ4dUlDQWdJQ0FnTGk0dWNISnZjSE5jYmlBZ0lDQjlLU0E2WEc0Z0lDQWdZM0psWVhSbFVHOXBiblJsY2lodGIzVnpaVVYyWlc1MFZHOVFiMmx1ZENobEtTd2dlMXh1SUNBZ0lDQWdiVzkyWlVWMlpXNTBPaUFuYlc5MWMyVnRiM1psSnl4Y2JpQWdJQ0FnSUdWMlpXNTBWRzlRYjJsdWRITTZJRzF2ZFhObFJYWmxiblJVYjFCdmFXNTBMRnh1SUNBZ0lDQWdMaTR1Y0hKdmNITmNiaUFnSUNCOUtUdGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcG9pbnRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfZWFzaW5nID0gcmVxdWlyZSgnLi4vaW5jL2Vhc2luZycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBjbGFtcFByb2dyZXNzID0gKDAsIF90cmFuc2Zvcm1lcnMuY2xhbXApKDAsIDEpO1xuXG52YXIgTkVYVF9TVEVQUyA9IHtcbiAgbG9vcDogZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgcmV0dXJuIHR3ZWVuLnN0YXJ0KCk7XG4gIH0sXG4gIHlveW86IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgIHJldHVybiB0d2Vlbi5yZXZlcnNlKCkuc3RhcnQoKTtcbiAgfSxcbiAgZmxpcDogZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgcmV0dXJuIHR3ZWVuLmZsaXAoKS5zdGFydCgpO1xuICB9XG59O1xuXG52YXIgVHdlZW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFR3ZWVuKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFR3ZWVuLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb247XG4gICAgdmFyIHBsYXlEaXJlY3Rpb24gPSBfcHJvcHMucGxheURpcmVjdGlvbjtcblxuXG4gICAgdGhpcy5lbGFwc2VkID0gcGxheURpcmVjdGlvbiA9PT0gMSA/IDAgOiBkdXJhdGlvbjtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZHVyYXRpb24gPSBfcHJvcHMyLmR1cmF0aW9uO1xuICAgIHZhciBlYXNlID0gX3Byb3BzMi5lYXNlO1xuICAgIHZhciBmcm9tID0gX3Byb3BzMi5mcm9tO1xuICAgIHZhciB0byA9IF9wcm9wczIudG87XG4gICAgdmFyIHBsYXlEaXJlY3Rpb24gPSBfcHJvcHMyLnBsYXlEaXJlY3Rpb247XG5cblxuICAgIHRoaXMuZWxhcHNlZCArPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCkgKiBwbGF5RGlyZWN0aW9uO1xuXG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZnJvbSwgdG8sIGVhc2UoY2xhbXBQcm9ncmVzcygoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKDAsIGR1cmF0aW9uLCB0aGlzLmVsYXBzZWQpKSkpO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGR1cmF0aW9uID0gX3Byb3BzMy5kdXJhdGlvbjtcbiAgICB2YXIgcGxheURpcmVjdGlvbiA9IF9wcm9wczMucGxheURpcmVjdGlvbjtcbiAgICB2YXIgeW95byA9IF9wcm9wczMueW95bztcbiAgICB2YXIgbG9vcCA9IF9wcm9wczMubG9vcDtcbiAgICB2YXIgZmxpcCA9IF9wcm9wczMuZmxpcDtcblxuICAgIHZhciBpc0NvbXBsZXRlID0gcGxheURpcmVjdGlvbiA9PT0gMSA/IHRoaXMuZWxhcHNlZCA+PSBkdXJhdGlvbiA6IHRoaXMuZWxhcHNlZCA8PSAwO1xuXG4gICAgaWYgKGlzQ29tcGxldGUgJiYgKHlveW8gfHwgbG9vcCB8fCBmbGlwKSkge1xuICAgICAgdmFyIGlzU3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgIHZhciBuZXh0U3RlcCA9IE5FWFRfU1RFUFNba2V5XTtcbiAgICAgICAgdmFyIGNvdW50UHJvcCA9IGtleSArICdDb3VudCc7XG4gICAgICAgIHZhciBzdGVwTWF4ID0gdGhpcy5nZXRQcm9wKGtleSk7XG4gICAgICAgIHZhciBzdGVwQ291bnQgPSB0aGlzLmdldFByb3AoY291bnRQcm9wKTtcblxuICAgICAgICBpZiAoc3RlcE1heCA+IHN0ZXBDb3VudCkge1xuICAgICAgICAgIHZhciBfc2V0UHJvcHM7XG5cbiAgICAgICAgICB0aGlzLnNldFByb3BzKChfc2V0UHJvcHMgPSB7fSwgX3NldFByb3BzW2NvdW50UHJvcF0gPSBzdGVwQ291bnQgKyAxLCBfc2V0UHJvcHMpKTtcbiAgICAgICAgICBuZXh0U3RlcCh0aGlzKTtcbiAgICAgICAgICBpc1N0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzU3RlcFRha2VuKSBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzQ29tcGxldGU7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLmdldEVsYXBzZWQgPSBmdW5jdGlvbiBnZXRFbGFwc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmVsYXBzZWQ7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLmZsaXAgPSBmdW5jdGlvbiBmbGlwKCkge1xuICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMucHJvcHMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG4gICAgdmFyIF9yZWYgPSBbdGhpcy5wcm9wcy50bywgdGhpcy5wcm9wcy5mcm9tXTtcbiAgICB0aGlzLnByb3BzLmZyb20gPSBfcmVmWzBdO1xuICAgIHRoaXMucHJvcHMudG8gPSBfcmVmWzFdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgIHRoaXMucHJvcHMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gVHdlZW47XG59KF8yLmRlZmF1bHQpO1xuXG5Ud2Vlbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGR1cmF0aW9uOiAzMDAsXG4gIGVhc2U6IF9lYXNpbmcuZWFzZU91dCxcbiAgZnJvbTogMCxcbiAgdG86IDEsXG4gIGZsaXA6IDAsXG4gIGZsaXBDb3VudDogMCxcbiAgeW95bzogMCxcbiAgeW95b0NvdW50OiAwLFxuICBsb29wOiAwLFxuICBsb29wQ291bnQ6IDAsXG4gIHBsYXlEaXJlY3Rpb246IDFcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIHByb3BzID0gYXJnc1swXTtcblxuICAgIHJldHVybiBuZXcgVHdlZW4ocHJvcHMpO1xuICB9IGVsc2Uge1xuICAgIHZhciBmcm9tID0gYXJnc1swXTtcbiAgICB2YXIgdG8gPSBhcmdzWzFdO1xuICAgIHZhciBkdXJhdGlvbiA9IGFyZ3NbMl07XG4gICAgdmFyIGVhc2UgPSBhcmdzWzNdO1xuICAgIHZhciBfcHJvcHM0ID0gYXJnc1s0XTtcblxuICAgIHJldHVybiBuZXcgVHdlZW4oX2V4dGVuZHMoeyBmcm9tOiBmcm9tLCB0bzogdG8sIGR1cmF0aW9uOiBkdXJhdGlvbiwgZWFzZTogZWFzZSB9LCBfcHJvcHM0KSk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGQk96czdPMEZCUTBFN08wRkJRMEU3TzBGQlEwRTdPMEZCUTBFN096czdPenM3T3pzN1FVRkZRU3hKUVVGTkxHZENRVUZuUWl4NVFrRkJUU3hEUVVGT0xFVkJRVk1zUTBGQlZDeERRVUYwUWpzN1FVRkZRU3hKUVVGTkxHRkJRV0U3UVVGRGFrSXNVVUZCVFN4VlFVRkRMRXRCUVVRN1FVRkJRU3hYUVVGWExFMUJRVTBzUzBGQlRpeEZRVUZZTzBGQlFVRXNSMEZFVnp0QlFVVnFRaXhSUVVGTkxGVkJRVU1zUzBGQlJEdEJRVUZCTEZkQlFWY3NUVUZCVFN4UFFVRk9MRWRCUVdkQ0xFdEJRV2hDTEVWQlFWZzdRVUZCUVN4SFFVWlhPMEZCUjJwQ0xGRkJRVTBzVlVGQlF5eExRVUZFTzBGQlFVRXNWMEZCVnl4TlFVRk5MRWxCUVU0c1IwRkJZU3hMUVVGaUxFVkJRVmc3UVVGQlFUdEJRVWhYTEVOQlFXNUNPenRKUVUxTkxFczdPenM3T3pzN096dHJRa0ZsU2l4UExITkNRVUZWTzBGQlFVRXNhVUpCUXpSQ0xFdEJRVXNzUzBGRWFrTTdRVUZCUVN4UlFVTkJMRkZCUkVFc1ZVRkRRU3hSUVVSQk8wRkJRVUVzVVVGRFZTeGhRVVJXTEZWQlExVXNZVUZFVmpzN08wRkJSMUlzVTBGQlN5eFBRVUZNTEVkQlFXZENMR3RDUVVGclFpeERRVUZ1UWl4SFFVRjNRaXhEUVVGNFFpeEhRVUUwUWl4UlFVRXpRenRCUVVORUxFYzdPMnRDUVVWRUxFMHNjVUpCUVZNN1FVRkJRU3hyUWtGRE5rTXNTMEZCU3l4TFFVUnNSRHRCUVVGQkxGRkJRME1zVVVGRVJDeFhRVU5ETEZGQlJFUTdRVUZCUVN4UlFVTlhMRWxCUkZnc1YwRkRWeXhKUVVSWU8wRkJRVUVzVVVGRGFVSXNTVUZFYWtJc1YwRkRhVUlzU1VGRWFrSTdRVUZCUVN4UlFVTjFRaXhGUVVSMlFpeFhRVU4xUWl4RlFVUjJRanRCUVVGQkxGRkJRekpDTEdGQlJETkNMRmRCUXpKQ0xHRkJSRE5DT3pzN1FVRkhVQ3hUUVVGTExFOUJRVXdzU1VGQlowSXNkVU5CUVhWQ0xHRkJRWFpET3p0QlFVVkJMRmRCUVU4c1owTkJRWEZDTEVsQlFYSkNMRVZCUVRKQ0xFVkJRVE5DTEVWQlFTdENMRXRCUVVzc1kwRkJZeXhuUTBGQmNVSXNRMEZCY2tJc1JVRkJkMElzVVVGQmVFSXNSVUZCYTBNc1MwRkJTeXhQUVVGMlF5eERRVUZrTEVOQlFVd3NRMEZCTDBJc1EwRkJVRHRCUVVORUxFYzdPMnRDUVVWRUxHZENMQ3RDUVVGdFFqdEJRVUZCTEd0Q1FVTnhReXhMUVVGTExFdEJSREZETzBGQlFVRXNVVUZEVkN4UlFVUlRMRmRCUTFRc1VVRkVVenRCUVVGQkxGRkJRME1zWVVGRVJDeFhRVU5ETEdGQlJFUTdRVUZCUVN4UlFVTm5RaXhKUVVSb1FpeFhRVU5uUWl4SlFVUm9RanRCUVVGQkxGRkJRM05DTEVsQlJIUkNMRmRCUTNOQ0xFbEJSSFJDTzBGQlFVRXNVVUZETkVJc1NVRkVOVUlzVjBGRE5FSXNTVUZFTlVJN08wRkJSV3BDTEZGQlFVa3NZVUZCWXl4clFrRkJhMElzUTBGQmJrSXNSMEZCZVVJc1MwRkJTeXhQUVVGTUxFbEJRV2RDTEZGQlFYcERMRWRCUVhORUxFdEJRVXNzVDBGQlRDeEpRVUZuUWl4RFFVRjJSanM3UVVGRlFTeFJRVUZKTEdWQlFXVXNVVUZCVVN4SlFVRlNMRWxCUVdkQ0xFbEJRUzlDTEVOQlFVb3NSVUZCTUVNN1FVRkRlRU1zVlVGQlNTeGpRVUZqTEV0QlFXeENPenRCUVVWQkxGZEJRVXNzU1VGQlNTeEhRVUZVTEVsQlFXZENMRlZCUVdoQ0xFVkJRVFJDTzBGQlF6RkNMRmxCUVUwc1YwRkJWeXhYUVVGWExFZEJRVmdzUTBGQmFrSTdRVUZEUVN4WlFVRk5MRmxCUVZrc1RVRkJUU3hQUVVGNFFqdEJRVU5CTEZsQlFVMHNWVUZCVlN4TFFVRkxMRTlCUVV3c1EwRkJZU3hIUVVGaUxFTkJRV2hDTzBGQlEwRXNXVUZCVFN4WlFVRlpMRXRCUVVzc1QwRkJUQ3hEUVVGaExGTkJRV0lzUTBGQmJFSTdPMEZCUlVFc1dVRkJTU3hWUVVGVkxGTkJRV1FzUlVGQmVVSTdRVUZCUVRzN1FVRkRka0lzWlVGQlN5eFJRVUZNTERSQ1FVTkhMRk5CUkVnc1NVRkRaU3haUVVGWkxFTkJSRE5DTzBGQlIwRXNiVUpCUVZNc1NVRkJWRHRCUVVOQkxIZENRVUZqTEVsQlFXUTdRVUZEUkR0QlFVTkdPenRCUVVWRUxGVkJRVWtzVjBGQlNpeEZRVUZwUWl4aFFVRmhMRXRCUVdJN1FVRkRiRUk3TzBGQlJVUXNWMEZCVHl4VlFVRlFPMEZCUTBRc1J6czdhMEpCUlVRc1ZTeDVRa0ZCWVR0QlFVTllMRmRCUVU4c1MwRkJTeXhQUVVGYU8wRkJRMFFzUnpzN2EwSkJSVVFzU1N4dFFrRkJUenRCUVVOTUxGTkJRVXNzVDBGQlRDeEhRVUZsTEV0QlFVc3NTMEZCVEN4RFFVRlhMRkZCUVZnc1IwRkJjMElzUzBGQlN5eFBRVUV4UXp0QlFVUkxMR1ZCUlRoQ0xFTkJRVU1zUzBGQlN5eExRVUZNTEVOQlFWY3NSVUZCV2l4RlFVRm5RaXhMUVVGTExFdEJRVXdzUTBGQlZ5eEpRVUV6UWl4RFFVWTVRanRCUVVWS0xGTkJRVXNzUzBGQlRDeERRVUZYTEVsQlJsQTdRVUZGWVN4VFFVRkxMRXRCUVV3c1EwRkJWeXhGUVVaNFFqczdRVUZIVEN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0clFrRkZSQ3hQTEhOQ1FVRlZPMEZCUTFJc1UwRkJTeXhMUVVGTUxFTkJRVmNzWVVGQldDeEpRVUUwUWl4RFFVRkRMRU5CUVRkQ08wRkJRMEVzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3T3pzN1FVRjBSVWNzU3l4RFFVTkhMRmtzUjBGQlpUdEJRVU53UWl4WlFVRlZMRWRCUkZVN1FVRkZjRUlzZFVKQlJtOUNPMEZCUjNCQ0xGRkJRVTBzUTBGSVl6dEJRVWx3UWl4TlFVRkpMRU5CU21kQ08wRkJTM0JDTEZGQlFVMHNRMEZNWXp0QlFVMXdRaXhoUVVGWExFTkJUbE03UVVGUGNFSXNVVUZCVFN4RFFWQmpPMEZCVVhCQ0xHRkJRVmNzUTBGU1V6dEJRVk53UWl4UlFVRk5MRU5CVkdNN1FVRlZjRUlzWVVGQlZ5eERRVlpUTzBGQlYzQkNMR2xDUVVGbE8wRkJXRXNzUXpzN2EwSkJkMFZVTEZsQlFXRTdRVUZCUVN4dlEwRkJWQ3hKUVVGVE8wRkJRVlFzVVVGQlV6dEJRVUZCT3p0QlFVTXhRaXhOUVVGSkxFdEJRVXNzVFVGQlRDeExRVUZuUWl4RFFVRndRaXhGUVVGMVFqdEJRVUZCTEZGQlEySXNTMEZFWVN4SFFVTklMRWxCUkVjN08wRkJSWEpDTEZkQlFVOHNTVUZCU1N4TFFVRktMRU5CUVZVc1MwRkJWaXhEUVVGUU8wRkJRMFFzUjBGSVJDeE5RVWRQTzBGQlFVRXNVVUZEUnl4SlFVUklMRWRCUTNWRExFbEJSSFpETzBGQlFVRXNVVUZEVXl4RlFVUlVMRWRCUTNWRExFbEJSSFpETzBGQlFVRXNVVUZEWVN4UlFVUmlMRWRCUTNWRExFbEJSSFpETzBGQlFVRXNVVUZEZFVJc1NVRkVka0lzUjBGRGRVTXNTVUZFZGtNN1FVRkJRU3hSUVVNMlFpeFBRVVEzUWl4SFFVTjFReXhKUVVSMlF6czdRVUZGVEN4WFFVRlBMRWxCUVVrc1MwRkJTaXhaUVVGWkxGVkJRVm9zUlVGQmEwSXNUVUZCYkVJc1JVRkJjMElzYTBKQlFYUkNMRVZCUVdkRExGVkJRV2hETEVsQlFYbERMRTlCUVhwRExFVkJRVkE3UVVGRFJEdEJRVU5HTEVNaUxDSm1hV3hsSWpvaWRIZGxaVzR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dkp6dGNibWx0Y0c5eWRDQjdJSFJwYldWVGFXNWpaVXhoYzNSR2NtRnRaU0I5SUdaeWIyMGdKeTR1TDJaeVlXMWxjM2x1WXljN1hHNXBiWEJ2Y25RZ2V5QmpiR0Z0Y0NCOUlHWnliMjBnSnk0dUwybHVZeTkwY21GdWMyWnZjbTFsY25Nbk8xeHVhVzF3YjNKMElIc2daMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VzSUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOeklIMGdabkp2YlNBbkxpNHZhVzVqTDJOaGJHTW5PMXh1YVcxd2IzSjBJSHNnWldGelpVOTFkQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OWxZWE5wYm1jbk8xeHVYRzVqYjI1emRDQmpiR0Z0Y0ZCeWIyZHlaWE56SUQwZ1kyeGhiWEFvTUN3Z01TazdYRzVjYm1OdmJuTjBJRTVGV0ZSZlUxUkZVRk1nUFNCN1hHNGdJR3h2YjNBNklDaDBkMlZsYmlrZ1BUNGdkSGRsWlc0dWMzUmhjblFvS1N4Y2JpQWdlVzk1YnpvZ0tIUjNaV1Z1S1NBOVBpQjBkMlZsYmk1eVpYWmxjbk5sS0NrdWMzUmhjblFvS1N4Y2JpQWdabXhwY0RvZ0tIUjNaV1Z1S1NBOVBpQjBkMlZsYmk1bWJHbHdLQ2t1YzNSaGNuUW9LVnh1ZlR0Y2JseHVZMnhoYzNNZ1ZIZGxaVzRnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCemRHRjBhV01nWkdWbVlYVnNkRkJ5YjNCeklEMGdlMXh1SUNBZ0lHUjFjbUYwYVc5dU9pQXpNREFzWEc0Z0lDQWdaV0Z6WlRvZ1pXRnpaVTkxZEN4Y2JpQWdJQ0JtY205dE9pQXdMRnh1SUNBZ0lIUnZPaUF4TEZ4dUlDQWdJR1pzYVhBNklEQXNYRzRnSUNBZ1pteHBjRU52ZFc1ME9pQXdMRnh1SUNBZ0lIbHZlVzg2SURBc1hHNGdJQ0FnZVc5NWIwTnZkVzUwT2lBd0xGeHVJQ0FnSUd4dmIzQTZJREFzWEc0Z0lDQWdiRzl2Y0VOdmRXNTBPaUF3TEZ4dUlDQWdJSEJzWVhsRWFYSmxZM1JwYjI0NklERmNiaUFnZlR0Y2JseHVJQ0J2YmxOMFlYSjBLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2daSFZ5WVhScGIyNHNJSEJzWVhsRWFYSmxZM1JwYjI0Z2ZTQTlJSFJvYVhNdWNISnZjSE03WEc1Y2JpQWdJQ0IwYUdsekxtVnNZWEJ6WldRZ1BTQW9jR3hoZVVScGNtVmpkR2x2YmlBOVBUMGdNU2tnUHlBd0lEb2daSFZ5WVhScGIyNDdYRzRnSUgxY2JseHVJQ0IxY0dSaGRHVW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmtkWEpoZEdsdmJpd2daV0Z6WlN3Z1puSnZiU3dnZEc4c0lIQnNZWGxFYVhKbFkzUnBiMjRnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzVjYmlBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnS3owZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbEtDa2dLaUJ3YkdGNVJHbHlaV04wYVc5dU8xeHVYRzRnSUNBZ2NtVjBkWEp1SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektHWnliMjBzSUhSdkxDQmxZWE5sS0dOc1lXMXdVSEp2WjNKbGMzTW9aMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvTUN3Z1pIVnlZWFJwYjI0c0lIUm9hWE11Wld4aGNITmxaQ2twS1NrN1hHNGdJSDFjYmx4dUlDQnBjMEZqZEdsdmJrTnZiWEJzWlhSbEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1pIVnlZWFJwYjI0c0lIQnNZWGxFYVhKbFkzUnBiMjRzSUhsdmVXOHNJR3h2YjNBc0lHWnNhWEFnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ2JHVjBJR2x6UTI5dGNHeGxkR1VnUFNBb2NHeGhlVVJwY21WamRHbHZiaUE5UFQwZ01Ta2dQeUFvZEdocGN5NWxiR0Z3YzJWa0lENDlJR1IxY21GMGFXOXVLU0E2SUNoMGFHbHpMbVZzWVhCelpXUWdQRDBnTUNrN1hHNWNiaUFnSUNCcFppQW9hWE5EYjIxd2JHVjBaU0FtSmlBb2VXOTVieUI4ZkNCc2IyOXdJSHg4SUdac2FYQXBLU0I3WEc0Z0lDQWdJQ0JzWlhRZ2FYTlRkR1Z3VkdGclpXNGdQU0JtWVd4elpUdGNibHh1SUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlFNUZXRlJmVTFSRlVGTXBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdibVY0ZEZOMFpYQWdQU0JPUlZoVVgxTlVSVkJUVzJ0bGVWMDdYRzRnSUNBZ0lDQWdJR052Ym5OMElHTnZkVzUwVUhKdmNDQTlJR3RsZVNBcklDZERiM1Z1ZENjN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOMFpYQk5ZWGdnUFNCMGFHbHpMbWRsZEZCeWIzQW9hMlY1S1R0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYzNSbGNFTnZkVzUwSUQwZ2RHaHBjeTVuWlhSUWNtOXdLR052ZFc1MFVISnZjQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSE4wWlhCTllYZ2dQaUJ6ZEdWd1EyOTFiblFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG5ObGRGQnliM0J6S0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJRnRqYjNWdWRGQnliM0JkT2lCemRHVndRMjkxYm5RZ0t5QXhYRzRnSUNBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lDQWdibVY0ZEZOMFpYQW9kR2hwY3lrN1hHNGdJQ0FnSUNBZ0lDQWdhWE5UZEdWd1ZHRnJaVzRnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdsbUlDaHBjMU4wWlhCVVlXdGxiaWtnYVhORGIyMXdiR1YwWlNBOUlHWmhiSE5sTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQnBjME52YlhCc1pYUmxPMXh1SUNCOVhHNWNiaUFnWjJWMFJXeGhjSE5sWkNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWxiR0Z3YzJWa08xeHVJQ0I5WEc1Y2JpQWdabXhwY0NncElIdGNiaUFnSUNCMGFHbHpMbVZzWVhCelpXUWdQU0IwYUdsekxuQnliM0J6TG1SMWNtRjBhVzl1SUMwZ2RHaHBjeTVsYkdGd2MyVmtPMXh1SUNBZ0lGdDBhR2x6TG5CeWIzQnpMbVp5YjIwc0lIUm9hWE11Y0hKdmNITXVkRzlkSUQwZ1czUm9hWE11Y0hKdmNITXVkRzhzSUhSb2FYTXVjSEp2Y0hNdVpuSnZiVjA3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCeVpYWmxjbk5sS0NrZ2UxeHVJQ0FnSUhSb2FYTXVjSEp2Y0hNdWNHeGhlVVJwY21WamRHbHZiaUFxUFNBdE1UdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9MaTR1WVhKbmN5a2dQVDRnZTF4dUlDQnBaaUFvWVhKbmN5NXNaVzVuZEdnZ1BUMDlJREVwSUh0Y2JpQWdJQ0JqYjI1emRDQmJJSEJ5YjNCeklGMGdQU0JoY21kek8xeHVJQ0FnSUhKbGRIVnliaUJ1WlhjZ1ZIZGxaVzRvY0hKdmNITXBPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJR052Ym5OMElGc2dabkp2YlN3Z2RHOHNJR1IxY21GMGFXOXVMQ0JsWVhObExDQndjbTl3Y3lCZElEMGdZWEpuY3p0Y2JpQWdJQ0J5WlhSMWNtNGdibVYzSUZSM1pXVnVLSHNnWm5KdmJTd2dkRzhzSUdSMWNtRjBhVzl1TENCbFlYTmxMQ0F1TGk1d2NtOXdjeUI5S1R0Y2JpQWdmVnh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3R3ZWVuLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jaGFpbiA9IHJlcXVpcmUoJy4vY2hhaW4nKTtcblxudmFyIF9jaGFpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGFpbik7XG5cbnZhciBfcGFyYWxsZWwgPSByZXF1aXJlKCcuL3BhcmFsbGVsJyk7XG5cbnZhciBfcGFyYWxsZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyYWxsZWwpO1xuXG52YXIgX2RlbGF5ID0gcmVxdWlyZSgnLi9kZWxheScpO1xuXG52YXIgX2RlbGF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlbGF5KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgcGFyYWxsZWwgQWN0aW9uIGNvbXBvc2VkIG9mIGNoYWluZWRcbiAqIGRlbGF5IGFuZCBhY3Rpb25zLiBJbnRlcnZhbCBjYW4gYmUgZWl0aGVyIGEgbnVtYmVyXG4gKiB0byBtdWx0aXBseSBieSBgaWAgb3IgYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgYGlgXG4gKlxuICogU3RyYWlnaHQgY3JpYmJlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvYmxvYi8yNGM3MmY1MTNlNDhmMGJkYzQwODIwYjQzMjYyMzI4ZmUyYzMwMWQ0L0xpYnJhcmllcy9BbmltYXRlZC9zcmMvQW5pbWF0ZWRJbXBsZW1lbnRhdGlvbi5qcyNMMjAzMVxuICogXiBUaGlzIGZ1bmN0aW9uIHNvbGQgYSBwcmV2aW91c2x5LWNvbmZsaWN0ZWQgbWUgb24gdGhlIG1lcml0IG9mIG1vdmluZyBmcm9tXG4gKiBqUXVlcnktc3R5bGUgbXVsdGktcHJvcGVydHkgYW5pbWF0aW9ucyB0byBzaW5nbGUtcHJvcGVydHkuXG4gKiBAcGFyYW0gIHthcnJheX0gYWN0aW9uc1xuICogQHBhcmFtICB7ZnVuY3Rpb24gfCBudW1iZXJ9IGludGVydmFsXG4gKiBAcmV0dXJuIHtBY3Rpb259XG4gKi9cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMsIGludGVydmFsLCBvbkNvbXBsZXRlKSB7XG4gIHZhciBpbnRlcnZhbElzRnVuY3Rpb24gPSAoMCwgX3V0aWxzLmlzRnVuYykoaW50ZXJ2YWwpO1xuXG4gIHJldHVybiAoMCwgX3BhcmFsbGVsMi5kZWZhdWx0KShhY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uLCBpKSB7XG4gICAgdmFyIHRpbWVUb0RlbGF5ID0gaW50ZXJ2YWxJc0Z1bmN0aW9uID8gaW50ZXJ2YWwoaSkgOiBpICogaW50ZXJ2YWw7XG4gICAgcmV0dXJuICgwLCBfY2hhaW4yLmRlZmF1bHQpKFsoMCwgX2RlbGF5Mi5kZWZhdWx0KSh0aW1lVG9EZWxheSksIGFjdGlvbl0pO1xuICB9KSwgeyBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNOMFlXZG5aWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN096czdPenM3T3pzN096dHJRa0ZqWlN4VlFVRkRMRTlCUVVRc1JVRkJWU3hSUVVGV0xFVkJRVzlDTEZWQlFYQkNMRVZCUVcxRE8wRkJRMmhFTEUxQlFVMHNjVUpCUVhGQ0xHMUNRVUZQTEZGQlFWQXNRMEZCTTBJN08wRkJSVUVzVTBGQlR5eDNRa0ZCVXl4UlFVRlJMRWRCUVZJc1EwRkJXU3hWUVVGRExFMUJRVVFzUlVGQlV5eERRVUZVTEVWQlFXVTdRVUZEZWtNc1VVRkJUU3hqUVVGbExHdENRVUZFTEVkQlFYVkNMRk5CUVZNc1EwRkJWQ3hEUVVGMlFpeEhRVUZ4UXl4SlFVRkpMRkZCUVRkRU8wRkJRMEVzVjBGQlR5eHhRa0ZCVFN4RFFVTllMSEZDUVVGTkxGZEJRVTRzUTBGRVZ5eEZRVVZZTEUxQlJsY3NRMEZCVGl4RFFVRlFPMEZCU1VRc1IwRk9aU3hEUVVGVUxFVkJUVWdzUlVGQlJTeHpRa0ZCUml4RlFVNUhMRU5CUVZBN1FVRlBSQ3hESWl3aVptbHNaU0k2SW5OMFlXZG5aWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdZMmhoYVc0Z1puSnZiU0FuTGk5amFHRnBiaWM3WEc1cGJYQnZjblFnY0dGeVlXeHNaV3dnWm5KdmJTQW5MaTl3WVhKaGJHeGxiQ2M3WEc1cGJYQnZjblFnWkdWc1lYa2dabkp2YlNBbkxpOWtaV3hoZVNjN1hHNXBiWEJ2Y25RZ2V5QnBjMFoxYm1NZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaWE1nWVNCdVpYY2djR0Z5WVd4c1pXd2dRV04wYVc5dUlHTnZiWEJ2YzJWa0lHOW1JR05vWVdsdVpXUmNiaUFxSUdSbGJHRjVJR0Z1WkNCaFkzUnBiMjV6TGlCSmJuUmxjblpoYkNCallXNGdZbVVnWldsMGFHVnlJR0VnYm5WdFltVnlYRzRnS2lCMGJ5QnRkV3gwYVhCc2VTQmllU0JnYVdBZ2IzSWdZU0JtZFc1amRHbHZiaUIwYUdGMElIZHBiR3dnWW1VZ2NISnZkbWxrWldRZ1lHbGdYRzRnS2x4dUlDb2dVM1J5WVdsbmFIUWdZM0pwWW1KbFpDQm1jbTl0SUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5bVlXTmxZbTl2YXk5eVpXRmpkQzF1WVhScGRtVXZZbXh2WWk4eU5HTTNNbVkxTVRObE5EaG1NR0prWXpRd09ESXdZalF6TWpZeU16STRabVV5WXpNd01XUTBMMHhwWW5KaGNtbGxjeTlCYm1sdFlYUmxaQzl6Y21NdlFXNXBiV0YwWldSSmJYQnNaVzFsYm5SaGRHbHZiaTVxY3lOTU1qQXpNVnh1SUNvZ1hpQlVhR2x6SUdaMWJtTjBhVzl1SUhOdmJHUWdZU0J3Y21WMmFXOTFjMng1TFdOdmJtWnNhV04wWldRZ2JXVWdiMjRnZEdobElHMWxjbWwwSUc5bUlHMXZkbWx1WnlCbWNtOXRYRzRnS2lCcVVYVmxjbmt0YzNSNWJHVWdiWFZzZEdrdGNISnZjR1Z5ZEhrZ1lXNXBiV0YwYVc5dWN5QjBieUJ6YVc1bmJHVXRjSEp2Y0dWeWRIa3VYRzRnS2lCQWNHRnlZVzBnSUh0aGNuSmhlWDBnWVdOMGFXOXVjMXh1SUNvZ1FIQmhjbUZ0SUNCN1puVnVZM1JwYjI0Z2ZDQnVkVzFpWlhKOUlHbHVkR1Z5ZG1Gc1hHNGdLaUJBY21WMGRYSnVJSHRCWTNScGIyNTlYRzRnS2k5Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoaFkzUnBiMjV6TENCcGJuUmxjblpoYkN3Z2IyNURiMjF3YkdWMFpTa2dQVDRnZTF4dUlDQmpiMjV6ZENCcGJuUmxjblpoYkVselJuVnVZM1JwYjI0Z1BTQnBjMFoxYm1Nb2FXNTBaWEoyWVd3cE8xeHVYRzRnSUhKbGRIVnliaUJ3WVhKaGJHeGxiQ2hoWTNScGIyNXpMbTFoY0Nnb1lXTjBhVzl1TENCcEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2RHbHRaVlJ2UkdWc1lYa2dQU0FvYVc1MFpYSjJZV3hKYzBaMWJtTjBhVzl1S1NBL0lHbHVkR1Z5ZG1Gc0tHa3BJRG9nYVNBcUlHbHVkR1Z5ZG1Gc08xeHVJQ0FnSUhKbGRIVnliaUJqYUdGcGJpaGJYRzRnSUNBZ0lDQmtaV3hoZVNoMGFXMWxWRzlFWld4aGVTa3NYRzRnSUNBZ0lDQmhZM1JwYjI1Y2JpQWdJQ0JkS1R0Y2JpQWdmU2tzSUhzZ2IyNURiMjF3YkdWMFpTQjlLVHRjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3N0YWdnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFZhbHVlID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFZhbHVlLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBWYWx1ZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmFsdWUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBWYWx1ZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHYpIHtcbiAgICB0aGlzLnRvVXBkYXRlID0gdjtcbiAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gIH07XG5cbiAgVmFsdWUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy50b1VwZGF0ZTtcbiAgfTtcblxuICByZXR1cm4gVmFsdWU7XG59KF8yLmRlZmF1bHQpO1xuXG5WYWx1ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHBhc3NpdmU6IHRydWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjdXJyZW50LCBvblVwZGF0ZSkge1xuICByZXR1cm4gbmV3IFZhbHVlKHsgY3VycmVudDogY3VycmVudCwgb25VcGRhdGU6IG9uVXBkYXRlIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNaaGJIVmxMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3T3pzN096czdPMGxCUlUwc1N6czdPenM3T3pzN08ydENRVXRLTEVjc1owSkJRVWtzUXl4RlFVRkhPMEZCUTB3c1UwRkJTeXhSUVVGTUxFZEJRV2RDTEVOQlFXaENPMEZCUTBFc2EwTkJRV01zUzBGQlN5eGxRVUZ1UWp0QlFVTkVMRWM3TzJ0Q1FVVkVMRTBzY1VKQlFWTTdRVUZEVUN4WFFVRlBMRXRCUVVzc1VVRkJXanRCUVVORUxFYzdPenM3TzBGQldrY3NTeXhEUVVOSExGa3NSMEZCWlR0QlFVTndRaXhYUVVGVE8wRkJSRmNzUXpzN2EwSkJZMVFzVlVGQlF5eFBRVUZFTEVWQlFWVXNVVUZCVmp0QlFVRkJMRk5CUVhWQ0xFbEJRVWtzUzBGQlNpeERRVUZWTEVWQlFVVXNaMEpCUVVZc1JVRkJWeXhyUWtGQldDeEZRVUZXTEVOQlFYWkNPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSjJZV3gxWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1YVcxd2IzSjBJSHNnYjI1R2NtRnRaVlZ3WkdGMFpTQjlJR1p5YjIwZ0p5NHVMMlp5WVcxbGMzbHVZeWM3WEc1Y2JtTnNZWE56SUZaaGJIVmxJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYzNSaGRHbGpJR1JsWm1GMWJIUlFjbTl3Y3lBOUlIdGNiaUFnSUNCd1lYTnphWFpsT2lCMGNuVmxYRzRnSUgwN1hHNWNiaUFnYzJWMEtIWXBJSHRjYmlBZ0lDQjBhR2x6TG5SdlZYQmtZWFJsSUQwZ2RqdGNiaUFnSUNCdmJrWnlZVzFsVlhCa1lYUmxLSFJvYVhNdWMyTm9aV1IxYkdWa1ZYQmtZWFJsS1R0Y2JpQWdmVnh1WEc0Z0lIVndaR0YwWlNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NTBiMVZ3WkdGMFpUdGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9ZM1Z5Y21WdWRDd2diMjVWY0dSaGRHVXBJRDArSUc1bGR5QldZV3gxWlNoN0lHTjFjbkpsYm5Rc0lHOXVWWEJrWVhSbElIMHBPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy92YWx1ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lRW5kID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBleHBvcnRzLm9uRnJhbWVFbmQgPSBleHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLm9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLm9uRnJhbWVTdGFydCA9IHVuZGVmaW5lZDtcblxudmFyIF9vbk5leHRGcmFtZSA9IHJlcXVpcmUoJy4vb24tbmV4dC1mcmFtZScpO1xuXG52YXIgX29uTmV4dEZyYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29uTmV4dEZyYW1lKTtcblxudmFyIF9jcmVhdGVSZW5kZXJTdGVwID0gcmVxdWlyZSgnLi9jcmVhdGUtcmVuZGVyLXN0ZXAnKTtcblxudmFyIF9jcmVhdGVSZW5kZXJTdGVwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVJlbmRlclN0ZXApO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB3aWxsUmVuZGVyTmV4dEZyYW1lID0gZmFsc2U7XG5cbi8qKlxuICogTWF4aW11bSBwZXJtaXR0ZWQgbXMgc2luY2UgbGFzdCBmcmFtZVxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIE1BWF9FTEFQU0VEID0gMjA7XG5cbi8qKlxuICogQ3VycmVudCBmcmFtZXN0YW1wXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgY3VycmVudEZyYW1lc3RhbXAgPSAoMCwgX3V0aWxzLmN1cnJlbnRUaW1lKSgpO1xuXG52YXIgZWxhcHNlZCA9IDA7XG5cbi8qKlxuICogRmFjdG9yIHRvIG11bHRpcGx5IGBlbGFwc2VkYCBieSAtIFxuICogMC41IHdvdWxkIGJlIHNsb3cgbW90aW9uLCAyIHdvdWxkIGJlIGZhc3RcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBkaWxhdGlvbiA9IDE7XG5cbmZ1bmN0aW9uIHN0YXJ0UmVuZGVyTG9vcCgpIHtcbiAgaWYgKCF3aWxsUmVuZGVyTmV4dEZyYW1lKSB7XG4gICAgd2lsbFJlbmRlck5leHRGcmFtZSA9IHRydWU7XG4gICAgKDAsIF9vbk5leHRGcmFtZTIuZGVmYXVsdCkocHJvY2Vzc0ZyYW1lKTtcbiAgfVxufVxuXG52YXIgZnJhbWVTdGFydCA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcbnZhciBmcmFtZVVwZGF0ZSA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcbnZhciBmcmFtZVJlbmRlciA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcbnZhciBmcmFtZUVuZCA9ICgwLCBfY3JlYXRlUmVuZGVyU3RlcDIuZGVmYXVsdCkoc3RhcnRSZW5kZXJMb29wKTtcblxuZnVuY3Rpb24gcHJvY2Vzc0ZyYW1lKGZyYW1lc3RhbXApIHtcbiAgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnRGcmFtZXN0YW1wLCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gIGN1cnJlbnRGcmFtZXN0YW1wID0gZnJhbWVzdGFtcDtcblxuICBmcmFtZVN0YXJ0LnByb2Nlc3MoKTtcbiAgZnJhbWVVcGRhdGUucHJvY2VzcygpO1xuICBmcmFtZVJlbmRlci5wcm9jZXNzKCk7XG4gIGZyYW1lRW5kLnByb2Nlc3MoKTtcbn1cblxudmFyIG9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5zY2hlZHVsZTtcbnZhciBvbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZnJhbWVVcGRhdGUuc2NoZWR1bGU7XG52YXIgb25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGZyYW1lUmVuZGVyLnNjaGVkdWxlO1xudmFyIG9uRnJhbWVFbmQgPSBleHBvcnRzLm9uRnJhbWVFbmQgPSBmcmFtZUVuZC5zY2hlZHVsZTtcbnZhciBjYW5jZWxPbkZyYW1lU3RhcnQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGZyYW1lUmVuZGVyLmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lRW5kID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lRW5kID0gZnJhbWVFbmQuY2FuY2VsO1xuXG52YXIgdGltZVNpbmNlTGFzdEZyYW1lID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBlbGFwc2VkO1xufTtcbnZhciBjdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLmN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGN1cnJlbnRGcmFtZXN0YW1wO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bWNtRnRaWE41Ym1NdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdRVUZCUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkZRU3hKUVVGSkxITkNRVUZ6UWl4TFFVRXhRanM3T3pzN08wRkJUVUVzU1VGQlRTeGpRVUZqTEVWQlFYQkNPenM3T3pzN1FVRk5RU3hKUVVGSkxHOUNRVUZ2UWl4NVFrRkJlRUk3TzBGQlJVRXNTVUZCU1N4VlFVRlZMRU5CUVdRN096czdPenM3UVVGUFFTeEpRVUZKTEZkQlFWY3NRMEZCWmpzN1FVRkZRU3hUUVVGVExHVkJRVlFzUjBGQk1rSTdRVUZEZWtJc1RVRkJTU3hEUVVGRExHMUNRVUZNTEVWQlFUQkNPMEZCUTNoQ0xEQkNRVUZ6UWl4SlFVRjBRanRCUVVOQkxDdENRVUZaTEZsQlFWbzdRVUZEUkR0QlFVTkdPenRCUVVWRUxFbEJRVTBzWVVGQllTeG5RMEZCYVVJc1pVRkJha0lzUTBGQmJrSTdRVUZEUVN4SlFVRk5MR05CUVdNc1owTkJRV2xDTEdWQlFXcENMRU5CUVhCQ08wRkJRMEVzU1VGQlRTeGpRVUZqTEdkRFFVRnBRaXhsUVVGcVFpeERRVUZ3UWp0QlFVTkJMRWxCUVUwc1YwRkJWeXhuUTBGQmFVSXNaVUZCYWtJc1EwRkJha0k3TzBGQlJVRXNVMEZCVXl4WlFVRlVMRU5CUVhOQ0xGVkJRWFJDTEVWQlFXdERPMEZCUTJoRExIZENRVUZ6UWl4TFFVRjBRanRCUVVOQkxGbEJRVlVzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCU3l4SFFVRk1MRU5CUVZNc1lVRkJZU3hwUWtGQmRFSXNSVUZCZVVNc1YwRkJla01zUTBGQlZDeEZRVUZuUlN4RFFVRm9SU3hKUVVGeFJTeFJRVUV2UlR0QlFVTkJMSE5DUVVGdlFpeFZRVUZ3UWpzN1FVRkZRU3hoUVVGWExFOUJRVmc3UVVGRFFTeGpRVUZaTEU5QlFWbzdRVUZEUVN4alFVRlpMRTlCUVZvN1FVRkRRU3hYUVVGVExFOUJRVlE3UVVGRFJEczdRVUZGVFN4SlFVRk5MSE5EUVVGbExGZEJRVmNzVVVGQmFFTTdRVUZEUVN4SlFVRk5MSGREUVVGblFpeFpRVUZaTEZGQlFXeERPMEZCUTBFc1NVRkJUU3gzUTBGQlowSXNXVUZCV1N4UlFVRnNRenRCUVVOQkxFbEJRVTBzYTBOQlFXRXNVMEZCVXl4UlFVRTFRanRCUVVOQkxFbEJRVTBzYTBSQlFYRkNMRmRCUVZjc1RVRkJkRU03UVVGRFFTeEpRVUZOTEc5RVFVRnpRaXhaUVVGWkxFMUJRWGhETzBGQlEwRXNTVUZCVFN4dlJFRkJjMElzV1VGQldTeE5RVUY0UXp0QlFVTkJMRWxCUVUwc09FTkJRVzFDTEZOQlFWTXNUVUZCYkVNN08wRkJSVUVzU1VGQlRTeHJSRUZCY1VJN1FVRkJRU3hUUVVGTkxFOUJRVTQ3UVVGQlFTeERRVUV6UWp0QlFVTkJMRWxCUVUwc2QwUkJRWGRDTzBGQlFVRXNVMEZCVFN4cFFrRkJUanRCUVVGQkxFTkJRVGxDSWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHOXVUbVY0ZEVaeVlXMWxJR1p5YjIwZ0p5NHZiMjR0Ym1WNGRDMW1jbUZ0WlNjN1hHNXBiWEJ2Y25RZ1kzSmxZWFJsVW1WdVpHVnlVM1JsY0NCbWNtOXRJQ2N1TDJOeVpXRjBaUzF5Wlc1a1pYSXRjM1JsY0NjN1hHNXBiWEJ2Y25RZ2V5QmpkWEp5Wlc1MFZHbHRaU0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibXhsZENCM2FXeHNVbVZ1WkdWeVRtVjRkRVp5WVcxbElEMGdabUZzYzJVN1hHNWNiaThxS2x4dUlDb2dUV0Y0YVcxMWJTQndaWEp0YVhSMFpXUWdiWE1nYzJsdVkyVWdiR0Z6ZENCbWNtRnRaVnh1SUNvZ1FIUjVjR1VnZTA1MWJXSmxjbjFjYmlBcUwxeHVZMjl1YzNRZ1RVRllYMFZNUVZCVFJVUWdQU0F5TUR0Y2JseHVMeW9xWEc0Z0tpQkRkWEp5Wlc1MElHWnlZVzFsYzNSaGJYQmNiaUFxSUVCMGVYQmxJSHRPZFcxaVpYSjlYRzRnS2k5Y2JteGxkQ0JqZFhKeVpXNTBSbkpoYldWemRHRnRjQ0E5SUdOMWNuSmxiblJVYVcxbEtDazdYRzVjYm14bGRDQmxiR0Z3YzJWa0lEMGdNRHRjYmx4dUx5b3FYRzRnS2lCR1lXTjBiM0lnZEc4Z2JYVnNkR2x3YkhrZ1lHVnNZWEJ6WldSZ0lHSjVJQzBnWEc0Z0tpQXdMalVnZDI5MWJHUWdZbVVnYzJ4dmR5QnRiM1JwYjI0c0lESWdkMjkxYkdRZ1ltVWdabUZ6ZEZ4dUlDb2dRSFI1Y0dVZ2UwNTFiV0psY24xY2JpQXFMMXh1YkdWMElHUnBiR0YwYVc5dUlEMGdNVHRjYmx4dVpuVnVZM1JwYjI0Z2MzUmhjblJTWlc1a1pYSk1iMjl3S0NrZ2UxeHVJQ0JwWmlBb0lYZHBiR3hTWlc1a1pYSk9aWGgwUm5KaGJXVXBJSHRjYmlBZ0lDQjNhV3hzVW1WdVpHVnlUbVY0ZEVaeVlXMWxJRDBnZEhKMVpUdGNiaUFnSUNCdmJrNWxlSFJHY21GdFpTaHdjbTlqWlhOelJuSmhiV1VwTzF4dUlDQjlYRzU5WEc1Y2JtTnZibk4wSUdaeVlXMWxVM1JoY25RZ1BTQmpjbVZoZEdWU1pXNWtaWEpUZEdWd0tITjBZWEowVW1WdVpHVnlURzl2Y0NrN1hHNWpiMjV6ZENCbWNtRnRaVlZ3WkdGMFpTQTlJR055WldGMFpWSmxibVJsY2xOMFpYQW9jM1JoY25SU1pXNWtaWEpNYjI5d0tUdGNibU52Ym5OMElHWnlZVzFsVW1WdVpHVnlJRDBnWTNKbFlYUmxVbVZ1WkdWeVUzUmxjQ2h6ZEdGeWRGSmxibVJsY2t4dmIzQXBPMXh1WTI5dWMzUWdabkpoYldWRmJtUWdQU0JqY21WaGRHVlNaVzVrWlhKVGRHVndLSE4wWVhKMFVtVnVaR1Z5VEc5dmNDazdYRzVjYm1aMWJtTjBhVzl1SUhCeWIyTmxjM05HY21GdFpTaG1jbUZ0WlhOMFlXMXdLU0I3WEc0Z0lIZHBiR3hTWlc1a1pYSk9aWGgwUm5KaGJXVWdQU0JtWVd4elpUdGNiaUFnWld4aGNITmxaQ0E5SUUxaGRHZ3ViV0Y0S0UxaGRHZ3ViV2x1S0daeVlXMWxjM1JoYlhBZ0xTQmpkWEp5Wlc1MFJuSmhiV1Z6ZEdGdGNDd2dUVUZZWDBWTVFWQlRSVVFwTENBeEtTQXFJR1JwYkdGMGFXOXVPMXh1SUNCamRYSnlaVzUwUm5KaGJXVnpkR0Z0Y0NBOUlHWnlZVzFsYzNSaGJYQTdYRzVjYmlBZ1puSmhiV1ZUZEdGeWRDNXdjbTlqWlhOektDazdYRzRnSUdaeVlXMWxWWEJrWVhSbExuQnliMk5sYzNNb0tUdGNiaUFnWm5KaGJXVlNaVzVrWlhJdWNISnZZMlZ6Y3lncE8xeHVJQ0JtY21GdFpVVnVaQzV3Y205alpYTnpLQ2s3WEc1OVhHNWNibVY0Y0c5eWRDQmpiMjV6ZENCdmJrWnlZVzFsVTNSaGNuUWdQU0JtY21GdFpWTjBZWEowTG5OamFHVmtkV3hsTzF4dVpYaHdiM0owSUdOdmJuTjBJRzl1Um5KaGJXVlZjR1JoZEdVZ1BTQm1jbUZ0WlZWd1pHRjBaUzV6WTJobFpIVnNaVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnZia1p5WVcxbFVtVnVaR1Z5SUQwZ1puSmhiV1ZTWlc1a1pYSXVjMk5vWldSMWJHVTdYRzVsZUhCdmNuUWdZMjl1YzNRZ2IyNUdjbUZ0WlVWdVpDQTlJR1p5WVcxbFJXNWtMbk5qYUdWa2RXeGxPMXh1Wlhod2IzSjBJR052Ym5OMElHTmhibU5sYkU5dVJuSmhiV1ZUZEdGeWRDQTlJR1p5WVcxbFUzUmhjblF1WTJGdVkyVnNPMXh1Wlhod2IzSjBJR052Ym5OMElHTmhibU5sYkU5dVJuSmhiV1ZWY0dSaGRHVWdQU0JtY21GdFpWVndaR0YwWlM1allXNWpaV3c3WEc1bGVIQnZjblFnWTI5dWMzUWdZMkZ1WTJWc1QyNUdjbUZ0WlZKbGJtUmxjaUE5SUdaeVlXMWxVbVZ1WkdWeUxtTmhibU5sYkR0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqWVc1alpXeFBia1p5WVcxbFJXNWtJRDBnWm5KaGJXVkZibVF1WTJGdVkyVnNPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxJRDBnS0NrZ1BUNGdaV3hoY0hObFpEdGNibVY0Y0c5eWRDQmpiMjV6ZENCamRYSnlaVzUwUm5KaGJXVlVhVzFsYzNSaGJYQWdQU0FvS1NBOVBpQmpkWEp5Wlc1MFJuSmhiV1Z6ZEdGdGNEdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQWN0aW9uKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbik7XG5cbiAgICB0aGlzLnNjaGVkdWxlZFVwZGF0ZSA9IHRoaXMuc2NoZWR1bGVkVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzKTtcblxuICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuXG4gICAgdGhpcy5jdXJyZW50ID0gcHJvcHMuY3VycmVudCB8fCBwcm9wcy5mcm9tIHx8IDA7XG4gIH1cblxuICBBY3Rpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG9uU3RhcnQgPSBfcHJvcHMub25TdGFydDtcbiAgICB2YXIgX29uU3RhcnQgPSBfcHJvcHMuX29uU3RhcnQ7XG4gICAgdmFyIHBhc3NpdmUgPSBfcHJvcHMucGFzc2l2ZTtcblxuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB0aGlzLm9uU3RhcnQoKTtcbiAgICBpZiAob25TdGFydCkgb25TdGFydCh0aGlzKTtcbiAgICBpZiAoX29uU3RhcnQpIF9vblN0YXJ0KHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG9uU3RvcCA9IF9wcm9wczIub25TdG9wO1xuICAgIHZhciBfb25TdG9wID0gX3Byb3BzMi5fb25TdG9wO1xuICAgIHZhciBwYXNzaXZlID0gX3Byb3BzMi5wYXNzaXZlO1xuXG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICgwLCBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVVcGRhdGUpKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0b3ApIHRoaXMub25TdG9wKCk7XG4gICAgaWYgKG9uU3RvcCkgb25TdG9wKHRoaXMpO1xuICAgIGlmIChfb25TdG9wKSBfb25TdG9wKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgb25Db21wbGV0ZSA9IF9wcm9wczMub25Db21wbGV0ZTtcbiAgICB2YXIgX29uQ29tcGxldGUgPSBfcHJvcHMzLl9vbkNvbXBsZXRlO1xuXG5cbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHRoaXMub25Db21wbGV0ZSgpO1xuICAgIGlmIChvbkNvbXBsZXRlKSBvbkNvbXBsZXRlKHRoaXMpO1xuICAgIGlmIChfb25Db21wbGV0ZSkgX29uQ29tcGxldGUodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlZFVwZGF0ZSA9IGZ1bmN0aW9uIHNjaGVkdWxlZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmxhc3RVcGRhdGVkID0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpO1xuICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudDtcblxuICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcztcbiAgICB2YXIgb25VcGRhdGUgPSBfcHJvcHM0Lm9uVXBkYXRlO1xuICAgIHZhciBwYXNzaXZlID0gX3Byb3BzNC5wYXNzaXZlO1xuXG5cbiAgICBpZiAodGhpcy51cGRhdGUpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMudXBkYXRlKHRoaXMuY3VycmVudCk7XG4gICAgfVxuXG4gICAgaWYgKG9uVXBkYXRlKSBvblVwZGF0ZSh0aGlzLmN1cnJlbnQsIHRoaXMpO1xuICAgIHRoaXMuZmlyZUxpc3RlbmVycygpO1xuXG4gICAgaWYgKCFwYXNzaXZlICYmIHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0FjdGlvbkNvbXBsZXRlICYmIHRoaXMuaXNBY3Rpb25Db21wbGV0ZSgpKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zZXRQcm9wcyA9IGZ1bmN0aW9uIHNldFByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCBwcm9wcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldFByb3AgPSBmdW5jdGlvbiBnZXRQcm9wKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzW2tleV07XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXRWZWxvY2l0eSA9IGZ1bmN0aW9uIGdldFZlbG9jaXR5KCkge1xuICAgIHJldHVybiAoMCwgX2NhbGMuc3BlZWRQZXJTZWNvbmQpKHRoaXMuY3VycmVudCAtIHRoaXMucHJldiwgdGhpcy5sYXN0VXBkYXRlZCk7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQWN0aXZlO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHRoaXMubGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMgfHwgW107XG4gICAgdGhpcy5udW1MaXN0ZW5lcnMgPSB0aGlzLm51bUxpc3RlbmVycyB8fCAwO1xuICAgIGlmICh0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMrKztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgdmFyIGxpc3RlbmVySW5kZXggPSB0aGlzLmxpc3RlbmVycyA/IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpIDogLTE7XG4gICAgaWYgKGxpc3RlbmVySW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycy0tO1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmZpcmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiBmaXJlTGlzdGVuZXJzKCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5nZXQoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtTGlzdGVuZXJzOyBpKyspIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzW2ldKGN1cnJlbnQsIHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gQWN0aW9uO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGQk96dEJRVU5CT3pzN08wbEJSVTBzVFR0QlFVTktMR3RDUVVGWkxFdEJRVm9zUlVGQmJVSTdRVUZCUVRzN1FVRkRha0lzVTBGQlN5eGxRVUZNTEVkQlFYVkNMRXRCUVVzc1pVRkJUQ3hEUVVGeFFpeEpRVUZ5UWl4RFFVRXdRaXhKUVVFeFFpeERRVUYyUWpzN1FVRkZRU3hUUVVGTExFdEJRVXdzWjBKQlEwc3NTMEZCU3l4WFFVRk1MRU5CUVdsQ0xGbEJSSFJDT3p0QlFVbEJMRk5CUVVzc1VVRkJUQ3hEUVVGakxFdEJRV1E3TzBGQlJVRXNVMEZCU3l4UFFVRk1MRWRCUVdVc1RVRkJUU3hQUVVGT0xFbEJRV2xDTEUxQlFVMHNTVUZCZGtJc1NVRkJLMElzUTBGQk9VTTdRVUZEUkRzN2JVSkJSVVFzU3l4dlFrRkJVVHRCUVVGQkxHbENRVU5wUXl4TFFVRkxMRXRCUkhSRE8wRkJRVUVzVVVGRFJTeFBRVVJHTEZWQlEwVXNUMEZFUmp0QlFVRkJMRkZCUTFjc1VVRkVXQ3hWUVVOWExGRkJSRmc3UVVGQlFTeFJRVU54UWl4UFFVUnlRaXhWUVVOeFFpeFBRVVJ5UWpzN08wRkJSMDRzVVVGQlNTeERRVUZETEU5QlFVd3NSVUZCWXp0QlFVTmFMRmRCUVVzc1VVRkJUQ3hIUVVGblFpeEpRVUZvUWp0QlFVTkJMRzlEUVVGakxFdEJRVXNzWlVGQmJrSTdRVUZEUkRzN1FVRkZSQ3hSUVVGSkxFdEJRVXNzVDBGQlZDeEZRVUZyUWl4TFFVRkxMRTlCUVV3N1FVRkRiRUlzVVVGQlNTeFBRVUZLTEVWQlFXRXNVVUZCVVN4SlFVRlNPMEZCUTJJc1VVRkJTU3hSUVVGS0xFVkJRV01zVTBGQlV5eEpRVUZVT3p0QlFVVmtMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMjFDUVVWRUxFa3NiVUpCUVU4N1FVRkJRU3hyUWtGRFowTXNTMEZCU3l4TFFVUnlRenRCUVVGQkxGRkJRMGNzVFVGRVNDeFhRVU5ITEUxQlJFZzdRVUZCUVN4UlFVTlhMRTlCUkZnc1YwRkRWeXhQUVVSWU8wRkJRVUVzVVVGRGIwSXNUMEZFY0VJc1YwRkRiMElzVDBGRWNFSTdPenRCUVVkTUxGRkJRVWtzUTBGQlF5eFBRVUZNTEVWQlFXTTdRVUZEV2l4WFFVRkxMRkZCUVV3c1IwRkJaMElzUzBGQmFFSTdRVUZEUVN3d1EwRkJiMElzUzBGQlN5eGxRVUY2UWp0QlFVTkVPenRCUVVWRUxGRkJRVWtzUzBGQlN5eE5RVUZVTEVWQlFXbENMRXRCUVVzc1RVRkJURHRCUVVOcVFpeFJRVUZKTEUxQlFVb3NSVUZCV1N4UFFVRlBMRWxCUVZBN1FVRkRXaXhSUVVGSkxFOUJRVW9zUlVGQllTeFJRVUZSTEVsQlFWSTdPMEZCUldJc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN2JVSkJSVVFzVVN4MVFrRkJWenRCUVVGQkxHdENRVU15UWl4TFFVRkxMRXRCUkdoRE8wRkJRVUVzVVVGRFJDeFZRVVJETEZkQlEwUXNWVUZFUXp0QlFVRkJMRkZCUTFjc1YwRkVXQ3hYUVVOWExGZEJSRmc3T3p0QlFVZFVMRk5CUVVzc1NVRkJURHM3UVVGRlFTeFJRVUZKTEV0QlFVc3NWVUZCVkN4RlFVRnhRaXhMUVVGTExGVkJRVXc3UVVGRGNrSXNVVUZCU1N4VlFVRktMRVZCUVdkQ0xGZEJRVmNzU1VGQldEdEJRVU5vUWl4UlFVRkpMRmRCUVVvc1JVRkJhVUlzV1VGQldTeEpRVUZhT3p0QlFVVnFRaXhYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJDeGxMRGhDUVVGclFqdEJRVU5vUWl4VFFVRkxMRmRCUVV3c1IwRkJiVUlzYjBOQlFXNUNPMEZCUTBFc1UwRkJTeXhKUVVGTUxFZEJRVmtzUzBGQlN5eFBRVUZxUWpzN1FVRkdaMElzYTBKQlNXTXNTMEZCU3l4TFFVcHVRanRCUVVGQkxGRkJTVklzVVVGS1VTeFhRVWxTTEZGQlNsRTdRVUZCUVN4UlFVbEZMRTlCU2tZc1YwRkpSU3hQUVVwR096czdRVUZOYUVJc1VVRkJTU3hMUVVGTExFMUJRVlFzUlVGQmFVSTdRVUZEWml4WFFVRkxMRTlCUVV3c1IwRkJaU3hMUVVGTExFMUJRVXdzUTBGQldTeExRVUZMTEU5QlFXcENMRU5CUVdZN1FVRkRSRHM3UVVGRlJDeFJRVUZKTEZGQlFVb3NSVUZCWXl4VFFVRlRMRXRCUVVzc1QwRkJaQ3hGUVVGMVFpeEpRVUYyUWp0QlFVTmtMRk5CUVVzc1lVRkJURHM3UVVGRlFTeFJRVUZKTEVOQlFVTXNUMEZCUkN4SlFVRlpMRXRCUVVzc1VVRkJja0lzUlVGQkswSTdRVUZETjBJc2IwTkJRV01zUzBGQlN5eGxRVUZ1UWp0QlFVTkVPenRCUVVWRUxGRkJRVWtzUzBGQlN5eG5Ra0ZCVEN4SlFVRjVRaXhMUVVGTExHZENRVUZNTEVWQlFUZENMRVZCUVhORU8wRkJRM0JFTEZkQlFVc3NVVUZCVER0QlFVTkVPenRCUVVWRUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08yMUNRVVZFTEZFc2NVSkJRVk1zU3l4RlFVRlBPMEZCUTJRc1UwRkJTeXhMUVVGTUxHZENRVU5MTEV0QlFVc3NTMEZFVml4RlFVVkxMRXRCUmt3N1FVRkpRU3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJDeEhMR3RDUVVGTk8wRkJRMG9zVjBGQlR5eExRVUZMTEU5QlFWbzdRVUZEUkN4SE96dHRRa0ZGUkN4SExHZENRVUZKTEVNc1JVRkJSenRCUVVOTUxGTkJRVXNzVDBGQlRDeEhRVUZsTEVOQlFXWTdRVUZEUVN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSQ3hQTEc5Q1FVRlJMRWNzUlVGQlN6dEJRVU5ZTEZkQlFVOHNTMEZCU3l4TFFVRk1MRU5CUVZjc1IwRkJXQ3hEUVVGUU8wRkJRMFFzUnpzN2JVSkJSVVFzVnl3d1FrRkJZenRCUVVOYUxGZEJRVThzTUVKQlFXVXNTMEZCU3l4UFFVRk1MRWRCUVdVc1MwRkJTeXhKUVVGdVF5eEZRVUY1UXl4TFFVRkxMRmRCUVRsRExFTkJRVkE3UVVGRFJDeEhPenR0UWtGRlJDeFJMSFZDUVVGWE8wRkJRMVFzVjBGQlR5eExRVUZMTEZGQlFWbzdRVUZEUkN4SE96dHRRa0ZGUkN4WExIZENRVUZaTEZFc1JVRkJWVHRCUVVOd1FpeFRRVUZMTEZOQlFVd3NSMEZCYVVJc1MwRkJTeXhUUVVGTUxFbEJRV3RDTEVWQlFXNURPMEZCUTBFc1UwRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NXVUZCVEN4SlFVRnhRaXhEUVVGNlF6dEJRVU5CTEZGQlFVa3NTMEZCU3l4VFFVRk1MRU5CUVdVc1QwRkJaaXhEUVVGMVFpeFJRVUYyUWl4TlFVRnhReXhEUVVGRExFTkJRVEZETEVWQlFUWkRPMEZCUXpORExGZEJRVXNzVTBGQlRDeERRVUZsTEVsQlFXWXNRMEZCYjBJc1VVRkJjRUk3UVVGRFFTeFhRVUZMTEZsQlFVdzdRVUZEUkR0QlFVTkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMjFDUVVWRUxHTXNNa0pCUVdVc1VTeEZRVUZWTzBGQlEzWkNMRkZCUVUwc1owSkJRV2xDTEV0QlFVc3NVMEZCVGl4SFFVRnRRaXhMUVVGTExGTkJRVXdzUTBGQlpTeFBRVUZtTEVOQlFYVkNMRkZCUVhaQ0xFTkJRVzVDTEVkQlFYTkVMRU5CUVVNc1EwRkJOMFU3UVVGRFFTeFJRVUZKTEd0Q1FVRnJRaXhEUVVGRExFTkJRWFpDTEVWQlFUQkNPMEZCUTNoQ0xGZEJRVXNzV1VGQlREdEJRVU5CTEZkQlFVc3NVMEZCVEN4RFFVRmxMRTFCUVdZc1EwRkJjMElzWVVGQmRFSXNSVUZCY1VNc1EwRkJja003UVVGRFJEdEJRVU5FTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzIxQ1FVVkVMR0VzTkVKQlFXZENPMEZCUTJRc1VVRkJUU3hWUVVGVkxFdEJRVXNzUjBGQlRDeEZRVUZvUWp0QlFVTkJMRk5CUVVzc1NVRkJTU3hKUVVGSkxFTkJRV0lzUlVGQlowSXNTVUZCU1N4TFFVRkxMRmxCUVhwQ0xFVkJRWFZETEVkQlFYWkRMRVZCUVRSRE8wRkJRekZETEZkQlFVc3NVMEZCVEN4RFFVRmxMRU5CUVdZc1JVRkJhMElzVDBGQmJFSXNSVUZCTWtJc1NVRkJNMEk3UVVGRFJEdEJRVU5FTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3T3pzN08ydENRVWRaTEUwaUxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJ2YmtaeVlXMWxWWEJrWVhSbExDQmpZVzVqWld4UGJrWnlZVzFsVlhCa1lYUmxMQ0IwYVcxbFUybHVZMlZNWVhOMFJuSmhiV1VnZlNCbWNtOXRJQ2N1TGk5bWNtRnRaWE41Ym1Nbk8xeHVhVzF3YjNKMElIc2djM0JsWldSUVpYSlRaV052Ym1RZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVjYm1Oc1lYTnpJRUZqZEdsdmJpQjdYRzRnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6S1NCN1hHNGdJQ0FnZEdocGN5NXpZMmhsWkhWc1pXUlZjR1JoZEdVZ1BTQjBhR2x6TG5OamFHVmtkV3hsWkZWd1pHRjBaUzVpYVc1a0tIUm9hWE1wTzF4dVhHNGdJQ0FnZEdocGN5NXdjbTl3Y3lBOUlIdGNiaUFnSUNBZ0lDNHVMblJvYVhNdVkyOXVjM1J5ZFdOMGIzSXVaR1ZtWVhWc2RGQnliM0J6WEc0Z0lDQWdmVHRjYmx4dUlDQWdJSFJvYVhNdWMyVjBVSEp2Y0hNb2NISnZjSE1wTzF4dVhHNGdJQ0FnZEdocGN5NWpkWEp5Wlc1MElEMGdjSEp2Y0hNdVkzVnljbVZ1ZENCOGZDQndjbTl3Y3k1bWNtOXRJSHg4SURBN1hHNGdJSDFjYmx4dUlDQnpkR0Z5ZENncElIdGNiaUFnSUNCamIyNXpkQ0I3SUc5dVUzUmhjblFzSUY5dmJsTjBZWEowTENCd1lYTnphWFpsSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdhV1lnS0NGd1lYTnphWFpsS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbWx6UVdOMGFYWmxJRDBnZEhKMVpUdGNiaUFnSUNBZ0lHOXVSbkpoYldWVmNHUmhkR1VvZEdocGN5NXpZMmhsWkhWc1pXUlZjR1JoZEdVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBhR2x6TG05dVUzUmhjblFwSUhSb2FYTXViMjVUZEdGeWRDZ3BPMXh1SUNBZ0lHbG1JQ2h2YmxOMFlYSjBLU0J2YmxOMFlYSjBLSFJvYVhNcE8xeHVJQ0FnSUdsbUlDaGZiMjVUZEdGeWRDa2dYMjl1VTNSaGNuUW9kR2hwY3lrN1hHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJSE4wYjNBb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCdmJsTjBiM0FzSUY5dmJsTjBiM0FzSUhCaGMzTnBkbVVnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzVjYmlBZ0lDQnBaaUFvSVhCaGMzTnBkbVVwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVhWE5CWTNScGRtVWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lHTmhibU5sYkU5dVJuSmhiV1ZWY0dSaGRHVW9kR2hwY3k1elkyaGxaSFZzWldSVmNHUmhkR1VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbTl1VTNSdmNDa2dkR2hwY3k1dmJsTjBiM0FvS1R0Y2JpQWdJQ0JwWmlBb2IyNVRkRzl3S1NCdmJsTjBiM0FvZEdocGN5azdYRzRnSUNBZ2FXWWdLRjl2YmxOMGIzQXBJRjl2YmxOMGIzQW9kR2hwY3lrN1hHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJR052YlhCc1pYUmxLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2diMjVEYjIxd2JHVjBaU3dnWDI5dVEyOXRjR3hsZEdVZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc1Y2JpQWdJQ0IwYUdsekxuTjBiM0FvS1R0Y2JseHVJQ0FnSUdsbUlDaDBhR2x6TG05dVEyOXRjR3hsZEdVcElIUm9hWE11YjI1RGIyMXdiR1YwWlNncE8xeHVJQ0FnSUdsbUlDaHZia052YlhCc1pYUmxLU0J2YmtOdmJYQnNaWFJsS0hSb2FYTXBPMXh1SUNBZ0lHbG1JQ2hmYjI1RGIyMXdiR1YwWlNrZ1gyOXVRMjl0Y0d4bGRHVW9kR2hwY3lrN1hHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJSE5qYUdWa2RXeGxaRlZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQjBhR2x6TG14aGMzUlZjR1JoZEdWa0lEMGdkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxLQ2s3WEc0Z0lDQWdkR2hwY3k1d2NtVjJJRDBnZEdocGN5NWpkWEp5Wlc1ME8xeHVYRzRnSUNBZ1kyOXVjM1FnZXlCdmJsVndaR0YwWlN3Z2NHRnpjMmwyWlNCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmx4dUlDQWdJR2xtSUNoMGFHbHpMblZ3WkdGMFpTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1amRYSnlaVzUwSUQwZ2RHaHBjeTUxY0dSaGRHVW9kR2hwY3k1amRYSnlaVzUwS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2IyNVZjR1JoZEdVcElHOXVWWEJrWVhSbEtIUm9hWE11WTNWeWNtVnVkQ3dnZEdocGN5azdYRzRnSUNBZ2RHaHBjeTVtYVhKbFRHbHpkR1Z1WlhKektDazdYRzVjYmlBZ0lDQnBaaUFvSVhCaGMzTnBkbVVnSmlZZ2RHaHBjeTVwYzBGamRHbDJaU2tnZTF4dUlDQWdJQ0FnYjI1R2NtRnRaVlZ3WkdGMFpTaDBhR2x6TG5OamFHVmtkV3hsWkZWd1pHRjBaU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXVhWE5CWTNScGIyNURiMjF3YkdWMFpTQW1KaUIwYUdsekxtbHpRV04wYVc5dVEyOXRjR3hsZEdVb0tTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1amIyMXdiR1YwWlNncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdjMlYwVUhKdmNITW9jSEp2Y0hNcElIdGNiaUFnSUNCMGFHbHpMbkJ5YjNCeklEMGdlMXh1SUNBZ0lDQWdMaTR1ZEdocGN5NXdjbTl3Y3l4Y2JpQWdJQ0FnSUM0dUxuQnliM0J6WEc0Z0lDQWdmVHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUdkbGRDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVqZFhKeVpXNTBPMXh1SUNCOVhHNWNiaUFnYzJWMEtIWXBJSHRjYmlBZ0lDQjBhR2x6TG1OMWNuSmxiblFnUFNCMk8xeHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdaMlYwVUhKdmNDaHJaWGtwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1d2NtOXdjMXRyWlhsZE8xeHVJQ0I5WEc1Y2JpQWdaMlYwVm1Wc2IyTnBkSGtvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSE53WldWa1VHVnlVMlZqYjI1a0tIUm9hWE11WTNWeWNtVnVkQ0F0SUhSb2FYTXVjSEpsZGl3Z2RHaHBjeTVzWVhOMFZYQmtZWFJsWkNrN1hHNGdJSDFjYmx4dUlDQnBjMEZqZEdsMlpTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVwYzBGamRHbDJaVHRjYmlBZ2ZWeHVYRzRnSUdGa1pFeHBjM1JsYm1WeUtHeHBjM1JsYm1WeUtTQjdYRzRnSUNBZ2RHaHBjeTVzYVhOMFpXNWxjbk1nUFNCMGFHbHpMbXhwYzNSbGJtVnljeUI4ZkNCYlhUdGNiaUFnSUNCMGFHbHpMbTUxYlV4cGMzUmxibVZ5Y3lBOUlIUm9hWE11Ym5WdFRHbHpkR1Z1WlhKeklIeDhJREE3WEc0Z0lDQWdhV1lnS0hSb2FYTXViR2x6ZEdWdVpYSnpMbWx1WkdWNFQyWW9iR2x6ZEdWdVpYSXBJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdkR2hwY3k1c2FYTjBaVzVsY25NdWNIVnphQ2hzYVhOMFpXNWxjaWs3WEc0Z0lDQWdJQ0IwYUdsekxtNTFiVXhwYzNSbGJtVnljeXNyTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUhKbGJXOTJaVXhwYzNSbGJtVnlLR3hwYzNSbGJtVnlLU0I3WEc0Z0lDQWdZMjl1YzNRZ2JHbHpkR1Z1WlhKSmJtUmxlQ0E5SUNoMGFHbHpMbXhwYzNSbGJtVnljeWtnUHlCMGFHbHpMbXhwYzNSbGJtVnljeTVwYm1SbGVFOW1LR3hwYzNSbGJtVnlLU0E2SUMweE8xeHVJQ0FnSUdsbUlDaHNhWE4wWlc1bGNrbHVaR1Y0SUNFOVBTQXRNU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXVkVzFNYVhOMFpXNWxjbk10TFR0Y2JpQWdJQ0FnSUhSb2FYTXViR2x6ZEdWdVpYSnpMbk53YkdsalpTaHNhWE4wWlc1bGNrbHVaR1Y0TENBeEtUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQm1hWEpsVEdsemRHVnVaWEp6S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJR04xY25KbGJuUWdQU0IwYUdsekxtZGxkQ2dwTzF4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXVkVzFNYVhOMFpXNWxjbk03SUdrckt5a2dlMXh1SUNBZ0lDQWdkR2hwY3k1c2FYTjBaVzVsY25OYmFWMG9ZM1Z5Y21WdWRDd2dkR2hwY3lrN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVGamRHbHZianRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVuZGVyZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuZGVyZXIpO1xuXG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcywgcHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMuY2hhbmdlZFZhbHVlcyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IHN0YXRlLlxuICAgKiBJZiBga2V5YCBpcyBub3QgZGVmaW5lZCwgcmV0dXJuIGVudGlyZSBjYWNoZWQgc3RhdGUuXG4gICAqIElmIGBrZXlgIGlzIGRlZmluZWQsIHJldHVybiBjYWNoZWQgdmFsdWUgaWYgcHJlc2VudC5cbiAgICogSWYgYGtleWAgaXMgZGVmaW5lZCBhbmQgY2FjaGVkIHZhbHVlIGlzIG5vdCBwcmVzZW50LCByZWFkIGFuZCByZXR1cm4uXG4gICAqIEBwYXJhbSAge3N0cmluZ30gKG9wdGlvbmFsKSBrZXkgb2YgdmFsdWVcbiAgICogQHJldHVybiB7dmFsdWV9XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQoa2V5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZWFkIHZhbHVlIGFjY29yZGluZyB0byBgb25SZWFkYFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IE5hbWUgb2YgcHJvcGVydHkgdG8gcmVhZFxuICAgKiBAcmV0dXJuIHtbdHlwZV19XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiByZWFkKGtleSkge1xuICAgIGlmICh0aGlzLm9uUmVhZCkge1xuICAgICAgcmV0dXJuIHRoaXMub25SZWFkKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgYHN0YXRlYCB3aXRoIG5ldyB2YWx1ZXMgYW5kIHNjaGVkdWxlIGByZW5kZXJgLlxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzXG4gICAqIEBwYXJhbSB7dmFsdWV9IHZhbHVlIHRvc2V0XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgdmFsdWVzID0gYXJnc1swXTtcbiAgICAgIC8vIFNldCBtdWx0aXBsZSB2YWx1ZXNcblxuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICB0aGlzLnNldFZhbHVlKGtleSwgdmFsdWVzW2tleV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2tleTIgPSBhcmdzWzBdO1xuICAgICAgdmFyIHZhbHVlID0gYXJnc1sxXTtcblxuICAgICAgdGhpcy5zZXRWYWx1ZShfa2V5MiwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVSZW5kZXIpKHRoaXMucmVuZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyA+IFdpbGV5IC0gNiBpbiB0aGUgTW9ybmluZ1xuICAvKipcbiAgICogU2V0IGEgc2luZ2xlIHZhbHVlXG4gICAqIElmIGEgc3RyaW5nIG9yIG51bWJlciwgc2V0IGRpcmVjdGx5LlxuICAgKiBJZiBhbiBvYmplY3Qgb3IgYXJyYXksIGNyZWF0ZSBuZXcgb2JqZWN0IG9yIGFycmF5XG4gICAqIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC4gVGhlbiBzaGFsbG93IGNvbXBhcmVcbiAgICogdG8gc2V0IGFuZCBjb21wYXJlIGluZGl2aWR1YWwgdmFsdWVzLlxuICAgKiBPbmUgb2YgdGhlIGNsZWFyZXIgZHJhd2JhY2tzIGFuZCBhbm5veWFuY2VzIHdpdGhcbiAgICogdXNpbmcgbXV0YWJsZSBpbnN0ZWFkIG9mIGltbXV0YWJsZSBzdGF0ZXMuXG4gICAqIEBwYXJhbSB7W3R5cGVdfSBrZXlcbiAgICogQHBhcmFtIHtbdHlwZV19IHZhbHVlXG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gc2V0VmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSB0aGlzLnN0YXRlW2tleV07XG5cbiAgICAvLyBJZiBudW1iZXIgb3Igc3RyaW5nLCBzZXQgZGlyZWN0bHlcbiAgICBpZiAoKDAsIF91dGlscy5pc051bSkodmFsdWUpIHx8ICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlKSkge1xuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLmlzQXJyYXkpKHZhbHVlKSkge1xuICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gW107XG4gICAgICB9XG5cbiAgICAgIHZhciBudW1WYWx1ZXMgPSB2YWx1ZS5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVZhbHVlczsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV1baV0gIT09IHZhbHVlW2ldKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldW2ldID0gdmFsdWVbaV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc09iaikodmFsdWUpKSB7XG4gICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgdmFsdWVLZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gIT09IHZhbHVlW3ZhbHVlS2V5XSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gPSB2YWx1ZVt2YWx1ZUtleV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5wdXNoKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBGaXJlcyBgb25SZW5kZXJgIGlmIHZhbHVlcyBoYXZlIGNoYW5nZWQgb3IgYGZvcmNlUmVuZGVyYFxuICAgKiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBmb3JjZVJlbmRlciA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogYXJndW1lbnRzWzBdO1xuXG4gICAgaWYgKChmb3JjZVJlbmRlciB8fCB0aGlzLmhhc0NoYW5nZWQpICYmIHRoaXMub25SZW5kZXIpIHtcbiAgICAgIHRoaXMub25SZW5kZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZWRWYWx1ZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUmVuZGVyZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPMEZCUTBFN096czdTVUZGVFN4Uk8wRkJRMG9zYjBKQlFWa3NTMEZCV2l4RlFVRnRRanRCUVVGQk96dEJRVU5xUWl4VFFVRkxMRTFCUVV3c1IwRkJZeXhMUVVGTExFMUJRVXdzUTBGQldTeEpRVUZhTEVOQlFXbENMRWxCUVdwQ0xFTkJRV1E3TzBGQlJVRXNVMEZCU3l4TFFVRk1MR2RDUVVOTExFdEJRVXNzVjBGQlRDeERRVUZwUWl4WlFVUjBRaXhGUVVWTExFdEJSa3c3TzBGQlMwRXNVMEZCU3l4TFFVRk1MRWRCUVdFc1JVRkJZanRCUVVOQkxGTkJRVXNzWVVGQlRDeEhRVUZ4UWl4RlFVRnlRanRCUVVORU96czdPenM3T3pzN096czdjVUpCVlVRc1J5eG5Ra0ZCU1N4SExFVkJRVXM3UVVGRFVDeFJRVUZKTEVkQlFVb3NSVUZCVXp0QlFVTlFMRlZCUVVrc1MwRkJTeXhMUVVGTUxFTkJRVmNzUjBGQldDeE5RVUZ2UWl4VFFVRjRRaXhGUVVGdFF6dEJRVU5xUXl4bFFVRlBMRXRCUVVzc1MwRkJUQ3hEUVVGWExFZEJRVmdzUTBGQlVEdEJRVU5FTEU5QlJrUXNUVUZGVHp0QlFVTk1MR1ZCUVU4c1MwRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZRTzBGQlEwUTdRVUZEUml4TFFVNUVMRTFCVFU4N1FVRkRUQ3hoUVVGUExFdEJRVXNzUzBGQldqdEJRVU5FTzBGQlEwWXNSenM3T3pzN096czdPM0ZDUVU5RUxFa3NhVUpCUVVzc1J5eEZRVUZMTzBGQlExSXNVVUZCU1N4TFFVRkxMRTFCUVZRc1JVRkJhVUk3UVVGRFppeGhRVUZQTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1EwRkJVRHRCUVVORU8wRkJRMFlzUnpzN096czdPenM3TzNGQ1FVOUVMRWNzYTBKQlFXRTdRVUZCUVN4elEwRkJUaXhKUVVGTk8wRkJRVTRzVlVGQlRUdEJRVUZCT3p0QlFVTllMRkZCUVVrc1QwRkJUeXhMUVVGTExFTkJRVXdzUTBGQlVDeExRVUZ0UWl4WFFVRjJRaXhGUVVGdlF6dEJRVUZCTEZWQlF6RkNMRTFCUkRCQ0xFZEJRMllzU1VGRVpUczdPMEZCUjJ4RExGZEJRVXNzU1VGQlRTeEhRVUZZTEVsQlFXdENMRTFCUVd4Q0xFVkJRVEJDTzBGQlEzaENMR0ZCUVVzc1VVRkJUQ3hEUVVGakxFZEJRV1FzUlVGQmJVSXNUMEZCVHl4SFFVRlFMRU5CUVc1Q08wRkJRMFE3UVVGRFJpeExRVTVFTEUxQlRVODdRVUZCUVN4VlFVTkhMRXRCUkVnc1IwRkRhMElzU1VGRWJFSTdRVUZCUVN4VlFVTlJMRXRCUkZJc1IwRkRhMElzU1VGRWJFSTdPMEZCUlV3c1YwRkJTeXhSUVVGTUxFTkJRV01zUzBGQlpDeEZRVUZ0UWl4TFFVRnVRanRCUVVORU96dEJRVVZFTEZGQlFVa3NTMEZCU3l4VlFVRlVMRVZCUVhGQ08wRkJRMjVDTEc5RFFVRmpMRXRCUVVzc1RVRkJia0k3UVVGRFJEczdRVUZGUkN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3pzN096czdPenM3T3pzN096czdPM0ZDUVdORUxGRXNjVUpCUVZNc1J5eEZRVUZMTEVzc1JVRkJUenRCUVVOdVFpeFJRVUZOTEdWQlFXVXNTMEZCU3l4TFFVRk1MRU5CUVZjc1IwRkJXQ3hEUVVGeVFqczdPMEZCUjBFc1VVRkJTU3hyUWtGQlRTeExRVUZPTEV0QlFXZENMSEZDUVVGVExFdEJRVlFzUTBGQmNFSXNSVUZCY1VNN1FVRkRia01zVlVGQlNTeHBRa0ZCYVVJc1MwRkJja0lzUlVGQk5FSTdRVUZETVVJc1lVRkJTeXhMUVVGTUxFTkJRVmNzUjBGQldDeEpRVUZyUWl4TFFVRnNRanRCUVVOQkxHRkJRVXNzVlVGQlRDeEhRVUZyUWl4SlFVRnNRanRCUVVORU8wRkJRMFlzUzBGTVJDeE5RVXRQTEVsQlFVa3NiMEpCUVZFc1MwRkJVaXhEUVVGS0xFVkJRVzlDTzBGQlEzcENMRlZCUVVrc1EwRkJReXhaUVVGTUxFVkJRVzFDTzBGQlEycENMR0ZCUVVzc1MwRkJUQ3hEUVVGWExFZEJRVmdzU1VGQmEwSXNSVUZCYkVJN1FVRkRSRHM3UVVGRlJDeFZRVUZOTEZsQlFWa3NUVUZCVFN4TlFVRjRRanRCUVVOQkxGZEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFXSXNSVUZCWjBJc1NVRkJTU3hUUVVGd1FpeEZRVUVyUWl4SFFVRXZRaXhGUVVGdlF6dEJRVU5zUXl4WlFVRkpMRXRCUVVzc1MwRkJUQ3hEUVVGWExFZEJRVmdzUlVGQlowSXNRMEZCYUVJc1RVRkJkVUlzVFVGQlRTeERRVUZPTEVOQlFUTkNMRVZCUVhGRE8wRkJRMjVETEdWQlFVc3NTMEZCVEN4RFFVRlhMRWRCUVZnc1JVRkJaMElzUTBGQmFFSXNTVUZCY1VJc1RVRkJUU3hEUVVGT0xFTkJRWEpDTzBGQlEwRXNaVUZCU3l4VlFVRk1MRWRCUVd0Q0xFbEJRV3hDTzBGQlEwUTdRVUZEUmp0QlFVTkdMRXRCV2swc1RVRlpRU3hKUVVGSkxHdENRVUZOTEV0QlFVNHNRMEZCU2l4RlFVRnJRanRCUVVOMlFpeFZRVUZKTEVOQlFVTXNXVUZCVEN4RlFVRnRRanRCUVVOcVFpeGhRVUZMTEV0QlFVd3NRMEZCVnl4SFFVRllMRWxCUVd0Q0xFVkJRV3hDTzBGQlEwUTdPMEZCUlVRc1YwRkJTeXhKUVVGSkxGRkJRVlFzU1VGQmNVSXNTMEZCY2tJc1JVRkJORUk3UVVGRE1VSXNXVUZCU1N4TFFVRkxMRXRCUVV3c1EwRkJWeXhIUVVGWUxFVkJRV2RDTEZGQlFXaENMRTFCUVRoQ0xFMUJRVTBzVVVGQlRpeERRVUZzUXl4RlFVRnRSRHRCUVVOcVJDeGxRVUZMTEV0QlFVd3NRMEZCVnl4SFFVRllMRVZCUVdkQ0xGRkJRV2hDTEVsQlFUUkNMRTFCUVUwc1VVRkJUaXhEUVVFMVFqdEJRVU5CTEdWQlFVc3NWVUZCVEN4SFFVRnJRaXhKUVVGc1FqdEJRVU5FTzBGQlEwWTdRVUZEUmpzN1FVRkZSQ3hSUVVGSkxFdEJRVXNzVlVGQlZDeEZRVUZ4UWp0QlFVTnVRaXhYUVVGTExHRkJRVXdzUTBGQmJVSXNTVUZCYmtJc1EwRkJkMElzUjBGQmVFSTdRVUZEUkR0QlFVTkdMRWM3T3pzN096czdPenR4UWtGUFJDeE5MSEZDUVVFMFFqdEJRVUZCTEZGQlFYSkNMRmRCUVhGQ0xIbEVRVUZRTEV0QlFVODdPMEZCUXpGQ0xGRkJRVWtzUTBGQlF5eGxRVUZsTEV0QlFVc3NWVUZCY2tJc1MwRkJiME1zUzBGQlN5eFJRVUUzUXl4RlFVRjFSRHRCUVVOeVJDeFhRVUZMTEZGQlFVdzdRVUZEUkRzN1FVRkZSQ3hUUVVGTExHRkJRVXdzUTBGQmJVSXNUVUZCYmtJc1IwRkJORUlzUTBGQk5VSTdRVUZEUVN4VFFVRkxMRlZCUVV3c1IwRkJhMElzUzBGQmJFSTdPMEZCUlVFc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN096czdhMEpCUjFrc1VTSXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUc5dVJuSmhiV1ZTWlc1a1pYSWdmU0JtY205dElDY3VMaTltY21GdFpYTjVibU1uTzF4dWFXMXdiM0owSUhzZ2FYTkJjbkpoZVN3Z2FYTlBZbW9zSUdselRuVnRMQ0JwYzFOMGNtbHVaeUI5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU5zWVhOeklGSmxibVJsY21WeUlIdGNiaUFnWTI5dWMzUnlkV04wYjNJb2NISnZjSE1wSUh0Y2JpQWdJQ0IwYUdsekxuSmxibVJsY2lBOUlIUm9hWE11Y21WdVpHVnlMbUpwYm1Rb2RHaHBjeWs3WEc1Y2JpQWdJQ0IwYUdsekxuQnliM0J6SUQwZ2UxeHVJQ0FnSUNBZ0xpNHVkR2hwY3k1amIyNXpkSEoxWTNSdmNpNWtaV1poZFd4MFVISnZjSE1zWEc0Z0lDQWdJQ0F1TGk1d2NtOXdjMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQjBhR2x6TG5OMFlYUmxJRDBnZTMwN1hHNGdJQ0FnZEdocGN5NWphR0Z1WjJWa1ZtRnNkV1Z6SUQwZ1cxMDdYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nUjJWMElHTjFjbkpsYm5RZ2MzUmhkR1V1WEc0Z0lDQXFJRWxtSUdCclpYbGdJR2x6SUc1dmRDQmtaV1pwYm1Wa0xDQnlaWFIxY200Z1pXNTBhWEpsSUdOaFkyaGxaQ0J6ZEdGMFpTNWNiaUFnSUNvZ1NXWWdZR3RsZVdBZ2FYTWdaR1ZtYVc1bFpDd2djbVYwZFhKdUlHTmhZMmhsWkNCMllXeDFaU0JwWmlCd2NtVnpaVzUwTGx4dUlDQWdLaUJKWmlCZ2EyVjVZQ0JwY3lCa1pXWnBibVZrSUdGdVpDQmpZV05vWldRZ2RtRnNkV1VnYVhNZ2JtOTBJSEJ5WlhObGJuUXNJSEpsWVdRZ1lXNWtJSEpsZEhWeWJpNWNiaUFnSUNvZ1FIQmhjbUZ0SUNCN2MzUnlhVzVuZlNBb2IzQjBhVzl1WVd3cElHdGxlU0J2WmlCMllXeDFaVnh1SUNBZ0tpQkFjbVYwZFhKdUlIdDJZV3gxWlgxY2JpQWdJQ292WEc0Z0lHZGxkQ2hyWlhrcElIdGNiaUFnSUNCcFppQW9hMlY1S1NCN1hHNGdJQ0FnSUNCcFppQW9kR2hwY3k1emRHRjBaVnRyWlhsZElDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjM1JoZEdWYmEyVjVYVHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG5KbFlXUW9hMlY1S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YzNSaGRHVTdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRkpsWVdRZ2RtRnNkV1VnWVdOamIzSmthVzVuSUhSdklHQnZibEpsWVdSZ1hHNGdJQ0FxSUVCd1lYSmhiU0FnZTNOMGNtbHVaMzBnVG1GdFpTQnZaaUJ3Y205d1pYSjBlU0IwYnlCeVpXRmtYRzRnSUNBcUlFQnlaWFIxY200Z2UxdDBlWEJsWFgxY2JpQWdJQ292WEc0Z0lISmxZV1FvYTJWNUtTQjdYRzRnSUNBZ2FXWWdLSFJvYVhNdWIyNVNaV0ZrS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXZibEpsWVdRb2EyVjVLVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nVlhCa1lYUmxJR0J6ZEdGMFpXQWdkMmwwYUNCdVpYY2dkbUZzZFdWeklHRnVaQ0J6WTJobFpIVnNaU0JnY21WdVpHVnlZQzVjYmlBZ0lDb2dRSEJoY21GdElIdHZZbXBsWTNSOUlIWmhiSFZsYzF4dUlDQWdLaUJBY0dGeVlXMGdlM1poYkhWbGZTQjJZV3gxWlNCMGIzTmxkRnh1SUNBZ0tpOWNiaUFnYzJWMEtDNHVMbUZ5WjNNcElIdGNiaUFnSUNCcFppQW9kSGx3Wlc5bUlHRnlaM05iTVYwZ1BUMDlJQ2QxYm1SbFptbHVaV1FuS1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0JiSUhaaGJIVmxjeUJkSUQwZ1lYSm5jenRjYmlBZ0lDQWdJQzh2SUZObGRDQnRkV3gwYVhCc1pTQjJZV3gxWlhOY2JpQWdJQ0FnSUdadmNpQW9ZMjl1YzNRZ2EyVjVJR2x1SUhaaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5sZEZaaGJIVmxLR3RsZVN3Z2RtRnNkV1Z6VzJ0bGVWMHBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCamIyNXpkQ0JiSUd0bGVTd2dkbUZzZFdVZ1hTQTlJR0Z5WjNNN1hHNGdJQ0FnSUNCMGFHbHpMbk5sZEZaaGJIVmxLR3RsZVN3Z2RtRnNkV1VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbWhoYzBOb1lXNW5aV1FwSUh0Y2JpQWdJQ0FnSUc5dVJuSmhiV1ZTWlc1a1pYSW9kR2hwY3k1eVpXNWtaWElwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ0x5OGdQaUJYYVd4bGVTQXRJRFlnYVc0Z2RHaGxJRTF2Y201cGJtZGNiaUFnTHlvcVhHNGdJQ0FxSUZObGRDQmhJSE5wYm1kc1pTQjJZV3gxWlZ4dUlDQWdLaUJKWmlCaElITjBjbWx1WnlCdmNpQnVkVzFpWlhJc0lITmxkQ0JrYVhKbFkzUnNlUzVjYmlBZ0lDb2dTV1lnWVc0Z2IySnFaV04wSUc5eUlHRnljbUY1TENCamNtVmhkR1VnYm1WM0lHOWlhbVZqZENCdmNpQmhjbkpoZVZ4dUlDQWdLaUJwWmlCcGRDQmtiMlZ6YmlkMElHRnNjbVZoWkhrZ1pYaHBjM1F1SUZSb1pXNGdjMmhoYkd4dmR5QmpiMjF3WVhKbFhHNGdJQ0FxSUhSdklITmxkQ0JoYm1RZ1kyOXRjR0Z5WlNCcGJtUnBkbWxrZFdGc0lIWmhiSFZsY3k1Y2JpQWdJQ29nVDI1bElHOW1JSFJvWlNCamJHVmhjbVZ5SUdSeVlYZGlZV05yY3lCaGJtUWdZVzV1YjNsaGJtTmxjeUIzYVhSb1hHNGdJQ0FxSUhWemFXNW5JRzExZEdGaWJHVWdhVzV6ZEdWaFpDQnZaaUJwYlcxMWRHRmliR1VnYzNSaGRHVnpMbHh1SUNBZ0tpQkFjR0Z5WVcwZ2UxdDBlWEJsWFgwZ2EyVjVYRzRnSUNBcUlFQndZWEpoYlNCN1czUjVjR1ZkZlNCMllXeDFaVnh1SUNBZ0tpOWNiaUFnYzJWMFZtRnNkV1VvYTJWNUxDQjJZV3gxWlNrZ2UxeHVJQ0FnSUdOdmJuTjBJR04xY25KbGJuUldZV3gxWlNBOUlIUm9hWE11YzNSaGRHVmJhMlY1WFR0Y2JseHVJQ0FnSUM4dklFbG1JRzUxYldKbGNpQnZjaUJ6ZEhKcGJtY3NJSE5sZENCa2FYSmxZM1JzZVZ4dUlDQWdJR2xtSUNocGMwNTFiU2gyWVd4MVpTa2dmSHdnYVhOVGRISnBibWNvZG1Gc2RXVXBLU0I3WEc0Z0lDQWdJQ0JwWmlBb1kzVnljbVZ1ZEZaaGJIVmxJQ0U5UFNCMllXeDFaU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbFcydGxlVjBnUFNCMllXeDFaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tHbHpRWEp5WVhrb2RtRnNkV1VwS1NCN1hHNGdJQ0FnSUNCcFppQW9JV04xY25KbGJuUldZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYwZ1BTQmJYVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnWTI5dWMzUWdiblZ0Vm1Gc2RXVnpJRDBnZG1Gc2RXVXViR1Z1WjNSb08xeHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFXWVd4MVpYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXpkR0YwWlZ0clpYbGRXMmxkSUNFOVBTQjJZV3gxWlZ0cFhTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdWYmEyVjVYVnRwWFNBOUlIWmhiSFZsVzJsZE8xeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFHRnpRMmhoYm1kbFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tHbHpUMkpxS0haaGJIVmxLU2tnZTF4dUlDQWdJQ0FnYVdZZ0tDRmpkWEp5Wlc1MFZtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpWdHJaWGxkSUQwZ2UzMDdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR1p2Y2lBb2JHVjBJSFpoYkhWbFMyVjVJR2x1SUhaaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5OMFlYUmxXMnRsZVYxYmRtRnNkV1ZMWlhsZElDRTlQU0IyWVd4MVpWdDJZV3gxWlV0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbFcydGxlVjFiZG1Gc2RXVkxaWGxkSUQwZ2RtRnNkV1ZiZG1Gc2RXVkxaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11YUdGelEyaGhibWRsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2RHaHBjeTVvWVhORGFHRnVaMlZrS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbU5vWVc1blpXUldZV3gxWlhNdWNIVnphQ2hyWlhrcE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkdhWEpsY3lCZ2IyNVNaVzVrWlhKZ0lHbG1JSFpoYkhWbGN5Qm9ZWFpsSUdOb1lXNW5aV1FnYjNJZ1lHWnZjbU5sVW1WdVpHVnlZRnh1SUNBZ0tpQnBjeUJ6WlhRZ2RHOGdkSEoxWlM1Y2JpQWdJQ29nUUhKbGRIVnliaUI3ZEdocGMzMWNiaUFnSUNvdlhHNGdJSEpsYm1SbGNpaG1iM0pqWlZKbGJtUmxjaUE5SUdaaGJITmxLU0I3WEc0Z0lDQWdhV1lnS0NobWIzSmpaVkpsYm1SbGNpQjhmQ0IwYUdsekxtaGhjME5vWVc1blpXUXBJQ1ltSUhSb2FYTXViMjVTWlc1a1pYSXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWIyNVNaVzVrWlhJb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCMGFHbHpMbU5vWVc1blpXUldZV3gxWlhNdWJHVnVaM1JvSUQwZ01EdGNiaUFnSUNCMGFHbHpMbWhoYzBOb1lXNW5aV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZKbGJtUmxjbVZ5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IENTU1JlbmRlcmVyKF9leHRlbmRzKHtcbiAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uOiB0cnVlXG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX3JlbmRlciA9IHJlcXVpcmUoJy4vcmVuZGVyJyk7XG5cbnZhciBfcmVuZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbmRlcik7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDU1NSZW5kZXJlciA9IGZ1bmN0aW9uIChfUmVuZGVyZXIpIHtcbiAgX2luaGVyaXRzKENTU1JlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIENTU1JlbmRlcmVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDU1NSZW5kZXJlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ1NTUmVuZGVyZXIucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGVsZW1lbnQgPSBfcHJvcHMuZWxlbWVudDtcbiAgICB2YXIgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24gPSBfcHJvcHMuZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb247XG5cbiAgICAoMCwgX3JlbmRlcjIuZGVmYXVsdCkoZWxlbWVudCwgdGhpcy5zdGF0ZSwgdGhpcy5jaGFuZ2VkVmFsdWVzLCBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbik7XG4gIH07XG5cbiAgQ1NTUmVuZGVyZXIucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZChrZXkpIHtcbiAgICB2YXIgdmFsdWVUeXBlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRba2V5XTtcblxuICAgIGlmICghX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgICB2YXIgZG9tVmFsdWUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVsoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShrZXkpXSB8fCAwO1xuICAgICAgcmV0dXJuIHZhbHVlVHlwZSAmJiB2YWx1ZVR5cGUucGFyc2UgPyB2YWx1ZVR5cGUucGFyc2UoZG9tVmFsdWUpIDogZG9tVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlVHlwZS5kZWZhdWx0IHx8IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIENTU1JlbmRlcmVyO1xufShfMi5kZWZhdWx0KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0clFrRTJRbVVzVlVGQlZTeFBRVUZXTEVWQlFXMUNMRXRCUVc1Q0xFVkJRVEJDTzBGQlEzWkRMRk5CUVU4c1NVRkJTU3hYUVVGS08wRkJRMHdzYjBKQlJFczdRVUZGVEN4blEwRkJORUk3UVVGR2RrSXNTMEZIUml4TFFVaEZMRVZCUVZBN1FVRkxSQ3hET3p0QlFXNURSRHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3T3pzN096czdTVUZGVFN4WE96czdPenM3T3pzN2QwSkJRMG9zVVN4MVFrRkJWenRCUVVGQkxHbENRVU4xUXl4TFFVRkxMRXRCUkRWRE8wRkJRVUVzVVVGRFJDeFBRVVJETEZWQlEwUXNUMEZFUXp0QlFVRkJMRkZCUTFFc01FSkJSRklzVlVGRFVTd3dRa0ZFVWpzN1FVRkZWQ3d3UWtGQlZTeFBRVUZXTEVWQlFXMUNMRXRCUVVzc1MwRkJlRUlzUlVGQkswSXNTMEZCU3l4aFFVRndReXhGUVVGdFJDd3dRa0ZCYmtRN1FVRkRSQ3hIT3p0M1FrRkZSQ3hOTEcxQ1FVRlBMRWNzUlVGQlN6dEJRVU5XTEZGQlFVMHNXVUZCV1N4eFFrRkJZeXhIUVVGa0xFTkJRV3hDT3p0QlFVVkJMRkZCUVVrc1EwRkJReXg1UWtGQlpTeEhRVUZtTEVOQlFVd3NSVUZCTUVJN1FVRkJRU3hWUVVOb1FpeFBRVVJuUWl4SFFVTktMRXRCUVVzc1MwRkVSQ3hEUVVOb1FpeFBRVVJuUWpzN1FVRkZlRUlzVlVGQlRTeFhRVUZYTEU5QlFVOHNaMEpCUVZBc1EwRkJkMElzVDBGQmVFSXNSVUZCYVVNc1NVRkJha01zUlVGQmRVTXNkMEpCUVZNc1IwRkJWQ3hEUVVGMlF5eExRVUY1UkN4RFFVRXhSVHRCUVVOQkxHRkJRVkVzWVVGQllTeFZRVUZWTEV0QlFYaENMRWRCUVdsRExGVkJRVlVzUzBGQlZpeERRVUZuUWl4UlFVRm9RaXhEUVVGcVF5eEhRVUUyUkN4UlFVRndSVHRCUVVORUxFdEJTa1FzVFVGSlR6dEJRVU5NTEZWQlFVa3NVMEZCU2l4RlFVRmxPMEZCUTJJc1pVRkJUeXhWUVVGVkxFOUJRVllzU1VGQmNVSXNRMEZCTlVJN1FVRkRSQ3hQUVVaRUxFMUJSVTg3UVVGRFRDeGxRVUZQTEVOQlFWQTdRVUZEUkR0QlFVTkdPMEZCUTBZc1J5SXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JTWlc1a1pYSmxjaUJtY205dElDY3VMaThuTzF4dWFXMXdiM0owSUhKbGJtUmxja05UVXlCbWNtOXRJQ2N1TDNKbGJtUmxjaWM3WEc1cGJYQnZjblFnZEhKaGJuTm1iM0p0VUhKdmNITWdabkp2YlNBbkxpOTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVhVzF3YjNKMElIWmhiSFZsVkhsd1pYTk5ZWEFnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3ljN1hHNXBiWEJ2Y25RZ2NISmxabWw0WlhJZ1puSnZiU0FuTGk5d2NtVm1hWGhsY2ljN1hHNWNibU5zWVhOeklFTlRVMUpsYm1SbGNtVnlJR1Y0ZEdWdVpITWdVbVZ1WkdWeVpYSWdlMXh1SUNCdmJsSmxibVJsY2lncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdWc1pXMWxiblFzSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lISmxibVJsY2tOVFV5aGxiR1Z0Wlc1MExDQjBhR2x6TG5OMFlYUmxMQ0IwYUdsekxtTm9ZVzVuWldSV1lXeDFaWE1zSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1R0Y2JpQWdmVnh1WEc0Z0lHOXVVbVZoWkNoclpYa3BJSHRjYmlBZ0lDQmpiMjV6ZENCMllXeDFaVlI1Y0dVZ1BTQjJZV3gxWlZSNWNHVnpUV0Z3VzJ0bGVWMDdYRzVjYmlBZ0lDQnBaaUFvSVhSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElIdGNiaUFnSUNBZ0lHTnZibk4wSUhzZ1pXeGxiV1Z1ZENCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQWdJR052Ym5OMElHUnZiVlpoYkhWbElEMGdkMmx1Wkc5M0xtZGxkRU52YlhCMWRHVmtVM1I1YkdVb1pXeGxiV1Z1ZEN3Z2JuVnNiQ2xiY0hKbFptbDRaWElvYTJWNUtWMGdmSHdnTUR0Y2JpQWdJQ0FnSUhKbGRIVnliaUFvZG1Gc2RXVlVlWEJsSUNZbUlIWmhiSFZsVkhsd1pTNXdZWEp6WlNrZ1B5QjJZV3gxWlZSNWNHVXVjR0Z5YzJVb1pHOXRWbUZzZFdVcElEb2daRzl0Vm1Gc2RXVTdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUdsbUlDaDJZV3gxWlZSNWNHVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFpoYkhWbFZIbHdaUzVrWldaaGRXeDBJSHg4SURBN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnTUR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnS0dWc1pXMWxiblFzSUhCeWIzQnpLU0I3WEc0Z0lISmxkSFZ5YmlCdVpYY2dRMU5UVW1WdVpHVnlaWElvZTF4dUlDQWdJR1ZzWlcxbGJuUXNYRzRnSUNBZ1pXNWhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0NklIUnlkV1VzWEc0Z0lDQWdMaTR1Y0hKdmNITmNiaUFnZlNrN1hHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1JlbmRlcmVyKF9leHRlbmRzKHtcbiAgICBlbGVtZW50OiBlbGVtZW50XG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZXMpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFNWR1JlbmRlcmVyID0gZnVuY3Rpb24gKF9SZW5kZXJlcikge1xuICBfaW5oZXJpdHMoU1ZHUmVuZGVyZXIsIF9SZW5kZXJlcik7XG5cbiAgZnVuY3Rpb24gU1ZHUmVuZGVyZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU1ZHUmVuZGVyZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIHZhciBfcHJvcHMkZWxlbWVudCRnZXRCQm8gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKTtcblxuICAgIHZhciB4ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLng7XG4gICAgdmFyIHkgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueTtcbiAgICB2YXIgd2lkdGggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ud2lkdGg7XG4gICAgdmFyIGhlaWdodCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby5oZWlnaHQ7XG5cbiAgICBfdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHsgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFNWR1JlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgdmFyIGF0dHJzID0gKDAsIF9idWlsZDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgdGhpcy5lbGVtZW50RGltZW5zaW9ucyk7XG4gICAgKDAsIF91dGlscy5zZXRET01BdHRycykoZWxlbWVudCwgYXR0cnMpO1xuICB9O1xuXG4gIFNWR1JlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cblxuICAgIGlmICghX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmFsdWVUeXBlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRba2V5XTtcbiAgICAgIHJldHVybiB2YWx1ZVR5cGUgPyB2YWx1ZVR5cGUuZGVmYXVsdCA6IDA7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTVkdSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dHJRa0ZuUTJVc1ZVRkJWU3hQUVVGV0xFVkJRVzFDTEV0QlFXNUNMRVZCUVRCQ08wRkJRM1pETEZOQlFVOHNTVUZCU1N4WFFVRktPMEZCUTB3N1FVRkVTeXhMUVVWR0xFdEJSa1VzUlVGQlVEdEJRVWxFTEVNN08wRkJja05FT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3pzN096czdTVUZGVFN4WE96czdRVUZEU2l4MVFrRkJXU3hMUVVGYUxFVkJRVzFDTzBGQlFVRTdPMEZCUVVFc2FVUkJRMnBDTEhGQ1FVRk5MRXRCUVU0c1EwRkVhVUk3TzBGQlFVRXNaME5CUjJVc1RVRkJUU3hQUVVGT0xFTkJRV01zVDBGQlpDeEZRVWhtT3p0QlFVRkJMRkZCUjFRc1EwRklVeXg1UWtGSFZDeERRVWhUTzBGQlFVRXNVVUZIVGl4RFFVaE5MSGxDUVVkT0xFTkJTRTA3UVVGQlFTeFJRVWRJTEV0QlNFY3NlVUpCUjBnc1MwRklSenRCUVVGQkxGRkJSMGtzVFVGSVNpeDVRa0ZIU1N4TlFVaEtPenRCUVVscVFpeFZRVUZMTEdsQ1FVRk1MRWRCUVhsQ0xFVkJRVVVzU1VGQlJpeEZRVUZMTEVsQlFVd3NSVUZCVVN4WlFVRlNMRVZCUVdVc1kwRkJaaXhGUVVGNlFqdEJRVXBwUWp0QlFVdHNRanM3ZDBKQlJVUXNVU3gxUWtGQlZ6dEJRVUZCTEZGQlEwUXNUMEZFUXl4SFFVTlhMRXRCUVVzc1MwRkVhRUlzUTBGRFJDeFBRVVJET3p0QlFVVlVMRkZCUVUwc1VVRkJVU3h4UWtGQlRTeExRVUZMTEV0QlFWZ3NSVUZCYTBJc1MwRkJTeXhwUWtGQmRrSXNRMEZCWkR0QlFVTkJMRFJDUVVGWkxFOUJRVm9zUlVGQmNVSXNTMEZCY2tJN1FVRkRSQ3hIT3p0M1FrRkZSQ3hOTEcxQ1FVRlBMRWNzUlVGQlN6dEJRVUZCTEZGQlEwWXNUMEZFUlN4SFFVTlZMRXRCUVVzc1MwRkVaaXhEUVVOR0xFOUJSRVU3T3p0QlFVZFdMRkZCUVVrc1EwRkJReXg1UWtGQlpTeEhRVUZtTEVOQlFVd3NSVUZCTUVJN1FVRkRlRUlzWVVGQlR5eFJRVUZSTEZsQlFWSXNRMEZCY1VJc1IwRkJja0lzUTBGQlVEdEJRVU5FTEV0QlJrUXNUVUZGVHp0QlFVTk1MRlZCUVUwc1dVRkJXU3h4UWtGQllTeEhRVUZpTEVOQlFXeENPMEZCUTBFc1lVRkJVU3hUUVVGRUxFZEJRV01zVlVGQlZTeFBRVUY0UWl4SFFVRnJReXhEUVVGNlF6dEJRVU5FTzBGQlEwWXNSeUlzSW1acGJHVWlPaUpwYm1SbGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCU1pXNWtaWEpsY2lCbWNtOXRJQ2N1TGk4bk8xeHVhVzF3YjNKMElHSjFhV3hrSUdaeWIyMGdKeTR2WW5WcGJHUW5PMXh1YVcxd2IzSjBJSFJ5WVc1elptOXliVkJ5YjNCeklHWnliMjBnSnk0dUwyTnpjeTkwY21GdWMyWnZjbTB0Y0hKdmNITW5PMXh1YVcxd2IzSjBJSFpoYkhWbFZIbHdaVTFoY0NCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekp6dGNibWx0Y0c5eWRDQjdJSE5sZEVSUFRVRjBkSEp6SUgwZ1puSnZiU0FuTGk0dkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyeGhjM01nVTFaSFVtVnVaR1Z5WlhJZ1pYaDBaVzVrY3lCU1pXNWtaWEpsY2lCN1hHNGdJR052Ym5OMGNuVmpkRzl5S0hCeWIzQnpLU0I3WEc0Z0lDQWdjM1Z3WlhJb2NISnZjSE1wTzF4dVhHNGdJQ0FnWTI5dWMzUWdleUI0TENCNUxDQjNhV1IwYUN3Z2FHVnBaMmgwSUgwZ1BTQndjbTl3Y3k1bGJHVnRaVzUwTG1kbGRFSkNiM2dvS1R0Y2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5SRWFXMWxibk5wYjI1eklEMGdleUI0TENCNUxDQjNhV1IwYUN3Z2FHVnBaMmgwSUgwN1hHNGdJSDFjYmx4dUlDQnZibEpsYm1SbGNpZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHVnNaVzFsYm5RZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdZMjl1YzNRZ1lYUjBjbk1nUFNCaWRXbHNaQ2gwYUdsekxuTjBZWFJsTENCMGFHbHpMbVZzWlcxbGJuUkVhVzFsYm5OcGIyNXpLVHRjYmlBZ0lDQnpaWFJFVDAxQmRIUnljeWhsYkdWdFpXNTBMQ0JoZEhSeWN5azdYRzRnSUgxY2JseHVJQ0J2YmxKbFlXUW9hMlY1S1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJsYkdWdFpXNTBJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2FXWWdLQ0YwY21GdWMyWnZjbTFRY205d2MxdHJaWGxkS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWld4bGJXVnVkQzVuWlhSQmRIUnlhV0oxZEdVb2EyVjVLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVlVlWEJsSUQwZ2RtRnNkV1ZVZVhCbFRXRndXMnRsZVYwN1hHNGdJQ0FnSUNCeVpYUjFjbTRnS0haaGJIVmxWSGx3WlNrZ1B5QjJZV3gxWlZSNWNHVXVaR1ZtWVhWc2RDQTZJREE3WEc0Z0lDQWdmVnh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJQ2hsYkdWdFpXNTBMQ0J3Y205d2N5a2dlMXh1SUNCeVpYUjFjbTRnYm1WM0lGTldSMUpsYm1SbGNtVnlLSHRjYmlBZ0lDQmxiR1Z0Wlc1MExGeHVJQ0FnSUM0dUxuQnliM0J6WEc0Z0lIMHBPMXh1ZlZ4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmcvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBTVkdQYXRoUmVuZGVyZXIoX2V4dGVuZHMoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFNWR1BhdGhSZW5kZXJlciA9IGZ1bmN0aW9uIChfUmVuZGVyZXIpIHtcbiAgX2luaGVyaXRzKFNWR1BhdGhSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBTVkdQYXRoUmVuZGVyZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU1ZHUGF0aFJlbmRlcmVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICB2YXIgX3Byb3BzJGVsZW1lbnQkZ2V0QkJvID0gcHJvcHMuZWxlbWVudC5nZXRCQm94KCk7XG5cbiAgICB2YXIgeCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby54O1xuICAgIHZhciB5ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLnk7XG4gICAgdmFyIHdpZHRoID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLndpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8uaGVpZ2h0O1xuXG4gICAgX3RoaXMuZWxlbWVudERpbWVuc2lvbnMgPSB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeSxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgcGF0aExlbmd0aDogcHJvcHMuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBTVkdQYXRoUmVuZGVyZXIucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgdmFyIHBhdGhMZW5ndGggPSB0aGlzLmVsZW1lbnREaW1lbnNpb25zLnBhdGhMZW5ndGg7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICAoMCwgX3V0aWxzLnNldERPTUF0dHJzKShlbGVtZW50LCAoMCwgX2J1aWxkMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCBwYXRoTGVuZ3RoKSk7XG4gIH07XG5cbiAgU1ZHUGF0aFJlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgfTtcblxuICByZXR1cm4gU1ZHUGF0aFJlbmRlcmVyO1xufShfMi5kZWZhdWx0KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MWEJoZEdndmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMnRDUVRaQ1pTeFZRVUZWTEU5QlFWWXNSVUZCYlVJc1MwRkJia0lzUlVGQk1FSTdRVUZEZGtNc1UwRkJUeXhKUVVGSkxHVkJRVW83UVVGRFREdEJRVVJMTEV0QlJVWXNTMEZHUlN4RlFVRlFPMEZCU1VRc1F6czdRVUZzUTBRN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdPenM3TzBsQlJVMHNaVHM3TzBGQlEwb3NNa0pCUVZrc1MwRkJXaXhGUVVGdFFqdEJRVUZCT3p0QlFVRkJMR2xFUVVOcVFpeHhRa0ZCVFN4TFFVRk9MRU5CUkdsQ096dEJRVUZCTEdkRFFVZGxMRTFCUVUwc1QwRkJUaXhEUVVGakxFOUJRV1FzUlVGSVpqczdRVUZCUVN4UlFVZFVMRU5CU0ZNc2VVSkJSMVFzUTBGSVV6dEJRVUZCTEZGQlIwNHNRMEZJVFN4NVFrRkhUaXhEUVVoTk8wRkJRVUVzVVVGSFNDeExRVWhITEhsQ1FVZElMRXRCU0VjN1FVRkJRU3hSUVVkSkxFMUJTRW9zZVVKQlIwa3NUVUZJU2pzN1FVRkpha0lzVlVGQlN5eHBRa0ZCVEN4SFFVRjVRanRCUVVOMlFpeFZRVVIxUWp0QlFVVjJRaXhWUVVaMVFqdEJRVWQyUWl4clFrRklkVUk3UVVGSmRrSXNiMEpCU25WQ08wRkJTM1pDTEd0Q1FVRlpMRTFCUVUwc1QwRkJUaXhEUVVGakxHTkJRV1E3UVVGTVZ5eExRVUY2UWp0QlFVcHBRanRCUVZkc1FqczdORUpCUlVRc1VTeDFRa0ZCVnp0QlFVRkJMRkZCUTBRc1ZVRkVReXhIUVVOakxFdEJRVXNzYVVKQlJHNUNMRU5CUTBRc1ZVRkVRenRCUVVGQkxGRkJSVVFzVDBGR1F5eEhRVVZYTEV0QlFVc3NTMEZHYUVJc1EwRkZSQ3hQUVVaRE96dEJRVWRVTERSQ1FVRlpMRTlCUVZvc1JVRkJjVUlzY1VKQlFVMHNTMEZCU3l4TFFVRllMRVZCUVd0Q0xGVkJRV3hDTEVOQlFYSkNPMEZCUTBRc1J6czdORUpCUlVRc1RTeHRRa0ZCVHl4SExFVkJRVXM3UVVGRFZpeFhRVUZQTEV0QlFVc3NTMEZCVEN4RFFVRlhMRTlCUVZnc1EwRkJiVUlzV1VGQmJrSXNRMEZCWjBNc1IwRkJhRU1zUTBGQlVEdEJRVU5FTEVjaUxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdVbVZ1WkdWeVpYSWdabkp2YlNBbkxpNHZKenRjYm1sdGNHOXlkQ0JpZFdsc1pDQm1jbTl0SUNjdUwySjFhV3hrSnp0Y2JtbHRjRzl5ZENCN0lITmxkRVJQVFVGMGRISnpJSDBnWm5KdmJTQW5MaTR2TGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTJ4aGMzTWdVMVpIVUdGMGFGSmxibVJsY21WeUlHVjRkR1Z1WkhNZ1VtVnVaR1Z5WlhJZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeWtnZTF4dUlDQWdJSE4xY0dWeUtIQnliM0J6S1R0Y2JseHVJQ0FnSUdOdmJuTjBJSHNnZUN3Z2VTd2dkMmxrZEdnc0lHaGxhV2RvZENCOUlEMGdjSEp2Y0hNdVpXeGxiV1Z1ZEM1blpYUkNRbTk0S0NrN1hHNGdJQ0FnZEdocGN5NWxiR1Z0Wlc1MFJHbHRaVzV6YVc5dWN5QTlJSHRjYmlBZ0lDQWdJSGdzWEc0Z0lDQWdJQ0I1TEZ4dUlDQWdJQ0FnZDJsa2RHZ3NYRzRnSUNBZ0lDQm9aV2xuYUhRc1hHNGdJQ0FnSUNCd1lYUm9UR1Z1WjNSb09pQndjbTl3Y3k1bGJHVnRaVzUwTG1kbGRGUnZkR0ZzVEdWdVozUm9LQ2xjYmlBZ0lDQjlPMXh1SUNCOVhHNWNiaUFnYjI1U1pXNWtaWElvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJ3WVhSb1RHVnVaM1JvSUgwZ1BTQjBhR2x6TG1Wc1pXMWxiblJFYVcxbGJuTnBiMjV6TzF4dUlDQWdJR052Ym5OMElIc2daV3hsYldWdWRDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0J6WlhSRVQwMUJkSFJ5Y3lobGJHVnRaVzUwTENCaWRXbHNaQ2gwYUdsekxuTjBZWFJsTENCd1lYUm9UR1Z1WjNSb0tTazdYRzRnSUgxY2JseHVJQ0J2YmxKbFlXUW9hMlY1S1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWNISnZjSE11Wld4bGJXVnVkQzVuWlhSQmRIUnlhV0oxZEdVb2EyVjVLVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUFvWld4bGJXVnVkQ3dnY0hKdmNITXBJSHRjYmlBZ2NtVjBkWEp1SUc1bGR5QlRWa2RRWVhSb1VtVnVaR1Z5WlhJb2UxeHVJQ0FnSUdWc1pXMWxiblFzWEc0Z0lDQWdMaTR1Y0hKdmNITmNiaUFnZlNrN1hHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3BsaXRDb2xvclZhbHVlcyA9IHNwbGl0Q29sb3JWYWx1ZXM7XG52YXIgdmFyVHlwZSA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG59O1xuXG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjYW1lbFRvRGFzaCA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG4vKlxuICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICBcbiAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbnZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG59IDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG52YXIgc2V0RE9NQXR0cnMgPSBleHBvcnRzLnNldERPTUF0dHJzID0gZnVuY3Rpb24gKGVsZW1lbnQsIGF0dHJzKSB7XG4gIGZvciAodmFyIGtleSBpbiBhdHRycykge1xuICAgIGlmIChhdHRycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuICAgIH1cbiAgfVxufTtcbi8qXG4gIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcbn07XG5cbi8qKlxuICogIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgYW55IGFyZ3VtZW50IGZvciBgdGVybWBcbiAqIGBjb250YWlucygnbmVlZGxlJykoJ2hheXN0YWNrJylgXG4gKi9cbnZhciBjb250YWlucyA9IGV4cG9ydHMuY29udGFpbnMgPSBmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pICE9PSAtMTtcbiAgfTtcbn07XG5cbi8qKlxuICogIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgdG8gc2VlIGlmIGFuIGFyZ3VtZW50IGlzXG4gKiAgdGhlIGZpcnN0IGNoYXJhY3RlcnMgaW4gdGhlIHByb3ZpZGVkIGB0ZXJtYFxuICogYGlzRmlyc3RDaGFycygnbmVlZGxlJykoJ2hheXN0YWNrJylgXG4gKi9cbnZhciBpc0ZpcnN0Q2hhcnMgPSBleHBvcnRzLmlzRmlyc3RDaGFycyA9IGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBpc1N0cmluZyh0ZXJtKSAmJiB2LmluZGV4T2YodGVybSkgPT09IDA7XG4gIH07XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHVuaXQgdmFsdWUgdHlwZVxuICovXG52YXIgY3JlYXRlVW5pdFR5cGUgPSBleHBvcnRzLmNyZWF0ZVVuaXRUeXBlID0gZnVuY3Rpb24gKHR5cGUsIHRyYW5zZm9ybSkge1xuICByZXR1cm4ge1xuICAgIHRlc3Q6IGNvbnRhaW5zKHR5cGUpLFxuICAgIHBhcnNlOiBwYXJzZUZsb2F0LFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gIH07XG59O1xuXG4vKlxuICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcbiAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG52YXIgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgc3BsaXQgY29sb3JcbiAqIHZhbHVlcyBmcm9tIHN0cmluZyBpbnRvIGFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXG4gKiBgbWFwQXJyYXlUb09iamVjdChbJ3JlZCcsICdncmVlbicsICdibHVlJ10pKCdyZ2JhKDAsMCwwKScpYFxuICovXG5mdW5jdGlvbiBzcGxpdENvbG9yVmFsdWVzKHRlcm1zKSB7XG4gIHZhciBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcblxuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgdmFsdWVzID0ge307XG4gICAgdmFyIHZhbHVlc0FycmF5ID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2KSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgIHZhbHVlc1t0ZXJtc1tpXV0gPSB2YWx1ZXNBcnJheVtpXSAhPT0gdW5kZWZpbmVkID8gcGFyc2VGbG9hdCh2YWx1ZXNBcnJheVtpXSkgOiAxO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH07XG59XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbnZhciBpc0FycmF5ID0gZXhwb3J0cy5pc0FycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG52YXIgaXNGdW5jID0gZXhwb3J0cy5pc0Z1bmMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xudmFyIGlzTnVtID0gZXhwb3J0cy5pc051bSA9IGZ1bmN0aW9uIChudW0pIHtcbiAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG52YXIgaXNPYmogPSBleHBvcnRzLmlzT2JqID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xudmFyIGlzU3RyaW5nID0gZXhwb3J0cy5pc1N0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufTtcblxudmFyIGlzSGV4ID0gZXhwb3J0cy5pc0hleCA9IGlzRmlyc3RDaGFycygnIycpO1xudmFyIGlzUmdiID0gZXhwb3J0cy5pc1JnYiA9IGlzRmlyc3RDaGFycygncmdiJyk7XG52YXIgaXNIc2wgPSBleHBvcnRzLmlzSHNsID0gaXNGaXJzdENoYXJzKCdoc2wnKTtcbnZhciBpc0NvbG9yID0gZXhwb3J0cy5pc0NvbG9yID0gZnVuY3Rpb24gKHYpIHtcbiAgcmV0dXJuIGlzSGV4KHYpIHx8IGlzUmdiKHYpIHx8IGlzSHNsKHYpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkWFJwYkhNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMUZCTmtWblFpeG5RaXhIUVVGQkxHZENPMEZCTjBWb1FpeEpRVUZOTEZWQlFWVXNWVUZCUXl4UlFVRkVPMEZCUVVFc1UwRkJZeXhQUVVGUExGTkJRVkFzUTBGQmFVSXNVVUZCYWtJc1EwRkJNRUlzU1VGQk1VSXNRMEZCSzBJc1VVRkJMMElzUlVGQmVVTXNTMEZCZWtNc1EwRkJLME1zUTBGQkwwTXNSVUZCYTBRc1EwRkJReXhEUVVGdVJDeERRVUZrTzBGQlFVRXNRMEZCYUVJN08wRkJSVUVzU1VGQlRTeHhRa0ZCY1VJc2FVSkJRVE5DTzBGQlEwRXNTVUZCVFN4dFFrRkJiVUlzVDBGQmVrSTdRVUZEUVN4SlFVRk5MSE5DUVVGMVFpeFBRVUZQTEZkQlFWQXNTMEZCZFVJc1YwRkJka0lzU1VGQmMwTXNXVUZCV1N4SFFVRXZSVHM3T3pzN096czdRVUZSVHl4SlFVRk5MRzlEUVVGakxGVkJRVU1zVFVGQlJEdEJRVUZCTEZOQlFWa3NUMEZCVHl4UFFVRlFMRU5CUVdVc2EwSkJRV1lzUlVGQmJVTXNaMEpCUVc1RExFVkJRWEZFTEZkQlFYSkVMRVZCUVZvN1FVRkJRU3hEUVVGd1FqczdPenM3T3p0QlFVOUJMRWxCUVUwc2IwTkJRV01zYzBKQlFYTkNPMEZCUVVFc1UwRkJUU3haUVVGWkxFZEJRVm9zUlVGQlRqdEJRVUZCTEVOQlFYUkNMRWRCUVdkRU8wRkJRVUVzVTBGQlRTeEpRVUZKTEVsQlFVb3NSMEZCVnl4UFFVRllMRVZCUVU0N1FVRkJRU3hEUVVGd1JUczdRVUZGUVN4SlFVRk5MRzlEUVVGakxGVkJRVU1zVDBGQlJDeEZRVUZWTEV0QlFWWXNSVUZCYjBJN1FVRkROME1zVDBGQlN5eEpRVUZKTEVkQlFWUXNTVUZCWjBJc1MwRkJhRUlzUlVGQmRVSTdRVUZEY2tJc1VVRkJTU3hOUVVGTkxHTkJRVTRzUTBGQmNVSXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU0zUWl4alFVRlJMRmxCUVZJc1EwRkJjVUlzUjBGQmNrSXNSVUZCTUVJc1RVRkJUU3hIUVVGT0xFTkJRVEZDTzBGQlEwUTdRVUZEUmp0QlFVTkdMRU5CVGswN096czdPenM3T3p0QlFXVkJMRWxCUVUwc2IwUkJRWE5DTEZWQlFVTXNTMEZCUkR0QlFVRkJMRk5CUVZjc1UwRkJVeXhMUVVGVUxFbEJRV3RDTEUxQlFVMHNTMEZCVGl4RFFVRlpMRTFCUVZvc1EwRkJiRUlzUjBGQmQwTXNRMEZCUXl4TFFVRkVMRU5CUVc1RU8wRkJRVUVzUTBGQk5VSTdPenM3T3p0QlFVMUJMRWxCUVUwc09FSkJRVmNzVlVGQlF5eEpRVUZFTzBGQlFVRXNVMEZCVlN4VlFVRkRMRU5CUVVRc1JVRkJUenRCUVVOMlF5eFhRVUZSTEZOQlFWTXNTVUZCVkN4TFFVRnJRaXhGUVVGRkxFOUJRVVlzUTBGQlZTeEpRVUZXTEUxQlFXOUNMRU5CUVVNc1EwRkJMME03UVVGRFJDeEhRVVoxUWp0QlFVRkJMRU5CUVdwQ096czdPenM3TzBGQlUwRXNTVUZCVFN4elEwRkJaU3hWUVVGRExFbEJRVVE3UVVGQlFTeFRRVUZWTEZWQlFVTXNRMEZCUkN4RlFVRlBPMEZCUXpORExGZEJRVkVzVTBGQlV5eEpRVUZVTEV0QlFXdENMRVZCUVVVc1QwRkJSaXhEUVVGVkxFbEJRVllzVFVGQmIwSXNRMEZCT1VNN1FVRkRSQ3hIUVVZeVFqdEJRVUZCTEVOQlFYSkNPenM3T3p0QlFVOUJMRWxCUVUwc01FTkJRV2xDTEZWQlFVTXNTVUZCUkN4RlFVRlBMRk5CUVZBc1JVRkJjVUk3UVVGRGFrUXNVMEZCVHp0QlFVTk1MRlZCUVUwc1UwRkJVeXhKUVVGVUxFTkJSRVE3UVVGRlRDeFhRVUZQTEZWQlJrWTdRVUZIVER0QlFVaExMRWRCUVZBN1FVRkxSQ3hEUVU1Tk96czdPenM3UVVGWlFTeEpRVUZOTEd0RlFVRTJRaXhWUVVGRExFdEJRVVE3UVVGQlFTeFRRVUZYTEUxQlFVMHNVMEZCVGl4RFFVRm5RaXhOUVVGTkxFOUJRVTRzUTBGQll5eEhRVUZrTEVsQlFYRkNMRU5CUVhKRExFVkJRWGRETEUxQlFVMHNWMEZCVGl4RFFVRnJRaXhIUVVGc1FpeERRVUY0UXl4RFFVRllPMEZCUVVFc1EwRkJia003T3pzN096czdRVUZQUVN4VFFVRlRMR2RDUVVGVUxFTkJRVEJDTEV0QlFURkNMRVZCUVdsRE8wRkJRM1JETEUxQlFVMHNWMEZCVnl4TlFVRk5MRTFCUVhaQ096dEJRVVZCTEZOQlFVOHNWVUZCVlN4RFFVRldMRVZCUVdFN1FVRkRiRUlzVVVGQlRTeFRRVUZUTEVWQlFXWTdRVUZEUVN4UlFVRk5MR05CUVdNc2IwSkJRVzlDTERKQ1FVRXlRaXhEUVVFelFpeERRVUZ3UWl4RFFVRndRanM3UVVGRlFTeFRRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRmlMRVZCUVdkQ0xFbEJRVWtzVVVGQmNFSXNSVUZCT0VJc1IwRkJPVUlzUlVGQmJVTTdRVUZEYWtNc1lVRkJUeXhOUVVGTkxFTkJRVTRzUTBGQlVDeEpRVUZ2UWl4WlFVRlpMRU5CUVZvc1RVRkJiVUlzVTBGQmNFSXNSMEZCYVVNc1YwRkJWeXhaUVVGWkxFTkJRVm9zUTBGQldDeERRVUZxUXl4SFFVRTRSQ3hEUVVGcVJqdEJRVU5FT3p0QlFVVkVMRmRCUVU4c1RVRkJVRHRCUVVORUxFZEJWRVE3UVVGVlJEczdPenM3T3pzN1FVRlJUU3hKUVVGTkxEUkNRVUZWTEZWQlFVTXNSMEZCUkR0QlFVRkJMRk5CUVZNc1VVRkJVU3hIUVVGU0xFMUJRV2xDTEU5QlFURkNPMEZCUVVFc1EwRkJhRUk3T3pzN096czdPMEZCVVVFc1NVRkJUU3d3UWtGQlV5eFZRVUZETEVkQlFVUTdRVUZCUVN4VFFVRlRMRkZCUVZFc1IwRkJVaXhOUVVGcFFpeFZRVUV4UWp0QlFVRkJMRU5CUVdZN096czdPenM3TzBGQlVVRXNTVUZCVFN4M1FrRkJVU3hWUVVGRExFZEJRVVE3UVVGQlFTeFRRVUZUTEU5QlFVOHNSMEZCVUN4TFFVRmxMRkZCUVhoQ08wRkJRVUVzUTBGQlpEczdPenM3T3pzN1FVRlJRU3hKUVVGTkxIZENRVUZSTEZWQlFVTXNSMEZCUkR0QlFVRkJMRk5CUVZNc1QwRkJUeXhIUVVGUUxFdEJRV1VzVVVGQmVFSTdRVUZCUVN4RFFVRmtPenM3T3pzN096dEJRVkZCTEVsQlFVMHNPRUpCUVZjc1ZVRkJReXhIUVVGRU8wRkJRVUVzVTBGQlV5eFBRVUZQTEVkQlFWQXNTMEZCWlN4UlFVRjRRanRCUVVGQkxFTkJRV3BDT3p0QlFVVkJMRWxCUVUwc2QwSkJRVkVzWVVGQllTeEhRVUZpTEVOQlFXUTdRVUZEUVN4SlFVRk5MSGRDUVVGUkxHRkJRV0VzUzBGQllpeERRVUZrTzBGQlEwRXNTVUZCVFN4M1FrRkJVU3hoUVVGaExFdEJRV0lzUTBGQlpEdEJRVU5CTEVsQlFVMHNORUpCUVZVc1ZVRkJReXhEUVVGRU8wRkJRVUVzVTBGQlVTeE5RVUZOTEVOQlFVNHNTMEZCV1N4TlFVRk5MRU5CUVU0c1EwRkJXaXhKUVVGM1FpeE5RVUZOTEVOQlFVNHNRMEZCYUVNN1FVRkJRU3hEUVVGb1FpSXNJbVpwYkdVaU9pSjFkR2xzY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1OdmJuTjBJSFpoY2xSNWNHVWdQU0FvZG1GeWFXRmliR1VwSUQwK0lFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWRHOVRkSEpwYm1jdVkyRnNiQ2gyWVhKcFlXSnNaU2t1YzJ4cFkyVW9PQ3dnTFRFcE8xeHVYRzVqYjI1emRDQkRRVTFGVEY5RFFWTkZYMUJCVkZSRlVrNGdQU0F2S0Z0aExYcGRLU2hiUVMxYVhTa3ZaenRjYm1OdmJuTjBJRkpGVUV4QlEwVmZWRVZOVUV4QlZFVWdQU0FuSkRFdEpESW5PMXh1WTI5dWMzUWdTRUZUWDFCRlVrWlBVazFCVGtORlgwNVBWeUE5SUNoMGVYQmxiMllnY0dWeVptOXliV0Z1WTJVZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIQmxjbVp2Y20xaGJtTmxMbTV2ZHlrN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ1kyRnRaV3hEWVhObElIUnZJR1JoYzJndFkyRnpaVnh1WEc0Z0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQkFjbVYwZFhKdUlGdHpkSEpwYm1kZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHTmhiV1ZzVkc5RVlYTm9JRDBnS0hOMGNtbHVaeWtnUFQ0Z2MzUnlhVzVuTG5KbGNHeGhZMlVvUTBGTlJVeGZRMEZUUlY5UVFWUlVSVkpPTENCU1JWQk1RVU5GWDFSRlRWQk1RVlJGS1M1MGIweHZkMlZ5UTJGelpTZ3BPMXh1WEc0dktseHVJQ0JIWlc1bGNtRjBaU0JqZFhKeVpXNTBJSFJwYldWemRHRnRjRnh1SUNCY2JpQWdRSEpsZEhWeWJpQmJkR2x0WlhOMFlXMXdYVG9nUTNWeWNtVnVkQ0JWVGtsWUlIUnBiV1Z6ZEdGdGNGeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpkWEp5Wlc1MFZHbHRaU0E5SUVoQlUxOVFSVkpHVDFKTlFVNURSVjlPVDFjZ1B5QW9LU0E5UGlCd1pYSm1iM0p0WVc1alpTNXViM2NvS1NBNklDZ3BJRDArSUc1bGR5QkVZWFJsS0NrdVoyVjBWR2x0WlNncE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2MyVjBSRTlOUVhSMGNuTWdQU0FvWld4bGJXVnVkQ3dnWVhSMGNuTXBJRDArSUh0Y2JpQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlHRjBkSEp6S1NCN1hHNGdJQ0FnYVdZZ0tHRjBkSEp6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lHVnNaVzFsYm5RdWMyVjBRWFIwY21saWRYUmxLR3RsZVN3Z1lYUjBjbk5iYTJWNVhTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OU8xeHVMeXBjYmlBZ1UzQnNhWFFnWTI5dGJXRXRaR1ZzYVcxcGRHVmtJSE4wY21sdVoxeHVYRzRnSUZ3aVptOXZMR0poY2x3aUlDMCtJRnRjSW1admIxd2lMQ0JjSW1KaGNsd2lYVnh1WEc0Z0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQkFjbVYwZFhKdUlGdGhjbkpoZVYxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQnNhWFJEYjIxdFlVUmxiR2x0YVhSbFpDQTlJQ2gyWVd4MVpTa2dQVDRnYVhOVGRISnBibWNvZG1Gc2RXVXBJRDhnZG1Gc2RXVXVjM0JzYVhRb0x5eGNYSE1xTHlrZ09pQmJkbUZzZFdWZE8xeHVYRzR2S2lwY2JpQXFJQ0JTWlhSMWNtNXpJR0VnWm5WdVkzUnBiMjRnZEdoaGRDQjNhV3hzSUdOb1pXTnJJR0Z1ZVNCaGNtZDFiV1Z1ZENCbWIzSWdZSFJsY20xZ1hHNGdLaUJnWTI5dWRHRnBibk1vSjI1bFpXUnNaU2NwS0Nkb1lYbHpkR0ZqYXljcFlGeHVJQ292WEc1bGVIQnZjblFnWTI5dWMzUWdZMjl1ZEdGcGJuTWdQU0FvZEdWeWJTa2dQVDRnS0hZcElEMCtJSHRjYmlBZ2NtVjBkWEp1SUNocGMxTjBjbWx1WnloMFpYSnRLU0FtSmlCMkxtbHVaR1Y0VDJZb2RHVnliU2tnSVQwOUlDMHhLVHRjYm4wN1hHNWNiaThxS2x4dUlDb2dJRkpsZEhWeWJuTWdZU0JtZFc1amRHbHZiaUIwYUdGMElIZHBiR3dnWTJobFkyc2dkRzhnYzJWbElHbG1JR0Z1SUdGeVozVnRaVzUwSUdselhHNGdLaUFnZEdobElHWnBjbk4wSUdOb1lYSmhZM1JsY25NZ2FXNGdkR2hsSUhCeWIzWnBaR1ZrSUdCMFpYSnRZRnh1SUNvZ1lHbHpSbWx5YzNSRGFHRnljeWduYm1WbFpHeGxKeWtvSjJoaGVYTjBZV05ySnlsZ1hHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMFpwY25OMFEyaGhjbk1nUFNBb2RHVnliU2tnUFQ0Z0tIWXBJRDArSUh0Y2JpQWdjbVYwZFhKdUlDaHBjMU4wY21sdVp5aDBaWEp0S1NBbUppQjJMbWx1WkdWNFQyWW9kR1Z5YlNrZ1BUMDlJREFwTzF4dWZUdGNibHh1THlvcVhHNGdLaUJEY21WaGRHVWdZU0IxYm1sMElIWmhiSFZsSUhSNWNHVmNiaUFxTDF4dVpYaHdiM0owSUdOdmJuTjBJR055WldGMFpWVnVhWFJVZVhCbElEMGdLSFI1Y0dVc0lIUnlZVzV6Wm05eWJTa2dQVDRnZTF4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUhSbGMzUTZJR052Ym5SaGFXNXpLSFI1Y0dVcExGeHVJQ0FnSUhCaGNuTmxPaUJ3WVhKelpVWnNiMkYwTEZ4dUlDQWdJSFJ5WVc1elptOXliVnh1SUNCOU8xeHVmVHRjYmx4dUx5cGNiaUFnUjJWMElIWmhiSFZsSUdaeWIyMGdablZ1WTNScGIyNGdjM1J5YVc1blhHNGdJRndpZEhKaGJuTnNZWFJsV0NneU1IQjRLVndpSUMwK0lGd2lNakJ3ZUZ3aVhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHZGxkRlpoYkhWbFJuSnZiVVoxYm1OMGFXOXVVM1J5YVc1bklEMGdLSFpoYkhWbEtTQTlQaUIyWVd4MVpTNXpkV0p6ZEhKcGJtY29kbUZzZFdVdWFXNWtaWGhQWmlnbktDY3BJQ3NnTVN3Z2RtRnNkV1V1YkdGemRFbHVaR1Y0VDJZb0p5a25LU2s3WEc1Y2JpOHFLbHh1SUNvZ1EzSmxZWFJsY3lCaElHWjFibU4wYVc5dUlIUm9ZWFFnZDJsc2JDQnpjR3hwZENCamIyeHZjbHh1SUNvZ2RtRnNkV1Z6SUdaeWIyMGdjM1J5YVc1bklHbHVkRzhnWVc0Z2IySnFaV04wSUc5bUlIQnliM0JsY25ScFpYTmNiaUFxSUdCdFlYQkJjbkpoZVZSdlQySnFaV04wS0ZzbmNtVmtKeXdnSjJkeVpXVnVKeXdnSjJKc2RXVW5YU2tvSjNKblltRW9NQ3d3TERBcEp5bGdYRzRnS2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCemNHeHBkRU52Ykc5eVZtRnNkV1Z6S0hSbGNtMXpLU0I3WEc0Z0lHTnZibk4wSUc1MWJWUmxjbTF6SUQwZ2RHVnliWE11YkdWdVozUm9PMXh1WEc0Z0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlBb2Rpa2dlMXh1SUNBZ0lHTnZibk4wSUhaaGJIVmxjeUE5SUh0OU8xeHVJQ0FnSUdOdmJuTjBJSFpoYkhWbGMwRnljbUY1SUQwZ2MzQnNhWFJEYjIxdFlVUmxiR2x0YVhSbFpDaG5aWFJXWVd4MVpVWnliMjFHZFc1amRHbHZibE4wY21sdVp5aDJLU2s3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJWUmxjbTF6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJSFpoYkhWbGMxdDBaWEp0YzF0cFhWMGdQU0FvZG1Gc2RXVnpRWEp5WVhsYmFWMGdJVDA5SUhWdVpHVm1hVzVsWkNrZ1B5QndZWEp6WlVac2IyRjBLSFpoYkhWbGMwRnljbUY1VzJsZEtTQTZJREU3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIWmhiSFZsY3p0Y2JpQWdmVHRjYm4xY2JseHVMeXBjYmlBZ1NYTWdkWFJwYkhNZ2RtRnlJR0Z1SUdGeWNtRjVJRDhnWEc0Z0lGeHVJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIxZEdsc2N5NTJZWEpVZVhCbElEMDlQU0FuUVhKeVlYa25YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6UVhKeVlYa2dQU0FvWVhKeUtTQTlQaUIyWVhKVWVYQmxLR0Z5Y2lrZ1BUMDlJQ2RCY25KaGVTYzdYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaElHWjFibU4wYVc5dUlEOGdYRzRnSUZ4dUlDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjFkR2xzY3k1MllYSlVlWEJsSUQwOVBTQW5SblZ1WTNScGIyNG5YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6Um5WdVl5QTlJQ2h2WW1vcElEMCtJSFpoY2xSNWNHVW9iMkpxS1NBOVBUMGdKMFoxYm1OMGFXOXVKenRjYmx4dUx5cGNiaUFnU1hNZ2RYUnBiSE1nZG1GeUlHRWdiblZ0WW1WeVAxeHVJQ0JjYmlBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RIbHdaVzltSUQwOVBTQW5iblZ0WW1WeUoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMDUxYlNBOUlDaHVkVzBwSUQwK0lIUjVjR1Z2WmlCdWRXMGdQVDA5SUNkdWRXMWlaWEluTzF4dVhHNHZLbHh1SUNCSmN5QjFkR2xzY3lCMllYSWdZVzRnYjJKcVpXTjBQMXh1SUNCY2JpQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkSGx3Wlc5bUlEMDlQU0FuYjJKcVpXTjBKMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzA5aWFpQTlJQ2h2WW1vcElEMCtJSFI1Y0dWdlppQnZZbW9nUFQwOUlDZHZZbXBsWTNRbk8xeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVNCemRISnBibWNnUHlCY2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUJ6ZEhJZ1BUMDlJQ2R6ZEhKcGJtY25YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VTNSeWFXNW5JRDBnS0hOMGNpa2dQVDRnZEhsd1pXOW1JSE4wY2lBOVBUMGdKM04wY21sdVp5YzdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnBjMGhsZUNBOUlHbHpSbWx5YzNSRGFHRnljeWduSXljcE8xeHVaWGh3YjNKMElHTnZibk4wSUdselVtZGlJRDBnYVhOR2FYSnpkRU5vWVhKektDZHlaMkluS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzBoemJDQTlJR2x6Um1seWMzUkRhR0Z5Y3lnbmFITnNKeWs3WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5EYjJ4dmNpQTlJQ2gyS1NBOVBpQW9hWE5JWlhnb2Rpa2dmSHdnYVhOU1oySW9kaWtnZkh3Z2FYTkljMndvZGlrcE8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb2xvciA9IGV4cG9ydHMuaHNsYSA9IGV4cG9ydHMucmdiYSA9IGV4cG9ydHMuaGV4ID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgaGV4ID0gZXhwb3J0cy5oZXggPSBmdW5jdGlvbiAodikge1xuICB2YXIgciA9IHZvaWQgMCxcbiAgICAgIGcgPSB2b2lkIDAsXG4gICAgICBiID0gdm9pZCAwO1xuXG4gIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gIGlmICh2Lmxlbmd0aCA+IDQpIHtcbiAgICByID0gdi5zdWJzdHIoMSwgMik7XG4gICAgZyA9IHYuc3Vic3RyKDMsIDIpO1xuICAgIGIgPSB2LnN1YnN0cig1LCAyKTtcblxuICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gIH0gZWxzZSB7XG4gICAgciA9IHYuc3Vic3RyKDEsIDEpO1xuICAgIGcgPSB2LnN1YnN0cigyLCAxKTtcbiAgICBiID0gdi5zdWJzdHIoMywgMSk7XG4gICAgciArPSByO1xuICAgIGcgKz0gZztcbiAgICBiICs9IGI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgIGdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgYmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgIGFscGhhOiAxXG4gIH07XG59O1xuXG52YXIgcmdiYSA9IGV4cG9ydHMucmdiYSA9ICgwLCBfdXRpbHMuc3BsaXRDb2xvclZhbHVlcykoWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZScsICdhbHBoYSddKTtcblxudmFyIGhzbGEgPSBleHBvcnRzLmhzbGEgPSAoMCwgX3V0aWxzLnNwbGl0Q29sb3JWYWx1ZXMpKFsnaHVlJywgJ3NhdHVyYXRpb24nLCAnbGlnaHRuZXNzJywgJ2FscGhhJ10pO1xuXG52YXIgY29sb3IgPSBleHBvcnRzLmNvbG9yID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCgwLCBfdXRpbHMuaXNSZ2IpKHYpKSB7XG4gICAgcmV0dXJuIHJnYmEodik7XG4gIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc0hleCkodikpIHtcbiAgICByZXR1cm4gaGV4KHYpO1xuICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNIc2wpKHYpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cblxuICByZXR1cm4gdjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12Y0dGeWMyVnljeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCT3p0QlFVVlBMRWxCUVUwc2IwSkJRVTBzVlVGQlF5eERRVUZFTEVWQlFVODdRVUZEZUVJc1RVRkJTU3hWUVVGS08wRkJRVUVzVFVGQlR5eFZRVUZRTzBGQlFVRXNUVUZCVlN4VlFVRldPenM3UVVGSFFTeE5RVUZKTEVWQlFVVXNUVUZCUml4SFFVRlhMRU5CUVdZc1JVRkJhMEk3UVVGRGFFSXNVVUZCU1N4RlFVRkZMRTFCUVVZc1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQldpeERRVUZLTzBGQlEwRXNVVUZCU1N4RlFVRkZMRTFCUVVZc1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQldpeERRVUZLTzBGQlEwRXNVVUZCU1N4RlFVRkZMRTFCUVVZc1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQldpeERRVUZLT3pzN1FVRkhSQ3hIUVU1RUxFMUJUVTg3UVVGRFRDeFJRVUZKTEVWQlFVVXNUVUZCUml4RFFVRlRMRU5CUVZRc1JVRkJXU3hEUVVGYUxFTkJRVW83UVVGRFFTeFJRVUZKTEVWQlFVVXNUVUZCUml4RFFVRlRMRU5CUVZRc1JVRkJXU3hEUVVGYUxFTkJRVW83UVVGRFFTeFJRVUZKTEVWQlFVVXNUVUZCUml4RFFVRlRMRU5CUVZRc1JVRkJXU3hEUVVGYUxFTkJRVW83UVVGRFFTeFRRVUZMTEVOQlFVdzdRVUZEUVN4VFFVRkxMRU5CUVV3N1FVRkRRU3hUUVVGTExFTkJRVXc3UVVGRFJEczdRVUZGUkN4VFFVRlBPMEZCUTB3c1UwRkJTeXhUUVVGVExFTkJRVlFzUlVGQldTeEZRVUZhTEVOQlJFRTdRVUZGVEN4WFFVRlBMRk5CUVZNc1EwRkJWQ3hGUVVGWkxFVkJRVm9zUTBGR1JqdEJRVWRNTEZWQlFVMHNVMEZCVXl4RFFVRlVMRVZCUVZrc1JVRkJXaXhEUVVoRU8wRkJTVXdzVjBGQlR6dEJRVXBHTEVkQlFWQTdRVUZOUkN4RFFYcENUVHM3UVVFeVFrRXNTVUZCVFN4elFrRkJUeXcyUWtGQmFVSXNRMEZCUXl4TFFVRkVMRVZCUVZFc1QwRkJVaXhGUVVGcFFpeE5RVUZxUWl4RlFVRjVRaXhQUVVGNlFpeERRVUZxUWl4RFFVRmlPenRCUVVWQkxFbEJRVTBzYzBKQlFVOHNOa0pCUVdsQ0xFTkJRVU1zUzBGQlJDeEZRVUZSTEZsQlFWSXNSVUZCYzBJc1YwRkJkRUlzUlVGQmJVTXNUMEZCYmtNc1EwRkJha0lzUTBGQllqczdRVUZGUVN4SlFVRk5MSGRDUVVGUkxGVkJRVU1zUTBGQlJDeEZRVUZQTzBGQlF6RkNMRTFCUVVrc2EwSkJRVTBzUTBGQlRpeERRVUZLTEVWQlFXTTdRVUZEV2l4WFFVRlBMRXRCUVVzc1EwRkJUQ3hEUVVGUU8wRkJRMFFzUjBGR1JDeE5RVVZQTEVsQlFVa3NhMEpCUVUwc1EwRkJUaXhEUVVGS0xFVkJRV003UVVGRGJrSXNWMEZCVHl4SlFVRkpMRU5CUVVvc1EwRkJVRHRCUVVORUxFZEJSazBzVFVGRlFTeEpRVUZKTEd0Q1FVRk5MRU5CUVU0c1EwRkJTaXhGUVVGak8wRkJRMjVDTEZkQlFVOHNTMEZCU3l4RFFVRk1MRU5CUVZBN1FVRkRSRHM3UVVGRlJDeFRRVUZQTEVOQlFWQTdRVUZEUkN4RFFWWk5JaXdpWm1sc1pTSTZJbkJoY25ObGNuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnpjR3hwZEVOdmJHOXlWbUZzZFdWekxDQnBjMUpuWWl3Z2FYTklaWGdzSUdselNITnNJSDBnWm5KdmJTQW5MaTkxZEdsc2N5YzdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQm9aWGdnUFNBb2Rpa2dQVDRnZTF4dUlDQnNaWFFnY2l3Z1p5d2dZanRjYmx4dUlDQXZMeUJKWmlCM1pTQm9ZWFpsSURZZ1kyaGhjbUZqZEdWeWN5d2dhV1VnSTBaR01EQXdNRnh1SUNCcFppQW9kaTVzWlc1bmRHZ2dQaUEwS1NCN1hHNGdJQ0FnY2lBOUlIWXVjM1ZpYzNSeUtERXNJRElwTzF4dUlDQWdJR2NnUFNCMkxuTjFZbk4wY2lnekxDQXlLVHRjYmlBZ0lDQmlJRDBnZGk1emRXSnpkSElvTlN3Z01pazdYRzVjYmlBZ0x5OGdUM0lnZDJVZ2FHRjJaU0F6SUdOb1lYSmhZM1JsY25Nc0lHbGxJQ05HTURCY2JpQWdmU0JsYkhObElIdGNiaUFnSUNCeUlEMGdkaTV6ZFdKemRISW9NU3dnTVNrN1hHNGdJQ0FnWnlBOUlIWXVjM1ZpYzNSeUtESXNJREVwTzF4dUlDQWdJR0lnUFNCMkxuTjFZbk4wY2lnekxDQXhLVHRjYmlBZ0lDQnlJQ3M5SUhJN1hHNGdJQ0FnWnlBclBTQm5PMXh1SUNBZ0lHSWdLejBnWWp0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnY21Wa09pQndZWEp6WlVsdWRDaHlMQ0F4Tmlrc1hHNGdJQ0FnWjNKbFpXNDZJSEJoY25ObFNXNTBLR2NzSURFMktTeGNiaUFnSUNCaWJIVmxPaUJ3WVhKelpVbHVkQ2hpTENBeE5pa3NYRzRnSUNBZ1lXeHdhR0U2SURGY2JpQWdmVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCeVoySmhJRDBnYzNCc2FYUkRiMnh2Y2xaaGJIVmxjeWhiSjNKbFpDY3NJQ2RuY21WbGJpY3NJQ2RpYkhWbEp5d2dKMkZzY0doaEoxMHBPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdhSE5zWVNBOUlITndiR2wwUTI5c2IzSldZV3gxWlhNb1d5ZG9kV1VuTENBbmMyRjBkWEpoZEdsdmJpY3NJQ2RzYVdkb2RHNWxjM01uTENBbllXeHdhR0VuWFNrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamIyeHZjaUE5SUNoMktTQTlQaUI3WEc0Z0lHbG1JQ2hwYzFKbllpaDJLU2tnZTF4dUlDQWdJSEpsZEhWeWJpQnlaMkpoS0hZcE8xeHVJQ0I5SUdWc2MyVWdhV1lnS0dselNHVjRLSFlwS1NCN1hHNGdJQ0FnY21WMGRYSnVJR2hsZUNoMktUdGNiaUFnZlNCbGJITmxJR2xtSUNocGMwaHpiQ2gyS1NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJvYzJ4aEtIWXBPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSFk3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvcGFyc2Vycy5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICBEZXRlY3QgYW5kIGxvYWQgYW4gYXBwcm9wcmlhdGUgY2xvY2sgc2V0dGluZyBmb3IgdGhlIGVudmlyb25tZW50XG4qL1xudmFyIGhhc1JBRiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB0cnVlIDogZmFsc2U7XG5cbnZhciBvbk5leHRGcmFtZSA9IHZvaWQgMDtcblxuaWYgKGhhc1JBRikge1xuICBvbk5leHRGcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgfTtcbn0gZWxzZSB7XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgXG4gICAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG4gICAgICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgICAgXG4gICAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICAgIFxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICAgIFxuICAgICAgTUlUIGxpY2Vuc2VcbiAgICAqL1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgICBvbk5leHRGcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2LjcgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhsYXN0VGltZSk7XG4gICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICB9O1xuICB9KSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBvbk5leHRGcmFtZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bWNtRnRaWE41Ym1NdmIyNHRibVY0ZEMxbWNtRnRaUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZIUVN4SlFVRk5MRk5CUVZVc1QwRkJUeXhOUVVGUUxFdEJRV3RDTEZkQlFXeENMRWxCUVdsRExFOUJRVThzY1VKQlFYcERMRWRCUVd0RkxFbEJRV3hGTEVkQlFYbEZMRXRCUVhoR096dEJRVVZCTEVsQlFVa3NiMEpCUVVvN08wRkJSVUVzU1VGQlNTeE5RVUZLTEVWQlFWazdRVUZEVml4blFrRkJZeXhWUVVGRExGRkJRVVE3UVVGQlFTeFhRVUZqTEU5QlFVOHNjVUpCUVZBc1EwRkJOa0lzVVVGQk4wSXNRMEZCWkR0QlFVRkJMRWRCUVdRN1FVRkZSQ3hEUVVoRUxFMUJSMDg3UVVGQlFUczdPenM3T3pzN096czdPenM3UVVGbFRDeFJRVUZKTEZkQlFWY3NRMEZCWmpzN1FVRkZRU3hyUWtGQll5eFZRVUZETEZGQlFVUXNSVUZCWXp0QlFVTXhRaXhWUVVGTkxHTkJRV01zU1VGQlNTeEpRVUZLTEVkQlFWY3NUMEZCV0N4RlFVRndRanRCUVVOQkxGVkJRVTBzWVVGQllTeExRVUZMTEVkQlFVd3NRMEZCVXl4RFFVRlVMRVZCUVZrc1VVRkJVU3hqUVVGakxGRkJRWFJDTEVOQlFWb3NRMEZCYmtJN08wRkJSVUVzYVVKQlFWY3NZMEZCWXl4VlFVRjZRanM3UVVGRlFTeHBRa0ZCVnp0QlFVRkJMR1ZCUVUwc1UwRkJVeXhSUVVGVUxFTkJRVTQ3UVVGQlFTeFBRVUZZTEVWQlFYRkRMRlZCUVhKRE8wRkJRMFFzUzBGUVJEdEJRV3BDU3p0QlFYbENUanM3YTBKQlJXTXNWeUlzSW1acGJHVWlPaUp2YmkxdVpYaDBMV1p5WVcxbExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnUkdWMFpXTjBJR0Z1WkNCc2IyRmtJR0Z1SUdGd2NISnZjSEpwWVhSbElHTnNiMk5ySUhObGRIUnBibWNnWm05eUlIUm9aU0JsYm5acGNtOXViV1Z1ZEZ4dUtpOWNibU52Ym5OMElHaGhjMUpCUmlBOUlDaDBlWEJsYjJZZ2QybHVaRzkzSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCM2FXNWtiM2N1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEtTQS9JSFJ5ZFdVZ09pQm1ZV3h6WlR0Y2JseHViR1YwSUc5dVRtVjRkRVp5WVcxbE8xeHVYRzVwWmlBb2FHRnpVa0ZHS1NCN1hHNGdJRzl1VG1WNGRFWnlZVzFsSUQwZ0tHTmhiR3hpWVdOcktTQTlQaUIzYVc1a2IzY3VjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsS0dOaGJHeGlZV05yS1R0Y2JseHVmU0JsYkhObElIdGNiaUFnTHlwY2JpQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVZ2NHOXNlV1pwYkd4Y2JpQWdJQ0JjYmlBZ0lDQkdiM0lnU1VVNEx6a2dSbXhwYm5OMGIyNWxjeUJoYm1RZ2JtOXVMV0p5YjNkelpYSWdaVzUyYVhKdmJtMWxiblJ6WEc1Y2JpQWdJQ0JVWVd0bGJpQm1jbTl0SUZCaGRXd2dTWEpwYzJndUlGZGxKM1psSUhOMGNtbHdjR1ZrSUc5MWRDQmpZVzVqWld4QmJtbHRZWFJwYjI1R2NtRnRaU0JqYUdWamEzTWdZbVZqWVhWelpTQjNaU0JrYjI0bmRDQm1iM2dnZDJsMGFDQjBhR0YwWEc0Z0lDQWdYRzRnSUNBZ2FIUjBjRG92TDNCaGRXeHBjbWx6YUM1amIyMHZNakF4TVM5eVpYRjFaWE4wWVc1cGJXRjBhVzl1Wm5KaGJXVXRabTl5TFhOdFlYSjBMV0Z1YVcxaGRHbHVaeTljYmlBZ0lDQm9kSFJ3T2k4dmJYa3ViM0JsY21FdVkyOXRMMlZ0YjJ4c1pYSXZZbXh2Wnk4eU1ERXhMekV5THpJd0wzSmxjWFZsYzNSaGJtbHRZWFJwYjI1bWNtRnRaUzFtYjNJdGMyMWhjblF0WlhJdFlXNXBiV0YwYVc1blhHNGdJQ0FnSUZ4dUlDQWdJSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNCd2IyeDVabWxzYkNCaWVTQkZjbWxySUUzRHRteHNaWEl1SUdacGVHVnpJR1p5YjIwZ1VHRjFiQ0JKY21semFDQmhibVFnVkdsdWJ5QmFhV3BrWld4Y2JpQWdJQ0FnWEc0Z0lDQWdUVWxVSUd4cFkyVnVjMlZjYmlBZ0tpOWNiaUFnYkdWMElHeGhjM1JVYVcxbElEMGdNRHRjYmx4dUlDQnZiazVsZUhSR2NtRnRaU0E5SUNoallXeHNZbUZqYXlrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUdOMWNuSmxiblJVYVcxbElEMGdibVYzSUVSaGRHVW9LUzVuWlhSVWFXMWxLQ2s3WEc0Z0lDQWdZMjl1YzNRZ2RHbHRaVlJ2UTJGc2JDQTlJRTFoZEdndWJXRjRLREFzSURFMkxqY2dMU0FvWTNWeWNtVnVkRlJwYldVZ0xTQnNZWE4wVkdsdFpTa3BPMXh1WEc0Z0lDQWdiR0Z6ZEZScGJXVWdQU0JqZFhKeVpXNTBWR2x0WlNBcklIUnBiV1ZVYjBOaGJHdzdYRzVjYmlBZ0lDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lHTmhiR3hpWVdOcktHeGhjM1JVYVcxbEtTd2dkR2x0WlZSdlEyRnNiQ2s3WEc0Z0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUc5dVRtVjRkRVp5WVcxbE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVJlbmRlclN0ZXA7XG5mdW5jdGlvbiBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCkge1xuICAvKipcbiAgICogV2UgdXNlIHR3byBhcnJheXMsIG9uZSBmb3IgdGhpcyBmcmFtZSBhbmQgb25lIHRvIHF1ZXVlIGZvciB0aGVcbiAgICogbmV4dCBmcmFtZSwgcmV1c2luZyBlYWNoIHRvIGF2b2lkIEdDLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICB2YXIgZnVuY3Rpb25zVG9SdW4gPSBbXTtcbiAgdmFyIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICBzY2hlZHVsZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBzdGFydFJlbmRlckxvb3AoKTtcbiAgICAgIC8vIElmIHRoaXMgY2FsbGJhY2sgaXNuJ3QgYWxyZWFkeSBzY2hlZHVsZWQgdG8gcnVuIG5leHQgZnJhbWVcbiAgICAgIGlmIChmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUucHVzaChjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNhbmNlbDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgaW5kZXhPZkNhbGxiYWNrID0gZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaW5kZXhPZkNhbGxiYWNrICE9PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXhPZkNhbGxiYWNrLCAxKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAvLyBDbGVhciBuZXh0IGZyYW1lIGxpc3RcbiAgICAgIHZhciBfcmVmID0gW2Z1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLCBmdW5jdGlvbnNUb1J1bl07XG4gICAgICAvLyBTd2FwIHRoaXMgZnJhbWUgYW5kIG5leHQgZnJhbWUgYXJyYXlzIHRvIGF2b2lkIEdDXG5cbiAgICAgIGZ1bmN0aW9uc1RvUnVuID0gX3JlZlswXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gX3JlZlsxXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIEV4ZWN1dGUgYWxsIG9mIHRoaXMgZnJhbWUncyBmdW5jdGlvbnNcbiAgICAgIHZhciBudW1UaGlzRnJhbWUgPSBmdW5jdGlvbnNUb1J1bi5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRoaXNGcmFtZTsgaSsrKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuW2ldKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12WTNKbFlYUmxMWEpsYm1SbGNpMXpkR1Z3TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZCZDBJc1owSTdRVUZCVkN4VFFVRlRMR2RDUVVGVUxFTkJRVEJDTEdWQlFURkNMRVZCUVRKRE96czdPenM3UVVGTmVFUXNUVUZCU1N4cFFrRkJhVUlzUlVGQmNrSTdRVUZEUVN4TlFVRkpMREJDUVVFd1FpeEZRVUU1UWpzN1FVRkZRU3hUUVVGUE8wRkJRMHdzWTBGQlZTeFZRVUZETEZGQlFVUXNSVUZCWXp0QlFVTjBRanM3UVVGRlFTeFZRVUZKTEhkQ1FVRjNRaXhQUVVGNFFpeERRVUZuUXl4UlFVRm9ReXhOUVVFNFF5eERRVUZETEVOQlFXNUVMRVZCUVhORU8wRkJRM0JFTEdkRFFVRjNRaXhKUVVGNFFpeERRVUUyUWl4UlFVRTNRanRCUVVORU8wRkJRMFlzUzBGUVNUczdRVUZUVEN4WlFVRlJMRlZCUVVNc1VVRkJSQ3hGUVVGak8wRkJRM0JDTEZWQlFVMHNhMEpCUVd0Q0xIZENRVUYzUWl4UFFVRjRRaXhEUVVGblF5eFJRVUZvUXl4RFFVRjRRanRCUVVOQkxGVkJRVWtzYjBKQlFXOUNMRU5CUVVNc1EwRkJla0lzUlVGQk5FSTdRVUZETVVJc1owTkJRWGRDTEUxQlFYaENMRU5CUVN0Q0xHVkJRUzlDTEVWQlFXZEVMRU5CUVdoRU8wRkJRMFE3UVVGRFJpeExRV1JKT3p0QlFXZENUQ3hoUVVGVExGbEJRVTA3T3p0QlFVRkJMR2xDUVVVclFpeERRVUZETEhWQ1FVRkVMRVZCUVRCQ0xHTkJRVEZDTEVOQlJpOUNPenM3UVVGRldpeHZRa0ZHV1R0QlFVVkpMRFpDUVVaS08wRkJTMklzT0VKQlFYZENMRTFCUVhoQ0xFZEJRV2xETEVOQlFXcERPenM3UVVGSFFTeFZRVUZOTEdWQlFXVXNaVUZCWlN4TlFVRndRenRCUVVOQkxGZEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFXSXNSVUZCWjBJc1NVRkJTU3haUVVGd1FpeEZRVUZyUXl4SFFVRnNReXhGUVVGMVF6dEJRVU55UXl4MVFrRkJaU3hEUVVGbU8wRkJRMFE3UVVGRFJqdEJRVFZDU1N4SFFVRlFPMEZCT0VKRUlpd2labWxzWlNJNkltTnlaV0YwWlMxeVpXNWtaWEl0YzNSbGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLU0I3WEc0Z0lDOHFLbHh1SUNBZ0tpQlhaU0IxYzJVZ2RIZHZJR0Z5Y21GNWN5d2diMjVsSUdadmNpQjBhR2x6SUdaeVlXMWxJR0Z1WkNCdmJtVWdkRzhnY1hWbGRXVWdabTl5SUhSb1pWeHVJQ0FnS2lCdVpYaDBJR1p5WVcxbExDQnlaWFZ6YVc1bklHVmhZMmdnZEc4Z1lYWnZhV1FnUjBNdVhHNGdJQ0FxSUVCMGVYQmxJSHRCY25KaGVYMWNiaUFnSUNvdlhHNGdJR3hsZENCbWRXNWpkR2x2Ym5OVWIxSjFiaUE5SUZ0ZE8xeHVJQ0JzWlhRZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1VnUFNCYlhUdGNibHh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJSE5qYUdWa2RXeGxPaUFvWTJGc2JHSmhZMnNwSUQwK0lIdGNiaUFnSUNBZ0lITjBZWEowVW1WdVpHVnlURzl2Y0NncE8xeHVJQ0FnSUNBZ0x5OGdTV1lnZEdocGN5QmpZV3hzWW1GamF5QnBjMjRuZENCaGJISmxZV1I1SUhOamFHVmtkV3hsWkNCMGJ5QnlkVzRnYm1WNGRDQm1jbUZ0WlZ4dUlDQWdJQ0FnYVdZZ0tHWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTG1sdVpHVjRUMllvWTJGc2JHSmhZMnNwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2Ym5OVWIxSjFiazVsZUhSR2NtRnRaUzV3ZFhOb0tHTmhiR3hpWVdOcktUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyRnVZMlZzT2lBb1kyRnNiR0poWTJzcElEMCtJSHRjYmlBZ0lDQWdJR052Ym5OMElHbHVaR1Y0VDJaRFlXeHNZbUZqYXlBOUlHWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTG1sdVpHVjRUMllvWTJGc2JHSmhZMnNwTzF4dUlDQWdJQ0FnYVdZZ0tHbHVaR1Y0VDJaRFlXeHNZbUZqYXlBaFBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YzNCc2FXTmxLR2x1WkdWNFQyWkRZV3hzWW1GamF5d2dNU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSEJ5YjJObGMzTTZJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDOHZJRk4zWVhBZ2RHaHBjeUJtY21GdFpTQmhibVFnYm1WNGRDQm1jbUZ0WlNCaGNuSmhlWE1nZEc4Z1lYWnZhV1FnUjBOY2JpQWdJQ0FnSUZ0bWRXNWpkR2x2Ym5OVWIxSjFiaXdnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVmRJRDBnVzJaMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxMQ0JtZFc1amRHbHZibk5VYjFKMWJsMDdYRzVjYmlBZ0lDQWdJQzh2SUVOc1pXRnlJRzVsZUhRZ1puSmhiV1VnYkdsemRGeHVJQ0FnSUNBZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YkdWdVozUm9JRDBnTUR0Y2JseHVJQ0FnSUNBZ0x5OGdSWGhsWTNWMFpTQmhiR3dnYjJZZ2RHaHBjeUJtY21GdFpTZHpJR1oxYm1OMGFXOXVjMXh1SUNBZ0lDQWdZMjl1YzNRZ2JuVnRWR2hwYzBaeVlXMWxJRDBnWm5WdVkzUnBiMjV6Vkc5U2RXNHViR1Z1WjNSb08xeHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFVYUdselJuSmhiV1U3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZibk5VYjFKMWJsdHBYU2dwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZUdGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL2NyZWF0ZS1yZW5kZXItc3RlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZFN0eWxlUHJvcGVydHlTdHJpbmc7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcbnZhciB0cmFuc2xhdGVNYXAgPSB7XG4gIHg6IFRSQU5TTEFURSArICdYJyxcbiAgeTogVFJBTlNMQVRFICsgJ1knLFxuICB6OiBUUkFOU0xBVEUgKyAnWidcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkU3R5bGVQcm9wZXJ0eVN0cmluZyhlbGVtZW50LCBzdGF0ZSwgY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgdmFyIHByb3BlcnR5U3RyaW5nID0gJyc7XG4gIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSAnJztcbiAgdmFyIGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICB2YXIgdHJhbnNmb3JtSGFzWiA9IGZhbHNlO1xuXG4gIC8vIEZpcnN0IGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgY2hhbmdlZCB0cmFuc2Zvcm0gdmFsdWVzXG4gIC8vIGFuZCBpZiB0cnVlIGFkZCBhbGwgdHJhbnNmb3JtIHZhbHVlc1xuICB2YXIgbnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNoYW5nZWRWYWx1ZXM7IGkrKykge1xuICAgIHZhciBrZXkgPSBjaGFuZ2VkVmFsdWVzW2ldO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBwcm9wZXJ0eSwgYWRkIGFsbCBvdGhlciB0cmFuc2Zvcm0gcHJvcHNcbiAgICAvLyB0byBjaGFuZ2VkVmFsdWVzIGFuZCB0aGVuIGJyZWFrXG4gICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuXG4gICAgICBmb3IgKHZhciBfa2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRbX2tleV0gJiYgY2hhbmdlZFZhbHVlcy5pbmRleE9mKF9rZXkpID09PSAtMSkge1xuICAgICAgICAgIGNoYW5nZWRWYWx1ZXMucHVzaChfa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgdG90YWxOdW1DaGFuZ2VkVmFsdWVzID0gY2hhbmdlZFZhbHVlcy5sZW5ndGg7XG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCB0b3RhbE51bUNoYW5nZWRWYWx1ZXM7IF9pKyspIHtcbiAgICB2YXIgX2tleTIgPSBjaGFuZ2VkVmFsdWVzW19pXTtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZVtfa2V5Ml07XG5cbiAgICBpZiAodHJhbnNsYXRlTWFwW19rZXkyXSkge1xuICAgICAgX2tleTIgPSB0cmFuc2xhdGVNYXBbX2tleTJdO1xuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSBudW1iZXIgb3Igb2JqZWN0IGFuZCB3ZSBoYXZlIGZpbHRlciwgYXBwbHkgZmlsdGVyXG4gICAgaWYgKF92YWx1ZVR5cGVzMi5kZWZhdWx0W19rZXkyXSAmJiAoKDAsIF91dGlscy5pc051bSkodmFsdWUpIHx8ICgwLCBfdXRpbHMuaXNPYmopKHZhbHVlKSkgJiYgX3ZhbHVlVHlwZXMyLmRlZmF1bHRbX2tleTJdLnRyYW5zZm9ybSkge1xuICAgICAgdmFsdWUgPSBfdmFsdWVUeXBlczIuZGVmYXVsdFtfa2V5Ml0udHJhbnNmb3JtKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W19rZXkyXSkge1xuICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IF9rZXkyICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgdHJhbnNmb3JtSGFzWiA9IF9rZXkyID09PSB0cmFuc2xhdGVNYXAueiA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShfa2V5MiwgdHJ1ZSkgKyAnOicgKyB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSBoYXZlIHRyYW5zZm9ybSBwcm9wcywgYnVpbGQgYSB0cmFuc2Zvcm0gc3RyaW5nXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSB0cmFuc2xhdGVNYXAueiArICcoMCknO1xuICAgIH1cblxuICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKCd0cmFuc2Zvcm0nLCB0cnVlKSArICc6JyArIHRyYW5zZm9ybVN0cmluZztcbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBwcm9wZXJ0eVN0cmluZztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM0psYm1SbGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQldYZENMSGRDT3p0QlFWcDRRanM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVWQkxFbEJRVTBzV1VGQldTeFhRVUZzUWp0QlFVTkJMRWxCUVUwc1pVRkJaVHRCUVVOdVFpeExRVUZITEZsQlFWa3NSMEZFU1R0QlFVVnVRaXhMUVVGSExGbEJRVmtzUjBGR1NUdEJRVWR1UWl4TFFVRkhMRmxCUVZrN1FVRklTU3hEUVVGeVFqczdRVUZOWlN4VFFVRlRMSGRDUVVGVUxFTkJRV3RETEU5QlFXeERMRVZCUVRKRExFdEJRVE5ETEVWQlFXdEVMR0ZCUVd4RUxFVkJRV2xGTERCQ1FVRnFSU3hGUVVFMlJqdEJRVU14Unl4TlFVRkpMR2xDUVVGcFFpeEZRVUZ5UWp0QlFVTkJMRTFCUVVrc2EwSkJRV3RDTEVWQlFYUkNPMEZCUTBFc1RVRkJTU3hsUVVGbExFdEJRVzVDTzBGQlEwRXNUVUZCU1N4blFrRkJaMElzUzBGQmNFSTdPenM3UVVGSlFTeE5RVUZOTEcxQ1FVRnRRaXhqUVVGakxFMUJRWFpETzBGQlEwRXNUMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJZaXhGUVVGblFpeEpRVUZKTEdkQ1FVRndRaXhGUVVGelF5eEhRVUYwUXl4RlFVRXlRenRCUVVONlF5eFJRVUZOTEUxQlFVMHNZMEZCWXl4RFFVRmtMRU5CUVZvN096czdRVUZKUVN4UlFVRkpMSGxDUVVGbExFZEJRV1lzUTBGQlNpeEZRVUY1UWp0QlFVTjJRaXh4UWtGQlpTeEpRVUZtT3p0QlFVVkJMRmRCUVVzc1NVRkJTU3hKUVVGVUxFbEJRV2RDTEV0QlFXaENMRVZCUVhWQ08wRkJRM0pDTEZsQlFVa3NlVUpCUVdVc1NVRkJaaXhMUVVGMVFpeGpRVUZqTEU5QlFXUXNRMEZCYzBJc1NVRkJkRUlzVFVGQkswSXNRMEZCUXl4RFFVRXpSQ3hGUVVFNFJEdEJRVU0xUkN4M1FrRkJZeXhKUVVGa0xFTkJRVzFDTEVsQlFXNUNPMEZCUTBRN1FVRkRSanM3UVVGRlJEdEJRVU5FTzBGQlEwWTdPMEZCUlVRc1RVRkJUU3gzUWtGQmQwSXNZMEZCWXl4TlFVRTFRenRCUVVOQkxFOUJRVXNzU1VGQlNTeExRVUZKTEVOQlFXSXNSVUZCWjBJc1MwRkJTU3h4UWtGQmNFSXNSVUZCTWtNc1NVRkJNME1zUlVGQlowUTdRVUZET1VNc1VVRkJTU3hSUVVGTkxHTkJRV01zUlVGQlpDeERRVUZXTzBGQlEwRXNVVUZCU1N4UlFVRlJMRTFCUVUwc1MwRkJUaXhEUVVGYU96dEJRVVZCTEZGQlFVa3NZVUZCWVN4TFFVRmlMRU5CUVVvc1JVRkJkVUk3UVVGRGNrSXNZMEZCVFN4aFFVRmhMRXRCUVdJc1EwRkJUanRCUVVORU96czdRVUZIUkN4UlFVRkpMSEZDUVVGWExFdEJRVmdzVFVGQmIwSXNhMEpCUVUwc1MwRkJUaXhMUVVGblFpeHJRa0ZCVFN4TFFVRk9MRU5CUVhCRExFdEJRWEZFTEhGQ1FVRlhMRXRCUVZnc1JVRkJaMElzVTBGQmVrVXNSVUZCYjBZN1FVRkRiRVlzWTBGQlVTeHhRa0ZCVnl4TFFVRllMRVZCUVdkQ0xGTkJRV2hDTEVOQlFUQkNMRXRCUVRGQ0xFTkJRVkk3UVVGRFJEczdRVUZGUkN4UlFVRkpMSGxDUVVGbExFdEJRV1lzUTBGQlNpeEZRVUY1UWp0QlFVTjJRaXg1UWtGQmJVSXNVVUZCVFN4SFFVRk9MRWRCUVZrc1MwRkJXaXhIUVVGdlFpeEpRVUYyUXp0QlFVTkJMSE5DUVVGcFFpeFZRVUZSTEdGQlFXRXNRMEZCZEVJc1IwRkJNa0lzU1VGQk0wSXNSMEZCYTBNc1lVRkJiRVE3UVVGRlJDeExRVXBFTEUxQlNVODdRVUZEVEN4M1FrRkJhMElzVFVGQlRTeDNRa0ZCVXl4TFFVRlVMRVZCUVdNc1NVRkJaQ3hEUVVGT0xFZEJRVFJDTEVkQlFUVkNMRWRCUVd0RExFdEJRWEJFTzBGQlEwUTdRVUZEUmpzN08wRkJSMFFzVFVGQlNTeFpRVUZLTEVWQlFXdENPMEZCUTJoQ0xGRkJRVWtzUTBGQlF5eGhRVUZFTEVsQlFXdENMREJDUVVGMFFpeEZRVUZyUkR0QlFVTm9SQ3g1UWtGQmJVSXNZVUZCWVN4RFFVRmlMRWRCUVdsQ0xFdEJRWEJETzBGQlEwUTdPMEZCUlVRc2MwSkJRV3RDTEUxQlFVMHNkMEpCUVZNc1YwRkJWQ3hGUVVGelFpeEpRVUYwUWl4RFFVRk9MRWRCUVc5RExFZEJRWEJETEVkQlFUQkRMR1ZCUVRWRU8wRkJRMFE3TzBGQlJVUXNWVUZCVVN4TFFVRlNMRU5CUVdNc1QwRkJaQ3hKUVVGNVFpeGpRVUY2UWp0QlFVTkVJaXdpWm1sc1pTSTZJbkpsYm1SbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCMGNtRnVjMlp2Y20xUWNtOXdjeUJtY205dElDY3VMM1J5WVc1elptOXliUzF3Y205d2N5YzdYRzVwYlhCdmNuUWdkbUZzZFdWVWVYQmxjeUJtY205dElDY3VMM1poYkhWbExYUjVjR1Z6Snp0Y2JtbHRjRzl5ZENCd2NtVm1hWGhsY2lCbWNtOXRJQ2N1TDNCeVpXWnBlR1Z5Snp0Y2JtbHRjRzl5ZENCN0lHbHpUblZ0TENCcGMwOWlhaUI5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJRlJTUVU1VFRFRlVSU0E5SUNkMGNtRnVjMnhoZEdVbk8xeHVZMjl1YzNRZ2RISmhibk5zWVhSbFRXRndJRDBnZTF4dUlDQjRPaUJVVWtGT1UweEJWRVVnS3lBbldDY3NYRzRnSUhrNklGUlNRVTVUVEVGVVJTQXJJQ2RaSnl4Y2JpQWdlam9nVkZKQlRsTk1RVlJGSUNzZ0oxb25YRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCaWRXbHNaRk4wZVd4bFVISnZjR1Z5ZEhsVGRISnBibWNvWld4bGJXVnVkQ3dnYzNSaGRHVXNJR05vWVc1blpXUldZV3gxWlhNc0lHVnVZV0pzWlVoaGNtUjNZWEpsUVdOalpXeGxjbUYwYVc5dUtTQjdYRzRnSUd4bGRDQndjbTl3WlhKMGVWTjBjbWx1WnlBOUlDY25PMXh1SUNCc1pYUWdkSEpoYm5ObWIzSnRVM1J5YVc1bklEMGdKeWM3WEc0Z0lHeGxkQ0JvWVhOVWNtRnVjMlp2Y20wZ1BTQm1ZV3h6WlR0Y2JpQWdiR1YwSUhSeVlXNXpabTl5YlVoaGMxb2dQU0JtWVd4elpUdGNibHh1SUNBdkx5QkdhWEp6ZENCamFHVmpheUJwWmlCMGFHVnlaU0JoY21VZ1lXNTVJR05vWVc1blpXUWdkSEpoYm5ObWIzSnRJSFpoYkhWbGMxeHVJQ0F2THlCaGJtUWdhV1lnZEhKMVpTQmhaR1FnWVd4c0lIUnlZVzV6Wm05eWJTQjJZV3gxWlhOY2JpQWdZMjl1YzNRZ2JuVnRRMmhoYm1kbFpGWmhiSFZsY3lBOUlHTm9ZVzVuWldSV1lXeDFaWE11YkdWdVozUm9PMXh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVU5vWVc1blpXUldZV3gxWlhNN0lHa3JLeWtnZTF4dUlDQWdJR052Ym5OMElHdGxlU0E5SUdOb1lXNW5aV1JXWVd4MVpYTmJhVjA3WEc1Y2JpQWdJQ0F2THlCSlppQjBhR2x6SUdseklHRWdkSEpoYm5ObWIzSnRJSEJ5YjNCbGNuUjVMQ0JoWkdRZ1lXeHNJRzkwYUdWeUlIUnlZVzV6Wm05eWJTQndjbTl3YzF4dUlDQWdJQzh2SUhSdklHTm9ZVzVuWldSV1lXeDFaWE1nWVc1a0lIUm9aVzRnWW5KbFlXdGNiaUFnSUNCcFppQW9kSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnYUdGelZISmhibk5tYjNKdElEMGdkSEoxWlR0Y2JseHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhOMFlYUmxLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMVFjbTl3YzF0clpYbGRJQ1ltSUdOb1lXNW5aV1JXWVd4MVpYTXVhVzVrWlhoUFppaHJaWGtwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHTm9ZVzVuWldSV1lXeDFaWE11Y0hWemFDaHJaWGtwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdOdmJuTjBJSFJ2ZEdGc1RuVnRRMmhoYm1kbFpGWmhiSFZsY3lBOUlHTm9ZVzVuWldSV1lXeDFaWE11YkdWdVozUm9PMXh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUnZkR0ZzVG5WdFEyaGhibWRsWkZaaGJIVmxjenNnYVNzcktTQjdYRzRnSUNBZ2JHVjBJR3RsZVNBOUlHTm9ZVzVuWldSV1lXeDFaWE5iYVYwN1hHNGdJQ0FnYkdWMElIWmhiSFZsSUQwZ2MzUmhkR1ZiYTJWNVhUdGNibHh1SUNBZ0lHbG1JQ2gwY21GdWMyeGhkR1ZOWVhCYmEyVjVYU2tnZTF4dUlDQWdJQ0FnYTJWNUlEMGdkSEpoYm5Oc1lYUmxUV0Z3VzJ0bGVWMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdTV1lnZEdocGN5QnBjeUJoSUc1MWJXSmxjaUJ2Y2lCdlltcGxZM1FnWVc1a0lIZGxJR2hoZG1VZ1ptbHNkR1Z5TENCaGNIQnNlU0JtYVd4MFpYSmNiaUFnSUNCcFppQW9kbUZzZFdWVWVYQmxjMXRyWlhsZElDWW1JQ2hwYzA1MWJTaDJZV3gxWlNrZ2ZId2dhWE5QWW1vb2RtRnNkV1VwS1NBbUppQjJZV3gxWlZSNWNHVnpXMnRsZVYwdWRISmhibk5tYjNKdEtTQjdYRzRnSUNBZ0lDQjJZV3gxWlNBOUlIWmhiSFZsVkhsd1pYTmJhMlY1WFM1MGNtRnVjMlp2Y20wb2RtRnNkV1VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGNtRnVjMlp2Y20xUWNtOXdjMXRyWlhsZEtTQjdYRzRnSUNBZ0lDQjBjbUZ1YzJadmNtMVRkSEpwYm1jZ0t6MGdhMlY1SUNzZ0p5Z25JQ3NnZG1Gc2RXVWdLeUFuS1NBbk8xeHVJQ0FnSUNBZ2RISmhibk5tYjNKdFNHRnpXaUE5SUNoclpYa2dQVDA5SUhSeVlXNXpiR0YwWlUxaGNDNTZLU0EvSUhSeWRXVWdPaUIwY21GdWMyWnZjbTFJWVhOYU8xeHVYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhCeWIzQmxjblI1VTNSeWFXNW5JQ3M5SUNjN0p5QXJJSEJ5WldacGVHVnlLR3RsZVN3Z2RISjFaU2tnS3lBbk9pY2dLeUIyWVd4MVpUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQXZMeUJKWmlCM1pTQm9ZWFpsSUhSeVlXNXpabTl5YlNCd2NtOXdjeXdnWW5WcGJHUWdZU0IwY21GdWMyWnZjbTBnYzNSeWFXNW5YRzRnSUdsbUlDaG9ZWE5VY21GdWMyWnZjbTBwSUh0Y2JpQWdJQ0JwWmlBb0lYUnlZVzV6Wm05eWJVaGhjMW9nSmlZZ1pXNWhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0cElIdGNiaUFnSUNBZ0lIUnlZVzV6Wm05eWJWTjBjbWx1WnlBclBTQjBjbUZ1YzJ4aGRHVk5ZWEF1ZWlBcklDY29NQ2tuTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEJ5YjNCbGNuUjVVM1J5YVc1bklDczlJQ2M3SnlBcklIQnlaV1pwZUdWeUtDZDBjbUZ1YzJadmNtMG5MQ0IwY25WbEtTQXJJQ2M2SnlBcklIUnlZVzV6Wm05eWJWTjBjbWx1Wnp0Y2JpQWdmVnh1WEc0Z0lHVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0FyUFNCd2NtOXdaWEowZVZOMGNtbHVaenRjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL3JlbmRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgYXhlcyA9IFsnWCcsICdZJywgJ1onXTtcblxudmFyIHRyYW5zZm9ybVByb3BzID0ge1xuICB4OiB0cnVlLFxuICB5OiB0cnVlLFxuICB6OiB0cnVlXG59O1xuXG52YXIgU0NBTEUgPSAnc2NhbGUnO1xudmFyIFJPVEFURSA9ICdyb3RhdGUnO1xudmFyIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSc7XG52YXIgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBheGVzLmZvckVhY2goZnVuY3Rpb24gKGF4aXMpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtUHJvcHNbdGVybSArIGF4aXNdID0gdHJ1ZTtcbiAgfSk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNmb3JtUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNSeVlXNXpabTl5YlMxd2NtOXdjeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hKUVVGTkxFOUJRVThzUTBGQlF5eEhRVUZFTEVWQlFVMHNSMEZCVGl4RlFVRlhMRWRCUVZnc1EwRkJZanM3UVVGRlFTeEpRVUZKTEdsQ1FVRnBRanRCUVVOdVFpeExRVUZITEVsQlJHZENPMEZCUlc1Q0xFdEJRVWNzU1VGR1owSTdRVUZIYmtJc1MwRkJSenRCUVVoblFpeERRVUZ5UWpzN1FVRk5RU3hKUVVGTkxGRkJRVkVzVDBGQlpEdEJRVU5CTEVsQlFVMHNVMEZCVXl4UlFVRm1PMEZCUTBFc1NVRkJUU3gzUWtGQmQwSXNjMEpCUVRsQ08wRkJRMEVzU1VGQlRTeFJRVUZSTEVOQlFVTXNWMEZCUkN4RlFVRmpMRXRCUVdRc1JVRkJjVUlzVFVGQmNrSXNSVUZCTmtJc1RVRkJOMElzUlVGQmNVTXNjVUpCUVhKRExFTkJRV1E3TzBGQlJVRXNaVUZCWlN4TlFVRm1MRWxCUVhsQ0xHVkJRV1VzUzBGQlppeEpRVUYzUWl4bFFVRmxMSEZDUVVGbUxFbEJRWGRETEVsQlFYcEdPenRCUVVWQkxFMUJRVTBzVDBGQlRpeERRVUZqTEZWQlFVTXNTVUZCUkR0QlFVRkJMRk5CUVZVc1MwRkJTeXhQUVVGTUxFTkJRV0VzVlVGQlF5eEpRVUZFTzBGQlFVRXNWMEZCVlN4bFFVRmxMRTlCUVU4c1NVRkJkRUlzU1VGQk9FSXNTVUZCZUVNN1FVRkJRU3hIUVVGaUxFTkJRVlk3UVVGQlFTeERRVUZrT3p0clFrRkZaU3hqSWl3aVptbHNaU0k2SW5SeVlXNXpabTl5YlMxd2NtOXdjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbU52Ym5OMElHRjRaWE1nUFNCYkoxZ25MQ0FuV1Njc0lDZGFKMTA3WEc1Y2JteGxkQ0IwY21GdWMyWnZjbTFRY205d2N5QTlJSHRjYmlBZ2VEb2dkSEoxWlN4Y2JpQWdlVG9nZEhKMVpTeGNiaUFnZWpvZ2RISjFaVnh1ZlR0Y2JseHVZMjl1YzNRZ1UwTkJURVVnUFNBbmMyTmhiR1VuTzF4dVkyOXVjM1FnVWs5VVFWUkZJRDBnSjNKdmRHRjBaU2M3WEc1amIyNXpkQ0JVVWtGT1UwWlBVazFmVUVWU1UxQkZRMVJKVmtVZ1BTQW5kSEpoYm5ObWIzSnRVR1Z5YzNCbFkzUnBkbVVuTzF4dVkyOXVjM1FnVkVWU1RWTWdQU0JiSjNSeVlXNXpiR0YwWlNjc0lGTkRRVXhGTENCU1QxUkJWRVVzSUNkemEyVjNKeXdnVkZKQlRsTkdUMUpOWDFCRlVsTlFSVU5VU1ZaRlhUdGNibHh1ZEhKaGJuTm1iM0p0VUhKdmNITmJVazlVUVZSRlhTQTlJSFJ5WVc1elptOXliVkJ5YjNCelcxTkRRVXhGWFNBOUlIUnlZVzV6Wm05eWJWQnliM0J6VzFSU1FVNVRSazlTVFY5UVJWSlRVRVZEVkVsV1JWMGdQU0IwY25WbE8xeHVYRzVVUlZKTlV5NW1iM0pGWVdOb0tDaDBaWEp0S1NBOVBpQmhlR1Z6TG1admNrVmhZMmdvS0dGNGFYTXBJRDArSUhSeVlXNXpabTl5YlZCeWIzQnpXM1JsY20wZ0t5QmhlR2x6WFNBOUlIUnlkV1VwS1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2RISmhibk5tYjNKdFVISnZjSE03SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAvLyBDb2xvciBwcm9wc1xuICBjb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJhY2tncm91bmRDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIG91dGxpbmVDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGZpbGw6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzdHJva2U6IF92YWx1ZVR5cGVzLmNvbG9yLFxuXG4gIC8vIEJvcmRlciBwcm9wc1xuICBib3JkZXJDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlclRvcENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyUmlnaHRDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlckJvdHRvbUNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyTGVmdENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyUmFkaXVzOiBfdmFsdWVUeXBlcy5weCxcblxuICAvLyBQb3NpdGlvbmluZ1xuICB3aWR0aDogX3ZhbHVlVHlwZXMucHgsXG4gIGhlaWdodDogX3ZhbHVlVHlwZXMucHgsXG5cbiAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgcm90YXRlOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICByb3RhdGVYOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICByb3RhdGVZOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICByb3RhdGVaOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICBzY2FsZTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWDogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWjogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNrZXdYOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICBza2V3WTogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgZGlzdGFuY2U6IF92YWx1ZVR5cGVzLnB4LFxuICB0cmFuc2xhdGVYOiBfdmFsdWVUeXBlcy5weCxcbiAgdHJhbnNsYXRlWTogX3ZhbHVlVHlwZXMucHgsXG4gIHRyYW5zbGF0ZVo6IF92YWx1ZVR5cGVzLnB4LFxuICBwZXJzcGVjdGl2ZTogX3ZhbHVlVHlwZXMucHgsXG4gIG9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzWmhiSFZsTFhSNWNHVnpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3YTBKQlEyVTdPMEZCUldJc01FSkJSbUU3UVVGSFlpeHZRMEZJWVR0QlFVbGlMR2xEUVVwaE8wRkJTMklzZVVKQlRHRTdRVUZOWWl3eVFrRk9ZVHM3TzBGQlUySXNaME5CVkdFN1FVRlZZaXh0UTBGV1lUdEJRVmRpTEhGRFFWaGhPMEZCV1dJc2MwTkJXbUU3UVVGaFlpeHZRMEZpWVR0QlFXTmlMRGhDUVdSaE96czdRVUZwUW1Jc2RVSkJha0poTzBGQmEwSmlMSGRDUVd4Q1lUczdPMEZCY1VKaUxEWkNRWEpDWVR0QlFYTkNZaXc0UWtGMFFtRTdRVUYxUW1Jc09FSkJka0poTzBGQmQwSmlMRGhDUVhoQ1lUdEJRWGxDWWl3d1FrRjZRbUU3UVVFd1FtSXNNa0pCTVVKaE8wRkJNa0ppTERKQ1FUTkNZVHRCUVRSQ1lpd3lRa0UxUW1FN1FVRTJRbUlzTkVKQk4wSmhPMEZCT0VKaUxEUkNRVGxDWVR0QlFTdENZaXd3UWtFdlFtRTdRVUZuUTJJc05FSkJhRU5oTzBGQmFVTmlMRFJDUVdwRFlUdEJRV3REWWl3MFFrRnNRMkU3UVVGdFEySXNOa0pCYmtOaE8wRkJiME5pTzBGQmNFTmhMRU1pTENKbWFXeGxJam9pZG1Gc2RXVXRkSGx3WlhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCaGJIQm9ZU3dnWTI5c2IzSXNJR1JsWjNKbFpYTXNJSE5qWVd4bExDQndlQ0I5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkyWVd4MVpTMTBlWEJsY3ljN0lGeHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0F2THlCRGIyeHZjaUJ3Y205d2MxeHVJQ0JqYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0poWTJ0bmNtOTFibVJEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJRzkxZEd4cGJtVkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHWnBiR3c2SUdOdmJHOXlMRnh1SUNCemRISnZhMlU2SUdOdmJHOXlMRnh1WEc0Z0lDOHZJRUp2Y21SbGNpQndjbTl3YzF4dUlDQmliM0prWlhKRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdKdmNtUmxjbFJ2Y0VOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnWW05eVpHVnlVbWxuYUhSRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdKdmNtUmxja0p2ZEhSdmJVTnZiRzl5T2lCamIyeHZjaXhjYmlBZ1ltOXlaR1Z5VEdWbWRFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ1ltOXlaR1Z5VW1Ga2FYVnpPaUJ3ZUN4Y2JseHVJQ0F2THlCUWIzTnBkR2x2Ym1sdVoxeHVJQ0IzYVdSMGFEb2djSGdzWEc0Z0lHaGxhV2RvZERvZ2NIZ3NJQ0JjYmx4dUlDQXZMeUJVY21GdWMyWnZjbTBnY0hKdmNHVnlkR2xsYzF4dUlDQnliM1JoZEdVNklHUmxaM0psWlhNc1hHNGdJSEp2ZEdGMFpWZzZJR1JsWjNKbFpYTXNYRzRnSUhKdmRHRjBaVms2SUdSbFozSmxaWE1zWEc0Z0lISnZkR0YwWlZvNklHUmxaM0psWlhNc1hHNGdJSE5qWVd4bE9pQnpZMkZzWlN4Y2JpQWdjMk5oYkdWWU9pQnpZMkZzWlN4Y2JpQWdjMk5oYkdWWk9pQnpZMkZzWlN4Y2JpQWdjMk5oYkdWYU9pQnpZMkZzWlN4Y2JpQWdjMnRsZDFnNklHUmxaM0psWlhNc1hHNGdJSE5yWlhkWk9pQmtaV2R5WldWekxGeHVJQ0JrYVhOMFlXNWpaVG9nY0hnc1hHNGdJSFJ5WVc1emJHRjBaVmc2SUhCNExGeHVJQ0IwY21GdWMyeGhkR1ZaT2lCd2VDeGNiaUFnZEhKaGJuTnNZWFJsV2pvZ2NIZ3NYRzRnSUhCbGNuTndaV04wYVhabE9pQndlQ3hjYmlBZ2IzQmhZMmwwZVRvZ1lXeHdhR0ZjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgY2FtZWxDYWNoZSA9IHt9O1xudmFyIGRhc2hDYWNoZSA9IHt9O1xudmFyIHByZWZpeGVzID0gWydXZWJraXQnLCAnTW96JywgJ08nLCAnbXMnLCAnJ107XG52YXIgbnVtUHJlZml4ZXMgPSBwcmVmaXhlcy5sZW5ndGg7XG52YXIgdGVzdEVsZW1lbnQgPSB2b2lkIDA7XG5cbi8qXG4gIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgXG4gIEBwYXJhbSBbc3RyaW5nXTogU3R5bGUgcHJvcGVydHlcbiAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG52YXIgdGVzdFByZWZpeCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgdmFyIG5vUHJlZml4ID0gcHJlZml4ID09PSAnJztcbiAgICB2YXIgcHJlZml4ZWRQcm9wZXJ0eU5hbWUgPSBub1ByZWZpeCA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgIGlmIChwcmVmaXhlZFByb3BlcnR5TmFtZSBpbiB0ZXN0RWxlbWVudC5zdHlsZSkge1xuICAgICAgY2FtZWxDYWNoZVtrZXldID0gcHJlZml4ZWRQcm9wZXJ0eU5hbWU7XG4gICAgICBkYXNoQ2FjaGVba2V5XSA9ICcnICsgKG5vUHJlZml4ID8gJycgOiAnLScpICsgKDAsIF91dGlscy5jYW1lbFRvRGFzaCkocHJlZml4ZWRQcm9wZXJ0eU5hbWUpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGtleSwgYXNEYXNoQ2FzZSkge1xuICB2YXIgY2FjaGUgPSBhc0Rhc2hDYXNlID8gZGFzaENhY2hlIDogY2FtZWxDYWNoZTtcblxuICBpZiAoIWNhY2hlW2tleV0pIHtcbiAgICB0ZXN0UHJlZml4KGtleSk7XG4gIH1cblxuICByZXR1cm4gY2FjaGVba2V5XTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNCeVpXWnBlR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN1FVRkZRU3hKUVVGTkxHRkJRV0VzUlVGQmJrSTdRVUZEUVN4SlFVRk5MRmxCUVZrc1JVRkJiRUk3UVVGRFFTeEpRVUZOTEZkQlFWY3NRMEZCUXl4UlFVRkVMRVZCUVZVc1MwRkJWaXhGUVVGblFpeEhRVUZvUWl4RlFVRnZRaXhKUVVGd1FpeEZRVUV3UWl4RlFVRXhRaXhEUVVGcVFqdEJRVU5CTEVsQlFVMHNZMEZCWXl4VFFVRlRMRTFCUVRkQ08wRkJRMEVzU1VGQlNTeHZRa0ZCU2pzN096czdPenM3UVVGUlFTeEpRVUZOTEdGQlFXRXNWVUZCUXl4SFFVRkVMRVZCUVZNN1FVRkRNVUlzWjBKQlFXTXNaVUZCWlN4VFFVRlRMR0ZCUVZRc1EwRkJkVUlzUzBGQmRrSXNRMEZCTjBJN08wRkJSVUVzVDBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCWWl4RlFVRm5RaXhKUVVGSkxGZEJRWEJDTEVWQlFXbERMRWRCUVdwRExFVkJRWE5ETzBGQlEzQkRMRkZCUVUwc1UwRkJVeXhUUVVGVExFTkJRVlFzUTBGQlpqdEJRVU5CTEZGQlFVMHNWMEZCV1N4WFFVRlhMRVZCUVRkQ08wRkJRMEVzVVVGQlRTeDFRa0ZCZFVJc1YwRkJWeXhIUVVGWUxFZEJRV2xDTEZOQlFWTXNTVUZCU1N4TlFVRktMRU5CUVZjc1EwRkJXQ3hGUVVGakxGZEJRV1FzUlVGQlZDeEhRVUYxUXl4SlFVRkpMRXRCUVVvc1EwRkJWU3hEUVVGV0xFTkJRWEpHT3p0QlFVVkJMRkZCUVVrc2QwSkJRWGRDTEZsQlFWa3NTMEZCZUVNc1JVRkJLME03UVVGRE4wTXNhVUpCUVZjc1IwRkJXQ3hKUVVGclFpeHZRa0ZCYkVJN1FVRkRRU3huUWtGQlZTeEhRVUZXTEZWQlFYRkNMRmRCUVZjc1JVRkJXQ3hIUVVGblFpeEhRVUZ5UXl4SlFVRTBReXgzUWtGQldTeHZRa0ZCV2l4RFFVRTFRenRCUVVORU8wRkJRMFk3UVVGRFJpeERRV0pFT3p0clFrRmxaU3hWUVVGRExFZEJRVVFzUlVGQlRTeFZRVUZPTEVWQlFYRkNPMEZCUTJ4RExFMUJRVTBzVVVGQlVTeGhRVUZoTEZOQlFXSXNSMEZCZVVJc1ZVRkJka003TzBGQlJVRXNUVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJUaXhEUVVGTUxFVkJRV2xDTzBGQlEyWXNaVUZCVnl4SFFVRllPMEZCUTBRN08wRkJSVVFzVTBGQlR5eE5RVUZOTEVkQlFVNHNRMEZCVUR0QlFVTkVMRU1pTENKbWFXeGxJam9pY0hKbFptbDRaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJqWVcxbGJGUnZSR0Z6YUNCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtTnZibk4wSUdOaGJXVnNRMkZqYUdVZ1BTQjdmVHRjYm1OdmJuTjBJR1JoYzJoRFlXTm9aU0E5SUh0OU8xeHVZMjl1YzNRZ2NISmxabWw0WlhNZ1BTQmJKMWRsWW10cGRDY3NKMDF2ZWljc0owOG5MQ2R0Y3ljc0lDY25YVHRjYm1OdmJuTjBJRzUxYlZCeVpXWnBlR1Z6SUQwZ2NISmxabWw0WlhNdWJHVnVaM1JvTzF4dWJHVjBJSFJsYzNSRmJHVnRaVzUwTzF4dVhHNHZLbHh1SUNCVVpYTjBJSE4wZVd4bElIQnliM0JsY25SNUlHWnZjaUJ3Y21WbWFYaGxaQ0IyWlhKemFXOXVYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGTjBlV3hsSUhCeWIzQmxjblI1WEc0Z0lFQnlaWFIxY200Z1czTjBjbWx1WjEwNklFTmhZMmhsWkNCd2NtOXdaWEowZVNCdVlXMWxYRzRxTDF4dVkyOXVjM1FnZEdWemRGQnlaV1pwZUNBOUlDaHJaWGtwSUQwK0lIdGNiaUFnZEdWemRFVnNaVzFsYm5RZ1BTQjBaWE4wUld4bGJXVnVkQ0I4ZkNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ2RrYVhZbktUdGNibHh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVkJ5WldacGVHVnpPeUJwS3lzcElIdGNiaUFnSUNCamIyNXpkQ0J3Y21WbWFYZ2dQU0J3Y21WbWFYaGxjMXRwWFR0Y2JpQWdJQ0JqYjI1emRDQnViMUJ5WldacGVDQTlJQ2h3Y21WbWFYZ2dQVDA5SUNjbktUdGNiaUFnSUNCamIyNXpkQ0J3Y21WbWFYaGxaRkJ5YjNCbGNuUjVUbUZ0WlNBOUlHNXZVSEpsWm1sNElEOGdhMlY1SURvZ2NISmxabWw0SUNzZ2EyVjVMbU5vWVhKQmRDZ3dLUzUwYjFWd2NHVnlRMkZ6WlNncElDc2dhMlY1TG5Oc2FXTmxLREVwTzF4dVhHNGdJQ0FnYVdZZ0tIQnlaV1pwZUdWa1VISnZjR1Z5ZEhsT1lXMWxJR2x1SUhSbGMzUkZiR1Z0Wlc1MExuTjBlV3hsS1NCN1hHNGdJQ0FnSUNCallXMWxiRU5oWTJobFcydGxlVjBnUFNCd2NtVm1hWGhsWkZCeWIzQmxjblI1VG1GdFpUdGNiaUFnSUNBZ0lHUmhjMmhEWVdOb1pWdHJaWGxkSUQwZ1lDUjdLRzV2VUhKbFptbDRJRDhnSnljZ09pQW5MU2NwZlNSN1kyRnRaV3hVYjBSaGMyZ29jSEpsWm1sNFpXUlFjbTl3WlhKMGVVNWhiV1VwZldBN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2EyVjVMQ0JoYzBSaGMyaERZWE5sS1NBOVBpQjdYRzRnSUdOdmJuTjBJR05oWTJobElEMGdZWE5FWVhOb1EyRnpaU0EvSUdSaGMyaERZV05vWlNBNklHTmhiV1ZzUTJGamFHVTdYRzVjYmlBZ2FXWWdLQ0ZqWVdOb1pWdHJaWGxkS1NCN1hHNGdJQ0FnZEdWemRGQnlaV1pwZUNoclpYa3BPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJR05oWTJobFcydGxlVjA3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL3ByZWZpeGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgWkVST19OT1RfWkVSTyA9IDAuMDAwMTtcblxuZnVuY3Rpb24gYnVpbGQoc3RhdGUsIGRhdGEpIHtcbiAgdmFyIGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIHNjYWxlID0gc3RhdGUuc2NhbGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlIHx8IFpFUk9fTk9UX1pFUk8gOiBzdGF0ZS5zY2FsZVggfHwgMTtcbiAgdmFyIHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxO1xuICB2YXIgdHJhbnNmb3JtT3JpZ2luWCA9IGRhdGEud2lkdGggKiAoKHN0YXRlLm9yaWdpblggfHwgNTApIC8gMTAwKSArIGRhdGEueDtcbiAgdmFyIHRyYW5zZm9ybU9yaWdpblkgPSBkYXRhLmhlaWdodCAqICgoc3RhdGUub3JpZ2luWSB8fCA1MCkgLyAxMDApICsgZGF0YS55O1xuICB2YXIgc2NhbGVUcmFuc2Zvcm1YID0gLXRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKTtcbiAgdmFyIHNjYWxlVHJhbnNmb3JtWSA9IC10cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpO1xuICB2YXIgc2NhbGVSZXBsYWNlWCA9IHRyYW5zZm9ybU9yaWdpblggLyBzY2FsZTtcbiAgdmFyIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZO1xuICB2YXIgdHJhbnNmb3JtID0ge1xuICAgIHRyYW5zbGF0ZTogJ3RyYW5zbGF0ZSgnICsgc3RhdGUudHJhbnNsYXRlWCArICcsICcgKyBzdGF0ZS50cmFuc2xhdGVZICsgJykgJyxcbiAgICBzY2FsZTogJ3RyYW5zbGF0ZSgnICsgc2NhbGVUcmFuc2Zvcm1YICsgJywgJyArIHNjYWxlVHJhbnNmb3JtWSArICcpIHNjYWxlKCcgKyBzY2FsZSArICcsICcgKyBzY2FsZVkgKyAnKSB0cmFuc2xhdGUoJyArIHNjYWxlUmVwbGFjZVggKyAnLCAnICsgc2NhbGVSZXBsYWNlWSArICcpICcsXG4gICAgcm90YXRlOiAncm90YXRlKCcgKyBzdGF0ZS5yb3RhdGUgKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWCArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5ZICsgJykgJyxcbiAgICBza2V3WDogJ3NrZXdYKCcgKyBzdGF0ZS5za2V3WCArICcpICcsXG4gICAgc2tld1k6ICdza2V3WSgnICsgc3RhdGUuc2tld1kgKyAnKSAnXG4gIH07XG5cbiAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHNbKDAsIF91dGlscy5jYW1lbFRvRGFzaCkoa2V5KV0gPSBzdGF0ZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgIGZvciAodmFyIF9rZXkgaW4gdHJhbnNmb3JtKSB7XG4gICAgICBpZiAodHJhbnNmb3JtLmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBfa2V5ID09PSAnc2NhbGUnID8gJzEnIDogJzAnO1xuICAgICAgICBwcm9wcy50cmFuc2Zvcm0gKz0gdHJhbnNmb3JtW19rZXldLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MMkoxYVd4a0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGTGQwSXNTenM3UVVGTWVFSTdPMEZCUTBFN096czdPenRCUVVWQkxFbEJRVTBzWjBKQlFXZENMRTFCUVhSQ096dEJRVVZsTEZOQlFWTXNTMEZCVkN4RFFVRmxMRXRCUVdZc1JVRkJjMElzU1VGQmRFSXNSVUZCTkVJN1FVRkRla01zVFVGQlNTeGxRVUZsTEV0QlFXNUNPMEZCUTBFc1RVRkJUU3hSUVVGUkxFVkJRV1E3UVVGRFFTeE5RVUZOTEZGQlFWRXNUVUZCVFN4TFFVRk9MRXRCUVdkQ0xGTkJRV2hDTEVkQlFUUkNMRTFCUVUwc1MwRkJUaXhKUVVGbExHRkJRVE5ETEVkQlFUSkVMRTFCUVUwc1RVRkJUaXhKUVVGblFpeERRVUY2Ump0QlFVTkJMRTFCUVUwc1UwRkJVeXhOUVVGTkxFMUJRVTRzUzBGQmFVSXNVMEZCYWtJc1IwRkJOa0lzVFVGQlRTeE5RVUZPTEVsQlFXZENMR0ZCUVRkRExFZEJRVFpFTEZOQlFWTXNRMEZCY2tZN1FVRkRRU3hOUVVGTkxHMUNRVUZ0UWl4TFFVRkxMRXRCUVV3c1NVRkJZeXhEUVVGRExFMUJRVTBzVDBGQlRpeEpRVUZwUWl4RlFVRnNRaXhKUVVGM1FpeEhRVUYwUXl4SlFVRTJReXhMUVVGTExFTkJRVE5GTzBGQlEwRXNUVUZCVFN4dFFrRkJiVUlzUzBGQlN5eE5RVUZNTEVsQlFXVXNRMEZCUXl4TlFVRk5MRTlCUVU0c1NVRkJhVUlzUlVGQmJFSXNTVUZCZDBJc1IwRkJka01zU1VGQk9FTXNTMEZCU3l4RFFVRTFSVHRCUVVOQkxFMUJRVTBzYTBKQlFXdENMRU5CUVVVc1owSkJRVVlzU1VGQmMwSXNVVUZCVVN4RFFVRTVRaXhEUVVGNFFqdEJRVU5CTEUxQlFVMHNhMEpCUVd0Q0xFTkJRVVVzWjBKQlFVWXNTVUZCYzBJc1UwRkJVeXhEUVVFdlFpeERRVUY0UWp0QlFVTkJMRTFCUVUwc1owSkJRV2RDTEcxQ1FVRnRRaXhMUVVGNlF6dEJRVU5CTEUxQlFVMHNaMEpCUVdkQ0xHMUNRVUZ0UWl4TlFVRjZRenRCUVVOQkxFMUJRVTBzV1VGQldUdEJRVU5vUWl3NFFrRkJkMElzVFVGQlRTeFZRVUU1UWl4VlFVRTJReXhOUVVGTkxGVkJRVzVFTEU5QlJHZENPMEZCUldoQ0xEQkNRVUZ2UWl4bFFVRndRaXhWUVVGM1F5eGxRVUY0UXl4blFrRkJhMFVzUzBGQmJFVXNWVUZCTkVVc1RVRkJOVVVzYjBKQlFXbEhMR0ZCUVdwSExGVkJRVzFJTEdGQlFXNUlMRTlCUm1kQ08wRkJSMmhDTEhkQ1FVRnJRaXhOUVVGTkxFMUJRWGhDTEZWQlFXMURMR2RDUVVGdVF5eFZRVUYzUkN4blFrRkJlRVFzVDBGSVowSTdRVUZKYUVJc2MwSkJRV2RDTEUxQlFVMHNTMEZCZEVJc1QwRktaMEk3UVVGTGFFSXNjMEpCUVdkQ0xFMUJRVTBzUzBGQmRFSTdRVUZNWjBJc1IwRkJiRUk3TzBGQlVVRXNUMEZCU3l4SlFVRkpMRWRCUVZRc1NVRkJaMElzUzBGQmFFSXNSVUZCZFVJN1FVRkRja0lzVVVGQlNTeE5RVUZOTEdOQlFVNHNRMEZCY1VJc1IwRkJja0lzUTBGQlNpeEZRVUVyUWp0QlFVTTNRaXhWUVVGSkxIbENRVUZsTEVkQlFXWXNRMEZCU2l4RlFVRjVRanRCUVVOMlFpeDFRa0ZCWlN4SlFVRm1PMEZCUTBRc1QwRkdSQ3hOUVVWUE8wRkJRMHdzWTBGQlRTeDNRa0ZCV1N4SFFVRmFMRU5CUVU0c1NVRkJNRUlzVFVGQlRTeEhRVUZPTEVOQlFURkNPMEZCUTBRN1FVRkRSanRCUVVOR096dEJRVVZFTEUxQlFVa3NXVUZCU2l4RlFVRnJRanRCUVVOb1FpeFZRVUZOTEZOQlFVNHNSMEZCYTBJc1JVRkJiRUk3TzBGQlJVRXNVMEZCU3l4SlFVRkpMRWxCUVZRc1NVRkJaMElzVTBGQmFFSXNSVUZCTWtJN1FVRkRla0lzVlVGQlNTeFZRVUZWTEdOQlFWWXNRMEZCZVVJc1NVRkJla0lzUTBGQlNpeEZRVUZ0UXp0QlFVTnFReXhaUVVGTkxHVkJRV2RDTEZOQlFWRXNUMEZCVkN4SFFVRnZRaXhIUVVGd1FpeEhRVUV3UWl4SFFVRXZRenRCUVVOQkxHTkJRVTBzVTBGQlRpeEpRVUZ0UWl4VlFVRlZMRWxCUVZZc1JVRkJaU3hQUVVGbUxFTkJRWFZDTEZsQlFYWkNMRVZCUVhGRExGbEJRWEpETEVOQlFXNUNPMEZCUTBRN1FVRkRSanRCUVVOR096dEJRVVZFTEZOQlFVOHNTMEZCVUR0QlFVTkVJaXdpWm1sc1pTSTZJbUoxYVd4a0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kyRnRaV3hVYjBSaGMyZ2dmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElIUnlZVzV6Wm05eWJWQnliM0J6SUdaeWIyMGdKeTR1TDJOemN5OTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVYRzVqYjI1emRDQmFSVkpQWDA1UFZGOWFSVkpQSUQwZ01DNHdNREF4TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCaWRXbHNaQ2h6ZEdGMFpTd2daR0YwWVNrZ2UxeHVJQ0JzWlhRZ2FHRnpWSEpoYm5ObWIzSnRJRDBnWm1Gc2MyVTdYRzRnSUdOdmJuTjBJSEJ5YjNCeklEMGdlMzA3WEc0Z0lHTnZibk4wSUhOallXeGxJRDBnYzNSaGRHVXVjMk5oYkdVZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhOMFlYUmxMbk5qWVd4bElIeDhJRnBGVWs5ZlRrOVVYMXBGVWs4Z09pQnpkR0YwWlM1elkyRnNaVmdnZkh3Z01UdGNiaUFnWTI5dWMzUWdjMk5oYkdWWklEMGdjM1JoZEdVdWMyTmhiR1ZaSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJ6ZEdGMFpTNXpZMkZzWlZrZ2ZId2dXa1ZTVDE5T1QxUmZXa1ZTVHlBNklITmpZV3hsSUh4OElERTdYRzRnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dQU0JrWVhSaExuZHBaSFJvSUNvZ0tDaHpkR0YwWlM1dmNtbG5hVzVZSUh4OElEVXdLU0F2SURFd01Da2dLeUJrWVhSaExuZzdYRzRnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsa2dQU0JrWVhSaExtaGxhV2RvZENBcUlDZ29jM1JoZEdVdWIzSnBaMmx1V1NCOGZDQTFNQ2tnTHlBeE1EQXBJQ3NnWkdGMFlTNTVPMXh1SUNCamIyNXpkQ0J6WTJGc1pWUnlZVzV6Wm05eWJWZ2dQU0F0SUhSeVlXNXpabTl5YlU5eWFXZHBibGdnS2lBb2MyTmhiR1VnS2lBeEtUdGNiaUFnWTI5dWMzUWdjMk5oYkdWVWNtRnVjMlp2Y20xWklEMGdMU0IwY21GdWMyWnZjbTFQY21sbmFXNVpJQ29nS0hOallXeGxXU0FxSURFcE8xeHVJQ0JqYjI1emRDQnpZMkZzWlZKbGNHeGhZMlZZSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V0NBdklITmpZV3hsTzF4dUlDQmpiMjV6ZENCelkyRnNaVkpsY0d4aFkyVlpJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0F2SUhOallXeGxXVHRjYmlBZ1kyOXVjM1FnZEhKaGJuTm1iM0p0SUQwZ2UxeHVJQ0FnSUhSeVlXNXpiR0YwWlRvZ1lIUnlZVzV6YkdGMFpTZ2tlM04wWVhSbExuUnlZVzV6YkdGMFpWaDlMQ0FrZTNOMFlYUmxMblJ5WVc1emJHRjBaVmw5S1NCZ0xGeHVJQ0FnSUhOallXeGxPaUJnZEhKaGJuTnNZWFJsS0NSN2MyTmhiR1ZVY21GdWMyWnZjbTFZZlN3Z0pIdHpZMkZzWlZSeVlXNXpabTl5YlZsOUtTQnpZMkZzWlNna2UzTmpZV3hsZlN3Z0pIdHpZMkZzWlZsOUtTQjBjbUZ1YzJ4aGRHVW9KSHR6WTJGc1pWSmxjR3hoWTJWWWZTd2dKSHR6WTJGc1pWSmxjR3hoWTJWWmZTa2dZQ3hjYmlBZ0lDQnliM1JoZEdVNklHQnliM1JoZEdVb0pIdHpkR0YwWlM1eWIzUmhkR1Y5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxoOUxDQWtlM1J5WVc1elptOXliVTl5YVdkcGJsbDlLU0JnTEZ4dUlDQWdJSE5yWlhkWU9pQmdjMnRsZDFnb0pIdHpkR0YwWlM1emEyVjNXSDBwSUdBc1hHNGdJQ0FnYzJ0bGQxazZJR0J6YTJWM1dTZ2tlM04wWVhSbExuTnJaWGRaZlNrZ1lGeHVJQ0I5TzF4dVhHNGdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQnpkR0YwWlNrZ2UxeHVJQ0FnSUdsbUlDaHpkR0YwWlM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQnBaaUFvZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ0lDQm9ZWE5VY21GdWMyWnZjbTBnUFNCMGNuVmxPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjSEp2Y0hOYlkyRnRaV3hVYjBSaGMyZ29hMlY1S1YwZ1BTQnpkR0YwWlZ0clpYbGRPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR2xtSUNob1lYTlVjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQndjbTl3Y3k1MGNtRnVjMlp2Y20wZ1BTQW5KenRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQWdJR2xtSUNoMGNtRnVjMlp2Y20wdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmtaV1poZFd4MFZtRnNkV1VnUFNBb2EyVjVJRDA5UFNBbmMyTmhiR1VuS1NBL0lDY3hKeUE2SUNjd0p6dGNiaUFnSUNBZ0lDQWdjSEp2Y0hNdWRISmhibk5tYjNKdElDczlJSFJ5WVc1elptOXliVnRyWlhsZExuSmxjR3hoWTJVb0wzVnVaR1ZtYVc1bFpDOW5MQ0JrWldaaGRXeDBWbUZzZFdVcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCd2NtOXdjenRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmcvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBmaWxsOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgc3Ryb2tlOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgc2NhbGU6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVg6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVk6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBkOiBfdmFsdWVUeXBlcy5jb21wbGV4LFxuICBwb2ludHM6IF92YWx1ZVR5cGVzLmNvbXBsZXgsXG4gIG9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhLFxuICBmaWxsT3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGEsXG4gIHN0cm9rZU9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwzWmhiSFZsTFhSNWNHVnpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3YTBKQlJXVTdRVUZEWWl4NVFrRkVZVHRCUVVWaUxESkNRVVpoTzBGQlIySXNNRUpCU0dFN1FVRkpZaXd5UWtGS1lUdEJRVXRpTERKQ1FVeGhPMEZCVFdJc2QwSkJUbUU3UVVGUFlpdzJRa0ZRWVR0QlFWRmlMRFJDUVZKaE8wRkJVMklzWjBOQlZHRTdRVUZWWWp0QlFWWmhMRU1pTENKbWFXeGxJam9pZG1Gc2RXVXRkSGx3WlhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCaGJIQm9ZU3dnWTI5c2IzSXNJR052YlhCc1pYZ3NJSE5qWVd4bElIMGdabkp2YlNBbkxpNHZMaTR2YVc1akwzWmhiSFZsTFhSNWNHVnpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQm1hV3hzT2lCamIyeHZjaXhjYmlBZ2MzUnliMnRsT2lCamIyeHZjaXhjYmlBZ2MyTmhiR1U2SUhOallXeGxMRnh1SUNCelkyRnNaVmc2SUhOallXeGxMRnh1SUNCelkyRnNaVms2SUhOallXeGxMRnh1SUNCa09pQmpiMjF3YkdWNExGeHVJQ0J3YjJsdWRITTZJR052YlhCc1pYZ3NYRzRnSUc5d1lXTnBkSGs2SUdGc2NHaGhMRnh1SUNCbWFXeHNUM0JoWTJsMGVUb2dZV3h3YUdFc1hHNGdJSE4wY205clpVOXdZV05wZEhrNklHRnNjR2hoWEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnL3ZhbHVlLXR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnQsIGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCAqIGxlbmd0aCArICdweCc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RhdGUsIGxlbmd0aCkge1xuICB2YXIgc3R5bGVzID0ge307XG4gIHZhciBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgbGVuZ3RoOiAwLFxuICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgfTtcbiAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MWEJoZEdndlluVnBiR1F1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3TzBGQlRVRXNTVUZCVFN4clFrRkJhMElzVlVGQlF5eFBRVUZFTEVWQlFWVXNUVUZCVmp0QlFVRkJMRk5CUVhOQ0xGZEJRVmNzVDBGQldDeEpRVUZ6UWl4SFFVRjJRaXhIUVVFNFFpeE5RVUU1UWl4SFFVRjFReXhKUVVFMVJEdEJRVUZCTEVOQlFYaENPenRyUWtGRlpTeFZRVUZETEV0QlFVUXNSVUZCVVN4TlFVRlNMRVZCUVcxQ08wRkJRMmhETEUxQlFVMHNVMEZCVXl4RlFVRm1PMEZCUTBFc1RVRkJUU3hyUWtGQmEwSTdRVUZEZEVJc1dVRkJVU3hEUVVSak8wRkJSWFJDTEdGQlFWTXNVMEZCVXp0QlFVWkpMRWRCUVhoQ08wRkJTVUVzVFVGQlNTeGxRVUZsTEV0QlFXNUNPenRCUVVWQkxFOUJRVXNzU1VGQlNTeEhRVUZVTEVsQlFXZENMRXRCUVdoQ0xFVkJRWFZDTzBGQlEzSkNMRkZCUVVrc1RVRkJUU3hqUVVGT0xFTkJRWEZDTEVkQlFYSkNMRU5CUVVvc1JVRkJLMEk3UVVGRE4wSXNWVUZCVFN4UlFVRlJMRTFCUVUwc1IwRkJUaXhEUVVGa096dEJRVVZCTEdOQlFWRXNSMEZCVWp0QlFVTkJMR0ZCUVVzc1VVRkJURHRCUVVOQkxHRkJRVXNzVTBGQlREdEJRVU5GTEhsQ1FVRmxMRWxCUVdZN1FVRkRRU3d3UWtGQlowSXNSMEZCYUVJc1NVRkJkVUlzWjBKQlFXZENMRXRCUVdoQ0xFVkJRWFZDTEUxQlFYWkNMRU5CUVhaQ08wRkJRMEU3UVVGRFJpeGhRVUZMTEZGQlFVdzdRVUZEUlN4cFFrRkJUeXh0UWtGQlVDeEpRVUU0UWl4blFrRkJaMElzUTBGQlF5eExRVUZxUWl4RlFVRjNRaXhOUVVGNFFpeERRVUU1UWp0QlFVTkJPMEZCUTBZN1FVRkRSU3hwUWtGQlR5eEhRVUZRTEVsQlFXTXNTMEZCWkR0QlFWWkdPMEZCV1VRN1FVRkRSanM3UVVGRlJDeE5RVUZKTEZsQlFVb3NSVUZCYTBJN1FVRkRhRUlzVjBGQlR5eHJRa0ZCVUN4SlFVRTJRaXhuUWtGQlowSXNUVUZCYUVJc1IwRkJlVUlzUjBGQmVrSXNSMEZCSzBJc1owSkJRV2RDTEU5QlFUVkZPMEZCUTBRN08wRkJSVVFzVTBGQlR5eE5RVUZRTzBGQlEwUXNReUlzSW1acGJHVWlPaUppZFdsc1pDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnSUVOdmJuWmxjblFnY0dWeVkyVnVkR0ZuWlNCMGJ5QndhWGhsYkhOY2JpQWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUdWeVkyVnVkR0ZuWlNCdlppQjBiM1JoYkNCc1pXNW5kR2hjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVWIzUmhiQ0JzWlc1bmRHaGNiaW92WEc1amIyNXpkQ0J3WlhKalpXNTBWRzlRYVhobGJITWdQU0FvY0dWeVkyVnVkQ3dnYkdWdVozUm9LU0E5UGlBb2NHRnljMlZHYkc5aGRDaHdaWEpqWlc1MEtTQXZJREV3TUNrZ0tpQnNaVzVuZEdnZ0t5QW5jSGduTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2MzUmhkR1VzSUd4bGJtZDBhQ2tnUFQ0Z2UxeHVJQ0JqYjI1emRDQnpkSGxzWlhNZ1BTQjdmVHRjYmlBZ1kyOXVjM1FnWkdGemFFRnljbUY1VTNSNWJHVnpJRDBnZTF4dUlDQWdJR3hsYm1kMGFEb2dNQ3hjYmlBZ0lDQnpjR0ZqYVc1bk9pQnNaVzVuZEdnZ0t5QW5jSGduWEc0Z0lIMDdYRzRnSUd4bGRDQm9ZWE5FWVhOb1FYSnlZWGtnUFNCbVlXeHpaVHRjYmx4dUlDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2MzUmhkR1VwSUh0Y2JpQWdJQ0JwWmlBb2MzUmhkR1V1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0J6ZEdGMFpWdHJaWGxkTzF4dVhHNGdJQ0FnSUNCemQybDBZMmdnS0d0bGVTa2dlMXh1SUNBZ0lDQWdZMkZ6WlNBbmJHVnVaM1JvSnpwY2JpQWdJQ0FnSUdOaGMyVWdKM053WVdOcGJtY25PbHh1SUNBZ0lDQWdJQ0JvWVhORVlYTm9RWEp5WVhrZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCa1lYTm9RWEp5WVhsVGRIbHNaWE5iYTJWNVhTQTlJSEJsY21ObGJuUlViMUJwZUdWc2N5aDJZV3gxWlN3Z2JHVnVaM1JvS1R0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0JqWVhObElDZHZabVp6WlhRbk9seHVJQ0FnSUNBZ0lDQnpkSGxzWlhOYkozTjBjbTlyWlMxa1lYTm9iMlptYzJWMEoxMGdQU0J3WlhKalpXNTBWRzlRYVhobGJITW9MWFpoYkhWbExDQnNaVzVuZEdncE8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0FnSUhOMGVXeGxjMXRyWlhsZElEMGdkbUZzZFdVN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FXWWdLR2hoYzBSaGMyaEJjbkpoZVNrZ2UxeHVJQ0FnSUhOMGVXeGxjMXNuYzNSeWIydGxMV1JoYzJoaGNuSmhlU2RkSUQwZ1pHRnphRUZ5Y21GNVUzUjViR1Z6TG14bGJtZDBhQ0FySUNjZ0p5QXJJR1JoYzJoQmNuSmhlVk4wZVd4bGN5NXpjR0ZqYVc1bk8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlITjBlV3hsY3p0Y2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9