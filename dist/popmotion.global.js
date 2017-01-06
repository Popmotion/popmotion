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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNLE9BQU8sVUFBQyxDQUFEO0FBQUEsU0FBTyxDQUFQO0FBQUEsQ0FBYjs7Ozs7Ozs7O0FBU08sSUFBTSxrQ0FBYSxVQUFDLElBQUQ7QUFBQSxTQUFVLFVBQUMsQ0FBRDtBQUFBLGdCQUFVLENBQVYsR0FBYyxJQUFkO0FBQUEsR0FBVjtBQUFBLENBQW5COzs7Ozs7Ozs7QUFTQSxJQUFNLDhCQUFXLFVBQUMsR0FBRDtBQUFBLFNBQVMsVUFBQyxDQUFEO0FBQUEsV0FBTyxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksR0FBWixDQUFQO0FBQUEsR0FBVDtBQUFBLENBQWpCO0FBQ0EsSUFBTSw4QkFBVyxVQUFDLEdBQUQ7QUFBQSxTQUFTLFVBQUMsQ0FBRDtBQUFBLFdBQU8sS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLEdBQVosQ0FBUDtBQUFBLEdBQVQ7QUFBQSxDQUFqQjtBQUNBLElBQU0sd0JBQVEsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFjO0FBQ2pDLE1BQU0sT0FBTyxTQUFTLEdBQVQsQ0FBYjtBQUNBLE1BQU0sT0FBTyxTQUFTLEdBQVQsQ0FBYjtBQUNBLFNBQU8sVUFBQyxDQUFEO0FBQUEsV0FBTyxLQUFLLEtBQUssQ0FBTCxDQUFMLENBQVA7QUFBQSxHQUFQO0FBQ0QsQ0FKTTs7QUFNQSxJQUFNLG9DQUFjLFVBQUMsU0FBRCxFQUFZLE1BQVo7QUFBQSxNQUFvQixPQUFwQix5REFBOEIsSUFBOUI7QUFBQSxTQUF1QyxVQUFDLENBQUQsRUFBTztBQUN2RSxXQUFPLFVBQVUsQ0FBVixJQUFlLE9BQU8sQ0FBUCxDQUFmLEdBQTJCLFFBQVEsQ0FBUixDQUFsQztBQUNELEdBRjBCO0FBQUEsQ0FBcEI7Ozs7Ozs7OztBQVdBLElBQU0sc0JBQU8sWUFBcUI7QUFBQSxvQ0FBakIsWUFBaUI7QUFBakIsZ0JBQWlCO0FB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LFlBQVEsR0FBUixHQUFjLE1BQU0sVUFBVSxHQUFoQixFQUFxQixRQUFRLEdBQTdCLEVBQWtDLENBQWxDLENBQWQ7QUFDQSxZQUFRLEtBQVIsR0FBZ0IsTUFBTSxVQUFVLEtBQWhCLEVBQXVCLFFBQVEsS0FBL0IsRUFBc0MsQ0FBdEMsQ0FBaEI7QUFDQSxZQUFRLElBQVIsR0FBZSxNQUFNLFVBQVUsSUFBaEIsRUFBc0IsUUFBUSxJQUE5QixFQUFvQyxDQUFwQyxDQUFmO0FBQ0EsWUFBUSxLQUFSLEdBQWdCLGdDQUFxQixVQUFVLEtBQS9CLEVBQXNDLFFBQVEsS0FBOUMsRUFBcUQsQ0FBckQsQ0FBaEI7QUFDQSxXQUFPLE9BQVA7QUFDRCxHQVREO0FBVUQsQ0FoQk0iLCJmaWxlIjoidHJhbnNmb3JtZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCBzdGVwUHJvZ3Jlc3MgfSBmcm9tICcuL2NhbGMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNvbG9yIGFzIHBhcnNlQ29sb3IgfSBmcm9tICcuL3BhcnNlcnMnO1xuXG5jb25zdCBub29wID0gKHYpID0+IHY7XG5cbi8qKlxuICogQXBwZW5kIFVuaXRcbiAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGVuZFxuICogYXBwZW5kVW5pdCgncHgnLCAyMCkgLT4gJzIwcHgnXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVuaXQpXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBhcHBlbmRVbml0ID0gKHVuaXQpID0+ICh2KSA9PiBgJHt2fSR7dW5pdH1gO1xuXG4vKipcbiAqIENsYW1wIHZhbHVlIGJldHdlZW5cbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVzdHJpY3QgYSBnaXZlbiB2YWx1ZSBiZXR3ZWVuIGBtaW5gIGFuZCBgbWF4YFxuICogQHBhcmFtICB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBjbGFtcE1heCA9IChtYXgpID0+ICh2KSA9PiBNYXRoLm1pbih2LCBtYXgpO1xuZXhwb3J0IGNvbnN0IGNsYW1wTWluID0gKG1pbikgPT4gKHYpID0+IE1hdGgubWF4KHYsIG1pbik7XG5leHBvcnQgY29uc3QgY2xhbXAgPSAobWluLCBtYXgpID0+IHtcbiAgY29uc3QgX21pbiA9IGNsYW1wTWluKG1pbik7XG4gIGNvbnN0IF9tYXggPSBjbGFtcE1heChtYXgpO1xuICByZXR1cm4gKHYpID0+IF9taW4oX21heCh2KSk7XG59O1xuXG5leHBvcnQgY29uc3QgY29uZGl0aW9uYWwgPSAoY29uZGl0aW9uLCBpZlRydWUsIGlmRmFsc2UgPSBub29wKSA9PiAodikgPT4ge1xuICByZXR1cm4gY29uZGl0aW9uKHYpID8gaWZUcnVlKHYpIDogaWZGYWxzZSh2KTtcbn07XG5cbi8qKlxuICogRmxvd1xuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogZmxvdyhtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgZmxvdyA9ICguLi50cmFuc2Zvcm1lcnMpID0+IHtcbiAgY29uc3QgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIHJldHVybiAoYWNjLCAuLi5hcmdzKSA9PiB7XG4gICAgbGV0IHYgPSBhY2M7XG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldKHYsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcblxuLyoqXG4gKiBJbnRlcnBvbGF0ZSBmcm9tIHNldCBvZiB2YWx1ZXMgdG8gYW5vdGhlclxuICogQHBhcmFtICB7QXJyYXl9IGlucHV0IGFycmF5XG4gKiBAcGFyYW0gIHtBcnJheX0gb3V0cHV0XG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gcmFuZ2VFYXNpbmdcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgaW50ZXJwb2xhdGUgPSAoaW5wdXQsIG91dHB1dCwgcmFuZ2VFYXNpbmcpID0+IHtcbiAgY29uc3QgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIGNvbnN0IGZpbmFsSW5kZXggPSByYW5nZUxlbmd0aCAtIDE7XG5cbiAgcmV0dXJuICh2KSA9PiB7XG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtaW5pbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2IDw9IGlucHV0WzBdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0WzBdO1xuICAgIH1cblxuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA+PSBpbnB1dFtmaW5hbEluZGV4XSkge1xuICAgICAgcmV0dXJuIG91dHB1dFtmaW5hbEluZGV4XTtcbiAgICB9XG5cbiAgICBsZXQgaSA9IDE7XG5cbiAgICAvLyBGaW5kIGluZGV4IG9mIHJhbmdlIHN0YXJ0XG4gICAgZm9yICg7IGkgPCByYW5nZUxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5wdXRbaV0gPiB2IHx8IGkgPT09IGZpbmFsSW5kZXgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJvZ3Jlc3NJblJhbmdlID0gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoaW5wdXRbaSAtIDFdLCBpbnB1dFtpXSwgdik7XG4gICAgY29uc3QgZWFzZWRQcm9ncmVzcyA9IChyYW5nZUVhc2luZykgPyByYW5nZUVhc2luZ1tpXShwcm9ncmVzc0luUmFuZ2UpIDogcHJvZ3Jlc3NJblJhbmdlO1xuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhvdXRwdXRbaSAtIDFdLCBvdXRwdXRbaV0sIGVhc2VkUHJvZ3Jlc3MpO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IG9mZnNldCA9IChvcmlnaW4pID0+ICh2KSA9PiB2IC0gb3JpZ2luO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZyA9IChhbHRlckRpc3BsYWNlbWVudCA9IG5vb3ApID0+IChjb25zdGFudCwgb3JpZ2luKSA9PiAodikgPT4ge1xuICBjb25zdCBkaXNwbGFjZW1lbnQgPSBvcmlnaW4gLSB2O1xuICBjb25zdCBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudCA9IC0gY29uc3RhbnQgKiAoMCAtIGFsdGVyRGlzcGxhY2VtZW50KE1hdGguYWJzKGRpc3BsYWNlbWVudCkpKTtcbiAgcmV0dXJuIChkaXNwbGFjZW1lbnQgPD0gMCkgPyBvcmlnaW4gKyBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudCA6IG9yaWdpbiAtIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IHNwcmluZyA9IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcoKTtcbmV4cG9ydCBjb25zdCBub25saW5lYXJTcHJpbmcgPSBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nKE1hdGguc3FydCk7XG5cbmV4cG9ydCBjb25zdCB3cmFwID0gKG1pbiwgbWF4KSA9PiAodikgPT4ge1xuICBjb25zdCByYW5nZVNpemUgPSBtYXggLSBtaW47XG4gIHJldHVybiAoKHYgLSBtaW4pICUgcmFuZ2VTaXplICsgcmFuZ2VTaXplKSAlIHJhbmdlU2l6ZSArIG1pbjtcbn07XG5cbmV4cG9ydCBjb25zdCBzdGVwcyA9IChzdGVwcywgbWluLCBtYXgpID0+ICh2KSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzID0gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUobWluLCBtYXgsIHYpO1xuICByZXR1cm4gc3RlcFByb2dyZXNzKHN0ZXBzLCBwcm9ncmVzcyk7XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSAoY2hpbGRUcmFuc2Zvcm1lcnMpID0+ICh2KSA9PiB7XG4gIGZvciAobGV0IGtleSBpbiB2KSB7XG4gICAgY29uc3QgY2hpbGRUcmFuc2Zvcm1lciA9IGNoaWxkVHJhbnNmb3JtZXJzW2tleV07XG4gICAgaWYgKGNoaWxkVHJhbnNmb3JtZXIpIHtcbiAgICAgIHZba2V5XSA9IGNoaWxkVHJhbnNmb3JtZXIodltrZXldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdjtcbn07XG5cbi8vIFVuaXQgdHJhbnNmb3JtZXJzXG5leHBvcnQgY29uc3QgcGVyY2VudCA9IGFwcGVuZFVuaXQoJyUnKTtcbmV4cG9ydCBjb25zdCBkZWdyZWVzID0gYXBwZW5kVW5pdCgnZGVnJyk7XG5leHBvcnQgY29uc3QgcHggPSBhcHBlbmRVbml0KCdweCcpO1xuXG5leHBvcnQgY29uc3QgcmdiVW5pdCA9IGZsb3coXG4gIGNsYW1wKDAsIDI1NSksXG4gIE1hdGgucm91bmRcbik7XG5cbmNvbnN0IHJnYmFUZW1wbGF0ZSA9ICh7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhID0gMSB9KSA9PiBcbiAgYHJnYmEoJHtyZWR9LCAke2dyZWVufSwgJHtibHVlfSwgJHthbHBoYX0pYDtcblxuZXhwb3J0IGNvbnN0IHJnYmEgPSBmbG93KFxuICB0cmFuc2Zvcm1DaGlsZFZhbHVlcyh7XG4gICAgcmVkOiByZ2JVbml0LFxuICAgIGdyZWVuOiByZ2JVbml0LFxuICAgIGJsdWU6IHJnYlVuaXQsXG4gICAgYWxwaGFcbiAgfSksXG4gIHJnYmFUZW1wbGF0ZVxuKTtcblxuY29uc3QgaHNsYVRlbXBsYXRlID0gKHsgaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGFscGhhID0gMSB9KSA9PiBcbiAgYGhzbGEoJHtodWV9LCAke3NhdHVyYXRpb259LCAke2xpZ2h0bmVzc30sICR7YWxwaGF9KWA7XG5cbmV4cG9ydCBjb25zdCBoc2xhID0gZmxvdyhcbiAgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMoe1xuICAgIGh1ZTogcGFyc2VGbG9hdCxcbiAgICBzYXR1cmF0aW9uOiBwZXJjZW50LFxuICAgIGxpZ2h0bmVzczogcGVyY2VudCxcbiAgICBhbHBoYVxuICB9KSxcbiAgaHNsYVRlbXBsYXRlXG4pO1xuXG5leHBvcnQgY29uc3QgY29sb3IgPSAodikgPT4ge1xuICBpZiAodi5oYXNPd25Qcm9wZXJ0eSgncmVkJykpIHtcbiAgICByZXR1cm4gcmdiYSh2KTtcbiAgfSBlbHNlIGlmICh2Lmhhc093blByb3BlcnR5KCdodWUnKSkge1xuICAgIHJldHVybiBoc2xhKHYpO1xuICB9XG4gIHJldHVybiB2O1xufTtcblxuZXhwb3J0IGNvbnN0IGFscGhhID0gY2xhbXAoMCwgMSk7XG5cbmNvbnN0IGJsZW5kID0gKGZyb20sIHRvLCB2KSA9PiB7XG4gIGNvbnN0IGZyb21FeHBvID0gZnJvbSAqIGZyb207XG4gIGNvbnN0IHRvRXhwbyA9IHRvICogdG87XG4gIHJldHVybiBNYXRoLnNxcnQodiAqICh0b0V4cG8gLSBmcm9tRXhwbykgKyBmcm9tRXhwbyk7XG59O1xuLy8gaHR0cDovL2NvZGVwZW4uaW8vb3N1Ymxha2UvcGVuL3hHVlZhTlxuZXhwb3J0IGNvbnN0IGJsZW5kQ29sb3IgPSAoZnJvbSwgdG8pID0+IHtcbiAgY29uc3QgZnJvbUNvbG9yID0gaXNTdHJpbmcoZnJvbSkgPyBwYXJzZUNvbG9yKGZyb20pIDogZnJvbTtcbiAgY29uc3QgdG9Db2xvciA9IGlzU3RyaW5nKHRvKSA/IHBhcnNlQ29sb3IodG8pOiB0bztcblxuICBjb25zdCBibGVuZGVkID0geyAuLi5mcm9tQ29sb3IgfTtcblxuICByZXR1cm4gKHYpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gYmxlbmRlZCkge1xuICAgICAgYmxlbmRlZFtrZXldID0gYmxlbmQoZnJvbUNvbG9yW2tleV0sIHRvQ29sb3Jba2V5XSwgdik7XG4gICAgfVxuICAgIGJsZW5kZWQucmVkID0gYmxlbmQoZnJvbUNvbG9yLnJlZCwgdG9Db2xvci5yZWQsIHYpO1xuICAgIGJsZW5kZWQuZ3JlZW4gPSBibGVuZChmcm9tQ29sb3IuZ3JlZW4sIHRvQ29sb3IuZ3JlZW4sIHYpO1xuICAgIGJsZW5kZWQuYmx1ZSA9IGJsZW5kKGZyb21Db2xvci5ibHVlLCB0b0NvbG9yLmJsdWUsIHYpO1xuICAgIGJsZW5kZWQuYWxwaGEgPSBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhmcm9tQ29sb3IuYWxwaGEsIHRvQ29sb3IuYWxwaGEsIHYpO1xuICAgIHJldHVybiBibGVuZGVkO1xuICB9O1xufTtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLHlCQUFNLENBQU4sRUFBUyxDQUFULENBQXRCOztBQUVBLFNBQVMsZUFBVCxDQUF5QixJQUF6QixFQUErQixFQUEvQixFQUFtQyxRQUFuQyxFQUE2QyxPQUE3QyxFQUFzRCxJQUF0RCxFQUE0RDtBQUMxRCxNQUFNLGlCQUFpQixLQUFLLGNBQWMsZ0NBQXFCLENBQXJCLEVBQXdCLFFBQXhCLEVBQWtDLE9BQWxDLENBQWQsQ0FBTCxDQUF2QjtBQUNBLFNBQU8sZ0NBQXFCLElBQXJCLEVBQTJCLEVBQTNCLEVBQStCLGNBQS9CLENBQVA7QUFDRDs7SUFFSyxVOzs7Ozs7Ozs7dUJBS0osTyxzQkFBVTtBQUFBLGlCQUNpQyxLQUFLLEtBRHRDO0FBQUEsUUFDQSxJQURBLFVBQ0EsSUFEQTtBQUFBLFFBQ00sRUFETixVQUNNLEVBRE47QUFBQSxRQUNVLFFBRFYsVUFDVSxRQURWO0FBQUEsUUFDb0IsUUFEcEIsVUFDb0IsUUFEcEI7O0FBRVIsUUFBTSxJQUFJLElBQVY7QUFDQSxRQUFNLElBQUksRUFBVjtBQUNBLFFBQU0sWUFBWSxFQUFFLFdBQUYsRUFBbEI7QUFDQSxRQUFNLFlBQVksRUFBRSxXQUFGLEVBQWxCOztBQUVBLFNBQUssUUFBTCxHQUFnQixZQUFZLEtBQUssR0FBTCxDQUMxQixZQUFZLEVBQUUsVUFBRixFQURjLEVBRTFCLFNBRjBCLENBQTVCOztBQUtBLFFBQU0sUUFBUSxFQUFFLE9BQUYsQ0FBVSxNQUFWLENBQWQ7QUFDQSxRQUFNLFFBQVEsRUFBRSxPQUFGLENBQVUsTUFBVixDQUFkO0FBQ0EsUUFBTSxRQUFRLEVBQUUsT0FBRixDQUFVLE1BQVYsQ0FBZDtBQUNBLFFBQU0sUUFBUSxFQUFFLE9BQUYsQ0FBVSxNQUFWLENBQWQ7QUFDQSxRQUFNLE1BQU0sRUFBRSxPQUFG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Qzs7a0JBdUZULFVBQUMsS0FBRDtBQUFBLFNBQVcsSUFBSSxVQUFKLENBQWUsS0FBZixDQUFYO0FBQUEsQyIsImZpbGUiOiJibGVuZC10d2VlbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vJztcbmltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGNsYW1wIH0gZnJvbSAnLi4vaW5jL3RyYW5zZm9ybWVycyc7XG5cbmNvbnN0IGNsYW1wUHJvZ3Jlc3MgPSBjbGFtcCgwLCAxKTtcblxuZnVuY3Rpb24gY2FsY1ZhbHVlQXRUaW1lKGZyb20sIHRvLCBkdXJhdGlvbiwgZWxhcHNlZCwgZWFzZSkge1xuICBjb25zdCBwcm9ncmVzc0F0VGltZSA9IGVhc2UoY2xhbXBQcm9ncmVzcyhnZXRQcm9ncmVzc0Zyb21WYWx1ZSgwLCBkdXJhdGlvbiwgZWxhcHNlZCkpKTtcbiAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGZyb20sIHRvLCBwcm9ncmVzc0F0VGltZSk7XG59XG5cbmNsYXNzIFR3ZWVuQmxlbmQgZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFjY3VyYWN5OiA2MFxuICB9O1xuXG4gIG9uU3RhcnQoKSB7XG4gICAgY29uc3QgeyBmcm9tLCB0bywgZHVyYXRpb24sIGFjY3VyYWN5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGEgPSBmcm9tO1xuICAgIGNvbnN0IGIgPSB0bztcbiAgICBjb25zdCBhRHVyYXRpb24gPSBhLmdldER1cmF0aW9uKCk7XG4gICAgY29uc3QgYkR1cmF0aW9uID0gYi5nZXREdXJhdGlvbigpO1xuXG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uIHx8IE1hdGgubWluKFxuICAgICAgYUR1cmF0aW9uIC0gYS5nZXRFbGFwc2VkKCksXG4gICAgICBiRHVyYXRpb25cbiAgICApO1xuXG4gICAgY29uc3QgYUVhc2UgPSBhLmdldFByb3AoJ2Vhc2UnKTtcbiAgICBjb25zdCBiRWFzZSA9IGIuZ2V0UHJvcCgnZWFzZScpO1xuICAgIGNvbnN0IGFGcm9tID0gYS5nZXRQcm9wKCdmcm9tJyk7XG4gICAgY29uc3QgYkZyb20gPSBiLmdldFByb3AoJ2Zyb20nKTtcbiAgICBjb25zdCBhVG8gPSBhLmdldFByb3AoJ3RvJyk7XG4gICAgY29uc3QgYlRvID0gYi5nZXRQcm9wKCd0bycpO1xuICAgIGNvbnN0IGJWYWx1ZUF0QmxlbmRDb21wbGV0ZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIHRoaXMuZHVyYXRpb24sIGJFYXNlKTtcbiAgICBjb25zdCBiU3RhcnRzSGlnaGVyVGhhbkEgPSBiRnJvbSA+IGEuZ2V0KCk7XG5cbiAgICB0aGlzLmJsZW5kUG9pbnRzID0gW1xuICAgICAgWzAsIGEuZ2V0KCldLFxuICAgICAgW3RoaXMuZHVyYXRpb24sIGJWYWx1ZUF0QmxlbmRDb21wbGV0ZV1cbiAgICBdO1xuXG4gICAgLy8gRmluZCB0d2VlbiBpbnRlcnNlY3Rpb25cbiAgICBjb25zdCB0aW1lc3RlcCA9IHRoaXMuZHVyYXRpb24gLyBhY2N1cmFjeTtcblxuICAgIGxldCBmb3VuZFAxID0gZmFsc2U7XG4gICAgbGV0IGZvdW5kUDIgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWNjdXJhY3k7IGkrKykge1xuICAgICAgY29uc3QgdG90YWxUaW1lID0gaSAqIHRpbWVzdGVwO1xuXG4gICAgICBjb25zdCBhVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYUZyb20sIGFUbywgYUR1cmF0aW9uLCBhLmVsYXBzZWQgKyB0b3RhbFRpbWUsIGFFYXNlKTtcbiAgICAgIGNvbnN0IGJWYWx1ZUF0VGltZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIGIuZWxhcHNlZCArIHRvdGFsVGltZSwgYkVhc2UpO1xuXG4gICAgICBjb25zdCBoYXNJbnRlcnNlY3RlZCA9IChcbiAgICAgICAgKGJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPCBiVmFsdWVBdFRpbWUpIHx8XG4gICAgICAgICghYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA+IGJWYWx1ZUF0VGltZSlcbiAgICAgICk7XG5cbiAgICAgIGlmICghZm91bmRQMSAmJiBoYXNJbnRlcnNlY3RlZCkge1xuICAgICAgICB0aGlzLmJsZW5kUG9pbnRzLnNwbGljZSgwLCAxLCBbdG90YWxUaW1lLCBiVmFsdWVBdFRpbWVdKTtcbiAgICAgICAgZm91bmRQMSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE8gZ28gYmFjayB0aHJvdWdoIGFuZCBjb21tZW50XG4gICAgICBjb25zdCBoYXNJbnRlcnNlY3RlZEIgPSAoXG4gICAgICAgIChiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lIDwgYlZhbHVlQXRUaW1lKSB8fFxuICAgICAgICAoIWJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPiBiVmFsdWVBdFRpbWUpXG4gICAgICApO1xuXG4gICAgICBpZiAoZm91bmRQMSAmJiBoYXNJbnRlcnNlY3RlZEIpIHtcbiAgICAgICAgdGhpcy5ibGVuZFBvaW50c1syXSA9IFt0b3RhbFRpbWUsIGJWYWx1ZUF0VGltZV07XG4gICAgICAgIGZvdW5kUDIgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm91bmRQMikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG8uc3RhcnQoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IGZyb20sIHRvIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGEgPSBmcm9tO1xuICAgIGNvbnN0IGIgPSB0bztcblxuICAgIGNvbnN0IHByb2dyZXNzID0gY2xhbXBQcm9ncmVzcyhnZXRQcm9ncmVzc0Zyb21WYWx1ZSh0aGlzLmJsZW5kUG9pbnRzWzBdWzBdLCB0aGlzLmJsZW5kUG9pbnRzWzJdWzBdLCBhLmdldEVsYXBzZWQoKSkpO1xuICAgIGlmIChwcm9ncmVzcyA+PSAxKSB7XG4gICAgICByZXR1cm4gYi5nZXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYVAgPSBnZXRWYWx1ZUZyb21Qcm9ncmVzcyh0aGlzLmJsZW5kUG9pbnRzWzBdWzFdLCB0aGlzLmJsZW5kUG9pbnRzWzFdWzFdLCBwcm9ncmVzcyk7XG4gICAgICBjb25zdCBiUCA9IGdldFZhbHVlRnJvbVByb2dyZXNzKHRoaXMuYmxlbmRQb2ludHNbMV1bMV0sIHRoaXMuYmxlbmRQb2ludHNbMl1bMV0sIHByb2dyZXNzKTtcbiAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhhUCwgYlAsIHByb2dyZXNzKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgVHdlZW5CbGVuZChwcm9wcyk7XG4iXX0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjA4NmU1NWYwZTg3M2NjOTFmNDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb2xvci10d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGFyYWxsZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wb2ludGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3BhcnNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9vbi1uZXh0LWZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvdmFsdWUtdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmcvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmcvdmFsdWUtdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7QUFDQSw0Q0FBMkMsbVg7Ozs7OztBQ1QzQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rix3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyx1MEU7Ozs7OztBQzVMM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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ZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZjA4NmU1NWYwZTg3M2NjOTFmNDZcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi9wb3Btb3Rpb24nKTtcblxudmFyIHBvcG1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wb3Btb3Rpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG53aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTluYkc5aVlXd3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFUczdTVUZCV1N4VE96czdPMEZCUTFvc1QwRkJUeXhUUVVGUUxFZEJRVzFDTEZOQlFXNUNJaXdpWm1sc1pTSTZJbWRzYjJKaGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENBcUlHRnpJSEJ2Y0cxdmRHbHZiaUJtY205dElDY3VMM0J2Y0cxdmRHbHZiaWM3WEc1M2FXNWtiM2N1Y0c5d2JXOTBhVzl1SUQwZ2NHOXdiVzkwYVc5dU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN2Z1BhdGggPSBleHBvcnRzLnN2ZyA9IGV4cG9ydHMuY3NzID0gZXhwb3J0cy5SZW5kZXJlciA9IGV4cG9ydHMudmFsdWUgPSBleHBvcnRzLnN0YWdnZXIgPSBleHBvcnRzLnR3ZWVuID0gZXhwb3J0cy5wb2ludGVyID0gZXhwb3J0cy5waHlzaWNzID0gZXhwb3J0cy5wYXJhbGxlbCA9IGV4cG9ydHMub2Zmc2V0ID0gZXhwb3J0cy5kZWxheSA9IGV4cG9ydHMuY3Jvc3NGYWRlID0gZXhwb3J0cy5jb21wb3NpdGUgPSBleHBvcnRzLmNvbG9yVHdlZW4gPSBleHBvcnRzLmNoYWluID0gZXhwb3J0cy5ibGVuZFR3ZWVucyA9IGV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy52YWx1ZVR5cGVzID0gZXhwb3J0cy50cmFuc2Zvcm0gPSBleHBvcnRzLmVhc2luZyA9IGV4cG9ydHMuY2FsYyA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4vZnJhbWVzeW5jJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVN0YXJ0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lU3RhcnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lVXBkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVJlbmRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVJlbmRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVFbmQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVFbmQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lU3RhcnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVTdGFydDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVVcGRhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVVcGRhdGU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lUmVuZGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lUmVuZGVyO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZUVuZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZUVuZDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3RpbWVTaW5jZUxhc3RGcmFtZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3VycmVudEZyYW1lVGltZXN0YW1wJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jdXJyZW50RnJhbWVUaW1lc3RhbXA7XG4gIH1cbn0pO1xuXG52YXIgX2NhbGMyID0gcmVxdWlyZSgnLi9pbmMvY2FsYycpO1xuXG52YXIgX2NhbGMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY2FsYzIpO1xuXG52YXIgX2Vhc2luZzIgPSByZXF1aXJlKCcuL2luYy9lYXNpbmcnKTtcblxudmFyIF9lYXNpbmcgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfZWFzaW5nMik7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdHJhbnNmb3JtID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3RyYW5zZm9ybWVycyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSByZXF1aXJlKCcuL2luYy92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdmFsdWVUeXBlczIpO1xuXG52YXIgX2FjdGlvbnMgPSByZXF1aXJlKCcuL2FjdGlvbnMnKTtcblxudmFyIF9hY3Rpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FjdGlvbnMpO1xuXG52YXIgX2JsZW5kVHdlZW5zMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9ibGVuZC10d2VlbnMnKTtcblxudmFyIF9ibGVuZFR3ZWVuczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ibGVuZFR3ZWVuczIpO1xuXG52YXIgX2NoYWluMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jaGFpbicpO1xuXG52YXIgX2NoYWluMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoYWluMik7XG5cbnZhciBfY29sb3JUd2VlbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY29sb3ItdHdlZW4nKTtcblxudmFyIF9jb2xvclR3ZWVuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yVHdlZW4yKTtcblxudmFyIF9jb21wb3NpdGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NvbXBvc2l0ZScpO1xuXG52YXIgX2NvbXBvc2l0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGUyKTtcblxudmFyIF9jcm9zc0ZhZGUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Nyb3NzLWZhZGUnKTtcblxudmFyIF9jcm9zc0ZhZGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3Jvc3NGYWRlMik7XG5cbnZhciBfZGVsYXkyID0gcmVxdWlyZSgnLi9hY3Rpb25zL2RlbGF5Jyk7XG5cbnZhciBfZGVsYXkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVsYXkyKTtcblxudmFyIF9vZmZzZXQyID0gcmVxdWlyZSgnLi9hY3Rpb25zL29mZnNldCcpO1xuXG52YXIgX29mZnNldDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vZmZzZXQyKTtcblxudmFyIF9wYXJhbGxlbDIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcGFyYWxsZWwnKTtcblxudmFyIF9wYXJhbGxlbDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJhbGxlbDIpO1xuXG52YXIgX3BoeXNpY3MyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BoeXNpY3MnKTtcblxudmFyIF9waHlzaWNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BoeXNpY3MyKTtcblxudmFyIF9wb2ludGVyMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9wb2ludGVyJyk7XG5cbnZhciBfcG9pbnRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb2ludGVyMik7XG5cbnZhciBfdHdlZW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4yKTtcblxudmFyIF9zdGFnZ2VyMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9zdGFnZ2VyJyk7XG5cbnZhciBfc3RhZ2dlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGFnZ2VyMik7XG5cbnZhciBfdmFsdWUyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3ZhbHVlJyk7XG5cbnZhciBfdmFsdWUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWUyKTtcblxudmFyIF9yZW5kZXJlcnMgPSByZXF1aXJlKCcuL3JlbmRlcmVycycpO1xuXG52YXIgX3JlbmRlcmVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW5kZXJlcnMpO1xuXG52YXIgX2NzczIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9jc3MnKTtcblxudmFyIF9jc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzMik7XG5cbnZhciBfc3ZnMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL3N2ZycpO1xuXG52YXIgX3N2ZzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmcyKTtcblxudmFyIF9zdmdQYXRoMiA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzL3N2Zy1wYXRoJyk7XG5cbnZhciBfc3ZnUGF0aDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmV4cG9ydHMuY2FsYyA9IF9jYWxjO1xuZXhwb3J0cy5lYXNpbmcgPSBfZWFzaW5nO1xuZXhwb3J0cy50cmFuc2Zvcm0gPSBfdHJhbnNmb3JtO1xuZXhwb3J0cy52YWx1ZVR5cGVzID0gX3ZhbHVlVHlwZXM7XG5cbi8vIEFjdGlvbnNcblxuZXhwb3J0cy5BY3Rpb24gPSBfYWN0aW9uczIuZGVmYXVsdDtcbmV4cG9ydHMuYmxlbmRUd2VlbnMgPSBfYmxlbmRUd2VlbnMzLmRlZmF1bHQ7XG5leHBvcnRzLmNoYWluID0gX2NoYWluMy5kZWZhdWx0O1xuZXhwb3J0cy5jb2xvclR3ZWVuID0gX2NvbG9yVHdlZW4zLmRlZmF1bHQ7XG5leHBvcnRzLmNvbXBvc2l0ZSA9IF9jb21wb3NpdGUzLmRlZmF1bHQ7XG5leHBvcnRzLmNyb3NzRmFkZSA9IF9jcm9zc0ZhZGUzLmRlZmF1bHQ7XG5leHBvcnRzLmRlbGF5ID0gX2RlbGF5My5kZWZhdWx0O1xuZXhwb3J0cy5vZmZzZXQgPSBfb2Zmc2V0My5kZWZhdWx0O1xuZXhwb3J0cy5wYXJhbGxlbCA9IF9wYXJhbGxlbDMuZGVmYXVsdDtcbmV4cG9ydHMucGh5c2ljcyA9IF9waHlzaWNzMy5kZWZhdWx0O1xuZXhwb3J0cy5wb2ludGVyID0gX3BvaW50ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnR3ZWVuID0gX3R3ZWVuMy5kZWZhdWx0O1xuZXhwb3J0cy5zdGFnZ2VyID0gX3N0YWdnZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnZhbHVlID0gX3ZhbHVlMy5kZWZhdWx0O1xuXG4vLyBSZW5kZXJlcnNcblxuZXhwb3J0cy5SZW5kZXJlciA9IF9yZW5kZXJlcnMyLmRlZmF1bHQ7XG5leHBvcnRzLmNzcyA9IF9jc3MzLmRlZmF1bHQ7XG5leHBvcnRzLnN2ZyA9IF9zdmczLmRlZmF1bHQ7XG5leHBvcnRzLnN2Z1BhdGggPSBfc3ZnUGF0aDMuZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2IzQnRiM1JwYjI0dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHpRa0ZGUlN4Wk96czdPenM3YzBKQlEwRXNZVHM3T3pzN08zTkNRVU5CTEdFN096czdPenR6UWtGRFFTeFZPenM3T3pzN2MwSkJRMEVzYTBJN096czdPenR6UWtGRFFTeHRRanM3T3pzN08zTkNRVU5CTEcxQ096czdPenM3YzBKQlEwRXNaMEk3T3pzN096dHpRa0ZEUVN4clFqczdPenM3TzNOQ1FVTkJMSEZDT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdVVUZIVlN4Sk8xRkJRMEVzVFR0UlFVTkJMRk03VVVGRFFTeFZPenM3TzFGQlIwd3NUVHRSUVVOQkxGYzdVVUZEUVN4TE8xRkJRMEVzVlR0UlFVTkJMRk03VVVGRFFTeFRPMUZCUTBFc1N6dFJRVU5CTEUwN1VVRkRRU3hSTzFGQlEwRXNUenRSUVVOQkxFODdVVUZEUVN4TE8xRkJRMEVzVHp0UlFVTkJMRXM3T3pzN1VVRkhRU3hSTzFGQlEwRXNSenRSUVVOQkxFYzdVVUZEUVN4UElpd2labWxzWlNJNkluQnZjRzF2ZEdsdmJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHZJRVp5WVcxbGMzbHVZeUJ6WTJobFpIVnNaWEp6WEc1bGVIQnZjblFnZTF4dUlDQnZia1p5WVcxbFUzUmhjblFzWEc0Z0lHOXVSbkpoYldWVmNHUmhkR1VzWEc0Z0lHOXVSbkpoYldWU1pXNWtaWElzWEc0Z0lHOXVSbkpoYldWRmJtUXNYRzRnSUdOaGJtTmxiRTl1Um5KaGJXVlRkR0Z5ZEN4Y2JpQWdZMkZ1WTJWc1QyNUdjbUZ0WlZWd1pHRjBaU3hjYmlBZ1kyRnVZMlZzVDI1R2NtRnRaVkpsYm1SbGNpeGNiaUFnWTJGdVkyVnNUMjVHY21GdFpVVnVaQ3hjYmlBZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbExGeHVJQ0JqZFhKeVpXNTBSbkpoYldWVWFXMWxjM1JoYlhCY2JuMGdabkp2YlNBbkxpOW1jbUZ0WlhONWJtTW5PMXh1WEc1bGVIQnZjblFnS2lCaGN5QmpZV3hqSUdaeWIyMGdKeTR2YVc1akwyTmhiR01uTzF4dVpYaHdiM0owSUNvZ1lYTWdaV0Z6YVc1bklHWnliMjBnSnk0dmFXNWpMMlZoYzJsdVp5YzdYRzVsZUhCdmNuUWdLaUJoY3lCMGNtRnVjMlp2Y20wZ1puSnZiU0FuTGk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6Snp0Y2JtVjRjRzl5ZENBcUlHRnpJSFpoYkhWbFZIbHdaWE1nWm5KdmJTQW5MaTlwYm1NdmRtRnNkV1V0ZEhsd1pYTW5PMXh1WEc0dkx5QkJZM1JwYjI1elhHNWxlSEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeWM3WEc1bGVIQnZjblFnWW14bGJtUlVkMlZsYm5NZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDJKc1pXNWtMWFIzWldWdWN5YzdYRzVsZUhCdmNuUWdZMmhoYVc0Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDJOb1lXbHVKenRjYm1WNGNHOXlkQ0JqYjJ4dmNsUjNaV1Z1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlqYjJ4dmNpMTBkMlZsYmljN1hHNWxlSEJ2Y25RZ1kyOXRjRzl6YVhSbElHWnliMjBnSnk0dllXTjBhVzl1Y3k5amIyMXdiM05wZEdVbk8xeHVaWGh3YjNKMElHTnliM056Um1Ga1pTQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlkzSnZjM010Wm1Ga1pTYzdYRzVsZUhCdmNuUWdaR1ZzWVhrZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDJSbGJHRjVKenRjYm1WNGNHOXlkQ0J2Wm1aelpYUWdabkp2YlNBbkxpOWhZM1JwYjI1ekwyOW1abk5sZENjN1hHNWxlSEJ2Y25RZ2NHRnlZV3hzWld3Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDNCaGNtRnNiR1ZzSnp0Y2JtVjRjRzl5ZENCd2FIbHphV056SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTl3YUhsemFXTnpKenRjYm1WNGNHOXlkQ0J3YjJsdWRHVnlJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OXdiMmx1ZEdWeUp6dGNibVY0Y0c5eWRDQjBkMlZsYmlCbWNtOXRJQ2N1TDJGamRHbHZibk12ZEhkbFpXNG5PMXh1Wlhod2IzSjBJSE4wWVdkblpYSWdabkp2YlNBbkxpOWhZM1JwYjI1ekwzTjBZV2RuWlhJbk8xeHVaWGh3YjNKMElIWmhiSFZsSUdaeWIyMGdKeTR2WVdOMGFXOXVjeTkyWVd4MVpTYzdYRzVjYmk4dklGSmxibVJsY21WeWMxeHVaWGh3YjNKMElGSmxibVJsY21WeUlHWnliMjBnSnk0dmNtVnVaR1Z5WlhKekp6dGNibVY0Y0c5eWRDQmpjM01nWm5KdmJTQW5MaTl5Wlc1a1pYSmxjbk12WTNOekp6dGNibVY0Y0c5eWRDQnpkbWNnWm5KdmJTQW5MaTl5Wlc1a1pYSmxjbk12YzNabkp6dGNibVY0Y0c5eWRDQnpkbWRRWVhSb0lHWnliMjBnSnk0dmNtVnVaR1Z5WlhKekwzTjJaeTF3WVhSb0p6dGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcG9wbW90aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zbW9vdGggPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBleHBvcnRzLmRpbGF0ZSA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuYW5nbGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG52YXIgdG9EZWNpbWFsID0gZnVuY3Rpb24gKG51bSkge1xuICB2YXIgcHJlY2lzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMiA6IGFyZ3VtZW50c1sxXTtcblxuICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG5cbnZhciBaRVJPX1BPSU5UID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB6OiAwXG59O1xuXG52YXIgZGlzdGFuY2UxRCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICBcbiAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gIGFyZSBhdCAwLDBcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbnZhciBhbmdsZSA9IGV4cG9ydHMuYW5nbGUgPSBmdW5jdGlvbiAoYSkge1xuICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG4gIHJldHVybiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbnZhciBkZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgRGlsYXRlXG4gIFxuICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gIFxuICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgXG4gIGEgLS0tLS0tLS0tIGJcbiAgXG4gIHRvXG4gIFxuICBhIC0tLS0gYlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG52YXIgZGlsYXRlID0gZXhwb3J0cy5kaWxhdGUgPSBmdW5jdGlvbiAoYSwgYiwgZGlsYXRpb24pIHtcbiAgcmV0dXJuIGEgKyAoYiAtIGEpICogZGlsYXRpb247XG59O1xuXG4vKlxuICBEaXN0YW5jZVxuICBcbiAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG4gIFxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG52YXIgZGlzdGFuY2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24gKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuXG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICB9IGVsc2Uge1xuICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICB2YXIgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgdmFyIHpEZWx0YSA9ICgwLCBfdXRpbHMuaXNOdW0pKGEueikgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xufTtcblxuLypcbiAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xudmFyIGdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGZ1bmN0aW9uIChmcm9tLCB0bywgcHJvZ3Jlc3MpIHtcbiAgcmV0dXJuIC1wcm9ncmVzcyAqIGZyb20gKyBwcm9ncmVzcyAqIHRvICsgZnJvbTtcbn07XG5cbi8qXG4gIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gIFxuICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbnZhciBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgfTtcbn07XG5cbi8qXG4gIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xufTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbnZhciBzbW9vdGggPSBleHBvcnRzLnNtb290aCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uKSB7XG4gIHZhciBzbW9vdGhpbmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzNdO1xuICByZXR1cm4gdG9EZWNpbWFsKG9sZFZhbHVlICsgZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh4cHMpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xufTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xudmFyIHN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gKHN0ZXBzLCBwcm9ncmVzcykge1xuICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgdmFyIHRhcmdldCA9IDEgLSAxIC8gc3RlcHM7XG4gIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlkyRnNZeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCT3pzN096czdPenM3UVVGVFFTeEpRVUZOTEZsQlFWa3NWVUZCUXl4SFFVRkVMRVZCUVhkQ08wRkJRVUVzVFVGQmJFSXNVMEZCYTBJc2VVUkJRVTRzUTBGQlRUczdRVUZEZUVNc2RVSkJRVmtzUlVGQldpeEZRVUZyUWl4VFFVRnNRanRCUVVOQkxGTkJRVThzUzBGQlN5eExRVUZNTEVOQlFWY3NUVUZCVFN4VFFVRnFRaXhKUVVFNFFpeFRRVUZ5UXp0QlFVTkVMRU5CU0VRN08wRkJTMEVzU1VGQlRTeGhRVUZoTzBGQlEycENMRXRCUVVjc1EwRkVZenRCUVVWcVFpeExRVUZITEVOQlJtTTdRVUZIYWtJc1MwRkJSenRCUVVoakxFTkJRVzVDT3p0QlFVMUJMRWxCUVUwc1lVRkJZU3hWUVVGRExFTkJRVVFzUlVGQlNTeERRVUZLTzBGQlFVRXNVMEZCVlN4TFFVRkxMRWRCUVV3c1EwRkJVeXhKUVVGSkxFTkJRV0lzUTBGQlZqdEJRVUZCTEVOQlFXNUNPenM3T3pzN096czdPenM3UVVGWlR5eEpRVUZOTEhkQ1FVRlJMRlZCUVVNc1EwRkJSRHRCUVVGQkxFMUJRVWtzUTBGQlNpeDVSRUZCVVN4VlFVRlNPMEZCUVVFc1UwRkJkVUlzYVVKQlFXbENMRXRCUVVzc1MwRkJUQ3hEUVVGWExFVkJRVVVzUTBGQlJpeEhRVUZOTEVWQlFVVXNRMEZCYmtJc1JVRkJjMElzUlVGQlJTeERRVUZHTEVkQlFVMHNSVUZCUlN4RFFVRTVRaXhEUVVGcVFpeERRVUYyUWp0QlFVRkJMRU5CUVdRN096czdPenM3TzBGQlVVRXNTVUZCVFN3NFEwRkJiVUlzVlVGQlF5eFBRVUZFTzBGQlFVRXNVMEZCWVN4VlFVRlZMRXRCUVVzc1JVRkJaaXhIUVVGdlFpeEhRVUZxUXp0QlFVRkJMRU5CUVhwQ096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVzlDUVN4SlFVRk5MREJDUVVGVExGVkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVb3NSVUZCVHl4UlFVRlFPMEZCUVVFc1UwRkJiMElzU1VGQlN5eERRVUZETEVsQlFVa3NRMEZCVEN4SlFVRlZMRkZCUVc1RE8wRkJRVUVzUTBGQlpqczdPenM3T3pzN096czdRVUZYUVN4SlFVRk5MRGhDUVVGWExGVkJRVU1zUTBGQlJDeEZRVUYxUWp0QlFVRkJMRTFCUVc1Q0xFTkJRVzFDTEhsRVFVRm1MRlZCUVdVN096dEJRVVUzUXl4TlFVRkpMR3RDUVVGTkxFTkJRVTRzUTBGQlNpeEZRVUZqTzBGQlExb3NWMEZCVHl4WFFVRlhMRU5CUVZnc1JVRkJZeXhEUVVGa0xFTkJRVkE3T3p0QlFVZEVMRWRCU2tRc1RVRkpUenRCUVVOTUxGRkJRVTBzVTBGQlV5eFhRVUZYTEVWQlFVVXNRMEZCWWl4RlFVRm5RaXhGUVVGRkxFTkJRV3hDTEVOQlFXWTdRVUZEUVN4UlFVRk5MRk5CUVZNc1YwRkJWeXhGUVVGRkxFTkJRV0lzUlVGQlowSXNSVUZCUlN4RFFVRnNRaXhEUVVGbU8wRkJRMEVzVVVGQlRTeFRRVUZWTEd0Q1FVRk5MRVZCUVVVc1EwRkJVaXhEUVVGRUxFZEJRV1VzVjBGQlZ5eEZRVUZGTEVOQlFXSXNSVUZCWjBJc1JVRkJSU3hEUVVGc1FpeERRVUZtTEVkQlFYTkRMRU5CUVhKRU96dEJRVVZCTEZkQlFVOHNTMEZCU3l4SlFVRk1MRU5CUVZVc1UwRkJReXhOUVVGRUxFVkJRVmNzUTBGQldDeGhRVUZwUWl4TlFVRnFRaXhGUVVFeVFpeERRVUV6UWl4aFFVRnBReXhOUVVGcVF5eEZRVUV5UXl4RFFVRXpReXhEUVVGV0xFTkJRVkE3UVVGRFJEdEJRVU5HTEVOQllrMDdPenM3T3pzN096czdPenM3TzBGQk1rSkJMRWxCUVUwc2MwUkJRWFZDTEZWQlFVTXNTVUZCUkN4RlFVRlBMRVZCUVZBc1JVRkJWeXhMUVVGWU8wRkJRVUVzVTBGQmNVSXNRMEZCUXl4UlFVRlJMRWxCUVZRc1MwRkJhMElzUzBGQlN5eEpRVUYyUWl4RFFVRnlRanRCUVVGQkxFTkJRVGRDT3pzN096czdPenM3T3pzN08wRkJZVUVzU1VGQlRTeHpSRUZCZFVJc1ZVRkJReXhKUVVGRUxFVkJRVThzUlVGQlVDeEZRVUZYTEZGQlFWZzdRVUZCUVN4VFFVRjVRaXhEUVVGRkxGRkJRVVlzUjBGQllTeEpRVUZrTEVkQlFYVkNMRmRCUVZjc1JVRkJiRU1zUjBGQmQwTXNTVUZCYUVVN1FVRkJRU3hEUVVFM1FqczdPenM3T3pzN096dEJRVlZCTEVsQlFVMHNaMFZCUVRSQ0xGVkJRVU1zVFVGQlJDeEZRVUZUTEV0QlFWUXNSVUZCWjBJc1VVRkJhRUlzUlVGQk5rSTdRVUZEY0VVc1ZVRkJVU3hwUWtGQmFVSXNTMEZCYWtJc1EwRkJVanM3UVVGRlFTeFRRVUZQTzBGQlEwd3NUMEZCUnl4WFFVRlhMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQldDeEhRVUUyUWl4UFFVRlBMRU5CUkd4RE8wRkJSVXdzVDBGQlJ5eFhRVUZYTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJXQ3hIUVVFMlFpeFBRVUZQTzBGQlJteERMRWRCUVZBN1FVRkpSQ3hEUVZCTk96czdPenM3T3p0QlFXVkJMRWxCUVUwc09FTkJRVzFDTEZWQlFVTXNUMEZCUkR0QlFVRkJMRk5CUVdFc1ZVRkJWU3hIUVVGV0xFZEJRV2RDTEV0QlFVc3NSVUZCYkVNN1FVRkJRU3hEUVVGNlFqczdPenM3T3pzN096dEJRVlZCTEVsQlFVMHNNRUpCUVZNc1ZVRkJReXhSUVVGRUxFVkJRVmNzVVVGQldDeEZRVUZ4UWl4UlFVRnlRanRCUVVGQkxFMUJRU3RDTEZOQlFTOUNMSGxFUVVFeVF5eERRVUV6UXp0QlFVRkJMRk5CUVdsRUxGVkJRVlVzVjBGQldTeFpRVUZaTEZkQlFWY3NVVUZCZGtJc1NVRkJiVU1zUzBGQlN5eEhRVUZNTEVOQlFWTXNVMEZCVkN4RlFVRnZRaXhSUVVGd1FpeERRVUY2UkN4RFFVRnFSRHRCUVVGQkxFTkJRV1k3T3pzN096czdPMEZCVVVFc1NVRkJUU3gzUTBGQlowSXNWVUZCUXl4SFFVRkVMRVZCUVUwc1lVRkJUanRCUVVGQkxGTkJRWGxDTEd0Q1FVRk5MRWRCUVU0c1EwRkJSQ3hIUVVGbExFOUJRVThzVDBGQlR5eGhRVUZrTEVOQlFXWXNSMEZCT0VNc1EwRkJkRVU3UVVGQlFTeERRVUYwUWpzN096czdPenM3UVVGUlFTeEpRVUZOTERCRFFVRnBRaXhWUVVGRExGRkJRVVFzUlVGQlZ5eGhRVUZZTzBGQlFVRXNVMEZCTmtJc1dVRkJXU3hQUVVGUExHRkJRVzVDTEVOQlFUZENPMEZCUVVFc1EwRkJka0k3T3pzN096czdPenRCUVZOQkxFbEJRVTBzYzBOQlFXVXNWVUZCUXl4TFFVRkVMRVZCUVZFc1VVRkJVaXhGUVVGeFFqdEJRVU12UXl4TlFVRk5MRlZCUVZVc1MwRkJTeXhSUVVGUkxFTkJRV0lzUTBGQmFFSTdRVUZEUVN4TlFVRk5MRk5CUVZNc1NVRkJTeXhKUVVGSkxFdEJRWGhDTzBGQlEwRXNUVUZCVFN4dFFrRkJiVUlzUzBGQlN5eEhRVUZNTEVOQlFWTXNWMEZCVnl4TlFVRndRaXhGUVVFMFFpeERRVUUxUWl4RFFVRjZRanM3UVVGRlFTeFRRVUZQTEV0QlFVc3NTMEZCVEN4RFFVRlhMRzFDUVVGdFFpeFBRVUU1UWl4SlFVRjVReXhQUVVGb1JEdEJRVU5FTEVOQlRrMGlMQ0ptYVd4bElqb2lZMkZzWXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdselRuVnRJSDBnWm5KdmJTQW5MaTkxZEdsc2N5YzdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdiblZ0WW1WeUlIUnZJSGdnWkdWamFXMWhiQ0J3YkdGalpYTmNibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wxY2Jpb3ZYRzVqYjI1emRDQjBiMFJsWTJsdFlXd2dQU0FvYm5WdExDQndjbVZqYVhOcGIyNGdQU0F5S1NBOVBpQjdYRzRnSUhCeVpXTnBjMmx2YmlBOUlERXdJQ29xSUhCeVpXTnBjMmx2Ymp0Y2JpQWdjbVYwZFhKdUlFMWhkR2d1Y205MWJtUW9iblZ0SUNvZ2NISmxZMmx6YVc5dUtTQXZJSEJ5WldOcGMybHZianRjYm4wN1hHNWNibU52Ym5OMElGcEZVazlmVUU5SlRsUWdQU0I3WEc0Z0lIZzZJREFzWEc0Z0lIazZJREFzWEc0Z0lIbzZJREJjYm4wN1hHNWNibU52Ym5OMElHUnBjM1JoYm1ObE1VUWdQU0FvWVN3Z1lpa2dQVDRnVFdGMGFDNWhZbk1vWVNBdElHSXBPMXh1WEc0dktseHVJQ0JCYm1kc1pTQmlaWFIzWldWdUlIQnZhVzUwYzF4dUlDQmNiaUFnVkhKaGJuTnNZWFJsY3lCMGFHVWdhSGx3YjNSb1pYUnBZMkZzSUd4cGJtVWdjMjhnZEdoaGRDQjBhR1VnSjJaeWIyMG5JR052YjNKa2FXNWhkR1Z6WEc0Z0lHRnlaU0JoZENBd0xEQmNiaUFnWEc0Z0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1dDQmhibVFnV1NCamIyOXlaR2x1WVhSbGN5QnZaaUJtY205dElIQnZhVzUwWEc0Z0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1dDQmhibVFnV1NCamIzSmthVzVoZEdWeklHOW1JSFJ2SUhCdmFXNTBYRzRnSUVCeVpYUjFjbTRnVzNKaFpHbGhibDA2SUVGdVoyeGxJR0psZEhkbFpXNGdkR2hsSUhSM2J5QndiMmx1ZEhNZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmhibWRzWlNBOUlDaGhMQ0JpSUQwZ1drVlNUMTlRVDBsT1ZDa2dQVDRnY21Ga2FXRnVjMVJ2UkdWbmNtVmxjeWhOWVhSb0xtRjBZVzR5S0dFdWVDQXRJR0l1ZUN3Z1lTNTVJQzBnWWk1NUtTazdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdaR1ZuY21WbGN5QjBieUJ5WVdScFlXNXpYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlHUmxaM0psWlhOY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmtaV2R5WldWelZHOVNZV1JwWVc1eklEMGdLR1JsWjNKbFpYTXBJRDArSUdSbFozSmxaWE1nS2lCTllYUm9MbEJKSUM4Z01UZ3dPMXh1WEc0dktseHVJQ0JFYVd4aGRHVmNiaUFnWEc0Z0lFTm9ZVzVuWlNCMGFHVWdjSEp2WjNKbGMzTnBiMjRnWW1WMGQyVmxiaUJoSUdGdVpDQmlJR0ZqWTI5eVpHbHVaeUIwYnlCa2FXeGhkR2x2Ymk1Y2JpQWdYRzRnSUZOdklHUnBiR0YwYVc5dUlEMGdNQzQxSUhkdmRXeGtJR05vWVc1blpWeHVJQ0JjYmlBZ1lTQXRMUzB0TFMwdExTMGdZbHh1SUNCY2JpQWdkRzljYmlBZ1hHNGdJR0VnTFMwdExTQmlYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVScGJHRjBaU0J3Y205bmNtVnpjeUJpZVNCNFhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRkJ5WlhacGIzVnpJSFpoYkhWbElIQnNkWE1nZEdobElHUnBiR0YwWldRZ1pHbG1abVZ5Wlc1alpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmthV3hoZEdVZ1BTQW9ZU3dnWWl3Z1pHbHNZWFJwYjI0cElEMCtJR0VnS3lBb0tHSWdMU0JoS1NBcUlHUnBiR0YwYVc5dUtUdGNibHh1THlwY2JpQWdSR2x6ZEdGdVkyVmNiaUFnWEc0Z0lGSmxkSFZ5Ym5NZ2RHaGxJR1JwYzNSaGJtTmxJR0psZEhkbFpXNGdkSGR2SUc0Z1pHbHRaVzV6YVc5dVlXd2djRzlwYm5SekxseHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dlltcGxZM1F2Ym5WdFltVnlYVG9nZUNCaGJtUWdlU0J2Y2lCcWRYTjBJSGdnYjJZZ2NHOXBiblFnUVZ4dUlDQkFjR0Z5WVcwZ1cyOWlhbVZqZEM5dWRXMWlaWEpkT2lBb2IzQjBhVzl1WVd3cE9pQjRJR0Z1WkNCNUlHOXlJR3AxYzNRZ2VDQnZaaUJ3YjJsdWRDQkNYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZSb1pTQmthWE4wWVc1alpTQmlaWFIzWldWdUlIUm9aU0IwZDI4Z2NHOXBiblJ6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdScGMzUmhibU5sSUQwZ0tHRXNJR0lnUFNCYVJWSlBYMUJQU1U1VUtTQTlQaUI3WEc0Z0lDOHZJREZFSUdScGJXVnVjMmx2Ym5OY2JpQWdhV1lnS0dselRuVnRLR0VwS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1JwYzNSaGJtTmxNVVFvWVN3Z1lpazdYRzVjYmlBZ0x5OGdUWFZzZEdrdFpHbHRaVzV6YVc5dVlXeGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmpiMjV6ZENCNFJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlQ3dnWWk1NEtUdGNiaUFnSUNCamIyNXpkQ0I1UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVTd2dZaTU1S1R0Y2JpQWdJQ0JqYjI1emRDQjZSR1ZzZEdFZ1BTQW9hWE5PZFcwb1lTNTZLU2tnUHlCa2FYTjBZVzVqWlRGRUtHRXVlaXdnWWk1NktTQTZJREE3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdUV0YwYUM1emNYSjBLQ2g0UkdWc2RHRWdLaW9nTWlrZ0t5QW9lVVJsYkhSaElDb3FJRElwSUNzZ0tIcEVaV3gwWVNBcUtpQXlLU2s3WEc0Z0lIMWNibjA3WEc1Y2JpOHFYRzRnSUZCeWIyZHlaWE56SUhkcGRHaHBiaUJuYVhabGJpQnlZVzVuWlZ4dUlDQmNiaUFnUjJsMlpXNGdZU0JzYjNkbGNpQnNhVzFwZENCaGJtUWdZVzRnZFhCd1pYSWdiR2x0YVhRc0lIZGxJSEpsZEhWeWJpQjBhR1VnY0hKdlozSmxjM05jYmlBZ0tHVjRjSEpsYzNObFpDQmhjeUJoSUc1MWJXSmxjaUF3TFRFcElISmxjSEpsYzJWdWRHVmtJR0o1SUhSb1pTQm5hWFpsYmlCMllXeDFaU3dnWVc1a1hHNGdJR3hwYldsMElIUm9ZWFFnY0hKdlozSmxjM01nZEc4Z2QybDBhR2x1SURBdE1TNWNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RHOTNaWElnYkdsdGFYUWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlhCd1pYSWdiR2x0YVhSY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCMGJ5Qm1hVzVrSUhCeWIyZHlaWE56SUhkcGRHaHBiaUJuYVhabGJpQnlZVzVuWlZ4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlFjbTluY21WemN5QnZaaUIyWVd4MVpTQjNhWFJvYVc0Z2NtRnVaMlVnWVhNZ1pYaHdjbVZ6YzJWa0lEQXRNVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNBOUlDaG1jbTl0TENCMGJ5d2dkbUZzZFdVcElEMCtJQ2gyWVd4MVpTQXRJR1p5YjIwcElDOGdLSFJ2SUMwZ1puSnZiU2s3WEc1Y2JpOHFYRzRnSUZaaGJIVmxJR2x1SUhKaGJtZGxJR1p5YjIwZ2NISnZaM0psYzNOY2JpQWdYRzRnSUVkcGRtVnVJR0VnYkc5M1pYSWdiR2x0YVhRZ1lXNWtJR0Z1SUhWd2NHVnlJR3hwYldsMExDQjNaU0J5WlhSMWNtNGdkR2hsSUhaaGJIVmxJSGRwZEdocGJseHVJQ0IwYUdGMElISmhibWRsSUdGeklHVjRjSEpsYzNObFpDQmllU0J3Y205bmNtVnpjeUFvWVNCdWRXMWlaWElnWm5KdmJTQXdMVEVwWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZYQndaWElnYkdsdGFYUWdiMllnY21GdVoyVmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJVYUdVZ2NISnZaM0psYzNNZ1ltVjBkMlZsYmlCc2IzZGxjaUJoYm1RZ2RYQndaWElnYkdsdGFYUnpJR1Y0Y0hKbGMzTmxaQ0F3TFRGY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ1lYTWdZMkZzWTNWc1lYUmxaQ0JtY205dElIQnliMmR5WlhOeklIZHBkR2hwYmlCeVlXNW5aU0FvYm05MElHeHBiV2wwWldRZ2QybDBhR2x1SUhKaGJtZGxLVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lBOUlDaG1jbTl0TENCMGJ5d2djSEp2WjNKbGMzTXBJRDArSUNndElIQnliMmR5WlhOeklDb2dabkp2YlNrZ0t5QW9jSEp2WjNKbGMzTWdLaUIwYnlrZ0t5Qm1jbTl0TzF4dVhHNHZLbHh1SUNCUWIybHVkQ0JtY205dElHRnVaMnhsSUdGdVpDQmthWE4wWVc1alpWeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lBeVJDQndiMmx1ZENCdlppQnZjbWxuYVc1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkJibWRzWlNCbWNtOXRJRzl5YVdkcGJseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVJwYzNSaGJtTmxJR1p5YjIwZ2IzSnBaMmx1WEc0Z0lFQnlaWFIxY200Z1cyOWlhbVZqZEYwNklFTmhiR04xYkdGMFpXUWdNa1FnY0c5cGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjRzlwYm5SR2NtOXRRVzVuYkdWQmJtUkVhWE4wWVc1alpTQTlJQ2h2Y21sbmFXNHNJR0Z1WjJ4bExDQmthWE4wWVc1alpTa2dQVDRnZTF4dUlDQmhibWRzWlNBOUlHUmxaM0psWlhOVWIxSmhaR2xoYm5Nb1lXNW5iR1VwTzF4dVhHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2VEb2daR2x6ZEdGdVkyVWdLaUJOWVhSb0xtTnZjeWhoYm1kc1pTa2dLeUJ2Y21sbmFXNHVlQ3hjYmlBZ0lDQjVPaUJrYVhOMFlXNWpaU0FxSUUxaGRHZ3VjMmx1S0dGdVoyeGxLU0FySUc5eWFXZHBiaTU1WEc0Z0lIMDdYRzU5TzF4dVhHNHZLbHh1SUNCRGIyNTJaWEowSUhKaFpHbGhibk1nZEc4Z1pHVm5jbVZsYzF4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJ5WVdScFlXNXpYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUdSbFozSmxaWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21Ga2FXRnVjMVJ2UkdWbmNtVmxjeUE5SUNoeVlXUnBZVzV6S1NBOVBpQnlZV1JwWVc1eklDb2dNVGd3SUM4Z1RXRjBhQzVRU1R0Y2JseHVMeXBjYmlBZ1JuSmhiV1Z5WVhSbExXbHVaR1Z3Wlc1a1pXNTBJSE50YjI5MGFHbHVaMXh1WEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RtVjNJSFpoYkhWbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUMnhrSUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRJQ2h2Y0hScGIyNWhiQ2s2SUZOdGIyOTBhR2x1WnlBb01DQnBjeUJ1YjI1bEtWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpiVzl2ZEdnZ1BTQW9ibVYzVm1Gc2RXVXNJRzlzWkZaaGJIVmxMQ0JrZFhKaGRHbHZiaXdnYzIxdmIzUm9hVzVuSUQwZ01Da2dQVDRnZEc5RVpXTnBiV0ZzS0c5c1pGWmhiSFZsSUNzZ0tHUjFjbUYwYVc5dUlDb2dLRzVsZDFaaGJIVmxJQzBnYjJ4a1ZtRnNkV1VwSUM4Z1RXRjBhQzV0WVhnb2MyMXZiM1JvYVc1bkxDQmtkWEpoZEdsdmJpa3BLVHRjYmx4dUx5cGNiaUFnUTI5dWRtVnlkQ0I0SUhCbGNpQnpaV052Ym1RZ2RHOGdjR1Z5SUdaeVlXMWxJSFpsYkc5amFYUjVJR0poYzJWa0lHOXVJR1p3YzF4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWYm1sMElIQmxjaUJ6WldOdmJtUmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJHY21GdFpTQmtkWEpoZEdsdmJpQnBiaUJ0YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemNHVmxaRkJsY2taeVlXMWxJRDBnS0hod2N5d2dabkpoYldWRWRYSmhkR2x2YmlrZ1BUNGdLR2x6VG5WdEtIaHdjeWtwSUQ4Z2VIQnpJQzhnS0RFd01EQWdMeUJtY21GdFpVUjFjbUYwYVc5dUtTQTZJREE3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnZG1Wc2IyTnBkSGtnYVc1MGJ5QjJaV3hwWTJsMGVTQndaWElnYzJWamIyNWtYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVnVhWFFnY0dWeUlHWnlZVzFsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjRnYVc0Z2JYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JsWldSUVpYSlRaV052Ym1RZ1BTQW9kbVZzYjJOcGRIa3NJR1p5WVcxbFJIVnlZWFJwYjI0cElEMCtJSFpsYkc5amFYUjVJQ29nS0RFd01EQWdMeUJtY21GdFpVUjFjbUYwYVc5dUtUdGNibHh1THlwY2JpQWdRM0psWVhSbElITjBaWEJ3WldRZ2RtVnljMmx2YmlCdlppQXdMVEVnY0hKdlozSmxjM05jYmlBZ1hHNGdJRUJ3WVhKaGJTQmJhVzUwWFRvZ1RuVnRZbVZ5SUc5bUlITjBaWEJ6WEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCVGRHVndjR1ZrSUhaaGJIVmxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE4wWlhCUWNtOW5jbVZ6Y3lBOUlDaHpkR1Z3Y3l3Z2NISnZaM0psYzNNcElEMCtJSHRjYmlBZ1kyOXVjM1FnYzJWbmJXVnVkQ0E5SURFZ0x5QW9jM1JsY0hNZ0xTQXhLVHRjYmlBZ1kyOXVjM1FnZEdGeVoyVjBJRDBnTVNBdElDZ3hJQzhnYzNSbGNITXBPMXh1SUNCamIyNXpkQ0J3Y205bmNtVnpjMDltVkdGeVoyVjBJRDBnVFdGMGFDNXRhVzRvY0hKdlozSmxjM01nTHlCMFlYSm5aWFFzSURFcE8xeHVYRzRnSUhKbGRIVnliaUJOWVhSb0xtWnNiMjl5S0hCeWIyZHlaWE56VDJaVVlYSm5aWFFnTHlCelpXZHRaVzUwS1NBcUlITmxaMjFsYm5RN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2NhbGMuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCA9IDEuNTI1O1xuXG52YXIgY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZVJldmVyc2VkRWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2luZygxIC0gcCk7XG4gIH07XG59O1xudmFyIGNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVNaXJyb3JlZEVhc2luZyA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPD0gMC41ID8gZWFzaW5nKDIgKiBwKSAvIDIgOiAoMiAtIGVhc2luZygyICogKDEgLSBwKSkpIC8gMjtcbiAgfTtcbn07XG5cbnZhciBsaW5lYXIgPSBleHBvcnRzLmxpbmVhciA9IGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwO1xufTtcblxudmFyIGNyZWF0ZUV4cG9JbiA9IGV4cG9ydHMuY3JlYXRlRXhwb0luID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBNYXRoLnBvdyhwLCBwb3dlcik7XG4gIH07XG59O1xudmFyIGVhc2VJbiA9IGV4cG9ydHMuZWFzZUluID0gY3JlYXRlRXhwb0luKDIpO1xudmFyIGVhc2VPdXQgPSBleHBvcnRzLmVhc2VPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhlYXNlSW4pO1xudmFyIGVhc2VJbk91dCA9IGV4cG9ydHMuZWFzZUluT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoZWFzZUluKTtcblxudmFyIGNpcmNJbiA9IGV4cG9ydHMuY2lyY0luID0gZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocCkpO1xufTtcbnZhciBjaXJjT3V0ID0gZXhwb3J0cy5jaXJjT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoY2lyY0luKTtcbnZhciBjaXJjSW5PdXQgPSBleHBvcnRzLmNpcmNJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGNpcmNPdXQpO1xuXG52YXIgY3JlYXRlQmFja0luID0gZXhwb3J0cy5jcmVhdGVCYWNrSW4gPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgKiBwICogKChwb3dlciArIDEpICogcCAtIHBvd2VyKTtcbiAgfTtcbn07XG52YXIgYmFja0luID0gZXhwb3J0cy5iYWNrSW4gPSBjcmVhdGVCYWNrSW4oREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xudmFyIGJhY2tPdXQgPSBleHBvcnRzLmJhY2tPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhiYWNrSW4pO1xudmFyIGJhY2tJbk91dCA9IGV4cG9ydHMuYmFja0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoYmFja0luKTtcblxudmFyIGNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZUFudGljaXBhdGVFYXNpbmcgPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgdmFyIGJhY2tFYXNpbmcgPSBjcmVhdGVCYWNrSW4ocG93ZXIpO1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gKHAgKj0gMikgPCAxID8gMC41ICogYmFja0Vhc2luZyhwKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHAgLSAxKSkpO1xuICB9O1xufTtcblxudmFyIGFudGljaXBhdGUgPSBleHBvcnRzLmFudGljaXBhdGUgPSBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZaV0Z6YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxFbEJRVTBzTmtKQlFUWkNMRXRCUVc1RE96dEJRVVZQTEVsQlFVMHNjMFJCUVhWQ0xGVkJRVU1zVFVGQlJEdEJRVUZCTEZOQlFWa3NWVUZCUXl4RFFVRkVPMEZCUVVFc1YwRkJUeXhKUVVGSkxFOUJRVThzU1VGQlNTeERRVUZZTEVOQlFWZzdRVUZCUVN4SFFVRmFPMEZCUVVFc1EwRkJOMEk3UVVGRFFTeEpRVUZOTEhORVFVRjFRaXhWUVVGRExFMUJRVVE3UVVGQlFTeFRRVUZaTEZWQlFVTXNRMEZCUkR0QlFVRkJMRmRCUVZFc1MwRkJTeXhIUVVGT0xFZEJRV0VzVDBGQlR5eEpRVUZKTEVOQlFWZ3NTVUZCWjBJc1EwRkJOMElzUjBGQmFVTXNRMEZCUXl4SlFVRkpMRTlCUVU4c1MwRkJTeXhKUVVGSkxFTkJRVlFzUTBGQlVDeERRVUZNTEVsQlFUUkNMRU5CUVhCRk8wRkJRVUVzUjBGQldqdEJRVUZCTEVOQlFUZENPenRCUVVWQkxFbEJRVTBzTUVKQlFWTXNWVUZCUXl4RFFVRkVPMEZCUVVFc1UwRkJUeXhEUVVGUU8wRkJRVUVzUTBGQlpqczdRVUZGUVN4SlFVRk5MSE5EUVVGbExGVkJRVU1zUzBGQlJEdEJRVUZCTEZOQlFWY3NWVUZCUXl4RFFVRkVPMEZCUVVFc2IwSkJRVThzUTBGQlVDeEZRVUZaTEV0QlFWbzdRVUZCUVN4SFFVRllPMEZCUVVFc1EwRkJja0k3UVVGRFFTeEpRVUZOTERCQ1FVRlRMR0ZCUVdFc1EwRkJZaXhEUVVGbU8wRkJRMEVzU1VGQlRTdzBRa0ZCVlN4eFFrRkJjVUlzVFVGQmNrSXNRMEZCYUVJN1FVRkRRU3hKUVVGTkxHZERRVUZaTEhGQ1FVRnhRaXhOUVVGeVFpeERRVUZzUWpzN1FVRkZRU3hKUVVGTkxEQkNRVUZUTEZWQlFVTXNRMEZCUkR0QlFVRkJMRk5CUVU4c1NVRkJTU3hMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZMTEVsQlFVd3NRMEZCVlN4RFFVRldMRU5CUVZRc1EwRkJXRHRCUVVGQkxFTkJRV1k3UVVGRFFTeEpRVUZOTERSQ1FVRlZMSEZDUVVGeFFpeE5RVUZ5UWl4RFFVRm9RanRCUVVOQkxFbEJRVTBzWjBOQlFWa3NjVUpCUVhGQ0xFOUJRWEpDTEVOQlFXeENPenRCUVVWQkxFbEJRVTBzYzBOQlFXVXNWVUZCUXl4TFFVRkVPMEZCUVVFc1UwRkJWeXhWUVVGRExFTkJRVVE3UVVGQlFTeFhRVUZSTEVsQlFVa3NRMEZCVEN4SlFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGVUxFbEJRV01zUTBGQlpDeEhRVUZyUWl4TFFVRTNRaXhEUVVGUU8wRkJRVUVzUjBGQldEdEJRVUZCTEVOQlFYSkNPMEZCUTBFc1NVRkJUU3d3UWtGQlV5eGhRVUZoTERCQ1FVRmlMRU5CUVdZN1FVRkRRU3hKUVVGTkxEUkNRVUZWTEhGQ1FVRnhRaXhOUVVGeVFpeERRVUZvUWp0QlFVTkJMRWxCUVUwc1owTkJRVmtzY1VKQlFYRkNMRTFCUVhKQ0xFTkJRV3hDT3p0QlFVVkJMRWxCUVUwc01FUkJRWGxDTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUXk5RExFMUJRVTBzWVVGQllTeGhRVUZoTEV0QlFXSXNRMEZCYmtJN1FVRkRRU3hUUVVGUExGVkJRVU1zUTBGQlJEdEJRVUZCTEZkQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVU0c1NVRkJWeXhEUVVGYUxFZEJRV2xDTEUxQlFVMHNWMEZCVnl4RFFVRllMRU5CUVhaQ0xFZEJRWFZETEU5QlFVOHNTVUZCU1N4TFFVRkxMRWRCUVV3c1EwRkJVeXhEUVVGVUxFVkJRVmtzUTBGQlF5eEZRVUZFTEVsQlFVOHNTVUZCU1N4RFFVRllMRU5CUVZvc1EwRkJXQ3hEUVVFNVF6dEJRVUZCTEVkQlFWQTdRVUZEUkN4RFFVaE5PenRCUVV0QkxFbEJRVTBzYTBOQlFXRXNkVUpCUVhWQ0xEQkNRVUYyUWl4RFFVRnVRaUlzSW1acGJHVWlPaUpsWVhOcGJtY3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCRVJVWkJWVXhVWDA5V1JWSlRTRTlQVkY5VFZGSkZUa2RVU0NBOUlERXVOVEkxTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxVbVYyWlhKelpXUkZZWE5wYm1jZ1BTQW9aV0Z6YVc1bktTQTlQaUFvY0NrZ1BUNGdNU0F0SUdWaGMybHVaeWd4SUMwZ2NDazdYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY2dQU0FvWldGemFXNW5LU0E5UGlBb2NDa2dQVDRnS0hBZ1BEMGdNQzQxS1NBL0lHVmhjMmx1WnlneUlDb2djQ2tnTHlBeUlEb2dLRElnTFNCbFlYTnBibWNvTWlBcUlDZ3hJQzBnY0NrcEtTQXZJREk3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JzYVc1bFlYSWdQU0FvY0NrZ1BUNGdjRHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR055WldGMFpVVjRjRzlKYmlBOUlDaHdiM2RsY2lrZ1BUNGdLSEFwSUQwK0lIQWdLaW9nY0c5M1pYSTdYRzVsZUhCdmNuUWdZMjl1YzNRZ1pXRnpaVWx1SUQwZ1kzSmxZWFJsUlhod2IwbHVLRElwTzF4dVpYaHdiM0owSUdOdmJuTjBJR1ZoYzJWUGRYUWdQU0JqY21WaGRHVlNaWFpsY25ObFpFVmhjMmx1WnlobFlYTmxTVzRwTzF4dVpYaHdiM0owSUdOdmJuTjBJR1ZoYzJWSmJrOTFkQ0E5SUdOeVpXRjBaVTFwY25KdmNtVmtSV0Z6YVc1bktHVmhjMlZKYmlrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamFYSmpTVzRnUFNBb2NDa2dQVDRnTVNBdElFMWhkR2d1YzJsdUtFMWhkR2d1WVdOdmN5aHdLU2s3WEc1bGVIQnZjblFnWTI5dWMzUWdZMmx5WTA5MWRDQTlJR055WldGMFpWSmxkbVZ5YzJWa1JXRnphVzVuS0dOcGNtTkpiaWs3WEc1bGVIQnZjblFnWTI5dWMzUWdZMmx5WTBsdVQzVjBJRDBnWTNKbFlYUmxUV2x5Y205eVpXUkZZWE5wYm1jb1kybHlZMDkxZENrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZDWVdOclNXNGdQU0FvY0c5M1pYSXBJRDArSUNod0tTQTlQaUFvY0NBcUlIQXBJQ29nS0Nod2IzZGxjaUFySURFcElDb2djQ0F0SUhCdmQyVnlLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmlZV05yU1c0Z1BTQmpjbVZoZEdWQ1lXTnJTVzRvUkVWR1FWVk1WRjlQVmtWU1UwaFBUMVJmVTFSU1JVNUhWRWdwTzF4dVpYaHdiM0owSUdOdmJuTjBJR0poWTJ0UGRYUWdQU0JqY21WaGRHVlNaWFpsY25ObFpFVmhjMmx1WnloaVlXTnJTVzRwTzF4dVpYaHdiM0owSUdOdmJuTjBJR0poWTJ0SmJrOTFkQ0E5SUdOeVpXRjBaVTFwY25KdmNtVmtSV0Z6YVc1bktHSmhZMnRKYmlrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZCYm5ScFkybHdZWFJsUldGemFXNW5JRDBnS0hCdmQyVnlLU0E5UGlCN1hHNGdJR052Ym5OMElHSmhZMnRGWVhOcGJtY2dQU0JqY21WaGRHVkNZV05yU1c0b2NHOTNaWElwTzF4dUlDQnlaWFIxY200Z0tIQXBJRDArSUNnb2NDQXFQU0F5S1NBOElERXBJRDhnTUM0MUlDb2dZbUZqYTBWaGMybHVaeWh3S1NBNklEQXVOU0FxSUNneUlDMGdUV0YwYUM1d2IzY29NaXdnTFRFd0lDb2dLSEFnTFNBeEtTa3BPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdGdWRHbGphWEJoZEdVZ1BTQmpjbVZoZEdWQmJuUnBZMmx3WVhSbFJXRnphVzVuS0VSRlJrRlZURlJmVDFaRlVsTklUMDlVWDFOVVVrVk9SMVJJS1R0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5ibGVuZENvbG9yID0gZXhwb3J0cy5hbHBoYSA9IGV4cG9ydHMuY29sb3IgPSBleHBvcnRzLmhzbGEgPSBleHBvcnRzLnJnYmEgPSBleHBvcnRzLnJnYlVuaXQgPSBleHBvcnRzLnB4ID0gZXhwb3J0cy5kZWdyZWVzID0gZXhwb3J0cy5wZXJjZW50ID0gZXhwb3J0cy50cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IGV4cG9ydHMuc3RlcHMgPSBleHBvcnRzLndyYXAgPSBleHBvcnRzLm5vbmxpbmVhclNwcmluZyA9IGV4cG9ydHMuc3ByaW5nID0gZXhwb3J0cy5nZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gZXhwb3J0cy5vZmZzZXQgPSBleHBvcnRzLmludGVycG9sYXRlID0gZXhwb3J0cy5mbG93ID0gZXhwb3J0cy5jb25kaXRpb25hbCA9IGV4cG9ydHMuY2xhbXAgPSBleHBvcnRzLmNsYW1wTWluID0gZXhwb3J0cy5jbGFtcE1heCA9IGV4cG9ydHMuYXBwZW5kVW5pdCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uICh2KSB7XG4gIHJldHVybiB2O1xufTtcblxuLyoqXG4gKiBBcHBlbmQgVW5pdFxuICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYXBwZW5kXG4gKiBhcHBlbmRVbml0KCdweCcsIDIwKSAtPiAnMjBweCdcbiAqIEBwYXJhbSAge3N0cmluZ30gdW5pdClcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGFwcGVuZFVuaXQgPSBleHBvcnRzLmFwcGVuZFVuaXQgPSBmdW5jdGlvbiAodW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gJycgKyB2ICsgdW5pdDtcbiAgfTtcbn07XG5cbi8qKlxuICogQ2xhbXAgdmFsdWUgYmV0d2VlblxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCByZXN0cmljdCBhIGdpdmVuIHZhbHVlIGJldHdlZW4gYG1pbmAgYW5kIGBtYXhgXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1pblxuICogQHBhcmFtICB7bnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGNsYW1wTWF4ID0gZXhwb3J0cy5jbGFtcE1heCA9IGZ1bmN0aW9uIChtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHYsIG1heCk7XG4gIH07XG59O1xudmFyIGNsYW1wTWluID0gZXhwb3J0cy5jbGFtcE1pbiA9IGZ1bmN0aW9uIChtaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KHYsIG1pbik7XG4gIH07XG59O1xudmFyIGNsYW1wID0gZXhwb3J0cy5jbGFtcCA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICB2YXIgX21pbiA9IGNsYW1wTWluKG1pbik7XG4gIHZhciBfbWF4ID0gY2xhbXBNYXgobWF4KTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIF9taW4oX21heCh2KSk7XG4gIH07XG59O1xuXG52YXIgY29uZGl0aW9uYWwgPSBleHBvcnRzLmNvbmRpdGlvbmFsID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgaWZUcnVlKSB7XG4gIHZhciBpZkZhbHNlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gbm9vcCA6IGFyZ3VtZW50c1syXTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGNvbmRpdGlvbih2KSA/IGlmVHJ1ZSh2KSA6IGlmRmFsc2Uodik7XG4gIH07XG59O1xuXG4vKipcbiAqIEZsb3dcbiAqIENvbXBvc2Ugb3RoZXIgdHJhbnNmb3JtZXJzIHRvIHJ1biBsaW5lYXJpbHlcbiAqIGZsb3cobWluKDIwKSwgbWF4KDQwKSlcbiAqIEBwYXJhbSAgey4uLmZ1bmN0aW9uc30gdHJhbnNmb3JtZXJzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xudmFyIGZsb3cgPSBleHBvcnRzLmZsb3cgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB0cmFuc2Zvcm1lcnMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB0cmFuc2Zvcm1lcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoYWNjKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgdiA9IGFjYztcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0uYXBwbHkodHJhbnNmb3JtZXJzLCBbdl0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG5cbi8qKlxuICogSW50ZXJwb2xhdGUgZnJvbSBzZXQgb2YgdmFsdWVzIHRvIGFub3RoZXJcbiAqIEBwYXJhbSAge0FycmF5fSBpbnB1dCBhcnJheVxuICogQHBhcmFtICB7QXJyYXl9IG91dHB1dFxuICogQHBhcmFtICB7RnVuY3Rpb259IHJhbmdlRWFzaW5nXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xudmFyIGludGVycG9sYXRlID0gZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykge1xuICB2YXIgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIHZhciBmaW5hbEluZGV4ID0gcmFuZ2VMZW5ndGggLSAxO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgdmFyIGkgPSAxO1xuXG4gICAgLy8gRmluZCBpbmRleCBvZiByYW5nZSBzdGFydFxuICAgIGZvciAoOyBpIDwgcmFuZ2VMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlucHV0W2ldID4gdiB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9ncmVzc0luUmFuZ2UgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGlucHV0W2kgLSAxXSwgaW5wdXRbaV0sIHYpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gcmFuZ2VFYXNpbmcgPyByYW5nZUVhc2luZ1tpXShwcm9ncmVzc0luUmFuZ2UpIDogcHJvZ3Jlc3NJblJhbmdlO1xuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKG91dHB1dFtpIC0gMV0sIG91dHB1dFtpXSwgZWFzZWRQcm9ncmVzcyk7XG4gIH07XG59O1xuXG52YXIgb2Zmc2V0ID0gZXhwb3J0cy5vZmZzZXQgPSBmdW5jdGlvbiAob3JpZ2luKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2IC0gb3JpZ2luO1xuICB9O1xufTtcblxudmFyIGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcgPSBleHBvcnRzLmdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhbHRlckRpc3BsYWNlbWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IG5vb3AgOiBhcmd1bWVudHNbMF07XG4gIHJldHVybiBmdW5jdGlvbiAoY29uc3RhbnQsIG9yaWdpbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgdmFyIGRpc3BsYWNlbWVudCA9IG9yaWdpbiAtIHY7XG4gICAgICB2YXIgc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQgPSAtY29uc3RhbnQgKiAoMCAtIGFsdGVyRGlzcGxhY2VtZW50KE1hdGguYWJzKGRpc3BsYWNlbWVudCkpKTtcbiAgICAgIHJldHVybiBkaXNwbGFjZW1lbnQgPD0gMCA/IG9yaWdpbiArIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50IDogb3JpZ2luIC0gc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQ7XG4gICAgfTtcbiAgfTtcbn07XG5cbnZhciBzcHJpbmcgPSBleHBvcnRzLnNwcmluZyA9IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcoKTtcbnZhciBub25saW5lYXJTcHJpbmcgPSBleHBvcnRzLm5vbmxpbmVhclNwcmluZyA9IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcoTWF0aC5zcXJ0KTtcblxudmFyIHdyYXAgPSBleHBvcnRzLndyYXAgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHJhbmdlU2l6ZSA9IG1heCAtIG1pbjtcbiAgICByZXR1cm4gKCh2IC0gbWluKSAlIHJhbmdlU2l6ZSArIHJhbmdlU2l6ZSkgJSByYW5nZVNpemUgKyBtaW47XG4gIH07XG59O1xuXG52YXIgc3RlcHMgPSBleHBvcnRzLnN0ZXBzID0gZnVuY3Rpb24gKHN0ZXBzLCBtaW4sIG1heCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKG1pbiwgbWF4LCB2KTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLnN0ZXBQcm9ncmVzcykoc3RlcHMsIHByb2dyZXNzKTtcbiAgfTtcbn07XG5cbnZhciB0cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IGV4cG9ydHMudHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSBmdW5jdGlvbiAoY2hpbGRUcmFuc2Zvcm1lcnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZm9yICh2YXIga2V5IGluIHYpIHtcbiAgICAgIHZhciBjaGlsZFRyYW5zZm9ybWVyID0gY2hpbGRUcmFuc2Zvcm1lcnNba2V5XTtcbiAgICAgIGlmIChjaGlsZFRyYW5zZm9ybWVyKSB7XG4gICAgICAgIHZba2V5XSA9IGNoaWxkVHJhbnNmb3JtZXIodltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG5cbi8vIFVuaXQgdHJhbnNmb3JtZXJzXG52YXIgcGVyY2VudCA9IGV4cG9ydHMucGVyY2VudCA9IGFwcGVuZFVuaXQoJyUnKTtcbnZhciBkZWdyZWVzID0gZXhwb3J0cy5kZWdyZWVzID0gYXBwZW5kVW5pdCgnZGVnJyk7XG52YXIgcHggPSBleHBvcnRzLnB4ID0gYXBwZW5kVW5pdCgncHgnKTtcblxudmFyIHJnYlVuaXQgPSBleHBvcnRzLnJnYlVuaXQgPSBmbG93KGNsYW1wKDAsIDI1NSksIE1hdGgucm91bmQpO1xuXG52YXIgcmdiYVRlbXBsYXRlID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIHJlZCA9IF9yZWYucmVkO1xuICB2YXIgZ3JlZW4gPSBfcmVmLmdyZWVuO1xuICB2YXIgYmx1ZSA9IF9yZWYuYmx1ZTtcbiAgdmFyIF9yZWYkYWxwaGEgPSBfcmVmLmFscGhhO1xuICB2YXIgYWxwaGEgPSBfcmVmJGFscGhhID09PSB1bmRlZmluZWQgPyAxIDogX3JlZiRhbHBoYTtcbiAgcmV0dXJuICdyZ2JhKCcgKyByZWQgKyAnLCAnICsgZ3JlZW4gKyAnLCAnICsgYmx1ZSArICcsICcgKyBhbHBoYSArICcpJztcbn07XG5cbnZhciByZ2JhID0gZXhwb3J0cy5yZ2JhID0gZmxvdyh0cmFuc2Zvcm1DaGlsZFZhbHVlcyh7XG4gIHJlZDogcmdiVW5pdCxcbiAgZ3JlZW46IHJnYlVuaXQsXG4gIGJsdWU6IHJnYlVuaXQsXG4gIGFscGhhOiBhbHBoYVxufSksIHJnYmFUZW1wbGF0ZSk7XG5cbnZhciBoc2xhVGVtcGxhdGUgPSBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgdmFyIGh1ZSA9IF9yZWYyLmh1ZTtcbiAgdmFyIHNhdHVyYXRpb24gPSBfcmVmMi5zYXR1cmF0aW9uO1xuICB2YXIgbGlnaHRuZXNzID0gX3JlZjIubGlnaHRuZXNzO1xuICB2YXIgX3JlZjIkYWxwaGEgPSBfcmVmMi5hbHBoYTtcbiAgdmFyIGFscGhhID0gX3JlZjIkYWxwaGEgPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmMiRhbHBoYTtcbiAgcmV0dXJuICdoc2xhKCcgKyBodWUgKyAnLCAnICsgc2F0dXJhdGlvbiArICcsICcgKyBsaWdodG5lc3MgKyAnLCAnICsgYWxwaGEgKyAnKSc7XG59O1xuXG52YXIgaHNsYSA9IGV4cG9ydHMuaHNsYSA9IGZsb3codHJhbnNmb3JtQ2hpbGRWYWx1ZXMoe1xuICBodWU6IHBhcnNlRmxvYXQsXG4gIHNhdHVyYXRpb246IHBlcmNlbnQsXG4gIGxpZ2h0bmVzczogcGVyY2VudCxcbiAgYWxwaGE6IGFscGhhXG59KSwgaHNsYVRlbXBsYXRlKTtcblxudmFyIGNvbG9yID0gZXhwb3J0cy5jb2xvciA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICh2Lmhhc093blByb3BlcnR5KCdyZWQnKSkge1xuICAgIHJldHVybiByZ2JhKHYpO1xuICB9IGVsc2UgaWYgKHYuaGFzT3duUHJvcGVydHkoJ2h1ZScpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cbiAgcmV0dXJuIHY7XG59O1xuXG52YXIgYWxwaGEgPSBleHBvcnRzLmFscGhhID0gY2xhbXAoMCwgMSk7XG5cbnZhciBibGVuZCA9IGZ1bmN0aW9uIChmcm9tLCB0bywgdikge1xuICB2YXIgZnJvbUV4cG8gPSBmcm9tICogZnJvbTtcbiAgdmFyIHRvRXhwbyA9IHRvICogdG87XG4gIHJldHVybiBNYXRoLnNxcnQodiAqICh0b0V4cG8gLSBmcm9tRXhwbykgKyBmcm9tRXhwbyk7XG59O1xuLy8gaHR0cDovL2NvZGVwZW4uaW8vb3N1Ymxha2UvcGVuL3hHVlZhTlxudmFyIGJsZW5kQ29sb3IgPSBleHBvcnRzLmJsZW5kQ29sb3IgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgdmFyIGZyb21Db2xvciA9ICgwLCBfdXRpbHMuaXNTdHJpbmcpKGZyb20pID8gKDAsIF9wYXJzZXJzLmNvbG9yKShmcm9tKSA6IGZyb207XG4gIHZhciB0b0NvbG9yID0gKDAsIF91dGlscy5pc1N0cmluZykodG8pID8gKDAsIF9wYXJzZXJzLmNvbG9yKSh0bykgOiB0bztcblxuICB2YXIgYmxlbmRlZCA9IF9leHRlbmRzKHt9LCBmcm9tQ29sb3IpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGZvciAodmFyIGtleSBpbiBibGVuZGVkKSB7XG4gICAgICBibGVuZGVkW2tleV0gPSBibGVuZChmcm9tQ29sb3Jba2V5XSwgdG9Db2xvcltrZXldLCB2KTtcbiAgICB9XG4gICAgYmxlbmRlZC5yZWQgPSBibGVuZChmcm9tQ29sb3IucmVkLCB0b0NvbG9yLnJlZCwgdik7XG4gICAgYmxlbmRlZC5ncmVlbiA9IGJsZW5kKGZyb21Db2xvci5ncmVlbiwgdG9Db2xvci5ncmVlbiwgdik7XG4gICAgYmxlbmRlZC5ibHVlID0gYmxlbmQoZnJvbUNvbG9yLmJsdWUsIHRvQ29sb3IuYmx1ZSwgdik7XG4gICAgYmxlbmRlZC5hbHBoYSA9ICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZnJvbUNvbG9yLmFscGhhLCB0b0NvbG9yLmFscGhhLCB2KTtcbiAgICByZXR1cm4gYmxlbmRlZDtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEhKaGJuTm1iM0p0WlhKekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN1FVRkJRVHM3UVVGRFFUczdRVUZEUVRzN1FVRkZRU3hKUVVGTkxFOUJRVThzVlVGQlF5eERRVUZFTzBGQlFVRXNVMEZCVHl4RFFVRlFPMEZCUVVFc1EwRkJZanM3T3pzN096czdPMEZCVTA4c1NVRkJUU3hyUTBGQllTeFZRVUZETEVsQlFVUTdRVUZCUVN4VFFVRlZMRlZCUVVNc1EwRkJSRHRCUVVGQkxHZENRVUZWTEVOQlFWWXNSMEZCWXl4SlFVRmtPMEZCUVVFc1IwRkJWanRCUVVGQkxFTkJRVzVDT3pzN096czdPenM3UVVGVFFTeEpRVUZOTERoQ1FVRlhMRlZCUVVNc1IwRkJSRHRCUVVGQkxGTkJRVk1zVlVGQlF5eERRVUZFTzBGQlFVRXNWMEZCVHl4TFFVRkxMRWRCUVV3c1EwRkJVeXhEUVVGVUxFVkJRVmtzUjBGQldpeERRVUZRTzBGQlFVRXNSMEZCVkR0QlFVRkJMRU5CUVdwQ08wRkJRMEVzU1VGQlRTdzRRa0ZCVnl4VlFVRkRMRWRCUVVRN1FVRkJRU3hUUVVGVExGVkJRVU1zUTBGQlJEdEJRVUZCTEZkQlFVOHNTMEZCU3l4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxFZEJRVm9zUTBGQlVEdEJRVUZCTEVkQlFWUTdRVUZCUVN4RFFVRnFRanRCUVVOQkxFbEJRVTBzZDBKQlFWRXNWVUZCUXl4SFFVRkVMRVZCUVUwc1IwRkJUaXhGUVVGak8wRkJRMnBETEUxQlFVMHNUMEZCVHl4VFFVRlRMRWRCUVZRc1EwRkJZanRCUVVOQkxFMUJRVTBzVDBGQlR5eFRRVUZUTEVkQlFWUXNRMEZCWWp0QlFVTkJMRk5CUVU4c1ZVRkJReXhEUVVGRU8wRkJRVUVzVjBGQlR5eExRVUZMTEV0QlFVc3NRMEZCVEN4RFFVRk1MRU5CUVZBN1FVRkJRU3hIUVVGUU8wRkJRMFFzUTBGS1RUczdRVUZOUVN4SlFVRk5MRzlEUVVGakxGVkJRVU1zVTBGQlJDeEZRVUZaTEUxQlFWbzdRVUZCUVN4TlFVRnZRaXhQUVVGd1FpeDVSRUZCT0VJc1NVRkJPVUk3UVVGQlFTeFRRVUYxUXl4VlFVRkRMRU5CUVVRc1JVRkJUenRCUVVOMlJTeFhRVUZQTEZWQlFWVXNRMEZCVml4SlFVRmxMRTlCUVU4c1EwRkJVQ3hEUVVGbUxFZEJRVEpDTEZGQlFWRXNRMEZCVWl4RFFVRnNRenRCUVVORUxFZEJSakJDTzBGQlFVRXNRMEZCY0VJN096czdPenM3T3p0QlFWZEJMRWxCUVUwc2MwSkJRVThzV1VGQmNVSTdRVUZCUVN4dlEwRkJha0lzV1VGQmFVSTdRVUZCYWtJc1owSkJRV2xDTzBGQlFVRTdPMEZCUTNaRExFMUJRVTBzYTBKQlFXdENMR0ZCUVdFc1RVRkJja003UVVGRFFTeE5RVUZKTEVsQlFVa3NRMEZCVWpzN1FVRkZRU3hUUVVGUExGVkJRVU1zUjBGQlJDeEZRVUZyUWp0QlFVRkJMSFZEUVVGVUxFbEJRVk03UVVGQlZDeFZRVUZUTzBGQlFVRTdPMEZCUTNaQ0xGRkJRVWtzU1VGQlNTeEhRVUZTTzBGQlEwRXNVMEZCU3l4SlFVRkpMRU5CUVZRc1JVRkJXU3hKUVVGSkxHVkJRV2hDTEVWQlFXbERMRWRCUVdwRExFVkJRWE5ETzBGQlEzQkRMRlZCUVVrc1lVRkJZU3hEUVVGaUxIVkNRVUZuUWl4RFFVRm9RaXhUUVVGelFpeEpRVUYwUWl4RlFVRktPMEZCUTBRN08wRkJSVVFzVjBGQlR5eERRVUZRTzBGQlEwUXNSMEZRUkR0QlFWRkVMRU5CV2swN096czdPenM3T3p0QlFYRkNRU3hKUVVGTkxHOURRVUZqTEZWQlFVTXNTMEZCUkN4RlFVRlJMRTFCUVZJc1JVRkJaMElzVjBGQmFFSXNSVUZCWjBNN1FVRkRla1FzVFVGQlRTeGpRVUZqTEUxQlFVMHNUVUZCTVVJN1FVRkRRU3hOUVVGTkxHRkJRV0VzWTBGQll5eERRVUZxUXpzN1FVRkZRU3hUUVVGUExGVkJRVU1zUTBGQlJDeEZRVUZQT3p0QlFVVmFMRkZCUVVrc1MwRkJTeXhOUVVGTkxFTkJRVTRzUTBGQlZDeEZRVUZ0UWp0QlFVTnFRaXhoUVVGUExFOUJRVThzUTBGQlVDeERRVUZRTzBGQlEwUTdPenRCUVVkRUxGRkJRVWtzUzBGQlN5eE5RVUZOTEZWQlFVNHNRMEZCVkN4RlFVRTBRanRCUVVNeFFpeGhRVUZQTEU5QlFVOHNWVUZCVUN4RFFVRlFPMEZCUTBRN08wRkJSVVFzVVVGQlNTeEpRVUZKTEVOQlFWSTdPenRCUVVkQkxGZEJRVThzU1VGQlNTeFhRVUZZTEVWQlFYZENMRWRCUVhoQ0xFVkJRVFpDTzBGQlF6TkNMRlZCUVVrc1RVRkJUU3hEUVVGT0xFbEJRVmNzUTBGQldDeEpRVUZuUWl4TlFVRk5MRlZCUVRGQ0xFVkJRWE5ETzBGQlEzQkRPMEZCUTBRN1FVRkRSanM3UVVGRlJDeFJRVUZOTEd0Q1FVRnJRaXhuUTBGQmNVSXNUVUZCVFN4SlFVRkpMRU5CUVZZc1EwRkJja0lzUlVGQmJVTXNUVUZCVFN4RFFVRk9MRU5CUVc1RExFVkJRVFpETEVOQlFUZERMRU5CUVhoQ08wRkJRMEVzVVVGQlRTeG5Ra0ZCYVVJc1YwRkJSQ3hIUVVGblFpeFpRVUZaTEVOQlFWb3NSVUZCWlN4bFFVRm1MRU5CUVdoQ0xFZEJRV3RFTEdWQlFYaEZPMEZCUTBFc1YwRkJUeXhuUTBGQmNVSXNUMEZCVHl4SlFVRkpMRU5CUVZnc1EwRkJja0lzUlVGQmIwTXNUMEZCVHl4RFFVRlFMRU5CUVhCRExFVkJRU3RETEdGQlFTOURMRU5CUVZBN1FVRkRSQ3hIUVhaQ1JEdEJRWGRDUkN4RFFUVkNUVHM3UVVFNFFrRXNTVUZCVFN3d1FrRkJVeXhWUVVGRExFMUJRVVE3UVVGQlFTeFRRVUZaTEZWQlFVTXNRMEZCUkR0QlFVRkJMRmRCUVU4c1NVRkJTU3hOUVVGWU8wRkJRVUVzUjBGQldqdEJRVUZCTEVOQlFXWTdPMEZCUlVFc1NVRkJUU3h6UlVGQkswSTdRVUZCUVN4TlFVRkRMR2xDUVVGRUxIbEVRVUZ4UWl4SlFVRnlRanRCUVVGQkxGTkJRVGhDTEZWQlFVTXNVVUZCUkN4RlFVRlhMRTFCUVZnN1FVRkJRU3hYUVVGelFpeFZRVUZETEVOQlFVUXNSVUZCVHp0QlFVTnlSeXhWUVVGTkxHVkJRV1VzVTBGQlV5eERRVUU1UWp0QlFVTkJMRlZCUVUwc05rSkJRVFpDTEVOQlFVVXNVVUZCUml4SlFVRmpMRWxCUVVrc2EwSkJRV3RDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRmxCUVZRc1EwRkJiRUlzUTBGQmJFSXNRMEZCYmtNN1FVRkRRU3hoUVVGUkxHZENRVUZuUWl4RFFVRnFRaXhIUVVGelFpeFRRVUZUTERCQ1FVRXZRaXhIUVVFMFJDeFRRVUZUTERCQ1FVRTFSVHRCUVVORUxFdEJTbmxGTzBGQlFVRXNSMEZCT1VJN1FVRkJRU3hEUVVGeVF6czdRVUZOUVN4SlFVRk5MREJDUVVGVExEaENRVUZtTzBGQlEwRXNTVUZCVFN3MFEwRkJhMElzTmtKQlFUWkNMRXRCUVVzc1NVRkJiRU1zUTBGQmVFSTdPMEZCUlVFc1NVRkJUU3h6UWtGQlR5eFZRVUZETEVkQlFVUXNSVUZCVFN4SFFVRk9PMEZCUVVFc1UwRkJZeXhWUVVGRExFTkJRVVFzUlVGQlR6dEJRVU4yUXl4UlFVRk5MRmxCUVZrc1RVRkJUU3hIUVVGNFFqdEJRVU5CTEZkQlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJUQ3hKUVVGWkxGTkJRVm9zUjBGQmQwSXNVMEZCZWtJc1NVRkJjME1zVTBGQmRFTXNSMEZCYTBRc1IwRkJla1E3UVVGRFJDeEhRVWh0UWp0QlFVRkJMRU5CUVdJN08wRkJTMEVzU1VGQlRTeDNRa0ZCVVN4VlFVRkRMRXRCUVVRc1JVRkJVU3hIUVVGU0xFVkJRV0VzUjBGQllqdEJRVUZCTEZOQlFYRkNMRlZCUVVNc1EwRkJSQ3hGUVVGUE8wRkJReTlETEZGQlFVMHNWMEZCVnl4blEwRkJjVUlzUjBGQmNrSXNSVUZCTUVJc1IwRkJNVUlzUlVGQkswSXNRMEZCTDBJc1EwRkJha0k3UVVGRFFTeFhRVUZQTEhkQ1FVRmhMRXRCUVdJc1JVRkJiMElzVVVGQmNFSXNRMEZCVUR0QlFVTkVMRWRCU0c5Q08wRkJRVUVzUTBGQlpEczdRVUZMUVN4SlFVRk5MSE5FUVVGMVFpeFZRVUZETEdsQ1FVRkVPMEZCUVVFc1UwRkJkVUlzVlVGQlF5eERRVUZFTEVWQlFVODdRVUZEYUVVc1UwRkJTeXhKUVVGSkxFZEJRVlFzU1VGQlowSXNRMEZCYUVJc1JVRkJiVUk3UVVGRGFrSXNWVUZCVFN4dFFrRkJiVUlzYTBKQlFXdENMRWRCUVd4Q0xFTkJRWHBDTzBGQlEwRXNWVUZCU1N4blFrRkJTaXhGUVVGelFqdEJRVU53UWl4VlFVRkZMRWRCUVVZc1NVRkJVeXhwUWtGQmFVSXNSVUZCUlN4SFFVRkdMRU5CUVdwQ0xFTkJRVlE3UVVGRFJEdEJRVU5HT3p0QlFVVkVMRmRCUVU4c1EwRkJVRHRCUVVORUxFZEJWRzFETzBGQlFVRXNRMEZCTjBJN096dEJRVmxCTEVsQlFVMHNORUpCUVZVc1YwRkJWeXhIUVVGWUxFTkJRV2hDTzBGQlEwRXNTVUZCVFN3MFFrRkJWU3hYUVVGWExFdEJRVmdzUTBGQmFFSTdRVUZEUVN4SlFVRk5MR3RDUVVGTExGZEJRVmNzU1VGQldDeERRVUZZT3p0QlFVVkJMRWxCUVUwc05FSkJRVlVzUzBGRGNrSXNUVUZCVFN4RFFVRk9MRVZCUVZNc1IwRkJWQ3hEUVVSeFFpeEZRVVZ5UWl4TFFVRkxMRXRCUm1kQ0xFTkJRV2hDT3p0QlFVdFFMRWxCUVUwc1pVRkJaVHRCUVVGQkxFMUJRVWNzUjBGQlNDeFJRVUZITEVkQlFVZzdRVUZCUVN4TlFVRlJMRXRCUVZJc1VVRkJVU3hMUVVGU08wRkJRVUVzVFVGQlpTeEpRVUZtTEZGQlFXVXNTVUZCWmp0QlFVRkJMSGRDUVVGeFFpeExRVUZ5UWp0QlFVRkJMRTFCUVhGQ0xFdEJRWEpDTERoQ1FVRTJRaXhEUVVFM1FqdEJRVUZCTEcxQ1FVTllMRWRCUkZjc1ZVRkRTQ3hMUVVSSExGVkJRMDhzU1VGRVVDeFZRVU5uUWl4TFFVUm9RanRCUVVGQkxFTkJRWEpDT3p0QlFVZFBMRWxCUVUwc2MwSkJRVThzUzBGRGJFSXNjVUpCUVhGQ08wRkJRMjVDTEU5QlFVc3NUMEZFWXp0QlFVVnVRaXhUUVVGUExFOUJSbGs3UVVGSGJrSXNVVUZCVFN4UFFVaGhPMEZCU1c1Q08wRkJTbTFDTEVOQlFYSkNMRU5CUkd0Q0xFVkJUMnhDTEZsQlVHdENMRU5CUVdJN08wRkJWVkFzU1VGQlRTeGxRVUZsTzBGQlFVRXNUVUZCUnl4SFFVRklMRk5CUVVjc1IwRkJTRHRCUVVGQkxFMUJRVkVzVlVGQlVpeFRRVUZSTEZWQlFWSTdRVUZCUVN4TlFVRnZRaXhUUVVGd1FpeFRRVUZ2UWl4VFFVRndRanRCUVVGQkxEQkNRVUVyUWl4TFFVRXZRanRCUVVGQkxFMUJRU3RDTEV0QlFTOUNMQ3RDUVVGMVF5eERRVUYyUXp0QlFVRkJMRzFDUVVOWUxFZEJSRmNzVlVGRFNDeFZRVVJITEZWQlExa3NVMEZFV2l4VlFVTXdRaXhMUVVReFFqdEJRVUZCTEVOQlFYSkNPenRCUVVkUExFbEJRVTBzYzBKQlFVOHNTMEZEYkVJc2NVSkJRWEZDTzBGQlEyNUNMRTlCUVVzc1ZVRkVZenRCUVVWdVFpeGpRVUZaTEU5QlJrODdRVUZIYmtJc1lVRkJWeXhQUVVoUk8wRkJTVzVDTzBGQlNtMUNMRU5CUVhKQ0xFTkJSR3RDTEVWQlQyeENMRmxCVUd0Q0xFTkJRV0k3TzBGQlZVRXNTVUZCVFN4M1FrRkJVU3hWUVVGRExFTkJRVVFzUlVGQlR6dEJRVU14UWl4TlFVRkpMRVZCUVVVc1kwRkJSaXhEUVVGcFFpeExRVUZxUWl4RFFVRktMRVZCUVRaQ08wRkJRek5DTEZkQlFVOHNTMEZCU3l4RFFVRk1MRU5CUVZBN1FVRkRSQ3hIUVVaRUxFMUJSVThzU1VGQlNTeEZRVUZGTEdOQlFVWXNRMEZCYVVJc1MwRkJha0lzUTBGQlNpeEZRVUUyUWp0QlFVTnNReXhYUVVGUExFdEJRVXNzUTBGQlRDeERRVUZRTzBGQlEwUTdRVUZEUkN4VFFVRlBMRU5CUVZBN1FVRkRSQ3hEUVZCTk96dEJRVk5CTEVsQlFVMHNkMEpCUVZFc1RVRkJUU3hEUVVGT0xFVkJRVk1zUTBGQlZDeERRVUZrT3p0QlFVVlFMRWxCUVUwc1VVRkJVU3hWUVVGRExFbEJRVVFzUlVGQlR5eEZRVUZRTEVWQlFWY3NRMEZCV0N4RlFVRnBRanRCUVVNM1FpeE5RVUZOTEZkQlFWY3NUMEZCVHl4SlFVRjRRanRCUVVOQkxFMUJRVTBzVTBGQlV5eExRVUZMTEVWQlFYQkNPMEZCUTBFc1UwRkJUeXhMUVVGTExFbEJRVXdzUTBGQlZTeExRVUZMTEZOQlFWTXNVVUZCWkN4SlFVRXdRaXhSUVVGd1F5eERRVUZRTzBGQlEwUXNRMEZLUkRzN1FVRk5UeXhKUVVGTkxHdERRVUZoTEZWQlFVTXNTVUZCUkN4RlFVRlBMRVZCUVZBc1JVRkJZenRCUVVOMFF5eE5RVUZOTEZsQlFWa3NjVUpCUVZNc1NVRkJWQ3hKUVVGcFFpeHZRa0ZCVnl4SlFVRllMRU5CUVdwQ0xFZEJRVzlETEVsQlFYUkVPMEZCUTBFc1RVRkJUU3hWUVVGVkxIRkNRVUZUTEVWQlFWUXNTVUZCWlN4dlFrRkJWeXhGUVVGWUxFTkJRV1lzUjBGQkswSXNSVUZCTDBNN08wRkJSVUVzVFVGQlRTeDFRa0ZCWlN4VFFVRm1MRU5CUVU0N08wRkJSVUVzVTBGQlR5eFZRVUZETEVOQlFVUXNSVUZCVHp0QlFVTmFMRk5CUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEU5QlFXaENMRVZCUVhsQ08wRkJRM1pDTEdOQlFWRXNSMEZCVWl4SlFVRmxMRTFCUVUwc1ZVRkJWU3hIUVVGV0xFTkJRVTRzUlVGQmMwSXNVVUZCVVN4SFFVRlNMRU5CUVhSQ0xFVkJRVzlETEVOQlFYQkRMRU5CUVdZN1FVRkRSRHRCUVVORUxGbEJRVkVzUjBGQlVpeEhRVUZqTEUxQlFVMHNWVUZCVlN4SFFVRm9RaXhGUVVGeFFpeFJRVUZSTEVkQlFUZENMRVZCUVd0RExFTkJRV3hETEVOQlFXUTdRVUZEUVN4WlFVRlJMRXRCUVZJc1IwRkJaMElzVFVGQlRTeFZRVUZWTEV0QlFXaENMRVZCUVhWQ0xGRkJRVkVzUzBGQkwwSXNSVUZCYzBNc1EwRkJkRU1zUTBGQmFFSTdRVUZEUVN4WlFVRlJMRWxCUVZJc1IwRkJaU3hOUVVGTkxGVkJRVlVzU1VGQmFFSXNSVUZCYzBJc1VVRkJVU3hKUVVFNVFpeEZRVUZ2UXl4RFFVRndReXhEUVVGbU8wRkJRMEVzV1VGQlVTeExRVUZTTEVkQlFXZENMR2REUVVGeFFpeFZRVUZWTEV0QlFTOUNMRVZCUVhORExGRkJRVkVzUzBGQk9VTXNSVUZCY1VRc1EwRkJja1FzUTBGQmFFSTdRVUZEUVN4WFFVRlBMRTlCUVZBN1FVRkRSQ3hIUVZSRU8wRkJWVVFzUTBGb1FrMGlMQ0ptYVd4bElqb2lkSEpoYm5ObWIzSnRaWEp6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVc0lHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpMQ0J6ZEdWd1VISnZaM0psYzNNZ2ZTQm1jbTl0SUNjdUwyTmhiR01uTzF4dWFXMXdiM0owSUhzZ2FYTlRkSEpwYm1jZ2ZTQm1jbTl0SUNjdUwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENCN0lHTnZiRzl5SUdGeklIQmhjbk5sUTI5c2IzSWdmU0JtY205dElDY3VMM0JoY25ObGNuTW5PMXh1WEc1amIyNXpkQ0J1YjI5d0lEMGdLSFlwSUQwK0lIWTdYRzVjYmk4cUtseHVJQ29nUVhCd1pXNWtJRlZ1YVhSY2JpQXFJRUVnWm5WdVkzUnBiMjRnZEdoaGRDQjNhV3hzSUdGd2NHVnVaRnh1SUNvZ1lYQndaVzVrVlc1cGRDZ25jSGduTENBeU1Da2dMVDRnSnpJd2NIZ25YRzRnS2lCQWNHRnlZVzBnSUh0emRISnBibWQ5SUhWdWFYUXBYRzRnS2lCQWNtVjBkWEp1SUh0dWRXMWlaWEo5WEc0Z0tpOWNibVY0Y0c5eWRDQmpiMjV6ZENCaGNIQmxibVJWYm1sMElEMGdLSFZ1YVhRcElEMCtJQ2gyS1NBOVBpQmdKSHQyZlNSN2RXNXBkSDFnTzF4dVhHNHZLaXBjYmlBcUlFTnNZVzF3SUhaaGJIVmxJR0psZEhkbFpXNWNiaUFxSUVOeVpXRjBaWE1nWVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z2NtVnpkSEpwWTNRZ1lTQm5hWFpsYmlCMllXeDFaU0JpWlhSM1pXVnVJR0J0YVc1Z0lHRnVaQ0JnYldGNFlGeHVJQ29nUUhCaGNtRnRJQ0I3Ym5WdFltVnlmU0J0YVc1Y2JpQXFJRUJ3WVhKaGJTQWdlMjUxYldKbGNuMGdiV0Y0WEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOVhHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpiR0Z0Y0UxaGVDQTlJQ2h0WVhncElEMCtJQ2gyS1NBOVBpQk5ZWFJvTG0xcGJpaDJMQ0J0WVhncE8xeHVaWGh3YjNKMElHTnZibk4wSUdOc1lXMXdUV2x1SUQwZ0tHMXBiaWtnUFQ0Z0tIWXBJRDArSUUxaGRHZ3ViV0Y0S0hZc0lHMXBiaWs3WEc1bGVIQnZjblFnWTI5dWMzUWdZMnhoYlhBZ1BTQW9iV2x1TENCdFlYZ3BJRDArSUh0Y2JpQWdZMjl1YzNRZ1gyMXBiaUE5SUdOc1lXMXdUV2x1S0cxcGJpazdYRzRnSUdOdmJuTjBJRjl0WVhnZ1BTQmpiR0Z0Y0UxaGVDaHRZWGdwTzF4dUlDQnlaWFIxY200Z0tIWXBJRDArSUY5dGFXNG9YMjFoZUNoMktTazdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTI5dVpHbDBhVzl1WVd3Z1BTQW9ZMjl1WkdsMGFXOXVMQ0JwWmxSeWRXVXNJR2xtUm1Gc2MyVWdQU0J1YjI5d0tTQTlQaUFvZGlrZ1BUNGdlMXh1SUNCeVpYUjFjbTRnWTI5dVpHbDBhVzl1S0hZcElEOGdhV1pVY25WbEtIWXBJRG9nYVdaR1lXeHpaU2gyS1R0Y2JuMDdYRzVjYmk4cUtseHVJQ29nUm14dmQxeHVJQ29nUTI5dGNHOXpaU0J2ZEdobGNpQjBjbUZ1YzJadmNtMWxjbk1nZEc4Z2NuVnVJR3hwYm1WaGNtbHNlVnh1SUNvZ1pteHZkeWh0YVc0b01qQXBMQ0J0WVhnb05EQXBLVnh1SUNvZ1FIQmhjbUZ0SUNCN0xpNHVablZ1WTNScGIyNXpmU0IwY21GdWMyWnZjbTFsY25OY2JpQXFJRUJ5WlhSMWNtNGdlMloxYm1OMGFXOXVmVnh1SUNvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWm14dmR5QTlJQ2d1TGk1MGNtRnVjMlp2Y20xbGNuTXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2JuVnRWSEpoYm5ObWIzSnRaWEp6SUQwZ2RISmhibk5tYjNKdFpYSnpMbXhsYm1kMGFEdGNiaUFnYkdWMElHa2dQU0F3TzF4dVhHNGdJSEpsZEhWeWJpQW9ZV05qTENBdUxpNWhjbWR6S1NBOVBpQjdYRzRnSUNBZ2JHVjBJSFlnUFNCaFkyTTdYRzRnSUNBZ1ptOXlJQ2hwSUQwZ01Ec2dhU0E4SUc1MWJWUnlZVzV6Wm05eWJXVnljenNnYVNzcktTQjdYRzRnSUNBZ0lDQjJJRDBnZEhKaGJuTm1iM0p0WlhKelcybGRLSFlzSUM0dUxtRnlaM01wTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjJPMXh1SUNCOU8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCSmJuUmxjbkJ2YkdGMFpTQm1jbTl0SUhObGRDQnZaaUIyWVd4MVpYTWdkRzhnWVc1dmRHaGxjbHh1SUNvZ1FIQmhjbUZ0SUNCN1FYSnlZWGw5SUdsdWNIVjBJR0Z5Y21GNVhHNGdLaUJBY0dGeVlXMGdJSHRCY25KaGVYMGdiM1YwY0hWMFhHNGdLaUJBY0dGeVlXMGdJSHRHZFc1amRHbHZibjBnY21GdVoyVkZZWE5wYm1kY2JpQXFJRUJ5WlhSMWNtNGdlMFoxYm1OMGFXOXVmVnh1SUNvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVc1MFpYSndiMnhoZEdVZ1BTQW9hVzV3ZFhRc0lHOTFkSEIxZEN3Z2NtRnVaMlZGWVhOcGJtY3BJRDArSUh0Y2JpQWdZMjl1YzNRZ2NtRnVaMlZNWlc1bmRHZ2dQU0JwYm5CMWRDNXNaVzVuZEdnN1hHNGdJR052Ym5OMElHWnBibUZzU1c1a1pYZ2dQU0J5WVc1blpVeGxibWQwYUNBdElERTdYRzVjYmlBZ2NtVjBkWEp1SUNoMktTQTlQaUI3WEc0Z0lDQWdMeThnU1dZZ2RtRnNkV1VnYjNWMGMybGtaU0J0YVc1cGJYVnRJSEpoYm1kbExDQnhkV2xqYTJ4NUlISmxkSFZ5Ymx4dUlDQWdJR2xtSUNoMklEdzlJR2x1Y0hWMFd6QmRLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdiM1YwY0hWMFd6QmRPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRWxtSUhaaGJIVmxJRzkxZEhOcFpHVWdiV0Y0YVcxMWJTQnlZVzVuWlN3Z2NYVnBZMnRzZVNCeVpYUjFjbTVjYmlBZ0lDQnBaaUFvZGlBK1BTQnBibkIxZEZ0bWFXNWhiRWx1WkdWNFhTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHOTFkSEIxZEZ0bWFXNWhiRWx1WkdWNFhUdGNiaUFnSUNCOVhHNWNiaUFnSUNCc1pYUWdhU0E5SURFN1hHNWNiaUFnSUNBdkx5QkdhVzVrSUdsdVpHVjRJRzltSUhKaGJtZGxJSE4wWVhKMFhHNGdJQ0FnWm05eUlDZzdJR2tnUENCeVlXNW5aVXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNCcFppQW9hVzV3ZFhSYmFWMGdQaUIySUh4OElHa2dQVDA5SUdacGJtRnNTVzVrWlhncElIdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTI5dWMzUWdjSEp2WjNKbGMzTkpibEpoYm1kbElEMGdaMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvYVc1d2RYUmJhU0F0SURGZExDQnBibkIxZEZ0cFhTd2dkaWs3WEc0Z0lDQWdZMjl1YzNRZ1pXRnpaV1JRY205bmNtVnpjeUE5SUNoeVlXNW5aVVZoYzJsdVp5a2dQeUJ5WVc1blpVVmhjMmx1WjF0cFhTaHdjbTluY21WemMwbHVVbUZ1WjJVcElEb2djSEp2WjNKbGMzTkpibEpoYm1kbE8xeHVJQ0FnSUhKbGRIVnliaUJuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lodmRYUndkWFJiYVNBdElERmRMQ0J2ZFhSd2RYUmJhVjBzSUdWaGMyVmtVSEp2WjNKbGMzTXBPMXh1SUNCOU8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRzltWm5ObGRDQTlJQ2h2Y21sbmFXNHBJRDArSUNoMktTQTlQaUIySUMwZ2IzSnBaMmx1TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWdVpYSmhkR1ZPYjI1SmJuUmxjbWR5WVhSbFpGTndjbWx1WnlBOUlDaGhiSFJsY2tScGMzQnNZV05sYldWdWRDQTlJRzV2YjNBcElEMCtJQ2hqYjI1emRHRnVkQ3dnYjNKcFoybHVLU0E5UGlBb2Rpa2dQVDRnZTF4dUlDQmpiMjV6ZENCa2FYTndiR0ZqWlcxbGJuUWdQU0J2Y21sbmFXNGdMU0IyTzF4dUlDQmpiMjV6ZENCemNISnBibWROYjJScFptbGxaRVJwYzNCc1lXTmxiV1Z1ZENBOUlDMGdZMjl1YzNSaGJuUWdLaUFvTUNBdElHRnNkR1Z5UkdsemNHeGhZMlZ0Wlc1MEtFMWhkR2d1WVdKektHUnBjM0JzWVdObGJXVnVkQ2twS1R0Y2JpQWdjbVYwZFhKdUlDaGthWE53YkdGalpXMWxiblFnUEQwZ01Da2dQeUJ2Y21sbmFXNGdLeUJ6Y0hKcGJtZE5iMlJwWm1sbFpFUnBjM0JzWVdObGJXVnVkQ0E2SUc5eWFXZHBiaUF0SUhOd2NtbHVaMDF2WkdsbWFXVmtSR2x6Y0d4aFkyVnRaVzUwTzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElITndjbWx1WnlBOUlHZGxibVZ5WVhSbFRtOXVTVzUwWlhKbmNtRjBaV1JUY0hKcGJtY29LVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnViMjVzYVc1bFlYSlRjSEpwYm1jZ1BTQm5aVzVsY21GMFpVNXZia2x1ZEdWeVozSmhkR1ZrVTNCeWFXNW5LRTFoZEdndWMzRnlkQ2s3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0IzY21Gd0lEMGdLRzFwYml3Z2JXRjRLU0E5UGlBb2Rpa2dQVDRnZTF4dUlDQmpiMjV6ZENCeVlXNW5aVk5wZW1VZ1BTQnRZWGdnTFNCdGFXNDdYRzRnSUhKbGRIVnliaUFvS0hZZ0xTQnRhVzRwSUNVZ2NtRnVaMlZUYVhwbElDc2djbUZ1WjJWVGFYcGxLU0FsSUhKaGJtZGxVMmw2WlNBcklHMXBianRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCemRHVndjeUE5SUNoemRHVndjeXdnYldsdUxDQnRZWGdwSUQwK0lDaDJLU0E5UGlCN1hHNGdJR052Ym5OMElIQnliMmR5WlhOeklEMGdaMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvYldsdUxDQnRZWGdzSUhZcE8xeHVJQ0J5WlhSMWNtNGdjM1JsY0ZCeWIyZHlaWE56S0hOMFpYQnpMQ0J3Y205bmNtVnpjeWs3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2RISmhibk5tYjNKdFEyaHBiR1JXWVd4MVpYTWdQU0FvWTJocGJHUlVjbUZ1YzJadmNtMWxjbk1wSUQwK0lDaDJLU0E5UGlCN1hHNGdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjJLU0I3WEc0Z0lDQWdZMjl1YzNRZ1kyaHBiR1JVY21GdWMyWnZjbTFsY2lBOUlHTm9hV3hrVkhKaGJuTm1iM0p0WlhKelcydGxlVjA3WEc0Z0lDQWdhV1lnS0dOb2FXeGtWSEpoYm5ObWIzSnRaWElwSUh0Y2JpQWdJQ0FnSUhaYmEyVjVYU0E5SUdOb2FXeGtWSEpoYm5ObWIzSnRaWElvZGx0clpYbGRLVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdkanRjYm4wN1hHNWNiaTh2SUZWdWFYUWdkSEpoYm5ObWIzSnRaWEp6WEc1bGVIQnZjblFnWTI5dWMzUWdjR1Z5WTJWdWRDQTlJR0Z3Y0dWdVpGVnVhWFFvSnlVbktUdGNibVY0Y0c5eWRDQmpiMjV6ZENCa1pXZHlaV1Z6SUQwZ1lYQndaVzVrVlc1cGRDZ25aR1ZuSnlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnY0hnZ1BTQmhjSEJsYm1SVmJtbDBLQ2R3ZUNjcE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtZGlWVzVwZENBOUlHWnNiM2NvWEc0Z0lHTnNZVzF3S0RBc0lESTFOU2tzWEc0Z0lFMWhkR2d1Y205MWJtUmNiaWs3WEc1Y2JtTnZibk4wSUhKblltRlVaVzF3YkdGMFpTQTlJQ2g3SUhKbFpDd2daM0psWlc0c0lHSnNkV1VzSUdGc2NHaGhJRDBnTVNCOUtTQTlQaUJjYmlBZ1lISm5ZbUVvSkh0eVpXUjlMQ0FrZTJkeVpXVnVmU3dnSkh0aWJIVmxmU3dnSkh0aGJIQm9ZWDBwWUR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhKblltRWdQU0JtYkc5M0tGeHVJQ0IwY21GdWMyWnZjbTFEYUdsc1pGWmhiSFZsY3loN1hHNGdJQ0FnY21Wa09pQnlaMkpWYm1sMExGeHVJQ0FnSUdkeVpXVnVPaUJ5WjJKVmJtbDBMRnh1SUNBZ0lHSnNkV1U2SUhKbllsVnVhWFFzWEc0Z0lDQWdZV3h3YUdGY2JpQWdmU2tzWEc0Z0lISm5ZbUZVWlcxd2JHRjBaVnh1S1R0Y2JseHVZMjl1YzNRZ2FITnNZVlJsYlhCc1lYUmxJRDBnS0hzZ2FIVmxMQ0J6WVhSMWNtRjBhVzl1TENCc2FXZG9kRzVsYzNNc0lHRnNjR2hoSUQwZ01TQjlLU0E5UGlCY2JpQWdZR2h6YkdFb0pIdG9kV1Y5TENBa2UzTmhkSFZ5WVhScGIyNTlMQ0FrZTJ4cFoyaDBibVZ6YzMwc0lDUjdZV3h3YUdGOUtXQTdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQm9jMnhoSUQwZ1pteHZkeWhjYmlBZ2RISmhibk5tYjNKdFEyaHBiR1JXWVd4MVpYTW9lMXh1SUNBZ0lHaDFaVG9nY0dGeWMyVkdiRzloZEN4Y2JpQWdJQ0J6WVhSMWNtRjBhVzl1T2lCd1pYSmpaVzUwTEZ4dUlDQWdJR3hwWjJoMGJtVnpjem9nY0dWeVkyVnVkQ3hjYmlBZ0lDQmhiSEJvWVZ4dUlDQjlLU3hjYmlBZ2FITnNZVlJsYlhCc1lYUmxYRzRwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTI5c2IzSWdQU0FvZGlrZ1BUNGdlMXh1SUNCcFppQW9kaTVvWVhOUGQyNVFjbTl3WlhKMGVTZ25jbVZrSnlrcElIdGNiaUFnSUNCeVpYUjFjbTRnY21kaVlTaDJLVHRjYmlBZ2ZTQmxiSE5sSUdsbUlDaDJMbWhoYzA5M2JsQnliM0JsY25SNUtDZG9kV1VuS1NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJvYzJ4aEtIWXBPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQjJPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdGc2NHaGhJRDBnWTJ4aGJYQW9NQ3dnTVNrN1hHNWNibU52Ym5OMElHSnNaVzVrSUQwZ0tHWnliMjBzSUhSdkxDQjJLU0E5UGlCN1hHNGdJR052Ym5OMElHWnliMjFGZUhCdklEMGdabkp2YlNBcUlHWnliMjA3WEc0Z0lHTnZibk4wSUhSdlJYaHdieUE5SUhSdklDb2dkRzg3WEc0Z0lISmxkSFZ5YmlCTllYUm9Mbk54Y25Rb2RpQXFJQ2gwYjBWNGNHOGdMU0JtY205dFJYaHdieWtnS3lCbWNtOXRSWGh3YnlrN1hHNTlPMXh1THk4Z2FIUjBjRG92TDJOdlpHVndaVzR1YVc4dmIzTjFZbXhoYTJVdmNHVnVMM2hIVmxaaFRseHVaWGh3YjNKMElHTnZibk4wSUdKc1pXNWtRMjlzYjNJZ1BTQW9abkp2YlN3Z2RHOHBJRDArSUh0Y2JpQWdZMjl1YzNRZ1puSnZiVU52Ykc5eUlEMGdhWE5UZEhKcGJtY29abkp2YlNrZ1B5QndZWEp6WlVOdmJHOXlLR1p5YjIwcElEb2dabkp2YlR0Y2JpQWdZMjl1YzNRZ2RHOURiMnh2Y2lBOUlHbHpVM1J5YVc1bktIUnZLU0EvSUhCaGNuTmxRMjlzYjNJb2RHOHBPaUIwYnp0Y2JseHVJQ0JqYjI1emRDQmliR1Z1WkdWa0lEMGdleUF1TGk1bWNtOXRRMjlzYjNJZ2ZUdGNibHh1SUNCeVpYUjFjbTRnS0hZcElEMCtJSHRjYmlBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z1lteGxibVJsWkNrZ2UxeHVJQ0FnSUNBZ1lteGxibVJsWkZ0clpYbGRJRDBnWW14bGJtUW9abkp2YlVOdmJHOXlXMnRsZVYwc0lIUnZRMjlzYjNKYmEyVjVYU3dnZGlrN1hHNGdJQ0FnZlZ4dUlDQWdJR0pzWlc1a1pXUXVjbVZrSUQwZ1lteGxibVFvWm5KdmJVTnZiRzl5TG5KbFpDd2dkRzlEYjJ4dmNpNXlaV1FzSUhZcE8xeHVJQ0FnSUdKc1pXNWtaV1F1WjNKbFpXNGdQU0JpYkdWdVpDaG1jbTl0UTI5c2IzSXVaM0psWlc0c0lIUnZRMjlzYjNJdVozSmxaVzRzSUhZcE8xeHVJQ0FnSUdKc1pXNWtaV1F1WW14MVpTQTlJR0pzWlc1a0tHWnliMjFEYjJ4dmNpNWliSFZsTENCMGIwTnZiRzl5TG1Kc2RXVXNJSFlwTzF4dUlDQWdJR0pzWlc1a1pXUXVZV3h3YUdFZ1BTQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWhtY205dFEyOXNiM0l1WVd4d2FHRXNJSFJ2UTI5c2IzSXVZV3h3YUdFc0lIWXBPMXh1SUNBZ0lISmxkSFZ5YmlCaWJHVnVaR1ZrTzF4dUlDQjlPMXh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb2xvciA9IGV4cG9ydHMuaHNsYSA9IGV4cG9ydHMuaGV4ID0gZXhwb3J0cy5yZ2JhID0gZXhwb3J0cy5yZ2JVbml0ID0gZXhwb3J0cy5zY2FsZSA9IGV4cG9ydHMucHggPSBleHBvcnRzLnBlcmNlbnQgPSBleHBvcnRzLmRlZ3JlZXMgPSBleHBvcnRzLmFscGhhID0gZXhwb3J0cy5udW1iZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogVmFsdWUgdHlwZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBhbHBoYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogZGVncmVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBoc2xhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBwZXJjZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBweFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmdiVW5pdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmdiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBzY2FsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3BhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIG51bWJlciA9IGV4cG9ydHMubnVtYmVyID0ge1xuICB0ZXN0OiBfdXRpbHMuaXNOdW0sXG4gIHBhcnNlOiBwYXJzZUZsb2F0XG59O1xuXG4vLyBWYWx1ZSB0eXBlc1xudmFyIGFscGhhID0gZXhwb3J0cy5hbHBoYSA9IF9leHRlbmRzKHt9LCBudW1iZXIsIHtcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLmFscGhhXG59KTtcblxudmFyIGRlZ3JlZXMgPSBleHBvcnRzLmRlZ3JlZXMgPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgnZGVnJywgX3RyYW5zZm9ybWVycy5kZWdyZWVzKTtcbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJyUnLCBfdHJhbnNmb3JtZXJzLnBlcmNlbnQpO1xudmFyIHB4ID0gZXhwb3J0cy5weCA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCdweCcsIF90cmFuc2Zvcm1lcnMucHgpO1xuXG52YXIgc2NhbGUgPSBleHBvcnRzLnNjYWxlID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICBkZWZhdWx0OiAxXG59KTtcblxudmFyIHJnYlVuaXQgPSBleHBvcnRzLnJnYlVuaXQgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5yZ2JVbml0XG59KTtcblxudmFyIHJnYmEgPSBleHBvcnRzLnJnYmEgPSB7XG4gIHRlc3Q6IF91dGlscy5pc1JnYixcbiAgcGFyc2U6IF9wYXJzZXJzLnJnYmEsXG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5yZ2JhXG59O1xuXG52YXIgaGV4ID0gZXhwb3J0cy5oZXggPSBfZXh0ZW5kcyh7fSwgcmdiYSwge1xuICB0ZXN0OiBfdXRpbHMuaXNIZXgsXG4gIHBhcnNlOiBfcGFyc2Vycy5oZXhcbn0pO1xuXG52YXIgaHNsYSA9IGV4cG9ydHMuaHNsYSA9IHtcbiAgdGVzdDogX3V0aWxzLmlzSHNsLFxuICBwYXJzZTogX3BhcnNlcnMuaHNsYSxcbiAgdHJhbnNmb3JtOiBfdHJhbnNmb3JtZXJzLmhzbGFcbn07XG5cbnZhciBjb2xvciA9IGV4cG9ydHMuY29sb3IgPSB7XG4gIHBhcnNlOiBfcGFyc2Vycy5jb2xvcixcbiAgdGVzdDogX3V0aWxzLmlzQ29sb3IsXG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5jb2xvclxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkbUZzZFdVdGRIbHdaWE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRmhRVHM3UVVGVlFUczdRVUZOUVRzN1FVRlRUeXhKUVVGTkxEQkNRVUZUTzBGQlEzQkNMRzlDUVVSdlFqdEJRVVZ3UWl4VFFVRlBPMEZCUm1Fc1EwRkJaanM3TzBGQlRVRXNTVUZCVFN4eFEwRkRVaXhOUVVSUk8wRkJSVmc3UVVGR1Z5eEZRVUZPT3p0QlFVdEJMRWxCUVUwc05FSkJRVlVzTWtKQlFXVXNTMEZCWml4M1FrRkJhRUk3UVVGRFFTeEpRVUZOTERSQ1FVRlZMREpDUVVGbExFZEJRV1lzZDBKQlFXaENPMEZCUTBFc1NVRkJUU3hyUWtGQlN5d3lRa0ZCWlN4SlFVRm1MRzFDUVVGWU96dEJRVVZCTEVsQlFVMHNjVU5CUTFJc1RVRkVVVHRCUVVWWUxGZEJRVk03UVVGR1JTeEZRVUZPT3p0QlFVdEJMRWxCUVUwc2VVTkJRMUlzVFVGRVVUdEJRVVZZTzBGQlJsY3NSVUZCVGpzN1FVRkxRU3hKUVVGTkxITkNRVUZQTzBGQlEyeENMRzlDUVVSclFqdEJRVVZzUWl4elFrRkdhMEk3UVVGSGJFSTdRVUZJYTBJc1EwRkJZanM3UVVGTlFTeEpRVUZOTEdsRFFVTlNMRWxCUkZFN1FVRkZXQ3h2UWtGR1Z6dEJRVWRZTzBGQlNGY3NSVUZCVGpzN1FVRk5RU3hKUVVGTkxITkNRVUZQTzBGQlEyeENMRzlDUVVSclFqdEJRVVZzUWl4elFrRkdhMEk3UVVGSGJFSTdRVUZJYTBJc1EwRkJZanM3UVVGTlFTeEpRVUZOTEhkQ1FVRlJPMEZCUTI1Q0xIVkNRVVJ0UWp0QlFVVnVRaXh6UWtGR2JVSTdRVUZIYmtJN1FVRkliVUlzUTBGQlpDSXNJbVpwYkdVaU9pSjJZV3gxWlMxMGVYQmxjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2x4dUlDb2dWbUZzZFdVZ2RIbHdaWE5jYmlBcVhHNGdLaUJoYkhCb1lWeHVJQ29nWkdWbmNtVmxjMXh1SUNvZ2FHVjRYRzRnS2lCb2MyeGhYRzRnS2lCd1pYSmpaVzUwWEc0Z0tpQndlRnh1SUNvZ2NtZGlWVzVwZEZ4dUlDb2djbWRpWEc0Z0tpQnpZMkZzWlZ4dUlDb3ZYRzVwYlhCdmNuUWdlMXh1SUNCeVoySlZibWwwSUdGeklIUnlZVzV6Wm05eWJWSkhRbFZ1YVhRc1hHNGdJSEpuWW1FZ1lYTWdkSEpoYm5ObWIzSnRVbWRpWVN4Y2JpQWdZV3h3YUdFZ1lYTWdkSEpoYm5ObWIzSnRRV3h3YUdFc1hHNGdJR2h6YkdFZ1lYTWdkSEpoYm5ObWIzSnRTSE5zWVN4Y2JpQWdZMjlzYjNJZ1lYTWdkSEpoYm5ObWIzSnRRMjlzYjNJc1hHNGdJSEI0SUdGeklIUnlZVzV6Wm05eWJWQjRMRnh1SUNCd1pYSmpaVzUwSUdGeklIUnlZVzV6Wm05eWJWQmxjbU5sYm5Rc1hHNGdJR1JsWjNKbFpYTWdZWE1nZEhKaGJuTm1iM0p0UkdWbmNtVmxjMXh1ZlNCbWNtOXRJQ2N1TDNSeVlXNXpabTl5YldWeWN5YzdYRzVwYlhCdmNuUWdlMXh1SUNCb1pYZ2dZWE1nY0dGeWMyVklaWGdzWEc0Z0lISm5ZbUVnWVhNZ2NHRnljMlZTWjJKaExGeHVJQ0JvYzJ4aElHRnpJSEJoY25ObFNITnNZU3hjYmlBZ1kyOXNiM0lnWVhNZ2NHRnljMlZEYjJ4dmNseHVmU0JtY205dElDY3VMM0JoY25ObGNuTW5PMXh1YVcxd2IzSjBJSHRjYmlBZ1kzSmxZWFJsVlc1cGRGUjVjR1VzWEc0Z0lHbHpUblZ0TEZ4dUlDQnBjMUpuWWl4Y2JpQWdhWE5JYzJ3c1hHNGdJR2x6U0dWNExGeHVJQ0JwYzBOdmJHOXlYRzU5SUdaeWIyMGdKeTR2ZFhScGJITW5PMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdiblZ0WW1WeUlEMGdlMXh1SUNCMFpYTjBPaUJwYzA1MWJTeGNiaUFnY0dGeWMyVTZJSEJoY25ObFJteHZZWFJjYm4wN1hHNWNiaTh2SUZaaGJIVmxJSFI1Y0dWelhHNWxlSEJ2Y25RZ1kyOXVjM1FnWVd4d2FHRWdQU0I3WEc0Z0lDNHVMbTUxYldKbGNpeGNiaUFnZEhKaGJuTm1iM0p0T2lCMGNtRnVjMlp2Y20xQmJIQm9ZVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdSbFozSmxaWE1nUFNCamNtVmhkR1ZWYm1sMFZIbHdaU2duWkdWbkp5d2dkSEpoYm5ObWIzSnRSR1ZuY21WbGN5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NHVnlZMlZ1ZENBOUlHTnlaV0YwWlZWdWFYUlVlWEJsS0NjbEp5d2dkSEpoYm5ObWIzSnRVR1Z5WTJWdWRDazdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NIZ2dQU0JqY21WaGRHVlZibWwwVkhsd1pTZ25jSGduTENCMGNtRnVjMlp2Y20xUWVDazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnpZMkZzWlNBOUlIdGNiaUFnTGk0dWJuVnRZbVZ5TEZ4dUlDQmtaV1poZFd4ME9pQXhYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21kaVZXNXBkQ0E5SUh0Y2JpQWdMaTR1Ym5WdFltVnlMRnh1SUNCMGNtRnVjMlp2Y20wNklIUnlZVzV6Wm05eWJWSkhRbFZ1YVhSY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnlaMkpoSUQwZ2UxeHVJQ0IwWlhOME9pQnBjMUpuWWl4Y2JpQWdjR0Z5YzJVNklIQmhjbk5sVW1kaVlTeGNiaUFnZEhKaGJuTm1iM0p0T2lCMGNtRnVjMlp2Y20xU1oySmhYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUdWNElEMGdlMXh1SUNBdUxpNXlaMkpoTEZ4dUlDQjBaWE4wT2lCcGMwaGxlQ3hjYmlBZ2NHRnljMlU2SUhCaGNuTmxTR1Y0WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2FITnNZU0E5SUh0Y2JpQWdkR1Z6ZERvZ2FYTkljMndzWEc0Z0lIQmhjbk5sT2lCd1lYSnpaVWh6YkdFc1hHNGdJSFJ5WVc1elptOXliVG9nZEhKaGJuTm1iM0p0U0hOc1lWeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR052Ykc5eUlEMGdlMXh1SUNCd1lYSnpaVG9nY0dGeWMyVkRiMnh2Y2l4Y2JpQWdkR1Z6ZERvZ2FYTkRiMnh2Y2l4Y2JpQWdkSEpoYm5ObWIzSnRPaUIwY21GdWMyWnZjbTFEYjJ4dmNseHVmVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy92YWx1ZS10eXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL2luYy90cmFuc2Zvcm1lcnMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgY2xhbXBQcm9ncmVzcyA9ICgwLCBfdHJhbnNmb3JtZXJzLmNsYW1wKSgwLCAxKTtcblxuZnVuY3Rpb24gY2FsY1ZhbHVlQXRUaW1lKGZyb20sIHRvLCBkdXJhdGlvbiwgZWxhcHNlZCwgZWFzZSkge1xuICB2YXIgcHJvZ3Jlc3NBdFRpbWUgPSBlYXNlKGNsYW1wUHJvZ3Jlc3MoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSgwLCBkdXJhdGlvbiwgZWxhcHNlZCkpKTtcbiAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZnJvbSwgdG8sIHByb2dyZXNzQXRUaW1lKTtcbn1cblxudmFyIFR3ZWVuQmxlbmQgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVHdlZW5CbGVuZCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVHdlZW5CbGVuZCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdlZW5CbGVuZCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFR3ZWVuQmxlbmQucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmcm9tID0gX3Byb3BzLmZyb207XG4gICAgdmFyIHRvID0gX3Byb3BzLnRvO1xuICAgIHZhciBkdXJhdGlvbiA9IF9wcm9wcy5kdXJhdGlvbjtcbiAgICB2YXIgYWNjdXJhY3kgPSBfcHJvcHMuYWNjdXJhY3k7XG5cbiAgICB2YXIgYSA9IGZyb207XG4gICAgdmFyIGIgPSB0bztcbiAgICB2YXIgYUR1cmF0aW9uID0gYS5nZXREdXJhdGlvbigpO1xuICAgIHZhciBiRHVyYXRpb24gPSBiLmdldER1cmF0aW9uKCk7XG5cbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb24gfHwgTWF0aC5taW4oYUR1cmF0aW9uIC0gYS5nZXRFbGFwc2VkKCksIGJEdXJhdGlvbik7XG5cbiAgICB2YXIgYUVhc2UgPSBhLmdldFByb3AoJ2Vhc2UnKTtcbiAgICB2YXIgYkVhc2UgPSBiLmdldFByb3AoJ2Vhc2UnKTtcbiAgICB2YXIgYUZyb20gPSBhLmdldFByb3AoJ2Zyb20nKTtcbiAgICB2YXIgYkZyb20gPSBiLmdldFByb3AoJ2Zyb20nKTtcbiAgICB2YXIgYVRvID0gYS5nZXRQcm9wKCd0bycpO1xuICAgIHZhciBiVG8gPSBiLmdldFByb3AoJ3RvJyk7XG4gICAgdmFyIGJWYWx1ZUF0QmxlbmRDb21wbGV0ZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIHRoaXMuZHVyYXRpb24sIGJFYXNlKTtcbiAgICB2YXIgYlN0YXJ0c0hpZ2hlclRoYW5BID0gYkZyb20gPiBhLmdldCgpO1xuXG4gICAgdGhpcy5ibGVuZFBvaW50cyA9IFtbMCwgYS5nZXQoKV0sIFt0aGlzLmR1cmF0aW9uLCBiVmFsdWVBdEJsZW5kQ29tcGxldGVdXTtcblxuICAgIC8vIEZpbmQgdHdlZW4gaW50ZXJzZWN0aW9uXG4gICAgdmFyIHRpbWVzdGVwID0gdGhpcy5kdXJhdGlvbiAvIGFjY3VyYWN5O1xuXG4gICAgdmFyIGZvdW5kUDEgPSBmYWxzZTtcbiAgICB2YXIgZm91bmRQMiA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY2N1cmFjeTsgaSsrKSB7XG4gICAgICB2YXIgdG90YWxUaW1lID0gaSAqIHRpbWVzdGVwO1xuXG4gICAgICB2YXIgYVZhbHVlQXRUaW1lID0gY2FsY1ZhbHVlQXRUaW1lKGFGcm9tLCBhVG8sIGFEdXJhdGlvbiwgYS5lbGFwc2VkICsgdG90YWxUaW1lLCBhRWFzZSk7XG4gICAgICB2YXIgYlZhbHVlQXRUaW1lID0gY2FsY1ZhbHVlQXRUaW1lKGJGcm9tLCBiVG8sIGJEdXJhdGlvbiwgYi5lbGFwc2VkICsgdG90YWxUaW1lLCBiRWFzZSk7XG5cbiAgICAgIHZhciBoYXNJbnRlcnNlY3RlZCA9IGJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPCBiVmFsdWVBdFRpbWUgfHwgIWJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPiBiVmFsdWVBdFRpbWU7XG5cbiAgICAgIGlmICghZm91bmRQMSAmJiBoYXNJbnRlcnNlY3RlZCkge1xuICAgICAgICB0aGlzLmJsZW5kUG9pbnRzLnNwbGljZSgwLCAxLCBbdG90YWxUaW1lLCBiVmFsdWVBdFRpbWVdKTtcbiAgICAgICAgZm91bmRQMSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE8gZ28gYmFjayB0aHJvdWdoIGFuZCBjb21tZW50XG4gICAgICB2YXIgaGFzSW50ZXJzZWN0ZWRCID0gYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA8IGJWYWx1ZUF0VGltZSB8fCAhYlN0YXJ0c0hpZ2hlclRoYW5BICYmIGFWYWx1ZUF0VGltZSA+IGJWYWx1ZUF0VGltZTtcblxuICAgICAgaWYgKGZvdW5kUDEgJiYgaGFzSW50ZXJzZWN0ZWRCKSB7XG4gICAgICAgIHRoaXMuYmxlbmRQb2ludHNbMl0gPSBbdG90YWxUaW1lLCBiVmFsdWVBdFRpbWVdO1xuICAgICAgICBmb3VuZFAyID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvdW5kUDIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRvLnN0YXJ0KCk7XG4gIH07XG5cbiAgVHdlZW5CbGVuZC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZnJvbSA9IF9wcm9wczIuZnJvbTtcbiAgICB2YXIgdG8gPSBfcHJvcHMyLnRvO1xuXG4gICAgdmFyIGEgPSBmcm9tO1xuICAgIHZhciBiID0gdG87XG5cbiAgICB2YXIgcHJvZ3Jlc3MgPSBjbGFtcFByb2dyZXNzKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGhpcy5ibGVuZFBvaW50c1swXVswXSwgdGhpcy5ibGVuZFBvaW50c1syXVswXSwgYS5nZXRFbGFwc2VkKCkpKTtcbiAgICBpZiAocHJvZ3Jlc3MgPj0gMSkge1xuICAgICAgcmV0dXJuIGIuZ2V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhUCA9ICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykodGhpcy5ibGVuZFBvaW50c1swXVsxXSwgdGhpcy5ibGVuZFBvaW50c1sxXVsxXSwgcHJvZ3Jlc3MpO1xuICAgICAgdmFyIGJQID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKSh0aGlzLmJsZW5kUG9pbnRzWzFdWzFdLCB0aGlzLmJsZW5kUG9pbnRzWzJdWzFdLCBwcm9ncmVzcyk7XG4gICAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShhUCwgYlAsIHByb2dyZXNzKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuQmxlbmQ7XG59KF8yLmRlZmF1bHQpO1xuXG5Ud2VlbkJsZW5kLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWNjdXJhY3k6IDYwXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBUd2VlbkJsZW5kKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwySnNaVzVrTFhSM1pXVnVjeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3UVVGRFFUczdPenM3T3pzN096dEJRVVZCTEVsQlFVMHNaMEpCUVdkQ0xIbENRVUZOTEVOQlFVNHNSVUZCVXl4RFFVRlVMRU5CUVhSQ096dEJRVVZCTEZOQlFWTXNaVUZCVkN4RFFVRjVRaXhKUVVGNlFpeEZRVUVyUWl4RlFVRXZRaXhGUVVGdFF5eFJRVUZ1UXl4RlFVRTJReXhQUVVFM1F5eEZRVUZ6UkN4SlFVRjBSQ3hGUVVFMFJEdEJRVU14UkN4TlFVRk5MR2xDUVVGcFFpeExRVUZMTEdOQlFXTXNaME5CUVhGQ0xFTkJRWEpDTEVWQlFYZENMRkZCUVhoQ0xFVkJRV3RETEU5QlFXeERMRU5CUVdRc1EwRkJUQ3hEUVVGMlFqdEJRVU5CTEZOQlFVOHNaME5CUVhGQ0xFbEJRWEpDTEVWQlFUSkNMRVZCUVROQ0xFVkJRU3RDTEdOQlFTOUNMRU5CUVZBN1FVRkRSRHM3U1VGRlN5eFZPenM3T3pzN096czdkVUpCUzBvc1R5eHpRa0ZCVlR0QlFVRkJMR2xDUVVOcFF5eExRVUZMTEV0QlJIUkRPMEZCUVVFc1VVRkRRU3hKUVVSQkxGVkJRMEVzU1VGRVFUdEJRVUZCTEZGQlEwMHNSVUZFVGl4VlFVTk5MRVZCUkU0N1FVRkJRU3hSUVVOVkxGRkJSRllzVlVGRFZTeFJRVVJXTzBGQlFVRXNVVUZEYjBJc1VVRkVjRUlzVlVGRGIwSXNVVUZFY0VJN08wRkJSVklzVVVGQlRTeEpRVUZKTEVsQlFWWTdRVUZEUVN4UlFVRk5MRWxCUVVrc1JVRkJWanRCUVVOQkxGRkJRVTBzV1VGQldTeEZRVUZGTEZkQlFVWXNSVUZCYkVJN1FVRkRRU3hSUVVGTkxGbEJRVmtzUlVGQlJTeFhRVUZHTEVWQlFXeENPenRCUVVWQkxGTkJRVXNzVVVGQlRDeEhRVUZuUWl4WlFVRlpMRXRCUVVzc1IwRkJUQ3hEUVVNeFFpeFpRVUZaTEVWQlFVVXNWVUZCUml4RlFVUmpMRVZCUlRGQ0xGTkJSakJDTEVOQlFUVkNPenRCUVV0QkxGRkJRVTBzVVVGQlVTeEZRVUZGTEU5QlFVWXNRMEZCVlN4TlFVRldMRU5CUVdRN1FVRkRRU3hSUVVGTkxGRkJRVkVzUlVGQlJTeFBRVUZHTEVOQlFWVXNUVUZCVml4RFFVRmtPMEZCUTBFc1VVRkJUU3hSUVVGUkxFVkJRVVVzVDBGQlJpeERRVUZWTEUxQlFWWXNRMEZCWkR0QlFVTkJMRkZCUVUwc1VVRkJVU3hGUVVGRkxFOUJRVVlzUTBGQlZTeE5RVUZXTEVOQlFXUTdRVUZEUVN4UlFVRk5MRTFCUVUwc1JVRkJSU3hQUVVGR0xFTkJRVlVzU1VGQlZpeERRVUZhTzBGQlEwRXNVVUZCVFN4TlFVRk5MRVZCUVVVc1QwRkJSaXhEUVVGVkxFbEJRVllzUTBGQldqdEJRVU5CTEZGQlFVMHNkMEpCUVhkQ0xHZENRVUZuUWl4TFFVRm9RaXhGUVVGMVFpeEhRVUYyUWl4RlFVRTBRaXhUUVVFMVFpeEZRVUYxUXl4TFFVRkxMRkZCUVRWRExFVkJRWE5FTEV0QlFYUkVMRU5CUVRsQ08wRkJRMEVzVVVGQlRTeHhRa0ZCY1VJc1VVRkJVU3hGUVVGRkxFZEJRVVlzUlVGQmJrTTdPMEZCUlVFc1UwRkJTeXhYUVVGTUxFZEJRVzFDTEVOQlEycENMRU5CUVVNc1EwRkJSQ3hGUVVGSkxFVkJRVVVzUjBGQlJpeEZRVUZLTEVOQlJHbENMRVZCUldwQ0xFTkJRVU1zUzBGQlN5eFJRVUZPTEVWQlFXZENMSEZDUVVGb1FpeERRVVpwUWl4RFFVRnVRanM3TzBGQlRVRXNVVUZCVFN4WFFVRlhMRXRCUVVzc1VVRkJUQ3hIUVVGblFpeFJRVUZxUXpzN1FVRkZRU3hSUVVGSkxGVkJRVlVzUzBGQlpEdEJRVU5CTEZGQlFVa3NWVUZCVlN4TFFVRmtPenRCUVVWQkxGTkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFXSXNSVUZCWjBJc1NVRkJTU3hSUVVGd1FpeEZRVUU0UWl4SFFVRTVRaXhGUVVGdFF6dEJRVU5xUXl4VlFVRk5MRmxCUVZrc1NVRkJTU3hSUVVGMFFqczdRVUZGUVN4VlFVRk5MR1ZCUVdVc1owSkJRV2RDTEV0QlFXaENMRVZCUVhWQ0xFZEJRWFpDTEVWQlFUUkNMRk5CUVRWQ0xFVkJRWFZETEVWQlFVVXNUMEZCUml4SFFVRlpMRk5CUVc1RUxFVkJRVGhFTEV0QlFUbEVMRU5CUVhKQ08wRkJRMEVzVlVGQlRTeGxRVUZsTEdkQ1FVRm5RaXhMUVVGb1FpeEZRVUYxUWl4SFFVRjJRaXhGUVVFMFFpeFRRVUUxUWl4RlFVRjFReXhGUVVGRkxFOUJRVVlzUjBGQldTeFRRVUZ1UkN4RlFVRTRSQ3hMUVVFNVJDeERRVUZ5UWpzN1FVRkZRU3hWUVVGTkxHbENRVU5JTEhOQ1FVRnpRaXhsUVVGbExGbEJRWFJETEVsQlEwTXNRMEZCUXl4clFrRkJSQ3hKUVVGMVFpeGxRVUZsTEZsQlJucERPenRCUVV0QkxGVkJRVWtzUTBGQlF5eFBRVUZFTEVsQlFWa3NZMEZCYUVJc1JVRkJaME03UVVGRE9VSXNZVUZCU3l4WFFVRk1MRU5CUVdsQ0xFMUJRV3BDTEVOQlFYZENMRU5CUVhoQ0xFVkJRVEpDTEVOQlFUTkNMRVZCUVRoQ0xFTkJRVU1zVTBGQlJDeEZRVUZaTEZsQlFWb3NRMEZCT1VJN1FVRkRRU3hyUWtGQlZTeEpRVUZXTzBGQlEwUTdPenRCUVVkRUxGVkJRVTBzYTBKQlEwZ3NjMEpCUVhOQ0xHVkJRV1VzV1VGQmRFTXNTVUZEUXl4RFFVRkRMR3RDUVVGRUxFbEJRWFZDTEdWQlFXVXNXVUZHZWtNN08wRkJTMEVzVlVGQlNTeFhRVUZYTEdWQlFXWXNSVUZCWjBNN1FVRkRPVUlzWVVGQlN5eFhRVUZNTEVOQlFXbENMRU5CUVdwQ0xFbEJRWE5DTEVOQlFVTXNVMEZCUkN4RlFVRlpMRmxCUVZvc1EwRkJkRUk3UVVGRFFTeHJRa0ZCVlN4SlFVRldPMEZCUTBRN08wRkJSVVFzVlVGQlNTeFBRVUZLTEVWQlFXRTdRVUZEV0R0QlFVTkVPMEZCUTBZN08wRkJSVVFzVDBGQlJ5eExRVUZJTzBGQlEwUXNSenM3ZFVKQlJVUXNUU3h4UWtGQlV6dEJRVUZCTEd0Q1FVTmpMRXRCUVVzc1MwRkVia0k3UVVGQlFTeFJRVU5ETEVsQlJFUXNWMEZEUXl4SlFVUkVPMEZCUVVFc1VVRkRUeXhGUVVSUUxGZEJRMDhzUlVGRVVEczdRVUZGVUN4UlFVRk5MRWxCUVVrc1NVRkJWanRCUVVOQkxGRkJRVTBzU1VGQlNTeEZRVUZXT3p0QlFVVkJMRkZCUVUwc1YwRkJWeXhqUVVGakxHZERRVUZ4UWl4TFFVRkxMRmRCUVV3c1EwRkJhVUlzUTBGQmFrSXNSVUZCYjBJc1EwRkJjRUlzUTBGQmNrSXNSVUZCTmtNc1MwRkJTeXhYUVVGTUxFTkJRV2xDTEVOQlFXcENMRVZCUVc5Q0xFTkJRWEJDTEVOQlFUZERMRVZCUVhGRkxFVkJRVVVzVlVGQlJpeEZRVUZ5UlN4RFFVRmtMRU5CUVdwQ08wRkJRMEVzVVVGQlNTeFpRVUZaTEVOQlFXaENMRVZCUVcxQ08wRkJRMnBDTEdGQlFVOHNSVUZCUlN4SFFVRkdMRVZCUVZBN1FVRkRSQ3hMUVVaRUxFMUJSVTg3UVVGRFRDeFZRVUZOTEV0QlFVc3NaME5CUVhGQ0xFdEJRVXNzVjBGQlRDeERRVUZwUWl4RFFVRnFRaXhGUVVGdlFpeERRVUZ3UWl4RFFVRnlRaXhGUVVFMlF5eExRVUZMTEZkQlFVd3NRMEZCYVVJc1EwRkJha0lzUlVGQmIwSXNRMEZCY0VJc1EwRkJOME1zUlVGQmNVVXNVVUZCY2tVc1EwRkJXRHRCUVVOQkxGVkJRVTBzUzBGQlN5eG5RMEZCY1VJc1MwRkJTeXhYUVVGTUxFTkJRV2xDTEVOQlFXcENMRVZCUVc5Q0xFTkJRWEJDTEVOQlFYSkNMRVZCUVRaRExFdEJRVXNzVjBGQlRDeERRVUZwUWl4RFFVRnFRaXhGUVVGdlFpeERRVUZ3UWl4RFFVRTNReXhGUVVGeFJTeFJRVUZ5UlN4RFFVRllPMEZCUTBFc1lVRkJUeXhuUTBGQmNVSXNSVUZCY2tJc1JVRkJlVUlzUlVGQmVrSXNSVUZCTmtJc1VVRkJOMElzUTBGQlVEdEJRVU5FTzBGQlEwWXNSenM3T3pzN1FVRnlSa2NzVlN4RFFVTkhMRmtzUjBGQlpUdEJRVU53UWl4WlFVRlZPMEZCUkZVc1F6czdhMEpCZFVaVUxGVkJRVU1zUzBGQlJEdEJRVUZCTEZOQlFWY3NTVUZCU1N4VlFVRktMRU5CUVdVc1MwRkJaaXhEUVVGWU8wRkJRVUVzUXlJc0ltWnBiR1VpT2lKaWJHVnVaQzEwZDJWbGJuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2Snp0Y2JtbHRjRzl5ZENCN0lHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxMQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibWx0Y0c5eWRDQjdJR05zWVcxd0lIMGdabkp2YlNBbkxpNHZhVzVqTDNSeVlXNXpabTl5YldWeWN5YzdYRzVjYm1OdmJuTjBJR05zWVcxd1VISnZaM0psYzNNZ1BTQmpiR0Z0Y0Nnd0xDQXhLVHRjYmx4dVpuVnVZM1JwYjI0Z1kyRnNZMVpoYkhWbFFYUlVhVzFsS0daeWIyMHNJSFJ2TENCa2RYSmhkR2x2Yml3Z1pXeGhjSE5sWkN3Z1pXRnpaU2tnZTF4dUlDQmpiMjV6ZENCd2NtOW5jbVZ6YzBGMFZHbHRaU0E5SUdWaGMyVW9ZMnhoYlhCUWNtOW5jbVZ6Y3loblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTZ3dMQ0JrZFhKaGRHbHZiaXdnWld4aGNITmxaQ2twS1R0Y2JpQWdjbVYwZFhKdUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLR1p5YjIwc0lIUnZMQ0J3Y205bmNtVnpjMEYwVkdsdFpTazdYRzU5WEc1Y2JtTnNZWE56SUZSM1pXVnVRbXhsYm1RZ1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQnpkR0YwYVdNZ1pHVm1ZWFZzZEZCeWIzQnpJRDBnZTF4dUlDQWdJR0ZqWTNWeVlXTjVPaUEyTUZ4dUlDQjlPMXh1WEc0Z0lHOXVVM1JoY25Rb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCbWNtOXRMQ0IwYnl3Z1pIVnlZWFJwYjI0c0lHRmpZM1Z5WVdONUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR052Ym5OMElHRWdQU0JtY205dE8xeHVJQ0FnSUdOdmJuTjBJR0lnUFNCMGJ6dGNiaUFnSUNCamIyNXpkQ0JoUkhWeVlYUnBiMjRnUFNCaExtZGxkRVIxY21GMGFXOXVLQ2s3WEc0Z0lDQWdZMjl1YzNRZ1lrUjFjbUYwYVc5dUlEMGdZaTVuWlhSRWRYSmhkR2x2YmlncE8xeHVYRzRnSUNBZ2RHaHBjeTVrZFhKaGRHbHZiaUE5SUdSMWNtRjBhVzl1SUh4OElFMWhkR2d1YldsdUtGeHVJQ0FnSUNBZ1lVUjFjbUYwYVc5dUlDMGdZUzVuWlhSRmJHRndjMlZrS0Nrc1hHNGdJQ0FnSUNCaVJIVnlZWFJwYjI1Y2JpQWdJQ0FwTzF4dVhHNGdJQ0FnWTI5dWMzUWdZVVZoYzJVZ1BTQmhMbWRsZEZCeWIzQW9KMlZoYzJVbktUdGNiaUFnSUNCamIyNXpkQ0JpUldGelpTQTlJR0l1WjJWMFVISnZjQ2duWldGelpTY3BPMXh1SUNBZ0lHTnZibk4wSUdGR2NtOXRJRDBnWVM1blpYUlFjbTl3S0NkbWNtOXRKeWs3WEc0Z0lDQWdZMjl1YzNRZ1lrWnliMjBnUFNCaUxtZGxkRkJ5YjNBb0oyWnliMjBuS1R0Y2JpQWdJQ0JqYjI1emRDQmhWRzhnUFNCaExtZGxkRkJ5YjNBb0ozUnZKeWs3WEc0Z0lDQWdZMjl1YzNRZ1lsUnZJRDBnWWk1blpYUlFjbTl3S0NkMGJ5Y3BPMXh1SUNBZ0lHTnZibk4wSUdKV1lXeDFaVUYwUW14bGJtUkRiMjF3YkdWMFpTQTlJR05oYkdOV1lXeDFaVUYwVkdsdFpTaGlSbkp2YlN3Z1lsUnZMQ0JpUkhWeVlYUnBiMjRzSUhSb2FYTXVaSFZ5WVhScGIyNHNJR0pGWVhObEtUdGNiaUFnSUNCamIyNXpkQ0JpVTNSaGNuUnpTR2xuYUdWeVZHaGhia0VnUFNCaVJuSnZiU0ErSUdFdVoyVjBLQ2s3WEc1Y2JpQWdJQ0IwYUdsekxtSnNaVzVrVUc5cGJuUnpJRDBnVzF4dUlDQWdJQ0FnV3pBc0lHRXVaMlYwS0NsZExGeHVJQ0FnSUNBZ1czUm9hWE11WkhWeVlYUnBiMjRzSUdKV1lXeDFaVUYwUW14bGJtUkRiMjF3YkdWMFpWMWNiaUFnSUNCZE8xeHVYRzRnSUNBZ0x5OGdSbWx1WkNCMGQyVmxiaUJwYm5SbGNuTmxZM1JwYjI1Y2JpQWdJQ0JqYjI1emRDQjBhVzFsYzNSbGNDQTlJSFJvYVhNdVpIVnlZWFJwYjI0Z0x5QmhZMk4xY21GamVUdGNibHh1SUNBZ0lHeGxkQ0JtYjNWdVpGQXhJRDBnWm1Gc2MyVTdYRzRnSUNBZ2JHVjBJR1p2ZFc1a1VESWdQU0JtWVd4elpUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dZV05qZFhKaFkzazdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnZEc5MFlXeFVhVzFsSUQwZ2FTQXFJSFJwYldWemRHVndPMXh1WEc0Z0lDQWdJQ0JqYjI1emRDQmhWbUZzZFdWQmRGUnBiV1VnUFNCallXeGpWbUZzZFdWQmRGUnBiV1VvWVVaeWIyMHNJR0ZVYnl3Z1lVUjFjbUYwYVc5dUxDQmhMbVZzWVhCelpXUWdLeUIwYjNSaGJGUnBiV1VzSUdGRllYTmxLVHRjYmlBZ0lDQWdJR052Ym5OMElHSldZV3gxWlVGMFZHbHRaU0E5SUdOaGJHTldZV3gxWlVGMFZHbHRaU2hpUm5KdmJTd2dZbFJ2TENCaVJIVnlZWFJwYjI0c0lHSXVaV3hoY0hObFpDQXJJSFJ2ZEdGc1ZHbHRaU3dnWWtWaGMyVXBPMXh1WEc0Z0lDQWdJQ0JqYjI1emRDQm9ZWE5KYm5SbGNuTmxZM1JsWkNBOUlDaGNiaUFnSUNBZ0lDQWdLR0pUZEdGeWRITklhV2RvWlhKVWFHRnVRU0FtSmlCaFZtRnNkV1ZCZEZScGJXVWdQQ0JpVm1Gc2RXVkJkRlJwYldVcElIeDhYRzRnSUNBZ0lDQWdJQ2doWWxOMFlYSjBjMGhwWjJobGNsUm9ZVzVCSUNZbUlHRldZV3gxWlVGMFZHbHRaU0ErSUdKV1lXeDFaVUYwVkdsdFpTbGNiaUFnSUNBZ0lDazdYRzVjYmlBZ0lDQWdJR2xtSUNnaFptOTFibVJRTVNBbUppQm9ZWE5KYm5SbGNuTmxZM1JsWkNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1Kc1pXNWtVRzlwYm5SekxuTndiR2xqWlNnd0xDQXhMQ0JiZEc5MFlXeFVhVzFsTENCaVZtRnNkV1ZCZEZScGJXVmRLVHRjYmlBZ0lDQWdJQ0FnWm05MWJtUlFNU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzh2SUZSUFJFOGdaMjhnWW1GamF5QjBhSEp2ZFdkb0lHRnVaQ0JqYjIxdFpXNTBYRzRnSUNBZ0lDQmpiMjV6ZENCb1lYTkpiblJsY25ObFkzUmxaRUlnUFNBb1hHNGdJQ0FnSUNBZ0lDaGlVM1JoY25SelNHbG5hR1Z5VkdoaGJrRWdKaVlnWVZaaGJIVmxRWFJVYVcxbElEd2dZbFpoYkhWbFFYUlVhVzFsS1NCOGZGeHVJQ0FnSUNBZ0lDQW9JV0pUZEdGeWRITklhV2RvWlhKVWFHRnVRU0FtSmlCaFZtRnNkV1ZCZEZScGJXVWdQaUJpVm1Gc2RXVkJkRlJwYldVcFhHNGdJQ0FnSUNBcE8xeHVYRzRnSUNBZ0lDQnBaaUFvWm05MWJtUlFNU0FtSmlCb1lYTkpiblJsY25ObFkzUmxaRUlwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYkdWdVpGQnZhVzUwYzFzeVhTQTlJRnQwYjNSaGJGUnBiV1VzSUdKV1lXeDFaVUYwVkdsdFpWMDdYRzRnSUNBZ0lDQWdJR1p2ZFc1a1VESWdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBaaUFvWm05MWJtUlFNaWtnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkRzh1YzNSaGNuUW9LVHRjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1p5YjIwc0lIUnZJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJR0VnUFNCbWNtOXRPMXh1SUNBZ0lHTnZibk4wSUdJZ1BTQjBienRjYmx4dUlDQWdJR052Ym5OMElIQnliMmR5WlhOeklEMGdZMnhoYlhCUWNtOW5jbVZ6Y3loblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTaDBhR2x6TG1Kc1pXNWtVRzlwYm5Seld6QmRXekJkTENCMGFHbHpMbUpzWlc1a1VHOXBiblJ6V3pKZFd6QmRMQ0JoTG1kbGRFVnNZWEJ6WldRb0tTa3BPMXh1SUNBZ0lHbG1JQ2h3Y205bmNtVnpjeUErUFNBeEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1lpNW5aWFFvS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdZMjl1YzNRZ1lWQWdQU0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3loMGFHbHpMbUpzWlc1a1VHOXBiblJ6V3pCZFd6RmRMQ0IwYUdsekxtSnNaVzVrVUc5cGJuUnpXekZkV3pGZExDQndjbTluY21WemN5azdYRzRnSUNBZ0lDQmpiMjV6ZENCaVVDQTlJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56S0hSb2FYTXVZbXhsYm1SUWIybHVkSE5iTVYxYk1WMHNJSFJvYVhNdVlteGxibVJRYjJsdWRITmJNbDFiTVYwc0lIQnliMmR5WlhOektUdGNiaUFnSUNBZ0lISmxkSFZ5YmlCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aGhVQ3dnWWxBc0lIQnliMmR5WlhOektUdGNiaUFnSUNCOVhHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tIQnliM0J6S1NBOVBpQnVaWGNnVkhkbFpXNUNiR1Z1WkNod2NtOXdjeWs3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvYmxlbmQtdHdlZW5zLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENoYWluID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENoYWluLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBDaGFpbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaGFpbik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnBsYXlOZXh0ID0gX3RoaXMucGxheU5leHQuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgQ2hhaW4ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHRoaXMucHJvcHMuaSA9IDA7XG4gICAgdGhpcy5wbGF5Q3VycmVudCgpO1xuICB9O1xuXG4gIENoYWluLnByb3RvdHlwZS5wbGF5TmV4dCA9IGZ1bmN0aW9uIHBsYXlOZXh0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBpID0gX3Byb3BzLmk7XG4gICAgdmFyIG9yZGVyID0gX3Byb3BzLm9yZGVyO1xuXG4gICAgaWYgKGkgPCBvcmRlci5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnByb3BzLmkrKztcbiAgICAgIHRoaXMucGxheUN1cnJlbnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUucGxheUN1cnJlbnQgPSBmdW5jdGlvbiBwbGF5Q3VycmVudCgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGkgPSBfcHJvcHMyLmk7XG4gICAgdmFyIG9yZGVyID0gX3Byb3BzMi5vcmRlcjtcblxuICAgIG9yZGVyW2ldLnByb3BzLl9vbkNvbXBsZXRlID0gdGhpcy5wbGF5TmV4dDtcbiAgICBvcmRlcltpXS5zdGFydCgpO1xuICB9O1xuXG4gIENoYWluLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBpID0gX3Byb3BzMy5pO1xuICAgIHZhciBvcmRlciA9IF9wcm9wczMub3JkZXI7XG5cbiAgICBvcmRlcltpXS5zdG9wKCk7XG4gIH07XG5cbiAgcmV0dXJuIENoYWluO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9yZGVyLCBvbkNvbXBsZXRlKSB7XG4gIHJldHVybiBuZXcgQ2hhaW4oeyBvcmRlcjogb3JkZXIsIG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk5vWVdsdUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenM3T3pzN096czdPMGxCUlUwc1N6czdPMEZCUTBvc2FVSkJRVmtzUzBGQldpeEZRVUZ0UWp0QlFVRkJPenRCUVVGQkxHbEVRVU5xUWl4dFFrRkJUU3hMUVVGT0xFTkJSR2xDT3p0QlFVVnFRaXhWUVVGTExGRkJRVXdzUjBGQlowSXNUVUZCU3l4UlFVRk1MRU5CUVdNc1NVRkJaQ3hQUVVGb1FqdEJRVVpwUWp0QlFVZHNRanM3YTBKQlJVUXNUeXh6UWtGQlZUdEJRVU5TTEZOQlFVc3NTMEZCVEN4RFFVRlhMRU5CUVZnc1IwRkJaU3hEUVVGbU8wRkJRMEVzVTBGQlN5eFhRVUZNTzBGQlEwUXNSenM3YTBKQlJVUXNVU3gxUWtGQlZ6dEJRVUZCTEdsQ1FVTlpMRXRCUVVzc1MwRkVha0k3UVVGQlFTeFJRVU5FTEVOQlJFTXNWVUZEUkN4RFFVUkRPMEZCUVVFc1VVRkRSU3hMUVVSR0xGVkJRMFVzUzBGRVJqczdRVUZGVkN4UlFVRkpMRWxCUVVrc1RVRkJUU3hOUVVGT0xFZEJRV1VzUTBGQmRrSXNSVUZCTUVJN1FVRkRlRUlzVjBGQlN5eExRVUZNTEVOQlFWY3NRMEZCV0R0QlFVTkJMRmRCUVVzc1YwRkJURHRCUVVORUxFdEJTRVFzVFVGSFR6dEJRVU5NTEZkQlFVc3NVVUZCVER0QlFVTkVPMEZCUTBZc1J6czdhMEpCUlVRc1Z5d3dRa0ZCWXp0QlFVRkJMR3RDUVVOVExFdEJRVXNzUzBGRVpEdEJRVUZCTEZGQlEwb3NRMEZFU1N4WFFVTktMRU5CUkVrN1FVRkJRU3hSUVVORUxFdEJSRU1zVjBGRFJDeExRVVJET3p0QlFVVmFMRlZCUVUwc1EwRkJUaXhGUVVGVExFdEJRVlFzUTBGQlpTeFhRVUZtTEVkQlFUWkNMRXRCUVVzc1VVRkJiRU03UVVGRFFTeFZRVUZOTEVOQlFVNHNSVUZCVXl4TFFVRlVPMEZCUTBRc1J6czdhMEpCUlVRc1RTeHhRa0ZCVXp0QlFVRkJMR3RDUVVOakxFdEJRVXNzUzBGRWJrSTdRVUZCUVN4UlFVTkRMRU5CUkVRc1YwRkRReXhEUVVSRU8wRkJRVUVzVVVGRFNTeExRVVJLTEZkQlEwa3NTMEZFU2pzN1FVRkZVQ3hWUVVGTkxFTkJRVTRzUlVGQlV5eEpRVUZVTzBGQlEwUXNSenM3T3pzN2EwSkJSMWtzVlVGQlF5eExRVUZFTEVWQlFWRXNWVUZCVWp0QlFVRkJMRk5CUVhWQ0xFbEJRVWtzUzBGQlNpeERRVUZWTEVWQlFVVXNXVUZCUml4RlFVRlRMSE5DUVVGVUxFVkJRVllzUTBGQmRrSTdRVUZCUVN4RElpd2labWxzWlNJNkltTm9ZV2x1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVjYm1Oc1lYTnpJRU5vWVdsdUlHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITXBJSHRjYmlBZ0lDQnpkWEJsY2lod2NtOXdjeWs3WEc0Z0lDQWdkR2hwY3k1d2JHRjVUbVY0ZENBOUlIUm9hWE11Y0d4aGVVNWxlSFF1WW1sdVpDaDBhR2x6S1R0Y2JpQWdmVnh1WEc0Z0lHOXVVM1JoY25Rb0tTQjdYRzRnSUNBZ2RHaHBjeTV3Y205d2N5NXBJRDBnTUR0Y2JpQWdJQ0IwYUdsekxuQnNZWGxEZFhKeVpXNTBLQ2s3WEc0Z0lIMWNibHh1SUNCd2JHRjVUbVY0ZENncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdrc0lHOXlaR1Z5SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHbG1JQ2hwSUR3Z2IzSmtaWEl1YkdWdVozUm9JQzBnTVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV3Y205d2N5NXBLeXM3WEc0Z0lDQWdJQ0IwYUdsekxuQnNZWGxEZFhKeVpXNTBLQ2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIUm9hWE11WTI5dGNHeGxkR1VvS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCd2JHRjVRM1Z5Y21WdWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHa3NJRzl5WkdWeUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJRzl5WkdWeVcybGRMbkJ5YjNCekxsOXZia052YlhCc1pYUmxJRDBnZEdocGN5NXdiR0Y1VG1WNGREdGNiaUFnSUNCdmNtUmxjbHRwWFM1emRHRnlkQ2dwTzF4dUlDQjlYRzVjYmlBZ2IyNVRkRzl3S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYVN3Z2IzSmtaWElnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ2IzSmtaWEpiYVYwdWMzUnZjQ2dwTzF4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNodmNtUmxjaXdnYjI1RGIyMXdiR1YwWlNrZ1BUNGdibVYzSUVOb1lXbHVLSHNnYjNKa1pYSXNJRzl1UTI5dGNHeGxkR1VnZlNrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2NoYWluLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4uL2luYy92YWx1ZS10eXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuICgwLCBfdHdlZW4yLmRlZmF1bHQpKF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGZyb206IDAsXG4gICAgdG86IDEsXG4gICAgb25VcGRhdGU6ICgwLCBfdHJhbnNmb3JtZXJzLmZsb3cpKCgwLCBfdHJhbnNmb3JtZXJzLmJsZW5kQ29sb3IpKHByb3BzLmZyb20sIHByb3BzLnRvKSwgX3ZhbHVlVHlwZXMuY29sb3IudHJhbnNmb3JtLCBwcm9wcy5vblVwZGF0ZSB8fCBub29wKVxuICB9KSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk52Ykc5eUxYUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGQk96czdPMEZCUTBFN08wRkJRMEU3T3pzN1FVRkZRU3hKUVVGTkxFOUJRVThzV1VGQlRTeERRVUZGTEVOQlFYSkNPenRyUWtGRlpTeFZRVUZETEV0QlFVUXNSVUZCVnp0QlFVTjRRaXhUUVVGUExHdERRVU5HTEV0QlJFVTdRVUZGVEN4VlFVRk5MRU5CUmtRN1FVRkhUQ3hSUVVGSkxFTkJTRU03UVVGSlRDeGpRVUZWTEhkQ1FVTlNMRGhDUVVGWExFMUJRVTBzU1VGQmFrSXNSVUZCZFVJc1RVRkJUU3hGUVVFM1FpeERRVVJSTEVWQlJWSXNhMEpCUVUwc1UwRkdSU3hGUVVkU0xFMUJRVTBzVVVGQlRpeEpRVUZyUWl4SlFVaFdPMEZCU2t3c1MwRkJVRHRCUVZWRUxFTWlMQ0ptYVd4bElqb2lZMjlzYjNJdGRIZGxaVzR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkSGRsWlc0Z1puSnZiU0FuTGk5MGQyVmxiaWM3WEc1cGJYQnZjblFnZXlCaWJHVnVaRU52Ykc5eUxDQm1iRzkzSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1J5WVc1elptOXliV1Z5Y3ljN1hHNXBiWEJ2Y25RZ2V5QmpiMnh2Y2lCOUlHWnliMjBnSnk0dUwybHVZeTkyWVd4MVpTMTBlWEJsY3ljN1hHNWNibU52Ym5OMElHNXZiM0FnUFNBb0tTQTlQaUI3ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tIQnliM0J6S1NBOVBpQjdYRzRnSUhKbGRIVnliaUIwZDJWbGJpaDdYRzRnSUNBZ0xpNHVjSEp2Y0hNc1hHNGdJQ0FnWm5KdmJUb2dNQ3hjYmlBZ0lDQjBiem9nTVN4Y2JpQWdJQ0J2YmxWd1pHRjBaVG9nWm14dmR5aGNiaUFnSUNBZ0lHSnNaVzVrUTI5c2IzSW9jSEp2Y0hNdVpuSnZiU3dnY0hKdmNITXVkRzhwTEZ4dUlDQWdJQ0FnWTI5c2IzSXVkSEpoYm5ObWIzSnRMRnh1SUNBZ0lDQWdjSEp2Y0hNdWIyNVZjR1JoZEdVZ2ZId2dibTl2Y0Z4dUlDQWdJQ2xjYmlBZ2ZTazdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY29sb3ItdHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDb21wb3NpdGVBY3Rpb24gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ29tcG9zaXRlQWN0aW9uLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBDb21wb3NpdGVBY3Rpb24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9zaXRlQWN0aW9uKTtcblxuICAgIHZhciBhY3Rpb25zID0gcHJvcHMuYWN0aW9ucztcblxuICAgIHZhciByZW1haW5pbmdQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWydhY3Rpb25zJ10pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHJlbWFpbmluZ1Byb3BzKSk7XG5cbiAgICBfdGhpcy5jdXJyZW50ID0ge307XG4gICAgX3RoaXMuYWN0aW9uS2V5cyA9IFtdO1xuICAgIF90aGlzLmFkZEFjdGlvbnMocHJvcHMuYWN0aW9ucyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5hZGRBY3Rpb25zID0gZnVuY3Rpb24gYWRkQWN0aW9ucyhhY3Rpb25zKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoX3RoaXMyLmFjdGlvbktleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICBfdGhpczIuYWN0aW9uS2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzMltrZXldID0gYWN0aW9uc1trZXldO1xuXG4gICAgICB2YXIgb25VcGRhdGUgPSBmdW5jdGlvbiAodiwgYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuY3VycmVudFtrZXldID0gYWN0aW9uLmdldCgpO1xuICAgICAgfTtcblxuICAgICAgLy8gSW1tZWRpYXRlbHkgdXBkYXRlIHdpdGggdGhlIGN1cnJlbnQgYWN0aW9uIHN0YXRlXG4gICAgICBvblVwZGF0ZShudWxsLCBfdGhpczJba2V5XSk7XG5cbiAgICAgIF90aGlzMltrZXldLnNldFByb3BzKHtcbiAgICAgICAgX29uU3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIubnVtQWN0aXZlQWN0aW9ucy0tO1xuICAgICAgICB9XG4gICAgICB9KS5hZGRMaXN0ZW5lcihvblVwZGF0ZSk7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGtleSBpbiBhY3Rpb25zKSB7XG4gICAgICBfbG9vcChrZXkpO1xuICAgIH1cbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gdGhpcy5hY3Rpb25LZXlzLmxlbmd0aDtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXMzW2tleV0uc3RhcnQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczRba2V5XS5zdG9wKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5nZXRWZWxvY2l0eSA9IGZ1bmN0aW9uIGdldFZlbG9jaXR5KCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIHZlbG9jaXR5ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHZlbG9jaXR5W2tleV0gPSBfdGhpczVba2V5XS5nZXRWZWxvY2l0eSgpO1xuICAgIH0pO1xuICAgIHJldHVybiB2ZWxvY2l0eTtcbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDA7XG4gIH07XG5cbiAgcmV0dXJuIENvbXBvc2l0ZUFjdGlvbjtcbn0oXzIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhY3Rpb25zLCBwcm9wcykge1xuICByZXR1cm4gbmV3IENvbXBvc2l0ZUFjdGlvbihfZXh0ZW5kcyh7XG4gICAgYWN0aW9uczogYWN0aW9uc1xuICB9LCBwcm9wcykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOdmJYQnZjMmwwWlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenM3T3pzN096czdPenM3U1VGRlRTeGxPenM3UVVGRFNpd3lRa0ZCV1N4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlFVRXNVVUZEVkN4UFFVUlRMRWRCUTNOQ0xFdEJSSFJDTEVOQlExUXNUMEZFVXpzN1FVRkJRU3hSUVVOSExHTkJSRWdzTkVKQlEzTkNMRXRCUkhSQ096dEJRVUZCTEdsRVFVVnFRaXh0UWtGQlRTeGpRVUZPTEVOQlJtbENPenRCUVVkcVFpeFZRVUZMTEU5QlFVd3NSMEZCWlN4RlFVRm1PMEZCUTBFc1ZVRkJTeXhWUVVGTUxFZEJRV3RDTEVWQlFXeENPMEZCUTBFc1ZVRkJTeXhWUVVGTUxFTkJRV2RDTEUxQlFVMHNUMEZCZEVJN1FVRk1hVUk3UVVGTmJFSTdPelJDUVVWRUxGVXNkVUpCUVZjc1R5eEZRVUZUTzBGQlFVRTdPMEZCUVVFc01FSkJRMUFzUjBGRVR6dEJRVVZvUWl4VlFVRkpMRTlCUVVzc1ZVRkJUQ3hEUVVGblFpeFBRVUZvUWl4RFFVRjNRaXhIUVVGNFFpeE5RVUZwUXl4RFFVRkRMRU5CUVhSRExFVkJRWGxETzBGQlEzWkRMR1ZCUVVzc1ZVRkJUQ3hEUVVGblFpeEpRVUZvUWl4RFFVRnhRaXhIUVVGeVFqdEJRVU5FT3p0QlFVVkVMR0ZCUVVzc1IwRkJUQ3hKUVVGWkxGRkJRVkVzUjBGQlVpeERRVUZhT3p0QlFVVkJMRlZCUVUwc1YwRkJWeXhWUVVGRExFTkJRVVFzUlVGQlNTeE5RVUZLTzBGQlFVRXNaVUZCWlN4UFFVRkxMRTlCUVV3c1EwRkJZU3hIUVVGaUxFbEJRVzlDTEU5QlFVOHNSMEZCVUN4RlFVRnVRenRCUVVGQkxFOUJRV3BDT3pzN1FVRkhRU3hsUVVGVExFbEJRVlFzUlVGQlpTeFBRVUZMTEVkQlFVd3NRMEZCWmpzN1FVRkZRU3hoUVVGTExFZEJRVXdzUlVGRFJ5eFJRVVJJTEVOQlExazdRVUZEVWl4cFFrRkJVenRCUVVGQkxHbENRVUZOTEU5QlFVc3NaMEpCUVV3c1JVRkJUanRCUVVGQk8wRkJSRVFzVDBGRVdpeEZRVWxITEZkQlNrZ3NRMEZKWlN4UlFVcG1PMEZCWW1kQ096dEJRVU5zUWl4VFFVRkxMRWxCUVUwc1IwRkJXQ3hKUVVGclFpeFBRVUZzUWl4RlFVRXlRanRCUVVGQkxGbEJRV2hDTEVkQlFXZENPMEZCYVVJeFFqdEJRVU5HTEVjN096UkNRVVZFTEU4c2MwSkJRVlU3UVVGQlFUczdRVUZEVWl4VFFVRkxMR2RDUVVGTUxFZEJRWGRDTEV0QlFVc3NWVUZCVEN4RFFVRm5RaXhOUVVGNFF6dEJRVU5CTEZOQlFVc3NWVUZCVEN4RFFVRm5RaXhQUVVGb1FpeERRVUYzUWl4VlFVRkRMRWRCUVVRN1FVRkJRU3hoUVVGVExFOUJRVXNzUjBGQlRDeEZRVUZWTEV0QlFWWXNSVUZCVkR0QlFVRkJMRXRCUVhoQ08wRkJRMFFzUnpzN05FSkJSVVFzVFN4eFFrRkJVenRCUVVGQk96dEJRVU5RTEZOQlFVc3NWVUZCVEN4RFFVRm5RaXhQUVVGb1FpeERRVUYzUWl4VlFVRkRMRWRCUVVRN1FVRkJRU3hoUVVGVExFOUJRVXNzUjBGQlRDeEZRVUZWTEVsQlFWWXNSVUZCVkR0QlFVRkJMRXRCUVhoQ08wRkJRMFFzUnpzN05FSkJSVVFzVnl3d1FrRkJZenRCUVVGQk96dEJRVU5hTEZGQlFVMHNWMEZCVnl4RlFVRnFRanRCUVVOQkxGTkJRVXNzVlVGQlRDeERRVUZuUWl4UFFVRm9RaXhEUVVGM1FpeFZRVUZETEVkQlFVUTdRVUZCUVN4aFFVRlRMRk5CUVZNc1IwRkJWQ3hKUVVGblFpeFBRVUZMTEVkQlFVd3NSVUZCVlN4WFFVRldMRVZCUVhwQ08wRkJRVUVzUzBGQmVFSTdRVUZEUVN4WFFVRlBMRkZCUVZBN1FVRkRSQ3hIT3pzMFFrRkZSQ3huUWl3clFrRkJiVUk3UVVGRGFrSXNWMEZCVVN4TFFVRkxMR2RDUVVGTUxFdEJRVEJDTEVOQlFXeERPMEZCUTBRc1J6czdPenM3YTBKQlIxa3NWVUZCUXl4UFFVRkVMRVZCUVZVc1MwRkJWaXhGUVVGdlFqdEJRVU5xUXl4VFFVRlBMRWxCUVVrc1pVRkJTanRCUVVOTU8wRkJSRXNzUzBGRlJpeExRVVpGTEVWQlFWQTdRVUZKUkN4RElpd2labWxzWlNJNkltTnZiWEJ2YzJsMFpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaThuTzF4dVhHNWpiR0Z6Y3lCRGIyMXdiM05wZEdWQlkzUnBiMjRnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWVdOMGFXOXVjeXdnTGk0dWNtVnRZV2x1YVc1blVISnZjSE1nZlNBOUlIQnliM0J6TzF4dUlDQWdJSE4xY0dWeUtISmxiV0ZwYm1sdVoxQnliM0J6S1R0Y2JpQWdJQ0IwYUdsekxtTjFjbkpsYm5RZ1BTQjdmVHRjYmlBZ0lDQjBhR2x6TG1GamRHbHZia3RsZVhNZ1BTQmJYVHRjYmlBZ0lDQjBhR2x6TG1Ga1pFRmpkR2x2Ym5Nb2NISnZjSE11WVdOMGFXOXVjeWs3WEc0Z0lIMWNibHh1SUNCaFpHUkJZM1JwYjI1ektHRmpkR2x2Ym5NcElIdGNiaUFnSUNCbWIzSWdLR052Ym5OMElHdGxlU0JwYmlCaFkzUnBiMjV6S1NCN1hHNGdJQ0FnSUNCcFppQW9kR2hwY3k1aFkzUnBiMjVMWlhsekxtbHVaR1Y0VDJZb2EyVjVLU0E5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWhZM1JwYjI1TFpYbHpMbkIxYzJnb2EyVjVLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnZEdocGMxdHJaWGxkSUQwZ1lXTjBhVzl1YzF0clpYbGRPMXh1WEc0Z0lDQWdJQ0JqYjI1emRDQnZibFZ3WkdGMFpTQTlJQ2gyTENCaFkzUnBiMjRwSUQwK0lIUm9hWE11WTNWeWNtVnVkRnRyWlhsZElEMGdZV04wYVc5dUxtZGxkQ2dwTzF4dVhHNGdJQ0FnSUNBdkx5QkpiVzFsWkdsaGRHVnNlU0IxY0dSaGRHVWdkMmwwYUNCMGFHVWdZM1Z5Y21WdWRDQmhZM1JwYjI0Z2MzUmhkR1ZjYmlBZ0lDQWdJRzl1VlhCa1lYUmxLRzUxYkd3c0lIUm9hWE5iYTJWNVhTazdYRzVjYmlBZ0lDQWdJSFJvYVhOYmEyVjVYVnh1SUNBZ0lDQWdJQ0F1YzJWMFVISnZjSE1vZTF4dUlDQWdJQ0FnSUNBZ0lGOXZibE4wYjNBNklDZ3BJRDArSUhSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5MHRYRzRnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0FnSUM1aFpHUk1hWE4wWlc1bGNpaHZibFZ3WkdGMFpTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQjBhR2x6TG01MWJVRmpkR2wyWlVGamRHbHZibk1nUFNCMGFHbHpMbUZqZEdsdmJrdGxlWE11YkdWdVozUm9PMXh1SUNBZ0lIUm9hWE11WVdOMGFXOXVTMlY1Y3k1bWIzSkZZV05vS0NoclpYa3BJRDArSUhSb2FYTmJhMlY1WFM1emRHRnlkQ2dwS1R0Y2JpQWdmVnh1WEc0Z0lHOXVVM1J2Y0NncElIdGNiaUFnSUNCMGFHbHpMbUZqZEdsdmJrdGxlWE11Wm05eVJXRmphQ2dvYTJWNUtTQTlQaUIwYUdselcydGxlVjB1YzNSdmNDZ3BLVHRjYmlBZ2ZWeHVYRzRnSUdkbGRGWmxiRzlqYVhSNUtDa2dlMXh1SUNBZ0lHTnZibk4wSUhabGJHOWphWFI1SUQwZ2UzMDdYRzRnSUNBZ2RHaHBjeTVoWTNScGIyNUxaWGx6TG1admNrVmhZMmdvS0d0bGVTa2dQVDRnZG1Wc2IyTnBkSGxiYTJWNVhTQTlJSFJvYVhOYmEyVjVYUzVuWlhSV1pXeHZZMmwwZVNncEtUdGNiaUFnSUNCeVpYUjFjbTRnZG1Wc2IyTnBkSGs3WEc0Z0lIMWNibHh1SUNCcGMwRmpkR2x2YmtOdmJYQnNaWFJsS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUFvZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1eklEMDlQU0F3S1R0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1lXTjBhVzl1Y3l3Z2NISnZjSE1wSUQwK0lIdGNiaUFnY21WMGRYSnVJRzVsZHlCRGIyMXdiM05wZEdWQlkzUnBiMjRvZTF4dUlDQWdJR0ZqZEdsdmJuTXNYRzRnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdmU2s3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxudmFyIF9lYXNpbmcgPSByZXF1aXJlKCcuLi9pbmMvZWFzaW5nJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENyb3NzRmFkZSA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDcm9zc0ZhZGUsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENyb3NzRmFkZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ3Jvc3NGYWRlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ3Jvc3NGYWRlLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb247XG4gICAgdmFyIGVhc2UgPSBfcHJvcHMuZWFzZTtcbiAgICB2YXIgZmFkZXIgPSBfcHJvcHMuZmFkZXI7XG5cblxuICAgIHRoaXMuZmFkZXIgPSBmYWRlciB8fCAoMCwgX3R3ZWVuMi5kZWZhdWx0KSh7XG4gICAgICB0bzogMSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGVhc2U6IGVhc2VcbiAgICB9KS5zdGFydCgpO1xuICB9O1xuXG4gIENyb3NzRmFkZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZnJvbSA9IF9wcm9wczIuZnJvbTtcbiAgICB2YXIgdG8gPSBfcHJvcHMyLnRvO1xuXG4gICAgdmFyIGJhbGFuY2UgPSB0aGlzLmZhZGVyLmdldCgpO1xuICAgIHZhciBsYXRlc3RGcm9tVmFsdWUgPSBmcm9tLmdldCgpO1xuICAgIHZhciBsYXRlc3RUb1ZhbHVlID0gdG8uZ2V0KCk7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykobGF0ZXN0RnJvbVZhbHVlLCBsYXRlc3RUb1ZhbHVlLCBiYWxhbmNlKTtcbiAgfTtcblxuICByZXR1cm4gQ3Jvc3NGYWRlO1xufShfMi5kZWZhdWx0KTtcblxuQ3Jvc3NGYWRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZWFzZTogX2Vhc2luZy5saW5lYXJcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IENyb3NzRmFkZShwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk55YjNOekxXWmhaR1V1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3UVVGRFFUczdPenM3T3pzN096dEpRVVZOTEZNN096czdPenM3T3p0elFrRkxTaXhQTEhOQ1FVRlZPMEZCUVVFc2FVSkJRekJDTEV0QlFVc3NTMEZFTDBJN1FVRkJRU3hSUVVOQkxGRkJSRUVzVlVGRFFTeFJRVVJCTzBGQlFVRXNVVUZEVlN4SlFVUldMRlZCUTFVc1NVRkVWanRCUVVGQkxGRkJRMmRDTEV0QlJHaENMRlZCUTJkQ0xFdEJSR2hDT3pzN1FVRkhVaXhUUVVGTExFdEJRVXdzUjBGQllTeFRRVUZUTEhGQ1FVRk5PMEZCUXpGQ0xGVkJRVWtzUTBGRWMwSTdRVUZGTVVJc2QwSkJSakJDTzBGQlJ6RkNPMEZCU0RCQ0xFdEJRVTRzUlVGSmJrSXNTMEZLYlVJc1JVRkJkRUk3UVVGTFJDeEhPenR6UWtGRlJDeE5MSEZDUVVGVE8wRkJRVUVzYTBKQlEyTXNTMEZCU3l4TFFVUnVRanRCUVVGQkxGRkJRME1zU1VGRVJDeFhRVU5ETEVsQlJFUTdRVUZCUVN4UlFVTlBMRVZCUkZBc1YwRkRUeXhGUVVSUU96dEJRVVZRTEZGQlFVMHNWVUZCVlN4TFFVRkxMRXRCUVV3c1EwRkJWeXhIUVVGWUxFVkJRV2hDTzBGQlEwRXNVVUZCVFN4clFrRkJhMElzUzBGQlN5eEhRVUZNTEVWQlFYaENPMEZCUTBFc1VVRkJUU3huUWtGQlowSXNSMEZCUnl4SFFVRklMRVZCUVhSQ08wRkJRMEVzVjBGQlR5eG5RMEZCY1VJc1pVRkJja0lzUlVGQmMwTXNZVUZCZEVNc1JVRkJjVVFzVDBGQmNrUXNRMEZCVUR0QlFVTkVMRWM3T3pzN08wRkJja0pITEZNc1EwRkRSeXhaTEVkQlFXVTdRVUZEY0VJN1FVRkViMElzUXpzN2EwSkJkVUpVTEZWQlFVTXNTMEZCUkR0QlFVRkJMRk5CUVZjc1NVRkJTU3hUUVVGS0xFTkJRV01zUzBGQlpDeERRVUZZTzBGQlFVRXNReUlzSW1acGJHVWlPaUpqY205emN5MW1ZV1JsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVwYlhCdmNuUWdkSGRsWlc0Z1puSnZiU0FuTGk5MGQyVmxiaWM3WEc1cGJYQnZjblFnZXlCc2FXNWxZWElnZlNCbWNtOXRJQ2N1TGk5cGJtTXZaV0Z6YVc1bkp6dGNibWx0Y0c5eWRDQjdJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56SUgwZ1puSnZiU0FuTGk0dmFXNWpMMk5oYkdNbk8xeHVYRzVqYkdGemN5QkRjbTl6YzBaaFpHVWdaWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0J6ZEdGMGFXTWdaR1ZtWVhWc2RGQnliM0J6SUQwZ2UxeHVJQ0FnSUdWaGMyVTZJR3hwYm1WaGNseHVJQ0I5WEc1Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHUjFjbUYwYVc5dUxDQmxZWE5sTENCbVlXUmxjaUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNibHh1SUNBZ0lIUm9hWE11Wm1Ga1pYSWdQU0JtWVdSbGNpQjhmQ0IwZDJWbGJpaDdYRzRnSUNBZ0lDQjBiem9nTVN4Y2JpQWdJQ0FnSUdSMWNtRjBhVzl1TEZ4dUlDQWdJQ0FnWldGelpWeHVJQ0FnSUgwcExuTjBZWEowS0NrN1hHNGdJSDFjYmx4dUlDQjFjR1JoZEdVb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCbWNtOXRMQ0IwYnlCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQmpiMjV6ZENCaVlXeGhibU5sSUQwZ2RHaHBjeTVtWVdSbGNpNW5aWFFvS1R0Y2JpQWdJQ0JqYjI1emRDQnNZWFJsYzNSR2NtOXRWbUZzZFdVZ1BTQm1jbTl0TG1kbGRDZ3BPMXh1SUNBZ0lHTnZibk4wSUd4aGRHVnpkRlJ2Vm1Gc2RXVWdQU0IwYnk1blpYUW9LVHRjYmlBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9iR0YwWlhOMFJuSnZiVlpoYkhWbExDQnNZWFJsYzNSVWIxWmhiSFZsTENCaVlXeGhibU5sS1R0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2NISnZjSE1wSUQwK0lHNWxkeUJEY205emMwWmhaR1VvY0hKdmNITXBPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9jcm9zcy1mYWRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90d2VlbiA9IHJlcXVpcmUoJy4vdHdlZW4nKTtcblxudmFyIF90d2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2Vlbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChkdXJhdGlvbiwgb25Db21wbGV0ZSkge1xuICByZXR1cm4gKDAsIF90d2VlbjIuZGVmYXVsdCkoeyBkdXJhdGlvbjogZHVyYXRpb24sIG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlJsYkdGNUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenM3TzJ0Q1FVVmxMRlZCUVVNc1VVRkJSQ3hGUVVGWExGVkJRVmc3UVVGQlFTeFRRVUV3UWl4eFFrRkJUU3hGUVVGRkxHdENRVUZHTEVWQlFWa3NjMEpCUVZvc1JVRkJUaXhEUVVFeFFqdEJRVUZCTEVNaUxDSm1hV3hsSWpvaVpHVnNZWGt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkSGRsWlc0Z1puSnZiU0FuTGk5MGQyVmxiaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoa2RYSmhkR2x2Yml3Z2IyNURiMjF3YkdWMFpTa2dQVDRnZEhkbFpXNG9leUJrZFhKaGRHbHZiaXdnYjI1RGIyMXdiR1YwWlNCOUtUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9kZWxheS5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgT2Zmc2V0ID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKE9mZnNldCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gT2Zmc2V0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPZmZzZXQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBPZmZzZXQucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGlucHV0ID0gdGhpcy5wcm9wcy5pbnB1dDtcblxuICAgIHRoaXMuaW5wdXRPcmlnaW4gPSBpbnB1dC5nZXQoKTtcblxuICAgIHRoaXMuc2NoZWR1bGVVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKShfdGhpczIuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9O1xuXG4gICAgaW5wdXQuYWRkTGlzdGVuZXIodGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gIH07XG5cbiAgT2Zmc2V0LnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdmFyIGlucHV0ID0gdGhpcy5wcm9wcy5pbnB1dDtcblxuICAgIGlucHV0LnJlbW92ZUxpc3RlbmVyKHRoaXMuc2NoZWR1bGVVcGRhdGUpO1xuICB9O1xuXG4gIE9mZnNldC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBpbnB1dCA9IF9wcm9wcy5pbnB1dDtcbiAgICB2YXIgZnJvbSA9IF9wcm9wcy5mcm9tO1xuXG4gICAgdmFyIG9mZnNldCA9IGlucHV0LmdldCgpIC0gdGhpcy5pbnB1dE9yaWdpbjtcbiAgICByZXR1cm4gZnJvbSArIG9mZnNldDtcbiAgfTtcblxuICByZXR1cm4gT2Zmc2V0O1xufShfMi5kZWZhdWx0KTtcblxuT2Zmc2V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZnJvbTogMCxcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmdzWzBdO1xuXG4gICAgcmV0dXJuIG5ldyBPZmZzZXQocHJvcHMpO1xuICB9IGVsc2Uge1xuICAgIHZhciBpbnB1dCA9IGFyZ3NbMF07XG4gICAgdmFyIG9uVXBkYXRlID0gYXJnc1sxXTtcbiAgICB2YXIgX3Byb3BzMiA9IGFyZ3NbMl07XG5cbiAgICByZXR1cm4gbmV3IE9mZnNldChfZXh0ZW5kcyh7XG4gICAgICBpbnB1dDogaW5wdXQsXG4gICAgICBvblVwZGF0ZTogb25VcGRhdGVcbiAgICB9LCBfcHJvcHMyKSk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyOW1abk5sZEM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenRCUVVOQk96czdPenM3T3pzN08wbEJSVTBzVFRzN096czdPenM3TzIxQ1FVMUtMRThzYzBKQlFWVTdRVUZCUVRzN1FVRkJRU3hSUVVOQkxFdEJSRUVzUjBGRFZTeExRVUZMTEV0QlJHWXNRMEZEUVN4TFFVUkJPenRCUVVWU0xGTkJRVXNzVjBGQlRDeEhRVUZ0UWl4TlFVRk5MRWRCUVU0c1JVRkJia0k3TzBGQlJVRXNVMEZCU3l4alFVRk1MRWRCUVhOQ0xGbEJRVTA3UVVGRE1VSXNiME5CUVdNc1QwRkJTeXhsUVVGdVFqdEJRVU5FTEV0QlJrUTdPMEZCU1VFc1ZVRkJUU3hYUVVGT0xFTkJRV3RDTEV0QlFVc3NZMEZCZGtJN1FVRkRSQ3hIT3p0dFFrRkZSQ3hOTEhGQ1FVRlRPMEZCUVVFc1VVRkRReXhMUVVSRUxFZEJRMWNzUzBGQlN5eExRVVJvUWl4RFFVTkRMRXRCUkVRN08wRkJSVkFzVlVGQlRTeGpRVUZPTEVOQlFYRkNMRXRCUVVzc1kwRkJNVUk3UVVGRFJDeEhPenR0UWtGRlJDeE5MSEZDUVVGVE8wRkJRVUVzYVVKQlEybENMRXRCUVVzc1MwRkVkRUk3UVVGQlFTeFJRVU5ETEV0QlJFUXNWVUZEUXl4TFFVUkVPMEZCUVVFc1VVRkRVU3hKUVVSU0xGVkJRMUVzU1VGRVVqczdRVUZGVUN4UlFVRk5MRk5CUVZNc1RVRkJUU3hIUVVGT0xFdEJRV01zUzBGQlN5eFhRVUZzUXp0QlFVTkJMRmRCUVU4c1QwRkJUeXhOUVVGa08wRkJRMFFzUnpzN096czdRVUV4UWtjc1RTeERRVU5ITEZrc1IwRkJaVHRCUVVOd1FpeFJRVUZOTEVOQlJHTTdRVUZGY0VJc1YwRkJVenRCUVVaWExFTTdPMnRDUVRSQ1ZDeFpRVUZoTzBGQlFVRXNiME5CUVZRc1NVRkJVenRCUVVGVUxGRkJRVk03UVVGQlFUczdRVUZETVVJc1RVRkJTU3hMUVVGTExFMUJRVXdzUzBGQlowSXNRMEZCY0VJc1JVRkJkVUk3UVVGQlFTeFJRVU5pTEV0QlJHRXNSMEZEU0N4SlFVUkhPenRCUVVWeVFpeFhRVUZQTEVsQlFVa3NUVUZCU2l4RFFVRlhMRXRCUVZnc1EwRkJVRHRCUVVORUxFZEJTRVFzVFVGSFR6dEJRVUZCTEZGQlEwY3NTMEZFU0N4SFFVTTRRaXhKUVVRNVFqdEJRVUZCTEZGQlExVXNVVUZFVml4SFFVTTRRaXhKUVVRNVFqdEJRVUZCTEZGQlEyOUNMRTlCUkhCQ0xFZEJRemhDTEVsQlJEbENPenRCUVVWTUxGZEJRVThzU1VGQlNTeE5RVUZLTzBGQlEwd3NhMEpCUkVzN1FVRkZURHRCUVVaTExFOUJSMFlzVDBGSVJTeEZRVUZRTzBGQlMwUTdRVUZEUml4RElpd2labWxzWlNJNkltOW1abk5sZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1YVcxd2IzSjBJSHNnYjI1R2NtRnRaVlZ3WkdGMFpTQjlJR1p5YjIwZ0p5NHVMMlp5WVcxbGMzbHVZeWM3WEc1Y2JtTnNZWE56SUU5bVpuTmxkQ0JsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzRnSUhOMFlYUnBZeUJrWldaaGRXeDBVSEp2Y0hNZ1BTQjdYRzRnSUNBZ1puSnZiVG9nTUN4Y2JpQWdJQ0J3WVhOemFYWmxPaUIwY25WbFhHNGdJSDA3WEc1Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHbHVjSFYwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lIUm9hWE11YVc1d2RYUlBjbWxuYVc0Z1BTQnBibkIxZEM1blpYUW9LVHRjYmx4dUlDQWdJSFJvYVhNdWMyTm9aV1IxYkdWVmNHUmhkR1VnUFNBb0tTQTlQaUI3WEc0Z0lDQWdJQ0J2YmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11YzJOb1pXUjFiR1ZrVlhCa1lYUmxLVHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdhVzV3ZFhRdVlXUmtUR2x6ZEdWdVpYSW9kR2hwY3k1elkyaGxaSFZzWlZWd1pHRjBaU2s3WEc0Z0lIMWNibHh1SUNCdmJsTjBiM0FvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJwYm5CMWRDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0JwYm5CMWRDNXlaVzF2ZG1WTWFYTjBaVzVsY2loMGFHbHpMbk5qYUdWa2RXeGxWWEJrWVhSbEtUdGNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHbHVjSFYwTENCbWNtOXRJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJRzltWm5ObGRDQTlJR2x1Y0hWMExtZGxkQ2dwSUMwZ2RHaHBjeTVwYm5CMWRFOXlhV2RwYmp0Y2JpQWdJQ0J5WlhSMWNtNGdabkp2YlNBcklHOW1abk5sZER0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb0xpNHVZWEpuY3lrZ1BUNGdlMXh1SUNCcFppQW9ZWEpuY3k1c1pXNW5kR2dnUFQwOUlERXBJSHRjYmlBZ0lDQmpiMjV6ZENCYklIQnliM0J6SUYwZ1BTQmhjbWR6TzF4dUlDQWdJSEpsZEhWeWJpQnVaWGNnVDJabWMyVjBLSEJ5YjNCektUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmpiMjV6ZENCYklHbHVjSFYwTENCdmJsVndaR0YwWlN3Z2NISnZjSE1nWFNBOUlHRnlaM003WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJQWm1aelpYUW9lMXh1SUNBZ0lDQWdhVzV3ZFhRc1hHNGdJQ0FnSUNCdmJsVndaR0YwWlN4Y2JpQWdJQ0FnSUM0dUxuQnliM0J6WEc0Z0lDQWdmU2s3WEc0Z0lIMWNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvb2Zmc2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQYXJhbGxlbCA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQYXJhbGxlbCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGFyYWxsZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhcmFsbGVsKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLnByb3BzLmFjdGlvbnM7XG5cbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSBhY3Rpb25zLmxlbmd0aDtcblxuICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICBhY3Rpb24uc2V0UHJvcHMoe1xuICAgICAgICBfb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLnN0b3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUuYWRkQWN0aW9uID0gZnVuY3Rpb24gYWRkQWN0aW9uKGFjdGlvbikge1xuICAgIHZhciBhY3Rpb25zID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuXG5cbiAgICBpZiAoYWN0aW9ucy5pbmRleE9mKGFjdGlvbikgPT09IC0xKSB7XG4gICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDA7XG4gIH07XG5cbiAgcmV0dXJuIFBhcmFsbGVsO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGFyYWxsZWwoX2V4dGVuZHMoeyBhY3Rpb25zOiBhY3Rpb25zIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0JoY21Gc2JHVnNMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3pzN096czdPenM3T3pzN1NVRkZUU3hST3pzN096czdPenM3Y1VKQlEwb3NUeXh6UWtGQlZUdEJRVUZCT3p0QlFVRkJMRkZCUTBFc1QwRkVRU3hIUVVOWkxFdEJRVXNzUzBGRWFrSXNRMEZEUVN4UFFVUkJPenRCUVVWU0xGTkJRVXNzWjBKQlFVd3NSMEZCZDBJc1VVRkJVU3hOUVVGb1F6czdRVUZGUVN4WlFVRlJMRTlCUVZJc1EwRkJaMElzVlVGQlF5eE5RVUZFTEVWQlFWazdRVUZETVVJc1lVRkJUeXhSUVVGUUxFTkJRV2RDTzBGQlEyUXNhVUpCUVZNN1FVRkJRU3hwUWtGQlRTeFBRVUZMTEdkQ1FVRk1MRVZCUVU0N1FVRkJRVHRCUVVSTExFOUJRV2hDTEVWQlJVY3NTMEZHU0R0QlFVZEVMRXRCU2tRN1FVRkxSQ3hIT3p0eFFrRkZSQ3hOTEhGQ1FVRlRPMEZCUTFBc1UwRkJTeXhMUVVGTUxFTkJRVmNzVDBGQldDeERRVUZ0UWl4UFFVRnVRaXhEUVVFeVFpeFZRVUZETEUxQlFVUTdRVUZCUVN4aFFVRlpMRTlCUVU4c1NVRkJVQ3hGUVVGYU8wRkJRVUVzUzBGQk0wSTdRVUZEUkN4SE96dHhRa0ZGUkN4VExITkNRVUZWTEUwc1JVRkJVVHRCUVVGQkxGRkJRMUlzVDBGRVVTeEhRVU5KTEV0QlFVc3NTMEZFVkN4RFFVTlNMRTlCUkZFN096dEJRVWRvUWl4UlFVRkpMRkZCUVZFc1QwRkJVaXhEUVVGblFpeE5RVUZvUWl4TlFVRTBRaXhEUVVGRExFTkJRV3BETEVWQlFXOURPMEZCUTJ4RExHTkJRVkVzU1VGQlVpeERRVUZoTEUxQlFXSTdRVUZEUkR0QlFVTkdMRWM3TzNGQ1FVVkVMR2RDTEN0Q1FVRnRRanRCUVVOcVFpeFhRVUZSTEV0QlFVc3NaMEpCUVV3c1MwRkJNRUlzUTBGQmJFTTdRVUZEUkN4SE96czdPenRyUWtGSFdTeFZRVUZETEU5QlFVUXNSVUZCVlN4TFFVRldPMEZCUVVFc1UwRkJiMElzU1VGQlNTeFJRVUZLTEZsQlFXVXNaMEpCUVdZc1NVRkJNa0lzUzBGQk0wSXNSVUZCY0VJN1FVRkJRU3hESWl3aVptbHNaU0k2SW5CaGNtRnNiR1ZzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVjYm1Oc1lYTnpJRkJoY21Gc2JHVnNJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR0ZqZEdsdmJuTWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1eklEMGdZV04wYVc5dWN5NXNaVzVuZEdnN1hHNWNiaUFnSUNCaFkzUnBiMjV6TG1admNrVmhZMmdvS0dGamRHbHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ1lXTjBhVzl1TG5ObGRGQnliM0J6S0h0Y2JpQWdJQ0FnSUNBZ1gyOXVVM1J2Y0RvZ0tDa2dQVDRnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1ekxTMWNiaUFnSUNBZ0lIMHBMbk4wWVhKMEtDazdYRzRnSUNBZ2ZTazdYRzRnSUgxY2JseHVJQ0J2YmxOMGIzQW9LU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTVoWTNScGIyNXpMbVp2Y2tWaFkyZ29LR0ZqZEdsdmJpa2dQVDRnWVdOMGFXOXVMbk4wYjNBb0tTazdYRzRnSUgxY2JseHVJQ0JoWkdSQlkzUnBiMjRvWVdOMGFXOXVLU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmhZM1JwYjI1eklIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tHRmpkR2x2Ym5NdWFXNWtaWGhQWmloaFkzUnBiMjRwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnWVdOMGFXOXVjeTV3ZFhOb0tHRmpkR2x2YmlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FYTkJZM1JwYjI1RGIyMXdiR1YwWlNncElIdGNiaUFnSUNCeVpYUjFjbTRnS0hSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5QTlQVDBnTUNrN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHRmpkR2x2Ym5Nc0lIQnliM0J6S1NBOVBpQnVaWGNnVUdGeVlXeHNaV3dvZXlCaFkzUnBiMjV6TENBdUxpNXdjbTl3Y3lCOUtUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wYXJhbGxlbC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGh5c2ljcyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQaHlzaWNzLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBQaHlzaWNzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaHlzaWNzKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUGh5c2ljcy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBhdXRvU3RvcFNwZWVkID0gX3Byb3BzLmF1dG9TdG9wU3BlZWQ7XG4gICAgdmFyIGFjY2VsZXJhdGlvbiA9IF9wcm9wcy5hY2NlbGVyYXRpb247XG4gICAgdmFyIGZyaWN0aW9uID0gX3Byb3BzLmZyaWN0aW9uO1xuICAgIHZhciB2ZWxvY2l0eSA9IF9wcm9wcy52ZWxvY2l0eTtcbiAgICB2YXIgc3ByaW5nID0gX3Byb3BzLnNwcmluZztcbiAgICB2YXIgdG8gPSBfcHJvcHMudG87XG5cbiAgICB2YXIgbmV3VmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICB2YXIgZWxhcHNlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcblxuICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChhY2NlbGVyYXRpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShhY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGZyaWN0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGZyaWN0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSAqPSBNYXRoLnBvdygxIC0gZnJpY3Rpb24sIGVsYXBzZWQgLyAxMDApO1xuICAgIH1cblxuICAgIGlmIChzcHJpbmcgJiYgdG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGRpc3RhbmNlVG9UYXJnZXQgPSB0byAtIHRoaXMuY3VycmVudDtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkoc3ByaW5nLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB2ZWxvY2l0eVxuICAgIHRoaXMuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkobmV3VmVsb2NpdHksIGVsYXBzZWQpO1xuICAgIHRoaXMucHJvcHMudmVsb2NpdHkgPSBuZXdWZWxvY2l0eTtcblxuICAgIC8vIENoZWNrIGlmIHNpbXVsYXRpb24gaXMgY29tcGxldGVcbiAgICAvLyBXZSBkbyB0aGlzIGhlcmUgaW5zdGVhZCBvZiBgaXNBY3Rpb25Db21wbGV0ZWAgYXMgaXQgYWxsb3dzIHVzXG4gICAgLy8gdG8gY2xhbXAgZHVyaW5nIHRoaXMgdXBkYXRlXG4gICAgdGhpcy5pc0NvbXBsZXRlID0gYXV0b1N0b3BTcGVlZCAhPT0gZmFsc2UgJiYgKCFuZXdWZWxvY2l0eSB8fCBNYXRoLmFicyhuZXdWZWxvY2l0eSkgPD0gYXV0b1N0b3BTcGVlZCk7XG5cbiAgICBpZiAodGhpcy5pc0NvbXBsZXRlICYmIHNwcmluZykge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdG87XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBQaHlzaWNzLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICB9O1xuXG4gIHJldHVybiBQaHlzaWNzO1xufShfMi5kZWZhdWx0KTtcblxuUGh5c2ljcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjY2VsZXJhdGlvbjogMCxcbiAgZnJpY3Rpb246IDAsXG4gIHZlbG9jaXR5OiAwLFxuICBhdXRvU3RvcFNwZWVkOiAwLjAwMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGh5c2ljcyhwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0JvZVhOcFkzTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPMEZCUTBFN096czdPenM3T3pzN1NVRkZUU3hQT3pzN096czdPenM3YjBKQlVVb3NUU3h4UWtGQlV6dEJRVUZCTEdsQ1FVTnBSU3hMUVVGTExFdEJSSFJGTzBGQlFVRXNVVUZEUXl4aFFVUkVMRlZCUTBNc1lVRkVSRHRCUVVGQkxGRkJRMmRDTEZsQlJHaENMRlZCUTJkQ0xGbEJSR2hDTzBGQlFVRXNVVUZET0VJc1VVRkVPVUlzVlVGRE9FSXNVVUZFT1VJN1FVRkJRU3hSUVVOM1F5eFJRVVI0UXl4VlFVTjNReXhSUVVSNFF6dEJRVUZCTEZGQlEydEVMRTFCUkd4RUxGVkJRMnRFTEUxQlJHeEVPMEZCUVVFc1VVRkRNRVFzUlVGRU1VUXNWVUZETUVRc1JVRkVNVVE3TzBGQlJWQXNVVUZCU1N4alFVRmpMRkZCUVd4Q08wRkJRMEVzVVVGQlRTeFZRVUZWTEc5RFFVRm9RanM3TzBGQlIwRXNVVUZCU1N4WlFVRktMRVZCUVd0Q08wRkJRMmhDTEhGQ1FVRmxMSGxDUVVGakxGbEJRV1FzUlVGQk5FSXNUMEZCTlVJc1EwRkJaanRCUVVORU96czdRVUZIUkN4UlFVRkpMRkZCUVVvc1JVRkJZenRCUVVOYUxEaENRVUZuUWl4SlFVRkpMRkZCUVhCQ0xFVkJRV3RETEZWQlFWVXNSMEZCTlVNN1FVRkRSRHM3UVVGRlJDeFJRVUZKTEZWQlFWVXNUMEZCVHl4VFFVRnlRaXhGUVVGblF6dEJRVU01UWl4VlFVRk5MRzFDUVVGdFFpeExRVUZMTEV0QlFVc3NUMEZCYmtNN1FVRkRRU3h4UWtGQlpTeHRRa0ZCYlVJc2VVSkJRV01zVFVGQlpDeEZRVUZ6UWl4UFFVRjBRaXhEUVVGc1F6dEJRVU5FT3pzN1FVRkhSQ3hUUVVGTExFOUJRVXdzU1VGQlowSXNlVUpCUVdNc1YwRkJaQ3hGUVVFeVFpeFBRVUV6UWl4RFFVRm9RanRCUVVOQkxGTkJRVXNzUzBGQlRDeERRVUZYTEZGQlFWZ3NSMEZCYzBJc1YwRkJkRUk3T3pzN08wRkJTMEVzVTBGQlN5eFZRVUZNTEVkQlFXMUNMR3RDUVVGclFpeExRVUZzUWl4TFFVRTBRaXhEUVVGRExGZEJRVVFzU1VGQlowSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1YwRkJWQ3hMUVVGNVFpeGhRVUZ5UlN4RFFVRnVRanM3UVVGRlFTeFJRVUZKTEV0QlFVc3NWVUZCVEN4SlFVRnRRaXhOUVVGMlFpeEZRVUVyUWp0QlFVTTNRaXhYUVVGTExFOUJRVXdzUjBGQlpTeEZRVUZtTzBGQlEwUTdPMEZCUlVRc1YwRkJUeXhMUVVGTExFOUJRVm83UVVGRFJDeEhPenR2UWtGRlJDeG5RaXdyUWtGQmJVSTdRVUZEYWtJc1YwRkJUeXhMUVVGTExGVkJRVm83UVVGRFJDeEhPenM3T3p0QlFUbERSeXhQTEVOQlEwY3NXU3hIUVVGbE8wRkJRM0JDTEdkQ1FVRmpMRU5CUkUwN1FVRkZjRUlzV1VGQlZTeERRVVpWTzBGQlIzQkNMRmxCUVZVc1EwRklWVHRCUVVsd1FpeHBRa0ZCWlR0QlFVcExMRU03TzJ0Q1FXZEVWQ3hWUVVGRExFdEJRVVE3UVVGQlFTeFRRVUZYTEVsQlFVa3NUMEZCU2l4RFFVRlpMRXRCUVZvc1EwRkJXRHRCUVVGQkxFTWlMQ0ptYVd4bElqb2ljR2g1YzJsamN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaThuTzF4dWFXMXdiM0owSUhzZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbElIMGdabkp2YlNBbkxpNHZabkpoYldWemVXNWpKenRjYm1sdGNHOXlkQ0I3SUhOd1pXVmtVR1Z5Um5KaGJXVWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JtTnNZWE56SUZCb2VYTnBZM01nWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCemRHRjBhV01nWkdWbVlYVnNkRkJ5YjNCeklEMGdlMXh1SUNBZ0lHRmpZMlZzWlhKaGRHbHZiam9nTUN4Y2JpQWdJQ0JtY21samRHbHZiam9nTUN4Y2JpQWdJQ0IyWld4dlkybDBlVG9nTUN4Y2JpQWdJQ0JoZFhSdlUzUnZjRk53WldWa09pQXdMakF3TVZ4dUlDQjlYRzVjYmlBZ2RYQmtZWFJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWVhWMGIxTjBiM0JUY0dWbFpDd2dZV05qWld4bGNtRjBhVzl1TENCbWNtbGpkR2x2Yml3Z2RtVnNiMk5wZEhrc0lITndjbWx1Wnl3Z2RHOGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnYkdWMElHNWxkMVpsYkc5amFYUjVJRDBnZG1Wc2IyTnBkSGs3WEc0Z0lDQWdZMjl1YzNRZ1pXeGhjSE5sWkNBOUlIUnBiV1ZUYVc1alpVeGhjM1JHY21GdFpTZ3BPMXh1WEc0Z0lDQWdMeThnUVhCd2JIa2dZV05qWld4bGNtRjBhVzl1SUhSdklIWmxiRzlqYVhSNVhHNGdJQ0FnYVdZZ0tHRmpZMlZzWlhKaGRHbHZiaWtnZTF4dUlDQWdJQ0FnYm1WM1ZtVnNiMk5wZEhrZ0t6MGdjM0JsWldSUVpYSkdjbUZ0WlNoaFkyTmxiR1Z5WVhScGIyNHNJR1ZzWVhCelpXUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRUZ3Y0d4NUlHWnlhV04wYVc5dUlIUnZJSFpsYkc5amFYUjVYRzRnSUNBZ2FXWWdLR1p5YVdOMGFXOXVLU0I3WEc0Z0lDQWdJQ0J1WlhkV1pXeHZZMmwwZVNBcVBTQW9NU0F0SUdaeWFXTjBhVzl1S1NBcUtpQW9aV3hoY0hObFpDQXZJREV3TUNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tITndjbWx1WnlBbUppQjBieUFoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCa2FYTjBZVzVqWlZSdlZHRnlaMlYwSUQwZ2RHOGdMU0IwYUdsekxtTjFjbkpsYm5RN1hHNGdJQ0FnSUNCdVpYZFdaV3h2WTJsMGVTQXJQU0JrYVhOMFlXNWpaVlJ2VkdGeVoyVjBJQ29nYzNCbFpXUlFaWEpHY21GdFpTaHpjSEpwYm1jc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFRndjR3g1SUhabGJHOWphWFI1WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwSUNzOUlITndaV1ZrVUdWeVJuSmhiV1VvYm1WM1ZtVnNiMk5wZEhrc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUhSb2FYTXVjSEp2Y0hNdWRtVnNiMk5wZEhrZ1BTQnVaWGRXWld4dlkybDBlVHRjYmx4dUlDQWdJQzh2SUVOb1pXTnJJR2xtSUhOcGJYVnNZWFJwYjI0Z2FYTWdZMjl0Y0d4bGRHVmNiaUFnSUNBdkx5QlhaU0JrYnlCMGFHbHpJR2hsY21VZ2FXNXpkR1ZoWkNCdlppQmdhWE5CWTNScGIyNURiMjF3YkdWMFpXQWdZWE1nYVhRZ1lXeHNiM2R6SUhWelhHNGdJQ0FnTHk4Z2RHOGdZMnhoYlhBZ1pIVnlhVzVuSUhSb2FYTWdkWEJrWVhSbFhHNGdJQ0FnZEdocGN5NXBjME52YlhCc1pYUmxJRDBnS0dGMWRHOVRkRzl3VTNCbFpXUWdJVDA5SUdaaGJITmxJQ1ltSUNnaGJtVjNWbVZzYjJOcGRIa2dmSHdnVFdGMGFDNWhZbk1vYm1WM1ZtVnNiMk5wZEhrcElEdzlJR0YxZEc5VGRHOXdVM0JsWldRcEtUdGNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtbHpRMjl0Y0d4bGRHVWdKaVlnYzNCeWFXNW5LU0I3WEc0Z0lDQWdJQ0IwYUdsekxtTjFjbkpsYm5RZ1BTQjBienRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVqZFhKeVpXNTBPMXh1SUNCOVhHNWNiaUFnYVhOQlkzUnBiMjVEYjIxd2JHVjBaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1cGMwTnZiWEJzWlhSbE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaHdjbTl3Y3lrZ1BUNGdibVYzSUZCb2VYTnBZM01vY0hKdmNITXBPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF92YWx1ZSA9IHJlcXVpcmUoJy4vdmFsdWUnKTtcblxudmFyIF92YWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZSk7XG5cbnZhciBfY29tcG9zaXRlID0gcmVxdWlyZSgnLi9jb21wb3NpdGUnKTtcblxudmFyIF9jb21wb3NpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBjcmVhdGVQb2ludGVyKF9yZWYyLCBfcmVmKSB7XG4gIHZhciB4ID0gX3JlZjIueDtcbiAgdmFyIHkgPSBfcmVmMi55O1xuICB2YXIgZXZlbnRUb1BvaW50cyA9IF9yZWYuZXZlbnRUb1BvaW50cztcbiAgdmFyIG1vdmVFdmVudCA9IF9yZWYubW92ZUV2ZW50O1xuXG4gIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2V2ZW50VG9Qb2ludHMnLCAnbW92ZUV2ZW50J10pO1xuXG4gIHZhciBwb2ludGVyID0gKDAsIF9jb21wb3NpdGUyLmRlZmF1bHQpKHtcbiAgICB4OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh4KSxcbiAgICB5OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh5KVxuICB9LCBfZXh0ZW5kcyh7XG4gICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZVxuICB9LCBwcm9wcykpO1xuXG4gIHZhciB1cGRhdGVQb2ludGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAocHJvcHMucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgcG9pbnRzID0gZXZlbnRUb1BvaW50cyhlKTtcbiAgICBwb2ludGVyLnguc2V0KHBvaW50cy54KTtcbiAgICBwb2ludGVyLnkuc2V0KHBvaW50cy55KTtcbiAgfTtcblxuICBwb2ludGVyLnNldFByb3BzKHtcbiAgICBfb25TdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlcik7XG4gICAgfSxcbiAgICBfb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVQb2ludGVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwb2ludGVyO1xufVxuXG52YXIgbW91c2VFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4ge1xuICAgIHg6IGUucGFnZVgsXG4gICAgeTogZS5wYWdlWVxuICB9O1xufTtcblxudmFyIHRvdWNoRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKF9yZWYzKSB7XG4gIHZhciBjaGFuZ2VkVG91Y2hlcyA9IF9yZWYzLmNoYW5nZWRUb3VjaGVzO1xuICByZXR1cm4ge1xuICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICB9O1xufTtcblxudmFyIGdldE5hdGl2ZUV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlLm5hdGl2ZUV2ZW50IHx8IGU7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZSwgcHJvcHMpIHtcbiAgdmFyIG5hdGl2ZUV2ZW50ID0gZ2V0TmF0aXZlRXZlbnQoZSk7XG4gIHJldHVybiBuYXRpdmVFdmVudC50b3VjaGVzID8gY3JlYXRlUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwgX2V4dGVuZHMoe1xuICAgIG1vdmVFdmVudDogJ3RvdWNobW92ZScsXG4gICAgZXZlbnRUb1BvaW50czogdG91Y2hFdmVudFRvUG9pbnRcbiAgfSwgcHJvcHMpKSA6IGNyZWF0ZVBvaW50ZXIobW91c2VFdmVudFRvUG9pbnQoZSksIF9leHRlbmRzKHtcbiAgICBtb3ZlRXZlbnQ6ICdtb3VzZW1vdmUnLFxuICAgIGV2ZW50VG9Qb2ludHM6IG1vdXNlRXZlbnRUb1BvaW50XG4gIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0J2YVc1MFpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3pzN096czdRVUZGUVN4VFFVRlRMR0ZCUVZRc1kwRkJlVVU3UVVGQlFTeE5RVUZvUkN4RFFVRm5SQ3hUUVVGb1JDeERRVUZuUkR0QlFVRkJMRTFCUVRkRExFTkJRVFpETEZOQlFUZERMRU5CUVRaRE8wRkJRVUVzVFVGQmRFTXNZVUZCYzBNc1VVRkJkRU1zWVVGQmMwTTdRVUZCUVN4TlFVRjJRaXhUUVVGMVFpeFJRVUYyUWl4VFFVRjFRanM3UVVGQlFTeE5RVUZVTEV0QlFWTTdPMEZCUTNaRkxFMUJRVTBzVlVGQlZTeDVRa0ZCVlR0QlFVTjRRaXhQUVVGSExIRkNRVUZOTEVOQlFVNHNRMEZFY1VJN1FVRkZlRUlzVDBGQlJ5eHhRa0ZCVFN4RFFVRk9PMEZCUm5GQ0xFZEJRVlk3UVVGSlpDeGhRVUZUTEVsQlNrczdRVUZMWkN4dlFrRkJaMEk3UVVGTVJpeExRVTFZTEV0QlRsY3NSVUZCYUVJN08wRkJVMEVzVFVGQlRTeG5Ra0ZCWjBJc1ZVRkJReXhEUVVGRUxFVkJRVTg3UVVGRE0wSXNVVUZCU1N4TlFVRk5MR05CUVZZc1JVRkJNRUk3UVVGRGVFSXNVVUZCUlN4alFVRkdPMEZCUTBRN08wRkJSVVFzVVVGQlRTeFRRVUZUTEdOQlFXTXNRMEZCWkN4RFFVRm1PMEZCUTBFc1dVRkJVU3hEUVVGU0xFTkJRVlVzUjBGQlZpeERRVUZqTEU5QlFVOHNRMEZCY2tJN1FVRkRRU3haUVVGUkxFTkJRVklzUTBGQlZTeEhRVUZXTEVOQlFXTXNUMEZCVHl4RFFVRnlRanRCUVVORUxFZEJVa1E3TzBGQlZVRXNWVUZCVVN4UlFVRlNMRU5CUVdsQ08wRkJRMllzWTBGQlZUdEJRVUZCTEdGQlFVMHNVMEZCVXl4bFFVRlVMRU5CUVhsQ0xHZENRVUY2UWl4RFFVRXdReXhUUVVFeFF5eEZRVUZ4UkN4aFFVRnlSQ3hEUVVGT08wRkJRVUVzUzBGRVN6dEJRVVZtTEdGQlFWTTdRVUZCUVN4aFFVRk5MRk5CUVZNc1pVRkJWQ3hEUVVGNVFpeHRRa0ZCZWtJc1EwRkJOa01zVTBGQk4wTXNSVUZCZDBRc1lVRkJlRVFzUTBGQlRqdEJRVUZCTzBGQlJrMHNSMEZCYWtJN08wRkJTMEVzVTBGQlR5eFBRVUZRTzBGQlEwUTdPMEZCUlVRc1NVRkJUU3h2UWtGQmIwSXNWVUZCUXl4RFFVRkVPMEZCUVVFc1UwRkJVVHRCUVVOb1F5eFBRVUZITEVWQlFVVXNTMEZFTWtJN1FVRkZhRU1zVDBGQlJ5eEZRVUZGTzBGQlJqSkNMRWRCUVZJN1FVRkJRU3hEUVVFeFFqczdRVUZMUVN4SlFVRk5MRzlDUVVGdlFqdEJRVUZCTEUxQlFVY3NZMEZCU0N4VFFVRkhMR05CUVVnN1FVRkJRU3hUUVVGNVFqdEJRVU5xUkN4UFFVRkhMR1ZCUVdVc1EwRkJaaXhGUVVGclFpeFBRVVEwUWp0QlFVVnFSQ3hQUVVGSExHVkJRV1VzUTBGQlppeEZRVUZyUWp0QlFVWTBRaXhIUVVGNlFqdEJRVUZCTEVOQlFURkNPenRCUVV0QkxFbEJRVTBzYVVKQlFXbENMRlZCUVVNc1EwRkJSRHRCUVVGQkxGTkJRVThzUlVGQlJTeGhRVUZHTEVsQlFXMUNMRVZCUVVVc1YwRkJja0lzU1VGQmIwTXNRMEZCTTBNN1FVRkJRU3hEUVVGMlFqczdhMEpCUldVc1ZVRkJReXhEUVVGRUxFVkJRVWtzUzBGQlNpeEZRVUZqTzBGQlF6TkNMRTFCUVUwc1kwRkJZeXhsUVVGbExFTkJRV1lzUTBGQmNFSTdRVUZEUVN4VFFVRlJMRmxCUVZrc1QwRkJZaXhIUVVOTUxHTkJRV01zYTBKQlFXdENMRU5CUVd4Q0xFTkJRV1E3UVVGRFJTeGxRVUZYTEZkQlJHSTdRVUZGUlN4dFFrRkJaVHRCUVVacVFpeExRVWRMTEV0QlNFd3NSVUZFU3l4SFFVMU1MR05CUVdNc2EwSkJRV3RDTEVOQlFXeENMRU5CUVdRN1FVRkRSU3hsUVVGWExGZEJSR0k3UVVGRlJTeHRRa0ZCWlR0QlFVWnFRaXhMUVVkTExFdEJTRXdzUlVGT1JqdEJRVmRFTEVNaUxDSm1hV3hsSWpvaWNHOXBiblJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IyWVd4MVpTQm1jbTl0SUNjdUwzWmhiSFZsSnp0Y2JtbHRjRzl5ZENCamIyMXdiM05wZEdVZ1puSnZiU0FuTGk5amIyMXdiM05wZEdVbk8xeHVYRzVtZFc1amRHbHZiaUJqY21WaGRHVlFiMmx1ZEdWeUtIc2dlQ3dnZVNCOUxDQjdJR1YyWlc1MFZHOVFiMmx1ZEhNc0lHMXZkbVZGZG1WdWRDd2dMaTR1Y0hKdmNITWdmU2tnZTF4dUlDQmpiMjV6ZENCd2IybHVkR1Z5SUQwZ1kyOXRjRzl6YVhSbEtIdGNiaUFnSUNCNE9pQjJZV3gxWlNoNEtTeGNiaUFnSUNCNU9pQjJZV3gxWlNoNUtWeHVJQ0I5TENCN1hHNGdJQ0FnY0dGemMybDJaVG9nZEhKMVpTeGNiaUFnSUNCd2NtVjJaVzUwUkdWbVlYVnNkRG9nZEhKMVpTeGNiaUFnSUNBdUxpNXdjbTl3YzF4dUlDQjlLVHRjYmx4dUlDQmpiMjV6ZENCMWNHUmhkR1ZRYjJsdWRHVnlJRDBnS0dVcElEMCtJSHRjYmlBZ0lDQnBaaUFvY0hKdmNITXVjSEpsZG1WdWRFUmxabUYxYkhRcElIdGNiaUFnSUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCamIyNXpkQ0J3YjJsdWRITWdQU0JsZG1WdWRGUnZVRzlwYm5SektHVXBPMXh1SUNBZ0lIQnZhVzUwWlhJdWVDNXpaWFFvY0c5cGJuUnpMbmdwTzF4dUlDQWdJSEJ2YVc1MFpYSXVlUzV6WlhRb2NHOXBiblJ6TG5rcE8xeHVJQ0I5TzF4dVhHNGdJSEJ2YVc1MFpYSXVjMlYwVUhKdmNITW9lMXh1SUNBZ0lGOXZibE4wWVhKME9pQW9LU0E5UGlCa2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWh0YjNabFJYWmxiblFzSUhWd1pHRjBaVkJ2YVc1MFpYSXBMRnh1SUNBZ0lGOXZibE4wYjNBNklDZ3BJRDArSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0cxdmRtVkZkbVZ1ZEN3Z2RYQmtZWFJsVUc5cGJuUmxjaWxjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUhCdmFXNTBaWEk3WEc1OVhHNWNibU52Ym5OMElHMXZkWE5sUlhabGJuUlViMUJ2YVc1MElEMGdLR1VwSUQwK0lDaDdYRzRnSUhnNklHVXVjR0ZuWlZnc1hHNGdJSGs2SUdVdWNHRm5aVmxjYm4wcE8xeHVYRzVqYjI1emRDQjBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDQTlJQ2g3SUdOb1lXNW5aV1JVYjNWamFHVnpJSDBwSUQwK0lDaDdYRzRnSUhnNklHTm9ZVzVuWldSVWIzVmphR1Z6V3pCZExtTnNhV1Z1ZEZnc1hHNGdJSGs2SUdOb1lXNW5aV1JVYjNWamFHVnpXekJkTG1Oc2FXVnVkRmxjYm4wcE8xeHVYRzVqYjI1emRDQm5aWFJPWVhScGRtVkZkbVZ1ZENBOUlDaGxLU0E5UGlCbExtOXlhV2RwYm1Gc1JYWmxiblFnZkh3Z1pTNXVZWFJwZG1WRmRtVnVkQ0I4ZkNCbE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9aU3dnY0hKdmNITXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2JtRjBhWFpsUlhabGJuUWdQU0JuWlhST1lYUnBkbVZGZG1WdWRDaGxLVHRjYmlBZ2NtVjBkWEp1SUNodVlYUnBkbVZGZG1WdWRDNTBiM1ZqYUdWektTQS9YRzRnSUNBZ1kzSmxZWFJsVUc5cGJuUmxjaWgwYjNWamFFVjJaVzUwVkc5UWIybHVkQ2hsS1N3Z2UxeHVJQ0FnSUNBZ2JXOTJaVVYyWlc1ME9pQW5kRzkxWTJodGIzWmxKeXhjYmlBZ0lDQWdJR1YyWlc1MFZHOVFiMmx1ZEhNNklIUnZkV05vUlhabGJuUlViMUJ2YVc1MExGeHVJQ0FnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdJQ0I5S1NBNlhHNGdJQ0FnWTNKbFlYUmxVRzlwYm5SbGNpaHRiM1Z6WlVWMlpXNTBWRzlRYjJsdWRDaGxLU3dnZTF4dUlDQWdJQ0FnYlc5MlpVVjJaVzUwT2lBbmJXOTFjMlZ0YjNabEp5eGNiaUFnSUNBZ0lHVjJaVzUwVkc5UWIybHVkSE02SUcxdmRYTmxSWFpsYm5SVWIxQnZhVzUwTEZ4dUlDQWdJQ0FnTGk0dWNISnZjSE5jYmlBZ0lDQjlLVHRjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BvaW50ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJy4uL2luYy9lYXNpbmcnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgY2xhbXBQcm9ncmVzcyA9ICgwLCBfdHJhbnNmb3JtZXJzLmNsYW1wKSgwLCAxKTtcblxudmFyIE5FWFRfU1RFUFMgPSB7XG4gIGxvb3A6IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgIHJldHVybiB0d2Vlbi5zdGFydCgpO1xuICB9LFxuICB5b3lvOiBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICByZXR1cm4gdHdlZW4ucmV2ZXJzZSgpLnN0YXJ0KCk7XG4gIH0sXG4gIGZsaXA6IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgIHJldHVybiB0d2Vlbi5mbGlwKCkuc3RhcnQoKTtcbiAgfVxufTtcblxudmFyIFR3ZWVuID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFR3ZWVuLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBUd2VlbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHdlZW4pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBUd2Vlbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uO1xuICAgIHZhciBwbGF5RGlyZWN0aW9uID0gX3Byb3BzLnBsYXlEaXJlY3Rpb247XG5cblxuICAgIHRoaXMuZWxhcHNlZCA9IHBsYXlEaXJlY3Rpb24gPT09IDEgPyAwIDogZHVyYXRpb247XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGR1cmF0aW9uID0gX3Byb3BzMi5kdXJhdGlvbjtcbiAgICB2YXIgZWFzZSA9IF9wcm9wczIuZWFzZTtcbiAgICB2YXIgZnJvbSA9IF9wcm9wczIuZnJvbTtcbiAgICB2YXIgdG8gPSBfcHJvcHMyLnRvO1xuICAgIHZhciBwbGF5RGlyZWN0aW9uID0gX3Byb3BzMi5wbGF5RGlyZWN0aW9uO1xuXG5cbiAgICB0aGlzLmVsYXBzZWQgKz0gKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpICogcGxheURpcmVjdGlvbjtcblxuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGZyb20sIHRvLCBlYXNlKGNsYW1wUHJvZ3Jlc3MoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSgwLCBkdXJhdGlvbiwgdGhpcy5lbGFwc2VkKSkpKTtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkdXJhdGlvbiA9IF9wcm9wczMuZHVyYXRpb247XG4gICAgdmFyIHBsYXlEaXJlY3Rpb24gPSBfcHJvcHMzLnBsYXlEaXJlY3Rpb247XG4gICAgdmFyIHlveW8gPSBfcHJvcHMzLnlveW87XG4gICAgdmFyIGxvb3AgPSBfcHJvcHMzLmxvb3A7XG4gICAgdmFyIGZsaXAgPSBfcHJvcHMzLmZsaXA7XG5cbiAgICB2YXIgaXNDb21wbGV0ZSA9IHBsYXlEaXJlY3Rpb24gPT09IDEgPyB0aGlzLmVsYXBzZWQgPj0gZHVyYXRpb24gOiB0aGlzLmVsYXBzZWQgPD0gMDtcblxuICAgIGlmIChpc0NvbXBsZXRlICYmICh5b3lvIHx8IGxvb3AgfHwgZmxpcCkpIHtcbiAgICAgIHZhciBpc1N0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gTkVYVF9TVEVQUykge1xuICAgICAgICB2YXIgbmV4dFN0ZXAgPSBORVhUX1NURVBTW2tleV07XG4gICAgICAgIHZhciBjb3VudFByb3AgPSBrZXkgKyAnQ291bnQnO1xuICAgICAgICB2YXIgc3RlcE1heCA9IHRoaXMuZ2V0UHJvcChrZXkpO1xuICAgICAgICB2YXIgc3RlcENvdW50ID0gdGhpcy5nZXRQcm9wKGNvdW50UHJvcCk7XG5cbiAgICAgICAgaWYgKHN0ZXBNYXggPiBzdGVwQ291bnQpIHtcbiAgICAgICAgICB2YXIgX3NldFByb3BzO1xuXG4gICAgICAgICAgdGhpcy5zZXRQcm9wcygoX3NldFByb3BzID0ge30sIF9zZXRQcm9wc1tjb3VudFByb3BdID0gc3RlcENvdW50ICsgMSwgX3NldFByb3BzKSk7XG4gICAgICAgICAgbmV4dFN0ZXAodGhpcyk7XG4gICAgICAgICAgaXNTdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1N0ZXBUYWtlbikgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0NvbXBsZXRlO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5nZXRFbGFwc2VkID0gZnVuY3Rpb24gZ2V0RWxhcHNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGFwc2VkO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5mbGlwID0gZnVuY3Rpb24gZmxpcCgpIHtcbiAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLnByb3BzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuICAgIHZhciBfcmVmID0gW3RoaXMucHJvcHMudG8sIHRoaXMucHJvcHMuZnJvbV07XG4gICAgdGhpcy5wcm9wcy5mcm9tID0gX3JlZlswXTtcbiAgICB0aGlzLnByb3BzLnRvID0gX3JlZlsxXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICB0aGlzLnByb3BzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuO1xufShfMi5kZWZhdWx0KTtcblxuVHdlZW4uZGVmYXVsdFByb3BzID0ge1xuICBkdXJhdGlvbjogMzAwLFxuICBlYXNlOiBfZWFzaW5nLmVhc2VPdXQsXG4gIGZyb206IDAsXG4gIHRvOiAxLFxuICBmbGlwOiAwLFxuICBmbGlwQ291bnQ6IDAsXG4gIHlveW86IDAsXG4gIHlveW9Db3VudDogMCxcbiAgbG9vcDogMCxcbiAgbG9vcENvdW50OiAwLFxuICBwbGF5RGlyZWN0aW9uOiAxXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBwcm9wcyA9IGFyZ3NbMF07XG5cbiAgICByZXR1cm4gbmV3IFR3ZWVuKHByb3BzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZnJvbSA9IGFyZ3NbMF07XG4gICAgdmFyIHRvID0gYXJnc1sxXTtcbiAgICB2YXIgZHVyYXRpb24gPSBhcmdzWzJdO1xuICAgIHZhciBlYXNlID0gYXJnc1szXTtcbiAgICB2YXIgX3Byb3BzNCA9IGFyZ3NbNF07XG5cbiAgICByZXR1cm4gbmV3IFR3ZWVuKF9leHRlbmRzKHsgZnJvbTogZnJvbSwgdG86IHRvLCBkdXJhdGlvbjogZHVyYXRpb24sIGVhc2U6IGVhc2UgfSwgX3Byb3BzNCkpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1IzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenM3TzBGQlEwRTdPMEZCUTBFN08wRkJRMEU3TzBGQlEwRTdPenM3T3pzN096czdRVUZGUVN4SlFVRk5MR2RDUVVGblFpeDVRa0ZCVFN4RFFVRk9MRVZCUVZNc1EwRkJWQ3hEUVVGMFFqczdRVUZGUVN4SlFVRk5MR0ZCUVdFN1FVRkRha0lzVVVGQlRTeFZRVUZETEV0QlFVUTdRVUZCUVN4WFFVRlhMRTFCUVUwc1MwRkJUaXhGUVVGWU8wRkJRVUVzUjBGRVZ6dEJRVVZxUWl4UlFVRk5MRlZCUVVNc1MwRkJSRHRCUVVGQkxGZEJRVmNzVFVGQlRTeFBRVUZPTEVkQlFXZENMRXRCUVdoQ0xFVkJRVmc3UVVGQlFTeEhRVVpYTzBGQlIycENMRkZCUVUwc1ZVRkJReXhMUVVGRU8wRkJRVUVzVjBGQlZ5eE5RVUZOTEVsQlFVNHNSMEZCWVN4TFFVRmlMRVZCUVZnN1FVRkJRVHRCUVVoWExFTkJRVzVDT3p0SlFVMU5MRXM3T3pzN096czdPenRyUWtGbFNpeFBMSE5DUVVGVk8wRkJRVUVzYVVKQlF6UkNMRXRCUVVzc1MwRkVha003UVVGQlFTeFJRVU5CTEZGQlJFRXNWVUZEUVN4UlFVUkJPMEZCUVVFc1VVRkRWU3hoUVVSV0xGVkJRMVVzWVVGRVZqczdPMEZCUjFJc1UwRkJTeXhQUVVGTUxFZEJRV2RDTEd0Q1FVRnJRaXhEUVVGdVFpeEhRVUYzUWl4RFFVRjRRaXhIUVVFMFFpeFJRVUV6UXp0QlFVTkVMRWM3TzJ0Q1FVVkVMRTBzY1VKQlFWTTdRVUZCUVN4clFrRkROa01zUzBGQlN5eExRVVJzUkR0QlFVRkJMRkZCUTBNc1VVRkVSQ3hYUVVORExGRkJSRVE3UVVGQlFTeFJRVU5YTEVsQlJGZ3NWMEZEVnl4SlFVUllPMEZCUVVFc1VVRkRhVUlzU1VGRWFrSXNWMEZEYVVJc1NVRkVha0k3UVVGQlFTeFJRVU4xUWl4RlFVUjJRaXhYUVVOMVFpeEZRVVIyUWp0QlFVRkJMRkZCUXpKQ0xHRkJSRE5DTEZkQlF6SkNMR0ZCUkROQ096czdRVUZIVUN4VFFVRkxMRTlCUVV3c1NVRkJaMElzZFVOQlFYVkNMR0ZCUVhaRE96dEJRVVZCTEZkQlFVOHNaME5CUVhGQ0xFbEJRWEpDTEVWQlFUSkNMRVZCUVROQ0xFVkJRU3RDTEV0QlFVc3NZMEZCWXl4blEwRkJjVUlzUTBGQmNrSXNSVUZCZDBJc1VVRkJlRUlzUlVGQmEwTXNTMEZCU3l4UFFVRjJReXhEUVVGa0xFTkJRVXdzUTBGQkwwSXNRMEZCVUR0QlFVTkVMRWM3TzJ0Q1FVVkVMR2RDTEN0Q1FVRnRRanRCUVVGQkxHdENRVU54UXl4TFFVRkxMRXRCUkRGRE8wRkJRVUVzVVVGRFZDeFJRVVJUTEZkQlExUXNVVUZFVXp0QlFVRkJMRkZCUTBNc1lVRkVSQ3hYUVVORExHRkJSRVE3UVVGQlFTeFJRVU5uUWl4SlFVUm9RaXhYUVVOblFpeEpRVVJvUWp0QlFVRkJMRkZCUTNOQ0xFbEJSSFJDTEZkQlEzTkNMRWxCUkhSQ08wRkJRVUVzVVVGRE5FSXNTVUZFTlVJc1YwRkRORUlzU1VGRU5VSTdPMEZCUldwQ0xGRkJRVWtzWVVGQll5eHJRa0ZCYTBJc1EwRkJia0lzUjBGQmVVSXNTMEZCU3l4UFFVRk1MRWxCUVdkQ0xGRkJRWHBETEVkQlFYTkVMRXRCUVVzc1QwRkJUQ3hKUVVGblFpeERRVUYyUmpzN1FVRkZRU3hSUVVGSkxHVkJRV1VzVVVGQlVTeEpRVUZTTEVsQlFXZENMRWxCUVM5Q0xFTkJRVW9zUlVGQk1FTTdRVUZEZUVNc1ZVRkJTU3hqUVVGakxFdEJRV3hDT3p0QlFVVkJMRmRCUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEZWQlFXaENMRVZCUVRSQ08wRkJRekZDTEZsQlFVMHNWMEZCVnl4WFFVRlhMRWRCUVZnc1EwRkJha0k3UVVGRFFTeFpRVUZOTEZsQlFWa3NUVUZCVFN4UFFVRjRRanRCUVVOQkxGbEJRVTBzVlVGQlZTeExRVUZMTEU5QlFVd3NRMEZCWVN4SFFVRmlMRU5CUVdoQ08wRkJRMEVzV1VGQlRTeFpRVUZaTEV0QlFVc3NUMEZCVEN4RFFVRmhMRk5CUVdJc1EwRkJiRUk3TzBGQlJVRXNXVUZCU1N4VlFVRlZMRk5CUVdRc1JVRkJlVUk3UVVGQlFUczdRVUZEZGtJc1pVRkJTeXhSUVVGTUxEUkNRVU5ITEZOQlJFZ3NTVUZEWlN4WlFVRlpMRU5CUkROQ08wRkJSMEVzYlVKQlFWTXNTVUZCVkR0QlFVTkJMSGRDUVVGakxFbEJRV1E3UVVGRFJEdEJRVU5HT3p0QlFVVkVMRlZCUVVrc1YwRkJTaXhGUVVGcFFpeGhRVUZoTEV0QlFXSTdRVUZEYkVJN08wRkJSVVFzVjBGQlR5eFZRVUZRTzBGQlEwUXNSenM3YTBKQlJVUXNWU3g1UWtGQllUdEJRVU5ZTEZkQlFVOHNTMEZCU3l4UFFVRmFPMEZCUTBRc1J6czdhMEpCUlVRc1NTeHRRa0ZCVHp0QlFVTk1MRk5CUVVzc1QwRkJUQ3hIUVVGbExFdEJRVXNzUzBGQlRDeERRVUZYTEZGQlFWZ3NSMEZCYzBJc1MwRkJTeXhQUVVFeFF6dEJRVVJMTEdWQlJUaENMRU5CUVVNc1MwRkJTeXhMUVVGTUxFTkJRVmNzUlVGQldpeEZRVUZuUWl4TFFVRkxMRXRCUVV3c1EwRkJWeXhKUVVFelFpeERRVVk1UWp0QlFVVktMRk5CUVVzc1MwRkJUQ3hEUVVGWExFbEJSbEE3UVVGRllTeFRRVUZMTEV0QlFVd3NRMEZCVnl4RlFVWjRRanM3UVVGSFRDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHJRa0ZGUkN4UExITkNRVUZWTzBGQlExSXNVMEZCU3l4TFFVRk1MRU5CUVZjc1lVRkJXQ3hKUVVFMFFpeERRVUZETEVOQlFUZENPMEZCUTBFc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN096czdRVUYwUlVjc1N5eERRVU5ITEZrc1IwRkJaVHRCUVVOd1FpeFpRVUZWTEVkQlJGVTdRVUZGY0VJc2RVSkJSbTlDTzBGQlIzQkNMRkZCUVUwc1EwRklZenRCUVVsd1FpeE5RVUZKTEVOQlNtZENPMEZCUzNCQ0xGRkJRVTBzUTBGTVl6dEJRVTF3UWl4aFFVRlhMRU5CVGxNN1FVRlBjRUlzVVVGQlRTeERRVkJqTzBGQlVYQkNMR0ZCUVZjc1EwRlNVenRCUVZOd1FpeFJRVUZOTEVOQlZHTTdRVUZWY0VJc1lVRkJWeXhEUVZaVE8wRkJWM0JDTEdsQ1FVRmxPMEZCV0Vzc1F6czdhMEpCZDBWVUxGbEJRV0U3UVVGQlFTeHZRMEZCVkN4SlFVRlRPMEZCUVZRc1VVRkJVenRCUVVGQk96dEJRVU14UWl4TlFVRkpMRXRCUVVzc1RVRkJUQ3hMUVVGblFpeERRVUZ3UWl4RlFVRjFRanRCUVVGQkxGRkJRMklzUzBGRVlTeEhRVU5JTEVsQlJFYzdPMEZCUlhKQ0xGZEJRVThzU1VGQlNTeExRVUZLTEVOQlFWVXNTMEZCVml4RFFVRlFPMEZCUTBRc1IwRklSQ3hOUVVkUE8wRkJRVUVzVVVGRFJ5eEpRVVJJTEVkQlEzVkRMRWxCUkhaRE8wRkJRVUVzVVVGRFV5eEZRVVJVTEVkQlEzVkRMRWxCUkhaRE8wRkJRVUVzVVVGRFlTeFJRVVJpTEVkQlEzVkRMRWxCUkhaRE8wRkJRVUVzVVVGRGRVSXNTVUZFZGtJc1IwRkRkVU1zU1VGRWRrTTdRVUZCUVN4UlFVTTJRaXhQUVVRM1FpeEhRVU4xUXl4SlFVUjJRenM3UVVGRlRDeFhRVUZQTEVsQlFVa3NTMEZCU2l4WlFVRlpMRlZCUVZvc1JVRkJhMElzVFVGQmJFSXNSVUZCYzBJc2EwSkJRWFJDTEVWQlFXZERMRlZCUVdoRExFbEJRWGxETEU5QlFYcERMRVZCUVZBN1FVRkRSRHRCUVVOR0xFTWlMQ0ptYVd4bElqb2lkSGRsWlc0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYm1sdGNHOXlkQ0I3SUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVwYlhCdmNuUWdleUJqYkdGdGNDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MGNtRnVjMlp2Y20xbGNuTW5PMXh1YVcxd2IzSjBJSHNnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVc0lHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dWFXMXdiM0owSUhzZ1pXRnpaVTkxZENCOUlHWnliMjBnSnk0dUwybHVZeTlsWVhOcGJtY25PMXh1WEc1amIyNXpkQ0JqYkdGdGNGQnliMmR5WlhOeklEMGdZMnhoYlhBb01Dd2dNU2s3WEc1Y2JtTnZibk4wSUU1RldGUmZVMVJGVUZNZ1BTQjdYRzRnSUd4dmIzQTZJQ2gwZDJWbGJpa2dQVDRnZEhkbFpXNHVjM1JoY25Rb0tTeGNiaUFnZVc5NWJ6b2dLSFIzWldWdUtTQTlQaUIwZDJWbGJpNXlaWFpsY25ObEtDa3VjM1JoY25Rb0tTeGNiaUFnWm14cGNEb2dLSFIzWldWdUtTQTlQaUIwZDJWbGJpNW1iR2x3S0NrdWMzUmhjblFvS1Z4dWZUdGNibHh1WTJ4aGMzTWdWSGRsWlc0Z1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQnpkR0YwYVdNZ1pHVm1ZWFZzZEZCeWIzQnpJRDBnZTF4dUlDQWdJR1IxY21GMGFXOXVPaUF6TURBc1hHNGdJQ0FnWldGelpUb2daV0Z6WlU5MWRDeGNiaUFnSUNCbWNtOXRPaUF3TEZ4dUlDQWdJSFJ2T2lBeExGeHVJQ0FnSUdac2FYQTZJREFzWEc0Z0lDQWdabXhwY0VOdmRXNTBPaUF3TEZ4dUlDQWdJSGx2ZVc4NklEQXNYRzRnSUNBZ2VXOTViME52ZFc1ME9pQXdMRnh1SUNBZ0lHeHZiM0E2SURBc1hHNGdJQ0FnYkc5dmNFTnZkVzUwT2lBd0xGeHVJQ0FnSUhCc1lYbEVhWEpsWTNScGIyNDZJREZjYmlBZ2ZUdGNibHh1SUNCdmJsTjBZWEowS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWkhWeVlYUnBiMjRzSUhCc1lYbEVhWEpsWTNScGIyNGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCMGFHbHpMbVZzWVhCelpXUWdQU0FvY0d4aGVVUnBjbVZqZEdsdmJpQTlQVDBnTVNrZ1B5QXdJRG9nWkhWeVlYUnBiMjQ3WEc0Z0lIMWNibHh1SUNCMWNHUmhkR1VvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJrZFhKaGRHbHZiaXdnWldGelpTd2dabkp2YlN3Z2RHOHNJSEJzWVhsRWFYSmxZM1JwYjI0Z2ZTQTlJSFJvYVhNdWNISnZjSE03WEc1Y2JpQWdJQ0IwYUdsekxtVnNZWEJ6WldRZ0t6MGdkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxLQ2tnS2lCd2JHRjVSR2x5WldOMGFXOXVPMXh1WEc0Z0lDQWdjbVYwZFhKdUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLR1p5YjIwc0lIUnZMQ0JsWVhObEtHTnNZVzF3VUhKdlozSmxjM01vWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb01Dd2daSFZ5WVhScGIyNHNJSFJvYVhNdVpXeGhjSE5sWkNrcEtTazdYRzRnSUgxY2JseHVJQ0JwYzBGamRHbHZia052YlhCc1pYUmxLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2daSFZ5WVhScGIyNHNJSEJzWVhsRWFYSmxZM1JwYjI0c0lIbHZlVzhzSUd4dmIzQXNJR1pzYVhBZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdiR1YwSUdselEyOXRjR3hsZEdVZ1BTQW9jR3hoZVVScGNtVmpkR2x2YmlBOVBUMGdNU2tnUHlBb2RHaHBjeTVsYkdGd2MyVmtJRDQ5SUdSMWNtRjBhVzl1S1NBNklDaDBhR2x6TG1Wc1lYQnpaV1FnUEQwZ01DazdYRzVjYmlBZ0lDQnBaaUFvYVhORGIyMXdiR1YwWlNBbUppQW9lVzk1YnlCOGZDQnNiMjl3SUh4OElHWnNhWEFwS1NCN1hHNGdJQ0FnSUNCc1pYUWdhWE5UZEdWd1ZHRnJaVzRnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJRTVGV0ZSZlUxUkZVRk1wSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYm1WNGRGTjBaWEFnUFNCT1JWaFVYMU5VUlZCVFcydGxlVjA3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR052ZFc1MFVISnZjQ0E5SUd0bGVTQXJJQ2REYjNWdWRDYzdYRzRnSUNBZ0lDQWdJR052Ym5OMElITjBaWEJOWVhnZ1BTQjBhR2x6TG1kbGRGQnliM0FvYTJWNUtUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2MzUmxjRU52ZFc1MElEMGdkR2hwY3k1blpYUlFjbTl3S0dOdmRXNTBVSEp2Y0NrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hOMFpYQk5ZWGdnUGlCemRHVndRMjkxYm5RcElIdGNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxuTmxkRkJ5YjNCektIdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ0amIzVnVkRkJ5YjNCZE9pQnpkR1Z3UTI5MWJuUWdLeUF4WEc0Z0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJQ0FnYm1WNGRGTjBaWEFvZEdocGN5azdYRzRnSUNBZ0lDQWdJQ0FnYVhOVGRHVndWR0ZyWlc0Z1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHbG1JQ2hwYzFOMFpYQlVZV3RsYmlrZ2FYTkRiMjF3YkdWMFpTQTlJR1poYkhObE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJwYzBOdmJYQnNaWFJsTzF4dUlDQjlYRzVjYmlBZ1oyVjBSV3hoY0hObFpDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVsYkdGd2MyVmtPMXh1SUNCOVhHNWNiaUFnWm14cGNDZ3BJSHRjYmlBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNCMGFHbHpMbkJ5YjNCekxtUjFjbUYwYVc5dUlDMGdkR2hwY3k1bGJHRndjMlZrTzF4dUlDQWdJRnQwYUdsekxuQnliM0J6TG1aeWIyMHNJSFJvYVhNdWNISnZjSE11ZEc5ZElEMGdXM1JvYVhNdWNISnZjSE11ZEc4c0lIUm9hWE11Y0hKdmNITXVabkp2YlYwN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnlaWFpsY25ObEtDa2dlMXh1SUNBZ0lIUm9hWE11Y0hKdmNITXVjR3hoZVVScGNtVmpkR2x2YmlBcVBTQXRNVHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvTGk0dVlYSm5jeWtnUFQ0Z2UxeHVJQ0JwWmlBb1lYSm5jeTVzWlc1bmRHZ2dQVDA5SURFcElIdGNiaUFnSUNCamIyNXpkQ0JiSUhCeWIzQnpJRjBnUFNCaGNtZHpPMXh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dWSGRsWlc0b2NISnZjSE1wTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUdOdmJuTjBJRnNnWm5KdmJTd2dkRzhzSUdSMWNtRjBhVzl1TENCbFlYTmxMQ0J3Y205d2N5QmRJRDBnWVhKbmN6dGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lGUjNaV1Z1S0hzZ1puSnZiU3dnZEc4c0lHUjFjbUYwYVc5dUxDQmxZWE5sTENBdUxpNXdjbTl3Y3lCOUtUdGNiaUFnZlZ4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY2hhaW4gPSByZXF1aXJlKCcuL2NoYWluJyk7XG5cbnZhciBfY2hhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hhaW4pO1xuXG52YXIgX3BhcmFsbGVsID0gcmVxdWlyZSgnLi9wYXJhbGxlbCcpO1xuXG52YXIgX3BhcmFsbGVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcmFsbGVsKTtcblxudmFyIF9kZWxheSA9IHJlcXVpcmUoJy4vZGVsYXknKTtcblxudmFyIF9kZWxheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWxheSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHBhcmFsbGVsIEFjdGlvbiBjb21wb3NlZCBvZiBjaGFpbmVkXG4gKiBkZWxheSBhbmQgYWN0aW9ucy4gSW50ZXJ2YWwgY2FuIGJlIGVpdGhlciBhIG51bWJlclxuICogdG8gbXVsdGlwbHkgYnkgYGlgIG9yIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHByb3ZpZGVkIGBpYFxuICpcbiAqIFN0cmFpZ2h0IGNyaWJiZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL2Jsb2IvMjRjNzJmNTEzZTQ4ZjBiZGM0MDgyMGI0MzI2MjMyOGZlMmMzMDFkNC9MaWJyYXJpZXMvQW5pbWF0ZWQvc3JjL0FuaW1hdGVkSW1wbGVtZW50YXRpb24uanMjTDIwMzFcbiAqIF4gVGhpcyBmdW5jdGlvbiBzb2xkIGEgcHJldmlvdXNseS1jb25mbGljdGVkIG1lIG9uIHRoZSBtZXJpdCBvZiBtb3ZpbmcgZnJvbVxuICogalF1ZXJ5LXN0eWxlIG11bHRpLXByb3BlcnR5IGFuaW1hdGlvbnMgdG8gc2luZ2xlLXByb3BlcnR5LlxuICogQHBhcmFtICB7YXJyYXl9IGFjdGlvbnNcbiAqIEBwYXJhbSAge2Z1bmN0aW9uIHwgbnVtYmVyfSBpbnRlcnZhbFxuICogQHJldHVybiB7QWN0aW9ufVxuICovXG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhY3Rpb25zLCBpbnRlcnZhbCwgb25Db21wbGV0ZSkge1xuICB2YXIgaW50ZXJ2YWxJc0Z1bmN0aW9uID0gKDAsIF91dGlscy5pc0Z1bmMpKGludGVydmFsKTtcblxuICByZXR1cm4gKDAsIF9wYXJhbGxlbDIuZGVmYXVsdCkoYWN0aW9ucy5tYXAoZnVuY3Rpb24gKGFjdGlvbiwgaSkge1xuICAgIHZhciB0aW1lVG9EZWxheSA9IGludGVydmFsSXNGdW5jdGlvbiA/IGludGVydmFsKGkpIDogaSAqIGludGVydmFsO1xuICAgIHJldHVybiAoMCwgX2NoYWluMi5kZWZhdWx0KShbKDAsIF9kZWxheTIuZGVmYXVsdCkodGltZVRvRGVsYXkpLCBhY3Rpb25dKTtcbiAgfSksIHsgb25Db21wbGV0ZTogb25Db21wbGV0ZSB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzTjBZV2RuWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdPenM3T3pzN096czdPenRyUWtGalpTeFZRVUZETEU5QlFVUXNSVUZCVlN4UlFVRldMRVZCUVc5Q0xGVkJRWEJDTEVWQlFXMURPMEZCUTJoRUxFMUJRVTBzY1VKQlFYRkNMRzFDUVVGUExGRkJRVkFzUTBGQk0wSTdPMEZCUlVFc1UwRkJUeXgzUWtGQlV5eFJRVUZSTEVkQlFWSXNRMEZCV1N4VlFVRkRMRTFCUVVRc1JVRkJVeXhEUVVGVUxFVkJRV1U3UVVGRGVrTXNVVUZCVFN4alFVRmxMR3RDUVVGRUxFZEJRWFZDTEZOQlFWTXNRMEZCVkN4RFFVRjJRaXhIUVVGeFF5eEpRVUZKTEZGQlFUZEVPMEZCUTBFc1YwRkJUeXh4UWtGQlRTeERRVU5ZTEhGQ1FVRk5MRmRCUVU0c1EwRkVWeXhGUVVWWUxFMUJSbGNzUTBGQlRpeERRVUZRTzBGQlNVUXNSMEZPWlN4RFFVRlVMRVZCVFVnc1JVRkJSU3h6UWtGQlJpeEZRVTVITEVOQlFWQTdRVUZQUkN4RElpd2labWxzWlNJNkluTjBZV2RuWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnWTJoaGFXNGdabkp2YlNBbkxpOWphR0ZwYmljN1hHNXBiWEJ2Y25RZ2NHRnlZV3hzWld3Z1puSnZiU0FuTGk5d1lYSmhiR3hsYkNjN1hHNXBiWEJ2Y25RZ1pHVnNZWGtnWm5KdmJTQW5MaTlrWld4aGVTYzdYRzVwYlhCdmNuUWdleUJwYzBaMWJtTWdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNHZLaXBjYmlBcUlFTnlaV0YwWlhNZ1lTQnVaWGNnY0dGeVlXeHNaV3dnUVdOMGFXOXVJR052YlhCdmMyVmtJRzltSUdOb1lXbHVaV1JjYmlBcUlHUmxiR0Y1SUdGdVpDQmhZM1JwYjI1ekxpQkpiblJsY25aaGJDQmpZVzRnWW1VZ1pXbDBhR1Z5SUdFZ2JuVnRZbVZ5WEc0Z0tpQjBieUJ0ZFd4MGFYQnNlU0JpZVNCZ2FXQWdiM0lnWVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z1ltVWdjSEp2ZG1sa1pXUWdZR2xnWEc0Z0tseHVJQ29nVTNSeVlXbG5hSFFnWTNKcFltSmxaQ0JtY205dElHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW1ZV05sWW05dmF5OXlaV0ZqZEMxdVlYUnBkbVV2WW14dllpOHlOR00zTW1ZMU1UTmxORGhtTUdKa1l6UXdPREl3WWpRek1qWXlNekk0Wm1VeVl6TXdNV1EwTDB4cFluSmhjbWxsY3k5QmJtbHRZWFJsWkM5emNtTXZRVzVwYldGMFpXUkpiWEJzWlcxbGJuUmhkR2x2Ymk1cWN5Tk1NakF6TVZ4dUlDb2dYaUJVYUdseklHWjFibU4wYVc5dUlITnZiR1FnWVNCd2NtVjJhVzkxYzJ4NUxXTnZibVpzYVdOMFpXUWdiV1VnYjI0Z2RHaGxJRzFsY21sMElHOW1JRzF2ZG1sdVp5Qm1jbTl0WEc0Z0tpQnFVWFZsY25rdGMzUjViR1VnYlhWc2RHa3RjSEp2Y0dWeWRIa2dZVzVwYldGMGFXOXVjeUIwYnlCemFXNW5iR1V0Y0hKdmNHVnlkSGt1WEc0Z0tpQkFjR0Z5WVcwZ0lIdGhjbkpoZVgwZ1lXTjBhVzl1YzF4dUlDb2dRSEJoY21GdElDQjdablZ1WTNScGIyNGdmQ0J1ZFcxaVpYSjlJR2x1ZEdWeWRtRnNYRzRnS2lCQWNtVjBkWEp1SUh0QlkzUnBiMjU5WEc0Z0tpOWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaGhZM1JwYjI1ekxDQnBiblJsY25aaGJDd2diMjVEYjIxd2JHVjBaU2tnUFQ0Z2UxeHVJQ0JqYjI1emRDQnBiblJsY25aaGJFbHpSblZ1WTNScGIyNGdQU0JwYzBaMWJtTW9hVzUwWlhKMllXd3BPMXh1WEc0Z0lISmxkSFZ5YmlCd1lYSmhiR3hsYkNoaFkzUnBiMjV6TG0xaGNDZ29ZV04wYVc5dUxDQnBLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdkR2x0WlZSdlJHVnNZWGtnUFNBb2FXNTBaWEoyWVd4SmMwWjFibU4wYVc5dUtTQS9JR2x1ZEdWeWRtRnNLR2twSURvZ2FTQXFJR2x1ZEdWeWRtRnNPMXh1SUNBZ0lISmxkSFZ5YmlCamFHRnBiaWhiWEc0Z0lDQWdJQ0JrWld4aGVTaDBhVzFsVkc5RVpXeGhlU2tzWEc0Z0lDQWdJQ0JoWTNScGIyNWNiaUFnSUNCZEtUdGNiaUFnZlNrc0lIc2diMjVEYjIxd2JHVjBaU0I5S1R0Y2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9zdGFnZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBWYWx1ZSA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhWYWx1ZSwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVmFsdWUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZhbHVlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVmFsdWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgdGhpcy50b1VwZGF0ZSA9IHY7XG4gICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICB9O1xuXG4gIFZhbHVlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9VcGRhdGU7XG4gIH07XG5cbiAgcmV0dXJuIFZhbHVlO1xufShfMi5kZWZhdWx0KTtcblxuVmFsdWUuZGVmYXVsdFByb3BzID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY3VycmVudCwgb25VcGRhdGUpIHtcbiAgcmV0dXJuIG5ldyBWYWx1ZSh7IGN1cnJlbnQ6IGN1cnJlbnQsIG9uVXBkYXRlOiBvblVwZGF0ZSB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzWmhiSFZsTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096dEJRVU5CT3pzN096czdPenM3TzBsQlJVMHNTenM3T3pzN096czdPMnRDUVV0S0xFY3NaMEpCUVVrc1F5eEZRVUZITzBGQlEwd3NVMEZCU3l4UlFVRk1MRWRCUVdkQ0xFTkJRV2hDTzBGQlEwRXNhME5CUVdNc1MwRkJTeXhsUVVGdVFqdEJRVU5FTEVjN08ydENRVVZFTEUwc2NVSkJRVk03UVVGRFVDeFhRVUZQTEV0QlFVc3NVVUZCV2p0QlFVTkVMRWM3T3pzN08wRkJXa2NzU3l4RFFVTkhMRmtzUjBGQlpUdEJRVU53UWl4WFFVRlRPMEZCUkZjc1F6czdhMEpCWTFRc1ZVRkJReXhQUVVGRUxFVkJRVlVzVVVGQlZqdEJRVUZCTEZOQlFYVkNMRWxCUVVrc1MwRkJTaXhEUVVGVkxFVkJRVVVzWjBKQlFVWXNSVUZCVnl4clFrRkJXQ3hGUVVGV0xFTkJRWFpDTzBGQlFVRXNReUlzSW1acGJHVWlPaUoyWVd4MVpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaThuTzF4dWFXMXdiM0owSUhzZ2IyNUdjbUZ0WlZWd1pHRjBaU0I5SUdaeWIyMGdKeTR1TDJaeVlXMWxjM2x1WXljN1hHNWNibU5zWVhOeklGWmhiSFZsSUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ2MzUmhkR2xqSUdSbFptRjFiSFJRY205d2N5QTlJSHRjYmlBZ0lDQndZWE56YVhabE9pQjBjblZsWEc0Z0lIMDdYRzVjYmlBZ2MyVjBLSFlwSUh0Y2JpQWdJQ0IwYUdsekxuUnZWWEJrWVhSbElEMGdkanRjYmlBZ0lDQnZia1p5WVcxbFZYQmtZWFJsS0hSb2FYTXVjMk5vWldSMWJHVmtWWEJrWVhSbEtUdGNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTUwYjFWd1pHRjBaVHRjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWTNWeWNtVnVkQ3dnYjI1VmNHUmhkR1VwSUQwK0lHNWxkeUJXWVd4MVpTaDdJR04xY25KbGJuUXNJRzl1VlhCa1lYUmxJSDBwTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdmFsdWUuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVJlbmRlciA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSB1bmRlZmluZWQ7XG5cbnZhciBfb25OZXh0RnJhbWUgPSByZXF1aXJlKCcuL29uLW5leHQtZnJhbWUnKTtcblxudmFyIF9vbk5leHRGcmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vbk5leHRGcmFtZSk7XG5cbnZhciBfY3JlYXRlUmVuZGVyU3RlcCA9IHJlcXVpcmUoJy4vY3JlYXRlLXJlbmRlci1zdGVwJyk7XG5cbnZhciBfY3JlYXRlUmVuZGVyU3RlcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSZW5kZXJTdGVwKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuXG4vKipcbiAqIE1heGltdW0gcGVybWl0dGVkIG1zIHNpbmNlIGxhc3QgZnJhbWVcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBNQVhfRUxBUFNFRCA9IDIwO1xuXG4vKipcbiAqIEN1cnJlbnQgZnJhbWVzdGFtcFxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIGN1cnJlbnRGcmFtZXN0YW1wID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcblxudmFyIGVsYXBzZWQgPSAwO1xuXG4vKipcbiAqIEZhY3RvciB0byBtdWx0aXBseSBgZWxhcHNlZGAgYnkgLSBcbiAqIDAuNSB3b3VsZCBiZSBzbG93IG1vdGlvbiwgMiB3b3VsZCBiZSBmYXN0XG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgZGlsYXRpb24gPSAxO1xuXG5mdW5jdGlvbiBzdGFydFJlbmRlckxvb3AoKSB7XG4gIGlmICghd2lsbFJlbmRlck5leHRGcmFtZSkge1xuICAgIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSB0cnVlO1xuICAgICgwLCBfb25OZXh0RnJhbWUyLmRlZmF1bHQpKHByb2Nlc3NGcmFtZSk7XG4gIH1cbn1cblxudmFyIGZyYW1lU3RhcnQgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVVcGRhdGUgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVSZW5kZXIgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG52YXIgZnJhbWVFbmQgPSAoMCwgX2NyZWF0ZVJlbmRlclN0ZXAyLmRlZmF1bHQpKHN0YXJ0UmVuZGVyTG9vcCk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NGcmFtZShmcmFtZXN0YW1wKSB7XG4gIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcbiAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50RnJhbWVzdGFtcCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICBjdXJyZW50RnJhbWVzdGFtcCA9IGZyYW1lc3RhbXA7XG5cbiAgZnJhbWVTdGFydC5wcm9jZXNzKCk7XG4gIGZyYW1lVXBkYXRlLnByb2Nlc3MoKTtcbiAgZnJhbWVSZW5kZXIucHJvY2VzcygpO1xuICBmcmFtZUVuZC5wcm9jZXNzKCk7XG59XG5cbnZhciBvbkZyYW1lU3RhcnQgPSBleHBvcnRzLm9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuc2NoZWR1bGU7XG52YXIgb25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLnNjaGVkdWxlO1xudmFyIG9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5zY2hlZHVsZTtcbnZhciBvbkZyYW1lRW5kID0gZXhwb3J0cy5vbkZyYW1lRW5kID0gZnJhbWVFbmQuc2NoZWR1bGU7XG52YXIgY2FuY2VsT25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lVXBkYXRlID0gZnJhbWVVcGRhdGUuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZUVuZCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZUVuZCA9IGZyYW1lRW5kLmNhbmNlbDtcblxudmFyIHRpbWVTaW5jZUxhc3RGcmFtZSA9IGV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZWxhcHNlZDtcbn07XG52YXIgY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy5jdXJyZW50RnJhbWVUaW1lc3RhbXAgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjdXJyZW50RnJhbWVzdGFtcDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZGUVN4SlFVRkpMSE5DUVVGelFpeExRVUV4UWpzN096czdPMEZCVFVFc1NVRkJUU3hqUVVGakxFVkJRWEJDT3pzN096czdRVUZOUVN4SlFVRkpMRzlDUVVGdlFpeDVRa0ZCZUVJN08wRkJSVUVzU1VGQlNTeFZRVUZWTEVOQlFXUTdPenM3T3pzN1FVRlBRU3hKUVVGSkxGZEJRVmNzUTBGQlpqczdRVUZGUVN4VFFVRlRMR1ZCUVZRc1IwRkJNa0k3UVVGRGVrSXNUVUZCU1N4RFFVRkRMRzFDUVVGTUxFVkJRVEJDTzBGQlEzaENMREJDUVVGelFpeEpRVUYwUWp0QlFVTkJMQ3RDUVVGWkxGbEJRVm83UVVGRFJEdEJRVU5HT3p0QlFVVkVMRWxCUVUwc1lVRkJZU3huUTBGQmFVSXNaVUZCYWtJc1EwRkJia0k3UVVGRFFTeEpRVUZOTEdOQlFXTXNaME5CUVdsQ0xHVkJRV3BDTEVOQlFYQkNPMEZCUTBFc1NVRkJUU3hqUVVGakxHZERRVUZwUWl4bFFVRnFRaXhEUVVGd1FqdEJRVU5CTEVsQlFVMHNWMEZCVnl4blEwRkJhVUlzWlVGQmFrSXNRMEZCYWtJN08wRkJSVUVzVTBGQlV5eFpRVUZVTEVOQlFYTkNMRlZCUVhSQ0xFVkJRV3RETzBGQlEyaERMSGRDUVVGelFpeExRVUYwUWp0QlFVTkJMRmxCUVZVc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlN5eEhRVUZNTEVOQlFWTXNZVUZCWVN4cFFrRkJkRUlzUlVGQmVVTXNWMEZCZWtNc1EwRkJWQ3hGUVVGblJTeERRVUZvUlN4SlFVRnhSU3hSUVVFdlJUdEJRVU5CTEhOQ1FVRnZRaXhWUVVGd1FqczdRVUZGUVN4aFFVRlhMRTlCUVZnN1FVRkRRU3hqUVVGWkxFOUJRVm83UVVGRFFTeGpRVUZaTEU5QlFWbzdRVUZEUVN4WFFVRlRMRTlCUVZRN1FVRkRSRHM3UVVGRlRTeEpRVUZOTEhORFFVRmxMRmRCUVZjc1VVRkJhRU03UVVGRFFTeEpRVUZOTEhkRFFVRm5RaXhaUVVGWkxGRkJRV3hETzBGQlEwRXNTVUZCVFN4M1EwRkJaMElzV1VGQldTeFJRVUZzUXp0QlFVTkJMRWxCUVUwc2EwTkJRV0VzVTBGQlV5eFJRVUUxUWp0QlFVTkJMRWxCUVUwc2EwUkJRWEZDTEZkQlFWY3NUVUZCZEVNN1FVRkRRU3hKUVVGTkxHOUVRVUZ6UWl4WlFVRlpMRTFCUVhoRE8wRkJRMEVzU1VGQlRTeHZSRUZCYzBJc1dVRkJXU3hOUVVGNFF6dEJRVU5CTEVsQlFVMHNPRU5CUVcxQ0xGTkJRVk1zVFVGQmJFTTdPMEZCUlVFc1NVRkJUU3hyUkVGQmNVSTdRVUZCUVN4VFFVRk5MRTlCUVU0N1FVRkJRU3hEUVVFelFqdEJRVU5CTEVsQlFVMHNkMFJCUVhkQ08wRkJRVUVzVTBGQlRTeHBRa0ZCVGp0QlFVRkJMRU5CUVRsQ0lpd2labWxzWlNJNkltbHVaR1Y0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRzl1VG1WNGRFWnlZVzFsSUdaeWIyMGdKeTR2YjI0dGJtVjRkQzFtY21GdFpTYzdYRzVwYlhCdmNuUWdZM0psWVhSbFVtVnVaR1Z5VTNSbGNDQm1jbTl0SUNjdUwyTnlaV0YwWlMxeVpXNWtaWEl0YzNSbGNDYzdYRzVwYlhCdmNuUWdleUJqZFhKeVpXNTBWR2x0WlNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm14bGRDQjNhV3hzVW1WdVpHVnlUbVY0ZEVaeVlXMWxJRDBnWm1Gc2MyVTdYRzVjYmk4cUtseHVJQ29nVFdGNGFXMTFiU0J3WlhKdGFYUjBaV1FnYlhNZ2MybHVZMlVnYkdGemRDQm1jbUZ0WlZ4dUlDb2dRSFI1Y0dVZ2UwNTFiV0psY24xY2JpQXFMMXh1WTI5dWMzUWdUVUZZWDBWTVFWQlRSVVFnUFNBeU1EdGNibHh1THlvcVhHNGdLaUJEZFhKeVpXNTBJR1p5WVcxbGMzUmhiWEJjYmlBcUlFQjBlWEJsSUh0T2RXMWlaWEo5WEc0Z0tpOWNibXhsZENCamRYSnlaVzUwUm5KaGJXVnpkR0Z0Y0NBOUlHTjFjbkpsYm5SVWFXMWxLQ2s3WEc1Y2JteGxkQ0JsYkdGd2MyVmtJRDBnTUR0Y2JseHVMeW9xWEc0Z0tpQkdZV04wYjNJZ2RHOGdiWFZzZEdsd2JIa2dZR1ZzWVhCelpXUmdJR0o1SUMwZ1hHNGdLaUF3TGpVZ2QyOTFiR1FnWW1VZ2MyeHZkeUJ0YjNScGIyNHNJRElnZDI5MWJHUWdZbVVnWm1GemRGeHVJQ29nUUhSNWNHVWdlMDUxYldKbGNuMWNiaUFxTDF4dWJHVjBJR1JwYkdGMGFXOXVJRDBnTVR0Y2JseHVablZ1WTNScGIyNGdjM1JoY25SU1pXNWtaWEpNYjI5d0tDa2dlMXh1SUNCcFppQW9JWGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VwSUh0Y2JpQWdJQ0IzYVd4c1VtVnVaR1Z5VG1WNGRFWnlZVzFsSUQwZ2RISjFaVHRjYmlBZ0lDQnZiazVsZUhSR2NtRnRaU2h3Y205alpYTnpSbkpoYldVcE8xeHVJQ0I5WEc1OVhHNWNibU52Ym5OMElHWnlZVzFsVTNSaGNuUWdQU0JqY21WaGRHVlNaVzVrWlhKVGRHVndLSE4wWVhKMFVtVnVaR1Z5VEc5dmNDazdYRzVqYjI1emRDQm1jbUZ0WlZWd1pHRjBaU0E5SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLVHRjYm1OdmJuTjBJR1p5WVcxbFVtVnVaR1Z5SUQwZ1kzSmxZWFJsVW1WdVpHVnlVM1JsY0NoemRHRnlkRkpsYm1SbGNreHZiM0FwTzF4dVkyOXVjM1FnWm5KaGJXVkZibVFnUFNCamNtVmhkR1ZTWlc1a1pYSlRkR1Z3S0hOMFlYSjBVbVZ1WkdWeVRHOXZjQ2s3WEc1Y2JtWjFibU4wYVc5dUlIQnliMk5sYzNOR2NtRnRaU2htY21GdFpYTjBZVzF3S1NCN1hHNGdJSGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VnUFNCbVlXeHpaVHRjYmlBZ1pXeGhjSE5sWkNBOUlFMWhkR2d1YldGNEtFMWhkR2d1YldsdUtHWnlZVzFsYzNSaGJYQWdMU0JqZFhKeVpXNTBSbkpoYldWemRHRnRjQ3dnVFVGWVgwVk1RVkJUUlVRcExDQXhLU0FxSUdScGJHRjBhVzl1TzF4dUlDQmpkWEp5Wlc1MFJuSmhiV1Z6ZEdGdGNDQTlJR1p5WVcxbGMzUmhiWEE3WEc1Y2JpQWdabkpoYldWVGRHRnlkQzV3Y205alpYTnpLQ2s3WEc0Z0lHWnlZVzFsVlhCa1lYUmxMbkJ5YjJObGMzTW9LVHRjYmlBZ1puSmhiV1ZTWlc1a1pYSXVjSEp2WTJWemN5Z3BPMXh1SUNCbWNtRnRaVVZ1WkM1d2NtOWpaWE56S0NrN1hHNTlYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnZia1p5WVcxbFUzUmhjblFnUFNCbWNtRnRaVk4wWVhKMExuTmphR1ZrZFd4bE8xeHVaWGh3YjNKMElHTnZibk4wSUc5dVJuSmhiV1ZWY0dSaGRHVWdQU0JtY21GdFpWVndaR0YwWlM1elkyaGxaSFZzWlR0Y2JtVjRjRzl5ZENCamIyNXpkQ0J2YmtaeVlXMWxVbVZ1WkdWeUlEMGdabkpoYldWU1pXNWtaWEl1YzJOb1pXUjFiR1U3WEc1bGVIQnZjblFnWTI5dWMzUWdiMjVHY21GdFpVVnVaQ0E5SUdaeVlXMWxSVzVrTG5OamFHVmtkV3hsTzF4dVpYaHdiM0owSUdOdmJuTjBJR05oYm1ObGJFOXVSbkpoYldWVGRHRnlkQ0E5SUdaeVlXMWxVM1JoY25RdVkyRnVZMlZzTzF4dVpYaHdiM0owSUdOdmJuTjBJR05oYm1ObGJFOXVSbkpoYldWVmNHUmhkR1VnUFNCbWNtRnRaVlZ3WkdGMFpTNWpZVzVqWld3N1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWSmxibVJsY2lBOUlHWnlZVzFsVW1WdVpHVnlMbU5oYm1ObGJEdGNibVY0Y0c5eWRDQmpiMjV6ZENCallXNWpaV3hQYmtaeVlXMWxSVzVrSUQwZ1puSmhiV1ZGYm1RdVkyRnVZMlZzTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsSUQwZ0tDa2dQVDRnWld4aGNITmxaRHRjYm1WNGNHOXlkQ0JqYjI1emRDQmpkWEp5Wlc1MFJuSmhiV1ZVYVcxbGMzUmhiWEFnUFNBb0tTQTlQaUJqZFhKeVpXNTBSbkpoYldWemRHRnRjRHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFjdGlvbihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgdGhpcy5zY2hlZHVsZWRVcGRhdGUgPSB0aGlzLnNjaGVkdWxlZFVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcyk7XG5cbiAgICB0aGlzLnNldFByb3BzKHByb3BzKTtcblxuICAgIHRoaXMuY3VycmVudCA9IHByb3BzLmN1cnJlbnQgfHwgcHJvcHMuZnJvbSB8fCAwO1xuICB9XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvblN0YXJ0ID0gX3Byb3BzLm9uU3RhcnQ7XG4gICAgdmFyIF9vblN0YXJ0ID0gX3Byb3BzLl9vblN0YXJ0O1xuICAgIHZhciBwYXNzaXZlID0gX3Byb3BzLnBhc3NpdmU7XG5cblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdGFydCkgdGhpcy5vblN0YXJ0KCk7XG4gICAgaWYgKG9uU3RhcnQpIG9uU3RhcnQodGhpcyk7XG4gICAgaWYgKF9vblN0YXJ0KSBfb25TdGFydCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvblN0b3AgPSBfcHJvcHMyLm9uU3RvcDtcbiAgICB2YXIgX29uU3RvcCA9IF9wcm9wczIuX29uU3RvcDtcbiAgICB2YXIgcGFzc2l2ZSA9IF9wcm9wczIucGFzc2l2ZTtcblxuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdG9wKSB0aGlzLm9uU3RvcCgpO1xuICAgIGlmIChvblN0b3ApIG9uU3RvcCh0aGlzKTtcbiAgICBpZiAoX29uU3RvcCkgX29uU3RvcCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG9uQ29tcGxldGUgPSBfcHJvcHMzLm9uQ29tcGxldGU7XG4gICAgdmFyIF9vbkNvbXBsZXRlID0gX3Byb3BzMy5fb25Db21wbGV0ZTtcblxuXG4gICAgdGhpcy5zdG9wKCk7XG5cbiAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSh0aGlzKTtcbiAgICBpZiAoX29uQ29tcGxldGUpIF9vbkNvbXBsZXRlKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZWRVcGRhdGUgPSBmdW5jdGlvbiBzY2hlZHVsZWRVcGRhdGUoKSB7XG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcbiAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG9uVXBkYXRlID0gX3Byb3BzNC5vblVwZGF0ZTtcbiAgICB2YXIgcGFzc2l2ZSA9IF9wcm9wczQucGFzc2l2ZTtcblxuXG4gICAgaWYgKHRoaXMudXBkYXRlKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnVwZGF0ZSh0aGlzLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlmIChvblVwZGF0ZSkgb25VcGRhdGUodGhpcy5jdXJyZW50LCB0aGlzKTtcbiAgICB0aGlzLmZpcmVMaXN0ZW5lcnMoKTtcblxuICAgIGlmICghcGFzc2l2ZSAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiB0aGlzLmlzQWN0aW9uQ29tcGxldGUoKSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbiBzZXRQcm9wcyhwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgcHJvcHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQodikge1xuICAgIHRoaXMuY3VycmVudCA9IHY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXRQcm9wID0gZnVuY3Rpb24gZ2V0UHJvcChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wc1trZXldO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICByZXR1cm4gKDAsIF9jYWxjLnNwZWVkUGVyU2Vjb25kKSh0aGlzLmN1cnJlbnQgLSB0aGlzLnByZXYsIHRoaXMubGFzdFVwZGF0ZWQpO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IFtdO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gdGhpcy5udW1MaXN0ZW5lcnMgfHwgMDtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzKys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHZhciBsaXN0ZW5lckluZGV4ID0gdGhpcy5saXN0ZW5lcnMgPyB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA6IC0xO1xuICAgIGlmIChsaXN0ZW5lckluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMtLTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5maXJlTGlzdGVuZXJzID0gZnVuY3Rpb24gZmlyZUxpc3RlbmVycygpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuZ2V0KCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bUxpc3RlbmVyczsgaSsrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tpXShjdXJyZW50LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIEFjdGlvbjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenRCUVVOQk96czdPMGxCUlUwc1RUdEJRVU5LTEd0Q1FVRlpMRXRCUVZvc1JVRkJiVUk3UVVGQlFUczdRVUZEYWtJc1UwRkJTeXhsUVVGTUxFZEJRWFZDTEV0QlFVc3NaVUZCVEN4RFFVRnhRaXhKUVVGeVFpeERRVUV3UWl4SlFVRXhRaXhEUVVGMlFqczdRVUZGUVN4VFFVRkxMRXRCUVV3c1owSkJRMHNzUzBGQlN5eFhRVUZNTEVOQlFXbENMRmxCUkhSQ096dEJRVWxCTEZOQlFVc3NVVUZCVEN4RFFVRmpMRXRCUVdRN08wRkJSVUVzVTBGQlN5eFBRVUZNTEVkQlFXVXNUVUZCVFN4UFFVRk9MRWxCUVdsQ0xFMUJRVTBzU1VGQmRrSXNTVUZCSzBJc1EwRkJPVU03UVVGRFJEczdiVUpCUlVRc1N5eHZRa0ZCVVR0QlFVRkJMR2xDUVVOcFF5eExRVUZMTEV0QlJIUkRPMEZCUVVFc1VVRkRSU3hQUVVSR0xGVkJRMFVzVDBGRVJqdEJRVUZCTEZGQlExY3NVVUZFV0N4VlFVTlhMRkZCUkZnN1FVRkJRU3hSUVVOeFFpeFBRVVJ5UWl4VlFVTnhRaXhQUVVSeVFqczdPMEZCUjA0c1VVRkJTU3hEUVVGRExFOUJRVXdzUlVGQll6dEJRVU5hTEZkQlFVc3NVVUZCVEN4SFFVRm5RaXhKUVVGb1FqdEJRVU5CTEc5RFFVRmpMRXRCUVVzc1pVRkJia0k3UVVGRFJEczdRVUZGUkN4UlFVRkpMRXRCUVVzc1QwRkJWQ3hGUVVGclFpeExRVUZMTEU5QlFVdzdRVUZEYkVJc1VVRkJTU3hQUVVGS0xFVkJRV0VzVVVGQlVTeEpRVUZTTzBGQlEySXNVVUZCU1N4UlFVRktMRVZCUVdNc1UwRkJVeXhKUVVGVU96dEJRVVZrTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzIxQ1FVVkVMRWtzYlVKQlFVODdRVUZCUVN4clFrRkRaME1zUzBGQlN5eExRVVJ5UXp0QlFVRkJMRkZCUTBjc1RVRkVTQ3hYUVVOSExFMUJSRWc3UVVGQlFTeFJRVU5YTEU5QlJGZ3NWMEZEVnl4UFFVUllPMEZCUVVFc1VVRkRiMElzVDBGRWNFSXNWMEZEYjBJc1QwRkVjRUk3T3p0QlFVZE1MRkZCUVVrc1EwRkJReXhQUVVGTUxFVkJRV003UVVGRFdpeFhRVUZMTEZGQlFVd3NSMEZCWjBJc1MwRkJhRUk3UVVGRFFTd3dRMEZCYjBJc1MwRkJTeXhsUVVGNlFqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1MwRkJTeXhOUVVGVUxFVkJRV2xDTEV0QlFVc3NUVUZCVER0QlFVTnFRaXhSUVVGSkxFMUJRVW9zUlVGQldTeFBRVUZQTEVsQlFWQTdRVUZEV2l4UlFVRkpMRTlCUVVvc1JVRkJZU3hSUVVGUkxFbEJRVkk3TzBGQlJXSXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdiVUpCUlVRc1VTeDFRa0ZCVnp0QlFVRkJMR3RDUVVNeVFpeExRVUZMTEV0QlJHaERPMEZCUVVFc1VVRkRSQ3hWUVVSRExGZEJRMFFzVlVGRVF6dEJRVUZCTEZGQlExY3NWMEZFV0N4WFFVTlhMRmRCUkZnN096dEJRVWRVTEZOQlFVc3NTVUZCVERzN1FVRkZRU3hSUVVGSkxFdEJRVXNzVlVGQlZDeEZRVUZ4UWl4TFFVRkxMRlZCUVV3N1FVRkRja0lzVVVGQlNTeFZRVUZLTEVWQlFXZENMRmRCUVZjc1NVRkJXRHRCUVVOb1FpeFJRVUZKTEZkQlFVb3NSVUZCYVVJc1dVRkJXU3hKUVVGYU96dEJRVVZxUWl4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSQ3hsTERoQ1FVRnJRanRCUVVOb1FpeFRRVUZMTEZkQlFVd3NSMEZCYlVJc2IwTkJRVzVDTzBGQlEwRXNVMEZCU3l4SlFVRk1MRWRCUVZrc1MwRkJTeXhQUVVGcVFqczdRVUZHWjBJc2EwSkJTV01zUzBGQlN5eExRVXB1UWp0QlFVRkJMRkZCU1ZJc1VVRktVU3hYUVVsU0xGRkJTbEU3UVVGQlFTeFJRVWxGTEU5QlNrWXNWMEZKUlN4UFFVcEdPenM3UVVGTmFFSXNVVUZCU1N4TFFVRkxMRTFCUVZRc1JVRkJhVUk3UVVGRFppeFhRVUZMTEU5QlFVd3NSMEZCWlN4TFFVRkxMRTFCUVV3c1EwRkJXU3hMUVVGTExFOUJRV3BDTEVOQlFXWTdRVUZEUkRzN1FVRkZSQ3hSUVVGSkxGRkJRVW9zUlVGQll5eFRRVUZUTEV0QlFVc3NUMEZCWkN4RlFVRjFRaXhKUVVGMlFqdEJRVU5rTEZOQlFVc3NZVUZCVERzN1FVRkZRU3hSUVVGSkxFTkJRVU1zVDBGQlJDeEpRVUZaTEV0QlFVc3NVVUZCY2tJc1JVRkJLMEk3UVVGRE4wSXNiME5CUVdNc1MwRkJTeXhsUVVGdVFqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1MwRkJTeXhuUWtGQlRDeEpRVUY1UWl4TFFVRkxMR2RDUVVGTUxFVkJRVGRDTEVWQlFYTkVPMEZCUTNCRUxGZEJRVXNzVVVGQlREdEJRVU5FT3p0QlFVVkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMjFDUVVWRUxGRXNjVUpCUVZNc1N5eEZRVUZQTzBGQlEyUXNVMEZCU3l4TFFVRk1MR2RDUVVOTExFdEJRVXNzUzBGRVZpeEZRVVZMTEV0QlJrdzdRVUZKUVN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSQ3hITEd0Q1FVRk5PMEZCUTBvc1YwRkJUeXhMUVVGTExFOUJRVm83UVVGRFJDeEhPenR0UWtGRlJDeEhMR2RDUVVGSkxFTXNSVUZCUnp0QlFVTk1MRk5CUVVzc1QwRkJUQ3hIUVVGbExFTkJRV1k3UVVGRFFTeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkN4UExHOUNRVUZSTEVjc1JVRkJTenRCUVVOWUxGZEJRVThzUzBGQlN5eExRVUZNTEVOQlFWY3NSMEZCV0N4RFFVRlFPMEZCUTBRc1J6czdiVUpCUlVRc1Z5d3dRa0ZCWXp0QlFVTmFMRmRCUVU4c01FSkJRV1VzUzBGQlN5eFBRVUZNTEVkQlFXVXNTMEZCU3l4SlFVRnVReXhGUVVGNVF5eExRVUZMTEZkQlFUbERMRU5CUVZBN1FVRkRSQ3hIT3p0dFFrRkZSQ3hSTEhWQ1FVRlhPMEZCUTFRc1YwRkJUeXhMUVVGTExGRkJRVm83UVVGRFJDeEhPenR0UWtGRlJDeFhMSGRDUVVGWkxGRXNSVUZCVlR0QlFVTndRaXhUUVVGTExGTkJRVXdzUjBGQmFVSXNTMEZCU3l4VFFVRk1MRWxCUVd0Q0xFVkJRVzVETzBGQlEwRXNVMEZCU3l4WlFVRk1MRWRCUVc5Q0xFdEJRVXNzV1VGQlRDeEpRVUZ4UWl4RFFVRjZRenRCUVVOQkxGRkJRVWtzUzBGQlN5eFRRVUZNTEVOQlFXVXNUMEZCWml4RFFVRjFRaXhSUVVGMlFpeE5RVUZ4UXl4RFFVRkRMRU5CUVRGRExFVkJRVFpETzBGQlF6TkRMRmRCUVVzc1UwRkJUQ3hEUVVGbExFbEJRV1lzUTBGQmIwSXNVVUZCY0VJN1FVRkRRU3hYUVVGTExGbEJRVXc3UVVGRFJEdEJRVU5FTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzIxQ1FVVkVMR01zTWtKQlFXVXNVU3hGUVVGVk8wRkJRM1pDTEZGQlFVMHNaMEpCUVdsQ0xFdEJRVXNzVTBGQlRpeEhRVUZ0UWl4TFFVRkxMRk5CUVV3c1EwRkJaU3hQUVVGbUxFTkJRWFZDTEZGQlFYWkNMRU5CUVc1Q0xFZEJRWE5FTEVOQlFVTXNRMEZCTjBVN1FVRkRRU3hSUVVGSkxHdENRVUZyUWl4RFFVRkRMRU5CUVhaQ0xFVkJRVEJDTzBGQlEzaENMRmRCUVVzc1dVRkJURHRCUVVOQkxGZEJRVXNzVTBGQlRDeERRVUZsTEUxQlFXWXNRMEZCYzBJc1lVRkJkRUlzUlVGQmNVTXNRMEZCY2tNN1FVRkRSRHRCUVVORUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08yMUNRVVZFTEdFc05FSkJRV2RDTzBGQlEyUXNVVUZCVFN4VlFVRlZMRXRCUVVzc1IwRkJUQ3hGUVVGb1FqdEJRVU5CTEZOQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVdJc1JVRkJaMElzU1VGQlNTeExRVUZMTEZsQlFYcENMRVZCUVhWRExFZEJRWFpETEVWQlFUUkRPMEZCUXpGRExGZEJRVXNzVTBGQlRDeERRVUZsTEVOQlFXWXNSVUZCYTBJc1QwRkJiRUlzUlVGQk1rSXNTVUZCTTBJN1FVRkRSRHRCUVVORUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN096czdPMnRDUVVkWkxFMGlMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCdmJrWnlZVzFsVlhCa1lYUmxMQ0JqWVc1alpXeFBia1p5WVcxbFZYQmtZWFJsTENCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ2ZTQm1jbTl0SUNjdUxpOW1jbUZ0WlhONWJtTW5PMXh1YVcxd2IzSjBJSHNnYzNCbFpXUlFaWEpUWldOdmJtUWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JtTnNZWE56SUVGamRHbHZiaUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ2RHaHBjeTV6WTJobFpIVnNaV1JWY0dSaGRHVWdQU0IwYUdsekxuTmphR1ZrZFd4bFpGVndaR0YwWlM1aWFXNWtLSFJvYVhNcE8xeHVYRzRnSUNBZ2RHaHBjeTV3Y205d2N5QTlJSHRjYmlBZ0lDQWdJQzR1TG5Sb2FYTXVZMjl1YzNSeWRXTjBiM0l1WkdWbVlYVnNkRkJ5YjNCelhHNGdJQ0FnZlR0Y2JseHVJQ0FnSUhSb2FYTXVjMlYwVUhKdmNITW9jSEp2Y0hNcE8xeHVYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJRDBnY0hKdmNITXVZM1Z5Y21WdWRDQjhmQ0J3Y205d2N5NW1jbTl0SUh4OElEQTdYRzRnSUgxY2JseHVJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHOXVVM1JoY25Rc0lGOXZibE4wWVhKMExDQndZWE56YVhabElIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tDRndZWE56YVhabEtTQjdYRzRnSUNBZ0lDQjBhR2x6TG1selFXTjBhWFpsSUQwZ2RISjFaVHRjYmlBZ0lDQWdJRzl1Um5KaGJXVlZjR1JoZEdVb2RHaHBjeTV6WTJobFpIVnNaV1JWY0dSaGRHVXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtOXVVM1JoY25RcElIUm9hWE11YjI1VGRHRnlkQ2dwTzF4dUlDQWdJR2xtSUNodmJsTjBZWEowS1NCdmJsTjBZWEowS0hSb2FYTXBPMXh1SUNBZ0lHbG1JQ2hmYjI1VGRHRnlkQ2tnWDI5dVUzUmhjblFvZEdocGN5azdYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUhOMGIzQW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QnZibE4wYjNBc0lGOXZibE4wYjNBc0lIQmhjM05wZG1VZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc1Y2JpQWdJQ0JwWmlBb0lYQmhjM05wZG1VcElIdGNiaUFnSUNBZ0lIUm9hWE11YVhOQlkzUnBkbVVnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJR05oYm1ObGJFOXVSbkpoYldWVmNHUmhkR1VvZEdocGN5NXpZMmhsWkhWc1pXUlZjR1JoZEdVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBhR2x6TG05dVUzUnZjQ2tnZEdocGN5NXZibE4wYjNBb0tUdGNiaUFnSUNCcFppQW9iMjVUZEc5d0tTQnZibE4wYjNBb2RHaHBjeWs3WEc0Z0lDQWdhV1lnS0Y5dmJsTjBiM0FwSUY5dmJsTjBiM0FvZEdocGN5azdYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUdOdmJYQnNaWFJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYjI1RGIyMXdiR1YwWlN3Z1gyOXVRMjl0Y0d4bGRHVWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCMGFHbHpMbk4wYjNBb0tUdGNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtOXVRMjl0Y0d4bGRHVXBJSFJvYVhNdWIyNURiMjF3YkdWMFpTZ3BPMXh1SUNBZ0lHbG1JQ2h2YmtOdmJYQnNaWFJsS1NCdmJrTnZiWEJzWlhSbEtIUm9hWE1wTzF4dUlDQWdJR2xtSUNoZmIyNURiMjF3YkdWMFpTa2dYMjl1UTI5dGNHeGxkR1VvZEdocGN5azdYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUhOamFHVmtkV3hsWkZWd1pHRjBaU2dwSUh0Y2JpQWdJQ0IwYUdsekxteGhjM1JWY0dSaGRHVmtJRDBnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsS0NrN1hHNGdJQ0FnZEdocGN5NXdjbVYySUQwZ2RHaHBjeTVqZFhKeVpXNTBPMXh1WEc0Z0lDQWdZMjl1YzNRZ2V5QnZibFZ3WkdGMFpTd2djR0Z6YzJsMlpTQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JseHVJQ0FnSUdsbUlDaDBhR2x6TG5Wd1pHRjBaU2tnZTF4dUlDQWdJQ0FnZEdocGN5NWpkWEp5Wlc1MElEMGdkR2hwY3k1MWNHUmhkR1VvZEdocGN5NWpkWEp5Wlc1MEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9iMjVWY0dSaGRHVXBJRzl1VlhCa1lYUmxLSFJvYVhNdVkzVnljbVZ1ZEN3Z2RHaHBjeWs3WEc0Z0lDQWdkR2hwY3k1bWFYSmxUR2x6ZEdWdVpYSnpLQ2s3WEc1Y2JpQWdJQ0JwWmlBb0lYQmhjM05wZG1VZ0ppWWdkR2hwY3k1cGMwRmpkR2wyWlNrZ2UxeHVJQ0FnSUNBZ2IyNUdjbUZ0WlZWd1pHRjBaU2gwYUdsekxuTmphR1ZrZFd4bFpGVndaR0YwWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YVhOQlkzUnBiMjVEYjIxd2JHVjBaU0FtSmlCMGFHbHpMbWx6UVdOMGFXOXVRMjl0Y0d4bGRHVW9LU2tnZTF4dUlDQWdJQ0FnZEdocGN5NWpiMjF3YkdWMFpTZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnYzJWMFVISnZjSE1vY0hKdmNITXBJSHRjYmlBZ0lDQjBhR2x6TG5CeWIzQnpJRDBnZTF4dUlDQWdJQ0FnTGk0dWRHaHBjeTV3Y205d2N5eGNiaUFnSUNBZ0lDNHVMbkJ5YjNCelhHNGdJQ0FnZlR0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lHZGxkQ2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1amRYSnlaVzUwTzF4dUlDQjlYRzVjYmlBZ2MyVjBLSFlwSUh0Y2JpQWdJQ0IwYUdsekxtTjFjbkpsYm5RZ1BTQjJPMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnWjJWMFVISnZjQ2hyWlhrcElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXdjbTl3YzF0clpYbGRPMXh1SUNCOVhHNWNiaUFnWjJWMFZtVnNiMk5wZEhrb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhOd1pXVmtVR1Z5VTJWamIyNWtLSFJvYVhNdVkzVnljbVZ1ZENBdElIUm9hWE11Y0hKbGRpd2dkR2hwY3k1c1lYTjBWWEJrWVhSbFpDazdYRzRnSUgxY2JseHVJQ0JwYzBGamRHbDJaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1cGMwRmpkR2wyWlR0Y2JpQWdmVnh1WEc0Z0lHRmtaRXhwYzNSbGJtVnlLR3hwYzNSbGJtVnlLU0I3WEc0Z0lDQWdkR2hwY3k1c2FYTjBaVzVsY25NZ1BTQjBhR2x6TG14cGMzUmxibVZ5Y3lCOGZDQmJYVHRjYmlBZ0lDQjBhR2x6TG01MWJVeHBjM1JsYm1WeWN5QTlJSFJvYVhNdWJuVnRUR2x6ZEdWdVpYSnpJSHg4SURBN1hHNGdJQ0FnYVdZZ0tIUm9hWE11YkdsemRHVnVaWEp6TG1sdVpHVjRUMllvYkdsemRHVnVaWElwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXNhWE4wWlc1bGNuTXVjSFZ6YUNoc2FYTjBaVzVsY2lrN1hHNGdJQ0FnSUNCMGFHbHpMbTUxYlV4cGMzUmxibVZ5Y3lzck8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lISmxiVzkyWlV4cGMzUmxibVZ5S0d4cGMzUmxibVZ5S1NCN1hHNGdJQ0FnWTI5dWMzUWdiR2x6ZEdWdVpYSkpibVJsZUNBOUlDaDBhR2x6TG14cGMzUmxibVZ5Y3lrZ1B5QjBhR2x6TG14cGMzUmxibVZ5Y3k1cGJtUmxlRTltS0d4cGMzUmxibVZ5S1NBNklDMHhPMXh1SUNBZ0lHbG1JQ2hzYVhOMFpXNWxja2x1WkdWNElDRTlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV1ZFcxTWFYTjBaVzVsY25NdExUdGNiaUFnSUNBZ0lIUm9hWE11YkdsemRHVnVaWEp6TG5Od2JHbGpaU2hzYVhOMFpXNWxja2x1WkdWNExDQXhLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0JtYVhKbFRHbHpkR1Z1WlhKektDa2dlMXh1SUNBZ0lHTnZibk4wSUdOMWNuSmxiblFnUFNCMGFHbHpMbWRsZENncE8xeHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTV1ZFcxTWFYTjBaVzVsY25NN0lHa3JLeWtnZTF4dUlDQWdJQ0FnZEdocGN5NXNhWE4wWlc1bGNuTmJhVjBvWTNWeWNtVnVkQ3dnZEdocGN5azdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFRmpkR2x2Ymp0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJlbmRlcmVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbmRlcmVyKTtcblxuICAgIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMsIHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLmNoYW5nZWRWYWx1ZXMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBzdGF0ZS5cbiAgICogSWYgYGtleWAgaXMgbm90IGRlZmluZWQsIHJldHVybiBlbnRpcmUgY2FjaGVkIHN0YXRlLlxuICAgKiBJZiBga2V5YCBpcyBkZWZpbmVkLCByZXR1cm4gY2FjaGVkIHZhbHVlIGlmIHByZXNlbnQuXG4gICAqIElmIGBrZXlgIGlzIGRlZmluZWQgYW5kIGNhY2hlZCB2YWx1ZSBpcyBub3QgcHJlc2VudCwgcmVhZCBhbmQgcmV0dXJuLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IChvcHRpb25hbCkga2V5IG9mIHZhbHVlXG4gICAqIEByZXR1cm4ge3ZhbHVlfVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkKGtleSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVhZCB2YWx1ZSBhY2NvcmRpbmcgdG8gYG9uUmVhZGBcbiAgICogQHBhcmFtICB7c3RyaW5nfSBOYW1lIG9mIHByb3BlcnR5IHRvIHJlYWRcbiAgICogQHJldHVybiB7W3R5cGVdfVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gcmVhZChrZXkpIHtcbiAgICBpZiAodGhpcy5vblJlYWQpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uUmVhZChrZXkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlIGBzdGF0ZWAgd2l0aCBuZXcgdmFsdWVzIGFuZCBzY2hlZHVsZSBgcmVuZGVyYC5cbiAgICogQHBhcmFtIHtvYmplY3R9IHZhbHVlc1xuICAgKiBAcGFyYW0ge3ZhbHVlfSB2YWx1ZSB0b3NldFxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHZhbHVlcyA9IGFyZ3NbMF07XG4gICAgICAvLyBTZXQgbXVsdGlwbGUgdmFsdWVzXG5cbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShrZXksIHZhbHVlc1trZXldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9rZXkyID0gYXJnc1swXTtcbiAgICAgIHZhciB2YWx1ZSA9IGFyZ3NbMV07XG5cbiAgICAgIHRoaXMuc2V0VmFsdWUoX2tleTIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKSB7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lUmVuZGVyKSh0aGlzLnJlbmRlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gPiBXaWxleSAtIDYgaW4gdGhlIE1vcm5pbmdcbiAgLyoqXG4gICAqIFNldCBhIHNpbmdsZSB2YWx1ZVxuICAgKiBJZiBhIHN0cmluZyBvciBudW1iZXIsIHNldCBkaXJlY3RseS5cbiAgICogSWYgYW4gb2JqZWN0IG9yIGFycmF5LCBjcmVhdGUgbmV3IG9iamVjdCBvciBhcnJheVxuICAgKiBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3QuIFRoZW4gc2hhbGxvdyBjb21wYXJlXG4gICAqIHRvIHNldCBhbmQgY29tcGFyZSBpbmRpdmlkdWFsIHZhbHVlcy5cbiAgICogT25lIG9mIHRoZSBjbGVhcmVyIGRyYXdiYWNrcyBhbmQgYW5ub3lhbmNlcyB3aXRoXG4gICAqIHVzaW5nIG11dGFibGUgaW5zdGVhZCBvZiBpbW11dGFibGUgc3RhdGVzLlxuICAgKiBAcGFyYW0ge1t0eXBlXX0ga2V5XG4gICAqIEBwYXJhbSB7W3R5cGVdfSB2YWx1ZVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uIHNldFZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgY3VycmVudFZhbHVlID0gdGhpcy5zdGF0ZVtrZXldO1xuXG4gICAgLy8gSWYgbnVtYmVyIG9yIHN0cmluZywgc2V0IGRpcmVjdGx5XG4gICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlKSB8fCAoMCwgX3V0aWxzLmlzU3RyaW5nKSh2YWx1ZSkpIHtcbiAgICAgIGlmIChjdXJyZW50VmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc0FycmF5KSh2YWx1ZSkpIHtcbiAgICAgIGlmICghY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IFtdO1xuICAgICAgfVxuXG4gICAgICB2YXIgbnVtVmFsdWVzID0gdmFsdWUubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1WYWx1ZXM7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZVtrZXldW2ldICE9PSB2YWx1ZVtpXSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVtpXSA9IHZhbHVlW2ldO1xuICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNPYmopKHZhbHVlKSkge1xuICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0ge307XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIHZhbHVlS2V5IGluIHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV1bdmFsdWVLZXldICE9PSB2YWx1ZVt2YWx1ZUtleV0pIHtcbiAgICAgICAgICB0aGlzLnN0YXRlW2tleV1bdmFsdWVLZXldID0gdmFsdWVbdmFsdWVLZXldO1xuICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNoYW5nZWRWYWx1ZXMucHVzaChrZXkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRmlyZXMgYG9uUmVuZGVyYCBpZiB2YWx1ZXMgaGF2ZSBjaGFuZ2VkIG9yIGBmb3JjZVJlbmRlcmBcbiAgICogaXMgc2V0IHRvIHRydWUuXG4gICAqIEByZXR1cm4ge3RoaXN9XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgZm9yY2VSZW5kZXIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGFyZ3VtZW50c1swXTtcblxuICAgIGlmICgoZm9yY2VSZW5kZXIgfHwgdGhpcy5oYXNDaGFuZ2VkKSAmJiB0aGlzLm9uUmVuZGVyKSB7XG4gICAgICB0aGlzLm9uUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VkVmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gUmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlbmRlcmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3TzBGQlEwRTdPenM3U1VGRlRTeFJPMEZCUTBvc2IwSkJRVmtzUzBGQldpeEZRVUZ0UWp0QlFVRkJPenRCUVVOcVFpeFRRVUZMTEUxQlFVd3NSMEZCWXl4TFFVRkxMRTFCUVV3c1EwRkJXU3hKUVVGYUxFTkJRV2xDTEVsQlFXcENMRU5CUVdRN08wRkJSVUVzVTBGQlN5eExRVUZNTEdkQ1FVTkxMRXRCUVVzc1YwRkJUQ3hEUVVGcFFpeFpRVVIwUWl4RlFVVkxMRXRCUmt3N08wRkJTMEVzVTBGQlN5eExRVUZNTEVkQlFXRXNSVUZCWWp0QlFVTkJMRk5CUVVzc1lVRkJUQ3hIUVVGeFFpeEZRVUZ5UWp0QlFVTkVPenM3T3pzN096czdPenM3Y1VKQlZVUXNSeXhuUWtGQlNTeEhMRVZCUVVzN1FVRkRVQ3hSUVVGSkxFZEJRVW9zUlVGQlV6dEJRVU5RTEZWQlFVa3NTMEZCU3l4TFFVRk1MRU5CUVZjc1IwRkJXQ3hOUVVGdlFpeFRRVUY0UWl4RlFVRnRRenRCUVVOcVF5eGxRVUZQTEV0QlFVc3NTMEZCVEN4RFFVRlhMRWRCUVZnc1EwRkJVRHRCUVVORUxFOUJSa1FzVFVGRlR6dEJRVU5NTEdWQlFVOHNTMEZCU3l4SlFVRk1MRU5CUVZVc1IwRkJWaXhEUVVGUU8wRkJRMFE3UVVGRFJpeExRVTVFTEUxQlRVODdRVUZEVEN4aFFVRlBMRXRCUVVzc1MwRkJXanRCUVVORU8wRkJRMFlzUnpzN096czdPenM3TzNGQ1FVOUVMRWtzYVVKQlFVc3NSeXhGUVVGTE8wRkJRMUlzVVVGQlNTeExRVUZMTEUxQlFWUXNSVUZCYVVJN1FVRkRaaXhoUVVGUExFdEJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NRMEZCVUR0QlFVTkVPMEZCUTBZc1J6czdPenM3T3pzN08zRkNRVTlFTEVjc2EwSkJRV0U3UVVGQlFTeHpRMEZCVGl4SlFVRk5PMEZCUVU0c1ZVRkJUVHRCUVVGQk96dEJRVU5ZTEZGQlFVa3NUMEZCVHl4TFFVRkxMRU5CUVV3c1EwRkJVQ3hMUVVGdFFpeFhRVUYyUWl4RlFVRnZRenRCUVVGQkxGVkJRekZDTEUxQlJEQkNMRWRCUTJZc1NVRkVaVHM3TzBGQlIyeERMRmRCUVVzc1NVRkJUU3hIUVVGWUxFbEJRV3RDTEUxQlFXeENMRVZCUVRCQ08wRkJRM2hDTEdGQlFVc3NVVUZCVEN4RFFVRmpMRWRCUVdRc1JVRkJiVUlzVDBGQlR5eEhRVUZRTEVOQlFXNUNPMEZCUTBRN1FVRkRSaXhMUVU1RUxFMUJUVTg3UVVGQlFTeFZRVU5ITEV0QlJFZ3NSMEZEYTBJc1NVRkViRUk3UVVGQlFTeFZRVU5STEV0QlJGSXNSMEZEYTBJc1NVRkViRUk3TzBGQlJVd3NWMEZCU3l4UlFVRk1MRU5CUVdNc1MwRkJaQ3hGUVVGdFFpeExRVUZ1UWp0QlFVTkVPenRCUVVWRUxGRkJRVWtzUzBGQlN5eFZRVUZVTEVWQlFYRkNPMEZCUTI1Q0xHOURRVUZqTEV0QlFVc3NUVUZCYmtJN1FVRkRSRHM3UVVGRlJDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96czdPenM3T3pzN096czdPenM3TzNGQ1FXTkVMRkVzY1VKQlFWTXNSeXhGUVVGTExFc3NSVUZCVHp0QlFVTnVRaXhSUVVGTkxHVkJRV1VzUzBGQlN5eExRVUZNTEVOQlFWY3NSMEZCV0N4RFFVRnlRanM3TzBGQlIwRXNVVUZCU1N4clFrRkJUU3hMUVVGT0xFdEJRV2RDTEhGQ1FVRlRMRXRCUVZRc1EwRkJjRUlzUlVGQmNVTTdRVUZEYmtNc1ZVRkJTU3hwUWtGQmFVSXNTMEZCY2tJc1JVRkJORUk3UVVGRE1VSXNZVUZCU3l4TFFVRk1MRU5CUVZjc1IwRkJXQ3hKUVVGclFpeExRVUZzUWp0QlFVTkJMR0ZCUVVzc1ZVRkJUQ3hIUVVGclFpeEpRVUZzUWp0QlFVTkVPMEZCUTBZc1MwRk1SQ3hOUVV0UExFbEJRVWtzYjBKQlFWRXNTMEZCVWl4RFFVRktMRVZCUVc5Q08wRkJRM3BDTEZWQlFVa3NRMEZCUXl4WlFVRk1MRVZCUVcxQ08wRkJRMnBDTEdGQlFVc3NTMEZCVEN4RFFVRlhMRWRCUVZnc1NVRkJhMElzUlVGQmJFSTdRVUZEUkRzN1FVRkZSQ3hWUVVGTkxGbEJRVmtzVFVGQlRTeE5RVUY0UWp0QlFVTkJMRmRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRV0lzUlVGQlowSXNTVUZCU1N4VFFVRndRaXhGUVVFclFpeEhRVUV2UWl4RlFVRnZRenRCUVVOc1F5eFpRVUZKTEV0QlFVc3NTMEZCVEN4RFFVRlhMRWRCUVZnc1JVRkJaMElzUTBGQmFFSXNUVUZCZFVJc1RVRkJUU3hEUVVGT0xFTkJRVE5DTEVWQlFYRkRPMEZCUTI1RExHVkJRVXNzUzBGQlRDeERRVUZYTEVkQlFWZ3NSVUZCWjBJc1EwRkJhRUlzU1VGQmNVSXNUVUZCVFN4RFFVRk9MRU5CUVhKQ08wRkJRMEVzWlVGQlN5eFZRVUZNTEVkQlFXdENMRWxCUVd4Q08wRkJRMFE3UVVGRFJqdEJRVU5HTEV0QldrMHNUVUZaUVN4SlFVRkpMR3RDUVVGTkxFdEJRVTRzUTBGQlNpeEZRVUZyUWp0QlFVTjJRaXhWUVVGSkxFTkJRVU1zV1VGQlRDeEZRVUZ0UWp0QlFVTnFRaXhoUVVGTExFdEJRVXdzUTBGQlZ5eEhRVUZZTEVsQlFXdENMRVZCUVd4Q08wRkJRMFE3TzBGQlJVUXNWMEZCU3l4SlFVRkpMRkZCUVZRc1NVRkJjVUlzUzBGQmNrSXNSVUZCTkVJN1FVRkRNVUlzV1VGQlNTeExRVUZMTEV0QlFVd3NRMEZCVnl4SFFVRllMRVZCUVdkQ0xGRkJRV2hDTEUxQlFUaENMRTFCUVUwc1VVRkJUaXhEUVVGc1F5eEZRVUZ0UkR0QlFVTnFSQ3hsUVVGTExFdEJRVXdzUTBGQlZ5eEhRVUZZTEVWQlFXZENMRkZCUVdoQ0xFbEJRVFJDTEUxQlFVMHNVVUZCVGl4RFFVRTFRanRCUVVOQkxHVkJRVXNzVlVGQlRDeEhRVUZyUWl4SlFVRnNRanRCUVVORU8wRkJRMFk3UVVGRFJqczdRVUZGUkN4UlFVRkpMRXRCUVVzc1ZVRkJWQ3hGUVVGeFFqdEJRVU51UWl4WFFVRkxMR0ZCUVV3c1EwRkJiVUlzU1VGQmJrSXNRMEZCZDBJc1IwRkJlRUk3UVVGRFJEdEJRVU5HTEVjN096czdPenM3T3p0eFFrRlBSQ3hOTEhGQ1FVRTBRanRCUVVGQkxGRkJRWEpDTEZkQlFYRkNMSGxFUVVGUUxFdEJRVTg3TzBGQlF6RkNMRkZCUVVrc1EwRkJReXhsUVVGbExFdEJRVXNzVlVGQmNrSXNTMEZCYjBNc1MwRkJTeXhSUVVFM1F5eEZRVUYxUkR0QlFVTnlSQ3hYUVVGTExGRkJRVXc3UVVGRFJEczdRVUZGUkN4VFFVRkxMR0ZCUVV3c1EwRkJiVUlzVFVGQmJrSXNSMEZCTkVJc1EwRkJOVUk3UVVGRFFTeFRRVUZMTEZWQlFVd3NSMEZCYTBJc1MwRkJiRUk3TzBGQlJVRXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdPenM3YTBKQlIxa3NVU0lzSW1acGJHVWlPaUpwYm1SbGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHOXVSbkpoYldWU1pXNWtaWElnZlNCbWNtOXRJQ2N1TGk5bWNtRnRaWE41Ym1Nbk8xeHVhVzF3YjNKMElIc2dhWE5CY25KaGVTd2dhWE5QWW1vc0lHbHpUblZ0TENCcGMxTjBjbWx1WnlCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1Oc1lYTnpJRkpsYm1SbGNtVnlJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNCMGFHbHpMbkpsYm1SbGNpQTlJSFJvYVhNdWNtVnVaR1Z5TG1KcGJtUW9kR2hwY3lrN1hHNWNiaUFnSUNCMGFHbHpMbkJ5YjNCeklEMGdlMXh1SUNBZ0lDQWdMaTR1ZEdocGN5NWpiMjV6ZEhKMVkzUnZjaTVrWldaaGRXeDBVSEp2Y0hNc1hHNGdJQ0FnSUNBdUxpNXdjbTl3YzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ2UzMDdYRzRnSUNBZ2RHaHBjeTVqYUdGdVoyVmtWbUZzZFdWeklEMGdXMTA3WEc0Z0lIMWNibHh1SUNBdktpcGNiaUFnSUNvZ1IyVjBJR04xY25KbGJuUWdjM1JoZEdVdVhHNGdJQ0FxSUVsbUlHQnJaWGxnSUdseklHNXZkQ0JrWldacGJtVmtMQ0J5WlhSMWNtNGdaVzUwYVhKbElHTmhZMmhsWkNCemRHRjBaUzVjYmlBZ0lDb2dTV1lnWUd0bGVXQWdhWE1nWkdWbWFXNWxaQ3dnY21WMGRYSnVJR05oWTJobFpDQjJZV3gxWlNCcFppQndjbVZ6Wlc1MExseHVJQ0FnS2lCSlppQmdhMlY1WUNCcGN5QmtaV1pwYm1Wa0lHRnVaQ0JqWVdOb1pXUWdkbUZzZFdVZ2FYTWdibTkwSUhCeVpYTmxiblFzSUhKbFlXUWdZVzVrSUhKbGRIVnliaTVjYmlBZ0lDb2dRSEJoY21GdElDQjdjM1J5YVc1bmZTQW9iM0IwYVc5dVlXd3BJR3RsZVNCdlppQjJZV3gxWlZ4dUlDQWdLaUJBY21WMGRYSnVJSHQyWVd4MVpYMWNiaUFnSUNvdlhHNGdJR2RsZENoclpYa3BJSHRjYmlBZ0lDQnBaaUFvYTJWNUtTQjdYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NXpkR0YwWlZ0clpYbGRJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YzNSaGRHVmJhMlY1WFR0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuSmxZV1FvYTJWNUtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWMzUmhkR1U3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTHlvcVhHNGdJQ0FxSUZKbFlXUWdkbUZzZFdVZ1lXTmpiM0prYVc1bklIUnZJR0J2YmxKbFlXUmdYRzRnSUNBcUlFQndZWEpoYlNBZ2UzTjBjbWx1WjMwZ1RtRnRaU0J2WmlCd2NtOXdaWEowZVNCMGJ5QnlaV0ZrWEc0Z0lDQXFJRUJ5WlhSMWNtNGdlMXQwZVhCbFhYMWNiaUFnSUNvdlhHNGdJSEpsWVdRb2EyVjVLU0I3WEc0Z0lDQWdhV1lnS0hSb2FYTXViMjVTWldGa0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV2YmxKbFlXUW9hMlY1S1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdktpcGNiaUFnSUNvZ1ZYQmtZWFJsSUdCemRHRjBaV0FnZDJsMGFDQnVaWGNnZG1Gc2RXVnpJR0Z1WkNCelkyaGxaSFZzWlNCZ2NtVnVaR1Z5WUM1Y2JpQWdJQ29nUUhCaGNtRnRJSHR2WW1wbFkzUjlJSFpoYkhWbGMxeHVJQ0FnS2lCQWNHRnlZVzBnZTNaaGJIVmxmU0IyWVd4MVpTQjBiM05sZEZ4dUlDQWdLaTljYmlBZ2MyVjBLQzR1TG1GeVozTXBJSHRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JR0Z5WjNOYk1WMGdQVDA5SUNkMWJtUmxabWx1WldRbktTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCYklIWmhiSFZsY3lCZElEMGdZWEpuY3p0Y2JpQWdJQ0FnSUM4dklGTmxkQ0J0ZFd4MGFYQnNaU0IyWVd4MVpYTmNiaUFnSUNBZ0lHWnZjaUFvWTI5dWMzUWdhMlY1SUdsdUlIWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ObGRGWmhiSFZsS0d0bGVTd2dkbUZzZFdWelcydGxlVjBwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCYklHdGxlU3dnZG1Gc2RXVWdYU0E5SUdGeVozTTdYRzRnSUNBZ0lDQjBhR2x6TG5ObGRGWmhiSFZsS0d0bGVTd2dkbUZzZFdVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBhR2x6TG1oaGMwTm9ZVzVuWldRcElIdGNiaUFnSUNBZ0lHOXVSbkpoYldWU1pXNWtaWElvZEdocGN5NXlaVzVrWlhJcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdMeThnUGlCWGFXeGxlU0F0SURZZ2FXNGdkR2hsSUUxdmNtNXBibWRjYmlBZ0x5b3FYRzRnSUNBcUlGTmxkQ0JoSUhOcGJtZHNaU0IyWVd4MVpWeHVJQ0FnS2lCSlppQmhJSE4wY21sdVp5QnZjaUJ1ZFcxaVpYSXNJSE5sZENCa2FYSmxZM1JzZVM1Y2JpQWdJQ29nU1dZZ1lXNGdiMkpxWldOMElHOXlJR0Z5Y21GNUxDQmpjbVZoZEdVZ2JtVjNJRzlpYW1WamRDQnZjaUJoY25KaGVWeHVJQ0FnS2lCcFppQnBkQ0JrYjJWemJpZDBJR0ZzY21WaFpIa2daWGhwYzNRdUlGUm9aVzRnYzJoaGJHeHZkeUJqYjIxd1lYSmxYRzRnSUNBcUlIUnZJSE5sZENCaGJtUWdZMjl0Y0dGeVpTQnBibVJwZG1sa2RXRnNJSFpoYkhWbGN5NWNiaUFnSUNvZ1QyNWxJRzltSUhSb1pTQmpiR1ZoY21WeUlHUnlZWGRpWVdOcmN5QmhibVFnWVc1dWIzbGhibU5sY3lCM2FYUm9YRzRnSUNBcUlIVnphVzVuSUcxMWRHRmliR1VnYVc1emRHVmhaQ0J2WmlCcGJXMTFkR0ZpYkdVZ2MzUmhkR1Z6TGx4dUlDQWdLaUJBY0dGeVlXMGdlMXQwZVhCbFhYMGdhMlY1WEc0Z0lDQXFJRUJ3WVhKaGJTQjdXM1I1Y0dWZGZTQjJZV3gxWlZ4dUlDQWdLaTljYmlBZ2MyVjBWbUZzZFdVb2EyVjVMQ0IyWVd4MVpTa2dlMXh1SUNBZ0lHTnZibk4wSUdOMWNuSmxiblJXWVd4MVpTQTlJSFJvYVhNdWMzUmhkR1ZiYTJWNVhUdGNibHh1SUNBZ0lDOHZJRWxtSUc1MWJXSmxjaUJ2Y2lCemRISnBibWNzSUhObGRDQmthWEpsWTNSc2VWeHVJQ0FnSUdsbUlDaHBjMDUxYlNoMllXeDFaU2tnZkh3Z2FYTlRkSEpwYm1jb2RtRnNkV1VwS1NCN1hHNGdJQ0FnSUNCcFppQW9ZM1Z5Y21WdWRGWmhiSFZsSUNFOVBTQjJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYwZ1BTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvWVhORGFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLR2x6UVhKeVlYa29kbUZzZFdVcEtTQjdYRzRnSUNBZ0lDQnBaaUFvSVdOMWNuSmxiblJXWVd4MVpTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsVzJ0bGVWMGdQU0JiWFR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ1kyOXVjM1FnYm5WdFZtRnNkV1Z6SUQwZ2RtRnNkV1V1YkdWdVozUm9PMXh1SUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxV1lXeDFaWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV6ZEdGMFpWdHJaWGxkVzJsZElDRTlQU0IyWVd4MVpWdHBYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFZ0cFhTQTlJSFpoYkhWbFcybGRPMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLR2x6VDJKcUtIWmhiSFZsS1NrZ2UxeHVJQ0FnSUNBZ2FXWWdLQ0ZqZFhKeVpXNTBWbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRjBaVnRyWlhsZElEMGdlMzA3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdadmNpQW9iR1YwSUhaaGJIVmxTMlY1SUdsdUlIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuTjBZWFJsVzJ0bGVWMWJkbUZzZFdWTFpYbGRJQ0U5UFNCMllXeDFaVnQyWVd4MVpVdGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYxYmRtRnNkV1ZMWlhsZElEMGdkbUZzZFdWYmRtRnNkV1ZMWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFHRnpRMmhoYm1kbFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9kR2hwY3k1b1lYTkRhR0Z1WjJWa0tTQjdYRzRnSUNBZ0lDQjBhR2x6TG1Ob1lXNW5aV1JXWVd4MVpYTXVjSFZ6YUNoclpYa3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzhxS2x4dUlDQWdLaUJHYVhKbGN5QmdiMjVTWlc1a1pYSmdJR2xtSUhaaGJIVmxjeUJvWVhabElHTm9ZVzVuWldRZ2IzSWdZR1p2Y21ObFVtVnVaR1Z5WUZ4dUlDQWdLaUJwY3lCelpYUWdkRzhnZEhKMVpTNWNiaUFnSUNvZ1FISmxkSFZ5YmlCN2RHaHBjMzFjYmlBZ0lDb3ZYRzRnSUhKbGJtUmxjaWhtYjNKalpWSmxibVJsY2lBOUlHWmhiSE5sS1NCN1hHNGdJQ0FnYVdZZ0tDaG1iM0pqWlZKbGJtUmxjaUI4ZkNCMGFHbHpMbWhoYzBOb1lXNW5aV1FwSUNZbUlIUm9hWE11YjI1U1pXNWtaWElwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViMjVTWlc1a1pYSW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjBhR2x6TG1Ob1lXNW5aV1JXWVd4MVpYTXViR1Z1WjNSb0lEMGdNRHRjYmlBZ0lDQjBhR2x6TG1oaGMwTm9ZVzVuWldRZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGSmxibVJsY21WeU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDU1NSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudCxcbiAgICBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbjogdHJ1ZVxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9yZW5kZXIgPSByZXF1aXJlKCcuL3JlbmRlcicpO1xuXG52YXIgX3JlbmRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW5kZXIpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZXMpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ1NTUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhDU1NSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBDU1NSZW5kZXJlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ1NTUmVuZGVyZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENTU1JlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBlbGVtZW50ID0gX3Byb3BzLmVsZW1lbnQ7XG4gICAgdmFyIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uID0gX3Byb3BzLmVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uO1xuXG4gICAgKDAsIF9yZW5kZXIyLmRlZmF1bHQpKGVsZW1lbnQsIHRoaXMuc3RhdGUsIHRoaXMuY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pO1xuICB9O1xuXG4gIENTU1JlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgdmFyIHZhbHVlVHlwZSA9IF92YWx1ZVR5cGVzMi5kZWZhdWx0W2tleV07XG5cbiAgICBpZiAoIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgICAgdmFyIGRvbVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClbKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoa2V5KV0gfHwgMDtcbiAgICAgIHJldHVybiB2YWx1ZVR5cGUgJiYgdmFsdWVUeXBlLnBhcnNlID8gdmFsdWVUeXBlLnBhcnNlKGRvbVZhbHVlKSA6IGRvbVZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWVUeXBlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVR5cGUuZGVmYXVsdCB8fCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDU1NSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dHJRa0UyUW1Vc1ZVRkJWU3hQUVVGV0xFVkJRVzFDTEV0QlFXNUNMRVZCUVRCQ08wRkJRM1pETEZOQlFVOHNTVUZCU1N4WFFVRktPMEZCUTB3c2IwSkJSRXM3UVVGRlRDeG5RMEZCTkVJN1FVRkdka0lzUzBGSFJpeExRVWhGTEVWQlFWQTdRVUZMUkN4RE96dEJRVzVEUkRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN096czdPenM3U1VGRlRTeFhPenM3T3pzN096czdkMEpCUTBvc1VTeDFRa0ZCVnp0QlFVRkJMR2xDUVVOMVF5eExRVUZMTEV0QlJEVkRPMEZCUVVFc1VVRkRSQ3hQUVVSRExGVkJRMFFzVDBGRVF6dEJRVUZCTEZGQlExRXNNRUpCUkZJc1ZVRkRVU3d3UWtGRVVqczdRVUZGVkN3d1FrRkJWU3hQUVVGV0xFVkJRVzFDTEV0QlFVc3NTMEZCZUVJc1JVRkJLMElzUzBGQlN5eGhRVUZ3UXl4RlFVRnRSQ3d3UWtGQmJrUTdRVUZEUkN4SE96dDNRa0ZGUkN4TkxHMUNRVUZQTEVjc1JVRkJTenRCUVVOV0xGRkJRVTBzV1VGQldTeHhRa0ZCWXl4SFFVRmtMRU5CUVd4Q096dEJRVVZCTEZGQlFVa3NRMEZCUXl4NVFrRkJaU3hIUVVGbUxFTkJRVXdzUlVGQk1FSTdRVUZCUVN4VlFVTm9RaXhQUVVSblFpeEhRVU5LTEV0QlFVc3NTMEZFUkN4RFFVTm9RaXhQUVVSblFqczdRVUZGZUVJc1ZVRkJUU3hYUVVGWExFOUJRVThzWjBKQlFWQXNRMEZCZDBJc1QwRkJlRUlzUlVGQmFVTXNTVUZCYWtNc1JVRkJkVU1zZDBKQlFWTXNSMEZCVkN4RFFVRjJReXhMUVVGNVJDeERRVUV4UlR0QlFVTkJMR0ZCUVZFc1lVRkJZU3hWUVVGVkxFdEJRWGhDTEVkQlFXbERMRlZCUVZVc1MwRkJWaXhEUVVGblFpeFJRVUZvUWl4RFFVRnFReXhIUVVFMlJDeFJRVUZ3UlR0QlFVTkVMRXRCU2tRc1RVRkpUenRCUVVOTUxGVkJRVWtzVTBGQlNpeEZRVUZsTzBGQlEySXNaVUZCVHl4VlFVRlZMRTlCUVZZc1NVRkJjVUlzUTBGQk5VSTdRVUZEUkN4UFFVWkVMRTFCUlU4N1FVRkRUQ3hsUVVGUExFTkJRVkE3UVVGRFJEdEJRVU5HTzBGQlEwWXNSeUlzSW1acGJHVWlPaUpwYm1SbGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCU1pXNWtaWEpsY2lCbWNtOXRJQ2N1TGk4bk8xeHVhVzF3YjNKMElISmxibVJsY2tOVFV5Qm1jbTl0SUNjdUwzSmxibVJsY2ljN1hHNXBiWEJ2Y25RZ2RISmhibk5tYjNKdFVISnZjSE1nWm5KdmJTQW5MaTkwY21GdWMyWnZjbTB0Y0hKdmNITW5PMXh1YVcxd2IzSjBJSFpoYkhWbFZIbHdaWE5OWVhBZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5YzdYRzVwYlhCdmNuUWdjSEpsWm1sNFpYSWdabkp2YlNBbkxpOXdjbVZtYVhobGNpYzdYRzVjYm1Oc1lYTnpJRU5UVTFKbGJtUmxjbVZ5SUdWNGRHVnVaSE1nVW1WdVpHVnlaWElnZTF4dUlDQnZibEpsYm1SbGNpZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHVnNaVzFsYm5Rc0lHVnVZV0pzWlVoaGNtUjNZWEpsUVdOalpXeGxjbUYwYVc5dUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJSEpsYm1SbGNrTlRVeWhsYkdWdFpXNTBMQ0IwYUdsekxuTjBZWFJsTENCMGFHbHpMbU5vWVc1blpXUldZV3gxWlhNc0lHVnVZV0pzWlVoaGNtUjNZWEpsUVdOalpXeGxjbUYwYVc5dUtUdGNiaUFnZlZ4dVhHNGdJRzl1VW1WaFpDaHJaWGtwSUh0Y2JpQWdJQ0JqYjI1emRDQjJZV3gxWlZSNWNHVWdQU0IyWVd4MVpWUjVjR1Z6VFdGd1cydGxlVjA3WEc1Y2JpQWdJQ0JwWmlBb0lYUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJR052Ym5OMElIc2daV3hsYldWdWRDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0FnSUdOdmJuTjBJR1J2YlZaaGJIVmxJRDBnZDJsdVpHOTNMbWRsZEVOdmJYQjFkR1ZrVTNSNWJHVW9aV3hsYldWdWRDd2diblZzYkNsYmNISmxabWw0WlhJb2EyVjVLVjBnZkh3Z01EdGNiaUFnSUNBZ0lISmxkSFZ5YmlBb2RtRnNkV1ZVZVhCbElDWW1JSFpoYkhWbFZIbHdaUzV3WVhKelpTa2dQeUIyWVd4MVpWUjVjR1V1Y0dGeWMyVW9aRzl0Vm1Gc2RXVXBJRG9nWkc5dFZtRnNkV1U3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHbG1JQ2gyWVd4MVpWUjVjR1VwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhaaGJIVmxWSGx3WlM1a1pXWmhkV3gwSUh4OElEQTdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z01EdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z0tHVnNaVzFsYm5Rc0lIQnliM0J6S1NCN1hHNGdJSEpsZEhWeWJpQnVaWGNnUTFOVFVtVnVaR1Z5WlhJb2UxeHVJQ0FnSUdWc1pXMWxiblFzWEc0Z0lDQWdaVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNDZJSFJ5ZFdVc1hHNGdJQ0FnTGk0dWNISnZjSE5jYmlBZ2ZTazdYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBTVkdSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudFxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVzKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTVkdSZW5kZXJlciA9IGZ1bmN0aW9uIChfUmVuZGVyZXIpIHtcbiAgX2luaGVyaXRzKFNWR1JlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIFNWR1JlbmRlcmVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNWR1JlbmRlcmVyKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICB2YXIgX3Byb3BzJGVsZW1lbnQkZ2V0QkJvID0gcHJvcHMuZWxlbWVudC5nZXRCQm94KCk7XG5cbiAgICB2YXIgeCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby54O1xuICAgIHZhciB5ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLnk7XG4gICAgdmFyIHdpZHRoID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLndpZHRoO1xuICAgIHZhciBoZWlnaHQgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8uaGVpZ2h0O1xuXG4gICAgX3RoaXMuZWxlbWVudERpbWVuc2lvbnMgPSB7IHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBTVkdSZW5kZXJlci5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgIHZhciBhdHRycyA9ICgwLCBfYnVpbGQyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIHRoaXMuZWxlbWVudERpbWVuc2lvbnMpO1xuICAgICgwLCBfdXRpbHMuc2V0RE9NQXR0cnMpKGVsZW1lbnQsIGF0dHJzKTtcbiAgfTtcblxuICBTVkdSZW5kZXJlci5wcm90b3R5cGUub25SZWFkID0gZnVuY3Rpb24gb25SZWFkKGtleSkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG5cbiAgICBpZiAoIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZhbHVlVHlwZSA9IF92YWx1ZVR5cGVzMi5kZWZhdWx0W2tleV07XG4gICAgICByZXR1cm4gdmFsdWVUeXBlID8gdmFsdWVUeXBlLmRlZmF1bHQgOiAwO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU1ZHUmVuZGVyZXI7XG59KF8yLmRlZmF1bHQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRyUWtGblEyVXNWVUZCVlN4UFFVRldMRVZCUVcxQ0xFdEJRVzVDTEVWQlFUQkNPMEZCUTNaRExGTkJRVThzU1VGQlNTeFhRVUZLTzBGQlEwdzdRVUZFU3l4TFFVVkdMRXRCUmtVc1JVRkJVRHRCUVVsRUxFTTdPMEZCY2tORU96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096czdPenM3U1VGRlRTeFhPenM3UVVGRFNpeDFRa0ZCV1N4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlFVRXNhVVJCUTJwQ0xIRkNRVUZOTEV0QlFVNHNRMEZFYVVJN08wRkJRVUVzWjBOQlIyVXNUVUZCVFN4UFFVRk9MRU5CUVdNc1QwRkJaQ3hGUVVobU96dEJRVUZCTEZGQlIxUXNRMEZJVXl4NVFrRkhWQ3hEUVVoVE8wRkJRVUVzVVVGSFRpeERRVWhOTEhsQ1FVZE9MRU5CU0UwN1FVRkJRU3hSUVVkSUxFdEJTRWNzZVVKQlIwZ3NTMEZJUnp0QlFVRkJMRkZCUjBrc1RVRklTaXg1UWtGSFNTeE5RVWhLT3p0QlFVbHFRaXhWUVVGTExHbENRVUZNTEVkQlFYbENMRVZCUVVVc1NVRkJSaXhGUVVGTExFbEJRVXdzUlVGQlVTeFpRVUZTTEVWQlFXVXNZMEZCWml4RlFVRjZRanRCUVVwcFFqdEJRVXRzUWpzN2QwSkJSVVFzVVN4MVFrRkJWenRCUVVGQkxGRkJRMFFzVDBGRVF5eEhRVU5YTEV0QlFVc3NTMEZFYUVJc1EwRkRSQ3hQUVVSRE96dEJRVVZVTEZGQlFVMHNVVUZCVVN4eFFrRkJUU3hMUVVGTExFdEJRVmdzUlVGQmEwSXNTMEZCU3l4cFFrRkJka0lzUTBGQlpEdEJRVU5CTERSQ1FVRlpMRTlCUVZvc1JVRkJjVUlzUzBGQmNrSTdRVUZEUkN4SE96dDNRa0ZGUkN4TkxHMUNRVUZQTEVjc1JVRkJTenRCUVVGQkxGRkJRMFlzVDBGRVJTeEhRVU5WTEV0QlFVc3NTMEZFWml4RFFVTkdMRTlCUkVVN096dEJRVWRXTEZGQlFVa3NRMEZCUXl4NVFrRkJaU3hIUVVGbUxFTkJRVXdzUlVGQk1FSTdRVUZEZUVJc1lVRkJUeXhSUVVGUkxGbEJRVklzUTBGQmNVSXNSMEZCY2tJc1EwRkJVRHRCUVVORUxFdEJSa1FzVFVGRlR6dEJRVU5NTEZWQlFVMHNXVUZCV1N4eFFrRkJZU3hIUVVGaUxFTkJRV3hDTzBGQlEwRXNZVUZCVVN4VFFVRkVMRWRCUVdNc1ZVRkJWU3hQUVVGNFFpeEhRVUZyUXl4RFFVRjZRenRCUVVORU8wRkJRMFlzUnlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlNaVzVrWlhKbGNpQm1jbTl0SUNjdUxpOG5PMXh1YVcxd2IzSjBJR0oxYVd4a0lHWnliMjBnSnk0dlluVnBiR1FuTzF4dWFXMXdiM0owSUhSeVlXNXpabTl5YlZCeWIzQnpJR1p5YjIwZ0p5NHVMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUhaaGJIVmxWSGx3WlUxaGNDQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpKenRjYm1sdGNHOXlkQ0I3SUhObGRFUlBUVUYwZEhKeklIMGdabkp2YlNBbkxpNHZMaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMnhoYzNNZ1UxWkhVbVZ1WkdWeVpYSWdaWGgwWlc1a2N5QlNaVzVrWlhKbGNpQjdYRzRnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6S1NCN1hHNGdJQ0FnYzNWd1pYSW9jSEp2Y0hNcE8xeHVYRzRnSUNBZ1kyOXVjM1FnZXlCNExDQjVMQ0IzYVdSMGFDd2dhR1ZwWjJoMElIMGdQU0J3Y205d2N5NWxiR1Z0Wlc1MExtZGxkRUpDYjNnb0tUdGNiaUFnSUNCMGFHbHpMbVZzWlcxbGJuUkVhVzFsYm5OcGIyNXpJRDBnZXlCNExDQjVMQ0IzYVdSMGFDd2dhR1ZwWjJoMElIMDdYRzRnSUgxY2JseHVJQ0J2YmxKbGJtUmxjaWdwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1ZzWlcxbGJuUWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnWTI5dWMzUWdZWFIwY25NZ1BTQmlkV2xzWkNoMGFHbHpMbk4wWVhSbExDQjBhR2x6TG1Wc1pXMWxiblJFYVcxbGJuTnBiMjV6S1R0Y2JpQWdJQ0J6WlhSRVQwMUJkSFJ5Y3lobGJHVnRaVzUwTENCaGRIUnljeWs3WEc0Z0lIMWNibHh1SUNCdmJsSmxZV1FvYTJWNUtTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCbGJHVnRaVzUwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdhV1lnS0NGMGNtRnVjMlp2Y20xUWNtOXdjMXRyWlhsZEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1pXeGxiV1Z1ZEM1blpYUkJkSFJ5YVdKMWRHVW9hMlY1S1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1ZVZVhCbElEMGdkbUZzZFdWVWVYQmxUV0Z3VzJ0bGVWMDdYRzRnSUNBZ0lDQnlaWFIxY200Z0tIWmhiSFZsVkhsd1pTa2dQeUIyWVd4MVpWUjVjR1V1WkdWbVlYVnNkQ0E2SURBN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUNobGJHVnRaVzUwTENCd2NtOXdjeWtnZTF4dUlDQnlaWFIxY200Z2JtVjNJRk5XUjFKbGJtUmxjbVZ5S0h0Y2JpQWdJQ0JsYkdWdFpXNTBMRnh1SUNBZ0lDNHVMbkJ5YjNCelhHNGdJSDBwTzF4dWZWeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgU1ZHUGF0aFJlbmRlcmVyKF9leHRlbmRzKHtcbiAgICBlbGVtZW50OiBlbGVtZW50XG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTVkdQYXRoUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhTVkdQYXRoUmVuZGVyZXIsIF9SZW5kZXJlcik7XG5cbiAgZnVuY3Rpb24gU1ZHUGF0aFJlbmRlcmVyKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNWR1BhdGhSZW5kZXJlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVuZGVyZXIuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgdmFyIF9wcm9wcyRlbGVtZW50JGdldEJCbyA9IHByb3BzLmVsZW1lbnQuZ2V0QkJveCgpO1xuXG4gICAgdmFyIHggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueDtcbiAgICB2YXIgeSA9IF9wcm9wcyRlbGVtZW50JGdldEJCby55O1xuICAgIHZhciB3aWR0aCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby53aWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLmhlaWdodDtcblxuICAgIF90aGlzLmVsZW1lbnREaW1lbnNpb25zID0ge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHksXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHBhdGhMZW5ndGg6IHByb3BzLmVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU1ZHUGF0aFJlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBwYXRoTGVuZ3RoID0gdGhpcy5lbGVtZW50RGltZW5zaW9ucy5wYXRoTGVuZ3RoO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgKDAsIF91dGlscy5zZXRET01BdHRycykoZWxlbWVudCwgKDAsIF9idWlsZDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgcGF0aExlbmd0aCkpO1xuICB9O1xuXG4gIFNWR1BhdGhSZW5kZXJlci5wcm90b3R5cGUub25SZWFkID0gZnVuY3Rpb24gb25SZWFkKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gIH07XG5cbiAgcmV0dXJuIFNWR1BhdGhSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTFhCaGRHZ3ZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzJ0Q1FUWkNaU3hWUVVGVkxFOUJRVllzUlVGQmJVSXNTMEZCYmtJc1JVRkJNRUk3UVVGRGRrTXNVMEZCVHl4SlFVRkpMR1ZCUVVvN1FVRkRURHRCUVVSTExFdEJSVVlzUzBGR1JTeEZRVUZRTzBGQlNVUXNRenM3UVVGc1EwUTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3T3pzN08wbEJSVTBzWlRzN08wRkJRMG9zTWtKQlFWa3NTMEZCV2l4RlFVRnRRanRCUVVGQk96dEJRVUZCTEdsRVFVTnFRaXh4UWtGQlRTeExRVUZPTEVOQlJHbENPenRCUVVGQkxHZERRVWRsTEUxQlFVMHNUMEZCVGl4RFFVRmpMRTlCUVdRc1JVRklaanM3UVVGQlFTeFJRVWRVTEVOQlNGTXNlVUpCUjFRc1EwRklVenRCUVVGQkxGRkJSMDRzUTBGSVRTeDVRa0ZIVGl4RFFVaE5PMEZCUVVFc1VVRkhTQ3hMUVVoSExIbENRVWRJTEV0QlNFYzdRVUZCUVN4UlFVZEpMRTFCU0Vvc2VVSkJSMGtzVFVGSVNqczdRVUZKYWtJc1ZVRkJTeXhwUWtGQlRDeEhRVUY1UWp0QlFVTjJRaXhWUVVSMVFqdEJRVVYyUWl4VlFVWjFRanRCUVVkMlFpeHJRa0ZJZFVJN1FVRkpka0lzYjBKQlNuVkNPMEZCUzNaQ0xHdENRVUZaTEUxQlFVMHNUMEZCVGl4RFFVRmpMR05CUVdRN1FVRk1WeXhMUVVGNlFqdEJRVXBwUWp0QlFWZHNRanM3TkVKQlJVUXNVU3gxUWtGQlZ6dEJRVUZCTEZGQlEwUXNWVUZFUXl4SFFVTmpMRXRCUVVzc2FVSkJSRzVDTEVOQlEwUXNWVUZFUXp0QlFVRkJMRkZCUlVRc1QwRkdReXhIUVVWWExFdEJRVXNzUzBGR2FFSXNRMEZGUkN4UFFVWkRPenRCUVVkVUxEUkNRVUZaTEU5QlFWb3NSVUZCY1VJc2NVSkJRVTBzUzBGQlN5eExRVUZZTEVWQlFXdENMRlZCUVd4Q0xFTkJRWEpDTzBGQlEwUXNSenM3TkVKQlJVUXNUU3h0UWtGQlR5eEhMRVZCUVVzN1FVRkRWaXhYUVVGUExFdEJRVXNzUzBGQlRDeERRVUZYTEU5QlFWZ3NRMEZCYlVJc1dVRkJia0lzUTBGQlowTXNSMEZCYUVNc1EwRkJVRHRCUVVORUxFY2lMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVW1WdVpHVnlaWElnWm5KdmJTQW5MaTR2Snp0Y2JtbHRjRzl5ZENCaWRXbHNaQ0JtY205dElDY3VMMkoxYVd4a0p6dGNibWx0Y0c5eWRDQjdJSE5sZEVSUFRVRjBkSEp6SUgwZ1puSnZiU0FuTGk0dkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyeGhjM01nVTFaSFVHRjBhRkpsYm1SbGNtVnlJR1Y0ZEdWdVpITWdVbVZ1WkdWeVpYSWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhOMWNHVnlLSEJ5YjNCektUdGNibHh1SUNBZ0lHTnZibk4wSUhzZ2VDd2dlU3dnZDJsa2RHZ3NJR2hsYVdkb2RDQjlJRDBnY0hKdmNITXVaV3hsYldWdWRDNW5aWFJDUW05NEtDazdYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBSR2x0Wlc1emFXOXVjeUE5SUh0Y2JpQWdJQ0FnSUhnc1hHNGdJQ0FnSUNCNUxGeHVJQ0FnSUNBZ2QybGtkR2dzWEc0Z0lDQWdJQ0JvWldsbmFIUXNYRzRnSUNBZ0lDQndZWFJvVEdWdVozUm9PaUJ3Y205d2N5NWxiR1Z0Wlc1MExtZGxkRlJ2ZEdGc1RHVnVaM1JvS0NsY2JpQWdJQ0I5TzF4dUlDQjlYRzVjYmlBZ2IyNVNaVzVrWlhJb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCd1lYUm9UR1Z1WjNSb0lIMGdQU0IwYUdsekxtVnNaVzFsYm5SRWFXMWxibk5wYjI1ek8xeHVJQ0FnSUdOdmJuTjBJSHNnWld4bGJXVnVkQ0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCelpYUkVUMDFCZEhSeWN5aGxiR1Z0Wlc1MExDQmlkV2xzWkNoMGFHbHpMbk4wWVhSbExDQndZWFJvVEdWdVozUm9LU2s3WEc0Z0lIMWNibHh1SUNCdmJsSmxZV1FvYTJWNUtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjSEp2Y0hNdVpXeGxiV1Z1ZEM1blpYUkJkSFJ5YVdKMWRHVW9hMlY1S1R0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlBb1pXeGxiV1Z1ZEN3Z2NISnZjSE1wSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJUVmtkUVlYUm9VbVZ1WkdWeVpYSW9lMXh1SUNBZ0lHVnNaVzFsYm5Rc1hHNGdJQ0FnTGk0dWNISnZjSE5jYmlBZ2ZTazdYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNwbGl0Q29sb3JWYWx1ZXMgPSBzcGxpdENvbG9yVmFsdWVzO1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xufTtcblxudmFyIENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xudmFyIFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xudmFyIEhBU19QRVJGT1JNQU5DRV9OT1cgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdztcblxuLypcbiAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY2FtZWxUb0Rhc2ggPSBleHBvcnRzLmNhbWVsVG9EYXNoID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuLypcbiAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgXG4gIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG52YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLmN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xufSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxudmFyIHNldERPTUF0dHJzID0gZXhwb3J0cy5zZXRET01BdHRycyA9IGZ1bmN0aW9uIChlbGVtZW50LCBhdHRycykge1xuICBmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG4gIH1cbn07XG4vKlxuICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgXCJmb28sYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdENvbW1hRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG59O1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIGFueSBhcmd1bWVudCBmb3IgYHRlcm1gXG4gKiBgY29udGFpbnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG52YXIgY29udGFpbnMgPSBleHBvcnRzLmNvbnRhaW5zID0gZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSAhPT0gLTE7XG4gIH07XG59O1xuXG4vKipcbiAqICBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIHRvIHNlZSBpZiBhbiBhcmd1bWVudCBpc1xuICogIHRoZSBmaXJzdCBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBgdGVybWBcbiAqIGBpc0ZpcnN0Q2hhcnMoJ25lZWRsZScpKCdoYXlzdGFjaycpYFxuICovXG52YXIgaXNGaXJzdENoYXJzID0gZXhwb3J0cy5pc0ZpcnN0Q2hhcnMgPSBmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodGVybSkgJiYgdi5pbmRleE9mKHRlcm0pID09PSAwO1xuICB9O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSB1bml0IHZhbHVlIHR5cGVcbiAqL1xudmFyIGNyZWF0ZVVuaXRUeXBlID0gZXhwb3J0cy5jcmVhdGVVbml0VHlwZSA9IGZ1bmN0aW9uICh0eXBlLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIHtcbiAgICB0ZXN0OiBjb250YWlucyh0eXBlKSxcbiAgICBwYXJzZTogcGFyc2VGbG9hdCxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICB9O1xufTtcblxuLypcbiAgR2V0IHZhbHVlIGZyb20gZnVuY3Rpb24gc3RyaW5nXG4gIFwidHJhbnNsYXRlWCgyMHB4KVwiIC0+IFwiMjBweFwiXG4qL1xudmFyIGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHNwbGl0IGNvbG9yXG4gKiB2YWx1ZXMgZnJvbSBzdHJpbmcgaW50byBhbiBvYmplY3Qgb2YgcHJvcGVydGllc1xuICogYG1hcEFycmF5VG9PYmplY3QoWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddKSgncmdiYSgwLDAsMCknKWBcbiAqL1xuZnVuY3Rpb24gc3BsaXRDb2xvclZhbHVlcyh0ZXJtcykge1xuICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHZhbHVlcyA9IHt9O1xuICAgIHZhciB2YWx1ZXNBcnJheSA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodikpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICB2YWx1ZXNbdGVybXNbaV1dID0gdmFsdWVzQXJyYXlbaV0gIT09IHVuZGVmaW5lZCA/IHBhcnNlRmxvYXQodmFsdWVzQXJyYXlbaV0pIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xufVxuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbnZhciBpc051bSA9IGV4cG9ydHMuaXNOdW0gPSBmdW5jdGlvbiAobnVtKSB7XG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xudmFyIGlzT2JqID0gZXhwb3J0cy5pc09iaiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbnZhciBpc1N0cmluZyA9IGV4cG9ydHMuaXNTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbnZhciBpc0hleCA9IGV4cG9ydHMuaXNIZXggPSBpc0ZpcnN0Q2hhcnMoJyMnKTtcbnZhciBpc1JnYiA9IGV4cG9ydHMuaXNSZ2IgPSBpc0ZpcnN0Q2hhcnMoJ3JnYicpO1xudmFyIGlzSHNsID0gZXhwb3J0cy5pc0hzbCA9IGlzRmlyc3RDaGFycygnaHNsJyk7XG52YXIgaXNDb2xvciA9IGV4cG9ydHMuaXNDb2xvciA9IGZ1bmN0aW9uICh2KSB7XG4gIHJldHVybiBpc0hleCh2KSB8fCBpc1JnYih2KSB8fCBpc0hzbCh2KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZFhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzFGQk5rVm5RaXhuUWl4SFFVRkJMR2RDTzBGQk4wVm9RaXhKUVVGTkxGVkJRVlVzVlVGQlF5eFJRVUZFTzBGQlFVRXNVMEZCWXl4UFFVRlBMRk5CUVZBc1EwRkJhVUlzVVVGQmFrSXNRMEZCTUVJc1NVRkJNVUlzUTBGQkswSXNVVUZCTDBJc1JVRkJlVU1zUzBGQmVrTXNRMEZCSzBNc1EwRkJMME1zUlVGQmEwUXNRMEZCUXl4RFFVRnVSQ3hEUVVGa08wRkJRVUVzUTBGQmFFSTdPMEZCUlVFc1NVRkJUU3h4UWtGQmNVSXNhVUpCUVROQ08wRkJRMEVzU1VGQlRTeHRRa0ZCYlVJc1QwRkJla0k3UVVGRFFTeEpRVUZOTEhOQ1FVRjFRaXhQUVVGUExGZEJRVkFzUzBGQmRVSXNWMEZCZGtJc1NVRkJjME1zV1VGQldTeEhRVUV2UlRzN096czdPenM3UVVGUlR5eEpRVUZOTEc5RFFVRmpMRlZCUVVNc1RVRkJSRHRCUVVGQkxGTkJRVmtzVDBGQlR5eFBRVUZRTEVOQlFXVXNhMEpCUVdZc1JVRkJiVU1zWjBKQlFXNURMRVZCUVhGRUxGZEJRWEpFTEVWQlFWbzdRVUZCUVN4RFFVRndRanM3T3pzN096dEJRVTlCTEVsQlFVMHNiME5CUVdNc2MwSkJRWE5DTzBGQlFVRXNVMEZCVFN4WlFVRlpMRWRCUVZvc1JVRkJUanRCUVVGQkxFTkJRWFJDTEVkQlFXZEVPMEZCUVVFc1UwRkJUU3hKUVVGSkxFbEJRVW9zUjBGQlZ5eFBRVUZZTEVWQlFVNDdRVUZCUVN4RFFVRndSVHM3UVVGRlFTeEpRVUZOTEc5RFFVRmpMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFdEJRVllzUlVGQmIwSTdRVUZETjBNc1QwRkJTeXhKUVVGSkxFZEJRVlFzU1VGQlowSXNTMEZCYUVJc1JVRkJkVUk3UVVGRGNrSXNVVUZCU1N4TlFVRk5MR05CUVU0c1EwRkJjVUlzUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNM1FpeGpRVUZSTEZsQlFWSXNRMEZCY1VJc1IwRkJja0lzUlVGQk1FSXNUVUZCVFN4SFFVRk9MRU5CUVRGQ08wRkJRMFE3UVVGRFJqdEJRVU5HTEVOQlRrMDdPenM3T3pzN096dEJRV1ZCTEVsQlFVMHNiMFJCUVhOQ0xGVkJRVU1zUzBGQlJEdEJRVUZCTEZOQlFWY3NVMEZCVXl4TFFVRlVMRWxCUVd0Q0xFMUJRVTBzUzBGQlRpeERRVUZaTEUxQlFWb3NRMEZCYkVJc1IwRkJkME1zUTBGQlF5eExRVUZFTEVOQlFXNUVPMEZCUVVFc1EwRkJOVUk3T3pzN096dEJRVTFCTEVsQlFVMHNPRUpCUVZjc1ZVRkJReXhKUVVGRU8wRkJRVUVzVTBGQlZTeFZRVUZETEVOQlFVUXNSVUZCVHp0QlFVTjJReXhYUVVGUkxGTkJRVk1zU1VGQlZDeExRVUZyUWl4RlFVRkZMRTlCUVVZc1EwRkJWU3hKUVVGV0xFMUJRVzlDTEVOQlFVTXNRMEZCTDBNN1FVRkRSQ3hIUVVaMVFqdEJRVUZCTEVOQlFXcENPenM3T3pzN08wRkJVMEVzU1VGQlRTeHpRMEZCWlN4VlFVRkRMRWxCUVVRN1FVRkJRU3hUUVVGVkxGVkJRVU1zUTBGQlJDeEZRVUZQTzBGQlF6TkRMRmRCUVZFc1UwRkJVeXhKUVVGVUxFdEJRV3RDTEVWQlFVVXNUMEZCUml4RFFVRlZMRWxCUVZZc1RVRkJiMElzUTBGQk9VTTdRVUZEUkN4SFFVWXlRanRCUVVGQkxFTkJRWEpDT3pzN096dEJRVTlCTEVsQlFVMHNNRU5CUVdsQ0xGVkJRVU1zU1VGQlJDeEZRVUZQTEZOQlFWQXNSVUZCY1VJN1FVRkRha1FzVTBGQlR6dEJRVU5NTEZWQlFVMHNVMEZCVXl4SlFVRlVMRU5CUkVRN1FVRkZUQ3hYUVVGUExGVkJSa1k3UVVGSFREdEJRVWhMTEVkQlFWQTdRVUZMUkN4RFFVNU5PenM3T3pzN1FVRlpRU3hKUVVGTkxHdEZRVUUyUWl4VlFVRkRMRXRCUVVRN1FVRkJRU3hUUVVGWExFMUJRVTBzVTBGQlRpeERRVUZuUWl4TlFVRk5MRTlCUVU0c1EwRkJZeXhIUVVGa0xFbEJRWEZDTEVOQlFYSkRMRVZCUVhkRExFMUJRVTBzVjBGQlRpeERRVUZyUWl4SFFVRnNRaXhEUVVGNFF5eERRVUZZTzBGQlFVRXNRMEZCYmtNN096czdPenM3UVVGUFFTeFRRVUZUTEdkQ1FVRlVMRU5CUVRCQ0xFdEJRVEZDTEVWQlFXbERPMEZCUTNSRExFMUJRVTBzVjBGQlZ5eE5RVUZOTEUxQlFYWkNPenRCUVVWQkxGTkJRVThzVlVGQlZTeERRVUZXTEVWQlFXRTdRVUZEYkVJc1VVRkJUU3hUUVVGVExFVkJRV1k3UVVGRFFTeFJRVUZOTEdOQlFXTXNiMEpCUVc5Q0xESkNRVUV5UWl4RFFVRXpRaXhEUVVGd1FpeERRVUZ3UWpzN1FVRkZRU3hUUVVGTExFbEJRVWtzU1VGQlNTeERRVUZpTEVWQlFXZENMRWxCUVVrc1VVRkJjRUlzUlVGQk9FSXNSMEZCT1VJc1JVRkJiVU03UVVGRGFrTXNZVUZCVHl4TlFVRk5MRU5CUVU0c1EwRkJVQ3hKUVVGdlFpeFpRVUZaTEVOQlFWb3NUVUZCYlVJc1UwRkJjRUlzUjBGQmFVTXNWMEZCVnl4WlFVRlpMRU5CUVZvc1EwRkJXQ3hEUVVGcVF5eEhRVUU0UkN4RFFVRnFSanRCUVVORU96dEJRVVZFTEZkQlFVOHNUVUZCVUR0QlFVTkVMRWRCVkVRN1FVRlZSRHM3T3pzN096czdRVUZSVFN4SlFVRk5MRFJDUVVGVkxGVkJRVU1zUjBGQlJEdEJRVUZCTEZOQlFWTXNVVUZCVVN4SFFVRlNMRTFCUVdsQ0xFOUJRVEZDTzBGQlFVRXNRMEZCYUVJN096czdPenM3TzBGQlVVRXNTVUZCVFN3d1FrRkJVeXhWUVVGRExFZEJRVVE3UVVGQlFTeFRRVUZUTEZGQlFWRXNSMEZCVWl4TlFVRnBRaXhWUVVFeFFqdEJRVUZCTEVOQlFXWTdPenM3T3pzN08wRkJVVUVzU1VGQlRTeDNRa0ZCVVN4VlFVRkRMRWRCUVVRN1FVRkJRU3hUUVVGVExFOUJRVThzUjBGQlVDeExRVUZsTEZGQlFYaENPMEZCUVVFc1EwRkJaRHM3T3pzN096czdRVUZSUVN4SlFVRk5MSGRDUVVGUkxGVkJRVU1zUjBGQlJEdEJRVUZCTEZOQlFWTXNUMEZCVHl4SFFVRlFMRXRCUVdVc1VVRkJlRUk3UVVGQlFTeERRVUZrT3pzN096czdPenRCUVZGQkxFbEJRVTBzT0VKQlFWY3NWVUZCUXl4SFFVRkVPMEZCUVVFc1UwRkJVeXhQUVVGUExFZEJRVkFzUzBGQlpTeFJRVUY0UWp0QlFVRkJMRU5CUVdwQ096dEJRVVZCTEVsQlFVMHNkMEpCUVZFc1lVRkJZU3hIUVVGaUxFTkJRV1E3UVVGRFFTeEpRVUZOTEhkQ1FVRlJMR0ZCUVdFc1MwRkJZaXhEUVVGa08wRkJRMEVzU1VGQlRTeDNRa0ZCVVN4aFFVRmhMRXRCUVdJc1EwRkJaRHRCUVVOQkxFbEJRVTBzTkVKQlFWVXNWVUZCUXl4RFFVRkVPMEZCUVVFc1UwRkJVU3hOUVVGTkxFTkJRVTRzUzBGQldTeE5RVUZOTEVOQlFVNHNRMEZCV2l4SlFVRjNRaXhOUVVGTkxFTkJRVTRzUTBGQmFFTTdRVUZCUVN4RFFVRm9RaUlzSW1acGJHVWlPaUoxZEdsc2N5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltTnZibk4wSUhaaGNsUjVjR1VnUFNBb2RtRnlhV0ZpYkdVcElEMCtJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVkRzlUZEhKcGJtY3VZMkZzYkNoMllYSnBZV0pzWlNrdWMyeHBZMlVvT0N3Z0xURXBPMXh1WEc1amIyNXpkQ0JEUVUxRlRGOURRVk5GWDFCQlZGUkZVazRnUFNBdktGdGhMWHBkS1NoYlFTMWFYU2t2Wnp0Y2JtTnZibk4wSUZKRlVFeEJRMFZmVkVWTlVFeEJWRVVnUFNBbkpERXRKREluTzF4dVkyOXVjM1FnU0VGVFgxQkZVa1pQVWsxQlRrTkZYMDVQVnlBOUlDaDBlWEJsYjJZZ2NHVnlabTl5YldGdVkyVWdJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JSEJsY21admNtMWhibU5sTG01dmR5azdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdZMkZ0Wld4RFlYTmxJSFJ2SUdSaGMyZ3RZMkZ6WlZ4dVhHNGdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0JBY21WMGRYSnVJRnR6ZEhKcGJtZGRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR05oYldWc1ZHOUVZWE5vSUQwZ0tITjBjbWx1WnlrZ1BUNGdjM1J5YVc1bkxuSmxjR3hoWTJVb1EwRk5SVXhmUTBGVFJWOVFRVlJVUlZKT0xDQlNSVkJNUVVORlgxUkZUVkJNUVZSRktTNTBiMHh2ZDJWeVEyRnpaU2dwTzF4dVhHNHZLbHh1SUNCSFpXNWxjbUYwWlNCamRYSnlaVzUwSUhScGJXVnpkR0Z0Y0Z4dUlDQmNiaUFnUUhKbGRIVnliaUJiZEdsdFpYTjBZVzF3WFRvZ1EzVnljbVZ1ZENCVlRrbFlJSFJwYldWemRHRnRjRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqZFhKeVpXNTBWR2x0WlNBOUlFaEJVMTlRUlZKR1QxSk5RVTVEUlY5T1QxY2dQeUFvS1NBOVBpQndaWEptYjNKdFlXNWpaUzV1YjNjb0tTQTZJQ2dwSUQwK0lHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjMlYwUkU5TlFYUjBjbk1nUFNBb1pXeGxiV1Z1ZEN3Z1lYUjBjbk1wSUQwK0lIdGNiaUFnWm05eUlDaHNaWFFnYTJWNUlHbHVJR0YwZEhKektTQjdYRzRnSUNBZ2FXWWdLR0YwZEhKekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJR1ZzWlcxbGJuUXVjMlYwUVhSMGNtbGlkWFJsS0d0bGVTd2dZWFIwY25OYmEyVjVYU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNTlPMXh1THlwY2JpQWdVM0JzYVhRZ1kyOXRiV0V0WkdWc2FXMXBkR1ZrSUhOMGNtbHVaMXh1WEc0Z0lGd2labTl2TEdKaGNsd2lJQzArSUZ0Y0ltWnZiMXdpTENCY0ltSmhjbHdpWFZ4dVhHNGdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0JBY21WMGRYSnVJRnRoY25KaGVWMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JzYVhSRGIyMXRZVVJsYkdsdGFYUmxaQ0E5SUNoMllXeDFaU2tnUFQ0Z2FYTlRkSEpwYm1jb2RtRnNkV1VwSUQ4Z2RtRnNkV1V1YzNCc2FYUW9MeXhjWEhNcUx5a2dPaUJiZG1Gc2RXVmRPMXh1WEc0dktpcGNiaUFxSUNCU1pYUjFjbTV6SUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ0IzYVd4c0lHTm9aV05ySUdGdWVTQmhjbWQxYldWdWRDQm1iM0lnWUhSbGNtMWdYRzRnS2lCZ1kyOXVkR0ZwYm5Nb0oyNWxaV1JzWlNjcEtDZG9ZWGx6ZEdGamF5Y3BZRnh1SUNvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTI5dWRHRnBibk1nUFNBb2RHVnliU2tnUFQ0Z0tIWXBJRDArSUh0Y2JpQWdjbVYwZFhKdUlDaHBjMU4wY21sdVp5aDBaWEp0S1NBbUppQjJMbWx1WkdWNFQyWW9kR1Z5YlNrZ0lUMDlJQzB4S1R0Y2JuMDdYRzVjYmk4cUtseHVJQ29nSUZKbGRIVnlibk1nWVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z1kyaGxZMnNnZEc4Z2MyVmxJR2xtSUdGdUlHRnlaM1Z0Wlc1MElHbHpYRzRnS2lBZ2RHaGxJR1pwY25OMElHTm9ZWEpoWTNSbGNuTWdhVzRnZEdobElIQnliM1pwWkdWa0lHQjBaWEp0WUZ4dUlDb2dZR2x6Um1seWMzUkRhR0Z5Y3lnbmJtVmxaR3hsSnlrb0oyaGhlWE4wWVdOckp5bGdYRzRnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzBacGNuTjBRMmhoY25NZ1BTQW9kR1Z5YlNrZ1BUNGdLSFlwSUQwK0lIdGNiaUFnY21WMGRYSnVJQ2hwYzFOMGNtbHVaeWgwWlhKdEtTQW1KaUIyTG1sdVpHVjRUMllvZEdWeWJTa2dQVDA5SURBcE8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCRGNtVmhkR1VnWVNCMWJtbDBJSFpoYkhWbElIUjVjR1ZjYmlBcUwxeHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVlZ1YVhSVWVYQmxJRDBnS0hSNWNHVXNJSFJ5WVc1elptOXliU2tnUFQ0Z2UxeHVJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lIUmxjM1E2SUdOdmJuUmhhVzV6S0hSNWNHVXBMRnh1SUNBZ0lIQmhjbk5sT2lCd1lYSnpaVVpzYjJGMExGeHVJQ0FnSUhSeVlXNXpabTl5YlZ4dUlDQjlPMXh1ZlR0Y2JseHVMeXBjYmlBZ1IyVjBJSFpoYkhWbElHWnliMjBnWm5WdVkzUnBiMjRnYzNSeWFXNW5YRzRnSUZ3aWRISmhibk5zWVhSbFdDZ3lNSEI0S1Z3aUlDMCtJRndpTWpCd2VGd2lYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2RsZEZaaGJIVmxSbkp2YlVaMWJtTjBhVzl1VTNSeWFXNW5JRDBnS0haaGJIVmxLU0E5UGlCMllXeDFaUzV6ZFdKemRISnBibWNvZG1Gc2RXVXVhVzVrWlhoUFppZ25LQ2NwSUNzZ01Td2dkbUZzZFdVdWJHRnpkRWx1WkdWNFQyWW9KeWtuS1NrN1hHNWNiaThxS2x4dUlDb2dRM0psWVhSbGN5QmhJR1oxYm1OMGFXOXVJSFJvWVhRZ2QybHNiQ0J6Y0d4cGRDQmpiMnh2Y2x4dUlDb2dkbUZzZFdWeklHWnliMjBnYzNSeWFXNW5JR2x1ZEc4Z1lXNGdiMkpxWldOMElHOW1JSEJ5YjNCbGNuUnBaWE5jYmlBcUlHQnRZWEJCY25KaGVWUnZUMkpxWldOMEtGc25jbVZrSnl3Z0oyZHlaV1Z1Snl3Z0oySnNkV1VuWFNrb0ozSm5ZbUVvTUN3d0xEQXBKeWxnWEc0Z0tpOWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnpjR3hwZEVOdmJHOXlWbUZzZFdWektIUmxjbTF6S1NCN1hHNGdJR052Ym5OMElHNTFiVlJsY20xeklEMGdkR1Z5YlhNdWJHVnVaM1JvTzF4dVhHNGdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQW9kaWtnZTF4dUlDQWdJR052Ym5OMElIWmhiSFZsY3lBOUlIdDlPMXh1SUNBZ0lHTnZibk4wSUhaaGJIVmxjMEZ5Y21GNUlEMGdjM0JzYVhSRGIyMXRZVVJsYkdsdGFYUmxaQ2huWlhSV1lXeDFaVVp5YjIxR2RXNWpkR2x2YmxOMGNtbHVaeWgyS1NrN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVlJsY20xek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUhaaGJIVmxjMXQwWlhKdGMxdHBYVjBnUFNBb2RtRnNkV1Z6UVhKeVlYbGJhVjBnSVQwOUlIVnVaR1ZtYVc1bFpDa2dQeUJ3WVhKelpVWnNiMkYwS0haaGJIVmxjMEZ5Y21GNVcybGRLU0E2SURFN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFpoYkhWbGN6dGNiaUFnZlR0Y2JuMWNibHh1THlwY2JpQWdTWE1nZFhScGJITWdkbUZ5SUdGdUlHRnljbUY1SUQ4Z1hHNGdJRnh1SUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMWRHbHNjeTUyWVhKVWVYQmxJRDA5UFNBblFYSnlZWGtuWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselFYSnlZWGtnUFNBb1lYSnlLU0E5UGlCMllYSlVlWEJsS0dGeWNpa2dQVDA5SUNkQmNuSmhlU2M3WEc1Y2JpOHFYRzRnSUVseklIVjBhV3h6SUhaaGNpQmhJR1oxYm1OMGFXOXVJRDhnWEc0Z0lGeHVJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIxZEdsc2N5NTJZWEpVZVhCbElEMDlQU0FuUm5WdVkzUnBiMjRuWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselJuVnVZeUE5SUNodlltb3BJRDArSUhaaGNsUjVjR1VvYjJKcUtTQTlQVDBnSjBaMWJtTjBhVzl1Snp0Y2JseHVMeXBjYmlBZ1NYTWdkWFJwYkhNZ2RtRnlJR0VnYm5WdFltVnlQMXh1SUNCY2JpQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkSGx3Wlc5bUlEMDlQU0FuYm5WdFltVnlKMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzA1MWJTQTlJQ2h1ZFcwcElEMCtJSFI1Y0dWdlppQnVkVzBnUFQwOUlDZHVkVzFpWlhJbk8xeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVc0Z2IySnFaV04wUDF4dUlDQmNiaUFnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZEhsd1pXOW1JRDA5UFNBbmIySnFaV04wSjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwOWlhaUE5SUNodlltb3BJRDArSUhSNWNHVnZaaUJ2WW1vZ1BUMDlJQ2R2WW1wbFkzUW5PMXh1WEc0dktseHVJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lTQnpkSEpwYm1jZ1B5QmNiaUFnWEc0Z0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIUjVjR1Z2WmlCemRISWdQVDA5SUNkemRISnBibWNuWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselUzUnlhVzVuSUQwZ0tITjBjaWtnUFQ0Z2RIbHdaVzltSUhOMGNpQTlQVDBnSjNOMGNtbHVaeWM3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzBobGVDQTlJR2x6Um1seWMzUkRhR0Z5Y3lnbkl5Y3BPMXh1Wlhod2IzSjBJR052Ym5OMElHbHpVbWRpSUQwZ2FYTkdhWEp6ZEVOb1lYSnpLQ2R5WjJJbktUdGNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwaHpiQ0E5SUdselJtbHljM1JEYUdGeWN5Z25hSE5zSnlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhORGIyeHZjaUE5SUNoMktTQTlQaUFvYVhOSVpYZ29kaWtnZkh3Z2FYTlNaMklvZGlrZ2ZId2dhWE5JYzJ3b2Rpa3BPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29sb3IgPSBleHBvcnRzLmhzbGEgPSBleHBvcnRzLnJnYmEgPSBleHBvcnRzLmhleCA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIGhleCA9IGV4cG9ydHMuaGV4ID0gZnVuY3Rpb24gKHYpIHtcbiAgdmFyIHIgPSB2b2lkIDAsXG4gICAgICBnID0gdm9pZCAwLFxuICAgICAgYiA9IHZvaWQgMDtcblxuICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICBpZiAodi5sZW5ndGggPiA0KSB7XG4gICAgciA9IHYuc3Vic3RyKDEsIDIpO1xuICAgIGcgPSB2LnN1YnN0cigzLCAyKTtcbiAgICBiID0gdi5zdWJzdHIoNSwgMik7XG5cbiAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICB9IGVsc2Uge1xuICAgIHIgPSB2LnN1YnN0cigxLCAxKTtcbiAgICBnID0gdi5zdWJzdHIoMiwgMSk7XG4gICAgYiA9IHYuc3Vic3RyKDMsIDEpO1xuICAgIHIgKz0gcjtcbiAgICBnICs9IGc7XG4gICAgYiArPSBiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICBncmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgIGJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICBhbHBoYTogMVxuICB9O1xufTtcblxudmFyIHJnYmEgPSBleHBvcnRzLnJnYmEgPSAoMCwgX3V0aWxzLnNwbGl0Q29sb3JWYWx1ZXMpKFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAnYWxwaGEnXSk7XG5cbnZhciBoc2xhID0gZXhwb3J0cy5oc2xhID0gKDAsIF91dGlscy5zcGxpdENvbG9yVmFsdWVzKShbJ2h1ZScsICdzYXR1cmF0aW9uJywgJ2xpZ2h0bmVzcycsICdhbHBoYSddKTtcblxudmFyIGNvbG9yID0gZXhwb3J0cy5jb2xvciA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICgoMCwgX3V0aWxzLmlzUmdiKSh2KSkge1xuICAgIHJldHVybiByZ2JhKHYpO1xuICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNIZXgpKHYpKSB7XG4gICAgcmV0dXJuIGhleCh2KTtcbiAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLmlzSHNsKSh2KSkge1xuICAgIHJldHVybiBoc2xhKHYpO1xuICB9XG5cbiAgcmV0dXJuIHY7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmNHRnljMlZ5Y3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96dEJRVVZQTEVsQlFVMHNiMEpCUVUwc1ZVRkJReXhEUVVGRUxFVkJRVTg3UVVGRGVFSXNUVUZCU1N4VlFVRktPMEZCUVVFc1RVRkJUeXhWUVVGUU8wRkJRVUVzVFVGQlZTeFZRVUZXT3pzN1FVRkhRU3hOUVVGSkxFVkJRVVVzVFVGQlJpeEhRVUZYTEVOQlFXWXNSVUZCYTBJN1FVRkRhRUlzVVVGQlNTeEZRVUZGTEUxQlFVWXNRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhEUVVGS08wRkJRMEVzVVVGQlNTeEZRVUZGTEUxQlFVWXNRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhEUVVGS08wRkJRMEVzVVVGQlNTeEZRVUZGTEUxQlFVWXNRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJXaXhEUVVGS096czdRVUZIUkN4SFFVNUVMRTFCVFU4N1FVRkRUQ3hSUVVGSkxFVkJRVVVzVFVGQlJpeERRVUZUTEVOQlFWUXNSVUZCV1N4RFFVRmFMRU5CUVVvN1FVRkRRU3hSUVVGSkxFVkJRVVVzVFVGQlJpeERRVUZUTEVOQlFWUXNSVUZCV1N4RFFVRmFMRU5CUVVvN1FVRkRRU3hSUVVGSkxFVkJRVVVzVFVGQlJpeERRVUZUTEVOQlFWUXNSVUZCV1N4RFFVRmFMRU5CUVVvN1FVRkRRU3hUUVVGTExFTkJRVXc3UVVGRFFTeFRRVUZMTEVOQlFVdzdRVUZEUVN4VFFVRkxMRU5CUVV3N1FVRkRSRHM3UVVGRlJDeFRRVUZQTzBGQlEwd3NVMEZCU3l4VFFVRlRMRU5CUVZRc1JVRkJXU3hGUVVGYUxFTkJSRUU3UVVGRlRDeFhRVUZQTEZOQlFWTXNRMEZCVkN4RlFVRlpMRVZCUVZvc1EwRkdSanRCUVVkTUxGVkJRVTBzVTBGQlV5eERRVUZVTEVWQlFWa3NSVUZCV2l4RFFVaEVPMEZCU1V3c1YwRkJUenRCUVVwR0xFZEJRVkE3UVVGTlJDeERRWHBDVFRzN1FVRXlRa0VzU1VGQlRTeHpRa0ZCVHl3MlFrRkJhVUlzUTBGQlF5eExRVUZFTEVWQlFWRXNUMEZCVWl4RlFVRnBRaXhOUVVGcVFpeEZRVUY1UWl4UFFVRjZRaXhEUVVGcVFpeERRVUZpT3p0QlFVVkJMRWxCUVUwc2MwSkJRVThzTmtKQlFXbENMRU5CUVVNc1MwRkJSQ3hGUVVGUkxGbEJRVklzUlVGQmMwSXNWMEZCZEVJc1JVRkJiVU1zVDBGQmJrTXNRMEZCYWtJc1EwRkJZanM3UVVGRlFTeEpRVUZOTEhkQ1FVRlJMRlZCUVVNc1EwRkJSQ3hGUVVGUE8wRkJRekZDTEUxQlFVa3NhMEpCUVUwc1EwRkJUaXhEUVVGS0xFVkJRV003UVVGRFdpeFhRVUZQTEV0QlFVc3NRMEZCVEN4RFFVRlFPMEZCUTBRc1IwRkdSQ3hOUVVWUExFbEJRVWtzYTBKQlFVMHNRMEZCVGl4RFFVRktMRVZCUVdNN1FVRkRia0lzVjBGQlR5eEpRVUZKTEVOQlFVb3NRMEZCVUR0QlFVTkVMRWRCUmswc1RVRkZRU3hKUVVGSkxHdENRVUZOTEVOQlFVNHNRMEZCU2l4RlFVRmpPMEZCUTI1Q0xGZEJRVThzUzBGQlN5eERRVUZNTEVOQlFWQTdRVUZEUkRzN1FVRkZSQ3hUUVVGUExFTkJRVkE3UVVGRFJDeERRVlpOSWl3aVptbHNaU0k2SW5CaGNuTmxjbk11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJ6Y0d4cGRFTnZiRzl5Vm1Gc2RXVnpMQ0JwYzFKbllpd2dhWE5JWlhnc0lHbHpTSE5zSUgwZ1puSnZiU0FuTGk5MWRHbHNjeWM3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JvWlhnZ1BTQW9kaWtnUFQ0Z2UxeHVJQ0JzWlhRZ2Npd2daeXdnWWp0Y2JseHVJQ0F2THlCSlppQjNaU0JvWVhabElEWWdZMmhoY21GamRHVnljeXdnYVdVZ0kwWkdNREF3TUZ4dUlDQnBaaUFvZGk1c1pXNW5kR2dnUGlBMEtTQjdYRzRnSUNBZ2NpQTlJSFl1YzNWaWMzUnlLREVzSURJcE8xeHVJQ0FnSUdjZ1BTQjJMbk4xWW5OMGNpZ3pMQ0F5S1R0Y2JpQWdJQ0JpSUQwZ2RpNXpkV0p6ZEhJb05Td2dNaWs3WEc1Y2JpQWdMeThnVDNJZ2QyVWdhR0YyWlNBeklHTm9ZWEpoWTNSbGNuTXNJR2xsSUNOR01EQmNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnlJRDBnZGk1emRXSnpkSElvTVN3Z01TazdYRzRnSUNBZ1p5QTlJSFl1YzNWaWMzUnlLRElzSURFcE8xeHVJQ0FnSUdJZ1BTQjJMbk4xWW5OMGNpZ3pMQ0F4S1R0Y2JpQWdJQ0J5SUNzOUlISTdYRzRnSUNBZ1p5QXJQU0JuTzF4dUlDQWdJR0lnS3owZ1lqdGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2NtVmtPaUJ3WVhKelpVbHVkQ2h5TENBeE5pa3NYRzRnSUNBZ1ozSmxaVzQ2SUhCaGNuTmxTVzUwS0djc0lERTJLU3hjYmlBZ0lDQmliSFZsT2lCd1lYSnpaVWx1ZENoaUxDQXhOaWtzWEc0Z0lDQWdZV3h3YUdFNklERmNiaUFnZlR0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnlaMkpoSUQwZ2MzQnNhWFJEYjJ4dmNsWmhiSFZsY3loYkozSmxaQ2NzSUNkbmNtVmxiaWNzSUNkaWJIVmxKeXdnSjJGc2NHaGhKMTBwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUhOc1lTQTlJSE53YkdsMFEyOXNiM0pXWVd4MVpYTW9XeWRvZFdVbkxDQW5jMkYwZFhKaGRHbHZiaWNzSUNkc2FXZG9kRzVsYzNNbkxDQW5ZV3h3YUdFblhTazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpiMnh2Y2lBOUlDaDJLU0E5UGlCN1hHNGdJR2xtSUNocGMxSm5ZaWgyS1NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ5WjJKaEtIWXBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tHbHpTR1Y0S0hZcEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdobGVDaDJLVHRjYmlBZ2ZTQmxiSE5sSUdsbUlDaHBjMGh6YkNoMktTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCb2MyeGhLSFlwTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhZN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3BhcnNlcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cbnZhciBoYXNSQUYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gdHJ1ZSA6IGZhbHNlO1xuXG52YXIgb25OZXh0RnJhbWUgPSB2b2lkIDA7XG5cbmlmIChoYXNSQUYpIHtcbiAgb25OZXh0RnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gIH07XG59IGVsc2Uge1xuICAoZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgIFxuICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgIFxuICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICBcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICBcbiAgICAgIE1JVCBsaWNlbnNlXG4gICAgKi9cbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuXG4gICAgb25OZXh0RnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNi43IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobGFzdFRpbWUpO1xuICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgfTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gb25OZXh0RnJhbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZiMjR0Ym1WNGRDMW1jbUZ0WlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGSFFTeEpRVUZOTEZOQlFWVXNUMEZCVHl4TlFVRlFMRXRCUVd0Q0xGZEJRV3hDTEVsQlFXbERMRTlCUVU4c2NVSkJRWHBETEVkQlFXdEZMRWxCUVd4RkxFZEJRWGxGTEV0QlFYaEdPenRCUVVWQkxFbEJRVWtzYjBKQlFVbzdPMEZCUlVFc1NVRkJTU3hOUVVGS0xFVkJRVms3UVVGRFZpeG5Ra0ZCWXl4VlFVRkRMRkZCUVVRN1FVRkJRU3hYUVVGakxFOUJRVThzY1VKQlFWQXNRMEZCTmtJc1VVRkJOMElzUTBGQlpEdEJRVUZCTEVkQlFXUTdRVUZGUkN4RFFVaEVMRTFCUjA4N1FVRkJRVHM3T3pzN096czdPenM3T3pzN1FVRmxUQ3hSUVVGSkxGZEJRVmNzUTBGQlpqczdRVUZGUVN4clFrRkJZeXhWUVVGRExGRkJRVVFzUlVGQll6dEJRVU14UWl4VlFVRk5MR05CUVdNc1NVRkJTU3hKUVVGS0xFZEJRVmNzVDBGQldDeEZRVUZ3UWp0QlFVTkJMRlZCUVUwc1lVRkJZU3hMUVVGTExFZEJRVXdzUTBGQlV5eERRVUZVTEVWQlFWa3NVVUZCVVN4alFVRmpMRkZCUVhSQ0xFTkJRVm9zUTBGQmJrSTdPMEZCUlVFc2FVSkJRVmNzWTBGQll5eFZRVUY2UWpzN1FVRkZRU3hwUWtGQlZ6dEJRVUZCTEdWQlFVMHNVMEZCVXl4UlFVRlVMRU5CUVU0N1FVRkJRU3hQUVVGWUxFVkJRWEZETEZWQlFYSkRPMEZCUTBRc1MwRlFSRHRCUVdwQ1N6dEJRWGxDVGpzN2EwSkJSV01zVnlJc0ltWnBiR1VpT2lKdmJpMXVaWGgwTFdaeVlXMWxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ1JHVjBaV04wSUdGdVpDQnNiMkZrSUdGdUlHRndjSEp2Y0hKcFlYUmxJR05zYjJOcklITmxkSFJwYm1jZ1ptOXlJSFJvWlNCbGJuWnBjbTl1YldWdWRGeHVLaTljYm1OdmJuTjBJR2hoYzFKQlJpQTlJQ2gwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQjNhVzVrYjNjdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLU0EvSUhSeWRXVWdPaUJtWVd4elpUdGNibHh1YkdWMElHOXVUbVY0ZEVaeVlXMWxPMXh1WEc1cFppQW9hR0Z6VWtGR0tTQjdYRzRnSUc5dVRtVjRkRVp5WVcxbElEMGdLR05oYkd4aVlXTnJLU0E5UGlCM2FXNWtiM2N1Y21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEtHTmhiR3hpWVdOcktUdGNibHh1ZlNCbGJITmxJSHRjYmlBZ0x5cGNiaUFnSUNCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVWdjRzlzZVdacGJHeGNiaUFnSUNCY2JpQWdJQ0JHYjNJZ1NVVTRMemtnUm14cGJuTjBiMjVsY3lCaGJtUWdibTl1TFdKeWIzZHpaWElnWlc1MmFYSnZibTFsYm5SelhHNWNiaUFnSUNCVVlXdGxiaUJtY205dElGQmhkV3dnU1hKcGMyZ3VJRmRsSjNabElITjBjbWx3Y0dWa0lHOTFkQ0JqWVc1alpXeEJibWx0WVhScGIyNUdjbUZ0WlNCamFHVmphM01nWW1WallYVnpaU0IzWlNCa2IyNG5kQ0JtYjNnZ2QybDBhQ0IwYUdGMFhHNGdJQ0FnWEc0Z0lDQWdhSFIwY0RvdkwzQmhkV3hwY21semFDNWpiMjB2TWpBeE1TOXlaWEYxWlhOMFlXNXBiV0YwYVc5dVpuSmhiV1V0Wm05eUxYTnRZWEowTFdGdWFXMWhkR2x1Wnk5Y2JpQWdJQ0JvZEhSd09pOHZiWGt1YjNCbGNtRXVZMjl0TDJWdGIyeHNaWEl2WW14dlp5OHlNREV4THpFeUx6SXdMM0psY1hWbGMzUmhibWx0WVhScGIyNW1jbUZ0WlMxbWIzSXRjMjFoY25RdFpYSXRZVzVwYldGMGFXNW5YRzRnSUNBZ0lGeHVJQ0FnSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTQndiMng1Wm1sc2JDQmllU0JGY21scklFM0R0bXhzWlhJdUlHWnBlR1Z6SUdaeWIyMGdVR0YxYkNCSmNtbHphQ0JoYm1RZ1ZHbHVieUJhYVdwa1pXeGNiaUFnSUNBZ1hHNGdJQ0FnVFVsVUlHeHBZMlZ1YzJWY2JpQWdLaTljYmlBZ2JHVjBJR3hoYzNSVWFXMWxJRDBnTUR0Y2JseHVJQ0J2Yms1bGVIUkdjbUZ0WlNBOUlDaGpZV3hzWW1GamF5a2dQVDRnZTF4dUlDQWdJR052Ym5OMElHTjFjbkpsYm5SVWFXMWxJRDBnYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsS0NrN1hHNGdJQ0FnWTI5dWMzUWdkR2x0WlZSdlEyRnNiQ0E5SUUxaGRHZ3ViV0Y0S0RBc0lERTJMamNnTFNBb1kzVnljbVZ1ZEZScGJXVWdMU0JzWVhOMFZHbHRaU2twTzF4dVhHNGdJQ0FnYkdGemRGUnBiV1VnUFNCamRYSnlaVzUwVkdsdFpTQXJJSFJwYldWVWIwTmhiR3c3WEc1Y2JpQWdJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJR05oYkd4aVlXTnJLR3hoYzNSVWFXMWxLU3dnZEdsdFpWUnZRMkZzYkNrN1hHNGdJSDA3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHOXVUbVY0ZEVaeVlXMWxPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL29uLW5leHQtZnJhbWUuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVSZW5kZXJTdGVwO1xuZnVuY3Rpb24gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApIHtcbiAgLyoqXG4gICAqIFdlIHVzZSB0d28gYXJyYXlzLCBvbmUgZm9yIHRoaXMgZnJhbWUgYW5kIG9uZSB0byBxdWV1ZSBmb3IgdGhlXG4gICAqIG5leHQgZnJhbWUsIHJldXNpbmcgZWFjaCB0byBhdm9pZCBHQy5cbiAgICogQHR5cGUge0FycmF5fVxuICAgKi9cbiAgdmFyIGZ1bmN0aW9uc1RvUnVuID0gW107XG4gIHZhciBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSA9IFtdO1xuXG4gIHJldHVybiB7XG4gICAgc2NoZWR1bGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgc3RhcnRSZW5kZXJMb29wKCk7XG4gICAgICAvLyBJZiB0aGlzIGNhbGxiYWNrIGlzbid0IGFscmVhZHkgc2NoZWR1bGVkIHRvIHJ1biBuZXh0IGZyYW1lXG4gICAgICBpZiAoZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLnB1c2goY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjYW5jZWw6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdmFyIGluZGV4T2ZDYWxsYmFjayA9IGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgaWYgKGluZGV4T2ZDYWxsYmFjayAhPT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuc3BsaWNlKGluZGV4T2ZDYWxsYmFjaywgMSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHByb2Nlc3M6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgLy8gQ2xlYXIgbmV4dCBmcmFtZSBsaXN0XG4gICAgICB2YXIgX3JlZiA9IFtmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSwgZnVuY3Rpb25zVG9SdW5dO1xuICAgICAgLy8gU3dhcCB0aGlzIGZyYW1lIGFuZCBuZXh0IGZyYW1lIGFycmF5cyB0byBhdm9pZCBHQ1xuXG4gICAgICBmdW5jdGlvbnNUb1J1biA9IF9yZWZbMF07XG4gICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZSA9IF9yZWZbMV07XG4gICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5sZW5ndGggPSAwO1xuXG4gICAgICAvLyBFeGVjdXRlIGFsbCBvZiB0aGlzIGZyYW1lJ3MgZnVuY3Rpb25zXG4gICAgICB2YXIgbnVtVGhpc0ZyYW1lID0gZnVuY3Rpb25zVG9SdW4ubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UaGlzRnJhbWU7IGkrKykge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bltpXSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bWNtRnRaWE41Ym1NdlkzSmxZWFJsTFhKbGJtUmxjaTF6ZEdWd0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGQmQwSXNaMEk3UVVGQlZDeFRRVUZUTEdkQ1FVRlVMRU5CUVRCQ0xHVkJRVEZDTEVWQlFUSkRPenM3T3pzN1FVRk5lRVFzVFVGQlNTeHBRa0ZCYVVJc1JVRkJja0k3UVVGRFFTeE5RVUZKTERCQ1FVRXdRaXhGUVVFNVFqczdRVUZGUVN4VFFVRlBPMEZCUTB3c1kwRkJWU3hWUVVGRExGRkJRVVFzUlVGQll6dEJRVU4wUWpzN1FVRkZRU3hWUVVGSkxIZENRVUYzUWl4UFFVRjRRaXhEUVVGblF5eFJRVUZvUXl4TlFVRTRReXhEUVVGRExFTkJRVzVFTEVWQlFYTkVPMEZCUTNCRUxHZERRVUYzUWl4SlFVRjRRaXhEUVVFMlFpeFJRVUUzUWp0QlFVTkVPMEZCUTBZc1MwRlFTVHM3UVVGVFRDeFpRVUZSTEZWQlFVTXNVVUZCUkN4RlFVRmpPMEZCUTNCQ0xGVkJRVTBzYTBKQlFXdENMSGRDUVVGM1FpeFBRVUY0UWl4RFFVRm5ReXhSUVVGb1F5eERRVUY0UWp0QlFVTkJMRlZCUVVrc2IwSkJRVzlDTEVOQlFVTXNRMEZCZWtJc1JVRkJORUk3UVVGRE1VSXNaME5CUVhkQ0xFMUJRWGhDTEVOQlFTdENMR1ZCUVM5Q0xFVkJRV2RFTEVOQlFXaEVPMEZCUTBRN1FVRkRSaXhMUVdSSk96dEJRV2RDVEN4aFFVRlRMRmxCUVUwN096dEJRVUZCTEdsQ1FVVXJRaXhEUVVGRExIVkNRVUZFTEVWQlFUQkNMR05CUVRGQ0xFTkJSaTlDT3pzN1FVRkZXaXh2UWtGR1dUdEJRVVZKTERaQ1FVWktPMEZCUzJJc09FSkJRWGRDTEUxQlFYaENMRWRCUVdsRExFTkJRV3BET3pzN1FVRkhRU3hWUVVGTkxHVkJRV1VzWlVGQlpTeE5RVUZ3UXp0QlFVTkJMRmRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRV0lzUlVGQlowSXNTVUZCU1N4WlFVRndRaXhGUVVGclF5eEhRVUZzUXl4RlFVRjFRenRCUVVOeVF5eDFRa0ZCWlN4RFFVRm1PMEZCUTBRN1FVRkRSanRCUVRWQ1NTeEhRVUZRTzBGQk9FSkVJaXdpWm1sc1pTSTZJbU55WldGMFpTMXlaVzVrWlhJdGMzUmxjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlHTnlaV0YwWlZKbGJtUmxjbE4wWlhBb2MzUmhjblJTWlc1a1pYSk1iMjl3S1NCN1hHNGdJQzhxS2x4dUlDQWdLaUJYWlNCMWMyVWdkSGR2SUdGeWNtRjVjeXdnYjI1bElHWnZjaUIwYUdseklHWnlZVzFsSUdGdVpDQnZibVVnZEc4Z2NYVmxkV1VnWm05eUlIUm9aVnh1SUNBZ0tpQnVaWGgwSUdaeVlXMWxMQ0J5WlhWemFXNW5JR1ZoWTJnZ2RHOGdZWFp2YVdRZ1IwTXVYRzRnSUNBcUlFQjBlWEJsSUh0QmNuSmhlWDFjYmlBZ0lDb3ZYRzRnSUd4bGRDQm1kVzVqZEdsdmJuTlViMUoxYmlBOUlGdGRPMXh1SUNCc1pYUWdablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldVZ1BTQmJYVHRjYmx4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUhOamFHVmtkV3hsT2lBb1kyRnNiR0poWTJzcElEMCtJSHRjYmlBZ0lDQWdJSE4wWVhKMFVtVnVaR1Z5VEc5dmNDZ3BPMXh1SUNBZ0lDQWdMeThnU1dZZ2RHaHBjeUJqWVd4c1ltRmpheUJwYzI0bmRDQmhiSEpsWVdSNUlITmphR1ZrZFd4bFpDQjBieUJ5ZFc0Z2JtVjRkQ0JtY21GdFpWeHVJQ0FnSUNBZ2FXWWdLR1oxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbExtbHVaR1Y0VDJZb1kyRnNiR0poWTJzcElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQm1kVzVqZEdsdmJuTlViMUoxYms1bGVIUkdjbUZ0WlM1d2RYTm9LR05oYkd4aVlXTnJLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdZMkZ1WTJWc09pQW9ZMkZzYkdKaFkyc3BJRDArSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR2x1WkdWNFQyWkRZV3hzWW1GamF5QTlJR1oxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbExtbHVaR1Y0VDJZb1kyRnNiR0poWTJzcE8xeHVJQ0FnSUNBZ2FXWWdLR2x1WkdWNFQyWkRZV3hzWW1GamF5QWhQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldVdWMzQnNhV05sS0dsdVpHVjRUMlpEWVd4c1ltRmpheXdnTVNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhCeWIyTmxjM002SUNncElEMCtJSHRjYmlBZ0lDQWdJQzh2SUZOM1lYQWdkR2hwY3lCbWNtRnRaU0JoYm1RZ2JtVjRkQ0JtY21GdFpTQmhjbkpoZVhNZ2RHOGdZWFp2YVdRZ1IwTmNiaUFnSUNBZ0lGdG1kVzVqZEdsdmJuTlViMUoxYml3Z1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1ZkSUQwZ1cyWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTENCbWRXNWpkR2x2Ym5OVWIxSjFibDA3WEc1Y2JpQWdJQ0FnSUM4dklFTnNaV0Z5SUc1bGVIUWdabkpoYldVZ2JHbHpkRnh1SUNBZ0lDQWdablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldVdWJHVnVaM1JvSUQwZ01EdGNibHh1SUNBZ0lDQWdMeThnUlhobFkzVjBaU0JoYkd3Z2IyWWdkR2hwY3lCbWNtRnRaU2R6SUdaMWJtTjBhVzl1YzF4dUlDQWdJQ0FnWTI5dWMzUWdiblZ0VkdocGMwWnlZVzFsSUQwZ1puVnVZM1JwYjI1elZHOVNkVzR1YkdWdVozUm9PMXh1SUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxVWFHbHpSbkpoYldVN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2Ym5OVWIxSjFibHRwWFNncE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVHRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9jcmVhdGUtcmVuZGVyLXN0ZXAuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGRTdHlsZVByb3BlcnR5U3RyaW5nO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZXMpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVFJBTlNMQVRFID0gJ3RyYW5zbGF0ZSc7XG52YXIgdHJhbnNsYXRlTWFwID0ge1xuICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gIHk6IFRSQU5TTEFURSArICdZJyxcbiAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuXG5mdW5jdGlvbiBidWlsZFN0eWxlUHJvcGVydHlTdHJpbmcoZWxlbWVudCwgc3RhdGUsIGNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gIHZhciBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gIHZhciBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgdmFyIHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAvLyBGaXJzdCBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGNoYW5nZWQgdHJhbnNmb3JtIHZhbHVlc1xuICAvLyBhbmQgaWYgdHJ1ZSBhZGQgYWxsIHRyYW5zZm9ybSB2YWx1ZXNcbiAgdmFyIG51bUNoYW5nZWRWYWx1ZXMgPSBjaGFuZ2VkVmFsdWVzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1DaGFuZ2VkVmFsdWVzOyBpKyspIHtcbiAgICB2YXIga2V5ID0gY2hhbmdlZFZhbHVlc1tpXTtcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0cmFuc2Zvcm0gcHJvcGVydHksIGFkZCBhbGwgb3RoZXIgdHJhbnNmb3JtIHByb3BzXG4gICAgLy8gdG8gY2hhbmdlZFZhbHVlcyBhbmQgdGhlbiBicmVha1xuICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcblxuICAgICAgZm9yICh2YXIgX2tleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W19rZXldICYmIGNoYW5nZWRWYWx1ZXMuaW5kZXhPZihfa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjaGFuZ2VkVmFsdWVzLnB1c2goX2tleSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIHRvdGFsTnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdG90YWxOdW1DaGFuZ2VkVmFsdWVzOyBfaSsrKSB7XG4gICAgdmFyIF9rZXkyID0gY2hhbmdlZFZhbHVlc1tfaV07XG4gICAgdmFyIHZhbHVlID0gc3RhdGVbX2tleTJdO1xuXG4gICAgaWYgKHRyYW5zbGF0ZU1hcFtfa2V5Ml0pIHtcbiAgICAgIF9rZXkyID0gdHJhbnNsYXRlTWFwW19rZXkyXTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgbnVtYmVyIG9yIG9iamVjdCBhbmQgd2UgaGF2ZSBmaWx0ZXIsIGFwcGx5IGZpbHRlclxuICAgIGlmIChfdmFsdWVUeXBlczIuZGVmYXVsdFtfa2V5Ml0gJiYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlKSB8fCAoMCwgX3V0aWxzLmlzT2JqKSh2YWx1ZSkpICYmIF92YWx1ZVR5cGVzMi5kZWZhdWx0W19rZXkyXS50cmFuc2Zvcm0pIHtcbiAgICAgIHZhbHVlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRbX2tleTJdLnRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtfa2V5Ml0pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBfa2V5MiArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgIHRyYW5zZm9ybUhhc1ogPSBfa2V5MiA9PT0gdHJhbnNsYXRlTWFwLnogPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoX2tleTIsIHRydWUpICsgJzonICsgdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgd2UgaGF2ZSB0cmFuc2Zvcm0gcHJvcHMsIGJ1aWxkIGEgdHJhbnNmb3JtIHN0cmluZ1xuICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gdHJhbnNsYXRlTWFwLnogKyAnKDApJztcbiAgICB9XG5cbiAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgndHJhbnNmb3JtJywgdHJ1ZSkgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gIH1cblxuICBlbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gcHJvcGVydHlTdHJpbmc7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNKbGJtUmxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJXWGRDTEhkQ096dEJRVnA0UWpzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVVkJMRWxCUVUwc1dVRkJXU3hYUVVGc1FqdEJRVU5CTEVsQlFVMHNaVUZCWlR0QlFVTnVRaXhMUVVGSExGbEJRVmtzUjBGRVNUdEJRVVZ1UWl4TFFVRkhMRmxCUVZrc1IwRkdTVHRCUVVkdVFpeExRVUZITEZsQlFWazdRVUZJU1N4RFFVRnlRanM3UVVGTlpTeFRRVUZUTEhkQ1FVRlVMRU5CUVd0RExFOUJRV3hETEVWQlFUSkRMRXRCUVRORExFVkJRV3RFTEdGQlFXeEVMRVZCUVdsRkxEQkNRVUZxUlN4RlFVRTJSanRCUVVNeFJ5eE5RVUZKTEdsQ1FVRnBRaXhGUVVGeVFqdEJRVU5CTEUxQlFVa3NhMEpCUVd0Q0xFVkJRWFJDTzBGQlEwRXNUVUZCU1N4bFFVRmxMRXRCUVc1Q08wRkJRMEVzVFVGQlNTeG5Ra0ZCWjBJc1MwRkJjRUk3T3pzN1FVRkpRU3hOUVVGTkxHMUNRVUZ0UWl4alFVRmpMRTFCUVhaRE8wRkJRMEVzVDBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCWWl4RlFVRm5RaXhKUVVGSkxHZENRVUZ3UWl4RlFVRnpReXhIUVVGMFF5eEZRVUV5UXp0QlFVTjZReXhSUVVGTkxFMUJRVTBzWTBGQll5eERRVUZrTEVOQlFWbzdPenM3UVVGSlFTeFJRVUZKTEhsQ1FVRmxMRWRCUVdZc1EwRkJTaXhGUVVGNVFqdEJRVU4yUWl4eFFrRkJaU3hKUVVGbU96dEJRVVZCTEZkQlFVc3NTVUZCU1N4SlFVRlVMRWxCUVdkQ0xFdEJRV2hDTEVWQlFYVkNPMEZCUTNKQ0xGbEJRVWtzZVVKQlFXVXNTVUZCWml4TFFVRjFRaXhqUVVGakxFOUJRV1FzUTBGQmMwSXNTVUZCZEVJc1RVRkJLMElzUTBGQlF5eERRVUV6UkN4RlFVRTRSRHRCUVVNMVJDeDNRa0ZCWXl4SlFVRmtMRU5CUVcxQ0xFbEJRVzVDTzBGQlEwUTdRVUZEUmpzN1FVRkZSRHRCUVVORU8wRkJRMFk3TzBGQlJVUXNUVUZCVFN4M1FrRkJkMElzWTBGQll5eE5RVUUxUXp0QlFVTkJMRTlCUVVzc1NVRkJTU3hMUVVGSkxFTkJRV0lzUlVGQlowSXNTMEZCU1N4eFFrRkJjRUlzUlVGQk1rTXNTVUZCTTBNc1JVRkJaMFE3UVVGRE9VTXNVVUZCU1N4UlFVRk5MR05CUVdNc1JVRkJaQ3hEUVVGV08wRkJRMEVzVVVGQlNTeFJRVUZSTEUxQlFVMHNTMEZCVGl4RFFVRmFPenRCUVVWQkxGRkJRVWtzWVVGQllTeExRVUZpTEVOQlFVb3NSVUZCZFVJN1FVRkRja0lzWTBGQlRTeGhRVUZoTEV0QlFXSXNRMEZCVGp0QlFVTkVPenM3UVVGSFJDeFJRVUZKTEhGQ1FVRlhMRXRCUVZnc1RVRkJiMElzYTBKQlFVMHNTMEZCVGl4TFFVRm5RaXhyUWtGQlRTeExRVUZPTEVOQlFYQkRMRXRCUVhGRUxIRkNRVUZYTEV0QlFWZ3NSVUZCWjBJc1UwRkJla1VzUlVGQmIwWTdRVUZEYkVZc1kwRkJVU3h4UWtGQlZ5eExRVUZZTEVWQlFXZENMRk5CUVdoQ0xFTkJRVEJDTEV0QlFURkNMRU5CUVZJN1FVRkRSRHM3UVVGRlJDeFJRVUZKTEhsQ1FVRmxMRXRCUVdZc1EwRkJTaXhGUVVGNVFqdEJRVU4yUWl4NVFrRkJiVUlzVVVGQlRTeEhRVUZPTEVkQlFWa3NTMEZCV2l4SFFVRnZRaXhKUVVGMlF6dEJRVU5CTEhOQ1FVRnBRaXhWUVVGUkxHRkJRV0VzUTBGQmRFSXNSMEZCTWtJc1NVRkJNMElzUjBGQmEwTXNZVUZCYkVRN1FVRkZSQ3hMUVVwRUxFMUJTVTg3UVVGRFRDeDNRa0ZCYTBJc1RVRkJUU3gzUWtGQlV5eExRVUZVTEVWQlFXTXNTVUZCWkN4RFFVRk9MRWRCUVRSQ0xFZEJRVFZDTEVkQlFXdERMRXRCUVhCRU8wRkJRMFE3UVVGRFJqczdPMEZCUjBRc1RVRkJTU3haUVVGS0xFVkJRV3RDTzBGQlEyaENMRkZCUVVrc1EwRkJReXhoUVVGRUxFbEJRV3RDTERCQ1FVRjBRaXhGUVVGclJEdEJRVU5vUkN4NVFrRkJiVUlzWVVGQllTeERRVUZpTEVkQlFXbENMRXRCUVhCRE8wRkJRMFE3TzBGQlJVUXNjMEpCUVd0Q0xFMUJRVTBzZDBKQlFWTXNWMEZCVkN4RlFVRnpRaXhKUVVGMFFpeERRVUZPTEVkQlFXOURMRWRCUVhCRExFZEJRVEJETEdWQlFUVkVPMEZCUTBRN08wRkJSVVFzVlVGQlVTeExRVUZTTEVOQlFXTXNUMEZCWkN4SlFVRjVRaXhqUVVGNlFqdEJRVU5FSWl3aVptbHNaU0k2SW5KbGJtUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lCbWNtOXRJQ2N1TDNSeVlXNXpabTl5YlMxd2NtOXdjeWM3WEc1cGJYQnZjblFnZG1Gc2RXVlVlWEJsY3lCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekp6dGNibWx0Y0c5eWRDQndjbVZtYVhobGNpQm1jbTl0SUNjdUwzQnlaV1pwZUdWeUp6dGNibWx0Y0c5eWRDQjdJR2x6VG5WdExDQnBjMDlpYWlCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtTnZibk4wSUZSU1FVNVRURUZVUlNBOUlDZDBjbUZ1YzJ4aGRHVW5PMXh1WTI5dWMzUWdkSEpoYm5Oc1lYUmxUV0Z3SUQwZ2UxeHVJQ0I0T2lCVVVrRk9VMHhCVkVVZ0t5QW5XQ2NzWEc0Z0lIazZJRlJTUVU1VFRFRlVSU0FySUNkWkp5eGNiaUFnZWpvZ1ZGSkJUbE5NUVZSRklDc2dKMW9uWEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmlkV2xzWkZOMGVXeGxVSEp2Y0dWeWRIbFRkSEpwYm1jb1pXeGxiV1Z1ZEN3Z2MzUmhkR1VzSUdOb1lXNW5aV1JXWVd4MVpYTXNJR1Z1WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVLU0I3WEc0Z0lHeGxkQ0J3Y205d1pYSjBlVk4wY21sdVp5QTlJQ2NuTzF4dUlDQnNaWFFnZEhKaGJuTm1iM0p0VTNSeWFXNW5JRDBnSnljN1hHNGdJR3hsZENCb1lYTlVjbUZ1YzJadmNtMGdQU0JtWVd4elpUdGNiaUFnYkdWMElIUnlZVzV6Wm05eWJVaGhjMW9nUFNCbVlXeHpaVHRjYmx4dUlDQXZMeUJHYVhKemRDQmphR1ZqYXlCcFppQjBhR1Z5WlNCaGNtVWdZVzU1SUdOb1lXNW5aV1FnZEhKaGJuTm1iM0p0SUhaaGJIVmxjMXh1SUNBdkx5QmhibVFnYVdZZ2RISjFaU0JoWkdRZ1lXeHNJSFJ5WVc1elptOXliU0IyWVd4MVpYTmNiaUFnWTI5dWMzUWdiblZ0UTJoaGJtZGxaRlpoYkhWbGN5QTlJR05vWVc1blpXUldZV3gxWlhNdWJHVnVaM1JvTzF4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlVOb1lXNW5aV1JXWVd4MVpYTTdJR2tyS3lrZ2UxeHVJQ0FnSUdOdmJuTjBJR3RsZVNBOUlHTm9ZVzVuWldSV1lXeDFaWE5iYVYwN1hHNWNiaUFnSUNBdkx5QkpaaUIwYUdseklHbHpJR0VnZEhKaGJuTm1iM0p0SUhCeWIzQmxjblI1TENCaFpHUWdZV3hzSUc5MGFHVnlJSFJ5WVc1elptOXliU0J3Y205d2MxeHVJQ0FnSUM4dklIUnZJR05vWVc1blpXUldZV3gxWlhNZ1lXNWtJSFJvWlc0Z1luSmxZV3RjYmlBZ0lDQnBaaUFvZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ2FHRnpWSEpoYm5ObWIzSnRJRDBnZEhKMVpUdGNibHh1SUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlITjBZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTFRY205d2MxdHJaWGxkSUNZbUlHTm9ZVzVuWldSV1lXeDFaWE11YVc1a1pYaFBaaWhyWlhrcElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR05vWVc1blpXUldZV3gxWlhNdWNIVnphQ2hyWlhrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHTnZibk4wSUhSdmRHRnNUblZ0UTJoaGJtZGxaRlpoYkhWbGN5QTlJR05vWVc1blpXUldZV3gxWlhNdWJHVnVaM1JvTzF4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJ2ZEdGc1RuVnRRMmhoYm1kbFpGWmhiSFZsY3pzZ2FTc3JLU0I3WEc0Z0lDQWdiR1YwSUd0bGVTQTlJR05vWVc1blpXUldZV3gxWlhOYmFWMDdYRzRnSUNBZ2JHVjBJSFpoYkhWbElEMGdjM1JoZEdWYmEyVjVYVHRjYmx4dUlDQWdJR2xtSUNoMGNtRnVjMnhoZEdWTllYQmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ2EyVjVJRDBnZEhKaGJuTnNZWFJsVFdGd1cydGxlVjA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnU1dZZ2RHaHBjeUJwY3lCaElHNTFiV0psY2lCdmNpQnZZbXBsWTNRZ1lXNWtJSGRsSUdoaGRtVWdabWxzZEdWeUxDQmhjSEJzZVNCbWFXeDBaWEpjYmlBZ0lDQnBaaUFvZG1Gc2RXVlVlWEJsYzF0clpYbGRJQ1ltSUNocGMwNTFiU2gyWVd4MVpTa2dmSHdnYVhOUFltb29kbUZzZFdVcEtTQW1KaUIyWVd4MVpWUjVjR1Z6VzJ0bGVWMHVkSEpoYm5ObWIzSnRLU0I3WEc0Z0lDQWdJQ0IyWVd4MVpTQTlJSFpoYkhWbFZIbHdaWE5iYTJWNVhTNTBjbUZ1YzJadmNtMG9kbUZzZFdVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMVFjbTl3YzF0clpYbGRLU0I3WEc0Z0lDQWdJQ0IwY21GdWMyWnZjbTFUZEhKcGJtY2dLejBnYTJWNUlDc2dKeWduSUNzZ2RtRnNkV1VnS3lBbktTQW5PMXh1SUNBZ0lDQWdkSEpoYm5ObWIzSnRTR0Z6V2lBOUlDaHJaWGtnUFQwOUlIUnlZVzV6YkdGMFpVMWhjQzU2S1NBL0lIUnlkV1VnT2lCMGNtRnVjMlp2Y20xSVlYTmFPMXh1WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIQnliM0JsY25SNVUzUnlhVzVuSUNzOUlDYzdKeUFySUhCeVpXWnBlR1Z5S0d0bGVTd2dkSEoxWlNrZ0t5QW5PaWNnS3lCMllXeDFaVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2THlCSlppQjNaU0JvWVhabElIUnlZVzV6Wm05eWJTQndjbTl3Y3l3Z1luVnBiR1FnWVNCMGNtRnVjMlp2Y20wZ2MzUnlhVzVuWEc0Z0lHbG1JQ2hvWVhOVWNtRnVjMlp2Y20wcElIdGNiaUFnSUNCcFppQW9JWFJ5WVc1elptOXliVWhoYzFvZ0ppWWdaVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNHBJSHRjYmlBZ0lDQWdJSFJ5WVc1elptOXliVk4wY21sdVp5QXJQU0IwY21GdWMyeGhkR1ZOWVhBdWVpQXJJQ2NvTUNrbk8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhCeWIzQmxjblI1VTNSeWFXNW5JQ3M5SUNjN0p5QXJJSEJ5WldacGVHVnlLQ2QwY21GdWMyWnZjbTBuTENCMGNuVmxLU0FySUNjNkp5QXJJSFJ5WVc1elptOXliVk4wY21sdVp6dGNiaUFnZlZ4dVhHNGdJR1ZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBclBTQndjbTl3WlhKMGVWTjBjbWx1Wnp0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy9yZW5kZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGF4ZXMgPSBbJ1gnLCAnWScsICdaJ107XG5cbnZhciB0cmFuc2Zvcm1Qcm9wcyA9IHtcbiAgeDogdHJ1ZSxcbiAgeTogdHJ1ZSxcbiAgejogdHJ1ZVxufTtcblxudmFyIFNDQUxFID0gJ3NjYWxlJztcbnZhciBST1RBVEUgPSAncm90YXRlJztcbnZhciBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xudmFyIFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaChmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gYXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWU7XG4gIH0pO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zZm9ybVByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzUnlZVzV6Wm05eWJTMXdjbTl3Y3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4SlFVRk5MRTlCUVU4c1EwRkJReXhIUVVGRUxFVkJRVTBzUjBGQlRpeEZRVUZYTEVkQlFWZ3NRMEZCWWpzN1FVRkZRU3hKUVVGSkxHbENRVUZwUWp0QlFVTnVRaXhMUVVGSExFbEJSR2RDTzBGQlJXNUNMRXRCUVVjc1NVRkdaMEk3UVVGSGJrSXNTMEZCUnp0QlFVaG5RaXhEUVVGeVFqczdRVUZOUVN4SlFVRk5MRkZCUVZFc1QwRkJaRHRCUVVOQkxFbEJRVTBzVTBGQlV5eFJRVUZtTzBGQlEwRXNTVUZCVFN4M1FrRkJkMElzYzBKQlFUbENPMEZCUTBFc1NVRkJUU3hSUVVGUkxFTkJRVU1zVjBGQlJDeEZRVUZqTEV0QlFXUXNSVUZCY1VJc1RVRkJja0lzUlVGQk5rSXNUVUZCTjBJc1JVRkJjVU1zY1VKQlFYSkRMRU5CUVdRN08wRkJSVUVzWlVGQlpTeE5RVUZtTEVsQlFYbENMR1ZCUVdVc1MwRkJaaXhKUVVGM1FpeGxRVUZsTEhGQ1FVRm1MRWxCUVhkRExFbEJRWHBHT3p0QlFVVkJMRTFCUVUwc1QwRkJUaXhEUVVGakxGVkJRVU1zU1VGQlJEdEJRVUZCTEZOQlFWVXNTMEZCU3l4UFFVRk1MRU5CUVdFc1ZVRkJReXhKUVVGRU8wRkJRVUVzVjBGQlZTeGxRVUZsTEU5QlFVOHNTVUZCZEVJc1NVRkJPRUlzU1VGQmVFTTdRVUZCUVN4SFFVRmlMRU5CUVZZN1FVRkJRU3hEUVVGa096dHJRa0ZGWlN4aklpd2labWxzWlNJNkluUnlZVzV6Wm05eWJTMXdjbTl3Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1OdmJuTjBJR0Y0WlhNZ1BTQmJKMWduTENBbldTY3NJQ2RhSjEwN1hHNWNibXhsZENCMGNtRnVjMlp2Y20xUWNtOXdjeUE5SUh0Y2JpQWdlRG9nZEhKMVpTeGNiaUFnZVRvZ2RISjFaU3hjYmlBZ2Vqb2dkSEoxWlZ4dWZUdGNibHh1WTI5dWMzUWdVME5CVEVVZ1BTQW5jMk5oYkdVbk8xeHVZMjl1YzNRZ1VrOVVRVlJGSUQwZ0ozSnZkR0YwWlNjN1hHNWpiMjV6ZENCVVVrRk9VMFpQVWsxZlVFVlNVMUJGUTFSSlZrVWdQU0FuZEhKaGJuTm1iM0p0VUdWeWMzQmxZM1JwZG1Vbk8xeHVZMjl1YzNRZ1ZFVlNUVk1nUFNCYkozUnlZVzV6YkdGMFpTY3NJRk5EUVV4RkxDQlNUMVJCVkVVc0lDZHphMlYzSnl3Z1ZGSkJUbE5HVDFKTlgxQkZVbE5RUlVOVVNWWkZYVHRjYmx4dWRISmhibk5tYjNKdFVISnZjSE5iVWs5VVFWUkZYU0E5SUhSeVlXNXpabTl5YlZCeWIzQnpXMU5EUVV4RlhTQTlJSFJ5WVc1elptOXliVkJ5YjNCelcxUlNRVTVUUms5U1RWOVFSVkpUVUVWRFZFbFdSVjBnUFNCMGNuVmxPMXh1WEc1VVJWSk5VeTVtYjNKRllXTm9LQ2gwWlhKdEtTQTlQaUJoZUdWekxtWnZja1ZoWTJnb0tHRjRhWE1wSUQwK0lIUnlZVzV6Wm05eWJWQnliM0J6VzNSbGNtMGdLeUJoZUdselhTQTlJSFJ5ZFdVcEtUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdkSEpoYm5ObWIzSnRVSEp2Y0hNN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvdHJhbnNmb3JtLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3ZhbHVlLXR5cGVzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgLy8gQ29sb3IgcHJvcHNcbiAgY29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBiYWNrZ3JvdW5kQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBvdXRsaW5lQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBmaWxsOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgc3Ryb2tlOiBfdmFsdWVUeXBlcy5jb2xvcixcblxuICAvLyBCb3JkZXIgcHJvcHNcbiAgYm9yZGVyQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJUb3BDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlclJpZ2h0Q29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJCb3R0b21Db2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlckxlZnRDb2xvcjogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIGJvcmRlclJhZGl1czogX3ZhbHVlVHlwZXMucHgsXG5cbiAgLy8gUG9zaXRpb25pbmdcbiAgd2lkdGg6IF92YWx1ZVR5cGVzLnB4LFxuICBoZWlnaHQ6IF92YWx1ZVR5cGVzLnB4LFxuXG4gIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gIHJvdGF0ZTogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgcm90YXRlWDogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgcm90YXRlWTogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgcm90YXRlWjogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgc2NhbGU6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVg6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVk6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVo6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBza2V3WDogX3ZhbHVlVHlwZXMuZGVncmVlcyxcbiAgc2tld1k6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIGRpc3RhbmNlOiBfdmFsdWVUeXBlcy5weCxcbiAgdHJhbnNsYXRlWDogX3ZhbHVlVHlwZXMucHgsXG4gIHRyYW5zbGF0ZVk6IF92YWx1ZVR5cGVzLnB4LFxuICB0cmFuc2xhdGVaOiBfdmFsdWVUeXBlcy5weCxcbiAgcGVyc3BlY3RpdmU6IF92YWx1ZVR5cGVzLnB4LFxuICBvcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM1poYkhWbExYUjVjR1Z6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN2EwSkJRMlU3TzBGQlJXSXNNRUpCUm1FN1FVRkhZaXh2UTBGSVlUdEJRVWxpTEdsRFFVcGhPMEZCUzJJc2VVSkJUR0U3UVVGTllpd3lRa0ZPWVRzN08wRkJVMklzWjBOQlZHRTdRVUZWWWl4dFEwRldZVHRCUVZkaUxIRkRRVmhoTzBGQldXSXNjME5CV21FN1FVRmhZaXh2UTBGaVlUdEJRV05pTERoQ1FXUmhPenM3UVVGcFFtSXNkVUpCYWtKaE8wRkJhMEppTEhkQ1FXeENZVHM3TzBGQmNVSmlMRFpDUVhKQ1lUdEJRWE5DWWl3NFFrRjBRbUU3UVVGMVFtSXNPRUpCZGtKaE8wRkJkMEppTERoQ1FYaENZVHRCUVhsQ1lpd3dRa0Y2UW1FN1FVRXdRbUlzTWtKQk1VSmhPMEZCTWtKaUxESkNRVE5DWVR0QlFUUkNZaXd5UWtFMVFtRTdRVUUyUW1Jc05FSkJOMEpoTzBGQk9FSmlMRFJDUVRsQ1lUdEJRU3RDWWl3d1FrRXZRbUU3UVVGblEySXNORUpCYUVOaE8wRkJhVU5pTERSQ1FXcERZVHRCUVd0RFlpdzBRa0ZzUTJFN1FVRnRRMklzTmtKQmJrTmhPMEZCYjBOaU8wRkJjRU5oTEVNaUxDSm1hV3hsSWpvaWRtRnNkV1V0ZEhsd1pYTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmhiSEJvWVN3Z1kyOXNiM0lzSUdSbFozSmxaWE1zSUhOallXeGxMQ0J3ZUNCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MllXeDFaUzEwZVhCbGN5YzdJRnh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBdkx5QkRiMnh2Y2lCd2NtOXdjMXh1SUNCamIyeHZjam9nWTI5c2IzSXNYRzRnSUdKaFkydG5jbTkxYm1SRGIyeHZjam9nWTI5c2IzSXNYRzRnSUc5MWRHeHBibVZEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR1pwYkd3NklHTnZiRzl5TEZ4dUlDQnpkSEp2YTJVNklHTnZiRzl5TEZ4dVhHNGdJQzh2SUVKdmNtUmxjaUJ3Y205d2MxeHVJQ0JpYjNKa1pYSkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHSnZjbVJsY2xSdmNFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ1ltOXlaR1Z5VW1sbmFIUkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHSnZjbVJsY2tKdmRIUnZiVU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdZbTl5WkdWeVRHVm1kRU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdZbTl5WkdWeVVtRmthWFZ6T2lCd2VDeGNibHh1SUNBdkx5QlFiM05wZEdsdmJtbHVaMXh1SUNCM2FXUjBhRG9nY0hnc1hHNGdJR2hsYVdkb2REb2djSGdzSUNCY2JseHVJQ0F2THlCVWNtRnVjMlp2Y20wZ2NISnZjR1Z5ZEdsbGMxeHVJQ0J5YjNSaGRHVTZJR1JsWjNKbFpYTXNYRzRnSUhKdmRHRjBaVmc2SUdSbFozSmxaWE1zWEc0Z0lISnZkR0YwWlZrNklHUmxaM0psWlhNc1hHNGdJSEp2ZEdGMFpWbzZJR1JsWjNKbFpYTXNYRzRnSUhOallXeGxPaUJ6WTJGc1pTeGNiaUFnYzJOaGJHVllPaUJ6WTJGc1pTeGNiaUFnYzJOaGJHVlpPaUJ6WTJGc1pTeGNiaUFnYzJOaGJHVmFPaUJ6WTJGc1pTeGNiaUFnYzJ0bGQxZzZJR1JsWjNKbFpYTXNYRzRnSUhOclpYZFpPaUJrWldkeVpXVnpMRnh1SUNCa2FYTjBZVzVqWlRvZ2NIZ3NYRzRnSUhSeVlXNXpiR0YwWlZnNklIQjRMRnh1SUNCMGNtRnVjMnhoZEdWWk9pQndlQ3hjYmlBZ2RISmhibk5zWVhSbFdqb2djSGdzWEc0Z0lIQmxjbk53WldOMGFYWmxPaUJ3ZUN4Y2JpQWdiM0JoWTJsMGVUb2dZV3h3YUdGY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy92YWx1ZS10eXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIGNhbWVsQ2FjaGUgPSB7fTtcbnZhciBkYXNoQ2FjaGUgPSB7fTtcbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJywgJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHRlc3RFbGVtZW50ID0gdm9pZCAwO1xuXG4vKlxuICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gIFxuICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIHZhciBub1ByZWZpeCA9IHByZWZpeCA9PT0gJyc7XG4gICAgdmFyIHByZWZpeGVkUHJvcGVydHlOYW1lID0gbm9QcmVmaXggPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICBpZiAocHJlZml4ZWRQcm9wZXJ0eU5hbWUgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgIGNhbWVsQ2FjaGVba2V5XSA9IHByZWZpeGVkUHJvcGVydHlOYW1lO1xuICAgICAgZGFzaENhY2hlW2tleV0gPSAnJyArIChub1ByZWZpeCA/ICcnIDogJy0nKSArICgwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKHByZWZpeGVkUHJvcGVydHlOYW1lKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChrZXksIGFzRGFzaENhc2UpIHtcbiAgdmFyIGNhY2hlID0gYXNEYXNoQ2FzZSA/IGRhc2hDYWNoZSA6IGNhbWVsQ2FjaGU7XG5cbiAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgdGVzdFByZWZpeChrZXkpO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzQnlaV1pwZUdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdRVUZGUVN4SlFVRk5MR0ZCUVdFc1JVRkJia0k3UVVGRFFTeEpRVUZOTEZsQlFWa3NSVUZCYkVJN1FVRkRRU3hKUVVGTkxGZEJRVmNzUTBGQlF5eFJRVUZFTEVWQlFWVXNTMEZCVml4RlFVRm5RaXhIUVVGb1FpeEZRVUZ2UWl4SlFVRndRaXhGUVVFd1FpeEZRVUV4UWl4RFFVRnFRanRCUVVOQkxFbEJRVTBzWTBGQll5eFRRVUZUTEUxQlFUZENPMEZCUTBFc1NVRkJTU3h2UWtGQlNqczdPenM3T3pzN1FVRlJRU3hKUVVGTkxHRkJRV0VzVlVGQlF5eEhRVUZFTEVWQlFWTTdRVUZETVVJc1owSkJRV01zWlVGQlpTeFRRVUZUTEdGQlFWUXNRMEZCZFVJc1MwRkJka0lzUTBGQk4wSTdPMEZCUlVFc1QwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQllpeEZRVUZuUWl4SlFVRkpMRmRCUVhCQ0xFVkJRV2xETEVkQlFXcERMRVZCUVhORE8wRkJRM0JETEZGQlFVMHNVMEZCVXl4VFFVRlRMRU5CUVZRc1EwRkJaanRCUVVOQkxGRkJRVTBzVjBGQldTeFhRVUZYTEVWQlFUZENPMEZCUTBFc1VVRkJUU3gxUWtGQmRVSXNWMEZCVnl4SFFVRllMRWRCUVdsQ0xGTkJRVk1zU1VGQlNTeE5RVUZLTEVOQlFWY3NRMEZCV0N4RlFVRmpMRmRCUVdRc1JVRkJWQ3hIUVVGMVF5eEpRVUZKTEV0QlFVb3NRMEZCVlN4RFFVRldMRU5CUVhKR096dEJRVVZCTEZGQlFVa3NkMEpCUVhkQ0xGbEJRVmtzUzBGQmVFTXNSVUZCSzBNN1FVRkROME1zYVVKQlFWY3NSMEZCV0N4SlFVRnJRaXh2UWtGQmJFSTdRVUZEUVN4blFrRkJWU3hIUVVGV0xGVkJRWEZDTEZkQlFWY3NSVUZCV0N4SFFVRm5RaXhIUVVGeVF5eEpRVUUwUXl4M1FrRkJXU3h2UWtGQldpeERRVUUxUXp0QlFVTkVPMEZCUTBZN1FVRkRSaXhEUVdKRU96dHJRa0ZsWlN4VlFVRkRMRWRCUVVRc1JVRkJUU3hWUVVGT0xFVkJRWEZDTzBGQlEyeERMRTFCUVUwc1VVRkJVU3hoUVVGaExGTkJRV0lzUjBGQmVVSXNWVUZCZGtNN08wRkJSVUVzVFVGQlNTeERRVUZETEUxQlFVMHNSMEZCVGl4RFFVRk1MRVZCUVdsQ08wRkJRMllzWlVGQlZ5eEhRVUZZTzBGQlEwUTdPMEZCUlVRc1UwRkJUeXhOUVVGTkxFZEJRVTRzUTBGQlVEdEJRVU5FTEVNaUxDSm1hV3hsSWpvaWNISmxabWw0WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCallXMWxiRlJ2UkdGemFDQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU52Ym5OMElHTmhiV1ZzUTJGamFHVWdQU0I3ZlR0Y2JtTnZibk4wSUdSaGMyaERZV05vWlNBOUlIdDlPMXh1WTI5dWMzUWdjSEpsWm1sNFpYTWdQU0JiSjFkbFltdHBkQ2NzSjAxdmVpY3NKMDhuTENkdGN5Y3NJQ2NuWFR0Y2JtTnZibk4wSUc1MWJWQnlaV1pwZUdWeklEMGdjSEpsWm1sNFpYTXViR1Z1WjNSb08xeHViR1YwSUhSbGMzUkZiR1Z0Wlc1ME8xeHVYRzR2S2x4dUlDQlVaWE4wSUhOMGVXeGxJSEJ5YjNCbGNuUjVJR1p2Y2lCd2NtVm1hWGhsWkNCMlpYSnphVzl1WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRk4wZVd4bElIQnliM0JsY25SNVhHNGdJRUJ5WlhSMWNtNGdXM04wY21sdVoxMDZJRU5oWTJobFpDQndjbTl3WlhKMGVTQnVZVzFsWEc0cUwxeHVZMjl1YzNRZ2RHVnpkRkJ5WldacGVDQTlJQ2hyWlhrcElEMCtJSHRjYmlBZ2RHVnpkRVZzWlcxbGJuUWdQU0IwWlhOMFJXeGxiV1Z1ZENCOGZDQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nka2FYWW5LVHRjYmx4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlZCeVpXWnBlR1Z6T3lCcEt5c3BJSHRjYmlBZ0lDQmpiMjV6ZENCd2NtVm1hWGdnUFNCd2NtVm1hWGhsYzF0cFhUdGNiaUFnSUNCamIyNXpkQ0J1YjFCeVpXWnBlQ0E5SUNod2NtVm1hWGdnUFQwOUlDY25LVHRjYmlBZ0lDQmpiMjV6ZENCd2NtVm1hWGhsWkZCeWIzQmxjblI1VG1GdFpTQTlJRzV2VUhKbFptbDRJRDhnYTJWNUlEb2djSEpsWm1sNElDc2dhMlY1TG1Ob1lYSkJkQ2d3S1M1MGIxVndjR1Z5UTJGelpTZ3BJQ3NnYTJWNUxuTnNhV05sS0RFcE8xeHVYRzRnSUNBZ2FXWWdLSEJ5WldacGVHVmtVSEp2Y0dWeWRIbE9ZVzFsSUdsdUlIUmxjM1JGYkdWdFpXNTBMbk4wZVd4bEtTQjdYRzRnSUNBZ0lDQmpZVzFsYkVOaFkyaGxXMnRsZVYwZ1BTQndjbVZtYVhobFpGQnliM0JsY25SNVRtRnRaVHRjYmlBZ0lDQWdJR1JoYzJoRFlXTm9aVnRyWlhsZElEMGdZQ1I3S0c1dlVISmxabWw0SUQ4Z0p5Y2dPaUFuTFNjcGZTUjdZMkZ0Wld4VWIwUmhjMmdvY0hKbFptbDRaV1JRY205d1pYSjBlVTVoYldVcGZXQTdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hMlY1TENCaGMwUmhjMmhEWVhObEtTQTlQaUI3WEc0Z0lHTnZibk4wSUdOaFkyaGxJRDBnWVhORVlYTm9RMkZ6WlNBL0lHUmhjMmhEWVdOb1pTQTZJR05oYldWc1EyRmphR1U3WEc1Y2JpQWdhV1lnS0NGallXTm9aVnRyWlhsZEtTQjdYRzRnSUNBZ2RHVnpkRkJ5WldacGVDaHJaWGtwTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdOaFkyaGxXMnRsZVYwN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy9wcmVmaXhlci5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBkYXRhKSB7XG4gIHZhciBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDE7XG4gIHZhciBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMTtcbiAgdmFyIHRyYW5zZm9ybU9yaWdpblggPSBkYXRhLndpZHRoICogKChzdGF0ZS5vcmlnaW5YIHx8IDUwKSAvIDEwMCkgKyBkYXRhLng7XG4gIHZhciB0cmFuc2Zvcm1PcmlnaW5ZID0gZGF0YS5oZWlnaHQgKiAoKHN0YXRlLm9yaWdpblkgfHwgNTApIC8gMTAwKSArIGRhdGEueTtcbiAgdmFyIHNjYWxlVHJhbnNmb3JtWCA9IC10cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSk7XG4gIHZhciBzY2FsZVRyYW5zZm9ybVkgPSAtdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKTtcbiAgdmFyIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGU7XG4gIHZhciBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWTtcbiAgdmFyIHRyYW5zZm9ybSA9IHtcbiAgICB0cmFuc2xhdGU6ICd0cmFuc2xhdGUoJyArIHN0YXRlLnRyYW5zbGF0ZVggKyAnLCAnICsgc3RhdGUudHJhbnNsYXRlWSArICcpICcsXG4gICAgc2NhbGU6ICd0cmFuc2xhdGUoJyArIHNjYWxlVHJhbnNmb3JtWCArICcsICcgKyBzY2FsZVRyYW5zZm9ybVkgKyAnKSBzY2FsZSgnICsgc2NhbGUgKyAnLCAnICsgc2NhbGVZICsgJykgdHJhbnNsYXRlKCcgKyBzY2FsZVJlcGxhY2VYICsgJywgJyArIHNjYWxlUmVwbGFjZVkgKyAnKSAnLFxuICAgIHJvdGF0ZTogJ3JvdGF0ZSgnICsgc3RhdGUucm90YXRlICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblggKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWSArICcpICcsXG4gICAgc2tld1g6ICdza2V3WCgnICsgc3RhdGUuc2tld1ggKyAnKSAnLFxuICAgIHNrZXdZOiAnc2tld1koJyArIHN0YXRlLnNrZXdZICsgJykgJ1xuICB9O1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzWygwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICBmb3IgKHZhciBfa2V5IGluIHRyYW5zZm9ybSkge1xuICAgICAgaWYgKHRyYW5zZm9ybS5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gX2tleSA9PT0gJ3NjYWxlJyA/ICcxJyA6ICcwJztcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtfa2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDJKMWFXeGtMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRkxkMElzU3pzN1FVRk1lRUk3TzBGQlEwRTdPenM3T3p0QlFVVkJMRWxCUVUwc1owSkJRV2RDTEUxQlFYUkNPenRCUVVWbExGTkJRVk1zUzBGQlZDeERRVUZsTEV0QlFXWXNSVUZCYzBJc1NVRkJkRUlzUlVGQk5FSTdRVUZEZWtNc1RVRkJTU3hsUVVGbExFdEJRVzVDTzBGQlEwRXNUVUZCVFN4UlFVRlJMRVZCUVdRN1FVRkRRU3hOUVVGTkxGRkJRVkVzVFVGQlRTeExRVUZPTEV0QlFXZENMRk5CUVdoQ0xFZEJRVFJDTEUxQlFVMHNTMEZCVGl4SlFVRmxMR0ZCUVRORExFZEJRVEpFTEUxQlFVMHNUVUZCVGl4SlFVRm5RaXhEUVVGNlJqdEJRVU5CTEUxQlFVMHNVMEZCVXl4TlFVRk5MRTFCUVU0c1MwRkJhVUlzVTBGQmFrSXNSMEZCTmtJc1RVRkJUU3hOUVVGT0xFbEJRV2RDTEdGQlFUZERMRWRCUVRaRUxGTkJRVk1zUTBGQmNrWTdRVUZEUVN4TlFVRk5MRzFDUVVGdFFpeExRVUZMTEV0QlFVd3NTVUZCWXl4RFFVRkRMRTFCUVUwc1QwRkJUaXhKUVVGcFFpeEZRVUZzUWl4SlFVRjNRaXhIUVVGMFF5eEpRVUUyUXl4TFFVRkxMRU5CUVRORk8wRkJRMEVzVFVGQlRTeHRRa0ZCYlVJc1MwRkJTeXhOUVVGTUxFbEJRV1VzUTBGQlF5eE5RVUZOTEU5QlFVNHNTVUZCYVVJc1JVRkJiRUlzU1VGQmQwSXNSMEZCZGtNc1NVRkJPRU1zUzBGQlN5eERRVUUxUlR0QlFVTkJMRTFCUVUwc2EwSkJRV3RDTEVOQlFVVXNaMEpCUVVZc1NVRkJjMElzVVVGQlVTeERRVUU1UWl4RFFVRjRRanRCUVVOQkxFMUJRVTBzYTBKQlFXdENMRU5CUVVVc1owSkJRVVlzU1VGQmMwSXNVMEZCVXl4RFFVRXZRaXhEUVVGNFFqdEJRVU5CTEUxQlFVMHNaMEpCUVdkQ0xHMUNRVUZ0UWl4TFFVRjZRenRCUVVOQkxFMUJRVTBzWjBKQlFXZENMRzFDUVVGdFFpeE5RVUY2UXp0QlFVTkJMRTFCUVUwc1dVRkJXVHRCUVVOb1FpdzRRa0ZCZDBJc1RVRkJUU3hWUVVFNVFpeFZRVUUyUXl4TlFVRk5MRlZCUVc1RUxFOUJSR2RDTzBGQlJXaENMREJDUVVGdlFpeGxRVUZ3UWl4VlFVRjNReXhsUVVGNFF5eG5Ra0ZCYTBVc1MwRkJiRVVzVlVGQk5FVXNUVUZCTlVVc2IwSkJRV2xITEdGQlFXcEhMRlZCUVcxSUxHRkJRVzVJTEU5QlJtZENPMEZCUjJoQ0xIZENRVUZyUWl4TlFVRk5MRTFCUVhoQ0xGVkJRVzFETEdkQ1FVRnVReXhWUVVGM1JDeG5Ra0ZCZUVRc1QwRklaMEk3UVVGSmFFSXNjMEpCUVdkQ0xFMUJRVTBzUzBGQmRFSXNUMEZLWjBJN1FVRkxhRUlzYzBKQlFXZENMRTFCUVUwc1MwRkJkRUk3UVVGTVowSXNSMEZCYkVJN08wRkJVVUVzVDBGQlN5eEpRVUZKTEVkQlFWUXNTVUZCWjBJc1MwRkJhRUlzUlVGQmRVSTdRVUZEY2tJc1VVRkJTU3hOUVVGTkxHTkJRVTRzUTBGQmNVSXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU0zUWl4VlFVRkpMSGxDUVVGbExFZEJRV1lzUTBGQlNpeEZRVUY1UWp0QlFVTjJRaXgxUWtGQlpTeEpRVUZtTzBGQlEwUXNUMEZHUkN4TlFVVlBPMEZCUTB3c1kwRkJUU3gzUWtGQldTeEhRVUZhTEVOQlFVNHNTVUZCTUVJc1RVRkJUU3hIUVVGT0xFTkJRVEZDTzBGQlEwUTdRVUZEUmp0QlFVTkdPenRCUVVWRUxFMUJRVWtzV1VGQlNpeEZRVUZyUWp0QlFVTm9RaXhWUVVGTkxGTkJRVTRzUjBGQmEwSXNSVUZCYkVJN08wRkJSVUVzVTBGQlN5eEpRVUZKTEVsQlFWUXNTVUZCWjBJc1UwRkJhRUlzUlVGQk1rSTdRVUZEZWtJc1ZVRkJTU3hWUVVGVkxHTkJRVllzUTBGQmVVSXNTVUZCZWtJc1EwRkJTaXhGUVVGdFF6dEJRVU5xUXl4WlFVRk5MR1ZCUVdkQ0xGTkJRVkVzVDBGQlZDeEhRVUZ2UWl4SFFVRndRaXhIUVVFd1FpeEhRVUV2UXp0QlFVTkJMR05CUVUwc1UwRkJUaXhKUVVGdFFpeFZRVUZWTEVsQlFWWXNSVUZCWlN4UFFVRm1MRU5CUVhWQ0xGbEJRWFpDTEVWQlFYRkRMRmxCUVhKRExFTkJRVzVDTzBGQlEwUTdRVUZEUmp0QlFVTkdPenRCUVVWRUxGTkJRVThzUzBGQlVEdEJRVU5FSWl3aVptbHNaU0k2SW1KMWFXeGtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZMkZ0Wld4VWIwUmhjMmdnZlNCbWNtOXRJQ2N1TGk4dUxpOXBibU12ZFhScGJITW5PMXh1YVcxd2IzSjBJSFJ5WVc1elptOXliVkJ5YjNCeklHWnliMjBnSnk0dUwyTnpjeTkwY21GdWMyWnZjbTB0Y0hKdmNITW5PMXh1WEc1amIyNXpkQ0JhUlZKUFgwNVBWRjlhUlZKUElEMGdNQzR3TURBeE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmlkV2xzWkNoemRHRjBaU3dnWkdGMFlTa2dlMXh1SUNCc1pYUWdhR0Z6VkhKaGJuTm1iM0p0SUQwZ1ptRnNjMlU3WEc0Z0lHTnZibk4wSUhCeWIzQnpJRDBnZTMwN1hHNGdJR052Ym5OMElITmpZV3hsSUQwZ2MzUmhkR1V1YzJOaGJHVWdJVDA5SUhWdVpHVm1hVzVsWkNBL0lITjBZWFJsTG5OallXeGxJSHg4SUZwRlVrOWZUazlVWDFwRlVrOGdPaUJ6ZEdGMFpTNXpZMkZzWlZnZ2ZId2dNVHRjYmlBZ1kyOXVjM1FnYzJOaGJHVlpJRDBnYzNSaGRHVXVjMk5oYkdWWklDRTlQU0IxYm1SbFptbHVaV1FnUHlCemRHRjBaUzV6WTJGc1pWa2dmSHdnV2tWU1QxOU9UMVJmV2tWU1R5QTZJSE5qWVd4bElIeDhJREU3WEc0Z0lHTnZibk4wSUhSeVlXNXpabTl5YlU5eWFXZHBibGdnUFNCa1lYUmhMbmRwWkhSb0lDb2dLQ2h6ZEdGMFpTNXZjbWxuYVc1WUlIeDhJRFV3S1NBdklERXdNQ2tnS3lCa1lYUmhMbmc3WEc0Z0lHTnZibk4wSUhSeVlXNXpabTl5YlU5eWFXZHBibGtnUFNCa1lYUmhMbWhsYVdkb2RDQXFJQ2dvYzNSaGRHVXViM0pwWjJsdVdTQjhmQ0ExTUNrZ0x5QXhNREFwSUNzZ1pHRjBZUzU1TzF4dUlDQmpiMjV6ZENCelkyRnNaVlJ5WVc1elptOXliVmdnUFNBdElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ0tpQW9jMk5oYkdVZ0tpQXhLVHRjYmlBZ1kyOXVjM1FnYzJOaGJHVlVjbUZ1YzJadmNtMVpJRDBnTFNCMGNtRnVjMlp2Y20xUGNtbG5hVzVaSUNvZ0tITmpZV3hsV1NBcUlERXBPMXh1SUNCamIyNXpkQ0J6WTJGc1pWSmxjR3hoWTJWWUlEMGdkSEpoYm5ObWIzSnRUM0pwWjJsdVdDQXZJSE5qWVd4bE8xeHVJQ0JqYjI1emRDQnpZMkZzWlZKbGNHeGhZMlZaSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V1NBdklITmpZV3hsV1R0Y2JpQWdZMjl1YzNRZ2RISmhibk5tYjNKdElEMGdlMXh1SUNBZ0lIUnlZVzV6YkdGMFpUb2dZSFJ5WVc1emJHRjBaU2drZTNOMFlYUmxMblJ5WVc1emJHRjBaVmg5TENBa2UzTjBZWFJsTG5SeVlXNXpiR0YwWlZsOUtTQmdMRnh1SUNBZ0lITmpZV3hsT2lCZ2RISmhibk5zWVhSbEtDUjdjMk5oYkdWVWNtRnVjMlp2Y20xWWZTd2dKSHR6WTJGc1pWUnlZVzV6Wm05eWJWbDlLU0J6WTJGc1pTZ2tlM05qWVd4bGZTd2dKSHR6WTJGc1pWbDlLU0IwY21GdWMyeGhkR1VvSkh0elkyRnNaVkpsY0d4aFkyVllmU3dnSkh0elkyRnNaVkpsY0d4aFkyVlpmU2tnWUN4Y2JpQWdJQ0J5YjNSaGRHVTZJR0J5YjNSaGRHVW9KSHR6ZEdGMFpTNXliM1JoZEdWOUxDQWtlM1J5WVc1elptOXliVTl5YVdkcGJsaDlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGw5S1NCZ0xGeHVJQ0FnSUhOclpYZFlPaUJnYzJ0bGQxZ29KSHR6ZEdGMFpTNXphMlYzV0gwcElHQXNYRzRnSUNBZ2MydGxkMWs2SUdCemEyVjNXU2drZTNOMFlYUmxMbk5yWlhkWmZTa2dZRnh1SUNCOU8xeHVYRzRnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ6ZEdGMFpTa2dlMXh1SUNBZ0lHbG1JQ2h6ZEdGMFpTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0JwWmlBb2RISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTa2dlMXh1SUNBZ0lDQWdJQ0JvWVhOVWNtRnVjMlp2Y20wZ1BTQjBjblZsTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnY0hKdmNITmJZMkZ0Wld4VWIwUmhjMmdvYTJWNUtWMGdQU0J6ZEdGMFpWdHJaWGxkTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdsbUlDaG9ZWE5VY21GdWMyWnZjbTBwSUh0Y2JpQWdJQ0J3Y205d2N5NTBjbUZ1YzJadmNtMGdQU0FuSnp0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIwY21GdWMyWnZjbTBwSUh0Y2JpQWdJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMHVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JrWldaaGRXeDBWbUZzZFdVZ1BTQW9hMlY1SUQwOVBTQW5jMk5oYkdVbktTQS9JQ2N4SnlBNklDY3dKenRjYmlBZ0lDQWdJQ0FnY0hKdmNITXVkSEpoYm5ObWIzSnRJQ3M5SUhSeVlXNXpabTl5YlZ0clpYbGRMbkpsY0d4aFkyVW9MM1Z1WkdWbWFXNWxaQzluTENCa1pXWmhkV3gwVm1Gc2RXVXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQndjbTl3Y3p0Y2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3ZhbHVlLXR5cGVzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZmlsbDogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIHN0cm9rZTogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIHNjYWxlOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVYOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVZOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgZDogX3ZhbHVlVHlwZXMuY29tcGxleCxcbiAgcG9pbnRzOiBfdmFsdWVUeXBlcy5jb21wbGV4LFxuICBvcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYSxcbiAgZmlsbE9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhLFxuICBzdHJva2VPcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MM1poYkhWbExYUjVjR1Z6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN2EwSkJSV1U3UVVGRFlpeDVRa0ZFWVR0QlFVVmlMREpDUVVaaE8wRkJSMklzTUVKQlNHRTdRVUZKWWl3eVFrRktZVHRCUVV0aUxESkNRVXhoTzBGQlRXSXNkMEpCVG1FN1FVRlBZaXcyUWtGUVlUdEJRVkZpTERSQ1FWSmhPMEZCVTJJc1owTkJWR0U3UVVGVllqdEJRVlpoTEVNaUxDSm1hV3hsSWpvaWRtRnNkV1V0ZEhsd1pYTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmhiSEJvWVN3Z1kyOXNiM0lzSUdOdmJYQnNaWGdzSUhOallXeGxJSDBnWm5KdmJTQW5MaTR2TGk0dmFXNWpMM1poYkhWbExYUjVjR1Z6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0JtYVd4c09pQmpiMnh2Y2l4Y2JpQWdjM1J5YjJ0bE9pQmpiMnh2Y2l4Y2JpQWdjMk5oYkdVNklITmpZV3hsTEZ4dUlDQnpZMkZzWlZnNklITmpZV3hsTEZ4dUlDQnpZMkZzWlZrNklITmpZV3hsTEZ4dUlDQmtPaUJqYjIxd2JHVjRMRnh1SUNCd2IybHVkSE02SUdOdmJYQnNaWGdzWEc0Z0lHOXdZV05wZEhrNklHRnNjR2hoTEZ4dUlDQm1hV3hzVDNCaFkybDBlVG9nWVd4d2FHRXNYRzRnSUhOMGNtOXJaVTl3WVdOcGRIazZJR0ZzY0doaFhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy92YWx1ZS10eXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50LCBsZW5ndGgpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDAgKiBsZW5ndGggKyAncHgnO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBsZW5ndGgpIHtcbiAgdmFyIHN0eWxlcyA9IHt9O1xuICB2YXIgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgIGxlbmd0aDogMCxcbiAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gIH07XG4gIHZhciBoYXNEYXNoQXJyYXkgPSBmYWxzZTtcblxuICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFyIHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTFhCaGRHZ3ZZblZwYkdRdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN08wRkJUVUVzU1VGQlRTeHJRa0ZCYTBJc1ZVRkJReXhQUVVGRUxFVkJRVlVzVFVGQlZqdEJRVUZCTEZOQlFYTkNMRmRCUVZjc1QwRkJXQ3hKUVVGelFpeEhRVUYyUWl4SFFVRTRRaXhOUVVFNVFpeEhRVUYxUXl4SlFVRTFSRHRCUVVGQkxFTkJRWGhDT3p0clFrRkZaU3hWUVVGRExFdEJRVVFzUlVGQlVTeE5RVUZTTEVWQlFXMUNPMEZCUTJoRExFMUJRVTBzVTBGQlV5eEZRVUZtTzBGQlEwRXNUVUZCVFN4clFrRkJhMEk3UVVGRGRFSXNXVUZCVVN4RFFVUmpPMEZCUlhSQ0xHRkJRVk1zVTBGQlV6dEJRVVpKTEVkQlFYaENPMEZCU1VFc1RVRkJTU3hsUVVGbExFdEJRVzVDT3p0QlFVVkJMRTlCUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEV0QlFXaENMRVZCUVhWQ08wRkJRM0pDTEZGQlFVa3NUVUZCVFN4alFVRk9MRU5CUVhGQ0xFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkROMElzVlVGQlRTeFJRVUZSTEUxQlFVMHNSMEZCVGl4RFFVRmtPenRCUVVWQkxHTkJRVkVzUjBGQlVqdEJRVU5CTEdGQlFVc3NVVUZCVER0QlFVTkJMR0ZCUVVzc1UwRkJURHRCUVVORkxIbENRVUZsTEVsQlFXWTdRVUZEUVN3d1FrRkJaMElzUjBGQmFFSXNTVUZCZFVJc1owSkJRV2RDTEV0QlFXaENMRVZCUVhWQ0xFMUJRWFpDTEVOQlFYWkNPMEZCUTBFN1FVRkRSaXhoUVVGTExGRkJRVXc3UVVGRFJTeHBRa0ZCVHl4dFFrRkJVQ3hKUVVFNFFpeG5Ra0ZCWjBJc1EwRkJReXhMUVVGcVFpeEZRVUYzUWl4TlFVRjRRaXhEUVVFNVFqdEJRVU5CTzBGQlEwWTdRVUZEUlN4cFFrRkJUeXhIUVVGUUxFbEJRV01zUzBGQlpEdEJRVlpHTzBGQldVUTdRVUZEUmpzN1FVRkZSQ3hOUVVGSkxGbEJRVW9zUlVGQmEwSTdRVUZEYUVJc1YwRkJUeXhyUWtGQlVDeEpRVUUyUWl4blFrRkJaMElzVFVGQmFFSXNSMEZCZVVJc1IwRkJla0lzUjBGQkswSXNaMEpCUVdkQ0xFOUJRVFZGTzBGQlEwUTdPMEZCUlVRc1UwRkJUeXhOUVVGUU8wRkJRMFFzUXlJc0ltWnBiR1VpT2lKaWRXbHNaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lFTnZiblpsY25RZ2NHVnlZMlZ1ZEdGblpTQjBieUJ3YVhobGJITmNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1VHVnlZMlZ1ZEdGblpTQnZaaUIwYjNSaGJDQnNaVzVuZEdoY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlViM1JoYkNCc1pXNW5kR2hjYmlvdlhHNWpiMjV6ZENCd1pYSmpaVzUwVkc5UWFYaGxiSE1nUFNBb2NHVnlZMlZ1ZEN3Z2JHVnVaM1JvS1NBOVBpQW9jR0Z5YzJWR2JHOWhkQ2h3WlhKalpXNTBLU0F2SURFd01Da2dLaUJzWlc1bmRHZ2dLeUFuY0hnbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9jM1JoZEdVc0lHeGxibWQwYUNrZ1BUNGdlMXh1SUNCamIyNXpkQ0J6ZEhsc1pYTWdQU0I3ZlR0Y2JpQWdZMjl1YzNRZ1pHRnphRUZ5Y21GNVUzUjViR1Z6SUQwZ2UxeHVJQ0FnSUd4bGJtZDBhRG9nTUN4Y2JpQWdJQ0J6Y0dGamFXNW5PaUJzWlc1bmRHZ2dLeUFuY0hnblhHNGdJSDA3WEc0Z0lHeGxkQ0JvWVhORVlYTm9RWEp5WVhrZ1BTQm1ZV3h6WlR0Y2JseHVJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdjM1JoZEdVcElIdGNiaUFnSUNCcFppQW9jM1JoZEdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCemRHRjBaVnRyWlhsZE8xeHVYRzRnSUNBZ0lDQnpkMmwwWTJnZ0tHdGxlU2tnZTF4dUlDQWdJQ0FnWTJGelpTQW5iR1Z1WjNSb0p6cGNiaUFnSUNBZ0lHTmhjMlVnSjNOd1lXTnBibWNuT2x4dUlDQWdJQ0FnSUNCb1lYTkVZWE5vUVhKeVlYa2dQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQmtZWE5vUVhKeVlYbFRkSGxzWlhOYmEyVjVYU0E5SUhCbGNtTmxiblJVYjFCcGVHVnNjeWgyWVd4MVpTd2diR1Z1WjNSb0tUdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNCallYTmxJQ2R2Wm1aelpYUW5PbHh1SUNBZ0lDQWdJQ0J6ZEhsc1pYTmJKM04wY205clpTMWtZWE5vYjJabWMyVjBKMTBnUFNCd1pYSmpaVzUwVkc5UWFYaGxiSE1vTFhaaGJIVmxMQ0JzWlc1bmRHZ3BPMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lHUmxabUYxYkhRNlhHNGdJQ0FnSUNBZ0lITjBlV3hsYzF0clpYbGRJRDBnZG1Gc2RXVTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdhV1lnS0doaGMwUmhjMmhCY25KaGVTa2dlMXh1SUNBZ0lITjBlV3hsYzFzbmMzUnliMnRsTFdSaGMyaGhjbkpoZVNkZElEMGdaR0Z6YUVGeWNtRjVVM1I1YkdWekxteGxibWQwYUNBcklDY2dKeUFySUdSaGMyaEJjbkpoZVZOMGVXeGxjeTV6Y0dGamFXNW5PMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSE4wZVd4bGN6dGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==