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
	
	var _calc2 = __webpack_require__(5);
	
	var _calc = _interopRequireWildcard(_calc2);
	
	var _easing2 = __webpack_require__(2);
	
	var _easing = _interopRequireWildcard(_easing2);
	
	var _transformers = __webpack_require__(3);
	
	var _transform = _interopRequireWildcard(_transformers);
	
	var _valueTypes2 = __webpack_require__(4);
	
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
	exports.cubicBezier = exports.anticipate = exports.createAnticipateEasing = exports.backInOut = exports.backOut = exports.backIn = exports.createBackIn = exports.circInOut = exports.circOut = exports.circIn = exports.easeInOut = exports.easeOut = exports.easeIn = exports.createExpoIn = exports.linear = exports.createMirroredEasing = exports.createReversedEasing = undefined;
	
	var _transformers = __webpack_require__(3);
	
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.bezier = exports.blendColor = exports.alpha = exports.color = exports.hsla = exports.rgba = exports.rgbUnit = exports.px = exports.degrees = exports.percent = exports.transformChildValues = exports.steps = exports.smooth = exports.wrap = exports.nonlinearSpring = exports.spring = exports.generateNonIntergratedSpring = exports.multiply = exports.divide = exports.add = exports.subtract = exports.interpolate = exports.flow = exports.conditional = exports.clamp = exports.clampMin = exports.clampMax = exports.applyOffset = exports.appendUnit = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _calc = __webpack_require__(5);
	
	var _utils = __webpack_require__(25);
	
	var _parsers = __webpack_require__(24);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJ2IiwiYXBwZW5kVW5pdCIsInVuaXQiLCJhcHBseU9mZnNldCIsImZyb20iLCJ0byIsImdldE9mZnNldCIsInN1YnRyYWN0IiwiYXBwbHlPZmZzZXRUbyIsImFkZCIsImNsYW1wTWF4IiwibWF4IiwiTWF0aCIsIm1pbiIsImNsYW1wTWluIiwiY2xhbXAiLCJfbWluIiwiX21heCIsImNvbmRpdGlvbmFsIiwiY29uZGl0aW9uIiwiaWZUcnVlIiwiaWZGYWxzZSIsImFjdGlvbiIsImZsb3ciLCJ0cmFuc2Zvcm1lcnMiLCJudW1UcmFuc2Zvcm1lcnMiLCJsZW5ndGgiLCJpIiwiYWNjIiwiYXJncyIsImludGVycG9sYXRlIiwiaW5wdXQiLCJvdXRwdXQiLCJyYW5nZUVhc2luZyIsInJhbmdlTGVuZ3RoIiwiZmluYWxJbmRleCIsInByb2dyZXNzSW5SYW5nZSIsImVhc2VkUHJvZ3Jlc3MiLCJvcmlnaW4iLCJkaXZpZGUiLCJtdWx0aXBseSIsImdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmciLCJhbHRlckRpc3BsYWNlbWVudCIsImNvbnN0YW50IiwiZGlzcGxhY2VtZW50Iiwic3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQiLCJhYnMiLCJzcHJpbmciLCJub25saW5lYXJTcHJpbmciLCJzcXJ0Iiwid3JhcCIsInJhbmdlU2l6ZSIsInNtb290aCIsInN0cmVuZ3RoIiwicHJldmlvdXNWYWx1ZSIsImhhc1Ntb290aGVkIiwiY3VycmVudFZhbHVlIiwibmV3VmFsdWUiLCJzdGVwcyIsInByb2dyZXNzIiwidHJhbnNmb3JtQ2hpbGRWYWx1ZXMiLCJjaGlsZFRyYW5zZm9ybWVycyIsIm11dGFibGVTdGF0ZSIsImtleSIsImNoaWxkVHJhbnNmb3JtZXIiLCJwZXJjZW50IiwiZGVncmVlcyIsInB4IiwicmdiVW5pdCIsInJvdW5kIiwicmdiYVRlbXBsYXRlIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYWxwaGEiLCJyZ2JhIiwiaHNsYVRlbXBsYXRlIiwiaHVlIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsImhzbGEiLCJwYXJzZUZsb2F0IiwiY29sb3IiLCJoYXNPd25Qcm9wZXJ0eSIsImJsZW5kIiwiZnJvbUV4cG8iLCJ0b0V4cG8iLCJibGVuZENvbG9yIiwiZnJvbUNvbG9yIiwidG9Db2xvciIsImJsZW5kZWQiLCJyZXNvbHZlMyIsInBvaW50cyIsInQiLCJ1dCIsInJlc29sdmU0IiwiYTEiLCJiZXppZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLFVBQUNDLENBQUQ7QUFBQSxTQUFPQSxDQUFQO0FBQUEsQ0FBYjs7QUFFQTs7Ozs7OztBQU9PLElBQU1DLGtDQUFhLFVBQUNDLElBQUQ7QUFBQSxTQUFVLFVBQUNGLENBQUQ7QUFBQSxnQkFBVUEsQ0FBVixHQUFjRSxJQUFkO0FBQUEsR0FBVjtBQUFBLENBQW5COztBQUVQOzs7Ozs7OztBQVFPLElBQU1DLG9DQUFjLFVBQUNDLElBQUQsRUFBT0MsRUFBUCxFQUFjO0FBQ3ZDLE1BQU1DLFlBQVlDLFNBQVNILElBQVQsQ0FBbEI7QUFDQSxNQUFNSSxnQkFBZ0JDLElBQUlKLEVBQUosQ0FBdEI7QUFDQSxTQUFPLFVBQUNMLENBQUQ7QUFBQSxXQUFPUSxjQUFjRixVQUFVTixDQUFWLENBQWQsQ0FBUDtBQUFBLEdBQVA7QUFDRCxDQUpNOztBQU1QOzs7Ozs7O0FBT08sSUFBTVUsOEJBQVcsVUFBQ0MsR0FBRDtBQUFBLFNBQVMsVUFBQ1gsQ0FBRDtBQUFBLFdBQU9ZLEtBQUtDLEdBQUwsQ0FBU2IsQ0FBVCxFQUFZVyxHQUFaLENBQVA7QUFBQSxHQUFUO0FBQUEsQ0FBakI7QUFDQSxJQUFNRyw4QkFBVyxVQUFDRCxHQUFEO0FBQUEsU0FBUyxVQUFDYixDQUFEO0FBQUEsV0FBT1ksS0FBS0QsR0FBTCxDQUFTWCxDQUFULEVBQVlhLEdBQVosQ0FBUDtBQUFBLEdBQVQ7QUFBQSxDQUFqQjtBQUNBLElBQU1FLHdCQUFRLFVBQUNGLEdBQUQsRUFBTUYsR0FBTixFQUFjO0FBQ2pDLE1BQU1LLE9BQU9GLFNBQVNELEdBQVQsQ0FBYjtBQUNBLE1BQU1JLE9BQU9QLFNBQVNDLEdBQVQsQ0FBYjtBQUNBLFNBQU8sVUFBQ1gsQ0FBRDtBQUFBLFdBQU9nQixLQUFLQyxLQUFLakIsQ0FBTCxDQUFMLENBQVA7QUFBQSxHQUFQO0FBQ0QsQ0FKTTs7QUFNQSxJQUFNa0Isb0NBQWMsVUFBQ0MsU0FBRCxFQUFZQyxNQUFaO0FBQUEsTUFBb0JDLE9BQXBCLHVFQUE4QnRCLElBQTlCO0FBQUEsU0FBdUMsVUFBQ0MsQ0FBRCxFQUFJc0IsTUFBSixFQUFlO0FBQy9FLFdBQU9ILFVBQVVuQixDQUFWLEVBQWFzQixNQUFiLElBQXVCRixPQUFPcEIsQ0FBUCxFQUFVc0IsTUFBVixDQUF2QixHQUEyQ0QsUUFBUXJCLENBQVIsRUFBV3NCLE1BQVgsQ0FBbEQ7QUFDRCxHQUYwQjtBQUFBLENBQXBCOztBQUlQOzs7Ozs7O0FBT08sSUFBTUMsc0JBQU8sWUFBcUI7QUFBQSxvQ0FBakJDLFlBQWlCO0FBQWpCQSxnQkFBaUI7QUFBQTs7QUFDdkMsTUFBTUMsa0JBQWtCRCxhQUFhRSxNQUFyQztBQUNBLE1BQUlDLElBQUksQ0FBUjs7QUFFQSxTQUFPLFVBQUNDLEdBQUQsRUFBa0I7QUFBQSx1Q0FBVEMsSUFBUztBQUFUQSxVQUFTO0FBQUE7O0FBQ3ZCLFFBQUk3QixJQUFJNEIsR0FBUjtBQUNBLFNBQUtELElBQUksQ0FBVCxFQUFZQSxJQUFJRixlQUFoQixFQUFpQ0UsR0FBakMsRUFBc0M7QUFDcEMzQixVQUFJd0IsYUFBYUcsQ0FBYix1QkFBZ0IzQixDQUFoQixTQUFzQjZCLElBQXRCLEVBQUo7QUFDRDs7QUFFRCxXQUFPN0IsQ0FBUDtBQUNELEdBUEQ7QUFRRCxDQVpNOztBQWNQOzs7Ozs7O0FBT08sSUFBTThCLG9DQUFjLFVBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFnQkMsV0FBaEIsRUFBZ0M7QUFDekQsTUFBTUMsY0FBY0gsTUFBTUwsTUFBMUI7QUFDQSxNQUFNUyxhQUFhRCxjQUFjLENBQWpDOztBQUVBLFNBQU8sVUFBQ2xDLENBQUQsRUFBTztBQUNaO0FBQ0EsUUFBSUEsS0FBSytCLE1BQU0sQ0FBTixDQUFULEVBQW1CO0FBQ2pCLGFBQU9DLE9BQU8sQ0FBUCxDQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJaEMsS0FBSytCLE1BQU1JLFVBQU4sQ0FBVCxFQUE0QjtBQUMxQixhQUFPSCxPQUFPRyxVQUFQLENBQVA7QUFDRDs7QUFFRCxRQUFJUixJQUFJLENBQVI7O0FBRUE7QUFDQSxXQUFPQSxJQUFJTyxXQUFYLEVBQXdCUCxHQUF4QixFQUE2QjtBQUMzQixVQUFJSSxNQUFNSixDQUFOLElBQVczQixDQUFYLElBQWdCMkIsTUFBTVEsVUFBMUIsRUFBc0M7QUFDcEM7QUFDRDtBQUNGOztBQUVELFFBQU1DLGtCQUFrQixnQ0FBcUJMLE1BQU1KLElBQUksQ0FBVixDQUFyQixFQUFtQ0ksTUFBTUosQ0FBTixDQUFuQyxFQUE2QzNCLENBQTdDLENBQXhCO0FBQ0EsUUFBTXFDLGdCQUFpQkosV0FBRCxHQUFnQkEsWUFBWU4sSUFBSSxDQUFoQixFQUFtQlMsZUFBbkIsQ0FBaEIsR0FBc0RBLGVBQTVFO0FBQ0EsV0FBTyxnQ0FBcUJKLE9BQU9MLElBQUksQ0FBWCxDQUFyQixFQUFvQ0ssT0FBT0wsQ0FBUCxDQUFwQyxFQUErQ1UsYUFBL0MsQ0FBUDtBQUNELEdBdkJEO0FBd0JELENBNUJNOztBQThCQSxJQUFNOUIsOEJBQVcsVUFBQytCLE1BQUQ7QUFBQSxTQUFZLFVBQUN0QyxDQUFEO0FBQUEsV0FBT0EsSUFBSXNDLE1BQVg7QUFBQSxHQUFaO0FBQUEsQ0FBakI7QUFDQSxJQUFNN0Isb0JBQU0sVUFBQzZCLE1BQUQ7QUFBQSxTQUFZLFVBQUN0QyxDQUFEO0FBQUEsV0FBT0EsSUFBSXNDLE1BQVg7QUFBQSxHQUFaO0FBQUEsQ0FBWjtBQUNBLElBQU1DLDBCQUFTLFVBQUNELE1BQUQ7QUFBQSxTQUFZLFVBQUN0QyxDQUFEO0FBQUEsV0FBT0EsSUFBSXNDLE1BQVg7QUFBQSxHQUFaO0FBQUEsQ0FBZjtBQUNBLElBQU1FLDhCQUFXLFVBQUNGLE1BQUQ7QUFBQSxTQUFZLFVBQUN0QyxDQUFEO0FBQUEsV0FBT0EsSUFBSXNDLE1BQVg7QUFBQSxHQUFaO0FBQUEsQ0FBakI7O0FBRUEsSUFBTUcsc0VBQStCO0FBQUEsTUFBQ0MsaUJBQUQsdUVBQXFCM0MsSUFBckI7QUFBQSxTQUE4QixVQUFDNEMsUUFBRCxFQUFXTCxNQUFYO0FBQUEsV0FBc0IsVUFBQ3RDLENBQUQsRUFBTztBQUNyRyxVQUFNNEMsZUFBZU4sU0FBU3RDLENBQTlCO0FBQ0EsVUFBTTZDLDZCQUE2QixDQUFFRixRQUFGLElBQWMsSUFBSUQsa0JBQWtCOUIsS0FBS2tDLEdBQUwsQ0FBU0YsWUFBVCxDQUFsQixDQUFsQixDQUFuQztBQUNBLGFBQVFBLGdCQUFnQixDQUFqQixHQUFzQk4sU0FBU08sMEJBQS9CLEdBQTREUCxTQUFTTywwQkFBNUU7QUFDRCxLQUp5RTtBQUFBLEdBQTlCO0FBQUEsQ0FBckM7O0FBTUEsSUFBTUUsMEJBQVNOLDhCQUFmO0FBQ0EsSUFBTU8sNENBQWtCUCw2QkFBNkI3QixLQUFLcUMsSUFBbEMsQ0FBeEI7O0FBRUEsSUFBTUMsc0JBQU8sVUFBQ3JDLEdBQUQsRUFBTUYsR0FBTjtBQUFBLFNBQWMsVUFBQ1gsQ0FBRCxFQUFPO0FBQ3ZDLFFBQU1tRCxZQUFZeEMsTUFBTUUsR0FBeEI7QUFDQSxXQUFPLENBQUMsQ0FBQ2IsSUFBSWEsR0FBTCxJQUFZc0MsU0FBWixHQUF3QkEsU0FBekIsSUFBc0NBLFNBQXRDLEdBQWtEdEMsR0FBekQ7QUFDRCxHQUhtQjtBQUFBLENBQWI7O0FBS0EsSUFBTXVDLDBCQUFTLFlBQW1CO0FBQUEsTUFBbEJDLFFBQWtCLHVFQUFQLEVBQU87O0FBQ3ZDLE1BQUlDLGdCQUFnQixDQUFwQjtBQUNBLE1BQUlDLGNBQWMsS0FBbEI7O0FBRUEsU0FBTyxVQUFDdkQsQ0FBRCxFQUFPO0FBQ1osUUFBTXdELGVBQWdCRCxXQUFELEdBQWdCRCxhQUFoQixHQUFnQ3RELENBQXJEO0FBQ0EsUUFBTXlELFdBQVcsa0JBQWNELFlBQWQsRUFBNEJGLGFBQTVCLEVBQTJDLG9DQUEzQyxFQUFpRUQsUUFBakUsQ0FBakI7QUFDQUMsb0JBQWdCRyxRQUFoQjtBQUNBRixrQkFBYyxJQUFkO0FBQ0EsV0FBT0UsUUFBUDtBQUNELEdBTkQ7QUFPRCxDQVhNOztBQWFBLElBQU1DLHdCQUFRLFVBQUNBLEtBQUQsRUFBUTdDLEdBQVIsRUFBYUYsR0FBYjtBQUFBLFNBQXFCLFVBQUNYLENBQUQsRUFBTztBQUMvQyxRQUFNMkQsV0FBVyxnQ0FBcUI5QyxHQUFyQixFQUEwQkYsR0FBMUIsRUFBK0JYLENBQS9CLENBQWpCO0FBQ0EsV0FBTyx3QkFBYTBELEtBQWIsRUFBb0JDLFFBQXBCLENBQVA7QUFDRCxHQUhvQjtBQUFBLENBQWQ7O0FBS0EsSUFBTUMsc0RBQXVCLFVBQUNDLGlCQUFELEVBQXVCO0FBQ3pELE1BQU1DLGVBQWUsRUFBckI7QUFDQSxTQUFPLFVBQUM5RCxDQUFELEVBQU87QUFDWixTQUFLLElBQUkrRCxHQUFULElBQWdCL0QsQ0FBaEIsRUFBbUI7QUFDakIsVUFBTWdFLG1CQUFtQkgsa0JBQWtCRSxHQUFsQixDQUF6QjtBQUNBLFVBQUlDLGdCQUFKLEVBQXNCO0FBQ3BCRixxQkFBYUMsR0FBYixJQUFvQkMsaUJBQWlCaEUsRUFBRStELEdBQUYsQ0FBakIsQ0FBcEI7QUFDRDtBQUNGOztBQUVELFdBQU9ELFlBQVA7QUFDRCxHQVREO0FBVUQsQ0FaTTs7QUFjUDtBQUNPLElBQU1HLDRCQUFVaEUsV0FBVyxHQUFYLENBQWhCO0FBQ0EsSUFBTWlFLDRCQUFVakUsV0FBVyxLQUFYLENBQWhCO0FBQ0EsSUFBTWtFLGtCQUFLbEUsV0FBVyxJQUFYLENBQVg7O0FBRUEsSUFBTW1FLDRCQUFVN0MsS0FDckJSLE1BQU0sQ0FBTixFQUFTLEdBQVQsQ0FEcUIsRUFFckJILEtBQUt5RCxLQUZnQixDQUFoQjs7QUFLUCxJQUFNQyxlQUFlO0FBQUEsTUFBR0MsR0FBSCxRQUFHQSxHQUFIO0FBQUEsTUFBUUMsS0FBUixRQUFRQSxLQUFSO0FBQUEsTUFBZUMsSUFBZixRQUFlQSxJQUFmO0FBQUEsd0JBQXFCQyxLQUFyQjtBQUFBLE1BQXFCQSxLQUFyQiw4QkFBNkIsQ0FBN0I7QUFBQSxtQkFDWEgsR0FEVyxVQUNIQyxLQURHLFVBQ09DLElBRFAsVUFDZ0JDLEtBRGhCO0FBQUEsQ0FBckI7O0FBR08sSUFBTUMsc0JBQU9wRCxLQUNsQnFDLHFCQUFxQjtBQUNuQlcsT0FBS0gsT0FEYztBQUVuQkksU0FBT0osT0FGWTtBQUduQkssUUFBTUwsT0FIYTtBQUluQk07QUFKbUIsQ0FBckIsQ0FEa0IsRUFPbEJKLFlBUGtCLENBQWI7O0FBVVAsSUFBTU0sZUFBZTtBQUFBLE1BQUdDLEdBQUgsU0FBR0EsR0FBSDtBQUFBLE1BQVFDLFVBQVIsU0FBUUEsVUFBUjtBQUFBLE1BQW9CQyxTQUFwQixTQUFvQkEsU0FBcEI7QUFBQSwwQkFBK0JMLEtBQS9CO0FBQUEsTUFBK0JBLEtBQS9CLCtCQUF1QyxDQUF2QztBQUFBLG1CQUNYRyxHQURXLFVBQ0hDLFVBREcsVUFDWUMsU0FEWixVQUMwQkwsS0FEMUI7QUFBQSxDQUFyQjs7QUFHTyxJQUFNTSxzQkFBT3pELEtBQ2xCcUMscUJBQXFCO0FBQ25CaUIsT0FBS0ksVUFEYztBQUVuQkgsY0FBWWIsT0FGTztBQUduQmMsYUFBV2QsT0FIUTtBQUluQlM7QUFKbUIsQ0FBckIsQ0FEa0IsRUFPbEJFLFlBUGtCLENBQWI7O0FBVUEsSUFBTU0sd0JBQVEsVUFBQ2xGLENBQUQsRUFBTztBQUMxQixNQUFJQSxFQUFFbUYsY0FBRixDQUFpQixLQUFqQixDQUFKLEVBQTZCO0FBQzNCLFdBQU9SLEtBQUszRSxDQUFMLENBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUEsRUFBRW1GLGNBQUYsQ0FBaUIsS0FBakIsQ0FBSixFQUE2QjtBQUNsQyxXQUFPSCxLQUFLaEYsQ0FBTCxDQUFQO0FBQ0Q7QUFDRCxTQUFPQSxDQUFQO0FBQ0QsQ0FQTTs7QUFTQSxJQUFNMEUsd0JBQVEzRCxNQUFNLENBQU4sRUFBUyxDQUFULENBQWQ7O0FBRVAsSUFBTXFFLFFBQVEsVUFBQ2hGLElBQUQsRUFBT0MsRUFBUCxFQUFXTCxDQUFYLEVBQWlCO0FBQzdCLE1BQU1xRixXQUFXakYsT0FBT0EsSUFBeEI7QUFDQSxNQUFNa0YsU0FBU2pGLEtBQUtBLEVBQXBCO0FBQ0EsU0FBT08sS0FBS3FDLElBQUwsQ0FBVWpELEtBQUtzRixTQUFTRCxRQUFkLElBQTBCQSxRQUFwQyxDQUFQO0FBQ0QsQ0FKRDtBQUtBO0FBQ08sSUFBTUUsa0NBQWEsVUFBQ25GLElBQUQsRUFBT0MsRUFBUCxFQUFjO0FBQ3RDLE1BQU1tRixZQUFZLHFCQUFTcEYsSUFBVCxJQUFpQixvQkFBV0EsSUFBWCxDQUFqQixHQUFvQ0EsSUFBdEQ7QUFDQSxNQUFNcUYsVUFBVSxxQkFBU3BGLEVBQVQsSUFBZSxvQkFBV0EsRUFBWCxDQUFmLEdBQStCQSxFQUEvQzs7QUFFQSxNQUFNcUYsdUJBQWVGLFNBQWYsQ0FBTjs7QUFFQSxTQUFPLFVBQUN4RixDQUFELEVBQU87QUFDWixTQUFLLElBQUkrRCxHQUFULElBQWdCMkIsT0FBaEIsRUFBeUI7QUFDdkJBLGNBQVEzQixHQUFSLElBQWVxQixNQUFNSSxVQUFVekIsR0FBVixDQUFOLEVBQXNCMEIsUUFBUTFCLEdBQVIsQ0FBdEIsRUFBb0MvRCxDQUFwQyxDQUFmO0FBQ0Q7QUFDRDBGLFlBQVFuQixHQUFSLEdBQWNhLE1BQU1JLFVBQVVqQixHQUFoQixFQUFxQmtCLFFBQVFsQixHQUE3QixFQUFrQ3ZFLENBQWxDLENBQWQ7QUFDQTBGLFlBQVFsQixLQUFSLEdBQWdCWSxNQUFNSSxVQUFVaEIsS0FBaEIsRUFBdUJpQixRQUFRakIsS0FBL0IsRUFBc0N4RSxDQUF0QyxDQUFoQjtBQUNBMEYsWUFBUWpCLElBQVIsR0FBZVcsTUFBTUksVUFBVWYsSUFBaEIsRUFBc0JnQixRQUFRaEIsSUFBOUIsRUFBb0N6RSxDQUFwQyxDQUFmO0FBQ0EwRixZQUFRaEIsS0FBUixHQUFnQixnQ0FBcUJjLFVBQVVkLEtBQS9CLEVBQXNDZSxRQUFRZixLQUE5QyxFQUFxRDFFLENBQXJELENBQWhCO0FBQ0EsV0FBTzBGLE9BQVA7QUFDRCxHQVREO0FBVUQsQ0FoQk07O0FBa0JQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEsSUFBTUMsV0FBVyxVQUFDQyxNQUFEO0FBQUEsU0FBWSxVQUFDQyxDQUFELEVBQU87QUFDbEMsUUFBTUMsS0FBSyxJQUFJRCxDQUFmO0FBQ0EsV0FBTyxDQUFDRCxPQUFPLENBQVAsSUFBWUUsRUFBWixHQUFpQkYsT0FBTyxDQUFQLElBQVlDLENBQTlCLElBQW1DQyxFQUFuQyxHQUF3QyxDQUFDRixPQUFPLENBQVAsSUFBWUUsRUFBWixHQUFpQkYsT0FBTyxDQUFQLElBQVlDLENBQTlCLElBQW1DQSxDQUFsRjtBQUNELEdBSGdCO0FBQUEsQ0FBakI7O0FBS0EsSUFBTUUsV0FBVyxVQUFDSCxNQUFEO0FBQUEsU0FBWSxVQUFDQyxDQUFELEVBQU87QUFDbEMsUUFBTUMsS0FBSyxJQUFJRCxDQUFmO0FBQ0EsUUFBTUcsS0FBS0osT0FBTyxDQUFQLElBQVlFLEVBQVosR0FBaUJGLE9BQU8sQ0FBUCxJQUFZQyxDQUF4QztBQUNBLFdBQU8sQ0FBQyxDQUFDRCxPQUFPLENBQVAsSUFBWUUsRUFBWixHQUFpQkYsT0FBTyxDQUFQLElBQVlDLENBQTlCLElBQW1DQyxFQUFuQyxHQUF3Q0UsS0FBS0gsQ0FBOUMsSUFBbURDLEVBQW5ELEdBQXdELENBQUNFLEtBQUtGLEVBQUwsR0FBVSxDQUFDRixPQUFPLENBQVAsSUFBWUUsRUFBWixHQUFpQkYsT0FBTyxDQUFQLElBQVlDLENBQTlCLElBQW1DQSxDQUE5QyxJQUFtREEsQ0FBbEg7QUFDRCxHQUpnQjtBQUFBLENBQWpCOztBQU1PLElBQU1JLDBCQUFTLFVBQUNMLE1BQUQ7QUFBQSxTQUNuQkEsT0FBT2xFLE1BQVAsS0FBa0IsQ0FBbkIsR0FBd0JpRSxTQUFTQyxNQUFULENBQXhCLEdBQTJDRyxTQUFTSCxNQUFULENBRHZCO0FBQUEsQ0FBZiIsImZpbGUiOiJ0cmFuc2Zvcm1lcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MsIHN0ZXBQcm9ncmVzcywgc21vb3RoIGFzIGNhbGNTbW9vdGhpbmcgfSBmcm9tICcuL2NhbGMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGNvbG9yIGFzIHBhcnNlQ29sb3IgfSBmcm9tICcuL3BhcnNlcnMnO1xuaW1wb3J0IHsgdGltZVNpbmNlTGFzdEZyYW1lIH0gZnJvbSAnLi4vZnJhbWVzeW5jJztcblxuY29uc3Qgbm9vcCA9ICh2KSA9PiB2O1xuXG4vKipcbiAqIEFwcGVuZCBVbml0XG4gKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBhcHBlbmRcbiAqIGFwcGVuZFVuaXQoJ3B4JywgMjApIC0+ICcyMHB4J1xuICogQHBhcmFtICB7c3RyaW5nfSB1bml0KVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgYXBwZW5kVW5pdCA9ICh1bml0KSA9PiAodikgPT4gYCR7dn0ke3VuaXR9YDtcblxuLyoqXG4gKiBBcHBseSBvZmZzZXRcbiAqIEEgZnVuY3Rpb24gdGhhdCwgZ2l2ZW4gYSB2YWx1ZSwgd2lsbCBnZXQgdGhlIG9mZnNldCBmcm9tIGBmcm9tYFxuICogYW5kIGFwcGx5IGl0IHRvIGB0b2BcbiAqIEBwYXJhbSAge251bWJlcn0gZnJvbVxuICogQHBhcmFtICB7bnVtYmVyfSB0b1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCBhcHBseU9mZnNldCA9IChmcm9tLCB0bykgPT4ge1xuICBjb25zdCBnZXRPZmZzZXQgPSBzdWJ0cmFjdChmcm9tKTtcbiAgY29uc3QgYXBwbHlPZmZzZXRUbyA9IGFkZCh0byk7XG4gIHJldHVybiAodikgPT4gYXBwbHlPZmZzZXRUbyhnZXRPZmZzZXQodikpO1xufTtcblxuLyoqXG4gKiBDbGFtcCB2YWx1ZSBiZXR3ZWVuXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlc3RyaWN0IGEgZ2l2ZW4gdmFsdWUgYmV0d2VlbiBgbWluYCBhbmQgYG1heGBcbiAqIEBwYXJhbSAge251bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgY2xhbXBNYXggPSAobWF4KSA9PiAodikgPT4gTWF0aC5taW4odiwgbWF4KTtcbmV4cG9ydCBjb25zdCBjbGFtcE1pbiA9IChtaW4pID0+ICh2KSA9PiBNYXRoLm1heCh2LCBtaW4pO1xuZXhwb3J0IGNvbnN0IGNsYW1wID0gKG1pbiwgbWF4KSA9PiB7XG4gIGNvbnN0IF9taW4gPSBjbGFtcE1pbihtaW4pO1xuICBjb25zdCBfbWF4ID0gY2xhbXBNYXgobWF4KTtcbiAgcmV0dXJuICh2KSA9PiBfbWluKF9tYXgodikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbmRpdGlvbmFsID0gKGNvbmRpdGlvbiwgaWZUcnVlLCBpZkZhbHNlID0gbm9vcCkgPT4gKHYsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gY29uZGl0aW9uKHYsIGFjdGlvbikgPyBpZlRydWUodiwgYWN0aW9uKSA6IGlmRmFsc2UodiwgYWN0aW9uKTtcbn07XG5cbi8qKlxuICogRmxvd1xuICogQ29tcG9zZSBvdGhlciB0cmFuc2Zvcm1lcnMgdG8gcnVuIGxpbmVhcmlseVxuICogZmxvdyhtaW4oMjApLCBtYXgoNDApKVxuICogQHBhcmFtICB7Li4uZnVuY3Rpb25zfSB0cmFuc2Zvcm1lcnNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgZmxvdyA9ICguLi50cmFuc2Zvcm1lcnMpID0+IHtcbiAgY29uc3QgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIHJldHVybiAoYWNjLCAuLi5hcmdzKSA9PiB7XG4gICAgbGV0IHYgPSBhY2M7XG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldKHYsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcblxuLyoqXG4gKiBJbnRlcnBvbGF0ZSBmcm9tIHNldCBvZiB2YWx1ZXMgdG8gYW5vdGhlclxuICogQHBhcmFtICB7QXJyYXl9IGlucHV0IGFycmF5XG4gKiBAcGFyYW0gIHtBcnJheX0gb3V0cHV0XG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gcmFuZ2VFYXNpbmdcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgaW50ZXJwb2xhdGUgPSAoaW5wdXQsIG91dHB1dCwgcmFuZ2VFYXNpbmcpID0+IHtcbiAgY29uc3QgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIGNvbnN0IGZpbmFsSW5kZXggPSByYW5nZUxlbmd0aCAtIDE7XG5cbiAgcmV0dXJuICh2KSA9PiB7XG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtaW5pbXVtIHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2IDw9IGlucHV0WzBdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0WzBdO1xuICAgIH1cblxuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA+PSBpbnB1dFtmaW5hbEluZGV4XSkge1xuICAgICAgcmV0dXJuIG91dHB1dFtmaW5hbEluZGV4XTtcbiAgICB9XG5cbiAgICBsZXQgaSA9IDE7XG5cbiAgICAvLyBGaW5kIGluZGV4IG9mIHJhbmdlIHN0YXJ0XG4gICAgZm9yICg7IGkgPCByYW5nZUxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5wdXRbaV0gPiB2IHx8IGkgPT09IGZpbmFsSW5kZXgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJvZ3Jlc3NJblJhbmdlID0gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoaW5wdXRbaSAtIDFdLCBpbnB1dFtpXSwgdik7XG4gICAgY29uc3QgZWFzZWRQcm9ncmVzcyA9IChyYW5nZUVhc2luZykgPyByYW5nZUVhc2luZ1tpIC0gMV0ocHJvZ3Jlc3NJblJhbmdlKSA6IHByb2dyZXNzSW5SYW5nZTtcbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3Mob3V0cHV0W2kgLSAxXSwgb3V0cHV0W2ldLCBlYXNlZFByb2dyZXNzKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdWJ0cmFjdCA9IChvcmlnaW4pID0+ICh2KSA9PiB2IC0gb3JpZ2luO1xuZXhwb3J0IGNvbnN0IGFkZCA9IChvcmlnaW4pID0+ICh2KSA9PiB2ICsgb3JpZ2luO1xuZXhwb3J0IGNvbnN0IGRpdmlkZSA9IChvcmlnaW4pID0+ICh2KSA9PiB2IC8gb3JpZ2luO1xuZXhwb3J0IGNvbnN0IG11bHRpcGx5ID0gKG9yaWdpbikgPT4gKHYpID0+IHYgKiBvcmlnaW47XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZU5vbkludGVyZ3JhdGVkU3ByaW5nID0gKGFsdGVyRGlzcGxhY2VtZW50ID0gbm9vcCkgPT4gKGNvbnN0YW50LCBvcmlnaW4pID0+ICh2KSA9PiB7XG4gIGNvbnN0IGRpc3BsYWNlbWVudCA9IG9yaWdpbiAtIHY7XG4gIGNvbnN0IHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50ID0gLSBjb25zdGFudCAqICgwIC0gYWx0ZXJEaXNwbGFjZW1lbnQoTWF0aC5hYnMoZGlzcGxhY2VtZW50KSkpO1xuICByZXR1cm4gKGRpc3BsYWNlbWVudCA8PSAwKSA/IG9yaWdpbiArIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50IDogb3JpZ2luIC0gc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQ7XG59O1xuXG5leHBvcnQgY29uc3Qgc3ByaW5nID0gZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZygpO1xuZXhwb3J0IGNvbnN0IG5vbmxpbmVhclNwcmluZyA9IGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcoTWF0aC5zcXJ0KTtcblxuZXhwb3J0IGNvbnN0IHdyYXAgPSAobWluLCBtYXgpID0+ICh2KSA9PiB7XG4gIGNvbnN0IHJhbmdlU2l6ZSA9IG1heCAtIG1pbjtcbiAgcmV0dXJuICgodiAtIG1pbikgJSByYW5nZVNpemUgKyByYW5nZVNpemUpICUgcmFuZ2VTaXplICsgbWluO1xufTtcblxuZXhwb3J0IGNvbnN0IHNtb290aCA9IChzdHJlbmd0aCA9IDUwKSA9PiB7XG4gIGxldCBwcmV2aW91c1ZhbHVlID0gMDtcbiAgbGV0IGhhc1Ntb290aGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuICh2KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gKGhhc1Ntb290aGVkKSA/IHByZXZpb3VzVmFsdWUgOiB2O1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gY2FsY1Ntb290aGluZyhjdXJyZW50VmFsdWUsIHByZXZpb3VzVmFsdWUsIHRpbWVTaW5jZUxhc3RGcmFtZSgpLCBzdHJlbmd0aCk7XG4gICAgcHJldmlvdXNWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgIGhhc1Ntb290aGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gbmV3VmFsdWU7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc3RlcHMgPSAoc3RlcHMsIG1pbiwgbWF4KSA9PiAodikgPT4ge1xuICBjb25zdCBwcm9ncmVzcyA9IGdldFByb2dyZXNzRnJvbVZhbHVlKG1pbiwgbWF4LCB2KTtcbiAgcmV0dXJuIHN0ZXBQcm9ncmVzcyhzdGVwcywgcHJvZ3Jlc3MpO1xufTtcblxuZXhwb3J0IGNvbnN0IHRyYW5zZm9ybUNoaWxkVmFsdWVzID0gKGNoaWxkVHJhbnNmb3JtZXJzKSA9PiB7XG4gIGNvbnN0IG11dGFibGVTdGF0ZSA9IHt9O1xuICByZXR1cm4gKHYpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gdikge1xuICAgICAgY29uc3QgY2hpbGRUcmFuc2Zvcm1lciA9IGNoaWxkVHJhbnNmb3JtZXJzW2tleV07XG4gICAgICBpZiAoY2hpbGRUcmFuc2Zvcm1lcikge1xuICAgICAgICBtdXRhYmxlU3RhdGVba2V5XSA9IGNoaWxkVHJhbnNmb3JtZXIodltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbXV0YWJsZVN0YXRlO1xuICB9O1xufTtcblxuLy8gVW5pdCB0cmFuc2Zvcm1lcnNcbmV4cG9ydCBjb25zdCBwZXJjZW50ID0gYXBwZW5kVW5pdCgnJScpO1xuZXhwb3J0IGNvbnN0IGRlZ3JlZXMgPSBhcHBlbmRVbml0KCdkZWcnKTtcbmV4cG9ydCBjb25zdCBweCA9IGFwcGVuZFVuaXQoJ3B4Jyk7XG5cbmV4cG9ydCBjb25zdCByZ2JVbml0ID0gZmxvdyhcbiAgY2xhbXAoMCwgMjU1KSxcbiAgTWF0aC5yb3VuZFxuKTtcblxuY29uc3QgcmdiYVRlbXBsYXRlID0gKHsgcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEgPSAxIH0pID0+IFxuICBgcmdiYSgke3JlZH0sICR7Z3JlZW59LCAke2JsdWV9LCAke2FscGhhfSlgO1xuXG5leHBvcnQgY29uc3QgcmdiYSA9IGZsb3coXG4gIHRyYW5zZm9ybUNoaWxkVmFsdWVzKHtcbiAgICByZWQ6IHJnYlVuaXQsXG4gICAgZ3JlZW46IHJnYlVuaXQsXG4gICAgYmx1ZTogcmdiVW5pdCxcbiAgICBhbHBoYVxuICB9KSxcbiAgcmdiYVRlbXBsYXRlXG4pO1xuXG5jb25zdCBoc2xhVGVtcGxhdGUgPSAoeyBodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYWxwaGEgPSAxIH0pID0+IFxuICBgaHNsYSgke2h1ZX0sICR7c2F0dXJhdGlvbn0sICR7bGlnaHRuZXNzfSwgJHthbHBoYX0pYDtcblxuZXhwb3J0IGNvbnN0IGhzbGEgPSBmbG93KFxuICB0cmFuc2Zvcm1DaGlsZFZhbHVlcyh7XG4gICAgaHVlOiBwYXJzZUZsb2F0LFxuICAgIHNhdHVyYXRpb246IHBlcmNlbnQsXG4gICAgbGlnaHRuZXNzOiBwZXJjZW50LFxuICAgIGFscGhhXG4gIH0pLFxuICBoc2xhVGVtcGxhdGVcbik7XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9ICh2KSA9PiB7XG4gIGlmICh2Lmhhc093blByb3BlcnR5KCdyZWQnKSkge1xuICAgIHJldHVybiByZ2JhKHYpO1xuICB9IGVsc2UgaWYgKHYuaGFzT3duUHJvcGVydHkoJ2h1ZScpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cbiAgcmV0dXJuIHY7XG59O1xuXG5leHBvcnQgY29uc3QgYWxwaGEgPSBjbGFtcCgwLCAxKTtcblxuY29uc3QgYmxlbmQgPSAoZnJvbSwgdG8sIHYpID0+IHtcbiAgY29uc3QgZnJvbUV4cG8gPSBmcm9tICogZnJvbTtcbiAgY29uc3QgdG9FeHBvID0gdG8gKiB0bztcbiAgcmV0dXJuIE1hdGguc3FydCh2ICogKHRvRXhwbyAtIGZyb21FeHBvKSArIGZyb21FeHBvKTtcbn07XG4vLyBodHRwOi8vY29kZXBlbi5pby9vc3VibGFrZS9wZW4veEdWVmFOXG5leHBvcnQgY29uc3QgYmxlbmRDb2xvciA9IChmcm9tLCB0bykgPT4ge1xuICBjb25zdCBmcm9tQ29sb3IgPSBpc1N0cmluZyhmcm9tKSA/IHBhcnNlQ29sb3IoZnJvbSkgOiBmcm9tO1xuICBjb25zdCB0b0NvbG9yID0gaXNTdHJpbmcodG8pID8gcGFyc2VDb2xvcih0byk6IHRvO1xuXG4gIGNvbnN0IGJsZW5kZWQgPSB7IC4uLmZyb21Db2xvciB9O1xuXG4gIHJldHVybiAodikgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiBibGVuZGVkKSB7XG4gICAgICBibGVuZGVkW2tleV0gPSBibGVuZChmcm9tQ29sb3Jba2V5XSwgdG9Db2xvcltrZXldLCB2KTtcbiAgICB9XG4gICAgYmxlbmRlZC5yZWQgPSBibGVuZChmcm9tQ29sb3IucmVkLCB0b0NvbG9yLnJlZCwgdik7XG4gICAgYmxlbmRlZC5ncmVlbiA9IGJsZW5kKGZyb21Db2xvci5ncmVlbiwgdG9Db2xvci5ncmVlbiwgdik7XG4gICAgYmxlbmRlZC5ibHVlID0gYmxlbmQoZnJvbUNvbG9yLmJsdWUsIHRvQ29sb3IuYmx1ZSwgdik7XG4gICAgYmxlbmRlZC5hbHBoYSA9IGdldFZhbHVlRnJvbVByb2dyZXNzKGZyb21Db2xvci5hbHBoYSwgdG9Db2xvci5hbHBoYSwgdik7XG4gICAgcmV0dXJuIGJsZW5kZWQ7XG4gIH07XG59O1xuXG4vLyBCZXppZXIgcmVzb2x2ZXJcbi8vIFJlZmFjdG9yZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vaHVnaHNrL2Jlemllci9ibG9iL21hc3Rlci9pbmRleC5qc1xuLyoqXG4jIyBUaGUgTUlUIExpY2Vuc2UgKE1JVCkgIyNcblxuQ29weXJpZ2h0IChjKSAyMDEzIEh1Z2ggS2VubmVkeVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG4gKi9cbmNvbnN0IHJlc29sdmUzID0gKHBvaW50cykgPT4gKHQpID0+IHtcbiAgY29uc3QgdXQgPSAxIC0gdDtcbiAgcmV0dXJuIChwb2ludHNbMF0gKiB1dCArIHBvaW50c1sxXSAqIHQpICogdXQgKyAocG9pbnRzWzFdICogdXQgKyBwb2ludHNbMl0gKiB0KSAqIHQ7XG59O1xuXG5jb25zdCByZXNvbHZlNCA9IChwb2ludHMpID0+ICh0KSA9PiB7XG4gIGNvbnN0IHV0ID0gMSAtIHQ7XG4gIGNvbnN0IGExID0gcG9pbnRzWzFdICogdXQgKyBwb2ludHNbMl0gKiB0O1xuICByZXR1cm4gKChwb2ludHNbMF0gKiB1dCArIHBvaW50c1sxXSAqIHQpICogdXQgKyBhMSAqIHQpICogdXQgKyAoYTEgKiB1dCArIChwb2ludHNbMl0gKiB1dCArIHBvaW50c1szXSAqIHQpICogdCkgKiB0O1xufTtcblxuZXhwb3J0IGNvbnN0IGJlemllciA9IChwb2ludHMpID0+XG4gIChwb2ludHMubGVuZ3RoID09PSAzKSA/IHJlc29sdmUzKHBvaW50cykgOiByZXNvbHZlNChwb2ludHMpO1xuIl19

/***/ },
/* 4 */
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
	
	
	var _transformers = __webpack_require__(3);
	
	var _parsers = __webpack_require__(24);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdmFsdWUtdHlwZXMuanMiXSwibmFtZXMiOlsibnVtYmVyIiwidGVzdCIsInBhcnNlIiwicGFyc2VGbG9hdCIsImFscGhhIiwidHJhbnNmb3JtIiwiZGVncmVlcyIsInBlcmNlbnQiLCJweCIsInNjYWxlIiwiZGVmYXVsdCIsInJnYlVuaXQiLCJyZ2JhIiwiaGV4IiwiaHNsYSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7OztrUUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7O0FBVUE7O0FBTUE7O0FBU08sSUFBTUEsMEJBQVM7QUFDcEJDLG9CQURvQjtBQUVwQkMsU0FBT0M7QUFGYSxDQUFmOztBQUtQO0FBQ08sSUFBTUMscUNBQ1JKLE1BRFE7QUFFWEs7QUFGVyxFQUFOOztBQUtBLElBQU1DLDRCQUFVLDJCQUFlLEtBQWYsd0JBQWhCO0FBQ0EsSUFBTUMsNEJBQVUsMkJBQWUsR0FBZix3QkFBaEI7QUFDQSxJQUFNQyxrQkFBSywyQkFBZSxJQUFmLG1CQUFYOztBQUVBLElBQU1DLHFDQUNSVCxNQURRO0FBRVhVLFdBQVM7QUFGRSxFQUFOOztBQUtBLElBQU1DLHlDQUNSWCxNQURRO0FBRVhLO0FBRlcsRUFBTjs7QUFLQSxJQUFNTyxzQkFBTztBQUNsQlgsb0JBRGtCO0FBRWxCQyxzQkFGa0I7QUFHbEJHO0FBSGtCLENBQWI7O0FBTUEsSUFBTVEsaUNBQ1JELElBRFE7QUFFWFgsb0JBRlc7QUFHWEM7QUFIVyxFQUFOOztBQU1BLElBQU1ZLHNCQUFPO0FBQ2xCYixvQkFEa0I7QUFFbEJDLHNCQUZrQjtBQUdsQkc7QUFIa0IsQ0FBYjs7QUFNQSxJQUFNVSx3QkFBUTtBQUNuQmIsdUJBRG1CO0FBRW5CRCxzQkFGbUI7QUFHbkJJO0FBSG1CLENBQWQiLCJmaWxlIjoidmFsdWUtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFZhbHVlIHR5cGVzXG4gKlxuICogYWxwaGFcbiAqIGRlZ3JlZXNcbiAqIGhleFxuICogaHNsYVxuICogcGVyY2VudFxuICogcHhcbiAqIHJnYlVuaXRcbiAqIHJnYlxuICogc2NhbGVcbiAqL1xuaW1wb3J0IHtcbiAgcmdiVW5pdCBhcyB0cmFuc2Zvcm1SR0JVbml0LFxuICByZ2JhIGFzIHRyYW5zZm9ybVJnYmEsXG4gIGFscGhhIGFzIHRyYW5zZm9ybUFscGhhLFxuICBoc2xhIGFzIHRyYW5zZm9ybUhzbGEsXG4gIGNvbG9yIGFzIHRyYW5zZm9ybUNvbG9yLFxuICBweCBhcyB0cmFuc2Zvcm1QeCxcbiAgcGVyY2VudCBhcyB0cmFuc2Zvcm1QZXJjZW50LFxuICBkZWdyZWVzIGFzIHRyYW5zZm9ybURlZ3JlZXNcbn0gZnJvbSAnLi90cmFuc2Zvcm1lcnMnO1xuaW1wb3J0IHtcbiAgaGV4IGFzIHBhcnNlSGV4LFxuICByZ2JhIGFzIHBhcnNlUmdiYSxcbiAgaHNsYSBhcyBwYXJzZUhzbGEsXG4gIGNvbG9yIGFzIHBhcnNlQ29sb3Jcbn0gZnJvbSAnLi9wYXJzZXJzJztcbmltcG9ydCB7XG4gIGNyZWF0ZVVuaXRUeXBlLFxuICBpc051bSxcbiAgaXNSZ2IsXG4gIGlzSHNsLFxuICBpc0hleCxcbiAgaXNDb2xvclxufSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IG51bWJlciA9IHtcbiAgdGVzdDogaXNOdW0sXG4gIHBhcnNlOiBwYXJzZUZsb2F0XG59O1xuXG4vLyBWYWx1ZSB0eXBlc1xuZXhwb3J0IGNvbnN0IGFscGhhID0ge1xuICAuLi5udW1iZXIsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtQWxwaGFcbn07XG5cbmV4cG9ydCBjb25zdCBkZWdyZWVzID0gY3JlYXRlVW5pdFR5cGUoJ2RlZycsIHRyYW5zZm9ybURlZ3JlZXMpO1xuZXhwb3J0IGNvbnN0IHBlcmNlbnQgPSBjcmVhdGVVbml0VHlwZSgnJScsIHRyYW5zZm9ybVBlcmNlbnQpO1xuZXhwb3J0IGNvbnN0IHB4ID0gY3JlYXRlVW5pdFR5cGUoJ3B4JywgdHJhbnNmb3JtUHgpO1xuXG5leHBvcnQgY29uc3Qgc2NhbGUgPSB7XG4gIC4uLm51bWJlcixcbiAgZGVmYXVsdDogMVxufTtcblxuZXhwb3J0IGNvbnN0IHJnYlVuaXQgPSB7XG4gIC4uLm51bWJlcixcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1SR0JVbml0XG59O1xuXG5leHBvcnQgY29uc3QgcmdiYSA9IHtcbiAgdGVzdDogaXNSZ2IsXG4gIHBhcnNlOiBwYXJzZVJnYmEsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtUmdiYVxufTtcblxuZXhwb3J0IGNvbnN0IGhleCA9IHtcbiAgLi4ucmdiYSxcbiAgdGVzdDogaXNIZXgsXG4gIHBhcnNlOiBwYXJzZUhleFxufTtcblxuZXhwb3J0IGNvbnN0IGhzbGEgPSB7XG4gIHRlc3Q6IGlzSHNsLFxuICBwYXJzZTogcGFyc2VIc2xhLFxuICB0cmFuc2Zvcm06IHRyYW5zZm9ybUhzbGFcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9IHtcbiAgcGFyc2U6IHBhcnNlQ29sb3IsXG4gIHRlc3Q6IGlzQ29sb3IsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtQ29sb3Jcbn07XG4iXX0=

/***/ },
/* 5 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvY2FsYy5qcyJdLCJuYW1lcyI6WyJ0b0RlY2ltYWwiLCJudW0iLCJwcmVjaXNpb24iLCJNYXRoIiwicm91bmQiLCJaRVJPX1BPSU5UIiwieCIsInkiLCJ6IiwiZGlzdGFuY2UxRCIsImEiLCJiIiwiYWJzIiwiYW5nbGUiLCJyYWRpYW5zVG9EZWdyZWVzIiwiYXRhbjIiLCJkZWdyZWVzVG9SYWRpYW5zIiwiZGVncmVlcyIsIlBJIiwiZGlsYXRlIiwiZGlsYXRpb24iLCJkaXN0YW5jZSIsInhEZWx0YSIsInlEZWx0YSIsInpEZWx0YSIsInNxcnQiLCJnZXRQcm9ncmVzc0Zyb21WYWx1ZSIsImZyb20iLCJ0byIsInZhbHVlIiwiZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MiLCJwcm9ncmVzcyIsInBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UiLCJvcmlnaW4iLCJjb3MiLCJzaW4iLCJyYWRpYW5zIiwic21vb3RoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImR1cmF0aW9uIiwic21vb3RoaW5nIiwibWF4Iiwic3BlZWRQZXJGcmFtZSIsInhwcyIsImZyYW1lRHVyYXRpb24iLCJzcGVlZFBlclNlY29uZCIsInZlbG9jaXR5Iiwic3RlcFByb2dyZXNzIiwic3RlcHMiLCJzZWdtZW50IiwidGFyZ2V0IiwicHJvZ3Jlc3NPZlRhcmdldCIsIm1pbiIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOzs7Ozs7O0FBT0EsSUFBTUEsWUFBWSxVQUFDQyxHQUFELEVBQXdCO0FBQUEsTUFBbEJDLFNBQWtCLHVFQUFOLENBQU07O0FBQ3hDQSx1QkFBWSxFQUFaLEVBQWtCQSxTQUFsQjtBQUNBLFNBQU9DLEtBQUtDLEtBQUwsQ0FBV0gsTUFBTUMsU0FBakIsSUFBOEJBLFNBQXJDO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNRyxhQUFhO0FBQ2pCQyxLQUFHLENBRGM7QUFFakJDLEtBQUcsQ0FGYztBQUdqQkMsS0FBRztBQUhjLENBQW5COztBQU1BLElBQU1DLGFB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QUFLdUMsR0FBTCxDQUFTRCxTQUFULEVBQW9CRCxRQUFwQixDQUF6RCxDQUFqRDtBQUFBLENBQWY7O0FBRVA7Ozs7OztBQU1PLElBQU1HLHdDQUFnQixVQUFDQyxHQUFELEVBQU1DLGFBQU47QUFBQSxTQUF5QixrQkFBTUQsR0FBTixDQUFELEdBQWVBLE9BQU8sT0FBT0MsYUFBZCxDQUFmLEdBQThDLENBQXRFO0FBQUEsQ0FBdEI7O0FBRVA7Ozs7OztBQU1PLElBQU1DLDBDQUFpQixVQUFDQyxRQUFELEVBQVdGLGFBQVg7QUFBQSxTQUE2QkUsWUFBWSxPQUFPRixhQUFuQixDQUE3QjtBQUFBLENBQXZCOztBQUVQOzs7Ozs7O0FBT08sSUFBTUcsc0NBQWUsVUFBQ0MsS0FBRCxFQUFRbEIsUUFBUixFQUFxQjtBQUMvQyxNQUFNbUIsVUFBVSxLQUFLRCxRQUFRLENBQWIsQ0FBaEI7QUFDQSxNQUFNRSxTQUFTLElBQUssSUFBSUYsS0FBeEI7QUFDQSxNQUFNRyxtQkFBbUJqRCxLQUFLa0QsR0FBTCxDQUFTdEIsV0FBV29CLE1BQXBCLEVBQTRCLENBQTVCLENBQXpCOztBQUVBLFNBQU9oRCxLQUFLbUQsS0FBTCxDQUFXRixtQkFBbUJGLE9BQTlCLElBQXlDQSxPQUFoRDtBQUNELENBTk0iLCJmaWxlIjoiY2FsYy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi91dGlscyc7XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG5jb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gIHByZWNpc2lvbiA9IDEwICoqIHByZWNpc2lvbjtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG5cbmNvbnN0IFpFUk9fUE9JTlQgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHo6IDBcbn07XG5cbmNvbnN0IGRpc3RhbmNlMUQgPSAoYSwgYikgPT4gTWF0aC5hYnMoYSAtIGIpO1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICBcbiAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gIGFyZSBhdCAwLDBcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBhbmdsZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBkZWdyZWVzVG9SYWRpYW5zID0gKGRlZ3JlZXMpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuXG4vKlxuICBEaWxhdGVcbiAgXG4gIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICBcbiAgYSAtLS0tLS0tLS0gYlxuICBcbiAgdG9cbiAgXG4gIGEgLS0tLSBiXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbmV4cG9ydCBjb25zdCBkaWxhdGUgPSAoYSwgYiwgZGlsYXRpb24pID0+IGEgKyAoKGIgLSBhKSAqIGRpbGF0aW9uKTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IGRpc3RhbmNlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiB7XG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKGlzTnVtKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICBjb25zdCB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICBjb25zdCB6RGVsdGEgPSAoaXNOdW0oYS56KSkgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KCh4RGVsdGEgKiogMikgKyAoeURlbHRhICoqIDIpICsgKHpEZWx0YSAqKiAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbmV4cG9ydCBjb25zdCBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IChmcm9tLCB0bywgdmFsdWUpID0+ICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG5cbi8qXG4gIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IChmcm9tLCB0bywgcHJvZ3Jlc3MpID0+ICgtIHByb2dyZXNzICogZnJvbSkgKyAocHJvZ3Jlc3MgKiB0bykgKyBmcm9tO1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG5leHBvcnQgY29uc3QgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkgPT4ge1xuICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gIHJldHVybiB7XG4gICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gIH07XG59O1xuXG4vKlxuICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG5leHBvcnQgY29uc3QgcmFkaWFuc1RvRGVncmVlcyA9IChyYWRpYW5zKSA9PiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbmV4cG9ydCBjb25zdCBzbW9vdGggPSAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nID0gMCkgPT4gdG9EZWNpbWFsKG9sZFZhbHVlICsgKGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpKTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlckZyYW1lID0gKHhwcywgZnJhbWVEdXJhdGlvbikgPT4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHN0ZXBQcm9ncmVzcyA9IChzdGVwcywgcHJvZ3Jlc3MpID0+IHtcbiAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgY29uc3QgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpO1xuICBjb25zdCBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuIl19

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _tween = __webpack_require__(15);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	var _easing = __webpack_require__(2);
	
	var _calc = __webpack_require__(5);
	
	var _transformers = __webpack_require__(3);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyJdLCJuYW1lcyI6WyJjbGFtcFByb2dyZXNzIiwiY2FsY1ZhbHVlQXRUaW1lIiwiZnJvbSIsInRvIiwiZHVyYXRpb24iLCJlbGFwc2VkIiwiZWFzZSIsInByb2dyZXNzQXRUaW1lIiwib25VcGRhdGUiLCJhY2N1cmFjeSIsInByb3BzIiwiYSIsImIiLCJhQ3VycmVudCIsImdldCIsImFEdXJhdGlvbiIsImdldFByb3AiLCJiRHVyYXRpb24iLCJhRWFzZSIsImJFYXNlIiwiYUZyb20iLCJiRnJvbSIsImFUbyIsImJUbyIsIm92ZXJsYXBEdXJhdGlvbiIsIk1hdGgiLCJtaW4iLCJnZXRFbGFwc2VkIiwiYlZhbHVlQXRUd2Vlbk92ZXJsYXBDb21wbGV0ZSIsImJTdGFydHNIaWdoZXJUaGFuQSIsImJFbmRzSGlnaGVyVGhhbkEiLCJQMSIsImJsZW5kUG9pbnRzIiwidHdlZW5zSW50ZXJzZWN0IiwidGltZXN0ZXAiLCJpIiwicnVubmluZ1RpbWUiLCJhVmFsdWVBdFRpbWUiLCJiVmFsdWVBdFRpbWUiLCJoYXNJbnRlcnNlY3RlZCIsIlAyIiwicHVzaCIsIlAzIiwiUDQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGdCQUFnQix5QkFBTSxDQUFOLEVBQVMsQ0FBVCxDQUF0Qjs7QUFFQSxTQUFTQyxlQUFULENBQXlCQyxJQUF6QixFQUErQkMsRUFBL0IsRUFBbUNDLFFBQW5DLEVBQTZDQyxPQUE3QyxFQUFzREMsSUFBdEQsRUFBNEQ7QUFDMUQsTUFBTUMsaUJBQWlCRCxLQUFLTixjQUFjLGdDQUFxQixDQUFyQixFQUF3QkksUUFBeEIsRUFBa0NDLE9BQWxDLENBQWQsQ0FBTCxDQUF2QjtBQUNBLFNBQU8sZ0NBQXFCSCxJQUFyQixFQUEyQkMsRUFBM0IsRUFBK0JJLGNBQS9CLENBQVA7QUFDRDs7a0JBRWMsZ0JBQXFEO0FBQUEsTUFBbERMLElBQWtELFFBQWxEQSxJQUFrRDtBQUFBLE1BQTVDQyxFQUE0QyxRQUE1Q0EsRUFBNEM7QUFBQSxNQUF4Q0ssUUFBd0MsUUFBeENBLFFBQXdDO0FBQUEsMkJBQTlCQyxRQUE4QjtBQUFBLE1BQTlCQSxRQUE4QixpQ0FBbkIsRUFBbUI7QUFBQSxNQUFaQyxLQUFZOztBQUNsRTtBQUNBLE1BQU1DLElBQUlULElBQVY7QUFDQSxNQUFNVSxJQUFJVCxFQUFWO0FBQ0EsTUFBTVUsV0FBV0YsRUFBRUcsR0FBRixFQUFqQjtBQUNBLE1BQU1DLFlBQVlKLEVBQUVLLE9BQUYsQ0FBVSxVQUFWLENBQWxCO0FBQ0EsTUFBTUMsWUFBWUwsRUFBRUksT0FBRixDQUFVLFVBQVYsQ0FBbEI7QUFDQSxNQUFNRSxRQUFRUCxFQUFFSyxPQUFGLENBQVUsTUFBVixDQUFkO0FBQ0EsTUFBTUcsUUFBUVAsRUFBRUksT0FBRixDQUFVLE1BQVYsQ0FBZDtBQUNBLE1BQU1JLFFBQVFULEVBQUVLLE9BQUYsQ0FBVSxNQUFWLENBQWQ7QUFDQSxNQUFNSyxRQUFRVCxFQUFFSSxPQUFGLENBQVUsTUFBVixDQUFkO0FBQ0EsTUFBTU0sTUFBTVgsRUFBRUssT0FBRixDQUFVLElBQVYsQ0FBWjtBQUNBLE1BQU1PLE1BQU1YLEVBQUVJLE9BQUYsQ0FBVSxJQUFWLENBQVo7O0FBRUE7QUFDQSxNQUFNUSxrQkFBa0JDLEtBQUtDLEdBQUwsQ0FBU1gsWUFBWUosRUFBRWdCLFVBQUYsRUFBckIsRUFBcUNWLFNBQXJDLENBQXhCO0FBQ0EsTUFBTVcsK0JBQStCM0IsZ0JBQWdCb0IsS0FBaEIsRUFBdUJFLEdBQXZCLEVBQTRCTixTQUE1QixFQUF1Q08sZUFBdkMsRUFBd0RMLEtBQXhELENBQXJDO0FBQ0EsTUFBTVUscUJBQXNCUixRQUFRUixRQUFwQztBQUNBLE1BQU1pQixtQkFBb0JGLCtCQUErQk4sR0FBekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTVMsS0FBS2xCLFFBQVg7QUFDQSxNQUFNbUIsY0FBYyxDQUFDRCxFQUFELENBQXBCOztBQUVBO0FBQ0E7QUFDQSxNQUFNRSxrQkFBbUJKLHVCQUF1QkMsZ0JBQWhEO0FBQ0EsTUFBSUcsZUFBSixFQUFxQjtBQUNuQixRQUFJQyxXQUFXVixrQkFBa0JmLFFBQWpDOztBQUVBLFNBQUssSUFBSTBCLElBQUksQ0FBYixFQUFnQkEsSUFBSTFCLFFBQXBCLEVBQThCMEIsR0FBOUIsRUFBbUM7QUFDakMsVUFBTUMsY0FBY0QsSUFBSUQsUUFBeEI7O0FBRUEsVUFBTUcsZUFBZXBDLGdCQUFnQm1CLEtBQWhCLEVBQXVCRSxHQUF2QixFQUE0QlAsU0FBNUIsRUFBdUNKLEVBQUVOLE9BQUYsR0FBWStCLFdBQW5ELEVBQWdFbEIsS0FBaEUsQ0FBckI7QUFDQSxVQUFNb0IsZUFBZXJDLGdCQUFnQm9CLEtBQWhCLEVBQXVCRSxHQUF2QixFQUE0Qk4sU0FBNUIsRUFBdUNMLEVBQUVQLE9BQUYsR0FBWStCLFdBQW5ELEVBQWdFakIsS0FBaEUsQ0FBckI7O0FBRUEsVUFBTW9CLGlCQUNIVixzQkFBc0JRLGVBQWVDLFlBQXRDLElBQ0MsQ0FBQ1Qsa0JBQUQsSUFBdUJRLGVBQWVDLFlBRnpDOztBQUtBLFVBQUlDLGNBQUosRUFBb0I7QUFDbEIsWUFBTUMsS0FBS0YsWUFBWDtBQUNBTixvQkFBWVMsSUFBWixDQUFpQkQsRUFBakI7QUFDQTtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDtBQUNBO0FBQ0EsTUFBTUUsS0FBS2QsNEJBQVg7QUFDQUksY0FBWVMsSUFBWixDQUFpQkMsRUFBakI7O0FBRUE7QUFDQSxNQUFNQyxLQUFLcEIsR0FBWDtBQUNBUyxjQUFZUyxJQUFaLENBQWlCRSxFQUFqQjs7QUFFQSxTQUFPLGtDQUNGakMsS0FERTtBQUVMTixjQUFVYSxTQUZMO0FBR0xYLHdCQUhLO0FBSUxFLGNBQVUsd0JBQ1IsMEJBQU93QixXQUFQLENBRFEsRUFFUnhCLFFBRlE7QUFKTCxLQUFQO0FBU0QsQyIsImZpbGUiOiJibGVuZC10d2VlbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHdlZW4gZnJvbSAnLi90d2Vlbic7XG5pbXBvcnQgeyBsaW5lYXIgfSBmcm9tICcuLi9pbmMvZWFzaW5nJztcbmltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGZsb3csIGNsYW1wLCBiZXppZXIgfSBmcm9tICcuLi9pbmMvdHJhbnNmb3JtZXJzJztcblxuY29uc3QgY2xhbXBQcm9ncmVzcyA9IGNsYW1wKDAsIDEpO1xuXG5mdW5jdGlvbiBjYWxjVmFsdWVBdFRpbWUoZnJvbSwgdG8sIGR1cmF0aW9uLCBlbGFwc2VkLCBlYXNlKSB7XG4gIGNvbnN0IHByb2dyZXNzQXRUaW1lID0gZWFzZShjbGFtcFByb2dyZXNzKGdldFByb2dyZXNzRnJvbVZhbHVlKDAsIGR1cmF0aW9uLCBlbGFwc2VkKSkpO1xuICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZnJvbSwgdG8sIHByb2dyZXNzQXRUaW1lKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgZnJvbSwgdG8sIG9uVXBkYXRlLCBhY2N1cmFjeSA9IDYwLCAuLi5wcm9wcyB9KSA9PiB7XG4gIC8vIEdldCB0d2VlbiBwcm9wZXJ0aWVzXG4gIGNvbnN0IGEgPSBmcm9tO1xuICBjb25zdCBiID0gdG87XG4gIGNvbnN0IGFDdXJyZW50ID0gYS5nZXQoKTtcbiAgY29uc3QgYUR1cmF0aW9uID0gYS5nZXRQcm9wKCdkdXJhdGlvbicpO1xuICBjb25zdCBiRHVyYXRpb24gPSBiLmdldFByb3AoJ2R1cmF0aW9uJyk7XG4gIGNvbnN0IGFFYXNlID0gYS5nZXRQcm9wKCdlYXNlJyk7XG4gIGNvbnN0IGJFYXNlID0gYi5nZXRQcm9wKCdlYXNlJyk7XG4gIGNvbnN0IGFGcm9tID0gYS5nZXRQcm9wKCdmcm9tJyk7XG4gIGNvbnN0IGJGcm9tID0gYi5nZXRQcm9wKCdmcm9tJyk7XG4gIGNvbnN0IGFUbyA9IGEuZ2V0UHJvcCgndG8nKTtcbiAgY29uc3QgYlRvID0gYi5nZXRQcm9wKCd0bycpO1xuXG4gIC8vIEFuYWx5c2UgdHdlZW5zXG4gIGNvbnN0IG92ZXJsYXBEdXJhdGlvbiA9IE1hdGgubWluKGFEdXJhdGlvbiAtIGEuZ2V0RWxhcHNlZCgpLCBiRHVyYXRpb24pO1xuICBjb25zdCBiVmFsdWVBdFR3ZWVuT3ZlcmxhcENvbXBsZXRlID0gY2FsY1ZhbHVlQXRUaW1lKGJGcm9tLCBiVG8sIGJEdXJhdGlvbiwgb3ZlcmxhcER1cmF0aW9uLCBiRWFzZSk7XG4gIGNvbnN0IGJTdGFydHNIaWdoZXJUaGFuQSA9IChiRnJvbSA+IGFDdXJyZW50KTtcbiAgY29uc3QgYkVuZHNIaWdoZXJUaGFuQSA9IChiVmFsdWVBdFR3ZWVuT3ZlcmxhcENvbXBsZXRlID4gYVRvKTtcblxuICAvLyBCbGVuZCBwb2ludHMgYXJlIGRlZmluZWQgYXMgW3QgPSB0aW1lLCB2ID0gdmFsdWVBdFRpbWVdXG4gIC8vIFAxXG4gIC8vIFRoZSBzdGFydCBvZiB0aGUgdHdlZW4gYmxlbmRcbiAgY29uc3QgUDEgPSBhQ3VycmVudDtcbiAgY29uc3QgYmxlbmRQb2ludHMgPSBbUDFdO1xuXG4gIC8vIEZpbmQgUDJcbiAgLy8gVGhlIHBvc3NpYmxlIGludGVyc2VjdGlvbiBwb2ludCBiZXR3ZWVuIHRoZSB0d28gdHdlZW5zXG4gIGNvbnN0IHR3ZWVuc0ludGVyc2VjdCA9IChiU3RhcnRzSGlnaGVyVGhhbkEgIT09IGJFbmRzSGlnaGVyVGhhbkEpO1xuICBpZiAodHdlZW5zSW50ZXJzZWN0KSB7XG4gICAgbGV0IHRpbWVzdGVwID0gb3ZlcmxhcER1cmF0aW9uIC8gYWNjdXJhY3k7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjY3VyYWN5OyBpKyspIHtcbiAgICAgIGNvbnN0IHJ1bm5pbmdUaW1lID0gaSAqIHRpbWVzdGVwO1xuXG4gICAgICBjb25zdCBhVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYUZyb20sIGFUbywgYUR1cmF0aW9uLCBhLmVsYXBzZWQgKyBydW5uaW5nVGltZSwgYUVhc2UpO1xuICAgICAgY29uc3QgYlZhbHVlQXRUaW1lID0gY2FsY1ZhbHVlQXRUaW1lKGJGcm9tLCBiVG8sIGJEdXJhdGlvbiwgYi5lbGFwc2VkICsgcnVubmluZ1RpbWUsIGJFYXNlKTtcblxuICAgICAgY29uc3QgaGFzSW50ZXJzZWN0ZWQgPSAoXG4gICAgICAgIChiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lID4gYlZhbHVlQXRUaW1lKSB8fFxuICAgICAgICAoIWJTdGFydHNIaWdoZXJUaGFuQSAmJiBhVmFsdWVBdFRpbWUgPCBiVmFsdWVBdFRpbWUpXG4gICAgICApO1xuXG4gICAgICBpZiAoaGFzSW50ZXJzZWN0ZWQpIHtcbiAgICAgICAgY29uc3QgUDIgPSBiVmFsdWVBdFRpbWU7XG4gICAgICAgIGJsZW5kUG9pbnRzLnB1c2goUDIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQM1xuICAvLyBUaGUgcG9pbnRzIHRoZSB0d28gdHdlZW5zIHN0b3Agb3ZlcmxhcHBpbmdcbiAgY29uc3QgUDMgPSBiVmFsdWVBdFR3ZWVuT3ZlcmxhcENvbXBsZXRlO1xuICBibGVuZFBvaW50cy5wdXNoKFAzKTtcblxuICAvLyBQdXNoIHRoZSBlbmQgc3RhdGUgb2YgYiB0d2VlbiBhcyBmaW5hbCBjb250cm9sIHBvaW50XG4gIGNvbnN0IFA0ID0gYlRvO1xuICBibGVuZFBvaW50cy5wdXNoKFA0KTtcblxuICByZXR1cm4gdHdlZW4oe1xuICAgIC4uLnByb3BzLFxuICAgIGR1cmF0aW9uOiBiRHVyYXRpb24sXG4gICAgZWFzZTogbGluZWFyLFxuICAgIG9uVXBkYXRlOiBmbG93KFxuICAgICAgYmV6aWVyKGJsZW5kUG9pbnRzKSxcbiAgICAgIG9uVXBkYXRlXG4gICAgKVxuICB9KTtcbn07XG4iXX0=

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
	
	var _transformers = __webpack_require__(3);
	
	var _valueTypes = __webpack_require__(4);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2NvbXBvc2l0ZS5qcyJdLCJuYW1lcyI6WyJDb21wb3NpdGVBY3Rpb24iLCJwcm9wcyIsImFjdGlvbnMiLCJyZW1haW5pbmdQcm9wcyIsImN1cnJlbnQiLCJhY3Rpb25LZXlzIiwiYWRkQWN0aW9ucyIsImtleSIsImluZGV4T2YiLCJwdXNoIiwib25VcGRhdGUiLCJ2IiwiZ2V0Iiwic2V0UHJvcHMiLCJfb25TdG9wIiwibnVtQWN0aXZlQWN0aW9ucyIsImFkZExpc3RlbmVyIiwib25TdGFydCIsImxlbmd0aCIsImZvckVhY2giLCJzdGFydCIsIm9uU3RvcCIsInN0b3AiLCJnZXRWZWxvY2l0eSIsInZlbG9jaXR5IiwiaXNBY3Rpb25Db21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGU7OztBQUNKLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsUUFDVEMsT0FEUyxHQUNzQkQsS0FEdEIsQ0FDVEMsT0FEUztBQUFBLFFBQ0dDLGNBREgsNEJBQ3NCRixLQUR0Qjs7QUFBQSxpREFFakIsbUJBQU1FLGNBQU4sQ0FGaUI7O0FBR2pCLFVBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFVBQUtDLFVBQUwsQ0FBZ0JMLE1BQU1DLE9BQXRCO0FBTGlCO0FBTWxCOzs0QkFFREksVSx1QkFBV0osTyxFQUFTO0FBQUE7O0FBQUEsMEJBQ1BLLEdBRE87QUFFaEIsVUFBSSxPQUFLRixVQUFMLENBQWdCRyxPQUFoQixDQUF3QkQsR0FBeEIsTUFBaUMsQ0FBQyxDQUF0QyxFQUF5QztBQUN2QyxlQUFLRixVQUFMLENBQWdCSSxJQUFoQixDQUFxQkYsR0FBckI7QUFDRDs7QUFFRCxhQUFLQSxHQUFMLElBQVlMLFFBQVFLLEdBQVIsQ0FBWjs7QUFFQSxVQUFNRyxXQUFXLFVBQUNDLENBQUQ7QUFBQSxlQUFPLE9BQUtQLE9BQUwsQ0FBYUcsR0FBYixJQUFvQkksQ0FBM0I7QUFBQSxPQUFqQjs7QUFFQTtBQUNBRCxlQUFTLE9BQUtILEdBQUwsRUFBVUssR0FBVixFQUFUOztBQUVBLGFBQUtMLEdBQUwsRUFDR00sUUFESCxDQUNZO0FBQ1JDLGlCQUFTO0FBQUEsaUJBQU0sT0FBS0MsZ0JBQUwsRUFBTjtBQUFBO0FBREQsT0FEWixFQUlHQyxXQUpILENBSWVOLFFBSmY7QUFiZ0I7O0FBQ2xCLFNBQUssSUFBTUgsR0FBWCxJQUFrQkwsT0FBbEIsRUFBMkI7QUFBQSxZQUFoQkssR0FBZ0I7QUFpQjFCO0FBQ0YsRzs7NEJBRURVLE8sc0JBQVU7QUFBQTs7QUFDUixTQUFLRixnQkFBTCxHQUF3QixLQUFLVixVQUFMLENBQWdCYSxNQUF4QztBQUNBLFNBQUtiLFVBQUwsQ0FBZ0JjLE9BQWhCLENBQXdCLFVBQUNaLEdBQUQ7QUFBQSxhQUFTLE9BQUtBLEdBQUwsRUFBVWEsS0FBVixFQUFUO0FBQUEsS0FBeEI7QUFDRCxHOzs0QkFFREMsTSxxQkFBUztBQUFBOztBQUNQLFNBQUtoQixVQUFMLENBQWdCYyxPQUFoQixDQUF3QixVQUFDWixHQUFEO0FBQUEsYUFBUyxPQUFLQSxHQUFMLEVBQVVlLElBQVYsRUFBVDtBQUFBLEtBQXhCO0FBQ0QsRzs7NEJBRURDLFcsMEJBQWM7QUFBQTs7QUFDWixRQUFNQyxXQUFXLEVBQWpCO0FBQ0EsU0FBS25CLFVBQUwsQ0FBZ0JjLE9BQWhCLENBQXdCLFVBQUNaLEdBQUQ7QUFBQSxhQUFTaUIsU0FBU2pCLEdBQVQsSUFBZ0IsT0FBS0EsR0FBTCxFQUFVZ0IsV0FBVixFQUF6QjtBQUFBLEtBQXhCO0FBQ0EsV0FBT0MsUUFBUDtBQUNELEc7OzRCQUVEQyxnQiwrQkFBbUI7QUFDakIsV0FBUSxLQUFLVixnQkFBTCxLQUEwQixDQUFsQztBQUNELEc7Ozs7O2tCQUdZLFVBQUNiLE9BQUQsRUFBVUQsS0FBVixFQUFvQjtBQUNqQyxTQUFPLElBQUlELGVBQUo7QUFDTEU7QUFESyxLQUVGRCxLQUZFLEVBQVA7QUFJRCxDIiwiZmlsZSI6ImNvbXBvc2l0ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi8nO1xuXG5jbGFzcyBDb21wb3NpdGVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIGNvbnN0IHsgYWN0aW9ucywgLi4ucmVtYWluaW5nUHJvcHMgfSA9IHByb3BzO1xuICAgIHN1cGVyKHJlbWFpbmluZ1Byb3BzKTtcbiAgICB0aGlzLmN1cnJlbnQgPSB7fTtcbiAgICB0aGlzLmFjdGlvbktleXMgPSBbXTtcbiAgICB0aGlzLmFkZEFjdGlvbnMocHJvcHMuYWN0aW9ucyk7XG4gIH1cblxuICBhZGRBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBhY3Rpb25zKSB7XG4gICAgICBpZiAodGhpcy5hY3Rpb25LZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25LZXlzLnB1c2goa2V5KTtcbiAgICAgIH1cblxuICAgICAgdGhpc1trZXldID0gYWN0aW9uc1trZXldO1xuXG4gICAgICBjb25zdCBvblVwZGF0ZSA9ICh2KSA9PiB0aGlzLmN1cnJlbnRba2V5XSA9IHY7XG5cbiAgICAgIC8vIEltbWVkaWF0ZWx5IHVwZGF0ZSB3aXRoIHRoZSBjdXJyZW50IGFjdGlvbiBzdGF0ZVxuICAgICAgb25VcGRhdGUodGhpc1trZXldLmdldCgpKTtcblxuICAgICAgdGhpc1trZXldXG4gICAgICAgIC5zZXRQcm9wcyh7XG4gICAgICAgICAgX29uU3RvcDogKCkgPT4gdGhpcy5udW1BY3RpdmVBY3Rpb25zLS1cbiAgICAgICAgfSlcbiAgICAgICAgLmFkZExpc3RlbmVyKG9uVXBkYXRlKTtcbiAgICB9XG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IHRoaXMuYWN0aW9uS2V5cy5sZW5ndGg7XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goKGtleSkgPT4gdGhpc1trZXldLnN0YXJ0KCkpO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKChrZXkpID0+IHRoaXNba2V5XS5zdG9wKCkpO1xuICB9XG5cbiAgZ2V0VmVsb2NpdHkoKSB7XG4gICAgY29uc3QgdmVsb2NpdHkgPSB7fTtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaCgoa2V5KSA9PiB2ZWxvY2l0eVtrZXldID0gdGhpc1trZXldLmdldFZlbG9jaXR5KCkpO1xuICAgIHJldHVybiB2ZWxvY2l0eTtcbiAgfVxuXG4gIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuICh0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChhY3Rpb25zLCBwcm9wcykgPT4ge1xuICByZXR1cm4gbmV3IENvbXBvc2l0ZUFjdGlvbih7XG4gICAgYWN0aW9ucyxcbiAgICAuLi5wcm9wc1xuICB9KTtcbn07XG4iXX0=

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _ = __webpack_require__(19);
	
	var _2 = _interopRequireDefault(_);
	
	var _tween = __webpack_require__(15);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	var _easing = __webpack_require__(2);
	
	var _calc = __webpack_require__(5);
	
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
	
	var _calc = __webpack_require__(5);
	
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
	
	var _transformers = __webpack_require__(3);
	
	var _calc = __webpack_require__(5);
	
	var _easing = __webpack_require__(2);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcmFtZXN5bmMvaW5kZXguanMiXSwibmFtZXMiOlsid2lsbFJlbmRlck5leHRGcmFtZSIsIk1BWF9FTEFQU0VEIiwiY3VycmVudEZyYW1lc3RhbXAiLCJlbGFwc2VkIiwiZGlsYXRpb24iLCJzdGFydFJlbmRlckxvb3AiLCJwcm9jZXNzRnJhbWUiLCJmcmFtZVN0YXJ0IiwiZnJhbWVVcGRhdGUiLCJmcmFtZVJlbmRlciIsImZyYW1lRW5kIiwiZnJhbWVzdGFtcCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJwcm9jZXNzIiwib25GcmFtZVN0YXJ0Iiwic2NoZWR1bGUiLCJvbkZyYW1lVXBkYXRlIiwib25GcmFtZVJlbmRlciIsIm9uRnJhbWVFbmQiLCJjYW5jZWxPbkZyYW1lU3RhcnQiLCJjYW5jZWwiLCJjYW5jZWxPbkZyYW1lVXBkYXRlIiwiY2FuY2VsT25GcmFtZVJlbmRlciIsImNhbmNlbE9uRnJhbWVFbmQiLCJ0aW1lU2luY2VMYXN0RnJhbWUiLCJjdXJyZW50RnJhbWVUaW1lc3RhbXAiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBSUEsc0JBQXNCLEtBQTFCOztBQUVBOzs7O0FBSUEsSUFBTUMsY0FBYyxFQUFwQjs7QUFFQTs7OztBQUlBLElBQUlDLG9CQUFvQix5QkFBeEI7O0FBRUEsSUFBSUMsVUFBVSxDQUFkOztBQUVBOzs7OztBQUtBLElBQUlDLFdBQVcsQ0FBZjs7QUFFQSxTQUFTQyxlQUFULEdBQTJCO0FBQ3pCLE1BQUksQ0FBQ0wsbUJBQUwsRUFBMEI7QUFDeEJBLDBCQUFzQixJQUF0QjtBQUNBLCtCQUFZTSxZQUFaO0FBQ0Q7QUFDRjs7QUFFRCxJQUFNQyxhQUFhLGdDQUFpQkYsZUFBakIsQ0FBbkI7QUFDQSxJQUFNRyxjQUFjLGdDQUFpQkgsZUFBakIsQ0FBcEI7QUFDQSxJQUFNSSxjQUFjLGdDQUFpQkosZUFBakIsQ0FBcEI7QUFDQSxJQUFNSyxXQUFXLGdDQUFpQkwsZUFBakIsQ0FBakI7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkssVUFBdEIsRUFBa0M7QUFDaENYLHdCQUFzQixLQUF0QjtBQUNBRyxZQUFVUyxLQUFLQyxHQUFMLENBQVNELEtBQUtFLEdBQUwsQ0FBU0gsYUFBYVQsaUJBQXRCLEVBQXlDRCxXQUF6QyxDQUFULEVBQWdFLENBQWhFLElBQXFFRyxRQUEvRTtBQUNBRixzQkFBb0JTLFVBQXBCOztBQUVBSixhQUFXUSxPQUFYO0FBQ0FQLGNBQVlPLE9BQVo7QUFDQU4sY0FBWU0sT0FBWjtBQUNBTCxXQUFTSyxPQUFUO0FBQ0Q7O0FBRU0sSUFBTUMsc0NBQWVULFdBQVdVLFFBQWhDO0FBQ0EsSUFBTUMsd0NBQWdCVixZQUFZUyxRQUFsQztBQUNBLElBQU1FLHdDQUFnQlYsWUFBWVEsUUFBbEM7QUFDQSxJQUFNRyxrQ0FBYVYsU0FBU08sUUFBNUI7QUFDQSxJQUFNSSxrREFBcUJkLFdBQVdlLE1BQXRDO0FBQ0EsSUFBTUMsb0RBQXNCZixZQUFZYyxNQUF4QztBQUNBLElBQU1FLG9EQUFzQmYsWUFBWWEsTUFBeEM7QUFDQSxJQUFNRyw4Q0FBbUJmLFNBQVNZLE1BQWxDOztBQUVBLElBQU1JLGtEQUFxQjtBQUFBLFNBQU12QixPQUFOO0FBQUEsQ0FBM0I7QUFDQSxJQUFNd0Isd0RBQXdCO0FBQUEsU0FBTXpCLGlCQUFOO0FBQUEsQ0FBOUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb25OZXh0RnJhbWUgZnJvbSAnLi9vbi1uZXh0LWZyYW1lJztcbmltcG9ydCBjcmVhdGVSZW5kZXJTdGVwIGZyb20gJy4vY3JlYXRlLXJlbmRlci1zdGVwJztcbmltcG9ydCB7IGN1cnJlbnRUaW1lIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxubGV0IHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcblxuLyoqXG4gKiBNYXhpbXVtIHBlcm1pdHRlZCBtcyBzaW5jZSBsYXN0IGZyYW1lXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG5jb25zdCBNQVhfRUxBUFNFRCA9IDIwO1xuXG4vKipcbiAqIEN1cnJlbnQgZnJhbWVzdGFtcFxuICogQHR5cGUge051bWJlcn1cbiAqL1xubGV0IGN1cnJlbnRGcmFtZXN0YW1wID0gY3VycmVudFRpbWUoKTtcblxubGV0IGVsYXBzZWQgPSAwO1xuXG4vKipcbiAqIEZhY3RvciB0byBtdWx0aXBseSBgZWxhcHNlZGAgYnkgLSBcbiAqIDAuNSB3b3VsZCBiZSBzbG93IG1vdGlvbiwgMiB3b3VsZCBiZSBmYXN0XG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG5sZXQgZGlsYXRpb24gPSAxO1xuXG5mdW5jdGlvbiBzdGFydFJlbmRlckxvb3AoKSB7XG4gIGlmICghd2lsbFJlbmRlck5leHRGcmFtZSkge1xuICAgIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSB0cnVlO1xuICAgIG9uTmV4dEZyYW1lKHByb2Nlc3NGcmFtZSk7XG4gIH1cbn1cblxuY29uc3QgZnJhbWVTdGFydCA9IGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKTtcbmNvbnN0IGZyYW1lVXBkYXRlID0gY3JlYXRlUmVuZGVyU3RlcChzdGFydFJlbmRlckxvb3ApO1xuY29uc3QgZnJhbWVSZW5kZXIgPSBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCk7XG5jb25zdCBmcmFtZUVuZCA9IGNyZWF0ZVJlbmRlclN0ZXAoc3RhcnRSZW5kZXJMb29wKTtcblxuZnVuY3Rpb24gcHJvY2Vzc0ZyYW1lKGZyYW1lc3RhbXApIHtcbiAgd2lsbFJlbmRlck5leHRGcmFtZSA9IGZhbHNlO1xuICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnRGcmFtZXN0YW1wLCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gIGN1cnJlbnRGcmFtZXN0YW1wID0gZnJhbWVzdGFtcDtcblxuICBmcmFtZVN0YXJ0LnByb2Nlc3MoKTtcbiAgZnJhbWVVcGRhdGUucHJvY2VzcygpO1xuICBmcmFtZVJlbmRlci5wcm9jZXNzKCk7XG4gIGZyYW1lRW5kLnByb2Nlc3MoKTtcbn1cblxuZXhwb3J0IGNvbnN0IG9uRnJhbWVTdGFydCA9IGZyYW1lU3RhcnQuc2NoZWR1bGU7XG5leHBvcnQgY29uc3Qgb25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLnNjaGVkdWxlO1xuZXhwb3J0IGNvbnN0IG9uRnJhbWVSZW5kZXIgPSBmcmFtZVJlbmRlci5zY2hlZHVsZTtcbmV4cG9ydCBjb25zdCBvbkZyYW1lRW5kID0gZnJhbWVFbmQuc2NoZWR1bGU7XG5leHBvcnQgY29uc3QgY2FuY2VsT25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5jYW5jZWw7XG5leHBvcnQgY29uc3QgY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLmNhbmNlbDtcbmV4cG9ydCBjb25zdCBjYW5jZWxPbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuY2FuY2VsO1xuZXhwb3J0IGNvbnN0IGNhbmNlbE9uRnJhbWVFbmQgPSBmcmFtZUVuZC5jYW5jZWw7XG5cbmV4cG9ydCBjb25zdCB0aW1lU2luY2VMYXN0RnJhbWUgPSAoKSA9PiBlbGFwc2VkO1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9ICgpID0+IGN1cnJlbnRGcmFtZXN0YW1wO1xuIl19

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _framesync = __webpack_require__(18);
	
	var _calc = __webpack_require__(5);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFjdGlvbiIsInByb3BzIiwic2NoZWR1bGVkVXBkYXRlIiwiYmluZCIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdFByb3BzIiwic2V0UHJvcHMiLCJjdXJyZW50IiwiZnJvbSIsInN0YXJ0Iiwib25TdGFydCIsIl9vblN0YXJ0IiwicGFzc2l2ZSIsIl9pc0FjdGl2ZSIsInN0b3AiLCJvblN0b3AiLCJfb25TdG9wIiwiY29tcGxldGUiLCJvbkNvbXBsZXRlIiwiX29uQ29tcGxldGUiLCJsYXN0VXBkYXRlZCIsInByZXYiLCJvblVwZGF0ZSIsInVwZGF0ZSIsImZpcmVMaXN0ZW5lcnMiLCJpc0FjdGlvbkNvbXBsZXRlIiwib3V0cHV0IiwiZnVuYyIsImdldCIsInNldCIsInYiLCJnZXRQcm9wIiwia2V5IiwiZ2V0VmVsb2NpdHkiLCJpc0FjdGl2ZSIsImFkZExpc3RlbmVyIiwibGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJudW1MaXN0ZW5lcnMiLCJpbmRleE9mIiwicHVzaCIsInJlbW92ZUxpc3RlbmVyIiwibGlzdGVuZXJJbmRleCIsInNwbGljZSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0lBRU1BLE07QUFBUztBQUNiLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtDLGVBQUwsR0FBdUIsS0FBS0EsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBdkI7O0FBRUEsU0FBS0YsS0FBTCxnQkFDSyxLQUFLRyxXQUFMLENBQWlCQyxZQUR0Qjs7QUFJQSxTQUFLQyxRQUFMLENBQWNMLEtBQWQ7O0FBRUEsU0FBS00sT0FBTCxHQUFlTixNQUFNTSxPQUFOLElBQWlCTixNQUFNTyxJQUF2QixJQUErQixDQUE5QztBQUNEOzttQkFFREMsSyxvQkFBUTtBQUFBLGlCQUNpQyxLQUFLUixLQUR0QztBQUFBLFFBQ0VTLE9BREYsVUFDRUEsT0FERjtBQUFBLFFBQ1dDLFFB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YyxRLHVCQUFXO0FBQ1QsV0FBTyxLQUFLckIsU0FBWjtBQUNELEc7O21CQUVEc0IsVyx3QkFBWUMsUSxFQUFVO0FBQ3BCLFNBQUtDLFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxJQUFrQixFQUFuQztBQUNBLFNBQUtDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxJQUFxQixDQUF6QztBQUNBLFFBQUksS0FBS0QsU0FBTCxDQUFlRSxPQUFmLENBQXVCSCxRQUF2QixNQUFxQyxDQUFDLENBQTFDLEVBQTZDO0FBQzNDLFdBQUtDLFNBQUwsQ0FBZUcsSUFBZixDQUFvQkosUUFBcEI7QUFDQSxXQUFLRSxZQUFMO0FBQ0Q7QUFDRCxXQUFPLElBQVA7QUFDRCxHOzttQkFFREcsYywyQkFBZUwsUSxFQUFVO0FBQ3ZCLFFBQU1NLGdCQUFpQixLQUFLTCxTQUFOLEdBQW1CLEtBQUtBLFNBQUwsQ0FBZUUsT0FBZixDQUF1QkgsUUFBdkIsQ0FBbkIsR0FBc0QsQ0FBQyxDQUE3RTtBQUNBLFFBQUlNLGtCQUFrQixDQUFDLENBQXZCLEVBQTBCO0FBQ3hCLFdBQUtKLFlBQUw7QUFDQSxXQUFLRCxTQUFMLENBQWVNLE1BQWYsQ0FBc0JELGFBQXRCLEVBQXFDLENBQXJDO0FBQ0Q7QUFDRCxXQUFPLElBQVA7QUFDRCxHOzttQkFFRGxCLGEsNEJBQWdCO0FBQ2QsUUFBTWpCLFVBQVUsS0FBS3FCLEdBQUwsRUFBaEI7QUFDQSxTQUFLLElBQUlnQixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS04sWUFBekIsRUFBdUNNLEdBQXZDLEVBQTRDO0FBQzFDLFdBQUtQLFNBQUwsQ0FBZU8sQ0FBZixFQUFrQnJDLE9BQWxCLEVBQTJCLElBQTNCO0FBQ0Q7QUFDRCxXQUFPLElBQVA7QUFDRCxHOzs7OztrQkFHWVAsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9uRnJhbWVVcGRhdGUsIGNhbmNlbE9uRnJhbWVVcGRhdGUsIHRpbWVTaW5jZUxhc3RGcmFtZSB9IGZyb20gJy4uL2ZyYW1lc3luYyc7XG5pbXBvcnQgeyBzcGVlZFBlclNlY29uZCB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuY2xhc3MgQWN0aW9uIHsgLy8gbGF3c3VpdCAtIHNvcnJ5XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5zY2hlZHVsZWRVcGRhdGUgPSB0aGlzLnNjaGVkdWxlZFVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFByb3BzXG4gICAgfTtcblxuICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuXG4gICAgdGhpcy5jdXJyZW50ID0gcHJvcHMuY3VycmVudCB8fCBwcm9wcy5mcm9tIHx8IDA7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBjb25zdCB7IG9uU3RhcnQsIF9vblN0YXJ0LCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG4gICAgICBvbkZyYW1lVXBkYXRlKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB0aGlzLm9uU3RhcnQoKTtcbiAgICBpZiAob25TdGFydCkgb25TdGFydCh0aGlzKTtcbiAgICBpZiAoX29uU3RhcnQpIF9vblN0YXJ0KHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNvbnN0IHsgb25TdG9wLCBfb25TdG9wLCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwYXNzaXZlKSB7XG4gICAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgY2FuY2VsT25GcmFtZVVwZGF0ZSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdG9wKSB0aGlzLm9uU3RvcCgpO1xuICAgIGlmIChvblN0b3ApIG9uU3RvcCh0aGlzKTtcbiAgICBpZiAoX29uU3RvcCkgX29uU3RvcCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgY29uc3QgeyBvbkNvbXBsZXRlLCBfb25Db21wbGV0ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgaWYgKHRoaXMub25Db21wbGV0ZSkgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgaWYgKG9uQ29tcGxldGUpIG9uQ29tcGxldGUodGhpcyk7XG4gICAgaWYgKF9vbkNvbXBsZXRlKSBfb25Db21wbGV0ZSh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2NoZWR1bGVkVXBkYXRlKCkge1xuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSB0aW1lU2luY2VMYXN0RnJhbWUoKTtcbiAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICBjb25zdCB7IG9uVXBkYXRlLCBwYXNzaXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHRoaXMudXBkYXRlKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnVwZGF0ZSh0aGlzLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlmIChvblVwZGF0ZSkgb25VcGRhdGUodGhpcy5jdXJyZW50LCB0aGlzKTtcbiAgICB0aGlzLmZpcmVMaXN0ZW5lcnMoKTtcblxuICAgIGlmICghcGFzc2l2ZSAmJiB0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgb25GcmFtZVVwZGF0ZSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBY3Rpb25Db21wbGV0ZSAmJiB0aGlzLmlzQWN0aW9uQ29tcGxldGUoKSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0UHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0ge1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG91dHB1dChmdW5jKSB7XG4gICAgdGhpcy5wcm9wcy5vblVwZGF0ZSA9IGZ1bmM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfVxuXG4gIHNldCh2KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFByb3Aoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHNba2V5XTtcbiAgfVxuXG4gIGdldFZlbG9jaXR5KCkge1xuICAgIHJldHVybiBzcGVlZFBlclNlY29uZCh0aGlzLmN1cnJlbnQgLSB0aGlzLnByZXYsIHRoaXMubGFzdFVwZGF0ZWQpO1xuICB9XG5cbiAgaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9XG5cbiAgYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IFtdO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gdGhpcy5udW1MaXN0ZW5lcnMgfHwgMDtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzKys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICBjb25zdCBsaXN0ZW5lckluZGV4ID0gKHRoaXMubGlzdGVuZXJzKSA/IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpIDogLTE7XG4gICAgaWYgKGxpc3RlbmVySW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLm51bUxpc3RlbmVycy0tO1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZpcmVMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bUxpc3RlbmVyczsgaSsrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tpXShjdXJyZW50LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuIl19

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _framesync = __webpack_require__(18);
	
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
	
	var _build = __webpack_require__(32);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _transformProps = __webpack_require__(29);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _valueTypes = __webpack_require__(33);
	
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
	
	var _build = __webpack_require__(34);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanMiXSwibmFtZXMiOlsiZWxlbWVudCIsInByb3BzIiwiU1ZHUGF0aFJlbmRlcmVyIiwiZ2V0QkJveCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJlbGVtZW50RGltZW5zaW9ucyIsInBhdGhMZW5ndGgiLCJnZXRUb3RhbExlbmd0aCIsIm9uUmVuZGVyIiwic3RhdGUiLCJvblJlYWQiLCJrZXkiLCJnZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkE2QmUsVUFBVUEsT0FBVixFQUFtQkMsS0FBbkIsRUFBMEI7QUFDdkMsU0FBTyxJQUFJQyxlQUFKO0FBQ0xGO0FBREssS0FFRkMsS0FGRSxFQUFQO0FBSUQsQzs7QUFsQ0Q7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1DLGU7OztBQUNKLDJCQUFZRCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLHFCQUFNQSxLQUFOLENBRGlCOztBQUFBLGdDQUdlQSxNQUFNRCxPQUFOLENBQWNHLE9BQWQsRUFIZjtBQUFBLFFBR1RDLENBSFMseUJBR1RBLENBSFM7QUFBQSxRQUdOQyxDQUhNLHlCQUdOQSxDQUhNO0FBQUEsUUFHSEMsS0FIRyx5QkFHSEEsS0FIRztBQUFBLFFBR0lDLE1BSEoseUJBR0lBLE1BSEo7O0FBSWpCLFVBQUtDLGlCQUFMLEdBQXlCO0FBQ3ZCSixVQUR1QjtBQUV2QkMsVUFGdUI7QUFHdkJDLGtCQUh1QjtBQUl2QkMsb0JBSnVCO0FBS3ZCRSxrQkFBWVIsTUFBTUQsT0FBTixDQUFjVSxjQUFkO0FBTFcsS0FBekI7QUFKaUI7QUFXbEI7OzRCQUVEQyxRLHVCQUFXO0FBQUEsUUFDREYsVUFEQyxHQUNjLEtBQUtELGlCQURuQixDQUNEQyxVQURDO0FBQUEsUUFFRFQsT0FGQyxHQUVXLEtBQUtDLEtBRmhCLENBRURELE9BRkM7O0FBR1QsNEJBQVlBLE9BQVosRUFBcUIscUJBQU0sS0FBS1ksS0FBWCxFQUFrQkgsVUFBbEIsQ0FBckI7QUFDRCxHOzs0QkFFREksTSxtQkFBT0MsRyxFQUFLO0FBQ1YsV0FBTyxLQUFLYixLQUFMLENBQVdELE9BQVgsQ0FBbUJlLFlBQW5CLENBQWdDRCxHQUFoQyxDQUFQO0FBQ0QsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZW5kZXJlciBmcm9tICcuLi8nO1xuaW1wb3J0IGJ1aWxkIGZyb20gJy4vYnVpbGQnO1xuaW1wb3J0IHsgc2V0RE9NQXR0cnMgfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuXG5jbGFzcyBTVkdQYXRoUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKTtcbiAgICB0aGlzLmVsZW1lbnREaW1lbnNpb25zID0ge1xuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhdGhMZW5ndGg6IHByb3BzLmVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKVxuICAgIH07XG4gIH1cblxuICBvblJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBhdGhMZW5ndGggfSA9IHRoaXMuZWxlbWVudERpbWVuc2lvbnM7XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIHNldERPTUF0dHJzKGVsZW1lbnQsIGJ1aWxkKHRoaXMuc3RhdGUsIHBhdGhMZW5ndGgpKTtcbiAgfVxuXG4gIG9uUmVhZChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5lbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1BhdGhSZW5kZXJlcih7XG4gICAgZWxlbWVudCxcbiAgICAuLi5wcm9wc1xuICB9KTtcbn1cbiJdfQ==

/***/ },
/* 24 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvcGFyc2Vycy5qcyJdLCJuYW1lcyI6WyJoZXgiLCJ2IiwiciIsImciLCJiIiwibGVuZ3RoIiwic3Vic3RyIiwicmVkIiwicGFyc2VJbnQiLCJncmVlbiIsImJsdWUiLCJhbHBoYSIsInJnYmEiLCJoc2xhIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRU8sSUFBTUEsb0JBQU0sVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hCLE1BQUlDLFVBQUo7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBVUMsVUFBVjs7QUFFQTtBQUNBLE1BQUlILEVBQUVJLE1BQUYsR0FBVyxDQUFmLEVBQWtCO0FBQ2hCSCxRQUFJRCxFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjtBQUNBSCxRQUFJRixFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjtBQUNBRixRQUFJSCxFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjs7QUFFRjtBQUNDLEdBTkQsTUFNTztBQUNMSixRQUFJRCxFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjtBQUNBSCxRQUFJRixFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjtBQUNBRixRQUFJSCxFQUFFSyxNQUFGLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSjtBQUNBSixTQUFLQSxDQUFMO0FBQ0FDLFNBQUtBLENBQUw7QUFDQUMsU0FBS0EsQ0FBTDtBQUNEOztBQUVELFNBQU87QUFDTEcsU0FBS0MsU0FBU04sQ0FBVCxFQUFZLEVBQVosQ0FEQTtBQUVMTyxXQUFPRCxTQUFTTCxDQUFULEVBQVksRUFBWixDQUZGO0FBR0xPLFVBQU1GLFNBQVNKLENBQVQsRUFBWSxFQUFaLENBSEQ7QUFJTE8sV0FBTztBQUpGLEdBQVA7QUFNRCxDQXpCTTs7QUEyQkEsSUFBTUMsc0JBQU8sNkJBQWlCLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsTUFBakIsRUFBeUIsT0FBekIsQ0FBakIsQ0FBYjs7QUFFQSxJQUFNQyxzQkFBTyw2QkFBaUIsQ0FBQyxLQUFELEVBQVEsWUFBUixFQUFzQixXQUF0QixFQUFtQyxPQUFuQyxDQUFqQixDQUFiOztBQUVBLElBQU1DLHdCQUFRLFVBQUNiLENBQUQsRUFBTztBQUMxQixNQUFJLGtCQUFNQSxDQUFOLENBQUosRUFBYztBQUNaLFdBQU9XLEtBQUtYLENBQUwsQ0FBUDtBQUNELEdBRkQsTUFFTyxJQUFJLGtCQUFNQSxDQUFOLENBQUosRUFBYztBQUNuQixXQUFPRCxJQUFJQyxDQUFKLENBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSSxrQkFBTUEsQ0FBTixDQUFKLEVBQWM7QUFDbkIsV0FBT1ksS0FBS1osQ0FBTCxDQUFQO0FBQ0Q7O0FBRUQsU0FBT0EsQ0FBUDtBQUNELENBVk0iLCJmaWxlIjoicGFyc2Vycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNwbGl0Q29sb3JWYWx1ZXMsIGlzUmdiLCBpc0hleCwgaXNIc2wgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IGhleCA9ICh2KSA9PiB7XG4gIGxldCByLCBnLCBiO1xuXG4gIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gIGlmICh2Lmxlbmd0aCA+IDQpIHtcbiAgICByID0gdi5zdWJzdHIoMSwgMik7XG4gICAgZyA9IHYuc3Vic3RyKDMsIDIpO1xuICAgIGIgPSB2LnN1YnN0cig1LCAyKTtcblxuICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICB9IGVsc2Uge1xuICAgIHIgPSB2LnN1YnN0cigxLCAxKTtcbiAgICBnID0gdi5zdWJzdHIoMiwgMSk7XG4gICAgYiA9IHYuc3Vic3RyKDMsIDEpO1xuICAgIHIgKz0gcjtcbiAgICBnICs9IGc7XG4gICAgYiArPSBiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICBncmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgIGJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICBhbHBoYTogMVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHJnYmEgPSBzcGxpdENvbG9yVmFsdWVzKFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAnYWxwaGEnXSk7XG5cbmV4cG9ydCBjb25zdCBoc2xhID0gc3BsaXRDb2xvclZhbHVlcyhbJ2h1ZScsICdzYXR1cmF0aW9uJywgJ2xpZ2h0bmVzcycsICdhbHBoYSddKTtcblxuZXhwb3J0IGNvbnN0IGNvbG9yID0gKHYpID0+IHtcbiAgaWYgKGlzUmdiKHYpKSB7XG4gICAgcmV0dXJuIHJnYmEodik7XG4gIH0gZWxzZSBpZiAoaXNIZXgodikpIHtcbiAgICByZXR1cm4gaGV4KHYpO1xuICB9IGVsc2UgaWYgKGlzSHNsKHYpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cblxuICByZXR1cm4gdjtcbn07XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdXRpbHMuanMiXSwibmFtZXMiOlsic3BsaXRDb2xvclZhbHVlcyIsInZhclR5cGUiLCJ2YXJpYWJsZSIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiQ0FNRUxfQ0FTRV9QQVRURVJOIiwiUkVQTEFDRV9URU1QTEFURSIsIkhBU19QRVJGT1JNQU5DRV9OT1ciLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNhbWVsVG9EYXNoIiwic3RyaW5nIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiY3VycmVudFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInNldERPTUF0dHJzIiwiZWxlbWVudCIsImF0dHJzIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJzZXRBdHRyaWJ1dGUiLCJzcGxpdENvbW1hRGVsaW1pdGVkIiwidmFsdWUiLCJpc1N0cmluZyIsInNwbGl0IiwiY29udGFpbnMiLCJ0ZXJtIiwidiIsImluZGV4T2YiLCJpc0ZpcnN0Q2hhcnMiLCJjcmVhdGVVbml0VHlwZSIsInR5cGUiLCJ0cmFuc2Zvcm0iLCJ0ZXN0IiwicGFyc2UiLCJwYXJzZUZsb2F0IiwiZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmciLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsInRlcm1zIiwibnVtVGVybXMiLCJsZW5ndGgiLCJ2YWx1ZXMiLCJ2YWx1ZXNBcnJheSIsImkiLCJ1bmRlZmluZWQiLCJpc0FycmF5IiwiYXJyIiwiaXNGdW5jIiwib2JqIiwiaXNOdW0iLCJudW0iLCJpc09iaiIsInN0ciIsImlzSGV4IiwiaXNSZ2IiLCJpc0hzbCIsImlzQ29sb3IiXSwibWFwcGluZ3MiOiI7OztRQTZFZ0JBLGdCLEdBQUFBLGdCO0FBN0VoQixJQUFNQyxVQUFVLFVBQUNDLFFBQUQ7QUFBQSxTQUFjQyxPQUFPQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JKLFFBQS9CLEVBQXlDSyxLQUF6QyxDQUErQyxDQUEvQyxFQUFr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O0FBTU8sSUFBTUMsMEJBQVMsVUFBQ0MsR0FBRDtBQUFBLFNBQVNyRCxRQUFRcUQsR0FBUixNQUFpQixVQUExQjtBQUFBLENBQWY7O0FBRVA7Ozs7OztBQU1PLElBQU1DLHdCQUFRLFVBQUNDLEdBQUQ7QUFBQSxTQUFTLE9BQU9BLEdBQVAsS0FBZSxRQUF4QjtBQUFBLENBQWQ7O0FBRVA7Ozs7OztBQU1PLElBQU1DLHdCQUFRLFVBQUNILEdBQUQ7QUFBQSxTQUFTLE9BQU9BLEdBQVAsS0FBZSxRQUF4QjtBQUFBLENBQWQ7O0FBRVA7Ozs7OztBQU1PLElBQU0xQiw4QkFBVyxVQUFDOEIsR0FBRDtBQUFBLFNBQVMsT0FBT0EsR0FBUCxLQUFlLFFBQXhCO0FBQUEsQ0FBakI7O0FBRUEsSUFBTUMsd0JBQVF6QixhQUFhLEdBQWIsQ0FBZDtBQUNBLElBQU0wQix3QkFBUTFCLGFBQWEsS0FBYixDQUFkO0FBQ0EsSUFBTTJCLHdCQUFRM0IsYUFBYSxLQUFiLENBQWQ7QUFDQSxJQUFNNEIsNEJBQVUsVUFBQzlCLENBQUQ7QUFBQSxTQUFRMkIsTUFBTTNCLENBQU4sS0FBWTRCLE1BQU01QixDQUFOLENBQVosSUFBd0I2QixNQUFNN0IsQ0FBTixDQUFoQztBQUFBLENBQWhCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFyVHlwZSA9ICh2YXJpYWJsZSkgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG5cbmNvbnN0IENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xuY29uc3QgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG5jb25zdCBIQVNfUEVSRk9STUFOQ0VfTk9XID0gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KTtcblxuLypcbiAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG5leHBvcnQgY29uc3QgY2FtZWxUb0Rhc2ggPSAoc3RyaW5nKSA9PiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG5cbi8qXG4gIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gIFxuICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/ICgpID0+IHBlcmZvcm1hbmNlLm5vdygpIDogKCkgPT4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbmV4cG9ydCBjb25zdCBzZXRET01BdHRycyA9IChlbGVtZW50LCBhdHRycykgPT4ge1xuICBmb3IgKGxldCBrZXkgaW4gYXR0cnMpIHtcbiAgICBpZiAoYXR0cnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG4gIH1cbn07XG4vKlxuICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgXCJmb28sYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzcGxpdENvbW1hRGVsaW1pdGVkID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG5cbi8qKlxuICogIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgY2hlY2sgYW55IGFyZ3VtZW50IGZvciBgdGVybWBcbiAqIGBjb250YWlucygnbmVlZGxlJykoJ2hheXN0YWNrJylgXG4gKi9cbmV4cG9ydCBjb25zdCBjb250YWlucyA9ICh0ZXJtKSA9PiAodikgPT4ge1xuICByZXR1cm4gKGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSAhPT0gLTEpO1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayB0byBzZWUgaWYgYW4gYXJndW1lbnQgaXNcbiAqICB0aGUgZmlyc3QgY2hhcmFjdGVycyBpbiB0aGUgcHJvdmlkZWQgYHRlcm1gXG4gKiBgaXNGaXJzdENoYXJzKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xuZXhwb3J0IGNvbnN0IGlzRmlyc3RDaGFycyA9ICh0ZXJtKSA9PiAodikgPT4ge1xuICByZXR1cm4gKGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSA9PT0gMCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBhIHVuaXQgdmFsdWUgdHlwZVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVW5pdFR5cGUgPSAodHlwZSwgdHJhbnNmb3JtKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGVzdDogY29udGFpbnModHlwZSksXG4gICAgcGFyc2U6IHBhcnNlRmxvYXQsXG4gICAgdHJhbnNmb3JtXG4gIH07XG59O1xuXG4vKlxuICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcbiAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSAodmFsdWUpID0+IHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHNwbGl0IGNvbG9yXG4gKiB2YWx1ZXMgZnJvbSBzdHJpbmcgaW50byBhbiBvYmplY3Qgb2YgcHJvcGVydGllc1xuICogYG1hcEFycmF5VG9PYmplY3QoWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddKSgncmdiYSgwLDAsMCknKWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0Q29sb3JWYWx1ZXModGVybXMpIHtcbiAgY29uc3QgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgY29uc3QgdmFsdWVzID0ge307XG4gICAgY29uc3QgdmFsdWVzQXJyYXkgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHYpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgdmFsdWVzW3Rlcm1zW2ldXSA9ICh2YWx1ZXNBcnJheVtpXSAhPT0gdW5kZWZpbmVkKSA/IHBhcnNlRmxvYXQodmFsdWVzQXJyYXlbaV0pIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xufVxuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IChhcnIpID0+IHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5JztcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG5leHBvcnQgY29uc3QgaXNGdW5jID0gKG9iaikgPT4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xuZXhwb3J0IGNvbnN0IGlzTnVtID0gKG51bSkgPT4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xuZXhwb3J0IGNvbnN0IGlzT2JqID0gKG9iaikgPT4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAoc3RyKSA9PiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcblxuZXhwb3J0IGNvbnN0IGlzSGV4ID0gaXNGaXJzdENoYXJzKCcjJyk7XG5leHBvcnQgY29uc3QgaXNSZ2IgPSBpc0ZpcnN0Q2hhcnMoJ3JnYicpO1xuZXhwb3J0IGNvbnN0IGlzSHNsID0gaXNGaXJzdENoYXJzKCdoc2wnKTtcbmV4cG9ydCBjb25zdCBpc0NvbG9yID0gKHYpID0+IChpc0hleCh2KSB8fCBpc1JnYih2KSB8fCBpc0hzbCh2KSk7XG4iXX0=

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
	
	var _valueTypes = __webpack_require__(4);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXJlcnMvY3NzL3ByZWZpeGVyLmpzIl0sIm5hbWVzIjpbImNhbWVsQ2FjaGUiLCJkYXNoQ2FjaGUiLCJwcmVmaXhlcyIsIm51bVByZWZpeGVzIiwibGVuZ3RoIiwidGVzdEVsZW1lbnQiLCJ0ZXN0UHJlZml4Iiwia2V5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaSIsInByZWZpeCIsIm5vUHJlZml4IiwicHJlZml4ZWRQcm9wZXJ0eU5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwic3R5bGUiLCJhc0Rhc2hDYXNlIiwiY2FjaGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhLEVBQW5CO0FBQ0EsSUFBTUMsWUFBWSxFQUFsQjtBQUNBLElBQU1DLFdBQVcsQ0FBQyxRQUFELEVBQVUsS0FBVixFQUFnQixHQUFoQixFQUFvQixJQUFwQixFQUEwQixFQUExQixDQUFqQjtBQUNBLElBQU1DLGNBQWNELFNBQVNFLE1BQTdCO0FBQ0EsSUFBSUMsb0JBQUo7O0FBRUE7Ozs7OztBQU1BLElBQU1DLGFBQWEsVUFBQ0MsR0FBRCxFQUFTO0FBQzFCRixnQkFBY0EsZUFBZUcsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUE3Qjs7QUFFQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSVAsV0FBcEIsRUFBaUNPLEdBQWpDLEVBQXNDO0FBQ3BDLFFBQU1DLFNBQVNULFNBQVNRLENBQVQsQ0FBZjtBQUNBLFFBQU1FLFdBQVlELFdBQVcsRUFBN0I7QUFDQSxRQUFNRSx1QkFBdUJELFdBQVdMLEdBQVgsR0FBaUJJLFNBQVNKLElBQUlPLE1BQUosQ0FBVyxDQUFYLEVBQWNDLFdBQWQsRUFBVCxHQUF1Q1IsSUFBSVMsS0FBSixDQUFVLENBQVYsQ0FBckY7O0FBRUEsUUFBSUgsd0JBQXdCUixZQUFZWSxLQUF4QyxFQUErQztBQUM3Q2pCLGlCQUFXTyxHQUFYLElBQWtCTSxvQkFBbEI7QUFDQVosZ0JBQVVNLEdBQVYsVUFBcUJLLFdBQVcsRUFBWCxHQUFnQixHQUFyQyxJQUE0Qyx3QkFBWUMsb0JBQVosQ0FBNUM7QUFDRDtBQUNGO0FBQ0YsQ0FiRDs7a0JBZWUsVUFBQ04sR0FBRCxFQUFNVyxVQUFOLEVBQXFCO0FBQ2xDLE1BQU1DLFFBQVFELGFBQWFqQixTQUFiLEdBQXlCRCxVQUF2Qzs7QUFFQSxNQUFJLENBQUNtQixNQUFNWixHQUFOLENBQUwsRUFBaUI7QUFDZkQsZUFBV0MsR0FBWDtBQUNEOztBQUVELFNBQU9ZLE1BQU1aLEdBQU4sQ0FBUDtBQUNELEMiLCJmaWxlIjoicHJlZml4ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW1lbFRvRGFzaCB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5cbmNvbnN0IGNhbWVsQ2FjaGUgPSB7fTtcbmNvbnN0IGRhc2hDYWNoZSA9IHt9O1xuY29uc3QgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsJ01veicsJ08nLCdtcycsICcnXTtcbmNvbnN0IG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xubGV0IHRlc3RFbGVtZW50O1xuXG4vKlxuICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gIFxuICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xuY29uc3QgdGVzdFByZWZpeCA9IChrZXkpID0+IHtcbiAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICBjb25zdCBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICBjb25zdCBub1ByZWZpeCA9IChwcmVmaXggPT09ICcnKTtcbiAgICBjb25zdCBwcmVmaXhlZFByb3BlcnR5TmFtZSA9IG5vUHJlZml4ID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgaWYgKHByZWZpeGVkUHJvcGVydHlOYW1lIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICBjYW1lbENhY2hlW2tleV0gPSBwcmVmaXhlZFByb3BlcnR5TmFtZTtcbiAgICAgIGRhc2hDYWNoZVtrZXldID0gYCR7KG5vUHJlZml4ID8gJycgOiAnLScpfSR7Y2FtZWxUb0Rhc2gocHJlZml4ZWRQcm9wZXJ0eU5hbWUpfWA7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoa2V5LCBhc0Rhc2hDYXNlKSA9PiB7XG4gIGNvbnN0IGNhY2hlID0gYXNEYXNoQ2FzZSA/IGRhc2hDYWNoZSA6IGNhbWVsQ2FjaGU7XG5cbiAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgdGVzdFByZWZpeChrZXkpO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuIl19

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(25);
	
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _valueTypes = __webpack_require__(4);
	
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
/* 34 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2RiNDJjNDQyYWQ3ZjAxZTNiMTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdmFsdWUtdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9jYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2JsZW5kLXR3ZWVucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jaGFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb2xvci10d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9kZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wYXJhbGxlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvc3RhZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9zdmctcGF0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3BhcnNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJhbWVzeW5jL29uLW5leHQtZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyYW1lc3luYy9jcmVhdGUtcmVuZGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVycy9jc3MvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXJlcnMvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy92YWx1ZS10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL2Nzcy9wcmVmaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy92YWx1ZS10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7O0FDdENBOztBQUVBOztBQUVBOztBQUVBLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUTtBQUNBLDRDQUEyQyxtWjs7Ozs7O0FD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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyx1K0Y7Ozs7OztBQzFDM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyxtL0o7Ozs7OztBQ3pEM0M7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLCs1Qjs7Ozs7O0FDbEIzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLCtzRiIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDNkYjQyYzQ0MmFkN2YwMWUzYjE1XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3BvcG1vdGlvbiA9IHJlcXVpcmUoJy4vcG9wbW90aW9uJyk7XG5cbnZhciBwb3Btb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcG9wbW90aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxud2luZG93LnBvcG1vdGlvbiA9IHBvcG1vdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5bmJHOWlZV3d1YW5NaVhTd2libUZ0WlhNaU9sc2ljRzl3Ylc5MGFXOXVJaXdpZDJsdVpHOTNJbDBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCT3p0SlFVRlpRU3hUT3pzN08wRkJRMXBETEU5QlFVOUVMRk5CUVZBc1IwRkJiVUpCTEZOQlFXNUNJaXdpWm1sc1pTSTZJbWRzYjJKaGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENBcUlHRnpJSEJ2Y0cxdmRHbHZiaUJtY205dElDY3VMM0J2Y0cxdmRHbHZiaWM3WEc1M2FXNWtiM2N1Y0c5d2JXOTBhVzl1SUQwZ2NHOXdiVzkwYVc5dU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN2Z1BhdGggPSBleHBvcnRzLnN2ZyA9IGV4cG9ydHMuY3NzID0gZXhwb3J0cy5SZW5kZXJlciA9IGV4cG9ydHMudmFsdWUgPSBleHBvcnRzLnN0YWdnZXIgPSBleHBvcnRzLnR3ZWVuID0gZXhwb3J0cy5wb2ludGVyID0gZXhwb3J0cy5waHlzaWNzID0gZXhwb3J0cy5wYXJhbGxlbCA9IGV4cG9ydHMuZGVsYXkgPSBleHBvcnRzLmNyb3NzRmFkZSA9IGV4cG9ydHMuY29tcG9zaXRlID0gZXhwb3J0cy5jb2xvclR3ZWVuID0gZXhwb3J0cy5jaGFpbiA9IGV4cG9ydHMuYmxlbmRUd2VlbnMgPSBleHBvcnRzLkFjdGlvbiA9IGV4cG9ydHMudmFsdWVUeXBlcyA9IGV4cG9ydHMudHJhbnNmb3JtID0gZXhwb3J0cy5lYXNpbmcgPSBleHBvcnRzLmNhbGMgPSBleHBvcnRzLmN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGV4cG9ydHMudGltZVNpbmNlTGFzdEZyYW1lID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lRW5kID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lVXBkYXRlID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lU3RhcnQgPSBleHBvcnRzLm9uRnJhbWVFbmQgPSBleHBvcnRzLm9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLm9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLm9uRnJhbWVTdGFydCA9IHVuZGVmaW5lZDtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuL2ZyYW1lc3luYycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVTdGFydCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVN0YXJ0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnb25GcmFtZVVwZGF0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ29uRnJhbWVSZW5kZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLm9uRnJhbWVSZW5kZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdvbkZyYW1lRW5kJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5vbkZyYW1lRW5kO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZVN0YXJ0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lU3RhcnQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxPbkZyYW1lVXBkYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lVXBkYXRlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsT25GcmFtZVJlbmRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY2FuY2VsT25GcmFtZVJlbmRlcjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbmNlbE9uRnJhbWVFbmQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLmNhbmNlbE9uRnJhbWVFbmQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd0aW1lU2luY2VMYXN0RnJhbWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2N1cnJlbnRGcmFtZVRpbWVzdGFtcCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9mcmFtZXN5bmMuY3VycmVudEZyYW1lVGltZXN0YW1wO1xuICB9XG59KTtcblxudmFyIF9jYWxjMiA9IHJlcXVpcmUoJy4vaW5jL2NhbGMnKTtcblxudmFyIF9jYWxjID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2NhbGMyKTtcblxudmFyIF9lYXNpbmcyID0gcmVxdWlyZSgnLi9pbmMvZWFzaW5nJyk7XG5cbnZhciBfZWFzaW5nID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2Vhc2luZzIpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IHJlcXVpcmUoJy4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3RyYW5zZm9ybSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90cmFuc2Zvcm1lcnMpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gcmVxdWlyZSgnLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3ZhbHVlVHlwZXMyKTtcblxudmFyIF9hY3Rpb25zID0gcmVxdWlyZSgnLi9hY3Rpb25zJyk7XG5cbnZhciBfYWN0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hY3Rpb25zKTtcblxudmFyIF9ibGVuZFR3ZWVuczIgPSByZXF1aXJlKCcuL2FjdGlvbnMvYmxlbmQtdHdlZW5zJyk7XG5cbnZhciBfYmxlbmRUd2VlbnMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmxlbmRUd2VlbnMyKTtcblxudmFyIF9jaGFpbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvY2hhaW4nKTtcblxudmFyIF9jaGFpbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGFpbjIpO1xuXG52YXIgX2NvbG9yVHdlZW4yID0gcmVxdWlyZSgnLi9hY3Rpb25zL2NvbG9yLXR3ZWVuJyk7XG5cbnZhciBfY29sb3JUd2VlbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvclR3ZWVuMik7XG5cbnZhciBfY29tcG9zaXRlMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jb21wb3NpdGUnKTtcblxudmFyIF9jb21wb3NpdGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRlMik7XG5cbnZhciBfY3Jvc3NGYWRlMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9jcm9zcy1mYWRlJyk7XG5cbnZhciBfY3Jvc3NGYWRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nyb3NzRmFkZTIpO1xuXG52YXIgX2RlbGF5MiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9kZWxheScpO1xuXG52YXIgX2RlbGF5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlbGF5Mik7XG5cbnZhciBfcGFyYWxsZWwyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3BhcmFsbGVsJyk7XG5cbnZhciBfcGFyYWxsZWwzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyYWxsZWwyKTtcblxudmFyIF9waHlzaWNzMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9waHlzaWNzJyk7XG5cbnZhciBfcGh5c2ljczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9waHlzaWNzMik7XG5cbnZhciBfcG9pbnRlcjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcG9pbnRlcicpO1xuXG52YXIgX3BvaW50ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9pbnRlcjIpO1xuXG52YXIgX3R3ZWVuMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy90d2VlbicpO1xuXG52YXIgX3R3ZWVuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuMik7XG5cbnZhciBfc3RhZ2dlcjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvc3RhZ2dlcicpO1xuXG52YXIgX3N0YWdnZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhZ2dlcjIpO1xuXG52YXIgX3ZhbHVlMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy92YWx1ZScpO1xuXG52YXIgX3ZhbHVlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlMik7XG5cbnZhciBfcmVuZGVyZXJzID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMnKTtcblxudmFyIF9yZW5kZXJlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVuZGVyZXJzKTtcblxudmFyIF9jc3MyID0gcmVxdWlyZSgnLi9yZW5kZXJlcnMvY3NzJyk7XG5cbnZhciBfY3NzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NzczIpO1xuXG52YXIgX3N2ZzIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9zdmcnKTtcblxudmFyIF9zdmczID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnMik7XG5cbnZhciBfc3ZnUGF0aDIgPSByZXF1aXJlKCcuL3JlbmRlcmVycy9zdmctcGF0aCcpO1xuXG52YXIgX3N2Z1BhdGgzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnUGF0aDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5leHBvcnRzLmNhbGMgPSBfY2FsYztcbmV4cG9ydHMuZWFzaW5nID0gX2Vhc2luZztcbmV4cG9ydHMudHJhbnNmb3JtID0gX3RyYW5zZm9ybTtcbmV4cG9ydHMudmFsdWVUeXBlcyA9IF92YWx1ZVR5cGVzO1xuXG4vLyBBY3Rpb25zXG5cbmV4cG9ydHMuQWN0aW9uID0gX2FjdGlvbnMyLmRlZmF1bHQ7XG5leHBvcnRzLmJsZW5kVHdlZW5zID0gX2JsZW5kVHdlZW5zMy5kZWZhdWx0O1xuZXhwb3J0cy5jaGFpbiA9IF9jaGFpbjMuZGVmYXVsdDtcbmV4cG9ydHMuY29sb3JUd2VlbiA9IF9jb2xvclR3ZWVuMy5kZWZhdWx0O1xuZXhwb3J0cy5jb21wb3NpdGUgPSBfY29tcG9zaXRlMy5kZWZhdWx0O1xuZXhwb3J0cy5jcm9zc0ZhZGUgPSBfY3Jvc3NGYWRlMy5kZWZhdWx0O1xuZXhwb3J0cy5kZWxheSA9IF9kZWxheTMuZGVmYXVsdDtcbmV4cG9ydHMucGFyYWxsZWwgPSBfcGFyYWxsZWwzLmRlZmF1bHQ7XG5leHBvcnRzLnBoeXNpY3MgPSBfcGh5c2ljczMuZGVmYXVsdDtcbmV4cG9ydHMucG9pbnRlciA9IF9wb2ludGVyMy5kZWZhdWx0O1xuZXhwb3J0cy50d2VlbiA9IF90d2VlbjMuZGVmYXVsdDtcbmV4cG9ydHMuc3RhZ2dlciA9IF9zdGFnZ2VyMy5kZWZhdWx0O1xuZXhwb3J0cy52YWx1ZSA9IF92YWx1ZTMuZGVmYXVsdDtcblxuLy8gUmVuZGVyZXJzXG5cbmV4cG9ydHMuUmVuZGVyZXIgPSBfcmVuZGVyZXJzMi5kZWZhdWx0O1xuZXhwb3J0cy5jc3MgPSBfY3NzMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmcgPSBfc3ZnMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmdQYXRoID0gX3N2Z1BhdGgzLmRlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdiM0J0YjNScGIyNHVhbk1pWFN3aWJtRnRaWE1pT2xzaWIyNUdjbUZ0WlZOMFlYSjBJaXdpYjI1R2NtRnRaVlZ3WkdGMFpTSXNJbTl1Um5KaGJXVlNaVzVrWlhJaUxDSnZia1p5WVcxbFJXNWtJaXdpWTJGdVkyVnNUMjVHY21GdFpWTjBZWEowSWl3aVkyRnVZMlZzVDI1R2NtRnRaVlZ3WkdGMFpTSXNJbU5oYm1ObGJFOXVSbkpoYldWU1pXNWtaWElpTENKallXNWpaV3hQYmtaeVlXMWxSVzVrSWl3aWRHbHRaVk5wYm1ObFRHRnpkRVp5WVcxbElpd2lZM1Z5Y21WdWRFWnlZVzFsVkdsdFpYTjBZVzF3SWl3aVkyRnNZeUlzSW1WaGMybHVaeUlzSW5SeVlXNXpabTl5YlNJc0luWmhiSFZsVkhsd1pYTWlMQ0pCWTNScGIyNGlMQ0ppYkdWdVpGUjNaV1Z1Y3lJc0ltTm9ZV2x1SWl3aVkyOXNiM0pVZDJWbGJpSXNJbU52YlhCdmMybDBaU0lzSW1OeWIzTnpSbUZrWlNJc0ltUmxiR0Y1SWl3aWNHRnlZV3hzWld3aUxDSndhSGx6YVdOeklpd2ljRzlwYm5SbGNpSXNJblIzWldWdUlpd2ljM1JoWjJkbGNpSXNJblpoYkhWbElpd2lVbVZ1WkdWeVpYSWlMQ0pqYzNNaUxDSnpkbWNpTENKemRtZFFZWFJvSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPM05DUVVWRlFTeFpPenM3T3pzN2MwSkJRMEZETEdFN096czdPenR6UWtGRFFVTXNZVHM3T3pzN08zTkNRVU5CUXl4Vk96czdPenM3YzBKQlEwRkRMR3RDT3pzN096czdjMEpCUTBGRExHMUNPenM3T3pzN2MwSkJRMEZETEcxQ096czdPenM3YzBKQlEwRkRMR2RDT3pzN096czdjMEpCUTBGRExHdENPenM3T3pzN2MwSkJRMEZETEhGQ096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dFJRVWRWUXl4Sk8xRkJRMEZETEUwN1VVRkRRVU1zVXp0UlFVTkJReXhWT3p0QlFVVmFPenRSUVVOUFF5eE5PMUZCUTBGRExGYzdVVUZEUVVNc1N6dFJRVU5CUXl4Vk8xRkJRMEZETEZNN1VVRkRRVU1zVXp0UlFVTkJReXhMTzFGQlEwRkRMRkU3VVVGRFFVTXNUenRSUVVOQlF5eFBPMUZCUTBGRExFczdVVUZEUVVNc1R6dFJRVU5CUXl4TE96dEJRVVZRT3p0UlFVTlBReXhSTzFGQlEwRkRMRWM3VVVGRFFVTXNSenRSUVVOQlF5eFBJaXdpWm1sc1pTSTZJbkJ2Y0cxdmRHbHZiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2SUVaeVlXMWxjM2x1WXlCelkyaGxaSFZzWlhKelhHNWxlSEJ2Y25RZ2UxeHVJQ0J2YmtaeVlXMWxVM1JoY25Rc1hHNGdJRzl1Um5KaGJXVlZjR1JoZEdVc1hHNGdJRzl1Um5KaGJXVlNaVzVrWlhJc1hHNGdJRzl1Um5KaGJXVkZibVFzWEc0Z0lHTmhibU5sYkU5dVJuSmhiV1ZUZEdGeWRDeGNiaUFnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlN4Y2JpQWdZMkZ1WTJWc1QyNUdjbUZ0WlZKbGJtUmxjaXhjYmlBZ1kyRnVZMlZzVDI1R2NtRnRaVVZ1WkN4Y2JpQWdkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxMRnh1SUNCamRYSnlaVzUwUm5KaGJXVlVhVzFsYzNSaGJYQmNibjBnWm5KdmJTQW5MaTltY21GdFpYTjVibU1uTzF4dVhHNWxlSEJ2Y25RZ0tpQmhjeUJqWVd4aklHWnliMjBnSnk0dmFXNWpMMk5oYkdNbk8xeHVaWGh3YjNKMElDb2dZWE1nWldGemFXNW5JR1p5YjIwZ0p5NHZhVzVqTDJWaGMybHVaeWM3WEc1bGVIQnZjblFnS2lCaGN5QjBjbUZ1YzJadmNtMGdabkp2YlNBbkxpOXBibU12ZEhKaGJuTm1iM0p0WlhKekp6dGNibVY0Y0c5eWRDQXFJR0Z6SUhaaGJIVmxWSGx3WlhNZ1puSnZiU0FuTGk5cGJtTXZkbUZzZFdVdGRIbHdaWE1uTzF4dVhHNHZMeUJCWTNScGIyNXpYRzVsZUhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dllXTjBhVzl1Y3ljN1hHNWxlSEJ2Y25RZ1lteGxibVJVZDJWbGJuTWdabkp2YlNBbkxpOWhZM1JwYjI1ekwySnNaVzVrTFhSM1pXVnVjeWM3WEc1bGVIQnZjblFnWTJoaGFXNGdabkp2YlNBbkxpOWhZM1JwYjI1ekwyTm9ZV2x1Snp0Y2JtVjRjRzl5ZENCamIyeHZjbFIzWldWdUlHWnliMjBnSnk0dllXTjBhVzl1Y3k5amIyeHZjaTEwZDJWbGJpYzdYRzVsZUhCdmNuUWdZMjl0Y0c5emFYUmxJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OWpiMjF3YjNOcGRHVW5PMXh1Wlhod2IzSjBJR055YjNOelJtRmtaU0JtY205dElDY3VMMkZqZEdsdmJuTXZZM0p2YzNNdFptRmtaU2M3WEc1bGVIQnZjblFnWkdWc1lYa2dabkp2YlNBbkxpOWhZM1JwYjI1ekwyUmxiR0Y1Snp0Y2JtVjRjRzl5ZENCd1lYSmhiR3hsYkNCbWNtOXRJQ2N1TDJGamRHbHZibk12Y0dGeVlXeHNaV3duTzF4dVpYaHdiM0owSUhCb2VYTnBZM01nWm5KdmJTQW5MaTloWTNScGIyNXpMM0JvZVhOcFkzTW5PMXh1Wlhod2IzSjBJSEJ2YVc1MFpYSWdabkp2YlNBbkxpOWhZM1JwYjI1ekwzQnZhVzUwWlhJbk8xeHVaWGh3YjNKMElIUjNaV1Z1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTkwZDJWbGJpYzdYRzVsZUhCdmNuUWdjM1JoWjJkbGNpQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdmMzUmhaMmRsY2ljN1hHNWxlSEJ2Y25RZ2RtRnNkV1VnWm5KdmJTQW5MaTloWTNScGIyNXpMM1poYkhWbEp6dGNibHh1THk4Z1VtVnVaR1Z5WlhKelhHNWxlSEJ2Y25RZ1VtVnVaR1Z5WlhJZ1puSnZiU0FuTGk5eVpXNWtaWEpsY25Nbk8xeHVaWGh3YjNKMElHTnpjeUJtY205dElDY3VMM0psYm1SbGNtVnljeTlqYzNNbk8xeHVaWGh3YjNKMElITjJaeUJtY205dElDY3VMM0psYm1SbGNtVnljeTl6ZG1jbk8xeHVaWGh3YjNKMElITjJaMUJoZEdnZ1puSnZiU0FuTGk5eVpXNWtaWEpsY25NdmMzWm5MWEJoZEdnbk8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmN1YmljQmV6aWVyID0gZXhwb3J0cy5hbnRpY2lwYXRlID0gZXhwb3J0cy5jcmVhdGVBbnRpY2lwYXRlRWFzaW5nID0gZXhwb3J0cy5iYWNrSW5PdXQgPSBleHBvcnRzLmJhY2tPdXQgPSBleHBvcnRzLmJhY2tJbiA9IGV4cG9ydHMuY3JlYXRlQmFja0luID0gZXhwb3J0cy5jaXJjSW5PdXQgPSBleHBvcnRzLmNpcmNPdXQgPSBleHBvcnRzLmNpcmNJbiA9IGV4cG9ydHMuZWFzZUluT3V0ID0gZXhwb3J0cy5lYXNlT3V0ID0gZXhwb3J0cy5lYXNlSW4gPSBleHBvcnRzLmNyZWF0ZUV4cG9JbiA9IGV4cG9ydHMubGluZWFyID0gZXhwb3J0cy5jcmVhdGVNaXJyb3JlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSB1bmRlZmluZWQ7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1lcnMnKTtcblxudmFyIERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIID0gMS41MjU7XG5cbnZhciBjcmVhdGVSZXZlcnNlZEVhc2luZyA9IGV4cG9ydHMuY3JlYXRlUmV2ZXJzZWRFYXNpbmcgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzaW5nKDEgLSBwKTtcbiAgfTtcbn07XG52YXIgY3JlYXRlTWlycm9yZWRFYXNpbmcgPSBleHBvcnRzLmNyZWF0ZU1pcnJvcmVkRWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8PSAwLjUgPyBlYXNpbmcoMiAqIHApIC8gMiA6ICgyIC0gZWFzaW5nKDIgKiAoMSAtIHApKSkgLyAyO1xuICB9O1xufTtcblxudmFyIGxpbmVhciA9IGV4cG9ydHMubGluZWFyID0gZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHA7XG59O1xuXG52YXIgY3JlYXRlRXhwb0luID0gZXhwb3J0cy5jcmVhdGVFeHBvSW4gPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHAsIHBvd2VyKTtcbiAgfTtcbn07XG52YXIgZWFzZUluID0gZXhwb3J0cy5lYXNlSW4gPSBjcmVhdGVFeHBvSW4oMik7XG52YXIgZWFzZU91dCA9IGV4cG9ydHMuZWFzZU91dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGVhc2VJbik7XG52YXIgZWFzZUluT3V0ID0gZXhwb3J0cy5lYXNlSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhlYXNlSW4pO1xuXG52YXIgY2lyY0luID0gZXhwb3J0cy5jaXJjSW4gPSBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwKSk7XG59O1xudmFyIGNpcmNPdXQgPSBleHBvcnRzLmNpcmNPdXQgPSBjcmVhdGVSZXZlcnNlZEVhc2luZyhjaXJjSW4pO1xudmFyIGNpcmNJbk91dCA9IGV4cG9ydHMuY2lyY0luT3V0ID0gY3JlYXRlTWlycm9yZWRFYXNpbmcoY2lyY091dCk7XG5cbnZhciBjcmVhdGVCYWNrSW4gPSBleHBvcnRzLmNyZWF0ZUJhY2tJbiA9IGZ1bmN0aW9uIChwb3dlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCAqIHAgKiAoKHBvd2VyICsgMSkgKiBwIC0gcG93ZXIpO1xuICB9O1xufTtcbnZhciBiYWNrSW4gPSBleHBvcnRzLmJhY2tJbiA9IGNyZWF0ZUJhY2tJbihERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCk7XG52YXIgYmFja091dCA9IGV4cG9ydHMuYmFja091dCA9IGNyZWF0ZVJldmVyc2VkRWFzaW5nKGJhY2tJbik7XG52YXIgYmFja0luT3V0ID0gZXhwb3J0cy5iYWNrSW5PdXQgPSBjcmVhdGVNaXJyb3JlZEVhc2luZyhiYWNrSW4pO1xuXG52YXIgY3JlYXRlQW50aWNpcGF0ZUVhc2luZyA9IGV4cG9ydHMuY3JlYXRlQW50aWNpcGF0ZUVhc2luZyA9IGZ1bmN0aW9uIChwb3dlcikge1xuICB2YXIgYmFja0Vhc2luZyA9IGNyZWF0ZUJhY2tJbihwb3dlcik7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAocCAqPSAyKSA8IDEgPyAwLjUgKiBiYWNrRWFzaW5nKHApIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocCAtIDEpKSk7XG4gIH07XG59O1xuXG52YXIgYW50aWNpcGF0ZSA9IGV4cG9ydHMuYW50aWNpcGF0ZSA9IGNyZWF0ZUFudGljaXBhdGVFYXNpbmcoREVGQVVMVF9PVkVSU0hPT1RfU1RSRU5HVEgpO1xuXG52YXIgY3ViaWNCZXppZXIgPSBleHBvcnRzLmN1YmljQmV6aWVyID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyKSB7XG4gIHZhciB4QmV6aWVyID0gKDAsIF90cmFuc2Zvcm1lcnMuYmV6aWVyKSgwLCB4MSwgeDIsIDEpO1xuICB2YXIgeUJlemllciA9ICgwLCBfdHJhbnNmb3JtZXJzLmJlemllcikoMCwgeTEsIHkyLCAxKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4geUJlemllcih4QmV6aWVyKHQpKTtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYklrUkZSa0ZWVEZSZlQxWkZVbE5JVDA5VVgxTlVVa1ZPUjFSSUlpd2lZM0psWVhSbFVtVjJaWEp6WldSRllYTnBibWNpTENKbFlYTnBibWNpTENKd0lpd2lZM0psWVhSbFRXbHljbTl5WldSRllYTnBibWNpTENKc2FXNWxZWElpTENKamNtVmhkR1ZGZUhCdlNXNGlMQ0p3YjNkbGNpSXNJbVZoYzJWSmJpSXNJbVZoYzJWUGRYUWlMQ0psWVhObFNXNVBkWFFpTENKamFYSmpTVzRpTENKTllYUm9JaXdpYzJsdUlpd2lZV052Y3lJc0ltTnBjbU5QZFhRaUxDSmphWEpqU1c1UGRYUWlMQ0pqY21WaGRHVkNZV05yU1c0aUxDSmlZV05yU1c0aUxDSmlZV05yVDNWMElpd2lZbUZqYTBsdVQzVjBJaXdpWTNKbFlYUmxRVzUwYVdOcGNHRjBaVVZoYzJsdVp5SXNJbUpoWTJ0RllYTnBibWNpTENKd2IzY2lMQ0poYm5ScFkybHdZWFJsSWl3aVkzVmlhV05DWlhwcFpYSWlMQ0o0TVNJc0lua3hJaXdpZURJaUxDSjVNaUlzSW5oQ1pYcHBaWElpTENKNVFtVjZhV1Z5SWl3aWRDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdRVUZCUVRzN1FVRkZRU3hKUVVGTlFTdzJRa0ZCTmtJc1MwRkJia003TzBGQlJVOHNTVUZCVFVNc2MwUkJRWFZDTEZWQlFVTkRMRTFCUVVRN1FVRkJRU3hUUVVGWkxGVkJRVU5ETEVOQlFVUTdRVUZCUVN4WFFVRlBMRWxCUVVsRUxFOUJRVThzU1VGQlNVTXNRMEZCV0N4RFFVRllPMEZCUVVFc1IwRkJXanRCUVVGQkxFTkJRVGRDTzBGQlEwRXNTVUZCVFVNc2MwUkJRWFZDTEZWQlFVTkdMRTFCUVVRN1FVRkJRU3hUUVVGWkxGVkJRVU5ETEVOQlFVUTdRVUZCUVN4WFFVRlJRU3hMUVVGTExFZEJRVTRzUjBGQllVUXNUMEZCVHl4SlFVRkpReXhEUVVGWUxFbEJRV2RDTEVOQlFUZENMRWRCUVdsRExFTkJRVU1zU1VGQlNVUXNUMEZCVHl4TFFVRkxMRWxCUVVsRExFTkJRVlFzUTBGQlVDeERRVUZNTEVsQlFUUkNMRU5CUVhCRk8wRkJRVUVzUjBGQldqdEJRVUZCTEVOQlFUZENPenRCUVVWQkxFbEJRVTFGTERCQ1FVRlRMRlZCUVVOR0xFTkJRVVE3UVVGQlFTeFRRVUZQUVN4RFFVRlFPMEZCUVVFc1EwRkJaanM3UVVGRlFTeEpRVUZOUnl4elEwRkJaU3hWUVVGRFF5eExRVUZFTzBGQlFVRXNVMEZCVnl4VlFVRkRTaXhEUVVGRU8wRkJRVUVzYjBKQlFVOUJMRU5CUVZBc1JVRkJXVWtzUzBGQldqdEJRVUZCTEVkQlFWZzdRVUZCUVN4RFFVRnlRanRCUVVOQkxFbEJRVTFETERCQ1FVRlRSaXhoUVVGaExFTkJRV0lzUTBGQlpqdEJRVU5CTEVsQlFVMUhMRFJDUVVGVlVpeHhRa0ZCY1VKUExFMUJRWEpDTEVOQlFXaENPMEZCUTBFc1NVRkJUVVVzWjBOQlFWbE9MSEZDUVVGeFFra3NUVUZCY2tJc1EwRkJiRUk3TzBGQlJVRXNTVUZCVFVjc01FSkJRVk1zVlVGQlExSXNRMEZCUkR0QlFVRkJMRk5CUVU4c1NVRkJTVk1zUzBGQlMwTXNSMEZCVEN4RFFVRlRSQ3hMUVVGTFJTeEpRVUZNTEVOQlFWVllMRU5CUVZZc1EwRkJWQ3hEUVVGWU8wRkJRVUVzUTBGQlpqdEJRVU5CTEVsQlFVMVpMRFJDUVVGVlpDeHhRa0ZCY1VKVkxFMUJRWEpDTEVOQlFXaENPMEZCUTBFc1NVRkJUVXNzWjBOQlFWbGFMSEZDUVVGeFFsY3NUMEZCY2tJc1EwRkJiRUk3TzBGQlJVRXNTVUZCVFVVc2MwTkJRV1VzVlVGQlExWXNTMEZCUkR0QlFVRkJMRk5CUVZjc1ZVRkJRMG9zUTBGQlJEdEJRVUZCTEZkQlFWRkJMRWxCUVVsQkxFTkJRVXdzU1VGQlZ5eERRVUZEU1N4UlFVRlJMRU5CUVZRc1NVRkJZMG9zUTBGQlpDeEhRVUZyUWtrc1MwRkJOMElzUTBGQlVEdEJRVUZCTEVkQlFWZzdRVUZCUVN4RFFVRnlRanRCUVVOQkxFbEJRVTFYTERCQ1FVRlRSQ3hoUVVGaGFrSXNNRUpCUVdJc1EwRkJaanRCUVVOQkxFbEJRVTF0UWl3MFFrRkJWV3hDTEhGQ1FVRnhRbWxDTEUxQlFYSkNMRU5CUVdoQ08wRkJRMEVzU1VGQlRVVXNaME5CUVZsb1FpeHhRa0ZCY1VKakxFMUJRWEpDTEVOQlFXeENPenRCUVVWQkxFbEJRVTFITERCRVFVRjVRaXhWUVVGRFpDeExRVUZFTEVWQlFWYzdRVUZETDBNc1RVRkJUV1VzWVVGQllVd3NZVUZCWVZZc1MwRkJZaXhEUVVGdVFqdEJRVU5CTEZOQlFVOHNWVUZCUTBvc1EwRkJSRHRCUVVGQkxGZEJRVkVzUTBGQlEwRXNTMEZCU3l4RFFVRk9MRWxCUVZjc1EwRkJXaXhIUVVGcFFpeE5RVUZOYlVJc1YwRkJWMjVDTEVOQlFWZ3NRMEZCZGtJc1IwRkJkVU1zVDBGQlR5eEpRVUZKVXl4TFFVRkxWeXhIUVVGTUxFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFVTXNSVUZCUkN4SlFVRlBjRUlzU1VGQlNTeERRVUZZTEVOQlFWb3NRMEZCV0N4RFFVRTVRenRCUVVGQkxFZEJRVkE3UVVGRFJDeERRVWhOT3p0QlFVdEJMRWxCUVUxeFFpeHJRMEZCWVVnc2RVSkJRWFZDY2tJc01FSkJRWFpDTEVOQlFXNUNPenRCUVVWQkxFbEJRVTE1UWl4dlEwRkJZeXhWUVVGRFF5eEZRVUZFTEVWQlFVdERMRVZCUVV3c1JVRkJVME1zUlVGQlZDeEZRVUZoUXl4RlFVRmlMRVZCUVc5Q08wRkJRemRETEUxQlFVMURMRlZCUVZVc01FSkJRVThzUTBGQlVDeEZRVUZWU2l4RlFVRldMRVZCUVdORkxFVkJRV1FzUlVGQmEwSXNRMEZCYkVJc1EwRkJhRUk3UVVGRFFTeE5RVUZOUnl4VlFVRlZMREJDUVVGUExFTkJRVkFzUlVGQlZVb3NSVUZCVml4RlFVRmpSU3hGUVVGa0xFVkJRV3RDTEVOQlFXeENMRU5CUVdoQ096dEJRVVZCTEZOQlFVOHNWVUZCUTBjc1EwRkJSRHRCUVVGQkxGZEJRVTlFTEZGQlFWRkVMRkZCUVZGRkxFTkJRVklzUTBGQlVpeERRVUZRTzBGQlFVRXNSMEZCVUR0QlFVTkVMRU5CVEUwaUxDSm1hV3hsSWpvaVpXRnphVzVuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWW1WNmFXVnlJSDBnWm5KdmJTQW5MaTkwY21GdWMyWnZjbTFsY25Nbk8xeHVYRzVqYjI1emRDQkVSVVpCVlV4VVgwOVdSVkpUU0U5UFZGOVRWRkpGVGtkVVNDQTlJREV1TlRJMU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzSmxZWFJsVW1WMlpYSnpaV1JGWVhOcGJtY2dQU0FvWldGemFXNW5LU0E5UGlBb2NDa2dQVDRnTVNBdElHVmhjMmx1WnlneElDMGdjQ2s3WEc1bGVIQnZjblFnWTI5dWMzUWdZM0psWVhSbFRXbHljbTl5WldSRllYTnBibWNnUFNBb1pXRnphVzVuS1NBOVBpQW9jQ2tnUFQ0Z0tIQWdQRDBnTUM0MUtTQS9JR1ZoYzJsdVp5Z3lJQ29nY0NrZ0x5QXlJRG9nS0RJZ0xTQmxZWE5wYm1jb01pQXFJQ2d4SUMwZ2NDa3BLU0F2SURJN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCc2FXNWxZWElnUFNBb2NDa2dQVDRnY0R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVVY0Y0c5SmJpQTlJQ2h3YjNkbGNpa2dQVDRnS0hBcElEMCtJSEFnS2lvZ2NHOTNaWEk3WEc1bGVIQnZjblFnWTI5dWMzUWdaV0Z6WlVsdUlEMGdZM0psWVhSbFJYaHdiMGx1S0RJcE8xeHVaWGh3YjNKMElHTnZibk4wSUdWaGMyVlBkWFFnUFNCamNtVmhkR1ZTWlhabGNuTmxaRVZoYzJsdVp5aGxZWE5sU1c0cE8xeHVaWGh3YjNKMElHTnZibk4wSUdWaGMyVkpiazkxZENBOUlHTnlaV0YwWlUxcGNuSnZjbVZrUldGemFXNW5LR1ZoYzJWSmJpazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmphWEpqU1c0Z1BTQW9jQ2tnUFQ0Z01TQXRJRTFoZEdndWMybHVLRTFoZEdndVlXTnZjeWh3S1NrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJseVkwOTFkQ0E5SUdOeVpXRjBaVkpsZG1WeWMyVmtSV0Z6YVc1bktHTnBjbU5KYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJseVkwbHVUM1YwSUQwZ1kzSmxZWFJsVFdseWNtOXlaV1JGWVhOcGJtY29ZMmx5WTA5MWRDazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWQ1lXTnJTVzRnUFNBb2NHOTNaWElwSUQwK0lDaHdLU0E5UGlBb2NDQXFJSEFwSUNvZ0tDaHdiM2RsY2lBcklERXBJQ29nY0NBdElIQnZkMlZ5S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JpWVdOclNXNGdQU0JqY21WaGRHVkNZV05yU1c0b1JFVkdRVlZNVkY5UFZrVlNVMGhQVDFSZlUxUlNSVTVIVkVncE8xeHVaWGh3YjNKMElHTnZibk4wSUdKaFkydFBkWFFnUFNCamNtVmhkR1ZTWlhabGNuTmxaRVZoYzJsdVp5aGlZV05yU1c0cE8xeHVaWGh3YjNKMElHTnZibk4wSUdKaFkydEpiazkxZENBOUlHTnlaV0YwWlUxcGNuSnZjbVZrUldGemFXNW5LR0poWTJ0SmJpazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWQmJuUnBZMmx3WVhSbFJXRnphVzVuSUQwZ0tIQnZkMlZ5S1NBOVBpQjdYRzRnSUdOdmJuTjBJR0poWTJ0RllYTnBibWNnUFNCamNtVmhkR1ZDWVdOclNXNG9jRzkzWlhJcE8xeHVJQ0J5WlhSMWNtNGdLSEFwSUQwK0lDZ29jQ0FxUFNBeUtTQThJREVwSUQ4Z01DNDFJQ29nWW1GamEwVmhjMmx1Wnlod0tTQTZJREF1TlNBcUlDZ3lJQzBnVFdGMGFDNXdiM2NvTWl3Z0xURXdJQ29nS0hBZ0xTQXhLU2twTzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHRnVkR2xqYVhCaGRHVWdQU0JqY21WaGRHVkJiblJwWTJsd1lYUmxSV0Z6YVc1bktFUkZSa0ZWVEZSZlQxWkZVbE5JVDA5VVgxTlVVa1ZPUjFSSUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTjFZbWxqUW1WNmFXVnlJRDBnS0hneExDQjVNU3dnZURJc0lIa3lLU0E5UGlCN1hHNGdJR052Ym5OMElIaENaWHBwWlhJZ1BTQmlaWHBwWlhJb01Dd2dlREVzSUhneUxDQXhLVHRjYmlBZ1kyOXVjM1FnZVVKbGVtbGxjaUE5SUdKbGVtbGxjaWd3TENCNU1Td2dlVElzSURFcE8xeHVYRzRnSUhKbGRIVnliaUFvZENrZ1BUNGdlVUpsZW1sbGNpaDRRbVY2YVdWeUtIUXBLVHRjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5iZXppZXIgPSBleHBvcnRzLmJsZW5kQ29sb3IgPSBleHBvcnRzLmFscGhhID0gZXhwb3J0cy5jb2xvciA9IGV4cG9ydHMuaHNsYSA9IGV4cG9ydHMucmdiYSA9IGV4cG9ydHMucmdiVW5pdCA9IGV4cG9ydHMucHggPSBleHBvcnRzLmRlZ3JlZXMgPSBleHBvcnRzLnBlcmNlbnQgPSBleHBvcnRzLnRyYW5zZm9ybUNoaWxkVmFsdWVzID0gZXhwb3J0cy5zdGVwcyA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy53cmFwID0gZXhwb3J0cy5ub25saW5lYXJTcHJpbmcgPSBleHBvcnRzLnNwcmluZyA9IGV4cG9ydHMuZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZyA9IGV4cG9ydHMubXVsdGlwbHkgPSBleHBvcnRzLmRpdmlkZSA9IGV4cG9ydHMuYWRkID0gZXhwb3J0cy5zdWJ0cmFjdCA9IGV4cG9ydHMuaW50ZXJwb2xhdGUgPSBleHBvcnRzLmZsb3cgPSBleHBvcnRzLmNvbmRpdGlvbmFsID0gZXhwb3J0cy5jbGFtcCA9IGV4cG9ydHMuY2xhbXBNaW4gPSBleHBvcnRzLmNsYW1wTWF4ID0gZXhwb3J0cy5hcHBseU9mZnNldCA9IGV4cG9ydHMuYXBwZW5kVW5pdCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uICh2KSB7XG4gIHJldHVybiB2O1xufTtcblxuLyoqXG4gKiBBcHBlbmQgVW5pdFxuICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYXBwZW5kXG4gKiBhcHBlbmRVbml0KCdweCcsIDIwKSAtPiAnMjBweCdcbiAqIEBwYXJhbSAge3N0cmluZ30gdW5pdClcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIGFwcGVuZFVuaXQgPSBleHBvcnRzLmFwcGVuZFVuaXQgPSBmdW5jdGlvbiAodW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gJycgKyB2ICsgdW5pdDtcbiAgfTtcbn07XG5cbi8qKlxuICogQXBwbHkgb2Zmc2V0XG4gKiBBIGZ1bmN0aW9uIHRoYXQsIGdpdmVuIGEgdmFsdWUsIHdpbGwgZ2V0IHRoZSBvZmZzZXQgZnJvbSBgZnJvbWBcbiAqIGFuZCBhcHBseSBpdCB0byBgdG9gXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGZyb21cbiAqIEBwYXJhbSAge251bWJlcn0gdG9cbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG52YXIgYXBwbHlPZmZzZXQgPSBleHBvcnRzLmFwcGx5T2Zmc2V0ID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gIHZhciBnZXRPZmZzZXQgPSBzdWJ0cmFjdChmcm9tKTtcbiAgdmFyIGFwcGx5T2Zmc2V0VG8gPSBhZGQodG8pO1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gYXBwbHlPZmZzZXRUbyhnZXRPZmZzZXQodikpO1xuICB9O1xufTtcblxuLyoqXG4gKiBDbGFtcCB2YWx1ZSBiZXR3ZWVuXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlc3RyaWN0IGEgZ2l2ZW4gdmFsdWUgYmV0d2VlbiBgbWluYCBhbmQgYG1heGBcbiAqIEBwYXJhbSAge251bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgY2xhbXBNYXggPSBleHBvcnRzLmNsYW1wTWF4ID0gZnVuY3Rpb24gKG1heCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odiwgbWF4KTtcbiAgfTtcbn07XG52YXIgY2xhbXBNaW4gPSBleHBvcnRzLmNsYW1wTWluID0gZnVuY3Rpb24gKG1pbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgodiwgbWluKTtcbiAgfTtcbn07XG52YXIgY2xhbXAgPSBleHBvcnRzLmNsYW1wID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gIHZhciBfbWluID0gY2xhbXBNaW4obWluKTtcbiAgdmFyIF9tYXggPSBjbGFtcE1heChtYXgpO1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gX21pbihfbWF4KHYpKTtcbiAgfTtcbn07XG5cbnZhciBjb25kaXRpb25hbCA9IGV4cG9ydHMuY29uZGl0aW9uYWwgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBpZlRydWUpIHtcbiAgdmFyIGlmRmFsc2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG5vb3A7XG4gIHJldHVybiBmdW5jdGlvbiAodiwgYWN0aW9uKSB7XG4gICAgcmV0dXJuIGNvbmRpdGlvbih2LCBhY3Rpb24pID8gaWZUcnVlKHYsIGFjdGlvbikgOiBpZkZhbHNlKHYsIGFjdGlvbik7XG4gIH07XG59O1xuXG4vKipcbiAqIEZsb3dcbiAqIENvbXBvc2Ugb3RoZXIgdHJhbnNmb3JtZXJzIHRvIHJ1biBsaW5lYXJpbHlcbiAqIGZsb3cobWluKDIwKSwgbWF4KDQwKSlcbiAqIEBwYXJhbSAgey4uLmZ1bmN0aW9uc30gdHJhbnNmb3JtZXJzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xudmFyIGZsb3cgPSBleHBvcnRzLmZsb3cgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB0cmFuc2Zvcm1lcnMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB0cmFuc2Zvcm1lcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoYWNjKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgdiA9IGFjYztcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0uYXBwbHkodHJhbnNmb3JtZXJzLCBbdl0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG5cbi8qKlxuICogSW50ZXJwb2xhdGUgZnJvbSBzZXQgb2YgdmFsdWVzIHRvIGFub3RoZXJcbiAqIEBwYXJhbSAge0FycmF5fSBpbnB1dCBhcnJheVxuICogQHBhcmFtICB7QXJyYXl9IG91dHB1dFxuICogQHBhcmFtICB7RnVuY3Rpb259IHJhbmdlRWFzaW5nXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xudmFyIGludGVycG9sYXRlID0gZXhwb3J0cy5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIChpbnB1dCwgb3V0cHV0LCByYW5nZUVhc2luZykge1xuICB2YXIgcmFuZ2VMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIHZhciBmaW5hbEluZGV4ID0gcmFuZ2VMZW5ndGggLSAxO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHYgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgdmFyIGkgPSAxO1xuXG4gICAgLy8gRmluZCBpbmRleCBvZiByYW5nZSBzdGFydFxuICAgIGZvciAoOyBpIDwgcmFuZ2VMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlucHV0W2ldID4gdiB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcm9ncmVzc0luUmFuZ2UgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGlucHV0W2kgLSAxXSwgaW5wdXRbaV0sIHYpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gcmFuZ2VFYXNpbmcgPyByYW5nZUVhc2luZ1tpIC0gMV0ocHJvZ3Jlc3NJblJhbmdlKSA6IHByb2dyZXNzSW5SYW5nZTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShvdXRwdXRbaSAtIDFdLCBvdXRwdXRbaV0sIGVhc2VkUHJvZ3Jlc3MpO1xuICB9O1xufTtcblxudmFyIHN1YnRyYWN0ID0gZXhwb3J0cy5zdWJ0cmFjdCA9IGZ1bmN0aW9uIChvcmlnaW4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYgLSBvcmlnaW47XG4gIH07XG59O1xudmFyIGFkZCA9IGV4cG9ydHMuYWRkID0gZnVuY3Rpb24gKG9yaWdpbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdiArIG9yaWdpbjtcbiAgfTtcbn07XG52YXIgZGl2aWRlID0gZXhwb3J0cy5kaXZpZGUgPSBmdW5jdGlvbiAob3JpZ2luKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2IC8gb3JpZ2luO1xuICB9O1xufTtcbnZhciBtdWx0aXBseSA9IGV4cG9ydHMubXVsdGlwbHkgPSBmdW5jdGlvbiAob3JpZ2luKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2ICogb3JpZ2luO1xuICB9O1xufTtcblxudmFyIGdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcgPSBleHBvcnRzLmdlbmVyYXRlTm9uSW50ZXJncmF0ZWRTcHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhbHRlckRpc3BsYWNlbWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbm9vcDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChjb25zdGFudCwgb3JpZ2luKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICB2YXIgZGlzcGxhY2VtZW50ID0gb3JpZ2luIC0gdjtcbiAgICAgIHZhciBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudCA9IC1jb25zdGFudCAqICgwIC0gYWx0ZXJEaXNwbGFjZW1lbnQoTWF0aC5hYnMoZGlzcGxhY2VtZW50KSkpO1xuICAgICAgcmV0dXJuIGRpc3BsYWNlbWVudCA8PSAwID8gb3JpZ2luICsgc3ByaW5nTW9kaWZpZWREaXNwbGFjZW1lbnQgOiBvcmlnaW4gLSBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudDtcbiAgICB9O1xuICB9O1xufTtcblxudmFyIHNwcmluZyA9IGV4cG9ydHMuc3ByaW5nID0gZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZygpO1xudmFyIG5vbmxpbmVhclNwcmluZyA9IGV4cG9ydHMubm9ubGluZWFyU3ByaW5nID0gZ2VuZXJhdGVOb25JbnRlcmdyYXRlZFNwcmluZyhNYXRoLnNxcnQpO1xuXG52YXIgd3JhcCA9IGV4cG9ydHMud3JhcCA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgcmFuZ2VTaXplID0gbWF4IC0gbWluO1xuICAgIHJldHVybiAoKHYgLSBtaW4pICUgcmFuZ2VTaXplICsgcmFuZ2VTaXplKSAlIHJhbmdlU2l6ZSArIG1pbjtcbiAgfTtcbn07XG5cbnZhciBzbW9vdGggPSBleHBvcnRzLnNtb290aCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiA1MDtcblxuICB2YXIgcHJldmlvdXNWYWx1ZSA9IDA7XG4gIHZhciBoYXNTbW9vdGhlZCA9IGZhbHNlO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSBoYXNTbW9vdGhlZCA/IHByZXZpb3VzVmFsdWUgOiB2O1xuICAgIHZhciBuZXdWYWx1ZSA9ICgwLCBfY2FsYy5zbW9vdGgpKGN1cnJlbnRWYWx1ZSwgcHJldmlvdXNWYWx1ZSwgKDAsIF9mcmFtZXN5bmMudGltZVNpbmNlTGFzdEZyYW1lKSgpLCBzdHJlbmd0aCk7XG4gICAgcHJldmlvdXNWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgIGhhc1Ntb290aGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gbmV3VmFsdWU7XG4gIH07XG59O1xuXG52YXIgc3RlcHMgPSBleHBvcnRzLnN0ZXBzID0gZnVuY3Rpb24gKHN0ZXBzLCBtaW4sIG1heCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKG1pbiwgbWF4LCB2KTtcbiAgICByZXR1cm4gKDAsIF9jYWxjLnN0ZXBQcm9ncmVzcykoc3RlcHMsIHByb2dyZXNzKTtcbiAgfTtcbn07XG5cbnZhciB0cmFuc2Zvcm1DaGlsZFZhbHVlcyA9IGV4cG9ydHMudHJhbnNmb3JtQ2hpbGRWYWx1ZXMgPSBmdW5jdGlvbiAoY2hpbGRUcmFuc2Zvcm1lcnMpIHtcbiAgdmFyIG11dGFibGVTdGF0ZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdikge1xuICAgICAgdmFyIGNoaWxkVHJhbnNmb3JtZXIgPSBjaGlsZFRyYW5zZm9ybWVyc1trZXldO1xuICAgICAgaWYgKGNoaWxkVHJhbnNmb3JtZXIpIHtcbiAgICAgICAgbXV0YWJsZVN0YXRlW2tleV0gPSBjaGlsZFRyYW5zZm9ybWVyKHZba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG11dGFibGVTdGF0ZTtcbiAgfTtcbn07XG5cbi8vIFVuaXQgdHJhbnNmb3JtZXJzXG52YXIgcGVyY2VudCA9IGV4cG9ydHMucGVyY2VudCA9IGFwcGVuZFVuaXQoJyUnKTtcbnZhciBkZWdyZWVzID0gZXhwb3J0cy5kZWdyZWVzID0gYXBwZW5kVW5pdCgnZGVnJyk7XG52YXIgcHggPSBleHBvcnRzLnB4ID0gYXBwZW5kVW5pdCgncHgnKTtcblxudmFyIHJnYlVuaXQgPSBleHBvcnRzLnJnYlVuaXQgPSBmbG93KGNsYW1wKDAsIDI1NSksIE1hdGgucm91bmQpO1xuXG52YXIgcmdiYVRlbXBsYXRlID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIHJlZCA9IF9yZWYucmVkLFxuICAgICAgZ3JlZW4gPSBfcmVmLmdyZWVuLFxuICAgICAgYmx1ZSA9IF9yZWYuYmx1ZSxcbiAgICAgIF9yZWYkYWxwaGEgPSBfcmVmLmFscGhhLFxuICAgICAgYWxwaGEgPSBfcmVmJGFscGhhID09PSB1bmRlZmluZWQgPyAxIDogX3JlZiRhbHBoYTtcbiAgcmV0dXJuICdyZ2JhKCcgKyByZWQgKyAnLCAnICsgZ3JlZW4gKyAnLCAnICsgYmx1ZSArICcsICcgKyBhbHBoYSArICcpJztcbn07XG5cbnZhciByZ2JhID0gZXhwb3J0cy5yZ2JhID0gZmxvdyh0cmFuc2Zvcm1DaGlsZFZhbHVlcyh7XG4gIHJlZDogcmdiVW5pdCxcbiAgZ3JlZW46IHJnYlVuaXQsXG4gIGJsdWU6IHJnYlVuaXQsXG4gIGFscGhhOiBhbHBoYVxufSksIHJnYmFUZW1wbGF0ZSk7XG5cbnZhciBoc2xhVGVtcGxhdGUgPSBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgdmFyIGh1ZSA9IF9yZWYyLmh1ZSxcbiAgICAgIHNhdHVyYXRpb24gPSBfcmVmMi5zYXR1cmF0aW9uLFxuICAgICAgbGlnaHRuZXNzID0gX3JlZjIubGlnaHRuZXNzLFxuICAgICAgX3JlZjIkYWxwaGEgPSBfcmVmMi5hbHBoYSxcbiAgICAgIGFscGhhID0gX3JlZjIkYWxwaGEgPT09IHVuZGVmaW5lZCA/IDEgOiBfcmVmMiRhbHBoYTtcbiAgcmV0dXJuICdoc2xhKCcgKyBodWUgKyAnLCAnICsgc2F0dXJhdGlvbiArICcsICcgKyBsaWdodG5lc3MgKyAnLCAnICsgYWxwaGEgKyAnKSc7XG59O1xuXG52YXIgaHNsYSA9IGV4cG9ydHMuaHNsYSA9IGZsb3codHJhbnNmb3JtQ2hpbGRWYWx1ZXMoe1xuICBodWU6IHBhcnNlRmxvYXQsXG4gIHNhdHVyYXRpb246IHBlcmNlbnQsXG4gIGxpZ2h0bmVzczogcGVyY2VudCxcbiAgYWxwaGE6IGFscGhhXG59KSwgaHNsYVRlbXBsYXRlKTtcblxudmFyIGNvbG9yID0gZXhwb3J0cy5jb2xvciA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICh2Lmhhc093blByb3BlcnR5KCdyZWQnKSkge1xuICAgIHJldHVybiByZ2JhKHYpO1xuICB9IGVsc2UgaWYgKHYuaGFzT3duUHJvcGVydHkoJ2h1ZScpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cbiAgcmV0dXJuIHY7XG59O1xuXG52YXIgYWxwaGEgPSBleHBvcnRzLmFscGhhID0gY2xhbXAoMCwgMSk7XG5cbnZhciBibGVuZCA9IGZ1bmN0aW9uIChmcm9tLCB0bywgdikge1xuICB2YXIgZnJvbUV4cG8gPSBmcm9tICogZnJvbTtcbiAgdmFyIHRvRXhwbyA9IHRvICogdG87XG4gIHJldHVybiBNYXRoLnNxcnQodiAqICh0b0V4cG8gLSBmcm9tRXhwbykgKyBmcm9tRXhwbyk7XG59O1xuLy8gaHR0cDovL2NvZGVwZW4uaW8vb3N1Ymxha2UvcGVuL3hHVlZhTlxudmFyIGJsZW5kQ29sb3IgPSBleHBvcnRzLmJsZW5kQ29sb3IgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgdmFyIGZyb21Db2xvciA9ICgwLCBfdXRpbHMuaXNTdHJpbmcpKGZyb20pID8gKDAsIF9wYXJzZXJzLmNvbG9yKShmcm9tKSA6IGZyb207XG4gIHZhciB0b0NvbG9yID0gKDAsIF91dGlscy5pc1N0cmluZykodG8pID8gKDAsIF9wYXJzZXJzLmNvbG9yKSh0bykgOiB0bztcblxuICB2YXIgYmxlbmRlZCA9IF9leHRlbmRzKHt9LCBmcm9tQ29sb3IpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGZvciAodmFyIGtleSBpbiBibGVuZGVkKSB7XG4gICAgICBibGVuZGVkW2tleV0gPSBibGVuZChmcm9tQ29sb3Jba2V5XSwgdG9Db2xvcltrZXldLCB2KTtcbiAgICB9XG4gICAgYmxlbmRlZC5yZWQgPSBibGVuZChmcm9tQ29sb3IucmVkLCB0b0NvbG9yLnJlZCwgdik7XG4gICAgYmxlbmRlZC5ncmVlbiA9IGJsZW5kKGZyb21Db2xvci5ncmVlbiwgdG9Db2xvci5ncmVlbiwgdik7XG4gICAgYmxlbmRlZC5ibHVlID0gYmxlbmQoZnJvbUNvbG9yLmJsdWUsIHRvQ29sb3IuYmx1ZSwgdik7XG4gICAgYmxlbmRlZC5hbHBoYSA9ICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZnJvbUNvbG9yLmFscGhhLCB0b0NvbG9yLmFscGhhLCB2KTtcbiAgICByZXR1cm4gYmxlbmRlZDtcbiAgfTtcbn07XG5cbi8vIEJlemllciByZXNvbHZlclxuLy8gUmVmYWN0b3JlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9odWdoc2svYmV6aWVyL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4vKipcbiMjIFRoZSBNSVQgTGljZW5zZSAoTUlUKSAjI1xuXG5Db3B5cmlnaHQgKGMpIDIwMTMgSHVnaCBLZW5uZWR5XG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIHJlc29sdmUzID0gZnVuY3Rpb24gKHBvaW50cykge1xuICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgdXQgPSAxIC0gdDtcbiAgICByZXR1cm4gKHBvaW50c1swXSAqIHV0ICsgcG9pbnRzWzFdICogdCkgKiB1dCArIChwb2ludHNbMV0gKiB1dCArIHBvaW50c1syXSAqIHQpICogdDtcbiAgfTtcbn07XG5cbnZhciByZXNvbHZlNCA9IGZ1bmN0aW9uIChwb2ludHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIHV0ID0gMSAtIHQ7XG4gICAgdmFyIGExID0gcG9pbnRzWzFdICogdXQgKyBwb2ludHNbMl0gKiB0O1xuICAgIHJldHVybiAoKHBvaW50c1swXSAqIHV0ICsgcG9pbnRzWzFdICogdCkgKiB1dCArIGExICogdCkgKiB1dCArIChhMSAqIHV0ICsgKHBvaW50c1syXSAqIHV0ICsgcG9pbnRzWzNdICogdCkgKiB0KSAqIHQ7XG4gIH07XG59O1xuXG52YXIgYmV6aWVyID0gZXhwb3J0cy5iZXppZXIgPSBmdW5jdGlvbiAocG9pbnRzKSB7XG4gIHJldHVybiBwb2ludHMubGVuZ3RoID09PSAzID8gcmVzb2x2ZTMocG9pbnRzKSA6IHJlc29sdmU0KHBvaW50cyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRISmhibk5tYjNKdFpYSnpMbXB6SWwwc0ltNWhiV1Z6SWpwYkltNXZiM0FpTENKMklpd2lZWEJ3Wlc1a1ZXNXBkQ0lzSW5WdWFYUWlMQ0poY0hCc2VVOW1abk5sZENJc0ltWnliMjBpTENKMGJ5SXNJbWRsZEU5bVpuTmxkQ0lzSW5OMVluUnlZV04wSWl3aVlYQndiSGxQWm1aelpYUlVieUlzSW1Ga1pDSXNJbU5zWVcxd1RXRjRJaXdpYldGNElpd2lUV0YwYUNJc0ltMXBiaUlzSW1Oc1lXMXdUV2x1SWl3aVkyeGhiWEFpTENKZmJXbHVJaXdpWDIxaGVDSXNJbU52Ym1ScGRHbHZibUZzSWl3aVkyOXVaR2wwYVc5dUlpd2lhV1pVY25WbElpd2lhV1pHWVd4elpTSXNJbUZqZEdsdmJpSXNJbVpzYjNjaUxDSjBjbUZ1YzJadmNtMWxjbk1pTENKdWRXMVVjbUZ1YzJadmNtMWxjbk1pTENKc1pXNW5kR2dpTENKcElpd2lZV05qSWl3aVlYSm5jeUlzSW1sdWRHVnljRzlzWVhSbElpd2lhVzV3ZFhRaUxDSnZkWFJ3ZFhRaUxDSnlZVzVuWlVWaGMybHVaeUlzSW5KaGJtZGxUR1Z1WjNSb0lpd2labWx1WVd4SmJtUmxlQ0lzSW5CeWIyZHlaWE56U1c1U1lXNW5aU0lzSW1WaGMyVmtVSEp2WjNKbGMzTWlMQ0p2Y21sbmFXNGlMQ0prYVhacFpHVWlMQ0p0ZFd4MGFYQnNlU0lzSW1kbGJtVnlZWFJsVG05dVNXNTBaWEpuY21GMFpXUlRjSEpwYm1jaUxDSmhiSFJsY2tScGMzQnNZV05sYldWdWRDSXNJbU52Ym5OMFlXNTBJaXdpWkdsemNHeGhZMlZ0Wlc1MElpd2ljM0J5YVc1blRXOWthV1pwWldSRWFYTndiR0ZqWlcxbGJuUWlMQ0poWW5NaUxDSnpjSEpwYm1jaUxDSnViMjVzYVc1bFlYSlRjSEpwYm1jaUxDSnpjWEowSWl3aWQzSmhjQ0lzSW5KaGJtZGxVMmw2WlNJc0luTnRiMjkwYUNJc0luTjBjbVZ1WjNSb0lpd2ljSEpsZG1sdmRYTldZV3gxWlNJc0ltaGhjMU50YjI5MGFHVmtJaXdpWTNWeWNtVnVkRlpoYkhWbElpd2libVYzVm1Gc2RXVWlMQ0p6ZEdWd2N5SXNJbkJ5YjJkeVpYTnpJaXdpZEhKaGJuTm1iM0p0UTJocGJHUldZV3gxWlhNaUxDSmphR2xzWkZSeVlXNXpabTl5YldWeWN5SXNJbTExZEdGaWJHVlRkR0YwWlNJc0ltdGxlU0lzSW1Ob2FXeGtWSEpoYm5ObWIzSnRaWElpTENKd1pYSmpaVzUwSWl3aVpHVm5jbVZsY3lJc0luQjRJaXdpY21kaVZXNXBkQ0lzSW5KdmRXNWtJaXdpY21kaVlWUmxiWEJzWVhSbElpd2ljbVZrSWl3aVozSmxaVzRpTENKaWJIVmxJaXdpWVd4d2FHRWlMQ0p5WjJKaElpd2lhSE5zWVZSbGJYQnNZWFJsSWl3aWFIVmxJaXdpYzJGMGRYSmhkR2x2YmlJc0lteHBaMmgwYm1WemN5SXNJbWh6YkdFaUxDSndZWEp6WlVac2IyRjBJaXdpWTI5c2IzSWlMQ0pvWVhOUGQyNVFjbTl3WlhKMGVTSXNJbUpzWlc1a0lpd2labkp2YlVWNGNHOGlMQ0owYjBWNGNHOGlMQ0ppYkdWdVpFTnZiRzl5SWl3aVpuSnZiVU52Ykc5eUlpd2lkRzlEYjJ4dmNpSXNJbUpzWlc1a1pXUWlMQ0p5WlhOdmJIWmxNeUlzSW5CdmFXNTBjeUlzSW5RaUxDSjFkQ0lzSW5KbGMyOXNkbVUwSWl3aVlURWlMQ0ppWlhwcFpYSWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3UVVGQlFUczdRVUZEUVRzN1FVRkRRVHM3UVVGRFFUczdRVUZGUVN4SlFVRk5RU3hQUVVGUExGVkJRVU5ETEVOQlFVUTdRVUZCUVN4VFFVRlBRU3hEUVVGUU8wRkJRVUVzUTBGQllqczdRVUZGUVRzN096czdPenRCUVU5UExFbEJRVTFETEd0RFFVRmhMRlZCUVVORExFbEJRVVE3UVVGQlFTeFRRVUZWTEZWQlFVTkdMRU5CUVVRN1FVRkJRU3huUWtGQlZVRXNRMEZCVml4SFFVRmpSU3hKUVVGa08wRkJRVUVzUjBGQlZqdEJRVUZCTEVOQlFXNUNPenRCUVVWUU96czdPenM3T3p0QlFWRlBMRWxCUVUxRExHOURRVUZqTEZWQlFVTkRMRWxCUVVRc1JVRkJUME1zUlVGQlVDeEZRVUZqTzBGQlEzWkRMRTFCUVUxRExGbEJRVmxETEZOQlFWTklMRWxCUVZRc1EwRkJiRUk3UVVGRFFTeE5RVUZOU1N4blFrRkJaMEpETEVsQlFVbEtMRVZCUVVvc1EwRkJkRUk3UVVGRFFTeFRRVUZQTEZWQlFVTk1MRU5CUVVRN1FVRkJRU3hYUVVGUFVTeGpRVUZqUml4VlFVRlZUaXhEUVVGV0xFTkJRV1FzUTBGQlVEdEJRVUZCTEVkQlFWQTdRVUZEUkN4RFFVcE5PenRCUVUxUU96czdPenM3TzBGQlQwOHNTVUZCVFZVc09FSkJRVmNzVlVGQlEwTXNSMEZCUkR0QlFVRkJMRk5CUVZNc1ZVRkJRMWdzUTBGQlJEdEJRVUZCTEZkQlFVOVpMRXRCUVV0RExFZEJRVXdzUTBGQlUySXNRMEZCVkN4RlFVRlpWeXhIUVVGYUxFTkJRVkE3UVVGQlFTeEhRVUZVTzBGQlFVRXNRMEZCYWtJN1FVRkRRU3hKUVVGTlJ5dzRRa0ZCVnl4VlFVRkRSQ3hIUVVGRU8wRkJRVUVzVTBGQlV5eFZRVUZEWWl4RFFVRkVPMEZCUVVFc1YwRkJUMWtzUzBGQlMwUXNSMEZCVEN4RFFVRlRXQ3hEUVVGVUxFVkJRVmxoTEVkQlFWb3NRMEZCVUR0QlFVRkJMRWRCUVZRN1FVRkJRU3hEUVVGcVFqdEJRVU5CTEVsQlFVMUZMSGRDUVVGUkxGVkJRVU5HTEVkQlFVUXNSVUZCVFVZc1IwRkJUaXhGUVVGak8wRkJRMnBETEUxQlFVMUxMRTlCUVU5R0xGTkJRVk5FTEVkQlFWUXNRMEZCWWp0QlFVTkJMRTFCUVUxSkxFOUJRVTlRTEZOQlFWTkRMRWRCUVZRc1EwRkJZanRCUVVOQkxGTkJRVThzVlVGQlExZ3NRMEZCUkR0QlFVRkJMRmRCUVU5blFpeExRVUZMUXl4TFFVRkxha0lzUTBGQlRDeERRVUZNTEVOQlFWQTdRVUZCUVN4SFFVRlFPMEZCUTBRc1EwRktUVHM3UVVGTlFTeEpRVUZOYTBJc2IwTkJRV01zVlVGQlEwTXNVMEZCUkN4RlFVRlpReXhOUVVGYU8wRkJRVUVzVFVGQmIwSkRMRTlCUVhCQ0xIVkZRVUU0UW5SQ0xFbEJRVGxDTzBGQlFVRXNVMEZCZFVNc1ZVRkJRME1zUTBGQlJDeEZRVUZKYzBJc1RVRkJTaXhGUVVGbE8wRkJReTlGTEZkQlFVOUlMRlZCUVZWdVFpeERRVUZXTEVWQlFXRnpRaXhOUVVGaUxFbEJRWFZDUml4UFFVRlBjRUlzUTBGQlVDeEZRVUZWYzBJc1RVRkJWaXhEUVVGMlFpeEhRVUV5UTBRc1VVRkJVWEpDTEVOQlFWSXNSVUZCVjNOQ0xFMUJRVmdzUTBGQmJFUTdRVUZEUkN4SFFVWXdRanRCUVVGQkxFTkJRWEJDT3p0QlFVbFFPenM3T3pzN08wRkJUMDhzU1VGQlRVTXNjMEpCUVU4c1dVRkJjVUk3UVVGQlFTeHZRMEZCYWtKRExGbEJRV2xDTzBGQlFXcENRU3huUWtGQmFVSTdRVUZCUVRzN1FVRkRka01zVFVGQlRVTXNhMEpCUVd0Q1JDeGhRVUZoUlN4TlFVRnlRenRCUVVOQkxFMUJRVWxETEVsQlFVa3NRMEZCVWpzN1FVRkZRU3hUUVVGUExGVkJRVU5ETEVkQlFVUXNSVUZCYTBJN1FVRkJRU3gxUTBGQlZFTXNTVUZCVXp0QlFVRlVRU3hWUVVGVE8wRkJRVUU3TzBGQlEzWkNMRkZCUVVrM1FpeEpRVUZKTkVJc1IwRkJVanRCUVVOQkxGTkJRVXRFTEVsQlFVa3NRMEZCVkN4RlFVRlpRU3hKUVVGSlJpeGxRVUZvUWl4RlFVRnBRMFVzUjBGQmFrTXNSVUZCYzBNN1FVRkRjRU16UWl4VlFVRkpkMElzWVVGQllVY3NRMEZCWWl4MVFrRkJaMEl6UWl4RFFVRm9RaXhUUVVGelFqWkNMRWxCUVhSQ0xFVkJRVW83UVVGRFJEczdRVUZGUkN4WFFVRlBOMElzUTBGQlVEdEJRVU5FTEVkQlVFUTdRVUZSUkN4RFFWcE5PenRCUVdOUU96czdPenM3TzBGQlQwOHNTVUZCVFRoQ0xHOURRVUZqTEZWQlFVTkRMRXRCUVVRc1JVRkJVVU1zVFVGQlVpeEZRVUZuUWtNc1YwRkJhRUlzUlVGQlowTTdRVUZEZWtRc1RVRkJUVU1zWTBGQlkwZ3NUVUZCVFV3c1RVRkJNVUk3UVVGRFFTeE5RVUZOVXl4aFFVRmhSQ3hqUVVGakxFTkJRV3BET3p0QlFVVkJMRk5CUVU4c1ZVRkJRMnhETEVOQlFVUXNSVUZCVHp0QlFVTmFPMEZCUTBFc1VVRkJTVUVzUzBGQlN5dENMRTFCUVUwc1EwRkJUaXhEUVVGVUxFVkJRVzFDTzBGQlEycENMR0ZCUVU5RExFOUJRVThzUTBGQlVDeERRVUZRTzBGQlEwUTdPMEZCUlVRN1FVRkRRU3hSUVVGSmFFTXNTMEZCU3l0Q0xFMUJRVTFKTEZWQlFVNHNRMEZCVkN4RlFVRTBRanRCUVVNeFFpeGhRVUZQU0N4UFFVRlBSeXhWUVVGUUxFTkJRVkE3UVVGRFJEczdRVUZGUkN4UlFVRkpVaXhKUVVGSkxFTkJRVkk3TzBGQlJVRTdRVUZEUVN4WFFVRlBRU3hKUVVGSlR5eFhRVUZZTEVWQlFYZENVQ3hIUVVGNFFpeEZRVUUyUWp0QlFVTXpRaXhWUVVGSlNTeE5RVUZOU2l4RFFVRk9MRWxCUVZjelFpeERRVUZZTEVsQlFXZENNa0lzVFVGQlRWRXNWVUZCTVVJc1JVRkJjME03UVVGRGNFTTdRVUZEUkR0QlFVTkdPenRCUVVWRUxGRkJRVTFETEd0Q1FVRnJRaXhuUTBGQmNVSk1MRTFCUVUxS0xFbEJRVWtzUTBGQlZpeERRVUZ5UWl4RlFVRnRRMGtzVFVGQlRVb3NRMEZCVGl4RFFVRnVReXhGUVVFMlF6TkNMRU5CUVRkRExFTkJRWGhDTzBGQlEwRXNVVUZCVFhGRExHZENRVUZwUWtvc1YwRkJSQ3hIUVVGblFrRXNXVUZCV1U0c1NVRkJTU3hEUVVGb1FpeEZRVUZ0UWxNc1pVRkJia0lzUTBGQmFFSXNSMEZCYzBSQkxHVkJRVFZGTzBGQlEwRXNWMEZCVHl4blEwRkJjVUpLTEU5QlFVOU1MRWxCUVVrc1EwRkJXQ3hEUVVGeVFpeEZRVUZ2UTBzc1QwRkJUMHdzUTBGQlVDeERRVUZ3UXl4RlFVRXJRMVVzWVVGQkwwTXNRMEZCVUR0QlFVTkVMRWRCZGtKRU8wRkJkMEpFTEVOQk5VSk5PenRCUVRoQ1FTeEpRVUZOT1VJc09FSkJRVmNzVlVGQlF5dENMRTFCUVVRN1FVRkJRU3hUUVVGWkxGVkJRVU4wUXl4RFFVRkVPMEZCUVVFc1YwRkJUMEVzU1VGQlNYTkRMRTFCUVZnN1FVRkJRU3hIUVVGYU8wRkJRVUVzUTBGQmFrSTdRVUZEUVN4SlFVRk5OMElzYjBKQlFVMHNWVUZCUXpaQ0xFMUJRVVE3UVVGQlFTeFRRVUZaTEZWQlFVTjBReXhEUVVGRU8wRkJRVUVzVjBGQlQwRXNTVUZCU1hORExFMUJRVmc3UVVGQlFTeEhRVUZhTzBGQlFVRXNRMEZCV2p0QlFVTkJMRWxCUVUxRExEQkNRVUZUTEZWQlFVTkVMRTFCUVVRN1FVRkJRU3hUUVVGWkxGVkJRVU4wUXl4RFFVRkVPMEZCUVVFc1YwRkJUMEVzU1VGQlNYTkRMRTFCUVZnN1FVRkJRU3hIUVVGYU8wRkJRVUVzUTBGQlpqdEJRVU5CTEVsQlFVMUZMRGhDUVVGWExGVkJRVU5HTEUxQlFVUTdRVUZCUVN4VFFVRlpMRlZCUVVOMFF5eERRVUZFTzBGQlFVRXNWMEZCVDBFc1NVRkJTWE5ETEUxQlFWZzdRVUZCUVN4SFFVRmFPMEZCUVVFc1EwRkJha0k3TzBGQlJVRXNTVUZCVFVjc2MwVkJRU3RDTzBGQlFVRXNUVUZCUTBNc2FVSkJRVVFzZFVWQlFYRkNNME1zU1VGQmNrSTdRVUZCUVN4VFFVRTRRaXhWUVVGRE5FTXNVVUZCUkN4RlFVRlhUQ3hOUVVGWU8wRkJRVUVzVjBGQmMwSXNWVUZCUTNSRExFTkJRVVFzUlVGQlR6dEJRVU55Unl4VlFVRk5ORU1zWlVGQlpVNHNVMEZCVTNSRExFTkJRVGxDTzBGQlEwRXNWVUZCVFRaRExEWkNRVUUyUWl4RFFVRkZSaXhSUVVGR0xFbEJRV01zU1VGQlNVUXNhMEpCUVd0Q09VSXNTMEZCUzJ0RExFZEJRVXdzUTBGQlUwWXNXVUZCVkN4RFFVRnNRaXhEUVVGc1FpeERRVUZ1UXp0QlFVTkJMR0ZCUVZGQkxHZENRVUZuUWl4RFFVRnFRaXhIUVVGelFrNHNVMEZCVTA4c01FSkJRUzlDTEVkQlFUUkVVQ3hUUVVGVFR5d3dRa0ZCTlVVN1FVRkRSQ3hMUVVwNVJUdEJRVUZCTEVkQlFUbENPMEZCUVVFc1EwRkJja003TzBGQlRVRXNTVUZCVFVVc01FSkJRVk5PTERoQ1FVRm1PMEZCUTBFc1NVRkJUVThzTkVOQlFXdENVQ3cyUWtGQk5rSTNRaXhMUVVGTGNVTXNTVUZCYkVNc1EwRkJlRUk3TzBGQlJVRXNTVUZCVFVNc2MwSkJRVThzVlVGQlEzSkRMRWRCUVVRc1JVRkJUVVlzUjBGQlRqdEJRVUZCTEZOQlFXTXNWVUZCUTFnc1EwRkJSQ3hGUVVGUE8wRkJRM1pETEZGQlFVMXRSQ3haUVVGWmVFTXNUVUZCVFVVc1IwRkJlRUk3UVVGRFFTeFhRVUZQTEVOQlFVTXNRMEZCUTJJc1NVRkJTV0VzUjBGQlRDeEpRVUZaYzBNc1UwRkJXaXhIUVVGM1FrRXNVMEZCZWtJc1NVRkJjME5CTEZOQlFYUkRMRWRCUVd0RWRFTXNSMEZCZWtRN1FVRkRSQ3hIUVVodFFqdEJRVUZCTEVOQlFXSTdPMEZCUzBFc1NVRkJUWFZETERCQ1FVRlRMRmxCUVcxQ08wRkJRVUVzVFVGQmJFSkRMRkZCUVd0Q0xIVkZRVUZRTEVWQlFVODdPMEZCUTNaRExFMUJRVWxETEdkQ1FVRm5RaXhEUVVGd1FqdEJRVU5CTEUxQlFVbERMR05CUVdNc1MwRkJiRUk3TzBGQlJVRXNVMEZCVHl4VlFVRkRka1FzUTBGQlJDeEZRVUZQTzBGQlExb3NVVUZCVFhkRUxHVkJRV2RDUkN4WFFVRkVMRWRCUVdkQ1JDeGhRVUZvUWl4SFFVRm5RM1JFTEVOQlFYSkVPMEZCUTBFc1VVRkJUWGxFTEZkQlFWY3NhMEpCUVdORUxGbEJRV1FzUlVGQk5FSkdMR0ZCUVRWQ0xFVkJRVEpETEc5RFFVRXpReXhGUVVGcFJVUXNVVUZCYWtVc1EwRkJha0k3UVVGRFFVTXNiMEpCUVdkQ1J5eFJRVUZvUWp0QlFVTkJSaXhyUWtGQll5eEpRVUZrTzBGQlEwRXNWMEZCVDBVc1VVRkJVRHRCUVVORUxFZEJUa1E3UVVGUFJDeERRVmhOT3p0QlFXRkJMRWxCUVUxRExIZENRVUZSTEZWQlFVTkJMRXRCUVVRc1JVRkJVVGRETEVkQlFWSXNSVUZCWVVZc1IwRkJZanRCUVVGQkxGTkJRWEZDTEZWQlFVTllMRU5CUVVRc1JVRkJUenRCUVVNdlF5eFJRVUZOTWtRc1YwRkJWeXhuUTBGQmNVSTVReXhIUVVGeVFpeEZRVUV3UWtZc1IwRkJNVUlzUlVGQkswSllMRU5CUVM5Q0xFTkJRV3BDTzBGQlEwRXNWMEZCVHl4M1FrRkJZVEJFTEV0QlFXSXNSVUZCYjBKRExGRkJRWEJDTEVOQlFWQTdRVUZEUkN4SFFVaHZRanRCUVVGQkxFTkJRV1E3TzBGQlMwRXNTVUZCVFVNc2MwUkJRWFZDTEZWQlFVTkRMR2xDUVVGRUxFVkJRWFZDTzBGQlEzcEVMRTFCUVUxRExHVkJRV1VzUlVGQmNrSTdRVUZEUVN4VFFVRlBMRlZCUVVNNVJDeERRVUZFTEVWQlFVODdRVUZEV2l4VFFVRkxMRWxCUVVrclJDeEhRVUZVTEVsQlFXZENMMFFzUTBGQmFFSXNSVUZCYlVJN1FVRkRha0lzVlVGQlRXZEZMRzFDUVVGdFFrZ3NhMEpCUVd0Q1JTeEhRVUZzUWl4RFFVRjZRanRCUVVOQkxGVkJRVWxETEdkQ1FVRktMRVZCUVhOQ08wRkJRM0JDUml4eFFrRkJZVU1zUjBGQllpeEpRVUZ2UWtNc2FVSkJRV2xDYUVVc1JVRkJSU3RFTEVkQlFVWXNRMEZCYWtJc1EwRkJjRUk3UVVGRFJEdEJRVU5HT3p0QlFVVkVMRmRCUVU5RUxGbEJRVkE3UVVGRFJDeEhRVlJFTzBGQlZVUXNRMEZhVFRzN1FVRmpVRHRCUVVOUExFbEJRVTFITERSQ1FVRlZhRVVzVjBGQlZ5eEhRVUZZTEVOQlFXaENPMEZCUTBFc1NVRkJUV2xGTERSQ1FVRlZha1VzVjBGQlZ5eExRVUZZTEVOQlFXaENPMEZCUTBFc1NVRkJUV3RGTEd0Q1FVRkxiRVVzVjBGQlZ5eEpRVUZZTEVOQlFWZzdPMEZCUlVFc1NVRkJUVzFGTERSQ1FVRlZOME1zUzBGRGNrSlNMRTFCUVUwc1EwRkJUaXhGUVVGVExFZEJRVlFzUTBGRWNVSXNSVUZGY2tKSUxFdEJRVXQ1UkN4TFFVWm5RaXhEUVVGb1FqczdRVUZMVUN4SlFVRk5ReXhsUVVGbE8wRkJRVUVzVFVGQlIwTXNSMEZCU0N4UlFVRkhRU3hIUVVGSU8wRkJRVUVzVFVGQlVVTXNTMEZCVWl4UlFVRlJRU3hMUVVGU08wRkJRVUVzVFVGQlpVTXNTVUZCWml4UlFVRmxRU3hKUVVGbU8wRkJRVUVzZDBKQlFYRkNReXhMUVVGeVFqdEJRVUZCTEUxQlFYRkNRU3hMUVVGeVFpdzRRa0ZCTmtJc1EwRkJOMEk3UVVGQlFTeHRRa0ZEV0Vnc1IwRkVWeXhWUVVOSVF5eExRVVJITEZWQlEwOURMRWxCUkZBc1ZVRkRaMEpETEV0QlJHaENPMEZCUVVFc1EwRkJja0k3TzBGQlIwOHNTVUZCVFVNc2MwSkJRVTl3UkN4TFFVTnNRbkZETEhGQ1FVRnhRanRCUVVOdVFsY3NUMEZCUzBnc1QwRkVZenRCUVVWdVFra3NVMEZCVDBvc1QwRkdXVHRCUVVkdVFrc3NVVUZCVFV3c1QwRklZVHRCUVVsdVFrMDdRVUZLYlVJc1EwRkJja0lzUTBGRWEwSXNSVUZQYkVKS0xGbEJVR3RDTEVOQlFXSTdPMEZCVlZBc1NVRkJUVTBzWlVGQlpUdEJRVUZCTEUxQlFVZERMRWRCUVVnc1UwRkJSMEVzUjBGQlNEdEJRVUZCTEUxQlFWRkRMRlZCUVZJc1UwRkJVVUVzVlVGQlVqdEJRVUZCTEUxQlFXOUNReXhUUVVGd1FpeFRRVUZ2UWtFc1UwRkJjRUk3UVVGQlFTd3dRa0ZCSzBKTUxFdEJRUzlDTzBGQlFVRXNUVUZCSzBKQkxFdEJRUzlDTEN0Q1FVRjFReXhEUVVGMlF6dEJRVUZCTEcxQ1FVTllSeXhIUVVSWExGVkJRMGhETEZWQlJFY3NWVUZEV1VNc1UwRkVXaXhWUVVNd1Frd3NTMEZFTVVJN1FVRkJRU3hEUVVGeVFqczdRVUZIVHl4SlFVRk5UU3h6UWtGQlQzcEVMRXRCUTJ4Q2NVTXNjVUpCUVhGQ08wRkJRMjVDYVVJc1QwRkJTMGtzVlVGRVl6dEJRVVZ1UWtnc1kwRkJXV0lzVDBGR1R6dEJRVWR1UW1Nc1lVRkJWMlFzVDBGSVVUdEJRVWx1UWxNN1FVRktiVUlzUTBGQmNrSXNRMEZFYTBJc1JVRlBiRUpGTEZsQlVHdENMRU5CUVdJN08wRkJWVUVzU1VGQlRVMHNkMEpCUVZFc1ZVRkJRMnhHTEVOQlFVUXNSVUZCVHp0QlFVTXhRaXhOUVVGSlFTeEZRVUZGYlVZc1kwRkJSaXhEUVVGcFFpeExRVUZxUWl4RFFVRktMRVZCUVRaQ08wRkJRek5DTEZkQlFVOVNMRXRCUVVzelJTeERRVUZNTEVOQlFWQTdRVUZEUkN4SFFVWkVMRTFCUlU4c1NVRkJTVUVzUlVGQlJXMUdMR05CUVVZc1EwRkJhVUlzUzBGQmFrSXNRMEZCU2l4RlFVRTJRanRCUVVOc1F5eFhRVUZQU0N4TFFVRkxhRVlzUTBGQlRDeERRVUZRTzBGQlEwUTdRVUZEUkN4VFFVRlBRU3hEUVVGUU8wRkJRMFFzUTBGUVRUczdRVUZUUVN4SlFVRk5NRVVzZDBKQlFWRXpSQ3hOUVVGTkxFTkJRVTRzUlVGQlV5eERRVUZVTEVOQlFXUTdPMEZCUlZBc1NVRkJUWEZGTEZGQlFWRXNWVUZCUTJoR0xFbEJRVVFzUlVGQlQwTXNSVUZCVUN4RlFVRlhUQ3hEUVVGWUxFVkJRV2xDTzBGQlF6ZENMRTFCUVUxeFJpeFhRVUZYYWtZc1QwRkJUMEVzU1VGQmVFSTdRVUZEUVN4TlFVRk5hMFlzVTBGQlUycEdMRXRCUVV0QkxFVkJRWEJDTzBGQlEwRXNVMEZCVDA4c1MwRkJTM0ZETEVsQlFVd3NRMEZCVldwRUxFdEJRVXR6Uml4VFFVRlRSQ3hSUVVGa0xFbEJRVEJDUVN4UlFVRndReXhEUVVGUU8wRkJRMFFzUTBGS1JEdEJRVXRCTzBGQlEwOHNTVUZCVFVVc2EwTkJRV0VzVlVGQlEyNUdMRWxCUVVRc1JVRkJUME1zUlVGQlVDeEZRVUZqTzBGQlEzUkRMRTFCUVUxdFJpeFpRVUZaTEhGQ1FVRlRjRVlzU1VGQlZDeEpRVUZwUWl4dlFrRkJWMEVzU1VGQldDeERRVUZxUWl4SFFVRnZRMEVzU1VGQmRFUTdRVUZEUVN4TlFVRk5jVVlzVlVGQlZTeHhRa0ZCVTNCR0xFVkJRVlFzU1VGQlpTeHZRa0ZCVjBFc1JVRkJXQ3hEUVVGbUxFZEJRU3RDUVN4RlFVRXZRenM3UVVGRlFTeE5RVUZOY1VZc2RVSkJRV1ZHTEZOQlFXWXNRMEZCVGpzN1FVRkZRU3hUUVVGUExGVkJRVU40Uml4RFFVRkVMRVZCUVU4N1FVRkRXaXhUUVVGTExFbEJRVWtyUkN4SFFVRlVMRWxCUVdkQ01rSXNUMEZCYUVJc1JVRkJlVUk3UVVGRGRrSkJMR05CUVZFelFpeEhRVUZTTEVsQlFXVnhRaXhOUVVGTlNTeFZRVUZWZWtJc1IwRkJWaXhEUVVGT0xFVkJRWE5DTUVJc1VVRkJVVEZDTEVkQlFWSXNRMEZCZEVJc1JVRkJiME12UkN4RFFVRndReXhEUVVGbU8wRkJRMFE3UVVGRFJEQkdMRmxCUVZGdVFpeEhRVUZTTEVkQlFXTmhMRTFCUVUxSkxGVkJRVlZxUWl4SFFVRm9RaXhGUVVGeFFtdENMRkZCUVZGc1FpeEhRVUUzUWl4RlFVRnJRM1pGTEVOQlFXeERMRU5CUVdRN1FVRkRRVEJHTEZsQlFWRnNRaXhMUVVGU0xFZEJRV2RDV1N4TlFVRk5TU3hWUVVGVmFFSXNTMEZCYUVJc1JVRkJkVUpwUWl4UlFVRlJha0lzUzBGQkwwSXNSVUZCYzBONFJTeERRVUYwUXl4RFFVRm9RanRCUVVOQk1FWXNXVUZCVVdwQ0xFbEJRVklzUjBGQlpWY3NUVUZCVFVrc1ZVRkJWV1lzU1VGQmFFSXNSVUZCYzBKblFpeFJRVUZSYUVJc1NVRkJPVUlzUlVGQmIwTjZSU3hEUVVGd1F5eERRVUZtTzBGQlEwRXdSaXhaUVVGUmFFSXNTMEZCVWl4SFFVRm5RaXhuUTBGQmNVSmpMRlZCUVZWa0xFdEJRUzlDTEVWQlFYTkRaU3hSUVVGUlppeExRVUU1UXl4RlFVRnhSREZGTEVOQlFYSkVMRU5CUVdoQ08wRkJRMEVzVjBGQlR6QkdMRTlCUVZBN1FVRkRSQ3hIUVZSRU8wRkJWVVFzUTBGb1FrMDdPMEZCYTBKUU8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGMVFrRXNTVUZCVFVNc1YwRkJWeXhWUVVGRFF5eE5RVUZFTzBGQlFVRXNVMEZCV1N4VlFVRkRReXhEUVVGRUxFVkJRVTg3UVVGRGJFTXNVVUZCVFVNc1MwRkJTeXhKUVVGSlJDeERRVUZtTzBGQlEwRXNWMEZCVHl4RFFVRkRSQ3hQUVVGUExFTkJRVkFzU1VGQldVVXNSVUZCV2l4SFFVRnBRa1lzVDBGQlR5eERRVUZRTEVsQlFWbERMRU5CUVRsQ0xFbEJRVzFEUXl4RlFVRnVReXhIUVVGM1F5eERRVUZEUml4UFFVRlBMRU5CUVZBc1NVRkJXVVVzUlVGQldpeEhRVUZwUWtZc1QwRkJUeXhEUVVGUUxFbEJRVmxETEVOQlFUbENMRWxCUVcxRFFTeERRVUZzUmp0QlFVTkVMRWRCU0dkQ08wRkJRVUVzUTBGQmFrSTdPMEZCUzBFc1NVRkJUVVVzVjBGQlZ5eFZRVUZEU0N4TlFVRkVPMEZCUVVFc1UwRkJXU3hWUVVGRFF5eERRVUZFTEVWQlFVODdRVUZEYkVNc1VVRkJUVU1zUzBGQlN5eEpRVUZKUkN4RFFVRm1PMEZCUTBFc1VVRkJUVWNzUzBGQlMwb3NUMEZCVHl4RFFVRlFMRWxCUVZsRkxFVkJRVm9zUjBGQmFVSkdMRTlCUVU4c1EwRkJVQ3hKUVVGWlF5eERRVUY0UXp0QlFVTkJMRmRCUVU4c1EwRkJReXhEUVVGRFJDeFBRVUZQTEVOQlFWQXNTVUZCV1VVc1JVRkJXaXhIUVVGcFFrWXNUMEZCVHl4RFFVRlFMRWxCUVZsRExFTkJRVGxDTEVsQlFXMURReXhGUVVGdVF5eEhRVUYzUTBVc1MwRkJTMGdzUTBGQk9VTXNTVUZCYlVSRExFVkJRVzVFTEVkQlFYZEVMRU5CUVVORkxFdEJRVXRHTEVWQlFVd3NSMEZCVlN4RFFVRkRSaXhQUVVGUExFTkJRVkFzU1VGQldVVXNSVUZCV2l4SFFVRnBRa1lzVDBGQlR5eERRVUZRTEVsQlFWbERMRU5CUVRsQ0xFbEJRVzFEUVN4RFFVRTVReXhKUVVGdFJFRXNRMEZCYkVnN1FVRkRSQ3hIUVVwblFqdEJRVUZCTEVOQlFXcENPenRCUVUxUExFbEJRVTFKTERCQ1FVRlRMRlZCUVVOTUxFMUJRVVE3UVVGQlFTeFRRVU51UWtFc1QwRkJUMnhGTEUxQlFWQXNTMEZCYTBJc1EwRkJia0lzUjBGQmQwSnBSU3hUUVVGVFF5eE5RVUZVTEVOQlFYaENMRWRCUVRKRFJ5eFRRVUZUU0N4TlFVRlVMRU5CUkhaQ08wRkJRVUVzUTBGQlppSXNJbVpwYkdVaU9pSjBjbUZ1YzJadmNtMWxjbk11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlN3Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTXNJSE4wWlhCUWNtOW5jbVZ6Y3l3Z2MyMXZiM1JvSUdGeklHTmhiR05UYlc5dmRHaHBibWNnZlNCbWNtOXRJQ2N1TDJOaGJHTW5PMXh1YVcxd2IzSjBJSHNnYVhOVGRISnBibWNnZlNCbWNtOXRJQ2N1TDNWMGFXeHpKenRjYm1sdGNHOXlkQ0I3SUdOdmJHOXlJR0Z6SUhCaGNuTmxRMjlzYjNJZ2ZTQm1jbTl0SUNjdUwzQmhjbk5sY25Nbk8xeHVhVzF3YjNKMElIc2dkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxJSDBnWm5KdmJTQW5MaTR2Wm5KaGJXVnplVzVqSnp0Y2JseHVZMjl1YzNRZ2JtOXZjQ0E5SUNoMktTQTlQaUIyTzF4dVhHNHZLaXBjYmlBcUlFRndjR1Z1WkNCVmJtbDBYRzRnS2lCQklHWjFibU4wYVc5dUlIUm9ZWFFnZDJsc2JDQmhjSEJsYm1SY2JpQXFJR0Z3Y0dWdVpGVnVhWFFvSjNCNEp5d2dNakFwSUMwK0lDY3lNSEI0SjF4dUlDb2dRSEJoY21GdElDQjdjM1J5YVc1bmZTQjFibWwwS1Z4dUlDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZWeHVJQ292WEc1bGVIQnZjblFnWTI5dWMzUWdZWEJ3Wlc1a1ZXNXBkQ0E5SUNoMWJtbDBLU0E5UGlBb2Rpa2dQVDRnWUNSN2RuMGtlM1Z1YVhSOVlEdGNibHh1THlvcVhHNGdLaUJCY0hCc2VTQnZabVp6WlhSY2JpQXFJRUVnWm5WdVkzUnBiMjRnZEdoaGRDd2daMmwyWlc0Z1lTQjJZV3gxWlN3Z2QybHNiQ0JuWlhRZ2RHaGxJRzltWm5ObGRDQm1jbTl0SUdCbWNtOXRZRnh1SUNvZ1lXNWtJR0Z3Y0d4NUlHbDBJSFJ2SUdCMGIyQmNiaUFxSUVCd1lYSmhiU0FnZTI1MWJXSmxjbjBnWm5KdmJWeHVJQ29nUUhCaGNtRnRJQ0I3Ym5WdFltVnlmU0IwYjF4dUlDb2dRSEpsZEhWeWJpQjdablZ1WTNScGIyNTlYRzRnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JoY0hCc2VVOW1abk5sZENBOUlDaG1jbTl0TENCMGJ5a2dQVDRnZTF4dUlDQmpiMjV6ZENCblpYUlBabVp6WlhRZ1BTQnpkV0owY21GamRDaG1jbTl0S1R0Y2JpQWdZMjl1YzNRZ1lYQndiSGxQWm1aelpYUlVieUE5SUdGa1pDaDBieWs3WEc0Z0lISmxkSFZ5YmlBb2Rpa2dQVDRnWVhCd2JIbFBabVp6WlhSVWJ5aG5aWFJQWm1aelpYUW9kaWtwTzF4dWZUdGNibHh1THlvcVhHNGdLaUJEYkdGdGNDQjJZV3gxWlNCaVpYUjNaV1Z1WEc0Z0tpQkRjbVZoZEdWeklHRWdablZ1WTNScGIyNGdkR2hoZENCM2FXeHNJSEpsYzNSeWFXTjBJR0VnWjJsMlpXNGdkbUZzZFdVZ1ltVjBkMlZsYmlCZ2JXbHVZQ0JoYm1RZ1lHMWhlR0JjYmlBcUlFQndZWEpoYlNBZ2UyNTFiV0psY24wZ2JXbHVYRzRnS2lCQWNHRnlZVzBnSUh0dWRXMWlaWEo5SUcxaGVGeHVJQ29nUUhKbGRIVnliaUI3Ym5WdFltVnlmVnh1SUNvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJ4aGJYQk5ZWGdnUFNBb2JXRjRLU0E5UGlBb2Rpa2dQVDRnVFdGMGFDNXRhVzRvZGl3Z2JXRjRLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQmpiR0Z0Y0UxcGJpQTlJQ2h0YVc0cElEMCtJQ2gyS1NBOVBpQk5ZWFJvTG0xaGVDaDJMQ0J0YVc0cE8xeHVaWGh3YjNKMElHTnZibk4wSUdOc1lXMXdJRDBnS0cxcGJpd2diV0Y0S1NBOVBpQjdYRzRnSUdOdmJuTjBJRjl0YVc0Z1BTQmpiR0Z0Y0UxcGJpaHRhVzRwTzF4dUlDQmpiMjV6ZENCZmJXRjRJRDBnWTJ4aGJYQk5ZWGdvYldGNEtUdGNiaUFnY21WMGRYSnVJQ2gyS1NBOVBpQmZiV2x1S0Y5dFlYZ29kaWtwTzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnZibVJwZEdsdmJtRnNJRDBnS0dOdmJtUnBkR2x2Yml3Z2FXWlVjblZsTENCcFprWmhiSE5sSUQwZ2JtOXZjQ2tnUFQ0Z0tIWXNJR0ZqZEdsdmJpa2dQVDRnZTF4dUlDQnlaWFIxY200Z1kyOXVaR2wwYVc5dUtIWXNJR0ZqZEdsdmJpa2dQeUJwWmxSeWRXVW9kaXdnWVdOMGFXOXVLU0E2SUdsbVJtRnNjMlVvZGl3Z1lXTjBhVzl1S1R0Y2JuMDdYRzVjYmk4cUtseHVJQ29nUm14dmQxeHVJQ29nUTI5dGNHOXpaU0J2ZEdobGNpQjBjbUZ1YzJadmNtMWxjbk1nZEc4Z2NuVnVJR3hwYm1WaGNtbHNlVnh1SUNvZ1pteHZkeWh0YVc0b01qQXBMQ0J0WVhnb05EQXBLVnh1SUNvZ1FIQmhjbUZ0SUNCN0xpNHVablZ1WTNScGIyNXpmU0IwY21GdWMyWnZjbTFsY25OY2JpQXFJRUJ5WlhSMWNtNGdlMloxYm1OMGFXOXVmVnh1SUNvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWm14dmR5QTlJQ2d1TGk1MGNtRnVjMlp2Y20xbGNuTXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2JuVnRWSEpoYm5ObWIzSnRaWEp6SUQwZ2RISmhibk5tYjNKdFpYSnpMbXhsYm1kMGFEdGNiaUFnYkdWMElHa2dQU0F3TzF4dVhHNGdJSEpsZEhWeWJpQW9ZV05qTENBdUxpNWhjbWR6S1NBOVBpQjdYRzRnSUNBZ2JHVjBJSFlnUFNCaFkyTTdYRzRnSUNBZ1ptOXlJQ2hwSUQwZ01Ec2dhU0E4SUc1MWJWUnlZVzV6Wm05eWJXVnljenNnYVNzcktTQjdYRzRnSUNBZ0lDQjJJRDBnZEhKaGJuTm1iM0p0WlhKelcybGRLSFlzSUM0dUxtRnlaM01wTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjJPMXh1SUNCOU8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCSmJuUmxjbkJ2YkdGMFpTQm1jbTl0SUhObGRDQnZaaUIyWVd4MVpYTWdkRzhnWVc1dmRHaGxjbHh1SUNvZ1FIQmhjbUZ0SUNCN1FYSnlZWGw5SUdsdWNIVjBJR0Z5Y21GNVhHNGdLaUJBY0dGeVlXMGdJSHRCY25KaGVYMGdiM1YwY0hWMFhHNGdLaUJBY0dGeVlXMGdJSHRHZFc1amRHbHZibjBnY21GdVoyVkZZWE5wYm1kY2JpQXFJRUJ5WlhSMWNtNGdlMFoxYm1OMGFXOXVmVnh1SUNvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVc1MFpYSndiMnhoZEdVZ1BTQW9hVzV3ZFhRc0lHOTFkSEIxZEN3Z2NtRnVaMlZGWVhOcGJtY3BJRDArSUh0Y2JpQWdZMjl1YzNRZ2NtRnVaMlZNWlc1bmRHZ2dQU0JwYm5CMWRDNXNaVzVuZEdnN1hHNGdJR052Ym5OMElHWnBibUZzU1c1a1pYZ2dQU0J5WVc1blpVeGxibWQwYUNBdElERTdYRzVjYmlBZ2NtVjBkWEp1SUNoMktTQTlQaUI3WEc0Z0lDQWdMeThnU1dZZ2RtRnNkV1VnYjNWMGMybGtaU0J0YVc1cGJYVnRJSEpoYm1kbExDQnhkV2xqYTJ4NUlISmxkSFZ5Ymx4dUlDQWdJR2xtSUNoMklEdzlJR2x1Y0hWMFd6QmRLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdiM1YwY0hWMFd6QmRPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRWxtSUhaaGJIVmxJRzkxZEhOcFpHVWdiV0Y0YVcxMWJTQnlZVzVuWlN3Z2NYVnBZMnRzZVNCeVpYUjFjbTVjYmlBZ0lDQnBaaUFvZGlBK1BTQnBibkIxZEZ0bWFXNWhiRWx1WkdWNFhTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHOTFkSEIxZEZ0bWFXNWhiRWx1WkdWNFhUdGNiaUFnSUNCOVhHNWNiaUFnSUNCc1pYUWdhU0E5SURFN1hHNWNiaUFnSUNBdkx5QkdhVzVrSUdsdVpHVjRJRzltSUhKaGJtZGxJSE4wWVhKMFhHNGdJQ0FnWm05eUlDZzdJR2tnUENCeVlXNW5aVXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNCcFppQW9hVzV3ZFhSYmFWMGdQaUIySUh4OElHa2dQVDA5SUdacGJtRnNTVzVrWlhncElIdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTI5dWMzUWdjSEp2WjNKbGMzTkpibEpoYm1kbElEMGdaMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvYVc1d2RYUmJhU0F0SURGZExDQnBibkIxZEZ0cFhTd2dkaWs3WEc0Z0lDQWdZMjl1YzNRZ1pXRnpaV1JRY205bmNtVnpjeUE5SUNoeVlXNW5aVVZoYzJsdVp5a2dQeUJ5WVc1blpVVmhjMmx1WjF0cElDMGdNVjBvY0hKdlozSmxjM05KYmxKaGJtZGxLU0E2SUhCeWIyZHlaWE56U1c1U1lXNW5aVHRjYmlBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9iM1YwY0hWMFcya2dMU0F4WFN3Z2IzVjBjSFYwVzJsZExDQmxZWE5sWkZCeWIyZHlaWE56S1R0Y2JpQWdmVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCemRXSjBjbUZqZENBOUlDaHZjbWxuYVc0cElEMCtJQ2gyS1NBOVBpQjJJQzBnYjNKcFoybHVPMXh1Wlhod2IzSjBJR052Ym5OMElHRmtaQ0E5SUNodmNtbG5hVzRwSUQwK0lDaDJLU0E5UGlCMklDc2diM0pwWjJsdU8xeHVaWGh3YjNKMElHTnZibk4wSUdScGRtbGtaU0E5SUNodmNtbG5hVzRwSUQwK0lDaDJLU0E5UGlCMklDOGdiM0pwWjJsdU8xeHVaWGh3YjNKMElHTnZibk4wSUcxMWJIUnBjR3g1SUQwZ0tHOXlhV2RwYmlrZ1BUNGdLSFlwSUQwK0lIWWdLaUJ2Y21sbmFXNDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQm5aVzVsY21GMFpVNXZia2x1ZEdWeVozSmhkR1ZrVTNCeWFXNW5JRDBnS0dGc2RHVnlSR2x6Y0d4aFkyVnRaVzUwSUQwZ2JtOXZjQ2tnUFQ0Z0tHTnZibk4wWVc1MExDQnZjbWxuYVc0cElEMCtJQ2gyS1NBOVBpQjdYRzRnSUdOdmJuTjBJR1JwYzNCc1lXTmxiV1Z1ZENBOUlHOXlhV2RwYmlBdElIWTdYRzRnSUdOdmJuTjBJSE53Y21sdVowMXZaR2xtYVdWa1JHbHpjR3hoWTJWdFpXNTBJRDBnTFNCamIyNXpkR0Z1ZENBcUlDZ3dJQzBnWVd4MFpYSkVhWE53YkdGalpXMWxiblFvVFdGMGFDNWhZbk1vWkdsemNHeGhZMlZ0Wlc1MEtTa3BPMXh1SUNCeVpYUjFjbTRnS0dScGMzQnNZV05sYldWdWRDQThQU0F3S1NBL0lHOXlhV2RwYmlBcklITndjbWx1WjAxdlpHbG1hV1ZrUkdsemNHeGhZMlZ0Wlc1MElEb2diM0pwWjJsdUlDMGdjM0J5YVc1blRXOWthV1pwWldSRWFYTndiR0ZqWlcxbGJuUTdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCeWFXNW5JRDBnWjJWdVpYSmhkR1ZPYjI1SmJuUmxjbWR5WVhSbFpGTndjbWx1WnlncE8xeHVaWGh3YjNKMElHTnZibk4wSUc1dmJteHBibVZoY2xOd2NtbHVaeUE5SUdkbGJtVnlZWFJsVG05dVNXNTBaWEpuY21GMFpXUlRjSEpwYm1jb1RXRjBhQzV6Y1hKMEtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElIZHlZWEFnUFNBb2JXbHVMQ0J0WVhncElEMCtJQ2gyS1NBOVBpQjdYRzRnSUdOdmJuTjBJSEpoYm1kbFUybDZaU0E5SUcxaGVDQXRJRzFwYmp0Y2JpQWdjbVYwZFhKdUlDZ29kaUF0SUcxcGJpa2dKU0J5WVc1blpWTnBlbVVnS3lCeVlXNW5aVk5wZW1VcElDVWdjbUZ1WjJWVGFYcGxJQ3NnYldsdU8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSE50YjI5MGFDQTlJQ2h6ZEhKbGJtZDBhQ0E5SURVd0tTQTlQaUI3WEc0Z0lHeGxkQ0J3Y21WMmFXOTFjMVpoYkhWbElEMGdNRHRjYmlBZ2JHVjBJR2hoYzFOdGIyOTBhR1ZrSUQwZ1ptRnNjMlU3WEc1Y2JpQWdjbVYwZFhKdUlDaDJLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdZM1Z5Y21WdWRGWmhiSFZsSUQwZ0tHaGhjMU50YjI5MGFHVmtLU0EvSUhCeVpYWnBiM1Z6Vm1Gc2RXVWdPaUIyTzF4dUlDQWdJR052Ym5OMElHNWxkMVpoYkhWbElEMGdZMkZzWTFOdGIyOTBhR2x1WnloamRYSnlaVzUwVm1Gc2RXVXNJSEJ5WlhacGIzVnpWbUZzZFdVc0lIUnBiV1ZUYVc1alpVeGhjM1JHY21GdFpTZ3BMQ0J6ZEhKbGJtZDBhQ2s3WEc0Z0lDQWdjSEpsZG1sdmRYTldZV3gxWlNBOUlHNWxkMVpoYkhWbE8xeHVJQ0FnSUdoaGMxTnRiMjkwYUdWa0lEMGdkSEoxWlR0Y2JpQWdJQ0J5WlhSMWNtNGdibVYzVm1Gc2RXVTdYRzRnSUgwN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjM1JsY0hNZ1BTQW9jM1JsY0hNc0lHMXBiaXdnYldGNEtTQTlQaUFvZGlrZ1BUNGdlMXh1SUNCamIyNXpkQ0J3Y205bmNtVnpjeUE5SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtHMXBiaXdnYldGNExDQjJLVHRjYmlBZ2NtVjBkWEp1SUhOMFpYQlFjbTluY21WemN5aHpkR1Z3Y3l3Z2NISnZaM0psYzNNcE8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSFJ5WVc1elptOXliVU5vYVd4a1ZtRnNkV1Z6SUQwZ0tHTm9hV3hrVkhKaGJuTm1iM0p0WlhKektTQTlQaUI3WEc0Z0lHTnZibk4wSUcxMWRHRmliR1ZUZEdGMFpTQTlJSHQ5TzF4dUlDQnlaWFIxY200Z0tIWXBJRDArSUh0Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkaWtnZTF4dUlDQWdJQ0FnWTI5dWMzUWdZMmhwYkdSVWNtRnVjMlp2Y20xbGNpQTlJR05vYVd4a1ZISmhibk5tYjNKdFpYSnpXMnRsZVYwN1hHNGdJQ0FnSUNCcFppQW9ZMmhwYkdSVWNtRnVjMlp2Y20xbGNpa2dlMXh1SUNBZ0lDQWdJQ0J0ZFhSaFlteGxVM1JoZEdWYmEyVjVYU0E5SUdOb2FXeGtWSEpoYm5ObWIzSnRaWElvZGx0clpYbGRLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2JYVjBZV0pzWlZOMFlYUmxPMXh1SUNCOU8xeHVmVHRjYmx4dUx5OGdWVzVwZENCMGNtRnVjMlp2Y20xbGNuTmNibVY0Y0c5eWRDQmpiMjV6ZENCd1pYSmpaVzUwSUQwZ1lYQndaVzVrVlc1cGRDZ25KU2NwTzF4dVpYaHdiM0owSUdOdmJuTjBJR1JsWjNKbFpYTWdQU0JoY0hCbGJtUlZibWwwS0Nka1pXY25LVHRjYm1WNGNHOXlkQ0JqYjI1emRDQndlQ0E5SUdGd2NHVnVaRlZ1YVhRb0ozQjRKeWs3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J5WjJKVmJtbDBJRDBnWm14dmR5aGNiaUFnWTJ4aGJYQW9NQ3dnTWpVMUtTeGNiaUFnVFdGMGFDNXliM1Z1WkZ4dUtUdGNibHh1WTI5dWMzUWdjbWRpWVZSbGJYQnNZWFJsSUQwZ0tIc2djbVZrTENCbmNtVmxiaXdnWW14MVpTd2dZV3h3YUdFZ1BTQXhJSDBwSUQwK0lGeHVJQ0JnY21kaVlTZ2tlM0psWkgwc0lDUjdaM0psWlc1OUxDQWtlMkpzZFdWOUxDQWtlMkZzY0doaGZTbGdPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjbWRpWVNBOUlHWnNiM2NvWEc0Z0lIUnlZVzV6Wm05eWJVTm9hV3hrVm1Gc2RXVnpLSHRjYmlBZ0lDQnlaV1E2SUhKbllsVnVhWFFzWEc0Z0lDQWdaM0psWlc0NklISm5ZbFZ1YVhRc1hHNGdJQ0FnWW14MVpUb2djbWRpVlc1cGRDeGNiaUFnSUNCaGJIQm9ZVnh1SUNCOUtTeGNiaUFnY21kaVlWUmxiWEJzWVhSbFhHNHBPMXh1WEc1amIyNXpkQ0JvYzJ4aFZHVnRjR3hoZEdVZ1BTQW9leUJvZFdVc0lITmhkSFZ5WVhScGIyNHNJR3hwWjJoMGJtVnpjeXdnWVd4d2FHRWdQU0F4SUgwcElEMCtJRnh1SUNCZ2FITnNZU2drZTJoMVpYMHNJQ1I3YzJGMGRYSmhkR2x2Ym4wc0lDUjdiR2xuYUhSdVpYTnpmU3dnSkh0aGJIQm9ZWDBwWUR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdoemJHRWdQU0JtYkc5M0tGeHVJQ0IwY21GdWMyWnZjbTFEYUdsc1pGWmhiSFZsY3loN1hHNGdJQ0FnYUhWbE9pQndZWEp6WlVac2IyRjBMRnh1SUNBZ0lITmhkSFZ5WVhScGIyNDZJSEJsY21ObGJuUXNYRzRnSUNBZ2JHbG5hSFJ1WlhOek9pQndaWEpqWlc1MExGeHVJQ0FnSUdGc2NHaGhYRzRnSUgwcExGeHVJQ0JvYzJ4aFZHVnRjR3hoZEdWY2JpazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpiMnh2Y2lBOUlDaDJLU0E5UGlCN1hHNGdJR2xtSUNoMkxtaGhjMDkzYmxCeWIzQmxjblI1S0NkeVpXUW5LU2tnZTF4dUlDQWdJSEpsZEhWeWJpQnlaMkpoS0hZcE8xeHVJQ0I5SUdWc2MyVWdhV1lnS0hZdWFHRnpUM2R1VUhKdmNHVnlkSGtvSjJoMVpTY3BLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHaHpiR0VvZGlrN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUhZN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdZV3h3YUdFZ1BTQmpiR0Z0Y0Nnd0xDQXhLVHRjYmx4dVkyOXVjM1FnWW14bGJtUWdQU0FvWm5KdmJTd2dkRzhzSUhZcElEMCtJSHRjYmlBZ1kyOXVjM1FnWm5KdmJVVjRjRzhnUFNCbWNtOXRJQ29nWm5KdmJUdGNiaUFnWTI5dWMzUWdkRzlGZUhCdklEMGdkRzhnS2lCMGJ6dGNiaUFnY21WMGRYSnVJRTFoZEdndWMzRnlkQ2gySUNvZ0tIUnZSWGh3YnlBdElHWnliMjFGZUhCdktTQXJJR1p5YjIxRmVIQnZLVHRjYm4wN1hHNHZMeUJvZEhSd09pOHZZMjlrWlhCbGJpNXBieTl2YzNWaWJHRnJaUzl3Wlc0dmVFZFdWbUZPWEc1bGVIQnZjblFnWTI5dWMzUWdZbXhsYm1SRGIyeHZjaUE5SUNobWNtOXRMQ0IwYnlrZ1BUNGdlMXh1SUNCamIyNXpkQ0JtY205dFEyOXNiM0lnUFNCcGMxTjBjbWx1WnlobWNtOXRLU0EvSUhCaGNuTmxRMjlzYjNJb1puSnZiU2tnT2lCbWNtOXRPMXh1SUNCamIyNXpkQ0IwYjBOdmJHOXlJRDBnYVhOVGRISnBibWNvZEc4cElEOGdjR0Z5YzJWRGIyeHZjaWgwYnlrNklIUnZPMXh1WEc0Z0lHTnZibk4wSUdKc1pXNWtaV1FnUFNCN0lDNHVMbVp5YjIxRGIyeHZjaUI5TzF4dVhHNGdJSEpsZEhWeWJpQW9kaWtnUFQ0Z2UxeHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJpYkdWdVpHVmtLU0I3WEc0Z0lDQWdJQ0JpYkdWdVpHVmtXMnRsZVYwZ1BTQmliR1Z1WkNobWNtOXRRMjlzYjNKYmEyVjVYU3dnZEc5RGIyeHZjbHRyWlhsZExDQjJLVHRjYmlBZ0lDQjlYRzRnSUNBZ1lteGxibVJsWkM1eVpXUWdQU0JpYkdWdVpDaG1jbTl0UTI5c2IzSXVjbVZrTENCMGIwTnZiRzl5TG5KbFpDd2dkaWs3WEc0Z0lDQWdZbXhsYm1SbFpDNW5jbVZsYmlBOUlHSnNaVzVrS0daeWIyMURiMnh2Y2k1bmNtVmxiaXdnZEc5RGIyeHZjaTVuY21WbGJpd2dkaWs3WEc0Z0lDQWdZbXhsYm1SbFpDNWliSFZsSUQwZ1lteGxibVFvWm5KdmJVTnZiRzl5TG1Kc2RXVXNJSFJ2UTI5c2IzSXVZbXgxWlN3Z2RpazdYRzRnSUNBZ1lteGxibVJsWkM1aGJIQm9ZU0E5SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektHWnliMjFEYjJ4dmNpNWhiSEJvWVN3Z2RHOURiMnh2Y2k1aGJIQm9ZU3dnZGlrN1hHNGdJQ0FnY21WMGRYSnVJR0pzWlc1a1pXUTdYRzRnSUgwN1hHNTlPMXh1WEc0dkx5QkNaWHBwWlhJZ2NtVnpiMngyWlhKY2JpOHZJRkpsWm1GamRHOXlaV1FnWm5KdmJTQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZhSFZuYUhOckwySmxlbWxsY2k5aWJHOWlMMjFoYzNSbGNpOXBibVJsZUM1cWMxeHVMeW9xWEc0akl5QlVhR1VnVFVsVUlFeHBZMlZ1YzJVZ0tFMUpWQ2tnSXlOY2JseHVRMjl3ZVhKcFoyaDBJQ2hqS1NBeU1ERXpJRWgxWjJnZ1MyVnVibVZrZVZ4dVhHNVFaWEp0YVhOemFXOXVJR2x6SUdobGNtVmllU0JuY21GdWRHVmtMQ0JtY21WbElHOW1JR05vWVhKblpTd2dkRzhnWVc1NUlIQmxjbk52YmlCdlluUmhhVzVwYm1jZ1lTQmpiM0I1WEc1dlppQjBhR2x6SUhOdlpuUjNZWEpsSUdGdVpDQmhjM052WTJsaGRHVmtJR1J2WTNWdFpXNTBZWFJwYjI0Z1ptbHNaWE1nS0hSb1pTQmNJbE52Wm5SM1lYSmxYQ0lwTENCMGJ5QmtaV0ZzWEc1cGJpQjBhR1VnVTI5bWRIZGhjbVVnZDJsMGFHOTFkQ0J5WlhOMGNtbGpkR2x2Yml3Z2FXNWpiSFZrYVc1bklIZHBkR2h2ZFhRZ2JHbHRhWFJoZEdsdmJpQjBhR1VnY21sbmFIUnpYRzUwYnlCMWMyVXNJR052Y0hrc0lHMXZaR2xtZVN3Z2JXVnlaMlVzSUhCMVlteHBjMmdzSUdScGMzUnlhV0oxZEdVc0lITjFZbXhwWTJWdWMyVXNJR0Z1WkM5dmNpQnpaV3hzWEc1amIzQnBaWE1nYjJZZ2RHaGxJRk52Wm5SM1lYSmxMQ0JoYm1RZ2RHOGdjR1Z5YldsMElIQmxjbk52Ym5NZ2RHOGdkMmh2YlNCMGFHVWdVMjltZEhkaGNtVWdhWE5jYm1aMWNtNXBjMmhsWkNCMGJ5QmtieUJ6Ynl3Z2MzVmlhbVZqZENCMGJ5QjBhR1VnWm05c2JHOTNhVzVuSUdOdmJtUnBkR2x2Ym5NNlhHNWNibFJvWlNCaFltOTJaU0JqYjNCNWNtbG5hSFFnYm05MGFXTmxJR0Z1WkNCMGFHbHpJSEJsY20xcGMzTnBiMjRnYm05MGFXTmxJSE5vWVd4c0lHSmxJR2x1WTJ4MVpHVmtJR2x1WEc1aGJHd2dZMjl3YVdWeklHOXlJSE4xWW5OMFlXNTBhV0ZzSUhCdmNuUnBiMjV6SUc5bUlIUm9aU0JUYjJaMGQyRnlaUzVjYmx4dVZFaEZJRk5QUmxSWFFWSkZJRWxUSUZCU1QxWkpSRVZFSUZ3aVFWTWdTVk5jSWl3Z1YwbFVTRTlWVkNCWFFWSlNRVTVVV1NCUFJpQkJUbGtnUzBsT1JDd2dSVmhRVWtWVFV5QlBVbHh1U1UxUVRFbEZSQ3dnU1U1RFRGVkVTVTVISUVKVlZDQk9UMVFnVEVsTlNWUkZSQ0JVVHlCVVNFVWdWMEZTVWtGT1ZFbEZVeUJQUmlCTlJWSkRTRUZPVkVGQ1NVeEpWRmtzWEc1R1NWUk9SVk5USUVaUFVpQkJJRkJCVWxSSlExVk1RVklnVUZWU1VFOVRSU0JCVGtRZ1RrOU9TVTVHVWtsT1IwVk5SVTVVTGlCSlRpQk9UeUJGVmtWT1ZDQlRTRUZNVENCVVNFVmNia0ZWVkVoUFVsTWdUMUlnUTA5UVdWSkpSMGhVSUVoUFRFUkZVbE1nUWtVZ1RFbEJRa3hGSUVaUFVpQkJUbGtnUTB4QlNVMHNJRVJCVFVGSFJWTWdUMUlnVDFSSVJWSmNia3hKUVVKSlRFbFVXU3dnVjBoRlZFaEZVaUJKVGlCQlRpQkJRMVJKVDA0Z1QwWWdRMDlPVkZKQlExUXNJRlJQVWxRZ1QxSWdUMVJJUlZKWFNWTkZMQ0JCVWtsVFNVNUhJRVpTVDAwc1hHNVBWVlFnVDBZZ1QxSWdTVTRnUTA5T1RrVkRWRWxQVGlCWFNWUklJRlJJUlNCVFQwWlVWMEZTUlNCUFVpQlVTRVVnVlZORklFOVNJRTlVU0VWU0lFUkZRVXhKVGtkVElFbE9YRzVVU0VVZ1UwOUdWRmRCVWtVdVhHNGdLaTljYm1OdmJuTjBJSEpsYzI5c2RtVXpJRDBnS0hCdmFXNTBjeWtnUFQ0Z0tIUXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2RYUWdQU0F4SUMwZ2REdGNiaUFnY21WMGRYSnVJQ2h3YjJsdWRITmJNRjBnS2lCMWRDQXJJSEJ2YVc1MGMxc3hYU0FxSUhRcElDb2dkWFFnS3lBb2NHOXBiblJ6V3pGZElDb2dkWFFnS3lCd2IybHVkSE5iTWwwZ0tpQjBLU0FxSUhRN1hHNTlPMXh1WEc1amIyNXpkQ0J5WlhOdmJIWmxOQ0E5SUNod2IybHVkSE1wSUQwK0lDaDBLU0E5UGlCN1hHNGdJR052Ym5OMElIVjBJRDBnTVNBdElIUTdYRzRnSUdOdmJuTjBJR0V4SUQwZ2NHOXBiblJ6V3pGZElDb2dkWFFnS3lCd2IybHVkSE5iTWwwZ0tpQjBPMXh1SUNCeVpYUjFjbTRnS0Nod2IybHVkSE5iTUYwZ0tpQjFkQ0FySUhCdmFXNTBjMXN4WFNBcUlIUXBJQ29nZFhRZ0t5QmhNU0FxSUhRcElDb2dkWFFnS3lBb1lURWdLaUIxZENBcklDaHdiMmx1ZEhOYk1sMGdLaUIxZENBcklIQnZhVzUwYzFzelhTQXFJSFFwSUNvZ2RDa2dLaUIwTzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHSmxlbWxsY2lBOUlDaHdiMmx1ZEhNcElEMCtYRzRnSUNod2IybHVkSE11YkdWdVozUm9JRDA5UFNBektTQS9JSEpsYzI5c2RtVXpLSEJ2YVc1MGN5a2dPaUJ5WlhOdmJIWmxOQ2h3YjJsdWRITXBPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29sb3IgPSBleHBvcnRzLmhzbGEgPSBleHBvcnRzLmhleCA9IGV4cG9ydHMucmdiYSA9IGV4cG9ydHMucmdiVW5pdCA9IGV4cG9ydHMuc2NhbGUgPSBleHBvcnRzLnB4ID0gZXhwb3J0cy5wZXJjZW50ID0gZXhwb3J0cy5kZWdyZWVzID0gZXhwb3J0cy5hbHBoYSA9IGV4cG9ydHMubnVtYmVyID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFZhbHVlIHR5cGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogYWxwaGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGRlZ3JlZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIGhleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogaHNsYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcGVyY2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHJnYlVuaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIHJnYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogc2NhbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF9wYXJzZXJzID0gcmVxdWlyZSgnLi9wYXJzZXJzJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBudW1iZXIgPSBleHBvcnRzLm51bWJlciA9IHtcbiAgdGVzdDogX3V0aWxzLmlzTnVtLFxuICBwYXJzZTogcGFyc2VGbG9hdFxufTtcblxuLy8gVmFsdWUgdHlwZXNcbnZhciBhbHBoYSA9IGV4cG9ydHMuYWxwaGEgPSBfZXh0ZW5kcyh7fSwgbnVtYmVyLCB7XG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5hbHBoYVxufSk7XG5cbnZhciBkZWdyZWVzID0gZXhwb3J0cy5kZWdyZWVzID0gKDAsIF91dGlscy5jcmVhdGVVbml0VHlwZSkoJ2RlZycsIF90cmFuc2Zvcm1lcnMuZGVncmVlcyk7XG52YXIgcGVyY2VudCA9IGV4cG9ydHMucGVyY2VudCA9ICgwLCBfdXRpbHMuY3JlYXRlVW5pdFR5cGUpKCclJywgX3RyYW5zZm9ybWVycy5wZXJjZW50KTtcbnZhciBweCA9IGV4cG9ydHMucHggPSAoMCwgX3V0aWxzLmNyZWF0ZVVuaXRUeXBlKSgncHgnLCBfdHJhbnNmb3JtZXJzLnB4KTtcblxudmFyIHNjYWxlID0gZXhwb3J0cy5zY2FsZSA9IF9leHRlbmRzKHt9LCBudW1iZXIsIHtcbiAgZGVmYXVsdDogMVxufSk7XG5cbnZhciByZ2JVbml0ID0gZXhwb3J0cy5yZ2JVbml0ID0gX2V4dGVuZHMoe30sIG51bWJlciwge1xuICB0cmFuc2Zvcm06IF90cmFuc2Zvcm1lcnMucmdiVW5pdFxufSk7XG5cbnZhciByZ2JhID0gZXhwb3J0cy5yZ2JhID0ge1xuICB0ZXN0OiBfdXRpbHMuaXNSZ2IsXG4gIHBhcnNlOiBfcGFyc2Vycy5yZ2JhLFxuICB0cmFuc2Zvcm06IF90cmFuc2Zvcm1lcnMucmdiYVxufTtcblxudmFyIGhleCA9IGV4cG9ydHMuaGV4ID0gX2V4dGVuZHMoe30sIHJnYmEsIHtcbiAgdGVzdDogX3V0aWxzLmlzSGV4LFxuICBwYXJzZTogX3BhcnNlcnMuaGV4XG59KTtcblxudmFyIGhzbGEgPSBleHBvcnRzLmhzbGEgPSB7XG4gIHRlc3Q6IF91dGlscy5pc0hzbCxcbiAgcGFyc2U6IF9wYXJzZXJzLmhzbGEsXG4gIHRyYW5zZm9ybTogX3RyYW5zZm9ybWVycy5oc2xhXG59O1xuXG52YXIgY29sb3IgPSBleHBvcnRzLmNvbG9yID0ge1xuICBwYXJzZTogX3BhcnNlcnMuY29sb3IsXG4gIHRlc3Q6IF91dGlscy5pc0NvbG9yLFxuICB0cmFuc2Zvcm06IF90cmFuc2Zvcm1lcnMuY29sb3Jcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZG1Gc2RXVXRkSGx3WlhNdWFuTWlYU3dpYm1GdFpYTWlPbHNpYm5WdFltVnlJaXdpZEdWemRDSXNJbkJoY25ObElpd2ljR0Z5YzJWR2JHOWhkQ0lzSW1Gc2NHaGhJaXdpZEhKaGJuTm1iM0p0SWl3aVpHVm5jbVZsY3lJc0luQmxjbU5sYm5RaUxDSndlQ0lzSW5OallXeGxJaXdpWkdWbVlYVnNkQ0lzSW5KbllsVnVhWFFpTENKeVoySmhJaXdpYUdWNElpd2lhSE5zWVNJc0ltTnZiRzl5SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0clVVRkJRVHM3T3pzN096czdPenM3T3pzN08wRkJZVUU3TzBGQlZVRTdPMEZCVFVFN08wRkJVMDhzU1VGQlRVRXNNRUpCUVZNN1FVRkRjRUpETEc5Q1FVUnZRanRCUVVWd1FrTXNVMEZCVDBNN1FVRkdZU3hEUVVGbU96dEJRVXRRTzBGQlEwOHNTVUZCVFVNc2NVTkJRMUpLTEUxQlJGRTdRVUZGV0VzN1FVRkdWeXhGUVVGT096dEJRVXRCTEVsQlFVMURMRFJDUVVGVkxESkNRVUZsTEV0QlFXWXNkMEpCUVdoQ08wRkJRMEVzU1VGQlRVTXNORUpCUVZVc01rSkJRV1VzUjBGQlppeDNRa0ZCYUVJN1FVRkRRU3hKUVVGTlF5eHJRa0ZCU3l3eVFrRkJaU3hKUVVGbUxHMUNRVUZZT3p0QlFVVkJMRWxCUVUxRExIRkRRVU5TVkN4TlFVUlJPMEZCUlZoVkxGZEJRVk03UVVGR1JTeEZRVUZPT3p0QlFVdEJMRWxCUVUxRExIbERRVU5TV0N4TlFVUlJPMEZCUlZoTE8wRkJSbGNzUlVGQlRqczdRVUZMUVN4SlFVRk5UeXh6UWtGQlR6dEJRVU5zUWxnc2IwSkJSR3RDTzBGQlJXeENReXh6UWtGR2EwSTdRVUZIYkVKSE8wRkJTR3RDTEVOQlFXSTdPMEZCVFVFc1NVRkJUVkVzYVVOQlExSkVMRWxCUkZFN1FVRkZXRmdzYjBKQlJsYzdRVUZIV0VNN1FVRklWeXhGUVVGT096dEJRVTFCTEVsQlFVMVpMSE5DUVVGUE8wRkJRMnhDWWl4dlFrRkVhMEk3UVVGRmJFSkRMSE5DUVVaclFqdEJRVWRzUWtjN1FVRklhMElzUTBGQllqczdRVUZOUVN4SlFVRk5WU3gzUWtGQlVUdEJRVU51UW1Jc2RVSkJSRzFDTzBGQlJXNUNSQ3h6UWtGR2JVSTdRVUZIYmtKSk8wRkJTRzFDTEVOQlFXUWlMQ0ptYVd4bElqb2lkbUZzZFdVdGRIbHdaWE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2lwY2JpQXFJRlpoYkhWbElIUjVjR1Z6WEc0Z0tseHVJQ29nWVd4d2FHRmNiaUFxSUdSbFozSmxaWE5jYmlBcUlHaGxlRnh1SUNvZ2FITnNZVnh1SUNvZ2NHVnlZMlZ1ZEZ4dUlDb2djSGhjYmlBcUlISm5ZbFZ1YVhSY2JpQXFJSEpuWWx4dUlDb2djMk5oYkdWY2JpQXFMMXh1YVcxd2IzSjBJSHRjYmlBZ2NtZGlWVzVwZENCaGN5QjBjbUZ1YzJadmNtMVNSMEpWYm1sMExGeHVJQ0J5WjJKaElHRnpJSFJ5WVc1elptOXliVkpuWW1Fc1hHNGdJR0ZzY0doaElHRnpJSFJ5WVc1elptOXliVUZzY0doaExGeHVJQ0JvYzJ4aElHRnpJSFJ5WVc1elptOXliVWh6YkdFc1hHNGdJR052Ykc5eUlHRnpJSFJ5WVc1elptOXliVU52Ykc5eUxGeHVJQ0J3ZUNCaGN5QjBjbUZ1YzJadmNtMVFlQ3hjYmlBZ2NHVnlZMlZ1ZENCaGN5QjBjbUZ1YzJadmNtMVFaWEpqWlc1MExGeHVJQ0JrWldkeVpXVnpJR0Z6SUhSeVlXNXpabTl5YlVSbFozSmxaWE5jYm4wZ1puSnZiU0FuTGk5MGNtRnVjMlp2Y20xbGNuTW5PMXh1YVcxd2IzSjBJSHRjYmlBZ2FHVjRJR0Z6SUhCaGNuTmxTR1Y0TEZ4dUlDQnlaMkpoSUdGeklIQmhjbk5sVW1kaVlTeGNiaUFnYUhOc1lTQmhjeUJ3WVhKelpVaHpiR0VzWEc0Z0lHTnZiRzl5SUdGeklIQmhjbk5sUTI5c2IzSmNibjBnWm5KdmJTQW5MaTl3WVhKelpYSnpKenRjYm1sdGNHOXlkQ0I3WEc0Z0lHTnlaV0YwWlZWdWFYUlVlWEJsTEZ4dUlDQnBjMDUxYlN4Y2JpQWdhWE5TWjJJc1hHNGdJR2x6U0hOc0xGeHVJQ0JwYzBobGVDeGNiaUFnYVhORGIyeHZjbHh1ZlNCbWNtOXRJQ2N1TDNWMGFXeHpKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRzUxYldKbGNpQTlJSHRjYmlBZ2RHVnpkRG9nYVhOT2RXMHNYRzRnSUhCaGNuTmxPaUJ3WVhKelpVWnNiMkYwWEc1OU8xeHVYRzR2THlCV1lXeDFaU0IwZVhCbGMxeHVaWGh3YjNKMElHTnZibk4wSUdGc2NHaGhJRDBnZTF4dUlDQXVMaTV1ZFcxaVpYSXNYRzRnSUhSeVlXNXpabTl5YlRvZ2RISmhibk5tYjNKdFFXeHdhR0ZjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCa1pXZHlaV1Z6SUQwZ1kzSmxZWFJsVlc1cGRGUjVjR1VvSjJSbFp5Y3NJSFJ5WVc1elptOXliVVJsWjNKbFpYTXBPMXh1Wlhod2IzSjBJR052Ym5OMElIQmxjbU5sYm5RZ1BTQmpjbVZoZEdWVmJtbDBWSGx3WlNnbkpTY3NJSFJ5WVc1elptOXliVkJsY21ObGJuUXBPMXh1Wlhod2IzSjBJR052Ym5OMElIQjRJRDBnWTNKbFlYUmxWVzVwZEZSNWNHVW9KM0I0Snl3Z2RISmhibk5tYjNKdFVIZ3BPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjMk5oYkdVZ1BTQjdYRzRnSUM0dUxtNTFiV0psY2l4Y2JpQWdaR1ZtWVhWc2REb2dNVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhKbllsVnVhWFFnUFNCN1hHNGdJQzR1TG01MWJXSmxjaXhjYmlBZ2RISmhibk5tYjNKdE9pQjBjbUZ1YzJadmNtMVNSMEpWYm1sMFhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjbWRpWVNBOUlIdGNiaUFnZEdWemREb2dhWE5TWjJJc1hHNGdJSEJoY25ObE9pQndZWEp6WlZKblltRXNYRzRnSUhSeVlXNXpabTl5YlRvZ2RISmhibk5tYjNKdFVtZGlZVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdobGVDQTlJSHRjYmlBZ0xpNHVjbWRpWVN4Y2JpQWdkR1Z6ZERvZ2FYTklaWGdzWEc0Z0lIQmhjbk5sT2lCd1lYSnpaVWhsZUZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHaHpiR0VnUFNCN1hHNGdJSFJsYzNRNklHbHpTSE5zTEZ4dUlDQndZWEp6WlRvZ2NHRnljMlZJYzJ4aExGeHVJQ0IwY21GdWMyWnZjbTA2SUhSeVlXNXpabTl5YlVoemJHRmNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYjJ4dmNpQTlJSHRjYmlBZ2NHRnljMlU2SUhCaGNuTmxRMjlzYjNJc1hHNGdJSFJsYzNRNklHbHpRMjlzYjNJc1hHNGdJSFJ5WVc1elptOXliVG9nZEhKaGJuTm1iM0p0UTI5c2IzSmNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy92YWx1ZS10eXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG4vKlxuICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcmV0dXJuIFtudW1iZXJdXG4qL1xudmFyIHRvRGVjaW1hbCA9IGZ1bmN0aW9uIChudW0pIHtcbiAgdmFyIHByZWNpc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMjtcblxuICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG5cbnZhciBaRVJPX1BPSU5UID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB6OiAwXG59O1xuXG52YXIgZGlzdGFuY2UxRCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICBcbiAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gIGFyZSBhdCAwLDBcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbnZhciBhbmdsZSA9IGV4cG9ydHMuYW5nbGUgPSBmdW5jdGlvbiAoYSkge1xuICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogWkVST19QT0lOVDtcbiAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xufTtcblxuLypcbiAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xudmFyIGRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBmdW5jdGlvbiAoZGVncmVlcykge1xuICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG59O1xuXG4vKlxuICBEaWxhdGVcbiAgXG4gIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICBcbiAgYSAtLS0tLS0tLS0gYlxuICBcbiAgdG9cbiAgXG4gIGEgLS0tLSBiXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbnZhciBkaWxhdGUgPSBleHBvcnRzLmRpbGF0ZSA9IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICByZXR1cm4gYSArIChiIC0gYSkgKiBkaWxhdGlvbjtcbn07XG5cbi8qXG4gIERpc3RhbmNlXG4gIFxuICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbnZhciBkaXN0YW5jZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBmdW5jdGlvbiAoYSkge1xuICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogWkVST19QT0lOVDtcblxuICAvLyAxRCBkaW1lbnNpb25zXG4gIGlmICgoMCwgX3V0aWxzLmlzTnVtKShhKSkge1xuICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICB2YXIgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgdmFyIHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgIHZhciB6RGVsdGEgPSAoMCwgX3V0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGVsdGEsIDIpICsgTWF0aC5wb3coeURlbHRhLCAyKSArIE1hdGgucG93KHpEZWx0YSwgMikpO1xuICB9XG59O1xuXG4vKlxuICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG52YXIgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZnVuY3Rpb24gKGZyb20sIHRvLCB2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcbn07XG5cbi8qXG4gIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbnZhciBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHByb2dyZXNzKSB7XG4gIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG52YXIgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGZ1bmN0aW9uIChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkge1xuICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gIHJldHVybiB7XG4gICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gIH07XG59O1xuXG4vKlxuICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG52YXIgcmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbn07XG5cbi8qXG4gIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbikge1xuICB2YXIgc21vb3RoaW5nID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuICByZXR1cm4gdG9EZWNpbWFsKG9sZFZhbHVlICsgZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh4cHMpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xufTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xudmFyIHN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gKHN0ZXBzLCBwcm9ncmVzcykge1xuICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgdmFyIHRhcmdldCA9IDEgLSAxIC8gc3RlcHM7XG4gIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlkyRnNZeTVxY3lKZExDSnVZVzFsY3lJNld5SjBiMFJsWTJsdFlXd2lMQ0p1ZFcwaUxDSndjbVZqYVhOcGIyNGlMQ0pOWVhSb0lpd2ljbTkxYm1RaUxDSmFSVkpQWDFCUFNVNVVJaXdpZUNJc0lua2lMQ0o2SWl3aVpHbHpkR0Z1WTJVeFJDSXNJbUVpTENKaUlpd2lZV0p6SWl3aVlXNW5iR1VpTENKeVlXUnBZVzV6Vkc5RVpXZHlaV1Z6SWl3aVlYUmhiaklpTENKa1pXZHlaV1Z6Vkc5U1lXUnBZVzV6SWl3aVpHVm5jbVZsY3lJc0lsQkpJaXdpWkdsc1lYUmxJaXdpWkdsc1lYUnBiMjRpTENKa2FYTjBZVzVqWlNJc0luaEVaV3gwWVNJc0lubEVaV3gwWVNJc0lucEVaV3gwWVNJc0luTnhjblFpTENKblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTSXNJbVp5YjIwaUxDSjBieUlzSW5aaGJIVmxJaXdpWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNaUxDSndjbTluY21WemN5SXNJbkJ2YVc1MFJuSnZiVUZ1WjJ4bFFXNWtSR2x6ZEdGdVkyVWlMQ0p2Y21sbmFXNGlMQ0pqYjNNaUxDSnphVzRpTENKeVlXUnBZVzV6SWl3aWMyMXZiM1JvSWl3aWJtVjNWbUZzZFdVaUxDSnZiR1JXWVd4MVpTSXNJbVIxY21GMGFXOXVJaXdpYzIxdmIzUm9hVzVuSWl3aWJXRjRJaXdpYzNCbFpXUlFaWEpHY21GdFpTSXNJbmh3Y3lJc0ltWnlZVzFsUkhWeVlYUnBiMjRpTENKemNHVmxaRkJsY2xObFkyOXVaQ0lzSW5abGJHOWphWFI1SWl3aWMzUmxjRkJ5YjJkeVpYTnpJaXdpYzNSbGNITWlMQ0p6WldkdFpXNTBJaXdpZEdGeVoyVjBJaXdpY0hKdlozSmxjM05QWmxSaGNtZGxkQ0lzSW0xcGJpSXNJbVpzYjI5eUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCT3p0QlFVVkJPenM3T3pzN08wRkJUMEVzU1VGQlRVRXNXVUZCV1N4VlFVRkRReXhIUVVGRUxFVkJRWGRDTzBGQlFVRXNUVUZCYkVKRExGTkJRV3RDTEhWRlFVRk9MRU5CUVUwN08wRkJRM2hEUVN4MVFrRkJXU3hGUVVGYUxFVkJRV3RDUVN4VFFVRnNRanRCUVVOQkxGTkJRVTlETEV0QlFVdERMRXRCUVV3c1EwRkJWMGdzVFVGQlRVTXNVMEZCYWtJc1NVRkJPRUpCTEZOQlFYSkRPMEZCUTBRc1EwRklSRHM3UVVGTFFTeEpRVUZOUnl4aFFVRmhPMEZCUTJwQ1F5eExRVUZITEVOQlJHTTdRVUZGYWtKRExFdEJRVWNzUTBGR1l6dEJRVWRxUWtNc1MwRkJSenRCUVVoakxFTkJRVzVDT3p0QlFVMUJMRWxCUVUxRExHRkJRV0VzVlVGQlEwTXNRMEZCUkN4RlFVRkpReXhEUVVGS08wRkJRVUVzVTBGQlZWSXNTMEZCUzFNc1IwRkJUQ3hEUVVGVFJpeEpRVUZKUXl4RFFVRmlMRU5CUVZZN1FVRkJRU3hEUVVGdVFqczdRVUZGUVRzN096czdPenM3T3p0QlFWVlBMRWxCUVUxRkxIZENRVUZSTEZWQlFVTklMRU5CUVVRN1FVRkJRU3hOUVVGSlF5eERRVUZLTEhWRlFVRlJUaXhWUVVGU08wRkJRVUVzVTBGQmRVSlRMR2xDUVVGcFFsZ3NTMEZCUzFrc1MwRkJUQ3hEUVVGWFRDeEZRVUZGU2l4RFFVRkdMRWRCUVUxTExFVkJRVVZNTEVOQlFXNUNMRVZCUVhOQ1NTeEZRVUZGU0N4RFFVRkdMRWRCUVUxSkxFVkJRVVZLTEVOQlFUbENMRU5CUVdwQ0xFTkJRWFpDTzBGQlFVRXNRMEZCWkRzN1FVRkZVRHM3T3pzN08wRkJUVThzU1VGQlRWTXNPRU5CUVcxQ0xGVkJRVU5ETEU5QlFVUTdRVUZCUVN4VFFVRmhRU3hWUVVGVlpDeExRVUZMWlN4RlFVRm1MRWRCUVc5Q0xFZEJRV3BETzBGQlFVRXNRMEZCZWtJN08wRkJSVkE3T3pzN096czdPenM3T3pzN096czdPenRCUVd0Q1R5eEpRVUZOUXl3d1FrRkJVeXhWUVVGRFZDeERRVUZFTEVWQlFVbERMRU5CUVVvc1JVRkJUMU1zVVVGQlVEdEJRVUZCTEZOQlFXOUNWaXhKUVVGTExFTkJRVU5ETEVsQlFVbEVMRU5CUVV3c1NVRkJWVlVzVVVGQmJrTTdRVUZCUVN4RFFVRm1PenRCUVVWUU96czdPenM3T3pzN1FVRlRUeXhKUVVGTlF5dzRRa0ZCVnl4VlFVRkRXQ3hEUVVGRUxFVkJRWFZDTzBGQlFVRXNUVUZCYmtKRExFTkJRVzFDTEhWRlFVRm1UaXhWUVVGbE96dEJRVU0zUXp0QlFVTkJMRTFCUVVrc2EwSkJRVTFMTEVOQlFVNHNRMEZCU2l4RlFVRmpPMEZCUTFvc1YwRkJUMFFzVjBGQlYwTXNRMEZCV0N4RlFVRmpReXhEUVVGa0xFTkJRVkE3TzBGQlJVWTdRVUZEUXl4SFFVcEVMRTFCU1U4N1FVRkRUQ3hSUVVGTlZ5eFRRVUZUWWl4WFFVRlhReXhGUVVGRlNpeERRVUZpTEVWQlFXZENTeXhGUVVGRlRDeERRVUZzUWl4RFFVRm1PMEZCUTBFc1VVRkJUV2xDTEZOQlFWTmtMRmRCUVZkRExFVkJRVVZJTEVOQlFXSXNSVUZCWjBKSkxFVkJRVVZLTEVOQlFXeENMRU5CUVdZN1FVRkRRU3hSUVVGTmFVSXNVMEZCVlN4clFrRkJUV1FzUlVGQlJVWXNRMEZCVWl4RFFVRkVMRWRCUVdWRExGZEJRVmRETEVWQlFVVkdMRU5CUVdJc1JVRkJaMEpITEVWQlFVVklMRU5CUVd4Q0xFTkJRV1lzUjBGQmMwTXNRMEZCY2tRN08wRkJSVUVzVjBGQlQwd3NTMEZCUzNOQ0xFbEJRVXdzUTBGQlZTeFRRVUZEU0N4TlFVRkVMRVZCUVZjc1EwRkJXQ3hoUVVGcFFrTXNUVUZCYWtJc1JVRkJNa0lzUTBGQk0wSXNZVUZCYVVORExFMUJRV3BETEVWQlFUSkRMRU5CUVRORExFTkJRVllzUTBGQlVEdEJRVU5FTzBGQlEwWXNRMEZpVFRzN1FVRmxVRHM3T3pzN096czdPenM3TzBGQldVOHNTVUZCVFVVc2MwUkJRWFZDTEZWQlFVTkRMRWxCUVVRc1JVRkJUME1zUlVGQlVDeEZRVUZYUXl4TFFVRllPMEZCUVVFc1UwRkJjVUlzUTBGQlEwRXNVVUZCVVVZc1NVRkJWQ3hMUVVGclFrTXNTMEZCUzBRc1NVRkJka0lzUTBGQmNrSTdRVUZCUVN4RFFVRTNRanM3UVVGRlVEczdPenM3T3pzN096czdRVUZYVHl4SlFVRk5SeXh6UkVGQmRVSXNWVUZCUTBnc1NVRkJSQ3hGUVVGUFF5eEZRVUZRTEVWQlFWZEhMRkZCUVZnN1FVRkJRU3hUUVVGNVFpeERRVUZGUVN4UlFVRkdMRWRCUVdGS0xFbEJRV1FzUjBGQmRVSkpMRmRCUVZkSUxFVkJRV3hETEVkQlFYZERSQ3hKUVVGb1JUdEJRVUZCTEVOQlFUZENPenRCUVVWUU96czdPenM3T3p0QlFWRlBMRWxCUVUxTExHZEZRVUUwUWl4VlFVRkRReXhOUVVGRUxFVkJRVk53UWl4TFFVRlVMRVZCUVdkQ1VTeFJRVUZvUWl4RlFVRTJRanRCUVVOd1JWSXNWVUZCVVVjc2FVSkJRV2xDU0N4TFFVRnFRaXhEUVVGU096dEJRVVZCTEZOQlFVODdRVUZEVEZBc1QwRkJSMlVzVjBGQlYyeENMRXRCUVVzclFpeEhRVUZNTEVOQlFWTnlRaXhMUVVGVUxFTkJRVmdzUjBGQk5rSnZRaXhQUVVGUE0wSXNRMEZFYkVNN1FVRkZURU1zVDBGQlIyTXNWMEZCVjJ4Q0xFdEJRVXRuUXl4SFFVRk1MRU5CUVZOMFFpeExRVUZVTEVOQlFWZ3NSMEZCTmtKdlFpeFBRVUZQTVVJN1FVRkdiRU1zUjBGQlVEdEJRVWxFTEVOQlVFMDdPMEZCVTFBN096czdPenRCUVUxUExFbEJRVTFQTERoRFFVRnRRaXhWUVVGRGMwSXNUMEZCUkR0QlFVRkJMRk5CUVdGQkxGVkJRVlVzUjBGQlZpeEhRVUZuUW1wRExFdEJRVXRsTEVWQlFXeERPMEZCUVVFc1EwRkJla0k3TzBGQlJWQTdPenM3T3pzN08wRkJVVThzU1VGQlRXMUNMREJDUVVGVExGVkJRVU5ETEZGQlFVUXNSVUZCVjBNc1VVRkJXQ3hGUVVGeFFrTXNVVUZCY2tJN1FVRkJRU3hOUVVFclFrTXNVMEZCTDBJc2RVVkJRVEpETEVOQlFUTkRPMEZCUVVFc1UwRkJhVVI2UXl4VlFVRlZkVU1zVjBGQldVTXNXVUZCV1VZc1YwRkJWME1zVVVGQmRrSXNTVUZCYlVOd1F5eExRVUZMZFVNc1IwRkJUQ3hEUVVGVFJDeFRRVUZVTEVWQlFXOUNSQ3hSUVVGd1FpeERRVUY2UkN4RFFVRnFSRHRCUVVGQkxFTkJRV1k3TzBGQlJWQTdPenM3T3p0QlFVMVBMRWxCUVUxSExIZERRVUZuUWl4VlFVRkRReXhIUVVGRUxFVkJRVTFETEdGQlFVNDdRVUZCUVN4VFFVRjVRaXhyUWtGQlRVUXNSMEZCVGl4RFFVRkVMRWRCUVdWQkxFOUJRVThzVDBGQlQwTXNZVUZCWkN4RFFVRm1MRWRCUVRoRExFTkJRWFJGTzBGQlFVRXNRMEZCZEVJN08wRkJSVkE3T3pzN096dEJRVTFQTEVsQlFVMURMREJEUVVGcFFpeFZRVUZEUXl4UlFVRkVMRVZCUVZkR0xHRkJRVmc3UVVGQlFTeFRRVUUyUWtVc1dVRkJXU3hQUVVGUFJpeGhRVUZ1UWl4RFFVRTNRanRCUVVGQkxFTkJRWFpDT3p0QlFVVlFPenM3T3pzN08wRkJUMDhzU1VGQlRVY3NjME5CUVdVc1ZVRkJRME1zUzBGQlJDeEZRVUZSYkVJc1VVRkJVaXhGUVVGeFFqdEJRVU12UXl4TlFVRk5iVUlzVlVGQlZTeExRVUZMUkN4UlFVRlJMRU5CUVdJc1EwRkJhRUk3UVVGRFFTeE5RVUZOUlN4VFFVRlRMRWxCUVVzc1NVRkJTVVlzUzBGQmVFSTdRVUZEUVN4TlFVRk5SeXh0UWtGQmJVSnFSQ3hMUVVGTGEwUXNSMEZCVEN4RFFVRlRkRUlzVjBGQlYyOUNMRTFCUVhCQ0xFVkJRVFJDTEVOQlFUVkNMRU5CUVhwQ096dEJRVVZCTEZOQlFVOW9SQ3hMUVVGTGJVUXNTMEZCVEN4RFFVRlhSaXh0UWtGQmJVSkdMRTlCUVRsQ0xFbEJRWGxEUVN4UFFVRm9SRHRCUVVORUxFTkJUazBpTENKbWFXeGxJam9pWTJGc1l5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHbHpUblZ0SUgwZ1puSnZiU0FuTGk5MWRHbHNjeWM3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnYm5WdFltVnlJSFJ2SUhnZ1pHVmphVzFoYkNCd2JHRmpaWE5jYmx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wxY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMWNiaW92WEc1amIyNXpkQ0IwYjBSbFkybHRZV3dnUFNBb2JuVnRMQ0J3Y21WamFYTnBiMjRnUFNBeUtTQTlQaUI3WEc0Z0lIQnlaV05wYzJsdmJpQTlJREV3SUNvcUlIQnlaV05wYzJsdmJqdGNiaUFnY21WMGRYSnVJRTFoZEdndWNtOTFibVFvYm5WdElDb2djSEpsWTJsemFXOXVLU0F2SUhCeVpXTnBjMmx2Ymp0Y2JuMDdYRzVjYm1OdmJuTjBJRnBGVWs5ZlVFOUpUbFFnUFNCN1hHNGdJSGc2SURBc1hHNGdJSGs2SURBc1hHNGdJSG82SURCY2JuMDdYRzVjYm1OdmJuTjBJR1JwYzNSaGJtTmxNVVFnUFNBb1lTd2dZaWtnUFQ0Z1RXRjBhQzVoWW5Nb1lTQXRJR0lwTzF4dVhHNHZLbHh1SUNCQmJtZHNaU0JpWlhSM1pXVnVJSEJ2YVc1MGMxeHVJQ0JjYmlBZ1ZISmhibk5zWVhSbGN5QjBhR1VnYUhsd2IzUm9aWFJwWTJGc0lHeHBibVVnYzI4Z2RHaGhkQ0IwYUdVZ0oyWnliMjBuSUdOdmIzSmthVzVoZEdWelhHNGdJR0Z5WlNCaGRDQXdMREJjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dXQ0JoYm1RZ1dTQmpiMjl5WkdsdVlYUmxjeUJ2WmlCbWNtOXRJSEJ2YVc1MFhHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dXQ0JoYm1RZ1dTQmpiM0prYVc1aGRHVnpJRzltSUhSdklIQnZhVzUwWEc0Z0lFQnlaWFIxY200Z1czSmhaR2xoYmwwNklFRnVaMnhsSUdKbGRIZGxaVzRnZEdobElIUjNieUJ3YjJsdWRITWdhVzRnY21Ga2FXRnVjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JoYm1kc1pTQTlJQ2hoTENCaUlEMGdXa1ZTVDE5UVQwbE9WQ2tnUFQ0Z2NtRmthV0Z1YzFSdlJHVm5jbVZsY3loTllYUm9MbUYwWVc0eUtHRXVlQ0F0SUdJdWVDd2dZUzU1SUMwZ1lpNTVLU2s3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnWkdWbmNtVmxjeUIwYnlCeVlXUnBZVzV6WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJR1JsWjNKbFpYTmNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdhVzRnY21Ga2FXRnVjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrWldkeVpXVnpWRzlTWVdScFlXNXpJRDBnS0dSbFozSmxaWE1wSUQwK0lHUmxaM0psWlhNZ0tpQk5ZWFJvTGxCSklDOGdNVGd3TzF4dVhHNHZLbHh1SUNCRWFXeGhkR1ZjYmlBZ1hHNGdJRU5vWVc1blpTQjBhR1VnY0hKdlozSmxjM05wYjI0Z1ltVjBkMlZsYmlCaElHRnVaQ0JpSUdGalkyOXlaR2x1WnlCMGJ5QmthV3hoZEdsdmJpNWNiaUFnWEc0Z0lGTnZJR1JwYkdGMGFXOXVJRDBnTUM0MUlIZHZkV3hrSUdOb1lXNW5aVnh1SUNCY2JpQWdZU0F0TFMwdExTMHRMUzBnWWx4dUlDQmNiaUFnZEc5Y2JpQWdYRzRnSUdFZ0xTMHRMU0JpWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJ5WlhacGIzVnpJSFpoYkhWbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFUnBiR0YwWlNCd2NtOW5jbVZ6Y3lCaWVTQjRYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZCeVpYWnBiM1Z6SUhaaGJIVmxJSEJzZFhNZ2RHaGxJR1JwYkdGMFpXUWdaR2xtWm1WeVpXNWpaVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrYVd4aGRHVWdQU0FvWVN3Z1lpd2daR2xzWVhScGIyNHBJRDArSUdFZ0t5QW9LR0lnTFNCaEtTQXFJR1JwYkdGMGFXOXVLVHRjYmx4dUx5cGNiaUFnUkdsemRHRnVZMlZjYmlBZ1hHNGdJRkpsZEhWeWJuTWdkR2hsSUdScGMzUmhibU5sSUdKbGRIZGxaVzRnZEhkdklHNGdaR2x0Wlc1emFXOXVZV3dnY0c5cGJuUnpMbHh1SUNCY2JpQWdRSEJoY21GdElGdHZZbXBsWTNRdmJuVnRZbVZ5WFRvZ2VDQmhibVFnZVNCdmNpQnFkWE4wSUhnZ2IyWWdjRzlwYm5RZ1FWeHVJQ0JBY0dGeVlXMGdXMjlpYW1WamRDOXVkVzFpWlhKZE9pQW9iM0IwYVc5dVlXd3BPaUI0SUdGdVpDQjVJRzl5SUdwMWMzUWdlQ0J2WmlCd2IybHVkQ0JDWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGUm9aU0JrYVhOMFlXNWpaU0JpWlhSM1pXVnVJSFJvWlNCMGQyOGdjRzlwYm5SelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHUnBjM1JoYm1ObElEMGdLR0VzSUdJZ1BTQmFSVkpQWDFCUFNVNVVLU0E5UGlCN1hHNGdJQzh2SURGRUlHUnBiV1Z1YzJsdmJuTmNiaUFnYVdZZ0tHbHpUblZ0S0dFcEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdScGMzUmhibU5sTVVRb1lTd2dZaWs3WEc1Y2JpQWdMeThnVFhWc2RHa3RaR2x0Wlc1emFXOXVZV3hjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0JqYjI1emRDQjRSR1ZzZEdFZ1BTQmthWE4wWVc1alpURkVLR0V1ZUN3Z1lpNTRLVHRjYmlBZ0lDQmpiMjV6ZENCNVJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlU3dnWWk1NUtUdGNiaUFnSUNCamIyNXpkQ0I2UkdWc2RHRWdQU0FvYVhOT2RXMG9ZUzU2S1NrZ1B5QmthWE4wWVc1alpURkVLR0V1ZWl3Z1lpNTZLU0E2SURBN1hHNWNiaUFnSUNCeVpYUjFjbTRnVFdGMGFDNXpjWEowS0NoNFJHVnNkR0VnS2lvZ01pa2dLeUFvZVVSbGJIUmhJQ29xSURJcElDc2dLSHBFWld4MFlTQXFLaUF5S1NrN1hHNGdJSDFjYm4wN1hHNWNiaThxWEc0Z0lGQnliMmR5WlhOeklIZHBkR2hwYmlCbmFYWmxiaUJ5WVc1blpWeHVJQ0JjYmlBZ1IybDJaVzRnWVNCc2IzZGxjaUJzYVcxcGRDQmhibVFnWVc0Z2RYQndaWElnYkdsdGFYUXNJSGRsSUhKbGRIVnliaUIwYUdVZ2NISnZaM0psYzNOY2JpQWdLR1Y0Y0hKbGMzTmxaQ0JoY3lCaElHNTFiV0psY2lBd0xURXBJSEpsY0hKbGMyVnVkR1ZrSUdKNUlIUm9aU0JuYVhabGJpQjJZV3gxWlN3Z1lXNWtYRzRnSUd4cGJXbDBJSFJvWVhRZ2NISnZaM0psYzNNZ2RHOGdkMmwwYUdsdUlEQXRNUzVjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dURzkzWlhJZ2JHbHRhWFFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZYQndaWElnYkdsdGFYUmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQjBieUJtYVc1a0lIQnliMmR5WlhOeklIZHBkR2hwYmlCbmFYWmxiaUJ5WVc1blpWeHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJRY205bmNtVnpjeUJ2WmlCMllXeDFaU0IzYVhSb2FXNGdjbUZ1WjJVZ1lYTWdaWGh3Y21WemMyVmtJREF0TVZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTQTlJQ2htY205dExDQjBieXdnZG1Gc2RXVXBJRDArSUNoMllXeDFaU0F0SUdaeWIyMHBJQzhnS0hSdklDMGdabkp2YlNrN1hHNWNiaThxWEc0Z0lGWmhiSFZsSUdsdUlISmhibWRsSUdaeWIyMGdjSEp2WjNKbGMzTmNiaUFnWEc0Z0lFZHBkbVZ1SUdFZ2JHOTNaWElnYkdsdGFYUWdZVzVrSUdGdUlIVndjR1Z5SUd4cGJXbDBMQ0IzWlNCeVpYUjFjbTRnZEdobElIWmhiSFZsSUhkcGRHaHBibHh1SUNCMGFHRjBJSEpoYm1kbElHRnpJR1Y0Y0hKbGMzTmxaQ0JpZVNCd2NtOW5jbVZ6Y3lBb1lTQnVkVzFpWlhJZ1puSnZiU0F3TFRFcFhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4dmQyVnlJR3hwYldsMElHOW1JSEpoYm1kbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWWEJ3WlhJZ2JHbHRhWFFnYjJZZ2NtRnVaMlZjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVWFHVWdjSEp2WjNKbGMzTWdZbVYwZDJWbGJpQnNiM2RsY2lCaGJtUWdkWEJ3WlhJZ2JHbHRhWFJ6SUdWNGNISmxjM05sWkNBd0xURmNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdZWE1nWTJGc1kzVnNZWFJsWkNCbWNtOXRJSEJ5YjJkeVpYTnpJSGRwZEdocGJpQnlZVzVuWlNBb2JtOTBJR3hwYldsMFpXUWdkMmwwYUdsdUlISmhibWRsS1Z4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5QTlJQ2htY205dExDQjBieXdnY0hKdlozSmxjM01wSUQwK0lDZ3RJSEJ5YjJkeVpYTnpJQ29nWm5KdmJTa2dLeUFvY0hKdlozSmxjM01nS2lCMGJ5a2dLeUJtY205dE8xeHVYRzR2S2x4dUlDQlFiMmx1ZENCbWNtOXRJR0Z1WjJ4bElHRnVaQ0JrYVhOMFlXNWpaVnh1SUNCY2JpQWdRSEJoY21GdElGdHZZbXBsWTNSZE9pQXlSQ0J3YjJsdWRDQnZaaUJ2Y21sbmFXNWNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJCYm1kc1pTQm1jbTl0SUc5eWFXZHBibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVScGMzUmhibU5sSUdaeWIyMGdiM0pwWjJsdVhHNGdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMDZJRU5oYkdOMWJHRjBaV1FnTWtRZ2NHOXBiblJjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY0c5cGJuUkdjbTl0UVc1bmJHVkJibVJFYVhOMFlXNWpaU0E5SUNodmNtbG5hVzRzSUdGdVoyeGxMQ0JrYVhOMFlXNWpaU2tnUFQ0Z2UxeHVJQ0JoYm1kc1pTQTlJR1JsWjNKbFpYTlViMUpoWkdsaGJuTW9ZVzVuYkdVcE8xeHVYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdlRG9nWkdsemRHRnVZMlVnS2lCTllYUm9MbU52Y3loaGJtZHNaU2tnS3lCdmNtbG5hVzR1ZUN4Y2JpQWdJQ0I1T2lCa2FYTjBZVzVqWlNBcUlFMWhkR2d1YzJsdUtHRnVaMnhsS1NBcklHOXlhV2RwYmk1NVhHNGdJSDA3WEc1OU8xeHVYRzR2S2x4dUlDQkRiMjUyWlhKMElISmhaR2xoYm5NZ2RHOGdaR1ZuY21WbGMxeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCeVlXUnBZVzV6WEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlHUmxaM0psWlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtRmthV0Z1YzFSdlJHVm5jbVZsY3lBOUlDaHlZV1JwWVc1ektTQTlQaUJ5WVdScFlXNXpJQ29nTVRnd0lDOGdUV0YwYUM1UVNUdGNibHh1THlwY2JpQWdSbkpoYldWeVlYUmxMV2x1WkdWd1pXNWtaVzUwSUhOdGIyOTBhR2x1WjF4dVhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUbVYzSUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVDJ4a0lIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkSUNodmNIUnBiMjVoYkNrNklGTnRiMjkwYUdsdVp5QW9NQ0JwY3lCdWIyNWxLVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Ylc5dmRHZ2dQU0FvYm1WM1ZtRnNkV1VzSUc5c1pGWmhiSFZsTENCa2RYSmhkR2x2Yml3Z2MyMXZiM1JvYVc1bklEMGdNQ2tnUFQ0Z2RHOUVaV05wYldGc0tHOXNaRlpoYkhWbElDc2dLR1IxY21GMGFXOXVJQ29nS0c1bGQxWmhiSFZsSUMwZ2IyeGtWbUZzZFdVcElDOGdUV0YwYUM1dFlYZ29jMjF2YjNSb2FXNW5MQ0JrZFhKaGRHbHZiaWtwS1R0Y2JseHVMeXBjYmlBZ1EyOXVkbVZ5ZENCNElIQmxjaUJ6WldOdmJtUWdkRzhnY0dWeUlHWnlZVzFsSUhabGJHOWphWFI1SUdKaGMyVmtJRzl1SUdad2MxeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmJtbDBJSEJsY2lCelpXTnZibVJjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCR2NtRnRaU0JrZFhKaGRHbHZiaUJwYmlCdGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR1ZsWkZCbGNrWnlZVzFsSUQwZ0tIaHdjeXdnWm5KaGJXVkVkWEpoZEdsdmJpa2dQVDRnS0dselRuVnRLSGh3Y3lrcElEOGdlSEJ6SUM4Z0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLU0E2SURBN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ2RtVnNiMk5wZEhrZ2FXNTBieUIyWld4cFkybDBlU0J3WlhJZ2MyVmpiMjVrWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ1YVhRZ2NHVnlJR1p5WVcxbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI0Z2FXNGdiWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCbFpXUlFaWEpUWldOdmJtUWdQU0FvZG1Wc2IyTnBkSGtzSUdaeVlXMWxSSFZ5WVhScGIyNHBJRDArSUhabGJHOWphWFI1SUNvZ0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLVHRjYmx4dUx5cGNiaUFnUTNKbFlYUmxJSE4wWlhCd1pXUWdkbVZ5YzJsdmJpQnZaaUF3TFRFZ2NISnZaM0psYzNOY2JpQWdYRzRnSUVCd1lYSmhiU0JiYVc1MFhUb2dUblZ0WW1WeUlHOW1JSE4wWlhCelhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlRkR1Z3Y0dWa0lIWmhiSFZsWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOMFpYQlFjbTluY21WemN5QTlJQ2h6ZEdWd2N5d2djSEp2WjNKbGMzTXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2MyVm5iV1Z1ZENBOUlERWdMeUFvYzNSbGNITWdMU0F4S1R0Y2JpQWdZMjl1YzNRZ2RHRnlaMlYwSUQwZ01TQXRJQ2d4SUM4Z2MzUmxjSE1wTzF4dUlDQmpiMjV6ZENCd2NtOW5jbVZ6YzA5bVZHRnlaMlYwSUQwZ1RXRjBhQzV0YVc0b2NISnZaM0psYzNNZ0x5QjBZWEpuWlhRc0lERXBPMXh1WEc0Z0lISmxkSFZ5YmlCTllYUm9MbVpzYjI5eUtIQnliMmR5WlhOelQyWlVZWEpuWlhRZ0x5QnpaV2R0Wlc1MEtTQXFJSE5sWjIxbGJuUTdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxudmFyIF9lYXNpbmcgPSByZXF1aXJlKCcuLi9pbmMvZWFzaW5nJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gcmVxdWlyZSgnLi4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBjbGFtcFByb2dyZXNzID0gKDAsIF90cmFuc2Zvcm1lcnMuY2xhbXApKDAsIDEpO1xuXG5mdW5jdGlvbiBjYWxjVmFsdWVBdFRpbWUoZnJvbSwgdG8sIGR1cmF0aW9uLCBlbGFwc2VkLCBlYXNlKSB7XG4gIHZhciBwcm9ncmVzc0F0VGltZSA9IGVhc2UoY2xhbXBQcm9ncmVzcygoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKDAsIGR1cmF0aW9uLCBlbGFwc2VkKSkpO1xuICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShmcm9tLCB0bywgcHJvZ3Jlc3NBdFRpbWUpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgZnJvbSA9IF9yZWYuZnJvbSxcbiAgICAgIHRvID0gX3JlZi50byxcbiAgICAgIG9uVXBkYXRlID0gX3JlZi5vblVwZGF0ZSxcbiAgICAgIF9yZWYkYWNjdXJhY3kgPSBfcmVmLmFjY3VyYWN5LFxuICAgICAgYWNjdXJhY3kgPSBfcmVmJGFjY3VyYWN5ID09PSB1bmRlZmluZWQgPyA2MCA6IF9yZWYkYWNjdXJhY3ksXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2Zyb20nLCAndG8nLCAnb25VcGRhdGUnLCAnYWNjdXJhY3knXSk7XG5cbiAgLy8gR2V0IHR3ZWVuIHByb3BlcnRpZXNcbiAgdmFyIGEgPSBmcm9tO1xuICB2YXIgYiA9IHRvO1xuICB2YXIgYUN1cnJlbnQgPSBhLmdldCgpO1xuICB2YXIgYUR1cmF0aW9uID0gYS5nZXRQcm9wKCdkdXJhdGlvbicpO1xuICB2YXIgYkR1cmF0aW9uID0gYi5nZXRQcm9wKCdkdXJhdGlvbicpO1xuICB2YXIgYUVhc2UgPSBhLmdldFByb3AoJ2Vhc2UnKTtcbiAgdmFyIGJFYXNlID0gYi5nZXRQcm9wKCdlYXNlJyk7XG4gIHZhciBhRnJvbSA9IGEuZ2V0UHJvcCgnZnJvbScpO1xuICB2YXIgYkZyb20gPSBiLmdldFByb3AoJ2Zyb20nKTtcbiAgdmFyIGFUbyA9IGEuZ2V0UHJvcCgndG8nKTtcbiAgdmFyIGJUbyA9IGIuZ2V0UHJvcCgndG8nKTtcblxuICAvLyBBbmFseXNlIHR3ZWVuc1xuICB2YXIgb3ZlcmxhcER1cmF0aW9uID0gTWF0aC5taW4oYUR1cmF0aW9uIC0gYS5nZXRFbGFwc2VkKCksIGJEdXJhdGlvbik7XG4gIHZhciBiVmFsdWVBdFR3ZWVuT3ZlcmxhcENvbXBsZXRlID0gY2FsY1ZhbHVlQXRUaW1lKGJGcm9tLCBiVG8sIGJEdXJhdGlvbiwgb3ZlcmxhcER1cmF0aW9uLCBiRWFzZSk7XG4gIHZhciBiU3RhcnRzSGlnaGVyVGhhbkEgPSBiRnJvbSA+IGFDdXJyZW50O1xuICB2YXIgYkVuZHNIaWdoZXJUaGFuQSA9IGJWYWx1ZUF0VHdlZW5PdmVybGFwQ29tcGxldGUgPiBhVG87XG5cbiAgLy8gQmxlbmQgcG9pbnRzIGFyZSBkZWZpbmVkIGFzIFt0ID0gdGltZSwgdiA9IHZhbHVlQXRUaW1lXVxuICAvLyBQMVxuICAvLyBUaGUgc3RhcnQgb2YgdGhlIHR3ZWVuIGJsZW5kXG4gIHZhciBQMSA9IGFDdXJyZW50O1xuICB2YXIgYmxlbmRQb2ludHMgPSBbUDFdO1xuXG4gIC8vIEZpbmQgUDJcbiAgLy8gVGhlIHBvc3NpYmxlIGludGVyc2VjdGlvbiBwb2ludCBiZXR3ZWVuIHRoZSB0d28gdHdlZW5zXG4gIHZhciB0d2VlbnNJbnRlcnNlY3QgPSBiU3RhcnRzSGlnaGVyVGhhbkEgIT09IGJFbmRzSGlnaGVyVGhhbkE7XG4gIGlmICh0d2VlbnNJbnRlcnNlY3QpIHtcbiAgICB2YXIgdGltZXN0ZXAgPSBvdmVybGFwRHVyYXRpb24gLyBhY2N1cmFjeTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWNjdXJhY3k7IGkrKykge1xuICAgICAgdmFyIHJ1bm5pbmdUaW1lID0gaSAqIHRpbWVzdGVwO1xuXG4gICAgICB2YXIgYVZhbHVlQXRUaW1lID0gY2FsY1ZhbHVlQXRUaW1lKGFGcm9tLCBhVG8sIGFEdXJhdGlvbiwgYS5lbGFwc2VkICsgcnVubmluZ1RpbWUsIGFFYXNlKTtcbiAgICAgIHZhciBiVmFsdWVBdFRpbWUgPSBjYWxjVmFsdWVBdFRpbWUoYkZyb20sIGJUbywgYkR1cmF0aW9uLCBiLmVsYXBzZWQgKyBydW5uaW5nVGltZSwgYkVhc2UpO1xuXG4gICAgICB2YXIgaGFzSW50ZXJzZWN0ZWQgPSBiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lID4gYlZhbHVlQXRUaW1lIHx8ICFiU3RhcnRzSGlnaGVyVGhhbkEgJiYgYVZhbHVlQXRUaW1lIDwgYlZhbHVlQXRUaW1lO1xuXG4gICAgICBpZiAoaGFzSW50ZXJzZWN0ZWQpIHtcbiAgICAgICAgdmFyIFAyID0gYlZhbHVlQXRUaW1lO1xuICAgICAgICBibGVuZFBvaW50cy5wdXNoKFAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUDNcbiAgLy8gVGhlIHBvaW50cyB0aGUgdHdvIHR3ZWVucyBzdG9wIG92ZXJsYXBwaW5nXG4gIHZhciBQMyA9IGJWYWx1ZUF0VHdlZW5PdmVybGFwQ29tcGxldGU7XG4gIGJsZW5kUG9pbnRzLnB1c2goUDMpO1xuXG4gIC8vIFB1c2ggdGhlIGVuZCBzdGF0ZSBvZiBiIHR3ZWVuIGFzIGZpbmFsIGNvbnRyb2wgcG9pbnRcbiAgdmFyIFA0ID0gYlRvO1xuICBibGVuZFBvaW50cy5wdXNoKFA0KTtcblxuICByZXR1cm4gKDAsIF90d2VlbjIuZGVmYXVsdCkoX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgZHVyYXRpb246IGJEdXJhdGlvbixcbiAgICBlYXNlOiBfZWFzaW5nLmxpbmVhcixcbiAgICBvblVwZGF0ZTogKDAsIF90cmFuc2Zvcm1lcnMuZmxvdykoKDAsIF90cmFuc2Zvcm1lcnMuYmV6aWVyKShibGVuZFBvaW50cyksIG9uVXBkYXRlKVxuICB9KSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMkpzWlc1a0xYUjNaV1Z1Y3k1cWN5SmRMQ0p1WVcxbGN5STZXeUpqYkdGdGNGQnliMmR5WlhOeklpd2lZMkZzWTFaaGJIVmxRWFJVYVcxbElpd2labkp2YlNJc0luUnZJaXdpWkhWeVlYUnBiMjRpTENKbGJHRndjMlZrSWl3aVpXRnpaU0lzSW5CeWIyZHlaWE56UVhSVWFXMWxJaXdpYjI1VmNHUmhkR1VpTENKaFkyTjFjbUZqZVNJc0luQnliM0J6SWl3aVlTSXNJbUlpTENKaFEzVnljbVZ1ZENJc0ltZGxkQ0lzSW1GRWRYSmhkR2x2YmlJc0ltZGxkRkJ5YjNBaUxDSmlSSFZ5WVhScGIyNGlMQ0poUldGelpTSXNJbUpGWVhObElpd2lZVVp5YjIwaUxDSmlSbkp2YlNJc0ltRlVieUlzSW1KVWJ5SXNJbTkyWlhKc1lYQkVkWEpoZEdsdmJpSXNJazFoZEdnaUxDSnRhVzRpTENKblpYUkZiR0Z3YzJWa0lpd2lZbFpoYkhWbFFYUlVkMlZsYms5MlpYSnNZWEJEYjIxd2JHVjBaU0lzSW1KVGRHRnlkSE5JYVdkb1pYSlVhR0Z1UVNJc0ltSkZibVJ6U0dsbmFHVnlWR2hoYmtFaUxDSlFNU0lzSW1Kc1pXNWtVRzlwYm5Seklpd2lkSGRsWlc1elNXNTBaWEp6WldOMElpd2lkR2x0WlhOMFpYQWlMQ0pwSWl3aWNuVnVibWx1WjFScGJXVWlMQ0poVm1Gc2RXVkJkRlJwYldVaUxDSmlWbUZzZFdWQmRGUnBiV1VpTENKb1lYTkpiblJsY25ObFkzUmxaQ0lzSWxBeUlpd2ljSFZ6YUNJc0lsQXpJaXdpVURRaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3pzN08wRkJRMEU3TzBGQlEwRTdPMEZCUTBFN096czdPenRCUVVWQkxFbEJRVTFCTEdkQ1FVRm5RaXg1UWtGQlRTeERRVUZPTEVWQlFWTXNRMEZCVkN4RFFVRjBRanM3UVVGRlFTeFRRVUZUUXl4bFFVRlVMRU5CUVhsQ1F5eEpRVUY2UWl4RlFVRXJRa01zUlVGQkwwSXNSVUZCYlVORExGRkJRVzVETEVWQlFUWkRReXhQUVVFM1F5eEZRVUZ6UkVNc1NVRkJkRVFzUlVGQk5FUTdRVUZETVVRc1RVRkJUVU1zYVVKQlFXbENSQ3hMUVVGTFRpeGpRVUZqTEdkRFFVRnhRaXhEUVVGeVFpeEZRVUYzUWtrc1VVRkJlRUlzUlVGQmEwTkRMRTlCUVd4RExFTkJRV1FzUTBGQlRDeERRVUYyUWp0QlFVTkJMRk5CUVU4c1owTkJRWEZDU0N4SlFVRnlRaXhGUVVFeVFrTXNSVUZCTTBJc1JVRkJLMEpKTEdOQlFTOUNMRU5CUVZBN1FVRkRSRHM3YTBKQlJXTXNaMEpCUVhGRU8wRkJRVUVzVFVGQmJFUk1MRWxCUVd0RUxGRkJRV3hFUVN4SlFVRnJSRHRCUVVGQkxFMUJRVFZEUXl4RlFVRTBReXhSUVVFMVEwRXNSVUZCTkVNN1FVRkJRU3hOUVVGNFEwc3NVVUZCZDBNc1VVRkJlRU5CTEZGQlFYZERPMEZCUVVFc01rSkJRVGxDUXl4UlFVRTRRanRCUVVGQkxFMUJRVGxDUVN4UlFVRTRRaXhwUTBGQmJrSXNSVUZCYlVJN1FVRkJRU3hOUVVGYVF5eExRVUZaT3p0QlFVTnNSVHRCUVVOQkxFMUJRVTFETEVsQlFVbFVMRWxCUVZZN1FVRkRRU3hOUVVGTlZTeEpRVUZKVkN4RlFVRldPMEZCUTBFc1RVRkJUVlVzVjBGQlYwWXNSVUZCUlVjc1IwRkJSaXhGUVVGcVFqdEJRVU5CTEUxQlFVMURMRmxCUVZsS0xFVkJRVVZMTEU5QlFVWXNRMEZCVlN4VlFVRldMRU5CUVd4Q08wRkJRMEVzVFVGQlRVTXNXVUZCV1V3c1JVRkJSVWtzVDBGQlJpeERRVUZWTEZWQlFWWXNRMEZCYkVJN1FVRkRRU3hOUVVGTlJTeFJRVUZSVUN4RlFVRkZTeXhQUVVGR0xFTkJRVlVzVFVGQlZpeERRVUZrTzBGQlEwRXNUVUZCVFVjc1VVRkJVVkFzUlVGQlJVa3NUMEZCUml4RFFVRlZMRTFCUVZZc1EwRkJaRHRCUVVOQkxFMUJRVTFKTEZGQlFWRlVMRVZCUVVWTExFOUJRVVlzUTBGQlZTeE5RVUZXTEVOQlFXUTdRVUZEUVN4TlFVRk5TeXhSUVVGUlZDeEZRVUZGU1N4UFFVRkdMRU5CUVZVc1RVRkJWaXhEUVVGa08wRkJRMEVzVFVGQlRVMHNUVUZCVFZnc1JVRkJSVXNzVDBGQlJpeERRVUZWTEVsQlFWWXNRMEZCV2p0QlFVTkJMRTFCUVUxUExFMUJRVTFZTEVWQlFVVkpMRTlCUVVZc1EwRkJWU3hKUVVGV0xFTkJRVm83TzBGQlJVRTdRVUZEUVN4TlFVRk5VU3hyUWtGQmEwSkRMRXRCUVV0RExFZEJRVXdzUTBGQlUxZ3NXVUZCV1Vvc1JVRkJSV2RDTEZWQlFVWXNSVUZCY2tJc1JVRkJjVU5XTEZOQlFYSkRMRU5CUVhoQ08wRkJRMEVzVFVGQlRWY3NLMEpCUVN0Q00wSXNaMEpCUVdkQ2IwSXNTMEZCYUVJc1JVRkJkVUpGTEVkQlFYWkNMRVZCUVRSQ1RpeFRRVUUxUWl4RlFVRjFRMDhzWlVGQmRrTXNSVUZCZDBSTUxFdEJRWGhFTEVOQlFYSkRPMEZCUTBFc1RVRkJUVlVzY1VKQlFYTkNVaXhSUVVGUlVpeFJRVUZ3UXp0QlFVTkJMRTFCUVUxcFFpeHRRa0ZCYjBKR0xDdENRVUVyUWs0c1IwRkJla1E3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1RVRkJUVk1zUzBGQlMyeENMRkZCUVZnN1FVRkRRU3hOUVVGTmJVSXNZMEZCWXl4RFFVRkRSQ3hGUVVGRUxFTkJRWEJDT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hOUVVGTlJTeHJRa0ZCYlVKS0xIVkNRVUYxUWtNc1owSkJRV2hFTzBGQlEwRXNUVUZCU1Vjc1pVRkJTaXhGUVVGeFFqdEJRVU51UWl4UlFVRkpReXhYUVVGWFZpeHJRa0ZCYTBKbUxGRkJRV3BET3p0QlFVVkJMRk5CUVVzc1NVRkJTVEJDTEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNURkNMRkZCUVhCQ0xFVkJRVGhDTUVJc1IwRkJPVUlzUlVGQmJVTTdRVUZEYWtNc1ZVRkJUVU1zWTBGQlkwUXNTVUZCU1VRc1VVRkJlRUk3TzBGQlJVRXNWVUZCVFVjc1pVRkJaWEJETEdkQ1FVRm5RbTFDTEV0QlFXaENMRVZCUVhWQ1JTeEhRVUYyUWl4RlFVRTBRbEFzVTBGQk5VSXNSVUZCZFVOS0xFVkJRVVZPTEU5QlFVWXNSMEZCV1N0Q0xGZEJRVzVFTEVWQlFXZEZiRUlzUzBGQmFFVXNRMEZCY2tJN1FVRkRRU3hWUVVGTmIwSXNaVUZCWlhKRExHZENRVUZuUW05Q0xFdEJRV2hDTEVWQlFYVkNSU3hIUVVGMlFpeEZRVUUwUWs0c1UwRkJOVUlzUlVGQmRVTk1MRVZCUVVWUUxFOUJRVVlzUjBGQldTdENMRmRCUVc1RUxFVkJRV2RGYWtJc1MwRkJhRVVzUTBGQmNrSTdPMEZCUlVFc1ZVRkJUVzlDTEdsQ1FVTklWaXh6UWtGQmMwSlJMR1ZCUVdWRExGbEJRWFJETEVsQlEwTXNRMEZCUTFRc2EwSkJRVVFzU1VGQmRVSlJMR1ZCUVdWRExGbEJSbnBET3p0QlFVdEJMRlZCUVVsRExHTkJRVW9zUlVGQmIwSTdRVUZEYkVJc1dVRkJUVU1zUzBGQlMwWXNXVUZCV0R0QlFVTkJUaXh2UWtGQldWTXNTVUZCV2l4RFFVRnBRa1FzUlVGQmFrSTdRVUZEUVR0QlFVTkVPMEZCUTBZN1FVRkRSanM3UVVGRlJEdEJRVU5CTzBGQlEwRXNUVUZCVFVVc1MwRkJTMlFzTkVKQlFWZzdRVUZEUVVrc1kwRkJXVk1zU1VGQldpeERRVUZwUWtNc1JVRkJha0k3TzBGQlJVRTdRVUZEUVN4TlFVRk5ReXhMUVVGTGNFSXNSMEZCV0R0QlFVTkJVeXhqUVVGWlV5eEpRVUZhTEVOQlFXbENSU3hGUVVGcVFqczdRVUZGUVN4VFFVRlBMR3REUVVOR2FrTXNTMEZFUlR0QlFVVk1UaXhqUVVGVllTeFRRVVpNTzBGQlIweFlMSGRDUVVoTE8wRkJTVXhGTEdOQlFWVXNkMEpCUTFJc01FSkJRVTkzUWl4WFFVRlFMRU5CUkZFc1JVRkZVbmhDTEZGQlJsRTdRVUZLVEN4TFFVRlFPMEZCVTBRc1F5SXNJbVpwYkdVaU9pSmliR1Z1WkMxMGQyVmxibk11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkSGRsWlc0Z1puSnZiU0FuTGk5MGQyVmxiaWM3WEc1cGJYQnZjblFnZXlCc2FXNWxZWElnZlNCbWNtOXRJQ2N1TGk5cGJtTXZaV0Z6YVc1bkp6dGNibWx0Y0c5eWRDQjdJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsTENCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYm1sdGNHOXlkQ0I3SUdac2IzY3NJR05zWVcxd0xDQmlaWHBwWlhJZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZEhKaGJuTm1iM0p0WlhKekp6dGNibHh1WTI5dWMzUWdZMnhoYlhCUWNtOW5jbVZ6Y3lBOUlHTnNZVzF3S0RBc0lERXBPMXh1WEc1bWRXNWpkR2x2YmlCallXeGpWbUZzZFdWQmRGUnBiV1VvWm5KdmJTd2dkRzhzSUdSMWNtRjBhVzl1TENCbGJHRndjMlZrTENCbFlYTmxLU0I3WEc0Z0lHTnZibk4wSUhCeWIyZHlaWE56UVhSVWFXMWxJRDBnWldGelpTaGpiR0Z0Y0ZCeWIyZHlaWE56S0dkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtEQXNJR1IxY21GMGFXOXVMQ0JsYkdGd2MyVmtLU2twTzF4dUlDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9abkp2YlN3Z2RHOHNJSEJ5YjJkeVpYTnpRWFJVYVcxbEtUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hzZ1puSnZiU3dnZEc4c0lHOXVWWEJrWVhSbExDQmhZMk4xY21GamVTQTlJRFl3TENBdUxpNXdjbTl3Y3lCOUtTQTlQaUI3WEc0Z0lDOHZJRWRsZENCMGQyVmxiaUJ3Y205d1pYSjBhV1Z6WEc0Z0lHTnZibk4wSUdFZ1BTQm1jbTl0TzF4dUlDQmpiMjV6ZENCaUlEMGdkRzg3WEc0Z0lHTnZibk4wSUdGRGRYSnlaVzUwSUQwZ1lTNW5aWFFvS1R0Y2JpQWdZMjl1YzNRZ1lVUjFjbUYwYVc5dUlEMGdZUzVuWlhSUWNtOXdLQ2RrZFhKaGRHbHZiaWNwTzF4dUlDQmpiMjV6ZENCaVJIVnlZWFJwYjI0Z1BTQmlMbWRsZEZCeWIzQW9KMlIxY21GMGFXOXVKeWs3WEc0Z0lHTnZibk4wSUdGRllYTmxJRDBnWVM1blpYUlFjbTl3S0NkbFlYTmxKeWs3WEc0Z0lHTnZibk4wSUdKRllYTmxJRDBnWWk1blpYUlFjbTl3S0NkbFlYTmxKeWs3WEc0Z0lHTnZibk4wSUdGR2NtOXRJRDBnWVM1blpYUlFjbTl3S0NkbWNtOXRKeWs3WEc0Z0lHTnZibk4wSUdKR2NtOXRJRDBnWWk1blpYUlFjbTl3S0NkbWNtOXRKeWs3WEc0Z0lHTnZibk4wSUdGVWJ5QTlJR0V1WjJWMFVISnZjQ2duZEc4bktUdGNiaUFnWTI5dWMzUWdZbFJ2SUQwZ1lpNW5aWFJRY205d0tDZDBieWNwTzF4dVhHNGdJQzh2SUVGdVlXeDVjMlVnZEhkbFpXNXpYRzRnSUdOdmJuTjBJRzkyWlhKc1lYQkVkWEpoZEdsdmJpQTlJRTFoZEdndWJXbHVLR0ZFZFhKaGRHbHZiaUF0SUdFdVoyVjBSV3hoY0hObFpDZ3BMQ0JpUkhWeVlYUnBiMjRwTzF4dUlDQmpiMjV6ZENCaVZtRnNkV1ZCZEZSM1pXVnVUM1psY214aGNFTnZiWEJzWlhSbElEMGdZMkZzWTFaaGJIVmxRWFJVYVcxbEtHSkdjbTl0TENCaVZHOHNJR0pFZFhKaGRHbHZiaXdnYjNabGNteGhjRVIxY21GMGFXOXVMQ0JpUldGelpTazdYRzRnSUdOdmJuTjBJR0pUZEdGeWRITklhV2RvWlhKVWFHRnVRU0E5SUNoaVJuSnZiU0ErSUdGRGRYSnlaVzUwS1R0Y2JpQWdZMjl1YzNRZ1lrVnVaSE5JYVdkb1pYSlVhR0Z1UVNBOUlDaGlWbUZzZFdWQmRGUjNaV1Z1VDNabGNteGhjRU52YlhCc1pYUmxJRDRnWVZSdktUdGNibHh1SUNBdkx5QkNiR1Z1WkNCd2IybHVkSE1nWVhKbElHUmxabWx1WldRZ1lYTWdXM1FnUFNCMGFXMWxMQ0IySUQwZ2RtRnNkV1ZCZEZScGJXVmRYRzRnSUM4dklGQXhYRzRnSUM4dklGUm9aU0J6ZEdGeWRDQnZaaUIwYUdVZ2RIZGxaVzRnWW14bGJtUmNiaUFnWTI5dWMzUWdVREVnUFNCaFEzVnljbVZ1ZER0Y2JpQWdZMjl1YzNRZ1lteGxibVJRYjJsdWRITWdQU0JiVURGZE8xeHVYRzRnSUM4dklFWnBibVFnVURKY2JpQWdMeThnVkdobElIQnZjM05wWW14bElHbHVkR1Z5YzJWamRHbHZiaUJ3YjJsdWRDQmlaWFIzWldWdUlIUm9aU0IwZDI4Z2RIZGxaVzV6WEc0Z0lHTnZibk4wSUhSM1pXVnVjMGx1ZEdWeWMyVmpkQ0E5SUNoaVUzUmhjblJ6U0dsbmFHVnlWR2hoYmtFZ0lUMDlJR0pGYm1SelNHbG5hR1Z5VkdoaGJrRXBPMXh1SUNCcFppQW9kSGRsWlc1elNXNTBaWEp6WldOMEtTQjdYRzRnSUNBZ2JHVjBJSFJwYldWemRHVndJRDBnYjNabGNteGhjRVIxY21GMGFXOXVJQzhnWVdOamRYSmhZM2s3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUdGalkzVnlZV041T3lCcEt5c3BJSHRjYmlBZ0lDQWdJR052Ym5OMElISjFibTVwYm1kVWFXMWxJRDBnYVNBcUlIUnBiV1Z6ZEdWd08xeHVYRzRnSUNBZ0lDQmpiMjV6ZENCaFZtRnNkV1ZCZEZScGJXVWdQU0JqWVd4alZtRnNkV1ZCZEZScGJXVW9ZVVp5YjIwc0lHRlVieXdnWVVSMWNtRjBhVzl1TENCaExtVnNZWEJ6WldRZ0t5QnlkVzV1YVc1blZHbHRaU3dnWVVWaGMyVXBPMXh1SUNBZ0lDQWdZMjl1YzNRZ1lsWmhiSFZsUVhSVWFXMWxJRDBnWTJGc1kxWmhiSFZsUVhSVWFXMWxLR0pHY205dExDQmlWRzhzSUdKRWRYSmhkR2x2Yml3Z1lpNWxiR0Z3YzJWa0lDc2djblZ1Ym1sdVoxUnBiV1VzSUdKRllYTmxLVHRjYmx4dUlDQWdJQ0FnWTI5dWMzUWdhR0Z6U1c1MFpYSnpaV04wWldRZ1BTQW9YRzRnSUNBZ0lDQWdJQ2hpVTNSaGNuUnpTR2xuYUdWeVZHaGhia0VnSmlZZ1lWWmhiSFZsUVhSVWFXMWxJRDRnWWxaaGJIVmxRWFJVYVcxbEtTQjhmRnh1SUNBZ0lDQWdJQ0FvSVdKVGRHRnlkSE5JYVdkb1pYSlVhR0Z1UVNBbUppQmhWbUZzZFdWQmRGUnBiV1VnUENCaVZtRnNkV1ZCZEZScGJXVXBYRzRnSUNBZ0lDQXBPMXh1WEc0Z0lDQWdJQ0JwWmlBb2FHRnpTVzUwWlhKelpXTjBaV1FwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnVURJZ1BTQmlWbUZzZFdWQmRGUnBiV1U3WEc0Z0lDQWdJQ0FnSUdKc1pXNWtVRzlwYm5SekxuQjFjMmdvVURJcE8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdkx5QlFNMXh1SUNBdkx5QlVhR1VnY0c5cGJuUnpJSFJvWlNCMGQyOGdkSGRsWlc1eklITjBiM0FnYjNabGNteGhjSEJwYm1kY2JpQWdZMjl1YzNRZ1VETWdQU0JpVm1Gc2RXVkJkRlIzWldWdVQzWmxjbXhoY0VOdmJYQnNaWFJsTzF4dUlDQmliR1Z1WkZCdmFXNTBjeTV3ZFhOb0tGQXpLVHRjYmx4dUlDQXZMeUJRZFhOb0lIUm9aU0JsYm1RZ2MzUmhkR1VnYjJZZ1lpQjBkMlZsYmlCaGN5Qm1hVzVoYkNCamIyNTBjbTlzSUhCdmFXNTBYRzRnSUdOdmJuTjBJRkEwSUQwZ1lsUnZPMXh1SUNCaWJHVnVaRkJ2YVc1MGN5NXdkWE5vS0ZBMEtUdGNibHh1SUNCeVpYUjFjbTRnZEhkbFpXNG9lMXh1SUNBZ0lDNHVMbkJ5YjNCekxGeHVJQ0FnSUdSMWNtRjBhVzl1T2lCaVJIVnlZWFJwYjI0c1hHNGdJQ0FnWldGelpUb2diR2x1WldGeUxGeHVJQ0FnSUc5dVZYQmtZWFJsT2lCbWJHOTNLRnh1SUNBZ0lDQWdZbVY2YVdWeUtHSnNaVzVrVUc5cGJuUnpLU3hjYmlBZ0lDQWdJRzl1VlhCa1lYUmxYRzRnSUNBZ0tWeHVJQ0I5S1R0Y2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9ibGVuZC10d2VlbnMuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ2hhaW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ2hhaW4sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIENoYWluKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYWluKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMucGxheU5leHQgPSBfdGhpcy5wbGF5TmV4dC5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBDaGFpbi5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pID0gMDtcbiAgICB0aGlzLnBsYXlDdXJyZW50KCk7XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLnBsYXlOZXh0ID0gZnVuY3Rpb24gcGxheU5leHQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGkgPSBfcHJvcHMuaSxcbiAgICAgICAgb3JkZXIgPSBfcHJvcHMub3JkZXI7XG5cbiAgICBpZiAoaSA8IG9yZGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMucHJvcHMuaSsrO1xuICAgICAgdGhpcy5wbGF5Q3VycmVudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9O1xuXG4gIENoYWluLnByb3RvdHlwZS5wbGF5Q3VycmVudCA9IGZ1bmN0aW9uIHBsYXlDdXJyZW50KCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaSA9IF9wcm9wczIuaSxcbiAgICAgICAgb3JkZXIgPSBfcHJvcHMyLm9yZGVyO1xuXG4gICAgb3JkZXJbaV0ucHJvcHMuX29uQ29tcGxldGUgPSB0aGlzLnBsYXlOZXh0O1xuICAgIG9yZGVyW2ldLnN0YXJ0KCk7XG4gIH07XG5cbiAgQ2hhaW4ucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGkgPSBfcHJvcHMzLmksXG4gICAgICAgIG9yZGVyID0gX3Byb3BzMy5vcmRlcjtcblxuICAgIG9yZGVyW2ldLnN0b3AoKTtcbiAgfTtcblxuICByZXR1cm4gQ2hhaW47XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3JkZXIsIG9uQ29tcGxldGUpIHtcbiAgcmV0dXJuIG5ldyBDaGFpbih7IG9yZGVyOiBvcmRlciwgb25Db21wbGV0ZTogb25Db21wbGV0ZSB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyTm9ZV2x1TG1weklsMHNJbTVoYldWeklqcGJJa05vWVdsdUlpd2ljSEp2Y0hNaUxDSndiR0Y1VG1WNGRDSXNJbUpwYm1RaUxDSnZibE4wWVhKMElpd2lhU0lzSW5Cc1lYbERkWEp5Wlc1MElpd2liM0prWlhJaUxDSnNaVzVuZEdnaUxDSmpiMjF3YkdWMFpTSXNJbDl2YmtOdmJYQnNaWFJsSWl3aWMzUmhjblFpTENKdmJsTjBiM0FpTENKemRHOXdJaXdpYjI1RGIyMXdiR1YwWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3T3pzN096czdPenM3U1VGRlRVRXNTenM3TzBGQlEwb3NhVUpCUVZsRExFdEJRVm9zUlVGQmJVSTdRVUZCUVRzN1FVRkJRU3hwUkVGRGFrSXNiVUpCUVUxQkxFdEJRVTRzUTBGRWFVSTdPMEZCUldwQ0xGVkJRVXRETEZGQlFVd3NSMEZCWjBJc1RVRkJTMEVzVVVGQlRDeERRVUZqUXl4SlFVRmtMRTlCUVdoQ08wRkJSbWxDTzBGQlIyeENPenRyUWtGRlJFTXNUeXh6UWtGQlZUdEJRVU5TTEZOQlFVdElMRXRCUVV3c1EwRkJWMGtzUTBGQldDeEhRVUZsTEVOQlFXWTdRVUZEUVN4VFFVRkxReXhYUVVGTU8wRkJRMFFzUnpzN2EwSkJSVVJLTEZFc2RVSkJRVmM3UVVGQlFTeHBRa0ZEV1N4TFFVRkxSQ3hMUVVScVFqdEJRVUZCTEZGQlEwUkpMRU5CUkVNc1ZVRkRSRUVzUTBGRVF6dEJRVUZCTEZGQlEwVkZMRXRCUkVZc1ZVRkRSVUVzUzBGRVJqczdRVUZGVkN4UlFVRkpSaXhKUVVGSlJTeE5RVUZOUXl4TlFVRk9MRWRCUVdVc1EwRkJka0lzUlVGQk1FSTdRVUZEZUVJc1YwRkJTMUFzUzBGQlRDeERRVUZYU1N4RFFVRllPMEZCUTBFc1YwRkJTME1zVjBGQlREdEJRVU5FTEV0QlNFUXNUVUZIVHp0QlFVTk1MRmRCUVV0SExGRkJRVXc3UVVGRFJEdEJRVU5HTEVjN08ydENRVVZFU0N4WExEQkNRVUZqTzBGQlFVRXNhMEpCUTFNc1MwRkJTMHdzUzBGRVpEdEJRVUZCTEZGQlEwcEpMRU5CUkVrc1YwRkRTa0VzUTBGRVNUdEJRVUZCTEZGQlEwUkZMRXRCUkVNc1YwRkRSRUVzUzBGRVF6czdRVUZGV2tFc1ZVRkJUVVlzUTBGQlRpeEZRVUZUU2l4TFFVRlVMRU5CUVdWVExGZEJRV1lzUjBGQk5rSXNTMEZCUzFJc1VVRkJiRU03UVVGRFFVc3NWVUZCVFVZc1EwRkJUaXhGUVVGVFRTeExRVUZVTzBGQlEwUXNSenM3YTBKQlJVUkRMRTBzY1VKQlFWTTdRVUZCUVN4clFrRkRZeXhMUVVGTFdDeExRVVJ1UWp0QlFVRkJMRkZCUTBOSkxFTkJSRVFzVjBGRFEwRXNRMEZFUkR0QlFVRkJMRkZCUTBsRkxFdEJSRW9zVjBGRFNVRXNTMEZFU2pzN1FVRkZVRUVzVlVGQlRVWXNRMEZCVGl4RlFVRlRVU3hKUVVGVU8wRkJRMFFzUnpzN096czdhMEpCUjFrc1ZVRkJRMDRzUzBGQlJDeEZRVUZSVHl4VlFVRlNPMEZCUVVFc1UwRkJkVUlzU1VGQlNXUXNTMEZCU2l4RFFVRlZMRVZCUVVWUExGbEJRVVlzUlVGQlUwOHNjMEpCUVZRc1JVRkJWaXhEUVVGMlFqdEJRVUZCTEVNaUxDSm1hV3hsSWpvaVkyaGhhVzR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dkp6dGNibHh1WTJ4aGMzTWdRMmhoYVc0Z1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lITjFjR1Z5S0hCeWIzQnpLVHRjYmlBZ0lDQjBhR2x6TG5Cc1lYbE9aWGgwSUQwZ2RHaHBjeTV3YkdGNVRtVjRkQzVpYVc1a0tIUm9hWE1wTzF4dUlDQjlYRzVjYmlBZ2IyNVRkR0Z5ZENncElIdGNiaUFnSUNCMGFHbHpMbkJ5YjNCekxta2dQU0F3TzF4dUlDQWdJSFJvYVhNdWNHeGhlVU4xY25KbGJuUW9LVHRjYmlBZ2ZWeHVYRzRnSUhCc1lYbE9aWGgwS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYVN3Z2IzSmtaWElnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ2FXWWdLR2tnUENCdmNtUmxjaTVzWlc1bmRHZ2dMU0F4S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbkJ5YjNCekxta3JLenRjYmlBZ0lDQWdJSFJvYVhNdWNHeGhlVU4xY25KbGJuUW9LVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVqYjIxd2JHVjBaU2dwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhCc1lYbERkWEp5Wlc1MEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2FTd2diM0prWlhJZ2ZTQTlJSFJvYVhNdWNISnZjSE03WEc0Z0lDQWdiM0prWlhKYmFWMHVjSEp2Y0hNdVgyOXVRMjl0Y0d4bGRHVWdQU0IwYUdsekxuQnNZWGxPWlhoME8xeHVJQ0FnSUc5eVpHVnlXMmxkTG5OMFlYSjBLQ2s3WEc0Z0lIMWNibHh1SUNCdmJsTjBiM0FvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJwTENCdmNtUmxjaUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCdmNtUmxjbHRwWFM1emRHOXdLQ2s3WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0c5eVpHVnlMQ0J2YmtOdmJYQnNaWFJsS1NBOVBpQnVaWGNnUTJoaGFXNG9leUJ2Y21SbGNpd2diMjVEYjIxd2JHVjBaU0I5S1R0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2NoYWluLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R3ZWVuID0gcmVxdWlyZSgnLi90d2VlbicpO1xuXG52YXIgX3R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R3ZWVuKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4uL2luYy92YWx1ZS10eXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuICgwLCBfdHdlZW4yLmRlZmF1bHQpKF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGZyb206IDAsXG4gICAgdG86IDEsXG4gICAgb25VcGRhdGU6ICgwLCBfdHJhbnNmb3JtZXJzLmZsb3cpKCgwLCBfdHJhbnNmb3JtZXJzLmJsZW5kQ29sb3IpKHByb3BzLmZyb20sIHByb3BzLnRvKSwgX3ZhbHVlVHlwZXMuY29sb3IudHJhbnNmb3JtLCBwcm9wcy5vblVwZGF0ZSB8fCBub29wKVxuICB9KSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMk52Ykc5eUxYUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJJbTV2YjNBaUxDSndjbTl3Y3lJc0ltWnliMjBpTENKMGJ5SXNJbTl1VlhCa1lYUmxJaXdpZEhKaGJuTm1iM0p0SWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenRCUVVOQk96czdPMEZCUlVFc1NVRkJUVUVzVDBGQlR5eFpRVUZOTEVOQlFVVXNRMEZCY2tJN08ydENRVVZsTEZWQlFVTkRMRXRCUVVRc1JVRkJWenRCUVVONFFpeFRRVUZQTEd0RFFVTkdRU3hMUVVSRk8wRkJSVXhETEZWQlFVMHNRMEZHUkR0QlFVZE1ReXhSUVVGSkxFTkJTRU03UVVGSlRFTXNZMEZCVlN4M1FrRkRVaXc0UWtGQlYwZ3NUVUZCVFVNc1NVRkJha0lzUlVGQmRVSkVMRTFCUVUxRkxFVkJRVGRDTEVOQlJGRXNSVUZGVWl4clFrRkJUVVVzVTBGR1JTeEZRVWRTU2l4TlFVRk5SeXhSUVVGT0xFbEJRV3RDU2l4SlFVaFdPMEZCU2t3c1MwRkJVRHRCUVZWRUxFTWlMQ0ptYVd4bElqb2lZMjlzYjNJdGRIZGxaVzR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkSGRsWlc0Z1puSnZiU0FuTGk5MGQyVmxiaWM3WEc1cGJYQnZjblFnZXlCaWJHVnVaRU52Ykc5eUxDQm1iRzkzSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1J5WVc1elptOXliV1Z5Y3ljN1hHNXBiWEJ2Y25RZ2V5QmpiMnh2Y2lCOUlHWnliMjBnSnk0dUwybHVZeTkyWVd4MVpTMTBlWEJsY3ljN1hHNWNibU52Ym5OMElHNXZiM0FnUFNBb0tTQTlQaUI3ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tIQnliM0J6S1NBOVBpQjdYRzRnSUhKbGRIVnliaUIwZDJWbGJpaDdYRzRnSUNBZ0xpNHVjSEp2Y0hNc1hHNGdJQ0FnWm5KdmJUb2dNQ3hjYmlBZ0lDQjBiem9nTVN4Y2JpQWdJQ0J2YmxWd1pHRjBaVG9nWm14dmR5aGNiaUFnSUNBZ0lHSnNaVzVrUTI5c2IzSW9jSEp2Y0hNdVpuSnZiU3dnY0hKdmNITXVkRzhwTEZ4dUlDQWdJQ0FnWTI5c2IzSXVkSEpoYm5ObWIzSnRMRnh1SUNBZ0lDQWdjSEp2Y0hNdWIyNVZjR1JoZEdVZ2ZId2dibTl2Y0Z4dUlDQWdJQ2xjYmlBZ2ZTazdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY29sb3ItdHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDb21wb3NpdGVBY3Rpb24gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ29tcG9zaXRlQWN0aW9uLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBDb21wb3NpdGVBY3Rpb24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9zaXRlQWN0aW9uKTtcblxuICAgIHZhciBhY3Rpb25zID0gcHJvcHMuYWN0aW9ucyxcbiAgICAgICAgcmVtYWluaW5nUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsnYWN0aW9ucyddKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCByZW1haW5pbmdQcm9wcykpO1xuXG4gICAgX3RoaXMuY3VycmVudCA9IHt9O1xuICAgIF90aGlzLmFjdGlvbktleXMgPSBbXTtcbiAgICBfdGhpcy5hZGRBY3Rpb25zKHByb3BzLmFjdGlvbnMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIENvbXBvc2l0ZUFjdGlvbi5wcm90b3R5cGUuYWRkQWN0aW9ucyA9IGZ1bmN0aW9uIGFkZEFjdGlvbnMoYWN0aW9ucykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKF90aGlzMi5hY3Rpb25LZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgX3RoaXMyLmFjdGlvbktleXMucHVzaChrZXkpO1xuICAgICAgfVxuXG4gICAgICBfdGhpczJba2V5XSA9IGFjdGlvbnNba2V5XTtcblxuICAgICAgdmFyIG9uVXBkYXRlID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5jdXJyZW50W2tleV0gPSB2O1xuICAgICAgfTtcblxuICAgICAgLy8gSW1tZWRpYXRlbHkgdXBkYXRlIHdpdGggdGhlIGN1cnJlbnQgYWN0aW9uIHN0YXRlXG4gICAgICBvblVwZGF0ZShfdGhpczJba2V5XS5nZXQoKSk7XG5cbiAgICAgIF90aGlzMltrZXldLnNldFByb3BzKHtcbiAgICAgICAgX29uU3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIubnVtQWN0aXZlQWN0aW9ucy0tO1xuICAgICAgICB9XG4gICAgICB9KS5hZGRMaXN0ZW5lcihvblVwZGF0ZSk7XG4gICAgfTtcblxuICAgIGZvciAodmFyIGtleSBpbiBhY3Rpb25zKSB7XG4gICAgICBfbG9vcChrZXkpO1xuICAgIH1cbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLm9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gdGhpcy5hY3Rpb25LZXlzLmxlbmd0aDtcbiAgICB0aGlzLmFjdGlvbktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXMzW2tleV0uc3RhcnQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLm9uU3RvcCA9IGZ1bmN0aW9uIG9uU3RvcCgpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHRoaXMuYWN0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpczRba2V5XS5zdG9wKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29tcG9zaXRlQWN0aW9uLnByb3RvdHlwZS5nZXRWZWxvY2l0eSA9IGZ1bmN0aW9uIGdldFZlbG9jaXR5KCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIHZlbG9jaXR5ID0ge307XG4gICAgdGhpcy5hY3Rpb25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHZlbG9jaXR5W2tleV0gPSBfdGhpczVba2V5XS5nZXRWZWxvY2l0eSgpO1xuICAgIH0pO1xuICAgIHJldHVybiB2ZWxvY2l0eTtcbiAgfTtcblxuICBDb21wb3NpdGVBY3Rpb24ucHJvdG90eXBlLmlzQWN0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiBpc0FjdGlvbkNvbXBsZXRlKCkge1xuICAgIHJldHVybiB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPT09IDA7XG4gIH07XG5cbiAgcmV0dXJuIENvbXBvc2l0ZUFjdGlvbjtcbn0oXzIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhY3Rpb25zLCBwcm9wcykge1xuICByZXR1cm4gbmV3IENvbXBvc2l0ZUFjdGlvbihfZXh0ZW5kcyh7XG4gICAgYWN0aW9uczogYWN0aW9uc1xuICB9LCBwcm9wcykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOdmJYQnZjMmwwWlM1cWN5SmRMQ0p1WVcxbGN5STZXeUpEYjIxd2IzTnBkR1ZCWTNScGIyNGlMQ0p3Y205d2N5SXNJbUZqZEdsdmJuTWlMQ0p5WlcxaGFXNXBibWRRY205d2N5SXNJbU4xY25KbGJuUWlMQ0poWTNScGIyNUxaWGx6SWl3aVlXUmtRV04wYVc5dWN5SXNJbXRsZVNJc0ltbHVaR1Y0VDJZaUxDSndkWE5vSWl3aWIyNVZjR1JoZEdVaUxDSjJJaXdpWjJWMElpd2ljMlYwVUhKdmNITWlMQ0pmYjI1VGRHOXdJaXdpYm5WdFFXTjBhWFpsUVdOMGFXOXVjeUlzSW1Ga1pFeHBjM1JsYm1WeUlpd2liMjVUZEdGeWRDSXNJbXhsYm1kMGFDSXNJbVp2Y2tWaFkyZ2lMQ0p6ZEdGeWRDSXNJbTl1VTNSdmNDSXNJbk4wYjNBaUxDSm5aWFJXWld4dlkybDBlU0lzSW5abGJHOWphWFI1SWl3aWFYTkJZM1JwYjI1RGIyMXdiR1YwWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3T3pzN096czdPenM3T3pzN08wbEJSVTFCTEdVN096dEJRVU5LTERKQ1FVRlpReXhMUVVGYUxFVkJRVzFDTzBGQlFVRTdPMEZCUVVFc1VVRkRWRU1zVDBGRVV5eEhRVU56UWtRc1MwRkVkRUlzUTBGRFZFTXNUMEZFVXp0QlFVRkJMRkZCUTBkRExHTkJSRWdzTkVKQlEzTkNSaXhMUVVSMFFqczdRVUZCUVN4cFJFRkZha0lzYlVKQlFVMUZMR05CUVU0c1EwRkdhVUk3TzBGQlIycENMRlZCUVV0RExFOUJRVXdzUjBGQlpTeEZRVUZtTzBGQlEwRXNWVUZCUzBNc1ZVRkJUQ3hIUVVGclFpeEZRVUZzUWp0QlFVTkJMRlZCUVV0RExGVkJRVXdzUTBGQlowSk1MRTFCUVUxRExFOUJRWFJDTzBGQlRHbENPMEZCVFd4Q096czBRa0ZGUkVrc1ZTeDFRa0ZCVjBvc1R5eEZRVUZUTzBGQlFVRTdPMEZCUVVFc01FSkJRMUJMTEVkQlJFODdRVUZGYUVJc1ZVRkJTU3hQUVVGTFJpeFZRVUZNTEVOQlFXZENSeXhQUVVGb1FpeERRVUYzUWtRc1IwRkJlRUlzVFVGQmFVTXNRMEZCUXl4RFFVRjBReXhGUVVGNVF6dEJRVU4yUXl4bFFVRkxSaXhWUVVGTUxFTkJRV2RDU1N4SlFVRm9RaXhEUVVGeFFrWXNSMEZCY2tJN1FVRkRSRHM3UVVGRlJDeGhRVUZMUVN4SFFVRk1MRWxCUVZsTUxGRkJRVkZMTEVkQlFWSXNRMEZCV2pzN1FVRkZRU3hWUVVGTlJ5eFhRVUZYTEZWQlFVTkRMRU5CUVVRN1FVRkJRU3hsUVVGUExFOUJRVXRRTEU5QlFVd3NRMEZCWVVjc1IwRkJZaXhKUVVGdlFra3NRMEZCTTBJN1FVRkJRU3hQUVVGcVFqczdRVUZGUVR0QlFVTkJSQ3hsUVVGVExFOUJRVXRJTEVkQlFVd3NSVUZCVlVzc1IwRkJWaXhGUVVGVU96dEJRVVZCTEdGQlFVdE1MRWRCUVV3c1JVRkRSMDBzVVVGRVNDeERRVU5aTzBGQlExSkRMR2xDUVVGVE8wRkJRVUVzYVVKQlFVMHNUMEZCUzBNc1owSkJRVXdzUlVGQlRqdEJRVUZCTzBGQlJFUXNUMEZFV2l4RlFVbEhReXhYUVVwSUxFTkJTV1ZPTEZGQlNtWTdRVUZpWjBJN08wRkJRMnhDTEZOQlFVc3NTVUZCVFVnc1IwRkJXQ3hKUVVGclFrd3NUMEZCYkVJc1JVRkJNa0k3UVVGQlFTeFpRVUZvUWtzc1IwRkJaMEk3UVVGcFFqRkNPMEZCUTBZc1J6czdORUpCUlVSVkxFOHNjMEpCUVZVN1FVRkJRVHM3UVVGRFVpeFRRVUZMUml4blFrRkJUQ3hIUVVGM1FpeExRVUZMVml4VlFVRk1MRU5CUVdkQ1lTeE5RVUY0UXp0QlFVTkJMRk5CUVV0aUxGVkJRVXdzUTBGQlowSmpMRTlCUVdoQ0xFTkJRWGRDTEZWQlFVTmFMRWRCUVVRN1FVRkJRU3hoUVVGVExFOUJRVXRCTEVkQlFVd3NSVUZCVldFc1MwRkJWaXhGUVVGVU8wRkJRVUVzUzBGQmVFSTdRVUZEUkN4SE96czBRa0ZGUkVNc1RTeHhRa0ZCVXp0QlFVRkJPenRCUVVOUUxGTkJRVXRvUWl4VlFVRk1MRU5CUVdkQ1l5eFBRVUZvUWl4RFFVRjNRaXhWUVVGRFdpeEhRVUZFTzBGQlFVRXNZVUZCVXl4UFFVRkxRU3hIUVVGTUxFVkJRVlZsTEVsQlFWWXNSVUZCVkR0QlFVRkJMRXRCUVhoQ08wRkJRMFFzUnpzN05FSkJSVVJETEZjc01FSkJRV003UVVGQlFUczdRVUZEV2l4UlFVRk5ReXhYUVVGWExFVkJRV3BDTzBGQlEwRXNVMEZCUzI1Q0xGVkJRVXdzUTBGQlowSmpMRTlCUVdoQ0xFTkJRWGRDTEZWQlFVTmFMRWRCUVVRN1FVRkJRU3hoUVVGVGFVSXNVMEZCVTJwQ0xFZEJRVlFzU1VGQlowSXNUMEZCUzBFc1IwRkJUQ3hGUVVGVlowSXNWMEZCVml4RlFVRjZRanRCUVVGQkxFdEJRWGhDTzBGQlEwRXNWMEZCVDBNc1VVRkJVRHRCUVVORUxFYzdPelJDUVVWRVF5eG5RaXdyUWtGQmJVSTdRVUZEYWtJc1YwRkJVU3hMUVVGTFZpeG5Ra0ZCVEN4TFFVRXdRaXhEUVVGc1F6dEJRVU5FTEVjN096czdPMnRDUVVkWkxGVkJRVU5pTEU5QlFVUXNSVUZCVlVRc1MwRkJWaXhGUVVGdlFqdEJRVU5xUXl4VFFVRlBMRWxCUVVsRUxHVkJRVW83UVVGRFRFVTdRVUZFU3l4TFFVVkdSQ3hMUVVaRkxFVkJRVkE3UVVGSlJDeERJaXdpWm1sc1pTSTZJbU52YlhCdmMybDBaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk4bk8xeHVYRzVqYkdGemN5QkRiMjF3YjNOcGRHVkJZM1JwYjI0Z1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1lXTjBhVzl1Y3l3Z0xpNHVjbVZ0WVdsdWFXNW5VSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0FnSUhOMWNHVnlLSEpsYldGcGJtbHVaMUJ5YjNCektUdGNiaUFnSUNCMGFHbHpMbU4xY25KbGJuUWdQU0I3ZlR0Y2JpQWdJQ0IwYUdsekxtRmpkR2x2Ymt0bGVYTWdQU0JiWFR0Y2JpQWdJQ0IwYUdsekxtRmtaRUZqZEdsdmJuTW9jSEp2Y0hNdVlXTjBhVzl1Y3lrN1hHNGdJSDFjYmx4dUlDQmhaR1JCWTNScGIyNXpLR0ZqZEdsdmJuTXBJSHRjYmlBZ0lDQm1iM0lnS0dOdmJuTjBJR3RsZVNCcGJpQmhZM1JwYjI1ektTQjdYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NWhZM1JwYjI1TFpYbHpMbWx1WkdWNFQyWW9hMlY1S1NBOVBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoWTNScGIyNUxaWGx6TG5CMWMyZ29hMlY1S1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2RHaHBjMXRyWlhsZElEMGdZV04wYVc5dWMxdHJaWGxkTzF4dVhHNGdJQ0FnSUNCamIyNXpkQ0J2YmxWd1pHRjBaU0E5SUNoMktTQTlQaUIwYUdsekxtTjFjbkpsYm5SYmEyVjVYU0E5SUhZN1hHNWNiaUFnSUNBZ0lDOHZJRWx0YldWa2FXRjBaV3g1SUhWd1pHRjBaU0IzYVhSb0lIUm9aU0JqZFhKeVpXNTBJR0ZqZEdsdmJpQnpkR0YwWlZ4dUlDQWdJQ0FnYjI1VmNHUmhkR1VvZEdocGMxdHJaWGxkTG1kbGRDZ3BLVHRjYmx4dUlDQWdJQ0FnZEdocGMxdHJaWGxkWEc0Z0lDQWdJQ0FnSUM1elpYUlFjbTl3Y3loN1hHNGdJQ0FnSUNBZ0lDQWdYMjl1VTNSdmNEb2dLQ2tnUFQ0Z2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpMUzFjYmlBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ0xtRmtaRXhwYzNSbGJtVnlLRzl1VlhCa1lYUmxLVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J2YmxOMFlYSjBLQ2tnZTF4dUlDQWdJSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lBOUlIUm9hWE11WVdOMGFXOXVTMlY1Y3k1c1pXNW5kR2c3WEc0Z0lDQWdkR2hwY3k1aFkzUnBiMjVMWlhsekxtWnZja1ZoWTJnb0tHdGxlU2tnUFQ0Z2RHaHBjMXRyWlhsZExuTjBZWEowS0NrcE8xeHVJQ0I5WEc1Y2JpQWdiMjVUZEc5d0tDa2dlMXh1SUNBZ0lIUm9hWE11WVdOMGFXOXVTMlY1Y3k1bWIzSkZZV05vS0NoclpYa3BJRDArSUhSb2FYTmJhMlY1WFM1emRHOXdLQ2twTzF4dUlDQjlYRzVjYmlBZ1oyVjBWbVZzYjJOcGRIa29LU0I3WEc0Z0lDQWdZMjl1YzNRZ2RtVnNiMk5wZEhrZ1BTQjdmVHRjYmlBZ0lDQjBhR2x6TG1GamRHbHZia3RsZVhNdVptOXlSV0ZqYUNnb2EyVjVLU0E5UGlCMlpXeHZZMmwwZVZ0clpYbGRJRDBnZEdocGMxdHJaWGxkTG1kbGRGWmxiRzlqYVhSNUtDa3BPMXh1SUNBZ0lISmxkSFZ5YmlCMlpXeHZZMmwwZVR0Y2JpQWdmVnh1WEc0Z0lHbHpRV04wYVc5dVEyOXRjR3hsZEdVb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUNoMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTWdQVDA5SURBcE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaGhZM1JwYjI1ekxDQndjbTl3Y3lrZ1BUNGdlMXh1SUNCeVpYUjFjbTRnYm1WM0lFTnZiWEJ2YzJsMFpVRmpkR2x2YmloN1hHNGdJQ0FnWVdOMGFXOXVjeXhjYmlBZ0lDQXVMaTV3Y205d2MxeHVJQ0I5S1R0Y2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9jb21wb3NpdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF90d2VlbiA9IHJlcXVpcmUoJy4vdHdlZW4nKTtcblxudmFyIF90d2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90d2Vlbik7XG5cbnZhciBfZWFzaW5nID0gcmVxdWlyZSgnLi4vaW5jL2Vhc2luZycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDcm9zc0ZhZGUgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoQ3Jvc3NGYWRlLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBDcm9zc0ZhZGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENyb3NzRmFkZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENyb3NzRmFkZS5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uID0gX3Byb3BzLmR1cmF0aW9uLFxuICAgICAgICBlYXNlID0gX3Byb3BzLmVhc2UsXG4gICAgICAgIGZhZGVyID0gX3Byb3BzLmZhZGVyO1xuXG5cbiAgICB0aGlzLmZhZGVyID0gZmFkZXIgfHwgKDAsIF90d2VlbjIuZGVmYXVsdCkoe1xuICAgICAgdG86IDEsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBlYXNlOiBlYXNlXG4gICAgfSkuc3RhcnQoKTtcbiAgfTtcblxuICBDcm9zc0ZhZGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGZyb20gPSBfcHJvcHMyLmZyb20sXG4gICAgICAgIHRvID0gX3Byb3BzMi50bztcblxuICAgIHZhciBiYWxhbmNlID0gdGhpcy5mYWRlci5nZXQoKTtcbiAgICB2YXIgbGF0ZXN0RnJvbVZhbHVlID0gZnJvbS5nZXQoKTtcbiAgICB2YXIgbGF0ZXN0VG9WYWx1ZSA9IHRvLmdldCgpO1xuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGxhdGVzdEZyb21WYWx1ZSwgbGF0ZXN0VG9WYWx1ZSwgYmFsYW5jZSk7XG4gIH07XG5cbiAgcmV0dXJuIENyb3NzRmFkZTtcbn0oXzIuZGVmYXVsdCk7XG5cbkNyb3NzRmFkZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGVhc2U6IF9lYXNpbmcubGluZWFyXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDcm9zc0ZhZGUocHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJOeWIzTnpMV1poWkdVdWFuTWlYU3dpYm1GdFpYTWlPbHNpUTNKdmMzTkdZV1JsSWl3aWIyNVRkR0Z5ZENJc0luQnliM0J6SWl3aVpIVnlZWFJwYjI0aUxDSmxZWE5sSWl3aVptRmtaWElpTENKMGJ5SXNJbk4wWVhKMElpd2lkWEJrWVhSbElpd2labkp2YlNJc0ltSmhiR0Z1WTJVaUxDSm5aWFFpTENKc1lYUmxjM1JHY205dFZtRnNkV1VpTENKc1lYUmxjM1JVYjFaaGJIVmxJaXdpWkdWbVlYVnNkRkJ5YjNCeklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenRCUVVOQk96czdPenM3T3pzN08wbEJSVTFCTEZNN096czdPenM3T3p0elFrRkxTa01zVHl4elFrRkJWVHRCUVVGQkxHbENRVU13UWl4TFFVRkxReXhMUVVRdlFqdEJRVUZCTEZGQlEwRkRMRkZCUkVFc1ZVRkRRVUVzVVVGRVFUdEJRVUZCTEZGQlExVkRMRWxCUkZZc1ZVRkRWVUVzU1VGRVZqdEJRVUZCTEZGQlEyZENReXhMUVVSb1FpeFZRVU5uUWtFc1MwRkVhRUk3T3p0QlFVZFNMRk5CUVV0QkxFdEJRVXdzUjBGQllVRXNVMEZCVXl4eFFrRkJUVHRCUVVNeFFrTXNWVUZCU1N4RFFVUnpRanRCUVVVeFFrZ3NkMEpCUmpCQ08wRkJSekZDUXp0QlFVZ3dRaXhMUVVGT0xFVkJTVzVDUnl4TFFVcHRRaXhGUVVGMFFqdEJRVXRFTEVjN08zTkNRVVZFUXl4TkxIRkNRVUZUTzBGQlFVRXNhMEpCUTJNc1MwRkJTMDRzUzBGRWJrSTdRVUZCUVN4UlFVTkRUeXhKUVVSRUxGZEJRME5CTEVsQlJFUTdRVUZCUVN4UlFVTlBTQ3hGUVVSUUxGZEJRMDlCTEVWQlJGQTdPMEZCUlZBc1VVRkJUVWtzVlVGQlZTeExRVUZMVEN4TFFVRk1MRU5CUVZkTkxFZEJRVmdzUlVGQmFFSTdRVUZEUVN4UlFVRk5ReXhyUWtGQmEwSklMRXRCUVV0RkxFZEJRVXdzUlVGQmVFSTdRVUZEUVN4UlFVRk5SU3huUWtGQlowSlFMRWRCUVVkTExFZEJRVWdzUlVGQmRFSTdRVUZEUVN4WFFVRlBMR2REUVVGeFFrTXNaVUZCY2tJc1JVRkJjME5ETEdGQlFYUkRMRVZCUVhGRVNDeFBRVUZ5UkN4RFFVRlFPMEZCUTBRc1J6czdPenM3UVVGeVFrZFdMRk1zUTBGRFIyTXNXU3hIUVVGbE8wRkJRM0JDVmp0QlFVUnZRaXhET3p0clFrRjFRbFFzVlVGQlEwWXNTMEZCUkR0QlFVRkJMRk5CUVZjc1NVRkJTVVlzVTBGQlNpeERRVUZqUlN4TFFVRmtMRU5CUVZnN1FVRkJRU3hESWl3aVptbHNaU0k2SW1OeWIzTnpMV1poWkdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZKenRjYm1sdGNHOXlkQ0IwZDJWbGJpQm1jbTl0SUNjdUwzUjNaV1Z1Snp0Y2JtbHRjRzl5ZENCN0lHeHBibVZoY2lCOUlHWnliMjBnSnk0dUwybHVZeTlsWVhOcGJtY25PMXh1YVcxd2IzSjBJSHNnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVjYm1Oc1lYTnpJRU55YjNOelJtRmtaU0JsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzRnSUhOMFlYUnBZeUJrWldaaGRXeDBVSEp2Y0hNZ1BTQjdYRzRnSUNBZ1pXRnpaVG9nYkdsdVpXRnlYRzRnSUgxY2JseHVJQ0J2YmxOMFlYSjBLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2daSFZ5WVhScGIyNHNJR1ZoYzJVc0lHWmhaR1Z5SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdkR2hwY3k1bVlXUmxjaUE5SUdaaFpHVnlJSHg4SUhSM1pXVnVLSHRjYmlBZ0lDQWdJSFJ2T2lBeExGeHVJQ0FnSUNBZ1pIVnlZWFJwYjI0c1hHNGdJQ0FnSUNCbFlYTmxYRzRnSUNBZ2ZTa3VjM1JoY25Rb0tUdGNiaUFnZlZ4dVhHNGdJSFZ3WkdGMFpTZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHWnliMjBzSUhSdklIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR052Ym5OMElHSmhiR0Z1WTJVZ1BTQjBhR2x6TG1aaFpHVnlMbWRsZENncE8xeHVJQ0FnSUdOdmJuTjBJR3hoZEdWemRFWnliMjFXWVd4MVpTQTlJR1p5YjIwdVoyVjBLQ2s3WEc0Z0lDQWdZMjl1YzNRZ2JHRjBaWE4wVkc5V1lXeDFaU0E5SUhSdkxtZGxkQ2dwTzF4dUlDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWhzWVhSbGMzUkdjbTl0Vm1Gc2RXVXNJR3hoZEdWemRGUnZWbUZzZFdVc0lHSmhiR0Z1WTJVcE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaHdjbTl3Y3lrZ1BUNGdibVYzSUVOeWIzTnpSbUZrWlNod2NtOXdjeWs3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvY3Jvc3MtZmFkZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHdlZW4gPSByZXF1aXJlKCcuL3R3ZWVuJyk7XG5cbnZhciBfdHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHdlZW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZHVyYXRpb24sIG9uQ29tcGxldGUpIHtcbiAgcmV0dXJuICgwLCBfdHdlZW4yLmRlZmF1bHQpKHsgZHVyYXRpb246IGR1cmF0aW9uLCBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJSbGJHRjVMbXB6SWwwc0ltNWhiV1Z6SWpwYkltUjFjbUYwYVc5dUlpd2liMjVEYjIxd2JHVjBaU0pkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPenM3YTBKQlJXVXNWVUZCUTBFc1VVRkJSQ3hGUVVGWFF5eFZRVUZZTzBGQlFVRXNVMEZCTUVJc2NVSkJRVTBzUlVGQlJVUXNhMEpCUVVZc1JVRkJXVU1zYzBKQlFWb3NSVUZCVGl4RFFVRXhRanRCUVVGQkxFTWlMQ0ptYVd4bElqb2laR1ZzWVhrdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZEhkbFpXNGdabkp2YlNBbkxpOTBkMlZsYmljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaGtkWEpoZEdsdmJpd2diMjVEYjIxd2JHVjBaU2tnUFQ0Z2RIZGxaVzRvZXlCa2RYSmhkR2x2Yml3Z2IyNURiMjF3YkdWMFpTQjlLVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZGVsYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgXyA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBhcmFsbGVsID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFBhcmFsbGVsLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBQYXJhbGxlbCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFyYWxsZWwpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBQYXJhbGxlbC5wcm90b3R5cGUub25TdGFydCA9IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgYWN0aW9ucyA9IHRoaXMucHJvcHMuYWN0aW9ucztcblxuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IGFjdGlvbnMubGVuZ3RoO1xuXG4gICAgYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIGFjdGlvbi5zZXRQcm9wcyh7XG4gICAgICAgIF9vblN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUub25TdG9wID0gZnVuY3Rpb24gb25TdG9wKCkge1xuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgIHJldHVybiBhY3Rpb24uc3RvcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIFBhcmFsbGVsLnByb3RvdHlwZS5hZGRBY3Rpb24gPSBmdW5jdGlvbiBhZGRBY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIGFjdGlvbnMgPSB0aGlzLnByb3BzLmFjdGlvbnM7XG5cblxuICAgIGlmIChhY3Rpb25zLmluZGV4T2YoYWN0aW9uKSA9PT0gLTEpIHtcbiAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICBQYXJhbGxlbC5wcm90b3R5cGUuaXNBY3Rpb25Db21wbGV0ZSA9IGZ1bmN0aW9uIGlzQWN0aW9uQ29tcGxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9PT0gMDtcbiAgfTtcblxuICByZXR1cm4gUGFyYWxsZWw7XG59KF8yLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBQYXJhbGxlbChfZXh0ZW5kcyh7IGFjdGlvbnM6IGFjdGlvbnMgfSwgcHJvcHMpKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzQmhjbUZzYkdWc0xtcHpJbDBzSW01aGJXVnpJanBiSWxCaGNtRnNiR1ZzSWl3aWIyNVRkR0Z5ZENJc0ltRmpkR2x2Ym5NaUxDSndjbTl3Y3lJc0ltNTFiVUZqZEdsMlpVRmpkR2x2Ym5NaUxDSnNaVzVuZEdnaUxDSm1iM0pGWVdOb0lpd2lZV04wYVc5dUlpd2ljMlYwVUhKdmNITWlMQ0pmYjI1VGRHOXdJaXdpYzNSaGNuUWlMQ0p2YmxOMGIzQWlMQ0p6ZEc5d0lpd2lZV1JrUVdOMGFXOXVJaXdpYVc1a1pYaFBaaUlzSW5CMWMyZ2lMQ0pwYzBGamRHbHZia052YlhCc1pYUmxJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenM3T3pzN096czdPMGxCUlUxQkxGRTdPenM3T3pzN096dHhRa0ZEU2tNc1R5eHpRa0ZCVlR0QlFVRkJPenRCUVVGQkxGRkJRMEZETEU5QlJFRXNSMEZEV1N4TFFVRkxReXhMUVVScVFpeERRVU5CUkN4UFFVUkJPenRCUVVWU0xGTkJRVXRGTEdkQ1FVRk1MRWRCUVhkQ1JpeFJRVUZSUnl4TlFVRm9RenM3UVVGRlFVZ3NXVUZCVVVrc1QwRkJVaXhEUVVGblFpeFZRVUZEUXl4TlFVRkVMRVZCUVZrN1FVRkRNVUpCTEdGQlFVOURMRkZCUVZBc1EwRkJaMEk3UVVGRFpFTXNhVUpCUVZNN1FVRkJRU3hwUWtGQlRTeFBRVUZMVEN4blFrRkJUQ3hGUVVGT08wRkJRVUU3UVVGRVN5eFBRVUZvUWl4RlFVVkhUU3hMUVVaSU8wRkJSMFFzUzBGS1JEdEJRVXRFTEVjN08zRkNRVVZFUXl4TkxIRkNRVUZUTzBGQlExQXNVMEZCUzFJc1MwRkJUQ3hEUVVGWFJDeFBRVUZZTEVOQlFXMUNTU3hQUVVGdVFpeERRVUV5UWl4VlFVRkRReXhOUVVGRU8wRkJRVUVzWVVGQldVRXNUMEZCVDBzc1NVRkJVQ3hGUVVGYU8wRkJRVUVzUzBGQk0wSTdRVUZEUkN4SE96dHhRa0ZGUkVNc1V5eHpRa0ZCVlU0c1RTeEZRVUZSTzBGQlFVRXNVVUZEVWt3c1QwRkVVU3hIUVVOSkxFdEJRVXRETEV0QlJGUXNRMEZEVWtRc1QwRkVVVHM3TzBGQlIyaENMRkZCUVVsQkxGRkJRVkZaTEU5QlFWSXNRMEZCWjBKUUxFMUJRV2hDTEUxQlFUUkNMRU5CUVVNc1EwRkJha01zUlVGQmIwTTdRVUZEYkVOTUxHTkJRVkZoTEVsQlFWSXNRMEZCWVZJc1RVRkJZanRCUVVORU8wRkJRMFlzUnpzN2NVSkJSVVJUTEdkQ0xDdENRVUZ0UWp0QlFVTnFRaXhYUVVGUkxFdEJRVXRhTEdkQ1FVRk1MRXRCUVRCQ0xFTkJRV3hETzBGQlEwUXNSenM3T3pzN2EwSkJSMWtzVlVGQlEwWXNUMEZCUkN4RlFVRlZReXhMUVVGV08wRkJRVUVzVTBGQmIwSXNTVUZCU1Vnc1VVRkJTaXhaUVVGbFJTeG5Ra0ZCWml4SlFVRXlRa01zUzBGQk0wSXNSVUZCY0VJN1FVRkJRU3hESWl3aVptbHNaU0k2SW5CaGNtRnNiR1ZzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUx5YzdYRzVjYm1Oc1lYTnpJRkJoY21Gc2JHVnNJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYjI1VGRHRnlkQ2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR0ZqZEdsdmJuTWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1eklEMGdZV04wYVc5dWN5NXNaVzVuZEdnN1hHNWNiaUFnSUNCaFkzUnBiMjV6TG1admNrVmhZMmdvS0dGamRHbHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ1lXTjBhVzl1TG5ObGRGQnliM0J6S0h0Y2JpQWdJQ0FnSUNBZ1gyOXVVM1J2Y0RvZ0tDa2dQVDRnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1ekxTMWNiaUFnSUNBZ0lIMHBMbk4wWVhKMEtDazdYRzRnSUNBZ2ZTazdYRzRnSUgxY2JseHVJQ0J2YmxOMGIzQW9LU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdjeTVoWTNScGIyNXpMbVp2Y2tWaFkyZ29LR0ZqZEdsdmJpa2dQVDRnWVdOMGFXOXVMbk4wYjNBb0tTazdYRzRnSUgxY2JseHVJQ0JoWkdSQlkzUnBiMjRvWVdOMGFXOXVLU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmhZM1JwYjI1eklIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tHRmpkR2x2Ym5NdWFXNWtaWGhQWmloaFkzUnBiMjRwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnWVdOMGFXOXVjeTV3ZFhOb0tHRmpkR2x2YmlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FYTkJZM1JwYjI1RGIyMXdiR1YwWlNncElIdGNiaUFnSUNCeVpYUjFjbTRnS0hSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5QTlQVDBnTUNrN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHRmpkR2x2Ym5Nc0lIQnliM0J6S1NBOVBpQnVaWGNnVUdGeVlXeHNaV3dvZXlCaFkzUnBiMjV6TENBdUxpNXdjbTl3Y3lCOUtUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wYXJhbGxlbC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGh5c2ljcyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQaHlzaWNzLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBQaHlzaWNzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaHlzaWNzKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUGh5c2ljcy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhdXRvU3RvcFNwZWVkID0gX3Byb3BzLmF1dG9TdG9wU3BlZWQsXG4gICAgICAgIGFjY2VsZXJhdGlvbiA9IF9wcm9wcy5hY2NlbGVyYXRpb24sXG4gICAgICAgIGZyaWN0aW9uID0gX3Byb3BzLmZyaWN0aW9uLFxuICAgICAgICB2ZWxvY2l0eSA9IF9wcm9wcy52ZWxvY2l0eSxcbiAgICAgICAgc3ByaW5nID0gX3Byb3BzLnNwcmluZyxcbiAgICAgICAgdG8gPSBfcHJvcHMudG87XG5cbiAgICB2YXIgbmV3VmVsb2NpdHkgPSB2ZWxvY2l0eTtcbiAgICB2YXIgZWxhcHNlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcblxuICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvbiB0byB2ZWxvY2l0eVxuICAgIGlmIChhY2NlbGVyYXRpb24pIHtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShhY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGZyaWN0aW9uIHRvIHZlbG9jaXR5XG4gICAgaWYgKGZyaWN0aW9uKSB7XG4gICAgICBuZXdWZWxvY2l0eSAqPSBNYXRoLnBvdygxIC0gZnJpY3Rpb24sIGVsYXBzZWQgLyAxMDApO1xuICAgIH1cblxuICAgIGlmIChzcHJpbmcgJiYgdG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGRpc3RhbmNlVG9UYXJnZXQgPSB0byAtIHRoaXMuY3VycmVudDtcbiAgICAgIG5ld1ZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkoc3ByaW5nLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB2ZWxvY2l0eVxuICAgIHRoaXMuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkobmV3VmVsb2NpdHksIGVsYXBzZWQpO1xuICAgIHRoaXMucHJvcHMudmVsb2NpdHkgPSBuZXdWZWxvY2l0eTtcblxuICAgIC8vIENoZWNrIGlmIHNpbXVsYXRpb24gaXMgY29tcGxldGVcbiAgICAvLyBXZSBkbyB0aGlzIGhlcmUgaW5zdGVhZCBvZiBgaXNBY3Rpb25Db21wbGV0ZWAgYXMgaXQgYWxsb3dzIHVzXG4gICAgLy8gdG8gY2xhbXAgZHVyaW5nIHRoaXMgdXBkYXRlXG4gICAgdGhpcy5pc0NvbXBsZXRlID0gYXV0b1N0b3BTcGVlZCAhPT0gZmFsc2UgJiYgKCFuZXdWZWxvY2l0eSB8fCBNYXRoLmFicyhuZXdWZWxvY2l0eSkgPD0gYXV0b1N0b3BTcGVlZCk7XG5cbiAgICBpZiAodGhpcy5pc0NvbXBsZXRlICYmIHNwcmluZykge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdG87XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBQaHlzaWNzLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlO1xuICB9O1xuXG4gIHJldHVybiBQaHlzaWNzO1xufShfMi5kZWZhdWx0KTtcblxuUGh5c2ljcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjY2VsZXJhdGlvbjogMCxcbiAgZnJpY3Rpb246IDAsXG4gIHZlbG9jaXR5OiAwLFxuICBhdXRvU3RvcFNwZWVkOiAwLjAwMVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgUGh5c2ljcyhwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM0JvZVhOcFkzTXVhbk1pWFN3aWJtRnRaWE1pT2xzaVVHaDVjMmxqY3lJc0luVndaR0YwWlNJc0luQnliM0J6SWl3aVlYVjBiMU4wYjNCVGNHVmxaQ0lzSW1GalkyVnNaWEpoZEdsdmJpSXNJbVp5YVdOMGFXOXVJaXdpZG1Wc2IyTnBkSGtpTENKemNISnBibWNpTENKMGJ5SXNJbTVsZDFabGJHOWphWFI1SWl3aVpXeGhjSE5sWkNJc0luVnVaR1ZtYVc1bFpDSXNJbVJwYzNSaGJtTmxWRzlVWVhKblpYUWlMQ0pqZFhKeVpXNTBJaXdpYVhORGIyMXdiR1YwWlNJc0lrMWhkR2dpTENKaFluTWlMQ0pwYzBGamRHbHZia052YlhCc1pYUmxJaXdpWkdWbVlYVnNkRkJ5YjNCeklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3UVVGRFFUczdPenM3T3pzN096dEpRVVZOUVN4UE96czdPenM3T3pzN2IwSkJVVXBETEUwc2NVSkJRVk03UVVGQlFTeHBRa0ZEYVVVc1MwRkJTME1zUzBGRWRFVTdRVUZCUVN4UlFVTkRReXhoUVVSRUxGVkJRME5CTEdGQlJFUTdRVUZCUVN4UlFVTm5Ra01zV1VGRWFFSXNWVUZEWjBKQkxGbEJSR2hDTzBGQlFVRXNVVUZET0VKRExGRkJSRGxDTEZWQlF6aENRU3hSUVVRNVFqdEJRVUZCTEZGQlEzZERReXhSUVVSNFF5eFZRVU4zUTBFc1VVRkVlRU03UVVGQlFTeFJRVU5yUkVNc1RVRkViRVFzVlVGRGEwUkJMRTFCUkd4RU8wRkJRVUVzVVVGRE1FUkRMRVZCUkRGRUxGVkJRekJFUVN4RlFVUXhSRHM3UVVGRlVDeFJRVUZKUXl4alFVRmpTQ3hSUVVGc1FqdEJRVU5CTEZGQlFVMUpMRlZCUVZVc2IwTkJRV2hDT3p0QlFVVkJPMEZCUTBFc1VVRkJTVTRzV1VGQlNpeEZRVUZyUWp0QlFVTm9Ra3NzY1VKQlFXVXNlVUpCUVdOTUxGbEJRV1FzUlVGQk5FSk5MRTlCUVRWQ0xFTkJRV1k3UVVGRFJEczdRVUZGUkR0QlFVTkJMRkZCUVVsTUxGRkJRVW9zUlVGQll6dEJRVU5hU1N3NFFrRkJaMElzU1VGQlNVb3NVVUZCY0VJc1JVRkJhME5MTEZWQlFWVXNSMEZCTlVNN1FVRkRSRHM3UVVGRlJDeFJRVUZKU0N4VlFVRlZReXhQUVVGUFJ5eFRRVUZ5UWl4RlFVRm5RenRCUVVNNVFpeFZRVUZOUXl4dFFrRkJiVUpLTEV0QlFVc3NTMEZCUzBzc1QwRkJia003UVVGRFFVb3NjVUpCUVdWSExHMUNRVUZ0UWl4NVFrRkJZMHdzVFVGQlpDeEZRVUZ6UWtjc1QwRkJkRUlzUTBGQmJFTTdRVUZEUkRzN1FVRkZSRHRCUVVOQkxGTkJRVXRITEU5QlFVd3NTVUZCWjBJc2VVSkJRV05LTEZkQlFXUXNSVUZCTWtKRExFOUJRVE5DTEVOQlFXaENPMEZCUTBFc1UwRkJTMUlzUzBGQlRDeERRVUZYU1N4UlFVRllMRWRCUVhOQ1J5eFhRVUYwUWpzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZMU3l4VlFVRk1MRWRCUVcxQ1dDeHJRa0ZCYTBJc1MwRkJiRUlzUzBGQk5FSXNRMEZCUTAwc1YwRkJSQ3hKUVVGblFrMHNTMEZCUzBNc1IwRkJUQ3hEUVVGVFVDeFhRVUZVTEV0QlFYbENUaXhoUVVGeVJTeERRVUZ1UWpzN1FVRkZRU3hSUVVGSkxFdEJRVXRYTEZWQlFVd3NTVUZCYlVKUUxFMUJRWFpDTEVWQlFTdENPMEZCUXpkQ0xGZEJRVXROTEU5QlFVd3NSMEZCWlV3c1JVRkJaanRCUVVORU96dEJRVVZFTEZkQlFVOHNTMEZCUzBzc1QwRkJXanRCUVVORUxFYzdPMjlDUVVWRVNTeG5RaXdyUWtGQmJVSTdRVUZEYWtJc1YwRkJUeXhMUVVGTFNDeFZRVUZhTzBGQlEwUXNSenM3T3pzN1FVRTVRMGRrTEU4c1EwRkRSMnRDTEZrc1IwRkJaVHRCUVVOd1FtUXNaMEpCUVdNc1EwRkVUVHRCUVVWd1FrTXNXVUZCVlN4RFFVWlZPMEZCUjNCQ1F5eFpRVUZWTEVOQlNGVTdRVUZKY0VKSUxHbENRVUZsTzBGQlNrc3NRenM3YTBKQlowUlVMRlZCUVVORUxFdEJRVVE3UVVGQlFTeFRRVUZYTEVsQlFVbEdMRTlCUVVvc1EwRkJXVVVzUzBGQldpeERRVUZZTzBGQlFVRXNReUlzSW1acGJHVWlPaUp3YUhsemFXTnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNXBiWEJ2Y25RZ2V5QjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVWdmU0JtY205dElDY3VMaTltY21GdFpYTjVibU1uTzF4dWFXMXdiM0owSUhzZ2MzQmxaV1JRWlhKR2NtRnRaU0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVZMnhoYzNNZ1VHaDVjMmxqY3lCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lITjBZWFJwWXlCa1pXWmhkV3gwVUhKdmNITWdQU0I3WEc0Z0lDQWdZV05qWld4bGNtRjBhVzl1T2lBd0xGeHVJQ0FnSUdaeWFXTjBhVzl1T2lBd0xGeHVJQ0FnSUhabGJHOWphWFI1T2lBd0xGeHVJQ0FnSUdGMWRHOVRkRzl3VTNCbFpXUTZJREF1TURBeFhHNGdJSDFjYmx4dUlDQjFjR1JoZEdVb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCaGRYUnZVM1J2Y0ZOd1pXVmtMQ0JoWTJObGJHVnlZWFJwYjI0c0lHWnlhV04wYVc5dUxDQjJaV3h2WTJsMGVTd2djM0J5YVc1bkxDQjBieUI5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCc1pYUWdibVYzVm1Wc2IyTnBkSGtnUFNCMlpXeHZZMmwwZVR0Y2JpQWdJQ0JqYjI1emRDQmxiR0Z3YzJWa0lEMGdkR2x0WlZOcGJtTmxUR0Z6ZEVaeVlXMWxLQ2s3WEc1Y2JpQWdJQ0F2THlCQmNIQnNlU0JoWTJObGJHVnlZWFJwYjI0Z2RHOGdkbVZzYjJOcGRIbGNiaUFnSUNCcFppQW9ZV05qWld4bGNtRjBhVzl1S1NCN1hHNGdJQ0FnSUNCdVpYZFdaV3h2WTJsMGVTQXJQU0J6Y0dWbFpGQmxja1p5WVcxbEtHRmpZMlZzWlhKaGRHbHZiaXdnWld4aGNITmxaQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnUVhCd2JIa2dabkpwWTNScGIyNGdkRzhnZG1Wc2IyTnBkSGxjYmlBZ0lDQnBaaUFvWm5KcFkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUc1bGQxWmxiRzlqYVhSNUlDbzlJQ2d4SUMwZ1puSnBZM1JwYjI0cElDb3FJQ2hsYkdGd2MyVmtJQzhnTVRBd0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9jM0J5YVc1bklDWW1JSFJ2SUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJR052Ym5OMElHUnBjM1JoYm1ObFZHOVVZWEpuWlhRZ1BTQjBieUF0SUhSb2FYTXVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lHNWxkMVpsYkc5amFYUjVJQ3M5SUdScGMzUmhibU5sVkc5VVlYSm5aWFFnS2lCemNHVmxaRkJsY2taeVlXMWxLSE53Y21sdVp5d2daV3hoY0hObFpDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdRWEJ3YkhrZ2RtVnNiMk5wZEhsY2JpQWdJQ0IwYUdsekxtTjFjbkpsYm5RZ0t6MGdjM0JsWldSUVpYSkdjbUZ0WlNodVpYZFdaV3h2WTJsMGVTd2daV3hoY0hObFpDazdYRzRnSUNBZ2RHaHBjeTV3Y205d2N5NTJaV3h2WTJsMGVTQTlJRzVsZDFabGJHOWphWFI1TzF4dVhHNGdJQ0FnTHk4Z1EyaGxZMnNnYVdZZ2MybHRkV3hoZEdsdmJpQnBjeUJqYjIxd2JHVjBaVnh1SUNBZ0lDOHZJRmRsSUdSdklIUm9hWE1nYUdWeVpTQnBibk4wWldGa0lHOW1JR0JwYzBGamRHbHZia052YlhCc1pYUmxZQ0JoY3lCcGRDQmhiR3h2ZDNNZ2RYTmNiaUFnSUNBdkx5QjBieUJqYkdGdGNDQmtkWEpwYm1jZ2RHaHBjeUIxY0dSaGRHVmNiaUFnSUNCMGFHbHpMbWx6UTI5dGNHeGxkR1VnUFNBb1lYVjBiMU4wYjNCVGNHVmxaQ0FoUFQwZ1ptRnNjMlVnSmlZZ0tDRnVaWGRXWld4dlkybDBlU0I4ZkNCTllYUm9MbUZpY3lodVpYZFdaV3h2WTJsMGVTa2dQRDBnWVhWMGIxTjBiM0JUY0dWbFpDa3BPMXh1WEc0Z0lDQWdhV1lnS0hSb2FYTXVhWE5EYjIxd2JHVjBaU0FtSmlCemNISnBibWNwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRDQTlJSFJ2TzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1OMWNuSmxiblE3WEc0Z0lIMWNibHh1SUNCcGMwRmpkR2x2YmtOdmJYQnNaWFJsS0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtbHpRMjl0Y0d4bGRHVTdYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSEJ5YjNCektTQTlQaUJ1WlhjZ1VHaDVjMmxqY3lod2NtOXdjeWs3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9waHlzaWNzLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF92YWx1ZSA9IHJlcXVpcmUoJy4vdmFsdWUnKTtcblxudmFyIF92YWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZSk7XG5cbnZhciBfY29tcG9zaXRlID0gcmVxdWlyZSgnLi9jb21wb3NpdGUnKTtcblxudmFyIF9jb21wb3NpdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBjcmVhdGVQb2ludGVyKF9yZWYyLCBfcmVmKSB7XG4gIHZhciB4ID0gX3JlZjIueCxcbiAgICAgIHkgPSBfcmVmMi55O1xuXG4gIHZhciBldmVudFRvUG9pbnRzID0gX3JlZi5ldmVudFRvUG9pbnRzLFxuICAgICAgbW92ZUV2ZW50ID0gX3JlZi5tb3ZlRXZlbnQsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2V2ZW50VG9Qb2ludHMnLCAnbW92ZUV2ZW50J10pO1xuXG4gIHZhciBwb2ludGVyID0gKDAsIF9jb21wb3NpdGUyLmRlZmF1bHQpKHtcbiAgICB4OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh4KSxcbiAgICB5OiAoMCwgX3ZhbHVlMi5kZWZhdWx0KSh5KVxuICB9LCBfZXh0ZW5kcyh7XG4gICAgcHJldmVudERlZmF1bHQ6IHRydWVcbiAgfSwgcHJvcHMpKTtcblxuICB2YXIgdXBkYXRlUG9pbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHByb3BzLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyIHBvaW50cyA9IGV2ZW50VG9Qb2ludHMoZSk7XG4gICAgcG9pbnRlci54LnNldChwb2ludHMueCk7XG4gICAgcG9pbnRlci55LnNldChwb2ludHMueSk7XG4gIH07XG5cbiAgcG9pbnRlci5zZXRQcm9wcyh7XG4gICAgX29uU3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihtb3ZlRXZlbnQsIHVwZGF0ZVBvaW50ZXIpO1xuICAgIH0sXG4gICAgX29uU3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdmVFdmVudCwgdXBkYXRlUG9pbnRlcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcG9pbnRlcjtcbn1cblxudmFyIG1vdXNlRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIHtcbiAgICB4OiBlLnBhZ2VYLFxuICAgIHk6IGUucGFnZVlcbiAgfTtcbn07XG5cbnZhciB0b3VjaEV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChfcmVmMykge1xuICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBfcmVmMy5jaGFuZ2VkVG91Y2hlcztcbiAgcmV0dXJuIHtcbiAgICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbiAgfTtcbn07XG5cbnZhciBnZXROYXRpdmVFdmVudCA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiBlLm9yaWdpbmFsRXZlbnQgfHwgZS5uYXRpdmVFdmVudCB8fCBlO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGUsIHByb3BzKSB7XG4gIHZhciBuYXRpdmVFdmVudCA9IGdldE5hdGl2ZUV2ZW50KGUpO1xuICByZXR1cm4gbmF0aXZlRXZlbnQudG91Y2hlcyA/IGNyZWF0ZVBvaW50ZXIodG91Y2hFdmVudFRvUG9pbnQoZSksIF9leHRlbmRzKHtcbiAgICBtb3ZlRXZlbnQ6ICd0b3VjaG1vdmUnLFxuICAgIGV2ZW50VG9Qb2ludHM6IHRvdWNoRXZlbnRUb1BvaW50XG4gIH0sIHByb3BzKSkgOiBjcmVhdGVQb2ludGVyKG1vdXNlRXZlbnRUb1BvaW50KGUpLCBfZXh0ZW5kcyh7XG4gICAgbW92ZUV2ZW50OiAnbW91c2Vtb3ZlJyxcbiAgICBldmVudFRvUG9pbnRzOiBtb3VzZUV2ZW50VG9Qb2ludFxuICB9LCBwcm9wcykpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDNCdmFXNTBaWEl1YW5NaVhTd2libUZ0WlhNaU9sc2lZM0psWVhSbFVHOXBiblJsY2lJc0luZ2lMQ0o1SWl3aVpYWmxiblJVYjFCdmFXNTBjeUlzSW0xdmRtVkZkbVZ1ZENJc0luQnliM0J6SWl3aWNHOXBiblJsY2lJc0luQnlaWFpsYm5SRVpXWmhkV3gwSWl3aWRYQmtZWFJsVUc5cGJuUmxjaUlzSW1VaUxDSndiMmx1ZEhNaUxDSnpaWFFpTENKelpYUlFjbTl3Y3lJc0lsOXZibE4wWVhKMElpd2laRzlqZFcxbGJuUWlMQ0prYjJOMWJXVnVkRVZzWlcxbGJuUWlMQ0poWkdSRmRtVnVkRXhwYzNSbGJtVnlJaXdpWDI5dVUzUnZjQ0lzSW5KbGJXOTJaVVYyWlc1MFRHbHpkR1Z1WlhJaUxDSnRiM1Z6WlVWMlpXNTBWRzlRYjJsdWRDSXNJbkJoWjJWWUlpd2ljR0ZuWlZraUxDSjBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDSXNJbU5vWVc1blpXUlViM1ZqYUdWeklpd2lZMnhwWlc1MFdDSXNJbU5zYVdWdWRGa2lMQ0puWlhST1lYUnBkbVZGZG1WdWRDSXNJbTl5YVdkcGJtRnNSWFpsYm5RaUxDSnVZWFJwZG1WRmRtVnVkQ0lzSW5SdmRXTm9aWE1pWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3T3pzN08wRkJSVUVzVTBGQlUwRXNZVUZCVkN4alFVRjVSVHRCUVVGQkxFMUJRV2hFUXl4RFFVRm5SQ3hUUVVGb1JFRXNRMEZCWjBRN1FVRkJRU3hOUVVFM1EwTXNRMEZCTmtNc1UwRkJOME5CTEVOQlFUWkRPenRCUVVGQkxFMUJRWFJEUXl4aFFVRnpReXhSUVVGMFEwRXNZVUZCYzBNN1FVRkJRU3hOUVVGMlFrTXNVMEZCZFVJc1VVRkJka0pCTEZOQlFYVkNPMEZCUVVFc1RVRkJWRU1zUzBGQlV6czdRVUZEZGtVc1RVRkJUVU1zVlVGQlZTeDVRa0ZCVlR0QlFVTjRRa3dzVDBGQlJ5eHhRa0ZCVFVFc1EwRkJUaXhEUVVSeFFqdEJRVVY0UWtNc1QwRkJSeXh4UWtGQlRVRXNRMEZCVGp0QlFVWnhRaXhIUVVGV08wRkJTV1JMTEc5Q1FVRm5RanRCUVVwR0xFdEJTMWhHTEV0QlRGY3NSVUZCYUVJN08wRkJVVUVzVFVGQlRVY3NaMEpCUVdkQ0xGVkJRVU5ETEVOQlFVUXNSVUZCVHp0QlFVTXpRaXhSUVVGSlNpeE5RVUZOUlN4alFVRldMRVZCUVRCQ08wRkJRM2hDUlN4UlFVRkZSaXhqUVVGR08wRkJRMFE3TzBGQlJVUXNVVUZCVFVjc1UwRkJVMUFzWTBGQlkwMHNRMEZCWkN4RFFVRm1PMEZCUTBGSUxGbEJRVkZNTEVOQlFWSXNRMEZCVlZVc1IwRkJWaXhEUVVGalJDeFBRVUZQVkN4RFFVRnlRanRCUVVOQlN5eFpRVUZSU2l4RFFVRlNMRU5CUVZWVExFZEJRVllzUTBGQlkwUXNUMEZCVDFJc1EwRkJja0k3UVVGRFJDeEhRVkpFT3p0QlFWVkJTU3hWUVVGUlRTeFJRVUZTTEVOQlFXbENPMEZCUTJaRExHTkJRVlU3UVVGQlFTeGhRVUZOUXl4VFFVRlRReXhsUVVGVUxFTkJRWGxDUXl4blFrRkJla0lzUTBGQk1FTmFMRk5CUVRGRExFVkJRWEZFU1N4aFFVRnlSQ3hEUVVGT08wRkJRVUVzUzBGRVN6dEJRVVZtVXl4aFFVRlRPMEZCUVVFc1lVRkJUVWdzVTBGQlUwTXNaVUZCVkN4RFFVRjVRa2NzYlVKQlFYcENMRU5CUVRaRFpDeFRRVUUzUXl4RlFVRjNSRWtzWVVGQmVFUXNRMEZCVGp0QlFVRkJPMEZCUmswc1IwRkJha0k3TzBGQlMwRXNVMEZCVDBZc1QwRkJVRHRCUVVORU96dEJRVVZFTEVsQlFVMWhMRzlDUVVGdlFpeFZRVUZEVml4RFFVRkVPMEZCUVVFc1UwRkJVVHRCUVVOb1ExSXNUMEZCUjFFc1JVRkJSVmNzUzBGRU1rSTdRVUZGYUVOc1FpeFBRVUZIVHl4RlFVRkZXVHRCUVVZeVFpeEhRVUZTTzBGQlFVRXNRMEZCTVVJN08wRkJTMEVzU1VGQlRVTXNiMEpCUVc5Q08wRkJRVUVzVFVGQlIwTXNZMEZCU0N4VFFVRkhRU3hqUVVGSU8wRkJRVUVzVTBGQmVVSTdRVUZEYWtSMFFpeFBRVUZIYzBJc1pVRkJaU3hEUVVGbUxFVkJRV3RDUXl4UFFVUTBRanRCUVVWcVJIUkNMRTlCUVVkeFFpeGxRVUZsTEVOQlFXWXNSVUZCYTBKRk8wRkJSalJDTEVkQlFYcENPMEZCUVVFc1EwRkJNVUk3TzBGQlMwRXNTVUZCVFVNc2FVSkJRV2xDTEZWQlFVTnFRaXhEUVVGRU8wRkJRVUVzVTBGQlQwRXNSVUZCUld0Q0xHRkJRVVlzU1VGQmJVSnNRaXhGUVVGRmJVSXNWMEZCY2tJc1NVRkJiME51UWl4RFFVRXpRenRCUVVGQkxFTkJRWFpDT3p0clFrRkZaU3hWUVVGRFFTeERRVUZFTEVWQlFVbEtMRXRCUVVvc1JVRkJZenRCUVVNelFpeE5RVUZOZFVJc1kwRkJZMFlzWlVGQlpXcENMRU5CUVdZc1EwRkJjRUk3UVVGRFFTeFRRVUZSYlVJc1dVRkJXVU1zVDBGQllpeEhRVU5NTjBJc1kwRkJZM05DTEd0Q1FVRnJRbUlzUTBGQmJFSXNRMEZCWkR0QlFVTkZUQ3hsUVVGWExGZEJSR0k3UVVGRlJVUXNiVUpCUVdWdFFqdEJRVVpxUWl4TFFVZExha0lzUzBGSVRDeEZRVVJMTEVkQlRVeE1MR05CUVdOdFFpeHJRa0ZCYTBKV0xFTkJRV3hDTEVOQlFXUTdRVUZEUlV3c1pVRkJWeXhYUVVSaU8wRkJSVVZFTEcxQ1FVRmxaMEk3UVVGR2FrSXNTMEZIUzJRc1MwRklUQ3hGUVU1R08wRkJWMFFzUXlJc0ltWnBiR1VpT2lKd2IybHVkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSFpoYkhWbElHWnliMjBnSnk0dmRtRnNkV1VuTzF4dWFXMXdiM0owSUdOdmJYQnZjMmwwWlNCbWNtOXRJQ2N1TDJOdmJYQnZjMmwwWlNjN1hHNWNibVoxYm1OMGFXOXVJR055WldGMFpWQnZhVzUwWlhJb2V5QjRMQ0I1SUgwc0lIc2daWFpsYm5SVWIxQnZhVzUwY3l3Z2JXOTJaVVYyWlc1MExDQXVMaTV3Y205d2N5QjlLU0I3WEc0Z0lHTnZibk4wSUhCdmFXNTBaWElnUFNCamIyMXdiM05wZEdVb2UxeHVJQ0FnSUhnNklIWmhiSFZsS0hncExGeHVJQ0FnSUhrNklIWmhiSFZsS0hrcFhHNGdJSDBzSUh0Y2JpQWdJQ0J3Y21WMlpXNTBSR1ZtWVhWc2REb2dkSEoxWlN4Y2JpQWdJQ0F1TGk1d2NtOXdjMXh1SUNCOUtUdGNibHh1SUNCamIyNXpkQ0IxY0dSaGRHVlFiMmx1ZEdWeUlEMGdLR1VwSUQwK0lIdGNiaUFnSUNCcFppQW9jSEp2Y0hNdWNISmxkbVZ1ZEVSbFptRjFiSFFwSUh0Y2JpQWdJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JqYjI1emRDQndiMmx1ZEhNZ1BTQmxkbVZ1ZEZSdlVHOXBiblJ6S0dVcE8xeHVJQ0FnSUhCdmFXNTBaWEl1ZUM1elpYUW9jRzlwYm5SekxuZ3BPMXh1SUNBZ0lIQnZhVzUwWlhJdWVTNXpaWFFvY0c5cGJuUnpMbmtwTzF4dUlDQjlPMXh1WEc0Z0lIQnZhVzUwWlhJdWMyVjBVSEp2Y0hNb2UxeHVJQ0FnSUY5dmJsTjBZWEowT2lBb0tTQTlQaUJrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpaHRiM1psUlhabGJuUXNJSFZ3WkdGMFpWQnZhVzUwWlhJcExGeHVJQ0FnSUY5dmJsTjBiM0E2SUNncElEMCtJR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLRzF2ZG1WRmRtVnVkQ3dnZFhCa1lYUmxVRzlwYm5SbGNpbGNiaUFnZlNrN1hHNWNiaUFnY21WMGRYSnVJSEJ2YVc1MFpYSTdYRzU5WEc1Y2JtTnZibk4wSUcxdmRYTmxSWFpsYm5SVWIxQnZhVzUwSUQwZ0tHVXBJRDArSUNoN1hHNGdJSGc2SUdVdWNHRm5aVmdzWEc0Z0lIazZJR1V1Y0dGblpWbGNibjBwTzF4dVhHNWpiMjV6ZENCMGIzVmphRVYyWlc1MFZHOVFiMmx1ZENBOUlDaDdJR05vWVc1blpXUlViM1ZqYUdWeklIMHBJRDArSUNoN1hHNGdJSGc2SUdOb1lXNW5aV1JVYjNWamFHVnpXekJkTG1Oc2FXVnVkRmdzWEc0Z0lIazZJR05vWVc1blpXUlViM1ZqYUdWeld6QmRMbU5zYVdWdWRGbGNibjBwTzF4dVhHNWpiMjV6ZENCblpYUk9ZWFJwZG1WRmRtVnVkQ0E5SUNobEtTQTlQaUJsTG05eWFXZHBibUZzUlhabGJuUWdmSHdnWlM1dVlYUnBkbVZGZG1WdWRDQjhmQ0JsTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1pTd2djSEp2Y0hNcElEMCtJSHRjYmlBZ1kyOXVjM1FnYm1GMGFYWmxSWFpsYm5RZ1BTQm5aWFJPWVhScGRtVkZkbVZ1ZENobEtUdGNiaUFnY21WMGRYSnVJQ2h1WVhScGRtVkZkbVZ1ZEM1MGIzVmphR1Z6S1NBL1hHNGdJQ0FnWTNKbFlYUmxVRzlwYm5SbGNpaDBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDaGxLU3dnZTF4dUlDQWdJQ0FnYlc5MlpVVjJaVzUwT2lBbmRHOTFZMmh0YjNabEp5eGNiaUFnSUNBZ0lHVjJaVzUwVkc5UWIybHVkSE02SUhSdmRXTm9SWFpsYm5SVWIxQnZhVzUwTEZ4dUlDQWdJQ0FnTGk0dWNISnZjSE5jYmlBZ0lDQjlLU0E2WEc0Z0lDQWdZM0psWVhSbFVHOXBiblJsY2lodGIzVnpaVVYyWlc1MFZHOVFiMmx1ZENobEtTd2dlMXh1SUNBZ0lDQWdiVzkyWlVWMlpXNTBPaUFuYlc5MWMyVnRiM1psSnl4Y2JpQWdJQ0FnSUdWMlpXNTBWRzlRYjJsdWRITTZJRzF2ZFhObFJYWmxiblJVYjFCdmFXNTBMRnh1SUNBZ0lDQWdMaTR1Y0hKdmNITmNiaUFnSUNCOUtUdGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcG9pbnRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSByZXF1aXJlKCcuLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfZWFzaW5nID0gcmVxdWlyZSgnLi4vaW5jL2Vhc2luZycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBjbGFtcFByb2dyZXNzID0gKDAsIF90cmFuc2Zvcm1lcnMuY2xhbXApKDAsIDEpO1xuXG52YXIgTkVYVF9TVEVQUyA9IHtcbiAgbG9vcDogZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgcmV0dXJuIHR3ZWVuLnN0YXJ0KCk7XG4gIH0sXG4gIHlveW86IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgIHJldHVybiB0d2Vlbi5yZXZlcnNlKCkuc3RhcnQoKTtcbiAgfSxcbiAgZmxpcDogZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgcmV0dXJuIHR3ZWVuLmZsaXAoKS5zdGFydCgpO1xuICB9XG59O1xuXG52YXIgVHdlZW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFR3ZWVuKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFR3ZWVuLnByb3RvdHlwZS5vblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMuZHVyYXRpb24sXG4gICAgICAgIHBsYXlEaXJlY3Rpb24gPSBfcHJvcHMucGxheURpcmVjdGlvbjtcblxuXG4gICAgdGhpcy5lbGFwc2VkID0gcGxheURpcmVjdGlvbiA9PT0gMSA/IDAgOiBkdXJhdGlvbjtcbiAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZHVyYXRpb24gPSBfcHJvcHMyLmR1cmF0aW9uLFxuICAgICAgICBlYXNlID0gX3Byb3BzMi5lYXNlLFxuICAgICAgICBmcm9tID0gX3Byb3BzMi5mcm9tLFxuICAgICAgICB0byA9IF9wcm9wczIudG8sXG4gICAgICAgIHBsYXlEaXJlY3Rpb24gPSBfcHJvcHMyLnBsYXlEaXJlY3Rpb247XG5cblxuICAgIHRoaXMuZWxhcHNlZCArPSAoMCwgX2ZyYW1lc3luYy50aW1lU2luY2VMYXN0RnJhbWUpKCkgKiBwbGF5RGlyZWN0aW9uO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBjbGFtcFByb2dyZXNzKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoMCwgZHVyYXRpb24sIHRoaXMuZWxhcHNlZCkpO1xuXG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZnJvbSwgdG8sIGVhc2UodGhpcy5wcm9ncmVzcykpO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5pc0FjdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gaXNBY3Rpb25Db21wbGV0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uID0gX3Byb3BzMy5kdXJhdGlvbixcbiAgICAgICAgcGxheURpcmVjdGlvbiA9IF9wcm9wczMucGxheURpcmVjdGlvbixcbiAgICAgICAgeW95byA9IF9wcm9wczMueW95byxcbiAgICAgICAgbG9vcCA9IF9wcm9wczMubG9vcCxcbiAgICAgICAgZmxpcCA9IF9wcm9wczMuZmxpcDtcblxuICAgIHZhciBpc0NvbXBsZXRlID0gcGxheURpcmVjdGlvbiA9PT0gMSA/IHRoaXMuZWxhcHNlZCA+PSBkdXJhdGlvbiA6IHRoaXMuZWxhcHNlZCA8PSAwO1xuXG4gICAgaWYgKGlzQ29tcGxldGUgJiYgKHlveW8gfHwgbG9vcCB8fCBmbGlwKSkge1xuICAgICAgdmFyIGlzU3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgIHZhciBuZXh0U3RlcCA9IE5FWFRfU1RFUFNba2V5XTtcbiAgICAgICAgdmFyIGNvdW50UHJvcCA9IGtleSArICdDb3VudCc7XG4gICAgICAgIHZhciBzdGVwTWF4ID0gdGhpcy5nZXRQcm9wKGtleSk7XG4gICAgICAgIHZhciBzdGVwQ291bnQgPSB0aGlzLmdldFByb3AoY291bnRQcm9wKTtcblxuICAgICAgICBpZiAoc3RlcE1heCA+IHN0ZXBDb3VudCkge1xuICAgICAgICAgIHZhciBfc2V0UHJvcHM7XG5cbiAgICAgICAgICB0aGlzLnNldFByb3BzKChfc2V0UHJvcHMgPSB7fSwgX3NldFByb3BzW2NvdW50UHJvcF0gPSBzdGVwQ291bnQgKyAxLCBfc2V0UHJvcHMpKTtcbiAgICAgICAgICBuZXh0U3RlcCh0aGlzKTtcbiAgICAgICAgICBpc1N0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzU3RlcFRha2VuKSBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzQ29tcGxldGU7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLmdldEVsYXBzZWQgPSBmdW5jdGlvbiBnZXRFbGFwc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmVsYXBzZWQ7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLmZsaXAgPSBmdW5jdGlvbiBmbGlwKCkge1xuICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMucHJvcHMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG4gICAgdmFyIF9yZWYgPSBbdGhpcy5wcm9wcy50bywgdGhpcy5wcm9wcy5mcm9tXTtcbiAgICB0aGlzLnByb3BzLmZyb20gPSBfcmVmWzBdO1xuICAgIHRoaXMucHJvcHMudG8gPSBfcmVmWzFdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgIHRoaXMucHJvcHMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gVHdlZW47XG59KF8yLmRlZmF1bHQpO1xuXG5Ud2Vlbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGR1cmF0aW9uOiAzMDAsXG4gIGVhc2U6IF9lYXNpbmcuZWFzZU91dCxcbiAgZnJvbTogMCxcbiAgdG86IDEsXG4gIGZsaXA6IDAsXG4gIGZsaXBDb3VudDogMCxcbiAgeW95bzogMCxcbiAgeW95b0NvdW50OiAwLFxuICBsb29wOiAwLFxuICBsb29wQ291bnQ6IDAsXG4gIHBsYXlEaXJlY3Rpb246IDFcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIHByb3BzID0gYXJnc1swXTtcblxuICAgIHJldHVybiBuZXcgVHdlZW4ocHJvcHMpO1xuICB9IGVsc2Uge1xuICAgIHZhciBmcm9tID0gYXJnc1swXSxcbiAgICAgICAgdG8gPSBhcmdzWzFdLFxuICAgICAgICBkdXJhdGlvbiA9IGFyZ3NbMl0sXG4gICAgICAgIGVhc2UgPSBhcmdzWzNdLFxuICAgICAgICBfcHJvcHM0ID0gYXJnc1s0XTtcblxuICAgIHJldHVybiBuZXcgVHdlZW4oX2V4dGVuZHMoeyBmcm9tOiBmcm9tLCB0bzogdG8sIGR1cmF0aW9uOiBkdXJhdGlvbiwgZWFzZTogZWFzZSB9LCBfcHJvcHM0KSk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwzUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJJbU5zWVcxd1VISnZaM0psYzNNaUxDSk9SVmhVWDFOVVJWQlRJaXdpYkc5dmNDSXNJblIzWldWdUlpd2ljM1JoY25RaUxDSjViM2x2SWl3aWNtVjJaWEp6WlNJc0ltWnNhWEFpTENKVWQyVmxiaUlzSW05dVUzUmhjblFpTENKd2NtOXdjeUlzSW1SMWNtRjBhVzl1SWl3aWNHeGhlVVJwY21WamRHbHZiaUlzSW1Wc1lYQnpaV1FpTENKd2NtOW5jbVZ6Y3lJc0luVndaR0YwWlNJc0ltVmhjMlVpTENKbWNtOXRJaXdpZEc4aUxDSnBjMEZqZEdsdmJrTnZiWEJzWlhSbElpd2lhWE5EYjIxd2JHVjBaU0lzSW1selUzUmxjRlJoYTJWdUlpd2lhMlY1SWl3aWJtVjRkRk4wWlhBaUxDSmpiM1Z1ZEZCeWIzQWlMQ0p6ZEdWd1RXRjRJaXdpWjJWMFVISnZjQ0lzSW5OMFpYQkRiM1Z1ZENJc0luTmxkRkJ5YjNCeklpd2laMlYwUld4aGNITmxaQ0lzSW1SbFptRjFiSFJRY205d2N5SXNJbVpzYVhCRGIzVnVkQ0lzSW5sdmVXOURiM1Z1ZENJc0lteHZiM0JEYjNWdWRDSXNJbUZ5WjNNaUxDSnNaVzVuZEdnaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3pzN08wRkJRMEU3TzBGQlEwRTdPMEZCUTBFN08wRkJRMEU3T3pzN096czdPenM3UVVGRlFTeEpRVUZOUVN4blFrRkJaMElzZVVKQlFVMHNRMEZCVGl4RlFVRlRMRU5CUVZRc1EwRkJkRUk3TzBGQlJVRXNTVUZCVFVNc1lVRkJZVHRCUVVOcVFrTXNVVUZCVFN4VlFVRkRReXhMUVVGRU8wRkJRVUVzVjBGQlYwRXNUVUZCVFVNc1MwRkJUaXhGUVVGWU8wRkJRVUVzUjBGRVZ6dEJRVVZxUWtNc1VVRkJUU3hWUVVGRFJpeExRVUZFTzBGQlFVRXNWMEZCVjBFc1RVRkJUVWNzVDBGQlRpeEhRVUZuUWtZc1MwRkJhRUlzUlVGQldEdEJRVUZCTEVkQlJsYzdRVUZIYWtKSExGRkJRVTBzVlVGQlEwb3NTMEZCUkR0QlFVRkJMRmRCUVZkQkxFMUJRVTFKTEVsQlFVNHNSMEZCWVVnc1MwRkJZaXhGUVVGWU8wRkJRVUU3UVVGSVZ5eERRVUZ1UWpzN1NVRk5UVWtzU3pzN096czdPenM3TzJ0Q1FXVktReXhQTEhOQ1FVRlZPMEZCUVVFc2FVSkJRelJDTEV0QlFVdERMRXRCUkdwRE8wRkJRVUVzVVVGRFFVTXNVVUZFUVN4VlFVTkJRU3hSUVVSQk8wRkJRVUVzVVVGRFZVTXNZVUZFVml4VlFVTlZRU3hoUVVSV096czdRVUZIVWl4VFFVRkxReXhQUVVGTUxFZEJRV2RDUkN4clFrRkJhMElzUTBGQmJrSXNSMEZCZDBJc1EwRkJlRUlzUjBGQk5FSkVMRkZCUVRORE8wRkJRMEVzVTBGQlMwY3NVVUZCVEN4SFFVRm5RaXhEUVVGb1FqdEJRVU5FTEVjN08ydENRVVZFUXl4TkxIRkNRVUZUTzBGQlFVRXNhMEpCUXpaRExFdEJRVXRNTEV0QlJHeEVPMEZCUVVFc1VVRkRRME1zVVVGRVJDeFhRVU5EUVN4UlFVUkVPMEZCUVVFc1VVRkRWMHNzU1VGRVdDeFhRVU5YUVN4SlFVUllPMEZCUVVFc1VVRkRhVUpETEVsQlJHcENMRmRCUTJsQ1FTeEpRVVJxUWp0QlFVRkJMRkZCUTNWQ1F5eEZRVVIyUWl4WFFVTjFRa0VzUlVGRWRrSTdRVUZCUVN4UlFVTXlRazRzWVVGRU0wSXNWMEZETWtKQkxHRkJSRE5DT3pzN1FVRkhVQ3hUUVVGTFF5eFBRVUZNTEVsQlFXZENMSFZEUVVGMVFrUXNZVUZCZGtNN1FVRkRRU3hUUVVGTFJTeFJRVUZNTEVkQlFXZENaQ3hqUVVGakxHZERRVUZ4UWl4RFFVRnlRaXhGUVVGM1FsY3NVVUZCZUVJc1JVRkJhME1zUzBGQlMwVXNUMEZCZGtNc1EwRkJaQ3hEUVVGb1FqczdRVUZGUVN4WFFVRlBMR2REUVVGeFFra3NTVUZCY2tJc1JVRkJNa0pETEVWQlFUTkNMRVZCUVN0Q1JpeExRVUZMTEV0QlFVdEdMRkZCUVZZc1EwRkJMMElzUTBGQlVEdEJRVU5FTEVjN08ydENRVVZFU3l4blFpd3JRa0ZCYlVJN1FVRkJRU3hyUWtGRGNVTXNTMEZCUzFRc1MwRkVNVU03UVVGQlFTeFJRVU5VUXl4UlFVUlRMRmRCUTFSQkxGRkJSRk03UVVGQlFTeFJRVU5EUXl4aFFVUkVMRmRCUTBOQkxHRkJSRVE3UVVGQlFTeFJRVU5uUWxBc1NVRkVhRUlzVjBGRFowSkJMRWxCUkdoQ08wRkJRVUVzVVVGRGMwSklMRWxCUkhSQ0xGZEJRM05DUVN4SlFVUjBRanRCUVVGQkxGRkJRelJDU3l4SlFVUTFRaXhYUVVNMFFrRXNTVUZFTlVJN08wRkJSV3BDTEZGQlFVbGhMR0ZCUVdOU0xHdENRVUZyUWl4RFFVRnVRaXhIUVVGNVFpeExRVUZMUXl4UFFVRk1MRWxCUVdkQ1JpeFJRVUY2UXl4SFFVRnpSQ3hMUVVGTFJTeFBRVUZNTEVsQlFXZENMRU5CUVhaR096dEJRVVZCTEZGQlFVbFBMR1ZCUVdWbUxGRkJRVkZJTEVsQlFWSXNTVUZCWjBKTExFbEJRUzlDTEVOQlFVb3NSVUZCTUVNN1FVRkRlRU1zVlVGQlNXTXNZMEZCWXl4TFFVRnNRanM3UVVGRlFTeFhRVUZMTEVsQlFVbERMRWRCUVZRc1NVRkJaMEp5UWl4VlFVRm9RaXhGUVVFMFFqdEJRVU14UWl4WlFVRk5jMElzVjBGQlYzUkNMRmRCUVZkeFFpeEhRVUZZTEVOQlFXcENPMEZCUTBFc1dVRkJUVVVzV1VGQldVWXNUVUZCVFN4UFFVRjRRanRCUVVOQkxGbEJRVTFITEZWQlFWVXNTMEZCUzBNc1QwRkJUQ3hEUVVGaFNpeEhRVUZpTEVOQlFXaENPMEZCUTBFc1dVRkJUVXNzV1VGQldTeExRVUZMUkN4UFFVRk1MRU5CUVdGR0xGTkJRV0lzUTBGQmJFSTdPMEZCUlVFc1dVRkJTVU1zVlVGQlZVVXNVMEZCWkN4RlFVRjVRanRCUVVGQk96dEJRVU4yUWl4bFFVRkxReXhSUVVGTUxEUkNRVU5IU2l4VFFVUklMRWxCUTJWSExGbEJRVmtzUTBGRU0wSTdRVUZIUVVvc2JVSkJRVk1zU1VGQlZEdEJRVU5CUml4M1FrRkJZeXhKUVVGa08wRkJRMFE3UVVGRFJqczdRVUZGUkN4VlFVRkpRU3hYUVVGS0xFVkJRV2xDUkN4aFFVRmhMRXRCUVdJN1FVRkRiRUk3TzBGQlJVUXNWMEZCVDBFc1ZVRkJVRHRCUVVORUxFYzdPMnRDUVVWRVV5eFZMSGxDUVVGaE8wRkJRMWdzVjBGQlR5eExRVUZMYUVJc1QwRkJXanRCUVVORUxFYzdPMnRDUVVWRVRpeEpMRzFDUVVGUE8wRkJRMHdzVTBGQlMwMHNUMEZCVEN4SFFVRmxMRXRCUVV0SUxFdEJRVXdzUTBGQlYwTXNVVUZCV0N4SFFVRnpRaXhMUVVGTFJTeFBRVUV4UXp0QlFVUkxMR1ZCUlRoQ0xFTkJRVU1zUzBGQlMwZ3NTMEZCVEN4RFFVRlhVU3hGUVVGYUxFVkJRV2RDTEV0QlFVdFNMRXRCUVV3c1EwRkJWMDhzU1VGQk0wSXNRMEZHT1VJN1FVRkZTaXhUUVVGTFVDeExRVUZNTEVOQlFWZFBMRWxCUmxBN1FVRkZZU3hUUVVGTFVDeExRVUZNTEVOQlFWZFJMRVZCUm5oQ096dEJRVWRNTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzJ0Q1FVVkVXaXhQTEhOQ1FVRlZPMEZCUTFJc1UwRkJTMGtzUzBGQlRDeERRVUZYUlN4aFFVRllMRWxCUVRSQ0xFTkJRVU1zUTBGQk4wSTdRVUZEUVN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3pzN096dEJRWGhGUjBvc1N5eERRVU5IYzBJc1dTeEhRVUZsTzBGQlEzQkNia0lzV1VGQlZTeEhRVVJWTzBGQlJYQkNTeXgxUWtGR2IwSTdRVUZIY0VKRExGRkJRVTBzUTBGSVl6dEJRVWx3UWtNc1RVRkJTU3hEUVVwblFqdEJRVXR3UWxnc1VVRkJUU3hEUVV4ak8wRkJUWEJDZDBJc1lVRkJWeXhEUVU1VE8wRkJUM0JDTVVJc1VVRkJUU3hEUVZCak8wRkJVWEJDTWtJc1lVRkJWeXhEUVZKVE8wRkJVM0JDT1VJc1VVRkJUU3hEUVZSak8wRkJWWEJDSzBJc1lVRkJWeXhEUVZaVE8wRkJWM0JDY2tJc2FVSkJRV1U3UVVGWVN5eERPenRyUWtFd1JWUXNXVUZCWVR0QlFVRkJMRzlEUVVGVWMwSXNTVUZCVXp0QlFVRlVRU3hSUVVGVE8wRkJRVUU3TzBGQlF6RkNMRTFCUVVsQkxFdEJRVXRETEUxQlFVd3NTMEZCWjBJc1EwRkJjRUlzUlVGQmRVSTdRVUZCUVN4UlFVTmlla0lzUzBGRVlTeEhRVU5JZDBJc1NVRkVSenM3UVVGRmNrSXNWMEZCVHl4SlFVRkpNVUlzUzBGQlNpeERRVUZWUlN4TFFVRldMRU5CUVZBN1FVRkRSQ3hIUVVoRUxFMUJSMDg3UVVGQlFTeFJRVU5IVHl4SlFVUklMRWRCUTNWRGFVSXNTVUZFZGtNN1FVRkJRU3hSUVVOVGFFSXNSVUZFVkN4SFFVTjFRMmRDTEVsQlJIWkRPMEZCUVVFc1VVRkRZWFpDTEZGQlJHSXNSMEZEZFVOMVFpeEpRVVIyUXp0QlFVRkJMRkZCUTNWQ2JFSXNTVUZFZGtJc1IwRkRkVU5yUWl4SlFVUjJRenRCUVVGQkxGRkJRelpDZUVJc1QwRkVOMElzUjBGRGRVTjNRaXhKUVVSMlF6czdRVUZGVEN4WFFVRlBMRWxCUVVreFFpeExRVUZLTEZsQlFWbFRMRlZCUVZvc1JVRkJhMEpETEUxQlFXeENMRVZCUVhOQ1VDeHJRa0ZCZEVJc1JVRkJaME5MTEZWQlFXaERMRWxCUVhsRFRpeFBRVUY2UXl4RlFVRlFPMEZCUTBRN1FVRkRSaXhESWl3aVptbHNaU0k2SW5SM1pXVnVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1THljN1hHNXBiWEJ2Y25RZ2V5QjBhVzFsVTJsdVkyVk1ZWE4wUm5KaGJXVWdmU0JtY205dElDY3VMaTltY21GdFpYTjVibU1uTzF4dWFXMXdiM0owSUhzZ1kyeGhiWEFnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6Snp0Y2JtbHRjRzl5ZENCN0lHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxMQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibWx0Y0c5eWRDQjdJR1ZoYzJWUGRYUWdmU0JtY205dElDY3VMaTlwYm1NdlpXRnphVzVuSnp0Y2JseHVZMjl1YzNRZ1kyeGhiWEJRY205bmNtVnpjeUE5SUdOc1lXMXdLREFzSURFcE8xeHVYRzVqYjI1emRDQk9SVmhVWDFOVVJWQlRJRDBnZTF4dUlDQnNiMjl3T2lBb2RIZGxaVzRwSUQwK0lIUjNaV1Z1TG5OMFlYSjBLQ2tzWEc0Z0lIbHZlVzg2SUNoMGQyVmxiaWtnUFQ0Z2RIZGxaVzR1Y21WMlpYSnpaU2dwTG5OMFlYSjBLQ2tzWEc0Z0lHWnNhWEE2SUNoMGQyVmxiaWtnUFQ0Z2RIZGxaVzR1Wm14cGNDZ3BMbk4wWVhKMEtDbGNibjA3WEc1Y2JtTnNZWE56SUZSM1pXVnVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnYzNSaGRHbGpJR1JsWm1GMWJIUlFjbTl3Y3lBOUlIdGNiaUFnSUNCa2RYSmhkR2x2YmpvZ016QXdMRnh1SUNBZ0lHVmhjMlU2SUdWaGMyVlBkWFFzWEc0Z0lDQWdabkp2YlRvZ01DeGNiaUFnSUNCMGJ6b2dNU3hjYmlBZ0lDQm1iR2x3T2lBd0xGeHVJQ0FnSUdac2FYQkRiM1Z1ZERvZ01DeGNiaUFnSUNCNWIzbHZPaUF3TEZ4dUlDQWdJSGx2ZVc5RGIzVnVkRG9nTUN4Y2JpQWdJQ0JzYjI5d09pQXdMRnh1SUNBZ0lHeHZiM0JEYjNWdWREb2dNQ3hjYmlBZ0lDQndiR0Y1UkdseVpXTjBhVzl1T2lBeFhHNGdJSDA3WEc1Y2JpQWdiMjVUZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHUjFjbUYwYVc5dUxDQndiR0Y1UkdseVpXTjBhVzl1SUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1WEc0Z0lDQWdkR2hwY3k1bGJHRndjMlZrSUQwZ0tIQnNZWGxFYVhKbFkzUnBiMjRnUFQwOUlERXBJRDhnTUNBNklHUjFjbUYwYVc5dU8xeHVJQ0FnSUhSb2FYTXVjSEp2WjNKbGMzTWdQU0F3TzF4dUlDQjlYRzVjYmlBZ2RYQmtZWFJsS0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnWkhWeVlYUnBiMjRzSUdWaGMyVXNJR1p5YjIwc0lIUnZMQ0J3YkdGNVJHbHlaV04wYVc5dUlIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lDczlJSFJwYldWVGFXNWpaVXhoYzNSR2NtRnRaU2dwSUNvZ2NHeGhlVVJwY21WamRHbHZianRjYmlBZ0lDQjBhR2x6TG5CeWIyZHlaWE56SUQwZ1kyeGhiWEJRY205bmNtVnpjeWhuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNnd0xDQmtkWEpoZEdsdmJpd2dkR2hwY3k1bGJHRndjMlZrS1NrN1hHNWNiaUFnSUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb1puSnZiU3dnZEc4c0lHVmhjMlVvZEdocGN5NXdjbTluY21WemN5a3BPMXh1SUNCOVhHNWNiaUFnYVhOQlkzUnBiMjVEYjIxd2JHVjBaU2dwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1IxY21GMGFXOXVMQ0J3YkdGNVJHbHlaV04wYVc5dUxDQjViM2x2TENCc2IyOXdMQ0JtYkdsd0lIMGdQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR3hsZENCcGMwTnZiWEJzWlhSbElEMGdLSEJzWVhsRWFYSmxZM1JwYjI0Z1BUMDlJREVwSUQ4Z0tIUm9hWE11Wld4aGNITmxaQ0ErUFNCa2RYSmhkR2x2YmlrZ09pQW9kR2hwY3k1bGJHRndjMlZrSUR3OUlEQXBPMXh1WEc0Z0lDQWdhV1lnS0dselEyOXRjR3hsZEdVZ0ppWWdLSGx2ZVc4Z2ZId2diRzl2Y0NCOGZDQm1iR2x3S1NrZ2UxeHVJQ0FnSUNBZ2JHVjBJR2x6VTNSbGNGUmhhMlZ1SUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJPUlZoVVgxTlVSVkJUS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUc1bGVIUlRkR1Z3SUQwZ1RrVllWRjlUVkVWUVUxdHJaWGxkTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JqYjNWdWRGQnliM0FnUFNCclpYa2dLeUFuUTI5MWJuUW5PMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnpkR1Z3VFdGNElEMGdkR2hwY3k1blpYUlFjbTl3S0d0bGVTazdYRzRnSUNBZ0lDQWdJR052Ym5OMElITjBaWEJEYjNWdWRDQTlJSFJvYVhNdVoyVjBVSEp2Y0NoamIzVnVkRkJ5YjNBcE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoemRHVndUV0Y0SUQ0Z2MzUmxjRU52ZFc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NXpaWFJRY205d2N5aDdYRzRnSUNBZ0lDQWdJQ0FnSUNCYlkyOTFiblJRY205d1hUb2djM1JsY0VOdmRXNTBJQ3NnTVZ4dUlDQWdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0FnSUc1bGVIUlRkR1Z3S0hSb2FYTXBPMXh1SUNBZ0lDQWdJQ0FnSUdselUzUmxjRlJoYTJWdUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBaaUFvYVhOVGRHVndWR0ZyWlc0cElHbHpRMjl0Y0d4bGRHVWdQU0JtWVd4elpUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnYVhORGIyMXdiR1YwWlR0Y2JpQWdmVnh1WEc0Z0lHZGxkRVZzWVhCelpXUW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Wld4aGNITmxaRHRjYmlBZ2ZWeHVYRzRnSUdac2FYQW9LU0I3WEc0Z0lDQWdkR2hwY3k1bGJHRndjMlZrSUQwZ2RHaHBjeTV3Y205d2N5NWtkWEpoZEdsdmJpQXRJSFJvYVhNdVpXeGhjSE5sWkR0Y2JpQWdJQ0JiZEdocGN5NXdjbTl3Y3k1bWNtOXRMQ0IwYUdsekxuQnliM0J6TG5SdlhTQTlJRnQwYUdsekxuQnliM0J6TG5SdkxDQjBhR2x6TG5CeWIzQnpMbVp5YjIxZE8xeHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdjbVYyWlhKelpTZ3BJSHRjYmlBZ0lDQjBhR2x6TG5CeWIzQnpMbkJzWVhsRWFYSmxZM1JwYjI0Z0tqMGdMVEU3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0M0dUxtRnlaM01wSUQwK0lIdGNiaUFnYVdZZ0tHRnlaM011YkdWdVozUm9JRDA5UFNBeEtTQjdYRzRnSUNBZ1kyOXVjM1FnV3lCd2NtOXdjeUJkSUQwZ1lYSm5jenRjYmlBZ0lDQnlaWFIxY200Z2JtVjNJRlIzWldWdUtIQnliM0J6S1R0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCamIyNXpkQ0JiSUdaeWIyMHNJSFJ2TENCa2RYSmhkR2x2Yml3Z1pXRnpaU3dnY0hKdmNITWdYU0E5SUdGeVozTTdYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QlVkMlZsYmloN0lHWnliMjBzSUhSdkxDQmtkWEpoZEdsdmJpd2daV0Z6WlN3Z0xpNHVjSEp2Y0hNZ2ZTazdYRzRnSUgxY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY2hhaW4gPSByZXF1aXJlKCcuL2NoYWluJyk7XG5cbnZhciBfY2hhaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hhaW4pO1xuXG52YXIgX3BhcmFsbGVsID0gcmVxdWlyZSgnLi9wYXJhbGxlbCcpO1xuXG52YXIgX3BhcmFsbGVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcmFsbGVsKTtcblxudmFyIF9kZWxheSA9IHJlcXVpcmUoJy4vZGVsYXknKTtcblxudmFyIF9kZWxheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWxheSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHBhcmFsbGVsIEFjdGlvbiBjb21wb3NlZCBvZiBjaGFpbmVkXG4gKiBkZWxheSBhbmQgYWN0aW9ucy4gSW50ZXJ2YWwgY2FuIGJlIGVpdGhlciBhIG51bWJlclxuICogdG8gbXVsdGlwbHkgYnkgYGlgIG9yIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHByb3ZpZGVkIGBpYFxuICpcbiAqIFN0cmFpZ2h0IGNyaWJiZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL2Jsb2IvMjRjNzJmNTEzZTQ4ZjBiZGM0MDgyMGI0MzI2MjMyOGZlMmMzMDFkNC9MaWJyYXJpZXMvQW5pbWF0ZWQvc3JjL0FuaW1hdGVkSW1wbGVtZW50YXRpb24uanMjTDIwMzFcbiAqIF4gVGhpcyBmdW5jdGlvbiBzb2xkIGEgcHJldmlvdXNseS1jb25mbGljdGVkIG1lIG9uIHRoZSBtZXJpdCBvZiBtb3ZpbmcgZnJvbVxuICogalF1ZXJ5LXN0eWxlIG11bHRpLXByb3BlcnR5IGFuaW1hdGlvbnMgdG8gc2luZ2xlLXByb3BlcnR5LlxuICogQHBhcmFtICB7YXJyYXl9IGFjdGlvbnNcbiAqIEBwYXJhbSAge2Z1bmN0aW9uIHwgbnVtYmVyfSBpbnRlcnZhbFxuICogQHJldHVybiB7QWN0aW9ufVxuICovXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYWN0aW9ucywgaW50ZXJ2YWwsIG9uQ29tcGxldGUpIHtcbiAgdmFyIGludGVydmFsSXNGdW5jdGlvbiA9ICgwLCBfdXRpbHMuaXNGdW5jKShpbnRlcnZhbCk7XG5cbiAgcmV0dXJuICgwLCBfcGFyYWxsZWwyLmRlZmF1bHQpKGFjdGlvbnMubWFwKGZ1bmN0aW9uIChhY3Rpb24sIGkpIHtcbiAgICB2YXIgdGltZVRvRGVsYXkgPSBpbnRlcnZhbElzRnVuY3Rpb24gPyBpbnRlcnZhbChpKSA6IGkgKiBpbnRlcnZhbDtcbiAgICByZXR1cm4gKDAsIF9jaGFpbjIuZGVmYXVsdCkoWygwLCBfZGVsYXkyLmRlZmF1bHQpKHRpbWVUb0RlbGF5KSwgYWN0aW9uXSk7XG4gIH0pLCB7IG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM04wWVdkblpYSXVhbk1pWFN3aWJtRnRaWE1pT2xzaVlXTjBhVzl1Y3lJc0ltbHVkR1Z5ZG1Gc0lpd2liMjVEYjIxd2JHVjBaU0lzSW1sdWRHVnlkbUZzU1hOR2RXNWpkR2x2YmlJc0ltMWhjQ0lzSW1GamRHbHZiaUlzSW1raUxDSjBhVzFsVkc5RVpXeGhlU0pkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJSVUU3T3pzN096czdPenM3T3p0clFrRlpaU3hWUVVGRFFTeFBRVUZFTEVWQlFWVkRMRkZCUVZZc1JVRkJiMEpETEZWQlFYQkNMRVZCUVcxRE8wRkJRMmhFTEUxQlFVMURMSEZDUVVGeFFpeHRRa0ZCVDBZc1VVRkJVQ3hEUVVFelFqczdRVUZGUVN4VFFVRlBMSGRDUVVGVFJDeFJRVUZSU1N4SFFVRlNMRU5CUVZrc1ZVRkJRME1zVFVGQlJDeEZRVUZUUXl4RFFVRlVMRVZCUVdVN1FVRkRla01zVVVGQlRVTXNZMEZCWlVvc2EwSkJRVVFzUjBGQmRVSkdMRk5CUVZOTExFTkJRVlFzUTBGQmRrSXNSMEZCY1VOQkxFbEJRVWxNTEZGQlFUZEVPMEZCUTBFc1YwRkJUeXh4UWtGQlRTeERRVU5ZTEhGQ1FVRk5UU3hYUVVGT0xFTkJSRmNzUlVGRldFWXNUVUZHVnl4RFFVRk9MRU5CUVZBN1FVRkpSQ3hIUVU1bExFTkJRVlFzUlVGTlNDeEZRVUZGU0N4elFrRkJSaXhGUVU1SExFTkJRVkE3UVVGUFJDeERJaXdpWm1sc1pTSTZJbk4wWVdkblpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1kyaGhhVzRnWm5KdmJTQW5MaTlqYUdGcGJpYzdYRzVwYlhCdmNuUWdjR0Z5WVd4c1pXd2dabkp2YlNBbkxpOXdZWEpoYkd4bGJDYzdYRzVwYlhCdmNuUWdaR1ZzWVhrZ1puSnZiU0FuTGk5a1pXeGhlU2M3WEc1cGJYQnZjblFnZXlCcGMwWjFibU1nZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzR2S2lwY2JpQXFJRU55WldGMFpYTWdZU0J1WlhjZ2NHRnlZV3hzWld3Z1FXTjBhVzl1SUdOdmJYQnZjMlZrSUc5bUlHTm9ZV2x1WldSY2JpQXFJR1JsYkdGNUlHRnVaQ0JoWTNScGIyNXpMaUJKYm5SbGNuWmhiQ0JqWVc0Z1ltVWdaV2wwYUdWeUlHRWdiblZ0WW1WeVhHNGdLaUIwYnlCdGRXeDBhWEJzZVNCaWVTQmdhV0FnYjNJZ1lTQm1kVzVqZEdsdmJpQjBhR0YwSUhkcGJHd2dZbVVnY0hKdmRtbGtaV1FnWUdsZ1hHNGdLbHh1SUNvZ1UzUnlZV2xuYUhRZ1kzSnBZbUpsWkNCbWNtOXRJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzltWVdObFltOXZheTl5WldGamRDMXVZWFJwZG1VdllteHZZaTh5TkdNM01tWTFNVE5sTkRobU1HSmtZelF3T0RJd1lqUXpNall5TXpJNFptVXlZek13TVdRMEwweHBZbkpoY21sbGN5OUJibWx0WVhSbFpDOXpjbU12UVc1cGJXRjBaV1JKYlhCc1pXMWxiblJoZEdsdmJpNXFjeU5NTWpBek1WeHVJQ29nWGlCVWFHbHpJR1oxYm1OMGFXOXVJSE52YkdRZ1lTQndjbVYyYVc5MWMyeDVMV052Ym1ac2FXTjBaV1FnYldVZ2IyNGdkR2hsSUcxbGNtbDBJRzltSUcxdmRtbHVaeUJtY205dFhHNGdLaUJxVVhWbGNua3RjM1I1YkdVZ2JYVnNkR2t0Y0hKdmNHVnlkSGtnWVc1cGJXRjBhVzl1Y3lCMGJ5QnphVzVuYkdVdGNISnZjR1Z5ZEhrdVhHNGdLaUJBY0dGeVlXMGdJSHRoY25KaGVYMGdZV04wYVc5dWMxeHVJQ29nUUhCaGNtRnRJQ0I3Wm5WdVkzUnBiMjRnZkNCdWRXMWlaWEo5SUdsdWRHVnlkbUZzWEc0Z0tpQkFjbVYwZFhKdUlIdEJZM1JwYjI1OVhHNGdLaTljYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hoWTNScGIyNXpMQ0JwYm5SbGNuWmhiQ3dnYjI1RGIyMXdiR1YwWlNrZ1BUNGdlMXh1SUNCamIyNXpkQ0JwYm5SbGNuWmhiRWx6Um5WdVkzUnBiMjRnUFNCcGMwWjFibU1vYVc1MFpYSjJZV3dwTzF4dVhHNGdJSEpsZEhWeWJpQndZWEpoYkd4bGJDaGhZM1JwYjI1ekxtMWhjQ2dvWVdOMGFXOXVMQ0JwS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnZEdsdFpWUnZSR1ZzWVhrZ1BTQW9hVzUwWlhKMllXeEpjMFoxYm1OMGFXOXVLU0EvSUdsdWRHVnlkbUZzS0drcElEb2dhU0FxSUdsdWRHVnlkbUZzTzF4dUlDQWdJSEpsZEhWeWJpQmphR0ZwYmloYlhHNGdJQ0FnSUNCa1pXeGhlU2gwYVcxbFZHOUVaV3hoZVNrc1hHNGdJQ0FnSUNCaFkzUnBiMjVjYmlBZ0lDQmRLVHRjYmlBZ2ZTa3NJSHNnYjI1RGIyMXdiR1YwWlNCOUtUdGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvc3RhZ2dlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfID0gcmVxdWlyZSgnLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9mcmFtZXN5bmMgPSByZXF1aXJlKCcuLi9mcmFtZXN5bmMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVmFsdWUgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVmFsdWUsIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFZhbHVlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBWYWx1ZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFZhbHVlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQodikge1xuICAgIHRoaXMudG9VcGRhdGUgPSB2O1xuICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgfTtcblxuICBWYWx1ZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnRvVXBkYXRlO1xuICB9O1xuXG4gIHJldHVybiBWYWx1ZTtcbn0oXzIuZGVmYXVsdCk7XG5cblZhbHVlLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGN1cnJlbnQsIG9uVXBkYXRlKSB7XG4gIHJldHVybiBuZXcgVmFsdWUoeyBjdXJyZW50OiBjdXJyZW50LCBvblVwZGF0ZTogb25VcGRhdGUgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMM1poYkhWbExtcHpJbDBzSW01aGJXVnpJanBiSWxaaGJIVmxJaXdpYzJWMElpd2lkaUlzSW5SdlZYQmtZWFJsSWl3aWMyTm9aV1IxYkdWa1ZYQmtZWFJsSWl3aWRYQmtZWFJsSWl3aVpHVm1ZWFZzZEZCeWIzQnpJaXdpY0dGemMybDJaU0lzSW1OMWNuSmxiblFpTENKdmJsVndaR0YwWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3T3pzN096czdTVUZGVFVFc1N6czdPenM3T3pzN08ydENRVXRLUXl4SExHZENRVUZKUXl4RExFVkJRVWM3UVVGRFRDeFRRVUZMUXl4UlFVRk1MRWRCUVdkQ1JDeERRVUZvUWp0QlFVTkJMR3REUVVGakxFdEJRVXRGTEdWQlFXNUNPMEZCUTBRc1J6czdhMEpCUlVSRExFMHNjVUpCUVZNN1FVRkRVQ3hYUVVGUExFdEJRVXRHTEZGQlFWbzdRVUZEUkN4SE96czdPenRCUVZwSFNDeExMRU5CUTBkTkxGa3NSMEZCWlR0QlFVTndRa01zVjBGQlV6dEJRVVJYTEVNN08ydENRV05VTEZWQlFVTkRMRTlCUVVRc1JVRkJWVU1zVVVGQlZqdEJRVUZCTEZOQlFYVkNMRWxCUVVsVUxFdEJRVW9zUTBGQlZTeEZRVUZGVVN4blFrRkJSaXhGUVVGWFF5eHJRa0ZCV0N4RlFVRldMRU5CUVhaQ08wRkJRVUVzUXlJc0ltWnBiR1VpT2lKMllXeDFaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk4bk8xeHVhVzF3YjNKMElIc2diMjVHY21GdFpWVndaR0YwWlNCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVjYm1Oc1lYTnpJRlpoYkhWbElHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoZEdsaklHUmxabUYxYkhSUWNtOXdjeUE5SUh0Y2JpQWdJQ0J3WVhOemFYWmxPaUIwY25WbFhHNGdJSDA3WEc1Y2JpQWdjMlYwS0hZcElIdGNiaUFnSUNCMGFHbHpMblJ2VlhCa1lYUmxJRDBnZGp0Y2JpQWdJQ0J2YmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11YzJOb1pXUjFiR1ZrVlhCa1lYUmxLVHRjYmlBZ2ZWeHVYRzRnSUhWd1pHRjBaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1MGIxVndaR0YwWlR0Y2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1kzVnljbVZ1ZEN3Z2IyNVZjR1JoZEdVcElEMCtJRzVsZHlCV1lXeDFaU2g3SUdOMWNuSmxiblFzSUc5dVZYQmtZWFJsSUgwcE8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3ZhbHVlLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZXhwb3J0cy50aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVSZW5kZXIgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZVJlbmRlciA9IGV4cG9ydHMub25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMub25GcmFtZVN0YXJ0ID0gdW5kZWZpbmVkO1xuXG52YXIgX29uTmV4dEZyYW1lID0gcmVxdWlyZSgnLi9vbi1uZXh0LWZyYW1lJyk7XG5cbnZhciBfb25OZXh0RnJhbWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb25OZXh0RnJhbWUpO1xuXG52YXIgX2NyZWF0ZVJlbmRlclN0ZXAgPSByZXF1aXJlKCcuL2NyZWF0ZS1yZW5kZXItc3RlcCcpO1xuXG52YXIgX2NyZWF0ZVJlbmRlclN0ZXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlUmVuZGVyU3RlcCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHdpbGxSZW5kZXJOZXh0RnJhbWUgPSBmYWxzZTtcblxuLyoqXG4gKiBNYXhpbXVtIHBlcm1pdHRlZCBtcyBzaW5jZSBsYXN0IGZyYW1lXG4gKiBAdHlwZSB7TnVtYmVyfVxuICovXG52YXIgTUFYX0VMQVBTRUQgPSAyMDtcblxuLyoqXG4gKiBDdXJyZW50IGZyYW1lc3RhbXBcbiAqIEB0eXBlIHtOdW1iZXJ9XG4gKi9cbnZhciBjdXJyZW50RnJhbWVzdGFtcCA9ICgwLCBfdXRpbHMuY3VycmVudFRpbWUpKCk7XG5cbnZhciBlbGFwc2VkID0gMDtcblxuLyoqXG4gKiBGYWN0b3IgdG8gbXVsdGlwbHkgYGVsYXBzZWRgIGJ5IC0gXG4gKiAwLjUgd291bGQgYmUgc2xvdyBtb3Rpb24sIDIgd291bGQgYmUgZmFzdFxuICogQHR5cGUge051bWJlcn1cbiAqL1xudmFyIGRpbGF0aW9uID0gMTtcblxuZnVuY3Rpb24gc3RhcnRSZW5kZXJMb29wKCkge1xuICBpZiAoIXdpbGxSZW5kZXJOZXh0RnJhbWUpIHtcbiAgICB3aWxsUmVuZGVyTmV4dEZyYW1lID0gdHJ1ZTtcbiAgICAoMCwgX29uTmV4dEZyYW1lMi5kZWZhdWx0KShwcm9jZXNzRnJhbWUpO1xuICB9XG59XG5cbnZhciBmcmFtZVN0YXJ0ID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lVXBkYXRlID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lUmVuZGVyID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xudmFyIGZyYW1lRW5kID0gKDAsIF9jcmVhdGVSZW5kZXJTdGVwMi5kZWZhdWx0KShzdGFydFJlbmRlckxvb3ApO1xuXG5mdW5jdGlvbiBwcm9jZXNzRnJhbWUoZnJhbWVzdGFtcCkge1xuICB3aWxsUmVuZGVyTmV4dEZyYW1lID0gZmFsc2U7XG4gIGVsYXBzZWQgPSBNYXRoLm1heChNYXRoLm1pbihmcmFtZXN0YW1wIC0gY3VycmVudEZyYW1lc3RhbXAsIE1BWF9FTEFQU0VEKSwgMSkgKiBkaWxhdGlvbjtcbiAgY3VycmVudEZyYW1lc3RhbXAgPSBmcmFtZXN0YW1wO1xuXG4gIGZyYW1lU3RhcnQucHJvY2VzcygpO1xuICBmcmFtZVVwZGF0ZS5wcm9jZXNzKCk7XG4gIGZyYW1lUmVuZGVyLnByb2Nlc3MoKTtcbiAgZnJhbWVFbmQucHJvY2VzcygpO1xufVxuXG52YXIgb25GcmFtZVN0YXJ0ID0gZXhwb3J0cy5vbkZyYW1lU3RhcnQgPSBmcmFtZVN0YXJ0LnNjaGVkdWxlO1xudmFyIG9uRnJhbWVVcGRhdGUgPSBleHBvcnRzLm9uRnJhbWVVcGRhdGUgPSBmcmFtZVVwZGF0ZS5zY2hlZHVsZTtcbnZhciBvbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5vbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuc2NoZWR1bGU7XG52YXIgb25GcmFtZUVuZCA9IGV4cG9ydHMub25GcmFtZUVuZCA9IGZyYW1lRW5kLnNjaGVkdWxlO1xudmFyIGNhbmNlbE9uRnJhbWVTdGFydCA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVN0YXJ0ID0gZnJhbWVTdGFydC5jYW5jZWw7XG52YXIgY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGV4cG9ydHMuY2FuY2VsT25GcmFtZVVwZGF0ZSA9IGZyYW1lVXBkYXRlLmNhbmNlbDtcbnZhciBjYW5jZWxPbkZyYW1lUmVuZGVyID0gZXhwb3J0cy5jYW5jZWxPbkZyYW1lUmVuZGVyID0gZnJhbWVSZW5kZXIuY2FuY2VsO1xudmFyIGNhbmNlbE9uRnJhbWVFbmQgPSBleHBvcnRzLmNhbmNlbE9uRnJhbWVFbmQgPSBmcmFtZUVuZC5jYW5jZWw7XG5cbnZhciB0aW1lU2luY2VMYXN0RnJhbWUgPSBleHBvcnRzLnRpbWVTaW5jZUxhc3RGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGVsYXBzZWQ7XG59O1xudmFyIGN1cnJlbnRGcmFtZVRpbWVzdGFtcCA9IGV4cG9ydHMuY3VycmVudEZyYW1lVGltZXN0YW1wID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY3VycmVudEZyYW1lc3RhbXA7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2xzaWQybHNiRkpsYm1SbGNrNWxlSFJHY21GdFpTSXNJazFCV0Y5RlRFRlFVMFZFSWl3aVkzVnljbVZ1ZEVaeVlXMWxjM1JoYlhBaUxDSmxiR0Z3YzJWa0lpd2laR2xzWVhScGIyNGlMQ0p6ZEdGeWRGSmxibVJsY2t4dmIzQWlMQ0p3Y205alpYTnpSbkpoYldVaUxDSm1jbUZ0WlZOMFlYSjBJaXdpWm5KaGJXVlZjR1JoZEdVaUxDSm1jbUZ0WlZKbGJtUmxjaUlzSW1aeVlXMWxSVzVrSWl3aVpuSmhiV1Z6ZEdGdGNDSXNJazFoZEdnaUxDSnRZWGdpTENKdGFXNGlMQ0p3Y205alpYTnpJaXdpYjI1R2NtRnRaVk4wWVhKMElpd2ljMk5vWldSMWJHVWlMQ0p2YmtaeVlXMWxWWEJrWVhSbElpd2liMjVHY21GdFpWSmxibVJsY2lJc0ltOXVSbkpoYldWRmJtUWlMQ0pqWVc1alpXeFBia1p5WVcxbFUzUmhjblFpTENKallXNWpaV3dpTENKallXNWpaV3hQYmtaeVlXMWxWWEJrWVhSbElpd2lZMkZ1WTJWc1QyNUdjbUZ0WlZKbGJtUmxjaUlzSW1OaGJtTmxiRTl1Um5KaGJXVkZibVFpTENKMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVaUxDSmpkWEp5Wlc1MFJuSmhiV1ZVYVcxbGMzUmhiWEFpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUlVFc1NVRkJTVUVzYzBKQlFYTkNMRXRCUVRGQ096dEJRVVZCT3pzN08wRkJTVUVzU1VGQlRVTXNZMEZCWXl4RlFVRndRanM3UVVGRlFUczdPenRCUVVsQkxFbEJRVWxETEc5Q1FVRnZRaXg1UWtGQmVFSTdPMEZCUlVFc1NVRkJTVU1zVlVGQlZTeERRVUZrT3p0QlFVVkJPenM3T3p0QlFVdEJMRWxCUVVsRExGZEJRVmNzUTBGQlpqczdRVUZGUVN4VFFVRlRReXhsUVVGVUxFZEJRVEpDTzBGQlEzcENMRTFCUVVrc1EwRkJRMHdzYlVKQlFVd3NSVUZCTUVJN1FVRkRlRUpCTERCQ1FVRnpRaXhKUVVGMFFqdEJRVU5CTEN0Q1FVRlpUU3haUVVGYU8wRkJRMFE3UVVGRFJqczdRVUZGUkN4SlFVRk5ReXhoUVVGaExHZERRVUZwUWtZc1pVRkJha0lzUTBGQmJrSTdRVUZEUVN4SlFVRk5SeXhqUVVGakxHZERRVUZwUWtnc1pVRkJha0lzUTBGQmNFSTdRVUZEUVN4SlFVRk5TU3hqUVVGakxHZERRVUZwUWtvc1pVRkJha0lzUTBGQmNFSTdRVUZEUVN4SlFVRk5TeXhYUVVGWExHZERRVUZwUWt3c1pVRkJha0lzUTBGQmFrSTdPMEZCUlVFc1UwRkJVME1zV1VGQlZDeERRVUZ6UWtzc1ZVRkJkRUlzUlVGQmEwTTdRVUZEYUVOWUxIZENRVUZ6UWl4TFFVRjBRanRCUVVOQlJ5eFpRVUZWVXl4TFFVRkxReXhIUVVGTUxFTkJRVk5FTEV0QlFVdEZMRWRCUVV3c1EwRkJVMGdzWVVGQllWUXNhVUpCUVhSQ0xFVkJRWGxEUkN4WFFVRjZReXhEUVVGVUxFVkJRV2RGTEVOQlFXaEZMRWxCUVhGRlJ5eFJRVUV2UlR0QlFVTkJSaXh6UWtGQmIwSlRMRlZCUVhCQ096dEJRVVZCU2l4aFFVRlhVU3hQUVVGWU8wRkJRMEZRTEdOQlFWbFBMRTlCUVZvN1FVRkRRVTRzWTBGQldVMHNUMEZCV2p0QlFVTkJUQ3hYUVVGVFN5eFBRVUZVTzBGQlEwUTdPMEZCUlUwc1NVRkJUVU1zYzBOQlFXVlVMRmRCUVZkVkxGRkJRV2hETzBGQlEwRXNTVUZCVFVNc2QwTkJRV2RDVml4WlFVRlpVeXhSUVVGc1F6dEJRVU5CTEVsQlFVMUZMSGREUVVGblFsWXNXVUZCV1ZFc1VVRkJiRU03UVVGRFFTeEpRVUZOUnl4clEwRkJZVllzVTBGQlUwOHNVVUZCTlVJN1FVRkRRU3hKUVVGTlNTeHJSRUZCY1VKa0xGZEJRVmRsTEUxQlFYUkRPMEZCUTBFc1NVRkJUVU1zYjBSQlFYTkNaaXhaUVVGWll5eE5RVUY0UXp0QlFVTkJMRWxCUVUxRkxHOUVRVUZ6UW1Zc1dVRkJXV0VzVFVGQmVFTTdRVUZEUVN4SlFVRk5SeXc0UTBGQmJVSm1MRk5CUVZOWkxFMUJRV3hET3p0QlFVVkJMRWxCUVUxSkxHdEVRVUZ4UWp0QlFVRkJMRk5CUVUxMlFpeFBRVUZPTzBGQlFVRXNRMEZCTTBJN1FVRkRRU3hKUVVGTmQwSXNkMFJCUVhkQ08wRkJRVUVzVTBGQlRYcENMR2xDUVVGT08wRkJRVUVzUTBGQk9VSWlMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnYjI1T1pYaDBSbkpoYldVZ1puSnZiU0FuTGk5dmJpMXVaWGgwTFdaeVlXMWxKenRjYm1sdGNHOXlkQ0JqY21WaGRHVlNaVzVrWlhKVGRHVndJR1p5YjIwZ0p5NHZZM0psWVhSbExYSmxibVJsY2kxemRHVndKenRjYm1sdGNHOXlkQ0I3SUdOMWNuSmxiblJVYVcxbElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dWJHVjBJSGRwYkd4U1pXNWtaWEpPWlhoMFJuSmhiV1VnUFNCbVlXeHpaVHRjYmx4dUx5b3FYRzRnS2lCTllYaHBiWFZ0SUhCbGNtMXBkSFJsWkNCdGN5QnphVzVqWlNCc1lYTjBJR1p5WVcxbFhHNGdLaUJBZEhsd1pTQjdUblZ0WW1WeWZWeHVJQ292WEc1amIyNXpkQ0JOUVZoZlJVeEJVRk5GUkNBOUlESXdPMXh1WEc0dktpcGNiaUFxSUVOMWNuSmxiblFnWm5KaGJXVnpkR0Z0Y0Z4dUlDb2dRSFI1Y0dVZ2UwNTFiV0psY24xY2JpQXFMMXh1YkdWMElHTjFjbkpsYm5SR2NtRnRaWE4wWVcxd0lEMGdZM1Z5Y21WdWRGUnBiV1VvS1R0Y2JseHViR1YwSUdWc1lYQnpaV1FnUFNBd08xeHVYRzR2S2lwY2JpQXFJRVpoWTNSdmNpQjBieUJ0ZFd4MGFYQnNlU0JnWld4aGNITmxaR0FnWW5rZ0xTQmNiaUFxSURBdU5TQjNiM1ZzWkNCaVpTQnpiRzkzSUcxdmRHbHZiaXdnTWlCM2IzVnNaQ0JpWlNCbVlYTjBYRzRnS2lCQWRIbHdaU0I3VG5WdFltVnlmVnh1SUNvdlhHNXNaWFFnWkdsc1lYUnBiMjRnUFNBeE8xeHVYRzVtZFc1amRHbHZiaUJ6ZEdGeWRGSmxibVJsY2t4dmIzQW9LU0I3WEc0Z0lHbG1JQ2doZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNrZ2UxeHVJQ0FnSUhkcGJHeFNaVzVrWlhKT1pYaDBSbkpoYldVZ1BTQjBjblZsTzF4dUlDQWdJRzl1VG1WNGRFWnlZVzFsS0hCeWIyTmxjM05HY21GdFpTazdYRzRnSUgxY2JuMWNibHh1WTI5dWMzUWdabkpoYldWVGRHRnlkQ0E5SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLVHRjYm1OdmJuTjBJR1p5WVcxbFZYQmtZWFJsSUQwZ1kzSmxZWFJsVW1WdVpHVnlVM1JsY0NoemRHRnlkRkpsYm1SbGNreHZiM0FwTzF4dVkyOXVjM1FnWm5KaGJXVlNaVzVrWlhJZ1BTQmpjbVZoZEdWU1pXNWtaWEpUZEdWd0tITjBZWEowVW1WdVpHVnlURzl2Y0NrN1hHNWpiMjV6ZENCbWNtRnRaVVZ1WkNBOUlHTnlaV0YwWlZKbGJtUmxjbE4wWlhBb2MzUmhjblJTWlc1a1pYSk1iMjl3S1R0Y2JseHVablZ1WTNScGIyNGdjSEp2WTJWemMwWnlZVzFsS0daeVlXMWxjM1JoYlhBcElIdGNiaUFnZDJsc2JGSmxibVJsY2s1bGVIUkdjbUZ0WlNBOUlHWmhiSE5sTzF4dUlDQmxiR0Z3YzJWa0lEMGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9abkpoYldWemRHRnRjQ0F0SUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TENCTlFWaGZSVXhCVUZORlJDa3NJREVwSUNvZ1pHbHNZWFJwYjI0N1hHNGdJR04xY25KbGJuUkdjbUZ0WlhOMFlXMXdJRDBnWm5KaGJXVnpkR0Z0Y0R0Y2JseHVJQ0JtY21GdFpWTjBZWEowTG5CeWIyTmxjM01vS1R0Y2JpQWdabkpoYldWVmNHUmhkR1V1Y0hKdlkyVnpjeWdwTzF4dUlDQm1jbUZ0WlZKbGJtUmxjaTV3Y205alpYTnpLQ2s3WEc0Z0lHWnlZVzFsUlc1a0xuQnliMk5sYzNNb0tUdGNibjFjYmx4dVpYaHdiM0owSUdOdmJuTjBJRzl1Um5KaGJXVlRkR0Z5ZENBOUlHWnlZVzFsVTNSaGNuUXVjMk5vWldSMWJHVTdYRzVsZUhCdmNuUWdZMjl1YzNRZ2IyNUdjbUZ0WlZWd1pHRjBaU0E5SUdaeVlXMWxWWEJrWVhSbExuTmphR1ZrZFd4bE8xeHVaWGh3YjNKMElHTnZibk4wSUc5dVJuSmhiV1ZTWlc1a1pYSWdQU0JtY21GdFpWSmxibVJsY2k1elkyaGxaSFZzWlR0Y2JtVjRjRzl5ZENCamIyNXpkQ0J2YmtaeVlXMWxSVzVrSUQwZ1puSmhiV1ZGYm1RdWMyTm9aV1IxYkdVN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWTjBZWEowSUQwZ1puSmhiV1ZUZEdGeWRDNWpZVzVqWld3N1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlNBOUlHWnlZVzFsVlhCa1lYUmxMbU5oYm1ObGJEdGNibVY0Y0c5eWRDQmpiMjV6ZENCallXNWpaV3hQYmtaeVlXMWxVbVZ1WkdWeUlEMGdabkpoYldWU1pXNWtaWEl1WTJGdVkyVnNPMXh1Wlhod2IzSjBJR052Ym5OMElHTmhibU5sYkU5dVJuSmhiV1ZGYm1RZ1BTQm1jbUZ0WlVWdVpDNWpZVzVqWld3N1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVZ1BTQW9LU0E5UGlCbGJHRndjMlZrTzF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUkdjbUZ0WlZScGJXVnpkR0Z0Y0NBOUlDZ3BJRDArSUdOMWNuSmxiblJHY21GdFpYTjBZVzF3TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2ZyYW1lc3luYy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZnJhbWVzeW5jID0gcmVxdWlyZSgnLi4vZnJhbWVzeW5jJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGxhd3N1aXQgLSBzb3JyeVxuICBmdW5jdGlvbiBBY3Rpb24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uKTtcblxuICAgIHRoaXMuc2NoZWR1bGVkVXBkYXRlID0gdGhpcy5zY2hlZHVsZWRVcGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0UHJvcHMpO1xuXG4gICAgdGhpcy5zZXRQcm9wcyhwcm9wcyk7XG5cbiAgICB0aGlzLmN1cnJlbnQgPSBwcm9wcy5jdXJyZW50IHx8IHByb3BzLmZyb20gfHwgMDtcbiAgfVxuXG4gIEFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25TdGFydCA9IF9wcm9wcy5vblN0YXJ0LFxuICAgICAgICBfb25TdGFydCA9IF9wcm9wcy5fb25TdGFydCxcbiAgICAgICAgcGFzc2l2ZSA9IF9wcm9wcy5wYXNzaXZlO1xuXG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVVcGRhdGUpKHRoaXMuc2NoZWR1bGVkVXBkYXRlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vblN0YXJ0KSB0aGlzLm9uU3RhcnQoKTtcbiAgICBpZiAob25TdGFydCkgb25TdGFydCh0aGlzKTtcbiAgICBpZiAoX29uU3RhcnQpIF9vblN0YXJ0KHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uU3RvcCA9IF9wcm9wczIub25TdG9wLFxuICAgICAgICBfb25TdG9wID0gX3Byb3BzMi5fb25TdG9wLFxuICAgICAgICBwYXNzaXZlID0gX3Byb3BzMi5wYXNzaXZlO1xuXG5cbiAgICBpZiAoIXBhc3NpdmUpIHtcbiAgICAgIHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XG4gICAgICAoMCwgX2ZyYW1lc3luYy5jYW5jZWxPbkZyYW1lVXBkYXRlKSh0aGlzLnNjaGVkdWxlZFVwZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25TdG9wKSB0aGlzLm9uU3RvcCgpO1xuICAgIGlmIChvblN0b3ApIG9uU3RvcCh0aGlzKTtcbiAgICBpZiAoX29uU3RvcCkgX29uU3RvcCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uQ29tcGxldGUgPSBfcHJvcHMzLm9uQ29tcGxldGUsXG4gICAgICAgIF9vbkNvbXBsZXRlID0gX3Byb3BzMy5fb25Db21wbGV0ZTtcblxuXG4gICAgdGhpcy5zdG9wKCk7XG5cbiAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICBpZiAob25Db21wbGV0ZSkgb25Db21wbGV0ZSh0aGlzKTtcbiAgICBpZiAoX29uQ29tcGxldGUpIF9vbkNvbXBsZXRlKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZWRVcGRhdGUgPSBmdW5jdGlvbiBzY2hlZHVsZWRVcGRhdGUoKSB7XG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9ICgwLCBfZnJhbWVzeW5jLnRpbWVTaW5jZUxhc3RGcmFtZSkoKTtcbiAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgIG9uVXBkYXRlID0gX3Byb3BzNC5vblVwZGF0ZSxcbiAgICAgICAgcGFzc2l2ZSA9IF9wcm9wczQucGFzc2l2ZTtcblxuXG4gICAgaWYgKHRoaXMudXBkYXRlKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLnVwZGF0ZSh0aGlzLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGlmIChvblVwZGF0ZSkgb25VcGRhdGUodGhpcy5jdXJyZW50LCB0aGlzKTtcbiAgICB0aGlzLmZpcmVMaXN0ZW5lcnMoKTtcblxuICAgIGlmICghcGFzc2l2ZSAmJiB0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgKDAsIF9mcmFtZXN5bmMub25GcmFtZVVwZGF0ZSkodGhpcy5zY2hlZHVsZWRVcGRhdGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQWN0aW9uQ29tcGxldGUgJiYgdGhpcy5pc0FjdGlvbkNvbXBsZXRlKCkpIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24gc2V0UHJvcHMocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHByb3BzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLm91dHB1dCA9IGZ1bmN0aW9uIG91dHB1dChmdW5jKSB7XG4gICAgdGhpcy5wcm9wcy5vblVwZGF0ZSA9IGZ1bmM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCh2KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmdldFByb3AgPSBmdW5jdGlvbiBnZXRQcm9wKGtleSkge1xuICAgIHJldHVybiB0aGlzLnByb3BzW2tleV07XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5nZXRWZWxvY2l0eSA9IGZ1bmN0aW9uIGdldFZlbG9jaXR5KCkge1xuICAgIHJldHVybiAoMCwgX2NhbGMuc3BlZWRQZXJTZWNvbmQpKHRoaXMuY3VycmVudCAtIHRoaXMucHJldiwgdGhpcy5sYXN0VXBkYXRlZCk7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzIHx8IFtdO1xuICAgIHRoaXMubnVtTGlzdGVuZXJzID0gdGhpcy5udW1MaXN0ZW5lcnMgfHwgMDtcbiAgICBpZiAodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMubnVtTGlzdGVuZXJzKys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHZhciBsaXN0ZW5lckluZGV4ID0gdGhpcy5saXN0ZW5lcnMgPyB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSA6IC0xO1xuICAgIGlmIChsaXN0ZW5lckluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5udW1MaXN0ZW5lcnMtLTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShsaXN0ZW5lckluZGV4LCAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5maXJlTGlzdGVuZXJzID0gZnVuY3Rpb24gZmlyZUxpc3RlbmVycygpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuZ2V0KCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bUxpc3RlbmVyczsgaSsrKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyc1tpXShjdXJyZW50LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIEFjdGlvbjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiSWtGamRHbHZiaUlzSW5CeWIzQnpJaXdpYzJOb1pXUjFiR1ZrVlhCa1lYUmxJaXdpWW1sdVpDSXNJbU52Ym5OMGNuVmpkRzl5SWl3aVpHVm1ZWFZzZEZCeWIzQnpJaXdpYzJWMFVISnZjSE1pTENKamRYSnlaVzUwSWl3aVpuSnZiU0lzSW5OMFlYSjBJaXdpYjI1VGRHRnlkQ0lzSWw5dmJsTjBZWEowSWl3aWNHRnpjMmwyWlNJc0lsOXBjMEZqZEdsMlpTSXNJbk4wYjNBaUxDSnZibE4wYjNBaUxDSmZiMjVUZEc5d0lpd2lZMjl0Y0d4bGRHVWlMQ0p2YmtOdmJYQnNaWFJsSWl3aVgyOXVRMjl0Y0d4bGRHVWlMQ0pzWVhOMFZYQmtZWFJsWkNJc0luQnlaWFlpTENKdmJsVndaR0YwWlNJc0luVndaR0YwWlNJc0ltWnBjbVZNYVhOMFpXNWxjbk1pTENKcGMwRmpkR2x2YmtOdmJYQnNaWFJsSWl3aWIzVjBjSFYwSWl3aVpuVnVZeUlzSW1kbGRDSXNJbk5sZENJc0luWWlMQ0puWlhSUWNtOXdJaXdpYTJWNUlpd2laMlYwVm1Wc2IyTnBkSGtpTENKcGMwRmpkR2wyWlNJc0ltRmtaRXhwYzNSbGJtVnlJaXdpYkdsemRHVnVaWElpTENKc2FYTjBaVzVsY25NaUxDSnVkVzFNYVhOMFpXNWxjbk1pTENKcGJtUmxlRTltSWl3aWNIVnphQ0lzSW5KbGJXOTJaVXhwYzNSbGJtVnlJaXdpYkdsemRHVnVaWEpKYm1SbGVDSXNJbk53YkdsalpTSXNJbWtpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVRkJPenRCUVVOQk96czdPMGxCUlUxQkxFMDdRVUZCVXp0QlFVTmlMR3RDUVVGWlF5eExRVUZhTEVWQlFXMUNPMEZCUVVFN08wRkJRMnBDTEZOQlFVdERMR1ZCUVV3c1IwRkJkVUlzUzBGQlMwRXNaVUZCVEN4RFFVRnhRa01zU1VGQmNrSXNRMEZCTUVJc1NVRkJNVUlzUTBGQmRrSTdPMEZCUlVFc1UwRkJTMFlzUzBGQlRDeG5Ra0ZEU3l4TFFVRkxSeXhYUVVGTUxFTkJRV2xDUXl4WlFVUjBRanM3UVVGSlFTeFRRVUZMUXl4UlFVRk1MRU5CUVdOTUxFdEJRV1E3TzBGQlJVRXNVMEZCUzAwc1QwRkJUQ3hIUVVGbFRpeE5RVUZOVFN4UFFVRk9MRWxCUVdsQ1RpeE5RVUZOVHl4SlFVRjJRaXhKUVVFclFpeERRVUU1UXp0QlFVTkVPenR0UWtGRlJFTXNTeXh2UWtGQlVUdEJRVUZCTEdsQ1FVTnBReXhMUVVGTFVpeExRVVIwUXp0QlFVRkJMRkZCUTBWVExFOUJSRVlzVlVGRFJVRXNUMEZFUmp0QlFVRkJMRkZCUTFkRExGRkJSRmdzVlVGRFYwRXNVVUZFV0R0QlFVRkJMRkZCUTNGQ1F5eFBRVVJ5UWl4VlFVTnhRa0VzVDBGRWNrSTdPenRCUVVkT0xGRkJRVWtzUTBGQlEwRXNUMEZCVEN4RlFVRmpPMEZCUTFvc1YwRkJTME1zVTBGQlRDeEhRVUZwUWl4SlFVRnFRanRCUVVOQkxHOURRVUZqTEV0QlFVdFlMR1ZCUVc1Q08wRkJRMFE3TzBGQlJVUXNVVUZCU1N4TFFVRkxVU3hQUVVGVUxFVkJRV3RDTEV0QlFVdEJMRTlCUVV3N1FVRkRiRUlzVVVGQlNVRXNUMEZCU2l4RlFVRmhRU3hSUVVGUkxFbEJRVkk3UVVGRFlpeFJRVUZKUXl4UlFVRktMRVZCUVdOQkxGTkJRVk1zU1VGQlZEczdRVUZGWkN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSRWNzU1N4dFFrRkJUenRCUVVGQkxHdENRVU5uUXl4TFFVRkxZaXhMUVVSeVF6dEJRVUZCTEZGQlEwZGpMRTFCUkVnc1YwRkRSMEVzVFVGRVNEdEJRVUZCTEZGQlExZERMRTlCUkZnc1YwRkRWMEVzVDBGRVdEdEJRVUZCTEZGQlEyOUNTaXhQUVVSd1FpeFhRVU52UWtFc1QwRkVjRUk3T3p0QlFVZE1MRkZCUVVrc1EwRkJRMEVzVDBGQlRDeEZRVUZqTzBGQlExb3NWMEZCUzBNc1UwRkJUQ3hIUVVGcFFpeExRVUZxUWp0QlFVTkJMREJEUVVGdlFpeExRVUZMV0N4bFFVRjZRanRCUVVORU96dEJRVVZFTEZGQlFVa3NTMEZCUzJFc1RVRkJWQ3hGUVVGcFFpeExRVUZMUVN4TlFVRk1PMEZCUTJwQ0xGRkJRVWxCTEUxQlFVb3NSVUZCV1VFc1QwRkJUeXhKUVVGUU8wRkJRMW9zVVVGQlNVTXNUMEZCU2l4RlFVRmhRU3hSUVVGUkxFbEJRVkk3TzBGQlJXSXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdiVUpCUlVSRExGRXNkVUpCUVZjN1FVRkJRU3hyUWtGRE1rSXNTMEZCUzJoQ0xFdEJSR2hETzBGQlFVRXNVVUZEUkdsQ0xGVkJSRU1zVjBGRFJFRXNWVUZFUXp0QlFVRkJMRkZCUTFkRExGZEJSRmdzVjBGRFYwRXNWMEZFV0RzN08wRkJSMVFzVTBGQlMwd3NTVUZCVERzN1FVRkZRU3hSUVVGSkxFdEJRVXRKTEZWQlFWUXNSVUZCY1VJc1MwRkJTMEVzVlVGQlREdEJRVU55UWl4UlFVRkpRU3hWUVVGS0xFVkJRV2RDUVN4WFFVRlhMRWxCUVZnN1FVRkRhRUlzVVVGQlNVTXNWMEZCU2l4RlFVRnBRa0VzV1VGQldTeEpRVUZhT3p0QlFVVnFRaXhYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJHcENMR1VzT0VKQlFXdENPMEZCUTJoQ0xGTkJRVXRyUWl4WFFVRk1MRWRCUVcxQ0xHOURRVUZ1UWp0QlFVTkJMRk5CUVV0RExFbEJRVXdzUjBGQldTeExRVUZMWkN4UFFVRnFRanM3UVVGR1owSXNhMEpCU1dNc1MwRkJTMDRzUzBGS2JrSTdRVUZCUVN4UlFVbFNjVUlzVVVGS1VTeFhRVWxTUVN4UlFVcFJPMEZCUVVFc1VVRkpSVllzVDBGS1JpeFhRVWxGUVN4UFFVcEdPenM3UVVGTmFFSXNVVUZCU1N4TFFVRkxWeXhOUVVGVUxFVkJRV2xDTzBGQlEyWXNWMEZCUzJoQ0xFOUJRVXdzUjBGQlpTeExRVUZMWjBJc1RVRkJUQ3hEUVVGWkxFdEJRVXRvUWl4UFFVRnFRaXhEUVVGbU8wRkJRMFE3TzBGQlJVUXNVVUZCU1dVc1VVRkJTaXhGUVVGalFTeFRRVUZUTEV0QlFVdG1MRTlCUVdRc1JVRkJkVUlzU1VGQmRrSTdRVUZEWkN4VFFVRkxhVUlzWVVGQlREczdRVUZGUVN4UlFVRkpMRU5CUVVOYUxFOUJRVVFzU1VGQldTeExRVUZMUXl4VFFVRnlRaXhGUVVGblF6dEJRVU01UWl4dlEwRkJZeXhMUVVGTFdDeGxRVUZ1UWp0QlFVTkVPenRCUVVWRUxGRkJRVWtzUzBGQlMzVkNMR2RDUVVGTUxFbEJRWGxDTEV0QlFVdEJMR2RDUVVGTUxFVkJRVGRDTEVWQlFYTkVPMEZCUTNCRUxGZEJRVXRTTEZGQlFVdzdRVUZEUkRzN1FVRkZSQ3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJGZ3NVU3h4UWtGQlUwd3NTeXhGUVVGUE8wRkJRMlFzVTBGQlMwRXNTMEZCVEN4blFrRkRTeXhMUVVGTFFTeExRVVJXTEVWQlJVdEJMRXRCUmt3N1FVRkpRU3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJIbENMRTBzYlVKQlFVOURMRWtzUlVGQlRUdEJRVU5ZTEZOQlFVc3hRaXhMUVVGTUxFTkJRVmR4UWl4UlFVRllMRWRCUVhOQ1N5eEpRVUYwUWp0QlFVTkJMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMjFDUVVWRVF5eEhMR3RDUVVGTk8wRkJRMG9zVjBGQlR5eExRVUZMY2tJc1QwRkJXanRCUVVORUxFYzdPMjFDUVVWRWMwSXNSeXhuUWtGQlNVTXNReXhGUVVGSE8wRkJRMHdzVTBGQlMzWkNMRTlCUVV3c1IwRkJaWFZDTEVOQlFXWTdRVUZEUVN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSRU1zVHl4dlFrRkJVVU1zUnl4RlFVRkxPMEZCUTFnc1YwRkJUeXhMUVVGTEwwSXNTMEZCVEN4RFFVRlhLMElzUjBGQldDeERRVUZRTzBGQlEwUXNSenM3YlVKQlJVUkRMRmNzTUVKQlFXTTdRVUZEV2l4WFFVRlBMREJDUVVGbExFdEJRVXN4UWl4UFFVRk1MRWRCUVdVc1MwRkJTMk1zU1VGQmJrTXNSVUZCZVVNc1MwRkJTMFFzVjBGQk9VTXNRMEZCVUR0QlFVTkVMRWM3TzIxQ1FVVkVZeXhSTEhWQ1FVRlhPMEZCUTFRc1YwRkJUeXhMUVVGTGNrSXNVMEZCV2p0QlFVTkVMRWM3TzIxQ1FVVkVjMElzVnl4M1FrRkJXVU1zVVN4RlFVRlZPMEZCUTNCQ0xGTkJRVXRETEZOQlFVd3NSMEZCYVVJc1MwRkJTMEVzVTBGQlRDeEpRVUZyUWl4RlFVRnVRenRCUVVOQkxGTkJRVXRETEZsQlFVd3NSMEZCYjBJc1MwRkJTMEVzV1VGQlRDeEpRVUZ4UWl4RFFVRjZRenRCUVVOQkxGRkJRVWtzUzBGQlMwUXNVMEZCVEN4RFFVRmxSU3hQUVVGbUxFTkJRWFZDU0N4UlFVRjJRaXhOUVVGeFF5eERRVUZETEVOQlFURkRMRVZCUVRaRE8wRkJRek5ETEZkQlFVdERMRk5CUVV3c1EwRkJaVWNzU1VGQlppeERRVUZ2UWtvc1VVRkJjRUk3UVVGRFFTeFhRVUZMUlN4WlFVRk1PMEZCUTBRN1FVRkRSQ3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJFY3NZeXd5UWtGQlpVd3NVU3hGUVVGVk8wRkJRM1pDTEZGQlFVMU5MR2RDUVVGcFFpeExRVUZMVEN4VFFVRk9MRWRCUVcxQ0xFdEJRVXRCTEZOQlFVd3NRMEZCWlVVc1QwRkJaaXhEUVVGMVFrZ3NVVUZCZGtJc1EwRkJia0lzUjBGQmMwUXNRMEZCUXl4RFFVRTNSVHRCUVVOQkxGRkJRVWxOTEd0Q1FVRnJRaXhEUVVGRExFTkJRWFpDTEVWQlFUQkNPMEZCUTNoQ0xGZEJRVXRLTEZsQlFVdzdRVUZEUVN4WFFVRkxSQ3hUUVVGTUxFTkJRV1ZOTEUxQlFXWXNRMEZCYzBKRUxHRkJRWFJDTEVWQlFYRkRMRU5CUVhKRE8wRkJRMFE3UVVGRFJDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHRRa0ZGUkd4Q0xHRXNORUpCUVdkQ08wRkJRMlFzVVVGQlRXcENMRlZCUVZVc1MwRkJTM0ZDTEVkQlFVd3NSVUZCYUVJN1FVRkRRU3hUUVVGTExFbEJRVWxuUWl4SlFVRkpMRU5CUVdJc1JVRkJaMEpCTEVsQlFVa3NTMEZCUzA0c1dVRkJla0lzUlVGQmRVTk5MRWRCUVhaRExFVkJRVFJETzBGQlF6RkRMRmRCUVV0UUxGTkJRVXdzUTBGQlpVOHNRMEZCWml4RlFVRnJRbkpETEU5QlFXeENMRVZCUVRKQ0xFbEJRVE5DTzBGQlEwUTdRVUZEUkN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3pzN096dHJRa0ZIV1ZBc1RTSXNJbVpwYkdVaU9pSnBibVJsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUc5dVJuSmhiV1ZWY0dSaGRHVXNJR05oYm1ObGJFOXVSbkpoYldWVmNHUmhkR1VzSUhScGJXVlRhVzVqWlV4aGMzUkdjbUZ0WlNCOUlHWnliMjBnSnk0dUwyWnlZVzFsYzNsdVl5YzdYRzVwYlhCdmNuUWdleUJ6Y0dWbFpGQmxjbE5sWTI5dVpDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYmx4dVkyeGhjM01nUVdOMGFXOXVJSHNnTHk4Z2JHRjNjM1ZwZENBdElITnZjbko1WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ2RHaHBjeTV6WTJobFpIVnNaV1JWY0dSaGRHVWdQU0IwYUdsekxuTmphR1ZrZFd4bFpGVndaR0YwWlM1aWFXNWtLSFJvYVhNcE8xeHVYRzRnSUNBZ2RHaHBjeTV3Y205d2N5QTlJSHRjYmlBZ0lDQWdJQzR1TG5Sb2FYTXVZMjl1YzNSeWRXTjBiM0l1WkdWbVlYVnNkRkJ5YjNCelhHNGdJQ0FnZlR0Y2JseHVJQ0FnSUhSb2FYTXVjMlYwVUhKdmNITW9jSEp2Y0hNcE8xeHVYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBJRDBnY0hKdmNITXVZM1Z5Y21WdWRDQjhmQ0J3Y205d2N5NW1jbTl0SUh4OElEQTdYRzRnSUgxY2JseHVJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHOXVVM1JoY25Rc0lGOXZibE4wWVhKMExDQndZWE56YVhabElIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tDRndZWE56YVhabEtTQjdYRzRnSUNBZ0lDQjBhR2x6TGw5cGMwRmpkR2wyWlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0J2YmtaeVlXMWxWWEJrWVhSbEtIUm9hWE11YzJOb1pXUjFiR1ZrVlhCa1lYUmxLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvZEdocGN5NXZibE4wWVhKMEtTQjBhR2x6TG05dVUzUmhjblFvS1R0Y2JpQWdJQ0JwWmlBb2IyNVRkR0Z5ZENrZ2IyNVRkR0Z5ZENoMGFHbHpLVHRjYmlBZ0lDQnBaaUFvWDI5dVUzUmhjblFwSUY5dmJsTjBZWEowS0hSb2FYTXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCemRHOXdLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2diMjVUZEc5d0xDQmZiMjVUZEc5d0xDQndZWE56YVhabElIMGdQU0IwYUdsekxuQnliM0J6TzF4dVhHNGdJQ0FnYVdZZ0tDRndZWE56YVhabEtTQjdYRzRnSUNBZ0lDQjBhR2x6TGw5cGMwRmpkR2wyWlNBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnWTJGdVkyVnNUMjVHY21GdFpWVndaR0YwWlNoMGFHbHpMbk5qYUdWa2RXeGxaRlZ3WkdGMFpTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWIyNVRkRzl3S1NCMGFHbHpMbTl1VTNSdmNDZ3BPMXh1SUNBZ0lHbG1JQ2h2YmxOMGIzQXBJRzl1VTNSdmNDaDBhR2x6S1R0Y2JpQWdJQ0JwWmlBb1gyOXVVM1J2Y0NrZ1gyOXVVM1J2Y0NoMGFHbHpLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ1kyOXRjR3hsZEdVb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCdmJrTnZiWEJzWlhSbExDQmZiMjVEYjIxd2JHVjBaU0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNibHh1SUNBZ0lIUm9hWE11YzNSdmNDZ3BPMXh1WEc0Z0lDQWdhV1lnS0hSb2FYTXViMjVEYjIxd2JHVjBaU2tnZEdocGN5NXZia052YlhCc1pYUmxLQ2s3WEc0Z0lDQWdhV1lnS0c5dVEyOXRjR3hsZEdVcElHOXVRMjl0Y0d4bGRHVW9kR2hwY3lrN1hHNGdJQ0FnYVdZZ0tGOXZia052YlhCc1pYUmxLU0JmYjI1RGIyMXdiR1YwWlNoMGFHbHpLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2MyTm9aV1IxYkdWa1ZYQmtZWFJsS0NrZ2UxeHVJQ0FnSUhSb2FYTXViR0Z6ZEZWd1pHRjBaV1FnUFNCMGFXMWxVMmx1WTJWTVlYTjBSbkpoYldVb0tUdGNiaUFnSUNCMGFHbHpMbkJ5WlhZZ1BTQjBhR2x6TG1OMWNuSmxiblE3WEc1Y2JpQWdJQ0JqYjI1emRDQjdJRzl1VlhCa1lYUmxMQ0J3WVhOemFYWmxJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWRYQmtZWFJsS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbU4xY25KbGJuUWdQU0IwYUdsekxuVndaR0YwWlNoMGFHbHpMbU4xY25KbGJuUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2h2YmxWd1pHRjBaU2tnYjI1VmNHUmhkR1VvZEdocGN5NWpkWEp5Wlc1MExDQjBhR2x6S1R0Y2JpQWdJQ0IwYUdsekxtWnBjbVZNYVhOMFpXNWxjbk1vS1R0Y2JseHVJQ0FnSUdsbUlDZ2hjR0Z6YzJsMlpTQW1KaUIwYUdsekxsOXBjMEZqZEdsMlpTa2dlMXh1SUNBZ0lDQWdiMjVHY21GdFpWVndaR0YwWlNoMGFHbHpMbk5qYUdWa2RXeGxaRlZ3WkdGMFpTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWFYTkJZM1JwYjI1RGIyMXdiR1YwWlNBbUppQjBhR2x6TG1selFXTjBhVzl1UTI5dGNHeGxkR1VvS1NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVqYjIxd2JHVjBaU2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2MyVjBVSEp2Y0hNb2NISnZjSE1wSUh0Y2JpQWdJQ0IwYUdsekxuQnliM0J6SUQwZ2UxeHVJQ0FnSUNBZ0xpNHVkR2hwY3k1d2NtOXdjeXhjYmlBZ0lDQWdJQzR1TG5CeWIzQnpYRzRnSUNBZ2ZUdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJRzkxZEhCMWRDaG1kVzVqS1NCN1hHNGdJQ0FnZEdocGN5NXdjbTl3Y3k1dmJsVndaR0YwWlNBOUlHWjFibU03WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCblpYUW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WTNWeWNtVnVkRHRjYmlBZ2ZWeHVYRzRnSUhObGRDaDJLU0I3WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwSUQwZ2RqdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJR2RsZEZCeWIzQW9hMlY1S1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWNISnZjSE5iYTJWNVhUdGNiaUFnZlZ4dVhHNGdJR2RsZEZabGJHOWphWFI1S0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ6Y0dWbFpGQmxjbE5sWTI5dVpDaDBhR2x6TG1OMWNuSmxiblFnTFNCMGFHbHpMbkJ5WlhZc0lIUm9hWE11YkdGemRGVndaR0YwWldRcE8xeHVJQ0I5WEc1Y2JpQWdhWE5CWTNScGRtVW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDJselFXTjBhWFpsTzF4dUlDQjlYRzVjYmlBZ1lXUmtUR2x6ZEdWdVpYSW9iR2x6ZEdWdVpYSXBJSHRjYmlBZ0lDQjBhR2x6TG14cGMzUmxibVZ5Y3lBOUlIUm9hWE11YkdsemRHVnVaWEp6SUh4OElGdGRPMXh1SUNBZ0lIUm9hWE11Ym5WdFRHbHpkR1Z1WlhKeklEMGdkR2hwY3k1dWRXMU1hWE4wWlc1bGNuTWdmSHdnTUR0Y2JpQWdJQ0JwWmlBb2RHaHBjeTVzYVhOMFpXNWxjbk11YVc1a1pYaFBaaWhzYVhOMFpXNWxjaWtnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteHBjM1JsYm1WeWN5NXdkWE5vS0d4cGMzUmxibVZ5S1R0Y2JpQWdJQ0FnSUhSb2FYTXViblZ0VEdsemRHVnVaWEp6S3lzN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2NtVnRiM1psVEdsemRHVnVaWElvYkdsemRHVnVaWElwSUh0Y2JpQWdJQ0JqYjI1emRDQnNhWE4wWlc1bGNrbHVaR1Y0SUQwZ0tIUm9hWE11YkdsemRHVnVaWEp6S1NBL0lIUm9hWE11YkdsemRHVnVaWEp6TG1sdVpHVjRUMllvYkdsemRHVnVaWElwSURvZ0xURTdYRzRnSUNBZ2FXWWdLR3hwYzNSbGJtVnlTVzVrWlhnZ0lUMDlJQzB4S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbTUxYlV4cGMzUmxibVZ5Y3kwdE8xeHVJQ0FnSUNBZ2RHaHBjeTVzYVhOMFpXNWxjbk11YzNCc2FXTmxLR3hwYzNSbGJtVnlTVzVrWlhnc0lERXBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJR1pwY21WTWFYTjBaVzVsY25Nb0tTQjdYRzRnSUNBZ1kyOXVjM1FnWTNWeWNtVnVkQ0E5SUhSb2FYTXVaMlYwS0NrN1hHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbTUxYlV4cGMzUmxibVZ5Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteHBjM1JsYm1WeWMxdHBYU2hqZFhKeVpXNTBMQ0IwYUdsektUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1FXTjBhVzl1TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2ZyYW1lc3luYyA9IHJlcXVpcmUoJy4uL2ZyYW1lc3luYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBSZW5kZXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUmVuZGVyZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVuZGVyZXIpO1xuXG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRQcm9wcywgcHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMuY2hhbmdlZFZhbHVlcyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IHN0YXRlLlxuICAgKiBJZiBga2V5YCBpcyBub3QgZGVmaW5lZCwgcmV0dXJuIGVudGlyZSBjYWNoZWQgc3RhdGUuXG4gICAqIElmIGBrZXlgIGlzIGRlZmluZWQsIHJldHVybiBjYWNoZWQgdmFsdWUgaWYgcHJlc2VudC5cbiAgICogSWYgYGtleWAgaXMgZGVmaW5lZCBhbmQgY2FjaGVkIHZhbHVlIGlzIG5vdCBwcmVzZW50LCByZWFkIGFuZCByZXR1cm4uXG4gICAqIEBwYXJhbSAge3N0cmluZ30gKG9wdGlvbmFsKSBrZXkgb2YgdmFsdWVcbiAgICogQHJldHVybiB7dmFsdWV9XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQoa2V5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZWFkIHZhbHVlIGFjY29yZGluZyB0byBgb25SZWFkYFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IE5hbWUgb2YgcHJvcGVydHkgdG8gcmVhZFxuICAgKiBAcmV0dXJuIHtbdHlwZV19XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiByZWFkKGtleSkge1xuICAgIGlmICh0aGlzLm9uUmVhZCkge1xuICAgICAgcmV0dXJuIHRoaXMub25SZWFkKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgYHN0YXRlYCB3aXRoIG5ldyB2YWx1ZXMgYW5kIHNjaGVkdWxlIGByZW5kZXJgLlxuICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzXG4gICAqIEBwYXJhbSB7dmFsdWV9IHZhbHVlIHRvc2V0XG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgdmFsdWVzID0gYXJnc1swXTtcbiAgICAgIC8vIFNldCBtdWx0aXBsZSB2YWx1ZXNcblxuICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICB0aGlzLnNldFZhbHVlKGtleSwgdmFsdWVzW2tleV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2tleTIgPSBhcmdzWzBdLFxuICAgICAgICAgIHZhbHVlID0gYXJnc1sxXTtcblxuICAgICAgdGhpcy5zZXRWYWx1ZShfa2V5MiwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgICgwLCBfZnJhbWVzeW5jLm9uRnJhbWVSZW5kZXIpKHRoaXMucmVuZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyA+IFdpbGV5IC0gNiBpbiB0aGUgTW9ybmluZ1xuICAvKipcbiAgICogU2V0IGEgc2luZ2xlIHZhbHVlXG4gICAqIElmIGEgc3RyaW5nIG9yIG51bWJlciwgc2V0IGRpcmVjdGx5LlxuICAgKiBJZiBhbiBvYmplY3Qgb3IgYXJyYXksIGNyZWF0ZSBuZXcgb2JqZWN0IG9yIGFycmF5XG4gICAqIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC4gVGhlbiBzaGFsbG93IGNvbXBhcmVcbiAgICogdG8gc2V0IGFuZCBjb21wYXJlIGluZGl2aWR1YWwgdmFsdWVzLlxuICAgKiBPbmUgb2YgdGhlIGNsZWFyZXIgZHJhd2JhY2tzIGFuZCBhbm5veWFuY2VzIHdpdGhcbiAgICogdXNpbmcgbXV0YWJsZSBpbnN0ZWFkIG9mIGltbXV0YWJsZSBzdGF0ZXMuXG4gICAqIEBwYXJhbSB7W3R5cGVdfSBrZXlcbiAgICogQHBhcmFtIHtbdHlwZV19IHZhbHVlXG4gICAqL1xuXG5cbiAgUmVuZGVyZXIucHJvdG90eXBlLnNldFZhbHVlID0gZnVuY3Rpb24gc2V0VmFsdWUoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSB0aGlzLnN0YXRlW2tleV07XG5cbiAgICAvLyBJZiBudW1iZXIgb3Igc3RyaW5nLCBzZXQgZGlyZWN0bHlcbiAgICBpZiAoKDAsIF91dGlscy5pc051bSkodmFsdWUpIHx8ICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlKSkge1xuICAgICAgaWYgKGN1cnJlbnRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoMCwgX3V0aWxzLmlzQXJyYXkpKHZhbHVlKSkge1xuICAgICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gW107XG4gICAgICB9XG5cbiAgICAgIHZhciBudW1WYWx1ZXMgPSB2YWx1ZS5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVZhbHVlczsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV1baV0gIT09IHZhbHVlW2ldKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZVtrZXldW2ldID0gdmFsdWVbaV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc09iaikodmFsdWUpKSB7XG4gICAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB7fTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgdmFsdWVLZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gIT09IHZhbHVlW3ZhbHVlS2V5XSkge1xuICAgICAgICAgIHRoaXMuc3RhdGVba2V5XVt2YWx1ZUtleV0gPSB2YWx1ZVt2YWx1ZUtleV07XG4gICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5wdXNoKGtleSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBGaXJlcyBgb25SZW5kZXJgIGlmIHZhbHVlcyBoYXZlIGNoYW5nZWQgb3IgYGZvcmNlUmVuZGVyYFxuICAgKiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICogQHJldHVybiB7dGhpc31cbiAgICovXG5cblxuICBSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBmb3JjZVJlbmRlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICBpZiAoKGZvcmNlUmVuZGVyIHx8IHRoaXMuaGFzQ2hhbmdlZCkgJiYgdGhpcy5vblJlbmRlcikge1xuICAgICAgdGhpcy5vblJlbmRlcigpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlZFZhbHVlcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIFJlbmRlcmVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSZW5kZXJlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sc2lVbVZ1WkdWeVpYSWlMQ0p3Y205d2N5SXNJbkpsYm1SbGNpSXNJbUpwYm1RaUxDSmpiMjV6ZEhKMVkzUnZjaUlzSW1SbFptRjFiSFJRY205d2N5SXNJbk4wWVhSbElpd2lZMmhoYm1kbFpGWmhiSFZsY3lJc0ltZGxkQ0lzSW10bGVTSXNJblZ1WkdWbWFXNWxaQ0lzSW5KbFlXUWlMQ0p2YmxKbFlXUWlMQ0p6WlhRaUxDSmhjbWR6SWl3aWRtRnNkV1Z6SWl3aWMyVjBWbUZzZFdVaUxDSjJZV3gxWlNJc0ltaGhjME5vWVc1blpXUWlMQ0pqZFhKeVpXNTBWbUZzZFdVaUxDSnVkVzFXWVd4MVpYTWlMQ0pzWlc1bmRHZ2lMQ0pwSWl3aWRtRnNkV1ZMWlhraUxDSndkWE5vSWl3aVptOXlZMlZTWlc1a1pYSWlMQ0p2YmxKbGJtUmxjaUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPMEZCUTBFN096czdTVUZGVFVFc1VUdEJRVU5LTEc5Q1FVRlpReXhMUVVGYUxFVkJRVzFDTzBGQlFVRTdPMEZCUTJwQ0xGTkJRVXRETEUxQlFVd3NSMEZCWXl4TFFVRkxRU3hOUVVGTUxFTkJRVmxETEVsQlFWb3NRMEZCYVVJc1NVRkJha0lzUTBGQlpEczdRVUZGUVN4VFFVRkxSaXhMUVVGTUxHZENRVU5MTEV0QlFVdEhMRmRCUVV3c1EwRkJhVUpETEZsQlJIUkNMRVZCUlV0S0xFdEJSa3c3TzBGQlMwRXNVMEZCUzBzc1MwRkJUQ3hIUVVGaExFVkJRV0k3UVVGRFFTeFRRVUZMUXl4aFFVRk1MRWRCUVhGQ0xFVkJRWEpDTzBGQlEwUTdPMEZCUlVRN096czdPenM3T3pzN2NVSkJVVUZETEVjc1owSkJRVWxETEVjc1JVRkJTenRCUVVOUUxGRkJRVWxCTEVkQlFVb3NSVUZCVXp0QlFVTlFMRlZCUVVrc1MwRkJTMGdzUzBGQlRDeERRVUZYUnl4SFFVRllMRTFCUVc5Q1F5eFRRVUY0UWl4RlFVRnRRenRCUVVOcVF5eGxRVUZQTEV0QlFVdEtMRXRCUVV3c1EwRkJWMGNzUjBGQldDeERRVUZRTzBGQlEwUXNUMEZHUkN4TlFVVlBPMEZCUTB3c1pVRkJUeXhMUVVGTFJTeEpRVUZNTEVOQlFWVkdMRWRCUVZZc1EwRkJVRHRCUVVORU8wRkJRMFlzUzBGT1JDeE5RVTFQTzBGQlEwd3NZVUZCVHl4TFFVRkxTQ3hMUVVGYU8wRkJRMFE3UVVGRFJpeEhPenRCUVVWRU96czdPenM3TzNGQ1FVdEJTeXhKTEdsQ1FVRkxSaXhITEVWQlFVczdRVUZEVWl4UlFVRkpMRXRCUVV0SExFMUJRVlFzUlVGQmFVSTdRVUZEWml4aFFVRlBMRXRCUVV0QkxFMUJRVXdzUTBGQldVZ3NSMEZCV2l4RFFVRlFPMEZCUTBRN1FVRkRSaXhIT3p0QlFVVkVPenM3T3pzN08zRkNRVXRCU1N4SExHdENRVUZoTzBGQlFVRXNjME5CUVU1RExFbEJRVTA3UVVGQlRrRXNWVUZCVFR0QlFVRkJPenRCUVVOWUxGRkJRVWtzVDBGQlQwRXNTMEZCU3l4RFFVRk1MRU5CUVZBc1MwRkJiVUlzVjBGQmRrSXNSVUZCYjBNN1FVRkJRU3hWUVVNeFFrTXNUVUZFTUVJc1IwRkRaa1FzU1VGRVpUdEJRVVZzUXpzN1FVRkRRU3hYUVVGTExFbEJRVTFNTEVkQlFWZ3NTVUZCYTBKTkxFMUJRV3hDTEVWQlFUQkNPMEZCUTNoQ0xHRkJRVXRETEZGQlFVd3NRMEZCWTFBc1IwRkJaQ3hGUVVGdFFrMHNUMEZCVDA0c1IwRkJVQ3hEUVVGdVFqdEJRVU5FTzBGQlEwWXNTMEZPUkN4TlFVMVBPMEZCUVVFc1ZVRkRSMEVzUzBGRVNDeEhRVU5yUWtzc1NVRkViRUk3UVVGQlFTeFZRVU5SUnl4TFFVUlNMRWRCUTJ0Q1NDeEpRVVJzUWpzN1FVRkZUQ3hYUVVGTFJTeFJRVUZNTEVOQlFXTlFMRXRCUVdRc1JVRkJiVUpSTEV0QlFXNUNPMEZCUTBRN08wRkJSVVFzVVVGQlNTeExRVUZMUXl4VlFVRlVMRVZCUVhGQ08wRkJRMjVDTEc5RFFVRmpMRXRCUVV0b1FpeE5RVUZ1UWp0QlFVTkVPenRCUVVWRUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08wRkJSVVE3UVVGRFFUczdPenM3T3pzN096czdPenR4UWtGWFFXTXNVU3h4UWtGQlUxQXNSeXhGUVVGTFVTeExMRVZCUVU4N1FVRkRia0lzVVVGQlRVVXNaVUZCWlN4TFFVRkxZaXhMUVVGTUxFTkJRVmRITEVkQlFWZ3NRMEZCY2tJN08wRkJSVUU3UVVGRFFTeFJRVUZKTEd0Q1FVRk5VU3hMUVVGT0xFdEJRV2RDTEhGQ1FVRlRRU3hMUVVGVUxFTkJRWEJDTEVWQlFYRkRPMEZCUTI1RExGVkJRVWxGTEdsQ1FVRnBRa1lzUzBGQmNrSXNSVUZCTkVJN1FVRkRNVUlzWVVGQlMxZ3NTMEZCVEN4RFFVRlhSeXhIUVVGWUxFbEJRV3RDVVN4TFFVRnNRanRCUVVOQkxHRkJRVXRETEZWQlFVd3NSMEZCYTBJc1NVRkJiRUk3UVVGRFJEdEJRVU5HTEV0QlRFUXNUVUZMVHl4SlFVRkpMRzlDUVVGUlJDeExRVUZTTEVOQlFVb3NSVUZCYjBJN1FVRkRla0lzVlVGQlNTeERRVUZEUlN4WlFVRk1MRVZCUVcxQ08wRkJRMnBDTEdGQlFVdGlMRXRCUVV3c1EwRkJWMGNzUjBGQldDeEpRVUZyUWl4RlFVRnNRanRCUVVORU96dEJRVVZFTEZWQlFVMVhMRmxCUVZsSUxFMUJRVTFKTEUxQlFYaENPMEZCUTBFc1YwRkJTeXhKUVVGSlF5eEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWxHTEZOQlFYQkNMRVZCUVN0Q1JTeEhRVUV2UWl4RlFVRnZRenRCUVVOc1F5eFpRVUZKTEV0QlFVdG9RaXhMUVVGTUxFTkJRVmRITEVkQlFWZ3NSVUZCWjBKaExFTkJRV2hDTEUxQlFYVkNUQ3hOUVVGTlN5eERRVUZPTEVOQlFUTkNMRVZCUVhGRE8wRkJRMjVETEdWQlFVdG9RaXhMUVVGTUxFTkJRVmRITEVkQlFWZ3NSVUZCWjBKaExFTkJRV2hDTEVsQlFYRkNUQ3hOUVVGTlN5eERRVUZPTEVOQlFYSkNPMEZCUTBFc1pVRkJTMG9zVlVGQlRDeEhRVUZyUWl4SlFVRnNRanRCUVVORU8wRkJRMFk3UVVGRFJpeExRVnBOTEUxQldVRXNTVUZCU1N4clFrRkJUVVFzUzBGQlRpeERRVUZLTEVWQlFXdENPMEZCUTNaQ0xGVkJRVWtzUTBGQlEwVXNXVUZCVEN4RlFVRnRRanRCUVVOcVFpeGhRVUZMWWl4TFFVRk1MRU5CUVZkSExFZEJRVmdzU1VGQmEwSXNSVUZCYkVJN1FVRkRSRHM3UVVGRlJDeFhRVUZMTEVsQlFVbGpMRkZCUVZRc1NVRkJjVUpPTEV0QlFYSkNMRVZCUVRSQ08wRkJRekZDTEZsQlFVa3NTMEZCUzFnc1MwRkJUQ3hEUVVGWFJ5eEhRVUZZTEVWQlFXZENZeXhSUVVGb1FpeE5RVUU0UWs0c1RVRkJUVTBzVVVGQlRpeERRVUZzUXl4RlFVRnRSRHRCUVVOcVJDeGxRVUZMYWtJc1MwRkJUQ3hEUVVGWFJ5eEhRVUZZTEVWQlFXZENZeXhSUVVGb1FpeEpRVUUwUWs0c1RVRkJUVTBzVVVGQlRpeERRVUUxUWp0QlFVTkJMR1ZCUVV0TUxGVkJRVXdzUjBGQmEwSXNTVUZCYkVJN1FVRkRSRHRCUVVOR08wRkJRMFk3TzBGQlJVUXNVVUZCU1N4TFFVRkxRU3hWUVVGVUxFVkJRWEZDTzBGQlEyNUNMRmRCUVV0WUxHRkJRVXdzUTBGQmJVSnBRaXhKUVVGdVFpeERRVUYzUW1Zc1IwRkJlRUk3UVVGRFJEdEJRVU5HTEVjN08wRkJSVVE3T3pzN096czdjVUpCUzBGUUxFMHNjVUpCUVRSQ08wRkJRVUVzVVVGQmNrSjFRaXhYUVVGeFFpeDFSVUZCVUN4TFFVRlBPenRCUVVNeFFpeFJRVUZKTEVOQlFVTkJMR1ZCUVdVc1MwRkJTMUFzVlVGQmNrSXNTMEZCYjBNc1MwRkJTMUVzVVVGQk4wTXNSVUZCZFVRN1FVRkRja1FzVjBGQlMwRXNVVUZCVER0QlFVTkVPenRCUVVWRUxGTkJRVXR1UWl4aFFVRk1MRU5CUVcxQ1l5eE5RVUZ1UWl4SFFVRTBRaXhEUVVFMVFqdEJRVU5CTEZOQlFVdElMRlZCUVV3c1IwRkJhMElzUzBGQmJFSTdPMEZCUlVFc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN096czdhMEpCUjFsc1FpeFJJaXdpWm1sc1pTSTZJbWx1WkdWNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2IyNUdjbUZ0WlZKbGJtUmxjaUI5SUdaeWIyMGdKeTR1TDJaeVlXMWxjM2x1WXljN1hHNXBiWEJ2Y25RZ2V5QnBjMEZ5Y21GNUxDQnBjMDlpYWl3Z2FYTk9kVzBzSUdselUzUnlhVzVuSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTJ4aGMzTWdVbVZ1WkdWeVpYSWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVjbVZ1WkdWeUlEMGdkR2hwY3k1eVpXNWtaWEl1WW1sdVpDaDBhR2x6S1R0Y2JseHVJQ0FnSUhSb2FYTXVjSEp2Y0hNZ1BTQjdYRzRnSUNBZ0lDQXVMaTUwYUdsekxtTnZibk4wY25WamRHOXlMbVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUM0dUxuQnliM0J6WEc0Z0lDQWdmVHRjYmx4dUlDQWdJSFJvYVhNdWMzUmhkR1VnUFNCN2ZUdGNiaUFnSUNCMGFHbHpMbU5vWVc1blpXUldZV3gxWlhNZ1BTQmJYVHRjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCSFpYUWdZM1Z5Y21WdWRDQnpkR0YwWlM1Y2JpQWdJQ29nU1dZZ1lHdGxlV0FnYVhNZ2JtOTBJR1JsWm1sdVpXUXNJSEpsZEhWeWJpQmxiblJwY21VZ1kyRmphR1ZrSUhOMFlYUmxMbHh1SUNBZ0tpQkpaaUJnYTJWNVlDQnBjeUJrWldacGJtVmtMQ0J5WlhSMWNtNGdZMkZqYUdWa0lIWmhiSFZsSUdsbUlIQnlaWE5sYm5RdVhHNGdJQ0FxSUVsbUlHQnJaWGxnSUdseklHUmxabWx1WldRZ1lXNWtJR05oWTJobFpDQjJZV3gxWlNCcGN5QnViM1FnY0hKbGMyVnVkQ3dnY21WaFpDQmhibVFnY21WMGRYSnVMbHh1SUNBZ0tpQkFjR0Z5WVcwZ0lIdHpkSEpwYm1kOUlDaHZjSFJwYjI1aGJDa2dhMlY1SUc5bUlIWmhiSFZsWEc0Z0lDQXFJRUJ5WlhSMWNtNGdlM1poYkhWbGZWeHVJQ0FnS2k5Y2JpQWdaMlYwS0d0bGVTa2dlMXh1SUNBZ0lHbG1JQ2hyWlhrcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxuTjBZWFJsVzJ0bGVWMGdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV6ZEdGMFpWdHJaWGxkTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWNtVmhaQ2hyWlhrcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1emRHRjBaVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2S2lwY2JpQWdJQ29nVW1WaFpDQjJZV3gxWlNCaFkyTnZjbVJwYm1jZ2RHOGdZRzl1VW1WaFpHQmNiaUFnSUNvZ1FIQmhjbUZ0SUNCN2MzUnlhVzVuZlNCT1lXMWxJRzltSUhCeWIzQmxjblI1SUhSdklISmxZV1JjYmlBZ0lDb2dRSEpsZEhWeWJpQjdXM1I1Y0dWZGZWeHVJQ0FnS2k5Y2JpQWdjbVZoWkNoclpYa3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXZibEpsWVdRcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTl1VW1WaFpDaHJaWGtwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4cUtseHVJQ0FnS2lCVmNHUmhkR1VnWUhOMFlYUmxZQ0IzYVhSb0lHNWxkeUIyWVd4MVpYTWdZVzVrSUhOamFHVmtkV3hsSUdCeVpXNWtaWEpnTGx4dUlDQWdLaUJBY0dGeVlXMGdlMjlpYW1WamRIMGdkbUZzZFdWelhHNGdJQ0FxSUVCd1lYSmhiU0I3ZG1Gc2RXVjlJSFpoYkhWbElIUnZjMlYwWEc0Z0lDQXFMMXh1SUNCelpYUW9MaTR1WVhKbmN5a2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdZWEpuYzFzeFhTQTlQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBZ0lHTnZibk4wSUZzZ2RtRnNkV1Z6SUYwZ1BTQmhjbWR6TzF4dUlDQWdJQ0FnTHk4Z1UyVjBJRzExYkhScGNHeGxJSFpoYkhWbGMxeHVJQ0FnSUNBZ1ptOXlJQ2hqYjI1emRDQnJaWGtnYVc0Z2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJWMFZtRnNkV1VvYTJWNUxDQjJZV3gxWlhOYmEyVjVYU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHTnZibk4wSUZzZ2EyVjVMQ0IyWVd4MVpTQmRJRDBnWVhKbmN6dGNiaUFnSUNBZ0lIUm9hWE11YzJWMFZtRnNkV1VvYTJWNUxDQjJZV3gxWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YUdGelEyaGhibWRsWkNrZ2UxeHVJQ0FnSUNBZ2IyNUdjbUZ0WlZKbGJtUmxjaWgwYUdsekxuSmxibVJsY2lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQXZMeUErSUZkcGJHVjVJQzBnTmlCcGJpQjBhR1VnVFc5eWJtbHVaMXh1SUNBdktpcGNiaUFnSUNvZ1UyVjBJR0VnYzJsdVoyeGxJSFpoYkhWbFhHNGdJQ0FxSUVsbUlHRWdjM1J5YVc1bklHOXlJRzUxYldKbGNpd2djMlYwSUdScGNtVmpkR3g1TGx4dUlDQWdLaUJKWmlCaGJpQnZZbXBsWTNRZ2IzSWdZWEp5WVhrc0lHTnlaV0YwWlNCdVpYY2diMkpxWldOMElHOXlJR0Z5Y21GNVhHNGdJQ0FxSUdsbUlHbDBJR1J2WlhOdUozUWdZV3h5WldGa2VTQmxlR2x6ZEM0Z1ZHaGxiaUJ6YUdGc2JHOTNJR052YlhCaGNtVmNiaUFnSUNvZ2RHOGdjMlYwSUdGdVpDQmpiMjF3WVhKbElHbHVaR2wyYVdSMVlXd2dkbUZzZFdWekxseHVJQ0FnS2lCUGJtVWdiMllnZEdobElHTnNaV0Z5WlhJZ1pISmhkMkpoWTJ0eklHRnVaQ0JoYm01dmVXRnVZMlZ6SUhkcGRHaGNiaUFnSUNvZ2RYTnBibWNnYlhWMFlXSnNaU0JwYm5OMFpXRmtJRzltSUdsdGJYVjBZV0pzWlNCemRHRjBaWE11WEc0Z0lDQXFJRUJ3WVhKaGJTQjdXM1I1Y0dWZGZTQnJaWGxjYmlBZ0lDb2dRSEJoY21GdElIdGJkSGx3WlYxOUlIWmhiSFZsWEc0Z0lDQXFMMXh1SUNCelpYUldZV3gxWlNoclpYa3NJSFpoYkhWbEtTQjdYRzRnSUNBZ1kyOXVjM1FnWTNWeWNtVnVkRlpoYkhWbElEMGdkR2hwY3k1emRHRjBaVnRyWlhsZE8xeHVYRzRnSUNBZ0x5OGdTV1lnYm5WdFltVnlJRzl5SUhOMGNtbHVaeXdnYzJWMElHUnBjbVZqZEd4NVhHNGdJQ0FnYVdZZ0tHbHpUblZ0S0haaGJIVmxLU0I4ZkNCcGMxTjBjbWx1WnloMllXeDFaU2twSUh0Y2JpQWdJQ0FnSUdsbUlDaGpkWEp5Wlc1MFZtRnNkV1VnSVQwOUlIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFNBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWhoYzBOb1lXNW5aV1FnUFNCMGNuVmxPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9hWE5CY25KaGVTaDJZV3gxWlNrcElIdGNiaUFnSUNBZ0lHbG1JQ2doWTNWeWNtVnVkRlpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1ZiYTJWNVhTQTlJRnRkTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCamIyNXpkQ0J1ZFcxV1lXeDFaWE1nUFNCMllXeDFaUzVzWlc1bmRHZzdYRzRnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlZaaGJIVmxjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbk4wWVhSbFcydGxlVjFiYVYwZ0lUMDlJSFpoYkhWbFcybGRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpWdHJaWGxkVzJsZElEMGdkbUZzZFdWYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9hWE5QWW1vb2RtRnNkV1VwS1NCN1hHNGdJQ0FnSUNCcFppQW9JV04xY25KbGJuUldZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYwZ1BTQjdmVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnWm05eUlDaHNaWFFnZG1Gc2RXVkxaWGtnYVc0Z2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWMzUmhkR1ZiYTJWNVhWdDJZV3gxWlV0bGVWMGdJVDA5SUhaaGJIVmxXM1poYkhWbFMyVjVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFZ0MllXeDFaVXRsZVYwZ1BTQjJZV3gxWlZ0MllXeDFaVXRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdkR2hwY3k1b1lYTkRhR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBhR2x6TG1oaGMwTm9ZVzVuWldRcElIdGNiaUFnSUNBZ0lIUm9hWE11WTJoaGJtZGxaRlpoYkhWbGN5NXdkWE5vS0d0bGVTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDQXFJRVpwY21WeklHQnZibEpsYm1SbGNtQWdhV1lnZG1Gc2RXVnpJR2hoZG1VZ1kyaGhibWRsWkNCdmNpQmdabTl5WTJWU1pXNWtaWEpnWEc0Z0lDQXFJR2x6SUhObGRDQjBieUIwY25WbExseHVJQ0FnS2lCQWNtVjBkWEp1SUh0MGFHbHpmVnh1SUNBZ0tpOWNiaUFnY21WdVpHVnlLR1p2Y21ObFVtVnVaR1Z5SUQwZ1ptRnNjMlVwSUh0Y2JpQWdJQ0JwWmlBb0tHWnZjbU5sVW1WdVpHVnlJSHg4SUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ2tnSmlZZ2RHaHBjeTV2YmxKbGJtUmxjaWtnZTF4dUlDQWdJQ0FnZEdocGN5NXZibEpsYm1SbGNpZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIUm9hWE11WTJoaGJtZGxaRlpoYkhWbGN5NXNaVzVuZEdnZ1BTQXdPMXh1SUNBZ0lIUm9hWE11YUdGelEyaGhibWRsWkNBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1VtVnVaR1Z5WlhJN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBDU1NSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudCxcbiAgICBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbjogdHJ1ZVxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9yZW5kZXIgPSByZXF1aXJlKCcuL3JlbmRlcicpO1xuXG52YXIgX3JlbmRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZW5kZXIpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMnKTtcblxudmFyIF92YWx1ZVR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZXMpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ1NTUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhDU1NSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBDU1NSZW5kZXJlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ1NTUmVuZGVyZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZW5kZXJlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENTU1JlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBlbGVtZW50ID0gX3Byb3BzLmVsZW1lbnQsXG4gICAgICAgIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uID0gX3Byb3BzLmVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uO1xuXG4gICAgKDAsIF9yZW5kZXIyLmRlZmF1bHQpKGVsZW1lbnQsIHRoaXMuc3RhdGUsIHRoaXMuY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pO1xuICB9O1xuXG4gIENTU1JlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgdmFyIHZhbHVlVHlwZSA9IF92YWx1ZVR5cGVzMi5kZWZhdWx0W2tleV07XG5cbiAgICBpZiAoIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHRoaXMucHJvcHMuZWxlbWVudDtcblxuICAgICAgdmFyIGRvbVZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClbKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoa2V5KV0gfHwgMDtcbiAgICAgIHJldHVybiB2YWx1ZVR5cGUgJiYgdmFsdWVUeXBlLnBhcnNlID8gdmFsdWVUeXBlLnBhcnNlKGRvbVZhbHVlKSA6IGRvbVZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWVUeXBlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZVR5cGUuZGVmYXVsdCB8fCAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDU1NSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYkltVnNaVzFsYm5RaUxDSndjbTl3Y3lJc0lrTlRVMUpsYm1SbGNtVnlJaXdpWlc1aFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjRpTENKdmJsSmxibVJsY2lJc0luTjBZWFJsSWl3aVkyaGhibWRsWkZaaGJIVmxjeUlzSW05dVVtVmhaQ0lzSW10bGVTSXNJblpoYkhWbFZIbHdaU0lzSW1SdmJWWmhiSFZsSWl3aWQybHVaRzkzSWl3aVoyVjBRMjl0Y0hWMFpXUlRkSGxzWlNJc0luQmhjbk5sSWl3aVpHVm1ZWFZzZENKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08ydENRVFpDWlN4VlFVRlZRU3hQUVVGV0xFVkJRVzFDUXl4TFFVRnVRaXhGUVVFd1FqdEJRVU4yUXl4VFFVRlBMRWxCUVVsRExGZEJRVW83UVVGRFRFWXNiMEpCUkVzN1FVRkZURWNzWjBOQlFUUkNPMEZCUm5aQ0xFdEJSMFpHTEV0QlNFVXNSVUZCVUR0QlFVdEVMRU03TzBGQmJrTkVPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenM3T3pzN096dEpRVVZOUXl4WE96czdPenM3T3pzN2QwSkJRMHBGTEZFc2RVSkJRVmM3UVVGQlFTeHBRa0ZEZFVNc1MwRkJTMGdzUzBGRU5VTTdRVUZCUVN4UlFVTkVSQ3hQUVVSRExGVkJRMFJCTEU5QlJFTTdRVUZCUVN4UlFVTlJSeXd3UWtGRVVpeFZRVU5SUVN3d1FrRkVVanM3UVVGRlZDd3dRa0ZCVlVnc1QwRkJWaXhGUVVGdFFpeExRVUZMU3l4TFFVRjRRaXhGUVVFclFpeExRVUZMUXl4aFFVRndReXhGUVVGdFJFZ3NNRUpCUVc1RU8wRkJRMFFzUnpzN2QwSkJSVVJKTEUwc2JVSkJRVTlETEVjc1JVRkJTenRCUVVOV0xGRkJRVTFETEZsQlFWa3NjVUpCUVdORUxFZEJRV1FzUTBGQmJFSTdPMEZCUlVFc1VVRkJTU3hEUVVGRExIbENRVUZsUVN4SFFVRm1MRU5CUVV3c1JVRkJNRUk3UVVGQlFTeFZRVU5vUWxJc1QwRkVaMElzUjBGRFNpeExRVUZMUXl4TFFVUkVMRU5CUTJoQ1JDeFBRVVJuUWpzN1FVRkZlRUlzVlVGQlRWVXNWMEZCVjBNc1QwRkJUME1zWjBKQlFWQXNRMEZCZDBKYUxFOUJRWGhDTEVWQlFXbERMRWxCUVdwRExFVkJRWFZETEhkQ1FVRlRVU3hIUVVGVUxFTkJRWFpETEV0QlFYbEVMRU5CUVRGRk8wRkJRMEVzWVVGQlVVTXNZVUZCWVVFc1ZVRkJWVWtzUzBGQmVFSXNSMEZCYVVOS0xGVkJRVlZKTEV0QlFWWXNRMEZCWjBKSUxGRkJRV2hDTEVOQlFXcERMRWRCUVRaRVFTeFJRVUZ3UlR0QlFVTkVMRXRCU2tRc1RVRkpUenRCUVVOTUxGVkJRVWxFTEZOQlFVb3NSVUZCWlR0QlFVTmlMR1ZCUVU5QkxGVkJRVlZMTEU5QlFWWXNTVUZCY1VJc1EwRkJOVUk3UVVGRFJDeFBRVVpFTEUxQlJVODdRVUZEVEN4bFFVRlBMRU5CUVZBN1FVRkRSRHRCUVVOR08wRkJRMFlzUnlJc0ltWnBiR1VpT2lKcGJtUmxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlNaVzVrWlhKbGNpQm1jbTl0SUNjdUxpOG5PMXh1YVcxd2IzSjBJSEpsYm1SbGNrTlRVeUJtY205dElDY3VMM0psYm1SbGNpYzdYRzVwYlhCdmNuUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1puSnZiU0FuTGk5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUhaaGJIVmxWSGx3WlhOTllYQWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeWM3WEc1cGJYQnZjblFnY0hKbFptbDRaWElnWm5KdmJTQW5MaTl3Y21WbWFYaGxjaWM3WEc1Y2JtTnNZWE56SUVOVFUxSmxibVJsY21WeUlHVjRkR1Z1WkhNZ1VtVnVaR1Z5WlhJZ2UxeHVJQ0J2YmxKbGJtUmxjaWdwSUh0Y2JpQWdJQ0JqYjI1emRDQjdJR1ZzWlcxbGJuUXNJR1Z1WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUhKbGJtUmxja05UVXlobGJHVnRaVzUwTENCMGFHbHpMbk4wWVhSbExDQjBhR2x6TG1Ob1lXNW5aV1JXWVd4MVpYTXNJR1Z1WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVLVHRjYmlBZ2ZWeHVYRzRnSUc5dVVtVmhaQ2hyWlhrcElIdGNiaUFnSUNCamIyNXpkQ0IyWVd4MVpWUjVjR1VnUFNCMllXeDFaVlI1Y0dWelRXRndXMnRsZVYwN1hHNWNiaUFnSUNCcFppQW9JWFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSHNnWld4bGJXVnVkQ0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNBZ0lHTnZibk4wSUdSdmJWWmhiSFZsSUQwZ2QybHVaRzkzTG1kbGRFTnZiWEIxZEdWa1UzUjViR1VvWld4bGJXVnVkQ3dnYm5Wc2JDbGJjSEpsWm1sNFpYSW9hMlY1S1YwZ2ZId2dNRHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW9kbUZzZFdWVWVYQmxJQ1ltSUhaaGJIVmxWSGx3WlM1d1lYSnpaU2tnUHlCMllXeDFaVlI1Y0dVdWNHRnljMlVvWkc5dFZtRnNkV1VwSURvZ1pHOXRWbUZzZFdVN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR2xtSUNoMllXeDFaVlI1Y0dVcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsVkhsd1pTNWtaV1poZFd4MElIeDhJREE3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdLR1ZzWlcxbGJuUXNJSEJ5YjNCektTQjdYRzRnSUhKbGRIVnliaUJ1WlhjZ1ExTlRVbVZ1WkdWeVpYSW9lMXh1SUNBZ0lHVnNaVzFsYm5Rc1hHNGdJQ0FnWlc1aFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjQ2SUhSeWRXVXNYRzRnSUNBZ0xpNHVjSEp2Y0hOY2JpQWdmU2s3WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIHJldHVybiBuZXcgU1ZHUmVuZGVyZXIoX2V4dGVuZHMoe1xuICAgIGVsZW1lbnQ6IGVsZW1lbnRcbiAgfSwgcHJvcHMpKTtcbn07XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vJyk7XG5cbnZhciBfMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXyk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU1ZHUmVuZGVyZXIgPSBmdW5jdGlvbiAoX1JlbmRlcmVyKSB7XG4gIF9pbmhlcml0cyhTVkdSZW5kZXJlciwgX1JlbmRlcmVyKTtcblxuICBmdW5jdGlvbiBTVkdSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTVkdSZW5kZXJlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVuZGVyZXIuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgdmFyIF9wcm9wcyRlbGVtZW50JGdldEJCbyA9IHByb3BzLmVsZW1lbnQuZ2V0QkJveCgpLFxuICAgICAgICB4ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLngsXG4gICAgICAgIHkgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ueSxcbiAgICAgICAgd2lkdGggPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8ud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby5oZWlnaHQ7XG5cbiAgICBfdGhpcy5lbGVtZW50RGltZW5zaW9ucyA9IHsgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFNWR1JlbmRlcmVyLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5wcm9wcy5lbGVtZW50O1xuXG4gICAgdmFyIGF0dHJzID0gKDAsIF9idWlsZDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgdGhpcy5lbGVtZW50RGltZW5zaW9ucyk7XG4gICAgKDAsIF91dGlscy5zZXRET01BdHRycykoZWxlbWVudCwgYXR0cnMpO1xuICB9O1xuXG4gIFNWR1JlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cblxuICAgIGlmICghX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmFsdWVUeXBlID0gX3ZhbHVlVHlwZXMyLmRlZmF1bHRba2V5XTtcbiAgICAgIHJldHVybiB2YWx1ZVR5cGUgPyB2YWx1ZVR5cGUuZGVmYXVsdCA6IDA7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTVkdSZW5kZXJlcjtcbn0oXzIuZGVmYXVsdCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTDJsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYkltVnNaVzFsYm5RaUxDSndjbTl3Y3lJc0lsTldSMUpsYm1SbGNtVnlJaXdpWjJWMFFrSnZlQ0lzSW5naUxDSjVJaXdpZDJsa2RHZ2lMQ0pvWldsbmFIUWlMQ0psYkdWdFpXNTBSR2x0Wlc1emFXOXVjeUlzSW05dVVtVnVaR1Z5SWl3aVlYUjBjbk1pTENKemRHRjBaU0lzSW05dVVtVmhaQ0lzSW10bGVTSXNJbWRsZEVGMGRISnBZblYwWlNJc0luWmhiSFZsVkhsd1pTSXNJbVJsWm1GMWJIUWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRyUWtGblEyVXNWVUZCVlVFc1QwRkJWaXhGUVVGdFFrTXNTMEZCYmtJc1JVRkJNRUk3UVVGRGRrTXNVMEZCVHl4SlFVRkpReXhYUVVGS08wRkJRMHhHTzBGQlJFc3NTMEZGUmtNc1MwRkdSU3hGUVVGUU8wRkJTVVFzUXpzN1FVRnlRMFE3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenM3T3pzN096dEpRVVZOUXl4WE96czdRVUZEU2l4MVFrRkJXVVFzUzBGQldpeEZRVUZ0UWp0QlFVRkJPenRCUVVGQkxHbEVRVU5xUWl4eFFrRkJUVUVzUzBGQlRpeERRVVJwUWpzN1FVRkJRU3huUTBGSFpVRXNUVUZCVFVRc1QwRkJUaXhEUVVGalJ5eFBRVUZrTEVWQlNHWTdRVUZCUVN4UlFVZFVReXhEUVVoVExIbENRVWRVUVN4RFFVaFRPMEZCUVVFc1VVRkhUa01zUTBGSVRTeDVRa0ZIVGtFc1EwRklUVHRCUVVGQkxGRkJSMGhETEV0QlNFY3NlVUpCUjBoQkxFdEJTRWM3UVVGQlFTeFJRVWRKUXl4TlFVaEtMSGxDUVVkSlFTeE5RVWhLT3p0QlFVbHFRaXhWUVVGTFF5eHBRa0ZCVEN4SFFVRjVRaXhGUVVGRlNpeEpRVUZHTEVWQlFVdERMRWxCUVV3c1JVRkJVVU1zV1VGQlVpeEZRVUZsUXl4alFVRm1MRVZCUVhwQ08wRkJTbWxDTzBGQlMyeENPenQzUWtGRlJFVXNVU3gxUWtGQlZ6dEJRVUZCTEZGQlEwUlVMRTlCUkVNc1IwRkRWeXhMUVVGTFF5eExRVVJvUWl4RFFVTkVSQ3hQUVVSRE96dEJRVVZVTEZGQlFVMVZMRkZCUVZFc2NVSkJRVTBzUzBGQlMwTXNTMEZCV0N4RlFVRnJRaXhMUVVGTFNDeHBRa0ZCZGtJc1EwRkJaRHRCUVVOQkxEUkNRVUZaVWl4UFFVRmFMRVZCUVhGQ1ZTeExRVUZ5UWp0QlFVTkVMRWM3TzNkQ1FVVkVSU3hOTEcxQ1FVRlBReXhITEVWQlFVczdRVUZCUVN4UlFVTkdZaXhQUVVSRkxFZEJRMVVzUzBGQlMwTXNTMEZFWml4RFFVTkdSQ3hQUVVSRk96czdRVUZIVml4UlFVRkpMRU5CUVVNc2VVSkJRV1ZoTEVkQlFXWXNRMEZCVEN4RlFVRXdRanRCUVVONFFpeGhRVUZQWWl4UlFVRlJZeXhaUVVGU0xFTkJRWEZDUkN4SFFVRnlRaXhEUVVGUU8wRkJRMFFzUzBGR1JDeE5RVVZQTzBGQlEwd3NWVUZCVFVVc1dVRkJXU3h4UWtGQllVWXNSMEZCWWl4RFFVRnNRanRCUVVOQkxHRkJRVkZGTEZOQlFVUXNSMEZCWTBFc1ZVRkJWVU1zVDBGQmVFSXNSMEZCYTBNc1EwRkJla003UVVGRFJEdEJRVU5HTEVjaUxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdVbVZ1WkdWeVpYSWdabkp2YlNBbkxpNHZKenRjYm1sdGNHOXlkQ0JpZFdsc1pDQm1jbTl0SUNjdUwySjFhV3hrSnp0Y2JtbHRjRzl5ZENCMGNtRnVjMlp2Y20xUWNtOXdjeUJtY205dElDY3VMaTlqYzNNdmRISmhibk5tYjNKdExYQnliM0J6Snp0Y2JtbHRjRzl5ZENCMllXeDFaVlI1Y0dWTllYQWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeWM3WEc1cGJYQnZjblFnZXlCelpYUkVUMDFCZEhSeWN5QjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU5zWVhOeklGTldSMUpsYm1SbGNtVnlJR1Y0ZEdWdVpITWdVbVZ1WkdWeVpYSWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhOMWNHVnlLSEJ5YjNCektUdGNibHh1SUNBZ0lHTnZibk4wSUhzZ2VDd2dlU3dnZDJsa2RHZ3NJR2hsYVdkb2RDQjlJRDBnY0hKdmNITXVaV3hsYldWdWRDNW5aWFJDUW05NEtDazdYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBSR2x0Wlc1emFXOXVjeUE5SUhzZ2VDd2dlU3dnZDJsa2RHZ3NJR2hsYVdkb2RDQjlPMXh1SUNCOVhHNWNiaUFnYjI1U1pXNWtaWElvS1NCN1hHNGdJQ0FnWTI5dWMzUWdleUJsYkdWdFpXNTBJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJR0YwZEhKeklEMGdZblZwYkdRb2RHaHBjeTV6ZEdGMFpTd2dkR2hwY3k1bGJHVnRaVzUwUkdsdFpXNXphVzl1Y3lrN1hHNGdJQ0FnYzJWMFJFOU5RWFIwY25Nb1pXeGxiV1Z1ZEN3Z1lYUjBjbk1wTzF4dUlDQjlYRzVjYmlBZ2IyNVNaV0ZrS0d0bGVTa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1pXeGxiV1Z1ZENCOUlEMGdkR2hwY3k1d2NtOXdjenRjYmx4dUlDQWdJR2xtSUNnaGRISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHVnNaVzFsYm5RdVoyVjBRWFIwY21saWRYUmxLR3RsZVNrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR052Ym5OMElIWmhiSFZsVkhsd1pTQTlJSFpoYkhWbFZIbHdaVTFoY0Z0clpYbGRPMXh1SUNBZ0lDQWdjbVYwZFhKdUlDaDJZV3gxWlZSNWNHVXBJRDhnZG1Gc2RXVlVlWEJsTG1SbFptRjFiSFFnT2lBd08xeHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlBb1pXeGxiV1Z1ZEN3Z2NISnZjSE1wSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJUVmtkU1pXNWtaWEpsY2loN1hHNGdJQ0FnWld4bGJXVnVkQ3hjYmlBZ0lDQXVMaTV3Y205d2MxeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICByZXR1cm4gbmV3IFNWR1BhdGhSZW5kZXJlcihfZXh0ZW5kcyh7XG4gICAgZWxlbWVudDogZWxlbWVudFxuICB9LCBwcm9wcykpO1xufTtcblxudmFyIF8gPSByZXF1aXJlKCcuLi8nKTtcblxudmFyIF8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgU1ZHUGF0aFJlbmRlcmVyID0gZnVuY3Rpb24gKF9SZW5kZXJlcikge1xuICBfaW5oZXJpdHMoU1ZHUGF0aFJlbmRlcmVyLCBfUmVuZGVyZXIpO1xuXG4gIGZ1bmN0aW9uIFNWR1BhdGhSZW5kZXJlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTVkdQYXRoUmVuZGVyZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlbmRlcmVyLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIHZhciBfcHJvcHMkZWxlbWVudCRnZXRCQm8gPSBwcm9wcy5lbGVtZW50LmdldEJCb3goKSxcbiAgICAgICAgeCA9IF9wcm9wcyRlbGVtZW50JGdldEJCby54LFxuICAgICAgICB5ID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLnksXG4gICAgICAgIHdpZHRoID0gX3Byb3BzJGVsZW1lbnQkZ2V0QkJvLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfcHJvcHMkZWxlbWVudCRnZXRCQm8uaGVpZ2h0O1xuXG4gICAgX3RoaXMuZWxlbWVudERpbWVuc2lvbnMgPSB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeSxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgcGF0aExlbmd0aDogcHJvcHMuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBTVkdQYXRoUmVuZGVyZXIucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoKSB7XG4gICAgdmFyIHBhdGhMZW5ndGggPSB0aGlzLmVsZW1lbnREaW1lbnNpb25zLnBhdGhMZW5ndGg7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnByb3BzLmVsZW1lbnQ7XG5cbiAgICAoMCwgX3V0aWxzLnNldERPTUF0dHJzKShlbGVtZW50LCAoMCwgX2J1aWxkMi5kZWZhdWx0KSh0aGlzLnN0YXRlLCBwYXRoTGVuZ3RoKSk7XG4gIH07XG5cbiAgU1ZHUGF0aFJlbmRlcmVyLnByb3RvdHlwZS5vblJlYWQgPSBmdW5jdGlvbiBvblJlYWQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgfTtcblxuICByZXR1cm4gU1ZHUGF0aFJlbmRlcmVyO1xufShfMi5kZWZhdWx0KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdmMzWm5MWEJoZEdndmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sc2laV3hsYldWdWRDSXNJbkJ5YjNCeklpd2lVMVpIVUdGMGFGSmxibVJsY21WeUlpd2laMlYwUWtKdmVDSXNJbmdpTENKNUlpd2lkMmxrZEdnaUxDSm9aV2xuYUhRaUxDSmxiR1Z0Wlc1MFJHbHRaVzV6YVc5dWN5SXNJbkJoZEdoTVpXNW5kR2dpTENKblpYUlViM1JoYkV4bGJtZDBhQ0lzSW05dVVtVnVaR1Z5SWl3aWMzUmhkR1VpTENKdmJsSmxZV1FpTENKclpYa2lMQ0puWlhSQmRIUnlhV0oxZEdVaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dHJRa0UyUW1Vc1ZVRkJWVUVzVDBGQlZpeEZRVUZ0UWtNc1MwRkJia0lzUlVGQk1FSTdRVUZEZGtNc1UwRkJUeXhKUVVGSlF5eGxRVUZLTzBGQlEweEdPMEZCUkVzc1MwRkZSa01zUzBGR1JTeEZRVUZRTzBGQlNVUXNRenM3UVVGc1EwUTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3T3pzN08wbEJSVTFETEdVN096dEJRVU5LTERKQ1FVRlpSQ3hMUVVGYUxFVkJRVzFDTzBGQlFVRTdPMEZCUVVFc2FVUkJRMnBDTEhGQ1FVRk5RU3hMUVVGT0xFTkJSR2xDT3p0QlFVRkJMR2REUVVkbFFTeE5RVUZOUkN4UFFVRk9MRU5CUVdOSExFOUJRV1FzUlVGSVpqdEJRVUZCTEZGQlIxUkRMRU5CU0ZNc2VVSkJSMVJCTEVOQlNGTTdRVUZCUVN4UlFVZE9ReXhEUVVoTkxIbENRVWRPUVN4RFFVaE5PMEZCUVVFc1VVRkhTRU1zUzBGSVJ5eDVRa0ZIU0VFc1MwRklSenRCUVVGQkxGRkJSMGxETEUxQlNFb3NlVUpCUjBsQkxFMUJTRW83TzBGQlNXcENMRlZCUVV0RExHbENRVUZNTEVkQlFYbENPMEZCUTNaQ1NpeFZRVVIxUWp0QlFVVjJRa01zVlVGR2RVSTdRVUZIZGtKRExHdENRVWgxUWp0QlFVbDJRa01zYjBKQlNuVkNPMEZCUzNaQ1JTeHJRa0ZCV1ZJc1RVRkJUVVFzVDBGQlRpeERRVUZqVlN4alFVRmtPMEZCVEZjc1MwRkJla0k3UVVGS2FVSTdRVUZYYkVJN096UkNRVVZFUXl4UkxIVkNRVUZYTzBGQlFVRXNVVUZEUkVZc1ZVRkVReXhIUVVOakxFdEJRVXRFTEdsQ1FVUnVRaXhEUVVORVF5eFZRVVJETzBGQlFVRXNVVUZGUkZRc1QwRkdReXhIUVVWWExFdEJRVXRETEV0QlJtaENMRU5CUlVSRUxFOUJSa003TzBGQlIxUXNORUpCUVZsQkxFOUJRVm9zUlVGQmNVSXNjVUpCUVUwc1MwRkJTMWtzUzBGQldDeEZRVUZyUWtnc1ZVRkJiRUlzUTBGQmNrSTdRVUZEUkN4SE96czBRa0ZGUkVrc1RTeHRRa0ZCVDBNc1J5eEZRVUZMTzBGQlExWXNWMEZCVHl4TFFVRkxZaXhMUVVGTUxFTkJRVmRFTEU5QlFWZ3NRMEZCYlVKbExGbEJRVzVDTEVOQlFXZERSQ3hIUVVGb1F5eERRVUZRTzBGQlEwUXNSeUlzSW1acGJHVWlPaUpwYm1SbGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCU1pXNWtaWEpsY2lCbWNtOXRJQ2N1TGk4bk8xeHVhVzF3YjNKMElHSjFhV3hrSUdaeWIyMGdKeTR2WW5WcGJHUW5PMXh1YVcxd2IzSjBJSHNnYzJWMFJFOU5RWFIwY25NZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWpiR0Z6Y3lCVFZrZFFZWFJvVW1WdVpHVnlaWElnWlhoMFpXNWtjeUJTWlc1a1pYSmxjaUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ2MzVndaWElvY0hKdmNITXBPMXh1WEc0Z0lDQWdZMjl1YzNRZ2V5QjRMQ0I1TENCM2FXUjBhQ3dnYUdWcFoyaDBJSDBnUFNCd2NtOXdjeTVsYkdWdFpXNTBMbWRsZEVKQ2IzZ29LVHRjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblJFYVcxbGJuTnBiMjV6SUQwZ2UxeHVJQ0FnSUNBZ2VDeGNiaUFnSUNBZ0lIa3NYRzRnSUNBZ0lDQjNhV1IwYUN4Y2JpQWdJQ0FnSUdobGFXZG9kQ3hjYmlBZ0lDQWdJSEJoZEdoTVpXNW5kR2c2SUhCeWIzQnpMbVZzWlcxbGJuUXVaMlYwVkc5MFlXeE1aVzVuZEdnb0tWeHVJQ0FnSUgwN1hHNGdJSDFjYmx4dUlDQnZibEpsYm1SbGNpZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lIQmhkR2hNWlc1bmRHZ2dmU0E5SUhSb2FYTXVaV3hsYldWdWRFUnBiV1Z1YzJsdmJuTTdYRzRnSUNBZ1kyOXVjM1FnZXlCbGJHVnRaVzUwSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lITmxkRVJQVFVGMGRISnpLR1ZzWlcxbGJuUXNJR0oxYVd4a0tIUm9hWE11YzNSaGRHVXNJSEJoZEdoTVpXNW5kR2dwS1R0Y2JpQWdmVnh1WEc0Z0lHOXVVbVZoWkNoclpYa3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV3Y205d2N5NWxiR1Z0Wlc1MExtZGxkRUYwZEhKcFluVjBaU2hyWlhrcE8xeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlDaGxiR1Z0Wlc1MExDQndjbTl3Y3lrZ2UxeHVJQ0J5WlhSMWNtNGdibVYzSUZOV1IxQmhkR2hTWlc1a1pYSmxjaWg3WEc0Z0lDQWdaV3hsYldWdWRDeGNiaUFnSUNBdUxpNXdjbTl3YzF4dUlDQjlLVHRjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvc3ZnLXBhdGgvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb2xvciA9IGV4cG9ydHMuaHNsYSA9IGV4cG9ydHMucmdiYSA9IGV4cG9ydHMuaGV4ID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgaGV4ID0gZXhwb3J0cy5oZXggPSBmdW5jdGlvbiAodikge1xuICB2YXIgciA9IHZvaWQgMCxcbiAgICAgIGcgPSB2b2lkIDAsXG4gICAgICBiID0gdm9pZCAwO1xuXG4gIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gIGlmICh2Lmxlbmd0aCA+IDQpIHtcbiAgICByID0gdi5zdWJzdHIoMSwgMik7XG4gICAgZyA9IHYuc3Vic3RyKDMsIDIpO1xuICAgIGIgPSB2LnN1YnN0cig1LCAyKTtcblxuICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gIH0gZWxzZSB7XG4gICAgciA9IHYuc3Vic3RyKDEsIDEpO1xuICAgIGcgPSB2LnN1YnN0cigyLCAxKTtcbiAgICBiID0gdi5zdWJzdHIoMywgMSk7XG4gICAgciArPSByO1xuICAgIGcgKz0gZztcbiAgICBiICs9IGI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgIGdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgYmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgIGFscGhhOiAxXG4gIH07XG59O1xuXG52YXIgcmdiYSA9IGV4cG9ydHMucmdiYSA9ICgwLCBfdXRpbHMuc3BsaXRDb2xvclZhbHVlcykoWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZScsICdhbHBoYSddKTtcblxudmFyIGhzbGEgPSBleHBvcnRzLmhzbGEgPSAoMCwgX3V0aWxzLnNwbGl0Q29sb3JWYWx1ZXMpKFsnaHVlJywgJ3NhdHVyYXRpb24nLCAnbGlnaHRuZXNzJywgJ2FscGhhJ10pO1xuXG52YXIgY29sb3IgPSBleHBvcnRzLmNvbG9yID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCgwLCBfdXRpbHMuaXNSZ2IpKHYpKSB7XG4gICAgcmV0dXJuIHJnYmEodik7XG4gIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc0hleCkodikpIHtcbiAgICByZXR1cm4gaGV4KHYpO1xuICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNIc2wpKHYpKSB7XG4gICAgcmV0dXJuIGhzbGEodik7XG4gIH1cblxuICByZXR1cm4gdjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12Y0dGeWMyVnljeTVxY3lKZExDSnVZVzFsY3lJNld5Sm9aWGdpTENKMklpd2ljaUlzSW1jaUxDSmlJaXdpYkdWdVozUm9JaXdpYzNWaWMzUnlJaXdpY21Wa0lpd2ljR0Z5YzJWSmJuUWlMQ0puY21WbGJpSXNJbUpzZFdVaUxDSmhiSEJvWVNJc0luSm5ZbUVpTENKb2MyeGhJaXdpWTI5c2IzSWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN08wRkJSVThzU1VGQlRVRXNiMEpCUVUwc1ZVRkJRME1zUTBGQlJDeEZRVUZQTzBGQlEzaENMRTFCUVVsRExGVkJRVW83UVVGQlFTeE5RVUZQUXl4VlFVRlFPMEZCUVVFc1RVRkJWVU1zVlVGQlZqczdRVUZGUVR0QlFVTkJMRTFCUVVsSUxFVkJRVVZKTEUxQlFVWXNSMEZCVnl4RFFVRm1MRVZCUVd0Q08wRkJRMmhDU0N4UlFVRkpSQ3hGUVVGRlN5eE5RVUZHTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVZvc1EwRkJTanRCUVVOQlNDeFJRVUZKUml4RlFVRkZTeXhOUVVGR0xFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFWb3NRMEZCU2p0QlFVTkJSaXhSUVVGSlNDeEZRVUZGU3l4TlFVRkdMRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVm9zUTBGQlNqczdRVUZGUmp0QlFVTkRMRWRCVGtRc1RVRk5UenRCUVVOTVNpeFJRVUZKUkN4RlFVRkZTeXhOUVVGR0xFTkJRVk1zUTBGQlZDeEZRVUZaTEVOQlFWb3NRMEZCU2p0QlFVTkJTQ3hSUVVGSlJpeEZRVUZGU3l4TlFVRkdMRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVm9zUTBGQlNqdEJRVU5CUml4UlFVRkpTQ3hGUVVGRlN5eE5RVUZHTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVZvc1EwRkJTanRCUVVOQlNpeFRRVUZMUVN4RFFVRk1PMEZCUTBGRExGTkJRVXRCTEVOQlFVdzdRVUZEUVVNc1UwRkJTMEVzUTBGQlREdEJRVU5FT3p0QlFVVkVMRk5CUVU4N1FVRkRURWNzVTBGQlMwTXNVMEZCVTA0c1EwRkJWQ3hGUVVGWkxFVkJRVm9zUTBGRVFUdEJRVVZNVHl4WFFVRlBSQ3hUUVVGVFRDeERRVUZVTEVWQlFWa3NSVUZCV2l4RFFVWkdPMEZCUjB4UExGVkJRVTFHTEZOQlFWTktMRU5CUVZRc1JVRkJXU3hGUVVGYUxFTkJTRVE3UVVGSlRFOHNWMEZCVHp0QlFVcEdMRWRCUVZBN1FVRk5SQ3hEUVhwQ1RUczdRVUV5UWtFc1NVRkJUVU1zYzBKQlFVOHNOa0pCUVdsQ0xFTkJRVU1zUzBGQlJDeEZRVUZSTEU5QlFWSXNSVUZCYVVJc1RVRkJha0lzUlVGQmVVSXNUMEZCZWtJc1EwRkJha0lzUTBGQllqczdRVUZGUVN4SlFVRk5ReXh6UWtGQlR5dzJRa0ZCYVVJc1EwRkJReXhMUVVGRUxFVkJRVkVzV1VGQlVpeEZRVUZ6UWl4WFFVRjBRaXhGUVVGdFF5eFBRVUZ1UXl4RFFVRnFRaXhEUVVGaU96dEJRVVZCTEVsQlFVMURMSGRDUVVGUkxGVkJRVU5pTEVOQlFVUXNSVUZCVHp0QlFVTXhRaXhOUVVGSkxHdENRVUZOUVN4RFFVRk9MRU5CUVVvc1JVRkJZenRCUVVOYUxGZEJRVTlYTEV0QlFVdFlMRU5CUVV3c1EwRkJVRHRCUVVORUxFZEJSa1FzVFVGRlR5eEpRVUZKTEd0Q1FVRk5RU3hEUVVGT0xFTkJRVW9zUlVGQll6dEJRVU51UWl4WFFVRlBSQ3hKUVVGSlF5eERRVUZLTEVOQlFWQTdRVUZEUkN4SFFVWk5MRTFCUlVFc1NVRkJTU3hyUWtGQlRVRXNRMEZCVGl4RFFVRktMRVZCUVdNN1FVRkRia0lzVjBGQlQxa3NTMEZCUzFvc1EwRkJUQ3hEUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVDBFc1EwRkJVRHRCUVVORUxFTkJWazBpTENKbWFXeGxJam9pY0dGeWMyVnljeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJSE53YkdsMFEyOXNiM0pXWVd4MVpYTXNJR2x6VW1kaUxDQnBjMGhsZUN3Z2FYTkljMndnZlNCbWNtOXRJQ2N1TDNWMGFXeHpKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR2hsZUNBOUlDaDJLU0E5UGlCN1hHNGdJR3hsZENCeUxDQm5MQ0JpTzF4dVhHNGdJQzh2SUVsbUlIZGxJR2hoZG1VZ05pQmphR0Z5WVdOMFpYSnpMQ0JwWlNBalJrWXdNREF3WEc0Z0lHbG1JQ2gyTG14bGJtZDBhQ0ErSURRcElIdGNiaUFnSUNCeUlEMGdkaTV6ZFdKemRISW9NU3dnTWlrN1hHNGdJQ0FnWnlBOUlIWXVjM1ZpYzNSeUtETXNJRElwTzF4dUlDQWdJR0lnUFNCMkxuTjFZbk4wY2lnMUxDQXlLVHRjYmx4dUlDQXZMeUJQY2lCM1pTQm9ZWFpsSURNZ1kyaGhjbUZqZEdWeWN5d2dhV1VnSTBZd01GeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lISWdQU0IyTG5OMVluTjBjaWd4TENBeEtUdGNiaUFnSUNCbklEMGdkaTV6ZFdKemRISW9NaXdnTVNrN1hHNGdJQ0FnWWlBOUlIWXVjM1ZpYzNSeUtETXNJREVwTzF4dUlDQWdJSElnS3owZ2NqdGNiaUFnSUNCbklDczlJR2M3WEc0Z0lDQWdZaUFyUFNCaU8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNCeVpXUTZJSEJoY25ObFNXNTBLSElzSURFMktTeGNiaUFnSUNCbmNtVmxiam9nY0dGeWMyVkpiblFvWnl3Z01UWXBMRnh1SUNBZ0lHSnNkV1U2SUhCaGNuTmxTVzUwS0dJc0lERTJLU3hjYmlBZ0lDQmhiSEJvWVRvZ01WeHVJQ0I5TzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElISm5ZbUVnUFNCemNHeHBkRU52Ykc5eVZtRnNkV1Z6S0ZzbmNtVmtKeXdnSjJkeVpXVnVKeXdnSjJKc2RXVW5MQ0FuWVd4d2FHRW5YU2s3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JvYzJ4aElEMGdjM0JzYVhSRGIyeHZjbFpoYkhWbGN5aGJKMmgxWlNjc0lDZHpZWFIxY21GMGFXOXVKeXdnSjJ4cFoyaDBibVZ6Y3ljc0lDZGhiSEJvWVNkZEtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnZiRzl5SUQwZ0tIWXBJRDArSUh0Y2JpQWdhV1lnS0dselVtZGlLSFlwS1NCN1hHNGdJQ0FnY21WMGRYSnVJSEpuWW1Fb2RpazdYRzRnSUgwZ1pXeHpaU0JwWmlBb2FYTklaWGdvZGlrcElIdGNiaUFnSUNCeVpYUjFjbTRnYUdWNEtIWXBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tHbHpTSE5zS0hZcEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdoemJHRW9kaWs3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnZGp0Y2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3BhcnNlcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zcGxpdENvbG9yVmFsdWVzID0gc3BsaXRDb2xvclZhbHVlcztcbnZhciB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbn07XG5cbnZhciBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbnZhciBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbnZhciBIQVNfUEVSRk9STUFOQ0VfTk9XID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3c7XG5cbi8qXG4gIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNhbWVsVG9EYXNoID0gZXhwb3J0cy5jYW1lbFRvRGFzaCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qXG4gIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gIFxuICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xudmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy5jdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbnZhciBzZXRET01BdHRycyA9IGV4cG9ydHMuc2V0RE9NQXR0cnMgPSBmdW5jdGlvbiAoZWxlbWVudCwgYXR0cnMpIHtcbiAgZm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgaWYgKGF0dHJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG4gICAgfVxuICB9XG59O1xuLypcbiAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRDb21tYURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRDb21tYURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayBhbnkgYXJndW1lbnQgZm9yIGB0ZXJtYFxuICogYGNvbnRhaW5zKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xudmFyIGNvbnRhaW5zID0gZXhwb3J0cy5jb250YWlucyA9IGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBpc1N0cmluZyh0ZXJtKSAmJiB2LmluZGV4T2YodGVybSkgIT09IC0xO1xuICB9O1xufTtcblxuLyoqXG4gKiAgUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayB0byBzZWUgaWYgYW4gYXJndW1lbnQgaXNcbiAqICB0aGUgZmlyc3QgY2hhcmFjdGVycyBpbiB0aGUgcHJvdmlkZWQgYHRlcm1gXG4gKiBgaXNGaXJzdENoYXJzKCduZWVkbGUnKSgnaGF5c3RhY2snKWBcbiAqL1xudmFyIGlzRmlyc3RDaGFycyA9IGV4cG9ydHMuaXNGaXJzdENoYXJzID0gZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHRlcm0pICYmIHYuaW5kZXhPZih0ZXJtKSA9PT0gMDtcbiAgfTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgdW5pdCB2YWx1ZSB0eXBlXG4gKi9cbnZhciBjcmVhdGVVbml0VHlwZSA9IGV4cG9ydHMuY3JlYXRlVW5pdFR5cGUgPSBmdW5jdGlvbiAodHlwZSwgdHJhbnNmb3JtKSB7XG4gIHJldHVybiB7XG4gICAgdGVzdDogY29udGFpbnModHlwZSksXG4gICAgcGFyc2U6IHBhcnNlRmxvYXQsXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgfTtcbn07XG5cbi8qXG4gIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbnZhciBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBzcGxpdCBjb2xvclxuICogdmFsdWVzIGZyb20gc3RyaW5nIGludG8gYW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcbiAqIGBtYXBBcnJheVRvT2JqZWN0KFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXSkoJ3JnYmEoMCwwLDApJylgXG4gKi9cbmZ1bmN0aW9uIHNwbGl0Q29sb3JWYWx1ZXModGVybXMpIHtcbiAgdmFyIG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuXG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICB2YXIgdmFsdWVzQXJyYXkgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHYpKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgdmFsdWVzW3Rlcm1zW2ldXSA9IHZhbHVlc0FycmF5W2ldICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KHZhbHVlc0FycmF5W2ldKSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcbn1cblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xudmFyIGlzQXJyYXkgPSBleHBvcnRzLmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbnZhciBpc0Z1bmMgPSBleHBvcnRzLmlzRnVuYyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG52YXIgaXNOdW0gPSBleHBvcnRzLmlzTnVtID0gZnVuY3Rpb24gKG51bSkge1xuICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbnZhciBpc09iaiA9IGV4cG9ydHMuaXNPYmogPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59O1xuXG52YXIgaXNIZXggPSBleHBvcnRzLmlzSGV4ID0gaXNGaXJzdENoYXJzKCcjJyk7XG52YXIgaXNSZ2IgPSBleHBvcnRzLmlzUmdiID0gaXNGaXJzdENoYXJzKCdyZ2InKTtcbnZhciBpc0hzbCA9IGV4cG9ydHMuaXNIc2wgPSBpc0ZpcnN0Q2hhcnMoJ2hzbCcpO1xudmFyIGlzQ29sb3IgPSBleHBvcnRzLmlzQ29sb3IgPSBmdW5jdGlvbiAodikge1xuICByZXR1cm4gaXNIZXgodikgfHwgaXNSZ2IodikgfHwgaXNIc2wodik7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRYUnBiSE11YW5NaVhTd2libUZ0WlhNaU9sc2ljM0JzYVhSRGIyeHZjbFpoYkhWbGN5SXNJblpoY2xSNWNHVWlMQ0oyWVhKcFlXSnNaU0lzSWs5aWFtVmpkQ0lzSW5CeWIzUnZkSGx3WlNJc0luUnZVM1J5YVc1bklpd2lZMkZzYkNJc0luTnNhV05sSWl3aVEwRk5SVXhmUTBGVFJWOVFRVlJVUlZKT0lpd2lVa1ZRVEVGRFJWOVVSVTFRVEVGVVJTSXNJa2hCVTE5UVJWSkdUMUpOUVU1RFJWOU9UMWNpTENKd1pYSm1iM0p0WVc1alpTSXNJbTV2ZHlJc0ltTmhiV1ZzVkc5RVlYTm9JaXdpYzNSeWFXNW5JaXdpY21Wd2JHRmpaU0lzSW5SdlRHOTNaWEpEWVhObElpd2lZM1Z5Y21WdWRGUnBiV1VpTENKRVlYUmxJaXdpWjJWMFZHbHRaU0lzSW5ObGRFUlBUVUYwZEhKeklpd2laV3hsYldWdWRDSXNJbUYwZEhKeklpd2lhMlY1SWl3aWFHRnpUM2R1VUhKdmNHVnlkSGtpTENKelpYUkJkSFJ5YVdKMWRHVWlMQ0p6Y0d4cGRFTnZiVzFoUkdWc2FXMXBkR1ZrSWl3aWRtRnNkV1VpTENKcGMxTjBjbWx1WnlJc0luTndiR2wwSWl3aVkyOXVkR0ZwYm5NaUxDSjBaWEp0SWl3aWRpSXNJbWx1WkdWNFQyWWlMQ0pwYzBacGNuTjBRMmhoY25NaUxDSmpjbVZoZEdWVmJtbDBWSGx3WlNJc0luUjVjR1VpTENKMGNtRnVjMlp2Y20waUxDSjBaWE4wSWl3aWNHRnljMlVpTENKd1lYSnpaVVpzYjJGMElpd2laMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY2lMQ0p6ZFdKemRISnBibWNpTENKc1lYTjBTVzVrWlhoUFppSXNJblJsY20xeklpd2liblZ0VkdWeWJYTWlMQ0pzWlc1bmRHZ2lMQ0oyWVd4MVpYTWlMQ0oyWVd4MVpYTkJjbkpoZVNJc0lta2lMQ0oxYm1SbFptbHVaV1FpTENKcGMwRnljbUY1SWl3aVlYSnlJaXdpYVhOR2RXNWpJaXdpYjJKcUlpd2lhWE5PZFcwaUxDSnVkVzBpTENKcGMwOWlhaUlzSW5OMGNpSXNJbWx6U0dWNElpd2lhWE5TWjJJaUxDSnBjMGh6YkNJc0ltbHpRMjlzYjNJaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0UlFUWkZaMEpCTEdkQ0xFZEJRVUZCTEdkQ08wRkJOMFZvUWl4SlFVRk5ReXhWUVVGVkxGVkJRVU5ETEZGQlFVUTdRVUZCUVN4VFFVRmpReXhQUVVGUFF5eFRRVUZRTEVOQlFXbENReXhSUVVGcVFpeERRVUV3UWtNc1NVRkJNVUlzUTBGQkswSktMRkZCUVM5Q0xFVkJRWGxEU3l4TFFVRjZReXhEUVVFclF5eERRVUV2UXl4RlFVRnJSQ3hEUVVGRExFTkJRVzVFTEVOQlFXUTdRVUZCUVN4RFFVRm9RanM3UVVGRlFTeEpRVUZOUXl4eFFrRkJjVUlzYVVKQlFUTkNPMEZCUTBFc1NVRkJUVU1zYlVKQlFXMUNMRTlCUVhwQ08wRkJRMEVzU1VGQlRVTXNjMEpCUVhWQ0xFOUJRVTlETEZkQlFWQXNTMEZCZFVJc1YwRkJka0lzU1VGQmMwTkJMRmxCUVZsRExFZEJRUzlGT3p0QlFVVkJPenM3T3pzN1FVRk5UeXhKUVVGTlF5eHZRMEZCWXl4VlFVRkRReXhOUVVGRU8wRkJRVUVzVTBGQldVRXNUMEZCVDBNc1QwRkJVQ3hEUVVGbFVDeHJRa0ZCWml4RlFVRnRRME1zWjBKQlFXNURMRVZCUVhGRVR5eFhRVUZ5UkN4RlFVRmFPMEZCUVVFc1EwRkJjRUk3TzBGQlJWQTdPenM3TzBGQlMwOHNTVUZCVFVNc2IwTkJRV05RTEhOQ1FVRnpRanRCUVVGQkxGTkJRVTFETEZsQlFWbERMRWRCUVZvc1JVRkJUanRCUVVGQkxFTkJRWFJDTEVkQlFXZEVPMEZCUVVFc1UwRkJUU3hKUVVGSlRTeEpRVUZLTEVkQlFWZERMRTlCUVZnc1JVRkJUanRCUVVGQkxFTkJRWEJGT3p0QlFVVkJMRWxCUVUxRExHOURRVUZqTEZWQlFVTkRMRTlCUVVRc1JVRkJWVU1zUzBGQlZpeEZRVUZ2UWp0QlFVTTNReXhQUVVGTExFbEJRVWxETEVkQlFWUXNTVUZCWjBKRUxFdEJRV2hDTEVWQlFYVkNPMEZCUTNKQ0xGRkJRVWxCTEUxQlFVMUZMR05CUVU0c1EwRkJjVUpFTEVkQlFYSkNMRU5CUVVvc1JVRkJLMEk3UVVGRE4wSkdMR05CUVZGSkxGbEJRVklzUTBGQmNVSkdMRWRCUVhKQ0xFVkJRVEJDUkN4TlFVRk5ReXhIUVVGT0xFTkJRVEZDTzBGQlEwUTdRVUZEUmp0QlFVTkdMRU5CVGswN1FVRlBVRHM3T3pzN096czdRVUZSVHl4SlFVRk5SeXh2UkVGQmMwSXNWVUZCUTBNc1MwRkJSRHRCUVVGQkxGTkJRVmRETEZOQlFWTkVMRXRCUVZRc1NVRkJhMEpCTEUxQlFVMUZMRXRCUVU0c1EwRkJXU3hOUVVGYUxFTkJRV3hDTEVkQlFYZERMRU5CUVVOR0xFdEJRVVFzUTBGQmJrUTdRVUZCUVN4RFFVRTFRanM3UVVGRlVEczdPenRCUVVsUExFbEJRVTFITERoQ1FVRlhMRlZCUVVORExFbEJRVVE3UVVGQlFTeFRRVUZWTEZWQlFVTkRMRU5CUVVRc1JVRkJUenRCUVVOMlF5eFhRVUZSU2l4VFFVRlRSeXhKUVVGVUxFdEJRV3RDUXl4RlFVRkZReXhQUVVGR0xFTkJRVlZHTEVsQlFWWXNUVUZCYjBJc1EwRkJReXhEUVVFdlF6dEJRVU5FTEVkQlJuVkNPMEZCUVVFc1EwRkJha0k3TzBGQlNWQTdPenM3TzBGQlMwOHNTVUZCVFVjc2MwTkJRV1VzVlVGQlEwZ3NTVUZCUkR0QlFVRkJMRk5CUVZVc1ZVRkJRME1zUTBGQlJDeEZRVUZQTzBGQlF6TkRMRmRCUVZGS0xGTkJRVk5ITEVsQlFWUXNTMEZCYTBKRExFVkJRVVZETEU5QlFVWXNRMEZCVlVZc1NVRkJWaXhOUVVGdlFpeERRVUU1UXp0QlFVTkVMRWRCUmpKQ08wRkJRVUVzUTBGQmNrSTdPMEZCU1ZBN096dEJRVWRQTEVsQlFVMUpMREJEUVVGcFFpeFZRVUZEUXl4SlFVRkVMRVZCUVU5RExGTkJRVkFzUlVGQmNVSTdRVUZEYWtRc1UwRkJUenRCUVVOTVF5eFZRVUZOVWl4VFFVRlRUU3hKUVVGVUxFTkJSRVE3UVVGRlRFY3NWMEZCVDBNc1ZVRkdSanRCUVVkTVNEdEJRVWhMTEVkQlFWQTdRVUZMUkN4RFFVNU5PenRCUVZGUU96czdPMEZCU1U4c1NVRkJUVWtzYTBWQlFUWkNMRlZCUVVOa0xFdEJRVVE3UVVGQlFTeFRRVUZYUVN4TlFVRk5aU3hUUVVGT0xFTkJRV2RDWml4TlFVRk5UU3hQUVVGT0xFTkJRV01zUjBGQlpDeEpRVUZ4UWl4RFFVRnlReXhGUVVGM1EwNHNUVUZCVFdkQ0xGZEJRVTRzUTBGQmEwSXNSMEZCYkVJc1EwRkJlRU1zUTBGQldEdEJRVUZCTEVOQlFXNURPenRCUVVWUU96czdPenRCUVV0UExGTkJRVk16UXl4blFrRkJWQ3hEUVVFd1FqUkRMRXRCUVRGQ0xFVkJRV2xETzBGQlEzUkRMRTFCUVUxRExGZEJRVmRFTEUxQlFVMUZMRTFCUVhaQ096dEJRVVZCTEZOQlFVOHNWVUZCVldRc1EwRkJWaXhGUVVGaE8wRkJRMnhDTEZGQlFVMWxMRk5CUVZNc1JVRkJaanRCUVVOQkxGRkJRVTFETEdOQlFXTjBRaXh2UWtGQmIwSmxMREpDUVVFeVFsUXNRMEZCTTBJc1EwRkJjRUlzUTBGQmNFSTdPMEZCUlVFc1UwRkJTeXhKUVVGSmFVSXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKU2l4UlFVRndRaXhGUVVFNFFra3NSMEZCT1VJc1JVRkJiVU03UVVGRGFrTkdMR0ZCUVU5SUxFMUJRVTFMTEVOQlFVNHNRMEZCVUN4SlFVRnZRa1FzV1VGQldVTXNRMEZCV2l4TlFVRnRRa01zVTBGQmNFSXNSMEZCYVVOV0xGZEJRVmRSTEZsQlFWbERMRU5CUVZvc1EwRkJXQ3hEUVVGcVF5eEhRVUU0UkN4RFFVRnFSanRCUVVORU96dEJRVVZFTEZkQlFVOUdMRTFCUVZBN1FVRkRSQ3hIUVZSRU8wRkJWVVE3TzBGQlJVUTdPenM3T3p0QlFVMVBMRWxCUVUxSkxEUkNRVUZWTEZWQlFVTkRMRWRCUVVRN1FVRkJRU3hUUVVGVGJrUXNVVUZCVVcxRUxFZEJRVklzVFVGQmFVSXNUMEZCTVVJN1FVRkJRU3hEUVVGb1FqczdRVUZGVURzN096czdPMEZCVFU4c1NVRkJUVU1zTUVKQlFWTXNWVUZCUTBNc1IwRkJSRHRCUVVGQkxGTkJRVk55UkN4UlFVRlJjVVFzUjBGQlVpeE5RVUZwUWl4VlFVRXhRanRCUVVGQkxFTkJRV1k3TzBGQlJWQTdPenM3T3p0QlFVMVBMRWxCUVUxRExIZENRVUZSTEZWQlFVTkRMRWRCUVVRN1FVRkJRU3hUUVVGVExFOUJRVTlCTEVkQlFWQXNTMEZCWlN4UlFVRjRRanRCUVVGQkxFTkJRV1E3TzBGQlJWQTdPenM3T3p0QlFVMVBMRWxCUVUxRExIZENRVUZSTEZWQlFVTklMRWRCUVVRN1FVRkJRU3hUUVVGVExFOUJRVTlCTEVkQlFWQXNTMEZCWlN4UlFVRjRRanRCUVVGQkxFTkJRV1E3TzBGQlJWQTdPenM3T3p0QlFVMVBMRWxCUVUweFFpdzRRa0ZCVnl4VlFVRkRPRUlzUjBGQlJEdEJRVUZCTEZOQlFWTXNUMEZCVDBFc1IwRkJVQ3hMUVVGbExGRkJRWGhDTzBGQlFVRXNRMEZCYWtJN08wRkJSVUVzU1VGQlRVTXNkMEpCUVZGNlFpeGhRVUZoTEVkQlFXSXNRMEZCWkR0QlFVTkJMRWxCUVUwd1FpeDNRa0ZCVVRGQ0xHRkJRV0VzUzBGQllpeERRVUZrTzBGQlEwRXNTVUZCVFRKQ0xIZENRVUZSTTBJc1lVRkJZU3hMUVVGaUxFTkJRV1E3UVVGRFFTeEpRVUZOTkVJc05FSkJRVlVzVlVGQlF6bENMRU5CUVVRN1FVRkJRU3hUUVVGUk1rSXNUVUZCVFROQ0xFTkJRVTRzUzBGQldUUkNMRTFCUVUwMVFpeERRVUZPTEVOQlFWb3NTVUZCZDBJMlFpeE5RVUZOTjBJc1EwRkJUaXhEUVVGb1F6dEJRVUZCTEVOQlFXaENJaXdpWm1sc1pTSTZJblYwYVd4ekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVkyOXVjM1FnZG1GeVZIbHdaU0E5SUNoMllYSnBZV0pzWlNrZ1BUNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp5NWpZV3hzS0haaGNtbGhZbXhsS1M1emJHbGpaU2c0TENBdE1TazdYRzVjYm1OdmJuTjBJRU5CVFVWTVgwTkJVMFZmVUVGVVZFVlNUaUE5SUM4b1cyRXRlbDBwS0Z0QkxWcGRLUzluTzF4dVkyOXVjM1FnVWtWUVRFRkRSVjlVUlUxUVRFRlVSU0E5SUNja01TMGtNaWM3WEc1amIyNXpkQ0JJUVZOZlVFVlNSazlTVFVGT1EwVmZUazlYSUQwZ0tIUjVjR1Z2WmlCd1pYSm1iM0p0WVc1alpTQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdjR1Z5Wm05eWJXRnVZMlV1Ym05M0tUdGNibHh1THlwY2JpQWdRMjl1ZG1WeWRDQmpZVzFsYkVOaGMyVWdkRzhnWkdGemFDMWpZWE5sWEc1Y2JpQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJRUJ5WlhSMWNtNGdXM04wY21sdVoxMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdZMkZ0Wld4VWIwUmhjMmdnUFNBb2MzUnlhVzVuS1NBOVBpQnpkSEpwYm1jdWNtVndiR0ZqWlNoRFFVMUZURjlEUVZORlgxQkJWRlJGVWs0c0lGSkZVRXhCUTBWZlZFVk5VRXhCVkVVcExuUnZURzkzWlhKRFlYTmxLQ2s3WEc1Y2JpOHFYRzRnSUVkbGJtVnlZWFJsSUdOMWNuSmxiblFnZEdsdFpYTjBZVzF3WEc0Z0lGeHVJQ0JBY21WMGRYSnVJRnQwYVcxbGMzUmhiWEJkT2lCRGRYSnlaVzUwSUZWT1NWZ2dkR2x0WlhOMFlXMXdYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR04xY25KbGJuUlVhVzFsSUQwZ1NFRlRYMUJGVWtaUFVrMUJUa05GWDA1UFZ5QS9JQ2dwSUQwK0lIQmxjbVp2Y20xaGJtTmxMbTV2ZHlncElEb2dLQ2tnUFQ0Z2JtVjNJRVJoZEdVb0tTNW5aWFJVYVcxbEtDazdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnpaWFJFVDAxQmRIUnljeUE5SUNobGJHVnRaVzUwTENCaGRIUnljeWtnUFQ0Z2UxeHVJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdZWFIwY25NcElIdGNiaUFnSUNCcFppQW9ZWFIwY25NdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdaV3hsYldWdWRDNXpaWFJCZEhSeWFXSjFkR1VvYTJWNUxDQmhkSFJ5YzF0clpYbGRLVHRjYmlBZ0lDQjlYRzRnSUgxY2JuMDdYRzR2S2x4dUlDQlRjR3hwZENCamIyMXRZUzFrWld4cGJXbDBaV1FnYzNSeWFXNW5YRzVjYmlBZ1hDSm1iMjhzWW1GeVhDSWdMVDRnVzF3aVptOXZYQ0lzSUZ3aVltRnlYQ0pkWEc1Y2JpQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJRUJ5WlhSMWNtNGdXMkZ5Y21GNVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR3hwZEVOdmJXMWhSR1ZzYVcxcGRHVmtJRDBnS0haaGJIVmxLU0E5UGlCcGMxTjBjbWx1WnloMllXeDFaU2tnUHlCMllXeDFaUzV6Y0d4cGRDZ3ZMRnhjY3lvdktTQTZJRnQyWVd4MVpWMDdYRzVjYmk4cUtseHVJQ29nSUZKbGRIVnlibk1nWVNCbWRXNWpkR2x2YmlCMGFHRjBJSGRwYkd3Z1kyaGxZMnNnWVc1NUlHRnlaM1Z0Wlc1MElHWnZjaUJnZEdWeWJXQmNiaUFxSUdCamIyNTBZV2x1Y3lnbmJtVmxaR3hsSnlrb0oyaGhlWE4wWVdOckp5bGdYRzRnS2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYjI1MFlXbHVjeUE5SUNoMFpYSnRLU0E5UGlBb2Rpa2dQVDRnZTF4dUlDQnlaWFIxY200Z0tHbHpVM1J5YVc1bktIUmxjbTBwSUNZbUlIWXVhVzVrWlhoUFppaDBaWEp0S1NBaFBUMGdMVEVwTzF4dWZUdGNibHh1THlvcVhHNGdLaUFnVW1WMGRYSnVjeUJoSUdaMWJtTjBhVzl1SUhSb1lYUWdkMmxzYkNCamFHVmpheUIwYnlCelpXVWdhV1lnWVc0Z1lYSm5kVzFsYm5RZ2FYTmNiaUFxSUNCMGFHVWdabWx5YzNRZ1kyaGhjbUZqZEdWeWN5QnBiaUIwYUdVZ2NISnZkbWxrWldRZ1lIUmxjbTFnWEc0Z0tpQmdhWE5HYVhKemRFTm9ZWEp6S0NkdVpXVmtiR1VuS1NnbmFHRjVjM1JoWTJzbktXQmNiaUFxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6Um1seWMzUkRhR0Z5Y3lBOUlDaDBaWEp0S1NBOVBpQW9kaWtnUFQ0Z2UxeHVJQ0J5WlhSMWNtNGdLR2x6VTNSeWFXNW5LSFJsY20wcElDWW1JSFl1YVc1a1pYaFBaaWgwWlhKdEtTQTlQVDBnTUNrN1hHNTlPMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaU0JoSUhWdWFYUWdkbUZzZFdVZ2RIbHdaVnh1SUNvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxWVzVwZEZSNWNHVWdQU0FvZEhsd1pTd2dkSEpoYm5ObWIzSnRLU0E5UGlCN1hHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2RHVnpkRG9nWTI5dWRHRnBibk1vZEhsd1pTa3NYRzRnSUNBZ2NHRnljMlU2SUhCaGNuTmxSbXh2WVhRc1hHNGdJQ0FnZEhKaGJuTm1iM0p0WEc0Z0lIMDdYRzU5TzF4dVhHNHZLbHh1SUNCSFpYUWdkbUZzZFdVZ1puSnZiU0JtZFc1amRHbHZiaUJ6ZEhKcGJtZGNiaUFnWENKMGNtRnVjMnhoZEdWWUtESXdjSGdwWENJZ0xUNGdYQ0l5TUhCNFhDSmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY2dQU0FvZG1Gc2RXVXBJRDArSUhaaGJIVmxMbk4xWW5OMGNtbHVaeWgyWVd4MVpTNXBibVJsZUU5bUtDY29KeWtnS3lBeExDQjJZV3gxWlM1c1lYTjBTVzVrWlhoUFppZ25LU2NwS1R0Y2JseHVMeW9xWEc0Z0tpQkRjbVZoZEdWeklHRWdablZ1WTNScGIyNGdkR2hoZENCM2FXeHNJSE53YkdsMElHTnZiRzl5WEc0Z0tpQjJZV3gxWlhNZ1puSnZiU0J6ZEhKcGJtY2dhVzUwYnlCaGJpQnZZbXBsWTNRZ2IyWWdjSEp2Y0dWeWRHbGxjMXh1SUNvZ1lHMWhjRUZ5Y21GNVZHOVBZbXBsWTNRb1d5ZHlaV1FuTENBblozSmxaVzRuTENBbllteDFaU2RkS1NnbmNtZGlZU2d3TERBc01Da25LV0JjYmlBcUwxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlITndiR2wwUTI5c2IzSldZV3gxWlhNb2RHVnliWE1wSUh0Y2JpQWdZMjl1YzNRZ2JuVnRWR1Z5YlhNZ1BTQjBaWEp0Y3k1c1pXNW5kR2c3WEc1Y2JpQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDaDJLU0I3WEc0Z0lDQWdZMjl1YzNRZ2RtRnNkV1Z6SUQwZ2UzMDdYRzRnSUNBZ1kyOXVjM1FnZG1Gc2RXVnpRWEp5WVhrZ1BTQnpjR3hwZEVOdmJXMWhSR1ZzYVcxcGRHVmtLR2RsZEZaaGJIVmxSbkp2YlVaMWJtTjBhVzl1VTNSeWFXNW5LSFlwS1R0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JuVnRWR1Z5YlhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnZG1Gc2RXVnpXM1JsY20xelcybGRYU0E5SUNoMllXeDFaWE5CY25KaGVWdHBYU0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQS9JSEJoY25ObFJteHZZWFFvZG1Gc2RXVnpRWEp5WVhsYmFWMHBJRG9nTVR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkbUZzZFdWek8xeHVJQ0I5TzF4dWZWeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVc0Z1lYSnlZWGtnUHlCY2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhWMGFXeHpMblpoY2xSNWNHVWdQVDA5SUNkQmNuSmhlU2RjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOQmNuSmhlU0E5SUNoaGNuSXBJRDArSUhaaGNsUjVjR1VvWVhKeUtTQTlQVDBnSjBGeWNtRjVKenRjYmx4dUx5cGNiaUFnU1hNZ2RYUnBiSE1nZG1GeUlHRWdablZ1WTNScGIyNGdQeUJjYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFYwYVd4ekxuWmhjbFI1Y0dVZ1BUMDlJQ2RHZFc1amRHbHZiaWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOR2RXNWpJRDBnS0c5aWFpa2dQVDRnZG1GeVZIbHdaU2h2WW1vcElEMDlQU0FuUm5WdVkzUnBiMjRuTzF4dVhHNHZLbHh1SUNCSmN5QjFkR2xzY3lCMllYSWdZU0J1ZFcxaVpYSS9YRzRnSUZ4dUlDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBlWEJsYjJZZ1BUMDlJQ2R1ZFcxaVpYSW5YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VG5WdElEMGdLRzUxYlNrZ1BUNGdkSGx3Wlc5bUlHNTFiU0E5UFQwZ0oyNTFiV0psY2ljN1hHNWNiaThxWEc0Z0lFbHpJSFYwYVd4eklIWmhjaUJoYmlCdlltcGxZM1EvWEc0Z0lGeHVJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIwZVhCbGIyWWdQVDA5SUNkdlltcGxZM1FuWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselQySnFJRDBnS0c5aWFpa2dQVDRnZEhsd1pXOW1JRzlpYWlBOVBUMGdKMjlpYW1WamRDYzdYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaElITjBjbWx1WnlBL0lGeHVJQ0JjYmlBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RIbHdaVzltSUhOMGNpQTlQVDBnSjNOMGNtbHVaeWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOVGRISnBibWNnUFNBb2MzUnlLU0E5UGlCMGVYQmxiMllnYzNSeUlEMDlQU0FuYzNSeWFXNW5KenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR2x6U0dWNElEMGdhWE5HYVhKemRFTm9ZWEp6S0Njakp5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTlNaMklnUFNCcGMwWnBjbk4wUTJoaGNuTW9KM0puWWljcE8xeHVaWGh3YjNKMElHTnZibk4wSUdselNITnNJRDBnYVhOR2FYSnpkRU5vWVhKektDZG9jMnduS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzBOdmJHOXlJRDBnS0hZcElEMCtJQ2hwYzBobGVDaDJLU0I4ZkNCcGMxSm5ZaWgyS1NCOGZDQnBjMGh6YkNoMktTazdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG52YXIgaGFzUkFGID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRydWUgOiBmYWxzZTtcblxudmFyIG9uTmV4dEZyYW1lID0gdm9pZCAwO1xuXG5pZiAoaGFzUkFGKSB7XG4gIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9O1xufSBlbHNlIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvKlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgICBcbiAgICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcbiAgICAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgICBcbiAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgICAgXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgXG4gICAgICBNSVQgbGljZW5zZVxuICAgICovXG4gICAgdmFyIGxhc3RUaW1lID0gMDtcblxuICAgIG9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYuNyAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWUgKyB0aW1lVG9DYWxsO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGxhc3RUaW1lKTtcbiAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgIH07XG4gIH0pKCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG9uTmV4dEZyYW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12YjI0dGJtVjRkQzFtY21GdFpTNXFjeUpkTENKdVlXMWxjeUk2V3lKb1lYTlNRVVlpTENKM2FXNWtiM2NpTENKeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVWlMQ0p2Yms1bGVIUkdjbUZ0WlNJc0ltTmhiR3hpWVdOcklpd2liR0Z6ZEZScGJXVWlMQ0pqZFhKeVpXNTBWR2x0WlNJc0lrUmhkR1VpTENKblpYUlVhVzFsSWl3aWRHbHRaVlJ2UTJGc2JDSXNJazFoZEdnaUxDSnRZWGdpTENKelpYUlVhVzFsYjNWMElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRVHM3TzBGQlIwRXNTVUZCVFVFc1UwRkJWU3hQUVVGUFF5eE5RVUZRTEV0QlFXdENMRmRCUVd4Q0xFbEJRV2xEUVN4UFFVRlBReXh4UWtGQmVrTXNSMEZCYTBVc1NVRkJiRVVzUjBGQmVVVXNTMEZCZUVZN08wRkJSVUVzU1VGQlNVTXNiMEpCUVVvN08wRkJSVUVzU1VGQlNVZ3NUVUZCU2l4RlFVRlpPMEZCUTFaSExHZENRVUZqTEZWQlFVTkRMRkZCUVVRN1FVRkJRU3hYUVVGalNDeFBRVUZQUXl4eFFrRkJVQ3hEUVVFMlFrVXNVVUZCTjBJc1EwRkJaRHRCUVVGQkxFZEJRV1E3UVVGRlJDeERRVWhFTEUxQlIwODdRVUZCUVR0QlFVTk1PenM3T3pzN096czdPenM3TzBGQlkwRXNVVUZCU1VNc1YwRkJWeXhEUVVGbU96dEJRVVZCUml4clFrRkJZeXhWUVVGRFF5eFJRVUZFTEVWQlFXTTdRVUZETVVJc1ZVRkJUVVVzWTBGQll5eEpRVUZKUXl4SlFVRktMRWRCUVZkRExFOUJRVmdzUlVGQmNFSTdRVUZEUVN4VlFVRk5ReXhoUVVGaFF5eExRVUZMUXl4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxGRkJRVkZNTEdOQlFXTkVMRkZCUVhSQ0xFTkJRVm9zUTBGQmJrSTdPMEZCUlVGQkxHbENRVUZYUXl4alFVRmpSeXhWUVVGNlFqczdRVUZGUVVjc2FVSkJRVmM3UVVGQlFTeGxRVUZOVWl4VFFVRlRReXhSUVVGVUxFTkJRVTQ3UVVGQlFTeFBRVUZZTEVWQlFYRkRTU3hWUVVGeVF6dEJRVU5FTEV0QlVFUTdRVUZxUWtzN1FVRjVRazQ3TzJ0Q1FVVmpUaXhYSWl3aVptbHNaU0k2SW05dUxXNWxlSFF0Wm5KaGJXVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNCRVpYUmxZM1FnWVc1a0lHeHZZV1FnWVc0Z1lYQndjbTl3Y21saGRHVWdZMnh2WTJzZ2MyVjBkR2x1WnlCbWIzSWdkR2hsSUdWdWRtbHliMjV0Wlc1MFhHNHFMMXh1WTI5dWMzUWdhR0Z6VWtGR0lEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVXBJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVYRzVzWlhRZ2IyNU9aWGgwUm5KaGJXVTdYRzVjYm1sbUlDaG9ZWE5TUVVZcElIdGNiaUFnYjI1T1pYaDBSbkpoYldVZ1BTQW9ZMkZzYkdKaFkyc3BJRDArSUhkcGJtUnZkeTV5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVb1kyRnNiR0poWTJzcE8xeHVYRzU5SUdWc2MyVWdlMXh1SUNBdktseHVJQ0FnSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTQndiMng1Wm1sc2JGeHVJQ0FnSUZ4dUlDQWdJRVp2Y2lCSlJUZ3ZPU0JHYkdsdWMzUnZibVZ6SUdGdVpDQnViMjR0WW5KdmQzTmxjaUJsYm5acGNtOXViV1Z1ZEhOY2JseHVJQ0FnSUZSaGEyVnVJR1p5YjIwZ1VHRjFiQ0JKY21semFDNGdWMlVuZG1VZ2MzUnlhWEJ3WldRZ2IzVjBJR05oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsSUdOb1pXTnJjeUJpWldOaGRYTmxJSGRsSUdSdmJpZDBJR1p2ZUNCM2FYUm9JSFJvWVhSY2JpQWdJQ0JjYmlBZ0lDQm9kSFJ3T2k4dmNHRjFiR2x5YVhOb0xtTnZiUzh5TURFeEwzSmxjWFZsYzNSaGJtbHRZWFJwYjI1bWNtRnRaUzFtYjNJdGMyMWhjblF0WVc1cGJXRjBhVzVuTDF4dUlDQWdJR2gwZEhBNkx5OXRlUzV2Y0dWeVlTNWpiMjB2WlcxdmJHeGxjaTlpYkc5bkx6SXdNVEV2TVRJdk1qQXZjbVZ4ZFdWemRHRnVhVzFoZEdsdmJtWnlZVzFsTFdadmNpMXpiV0Z5ZEMxbGNpMWhibWx0WVhScGJtZGNiaUFnSUNBZ1hHNGdJQ0FnY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbElIQnZiSGxtYVd4c0lHSjVJRVZ5YVdzZ1RjTzJiR3hsY2k0Z1ptbDRaWE1nWm5KdmJTQlFZWFZzSUVseWFYTm9JR0Z1WkNCVWFXNXZJRnBwYW1SbGJGeHVJQ0FnSUNCY2JpQWdJQ0JOU1ZRZ2JHbGpaVzV6WlZ4dUlDQXFMMXh1SUNCc1pYUWdiR0Z6ZEZScGJXVWdQU0F3TzF4dVhHNGdJRzl1VG1WNGRFWnlZVzFsSUQwZ0tHTmhiR3hpWVdOcktTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1kzVnljbVZ1ZEZScGJXVWdQU0J1WlhjZ1JHRjBaU2dwTG1kbGRGUnBiV1VvS1R0Y2JpQWdJQ0JqYjI1emRDQjBhVzFsVkc5RFlXeHNJRDBnVFdGMGFDNXRZWGdvTUN3Z01UWXVOeUF0SUNoamRYSnlaVzUwVkdsdFpTQXRJR3hoYzNSVWFXMWxLU2s3WEc1Y2JpQWdJQ0JzWVhOMFZHbHRaU0E5SUdOMWNuSmxiblJVYVcxbElDc2dkR2x0WlZSdlEyRnNiRHRjYmx4dUlDQWdJSE5sZEZScGJXVnZkWFFvS0NrZ1BUNGdZMkZzYkdKaFkyc29iR0Z6ZEZScGJXVXBMQ0IwYVcxbFZHOURZV3hzS1R0Y2JpQWdmVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2IyNU9aWGgwUm5KaGJXVTdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9mcmFtZXN5bmMvb24tbmV4dC1mcmFtZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVJlbmRlclN0ZXA7XG5mdW5jdGlvbiBjcmVhdGVSZW5kZXJTdGVwKHN0YXJ0UmVuZGVyTG9vcCkge1xuICAvKipcbiAgICogV2UgdXNlIHR3byBhcnJheXMsIG9uZSBmb3IgdGhpcyBmcmFtZSBhbmQgb25lIHRvIHF1ZXVlIGZvciB0aGVcbiAgICogbmV4dCBmcmFtZSwgcmV1c2luZyBlYWNoIHRvIGF2b2lkIEdDLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICB2YXIgZnVuY3Rpb25zVG9SdW4gPSBbXTtcbiAgdmFyIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICBzY2hlZHVsZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBzdGFydFJlbmRlckxvb3AoKTtcbiAgICAgIC8vIElmIHRoaXMgY2FsbGJhY2sgaXNuJ3QgYWxyZWFkeSBzY2hlZHVsZWQgdG8gcnVuIG5leHQgZnJhbWVcbiAgICAgIGlmIChmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTEpIHtcbiAgICAgICAgZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUucHVzaChjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNhbmNlbDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgaW5kZXhPZkNhbGxiYWNrID0gZnVuY3Rpb25zVG9SdW5OZXh0RnJhbWUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaW5kZXhPZkNhbGxiYWNrICE9PSAtMSkge1xuICAgICAgICBmdW5jdGlvbnNUb1J1bk5leHRGcmFtZS5zcGxpY2UoaW5kZXhPZkNhbGxiYWNrLCAxKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKCkge1xuXG4gICAgICAvLyBDbGVhciBuZXh0IGZyYW1lIGxpc3RcbiAgICAgIHZhciBfcmVmID0gW2Z1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLCBmdW5jdGlvbnNUb1J1bl07XG4gICAgICAvLyBTd2FwIHRoaXMgZnJhbWUgYW5kIG5leHQgZnJhbWUgYXJyYXlzIHRvIGF2b2lkIEdDXG5cbiAgICAgIGZ1bmN0aW9uc1RvUnVuID0gX3JlZlswXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lID0gX3JlZlsxXTtcbiAgICAgIGZ1bmN0aW9uc1RvUnVuTmV4dEZyYW1lLmxlbmd0aCA9IDA7XG5cbiAgICAgIC8vIEV4ZWN1dGUgYWxsIG9mIHRoaXMgZnJhbWUncyBmdW5jdGlvbnNcbiAgICAgIHZhciBudW1UaGlzRnJhbWUgPSBmdW5jdGlvbnNUb1J1bi5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRoaXNGcmFtZTsgaSsrKSB7XG4gICAgICAgIGZ1bmN0aW9uc1RvUnVuW2ldKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTltY21GdFpYTjVibU12WTNKbFlYUmxMWEpsYm1SbGNpMXpkR1Z3TG1weklsMHNJbTVoYldWeklqcGJJbU55WldGMFpWSmxibVJsY2xOMFpYQWlMQ0p6ZEdGeWRGSmxibVJsY2t4dmIzQWlMQ0ptZFc1amRHbHZibk5VYjFKMWJpSXNJbVoxYm1OMGFXOXVjMVJ2VW5WdVRtVjRkRVp5WVcxbElpd2ljMk5vWldSMWJHVWlMQ0pqWVd4c1ltRmpheUlzSW1sdVpHVjRUMllpTENKd2RYTm9JaXdpWTJGdVkyVnNJaXdpYVc1a1pYaFBaa05oYkd4aVlXTnJJaXdpYzNCc2FXTmxJaXdpY0hKdlkyVnpjeUlzSW14bGJtZDBhQ0lzSW01MWJWUm9hWE5HY21GdFpTSXNJbWtpWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGQmQwSkJMR2RDTzBGQlFWUXNVMEZCVTBFc1owSkJRVlFzUTBGQk1FSkRMR1ZCUVRGQ0xFVkJRVEpETzBGQlEzaEVPenM3T3p0QlFVdEJMRTFCUVVsRExHbENRVUZwUWl4RlFVRnlRanRCUVVOQkxFMUJRVWxETERCQ1FVRXdRaXhGUVVFNVFqczdRVUZGUVN4VFFVRlBPMEZCUTB4RExHTkJRVlVzVlVGQlEwTXNVVUZCUkN4RlFVRmpPMEZCUTNSQ1NqdEJRVU5CTzBGQlEwRXNWVUZCU1VVc2QwSkJRWGRDUnl4UFFVRjRRaXhEUVVGblEwUXNVVUZCYUVNc1RVRkJPRU1zUTBGQlF5eERRVUZ1UkN4RlFVRnpSRHRCUVVOd1JFWXNaME5CUVhkQ1NTeEpRVUY0UWl4RFFVRTJRa1lzVVVGQk4wSTdRVUZEUkR0QlFVTkdMRXRCVUVrN08wRkJVMHhITEZsQlFWRXNWVUZCUTBnc1VVRkJSQ3hGUVVGak8wRkJRM0JDTEZWQlFVMUpMR3RDUVVGclFrNHNkMEpCUVhkQ1J5eFBRVUY0UWl4RFFVRm5RMFFzVVVGQmFFTXNRMEZCZUVJN1FVRkRRU3hWUVVGSlNTeHZRa0ZCYjBJc1EwRkJReXhEUVVGNlFpeEZRVUUwUWp0QlFVTXhRazRzWjBOQlFYZENUeXhOUVVGNFFpeERRVUVyUWtRc1pVRkJMMElzUlVGQlowUXNRMEZCYUVRN1FVRkRSRHRCUVVOR0xFdEJaRWs3TzBGQlowSk1SU3hoUVVGVExGbEJRVTA3TzBGQlNXSTdRVUZLWVN4cFFrRkZLMElzUTBGQlExSXNkVUpCUVVRc1JVRkJNRUpFTEdOQlFURkNMRU5CUmk5Q08wRkJRMkk3TzBGQlEwTkJMRzlDUVVaWk8wRkJSVWxETERaQ1FVWktPMEZCUzJKQkxEaENRVUYzUWxNc1RVRkJlRUlzUjBGQmFVTXNRMEZCYWtNN08wRkJSVUU3UVVGRFFTeFZRVUZOUXl4bFFVRmxXQ3hsUVVGbFZTeE5RVUZ3UXp0QlFVTkJMRmRCUVVzc1NVRkJTVVVzU1VGQlNTeERRVUZpTEVWQlFXZENRU3hKUVVGSlJDeFpRVUZ3UWl4RlFVRnJRME1zUjBGQmJFTXNSVUZCZFVNN1FVRkRja05hTEhWQ1FVRmxXU3hEUVVGbU8wRkJRMFE3UVVGRFJqdEJRVFZDU1N4SFFVRlFPMEZCT0VKRUlpd2labWxzWlNJNkltTnlaV0YwWlMxeVpXNWtaWEl0YzNSbGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUdOeVpXRjBaVkpsYm1SbGNsTjBaWEFvYzNSaGNuUlNaVzVrWlhKTWIyOXdLU0I3WEc0Z0lDOHFLbHh1SUNBZ0tpQlhaU0IxYzJVZ2RIZHZJR0Z5Y21GNWN5d2diMjVsSUdadmNpQjBhR2x6SUdaeVlXMWxJR0Z1WkNCdmJtVWdkRzhnY1hWbGRXVWdabTl5SUhSb1pWeHVJQ0FnS2lCdVpYaDBJR1p5WVcxbExDQnlaWFZ6YVc1bklHVmhZMmdnZEc4Z1lYWnZhV1FnUjBNdVhHNGdJQ0FxSUVCMGVYQmxJSHRCY25KaGVYMWNiaUFnSUNvdlhHNGdJR3hsZENCbWRXNWpkR2x2Ym5OVWIxSjFiaUE5SUZ0ZE8xeHVJQ0JzWlhRZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1VnUFNCYlhUdGNibHh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJSE5qYUdWa2RXeGxPaUFvWTJGc2JHSmhZMnNwSUQwK0lIdGNiaUFnSUNBZ0lITjBZWEowVW1WdVpHVnlURzl2Y0NncE8xeHVJQ0FnSUNBZ0x5OGdTV1lnZEdocGN5QmpZV3hzWW1GamF5QnBjMjRuZENCaGJISmxZV1I1SUhOamFHVmtkV3hsWkNCMGJ5QnlkVzRnYm1WNGRDQm1jbUZ0WlZ4dUlDQWdJQ0FnYVdZZ0tHWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTG1sdVpHVjRUMllvWTJGc2JHSmhZMnNwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2Ym5OVWIxSjFiazVsZUhSR2NtRnRaUzV3ZFhOb0tHTmhiR3hpWVdOcktUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyRnVZMlZzT2lBb1kyRnNiR0poWTJzcElEMCtJSHRjYmlBZ0lDQWdJR052Ym5OMElHbHVaR1Y0VDJaRFlXeHNZbUZqYXlBOUlHWjFibU4wYVc5dWMxUnZVblZ1VG1WNGRFWnlZVzFsTG1sdVpHVjRUMllvWTJGc2JHSmhZMnNwTzF4dUlDQWdJQ0FnYVdZZ0tHbHVaR1Y0VDJaRFlXeHNZbUZqYXlBaFBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YzNCc2FXTmxLR2x1WkdWNFQyWkRZV3hzWW1GamF5d2dNU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSEJ5YjJObGMzTTZJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDOHZJRk4zWVhBZ2RHaHBjeUJtY21GdFpTQmhibVFnYm1WNGRDQm1jbUZ0WlNCaGNuSmhlWE1nZEc4Z1lYWnZhV1FnUjBOY2JpQWdJQ0FnSUZ0bWRXNWpkR2x2Ym5OVWIxSjFiaXdnWm5WdVkzUnBiMjV6Vkc5U2RXNU9aWGgwUm5KaGJXVmRJRDBnVzJaMWJtTjBhVzl1YzFSdlVuVnVUbVY0ZEVaeVlXMWxMQ0JtZFc1amRHbHZibk5VYjFKMWJsMDdYRzVjYmlBZ0lDQWdJQzh2SUVOc1pXRnlJRzVsZUhRZ1puSmhiV1VnYkdsemRGeHVJQ0FnSUNBZ1puVnVZM1JwYjI1elZHOVNkVzVPWlhoMFJuSmhiV1V1YkdWdVozUm9JRDBnTUR0Y2JseHVJQ0FnSUNBZ0x5OGdSWGhsWTNWMFpTQmhiR3dnYjJZZ2RHaHBjeUJtY21GdFpTZHpJR1oxYm1OMGFXOXVjMXh1SUNBZ0lDQWdZMjl1YzNRZ2JuVnRWR2hwYzBaeVlXMWxJRDBnWm5WdVkzUnBiMjV6Vkc5U2RXNHViR1Z1WjNSb08xeHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFVYUdselJuSmhiV1U3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZibk5VYjFKMWJsdHBYU2dwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZUdGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvZnJhbWVzeW5jL2NyZWF0ZS1yZW5kZXItc3RlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZFN0eWxlUHJvcGVydHlTdHJpbmc7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF92YWx1ZVR5cGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcycpO1xuXG52YXIgX3ZhbHVlVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcbnZhciB0cmFuc2xhdGVNYXAgPSB7XG4gIHg6IFRSQU5TTEFURSArICdYJyxcbiAgeTogVFJBTlNMQVRFICsgJ1knLFxuICB6OiBUUkFOU0xBVEUgKyAnWidcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkU3R5bGVQcm9wZXJ0eVN0cmluZyhlbGVtZW50LCBzdGF0ZSwgY2hhbmdlZFZhbHVlcywgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgdmFyIHByb3BlcnR5U3RyaW5nID0gJyc7XG4gIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSAnJztcbiAgdmFyIGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICB2YXIgdHJhbnNmb3JtSGFzWiA9IGZhbHNlO1xuXG4gIC8vIEZpcnN0IGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgY2hhbmdlZCB0cmFuc2Zvcm0gdmFsdWVzXG4gIC8vIGFuZCBpZiB0cnVlIGFkZCBhbGwgdHJhbnNmb3JtIHZhbHVlc1xuICB2YXIgbnVtQ2hhbmdlZFZhbHVlcyA9IGNoYW5nZWRWYWx1ZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNoYW5nZWRWYWx1ZXM7IGkrKykge1xuICAgIHZhciBrZXkgPSBjaGFuZ2VkVmFsdWVzW2ldO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBwcm9wZXJ0eSwgYWRkIGFsbCBvdGhlciB0cmFuc2Zvcm0gcHJvcHNcbiAgICAvLyB0byBjaGFuZ2VkVmFsdWVzIGFuZCB0aGVuIGJyZWFrXG4gICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuXG4gICAgICBmb3IgKHZhciBfa2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRbX2tleV0gJiYgY2hhbmdlZFZhbHVlcy5pbmRleE9mKF9rZXkpID09PSAtMSkge1xuICAgICAgICAgIGNoYW5nZWRWYWx1ZXMucHVzaChfa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgdG90YWxOdW1DaGFuZ2VkVmFsdWVzID0gY2hhbmdlZFZhbHVlcy5sZW5ndGg7XG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCB0b3RhbE51bUNoYW5nZWRWYWx1ZXM7IF9pKyspIHtcbiAgICB2YXIgX2tleTIgPSBjaGFuZ2VkVmFsdWVzW19pXTtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZVtfa2V5Ml07XG5cbiAgICBpZiAodHJhbnNsYXRlTWFwW19rZXkyXSkge1xuICAgICAgX2tleTIgPSB0cmFuc2xhdGVNYXBbX2tleTJdO1xuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSBudW1iZXIgb3Igb2JqZWN0IGFuZCB3ZSBoYXZlIGZpbHRlciwgYXBwbHkgZmlsdGVyXG4gICAgaWYgKF92YWx1ZVR5cGVzMi5kZWZhdWx0W19rZXkyXSAmJiAoKDAsIF91dGlscy5pc051bSkodmFsdWUpIHx8ICgwLCBfdXRpbHMuaXNPYmopKHZhbHVlKSkgJiYgX3ZhbHVlVHlwZXMyLmRlZmF1bHRbX2tleTJdLnRyYW5zZm9ybSkge1xuICAgICAgdmFsdWUgPSBfdmFsdWVUeXBlczIuZGVmYXVsdFtfa2V5Ml0udHJhbnNmb3JtKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W19rZXkyXSkge1xuICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IF9rZXkyICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgdHJhbnNmb3JtSGFzWiA9IF9rZXkyID09PSB0cmFuc2xhdGVNYXAueiA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShfa2V5MiwgdHJ1ZSkgKyAnOicgKyB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB3ZSBoYXZlIHRyYW5zZm9ybSBwcm9wcywgYnVpbGQgYSB0cmFuc2Zvcm0gc3RyaW5nXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSB0cmFuc2xhdGVNYXAueiArICcoMCknO1xuICAgIH1cblxuICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKCd0cmFuc2Zvcm0nLCB0cnVlKSArICc6JyArIHRyYW5zZm9ybVN0cmluZztcbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBwcm9wZXJ0eVN0cmluZztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEpsY25NdlkzTnpMM0psYm1SbGNpNXFjeUpkTENKdVlXMWxjeUk2V3lKaWRXbHNaRk4wZVd4bFVISnZjR1Z5ZEhsVGRISnBibWNpTENKVVVrRk9VMHhCVkVVaUxDSjBjbUZ1YzJ4aGRHVk5ZWEFpTENKNElpd2llU0lzSW5vaUxDSmxiR1Z0Wlc1MElpd2ljM1JoZEdVaUxDSmphR0Z1WjJWa1ZtRnNkV1Z6SWl3aVpXNWhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0aUxDSndjbTl3WlhKMGVWTjBjbWx1WnlJc0luUnlZVzV6Wm05eWJWTjBjbWx1WnlJc0ltaGhjMVJ5WVc1elptOXliU0lzSW5SeVlXNXpabTl5YlVoaGMxb2lMQ0p1ZFcxRGFHRnVaMlZrVm1Gc2RXVnpJaXdpYkdWdVozUm9JaXdpYVNJc0ltdGxlU0lzSW1sdVpHVjRUMllpTENKd2RYTm9JaXdpZEc5MFlXeE9kVzFEYUdGdVoyVmtWbUZzZFdWeklpd2lkbUZzZFdVaUxDSjBjbUZ1YzJadmNtMGlMQ0p6ZEhsc1pTSXNJbU56YzFSbGVIUWlYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZaZDBKQkxIZENPenRCUVZwNFFqczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVVZCTEVsQlFVMURMRmxCUVZrc1YwRkJiRUk3UVVGRFFTeEpRVUZOUXl4bFFVRmxPMEZCUTI1Q1F5eExRVUZIUml4WlFVRlpMRWRCUkVrN1FVRkZia0pITEV0QlFVZElMRmxCUVZrc1IwRkdTVHRCUVVkdVFra3NTMEZCUjBvc1dVRkJXVHRCUVVoSkxFTkJRWEpDT3p0QlFVMWxMRk5CUVZORUxIZENRVUZVTEVOQlFXdERUU3hQUVVGc1F5eEZRVUV5UTBNc1MwRkJNME1zUlVGQmEwUkRMR0ZCUVd4RUxFVkJRV2xGUXl3d1FrRkJha1VzUlVGQk5rWTdRVUZETVVjc1RVRkJTVU1zYVVKQlFXbENMRVZCUVhKQ08wRkJRMEVzVFVGQlNVTXNhMEpCUVd0Q0xFVkJRWFJDTzBGQlEwRXNUVUZCU1VNc1pVRkJaU3hMUVVGdVFqdEJRVU5CTEUxQlFVbERMR2RDUVVGblFpeExRVUZ3UWpzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVFVGQlRVTXNiVUpCUVcxQ1RpeGpRVUZqVHl4TlFVRjJRenRCUVVOQkxFOUJRVXNzU1VGQlNVTXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKUml4blFrRkJjRUlzUlVGQmMwTkZMRWRCUVhSRExFVkJRVEpETzBGQlEzcERMRkZCUVUxRExFMUJRVTFVTEdOQlFXTlJMRU5CUVdRc1EwRkJXanM3UVVGRlFUdEJRVU5CTzBGQlEwRXNVVUZCU1N4NVFrRkJaVU1zUjBGQlppeERRVUZLTEVWQlFYbENPMEZCUTNaQ1RDeHhRa0ZCWlN4SlFVRm1PenRCUVVWQkxGZEJRVXNzU1VGQlNVc3NTVUZCVkN4SlFVRm5RbFlzUzBGQmFFSXNSVUZCZFVJN1FVRkRja0lzV1VGQlNTeDVRa0ZCWlZVc1NVRkJaaXhMUVVGMVFsUXNZMEZCWTFVc1QwRkJaQ3hEUVVGelFrUXNTVUZCZEVJc1RVRkJLMElzUTBGQlF5eERRVUV6UkN4RlFVRTRSRHRCUVVNMVJGUXNkMEpCUVdOWExFbEJRV1FzUTBGQmJVSkdMRWxCUVc1Q08wRkJRMFE3UVVGRFJqczdRVUZGUkR0QlFVTkVPMEZCUTBZN08wRkJSVVFzVFVGQlRVY3NkMEpCUVhkQ1dpeGpRVUZqVHl4TlFVRTFRenRCUVVOQkxFOUJRVXNzU1VGQlNVTXNTMEZCU1N4RFFVRmlMRVZCUVdkQ1FTeExRVUZKU1N4eFFrRkJjRUlzUlVGQk1rTktMRWxCUVRORExFVkJRV2RFTzBGQlF6bERMRkZCUVVsRExGRkJRVTFVTEdOQlFXTlJMRVZCUVdRc1EwRkJWanRCUVVOQkxGRkJRVWxMTEZGQlFWRmtMRTFCUVUxVkxFdEJRVTRzUTBGQldqczdRVUZGUVN4UlFVRkpaaXhoUVVGaFpTeExRVUZpTEVOQlFVb3NSVUZCZFVJN1FVRkRja0pCTEdOQlFVMW1MR0ZCUVdGbExFdEJRV0lzUTBGQlRqdEJRVU5FT3p0QlFVVkVPMEZCUTBFc1VVRkJTU3h4UWtGQlYwRXNTMEZCV0N4TlFVRnZRaXhyUWtGQlRVa3NTMEZCVGl4TFFVRm5RaXhyUWtGQlRVRXNTMEZCVGl4RFFVRndReXhMUVVGeFJDeHhRa0ZCVjBvc1MwRkJXQ3hGUVVGblFrc3NVMEZCZWtVc1JVRkJiMFk3UVVGRGJFWkVMR05CUVZFc2NVSkJRVmRLTEV0QlFWZ3NSVUZCWjBKTExGTkJRV2hDTEVOQlFUQkNSQ3hMUVVFeFFpeERRVUZTTzBGQlEwUTdPMEZCUlVRc1VVRkJTU3g1UWtGQlpVb3NTMEZCWml4RFFVRktMRVZCUVhsQ08wRkJRM1pDVGl4NVFrRkJiVUpOTEZGQlFVMHNSMEZCVGl4SFFVRlpTU3hMUVVGYUxFZEJRVzlDTEVsQlFYWkRPMEZCUTBGU0xITkNRVUZwUWtrc1ZVRkJVV1lzWVVGQllVY3NRMEZCZEVJc1IwRkJNa0lzU1VGQk0wSXNSMEZCYTBOUkxHRkJRV3hFTzBGQlJVUXNTMEZLUkN4TlFVbFBPMEZCUTB4SUxIZENRVUZyUWl4TlFVRk5MSGRDUVVGVFR5eExRVUZVTEVWQlFXTXNTVUZCWkN4RFFVRk9MRWRCUVRSQ0xFZEJRVFZDTEVkQlFXdERTU3hMUVVGd1JEdEJRVU5FTzBGQlEwWTdPMEZCUlVRN1FVRkRRU3hOUVVGSlZDeFpRVUZLTEVWQlFXdENPMEZCUTJoQ0xGRkJRVWtzUTBGQlEwTXNZVUZCUkN4SlFVRnJRa29zTUVKQlFYUkNMRVZCUVd0RU8wRkJRMmhFUlN4NVFrRkJiVUpVTEdGQlFXRkhMRU5CUVdJc1IwRkJhVUlzUzBGQmNFTTdRVUZEUkRzN1FVRkZSRXNzYzBKQlFXdENMRTFCUVUwc2QwSkJRVk1zVjBGQlZDeEZRVUZ6UWl4SlFVRjBRaXhEUVVGT0xFZEJRVzlETEVkQlFYQkRMRWRCUVRCRFF5eGxRVUUxUkR0QlFVTkVPenRCUVVWRVRDeFZRVUZSYVVJc1MwRkJVaXhEUVVGalF5eFBRVUZrTEVsQlFYbENaQ3hqUVVGNlFqdEJRVU5FSWl3aVptbHNaU0k2SW5KbGJtUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lCbWNtOXRJQ2N1TDNSeVlXNXpabTl5YlMxd2NtOXdjeWM3WEc1cGJYQnZjblFnZG1Gc2RXVlVlWEJsY3lCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekp6dGNibWx0Y0c5eWRDQndjbVZtYVhobGNpQm1jbTl0SUNjdUwzQnlaV1pwZUdWeUp6dGNibWx0Y0c5eWRDQjdJR2x6VG5WdExDQnBjMDlpYWlCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtTnZibk4wSUZSU1FVNVRURUZVUlNBOUlDZDBjbUZ1YzJ4aGRHVW5PMXh1WTI5dWMzUWdkSEpoYm5Oc1lYUmxUV0Z3SUQwZ2UxeHVJQ0I0T2lCVVVrRk9VMHhCVkVVZ0t5QW5XQ2NzWEc0Z0lIazZJRlJTUVU1VFRFRlVSU0FySUNkWkp5eGNiaUFnZWpvZ1ZGSkJUbE5NUVZSRklDc2dKMW9uWEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmlkV2xzWkZOMGVXeGxVSEp2Y0dWeWRIbFRkSEpwYm1jb1pXeGxiV1Z1ZEN3Z2MzUmhkR1VzSUdOb1lXNW5aV1JXWVd4MVpYTXNJR1Z1WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVLU0I3WEc0Z0lHeGxkQ0J3Y205d1pYSjBlVk4wY21sdVp5QTlJQ2NuTzF4dUlDQnNaWFFnZEhKaGJuTm1iM0p0VTNSeWFXNW5JRDBnSnljN1hHNGdJR3hsZENCb1lYTlVjbUZ1YzJadmNtMGdQU0JtWVd4elpUdGNiaUFnYkdWMElIUnlZVzV6Wm05eWJVaGhjMW9nUFNCbVlXeHpaVHRjYmx4dUlDQXZMeUJHYVhKemRDQmphR1ZqYXlCcFppQjBhR1Z5WlNCaGNtVWdZVzU1SUdOb1lXNW5aV1FnZEhKaGJuTm1iM0p0SUhaaGJIVmxjMXh1SUNBdkx5QmhibVFnYVdZZ2RISjFaU0JoWkdRZ1lXeHNJSFJ5WVc1elptOXliU0IyWVd4MVpYTmNiaUFnWTI5dWMzUWdiblZ0UTJoaGJtZGxaRlpoYkhWbGN5QTlJR05vWVc1blpXUldZV3gxWlhNdWJHVnVaM1JvTzF4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlVOb1lXNW5aV1JXWVd4MVpYTTdJR2tyS3lrZ2UxeHVJQ0FnSUdOdmJuTjBJR3RsZVNBOUlHTm9ZVzVuWldSV1lXeDFaWE5iYVYwN1hHNWNiaUFnSUNBdkx5QkpaaUIwYUdseklHbHpJR0VnZEhKaGJuTm1iM0p0SUhCeWIzQmxjblI1TENCaFpHUWdZV3hzSUc5MGFHVnlJSFJ5WVc1elptOXliU0J3Y205d2MxeHVJQ0FnSUM4dklIUnZJR05vWVc1blpXUldZV3gxWlhNZ1lXNWtJSFJvWlc0Z1luSmxZV3RjYmlBZ0lDQnBaaUFvZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ2FHRnpWSEpoYm5ObWIzSnRJRDBnZEhKMVpUdGNibHh1SUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlITjBZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTFRY205d2MxdHJaWGxkSUNZbUlHTm9ZVzVuWldSV1lXeDFaWE11YVc1a1pYaFBaaWhyWlhrcElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR05vWVc1blpXUldZV3gxWlhNdWNIVnphQ2hyWlhrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHTnZibk4wSUhSdmRHRnNUblZ0UTJoaGJtZGxaRlpoYkhWbGN5QTlJR05vWVc1blpXUldZV3gxWlhNdWJHVnVaM1JvTzF4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJ2ZEdGc1RuVnRRMmhoYm1kbFpGWmhiSFZsY3pzZ2FTc3JLU0I3WEc0Z0lDQWdiR1YwSUd0bGVTQTlJR05vWVc1blpXUldZV3gxWlhOYmFWMDdYRzRnSUNBZ2JHVjBJSFpoYkhWbElEMGdjM1JoZEdWYmEyVjVYVHRjYmx4dUlDQWdJR2xtSUNoMGNtRnVjMnhoZEdWTllYQmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ2EyVjVJRDBnZEhKaGJuTnNZWFJsVFdGd1cydGxlVjA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnU1dZZ2RHaHBjeUJwY3lCaElHNTFiV0psY2lCdmNpQnZZbXBsWTNRZ1lXNWtJSGRsSUdoaGRtVWdabWxzZEdWeUxDQmhjSEJzZVNCbWFXeDBaWEpjYmlBZ0lDQnBaaUFvZG1Gc2RXVlVlWEJsYzF0clpYbGRJQ1ltSUNocGMwNTFiU2gyWVd4MVpTa2dmSHdnYVhOUFltb29kbUZzZFdVcEtTQW1KaUIyWVd4MVpWUjVjR1Z6VzJ0bGVWMHVkSEpoYm5ObWIzSnRLU0I3WEc0Z0lDQWdJQ0IyWVd4MVpTQTlJSFpoYkhWbFZIbHdaWE5iYTJWNVhTNTBjbUZ1YzJadmNtMG9kbUZzZFdVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMVFjbTl3YzF0clpYbGRLU0I3WEc0Z0lDQWdJQ0IwY21GdWMyWnZjbTFUZEhKcGJtY2dLejBnYTJWNUlDc2dKeWduSUNzZ2RtRnNkV1VnS3lBbktTQW5PMXh1SUNBZ0lDQWdkSEpoYm5ObWIzSnRTR0Z6V2lBOUlDaHJaWGtnUFQwOUlIUnlZVzV6YkdGMFpVMWhjQzU2S1NBL0lIUnlkV1VnT2lCMGNtRnVjMlp2Y20xSVlYTmFPMXh1WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIQnliM0JsY25SNVUzUnlhVzVuSUNzOUlDYzdKeUFySUhCeVpXWnBlR1Z5S0d0bGVTd2dkSEoxWlNrZ0t5QW5PaWNnS3lCMllXeDFaVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2THlCSlppQjNaU0JvWVhabElIUnlZVzV6Wm05eWJTQndjbTl3Y3l3Z1luVnBiR1FnWVNCMGNtRnVjMlp2Y20wZ2MzUnlhVzVuWEc0Z0lHbG1JQ2hvWVhOVWNtRnVjMlp2Y20wcElIdGNiaUFnSUNCcFppQW9JWFJ5WVc1elptOXliVWhoYzFvZ0ppWWdaVzVoWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNHBJSHRjYmlBZ0lDQWdJSFJ5WVc1elptOXliVk4wY21sdVp5QXJQU0IwY21GdWMyeGhkR1ZOWVhBdWVpQXJJQ2NvTUNrbk8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhCeWIzQmxjblI1VTNSeWFXNW5JQ3M5SUNjN0p5QXJJSEJ5WldacGVHVnlLQ2QwY21GdWMyWnZjbTBuTENCMGNuVmxLU0FySUNjNkp5QXJJSFJ5WVc1elptOXliVk4wY21sdVp6dGNiaUFnZlZ4dVhHNGdJR1ZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBclBTQndjbTl3WlhKMGVWTjBjbWx1Wnp0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL2Nzcy9yZW5kZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGF4ZXMgPSBbJ1gnLCAnWScsICdaJ107XG5cbnZhciB0cmFuc2Zvcm1Qcm9wcyA9IHtcbiAgeDogdHJ1ZSxcbiAgeTogdHJ1ZSxcbiAgejogdHJ1ZVxufTtcblxudmFyIFNDQUxFID0gJ3NjYWxlJztcbnZhciBST1RBVEUgPSAncm90YXRlJztcbnZhciBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xudmFyIFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaChmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gYXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWU7XG4gIH0pO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zZm9ybVByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12WTNOekwzUnlZVzV6Wm05eWJTMXdjbTl3Y3k1cWN5SmRMQ0p1WVcxbGN5STZXeUpoZUdWeklpd2lkSEpoYm5ObWIzSnRVSEp2Y0hNaUxDSjRJaXdpZVNJc0lub2lMQ0pUUTBGTVJTSXNJbEpQVkVGVVJTSXNJbFJTUVU1VFJrOVNUVjlRUlZKVFVFVkRWRWxXUlNJc0lsUkZVazFUSWl3aVptOXlSV0ZqYUNJc0luUmxjbTBpTENKaGVHbHpJbDBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4SlFVRk5RU3hQUVVGUExFTkJRVU1zUjBGQlJDeEZRVUZOTEVkQlFVNHNSVUZCVnl4SFFVRllMRU5CUVdJN08wRkJSVUVzU1VGQlNVTXNhVUpCUVdsQ08wRkJRMjVDUXl4TFFVRkhMRWxCUkdkQ08wRkJSVzVDUXl4TFFVRkhMRWxCUm1kQ08wRkJSMjVDUXl4TFFVRkhPMEZCU0dkQ0xFTkJRWEpDT3p0QlFVMUJMRWxCUVUxRExGRkJRVkVzVDBGQlpEdEJRVU5CTEVsQlFVMURMRk5CUVZNc1VVRkJaanRCUVVOQkxFbEJRVTFETEhkQ1FVRjNRaXh6UWtGQk9VSTdRVUZEUVN4SlFVRk5ReXhSUVVGUkxFTkJRVU1zVjBGQlJDeEZRVUZqU0N4TFFVRmtMRVZCUVhGQ1F5eE5RVUZ5UWl4RlFVRTJRaXhOUVVFM1FpeEZRVUZ4UTBNc2NVSkJRWEpETEVOQlFXUTdPMEZCUlVGT0xHVkJRV1ZMTEUxQlFXWXNTVUZCZVVKTUxHVkJRV1ZKTEV0QlFXWXNTVUZCZDBKS0xHVkJRV1ZOTEhGQ1FVRm1MRWxCUVhkRExFbEJRWHBHT3p0QlFVVkJReXhOUVVGTlF5eFBRVUZPTEVOQlFXTXNWVUZCUTBNc1NVRkJSRHRCUVVGQkxGTkJRVlZXTEV0QlFVdFRMRTlCUVV3c1EwRkJZU3hWUVVGRFJTeEpRVUZFTzBGQlFVRXNWMEZCVlZZc1pVRkJaVk1zVDBGQlQwTXNTVUZCZEVJc1NVRkJPRUlzU1VGQmVFTTdRVUZCUVN4SFFVRmlMRU5CUVZZN1FVRkJRU3hEUVVGa096dHJRa0ZGWlZZc1l5SXNJbVpwYkdVaU9pSjBjbUZ1YzJadmNtMHRjSEp2Y0hNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JoZUdWeklEMGdXeWRZSnl3Z0oxa25MQ0FuV2lkZE8xeHVYRzVzWlhRZ2RISmhibk5tYjNKdFVISnZjSE1nUFNCN1hHNGdJSGc2SUhSeWRXVXNYRzRnSUhrNklIUnlkV1VzWEc0Z0lIbzZJSFJ5ZFdWY2JuMDdYRzVjYm1OdmJuTjBJRk5EUVV4RklEMGdKM05qWVd4bEp6dGNibU52Ym5OMElGSlBWRUZVUlNBOUlDZHliM1JoZEdVbk8xeHVZMjl1YzNRZ1ZGSkJUbE5HVDFKTlgxQkZVbE5RUlVOVVNWWkZJRDBnSjNSeVlXNXpabTl5YlZCbGNuTndaV04wYVhabEp6dGNibU52Ym5OMElGUkZVazFUSUQwZ1d5ZDBjbUZ1YzJ4aGRHVW5MQ0JUUTBGTVJTd2dVazlVUVZSRkxDQW5jMnRsZHljc0lGUlNRVTVUUms5U1RWOVFSVkpUVUVWRFZFbFdSVjA3WEc1Y2JuUnlZVzV6Wm05eWJWQnliM0J6VzFKUFZFRlVSVjBnUFNCMGNtRnVjMlp2Y20xUWNtOXdjMXRUUTBGTVJWMGdQU0IwY21GdWMyWnZjbTFRY205d2MxdFVVa0ZPVTBaUFVrMWZVRVZTVTFCRlExUkpWa1ZkSUQwZ2RISjFaVHRjYmx4dVZFVlNUVk11Wm05eVJXRmphQ2dvZEdWeWJTa2dQVDRnWVhobGN5NW1iM0pGWVdOb0tDaGhlR2x6S1NBOVBpQjBjbUZ1YzJadmNtMVFjbTl3YzF0MFpYSnRJQ3NnWVhocGMxMGdQU0IwY25WbEtTazdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSFJ5WVc1elptOXliVkJ5YjNCek95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL3RyYW5zZm9ybS1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdmFsdWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL2luYy92YWx1ZS10eXBlcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIC8vIENvbG9yIHByb3BzXG4gIGNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYmFja2dyb3VuZENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgb3V0bGluZUNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgZmlsbDogX3ZhbHVlVHlwZXMuY29sb3IsXG4gIHN0cm9rZTogX3ZhbHVlVHlwZXMuY29sb3IsXG5cbiAgLy8gQm9yZGVyIHByb3BzXG4gIGJvcmRlckNvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyVG9wQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJSaWdodENvbG9yOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgYm9yZGVyQm90dG9tQ29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJMZWZ0Q29sb3I6IF92YWx1ZVR5cGVzLmNvbG9yLFxuICBib3JkZXJSYWRpdXM6IF92YWx1ZVR5cGVzLnB4LFxuXG4gIC8vIFBvc2l0aW9uaW5nXG4gIHdpZHRoOiBfdmFsdWVUeXBlcy5weCxcbiAgaGVpZ2h0OiBfdmFsdWVUeXBlcy5weCxcbiAgdG9wOiBfdmFsdWVUeXBlcy5weCxcbiAgbGVmdDogX3ZhbHVlVHlwZXMucHgsXG4gIGJvdHRvbTogX3ZhbHVlVHlwZXMucHgsXG4gIHJpZ2h0OiBfdmFsdWVUeXBlcy5weCxcblxuICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICByb3RhdGU6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVg6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVk6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHJvdGF0ZVo6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHNjYWxlOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVYOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVZOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2NhbGVaOiBfdmFsdWVUeXBlcy5zY2FsZSxcbiAgc2tld1g6IF92YWx1ZVR5cGVzLmRlZ3JlZXMsXG4gIHNrZXdZOiBfdmFsdWVUeXBlcy5kZWdyZWVzLFxuICBkaXN0YW5jZTogX3ZhbHVlVHlwZXMucHgsXG4gIHRyYW5zbGF0ZVg6IF92YWx1ZVR5cGVzLnB4LFxuICB0cmFuc2xhdGVZOiBfdmFsdWVUeXBlcy5weCxcbiAgdHJhbnNsYXRlWjogX3ZhbHVlVHlwZXMucHgsXG4gIHBlcnNwZWN0aXZlOiBfdmFsdWVUeXBlcy5weCxcbiAgb3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGFcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNaaGJIVmxMWFI1Y0dWekxtcHpJbDBzSW01aGJXVnpJanBiSW1OdmJHOXlJaXdpWW1GamEyZHliM1Z1WkVOdmJHOXlJaXdpYjNWMGJHbHVaVU52Ykc5eUlpd2labWxzYkNJc0luTjBjbTlyWlNJc0ltSnZjbVJsY2tOdmJHOXlJaXdpWW05eVpHVnlWRzl3UTI5c2IzSWlMQ0ppYjNKa1pYSlNhV2RvZEVOdmJHOXlJaXdpWW05eVpHVnlRbTkwZEc5dFEyOXNiM0lpTENKaWIzSmtaWEpNWldaMFEyOXNiM0lpTENKaWIzSmtaWEpTWVdScGRYTWlMQ0ozYVdSMGFDSXNJbWhsYVdkb2RDSXNJblJ2Y0NJc0lteGxablFpTENKaWIzUjBiMjBpTENKeWFXZG9kQ0lzSW5KdmRHRjBaU0lzSW5KdmRHRjBaVmdpTENKeWIzUmhkR1ZaSWl3aWNtOTBZWFJsV2lJc0luTmpZV3hsSWl3aWMyTmhiR1ZZSWl3aWMyTmhiR1ZaSWl3aWMyTmhiR1ZhSWl3aWMydGxkMWdpTENKemEyVjNXU0lzSW1ScGMzUmhibU5sSWl3aWRISmhibk5zWVhSbFdDSXNJblJ5WVc1emJHRjBaVmtpTENKMGNtRnVjMnhoZEdWYUlpd2ljR1Z5YzNCbFkzUnBkbVVpTENKdmNHRmphWFI1SWwwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPMnRDUVVObE8wRkJRMkk3UVVGRFFVRXNNRUpCUm1FN1FVRkhZa01zYjBOQlNHRTdRVUZKWWtNc2FVTkJTbUU3UVVGTFlrTXNlVUpCVEdFN1FVRk5Za01zTWtKQlRtRTdPMEZCVVdJN1FVRkRRVU1zWjBOQlZHRTdRVUZWWWtNc2JVTkJWbUU3UVVGWFlrTXNjVU5CV0dFN1FVRlpZa01zYzBOQldtRTdRVUZoWWtNc2IwTkJZbUU3UVVGallrTXNPRUpCWkdFN08wRkJaMEppTzBGQlEwRkRMSFZDUVdwQ1lUdEJRV3RDWWtNc2QwSkJiRUpoTzBGQmJVSmlReXh4UWtGdVFtRTdRVUZ2UW1KRExITkNRWEJDWVR0QlFYRkNZa01zZDBKQmNrSmhPMEZCYzBKaVF5eDFRa0YwUW1FN08wRkJkMEppTzBGQlEwRkRMRFpDUVhwQ1lUdEJRVEJDWWtNc09FSkJNVUpoTzBGQk1rSmlReXc0UWtFelFtRTdRVUUwUW1KRExEaENRVFZDWVR0QlFUWkNZa01zTUVKQk4wSmhPMEZCT0VKaVF5d3lRa0U1UW1FN1FVRXJRbUpETERKQ1FTOUNZVHRCUVdkRFlrTXNNa0pCYUVOaE8wRkJhVU5pUXl3MFFrRnFRMkU3UVVGclEySkRMRFJDUVd4RFlUdEJRVzFEWWtNc01FSkJia05oTzBGQmIwTmlReXcwUWtGd1EyRTdRVUZ4UTJKRExEUkNRWEpEWVR0QlFYTkRZa01zTkVKQmRFTmhPMEZCZFVOaVF5dzJRa0YyUTJFN1FVRjNRMkpETzBGQmVFTmhMRU1pTENKbWFXeGxJam9pZG1Gc2RXVXRkSGx3WlhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCaGJIQm9ZU3dnWTI5c2IzSXNJR1JsWjNKbFpYTXNJSE5qWVd4bExDQndlQ0I5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkyWVd4MVpTMTBlWEJsY3ljN0lGeHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0F2THlCRGIyeHZjaUJ3Y205d2MxeHVJQ0JqYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0poWTJ0bmNtOTFibVJEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJRzkxZEd4cGJtVkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHWnBiR3c2SUdOdmJHOXlMRnh1SUNCemRISnZhMlU2SUdOdmJHOXlMRnh1WEc0Z0lDOHZJRUp2Y21SbGNpQndjbTl3YzF4dUlDQmliM0prWlhKRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdKdmNtUmxjbFJ2Y0VOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnWW05eVpHVnlVbWxuYUhSRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdKdmNtUmxja0p2ZEhSdmJVTnZiRzl5T2lCamIyeHZjaXhjYmlBZ1ltOXlaR1Z5VEdWbWRFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ1ltOXlaR1Z5VW1Ga2FYVnpPaUJ3ZUN4Y2JseHVJQ0F2THlCUWIzTnBkR2x2Ym1sdVoxeHVJQ0IzYVdSMGFEb2djSGdzWEc0Z0lHaGxhV2RvZERvZ2NIZ3NJQ0JjYmlBZ2RHOXdPaUJ3ZUN4Y2JpQWdiR1ZtZERvZ2NIZ3NYRzRnSUdKdmRIUnZiVG9nY0hnc1hHNGdJSEpwWjJoME9pQndlQ3hjYmx4dUlDQXZMeUJVY21GdWMyWnZjbTBnY0hKdmNHVnlkR2xsYzF4dUlDQnliM1JoZEdVNklHUmxaM0psWlhNc1hHNGdJSEp2ZEdGMFpWZzZJR1JsWjNKbFpYTXNYRzRnSUhKdmRHRjBaVms2SUdSbFozSmxaWE1zWEc0Z0lISnZkR0YwWlZvNklHUmxaM0psWlhNc1hHNGdJSE5qWVd4bE9pQnpZMkZzWlN4Y2JpQWdjMk5oYkdWWU9pQnpZMkZzWlN4Y2JpQWdjMk5oYkdWWk9pQnpZMkZzWlN4Y2JpQWdjMk5oYkdWYU9pQnpZMkZzWlN4Y2JpQWdjMnRsZDFnNklHUmxaM0psWlhNc1hHNGdJSE5yWlhkWk9pQmtaV2R5WldWekxGeHVJQ0JrYVhOMFlXNWpaVG9nY0hnc1hHNGdJSFJ5WVc1emJHRjBaVmc2SUhCNExGeHVJQ0IwY21GdWMyeGhkR1ZaT2lCd2VDeGNiaUFnZEhKaGJuTnNZWFJsV2pvZ2NIZ3NYRzRnSUhCbGNuTndaV04wYVhabE9pQndlQ3hjYmlBZ2IzQmhZMmwwZVRvZ1lXeHdhR0ZjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXJlcnMvY3NzL3ZhbHVlLXR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgY2FtZWxDYWNoZSA9IHt9O1xudmFyIGRhc2hDYWNoZSA9IHt9O1xudmFyIHByZWZpeGVzID0gWydXZWJraXQnLCAnTW96JywgJ08nLCAnbXMnLCAnJ107XG52YXIgbnVtUHJlZml4ZXMgPSBwcmVmaXhlcy5sZW5ndGg7XG52YXIgdGVzdEVsZW1lbnQgPSB2b2lkIDA7XG5cbi8qXG4gIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgXG4gIEBwYXJhbSBbc3RyaW5nXTogU3R5bGUgcHJvcGVydHlcbiAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG52YXIgdGVzdFByZWZpeCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgdmFyIG5vUHJlZml4ID0gcHJlZml4ID09PSAnJztcbiAgICB2YXIgcHJlZml4ZWRQcm9wZXJ0eU5hbWUgPSBub1ByZWZpeCA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgIGlmIChwcmVmaXhlZFByb3BlcnR5TmFtZSBpbiB0ZXN0RWxlbWVudC5zdHlsZSkge1xuICAgICAgY2FtZWxDYWNoZVtrZXldID0gcHJlZml4ZWRQcm9wZXJ0eU5hbWU7XG4gICAgICBkYXNoQ2FjaGVba2V5XSA9ICcnICsgKG5vUHJlZml4ID8gJycgOiAnLScpICsgKDAsIF91dGlscy5jYW1lbFRvRGFzaCkocHJlZml4ZWRQcm9wZXJ0eU5hbWUpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGtleSwgYXNEYXNoQ2FzZSkge1xuICB2YXIgY2FjaGUgPSBhc0Rhc2hDYXNlID8gZGFzaENhY2hlIDogY2FtZWxDYWNoZTtcblxuICBpZiAoIWNhY2hlW2tleV0pIHtcbiAgICB0ZXN0UHJlZml4KGtleSk7XG4gIH1cblxuICByZXR1cm4gY2FjaGVba2V5XTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZZM056TDNCeVpXWnBlR1Z5TG1weklsMHNJbTVoYldWeklqcGJJbU5oYldWc1EyRmphR1VpTENKa1lYTm9RMkZqYUdVaUxDSndjbVZtYVhobGN5SXNJbTUxYlZCeVpXWnBlR1Z6SWl3aWJHVnVaM1JvSWl3aWRHVnpkRVZzWlcxbGJuUWlMQ0owWlhOMFVISmxabWw0SWl3aWEyVjVJaXdpWkc5amRXMWxiblFpTENKamNtVmhkR1ZGYkdWdFpXNTBJaXdpYVNJc0luQnlaV1pwZUNJc0ltNXZVSEpsWm1sNElpd2ljSEpsWm1sNFpXUlFjbTl3WlhKMGVVNWhiV1VpTENKamFHRnlRWFFpTENKMGIxVndjR1Z5UTJGelpTSXNJbk5zYVdObElpd2ljM1I1YkdVaUxDSmhjMFJoYzJoRFlYTmxJaXdpWTJGamFHVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN1FVRkZRU3hKUVVGTlFTeGhRVUZoTEVWQlFXNUNPMEZCUTBFc1NVRkJUVU1zV1VGQldTeEZRVUZzUWp0QlFVTkJMRWxCUVUxRExGZEJRVmNzUTBGQlF5eFJRVUZFTEVWQlFWVXNTMEZCVml4RlFVRm5RaXhIUVVGb1FpeEZRVUZ2UWl4SlFVRndRaXhGUVVFd1FpeEZRVUV4UWl4RFFVRnFRanRCUVVOQkxFbEJRVTFETEdOQlFXTkVMRk5CUVZORkxFMUJRVGRDTzBGQlEwRXNTVUZCU1VNc2IwSkJRVW83TzBGQlJVRTdPenM3T3p0QlFVMUJMRWxCUVUxRExHRkJRV0VzVlVGQlEwTXNSMEZCUkN4RlFVRlRPMEZCUXpGQ1JpeG5Ra0ZCWTBFc1pVRkJaVWNzVTBGQlUwTXNZVUZCVkN4RFFVRjFRaXhMUVVGMlFpeERRVUUzUWpzN1FVRkZRU3hQUVVGTExFbEJRVWxETEVsQlFVa3NRMEZCWWl4RlFVRm5Ra0VzU1VGQlNWQXNWMEZCY0VJc1JVRkJhVU5QTEVkQlFXcERMRVZCUVhORE8wRkJRM0JETEZGQlFVMURMRk5CUVZOVUxGTkJRVk5STEVOQlFWUXNRMEZCWmp0QlFVTkJMRkZCUVUxRkxGZEJRVmxFTEZkQlFWY3NSVUZCTjBJN1FVRkRRU3hSUVVGTlJTeDFRa0ZCZFVKRUxGZEJRVmRNTEVkQlFWZ3NSMEZCYVVKSkxGTkJRVk5LTEVsQlFVbFBMRTFCUVVvc1EwRkJWeXhEUVVGWUxFVkJRV05ETEZkQlFXUXNSVUZCVkN4SFFVRjFRMUlzU1VGQlNWTXNTMEZCU2l4RFFVRlZMRU5CUVZZc1EwRkJja1k3TzBGQlJVRXNVVUZCU1Vnc2QwSkJRWGRDVWl4WlFVRlpXU3hMUVVGNFF5eEZRVUVyUXp0QlFVTTNRMnBDTEdsQ1FVRlhUeXhIUVVGWUxFbEJRV3RDVFN4dlFrRkJiRUk3UVVGRFFWb3NaMEpCUVZWTkxFZEJRVllzVlVGQmNVSkxMRmRCUVZjc1JVRkJXQ3hIUVVGblFpeEhRVUZ5UXl4SlFVRTBReXgzUWtGQldVTXNiMEpCUVZvc1EwRkJOVU03UVVGRFJEdEJRVU5HTzBGQlEwWXNRMEZpUkRzN2EwSkJaV1VzVlVGQlEwNHNSMEZCUkN4RlFVRk5WeXhWUVVGT0xFVkJRWEZDTzBGQlEyeERMRTFCUVUxRExGRkJRVkZFTEdGQlFXRnFRaXhUUVVGaUxFZEJRWGxDUkN4VlFVRjJRenM3UVVGRlFTeE5RVUZKTEVOQlFVTnRRaXhOUVVGTldpeEhRVUZPTEVOQlFVd3NSVUZCYVVJN1FVRkRaa1FzWlVGQlYwTXNSMEZCV0R0QlFVTkVPenRCUVVWRUxGTkJRVTlaTEUxQlFVMWFMRWRCUVU0c1EwRkJVRHRCUVVORUxFTWlMQ0ptYVd4bElqb2ljSEpsWm1sNFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmpZVzFsYkZSdlJHRnphQ0I5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJR05oYldWc1EyRmphR1VnUFNCN2ZUdGNibU52Ym5OMElHUmhjMmhEWVdOb1pTQTlJSHQ5TzF4dVkyOXVjM1FnY0hKbFptbDRaWE1nUFNCYkoxZGxZbXRwZENjc0owMXZlaWNzSjA4bkxDZHRjeWNzSUNjblhUdGNibU52Ym5OMElHNTFiVkJ5WldacGVHVnpJRDBnY0hKbFptbDRaWE11YkdWdVozUm9PMXh1YkdWMElIUmxjM1JGYkdWdFpXNTBPMXh1WEc0dktseHVJQ0JVWlhOMElITjBlV3hsSUhCeWIzQmxjblI1SUdadmNpQndjbVZtYVhobFpDQjJaWEp6YVc5dVhHNGdJRnh1SUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUZOMGVXeGxJSEJ5YjNCbGNuUjVYRzRnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTA2SUVOaFkyaGxaQ0J3Y205d1pYSjBlU0J1WVcxbFhHNHFMMXh1WTI5dWMzUWdkR1Z6ZEZCeVpXWnBlQ0E5SUNoclpYa3BJRDArSUh0Y2JpQWdkR1Z6ZEVWc1pXMWxiblFnUFNCMFpYTjBSV3hsYldWdWRDQjhmQ0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZGthWFluS1R0Y2JseHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJWQnlaV1pwZUdWek95QnBLeXNwSUh0Y2JpQWdJQ0JqYjI1emRDQndjbVZtYVhnZ1BTQndjbVZtYVhobGMxdHBYVHRjYmlBZ0lDQmpiMjV6ZENCdWIxQnlaV1pwZUNBOUlDaHdjbVZtYVhnZ1BUMDlJQ2NuS1R0Y2JpQWdJQ0JqYjI1emRDQndjbVZtYVhobFpGQnliM0JsY25SNVRtRnRaU0E5SUc1dlVISmxabWw0SUQ4Z2EyVjVJRG9nY0hKbFptbDRJQ3NnYTJWNUxtTm9ZWEpCZENnd0tTNTBiMVZ3Y0dWeVEyRnpaU2dwSUNzZ2EyVjVMbk5zYVdObEtERXBPMXh1WEc0Z0lDQWdhV1lnS0hCeVpXWnBlR1ZrVUhKdmNHVnlkSGxPWVcxbElHbHVJSFJsYzNSRmJHVnRaVzUwTG5OMGVXeGxLU0I3WEc0Z0lDQWdJQ0JqWVcxbGJFTmhZMmhsVzJ0bGVWMGdQU0J3Y21WbWFYaGxaRkJ5YjNCbGNuUjVUbUZ0WlR0Y2JpQWdJQ0FnSUdSaGMyaERZV05vWlZ0clpYbGRJRDBnWUNSN0tHNXZVSEpsWm1sNElEOGdKeWNnT2lBbkxTY3BmU1I3WTJGdFpXeFViMFJoYzJnb2NISmxabWw0WldSUWNtOXdaWEowZVU1aGJXVXBmV0E3WEc0Z0lDQWdmVnh1SUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvYTJWNUxDQmhjMFJoYzJoRFlYTmxLU0E5UGlCN1hHNGdJR052Ym5OMElHTmhZMmhsSUQwZ1lYTkVZWE5vUTJGelpTQS9JR1JoYzJoRFlXTm9aU0E2SUdOaGJXVnNRMkZqYUdVN1hHNWNiaUFnYVdZZ0tDRmpZV05vWlZ0clpYbGRLU0I3WEc0Z0lDQWdkR1Z6ZEZCeVpXWnBlQ2hyWlhrcE8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlHTmhZMmhsVzJ0bGVWMDdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9jc3MvcHJlZml4ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgZGF0YSkge1xuICB2YXIgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxO1xuICB2YXIgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDE7XG4gIHZhciB0cmFuc2Zvcm1PcmlnaW5YID0gZGF0YS53aWR0aCAqICgoc3RhdGUub3JpZ2luWCB8fCA1MCkgLyAxMDApICsgZGF0YS54O1xuICB2YXIgdHJhbnNmb3JtT3JpZ2luWSA9IGRhdGEuaGVpZ2h0ICogKChzdGF0ZS5vcmlnaW5ZIHx8IDUwKSAvIDEwMCkgKyBkYXRhLnk7XG4gIHZhciBzY2FsZVRyYW5zZm9ybVggPSAtdHJhbnNmb3JtT3JpZ2luWCAqIChzY2FsZSAqIDEpO1xuICB2YXIgc2NhbGVUcmFuc2Zvcm1ZID0gLXRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSk7XG4gIHZhciBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlO1xuICB2YXIgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVk7XG4gIHZhciB0cmFuc2Zvcm0gPSB7XG4gICAgdHJhbnNsYXRlOiAndHJhbnNsYXRlKCcgKyBzdGF0ZS50cmFuc2xhdGVYICsgJywgJyArIHN0YXRlLnRyYW5zbGF0ZVkgKyAnKSAnLFxuICAgIHNjYWxlOiAndHJhbnNsYXRlKCcgKyBzY2FsZVRyYW5zZm9ybVggKyAnLCAnICsgc2NhbGVUcmFuc2Zvcm1ZICsgJykgc2NhbGUoJyArIHNjYWxlICsgJywgJyArIHNjYWxlWSArICcpIHRyYW5zbGF0ZSgnICsgc2NhbGVSZXBsYWNlWCArICcsICcgKyBzY2FsZVJlcGxhY2VZICsgJykgJyxcbiAgICByb3RhdGU6ICdyb3RhdGUoJyArIHN0YXRlLnJvdGF0ZSArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5YICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblkgKyAnKSAnLFxuICAgIHNrZXdYOiAnc2tld1goJyArIHN0YXRlLnNrZXdYICsgJykgJyxcbiAgICBza2V3WTogJ3NrZXdZKCcgKyBzdGF0ZS5za2V3WSArICcpICdcbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wc1soMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgZm9yICh2YXIgX2tleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IF9rZXkgPT09ICdzY2FsZScgPyAnMScgOiAnMCc7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB0cmFuc2Zvcm1bX2tleV0ucmVwbGFjZSgvdW5kZWZpbmVkL2csIGRlZmF1bHRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwySjFhV3hrTG1weklsMHNJbTVoYldWeklqcGJJbUoxYVd4a0lpd2lXa1ZTVDE5T1QxUmZXa1ZTVHlJc0luTjBZWFJsSWl3aVpHRjBZU0lzSW1oaGMxUnlZVzV6Wm05eWJTSXNJbkJ5YjNCeklpd2ljMk5oYkdVaUxDSjFibVJsWm1sdVpXUWlMQ0p6WTJGc1pWZ2lMQ0p6WTJGc1pWa2lMQ0owY21GdWMyWnZjbTFQY21sbmFXNVlJaXdpZDJsa2RHZ2lMQ0p2Y21sbmFXNVlJaXdpZUNJc0luUnlZVzV6Wm05eWJVOXlhV2RwYmxraUxDSm9aV2xuYUhRaUxDSnZjbWxuYVc1Wklpd2llU0lzSW5OallXeGxWSEpoYm5ObWIzSnRXQ0lzSW5OallXeGxWSEpoYm5ObWIzSnRXU0lzSW5OallXeGxVbVZ3YkdGalpWZ2lMQ0p6WTJGc1pWSmxjR3hoWTJWWklpd2lkSEpoYm5ObWIzSnRJaXdpZEhKaGJuTnNZWFJsSWl3aWRISmhibk5zWVhSbFdDSXNJblJ5WVc1emJHRjBaVmtpTENKeWIzUmhkR1VpTENKemEyVjNXQ0lzSW5OclpYZFpJaXdpYTJWNUlpd2lhR0Z6VDNkdVVISnZjR1Z5ZEhraUxDSmtaV1poZFd4MFZtRnNkV1VpTENKeVpYQnNZV05sSWwwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlMzZENRU3hMT3p0QlFVeDRRanM3UVVGRFFUczdPenM3TzBGQlJVRXNTVUZCVFVNc1owSkJRV2RDTEUxQlFYUkNPenRCUVVWbExGTkJRVk5FTEV0QlFWUXNRMEZCWlVVc1MwRkJaaXhGUVVGelFrTXNTVUZCZEVJc1JVRkJORUk3UVVGRGVrTXNUVUZCU1VNc1pVRkJaU3hMUVVGdVFqdEJRVU5CTEUxQlFVMURMRkZCUVZFc1JVRkJaRHRCUVVOQkxFMUJRVTFETEZGQlFWRktMRTFCUVUxSkxFdEJRVTRzUzBGQlowSkRMRk5CUVdoQ0xFZEJRVFJDVEN4TlFVRk5TU3hMUVVGT0xFbEJRV1ZNTEdGQlFUTkRMRWRCUVRKRVF5eE5RVUZOVFN4TlFVRk9MRWxCUVdkQ0xFTkJRWHBHTzBGQlEwRXNUVUZCVFVNc1UwRkJVMUFzVFVGQlRVOHNUVUZCVGl4TFFVRnBRa1lzVTBGQmFrSXNSMEZCTmtKTUxFMUJRVTFQTEUxQlFVNHNTVUZCWjBKU0xHRkJRVGRETEVkQlFUWkVTeXhUUVVGVExFTkJRWEpHTzBGQlEwRXNUVUZCVFVrc2JVSkJRVzFDVUN4TFFVRkxVU3hMUVVGTUxFbEJRV01zUTBGQlExUXNUVUZCVFZVc1QwRkJUaXhKUVVGcFFpeEZRVUZzUWl4SlFVRjNRaXhIUVVGMFF5eEpRVUUyUTFRc1MwRkJTMVVzUTBGQk0wVTdRVUZEUVN4TlFVRk5ReXh0UWtGQmJVSllMRXRCUVV0WkxFMUJRVXdzU1VGQlpTeERRVUZEWWl4TlFVRk5ZeXhQUVVGT0xFbEJRV2xDTEVWQlFXeENMRWxCUVhkQ0xFZEJRWFpETEVsQlFUaERZaXhMUVVGTFl5eERRVUUxUlR0QlFVTkJMRTFCUVUxRExHdENRVUZyUWl4RFFVRkZVaXhuUWtGQlJpeEpRVUZ6UWtvc1VVRkJVU3hEUVVFNVFpeERRVUY0UWp0QlFVTkJMRTFCUVUxaExHdENRVUZyUWl4RFFVRkZUQ3huUWtGQlJpeEpRVUZ6UWt3c1UwRkJVeXhEUVVFdlFpeERRVUY0UWp0QlFVTkJMRTFCUVUxWExHZENRVUZuUWxZc2JVSkJRVzFDU2l4TFFVRjZRenRCUVVOQkxFMUJRVTFsTEdkQ1FVRm5RbEFzYlVKQlFXMUNUQ3hOUVVGNlF6dEJRVU5CTEUxQlFVMWhMRmxCUVZrN1FVRkRhRUpETERoQ1FVRjNRbkpDTEUxQlFVMXpRaXhWUVVFNVFpeFZRVUUyUTNSQ0xFMUJRVTExUWl4VlFVRnVSQ3hQUVVSblFqdEJRVVZvUW01Q0xEQkNRVUZ2UWxrc1pVRkJjRUlzVlVGQmQwTkRMR1ZCUVhoRExHZENRVUZyUldJc1MwRkJiRVVzVlVGQk5FVkhMRTFCUVRWRkxHOUNRVUZwUjFjc1lVRkJha2NzVlVGQmJVaERMR0ZCUVc1SUxFOUJSbWRDTzBGQlIyaENTeXgzUWtGQmEwSjRRaXhOUVVGTmQwSXNUVUZCZUVJc1ZVRkJiVU5vUWl4blFrRkJia01zVlVGQmQwUkpMR2RDUVVGNFJDeFBRVWhuUWp0QlFVbG9RbUVzYzBKQlFXZENla0lzVFVGQlRYbENMRXRCUVhSQ0xFOUJTbWRDTzBGQlMyaENReXh6UWtGQlowSXhRaXhOUVVGTk1FSXNTMEZCZEVJN1FVRk1aMElzUjBGQmJFSTdPMEZCVVVFc1QwRkJTeXhKUVVGSlF5eEhRVUZVTEVsQlFXZENNMElzUzBGQmFFSXNSVUZCZFVJN1FVRkRja0lzVVVGQlNVRXNUVUZCVFRSQ0xHTkJRVTRzUTBGQmNVSkVMRWRCUVhKQ0xFTkJRVW9zUlVGQkswSTdRVUZETjBJc1ZVRkJTU3g1UWtGQlpVRXNSMEZCWml4RFFVRktMRVZCUVhsQ08wRkJRM1pDZWtJc2RVSkJRV1VzU1VGQlpqdEJRVU5FTEU5QlJrUXNUVUZGVHp0QlFVTk1ReXhqUVVGTkxIZENRVUZaZDBJc1IwRkJXaXhEUVVGT0xFbEJRVEJDTTBJc1RVRkJUVEpDTEVkQlFVNHNRMEZCTVVJN1FVRkRSRHRCUVVOR08wRkJRMFk3TzBGQlJVUXNUVUZCU1hwQ0xGbEJRVW9zUlVGQmEwSTdRVUZEYUVKRExGVkJRVTFwUWl4VFFVRk9MRWRCUVd0Q0xFVkJRV3hDT3p0QlFVVkJMRk5CUVVzc1NVRkJTVThzU1VGQlZDeEpRVUZuUWxBc1UwRkJhRUlzUlVGQk1rSTdRVUZEZWtJc1ZVRkJTVUVzVlVGQlZWRXNZMEZCVml4RFFVRjVRa1FzU1VGQmVrSXNRMEZCU2l4RlFVRnRRenRCUVVOcVF5eFpRVUZOUlN4bFFVRm5Ra1lzVTBGQlVTeFBRVUZVTEVkQlFXOUNMRWRCUVhCQ0xFZEJRVEJDTEVkQlFTOURPMEZCUTBGNFFpeGpRVUZOYVVJc1UwRkJUaXhKUVVGdFFrRXNWVUZCVlU4c1NVRkJWaXhGUVVGbFJ5eFBRVUZtTEVOQlFYVkNMRmxCUVhaQ0xFVkJRWEZEUkN4WlFVRnlReXhEUVVGdVFqdEJRVU5FTzBGQlEwWTdRVUZEUmpzN1FVRkZSQ3hUUVVGUE1VSXNTMEZCVUR0QlFVTkVJaXdpWm1sc1pTSTZJbUoxYVd4a0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kyRnRaV3hVYjBSaGMyZ2dmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElIUnlZVzV6Wm05eWJWQnliM0J6SUdaeWIyMGdKeTR1TDJOemN5OTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVYRzVqYjI1emRDQmFSVkpQWDA1UFZGOWFSVkpQSUQwZ01DNHdNREF4TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCaWRXbHNaQ2h6ZEdGMFpTd2daR0YwWVNrZ2UxeHVJQ0JzWlhRZ2FHRnpWSEpoYm5ObWIzSnRJRDBnWm1Gc2MyVTdYRzRnSUdOdmJuTjBJSEJ5YjNCeklEMGdlMzA3WEc0Z0lHTnZibk4wSUhOallXeGxJRDBnYzNSaGRHVXVjMk5oYkdVZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhOMFlYUmxMbk5qWVd4bElIeDhJRnBGVWs5ZlRrOVVYMXBGVWs4Z09pQnpkR0YwWlM1elkyRnNaVmdnZkh3Z01UdGNiaUFnWTI5dWMzUWdjMk5oYkdWWklEMGdjM1JoZEdVdWMyTmhiR1ZaSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJ6ZEdGMFpTNXpZMkZzWlZrZ2ZId2dXa1ZTVDE5T1QxUmZXa1ZTVHlBNklITmpZV3hsSUh4OElERTdYRzRnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dQU0JrWVhSaExuZHBaSFJvSUNvZ0tDaHpkR0YwWlM1dmNtbG5hVzVZSUh4OElEVXdLU0F2SURFd01Da2dLeUJrWVhSaExuZzdYRzRnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsa2dQU0JrWVhSaExtaGxhV2RvZENBcUlDZ29jM1JoZEdVdWIzSnBaMmx1V1NCOGZDQTFNQ2tnTHlBeE1EQXBJQ3NnWkdGMFlTNTVPMXh1SUNCamIyNXpkQ0J6WTJGc1pWUnlZVzV6Wm05eWJWZ2dQU0F0SUhSeVlXNXpabTl5YlU5eWFXZHBibGdnS2lBb2MyTmhiR1VnS2lBeEtUdGNiaUFnWTI5dWMzUWdjMk5oYkdWVWNtRnVjMlp2Y20xWklEMGdMU0IwY21GdWMyWnZjbTFQY21sbmFXNVpJQ29nS0hOallXeGxXU0FxSURFcE8xeHVJQ0JqYjI1emRDQnpZMkZzWlZKbGNHeGhZMlZZSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V0NBdklITmpZV3hsTzF4dUlDQmpiMjV6ZENCelkyRnNaVkpsY0d4aFkyVlpJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0F2SUhOallXeGxXVHRjYmlBZ1kyOXVjM1FnZEhKaGJuTm1iM0p0SUQwZ2UxeHVJQ0FnSUhSeVlXNXpiR0YwWlRvZ1lIUnlZVzV6YkdGMFpTZ2tlM04wWVhSbExuUnlZVzV6YkdGMFpWaDlMQ0FrZTNOMFlYUmxMblJ5WVc1emJHRjBaVmw5S1NCZ0xGeHVJQ0FnSUhOallXeGxPaUJnZEhKaGJuTnNZWFJsS0NSN2MyTmhiR1ZVY21GdWMyWnZjbTFZZlN3Z0pIdHpZMkZzWlZSeVlXNXpabTl5YlZsOUtTQnpZMkZzWlNna2UzTmpZV3hsZlN3Z0pIdHpZMkZzWlZsOUtTQjBjbUZ1YzJ4aGRHVW9KSHR6WTJGc1pWSmxjR3hoWTJWWWZTd2dKSHR6WTJGc1pWSmxjR3hoWTJWWmZTa2dZQ3hjYmlBZ0lDQnliM1JoZEdVNklHQnliM1JoZEdVb0pIdHpkR0YwWlM1eWIzUmhkR1Y5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxoOUxDQWtlM1J5WVc1elptOXliVTl5YVdkcGJsbDlLU0JnTEZ4dUlDQWdJSE5yWlhkWU9pQmdjMnRsZDFnb0pIdHpkR0YwWlM1emEyVjNXSDBwSUdBc1hHNGdJQ0FnYzJ0bGQxazZJR0J6YTJWM1dTZ2tlM04wWVhSbExuTnJaWGRaZlNrZ1lGeHVJQ0I5TzF4dVhHNGdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQnpkR0YwWlNrZ2UxeHVJQ0FnSUdsbUlDaHpkR0YwWlM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQnBaaUFvZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ0lDQm9ZWE5VY21GdWMyWnZjbTBnUFNCMGNuVmxPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjSEp2Y0hOYlkyRnRaV3hVYjBSaGMyZ29hMlY1S1YwZ1BTQnpkR0YwWlZ0clpYbGRPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR2xtSUNob1lYTlVjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQndjbTl3Y3k1MGNtRnVjMlp2Y20wZ1BTQW5KenRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQWdJR2xtSUNoMGNtRnVjMlp2Y20wdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmtaV1poZFd4MFZtRnNkV1VnUFNBb2EyVjVJRDA5UFNBbmMyTmhiR1VuS1NBL0lDY3hKeUE2SUNjd0p6dGNiaUFnSUNBZ0lDQWdjSEp2Y0hNdWRISmhibk5tYjNKdElDczlJSFJ5WVc1elptOXliVnRyWlhsZExuSmxjR3hoWTJVb0wzVnVaR1ZtYVc1bFpDOW5MQ0JrWldaaGRXeDBWbUZzZFdVcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCd2NtOXdjenRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlcmVycy9zdmcvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3ZhbHVlVHlwZXMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdmFsdWUtdHlwZXMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBmaWxsOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgc3Ryb2tlOiBfdmFsdWVUeXBlcy5jb2xvcixcbiAgc2NhbGU6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVg6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBzY2FsZVk6IF92YWx1ZVR5cGVzLnNjYWxlLFxuICBkOiBfdmFsdWVUeXBlcy5jb21wbGV4LFxuICBwb2ludHM6IF92YWx1ZVR5cGVzLmNvbXBsZXgsXG4gIG9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhLFxuICBmaWxsT3BhY2l0eTogX3ZhbHVlVHlwZXMuYWxwaGEsXG4gIHN0cm9rZU9wYWNpdHk6IF92YWx1ZVR5cGVzLmFscGhhXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSmxjbk12YzNabkwzWmhiSFZsTFhSNWNHVnpMbXB6SWwwc0ltNWhiV1Z6SWpwYkltWnBiR3dpTENKemRISnZhMlVpTENKelkyRnNaU0lzSW5OallXeGxXQ0lzSW5OallXeGxXU0lzSW1RaUxDSndiMmx1ZEhNaUxDSnZjR0ZqYVhSNUlpd2labWxzYkU5d1lXTnBkSGtpTENKemRISnZhMlZQY0dGamFYUjVJbDBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN08ydENRVVZsTzBGQlEySkJMSGxDUVVSaE8wRkJSV0pETERKQ1FVWmhPMEZCUjJKRExEQkNRVWhoTzBGQlNXSkRMREpDUVVwaE8wRkJTMkpETERKQ1FVeGhPMEZCVFdKRExIZENRVTVoTzBGQlQySkRMRFpDUVZCaE8wRkJVV0pETERSQ1FWSmhPMEZCVTJKRExHZERRVlJoTzBGQlZXSkRPMEZCVm1Fc1F5SXNJbVpwYkdVaU9pSjJZV3gxWlMxMGVYQmxjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR0ZzY0doaExDQmpiMnh2Y2l3Z1kyOXRjR3hsZUN3Z2MyTmhiR1VnZlNCbWNtOXRJQ2N1TGk4dUxpOXBibU12ZG1Gc2RXVXRkSGx3WlhNbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUdacGJHdzZJR052Ykc5eUxGeHVJQ0J6ZEhKdmEyVTZJR052Ykc5eUxGeHVJQ0J6WTJGc1pUb2djMk5oYkdVc1hHNGdJSE5qWVd4bFdEb2djMk5oYkdVc1hHNGdJSE5qWVd4bFdUb2djMk5oYkdVc1hHNGdJR1E2SUdOdmJYQnNaWGdzWEc0Z0lIQnZhVzUwY3pvZ1kyOXRjR3hsZUN4Y2JpQWdiM0JoWTJsMGVUb2dZV3h3YUdFc1hHNGdJR1pwYkd4UGNHRmphWFI1T2lCaGJIQm9ZU3hjYmlBZ2MzUnliMnRsVDNCaFkybDBlVG9nWVd4d2FHRmNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy92YWx1ZS10eXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50LCBsZW5ndGgpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDAgKiBsZW5ndGggKyAncHgnO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBsZW5ndGgpIHtcbiAgdmFyIHN0eWxlcyA9IHt9O1xuICB2YXIgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgIGxlbmd0aDogMCxcbiAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gIH07XG4gIHZhciBoYXNEYXNoQXJyYXkgPSBmYWxzZTtcblxuICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFyIHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhKbGNuTXZjM1puTFhCaGRHZ3ZZblZwYkdRdWFuTWlYU3dpYm1GdFpYTWlPbHNpY0dWeVkyVnVkRlJ2VUdsNFpXeHpJaXdpY0dWeVkyVnVkQ0lzSW14bGJtZDBhQ0lzSW5CaGNuTmxSbXh2WVhRaUxDSnpkR0YwWlNJc0luTjBlV3hsY3lJc0ltUmhjMmhCY25KaGVWTjBlV3hsY3lJc0luTndZV05wYm1jaUxDSm9ZWE5FWVhOb1FYSnlZWGtpTENKclpYa2lMQ0pvWVhOUGQyNVFjbTl3WlhKMGVTSXNJblpoYkhWbElsMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRVHM3T3pzN08wRkJUVUVzU1VGQlRVRXNhMEpCUVd0Q0xGVkJRVU5ETEU5QlFVUXNSVUZCVlVNc1RVRkJWanRCUVVGQkxGTkJRWE5DUXl4WFFVRlhSaXhQUVVGWUxFbEJRWE5DTEVkQlFYWkNMRWRCUVRoQ1F5eE5RVUU1UWl4SFFVRjFReXhKUVVFMVJEdEJRVUZCTEVOQlFYaENPenRyUWtGRlpTeFZRVUZEUlN4TFFVRkVMRVZCUVZGR0xFMUJRVklzUlVGQmJVSTdRVUZEYUVNc1RVRkJUVWNzVTBGQlV5eEZRVUZtTzBGQlEwRXNUVUZCVFVNc2EwSkJRV3RDTzBGQlEzUkNTaXhaUVVGUkxFTkJSR003UVVGRmRFSkxMR0ZCUVZOTUxGTkJRVk03UVVGR1NTeEhRVUY0UWp0QlFVbEJMRTFCUVVsTkxHVkJRV1VzUzBGQmJrSTdPMEZCUlVFc1QwRkJTeXhKUVVGSlF5eEhRVUZVTEVsQlFXZENUQ3hMUVVGb1FpeEZRVUYxUWp0QlFVTnlRaXhSUVVGSlFTeE5RVUZOVFN4alFVRk9MRU5CUVhGQ1JDeEhRVUZ5UWl4RFFVRktMRVZCUVN0Q08wRkJRemRDTEZWQlFVMUZMRkZCUVZGUUxFMUJRVTFMTEVkQlFVNHNRMEZCWkRzN1FVRkZRU3hqUVVGUlFTeEhRVUZTTzBGQlEwRXNZVUZCU3l4UlFVRk1PMEZCUTBFc1lVRkJTeXhUUVVGTU8wRkJRMFZFTEhsQ1FVRmxMRWxCUVdZN1FVRkRRVVlzTUVKQlFXZENSeXhIUVVGb1FpeEpRVUYxUWxRc1owSkJRV2RDVnl4TFFVRm9RaXhGUVVGMVFsUXNUVUZCZGtJc1EwRkJka0k3UVVGRFFUdEJRVU5HTEdGQlFVc3NVVUZCVER0QlFVTkZSeXhwUWtGQlR5eHRRa0ZCVUN4SlFVRTRRa3dzWjBKQlFXZENMRU5CUVVOWExFdEJRV3BDTEVWQlFYZENWQ3hOUVVGNFFpeERRVUU1UWp0QlFVTkJPMEZCUTBZN1FVRkRSVWNzYVVKQlFVOUpMRWRCUVZBc1NVRkJZMFVzUzBGQlpEdEJRVlpHTzBGQldVUTdRVUZEUmpzN1FVRkZSQ3hOUVVGSlNDeFpRVUZLTEVWQlFXdENPMEZCUTJoQ1NDeFhRVUZQTEd0Q1FVRlFMRWxCUVRaQ1F5eG5Ra0ZCWjBKS0xFMUJRV2hDTEVkQlFYbENMRWRCUVhwQ0xFZEJRU3RDU1N4blFrRkJaMEpETEU5QlFUVkZPMEZCUTBRN08wRkJSVVFzVTBGQlQwWXNUVUZCVUR0QlFVTkVMRU1pTENKbWFXeGxJam9pWW5WcGJHUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNCRGIyNTJaWEowSUhCbGNtTmxiblJoWjJVZ2RHOGdjR2w0Wld4elhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCbGNtTmxiblJoWjJVZ2IyWWdkRzkwWVd3Z2JHVnVaM1JvWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZHOTBZV3dnYkdWdVozUm9YRzRxTDF4dVkyOXVjM1FnY0dWeVkyVnVkRlJ2VUdsNFpXeHpJRDBnS0hCbGNtTmxiblFzSUd4bGJtZDBhQ2tnUFQ0Z0tIQmhjbk5sUm14dllYUW9jR1Z5WTJWdWRDa2dMeUF4TURBcElDb2diR1Z1WjNSb0lDc2dKM0I0Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tITjBZWFJsTENCc1pXNW5kR2dwSUQwK0lIdGNiaUFnWTI5dWMzUWdjM1I1YkdWeklEMGdlMzA3WEc0Z0lHTnZibk4wSUdSaGMyaEJjbkpoZVZOMGVXeGxjeUE5SUh0Y2JpQWdJQ0JzWlc1bmRHZzZJREFzWEc0Z0lDQWdjM0JoWTJsdVp6b2diR1Z1WjNSb0lDc2dKM0I0SjF4dUlDQjlPMXh1SUNCc1pYUWdhR0Z6UkdGemFFRnljbUY1SUQwZ1ptRnNjMlU3WEc1Y2JpQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlITjBZWFJsS1NCN1hHNGdJQ0FnYVdZZ0tITjBZWFJsTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnYzNSaGRHVmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ2MzZHBkR05vSUNoclpYa3BJSHRjYmlBZ0lDQWdJR05oYzJVZ0oyeGxibWQwYUNjNlhHNGdJQ0FnSUNCallYTmxJQ2R6Y0dGamFXNW5KenBjYmlBZ0lDQWdJQ0FnYUdGelJHRnphRUZ5Y21GNUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ1pHRnphRUZ5Y21GNVUzUjViR1Z6VzJ0bGVWMGdQU0J3WlhKalpXNTBWRzlRYVhobGJITW9kbUZzZFdVc0lHeGxibWQwYUNrN1hHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnWTJGelpTQW5iMlptYzJWMEp6cGNiaUFnSUNBZ0lDQWdjM1I1YkdWeld5ZHpkSEp2YTJVdFpHRnphRzltWm5ObGRDZGRJRDBnY0dWeVkyVnVkRlJ2VUdsNFpXeHpLQzEyWVd4MVpTd2diR1Z1WjNSb0tUdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNCa1pXWmhkV3gwT2x4dUlDQWdJQ0FnSUNCemRIbHNaWE5iYTJWNVhTQTlJSFpoYkhWbE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHbG1JQ2hvWVhORVlYTm9RWEp5WVhrcElIdGNiaUFnSUNCemRIbHNaWE5iSjNOMGNtOXJaUzFrWVhOb1lYSnlZWGtuWFNBOUlHUmhjMmhCY25KaGVWTjBlV3hsY3k1c1pXNW5kR2dnS3lBbklDY2dLeUJrWVhOb1FYSnlZWGxUZEhsc1pYTXVjM0JoWTJsdVp6dGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnpkSGxzWlhNN1hHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyZXJzL3N2Zy1wYXRoL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==