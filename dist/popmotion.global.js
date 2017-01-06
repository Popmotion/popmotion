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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNLE9BQU8sVUFBQyxDQUFEO0FBQUEsU0FBTyxDQUFQO0FBQUEsQ0FBYjs7Ozs7Ozs7O0FBU08sSUFBTSxrQ0FBYSxVQUFDLElBQUQ7QUFBQSxTQUFVLFVBQUMsQ0FBRDtBQUFBLGdCQUFVLENBQVYsR0FBYyxJQUFkO0FBQUEsR0FBVjtBQUFBLENBQW5COzs7Ozs7Ozs7QUFTQSxJQUFNLDhCQUFXLFVBQUMsR0FBRDtBQUFBLFNBQVMsVUFBQyxDQUFEO0FBQUEsV0FBTyxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksR0FBWixDQUFQO0FBQUEsR0FBVDtBQUFBLENBQWpCO0FBQ0EsSUFBTSw4QkFBVyxVQUFDLEdBQUQ7QUFBQSxTQUFTLFVBQUMsQ0FBRDtBQUFBLFdBQU8sS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLEdBQVosQ0FBUDtBQUFBLEdBQVQ7QUFBQSxDQUFqQjtBQUNBLElBQU0sd0JBQVEsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFjO0FBQ2pDLE1BQU0sT0FBTyxTQUFTLEdBQVQsQ0FBYjtBQUNBLE1BQU0sT0FBTyxTQUFTLEdBQVQsQ0FBYjtBQUNBLFNBQU8sVUFBQyxDQUFEO0FBQUEsV0FBTyxLQUFLLEtBQUssQ0FBTCxDQUFMLENBQVA7QUFBQSxHQUFQO0FBQ0QsQ0FKTTs7QUFNQSxJQUFNLG9DQUFjLFVBQUMsU0FBRCxFQUFZLE1BQVo7QUFBQSxNQUFvQixPQUFwQix5REFBOEIsSUFBOUI7QUFBQSxTQUF1QyxVQUFDLENBQUQsRUFBTztBQUN2RSxXQUFPLFVBQVUsQ0FBVixJQUFlLE9BQU8sQ0FBUCxDQUFmLEdBQTJCLFFBQVEsQ0FBUixDQUFsQztBQUNELEdBRjBCO0FBQUEsQ0FBcEI7Ozs7Ozs7OztBQVdBLElBQU0sc0JBQU8sWUFBcUI7QUFBQSxvQ0FBakIsWUFBaUI7QUFBakIsZ0JBQWlCO0FBQUE7O0FBQ3ZDLE1BQU0sa0JBQWtCLGFBQWEsTUFBckM7QUFDQSxNQUFJLElBQUksQ0FBUjs7QUFFQSxTQUFPLFVBQUMsR0FBRCxFQUFrQjtBQUFBLHVDQUFULElBQVM7QUFBVCxVQUFTO0FBQUE7O0FBQ3ZCLFFBQUksSUFBSSxHQUFSO0FBQ0EsU0FBSyxJQUFJLENBQVQsRUFBWSxJQUFJLGVBQWhCLEVBQWlDLEdBQWpDLEVBQXNDO0FBQ3BDLFVBQUksYUFBYSxDQUFiLHVCQUFnQixDQUFoQixTQUFzQixJQUF0QixFQUFKO0FBQ0Q7O0FBRUQsV0FBTyxDQUFQO0FBQ0QsR0FQRDtBQVFELENBWk07Ozs7Ozs7OztBQXFCQSxJQUFNLG9DQUFjLFVBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsV0FBaEIsRUFBZ0M7QUFDekQsTUFBTSxjQUFjLE1BQU0sTUFBMUI7QUFDQSxNQUFNLGFBQWEsY0FBYyxDQUFqQzs7QUFFQSxTQUFPLFVBQUMsQ0FBRCxFQUFPOztBQUVaLFFBQUksS0FBSyxNQUFNLENBQU4sQ0FBVCxFQUFtQjtBQUNqQixhQUFPLE9BQU8sQ0FBUCxDQUFQO0FBQ0Q7OztBQUdELFFBQUksS0FBSyxNQUFNLFVBQU4sQ0FBVCxFQUE0QjtBQUMxQixhQUFPLE9BQU8sVUFBUCxDQUFQO0FBQ0Q7O0FBRUQsUUFBSSxJQUFJLENBQVI7OztBQUdBLFdBQU8sSUFBSSxXQUFYLEVBQXdCLEdBQXhCLEVBQTZCO0FBQzNCLFVBQUksTUFBTSxDQUFOLElBQVcsQ0FBWCxJQUFnQixNQUFNLFVBQTFCLEVBQXNDO0FBQ3BDO0FBQ0Q7QUFDRjs7QUFFRCxRQUFNLGtCQUFrQixnQ0FBcUIsTUFBTSxJQUFJLENBQVYsQ0FBckIsRUFBbUMsTUFBTSxDQUFOLENBQW5DLEVBQTZDLENBQTdDLENBQXhCO0FBQ0EsUUFBTSxnQkFBaUIsV0FBRCxHQUFnQixZQUFZLENBQVosRUFBZSxlQUFmLENBQWhCLEdBQWtELGVBQXhFO0FBQ0EsV0FBTyxnQ0FBcUIsT0FBTyxJQUFJLENBQVgsQ0FBckIsRUFBb0MsT0FBTyxDQUFQLENBQXBDLEVBQStDLGFBQS9DLENBQVA7QUFDRCxHQXZCRDtBQXdCRCxDQTVCTTs7QUE4QkEsSUFBTSwwQkFBUyxVQUFDLE1BQUQ7QUFBQSxTQUFZLFVBQUMsQ0FBRDtBQUFBLFdBQU8sSUFBSSxNQUFYO0FBQUEsR0FBWjtBQUFBLENBQWY7O0FBRUEsSUFBTSxzRUFBK0I7QUFBQSxNQUFDLGlCQUFELHlEQUFxQixJQUFyQjtBQUFBLFNBQThCLFVBQUMsUUFBRCxFQUFXLE1BQVg7QUFBQSxXQUFzQixVQUFDLENBQUQsRUFBTztBQUNyRyxVQUFNLGVBQWUsU0FBUyxDQUE5QjtBQUNBLFVBQU0sNkJBQTZCLENBQUUsUUFBRixJQUFjLElBQUksa0JBQWtCLEtBQUssR0FBTCxDQUFTLFlBQVQsQ0FBbEIsQ0FBbEIsQ0FBbkM7QUFDQSxhQUFRLGdCQUFnQixDQUFqQixHQUFzQixTQUFTLDBCQUEvQixHQUE0RCxTQUFTLDBCQUE1RTtBQUNELEtBSnlFO0FBQUEsR0FBOUI7QUFBQSxDQUFyQzs7QUFNQSxJQUFNLDBCQUFTLDhCQUFmO0FBQ0EsSUFBTSw0Q0FBa0IsNkJBQTZCLEtBQUssSUFBbEMsQ0FBeEI7O0FBRUEsSUFBTSxzQkFBTyxVQUFDLEdBQUQsRUFBTSxHQUFOO0FBQUEsU0FBYyxVQUFDLENBQUQsRUFBTztBQUN2QyxRQUFNLFlBQVksTUFBTSxHQUF4QjtBQUNBLFdBQU8sQ0FBQyxDQUFDLElBQUksR0FBTCxJQUFZLFNBQVosR0FBd0IsU0FBekIsSUFBc0MsU0FBdEMsR0FBa0QsR0FBekQ7QUFDRCxHQUhtQjtBQUFBLENBQWI7O0FBS0EsSUFBTSx3QkFBUSxVQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWEsR0FBYjtBQUFBLFNBQXFCLFVBQUMsQ0FBRCxFQUFPO0FBQy9DLFFBQU0sV0FBVyxnQ0FBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsQ0FBL0IsQ0FBakI7QUFDQSxXQUFPLHdCQUFhLEtBQWIsRUFBb0IsUUFBcEIsQ0FBUDtBQUNELEdBSG9CO0FBQUEsQ0FBZDs7QUFLQSxJQUFNLHNEQUF1QixVQUFDLGlCQUFEO0FBQUEsU0FBdUIsVUFBQyxDQUFELEVBQU87QUFDaEUsU0FBSyxJQUFJLEdBQVQsSUFBZ0IsQ0FBaEIsRUFBbUI7QUFDakIsVUFBTSxtQkFBbUIsa0JBQWtCLEdBQWxCLENBQXpCO0FBQ0EsVUFBSSxnQkFBSixFQUFzQjtBQUNwQixVQUFFLEdBQUYsSUFBUyxpQkFBaUIsRUFBRSxHQUFGLENBQWpCLENBQVQ7QUFDRDtBQUNGOztBQUVELFdBQU8sQ0FBUDtBQUNELEdBVG1DO0FBQUEsQ0FBN0I7OztBQVlBLElBQU0sNEJBQVUsV0FBVyxHQUFYLENBQWhCO0FBQ0EsSUFBTSw0QkFBVSxXQUFXLEtBQVgsQ0FBaEI7QUFDQSxJQUFNLGtCQUFLLFdBQVcsSUFBWCxDQUFYOztBQUVBLElBQU0sNEJBQVUsS0FDckIsTUFBTSxDQUFOLEVBQVMsR0FBVCxDQURxQixFQUVyQixLQUFLLEtBRmdCLENBQWhCOztBQUtQLElBQU0sZUFBZTtBQUFBLE1BQUcsR0FBSCxRQUFHLEdBQUg7QUFBQSxNQUFRLEtBQVIsUUFBUSxLQUFSO0FBQUEsTUFBZSxJQUFmLFFBQWUsSUFBZjtBQUFBLHdCQUFxQixLQUFyQjtBQUFBLE1BQXFCLEtBQXJCLDhCQUE2QixDQUE3QjtBQUFBLG1CQUNYLEdBRFcsVUFDSCxLQURHLFVBQ08sSUFEUCxVQUNnQixLQURoQjtBQUFBLENBQXJCOztBQUdPLElBQU0sc0JBQU8sS0FDbEIscUJBQXFCO0FBQ25CLE9BQUssT0FEYztBQUVuQixTQUFPLE9BRlk7QUFHbkIsUUFBTSxPQUhhO0FBSW5CO0FBSm1CLENBQXJCLENBRGtCLEVBT2xCLFlBUGtCLENBQWI7O0FBVVAsSUFBTSxlQUFlO0FBQUEsTUFBRyxHQUFILFNBQUcsR0FBSDtBQUFBLE1BQVEsVUFBUixTQUFRLFVBQVI7QUFBQSxNQUFvQixTQUFwQixTQUFvQixTQUFwQjtBQUFBLDBCQUErQixLQUEvQjtBQUFBLE1BQStCLEtBQS9CLCtCQUF1QyxDQUF2QztBQUFBLG1CQUNYLEdBRFcsVUFDSCxVQURHLFVBQ1ksU0FEWixVQUMwQixLQUQxQjtBQUFBLENBQXJCOztBQUdPLElBQU0sc0JBQU8sS0FDbEIscUJBQXFCO0FBQ25CLE9BQUssVUFEYztBQUVuQixjQUFZLE9BRk87QUFHbkIsYUFBVyxPQUhRO0FBSW5CO0FBSm1CLENBQXJCLENBRGtCLEVBT2xCLFlBUGtCLENBQWI7O0FBVUEsSUFBTSx3QkFBUSxVQUFDLENBQUQsRUFBTztBQUMxQixNQUFJLEVBQUUsY0FBRixDQUFpQixLQUFqQixDQUFKLEVBQTZCO0FBQzNCLFdBQU8sS0FBSyxDQUFMLENBQVA7QUFDRCxHQUZELE1BRU8sSUFBSSxFQUFFLGNBQUYsQ0FBaUIsS0FBakIsQ0FBSixFQUE2QjtBQUNsQyxXQUFPLEtBQUssQ0FBTCxDQUFQO0FBQ0Q7QUFDRCxTQUFPLENBQVA7QUFDRCxDQVBNOztBQVNBLElBQU0sd0JBQVEsTUFBTSxDQUFOLEVBQVMsQ0FBVCxDQUFkOztBQUVQLElBQU0sUUFBUSxVQUFDLElBQUQsRUFBTyxFQUFQLEVBQVcsQ0FBWCxFQUFpQjtBQUM3QixNQUFNLFdBQVcsT0FBTyxJQUF4QjtBQUNBLE1BQU0sU0FBUyxLQUFLLEVBQXBCO0FBQ0EsU0FBTyxLQUFLLElBQUwsQ0FBVSxLQUFLLFNBQVMsUUFBZCxJQUEwQixRQUFwQyxDQUFQO0FBQ0QsQ0FKRDs7QUFNTyxJQUFNLGtDQUFhLFVBQUMsSUFBRCxFQUFPLEVBQVAsRUFBYztBQUN0QyxNQUFNLFlBQVkscUJBQVMsSUFBVCxJQUFpQixvQkFBVyxJQUFYLENBQWpCLEdBQW9DLElBQXREO0FBQ0EsTUFBTSxVQUFVLHFCQUFTLEVBQVQsSUFBZSxvQkFBVyxFQUFYLENBQWYsR0FBK0IsRUFBL0M7O0FBRUEsTUFBTSx1QkFBZSxTQUFmLENBQU47O0FBRUEsU0FBTyxVQUFDLENBQUQsRUFBTztBQUNaLFNBQUssSUFBSSxHQUFULElBQWdCLE9BQWhCLEVBQXlCO0FBQ3ZCLGNBQVEsR0FBUixJQUFlLE1BQU0sVUFBVSxHQUFWLENBQU4sRUFBc0IsUUFBUSxHQUFSLENBQXRCLEVBQW9DLENBQXBDLENBQWY7QUFDRDtBQUNELFlBQVEsR0FBUixHQUFjLE1BQU0sVUFBVSxHQUFoQixFQUFxQixRQUFRLEdBQTdCLEVBQWtDLENBQWxDLENBQWQ7QUFDQSxZQUFRLEtBQVIsR0FBZ0IsTUFBTSxVQUFVLEtBQWhCLEVBQXVCLFFBQVEsS0FBL0IsRUFBc0MsQ0FBdEMsQ0FBaEI7QUFDQSxZQUFRLElBQVIsR0FBZSxNQUFNLFVBQVUsSUFBaEIsRUFBc0IsUUFBUSxJQUE5QixFQUFvQyxDQUFwQyxDQUFmO0FBQ0EsWUFBUSxLQUFSLEdBQWdCLGdDQUFxQixVQUFVLEtBQS9CLEVBQXNDLFFBQVEsS0FBOUMsRUFBcUQsQ0FBckQsQ0FBaEI7QUFDQSxXQUFPLE9BQVA7QUFDRCxHQVREO0FBVUQsQ0FoQk0iLCJmaWxlIjoidHJhbnNmb3JtZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCBzdGVwUHJvZ3Jlc3MgfSBmcm9tICcuL2NhbGMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNvbG9yIGFzIHBhcnNlQ29sb3IgfSBmcm9tICcuL3BhcnNlcnMnO1xuXG5jb25zdCBub29wID0gKHYpID0+IHY7XG5cbi8qKlxuICogQXBwZW5kIFVuaXRcbiAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGVuZFxuICogYXBwZW5kVW5pdCgncHgnLCAyMCkgLT4gJzIwcHgnXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVuaXQpXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBhcHBlbmRVbml0ID0gKHVuaXQpID0+ICh2KSA9PiBgJHt2fSR7dW5pdH1gO1xuXG4vKipcbiAqIENsYW1wIHZhbHVlIGJldHdlZW5cbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVzdHJpY3QgYSBnaXZlbiB2YWx1ZSBiZXR3ZWVuIGBtaW5gIGFuZCBgbWF4YFxuICogQHBhcmFtICB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBjbGFtcE1heCA9IChtYXgpID0+ICh2KSA9PiBNYXRoLm1pbih2LCBtYXgpO1xuZXhwb3J0IGNvbnN0IGNsYW1wTWluID0gKG1pbikgPT4gKHYpID0+IE1hdGgubWF4KHYsIG1pbik7XG5leHBvcnQgY29uc3QgY2xhbXAgPSAobWluLCBtYXgpID0+IHtcbiAgY29uc3QgX21pbiA9IGNsYW1wTWluKG1pbik7XG4gIGNvbnN0IF9tYXggPSBjbGFtcE1heChtYXgpO1xuICByZXR1cm4gKHYpID0+IF9taW4oX21heCh2KSk7XG59O1xuXG5leHBvcnQgY29uc3QgY29uZGl0aW9uYWwgPSAoY29uZGl0aW9uLCBpZlRydWUsIGlmRmFsc2UgPSBub29wKSA9PiAodikgPT4ge1xuICByZXR1cm4gY29uZGl0aW9uKHYpID8gaWZUcnVlKHYpIDogaWZGYWxzZSh2KTtcbn07XG5cbi8qKlxuICogRmxvd1xuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogZmxvdyhtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgZmxvdyA9ICguLi50cmFuc2Zvcm1lcnMpID0+IHtcbiAgY29uc3QgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIHJldHVybiAoYWNjLCAuLi5hcmdzKSA9PiB7XG4gICAgbGV0IHYgPSBhY2M7XG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldKHYsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcblxuLyoqXG4gKiBJbnRlcnBvbGF0ZSBmcm9tIHNldCBvZiB2YWx1ZXMgdG8gYW5vdGhlclxuICogQHBhcmFtICB7QXJyYXl9IGlucHV0IGFycmF5XG4gKiBAcGFyYW0gIHtBcnJheX0gb3V0cHV0XG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gcmFuZ2VFYXNpbmdcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgaW50ZXJwb2xhdGUgPSAoaW5wdXQsIG91dHB1dCwgcmFuZ2VFYXNpbmcpID0+IHtcbiAgY29uc3QgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIGNvbnN0IGZpbmFsSW5kZXggPSByYW5nZUxlbmd0aCAtIDE7XG5cbiAgcmV0dXJuICh2KSA9PiB7XG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtaW5pbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2IDw9IGlucHV0WzBdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0WzBdO1xuICAgIH1cblxuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA+PSBpbnB1dFtmaW5hbEluZGV4XSkge1xuICAgICAgcmV0dXJuIG91dHB1dFtmaW5hbEluZGV4XTtcbiAgICB9XG5cbiAgICBsZXQgaSA9IDE7XG5cbiAgICAvLyBGaW5kIGluZGV4IG9mIHJhbmdlIHN0YXJ0XG4gICAgZm9yICg7IGkgPCByYW5nZUxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5wdXRbaV0gPiB2IHx8IGkgPT09IGZpbmFsSW5kZXgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJvZ3Jlc3NJblJhbmdlID0gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoaW5wdXRbaSAtIDFdLCBpbnB1dFtpXSwgdik7XG4gICAgY29uc3QgZWFzZWRQcm9ncmVzcyA9IChyYW5nZUVhc2luZykgPyByYW5nZUVhc2luZ1tpXShwcm9ncmVzc0luUmFuZ2UpIDogcHJvZ3Jlc3NJblJhbmdlO1xuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhvdXRwdXRbaSAtIDFdLCBvdXRwdXRbaV0sIGVhc2VkUHJvZ3Jlc3MpO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IG9mZnNldCA9IChvcmlnaW4pID0+ICh2KSA9PiB2IC0gb3JpZ2luO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZyA9IChhbHRlckRpc3BsYWNlbWVudCA9IG5vb3ApID0+IChjb25zdGFudCwgb3JpZ2luKSA9PiAodikgPT4ge1xuICBjb25zdCBkaXNwbGFjZW1lbnQgPSBvcmlnaW4gLSB2O1xuICBjb25zdCBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudCA9IC0gY29uc3RhbnQgKiAoMCAtIGFsdGVyRGlzcGxhY2VtZW50KE1hdGguYWJzKGRpc3BsYWNlbWVudCkpKTtcbiAgcmV0dXJuIChkaXNwbGFjZW1lbnQgPD0gMCkgPyBvcmlnaW4gKyBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudCA6IG9yaWdpbiAtIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IHNwcmluZyA9IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcoKTtcbmV4cG9ydCBjb25zdCBub25saW5lYXJTcHJpbmcgPSBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nKE1hdGguc3FydCk7XG5cbmV4cG9ydCBjb25zdCB3cmFwID0gKG1pbiwgbWF4KSA9PiAodikgPT4ge1xuICBjb25zdCByYW5nZVNpemUgPSBtYXggLSBtaW47XG4gIHJldHVybiAoKHYgLSBtaW4pICUgcmFuZ2VTaXplICsgcmFuZ2VTaXplKSAlIHJhbmdlU2l6ZSArIG1pbjtcbn07XG5cbmV4cG9ydCBjb25zdCBzdGVwcyA9IChzdGVwcywgbWluLCBtYXgpID0+ICh2KSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzID0gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUobWluLCBtYXgsIHYpO1xuICByZXR1cm4gc3RlcFByb2dyZXNzKHN0ZXBzLCBwcm9ncmVzcyk7XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSAoY2hpbGRUcmFuc2Zvcm1lcnMpID0+ICh2KSA9PiB7XG4gIGZvciAobGV0IGtleSBpbiB2KSB7XG4gICAgY29uc3QgY2hpbGRUcmFuc2Zvcm1lciA9IGNoaWxkVHJhbnNmb3JtZXJzW2tleV07XG4gICAgaWYgKGNoaWxkVHJhbnNmb3JtZXIpIHtcbiAgICAgIHZba2V5XSA9IGNoaWxkVHJhbnNmb3JtZXIodltrZXldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdjtcbn07XG5cbi8vIFVuaXQgdHJhbnNmb3JtZXJzXG5leHBvcnQgY29uc3QgcGVyY2VudCA9IGFwcGVuZFVuaXQoJyUnKTtcbmV4cG9ydCBjb25zdCBkZWdyZWVzID0gYXBwZW5kVW5pdCgnZGVnJyk7XG5leHBvcnQgY29uc3QgcHggPSBhcHBlbmRVbml0KCdweCcpO1xuXG5leHBvcnQgY29uc3QgcmdiVW5pdCA9IGZsb3coXG4gIGNsYW1wKDAsIDI1NSksXG4gIE1hdGgucm91bmRcbik7XG5cbmNvbnN0IHJnYmFUZW1wbGF0ZSA9ICh7IHJlZCwgZ3JlZW4sIGJsdWUsIGFscGhhID0gMSB9KSA9PiBcbiAgYHJnYmEoJHtyZWR9LCAke2dyZWVufSwgJHtibHVlfSwgJHthbHBoYX0pYDtcblxuZXhwb3J0IGNvbnN0IHJnYmEgPSBmbG93KFxuICB0cmFuc2Zvcm1DaGlsZFZhbHVlcyh7XG4gICAgcmVkOiByZ2JVbml0LFxuICAgIGdyZWVuOiByZ2JVbml0LFxuICAgIGJsdWU6IHJnYlVuaXQsXG4gICAgYWxwaGFcbiAgfSksXG4gIHJnYmFUZW1wbGF0ZVxuKTtcblxuY29uc3QgaHNsYVRlbXBsYXRlID0gKHsgaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGFscGhhID0gMSB9KSA9PiBcbiAgYGhzbGEoJHtodWV9LCAke3NhdHVyYXRpb259LCAke2xpZ2h0bmVzc30sICR7YWxwaGF9KWA7XG5cbmV4cG9ydCBjb25zdCBoc2xhID0gZmxvdyhcbiAgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMoe1xuICAgIGh1ZTogcGFyc2VGbG9hdCxcbiAgICBzYXR1cmF0aW9uOiBwZXJjZW50LFxuICAgIGxpZ2h0bmVzczogcGVyY2VudCxcbiAgICBhbHBoYVxuICB9KSxcbiAgaHNsYVRlbXBsYXRlXG4pO1xuXG5leHBvcnQgY29uc3QgY29sb3IgPSAodikgPT4ge1xuICBpZiAodi5oYXNPd25Qcm9wZXJ0eSgncmVkJykpIHtcbiAgICByZXR1cm4gcmdiYSh2KTtcbiAgfSBlbHNlIGlmICh2Lmhhc093blByb3BlcnR5KCdodWUnKSkge1xuICAgIHJldHVybiBoc2xhKHYpO1xuICB9XG4gIHJldHVybiB2O1xufTtcblxuZXhwb3J0IGNvbnN0IGFscGhhID0gY2xhbXAoMCwgMSk7XG5cbmNvbnN0IGJsZW5kID0gKGZyb20sIHRvLCB2KSA9PiB7XG4gIGNvbnN0IGZyb21FeHBvID0gZnJvbSAqIGZyb207XG4gIGNvbnN0IHRvRXhwbyA9IHRvICogdG87XG4gIHJldHVybiBNYXRoLnNxcnQodiAqICh0b0V4cG8gLSBmcm9tRXhwbykgKyBmcm9tRXhwbyk7XG59O1xuLy8gaHR0cDovL2NvZGVwZW4uaW8vb3N1Ymxha2UvcGVuL3hHVlZhTlxuZXhwb3J0IGNvbnN0IGJsZW5kQ29sb3IgPSAoZnJvbSwgdG8pID0+IHtcbiAgY29uc3QgZnJvbUNvbG9yID0gaXNTdHJpbmcoZnJvbSkgPyBwYXJzZUNvbG9yKGZyb20pIDogZnJvbTtcbiAgY29uc3QgdG9Db2xvciA9IGlzU3RyaW5nKHRvKSA/IHBhcnNlQ29sb3IodG8pOiB0bztcblxuICBjb25zdCBibGVuZGVkID0geyAuLi5mcm9tQ29sb3IgfTtcblxuICByZXR1cm4gKHYpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gYmxlbmRlZCkge1xuICAgICAgYmxlbmRlZFtrZXldID0gYmxlbmQoZnJvbUNvbG9yW2tleV0sIHRvQ29sb3Jba2V5XSwgdik7XG4gICAgfVxuICAgIGJsZW5kZWQucmVkID0gYmxlbmQoZnJvbUNvbG9yLnJlZCwgdG9Db2xvci5yZWQsIHYpO1xuICAgIGJsZW5kZWQuZ3JlZW4gPSBibGVuZChmcm9tQ29sb3IuZ3JlZW4sIHRvQ29sb3IuZ3JlZW4sIHYpO1xuICAgIGJsZW5kZWQuYmx1ZSA9IGJsZW5kKGZyb21Db2xvci5ibHVlLCB0b0NvbG9yLmJsdWUsIHYpO1xuICAgIGJsZW5kZWQuYWxwaGEgPSBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhmcm9tQ29sb3IuYWxwaGEsIHRvQ29sb3IuYWxwaGEsIHYpO1xuICAgIHJldHVybiBibGVuZGVkO1xuICB9O1xufTtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxlOzs7QUFDSiwyQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsUUFDVCxPQURTLEdBQ3NCLEtBRHRCLENBQ1QsT0FEUzs7QUFBQSxRQUNHLGNBREgsNEJBQ3NCLEtBRHRCOztBQUFBLGlEQUVqQixtQkFBTSxjQUFOLENBRmlCOztBQUdqQixVQUFLLE9BQUwsR0FBZSxFQUFmO0FBQ0EsVUFBSyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsVUFBSyxVQUFMLENBQWdCLE1BQU0sT0FBdEI7QUFMaUI7QUFNbEI7OzRCQUVELFUsdUJBQVcsTyxFQUFTO0FBQUE7O0FBQUEsMEJBQ1AsR0FETztBQUVoQixVQUFJLE9BQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixHQUF4QixNQUFpQyxDQUFDLENBQXRDLEVBQXlDO0FBQ3ZDLGVBQUssVUFBTCxDQUFnQixJQUFoQixDQUFxQixHQUFyQjtBQUNEOztBQUVELGFBQUssR0FBTCxJQUFZLFFBQVEsR0FBUixDQUFaOztBQUVBLFVBQU0sV0FBVyxVQUFDLENBQUQ7QUFBQSxlQUFPLE9BQUssT0FBTCxDQUFhLEdBQWIsSUFBb0IsQ0FBM0I7QUFBQSxPQUFqQixDQUE4Qzs7O0FBRzlDLGVBQVMsT0FBSyxHQUFMLEVBQVUsR0FBVixFQUFUOztBQUVBLGFBQUssR0FBTCxFQUNHLFFBREgsQ0FDWTtBQUNSLGlCQUFTO0FBQUEsaUJBQU0sT0FBSyxnQkFBTCxFQUFOO0FBQUE7QUFERCxPQURaLEVBSUcsV0FKSCxDQUllLFFBSmY7QUFiZ0I7O0FBQ2xCLFNBQUssSUFBTSxHQUFYLElBQWtCLE9BQWxCLEVBQTJCO0FBQUEsWUFBaEIsR0FBZ0I7QUFpQjFCO0FBQ0YsRzs7NEJBRUQsTyxzQkFBVTtBQUFBOztBQUNSLFNBQUssZ0JBQUwsR0FBd0IsS0FBSyxVQUFMLENBQWdCLE1BQXhDO0FBQ0EsU0FBSyxVQUFMLENBQWdCLE9BQWhCLENBQXdCLFVBQUMsR0FBRDtBQUFBLGFBQVMsT0FBSyxHQUFMLEVBQVUsS0FBVixFQUFUO0FBQUEsS0FBeEI7QUFDRCxHOzs0QkFFRCxNLHFCQUFTO0FBQUE7O0FBQ1AsU0FBSyxVQUFMLENBQWdCLE9BQWhCLENBQXdCLFVBQUMsR0FBRDtBQUFBLGFBQVMsT0FBSyxHQUFMLEVBQVUsSUFBVixFQUFUO0FBQUEsS0FBeEI7QUFDRCxHOzs0QkFFRCxXLDBCQUFjO0FBQUE7O0FBQ1osUUFBTSxXQUFXLEVBQWpCO0FBQ0EsU0FBSyxVQUFMLENBQWdCLE9BQWhCLENBQXdCLFVBQUMsR0FBRDtBQUFBLGFBQVMsU0FBUyxHQUFULElBQWdCLE9BQUssR0FBTCxFQUFVLFdBQVYsRUFBekI7QUFBQSxLQUF4QjtBQUNBLFdBQU8sUUFBUDtBQUNELEc7OzRCQUVELGdCLCtCQUFtQjtBQUNqQixXQUFRLEtBQUssZ0JBQUwsS0FBMEIsQ0FBbEM7QUFDRCxHOzs7OztrQkFHWSxVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQW9CO0FBQ2pDLFNBQU8sSUFBSSxlQUFKO0FBQ0w7QUFESyxLQUVGLEtBRkUsRUFBUDtBQUlELEMiLCJmaWxlIjoiY29tcG9zaXRlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLyc7XG5pbXBvcnQgeyBvbkZyYW1lVXBkYXRlIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcblxuY2xhc3MgQ29tcG9zaXRlQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBjb25zdCB7IGFjdGlvbnMsIC4uLnJlbWFpbmluZ1Byb3BzIH0gPSBwcm9wcztcbiAgICBzdXBlcihyZW1haW5pbmdQcm9wcyk7XG4gICAgdGhpcy5jdXJyZW50ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzID0gW107XG4gICAgdGhpcy5hZGRBY3Rpb25zKHByb3BzLmFjdGlvbnMpO1xuICB9XG5cbiAgYWRkQWN0aW9ucyhhY3Rpb25zKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYWN0aW9ucykge1xuICAgICAgaWYgKHRoaXMuYWN0aW9uS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uS2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXNba2V5XSA9IGFjdGlvbnNba2V5XTtcblxuICAgICAgY29uc3Qgb25VcGRhdGUgPSAodikgPT4gdGhpcy5jdXJyZW50W2tleV0gPSB2OztcblxuICAgICAgLy8gSW1tZWRpYXRlbHkgdXBkYXRlIHdpdGggdGhlIGN1cnJlbnQgYWN0aW9uIHN0YXRlXG4gICAgICBvblVwZGF0ZSh0aGlzW2tleV0uZ2V0KCkpO1xuXG4gICAgICB0aGlzW2tleV1cbiAgICAgICAgLnNldFByb3BzKHtcbiAgICAgICAgICBfb25TdG9wOiAoKSA9PiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLVxuICAgICAgICB9KVxuICAgICAgICAuYWRkTGlzdGVuZXIob25VcGRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gdGhpcy5hY3Rpb25LZXlzLmxlbmd0aDtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaCgoa2V5KSA9PiB0aGlzW2tleV0uc3RhcnQoKSk7XG4gIH1cblxuICBvblN0b3AoKSB7XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goKGtleSkgPT4gdGhpc1trZXldLnN0b3AoKSk7XG4gIH1cblxuICBnZXRWZWxvY2l0eSgpIHtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IHt9O1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKChrZXkpID0+IHZlbG9jaXR5W2tleV0gPSB0aGlzW2tleV0uZ2V0VmVsb2NpdHkoKSk7XG4gICAgcmV0dXJuIHZlbG9jaXR5O1xuICB9XG5cbiAgaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gKHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGFjdGlvbnMsIHByb3BzKSA9PiB7XG4gIHJldHVybiBuZXcgQ29tcG9zaXRlQWN0aW9uKHtcbiAgICBhY3Rpb25zLFxuICAgIC4uLnByb3BzXG4gIH0pO1xufTtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL3BvaW50ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFTLGFBQVQsY0FBeUU7QUFBQSxNQUFoRCxDQUFnRCxTQUFoRCxDQUFnRDtBQUFBLE1BQTdDLENBQTZDLFNBQTdDLENBQTZDO0FBQUEsTUFBdEMsYUFBc0MsUUFBdEMsYUFBc0M7QUFBQSxNQUF2QixTQUF1QixRQUF2QixTQUF1Qjs7QUFBQSxNQUFULEtBQVM7O0FBQ3ZFLE1BQU0sVUFBVSx5QkFBVTtBQUN4QixPQUFHLHFCQUFNLENBQU4sQ0FEcUI7QUFFeEIsT0FBRyxxQkFBTSxDQUFOO0FBRnFCLEdBQVY7QUFJZCxvQkFBZ0I7QUFKRixLQUtYLEtBTFcsRUFBaEI7O0FBUUEsTUFBTSxnQkFBZ0IsVUFBQyxDQUFELEVBQU87QUFDM0IsUUFBSSxNQUFNLGNBQVYsRUFBMEI7QUFDeEIsUUFBRSxjQUFGO0FBQ0Q7O0FBRUQsUUFBTSxTQUFTLGNBQWMsQ0FBZCxDQUFmO0FBQ0EsWUFBUSxDQUFSLENBQVUsR0FBVixDQUFjLE9BQU8sQ0FBckI7QUFDQSxZQUFRLENBQVIsQ0FBVSxHQUFWLENBQWMsT0FBTyxDQUFyQjtBQUNELEdBUkQ7O0FBVUEsVUFBUSxRQUFSLENBQWlCO0FBQ2YsY0FBVTtBQUFBLGFBQU0sU0FBUyxlQUFULENBQXlCLGdCQUF6QixDQUEwQyxTQUExQyxFQUFxRCxhQUFyRCxDQUFOO0FBQUEsS0FESztBQUVmLGFBQVM7QUFBQSxhQUFNLFNBQVMsZUFBVCxDQUF5QixtQkFBekIsQ0FBNkMsU0FBN0MsRUFBd0QsYUFBeEQsQ0FBTjtBQUFBO0FBRk0sR0FBakI7O0FBS0EsU0FBTyxPQUFQO0FBQ0Q7O0FBRUQsSUFBTSxvQkFBb0IsVUFBQyxDQUFEO0FBQUEsU0FBUTtBQUNoQyxPQUFHLEVBQUUsS0FEMkI7QUFFaEMsT0FBRyxFQUFFO0FBRjJCLEdBQVI7QUFBQSxDQUExQjs7QUFLQSxJQUFNLG9CQUFvQjtBQUFBLE1BQUcsY0FBSCxTQUFHLGNBQUg7QUFBQSxTQUF5QjtBQUNqRCxPQUFHLGVBQWUsQ0FBZixFQUFrQixPQUQ0QjtBQUVqRCxPQUFHLGVBQWUsQ0FBZixFQUFrQjtBQUY0QixHQUF6QjtBQUFBLENBQTFCOztBQUtBLElBQU0saUJBQWlCLFVBQUMsQ0FBRDtBQUFBLFNBQU8sRUFBRSxhQUFGLElBQW1CLEVBQUUsV0FBckIsSUFBb0MsQ0FBM0M7QUFBQSxDQUF2Qjs7a0JBRWUsVUFBQyxDQUFELEVBQUksS0FBSixFQUFjO0FBQzNCLE1BQU0sY0FBYyxlQUFlLENBQWYsQ0FBcEI7QUFDQSxTQUFRLFlBQVksT0FBYixHQUNMLGNBQWMsa0JBQWtCLENBQWxCLENBQWQ7QUFDRSxlQUFXLFdBRGI7QUFFRSxtQkFBZTtBQUZqQixLQUdLLEtBSEwsRUFESyxHQU1MLGNBQWMsa0JBQWtCLENBQWxCLENBQWQ7QUFDRSxlQUFXLFdBRGI7QUFFRSxtQkFBZTtBQUZqQixLQUdLLEtBSEwsRUFORjtBQVdELEMiLCJmaWxlIjoicG9pbnRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2YWx1ZSBmcm9tICcuL3ZhbHVlJztcbmltcG9ydCBjb21wb3NpdGUgZnJvbSAnLi9jb21wb3NpdGUnO1xuXG5mdW5jdGlvbiBjcmVhdGVQb2ludGVyKHsgeCwgeSB9LCB7IGV2ZW50VG9Qb2ludHMsIG1vdmVFdmVudCwgLi4ucHJvcHMgfSkge1xuICBjb25zdCBwb2ludGVyID0gY29tcG9zaXRlKHtcbiAgICB4OiB2YWx1ZSh4KSxcbiAgICB5OiB2YWx1ZSh5KVxuICB9LCB7XG4gICAgcHJldmVudERlZmF1bHQ6IHRydWUsXG4gICAgLi4ucHJvcHNcbiAgfSk7XG5cbiAgY29uc3QgdXBkYXRlUG9pbnRlciA9IChlKSA9PiB7XG4gICAgaWYgKHByb3BzLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRzID0gZXZlbnRUb1BvaW50cyhlKTtcbiAgICBwb2ludGVyLnguc2V0KHBvaW50cy54KTtcbiAgICBwb2ludGVyLnkuc2V0KHBvaW50cy55KTtcbiAgfTtcblxuICBwb2ludGVyLnNldFByb3BzKHtcbiAgICBfb25TdGFydDogKCkgPT4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobW92ZUV2ZW50LCB1cGRhdGVQb2ludGVyKSxcbiAgICBfb25TdG9wOiAoKSA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpXG4gIH0pO1xuXG4gIHJldHVybiBwb2ludGVyO1xufVxuXG5jb25zdCBtb3VzZUV2ZW50VG9Qb2ludCA9IChlKSA9PiAoe1xuICB4OiBlLnBhZ2VYLFxuICB5OiBlLnBhZ2VZXG59KTtcblxuY29uc3QgdG91Y2hFdmVudFRvUG9pbnQgPSAoeyBjaGFuZ2VkVG91Y2hlcyB9KSA9PiAoe1xuICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG59KTtcblxuY29uc3QgZ2V0TmF0aXZlRXZlbnQgPSAoZSkgPT4gZS5vcmlnaW5hbEV2ZW50IHx8IGUubmF0aXZlRXZlbnQgfHwgZTtcblxuZXhwb3J0IGRlZmF1bHQgKGUsIHByb3BzKSA9PiB7XG4gIGNvbnN0IG5hdGl2ZUV2ZW50ID0gZ2V0TmF0aXZlRXZlbnQoZSk7XG4gIHJldHVybiAobmF0aXZlRXZlbnQudG91Y2hlcykgP1xuICAgIGNyZWF0ZVBvaW50ZXIodG91Y2hFdmVudFRvUG9pbnQoZSksIHtcbiAgICAgIG1vdmVFdmVudDogJ3RvdWNobW92ZScsXG4gICAgICBldmVudFRvUG9pbnRzOiB0b3VjaEV2ZW50VG9Qb2ludCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSkgOlxuICAgIGNyZWF0ZVBvaW50ZXIobW91c2VFdmVudFRvUG9pbnQoZSksIHtcbiAgICAgIG1vdmVFdmVudDogJ21vdXNlbW92ZScsXG4gICAgICBldmVudFRvUG9pbnRzOiBtb3VzZUV2ZW50VG9Qb2ludCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSk7XG59O1xuIl19

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmVkMGE3Nzg0MGM5NDc0MmVjNDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3ZhbHVlLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb2xvci10d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9vZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGFyYWxsZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wb2ludGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3BhcnNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9vbi1uZXh0LWZyYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvdmFsdWUtdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmcvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmcvdmFsdWUtdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7QUFDQSw0Q0FBMkMsbVg7Ozs7OztBQ1QzQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rix3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyx1MEU7Ozs7OztBQzVMM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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b2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGZlZDBhNzc4NDBjOTQ3NDJlYzQwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3BvcG1vdGlvbiA9IHJlcXVpcmUoJy4vcG9wbW90aW9uJyk7XG5cbnZhciBwb3Btb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcG9wbW90aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxud2luZG93LnBvcG1vdGlvbiA9IHBvcG1vdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bmJHOWlZV3d1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRVHM3U1VGQldTeFRPenM3TzBGQlExb3NUMEZCVHl4VFFVRlFMRWRCUVcxQ0xGTkJRVzVDSWl3aVptbHNaU0k2SW1kc2IySmhiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQXFJR0Z6SUhCdmNHMXZkR2x2YmlCbWNtOXRJQ2N1TDNCdmNHMXZkR2x2YmljN1hHNTNhVzVrYjNjdWNHOXdiVzkwYVc5dUlEMGdjRzl3Ylc5MGFXOXVPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdmdQYXRoID0gZXhwb3J0cy5zdmcgPSBleHBvcnRzLmNzcyA9IGV4cG9ydHMuUmVuZGVyZXIgPSBleHBvcnRzLnZhbHVlID0gZXhwb3J0cy5zdGFnZ2VyID0gZXhwb3J0cy50d2VlbiA9IGV4cG9ydHMucG9pbnRlciA9IGV4cG9ydHMucGh5c2ljcyA9IGV4cG9ydHMucGFyYWxsZWwgPSBleHBvcnRzLm9mZnNldCA9IGV4cG9ydHMuZGVsYXkgPSBleHBvcnRzLmNyb3NzRmFkZSA9IGV4cG9ydHMuY29tcG9zaXRlID0gZXhwb3J0cy5jb2xvclR3ZWVuID0gZXhwb3J0cy5jaGFpbiA9IGV4cG9ydHMuYmxlbmRUd2VlbnMgPSBleHBvcnRzLkFjdGlvbiA9IGV4cG9ydHMudmFsdWVUeXBlcyA9IGV4cG9ydHMudHJhbnNmb3JtID0gZXhwb3J0cy5lYXNpbmcgPSBleHBvcnRzLmNhbGMgPSBleHBvcnRzLmN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lRW5kID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBleHBvcnRzLm9uRnJhbWVFbmQgPSBleHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLm9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLm9uRnJhbWVTdGFydCA9IHVuZGVmaW5lZDtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuL2ZyYW1lc3luYycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVTdGFydCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVN0YXJ0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVVwZGF0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVSZW5kZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVSZW5kZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lRW5kJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lRW5kO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZVN0YXJ0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lU3RhcnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lVXBkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lVXBkYXRlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZVJlbmRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVJlbmRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVFbmQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVFbmQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd0aW1lU2luY2VMYXN0RnJhbWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2N1cnJlbnRGcmFtZVRpbWVzdGFtcCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY3VycmVudEZyYW1lVGltZXN0YW1wO1xuICB9XG59KTtcblxudmFyIF9jYWxjMiA9IHJlcXVpcmUoJy4vaW5jL2NhbGMnKTtcblxudmFyIF9jYWxjID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2NhbGMyKTtcblxudmFyIF9lYXNpbmcyID0gcmVxdWlyZSgnLi9pbmMvZWFzaW5nJyk7XG5cbnZhciBfZWFzaW5nID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2Vhc2luZzIpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3RyYW5zZm9ybSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90cmFuc2Zvcm1lcnMpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gcmVxdWlyZSgnLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3ZhbHVlVHlwZXMyKTtcblxudmFyIF9hY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zJyk7XG5cbnZhciBfYWN0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hY3Rpb25zKTtcblxudmFyIF9ibGVuZFR3ZWVuczIgPSByZXF1aXJlKCcuL2FjdGlvbnMvYmxlbmQtdHdlZW5zJyk7XG5cbnZhciBfYmxlbmRUd2VlbnMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmxlbmRUd2VlbnMyKTtcblxudmFyIF9jaGFpbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY2hhaW4nKTtcblxudmFyIF9jaGFpbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGFpbjIpO1xuXG52YXIgX2NvbG9yVHdlZW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NvbG9yLXR3ZWVuJyk7XG5cbnZhciBfY29sb3JUd2VlbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvclR3ZWVuMik7XG5cbnZhciBfY29tcG9zaXRlMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jb21wb3NpdGUnKTtcblxudmFyIF9jb21wb3NpdGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRlMik7XG5cbnZhciBfY3Jvc3NGYWRlMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jcm9zcy1mYWRlJyk7XG5cbnZhciBfY3Jvc3NGYWRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nyb3NzRmFkZTIpO1xuXG52YXIgX2RlbGF5MiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9kZWxheScpO1xuXG52YXIgX2RlbGF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlbGF5Mik7XG5cbnZhciBfb2Zmc2V0MiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9vZmZzZXQnKTtcblxudmFyIF9vZmZzZXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2Zmc2V0Mik7XG5cbnZhciBfcGFyYWxsZWwyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BhcmFsbGVsJyk7XG5cbnZhciBfcGFyYWxsZWwzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyYWxsZWwyKTtcblxudmFyIF9waHlzaWNzMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9waHlzaWNzJyk7XG5cbnZhciBfcGh5c2ljczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9waHlzaWNzMik7XG5cbnZhciBfcG9pbnRlcjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcG9pbnRlcicpO1xuXG52YXIgX3BvaW50ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9pbnRlcjIpO1xuXG52YXIgX3R3ZWVuMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy90d2VlbicpO1xuXG52YXIgX3R3ZWVuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuMik7XG5cbnZhciBfc3RhZ2dlcjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvc3RhZ2dlcicpO1xuXG52YXIgX3N0YWdnZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhZ2dlcjIpO1xuXG52YXIgX3ZhbHVlMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy92YWx1ZScpO1xuXG52YXIgX3ZhbHVlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlMik7XG5cbnZhciBfcmVuZGVyZXJzID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMnKTtcblxudmFyIF9yZW5kZXJlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVuZGVyZXJzKTtcblxudmFyIF9jc3MyID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMvY3NzJyk7XG5cbnZhciBfY3NzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NzczIpO1xuXG52YXIgX3N2ZzIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9zdmcnKTtcblxudmFyIF9zdmczID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnMik7XG5cbnZhciBfc3ZnUGF0aDIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9zdmctcGF0aCcpO1xuXG52YXIgX3N2Z1BhdGgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnUGF0aDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5leHBvcnRzLmNhbGMgPSBfY2FsYztcbmV4cG9ydHMuZWFzaW5nID0gX2Vhc2luZztcbmV4cG9ydHMudHJhbnNmb3JtID0gX3RyYW5zZm9ybTtcbmV4cG9ydHMudmFsdWVUeXBlcyA9IF92YWx1ZVR5cGVzO1xuXG4vLyBBY3Rpb25zXG5cbmV4cG9ydHMuQWN0aW9uID0gX2FjdGlvbnMyLmRlZmF1bHQ7XG5leHBvcnRzLmJsZW5kVHdlZW5zID0gX2JsZW5kVHdlZW5zMy5kZWZhdWx0O1xuZXhwb3J0cy5jaGFpbiA9IF9jaGFpbjMuZGVmYXVsdDtcbmV4cG9ydHMuY29sb3JUd2VlbiA9IF9jb2xvclR3ZWVuMy5kZWZhdWx0O1xuZXhwb3J0cy5jb21wb3NpdGUgPSBfY29tcG9zaXRlMy5kZWZhdWx0O1xuZXhwb3J0cy5jcm9zc0ZhZGUgPSBfY3Jvc3NGYWRlMy5kZWZhdWx0O1xuZXhwb3J0cy5kZWxheSA9IF9kZWxheTMuZGVmYXVsdDtcbmV4cG9ydHMub2Zmc2V0ID0gX29mZnNldDMuZGVmYXVsdDtcbmV4cG9ydHMucGFyYWxsZWwgPSBfcGFyYWxsZWwzLmRlZmF1bHQ7XG5leHBvcnRzLnBoeXNpY3MgPSBfcGh5c2ljczMuZGVmYXVsdDtcbmV4cG9ydHMucG9pbnRlciA9IF9wb2ludGVyMy5kZWZhdWx0O1xuZXhwb3J0cy50d2VlbiA9IF90d2VlbjMuZGVmYXVsdDtcbmV4cG9ydHMuc3RhZ2dlciA9IF9zdGFnZ2VyMy5kZWZhdWx0O1xuZXhwb3J0cy52YWx1ZSA9IF92YWx1ZTMuZGVmYXVsdDtcblxuLy8gUmVuZGVyZXJzXG5cbmV4cG9ydHMuUmVuZGVyZXIgPSBfcmVuZGVyZXJzMi5kZWZhdWx0O1xuZXhwb3J0cy5jc3MgPSBfY3NzMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmcgPSBfc3ZnMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmdQYXRoID0gX3N2Z1BhdGgzLmRlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdiM0J0YjNScGIyNHVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenR6UWtGRlJTeFpPenM3T3pzN2MwSkJRMEVzWVRzN096czdPM05DUVVOQkxHRTdPenM3T3p0elFrRkRRU3hWT3pzN096czdjMEpCUTBFc2EwSTdPenM3T3p0elFrRkRRU3h0UWpzN096czdPM05DUVVOQkxHMUNPenM3T3pzN2MwSkJRMEVzWjBJN096czdPenR6UWtGRFFTeHJRanM3T3pzN08zTkNRVU5CTEhGQ096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3VVVGSFZTeEpPMUZCUTBFc1RUdFJRVU5CTEZNN1VVRkRRU3hWT3pzN08xRkJSMHdzVFR0UlFVTkJMRmM3VVVGRFFTeExPMUZCUTBFc1ZUdFJRVU5CTEZNN1VVRkRRU3hUTzFGQlEwRXNTenRSUVVOQkxFMDdVVUZEUVN4Uk8xRkJRMEVzVHp0UlFVTkJMRTg3VVVGRFFTeExPMUZCUTBFc1R6dFJRVU5CTEVzN096czdVVUZIUVN4Uk8xRkJRMEVzUnp0UlFVTkJMRWM3VVVGRFFTeFBJaXdpWm1sc1pTSTZJbkJ2Y0cxdmRHbHZiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2SUVaeVlXMWxjM2x1WXlCelkyaGxaSFZzWlhKelhHNWxlSEJ2Y25RZ2UxeHVJQ0J2YmtaeVlXMWxVM1JoY25Rc1hHNGdJRzl1Um5KaGJXVlZjR1JoZEdVc1hHNGdJRzl1Um5KaGJXVlNaVzVrWlhJc1hHNGdJRzl1Um5KaGJXVkZibVFzWEc0Z0lHTmhibU5sYkU5dVJuSmhiV1ZUZEdGeWRDeGNiaUFnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlN4Y2JpQWdZMkZ1WTJWc1QyNUdjbUZ0WlZKbGJtUmxjaXhjYmlBZ1kyRnVZMlZzVDI1R2NtRnRaVVZ1WkN4Y2JpQWdkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxMRnh1SUNCamRYSnlaVzUwUm5KaGJXVlVhVzFsYzNSaGJYQmNibjBnWm5KdmJTQW5MaTltY21GdFpYTjVibU1uTzF4dVhHNWxlSEJ2Y25RZ0tpQmhjeUJqWVd4aklHWnliMjBnSnk0dmFXNWpMMk5oYkdNbk8xeHVaWGh3YjNKMElDb2dZWE1nWldGemFXNW5JR1p5YjIwZ0p5NHZhVzVqTDJWaGMybHVaeWM3WEc1bGVIQnZjblFnS2lCaGN5QjBjbUZ1YzJadmNtMGdabkp2YlNBbkxpOXBibU12ZEhKaGJuTm1iM0p0WlhKekp6dGNibVY0Y0c5eWRDQXFJR0Z6SUhaaGJIVmxWSGx3WlhNZ1puSnZiU0FuTGk5cGJtTXZkbUZzZFdVdGRIbHdaWE1uTzF4dVhHNHZMeUJCWTNScGIyNXpYRzVsZUhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dllXTjBhVzl1Y3ljN1hHNWxlSEJ2Y25RZ1lteGxibVJVZDJWbGJuTWdabkp2YlNBbkxpOWhZM1JwYjI1ekwySnNaVzVrTFhSM1pXVnVjeWM3WEc1bGVIQnZjblFnWTJoaGFXNGdabkp2YlNBbkxpOWhZM1JwYjI1ekwyTm9ZV2x1Snp0Y2JtVjRjRzl5ZENCamIyeHZjbFIzWldWdUlHWnliMjBnSnk0dllXTjBhVzl1Y3k5amIyeHZjaTEwZDJWbGJpYzdYRzVsZUhCdmNuUWdZMjl0Y0c5emFYUmxJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OWpiMjF3YjNOcGRHVW5PMXh1Wlhod2IzSjBJR055YjNOelJtRmtaU0JtY205dElDY3VMMkZqZEdsdmJuTXZZM0p2YzNNdFptRmtaU2M3WEc1bGVIQnZjblFnWkdWc1lYa2dabkp2YlNBbkxpOWhZM1JwYjI1ekwyUmxiR0Y1Snp0Y2JtVjRjRzl5ZENCdlptWnpaWFFnWm5KdmJTQW5MaTloWTNScGIyNXpMMjltWm5ObGRDYzdYRzVsZUhCdmNuUWdjR0Z5WVd4c1pXd2dabkp2YlNBbkxpOWhZM1JwYjI1ekwzQmhjbUZzYkdWc0p6dGNibVY0Y0c5eWRDQndhSGx6YVdOeklHWnliMjBnSnk0dllXTjBhVzl1Y3k5d2FIbHphV056Snp0Y2JtVjRjRzl5ZENCd2IybHVkR1Z5SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTl3YjJsdWRHVnlKenRjYm1WNGNHOXlkQ0IwZDJWbGJpQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdmRIZGxaVzRuTzF4dVpYaHdiM0owSUhOMFlXZG5aWElnWm5KdmJTQW5MaTloWTNScGIyNXpMM04wWVdkblpYSW5PMXh1Wlhod2IzSjBJSFpoYkhWbElHWnliMjBnSnk0dllXTjBhVzl1Y3k5MllXeDFaU2M3WEc1Y2JpOHZJRkpsYm1SbGNtVnljMXh1Wlhod2IzSjBJRkpsYm1SbGNtVnlJR1p5YjIwZ0p5NHZjbVZ1WkdWeVpYSnpKenRjYm1WNGNHOXlkQ0JqYzNNZ1puSnZiU0FuTGk5eVpXNWtaWEpsY25NdlkzTnpKenRjYm1WNGNHOXlkQ0J6ZG1jZ1puSnZiU0FuTGk5eVpXNWtaWEpsY25NdmMzWm5KenRjYm1WNGNHOXlkQ0J6ZG1kUVlYUm9JR1p5YjIwZ0p5NHZjbVZ1WkdWeVpYSnpMM04yWnkxd1lYUm9KenRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG4vKlxuICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcmV0dXJuIFtudW1iZXJdXG4qL1xudmFyIHRvRGVjaW1hbCA9IGZ1bmN0aW9uIChudW0pIHtcbiAgdmFyIHByZWNpc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDIgOiBhcmd1bWVudHNbMV07XG5cbiAgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufTtcblxuLypcbiAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgXG4gIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICBhcmUgYXQgMCwwXG4gIFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbn07XG5cbi8qXG4gIERpbGF0ZVxuICBcbiAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICBcbiAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gIFxuICBhIC0tLS0tLS0tLSBiXG4gIFxuICB0b1xuICBcbiAgYSAtLS0tIGJcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xudmFyIGRpbGF0ZSA9IGV4cG9ydHMuZGlsYXRlID0gZnVuY3Rpb24gKGEsIGIsIGRpbGF0aW9uKSB7XG4gIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xudmFyIGRpc3RhbmNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGZ1bmN0aW9uIChhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gWkVST19QT0lOVCA6IGFyZ3VtZW50c1sxXTtcblxuICAvLyAxRCBkaW1lbnNpb25zXG4gIGlmICgoMCwgX3V0aWxzLmlzTnVtKShhKSkge1xuICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICB2YXIgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgdmFyIHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgIHZhciB6RGVsdGEgPSAoMCwgX3V0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGVsdGEsIDIpICsgTWF0aC5wb3coeURlbHRhLCAyKSArIE1hdGgucG93KHpEZWx0YSwgMikpO1xuICB9XG59O1xuXG4vKlxuICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG52YXIgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZnVuY3Rpb24gKGZyb20sIHRvLCB2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcbn07XG5cbi8qXG4gIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbnZhciBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHByb2dyZXNzKSB7XG4gIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG52YXIgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGZ1bmN0aW9uIChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkge1xuICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gIHJldHVybiB7XG4gICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gIH07XG59O1xuXG4vKlxuICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG52YXIgcmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbn07XG5cbi8qXG4gIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbikge1xuICB2YXIgc21vb3RoaW5nID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1szXTtcbiAgcmV0dXJuIHRvRGVjaW1hbChvbGRWYWx1ZSArIGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpO1xufTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZnVuY3Rpb24gKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gKDAsIF91dGlscy5pc051bSkoeHBzKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xufTtcblxuLypcbiAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgcmV0dXJuIHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcbn07XG5cbi8qXG4gIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gIFxuICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbnZhciBzdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGZ1bmN0aW9uIChzdGVwcywgcHJvZ3Jlc3MpIHtcbiAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gIHZhciB0YXJnZXQgPSAxIC0gMSAvIHN0ZXBzO1xuICB2YXIgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZZMkZzWXk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96czdPenM3T3pzN1FVRlRRU3hKUVVGTkxGbEJRVmtzVlVGQlF5eEhRVUZFTEVWQlFYZENPMEZCUVVFc1RVRkJiRUlzVTBGQmEwSXNlVVJCUVU0c1EwRkJUVHM3UVVGRGVFTXNkVUpCUVZrc1JVRkJXaXhGUVVGclFpeFRRVUZzUWp0QlFVTkJMRk5CUVU4c1MwRkJTeXhMUVVGTUxFTkJRVmNzVFVGQlRTeFRRVUZxUWl4SlFVRTRRaXhUUVVGeVF6dEJRVU5FTEVOQlNFUTdPMEZCUzBFc1NVRkJUU3hoUVVGaE8wRkJRMnBDTEV0QlFVY3NRMEZFWXp0QlFVVnFRaXhMUVVGSExFTkJSbU03UVVGSGFrSXNTMEZCUnp0QlFVaGpMRU5CUVc1Q096dEJRVTFCTEVsQlFVMHNZVUZCWVN4VlFVRkRMRU5CUVVRc1JVRkJTU3hEUVVGS08wRkJRVUVzVTBGQlZTeExRVUZMTEVkQlFVd3NRMEZCVXl4SlFVRkpMRU5CUVdJc1EwRkJWanRCUVVGQkxFTkJRVzVDT3pzN096czdPenM3T3pzN1FVRlpUeXhKUVVGTkxIZENRVUZSTEZWQlFVTXNRMEZCUkR0QlFVRkJMRTFCUVVrc1EwRkJTaXg1UkVGQlVTeFZRVUZTTzBGQlFVRXNVMEZCZFVJc2FVSkJRV2xDTEV0QlFVc3NTMEZCVEN4RFFVRlhMRVZCUVVVc1EwRkJSaXhIUVVGTkxFVkJRVVVzUTBGQmJrSXNSVUZCYzBJc1JVRkJSU3hEUVVGR0xFZEJRVTBzUlVGQlJTeERRVUU1UWl4RFFVRnFRaXhEUVVGMlFqdEJRVUZCTEVOQlFXUTdPenM3T3pzN08wRkJVVUVzU1VGQlRTdzRRMEZCYlVJc1ZVRkJReXhQUVVGRU8wRkJRVUVzVTBGQllTeFZRVUZWTEV0QlFVc3NSVUZCWml4SFFVRnZRaXhIUVVGcVF6dEJRVUZCTEVOQlFYcENPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVc5Q1FTeEpRVUZOTERCQ1FVRlRMRlZCUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVW9zUlVGQlR5eFJRVUZRTzBGQlFVRXNVMEZCYjBJc1NVRkJTeXhEUVVGRExFbEJRVWtzUTBGQlRDeEpRVUZWTEZGQlFXNURPMEZCUVVFc1EwRkJaanM3T3pzN096czdPenM3UVVGWFFTeEpRVUZOTERoQ1FVRlhMRlZCUVVNc1EwRkJSQ3hGUVVGMVFqdEJRVUZCTEUxQlFXNUNMRU5CUVcxQ0xIbEVRVUZtTEZWQlFXVTdPenRCUVVVM1F5eE5RVUZKTEd0Q1FVRk5MRU5CUVU0c1EwRkJTaXhGUVVGak8wRkJRMW9zVjBGQlR5eFhRVUZYTEVOQlFWZ3NSVUZCWXl4RFFVRmtMRU5CUVZBN096dEJRVWRFTEVkQlNrUXNUVUZKVHp0QlFVTk1MRkZCUVUwc1UwRkJVeXhYUVVGWExFVkJRVVVzUTBGQllpeEZRVUZuUWl4RlFVRkZMRU5CUVd4Q0xFTkJRV1k3UVVGRFFTeFJRVUZOTEZOQlFWTXNWMEZCVnl4RlFVRkZMRU5CUVdJc1JVRkJaMElzUlVGQlJTeERRVUZzUWl4RFFVRm1PMEZCUTBFc1VVRkJUU3hUUVVGVkxHdENRVUZOTEVWQlFVVXNRMEZCVWl4RFFVRkVMRWRCUVdVc1YwRkJWeXhGUVVGRkxFTkJRV0lzUlVGQlowSXNSVUZCUlN4RFFVRnNRaXhEUVVGbUxFZEJRWE5ETEVOQlFYSkVPenRCUVVWQkxGZEJRVThzUzBGQlN5eEpRVUZNTEVOQlFWVXNVMEZCUXl4TlFVRkVMRVZCUVZjc1EwRkJXQ3hoUVVGcFFpeE5RVUZxUWl4RlFVRXlRaXhEUVVFelFpeGhRVUZwUXl4TlFVRnFReXhGUVVFeVF5eERRVUV6UXl4RFFVRldMRU5CUVZBN1FVRkRSRHRCUVVOR0xFTkJZazA3T3pzN096czdPenM3T3pzN08wRkJNa0pCTEVsQlFVMHNjMFJCUVhWQ0xGVkJRVU1zU1VGQlJDeEZRVUZQTEVWQlFWQXNSVUZCVnl4TFFVRllPMEZCUVVFc1UwRkJjVUlzUTBGQlF5eFJRVUZSTEVsQlFWUXNTMEZCYTBJc1MwRkJTeXhKUVVGMlFpeERRVUZ5UWp0QlFVRkJMRU5CUVRkQ096czdPenM3T3pzN096czdPMEZCWVVFc1NVRkJUU3h6UkVGQmRVSXNWVUZCUXl4SlFVRkVMRVZCUVU4c1JVRkJVQ3hGUVVGWExGRkJRVmc3UVVGQlFTeFRRVUY1UWl4RFFVRkZMRkZCUVVZc1IwRkJZU3hKUVVGa0xFZEJRWFZDTEZkQlFWY3NSVUZCYkVNc1IwRkJkME1zU1VGQmFFVTdRVUZCUVN4RFFVRTNRanM3T3pzN096czdPenRCUVZWQkxFbEJRVTBzWjBWQlFUUkNMRlZCUVVNc1RVRkJSQ3hGUVVGVExFdEJRVlFzUlVGQlowSXNVVUZCYUVJc1JVRkJOa0k3UVVGRGNFVXNWVUZCVVN4cFFrRkJhVUlzUzBGQmFrSXNRMEZCVWpzN1FVRkZRU3hUUVVGUE8wRkJRMHdzVDBGQlJ5eFhRVUZYTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1EwRkJXQ3hIUVVFMlFpeFBRVUZQTEVOQlJHeERPMEZCUlV3c1QwRkJSeXhYUVVGWExFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCV0N4SFFVRTJRaXhQUVVGUE8wRkJSbXhETEVkQlFWQTdRVUZKUkN4RFFWQk5PenM3T3pzN096dEJRV1ZCTEVsQlFVMHNPRU5CUVcxQ0xGVkJRVU1zVDBGQlJEdEJRVUZCTEZOQlFXRXNWVUZCVlN4SFFVRldMRWRCUVdkQ0xFdEJRVXNzUlVGQmJFTTdRVUZCUVN4RFFVRjZRanM3T3pzN096czdPenRCUVZWQkxFbEJRVTBzTUVKQlFWTXNWVUZCUXl4UlFVRkVMRVZCUVZjc1VVRkJXQ3hGUVVGeFFpeFJRVUZ5UWp0QlFVRkJMRTFCUVN0Q0xGTkJRUzlDTEhsRVFVRXlReXhEUVVFelF6dEJRVUZCTEZOQlFXbEVMRlZCUVZVc1YwRkJXU3haUVVGWkxGZEJRVmNzVVVGQmRrSXNTVUZCYlVNc1MwRkJTeXhIUVVGTUxFTkJRVk1zVTBGQlZDeEZRVUZ2UWl4UlFVRndRaXhEUVVGNlJDeERRVUZxUkR0QlFVRkJMRU5CUVdZN096czdPenM3TzBGQlVVRXNTVUZCVFN4M1EwRkJaMElzVlVGQlF5eEhRVUZFTEVWQlFVMHNZVUZCVGp0QlFVRkJMRk5CUVhsQ0xHdENRVUZOTEVkQlFVNHNRMEZCUkN4SFFVRmxMRTlCUVU4c1QwRkJUeXhoUVVGa0xFTkJRV1lzUjBGQk9FTXNRMEZCZEVVN1FVRkJRU3hEUVVGMFFqczdPenM3T3pzN1FVRlJRU3hKUVVGTkxEQkRRVUZwUWl4VlFVRkRMRkZCUVVRc1JVRkJWeXhoUVVGWU8wRkJRVUVzVTBGQk5rSXNXVUZCV1N4UFFVRlBMR0ZCUVc1Q0xFTkJRVGRDTzBGQlFVRXNRMEZCZGtJN096czdPenM3T3p0QlFWTkJMRWxCUVUwc2MwTkJRV1VzVlVGQlF5eExRVUZFTEVWQlFWRXNVVUZCVWl4RlFVRnhRanRCUVVNdlF5eE5RVUZOTEZWQlFWVXNTMEZCU3l4UlFVRlJMRU5CUVdJc1EwRkJhRUk3UVVGRFFTeE5RVUZOTEZOQlFWTXNTVUZCU3l4SlFVRkpMRXRCUVhoQ08wRkJRMEVzVFVGQlRTeHRRa0ZCYlVJc1MwRkJTeXhIUVVGTUxFTkJRVk1zVjBGQlZ5eE5RVUZ3UWl4RlFVRTBRaXhEUVVFMVFpeERRVUY2UWpzN1FVRkZRU3hUUVVGUExFdEJRVXNzUzBGQlRDeERRVUZYTEcxQ1FVRnRRaXhQUVVFNVFpeEpRVUY1UXl4UFFVRm9SRHRCUVVORUxFTkJUazBpTENKbWFXeGxJam9pWTJGc1l5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHbHpUblZ0SUgwZ1puSnZiU0FuTGk5MWRHbHNjeWM3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnYm5WdFltVnlJSFJ2SUhnZ1pHVmphVzFoYkNCd2JHRmpaWE5jYmx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wxY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMWNiaW92WEc1amIyNXpkQ0IwYjBSbFkybHRZV3dnUFNBb2JuVnRMQ0J3Y21WamFYTnBiMjRnUFNBeUtTQTlQaUI3WEc0Z0lIQnlaV05wYzJsdmJpQTlJREV3SUNvcUlIQnlaV05wYzJsdmJqdGNiaUFnY21WMGRYSnVJRTFoZEdndWNtOTFibVFvYm5WdElDb2djSEpsWTJsemFXOXVLU0F2SUhCeVpXTnBjMmx2Ymp0Y2JuMDdYRzVjYm1OdmJuTjBJRnBGVWs5ZlVFOUpUbFFnUFNCN1hHNGdJSGc2SURBc1hHNGdJSGs2SURBc1hHNGdJSG82SURCY2JuMDdYRzVjYm1OdmJuTjBJR1JwYzNSaGJtTmxNVVFnUFNBb1lTd2dZaWtnUFQ0Z1RXRjBhQzVoWW5Nb1lTQXRJR0lwTzF4dVhHNHZLbHh1SUNCQmJtZHNaU0JpWlhSM1pXVnVJSEJ2YVc1MGMxeHVJQ0JjYmlBZ1ZISmhibk5zWVhSbGN5QjBhR1VnYUhsd2IzUm9aWFJwWTJGc0lHeHBibVVnYzI4Z2RHaGhkQ0IwYUdVZ0oyWnliMjBuSUdOdmIzSmthVzVoZEdWelhHNGdJR0Z5WlNCaGRDQXdMREJjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dXQ0JoYm1RZ1dTQmpiMjl5WkdsdVlYUmxjeUJ2WmlCbWNtOXRJSEJ2YVc1MFhHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dXQ0JoYm1RZ1dTQmpiM0prYVc1aGRHVnpJRzltSUhSdklIQnZhVzUwWEc0Z0lFQnlaWFIxY200Z1czSmhaR2xoYmwwNklFRnVaMnhsSUdKbGRIZGxaVzRnZEdobElIUjNieUJ3YjJsdWRITWdhVzRnY21Ga2FXRnVjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JoYm1kc1pTQTlJQ2hoTENCaUlEMGdXa1ZTVDE5UVQwbE9WQ2tnUFQ0Z2NtRmthV0Z1YzFSdlJHVm5jbVZsY3loTllYUm9MbUYwWVc0eUtHRXVlQ0F0SUdJdWVDd2dZUzU1SUMwZ1lpNTVLU2s3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnWkdWbmNtVmxjeUIwYnlCeVlXUnBZVzV6WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJR1JsWjNKbFpYTmNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdhVzRnY21Ga2FXRnVjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrWldkeVpXVnpWRzlTWVdScFlXNXpJRDBnS0dSbFozSmxaWE1wSUQwK0lHUmxaM0psWlhNZ0tpQk5ZWFJvTGxCSklDOGdNVGd3TzF4dVhHNHZLbHh1SUNCRWFXeGhkR1ZjYmlBZ1hHNGdJRU5vWVc1blpTQjBhR1VnY0hKdlozSmxjM05wYjI0Z1ltVjBkMlZsYmlCaElHRnVaQ0JpSUdGalkyOXlaR2x1WnlCMGJ5QmthV3hoZEdsdmJpNWNiaUFnWEc0Z0lGTnZJR1JwYkdGMGFXOXVJRDBnTUM0MUlIZHZkV3hrSUdOb1lXNW5aVnh1SUNCY2JpQWdZU0F0TFMwdExTMHRMUzBnWWx4dUlDQmNiaUFnZEc5Y2JpQWdYRzRnSUdFZ0xTMHRMU0JpWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJ5WlhacGIzVnpJSFpoYkhWbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFUnBiR0YwWlNCd2NtOW5jbVZ6Y3lCaWVTQjRYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZCeVpYWnBiM1Z6SUhaaGJIVmxJSEJzZFhNZ2RHaGxJR1JwYkdGMFpXUWdaR2xtWm1WeVpXNWpaVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrYVd4aGRHVWdQU0FvWVN3Z1lpd2daR2xzWVhScGIyNHBJRDArSUdFZ0t5QW9LR0lnTFNCaEtTQXFJR1JwYkdGMGFXOXVLVHRjYmx4dUx5cGNiaUFnUkdsemRHRnVZMlZjYmlBZ1hHNGdJRkpsZEhWeWJuTWdkR2hsSUdScGMzUmhibU5sSUdKbGRIZGxaVzRnZEhkdklHNGdaR2x0Wlc1emFXOXVZV3dnY0c5cGJuUnpMbHh1SUNCY2JpQWdRSEJoY21GdElGdHZZbXBsWTNRdmJuVnRZbVZ5WFRvZ2VDQmhibVFnZVNCdmNpQnFkWE4wSUhnZ2IyWWdjRzlwYm5RZ1FWeHVJQ0JBY0dGeVlXMGdXMjlpYW1WamRDOXVkVzFpWlhKZE9pQW9iM0IwYVc5dVlXd3BPaUI0SUdGdVpDQjVJRzl5SUdwMWMzUWdlQ0J2WmlCd2IybHVkQ0JDWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGUm9aU0JrYVhOMFlXNWpaU0JpWlhSM1pXVnVJSFJvWlNCMGQyOGdjRzlwYm5SelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHUnBjM1JoYm1ObElEMGdLR0VzSUdJZ1BTQmFSVkpQWDFCUFNVNVVLU0E5UGlCN1hHNGdJQzh2SURGRUlHUnBiV1Z1YzJsdmJuTmNiaUFnYVdZZ0tHbHpUblZ0S0dFcEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdScGMzUmhibU5sTVVRb1lTd2dZaWs3WEc1Y2JpQWdMeThnVFhWc2RHa3RaR2x0Wlc1emFXOXVZV3hjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0JqYjI1emRDQjRSR1ZzZEdFZ1BTQmthWE4wWVc1alpURkVLR0V1ZUN3Z1lpNTRLVHRjYmlBZ0lDQmpiMjV6ZENCNVJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlU3dnWWk1NUtUdGNiaUFnSUNCamIyNXpkQ0I2UkdWc2RHRWdQU0FvYVhOT2RXMG9ZUzU2S1NrZ1B5QmthWE4wWVc1alpURkVLR0V1ZWl3Z1lpNTZLU0E2SURBN1hHNWNiaUFnSUNCeVpYUjFjbTRnVFdGMGFDNXpjWEowS0NoNFJHVnNkR0VnS2lvZ01pa2dLeUFvZVVSbGJIUmhJQ29xSURJcElDc2dLSHBFWld4MFlTQXFLaUF5S1NrN1hHNGdJSDFjYm4wN1hHNWNiaThxWEc0Z0lGQnliMmR5WlhOeklIZHBkR2hwYmlCbmFYWmxiaUJ5WVc1blpWeHVJQ0JjYmlBZ1IybDJaVzRnWVNCc2IzZGxjaUJzYVcxcGRDQmhibVFnWVc0Z2RYQndaWElnYkdsdGFYUXNJSGRsSUhKbGRIVnliaUIwYUdVZ2NISnZaM0psYzNOY2JpQWdLR1Y0Y0hKbGMzTmxaQ0JoY3lCaElHNTFiV0psY2lBd0xURXBJSEpsY0hKbGMyVnVkR1ZrSUdKNUlIUm9aU0JuYVhabGJpQjJZV3gxWlN3Z1lXNWtYRzRnSUd4cGJXbDBJSFJvWVhRZ2NISnZaM0psYzNNZ2RHOGdkMmwwYUdsdUlEQXRNUzVjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dURzkzWlhJZ2JHbHRhWFFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZYQndaWElnYkdsdGFYUmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQjBieUJtYVc1a0lIQnliMmR5WlhOeklIZHBkR2hwYmlCbmFYWmxiaUJ5WVc1blpWeHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJRY205bmNtVnpjeUJ2WmlCMllXeDFaU0IzYVhSb2FXNGdjbUZ1WjJVZ1lYTWdaWGh3Y21WemMyVmtJREF0TVZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTQTlJQ2htY205dExDQjBieXdnZG1Gc2RXVXBJRDArSUNoMllXeDFaU0F0SUdaeWIyMHBJQzhnS0hSdklDMGdabkp2YlNrN1hHNWNiaThxWEc0Z0lGWmhiSFZsSUdsdUlISmhibWRsSUdaeWIyMGdjSEp2WjNKbGMzTmNiaUFnWEc0Z0lFZHBkbVZ1SUdFZ2JHOTNaWElnYkdsdGFYUWdZVzVrSUdGdUlIVndjR1Z5SUd4cGJXbDBMQ0IzWlNCeVpYUjFjbTRnZEdobElIWmhiSFZsSUhkcGRHaHBibHh1SUNCMGFHRjBJSEpoYm1kbElHRnpJR1Y0Y0hKbGMzTmxaQ0JpZVNCd2NtOW5jbVZ6Y3lBb1lTQnVkVzFpWlhJZ1puSnZiU0F3TFRFcFhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4dmQyVnlJR3hwYldsMElHOW1JSEpoYm1kbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWWEJ3WlhJZ2JHbHRhWFFnYjJZZ2NtRnVaMlZjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVWFHVWdjSEp2WjNKbGMzTWdZbVYwZDJWbGJpQnNiM2RsY2lCaGJtUWdkWEJ3WlhJZ2JHbHRhWFJ6SUdWNGNISmxjM05sWkNBd0xURmNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdZWE1nWTJGc1kzVnNZWFJsWkNCbWNtOXRJSEJ5YjJkeVpYTnpJSGRwZEdocGJpQnlZVzVuWlNBb2JtOTBJR3hwYldsMFpXUWdkMmwwYUdsdUlISmhibWRsS1Z4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5QTlJQ2htY205dExDQjBieXdnY0hKdlozSmxjM01wSUQwK0lDZ3RJSEJ5YjJkeVpYTnpJQ29nWm5KdmJTa2dLeUFvY0hKdlozSmxjM01nS2lCMGJ5a2dLeUJtY205dE8xeHVYRzR2S2x4dUlDQlFiMmx1ZENCbWNtOXRJR0Z1WjJ4bElHRnVaQ0JrYVhOMFlXNWpaVnh1SUNCY2JpQWdRSEJoY21GdElGdHZZbXBsWTNSZE9pQXlSQ0J3YjJsdWRDQnZaaUJ2Y21sbmFXNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJCYm1kc1pTQm1jbTl0SUc5eWFXZHBibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVScGMzUmhibU5sSUdaeWIyMGdiM0pwWjJsdVhHNGdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMDZJRU5oYkdOMWJHRjBaV1FnTWtRZ2NHOXBiblJjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY0c5cGJuUkdjbTl0UVc1bmJHVkJibVJFYVhOMFlXNWpaU0E5SUNodmNtbG5hVzRzSUdGdVoyeGxMQ0JrYVhOMFlXNWpaU2tnUFQ0Z2UxeHVJQ0JoYm1kc1pTQTlJR1JsWjNKbFpYTlViMUpoWkdsaGJuTW9ZVzVuYkdVcE8xeHVYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdlRG9nWkdsemRHRnVZMlVnS2lCTllYUm9MbU52Y3loaGJtZHNaU2tnS3lCdmNtbG5hVzR1ZUN4Y2JpQWdJQ0I1T2lCa2FYTjBZVzVqWlNBcUlFMWhkR2d1YzJsdUtHRnVaMnhsS1NBcklHOXlhV2RwYmk1NVhHNGdJSDA3WEc1OU8xeHVYRzR2S2x4dUlDQkRiMjUyWlhKMElISmhaR2xoYm5NZ2RHOGdaR1ZuY21WbGMxeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCeVlXUnBZVzV6WEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlHUmxaM0psWlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtRmthV0Z1YzFSdlJHVm5jbVZsY3lBOUlDaHlZV1JwWVc1ektTQTlQaUJ5WVdScFlXNXpJQ29nTVRnd0lDOGdUV0YwYUM1UVNUdGNibHh1THlwY2JpQWdSbkpoYldWeVlYUmxMV2x1WkdWd1pXNWtaVzUwSUhOdGIyOTBhR2x1WjF4dVhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUbVYzSUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVDJ4a0lIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkSUNodmNIUnBiMjVoYkNrNklGTnRiMjkwYUdsdVp5QW9NQ0JwY3lCdWIyNWxLVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Ylc5dmRHZ2dQU0FvYm1WM1ZtRnNkV1VzSUc5c1pGWmhiSFZsTENCa2RYSmhkR2x2Yml3Z2MyMXZiM1JvYVc1bklEMGdNQ2tnUFQ0Z2RHOUVaV05wYldGc0tHOXNaRlpoYkhWbElDc2dLR1IxY21GMGFXOXVJQ29nS0c1bGQxWmhiSFZsSUMwZ2IyeGtWbUZzZFdVcElDOGdUV0YwYUM1dFlYZ29jMjF2YjNSb2FXNW5MQ0JrZFhKaGRHbHZiaWtwS1R0Y2JseHVMeXBjYmlBZ1EyOXVkbVZ5ZENCNElIQmxjaUJ6WldOdmJtUWdkRzhnY0dWeUlHWnlZVzFsSUhabGJHOWphWFI1SUdKaGMyVmtJRzl1SUdad2MxeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmJtbDBJSEJsY2lCelpXTnZibVJjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCR2NtRnRaU0JrZFhKaGRHbHZiaUJwYmlCdGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR1ZsWkZCbGNrWnlZVzFsSUQwZ0tIaHdjeXdnWm5KaGJXVkVkWEpoZEdsdmJpa2dQVDRnS0dselRuVnRLSGh3Y3lrcElEOGdlSEJ6SUM4Z0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLU0E2SURBN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ2RtVnNiMk5wZEhrZ2FXNTBieUIyWld4cFkybDBlU0J3WlhJZ2MyVmpiMjVrWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ1YVhRZ2NHVnlJR1p5WVcxbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI0Z2FXNGdiWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCbFpXUlFaWEpUWldOdmJtUWdQU0FvZG1Wc2IyTnBkSGtzSUdaeVlXMWxSSFZ5WVhScGIyNHBJRDArSUhabGJHOWphWFI1SUNvZ0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLVHRjYmx4dUx5cGNiaUFnUTNKbFlYUmxJSE4wWlhCd1pXUWdkbVZ5YzJsdmJpQnZaaUF3TFRFZ2NISnZaM0psYzNOY2JpQWdYRzRnSUVCd1lYSmhiU0JiYVc1MFhUb2dUblZ0WW1WeUlHOW1JSE4wWlhCelhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlRkR1Z3Y0dWa0lIWmhiSFZsWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOMFpYQlFjbTluY21WemN5QTlJQ2h6ZEdWd2N5d2djSEp2WjNKbGMzTXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2MyVm5iV1Z1ZENBOUlERWdMeUFvYzNSbGNITWdMU0F4S1R0Y2JpQWdZMjl1YzNRZ2RHRnlaMlYwSUQwZ01TQXRJQ2d4SUM4Z2MzUmxjSE1wTzF4dUlDQmpiMjV6ZENCd2NtOW5jbVZ6YzA5bVZHRnlaMlYwSUQwZ1RXRjBhQzV0YVc0b2NISnZaM0psYzNNZ0x5QjBZWEpuWlhRc0lERXBPMXh1WEc0Z0lISmxkSFZ5YmlCTllYUm9MbVpzYjI5eUtIQnliMmR5WlhOelQyWlVZWEpuWlhRZ0x5QnpaV2R0Wlc1MEtTQXFJSE5sWjIxbGJuUTdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEggPSAxLjUyNTtcblxudmFyIGNyZWF0ZVJldmVyc2VkRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVSZXZlcnNlZEVhc2luZyA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNpbmcoMSAtIHApO1xuICB9O1xufTtcbnZhciBjcmVhdGVNaXJyb3JlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlTWlycm9yZWRFYXNpbmcgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwIDw9IDAuNSA/IGVhc2luZygyICogcCkgLyAyIDogKDIgLSBlYXNpbmcoMiAqICgxIC0gcCkpKSAvIDI7XG4gIH07XG59O1xuXG52YXIgbGluZWFyID0gZXhwb3J0cy5saW5lYXIgPSBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcDtcbn07XG5cbnZhciBjcmVhdGVFeHBvSW4gPSBleHBvcnRzLmNyZWF0ZUV4cG9JbiA9IGZ1bmN0aW9uIChwb3dlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gTWF0aC5wb3cocCwgcG93ZXIpO1xuICB9O1xufTtcbnZhciBlYXNlSW4gPSBleHBvcnRzLmVhc2VJbiA9IGNyZWF0ZUV4cG9JbigyKTtcbnZhciBlYXNlT3V0ID0gZXhwb3J0cy5lYXNlT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoZWFzZUluKTtcbnZhciBlYXNlSW5PdXQgPSBleHBvcnRzLmVhc2VJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGVhc2VJbik7XG5cbnZhciBjaXJjSW4gPSBleHBvcnRzLmNpcmNJbiA9IGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHApKTtcbn07XG52YXIgY2lyY091dCA9IGV4cG9ydHMuY2lyY091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGNpcmNJbik7XG52YXIgY2lyY0luT3V0ID0gZXhwb3J0cy5jaXJjSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhjaXJjT3V0KTtcblxudmFyIGNyZWF0ZUJhY2tJbiA9IGV4cG9ydHMuY3JlYXRlQmFja0luID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwICogcCAqICgocG93ZXIgKyAxKSAqIHAgLSBwb3dlcik7XG4gIH07XG59O1xudmFyIGJhY2tJbiA9IGV4cG9ydHMuYmFja0luID0gY3JlYXRlQmFja0luKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcbnZhciBiYWNrT3V0ID0gZXhwb3J0cy5iYWNrT3V0ID0gY3JlYXRlUmV2ZXJzZWRFYXNpbmcoYmFja0luKTtcbnZhciBiYWNrSW5PdXQgPSBleHBvcnRzLmJhY2tJbk91dCA9IGNyZWF0ZU1pcnJvcmVkRWFzaW5nKGJhY2tJbik7XG5cbnZhciBjcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gZXhwb3J0cy5jcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gIHZhciBiYWNrRWFzaW5nID0gY3JlYXRlQmFja0luKHBvd2VyKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIChwICo9IDIpIDwgMSA/IDAuNSAqIGJhY2tFYXNpbmcocCkgOiAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwIC0gMSkpKTtcbiAgfTtcbn07XG5cbnZhciBhbnRpY2lwYXRlID0gZXhwb3J0cy5hbnRpY2lwYXRlID0gY3JlYXRlQW50aWNpcGF0ZUVhc2luZyhERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRkJMRWxCUVUwc05rSkJRVFpDTEV0QlFXNURPenRCUVVWUExFbEJRVTBzYzBSQlFYVkNMRlZCUVVNc1RVRkJSRHRCUVVGQkxGTkJRVmtzVlVGQlF5eERRVUZFTzBGQlFVRXNWMEZCVHl4SlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGWUxFTkJRVmc3UVVGQlFTeEhRVUZhTzBGQlFVRXNRMEZCTjBJN1FVRkRRU3hKUVVGTkxITkVRVUYxUWl4VlFVRkRMRTFCUVVRN1FVRkJRU3hUUVVGWkxGVkJRVU1zUTBGQlJEdEJRVUZCTEZkQlFWRXNTMEZCU3l4SFFVRk9MRWRCUVdFc1QwRkJUeXhKUVVGSkxFTkJRVmdzU1VGQlowSXNRMEZCTjBJc1IwRkJhVU1zUTBGQlF5eEpRVUZKTEU5QlFVOHNTMEZCU3l4SlFVRkpMRU5CUVZRc1EwRkJVQ3hEUVVGTUxFbEJRVFJDTEVOQlFYQkZPMEZCUVVFc1IwRkJXanRCUVVGQkxFTkJRVGRDT3p0QlFVVkJMRWxCUVUwc01FSkJRVk1zVlVGQlF5eERRVUZFTzBGQlFVRXNVMEZCVHl4RFFVRlFPMEZCUVVFc1EwRkJaanM3UVVGRlFTeEpRVUZOTEhORFFVRmxMRlZCUVVNc1MwRkJSRHRCUVVGQkxGTkJRVmNzVlVGQlF5eERRVUZFTzBGQlFVRXNiMEpCUVU4c1EwRkJVQ3hGUVVGWkxFdEJRVm83UVVGQlFTeEhRVUZZTzBGQlFVRXNRMEZCY2tJN1FVRkRRU3hKUVVGTkxEQkNRVUZUTEdGQlFXRXNRMEZCWWl4RFFVRm1PMEZCUTBFc1NVRkJUU3cwUWtGQlZTeHhRa0ZCY1VJc1RVRkJja0lzUTBGQmFFSTdRVUZEUVN4SlFVRk5MR2REUVVGWkxIRkNRVUZ4UWl4TlFVRnlRaXhEUVVGc1FqczdRVUZGUVN4SlFVRk5MREJDUVVGVExGVkJRVU1zUTBGQlJEdEJRVUZCTEZOQlFVOHNTVUZCU1N4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGTExFbEJRVXdzUTBGQlZTeERRVUZXTEVOQlFWUXNRMEZCV0R0QlFVRkJMRU5CUVdZN1FVRkRRU3hKUVVGTkxEUkNRVUZWTEhGQ1FVRnhRaXhOUVVGeVFpeERRVUZvUWp0QlFVTkJMRWxCUVUwc1owTkJRVmtzY1VKQlFYRkNMRTlCUVhKQ0xFTkJRV3hDT3p0QlFVVkJMRWxCUVUwc2MwTkJRV1VzVlVGQlF5eExRVUZFTzBGQlFVRXNVMEZCVnl4VlFVRkRMRU5CUVVRN1FVRkJRU3hYUVVGUkxFbEJRVWtzUTBGQlRDeEpRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRlVMRWxCUVdNc1EwRkJaQ3hIUVVGclFpeExRVUUzUWl4RFFVRlFPMEZCUVVFc1IwRkJXRHRCUVVGQkxFTkJRWEpDTzBGQlEwRXNTVUZCVFN3d1FrRkJVeXhoUVVGaExEQkNRVUZpTEVOQlFXWTdRVUZEUVN4SlFVRk5MRFJDUVVGVkxIRkNRVUZ4UWl4TlFVRnlRaXhEUVVGb1FqdEJRVU5CTEVsQlFVMHNaME5CUVZrc2NVSkJRWEZDTEUxQlFYSkNMRU5CUVd4Q096dEJRVVZCTEVsQlFVMHNNRVJCUVhsQ0xGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlF5OURMRTFCUVUwc1lVRkJZU3hoUVVGaExFdEJRV0lzUTBGQmJrSTdRVUZEUVN4VFFVRlBMRlZCUVVNc1EwRkJSRHRCUVVGQkxGZEJRVkVzUTBGQlF5eExRVUZMTEVOQlFVNHNTVUZCVnl4RFFVRmFMRWRCUVdsQ0xFMUJRVTBzVjBGQlZ5eERRVUZZTEVOQlFYWkNMRWRCUVhWRExFOUJRVThzU1VGQlNTeExRVUZMTEVkQlFVd3NRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJReXhGUVVGRUxFbEJRVThzU1VGQlNTeERRVUZZTEVOQlFWb3NRMEZCV0N4RFFVRTVRenRCUVVGQkxFZEJRVkE3UVVGRFJDeERRVWhOT3p0QlFVdEJMRWxCUVUwc2EwTkJRV0VzZFVKQlFYVkNMREJDUVVGMlFpeERRVUZ1UWlJc0ltWnBiR1VpT2lKbFlYTnBibWN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQkVSVVpCVlV4VVgwOVdSVkpUU0U5UFZGOVRWRkpGVGtkVVNDQTlJREV1TlRJMU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzSmxZWFJsVW1WMlpYSnpaV1JGWVhOcGJtY2dQU0FvWldGemFXNW5LU0E5UGlBb2NDa2dQVDRnTVNBdElHVmhjMmx1WnlneElDMGdjQ2s3WEc1bGVIQnZjblFnWTI5dWMzUWdZM0psWVhSbFRXbHljbTl5WldSRllYTnBibWNnUFNBb1pXRnphVzVuS1NBOVBpQW9jQ2tnUFQ0Z0tIQWdQRDBnTUM0MUtTQS9JR1ZoYzJsdVp5Z3lJQ29nY0NrZ0x5QXlJRG9nS0RJZ0xTQmxZWE5wYm1jb01pQXFJQ2d4SUMwZ2NDa3BLU0F2SURJN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCc2FXNWxZWElnUFNBb2NDa2dQVDRnY0R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVVY0Y0c5SmJpQTlJQ2h3YjNkbGNpa2dQVDRnS0hBcElEMCtJSEFnS2lvZ2NHOTNaWEk3WEc1bGVIQnZjblFnWTI5dWMzUWdaV0Z6WlVsdUlEMGdZM0psWVhSbFJYaHdiMGx1S0RJcE8xeHVaWGh3YjNKMElHTnZibk4wSUdWaGMyVlBkWFFnUFNCamNtVmhkR1ZTWlhabGNuTmxaRVZoYzJsdVp5aGxZWE5sU1c0cE8xeHVaWGh3YjNKMElHTnZibk4wSUdWaGMyVkpiazkxZENBOUlHTnlaV0YwWlUxcGNuSnZjbVZrUldGemFXNW5LR1ZoYzJWSmJpazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmphWEpqU1c0Z1BTQW9jQ2tnUFQ0Z01TQXRJRTFoZEdndWMybHVLRTFoZEdndVlXTnZjeWh3S1NrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJseVkwOTFkQ0E5SUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bktHTnBjbU5KYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJseVkwbHVUM1YwSUQwZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY29ZMmx5WTA5MWRDazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWQ1lXTnJTVzRnUFNBb2NHOTNaWElwSUQwK0lDaHdLU0E5UGlBb2NDQXFJSEFwSUNvZ0tDaHdiM2RsY2lBcklERXBJQ29nY0NBdElIQnZkMlZ5S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JpWVdOclNXNGdQU0JqY21WaGRHVkNZV05yU1c0b1JFVkdRVlZNVkY5UFZrVlNVMGhQVDFSZlUxUlNSVTVIVkVncE8xeHVaWGh3YjNKMElHTnZibk4wSUdKaFkydFBkWFFnUFNCamNtVmhkR1ZTWlhabGNuTmxaRVZoYzJsdVp5aGlZV05yU1c0cE8xeHVaWGh3YjNKMElHTnZibk4wSUdKaFkydEpiazkxZENBOUlHTnlaV0YwWlUxcGNuSnZjbVZrUldGemFXNW5LR0poWTJ0SmJpazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWQmJuUnBZMmx3WVhSbFJXRnphVzVuSUQwZ0tIQnZkMlZ5S1NBOVBpQjdYRzRnSUdOdmJuTjBJR0poWTJ0RllYTnBibWNnUFNCamNtVmhkR1ZDWVdOclNXNG9jRzkzWlhJcE8xeHVJQ0J5WlhSMWNtNGdLSEFwSUQwK0lDZ29jQ0FxUFNBeUtTQThJREVwSUQ4Z01DNDFJQ29nWW1GamEwVmhjMmx1Wnlod0tTQTZJREF1TlNBcUlDZ3lJQzBnVFdGMGFDNXdiM2NvTWl3Z0xURXdJQ29nS0hBZ0xTQXhLU2twTzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHRnVkR2xqYVhCaGRHVWdQU0JqY21WaGRHVkJiblJwWTJsd1lYUmxSV0Z6YVc1bktFUkZSa0ZWVEZSZlQxWkZVbE5JVDA5VVgxTlVVa1ZPUjFSSUtUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2Vhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuYmxlbmRDb2xvciA9IGV4cG9ydHMuYWxwaGEgPSBleHBvcnRzLmNvbG9yID0gZXhwb3J0cy5oc2xhID0gZXhwb3J0cy5yZ2JhID0gZXhwb3J0cy5yZ2JVbml0ID0gZXhwb3J0cy5weCA9IGV4cG9ydHMuZGVncmVlcyA9IGV4cG9ydHMucGVyY2VudCA9IGV4cG9ydHMudHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSBleHBvcnRzLnN0ZXBzID0gZXhwb3J0cy53cmFwID0gZXhwb3J0cy5ub25saW5lYXJTcHJpbmcgPSBleHBvcnRzLnNwcmluZyA9IGV4cG9ydHMuZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZyA9IGV4cG9ydHMub2Zmc2V0ID0gZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGV4cG9ydHMuZmxvdyA9IGV4cG9ydHMuY29uZGl0aW9uYWwgPSBleHBvcnRzLmNsYW1wID0gZXhwb3J0cy5jbGFtcE1pbiA9IGV4cG9ydHMuY2xhbXBNYXggPSBleHBvcnRzLmFwcGVuZFVuaXQgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4vY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3BhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcblxudmFyIG5vb3AgPSBmdW5jdGlvbiAodikge1xuICByZXR1cm4gdjtcbn07XG5cbi8qKlxuICogQXBwZW5kIFVuaXRcbiAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGFwcGVuZFxuICogYXBwZW5kVW5pdCgncHgnLCAyMCkgLT4gJzIwcHgnXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVuaXQpXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBhcHBlbmRVbml0ID0gZXhwb3J0cy5hcHBlbmRVbml0ID0gZnVuY3Rpb24gKHVuaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuICcnICsgdiArIHVuaXQ7XG4gIH07XG59O1xuXG4vKipcbiAqIENsYW1wIHZhbHVlIGJldHdlZW5cbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcmVzdHJpY3QgYSBnaXZlbiB2YWx1ZSBiZXR3ZWVuIGBtaW5gIGFuZCBgbWF4YFxuICogQHBhcmFtICB7bnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge251bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBjbGFtcE1heCA9IGV4cG9ydHMuY2xhbXBNYXggPSBmdW5jdGlvbiAobWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBNYXRoLm1pbih2LCBtYXgpO1xuICB9O1xufTtcbnZhciBjbGFtcE1pbiA9IGV4cG9ydHMuY2xhbXBNaW4gPSBmdW5jdGlvbiAobWluKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBNYXRoLm1heCh2LCBtaW4pO1xuICB9O1xufTtcbnZhciBjbGFtcCA9IGV4cG9ydHMuY2xhbXAgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgdmFyIF9taW4gPSBjbGFtcE1pbihtaW4pO1xuICB2YXIgX21heCA9IGNsYW1wTWF4KG1heCk7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBfbWluKF9tYXgodikpO1xuICB9O1xufTtcblxudmFyIGNvbmRpdGlvbmFsID0gZXhwb3J0cy5jb25kaXRpb25hbCA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGlmVHJ1ZSkge1xuICB2YXIgaWZGYWxzZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IG5vb3AgOiBhcmd1bWVudHNbMl07XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBjb25kaXRpb24odikgPyBpZlRydWUodikgOiBpZkZhbHNlKHYpO1xuICB9O1xufTtcblxuLyoqXG4gKiBGbG93XG4gKiBDb21wb3NlIG90aGVyIHRyYW5zZm9ybWVycyB0byBydW4gbGluZWFyaWx5XG4gKiBmbG93KG1pbigyMCksIG1heCg0MCkpXG4gKiBAcGFyYW0gIHsuLi5mdW5jdGlvbnN9IHRyYW5zZm9ybWVyc1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbnZhciBmbG93ID0gZXhwb3J0cy5mbG93ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdHJhbnNmb3JtZXJzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdHJhbnNmb3JtZXJzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gIHZhciBpID0gMDtcblxuICByZXR1cm4gZnVuY3Rpb24gKGFjYykge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIHYgPSBhY2M7XG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldLmFwcGx5KHRyYW5zZm9ybWVycywgW3ZdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xuXG4vKipcbiAqIEludGVycG9sYXRlIGZyb20gc2V0IG9mIHZhbHVlcyB0byBhbm90aGVyXG4gKiBAcGFyYW0gIHtBcnJheX0gaW5wdXQgYXJyYXlcbiAqIEBwYXJhbSAge0FycmF5fSBvdXRwdXRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSByYW5nZUVhc2luZ1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbnZhciBpbnRlcnBvbGF0ZSA9IGV4cG9ydHMuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiAoaW5wdXQsIG91dHB1dCwgcmFuZ2VFYXNpbmcpIHtcbiAgdmFyIHJhbmdlTGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICB2YXIgZmluYWxJbmRleCA9IHJhbmdlTGVuZ3RoIC0gMTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1pbmltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPD0gaW5wdXRbMF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbMF07XG4gICAgfVxuXG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtYXhpbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2ID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgIH1cblxuICAgIHZhciBpID0gMTtcblxuICAgIC8vIEZpbmQgaW5kZXggb2YgcmFuZ2Ugc3RhcnRcbiAgICBmb3IgKDsgaSA8IHJhbmdlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpbnB1dFtpXSA+IHYgfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJvZ3Jlc3NJblJhbmdlID0gKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbnB1dFtpIC0gMV0sIGlucHV0W2ldLCB2KTtcbiAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IHJhbmdlRWFzaW5nID8gcmFuZ2VFYXNpbmdbaV0ocHJvZ3Jlc3NJblJhbmdlKSA6IHByb2dyZXNzSW5SYW5nZTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShvdXRwdXRbaSAtIDFdLCBvdXRwdXRbaV0sIGVhc2VkUHJvZ3Jlc3MpO1xuICB9O1xufTtcblxudmFyIG9mZnNldCA9IGV4cG9ydHMub2Zmc2V0ID0gZnVuY3Rpb24gKG9yaWdpbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdiAtIG9yaWdpbjtcbiAgfTtcbn07XG5cbnZhciBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gZXhwb3J0cy5nZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYWx0ZXJEaXNwbGFjZW1lbnQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyBub29wIDogYXJndW1lbnRzWzBdO1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbnN0YW50LCBvcmlnaW4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgIHZhciBkaXNwbGFjZW1lbnQgPSBvcmlnaW4gLSB2O1xuICAgICAgdmFyIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50ID0gLWNvbnN0YW50ICogKDAgLSBhbHRlckRpc3BsYWNlbWVudChNYXRoLmFicyhkaXNwbGFjZW1lbnQpKSk7XG4gICAgICByZXR1cm4gZGlzcGxhY2VtZW50IDw9IDAgPyBvcmlnaW4gKyBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudCA6IG9yaWdpbiAtIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50O1xuICAgIH07XG4gIH07XG59O1xuXG52YXIgc3ByaW5nID0gZXhwb3J0cy5zcHJpbmcgPSBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nKCk7XG52YXIgbm9ubGluZWFyU3ByaW5nID0gZXhwb3J0cy5ub25saW5lYXJTcHJpbmcgPSBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nKE1hdGguc3FydCk7XG5cbnZhciB3cmFwID0gZXhwb3J0cy53cmFwID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciByYW5nZVNpemUgPSBtYXggLSBtaW47XG4gICAgcmV0dXJuICgodiAtIG1pbikgJSByYW5nZVNpemUgKyByYW5nZVNpemUpICUgcmFuZ2VTaXplICsgbWluO1xuICB9O1xufTtcblxudmFyIHN0ZXBzID0gZXhwb3J0cy5zdGVwcyA9IGZ1bmN0aW9uIChzdGVwcywgbWluLCBtYXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIHByb2dyZXNzID0gKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShtaW4sIG1heCwgdik7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5zdGVwUHJvZ3Jlc3MpKHN0ZXBzLCBwcm9ncmVzcyk7XG4gIH07XG59O1xuXG52YXIgdHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSBleHBvcnRzLnRyYW5zZm9ybUNoaWxkVmFsdWVzID0gZnVuY3Rpb24gKGNoaWxkVHJhbnNmb3JtZXJzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGZvciAodmFyIGtleSBpbiB2KSB7XG4gICAgICB2YXIgY2hpbGRUcmFuc2Zvcm1lciA9IGNoaWxkVHJhbnNmb3JtZXJzW2tleV07XG4gICAgICBpZiAoY2hpbGRUcmFuc2Zvcm1lcikge1xuICAgICAgICB2W2tleV0gPSBjaGlsZFRyYW5zZm9ybWVyKHZba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xuXG4vLyBVbml0IHRyYW5zZm9ybWVyc1xudmFyIHBlcmNlbnQgPSBleHBvcnRzLnBlcmNlbnQgPSBhcHBlbmRVbml0KCclJyk7XG52YXIgZGVncmVlcyA9IGV4cG9ydHMuZGVncmVlcyA9IGFwcGVuZFVuaXQoJ2RlZycpO1xudmFyIHB4ID0gZXhwb3J0cy5weCA9IGFwcGVuZFVuaXQoJ3B4Jyk7XG5cbnZhciByZ2JVbml0ID0gZXhwb3J0cy5yZ2JVbml0ID0gZmxvdyhjbGFtcCgwLCAyNTUpLCBNYXRoLnJvdW5kKTtcblxudmFyIHJnYmFUZW1wbGF0ZSA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciByZWQgPSBfcmVmLnJlZDtcbiAgdmFyIGdyZWVuID0gX3JlZi5ncmVlbjtcbiAgdmFyIGJsdWUgPSBfcmVmLmJsdWU7XG4gIHZhciBfcmVmJGFscGhhID0gX3JlZi5hbHBoYTtcbiAgdmFyIGFscGhhID0gX3JlZiRhbHBoYSA9PT0gdW5kZWZpbmVkID8gMSA6IF9yZWYkYWxwaGE7XG4gIHJldHVybiAncmdiYSgnICsgcmVkICsgJywgJyArIGdyZWVuICsgJywgJyArIGJsdWUgKyAnLCAnICsgYWxwaGEgKyAnKSc7XG59O1xuXG52YXIgcmdiYSA9IGV4cG9ydHMucmdiYSA9IGZsb3codHJhbnNmb3JtQ2hpbGRWYWx1ZXMoe1xuICByZWQ6IHJnYlVuaXQsXG4gIGdyZWVuOiByZ2JVbml0LFxuICBibHVlOiByZ2JVbml0LFxuICBhbHBoYTogYWxwaGFcbn0pLCByZ2JhVGVtcGxhdGUpO1xuXG52YXIgaHNsYVRlbXBsYXRlID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gIHZhciBodWUgPSBfcmVmMi5odWU7XG4gIHZhciBzYXR1cmF0aW9uID0gX3JlZjIuc2F0dXJhdGlvbjtcbiAgdmFyIGxpZ2h0bmVzcyA9IF9yZWYyLmxpZ2h0bmVzcztcbiAgdmFyIF9yZWYyJGFscGhhID0gX3JlZjIuYWxwaGE7XG4gIHZhciBhbHBoYSA9IF9yZWYyJGFscGhhID09PSB1bmRlZmluZWQgPyAxIDogX3JlZjIkYWxwaGE7XG4gIHJldHVybiAnaHNsYSgnICsgaHVlICsgJywgJyArIHNhdHVyYXRpb24gKyAnLCAnICsgbGlnaHRuZXNzICsgJywgJyArIGFscGhhICsgJyknO1xufTtcblxudmFyIGhzbGEgPSBleHBvcnRzLmhzbGEgPSBmbG93KHRyYW5zZm9ybUNoaWxkVmFsdWVzKHtcbiAgaHVlOiBwYXJzZUZsb2F0LFxuICBzYXR1cmF0aW9uOiBwZXJjZW50LFxuICBsaWdodG5lc3M6IHBlcmNlbnQsXG4gIGFscGhhOiBhbHBoYVxufSksIGhzbGFUZW1wbGF0ZSk7XG5cbnZhciBjb2xvciA9IGV4cG9ydHMuY29sb3IgPSBmdW5jdGlvbiAodikge1xuICBpZiAodi5oYXNPd25Qcm9wZXJ0eSgncmVkJykpIHtcbiAgICByZXR1cm4gcmdiYSh2KTtcbiAgfSBlbHNlIGlmICh2Lmhhc093blByb3BlcnR5KCdodWUnKSkge1xuICAgIHJldHVybiBoc2xhKHYpO1xuICB9XG4gIHJldHVybiB2O1xufTtcblxudmFyIGFscGhhID0gZXhwb3J0cy5hbHBoYSA9IGNsYW1wKDAsIDEpO1xuXG52YXIgYmxlbmQgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHYpIHtcbiAgdmFyIGZyb21FeHBvID0gZnJvbSAqIGZyb207XG4gIHZhciB0b0V4cG8gPSB0byAqIHRvO1xuICByZXR1cm4gTWF0aC5zcXJ0KHYgKiAodG9FeHBvIC0gZnJvbUV4cG8pICsgZnJvbUV4cG8pO1xufTtcbi8vIGh0dHA6Ly9jb2RlcGVuLmlvL29zdWJsYWtlL3Blbi94R1ZWYU5cbnZhciBibGVuZENvbG9yID0gZXhwb3J0cy5ibGVuZENvbG9yID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gIHZhciBmcm9tQ29sb3IgPSAoMCwgX3V0aWxzLmlzU3RyaW5nKShmcm9tKSA/ICgwLCBfcGFyc2Vycy5jb2xvcikoZnJvbSkgOiBmcm9tO1xuICB2YXIgdG9Db2xvciA9ICgwLCBfdXRpbHMuaXNTdHJpbmcpKHRvKSA/ICgwLCBfcGFyc2Vycy5jb2xvcikodG8pIDogdG87XG5cbiAgdmFyIGJsZW5kZWQgPSBfZXh0ZW5kcyh7fSwgZnJvbUNvbG9yKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gYmxlbmRlZCkge1xuICAgICAgYmxlbmRlZFtrZXldID0gYmxlbmQoZnJvbUNvbG9yW2tleV0sIHRvQ29sb3Jba2V5XSwgdik7XG4gICAgfVxuICAgIGJsZW5kZWQucmVkID0gYmxlbmQoZnJvbUNvbG9yLnJlZCwgdG9Db2xvci5yZWQsIHYpO1xuICAgIGJsZW5kZWQuZ3JlZW4gPSBibGVuZChmcm9tQ29sb3IuZ3JlZW4sIHRvQ29sb3IuZ3JlZW4sIHYpO1xuICAgIGJsZW5kZWQuYmx1ZSA9IGJsZW5kKGZyb21Db2xvci5ibHVlLCB0b0NvbG9yLmJsdWUsIHYpO1xuICAgIGJsZW5kZWQuYWxwaGEgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGZyb21Db2xvci5hbHBoYSwgdG9Db2xvci5hbHBoYSwgdik7XG4gICAgcmV0dXJuIGJsZW5kZWQ7XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRISmhibk5tYjNKdFpYSnpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdRVUZCUVRzN1FVRkRRVHM3UVVGRFFUczdRVUZGUVN4SlFVRk5MRTlCUVU4c1ZVRkJReXhEUVVGRU8wRkJRVUVzVTBGQlR5eERRVUZRTzBGQlFVRXNRMEZCWWpzN096czdPenM3TzBGQlUwOHNTVUZCVFN4clEwRkJZU3hWUVVGRExFbEJRVVE3UVVGQlFTeFRRVUZWTEZWQlFVTXNRMEZCUkR0QlFVRkJMR2RDUVVGVkxFTkJRVllzUjBGQll5eEpRVUZrTzBGQlFVRXNSMEZCVmp0QlFVRkJMRU5CUVc1Q096czdPenM3T3pzN1FVRlRRU3hKUVVGTkxEaENRVUZYTEZWQlFVTXNSMEZCUkR0QlFVRkJMRk5CUVZNc1ZVRkJReXhEUVVGRU8wRkJRVUVzVjBGQlR5eExRVUZMTEVkQlFVd3NRMEZCVXl4RFFVRlVMRVZCUVZrc1IwRkJXaXhEUVVGUU8wRkJRVUVzUjBGQlZEdEJRVUZCTEVOQlFXcENPMEZCUTBFc1NVRkJUU3c0UWtGQlZ5eFZRVUZETEVkQlFVUTdRVUZCUVN4VFFVRlRMRlZCUVVNc1EwRkJSRHRCUVVGQkxGZEJRVThzUzBGQlN5eEhRVUZNTEVOQlFWTXNRMEZCVkN4RlFVRlpMRWRCUVZvc1EwRkJVRHRCUVVGQkxFZEJRVlE3UVVGQlFTeERRVUZxUWp0QlFVTkJMRWxCUVUwc2QwSkJRVkVzVlVGQlF5eEhRVUZFTEVWQlFVMHNSMEZCVGl4RlFVRmpPMEZCUTJwRExFMUJRVTBzVDBGQlR5eFRRVUZUTEVkQlFWUXNRMEZCWWp0QlFVTkJMRTFCUVUwc1QwRkJUeXhUUVVGVExFZEJRVlFzUTBGQllqdEJRVU5CTEZOQlFVOHNWVUZCUXl4RFFVRkVPMEZCUVVFc1YwRkJUeXhMUVVGTExFdEJRVXNzUTBGQlRDeERRVUZNTEVOQlFWQTdRVUZCUVN4SFFVRlFPMEZCUTBRc1EwRktUVHM3UVVGTlFTeEpRVUZOTEc5RFFVRmpMRlZCUVVNc1UwRkJSQ3hGUVVGWkxFMUJRVm83UVVGQlFTeE5RVUZ2UWl4UFFVRndRaXg1UkVGQk9FSXNTVUZCT1VJN1FVRkJRU3hUUVVGMVF5eFZRVUZETEVOQlFVUXNSVUZCVHp0QlFVTjJSU3hYUVVGUExGVkJRVlVzUTBGQlZpeEpRVUZsTEU5QlFVOHNRMEZCVUN4RFFVRm1MRWRCUVRKQ0xGRkJRVkVzUTBGQlVpeERRVUZzUXp0QlFVTkVMRWRCUmpCQ08wRkJRVUVzUTBGQmNFSTdPenM3T3pzN096dEJRVmRCTEVsQlFVMHNjMEpCUVU4c1dVRkJjVUk3UVVGQlFTeHZRMEZCYWtJc1dVRkJhVUk3UVVGQmFrSXNaMEpCUVdsQ08wRkJRVUU3TzBGQlEzWkRMRTFCUVUwc2EwSkJRV3RDTEdGQlFXRXNUVUZCY2tNN1FVRkRRU3hOUVVGSkxFbEJRVWtzUTBGQlVqczdRVUZGUVN4VFFVRlBMRlZCUVVNc1IwRkJSQ3hGUVVGclFqdEJRVUZCTEhWRFFVRlVMRWxCUVZNN1FVRkJWQ3hWUVVGVE8wRkJRVUU3TzBGQlEzWkNMRkZCUVVrc1NVRkJTU3hIUVVGU08wRkJRMEVzVTBGQlN5eEpRVUZKTEVOQlFWUXNSVUZCV1N4SlFVRkpMR1ZCUVdoQ0xFVkJRV2xETEVkQlFXcERMRVZCUVhORE8wRkJRM0JETEZWQlFVa3NZVUZCWVN4RFFVRmlMSFZDUVVGblFpeERRVUZvUWl4VFFVRnpRaXhKUVVGMFFpeEZRVUZLTzBGQlEwUTdPMEZCUlVRc1YwRkJUeXhEUVVGUU8wRkJRMFFzUjBGUVJEdEJRVkZFTEVOQldrMDdPenM3T3pzN096dEJRWEZDUVN4SlFVRk5MRzlEUVVGakxGVkJRVU1zUzBGQlJDeEZRVUZSTEUxQlFWSXNSVUZCWjBJc1YwRkJhRUlzUlVGQlowTTdRVUZEZWtRc1RVRkJUU3hqUVVGakxFMUJRVTBzVFVGQk1VSTdRVUZEUVN4TlFVRk5MR0ZCUVdFc1kwRkJZeXhEUVVGcVF6czdRVUZGUVN4VFFVRlBMRlZCUVVNc1EwRkJSQ3hGUVVGUE96dEJRVVZhTEZGQlFVa3NTMEZCU3l4TlFVRk5MRU5CUVU0c1EwRkJWQ3hGUVVGdFFqdEJRVU5xUWl4aFFVRlBMRTlCUVU4c1EwRkJVQ3hEUVVGUU8wRkJRMFE3T3p0QlFVZEVMRkZCUVVrc1MwRkJTeXhOUVVGTkxGVkJRVTRzUTBGQlZDeEZRVUUwUWp0QlFVTXhRaXhoUVVGUExFOUJRVThzVlVGQlVDeERRVUZRTzBGQlEwUTdPMEZCUlVRc1VVRkJTU3hKUVVGSkxFTkJRVkk3T3p0QlFVZEJMRmRCUVU4c1NVRkJTU3hYUVVGWUxFVkJRWGRDTEVkQlFYaENMRVZCUVRaQ08wRkJRek5DTEZWQlFVa3NUVUZCVFN4RFFVRk9MRWxCUVZjc1EwRkJXQ3hKUVVGblFpeE5RVUZOTEZWQlFURkNMRVZCUVhORE8wRkJRM0JETzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3hSUVVGTkxHdENRVUZyUWl4blEwRkJjVUlzVFVGQlRTeEpRVUZKTEVOQlFWWXNRMEZCY2tJc1JVRkJiVU1zVFVGQlRTeERRVUZPTEVOQlFXNURMRVZCUVRaRExFTkJRVGRETEVOQlFYaENPMEZCUTBFc1VVRkJUU3huUWtGQmFVSXNWMEZCUkN4SFFVRm5RaXhaUVVGWkxFTkJRVm9zUlVGQlpTeGxRVUZtTEVOQlFXaENMRWRCUVd0RUxHVkJRWGhGTzBGQlEwRXNWMEZCVHl4blEwRkJjVUlzVDBGQlR5eEpRVUZKTEVOQlFWZ3NRMEZCY2tJc1JVRkJiME1zVDBGQlR5eERRVUZRTEVOQlFYQkRMRVZCUVN0RExHRkJRUzlETEVOQlFWQTdRVUZEUkN4SFFYWkNSRHRCUVhkQ1JDeERRVFZDVFRzN1FVRTRRa0VzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRTFCUVVRN1FVRkJRU3hUUVVGWkxGVkJRVU1zUTBGQlJEdEJRVUZCTEZkQlFVOHNTVUZCU1N4TlFVRllPMEZCUVVFc1IwRkJXanRCUVVGQkxFTkJRV1k3TzBGQlJVRXNTVUZCVFN4elJVRkJLMEk3UVVGQlFTeE5RVUZETEdsQ1FVRkVMSGxFUVVGeFFpeEpRVUZ5UWp0QlFVRkJMRk5CUVRoQ0xGVkJRVU1zVVVGQlJDeEZRVUZYTEUxQlFWZzdRVUZCUVN4WFFVRnpRaXhWUVVGRExFTkJRVVFzUlVGQlR6dEJRVU55Unl4VlFVRk5MR1ZCUVdVc1UwRkJVeXhEUVVFNVFqdEJRVU5CTEZWQlFVMHNOa0pCUVRaQ0xFTkJRVVVzVVVGQlJpeEpRVUZqTEVsQlFVa3NhMEpCUVd0Q0xFdEJRVXNzUjBGQlRDeERRVUZUTEZsQlFWUXNRMEZCYkVJc1EwRkJiRUlzUTBGQmJrTTdRVUZEUVN4aFFVRlJMR2RDUVVGblFpeERRVUZxUWl4SFFVRnpRaXhUUVVGVExEQkNRVUV2UWl4SFFVRTBSQ3hUUVVGVExEQkNRVUUxUlR0QlFVTkVMRXRCU25sRk8wRkJRVUVzUjBGQk9VSTdRVUZCUVN4RFFVRnlRenM3UVVGTlFTeEpRVUZOTERCQ1FVRlRMRGhDUVVGbU8wRkJRMEVzU1VGQlRTdzBRMEZCYTBJc05rSkJRVFpDTEV0QlFVc3NTVUZCYkVNc1EwRkJlRUk3TzBGQlJVRXNTVUZCVFN4elFrRkJUeXhWUVVGRExFZEJRVVFzUlVGQlRTeEhRVUZPTzBGQlFVRXNVMEZCWXl4VlFVRkRMRU5CUVVRc1JVRkJUenRCUVVOMlF5eFJRVUZOTEZsQlFWa3NUVUZCVFN4SFFVRjRRanRCUVVOQkxGZEJRVThzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCVEN4SlFVRlpMRk5CUVZvc1IwRkJkMElzVTBGQmVrSXNTVUZCYzBNc1UwRkJkRU1zUjBGQmEwUXNSMEZCZWtRN1FVRkRSQ3hIUVVodFFqdEJRVUZCTEVOQlFXSTdPMEZCUzBFc1NVRkJUU3gzUWtGQlVTeFZRVUZETEV0QlFVUXNSVUZCVVN4SFFVRlNMRVZCUVdFc1IwRkJZanRCUVVGQkxGTkJRWEZDTEZWQlFVTXNRMEZCUkN4RlFVRlBPMEZCUXk5RExGRkJRVTBzVjBGQlZ5eG5RMEZCY1VJc1IwRkJja0lzUlVGQk1FSXNSMEZCTVVJc1JVRkJLMElzUTBGQkwwSXNRMEZCYWtJN1FVRkRRU3hYUVVGUExIZENRVUZoTEV0QlFXSXNSVUZCYjBJc1VVRkJjRUlzUTBGQlVEdEJRVU5FTEVkQlNHOUNPMEZCUVVFc1EwRkJaRHM3UVVGTFFTeEpRVUZOTEhORVFVRjFRaXhWUVVGRExHbENRVUZFTzBGQlFVRXNVMEZCZFVJc1ZVRkJReXhEUVVGRUxFVkJRVTg3UVVGRGFFVXNVMEZCU3l4SlFVRkpMRWRCUVZRc1NVRkJaMElzUTBGQmFFSXNSVUZCYlVJN1FVRkRha0lzVlVGQlRTeHRRa0ZCYlVJc2EwSkJRV3RDTEVkQlFXeENMRU5CUVhwQ08wRkJRMEVzVlVGQlNTeG5Ra0ZCU2l4RlFVRnpRanRCUVVOd1FpeFZRVUZGTEVkQlFVWXNTVUZCVXl4cFFrRkJhVUlzUlVGQlJTeEhRVUZHTEVOQlFXcENMRU5CUVZRN1FVRkRSRHRCUVVOR096dEJRVVZFTEZkQlFVOHNRMEZCVUR0QlFVTkVMRWRCVkcxRE8wRkJRVUVzUTBGQk4wSTdPenRCUVZsQkxFbEJRVTBzTkVKQlFWVXNWMEZCVnl4SFFVRllMRU5CUVdoQ08wRkJRMEVzU1VGQlRTdzBRa0ZCVlN4WFFVRlhMRXRCUVZnc1EwRkJhRUk3UVVGRFFTeEpRVUZOTEd0Q1FVRkxMRmRCUVZjc1NVRkJXQ3hEUVVGWU96dEJRVVZCTEVsQlFVMHNORUpCUVZVc1MwRkRja0lzVFVGQlRTeERRVUZPTEVWQlFWTXNSMEZCVkN4RFFVUnhRaXhGUVVWeVFpeExRVUZMTEV0QlJtZENMRU5CUVdoQ096dEJRVXRRTEVsQlFVMHNaVUZCWlR0QlFVRkJMRTFCUVVjc1IwRkJTQ3hSUVVGSExFZEJRVWc3UVVGQlFTeE5RVUZSTEV0QlFWSXNVVUZCVVN4TFFVRlNPMEZCUVVFc1RVRkJaU3hKUVVGbUxGRkJRV1VzU1VGQlpqdEJRVUZCTEhkQ1FVRnhRaXhMUVVGeVFqdEJRVUZCTEUxQlFYRkNMRXRCUVhKQ0xEaENRVUUyUWl4RFFVRTNRanRCUVVGQkxHMUNRVU5ZTEVkQlJGY3NWVUZEU0N4TFFVUkhMRlZCUTA4c1NVRkVVQ3hWUVVOblFpeExRVVJvUWp0QlFVRkJMRU5CUVhKQ096dEJRVWRQTEVsQlFVMHNjMEpCUVU4c1MwRkRiRUlzY1VKQlFYRkNPMEZCUTI1Q0xFOUJRVXNzVDBGRVl6dEJRVVZ1UWl4VFFVRlBMRTlCUmxrN1FVRkhia0lzVVVGQlRTeFBRVWhoTzBGQlNXNUNPMEZCU20xQ0xFTkJRWEpDTEVOQlJHdENMRVZCVDJ4Q0xGbEJVR3RDTEVOQlFXSTdPMEZCVlZBc1NVRkJUU3hsUVVGbE8wRkJRVUVzVFVGQlJ5eEhRVUZJTEZOQlFVY3NSMEZCU0R0QlFVRkJMRTFCUVZFc1ZVRkJVaXhUUVVGUkxGVkJRVkk3UVVGQlFTeE5RVUZ2UWl4VFFVRndRaXhUUVVGdlFpeFRRVUZ3UWp0QlFVRkJMREJDUVVFclFpeExRVUV2UWp0QlFVRkJMRTFCUVN0Q0xFdEJRUzlDTEN0Q1FVRjFReXhEUVVGMlF6dEJRVUZCTEcxQ1FVTllMRWRCUkZjc1ZVRkRTQ3hWUVVSSExGVkJRMWtzVTBGRVdpeFZRVU13UWl4TFFVUXhRanRCUVVGQkxFTkJRWEpDT3p0QlFVZFBMRWxCUVUwc2MwSkJRVThzUzBGRGJFSXNjVUpCUVhGQ08wRkJRMjVDTEU5QlFVc3NWVUZFWXp0QlFVVnVRaXhqUVVGWkxFOUJSazg3UVVGSGJrSXNZVUZCVnl4UFFVaFJPMEZCU1c1Q08wRkJTbTFDTEVOQlFYSkNMRU5CUkd0Q0xFVkJUMnhDTEZsQlVHdENMRU5CUVdJN08wRkJWVUVzU1VGQlRTeDNRa0ZCVVN4VlFVRkRMRU5CUVVRc1JVRkJUenRCUVVNeFFpeE5RVUZKTEVWQlFVVXNZMEZCUml4RFFVRnBRaXhMUVVGcVFpeERRVUZLTEVWQlFUWkNPMEZCUXpOQ0xGZEJRVThzUzBGQlN5eERRVUZNTEVOQlFWQTdRVUZEUkN4SFFVWkVMRTFCUlU4c1NVRkJTU3hGUVVGRkxHTkJRVVlzUTBGQmFVSXNTMEZCYWtJc1EwRkJTaXhGUVVFMlFqdEJRVU5zUXl4WFFVRlBMRXRCUVVzc1EwRkJUQ3hEUVVGUU8wRkJRMFE3UVVGRFJDeFRRVUZQTEVOQlFWQTdRVUZEUkN4RFFWQk5PenRCUVZOQkxFbEJRVTBzZDBKQlFWRXNUVUZCVFN4RFFVRk9MRVZCUVZNc1EwRkJWQ3hEUVVGa096dEJRVVZRTEVsQlFVMHNVVUZCVVN4VlFVRkRMRWxCUVVRc1JVRkJUeXhGUVVGUUxFVkJRVmNzUTBGQldDeEZRVUZwUWp0QlFVTTNRaXhOUVVGTkxGZEJRVmNzVDBGQlR5eEpRVUY0UWp0QlFVTkJMRTFCUVUwc1UwRkJVeXhMUVVGTExFVkJRWEJDTzBGQlEwRXNVMEZCVHl4TFFVRkxMRWxCUVV3c1EwRkJWU3hMUVVGTExGTkJRVk1zVVVGQlpDeEpRVUV3UWl4UlFVRndReXhEUVVGUU8wRkJRMFFzUTBGS1JEczdRVUZOVHl4SlFVRk5MR3REUVVGaExGVkJRVU1zU1VGQlJDeEZRVUZQTEVWQlFWQXNSVUZCWXp0QlFVTjBReXhOUVVGTkxGbEJRVmtzY1VKQlFWTXNTVUZCVkN4SlFVRnBRaXh2UWtGQlZ5eEpRVUZZTEVOQlFXcENMRWRCUVc5RExFbEJRWFJFTzBGQlEwRXNUVUZCVFN4VlFVRlZMSEZDUVVGVExFVkJRVlFzU1VGQlpTeHZRa0ZCVnl4RlFVRllMRU5CUVdZc1IwRkJLMElzUlVGQkwwTTdPMEZCUlVFc1RVRkJUU3gxUWtGQlpTeFRRVUZtTEVOQlFVNDdPMEZCUlVFc1UwRkJUeXhWUVVGRExFTkJRVVFzUlVGQlR6dEJRVU5hTEZOQlFVc3NTVUZCU1N4SFFVRlVMRWxCUVdkQ0xFOUJRV2hDTEVWQlFYbENPMEZCUTNaQ0xHTkJRVkVzUjBGQlVpeEpRVUZsTEUxQlFVMHNWVUZCVlN4SFFVRldMRU5CUVU0c1JVRkJjMElzVVVGQlVTeEhRVUZTTEVOQlFYUkNMRVZCUVc5RExFTkJRWEJETEVOQlFXWTdRVUZEUkR0QlFVTkVMRmxCUVZFc1IwRkJVaXhIUVVGakxFMUJRVTBzVlVGQlZTeEhRVUZvUWl4RlFVRnhRaXhSUVVGUkxFZEJRVGRDTEVWQlFXdERMRU5CUVd4RExFTkJRV1E3UVVGRFFTeFpRVUZSTEV0QlFWSXNSMEZCWjBJc1RVRkJUU3hWUVVGVkxFdEJRV2hDTEVWQlFYVkNMRkZCUVZFc1MwRkJMMElzUlVGQmMwTXNRMEZCZEVNc1EwRkJhRUk3UVVGRFFTeFpRVUZSTEVsQlFWSXNSMEZCWlN4TlFVRk5MRlZCUVZVc1NVRkJhRUlzUlVGQmMwSXNVVUZCVVN4SlFVRTVRaXhGUVVGdlF5eERRVUZ3UXl4RFFVRm1PMEZCUTBFc1dVRkJVU3hMUVVGU0xFZEJRV2RDTEdkRFFVRnhRaXhWUVVGVkxFdEJRUzlDTEVWQlFYTkRMRkZCUVZFc1MwRkJPVU1zUlVGQmNVUXNRMEZCY2tRc1EwRkJhRUk3UVVGRFFTeFhRVUZQTEU5QlFWQTdRVUZEUkN4SFFWUkVPMEZCVlVRc1EwRm9RazBpTENKbWFXeGxJam9pZEhKaGJuTm1iM0p0WlhKekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVXNJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56TENCemRHVndVSEp2WjNKbGMzTWdmU0JtY205dElDY3VMMk5oYkdNbk8xeHVhVzF3YjNKMElIc2dhWE5UZEhKcGJtY2dmU0JtY205dElDY3VMM1YwYVd4ekp6dGNibWx0Y0c5eWRDQjdJR052Ykc5eUlHRnpJSEJoY25ObFEyOXNiM0lnZlNCbWNtOXRJQ2N1TDNCaGNuTmxjbk1uTzF4dVhHNWpiMjV6ZENCdWIyOXdJRDBnS0hZcElEMCtJSFk3WEc1Y2JpOHFLbHh1SUNvZ1FYQndaVzVrSUZWdWFYUmNiaUFxSUVFZ1puVnVZM1JwYjI0Z2RHaGhkQ0IzYVd4c0lHRndjR1Z1WkZ4dUlDb2dZWEJ3Wlc1a1ZXNXBkQ2duY0hnbkxDQXlNQ2tnTFQ0Z0p6SXdjSGduWEc0Z0tpQkFjR0Z5WVcwZ0lIdHpkSEpwYm1kOUlIVnVhWFFwWEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOVhHNGdLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmhjSEJsYm1SVmJtbDBJRDBnS0hWdWFYUXBJRDArSUNoMktTQTlQaUJnSkh0MmZTUjdkVzVwZEgxZ08xeHVYRzR2S2lwY2JpQXFJRU5zWVcxd0lIWmhiSFZsSUdKbGRIZGxaVzVjYmlBcUlFTnlaV0YwWlhNZ1lTQm1kVzVqZEdsdmJpQjBhR0YwSUhkcGJHd2djbVZ6ZEhKcFkzUWdZU0JuYVhabGJpQjJZV3gxWlNCaVpYUjNaV1Z1SUdCdGFXNWdJR0Z1WkNCZ2JXRjRZRnh1SUNvZ1FIQmhjbUZ0SUNCN2JuVnRZbVZ5ZlNCdGFXNWNiaUFxSUVCd1lYSmhiU0FnZTI1MWJXSmxjbjBnYldGNFhHNGdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlYRzRnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYkdGdGNFMWhlQ0E5SUNodFlYZ3BJRDArSUNoMktTQTlQaUJOWVhSb0xtMXBiaWgyTENCdFlYZ3BPMXh1Wlhod2IzSjBJR052Ym5OMElHTnNZVzF3VFdsdUlEMGdLRzFwYmlrZ1BUNGdLSFlwSUQwK0lFMWhkR2d1YldGNEtIWXNJRzFwYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJ4aGJYQWdQU0FvYldsdUxDQnRZWGdwSUQwK0lIdGNiaUFnWTI5dWMzUWdYMjFwYmlBOUlHTnNZVzF3VFdsdUtHMXBiaWs3WEc0Z0lHTnZibk4wSUY5dFlYZ2dQU0JqYkdGdGNFMWhlQ2h0WVhncE8xeHVJQ0J5WlhSMWNtNGdLSFlwSUQwK0lGOXRhVzRvWDIxaGVDaDJLU2s3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyOXVaR2wwYVc5dVlXd2dQU0FvWTI5dVpHbDBhVzl1TENCcFpsUnlkV1VzSUdsbVJtRnNjMlVnUFNCdWIyOXdLU0E5UGlBb2Rpa2dQVDRnZTF4dUlDQnlaWFIxY200Z1kyOXVaR2wwYVc5dUtIWXBJRDhnYVdaVWNuVmxLSFlwSURvZ2FXWkdZV3h6WlNoMktUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1JteHZkMXh1SUNvZ1EyOXRjRzl6WlNCdmRHaGxjaUIwY21GdWMyWnZjbTFsY25NZ2RHOGdjblZ1SUd4cGJtVmhjbWxzZVZ4dUlDb2dabXh2ZHlodGFXNG9NakFwTENCdFlYZ29OREFwS1Z4dUlDb2dRSEJoY21GdElDQjdMaTR1Wm5WdVkzUnBiMjV6ZlNCMGNtRnVjMlp2Y20xbGNuTmNiaUFxSUVCeVpYUjFjbTRnZTJaMWJtTjBhVzl1ZlZ4dUlDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1pteHZkeUE5SUNndUxpNTBjbUZ1YzJadmNtMWxjbk1wSUQwK0lIdGNiaUFnWTI5dWMzUWdiblZ0VkhKaGJuTm1iM0p0WlhKeklEMGdkSEpoYm5ObWIzSnRaWEp6TG14bGJtZDBhRHRjYmlBZ2JHVjBJR2tnUFNBd08xeHVYRzRnSUhKbGRIVnliaUFvWVdOakxDQXVMaTVoY21kektTQTlQaUI3WEc0Z0lDQWdiR1YwSUhZZ1BTQmhZMk03WEc0Z0lDQWdabTl5SUNocElEMGdNRHNnYVNBOElHNTFiVlJ5WVc1elptOXliV1Z5Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0IySUQwZ2RISmhibk5tYjNKdFpYSnpXMmxkS0hZc0lDNHVMbUZ5WjNNcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIyTzF4dUlDQjlPMXh1ZlR0Y2JseHVMeW9xWEc0Z0tpQkpiblJsY25CdmJHRjBaU0JtY205dElITmxkQ0J2WmlCMllXeDFaWE1nZEc4Z1lXNXZkR2hsY2x4dUlDb2dRSEJoY21GdElDQjdRWEp5WVhsOUlHbHVjSFYwSUdGeWNtRjVYRzRnS2lCQWNHRnlZVzBnSUh0QmNuSmhlWDBnYjNWMGNIVjBYRzRnS2lCQWNHRnlZVzBnSUh0R2RXNWpkR2x2Ym4wZ2NtRnVaMlZGWVhOcGJtZGNiaUFxSUVCeVpYUjFjbTRnZTBaMWJtTjBhVzl1ZlZ4dUlDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FXNTBaWEp3YjJ4aGRHVWdQU0FvYVc1d2RYUXNJRzkxZEhCMWRDd2djbUZ1WjJWRllYTnBibWNwSUQwK0lIdGNiaUFnWTI5dWMzUWdjbUZ1WjJWTVpXNW5kR2dnUFNCcGJuQjFkQzVzWlc1bmRHZzdYRzRnSUdOdmJuTjBJR1pwYm1Gc1NXNWtaWGdnUFNCeVlXNW5aVXhsYm1kMGFDQXRJREU3WEc1Y2JpQWdjbVYwZFhKdUlDaDJLU0E5UGlCN1hHNGdJQ0FnTHk4Z1NXWWdkbUZzZFdVZ2IzVjBjMmxrWlNCdGFXNXBiWFZ0SUhKaGJtZGxMQ0J4ZFdsamEyeDVJSEpsZEhWeWJseHVJQ0FnSUdsbUlDaDJJRHc5SUdsdWNIVjBXekJkS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYjNWMGNIVjBXekJkTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUVsbUlIWmhiSFZsSUc5MWRITnBaR1VnYldGNGFXMTFiU0J5WVc1blpTd2djWFZwWTJ0c2VTQnlaWFIxY201Y2JpQWdJQ0JwWmlBb2RpQStQU0JwYm5CMWRGdG1hVzVoYkVsdVpHVjRYU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRzkxZEhCMWRGdG1hVzVoYkVsdVpHVjRYVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnNaWFFnYVNBOUlERTdYRzVjYmlBZ0lDQXZMeUJHYVc1a0lHbHVaR1Y0SUc5bUlISmhibWRsSUhOMFlYSjBYRzRnSUNBZ1ptOXlJQ2c3SUdrZ1BDQnlZVzVuWlV4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQnBaaUFvYVc1d2RYUmJhVjBnUGlCMklIeDhJR2tnUFQwOUlHWnBibUZzU1c1a1pYZ3BJSHRjYmlBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1kyOXVjM1FnY0hKdlozSmxjM05KYmxKaGJtZGxJRDBnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb2FXNXdkWFJiYVNBdElERmRMQ0JwYm5CMWRGdHBYU3dnZGlrN1hHNGdJQ0FnWTI5dWMzUWdaV0Z6WldSUWNtOW5jbVZ6Y3lBOUlDaHlZVzVuWlVWaGMybHVaeWtnUHlCeVlXNW5aVVZoYzJsdVoxdHBYU2h3Y205bmNtVnpjMGx1VW1GdVoyVXBJRG9nY0hKdlozSmxjM05KYmxKaGJtZGxPMXh1SUNBZ0lISmxkSFZ5YmlCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aHZkWFJ3ZFhSYmFTQXRJREZkTENCdmRYUndkWFJiYVYwc0lHVmhjMlZrVUhKdlozSmxjM01wTzF4dUlDQjlPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUc5bVpuTmxkQ0E5SUNodmNtbG5hVzRwSUQwK0lDaDJLU0E5UGlCMklDMGdiM0pwWjJsdU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVnVaWEpoZEdWT2IyNUpiblJsY21keVlYUmxaRk53Y21sdVp5QTlJQ2hoYkhSbGNrUnBjM0JzWVdObGJXVnVkQ0E5SUc1dmIzQXBJRDArSUNoamIyNXpkR0Z1ZEN3Z2IzSnBaMmx1S1NBOVBpQW9kaWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQmthWE53YkdGalpXMWxiblFnUFNCdmNtbG5hVzRnTFNCMk8xeHVJQ0JqYjI1emRDQnpjSEpwYm1kTmIyUnBabWxsWkVScGMzQnNZV05sYldWdWRDQTlJQzBnWTI5dWMzUmhiblFnS2lBb01DQXRJR0ZzZEdWeVJHbHpjR3hoWTJWdFpXNTBLRTFoZEdndVlXSnpLR1JwYzNCc1lXTmxiV1Z1ZENrcEtUdGNiaUFnY21WMGRYSnVJQ2hrYVhOd2JHRmpaVzFsYm5RZ1BEMGdNQ2tnUHlCdmNtbG5hVzRnS3lCemNISnBibWROYjJScFptbGxaRVJwYzNCc1lXTmxiV1Z1ZENBNklHOXlhV2RwYmlBdElITndjbWx1WjAxdlpHbG1hV1ZrUkdsemNHeGhZMlZ0Wlc1ME8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSE53Y21sdVp5QTlJR2RsYm1WeVlYUmxUbTl1U1c1MFpYSm5jbUYwWldSVGNISnBibWNvS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0J1YjI1c2FXNWxZWEpUY0hKcGJtY2dQU0JuWlc1bGNtRjBaVTV2YmtsdWRHVnlaM0poZEdWa1UzQnlhVzVuS0UxaGRHZ3VjM0Z5ZENrN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCM2NtRndJRDBnS0cxcGJpd2diV0Y0S1NBOVBpQW9kaWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQnlZVzVuWlZOcGVtVWdQU0J0WVhnZ0xTQnRhVzQ3WEc0Z0lISmxkSFZ5YmlBb0tIWWdMU0J0YVc0cElDVWdjbUZ1WjJWVGFYcGxJQ3NnY21GdVoyVlRhWHBsS1NBbElISmhibWRsVTJsNlpTQXJJRzFwYmp0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnpkR1Z3Y3lBOUlDaHpkR1Z3Y3l3Z2JXbHVMQ0J0WVhncElEMCtJQ2gyS1NBOVBpQjdYRzRnSUdOdmJuTjBJSEJ5YjJkeVpYTnpJRDBnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb2JXbHVMQ0J0WVhnc0lIWXBPMXh1SUNCeVpYUjFjbTRnYzNSbGNGQnliMmR5WlhOektITjBaWEJ6TENCd2NtOW5jbVZ6Y3lrN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdkSEpoYm5ObWIzSnRRMmhwYkdSV1lXeDFaWE1nUFNBb1kyaHBiR1JVY21GdWMyWnZjbTFsY25NcElEMCtJQ2gyS1NBOVBpQjdYRzRnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIyS1NCN1hHNGdJQ0FnWTI5dWMzUWdZMmhwYkdSVWNtRnVjMlp2Y20xbGNpQTlJR05vYVd4a1ZISmhibk5tYjNKdFpYSnpXMnRsZVYwN1hHNGdJQ0FnYVdZZ0tHTm9hV3hrVkhKaGJuTm1iM0p0WlhJcElIdGNiaUFnSUNBZ0lIWmJhMlY1WFNBOUlHTm9hV3hrVkhKaGJuTm1iM0p0WlhJb2RsdHJaWGxkS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnZGp0Y2JuMDdYRzVjYmk4dklGVnVhWFFnZEhKaGJuTm1iM0p0WlhKelhHNWxlSEJ2Y25RZ1kyOXVjM1FnY0dWeVkyVnVkQ0E5SUdGd2NHVnVaRlZ1YVhRb0p5VW5LVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmtaV2R5WldWeklEMGdZWEJ3Wlc1a1ZXNXBkQ2duWkdWbkp5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NIZ2dQU0JoY0hCbGJtUlZibWwwS0Nkd2VDY3BPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjbWRpVlc1cGRDQTlJR1pzYjNjb1hHNGdJR05zWVcxd0tEQXNJREkxTlNrc1hHNGdJRTFoZEdndWNtOTFibVJjYmlrN1hHNWNibU52Ym5OMElISm5ZbUZVWlcxd2JHRjBaU0E5SUNoN0lISmxaQ3dnWjNKbFpXNHNJR0pzZFdVc0lHRnNjR2hoSUQwZ01TQjlLU0E5UGlCY2JpQWdZSEpuWW1Fb0pIdHlaV1I5TENBa2UyZHlaV1Z1ZlN3Z0pIdGliSFZsZlN3Z0pIdGhiSEJvWVgwcFlEdGNibHh1Wlhod2IzSjBJR052Ym5OMElISm5ZbUVnUFNCbWJHOTNLRnh1SUNCMGNtRnVjMlp2Y20xRGFHbHNaRlpoYkhWbGN5aDdYRzRnSUNBZ2NtVmtPaUJ5WjJKVmJtbDBMRnh1SUNBZ0lHZHlaV1Z1T2lCeVoySlZibWwwTEZ4dUlDQWdJR0pzZFdVNklISm5ZbFZ1YVhRc1hHNGdJQ0FnWVd4d2FHRmNiaUFnZlNrc1hHNGdJSEpuWW1GVVpXMXdiR0YwWlZ4dUtUdGNibHh1WTI5dWMzUWdhSE5zWVZSbGJYQnNZWFJsSUQwZ0tIc2dhSFZsTENCellYUjFjbUYwYVc5dUxDQnNhV2RvZEc1bGMzTXNJR0ZzY0doaElEMGdNU0I5S1NBOVBpQmNiaUFnWUdoemJHRW9KSHRvZFdWOUxDQWtlM05oZEhWeVlYUnBiMjU5TENBa2UyeHBaMmgwYm1WemMzMHNJQ1I3WVd4d2FHRjlLV0E3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JvYzJ4aElEMGdabXh2ZHloY2JpQWdkSEpoYm5ObWIzSnRRMmhwYkdSV1lXeDFaWE1vZTF4dUlDQWdJR2gxWlRvZ2NHRnljMlZHYkc5aGRDeGNiaUFnSUNCellYUjFjbUYwYVc5dU9pQndaWEpqWlc1MExGeHVJQ0FnSUd4cFoyaDBibVZ6Y3pvZ2NHVnlZMlZ1ZEN4Y2JpQWdJQ0JoYkhCb1lWeHVJQ0I5S1N4Y2JpQWdhSE5zWVZSbGJYQnNZWFJsWEc0cE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyOXNiM0lnUFNBb2Rpa2dQVDRnZTF4dUlDQnBaaUFvZGk1b1lYTlBkMjVRY205d1pYSjBlU2duY21Wa0p5a3BJSHRjYmlBZ0lDQnlaWFIxY200Z2NtZGlZU2gyS1R0Y2JpQWdmU0JsYkhObElHbG1JQ2gyTG1oaGMwOTNibEJ5YjNCbGNuUjVLQ2RvZFdVbktTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCb2MyeGhLSFlwTzF4dUlDQjlYRzRnSUhKbGRIVnliaUIyTzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHRnNjR2hoSUQwZ1kyeGhiWEFvTUN3Z01TazdYRzVjYm1OdmJuTjBJR0pzWlc1a0lEMGdLR1p5YjIwc0lIUnZMQ0IyS1NBOVBpQjdYRzRnSUdOdmJuTjBJR1p5YjIxRmVIQnZJRDBnWm5KdmJTQXFJR1p5YjIwN1hHNGdJR052Ym5OMElIUnZSWGh3YnlBOUlIUnZJQ29nZEc4N1hHNGdJSEpsZEhWeWJpQk5ZWFJvTG5OeGNuUW9kaUFxSUNoMGIwVjRjRzhnTFNCbWNtOXRSWGh3YnlrZ0t5Qm1jbTl0Ulhod2J5azdYRzU5TzF4dUx5OGdhSFIwY0RvdkwyTnZaR1Z3Wlc0dWFXOHZiM04xWW14aGEyVXZjR1Z1TDNoSFZsWmhUbHh1Wlhod2IzSjBJR052Ym5OMElHSnNaVzVrUTI5c2IzSWdQU0FvWm5KdmJTd2dkRzhwSUQwK0lIdGNiaUFnWTI5dWMzUWdabkp2YlVOdmJHOXlJRDBnYVhOVGRISnBibWNvWm5KdmJTa2dQeUJ3WVhKelpVTnZiRzl5S0daeWIyMHBJRG9nWm5KdmJUdGNiaUFnWTI5dWMzUWdkRzlEYjJ4dmNpQTlJR2x6VTNSeWFXNW5LSFJ2S1NBL0lIQmhjbk5sUTI5c2IzSW9kRzhwT2lCMGJ6dGNibHh1SUNCamIyNXpkQ0JpYkdWdVpHVmtJRDBnZXlBdUxpNW1jbTl0UTI5c2IzSWdmVHRjYmx4dUlDQnlaWFIxY200Z0tIWXBJRDArSUh0Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdZbXhsYm1SbFpDa2dlMXh1SUNBZ0lDQWdZbXhsYm1SbFpGdHJaWGxkSUQwZ1lteGxibVFvWm5KdmJVTnZiRzl5VzJ0bGVWMHNJSFJ2UTI5c2IzSmJhMlY1WFN3Z2RpazdYRzRnSUNBZ2ZWeHVJQ0FnSUdKc1pXNWtaV1F1Y21Wa0lEMGdZbXhsYm1Rb1puSnZiVU52Ykc5eUxuSmxaQ3dnZEc5RGIyeHZjaTV5WldRc0lIWXBPMXh1SUNBZ0lHSnNaVzVrWldRdVozSmxaVzRnUFNCaWJHVnVaQ2htY205dFEyOXNiM0l1WjNKbFpXNHNJSFJ2UTI5c2IzSXVaM0psWlc0c0lIWXBPMXh1SUNBZ0lHSnNaVzVrWldRdVlteDFaU0E5SUdKc1pXNWtLR1p5YjIxRGIyeHZjaTVpYkhWbExDQjBiME52Ykc5eUxtSnNkV1VzSUhZcE8xeHVJQ0FnSUdKc1pXNWtaV1F1WVd4d2FHRWdQU0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lobWNtOXRRMjlzYjNJdVlXeHdhR0VzSUhSdlEyOXNiM0l1WVd4d2FHRXNJSFlwTzF4dUlDQWdJSEpsZEhWeWJpQmliR1Z1WkdWa08xeHVJQ0I5TzF4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29sb3IgPSBleHBvcnRzLmhzbGEgPSBleHBvcnRzLmhleCA9IGV4cG9ydHMucmdiYSA9IGV4cG9ydHMucmdiVW5pdCA9IGV4cG9ydHMuc2NhbGUgPSBleHBvcnRzLnB4ID0gZXhwb3J0cy5wZXJjZW50ID0gZXhwb3J0cy5kZWdyZWVzID0gZXhwb3J0cy5hbHBoYSA9IGV4cG9ydHMubnVtYmVyID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFZhbHVlIHR5cGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogYWxwaGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGRlZ3JlZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGhleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogaHNsYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcGVyY2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHJnYlVuaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHJnYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogc2NhbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF9wYXJzZXJzID0gcmVxdWlyZSgnLi9wYXJzZXJzJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBudW1iZXIgPSBleHBvcnRzLm51bWJlciA9IHtcbiAgdGVzdDogX3V0aWxzLmlzTnVtLFxuICBwYXJzZTogcGFyc2VGbG9hdFxufTtcblxuLy8gVmFsdWUgdHlwZXNcbnZhciBhbHBoYSA9IGV4cG9ydHMuYWxwaGEgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5hbHBoYVxufSk7XG5cbnZhciBkZWdyZWVzID0gZXhwb3J0cy5kZWdyZWVzID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJ2RlZycsIF90cmFuc2Zvcm1lcnMuZGVncmVlcyk7XG52YXIgcGVyY2VudCA9IGV4cG9ydHMucGVyY2VudCA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCclJywgX3RyYW5zZm9ybWVycy5wZXJjZW50KTtcbnZhciBweCA9IGV4cG9ydHMucHggPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgncHgnLCBfdHJhbnNmb3JtZXJzLnB4KTtcblxudmFyIHNjYWxlID0gZXhwb3J0cy5zY2FsZSA9IF9leHRlbmRzKHt9LCBudW1iZXIsIHtcbiAgZGVmYXVsdDogMVxufSk7XG5cbnZhciByZ2JVbml0ID0gZXhwb3J0cy5yZ2JVbml0ID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICB0cmFuc2Zvcm06IF90cmFuc2Zvcm1lcnMucmdiVW5pdFxufSk7XG5cbnZhciByZ2JhID0gZXhwb3J0cy5yZ2JhID0ge1xuICB0ZXN0OiBfdXRpbHMuaXNSZ2IsXG4gIHBhcnNlOiBfcGFyc2Vycy5yZ2JhLFxuICB0cmFuc2Zvcm06IF90cmFuc2Zvcm1lcnMucmdiYVxufTtcblxudmFyIGhleCA9IGV4cG9ydHMuaGV4ID0gX2V4dGVuZHMoe30sIHJnYmEsIHtcbiAgdGVzdDogX3V0aWxzLmlzSGV4LFxuICBwYXJzZTogX3BhcnNlcnMuaGV4XG59KTtcblxudmFyIGhzbGEgPSBleHBvcnRzLmhzbGEgPSB7XG4gIHRlc3Q6IF91dGlscy5pc0hzbCxcbiAgcGFyc2U6IF9wYXJzZXJzLmhzbGEsXG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5oc2xhXG59O1xuXG52YXIgY29sb3IgPSBleHBvcnRzLmNvbG9yID0ge1xuICBwYXJzZTogX3BhcnNlcnMuY29sb3IsXG4gIHRlc3Q6IF91dGlscy5pc0NvbG9yLFxuICB0cmFuc2Zvcm06IF90cmFuc2Zvcm1lcnMuY29sb3Jcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZG1Gc2RXVXRkSGx3WlhNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdRVUZoUVRzN1FVRlZRVHM3UVVGTlFUczdRVUZUVHl4SlFVRk5MREJDUVVGVE8wRkJRM0JDTEc5Q1FVUnZRanRCUVVWd1FpeFRRVUZQTzBGQlJtRXNRMEZCWmpzN08wRkJUVUVzU1VGQlRTeHhRMEZEVWl4TlFVUlJPMEZCUlZnN1FVRkdWeXhGUVVGT096dEJRVXRCTEVsQlFVMHNORUpCUVZVc01rSkJRV1VzUzBGQlppeDNRa0ZCYUVJN1FVRkRRU3hKUVVGTkxEUkNRVUZWTERKQ1FVRmxMRWRCUVdZc2QwSkJRV2hDTzBGQlEwRXNTVUZCVFN4clFrRkJTeXd5UWtGQlpTeEpRVUZtTEcxQ1FVRllPenRCUVVWQkxFbEJRVTBzY1VOQlExSXNUVUZFVVR0QlFVVllMRmRCUVZNN1FVRkdSU3hGUVVGT096dEJRVXRCTEVsQlFVMHNlVU5CUTFJc1RVRkVVVHRCUVVWWU8wRkJSbGNzUlVGQlRqczdRVUZMUVN4SlFVRk5MSE5DUVVGUE8wRkJRMnhDTEc5Q1FVUnJRanRCUVVWc1FpeHpRa0ZHYTBJN1FVRkhiRUk3UVVGSWEwSXNRMEZCWWpzN1FVRk5RU3hKUVVGTkxHbERRVU5TTEVsQlJGRTdRVUZGV0N4dlFrRkdWenRCUVVkWU8wRkJTRmNzUlVGQlRqczdRVUZOUVN4SlFVRk5MSE5DUVVGUE8wRkJRMnhDTEc5Q1FVUnJRanRCUVVWc1FpeHpRa0ZHYTBJN1FVRkhiRUk3UVVGSWEwSXNRMEZCWWpzN1FVRk5RU3hKUVVGTkxIZENRVUZSTzBGQlEyNUNMSFZDUVVSdFFqdEJRVVZ1UWl4elFrRkdiVUk3UVVGSGJrSTdRVUZJYlVJc1EwRkJaQ0lzSW1acGJHVWlPaUoyWVd4MVpTMTBlWEJsY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtseHVJQ29nVm1Gc2RXVWdkSGx3WlhOY2JpQXFYRzRnS2lCaGJIQm9ZVnh1SUNvZ1pHVm5jbVZsYzF4dUlDb2dhR1Y0WEc0Z0tpQm9jMnhoWEc0Z0tpQndaWEpqWlc1MFhHNGdLaUJ3ZUZ4dUlDb2djbWRpVlc1cGRGeHVJQ29nY21kaVhHNGdLaUJ6WTJGc1pWeHVJQ292WEc1cGJYQnZjblFnZTF4dUlDQnlaMkpWYm1sMElHRnpJSFJ5WVc1elptOXliVkpIUWxWdWFYUXNYRzRnSUhKblltRWdZWE1nZEhKaGJuTm1iM0p0VW1kaVlTeGNiaUFnWVd4d2FHRWdZWE1nZEhKaGJuTm1iM0p0UVd4d2FHRXNYRzRnSUdoemJHRWdZWE1nZEhKaGJuTm1iM0p0U0hOc1lTeGNiaUFnWTI5c2IzSWdZWE1nZEhKaGJuTm1iM0p0UTI5c2IzSXNYRzRnSUhCNElHRnpJSFJ5WVc1elptOXliVkI0TEZ4dUlDQndaWEpqWlc1MElHRnpJSFJ5WVc1elptOXliVkJsY21ObGJuUXNYRzRnSUdSbFozSmxaWE1nWVhNZ2RISmhibk5tYjNKdFJHVm5jbVZsYzF4dWZTQm1jbTl0SUNjdUwzUnlZVzV6Wm05eWJXVnljeWM3WEc1cGJYQnZjblFnZTF4dUlDQm9aWGdnWVhNZ2NHRnljMlZJWlhnc1hHNGdJSEpuWW1FZ1lYTWdjR0Z5YzJWU1oySmhMRnh1SUNCb2MyeGhJR0Z6SUhCaGNuTmxTSE5zWVN4Y2JpQWdZMjlzYjNJZ1lYTWdjR0Z5YzJWRGIyeHZjbHh1ZlNCbWNtOXRJQ2N1TDNCaGNuTmxjbk1uTzF4dWFXMXdiM0owSUh0Y2JpQWdZM0psWVhSbFZXNXBkRlI1Y0dVc1hHNGdJR2x6VG5WdExGeHVJQ0JwYzFKbllpeGNiaUFnYVhOSWMyd3NYRzRnSUdselNHVjRMRnh1SUNCcGMwTnZiRzl5WEc1OUlHWnliMjBnSnk0dmRYUnBiSE1uTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYm5WdFltVnlJRDBnZTF4dUlDQjBaWE4wT2lCcGMwNTFiU3hjYmlBZ2NHRnljMlU2SUhCaGNuTmxSbXh2WVhSY2JuMDdYRzVjYmk4dklGWmhiSFZsSUhSNWNHVnpYRzVsZUhCdmNuUWdZMjl1YzNRZ1lXeHdhR0VnUFNCN1hHNGdJQzR1TG01MWJXSmxjaXhjYmlBZ2RISmhibk5tYjNKdE9pQjBjbUZ1YzJadmNtMUJiSEJvWVZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHUmxaM0psWlhNZ1BTQmpjbVZoZEdWVmJtbDBWSGx3WlNnblpHVm5KeXdnZEhKaGJuTm1iM0p0UkdWbmNtVmxjeWs3WEc1bGVIQnZjblFnWTI5dWMzUWdjR1Z5WTJWdWRDQTlJR055WldGMFpWVnVhWFJVZVhCbEtDY2xKeXdnZEhKaGJuTm1iM0p0VUdWeVkyVnVkQ2s3WEc1bGVIQnZjblFnWTI5dWMzUWdjSGdnUFNCamNtVmhkR1ZWYm1sMFZIbHdaU2duY0hnbkxDQjBjbUZ1YzJadmNtMVFlQ2s3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J6WTJGc1pTQTlJSHRjYmlBZ0xpNHViblZ0WW1WeUxGeHVJQ0JrWldaaGRXeDBPaUF4WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtZGlWVzVwZENBOUlIdGNiaUFnTGk0dWJuVnRZbVZ5TEZ4dUlDQjBjbUZ1YzJadmNtMDZJSFJ5WVc1elptOXliVkpIUWxWdWFYUmNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J5WjJKaElEMGdlMXh1SUNCMFpYTjBPaUJwYzFKbllpeGNiaUFnY0dGeWMyVTZJSEJoY25ObFVtZGlZU3hjYmlBZ2RISmhibk5tYjNKdE9pQjBjbUZ1YzJadmNtMVNaMkpoWEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2FHVjRJRDBnZTF4dUlDQXVMaTV5WjJKaExGeHVJQ0IwWlhOME9pQnBjMGhsZUN4Y2JpQWdjR0Z5YzJVNklIQmhjbk5sU0dWNFhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdhSE5zWVNBOUlIdGNiaUFnZEdWemREb2dhWE5JYzJ3c1hHNGdJSEJoY25ObE9pQndZWEp6WlVoemJHRXNYRzRnSUhSeVlXNXpabTl5YlRvZ2RISmhibk5tYjNKdFNITnNZVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOdmJHOXlJRDBnZTF4dUlDQndZWEp6WlRvZ2NHRnljMlZEYjJ4dmNpeGNiaUFnZEdWemREb2dhWE5EYjJ4dmNpeGNiaUFnZEhKaGJuTm1iM0p0T2lCMGNtRnVjMlp2Y20xRGIyeHZjbHh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdmFsdWUtdHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGNsYW1wUHJvZ3Jlc3MgPSAoMCwgX3RyYW5zZm9ybWVycy5jbGFtcCkoMCwgMSk7XG5cbmZ1bmN0aW9uIGNhbGNWYWx1ZUF0VGltZShmcm9tLCB0bywgZHVyYXRpb24sIGVsYXBzZWQsIGVhc2UpIHtcbiAgdmFyIHByb2dyZXNzQXRUaW1lID0gZWFzZShjbGFtcFByb2dyZXNzKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoMCwgZHVyYXRpb24sIGVsYXBzZWQpKSk7XG4gIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGZyb20sIHRvLCBwcm9ncmVzc0F0VGltZSk7XG59XG5cbnZhciBUd2VlbkJsZW5kID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFR3ZWVuQmxlbmQsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFR3ZWVuQmxlbmQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3ZWVuQmxlbmQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBUd2VlbkJsZW5kLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZnJvbSA9IF9wcm9wcy5mcm9tO1xuICAgIHZhciB0byA9IF9wcm9wcy50bztcbiAgICB2YXIgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb247XG4gICAgdmFyIGFjY3VyYWN5ID0gX3Byb3BzLmFjY3VyYWN5O1xuXG4gICAgdmFyIGEgPSBmcm9tO1xuICAgIHZhciBiID0gdG87XG4gICAgdmFyIGFEdXJhdGlvbiA9IGEuZ2V0RHVyYXRpb24oKTtcbiAgICB2YXIgYkR1cmF0aW9uID0gYi5nZXREdXJhdGlvbigpO1xuXG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uIHx8IE1hdGgubWluKGFEdXJhdGlvbiAtIGEuZ2V0RWxhcHNlZCgpLCBiRHVyYXRpb24pO1xuXG4gICAgdmFyIGFFYXNlID0gYS5nZXRQcm9wKCdlYXNlJyk7XG4gICAgdmFyIGJFYXNlID0gYi5nZXRQcm9wKCdlYXNlJyk7XG4gICAgdmFyIGFGcm9tID0gYS5nZXRQcm9wKCdmcm9tJyk7XG4gICAgdmFyIGJGcm9tID0gYi5nZXRQcm9wKCdmcm9tJyk7XG4gICAgdmFyIGFUbyA9IGEuZ2V0UHJvcCgndG8nKTtcbiAgICB2YXIgYlRvID0gYi5nZXRQcm9wKCd0bycpO1xuICAgIHZhciBiVmFsdWVBdEJsZW5kQ29tcGxldGUgPSBjYWxjVmFsdWVBdFRpbWUoYkZyb20sIGJUbywgYkR1cmF0aW9uLCB0aGlzLmR1cmF0aW9uLCBiRWFzZSk7XG4gICAgdmFyIGJTdGFydHNIaWdoZXJUaGFuQSA9IGJGcm9tID4gYS5nZXQoKTtcblxuICAgIHRoaXMuYmxlbmRQb2ludHMgPSBbWzAsIGEuZ2V0KCldLCBbdGhpcy5kdXJhdGlvbiwgYlZhbHVlQXRCbGVuZENvbXBsZXRlXV07XG5cbiAgICAvLyBGaW5kIHR3ZWVuIGludGVyc2VjdGlvblxuICAgIHZhciB0aW1lc3RlcCA9IHRoaXMuZHVyYXRpb24gLyBhY2N1cmFjeTtcblxuICAgIHZhciBmb3VuZFAxID0gZmFsc2U7XG4gICAgdmFyIGZvdW5kUDIgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWNjdXJhY3k7IGkrKykge1xuICAgICAgdmFyIHRvdGFsVGltZSA9IGkgKiB0aW1lc3RlcDtcblxuICAgICAgdmFyIGFWYWx1ZUF0VGltZSA9IGNhbGNWYWx1ZUF0VGltZShhRnJvbSwgYVRvLCBhRHVyYXRpb24sIGEuZWxhcHNlZCArIHRvdGFsVGltZSwgYUVhc2UpO1xuICAgICAgdmFyIGJWYWx1ZUF0VGltZSA9IGNhbGNWYWx1ZUF0VGltZShiRnJvbSwgYlRvLCBiRHVyYXRpb24sIGIuZWxhcHNlZCArIHRvdGFsVGltZSwgYkVhc2UpO1xuXG4gICAgICB2YXIgaGFzSW50ZXJzZWN0ZWQgPSBiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lIDwgYlZhbHVlQXRUaW1lIHx8ICFiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lID4gYlZhbHVlQXRUaW1lO1xuXG4gICAgICBpZiAoIWZvdW5kUDEgJiYgaGFzSW50ZXJzZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5ibGVuZFBvaW50cy5zcGxpY2UoMCwgMSwgW3RvdGFsVGltZSwgYlZhbHVlQXRUaW1lXSk7XG4gICAgICAgIGZvdW5kUDEgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBUT0RPIGdvIGJhY2sgdGhyb3VnaCBhbmQgY29tbWVudFxuICAgICAgdmFyIGhhc0ludGVyc2VjdGVkQiA9IGJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPCBiVmFsdWVBdFRpbWUgfHwgIWJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPiBiVmFsdWVBdFRpbWU7XG5cbiAgICAgIGlmIChmb3VuZFAxICYmIGhhc0ludGVyc2VjdGVkQikge1xuICAgICAgICB0aGlzLmJsZW5kUG9pbnRzWzJdID0gW3RvdGFsVGltZSwgYlZhbHVlQXRUaW1lXTtcbiAgICAgICAgZm91bmRQMiA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VuZFAyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0by5zdGFydCgpO1xuICB9O1xuXG4gIFR3ZWVuQmxlbmQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZyb20gPSBfcHJvcHMyLmZyb207XG4gICAgdmFyIHRvID0gX3Byb3BzMi50bztcblxuICAgIHZhciBhID0gZnJvbTtcbiAgICB2YXIgYiA9IHRvO1xuXG4gICAgdmFyIHByb2dyZXNzID0gY2xhbXBQcm9ncmVzcygoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHRoaXMuYmxlbmRQb2ludHNbMF1bMF0sIHRoaXMuYmxlbmRQb2ludHNbMl1bMF0sIGEuZ2V0RWxhcHNlZCgpKSk7XG4gICAgaWYgKHByb2dyZXNzID49IDEpIHtcbiAgICAgIHJldHVybiBiLmdldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYVAgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKHRoaXMuYmxlbmRQb2ludHNbMF1bMV0sIHRoaXMuYmxlbmRQb2ludHNbMV1bMV0sIHByb2dyZXNzKTtcbiAgICAgIHZhciBiUCA9ICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykodGhpcy5ibGVuZFBvaW50c1sxXVsxXSwgdGhpcy5ibGVuZFBvaW50c1syXVsxXSwgcHJvZ3Jlc3MpO1xuICAgICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoYVAsIGJQLCBwcm9ncmVzcyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBUd2VlbkJsZW5kO1xufShfMi5kZWZhdWx0KTtcblxuVHdlZW5CbGVuZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjY3VyYWN5OiA2MFxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgVHdlZW5CbGVuZChwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMkpzWlc1a0xYUjNaV1Z1Y3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN1FVRkRRVHM3T3pzN096czdPenRCUVVWQkxFbEJRVTBzWjBKQlFXZENMSGxDUVVGTkxFTkJRVTRzUlVGQlV5eERRVUZVTEVOQlFYUkNPenRCUVVWQkxGTkJRVk1zWlVGQlZDeERRVUY1UWl4SlFVRjZRaXhGUVVFclFpeEZRVUV2UWl4RlFVRnRReXhSUVVGdVF5eEZRVUUyUXl4UFFVRTNReXhGUVVGelJDeEpRVUYwUkN4RlFVRTBSRHRCUVVNeFJDeE5RVUZOTEdsQ1FVRnBRaXhMUVVGTExHTkJRV01zWjBOQlFYRkNMRU5CUVhKQ0xFVkJRWGRDTEZGQlFYaENMRVZCUVd0RExFOUJRV3hETEVOQlFXUXNRMEZCVEN4RFFVRjJRanRCUVVOQkxGTkJRVThzWjBOQlFYRkNMRWxCUVhKQ0xFVkJRVEpDTEVWQlFUTkNMRVZCUVN0Q0xHTkJRUzlDTEVOQlFWQTdRVUZEUkRzN1NVRkZTeXhWT3pzN096czdPenM3ZFVKQlMwb3NUeXh6UWtGQlZUdEJRVUZCTEdsQ1FVTnBReXhMUVVGTExFdEJSSFJETzBGQlFVRXNVVUZEUVN4SlFVUkJMRlZCUTBFc1NVRkVRVHRCUVVGQkxGRkJRMDBzUlVGRVRpeFZRVU5OTEVWQlJFNDdRVUZCUVN4UlFVTlZMRkZCUkZZc1ZVRkRWU3hSUVVSV08wRkJRVUVzVVVGRGIwSXNVVUZFY0VJc1ZVRkRiMElzVVVGRWNFSTdPMEZCUlZJc1VVRkJUU3hKUVVGSkxFbEJRVlk3UVVGRFFTeFJRVUZOTEVsQlFVa3NSVUZCVmp0QlFVTkJMRkZCUVUwc1dVRkJXU3hGUVVGRkxGZEJRVVlzUlVGQmJFSTdRVUZEUVN4UlFVRk5MRmxCUVZrc1JVRkJSU3hYUVVGR0xFVkJRV3hDT3p0QlFVVkJMRk5CUVVzc1VVRkJUQ3hIUVVGblFpeFpRVUZaTEV0QlFVc3NSMEZCVEN4RFFVTXhRaXhaUVVGWkxFVkJRVVVzVlVGQlJpeEZRVVJqTEVWQlJURkNMRk5CUmpCQ0xFTkJRVFZDT3p0QlFVdEJMRkZCUVUwc1VVRkJVU3hGUVVGRkxFOUJRVVlzUTBGQlZTeE5RVUZXTEVOQlFXUTdRVUZEUVN4UlFVRk5MRkZCUVZFc1JVRkJSU3hQUVVGR0xFTkJRVlVzVFVGQlZpeERRVUZrTzBGQlEwRXNVVUZCVFN4UlFVRlJMRVZCUVVVc1QwRkJSaXhEUVVGVkxFMUJRVllzUTBGQlpEdEJRVU5CTEZGQlFVMHNVVUZCVVN4RlFVRkZMRTlCUVVZc1EwRkJWU3hOUVVGV0xFTkJRV1E3UVVGRFFTeFJRVUZOTEUxQlFVMHNSVUZCUlN4UFFVRkdMRU5CUVZVc1NVRkJWaXhEUVVGYU8wRkJRMEVzVVVGQlRTeE5RVUZOTEVWQlFVVXNUMEZCUml4RFFVRlZMRWxCUVZZc1EwRkJXanRCUVVOQkxGRkJRVTBzZDBKQlFYZENMR2RDUVVGblFpeExRVUZvUWl4RlFVRjFRaXhIUVVGMlFpeEZRVUUwUWl4VFFVRTFRaXhGUVVGMVF5eExRVUZMTEZGQlFUVkRMRVZCUVhORUxFdEJRWFJFTEVOQlFUbENPMEZCUTBFc1VVRkJUU3h4UWtGQmNVSXNVVUZCVVN4RlFVRkZMRWRCUVVZc1JVRkJia003TzBGQlJVRXNVMEZCU3l4WFFVRk1MRWRCUVcxQ0xFTkJRMnBDTEVOQlFVTXNRMEZCUkN4RlFVRkpMRVZCUVVVc1IwRkJSaXhGUVVGS0xFTkJSR2xDTEVWQlJXcENMRU5CUVVNc1MwRkJTeXhSUVVGT0xFVkJRV2RDTEhGQ1FVRm9RaXhEUVVacFFpeERRVUZ1UWpzN08wRkJUVUVzVVVGQlRTeFhRVUZYTEV0QlFVc3NVVUZCVEN4SFFVRm5RaXhSUVVGcVF6czdRVUZGUVN4UlFVRkpMRlZCUVZVc1MwRkJaRHRCUVVOQkxGRkJRVWtzVlVGQlZTeExRVUZrT3p0QlFVVkJMRk5CUVVzc1NVRkJTU3hKUVVGSkxFTkJRV0lzUlVGQlowSXNTVUZCU1N4UlFVRndRaXhGUVVFNFFpeEhRVUU1UWl4RlFVRnRRenRCUVVOcVF5eFZRVUZOTEZsQlFWa3NTVUZCU1N4UlFVRjBRanM3UVVGRlFTeFZRVUZOTEdWQlFXVXNaMEpCUVdkQ0xFdEJRV2hDTEVWQlFYVkNMRWRCUVhaQ0xFVkJRVFJDTEZOQlFUVkNMRVZCUVhWRExFVkJRVVVzVDBGQlJpeEhRVUZaTEZOQlFXNUVMRVZCUVRoRUxFdEJRVGxFTEVOQlFYSkNPMEZCUTBFc1ZVRkJUU3hsUVVGbExHZENRVUZuUWl4TFFVRm9RaXhGUVVGMVFpeEhRVUYyUWl4RlFVRTBRaXhUUVVFMVFpeEZRVUYxUXl4RlFVRkZMRTlCUVVZc1IwRkJXU3hUUVVGdVJDeEZRVUU0UkN4TFFVRTVSQ3hEUVVGeVFqczdRVUZGUVN4VlFVRk5MR2xDUVVOSUxITkNRVUZ6UWl4bFFVRmxMRmxCUVhSRExFbEJRME1zUTBGQlF5eHJRa0ZCUkN4SlFVRjFRaXhsUVVGbExGbEJSbnBET3p0QlFVdEJMRlZCUVVrc1EwRkJReXhQUVVGRUxFbEJRVmtzWTBGQmFFSXNSVUZCWjBNN1FVRkRPVUlzWVVGQlN5eFhRVUZNTEVOQlFXbENMRTFCUVdwQ0xFTkJRWGRDTEVOQlFYaENMRVZCUVRKQ0xFTkJRVE5DTEVWQlFUaENMRU5CUVVNc1UwRkJSQ3hGUVVGWkxGbEJRVm9zUTBGQk9VSTdRVUZEUVN4clFrRkJWU3hKUVVGV08wRkJRMFE3T3p0QlFVZEVMRlZCUVUwc2EwSkJRMGdzYzBKQlFYTkNMR1ZCUVdVc1dVRkJkRU1zU1VGRFF5eERRVUZETEd0Q1FVRkVMRWxCUVhWQ0xHVkJRV1VzV1VGR2VrTTdPMEZCUzBFc1ZVRkJTU3hYUVVGWExHVkJRV1lzUlVGQlowTTdRVUZET1VJc1lVRkJTeXhYUVVGTUxFTkJRV2xDTEVOQlFXcENMRWxCUVhOQ0xFTkJRVU1zVTBGQlJDeEZRVUZaTEZsQlFWb3NRMEZCZEVJN1FVRkRRU3hyUWtGQlZTeEpRVUZXTzBGQlEwUTdPMEZCUlVRc1ZVRkJTU3hQUVVGS0xFVkJRV0U3UVVGRFdEdEJRVU5FTzBGQlEwWTdPMEZCUlVRc1QwRkJSeXhMUVVGSU8wRkJRMFFzUnpzN2RVSkJSVVFzVFN4eFFrRkJVenRCUVVGQkxHdENRVU5qTEV0QlFVc3NTMEZFYmtJN1FVRkJRU3hSUVVORExFbEJSRVFzVjBGRFF5eEpRVVJFTzBGQlFVRXNVVUZEVHl4RlFVUlFMRmRCUTA4c1JVRkVVRHM3UVVGRlVDeFJRVUZOTEVsQlFVa3NTVUZCVmp0QlFVTkJMRkZCUVUwc1NVRkJTU3hGUVVGV096dEJRVVZCTEZGQlFVMHNWMEZCVnl4alFVRmpMR2REUVVGeFFpeExRVUZMTEZkQlFVd3NRMEZCYVVJc1EwRkJha0lzUlVGQmIwSXNRMEZCY0VJc1EwRkJja0lzUlVGQk5rTXNTMEZCU3l4WFFVRk1MRU5CUVdsQ0xFTkJRV3BDTEVWQlFXOUNMRU5CUVhCQ0xFTkJRVGRETEVWQlFYRkZMRVZCUVVVc1ZVRkJSaXhGUVVGeVJTeERRVUZrTEVOQlFXcENPMEZCUTBFc1VVRkJTU3haUVVGWkxFTkJRV2hDTEVWQlFXMUNPMEZCUTJwQ0xHRkJRVThzUlVGQlJTeEhRVUZHTEVWQlFWQTdRVUZEUkN4TFFVWkVMRTFCUlU4N1FVRkRUQ3hWUVVGTkxFdEJRVXNzWjBOQlFYRkNMRXRCUVVzc1YwRkJUQ3hEUVVGcFFpeERRVUZxUWl4RlFVRnZRaXhEUVVGd1FpeERRVUZ5UWl4RlFVRTJReXhMUVVGTExGZEJRVXdzUTBGQmFVSXNRMEZCYWtJc1JVRkJiMElzUTBGQmNFSXNRMEZCTjBNc1JVRkJjVVVzVVVGQmNrVXNRMEZCV0R0QlFVTkJMRlZCUVUwc1MwRkJTeXhuUTBGQmNVSXNTMEZCU3l4WFFVRk1MRU5CUVdsQ0xFTkJRV3BDTEVWQlFXOUNMRU5CUVhCQ0xFTkJRWEpDTEVWQlFUWkRMRXRCUVVzc1YwRkJUQ3hEUVVGcFFpeERRVUZxUWl4RlFVRnZRaXhEUVVGd1FpeERRVUUzUXl4RlFVRnhSU3hSUVVGeVJTeERRVUZZTzBGQlEwRXNZVUZCVHl4blEwRkJjVUlzUlVGQmNrSXNSVUZCZVVJc1JVRkJla0lzUlVGQk5rSXNVVUZCTjBJc1EwRkJVRHRCUVVORU8wRkJRMFlzUnpzN096czdRVUZ5Umtjc1ZTeERRVU5ITEZrc1IwRkJaVHRCUVVOd1FpeFpRVUZWTzBGQlJGVXNRenM3YTBKQmRVWlVMRlZCUVVNc1MwRkJSRHRCUVVGQkxGTkJRVmNzU1VGQlNTeFZRVUZLTEVOQlFXVXNTMEZCWml4RFFVRllPMEZCUVVFc1F5SXNJbVpwYkdVaU9pSmliR1Z1WkMxMGQyVmxibk11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dkp6dGNibWx0Y0c5eWRDQjdJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsTENCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYm1sdGNHOXlkQ0I3SUdOc1lXMXdJSDBnWm5KdmJTQW5MaTR2YVc1akwzUnlZVzV6Wm05eWJXVnljeWM3WEc1Y2JtTnZibk4wSUdOc1lXMXdVSEp2WjNKbGMzTWdQU0JqYkdGdGNDZ3dMQ0F4S1R0Y2JseHVablZ1WTNScGIyNGdZMkZzWTFaaGJIVmxRWFJVYVcxbEtHWnliMjBzSUhSdkxDQmtkWEpoZEdsdmJpd2daV3hoY0hObFpDd2daV0Z6WlNrZ2UxeHVJQ0JqYjI1emRDQndjbTluY21WemMwRjBWR2x0WlNBOUlHVmhjMlVvWTJ4aGJYQlFjbTluY21WemN5aG5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2d3TENCa2RYSmhkR2x2Yml3Z1pXeGhjSE5sWkNrcEtUdGNiaUFnY21WMGRYSnVJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56S0daeWIyMHNJSFJ2TENCd2NtOW5jbVZ6YzBGMFZHbHRaU2s3WEc1OVhHNWNibU5zWVhOeklGUjNaV1Z1UW14bGJtUWdaWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0J6ZEdGMGFXTWdaR1ZtWVhWc2RGQnliM0J6SUQwZ2UxeHVJQ0FnSUdGalkzVnlZV041T2lBMk1GeHVJQ0I5TzF4dVhHNGdJRzl1VTNSaGNuUW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5Qm1jbTl0TENCMGJ5d2daSFZ5WVhScGIyNHNJR0ZqWTNWeVlXTjVJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJR0VnUFNCbWNtOXRPMXh1SUNBZ0lHTnZibk4wSUdJZ1BTQjBienRjYmlBZ0lDQmpiMjV6ZENCaFJIVnlZWFJwYjI0Z1BTQmhMbWRsZEVSMWNtRjBhVzl1S0NrN1hHNGdJQ0FnWTI5dWMzUWdZa1IxY21GMGFXOXVJRDBnWWk1blpYUkVkWEpoZEdsdmJpZ3BPMXh1WEc0Z0lDQWdkR2hwY3k1a2RYSmhkR2x2YmlBOUlHUjFjbUYwYVc5dUlIeDhJRTFoZEdndWJXbHVLRnh1SUNBZ0lDQWdZVVIxY21GMGFXOXVJQzBnWVM1blpYUkZiR0Z3YzJWa0tDa3NYRzRnSUNBZ0lDQmlSSFZ5WVhScGIyNWNiaUFnSUNBcE8xeHVYRzRnSUNBZ1kyOXVjM1FnWVVWaGMyVWdQU0JoTG1kbGRGQnliM0FvSjJWaGMyVW5LVHRjYmlBZ0lDQmpiMjV6ZENCaVJXRnpaU0E5SUdJdVoyVjBVSEp2Y0NnblpXRnpaU2NwTzF4dUlDQWdJR052Ym5OMElHRkdjbTl0SUQwZ1lTNW5aWFJRY205d0tDZG1jbTl0SnlrN1hHNGdJQ0FnWTI5dWMzUWdZa1p5YjIwZ1BTQmlMbWRsZEZCeWIzQW9KMlp5YjIwbktUdGNiaUFnSUNCamIyNXpkQ0JoVkc4Z1BTQmhMbWRsZEZCeWIzQW9KM1J2SnlrN1hHNGdJQ0FnWTI5dWMzUWdZbFJ2SUQwZ1lpNW5aWFJRY205d0tDZDBieWNwTzF4dUlDQWdJR052Ym5OMElHSldZV3gxWlVGMFFteGxibVJEYjIxd2JHVjBaU0E5SUdOaGJHTldZV3gxWlVGMFZHbHRaU2hpUm5KdmJTd2dZbFJ2TENCaVJIVnlZWFJwYjI0c0lIUm9hWE11WkhWeVlYUnBiMjRzSUdKRllYTmxLVHRjYmlBZ0lDQmpiMjV6ZENCaVUzUmhjblJ6U0dsbmFHVnlWR2hoYmtFZ1BTQmlSbkp2YlNBK0lHRXVaMlYwS0NrN1hHNWNiaUFnSUNCMGFHbHpMbUpzWlc1a1VHOXBiblJ6SUQwZ1cxeHVJQ0FnSUNBZ1d6QXNJR0V1WjJWMEtDbGRMRnh1SUNBZ0lDQWdXM1JvYVhNdVpIVnlZWFJwYjI0c0lHSldZV3gxWlVGMFFteGxibVJEYjIxd2JHVjBaVjFjYmlBZ0lDQmRPMXh1WEc0Z0lDQWdMeThnUm1sdVpDQjBkMlZsYmlCcGJuUmxjbk5sWTNScGIyNWNiaUFnSUNCamIyNXpkQ0IwYVcxbGMzUmxjQ0E5SUhSb2FYTXVaSFZ5WVhScGIyNGdMeUJoWTJOMWNtRmplVHRjYmx4dUlDQWdJR3hsZENCbWIzVnVaRkF4SUQwZ1ptRnNjMlU3WEc0Z0lDQWdiR1YwSUdadmRXNWtVRElnUFNCbVlXeHpaVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWVdOamRYSmhZM2s3SUdrckt5a2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ2RHOTBZV3hVYVcxbElEMGdhU0FxSUhScGJXVnpkR1Z3TzF4dVhHNGdJQ0FnSUNCamIyNXpkQ0JoVm1Gc2RXVkJkRlJwYldVZ1BTQmpZV3hqVm1Gc2RXVkJkRlJwYldVb1lVWnliMjBzSUdGVWJ5d2dZVVIxY21GMGFXOXVMQ0JoTG1Wc1lYQnpaV1FnS3lCMGIzUmhiRlJwYldVc0lHRkZZWE5sS1R0Y2JpQWdJQ0FnSUdOdmJuTjBJR0pXWVd4MVpVRjBWR2x0WlNBOUlHTmhiR05XWVd4MVpVRjBWR2x0WlNoaVJuSnZiU3dnWWxSdkxDQmlSSFZ5WVhScGIyNHNJR0l1Wld4aGNITmxaQ0FySUhSdmRHRnNWR2x0WlN3Z1lrVmhjMlVwTzF4dVhHNGdJQ0FnSUNCamIyNXpkQ0JvWVhOSmJuUmxjbk5sWTNSbFpDQTlJQ2hjYmlBZ0lDQWdJQ0FnS0dKVGRHRnlkSE5JYVdkb1pYSlVhR0Z1UVNBbUppQmhWbUZzZFdWQmRGUnBiV1VnUENCaVZtRnNkV1ZCZEZScGJXVXBJSHg4WEc0Z0lDQWdJQ0FnSUNnaFlsTjBZWEowYzBocFoyaGxjbFJvWVc1QklDWW1JR0ZXWVd4MVpVRjBWR2x0WlNBK0lHSldZV3gxWlVGMFZHbHRaU2xjYmlBZ0lDQWdJQ2s3WEc1Y2JpQWdJQ0FnSUdsbUlDZ2habTkxYm1SUU1TQW1KaUJvWVhOSmJuUmxjbk5sWTNSbFpDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSnNaVzVrVUc5cGJuUnpMbk53YkdsalpTZ3dMQ0F4TENCYmRHOTBZV3hVYVcxbExDQmlWbUZzZFdWQmRGUnBiV1ZkS1R0Y2JpQWdJQ0FnSUNBZ1ptOTFibVJRTVNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM4dklGUlBSRThnWjI4Z1ltRmpheUIwYUhKdmRXZG9JR0Z1WkNCamIyMXRaVzUwWEc0Z0lDQWdJQ0JqYjI1emRDQm9ZWE5KYm5SbGNuTmxZM1JsWkVJZ1BTQW9YRzRnSUNBZ0lDQWdJQ2hpVTNSaGNuUnpTR2xuYUdWeVZHaGhia0VnSmlZZ1lWWmhiSFZsUVhSVWFXMWxJRHdnWWxaaGJIVmxRWFJVYVcxbEtTQjhmRnh1SUNBZ0lDQWdJQ0FvSVdKVGRHRnlkSE5JYVdkb1pYSlVhR0Z1UVNBbUppQmhWbUZzZFdWQmRGUnBiV1VnUGlCaVZtRnNkV1ZCZEZScGJXVXBYRzRnSUNBZ0lDQXBPMXh1WEc0Z0lDQWdJQ0JwWmlBb1ptOTFibVJRTVNBbUppQm9ZWE5KYm5SbGNuTmxZM1JsWkVJcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWJHVnVaRkJ2YVc1MGMxc3lYU0E5SUZ0MGIzUmhiRlJwYldVc0lHSldZV3gxWlVGMFZHbHRaVjA3WEc0Z0lDQWdJQ0FnSUdadmRXNWtVRElnUFNCMGNuVmxPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JwWmlBb1ptOTFibVJRTWlrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnZEc4dWMzUmhjblFvS1R0Y2JpQWdmVnh1WEc0Z0lIVndaR0YwWlNncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdaeWIyMHNJSFJ2SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHTnZibk4wSUdFZ1BTQm1jbTl0TzF4dUlDQWdJR052Ym5OMElHSWdQU0IwYnp0Y2JseHVJQ0FnSUdOdmJuTjBJSEJ5YjJkeVpYTnpJRDBnWTJ4aGJYQlFjbTluY21WemN5aG5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2gwYUdsekxtSnNaVzVrVUc5cGJuUnpXekJkV3pCZExDQjBhR2x6TG1Kc1pXNWtVRzlwYm5Seld6SmRXekJkTENCaExtZGxkRVZzWVhCelpXUW9LU2twTzF4dUlDQWdJR2xtSUNod2NtOW5jbVZ6Y3lBK1BTQXhLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdZaTVuWlhRb0tUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnWTI5dWMzUWdZVkFnUFNCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aDBhR2x6TG1Kc1pXNWtVRzlwYm5Seld6QmRXekZkTENCMGFHbHpMbUpzWlc1a1VHOXBiblJ6V3pGZFd6RmRMQ0J3Y205bmNtVnpjeWs3WEc0Z0lDQWdJQ0JqYjI1emRDQmlVQ0E5SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektIUm9hWE11WW14bGJtUlFiMmx1ZEhOYk1WMWJNVjBzSUhSb2FYTXVZbXhsYm1SUWIybHVkSE5iTWwxYk1WMHNJSEJ5YjJkeVpYTnpLVHRjYmlBZ0lDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWhoVUN3Z1lsQXNJSEJ5YjJkeVpYTnpLVHRjYmlBZ0lDQjlYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSEJ5YjNCektTQTlQaUJ1WlhjZ1ZIZGxaVzVDYkdWdVpDaHdjbTl3Y3lrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDaGFpbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDaGFpbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ2hhaW4ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhaW4pO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5wbGF5TmV4dCA9IF90aGlzLnBsYXlOZXh0LmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIENoYWluLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB0aGlzLnByb3BzLmkgPSAwO1xuICAgIHRoaXMucGxheUN1cnJlbnQoKTtcbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUucGxheU5leHQgPSBmdW5jdGlvbiBwbGF5TmV4dCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgaSA9IF9wcm9wcy5pO1xuICAgIHZhciBvcmRlciA9IF9wcm9wcy5vcmRlcjtcblxuICAgIGlmIChpIDwgb3JkZXIubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5wcm9wcy5pKys7XG4gICAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLnBsYXlDdXJyZW50ID0gZnVuY3Rpb24gcGxheUN1cnJlbnQoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBpID0gX3Byb3BzMi5pO1xuICAgIHZhciBvcmRlciA9IF9wcm9wczIub3JkZXI7XG5cbiAgICBvcmRlcltpXS5wcm9wcy5fb25Db21wbGV0ZSA9IHRoaXMucGxheU5leHQ7XG4gICAgb3JkZXJbaV0uc3RhcnQoKTtcbiAgfTtcblxuICBDaGFpbi5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgaSA9IF9wcm9wczMuaTtcbiAgICB2YXIgb3JkZXIgPSBfcHJvcHMzLm9yZGVyO1xuXG4gICAgb3JkZXJbaV0uc3RvcCgpO1xuICB9O1xuXG4gIHJldHVybiBDaGFpbjtcbn0oXzIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcmRlciwgb25Db21wbGV0ZSkge1xuICByZXR1cm4gbmV3IENoYWluKHsgb3JkZXI6IG9yZGVyLCBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOb1lXbHVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3pzN096czdPenM3TzBsQlJVMHNTenM3TzBGQlEwb3NhVUpCUVZrc1MwRkJXaXhGUVVGdFFqdEJRVUZCT3p0QlFVRkJMR2xFUVVOcVFpeHRRa0ZCVFN4TFFVRk9MRU5CUkdsQ096dEJRVVZxUWl4VlFVRkxMRkZCUVV3c1IwRkJaMElzVFVGQlN5eFJRVUZNTEVOQlFXTXNTVUZCWkN4UFFVRm9RanRCUVVacFFqdEJRVWRzUWpzN2EwSkJSVVFzVHl4elFrRkJWVHRCUVVOU0xGTkJRVXNzUzBGQlRDeERRVUZYTEVOQlFWZ3NSMEZCWlN4RFFVRm1PMEZCUTBFc1UwRkJTeXhYUVVGTU8wRkJRMFFzUnpzN2EwSkJSVVFzVVN4MVFrRkJWenRCUVVGQkxHbENRVU5aTEV0QlFVc3NTMEZFYWtJN1FVRkJRU3hSUVVORUxFTkJSRU1zVlVGRFJDeERRVVJETzBGQlFVRXNVVUZEUlN4TFFVUkdMRlZCUTBVc1MwRkVSanM3UVVGRlZDeFJRVUZKTEVsQlFVa3NUVUZCVFN4TlFVRk9MRWRCUVdVc1EwRkJka0lzUlVGQk1FSTdRVUZEZUVJc1YwRkJTeXhMUVVGTUxFTkJRVmNzUTBGQldEdEJRVU5CTEZkQlFVc3NWMEZCVER0QlFVTkVMRXRCU0VRc1RVRkhUenRCUVVOTUxGZEJRVXNzVVVGQlREdEJRVU5FTzBGQlEwWXNSenM3YTBKQlJVUXNWeXd3UWtGQll6dEJRVUZCTEd0Q1FVTlRMRXRCUVVzc1MwRkVaRHRCUVVGQkxGRkJRMG9zUTBGRVNTeFhRVU5LTEVOQlJFazdRVUZCUVN4UlFVTkVMRXRCUkVNc1YwRkRSQ3hMUVVSRE96dEJRVVZhTEZWQlFVMHNRMEZCVGl4RlFVRlRMRXRCUVZRc1EwRkJaU3hYUVVGbUxFZEJRVFpDTEV0QlFVc3NVVUZCYkVNN1FVRkRRU3hWUVVGTkxFTkJRVTRzUlVGQlV5eExRVUZVTzBGQlEwUXNSenM3YTBKQlJVUXNUU3h4UWtGQlV6dEJRVUZCTEd0Q1FVTmpMRXRCUVVzc1MwRkVia0k3UVVGQlFTeFJRVU5ETEVOQlJFUXNWMEZEUXl4RFFVUkVPMEZCUVVFc1VVRkRTU3hMUVVSS0xGZEJRMGtzUzBGRVNqczdRVUZGVUN4VlFVRk5MRU5CUVU0c1JVRkJVeXhKUVVGVU8wRkJRMFFzUnpzN096czdhMEpCUjFrc1ZVRkJReXhMUVVGRUxFVkJRVkVzVlVGQlVqdEJRVUZCTEZOQlFYVkNMRWxCUVVrc1MwRkJTaXhEUVVGVkxFVkJRVVVzV1VGQlJpeEZRVUZUTEhOQ1FVRlVMRVZCUVZZc1EwRkJka0k3UVVGQlFTeERJaXdpWm1sc1pTSTZJbU5vWVdsdUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMeWM3WEc1Y2JtTnNZWE56SUVOb1lXbHVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnWTI5dWMzUnlkV04wYjNJb2NISnZjSE1wSUh0Y2JpQWdJQ0J6ZFhCbGNpaHdjbTl3Y3lrN1hHNGdJQ0FnZEdocGN5NXdiR0Y1VG1WNGRDQTlJSFJvYVhNdWNHeGhlVTVsZUhRdVltbHVaQ2gwYUdsektUdGNiaUFnZlZ4dVhHNGdJRzl1VTNSaGNuUW9LU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTVwSUQwZ01EdGNiaUFnSUNCMGFHbHpMbkJzWVhsRGRYSnlaVzUwS0NrN1hHNGdJSDFjYmx4dUlDQndiR0Y1VG1WNGRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHa3NJRzl5WkdWeUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR2xtSUNocElEd2diM0prWlhJdWJHVnVaM1JvSUMwZ01Ta2dlMXh1SUNBZ0lDQWdkR2hwY3k1d2NtOXdjeTVwS3lzN1hHNGdJQ0FnSUNCMGFHbHpMbkJzWVhsRGRYSnlaVzUwS0NrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSFJvYVhNdVkyOXRjR3hsZEdVb0tUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQndiR0Y1UTNWeWNtVnVkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR2tzSUc5eVpHVnlJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUc5eVpHVnlXMmxkTG5CeWIzQnpMbDl2YmtOdmJYQnNaWFJsSUQwZ2RHaHBjeTV3YkdGNVRtVjRkRHRjYmlBZ0lDQnZjbVJsY2x0cFhTNXpkR0Z5ZENncE8xeHVJQ0I5WEc1Y2JpQWdiMjVUZEc5d0tDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2FTd2diM0prWlhJZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdiM0prWlhKYmFWMHVjM1J2Y0NncE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaHZjbVJsY2l3Z2IyNURiMjF3YkdWMFpTa2dQVDRnYm1WM0lFTm9ZV2x1S0hzZ2IzSmtaWElzSUc5dVEyOXRjR3hsZEdVZ2ZTazdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9jaGFpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90d2VlbiA9IHJlcXVpcmUoJy4vdHdlZW4nKTtcblxudmFyIF90d2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2Vlbik7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiAoMCwgX3R3ZWVuMi5kZWZhdWx0KShfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBmcm9tOiAwLFxuICAgIHRvOiAxLFxuICAgIG9uVXBkYXRlOiAoMCwgX3RyYW5zZm9ybWVycy5mbG93KSgoMCwgX3RyYW5zZm9ybWVycy5ibGVuZENvbG9yKShwcm9wcy5mcm9tLCBwcm9wcy50byksIF92YWx1ZVR5cGVzLmNvbG9yLnRyYW5zZm9ybSwgcHJvcHMub25VcGRhdGUgfHwgbm9vcClcbiAgfSkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOdmJHOXlMWFIzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenM3TzBGQlEwRTdPMEZCUTBFN096czdRVUZGUVN4SlFVRk5MRTlCUVU4c1dVRkJUU3hEUVVGRkxFTkJRWEpDT3p0clFrRkZaU3hWUVVGRExFdEJRVVFzUlVGQlZ6dEJRVU40UWl4VFFVRlBMR3REUVVOR0xFdEJSRVU3UVVGRlRDeFZRVUZOTEVOQlJrUTdRVUZIVEN4UlFVRkpMRU5CU0VNN1FVRkpUQ3hqUVVGVkxIZENRVU5TTERoQ1FVRlhMRTFCUVUwc1NVRkJha0lzUlVGQmRVSXNUVUZCVFN4RlFVRTNRaXhEUVVSUkxFVkJSVklzYTBKQlFVMHNVMEZHUlN4RlFVZFNMRTFCUVUwc1VVRkJUaXhKUVVGclFpeEpRVWhXTzBGQlNrd3NTMEZCVUR0QlFWVkVMRU1pTENKbWFXeGxJam9pWTI5c2IzSXRkSGRsWlc0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZEhkbFpXNGdabkp2YlNBbkxpOTBkMlZsYmljN1hHNXBiWEJ2Y25RZ2V5QmliR1Z1WkVOdmJHOXlMQ0JtYkc5M0lIMGdabkp2YlNBbkxpNHZhVzVqTDNSeVlXNXpabTl5YldWeWN5YzdYRzVwYlhCdmNuUWdleUJqYjJ4dmNpQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MllXeDFaUzEwZVhCbGN5YzdYRzVjYm1OdmJuTjBJRzV2YjNBZ1BTQW9LU0E5UGlCN2ZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSEJ5YjNCektTQTlQaUI3WEc0Z0lISmxkSFZ5YmlCMGQyVmxiaWg3WEc0Z0lDQWdMaTR1Y0hKdmNITXNYRzRnSUNBZ1puSnZiVG9nTUN4Y2JpQWdJQ0IwYnpvZ01TeGNiaUFnSUNCdmJsVndaR0YwWlRvZ1pteHZkeWhjYmlBZ0lDQWdJR0pzWlc1a1EyOXNiM0lvY0hKdmNITXVabkp2YlN3Z2NISnZjSE11ZEc4cExGeHVJQ0FnSUNBZ1kyOXNiM0l1ZEhKaGJuTm1iM0p0TEZ4dUlDQWdJQ0FnY0hKdmNITXViMjVWY0dSaGRHVWdmSHdnYm05dmNGeHVJQ0FnSUNsY2JpQWdmU2s3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2NvbG9yLXR3ZWVuLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ29tcG9zaXRlQWN0aW9uID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKENvbXBvc2l0ZUFjdGlvbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gQ29tcG9zaXRlQWN0aW9uKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbXBvc2l0ZUFjdGlvbik7XG5cbiAgICB2YXIgYWN0aW9ucyA9IHByb3BzLmFjdGlvbnM7XG5cbiAgICB2YXIgcmVtYWluaW5nUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsnYWN0aW9ucyddKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCByZW1haW5pbmdQcm9wcykpO1xuXG4gICAgX3RoaXMuY3VycmVudCA9IHt9O1xuICAgIF90aGlzLmFjdGlvbktleXMgPSBbXTtcbiAgICBfdGhpcy5hZGRBY3Rpb25zKHByb3BzLmFjdGlvbnMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuYWRkQWN0aW9ucyA9IGZ1bmN0aW9uIGFkZEFjdGlvbnMoYWN0aW9ucykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKF90aGlzMi5hY3Rpb25LZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgX3RoaXMyLmFjdGlvbktleXMucHVzaChrZXkpO1xuICAgICAgfVxuXG4gICAgICBfdGhpczJba2V5XSA9IGFjdGlvbnNba2V5XTtcblxuICAgICAgdmFyIG9uVXBkYXRlID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5jdXJyZW50W2tleV0gPSB2O1xuICAgICAgfTs7XG5cbiAgICAgIC8vIEltbWVkaWF0ZWx5IHVwZGF0ZSB3aXRoIHRoZSBjdXJyZW50IGFjdGlvbiBzdGF0ZVxuICAgICAgb25VcGRhdGUoX3RoaXMyW2tleV0uZ2V0KCkpO1xuXG4gICAgICBfdGhpczJba2V5XS5zZXRQcm9wcyh7XG4gICAgICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuICAgICAgfSkuYWRkTGlzdGVuZXIob25VcGRhdGUpO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYWN0aW9ucykge1xuICAgICAgX2xvb3Aoa2V5KTtcbiAgICB9XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IHRoaXMuYWN0aW9uS2V5cy5sZW5ndGg7XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIF90aGlzM1trZXldLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXM0W2tleV0uc3RvcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiBnZXRWZWxvY2l0eSgpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciB2ZWxvY2l0eSA9IHt9O1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiB2ZWxvY2l0eVtrZXldID0gX3RoaXM1W2tleV0uZ2V0VmVsb2NpdHkoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmVsb2NpdHk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5udW1BY3RpdmVBY3Rpb25zID09PSAwO1xuICB9O1xuXG4gIHJldHVybiBDb21wb3NpdGVBY3Rpb247XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDb21wb3NpdGVBY3Rpb24oX2V4dGVuZHMoe1xuICAgIGFjdGlvbnM6IGFjdGlvbnNcbiAgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTnZiWEJ2YzJsMFpTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3T3pzN096czdPenM3U1VGRlRTeGxPenM3UVVGRFNpd3lRa0ZCV1N4TFFVRmFMRVZCUVcxQ08wRkJRVUU3TzBGQlFVRXNVVUZEVkN4UFFVUlRMRWRCUTNOQ0xFdEJSSFJDTEVOQlExUXNUMEZFVXpzN1FVRkJRU3hSUVVOSExHTkJSRWdzTkVKQlEzTkNMRXRCUkhSQ096dEJRVUZCTEdsRVFVVnFRaXh0UWtGQlRTeGpRVUZPTEVOQlJtbENPenRCUVVkcVFpeFZRVUZMTEU5QlFVd3NSMEZCWlN4RlFVRm1PMEZCUTBFc1ZVRkJTeXhWUVVGTUxFZEJRV3RDTEVWQlFXeENPMEZCUTBFc1ZVRkJTeXhWUVVGTUxFTkJRV2RDTEUxQlFVMHNUMEZCZEVJN1FVRk1hVUk3UVVGTmJFSTdPelJDUVVWRUxGVXNkVUpCUVZjc1R5eEZRVUZUTzBGQlFVRTdPMEZCUVVFc01FSkJRMUFzUjBGRVR6dEJRVVZvUWl4VlFVRkpMRTlCUVVzc1ZVRkJUQ3hEUVVGblFpeFBRVUZvUWl4RFFVRjNRaXhIUVVGNFFpeE5RVUZwUXl4RFFVRkRMRU5CUVhSRExFVkJRWGxETzBGQlEzWkRMR1ZCUVVzc1ZVRkJUQ3hEUVVGblFpeEpRVUZvUWl4RFFVRnhRaXhIUVVGeVFqdEJRVU5FT3p0QlFVVkVMR0ZCUVVzc1IwRkJUQ3hKUVVGWkxGRkJRVkVzUjBGQlVpeERRVUZhT3p0QlFVVkJMRlZCUVUwc1YwRkJWeXhWUVVGRExFTkJRVVE3UVVGQlFTeGxRVUZQTEU5QlFVc3NUMEZCVEN4RFFVRmhMRWRCUVdJc1NVRkJiMElzUTBGQk0wSTdRVUZCUVN4UFFVRnFRaXhEUVVFNFF6czdPMEZCUnpsRExHVkJRVk1zVDBGQlN5eEhRVUZNTEVWQlFWVXNSMEZCVml4RlFVRlVPenRCUVVWQkxHRkJRVXNzUjBGQlRDeEZRVU5ITEZGQlJFZ3NRMEZEV1R0QlFVTlNMR2xDUVVGVE8wRkJRVUVzYVVKQlFVMHNUMEZCU3l4blFrRkJUQ3hGUVVGT08wRkJRVUU3UVVGRVJDeFBRVVJhTEVWQlNVY3NWMEZLU0N4RFFVbGxMRkZCU21ZN1FVRmlaMEk3TzBGQlEyeENMRk5CUVVzc1NVRkJUU3hIUVVGWUxFbEJRV3RDTEU5QlFXeENMRVZCUVRKQ08wRkJRVUVzV1VGQmFFSXNSMEZCWjBJN1FVRnBRakZDTzBGQlEwWXNSenM3TkVKQlJVUXNUeXh6UWtGQlZUdEJRVUZCT3p0QlFVTlNMRk5CUVVzc1owSkJRVXdzUjBGQmQwSXNTMEZCU3l4VlFVRk1MRU5CUVdkQ0xFMUJRWGhETzBGQlEwRXNVMEZCU3l4VlFVRk1MRU5CUVdkQ0xFOUJRV2hDTEVOQlFYZENMRlZCUVVNc1IwRkJSRHRCUVVGQkxHRkJRVk1zVDBGQlN5eEhRVUZNTEVWQlFWVXNTMEZCVml4RlFVRlVPMEZCUVVFc1MwRkJlRUk3UVVGRFJDeEhPenMwUWtGRlJDeE5MSEZDUVVGVE8wRkJRVUU3TzBGQlExQXNVMEZCU3l4VlFVRk1MRU5CUVdkQ0xFOUJRV2hDTEVOQlFYZENMRlZCUVVNc1IwRkJSRHRCUVVGQkxHRkJRVk1zVDBGQlN5eEhRVUZNTEVWQlFWVXNTVUZCVml4RlFVRlVPMEZCUVVFc1MwRkJlRUk3UVVGRFJDeEhPenMwUWtGRlJDeFhMREJDUVVGak8wRkJRVUU3TzBGQlExb3NVVUZCVFN4WFFVRlhMRVZCUVdwQ08wRkJRMEVzVTBGQlN5eFZRVUZNTEVOQlFXZENMRTlCUVdoQ0xFTkJRWGRDTEZWQlFVTXNSMEZCUkR0QlFVRkJMR0ZCUVZNc1UwRkJVeXhIUVVGVUxFbEJRV2RDTEU5QlFVc3NSMEZCVEN4RlFVRlZMRmRCUVZZc1JVRkJla0k3UVVGQlFTeExRVUY0UWp0QlFVTkJMRmRCUVU4c1VVRkJVRHRCUVVORUxFYzdPelJDUVVWRUxHZENMQ3RDUVVGdFFqdEJRVU5xUWl4WFFVRlJMRXRCUVVzc1owSkJRVXdzUzBGQk1FSXNRMEZCYkVNN1FVRkRSQ3hIT3pzN096dHJRa0ZIV1N4VlFVRkRMRTlCUVVRc1JVRkJWU3hMUVVGV0xFVkJRVzlDTzBGQlEycERMRk5CUVU4c1NVRkJTU3hsUVVGS08wRkJRMHc3UVVGRVN5eExRVVZHTEV0QlJrVXNSVUZCVUR0QlFVbEVMRU1pTENKbWFXeGxJam9pWTI5dGNHOXphWFJsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVwYlhCdmNuUWdleUJ2YmtaeVlXMWxWWEJrWVhSbElIMGdabkp2YlNBbkxpNHZabkpoYldWemVXNWpKenRjYmx4dVkyeGhjM01nUTI5dGNHOXphWFJsUVdOMGFXOXVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnWTI5dWMzUnlkV04wYjNJb2NISnZjSE1wSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR0ZqZEdsdmJuTXNJQzR1TG5KbGJXRnBibWx1WjFCeWIzQnpJSDBnUFNCd2NtOXdjenRjYmlBZ0lDQnpkWEJsY2loeVpXMWhhVzVwYm1kUWNtOXdjeWs3WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwSUQwZ2UzMDdYRzRnSUNBZ2RHaHBjeTVoWTNScGIyNUxaWGx6SUQwZ1cxMDdYRzRnSUNBZ2RHaHBjeTVoWkdSQlkzUnBiMjV6S0hCeWIzQnpMbUZqZEdsdmJuTXBPMXh1SUNCOVhHNWNiaUFnWVdSa1FXTjBhVzl1Y3loaFkzUnBiMjV6S1NCN1hHNGdJQ0FnWm05eUlDaGpiMjV6ZENCclpYa2dhVzRnWVdOMGFXOXVjeWtnZTF4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11WVdOMGFXOXVTMlY1Y3k1cGJtUmxlRTltS0d0bGVTa2dQVDA5SUMweEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXTjBhVzl1UzJWNWN5NXdkWE5vS0d0bGVTazdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSFJvYVhOYmEyVjVYU0E5SUdGamRHbHZibk5iYTJWNVhUdGNibHh1SUNBZ0lDQWdZMjl1YzNRZ2IyNVZjR1JoZEdVZ1BTQW9kaWtnUFQ0Z2RHaHBjeTVqZFhKeVpXNTBXMnRsZVYwZ1BTQjJPenRjYmx4dUlDQWdJQ0FnTHk4Z1NXMXRaV1JwWVhSbGJIa2dkWEJrWVhSbElIZHBkR2dnZEdobElHTjFjbkpsYm5RZ1lXTjBhVzl1SUhOMFlYUmxYRzRnSUNBZ0lDQnZibFZ3WkdGMFpTaDBhR2x6VzJ0bGVWMHVaMlYwS0NrcE8xeHVYRzRnSUNBZ0lDQjBhR2x6VzJ0bGVWMWNiaUFnSUNBZ0lDQWdMbk5sZEZCeWIzQnpLSHRjYmlBZ0lDQWdJQ0FnSUNCZmIyNVRkRzl3T2lBb0tTQTlQaUIwYUdsekxtNTFiVUZqZEdsMlpVRmpkR2x2Ym5NdExWeHVJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0F1WVdSa1RHbHpkR1Z1WlhJb2IyNVZjR1JoZEdVcE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHOXVVM1JoY25Rb0tTQjdYRzRnSUNBZ2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpJRDBnZEdocGN5NWhZM1JwYjI1TFpYbHpMbXhsYm1kMGFEdGNiaUFnSUNCMGFHbHpMbUZqZEdsdmJrdGxlWE11Wm05eVJXRmphQ2dvYTJWNUtTQTlQaUIwYUdselcydGxlVjB1YzNSaGNuUW9LU2s3WEc0Z0lIMWNibHh1SUNCdmJsTjBiM0FvS1NCN1hHNGdJQ0FnZEdocGN5NWhZM1JwYjI1TFpYbHpMbVp2Y2tWaFkyZ29LR3RsZVNrZ1BUNGdkR2hwYzF0clpYbGRMbk4wYjNBb0tTazdYRzRnSUgxY2JseHVJQ0JuWlhSV1pXeHZZMmwwZVNncElIdGNiaUFnSUNCamIyNXpkQ0IyWld4dlkybDBlU0E5SUh0OU8xeHVJQ0FnSUhSb2FYTXVZV04wYVc5dVMyVjVjeTVtYjNKRllXTm9LQ2hyWlhrcElEMCtJSFpsYkc5amFYUjVXMnRsZVYwZ1BTQjBhR2x6VzJ0bGVWMHVaMlYwVm1Wc2IyTnBkSGtvS1NrN1hHNGdJQ0FnY21WMGRYSnVJSFpsYkc5amFYUjVPMXh1SUNCOVhHNWNiaUFnYVhOQlkzUnBiMjVEYjIxd2JHVjBaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdLSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lBOVBUMGdNQ2s3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dGamRHbHZibk1zSUhCeWIzQnpLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQnVaWGNnUTI5dGNHOXphWFJsUVdOMGFXOXVLSHRjYmlBZ0lDQmhZM1JwYjI1ekxGeHVJQ0FnSUM0dUxuQnliM0J6WEc0Z0lIMHBPMXh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxudmFyIF9lYXNpbmcgPSByZXF1aXJlKCcuLi9pbmMvZWFzaW5nJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENyb3NzRmFkZSA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhDcm9zc0ZhZGUsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENyb3NzRmFkZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ3Jvc3NGYWRlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ3Jvc3NGYWRlLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb247XG4gICAgdmFyIGVhc2UgPSBfcHJvcHMuZWFzZTtcbiAgICB2YXIgZmFkZXIgPSBfcHJvcHMuZmFkZXI7XG5cblxuICAgIHRoaXMuZmFkZXIgPSBmYWRlciB8fCAoMCwgX3R3ZWVuMi5kZWZhdWx0KSh7XG4gICAgICB0bzogMSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGVhc2U6IGVhc2VcbiAgICB9KS5zdGFydCgpO1xuICB9O1xuXG4gIENyb3NzRmFkZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZnJvbSA9IF9wcm9wczIuZnJvbTtcbiAgICB2YXIgdG8gPSBfcHJvcHMyLnRvO1xuXG4gICAgdmFyIGJhbGFuY2UgPSB0aGlzLmZhZGVyLmdldCgpO1xuICAgIHZhciBsYXRlc3RGcm9tVmFsdWUgPSBmcm9tLmdldCgpO1xuICAgIHZhciBsYXRlc3RUb1ZhbHVlID0gdG8uZ2V0KCk7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykobGF0ZXN0RnJvbVZhbHVlLCBsYXRlc3RUb1ZhbHVlLCBiYWxhbmNlKTtcbiAgfTtcblxuICByZXR1cm4gQ3Jvc3NGYWRlO1xufShfMi5kZWZhdWx0KTtcblxuQ3Jvc3NGYWRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZWFzZTogX2Vhc2luZy5saW5lYXJcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IENyb3NzRmFkZShwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk55YjNOekxXWmhaR1V1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3UVVGRFFUczdPenM3T3pzN096dEpRVVZOTEZNN096czdPenM3T3p0elFrRkxTaXhQTEhOQ1FVRlZPMEZCUVVFc2FVSkJRekJDTEV0QlFVc3NTMEZFTDBJN1FVRkJRU3hSUVVOQkxGRkJSRUVzVlVGRFFTeFJRVVJCTzBGQlFVRXNVVUZEVlN4SlFVUldMRlZCUTFVc1NVRkVWanRCUVVGQkxGRkJRMmRDTEV0QlJHaENMRlZCUTJkQ0xFdEJSR2hDT3pzN1FVRkhVaXhUUVVGTExFdEJRVXdzUjBGQllTeFRRVUZUTEhGQ1FVRk5PMEZCUXpGQ0xGVkJRVWtzUTBGRWMwSTdRVUZGTVVJc2QwSkJSakJDTzBGQlJ6RkNPMEZCU0RCQ0xFdEJRVTRzUlVGSmJrSXNTMEZLYlVJc1JVRkJkRUk3UVVGTFJDeEhPenR6UWtGRlJDeE5MSEZDUVVGVE8wRkJRVUVzYTBKQlEyTXNTMEZCU3l4TFFVUnVRanRCUVVGQkxGRkJRME1zU1VGRVJDeFhRVU5ETEVsQlJFUTdRVUZCUVN4UlFVTlBMRVZCUkZBc1YwRkRUeXhGUVVSUU96dEJRVVZRTEZGQlFVMHNWVUZCVlN4TFFVRkxMRXRCUVV3c1EwRkJWeXhIUVVGWUxFVkJRV2hDTzBGQlEwRXNVVUZCVFN4clFrRkJhMElzUzBGQlN5eEhRVUZNTEVWQlFYaENPMEZCUTBFc1VVRkJUU3huUWtGQlowSXNSMEZCUnl4SFFVRklMRVZCUVhSQ08wRkJRMEVzVjBGQlR5eG5RMEZCY1VJc1pVRkJja0lzUlVGQmMwTXNZVUZCZEVNc1JVRkJjVVFzVDBGQmNrUXNRMEZCVUR0QlFVTkVMRWM3T3pzN08wRkJja0pITEZNc1EwRkRSeXhaTEVkQlFXVTdRVUZEY0VJN1FVRkViMElzUXpzN2EwSkJkVUpVTEZWQlFVTXNTMEZCUkR0QlFVRkJMRk5CUVZjc1NVRkJTU3hUUVVGS0xFTkJRV01zUzBGQlpDeERRVUZZTzBGQlFVRXNReUlzSW1acGJHVWlPaUpqY205emN5MW1ZV1JsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVwYlhCdmNuUWdkSGRsWlc0Z1puSnZiU0FuTGk5MGQyVmxiaWM3WEc1cGJYQnZjblFnZXlCc2FXNWxZWElnZlNCbWNtOXRJQ2N1TGk5cGJtTXZaV0Z6YVc1bkp6dGNibWx0Y0c5eWRDQjdJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56SUgwZ1puSnZiU0FuTGk0dmFXNWpMMk5oYkdNbk8xeHVYRzVqYkdGemN5QkRjbTl6YzBaaFpHVWdaWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0J6ZEdGMGFXTWdaR1ZtWVhWc2RGQnliM0J6SUQwZ2UxeHVJQ0FnSUdWaGMyVTZJR3hwYm1WaGNseHVJQ0I5WEc1Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHUjFjbUYwYVc5dUxDQmxZWE5sTENCbVlXUmxjaUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNibHh1SUNBZ0lIUm9hWE11Wm1Ga1pYSWdQU0JtWVdSbGNpQjhmQ0IwZDJWbGJpaDdYRzRnSUNBZ0lDQjBiem9nTVN4Y2JpQWdJQ0FnSUdSMWNtRjBhVzl1TEZ4dUlDQWdJQ0FnWldGelpWeHVJQ0FnSUgwcExuTjBZWEowS0NrN1hHNGdJSDFjYmx4dUlDQjFjR1JoZEdVb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCbWNtOXRMQ0IwYnlCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQmpiMjV6ZENCaVlXeGhibU5sSUQwZ2RHaHBjeTVtWVdSbGNpNW5aWFFvS1R0Y2JpQWdJQ0JqYjI1emRDQnNZWFJsYzNSR2NtOXRWbUZzZFdVZ1BTQm1jbTl0TG1kbGRDZ3BPMXh1SUNBZ0lHTnZibk4wSUd4aGRHVnpkRlJ2Vm1Gc2RXVWdQU0IwYnk1blpYUW9LVHRjYmlBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9iR0YwWlhOMFJuSnZiVlpoYkhWbExDQnNZWFJsYzNSVWIxWmhiSFZsTENCaVlXeGhibU5sS1R0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2NISnZjSE1wSUQwK0lHNWxkeUJEY205emMwWmhaR1VvY0hKdmNITXBPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9jcm9zcy1mYWRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90d2VlbiA9IHJlcXVpcmUoJy4vdHdlZW4nKTtcblxudmFyIF90d2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2Vlbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChkdXJhdGlvbiwgb25Db21wbGV0ZSkge1xuICByZXR1cm4gKDAsIF90d2VlbjIuZGVmYXVsdCkoeyBkdXJhdGlvbjogZHVyYXRpb24sIG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlJsYkdGNUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenM3TzJ0Q1FVVmxMRlZCUVVNc1VVRkJSQ3hGUVVGWExGVkJRVmc3UVVGQlFTeFRRVUV3UWl4eFFrRkJUU3hGUVVGRkxHdENRVUZHTEVWQlFWa3NjMEpCUVZvc1JVRkJUaXhEUVVFeFFqdEJRVUZCTEVNaUxDSm1hV3hsSWpvaVpHVnNZWGt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkSGRsWlc0Z1puSnZiU0FuTGk5MGQyVmxiaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoa2RYSmhkR2x2Yml3Z2IyNURiMjF3YkdWMFpTa2dQVDRnZEhkbFpXNG9leUJrZFhKaGRHbHZiaXdnYjI1RGIyMXdiR1YwWlNCOUtUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9kZWxheS5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgT2Zmc2V0ID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKE9mZnNldCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gT2Zmc2V0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPZmZzZXQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBPZmZzZXQucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGlucHV0ID0gdGhpcy5wcm9wcy5pbnB1dDtcblxuICAgIHRoaXMuaW5wdXRPcmlnaW4gPSBpbnB1dC5nZXQoKTtcblxuICAgIHRoaXMuc2NoZWR1bGVVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5vbkZyYW1lVXBkYXRlKShfdGhpczIuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9O1xuXG4gICAgaW5wdXQuYWRkTGlzdGVuZXIodGhpcy5zY2hlZHVsZVVwZGF0ZSk7XG4gIH07XG5cbiAgT2Zmc2V0LnByb3RvdHlwZS5vblN0b3AgPSBmdW5jdGlvbiBvblN0b3AoKSB7XG4gICAgdmFyIGlucHV0ID0gdGhpcy5wcm9wcy5pbnB1dDtcblxuICAgIGlucHV0LnJlbW92ZUxpc3RlbmVyKHRoaXMuc2NoZWR1bGVVcGRhdGUpO1xuICB9O1xuXG4gIE9mZnNldC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBpbnB1dCA9IF9wcm9wcy5pbnB1dDtcbiAgICB2YXIgZnJvbSA9IF9wcm9wcy5mcm9tO1xuXG4gICAgdmFyIG9mZnNldCA9IGlucHV0LmdldCgpIC0gdGhpcy5pbnB1dE9yaWdpbjtcbiAgICByZXR1cm4gZnJvbSArIG9mZnNldDtcbiAgfTtcblxuICByZXR1cm4gT2Zmc2V0O1xufShfMi5kZWZhdWx0KTtcblxuT2Zmc2V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZnJvbTogMCxcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmdzWzBdO1xuXG4gICAgcmV0dXJuIG5ldyBPZmZzZXQocHJvcHMpO1xuICB9IGVsc2Uge1xuICAgIHZhciBpbnB1dCA9IGFyZ3NbMF07XG4gICAgdmFyIG9uVXBkYXRlID0gYXJnc1sxXTtcbiAgICB2YXIgX3Byb3BzMiA9IGFyZ3NbMl07XG5cbiAgICByZXR1cm4gbmV3IE9mZnNldChfZXh0ZW5kcyh7XG4gICAgICBpbnB1dDogaW5wdXQsXG4gICAgICBvblVwZGF0ZTogb25VcGRhdGVcbiAgICB9LCBfcHJvcHMyKSk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyOW1abk5sZEM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenRCUVVOQk96czdPenM3T3pzN08wbEJSVTBzVFRzN096czdPenM3TzIxQ1FVMUtMRThzYzBKQlFWVTdRVUZCUVRzN1FVRkJRU3hSUVVOQkxFdEJSRUVzUjBGRFZTeExRVUZMTEV0QlJHWXNRMEZEUVN4TFFVUkJPenRCUVVWU0xGTkJRVXNzVjBGQlRDeEhRVUZ0UWl4TlFVRk5MRWRCUVU0c1JVRkJia0k3TzBGQlJVRXNVMEZCU3l4alFVRk1MRWRCUVhOQ0xGbEJRVTA3UVVGRE1VSXNiME5CUVdNc1QwRkJTeXhsUVVGdVFqdEJRVU5FTEV0QlJrUTdPMEZCU1VFc1ZVRkJUU3hYUVVGT0xFTkJRV3RDTEV0QlFVc3NZMEZCZGtJN1FVRkRSQ3hIT3p0dFFrRkZSQ3hOTEhGQ1FVRlRPMEZCUVVFc1VVRkRReXhMUVVSRUxFZEJRMWNzUzBGQlN5eExRVVJvUWl4RFFVTkRMRXRCUkVRN08wRkJSVkFzVlVGQlRTeGpRVUZPTEVOQlFYRkNMRXRCUVVzc1kwRkJNVUk3UVVGRFJDeEhPenR0UWtGRlJDeE5MSEZDUVVGVE8wRkJRVUVzYVVKQlEybENMRXRCUVVzc1MwRkVkRUk3UVVGQlFTeFJRVU5ETEV0QlJFUXNWVUZEUXl4TFFVUkVPMEZCUVVFc1VVRkRVU3hKUVVSU0xGVkJRMUVzU1VGRVVqczdRVUZGVUN4UlFVRk5MRk5CUVZNc1RVRkJUU3hIUVVGT0xFdEJRV01zUzBGQlN5eFhRVUZzUXp0QlFVTkJMRmRCUVU4c1QwRkJUeXhOUVVGa08wRkJRMFFzUnpzN096czdRVUV4UWtjc1RTeERRVU5ITEZrc1IwRkJaVHRCUVVOd1FpeFJRVUZOTEVOQlJHTTdRVUZGY0VJc1YwRkJVenRCUVVaWExFTTdPMnRDUVRSQ1ZDeFpRVUZoTzBGQlFVRXNiME5CUVZRc1NVRkJVenRCUVVGVUxGRkJRVk03UVVGQlFUczdRVUZETVVJc1RVRkJTU3hMUVVGTExFMUJRVXdzUzBGQlowSXNRMEZCY0VJc1JVRkJkVUk3UVVGQlFTeFJRVU5pTEV0QlJHRXNSMEZEU0N4SlFVUkhPenRCUVVWeVFpeFhRVUZQTEVsQlFVa3NUVUZCU2l4RFFVRlhMRXRCUVZnc1EwRkJVRHRCUVVORUxFZEJTRVFzVFVGSFR6dEJRVUZCTEZGQlEwY3NTMEZFU0N4SFFVTTRRaXhKUVVRNVFqdEJRVUZCTEZGQlExVXNVVUZFVml4SFFVTTRRaXhKUVVRNVFqdEJRVUZCTEZGQlEyOUNMRTlCUkhCQ0xFZEJRemhDTEVsQlJEbENPenRCUVVWTUxGZEJRVThzU1VGQlNTeE5RVUZLTzBGQlEwd3NhMEpCUkVzN1FVRkZURHRCUVVaTExFOUJSMFlzVDBGSVJTeEZRVUZRTzBGQlMwUTdRVUZEUml4RElpd2labWxzWlNJNkltOW1abk5sZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOG5PMXh1YVcxd2IzSjBJSHNnYjI1R2NtRnRaVlZ3WkdGMFpTQjlJR1p5YjIwZ0p5NHVMMlp5WVcxbGMzbHVZeWM3WEc1Y2JtTnNZWE56SUU5bVpuTmxkQ0JsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzRnSUhOMFlYUnBZeUJrWldaaGRXeDBVSEp2Y0hNZ1BTQjdYRzRnSUNBZ1puSnZiVG9nTUN4Y2JpQWdJQ0J3WVhOemFYWmxPaUIwY25WbFhHNGdJSDA3WEc1Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHbHVjSFYwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lIUm9hWE11YVc1d2RYUlBjbWxuYVc0Z1BTQnBibkIxZEM1blpYUW9LVHRjYmx4dUlDQWdJSFJvYVhNdWMyTm9aV1IxYkdWVmNHUmhkR1VnUFNBb0tTQTlQaUI3WEc0Z0lDQWdJQ0J2YmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11YzJOb1pXUjFiR1ZrVlhCa1lYUmxLVHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdhVzV3ZFhRdVlXUmtUR2x6ZEdWdVpYSW9kR2hwY3k1elkyaGxaSFZzWlZWd1pHRjBaU2s3WEc0Z0lIMWNibHh1SUNCdmJsTjBiM0FvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJwYm5CMWRDQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0JwYm5CMWRDNXlaVzF2ZG1WTWFYTjBaVzVsY2loMGFHbHpMbk5qYUdWa2RXeGxWWEJrWVhSbEtUdGNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHbHVjSFYwTENCbWNtOXRJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJRzltWm5ObGRDQTlJR2x1Y0hWMExtZGxkQ2dwSUMwZ2RHaHBjeTVwYm5CMWRFOXlhV2RwYmp0Y2JpQWdJQ0J5WlhSMWNtNGdabkp2YlNBcklHOW1abk5sZER0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb0xpNHVZWEpuY3lrZ1BUNGdlMXh1SUNCcFppQW9ZWEpuY3k1c1pXNW5kR2dnUFQwOUlERXBJSHRjYmlBZ0lDQmpiMjV6ZENCYklIQnliM0J6SUYwZ1BTQmhjbWR6TzF4dUlDQWdJSEpsZEhWeWJpQnVaWGNnVDJabWMyVjBLSEJ5YjNCektUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmpiMjV6ZENCYklHbHVjSFYwTENCdmJsVndaR0YwWlN3Z2NISnZjSE1nWFNBOUlHRnlaM003WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJQWm1aelpYUW9lMXh1SUNBZ0lDQWdhVzV3ZFhRc1hHNGdJQ0FnSUNCdmJsVndaR0YwWlN4Y2JpQWdJQ0FnSUM0dUxuQnliM0J6WEc0Z0lDQWdmU2s3WEc0Z0lIMWNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvb2Zmc2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQYXJhbGxlbCA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQYXJhbGxlbCwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGFyYWxsZWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhcmFsbGVsKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLnByb3BzLmFjdGlvbnM7XG5cbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSBhY3Rpb25zLmxlbmd0aDtcblxuICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICBhY3Rpb24uc2V0UHJvcHMoe1xuICAgICAgICBfb25TdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uLnN0b3AoKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUuYWRkQWN0aW9uID0gZnVuY3Rpb24gYWRkQWN0aW9uKGFjdGlvbikge1xuICAgIHZhciBhY3Rpb25zID0gdGhpcy5wcm9wcy5hY3Rpb25zO1xuXG5cbiAgICBpZiAoYWN0aW9ucy5pbmRleE9mKGFjdGlvbikgPT09IC0xKSB7XG4gICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgUGFyYWxsZWwucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDA7XG4gIH07XG5cbiAgcmV0dXJuIFBhcmFsbGVsO1xufShfMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFjdGlvbnMsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGFyYWxsZWwoX2V4dGVuZHMoeyBhY3Rpb25zOiBhY3Rpb25zIH0sIHByb3BzKSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0JoY21Gc2JHVnNMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3pzN096czdPenM3T3pzN1NVRkZUU3hST3pzN096czdPenM3Y1VKQlEwb3NUeXh6UWtGQlZUdEJRVUZCT3p0QlFVRkJMRkZCUTBFc1QwRkVRU3hIUVVOWkxFdEJRVXNzUzBGRWFrSXNRMEZEUVN4UFFVUkJPenRCUVVWU0xGTkJRVXNzWjBKQlFVd3NSMEZCZDBJc1VVRkJVU3hOUVVGb1F6czdRVUZGUVN4WlFVRlJMRTlCUVZJc1EwRkJaMElzVlVGQlF5eE5RVUZFTEVWQlFWazdRVUZETVVJc1lVRkJUeXhSUVVGUUxFTkJRV2RDTzBGQlEyUXNhVUpCUVZNN1FVRkJRU3hwUWtGQlRTeFBRVUZMTEdkQ1FVRk1MRVZCUVU0N1FVRkJRVHRCUVVSTExFOUJRV2hDTEVWQlJVY3NTMEZHU0R0QlFVZEVMRXRCU2tRN1FVRkxSQ3hIT3p0eFFrRkZSQ3hOTEhGQ1FVRlRPMEZCUTFBc1UwRkJTeXhMUVVGTUxFTkJRVmNzVDBGQldDeERRVUZ0UWl4UFFVRnVRaXhEUVVFeVFpeFZRVUZETEUxQlFVUTdRVUZCUVN4aFFVRlpMRTlCUVU4c1NVRkJVQ3hGUVVGYU8wRkJRVUVzUzBGQk0wSTdRVUZEUkN4SE96dHhRa0ZGUkN4VExITkNRVUZWTEUwc1JVRkJVVHRCUVVGQkxGRkJRMUlzVDBGRVVTeEhRVU5KTEV0QlFVc3NTMEZFVkN4RFFVTlNMRTlCUkZFN096dEJRVWRvUWl4UlFVRkpMRkZCUVZFc1QwRkJVaXhEUVVGblFpeE5RVUZvUWl4TlFVRTBRaXhEUVVGRExFTkJRV3BETEVWQlFXOURPMEZCUTJ4RExHTkJRVkVzU1VGQlVpeERRVUZoTEUxQlFXSTdRVUZEUkR0QlFVTkdMRWM3TzNGQ1FVVkVMR2RDTEN0Q1FVRnRRanRCUVVOcVFpeFhRVUZSTEV0QlFVc3NaMEpCUVV3c1MwRkJNRUlzUTBGQmJFTTdRVUZEUkN4SE96czdPenRyUWtGSFdTeFZRVUZETEU5QlFVUXNSVUZCVlN4TFFVRldPMEZCUVVFc1UwRkJiMElzU1VGQlNTeFJRVUZLTEZsQlFXVXNaMEpCUVdZc1NVRkJNa0lzUzBGQk0wSXNSVUZCY0VJN1FVRkJRU3hESWl3aVptbHNaU0k2SW5CaGNtRnNiR1ZzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVjYm1Oc1lYTnpJRkJoY21Gc2JHVnNJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR0ZqZEdsdmJuTWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1eklEMGdZV04wYVc5dWN5NXNaVzVuZEdnN1hHNWNiaUFnSUNCaFkzUnBiMjV6TG1admNrVmhZMmdvS0dGamRHbHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ1lXTjBhVzl1TG5ObGRGQnliM0J6S0h0Y2JpQWdJQ0FnSUNBZ1gyOXVVM1J2Y0RvZ0tDa2dQVDRnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1ekxTMWNiaUFnSUNBZ0lIMHBMbk4wWVhKMEtDazdYRzRnSUNBZ2ZTazdYRzRnSUgxY2JseHVJQ0J2YmxOMGIzQW9LU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTVoWTNScGIyNXpMbVp2Y2tWaFkyZ29LR0ZqZEdsdmJpa2dQVDRnWVdOMGFXOXVMbk4wYjNBb0tTazdYRzRnSUgxY2JseHVJQ0JoWkdSQlkzUnBiMjRvWVdOMGFXOXVLU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmhZM1JwYjI1eklIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tHRmpkR2x2Ym5NdWFXNWtaWGhQWmloaFkzUnBiMjRwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnWVdOMGFXOXVjeTV3ZFhOb0tHRmpkR2x2YmlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FYTkJZM1JwYjI1RGIyMXdiR1YwWlNncElIdGNiaUFnSUNCeVpYUjFjbTRnS0hSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5QTlQVDBnTUNrN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHRmpkR2x2Ym5Nc0lIQnliM0J6S1NBOVBpQnVaWGNnVUdGeVlXeHNaV3dvZXlCaFkzUnBiMjV6TENBdUxpNXdjbTl3Y3lCOUtUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wYXJhbGxlbC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGh5c2ljcyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQaHlzaWNzLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBQaHlzaWNzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaHlzaWNzKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUGh5c2ljcy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBhdXRvU3RvcFNwZWVkID0gX3Byb3BzLmF1dG9TdG9wU3BlZWQ7XG4gICAgdmFyIGFjY2VsZXJhdGlvbiA9IF9wcm9wcy5hY2NlbGVyYXRpb247XG4gICAgdmFyIGZyaWN0aW9uID0gX3Byb3BzLmZyaWN0aW9uO1xuICAgIHZhciB2ZWxvY2l0eSA9IF9wcm9wcy52ZWxvY2l0eTtcbiAgICB2YXIgc3ByaW5nID0gX3Byb3BzLnNwcmluZztcbiAgICB2YXIgdG8gPSBfcHJvcHMudG87XG5cbiAgICB2YXIgbmV3VmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICB2YXIgZWxhcHNlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcblxuICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChhY2NlbGVyYXRpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShhY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGZyaWN0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGZyaWN0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSAqPSBNYXRoLnBvdygxIC0gZnJpY3Rpb24sIGVsYXBzZWQgLyAxMDApO1xuICAgIH1cblxuICAgIGlmIChzcHJpbmcgJiYgdG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGRpc3RhbmNlVG9UYXJnZXQgPSB0byAtIHRoaXMuY3VycmVudDtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkoc3ByaW5nLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB2ZWxvY2l0eVxuICAgIHRoaXMuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkobmV3VmVsb2NpdHksIGVsYXBzZWQpO1xuICAgIHRoaXMucHJvcHMudmVsb2NpdHkgPSBuZXdWZWxvY2l0eTtcblxuICAgIC8vIENoZWNrIGlmIHNpbXVsYXRpb24gaXMgY29tcGxldGVcbiAgICAvLyBXZSBkbyB0aGlzIGhlcmUgaW5zdGVhZCBvZiBgaXNBY3Rpb25Db21wbGV0ZWAgYXMgaXQgYWxsb3dzIHVzXG4gICAgLy8gdG8gY2xhbXAgZHVyaW5nIHRoaXMgdXBkYXRlXG4gICAgdGhpcy5pc0NvbXBsZXRlID0gYXV0b1N0b3BTcGVlZCAhPT0gZmFsc2UgJiYgKCFuZXdWZWxvY2l0eSB8fCBNYXRoLmFicyhuZXdWZWxvY2l0eSkgPD0gYXV0b1N0b3BTcGVlZCk7XG5cbiAgICBpZiAodGhpcy5pc0NvbXBsZXRlICYmIHNwcmluZykge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdG87XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBQaHlzaWNzLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICB9O1xuXG4gIHJldHVybiBQaHlzaWNzO1xufShfMi5kZWZhdWx0KTtcblxuUGh5c2ljcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjY2VsZXJhdGlvbjogMCxcbiAgZnJpY3Rpb246IDAsXG4gIHZlbG9jaXR5OiAwLFxuICBhdXRvU3RvcFNwZWVkOiAwLjAwMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGh5c2ljcyhwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0JvZVhOcFkzTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPMEZCUTBFN096czdPenM3T3pzN1NVRkZUU3hQT3pzN096czdPenM3YjBKQlVVb3NUU3h4UWtGQlV6dEJRVUZCTEdsQ1FVTnBSU3hMUVVGTExFdEJSSFJGTzBGQlFVRXNVVUZEUXl4aFFVUkVMRlZCUTBNc1lVRkVSRHRCUVVGQkxGRkJRMmRDTEZsQlJHaENMRlZCUTJkQ0xGbEJSR2hDTzBGQlFVRXNVVUZET0VJc1VVRkVPVUlzVlVGRE9FSXNVVUZFT1VJN1FVRkJRU3hSUVVOM1F5eFJRVVI0UXl4VlFVTjNReXhSUVVSNFF6dEJRVUZCTEZGQlEydEVMRTFCUkd4RUxGVkJRMnRFTEUxQlJHeEVPMEZCUVVFc1VVRkRNRVFzUlVGRU1VUXNWVUZETUVRc1JVRkVNVVE3TzBGQlJWQXNVVUZCU1N4alFVRmpMRkZCUVd4Q08wRkJRMEVzVVVGQlRTeFZRVUZWTEc5RFFVRm9RanM3TzBGQlIwRXNVVUZCU1N4WlFVRktMRVZCUVd0Q08wRkJRMmhDTEhGQ1FVRmxMSGxDUVVGakxGbEJRV1FzUlVGQk5FSXNUMEZCTlVJc1EwRkJaanRCUVVORU96czdRVUZIUkN4UlFVRkpMRkZCUVVvc1JVRkJZenRCUVVOYUxEaENRVUZuUWl4SlFVRkpMRkZCUVhCQ0xFVkJRV3RETEZWQlFWVXNSMEZCTlVNN1FVRkRSRHM3UVVGRlJDeFJRVUZKTEZWQlFWVXNUMEZCVHl4VFFVRnlRaXhGUVVGblF6dEJRVU01UWl4VlFVRk5MRzFDUVVGdFFpeExRVUZMTEV0QlFVc3NUMEZCYmtNN1FVRkRRU3h4UWtGQlpTeHRRa0ZCYlVJc2VVSkJRV01zVFVGQlpDeEZRVUZ6UWl4UFFVRjBRaXhEUVVGc1F6dEJRVU5FT3pzN1FVRkhSQ3hUUVVGTExFOUJRVXdzU1VGQlowSXNlVUpCUVdNc1YwRkJaQ3hGUVVFeVFpeFBRVUV6UWl4RFFVRm9RanRCUVVOQkxGTkJRVXNzUzBGQlRDeERRVUZYTEZGQlFWZ3NSMEZCYzBJc1YwRkJkRUk3T3pzN08wRkJTMEVzVTBGQlN5eFZRVUZNTEVkQlFXMUNMR3RDUVVGclFpeExRVUZzUWl4TFFVRTBRaXhEUVVGRExGZEJRVVFzU1VGQlowSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1YwRkJWQ3hMUVVGNVFpeGhRVUZ5UlN4RFFVRnVRanM3UVVGRlFTeFJRVUZKTEV0QlFVc3NWVUZCVEN4SlFVRnRRaXhOUVVGMlFpeEZRVUVyUWp0QlFVTTNRaXhYUVVGTExFOUJRVXdzUjBGQlpTeEZRVUZtTzBGQlEwUTdPMEZCUlVRc1YwRkJUeXhMUVVGTExFOUJRVm83UVVGRFJDeEhPenR2UWtGRlJDeG5RaXdyUWtGQmJVSTdRVUZEYWtJc1YwRkJUeXhMUVVGTExGVkJRVm83UVVGRFJDeEhPenM3T3p0QlFUbERSeXhQTEVOQlEwY3NXU3hIUVVGbE8wRkJRM0JDTEdkQ1FVRmpMRU5CUkUwN1FVRkZjRUlzV1VGQlZTeERRVVpWTzBGQlIzQkNMRmxCUVZVc1EwRklWVHRCUVVsd1FpeHBRa0ZCWlR0QlFVcExMRU03TzJ0Q1FXZEVWQ3hWUVVGRExFdEJRVVE3UVVGQlFTeFRRVUZYTEVsQlFVa3NUMEZCU2l4RFFVRlpMRXRCUVZvc1EwRkJXRHRCUVVGQkxFTWlMQ0ptYVd4bElqb2ljR2g1YzJsamN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaThuTzF4dWFXMXdiM0owSUhzZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbElIMGdabkp2YlNBbkxpNHZabkpoYldWemVXNWpKenRjYm1sdGNHOXlkQ0I3SUhOd1pXVmtVR1Z5Um5KaGJXVWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JtTnNZWE56SUZCb2VYTnBZM01nWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCemRHRjBhV01nWkdWbVlYVnNkRkJ5YjNCeklEMGdlMXh1SUNBZ0lHRmpZMlZzWlhKaGRHbHZiam9nTUN4Y2JpQWdJQ0JtY21samRHbHZiam9nTUN4Y2JpQWdJQ0IyWld4dlkybDBlVG9nTUN4Y2JpQWdJQ0JoZFhSdlUzUnZjRk53WldWa09pQXdMakF3TVZ4dUlDQjlYRzVjYmlBZ2RYQmtZWFJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWVhWMGIxTjBiM0JUY0dWbFpDd2dZV05qWld4bGNtRjBhVzl1TENCbWNtbGpkR2x2Yml3Z2RtVnNiMk5wZEhrc0lITndjbWx1Wnl3Z2RHOGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnYkdWMElHNWxkMVpsYkc5amFYUjVJRDBnZG1Wc2IyTnBkSGs3WEc0Z0lDQWdZMjl1YzNRZ1pXeGhjSE5sWkNBOUlIUnBiV1ZUYVc1alpVeGhjM1JHY21GdFpTZ3BPMXh1WEc0Z0lDQWdMeThnUVhCd2JIa2dZV05qWld4bGNtRjBhVzl1SUhSdklIWmxiRzlqYVhSNVhHNGdJQ0FnYVdZZ0tHRmpZMlZzWlhKaGRHbHZiaWtnZTF4dUlDQWdJQ0FnYm1WM1ZtVnNiMk5wZEhrZ0t6MGdjM0JsWldSUVpYSkdjbUZ0WlNoaFkyTmxiR1Z5WVhScGIyNHNJR1ZzWVhCelpXUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRUZ3Y0d4NUlHWnlhV04wYVc5dUlIUnZJSFpsYkc5amFYUjVYRzRnSUNBZ2FXWWdLR1p5YVdOMGFXOXVLU0I3WEc0Z0lDQWdJQ0J1WlhkV1pXeHZZMmwwZVNBcVBTQW9NU0F0SUdaeWFXTjBhVzl1S1NBcUtpQW9aV3hoY0hObFpDQXZJREV3TUNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tITndjbWx1WnlBbUppQjBieUFoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCa2FYTjBZVzVqWlZSdlZHRnlaMlYwSUQwZ2RHOGdMU0IwYUdsekxtTjFjbkpsYm5RN1hHNGdJQ0FnSUNCdVpYZFdaV3h2WTJsMGVTQXJQU0JrYVhOMFlXNWpaVlJ2VkdGeVoyVjBJQ29nYzNCbFpXUlFaWEpHY21GdFpTaHpjSEpwYm1jc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFRndjR3g1SUhabGJHOWphWFI1WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwSUNzOUlITndaV1ZrVUdWeVJuSmhiV1VvYm1WM1ZtVnNiMk5wZEhrc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUhSb2FYTXVjSEp2Y0hNdWRtVnNiMk5wZEhrZ1BTQnVaWGRXWld4dlkybDBlVHRjYmx4dUlDQWdJQzh2SUVOb1pXTnJJR2xtSUhOcGJYVnNZWFJwYjI0Z2FYTWdZMjl0Y0d4bGRHVmNiaUFnSUNBdkx5QlhaU0JrYnlCMGFHbHpJR2hsY21VZ2FXNXpkR1ZoWkNCdlppQmdhWE5CWTNScGIyNURiMjF3YkdWMFpXQWdZWE1nYVhRZ1lXeHNiM2R6SUhWelhHNGdJQ0FnTHk4Z2RHOGdZMnhoYlhBZ1pIVnlhVzVuSUhSb2FYTWdkWEJrWVhSbFhHNGdJQ0FnZEdocGN5NXBjME52YlhCc1pYUmxJRDBnS0dGMWRHOVRkRzl3VTNCbFpXUWdJVDA5SUdaaGJITmxJQ1ltSUNnaGJtVjNWbVZzYjJOcGRIa2dmSHdnVFdGMGFDNWhZbk1vYm1WM1ZtVnNiMk5wZEhrcElEdzlJR0YxZEc5VGRHOXdVM0JsWldRcEtUdGNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtbHpRMjl0Y0d4bGRHVWdKaVlnYzNCeWFXNW5LU0I3WEc0Z0lDQWdJQ0IwYUdsekxtTjFjbkpsYm5RZ1BTQjBienRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVqZFhKeVpXNTBPMXh1SUNCOVhHNWNiaUFnYVhOQlkzUnBiMjVEYjIxd2JHVjBaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1cGMwTnZiWEJzWlhSbE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaHdjbTl3Y3lrZ1BUNGdibVYzSUZCb2VYTnBZM01vY0hKdmNITXBPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF92YWx1ZSA9IHJlcXVpcmUoJy4vdmFsdWUnKTtcblxudmFyIF92YWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZSk7XG5cbnZhciBfY29tcG9zaXRlID0gcmVxdWlyZSgnLi9jb21wb3NpdGUnKTtcblxudmFyIF9jb21wb3NpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBjcmVhdGVQb2ludGVyKF9yZWYyLCBfcmVmKSB7XG4gIHZhciB4ID0gX3JlZjIueDtcbiAgdmFyIHkgPSBfcmVmMi55O1xuICB2YXIgZXZlbnRUb1BvaW50cyA9IF9yZWYuZXZlbnRUb1BvaW50cztcbiAgdmFyIG1vdmVFdmVudCA9IF9yZWYubW92ZUV2ZW50O1xuXG4gIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2V2ZW50VG9Qb2ludHMnLCAnbW92ZUV2ZW50J10pO1xuXG4gIHZhciBwb2ludGVyID0gKDAsIF9jb21wb3NpdGUyLmRlZmF1bHQpKHtcbiAgICB4OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh4KSxcbiAgICB5OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh5KVxuICB9LCBfZXh0ZW5kcyh7XG4gICAgcHJldmVudERlZmF1bHQ6IHRydWVcbiAgfSwgcHJvcHMpKTtcblxuICB2YXIgdXBkYXRlUG9pbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHByb3BzLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyIHBvaW50cyA9IGV2ZW50VG9Qb2ludHMoZSk7XG4gICAgcG9pbnRlci54LnNldChwb2ludHMueCk7XG4gICAgcG9pbnRlci55LnNldChwb2ludHMueSk7XG4gIH07XG5cbiAgcG9pbnRlci5zZXRQcm9wcyh7XG4gICAgX29uU3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpO1xuICAgIH0sXG4gICAgX29uU3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcG9pbnRlcjtcbn1cblxudmFyIG1vdXNlRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIHtcbiAgICB4OiBlLnBhZ2VYLFxuICAgIHk6IGUucGFnZVlcbiAgfTtcbn07XG5cbnZhciB0b3VjaEV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChfcmVmMykge1xuICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBfcmVmMy5jaGFuZ2VkVG91Y2hlcztcbiAgcmV0dXJuIHtcbiAgICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbiAgfTtcbn07XG5cbnZhciBnZXROYXRpdmVFdmVudCA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiBlLm9yaWdpbmFsRXZlbnQgfHwgZS5uYXRpdmVFdmVudCB8fCBlO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGUsIHByb3BzKSB7XG4gIHZhciBuYXRpdmVFdmVudCA9IGdldE5hdGl2ZUV2ZW50KGUpO1xuICByZXR1cm4gbmF0aXZlRXZlbnQudG91Y2hlcyA/IGNyZWF0ZVBvaW50ZXIodG91Y2hFdmVudFRvUG9pbnQoZSksIF9leHRlbmRzKHtcbiAgICBtb3ZlRXZlbnQ6ICd0b3VjaG1vdmUnLFxuICAgIGV2ZW50VG9Qb2ludHM6IHRvdWNoRXZlbnRUb1BvaW50XG4gIH0sIHByb3BzKSkgOiBjcmVhdGVQb2ludGVyKG1vdXNlRXZlbnRUb1BvaW50KGUpLCBfZXh0ZW5kcyh7XG4gICAgbW92ZUV2ZW50OiAnbW91c2Vtb3ZlJyxcbiAgICBldmVudFRvUG9pbnRzOiBtb3VzZUV2ZW50VG9Qb2ludFxuICB9LCBwcm9wcykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNCdmFXNTBaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVVFN096czdRVUZEUVRzN096czdPenM3UVVGRlFTeFRRVUZUTEdGQlFWUXNZMEZCZVVVN1FVRkJRU3hOUVVGb1JDeERRVUZuUkN4VFFVRm9SQ3hEUVVGblJEdEJRVUZCTEUxQlFUZERMRU5CUVRaRExGTkJRVGRETEVOQlFUWkRPMEZCUVVFc1RVRkJkRU1zWVVGQmMwTXNVVUZCZEVNc1lVRkJjME03UVVGQlFTeE5RVUYyUWl4VFFVRjFRaXhSUVVGMlFpeFRRVUYxUWpzN1FVRkJRU3hOUVVGVUxFdEJRVk03TzBGQlEzWkZMRTFCUVUwc1ZVRkJWU3g1UWtGQlZUdEJRVU40UWl4UFFVRkhMSEZDUVVGTkxFTkJRVTRzUTBGRWNVSTdRVUZGZUVJc1QwRkJSeXh4UWtGQlRTeERRVUZPTzBGQlJuRkNMRWRCUVZZN1FVRkpaQ3h2UWtGQlowSTdRVUZLUml4TFFVdFlMRXRCVEZjc1JVRkJhRUk3TzBGQlVVRXNUVUZCVFN4blFrRkJaMElzVlVGQlF5eERRVUZFTEVWQlFVODdRVUZETTBJc1VVRkJTU3hOUVVGTkxHTkJRVllzUlVGQk1FSTdRVUZEZUVJc1VVRkJSU3hqUVVGR08wRkJRMFE3TzBGQlJVUXNVVUZCVFN4VFFVRlRMR05CUVdNc1EwRkJaQ3hEUVVGbU8wRkJRMEVzV1VGQlVTeERRVUZTTEVOQlFWVXNSMEZCVml4RFFVRmpMRTlCUVU4c1EwRkJja0k3UVVGRFFTeFpRVUZSTEVOQlFWSXNRMEZCVlN4SFFVRldMRU5CUVdNc1QwRkJUeXhEUVVGeVFqdEJRVU5FTEVkQlVrUTdPMEZCVlVFc1ZVRkJVU3hSUVVGU0xFTkJRV2xDTzBGQlEyWXNZMEZCVlR0QlFVRkJMR0ZCUVUwc1UwRkJVeXhsUVVGVUxFTkJRWGxDTEdkQ1FVRjZRaXhEUVVFd1F5eFRRVUV4UXl4RlFVRnhSQ3hoUVVGeVJDeERRVUZPTzBGQlFVRXNTMEZFU3p0QlFVVm1MR0ZCUVZNN1FVRkJRU3hoUVVGTkxGTkJRVk1zWlVGQlZDeERRVUY1UWl4dFFrRkJla0lzUTBGQk5rTXNVMEZCTjBNc1JVRkJkMFFzWVVGQmVFUXNRMEZCVGp0QlFVRkJPMEZCUmswc1IwRkJha0k3TzBGQlMwRXNVMEZCVHl4UFFVRlFPMEZCUTBRN08wRkJSVVFzU1VGQlRTeHZRa0ZCYjBJc1ZVRkJReXhEUVVGRU8wRkJRVUVzVTBGQlVUdEJRVU5vUXl4UFFVRkhMRVZCUVVVc1MwRkVNa0k3UVVGRmFFTXNUMEZCUnl4RlFVRkZPMEZCUmpKQ0xFZEJRVkk3UVVGQlFTeERRVUV4UWpzN1FVRkxRU3hKUVVGTkxHOUNRVUZ2UWp0QlFVRkJMRTFCUVVjc1kwRkJTQ3hUUVVGSExHTkJRVWc3UVVGQlFTeFRRVUY1UWp0QlFVTnFSQ3hQUVVGSExHVkJRV1VzUTBGQlppeEZRVUZyUWl4UFFVUTBRanRCUVVWcVJDeFBRVUZITEdWQlFXVXNRMEZCWml4RlFVRnJRanRCUVVZMFFpeEhRVUY2UWp0QlFVRkJMRU5CUVRGQ096dEJRVXRCTEVsQlFVMHNhVUpCUVdsQ0xGVkJRVU1zUTBGQlJEdEJRVUZCTEZOQlFVOHNSVUZCUlN4aFFVRkdMRWxCUVcxQ0xFVkJRVVVzVjBGQmNrSXNTVUZCYjBNc1EwRkJNME03UVVGQlFTeERRVUYyUWpzN2EwSkJSV1VzVlVGQlF5eERRVUZFTEVWQlFVa3NTMEZCU2l4RlFVRmpPMEZCUXpOQ0xFMUJRVTBzWTBGQll5eGxRVUZsTEVOQlFXWXNRMEZCY0VJN1FVRkRRU3hUUVVGUkxGbEJRVmtzVDBGQllpeEhRVU5NTEdOQlFXTXNhMEpCUVd0Q0xFTkJRV3hDTEVOQlFXUTdRVUZEUlN4bFFVRlhMRmRCUkdJN1FVRkZSU3h0UWtGQlpUdEJRVVpxUWl4TFFVZExMRXRCU0V3c1JVRkVTeXhIUVUxTUxHTkJRV01zYTBKQlFXdENMRU5CUVd4Q0xFTkJRV1E3UVVGRFJTeGxRVUZYTEZkQlJHSTdRVUZGUlN4dFFrRkJaVHRCUVVacVFpeExRVWRMTEV0QlNFd3NSVUZPUmp0QlFWZEVMRU1pTENKbWFXeGxJam9pY0c5cGJuUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjJZV3gxWlNCbWNtOXRJQ2N1TDNaaGJIVmxKenRjYm1sdGNHOXlkQ0JqYjIxd2IzTnBkR1VnWm5KdmJTQW5MaTlqYjIxd2IzTnBkR1VuTzF4dVhHNW1kVzVqZEdsdmJpQmpjbVZoZEdWUWIybHVkR1Z5S0hzZ2VDd2dlU0I5TENCN0lHVjJaVzUwVkc5UWIybHVkSE1zSUcxdmRtVkZkbVZ1ZEN3Z0xpNHVjSEp2Y0hNZ2ZTa2dlMXh1SUNCamIyNXpkQ0J3YjJsdWRHVnlJRDBnWTI5dGNHOXphWFJsS0h0Y2JpQWdJQ0I0T2lCMllXeDFaU2g0S1N4Y2JpQWdJQ0I1T2lCMllXeDFaU2g1S1Z4dUlDQjlMQ0I3WEc0Z0lDQWdjSEpsZG1WdWRFUmxabUYxYkhRNklIUnlkV1VzWEc0Z0lDQWdMaTR1Y0hKdmNITmNiaUFnZlNrN1hHNWNiaUFnWTI5dWMzUWdkWEJrWVhSbFVHOXBiblJsY2lBOUlDaGxLU0E5UGlCN1hHNGdJQ0FnYVdZZ0tIQnliM0J6TG5CeVpYWmxiblJFWldaaGRXeDBLU0I3WEc0Z0lDQWdJQ0JsTG5CeVpYWmxiblJFWldaaGRXeDBLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZMjl1YzNRZ2NHOXBiblJ6SUQwZ1pYWmxiblJVYjFCdmFXNTBjeWhsS1R0Y2JpQWdJQ0J3YjJsdWRHVnlMbmd1YzJWMEtIQnZhVzUwY3k1NEtUdGNiaUFnSUNCd2IybHVkR1Z5TG5rdWMyVjBLSEJ2YVc1MGN5NTVLVHRjYmlBZ2ZUdGNibHh1SUNCd2IybHVkR1Z5TG5ObGRGQnliM0J6S0h0Y2JpQWdJQ0JmYjI1VGRHRnlkRG9nS0NrZ1BUNGdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb2JXOTJaVVYyWlc1MExDQjFjR1JoZEdWUWIybHVkR1Z5S1N4Y2JpQWdJQ0JmYjI1VGRHOXdPaUFvS1NBOVBpQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpaHRiM1psUlhabGJuUXNJSFZ3WkdGMFpWQnZhVzUwWlhJcFhHNGdJSDBwTzF4dVhHNGdJSEpsZEhWeWJpQndiMmx1ZEdWeU8xeHVmVnh1WEc1amIyNXpkQ0J0YjNWelpVVjJaVzUwVkc5UWIybHVkQ0E5SUNobEtTQTlQaUFvZTF4dUlDQjRPaUJsTG5CaFoyVllMRnh1SUNCNU9pQmxMbkJoWjJWWlhHNTlLVHRjYmx4dVkyOXVjM1FnZEc5MVkyaEZkbVZ1ZEZSdlVHOXBiblFnUFNBb2V5QmphR0Z1WjJWa1ZHOTFZMmhsY3lCOUtTQTlQaUFvZTF4dUlDQjRPaUJqYUdGdVoyVmtWRzkxWTJobGMxc3dYUzVqYkdsbGJuUllMRnh1SUNCNU9pQmphR0Z1WjJWa1ZHOTFZMmhsYzFzd1hTNWpiR2xsYm5SWlhHNTlLVHRjYmx4dVkyOXVjM1FnWjJWMFRtRjBhWFpsUlhabGJuUWdQU0FvWlNrZ1BUNGdaUzV2Y21sbmFXNWhiRVYyWlc1MElIeDhJR1V1Ym1GMGFYWmxSWFpsYm5RZ2ZId2daVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dVc0lIQnliM0J6S1NBOVBpQjdYRzRnSUdOdmJuTjBJRzVoZEdsMlpVVjJaVzUwSUQwZ1oyVjBUbUYwYVhabFJYWmxiblFvWlNrN1hHNGdJSEpsZEhWeWJpQW9ibUYwYVhabFJYWmxiblF1ZEc5MVkyaGxjeWtnUDF4dUlDQWdJR055WldGMFpWQnZhVzUwWlhJb2RHOTFZMmhGZG1WdWRGUnZVRzlwYm5Rb1pTa3NJSHRjYmlBZ0lDQWdJRzF2ZG1WRmRtVnVkRG9nSjNSdmRXTm9iVzkyWlNjc1hHNGdJQ0FnSUNCbGRtVnVkRlJ2VUc5cGJuUnpPaUIwYjNWamFFVjJaVzUwVkc5UWIybHVkQ3hjYmlBZ0lDQWdJQzR1TG5CeWIzQnpYRzRnSUNBZ2ZTa2dPbHh1SUNBZ0lHTnlaV0YwWlZCdmFXNTBaWElvYlc5MWMyVkZkbVZ1ZEZSdlVHOXBiblFvWlNrc0lIdGNiaUFnSUNBZ0lHMXZkbVZGZG1WdWREb2dKMjF2ZFhObGJXOTJaU2NzWEc0Z0lDQWdJQ0JsZG1WdWRGUnZVRzlwYm5Sek9pQnRiM1Z6WlVWMlpXNTBWRzlRYjJsdWRDeGNiaUFnSUNBZ0lDNHVMbkJ5YjNCelhHNGdJQ0FnZlNrN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wb2ludGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF8gPSByZXF1aXJlKCcuLycpO1xuXG52YXIgXzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF8pO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4uL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF9lYXNpbmcgPSByZXF1aXJlKCcuLi9pbmMvZWFzaW5nJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGNsYW1wUHJvZ3Jlc3MgPSAoMCwgX3RyYW5zZm9ybWVycy5jbGFtcCkoMCwgMSk7XG5cbnZhciBORVhUX1NURVBTID0ge1xuICBsb29wOiBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICByZXR1cm4gdHdlZW4uc3RhcnQoKTtcbiAgfSxcbiAgeW95bzogZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgcmV0dXJuIHR3ZWVuLnJldmVyc2UoKS5zdGFydCgpO1xuICB9LFxuICBmbGlwOiBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICByZXR1cm4gdHdlZW4uZmxpcCgpLnN0YXJ0KCk7XG4gIH1cbn07XG5cbnZhciBUd2VlbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhUd2VlbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3ZWVuKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVHdlZW4ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkdXJhdGlvbiA9IF9wcm9wcy5kdXJhdGlvbjtcbiAgICB2YXIgcGxheURpcmVjdGlvbiA9IF9wcm9wcy5wbGF5RGlyZWN0aW9uO1xuXG5cbiAgICB0aGlzLmVsYXBzZWQgPSBwbGF5RGlyZWN0aW9uID09PSAxID8gMCA6IGR1cmF0aW9uO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkdXJhdGlvbiA9IF9wcm9wczIuZHVyYXRpb247XG4gICAgdmFyIGVhc2UgPSBfcHJvcHMyLmVhc2U7XG4gICAgdmFyIGZyb20gPSBfcHJvcHMyLmZyb207XG4gICAgdmFyIHRvID0gX3Byb3BzMi50bztcbiAgICB2YXIgcGxheURpcmVjdGlvbiA9IF9wcm9wczIucGxheURpcmVjdGlvbjtcblxuXG4gICAgdGhpcy5lbGFwc2VkICs9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKSAqIHBsYXlEaXJlY3Rpb247XG5cbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShmcm9tLCB0bywgZWFzZShjbGFtcFByb2dyZXNzKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoMCwgZHVyYXRpb24sIHRoaXMuZWxhcHNlZCkpKSk7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZHVyYXRpb24gPSBfcHJvcHMzLmR1cmF0aW9uO1xuICAgIHZhciBwbGF5RGlyZWN0aW9uID0gX3Byb3BzMy5wbGF5RGlyZWN0aW9uO1xuICAgIHZhciB5b3lvID0gX3Byb3BzMy55b3lvO1xuICAgIHZhciBsb29wID0gX3Byb3BzMy5sb29wO1xuICAgIHZhciBmbGlwID0gX3Byb3BzMy5mbGlwO1xuXG4gICAgdmFyIGlzQ29tcGxldGUgPSBwbGF5RGlyZWN0aW9uID09PSAxID8gdGhpcy5lbGFwc2VkID49IGR1cmF0aW9uIDogdGhpcy5lbGFwc2VkIDw9IDA7XG5cbiAgICBpZiAoaXNDb21wbGV0ZSAmJiAoeW95byB8fCBsb29wIHx8IGZsaXApKSB7XG4gICAgICB2YXIgaXNTdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIE5FWFRfU1RFUFMpIHtcbiAgICAgICAgdmFyIG5leHRTdGVwID0gTkVYVF9TVEVQU1trZXldO1xuICAgICAgICB2YXIgY291bnRQcm9wID0ga2V5ICsgJ0NvdW50JztcbiAgICAgICAgdmFyIHN0ZXBNYXggPSB0aGlzLmdldFByb3Aoa2V5KTtcbiAgICAgICAgdmFyIHN0ZXBDb3VudCA9IHRoaXMuZ2V0UHJvcChjb3VudFByb3ApO1xuXG4gICAgICAgIGlmIChzdGVwTWF4ID4gc3RlcENvdW50KSB7XG4gICAgICAgICAgdmFyIF9zZXRQcm9wcztcblxuICAgICAgICAgIHRoaXMuc2V0UHJvcHMoKF9zZXRQcm9wcyA9IHt9LCBfc2V0UHJvcHNbY291bnRQcm9wXSA9IHN0ZXBDb3VudCArIDEsIF9zZXRQcm9wcykpO1xuICAgICAgICAgIG5leHRTdGVwKHRoaXMpO1xuICAgICAgICAgIGlzU3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdGVwVGFrZW4pIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNDb21wbGV0ZTtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuZ2V0RWxhcHNlZCA9IGZ1bmN0aW9uIGdldEVsYXBzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZDtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuZmxpcCA9IGZ1bmN0aW9uIGZsaXAoKSB7XG4gICAgdGhpcy5lbGFwc2VkID0gdGhpcy5wcm9wcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcbiAgICB2YXIgX3JlZiA9IFt0aGlzLnByb3BzLnRvLCB0aGlzLnByb3BzLmZyb21dO1xuICAgIHRoaXMucHJvcHMuZnJvbSA9IF9yZWZbMF07XG4gICAgdGhpcy5wcm9wcy50byA9IF9yZWZbMV07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgdGhpcy5wcm9wcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBUd2Vlbjtcbn0oXzIuZGVmYXVsdCk7XG5cblR3ZWVuLmRlZmF1bHRQcm9wcyA9IHtcbiAgZHVyYXRpb246IDMwMCxcbiAgZWFzZTogX2Vhc2luZy5lYXNlT3V0LFxuICBmcm9tOiAwLFxuICB0bzogMSxcbiAgZmxpcDogMCxcbiAgZmxpcENvdW50OiAwLFxuICB5b3lvOiAwLFxuICB5b3lvQ291bnQ6IDAsXG4gIGxvb3A6IDAsXG4gIGxvb3BDb3VudDogMCxcbiAgcGxheURpcmVjdGlvbjogMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmdzWzBdO1xuXG4gICAgcmV0dXJuIG5ldyBUd2Vlbihwcm9wcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGZyb20gPSBhcmdzWzBdO1xuICAgIHZhciB0byA9IGFyZ3NbMV07XG4gICAgdmFyIGR1cmF0aW9uID0gYXJnc1syXTtcbiAgICB2YXIgZWFzZSA9IGFyZ3NbM107XG4gICAgdmFyIF9wcm9wczQgPSBhcmdzWzRdO1xuXG4gICAgcmV0dXJuIG5ldyBUd2VlbihfZXh0ZW5kcyh7IGZyb206IGZyb20sIHRvOiB0bywgZHVyYXRpb246IGR1cmF0aW9uLCBlYXNlOiBlYXNlIH0sIF9wcm9wczQpKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNSM1pXVnVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3pzN08wRkJRMEU3TzBGQlEwRTdPMEZCUTBFN08wRkJRMEU3T3pzN096czdPenM3UVVGRlFTeEpRVUZOTEdkQ1FVRm5RaXg1UWtGQlRTeERRVUZPTEVWQlFWTXNRMEZCVkN4RFFVRjBRanM3UVVGRlFTeEpRVUZOTEdGQlFXRTdRVUZEYWtJc1VVRkJUU3hWUVVGRExFdEJRVVE3UVVGQlFTeFhRVUZYTEUxQlFVMHNTMEZCVGl4RlFVRllPMEZCUVVFc1IwRkVWenRCUVVWcVFpeFJRVUZOTEZWQlFVTXNTMEZCUkR0QlFVRkJMRmRCUVZjc1RVRkJUU3hQUVVGT0xFZEJRV2RDTEV0QlFXaENMRVZCUVZnN1FVRkJRU3hIUVVaWE8wRkJSMnBDTEZGQlFVMHNWVUZCUXl4TFFVRkVPMEZCUVVFc1YwRkJWeXhOUVVGTkxFbEJRVTRzUjBGQllTeExRVUZpTEVWQlFWZzdRVUZCUVR0QlFVaFhMRU5CUVc1Q096dEpRVTFOTEVzN096czdPenM3T3p0clFrRmxTaXhQTEhOQ1FVRlZPMEZCUVVFc2FVSkJRelJDTEV0QlFVc3NTMEZFYWtNN1FVRkJRU3hSUVVOQkxGRkJSRUVzVlVGRFFTeFJRVVJCTzBGQlFVRXNVVUZEVlN4aFFVUldMRlZCUTFVc1lVRkVWanM3TzBGQlIxSXNVMEZCU3l4UFFVRk1MRWRCUVdkQ0xHdENRVUZyUWl4RFFVRnVRaXhIUVVGM1FpeERRVUY0UWl4SFFVRTBRaXhSUVVFelF6dEJRVU5FTEVjN08ydENRVVZFTEUwc2NVSkJRVk03UVVGQlFTeHJRa0ZETmtNc1MwRkJTeXhMUVVSc1JEdEJRVUZCTEZGQlEwTXNVVUZFUkN4WFFVTkRMRkZCUkVRN1FVRkJRU3hSUVVOWExFbEJSRmdzVjBGRFZ5eEpRVVJZTzBGQlFVRXNVVUZEYVVJc1NVRkVha0lzVjBGRGFVSXNTVUZFYWtJN1FVRkJRU3hSUVVOMVFpeEZRVVIyUWl4WFFVTjFRaXhGUVVSMlFqdEJRVUZCTEZGQlF6SkNMR0ZCUkROQ0xGZEJRekpDTEdGQlJETkNPenM3UVVGSFVDeFRRVUZMTEU5QlFVd3NTVUZCWjBJc2RVTkJRWFZDTEdGQlFYWkRPenRCUVVWQkxGZEJRVThzWjBOQlFYRkNMRWxCUVhKQ0xFVkJRVEpDTEVWQlFUTkNMRVZCUVN0Q0xFdEJRVXNzWTBGQll5eG5RMEZCY1VJc1EwRkJja0lzUlVGQmQwSXNVVUZCZUVJc1JVRkJhME1zUzBGQlN5eFBRVUYyUXl4RFFVRmtMRU5CUVV3c1EwRkJMMElzUTBGQlVEdEJRVU5FTEVjN08ydENRVVZFTEdkQ0xDdENRVUZ0UWp0QlFVRkJMR3RDUVVOeFF5eExRVUZMTEV0QlJERkRPMEZCUVVFc1VVRkRWQ3hSUVVSVExGZEJRMVFzVVVGRVV6dEJRVUZCTEZGQlEwTXNZVUZFUkN4WFFVTkRMR0ZCUkVRN1FVRkJRU3hSUVVOblFpeEpRVVJvUWl4WFFVTm5RaXhKUVVSb1FqdEJRVUZCTEZGQlEzTkNMRWxCUkhSQ0xGZEJRM05DTEVsQlJIUkNPMEZCUVVFc1VVRkRORUlzU1VGRU5VSXNWMEZETkVJc1NVRkVOVUk3TzBGQlJXcENMRkZCUVVrc1lVRkJZeXhyUWtGQmEwSXNRMEZCYmtJc1IwRkJlVUlzUzBGQlN5eFBRVUZNTEVsQlFXZENMRkZCUVhwRExFZEJRWE5FTEV0QlFVc3NUMEZCVEN4SlFVRm5RaXhEUVVGMlJqczdRVUZGUVN4UlFVRkpMR1ZCUVdVc1VVRkJVU3hKUVVGU0xFbEJRV2RDTEVsQlFTOUNMRU5CUVVvc1JVRkJNRU03UVVGRGVFTXNWVUZCU1N4alFVRmpMRXRCUVd4Q096dEJRVVZCTEZkQlFVc3NTVUZCU1N4SFFVRlVMRWxCUVdkQ0xGVkJRV2hDTEVWQlFUUkNPMEZCUXpGQ0xGbEJRVTBzVjBGQlZ5eFhRVUZYTEVkQlFWZ3NRMEZCYWtJN1FVRkRRU3haUVVGTkxGbEJRVmtzVFVGQlRTeFBRVUY0UWp0QlFVTkJMRmxCUVUwc1ZVRkJWU3hMUVVGTExFOUJRVXdzUTBGQllTeEhRVUZpTEVOQlFXaENPMEZCUTBFc1dVRkJUU3haUVVGWkxFdEJRVXNzVDBGQlRDeERRVUZoTEZOQlFXSXNRMEZCYkVJN08wRkJSVUVzV1VGQlNTeFZRVUZWTEZOQlFXUXNSVUZCZVVJN1FVRkJRVHM3UVVGRGRrSXNaVUZCU3l4UlFVRk1MRFJDUVVOSExGTkJSRWdzU1VGRFpTeFpRVUZaTEVOQlJETkNPMEZCUjBFc2JVSkJRVk1zU1VGQlZEdEJRVU5CTEhkQ1FVRmpMRWxCUVdRN1FVRkRSRHRCUVVOR096dEJRVVZFTEZWQlFVa3NWMEZCU2l4RlFVRnBRaXhoUVVGaExFdEJRV0k3UVVGRGJFSTdPMEZCUlVRc1YwRkJUeXhWUVVGUU8wRkJRMFFzUnpzN2EwSkJSVVFzVlN4NVFrRkJZVHRCUVVOWUxGZEJRVThzUzBGQlN5eFBRVUZhTzBGQlEwUXNSenM3YTBKQlJVUXNTU3h0UWtGQlR6dEJRVU5NTEZOQlFVc3NUMEZCVEN4SFFVRmxMRXRCUVVzc1MwRkJUQ3hEUVVGWExGRkJRVmdzUjBGQmMwSXNTMEZCU3l4UFFVRXhRenRCUVVSTExHVkJSVGhDTEVOQlFVTXNTMEZCU3l4TFFVRk1MRU5CUVZjc1JVRkJXaXhGUVVGblFpeExRVUZMTEV0QlFVd3NRMEZCVnl4SlFVRXpRaXhEUVVZNVFqdEJRVVZLTEZOQlFVc3NTMEZCVEN4RFFVRlhMRWxCUmxBN1FVRkZZU3hUUVVGTExFdEJRVXdzUTBGQlZ5eEZRVVo0UWpzN1FVRkhUQ3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenRyUWtGRlJDeFBMSE5DUVVGVk8wRkJRMUlzVTBGQlN5eExRVUZNTEVOQlFWY3NZVUZCV0N4SlFVRTBRaXhEUVVGRExFTkJRVGRDTzBGQlEwRXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdPenM3UVVGMFJVY3NTeXhEUVVOSExGa3NSMEZCWlR0QlFVTndRaXhaUVVGVkxFZEJSRlU3UVVGRmNFSXNkVUpCUm05Q08wRkJSM0JDTEZGQlFVMHNRMEZJWXp0QlFVbHdRaXhOUVVGSkxFTkJTbWRDTzBGQlMzQkNMRkZCUVUwc1EwRk1ZenRCUVUxd1FpeGhRVUZYTEVOQlRsTTdRVUZQY0VJc1VVRkJUU3hEUVZCak8wRkJVWEJDTEdGQlFWY3NRMEZTVXp0QlFWTndRaXhSUVVGTkxFTkJWR003UVVGVmNFSXNZVUZCVnl4RFFWWlRPMEZCVjNCQ0xHbENRVUZsTzBGQldFc3NRenM3YTBKQmQwVlVMRmxCUVdFN1FVRkJRU3h2UTBGQlZDeEpRVUZUTzBGQlFWUXNVVUZCVXp0QlFVRkJPenRCUVVNeFFpeE5RVUZKTEV0QlFVc3NUVUZCVEN4TFFVRm5RaXhEUVVGd1FpeEZRVUYxUWp0QlFVRkJMRkZCUTJJc1MwRkVZU3hIUVVOSUxFbEJSRWM3TzBGQlJYSkNMRmRCUVU4c1NVRkJTU3hMUVVGS0xFTkJRVlVzUzBGQlZpeERRVUZRTzBGQlEwUXNSMEZJUkN4TlFVZFBPMEZCUVVFc1VVRkRSeXhKUVVSSUxFZEJRM1ZETEVsQlJIWkRPMEZCUVVFc1VVRkRVeXhGUVVSVUxFZEJRM1ZETEVsQlJIWkRPMEZCUVVFc1VVRkRZU3hSUVVSaUxFZEJRM1ZETEVsQlJIWkRPMEZCUVVFc1VVRkRkVUlzU1VGRWRrSXNSMEZEZFVNc1NVRkVka003UVVGQlFTeFJRVU0yUWl4UFFVUTNRaXhIUVVOMVF5eEpRVVIyUXpzN1FVRkZUQ3hYUVVGUExFbEJRVWtzUzBGQlNpeFpRVUZaTEZWQlFWb3NSVUZCYTBJc1RVRkJiRUlzUlVGQmMwSXNhMEpCUVhSQ0xFVkJRV2RETEZWQlFXaERMRWxCUVhsRExFOUJRWHBETEVWQlFWQTdRVUZEUkR0QlFVTkdMRU1pTENKbWFXeGxJam9pZEhkbFpXNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2Snp0Y2JtbHRjRzl5ZENCN0lIUnBiV1ZUYVc1alpVeGhjM1JHY21GdFpTQjlJR1p5YjIwZ0p5NHVMMlp5WVcxbGMzbHVZeWM3WEc1cGJYQnZjblFnZXlCamJHRnRjQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OTBjbUZ1YzJadmNtMWxjbk1uTzF4dWFXMXdiM0owSUhzZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVXNJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56SUgwZ1puSnZiU0FuTGk0dmFXNWpMMk5oYkdNbk8xeHVhVzF3YjNKMElIc2daV0Z6WlU5MWRDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5bFlYTnBibWNuTzF4dVhHNWpiMjV6ZENCamJHRnRjRkJ5YjJkeVpYTnpJRDBnWTJ4aGJYQW9NQ3dnTVNrN1hHNWNibU52Ym5OMElFNUZXRlJmVTFSRlVGTWdQU0I3WEc0Z0lHeHZiM0E2SUNoMGQyVmxiaWtnUFQ0Z2RIZGxaVzR1YzNSaGNuUW9LU3hjYmlBZ2VXOTViem9nS0hSM1pXVnVLU0E5UGlCMGQyVmxiaTV5WlhabGNuTmxLQ2t1YzNSaGNuUW9LU3hjYmlBZ1pteHBjRG9nS0hSM1pXVnVLU0E5UGlCMGQyVmxiaTVtYkdsd0tDa3VjM1JoY25Rb0tWeHVmVHRjYmx4dVkyeGhjM01nVkhkbFpXNGdaWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0J6ZEdGMGFXTWdaR1ZtWVhWc2RGQnliM0J6SUQwZ2UxeHVJQ0FnSUdSMWNtRjBhVzl1T2lBek1EQXNYRzRnSUNBZ1pXRnpaVG9nWldGelpVOTFkQ3hjYmlBZ0lDQm1jbTl0T2lBd0xGeHVJQ0FnSUhSdk9pQXhMRnh1SUNBZ0lHWnNhWEE2SURBc1hHNGdJQ0FnWm14cGNFTnZkVzUwT2lBd0xGeHVJQ0FnSUhsdmVXODZJREFzWEc0Z0lDQWdlVzk1YjBOdmRXNTBPaUF3TEZ4dUlDQWdJR3h2YjNBNklEQXNYRzRnSUNBZ2JHOXZjRU52ZFc1ME9pQXdMRnh1SUNBZ0lIQnNZWGxFYVhKbFkzUnBiMjQ2SURGY2JpQWdmVHRjYmx4dUlDQnZibE4wWVhKMEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1pIVnlZWFJwYjI0c0lIQnNZWGxFYVhKbFkzUnBiMjRnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzVjYmlBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNBb2NHeGhlVVJwY21WamRHbHZiaUE5UFQwZ01Ta2dQeUF3SURvZ1pIVnlZWFJwYjI0N1hHNGdJSDFjYmx4dUlDQjFjR1JoZEdVb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCa2RYSmhkR2x2Yml3Z1pXRnpaU3dnWm5KdmJTd2dkRzhzSUhCc1lYbEVhWEpsWTNScGIyNGdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCMGFHbHpMbVZzWVhCelpXUWdLejBnZEdsdFpWTnBibU5sVEdGemRFWnlZVzFsS0NrZ0tpQndiR0Y1UkdseVpXTjBhVzl1TzF4dVhHNGdJQ0FnY21WMGRYSnVJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56S0daeWIyMHNJSFJ2TENCbFlYTmxLR05zWVcxd1VISnZaM0psYzNNb1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9NQ3dnWkhWeVlYUnBiMjRzSUhSb2FYTXVaV3hoY0hObFpDa3BLU2s3WEc0Z0lIMWNibHh1SUNCcGMwRmpkR2x2YmtOdmJYQnNaWFJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWkhWeVlYUnBiMjRzSUhCc1lYbEVhWEpsWTNScGIyNHNJSGx2ZVc4c0lHeHZiM0FzSUdac2FYQWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnYkdWMElHbHpRMjl0Y0d4bGRHVWdQU0FvY0d4aGVVUnBjbVZqZEdsdmJpQTlQVDBnTVNrZ1B5QW9kR2hwY3k1bGJHRndjMlZrSUQ0OUlHUjFjbUYwYVc5dUtTQTZJQ2gwYUdsekxtVnNZWEJ6WldRZ1BEMGdNQ2s3WEc1Y2JpQWdJQ0JwWmlBb2FYTkRiMjF3YkdWMFpTQW1KaUFvZVc5NWJ5QjhmQ0JzYjI5d0lIeDhJR1pzYVhBcEtTQjdYRzRnSUNBZ0lDQnNaWFFnYVhOVGRHVndWR0ZyWlc0Z1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUU1RldGUmZVMVJGVUZNcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2JtVjRkRk4wWlhBZ1BTQk9SVmhVWDFOVVJWQlRXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdOdmRXNTBVSEp2Y0NBOUlHdGxlU0FySUNkRGIzVnVkQ2M3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE4wWlhCTllYZ2dQU0IwYUdsekxtZGxkRkJ5YjNBb2EyVjVLVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjM1JsY0VOdmRXNTBJRDBnZEdocGN5NW5aWFJRY205d0tHTnZkVzUwVUhKdmNDazdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tITjBaWEJOWVhnZ1BpQnpkR1Z3UTI5MWJuUXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbk5sZEZCeWIzQnpLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGdGpiM1Z1ZEZCeWIzQmRPaUJ6ZEdWd1EyOTFiblFnS3lBeFhHNGdJQ0FnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUNBZ2JtVjRkRk4wWlhBb2RHaHBjeWs3WEc0Z0lDQWdJQ0FnSUNBZ2FYTlRkR1Z3VkdGclpXNGdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR2xtSUNocGMxTjBaWEJVWVd0bGJpa2dhWE5EYjIxd2JHVjBaU0E5SUdaaGJITmxPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCcGMwTnZiWEJzWlhSbE8xeHVJQ0I5WEc1Y2JpQWdaMlYwUld4aGNITmxaQ2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1bGJHRndjMlZrTzF4dUlDQjlYRzVjYmlBZ1pteHBjQ2dwSUh0Y2JpQWdJQ0IwYUdsekxtVnNZWEJ6WldRZ1BTQjBhR2x6TG5CeWIzQnpMbVIxY21GMGFXOXVJQzBnZEdocGN5NWxiR0Z3YzJWa08xeHVJQ0FnSUZ0MGFHbHpMbkJ5YjNCekxtWnliMjBzSUhSb2FYTXVjSEp2Y0hNdWRHOWRJRDBnVzNSb2FYTXVjSEp2Y0hNdWRHOHNJSFJvYVhNdWNISnZjSE11Wm5KdmJWMDdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0J5WlhabGNuTmxLQ2tnZTF4dUlDQWdJSFJvYVhNdWNISnZjSE11Y0d4aGVVUnBjbVZqZEdsdmJpQXFQU0F0TVR0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb0xpNHVZWEpuY3lrZ1BUNGdlMXh1SUNCcFppQW9ZWEpuY3k1c1pXNW5kR2dnUFQwOUlERXBJSHRjYmlBZ0lDQmpiMjV6ZENCYklIQnliM0J6SUYwZ1BTQmhjbWR6TzF4dUlDQWdJSEpsZEhWeWJpQnVaWGNnVkhkbFpXNG9jSEp2Y0hNcE8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lHTnZibk4wSUZzZ1puSnZiU3dnZEc4c0lHUjFjbUYwYVc5dUxDQmxZWE5sTENCd2NtOXdjeUJkSUQwZ1lYSm5jenRjYmlBZ0lDQnlaWFIxY200Z2JtVjNJRlIzWldWdUtIc2dabkp2YlN3Z2RHOHNJR1IxY21GMGFXOXVMQ0JsWVhObExDQXVMaTV3Y205d2N5QjlLVHRjYmlBZ2ZWeHVmVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NoYWluID0gcmVxdWlyZSgnLi9jaGFpbicpO1xuXG52YXIgX2NoYWluMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoYWluKTtcblxudmFyIF9wYXJhbGxlbCA9IHJlcXVpcmUoJy4vcGFyYWxsZWwnKTtcblxudmFyIF9wYXJhbGxlbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJhbGxlbCk7XG5cbnZhciBfZGVsYXkgPSByZXF1aXJlKCcuL2RlbGF5Jyk7XG5cbnZhciBfZGVsYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVsYXkpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBwYXJhbGxlbCBBY3Rpb24gY29tcG9zZWQgb2YgY2hhaW5lZFxuICogZGVsYXkgYW5kIGFjdGlvbnMuIEludGVydmFsIGNhbiBiZSBlaXRoZXIgYSBudW1iZXJcbiAqIHRvIG11bHRpcGx5IGJ5IGBpYCBvciBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBwcm92aWRlZCBgaWBcbiAqXG4gKiBTdHJhaWdodCBjcmliYmVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9ibG9iLzI0YzcyZjUxM2U0OGYwYmRjNDA4MjBiNDMyNjIzMjhmZTJjMzAxZDQvTGlicmFyaWVzL0FuaW1hdGVkL3NyYy9BbmltYXRlZEltcGxlbWVudGF0aW9uLmpzI0wyMDMxXG4gKiBeIFRoaXMgZnVuY3Rpb24gc29sZCBhIHByZXZpb3VzbHktY29uZmxpY3RlZCBtZSBvbiB0aGUgbWVyaXQgb2YgbW92aW5nIGZyb21cbiAqIGpRdWVyeS1zdHlsZSBtdWx0aS1wcm9wZXJ0eSBhbmltYXRpb25zIHRvIHNpbmdsZS1wcm9wZXJ0eS5cbiAqIEBwYXJhbSAge2FycmF5fSBhY3Rpb25zXG4gKiBAcGFyYW0gIHtmdW5jdGlvbiB8IG51bWJlcn0gaW50ZXJ2YWxcbiAqIEByZXR1cm4ge0FjdGlvbn1cbiAqL1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgaW50ZXJ2YWwsIG9uQ29tcGxldGUpIHtcbiAgdmFyIGludGVydmFsSXNGdW5jdGlvbiA9ICgwLCBfdXRpbHMuaXNGdW5jKShpbnRlcnZhbCk7XG5cbiAgcmV0dXJuICgwLCBfcGFyYWxsZWwyLmRlZmF1bHQpKGFjdGlvbnMubWFwKGZ1bmN0aW9uIChhY3Rpb24sIGkpIHtcbiAgICB2YXIgdGltZVRvRGVsYXkgPSBpbnRlcnZhbElzRnVuY3Rpb24gPyBpbnRlcnZhbChpKSA6IGkgKiBpbnRlcnZhbDtcbiAgICByZXR1cm4gKDAsIF9jaGFpbjIuZGVmYXVsdCkoWygwLCBfZGVsYXkyLmRlZmF1bHQpKHRpbWVUb0RlbGF5KSwgYWN0aW9uXSk7XG4gIH0pLCB7IG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM04wWVdkblpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3T3pzN096czdPenM3T3p0clFrRmpaU3hWUVVGRExFOUJRVVFzUlVGQlZTeFJRVUZXTEVWQlFXOUNMRlZCUVhCQ0xFVkJRVzFETzBGQlEyaEVMRTFCUVUwc2NVSkJRWEZDTEcxQ1FVRlBMRkZCUVZBc1EwRkJNMEk3TzBGQlJVRXNVMEZCVHl4M1FrRkJVeXhSUVVGUkxFZEJRVklzUTBGQldTeFZRVUZETEUxQlFVUXNSVUZCVXl4RFFVRlVMRVZCUVdVN1FVRkRla01zVVVGQlRTeGpRVUZsTEd0Q1FVRkVMRWRCUVhWQ0xGTkJRVk1zUTBGQlZDeERRVUYyUWl4SFFVRnhReXhKUVVGSkxGRkJRVGRFTzBGQlEwRXNWMEZCVHl4eFFrRkJUU3hEUVVOWUxIRkNRVUZOTEZkQlFVNHNRMEZFVnl4RlFVVllMRTFCUmxjc1EwRkJUaXhEUVVGUU8wRkJTVVFzUjBGT1pTeERRVUZVTEVWQlRVZ3NSVUZCUlN4elFrRkJSaXhGUVU1SExFTkJRVkE3UVVGUFJDeERJaXdpWm1sc1pTSTZJbk4wWVdkblpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1kyaGhhVzRnWm5KdmJTQW5MaTlqYUdGcGJpYzdYRzVwYlhCdmNuUWdjR0Z5WVd4c1pXd2dabkp2YlNBbkxpOXdZWEpoYkd4bGJDYzdYRzVwYlhCdmNuUWdaR1ZzWVhrZ1puSnZiU0FuTGk5a1pXeGhlU2M3WEc1cGJYQnZjblFnZXlCcGMwWjFibU1nZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpYTWdZU0J1WlhjZ2NHRnlZV3hzWld3Z1FXTjBhVzl1SUdOdmJYQnZjMlZrSUc5bUlHTm9ZV2x1WldSY2JpQXFJR1JsYkdGNUlHRnVaQ0JoWTNScGIyNXpMaUJKYm5SbGNuWmhiQ0JqWVc0Z1ltVWdaV2wwYUdWeUlHRWdiblZ0WW1WeVhHNGdLaUIwYnlCdGRXeDBhWEJzZVNCaWVTQmdhV0FnYjNJZ1lTQm1kVzVqZEdsdmJpQjBhR0YwSUhkcGJHd2dZbVVnY0hKdmRtbGtaV1FnWUdsZ1hHNGdLbHh1SUNvZ1UzUnlZV2xuYUhRZ1kzSnBZbUpsWkNCbWNtOXRJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzltWVdObFltOXZheTl5WldGamRDMXVZWFJwZG1VdllteHZZaTh5TkdNM01tWTFNVE5sTkRobU1HSmtZelF3T0RJd1lqUXpNall5TXpJNFptVXlZek13TVdRMEwweHBZbkpoY21sbGN5OUJibWx0WVhSbFpDOXpjbU12UVc1cGJXRjBaV1JKYlhCc1pXMWxiblJoZEdsdmJpNXFjeU5NTWpBek1WeHVJQ29nWGlCVWFHbHpJR1oxYm1OMGFXOXVJSE52YkdRZ1lTQndjbVYyYVc5MWMyeDVMV052Ym1ac2FXTjBaV1FnYldVZ2IyNGdkR2hsSUcxbGNtbDBJRzltSUcxdmRtbHVaeUJtY205dFhHNGdLaUJxVVhWbGNua3RjM1I1YkdVZ2JYVnNkR2t0Y0hKdmNHVnlkSGtnWVc1cGJXRjBhVzl1Y3lCMGJ5QnphVzVuYkdVdGNISnZjR1Z5ZEhrdVhHNGdLaUJBY0dGeVlXMGdJSHRoY25KaGVYMGdZV04wYVc5dWMxeHVJQ29nUUhCaGNtRnRJQ0I3Wm5WdVkzUnBiMjRnZkNCdWRXMWlaWEo5SUdsdWRHVnlkbUZzWEc0Z0tpQkFjbVYwZFhKdUlIdEJZM1JwYjI1OVhHNGdLaTljYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hoWTNScGIyNXpMQ0JwYm5SbGNuWmhiQ3dnYjI1RGIyMXdiR1YwWlNrZ1BUNGdlMXh1SUNCamIyNXpkQ0JwYm5SbGNuWmhiRWx6Um5WdVkzUnBiMjRnUFNCcGMwWjFibU1vYVc1MFpYSjJZV3dwTzF4dVhHNGdJSEpsZEhWeWJpQndZWEpoYkd4bGJDaGhZM1JwYjI1ekxtMWhjQ2dvWVdOMGFXOXVMQ0JwS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnZEdsdFpWUnZSR1ZzWVhrZ1BTQW9hVzUwWlhKMllXeEpjMFoxYm1OMGFXOXVLU0EvSUdsdWRHVnlkbUZzS0drcElEb2dhU0FxSUdsdWRHVnlkbUZzTzF4dUlDQWdJSEpsZEhWeWJpQmphR0ZwYmloYlhHNGdJQ0FnSUNCa1pXeGhlU2gwYVcxbFZHOUVaV3hoZVNrc1hHNGdJQ0FnSUNCaFkzUnBiMjVjYmlBZ0lDQmRLVHRjYmlBZ2ZTa3NJSHNnYjI1RGIyMXdiR1YwWlNCOUtUdGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvc3RhZ2dlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVmFsdWUgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVmFsdWUsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFZhbHVlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWYWx1ZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFZhbHVlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQodikge1xuICAgIHRoaXMudG9VcGRhdGUgPSB2O1xuICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgfTtcblxuICBWYWx1ZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnRvVXBkYXRlO1xuICB9O1xuXG4gIHJldHVybiBWYWx1ZTtcbn0oXzIuZGVmYXVsdCk7XG5cblZhbHVlLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGN1cnJlbnQsIG9uVXBkYXRlKSB7XG4gIHJldHVybiBuZXcgVmFsdWUoeyBjdXJyZW50OiBjdXJyZW50LCBvblVwZGF0ZTogb25VcGRhdGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1poYkhWbExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdPenRCUVVOQk96czdPenM3T3pzN08wbEJSVTBzU3pzN096czdPenM3TzJ0Q1FVdEtMRWNzWjBKQlFVa3NReXhGUVVGSE8wRkJRMHdzVTBGQlN5eFJRVUZNTEVkQlFXZENMRU5CUVdoQ08wRkJRMEVzYTBOQlFXTXNTMEZCU3l4bFFVRnVRanRCUVVORUxFYzdPMnRDUVVWRUxFMHNjVUpCUVZNN1FVRkRVQ3hYUVVGUExFdEJRVXNzVVVGQldqdEJRVU5FTEVjN096czdPMEZCV2tjc1N5eERRVU5ITEZrc1IwRkJaVHRCUVVOd1FpeFhRVUZUTzBGQlJGY3NRenM3YTBKQlkxUXNWVUZCUXl4UFFVRkVMRVZCUVZVc1VVRkJWanRCUVVGQkxGTkJRWFZDTEVsQlFVa3NTMEZCU2l4RFFVRlZMRVZCUVVVc1owSkJRVVlzUlVGQlZ5eHJRa0ZCV0N4RlFVRldMRU5CUVhaQ08wRkJRVUVzUXlJc0ltWnBiR1VpT2lKMllXeDFaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk4bk8xeHVhVzF3YjNKMElIc2diMjVHY21GdFpWVndaR0YwWlNCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVjYm1Oc1lYTnpJRlpoYkhWbElHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0J3WVhOemFYWmxPaUIwY25WbFhHNGdJSDA3WEc1Y2JpQWdjMlYwS0hZcElIdGNiaUFnSUNCMGFHbHpMblJ2VlhCa1lYUmxJRDBnZGp0Y2JpQWdJQ0J2YmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11YzJOb1pXUjFiR1ZrVlhCa1lYUmxLVHRjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1MGIxVndaR0YwWlR0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1kzVnljbVZ1ZEN3Z2IyNVZjR1JoZEdVcElEMCtJRzVsZHlCV1lXeDFaU2g3SUdOMWNuSmxiblFzSUc5dVZYQmtZWFJsSUgwcE8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3ZhbHVlLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX29uTmV4dEZyYW1lID0gcmVxdWlyZSgnLi9vbi1uZXh0LWZyYW1lJyk7XG5cbnZhciBfb25OZXh0RnJhbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb25OZXh0RnJhbWUpO1xuXG52YXIgX2NyZWF0ZVJlbmRlclN0ZXAgPSByZXF1aXJlKCcuL2NyZWF0ZS1yZW5kZXItc3RlcCcpO1xuXG52YXIgX2NyZWF0ZVJlbmRlclN0ZXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlUmVuZGVyU3RlcCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcblxuLyoqXG4gKiBNYXhpbXVtIHBlcm1pdHRlZCBtcyBzaW5jZSBsYXN0IGZyYW1lXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgTUFYX0VMQVBTRUQgPSAyMDtcblxuLyoqXG4gKiBDdXJyZW50IGZyYW1lc3RhbXBcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBjdXJyZW50RnJhbWVzdGFtcCA9ICgwLCBfdXRpbHMuY3VycmVudFRpbWUpKCk7XG5cbnZhciBlbGFwc2VkID0gMDtcblxuLyoqXG4gKiBGYWN0b3IgdG8gbXVsdGlwbHkgYGVsYXBzZWRgIGJ5IC0gXG4gKiAwLjUgd291bGQgYmUgc2xvdyBtb3Rpb24sIDIgd291bGQgYmUgZmFzdFxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIGRpbGF0aW9uID0gMTtcblxuZnVuY3Rpb24gc3RhcnRSZW5kZXJMb29wKCkge1xuICBpZiAoIXdpbGxSZW5kZXJOZXh0RnJhbWUpIHtcbiAgICB3aWxsUmVuZGVyTmV4dEZyYW1lID0gdHJ1ZTtcbiAgICAoMCwgX29uTmV4dEZyYW1lMi5kZWZhdWx0KShwcm9jZXNzRnJhbWUpO1xuICB9XG59XG5cbnZhciBmcmFtZVN0YXJ0ID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lVXBkYXRlID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lUmVuZGVyID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lRW5kID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xuXG5mdW5jdGlvbiBwcm9jZXNzRnJhbWUoZnJhbWVzdGFtcCkge1xuICB3aWxsUmVuZGVyTmV4dEZyYW1lID0gZmFsc2U7XG4gIGVsYXBzZWQgPSBNYXRoLm1heChNYXRoLm1pbihmcmFtZXN0YW1wIC0gY3VycmVudEZyYW1lc3RhbXAsIE1BWF9FTEFQU0VEKSwgMSkgKiBkaWxhdGlvbjtcbiAgY3VycmVudEZyYW1lc3RhbXAgPSBmcmFtZXN0YW1wO1xuXG4gIGZyYW1lU3RhcnQucHJvY2VzcygpO1xuICBmcmFtZVVwZGF0ZS5wcm9jZXNzKCk7XG4gIGZyYW1lUmVuZGVyLnByb2Nlc3MoKTtcbiAgZnJhbWVFbmQucHJvY2VzcygpO1xufVxuXG52YXIgb25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LnNjaGVkdWxlO1xudmFyIG9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLm9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5zY2hlZHVsZTtcbnZhciBvbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuc2NoZWR1bGU7XG52YXIgb25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGZyYW1lRW5kLnNjaGVkdWxlO1xudmFyIGNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBmcmFtZUVuZC5jYW5jZWw7XG5cbnZhciB0aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGVsYXBzZWQ7XG59O1xudmFyIGN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY3VycmVudEZyYW1lc3RhbXA7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRlFTeEpRVUZKTEhOQ1FVRnpRaXhMUVVFeFFqczdPenM3TzBGQlRVRXNTVUZCVFN4alFVRmpMRVZCUVhCQ096czdPenM3UVVGTlFTeEpRVUZKTEc5Q1FVRnZRaXg1UWtGQmVFSTdPMEZCUlVFc1NVRkJTU3hWUVVGVkxFTkJRV1E3T3pzN096czdRVUZQUVN4SlFVRkpMRmRCUVZjc1EwRkJaanM3UVVGRlFTeFRRVUZUTEdWQlFWUXNSMEZCTWtJN1FVRkRla0lzVFVGQlNTeERRVUZETEcxQ1FVRk1MRVZCUVRCQ08wRkJRM2hDTERCQ1FVRnpRaXhKUVVGMFFqdEJRVU5CTEN0Q1FVRlpMRmxCUVZvN1FVRkRSRHRCUVVOR096dEJRVVZFTEVsQlFVMHNZVUZCWVN4blEwRkJhVUlzWlVGQmFrSXNRMEZCYmtJN1FVRkRRU3hKUVVGTkxHTkJRV01zWjBOQlFXbENMR1ZCUVdwQ0xFTkJRWEJDTzBGQlEwRXNTVUZCVFN4alFVRmpMR2REUVVGcFFpeGxRVUZxUWl4RFFVRndRanRCUVVOQkxFbEJRVTBzVjBGQlZ5eG5RMEZCYVVJc1pVRkJha0lzUTBGQmFrSTdPMEZCUlVFc1UwRkJVeXhaUVVGVUxFTkJRWE5DTEZWQlFYUkNMRVZCUVd0RE8wRkJRMmhETEhkQ1FVRnpRaXhMUVVGMFFqdEJRVU5CTEZsQlFWVXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJTeXhIUVVGTUxFTkJRVk1zWVVGQllTeHBRa0ZCZEVJc1JVRkJlVU1zVjBGQmVrTXNRMEZCVkN4RlFVRm5SU3hEUVVGb1JTeEpRVUZ4UlN4UlFVRXZSVHRCUVVOQkxITkNRVUZ2UWl4VlFVRndRanM3UVVGRlFTeGhRVUZYTEU5QlFWZzdRVUZEUVN4alFVRlpMRTlCUVZvN1FVRkRRU3hqUVVGWkxFOUJRVm83UVVGRFFTeFhRVUZUTEU5QlFWUTdRVUZEUkRzN1FVRkZUU3hKUVVGTkxITkRRVUZsTEZkQlFWY3NVVUZCYUVNN1FVRkRRU3hKUVVGTkxIZERRVUZuUWl4WlFVRlpMRkZCUVd4RE8wRkJRMEVzU1VGQlRTeDNRMEZCWjBJc1dVRkJXU3hSUVVGc1F6dEJRVU5CTEVsQlFVMHNhME5CUVdFc1UwRkJVeXhSUVVFMVFqdEJRVU5CTEVsQlFVMHNhMFJCUVhGQ0xGZEJRVmNzVFVGQmRFTTdRVUZEUVN4SlFVRk5MRzlFUVVGelFpeFpRVUZaTEUxQlFYaERPMEZCUTBFc1NVRkJUU3h2UkVGQmMwSXNXVUZCV1N4TlFVRjRRenRCUVVOQkxFbEJRVTBzT0VOQlFXMUNMRk5CUVZNc1RVRkJiRU03TzBGQlJVRXNTVUZCVFN4clJFRkJjVUk3UVVGQlFTeFRRVUZOTEU5QlFVNDdRVUZCUVN4RFFVRXpRanRCUVVOQkxFbEJRVTBzZDBSQlFYZENPMEZCUVVFc1UwRkJUU3hwUWtGQlRqdEJRVUZCTEVOQlFUbENJaXdpWm1sc1pTSTZJbWx1WkdWNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUc5dVRtVjRkRVp5WVcxbElHWnliMjBnSnk0dmIyNHRibVY0ZEMxbWNtRnRaU2M3WEc1cGJYQnZjblFnWTNKbFlYUmxVbVZ1WkdWeVUzUmxjQ0JtY205dElDY3VMMk55WldGMFpTMXlaVzVrWlhJdGMzUmxjQ2M3WEc1cGJYQnZjblFnZXlCamRYSnlaVzUwVkdsdFpTQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JteGxkQ0IzYVd4c1VtVnVaR1Z5VG1WNGRFWnlZVzFsSUQwZ1ptRnNjMlU3WEc1Y2JpOHFLbHh1SUNvZ1RXRjRhVzExYlNCd1pYSnRhWFIwWldRZ2JYTWdjMmx1WTJVZ2JHRnpkQ0JtY21GdFpWeHVJQ29nUUhSNWNHVWdlMDUxYldKbGNuMWNiaUFxTDF4dVkyOXVjM1FnVFVGWVgwVk1RVkJUUlVRZ1BTQXlNRHRjYmx4dUx5b3FYRzRnS2lCRGRYSnlaVzUwSUdaeVlXMWxjM1JoYlhCY2JpQXFJRUIwZVhCbElIdE9kVzFpWlhKOVhHNGdLaTljYm14bGRDQmpkWEp5Wlc1MFJuSmhiV1Z6ZEdGdGNDQTlJR04xY25KbGJuUlVhVzFsS0NrN1hHNWNibXhsZENCbGJHRndjMlZrSUQwZ01EdGNibHh1THlvcVhHNGdLaUJHWVdOMGIzSWdkRzhnYlhWc2RHbHdiSGtnWUdWc1lYQnpaV1JnSUdKNUlDMGdYRzRnS2lBd0xqVWdkMjkxYkdRZ1ltVWdjMnh2ZHlCdGIzUnBiMjRzSURJZ2QyOTFiR1FnWW1VZ1ptRnpkRnh1SUNvZ1FIUjVjR1VnZTA1MWJXSmxjbjFjYmlBcUwxeHViR1YwSUdScGJHRjBhVzl1SUQwZ01UdGNibHh1Wm5WdVkzUnBiMjRnYzNSaGNuUlNaVzVrWlhKTWIyOXdLQ2tnZTF4dUlDQnBaaUFvSVhkcGJHeFNaVzVrWlhKT1pYaDBSbkpoYldVcElIdGNiaUFnSUNCM2FXeHNVbVZ1WkdWeVRtVjRkRVp5WVcxbElEMGdkSEoxWlR0Y2JpQWdJQ0J2Yms1bGVIUkdjbUZ0WlNod2NtOWpaWE56Um5KaGJXVXBPMXh1SUNCOVhHNTlYRzVjYm1OdmJuTjBJR1p5WVcxbFUzUmhjblFnUFNCamNtVmhkR1ZTWlc1a1pYSlRkR1Z3S0hOMFlYSjBVbVZ1WkdWeVRHOXZjQ2s3WEc1amIyNXpkQ0JtY21GdFpWVndaR0YwWlNBOUlHTnlaV0YwWlZKbGJtUmxjbE4wWlhBb2MzUmhjblJTWlc1a1pYSk1iMjl3S1R0Y2JtTnZibk4wSUdaeVlXMWxVbVZ1WkdWeUlEMGdZM0psWVhSbFVtVnVaR1Z5VTNSbGNDaHpkR0Z5ZEZKbGJtUmxja3h2YjNBcE8xeHVZMjl1YzNRZ1puSmhiV1ZGYm1RZ1BTQmpjbVZoZEdWU1pXNWtaWEpUZEdWd0tITjBZWEowVW1WdVpHVnlURzl2Y0NrN1hHNWNibVoxYm1OMGFXOXVJSEJ5YjJObGMzTkdjbUZ0WlNobWNtRnRaWE4wWVcxd0tTQjdYRzRnSUhkcGJHeFNaVzVrWlhKT1pYaDBSbkpoYldVZ1BTQm1ZV3h6WlR0Y2JpQWdaV3hoY0hObFpDQTlJRTFoZEdndWJXRjRLRTFoZEdndWJXbHVLR1p5WVcxbGMzUmhiWEFnTFNCamRYSnlaVzUwUm5KaGJXVnpkR0Z0Y0N3Z1RVRllYMFZNUVZCVFJVUXBMQ0F4S1NBcUlHUnBiR0YwYVc5dU8xeHVJQ0JqZFhKeVpXNTBSbkpoYldWemRHRnRjQ0E5SUdaeVlXMWxjM1JoYlhBN1hHNWNiaUFnWm5KaGJXVlRkR0Z5ZEM1d2NtOWpaWE56S0NrN1hHNGdJR1p5WVcxbFZYQmtZWFJsTG5CeWIyTmxjM01vS1R0Y2JpQWdabkpoYldWU1pXNWtaWEl1Y0hKdlkyVnpjeWdwTzF4dUlDQm1jbUZ0WlVWdVpDNXdjbTlqWlhOektDazdYRzU5WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J2YmtaeVlXMWxVM1JoY25RZ1BTQm1jbUZ0WlZOMFlYSjBMbk5qYUdWa2RXeGxPMXh1Wlhod2IzSjBJR052Ym5OMElHOXVSbkpoYldWVmNHUmhkR1VnUFNCbWNtRnRaVlZ3WkdGMFpTNXpZMmhsWkhWc1pUdGNibVY0Y0c5eWRDQmpiMjV6ZENCdmJrWnlZVzFsVW1WdVpHVnlJRDBnWm5KaGJXVlNaVzVrWlhJdWMyTm9aV1IxYkdVN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnYjI1R2NtRnRaVVZ1WkNBOUlHWnlZVzFsUlc1a0xuTmphR1ZrZFd4bE8xeHVaWGh3YjNKMElHTnZibk4wSUdOaGJtTmxiRTl1Um5KaGJXVlRkR0Z5ZENBOUlHWnlZVzFsVTNSaGNuUXVZMkZ1WTJWc08xeHVaWGh3YjNKMElHTnZibk4wSUdOaGJtTmxiRTl1Um5KaGJXVlZjR1JoZEdVZ1BTQm1jbUZ0WlZWd1pHRjBaUzVqWVc1alpXdzdYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyRnVZMlZzVDI1R2NtRnRaVkpsYm1SbGNpQTlJR1p5WVcxbFVtVnVaR1Z5TG1OaGJtTmxiRHRjYm1WNGNHOXlkQ0JqYjI1emRDQmpZVzVqWld4UGJrWnlZVzFsUlc1a0lEMGdabkpoYldWRmJtUXVZMkZ1WTJWc08xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbElEMGdLQ2tnUFQ0Z1pXeGhjSE5sWkR0Y2JtVjRjRzl5ZENCamIyNXpkQ0JqZFhKeVpXNTBSbkpoYldWVWFXMWxjM1JoYlhBZ1BTQW9LU0E5UGlCamRYSnlaVzUwUm5KaGJXVnpkR0Z0Y0R0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mcmFtZXN5bmMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBY3Rpb24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uKTtcblxuICAgIHRoaXMuc2NoZWR1bGVkVXBkYXRlID0gdGhpcy5zY2hlZHVsZWRVcGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMpO1xuXG4gICAgdGhpcy5zZXRQcm9wcyhwcm9wcyk7XG5cbiAgICB0aGlzLmN1cnJlbnQgPSBwcm9wcy5jdXJyZW50IHx8IHByb3BzLmZyb20gfHwgMDtcbiAgfVxuXG4gIEFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgb25TdGFydCA9IF9wcm9wcy5vblN0YXJ0O1xuICAgIHZhciBfb25TdGFydCA9IF9wcm9wcy5fb25TdGFydDtcbiAgICB2YXIgcGFzc2l2ZSA9IF9wcm9wcy5wYXNzaXZlO1xuXG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RhcnQpIHRoaXMub25TdGFydCgpO1xuICAgIGlmIChvblN0YXJ0KSBvblN0YXJ0KHRoaXMpO1xuICAgIGlmIChfb25TdGFydCkgX29uU3RhcnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgb25TdG9wID0gX3Byb3BzMi5vblN0b3A7XG4gICAgdmFyIF9vblN0b3AgPSBfcHJvcHMyLl9vblN0b3A7XG4gICAgdmFyIHBhc3NpdmUgPSBfcHJvcHMyLnBhc3NpdmU7XG5cblxuICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgKDAsIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVVwZGF0ZSkodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uU3RvcCkgdGhpcy5vblN0b3AoKTtcbiAgICBpZiAob25TdG9wKSBvblN0b3AodGhpcyk7XG4gICAgaWYgKF9vblN0b3ApIF9vblN0b3AodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvbkNvbXBsZXRlID0gX3Byb3BzMy5vbkNvbXBsZXRlO1xuICAgIHZhciBfb25Db21wbGV0ZSA9IF9wcm9wczMuX29uQ29tcGxldGU7XG5cblxuICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgaWYgKHRoaXMub25Db21wbGV0ZSkgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUodGhpcyk7XG4gICAgaWYgKF9vbkNvbXBsZXRlKSBfb25Db21wbGV0ZSh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2NoZWR1bGVkVXBkYXRlID0gZnVuY3Rpb24gc2NoZWR1bGVkVXBkYXRlKCkge1xuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCk7XG4gICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50O1xuXG4gICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvblVwZGF0ZSA9IF9wcm9wczQub25VcGRhdGU7XG4gICAgdmFyIHBhc3NpdmUgPSBfcHJvcHM0LnBhc3NpdmU7XG5cblxuICAgIGlmICh0aGlzLnVwZGF0ZSkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy51cGRhdGUodGhpcy5jdXJyZW50KTtcbiAgICB9XG5cbiAgICBpZiAob25VcGRhdGUpIG9uVXBkYXRlKHRoaXMuY3VycmVudCwgdGhpcyk7XG4gICAgdGhpcy5maXJlTGlzdGVuZXJzKCk7XG5cbiAgICBpZiAoIXBhc3NpdmUgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQWN0aW9uQ29tcGxldGUgJiYgdGhpcy5pc0FjdGlvbkNvbXBsZXRlKCkpIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24gc2V0UHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHByb3BzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHYpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB2O1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZ2V0UHJvcCA9IGZ1bmN0aW9uIGdldFByb3Aoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHNba2V5XTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldFZlbG9jaXR5ID0gZnVuY3Rpb24gZ2V0VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5zcGVlZFBlclNlY29uZCkodGhpcy5jdXJyZW50IC0gdGhpcy5wcmV2LCB0aGlzLmxhc3RVcGRhdGVkKTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNBY3RpdmU7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycyB8fCBbXTtcbiAgICB0aGlzLm51bUxpc3RlbmVycyA9IHRoaXMubnVtTGlzdGVuZXJzIHx8IDA7XG4gICAgaWYgKHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpID09PSAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycysrO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB2YXIgbGlzdGVuZXJJbmRleCA9IHRoaXMubGlzdGVuZXJzID8gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgOiAtMTtcbiAgICBpZiAobGlzdGVuZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzLS07XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UobGlzdGVuZXJJbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuZmlyZUxpc3RlbmVycyA9IGZ1bmN0aW9uIGZpcmVMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmdldCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1MaXN0ZW5lcnM7IGkrKykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbaV0oY3VycmVudCwgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBBY3Rpb247XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3p0QlFVTkJPenM3TzBsQlJVMHNUVHRCUVVOS0xHdENRVUZaTEV0QlFWb3NSVUZCYlVJN1FVRkJRVHM3UVVGRGFrSXNVMEZCU3l4bFFVRk1MRWRCUVhWQ0xFdEJRVXNzWlVGQlRDeERRVUZ4UWl4SlFVRnlRaXhEUVVFd1FpeEpRVUV4UWl4RFFVRjJRanM3UVVGRlFTeFRRVUZMTEV0QlFVd3NaMEpCUTBzc1MwRkJTeXhYUVVGTUxFTkJRV2xDTEZsQlJIUkNPenRCUVVsQkxGTkJRVXNzVVVGQlRDeERRVUZqTEV0QlFXUTdPMEZCUlVFc1UwRkJTeXhQUVVGTUxFZEJRV1VzVFVGQlRTeFBRVUZPTEVsQlFXbENMRTFCUVUwc1NVRkJka0lzU1VGQkswSXNRMEZCT1VNN1FVRkRSRHM3YlVKQlJVUXNTeXh2UWtGQlVUdEJRVUZCTEdsQ1FVTnBReXhMUVVGTExFdEJSSFJETzBGQlFVRXNVVUZEUlN4UFFVUkdMRlZCUTBVc1QwRkVSanRCUVVGQkxGRkJRMWNzVVVGRVdDeFZRVU5YTEZGQlJGZzdRVUZCUVN4UlFVTnhRaXhQUVVSeVFpeFZRVU54UWl4UFFVUnlRanM3TzBGQlIwNHNVVUZCU1N4RFFVRkRMRTlCUVV3c1JVRkJZenRCUVVOYUxGZEJRVXNzVVVGQlRDeEhRVUZuUWl4SlFVRm9RanRCUVVOQkxHOURRVUZqTEV0QlFVc3NaVUZCYmtJN1FVRkRSRHM3UVVGRlJDeFJRVUZKTEV0QlFVc3NUMEZCVkN4RlFVRnJRaXhMUVVGTExFOUJRVXc3UVVGRGJFSXNVVUZCU1N4UFFVRktMRVZCUVdFc1VVRkJVU3hKUVVGU08wRkJRMklzVVVGQlNTeFJRVUZLTEVWQlFXTXNVMEZCVXl4SlFVRlVPenRCUVVWa0xGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08yMUNRVVZFTEVrc2JVSkJRVTg3UVVGQlFTeHJRa0ZEWjBNc1MwRkJTeXhMUVVSeVF6dEJRVUZCTEZGQlEwY3NUVUZFU0N4WFFVTkhMRTFCUkVnN1FVRkJRU3hSUVVOWExFOUJSRmdzVjBGRFZ5eFBRVVJZTzBGQlFVRXNVVUZEYjBJc1QwRkVjRUlzVjBGRGIwSXNUMEZFY0VJN096dEJRVWRNTEZGQlFVa3NRMEZCUXl4UFFVRk1MRVZCUVdNN1FVRkRXaXhYUVVGTExGRkJRVXdzUjBGQlowSXNTMEZCYUVJN1FVRkRRU3d3UTBGQmIwSXNTMEZCU3l4bFFVRjZRanRCUVVORU96dEJRVVZFTEZGQlFVa3NTMEZCU3l4TlFVRlVMRVZCUVdsQ0xFdEJRVXNzVFVGQlREdEJRVU5xUWl4UlFVRkpMRTFCUVVvc1JVRkJXU3hQUVVGUExFbEJRVkE3UVVGRFdpeFJRVUZKTEU5QlFVb3NSVUZCWVN4UlFVRlJMRWxCUVZJN08wRkJSV0lzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YlVKQlJVUXNVU3gxUWtGQlZ6dEJRVUZCTEd0Q1FVTXlRaXhMUVVGTExFdEJSR2hETzBGQlFVRXNVVUZEUkN4VlFVUkRMRmRCUTBRc1ZVRkVRenRCUVVGQkxGRkJRMWNzVjBGRVdDeFhRVU5YTEZkQlJGZzdPenRCUVVkVUxGTkJRVXNzU1VGQlREczdRVUZGUVN4UlFVRkpMRXRCUVVzc1ZVRkJWQ3hGUVVGeFFpeExRVUZMTEZWQlFVdzdRVUZEY2tJc1VVRkJTU3hWUVVGS0xFVkJRV2RDTEZkQlFWY3NTVUZCV0R0QlFVTm9RaXhSUVVGSkxGZEJRVW9zUlVGQmFVSXNXVUZCV1N4SlFVRmFPenRCUVVWcVFpeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkN4bExEaENRVUZyUWp0QlFVTm9RaXhUUVVGTExGZEJRVXdzUjBGQmJVSXNiME5CUVc1Q08wRkJRMEVzVTBGQlN5eEpRVUZNTEVkQlFWa3NTMEZCU3l4UFFVRnFRanM3UVVGR1owSXNhMEpCU1dNc1MwRkJTeXhMUVVwdVFqdEJRVUZCTEZGQlNWSXNVVUZLVVN4WFFVbFNMRkZCU2xFN1FVRkJRU3hSUVVsRkxFOUJTa1lzVjBGSlJTeFBRVXBHT3pzN1FVRk5hRUlzVVVGQlNTeExRVUZMTEUxQlFWUXNSVUZCYVVJN1FVRkRaaXhYUVVGTExFOUJRVXdzUjBGQlpTeExRVUZMTEUxQlFVd3NRMEZCV1N4TFFVRkxMRTlCUVdwQ0xFTkJRV1k3UVVGRFJEczdRVUZGUkN4UlFVRkpMRkZCUVVvc1JVRkJZeXhUUVVGVExFdEJRVXNzVDBGQlpDeEZRVUYxUWl4SlFVRjJRanRCUVVOa0xGTkJRVXNzWVVGQlREczdRVUZGUVN4UlFVRkpMRU5CUVVNc1QwRkJSQ3hKUVVGWkxFdEJRVXNzVVVGQmNrSXNSVUZCSzBJN1FVRkROMElzYjBOQlFXTXNTMEZCU3l4bFFVRnVRanRCUVVORU96dEJRVVZFTEZGQlFVa3NTMEZCU3l4blFrRkJUQ3hKUVVGNVFpeExRVUZMTEdkQ1FVRk1MRVZCUVRkQ0xFVkJRWE5FTzBGQlEzQkVMRmRCUVVzc1VVRkJURHRCUVVORU96dEJRVVZFTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzIxQ1FVVkVMRkVzY1VKQlFWTXNTeXhGUVVGUE8wRkJRMlFzVTBGQlN5eExRVUZNTEdkQ1FVTkxMRXRCUVVzc1MwRkVWaXhGUVVWTExFdEJSa3c3UVVGSlFTeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkN4SExHdENRVUZOTzBGQlEwb3NWMEZCVHl4TFFVRkxMRTlCUVZvN1FVRkRSQ3hIT3p0dFFrRkZSQ3hITEdkQ1FVRkpMRU1zUlVGQlJ6dEJRVU5NTEZOQlFVc3NUMEZCVEN4SFFVRmxMRU5CUVdZN1FVRkRRU3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJDeFBMRzlDUVVGUkxFY3NSVUZCU3p0QlFVTllMRmRCUVU4c1MwRkJTeXhMUVVGTUxFTkJRVmNzUjBGQldDeERRVUZRTzBGQlEwUXNSenM3YlVKQlJVUXNWeXd3UWtGQll6dEJRVU5hTEZkQlFVOHNNRUpCUVdVc1MwRkJTeXhQUVVGTUxFZEJRV1VzUzBGQlN5eEpRVUZ1UXl4RlFVRjVReXhMUVVGTExGZEJRVGxETEVOQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkN4UkxIVkNRVUZYTzBGQlExUXNWMEZCVHl4TFFVRkxMRkZCUVZvN1FVRkRSQ3hIT3p0dFFrRkZSQ3hYTEhkQ1FVRlpMRkVzUlVGQlZUdEJRVU53UWl4VFFVRkxMRk5CUVV3c1IwRkJhVUlzUzBGQlN5eFRRVUZNTEVsQlFXdENMRVZCUVc1RE8wRkJRMEVzVTBGQlN5eFpRVUZNTEVkQlFXOUNMRXRCUVVzc1dVRkJUQ3hKUVVGeFFpeERRVUY2UXp0QlFVTkJMRkZCUVVrc1MwRkJTeXhUUVVGTUxFTkJRV1VzVDBGQlppeERRVUYxUWl4UlFVRjJRaXhOUVVGeFF5eERRVUZETEVOQlFURkRMRVZCUVRaRE8wRkJRek5ETEZkQlFVc3NVMEZCVEN4RFFVRmxMRWxCUVdZc1EwRkJiMElzVVVGQmNFSTdRVUZEUVN4WFFVRkxMRmxCUVV3N1FVRkRSRHRCUVVORUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08yMUNRVVZFTEdNc01rSkJRV1VzVVN4RlFVRlZPMEZCUTNaQ0xGRkJRVTBzWjBKQlFXbENMRXRCUVVzc1UwRkJUaXhIUVVGdFFpeExRVUZMTEZOQlFVd3NRMEZCWlN4UFFVRm1MRU5CUVhWQ0xGRkJRWFpDTEVOQlFXNUNMRWRCUVhORUxFTkJRVU1zUTBGQk4wVTdRVUZEUVN4UlFVRkpMR3RDUVVGclFpeERRVUZETEVOQlFYWkNMRVZCUVRCQ08wRkJRM2hDTEZkQlFVc3NXVUZCVER0QlFVTkJMRmRCUVVzc1UwRkJUQ3hEUVVGbExFMUJRV1lzUTBGQmMwSXNZVUZCZEVJc1JVRkJjVU1zUTBGQmNrTTdRVUZEUkR0QlFVTkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMjFDUVVWRUxHRXNORUpCUVdkQ08wRkJRMlFzVVVGQlRTeFZRVUZWTEV0QlFVc3NSMEZCVEN4RlFVRm9RanRCUVVOQkxGTkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFXSXNSVUZCWjBJc1NVRkJTU3hMUVVGTExGbEJRWHBDTEVWQlFYVkRMRWRCUVhaRExFVkJRVFJETzBGQlF6RkRMRmRCUVVzc1UwRkJUQ3hEUVVGbExFTkJRV1lzUlVGQmEwSXNUMEZCYkVJc1JVRkJNa0lzU1VGQk0wSTdRVUZEUkR0QlFVTkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPenM3TzJ0Q1FVZFpMRTBpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnZia1p5WVcxbFZYQmtZWFJsTENCallXNWpaV3hQYmtaeVlXMWxWWEJrWVhSbExDQjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVWdmU0JtY205dElDY3VMaTltY21GdFpYTjVibU1uTzF4dWFXMXdiM0owSUhzZ2MzQmxaV1JRWlhKVFpXTnZibVFnZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNWNibU5zWVhOeklFRmpkR2x2YmlCN1hHNGdJR052Ym5OMGNuVmpkRzl5S0hCeWIzQnpLU0I3WEc0Z0lDQWdkR2hwY3k1elkyaGxaSFZzWldSVmNHUmhkR1VnUFNCMGFHbHpMbk5qYUdWa2RXeGxaRlZ3WkdGMFpTNWlhVzVrS0hSb2FYTXBPMXh1WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeUE5SUh0Y2JpQWdJQ0FnSUM0dUxuUm9hWE11WTI5dWMzUnlkV04wYjNJdVpHVm1ZWFZzZEZCeWIzQnpYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lIUm9hWE11YzJWMFVISnZjSE1vY0hKdmNITXBPMXh1WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwSUQwZ2NISnZjSE11WTNWeWNtVnVkQ0I4ZkNCd2NtOXdjeTVtY205dElIeDhJREE3WEc0Z0lIMWNibHh1SUNCemRHRnlkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJRzl1VTNSaGNuUXNJRjl2YmxOMFlYSjBMQ0J3WVhOemFYWmxJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2FXWWdLQ0Z3WVhOemFYWmxLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtbHpRV04wYVhabElEMGdkSEoxWlR0Y2JpQWdJQ0FnSUc5dVJuSmhiV1ZWY0dSaGRHVW9kR2hwY3k1elkyaGxaSFZzWldSVmNHUmhkR1VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbTl1VTNSaGNuUXBJSFJvYVhNdWIyNVRkR0Z5ZENncE8xeHVJQ0FnSUdsbUlDaHZibE4wWVhKMEtTQnZibE4wWVhKMEtIUm9hWE1wTzF4dUlDQWdJR2xtSUNoZmIyNVRkR0Z5ZENrZ1gyOXVVM1JoY25Rb2RHaHBjeWs3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lITjBiM0FvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJ2YmxOMGIzQXNJRjl2YmxOMGIzQXNJSEJoYzNOcGRtVWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNWNiaUFnSUNCcFppQW9JWEJoYzNOcGRtVXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWFYTkJZM1JwZG1VZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUdOaGJtTmxiRTl1Um5KaGJXVlZjR1JoZEdVb2RHaHBjeTV6WTJobFpIVnNaV1JWY0dSaGRHVXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtOXVVM1J2Y0NrZ2RHaHBjeTV2YmxOMGIzQW9LVHRjYmlBZ0lDQnBaaUFvYjI1VGRHOXdLU0J2YmxOMGIzQW9kR2hwY3lrN1hHNGdJQ0FnYVdZZ0tGOXZibE4wYjNBcElGOXZibE4wYjNBb2RHaHBjeWs3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lHTnZiWEJzWlhSbEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2IyNURiMjF3YkdWMFpTd2dYMjl1UTI5dGNHeGxkR1VnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzVjYmlBZ0lDQjBhR2x6TG5OMGIzQW9LVHRjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbTl1UTI5dGNHeGxkR1VwSUhSb2FYTXViMjVEYjIxd2JHVjBaU2dwTzF4dUlDQWdJR2xtSUNodmJrTnZiWEJzWlhSbEtTQnZia052YlhCc1pYUmxLSFJvYVhNcE8xeHVJQ0FnSUdsbUlDaGZiMjVEYjIxd2JHVjBaU2tnWDI5dVEyOXRjR3hsZEdVb2RHaHBjeWs3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lITmphR1ZrZFd4bFpGVndaR0YwWlNncElIdGNiaUFnSUNCMGFHbHpMbXhoYzNSVmNHUmhkR1ZrSUQwZ2RHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbEtDazdYRzRnSUNBZ2RHaHBjeTV3Y21WMklEMGdkR2hwY3k1amRYSnlaVzUwTzF4dVhHNGdJQ0FnWTI5dWMzUWdleUJ2YmxWd1pHRjBaU3dnY0dGemMybDJaU0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNibHh1SUNBZ0lHbG1JQ2gwYUdsekxuVndaR0YwWlNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJRDBnZEdocGN5NTFjR1JoZEdVb2RHaHBjeTVqZFhKeVpXNTBLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYjI1VmNHUmhkR1VwSUc5dVZYQmtZWFJsS0hSb2FYTXVZM1Z5Y21WdWRDd2dkR2hwY3lrN1hHNGdJQ0FnZEdocGN5NW1hWEpsVEdsemRHVnVaWEp6S0NrN1hHNWNiaUFnSUNCcFppQW9JWEJoYzNOcGRtVWdKaVlnZEdocGN5NXBjMEZqZEdsMlpTa2dlMXh1SUNBZ0lDQWdiMjVHY21GdFpWVndaR0YwWlNoMGFHbHpMbk5qYUdWa2RXeGxaRlZ3WkdGMFpTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWFYTkJZM1JwYjI1RGIyMXdiR1YwWlNBbUppQjBhR2x6TG1selFXTjBhVzl1UTI5dGNHeGxkR1VvS1NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVqYjIxd2JHVjBaU2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2MyVjBVSEp2Y0hNb2NISnZjSE1wSUh0Y2JpQWdJQ0IwYUdsekxuQnliM0J6SUQwZ2UxeHVJQ0FnSUNBZ0xpNHVkR2hwY3k1d2NtOXdjeXhjYmlBZ0lDQWdJQzR1TG5CeWIzQnpYRzRnSUNBZ2ZUdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJR2RsZENncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWpkWEp5Wlc1ME8xeHVJQ0I5WEc1Y2JpQWdjMlYwS0hZcElIdGNiaUFnSUNCMGFHbHpMbU4xY25KbGJuUWdQU0IyTzF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ1oyVjBVSEp2Y0NoclpYa3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV3Y205d2MxdHJaWGxkTzF4dUlDQjlYRzVjYmlBZ1oyVjBWbVZzYjJOcGRIa29LU0I3WEc0Z0lDQWdjbVYwZFhKdUlITndaV1ZrVUdWeVUyVmpiMjVrS0hSb2FYTXVZM1Z5Y21WdWRDQXRJSFJvYVhNdWNISmxkaXdnZEdocGN5NXNZWE4wVlhCa1lYUmxaQ2s3WEc0Z0lIMWNibHh1SUNCcGMwRmpkR2wyWlNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXBjMEZqZEdsMlpUdGNiaUFnZlZ4dVhHNGdJR0ZrWkV4cGMzUmxibVZ5S0d4cGMzUmxibVZ5S1NCN1hHNGdJQ0FnZEdocGN5NXNhWE4wWlc1bGNuTWdQU0IwYUdsekxteHBjM1JsYm1WeWN5QjhmQ0JiWFR0Y2JpQWdJQ0IwYUdsekxtNTFiVXhwYzNSbGJtVnljeUE5SUhSb2FYTXViblZ0VEdsemRHVnVaWEp6SUh4OElEQTdYRzRnSUNBZ2FXWWdLSFJvYVhNdWJHbHpkR1Z1WlhKekxtbHVaR1Y0VDJZb2JHbHpkR1Z1WlhJcElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVzYVhOMFpXNWxjbk11Y0hWemFDaHNhWE4wWlc1bGNpazdYRzRnSUNBZ0lDQjBhR2x6TG01MWJVeHBjM1JsYm1WeWN5c3JPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJSEpsYlc5MlpVeHBjM1JsYm1WeUtHeHBjM1JsYm1WeUtTQjdYRzRnSUNBZ1kyOXVjM1FnYkdsemRHVnVaWEpKYm1SbGVDQTlJQ2gwYUdsekxteHBjM1JsYm1WeWN5a2dQeUIwYUdsekxteHBjM1JsYm1WeWN5NXBibVJsZUU5bUtHeHBjM1JsYm1WeUtTQTZJQzB4TzF4dUlDQWdJR2xtSUNoc2FYTjBaVzVsY2tsdVpHVjRJQ0U5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdkR2hwY3k1dWRXMU1hWE4wWlc1bGNuTXRMVHRjYmlBZ0lDQWdJSFJvYVhNdWJHbHpkR1Z1WlhKekxuTndiR2xqWlNoc2FYTjBaVzVsY2tsdVpHVjRMQ0F4S1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCbWFYSmxUR2x6ZEdWdVpYSnpLQ2tnZTF4dUlDQWdJR052Ym5OMElHTjFjbkpsYm5RZ1BTQjBhR2x6TG1kbGRDZ3BPMXh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMU1hWE4wWlc1bGNuTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVzYVhOMFpXNWxjbk5iYVYwb1kzVnljbVZ1ZEN3Z2RHaHBjeWs3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZqZEdsdmJqdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFJlbmRlcmVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZW5kZXJlcik7XG5cbiAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzLCBwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge307XG4gICAgdGhpcy5jaGFuZ2VkVmFsdWVzID0gW107XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgc3RhdGUuXG4gICAqIElmIGBrZXlgIGlzIG5vdCBkZWZpbmVkLCByZXR1cm4gZW50aXJlIGNhY2hlZCBzdGF0ZS5cbiAgICogSWYgYGtleWAgaXMgZGVmaW5lZCwgcmV0dXJuIGNhY2hlZCB2YWx1ZSBpZiBwcmVzZW50LlxuICAgKiBJZiBga2V5YCBpcyBkZWZpbmVkIGFuZCBjYWNoZWQgdmFsdWUgaXMgbm90IHByZXNlbnQsIHJlYWQgYW5kIHJldHVybi5cbiAgICogQHBhcmFtICB7c3RyaW5nfSAob3B0aW9uYWwpIGtleSBvZiB2YWx1ZVxuICAgKiBAcmV0dXJuIHt2YWx1ZX1cbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZChrZXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlYWQgdmFsdWUgYWNjb3JkaW5nIHRvIGBvblJlYWRgXG4gICAqIEBwYXJhbSAge3N0cmluZ30gTmFtZSBvZiBwcm9wZXJ0eSB0byByZWFkXG4gICAqIEByZXR1cm4ge1t0eXBlXX1cbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uIHJlYWQoa2V5KSB7XG4gICAgaWYgKHRoaXMub25SZWFkKSB7XG4gICAgICByZXR1cm4gdGhpcy5vblJlYWQoa2V5KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBgc3RhdGVgIHdpdGggbmV3IHZhbHVlcyBhbmQgc2NoZWR1bGUgYHJlbmRlcmAuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXNcbiAgICogQHBhcmFtIHt2YWx1ZX0gdmFsdWUgdG9zZXRcbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBhcmdzWzBdO1xuICAgICAgLy8gU2V0IG11bHRpcGxlIHZhbHVlc1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoa2V5LCB2YWx1ZXNba2V5XSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfa2V5MiA9IGFyZ3NbMF07XG4gICAgICB2YXIgdmFsdWUgPSBhcmdzWzFdO1xuXG4gICAgICB0aGlzLnNldFZhbHVlKF9rZXkyLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCkge1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVJlbmRlcikodGhpcy5yZW5kZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vID4gV2lsZXkgLSA2IGluIHRoZSBNb3JuaW5nXG4gIC8qKlxuICAgKiBTZXQgYSBzaW5nbGUgdmFsdWVcbiAgICogSWYgYSBzdHJpbmcgb3IgbnVtYmVyLCBzZXQgZGlyZWN0bHkuXG4gICAqIElmIGFuIG9iamVjdCBvciBhcnJheSwgY3JlYXRlIG5ldyBvYmplY3Qgb3IgYXJyYXlcbiAgICogaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0LiBUaGVuIHNoYWxsb3cgY29tcGFyZVxuICAgKiB0byBzZXQgYW5kIGNvbXBhcmUgaW5kaXZpZHVhbCB2YWx1ZXMuXG4gICAqIE9uZSBvZiB0aGUgY2xlYXJlciBkcmF3YmFja3MgYW5kIGFubm95YW5jZXMgd2l0aFxuICAgKiB1c2luZyBtdXRhYmxlIGluc3RlYWQgb2YgaW1tdXRhYmxlIHN0YXRlcy5cbiAgICogQHBhcmFtIHtbdHlwZV19IGtleVxuICAgKiBAcGFyYW0ge1t0eXBlXX0gdmFsdWVcbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiBzZXRWYWx1ZShrZXksIHZhbHVlKSB7XG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9IHRoaXMuc3RhdGVba2V5XTtcblxuICAgIC8vIElmIG51bWJlciBvciBzdHJpbmcsIHNldCBkaXJlY3RseVxuICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZSkgfHwgKDAsIF91dGlscy5pc1N0cmluZykodmFsdWUpKSB7XG4gICAgICBpZiAoY3VycmVudFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNBcnJheSkodmFsdWUpKSB7XG4gICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgdmFyIG51bVZhbHVlcyA9IHZhbHVlLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVmFsdWVzOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XVtpXSAhPT0gdmFsdWVbaV0pIHtcbiAgICAgICAgICB0aGlzLnN0YXRlW2tleV1baV0gPSB2YWx1ZVtpXTtcbiAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLmlzT2JqKSh2YWx1ZSkpIHtcbiAgICAgIGlmICghY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciB2YWx1ZUtleSBpbiB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZVtrZXldW3ZhbHVlS2V5XSAhPT0gdmFsdWVbdmFsdWVLZXldKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldW3ZhbHVlS2V5XSA9IHZhbHVlW3ZhbHVlS2V5XTtcbiAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzQ2hhbmdlZCkge1xuICAgICAgdGhpcy5jaGFuZ2VkVmFsdWVzLnB1c2goa2V5KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpcmVzIGBvblJlbmRlcmAgaWYgdmFsdWVzIGhhdmUgY2hhbmdlZCBvciBgZm9yY2VSZW5kZXJgXG4gICAqIGlzIHNldCB0byB0cnVlLlxuICAgKiBAcmV0dXJuIHt0aGlzfVxuICAgKi9cblxuXG4gIFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGZvcmNlUmVuZGVyID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBhcmd1bWVudHNbMF07XG5cbiAgICBpZiAoKGZvcmNlUmVuZGVyIHx8IHRoaXMuaGFzQ2hhbmdlZCkgJiYgdGhpcy5vblJlbmRlcikge1xuICAgICAgdGhpcy5vblJlbmRlcigpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIFJlbmRlcmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVVFN08wRkJRMEU3T3pzN1NVRkZUU3hSTzBGQlEwb3NiMEpCUVZrc1MwRkJXaXhGUVVGdFFqdEJRVUZCT3p0QlFVTnFRaXhUUVVGTExFMUJRVXdzUjBGQll5eExRVUZMTEUxQlFVd3NRMEZCV1N4SlFVRmFMRU5CUVdsQ0xFbEJRV3BDTEVOQlFXUTdPMEZCUlVFc1UwRkJTeXhMUVVGTUxHZENRVU5MTEV0QlFVc3NWMEZCVEN4RFFVRnBRaXhaUVVSMFFpeEZRVVZMTEV0QlJrdzdPMEZCUzBFc1UwRkJTeXhMUVVGTUxFZEJRV0VzUlVGQllqdEJRVU5CTEZOQlFVc3NZVUZCVEN4SFFVRnhRaXhGUVVGeVFqdEJRVU5FT3pzN096czdPenM3T3pzN2NVSkJWVVFzUnl4blFrRkJTU3hITEVWQlFVczdRVUZEVUN4UlFVRkpMRWRCUVVvc1JVRkJVenRCUVVOUUxGVkJRVWtzUzBGQlN5eExRVUZNTEVOQlFWY3NSMEZCV0N4TlFVRnZRaXhUUVVGNFFpeEZRVUZ0UXp0QlFVTnFReXhsUVVGUExFdEJRVXNzUzBGQlRDeERRVUZYTEVkQlFWZ3NRMEZCVUR0QlFVTkVMRTlCUmtRc1RVRkZUenRCUVVOTUxHVkJRVThzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRlFPMEZCUTBRN1FVRkRSaXhMUVU1RUxFMUJUVTg3UVVGRFRDeGhRVUZQTEV0QlFVc3NTMEZCV2p0QlFVTkVPMEZCUTBZc1J6czdPenM3T3pzN08zRkNRVTlFTEVrc2FVSkJRVXNzUnl4RlFVRkxPMEZCUTFJc1VVRkJTU3hMUVVGTExFMUJRVlFzUlVGQmFVSTdRVUZEWml4aFFVRlBMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFZEJRVm9zUTBGQlVEdEJRVU5FTzBGQlEwWXNSenM3T3pzN096czdPM0ZDUVU5RUxFY3NhMEpCUVdFN1FVRkJRU3h6UTBGQlRpeEpRVUZOTzBGQlFVNHNWVUZCVFR0QlFVRkJPenRCUVVOWUxGRkJRVWtzVDBGQlR5eExRVUZMTEVOQlFVd3NRMEZCVUN4TFFVRnRRaXhYUVVGMlFpeEZRVUZ2UXp0QlFVRkJMRlZCUXpGQ0xFMUJSREJDTEVkQlEyWXNTVUZFWlRzN08wRkJSMnhETEZkQlFVc3NTVUZCVFN4SFFVRllMRWxCUVd0Q0xFMUJRV3hDTEVWQlFUQkNPMEZCUTNoQ0xHRkJRVXNzVVVGQlRDeERRVUZqTEVkQlFXUXNSVUZCYlVJc1QwRkJUeXhIUVVGUUxFTkJRVzVDTzBGQlEwUTdRVUZEUml4TFFVNUVMRTFCVFU4N1FVRkJRU3hWUVVOSExFdEJSRWdzUjBGRGEwSXNTVUZFYkVJN1FVRkJRU3hWUVVOUkxFdEJSRklzUjBGRGEwSXNTVUZFYkVJN08wRkJSVXdzVjBGQlN5eFJRVUZNTEVOQlFXTXNTMEZCWkN4RlFVRnRRaXhMUVVGdVFqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1MwRkJTeXhWUVVGVUxFVkJRWEZDTzBGQlEyNUNMRzlEUVVGakxFdEJRVXNzVFVGQmJrSTdRVUZEUkRzN1FVRkZSQ3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenM3T3pzN096czdPenM3T3pzN08zRkNRV05FTEZFc2NVSkJRVk1zUnl4RlFVRkxMRXNzUlVGQlR6dEJRVU51UWl4UlFVRk5MR1ZCUVdVc1MwRkJTeXhMUVVGTUxFTkJRVmNzUjBGQldDeERRVUZ5UWpzN08wRkJSMEVzVVVGQlNTeHJRa0ZCVFN4TFFVRk9MRXRCUVdkQ0xIRkNRVUZUTEV0QlFWUXNRMEZCY0VJc1JVRkJjVU03UVVGRGJrTXNWVUZCU1N4cFFrRkJhVUlzUzBGQmNrSXNSVUZCTkVJN1FVRkRNVUlzWVVGQlN5eExRVUZNTEVOQlFWY3NSMEZCV0N4SlFVRnJRaXhMUVVGc1FqdEJRVU5CTEdGQlFVc3NWVUZCVEN4SFFVRnJRaXhKUVVGc1FqdEJRVU5FTzBGQlEwWXNTMEZNUkN4TlFVdFBMRWxCUVVrc2IwSkJRVkVzUzBGQlVpeERRVUZLTEVWQlFXOUNPMEZCUTNwQ0xGVkJRVWtzUTBGQlF5eFpRVUZNTEVWQlFXMUNPMEZCUTJwQ0xHRkJRVXNzUzBGQlRDeERRVUZYTEVkQlFWZ3NTVUZCYTBJc1JVRkJiRUk3UVVGRFJEczdRVUZGUkN4VlFVRk5MRmxCUVZrc1RVRkJUU3hOUVVGNFFqdEJRVU5CTEZkQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVdJc1JVRkJaMElzU1VGQlNTeFRRVUZ3UWl4RlFVRXJRaXhIUVVFdlFpeEZRVUZ2UXp0QlFVTnNReXhaUVVGSkxFdEJRVXNzUzBGQlRDeERRVUZYTEVkQlFWZ3NSVUZCWjBJc1EwRkJhRUlzVFVGQmRVSXNUVUZCVFN4RFFVRk9MRU5CUVROQ0xFVkJRWEZETzBGQlEyNURMR1ZCUVVzc1MwRkJUQ3hEUVVGWExFZEJRVmdzUlVGQlowSXNRMEZCYUVJc1NVRkJjVUlzVFVGQlRTeERRVUZPTEVOQlFYSkNPMEZCUTBFc1pVRkJTeXhWUVVGTUxFZEJRV3RDTEVsQlFXeENPMEZCUTBRN1FVRkRSanRCUVVOR0xFdEJXazBzVFVGWlFTeEpRVUZKTEd0Q1FVRk5MRXRCUVU0c1EwRkJTaXhGUVVGclFqdEJRVU4yUWl4VlFVRkpMRU5CUVVNc1dVRkJUQ3hGUVVGdFFqdEJRVU5xUWl4aFFVRkxMRXRCUVV3c1EwRkJWeXhIUVVGWUxFbEJRV3RDTEVWQlFXeENPMEZCUTBRN08wRkJSVVFzVjBGQlN5eEpRVUZKTEZGQlFWUXNTVUZCY1VJc1MwRkJja0lzUlVGQk5FSTdRVUZETVVJc1dVRkJTU3hMUVVGTExFdEJRVXdzUTBGQlZ5eEhRVUZZTEVWQlFXZENMRkZCUVdoQ0xFMUJRVGhDTEUxQlFVMHNVVUZCVGl4RFFVRnNReXhGUVVGdFJEdEJRVU5xUkN4bFFVRkxMRXRCUVV3c1EwRkJWeXhIUVVGWUxFVkJRV2RDTEZGQlFXaENMRWxCUVRSQ0xFMUJRVTBzVVVGQlRpeERRVUUxUWp0QlFVTkJMR1ZCUVVzc1ZVRkJUQ3hIUVVGclFpeEpRVUZzUWp0QlFVTkVPMEZCUTBZN1FVRkRSanM3UVVGRlJDeFJRVUZKTEV0QlFVc3NWVUZCVkN4RlFVRnhRanRCUVVOdVFpeFhRVUZMTEdGQlFVd3NRMEZCYlVJc1NVRkJia0lzUTBGQmQwSXNSMEZCZUVJN1FVRkRSRHRCUVVOR0xFYzdPenM3T3pzN096dHhRa0ZQUkN4TkxIRkNRVUUwUWp0QlFVRkJMRkZCUVhKQ0xGZEJRWEZDTEhsRVFVRlFMRXRCUVU4N08wRkJRekZDTEZGQlFVa3NRMEZCUXl4bFFVRmxMRXRCUVVzc1ZVRkJja0lzUzBGQmIwTXNTMEZCU3l4UlFVRTNReXhGUVVGMVJEdEJRVU55UkN4WFFVRkxMRkZCUVV3N1FVRkRSRHM3UVVGRlJDeFRRVUZMTEdGQlFVd3NRMEZCYlVJc1RVRkJia0lzUjBGQk5FSXNRMEZCTlVJN1FVRkRRU3hUUVVGTExGVkJRVXdzUjBGQmEwSXNTMEZCYkVJN08wRkJSVUVzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3T3pzN2EwSkJSMWtzVVNJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJRzl1Um5KaGJXVlNaVzVrWlhJZ2ZTQm1jbTl0SUNjdUxpOW1jbUZ0WlhONWJtTW5PMXh1YVcxd2IzSjBJSHNnYVhOQmNuSmhlU3dnYVhOUFltb3NJR2x6VG5WdExDQnBjMU4wY21sdVp5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtTnNZWE56SUZKbGJtUmxjbVZ5SUh0Y2JpQWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITXBJSHRjYmlBZ0lDQjBhR2x6TG5KbGJtUmxjaUE5SUhSb2FYTXVjbVZ1WkdWeUxtSnBibVFvZEdocGN5azdYRzVjYmlBZ0lDQjBhR2x6TG5CeWIzQnpJRDBnZTF4dUlDQWdJQ0FnTGk0dWRHaHBjeTVqYjI1emRISjFZM1J2Y2k1a1pXWmhkV3gwVUhKdmNITXNYRzRnSUNBZ0lDQXVMaTV3Y205d2MxeHVJQ0FnSUgwN1hHNWNiaUFnSUNCMGFHbHpMbk4wWVhSbElEMGdlMzA3WEc0Z0lDQWdkR2hwY3k1amFHRnVaMlZrVm1Gc2RXVnpJRDBnVzEwN1hHNGdJSDFjYmx4dUlDQXZLaXBjYmlBZ0lDb2dSMlYwSUdOMWNuSmxiblFnYzNSaGRHVXVYRzRnSUNBcUlFbG1JR0JyWlhsZ0lHbHpJRzV2ZENCa1pXWnBibVZrTENCeVpYUjFjbTRnWlc1MGFYSmxJR05oWTJobFpDQnpkR0YwWlM1Y2JpQWdJQ29nU1dZZ1lHdGxlV0FnYVhNZ1pHVm1hVzVsWkN3Z2NtVjBkWEp1SUdOaFkyaGxaQ0IyWVd4MVpTQnBaaUJ3Y21WelpXNTBMbHh1SUNBZ0tpQkpaaUJnYTJWNVlDQnBjeUJrWldacGJtVmtJR0Z1WkNCallXTm9aV1FnZG1Gc2RXVWdhWE1nYm05MElIQnlaWE5sYm5Rc0lISmxZV1FnWVc1a0lISmxkSFZ5Ymk1Y2JpQWdJQ29nUUhCaGNtRnRJQ0I3YzNSeWFXNW5mU0FvYjNCMGFXOXVZV3dwSUd0bGVTQnZaaUIyWVd4MVpWeHVJQ0FnS2lCQWNtVjBkWEp1SUh0MllXeDFaWDFjYmlBZ0lDb3ZYRzRnSUdkbGRDaHJaWGtwSUh0Y2JpQWdJQ0JwWmlBb2EyVjVLU0I3WEc0Z0lDQWdJQ0JwWmlBb2RHaHBjeTV6ZEdGMFpWdHJaWGxkSUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWMzUmhkR1ZiYTJWNVhUdGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkpsWVdRb2EyVjVLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjM1JoZEdVN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ0x5b3FYRzRnSUNBcUlGSmxZV1FnZG1Gc2RXVWdZV05qYjNKa2FXNW5JSFJ2SUdCdmJsSmxZV1JnWEc0Z0lDQXFJRUJ3WVhKaGJTQWdlM04wY21sdVozMGdUbUZ0WlNCdlppQndjbTl3WlhKMGVTQjBieUJ5WldGa1hHNGdJQ0FxSUVCeVpYUjFjbTRnZTF0MGVYQmxYWDFjYmlBZ0lDb3ZYRzRnSUhKbFlXUW9hMlY1S1NCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11YjI1U1pXRmtLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1dmJsSmxZV1FvYTJWNUtUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQXZLaXBjYmlBZ0lDb2dWWEJrWVhSbElHQnpkR0YwWldBZ2QybDBhQ0J1WlhjZ2RtRnNkV1Z6SUdGdVpDQnpZMmhsWkhWc1pTQmdjbVZ1WkdWeVlDNWNiaUFnSUNvZ1FIQmhjbUZ0SUh0dlltcGxZM1I5SUhaaGJIVmxjMXh1SUNBZ0tpQkFjR0Z5WVcwZ2UzWmhiSFZsZlNCMllXeDFaU0IwYjNObGRGeHVJQ0FnS2k5Y2JpQWdjMlYwS0M0dUxtRnlaM01wSUh0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltSUdGeVozTmJNVjBnUFQwOUlDZDFibVJsWm1sdVpXUW5LU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQmJJSFpoYkhWbGN5QmRJRDBnWVhKbmN6dGNiaUFnSUNBZ0lDOHZJRk5sZENCdGRXeDBhWEJzWlNCMllXeDFaWE5jYmlBZ0lDQWdJR1p2Y2lBb1kyOXVjM1FnYTJWNUlHbHVJSFpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmxkRlpoYkhWbEtHdGxlU3dnZG1Gc2RXVnpXMnRsZVYwcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQmJJR3RsZVN3Z2RtRnNkV1VnWFNBOUlHRnlaM003WEc0Z0lDQWdJQ0IwYUdsekxuTmxkRlpoYkhWbEtHdGxlU3dnZG1Gc2RXVXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtaGhjME5vWVc1blpXUXBJSHRjYmlBZ0lDQWdJRzl1Um5KaGJXVlNaVzVrWlhJb2RHaHBjeTV5Wlc1a1pYSXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnTHk4Z1BpQlhhV3hsZVNBdElEWWdhVzRnZEdobElFMXZjbTVwYm1kY2JpQWdMeW9xWEc0Z0lDQXFJRk5sZENCaElITnBibWRzWlNCMllXeDFaVnh1SUNBZ0tpQkpaaUJoSUhOMGNtbHVaeUJ2Y2lCdWRXMWlaWElzSUhObGRDQmthWEpsWTNSc2VTNWNiaUFnSUNvZ1NXWWdZVzRnYjJKcVpXTjBJRzl5SUdGeWNtRjVMQ0JqY21WaGRHVWdibVYzSUc5aWFtVmpkQ0J2Y2lCaGNuSmhlVnh1SUNBZ0tpQnBaaUJwZENCa2IyVnpiaWQwSUdGc2NtVmhaSGtnWlhocGMzUXVJRlJvWlc0Z2MyaGhiR3h2ZHlCamIyMXdZWEpsWEc0Z0lDQXFJSFJ2SUhObGRDQmhibVFnWTI5dGNHRnlaU0JwYm1ScGRtbGtkV0ZzSUhaaGJIVmxjeTVjYmlBZ0lDb2dUMjVsSUc5bUlIUm9aU0JqYkdWaGNtVnlJR1J5WVhkaVlXTnJjeUJoYm1RZ1lXNXViM2xoYm1ObGN5QjNhWFJvWEc0Z0lDQXFJSFZ6YVc1bklHMTFkR0ZpYkdVZ2FXNXpkR1ZoWkNCdlppQnBiVzExZEdGaWJHVWdjM1JoZEdWekxseHVJQ0FnS2lCQWNHRnlZVzBnZTF0MGVYQmxYWDBnYTJWNVhHNGdJQ0FxSUVCd1lYSmhiU0I3VzNSNWNHVmRmU0IyWVd4MVpWeHVJQ0FnS2k5Y2JpQWdjMlYwVm1Gc2RXVW9hMlY1TENCMllXeDFaU2tnZTF4dUlDQWdJR052Ym5OMElHTjFjbkpsYm5SV1lXeDFaU0E5SUhSb2FYTXVjM1JoZEdWYmEyVjVYVHRjYmx4dUlDQWdJQzh2SUVsbUlHNTFiV0psY2lCdmNpQnpkSEpwYm1jc0lITmxkQ0JrYVhKbFkzUnNlVnh1SUNBZ0lHbG1JQ2hwYzA1MWJTaDJZV3gxWlNrZ2ZId2dhWE5UZEhKcGJtY29kbUZzZFdVcEtTQjdYRzRnSUNBZ0lDQnBaaUFvWTNWeWNtVnVkRlpoYkhWbElDRTlQU0IyWVd4MVpTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsVzJ0bGVWMGdQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b1lYTkRhR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0dselFYSnlZWGtvZG1Gc2RXVXBLU0I3WEc0Z0lDQWdJQ0JwWmlBb0lXTjFjbkpsYm5SV1lXeDFaU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbFcydGxlVjBnUFNCYlhUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdZMjl1YzNRZ2JuVnRWbUZzZFdWeklEMGdkbUZzZFdVdWJHVnVaM1JvTzF4dUlDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMVdZV3gxWlhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1emRHRjBaVnRyWlhsZFcybGRJQ0U5UFNCMllXeDFaVnRwWFNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1ZiYTJWNVhWdHBYU0E5SUhaaGJIVmxXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11YUdGelEyaGhibWRsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0dselQySnFLSFpoYkhWbEtTa2dlMXh1SUNBZ0lDQWdhV1lnS0NGamRYSnlaVzUwVm1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlZ0clpYbGRJRDBnZTMwN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHWnZjaUFvYkdWMElIWmhiSFZsUzJWNUlHbHVJSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbk4wWVhSbFcydGxlVjFiZG1Gc2RXVkxaWGxkSUNFOVBTQjJZV3gxWlZ0MllXeDFaVXRsZVYwcElIdGNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsVzJ0bGVWMWJkbUZzZFdWTFpYbGRJRDBnZG1Gc2RXVmJkbUZzZFdWTFpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NW9ZWE5EYUdGdVoyVmtLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtTm9ZVzVuWldSV1lXeDFaWE11Y0hWemFDaHJaWGtwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCR2FYSmxjeUJnYjI1U1pXNWtaWEpnSUdsbUlIWmhiSFZsY3lCb1lYWmxJR05vWVc1blpXUWdiM0lnWUdadmNtTmxVbVZ1WkdWeVlGeHVJQ0FnS2lCcGN5QnpaWFFnZEc4Z2RISjFaUzVjYmlBZ0lDb2dRSEpsZEhWeWJpQjdkR2hwYzMxY2JpQWdJQ292WEc0Z0lISmxibVJsY2lobWIzSmpaVkpsYm1SbGNpQTlJR1poYkhObEtTQjdYRzRnSUNBZ2FXWWdLQ2htYjNKalpWSmxibVJsY2lCOGZDQjBhR2x6TG1oaGMwTm9ZVzVuWldRcElDWW1JSFJvYVhNdWIyNVNaVzVrWlhJcElIdGNiaUFnSUNBZ0lIUm9hWE11YjI1U1pXNWtaWElvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IwYUdsekxtTm9ZVzVuWldSV1lXeDFaWE11YkdWdVozUm9JRDBnTUR0Y2JpQWdJQ0IwYUdsekxtaGhjME5vWVc1blpXUWdQU0JtWVd4elpUdGNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRkpsYm1SbGNtVnlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgQ1NTUmVuZGVyZXIoX2V4dGVuZHMoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb246IHRydWVcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfcmVuZGVyID0gcmVxdWlyZSgnLi9yZW5kZXInKTtcblxudmFyIF9yZW5kZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVuZGVyKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVzKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENTU1JlbmRlcmVyID0gZnVuY3Rpb24gKF9SZW5kZXJlcikge1xuICBfaW5oZXJpdHMoQ1NTUmVuZGVyZXIsIF9SZW5kZXJlcik7XG5cbiAgZnVuY3Rpb24gQ1NTUmVuZGVyZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENTU1JlbmRlcmVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVuZGVyZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDU1NSZW5kZXJlci5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZWxlbWVudCA9IF9wcm9wcy5lbGVtZW50O1xuICAgIHZhciBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiA9IF9wcm9wcy5lbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbjtcblxuICAgICgwLCBfcmVuZGVyMi5kZWZhdWx0KShlbGVtZW50LCB0aGlzLnN0YXRlLCB0aGlzLmNoYW5nZWRWYWx1ZXMsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKTtcbiAgfTtcblxuICBDU1NSZW5kZXJlci5wcm90b3R5cGUub25SZWFkID0gZnVuY3Rpb24gb25SZWFkKGtleSkge1xuICAgIHZhciB2YWx1ZVR5cGUgPSBfdmFsdWVUeXBlczIuZGVmYXVsdFtrZXldO1xuXG4gICAgaWYgKCFfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICAgIHZhciBkb21WYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpWygwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKGtleSldIHx8IDA7XG4gICAgICByZXR1cm4gdmFsdWVUeXBlICYmIHZhbHVlVHlwZS5wYXJzZSA/IHZhbHVlVHlwZS5wYXJzZShkb21WYWx1ZSkgOiBkb21WYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbHVlVHlwZSkge1xuICAgICAgICByZXR1cm4gdmFsdWVUeXBlLmRlZmF1bHQgfHwgMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ1NTUmVuZGVyZXI7XG59KF8yLmRlZmF1bHQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwybHVaR1Y0TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRyUWtFMlFtVXNWVUZCVlN4UFFVRldMRVZCUVcxQ0xFdEJRVzVDTEVWQlFUQkNPMEZCUTNaRExGTkJRVThzU1VGQlNTeFhRVUZLTzBGQlEwd3NiMEpCUkVzN1FVRkZUQ3huUTBGQk5FSTdRVUZHZGtJc1MwRkhSaXhMUVVoRkxFVkJRVkE3UVVGTFJDeERPenRCUVc1RFJEczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdPenM3T3pzN1NVRkZUU3hYT3pzN096czdPenM3ZDBKQlEwb3NVU3gxUWtGQlZ6dEJRVUZCTEdsQ1FVTjFReXhMUVVGTExFdEJSRFZETzBGQlFVRXNVVUZEUkN4UFFVUkRMRlZCUTBRc1QwRkVRenRCUVVGQkxGRkJRMUVzTUVKQlJGSXNWVUZEVVN3d1FrRkVVanM3UVVGRlZDd3dRa0ZCVlN4UFFVRldMRVZCUVcxQ0xFdEJRVXNzUzBGQmVFSXNSVUZCSzBJc1MwRkJTeXhoUVVGd1F5eEZRVUZ0UkN3d1FrRkJia1E3UVVGRFJDeEhPenQzUWtGRlJDeE5MRzFDUVVGUExFY3NSVUZCU3p0QlFVTldMRkZCUVUwc1dVRkJXU3h4UWtGQll5eEhRVUZrTEVOQlFXeENPenRCUVVWQkxGRkJRVWtzUTBGQlF5eDVRa0ZCWlN4SFFVRm1MRU5CUVV3c1JVRkJNRUk3UVVGQlFTeFZRVU5vUWl4UFFVUm5RaXhIUVVOS0xFdEJRVXNzUzBGRVJDeERRVU5vUWl4UFFVUm5RanM3UVVGRmVFSXNWVUZCVFN4WFFVRlhMRTlCUVU4c1owSkJRVkFzUTBGQmQwSXNUMEZCZUVJc1JVRkJhVU1zU1VGQmFrTXNSVUZCZFVNc2QwSkJRVk1zUjBGQlZDeERRVUYyUXl4TFFVRjVSQ3hEUVVFeFJUdEJRVU5CTEdGQlFWRXNZVUZCWVN4VlFVRlZMRXRCUVhoQ0xFZEJRV2xETEZWQlFWVXNTMEZCVml4RFFVRm5RaXhSUVVGb1FpeERRVUZxUXl4SFFVRTJSQ3hSUVVGd1JUdEJRVU5FTEV0QlNrUXNUVUZKVHp0QlFVTk1MRlZCUVVrc1UwRkJTaXhGUVVGbE8wRkJRMklzWlVGQlR5eFZRVUZWTEU5QlFWWXNTVUZCY1VJc1EwRkJOVUk3UVVGRFJDeFBRVVpFTEUxQlJVODdRVUZEVEN4bFFVRlBMRU5CUVZBN1FVRkRSRHRCUVVOR08wRkJRMFlzUnlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlNaVzVrWlhKbGNpQm1jbTl0SUNjdUxpOG5PMXh1YVcxd2IzSjBJSEpsYm1SbGNrTlRVeUJtY205dElDY3VMM0psYm1SbGNpYzdYRzVwYlhCdmNuUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1puSnZiU0FuTGk5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUhaaGJIVmxWSGx3WlhOTllYQWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeWM3WEc1cGJYQnZjblFnY0hKbFptbDRaWElnWm5KdmJTQW5MaTl3Y21WbWFYaGxjaWM3WEc1Y2JtTnNZWE56SUVOVFUxSmxibVJsY21WeUlHVjRkR1Z1WkhNZ1VtVnVaR1Z5WlhJZ2UxeHVJQ0J2YmxKbGJtUmxjaWdwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1ZzWlcxbGJuUXNJR1Z1WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUhKbGJtUmxja05UVXlobGJHVnRaVzUwTENCMGFHbHpMbk4wWVhSbExDQjBhR2x6TG1Ob1lXNW5aV1JXWVd4MVpYTXNJR1Z1WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVLVHRjYmlBZ2ZWeHVYRzRnSUc5dVVtVmhaQ2hyWlhrcElIdGNiaUFnSUNCamIyNXpkQ0IyWVd4MVpWUjVjR1VnUFNCMllXeDFaVlI1Y0dWelRXRndXMnRsZVYwN1hHNWNiaUFnSUNCcFppQW9JWFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSHNnWld4bGJXVnVkQ0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNBZ0lHTnZibk4wSUdSdmJWWmhiSFZsSUQwZ2QybHVaRzkzTG1kbGRFTnZiWEIxZEdWa1UzUjViR1VvWld4bGJXVnVkQ3dnYm5Wc2JDbGJjSEpsWm1sNFpYSW9hMlY1S1YwZ2ZId2dNRHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW9kbUZzZFdWVWVYQmxJQ1ltSUhaaGJIVmxWSGx3WlM1d1lYSnpaU2tnUHlCMllXeDFaVlI1Y0dVdWNHRnljMlVvWkc5dFZtRnNkV1VwSURvZ1pHOXRWbUZzZFdVN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR2xtSUNoMllXeDFaVlI1Y0dVcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsVkhsd1pTNWtaV1poZFd4MElIeDhJREE3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdLR1ZzWlcxbGJuUXNJSEJ5YjNCektTQjdYRzRnSUhKbGRIVnliaUJ1WlhjZ1ExTlRVbVZ1WkdWeVpYSW9lMXh1SUNBZ0lHVnNaVzFsYm5Rc1hHNGdJQ0FnWlc1aFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjQ2SUhSeWRXVXNYRzRnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdmU2s3WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgU1ZHUmVuZGVyZXIoX2V4dGVuZHMoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU1ZHUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhTVkdSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBTVkdSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTVkdSZW5kZXJlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVuZGVyZXIuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgdmFyIF9wcm9wcyRlbGVtZW50JGdldEJCbyA9IHByb3BzLmVsZW1lbnQuZ2V0QkJveCgpO1xuXG4gICAgdmFyIHggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueDtcbiAgICB2YXIgeSA9IF9wcm9wcyRlbGVtZW50JGdldEJCby55O1xuICAgIHZhciB3aWR0aCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby53aWR0aDtcbiAgICB2YXIgaGVpZ2h0ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLmhlaWdodDtcblxuICAgIF90aGlzLmVsZW1lbnREaW1lbnNpb25zID0geyB4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU1ZHUmVuZGVyZXIucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICB2YXIgYXR0cnMgPSAoMCwgX2J1aWxkMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCB0aGlzLmVsZW1lbnREaW1lbnNpb25zKTtcbiAgICAoMCwgX3V0aWxzLnNldERPTUF0dHJzKShlbGVtZW50LCBhdHRycyk7XG4gIH07XG5cbiAgU1ZHUmVuZGVyZXIucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZChrZXkpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuXG4gICAgaWYgKCFfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2YWx1ZVR5cGUgPSBfdmFsdWVUeXBlczIuZGVmYXVsdFtrZXldO1xuICAgICAgcmV0dXJuIHZhbHVlVHlwZSA/IHZhbHVlVHlwZS5kZWZhdWx0IDogMDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFNWR1JlbmRlcmVyO1xufShfMi5kZWZhdWx0KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0clFrRm5RMlVzVlVGQlZTeFBRVUZXTEVWQlFXMUNMRXRCUVc1Q0xFVkJRVEJDTzBGQlEzWkRMRk5CUVU4c1NVRkJTU3hYUVVGS08wRkJRMHc3UVVGRVN5eExRVVZHTEV0QlJrVXNSVUZCVUR0QlFVbEVMRU03TzBGQmNrTkVPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenM3T3pzN1NVRkZUU3hYT3pzN1FVRkRTaXgxUWtGQldTeExRVUZhTEVWQlFXMUNPMEZCUVVFN08wRkJRVUVzYVVSQlEycENMSEZDUVVGTkxFdEJRVTRzUTBGRWFVSTdPMEZCUVVFc1owTkJSMlVzVFVGQlRTeFBRVUZPTEVOQlFXTXNUMEZCWkN4RlFVaG1PenRCUVVGQkxGRkJSMVFzUTBGSVV5eDVRa0ZIVkN4RFFVaFRPMEZCUVVFc1VVRkhUaXhEUVVoTkxIbENRVWRPTEVOQlNFMDdRVUZCUVN4UlFVZElMRXRCU0Vjc2VVSkJSMGdzUzBGSVJ6dEJRVUZCTEZGQlIwa3NUVUZJU2l4NVFrRkhTU3hOUVVoS096dEJRVWxxUWl4VlFVRkxMR2xDUVVGTUxFZEJRWGxDTEVWQlFVVXNTVUZCUml4RlFVRkxMRWxCUVV3c1JVRkJVU3haUVVGU0xFVkJRV1VzWTBGQlppeEZRVUY2UWp0QlFVcHBRanRCUVV0c1FqczdkMEpCUlVRc1VTeDFRa0ZCVnp0QlFVRkJMRkZCUTBRc1QwRkVReXhIUVVOWExFdEJRVXNzUzBGRWFFSXNRMEZEUkN4UFFVUkRPenRCUVVWVUxGRkJRVTBzVVVGQlVTeHhRa0ZCVFN4TFFVRkxMRXRCUVZnc1JVRkJhMElzUzBGQlN5eHBRa0ZCZGtJc1EwRkJaRHRCUVVOQkxEUkNRVUZaTEU5QlFWb3NSVUZCY1VJc1MwRkJja0k3UVVGRFJDeEhPenQzUWtGRlJDeE5MRzFDUVVGUExFY3NSVUZCU3p0QlFVRkJMRkZCUTBZc1QwRkVSU3hIUVVOVkxFdEJRVXNzUzBGRVppeERRVU5HTEU5QlJFVTdPenRCUVVkV0xGRkJRVWtzUTBGQlF5eDVRa0ZCWlN4SFFVRm1MRU5CUVV3c1JVRkJNRUk3UVVGRGVFSXNZVUZCVHl4UlFVRlJMRmxCUVZJc1EwRkJjVUlzUjBGQmNrSXNRMEZCVUR0QlFVTkVMRXRCUmtRc1RVRkZUenRCUVVOTUxGVkJRVTBzV1VGQldTeHhRa0ZCWVN4SFFVRmlMRU5CUVd4Q08wRkJRMEVzWVVGQlVTeFRRVUZFTEVkQlFXTXNWVUZCVlN4UFFVRjRRaXhIUVVGclF5eERRVUY2UXp0QlFVTkVPMEZCUTBZc1J5SXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JTWlc1a1pYSmxjaUJtY205dElDY3VMaThuTzF4dWFXMXdiM0owSUdKMWFXeGtJR1p5YjIwZ0p5NHZZblZwYkdRbk8xeHVhVzF3YjNKMElIUnlZVzV6Wm05eWJWQnliM0J6SUdaeWIyMGdKeTR1TDJOemN5OTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVhVzF3YjNKMElIWmhiSFZsVkhsd1pVMWhjQ0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6Snp0Y2JtbHRjRzl5ZENCN0lITmxkRVJQVFVGMGRISnpJSDBnWm5KdmJTQW5MaTR2TGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTJ4aGMzTWdVMVpIVW1WdVpHVnlaWElnWlhoMFpXNWtjeUJTWlc1a1pYSmxjaUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ2MzVndaWElvY0hKdmNITXBPMXh1WEc0Z0lDQWdZMjl1YzNRZ2V5QjRMQ0I1TENCM2FXUjBhQ3dnYUdWcFoyaDBJSDBnUFNCd2NtOXdjeTVsYkdWdFpXNTBMbWRsZEVKQ2IzZ29LVHRjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblJFYVcxbGJuTnBiMjV6SUQwZ2V5QjRMQ0I1TENCM2FXUjBhQ3dnYUdWcFoyaDBJSDA3WEc0Z0lIMWNibHh1SUNCdmJsSmxibVJsY2lncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdWc1pXMWxiblFnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ1kyOXVjM1FnWVhSMGNuTWdQU0JpZFdsc1pDaDBhR2x6TG5OMFlYUmxMQ0IwYUdsekxtVnNaVzFsYm5SRWFXMWxibk5wYjI1ektUdGNiaUFnSUNCelpYUkVUMDFCZEhSeWN5aGxiR1Z0Wlc1MExDQmhkSFJ5Y3lrN1hHNGdJSDFjYmx4dUlDQnZibEpsWVdRb2EyVjVLU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmxiR1Z0Wlc1MElIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tDRjBjbUZ1YzJadmNtMVFjbTl3YzF0clpYbGRLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdaV3hsYldWdWRDNW5aWFJCZEhSeWFXSjFkR1VvYTJWNUtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnWTI5dWMzUWdkbUZzZFdWVWVYQmxJRDBnZG1Gc2RXVlVlWEJsVFdGd1cydGxlVjA3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdLSFpoYkhWbFZIbHdaU2tnUHlCMllXeDFaVlI1Y0dVdVpHVm1ZWFZzZENBNklEQTdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlDaGxiR1Z0Wlc1MExDQndjbTl3Y3lrZ2UxeHVJQ0J5WlhSMWNtNGdibVYzSUZOV1IxSmxibVJsY21WeUtIdGNiaUFnSUNCbGJHVnRaVzUwTEZ4dUlDQWdJQzR1TG5CeWIzQnpYRzRnSUgwcE8xeHVmVnh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1BhdGhSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudFxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU1ZHUGF0aFJlbmRlcmVyID0gZnVuY3Rpb24gKF9SZW5kZXJlcikge1xuICBfaW5oZXJpdHMoU1ZHUGF0aFJlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIFNWR1BhdGhSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTVkdQYXRoUmVuZGVyZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIHZhciBfcHJvcHMkZWxlbWVudCRnZXRCQm8gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKTtcblxuICAgIHZhciB4ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLng7XG4gICAgdmFyIHkgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueTtcbiAgICB2YXIgd2lkdGggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ud2lkdGg7XG4gICAgdmFyIGhlaWdodCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby5oZWlnaHQ7XG5cbiAgICBfdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5LFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICBwYXRoTGVuZ3RoOiBwcm9wcy5lbGVtZW50LmdldFRvdGFsTGVuZ3RoKClcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFNWR1BhdGhSZW5kZXJlci5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcigpIHtcbiAgICB2YXIgcGF0aExlbmd0aCA9IHRoaXMuZWxlbWVudERpbWVuc2lvbnMucGF0aExlbmd0aDtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgICgwLCBfdXRpbHMuc2V0RE9NQXR0cnMpKGVsZW1lbnQsICgwLCBfYnVpbGQyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIHBhdGhMZW5ndGgpKTtcbiAgfTtcblxuICBTVkdQYXRoUmVuZGVyZXIucHJvdG90eXBlLm9uUmVhZCA9IGZ1bmN0aW9uIG9uUmVhZChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5lbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICB9O1xuXG4gIHJldHVybiBTVkdQYXRoUmVuZGVyZXI7XG59KF8yLmRlZmF1bHQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkxYQmhkR2d2YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08ydENRVFpDWlN4VlFVRlZMRTlCUVZZc1JVRkJiVUlzUzBGQmJrSXNSVUZCTUVJN1FVRkRka01zVTBGQlR5eEpRVUZKTEdWQlFVbzdRVUZEVER0QlFVUkxMRXRCUlVZc1MwRkdSU3hGUVVGUU8wRkJTVVFzUXpzN1FVRnNRMFE3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN096czdPMGxCUlUwc1pUczdPMEZCUTBvc01rSkJRVmtzUzBGQldpeEZRVUZ0UWp0QlFVRkJPenRCUVVGQkxHbEVRVU5xUWl4eFFrRkJUU3hMUVVGT0xFTkJSR2xDT3p0QlFVRkJMR2REUVVkbExFMUJRVTBzVDBGQlRpeERRVUZqTEU5QlFXUXNSVUZJWmpzN1FVRkJRU3hSUVVkVUxFTkJTRk1zZVVKQlIxUXNRMEZJVXp0QlFVRkJMRkZCUjA0c1EwRklUU3g1UWtGSFRpeERRVWhOTzBGQlFVRXNVVUZIU0N4TFFVaEhMSGxDUVVkSUxFdEJTRWM3UVVGQlFTeFJRVWRKTEUxQlNFb3NlVUpCUjBrc1RVRklTanM3UVVGSmFrSXNWVUZCU3l4cFFrRkJUQ3hIUVVGNVFqdEJRVU4yUWl4VlFVUjFRanRCUVVWMlFpeFZRVVoxUWp0QlFVZDJRaXhyUWtGSWRVSTdRVUZKZGtJc2IwSkJTblZDTzBGQlMzWkNMR3RDUVVGWkxFMUJRVTBzVDBGQlRpeERRVUZqTEdOQlFXUTdRVUZNVnl4TFFVRjZRanRCUVVwcFFqdEJRVmRzUWpzN05FSkJSVVFzVVN4MVFrRkJWenRCUVVGQkxGRkJRMFFzVlVGRVF5eEhRVU5qTEV0QlFVc3NhVUpCUkc1Q0xFTkJRMFFzVlVGRVF6dEJRVUZCTEZGQlJVUXNUMEZHUXl4SFFVVlhMRXRCUVVzc1MwRkdhRUlzUTBGRlJDeFBRVVpET3p0QlFVZFVMRFJDUVVGWkxFOUJRVm9zUlVGQmNVSXNjVUpCUVUwc1MwRkJTeXhMUVVGWUxFVkJRV3RDTEZWQlFXeENMRU5CUVhKQ08wRkJRMFFzUnpzN05FSkJSVVFzVFN4dFFrRkJUeXhITEVWQlFVczdRVUZEVml4WFFVRlBMRXRCUVVzc1MwRkJUQ3hEUVVGWExFOUJRVmdzUTBGQmJVSXNXVUZCYmtJc1EwRkJaME1zUjBGQmFFTXNRMEZCVUR0QlFVTkVMRWNpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1VtVnVaR1Z5WlhJZ1puSnZiU0FuTGk0dkp6dGNibWx0Y0c5eWRDQmlkV2xzWkNCbWNtOXRJQ2N1TDJKMWFXeGtKenRjYm1sdGNHOXlkQ0I3SUhObGRFUlBUVUYwZEhKeklIMGdabkp2YlNBbkxpNHZMaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMnhoYzNNZ1UxWkhVR0YwYUZKbGJtUmxjbVZ5SUdWNGRHVnVaSE1nVW1WdVpHVnlaWElnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lITjFjR1Z5S0hCeWIzQnpLVHRjYmx4dUlDQWdJR052Ym5OMElIc2dlQ3dnZVN3Z2QybGtkR2dzSUdobGFXZG9kQ0I5SUQwZ2NISnZjSE11Wld4bGJXVnVkQzVuWlhSQ1FtOTRLQ2s3WEc0Z0lDQWdkR2hwY3k1bGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lBOUlIdGNiaUFnSUNBZ0lIZ3NYRzRnSUNBZ0lDQjVMRnh1SUNBZ0lDQWdkMmxrZEdnc1hHNGdJQ0FnSUNCb1pXbG5hSFFzWEc0Z0lDQWdJQ0J3WVhSb1RHVnVaM1JvT2lCd2NtOXdjeTVsYkdWdFpXNTBMbWRsZEZSdmRHRnNUR1Z1WjNSb0tDbGNiaUFnSUNCOU8xeHVJQ0I5WEc1Y2JpQWdiMjVTWlc1a1pYSW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QndZWFJvVEdWdVozUm9JSDBnUFNCMGFHbHpMbVZzWlcxbGJuUkVhVzFsYm5OcGIyNXpPMXh1SUNBZ0lHTnZibk4wSUhzZ1pXeGxiV1Z1ZENCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmlBZ0lDQnpaWFJFVDAxQmRIUnljeWhsYkdWdFpXNTBMQ0JpZFdsc1pDaDBhR2x6TG5OMFlYUmxMQ0J3WVhSb1RHVnVaM1JvS1NrN1hHNGdJSDFjYmx4dUlDQnZibEpsWVdRb2EyVjVLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Y0hKdmNITXVaV3hsYldWdWRDNW5aWFJCZEhSeWFXSjFkR1VvYTJWNUtUdGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQW9aV3hsYldWdWRDd2djSEp2Y0hNcElIdGNiaUFnY21WMGRYSnVJRzVsZHlCVFZrZFFZWFJvVW1WdVpHVnlaWElvZTF4dUlDQWdJR1ZzWlcxbGJuUXNYRzRnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdmU2s3WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zcGxpdENvbG9yVmFsdWVzID0gc3BsaXRDb2xvclZhbHVlcztcbnZhciB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbn07XG5cbnZhciBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbnZhciBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbnZhciBIQVNfUEVSRk9STUFOQ0VfTk9XID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3c7XG5cbi8qXG4gIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNhbWVsVG9EYXNoID0gZXhwb3J0cy5jYW1lbFRvRGFzaCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qXG4gIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gIFxuICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xudmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy5jdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbnZhciBzZXRET01BdHRycyA9IGV4cG9ydHMuc2V0RE9NQXR0cnMgPSBmdW5jdGlvbiAoZWxlbWVudCwgYXR0cnMpIHtcbiAgZm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfVxuICB9XG59O1xuLypcbiAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRDb21tYURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRDb21tYURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBhbnkgYXJndW1lbnQgZm9yIGB0ZXJtYFxuICogYGNvbnRhaW5zKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xudmFyIGNvbnRhaW5zID0gZXhwb3J0cy5jb250YWlucyA9IGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBpc1N0cmluZyh0ZXJtKSAmJiB2LmluZGV4T2YodGVybSkgIT09IC0xO1xuICB9O1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayB0byBzZWUgaWYgYW4gYXJndW1lbnQgaXNcbiAqICB0aGUgZmlyc3QgY2hhcmFjdGVycyBpbiB0aGUgcHJvdmlkZWQgYHRlcm1gXG4gKiBgaXNGaXJzdENoYXJzKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xudmFyIGlzRmlyc3RDaGFycyA9IGV4cG9ydHMuaXNGaXJzdENoYXJzID0gZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSA9PT0gMDtcbiAgfTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgdW5pdCB2YWx1ZSB0eXBlXG4gKi9cbnZhciBjcmVhdGVVbml0VHlwZSA9IGV4cG9ydHMuY3JlYXRlVW5pdFR5cGUgPSBmdW5jdGlvbiAodHlwZSwgdHJhbnNmb3JtKSB7XG4gIHJldHVybiB7XG4gICAgdGVzdDogY29udGFpbnModHlwZSksXG4gICAgcGFyc2U6IHBhcnNlRmxvYXQsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgfTtcbn07XG5cbi8qXG4gIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbnZhciBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBzcGxpdCBjb2xvclxuICogdmFsdWVzIGZyb20gc3RyaW5nIGludG8gYW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcbiAqIGBtYXBBcnJheVRvT2JqZWN0KFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXSkoJ3JnYmEoMCwwLDApJylgXG4gKi9cbmZ1bmN0aW9uIHNwbGl0Q29sb3JWYWx1ZXModGVybXMpIHtcbiAgdmFyIG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICB2YXIgdmFsdWVzQXJyYXkgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHYpKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgdmFsdWVzW3Rlcm1zW2ldXSA9IHZhbHVlc0FycmF5W2ldICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KHZhbHVlc0FycmF5W2ldKSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcbn1cblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xudmFyIGlzQXJyYXkgPSBleHBvcnRzLmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbnZhciBpc0Z1bmMgPSBleHBvcnRzLmlzRnVuYyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG52YXIgaXNOdW0gPSBleHBvcnRzLmlzTnVtID0gZnVuY3Rpb24gKG51bSkge1xuICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbnZhciBpc09iaiA9IGV4cG9ydHMuaXNPYmogPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59O1xuXG52YXIgaXNIZXggPSBleHBvcnRzLmlzSGV4ID0gaXNGaXJzdENoYXJzKCcjJyk7XG52YXIgaXNSZ2IgPSBleHBvcnRzLmlzUmdiID0gaXNGaXJzdENoYXJzKCdyZ2InKTtcbnZhciBpc0hzbCA9IGV4cG9ydHMuaXNIc2wgPSBpc0ZpcnN0Q2hhcnMoJ2hzbCcpO1xudmFyIGlzQ29sb3IgPSBleHBvcnRzLmlzQ29sb3IgPSBmdW5jdGlvbiAodikge1xuICByZXR1cm4gaXNIZXgodikgfHwgaXNSZ2IodikgfHwgaXNIc2wodik7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRYUnBiSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08xRkJOa1ZuUWl4blFpeEhRVUZCTEdkQ08wRkJOMFZvUWl4SlFVRk5MRlZCUVZVc1ZVRkJReXhSUVVGRU8wRkJRVUVzVTBGQll5eFBRVUZQTEZOQlFWQXNRMEZCYVVJc1VVRkJha0lzUTBGQk1FSXNTVUZCTVVJc1EwRkJLMElzVVVGQkwwSXNSVUZCZVVNc1MwRkJla01zUTBGQkswTXNRMEZCTDBNc1JVRkJhMFFzUTBGQlF5eERRVUZ1UkN4RFFVRmtPMEZCUVVFc1EwRkJhRUk3TzBGQlJVRXNTVUZCVFN4eFFrRkJjVUlzYVVKQlFUTkNPMEZCUTBFc1NVRkJUU3h0UWtGQmJVSXNUMEZCZWtJN1FVRkRRU3hKUVVGTkxITkNRVUYxUWl4UFFVRlBMRmRCUVZBc1MwRkJkVUlzVjBGQmRrSXNTVUZCYzBNc1dVRkJXU3hIUVVFdlJUczdPenM3T3pzN1FVRlJUeXhKUVVGTkxHOURRVUZqTEZWQlFVTXNUVUZCUkR0QlFVRkJMRk5CUVZrc1QwRkJUeXhQUVVGUUxFTkJRV1VzYTBKQlFXWXNSVUZCYlVNc1owSkJRVzVETEVWQlFYRkVMRmRCUVhKRUxFVkJRVm83UVVGQlFTeERRVUZ3UWpzN096czdPenRCUVU5QkxFbEJRVTBzYjBOQlFXTXNjMEpCUVhOQ08wRkJRVUVzVTBGQlRTeFpRVUZaTEVkQlFWb3NSVUZCVGp0QlFVRkJMRU5CUVhSQ0xFZEJRV2RFTzBGQlFVRXNVMEZCVFN4SlFVRkpMRWxCUVVvc1IwRkJWeXhQUVVGWUxFVkJRVTQ3UVVGQlFTeERRVUZ3UlRzN1FVRkZRU3hKUVVGTkxHOURRVUZqTEZWQlFVTXNUMEZCUkN4RlFVRlZMRXRCUVZZc1JVRkJiMEk3UVVGRE4wTXNUMEZCU3l4SlFVRkpMRWRCUVZRc1NVRkJaMElzUzBGQmFFSXNSVUZCZFVJN1FVRkRja0lzVVVGQlNTeE5RVUZOTEdOQlFVNHNRMEZCY1VJc1IwRkJja0lzUTBGQlNpeEZRVUVyUWp0QlFVTTNRaXhqUVVGUkxGbEJRVklzUTBGQmNVSXNSMEZCY2tJc1JVRkJNRUlzVFVGQlRTeEhRVUZPTEVOQlFURkNPMEZCUTBRN1FVRkRSanRCUVVOR0xFTkJUazA3T3pzN096czdPenRCUVdWQkxFbEJRVTBzYjBSQlFYTkNMRlZCUVVNc1MwRkJSRHRCUVVGQkxGTkJRVmNzVTBGQlV5eExRVUZVTEVsQlFXdENMRTFCUVUwc1MwRkJUaXhEUVVGWkxFMUJRVm9zUTBGQmJFSXNSMEZCZDBNc1EwRkJReXhMUVVGRUxFTkJRVzVFTzBGQlFVRXNRMEZCTlVJN096czdPenRCUVUxQkxFbEJRVTBzT0VKQlFWY3NWVUZCUXl4SlFVRkVPMEZCUVVFc1UwRkJWU3hWUVVGRExFTkJRVVFzUlVGQlR6dEJRVU4yUXl4WFFVRlJMRk5CUVZNc1NVRkJWQ3hMUVVGclFpeEZRVUZGTEU5QlFVWXNRMEZCVlN4SlFVRldMRTFCUVc5Q0xFTkJRVU1zUTBGQkwwTTdRVUZEUkN4SFFVWjFRanRCUVVGQkxFTkJRV3BDT3pzN096czdPMEZCVTBFc1NVRkJUU3h6UTBGQlpTeFZRVUZETEVsQlFVUTdRVUZCUVN4VFFVRlZMRlZCUVVNc1EwRkJSQ3hGUVVGUE8wRkJRek5ETEZkQlFWRXNVMEZCVXl4SlFVRlVMRXRCUVd0Q0xFVkJRVVVzVDBGQlJpeERRVUZWTEVsQlFWWXNUVUZCYjBJc1EwRkJPVU03UVVGRFJDeEhRVVl5UWp0QlFVRkJMRU5CUVhKQ096czdPenRCUVU5QkxFbEJRVTBzTUVOQlFXbENMRlZCUVVNc1NVRkJSQ3hGUVVGUExGTkJRVkFzUlVGQmNVSTdRVUZEYWtRc1UwRkJUenRCUVVOTUxGVkJRVTBzVTBGQlV5eEpRVUZVTEVOQlJFUTdRVUZGVEN4WFFVRlBMRlZCUmtZN1FVRkhURHRCUVVoTExFZEJRVkE3UVVGTFJDeERRVTVOT3pzN096czdRVUZaUVN4SlFVRk5MR3RGUVVFMlFpeFZRVUZETEV0QlFVUTdRVUZCUVN4VFFVRlhMRTFCUVUwc1UwRkJUaXhEUVVGblFpeE5RVUZOTEU5QlFVNHNRMEZCWXl4SFFVRmtMRWxCUVhGQ0xFTkJRWEpETEVWQlFYZERMRTFCUVUwc1YwRkJUaXhEUVVGclFpeEhRVUZzUWl4RFFVRjRReXhEUVVGWU8wRkJRVUVzUTBGQmJrTTdPenM3T3pzN1FVRlBRU3hUUVVGVExHZENRVUZVTEVOQlFUQkNMRXRCUVRGQ0xFVkJRV2xETzBGQlEzUkRMRTFCUVUwc1YwRkJWeXhOUVVGTkxFMUJRWFpDT3p0QlFVVkJMRk5CUVU4c1ZVRkJWU3hEUVVGV0xFVkJRV0U3UVVGRGJFSXNVVUZCVFN4VFFVRlRMRVZCUVdZN1FVRkRRU3hSUVVGTkxHTkJRV01zYjBKQlFXOUNMREpDUVVFeVFpeERRVUV6UWl4RFFVRndRaXhEUVVGd1FqczdRVUZGUVN4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGaUxFVkJRV2RDTEVsQlFVa3NVVUZCY0VJc1JVRkJPRUlzUjBGQk9VSXNSVUZCYlVNN1FVRkRha01zWVVGQlR5eE5RVUZOTEVOQlFVNHNRMEZCVUN4SlFVRnZRaXhaUVVGWkxFTkJRVm9zVFVGQmJVSXNVMEZCY0VJc1IwRkJhVU1zVjBGQlZ5eFpRVUZaTEVOQlFWb3NRMEZCV0N4RFFVRnFReXhIUVVFNFJDeERRVUZxUmp0QlFVTkVPenRCUVVWRUxGZEJRVThzVFVGQlVEdEJRVU5FTEVkQlZFUTdRVUZWUkRzN096czdPenM3UVVGUlRTeEpRVUZOTERSQ1FVRlZMRlZCUVVNc1IwRkJSRHRCUVVGQkxGTkJRVk1zVVVGQlVTeEhRVUZTTEUxQlFXbENMRTlCUVRGQ08wRkJRVUVzUTBGQmFFSTdPenM3T3pzN08wRkJVVUVzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRWRCUVVRN1FVRkJRU3hUUVVGVExGRkJRVkVzUjBGQlVpeE5RVUZwUWl4VlFVRXhRanRCUVVGQkxFTkJRV1k3T3pzN096czdPMEZCVVVFc1NVRkJUU3gzUWtGQlVTeFZRVUZETEVkQlFVUTdRVUZCUVN4VFFVRlRMRTlCUVU4c1IwRkJVQ3hMUVVGbExGRkJRWGhDTzBGQlFVRXNRMEZCWkRzN096czdPenM3UVVGUlFTeEpRVUZOTEhkQ1FVRlJMRlZCUVVNc1IwRkJSRHRCUVVGQkxGTkJRVk1zVDBGQlR5eEhRVUZRTEV0QlFXVXNVVUZCZUVJN1FVRkJRU3hEUVVGa096czdPenM3T3p0QlFWRkJMRWxCUVUwc09FSkJRVmNzVlVGQlF5eEhRVUZFTzBGQlFVRXNVMEZCVXl4UFFVRlBMRWRCUVZBc1MwRkJaU3hSUVVGNFFqdEJRVUZCTEVOQlFXcENPenRCUVVWQkxFbEJRVTBzZDBKQlFWRXNZVUZCWVN4SFFVRmlMRU5CUVdRN1FVRkRRU3hKUVVGTkxIZENRVUZSTEdGQlFXRXNTMEZCWWl4RFFVRmtPMEZCUTBFc1NVRkJUU3gzUWtGQlVTeGhRVUZoTEV0QlFXSXNRMEZCWkR0QlFVTkJMRWxCUVUwc05FSkJRVlVzVlVGQlF5eERRVUZFTzBGQlFVRXNVMEZCVVN4TlFVRk5MRU5CUVU0c1MwRkJXU3hOUVVGTkxFTkJRVTRzUTBGQldpeEpRVUYzUWl4TlFVRk5MRU5CUVU0c1EwRkJhRU03UVVGQlFTeERRVUZvUWlJc0ltWnBiR1VpT2lKMWRHbHNjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbU52Ym5OMElIWmhjbFI1Y0dVZ1BTQW9kbUZ5YVdGaWJHVXBJRDArSUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1ZEc5VGRISnBibWN1WTJGc2JDaDJZWEpwWVdKc1pTa3VjMnhwWTJVb09Dd2dMVEVwTzF4dVhHNWpiMjV6ZENCRFFVMUZURjlEUVZORlgxQkJWRlJGVWs0Z1BTQXZLRnRoTFhwZEtTaGJRUzFhWFNrdlp6dGNibU52Ym5OMElGSkZVRXhCUTBWZlZFVk5VRXhCVkVVZ1BTQW5KREV0SkRJbk8xeHVZMjl1YzNRZ1NFRlRYMUJGVWtaUFVrMUJUa05GWDA1UFZ5QTlJQ2gwZVhCbGIyWWdjR1Z5Wm05eWJXRnVZMlVnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhCbGNtWnZjbTFoYm1ObExtNXZkeWs3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnWTJGdFpXeERZWE5sSUhSdklHUmhjMmd0WTJGelpWeHVYRzRnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNCQWNtVjBkWEp1SUZ0emRISnBibWRkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdOaGJXVnNWRzlFWVhOb0lEMGdLSE4wY21sdVp5a2dQVDRnYzNSeWFXNW5MbkpsY0d4aFkyVW9RMEZOUlV4ZlEwRlRSVjlRUVZSVVJWSk9MQ0JTUlZCTVFVTkZYMVJGVFZCTVFWUkZLUzUwYjB4dmQyVnlRMkZ6WlNncE8xeHVYRzR2S2x4dUlDQkhaVzVsY21GMFpTQmpkWEp5Wlc1MElIUnBiV1Z6ZEdGdGNGeHVJQ0JjYmlBZ1FISmxkSFZ5YmlCYmRHbHRaWE4wWVcxd1hUb2dRM1Z5Y21WdWRDQlZUa2xZSUhScGJXVnpkR0Z0Y0Z4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCamRYSnlaVzUwVkdsdFpTQTlJRWhCVTE5UVJWSkdUMUpOUVU1RFJWOU9UMWNnUHlBb0tTQTlQaUJ3WlhKbWIzSnRZVzVqWlM1dWIzY29LU0E2SUNncElEMCtJRzVsZHlCRVlYUmxLQ2t1WjJWMFZHbHRaU2dwTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzJWMFJFOU5RWFIwY25NZ1BTQW9aV3hsYldWdWRDd2dZWFIwY25NcElEMCtJSHRjYmlBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUdGMGRISnpLU0I3WEc0Z0lDQWdhV1lnS0dGMGRISnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUdWc1pXMWxiblF1YzJWMFFYUjBjbWxpZFhSbEtHdGxlU3dnWVhSMGNuTmJhMlY1WFNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5TzF4dUx5cGNiaUFnVTNCc2FYUWdZMjl0YldFdFpHVnNhVzFwZEdWa0lITjBjbWx1WjF4dVhHNGdJRndpWm05dkxHSmhjbHdpSUMwK0lGdGNJbVp2YjF3aUxDQmNJbUpoY2x3aVhWeHVYRzRnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNCQWNtVjBkWEp1SUZ0aGNuSmhlVjFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCc2FYUkRiMjF0WVVSbGJHbHRhWFJsWkNBOUlDaDJZV3gxWlNrZ1BUNGdhWE5UZEhKcGJtY29kbUZzZFdVcElEOGdkbUZzZFdVdWMzQnNhWFFvTHl4Y1hITXFMeWtnT2lCYmRtRnNkV1ZkTzF4dVhHNHZLaXBjYmlBcUlDQlNaWFIxY201eklHRWdablZ1WTNScGIyNGdkR2hoZENCM2FXeHNJR05vWldOcklHRnVlU0JoY21kMWJXVnVkQ0JtYjNJZ1lIUmxjbTFnWEc0Z0tpQmdZMjl1ZEdGcGJuTW9KMjVsWldSc1pTY3BLQ2RvWVhsemRHRmpheWNwWUZ4dUlDb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyOXVkR0ZwYm5NZ1BTQW9kR1Z5YlNrZ1BUNGdLSFlwSUQwK0lIdGNiaUFnY21WMGRYSnVJQ2hwYzFOMGNtbHVaeWgwWlhKdEtTQW1KaUIyTG1sdVpHVjRUMllvZEdWeWJTa2dJVDA5SUMweEtUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ0lGSmxkSFZ5Ym5NZ1lTQm1kVzVqZEdsdmJpQjBhR0YwSUhkcGJHd2dZMmhsWTJzZ2RHOGdjMlZsSUdsbUlHRnVJR0Z5WjNWdFpXNTBJR2x6WEc0Z0tpQWdkR2hsSUdacGNuTjBJR05vWVhKaFkzUmxjbk1nYVc0Z2RHaGxJSEJ5YjNacFpHVmtJR0IwWlhKdFlGeHVJQ29nWUdselJtbHljM1JEYUdGeWN5Z25ibVZsWkd4bEp5a29KMmhoZVhOMFlXTnJKeWxnWEc0Z0tpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwWnBjbk4wUTJoaGNuTWdQU0FvZEdWeWJTa2dQVDRnS0hZcElEMCtJSHRjYmlBZ2NtVjBkWEp1SUNocGMxTjBjbWx1WnloMFpYSnRLU0FtSmlCMkxtbHVaR1Y0VDJZb2RHVnliU2tnUFQwOUlEQXBPMXh1ZlR0Y2JseHVMeW9xWEc0Z0tpQkRjbVZoZEdVZ1lTQjFibWwwSUhaaGJIVmxJSFI1Y0dWY2JpQXFMMXh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlZWdWFYUlVlWEJsSUQwZ0tIUjVjR1VzSUhSeVlXNXpabTl5YlNrZ1BUNGdlMXh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJSFJsYzNRNklHTnZiblJoYVc1ektIUjVjR1VwTEZ4dUlDQWdJSEJoY25ObE9pQndZWEp6WlVac2IyRjBMRnh1SUNBZ0lIUnlZVzV6Wm05eWJWeHVJQ0I5TzF4dWZUdGNibHh1THlwY2JpQWdSMlYwSUhaaGJIVmxJR1p5YjIwZ1puVnVZM1JwYjI0Z2MzUnlhVzVuWEc0Z0lGd2lkSEpoYm5Oc1lYUmxXQ2d5TUhCNEtWd2lJQzArSUZ3aU1qQndlRndpWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdkbGRGWmhiSFZsUm5KdmJVWjFibU4wYVc5dVUzUnlhVzVuSUQwZ0tIWmhiSFZsS1NBOVBpQjJZV3gxWlM1emRXSnpkSEpwYm1jb2RtRnNkV1V1YVc1a1pYaFBaaWduS0NjcElDc2dNU3dnZG1Gc2RXVXViR0Z6ZEVsdVpHVjRUMllvSnlrbktTazdYRzVjYmk4cUtseHVJQ29nUTNKbFlYUmxjeUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdkMmxzYkNCemNHeHBkQ0JqYjJ4dmNseHVJQ29nZG1Gc2RXVnpJR1p5YjIwZ2MzUnlhVzVuSUdsdWRHOGdZVzRnYjJKcVpXTjBJRzltSUhCeWIzQmxjblJwWlhOY2JpQXFJR0J0WVhCQmNuSmhlVlJ2VDJKcVpXTjBLRnNuY21Wa0p5d2dKMmR5WldWdUp5d2dKMkpzZFdVblhTa29KM0puWW1Fb01Dd3dMREFwSnlsZ1hHNGdLaTljYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ6Y0d4cGRFTnZiRzl5Vm1Gc2RXVnpLSFJsY20xektTQjdYRzRnSUdOdmJuTjBJRzUxYlZSbGNtMXpJRDBnZEdWeWJYTXViR1Z1WjNSb08xeHVYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaUFvZGlrZ2UxeHVJQ0FnSUdOdmJuTjBJSFpoYkhWbGN5QTlJSHQ5TzF4dUlDQWdJR052Ym5OMElIWmhiSFZsYzBGeWNtRjVJRDBnYzNCc2FYUkRiMjF0WVVSbGJHbHRhWFJsWkNoblpYUldZV3gxWlVaeWIyMUdkVzVqZEdsdmJsTjBjbWx1WnloMktTazdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlZSbGNtMXpPeUJwS3lzcElIdGNiaUFnSUNBZ0lIWmhiSFZsYzF0MFpYSnRjMXRwWFYwZ1BTQW9kbUZzZFdWelFYSnlZWGxiYVYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnUHlCd1lYSnpaVVpzYjJGMEtIWmhiSFZsYzBGeWNtRjVXMmxkS1NBNklERTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhaaGJIVmxjenRjYmlBZ2ZUdGNibjFjYmx4dUx5cGNiaUFnU1hNZ2RYUnBiSE1nZG1GeUlHRnVJR0Z5Y21GNUlEOGdYRzRnSUZ4dUlDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjFkR2xzY3k1MllYSlVlWEJsSUQwOVBTQW5RWEp5WVhrblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpRWEp5WVhrZ1BTQW9ZWEp5S1NBOVBpQjJZWEpVZVhCbEtHRnljaWtnUFQwOUlDZEJjbkpoZVNjN1hHNWNiaThxWEc0Z0lFbHpJSFYwYVd4eklIWmhjaUJoSUdaMWJtTjBhVzl1SUQ4Z1hHNGdJRnh1SUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMWRHbHNjeTUyWVhKVWVYQmxJRDA5UFNBblJuVnVZM1JwYjI0blhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpSblZ1WXlBOUlDaHZZbW9wSUQwK0lIWmhjbFI1Y0dVb2IySnFLU0E5UFQwZ0owWjFibU4wYVc5dUp6dGNibHh1THlwY2JpQWdTWE1nZFhScGJITWdkbUZ5SUdFZ2JuVnRZbVZ5UDF4dUlDQmNiaUFnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZEhsd1pXOW1JRDA5UFNBbmJuVnRZbVZ5SjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwNTFiU0E5SUNodWRXMHBJRDArSUhSNWNHVnZaaUJ1ZFcwZ1BUMDlJQ2R1ZFcxaVpYSW5PMXh1WEc0dktseHVJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lXNGdiMkpxWldOMFAxeHVJQ0JjYmlBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RIbHdaVzltSUQwOVBTQW5iMkpxWldOMEoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMDlpYWlBOUlDaHZZbW9wSUQwK0lIUjVjR1Z2WmlCdlltb2dQVDA5SUNkdlltcGxZM1FuTzF4dVhHNHZLbHh1SUNCSmN5QjFkR2xzY3lCMllYSWdZU0J6ZEhKcGJtY2dQeUJjYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQnpkSElnUFQwOUlDZHpkSEpwYm1jblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpVM1J5YVc1bklEMGdLSE4wY2lrZ1BUNGdkSGx3Wlc5bUlITjBjaUE5UFQwZ0ozTjBjbWx1WnljN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwaGxlQ0E5SUdselJtbHljM1JEYUdGeWN5Z25JeWNwTzF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VW1kaUlEMGdhWE5HYVhKemRFTm9ZWEp6S0NkeVoySW5LVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnBjMGh6YkNBOUlHbHpSbWx5YzNSRGFHRnljeWduYUhOc0p5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkRiMnh2Y2lBOUlDaDJLU0E5UGlBb2FYTklaWGdvZGlrZ2ZId2dhWE5TWjJJb2Rpa2dmSHdnYVhOSWMyd29kaWtwTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNvbG9yID0gZXhwb3J0cy5oc2xhID0gZXhwb3J0cy5yZ2JhID0gZXhwb3J0cy5oZXggPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBoZXggPSBleHBvcnRzLmhleCA9IGZ1bmN0aW9uICh2KSB7XG4gIHZhciByID0gdm9pZCAwLFxuICAgICAgZyA9IHZvaWQgMCxcbiAgICAgIGIgPSB2b2lkIDA7XG5cbiAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgaWYgKHYubGVuZ3RoID4gNCkge1xuICAgIHIgPSB2LnN1YnN0cigxLCAyKTtcbiAgICBnID0gdi5zdWJzdHIoMywgMik7XG4gICAgYiA9IHYuc3Vic3RyKDUsIDIpO1xuXG4gICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgfSBlbHNlIHtcbiAgICByID0gdi5zdWJzdHIoMSwgMSk7XG4gICAgZyA9IHYuc3Vic3RyKDIsIDEpO1xuICAgIGIgPSB2LnN1YnN0cigzLCAxKTtcbiAgICByICs9IHI7XG4gICAgZyArPSBnO1xuICAgIGIgKz0gYjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgZ3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICBibHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgYWxwaGE6IDFcbiAgfTtcbn07XG5cbnZhciByZ2JhID0gZXhwb3J0cy5yZ2JhID0gKDAsIF91dGlscy5zcGxpdENvbG9yVmFsdWVzKShbJ3JlZCcsICdncmVlbicsICdibHVlJywgJ2FscGhhJ10pO1xuXG52YXIgaHNsYSA9IGV4cG9ydHMuaHNsYSA9ICgwLCBfdXRpbHMuc3BsaXRDb2xvclZhbHVlcykoWydodWUnLCAnc2F0dXJhdGlvbicsICdsaWdodG5lc3MnLCAnYWxwaGEnXSk7XG5cbnZhciBjb2xvciA9IGV4cG9ydHMuY29sb3IgPSBmdW5jdGlvbiAodikge1xuICBpZiAoKDAsIF91dGlscy5pc1JnYikodikpIHtcbiAgICByZXR1cm4gcmdiYSh2KTtcbiAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLmlzSGV4KSh2KSkge1xuICAgIHJldHVybiBoZXgodik7XG4gIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc0hzbCkodikpIHtcbiAgICByZXR1cm4gaHNsYSh2KTtcbiAgfVxuXG4gIHJldHVybiB2O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZjR0Z5YzJWeWN5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJPenRCUVVWUExFbEJRVTBzYjBKQlFVMHNWVUZCUXl4RFFVRkVMRVZCUVU4N1FVRkRlRUlzVFVGQlNTeFZRVUZLTzBGQlFVRXNUVUZCVHl4VlFVRlFPMEZCUVVFc1RVRkJWU3hWUVVGV096czdRVUZIUVN4TlFVRkpMRVZCUVVVc1RVRkJSaXhIUVVGWExFTkJRV1lzUlVGQmEwSTdRVUZEYUVJc1VVRkJTU3hGUVVGRkxFMUJRVVlzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCV2l4RFFVRktPMEZCUTBFc1VVRkJTU3hGUVVGRkxFMUJRVVlzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCV2l4RFFVRktPMEZCUTBFc1VVRkJTU3hGUVVGRkxFMUJRVVlzUTBGQlV5eERRVUZVTEVWQlFWa3NRMEZCV2l4RFFVRktPenM3UVVGSFJDeEhRVTVFTEUxQlRVODdRVUZEVEN4UlFVRkpMRVZCUVVVc1RVRkJSaXhEUVVGVExFTkJRVlFzUlVGQldTeERRVUZhTEVOQlFVbzdRVUZEUVN4UlFVRkpMRVZCUVVVc1RVRkJSaXhEUVVGVExFTkJRVlFzUlVGQldTeERRVUZhTEVOQlFVbzdRVUZEUVN4UlFVRkpMRVZCUVVVc1RVRkJSaXhEUVVGVExFTkJRVlFzUlVGQldTeERRVUZhTEVOQlFVbzdRVUZEUVN4VFFVRkxMRU5CUVV3N1FVRkRRU3hUUVVGTExFTkJRVXc3UVVGRFFTeFRRVUZMTEVOQlFVdzdRVUZEUkRzN1FVRkZSQ3hUUVVGUE8wRkJRMHdzVTBGQlN5eFRRVUZUTEVOQlFWUXNSVUZCV1N4RlFVRmFMRU5CUkVFN1FVRkZUQ3hYUVVGUExGTkJRVk1zUTBGQlZDeEZRVUZaTEVWQlFWb3NRMEZHUmp0QlFVZE1MRlZCUVUwc1UwRkJVeXhEUVVGVUxFVkJRVmtzUlVGQldpeERRVWhFTzBGQlNVd3NWMEZCVHp0QlFVcEdMRWRCUVZBN1FVRk5SQ3hEUVhwQ1RUczdRVUV5UWtFc1NVRkJUU3h6UWtGQlR5dzJRa0ZCYVVJc1EwRkJReXhMUVVGRUxFVkJRVkVzVDBGQlVpeEZRVUZwUWl4TlFVRnFRaXhGUVVGNVFpeFBRVUY2UWl4RFFVRnFRaXhEUVVGaU96dEJRVVZCTEVsQlFVMHNjMEpCUVU4c05rSkJRV2xDTEVOQlFVTXNTMEZCUkN4RlFVRlJMRmxCUVZJc1JVRkJjMElzVjBGQmRFSXNSVUZCYlVNc1QwRkJia01zUTBGQmFrSXNRMEZCWWpzN1FVRkZRU3hKUVVGTkxIZENRVUZSTEZWQlFVTXNRMEZCUkN4RlFVRlBPMEZCUXpGQ0xFMUJRVWtzYTBKQlFVMHNRMEZCVGl4RFFVRktMRVZCUVdNN1FVRkRXaXhYUVVGUExFdEJRVXNzUTBGQlRDeERRVUZRTzBGQlEwUXNSMEZHUkN4TlFVVlBMRWxCUVVrc2EwSkJRVTBzUTBGQlRpeERRVUZLTEVWQlFXTTdRVUZEYmtJc1YwRkJUeXhKUVVGSkxFTkJRVW9zUTBGQlVEdEJRVU5FTEVkQlJrMHNUVUZGUVN4SlFVRkpMR3RDUVVGTkxFTkJRVTRzUTBGQlNpeEZRVUZqTzBGQlEyNUNMRmRCUVU4c1MwRkJTeXhEUVVGTUxFTkJRVkE3UVVGRFJEczdRVUZGUkN4VFFVRlBMRU5CUVZBN1FVRkRSQ3hEUVZaTklpd2labWxzWlNJNkluQmhjbk5sY25NdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCemNHeHBkRU52Ykc5eVZtRnNkV1Z6TENCcGMxSm5ZaXdnYVhOSVpYZ3NJR2x6U0hOc0lIMGdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCb1pYZ2dQU0FvZGlrZ1BUNGdlMXh1SUNCc1pYUWdjaXdnWnl3Z1lqdGNibHh1SUNBdkx5QkpaaUIzWlNCb1lYWmxJRFlnWTJoaGNtRmpkR1Z5Y3l3Z2FXVWdJMFpHTURBd01GeHVJQ0JwWmlBb2RpNXNaVzVuZEdnZ1BpQTBLU0I3WEc0Z0lDQWdjaUE5SUhZdWMzVmljM1J5S0RFc0lESXBPMXh1SUNBZ0lHY2dQU0IyTG5OMVluTjBjaWd6TENBeUtUdGNiaUFnSUNCaUlEMGdkaTV6ZFdKemRISW9OU3dnTWlrN1hHNWNiaUFnTHk4Z1QzSWdkMlVnYUdGMlpTQXpJR05vWVhKaFkzUmxjbk1zSUdsbElDTkdNREJjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J5SUQwZ2RpNXpkV0p6ZEhJb01Td2dNU2s3WEc0Z0lDQWdaeUE5SUhZdWMzVmljM1J5S0RJc0lERXBPMXh1SUNBZ0lHSWdQU0IyTG5OMVluTjBjaWd6TENBeEtUdGNiaUFnSUNCeUlDczlJSEk3WEc0Z0lDQWdaeUFyUFNCbk8xeHVJQ0FnSUdJZ0t6MGdZanRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdjbVZrT2lCd1lYSnpaVWx1ZENoeUxDQXhOaWtzWEc0Z0lDQWdaM0psWlc0NklIQmhjbk5sU1c1MEtHY3NJREUyS1N4Y2JpQWdJQ0JpYkhWbE9pQndZWEp6WlVsdWRDaGlMQ0F4Tmlrc1hHNGdJQ0FnWVd4d2FHRTZJREZjYmlBZ2ZUdGNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J5WjJKaElEMGdjM0JzYVhSRGIyeHZjbFpoYkhWbGN5aGJKM0psWkNjc0lDZG5jbVZsYmljc0lDZGliSFZsSnl3Z0oyRnNjR2hoSjEwcE8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2FITnNZU0E5SUhOd2JHbDBRMjlzYjNKV1lXeDFaWE1vV3lkb2RXVW5MQ0FuYzJGMGRYSmhkR2x2Ymljc0lDZHNhV2RvZEc1bGMzTW5MQ0FuWVd4d2FHRW5YU2s3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYjJ4dmNpQTlJQ2gyS1NBOVBpQjdYRzRnSUdsbUlDaHBjMUpuWWloMktTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCeVoySmhLSFlwTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLR2x6U0dWNEtIWXBLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHaGxlQ2gyS1R0Y2JpQWdmU0JsYkhObElHbG1JQ2hwYzBoemJDaDJLU2tnZTF4dUlDQWdJSEpsZEhWeWJpQm9jMnhoS0hZcE8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlIWTdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9wYXJzZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG52YXIgaGFzUkFGID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRydWUgOiBmYWxzZTtcblxudmFyIG9uTmV4dEZyYW1lID0gdm9pZCAwO1xuXG5pZiAoaGFzUkFGKSB7XG4gIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9O1xufSBlbHNlIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvKlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgICBcbiAgICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcbiAgICAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgICBcbiAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgICAgXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgXG4gICAgICBNSVQgbGljZW5zZVxuICAgICovXG4gICAgdmFyIGxhc3RUaW1lID0gMDtcblxuICAgIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYuNyAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWUgKyB0aW1lVG9DYWxsO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGxhc3RUaW1lKTtcbiAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgIH07XG4gIH0pKCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9uTmV4dEZyYW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12YjI0dGJtVjRkQzFtY21GdFpTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkhRU3hKUVVGTkxGTkJRVlVzVDBGQlR5eE5RVUZRTEV0QlFXdENMRmRCUVd4Q0xFbEJRV2xETEU5QlFVOHNjVUpCUVhwRExFZEJRV3RGTEVsQlFXeEZMRWRCUVhsRkxFdEJRWGhHT3p0QlFVVkJMRWxCUVVrc2IwSkJRVW83TzBGQlJVRXNTVUZCU1N4TlFVRktMRVZCUVZrN1FVRkRWaXhuUWtGQll5eFZRVUZETEZGQlFVUTdRVUZCUVN4WFFVRmpMRTlCUVU4c2NVSkJRVkFzUTBGQk5rSXNVVUZCTjBJc1EwRkJaRHRCUVVGQkxFZEJRV1E3UVVGRlJDeERRVWhFTEUxQlIwODdRVUZCUVRzN096czdPenM3T3pzN096czdRVUZsVEN4UlFVRkpMRmRCUVZjc1EwRkJaanM3UVVGRlFTeHJRa0ZCWXl4VlFVRkRMRkZCUVVRc1JVRkJZenRCUVVNeFFpeFZRVUZOTEdOQlFXTXNTVUZCU1N4SlFVRktMRWRCUVZjc1QwRkJXQ3hGUVVGd1FqdEJRVU5CTEZWQlFVMHNZVUZCWVN4TFFVRkxMRWRCUVV3c1EwRkJVeXhEUVVGVUxFVkJRVmtzVVVGQlVTeGpRVUZqTEZGQlFYUkNMRU5CUVZvc1EwRkJia0k3TzBGQlJVRXNhVUpCUVZjc1kwRkJZeXhWUVVGNlFqczdRVUZGUVN4cFFrRkJWenRCUVVGQkxHVkJRVTBzVTBGQlV5eFJRVUZVTEVOQlFVNDdRVUZCUVN4UFFVRllMRVZCUVhGRExGVkJRWEpETzBGQlEwUXNTMEZRUkR0QlFXcENTenRCUVhsQ1RqczdhMEpCUldNc1Z5SXNJbVpwYkdVaU9pSnZiaTF1WlhoMExXWnlZVzFsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQWdSR1YwWldOMElHRnVaQ0JzYjJGa0lHRnVJR0Z3Y0hKdmNISnBZWFJsSUdOc2IyTnJJSE5sZEhScGJtY2dabTl5SUhSb1pTQmxiblpwY205dWJXVnVkRnh1S2k5Y2JtTnZibk4wSUdoaGMxSkJSaUE5SUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUIzYVc1a2IzY3VjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsS1NBL0lIUnlkV1VnT2lCbVlXeHpaVHRjYmx4dWJHVjBJRzl1VG1WNGRFWnlZVzFsTzF4dVhHNXBaaUFvYUdGelVrRkdLU0I3WEc0Z0lHOXVUbVY0ZEVaeVlXMWxJRDBnS0dOaGJHeGlZV05yS1NBOVBpQjNhVzVrYjNjdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLR05oYkd4aVlXTnJLVHRjYmx4dWZTQmxiSE5sSUh0Y2JpQWdMeXBjYmlBZ0lDQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VnY0c5c2VXWnBiR3hjYmlBZ0lDQmNiaUFnSUNCR2IzSWdTVVU0THprZ1JteHBibk4wYjI1bGN5QmhibVFnYm05dUxXSnliM2R6WlhJZ1pXNTJhWEp2Ym0xbGJuUnpYRzVjYmlBZ0lDQlVZV3RsYmlCbWNtOXRJRkJoZFd3Z1NYSnBjMmd1SUZkbEozWmxJSE4wY21sd2NHVmtJRzkxZENCallXNWpaV3hCYm1sdFlYUnBiMjVHY21GdFpTQmphR1ZqYTNNZ1ltVmpZWFZ6WlNCM1pTQmtiMjRuZENCbWIzZ2dkMmwwYUNCMGFHRjBYRzRnSUNBZ1hHNGdJQ0FnYUhSMGNEb3ZMM0JoZFd4cGNtbHphQzVqYjIwdk1qQXhNUzl5WlhGMVpYTjBZVzVwYldGMGFXOXVabkpoYldVdFptOXlMWE50WVhKMExXRnVhVzFoZEdsdVp5OWNiaUFnSUNCb2RIUndPaTh2YlhrdWIzQmxjbUV1WTI5dEwyVnRiMnhzWlhJdllteHZaeTh5TURFeEx6RXlMekl3TDNKbGNYVmxjM1JoYm1sdFlYUnBiMjVtY21GdFpTMW1iM0l0YzIxaGNuUXRaWEl0WVc1cGJXRjBhVzVuWEc0Z0lDQWdJRnh1SUNBZ0lISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0J3YjJ4NVptbHNiQ0JpZVNCRmNtbHJJRTNEdG14c1pYSXVJR1pwZUdWeklHWnliMjBnVUdGMWJDQkpjbWx6YUNCaGJtUWdWR2x1YnlCYWFXcGtaV3hjYmlBZ0lDQWdYRzRnSUNBZ1RVbFVJR3hwWTJWdWMyVmNiaUFnS2k5Y2JpQWdiR1YwSUd4aGMzUlVhVzFsSUQwZ01EdGNibHh1SUNCdmJrNWxlSFJHY21GdFpTQTlJQ2hqWVd4c1ltRmpheWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR04xY25KbGJuUlVhVzFsSUQwZ2JtVjNJRVJoZEdVb0tTNW5aWFJVYVcxbEtDazdYRzRnSUNBZ1kyOXVjM1FnZEdsdFpWUnZRMkZzYkNBOUlFMWhkR2d1YldGNEtEQXNJREUyTGpjZ0xTQW9ZM1Z5Y21WdWRGUnBiV1VnTFNCc1lYTjBWR2x0WlNrcE8xeHVYRzRnSUNBZ2JHRnpkRlJwYldVZ1BTQmpkWEp5Wlc1MFZHbHRaU0FySUhScGJXVlViME5oYkd3N1hHNWNiaUFnSUNCelpYUlVhVzFsYjNWMEtDZ3BJRDArSUdOaGJHeGlZV05yS0d4aGMzUlVhVzFsS1N3Z2RHbHRaVlJ2UTJGc2JDazdYRzRnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRzl1VG1WNGRFWnlZVzFsT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9vbi1uZXh0LWZyYW1lLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUmVuZGVyU3RlcDtcbmZ1bmN0aW9uIGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKSB7XG4gIC8qKlxuICAgKiBXZSB1c2UgdHdvIGFycmF5cywgb25lIGZvciB0aGlzIGZyYW1lIGFuZCBvbmUgdG8gcXVldWUgZm9yIHRoZVxuICAgKiBuZXh0IGZyYW1lLCByZXVzaW5nIGVhY2ggdG8gYXZvaWQgR0MuXG4gICAqIEB0eXBlIHtBcnJheX1cbiAgICovXG4gIHZhciBmdW5jdGlvbnNUb1J1biA9IFtdO1xuICB2YXIgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUgPSBbXTtcblxuICByZXR1cm4ge1xuICAgIHNjaGVkdWxlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHN0YXJ0UmVuZGVyTG9vcCgpO1xuICAgICAgLy8gSWYgdGhpcyBjYWxsYmFjayBpc24ndCBhbHJlYWR5IHNjaGVkdWxlZCB0byBydW4gbmV4dCBmcmFtZVxuICAgICAgaWYgKGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmluZGV4T2YoY2FsbGJhY2spID09PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY2FuY2VsOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciBpbmRleE9mQ2FsbGJhY2sgPSBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgIGlmIChpbmRleE9mQ2FsbGJhY2sgIT09IC0xKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLnNwbGljZShpbmRleE9mQ2FsbGJhY2ssIDEpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBwcm9jZXNzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIC8vIENsZWFyIG5leHQgZnJhbWUgbGlzdFxuICAgICAgdmFyIF9yZWYgPSBbZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUsIGZ1bmN0aW9uc1RvUnVuXTtcbiAgICAgIC8vIFN3YXAgdGhpcyBmcmFtZSBhbmQgbmV4dCBmcmFtZSBhcnJheXMgdG8gYXZvaWQgR0NcblxuICAgICAgZnVuY3Rpb25zVG9SdW4gPSBfcmVmWzBdO1xuICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUgPSBfcmVmWzFdO1xuICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUubGVuZ3RoID0gMDtcblxuICAgICAgLy8gRXhlY3V0ZSBhbGwgb2YgdGhpcyBmcmFtZSdzIGZ1bmN0aW9uc1xuICAgICAgdmFyIG51bVRoaXNGcmFtZSA9IGZ1bmN0aW9uc1RvUnVuLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGhpc0ZyYW1lOyBpKyspIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5baV0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OW1jbUZ0WlhONWJtTXZZM0psWVhSbExYSmxibVJsY2kxemRHVndMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRkJkMElzWjBJN1FVRkJWQ3hUUVVGVExHZENRVUZVTEVOQlFUQkNMR1ZCUVRGQ0xFVkJRVEpET3pzN096czdRVUZOZUVRc1RVRkJTU3hwUWtGQmFVSXNSVUZCY2tJN1FVRkRRU3hOUVVGSkxEQkNRVUV3UWl4RlFVRTVRanM3UVVGRlFTeFRRVUZQTzBGQlEwd3NZMEZCVlN4VlFVRkRMRkZCUVVRc1JVRkJZenRCUVVOMFFqczdRVUZGUVN4VlFVRkpMSGRDUVVGM1FpeFBRVUY0UWl4RFFVRm5ReXhSUVVGb1F5eE5RVUU0UXl4RFFVRkRMRU5CUVc1RUxFVkJRWE5FTzBGQlEzQkVMR2REUVVGM1FpeEpRVUY0UWl4RFFVRTJRaXhSUVVFM1FqdEJRVU5FTzBGQlEwWXNTMEZRU1RzN1FVRlRUQ3haUVVGUkxGVkJRVU1zVVVGQlJDeEZRVUZqTzBGQlEzQkNMRlZCUVUwc2EwSkJRV3RDTEhkQ1FVRjNRaXhQUVVGNFFpeERRVUZuUXl4UlFVRm9ReXhEUVVGNFFqdEJRVU5CTEZWQlFVa3NiMEpCUVc5Q0xFTkJRVU1zUTBGQmVrSXNSVUZCTkVJN1FVRkRNVUlzWjBOQlFYZENMRTFCUVhoQ0xFTkJRU3RDTEdWQlFTOUNMRVZCUVdkRUxFTkJRV2hFTzBGQlEwUTdRVUZEUml4TFFXUkpPenRCUVdkQ1RDeGhRVUZUTEZsQlFVMDdPenRCUVVGQkxHbENRVVVyUWl4RFFVRkRMSFZDUVVGRUxFVkJRVEJDTEdOQlFURkNMRU5CUmk5Q096czdRVUZGV2l4dlFrRkdXVHRCUVVWSkxEWkNRVVpLTzBGQlMySXNPRUpCUVhkQ0xFMUJRWGhDTEVkQlFXbERMRU5CUVdwRE96czdRVUZIUVN4VlFVRk5MR1ZCUVdVc1pVRkJaU3hOUVVGd1F6dEJRVU5CTEZkQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVdJc1JVRkJaMElzU1VGQlNTeFpRVUZ3UWl4RlFVRnJReXhIUVVGc1F5eEZRVUYxUXp0QlFVTnlReXgxUWtGQlpTeERRVUZtTzBGQlEwUTdRVUZEUmp0QlFUVkNTU3hIUVVGUU8wRkJPRUpFSWl3aVptbHNaU0k2SW1OeVpXRjBaUzF5Wlc1a1pYSXRjM1JsY0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJR055WldGMFpWSmxibVJsY2xOMFpYQW9jM1JoY25SU1pXNWtaWEpNYjI5d0tTQjdYRzRnSUM4cUtseHVJQ0FnS2lCWFpTQjFjMlVnZEhkdklHRnljbUY1Y3l3Z2IyNWxJR1p2Y2lCMGFHbHpJR1p5WVcxbElHRnVaQ0J2Ym1VZ2RHOGdjWFZsZFdVZ1ptOXlJSFJvWlZ4dUlDQWdLaUJ1WlhoMElHWnlZVzFsTENCeVpYVnphVzVuSUdWaFkyZ2dkRzhnWVhadmFXUWdSME11WEc0Z0lDQXFJRUIwZVhCbElIdEJjbkpoZVgxY2JpQWdJQ292WEc0Z0lHeGxkQ0JtZFc1amRHbHZibk5VYjFKMWJpQTlJRnRkTzF4dUlDQnNaWFFnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVWdQU0JiWFR0Y2JseHVJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lITmphR1ZrZFd4bE9pQW9ZMkZzYkdKaFkyc3BJRDArSUh0Y2JpQWdJQ0FnSUhOMFlYSjBVbVZ1WkdWeVRHOXZjQ2dwTzF4dUlDQWdJQ0FnTHk4Z1NXWWdkR2hwY3lCallXeHNZbUZqYXlCcGMyNG5kQ0JoYkhKbFlXUjVJSE5qYUdWa2RXeGxaQ0IwYnlCeWRXNGdibVY0ZENCbWNtRnRaVnh1SUNBZ0lDQWdhV1lnS0daMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxMbWx1WkdWNFQyWW9ZMkZzYkdKaFkyc3BJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZibk5VYjFKMWJrNWxlSFJHY21GdFpTNXdkWE5vS0dOaGJHeGlZV05yS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnWTJGdVkyVnNPaUFvWTJGc2JHSmhZMnNwSUQwK0lIdGNiaUFnSUNBZ0lHTnZibk4wSUdsdVpHVjRUMlpEWVd4c1ltRmpheUE5SUdaMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxMbWx1WkdWNFQyWW9ZMkZzYkdKaFkyc3BPMXh1SUNBZ0lDQWdhV1lnS0dsdVpHVjRUMlpEWVd4c1ltRmpheUFoUFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVXVjM0JzYVdObEtHbHVaR1Y0VDJaRFlXeHNZbUZqYXl3Z01TazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lIQnliMk5sYzNNNklDZ3BJRDArSUh0Y2JpQWdJQ0FnSUM4dklGTjNZWEFnZEdocGN5Qm1jbUZ0WlNCaGJtUWdibVY0ZENCbWNtRnRaU0JoY25KaGVYTWdkRzhnWVhadmFXUWdSME5jYmlBZ0lDQWdJRnRtZFc1amRHbHZibk5VYjFKMWJpd2dablZ1WTNScGIyNXpWRzlTZFc1T1pYaDBSbkpoYldWZElEMGdXMloxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbExDQm1kVzVqZEdsdmJuTlViMUoxYmwwN1hHNWNiaUFnSUNBZ0lDOHZJRU5zWldGeUlHNWxlSFFnWm5KaGJXVWdiR2x6ZEZ4dUlDQWdJQ0FnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVXViR1Z1WjNSb0lEMGdNRHRjYmx4dUlDQWdJQ0FnTHk4Z1JYaGxZM1YwWlNCaGJHd2diMllnZEdocGN5Qm1jbUZ0WlNkeklHWjFibU4wYVc5dWMxeHVJQ0FnSUNBZ1kyOXVjM1FnYm5WdFZHaHBjMFp5WVcxbElEMGdablZ1WTNScGIyNXpWRzlTZFc0dWJHVnVaM1JvTzF4dUlDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMVVhR2x6Um5KaGJXVTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQm1kVzVqZEdsdmJuTlViMUoxYmx0cFhTZ3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlR0Y2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mcmFtZXN5bmMvY3JlYXRlLXJlbmRlci1zdGVwLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkU3R5bGVQcm9wZXJ0eVN0cmluZztcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzJyk7XG5cbnZhciBfdmFsdWVUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVzKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xudmFyIHRyYW5zbGF0ZU1hcCA9IHtcbiAgeDogVFJBTlNMQVRFICsgJ1gnLFxuICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gIHo6IFRSQU5TTEFURSArICdaJ1xufTtcblxuZnVuY3Rpb24gYnVpbGRTdHlsZVByb3BlcnR5U3RyaW5nKGVsZW1lbnQsIHN0YXRlLCBjaGFuZ2VkVmFsdWVzLCBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICB2YXIgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICB2YXIgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIHZhciB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgLy8gRmlyc3QgY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBjaGFuZ2VkIHRyYW5zZm9ybSB2YWx1ZXNcbiAgLy8gYW5kIGlmIHRydWUgYWRkIGFsbCB0cmFuc2Zvcm0gdmFsdWVzXG4gIHZhciBudW1DaGFuZ2VkVmFsdWVzID0gY2hhbmdlZFZhbHVlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ2hhbmdlZFZhbHVlczsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGNoYW5nZWRWYWx1ZXNbaV07XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdHJhbnNmb3JtIHByb3BlcnR5LCBhZGQgYWxsIG90aGVyIHRyYW5zZm9ybSBwcm9wc1xuICAgIC8vIHRvIGNoYW5nZWRWYWx1ZXMgYW5kIHRoZW4gYnJlYWtcbiAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG5cbiAgICAgIGZvciAodmFyIF9rZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtfa2V5XSAmJiBjaGFuZ2VkVmFsdWVzLmluZGV4T2YoX2tleSkgPT09IC0xKSB7XG4gICAgICAgICAgY2hhbmdlZFZhbHVlcy5wdXNoKF9rZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0b3RhbE51bUNoYW5nZWRWYWx1ZXMgPSBjaGFuZ2VkVmFsdWVzLmxlbmd0aDtcbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRvdGFsTnVtQ2hhbmdlZFZhbHVlczsgX2krKykge1xuICAgIHZhciBfa2V5MiA9IGNoYW5nZWRWYWx1ZXNbX2ldO1xuICAgIHZhciB2YWx1ZSA9IHN0YXRlW19rZXkyXTtcblxuICAgIGlmICh0cmFuc2xhdGVNYXBbX2tleTJdKSB7XG4gICAgICBfa2V5MiA9IHRyYW5zbGF0ZU1hcFtfa2V5Ml07XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIG51bWJlciBvciBvYmplY3QgYW5kIHdlIGhhdmUgZmlsdGVyLCBhcHBseSBmaWx0ZXJcbiAgICBpZiAoX3ZhbHVlVHlwZXMyLmRlZmF1bHRbX2tleTJdICYmICgoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZSkgfHwgKDAsIF91dGlscy5pc09iaikodmFsdWUpKSAmJiBfdmFsdWVUeXBlczIuZGVmYXVsdFtfa2V5Ml0udHJhbnNmb3JtKSB7XG4gICAgICB2YWx1ZSA9IF92YWx1ZVR5cGVzMi5kZWZhdWx0W19rZXkyXS50cmFuc2Zvcm0odmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRbX2tleTJdKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gX2tleTIgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgICB0cmFuc2Zvcm1IYXNaID0gX2tleTIgPT09IHRyYW5zbGF0ZU1hcC56ID8gdHJ1ZSA6IHRyYW5zZm9ybUhhc1o7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKF9rZXkyLCB0cnVlKSArICc6JyArIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHdlIGhhdmUgdHJhbnNmb3JtIHByb3BzLCBidWlsZCBhIHRyYW5zZm9ybSBzdHJpbmdcbiAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgIGlmICghdHJhbnNmb3JtSGFzWiAmJiBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IHRyYW5zbGF0ZU1hcC56ICsgJygwKSc7XG4gICAgfVxuXG4gICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoJ3RyYW5zZm9ybScsIHRydWUpICsgJzonICsgdHJhbnNmb3JtU3RyaW5nO1xuICB9XG5cbiAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IHByb3BlcnR5U3RyaW5nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzSmxibVJsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCV1hkQ0xIZENPenRCUVZwNFFqczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVVZCTEVsQlFVMHNXVUZCV1N4WFFVRnNRanRCUVVOQkxFbEJRVTBzWlVGQlpUdEJRVU51UWl4TFFVRkhMRmxCUVZrc1IwRkVTVHRCUVVWdVFpeExRVUZITEZsQlFWa3NSMEZHU1R0QlFVZHVRaXhMUVVGSExGbEJRVms3UVVGSVNTeERRVUZ5UWpzN1FVRk5aU3hUUVVGVExIZENRVUZVTEVOQlFXdERMRTlCUVd4RExFVkJRVEpETEV0QlFUTkRMRVZCUVd0RUxHRkJRV3hFTEVWQlFXbEZMREJDUVVGcVJTeEZRVUUyUmp0QlFVTXhSeXhOUVVGSkxHbENRVUZwUWl4RlFVRnlRanRCUVVOQkxFMUJRVWtzYTBKQlFXdENMRVZCUVhSQ08wRkJRMEVzVFVGQlNTeGxRVUZsTEV0QlFXNUNPMEZCUTBFc1RVRkJTU3huUWtGQlowSXNTMEZCY0VJN096czdRVUZKUVN4TlFVRk5MRzFDUVVGdFFpeGpRVUZqTEUxQlFYWkRPMEZCUTBFc1QwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQllpeEZRVUZuUWl4SlFVRkpMR2RDUVVGd1FpeEZRVUZ6UXl4SFFVRjBReXhGUVVFeVF6dEJRVU42UXl4UlFVRk5MRTFCUVUwc1kwRkJZeXhEUVVGa0xFTkJRVm83T3pzN1FVRkpRU3hSUVVGSkxIbENRVUZsTEVkQlFXWXNRMEZCU2l4RlFVRjVRanRCUVVOMlFpeHhRa0ZCWlN4SlFVRm1PenRCUVVWQkxGZEJRVXNzU1VGQlNTeEpRVUZVTEVsQlFXZENMRXRCUVdoQ0xFVkJRWFZDTzBGQlEzSkNMRmxCUVVrc2VVSkJRV1VzU1VGQlppeExRVUYxUWl4alFVRmpMRTlCUVdRc1EwRkJjMElzU1VGQmRFSXNUVUZCSzBJc1EwRkJReXhEUVVFelJDeEZRVUU0UkR0QlFVTTFSQ3gzUWtGQll5eEpRVUZrTEVOQlFXMUNMRWxCUVc1Q08wRkJRMFE3UVVGRFJqczdRVUZGUkR0QlFVTkVPMEZCUTBZN08wRkJSVVFzVFVGQlRTeDNRa0ZCZDBJc1kwRkJZeXhOUVVFMVF6dEJRVU5CTEU5QlFVc3NTVUZCU1N4TFFVRkpMRU5CUVdJc1JVRkJaMElzUzBGQlNTeHhRa0ZCY0VJc1JVRkJNa01zU1VGQk0wTXNSVUZCWjBRN1FVRkRPVU1zVVVGQlNTeFJRVUZOTEdOQlFXTXNSVUZCWkN4RFFVRldPMEZCUTBFc1VVRkJTU3hSUVVGUkxFMUJRVTBzUzBGQlRpeERRVUZhT3p0QlFVVkJMRkZCUVVrc1lVRkJZU3hMUVVGaUxFTkJRVW9zUlVGQmRVSTdRVUZEY2tJc1kwRkJUU3hoUVVGaExFdEJRV0lzUTBGQlRqdEJRVU5FT3pzN1FVRkhSQ3hSUVVGSkxIRkNRVUZYTEV0QlFWZ3NUVUZCYjBJc2EwSkJRVTBzUzBGQlRpeExRVUZuUWl4clFrRkJUU3hMUVVGT0xFTkJRWEJETEV0QlFYRkVMSEZDUVVGWExFdEJRVmdzUlVGQlowSXNVMEZCZWtVc1JVRkJiMFk3UVVGRGJFWXNZMEZCVVN4eFFrRkJWeXhMUVVGWUxFVkJRV2RDTEZOQlFXaENMRU5CUVRCQ0xFdEJRVEZDTEVOQlFWSTdRVUZEUkRzN1FVRkZSQ3hSUVVGSkxIbENRVUZsTEV0QlFXWXNRMEZCU2l4RlFVRjVRanRCUVVOMlFpeDVRa0ZCYlVJc1VVRkJUU3hIUVVGT0xFZEJRVmtzUzBGQldpeEhRVUZ2UWl4SlFVRjJRenRCUVVOQkxITkNRVUZwUWl4VlFVRlJMR0ZCUVdFc1EwRkJkRUlzUjBGQk1rSXNTVUZCTTBJc1IwRkJhME1zWVVGQmJFUTdRVUZGUkN4TFFVcEVMRTFCU1U4N1FVRkRUQ3gzUWtGQmEwSXNUVUZCVFN4M1FrRkJVeXhMUVVGVUxFVkJRV01zU1VGQlpDeERRVUZPTEVkQlFUUkNMRWRCUVRWQ0xFZEJRV3RETEV0QlFYQkVPMEZCUTBRN1FVRkRSanM3TzBGQlIwUXNUVUZCU1N4WlFVRktMRVZCUVd0Q08wRkJRMmhDTEZGQlFVa3NRMEZCUXl4aFFVRkVMRWxCUVd0Q0xEQkNRVUYwUWl4RlFVRnJSRHRCUVVOb1JDeDVRa0ZCYlVJc1lVRkJZU3hEUVVGaUxFZEJRV2xDTEV0QlFYQkRPMEZCUTBRN08wRkJSVVFzYzBKQlFXdENMRTFCUVUwc2QwSkJRVk1zVjBGQlZDeEZRVUZ6UWl4SlFVRjBRaXhEUVVGT0xFZEJRVzlETEVkQlFYQkRMRWRCUVRCRExHVkJRVFZFTzBGQlEwUTdPMEZCUlVRc1ZVRkJVU3hMUVVGU0xFTkJRV01zVDBGQlpDeEpRVUY1UWl4alFVRjZRanRCUVVORUlpd2labWxzWlNJNkluSmxibVJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IwY21GdWMyWnZjbTFRY205d2N5Qm1jbTl0SUNjdUwzUnlZVzV6Wm05eWJTMXdjbTl3Y3ljN1hHNXBiWEJ2Y25RZ2RtRnNkV1ZVZVhCbGN5Qm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpKenRjYm1sdGNHOXlkQ0J3Y21WbWFYaGxjaUJtY205dElDY3VMM0J5WldacGVHVnlKenRjYm1sdGNHOXlkQ0I3SUdselRuVnRMQ0JwYzA5aWFpQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU52Ym5OMElGUlNRVTVUVEVGVVJTQTlJQ2QwY21GdWMyeGhkR1VuTzF4dVkyOXVjM1FnZEhKaGJuTnNZWFJsVFdGd0lEMGdlMXh1SUNCNE9pQlVVa0ZPVTB4QlZFVWdLeUFuV0Njc1hHNGdJSGs2SUZSU1FVNVRURUZVUlNBcklDZFpKeXhjYmlBZ2Vqb2dWRkpCVGxOTVFWUkZJQ3NnSjFvblhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJpZFdsc1pGTjBlV3hsVUhKdmNHVnlkSGxUZEhKcGJtY29aV3hsYldWdWRDd2djM1JoZEdVc0lHTm9ZVzVuWldSV1lXeDFaWE1zSUdWdVlXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1NCN1hHNGdJR3hsZENCd2NtOXdaWEowZVZOMGNtbHVaeUE5SUNjbk8xeHVJQ0JzWlhRZ2RISmhibk5tYjNKdFUzUnlhVzVuSUQwZ0p5YzdYRzRnSUd4bGRDQm9ZWE5VY21GdWMyWnZjbTBnUFNCbVlXeHpaVHRjYmlBZ2JHVjBJSFJ5WVc1elptOXliVWhoYzFvZ1BTQm1ZV3h6WlR0Y2JseHVJQ0F2THlCR2FYSnpkQ0JqYUdWamF5QnBaaUIwYUdWeVpTQmhjbVVnWVc1NUlHTm9ZVzVuWldRZ2RISmhibk5tYjNKdElIWmhiSFZsYzF4dUlDQXZMeUJoYm1RZ2FXWWdkSEoxWlNCaFpHUWdZV3hzSUhSeVlXNXpabTl5YlNCMllXeDFaWE5jYmlBZ1kyOXVjM1FnYm5WdFEyaGhibWRsWkZaaGJIVmxjeUE5SUdOb1lXNW5aV1JXWVd4MVpYTXViR1Z1WjNSb08xeHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJVTm9ZVzVuWldSV1lXeDFaWE03SUdrckt5a2dlMXh1SUNBZ0lHTnZibk4wSUd0bGVTQTlJR05vWVc1blpXUldZV3gxWlhOYmFWMDdYRzVjYmlBZ0lDQXZMeUJKWmlCMGFHbHpJR2x6SUdFZ2RISmhibk5tYjNKdElIQnliM0JsY25SNUxDQmhaR1FnWVd4c0lHOTBhR1Z5SUhSeVlXNXpabTl5YlNCd2NtOXdjMXh1SUNBZ0lDOHZJSFJ2SUdOb1lXNW5aV1JXWVd4MVpYTWdZVzVrSUhSb1pXNGdZbkpsWVd0Y2JpQWdJQ0JwWmlBb2RISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTa2dlMXh1SUNBZ0lDQWdhR0Z6VkhKaGJuTm1iM0p0SUQwZ2RISjFaVHRjYmx4dUlDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSE4wWVhSbEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGNtRnVjMlp2Y20xUWNtOXdjMXRyWlhsZElDWW1JR05vWVc1blpXUldZV3gxWlhNdWFXNWtaWGhQWmloclpYa3BJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUdOb1lXNW5aV1JXWVd4MVpYTXVjSFZ6YUNoclpYa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR052Ym5OMElIUnZkR0ZzVG5WdFEyaGhibWRsWkZaaGJIVmxjeUE5SUdOb1lXNW5aV1JXWVd4MVpYTXViR1Z1WjNSb08xeHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSdmRHRnNUblZ0UTJoaGJtZGxaRlpoYkhWbGN6c2dhU3NyS1NCN1hHNGdJQ0FnYkdWMElHdGxlU0E5SUdOb1lXNW5aV1JXWVd4MVpYTmJhVjA3WEc0Z0lDQWdiR1YwSUhaaGJIVmxJRDBnYzNSaGRHVmJhMlY1WFR0Y2JseHVJQ0FnSUdsbUlDaDBjbUZ1YzJ4aGRHVk5ZWEJiYTJWNVhTa2dlMXh1SUNBZ0lDQWdhMlY1SUQwZ2RISmhibk5zWVhSbFRXRndXMnRsZVYwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1NXWWdkR2hwY3lCcGN5QmhJRzUxYldKbGNpQnZjaUJ2WW1wbFkzUWdZVzVrSUhkbElHaGhkbVVnWm1sc2RHVnlMQ0JoY0hCc2VTQm1hV3gwWlhKY2JpQWdJQ0JwWmlBb2RtRnNkV1ZVZVhCbGMxdHJaWGxkSUNZbUlDaHBjMDUxYlNoMllXeDFaU2tnZkh3Z2FYTlBZbW9vZG1Gc2RXVXBLU0FtSmlCMllXeDFaVlI1Y0dWelcydGxlVjB1ZEhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNCMllXeDFaU0E5SUhaaGJIVmxWSGx3WlhOYmEyVjVYUzUwY21GdWMyWnZjbTBvZG1Gc2RXVXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTFRY205d2MxdHJaWGxkS1NCN1hHNGdJQ0FnSUNCMGNtRnVjMlp2Y20xVGRISnBibWNnS3owZ2EyVjVJQ3NnSnlnbklDc2dkbUZzZFdVZ0t5QW5LU0FuTzF4dUlDQWdJQ0FnZEhKaGJuTm1iM0p0U0dGeldpQTlJQ2hyWlhrZ1BUMDlJSFJ5WVc1emJHRjBaVTFoY0M1NktTQS9JSFJ5ZFdVZ09pQjBjbUZ1YzJadmNtMUlZWE5hTzF4dVhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSEJ5YjNCbGNuUjVVM1J5YVc1bklDczlJQ2M3SnlBcklIQnlaV1pwZUdWeUtHdGxlU3dnZEhKMVpTa2dLeUFuT2ljZ0t5QjJZV3gxWlR0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdkx5QkpaaUIzWlNCb1lYWmxJSFJ5WVc1elptOXliU0J3Y205d2N5d2dZblZwYkdRZ1lTQjBjbUZ1YzJadmNtMGdjM1J5YVc1blhHNGdJR2xtSUNob1lYTlVjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQnBaaUFvSVhSeVlXNXpabTl5YlVoaGMxb2dKaVlnWlc1aFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjRwSUh0Y2JpQWdJQ0FnSUhSeVlXNXpabTl5YlZOMGNtbHVaeUFyUFNCMGNtRnVjMnhoZEdWTllYQXVlaUFySUNjb01Da25PMXh1SUNBZ0lIMWNibHh1SUNBZ0lIQnliM0JsY25SNVUzUnlhVzVuSUNzOUlDYzdKeUFySUhCeVpXWnBlR1Z5S0NkMGNtRnVjMlp2Y20wbkxDQjBjblZsS1NBcklDYzZKeUFySUhSeVlXNXpabTl5YlZOMGNtbHVaenRjYmlBZ2ZWeHVYRzRnSUdWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQXJQU0J3Y205d1pYSjBlVk4wY21sdVp6dGNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvcmVuZGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBheGVzID0gWydYJywgJ1knLCAnWiddO1xuXG52YXIgdHJhbnNmb3JtUHJvcHMgPSB7XG4gIHg6IHRydWUsXG4gIHk6IHRydWUsXG4gIHo6IHRydWVcbn07XG5cbnZhciBTQ0FMRSA9ICdzY2FsZSc7XG52YXIgUk9UQVRFID0gJ3JvdGF0ZSc7XG52YXIgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbnZhciBURVJNUyA9IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdO1xuXG50cmFuc2Zvcm1Qcm9wc1tST1RBVEVdID0gdHJhbnNmb3JtUHJvcHNbU0NBTEVdID0gdHJhbnNmb3JtUHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG5cblRFUk1TLmZvckVhY2goZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGF4ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXhpcykge1xuICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlO1xuICB9KTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2Zvcm1Qcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM1J5WVc1elptOXliUzF3Y205d2N5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeEpRVUZOTEU5QlFVOHNRMEZCUXl4SFFVRkVMRVZCUVUwc1IwRkJUaXhGUVVGWExFZEJRVmdzUTBGQllqczdRVUZGUVN4SlFVRkpMR2xDUVVGcFFqdEJRVU51UWl4TFFVRkhMRWxCUkdkQ08wRkJSVzVDTEV0QlFVY3NTVUZHWjBJN1FVRkhia0lzUzBGQlJ6dEJRVWhuUWl4RFFVRnlRanM3UVVGTlFTeEpRVUZOTEZGQlFWRXNUMEZCWkR0QlFVTkJMRWxCUVUwc1UwRkJVeXhSUVVGbU8wRkJRMEVzU1VGQlRTeDNRa0ZCZDBJc2MwSkJRVGxDTzBGQlEwRXNTVUZCVFN4UlFVRlJMRU5CUVVNc1YwRkJSQ3hGUVVGakxFdEJRV1FzUlVGQmNVSXNUVUZCY2tJc1JVRkJOa0lzVFVGQk4wSXNSVUZCY1VNc2NVSkJRWEpETEVOQlFXUTdPMEZCUlVFc1pVRkJaU3hOUVVGbUxFbEJRWGxDTEdWQlFXVXNTMEZCWml4SlFVRjNRaXhsUVVGbExIRkNRVUZtTEVsQlFYZERMRWxCUVhwR096dEJRVVZCTEUxQlFVMHNUMEZCVGl4RFFVRmpMRlZCUVVNc1NVRkJSRHRCUVVGQkxGTkJRVlVzUzBGQlN5eFBRVUZNTEVOQlFXRXNWVUZCUXl4SlFVRkVPMEZCUVVFc1YwRkJWU3hsUVVGbExFOUJRVThzU1VGQmRFSXNTVUZCT0VJc1NVRkJlRU03UVVGQlFTeEhRVUZpTEVOQlFWWTdRVUZCUVN4RFFVRmtPenRyUWtGRlpTeGpJaXdpWm1sc1pTSTZJblJ5WVc1elptOXliUzF3Y205d2N5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltTnZibk4wSUdGNFpYTWdQU0JiSjFnbkxDQW5XU2NzSUNkYUoxMDdYRzVjYm14bGRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lBOUlIdGNiaUFnZURvZ2RISjFaU3hjYmlBZ2VUb2dkSEoxWlN4Y2JpQWdlam9nZEhKMVpWeHVmVHRjYmx4dVkyOXVjM1FnVTBOQlRFVWdQU0FuYzJOaGJHVW5PMXh1WTI5dWMzUWdVazlVUVZSRklEMGdKM0p2ZEdGMFpTYzdYRzVqYjI1emRDQlVVa0ZPVTBaUFVrMWZVRVZTVTFCRlExUkpWa1VnUFNBbmRISmhibk5tYjNKdFVHVnljM0JsWTNScGRtVW5PMXh1WTI5dWMzUWdWRVZTVFZNZ1BTQmJKM1J5WVc1emJHRjBaU2NzSUZORFFVeEZMQ0JTVDFSQlZFVXNJQ2R6YTJWM0p5d2dWRkpCVGxOR1QxSk5YMUJGVWxOUVJVTlVTVlpGWFR0Y2JseHVkSEpoYm5ObWIzSnRVSEp2Y0hOYlVrOVVRVlJGWFNBOUlIUnlZVzV6Wm05eWJWQnliM0J6VzFORFFVeEZYU0E5SUhSeVlXNXpabTl5YlZCeWIzQnpXMVJTUVU1VFJrOVNUVjlRUlZKVFVFVkRWRWxXUlYwZ1BTQjBjblZsTzF4dVhHNVVSVkpOVXk1bWIzSkZZV05vS0NoMFpYSnRLU0E5UGlCaGVHVnpMbVp2Y2tWaFkyZ29LR0Y0YVhNcElEMCtJSFJ5WVc1elptOXliVkJ5YjNCelczUmxjbTBnS3lCaGVHbHpYU0E5SUhSeWRXVXBLVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZEhKaGJuTm1iM0p0VUhKdmNITTdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL3RyYW5zZm9ybS1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL2luYy92YWx1ZS10eXBlcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIC8vIENvbG9yIHByb3BzXG4gIGNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYmFja2dyb3VuZENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgb3V0bGluZUNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgZmlsbDogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIHN0cm9rZTogX3ZhbHVlVHlwZXMuY29sb3IsXG5cbiAgLy8gQm9yZGVyIHByb3BzXG4gIGJvcmRlckNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyVG9wQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJSaWdodENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyQm90dG9tQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJMZWZ0Q29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJSYWRpdXM6IF92YWx1ZVR5cGVzLnB4LFxuXG4gIC8vIFBvc2l0aW9uaW5nXG4gIHdpZHRoOiBfdmFsdWVUeXBlcy5weCxcbiAgaGVpZ2h0OiBfdmFsdWVUeXBlcy5weCxcblxuICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICByb3RhdGU6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVg6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVk6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVo6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHNjYWxlOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVYOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVZOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVaOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2tld1g6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHNrZXdZOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICBkaXN0YW5jZTogX3ZhbHVlVHlwZXMucHgsXG4gIHRyYW5zbGF0ZVg6IF92YWx1ZVR5cGVzLnB4LFxuICB0cmFuc2xhdGVZOiBfdmFsdWVUeXBlcy5weCxcbiAgdHJhbnNsYXRlWjogX3ZhbHVlVHlwZXMucHgsXG4gIHBlcnNwZWN0aXZlOiBfdmFsdWVUeXBlcy5weCxcbiAgb3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGFcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNaaGJIVmxMWFI1Y0dWekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdhMEpCUTJVN08wRkJSV0lzTUVKQlJtRTdRVUZIWWl4dlEwRklZVHRCUVVsaUxHbERRVXBoTzBGQlMySXNlVUpCVEdFN1FVRk5ZaXd5UWtGT1lUczdPMEZCVTJJc1owTkJWR0U3UVVGVllpeHRRMEZXWVR0QlFWZGlMSEZEUVZoaE8wRkJXV0lzYzBOQldtRTdRVUZoWWl4dlEwRmlZVHRCUVdOaUxEaENRV1JoT3pzN1FVRnBRbUlzZFVKQmFrSmhPMEZCYTBKaUxIZENRV3hDWVRzN08wRkJjVUppTERaQ1FYSkNZVHRCUVhOQ1lpdzRRa0YwUW1FN1FVRjFRbUlzT0VKQmRrSmhPMEZCZDBKaUxEaENRWGhDWVR0QlFYbENZaXd3UWtGNlFtRTdRVUV3UW1Jc01rSkJNVUpoTzBGQk1rSmlMREpDUVROQ1lUdEJRVFJDWWl3eVFrRTFRbUU3UVVFMlFtSXNORUpCTjBKaE8wRkJPRUppTERSQ1FUbENZVHRCUVN0Q1lpd3dRa0V2UW1FN1FVRm5RMklzTkVKQmFFTmhPMEZCYVVOaUxEUkNRV3BEWVR0QlFXdERZaXcwUWtGc1EyRTdRVUZ0UTJJc05rSkJia05oTzBGQmIwTmlPMEZCY0VOaExFTWlMQ0ptYVd4bElqb2lkbUZzZFdVdGRIbHdaWE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJoYkhCb1lTd2dZMjlzYjNJc0lHUmxaM0psWlhNc0lITmpZV3hsTENCd2VDQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTJZV3gxWlMxMGVYQmxjeWM3SUZ4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQXZMeUJEYjJ4dmNpQndjbTl3YzF4dUlDQmpiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHSmhZMnRuY205MWJtUkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHOTFkR3hwYm1WRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdacGJHdzZJR052Ykc5eUxGeHVJQ0J6ZEhKdmEyVTZJR052Ykc5eUxGeHVYRzRnSUM4dklFSnZjbVJsY2lCd2NtOXdjMXh1SUNCaWIzSmtaWEpEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0p2Y21SbGNsUnZjRU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdZbTl5WkdWeVVtbG5hSFJEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0p2Y21SbGNrSnZkSFJ2YlVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnWW05eVpHVnlUR1ZtZEVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnWW05eVpHVnlVbUZrYVhWek9pQndlQ3hjYmx4dUlDQXZMeUJRYjNOcGRHbHZibWx1WjF4dUlDQjNhV1IwYURvZ2NIZ3NYRzRnSUdobGFXZG9kRG9nY0hnc0lDQmNibHh1SUNBdkx5QlVjbUZ1YzJadmNtMGdjSEp2Y0dWeWRHbGxjMXh1SUNCeWIzUmhkR1U2SUdSbFozSmxaWE1zWEc0Z0lISnZkR0YwWlZnNklHUmxaM0psWlhNc1hHNGdJSEp2ZEdGMFpWazZJR1JsWjNKbFpYTXNYRzRnSUhKdmRHRjBaVm82SUdSbFozSmxaWE1zWEc0Z0lITmpZV3hsT2lCelkyRnNaU3hjYmlBZ2MyTmhiR1ZZT2lCelkyRnNaU3hjYmlBZ2MyTmhiR1ZaT2lCelkyRnNaU3hjYmlBZ2MyTmhiR1ZhT2lCelkyRnNaU3hjYmlBZ2MydGxkMWc2SUdSbFozSmxaWE1zWEc0Z0lITnJaWGRaT2lCa1pXZHlaV1Z6TEZ4dUlDQmthWE4wWVc1alpUb2djSGdzWEc0Z0lIUnlZVzV6YkdGMFpWZzZJSEI0TEZ4dUlDQjBjbUZ1YzJ4aGRHVlpPaUJ3ZUN4Y2JpQWdkSEpoYm5Oc1lYUmxXam9nY0hnc1hHNGdJSEJsY25Od1pXTjBhWFpsT2lCd2VDeGNiaUFnYjNCaFkybDBlVG9nWVd4d2FHRmNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvdmFsdWUtdHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBjYW1lbENhY2hlID0ge307XG52YXIgZGFzaENhY2hlID0ge307XG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcycsICcnXTtcbnZhciBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbnZhciB0ZXN0RWxlbWVudCA9IHZvaWQgMDtcblxuLypcbiAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbnZhciB0ZXN0UHJlZml4ID0gZnVuY3Rpb24gKGtleSkge1xuICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICB2YXIgbm9QcmVmaXggPSBwcmVmaXggPT09ICcnO1xuICAgIHZhciBwcmVmaXhlZFByb3BlcnR5TmFtZSA9IG5vUHJlZml4ID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgaWYgKHByZWZpeGVkUHJvcGVydHlOYW1lIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICBjYW1lbENhY2hlW2tleV0gPSBwcmVmaXhlZFByb3BlcnR5TmFtZTtcbiAgICAgIGRhc2hDYWNoZVtrZXldID0gJycgKyAobm9QcmVmaXggPyAnJyA6ICctJykgKyAoMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShwcmVmaXhlZFByb3BlcnR5TmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoa2V5LCBhc0Rhc2hDYXNlKSB7XG4gIHZhciBjYWNoZSA9IGFzRGFzaENhc2UgPyBkYXNoQ2FjaGUgOiBjYW1lbENhY2hlO1xuXG4gIGlmICghY2FjaGVba2V5XSkge1xuICAgIHRlc3RQcmVmaXgoa2V5KTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZVtrZXldO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM0J5WldacGVHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3UVVGRlFTeEpRVUZOTEdGQlFXRXNSVUZCYmtJN1FVRkRRU3hKUVVGTkxGbEJRVmtzUlVGQmJFSTdRVUZEUVN4SlFVRk5MRmRCUVZjc1EwRkJReXhSUVVGRUxFVkJRVlVzUzBGQlZpeEZRVUZuUWl4SFFVRm9RaXhGUVVGdlFpeEpRVUZ3UWl4RlFVRXdRaXhGUVVFeFFpeERRVUZxUWp0QlFVTkJMRWxCUVUwc1kwRkJZeXhUUVVGVExFMUJRVGRDTzBGQlEwRXNTVUZCU1N4dlFrRkJTanM3T3pzN096czdRVUZSUVN4SlFVRk5MR0ZCUVdFc1ZVRkJReXhIUVVGRUxFVkJRVk03UVVGRE1VSXNaMEpCUVdNc1pVRkJaU3hUUVVGVExHRkJRVlFzUTBGQmRVSXNTMEZCZGtJc1EwRkJOMEk3TzBGQlJVRXNUMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJZaXhGUVVGblFpeEpRVUZKTEZkQlFYQkNMRVZCUVdsRExFZEJRV3BETEVWQlFYTkRPMEZCUTNCRExGRkJRVTBzVTBGQlV5eFRRVUZUTEVOQlFWUXNRMEZCWmp0QlFVTkJMRkZCUVUwc1YwRkJXU3hYUVVGWExFVkJRVGRDTzBGQlEwRXNVVUZCVFN4MVFrRkJkVUlzVjBGQlZ5eEhRVUZZTEVkQlFXbENMRk5CUVZNc1NVRkJTU3hOUVVGS0xFTkJRVmNzUTBGQldDeEZRVUZqTEZkQlFXUXNSVUZCVkN4SFFVRjFReXhKUVVGSkxFdEJRVW9zUTBGQlZTeERRVUZXTEVOQlFYSkdPenRCUVVWQkxGRkJRVWtzZDBKQlFYZENMRmxCUVZrc1MwRkJlRU1zUlVGQkswTTdRVUZETjBNc2FVSkJRVmNzUjBGQldDeEpRVUZyUWl4dlFrRkJiRUk3UVVGRFFTeG5Ra0ZCVlN4SFFVRldMRlZCUVhGQ0xGZEJRVmNzUlVGQldDeEhRVUZuUWl4SFFVRnlReXhKUVVFMFF5eDNRa0ZCV1N4dlFrRkJXaXhEUVVFMVF6dEJRVU5FTzBGQlEwWTdRVUZEUml4RFFXSkVPenRyUWtGbFpTeFZRVUZETEVkQlFVUXNSVUZCVFN4VlFVRk9MRVZCUVhGQ08wRkJRMnhETEUxQlFVMHNVVUZCVVN4aFFVRmhMRk5CUVdJc1IwRkJlVUlzVlVGQmRrTTdPMEZCUlVFc1RVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlRpeERRVUZNTEVWQlFXbENPMEZCUTJZc1pVRkJWeXhIUVVGWU8wRkJRMFE3TzBGQlJVUXNVMEZCVHl4TlFVRk5MRWRCUVU0c1EwRkJVRHRCUVVORUxFTWlMQ0ptYVd4bElqb2ljSEpsWm1sNFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmpZVzFsYkZSdlJHRnphQ0I5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJR05oYldWc1EyRmphR1VnUFNCN2ZUdGNibU52Ym5OMElHUmhjMmhEWVdOb1pTQTlJSHQ5TzF4dVkyOXVjM1FnY0hKbFptbDRaWE1nUFNCYkoxZGxZbXRwZENjc0owMXZlaWNzSjA4bkxDZHRjeWNzSUNjblhUdGNibU52Ym5OMElHNTFiVkJ5WldacGVHVnpJRDBnY0hKbFptbDRaWE11YkdWdVozUm9PMXh1YkdWMElIUmxjM1JGYkdWdFpXNTBPMXh1WEc0dktseHVJQ0JVWlhOMElITjBlV3hsSUhCeWIzQmxjblI1SUdadmNpQndjbVZtYVhobFpDQjJaWEp6YVc5dVhHNGdJRnh1SUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUZOMGVXeGxJSEJ5YjNCbGNuUjVYRzRnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTA2SUVOaFkyaGxaQ0J3Y205d1pYSjBlU0J1WVcxbFhHNHFMMXh1WTI5dWMzUWdkR1Z6ZEZCeVpXWnBlQ0E5SUNoclpYa3BJRDArSUh0Y2JpQWdkR1Z6ZEVWc1pXMWxiblFnUFNCMFpYTjBSV3hsYldWdWRDQjhmQ0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZGthWFluS1R0Y2JseHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJWQnlaV1pwZUdWek95QnBLeXNwSUh0Y2JpQWdJQ0JqYjI1emRDQndjbVZtYVhnZ1BTQndjbVZtYVhobGMxdHBYVHRjYmlBZ0lDQmpiMjV6ZENCdWIxQnlaV1pwZUNBOUlDaHdjbVZtYVhnZ1BUMDlJQ2NuS1R0Y2JpQWdJQ0JqYjI1emRDQndjbVZtYVhobFpGQnliM0JsY25SNVRtRnRaU0E5SUc1dlVISmxabWw0SUQ4Z2EyVjVJRG9nY0hKbFptbDRJQ3NnYTJWNUxtTm9ZWEpCZENnd0tTNTBiMVZ3Y0dWeVEyRnpaU2dwSUNzZ2EyVjVMbk5zYVdObEtERXBPMXh1WEc0Z0lDQWdhV1lnS0hCeVpXWnBlR1ZrVUhKdmNHVnlkSGxPWVcxbElHbHVJSFJsYzNSRmJHVnRaVzUwTG5OMGVXeGxLU0I3WEc0Z0lDQWdJQ0JqWVcxbGJFTmhZMmhsVzJ0bGVWMGdQU0J3Y21WbWFYaGxaRkJ5YjNCbGNuUjVUbUZ0WlR0Y2JpQWdJQ0FnSUdSaGMyaERZV05vWlZ0clpYbGRJRDBnWUNSN0tHNXZVSEpsWm1sNElEOGdKeWNnT2lBbkxTY3BmU1I3WTJGdFpXeFViMFJoYzJnb2NISmxabWw0WldSUWNtOXdaWEowZVU1aGJXVXBmV0E3WEc0Z0lDQWdmVnh1SUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvYTJWNUxDQmhjMFJoYzJoRFlYTmxLU0E5UGlCN1hHNGdJR052Ym5OMElHTmhZMmhsSUQwZ1lYTkVZWE5vUTJGelpTQS9JR1JoYzJoRFlXTm9aU0E2SUdOaGJXVnNRMkZqYUdVN1hHNWNiaUFnYVdZZ0tDRmpZV05vWlZ0clpYbGRLU0I3WEc0Z0lDQWdkR1Z6ZEZCeVpXWnBlQ2hyWlhrcE8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlHTmhZMmhsVzJ0bGVWMDdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvcHJlZml4ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgZGF0YSkge1xuICB2YXIgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxO1xuICB2YXIgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDE7XG4gIHZhciB0cmFuc2Zvcm1PcmlnaW5YID0gZGF0YS53aWR0aCAqICgoc3RhdGUub3JpZ2luWCB8fCA1MCkgLyAxMDApICsgZGF0YS54O1xuICB2YXIgdHJhbnNmb3JtT3JpZ2luWSA9IGRhdGEuaGVpZ2h0ICogKChzdGF0ZS5vcmlnaW5ZIHx8IDUwKSAvIDEwMCkgKyBkYXRhLnk7XG4gIHZhciBzY2FsZVRyYW5zZm9ybVggPSAtdHJhbnNmb3JtT3JpZ2luWCAqIChzY2FsZSAqIDEpO1xuICB2YXIgc2NhbGVUcmFuc2Zvcm1ZID0gLXRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSk7XG4gIHZhciBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlO1xuICB2YXIgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVk7XG4gIHZhciB0cmFuc2Zvcm0gPSB7XG4gICAgdHJhbnNsYXRlOiAndHJhbnNsYXRlKCcgKyBzdGF0ZS50cmFuc2xhdGVYICsgJywgJyArIHN0YXRlLnRyYW5zbGF0ZVkgKyAnKSAnLFxuICAgIHNjYWxlOiAndHJhbnNsYXRlKCcgKyBzY2FsZVRyYW5zZm9ybVggKyAnLCAnICsgc2NhbGVUcmFuc2Zvcm1ZICsgJykgc2NhbGUoJyArIHNjYWxlICsgJywgJyArIHNjYWxlWSArICcpIHRyYW5zbGF0ZSgnICsgc2NhbGVSZXBsYWNlWCArICcsICcgKyBzY2FsZVJlcGxhY2VZICsgJykgJyxcbiAgICByb3RhdGU6ICdyb3RhdGUoJyArIHN0YXRlLnJvdGF0ZSArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5YICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblkgKyAnKSAnLFxuICAgIHNrZXdYOiAnc2tld1goJyArIHN0YXRlLnNrZXdYICsgJykgJyxcbiAgICBza2V3WTogJ3NrZXdZKCcgKyBzdGF0ZS5za2V3WSArICcpICdcbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wc1soMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgZm9yICh2YXIgX2tleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IF9rZXkgPT09ICdzY2FsZScgPyAnMScgOiAnMCc7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB0cmFuc2Zvcm1bX2tleV0ucmVwbGFjZSgvdW5kZWZpbmVkL2csIGRlZmF1bHRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwySjFhV3hrTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZMZDBJc1N6czdRVUZNZUVJN08wRkJRMEU3T3pzN096dEJRVVZCTEVsQlFVMHNaMEpCUVdkQ0xFMUJRWFJDT3p0QlFVVmxMRk5CUVZNc1MwRkJWQ3hEUVVGbExFdEJRV1lzUlVGQmMwSXNTVUZCZEVJc1JVRkJORUk3UVVGRGVrTXNUVUZCU1N4bFFVRmxMRXRCUVc1Q08wRkJRMEVzVFVGQlRTeFJRVUZSTEVWQlFXUTdRVUZEUVN4TlFVRk5MRkZCUVZFc1RVRkJUU3hMUVVGT0xFdEJRV2RDTEZOQlFXaENMRWRCUVRSQ0xFMUJRVTBzUzBGQlRpeEpRVUZsTEdGQlFUTkRMRWRCUVRKRUxFMUJRVTBzVFVGQlRpeEpRVUZuUWl4RFFVRjZSanRCUVVOQkxFMUJRVTBzVTBGQlV5eE5RVUZOTEUxQlFVNHNTMEZCYVVJc1UwRkJha0lzUjBGQk5rSXNUVUZCVFN4TlFVRk9MRWxCUVdkQ0xHRkJRVGRETEVkQlFUWkVMRk5CUVZNc1EwRkJja1k3UVVGRFFTeE5RVUZOTEcxQ1FVRnRRaXhMUVVGTExFdEJRVXdzU1VGQll5eERRVUZETEUxQlFVMHNUMEZCVGl4SlFVRnBRaXhGUVVGc1FpeEpRVUYzUWl4SFFVRjBReXhKUVVFMlF5eExRVUZMTEVOQlFUTkZPMEZCUTBFc1RVRkJUU3h0UWtGQmJVSXNTMEZCU3l4TlFVRk1MRWxCUVdVc1EwRkJReXhOUVVGTkxFOUJRVTRzU1VGQmFVSXNSVUZCYkVJc1NVRkJkMElzUjBGQmRrTXNTVUZCT0VNc1MwRkJTeXhEUVVFMVJUdEJRVU5CTEUxQlFVMHNhMEpCUVd0Q0xFTkJRVVVzWjBKQlFVWXNTVUZCYzBJc1VVRkJVU3hEUVVFNVFpeERRVUY0UWp0QlFVTkJMRTFCUVUwc2EwSkJRV3RDTEVOQlFVVXNaMEpCUVVZc1NVRkJjMElzVTBGQlV5eERRVUV2UWl4RFFVRjRRanRCUVVOQkxFMUJRVTBzWjBKQlFXZENMRzFDUVVGdFFpeExRVUY2UXp0QlFVTkJMRTFCUVUwc1owSkJRV2RDTEcxQ1FVRnRRaXhOUVVGNlF6dEJRVU5CTEUxQlFVMHNXVUZCV1R0QlFVTm9RaXc0UWtGQmQwSXNUVUZCVFN4VlFVRTVRaXhWUVVFMlF5eE5RVUZOTEZWQlFXNUVMRTlCUkdkQ08wRkJSV2hDTERCQ1FVRnZRaXhsUVVGd1FpeFZRVUYzUXl4bFFVRjRReXhuUWtGQmEwVXNTMEZCYkVVc1ZVRkJORVVzVFVGQk5VVXNiMEpCUVdsSExHRkJRV3BITEZWQlFXMUlMR0ZCUVc1SUxFOUJSbWRDTzBGQlIyaENMSGRDUVVGclFpeE5RVUZOTEUxQlFYaENMRlZCUVcxRExHZENRVUZ1UXl4VlFVRjNSQ3huUWtGQmVFUXNUMEZJWjBJN1FVRkphRUlzYzBKQlFXZENMRTFCUVUwc1MwRkJkRUlzVDBGS1owSTdRVUZMYUVJc2MwSkJRV2RDTEUxQlFVMHNTMEZCZEVJN1FVRk1aMElzUjBGQmJFSTdPMEZCVVVFc1QwRkJTeXhKUVVGSkxFZEJRVlFzU1VGQlowSXNTMEZCYUVJc1JVRkJkVUk3UVVGRGNrSXNVVUZCU1N4TlFVRk5MR05CUVU0c1EwRkJjVUlzUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNM1FpeFZRVUZKTEhsQ1FVRmxMRWRCUVdZc1EwRkJTaXhGUVVGNVFqdEJRVU4yUWl4MVFrRkJaU3hKUVVGbU8wRkJRMFFzVDBGR1JDeE5RVVZQTzBGQlEwd3NZMEZCVFN4M1FrRkJXU3hIUVVGYUxFTkJRVTRzU1VGQk1FSXNUVUZCVFN4SFFVRk9MRU5CUVRGQ08wRkJRMFE3UVVGRFJqdEJRVU5HT3p0QlFVVkVMRTFCUVVrc1dVRkJTaXhGUVVGclFqdEJRVU5vUWl4VlFVRk5MRk5CUVU0c1IwRkJhMElzUlVGQmJFSTdPMEZCUlVFc1UwRkJTeXhKUVVGSkxFbEJRVlFzU1VGQlowSXNVMEZCYUVJc1JVRkJNa0k3UVVGRGVrSXNWVUZCU1N4VlFVRlZMR05CUVZZc1EwRkJlVUlzU1VGQmVrSXNRMEZCU2l4RlFVRnRRenRCUVVOcVF5eFpRVUZOTEdWQlFXZENMRk5CUVZFc1QwRkJWQ3hIUVVGdlFpeEhRVUZ3UWl4SFFVRXdRaXhIUVVFdlF6dEJRVU5CTEdOQlFVMHNVMEZCVGl4SlFVRnRRaXhWUVVGVkxFbEJRVllzUlVGQlpTeFBRVUZtTEVOQlFYVkNMRmxCUVhaQ0xFVkJRWEZETEZsQlFYSkRMRU5CUVc1Q08wRkJRMFE3UVVGRFJqdEJRVU5HT3p0QlFVVkVMRk5CUVU4c1MwRkJVRHRCUVVORUlpd2labWxzWlNJNkltSjFhV3hrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWTJGdFpXeFViMFJoYzJnZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRYUnBiSE1uTzF4dWFXMXdiM0owSUhSeVlXNXpabTl5YlZCeWIzQnpJR1p5YjIwZ0p5NHVMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dVhHNWpiMjV6ZENCYVJWSlBYMDVQVkY5YVJWSlBJRDBnTUM0d01EQXhPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJpZFdsc1pDaHpkR0YwWlN3Z1pHRjBZU2tnZTF4dUlDQnNaWFFnYUdGelZISmhibk5tYjNKdElEMGdabUZzYzJVN1hHNGdJR052Ym5OMElIQnliM0J6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJSE5qWVd4bElEMGdjM1JoZEdVdWMyTmhiR1VnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JSE4wWVhSbExuTmpZV3hsSUh4OElGcEZVazlmVGs5VVgxcEZVazhnT2lCemRHRjBaUzV6WTJGc1pWZ2dmSHdnTVR0Y2JpQWdZMjl1YzNRZ2MyTmhiR1ZaSUQwZ2MzUmhkR1V1YzJOaGJHVlpJQ0U5UFNCMWJtUmxabWx1WldRZ1B5QnpkR0YwWlM1elkyRnNaVmtnZkh3Z1drVlNUMTlPVDFSZldrVlNUeUE2SUhOallXeGxJSHg4SURFN1hHNGdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ1BTQmtZWFJoTG5kcFpIUm9JQ29nS0NoemRHRjBaUzV2Y21sbmFXNVlJSHg4SURVd0tTQXZJREV3TUNrZ0t5QmtZWFJoTG5nN1hHNGdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxrZ1BTQmtZWFJoTG1obGFXZG9kQ0FxSUNnb2MzUmhkR1V1YjNKcFoybHVXU0I4ZkNBMU1Da2dMeUF4TURBcElDc2daR0YwWVM1NU8xeHVJQ0JqYjI1emRDQnpZMkZzWlZSeVlXNXpabTl5YlZnZ1BTQXRJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dLaUFvYzJOaGJHVWdLaUF4S1R0Y2JpQWdZMjl1YzNRZ2MyTmhiR1ZVY21GdWMyWnZjbTFaSUQwZ0xTQjBjbUZ1YzJadmNtMVBjbWxuYVc1WklDb2dLSE5qWVd4bFdTQXFJREVwTzF4dUlDQmpiMjV6ZENCelkyRnNaVkpsY0d4aFkyVllJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXQ0F2SUhOallXeGxPMXh1SUNCamIyNXpkQ0J6WTJGc1pWSmxjR3hoWTJWWklEMGdkSEpoYm5ObWIzSnRUM0pwWjJsdVdTQXZJSE5qWVd4bFdUdGNiaUFnWTI5dWMzUWdkSEpoYm5ObWIzSnRJRDBnZTF4dUlDQWdJSFJ5WVc1emJHRjBaVG9nWUhSeVlXNXpiR0YwWlNna2UzTjBZWFJsTG5SeVlXNXpiR0YwWlZoOUxDQWtlM04wWVhSbExuUnlZVzV6YkdGMFpWbDlLU0JnTEZ4dUlDQWdJSE5qWVd4bE9pQmdkSEpoYm5Oc1lYUmxLQ1I3YzJOaGJHVlVjbUZ1YzJadmNtMVlmU3dnSkh0elkyRnNaVlJ5WVc1elptOXliVmw5S1NCelkyRnNaU2drZTNOallXeGxmU3dnSkh0elkyRnNaVmw5S1NCMGNtRnVjMnhoZEdVb0pIdHpZMkZzWlZKbGNHeGhZMlZZZlN3Z0pIdHpZMkZzWlZKbGNHeGhZMlZaZlNrZ1lDeGNiaUFnSUNCeWIzUmhkR1U2SUdCeWIzUmhkR1VvSkh0emRHRjBaUzV5YjNSaGRHVjlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGg5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxsOUtTQmdMRnh1SUNBZ0lITnJaWGRZT2lCZ2MydGxkMWdvSkh0emRHRjBaUzV6YTJWM1dIMHBJR0FzWEc0Z0lDQWdjMnRsZDFrNklHQnphMlYzV1Nna2UzTjBZWFJsTG5OclpYZFpmU2tnWUZ4dUlDQjlPMXh1WEc0Z0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJR2xtSUNoemRHRjBaUzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNCcFppQW9kSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNCb1lYTlVjbUZ1YzJadmNtMGdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NISnZjSE5iWTJGdFpXeFViMFJoYzJnb2EyVjVLVjBnUFNCemRHRjBaVnRyWlhsZE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHbG1JQ2hvWVhOVWNtRnVjMlp2Y20wcElIdGNiaUFnSUNCd2NtOXdjeTUwY21GdWMyWnZjbTBnUFNBbkp6dGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGNtRnVjMlp2Y20wcElIdGNiaUFnSUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTB1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCa1pXWmhkV3gwVm1Gc2RXVWdQU0FvYTJWNUlEMDlQU0FuYzJOaGJHVW5LU0EvSUNjeEp5QTZJQ2N3Snp0Y2JpQWdJQ0FnSUNBZ2NISnZjSE11ZEhKaGJuTm1iM0p0SUNzOUlIUnlZVzV6Wm05eWJWdHJaWGxkTG5KbGNHeGhZMlVvTDNWdVpHVm1hVzVsWkM5bkxDQmtaV1poZFd4MFZtRnNkV1VwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ3Y205d2N6dGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL2luYy92YWx1ZS10eXBlcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGZpbGw6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzdHJva2U6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBzY2FsZTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWDogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIHNjYWxlWTogX3ZhbHVlVHlwZXMuc2NhbGUsXG4gIGQ6IF92YWx1ZVR5cGVzLmNvbXBsZXgsXG4gIHBvaW50czogX3ZhbHVlVHlwZXMuY29tcGxleCxcbiAgb3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGEsXG4gIGZpbGxPcGFjaXR5OiBfdmFsdWVUeXBlcy5hbHBoYSxcbiAgc3Ryb2tlT3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGFcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDNaaGJIVmxMWFI1Y0dWekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdhMEpCUldVN1FVRkRZaXg1UWtGRVlUdEJRVVZpTERKQ1FVWmhPMEZCUjJJc01FSkJTR0U3UVVGSllpd3lRa0ZLWVR0QlFVdGlMREpDUVV4aE8wRkJUV0lzZDBKQlRtRTdRVUZQWWl3MlFrRlFZVHRCUVZGaUxEUkNRVkpoTzBGQlUySXNaME5CVkdFN1FVRlZZanRCUVZaaExFTWlMQ0ptYVd4bElqb2lkbUZzZFdVdGRIbHdaWE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJoYkhCb1lTd2dZMjlzYjNJc0lHTnZiWEJzWlhnc0lITmpZV3hsSUgwZ1puSnZiU0FuTGk0dkxpNHZhVzVqTDNaaGJIVmxMWFI1Y0dWekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNCbWFXeHNPaUJqYjJ4dmNpeGNiaUFnYzNSeWIydGxPaUJqYjJ4dmNpeGNiaUFnYzJOaGJHVTZJSE5qWVd4bExGeHVJQ0J6WTJGc1pWZzZJSE5qWVd4bExGeHVJQ0J6WTJGc1pWazZJSE5qWVd4bExGeHVJQ0JrT2lCamIyMXdiR1Y0TEZ4dUlDQndiMmx1ZEhNNklHTnZiWEJzWlhnc1hHNGdJRzl3WVdOcGRIazZJR0ZzY0doaExGeHVJQ0JtYVd4c1QzQmhZMmwwZVRvZ1lXeHdhR0VzWEc0Z0lITjBjbTlyWlU5d1lXTnBkSGs2SUdGc2NHaGhYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmcvdmFsdWUtdHlwZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQZXJjZW50YWdlIG9mIHRvdGFsIGxlbmd0aFxuICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbnZhciBwZXJjZW50VG9QaXhlbHMgPSBmdW5jdGlvbiAocGVyY2VudCwgbGVuZ3RoKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KHBlcmNlbnQpIC8gMTAwICogbGVuZ3RoICsgJ3B4Jztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdGF0ZSwgbGVuZ3RoKSB7XG4gIHZhciBzdHlsZXMgPSB7fTtcbiAgdmFyIGRhc2hBcnJheVN0eWxlcyA9IHtcbiAgICBsZW5ndGg6IDAsXG4gICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICB9O1xuICB2YXIgaGFzRGFzaEFycmF5ID0gZmFsc2U7XG5cbiAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICBzdHlsZXNbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGRhc2hBcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBkYXNoQXJyYXlTdHlsZXMuc3BhY2luZztcbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkxYQmhkR2d2WW5WcGJHUXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPMEZCVFVFc1NVRkJUU3hyUWtGQmEwSXNWVUZCUXl4UFFVRkVMRVZCUVZVc1RVRkJWanRCUVVGQkxGTkJRWE5DTEZkQlFWY3NUMEZCV0N4SlFVRnpRaXhIUVVGMlFpeEhRVUU0UWl4TlFVRTVRaXhIUVVGMVF5eEpRVUUxUkR0QlFVRkJMRU5CUVhoQ096dHJRa0ZGWlN4VlFVRkRMRXRCUVVRc1JVRkJVU3hOUVVGU0xFVkJRVzFDTzBGQlEyaERMRTFCUVUwc1UwRkJVeXhGUVVGbU8wRkJRMEVzVFVGQlRTeHJRa0ZCYTBJN1FVRkRkRUlzV1VGQlVTeERRVVJqTzBGQlJYUkNMR0ZCUVZNc1UwRkJVenRCUVVaSkxFZEJRWGhDTzBGQlNVRXNUVUZCU1N4bFFVRmxMRXRCUVc1Q096dEJRVVZCTEU5QlFVc3NTVUZCU1N4SFFVRlVMRWxCUVdkQ0xFdEJRV2hDTEVWQlFYVkNPMEZCUTNKQ0xGRkJRVWtzVFVGQlRTeGpRVUZPTEVOQlFYRkNMRWRCUVhKQ0xFTkJRVW9zUlVGQkswSTdRVUZETjBJc1ZVRkJUU3hSUVVGUkxFMUJRVTBzUjBGQlRpeERRVUZrT3p0QlFVVkJMR05CUVZFc1IwRkJVanRCUVVOQkxHRkJRVXNzVVVGQlREdEJRVU5CTEdGQlFVc3NVMEZCVER0QlFVTkZMSGxDUVVGbExFbEJRV1k3UVVGRFFTd3dRa0ZCWjBJc1IwRkJhRUlzU1VGQmRVSXNaMEpCUVdkQ0xFdEJRV2hDTEVWQlFYVkNMRTFCUVhaQ0xFTkJRWFpDTzBGQlEwRTdRVUZEUml4aFFVRkxMRkZCUVV3N1FVRkRSU3hwUWtGQlR5eHRRa0ZCVUN4SlFVRTRRaXhuUWtGQlowSXNRMEZCUXl4TFFVRnFRaXhGUVVGM1FpeE5RVUY0UWl4RFFVRTVRanRCUVVOQk8wRkJRMFk3UVVGRFJTeHBRa0ZCVHl4SFFVRlFMRWxCUVdNc1MwRkJaRHRCUVZaR08wRkJXVVE3UVVGRFJqczdRVUZGUkN4TlFVRkpMRmxCUVVvc1JVRkJhMEk3UVVGRGFFSXNWMEZCVHl4clFrRkJVQ3hKUVVFMlFpeG5Ra0ZCWjBJc1RVRkJhRUlzUjBGQmVVSXNSMEZCZWtJc1IwRkJLMElzWjBKQlFXZENMRTlCUVRWRk8wRkJRMFE3TzBGQlJVUXNVMEZCVHl4TlFVRlFPMEZCUTBRc1F5SXNJbVpwYkdVaU9pSmlkV2xzWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJRU52Ym5abGNuUWdjR1Z5WTJWdWRHRm5aU0IwYnlCd2FYaGxiSE5jYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVR1Z5WTJWdWRHRm5aU0J2WmlCMGIzUmhiQ0JzWlc1bmRHaGNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJVYjNSaGJDQnNaVzVuZEdoY2Jpb3ZYRzVqYjI1emRDQndaWEpqWlc1MFZHOVFhWGhsYkhNZ1BTQW9jR1Z5WTJWdWRDd2diR1Z1WjNSb0tTQTlQaUFvY0dGeWMyVkdiRzloZENod1pYSmpaVzUwS1NBdklERXdNQ2tnS2lCc1pXNW5kR2dnS3lBbmNIZ25PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvYzNSaGRHVXNJR3hsYm1kMGFDa2dQVDRnZTF4dUlDQmpiMjV6ZENCemRIbHNaWE1nUFNCN2ZUdGNiaUFnWTI5dWMzUWdaR0Z6YUVGeWNtRjVVM1I1YkdWeklEMGdlMXh1SUNBZ0lHeGxibWQwYURvZ01DeGNiaUFnSUNCemNHRmphVzVuT2lCc1pXNW5kR2dnS3lBbmNIZ25YRzRnSUgwN1hHNGdJR3hsZENCb1lYTkVZWE5vUVhKeVlYa2dQU0JtWVd4elpUdGNibHh1SUNCbWIzSWdLR3hsZENCclpYa2dhVzRnYzNSaGRHVXBJSHRjYmlBZ0lDQnBaaUFvYzNSaGRHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQnpkR0YwWlZ0clpYbGRPMXh1WEc0Z0lDQWdJQ0J6ZDJsMFkyZ2dLR3RsZVNrZ2UxeHVJQ0FnSUNBZ1kyRnpaU0FuYkdWdVozUm9KenBjYmlBZ0lDQWdJR05oYzJVZ0ozTndZV05wYm1jbk9seHVJQ0FnSUNBZ0lDQm9ZWE5FWVhOb1FYSnlZWGtnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0JrWVhOb1FYSnlZWGxUZEhsc1pYTmJhMlY1WFNBOUlIQmxjbU5sYm5SVWIxQnBlR1ZzY3loMllXeDFaU3dnYkdWdVozUm9LVHRjYmlBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQmpZWE5sSUNkdlptWnpaWFFuT2x4dUlDQWdJQ0FnSUNCemRIbHNaWE5iSjNOMGNtOXJaUzFrWVhOb2IyWm1jMlYwSjEwZ1BTQndaWEpqWlc1MFZHOVFhWGhsYkhNb0xYWmhiSFZsTENCc1pXNW5kR2dwTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJR1JsWm1GMWJIUTZYRzRnSUNBZ0lDQWdJSE4wZVd4bGMxdHJaWGxkSUQwZ2RtRnNkV1U3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYVdZZ0tHaGhjMFJoYzJoQmNuSmhlU2tnZTF4dUlDQWdJSE4wZVd4bGMxc25jM1J5YjJ0bExXUmhjMmhoY25KaGVTZGRJRDBnWkdGemFFRnljbUY1VTNSNWJHVnpMbXhsYm1kMGFDQXJJQ2NnSnlBcklHUmhjMmhCY25KaGVWTjBlV3hsY3k1emNHRmphVzVuTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhOMGVXeGxjenRjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJwb3Btb3Rpb24uZ2xvYmFsLmpzIn0=